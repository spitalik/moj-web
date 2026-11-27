package sk.sleepdetective.app;

import android.content.Intent;
import android.os.Bundle;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.WebViewListener;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // vlastný plugin appky (záznam na pozadí); musí sa zaregistrovať pred super.onCreate
        registerPlugin(BackgroundRecordingPlugin.class);
        super.onCreate(savedInstanceState);
        // Systém môže ukončiť proces WebView (napr. HyperOS pri zhasnutej obrazovke). Bez tohto by Android
        // ukončil celú appku aj so službou a nočný záznam by skončil. Takto appku len znova otvoríme:
        // služba medzitým počúva ďalej (NightCapture) a appka po načítaní na záznam nadviaže.
        if (bridge != null) bridge.addWebViewListener(new WebViewListener() {
            @Override
            public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                if (isFinishing() || isDestroyed()) return false;
                runOnUiThread(MainActivity.this::recreate);
                return true;
            }
        });
    }

    @Override
    public void onDestroy() {
        // bez appky nikto nepočúva: upozornenie „Nočný záznam beží“ nesmie zostať visieť
        // (pri obnovení okna – otočenie, obnova po páde WebView – služba beží ďalej)
        if (!isChangingConfigurations()) stopService(new Intent(this, RecordingService.class));
        super.onDestroy();
    }
}
