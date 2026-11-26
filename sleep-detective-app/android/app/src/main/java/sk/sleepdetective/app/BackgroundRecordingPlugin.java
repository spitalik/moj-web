package sk.sleepdetective.app;

import android.Manifest;
import android.content.ComponentName;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.PowerManager;
import android.provider.Settings;
import androidx.activity.result.ActivityResult;
import androidx.core.content.ContextCompat;
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
 *   BackgroundRecording.start({ title, text, stop, channel }) – spustí službu na popredí (záznam pokračuje aj so
 *                                zamknutou obrazovkou); texty upozornenia sú v jazyku appky
 *   BackgroundRecording.stop()   – zastaví ju
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
            NightWebView.setKeepAwake(true);   // stránka nezamrzne ani pri zhasnutej obrazovke
            call.resolve();
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
    public void stop(PluginCall call) {
        getContext().stopService(new Intent(getContext(), RecordingService.class));
        NightWebView.setKeepAwake(false);
        call.resolve();
    }
}
