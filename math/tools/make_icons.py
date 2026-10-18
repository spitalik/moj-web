"""Vygeneruje PNG ikony pre PWA (bez externých knižníc).
Spustenie: python make_icons.py  (z priečinka tools; zapíše do ../icons)
"""
import os
import struct
import zlib

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'icons')
BLUE = (37, 99, 235)
WHITE = (255, 255, 255)


def inside_triangle(x, y, p1, p2, p3):
    def sign(a, b, c):
        return (a[0] - c[0]) * (b[1] - c[1]) - (b[0] - c[0]) * (a[1] - c[1])
    d1, d2, d3 = sign((x, y), p1, p2), sign((x, y), p2, p3), sign((x, y), p3, p1)
    has_neg = d1 < 0 or d2 < 0 or d3 < 0
    has_pos = d1 > 0 or d2 > 0 or d3 > 0
    return not (has_neg and has_pos)


def render(size):
    # pravouhlý trojuholník (Pytagoras) na modrom pozadí, s bielym obrysom
    s = size
    tri = [(0.22 * s, 0.74 * s), (0.22 * s, 0.26 * s), (0.78 * s, 0.74 * s)]
    rows = []
    for y in range(size):
        row = bytearray([0])  # filter type None
        for x in range(size):
            color = BLUE
            if inside_triangle(x + 0.5, y + 0.5, *tri):
                color = WHITE
            row += bytes(color)
        rows.append(bytes(row))
    return b''.join(rows)


def chunk(tag, data):
    body = tag + data
    return struct.pack('>I', len(data)) + body + struct.pack('>I', zlib.crc32(body) & 0xffffffff)


def write_png(path, size):
    raw = render(size)
    png = b'\x89PNG\r\n\x1a\n'
    png += chunk(b'IHDR', struct.pack('>IIBBBBB', size, size, 8, 2, 0, 0, 0))
    png += chunk(b'IDAT', zlib.compress(raw, 9))
    png += chunk(b'IEND', b'')
    with open(path, 'wb') as f:
        f.write(png)


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    write_png(os.path.join(OUT, 'icon-192.png'), 192)
    write_png(os.path.join(OUT, 'icon-512.png'), 512)
    print('Ikony vygenerované do', os.path.abspath(OUT))
