/* Vysoká škola – Lineárna algebra: vektory v Rⁿ, matice, hodnosť, determinanty, inverzná matica,
   sústavy lineárnych rovníc, vektorové priestory, lineárne zobrazenia, vlastné čísla, skalárny súčin,
   kvadratické formy. Lekcie 'sucin' (order 20) a 'matice' (order 30) sú v content.js, ostatné sú tu. */
(function () {
  'use strict';

  const { rnd, pick, gcd, fmt, shuffle } = EXERCISES.util;
  const { plane, axes, svg, n1, sk } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v1' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 riadok, 2 riadky, 5 riadkov.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  const RIADOK = ['nenulový riadok', 'nenulové riadky', 'nenulových riadkov'];

  /* ---------- čísla a zápis ---------- */

  const nz = (a, b) => { let v = 0; while (v === 0) v = rnd(a, b); return v; };
  const par = (v) => (v < 0 ? `(${v})` : String(v));
  const red = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g + 0, q / g]; };
  const fTex = (p, q = 1) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${b}}`; };
  const fTxt = (p, q = 1) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a}/${b}`; };
  // súčet so znamienkami: [3, -2, 0] -> "3 - 2 + 0"
  const sumS = (arr) => arr.map((x, k) => (k === 0 ? String(x) : x < 0 ? ` - ${-x}` : ` + ${x}`)).join('');
  // koeficient pred premennou: 1 -> "", -1 -> "-", 3 -> "3"
  const cf = (c) => (c === 1 ? '' : c === -1 ? '-' : String(c));
  // lineárny výraz: lin([2, -1, 0], ['x_1', 'x_2', 'x_3']) -> "2x_1 - x_2"
  const lin = (cs, vars, c0 = 0) => {
    let s = '';
    cs.forEach((c, i) => {
      if (!c) return;
      const a = Math.abs(c), co = a === 1 ? '' : a;
      s += s ? ` ${c < 0 ? '-' : '+'} ${co}${vars[i]}` : `${c < 0 ? '-' : ''}${co}${vars[i]}`;
    });
    if (c0) s += s ? ` ${c0 < 0 ? '-' : '+'} ${Math.abs(c0)}` : String(c0);
    return s || '0';
  };
  const X3 = ['x_1', 'x_2', 'x_3'], X4 = ['x_1', 'x_2', 'x_3', 'x_4'];

  // matice: v generovaných textoch stačí '&', v teórii píšeme '&amp;'
  const pm = (M, amp = '&') => `\\begin{pmatrix}${M.map((r) => r.join(amp)).join('\\\\')}\\end{pmatrix}`;
  const vm = (M) => `\\begin{vmatrix}${M.map((r) => r.join('&')).join('\\\\')}\\end{vmatrix}`;
  const augm = (M) => `\\left(\\begin{array}{${'c'.repeat(M[0].length - 1)}|c}${M.map((r) => r.join('&')).join('\\\\')}\\end{array}\\right)`;
  const vt = (v) => `(${v.join(', ')})`;
  const col = (v) => pm(v.map((x) => [x]));

  /* ---------- výpočty s maticami ---------- */

  const det2 = (M) => M[0][0] * M[1][1] - M[0][1] * M[1][0];
  const minor = (M, i, j) => M.filter((_, r) => r !== i).map((r) => r.filter((_, c) => c !== j));
  const det = (M) => (M.length === 1 ? M[0][0] : M.length === 2 ? det2(M)
    : M[0].reduce((s, a, j) => s + (a ? (j % 2 ? -1 : 1) * a * det(minor(M, 0, j)) : 0), 0));
  const cof = (M, i, j) => ((i + j) % 2 ? -1 : 1) * det(minor(M, i, j)) + 0;
  const mul = (A, B) => A.map((r) => B[0].map((_, j) => r.reduce((s, a, k) => s + a * B[k][j], 0)));
  const trn = (A) => A[0].map((_, j) => A.map((r) => r[j]));
  const mv = (A, v) => A.map((r) => r.reduce((s, a, k) => s + a * v[k], 0));
  const adj = (A) => A.map((_, i) => A.map((_, j) => cof(A, j, i)));
  const dot = (u, v) => u.reduce((s, a, i) => s + a * v[i], 0);
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const maxAbs = (M) => Math.max(...M.flat().map(Math.abs));
  const vec = (n, a, b) => Array.from({ length: n }, () => rnd(a, b));
  const randM = (m, n, a, b) => Array.from({ length: m }, () => vec(n, a, b));
  const isZero = (v) => v.every((x) => x === 0);
  const eye = (n) => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => +(i === j)));
  // primitívny celočíselný násobok so sledovaným znamienkom (prvá nenulová zložka kladná)
  const prim = (v) => {
    const g = v.reduce((s, x) => gcd(s, x), 0) || 1;
    let w = v.map((x) => x / g);
    if (w.find((x) => x !== 0) < 0) w = w.map((x) => -x);
    return w.map((x) => x + 0);
  };
  const lc = (rows, cs) => rows[0].map((_, j) => rows.reduce((s, r, i) => s + cs[i] * r[j], 0));

  // celočíselná matica s determinantom ±1 (inverzná je tiež celočíselná)
  function unimod(n, maxA = 5, maxInv = 9) {
    for (;;) {
      let M = eye(n);
      const steps = rnd(n + 1, n + 3);
      for (let s = 0; s < steps; s++) {
        const i = rnd(0, n - 1); let j = rnd(0, n - 2); if (j >= i) j++;
        const k = nz(-2, 2);
        M[i] = M[i].map((x, c) => x + k * M[j][c]);
      }
      if (Math.random() < 0.3) { const i = rnd(0, n - 2); [M[i], M[i + 1]] = [M[i + 1], M[i]]; }
      M = M.map((r) => r.map((x) => x + 0));
      const zeros = M.flat().filter((x) => x === 0).length;
      if (maxAbs(M) > maxA || zeros > n) continue;
      const d = det(M);
      const inv = adj(M).map((r) => r.map((x) => x * d + 0));
      if (maxAbs(inv) <= maxInv) return { M, inv, d };
    }
  }

  // Gaussova eliminácia bez zlomkov; pc = počet stĺpcov, v ktorých hľadáme vedúce prvky.
  // Zápis "R_2 - 2R_1" znamená, že 2. riadok nahradíme výrazom R_2 - 2R_1.
  function echelon(M0, pc) {
    const M = M0.map((r) => r.slice()), m = M.length, n = M[0].length;
    if (pc === undefined) pc = n;
    const stages = [], piv = [];
    let r = 0;
    for (let c = 0; c < pc && r < m; c++) {
      let best = -1;
      for (let i = r; i < m; i++) if (M[i][c] !== 0 && (best < 0 || Math.abs(M[i][c]) < Math.abs(M[best][c]))) best = i;
      if (best < 0) continue;
      const ops = [];
      if (best !== r) { [M[r], M[best]] = [M[best], M[r]]; ops.push(`R_{${r + 1}} \\leftrightarrow R_{${best + 1}}`); }
      const p = M[r][c];
      for (let i = r + 1; i < m; i++) {
        const q = M[i][c];
        if (!q) continue;
        let op;
        if (q % p === 0) {
          const k = q / p;
          M[i] = M[i].map((x, j) => x - k * M[r][j]);
          op = `R_{${i + 1}} ${k > 0 ? '-' : '+'} ${Math.abs(k) === 1 ? '' : Math.abs(k)}R_{${r + 1}}`;
        } else {
          const g = gcd(p, q);
          let a = p / g, b = q / g;
          if (a < 0) { a = -a; b = -b; }
          M[i] = M[i].map((x, j) => a * x - b * M[r][j]);
          op = `${a === 1 ? '' : a}R_{${i + 1}} ${b > 0 ? '-' : '+'} ${Math.abs(b) === 1 ? '' : Math.abs(b)}R_{${r + 1}}`;
        }
        const g2 = M[i].reduce((s, x) => gcd(s, x), 0);
        if (g2 > 1) { M[i] = M[i].map((x) => x / g2); op = `\\tfrac{1}{${g2}}(${op})`; }
        M[i] = M[i].map((x) => x + 0);
        ops.push(op);
      }
      piv.push(c);
      if (ops.length) stages.push({ ops, M: M.map((row) => row.slice()) });
      r++;
    }
    return { M, rank: r, piv, stages };
  }
  // „po úprave“ len vtedy, keď sa vektorový súčin naozaj zmenil
  const red3 = (E, k) => (vt(cross(E.M[0], E.M[1])) === vt(k) ? '' : `, po úprave $${vt(k)}$`);
  // postup úprav: matica, potom riadky "úpravy: ~ nová matica"
  const chain = (M0, E, show = pm) => `$${show(M0)}$`
    + E.stages.map((s) => `<br>${s.ops.map((o) => `$${o}$`).join(', ')}: $\\;\\sim ${show(s.M)}$`).join('');

  // spätné dosadenie v trojuholníkovej rozšírenej matici (vedúce prvky na diagonále)
  function backSub(E, x, names) {
    const n = x.length, out = [];
    for (let i = n - 1; i >= 0; i--) {
      const cs = E[i].slice(0, n);
      let line = `z ${i + 1}. riadku: $${lin(cs, names)} = ${E[i][n]}$`;
      const rest = cs.reduce((s, a, j) => s + (j > i ? a * x[j] : 0), 0);
      if (rest !== 0 || cs.some((a, j) => j > i && a)) {
        const sub = cs.map((a, j) => (j > i && a ? `${a < 0 ? '-' : '+'} ${Math.abs(a) === 1 ? '' : Math.abs(a) + '\\cdot '}${par(x[j])}` : '')).join(' ');
        line += `, teda $${cf(cs[i])}${names[i]} ${sub} = ${E[i][n]}$`;
      }
      if (cs[i] !== 1 || cs.some((a, j) => j > i && a)) line += ` $\\Rightarrow$ $${names[i]} = ${x[i]}$`;
      out.push(line);
    }
    return out.join('; ') + '.';
  }

  // Sarrusovo pravidlo s medzivýsledkami
  function sarrus(M) {
    const [[a, b, c], [d, e, f], [g, h, i]] = M;
    const p = [a * e * i, b * f * g, c * d * h].map((x) => x + 0), q = [c * e * g, a * f * h, b * d * i].map((x) => x + 0);
    const P = p[0] + p[1] + p[2], Q = q[0] + q[1] + q[2];
    const t = (x, y, z) => `${par(x)}\\cdot ${par(y)}\\cdot ${par(z)}`;
    return {
      value: P - Q,
      tex: `${t(a, e, i)} + ${t(b, f, g)} + ${t(c, d, h)} - ${t(c, e, g)} - ${t(a, f, h)} - ${t(b, d, i)} = (${sumS(p)}) - (${sumS(q)}) = ${P} - ${par(Q)} = ${P - Q}`
    };
  }
  // algebraický doplnok A_{ij} matice 3×3 s výpočtom 2×2 minoru
  const cofTex = (M, i, j) => {
    const m = minor(M, i, j), v = cof(M, i, j);
    return `A_{${i + 1}${j + 1}} = ${(i + j) % 2 ? '-' : ''}${vm(m)} = ${(i + j) % 2 ? '-' : ''}(${par(m[0][0])}\\cdot ${par(m[1][1])} - ${par(m[0][1])}\\cdot ${par(m[1][0])}) = ${v}`;
  };

  // Determinant matice s riadkami u, v, w, kde w[p] = t (parameter): D(t) = C·t + D0, koreň t0 = w0[p].
  function paramDet(u, v, w0, p, name) {
    const C = cof([u, v, w0], 2, p);
    if (C === 0) return null;
    const w = w0.map((x, j) => (j === p ? name : x));
    const parts = [0, 1, 2].map((j) => `${j === p ? name : par(w0[j])}\\cdot A_{3${j + 1}}`);
    const cofs = [0, 1, 2].map((j) => `A_{3${j + 1}} = ${cof([u, v, w0], 2, j)}`);
    const D0 = [0, 1, 2].reduce((s, j) => s + (j === p ? 0 : w0[j] * cof([u, v, w0], 2, j)), 0);
    return {
      w, C, D0, t0: w0[p],
      tex: `Rozvoj podľa 3. riadka: $D = ${parts.join(' + ')}$, kde $${cofs.join(',\\ ')}$. Teda $D = ${lin([C], [name], D0)}$.`
        + ` Podmienka $D = 0$ dáva $${cf(C)}${name} = ${-D0}$, teda $${name} = ${w0[p]}$.`
    };
  }

  /* ---------- pomocné kreslenie ---------- */

  const arrow = (p, x1, y1, x2, y2, cls, head) => {
    const X1 = p.X(x1), Y1 = p.Y(y1), X2 = p.X(x2), Y2 = p.Y(y2);
    const L = Math.hypot(X2 - X1, Y2 - Y1);
    if (L < 1) return '';
    const ux = (X2 - X1) / L, uy = (Y2 - Y1) / L, h = Math.min(11, L), w = 5;
    const bx = X2 - ux * h, by = Y2 - uy * h;
    return `<line class="${cls}" x1="${n1(X1)}" y1="${n1(Y1)}" x2="${n1(bx)}" y2="${n1(by)}"/>
      <polygon class="${head}" points="${n1(X2)},${n1(Y2)} ${n1(bx - uy * w)},${n1(by + ux * w)} ${n1(bx + uy * w)},${n1(by - ux * w)}"/>`;
  };
  const seg = (p, x1, y1, x2, y2, cls) => `<line class="${cls}" x1="${n1(p.X(x1))}" y1="${n1(p.Y(y1))}" x2="${n1(p.X(x2))}" y2="${n1(p.Y(y2))}"/>`;
  const lbl = (p, x, y, t, cls = 'f-math', dx = 6, dy = -6) => `<text class="${cls}" x="${n1(p.X(x) + dx)}" y="${n1(p.Y(y) + dy)}">${t}</text>`;
  const mn = (s) => String(s).replace(/-/g, '−');
  const skm = (v, d = 2) => mn(sk(v, d)).replace(/,0+$/, '');
  // len osi (bez štvorcovej siete)
  const bareAxes = (p) => seg(p, p.xmin, 0, p.xmax, 0, 'f-axis') + seg(p, 0, p.ymin, 0, p.ymax, 'f-axis');

  /* ---------- obrázky ---------- */

  fig('v1-linkomb', {
    controls: [
      { id: 'a', label: 'α', min: -3, max: 3, step: 0.5, value: 1.5 },
      { id: 'b', label: 'β', min: -3, max: 3, step: 0.5, value: 1 }
    ],
    draw: (v) => {
      const p = plane(-7, 7, -7, 7, 340, 340, 16);
      const u = [2, 1], w = [-1, 2], A = v.a, B = v.b;
      const au = [A * u[0], A * u[1]], bw = [B * w[0], B * w[1]], s = [au[0] + bw[0], au[1] + bw[1]];
      const front = arrow(p, 0, 0, u[0], u[1], 'f-line', 'f-solid') + arrow(p, 0, 0, w[0], w[1], 'f-line', 'f-solid')
        + seg(p, au[0], au[1], s[0], s[1], 'f-dash') + seg(p, bw[0], bw[1], s[0], s[1], 'f-dash')
        + arrow(p, 0, 0, au[0], au[1], 'f-accent', 'f-dot')
        + arrow(p, 0, 0, bw[0], bw[1], 'f-ok', 'f-dot f-dot-ok')
        + arrow(p, 0, 0, s[0], s[1], 'f-warn', 'f-vertex')
        + lbl(p, u[0], u[1], 'u', 'f-math', 4, 16) + lbl(p, w[0], w[1], 'v', 'f-math', -14, -4);
      return {
        svg: svg(p, axes(p, 2, 2), '', front, 'Lineárna kombinácia dvoch vektorov'),
        readout: `<span class="c-accent">αu = (${skm(au[0], 1)}; ${skm(au[1], 1)})</span> · <span class="c-ok">βv = (${skm(bw[0], 1)}; ${skm(bw[1], 1)})</span> · αu + βv = (${skm(s[0], 1)}; ${skm(s[1], 1)})`
      };
    }
  });

  fig('v1-stupne', {
    draw: () => {
      const M = [[2, 1, -1, 3, 0, 4], [0, 0, 3, 1, -2, 1], [0, 0, 0, 5, 2, -3], [0, 0, 0, 0, 0, 0]];
      const piv = [0, 2, 3], x0 = 40, y0 = 20, w = 50, h = 36;
      let s = '<svg viewBox="0 0 380 190" role="img" aria-label="Matica v stupňovitom tvare">';
      M.forEach((r, i) => r.forEach((a, j) => {
        const below = i >= piv.length || j < piv[i];
        const isPiv = piv[i] === j;
        s += `<rect class="f-cell${isPiv ? ' f-fill f-outline' : ''}" x="${x0 + j * w}" y="${y0 + i * h}" width="${w}" height="${h}"/>
          <text class="${below ? 'f-small' : 'f-text'}" x="${x0 + j * w + w / 2}" y="${y0 + i * h + h / 2 + 5}" text-anchor="middle">${mn(a)}</text>`;
      }));
      // schodovitá čiara: pod ňou sú len nuly
      let d = `M${x0 + piv[0] * w} ${y0}`;
      piv.forEach((c, i) => { d += ` V${y0 + (i + 1) * h} H${i + 1 < piv.length ? x0 + piv[i + 1] * w : x0 + 6 * w}`; });
      s += `<path class="f-warn" d="${d}"/>`;
      return s + `<text class="f-small" x="${x0 + 3 * w}" y="${y0 + 4 * h + 26}" text-anchor="middle">vedúce prvky sú zvýraznené, pod schodmi sú len nuly</text></svg>`;
    }
  });

  fig('v1-sarrus', {
    draw: () => {
      const x0 = 50, y0 = 30, w = 64, h = 46;
      const name = (i, j) => `a${'₁₂₃'[i]}${'₁₂₃'[j % 3]}`;
      const cx = (j) => x0 + j * w + w / 2, cy = (i) => y0 + i * h + h / 2;
      let s = '<svg viewBox="0 0 420 220" role="img" aria-label="Sarrusovo pravidlo pre determinant 3×3">';
      for (let c = 0; c < 3; c++) {
        s += `<line class="f-ok" x1="${cx(c) - 14}" y1="${cy(0) - 12}" x2="${cx(c + 2) + 14}" y2="${cy(2) + 12}"/>`;
        s += `<line class="f-warn" x1="${cx(c + 2) + 14}" y1="${cy(0) - 12}" x2="${cx(c) - 14}" y2="${cy(2) + 12}"/>`;
      }
      for (let i = 0; i < 3; i++) for (let j = 0; j < 5; j++) {
        s += `<text class="f-math" x="${cx(j)}" y="${cy(i) + 6}" text-anchor="middle"${j >= 3 ? ' opacity="0.6"' : ''}>${name(i, j)}</text>`;
      }
      s += `<path class="f-thin" d="M${x0 + 6} ${y0} h-6 v${3 * h} h6"/><path class="f-thin" d="M${x0 + 3 * w - 6} ${y0} h6 v${3 * h} h-6"/>`;
      s += `<line class="f-dash" x1="${x0 + 3 * w + 6}" y1="${y0}" x2="${x0 + 3 * w + 6}" y2="${y0 + 3 * h}"/>`;
      return s + `<text class="f-text c-ok" x="${x0}" y="${y0 + 3 * h + 32}">+ súčiny na zelených diagonálach</text>
        <text class="f-text c-warn" x="${x0}" y="${y0 + 3 * h + 52}">− súčiny na oranžových diagonálach</text></svg>`;
    }
  });

  fig('v1-priamky', {
    draw: () => {
      const panel = (k, l1, l2, dot, t1, t2) => {
        const ox = 10 + k * 150, P = (x, y) => `${n1(ox + 70 + x * 22)},${n1(90 - y * 22)}`;
        const L = (f, cls) => `<polyline class="${cls}" points="${P(-3, f(-3))} ${P(3, f(3))}"/>`;
        return `<line class="f-axis" x1="${ox}" y1="90" x2="${ox + 140}" y2="90"/><line class="f-axis" x1="${ox + 70}" y1="20" x2="${ox + 70}" y2="160"/>
          <g clip-path="url(#v1pr${k})">${L(l1, 'f-accent')}${L(l2, l2 === l1 ? 'f-dash' : 'f-ok')}</g>
          ${dot ? `<circle class="f-dot" cx="${P(dot[0], dot[1]).split(',')[0]}" cy="${P(dot[0], dot[1]).split(',')[1]}" r="5"/>` : ''}
          <text class="f-text" x="${ox + 70}" y="184" text-anchor="middle">${t1}</text>
          <text class="f-small" x="${ox + 70}" y="202" text-anchor="middle">${t2}</text>`;
      };
      const f1 = (x) => 0.5 * x + 0.5, f2 = (x) => -x + 2, f3 = (x) => 0.5 * x - 1.5;
      return `<svg viewBox="0 0 450 212" role="img" aria-label="Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi">
        <defs>${[0, 1, 2].map((k) => `<clipPath id="v1pr${k}"><rect x="${10 + k * 150}" y="20" width="140" height="140"/></clipPath>`).join('')}</defs>
        ${panel(0, f1, f2, [1, 1], 'jedno riešenie', 'h(A) = h(A|b) = 2')}
        ${panel(1, f1, f3, null, 'žiadne riešenie', 'h(A) = 1, h(A|b) = 2')}
        ${panel(2, f1, f1, null, 'nekonečne veľa', 'h(A) = h(A|b) = 1')}</svg>`;
    }
  });

  fig('v1-baza', {
    controls: [
      { id: 'c1', label: 'c₁', min: -3, max: 3, step: 1, value: 2 },
      { id: 'c2', label: 'c₂', min: -3, max: 3, step: 1, value: 1 }
    ],
    draw: (v) => {
      const p = plane(-9, 9, -9, 9, 340, 340, 16);
      const b1 = [2, 1], b2 = [-1, 2], c1 = v.c1, c2 = v.c2;
      let grid = '';
      for (let k = -8; k <= 8; k++) {
        grid += seg(p, k * b1[0] - 9 * b2[0], k * b1[1] - 9 * b2[1], k * b1[0] + 9 * b2[0], k * b1[1] + 9 * b2[1], 'f-grid');
        grid += seg(p, k * b2[0] - 9 * b1[0], k * b2[1] - 9 * b1[1], k * b2[0] + 9 * b1[0], k * b2[1] + 9 * b1[1], 'f-grid');
      }
      const a = [c1 * b1[0], c1 * b1[1]], x = [a[0] + c2 * b2[0], a[1] + c2 * b2[1]];
      const front = arrow(p, 0, 0, b1[0], b1[1], 'f-line', 'f-solid') + arrow(p, 0, 0, b2[0], b2[1], 'f-line', 'f-solid')
        + arrow(p, 0, 0, a[0], a[1], 'f-accent', 'f-dot') + arrow(p, a[0], a[1], x[0], x[1], 'f-ok', 'f-dot f-dot-ok')
        + arrow(p, 0, 0, x[0], x[1], 'f-warn', 'f-vertex')
        + lbl(p, b1[0], b1[1], 'b₁', 'f-math', 2, 16) + lbl(p, b2[0], b2[1], 'b₂', 'f-math', -18, -2);
      return {
        svg: svg(p, bareAxes(p), grid, front, 'Súradnice vektora v báze b₁, b₂'),
        readout: `súradnice v báze B: (${mn(c1)}; ${mn(c2)}) · <span class="c-accent">c₁b₁</span> + <span class="c-ok">c₂b₂</span> = (${mn(x[0])}; ${mn(x[1])}) v štandardnej báze`
      };
    }
  });

  fig('v1-rotacia', {
    controls: [{ id: 'phi', label: 'Uhol φ (°)', min: 0, max: 360, step: 15, value: 60 }],
    draw: (v) => {
      const p = plane(-3.6, 3.6, -3.6, 3.6, 320, 320, 16);
      const t = v.phi * Math.PI / 180, c = Math.cos(t), s = Math.sin(t);
      const R = ([x, y]) => [c * x - s * y, s * x + c * y];
      const F = [[[0.5, 0], [0.5, 2.6], [1.8, 2.6]], [[0.5, 1.4], [1.4, 1.4]]];
      const path = (pts) => pts.map(([x, y], k) => `${k ? 'L' : 'M'}${n1(p.X(x))} ${n1(p.Y(y))}`).join('');
      const orig = F.map((q) => `<path class="f-dash" fill="none" d="${path(q)}"/>`).join('');
      const img = F.map((q) => `<path class="f-line" d="${path(q.map(R))}"/>`).join('');
      const e1 = R([1, 0]), e2 = R([0, 1]);
      const front = orig + img + arrow(p, 0, 0, e1[0], e1[1], 'f-accent', 'f-dot') + arrow(p, 0, 0, e2[0], e2[1], 'f-ok', 'f-dot f-dot-ok');
      return {
        svg: svg(p, axes(p), '', front, 'Rotácia útvaru okolo počiatku'),
        readout: `φ = ${v.phi}° · <span class="c-accent">f(e₁) = (${skm(c)}; ${skm(s)})</span> · <span class="c-ok">f(e₂) = (${skm(-s)}; ${skm(c)})</span> · det = 1`
      };
    }
  });

  fig('v1-matica', {
    controls: [
      { id: 'a', label: 'a₁₁', min: -3, max: 3, step: 0.5, value: 2 },
      { id: 'b', label: 'a₁₂', min: -3, max: 3, step: 0.5, value: 1 },
      { id: 'c', label: 'a₂₁', min: -3, max: 3, step: 0.5, value: 1 },
      { id: 'd', label: 'a₂₂', min: -3, max: 3, step: 0.5, value: 2 }
    ],
    draw: (v) => {
      const p = plane(-5, 5, -5, 5, 340, 340, 16);
      const { a, b, c, d } = v, D = a * d - b * c, T = a + d, disc = T * T - 4 * D;
      const P = (x, y) => `${n1(p.X(x))},${n1(p.Y(y))}`;
      let eig = '', txt;
      const dirLine = (x, y) => {
        const L = Math.hypot(x, y), k = 20 / L;
        return seg(p, -x * k, -y * k, x * k, y * k, 'f-warn');
      };
      if (disc < -1e-9) {
        txt = 'komplexné vlastné čísla – žiadny reálny vlastný smer';
      } else {
        const r = Math.sqrt(Math.max(disc, 0)), l1 = (T - r) / 2, l2 = (T + r) / 2;
        const lams = Math.abs(l1 - l2) < 1e-9 ? [l1] : [l1, l2];
        if (Math.abs(b) < 1e-9 && Math.abs(c) < 1e-9 && Math.abs(a - d) < 1e-9) {
          txt = `λ = ${skm(a)} · každý nenulový vektor je vlastný`;
        } else {
          lams.forEach((l) => {
            if (Math.abs(b) > 1e-9) eig += dirLine(b, l - a);
            else if (Math.abs(c) > 1e-9) eig += dirLine(l - d, c);
            else eig += Math.abs(l - a) < 1e-9 ? dirLine(1, 0) : dirLine(0, 1);
          });
          txt = `<span class="c-warn">λ =${lams.map((l) => skm(l)).join('; ')}</span>`;
        }
      }
      const clipped = eig + `<polygon class="f-dash" fill="none" points="${P(0, 0)} ${P(1, 0)} ${P(1, 1)} ${P(0, 1)}"/>
        <polygon class="f-fill f-outline" points="${P(0, 0)} ${P(a, c)} ${P(a + b, c + d)} ${P(b, d)}"/>`;
      const front = arrow(p, 0, 0, a, c, 'f-accent', 'f-dot') + arrow(p, 0, 0, b, d, 'f-ok', 'f-dot f-dot-ok');
      return {
        svg: svg(p, axes(p), clipped, front, 'Obraz jednotkového štvorca pri zobrazení danom maticou 2×2'),
        readout: `det A = ${skm(D)}${D < 0 ? ' (mení orientáciu)' : ''} · tr A = ${skm(T)} · ${txt}`
      };
    }
  });

  fig('v1-projekcia', {
    controls: [
      { id: 't', label: 'Uhol priamky θ (°)', min: 0, max: 175, step: 5, value: 20 },
      { id: 'v1', label: 'v₁', min: -4, max: 4, step: 1, value: 1 },
      { id: 'v2', label: 'v₂', min: -4, max: 4, step: 1, value: 3 }
    ],
    draw: (v) => {
      const p = plane(-5, 5, -5, 5, 340, 340, 16);
      const t = v.t * Math.PI / 180, u = [Math.cos(t), Math.sin(t)], x = [v.v1, v.v2];
      const k = x[0] * u[0] + x[1] * u[1], pr = [k * u[0], k * u[1]], dist = Math.hypot(x[0] - pr[0], x[1] - pr[1]);
      let mark = '';
      if (dist > 0.3 && Math.abs(k) > 0.3) {
        const e = 0.3, w = [(x[0] - pr[0]) / dist * e, (x[1] - pr[1]) / dist * e], s = Math.sign(k), a = [-s * u[0] * e, -s * u[1] * e];
        mark = `<path class="f-thin" d="M${n1(p.X(pr[0] + a[0]))} ${n1(p.Y(pr[1] + a[1]))} L${n1(p.X(pr[0] + a[0] + w[0]))} ${n1(p.Y(pr[1] + a[1] + w[1]))} L${n1(p.X(pr[0] + w[0]))} ${n1(p.Y(pr[1] + w[1]))}"/>`;
      }
      const clipped = seg(p, -8 * u[0], -8 * u[1], 8 * u[0], 8 * u[1], 'f-thin');
      const front = seg(p, x[0], x[1], pr[0], pr[1], 'f-dash') + mark
        + arrow(p, 0, 0, x[0], x[1], 'f-accent', 'f-dot') + arrow(p, 0, 0, pr[0], pr[1], 'f-ok', 'f-dot f-dot-ok');
      return {
        svg: svg(p, axes(p), clipped, front, 'Ortogonálna projekcia vektora na priamku'),
        readout: `u = (${skm(u[0])}; ${skm(u[1])}) · ⟨v, u⟩ = ${skm(k)} · <span class="c-ok">proj = (${skm(pr[0])}; ${skm(pr[1])})</span> · ‖v − proj‖ = ${skm(dist)}`
      };
    }
  });

  /* ---------- lekcie a generátory ---------- */

  // ===== 10: vektory, lineárna kombinácia, lineárna závislosť =====
  lesson({
    id: 'v1-vektory', order: 10, title: 'Vektory v Rⁿ a lineárna závislosť',
    summary: 'Operácie s vektormi, lineárna kombinácia, lineárny obal, lineárna závislosť a nezávislosť.',
    theory: [
      `<p><strong>Vektor</strong> v $\\mathbb{R}^n$ je usporiadaná $n$-tica reálnych čísel $u=(u_1, u_2, \\dots, u_n)$. Vektory sčítame a násobíme reálnym číslom (skalárom) po zložkách: $u+v=(u_1+v_1, \\dots, u_n+v_n)$ a $c\\,u=(c\\,u_1, \\dots, c\\,u_n)$. Nulový vektor označujeme $o=(0, \\dots, 0)$.</p>`,
      `<p><strong>Lineárna kombinácia</strong> vektorov $u_1, \\dots, u_k$ je každý vektor tvaru $c_1u_1+c_2u_2+\\dots+c_ku_k$, kde $c_1, \\dots, c_k\\in\\mathbb{R}$ sú koeficienty. Množina všetkých lineárnych kombinácií sa nazýva <strong>lineárny obal</strong> a značí sa $\\mathcal{L}(u_1, \\dots, u_k)$.</p>`,
      { fig: 'v1-linkomb', caption: 'Vektory $u=(2, 1)$ a $v=(-1, 2)$ nie sú rovnobežné, preto sa každý vektor roviny dá zapísať ako $\\alpha u+\\beta v$. Posúvaj koeficienty $\\alpha$ a $\\beta$ a sleduj, ako sa mení výsledný (oranžový) vektor.' },
      `<p>Vektory $u_1, \\dots, u_k$ sú <strong>lineárne nezávislé</strong>, ak z rovnosti $c_1u_1+\\dots+c_ku_k=o$ vyplýva $c_1=\\dots=c_k=0$. V opačnom prípade sú <strong>lineárne závislé</strong>, čo nastane práve vtedy, keď sa aspoň jeden z nich dá vyjadriť ako lineárna kombinácia ostatných.</p>
       <p>V praxi vektory zapíšeme do riadkov matice $A$: sú nezávislé práve vtedy, keď $h(A)=k$ (hodnosť pozri v ďalších lekciách). Pre $n$ vektorov v $\\mathbb{R}^n$ stačí overiť, či $\\det A\\neq 0$. Viac ako $n$ vektorov v $\\mathbb{R}^n$ je vždy lineárne závislých a každá množina obsahujúca nulový vektor je závislá.</p>`
    ],
    examples: [
      { task: 'Zisti, či sú vektory $u=(1, 2, 0)$, $v=(0, 1, 1)$ a $w=(2, 5, 1)$ lineárne závislé.',
        steps: ['Vektory zapíšeme do riadkov matice a vypočítame determinant rozvojom podľa 1. riadka:',
                '$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.',
                'Determinant je nulový, vektory sú teda <strong>lineárne závislé</strong>. Naozaj, $w=2u+v$.'] },
      { task: 'Vyjadri vektor $w=(4, 7)$ ako lineárnu kombináciu vektorov $u=(2, 1)$ a $v=(-1, 2)$.',
        steps: ['Hľadáme $\\alpha, \\beta$ s $\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$, t. j. sústavu $2\\alpha-\\beta=4$, $\\alpha+2\\beta=7$.',
                'Z druhej rovnice $\\alpha=7-2\\beta$; dosadením $14-4\\beta-\\beta=4$, teda $\\beta=2$ a $\\alpha=3$.',
                '<strong>Výsledok:</strong> $w=3u+2v$.'] }
    ]
  });

  gen('v1-vektory', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const n = pick([3, 4]), u = vec(n, -4, 4), v = vec(n, -4, 4), a = nz(-3, 3), b = nz(-3, 3);
      const w = u.map((x, i) => a * x + b * v[i]);
      const expr = `${cf(a)}u ${b < 0 ? '-' : '+'} ${Math.abs(b) === 1 ? '' : Math.abs(b)}v`;
      const comp = u.map((x, i) => `${a}\\cdot ${par(x)} ${b < 0 ? '-' : '+'} ${Math.abs(b)}\\cdot ${par(v[i])}`);
      return {
        type: 'tuple', signed: true, answer: w, placeholder: n === 3 ? 'w₁; w₂; w₃' : 'w₁; w₂; w₃; w₄',
        q: `Dané sú vektory $u=${vt(u)}$ a $v=${vt(v)}$ v $\\mathbb{R}^{${n}}$. Vypočítaj vektor $${expr}$. Zložky oddeľ bodkočiarkou.`,
        solution: `Počítame po zložkách: $${expr}=(${comp.join(',\\ ')})=${vt(w)}$.`,
        hint: 'Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.'
      };
    }
    if (k === 1) {
      let u, v, D;
      do { u = [nz(-4, 4), rnd(-4, 4)]; v = [rnd(-4, 4), nz(-4, 4)]; D = u[0] * v[1] - v[0] * u[1]; } while (D === 0);
      const a = nz(-4, 4), b = nz(-4, 4), w = [a * u[0] + b * v[0], a * u[1] + b * v[1]];
      const Da = w[0] * v[1] - v[0] * w[1], Db = u[0] * w[1] - w[0] * u[1];
      const G = ['\\alpha', '\\beta'];
      return {
        type: 'tuple', signed: true, answer: [a, b], placeholder: 'α; β',
        q: `Nájdi čísla $\\alpha, \\beta$ také, že $${vt(w)}=\\alpha${vt(u)}+\\beta${vt(v)}$. Zadaj ich v tvare „α; β“.`,
        solution: `Porovnaním zložiek dostaneme sústavu $${lin([u[0], v[0]], G)}=${w[0]}$, $${lin([u[1], v[1]], G)}=${w[1]}$. `
          + `Cramerovým pravidlom: $D=${vm([[u[0], v[0]], [u[1], v[1]]])}=${D}$, $D_\\alpha=${vm([[w[0], v[0]], [w[1], v[1]]])}=${Da}$, $D_\\beta=${vm([[u[0], w[0]], [u[1], w[1]]])}=${Db}$, `
          + `teda $\\alpha=\\frac{${Da}}{${D}}=${a}$ a $\\beta=\\frac{${Db}}{${D}}=${b}$.`,
        hint: 'Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.'
      };
    }
    if (k === 2) {
      let u, v, w, D;
      const dep = Math.random() < 0.5;
      let a = 0, b = 0;
      do {
        u = vec(3, -3, 3); v = vec(3, -3, 3);
        if (dep) { a = nz(-2, 2); b = nz(-2, 2); w = u.map((x, i) => a * x + b * v[i]); } else w = vec(3, -3, 3);
        D = det([u, v, w]);
      } while (isZero(cross(u, v)) || (!dep && D === 0) || maxAbs([w]) > 8);
      const rot = rnd(0, 2), names = ['u', 'v', 'w'];
      const vs = [u, v, w];
      const ord = [0, 1, 2].map((i) => (i + rot) % 3); // ord[pozícia] = pôvodný index
      const shown = ord.map((i) => vs[i]);
      const nameOf = (orig) => names[ord.indexOf(orig)];
      const S = sarrus(shown);
      const rel = dep ? ` (naozaj $${nameOf(2)}=${cf(a)}${nameOf(0)} ${b < 0 ? '-' : '+'} ${Math.abs(b) === 1 ? '' : Math.abs(b)}${nameOf(1)}$)` : '';
      const ans = S.value === 0 ? 'lineárne závislé' : 'lineárne nezávislé';
      return {
        type: 'choice', options: ['lineárne závislé', 'lineárne nezávislé'], answer: ans,
        q: `Sú vektory $u=${vt(shown[0])}$, $v=${vt(shown[1])}$ a $w=${vt(shown[2])}$ lineárne závislé, alebo nezávislé?`,
        solution: `Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: $${vm(shown)}=${S.tex}$. `
          + (S.value === 0 ? `Determinant je nulový, vektory sú <strong>lineárne závislé</strong>${rel}.` : 'Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.'),
        hint: 'Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.'
      };
    }
    let u, v, w0, pos, R;
    do {
      u = vec(3, -3, 3); v = vec(3, -3, 3);
      const a = nz(-2, 2), b = nz(-2, 2);
      w0 = u.map((x, i) => a * x + b * v[i]); pos = rnd(0, 2);
      R = isZero(cross(u, v)) || maxAbs([w0]) > 8 ? null : paramDet(u, v, w0, pos, 't');
    } while (!R);
    return {
      signed: true, answer: R.t0,
      q: `Pre ktorú hodnotu parametra $t$ sú vektory $u=${vt(u)}$, $v=${vt(v)}$ a $w=${vt(R.w)}$ lineárne závislé?`,
      solution: `Vektory sú závislé práve vtedy, keď $D=${vm([u, v, R.w])}=0$. ${R.tex} Pre $t=${R.t0}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.`,
      hint: 'Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.'
    };
  });

  // ===== 15: matice a operácie =====
  lesson({
    id: 'v1-operacie', order: 15, title: 'Matice a operácie s maticami',
    summary: 'Typ matice, špeciálne matice, sčítanie, násobenie skalárom, transpozícia a stopa.',
    theory: [
      `<p><strong>Matica</strong> typu $m\\times n$ je obdĺžniková tabuľka $A=(a_{ij})$ reálnych čísel s $m$ riadkami a $n$ stĺpcami. Dve matice sa rovnajú, ak majú rovnaký typ a rovnaké prvky na rovnakých miestach. Matica typu $n\\times n$ je <strong>štvorcová</strong> rádu $n$; prvky $a_{11}, a_{22}, \\dots, a_{nn}$ tvoria jej <strong>hlavnú diagonálu</strong>. Dôležité sú <strong>jednotková</strong> matica $I$ (jednotky na diagonále, inde nuly), <strong>nulová</strong> matica $O$, <strong>diagonálna</strong> a <strong>horná (dolná) trojuholníková</strong> matica (nuly pod (nad) diagonálou).</p>`,
      `<p><strong>Súčet</strong> matíc rovnakého typu a <strong>násobok</strong> matice číslom počítame po prvkoch: $(A+B)_{ij}=a_{ij}+b_{ij}$, $(cA)_{ij}=c\\,a_{ij}$. Platí $A+B=B+A$, $(A+B)+C=A+(B+C)$, $c(A+B)=cA+cB$, $(c+d)A=cA+dA$. Matice typu $m\\times n$ s týmito operáciami tvoria vektorový priestor.</p>`,
      `<p><strong>Transponovaná</strong> matica $A^{T}$ k matici typu $m\\times n$ je typu $n\\times m$ a $(A^{T})_{ij}=a_{ji}$ – riadky sa stanú stĺpcami. Platí $(A^{T})^{T}=A$, $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$ a $(AB)^{T}=B^{T}A^{T}$ (poradie sa obráti).</p>
       <p>Štvorcová matica je <strong>symetrická</strong>, ak $A^{T}=A$, a <strong>antisymetrická</strong>, ak $A^{T}=-A$ (vtedy má na diagonále nuly). Každú štvorcovú maticu možno jednoznačne rozložiť na súčet $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$ symetrickej a antisymetrickej časti. <strong>Stopa</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$ je súčet prvkov na diagonále; pre ľubovoľnú maticu je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých jej prvkov.</p>`
    ],
    examples: [
      { task: 'Pre $A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$ a $B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$ vypočítaj $2A-B^{T}$.',
        steps: ['$B$ je typu $3\\times 2$, teda $B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$ je typu $2\\times 3$ ako $A$.',
                '$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.',
                '<strong>Výsledok:</strong> $2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$.'] },
      { task: 'Rozlož maticu $A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$ na súčet symetrickej a antisymetrickej matice.',
        steps: ['$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.',
                'Symetrická časť: $S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$.',
                'Antisymetrická časť: $K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$. Skúška: $S+K=A$.'] }
    ]
  });

  gen('v1-operacie', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const A = randM(2, 2, -5, 5), B = randM(2, 2, -5, 5), a = nz(-3, 3), b = nz(-3, 3), BT = trn(B);
      const R = A.map((r, i) => r.map((x, j) => a * x + b * BT[i][j]));
      const expr = `${cf(a)}A ${b < 0 ? '-' : '+'} ${Math.abs(b) === 1 ? '' : Math.abs(b)}B^{T}`;
      return {
        type: 'tuple', signed: true, answer: R.flat(), placeholder: 'a₁₁; a₁₂; a₂₁; a₂₂',
        q: `Pre $A=${pm(A)}$ a $B=${pm(B)}$ vypočítaj maticu $${expr}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).`,
        solution: `$B^{T}=${pm(BT)}$, takže $${expr}=${pm(A.map((r, i) => r.map((x, j) => `${a}\\cdot ${par(x)} ${b < 0 ? '-' : '+'} ${Math.abs(b)}\\cdot ${par(BT[i][j])}`)))}=${pm(R)}$.`,
        hint: 'Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.'
      };
    }
    if (k === 1) {
      const m = pick([2, 3]), n = m === 2 ? 3 : 2, A = randM(m, n, -4, 4);
      const sq = A.flat().map((x) => x * x);
      return {
        answer: sq.reduce((s, x) => s + x, 0),
        q: `Pre maticu $A=${pm(A)}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.`,
        solution: `Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: $${A.flat().map((x) => `${par(x)}^2`).join('+')}=${sq.join('+')}=${sq.reduce((s, x) => s + x, 0)}$.`,
        hint: 'Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.'
      };
    }
    if (k === 2) {
      const type = rnd(0, 2);
      let A;
      do {
        A = randM(3, 3, -4, 4);
        if (type === 0) A = A.map((r, i) => r.map((x, j) => (j < i ? A[j][i] : x)));
        if (type === 1) A = A.map((r, i) => r.map((x, j) => (i === j ? 0 : j < i ? -A[j][i] + 0 : x)));
      } while (isZero(A.flat()) || (type === 1 && isZero([A[0][1], A[0][2], A[1][2]]))
        || (type === 2 && (A.every((r, i) => r.every((x, j) => x === A[j][i])) || A.every((r, i) => r.every((x, j) => x === -A[j][i])))));
      const O = ['symetrická', 'antisymetrická', 'ani symetrická, ani antisymetrická'];
      const why = type === 0 ? 'platí $A^{T}=A$, teda matica je symetrická' : type === 1 ? 'platí $A^{T}=-A$, teda matica je antisymetrická' : 'neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická';
      return {
        type: 'choice', options: O, answer: O[type],
        q: `Rozhodni, aká je matica $A=${pm(A)}$.`,
        solution: `$A^{T}=${pm(trn(A))}$. Porovnaním s $A$ vidíme, že ${why}.`,
        hint: 'Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.'
      };
    }
    const X = randM(2, 2, -4, 4), B = randM(2, 2, -5, 5), BT = trn(B);
    const c = pick([2, 3]);
    const A = X.map((r, i) => r.map((x, j) => c * x - BT[i][j]));
    return {
      type: 'tuple', signed: true, answer: X.flat(), placeholder: 'x₁₁; x₁₂; x₂₁; x₂₂',
      q: `Nájdi maticu $X$, pre ktorú platí $${c}X-A=B^{T}$, ak $A=${pm(A)}$ a $B=${pm(B)}$. Prvky zadaj po riadkoch.`,
      solution: `Z rovnice $X=\\tfrac{1}{${c}}(A+B^{T})$. Máme $B^{T}=${pm(BT)}$, $A+B^{T}=${pm(A.map((r, i) => r.map((x, j) => x + BT[i][j])))}$, teda $X=${pm(X)}$.`,
      hint: 'S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.'
    };
  });

  // ===== 40: hodnosť a riadkové úpravy =====
  lesson({
    id: 'v1-hodnost', order: 40, title: 'Hodnosť matice a riadkové úpravy',
    summary: 'Elementárne riadkové úpravy, stupňovitý tvar, Gaussova eliminácia a hodnosť matice.',
    theory: [
      `<p><strong>Elementárne riadkové úpravy</strong> sú: (1) výmena dvoch riadkov, (2) vynásobenie riadka nenulovým číslom, (3) pripočítanie násobku iného riadka k riadku. Ak $B$ vznikne z $A$ konečným počtom takých úprav, píšeme $A\\sim B$ (matice sú riadkovo ekvivalentné). Zápis $R_2-3R_1$ znamená, že druhý riadok nahradíme rozdielom druhého riadka a trojnásobku prvého.</p>`,
      `<p>Matica je v <strong>stupňovitom tvare</strong>, ak každý nenulový riadok začína väčším počtom núl ako riadok nad ním a nulové riadky sú na konci. Prvý nenulový prvok riadka je jeho <strong>vedúci prvok</strong>. <strong>Gaussova eliminácia</strong> prevedie každú maticu do stupňovitého tvaru: v aktuálnom stĺpci zvolíme vedúci prvok a pomocou úpravy (3) vynulujeme všetko pod ním. Ak navyše vedúce prvky upravíme na 1 a vynulujeme aj prvky nad nimi, dostaneme redukovaný tvar (Gaussova–Jordanova eliminácia).</p>`,
      { fig: 'v1-stupne', caption: 'Stupňovitý tvar: vedúce prvky sa smerom nadol posúvajú doprava. Matica má tri nenulové riadky, preto $h(A)=3$.' },
      `<p><strong>Hodnosť</strong> $h(A)$ je maximálny počet lineárne nezávislých riadkov matice $A$. Riadkové úpravy hodnosť nemenia, preto $h(A)$ je počet nenulových riadkov stupňovitého tvaru. Platí $h(A)=h(A^{T})$ (riadková hodnosť sa rovná stĺpcovej) a $h(A)\\le\\min(m, n)$. Pre štvorcovú maticu rádu $n$ platí: $h(A)=n\\iff\\det A\\neq 0\\iff A$ je regulárna.</p>`
    ],
    examples: [
      { task: 'Urči hodnosť matice $A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$.',
        steps: ['$R_2-2R_1$, $R_3-3R_1$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.',
                '$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.',
                'Stupňovitý tvar má dva nenulové riadky, teda $h(A)=2$.'] },
      { task: 'Pre ktoré $a$ má matica $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$ hodnosť 2?',
        steps: ['$R_2-R_1$, $R_3-2R_1$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.',
                '$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.',
                'Pre $a=4$ je posledný riadok nulový a $h(A)=2$; pre $a\\neq 4$ je $h(A)=3$.'] }
    ]
  });

  // matica typu m×n s hodnosťou r (riadky = r nezávislých + ich kombinácie, náhodne premiešané)
  function rankMatrix(m, n, r, lim = 4) {
    for (;;) {
      const base = randM(r, n, -3, 3);
      if (echelon(base).rank !== r) continue;
      const rows = base.slice();
      while (rows.length < m) {
        let cs;
        do { cs = vec(r, -2, 2); } while (isZero(cs));
        rows.push(lc(base, cs));
      }
      const M = shuffle(rows);
      if (maxAbs(M) > 3 * lim || M.some(isZero)) continue;
      const E = echelon(M);
      if (E.rank === r && maxAbs(E.M) <= 60) return { M, E };
    }
  }

  gen('v1-hodnost', () => {
    if (Math.random() < 0.65) {
      const [m, n] = pick([[3, 3], [3, 4], [3, 4], [4, 3], [4, 4]]);
      const r = pick(m === 4 && n === 4 ? [2, 3, 3] : [1, 2, 2, 3]);
      const { M, E } = rankMatrix(m, n, Math.min(r, m, n));
      return {
        answer: E.rank,
        q: `Urči hodnosť matice $A=${pm(M)}$.`,
        solution: `Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>${chain(M, E)}<br>Stupňovitý tvar má ${E.rank} ${pl(E.rank, RIADOK)}, teda $h(A)=${E.rank}$.`,
        hint: 'Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.'
      };
    }
    let u, v, w0, pos, R;
    do {
      u = vec(3, -3, 3); v = vec(3, -3, 3);
      const a = nz(-2, 2), b = nz(-2, 2);
      w0 = u.map((x, i) => a * x + b * v[i]); pos = rnd(0, 2);
      R = isZero(cross(u, v)) || maxAbs([w0]) > 8 ? null : paramDet(u, v, w0, pos, 'a');
    } while (!R);
    return {
      signed: true, answer: R.t0,
      q: `Pre ktorú hodnotu parametra $a$ má matica $A=${pm([u, v, R.w])}$ hodnosť 2?`,
      solution: `Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. ${R.tex}`,
      hint: 'Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.'
    };
  });

  // ===== 50: determinant 3×3, Laplaceov rozvoj, vlastnosti =====
  lesson({
    id: 'v1-determinant', order: 50, title: 'Determinant 3×3 a Laplaceov rozvoj',
    summary: 'Sarrusovo pravidlo, minory a algebraické doplnky, Laplaceov rozvoj, vlastnosti determinantu.',
    theory: [
      `<p><strong>Determinant</strong> štvorcovej matice rádu $n$ je číslo $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$, kde sčítame cez všetkých $n!$ permutácií $\\pi$ množiny $\\{1, \\dots, n\\}$. Pre $n=3$ dostaneme <strong>Sarrusovo pravidlo</strong>:</p>
       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>`,
      { fig: 'v1-sarrus', caption: 'Sarrusovo pravidlo: za maticu pripíšeme jej prvé dva stĺpce. Súčiny na diagonálach smerom doprava dole berieme so znamienkom plus, smerom doľava dole so znamienkom mínus. Platí <strong>iba</strong> pre matice rádu 3.' },
      `<p><strong>Minor</strong> $M_{ij}$ je determinant matice, ktorá vznikne vynechaním $i$-tého riadka a $j$-tého stĺpca, a <strong>algebraický doplnok</strong> je $A_{ij}=(-1)^{i+j}M_{ij}$. <strong>Laplaceov rozvoj</strong> podľa $i$-tého riadka: $\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$ (analogicky podľa stĺpca). Výhodné je rozvíjať podľa riadka alebo stĺpca s čo najväčším počtom núl.</p>`,
      `<p><strong>Vlastnosti:</strong> $\\det A^{T}=\\det A$; výmena dvoch riadkov zmení znamienko; vynásobenie riadka číslom $c$ vynásobí determinant číslom $c$, preto $\\det(cA)=c^{n}\\det A$; pripočítanie násobku iného riadka determinant nemení; matica s nulovým riadkom alebo s dvoma úmernými riadkami má determinant 0; determinant trojuholníkovej matice je súčin prvkov na diagonále. Pre matice rovnakého rádu platí $\\det(AB)=\\det A\\cdot\\det B$, a ak $A$ je regulárna, $\\det A^{-1}=\\frac{1}{\\det A}$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$.',
        steps: ['Kladné členy: $2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$.',
                'Záporné členy: $3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$.',
                '<strong>Výsledok:</strong> $\\det A=2-13=-11$.'] },
      { task: 'Vypočítaj $\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$.',
        steps: ['V 3. riadku je jediný nenulový prvok $a_{32}=3$. Rozvoj podľa 3. riadka: $\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$.',
                '$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$ (Sarrusovo pravidlo).',
                '<strong>Výsledok:</strong> $\\det A=-3\\cdot 6=-18$.'] }
    ]
  });

  gen('v1-determinant', () => {
    const k = rnd(0, 2);
    if (k === 0) {
      const A = randM(3, 3, -4, 4), S = sarrus(A);
      return {
        signed: true, answer: S.value,
        q: `Vypočítaj determinant matice $A=${pm(A)}$.`,
        solution: `Sarrusovo pravidlo: $\\det A=${S.tex}$.`,
        hint: 'Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.'
      };
    }
    if (k === 1) {
      const A = randM(4, 4, -3, 3), byRow = Math.random() < 0.5, i = rnd(0, 3), j = rnd(0, 3);
      for (let t = 0; t < 4; t++) { if (byRow) A[i][t] = 0; else A[t][j] = 0; }
      A[i][j] = nz(-3, 3);
      const Mm = minor(A, i, j), S = sarrus(Mm), sg = (i + j) % 2 ? -1 : 1, val = sg * A[i][j] * S.value + 0;
      return {
        signed: true, answer: val,
        q: `Vypočítaj determinant matice $A=${pm(A)}$.`,
        solution: `V ${byRow ? `${i + 1}. riadku` : `${j + 1}. stĺpci`} je jediný nenulový prvok $a_{${i + 1}${j + 1}}=${A[i][j]}$, preto Laplaceov rozvoj podľa ${byRow ? 'tohto riadka' : 'tohto stĺpca'} dáva $\\det A=${par(A[i][j])}\\cdot(-1)^{${i + 1}+${j + 1}}\\cdot M_{${i + 1}${j + 1}}$. `
          + `Minor: $M_{${i + 1}${j + 1}}=${vm(Mm)}=${S.tex}$. Teda $\\det A=${par(A[i][j])}\\cdot ${par(sg)}\\cdot ${par(S.value)}=${val}$.`,
        hint: 'Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.'
      };
    }
    const n = pick([3, 4]), d = nz(-5, 5), c = pick([2, 3, -1, -2]);
    const V = [
      [`\\det(${c}A)`, Math.pow(c, n) * d, 1, `$\\det(${c}A)=${par(c)}^{${n}}\\cdot\\det A=${Math.pow(c, n)}\\cdot ${par(d)}=${Math.pow(c, n) * d}$`],
      ['\\det(A^{T}A)', d * d, 1, `$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A=(\\det A)^2=${d * d}$`],
      ['\\det A^{-1}', 1, d, `$\\det A^{-1}=\\frac{1}{\\det A}=${fTex(1, d)}$`],
      [`\\det(${c}A^{-1})`, Math.pow(c, n), d, `$\\det(${c}A^{-1})=${par(c)}^{${n}}\\cdot\\frac{1}{\\det A}=\\frac{${Math.pow(c, n)}}{${d}}=${fTex(Math.pow(c, n), d)}$`],
      ['\\det(-A^{3})', Math.pow(-1, n) * d * d * d, 1, `$\\det(-A^{3})=(-1)^{${n}}(\\det A)^3=${Math.pow(-1, n)}\\cdot ${par(d * d * d)}=${Math.pow(-1, n) * d * d * d}$`],
      ['\\det B', -c * d, 1, `výmena riadkov mení znamienko a vynásobenie riadka číslom $${c}$ násobí determinant číslom $${c}$: $\\det B=-${par(c)}\\cdot ${par(d)}=${-c * d}$`]
    ];
    const [expr, p, q, sol] = pick(V);
    const extra = expr === '\\det B' ? ` Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom $${c}$.` : '';
    return {
      signed: true, answer: p / q, show: fTxt(p, q),
      q: `Štvorcová matica $A$ rádu $${n}$ má $\\det A=${d}$.${extra} Vypočítaj $${expr}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.`,
      solution: sol.startsWith('$') ? sol + '.' : sol.charAt(0).toUpperCase() + sol.slice(1) + '.',
      hint: 'Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.'
    };
  });

  // ===== 60: inverzná matica =====
  lesson({
    id: 'v1-inverzna', order: 60, title: 'Inverzná matica: Gauss–Jordan a adjungovaná matica',
    summary: 'Existencia inverznej matice, výpočet Gaussovou–Jordanovou metódou a cez adjungovanú maticu, maticové rovnice.',
    theory: [
      `<p>Ku štvorcovej matici $A$ rádu $n$ je <strong>inverzná</strong> matica $A^{-1}$ taká, že $AA^{-1}=A^{-1}A=I$. Existuje práve vtedy, keď $\\det A\\neq 0$ (matica je <strong>regulárna</strong>); matica s nulovým determinantom je <strong>singulárna</strong>. Platí $(A^{-1})^{-1}=A$, $(A^{T})^{-1}=(A^{-1})^{T}$ a $(AB)^{-1}=B^{-1}A^{-1}$.</p>`,
      `<p><strong>Gaussova–Jordanova metóda:</strong> rozšírenú maticu $(A\\mid I)$ riadkovými úpravami prevedieme na tvar $(I\\mid B)$; potom $B=A^{-1}$. Ak sa počas úprav vľavo objaví nulový riadok, matica $A$ je singulárna.</p>`,
      `<p><strong>Adjungovaná matica</strong> $\\operatorname{adj}A$ je transponovaná matica algebraických doplnkov: $(\\operatorname{adj}A)_{ij}=A_{ji}$. Platí $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$, teda $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ – pozor na výmenu indexov. Pre $n=2$ dostaneme známy vzorec $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>`,
      `<p><strong>Maticové rovnice:</strong> ak je $A$ regulárna, rovnica $AX=B$ má jediné riešenie $X=A^{-1}B$ a rovnica $XA=B$ riešenie $X=BA^{-1}$. Keďže násobenie matíc nie je komutatívne, na strane, z ktorej násobíme, záleží.</p>`
    ],
    examples: [
      { task: 'Gaussovou–Jordanovou metódou nájdi inverznú maticu k $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.',
        steps: ['$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$; $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.',
                '$R_2-R_3$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$; $R_1-2R_2$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.',
                '<strong>Výsledok:</strong> $A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$ (skúška: $AA^{-1}=I$).'] },
      { task: 'Pre $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$ vypočítaj prvok $(A^{-1})_{13}$.',
        steps: ['$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.',
                '$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$, kde $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$.',
                '<strong>Výsledok:</strong> $(A^{-1})_{13}=\\frac{1}{8}$.'] }
    ]
  });

  gen('v1-inverzna', () => {
    const k = rnd(0, 2);
    if (k === 0) {
      const { M: A, inv, d } = unimod(3);
      const i = rnd(0, 2), S = sarrus(A);
      const row = inv[i];
      return {
        type: 'tuple', signed: true, answer: row, placeholder: 'b₁; b₂; b₃',
        q: `Nájdi ${i + 1}. riadok inverznej matice k matici $A=${pm(A)}$. Zadaj tri čísla oddelené bodkočiarkou.`,
        solution: `$\\det A=${S.tex}$. Podľa vzorca $(A^{-1})_{${i + 1}j}=\\frac{A_{j${i + 1}}}{\\det A}$ potrebujeme algebraické doplnky ${i + 1}. stĺpca: $${[0, 1, 2].map((j) => cofTex(A, j, i)).join(',\\ ')}$. `
          + `Teda ${i + 1}. riadok matice $A^{-1}$ je $\\frac{1}{${d}}(${[0, 1, 2].map((j) => cof(A, j, i)).join(', ')})=${vt(row)}$.`,
        hint: '$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.'
      };
    }
    if (k === 1) {
      let A, d;
      let i, j, c;
      do { A = randM(3, 3, -3, 3); d = det(A); i = rnd(0, 2); j = rnd(0, 2); c = cof(A, j, i); } while (Math.abs(d) < 2 || Math.abs(d) > 9 || c === 0);
      const S = sarrus(A);
      return {
        signed: true, answer: c / d, show: fTxt(c, d),
        q: `Pre maticu $A=${pm(A)}$ vypočítaj prvok $(A^{-1})_{${i + 1}${j + 1}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.`,
        solution: `$\\det A=${S.tex}$. Ďalej $(A^{-1})_{${i + 1}${j + 1}}=\\frac{A_{${j + 1}${i + 1}}}{\\det A}$ a $${cofTex(A, j, i)}$. Teda $(A^{-1})_{${i + 1}${j + 1}}=\\frac{${c}}{${d}}=${fTex(c, d)}$.`,
        hint: 'Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).'
      };
    }
    const { M: A, inv, d } = unimod(2, 4, 6);
    const X = randM(2, 2, -3, 3), left = Math.random() < 0.5;
    const B = left ? mul(A, X) : mul(X, A);
    return {
      type: 'tuple', signed: true, answer: X.flat(), placeholder: 'x₁₁; x₁₂; x₂₁; x₂₂',
      q: `Vyrieš maticovú rovnicu $${left ? 'AX=B' : 'XA=B'}$, kde $A=${pm(A)}$ a $B=${pm(B)}$. Prvky matice $X$ zadaj po riadkoch.`,
      solution: `$\\det A=${d}$, teda $A^{-1}=\\frac{1}{${d}}${pm([[A[1][1], -A[0][1]], [-A[1][0], A[0][0]]].map((r) => r.map((x) => x + 0)))}=${pm(inv)}$. `
        + `Riešenie je $X=${left ? 'A^{-1}B' : 'BA^{-1}'}=${left ? pm(inv) + pm(B) : pm(B) + pm(inv)}=${pm(X)}$.`,
      hint: left ? 'Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.' : 'Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.'
    };
  });

  // ===== 70: sústavy lineárnych rovníc =====
  lesson({
    id: 'v1-sustavy', order: 70, title: 'Sústavy lineárnych rovníc',
    summary: 'Gaussova eliminácia, Frobeniova veta, Cramerovo pravidlo a homogénne sústavy.',
    theory: [
      `<p>Sústavu $m$ lineárnych rovníc s $n$ neznámymi zapíšeme maticovo ako $Ax=b$, kde $A$ je <strong>matica sústavy</strong>, $x=(x_1, \\dots, x_n)^{T}$ a $b$ je stĺpec pravých strán; $(A\\mid b)$ je <strong>rozšírená matica</strong>. Sústava je <strong>homogénna</strong>, ak $b=o$.</p>`,
      `<p><strong>Frobeniova veta:</strong> sústava $Ax=b$ má riešenie práve vtedy, keď $h(A)=h(A\\mid b)$. Ak $h(A)=h(A\\mid b)=n$, riešenie je práve jedno; ak $h(A)=h(A\\mid b)=h\\lt n$, riešení je nekonečne veľa a závisia od $n-h$ parametrov.</p>`,
      { fig: 'v1-priamky', caption: 'Dve rovnice s dvoma neznámymi sú dve priamky v rovine: pretínajú sa, sú rovnobežné rôzne, alebo splývajú.' },
      `<p><strong>Gaussova eliminácia:</strong> rozšírenú maticu prevedieme do stupňovitého tvaru a neznáme dopočítame spätným dosadzovaním odspodu; neznáme bez vedúceho prvku sú voľné parametre. <strong>Cramerovo pravidlo:</strong> ak je $A$ štvorcová a $D=\\det A\\neq 0$, tak $x_i=\\frac{D_i}{D}$, kde $D_i$ je determinant matice, ktorá vznikne z $A$ nahradením $i$-teho stĺpca stĺpcom $b$.</p>
       <p><strong>Homogénna sústava</strong> má vždy triviálne riešenie $x=o$. Netriviálne riešenie existuje práve vtedy, keď $h(A)\\lt n$ (pre štvorcovú maticu práve vtedy, keď $\\det A=0$). Množina všetkých riešení je podpriestor $\\mathbb{R}^n$ dimenzie $n-h(A)$.</p>`
    ],
    examples: [
      { task: 'Vyrieš sústavu $x_1+x_2+x_3=6$, $2x_1-x_2+x_3=3$, $x_1+2x_2-x_3=2$.',
        steps: ['$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$; $R_2-2R_1$, $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.',
                '$R_2\\leftrightarrow R_3$, potom $R_3+3R_2$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$.',
                'Spätne: $x_3=3$, $x_2=-4+2\\cdot 3=2$, $x_1=6-2-3=1$. <strong>Riešenie:</strong> $(1, 2, 3)$.'] },
      { task: 'Vyrieš sústavu $x_1+2x_2-x_3=1$, $2x_1+4x_2+x_3=5$.',
        steps: ['$R_2-2R_1$: $\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$, teda $h(A)=h(A\\mid b)=2\\lt 3$ – nekonečne veľa riešení s jedným parametrom.',
                'Z 2. riadku $x_3=1$. Neznáma $x_2$ nemá vedúci prvok, zvolíme $x_2=t$; z 1. riadku $x_1=1-2t+1=2-2t$.',
                '<strong>Riešenie:</strong> $(2-2t, t, 1)$, $t\\in\\mathbb{R}$.'] }
    ]
  });

  gen('v1-sustavy', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      let A, x, E;
      do {
        A = randM(3, 3, -3, 3); x = vec(3, -4, 4);
        E = det(A) !== 0 ? echelon(A.map((r, i) => [...r, mv(A, x)[i]]), 3) : null;
      } while (!E || maxAbs(E.M) > 60 || A.some((r) => r.filter((c) => c !== 0).length < 2));
      const b = mv(A, x);
      return {
        type: 'tuple', signed: true, answer: x, placeholder: 'x₁; x₂; x₃',
        q: `Gaussovou elimináciou vyrieš sústavu $${A.map((r, i) => `${lin(r, X3)}=${b[i]}`).join(',\\quad ')}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.`,
        solution: `${chain(A.map((r, i) => [...r, b[i]]), E, augm)}<br>Spätné dosadzovanie – ${backSub(E.M, x, X3)}`,
        hint: 'Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.'
      };
    }
    if (k === 1) {
      const type = rnd(0, 2), O = ['práve jedno riešenie', 'nekonečne veľa riešení', 'žiadne riešenie'];
      let A, b, E;
      for (;;) {
        if (type === 0) {
          A = randM(3, 3, -3, 3); if (det(A) === 0) continue; b = vec(3, -5, 5);
        } else {
          const r1 = vec(3, -3, 3), r2 = vec(3, -3, 3); if (isZero(cross(r1, r2))) continue;
          const a = nz(-2, 2), c = nz(-2, 2), b1 = rnd(-5, 5), b2 = rnd(-5, 5);
          const rows = [[...r1, b1], [...r2, b2], [...lc([r1, r2], [a, c]), a * b1 + c * b2 + (type === 2 ? nz(-3, 3) : 0)]];
          const M = shuffle(rows); A = M.map((r) => r.slice(0, 3)); b = M.map((r) => r[3]);
        }
        E = echelon(A.map((r, i) => [...r, b[i]]), 3);
        if (maxAbs(E.M) <= 80 && maxAbs(A) <= 8) break;
      }
      const hA = E.rank, hAb = hA + (E.M.slice(hA).some((r) => r[3] !== 0) ? 1 : 0);
      const ans = hA !== hAb ? O[2] : hA === 3 ? O[0] : O[1];
      const why = hA !== hAb ? `$h(A)=${hA}\\neq h(A\\mid b)=${hAb}$, sústava nemá riešenie` : hA === 3 ? '$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno'
        : `$h(A)=h(A\\mid b)=${hA}\\lt 3$, riešení je nekonečne veľa (${3 - hA === 1 ? 'jeden parameter' : `${3 - hA} parametre`})`;
      return {
        type: 'choice', options: O, answer: ans,
        q: `Koľko riešení má sústava $${A.map((r, i) => `${lin(r, X3)}=${b[i]}`).join(',\\quad ')}$?`,
        solution: `${chain(A.map((r, i) => [...r, b[i]]), E, augm)}<br>Podľa Frobeniovej vety: ${why}.`,
        hint: 'Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.'
      };
    }
    if (k === 2) {
      let A, D, b, i, Ai;
      do {
        A = randM(3, 3, -3, 3); D = det(A); b = vec(3, -5, 5); i = rnd(0, 2);
        Ai = A.map((r, rr) => r.map((v, c) => (c === i ? b[rr] : v)));
      } while (D === 0 || Math.abs(D) > 15 || Math.abs(det(Ai) / D) > 12);
      const SD = sarrus(A), Si = sarrus(Ai);
      return {
        signed: true, answer: Si.value / D, show: fTxt(Si.value, D),
        q: `Cramerovým pravidlom vypočítaj neznámu $x_{${i + 1}}$ zo sústavy $${A.map((r, rr) => `${lin(r, X3)}=${b[rr]}`).join(',\\quad ')}$. Neceločíselný výsledok zadaj ako zlomok.`,
        solution: `$D=${vm(A)}=${SD.tex}$.<br>$D_{${i + 1}}=${vm(Ai)}=${Si.tex}$.<br>Teda $x_{${i + 1}}=\\frac{D_{${i + 1}}}{D}=\\frac{${Si.value}}{${D}}=${fTex(Si.value, D)}$.`,
        hint: `$x_{${i + 1}}=\\frac{D_{${i + 1}}}{D}$, kde v $D_{${i + 1}}$ nahradíš ${i + 1}. stĺpec matice sústavy stĺpcom pravých strán.`
      };
    }
    let A, E, kv;
    for (;;) {
      const r1 = vec(3, -3, 3), r2 = vec(3, -3, 3), c = cross(r1, r2);
      if (isZero(c)) continue;
      A = shuffle([r1, r2, lc([r1, r2], [nz(-2, 2), nz(-2, 2)])]);
      if (maxAbs(A) > 8) continue;
      E = echelon(A);
      kv = prim(cross(E.M[0], E.M[1]));
      if (maxAbs([kv]) <= 12) break;
    }
    return {
      type: 'tuple', proportional: true, signed: true, answer: kv, placeholder: 'x₁; x₂; x₃',
      q: `Nájdi jedno netriviálne riešenie homogénnej sústavy $${A.map((r) => `${lin(r, X3)}=0`).join(',\\quad ')}$. (Uznáme ľubovoľný nenulový násobok.)`,
      solution: `${chain(A, E)}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: $${vt(E.M[0])}\\times${vt(E.M[1])}=${vt(cross(E.M[0], E.M[1]))}$${red3(E, kv)}. Všetky riešenia sú $t\\cdot${vt(kv)}$, $t\\in\\mathbb{R}$.`,
      hint: 'Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).'
    };
  });

  // ===== 80: vektorový priestor, báza, dimenzia =====
  lesson({
    id: 'v1-priestory', order: 80, title: 'Vektorový priestor, báza a dimenzia',
    summary: 'Vektorový priestor a podpriestor, báza, dimenzia a súradnice vektora v báze.',
    theory: [
      `<p><strong>Vektorový priestor</strong> nad $\\mathbb{R}$ je množina $V$ so sčítaním a násobením reálnym číslom, ktoré nevyvedú z $V$ a spĺňajú obvyklé pravidlá: komutatívnosť a asociatívnosť sčítania, existenciu nulového a opačného vektora, distributívne zákony, $(cd)u=c(du)$ a $1\\cdot u=u$. Príklady: $\\mathbb{R}^n$, matice typu $m\\times n$, polynómy stupňa najviac $n$ ($P_n$), reálne funkcie na intervale.</p>`,
      `<p><strong>Podpriestor</strong> je neprázdna podmnožina $W\\subseteq V$, ktorá je uzavretá na sčítanie a násobenie číslom; potom nutne $o\\in W$. Podpriestormi $\\mathbb{R}^3$ sú napríklad priamky a roviny prechádzajúce počiatkom, množina riešení homogénnej sústavy a každý lineárny obal. Rovina, ktorá počiatkom neprechádza, podpriestorom nie je.</p>`,
      `<p><strong>Báza</strong> priestoru $V$ je lineárne nezávislá množina vektorov, ktorej lineárny obal je celé $V$. Všetky bázy majú rovnaký počet prvkov – <strong>dimenziu</strong> $\\dim V$. Napríklad $\\dim\\mathbb{R}^n=n$ (štandardná báza $e_1, \\dots, e_n$), $\\dim P_n=n+1$ a priestor matíc $m\\times n$ má dimenziu $mn$. V priestore dimenzie $n$ tvorí každých $n$ lineárne nezávislých vektorov bázu a $\\dim\\mathcal{L}(u_1, \\dots, u_k)$ je hodnosť matice s riadkami $u_1, \\dots, u_k$.</p>`,
      { fig: 'v1-baza', caption: 'Báza $b_1=(2, 1)$, $b_2=(-1, 2)$ vytvára „šikmú“ sieť. Súradnice $(c_1, c_2)$ vektora v báze $B$ hovoria, koľko krokov treba urobiť v smere $b_1$ a koľko v smere $b_2$.' },
      `<p>Ak $B=(b_1, \\dots, b_n)$ je báza, každý vektor sa dá <strong>jednoznačne</strong> zapísať ako $v=c_1b_1+\\dots+c_nb_n$; čísla $(c_1, \\dots, c_n)$ sú <strong>súradnice</strong> vektora $v$ v báze $B$. Nájdeme ich vyriešením sústavy, ktorej matica má vektory bázy v stĺpcoch a pravá strana je $v$.</p>`
    ],
    examples: [
      { task: 'Nájdi súradnice vektora $v=(3, 0, 1)$ v báze $b_1=(1, 0, 1)$, $b_2=(0, 1, 1)$, $b_3=(1, 1, 0)$.',
        steps: ['Z $v=c_1b_1+c_2b_2+c_3b_3$ dostaneme sústavu $c_1+c_3=3$, $c_2+c_3=0$, $c_1+c_2=1$.',
                'Odčítaním prvých dvoch rovníc $c_1-c_2=3$; spolu s $c_1+c_2=1$ máme $c_1=2$, $c_2=-1$ a $c_3=1$.',
                '<strong>Výsledok:</strong> $(v)_B=(2, -1, 1)$. Skúška: $2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$.'] },
      { task: 'Urči bázu a dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$.',
        steps: ['Matica sústavy $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$ je v stupňovitom tvare a má hodnosť 2, preto $\\dim W=4-2=2$.',
                'Voľné neznáme: $x_3=s$, $x_4=t$. Potom $x_2=-t$ a $x_1=x_3-x_2=s+t$, teda $x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$.',
                '<strong>Výsledok:</strong> báza $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$, $\\dim W=2$.'] }
    ]
  });

  gen('v1-priestory', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      let B, c, v, E;
      do {
        B = randM(3, 3, -2, 2); c = vec(3, -3, 3);
        v = mv(trn(B), c); // v = c1 b1 + c2 b2 + c3 b3, b_i sú riadky B
        E = det(B) !== 0 ? echelon(trn(B).map((r, i) => [...r, v[i]]), 3) : null;
      } while (!E || maxAbs(E.M) > 60 || B.some((r) => r.filter((x) => x !== 0).length < 2) || isZero(c));
      const C = ['c_1', 'c_2', 'c_3'];
      return {
        type: 'tuple', signed: true, answer: c, placeholder: 'c₁; c₂; c₃',
        q: `Nájdi súradnice vektora $v=${vt(v)}$ v báze $b_1=${vt(B[0])}$, $b_2=${vt(B[1])}$, $b_3=${vt(B[2])}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.`,
        solution: `Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>${chain(trn(B).map((r, i) => [...r, v[i]]), E, augm)}<br>Spätné dosadzovanie – ${backSub(E.M, c, C)}`,
        hint: 'Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.'
      };
    }
    if (k === 1) {
      const [m, n] = pick([[3, 4], [4, 3], [4, 4], [3, 3]]);
      const r = pick([1, 2, 2, 3].filter((x) => x <= Math.min(m, n)));
      const { M, E } = rankMatrix(m, n, r);
      return {
        answer: E.rank,
        q: `Urči dimenziu podpriestoru $W=\\mathcal{L}(${M.map((u) => vt(u)).join(',\\ ')})$ priestoru $\\mathbb{R}^{${n}}$.`,
        solution: `Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>${chain(M, E)}<br>Stupňovitý tvar má ${E.rank} ${pl(E.rank, RIADOK)}, teda $\\dim W=${E.rank}$.`,
        hint: 'Vektory zapíš do riadkov matice a urči jej hodnosť.'
      };
    }
    if (k === 2) {
      const a = nz(-4, 4), b = nz(-4, 4), c = rnd(-4, 4), d = nz(-5, 5), kk = nz(-3, 3);
      const R3 = 'x\\in\\mathbb{R}^3';
      const C = [
        [true, `\\{${R3} : ${lin([a, b, c], X3)}=0\\}`, 'je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia'],
        [false, `\\{${R3} : ${lin([a, b, c], X3)}=${d}\\}`, `neobsahuje nulový vektor ($0\\neq ${d}$)`],
        [true, `\\{${R3} : x_1=${cf(kk)}x_2,\\ x_3=0\\}`, 'je to množina riešení homogénnej sústavy (priamka cez počiatok)'],
        [false, `\\{${R3} : x_1x_2=0\\}`, 'napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie'],
        [false, `\\{${R3} : x_1\\ge 0\\}`, 'napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom'],
        [false, `\\{${R3} : x_1=x_2^2\\}`, 'napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$'],
        [true, `\\{(s${kk < 0 ? '-' : '+'}${Math.abs(kk) === 1 ? '' : Math.abs(kk)}t,\\ ${cf(a)}s,\\ t) : s, t\\in\\mathbb{R}\\}`, `je to lineárny obal vektorov $(1, ${a}, 0)$ a $(${kk}, 0, 1)$`],
        [false, `\\{(s,\\ s${d < 0 ? '-' : '+'}${Math.abs(d)},\\ t) : s, t\\in\\mathbb{R}\\}`, `neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka $${d}\\neq 0$`]
      ];
      const [yes, set, why] = pick(C);
      const O = ['je podpriestor', 'nie je podpriestor'];
      return {
        type: 'choice', options: O, answer: yes ? O[0] : O[1],
        q: `Je množina $W=${set}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?`,
        solution: `${yes ? '<strong>Je</strong>' : '<strong>Nie je</strong>'} podpriestor: ${why}.`,
        hint: 'Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.'
      };
    }
    const n = pick([4, 5]), m = pick([2, 3]), r = pick([1, 2, 2, 3].filter((x) => x <= m));
    const { M, E } = rankMatrix(m, n, r);
    const V = n === 4 ? X4 : [...X4, 'x_5'];
    return {
      answer: n - E.rank,
      q: `Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{${n}} : ${M.map((row) => `${lin(row, V)}=0`).join(',\\ ')}\\}$.`,
      solution: `$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>${chain(M, E)}<br>$h(A)=${E.rank}$, teda $\\dim W=${n}-${E.rank}=${n - E.rank}$.`,
      hint: 'Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.'
    };
  });

  // ===== 90: lineárne zobrazenia =====
  const MAPS = [
    ['rotácia o $90^\\circ$ proti smeru hodinových ručičiek', [[0, -1], [1, 0]]],
    ['rotácia o $180^\\circ$', [[-1, 0], [0, -1]]],
    ['rotácia o $90^\\circ$ v smere hodinových ručičiek', [[0, 1], [-1, 0]]],
    ['osová súmernosť podľa osi $x$', [[1, 0], [0, -1]]],
    ['osová súmernosť podľa osi $y$', [[-1, 0], [0, 1]]],
    ['osová súmernosť podľa priamky $y=x$', [[0, 1], [1, 0]]],
    ['osová súmernosť podľa priamky $y=-x$', [[0, -1], [-1, 0]]],
    ['kolmá projekcia na os $x$', [[1, 0], [0, 0]]],
    ['kolmá projekcia na os $y$', [[0, 0], [0, 1]]],
    ['rovnoľahlosť so stredom v počiatku a koeficientom $2$', [[2, 0], [0, 2]]],
    ['skosenie $(x, y)\\mapsto(x+y, y)$', [[1, 1], [0, 1]]]
  ];

  lesson({
    id: 'v1-zobrazenia', order: 90, title: 'Lineárne zobrazenia a ich matice',
    summary: 'Lineárne zobrazenie, jeho matica, skladanie zobrazení, geometrické zobrazenia v rovine, jadro a obraz.',
    theory: [
      `<p>Zobrazenie $f:V\\to W$ medzi vektorovými priestormi je <strong>lineárne</strong>, ak $f(u+v)=f(u)+f(v)$ a $f(cu)=c\\,f(u)$ pre všetky vektory $u, v$ a čísla $c$; potom $f(o)=o$. Každé lineárne zobrazenie $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ má tvar $f(x)=Ax$ pre jedinú maticu $A$ typu $m\\times n$, ktorej stĺpce sú obrazy vektorov štandardnej bázy: $A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$. Zloženému zobrazeniu $g\\circ f$ (najprv $f$, potom $g$) zodpovedá súčin matíc $A_gA_f$.</p>`,
      `<table class="tbl tbl-auto"><tr><th>zobrazenie v $\\mathbb{R}^2$</th><th>matica</th></tr>
       <tr><td>rotácia o uhol $\\varphi$</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>
       <tr><td>súmernosť podľa osi $x$</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>
       <tr><td>súmernosť podľa priamky $y=x$</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>
       <tr><td>kolmá projekcia na os $x$</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>
       <tr><td>rovnoľahlosť s koeficientom $k$</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>`,
      { fig: 'v1-rotacia', caption: 'Rotácia o uhol $\\varphi$: obrazy vektorov $e_1$ (modrý) a $e_2$ (zelený) sú presne stĺpce matice rotácie. Prerušovaný útvar je vzor, plný je jeho obraz.' },
      `<p><strong>Jadro</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$ je množina riešení homogénnej sústavy $Ax=o$; <strong>obraz</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$ je lineárny obal stĺpcov matice $A$. Oba sú podpriestory a $\\dim\\operatorname{Im}f=h(A)$. <strong>Veta o dimenzii jadra a obrazu:</strong> $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$. Zobrazenie je prosté práve vtedy, keď $\\operatorname{Ker}f=\\{o\\}$.</p>`
    ],
    examples: [
      { task: 'Nájdi maticu zobrazenia, ktoré vektor najprv otočí o $90^\\circ$ proti smeru hodinových ručičiek a potom ho zobrazí súmerne podľa osi $x$. Aký je obraz vektora $(2, 1)$?',
        steps: ['Rotácia: $R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$, súmernosť: $S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$. Zloženie (najprv $R$, potom $S$) má maticu $SR$.',
                '$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$ – je to súmernosť podľa priamky $y=-x$.',
                '<strong>Obraz:</strong> $SR\\,(2, 1)^{T}=(-1, -2)^{T}$.'] },
      { task: 'Urči jadro a dimenziu obrazu zobrazenia $f(x)=Ax$, kde $A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.',
        steps: ['Tretí riadok je súčtom prvých dvoch, preto $h(A)=2$ a $\\dim\\operatorname{Im}f=2$.',
                'Jadro: $x_1+x_2=0$, $x_2+x_3=0$. Pre $x_3=t$ je $x_2=-t$, $x_1=t$, teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$.',
                'Skúška vetou o dimenzii: $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$.'] }
    ]
  });

  gen('v1-zobrazenia', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const i = rnd(0, MAPS.length - 1);
      let j = rnd(0, MAPS.length - 2); if (j >= i) j++;
      const [fn, F] = MAPS[i], [gn, G] = MAPS[j], v = [nz(-5, 5), nz(-5, 5)];
      const GF = mul(G, F), w = mv(GF, v);
      return {
        type: 'tuple', signed: true, answer: w, placeholder: 'x; y',
        q: `Vektor $v=${vt(v)}$ najprv zobrazíme zobrazením $f$: ${fn}, a výsledok potom zobrazením $g$: ${gn}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.`,
        solution: `Matice: $A_f=${pm(F)}$, $A_g=${pm(G)}$. Zloženie má maticu $A_gA_f=${pm(GF)}$, teda $(g\\circ f)(v)=${pm(GF)}${col(v)}=${col(w)}$.`,
        hint: 'Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.'
      };
    }
    if (k === 1) {
      const { M: U, inv: Ui } = unimod(2, 3, 5);
      const A = randM(2, 2, -3, 3), P = mul(A, trn(U));
      // stĺpce trn(U) sú vektory u, v (riadky U)
      const u = U[0], v = U[1], fu = [P[0][0], P[1][0]], fv = [P[0][1], P[1][1]];
      const Uc = trn(U), Uci = trn(Ui);
      return {
        type: 'tuple', signed: true, answer: A.flat(), placeholder: 'a₁₁; a₁₂; a₂₁; a₂₂',
        q: `Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f${vt(u)}=${vt(fu)}$ a $f${vt(v)}=${vt(fv)}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.`,
        solution: `Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U=${pm(Uc)}$ a $P=${pm(P)}$. Keďže $\\det U=${det(Uc)}$, je $U^{-1}=${pm(Uci)}$ a $A=PU^{-1}=${pm(P)}${pm(Uci)}=${pm(A)}$.`,
        hint: 'Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.'
      };
    }
    if (k === 2) {
      let A, E, kv;
      for (;;) {
        const r1 = vec(3, -3, 3), r2 = vec(3, -3, 3);
        if (isZero(cross(r1, r2))) continue;
        A = shuffle([r1, r2, lc([r1, r2], [nz(-2, 2), nz(-2, 2)])]);
        if (maxAbs(A) > 8) continue;
        E = echelon(A); kv = prim(cross(E.M[0], E.M[1]));
        if (maxAbs([kv]) <= 12) break;
      }
      return {
        type: 'tuple', proportional: true, signed: true, answer: kv, placeholder: 'x₁; x₂; x₃',
        q: `Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A=${pm(A)}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).`,
        solution: `Jadro je množina riešení sústavy $Ax=o$:<br>${chain(A, E)}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom $${vt(E.M[0])}\\times${vt(E.M[1])}=${vt(cross(E.M[0], E.M[1]))}$${red3(E, kv)}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl(${vt(kv)}\\bigr)$.`,
        hint: 'Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.'
      };
    }
    const [m, n] = pick([[3, 4], [3, 5], [4, 3], [2, 4]]);
    const r = pick([1, 2, 2, 3].filter((x) => x <= Math.min(m, n)));
    const { M, E } = rankMatrix(m, n, r);
    const askKer = Math.random() < 0.5;
    return {
      answer: askKer ? n - E.rank : E.rank,
      q: `Zobrazenie $f:\\mathbb{R}^{${n}}\\to\\mathbb{R}^{${m}}$ je dané maticou $A=${pm(M)}$. Urči $\\dim\\operatorname{${askKer ? 'Ker' : 'Im'}}f$.`,
      solution: `${chain(M, E)}<br>$h(A)=${E.rank}$, teda $\\dim\\operatorname{Im}f=${E.rank}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f=${n}-${E.rank}=${n - E.rank}$.`,
      hint: '$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).'
    };
  });

  // ===== 100: vlastné čísla a vektory, diagonalizácia =====
  lesson({
    id: 'v1-vlastne', order: 100, title: 'Vlastné čísla a vlastné vektory',
    summary: 'Charakteristický polynóm, vlastné čísla a vektory matíc 2×2 a 3×3, diagonalizácia a mocniny matice.',
    theory: [
      `<p>Číslo $\\lambda$ je <strong>vlastné číslo</strong> štvorcovej matice $A$, ak existuje nenulový vektor $v$ s $Av=\\lambda v$; vektor $v$ je potom <strong>vlastný vektor</strong> prislúchajúci k $\\lambda$. Geometricky: zobrazenie $x\\mapsto Ax$ zachováva smer vektora $v$ a len ho $\\lambda$-krát natiahne (pri $\\lambda\\lt 0$ aj otočí).</p>`,
      `<p>Vlastné čísla sú korene <strong>charakteristického polynómu</strong> $p(\\lambda)=\\det(A-\\lambda I)$. Pre maticu $2\\times 2$ je $p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$. Vo všeobecnosti je súčet vlastných čísel rovný $\\operatorname{tr}A$ a ich súčin $\\det A$; trojuholníková matica má vlastné čísla na diagonále. Vlastné vektory k $\\lambda$ sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.</p>`,
      { fig: 'v1-matica', caption: 'Matica $A$ zobrazí jednotkový štvorec na rovnobežník so stranami $Ae_1$ a $Ae_2$ (stĺpce matice); jeho obsah je $|\\det A|$. Oranžové priamky sú vlastné smery – vektory na nich sa zobrazia na svoje násobky.' },
      `<p><strong>Diagonalizácia:</strong> matica $A$ rádu $n$ je diagonalizovateľná, ak $A=PDP^{-1}$, kde $D$ je diagonálna. Nastane to práve vtedy, keď má $A$ $n$ lineárne nezávislých vlastných vektorov; tie tvoria stĺpce matice $P$ a na diagonále $D$ sú príslušné vlastné čísla v rovnakom poradí. Postačuje, aby mala $A$ $n$ rôznych vlastných čísel; každá reálna symetrická matica je diagonalizovateľná. Využitie: $A^k=PD^kP^{-1}$.</p>`
    ],
    examples: [
      { task: 'Nájdi vlastné čísla a vlastné vektory matice $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.',
        steps: ['$\\operatorname{tr}A=7$, $\\det A=10$, teda $\\lambda^2-7\\lambda+10=0$ a $\\lambda_1=2$, $\\lambda_2=5$.',
                '$\\lambda=5$: $A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$, rovnica $-v_1+v_2=0$, vlastný vektor $(1, 1)$.',
                '$\\lambda=2$: $A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$, rovnica $2v_1+v_2=0$, vlastný vektor $(1, -2)$.'] },
      { task: 'Pomocou diagonalizácie vypočítaj $A^3$ pre $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.',
        steps: ['Z predchádzajúceho príkladu $P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$, $D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$ a $P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$.',
                '$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.',
                '<strong>Výsledok:</strong> $A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$.'] }
    ]
  });

  // A = P D P^{-1} pre unimodulárnu P
  function diagMatrix(n, lams, maxA) {
    for (;;) {
      const { M: P, inv } = unimod(n, n === 2 ? 3 : 2, n === 2 ? 5 : 4);
      const D = lams.map((l, i) => lams.map((_, j) => (i === j ? l : 0)));
      const A = mul(mul(P, D), inv);
      if (maxAbs(A) <= maxA && A.flat().filter((x) => x === 0).length <= n - 1) return { A, P, inv };
    }
  }
  const charPolyTex = (A) => {
    const T = A[0][0] + A[1][1], D = det2(A);
    return `\\lambda^2${T ? ` ${T > 0 ? '-' : '+'} ${Math.abs(T) === 1 ? '' : Math.abs(T)}\\lambda` : ''}${D ? ` ${D > 0 ? '+' : '-'} ${Math.abs(D)}` : ''}`;
  };

  gen('v1-vlastne', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      let l1, l2;
      do { l1 = rnd(-4, 5); l2 = rnd(-4, 5); } while (l1 === l2);
      const { A } = diagMatrix(2, [l1, l2], 12);
      const T = A[0][0] + A[1][1], D = det2(A), disc = T * T - 4 * D;
      return {
        type: 'set', signed: true, answer: [l1, l2], placeholder: 'λ₁; λ₂',
        q: `Nájdi vlastné čísla matice $A=${pm(A)}$. Zadaj ich oddelené bodkočiarkou.`,
        solution: `$\\operatorname{tr}A=${T}$, $\\det A=${D}$, charakteristická rovnica je $${T === 0 ? '\\lambda^2' : `\\lambda^2 ${T > 0 ? '-' : '+'} ${Math.abs(T) === 1 ? '' : Math.abs(T)}\\lambda`}${D ? ` ${D > 0 ? '+' : '-'} ${Math.abs(D)}` : ''}=0$. `
          + `Diskriminant $${D ? `${T * T}${-4 * D < 0 ? '-' : '+'}${Math.abs(4 * D)}=` : ''}${disc}$, teda $\\lambda_{1,2}=\\frac{${T}\\pm${Math.sqrt(disc)}}{2}$, t. j. $\\lambda_1=${Math.min(l1, l2)}$ a $\\lambda_2=${Math.max(l1, l2)}$.`,
        hint: 'Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.'
      };
    }
    if (k === 1) {
      const n = pick([2, 3]);
      let lams;
      do { lams = vec(n, -3, 4); } while (new Set(lams).size < n);
      const { A } = diagMatrix(n, lams, n === 2 ? 12 : 9);
      const l = pick(lams);
      const B = A.map((r, i) => r.map((x, j) => (i === j ? x - l : x)));
      let v, how;
      if (n === 2) {
        const row = isZero(B[0]) ? B[1] : B[0], ri = isZero(B[0]) ? 2 : 1;
        v = prim([-row[1], row[0]]);
        how = `Z ${ri}. riadku: $${lin(row, ['v_1', 'v_2'])}=0$, preto je vlastný vektor násobkom $${vt(v)}$.`;
      } else {
        const E = echelon(B);
        v = prim(cross(E.M[0], E.M[1]));
        how = `Úpravou: ${chain(B, E)}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom $${vt(E.M[0])}\\times${vt(E.M[1])}=${vt(cross(E.M[0], E.M[1]))}$${red3(E, v)}.`;
      }
      return {
        type: 'tuple', proportional: true, signed: true, answer: v, placeholder: n === 2 ? 'v₁; v₂' : 'v₁; v₂; v₃',
        q: `Číslo $\\lambda=${l}$ je vlastným číslom matice $A=${pm(A)}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).`,
        solution: `Riešime $(A-\\lambda I)v=o$, kde $A-${par(l)}I=${pm(B)}$. ${how} Skúška: $A${col(v)}=${col(mv(A, v))}=${l}\\cdot${col(v)}$.`,
        hint: 'Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.'
      };
    }
    if (k === 2) {
      let l1, l2;
      do { l1 = rnd(-3, 4); l2 = rnd(-3, 4); } while (l1 === l2);
      const l3 = rnd(-3, 4), { A: Bm } = diagMatrix(2, [l1, l2], 8), c = vec(2, -3, 3);
      const A = [[...Bm[0], c[0]], [...Bm[1], c[1]], [0, 0, l3]];
      const T = l1 + l2, D = l1 * l2;
      return {
        type: 'set', signed: true, answer: [l1, l2, l3], placeholder: 'λ₁; λ₂; λ₃',
        q: `Nájdi všetky vlastné čísla matice $A=${pm(A)}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).`,
        solution: `Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=(${l3 === 0 ? '-\\lambda' : `${l3}-\\lambda`})\\cdot${vm([[`${Bm[0][0]}-\\lambda`, Bm[0][1]], [Bm[1][0], `${Bm[1][1]}-\\lambda`]])}=(${l3 === 0 ? '-\\lambda' : `${l3}-\\lambda`})\\bigl(${charPolyTex(Bm)}\\bigr)$. `
          + `Kvadratický činiteľ má $\\operatorname{tr}=${T}$, $\\det=${D}$ a korene $${Math.min(l1, l2)}$ a $${Math.max(l1, l2)}$. Vlastné čísla sú $${[l1, l2, l3].sort((x, y) => x - y).join(',\\ ')}$.`,
        hint: 'V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.'
      };
    }
    let l1, l2;
    do { l1 = rnd(-2, 3); l2 = rnd(-2, 3); } while (l1 === l2 || l1 * l2 === 0 || Math.abs(l1 * l2) === 1);
    const e = pick([3, 4]);
    for (;;) {
      const { M: P, inv: Pi, d } = unimod(2, 2, 3);
      const D = [[l1, 0], [0, l2]], A = mul(mul(P, D), Pi);
      if (maxAbs(A) > 9 || A.flat().filter((x) => x === 0).length > 1) continue;
      const De = [[Math.pow(l1, e), 0], [0, Math.pow(l2, e)]], Ae = mul(mul(P, De), Pi);
      if (maxAbs(Ae) > 400) continue;
      return {
        type: 'tuple', signed: true, answer: Ae.flat(), placeholder: 'a₁₁; a₁₂; a₂₁; a₂₂',
        q: `Matica $A=${pm(A)}$ má vlastné čísla $${l1}$ a $${l2}$. Pomocou diagonalizácie vypočítaj $A^{${e}}$. Prvky zadaj po riadkoch.`,
        solution: `Vlastné vektory: $${vt([P[0][0], P[1][0]])}$ pre $\\lambda=${l1}$ a $${vt([P[0][1], P[1][1]])}$ pre $\\lambda=${l2}$. Teda $P=${pm(P)}$, $D=${pm(D)}$, $\\det P=${d}$ a $P^{-1}=${pm(Pi)}$. `
          + `$A^{${e}}=PD^{${e}}P^{-1}=${pm(P)}${pm(De)}${pm(Pi)}=${pm(Ae)}$.`,
        hint: 'Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.'
      };
    }
  });

  // ===== 110: skalárny súčin, ortogonalita, projekcia =====
  lesson({
    id: 'v1-skalarny', order: 110, title: 'Skalárny súčin, ortogonalita a projekcia',
    summary: 'Skalárny súčin a norma, uhol vektorov, ortogonálna projekcia a Gramov–Schmidtov proces.',
    theory: [
      `<p><strong>Štandardný skalárny súčin</strong> v $\\mathbb{R}^n$ je $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$. Je symetrický, lineárny v každom argumente a $\\langle u, u\\rangle\\gt 0$ pre $u\\neq o$. <strong>Norma</strong> (dĺžka) je $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$ a vzdialenosť vektorov je $\\|u-v\\|$. Platí <strong>Cauchyho–Schwarzova nerovnosť</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$, preto je správne definovaný uhol $\\varphi$ nenulových vektorov: $\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$.</p>`,
      `<p>Vektory sú <strong>ortogonálne</strong> ($u\\perp v$), ak $\\langle u, v\\rangle=0$. Systém nenulových navzájom ortogonálnych vektorov je lineárne nezávislý; ak majú navyše normu 1, je <strong>ortonormálny</strong>. <strong>Ortogonálna projekcia</strong> vektora $v$ na smer $u\\neq o$ je $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$; vektor $v-\\operatorname{proj}_u v$ je kolmý na $u$ a jeho norma je vzdialenosť bodu $v$ od priamky $\\mathcal{L}(u)$.</p>`,
      { fig: 'v1-projekcia', caption: 'Projekcia vektora $v$ (modrý) na priamku so smerom $u=(\\cos\\theta, \\sin\\theta)$: zelený vektor je $\\operatorname{proj}_u v$, prerušovaná úsečka je kolmá na priamku.' },
      `<p><strong>Gramov–Schmidtov proces</strong> z lineárne nezávislých vektorov $u_1, \\dots, u_k$ vytvorí ortogonálne vektory s rovnakým lineárnym obalom: $w_1=u_1$ a $w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$, t. j. od každého vektora odčítame jeho projekcie na už získané vektory. Vydelením normami $e_j=w_j/\\|w_j\\|$ dostaneme ortonormálnu bázu.</p>`
    ],
    examples: [
      { task: 'Nájdi ortogonálnu projekciu vektora $v=(3, 1, 2)$ na smer $u=(1, 1, 0)$ a vzdialenosť bodu $v$ od priamky $\\mathcal{L}(u)$.',
        steps: ['$\\langle v, u\\rangle=3+1+0=4$, $\\langle u, u\\rangle=2$, teda $\\operatorname{proj}_u v=2u=(2, 2, 0)$.',
                '$v-\\operatorname{proj}_u v=(1, -1, 2)$; skúška kolmosti: $\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$.',
                '<strong>Vzdialenosť:</strong> $\\|(1, -1, 2)\\|=\\sqrt{6}$.'] },
      { task: 'Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1=(1, 1, 1)$ a $u_2=(1, 2, 3)$.',
        steps: ['$w_1=u_1=(1, 1, 1)$.',
                '$\\langle u_2, w_1\\rangle=6$, $\\langle w_1, w_1\\rangle=3$, teda $w_2=u_2-2w_1=(-1, 0, 1)$; skutočne $\\langle w_1, w_2\\rangle=0$.',
                'Ortonormálna báza: $e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$, $e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$.'] }
    ]
  });

  const QUAD = [[1, 2, 2, 3], [2, 3, 6, 7], [1, 4, 8, 9], [4, 4, 7, 9], [2, 6, 9, 11], [2, 10, 11, 15], [1, 2, 0, 0]];
  // náhodná permutácia a znamienka trojice s celočíselnou normou
  const qvec = () => {
    const [a, b, c, n] = pick(QUAD.slice(0, 6));
    return { v: shuffle([a, b, c]).map((x) => x * pick([1, -1])), n };
  };

  gen('v1-skalarny', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      let u, v;
      do { u = vec(3, -2, 3); v = vec(3, -4, 4); } while (isZero(u) || dot(u, v) === 0);
      const p = dot(v, u), q = dot(u, u), pr = u.map((x) => (p * x) / q);
      return {
        type: 'tuple', signed: true, answer: pr, show: u.map((x) => fTxt(p * x, q)).join('; '), placeholder: 'p₁; p₂; p₃',
        q: `Vypočítaj ortogonálnu projekciu vektora $v=${vt(v)}$ na smer vektora $u=${vt(u)}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).`,
        solution: `$\\langle v, u\\rangle=${v.map((x, i) => `${par(x)}\\cdot ${par(u[i])}`).join('+')}=${p}$, $\\langle u, u\\rangle=${q}$. `
          + `$\\operatorname{proj}_u v=\\frac{${p}}{${q}}${vt(u)}=\\left(${u.map((x) => fTex(p * x, q)).join(', ')}\\right)$.`,
        hint: '$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.'
      };
    }
    if (k === 1) {
      let u1, w, u2, c;
      do {
        u1 = vec(3, -2, 2); const r = vec(3, -2, 2);
        w = prim(cross(u1, r)); c = nz(-2, 2);
        u2 = w.map((x, i) => x + c * u1[i]);
      } while (isZero(u1) || isZero(w) || maxAbs([u2]) > 9 || maxAbs([w]) > 7);
      const p = dot(u2, u1), q = dot(u1, u1);
      return {
        type: 'tuple', signed: true, answer: w, placeholder: 'w₁; w₂; w₃',
        q: `Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1=${vt(u1)}$ a $u_2=${vt(u2)}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.`,
        solution: `$w_1=u_1$. $\\langle u_2, w_1\\rangle=${p}$, $\\langle w_1, w_1\\rangle=${q}$, koeficient $\\frac{${p}}{${q}}=${c}$. `
          + `$w_2=u_2${c < 0 ? '+' : '-'}${Math.abs(c) === 1 ? '' : Math.abs(c)}w_1=${vt(u2)}${c < 0 ? '+' : '-'}${vt(u1.map((x) => Math.abs(c) * x))}=${vt(w)}$. Skúška: $\\langle w_1, w_2\\rangle=${dot(u1, w)}$.`,
        hint: '$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.'
      };
    }
    if (k === 2) {
      let u, v, pos;
      do { u = vec(3, -4, 4); v = vec(3, -4, 4); pos = rnd(0, 2); } while (v[pos] === 0 || isZero(v));
      const rest = u.reduce((s, x, i) => s + (i === pos ? 0 : x * v[i]), 0);
      const ut = u.map((x, i) => (i === pos ? 't' : x));
      return {
        signed: true, answer: -rest / v[pos], show: fTxt(-rest, v[pos]),
        q: `Pre ktoré $t$ sú vektory $u=${vt(ut)}$ a $v=${vt(v)}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.`,
        solution: `$\\langle u, v\\rangle=${ut.map((x, i) => `${x === 't' ? 't' : par(x)}\\cdot ${par(v[i])}`).join('+')}=${lin([v[pos]], ['t'], rest)}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t=${fTex(-rest, v[pos])}$.`,
        hint: 'Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.'
      };
    }
    if (Math.random() < 0.5) {
      const { v: d, n } = qvec(), v = vec(3, -4, 4), u = v.map((x, i) => x + d[i]);
      return {
        answer: n,
        q: `Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u=${vt(u)}$ a $v=${vt(v)}$.`,
        solution: `$u-v=${vt(d)}$, $\\|u-v\\|=\\sqrt{${d.map((x) => `${par(x)}^2`).join('+')}}=\\sqrt{${n * n}}=${n}$.`,
        hint: 'Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.'
      };
    }
    let a, b, p;
    do { a = qvec(); b = qvec(); p = dot(a.v, b.v); } while (p === 0);
    return {
      signed: true, answer: p / (a.n * b.n), show: fTxt(p, a.n * b.n),
      q: `Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u=${vt(a.v)}$ a $v=${vt(b.v)}$. Výsledok zadaj ako zlomok.`,
      solution: `$\\langle u, v\\rangle=${p}$, $\\|u\\|=${a.n}$, $\\|v\\|=${b.n}$, teda $\\cos\\varphi=\\frac{${p}}{${a.n}\\cdot ${b.n}}=${fTex(p, a.n * b.n)}$.`,
      hint: '$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.'
    };
  });

  // ===== 120: kvadratické formy a definitnosť =====
  lesson({
    id: 'v1-kvadraticke', order: 120, title: 'Kvadratické formy a definitnosť',
    summary: 'Matica kvadratickej formy, definitnosť, Sylvestrovo kritérium.',
    theory: [
      `<p><strong>Kvadratická forma</strong> na $\\mathbb{R}^n$ je funkcia $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$, kde $A$ je symetrická matica – <strong>matica formy</strong>. Koeficient pri $x_i^2$ je $a_{ii}$, koeficient pri $x_ix_j$ ($i\\neq j$) je $2a_{ij}$. Napríklad $Q=x_1^2+4x_1x_2-3x_2^2$ má maticu $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$.</p>`,
      `<p>Forma (aj jej matica) je <strong>kladne definitná</strong>, ak $Q(x)\\gt 0$ pre každé $x\\neq o$; <strong>kladne semidefinitná</strong>, ak $Q(x)\\ge 0$ pre všetky $x$; analogicky <strong>záporne (semi)definitná</strong>; a <strong>indefinitná</strong>, ak nadobúda kladné aj záporné hodnoty. Pomocou vlastných čísel: všetky kladné $\\iff$ kladne definitná, všetky nezáporné $\\iff$ kladne semidefinitná, rôznych znamienok $\\iff$ indefinitná.</p>`,
      `<p><strong>Sylvestrovo kritérium:</strong> nech $D_1=a_{11}$, $D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$, …, $D_n=\\det A$ sú hlavné rohové minory. Forma je kladne definitná $\\iff D_k\\gt 0$ pre všetky $k$; záporne definitná $\\iff$ znamienka sa striedajú $D_1\\lt 0$, $D_2\\gt 0$, $D_3\\lt 0$, … Ak $\\det A\\neq 0$ a nenastane ani jedna možnosť, forma je indefinitná. Pri $\\det A=0$ rohové minory na rozhodnutie o semidefinitnosti nestačia – treba vlastné čísla alebo všetky hlavné minory.</p>`
    ],
    examples: [
      { task: 'Urči definitnosť formy $Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$.',
        steps: ['Matica formy: $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$.',
                '$D_1=2$, $D_2=2\\cdot 1-1\\cdot 1=1$, $D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$.',
                'Všetky rohové minory sú kladné, forma je <strong>kladne definitná</strong>.'] },
      { task: 'Pre ktoré $a$ je forma $Q=x^2+4xy+ay^2$ kladne definitná?',
        steps: ['$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$, $D_1=1\\gt 0$, $D_2=a-4$.',
                '<strong>Výsledok:</strong> forma je kladne definitná práve pre $a\\gt 4$.'] }
    ]
  });

  // zápis formy z matice: Σ a_ii x_i² + Σ 2a_ij x_i x_j
  const formTex = (A, V) => {
    const n = A.length, cs = [], vs = [];
    for (let i = 0; i < n; i++) { cs.push(A[i][i]); vs.push(`${V[i]}^2`); }
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { cs.push(2 * A[i][j]); vs.push(`${V[i]}${V[j]}`); }
    return lin(cs, vs);
  };
  const DEF = ['kladne definitná', 'záporne definitná', 'kladne semidefinitná', 'záporne semidefinitná', 'indefinitná'];

  gen('v1-kvadraticke', () => {
    const k = rnd(0, 2);
    if (k === 0) {
      const n = pick([2, 3, 3]);
      const target = n === 2 ? rnd(0, 4) : pick([0, 1, 4]);
      let A, Ds;
      for (;;) {
        if (n === 2 && (target === 2 || target === 3)) {
          const s = target === 2 ? 1 : -1, p = nz(-2, 2), q = nz(-2, 2), m = pick([1, 2]);
          A = [[s * m * p * p, s * m * p * q], [s * m * p * q, s * m * q * q]];
        } else {
          A = randM(n, n, -3, 3);
          A = A.map((r, i) => r.map((x, j) => (j < i ? A[j][i] : x)));
          if (target === 0) A = A.map((r, i) => r.map((x, j) => (i === j ? Math.abs(x) + 2 : x)));
          if (target === 1) A = A.map((r, i) => r.map((x, j) => (i === j ? -Math.abs(x) - 2 : x)));
        }
        Ds = [1, 2, 3].slice(0, n).map((m) => det(A.slice(0, m).map((r) => r.slice(0, m))));
        if (target === 2 || target === 3) break;
        if (Ds[n - 1] === 0) continue;
        const pd = Ds.every((d) => d > 0), nd = Ds.every((d, i) => (i % 2 ? d > 0 : d < 0));
        const got = pd ? 0 : nd ? 1 : 4;
        if (got === target) break;
      }
      const V = n === 2 ? ['x', 'y'] : X3;
      const Dtxt = Ds.map((d, i) => `D_${i + 1}=${d}`).join(',\\ ');
      let why;
      if (target === 0) why = 'všetky rohové minory sú kladné';
      else if (target === 1) why = `znamienka rohových minorov sa striedajú (${Ds.map((d, i) => `$D_${i + 1}${d > 0 ? '\\gt' : '\\lt'} 0$`).join(', ')})`;
      else if (target === 4) why = '$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov';
      else {
        const t = A[0][0] + A[1][1];
        why = `$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A=${t}$; obe sú teda ${target === 2 ? 'nezáporné' : 'nekladné'} a jedno je nulové`;
      }
      return {
        type: 'choice', options: DEF, answer: DEF[target],
        q: `Urči definitnosť kvadratickej formy $Q=${formTex(A, V)}$ (vyber najpresnejšiu možnosť).`,
        solution: `Matica formy: $A=${pm(A)}$. Hlavné rohové minory: $${Dtxt}$. Keďže ${why}, forma je <strong>${DEF[target]}</strong>.`,
        hint: 'Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.'
      };
    }
    if (k === 1) {
      if (Math.random() < 0.4) {
        const a11 = rnd(1, 4), b = nz(-4, 4);
        return {
          signed: true, answer: b * b / a11, show: fTxt(b * b, a11),
          q: `Forma $Q=${lin([a11, 2 * b], ['x^2', 'xy'])}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).`,
          solution: `$A=${pm([[a11, b], [b, 'a']])}$, $D_1=${a11}\\gt 0$, $D_2=${a11}a-${b * b}\\gt 0\\iff a\\gt ${fTex(b * b, a11)}$. Teda $c=${fTex(b * b, a11)}$.`,
          hint: 'Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.'
        };
      }
      let A, D2, K;
      for (;;) {
        const p = rnd(1, 3), q = rnd(-2, 2), s = rnd(1, 4), r = rnd(-2, 2), t = rnd(-2, 2);
        D2 = p * s - q * q;
        if (D2 <= 0 || (r === 0 && t === 0)) continue;
        A = [[p, q, r], [q, s, t], [r, t, 0]];
        K = det(A);
        break;
      }
      const Aa = A.map((row, i) => row.map((x, j) => (i === 2 && j === 2 ? 'a' : x)));
      const Q = lin([A[0][0], A[1][1], 2 * A[0][1], 2 * A[0][2], 2 * A[1][2]], ['x_1^2', 'x_2^2', 'x_1x_2', 'x_1x_3', 'x_2x_3']) + ' + ax_3^2';
      return {
        signed: true, answer: -K / D2, show: fTxt(-K, D2),
        q: `Forma $Q=${Q}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).`,
        solution: `Matica formy $A=${pm(Aa)}$. $D_1=${A[0][0]}\\gt 0$, $D_2=${D2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A=${lin([D2], ['a'], K)}$. `
          + `Podmienka $D_3\\gt 0$ dáva $a\\gt ${fTex(-K, D2)}$, teda $c=${fTex(-K, D2)}$.`,
        hint: 'Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.'
      };
    }
    const n = pick([2, 3]);
    // S: na diagonále koeficienty pri x_i², mimo nej koeficienty pri x_ix_j (aspoň jeden nepárny)
    let S;
    do {
      S = randM(n, n, -7, 7);
      S = S.map((r, i) => r.map((x, j) => (i === j ? Math.max(-5, Math.min(5, x)) : j < i ? S[j][i] : x)));
    } while (!S.some((r, i) => r.some((x, j) => j > i && x % 2 !== 0)) || S.some((r, i) => r.every((x, j) => i === j || x === 0)));
    const V = n === 2 ? ['x', 'y'] : X3;
    const cs = [], vs = [];
    for (let i = 0; i < n; i++) { cs.push(S[i][i]); vs.push(`${V[i]}^2`); }
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { cs.push(S[i][j]); vs.push(`${V[i]}${V[j]}`); }
    const entries = n === 2 ? [[0, 1]] : [[0, 1], [0, 2], [1, 2]];
    const ans = entries.map(([i, j]) => S[i][j] / 2);
    const Mtex = pm(S.map((r, i) => r.map((x, j) => (i === j ? x : fTex(x, 2)))));
    return {
      type: 'tuple', signed: true, answer: ans, show: entries.map(([i, j]) => fTxt(S[i][j], 2)).join('; '),
      placeholder: n === 2 ? 'a₁₂' : 'a₁₂; a₁₃; a₂₃',
      q: `Kvadratická forma je $Q=${lin(cs, vs)}$. Urči ${n === 2 ? 'prvok $a_{12}$' : 'prvky $a_{12}, a_{13}, a_{23}$'} jej symetrickej matice ${n === 2 ? '' : '(oddelené bodkočiarkou) '}(zlomky v tvare $p/q$).`,
      solution: `Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A=${Mtex}$.`,
      hint: 'Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.'
    };
  });
})();
