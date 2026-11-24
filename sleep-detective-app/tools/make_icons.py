"""Vygeneruje ikony Sleep Detective: lupa, v ktorej šošovke je mesiac.

Spustenie (z priečinka sleep-detective-app):  python tools/make_icons.py
Potrebuje: Pillow.

Vytvorí v icons/:
  logo.svg               vektorová ikona (favicon)
  icon-512.png           zaoblená dlaždica, priehľadné rohy (purpose "any")
  icon-192.png           to isté zmenšené
  icon-maskable-512.png  plné pozadie, motív v bezpečnej zóne (Android si tvar oreže sám)
  apple-touch-icon.png   180 px z maskable verzie

Ak existujú natívne projekty (npx cap add android / ios), prepíše aj ich ikony a úvodné obrazovky:
  android/app/src/main/res/  mipmap-*/ic_launcher*.png, farba pozadia ikony, drawable*/splash.png
  ios/App/App/Assets.xcassets/  AppIcon (1024 px, bez priehľadnosti) a Splash
"""
import glob
import os

from PIL import Image, ImageDraw

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
ICONS = os.path.join(ROOT, 'icons')
BG = (20, 26, 45, 255)       # --night
LAMP = (243, 196, 107, 255)  # --lamp
SS = 4                       # prevzorkovanie kvôli hladkým hranám

# Geometria v súradniciach 512 × 512
LENS = (222, 222, 128)          # stred x, y a polomer šošovky (stred čiary)
RING = 30                       # hrúbka obruby
HANDLE = ((316, 316), (418, 418), 46)
MOON = (214, 232, 78)           # celý kruh mesiaca
BITE = (252, 198, 70)           # kruh, ktorý z mesiaca vykrojí kosáčik


def draw(size, scale, rounded):
    s = size * SS
    k = s / 512
    img = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if rounded:
        d.rounded_rectangle((0, 0, s - 1, s - 1), radius=int(0.22 * s), fill=BG)
    else:
        d.rectangle((0, 0, s, s), fill=BG)

    def p(x, y):  # zmenšenie okolo stredu pre maskable verziu
        return ((256 + (x - 256) * scale) * k, (256 + (y - 256) * scale) * k)

    def r(v):
        return v * scale * k

    # rúčka
    (x1, y1), (x2, y2), w = HANDLE
    a, b = p(x1, y1), p(x2, y2)
    d.line((a, b), fill=LAMP, width=int(r(w)))
    for c in (a, b):
        d.ellipse((c[0] - r(w) / 2, c[1] - r(w) / 2, c[0] + r(w) / 2, c[1] + r(w) / 2), fill=LAMP)
    # šošovka: tmavé vnútro + obruba
    cx, cy = p(LENS[0], LENS[1])
    ro, ri = r(LENS[2] + RING / 2), r(LENS[2] - RING / 2)
    d.ellipse((cx - ro, cy - ro, cx + ro, cy + ro), fill=LAMP)
    d.ellipse((cx - ri, cy - ri, cx + ri, cy + ri), fill=BG)
    # mesiac (kosáčik)
    moon = Image.new('L', (s, s), 0)
    md = ImageDraw.Draw(moon)
    mx, my = p(MOON[0], MOON[1])
    md.ellipse((mx - r(MOON[2]), my - r(MOON[2]), mx + r(MOON[2]), my + r(MOON[2])), fill=255)
    bx, by = p(BITE[0], BITE[1])
    md.ellipse((bx - r(BITE[2]), by - r(BITE[2]), bx + r(BITE[2]), by + r(BITE[2])), fill=0)
    img.paste(Image.new('RGBA', (s, s), LAMP), (0, 0), moon)
    return img.resize((size, size), Image.LANCZOS)


def svg():
    hx = lambda c: '#%02x%02x%02x' % c[:3]
    (x1, y1), (x2, y2), w = HANDLE
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="{hx(BG)}"/>
  <mask id="m"><rect width="512" height="512" fill="#fff"/><circle cx="{BITE[0]}" cy="{BITE[1]}" r="{BITE[2]}" fill="#000"/></mask>
  <line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{hx(LAMP)}" stroke-width="{w}" stroke-linecap="round"/>
  <circle cx="{LENS[0]}" cy="{LENS[1]}" r="{LENS[2]}" fill="{hx(BG)}" stroke="{hx(LAMP)}" stroke-width="{RING}"/>
  <circle cx="{MOON[0]}" cy="{MOON[1]}" r="{MOON[2]}" fill="{hx(LAMP)}" mask="url(#m)"/>
</svg>
'''


ANDROID_RES = os.path.join(ROOT, 'android', 'app', 'src', 'main', 'res')
IOS_ASSETS = os.path.join(ROOT, 'ios', 'App', 'App', 'Assets.xcassets')
DENSITIES = {'mdpi': 1, 'hdpi': 1.5, 'xhdpi': 2, 'xxhdpi': 3, 'xxxhdpi': 4}


def splash(path):
    """Úvodná obrazovka: lupa s mesiacom v strede na farbe appky (nahrádza logo Capacitoru)."""
    w, h = Image.open(path).size
    img = Image.new('RGB', (w, h), BG[:3])
    s = int(min(w, h) * 0.42)
    logo = draw(s, 0.74, rounded=False)
    img.paste(logo, ((w - s) // 2, (h - s) // 2), logo)
    img.save(path)


def native_android():
    if not os.path.isdir(ANDROID_RES):
        return
    for name, k in DENSITIES.items():
        d = os.path.join(ANDROID_RES, 'mipmap-' + name)
        os.makedirs(d, exist_ok=True)
        legacy = int(48 * k)
        draw(legacy, 1.0, rounded=True).save(os.path.join(d, 'ic_launcher.png'))
        rnd = draw(legacy, 0.74, rounded=False)
        mask = Image.new('L', (legacy * SS, legacy * SS), 0)
        ImageDraw.Draw(mask).ellipse((0, 0, legacy * SS - 1, legacy * SS - 1), fill=255)
        rnd.putalpha(mask.resize((legacy, legacy), Image.LANCZOS))
        rnd.save(os.path.join(d, 'ic_launcher_round.png'))
        # adaptívna ikona: popredie 108 dp, motív v bezpečnej zóne (66 dp), pozadie je farba nižšie
        draw(int(108 * k), 0.6, rounded=False).save(os.path.join(d, 'ic_launcher_foreground.png'))
    with open(os.path.join(ANDROID_RES, 'values', 'ic_launcher_background.xml'), 'w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#%02X%02X%02X</color>\n</resources>\n' % BG[:3])
    for f in glob.glob(os.path.join(ANDROID_RES, 'drawable*', 'splash.png')):
        splash(f)
    print('Android ikony a úvodné obrazovky sú v', os.path.normpath(ANDROID_RES))


def native_ios():
    if not os.path.isdir(IOS_ASSETS):
        return
    # App Store vyžaduje ikonu 1024 px bez priehľadnosti; iOS si rohy zaoblí sám
    draw(1024, 0.74, rounded=False).convert('RGB').save(os.path.join(IOS_ASSETS, 'AppIcon.appiconset', 'AppIcon-512@2x.png'))
    for f in glob.glob(os.path.join(IOS_ASSETS, 'Splash.imageset', '*.png')):
        splash(f)
    print('iOS ikona a úvodná obrazovka sú v', os.path.normpath(IOS_ASSETS))


def main():
    os.makedirs(ICONS, exist_ok=True)
    with open(os.path.join(ICONS, 'logo.svg'), 'w', encoding='utf-8') as f:
        f.write(svg())
    big = draw(512, 1.0, rounded=True)
    big.save(os.path.join(ICONS, 'icon-512.png'))
    big.resize((192, 192), Image.LANCZOS).save(os.path.join(ICONS, 'icon-192.png'))
    mask = draw(512, 0.74, rounded=False)
    mask.save(os.path.join(ICONS, 'icon-maskable-512.png'))
    mask.convert('RGB').resize((180, 180), Image.LANCZOS).save(os.path.join(ICONS, 'apple-touch-icon.png'))
    print('Ikony sú v', os.path.normpath(ICONS))
    native_android()
    native_ios()


if __name__ == '__main__':
    main()
