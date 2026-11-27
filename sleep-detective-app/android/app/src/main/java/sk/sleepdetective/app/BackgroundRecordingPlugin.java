package sk.sleepdetective.app;

import android.Manifest;
import android.content.ComponentName;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.PowerManager;
import android.provider.Settings;
import android.util.Base64;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import androidx.activity.result.ActivityResult;
import androidx.core.content.ContextCompat;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

/**
 * Most medzi appkou (JavaScript) a službou RecordingService.
 *   BackgroundRecording.start({ title, text, stop, channel, capture, rec, keep, full, kbps }) – spustí službu na popredí
 *                                (záznam pokračuje aj so zamknutou obrazovkou); texty upozornenia sú v jazyku appky.
 *                                capture: true = služba sama počúva mikrofón (NightCapture); rec = čas spustenia
 *                                záznamu v appke, keep = ukladať nahrávky (inak sa zvuk nedrží ani v pamäti), full = nahrávať celú noc, kbps = kvalita nahrávok. Bez povolenia
 *                                mikrofónu skončí chybou "mic".
 *   BackgroundRecording.status() – { capture, running, rec, full, error }: či služba počúva (po obnovení WebView)
 *   BackgroundRecording.drain({ from }) – snímky od indexu from: { from, t[], db[], low[], sr, running, error,
 *                                screen, segs[{ t, end }] }
 *   BackgroundRecording.clip({ from, to }) – ukážka zvuku (ms) ako { data: base64 .m4a, mime }
 *   BackgroundRecording.segment({ t }) – hotová časť celej noci { data, mime }; súbor sa potom zmaže
 *   BackgroundRecording.finish() – ukončí počúvanie (uzavrie časť celej noci), výsledky ostanú do stop()
 *   BackgroundRecording.stop()   – zastaví službu a zmaže nevyzdvihnuté súbory
 *   udalosť "stop"               – používateľ ťukol na „Ukončiť záznam“ v upozornení
 *   BackgroundRecording.power()  – { ignoring, vendor }: či je appka vyňatá zo šetrenia batérie, výrobca telefónu
 *   BackgroundRecording.askBattery()    – systémové okno „Povoliť beh na pozadí“ (vyňatie z optimalizácie batérie)
 *   BackgroundRecording.vendorSettings() – nastavenia batérie/autoštartu výrobcu (Xiaomi, Huawei, Oppo, Vivo,
 *                                Samsung…), inak informácie o appke; vráti sa po návrate používateľa do appky
 *
 * Niektorí výrobcovia (najmä Xiaomi, Huawei, Oppo, Vivo) uspia appku pri zhasnutej obrazovke aj so službou
 * na popredí. Zakázať im to appka nemôže, vie len používateľa zaviesť na správne miesto v nastaveniach.
 */
@CapacitorPlugin(
    name = "BackgroundRecording",
    permissions = {
        @Permission(alias = "notifications", strings = { Manifest.permission.POST_NOTIFICATIONS }),
        @Permission(alias = "microphone", strings = { Manifest.permission.RECORD_AUDIO })
    }
)
public class BackgroundRecordingPlugin extends Plugin {
    private static BackgroundRecordingPlugin instance;

    @Override
    public void load() {
        instance = this;
    }

    /** Pošle appke žiadosť o ukončenie záznamu. Vráti false, ak appka nepočúva. */
    static boolean requestStop() {
        BackgroundRecordingPlugin p = instance;
        if (p == null || !p.hasListeners("stop")) return false;
        p.notifyListeners("stop", new JSObject());
        return true;
    }

    @PluginMethod
    public void start(PluginCall call) {
        next(call);
    }

    // Postupne si vypýtame povolenia: upozornenia (Android 13+; bez nich služba beží, len upozornenie nevidno)
    // a mikrofón (keď má počúvať služba). Každé najviac raz za jedno spustenie.
    private void next(PluginCall call) {
        JSObject d = call.getData();
        if (Build.VERSION.SDK_INT >= 33 && !d.has("_askedN") && getPermissionState("notifications") != PermissionState.GRANTED) {
            d.put("_askedN", true);
            requestPermissionForAlias("notifications", call, "afterPermission");
            return;
        }
        if (call.getBoolean("capture", false) && getPermissionState("microphone") != PermissionState.GRANTED) {
            if (d.has("_askedM")) { call.reject("Microphone permission denied", "mic"); return; }
            d.put("_askedM", true);
            requestPermissionForAlias("microphone", call, "afterPermission");
            return;
        }
        startService(call);
    }

    @PermissionCallback
    private void afterPermission(PluginCall call) {
        next(call);
    }

    private void startService(PluginCall call) {
        try {
            RecordingService.failure = null;
            // texty upozornenia posiela appka v zvolenom jazyku (inak anglické predvolené)
            Intent i = new Intent(getContext(), RecordingService.class)
                .putExtra(RecordingService.EXTRA_TITLE, call.getString("title"))
                .putExtra(RecordingService.EXTRA_TEXT, call.getString("text"))
                .putExtra(RecordingService.EXTRA_STOP, call.getString("stop"))
                .putExtra(RecordingService.EXTRA_CHANNEL, call.getString("channel"));
            boolean cap = call.getBoolean("capture", false);
            if (cap) {
                Long rec = num(call, "rec");
                Integer kbps = call.getInt("kbps");
                i.putExtra(RecordingService.EXTRA_CAPTURE, true)
                    .putExtra(RecordingService.EXTRA_REC, rec == null ? System.currentTimeMillis() : rec.longValue())
                    .putExtra(RecordingService.EXTRA_KEEP, call.getBoolean("keep", false))
                    .putExtra(RecordingService.EXTRA_FULL, call.getBoolean("full", false))
                    .putExtra(RecordingService.EXTRA_BITRATE, (kbps == null || kbps <= 0 ? 64 : Math.min(kbps, 192)) * 1000);
            }
            ContextCompat.startForegroundService(getContext(), i);
            NightWebView.setKeepAwake(true);   // stránka nezamrzne ani pri zhasnutej obrazovke
            JSObject r = new JSObject();
            r.put("capture", cap);
            call.resolve(r);
        } catch (Exception e) {
            call.reject("Background recording could not be started", e);
        }
    }

    @PluginMethod
    public void power(PluginCall call) {
        JSObject r = new JSObject();
        r.put("ignoring", ignoringBattery());
        r.put("vendor", Build.MANUFACTURER == null ? "" : Build.MANUFACTURER.toLowerCase());
        call.resolve(r);
    }

    private boolean ignoringBattery() {
        PowerManager pm = (PowerManager) getContext().getSystemService(android.content.Context.POWER_SERVICE);
        return pm != null && pm.isIgnoringBatteryOptimizations(getContext().getPackageName());
    }

    @PluginMethod
    public void askBattery(PluginCall call) {
        if (ignoringBattery()) { power(call); return; }
        Intent i = new Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS, Uri.parse("package:" + getContext().getPackageName()));
        if (!canOpen(i)) i = new Intent(Settings.ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS);
        if (!canOpen(i)) { power(call); return; }
        startActivityForResult(call, i, "afterSettings");
    }

    @PluginMethod
    public void vendorSettings(PluginCall call) {
        String pkg = getContext().getPackageName();
        String label = getContext().getApplicationInfo().loadLabel(getContext().getPackageManager()).toString();
        Intent[] tries = {
            // Xiaomi / Redmi / POCO: šetrič batérie pre appku („Bez obmedzení“), potom automatické spustenie
            new Intent("miui.intent.action.HIDDEN_APPS_CONFIG_ACTIVITY").putExtra("package_name", pkg).putExtra("package_label", label),
            component("com.miui.powerkeeper", "com.miui.powerkeeper.ui.HiddenAppsConfigActivity").putExtra("package_name", pkg).putExtra("package_label", label),
            component("com.miui.securitycenter", "com.miui.permcenter.autostart.AutoStartManagementActivity"),
            // Huawei / Honor
            component("com.huawei.systemmanager", "com.huawei.systemmanager.startupmgr.ui.StartupNormalAppListActivity"),
            component("com.huawei.systemmanager", "com.huawei.systemmanager.optimize.process.ProtectActivity"),
            // Oppo / Realme / OnePlus (ColorOS)
            component("com.coloros.safecenter", "com.coloros.safecenter.permission.startup.StartupAppListActivity"),
            component("com.oplus.battery", "com.oplus.powermanager.fuelgaue.PowerUsageModelActivity"),
            // Vivo / iQOO
            component("com.vivo.permissionmanager", "com.vivo.permissionmanager.activity.BgStartUpManagerActivity"),
            component("com.iqoo.secure", "com.iqoo.secure.ui.phoneoptimize.BgStartUpManager"),
            // Samsung: obmedzenia batérie appiek
            component("com.samsung.android.lool", "com.samsung.android.sm.battery.ui.BatteryActivity"),
            // ostatní: informácie o appke (Batéria → Bez obmedzení)
            new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.parse("package:" + pkg))
        };
        for (Intent i : tries) {
            if (!canOpen(i)) continue;
            try {
                startActivityForResult(call, i, "afterSettings");
                return;
            } catch (Exception e) {
                // nepovolená obrazovka výrobcu: skúsime ďalšiu
            }
        }
        power(call);
    }

    @ActivityCallback
    private void afterSettings(PluginCall call, ActivityResult result) {
        if (call != null) power(call);
    }

    private static Intent component(String pkg, String cls) {
        return new Intent().setComponent(new ComponentName(pkg, cls));
    }

    private boolean canOpen(Intent i) {
        PackageManager pm = getContext().getPackageManager();
        return i.resolveActivity(pm) != null;
    }

    @PluginMethod
    public void status(PluginCall call) {
        NightCapture c = RecordingService.capture;
        JSObject r = new JSObject();
        r.put("capture", c != null);
        if (c != null) {
            r.put("running", c.isRunning());
            r.put("rec", c.recStart);
            r.put("full", c.full);
            r.put("error", c.error);
            r.put("busyMs", c.busyNs / 1000000);
            r.put("readMs", c.readNs / 1000000);
            r.put("reads", c.reads);
        }
        call.resolve(r);
    }

    @PluginMethod
    public void drain(PluginCall call) {
        NightCapture c = RecordingService.capture;
        if (c == null) { call.reject("Not capturing", RecordingService.failure != null ? RecordingService.failure : "none"); return; }
        Integer from = call.getInt("from");
        NightCapture.Ticks k = c.ticks(from == null ? 0 : from);
        JSArray t = new JSArray(), db = new JSArray(), low = new JSArray(), segs = new JSArray();
        for (int i = 0; i < k.t.length; i++) {
            t.put(k.t[i]);
            db.put((Object) (Math.round(k.db[i] * 100) / 100.0));   // put(Object) nehádže výnimku
            low.put((Object) (Math.round(k.low[i] * 10000) / 10000.0));
        }
        for (long[] g : c.segments()) {
            JSObject o = new JSObject();
            o.put("t", g[0]);
            o.put("end", g[1]);
            segs.put(o);
        }
        PowerManager pm = (PowerManager) getContext().getSystemService(android.content.Context.POWER_SERVICE);
        JSObject r = new JSObject();
        r.put("from", k.from);
        r.put("t", t);
        r.put("db", db);
        r.put("low", low);
        r.put("sr", c.sampleRate);
        r.put("running", c.isRunning());
        r.put("error", c.error);
        r.put("screen", pm == null || pm.isInteractive());
        r.put("segs", segs);
        call.resolve(r);
    }

    @PluginMethod
    public void clip(PluginCall call) {
        NightCapture c = RecordingService.capture;
        Long from = num(call, "from"), to = num(call, "to");
        if (c == null || from == null || to == null || to - from > 120000) { call.reject("No clip", "none"); return; }
        new Thread(() -> {
            // koniec ukážky ešte nemusí byť počuť: chvíľu počkáme
            long until = to.longValue(), wait = System.currentTimeMillis() + Math.max(0, until - System.currentTimeMillis()) + 3000;
            while (c.isRunning() && c.heardUntil() < until && System.currentTimeMillis() < wait) android.os.SystemClock.sleep(100);
            short[] pcm = c.pcm(from.longValue(), until);
            if (pcm == null || pcm.length < NightCapture.CLIP_SR / 2) { call.reject("No sound", "none"); return; }
            File f = new File(RecordingService.captureDir(getContext()), "clip-" + from.longValue() + "-" + System.nanoTime() + ".m4a");
            try {
                AacWriter w = new AacWriter(f, NightCapture.CLIP_SR, c.bitRate);
                w.write(pcm, 0, pcm.length);
                if (!w.finish()) { call.reject("Encoding failed", "codec"); return; }
                call.resolve(fileResult(f));
            } catch (Exception e) {
                call.reject("Encoding failed", "codec");
            } finally {
                //noinspection ResultOfMethodCallIgnored
                f.delete();
            }
        }, "SleepDetective-clip").start();
    }

    @PluginMethod
    public void segment(PluginCall call) {
        NightCapture c = RecordingService.capture;
        Long t = num(call, "t");
        if (c == null || t == null) { call.reject("No segment", "none"); return; }
        File f = NightCapture.segFile(RecordingService.captureDir(getContext()), t.longValue());
        try {
            JSObject r = fileResult(f);
            c.segmentTaken(t.longValue());
            //noinspection ResultOfMethodCallIgnored
            f.delete();
            call.resolve(r);
        } catch (Exception e) {
            call.reject("No segment", "none");
        }
    }

    // Čas v ms (JSON ho prinesie ako Long); PluginCall.getDouble vracia pre Long null.
    private static Long num(PluginCall call, String key) {
        Object v = call.getData().opt(key);
        return v instanceof Number && !Double.isNaN(((Number) v).doubleValue()) ? ((Number) v).longValue() : null;
    }

    private static JSObject fileResult(File f) throws IOException {
        byte[] b = new byte[(int) f.length()];
        try (FileInputStream in = new FileInputStream(f)) {
            int off = 0;
            while (off < b.length) { int n = in.read(b, off, b.length - off); if (n < 0) break; off += n; }
        }
        JSObject r = new JSObject();
        r.put("data", Base64.encodeToString(b, Base64.NO_WRAP));
        r.put("mime", "audio/mp4");
        return r;
    }

    @PluginMethod
    public void finish(PluginCall call) {
        NightCapture c = RecordingService.capture;
        if (c == null) { call.resolve(); return; }
        new Thread(() -> { c.halt(); call.resolve(); }, "SleepDetective-finish").start();
    }

    @PluginMethod
    public void stop(PluginCall call) {
        getContext().stopService(new Intent(getContext(), RecordingService.class));
        NightWebView.setKeepAwake(false);
        call.resolve();
    }
}
