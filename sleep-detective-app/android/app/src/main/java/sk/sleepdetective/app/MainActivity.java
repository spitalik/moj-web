package sk.sleepdetective.app;

import android.content.Intent;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // vlastný plugin appky (záznam na pozadí); musí sa zaregistrovať pred super.onCreate
        registerPlugin(BackgroundRecordingPlugin.class);
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onDestroy() {
        // bez appky nikto nepočúva: upozornenie „Nočný záznam beží“ nesmie zostať visieť
        stopService(new Intent(this, RecordingService.class));
        super.onDestroy();
    }
}
