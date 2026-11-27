package sk.sleepdetective.app;

import android.annotation.SuppressLint;
import android.media.AudioFormat;
import android.media.AudioRecord;
import android.media.MediaRecorder;
import android.os.SystemClock;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

/**
 * Nočné počúvanie priamo v procese appky (bez WebView).
 *
 * Číta mikrofón (AudioRecord, 16 kHz) a každých 100 ms zvuku spočíta z posledných 32 ms hlasitosť a podiel
 * nízkych frekvencií – rovnaké výpočty ako sound.js (levelDb, spectrumDb, lowRatio). Výsledky si drží celú noc
 * (asi 0,6 MB za hodinu); appka ich vo WebView vyzdvihuje po dávkach a spracuje detektorom.
 *
 * Prečo nie vo WebView: HyperOS (Xiaomi) pri zhasnutej obrazovke ukončí proces WebView, ktorý minie viac
 * ako 2 % procesora („ScreenOffCPUCheckKill“), a samotné odovzdávanie zvuku z mikrofónu do WebView ich
 * stojí okolo 3 %. Proces appky je vyňatý zo šetrenia batérie, proces WebView (izolovaný) nie.
 *
 * Pre ukážky drží posledné 4 minúty zvuku (16 kHz) v pamäti; ukážku z nich zakóduje do AAC až na požiadanie.
 * Pri nahrávaní celej noci zapisuje 10-minútové časti priamo do súborov .m4a v cache (appka si ich vyzdvihne).
 * Nič sa neposiela mimo telefónu.
 */
final class NightCapture implements Runnable {
    static final int FFT_N = 2048, CLIP_SR = 16000, RING_SEC = 240;
    static final long SEG_MS = 10 * 60000L;
    private static final int MAX_TICKS = 16 * 3600 * 10;   // 16 hodín po 100 ms

    final long recStart;   // čas spustenia záznamu v appke (rec.start) – podľa neho appka po reštarte nadviaže
    final boolean full;
    final boolean keep;   // false = nahrávky sa neukladajú: zvuk sa ani na chvíľu nedrží v pamäti
    final int bitRate;
    private final File dir;
    private volatile boolean running = true;
    private Thread thread;
    volatile String error = null;
    volatile int sampleRate = 48000;
    volatile long busyNs = 0;   // čas procesora strávený výpočtom (na meranie záťaže)
    volatile long readNs = 0, reads = 0;   // čas procesora v AudioRecord.read a počet volaní

    // výsledky snímok (t v ms, hlasitosť v dBFS, podiel nízkych frekvencií)
    private long[] tt = new long[36000];
    private float[] tdb = new float[36000], tlow = new float[36000];
    private int tn = 0;

    // posledné minúty zvuku pre ukážky (16 kHz); anchorT = čas konca posledného bloku, anchorN = počet vzoriek
    private final short[] ring = new short[CLIP_SR * RING_SEC];
    private long anchorN = 0, anchorT = 0;

    // časti celej noci
    private AacWriter seg;
    private long segT;
    private File segFile;
    private final List<long[]> segsDone = new ArrayList<>();   // { t, end }

    NightCapture(File dir, long recStart, boolean keep, boolean full, int bitRate) {
        this.dir = dir;
        this.recStart = recStart;
        this.keep = keep;
        this.full = keep && full;
        this.bitRate = bitRate;
    }

    void start() {
        thread = new Thread(this, "SleepDetective-capture");
        thread.setPriority(Thread.MAX_PRIORITY);
        thread.start();
    }

    /** Zastaví čítanie mikrofónu a uzavrie rozpísanú časť celej noci. Výsledky a pamäť ukážok ostanú. */
    void halt() {
        running = false;
        Thread t = thread;
        if (t != null && t != Thread.currentThread()) {
            try { t.join(3000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
        }
    }

    boolean isRunning() { return running && thread != null && thread.isAlive(); }

    static File segFile(File dir, long t) { return new File(dir, "full-" + t + ".m4a"); }

    @SuppressLint("MissingPermission")   // povolenie mikrofónu overí plugin pred spustením služby
    @Override
    public void run() {
        AudioRecord ar = null;
        int sr = 48000;
        // 16 kHz: najmenej práce (a ukážky sú aj tak 16 kHz); 48/44,1 kHz len pre telefóny, ktoré 16 kHz nevedia
        for (int rate : new int[] { CLIP_SR, 48000, 44100 }) {
            int min = AudioRecord.getMinBufferSize(rate, AudioFormat.CHANNEL_IN_MONO, AudioFormat.ENCODING_PCM_16BIT);
            if (min <= 0) continue;
            try {
                AudioRecord a = new AudioRecord(MediaRecorder.AudioSource.MIC, rate, AudioFormat.CHANNEL_IN_MONO,
                    AudioFormat.ENCODING_PCM_16BIT, Math.max(min, rate * 2 * 4));   // 4 s rezerva
                if (a.getState() == AudioRecord.STATE_INITIALIZED) { ar = a; sr = rate; break; }
                a.release();
            } catch (RuntimeException e) { /* skúsime inú frekvenciu */ }
        }
        if (ar == null) { error = "init"; running = false; return; }
        sampleRate = sr;
        try {
            ar.startRecording();
            if (ar.getRecordingState() != AudioRecord.RECORDSTATE_RECORDING) { error = "busy"; running = false; return; }
            loop(ar, sr);
        } catch (RuntimeException e) {
            error = "read";
        } finally {
            try { ar.stop(); } catch (RuntimeException e) { /* nič */ }
            ar.release();
            closeSeg(System.currentTimeMillis());
            running = false;
        }
    }

    /**
     * Okno analýzy: 512 vzoriek pri 16 kHz (32 ms, frekvencie po 31 Hz), 2048 pri 44,1/48 kHz (43–46 ms, po 23 Hz) –
     * podobný úsek zvuku ako v sound.js (AnalyserNode 2048 vzoriek pri 48 kHz). Hlasitosť aj podiel nízkych
     * frekvencií sa počítajú z posledného okna každého 100 ms bloku.
     */
    static int fftSize(int sr) { return sr <= CLIP_SR ? 512 : FFT_N; }

    /**
     * Mikrofón vyberáme raz za sekundu (neblokujúce čítanie všetkého, čo sa nazbieralo) a spracujeme naraz
     * desať 100 ms snímok. Každé volanie AudioRecord.read stojí okolo 1 ms procesora – pri desiatich za sekundu
     * to bolo viac než celý výpočet. Čas snímky sa dopočíta podľa toho, koľko zvuku po nej ešte prišlo.
     */
    private void loop(AudioRecord ar, int sr) {
        final int step = Math.round(sr / 10f), n = fftSize(sr);
        final boolean same = sr == CLIP_SR;
        short[] big = new short[step * 40];   // 4 s rezerva (rovnako ako vyrovnávacia pamäť AudioRecord)
        int have = 0;
        float[] td = new float[n];
        Fft fft = new Fft(n);
        short[] down = new short[step + 8];
        long acc = 0; int cnt = 0, phase = 0;   // zníženie frekvencie na 16 kHz (priemer vzoriek)
        long next = SystemClock.uptimeMillis();
        while (running) {
            next += 1000;
            long w = next - SystemClock.uptimeMillis();
            if (w > 0) SystemClock.sleep(w); else next = SystemClock.uptimeMillis();
            if (!running) break;
            long c0 = android.os.Debug.threadCpuTimeNanos();
            int r;
            while (have < big.length && (r = ar.read(big, have, big.length - have, AudioRecord.READ_NON_BLOCKING)) != 0) {
                if (r < 0) { error = "read"; running = false; return; }
                have += r;
                reads++;
            }
            readNs += android.os.Debug.threadCpuTimeNanos() - c0;
            long now = System.currentTimeMillis();
            int ticks = have / step;
            for (int k = 0; k < ticks; k++) {
                int off = k * step;
                long t = now - (long) (have - off - step) * 1000 / sr;
                int dn;
                short[] pcm;
                if (same) { pcm = big; dn = step; }
                else {
                    dn = 0;
                    for (int i = off; i < off + step; i++) {
                        acc += big[i]; cnt++; phase += CLIP_SR;
                        if (phase >= sr) { phase -= sr; down[dn++] = (short) (acc / cnt); acc = 0; cnt = 0; }
                    }
                    pcm = down;
                }
                int po = same ? off : 0;
                long t0 = android.os.Debug.threadCpuTimeNanos();
                for (int i = 0, o = off + step - n; i < n; i++) td[i] = big[o + i] / 32768f;   // posledných n vzoriek snímky
                float db = levelDb(td);
                float low = fft.lowRatio(td, sr);
                busyNs += android.os.Debug.threadCpuTimeNanos() - t0;
                synchronized (this) {
                    if (keep) {
                        int at = (int) (anchorN % ring.length), first = Math.min(dn, ring.length - at);
                        System.arraycopy(pcm, po, ring, at, first);
                        if (first < dn) System.arraycopy(pcm, po + first, ring, 0, dn - first);
                    }
                    anchorN += dn;
                    anchorT = t;
                    if (tn < MAX_TICKS) {
                        if (tn == tt.length) grow();
                        tt[tn] = t; tdb[tn] = db; tlow[tn] = low; tn++;
                    }
                }
                if (full) writeSeg(pcm, po, dn, t);
            }
            int used = ticks * step;
            System.arraycopy(big, used, big, 0, have - used);
            have -= used;
        }
    }

    private void grow() {
        int n = Math.min(MAX_TICKS, tt.length * 2);
        long[] a = new long[n]; float[] b = new float[n], c = new float[n];
        System.arraycopy(tt, 0, a, 0, tn); System.arraycopy(tdb, 0, b, 0, tn); System.arraycopy(tlow, 0, c, 0, tn);
        tt = a; tdb = b; tlow = c;
    }

    private void writeSeg(short[] s, int off, int n, long now) {
        try {
            if (seg != null && now - segT >= SEG_MS) closeSeg(now);
            if (seg == null) {
                segT = now - Math.round(n * 1000.0 / CLIP_SR);
                segFile = segFile(dir, segT);
                seg = new AacWriter(segFile, CLIP_SR, bitRate);
            }
            seg.write(s, off, n);
        } catch (Exception e) {
            seg = null;   // kodek nejde: celá noc sa neuloží, počúvanie a ukážky bežia ďalej
        }
    }

    private void closeSeg(long end) {
        AacWriter w = seg;
        seg = null;
        if (w == null) return;
        boolean ok = w.finish() && end - segT >= 1000;
        synchronized (this) {
            if (ok) segsDone.add(new long[] { segT, end });
            else if (segFile != null) segFile.delete();
        }
    }

    /** Snímky od indexu from (appka si pamätá, koľko už spracovala). */
    synchronized Ticks ticks(int from) {
        Ticks r = new Ticks();
        int f = Math.max(0, Math.min(from, tn));
        int n = tn - f;
        r.from = f;
        r.t = new long[n]; r.db = new float[n]; r.low = new float[n];
        System.arraycopy(tt, f, r.t, 0, n); System.arraycopy(tdb, f, r.db, 0, n); System.arraycopy(tlow, f, r.low, 0, n);
        return r;
    }

    synchronized List<long[]> segments() { return new ArrayList<>(segsDone); }

    synchronized void segmentTaken(long t) {
        for (int i = 0; i < segsDone.size(); i++) if (segsDone.get(i)[0] == t) { segsDone.remove(i); break; }
    }

    /** Čas, dokedy má pamäť ukážok zvuk (ms). */
    synchronized long heardUntil() { return anchorT; }

    /** Zvuk 16 kHz od from do to (ms); null, ak už v pamäti nie je. */
    synchronized short[] pcm(long from, long to) {
        if (!keep || anchorN == 0 || to <= from) return null;
        long endIdx = anchorN - (anchorT - Math.min(to, anchorT)) * CLIP_SR / 1000;
        long startIdx = anchorN - (anchorT - from) * CLIP_SR / 1000;
        startIdx = Math.max(startIdx, Math.max(0, anchorN - ring.length));
        if (endIdx <= startIdx) return null;
        short[] out = new short[(int) (endIdx - startIdx)];
        for (int i = 0; i < out.length; i++) out[i] = ring[(int) ((startIdx + i) % ring.length)];
        return out;
    }

    static final class Ticks { int from; long[] t; float[] db, low; }

    // ---- rovnaké výpočty ako sound.js ----

    static float levelDb(float[] s) {
        double sum = 0;
        for (float v : s) sum += v * v;
        double rms = Math.sqrt(sum / s.length);
        return rms > 0 ? (float) (20 * Math.log10(rms)) : -100f;
    }


    /** FFT s Blackmanovým oknom ako AnalyserNode / sound.js spectrumDb(). */
    static final class Fft {
        final int n;
        final float[] win, cos, sin;
        final int[] rev;
        final double[] re, im;

        Fft(int n) {
            this.n = n;
            win = new float[n]; cos = new float[n / 2]; sin = new float[n / 2]; rev = new int[n];
            re = new double[n]; im = new double[n];
            for (int i = 0; i < n; i++) win[i] = (float) (0.42 - 0.5 * Math.cos(2 * Math.PI * i / n) + 0.08 * Math.cos(4 * Math.PI * i / n));
            for (int i = 0; i < n / 2; i++) { cos[i] = (float) Math.cos(2 * Math.PI * i / n); sin[i] = (float) -Math.sin(2 * Math.PI * i / n); }
            int bits = Integer.numberOfTrailingZeros(n);
            for (int i = 0; i < n; i++) { int r = 0; for (int b = 0; b < bits; b++) r |= ((i >> b) & 1) << (bits - 1 - b); rev[i] = r; }
        }

        /**
         * Podiel energie 60–500 Hz v pásme 60–4000 Hz – to isté ako lowRatio(spectrumDb(...)) v sound.js,
         * len bez logaritmu a mocniny pre každú frekvenciu: výkon v dB sa tam aj tak hneď mení späť na výkon
         * (10^(dB/10) = |X/N|²); vrchná hranica −200 dB zodpovedá výkonu 1e-20. Počíta len potrebné frekvencie.
         */
        float lowRatio(float[] s, int sampleRate) {
            for (int i = 0; i < n; i++) { re[rev[i]] = s[i] * win[i]; im[rev[i]] = 0; }
            for (int size = 2; size <= n; size <<= 1) {
                int half = size >> 1, step = n / size;
                for (int i = 0; i < n; i += size) {
                    for (int j = 0, k = 0; j < half; j++, k += step) {
                        int a = i + j, b = a + half;
                        double tr = re[b] * cos[k] - im[b] * sin[k], ti = re[b] * sin[k] + im[b] * cos[k];
                        re[b] = re[a] - tr; im[b] = im[a] - ti; re[a] += tr; im[a] += ti;
                    }
                }
            }
            double hz = (double) sampleRate / n, lo = 0, all = 0, nn = (double) n * n;
            for (int i = (int) Math.ceil(60 / hz); i < n / 2 && i * hz <= 4000; i++) {
                double p = Math.max(1e-20, (re[i] * re[i] + im[i] * im[i]) / nn);
                all += p;
                if (i * hz <= 500) lo += p;
            }
            return all > 0 ? (float) (lo / all) : 0f;
        }
    }
}
