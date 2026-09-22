#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Stiahne písma k aplikácii, aby nemusela nič ťahať z Googlu.

Prečo: kým `<link>` mieril na fonts.googleapis.com, každé online načítanie
povedalo Googlu IP adresu návštevníka, prehliadač a otvorenú stránku — a pri
prvom offline spustení sa písmo vôbec nenačítalo. Po spustení tohto skriptu
si aplikácia nesie Syne aj DM Sans so sebou a nekontaktuje nikoho.

Sťahujú sa len rezy, ktoré appka naozaj používa, a len znakové sady, ktoré
dávajú zmysel pre jej dvanásť jazykov (latinka, rozšírená latinka, cyrilika).
Japončina, kórejčina a čínština v týchto písmach nie sú a vykresľujú sa
systémovým písmom — to platilo aj predtým.

Použitie:  python tools/fetch-fonts.py
"""
import hashlib, io, os, re, sys, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'fonts'
UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36')
# DM Sans a Syne su variabilne pisma — pytam si rovno cely rozsah hrubok,
# takze pride jeden subor na znakovu sadu a pokryje kazdy rez, ktory appka
# pouzije (vratane 700 v hre ricochet). DM Mono variabilne nie je, ten ide
# po jednotlivych rezoch; pouziva ho jedina hra (type-rush) a jedinu hrubku.
CSS_URL = ('https://fonts.googleapis.com/css2'
           '?family=DM+Sans:wght@100..1000'
           '&family=Syne:wght@400..800'
           '&family=DM+Mono:wght@500'
           '&display=swap')
KEEP = ('latin', 'latin-ext', 'cyrillic', 'cyrillic-ext')


def get(url, binary=False):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    return data if binary else data.decode('utf-8')


def main():
    OUT.mkdir(exist_ok=True)
    css = get(CSS_URL)

    # Google vracia blok @font-face pre kazdu znakovu sadu; pred kazdym je
    # komentar s jej nazvom (/* latin */), podla neho vyberam.
    blocks = re.findall(r'/\*\s*([a-z-]+)\s*\*/\s*(@font-face\s*\{[^}]*\})', css)
    if not blocks:
        sys.exit('Google vratil CSS v inom tvare, nez skript ocakava.')

    # DM Sans aj Syne su variabilne pisma: Google posle pre kazdy rez ten isty
    # subor. Ukladam ho preto raz a vsetky rezy nan ukazu (inak by isla rovnaka
    # stovka kilobajtov do priecinka styrikrat).
    out_css, files, by_hash = [], [], {}
    for subset, block in blocks:
        if subset not in KEEP:
            continue
        fam = re.search(r"font-family:\s*'([^']+)'", block).group(1)
        weight = re.search(r'font-weight:\s*([\d ]+)', block).group(1).strip()
        src = re.search(r'url\((https://[^)]+\.woff2)\)', block).group(1)
        data = get(src, binary=True)
        digest = hashlib.md5(data).hexdigest()
        if digest in by_hash:
            name = by_hash[digest]
        else:
            tag = 'var' if ' ' in weight else weight
            name = '%s-%s-%s.woff2' % (fam.replace(' ', '').lower(), tag, subset)
            (OUT / name).write_bytes(data)
            by_hash[digest] = name
            files.append(name)
            print('  %-34s %6d B' % (name, len(data)))
        out_css.append(re.sub(r'url\(https://[^)]+\)', 'url(%s)' % name, block).strip())

    header = ('/* Syne a DM Sans nesie aplikacia so sebou — nic sa nestahuje z\n'
              '   cudzieho servera. Subory aj tento zoznam vyrobil tools/fetch-fonts.py\n'
              '   z Google Fonts; obe pisma su pod licenciou SIL Open Font License 1.1,\n'
              '   jej text je v tomto priecinku (OFL.txt). */\n\n')
    (OUT / 'fonts.css').write_text(header + '\n\n'.join(out_css) + '\n', encoding='utf-8')
    print('\nfonts.css: %d rezov, spolu %.0f kB'
          % (len(files), sum((OUT / f).stat().st_size for f in files) / 1024))

    # licencia k pismam
    try:
        ofl = get('https://openfontlicense.org/documents/OFL.txt')
        if 'SIL OPEN FONT LICENSE' in ofl.upper():
            (OUT / 'OFL.txt').write_text(ofl, encoding='utf-8')
            print('OFL.txt ulozeny')
        else:
            raise ValueError('neocakavany obsah')
    except Exception as e:
        print('!! OFL.txt sa nepodarilo stiahnut (%s) — doplnit rucne' % e)


if __name__ == '__main__':
    main()
