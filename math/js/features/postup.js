/* Kontrola vlastného postupu: žiak píše riešenie riadok po riadku (výraz, rovnica alebo nerovnica)
   a aplikácia overí, či je každý krok matematicky ekvivalentný s predchádzajúcim riadkom – nie či je
   „správny spôsob“. Všetko numericky (MATHEXPR, js/mathexpr.js):
   - výrazy: hodnoty v náhodných bodoch, upozornenie na zmenu definičného oboru (krátenie zlomku),
   - rovnice s jednou neznámou: množina koreňov (vzorkovanie, zmena znamienka + bisekcia, dotyky),
     identita a rovnica bez riešenia; stratené korene ✗, pribudnuté ⚠ (skúška), konkrétne rady,
   - rovnice s viacerými premennými (vyjadrenie zo vzorca): korene pre zvolenú premennú pri náhodných
     hodnotách ostatných,
   - nerovnice: porovnanie množín riešení na hustej mriežke (aj otočenie znaku nerovnosti).
   Riadok môže obsahovať viac rovníc spojených „;“ alebo „alebo/or/∨“ (x = 2 ∨ x = 3).
   Logika bez DOM je vo window.STEPCHECK (testuje sa v node), rozhranie je route #/postup. */
(function () {
  'use strict';
  const ME = window.MATHEXPR;

  /* ---------- pomocné ---------- */
  // pseudonáhodné čísla s pevným semienkom – rovnaký vstup dá vždy rovnaký výsledok
  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const fin = (v) => typeof v === 'number' && isFinite(v);
  const close = (a, b) => Math.abs(a - b) <= 1e-5 * (1 + Math.abs(a));

  // mriežka na hľadanie koreňov: hustejšie okolo 0, celé čísla, jednoduché zlomky, riedko až po ±10⁶
  const GRID = (() => {
    const s = new Set();
    for (let i = -1500; i <= 1500; i++) { const t = i / 1500; s.add(+(100 * (0.25 * t + 0.75 * t * t * t)).toPrecision(12)); }
    for (let k = -100; k <= 100; k++) s.add(k);
    for (let q = 2; q <= 12; q++) for (let p = -10 * q; p <= 10 * q; p++) s.add(p / q);
    for (let i = 1; i <= 300; i++) { const x = +(100 * Math.pow(10, 4 * i / 300)).toPrecision(12); s.add(x); s.add(-x); }
    return [...s].sort((a, b) => a - b);
  })();

  /* ---------- rozdelenie a rozbor riadku ---------- */
  const OR_RE = /\s+(?:alebo|or|oder|ou|o|или|veya|ya da)\s+|;|∨|または|또는|或者|或/gi;
  // poznámka k úprave na konci riadku: „2x = 6  / :2“, „| ·3“, „/ ()²“
  const NOTE_RE = /^(.*\S)\s+[/|]\s*((?:[:·*×÷+\-−^²√]|\(\s*\)).*)$/;

  function splitParts(src) {
    const out = [];
    let last = 0, m;
    OR_RE.lastIndex = 0;
    while ((m = OR_RE.exec(src))) {
      out.push({ s: src.slice(last, m.index), off: last });
      last = m.index + m[0].length;
    }
    out.push({ s: src.slice(last), off: last });
    return out;
  }

  // rozbor jedného riadku; { ok: false, key, pos } pri chybe zápisu
  function parseRow(src, allowCont) {
    const raw = String(src || '');
    if (!raw.trim()) return { ok: false, empty: true };
    try { return parseRowStrict(raw, allowCont); } catch (e) {
      if (!(e instanceof ME.Error)) throw e;
      const m = raw.match(NOTE_RE);
      if (m) {
        try { const r = parseRowStrict(m[1], allowCont); r.note = m[2]; return r; } catch (e2) { /* pôvodná chyba */ }
      }
      return { ok: false, key: e.key, pos: e.pos };
    }
  }

  function parseRowStrict(raw, allowCont) {
    // pokračovanie úpravy výrazu: riadok začína „=“
    const cont = allowCont && /^\s*=/.test(raw);
    const src = cont ? raw.replace(/^\s*=/, ' ') : raw;
    const pieces = splitParts(src);
    const parts = [];
    pieces.forEach((pc) => {
      let r;
      try { r = ME.relation(pc.s); } catch (e) { if (e instanceof ME.Error) e.pos += pc.off; throw e; }
      parts.push(r);
    });
    if (parts.length === 1 && !parts[0].op) {
      const e = parts[0].expr;
      return { ok: true, kind: 'expr', expr: e, vars: e.vars, cont, tex: (dec) => (cont ? '= ' : '') + e.tex(dec) };
    }
    const bad = parts.findIndex((p) => !p.op);
    if (bad >= 0) throw new ME.Error('exprRel', pieces[bad].off + pieces[bad].s.length);
    if (cont) throw new ME.Error('exprTwoRel', 0);
    const vars = [...new Set(parts.flatMap((p) => p.vars))].sort();
    const kind = parts.every((p) => p.op === '=') ? 'eq' : 'rel';
    return { ok: true, kind, parts, vars, tex: (dec) => parts.map((p) => p.tex(dec)).join(' \\;\\vee\\; ') };
  }

  /* ---------- rovnice: korene funkcie jednej premennej ---------- */
  // part: { left, right } z MATHEXPR; v: premenná; base: hodnoty ostatných premenných
  function partEval(part, scope) {
    const l = part.left.fn(scope), r = part.right.fn(scope);
    if (!fin(l) || !fin(r)) return null;
    return { d: l - r, s: 1 + Math.abs(l) + Math.abs(r) };
  }

  function solve1(part, v, base) {
    const sc = Object.assign({}, base);
    const ev = (x) => { sc[v] = x; return partEval(part, sc); };
    const xs = GRID, n = xs.length, F = new Array(n);
    const roots = [];
    let cnt = 0, zero = 0;
    const isZero = (f, k) => f && Math.abs(f.d) <= (k || 1e-9) * f.s;
    for (let i = 0; i < n; i++) {
      F[i] = ev(xs[i]);
      if (F[i]) { cnt++; if (isZero(F[i])) { zero++; roots.push(xs[i]); } }
    }
    if (cnt >= 20 && zero >= 0.97 * cnt) return { all: true, roots: [] };
    if (cnt === 0) return { all: false, roots: [], empty: true };
    for (let i = 0; i + 1 < n; i++) {
      const a = F[i], b = F[i + 1];
      if (a && b) {
        if (isZero(a) || isZero(b)) continue;
        if ((a.d < 0) !== (b.d < 0)) {
          // zmena znamienka: bisekcia; pól (1/(x−1)) sa vylúči kontrolou hodnoty
          let lo = xs[i], hi = xs[i + 1], flo = a.d;
          for (let k = 0; k < 80 && hi - lo > 0; k++) {
            const mid = (lo + hi) / 2;
            if (mid === lo || mid === hi) break;
            const fm = ev(mid);
            if (!fm) { lo = NaN; break; }
            if ((fm.d < 0) === (flo < 0)) { lo = mid; flo = fm.d; } else hi = mid;
          }
          if (!isNaN(lo)) {
            const ca = ev(lo), cb = ev(hi);
            const best = ca && cb ? (Math.abs(ca.d) <= Math.abs(cb.d) ? [lo, ca] : [hi, cb]) : ca ? [lo, ca] : cb ? [hi, cb] : null;
            if (best && isZero(best[1], 1e-6)) roots.push(best[0]);
          }
        }
      } else if (a || b) {
        // okraj definičného oboru (√x = 0): nájdeme hranicu a pozrieme hodnotu tesne pri nej
        let inside = a ? xs[i] : xs[i + 1], out = a ? xs[i + 1] : xs[i];
        for (let k = 0; k < 70; k++) {
          const mid = (inside + out) / 2;
          if (mid === inside || mid === out) break;
          if (ev(mid)) inside = mid; else out = mid;
        }
        const fe = ev(inside);
        // pri póle (x/(x−1) − 1/(x−1)) sú hodnoty obrovské a rozdiel len šum – to nie je koreň
        if (fe && fe.s < 1e9 && isZero(fe, 1e-6)) roots.push(inside);
      }
    }
    // dotyky (x − 3)² = 0: lokálne minimum |f| bez zmeny znamienka, spresnené zlatým rezom
    for (let i = 1; i + 1 < n; i++) {
      const a = F[i - 1], b = F[i], c = F[i + 1];
      if (!a || !b || !c || isZero(b)) continue;
      if (!(Math.abs(b.d) <= Math.abs(a.d) && Math.abs(b.d) < Math.abs(c.d))) continue;
      if ((a.d < 0) !== (b.d < 0) || (b.d < 0) !== (c.d < 0)) continue;
      let lo = xs[i - 1], hi = xs[i + 1];
      const g = (Math.sqrt(5) - 1) / 2;
      const h = (x) => { const f = ev(x); return f ? Math.abs(f.d) : Infinity; };
      let x1 = hi - g * (hi - lo), x2 = lo + g * (hi - lo), h1 = h(x1), h2 = h(x2);
      for (let k = 0; k < 90 && hi - lo > 1e-14 * (1 + Math.abs(lo)); k++) {
        if (h1 < h2) { hi = x2; x2 = x1; h2 = h1; x1 = hi - g * (hi - lo); h1 = h(x1); }
        else { lo = x1; x1 = x2; h1 = h2; x2 = lo + g * (hi - lo); h2 = h(x2); }
      }
      const xm = h1 < h2 ? x1 : x2, fm = ev(xm);
      if (fm && isZero(fm, 1e-7)) roots.push(xm);
    }
    roots.sort((p, q) => p - q);
    const uniq = [];
    roots.forEach((x) => { if (!uniq.length || Math.abs(x - uniq[uniq.length - 1]) > 1e-6 * (1 + Math.abs(x))) uniq.push(x); });
    // celé číslo alebo jednoduchý zlomok namiesto 2.9999999999
    return { all: false, roots: uniq.slice(0, 400).map(snap) };
  }

  function snap(x) {
    const r = Math.round(x);
    if (Math.abs(x - r) < 1e-7 * (1 + Math.abs(x))) return r;
    for (let q = 2; q <= 12; q++) {
      const p = Math.round(x * q);
      if (Math.abs(x - p / q) < 1e-8 * (1 + Math.abs(x))) return p / q;
    }
    return x;
  }

  // množina riešení riadku (zjednotenie častí spojených „alebo“)
  function solveRow(row, v, base) {
    const res = { all: false, roots: [] };
    row.parts.forEach((p) => {
      if (p.op !== '=') return;
      const s = solve1(p, v, base);
      if (s.all) res.all = true;
      res.roots.push(...s.roots);
    });
    res.roots.sort((a, b) => a - b);
    res.roots = res.roots.filter((x, i, arr) => !i || !close(arr[i - 1], x));
    return res;
  }

  function diffRoots(A, B) {
    return {
      lost: A.roots.filter((x) => !B.roots.some((y) => close(x, y))),
      gained: B.roots.filter((y) => !A.roots.some((x) => close(x, y)))
    };
  }

  /* ---------- formátovanie (TeX) ---------- */
  const varTex = (v) => (v.length > 1 && /\d/.test(v) ? `${v[0]}_{${v.slice(1)}}` : v);
  function numTex(x, dec) {
    const d = (s) => (dec === '.' ? s : s.replace('.', '{,}'));
    if (!fin(x)) return '\\text{–}';
    if (Number.isInteger(x)) return String(x);
    for (let q = 2; q <= 50; q++) {
      const p = Math.round(x * q);
      if (Math.abs(x - p / q) < 1e-9 * (1 + Math.abs(x))) return `${p < 0 ? '-' : ''}\\frac{${Math.abs(p)}}{${q}}`;
    }
    return d(String(+x.toPrecision(5)));
  }
  const rootsTex = (v, rs, dec) => {
    const shown = rs.slice(0, 5).map((x) => `$${varTex(v)} = ${numTex(x, dec)}$`);
    return shown.join(', ') + (rs.length > 5 ? ', …' : '');
  };
  const pointTex = (pt, dec) => '$' + Object.keys(pt).sort().map((k) => `${varTex(k)} = ${numTex(pt[k], dec)}`).join(',\\ ') + '$';

  /* ---------- porovnávanie funkcií v náhodných bodoch ---------- */
  function samplePoints(vars, count, seed, opts) {
    const r = rng(seed);
    const pts = [];
    const ints = (opts && opts.ints) || 0;
    for (let i = 0; i < count; i++) {
      const pt = {};
      vars.forEach((v) => {
        if (i < ints) pt[v] = Math.floor(r() * 9) - 4 || 5;
        else pt[v] = +((r() * 2 - 1) * ((opts && opts.range) || 10)).toFixed(6);
      });
      pts.push(pt);
    }
    return pts;
  }
  // fa, fb: scope → číslo; true, ak sa zhodujú vo všetkých bodoch, kde sú obe definované (aspoň 5)
  function sameFn(fa, fb, vars, seed) {
    let n = 0;
    for (const pt of samplePoints(vars, 60, seed || 7)) {
      const a = fa(pt), b = fb(pt);
      if (!fin(a) || !fin(b)) continue;
      n++;
      if (Math.abs(a - b) > 1e-8 * (1 + Math.abs(a) + Math.abs(b))) return false;
    }
    return n >= 5;
  }
  // fb = k·fa pre konštantu k ≠ 0? vráti k alebo null
  function ratioFn(fa, fb, vars) {
    let k = null, n = 0;
    for (const pt of samplePoints(vars, 60, 11)) {
      const a = fa(pt), b = fb(pt);
      if (!fin(a) || !fin(b)) continue;
      if (k === null) { if (Math.abs(a) > 1e-6) k = b / a; else continue; }
      n++;
      if (Math.abs(b - k * a) > 1e-8 * (1 + Math.abs(a) + Math.abs(b))) return null;
    }
    return n >= 5 && k !== 0 && fin(k) ? k : null;
  }
  const diffFn = (part) => (s) => part.left.fn(s) - part.right.fn(s);

  // sčítance na najvyššej úrovni so znamienkom: 3x − 2 + 5 → [+3x, −2, +5]
  function terms(ast, sign, out) {
    out = out || [];
    sign = sign || 1;
    if (ast.k === 'add') { terms(ast.a, sign, out); terms(ast.b, sign, out); } else if (ast.k === 'sub') { terms(ast.a, sign, out); terms(ast.b, -sign, out); } else if (ast.k === 'neg') terms(ast.a, -sign, out);
    else out.push({ ast, sign });
    return out;
  }

  // rady pri chybe v rovnici (jedna časť v oboch riadkoch)
  function eqHints(pp, pc, vars, dec) {
    const f = diffFn(pp), g = diffFn(pc);
    // znamienko pri prenášaní: člen t prešiel na druhú stranu bez zmeny znamienka
    const sides = [[pp.left.ast, -2], [pp.right.ast, 2]];
    for (const [ast, mult] of sides) {
      for (const tm of terms(ast)) {
        const te = ME.fromAst(tm.ast);
        if (!te.vars.length && te.fn({}) === 0) continue;
        const h = (s) => f(s) + mult * tm.sign * te.fn(s);
        const k = ratioFn(h, g, vars);
        if (k !== null) {
          const tt = (tm.sign < 0 ? '-' : '') + te.tex(dec);
          return { s: 'hint', key: 'ownStepsHintSign', vars: { term: `$${tt}$` } };
        }
      }
    }
    const cL = ratioFn(pp.left.fn, pc.left.fn, vars), cR = ratioFn(pp.right.fn, pc.right.fn, vars);
    if (cL !== null && cR !== null && Math.abs(cL - cR) > 1e-6 * (1 + Math.abs(cL))) return { s: 'hint', key: 'ownStepsHintBoth' };
    const sameL = sameFn(pp.left.fn, pc.left.fn, vars), sameR = sameFn(pp.right.fn, pc.right.fn, vars);
    if (sameL && !sameR) return { s: 'hint', key: 'ownStepsHintRight' };
    if (sameR && !sameL) return { s: 'hint', key: 'ownStepsHintLeft' };
    return null;
  }

  /* ---------- porovnanie dvoch riadkov ---------- */
  // výrazy
  function cmpExpr(A, B, dec) {
    const vars = [...new Set([...A.vars, ...B.vars])].sort();
    const fa = A.expr.fn, fb = B.expr.fn;
    const pts = samplePoints(vars, 120, 3, { ints: 40 });
    let n = 0, bad = null;
    for (const pt of pts) {
      const a = fa(pt), b = fb(pt);
      if (!fin(a) || !fin(b)) continue;
      n++;
      if (Math.abs(a - b) > 1e-8 * (1 + Math.abs(a) + Math.abs(b))) { bad = { pt, a, b }; break; }
    }
    if (!vars.length && !n) return { status: 'warn', msgs: [{ s: 'warn', key: 'ownStepsUnknown' }] };
    if (bad) {
      return { status: 'bad', msgs: [{ s: 'bad', key: 'ownStepsExprBad', vars: { at: vars.length ? pointTex(bad.pt, dec) : '', a: `$${numTex(snap(bad.a), dec)}$`, b: `$${numTex(snap(bad.b), dec)}$` } }] };
    }
    if (n < 5 && vars.length) return { status: 'warn', msgs: [{ s: 'warn', key: 'ownStepsUnknown' }] };
    const msgs = [{ s: 'ok', key: 'ownStepsExprOk' }];
    const dn = domainNote(A, B, vars, dec);
    if (dn) msgs.push(dn);
    return { status: 'ok', msgs };
  }

  // menovatele výrazu (uzly delenia), aby sme vedeli nájsť body mimo definičného oboru
  function denominators(ast, out) {
    out = out || [];
    if (!ast) return out;
    if (ast.k === 'div') out.push(ast.b);
    if (ast.k === 'pow' && ast.b.k === 'neg') out.push(ast.a);
    denominators(ast.a, out); denominators(ast.b, out);
    return out;
  }
  function definedAt(e, dens, pt) {
    if (!fin(e.fn(pt))) return false;
    return dens.every((d) => { const v = d.fn(pt); return fin(v) && Math.abs(v) > 1e-10; });
  }
  function domainNote(A, B, vars, dec) {
    const dA = denominators(A.expr.ast).map(ME.fromAst), dB = denominators(B.expr.ast).map(ME.fromAst);
    if (vars.length === 1) {
      const v = vars[0];
      const cand = new Set();
      for (let k = -20; k <= 20; k++) cand.add(k);
      [...dA, ...dB].forEach((d) => solve1({ left: d, right: ME.parse('0') }, v, {}).roots.forEach((x) => cand.add(x)));
      const diff = [...cand].filter((x) => definedAt(A.expr, dA, { [v]: x }) !== definedAt(B.expr, dB, { [v]: x })).sort((a, b) => a - b);
      if (!diff.length) return null;
      if (diff.length > 4) return { s: 'note', key: 'ownStepsDomainGen' };
      return { s: 'note', key: 'ownStepsDomain', vars: { cond: '$' + diff.map((x) => `${varTex(v)} \\ne ${numTex(x, dec)}`).join(',\\ ') + '$' } };
    }
    for (const pt of samplePoints(vars, 200, 5, { ints: 200 })) {
      if (definedAt(A.expr, dA, pt) !== definedAt(B.expr, dB, pt)) return { s: 'note', key: 'ownStepsDomainGen' };
    }
    return null;
  }

  // premenná, ktorú žiak vyjadruje (sama na jednej strane), inak prvá
  function targetVar(A, B, vars) {
    for (const R of [B, A]) {
      if (R.parts.length !== 1) continue;
      const p = R.parts[0];
      if (p.left.ast.k === 'var' && !p.right.vars.includes(p.left.ast.v)) return p.left.ast.v;
      if (p.right.ast.k === 'var' && !p.left.vars.includes(p.right.ast.v)) return p.right.ast.v;
    }
    return vars[0];
  }

  // rovnice (všetky časti „=“)
  function cmpEq(A, B, dec) {
    const vars = [...new Set([...A.vars, ...B.vars])].sort();
    if (vars.length <= 1) {
      const v = vars[0] || 'x';
      const SA = solveRow(A, v, {}), SB = solveRow(B, v, {});
      if (SA.all && SB.all) return { status: 'ok', msgs: [{ s: 'ok', key: 'ownStepsEqOk' }] };
      if (SA.all) return withHints({ status: 'bad', msgs: [{ s: 'bad', key: 'ownStepsWasAll', vars: { v: `$${varTex(v)}$` } }] }, A, B, vars, dec);
      if (SB.all) return withHints({ status: 'bad', msgs: [{ s: 'bad', key: 'ownStepsNowAll', vars: { v: `$${varTex(v)}$` } }] }, A, B, vars, dec);
      const { lost, gained } = diffRoots(SA, SB);
      if (!lost.length && !gained.length) return { status: 'ok', msgs: [{ s: 'ok', key: 'ownStepsEqOk' }] };
      if (lost.length && !gained.length) return { status: 'bad', msgs: [{ s: 'bad', key: 'ownStepsLost', vars: { roots: rootsTex(v, lost, dec) } }] };
      if (gained.length && !lost.length) return { status: 'warn', msgs: [{ s: 'warn', key: 'ownStepsGained', vars: { roots: rootsTex(v, gained, dec) } }] };
      return withHints({ status: 'bad', msgs: [{ s: 'bad', key: 'ownStepsWrong' }] }, A, B, vars, dec);
    }
    // viac premenných: korene cieľovej premennej pri náhodných kladných hodnotách ostatných
    const v = targetVar(A, B, vars);
    const others = vars.filter((x) => x !== v);
    const r = rng(17);
    let allEq = true, posEq = true, anyLost = false, witness = null;
    for (let i = 0; i < 12; i++) {
      const base = {};
      others.forEach((o) => { base[o] = i < 6 ? 1 + Math.floor(r() * 9) : +(0.5 + r() * 5.5).toFixed(3); });
      const SA = solveRow(A, v, base), SB = solveRow(B, v, base);
      if (SA.all !== SB.all) { allEq = posEq = false; anyLost = anyLost || SA.all; if (!witness) witness = { base, SA, SB }; continue; }
      if (SA.all) continue;
      const { lost, gained } = diffRoots(SA, SB);
      if (lost.length || gained.length) {
        allEq = false;
        if (lost.length) anyLost = true;
        if (!witness) witness = { base, SA, SB };
        if (lost.some((x) => x > 0) || gained.some((x) => x > 0)) posEq = false;
      }
    }
    if (allEq) return { status: 'ok', msgs: [{ s: 'ok', key: 'ownStepsEqOk' }] };
    if (posEq) return { status: 'ok', msgs: [{ s: 'ok', key: 'ownStepsEqOk' }, { s: 'note', key: 'ownStepsPositive' }] };
    const show = (S) => (S.all ? '$\\forall$' : S.roots.length ? rootsTex(v, S.roots, dec) : '$\\emptyset$');
    const msg = { s: anyLost ? 'bad' : 'warn', key: 'ownStepsFormulaDiff', vars: { at: pointTex(witness.base, dec), a: show(witness.SA), b: show(witness.SB) } };
    const res = { status: anyLost ? 'bad' : 'warn', msgs: [msg] };
    if (!anyLost) res.msgs.push({ s: 'warn', key: 'ownStepsCheckHint' });
    return anyLost ? withHints(res, A, B, vars, dec) : res;
  }
  function withHints(res, A, B, vars, dec) {
    if (A.parts.length === 1 && B.parts.length === 1) {
      const h = eqHints(A.parts[0], B.parts[0], vars, dec);
      if (h) res.msgs.push(h);
    }
    return res;
  }

  // nerovnice (a zmiešané riadky): porovnanie príslušnosti k množine riešení v bodoch
  const FLIP = { '<': '>', '>': '<', '≤': '≥', '≥': '≤', '=': '=', '≠': '≠' };
  function holds(op, f) {
    if (!f) return false;
    const tol = 1e-9 * f.s;
    switch (op) {
      case '=': return Math.abs(f.d) <= tol;
      case '≠': return Math.abs(f.d) > tol;
      case '<': return f.d < -tol;
      case '≤': return f.d <= tol;
      case '>': return f.d > tol;
      case '≥': return f.d >= -tol;
      default: return false;
    }
  }
  const member = (row, pt, flip) => row.parts.some((p) => holds(flip ? FLIP[p.op] : p.op, partEval(p, pt)));

  function relPoints(A, B, vars) {
    if (vars.length === 1) {
      const v = vars[0];
      const xs = new Set(GRID);
      [A, B].forEach((R) => R.parts.forEach((p) => solve1(p, v, {}).roots.forEach((x) => { xs.add(x); xs.add(x - 1e-3); xs.add(x + 1e-3); })));
      return [...xs].sort((a, b) => a - b).map((x) => ({ [v]: x }));
    }
    if (!vars.length) return [{}];
    return samplePoints(vars, 800, 23, { ints: 200 });
  }
  // „pekný“ bod na ukážku rozdielu: celé čísla s malou absolútnou hodnotou majú prednosť
  function nicePoint(list) {
    const score = (pt) => Object.values(pt).reduce((s, x) => s + (Number.isInteger(x) ? Math.abs(x) : 1000 + Math.abs(x)), 0);
    return list.reduce((b, pt) => (score(pt) < score(b) ? pt : b), list[0]);
  }

  function cmpRel(A, B, dec) {
    const vars = [...new Set([...A.vars, ...B.vars])].sort();
    const pts = relPoints(A, B, vars);
    const lost = [], gained = [];
    pts.forEach((pt) => {
      const a = member(A, pt), b = member(B, pt);
      if (a && !b) lost.push(pt); else if (b && !a) gained.push(pt);
    });
    if (!lost.length && !gained.length) return { status: 'ok', msgs: [{ s: 'ok', key: 'ownStepsRelOk' }] };
    const msgs = [];
    const at = (list) => (vars.length ? pointTex(nicePoint(list), dec) : '');
    if (lost.length) msgs.push({ s: 'bad', key: 'ownStepsRelLost', vars: { at: at(lost) } });
    else msgs.push({ s: 'bad', key: 'ownStepsRelGained', vars: { at: at(gained) } });
    // zabudnuté otočenie znaku: s opačným znakom by riadok sedel
    if (B.parts.some((p) => p.op !== '=' && p.op !== '≠')) {
      const flipOk = pts.every((pt) => member(A, pt) === member(B, pt, true) || B.parts.some((p) => { const f = partEval(p, pt); return f && Math.abs(f.d) <= 1e-9 * f.s; }));
      if (flipOk) msgs.push({ s: 'hint', key: 'ownStepsHintFlip' });
    }
    return { status: 'bad', msgs };
  }

  // porovnanie riadku B s predchádzajúcim riadkom A (oba už rozobrané)
  function compare(A, B, dec) {
    if ((A.kind === 'expr') !== (B.kind === 'expr')) return { status: 'bad', msgs: [{ s: 'bad', key: A.kind === 'expr' ? 'ownStepsExprToRel' : 'ownStepsRelToExpr' }] };
    if (A.kind === 'expr') return cmpExpr(A, B, dec);
    if (A.kind === 'eq' && B.kind === 'eq') return cmpEq(A, B, dec);
    return cmpRel(A, B, dec);
  }

  /* ---------- posledný riadok: výsledok a skúška ---------- */
  function finalForm(R) {
    if (R.kind === 'expr') return null;
    if (!R.vars.length) return { type: 'const' };
    const sol = [];
    let v = null;
    for (const p of R.parts) {
      let varSide, other, op = p.op;
      if (p.left.ast.k === 'var' && !p.right.vars.length) { varSide = p.left; other = p.right; } else if (p.right.ast.k === 'var' && !p.left.vars.length) { varSide = p.right; other = p.left; op = FLIP[op]; } else { sol.length = 0; break; }
      if (v && v !== varSide.ast.v) { sol.length = 0; break; }
      v = varSide.ast.v;
      sol.push({ op, val: other.fn({}) });
    }
    if (sol.length && sol.every((s) => fin(s.val))) return { type: sol.every((s) => s.op === '=') ? 'values' : 'ineq', v, sol };
    if (R.kind === 'eq' && R.parts.length === 1 && R.vars.length > 1) {
      const p = R.parts[0];
      if (p.left.ast.k === 'var' && !p.right.vars.includes(p.left.ast.v)) return { type: 'formula', v: p.left.ast.v };
      if (p.right.ast.k === 'var' && !p.left.vars.includes(p.right.ast.v)) return { type: 'formula', v: p.right.ast.v };
    }
    return null;
  }

  function finish(first, last, dec) {
    const F = finalForm(last);
    if (!F) return [];
    const msgs = [];
    if (F.type === 'const') {
      const t = member(last, {});
      if (last.kind === 'eq' || last.kind === 'rel') msgs.push({ s: 'done', key: t ? 'ownStepsDoneAll' : 'ownStepsDoneNone', vars: { v: first.vars.length ? `$${varTex(first.vars[0])}$` : '' } });
      return msgs;
    }
    if (F.type === 'formula') {
      msgs.push({ s: 'done', key: 'ownStepsDoneFormula', vars: { v: `$${varTex(F.v)}$` } });
      return msgs;
    }
    msgs.push({ s: 'done', key: 'ownStepsDone', vars: { sol: `$${last.tex(dec)}$` } });
    if (first === last || first.kind === 'expr') return msgs;
    if (F.type === 'values' && first.vars.length === 1 && first.vars[0] === F.v) {
      // skúška: dosadenie do zadania (prvého riadku)
      F.sol.forEach(({ val }) => {
        const pt = { [F.v]: val };
        const ok = member(first, pt);
        const p = first.parts[0];
        const l = p.left.fn(pt), r = p.right.fn(pt);
        const vars = { sol: `$${varTex(F.v)} = ${numTex(snap(val), dec)}$`, l: `$${numTex(snap(l), dec)}$`, r: `$${numTex(snap(r), dec)}$` };
        if (ok) msgs.push({ s: 'ok', key: first.parts.length === 1 && p.op === '=' ? 'ownStepsCheckOk' : 'ownStepsCheckOkRel', vars });
        else if (first.parts.length === 1 && p.op === '=' && fin(l) && fin(r) && Math.abs(l - r) <= 1e-3 * (1 + Math.abs(l) + Math.abs(r))) msgs.push({ s: 'warn', key: 'ownStepsCheckApprox', vars });
        else if (!fin(l) || !fin(r)) msgs.push({ s: 'bad', key: 'ownStepsCheckUndef', vars });
        else msgs.push({ s: 'bad', key: 'ownStepsCheckBad', vars });
      });
    } else if (first.vars.length <= 1 && (!first.vars.length || first.vars[0] === F.v)) {
      const r = cmpRel(first, last, dec);
      msgs.push(r.status === 'ok' ? { s: 'ok', key: 'ownStepsCheckSetOk' } : { s: 'bad', key: 'ownStepsCheckSetBad' });
    }
    return msgs;
  }

  /* ---------- celý postup ---------- */
  const RANK = { ok: 0, note: 0, hint: 0, done: 0, warn: 1, bad: 2 };
  const CACHE = new Map();
  // lines: pole reťazcov; vráti { rows: [{ status, tex, note, msgs }], summary }
  function checkAll(lines, opts) {
    const dec = (opts && opts.dec) || ',';
    const rows = [];
    let prev = null, prevSrc = '', first = null, lastIdx = -1;
    lines.forEach((src, i) => { if (String(src || '').trim()) lastIdx = i; });
    lines.forEach((src, i) => {
      const R = parseRow(src, !!prev && prev.kind === 'expr');
      if (!R.ok) {
        rows.push(R.empty ? { status: 'empty', msgs: [] } : { status: 'err', msgs: [{ s: 'bad', key: R.key, vars: { pos: R.pos + 1 } }] });
        return;
      }
      const row = { tex: R.tex(dec), note: R.note || '', msgs: [] };
      if (!prev) {
        row.status = 'start';
        const key = R.kind === 'expr' ? 'ownStepsStartExpr' : R.kind === 'eq' ? (R.vars.length > 1 ? 'ownStepsStartFormula' : 'ownStepsStartEq') : 'ownStepsStartRel';
        row.msgs.push({ s: 'info', key, vars: { v: R.vars.length ? `$${varTex(R.vars[0])}$` : '' } });
        first = R;
      } else {
        // výsledok porovnania dvojice riadkov si pamätáme – pri písaní sa mení len jeden riadok
        const ck = `${dec}\u0001${prevSrc}\u0001${src}`;
        let res = CACHE.get(ck);
        if (!res) {
          try { res = compare(prev, R, dec); } catch (e) { res = { status: 'warn', msgs: [{ s: 'warn', key: 'ownStepsUnknown' }] }; }
          if (CACHE.size > 300) CACHE.clear();
          CACHE.set(ck, res);
        }
        res = { status: res.status, msgs: res.msgs.slice() };
        row.status = res.status;
        row.msgs.push(...res.msgs);
      }
      if (i === lastIdx && first && R !== first) row.msgs.push(...finish(first, R, dec));
      // horší stav podľa skúšky (napr. pribudnutý koreň, ktorý nevyhovuje zadaniu)
      row.msgs.forEach((m) => { if (row.status !== 'start' && RANK[m.s] > RANK[row.status]) row.status = m.s; });
      rows.push(row);
      prev = R;
      prevSrc = src;
    });
    const checked = rows.filter((r) => ['ok', 'warn', 'bad', 'err'].includes(r.status));
    const summary = !checked.length ? null : checked.some((r) => r.status === 'bad' || r.status === 'err') ? 'bad' : checked.some((r) => r.status === 'warn') ? 'warn' : 'ok';
    return { rows, summary };
  }

  // kontrola jedného kroku (pre testy a iné funkcie)
  function check(prevSrc, curSrc, opts) {
    const r = checkAll([prevSrc, curSrc], opts);
    return r.rows[1];
  }

  window.STEPCHECK = { check, checkAll, parseRow, solve1, numTex };

  /* =================== rozhranie (len v prehliadači) =================== */
  if (!window.APP || typeof document === 'undefined') return;
  const { t, esc } = APP;

  const EXAMPLES = [
    { key: 'ownStepsExLinear', task: '3(x - 2) + 4 = 2x + 5' },
    { key: 'ownStepsExFractions', task: '(x + 1)/2 - (x - 1)/3 = 2' },
    { key: 'ownStepsExQuadratic', task: 'x^2 - 5x + 6 = 0' },
    { key: 'ownStepsExExpr', task: '(x + 3)^2 - (x - 3)^2' },
    { key: 'ownStepsExFormula', task: 'S = a·v/2' },
    { key: 'ownStepsExIneq', task: '3 - 2x > 7' }
  ];
  // úvodné zadanie podľa lekcie (témy Výrazy a Rovnice)
  const LESSON_TASKS = {
    'r8-mocniny': 'x^3·x^2/x^4', 'r8-vyrazy': '3(a + 2) - 2a + 1', 'r8-upravy': '(x + 3)^2 - x(x + 6)',
    'r9-rozklad': 'x^2 - 9', mocniny: '(2x^2)^3/(4x^5)', 's1-vyrazy': '(a - b)^2 + 2ab',
    's1-mnohoclen': 'x^3 - 4x', 's2-lomene': '(x^2 - 1)/(x - 1)',
    'r8-rovnice': '2(x - 3) = x + 4', 'r9-rovnice': '5x - 3 = 2(x + 6)', linearne: '(x + 1)/2 - (x - 2)/3 = 1',
    's1-menovatel': '3/(x - 1) = 2/(x + 1)', 's1-nerovnice': '2(x - 1) < 5x + 4', kvadraticke: 'x^2 - 5x + 6 = 0',
    's2-nerovnice': 'x^2 - x - 6 < 0', 's2-absolutna': '|x - 2| = 3', 's4-exp-log-rovnice': '2^(x + 1) = 16'
  };

  function decimal() {
    const lang = I18N.getLang();
    const CI = window.CONTENT_I18N;
    if (CI && (lang === CI.SOURCE || CI.pack(lang))) return CI.run(lang, null, () => CI.decimal());
    return ['en', 'ja', 'ko', 'zh'].includes(lang) ? '.' : ',';
  }

  const ICON = { ok: '✓', warn: '⚠', bad: '✗', err: '✗', start: '✎', empty: '' };
  const SR = { ok: 'ownStepsOk', warn: 'ownStepsWarn', bad: 'ownStepsBad', err: 'ownStepsBad', start: 'ownStepsTask' };
  const MSG_ICON = { hint: '💡', note: 'ℹ️', done: '🏁' };

  let lines = [''];
  let timer = null;

  function page(parts) {
    let init = '';
    try { init = decodeURIComponent(parts.join('/')); } catch (e) { init = ''; }
    lines = init ? init.split('\n').slice(0, 60) : [''];
    if (lines[lines.length - 1].trim()) lines.push('');
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>✍️ ${esc(t('ownStepsTitle'))}</h1>
      <p class="muted">${esc(t('ownStepsIntro'))}</p>
      <div class="chips ownsteps-chips" role="group" aria-label="${esc(t('ownStepsExamples'))}">
        <span class="muted small ownsteps-chips-label">${esc(t('ownStepsExamples'))}:</span>
        ${EXAMPLES.map((ex, i) => `<button type="button" class="chip" data-ex="${i}">${esc(t(ex.key))}</button>`).join('')}
      </div>
      <ol class="ownsteps-rows" id="ownsteps-rows"></ol>
      <div class="actions ownsteps-actions">
        <button type="button" class="btn" id="ownsteps-add">＋ ${esc(t('ownStepsAdd'))}</button>
        <button type="button" class="btn" id="ownsteps-share">🔗 ${esc(t('ownStepsShare'))}</button>
        <button type="button" class="btn" id="ownsteps-clear">${esc(t('ownStepsClear'))}</button>
      </div>
      <div class="ownsteps-summary" id="ownsteps-summary" role="status" aria-live="polite"></div>
      <details class="ownsteps-help"><summary>${esc(t('ownStepsHelpTitle'))}</summary>
        <ul>${['ownStepsHelp1', 'ownStepsHelp2', 'ownStepsHelp3', 'ownStepsHelp4', 'ownStepsHelp5'].map((k) => `<li>${esc(t(k))}</li>`).join('')}</ul>
      </details>`);
    const root = APP.el;
    root.querySelector('.ownsteps-chips').addEventListener('click', (e) => {
      const b = e.target.closest('[data-ex]');
      if (!b) return;
      lines = [EXAMPLES[+b.dataset.ex].task, ''];
      build(1);
    });
    document.getElementById('ownsteps-add').addEventListener('click', () => { lines.push(''); build(lines.length - 1); });
    document.getElementById('ownsteps-clear').addEventListener('click', () => { lines = ['']; build(0); });
    document.getElementById('ownsteps-share').addEventListener('click', share);
    build(init ? lines.length - 1 : 0, !init);
  }

  function hashFor() {
    const used = lines.slice();
    while (used.length && !used[used.length - 1].trim()) used.pop();
    return '#/postup' + (used.length ? '/' + encodeURIComponent(used.join('\n')) : '');
  }
  function share() {
    const url = location.href.split('#')[0] + hashFor();
    const done = () => APP.toast(esc(t('ownStepsCopied')));
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, () => window.prompt(t('ownStepsShare'), url));
    else window.prompt(t('ownStepsShare'), url);
  }

  // vykreslí riadky (pri pridaní/odobraní) a zameria pole focusIdx
  function build(focusIdx, noFocus) {
    const ol = document.getElementById('ownsteps-rows');
    if (!ol) return;
    ol.innerHTML = lines.map((s, i) => `<li class="ownsteps-row" data-i="${i}">
      <div class="ownsteps-line">
        <input class="ownsteps-input" type="text" value="${esc(s)}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
          placeholder="${esc(t(i ? 'ownStepsPlaceholder' : 'ownStepsPlaceholder0'))}"
          aria-label="${esc(t(i ? 'ownStepsRow' : 'ownStepsRowTask', { n: i + 1 }))}" aria-describedby="ownsteps-res-${i}">
        <button type="button" class="ownsteps-del" aria-label="${esc(t('ownStepsDelete', { n: i + 1 }))}" title="${esc(t('ownStepsDelete', { n: i + 1 }))}">✕</button>
      </div>
      <div class="ownsteps-res" id="ownsteps-res-${i}"></div>
    </li>`).join('');
    ol.querySelectorAll('.ownsteps-input').forEach((inp) => {
      inp.addEventListener('input', onInput);
      inp.addEventListener('keydown', onKey);
    });
    ol.querySelectorAll('.ownsteps-del').forEach((b) => b.addEventListener('click', () => {
      const i = +b.closest('.ownsteps-row').dataset.i;
      lines.splice(i, 1);
      if (!lines.length) lines = [''];
      build(Math.max(0, i - 1));
    }));
    run();
    if (!noFocus && focusIdx !== undefined) {
      const inp = ol.querySelectorAll('.ownsteps-input')[focusIdx];
      if (inp) { inp.focus(); const n = inp.value.length; try { inp.setSelectionRange(n, n); } catch (e) { /* bez výberu */ } }
    }
  }

  function onInput(e) {
    const i = +e.target.closest('.ownsteps-row').dataset.i;
    lines[i] = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(run, 450);
  }
  function onKey(e) {
    const inp = e.target, i = +inp.closest('.ownsteps-row').dataset.i;
    const inputs = () => document.querySelectorAll('#ownsteps-rows .ownsteps-input');
    if (e.key === 'Enter') {
      e.preventDefault();
      // nový riadok začne kópiou aktuálneho – žiak ho len upraví
      lines.splice(i + 1, 0, inp.value);
      build(i + 1);
    } else if (e.key === 'Backspace' && !inp.value && lines.length > 1) {
      e.preventDefault();
      lines.splice(i, 1);
      build(Math.max(0, i - 1));
    } else if (e.key === 'ArrowUp' && i > 0) { e.preventDefault(); inputs()[i - 1].focus(); } else if (e.key === 'ArrowDown' && i + 1 < lines.length) { e.preventDefault(); inputs()[i + 1].focus(); }
  }

  function msgHtml(m) {
    const icon = MSG_ICON[m.s] || { ok: '✓', warn: '⚠', bad: '✗', info: '' }[m.s] || '';
    return `<div class="ownsteps-msg ownsteps-${m.s}">${icon ? `<span aria-hidden="true">${icon}</span> ` : ''}${esc(t(m.key, m.vars || {}))}</div>`;
  }

  function run() {
    clearTimeout(timer);
    const ol = document.getElementById('ownsteps-rows');
    if (!ol) return;
    const dec = decimal();
    let res;
    try { res = checkAll(lines, { dec }); } catch (e) { console.error(e); return; }
    res.rows.forEach((r, i) => {
      const li = ol.children[i];
      if (!li) return;
      li.className = `ownsteps-row ownsteps-st-${r.status}`;
      const box = li.querySelector('.ownsteps-res');
      if (r.status === 'empty') { box.innerHTML = ''; return; }
      box.innerHTML = `<div class="ownsteps-head"><span class="ownsteps-ico" aria-hidden="true">${ICON[r.status]}</span>
        <span class="ownsteps-sr">${esc(t(SR[r.status]))}:</span>
        ${r.tex ? `<span class="ownsteps-tex">$${esc(r.tex)}$</span>` : ''}${r.note ? ` <span class="muted small">/ ${esc(r.note)}</span>` : ''}</div>
        ${r.msgs.map(msgHtml).join('')}`;
      APP.renderMath(box);
    });
    const sum = document.getElementById('ownsteps-summary');
    sum.className = `ownsteps-summary${res.summary ? ' ownsteps-sum-' + res.summary : ''}`;
    sum.textContent = res.summary ? t({ ok: 'ownStepsSummaryOk', warn: 'ownStepsSummaryWarn', bad: 'ownStepsSummaryBad' }[res.summary]) : '';
    // zdieľateľná adresa bez nového vykreslenia stránky
    try { history.replaceState(null, '', hashFor()); } catch (e) { /* napr. file:// */ }
  }

  APP.route('postup', (p) => page(p));
  APP.addMenu({ href: '#/postup', icon: '✍️', key: 'ownStepsMenu' });
  APP.addLessonPanel((L) => {
    const th = APP.themeOf(L.id);
    if (!th || (th.id !== 'vyrazy' && th.id !== 'rovnice') || !LESSON_TASKS[L.id]) return '';
    return `<div class="block ownsteps-panel"><strong>✍️ ${esc(t('ownStepsPanel'))}</strong>
      <p class="muted small">${esc(t('ownStepsPanelText'))}</p>
      <a class="btn btn-small" href="#/postup/${encodeURIComponent(LESSON_TASKS[L.id])}">${esc(t('ownStepsPanelBtn'))}
        <span class="ownsteps-task">$${esc(parseRow(LESSON_TASKS[L.id]).tex(decimal()))}$</span></a></div>`;
  });
})();
