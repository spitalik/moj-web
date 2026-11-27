package sk.sleepdetective.app;

import android.media.MediaCodec;
import android.media.MediaCodecInfo;
import android.media.MediaFormat;
import android.media.MediaMuxer;
import java.io.File;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

/**
 * Zapisuje mono 16-bit PCM ako AAC do súboru .m4a (MediaCodec + MediaMuxer, súčasť Androidu).
 * Používa sa pre ukážky zvukov a pre časti celej noci; WebView ich prehrá ako audio/mp4.
 */
final class AacWriter {
    private final MediaCodec codec;
    private final MediaMuxer mux;
    private final int sampleRate;
    private final MediaCodec.BufferInfo info = new MediaCodec.BufferInfo();
    private int track = -1;
    private boolean started = false;
    private long samples = 0;

    AacWriter(File file, int sampleRate, int bitRate) throws IOException {
        this.sampleRate = sampleRate;
        MediaFormat fmt = MediaFormat.createAudioFormat(MediaFormat.MIMETYPE_AUDIO_AAC, sampleRate, 1);
        fmt.setInteger(MediaFormat.KEY_AAC_PROFILE, MediaCodecInfo.CodecProfileLevel.AACObjectLC);
        fmt.setInteger(MediaFormat.KEY_BIT_RATE, bitRate);
        fmt.setInteger(MediaFormat.KEY_MAX_INPUT_SIZE, 16384);
        codec = MediaCodec.createEncoderByType(MediaFormat.MIMETYPE_AUDIO_AAC);
        try {
            codec.configure(fmt, null, null, MediaCodec.CONFIGURE_FLAG_ENCODE);
            codec.start();
            mux = new MediaMuxer(file.getPath(), MediaMuxer.OutputFormat.MUXER_OUTPUT_MPEG_4);
        } catch (IOException | RuntimeException e) {
            codec.release();
            throw e;
        }
    }

    long samples() { return samples; }

    void write(short[] s, int off, int len) {
        int tries = 0;
        while (len > 0) {
            int i = codec.dequeueInputBuffer(10000);
            if (i < 0) {
                drain(false);
                if (++tries > 200) return;   // kodek neodpovedá: radšej stratiť kúsok zvuku ako zaseknúť záznam
                continue;
            }
            tries = 0;
            ByteBuffer b = codec.getInputBuffer(i);
            if (b == null) continue;
            b.clear();
            int k = Math.min(len, b.remaining() / 2);
            b.order(ByteOrder.nativeOrder()).asShortBuffer().put(s, off, k);
            codec.queueInputBuffer(i, 0, k * 2, samples * 1000000L / sampleRate, 0);
            samples += k; off += k; len -= k;
            drain(false);
        }
    }

    /** Uzavrie súbor. Vráti false, ak sa nič nezapísalo (súbor je neplatný). */
    boolean finish() {
        boolean ok = false;
        try {
            int i = -1;
            for (int t = 0; t < 200 && i < 0; t++) { i = codec.dequeueInputBuffer(10000); if (i < 0) drain(false); }
            if (i >= 0) codec.queueInputBuffer(i, 0, 0, samples * 1000000L / sampleRate, MediaCodec.BUFFER_FLAG_END_OF_STREAM);
            drain(true);
            ok = started;
        } catch (RuntimeException e) {
            ok = false;
        } finally {
            try { codec.stop(); } catch (RuntimeException e) { /* nič */ }
            codec.release();
            try { if (started) mux.stop(); } catch (RuntimeException e) { ok = false; }
            try { mux.release(); } catch (RuntimeException e) { /* nič */ }
        }
        return ok;
    }

    private void drain(boolean eos) {
        int idle = 0;
        while (true) {
            int o = codec.dequeueOutputBuffer(info, eos ? 10000 : 0);
            if (o == MediaCodec.INFO_TRY_AGAIN_LATER) {
                if (!eos || ++idle > 100) return;
                continue;
            }
            if (o == MediaCodec.INFO_OUTPUT_FORMAT_CHANGED) {
                if (!started) { track = mux.addTrack(codec.getOutputFormat()); mux.start(); started = true; }
                continue;
            }
            if (o < 0) continue;
            ByteBuffer ob = codec.getOutputBuffer(o);
            if ((info.flags & MediaCodec.BUFFER_FLAG_CODEC_CONFIG) != 0) info.size = 0;
            if (ob != null && info.size > 0 && started) {
                ob.position(info.offset);
                ob.limit(info.offset + info.size);
                mux.writeSampleData(track, ob, info);
            }
            codec.releaseOutputBuffer(o, false);
            if ((info.flags & MediaCodec.BUFFER_FLAG_END_OF_STREAM) != 0) return;
        }
    }
}
