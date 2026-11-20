"""Vygeneruje ikony Health Companion (srdce so znamienkom plus). Spusti: python tools/make_icons.py"""
import os
from PIL import Image, ImageDraw

HERE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'icons')
BG = (15, 31, 28, 255)
ACCENT = (95, 211, 176, 255)
INK = (6, 32, 24, 255)

def heart_points(cx, cy, s):
    # parametrizovaná krivka srdca, škálovaná na s
    import math
    pts = []
    for i in range(200):
        t = 2 * math.pi * i / 200
        x = 16 * math.sin(t) ** 3
        y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)
        pts.append((cx + x * s / 34, cy - y * s / 34))
    return pts

def draw(size, maskable=False):
    img = Image.new('RGBA', (size, size), BG)
    d = ImageDraw.Draw(img)
    cx, cy = size / 2, size / 2 + size * 0.02
    scale = size * (0.30 if maskable else 0.36)
    d.polygon(heart_points(cx, cy, scale), fill=ACCENT)
    # znamienko plus v srdci
    arm = size * 0.16
    thick = size * 0.055
    d.rounded_rectangle([cx - arm / 2, cy - thick / 2, cx + arm / 2, cy + thick / 2], radius=thick / 2, fill=INK)
    d.rounded_rectangle([cx - thick / 2, cy - arm / 2, cx + thick / 2, cy + arm / 2], radius=thick / 2, fill=INK)
    return img

if __name__ == '__main__':
    os.makedirs(HERE, exist_ok=True)
    draw(192).convert('RGB').save(os.path.join(HERE, 'icon-192.png'))
    draw(512).convert('RGB').save(os.path.join(HERE, 'icon-512.png'))
    draw(512, maskable=True).convert('RGB').save(os.path.join(HERE, 'icon-maskable-512.png'))
    draw(180).convert('RGB').save(os.path.join(HERE, 'apple-touch-icon.png'))
    print('Ikony vygenerované v', os.path.abspath(HERE))
