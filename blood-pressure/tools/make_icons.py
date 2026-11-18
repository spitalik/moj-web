"""Vygeneruje ikony Blood Pressure: srdce s krivkou pulzu.

Spustenie (z priečinka blood-pressure):  python tools/make_icons.py
Potrebuje: Pillow.

Vytvorí v icons/:
  logo.svg               vektorová ikona (favicon)
  icon-512.png           zaoblená dlaždica, priehľadné rohy (purpose "any")
  icon-192.png           to isté zmenšené
  icon-maskable-512.png  plné pozadie, motív v bezpečnej zóne (Android si tvar oreže sám)
  apple-touch-icon.png   180 px z maskable verzie
"""
import math
import os

from PIL import Image, ImageDraw

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
ICONS = os.path.join(ROOT, 'icons')
BG = (20, 26, 45, 255)        # --night
ACC = (185, 164, 255, 255)    # --lamp (levanduľová)
SS = 4                        # prevzorkovanie kvôli hladkým hranám

# Geometria v súradniciach 512 × 512
HEART_C = (256, 262)
HEART_K = 10.5                # mierka parametrickej krivky srdca
PULSE = [(-170, 0), (-62, 0), (-38, -52), (-8, 74), (24, -98), (50, 0), (170, 0)]
PULSE_W = 26


def heart_points(n=180):
    pts = []
    for i in range(n):
        t = 2 * math.pi * i / n
        x = 16 * math.sin(t) ** 3
        y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)
        pts.append((HEART_C[0] + x * HEART_K, HEART_C[1] - y * HEART_K))
    return pts


def pulse_points():
    return [(HEART_C[0] + x, HEART_C[1] - 10 + y) for x, y in PULSE]


def draw(size, scale, rounded):
    s = size * SS
    k = s / 512
    img = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if rounded:
        d.rounded_rectangle((0, 0, s - 1, s - 1), radius=int(0.22 * s), fill=BG)
    else:
        d.rectangle((0, 0, s, s), fill=BG)

    def p(pt):  # zmenšenie okolo stredu pre maskable verziu
        return ((256 + (pt[0] - 256) * scale) * k, (256 + (pt[1] - 256) * scale) * k)

    d.polygon([p(q) for q in heart_points()], fill=ACC)
    w = PULSE_W * scale * k
    pts = [p(q) for q in pulse_points()]
    d.line(pts, fill=BG, width=int(w), joint='curve')
    for c in pts:
        d.ellipse((c[0] - w / 2, c[1] - w / 2, c[0] + w / 2, c[1] + w / 2), fill=BG)
    return img.resize((size, size), Image.LANCZOS)


def svg():
    hx = lambda c: '#%02x%02x%02x' % c[:3]
    heart = ' '.join('%.1f,%.1f' % q for q in heart_points(120))
    pulse = ' '.join('%d,%d' % q for q in pulse_points())
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="{hx(BG)}"/>
  <polygon points="{heart}" fill="{hx(ACC)}"/>
  <polyline points="{pulse}" fill="none" stroke="{hx(BG)}" stroke-width="{PULSE_W}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
'''


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


if __name__ == '__main__':
    main()
