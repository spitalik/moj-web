package sk.sleepdetective.app;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.util.AttributeSet;
import android.view.View;
import com.getcapacitor.CapacitorWebView;
import java.lang.ref.WeakReference;

/**
 * WebView appky, ktoré počas nočného záznamu ostane pre Chromium „viditeľné“ aj pri zhasnutej obrazovke.
 *
 * Keď obrazovka zhasne, okno appky sa skryje a Chromium stránku po pár minútach zmrazí (na Androide
 * zastaví úlohy skrytých stránok, ktoré nehrajú počuteľný zvuk). Zvuk z mikrofónu by síce prichádzal,
 * ale JavaScript by ho už nespracoval a do rána by sa nič nenahralo. Služba RecordingService drží proces
 * nažive, toto WebView zasa drží nažive stránku: kým záznam beží, skrytie okna mu neoznámime.
 * Nič sa pritom nekreslí (okno je skryté), appka len ďalej počúva.
 */
public class NightWebView extends CapacitorWebView {
    private static volatile boolean keepAwake = false;
    private static WeakReference<NightWebView> current = new WeakReference<>(null);

    public NightWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
        current = new WeakReference<>(this);
    }

    /** Zapne/vypne udržiavanie stránky pri živote (volá BackgroundRecordingPlugin a RecordingService). */
    static void setKeepAwake(boolean on) {
        keepAwake = on;
        new Handler(Looper.getMainLooper()).post(() -> {
            NightWebView w = current.get();
            // po skončení záznamu oznámime skutočný stav okna (napr. obrazovka je stále zhasnutá)
            if (w != null && !on) w.realVisibility();
        });
    }

    private void realVisibility() {
        super.onWindowVisibilityChanged(getWindowVisibility());
    }

    @Override
    protected void onWindowVisibilityChanged(int visibility) {
        super.onWindowVisibilityChanged(keepAwake ? View.VISIBLE : visibility);
    }
}
