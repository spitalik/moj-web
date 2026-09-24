#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Postaví slovníky pre štyri slovné hry z voľných zdrojov.

Prečo: hry potrebujú zoznam anglických slov, a taký zoznam sa nedá napísať
ručne. Doteraz ich niesli hotové, ale bez doloženého pôvodu — a hoci jednotlivé
slová chránené nie sú, na zostavený zoznam sa v EÚ vzťahuje databázové právo
(smernica 96/9/ES). Tento skript preto stavia zoznamy od začiatku z dvoch
zdrojov, ktoré sú preukázateľne voľné, a výber robí vlastným pravidlom:

  * **ENABLE1** — lexikón anglických slov, ktorý jeho autori (Alan Beale,
    M. Cooper) uvoľnili do public domain. Určuje, čo je vôbec platné slovo.
  * **štrnásť kníh z Projektu Gutenberg** — texty, ktorým autorské práva
    vypršali. Z nich sa počíta, ako často sa slovo naozaj používa; tým sa
    zo slovníka odfiltrujú výrazy, ktoré pozná len krížovkár.

Výsledok je teda prienik „je to slovo" a „naozaj sa to používa", pričom
hranice si určuje tento skript. Nič sa nepreberá hotové.

Použitie:  python tools/build-wordlists.py
           python tools/build-wordlists.py --dry-run     (len prepočíta)
"""
import argparse
import collections
import importlib.util
import io
import json
import os
import re
import sys
import tempfile
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHE = Path(tempfile.gettempdir()) / 'jocadium-wordlists'
UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36')

ENABLE_URL = 'https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt'

# Knihy z Projektu Gutenberg — všetky voľné dielo. Zámerne rôzne žánre, aby
# frekvencie neurčila jedna kniha.
BOOKS = [1342, 84, 11, 1661, 2701, 76, 98, 1260, 345, 16, 35, 43, 120, 74]

# Korpus je z devätnásteho storočia, takže tvary ako „thee" sú v ňom bežné.
# Do hier nepatria, preto malý ručný zoznam výnimiek.
ARCHAIC = set("""thee thou thy thine hath doth dost art ye nay yea unto whilst
amongst methinks hast wilt shalt whence thence hither thither betwixt ere oft
naught aught spake sayeth cometh goeth hark lo prithee forsooth mayhap""".split())

# Slová, ktoré do hry pre kohokoľvek nepatria. Lexikón ich obsahuje, lebo je
# úplný, a korpus tiež — dobová literatúra (Huckleberry Finn, Moby Dick) je
# plná rasových nadávok. Hra by ich hráčovi ponúkla ako platnú odpoveď alebo
# ako hádanku, čo je presne to, čo sa nikomu vysvetľovať nechce.
# Blokujú sa aj odvodené tvary (množné číslo, -ed, -ing, -er, -y).
BLOCK_STEMS = set("""
nigg negro negre negress darkie darky coon wog wop dago kike gook chink jap
spic squaw redskin injun mulatto quadroon octoroon paddy honky cracker gypsy
gyp heathen savage
retard cripple imbecile moron lunatic idiot cretin spastic mongol
faggot fag dyke tranny queer sodomite
whore slut bitch bastard harlot strumpet trollop wench concubine
fuck shit piss crap cunt cock dick prick pussy tit twat arse ass butt bugger
damn hell bloody bollock wank knob knacker
rape rapist molest incest pedo bestiality
lynch hang gallows noose suicide murder slaughter massacre butcher corpse
opium cocaine heroin morphine laudanum
""".split())

SUFFIXES = ('', 's', 'es', 'ed', 'd', 'ing', 'er', 'ers', 'ist', 'ists', 'y', 'ies')


def blocked(w):
    """Slovo je zakázané, ak je odvodené z niektorého zakázaného základu."""
    for stem in BLOCK_STEMS:
        if w == stem:
            return True
        if w.startswith(stem) and len(w) - len(stem) <= 3:
            rest = w[len(stem):]
            if rest in SUFFIXES or rest in ('gy', 'gs', 'ged', 'ging'):
                return True
    return False


def get(url, binary=False):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=90) as r:
        data = r.read()
    return data if binary else data.decode('utf-8', 'ignore')


def cached(name, url):
    CACHE.mkdir(exist_ok=True)
    p = CACHE / name
    if not p.exists() or p.stat().st_size < 1000:
        p.write_bytes(get(url, binary=True))
    return p.read_text(encoding='utf-8', errors='ignore')


def build_pool():
    enable = set(w.strip() for w in cached('enable1.txt', ENABLE_URL).split('\n') if w.strip())
    freq = collections.Counter()
    # Koľko kníh slovo pozná a ako často stojí s veľkým písmenom. Prvé odhalí
    # výrazy, ktoré patria jedinej knihe („avast" z Moby Dicka), druhé mená
    # postáv, ktoré sa v lexikóne náhodou nachádzajú aj ako bežné slovo
    # („jones"). Ani jedno nepatrí medzi hádané slová.
    books_seen = collections.Counter()
    upper = collections.Counter()
    for b in BOOKS:
        txt = cached('g%d.txt' % b, 'https://www.gutenberg.org/cache/epub/%d/pg%d.txt' % (b, b))
        low = re.findall(r'[a-z]+', txt.lower())
        freq.update(low)
        books_seen.update(set(low))
        upper.update(w.lower() for w in re.findall(r'\b[A-Z][a-z]+\b', txt))
    enable = set(w for w in enable
                 if w.isalpha() and w.islower() and w not in ARCHAIC and not blocked(w))
    pool = {w: c for w, c in freq.items() if w in enable and len(w) >= 3}
    print('ENABLE1: %d slov · korpus: %d kníh, %d slov · prienik: %d'
          % (len(enable), len(BOOKS), sum(freq.values()), len(pool)))
    by_len = {}
    for w in enable:
        by_len.setdefault(len(w), set()).add(w)
    # slová vhodné na hádanie: pozná ich väčšina kníh a píšu sa malým písmenom
    common = {w: c for w, c in pool.items()
              if books_seen[w] >= 6 and upper[w] < 0.5 * c}
    print('z toho vhodných na hádanie: %d' % len(common))
    return pool, by_len, common


def by_freq(pool, length=None, lo=1, limit=None):
    ws = [(c, w) for w, c in pool.items()
          if c >= lo and (length is None or len(w) == length)]
    ws.sort(key=lambda x: (-x[0], x[1]))
    if limit:
        ws = ws[:limit]
    return sorted(w for _, w in ws)


def replace(path, pattern, value, label):
    p = ROOT / path
    s = io.open(p, encoding='utf-8').read()
    m = re.search(pattern, s)
    if not m:
        sys.exit('%s: nenašiel som %s' % (path, label))
    out = s[:m.start(1)] + value + s[m.end(1):]
    io.open(p, 'w', encoding='utf-8', newline='').write(out)
    print('  %-34s %8d znakov' % (label, len(value)))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dry-run', action='store_true')
    args = ap.parse_args()

    pool, enable_by_len, common = build_pool()

    # ── word-weave: bohatý slovník na overovanie nájdených slov ──────
    weave = [w for w in by_freq(pool, lo=2) if 3 <= len(w) <= 9]
    weave.sort()

    # ── word-ladder: rebríky potrebujú súvislý graf krátkych slov ────
    # Tu frekvenciu zámerne nefiltrujem. Cesta z „pen" do „ink" vedie cez slová,
    # ktoré sa v knihách takmer nevyskytujú, a keď chýbajú, dvojica sa nedá
    # prejsť vôbec. Hráčovi širší slovník iba pomáha — čokoľvek, čo je naozaj
    # slovo, mu hra uzná.
    ladder = {str(n): sorted(enable_by_len[n]) for n in (3, 4, 5)}

    # ── five-letters: odpoveď musí byť slovo, ktoré hráč pozná ───────
    five = by_freq(common, length=5, lo=8, limit=800)

    # ── anagram-blitz: podľa dĺžky, súrodenci sú všetky pretvorenia ──
    def key(w):
        return ''.join(sorted(w))
    groups = collections.defaultdict(list)
    for w in weave:
        groups[key(w)].append(w)
    puzzles = {}
    for name, lengths, lo, count in (('easy', (4, 5), 12, 120),
                                     ('medium', (6,), 8, 120),
                                     ('hard', (7, 8), 5, 120)):
        cand = [w for w in by_freq(common, lo=lo) if len(w) in lengths]
        cand = cand[:count * 3]
        picked = []
        for w in cand:
            sib = sorted(groups.get(key(w), [w]))
            picked.append({'word': w, 'siblings': sib})
            if len(picked) >= count:
                break
        puzzles[name] = picked

    print('\nnové zoznamy:')
    print('  word-weave      %6d slov' % len(weave))
    print('  word-ladder     %6d slov (3:%d 4:%d 5:%d)'
          % (sum(len(v) for v in ladder.values()),
             len(ladder['3']), len(ladder['4']), len(ladder['5'])))
    print('  five-letters    %6d slov' % len(five))
    print('  anagram-blitz   %6d úloh' % sum(len(v) for v in puzzles.values()))

    # ── kontrola: každá dvojica v word-ladder musí byť riešiteľná ────
    def solvable(a, b, words):
        ws = set(words)
        if a not in ws or b not in ws:
            return False
        seen, queue = {a}, [a]
        while queue:
            cur = queue.pop(0)
            if cur == b:
                return True
            for i in range(len(cur)):
                for ch in 'abcdefghijklmnopqrstuvwxyz':
                    nxt = cur[:i] + ch + cur[i+1:]
                    if nxt in ws and nxt not in seen:
                        seen.add(nxt)
                        queue.append(nxt)
        return False

    def ladder_pairs():
        src = io.open(ROOT / 'games/word-ladder/index.html', encoding='utf-8').read()
        block = re.search(r'const PUZZLES = \{(.*?)\n            \};', src, re.S).group(1)
        return re.findall(r'\["([a-z]+)", "([a-z]+)"\]', block)

    def check_ladders(sets, label):
        bad = [a + '->' + b for a, b in ladder_pairs()
               if not solvable(a, b, sets[str(len(a))])]
        print('rebríky v word-ladder (%s): %s'
              % (label, 'všetky riešiteľné' if not bad
                 else 'NERIEŠITEĽNÉ: ' + ', '.join(bad)))
        return bad

    print()
    if check_ladders(ladder, 'pred zápisom') and not args.dry_run:
        sys.exit('zastavujem — najprv treba opraviť dvojice')

    if args.dry_run:
        return

    print('\nzapisujem:')
    replace('games/spellweft/index.html',
            r'const WORDS = (\[[^;]*\]);', json.dumps(weave), 'spellweft WORDS')
    replace('games/word-ladder/index.html',
            r'const WORD_SETS = (\{[^;]*\});', json.dumps(ladder), 'word-ladder WORD_SETS')
    replace('games/five-letters/index.html',
            r'const WORDS = ([^;]*)\.split', "'" + ' '.join(five) + "'", 'five-letters WORDS')
    replace('games/anagram-blitz/index.html',
            r'const PUZZLES = (\{[^;]*\});', json.dumps(puzzles), 'anagram-blitz PUZZLES')

    # ── druhý krok: čistenie na holé anglické heslá ──────────────────
    # Beží tu, a nie ako samostatný príkaz, aby jedno spustenie vyrobilo
    # presne to, čo sa distribuuje — inak by regenerácia dala iné súbory,
    # než aké sú v repozitári, a dokumentácia by prestala sedieť.
    print()
    spec = importlib.util.spec_from_file_location(
        'filter_wordlists', Path(__file__).resolve().parent / 'filter-wordlists.py')
    flt = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(flt)
    if flt.main():
        sys.exit('filter hlási chýbajúce koncové slová rebríkov')

    # Filter mohol nejaké slovo odstrániť, takže riešiteľnosť overujem
    # ešte raz — na tom, čo naozaj zostalo v hre.
    final = io.open(ROOT / 'games/word-ladder/index.html', encoding='utf-8').read()
    sets = json.loads(re.search(r'const WORD_SETS = (\{[^;]*\});', final).group(1))
    print()
    if check_ladders(sets, 'po filtri'):
        sys.exit('po filtri prestala byť niektorá dvojica riešiteľná')
    print('\nhotovo')


if __name__ == '__main__':
    main()
