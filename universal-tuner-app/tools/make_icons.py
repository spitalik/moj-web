"""Vygeneruje ikony Universal Tuner: ladička (vidlička) so zvukovými vlnami.

Spustenie (z priečinka universal-tuner-app):  python tools/make_icons.py
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
LAMP = (108, 196, 242, 255)  # --lamp
SS = 4                       # prevzorkovanie kvôli hladkým hranám

# Geometria v súradniciach 512 × 512
W = 34                       # hrúbka ramien vidličky
TINES = (206, 306)           # x ľavého a pravého ramena (stred čiary)
TOP, BEND = 96, 292          # začiatok ramien a začiatok oblúka
STEM = (256, 342, 438)       # x, začiatok a koniec rúčky
WAVES = ((112, 18), (156, 18))   # polomer a hrúbka vĺn
WAVE_C = (256, 170)          # stred vĺn
WAVE_A = 26                  # polovičný uhol vlny (stupne)


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

    def dot(x, y, w):
        cx, cy = p(x, y)
        d.ellipse((cx - r(w) / 2, cy - r(w) / 2, cx + r(w) / 2, cy + r(w) / 2), fill=LAMP)

    # ramená
    for x in TINES:
        d.line((p(x, TOP), p(x, BEND)), fill=LAMP, width=int(r(W)))
        dot(x, TOP, W)
    # oblúk spájajúci ramená
    rad = (TINES[1] - TINES[0]) / 2
    cx, cy = p(256, BEND)
    ro, ri = r(rad + W / 2), r(rad - W / 2)
    ring = Image.new('L', (s, s), 0)
    rd = ImageDraw.Draw(ring)
    rd.ellipse((cx - ro, cy - ro, cx + ro, cy + ro), fill=255)
    rd.ellipse((cx - ri, cy - ri, cx + ri, cy + ri), fill=0)
    rd.rectangle((0, 0, s, cy), fill=0)    # len dolná polovica
    img.paste(Image.new('RGBA', (s, s), LAMP), (0, 0), ring)
    # rúčka
    x, y1, y2 = STEM
    d.line((p(x, y1), p(x, y2)), fill=LAMP, width=int(r(W + 6)))
    dot(x, y2, W + 6)
    # zvukové vlny po oboch stranách
    wx, wy = p(*WAVE_C)
    for rr, ww in WAVES:
        box = (wx - r(rr), wy - r(rr), wx + r(rr), wy + r(rr))
        for mid in (0, 180):
            d.arc(box, mid - WAVE_A, mid + WAVE_A, fill=LAMP, width=int(r(ww)))
    return img.resize((size, size), Image.LANCZOS)


def svg():
    import math
    hx = '#%02x%02x%02x' % LAMP[:3]
    bg = '#%02x%02x%02x' % BG[:3]
    rad = (TINES[1] - TINES[0]) / 2
    a, b = TINES
    x, y1, y2 = STEM
    waves = ''
    for rr, ww in WAVES:
        for mid in (0, 180):
            t1, t2 = math.radians(mid - WAVE_A), math.radians(mid + WAVE_A)
            p1 = (WAVE_C[0] + rr * math.cos(t1), WAVE_C[1] + rr * math.sin(t1))
            p2 = (WAVE_C[0] + rr * math.cos(t2), WAVE_C[1] + rr * math.sin(t2))
            waves += (f'  <path d="M{p1[0]:.1f} {p1[1]:.1f} A{rr} {rr} 0 0 1 {p2[0]:.1f} {p2[1]:.1f}" '
                      f'fill="none" stroke="{hx}" stroke-width="{ww}" stroke-linecap="round"/>\n')
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="{bg}"/>
  <path d="M{a} {TOP} V{BEND} A{rad} {rad} 0 0 0 {b} {BEND} V{TOP}" fill="none" stroke="{hx}" stroke-width="{W}" stroke-linecap="round"/>
  <line x1="{x}" y1="{y1}" x2="{x}" y2="{y2}" stroke="{hx}" stroke-width="{W + 6}" stroke-linecap="round"/>
{waves}</svg>
'''


ANDROID_RES = os.path.join(ROOT, 'android', 'app', 'src', 'main', 'res')
IOS_ASSETS = os.path.join(ROOT, 'ios', 'App', 'App', 'Assets.xcassets')
DENSITIES = {'mdpi': 1, 'hdpi': 1.5, 'xhdpi': 2, 'xxhdpi': 3, 'xxxhdpi': 4}


def splash(path):
    """Úvodná obrazovka: ikona appky v strede na farbe appky (nahrádza logo Capacitoru)."""
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
