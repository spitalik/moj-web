#!/usr/bin/env python3
"""
Verify every nonogram picture shipped in games/nonogram/index.html is solvable
by pure reasoning — and therefore has exactly one solution.

Why this exists: nonogram used to generate a random grid. A random grid is not
only ugly, it is frequently unfair — somewhere along the way the player runs
out of things to deduce and has to guess, and in this game a guess costs one of
three lives. Measured on random grids: 86 % of 5x5, 73 % of 10x10 and only
62 % of 15x15 could be finished by reasoning alone.

The puzzles are now hand-drawn pictures. This script re-checks them, so a new
drawing cannot slip into the game unverified.

The solver is the standard line-propagation technique: for each row and column
enumerate every placement consistent with the clue and with what is already
known, then keep the cells all placements agree on. Repeat until nothing
changes. If the grid is complete, the puzzle is deducible; if it stalls, the
player would have to guess.

Run from the repository root:  python3 tools/check-nonograms.py
Exits non-zero if any picture fails, so it can gate a release.
"""

import io
import re
import sys

GAME = 'games/nonogram/index.html'

UNKNOWN, FILL, EMPTY = 0, 1, 2


def clues(line):
    out, run = [], 0
    for v in line:
        if v:
            run += 1
        elif run:
            out.append(run)
            run = 0
    if run:
        out.append(run)
    return tuple(out)


def placements(cl, n):
    """every way a line of length n can satisfy the clue"""
    if not cl:
        return [tuple([EMPTY] * n)]
    res = []

    def rec(i, pos, cur):
        if i == len(cl):
            res.append(tuple(cur + [EMPTY] * (n - len(cur))))
            return
        need = sum(cl[i:]) + (len(cl) - i - 1)
        for start in range(pos, n - need + 1):
            row = cur + [EMPTY] * (start - len(cur)) + [FILL] * cl[i]
            if i < len(cl) - 1:
                row = row + [EMPTY]
            rec(i + 1, len(row), row)

    rec(0, 0, [])
    return res


CACHE = {}


def options(cl, n):
    if (cl, n) not in CACHE:
        CACHE[(cl, n)] = placements(cl, n)
    return CACHE[(cl, n)]


def settle(line, cl, n):
    """narrow a line down to what every consistent placement agrees on"""
    ok = [p for p in options(cl, n)
          if all(line[i] == UNKNOWN or line[i] == p[i] for i in range(n))]
    if not ok:
        return None
    out = list(line)
    for i in range(n):
        v = ok[0][i]
        if all(p[i] == v for p in ok):
            out[i] = v
    return out


def deducible(sol):
    n = len(sol)
    rc = [clues(r) for r in sol]
    cc = [clues([sol[r][c] for r in range(n)]) for c in range(n)]
    grid = [[UNKNOWN] * n for _ in range(n)]
    changed = True
    while changed:
        changed = False
        for r in range(n):
            new = settle(grid[r], rc[r], n)
            if new is None:
                return False
            if new != grid[r]:
                grid[r], changed = new, True
        for c in range(n):
            col = [grid[r][c] for r in range(n)]
            new = settle(col, cc[c], n)
            if new is None:
                return False
            if new != col:
                for r in range(n):
                    grid[r][c] = new[r]
                changed = True
    return all(grid[r][c] != UNKNOWN for r in range(n) for c in range(n))


def read_pictures(path):
    """pull the PICTURES literal out of the game"""
    src = io.open(path, encoding='utf-8').read()
    start = src.index('const PICTURES={')
    end = src.index('\n};', start)
    block = src[start:end]
    pics, size = [], None
    for line in block.splitlines():
        line = line.strip()
        m = re.match(r'^(\d+):\[$', line)
        if m:
            size = int(m.group(1))
            continue
        if line.startswith('['):
            parts = re.findall(r"'([^']*)'", line)
            pics.append((size, parts[0], parts[1:]))
    return pics


def main():
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    pics = read_pictures(GAME)
    if not pics:
        sys.exit('no pictures found in ' + GAME)

    bad = 0
    counts = {}
    for size, label, rows in pics:
        counts[size] = counts.get(size, 0) + 1
        where = '%dx%-2d %s' % (size, size, label)
        if len(rows) != size or any(len(r) != size for r in rows):
            print('%s  WRONG SHAPE — expected %d rows of %d' % (where, size, size))
            bad += 1
            continue
        grid = [[1 if ch == '#' else 0 for ch in r] for r in rows]
        if not any(any(r) for r in grid):
            print('%s  EMPTY' % where)
            bad += 1
            continue
        if deducible(grid):
            print('%s  ok — solvable by reasoning, single solution' % where)
        else:
            print('%s  FAILS — needs a guess somewhere' % where)
            bad += 1

    print()
    print('pictures: ' + ', '.join('%d at %dx%d' % (n, s, s) for s, n in sorted(counts.items())))
    if bad:
        sys.exit('%d picture(s) rejected' % bad)
    print('all %d pictures verified' % len(pics))


if __name__ == '__main__':
    main()
