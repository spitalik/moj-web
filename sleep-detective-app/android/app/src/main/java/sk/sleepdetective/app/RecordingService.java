package sk.sleepdetective.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Intent;
import android.content.pm.ServiceInfo;
import android.os.Build;
import android.os.IBinder;
import android.os.PowerManager;
import java.io.File;
import androidx.core.app.NotificationCompat;
import androidx.core.app.ServiceCompat;

/**
 * Služba na popredí počas nočného záznamu.
 *
 * Android dovolí appke používať mikrofón so zamknutou obrazovkou alebo na pozadí len vtedy, keď beží
 * služba typu „microphone“ so stálym upozornením v lište. Používateľ tak vždy vidí, že mikrofón je zapnutý.
 * Služba drží appku nažive a procesor zobudený (PARTIAL_WAKE_LOCK) a v Androide aj sama počúva (NightCapture):
 * číta mikrofón a počíta hlasitosť a spektrum, appka vo WebView si výsledky len vyzdvihuje. Keby systém
 * proces WebView ukončil, služba počúva ďalej a appka po obnovení nadviaže (MainActivity).
 */
public class RecordingService extends Service {
    static final String CHANNEL = "night-recording";
    static final int NOTIFICATION_ID = 4711;
    static final String ACTION_STOP = "sk.sleepdetective.app.STOP_RECORDING";
    static final String EXTRA_TITLE = "title", EXTRA_TEXT = "text", EXTRA_STOP = "stop", EXTRA_CHANNEL = "channel";
    static final String EXTRA_CAPTURE = "capture", EXTRA_REC = "rec", EXTRA_KEEP = "keep", EXTRA_FULL = "full", EXTRA_BITRATE = "bitrate";
    private static final long MAX_LOCK_MS = 16L * 60 * 60 * 1000;   // poistka: najviac 16 hodín

    private PowerManager.WakeLock lock;
    /** Počúvanie bežiaceho záznamu (null = appka počúva sama vo WebView alebo nič nebeží). */
    static volatile NightCapture capture;
    /** Prečo sa služba nespustila (null = v poriadku); appka potom počúva vo WebView. */
    static volatile String failure;

    static File captureDir(android.content.Context c) {
        File d = new File(c.getCacheDir(), "night");
        //noinspection ResultOfMethodCallIgnored
        d.mkdirs();
        return d;
    }

    private static void clearDir(File d) {
        File[] fs = d.listFiles();
        if (fs != null) for (File f : fs) //noinspection ResultOfMethodCallIgnored
            f.delete();
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent != null && ACTION_STOP.equals(intent.getAction())) {
            // „Ukončiť záznam“ v upozornení: záznam ukončí appka (uloží súhrn noci);
            // ak appka už nebeží, službu zastavíme sami
            if (!BackgroundRecordingPlugin.requestStop()) stopSelf();
            return START_NOT_STICKY;
        }
        String title = extra(intent, EXTRA_TITLE, "Night recording is running");
        String text = extra(intent, EXTRA_TEXT, "Sleep Detective is listening for snoring and noise. Sound stays on the phone.");
        String stopLabel = extra(intent, EXTRA_STOP, "Stop recording");
        createChannel(extra(intent, EXTRA_CHANNEL, "Night recording"));
        Intent open = new Intent(this, MainActivity.class).setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent openPi = PendingIntent.getActivity(this, 0, open, PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
        Intent stop = new Intent(this, RecordingService.class).setAction(ACTION_STOP);
        PendingIntent stopPi = PendingIntent.getService(this, 1, stop, PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
        Notification n = new NotificationCompat.Builder(this, CHANNEL)
            .setSmallIcon(R.drawable.ic_stat_recording)
            .setContentTitle(title)
            .setContentText(text)
            .setOngoing(true)
            .setOnlyAlertOnce(true)
            .setShowWhen(true)
            .setUsesChronometer(true)
            .setCategory(NotificationCompat.CATEGORY_SERVICE)
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setContentIntent(openPi)
            .addAction(0, stopLabel, stopPi)
            .setForegroundServiceBehavior(NotificationCompat.FOREGROUND_SERVICE_IMMEDIATE)
            .build();
        if (intent == null) { stopSelf(); return START_NOT_STICKY; }   // obnova po páde bez pokynov appky
        int type = Build.VERSION.SDK_INT >= Build.VERSION_CODES.R ? ServiceInfo.FOREGROUND_SERVICE_TYPE_MICROPHONE : 0;
        try {
            ServiceCompat.startForeground(this, NOTIFICATION_ID, n, type);
        } catch (RuntimeException e) {
            // Android nedovolí službu s mikrofónom, keď appka nie je na obrazovke alebo chýba povolenie mikrofónu.
            // Bez tohto by spadla celá appka.
            failure = "fgs";
            stopSelf();
            return START_NOT_STICKY;
        }
        if (lock == null) {
            PowerManager pm = (PowerManager) getSystemService(POWER_SERVICE);
            lock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "SleepDetective:night");
            lock.setReferenceCounted(false);
            lock.acquire(MAX_LOCK_MS);
        }
        if (intent != null && intent.getBooleanExtra(EXTRA_CAPTURE, false)) {
            long rec = intent.getLongExtra(EXTRA_REC, 0);
            NightCapture c = capture;
            if (c == null || c.recStart != rec) {
                if (c != null) c.halt();
                File dir = captureDir(this);
                clearDir(dir);
                c = new NightCapture(dir, rec, intent.getBooleanExtra(EXTRA_KEEP, false), intent.getBooleanExtra(EXTRA_FULL, false), intent.getIntExtra(EXTRA_BITRATE, 64000));
                capture = c;
                c.start();
            }
        }
        return START_NOT_STICKY;
    }

    private static String extra(Intent intent, String key, String def) {
        String v = intent != null ? intent.getStringExtra(key) : null;
        return v != null && !v.isEmpty() ? v : def;
    }

    // Kanál s rovnakým id sa pri zmene jazyka len premenuje (createNotificationChannel aktualizuje názov).
    private void createChannel(String name) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return;
        NotificationChannel ch = new NotificationChannel(CHANNEL, name, NotificationManager.IMPORTANCE_LOW);
        ch.setShowBadge(false);
        getSystemService(NotificationManager.class).createNotificationChannel(ch);
    }

    // Appku zavrel používateľ (potiahnutím z nedávnych): bez appky nič nepočúva, upozornenie by klamalo
    @Override
    public void onTaskRemoved(Intent rootIntent) {
        stopSelf();
        super.onTaskRemoved(rootIntent);
    }

    @Override
    public void onDestroy() {
        NightCapture c = capture;
        capture = null;
        if (c != null) c.halt();
        clearDir(captureDir(this));   // nevyzdvihnuté časti nahrávky nikomu nepatria
        NightWebView.setKeepAwake(false);
        if (lock != null && lock.isHeld()) lock.release();
        lock = null;
        ServiceCompat.stopForeground(this, ServiceCompat.STOP_FOREGROUND_REMOVE);
        super.onDestroy();
    }
}
