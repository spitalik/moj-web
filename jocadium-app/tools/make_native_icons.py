"""Natívne ikony a úvodné obrazovky Jocadia (Android, iOS) z icons/icon-512.png.

Spustenie (z priečinka jocadium-app):  python tools/make_native_icons.py
Potrebuje: Pillow. Spúšťa sa po npx cap add android / ios a po každej zmene ikony
(tú vyrenderuje python tools/render-icon.py --letter J).

Ikona je „maskable“ (pozadie do krajov, písmeno v strede), takže sa použije celá:
  android/app/src/main/res/  mipmap-*/ic_launcher*.png, farba pozadia ikony, drawable*/splash.png
  ios/App/App/Assets.xcassets/  AppIcon (1024 px, bez priehľadnosti) a Splash
"""
import glob
import os

from PIL import Image, ImageDraw

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
SRC = os.path.join(ROOT, 'icons', 'icon-512.png')
BG = (11, 10, 22)            # najtmavšia farba gradientu ikony (#0b0a16)
SS = 4                       # prevzorkovanie masiek kvôli hladkým hranám
ANDROID_RES = os.path.join(ROOT, 'android', 'app', 'src', 'main', 'res')
IOS_ASSETS = os.path.join(ROOT, 'ios', 'App', 'App', 'Assets.xcassets')
DENSITIES = {'mdpi': 1, 'hdpi': 1.5, 'xhdpi': 2, 'xxhdpi': 3, 'xxxhdpi': 4}


def icon(size):
    return Image.open(SRC).convert('RGBA').resize((size, size), Image.LANCZOS)


def masked(size, shape):
    """Ikona orezaná na zaoblený štvorec alebo kruh (staršie Androidy bez adaptívnych ikon)."""
    img = icon(size)
    m = Image.new('L', (size * SS, size * SS), 0)
    d = ImageDraw.Draw(m)
    box = (0, 0, size * SS - 1, size * SS - 1)
    if shape == 'circle':
        d.ellipse(box, fill=255)
    else:
        d.rounded_rectangle(box, radius=int(0.22 * size * SS), fill=255)
    img.putalpha(m.resize((size, size), Image.LANCZOS))
    return img


def splash(path):
    """Úvodná obrazovka: zaoblená ikona v strede na tmavom pozadí (nahrádza logo Capacitoru)."""
    w, h = Image.open(path).size
    img = Image.new('RGB', (w, h), BG)
    s = int(min(w, h) * 0.32)
    logo = masked(s, 'rounded')
    img.paste(logo, ((w - s) // 2, (h - s) // 2), logo)
    img.save(path)


def native_android():
    if not os.path.isdir(ANDROID_RES):
        return
    for name, k in DENSITIES.items():
        d = os.path.join(ANDROID_RES, 'mipmap-' + name)
        os.makedirs(d, exist_ok=True)
        legacy = int(48 * k)
        masked(legacy, 'rounded').save(os.path.join(d, 'ic_launcher.png'))
        masked(legacy, 'circle').save(os.path.join(d, 'ic_launcher_round.png'))
        # adaptívna ikona: popredie 108 dp = celá ikona (pozadie ide do krajov, písmeno je v bezpečnej zóne)
        icon(int(108 * k)).save(os.path.join(d, 'ic_launcher_foreground.png'))
    with open(os.path.join(ANDROID_RES, 'values', 'ic_launcher_background.xml'), 'w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#%02X%02X%02X</color>\n</resources>\n' % BG)
    for f in glob.glob(os.path.join(ANDROID_RES, 'drawable*', 'splash.png')):
        splash(f)
    print('Android ikony a úvodné obrazovky sú v', os.path.normpath(ANDROID_RES))


def native_ios():
    if not os.path.isdir(IOS_ASSETS):
        return
    # App Store vyžaduje ikonu 1024 px bez priehľadnosti; iOS si rohy zaoblí sám
    icon(1024).convert('RGB').save(os.path.join(IOS_ASSETS, 'AppIcon.appiconset', 'AppIcon-512@2x.png'))
    for f in glob.glob(os.path.join(IOS_ASSETS, 'Splash.imageset', '*.png')):
        splash(f)
    print('iOS ikona a úvodná obrazovka sú v', os.path.normpath(IOS_ASSETS))


if __name__ == '__main__':
    native_android()
    native_ios()
