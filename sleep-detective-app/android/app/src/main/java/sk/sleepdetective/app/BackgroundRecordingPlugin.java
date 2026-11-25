package sk.sleepdetective.app;

import android.Manifest;
import android.content.Intent;
import android.os.Build;
import androidx.core.content.ContextCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

/**
 * Most medzi appkou (JavaScript) a službou RecordingService.
 *   BackgroundRecording.start({ title, text, stop, channel }) – spustí službu na popredí (záznam pokračuje aj so
 *                                zamknutou obrazovkou); texty upozornenia sú v jazyku appky
 *   BackgroundRecording.stop()   – zastaví ju
 *   udalosť "stop"               – používateľ ťukol na „Ukončiť záznam“ v upozornení
 */
@CapacitorPlugin(
    name = "BackgroundRecording",
    permissions = { @Permission(alias = "notifications", strings = { Manifest.permission.POST_NOTIFICATIONS }) }
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
        // Android 13+: bez povolenia upozornení služba beží tiež, len upozornenie nie je vidno v lište
        if (Build.VERSION.SDK_INT >= 33 && getPermissionState("notifications") != PermissionState.GRANTED) {
            requestPermissionForAlias("notifications", call, "afterNotifications");
            return;
        }
        startService(call);
    }

    @PermissionCallback
    private void afterNotifications(PluginCall call) {
        startService(call);
    }

    private void startService(PluginCall call) {
        try {
            // texty upozornenia posiela appka v zvolenom jazyku (inak anglické predvolené)
            Intent i = new Intent(getContext(), RecordingService.class)
                .putExtra(RecordingService.EXTRA_TITLE, call.getString("title"))
                .putExtra(RecordingService.EXTRA_TEXT, call.getString("text"))
                .putExtra(RecordingService.EXTRA_STOP, call.getString("stop"))
                .putExtra(RecordingService.EXTRA_CHANNEL, call.getString("channel"));
            ContextCompat.startForegroundService(getContext(), i);
            call.resolve();
        } catch (Exception e) {
            call.reject("Background recording could not be started", e);
        }
    }

    @PluginMethod
    public void stop(PluginCall call) {
        getContext().stopService(new Intent(getContext(), RecordingService.class));
        call.resolve();
    }
}
