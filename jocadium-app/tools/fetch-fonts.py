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
# pouzije (vratane 700 v hre skipshot). DM Mono variabilne nie je, ten ide
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


# Keby fontTools chýbal, copyright z písiem sa prečítať nedá; tieto hodnoty
# sú odpísané z tých istých súborov 24. 9. 2026 a slúžia len ako záloha.
FALLBACK_NOTICES = {
    'dmsans': 'Copyright 2014 The DM Sans Project Authors '
              '(https://github.com/googlefonts/dm-fonts)',
    'syne':   'Copyright 2019 The Syne Project Authors '
              '(https://gitlab.com/bonjour-monde/fonderie/syne-typeface)',
    'dmmono': 'Copyright 2020 The DM Mono Project Authors '
              '(https://www.github.com/googlefonts/dm-mono)',
}


def notice_of(path):
    """Copyright zapísaný priamo v súbore písma — jediný záväzný zdroj."""
    try:
        from fontTools.ttLib import TTFont
        f = TTFont(str(path))
        for n in f['name'].names:
            if n.nameID == 0:
                return n.toUnicode().strip()
    except Exception:
        pass
    return FALLBACK_NOTICES.get(path.name.split('-')[0])


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

    notices = []
    for name in files:
        t = notice_of(OUT / name)
        if t and t not in notices:
            notices.append(t)
    notices.sort()   # stabilne poradie, nech sa subor pri kazdom behu nemeni

    header = ('/* Pisma nesie aplikacia so sebou — nic sa nestahuje z cudzieho servera.\n'
              '   Subory aj tento zoznam vyrobil tools/fetch-fonts.py z Google Fonts.\n\n'
              + ''.join('   %s\n' % n for n in notices) +
              '\n   Vsetky su pod licenciou SIL Open Font License 1.1; jej text aj tieto\n'
              '   copyright notice su v tomto priecinku v subore OFL.txt. */\n\n')
    (OUT / 'fonts.css').write_text(header + '\n\n'.join(out_css) + '\n', encoding='utf-8')
    print('\nfonts.css: %d rezov, spolu %.0f kB'
          % (len(files), sum((OUT / f).stat().st_size for f in files) / 1024))

    # ── licencia ─────────────────────────────────────────────────────
    # SIL zverejnuje sablonu, ktora ma na zaciatku zastupne symboly
    # (<Copyright Holder> a spol.). Licencia pritom ziada, aby s pismom
    # cestoval *konkretny* copyright notice — sablonu preto vyplnam tym, co
    # je zapisane priamo v stiahnutych suboroch.
    if not notices:
        sys.exit('copyright z pisiem sa necital — OFL.txt radsej nepisem')
    try:
        ofl = get('https://openfontlicense.org/documents/OFL.txt')
        if 'SIL OPEN FONT LICENSE' not in ofl.upper():
            raise ValueError('neocakavany obsah')
        lines = ofl.replace('\r\n', '\n').split('\n')
        start = next(i for i, l in enumerate(lines)
                     if l.startswith('This Font Software is licensed'))
        (OUT / 'OFL.txt').write_text('\n'.join(notices) + '\n\n' + '\n'.join(lines[start:]),
                                     encoding='utf-8')
        print('OFL.txt ulozeny, copyright notice: %d' % len(notices))
        for n in notices:
            print('   ', n[:86])
    except Exception as e:
        print('!! OFL.txt sa nepodarilo pripravit (%s) — doplnit rucne' % e)


if __name__ == '__main__':
    main()
