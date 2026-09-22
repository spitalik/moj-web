#!/usr/bin/env python3
"""
Filter every embedded word list in the collection down to plain English
headwords, so the selection is unambiguously this project's own.

Removes:
  * anything outside a-z (accented loanwords: abbé, adiós, café, éclair, vicuña)
  * Roman numerals used as dictionary entries (clii, xxxviii, lxiv, …)
  * words with no vowel at all (y counts as a vowel, so myth/gym/lynx stay)
  * abbreviations with no English-word reading (see ABBREVIATIONS below —
    deliberately conservative: "fig", "lit", "pub", "sat", "sun" and friends
    are real words and are kept)

Run from the repository root:  python3 tools/filter-wordlists.py
Idempotent — running it twice changes nothing.
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Only abbreviations with no plausible reading as an ordinary English word.
ABBREVIATIONS = set("""
abbr abbrev acct addl adj adv advt agt amt appt approx assn asst attn atty avdp avg
bbl bldg blvd bros btu
cdr cmdr comdr corp cwt
dept dg dia diam dl dm doz dtd
encl eqn estd
fahr ff fwd
govt gpm
hdqrs hgt hosp hq hqs hrs hwy
ibid illus incl indef inst intl irreg
khz kw
lbs lieut ltd
mdse mfg mfr mgmt mgr mhz misc mkt ml mm mos mpg mph mrs msec mtg mtn
natl nos nw
pfc pkg pkwy ppd prs pseud
qty quot
recd regt repr reqd rpm rr rte rts
secy sergt sgt sociol sopr subj supt
tbs tbsp tks tps treas tsp
univ usu
whse wks wpm wt
yds yrs
""".split())

BARE_KEY = re.compile(r'(?m)^(\s*)(\d+)(\s*):')
ROMAN = re.compile(r"^m{0,4}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$")
PLAIN = re.compile(r"^[a-z]+$")
VOWELS = set("aeiouy")


def keep(word: str) -> bool:
    if not PLAIN.match(word):
        return False
    if word in ABBREVIATIONS:
        return False
    if not (VOWELS & set(word)):
        return False
    if len(word) >= 2 and ROMAN.match(word):
        return False
    return True


def literal(text: str, decl: str):
    """Parse the JSON literal assigned to `const <decl> = …;`."""
    marker = f"const {decl} = "
    start = text.index(marker) + len(marker)
    end = text.index(";", start)
    while True:
        try:
            return json.loads(BARE_KEY.sub(r'\1"\2"\3:', text[start:end]))
        except json.JSONDecodeError:
            end = text.index(";", end + 1)


def patch(rel: str, decl: str, transform):
    """Rewrite one `const <decl> = <json literal>;` in place."""
    path = ROOT / rel
    text = path.read_text(encoding="utf-8")
    marker = f"const {decl} = "
    start = text.index(marker) + len(marker)
    end = text.index(";", start)
    while True:  # tolerate ';' inside the literal by checking it parses
        try:
            value = json.loads(BARE_KEY.sub(r'\1"\2"\3:', text[start:end]))
            break
        except json.JSONDecodeError:
            end = text.index(";", end + 1)
    new_value, before, after = transform(value)
    if before == after:
        print(f"  {rel:44s} {decl:12s} {before:>6d} words  (unchanged)")
        return 0
    path.write_text(text[:start] + json.dumps(new_value, ensure_ascii=False) + text[end:], encoding="utf-8")
    print(f"  {rel:44s} {decl:12s} {before:>6d} -> {after:<6d} (-{before - after})")
    return before - after


def flat(words):
    out = [w for w in words if keep(w)]
    return out, len(words), len(out)


def buckets(obj):
    out = {k: [w for w in v if keep(w)] for k, v in obj.items()}
    return out, sum(len(v) for v in obj.values()), sum(len(v) for v in out.values())


def anagrams(obj):
    out = {}
    for tier, entries in obj.items():
        kept = []
        for e in entries:
            if not keep(e["word"]):
                continue
            sib = [w for w in e["siblings"] if keep(w)]
            if sib:
                kept.append({"word": e["word"], "siblings": sib})
        out[tier] = kept
    return out, sum(len(v) for v in obj.values()), sum(len(v) for v in out.values())


def check_split_string(rel: str, decl: str, terminator: str):
    """five-letters / hidden-word store words as concatenated JS string literals."""
    text = (ROOT / rel).read_text(encoding="utf-8")
    start = text.index(f"const {decl} = ")
    region = text[start:text.index(terminator, start)]
    words = {w for w in re.findall(r"[^\W\d_]{2,}", region, re.UNICODE) if w.islower()}
    bad = sorted(w for w in words if not keep(w) and w != "split")
    print(f"  {rel:44s} {decl:12s} {len(words):>6d} words  "
          f"{'clean' if not bad else 'CHECK: ' + ', '.join(bad[:12])}")


def main():
    print("Filtering embedded word lists\n")
    removed = 0
    removed += patch("games/word-weave/index.html", "WORDS", flat)
    removed += patch("games/word-ladder/index.html", "WORD_SETS", buckets)
    removed += patch("games/type-rush/index.html", "WORD_POOLS", buckets)
    removed += patch("games/anagram-blitz/index.html", "PUZZLES", anagrams)
    check_split_string("games/five-letters/index.html", "WORDS", ".split(' ')")
    check_split_string("games/hidden-word/index.html", "BANK", "\n        };")

    # word-ladder ships fixed start/target pairs — they must survive the filter
    text = (ROOT / "games/word-ladder/index.html").read_text(encoding="utf-8")
    sets = literal(text, "WORD_SETS")
    puzzles = literal(text, "PUZZLES")
    missing = [(n, p, w) for n, pairs in puzzles.items() for p in pairs for w in p if w not in sets[n]]
    print(f"\n  word-ladder puzzle endpoints still present: {'yes, all ' + str(sum(len(v) * 2 for v in puzzles.values())) if not missing else 'NO -> ' + str(missing)}")
    print(f"\nRemoved {removed} entries in total.")
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
