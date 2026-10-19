/* 1. ročník SŠ: číselné obory a intervaly, absolútna hodnota, deliteľnosť, NSD a nsn, zlomky, úpravy výrazov,
   mnohočleny, rovnice s neznámou v menovateli, nerovnice (lineárne, súčinový a podielový tvar), slovné úlohy,
   základy planimetrie (uhly, trojuholníky, štvoruholníky, obsahy, Pytagorova veta, zhodnosť, konštrukcie)
   a praktické výpočty (pomer, mierka, úmernosť, percentá, zaokrúhľovanie).
   Lekcie mnoziny (10), mocniny (70) a linearne (110) sú v content.js; tu sú lekcie okolo nich. */
(function () {
  'use strict';

  const { rnd, pick, gcd, fmt, term, shuffle } = EXERCISES.util;
  const { plane, axes, curvePath, svg, n1, sk } = FIGURES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 's1' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  /* ---------- pomocné funkcie ---------- */

  // Tvar podstatného mena podľa počtu: 1 celé číslo, 2 celé čísla, 5 celých čísel.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  const CISLO = ['celé číslo', 'celé čísla', 'celých čísel'];

  const nz = (a, b) => { let v = 0; while (v === 0) v = rnd(a, b); return v; };
  const par = (v) => (v < 0 ? `(${v})` : String(v));
  const dc = (x) => fmt(x).replace(',', '{,}');                  // desatinná čiarka v KaTeXe (v angličtine bodka)
  const dsep = () => (CONTENT_I18N.decimal() === ',' ? '{,}' : '.'); // oddeľovač v KaTeXe pre čísla mimo fmt
  const uni = (v) => (v < 0 ? '−' : '') + fmt(Math.abs(v));      // číslo v SVG a v popisoch (unicode mínus)
  const lcm = (a, b) => a / gcd(a, b) * b;
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const rb = () => Math.random() < 0.5;

  const red = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g, q / g]; };
  const fTex = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${b}}`; };
  const fTxt = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a}/${b}`; };

  // mnohočlen z koeficientov od najvyššej mocniny: [1, -5, 6] → x^2 - 5x + 6
  const poly = (cs, x = 'x') => {
    const n = cs.length - 1;
    let s = '';
    cs.forEach((c, i) => { const d = n - i; s += term(c, d === 0 ? '' : d === 1 ? x : `${x}^${d}`); });
    s = s.trim();
    return !s ? '0' : s[0] === '+' ? s.slice(2) : '-' + s.slice(2);
  };
  const lin = (k, m) => poly([k, m]);
  // koeficient pred zátvorkou: 1 → ' + ', -1 → ' - ', 3 → ' + 3'
  // činiteľ (x − p) v súčine; pre p = 0 len x
  const fac1 = (p) => (p === 0 ? 'x' : `(${lin(1, -p)})`);
  const mul = (m) => (m === 1 ? ' + ' : m === -1 ? ' - ' : term(m));
  // posledný krok lineárnej rovnice kx = rhs (pri k = 1 netreba deliť)
  const solveX = (k, rhs, x) => (k === 1 ? `$x=${x}$` : T`$${lin(k, 0)}=${rhs}$ a $x=${x}$`);

  // rozklad na prvočinitele: 360 → [[2,3],[3,2],[5,1]]
  const factorize = (n) => {
    const f = [];
    for (let p = 2; p * p <= n; p++) {
      let e = 0;
      while (n % p === 0) { n /= p; e++; }
      if (e) f.push([p, e]);
    }
    if (n > 1) f.push([n, 1]);
    return f;
  };
  const facTex = (n) => factorize(n).map(([p, e]) => (e === 1 ? `${p}` : `${p}^{${e}}`)).join('\\cdot ');

  // intervaly {a, b, L, R}: L/R = krajný bod patrí do intervalu
  const endT = (v) => (v === -Infinity ? '-\\infty' : v === Infinity ? '\\infty' : dc(v));
  const ivT = (I) => `${I.L && Number.isFinite(I.a) ? '\\langle ' : '('}${endT(I.a)}; ${endT(I.b)}${I.R && Number.isFinite(I.b) ? '\\rangle' : ')'}`;
  const setT = (list) => (list.length ? list.map(ivT).join(' \\cup ') : '\\varnothing');
  const optT = (list) => `$${setT(list)}$`;

  // typické chyby: vynechá prázdne a duplicitné položky a tie, ktorých hodnota by bola zároveň správnou odpoveďou
  const withMist = (ex, list) => {
    const seen = new Set();
    const ms = list.filter((m) => {
      if (!m) return false;
      const vals = Array.isArray(m.value) ? m.value : [m.value];
      if (!vals.every((v) => typeof v === 'number' && Number.isFinite(v))) return false;
      const c = EXERCISES.canonical(Object.assign({}, ex, { answer: m.value }));
      if (seen.has(c) || EXERCISES.check(ex, c) === true) return false;
      seen.add(c);
      return true;
    });
    if (ms.length) ex.mistakes = ms;
    return ex;
  };
  // vysvetlenia k nesprávnym možnostiam výberu: len možnosti, ktoré naozaj sú v ponuke a nie sú správnou odpoveďou
  const hintsFor = (ex, pairs) => {
    const h = {};
    pairs.forEach(([opt, msg]) => { if (opt !== ex.answer && ex.options.includes(opt) && !h[opt]) h[opt] = msg; });
    if (Object.keys(h).length) ex.choiceHints = h;
    return ex;
  };

  // správna odpoveď + najviac 3 rôzne nesprávne možnosti, zamiešané
  const choose = (ans, cands, n = 4) =>
    shuffle([ans, ...shuffle([...new Set(cands)].filter((c) => c !== ans)).slice(0, n - 1)]);

  const REL = { lt: '&lt;', le: '\\le', gt: '&gt;', ge: '\\ge' };
  const FLIP = { lt: 'gt', le: 'ge', gt: 'lt', ge: 'le' };
  const holds = (v, rel) => (rel === 'lt' ? v < 0 : rel === 'le' ? v <= 0 : rel === 'gt' ? v > 0 : v >= 0);

  // výsledok k·π počítaný s π ≈ 3,14; tolerancia prijme aj presné π
  const piAns = (k) => ({ answer: Math.round(314 * k) / 100, tol: 0.002 * k + 0.01 });

  // čísla s medzerou medzi tisícami v KaTeXe: 20000 → 20\,000
  const big = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');

  // oblúk uhla s vrcholom P medzi lúčmi PQ a PR (kratší z dvoch), mid(r) = bod na osi uhla
  const angArc = (P, Q, R, r, cls = 'f-warn') => {
    const a1 = Math.atan2(Q[1] - P[1], Q[0] - P[0]);
    let d = Math.atan2(R[1] - P[1], R[0] - P[0]) - a1;
    while (d <= -Math.PI) d += 2 * Math.PI;
    while (d > Math.PI) d -= 2 * Math.PI;
    const x1 = P[0] + r * Math.cos(a1), y1 = P[1] + r * Math.sin(a1);
    const x2 = P[0] + r * Math.cos(a1 + d), y2 = P[1] + r * Math.sin(a1 + d);
    return {
      path: `<path class="${cls}" d="M${n1(x1)} ${n1(y1)} A${r} ${r} 0 0 ${d > 0 ? 1 : 0} ${n1(x2)} ${n1(y2)}"/>`,
      mid: (rr) => [n1(P[0] + rr * Math.cos(a1 + d / 2)), n1(P[1] + rr * Math.sin(a1 + d / 2))]
    };
  };

  /* Dve rovnobežky p, q preťaté priečkou t pod uhlom theta (v stupňoch).
     Uhly pri priesečníku i (0 = horná priamka p, 1 = dolná q) majú polohy k = 0..3:
     0 vpravo hore, 1 vľavo hore, 2 vľavo dole, 3 vpravo dole. Uhly v polohách 0 a 2 majú veľkosť theta.
     marks: [{ i, k, label, math, cls }] */
  const transversal = (theta, marks, width = 0) => {
    const t = theta * Math.PI / 180, cot = Math.cos(t) / Math.sin(t);
    const P = [[210 + 45 * cot, 70], [210 - 45 * cot, 160]];
    const u = [Math.cos(t), -Math.sin(t)];
    const L = 55 / Math.sin(t);
    const dirs = [[1, 0], u, [-1, 0], [-u[0], -u[1]]];
    let s = `<svg viewBox="0 0 420 230"${width ? ` width="${width}"` : ''} role="img" aria-label="Dve rovnobežky preťaté priečkou">
      <line class="f-line" x1="15" y1="70" x2="395" y2="70"/><line class="f-line" x1="15" y1="160" x2="395" y2="160"/>
      <line class="f-line" x1="${n1(P[1][0] - u[0] * L)}" y1="${n1(P[1][1] - u[1] * L)}" x2="${n1(P[0][0] + u[0] * L)}" y2="${n1(P[0][1] + u[1] * L)}"/>
      <text class="f-math" x="402" y="76">p</text><text class="f-math" x="402" y="166">q</text>
      <text class="f-math" x="${n1(P[0][0] + u[0] * L + 8)}" y="${n1(P[0][1] + u[1] * L + 14)}">t</text>`;
    marks.forEach((m) => {
      const C = P[m.i];
      const Q = [C[0] + 30 * dirs[m.k][0], C[1] + 30 * dirs[m.k][1]];
      const R = [C[0] + 30 * dirs[(m.k + 1) % 4][0], C[1] + 30 * dirs[(m.k + 1) % 4][1]];
      const a = angArc(C, Q, R, 20, m.cls || 'f-warn');
      const [lx, ly] = a.mid(m.r || 38);
      s += a.path + `<text class="${m.math ? 'f-math' : 'f-text'}${m.color ? ' ' + m.color : ''}" x="${lx}" y="${n1(ly + 5)}" text-anchor="middle">${m.label}</text>`;
    });
    return s + '</svg>';
  };

  /* ---------- obrázky ---------- */

  fig('s1-obory', {
    draw: () => `<svg viewBox="0 0 460 250" role="img" aria-label="Číselné obory N, Z, Q a R ako do seba vnorené množiny">
      <rect class="f-cell" x="10" y="10" width="440" height="230" rx="14"/>
      <rect class="f-fill3 f-outline3" x="20" y="40" width="300" height="190" rx="12"/>
      <rect class="f-fill2 f-outline2" x="30" y="70" width="200" height="150" rx="10"/>
      <rect class="f-fill f-outline" x="40" y="100" width="100" height="110" rx="8"/>
      <text class="f-math" x="24" y="32">ℝ</text><text class="f-math" x="34" y="62">ℚ</text>
      <text class="f-math" x="44" y="92">ℤ</text><text class="f-math" x="54" y="122">ℕ</text>
      <text class="f-text" x="90" y="164" text-anchor="middle">1, 2, 3, …</text>
      <text class="f-text" x="185" y="134" text-anchor="middle">0</text>
      <text class="f-text" x="185" y="174" text-anchor="middle">−4</text>
      <text class="f-text" x="275" y="104" text-anchor="middle">1/2</text>
      <text class="f-text" x="275" y="144" text-anchor="middle">−0,75</text>
      <text class="f-text" x="275" y="184" text-anchor="middle">0,(3)</text>
      <text class="f-text" x="385" y="104" text-anchor="middle">√2</text>
      <text class="f-text" x="385" y="144" text-anchor="middle">π</text>
      <text class="f-small" x="385" y="214" text-anchor="middle">iracionálne čísla</text></svg>`
  });

  fig('s1-intervaly', {
    draw: () => {
      const X = (v) => n1(40 + (v + 4) * 38);
      let s = `<svg viewBox="0 0 460 172" role="img" aria-label="Prienik dvoch intervalov na číselnej osi">
        <rect class="f-fill" x="${X(1)}" y="30" width="${n1(2 * 38)}" height="106"/>
        <text class="f-small" x="${X(2)}" y="22" text-anchor="middle">A ∩ B</text>
        <line class="f-line" x1="16" y1="130" x2="440" y2="130"/><path class="f-solid" d="M448 130 l-10 -5 v10 z"/>`;
      for (let k = -4; k <= 6; k++) {
        s += `<line class="f-line" x1="${X(k)}" y1="124" x2="${X(k)}" y2="136"/>
          <text class="f-small" x="${X(k)}" y="154" text-anchor="middle">${uni(k)}</text>`;
      }
      return s + `<line class="f-accent" x1="${X(-2)}" y1="58" x2="${X(3)}" y2="58"/>
        <circle class="f-dot" cx="${X(-2)}" cy="58" r="6"/><circle class="f-tri" cx="${X(3)}" cy="58" r="6"/>
        <text class="f-text c-accent" x="${X(-3.6)}" y="63">A</text>
        <line class="f-ok" x1="${X(1)}" y1="96" x2="438" y2="96"/>
        <circle class="f-tri" cx="${X(1)}" cy="96" r="6"/>
        <text class="f-text c-ok" x="${X(-3.6)}" y="101">B</text></svg>`;
    }
  });

  fig('s1-vzdialenost', {
    controls: [
      { id: 'a', label: 'a', min: -4, max: 4, step: 1, value: 2 },
      { id: 'r', label: 'r', min: 0, max: 5, step: 0.5, value: 3 }
    ],
    draw: (v) => {
      const X = (x) => n1(20 + (x + 10) * 20);
      const a = v.a, r = v.r, lo = a - r, hi = a + r;
      let s = `<svg viewBox="0 0 440 100" role="img" aria-label="Absolútna hodnota ako vzdialenosť na číselnej osi">
        <line class="f-line" x1="10" y1="60" x2="428" y2="60"/><path class="f-solid" d="M436 60 l-10 -5 v10 z"/>`;
      for (let k = -10; k <= 10; k++) {
        const bigTick = k % 5 === 0;
        s += `<line class="${bigTick ? 'f-line' : 'f-thin'}" x1="${X(k)}" y1="${bigTick ? 53 : 56}" x2="${X(k)}" y2="${bigTick ? 67 : 64}"/>`;
        if (k % 2 === 0) s += `<text class="f-small" x="${X(k)}" y="86" text-anchor="middle">${uni(k)}</text>`;
      }
      if (r > 0) {
        s += `<line class="f-accent" x1="${X(lo)}" y1="60" x2="${X(hi)}" y2="60"/>
          <circle class="f-dot f-dot-ok" cx="${X(lo)}" cy="60" r="6"/><circle class="f-dot f-dot-ok" cx="${X(hi)}" cy="60" r="6"/>`;
        if (r >= 1) {
          s += `<text class="f-math c-accent" x="${n1((X(lo) + X(a)) / 2)}" y="46" text-anchor="middle">r</text>
            <text class="f-math c-accent" x="${n1((X(a) + X(hi)) / 2)}" y="46" text-anchor="middle">r</text>`;
        }
      }
      s += `<circle class="f-dot f-vertex" cx="${X(a)}" cy="60" r="5"/><text class="f-math" x="${X(a)}" y="30" text-anchor="middle">a</text></svg>`;
      const ab = a === 0 ? '|x|' : `|x ${a > 0 ? '−' : '+'} ${Math.abs(a)}|`;
      const readout = r === 0
        ? `${ab} = 0 ⇔ x = ${uni(a)} · ${ab} ≤ 0 ⇔ x = ${uni(a)}`
        : T`${ab} = ${uni(r)} ⇔ x = ${uni(lo)} alebo x = ${uni(hi)} · <span class="c-accent">${ab} ≤ ${uni(r)} ⇔ x ∈ ⟨${uni(lo)}; ${uni(hi)}⟩</span>`;
      return { svg: s, readout };
    }
  });

  fig('s1-strom', {
    draw: () => {
      const comp = [360, 180, 90, 45, 15], pr = [2, 2, 2, 3, 3];
      const node = (x, y, t, prime) => (prime
        ? `<circle class="f-fill2 f-outline2" cx="${x}" cy="${y}" r="16"/><text class="f-text" x="${x}" y="${y + 5}" text-anchor="middle">${t}</text>`
        : `<text class="f-text" x="${x}" y="${y + 5}" text-anchor="middle" font-weight="700">${t}</text>`);
      let s = '<svg viewBox="0 0 400 272" role="img" aria-label="Strom rozkladu čísla 360 na prvočinitele">';
      comp.forEach((n, i) => {
        const x = 90 + i * 55, y = 26 + i * 42;
        s += `<line class="f-thin" x1="${x - 8}" y1="${y + 10}" x2="${x - 30}" y2="${y + 28}"/>
          <line class="f-thin" x1="${x + 8}" y1="${y + 10}" x2="${x + 46}" y2="${y + 30}"/>`;
        s += node(x, y, n, false) + node(x - 36, y + 42, pr[i], true);
      });
      s += node(365, 236, 5, true);
      return s + '<text class="f-text c-ok" x="16" y="264">360 = 2³ · 3² · 5</text></svg>';
    }
  });

  fig('s1-stvorec', {
    draw: () => `<svg viewBox="0 0 460 240" role="img" aria-label="Štvorec so stranou a plus b rozdelený na štyri časti">
      <rect class="f-fill f-outline" x="20" y="20" width="130" height="130"/>
      <rect class="f-fill2 f-outline2" x="150" y="20" width="70" height="130"/>
      <rect class="f-fill2 f-outline2" x="20" y="150" width="130" height="70"/>
      <rect class="f-fill3 f-outline3" x="150" y="150" width="70" height="70"/>
      <text class="f-math" x="85" y="92" text-anchor="middle">a²</text>
      <text class="f-math" x="185" y="92" text-anchor="middle">ab</text>
      <text class="f-math" x="85" y="192" text-anchor="middle">ab</text>
      <text class="f-math" x="185" y="192" text-anchor="middle">b²</text>
      <text class="f-math" x="85" y="14" text-anchor="middle">a</text><text class="f-math" x="185" y="14" text-anchor="middle">b</text>
      <text class="f-math" x="10" y="90" text-anchor="middle">a</text><text class="f-math" x="10" y="190" text-anchor="middle">b</text>
      <text class="f-text" x="240" y="112">(a + b)² = a² + 2ab + b²</text></svg>`
  });

  fig('s1-znamienka', {
    draw: () => {
      const cols = [160, 260, 365];
      const sign = (x, y, plus) => `<text class="f-text ${plus ? 'c-ok' : 'c-accent'}" x="${x}" y="${y}" text-anchor="middle" font-weight="700">${plus ? '+' : '−'}</text>`;
      const rows = [['x + 2', [0, 1, 1]], ['x − 3', [0, 0, 1]], ['podiel', [1, 0, 1]]];
      let s = `<svg viewBox="0 0 430 190" role="img" aria-label="Tabuľka znamienok pre podiel (x + 2) / (x − 3)">
        <line class="f-line" x1="110" y1="26" x2="420" y2="26"/>
        <circle class="f-dot" cx="210" cy="26" r="6"/><circle class="f-tri" cx="310" cy="26" r="6"/>
        <text class="f-small" x="210" y="12" text-anchor="middle">−2</text><text class="f-small" x="310" y="12" text-anchor="middle">3</text>
        <rect class="f-fill" x="210" y="146" width="100" height="32"/>
        <text class="f-small" x="${cols[0]}" y="64" text-anchor="middle">(−∞; −2)</text>
        <text class="f-small" x="${cols[1]}" y="64" text-anchor="middle">(−2; 3)</text>
        <text class="f-small" x="${cols[2]}" y="64" text-anchor="middle">(3; ∞)</text>`;
      [82, 114, 146, 178].forEach((y) => { s += `<line class="f-thin" x1="4" y1="${y}" x2="420" y2="${y}"/>`; });
      [110, 210, 310].forEach((x) => { s += `<line class="f-thin" x1="${x}" y1="46" x2="${x}" y2="178"/>`; });
      rows.forEach(([lab, sg], i) => {
        const y = 104 + i * 32;
        s += `<text class="f-text" x="10" y="${y}">${lab}</text>` + sg.map((p, j) => sign(cols[j], y, p)).join('');
      });
      return s + '</svg>';
    }
  });

  fig('s1-priecka', {
    draw: () => transversal(62, [
      { i: 0, k: 0, label: 'α', math: true, cls: 'f-accent', color: 'c-accent' },
      { i: 0, k: 2, label: 'α', math: true, cls: 'f-accent', color: 'c-accent' },
      { i: 1, k: 0, label: 'α', math: true, cls: 'f-accent', color: 'c-accent' },
      { i: 0, k: 1, label: '180° − α', cls: 'f-ok', color: 'c-ok', r: 50 }
    ])
  });

  fig('s1-lichobeznik', {
    draw: () => `<svg viewBox="0 0 400 205" role="img" aria-label="Rovnoramenný lichobežník s vyznačenou výškou">
      <polygon class="f-tri" points="40,170 360,170 270,60 130,60"/>
      <polygon class="f-fill" points="40,170 130,170 130,60"/>
      <line class="f-dash" x1="130" y1="60" x2="130" y2="170"/>
      <path class="f-thin" d="M142 170 v-12 h-12"/>
      <text class="f-math" x="30" y="188">A</text><text class="f-math" x="362" y="188">B</text>
      <text class="f-math" x="274" y="52">C</text><text class="f-math" x="116" y="52">D</text>
      <text class="f-math" x="245" y="190" text-anchor="middle">a</text>
      <text class="f-math" x="200" y="52" text-anchor="middle">c</text>
      <text class="f-math" x="76" y="110" text-anchor="end">b</text>
      <text class="f-math" x="324" y="110">b</text>
      <text class="f-math" x="138" y="120">v</text>
      <text class="f-math c-accent" x="85" y="190" text-anchor="middle">x</text></svg>`
  });

  fig('s1-vety', {
    draw: () => {
      const panel = (ox, mode, title) => {
        const A = [ox, 120], B = [ox + 110, 120], C = [ox + 30, 45];
        const on = {
          sss: ['a', 'b', 'c'], sus: ['b', 'c'], usu: ['c'], Ssu: ['a', 'b']
        }[mode];
        const seg = (P, Q, nm) => `<line class="${on.includes(nm) ? 'f-accent' : 'f-line'}" x1="${P[0]}" y1="${P[1]}" x2="${Q[0]}" y2="${Q[1]}"/>`;
        let s = `<polygon class="f-fill" points="${A} ${B} ${C}"/>${seg(A, B, 'c')}${seg(B, C, 'a')}${seg(C, A, 'b')}`;
        if (mode === 'sus' || mode === 'usu' || mode === 'Ssu') s += angArc(A, B, C, 18).path;
        if (mode === 'usu') s += angArc(B, C, A, 18).path;
        s += `<text class="f-math" x="${ox + 55}" y="138" text-anchor="middle">c</text>
          <text class="f-math" x="${ox + 78}" y="80">a</text>
          <text class="f-math" x="${ox + 4}" y="80" text-anchor="end">b</text>
          <text class="f-text" x="${ox + 55}" y="160" text-anchor="middle" font-weight="700">${title}</text>`;
        return s;
      };
      return `<svg viewBox="0 0 560 168" role="img" aria-label="Štyri vety o zhodnosti trojuholníkov">
        ${panel(18, 'sss', 'sss')}${panel(158, 'sus', 'sus')}${panel(298, 'usu', 'usu')}${panel(438, 'Ssu', 'Ssu')}</svg>`;
    }
  });

  fig('s1-tales', {
    draw: () => {
      const A = [70, 190], B = [330, 190], r = 130, h = 90, dx = Math.sqrt(r * r - h * h);
      const C1 = [200 - dx, 100], C2 = [200 + dx, 100];
      const unit = (P, Q) => { const x = Q[0] - P[0], y = Q[1] - P[1], l = Math.hypot(x, y); return [x / l, y / l]; };
      const uA = unit(C1, A), uB = unit(C1, B);
      const m = (k1, k2) => `${n1(C1[0] + 12 * (k1 * uA[0] + k2 * uB[0]))} ${n1(C1[1] + 12 * (k1 * uA[1] + k2 * uB[1]))}`;
      return `<svg viewBox="0 0 400 215" role="img" aria-label="Konštrukcia pravouhlého trojuholníka pomocou Talesovej kružnice">
        <path class="f-accent" d="M70 190 A130 130 0 0 1 330 190"/>
        <line class="f-dash" x1="20" y1="100" x2="380" y2="100"/>
        <polygon class="f-fill f-outline" points="${A} ${B} ${n1(C1[0])},${C1[1]}"/>
        <line class="f-line" x1="70" y1="190" x2="330" y2="190"/>
        <line class="f-dash" x1="${n1(C1[0])}" y1="100" x2="${n1(C1[0])}" y2="190"/>
        <path class="f-thin" d="M${m(1, 0)} L${m(1, 1)} L${m(0, 1)}"/>
        <circle class="f-solid" cx="200" cy="190" r="3"/>
        <circle class="f-dot" cx="${n1(C1[0])}" cy="100" r="5"/><circle class="f-dot f-dot-ok" cx="${n1(C2[0])}" cy="100" r="5"/>
        <text class="f-math" x="56" y="206">A</text><text class="f-math" x="334" y="206">B</text><text class="f-math" x="194" y="208">S</text>
        <text class="f-math" x="${n1(C1[0] - 26)}" y="92">C₁</text><text class="f-math" x="${n1(C2[0] + 8)}" y="92">C₂</text>
        <text class="f-math" x="${n1(C1[0] + 6)}" y="152">v</text>
        <text class="f-math" x="384" y="96">p</text>
        <text class="f-text c-accent" x="200" y="50" text-anchor="middle">Talesova kružnica</text></svg>`;
    }
  });

  fig('s1-umernost', {
    controls: [{ id: 'k', label: 'k', min: 0.5, max: 4, step: 0.5, value: 2 }],
    draw: (v) => {
      const p = plane(-0.5, 6.5, -0.5, 8.5, 420, 300);
      const k = v.k;
      const clipped = `<path class="f-accent" d="${curvePath(p, (x) => k * x, 0, 6.5, 2)}"/>
        <path class="f-ok" d="${curvePath(p, (x) => k / x, 0.05, 6.5, 300)}"/>
        <circle class="f-dot" cx="${n1(p.X(2))}" cy="${n1(p.Y(2 * k))}" r="5"/>
        <circle class="f-dot f-dot-ok" cx="${n1(p.X(2))}" cy="${n1(p.Y(k / 2))}" r="5"/>`;
      return {
        svg: svg(p, axes(p), clipped, '', 'Grafy priamej a nepriamej úmernosti'),
        readout: T`<span class="c-accent">priama: y = ${sk(k, 1)}·x</span> · <span class="c-ok">nepriama: y = ${sk(k, 1)}/x</span> · pre x = 2: y = ${sk(2 * k, 1)} a y = ${sk(k / 2, 2)}`
      };
    }
  });

  /* ========== 20 Číselné obory a intervaly ========== */

  lesson({
    id: 's1-obory', order: 20, topics: ['cisla'], title: 'Číselné obory a intervaly',
    summary: 'Čísla N, Z, Q, R, periodické rozvoje, intervaly a operácie s nimi.',
    theory: [
      `<p>Číselné obory do seba zapadajú: $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$.
       <strong>Prirodzené</strong> čísla $\\mathbb{N}=\\{1, 2, 3, \\dots\\}$ (ak pridáme nulu, píšeme $\\mathbb{N}_0$), <strong>celé</strong> čísla $\\mathbb{Z}$ obsahujú aj nulu a záporné čísla,
       <strong>racionálne</strong> čísla $\\mathbb{Q}$ sú všetky podiely $\\frac{p}{q}$, kde $p\\in\\mathbb{Z}$ a $q\\in\\mathbb{N}$.
       Reálne čísla, ktoré nie sú racionálne, nazývame <strong>iracionálne</strong> (napr. $\\sqrt2$, $\\pi$).</p>`,
      { fig: 's1-obory', caption: 'Každý obor je časťou nasledujúceho. Iracionálne čísla ležia v $\\mathbb{R}$ mimo $\\mathbb{Q}$.' },
      `<p>Racionálne čísla majú <strong>konečný alebo periodický</strong> desatinný rozvoj a naopak, napr. $\\frac{3}{8}=0{,}375$ a $\\frac{4}{11}=0{,}\\overline{36}$.
       Iracionálne čísla majú rozvoj nekonečný a neperiodický. Že $\\sqrt2\\notin\\mathbb{Q}$, dokážeme <strong>sporom</strong>: ak by $\\sqrt2=\\frac{p}{q}$ v základnom tvare,
       potom $p^2=2q^2$, teda $p$ je párne, $p=2k$. Dosadením $4k^2=2q^2$, čiže $q^2=2k^2$ a aj $q$ je párne. Zlomok sa teda dá krátiť dvomi, čo je spor.</p>`,
      `<p><strong>Intervaly</strong> sú podmnožiny $\\mathbb{R}$ určené krajnými bodmi. Lomená zátvorka znamená, že krajný bod do intervalu patrí, okrúhla, že nepatrí:</p>
       <table class="tbl tbl-auto">
         <tr><td>$\\langle a; b\\rangle$</td><td>$a\\le x\\le b$</td><td>uzavretý</td></tr>
         <tr><td>$(a; b)$</td><td>$a&lt;x&lt;b$</td><td>otvorený</td></tr>
         <tr><td>$\\langle a; b)$, $(a; b\\rangle$</td><td>$a\\le x&lt;b$, $a&lt;x\\le b$</td><td>polouzavreté</td></tr>
         <tr><td>$(-\\infty; b\\rangle$, $(a; \\infty)$</td><td>$x\\le b$, $x&gt;a$</td><td>neohraničené</td></tr>
       </table>
       <p>Pri $-\\infty$ a $\\infty$ píšeme vždy okrúhlu zátvorku, nekonečno nie je číslo. Prienik, zjednotenie a rozdiel intervalov najľahšie určíme z obrázka na číselnej osi.</p>`,
      { fig: 's1-intervaly', caption: 'Pre $A=\\langle -2; 3)$ a $B=(1; \\infty)$ je $A\\cap B=(1; 3)$, $A\\cup B=\\langle -2; \\infty)$ a $A\\setminus B=\\langle -2; 1\\rangle$. Plný krúžok: bod patrí do intervalu, prázdny: nepatrí.' }
    ],
    examples: [
      { task: 'Zapíš číslo $0{,}\\overline{36}$ ako zlomok v základnom tvare.',
        steps: ['Označme $x=0{,}\\overline{36}$. Perióda má dve cifry, preto vynásobíme číslom 100: $100x=36{,}\\overline{36}$.',
                'Odčítame: $100x-x=36$, teda $99x=36$.',
                '$x=\\frac{36}{99}=\\frac{4}{11}$.',
                '<strong>Výsledok: $\\frac{4}{11}$</strong>'] },
      { task: 'Dané sú $A=\\langle -2; 3)$ a $B=(1; \\infty)$. Urči $A\\cap B$, $A\\cup B$ a $A\\setminus B$.',
        steps: ['Na osi vyznačíme oba intervaly (pozri obrázok).',
                'Spoločná časť je od 1 (do $B$ nepatrí) po 3 (do $A$ nepatrí): $A\\cap B=(1; 3)$.',
                'Spolu pokrývajú všetko od $-2$ doprava: $A\\cup B=\\langle -2; \\infty)$.',
                'Z $A$ odstránime čísla väčšie ako 1; bod 1 v $B$ nie je, preto v rozdiele zostáva: $A\\setminus B=\\langle -2; 1\\rangle$.'] }
    ]
  });

  const OBOR = ['$\\mathbb{N}$', '$\\mathbb{Z}$', '$\\mathbb{Q}$', '$\\mathbb{R}$'];
  const OBOR_NUMS = [
    () => { const n = rnd(2, 60); return [String(n), 0, T`$${n}$ je kladné celé číslo, teda prirodzené.`]; },
    () => { const n = rnd(1, 40); return [`-${n}`, 1, T`$-${n}$ je záporné celé číslo, do $\\mathbb{N}$ nepatrí.`]; },
    () => ['0', 1, T`Nula je celé číslo, do $\\mathbb{N}=\\{1, 2, 3, \\dots\\}$ však nepatrí.`],
    () => {
      const k = rnd(2, 6), m = rnd(2, 9), neg = rb();
      return [`${neg ? '-' : ''}\\frac{${k * m}}{${k}}`, neg ? 1 : 0, T`Zlomok sa dá vykrátiť: $${neg ? '-' : ''}\\frac{${k * m}}{${k}}=${neg ? -m : m}$.`];
    },
    () => {
      let p, q;
      do { q = rnd(3, 9); p = rnd(1, 20); } while (gcd(p, q) !== 1);
      return [`${rb() ? '-' : ''}\\frac{${p}}{${q}}`, 2, T`Je to podiel dvoch celých čísel, ktorý po krátení nie je celým číslom.`];
    },
    () => {
      const v = (rnd(0, 30) + pick([0.25, 0.5, 0.75, 0.125, 0.2, 0.6])) * pick([1, -1]);
      return [dc(v), 2, T`Konečný desatinný rozvoj má racionálne číslo: je to zlomok s menovateľom 10, 100, 1000, …`];
    },
    () => { const d = rnd(1, 8); return [`0${dsep()}\\overline{${d}}`, 2, T`Periodický rozvoj má racionálne číslo: $0{,}\\overline{${d}}=${fTex(d, 9)}$.`]; },
    () => { const m = rnd(2, 12); return [`\\sqrt{${m * m}}`, 0, `$\\sqrt{${m * m}}=${m}$.`]; },
    () => {
      let n;
      do { n = rnd(2, 50); } while (Number.isInteger(Math.sqrt(n)));
      return [`\\sqrt{${n}}`, 3, T`$${n}$ nie je druhou mocninou celého čísla, preto je $\\sqrt{${n}}$ iracionálne.`];
    },
    () => [pick(['\\pi', '2\\pi', '\\frac{\\pi}{2}']), 3, T`Číslo $\\pi$ je iracionálne, a teda aj každý jeho nenulový racionálny násobok.`],
    () => {
      const a = pick([2, 3, 5]), k = rnd(2, 4);
      return [`\\sqrt{${a}}\\cdot\\sqrt{${a * k * k}}`, 0, `$\\sqrt{${a}}\\cdot\\sqrt{${a * k * k}}=\\sqrt{${a * a * k * k}}=${a * k}$.`];
    },
    () => {
      const a = pick([4, 9, 16, 25, 49]);
      const b = pick([9, 25, 36, 49, 64, 81].filter((x) => x !== a && gcd(Math.sqrt(x), Math.sqrt(a)) === 1));
      return [`\\sqrt{\\frac{${a}}{${b}}}`, 2, `$\\sqrt{\\frac{${a}}{${b}}}=\\frac{${Math.sqrt(a)}}{${Math.sqrt(b)}}$.`];
    },
    () => { const n = pick([2, 3, 5, 7]); return [`1 - \\sqrt{${n}}`, 3, T`Ak by bolo racionálne, aj $\\sqrt{${n}}$ by bola racionálna. Súčet racionálneho a iracionálneho čísla je iracionálny.`]; },
    () => { const n = pick([2, 3, 5, 6, 7]); return [`(\\sqrt{${n}})^2`, 0, `$(\\sqrt{${n}})^2=${n}$.`]; }
  ];

  gen('s1-obory', () => {
    const t = Math.random();
    if (t < 0.25) {
      const [x, k, why] = pick(OBOR_NUMS)();
      return {
        type: 'choice', options: [...OBOR], answer: OBOR[k],
        q: T`Ktorá je najmenšia z množín $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$, do ktorej patrí číslo $${x}$?`,
        solution: T`${why} Najmenšia vyhovujúca množina je ${OBOR[k]}.`,
        hint: T`Číslo najprv zjednoduš (vykráť, odmocni). Zlomok, ktorý nie je celým číslom, patrí do $\\mathbb{Q}$; odmocnina z čísla, ktoré nie je štvorcom, je iracionálna.`
      };
    }
    if (t < 0.5) {
      let p, q, x, sol, mis, st;
      if (rb()) {
        let a, b;
        do { a = rnd(0, 9); b = rnd(0, 9); } while (a === b);
        const n = 10 * a + b;
        [p, q] = red(n, 99);
        x = `0${dsep()}\\overline{${a}${b}}`;
        sol = T`Označme $x=${x}$. Perióda má dve cifry, preto $100x=${n}{,}\\overline{${a}${b}}$. Odčítaním $100x-x=${n}$, teda $99x=${n}$ a $x=\\frac{${n}}{99}${q !== 99 ? `=${fTex(p, q)}` : ''}$.`;
        mis = [
          q !== 99 && { value: [n, 99], msg: T`Zlomok $\\frac{${n}}{99}$ ešte vykráť na základný tvar.` },
          { value: [n, 100], msg: T`Perióda sa opakuje donekonečna, preto $${x}$ nie je $\\frac{${n}}{100}$. Odčítaním $100x-x$ sa perióda odstráni.` }
        ];
        st = { q: T`Označ $x=${x}$. Koľko je $100x-x=99x$?`, answer: n };
      } else {
        let a, b;
        do { a = rnd(1, 9); b = rnd(1, 8); } while (a === b);
        x = `0${dsep()}${a}\\overline{${b}}`;
        const n = 9 * a + b;
        [p, q] = red(n, 90);
        sol = T`Označme $x=${x}$. Potom $10x=${a}{,}\\overline{${b}}$ a $100x=${a}${b}{,}\\overline{${b}}$. Odčítaním $100x-10x=${10 * a + b}-${a}$, teda $90x=${n}$ a $x=\\frac{${n}}{90}${q !== 90 ? `=${fTex(p, q)}` : ''}$.`;
        mis = [
          q !== 90 && { value: [n, 90], msg: T`Zlomok $\\frac{${n}}{90}$ ešte vykráť na základný tvar.` },
          { value: red(10 * a + b, 99), msg: T`Perióda nezačína hneď za desatinnou čiarkou, opakuje sa len cifra ${b}. Najprv vynásob číslo desiatimi, aby perióda začínala hneď za čiarkou.` }
        ];
        st = { q: T`Označ $x=${x}$. Koľko je $100x-10x=90x$?`, answer: n };
      }
      return withMist({
        type: 'tuple', answer: [p, q], placeholder: T`čitateľ; menovateľ`, show: `${p}/${q}`,
        q: T`Zapíš periodické číslo $${x}$ ako zlomok v základnom tvare. Zadaj čitateľa a menovateľa oddelené bodkočiarkou.`,
        solution: sol,
        hint: T`Číslo označ $x$ a vynásob ho takou mocninou 10, aby sa perióda posunula pred desatinnú čiarku. Potom odčítaj, aby perióda zmizla.`,
        steps: [st, { q: T`Vyjadri $x$ ako zlomok a vykráť ho. Zadaj čitateľa a menovateľa.`, answer: [p, q], type: 'tuple', placeholder: T`čitateľ; menovateľ` }]
      }, mis);
    }
    if (t < 0.78) {
      const s = shuffle(range(-6, 8)).slice(0, 4).sort((u, v) => u - v);
      const A = { a: s[0], b: s[2], L: rb(), R: rb() };
      const B = { a: s[1], b: Math.random() < 0.3 ? Infinity : s[3], L: rb(), R: rb() };
      const res = {
        cap: { a: s[1], b: s[2], L: B.L, R: A.R },
        cup: { a: s[0], b: B.b, L: A.L, R: B.R },
        ab: { a: s[0], b: s[1], L: A.L, R: !B.L },
        ba: { a: s[2], b: B.b, L: !A.R, R: B.R }
      };
      const OPS = { cap: 'A\\cap B', cup: 'A\\cup B', ab: 'A\\setminus B', ba: 'B\\setminus A' };
      const op = pick(Object.keys(res)), I = res[op];
      const cands = [{ ...I, L: !I.L }, { ...I, R: !I.R }, { ...I, L: !I.L, R: !I.R }, ...Object.values(res)].map((x) => optT([x]));
      const pat = (inB, v) => (inB ? T`bod $${v}$ do neho patrí` : T`bod $${v}$ do neho nepatrí`);
      const why = {
        cap: T`Prienik tvoria čísla, ktoré ležia v oboch intervaloch. Začína sa v $${s[1]}$ (ľavý krajný bod $B$, ${pat(B.L, s[1])}) a končí v $${s[2]}$ (pravý krajný bod $A$, ${pat(A.R, s[2])}).`,
        cup: T`Intervaly sa prekrývajú, zjednotenie je preto jediný interval od ľavého konca $A$ po pravý koniec $B$.`,
        ab: T`Z intervalu $A$ odoberieme čísla, ktoré ležia v $B$. Zostane časť od $${s[0]}$ po $${s[1]}$; bod $${s[1]}$ ${B.L ? T`patrí do $B$, preto ho odoberieme` : T`do $B$ nepatrí, preto v rozdiele zostáva`}.`,
        ba: T`Z intervalu $B$ odoberieme čísla, ktoré ležia v $A$. Zostane časť od $${s[2]}$ ďalej; bod $${s[2]}$ ${A.R ? T`patrí do $A$, preto ho odoberieme` : T`do $A$ nepatrí, preto v rozdiele zostáva`}.`
      }[op];
      const ex = {
        type: 'choice', answer: optT([I]), options: choose(optT([I]), cands),
        q: T`Dané sú intervaly $A=${ivT(A)}$ a $B=${ivT(B)}$. Urči $${OPS[op]}$.`,
        solution: T`${why} Teda $${OPS[op]}=${ivT(I)}$.`,
        hint: T`Nakresli oba intervaly nad jednu číselnú os. Pri každom krajnom bode zisti, či do výsledku patrí.`
      };
      const OTHER = T`Toto je výsledok inej operácie. Prienik tvoria čísla z oboch intervalov naraz, zjednotenie čísla aspoň z jedného a rozdiel čísla z prvého intervalu, ktoré nie sú v druhom.`;
      return hintsFor(ex, [
        [optT([{ ...I, L: !I.L }]), T`Interval má správne krajné body, ale skontroluj ľavý z nich: patrí do výsledku, alebo nie?`],
        [optT([{ ...I, R: !I.R }]), T`Interval má správne krajné body, ale skontroluj pravý z nich: patrí do výsledku, alebo nie?`],
        [optT([{ ...I, L: !I.L, R: !I.R }]), T`Interval má správne krajné body, ale skontroluj, či do výsledku patria.`],
        ...Object.values(res).map((x) => [optT([x]), OTHER])
      ]);
    }
    const a = rnd(-8, 3) + pick([0, 0, 0.5]), b = a + rnd(3, 9) + pick([0, 0.5]);
    const I = { a, b, L: rb(), R: rb() };
    let lo = Math.ceil(a), hi = Math.floor(b);
    if (lo === a && !I.L) lo++;
    if (hi === b && !I.R) hi--;
    const cnt = hi - lo + 1;
    const desc = rb() ? T`interval $${ivT(I)}$`
      : T`množina $\\{x\\in\\mathbb{R};\\ ${dc(a)} ${I.L ? '\\le' : '&lt;'} x ${I.R ? '\\le' : '&lt;'} ${dc(b)}\\}$`;
    return withMist({
      answer: cnt,
      q: T`Koľko celých čísel obsahuje ${desc}?`,
      solution: T`Najmenšie celé číslo, ktoré do intervalu patrí, je $${lo}$, najväčšie $${hi}$. Spolu je to $${hi}-${par(lo)}+1=${cnt}$ ${T.s(pl(cnt, CISLO))}.`,
      hint: T`Nájdi najmenšie a najväčšie celé číslo v intervale. Pozor na krajné body, ktoré do intervalu nepatria.`,
      steps: [
        { q: T`Aké je najmenšie celé číslo, ktoré do množiny patrí?`, answer: lo, signed: true },
        { q: T`Aké je najväčšie celé číslo, ktoré do množiny patrí?`, answer: hi, signed: true },
        { q: T`Koľko celých čísel je od najmenšieho po najväčšie (vrátane oboch)?`, answer: cnt }
      ]
    }, [
      { value: Math.floor(b) - Math.ceil(a) + 1, msg: T`Krajný bod, ktorý do množiny nepatrí (okrúhla zátvorka alebo ostrá nerovnosť), nepočítaj.` },
      { value: b - a, msg: T`Dĺžka intervalu nie je počet celých čísel v ňom. Nájdi najmenšie a najväčšie celé číslo, ktoré do neho patrí.` }
    ]);
  });

  /* ========== 30 Absolútna hodnota ========== */

  lesson({
    id: 's1-absolutna', order: 30, topics: ['cisla', 'rovnice', 'nerovnice'], title: 'Absolútna hodnota',
    summary: 'Absolútna hodnota ako vzdialenosť, rovnice a nerovnice s absolútnou hodnotou.',
    theory: [
      `<p><strong>Absolútna hodnota</strong> reálneho čísla: $|a|=a$ pre $a\\ge 0$ a $|a|=-a$ pre $a&lt;0$. Napríklad $|7|=7$, $|-7|=7$, $|0|=0$.
       Vždy platí $|a|\\ge 0$, $|a\\cdot b|=|a|\\cdot|b|$ a <strong>trojuholníková nerovnosť</strong> $|a+b|\\le|a|+|b|$.</p>`,
      `<p>Geometricky je $|a|$ vzdialenosť obrazu čísla $a$ od nuly a $|x-a|$ je <strong>vzdialenosť čísel $x$ a $a$</strong> na číselnej osi. Preto:</p>
       <ul><li>$|x-a|=r$ (pre $r&gt;0$) má dve riešenia $x=a-r$ a $x=a+r$; pre $r=0$ jedno ($x=a$), pre $r&lt;0$ žiadne,</li>
       <li>$|x-a|\\le r$ práve vtedy, keď $x\\in\\langle a-r; a+r\\rangle$,</li>
       <li>$|x-a|&gt;r$ práve vtedy, keď $x\\in(-\\infty; a-r)\\cup(a+r; \\infty)$.</li></ul>`,
      { fig: 's1-vzdialenost', caption: 'Body vo vzdialenosti $r$ od čísla $a$ sú riešením rovnice $|x-a|=r$, celá úsečka medzi nimi je riešením nerovnice $|x-a|\\le r$. Mení $a$ aj $r$.' },
      `<p>Výraz $|x+3|$ chápeme ako $|x-(-3)|$, teda vzdialenosť od $-3$. Ak je v absolútnej hodnote $|px+q|$, najprv vyberieme $|p|$: $|2x-6|=2\\,|x-3|$.</p>`
    ],
    examples: [
      { task: 'Vyrieš rovnicu $|2x-3|=7$.',
        steps: ['Výraz v absolútnej hodnote sa rovná $7$ alebo $-7$.',
                '$2x-3=7$ dáva $x=5$; $2x-3=-7$ dáva $x=-2$.',
                '<strong>Riešenia: $x_1=-2$, $x_2=5$</strong>'] },
      { task: 'Vyrieš nerovnicu $|x+1|\\le 4$.',
        steps: ['$|x+1|=|x-(-1)|$ je vzdialenosť čísla $x$ od $-1$.',
                'Vzdialenosť najviac 4 majú čísla od $-1-4=-5$ po $-1+4=3$ vrátane.',
                '<strong>$x\\in\\langle -5; 3\\rangle$</strong>'] }
    ]
  });

  const absT = (a) => (a === 0 ? '|x|' : `|${lin(1, -a)}|`);

  gen('s1-absolutna', () => {
    const t = Math.random();
    if (t < 0.25) {
      if (rb()) {
        const a = rnd(-9, 9), b = rnd(-9, 9), c = rnd(-9, 9), d = rnd(-9, 9);
        const u = Math.abs(a - b), w = Math.abs(c - d);
        return withMist({
          signed: true, answer: u - w,
          q: T`Vypočítaj $|${a}-${par(b)}|-|${c}-${par(d)}|$.`,
          solution: T`$|${a}-${par(b)}|=|${a - b}|=${u}$ a $|${c}-${par(d)}|=|${c - d}|=${w}$, teda výsledok je $${u}-${w}=${u - w}$.`,
          hint: T`Najprv vypočítaj výrazy vnútri absolútnych hodnôt, potom vezmi ich absolútne hodnoty.`,
          steps: [
            { q: T`Koľko je $|${a}-${par(b)}|$?`, answer: u },
            { q: T`Koľko je $|${c}-${par(d)}|$?`, answer: w },
            { q: T`Odčítaj získané hodnoty. Aký je výsledok?`, answer: u - w, signed: true }
          ]
        }, [
          { value: (a - b) - (c - d), msg: T`Absolútna hodnota záporného čísla je kladné číslo. Výraz vnútri absolútnej hodnoty najprv vypočítaj a potom z neho vezmi absolútnu hodnotu.` }
        ]);
      }
      const a = nz(-12, 12), b = nz(-12, 12), k = rnd(2, 4);
      const inner = Math.abs(a) - k * Math.abs(b), res = Math.abs(inner);
      return withMist({
        answer: res,
        q: T`Vypočítaj $\\big||${a}|-${k}\\cdot|${b}|\\big|$.`,
        solution: T`$|${a}|=${Math.abs(a)}$ a $|${b}|=${Math.abs(b)}$. Vnútri: $${Math.abs(a)}-${k}\\cdot ${Math.abs(b)}=${inner}$, a $|${inner}|=${res}$.`,
        hint: T`Postupuj zvnútra von. Výsledok absolútnej hodnoty nikdy nie je záporný.`,
        steps: [
          { q: T`Koľko je výraz vnútri, $|${a}|-${k}\\cdot|${b}|$?`, answer: inner, signed: true },
          { q: T`Akú absolútnu hodnotu má tento výsledok?`, answer: res }
        ]
      }, [
        { value: Math.abs(a - k * b), msg: T`Najprv vypočítaj absolútne hodnoty čísel $${a}$ a $${b}$, až potom násob a odčítaj.` }
      ]);
    }
    if (t < 0.5) {
      const p = pick([1, 1, 2, 3]);
      const d = p % 2 ? 2 * rnd(1, 4) : rnd(1, 6);
      const x1 = rnd(-5, 8), x2 = x1 - d, r = p * d / 2, q = r - p * x1;
      return withMist({
        type: 'set', signed: true, answer: [x1, x2], placeholder: T`napr. -2; 5`,
        q: T`Vyrieš rovnicu $|${lin(p, q)}|=${r}$. Zadaj obe riešenia oddelené bodkočiarkou.`,
        solution: T`Výraz v absolútnej hodnote sa rovná $${r}$ alebo $${-r}$. Z $${lin(p, q)}=${r}$ dostaneme $x=${x1}$, z $${lin(p, q)}=${-r}$ dostaneme $x=${x2}$.`,
        hint: T`Rovnica $|V|=r$ s $r&gt;0$ sa rozpadne na dve lineárne rovnice $V=r$ a $V=-r$.`,
        steps: [
          { q: T`Vyrieš rovnicu $${lin(p, q)}=${r}$.`, answer: x1, signed: true },
          { q: T`Vyrieš rovnicu $${lin(p, q)}=${-r}$.`, answer: x2, signed: true },
          { q: T`Zadaj obe riešenia pôvodnej rovnice.`, answer: [x1, x2], type: 'set', signed: true, placeholder: T`napr. -2; 5` }
        ]
      }, [
        { value: [x1, -x1], msg: T`Druhé riešenie nie je opačné číslo k prvému. Vyrieš zvlášť rovnicu $${lin(p, q)}=${-r}$.` }
      ]);
    }
    if (t < 0.78) {
      const a = nz(-6, 6), r = rnd(1, 6), m = pick([1, 1, 2, 3]);
      const rel = pick(['lt', 'le', 'gt', 'ge']);
      const lo = a - r, hi = a + r;
      const inside = (cl) => [{ a: lo, b: hi, L: cl, R: cl }];
      const outside = (cl) => [{ a: -Infinity, b: lo, L: false, R: cl }, { a: hi, b: Infinity, L: cl, R: false }];
      const cl = rel === 'le' || rel === 'ge', inn = rel === 'lt' || rel === 'le';
      const ans = optT(inn ? inside(cl) : outside(cl));
      const wrongSign = optT(inn ? [{ a: -a - r, b: -a + r, L: cl, R: cl }] : [{ a: -Infinity, b: -a - r, R: cl }, { a: -a + r, b: Infinity, L: cl }]);
      const lhs = m === 1 ? absT(a) : `|${lin(m, -m * a)}|`;
      const ENDS = T`Skontroluj krajné body: pri neostrej nerovnosti do riešenia patria, pri ostrej nie.`;
      const SIDE = inn ? T`Hľadáš čísla, ktoré majú od $${a}$ malú vzdialenosť, teda tie medzi dvoma krajnými bodmi, nie mimo nich.`
        : T`Hľadáš čísla, ktoré majú od $${a}$ veľkú vzdialenosť, teda tie mimo úsečky medzi krajnými bodmi.`;
      return hintsFor({
        type: 'choice', answer: ans,
        options: choose(ans, [optT(inside(!cl)), optT(outside(!cl)), optT(inside(cl)), optT(outside(cl)), wrongSign]),
        q: T`Vyrieš nerovnicu $${lhs} ${REL[rel]} ${m * r}$ v $\\mathbb{R}$.`,
        solution: `${m === 1 ? '' : T`Vyberieme ${m} pred absolútnu hodnotu a vydelíme: $${absT(a)} ${REL[rel]} ${r}$. `}`
          + T`Výraz $${absT(a)}$ je vzdialenosť čísla $x$ od $${a}$. Vzdialenosť ${inn ? T`menšia` : T`väčšia`} ako ${cl ? T`alebo rovná ` : ''}$${r}$ majú čísla `
          + T`${inn ? T`medzi $${lo}$ a $${hi}$` : T`naľavo od $${lo}$ a napravo od $${hi}$`}${cl ? T` vrátane krajných bodov` : T` bez krajných bodov`}. Riešenie: ${ans}.`,
        hint: T`$|x-a|$ je vzdialenosť $x$ od $a$. Nájdi body vo vzdialenosti $r$ od $a$ a rozhodni, či hľadáš čísla bližšie alebo ďalej.`
      }, [
        [wrongSign, T`Výraz $${absT(a)}$ je vzdialenosť čísla $x$ od čísla $${a}$. Pozor na znamienko stredu.`],
        [optT(inn ? inside(!cl) : outside(!cl)), ENDS],
        [optT(inn ? outside(cl) : inside(cl)), SIDE],
        [optT(inn ? outside(!cl) : inside(!cl)), SIDE]
      ]);
    }
    const a = nz(-7, 7), r = rnd(2, 7), strict = rb();
    const cnt = strict ? 2 * r - 1 : 2 * r + 1;
    return withMist({
      answer: cnt,
      q: T`Koľko celých čísel $x$ spĺňa nerovnicu $${absT(a)} ${strict ? '&lt;' : '\\le'} ${r}$?`,
      solution: T`Riešením je interval $${ivT({ a: a - r, b: a + r, L: !strict, R: !strict })}$. Celé čísla v ňom sú od $${strict ? a - r + 1 : a - r}$ po $${strict ? a + r - 1 : a + r}$, spolu ${cnt}.`,
      hint: T`Prepíš nerovnicu na interval okolo stredu $a$ a spočítaj celé čísla v ňom.`,
      steps: [
        { q: T`Aké je najmenšie celé číslo, ktoré nerovnicu spĺňa?`, answer: strict ? a - r + 1 : a - r, signed: true },
        { q: T`Aké je najväčšie celé číslo, ktoré nerovnicu spĺňa?`, answer: strict ? a + r - 1 : a + r, signed: true },
        { q: T`Koľko celých čísel je spolu?`, answer: cnt }
      ]
    }, [
      strict ? { value: 2 * r + 1, msg: T`Pri ostrej nerovnosti krajné body $${a - r}$ a $${a + r}$ do riešenia nepatria, nepočítaj ich.` }
        : { value: 2 * r - 1, msg: T`Pri neostrej nerovnosti krajné body $${a - r}$ a $${a + r}$ do riešenia patria, započítaj ich.` }
    ]);
  });

  /* ========== 40 Deliteľnosť, prvočísla, NSD a nsn ========== */

  lesson({
    id: 's1-delitelnost', order: 40, topics: ['cisla'], title: 'Deliteľnosť, prvočísla, NSD a nsn',
    summary: 'Kritériá deliteľnosti s dôkazom, rozklad na prvočinitele, NSD, nsn a zlomky.',
    theory: [
      `<p>Číslo $a\\in\\mathbb{N}$ <strong>delí</strong> číslo $b$ (píšeme $a\\mid b$), ak existuje $k\\in\\mathbb{Z}$ také, že $b=k\\cdot a$.
       <strong>Prvočíslo</strong> má práve dva delitele: 1 a samé seba ($2, 3, 5, 7, 11, \\dots$). Číslo 1 nie je prvočíslo ani zložené číslo.
       <strong>Základná veta aritmetiky:</strong> každé prirodzené číslo väčšie ako 1 sa dá jediným spôsobom (až na poradie) zapísať ako súčin prvočísel.</p>`,
      { fig: 's1-strom', caption: 'Rozklad čísla 360: postupne oddeľujeme najmenšie prvočíslo, ktoré číslo delí. Prvočinitele sú v krúžkoch.' },
      `<p><strong>Kritériá deliteľnosti:</strong> číslom 2, 5, 10 podľa poslednej cifry; 4 podľa posledného dvojčíslia; 8 podľa posledného trojčíslia;
       3 a 9 podľa ciferného súčtu; 11 podľa striedavého súčtu cifier. <em>Prečo funguje kritérium pre 3 a 9?</em> Pre trojciferné číslo
       $\\overline{abc}=100a+10b+c=(99a+9b)+(a+b+c)$. Prvá zátvorka je deliteľná deviatimi, preto je číslo deliteľné 9 (resp. 3) práve vtedy, keď je ním deliteľný ciferný súčet $a+b+c$.
       Podobne $100a+10b+c=(99a+11b)+(a-b+c)$ zdôvodňuje kritérium pre 11.</p>`,
      `<p><strong>NSD</strong> (najväčší spoločný deliteľ) dostaneme z rozkladov ako súčin spoločných prvočiniteľov s <em>menšími</em> exponentmi,
       <strong>nsn</strong> (najmenší spoločný násobok) ako súčin všetkých prvočiniteľov s <em>väčšími</em> exponentmi. Platí $\\mathrm{NSD}(a, b)\\cdot\\mathrm{nsn}(a, b)=a\\cdot b$.
       Ak $\\mathrm{NSD}(a, b)=1$, čísla sú <strong>nesúdeliteľné</strong>. NSD používame pri krátení zlomkov na základný tvar, nsn ako spoločného menovateľa.
       Číslo $p_1^{e_1}\\cdots p_k^{e_k}$ má $(e_1+1)\\cdots(e_k+1)$ deliteľov.</p>`
    ],
    examples: [
      { task: 'Rozlož číslo 360 na prvočinitele a urči počet jeho deliteľov.',
        steps: ['$360=2\\cdot 180=2^2\\cdot 90=2^3\\cdot 45=2^3\\cdot 3^2\\cdot 5$.',
                'Deliteľ má tvar $2^i\\cdot 3^j\\cdot 5^k$, kde $i\\in\\{0,1,2,3\\}$, $j\\in\\{0,1,2\\}$, $k\\in\\{0,1\\}$.',
                '<strong>Počet deliteľov: $4\\cdot 3\\cdot 2=24$</strong>'] },
      { task: 'Urči $\\mathrm{NSD}(84, 90)$ a $\\mathrm{nsn}(84, 90)$.',
        steps: ['$84=2^2\\cdot 3\\cdot 7$, $90=2\\cdot 3^2\\cdot 5$.',
                'Spoločné prvočinitele s menšími exponentmi: $\\mathrm{NSD}=2\\cdot 3=6$.',
                'Všetky prvočinitele s väčšími exponentmi: $\\mathrm{nsn}=2^2\\cdot 3^2\\cdot 5\\cdot 7=1260$.',
                'Kontrola: $6\\cdot 1260=7560=84\\cdot 90$ ✓'] }
    ]
  });

  gen('s1-delitelnost', () => {
    const t = Math.random();
    if (t < 0.25) {
      let e2, e3, e5, n;
      do {
        e2 = rnd(0, 4); e3 = rnd(0, 3); e5 = rnd(0, 2);
        n = 2 ** e2 * 3 ** e3 * 5 ** e5;
      } while (n < 24 || n > 3000 || [e2, e3, e5].filter(Boolean).length < 2);
      if (rb()) {
        return {
          type: 'tuple', answer: [e2, e3, e5], placeholder: 'a; b; c',
          q: T`Rozlož číslo $${n}$ na súčin prvočísel v tvare $2^a\\cdot 3^b\\cdot 5^c$. Zadaj exponenty $a; b; c$ (ak prvočíslo v rozklade nie je, jeho exponent je 0).`,
          solution: T`Postupne delíme: $${n}=${facTex(n)}$, teda $a=${e2}$, $b=${e3}$, $c=${e5}$.`,
          hint: T`Deľ číslom 2, kým sa dá, potom číslom 3, potom 5. Počítaj, koľkokrát si delil.`,
          steps: [
            { q: T`Koľkokrát za sebou môžeš číslo $${n}$ vydeliť dvoma bez zvyšku? To je exponent $a$.`, answer: e2 },
            { q: T`Výsledok deľ tromi, kým sa dá. Koľkokrát? To je exponent $b$.`, answer: e3 },
            { q: T`Zvyšok deľ piatimi. Koľkokrát? To je exponent $c$.`, answer: e5 },
            { q: T`Zadaj exponenty $a; b; c$.`, answer: [e2, e3, e5], type: 'tuple', placeholder: 'a; b; c' }
          ]
        };
      }
      const e7 = rnd(0, 1), m = n * 7 ** e7, cnt = (e2 + 1) * (e3 + 1) * (e5 + 1) * (e7 + 1);
      const fs = factorize(m);
      return withMist({
        answer: cnt,
        q: T`Koľko deliteľov (vrátane čísla 1 a samotného čísla) má číslo $${m}$?`,
        solution: T`$${m}=${facTex(m)}$. Každý deliteľ vznikne voľbou exponentu každého prvočísla od 0 po jeho exponent v rozklade, preto je deliteľov $${fs.map(([, e]) => `(${e}+1)`).join('\\cdot ')}=${cnt}$.`,
        hint: T`Rozlož číslo na prvočinitele. Ak $n=p^a\\cdot q^b\\cdots$, má $(a+1)(b+1)\\cdots$ deliteľov.`
      }, [
        { value: fs.reduce((s, [, e]) => s * e, 1), msg: T`Exponent prvočísla v deliteli môže byť aj 0. Násob preto čísla o 1 väčšie ako exponenty.` },
        { value: fs.reduce((s, [, e]) => s + e + 1, 0), msg: T`Počty možností pre jednotlivé prvočísla sa násobia, nie sčítajú.` }
      ]);
    }
    if (t < 0.5) {
      let g, m, n;
      do { g = rnd(2, 15); m = rnd(2, 12); n = rnd(2, 12); } while (m === n || gcd(m, n) !== 1 || g * Math.max(m, n) > 300);
      const a = g * m, b = g * n, L = g * m * n;
      return withMist({
        steps: [
          { q: T`Aký je najväčší spoločný deliteľ čísel $${a}$ a $${b}$?`, answer: g },
          { q: T`Aký je ich najmenší spoločný násobok?`, answer: L }
        ],
        type: 'tuple', answer: [g, L], placeholder: T`NSD; nsn`,
        q: T`Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel $${a}$ a $${b}$. Zadaj ich v poradí NSD; nsn.`,
        solution: T`$${a}=${facTex(a)}$ a $${b}=${facTex(b)}$. $\\mathrm{NSD}(${a}, ${b})=${facTex(g)}${factorize(g).length > 1 || factorize(g)[0][1] > 1 ? `=${g}` : ''}$ (spoločné prvočinitele s menšími exponentmi), `
          + T`$\\mathrm{nsn}(${a}, ${b})=\\frac{${a}\\cdot ${b}}{${g}}=${L}$.`,
        hint: T`Rozlož obe čísla na prvočinitele. Pre nsn môžeš použiť vzťah $\\mathrm{nsn}(a, b)=\\frac{a\\cdot b}{\\mathrm{NSD}(a, b)}$.`
      }, [
        { value: [g, a * b], msg: T`Súčin čísel je ich spoločný násobok, ale nie najmenší. Vydeľ ho ich najväčším spoločným deliteľom.` }
      ]);
    }
    if (t < 0.75) {
      if (rb()) {
        let dg, pos, need;
        do {
          dg = [rnd(1, 9), rnd(0, 9), rnd(0, 9), rnd(0, 9)];
          pos = rnd(0, 3);
          const rest = dg.reduce((s, v, i) => (i === pos ? s : s + v), 0);
          need = (9 - rest % 9) % 9;
        } while (need < 1);
        dg[pos] = need;
        const shown = dg.map((v, i) => (i === pos ? '\\ast ' : v)).join('');
        const rest = dg.reduce((s, v) => s + v, 0) - need;
        return withMist({
          steps: [
            { q: T`Aký je ciferný súčet známych cifier?`, answer: rest },
            { q: T`Ktorú cifru treba pridať, aby bol ciferný súčet násobkom 9?`, answer: need }
          ],
          answer: need,
          q: T`Ktorú cifru treba napísať namiesto $\\ast$, aby číslo $${shown}$ bolo deliteľné deviatimi?`,
          solution: T`Ciferný súčet známych cifier je $${rest}$. Najbližší násobok 9, ktorý vieme dosiahnuť pridaním jednej cifry, je $${rest + need}$, preto chýba cifra $${need}$. Číslo $${dg.join('')}$ je deliteľné deviatimi.`,
          hint: T`Číslo je deliteľné 9 práve vtedy, keď je 9 deliteľný jeho ciferný súčet.`
        }, [
          { value: (3 - rest % 3) % 3, msg: T`S touto cifrou je číslo deliteľné tromi, ale nie deviatimi. Ciferný súčet musí byť násobkom 9.` }
        ]);
      }
      let dg, pos, need;
      do {
        dg = [rnd(1, 9), rnd(0, 9), rnd(0, 9), rnd(0, 9), rnd(0, 9)];
        pos = rnd(0, 4);
        const rest = dg.reduce((s, v, i) => (i === pos ? s : s + (i % 2 ? -v : v)), 0);
        const sg = pos % 2 ? -1 : 1;
        need = (((-sg * rest) % 11) + 11) % 11;
      } while (need > 9 || (pos === 0 && need === 0));
      dg[pos] = need;
      const shown = dg.map((v, i) => (i === pos ? '\\ast ' : v)).join('');
      const alt = dg.reduce((s, v, i) => s + (i % 2 ? -v : v), 0);
      return {
        answer: need,
        q: T`Ktorú cifru treba napísať namiesto $\\ast$, aby číslo $${shown}$ bolo deliteľné jedenástimi?`,
        solution: T`Striedavý súčet cifier (zľava so znamienkami $+,-,+,-,+$) musí byť deliteľný 11. Pre cifru $${need}$ je to $${dg.map((v, i) => (i ? (i % 2 ? `-${v}` : `+${v}`) : v)).join('')}=${alt}$, čo je násobok 11. Iná cifra 0 až 9 nevyhovuje.`,
        hint: T`Číslo je deliteľné 11 práve vtedy, keď je 11 deliteľný striedavý súčet jeho cifier.`
      };
    }
    const k = rnd(0, 2);
    if (k === 0) {
      let g, m, n;
      do { g = rnd(2, 6); m = rnd(1, 5); n = rnd(1, 5); } while (m === n || gcd(m, n) !== 1);
      const b = g * m, d = g * n;
      let a, c;
      do { a = rnd(1, 2 * b); } while (gcd(a, b) !== 1);
      do { c = rnd(1, 2 * d); } while (gcd(c, d) !== 1);
      const sg = pick([1, -1]), L = lcm(b, d), num = a * (L / b) + sg * c * (L / d);
      return withMist({
        steps: [
          { q: T`Aký je najmenší spoločný menovateľ?`, answer: L },
          { q: T`Rozšír oba zlomky na tento menovateľ a ${sg > 0 ? T`sčítaj` : T`odčítaj`} čitatele. Aký čitateľ dostaneš?`, answer: num, signed: true },
          { q: T`Zapíš výsledok v základnom tvare.`, answer: num / L, show: fTxt(num, L), signed: true }
        ],
        signed: true, answer: num / L, show: fTxt(num, L),
        q: T`Vypočítaj $\\frac{${a}}{${b}} ${sg > 0 ? '+' : '-'} \\frac{${c}}{${d}}$. Výsledok zadaj ako zlomok v základnom tvare (napr. 7/12).`,
        solution: T`Spoločný menovateľ je $\\mathrm{nsn}(${b}, ${d})=${L}$: $\\frac{${a * L / b}}{${L}} ${sg > 0 ? '+' : '-'} \\frac{${c * L / d}}{${L}}=\\frac{${num}}{${L}}${red(num, L)[1] !== L ? `=${fTex(num, L)}` : ''}$.`,
        hint: T`Ako spoločného menovateľa použi najmenší spoločný násobok menovateľov, nie ich súčin.`
      }, [
        { value: (a + sg * c) / (b + sg * d), msg: T`Zlomky nesčítavaj ani neodčítavaj po čitateľoch a menovateľoch zvlášť. Najprv ich preveď na spoločného menovateľa.` }
      ]);
    }
    if (k === 1) {
      let a, b, L;
      do {
        a = pick([6, 8, 9, 10, 12, 15, 18, 20, 24, 30]); b = pick([6, 8, 9, 10, 12, 15, 18, 20, 24, 30]);
        L = lcm(a, b);
      } while (a === b || L > 180 || L === Math.max(a, b));
      return withMist({
        answer: L,
        q: T`Z autobusovej stanice odchádza linka A každých ${a} minút a linka B každých ${b} minút. O 6.00 odišli oba autobusy naraz. Najskôr o koľko minút odídu opäť súčasne?`,
        solution: T`Hľadáme najmenší spoločný násobok: $${a}=${facTex(a)}$, $${b}=${facTex(b)}$, $\\mathrm{nsn}(${a}, ${b})=${L}$. Opäť odídu spolu o ${L} minút.`,
        hint: T`Časy odchodov linky A sú násobky jej intervalu. Hľadáme najmenší čas, ktorý je násobkom oboch intervalov.`
      }, [
        { value: a * b, msg: T`Súčin intervalov je spoločný násobok, ale nemusí byť najmenší. Hľadaj najmenší spoločný násobok.` },
        { value: gcd(a, b), msg: T`Toto je najväčší spoločný deliteľ. Autobusy odídu spolu v čase, ktorý je násobkom oboch intervalov.` }
      ]);
    }
    let g, m, n;
    do { g = rnd(3, 25); m = rnd(2, 9); n = rnd(2, 9); } while (m === n || gcd(m, n) !== 1);
    const askCount = rb();
    return withMist({
      steps: askCount ? [
        { q: T`Aký dlhý bude jeden kúsok (v cm)?`, answer: g },
        { q: T`Koľko kúskov dostaneme spolu?`, answer: m + n }
      ] : undefined,
      answer: askCount ? m + n : g,
      q: T`Dve laty dlhé ${g * m} cm a ${g * n} cm chceme bez zvyšku rozrezať na čo najdlhšie kúsky rovnakej dĺžky (v celých centimetroch). ${askCount ? T`Koľko kúskov dostaneme spolu?` : T`Aký dlhý bude jeden kúsok (v cm)?`}`,
      solution: T`Dĺžka kúska musí deliť obe dĺžky a má byť čo najväčšia: $\\mathrm{NSD}(${g * m}, ${g * n})=${g}$ cm.${askCount ? T` Kúskov bude $${g * m}:${g}+${g * n}:${g}=${m}+${n}=${m + n}$.` : ''}`,
      hint: T`Dĺžka kúska je spoločný deliteľ oboch dĺžok. Ktorý je najväčší?`
    }, askCount
      ? [{ value: g, msg: T`Toto je dĺžka jedného kúska. Úloha sa pýta, koľko kúskov dostaneme z oboch lát spolu.` }]
      : [{ value: g * m * n, msg: T`Kúsok musí deliť obe dĺžky, hľadáš teda spoločného deliteľa, nie násobok.` }]);
  });

  /* ========== 80 Úpravy algebraických výrazov ========== */

  lesson({
    id: 's1-vyrazy', order: 80, topics: ['vyrazy'], title: 'Úpravy algebraických výrazov',
    summary: 'Vzorce pre druhú a tretiu mocninu, lomené výrazy a podmienky ich existencie.',
    theory: [
      `<p><strong>Algebraický výraz</strong> obsahuje čísla, premenné, operácie a zátvorky. Výraz má zmysel len pre hodnoty premenných, pri ktorých nedelíme nulou
       (a neodmocňujeme záporné číslo) – tieto <strong>podmienky</strong> zapisujeme vždy, keď výraz upravujeme. Roznásobením odstraňujeme zátvorky,
       vyberaním pred zátvorku ich vytvárame: $6x^2-9x=3x(2x-3)$.</p>`,
      `<p><strong>Vzorce</strong> (platia pre všetky reálne $a$, $b$):</p>
       <ul><li>$(a\\pm b)^2=a^2\\pm 2ab+b^2$, $\\quad a^2-b^2=(a-b)(a+b)$,</li>
       <li>$(a\\pm b)^3=a^3\\pm 3a^2b+3ab^2\\pm b^3$,</li>
       <li>$a^3+b^3=(a+b)(a^2-ab+b^2)$, $\\quad a^3-b^3=(a-b)(a^2+ab+b^2)$.</li></ul>`,
      { fig: 's1-stvorec', caption: 'Štvorec so stranou $a+b$ sa skladá zo štvorcov $a^2$, $b^2$ a dvoch obdĺžnikov $ab$, odtiaľ $(a+b)^2=a^2+2ab+b^2$.' },
      `<p><strong>Lomené výrazy</strong> krátime len <em>súčinom</em>: čitateľ aj menovateľ najprv rozložíme a vykrátime spoločného činiteľa.
       Napr. $\\frac{x^2-9}{x^2+3x}=\\frac{(x-3)(x+3)}{x(x+3)}=\\frac{x-3}{x}$ pre $x\\neq 0$, $x\\neq -3$. Podmienky určujeme z <em>pôvodného</em> výrazu.
       Sčítanie a odčítanie robíme cez spoločného menovateľa ako pri zlomkoch.</p>`
    ],
    examples: [
      { task: 'Uprav výraz $(2x-3)^2-(x+1)(x-1)$.',
        steps: ['$(2x-3)^2=4x^2-12x+9$ a $(x+1)(x-1)=x^2-1$.',
                '$4x^2-12x+9-(x^2-1)=4x^2-12x+9-x^2+1$.',
                '<strong>$3x^2-12x+10$</strong>'] },
      { task: 'Zjednoduš $\\frac{x^2-4}{x^2-2x}$ a urči podmienky.',
        steps: ['Menovateľ: $x^2-2x=x(x-2)\\neq 0$, teda $x\\neq 0$ a $x\\neq 2$.',
                'Čitateľ: $x^2-4=(x-2)(x+2)$.',
                '$\\frac{(x-2)(x+2)}{x(x-2)}=\\frac{x+2}{x}$.',
                '<strong>$\\frac{x+2}{x}$ pre $x\\neq 0$, $x\\neq 2$</strong>'] }
    ]
  });

  gen('s1-vyrazy', () => {
    const t = Math.random();
    if (t < 0.28) {
      const p = rnd(1, 4), r = rnd(1, 4), q = nz(-6, 6), s = nz(-6, 6);
      let A, B, C, E, sol, first, second, mis;
      const MINUS = T`Pred druhou časťou je mínus: odčítaš celý výsledok, preto sa zmenia znamienka všetkých jeho členov.`;
      const MID = T`Pri umocnení dvojčlena nezabudni na stredný člen $2ab$.`;
      if (rb()) {
        A = p * p - r * r; B = 2 * p * q; C = q * q + s * s;
        E = `(${lin(p, q)})^2-(${lin(r, s)})(${lin(r, -s)})`;
        sol = T`$(${lin(p, q)})^2=${poly([p * p, 2 * p * q, q * q])}$ a $(${lin(r, s)})(${lin(r, -s)})=${poly([r * r, 0, -s * s])}$. Po odčítaní: $${poly([A, B, C])}$.`;
        first = { e: `(${lin(p, q)})^2`, v: [p * p, 2 * p * q, q * q] };
        second = { e: `(${lin(r, s)})(${lin(r, -s)})`, v: [r * r, 0, -s * s] };
        mis = [{ value: [A, B, q * q - s * s], msg: MINUS }, { value: [A, 0, C], msg: MID }];
      } else {
        const u = rnd(1, 3), w = nz(-6, 6);
        A = p * u - r * r; B = p * w + q * u - 2 * r * s; C = q * w - s * s;
        E = `(${lin(p, q)})(${lin(u, w)})-(${lin(r, s)})^2`;
        sol = T`$(${lin(p, q)})(${lin(u, w)})=${poly([p * u, p * w + q * u, q * w])}$ a $(${lin(r, s)})^2=${poly([r * r, 2 * r * s, s * s])}$. Po odčítaní: $${poly([A, B, C])}$.`;
        first = { e: `(${lin(p, q)})(${lin(u, w)})`, v: [p * u, p * w + q * u, q * w] };
        second = { e: `(${lin(r, s)})^2`, v: [r * r, 2 * r * s, s * s] };
        mis = [{ value: [A, p * w + q * u + 2 * r * s, q * w + s * s], msg: MINUS }, { value: [A, B + 2 * r * s, C], msg: MID }];
      }
      return withMist({
        type: 'tuple', signed: true, answer: [A, B, C], placeholder: 'A; B; C',
        q: T`Uprav výraz $${E}$ na tvar $Ax^2+Bx+C$ a zadaj koeficienty $A; B; C$.`,
        solution: T`${sol} Pri odčítaní celú druhú zátvorku odčítame, preto sa všetky jej znamienka zmenia.`,
        hint: T`Použi $(a+b)^2=a^2+2ab+b^2$ a $(a+b)(a-b)=a^2-b^2$. Odčítaný výraz daj do zátvorky.`,
        steps: [
          { q: T`Uprav $${first.e}$ na tvar $Ax^2+Bx+C$. Zadaj koeficienty.`, answer: first.v, type: 'tuple', signed: true, placeholder: 'A; B; C' },
          { q: T`Uprav $${second.e}$ na tvar $Ax^2+Bx+C$. Zadaj koeficienty.`, answer: second.v, type: 'tuple', signed: true, placeholder: 'A; B; C' },
          { q: T`Od prvého výsledku odčítaj druhý. Zadaj koeficienty $A; B; C$.`, answer: [A, B, C], type: 'tuple', signed: true, placeholder: 'A; B; C' }
        ]
      }, mis);
    }
    if (t < 0.52) {
      let s, p;
      do { s = nz(-8, 8); p = nz(-12, 12); } while (s * s < 4 * p);
      const k = rnd(0, 3);
      const what = ['a^2+b^2', '(a-b)^2', 'a^3+b^3', 'a^2b+ab^2'][k];
      const val = [s * s - 2 * p, s * s - 4 * p, s ** 3 - 3 * p * s, p * s][k];
      const how = [
        `$a^2+b^2=(a+b)^2-2ab=${par(s)}^2-2\\cdot ${par(p)}=${val}$`,
        `$(a-b)^2=a^2-2ab+b^2=(a+b)^2-4ab=${par(s)}^2-4\\cdot ${par(p)}=${val}$`,
        `$a^3+b^3=(a+b)^3-3ab(a+b)=${par(s)}^3-3\\cdot ${par(p)}\\cdot ${par(s)}=${val}$`,
        `$a^2b+ab^2=ab(a+b)=${par(p)}\\cdot ${par(s)}=${val}$`
      ][k];
      const ex = withMist({
        signed: true, answer: val,
        q: T`Pre reálne čísla $a$, $b$ platí $a+b=${s}$ a $a\\cdot b=${p}$. Bez výpočtu čísel $a$, $b$ urči hodnotu výrazu $${what}$.`,
        solution: T`Výraz vyjadríme pomocou $a+b$ a $ab$: ${how}.`,
        hint: T`Vyjadri hľadaný výraz len pomocou súčtu $a+b$ a súčinu $ab$, napr. $(a+b)^2=a^2+2ab+b^2$.`
      }, [
        k === 0 && { value: s * s, msg: T`$(a+b)^2$ nie je $a^2+b^2$, obsahuje aj člen $2ab$.` },
        k === 1 && { value: s * s - 2 * p, msg: T`Toto je $a^2+b^2$. Pri $(a-b)^2$ treba od neho ešte odčítať $2ab$.` },
        k === 2 && { value: s ** 3, msg: T`$(a+b)^3$ nie je $a^3+b^3$, obsahuje aj členy $3a^2b+3ab^2$.` },
        k === 3 && { value: p + s, msg: T`Vyber pred zátvorku spoločný činiteľ $ab$ – súčin a súčet sa potom násobia, nesčítavajú.` }
      ]);
      if (k < 3) {
        ex.steps = [
          { q: T`Koľko je $(a+b)^${k === 2 ? 3 : 2}$?`, answer: k === 2 ? s ** 3 : s * s, signed: true },
          { q: T`Odčítaj potrebný násobok súčinu $ab$. Akú hodnotu má výraz $${what}$?`, answer: val, signed: true }
        ];
      }
      return ex;
    }
    if (t < 0.76) {
      let r1, r2;
      const k = rnd(0, 2);
      if (k === 0) { do { r1 = nz(-7, 7); r2 = nz(-7, 7); } while (r1 >= r2 || r1 === -r2); }
      else if (k === 1) { r2 = rnd(1, 7); r1 = -r2; }
      else { r1 = 0; r2 = nz(-7, 7); }
      const num = lin(rnd(1, 4), nz(-5, 5));
      const den = poly([1, -(r1 + r2), r1 * r2]);
      const fac = `${r1 === 0 ? 'x' : `(${lin(1, -r1)})`}${r2 === 0 ? 'x' : `(${lin(1, -r2)})`}`;
      const E = rb() ? `\\frac{${num}}{${den}}` : `\\frac{3}{${lin(1, -r1)}}+\\frac{${num}}{${den}}`;
      return {
        type: 'set', signed: true, answer: [r1, r2], placeholder: T`napr. -2; 3`,
        q: T`Pre ktoré reálne čísla $x$ nemá výraz $${E}$ zmysel? Zadaj všetky také čísla oddelené bodkočiarkou.`,
        solution: T`Výraz nemá zmysel tam, kde je niektorý menovateľ nulový. $${den}=${fac.replace(')(', ')\\cdot(')}$, súčin je nulový pre $x=${r1}$ alebo $x=${r2}$.`,
        hint: T`Menovateľ rozlož na súčin. Súčin je nulový práve vtedy, keď je nulový niektorý činiteľ.`
      };
    }
    const a = rnd(2, 7), k = rnd(2, 6);
    const xm = lin(1, -a), xp = lin(1, a);
    const CANCEL = T`Krátiť sa dá len spoločný činiteľ celého čitateľa a celého menovateľa, nie jednotlivé sčítance. Oba najprv rozlož na súčin.`;
    const V = pick([
      () => [`\\frac{${poly([1, 0, -a * a])}}{${poly([1, a, 0])}}`, `\\frac{${xm}}{x}`,
        [`\\frac{${xp}}{x}`, `\\frac{${xm}}{${a}}`, `-\\frac{${a}}{x}`],
        T`$\\frac{(${xm})(${xp})}{x(${xp})}=\\frac{${xm}}{x}$ pre $x\\neq 0$, $x\\neq ${-a}$`,
        [T`Vykrátil si nesprávny činiteľ. Rozlož čitateľ aj menovateľ a nájdi činiteľ, ktorý majú spoločný.`, CANCEL, CANCEL]],
      () => [`\\frac{${poly([1, 2 * a, a * a])}}{${poly([1, 0, -a * a])}}`, `\\frac{${xp}}{${xm}}`,
        [`\\frac{${xm}}{${xp}}`, `\\frac{1}{${xm}}`, `\\frac{${xp}}{x}`],
        T`$\\frac{(${xp})^2}{(${xm})(${xp})}=\\frac{${xp}}{${xm}}$ pre $x\\neq \\pm ${a}$`,
        [T`Výsledok je obrátený. Skontroluj, ktorý činiteľ ostal v čitateli a ktorý v menovateli.`,
          T`Čitateľ je druhá mocnina dvojčlena, po vykrátení jedného činiteľa v ňom jeden ostane.`, CANCEL]],
      () => [`\\frac{${lin(k, -k * a)}}{${poly([1, -2 * a, a * a])}}`, `\\frac{${k}}{${xm}}`,
        [`\\frac{${k}}{${xp}}`, `\\frac{${k}x}{${xm}}`, `${k}(${xm})`],
        T`$\\frac{${k}(${xm})}{(${xm})^2}=\\frac{${k}}{${xm}}$ pre $x\\neq ${a}$`,
        [T`Menovateľ je druhá mocnina rozdielu, nie súčin súčtu a rozdielu.`,
          T`Z čitateľa vyberieš pred zátvorku len číslo, po vykrátení v ňom $x$ neostane.`,
          T`Výsledok je zlomok: v menovateli ostane jeden činiteľ.`]],
      () => [`\\frac{${poly([1, -a, 0])}}{${lin(a, -a * a)}}`, `\\frac{x}{${a}}`,
        [`-\\frac{x}{${a}}`, `\\frac{${xm}}{${a}}`, 'x'],
        T`$\\frac{x(${xm})}{${a}(${xm})}=\\frac{x}{${a}}$ pre $x\\neq ${a}$`,
        [T`Pozor na znamienko: čitateľ aj menovateľ obsahujú ten istý činiteľ, nie opačný.`, CANCEL,
          T`Z menovateľa po vykrátení ostane číslo.`]]
    ])();
    const [E, ans, wrong, why, whyNot] = V;
    return hintsFor({
      type: 'choice', answer: `$${ans}$`, options: shuffle([`$${ans}$`, ...wrong.map((w) => `$${w}$`)]),
      q: T`Zjednoduš výraz $${E}$ (pre všetky $x$, pre ktoré má zmysel).`,
      solution: T`Čitateľ aj menovateľ rozložíme na súčin a vykrátime spoločného činiteľa: ${why}.`,
      hint: T`Krátiť sa dá len spoločný činiteľ súčinu. Rozlož čitateľ aj menovateľ (vyberanie, vzorce).`
    }, wrong.map((w, i) => [`$${w}$`, whyNot[i]]));
  });

  /* ========== 90 Mnohočleny a rozklad na súčin ========== */

  lesson({
    id: 's1-mnohoclen', order: 90, topics: ['vyrazy'], title: 'Mnohočleny a rozklad na súčin',
    summary: 'Stupeň mnohočlena, vyberanie, zoskupovanie, rozklad trojčlena a veta o zvyšku.',
    theory: [
      `<p><strong>Mnohočlen</strong> (polynóm) stupňa $n$ v premennej $x$ je výraz $a_nx^n+a_{n-1}x^{n-1}+\\dots+a_1x+a_0$, kde $a_n\\neq 0$.
       Pri sčítaní spájame členy s rovnakou mocninou, pri násobení násobíme každý člen s každým; stupeň súčinu je súčet stupňov.
       Číslo $c$ je <strong>koreň</strong> mnohočlena $p$, ak $p(c)=0$.</p>`,
      `<p><strong>Rozklad na súčin</strong> robíme týmito krokmi:</p>
       <ol><li><em>vyberanie pred zátvorku:</em> $4x^3-6x^2=2x^2(2x-3)$,</li>
       <li><em>vzorce:</em> $9x^2-25=(3x-5)(3x+5)$, $\\ x^3-8=(x-2)(x^2+2x+4)$,</li>
       <li><em>zoskupovanie:</em> $x^3+2x^2-9x-18=x^2(x+2)-9(x+2)=(x+2)(x-3)(x+3)$,</li>
       <li><em>kvadratický trojčlen:</em> $x^2+px+q=(x-x_1)(x-x_2)$, kde $x_1+x_2=-p$ a $x_1x_2=q$.</li></ol>`,
      `<p><strong>Veta o zvyšku:</strong> zvyšok po delení mnohočlena $p(x)$ dvojčlenom $(x-c)$ je $p(c)$. Ak $p(c)=0$, je $p(x)=(x-c)\\cdot q(x)$ – koreň nám dáva činiteľa rozkladu.
       Hodnotu $p(c)$ rýchlo vypočítame <strong>Hornerovou schémou</strong>: začneme vedúcim koeficientom a opakovane násobíme číslom $c$ a pripočítame ďalší koeficient.</p>`
    ],
    examples: [
      { task: 'Rozlož na súčin $x^3-4x^2-9x+36$.',
        steps: ['Zoskupíme: $x^2(x-4)-9(x-4)$.',
                'Vyberieme $(x-4)$: $(x-4)(x^2-9)$.',
                '<strong>$(x-4)(x-3)(x+3)$</strong>, korene sú $4$, $3$, $-3$.'] },
      { task: 'Rozlož na súčin $2x^2-8x-10$.',
        steps: ['Vyberieme 2: $2(x^2-4x-5)$.',
                'Hľadáme čísla so súčtom $4$ a súčinom $-5$: sú to $5$ a $-1$.',
                '<strong>$2(x-5)(x+1)$</strong>'] }
    ]
  });

  gen('s1-mnohoclen', () => {
    const t = Math.random();
    if (t < 0.28) {
      let r1, r2;
      do { r1 = rnd(-7, 7); r2 = rnd(-7, 7); } while (r1 === r2 || r1 * r2 === 0 || r1 + r2 === 0);
      const k = pick([1, 1, 1, 2, 3, -1]);
      const P = poly([k, -k * (r1 + r2), k * r1 * r2]);
      const kT = k === 1 ? '' : k === -1 ? '-' : String(k);
      return {
        steps: [
          { q: T`${k === 1 ? '' : T`Najprv vyber $${k}$ pred zátvorku. `}Aký súčet $x_1+x_2$ musia mať hľadané čísla?`, answer: r1 + r2, signed: true },
          { q: T`Aký súčin $x_1\\cdot x_2$ musia mať?`, answer: r1 * r2, signed: true },
          { q: T`Ktoré dve čísla to sú?`, answer: [r1, r2], type: 'set', signed: true, placeholder: T`napr. -2; 5` }
        ],
        type: 'set', signed: true, answer: [r1, r2], placeholder: T`napr. -2; 5`,
        q: T`Rozlož trojčlen $${P}$ na súčin v tvare $${kT}(x-x_1)(x-x_2)$. Zadaj čísla $x_1; x_2$.`,
        solution: T`${k === 1 ? '' : T`Vyberieme $${k}$: $${kT}(${poly([1, -(r1 + r2), r1 * r2])})$. `}Hľadáme čísla so súčtom $${r1 + r2}$ a súčinom $${r1 * r2}$: sú to $${r1}$ a $${r2}$. `
          + T`Teda $${P}=${kT}(${lin(1, -r1)})(${lin(1, -r2)})$.`,
        hint: T`Ak $x^2+px+q=(x-x_1)(x-x_2)$, potom $x_1+x_2=-p$ a $x_1\\cdot x_2=q$.`
      };
    }
    if (t < 0.52) {
      let a, b;
      do { a = nz(-6, 6); b = rnd(1, 6); } while (Math.abs(a) === b);
      const P = poly([1, -a, -b * b, a * b * b]);
      return withMist({
        steps: [
          { q: T`Zoskupením prvých dvoch a posledných dvoch členov dostaneš spoločný činiteľ $(x-c)$. Aké je $c$?`, answer: a, signed: true },
          { q: T`Druhý činiteľ je $x^2-${b * b}$. Aké má korene?`, answer: [b, -b], type: 'set', signed: true, placeholder: T`napr. -2; 5` },
          { q: T`Zadaj všetky korene mnohočlena.`, answer: [a, b, -b], type: 'set', signed: true, placeholder: T`napr. -3; 2; 3` }
        ],
        type: 'set', signed: true, answer: [a, b, -b], placeholder: T`napr. -3; 2; 3`,
        q: T`Rozlož mnohočlen $p(x)=${P}$ na súčin lineárnych činiteľov a zadaj všetky jeho korene oddelené bodkočiarkou.`,
        solution: T`Zoskupíme: $p(x)=x^2(${lin(1, -a)})${mul(-b * b)}(${lin(1, -a)})=(${lin(1, -a)})(x^2-${b * b})=(${lin(1, -a)})(${lin(1, -b)})(${lin(1, b)})$. Korene sú $${a}$, $${b}$ a $${-b}$.`,
        hint: T`Zoskup prvé dva a posledné dva členy a z každej dvojice vyber, čo sa dá. Potom použi $a^2-b^2=(a-b)(a+b)$.`
      }, [
        { value: [-a, b, -b], msg: T`Pozor na znamienko: činiteľ $(x-c)$ je nulový pre $x=c$, nie pre $x=-c$.` },
        b > 1 && { value: [a, b * b, -b * b], msg: T`Korene činiteľa $x^2-${b * b}$ sú čísla, ktorých druhá mocnina je ${b * b}.` }
      ]);
    }
    if (t < 0.76) {
      const c3 = nz(-3, 3), c2 = rnd(-6, 6), c1 = rnd(-6, 6), c0 = rnd(-6, 6), c = nz(-3, 3);
      const b2 = c3 * c + c2, b1 = b2 * c + c1, r = b1 * c + c0;
      const pm = c3 * (-c) ** 3 + c2 * c * c - c1 * c + c0;
      return withMist({
        steps: [
          { q: T`Hornerova schéma pre $c=${c}$ začína číslom $${c3}$. Aké je druhé číslo (koeficient vynásob $c$ a pripočítaj ďalší)?`, answer: b2, signed: true },
          { q: T`Aké je tretie číslo?`, answer: b1, signed: true },
          { q: T`Aké je posledné číslo, teda zvyšok?`, answer: r, signed: true }
        ],
        signed: true, answer: r,
        q: T`Aký zvyšok dostaneme pri delení mnohočlena $p(x)=${poly([c3, c2, c1, c0])}$ dvojčlenom $(${lin(1, -c)})$?`,
        solution: T`Podľa vety o zvyšku je zvyšok $p(${c})$. Hornerovou schémou: $${c3}$, $${c3}\\cdot ${par(c)}${term(c2)}=${b2}$, $${b2}\\cdot ${par(c)}${term(c1)}=${b1}$, $${b1}\\cdot ${par(c)}${term(c0)}=${r}$. Zvyšok je $${r}$.`,
        hint: T`Zvyšok po delení $(x-c)$ je hodnota $p(c)$. Pozor na znamienko: pri $(x+2)$ je $c=-2$.`
      }, [
        { value: pm, msg: T`Zvyšok po delení $(x-c)$ je $p(c)$. Dvojčlen $(${lin(1, -c)})$ má tvar $x-c$ pre $c=${c}$, pozor na znamienko.` }
      ]);
    }
    const V = pick([
      () => {
        const a = rnd(1, 5), plus = rb(), s = plus ? '+' : '-', o = plus ? '-' : '+';
        const P = poly([1, 0, 0, plus ? a ** 3 : -(a ** 3)]);
        const L = `(${lin(1, plus ? a : -a)})`;
        return [P, `${L}(${poly([1, plus ? -a : a, a * a])})`,
          [`${L}(${poly([1, plus ? a : -a, a * a])})`, `${L}^3`, `${L}(${poly([1, 0, a * a])})`],
          T`Podľa vzorca $a^3${s}b^3=(a${s}b)(a^2${o}ab+b^2)$ pre $a=x$, $b=${a}$.`,
          [T`Pozor na znamienko stredného člena v druhej zátvorke: je opačné ako znamienko v prvej zátvorke.`,
            T`Tretia mocnina dvojčlena má aj stredné členy $3a^2b$ a $3ab^2$, zadaný výraz má len dva členy.`,
            T`V druhej zátvorke chýba stredný člen $ab$. Over roznásobením.`]];
      },
      () => {
        let k, m;
        do { k = rnd(1, 5); m = rnd(1, 9); } while (gcd(k, m) !== 1 || k === m);
        const kx = k === 1 ? 'x' : `${k}x`;
        return [poly([k * k, 0, -m * m]), `(${kx}-${m})(${kx}+${m})`,
          [`(${kx}-${m})^2`, `(${kx}+${m})^2`, `(${m}-${kx})(${m}+${kx})`],
          T`Je to rozdiel štvorcov $(${kx})^2-${m}^2$, teda $(${kx}-${m})(${kx}+${m})$.`,
          [T`Druhá mocnina dvojčlena má aj stredný člen $2ab$, zadaný výraz ho nemá.`,
            T`Druhá mocnina dvojčlena má aj stredný člen $2ab$, zadaný výraz ho nemá.`,
            T`Roznásob a porovnaj: dostaneš opačné znamienka, ako má zadaný výraz.`]];
      },
      () => {
        let k, m;
        do { k = rnd(1, 5); m = nz(-7, 7); } while (gcd(k, Math.abs(m)) !== 1 || k === Math.abs(m));
        return [poly([k * k, 2 * k * m, m * m]), `(${lin(k, m)})^2`,
          [`(${lin(k, -m)})^2`, `(${lin(k, m)})(${lin(k, -m)})`, `(${lin(Math.abs(m), m > 0 ? k : -k)})^2`],
          T`Prvý a posledný člen sú štvorce $(${k === 1 ? 'x' : `${k}x`})^2$ a $${Math.abs(m)}^2$, prostredný člen je ich dvojnásobný súčin, teda ide o $(a${m > 0 ? '+' : '-'}b)^2$.`,
          [T`Pozri sa na znamienko stredného člena, to rozhoduje o znamienku v zátvorke.`,
            T`To je rozklad rozdielu štvorcov. Zadaný výraz má tri členy.`,
            T`Zamenil si koeficient pri $x$ a absolútny člen. Over roznásobením.`]];
      }
    ])();
    const [P, ans, wrong, why, whyNot] = V;
    return hintsFor({
      type: 'choice', answer: `$${ans}$`, options: shuffle([`$${ans}$`, ...wrong.map((w) => `$${w}$`)]),
      q: T`Ktorý zápis je rozkladom výrazu $${P}$ na súčin?`,
      solution: T`${why} Správne: $${P}=${ans}$. Overiť to môžeš roznásobením.`,
      hint: T`Zisti, či ide o rozdiel štvorcov, štvorec dvojčlena alebo súčet/rozdiel tretích mocnín. Každú možnosť môžeš overiť roznásobením.`
    }, wrong.map((w, i) => [`$${w}$`, whyNot[i]]));
  });

  /* ========== 120 Rovnice s neznámou v menovateli ========== */

  lesson({
    id: 's1-menovatel', order: 120, topics: ['rovnice'], title: 'Rovnice s neznámou v menovateli',
    summary: 'Podmienky, násobenie spoločným menovateľom a kontrola koreňov.',
    theory: [
      `<p>Ak je neznáma v menovateli, rovnica má zmysel len pre tie $x$, pre ktoré sú všetky menovatele nenulové. Tieto <strong>podmienky</strong> určíme na začiatku,
       napr. pri $\\frac{3}{x-2}=\\frac{1}{x+1}$ musí byť $x\\neq 2$ a $x\\neq -1$.</p>`,
      `<p>Rovnicu potom vynásobíme <strong>spoločným menovateľom</strong> (najlepšie najmenším). Táto úprava je ekvivalentná len na množine, kde je menovateľ nenulový –
       preto môže vzniknúť „koreň“, ktorý podmienky nespĺňa. Taký koreň <strong>nie je riešením</strong> a ak iný nie je, rovnica riešenie nemá.</p>`,
      `<p>Postup: 1. podmienky, 2. vynásobenie spoločným menovateľom, 3. vyriešenie vzniknutej rovnice, 4. porovnanie s podmienkami (prípadne skúška dosadením).
       Pri menovateľoch ako $x^2-9$ ich najprv rozložíme: $x^2-9=(x-3)(x+3)$ – spoločný menovateľ je potom zrejmý.</p>`
    ],
    examples: [
      { task: 'Vyrieš rovnicu $\\frac{x+3}{x-1}=2$.',
        steps: ['Podmienka: $x\\neq 1$.',
                'Vynásobíme $(x-1)$: $x+3=2x-2$.',
                '$x=5$, podmienku spĺňa.',
                'Skúška: $\\frac{8}{4}=2$ ✓ <strong>$x=5$</strong>'] },
      { task: 'Vyrieš rovnicu $\\frac{1}{x-2}+\\frac{2}{x+2}=\\frac{4}{x^2-4}$.',
        steps: ['$x^2-4=(x-2)(x+2)$, podmienky $x\\neq 2$, $x\\neq -2$.',
                'Vynásobíme $(x-2)(x+2)$: $(x+2)+2(x-2)=4$.',
                '$3x-2=4$, teda $x=2$.',
                'Číslo 2 nespĺňa podmienku, preto <strong>rovnica nemá riešenie</strong>.'] }
    ]
  });

  gen('s1-menovatel', () => {
    const t = Math.random();
    if (t < 0.28) {
      let x0, c, a, k, b;
      do { x0 = rnd(-8, 8); c = nz(-6, 6); a = pick([1, 2, 3, -1, -2]); k = nz(-5, 5); b = k * (x0 - c) - a * x0; } while (x0 === c || a === k);
      return withMist({
        steps: [
          { q: T`Pre ktoré číslo $x$ nemá rovnica zmysel (podmienka)?`, answer: c, signed: true },
          { q: T`Vynásob obe strany menovateľom $(${lin(1, -c)})$. Pravú stranu zapíš v tvare $px+q$: zadaj $p; q$.`, answer: [k, -k * c], type: 'tuple', signed: true, placeholder: 'p; q' },
          { q: T`Vyrieš vzniknutú lineárnu rovnicu. Aké je $x$?`, answer: x0, signed: true }
        ],
        signed: true, answer: x0,
        q: T`Vyrieš rovnicu $\\frac{${lin(a, b)}}{${lin(1, -c)}}=${k}$.`,
        solution: T`Podmienka $x\\neq ${c}$. Vynásobíme $(${lin(1, -c)})$: $${lin(a, b)}=${lin(k, -k * c)}$, teda ${solveX(a - k, -k * c - b, x0)}. Podmienku spĺňa.`,
        hint: T`Napíš podmienku a obe strany vynásob menovateľom.`
      }, [
        { value: (-c - b) / (a - k), msg: T`Číslom $${k}$ vynásob celý menovateľ $(${lin(1, -c)})$, teda aj jeho druhý člen.` }
      ]);
    }
    if (t < 0.52) {
      let x0, p, q, a, b;
      do { x0 = rnd(-8, 8); p = rnd(-6, 6); q = rnd(-6, 6); } while (x0 === p || x0 === q || p === q);
      [a, b] = [x0 - p, x0 - q];
      const g = gcd(a, b);
      a /= g; b /= g;
      if (a < 0 && b < 0) { a = -a; b = -b; }
      return withMist({
        steps: [
          { q: T`Vynásob „do kríža“ a členy s $x$ daj naľavo, čísla napravo. Aký koeficient bude pri $x$?`, answer: a - b, signed: true },
          { q: T`Aké číslo bude na pravej strane?`, answer: a * q - b * p, signed: true },
          { q: T`Aké je $x$? Over aj podmienky.`, answer: x0, signed: true }
        ],
        signed: true, answer: x0,
        q: T`Vyrieš rovnicu $\\frac{${a}}{${lin(1, -p)}}=\\frac{${b}}{${lin(1, -q)}}$.`,
        solution: T`Podmienky $x\\neq ${p}$, $x\\neq ${q}$. Vynásobíme oboma menovateľmi: $${a}(${lin(1, -q)})=${b}(${lin(1, -p)})$, teda $${lin(a, -a * q)}=${lin(b, -b * p)}$, `
          + T`${solveX(a - b, a * q - b * p, x0)}. Podmienky sú splnené.`,
        hint: T`Rovnosť dvoch zlomkov môžeš „vynásobiť do kríža“: $\\frac{a}{b}=\\frac{c}{d}\\Leftrightarrow ad=bc$ pre $b, d\\neq 0$.`
      }, [
        a !== b && { value: (a * p - b * q) / (a - b), msg: T`Pri násobení „do kríža“ násob čitateľa jedného zlomku menovateľom druhého zlomku, nie svojím vlastným.` }
      ]);
    }
    if (t < 0.76) {
      let a, b, c, m, x0, d;
      const trap = rb();
      do {
        a = rnd(1, 4); m = nz(-4, 4); c = nz(-6, 6); b = rnd(-6, 6); x0 = rnd(-6, 6);
        d = trap ? b + a * c : (a - m) * x0 + b + m * c;
      } while (a === m || x0 === c || x0 === -c || d === 0);
      const NO = T`Rovnica nemá riešenie.`;
      const ans = trap ? NO : `$x=${x0}$`;
      const opts = choose(ans, [NO, `$x=${c}$`, `$x=${-c}$`, `$x=${x0}$`, `$x=${x0 === 0 ? 1 : -x0}$`]);
      return hintsFor({
        type: 'choice', answer: ans, options: opts,
        q: T`Vyrieš rovnicu $\\frac{${lin(a, b)}}{${lin(1, -c)}}=\\frac{${d}}{${lin(1, -c)}}${term(m)}$.`,
        solution: T`Podmienka $x\\neq ${c}$. Vynásobíme $(${lin(1, -c)})$: $${lin(a, b)}=${d}${mul(m)}(${lin(1, -c)})$, teda ${solveX(a - m, d - b - m * c, trap ? c : x0)}. `
          + (trap ? T`Toto číslo však nespĺňa podmienku $x\\neq ${c}$, preto rovnica nemá riešenie.` : T`Podmienku spĺňa, je to riešenie.`),
        hint: T`Nezabudni na podmienku. Koreň, ktorý ju nespĺňa, riešením nie je.`
      }, [
        [`$x=${c}$`, T`Pre $x=${c}$ je menovateľ nulový. Také číslo riešením byť nemôže, porovnaj koreň s podmienkou.`],
        [NO, T`Vypočítaný koreň porovnaj s podmienkou. Ak ju spĺňa, je to riešenie.`]
      ]);
    }
    let a, m, n, x0, k;
    do { a = rnd(1, 6); m = rnd(1, 5); n = rnd(1, 5); x0 = rnd(-8, 8); k = (m + n) * x0 + (m - n) * a; } while (Math.abs(x0) === a || k === 0);
    return withMist({
      steps: [
        { q: T`Spoločný menovateľ je $x^2-${a * a}$. Pre ktoré $x$ nemá rovnica zmysel? Zadaj obe čísla.`, answer: [a, -a], type: 'set', signed: true, placeholder: T`napr. -2; 5` },
        { q: T`Vynásob rovnicu spoločným menovateľom a uprav ľavú stranu na tvar $px+q$. Zadaj $p; q$.`, answer: [m + n, (m - n) * a], type: 'tuple', signed: true, placeholder: 'p; q' },
        { q: T`Aké je $x$?`, answer: x0, signed: true }
      ],
      signed: true, answer: x0,
      q: T`Vyrieš rovnicu $\\frac{${m}}{${lin(1, -a)}}+\\frac{${n}}{${lin(1, a)}}=\\frac{${k}}{x^2-${a * a}}$.`,
      solution: T`$x^2-${a * a}=(${lin(1, -a)})(${lin(1, a)})$, podmienky $x\\neq\\pm ${a}$. Vynásobíme: $${m}(${lin(1, a)})+${n}(${lin(1, -a)})=${k}$, `
        + T`teda $${lin(m + n, (m - n) * a)}=${k}$ a $x=${x0}$. Podmienky sú splnené.`,
      hint: T`Rozlož $x^2-a^2=(x-a)(x+a)$; to je spoločný menovateľ všetkých zlomkov.`
    }, [
      { value: (k + (m - n) * a) / (m + n), msg: T`Každý čitateľ vynásob tým činiteľom, ktorý jeho menovateľu chýba do spoločného menovateľa – nie jeho vlastným menovateľom.` }
    ]);
  });

  /* ========== 130 Nerovnice ========== */

  lesson({
    id: 's1-nerovnice', order: 130, topics: ['nerovnice'], title: 'Lineárne nerovnice, súčinový a podielový tvar',
    summary: 'Ekvivalentné úpravy nerovníc, nulové body a tabuľka znamienok.',
    theory: [
      `<p>Nerovnice riešime podobne ako rovnice, s jedným rozdielom: pri <strong>násobení alebo delení záporným číslom sa znak nerovnosti obráti</strong>.
       Napríklad $-3x+2&lt;8 \\Leftrightarrow -3x&lt;6 \\Leftrightarrow x&gt;-2$, teda $x\\in(-2; \\infty)$. Riešenie sústavy nerovníc je <em>prienik</em> riešení jednotlivých nerovníc.</p>`,
      `<p><strong>Súčinový tvar</strong>, napr. $(x+2)(x-3)\\le 0$: súčin je záporný, ak majú činitele opačné znamienka. Určíme <strong>nulové body</strong> činiteľov ($-2$ a $3$),
       ktoré rozdelia os na intervaly. Na každom z nich má každý činiteľ stále znamienko, preto ho stačí zistiť dosadením jedného čísla.</p>`,
      { fig: 's1-znamienka', caption: 'Tabuľka znamienok pre $\\frac{x+2}{x-3}$. Podiel je záporný na $(-2; 3)$. Riešením $\\frac{x+2}{x-3}\\le 0$ je $\\langle -2; 3)$: bod $-2$ patrí (podiel je 0), bod $3$ nie (delenie nulou).' },
      `<p><strong>Podielový tvar</strong> $\\frac{x-a}{x-b}$ má rovnaké znamienka ako súčin $(x-a)(x-b)$, ale <strong>nulový bod menovateľa do riešenia nikdy nepatrí</strong>.
       Nerovnicu s neznámou v menovateli nikdy nenásobíme menovateľom (nepoznáme jeho znamienko) – prevedieme ju na tvar „výraz porovnaný s nulou“.</p>`
    ],
    examples: [
      { task: 'Vyrieš nerovnicu $2(x-3)-5\\ge 4x+1$.',
        steps: ['$2x-11\\ge 4x+1$.',
                '$-2x\\ge 12$. Delíme $-2$, znak sa obráti: $x\\le -6$.',
                '<strong>$x\\in(-\\infty; -6\\rangle$</strong>'] },
      { task: 'Vyrieš nerovnicu $\\frac{x+2}{3-x}\\ge 0$.',
        steps: ['Nulové body: $-2$ (čitateľ), $3$ (menovateľ, $x\\neq 3$).',
                'Na $(-\\infty; -2)$: $\\frac{-}{+}&lt;0$; na $(-2; 3)$: $\\frac{+}{+}&gt;0$; na $(3; \\infty)$: $\\frac{+}{-}&lt;0$.',
                'Pridáme bod $-2$ (podiel je 0), bod $3$ nie.',
                '<strong>$x\\in\\langle -2; 3)$</strong>'] }
    ]
  });

  // analýza znamienok pre výraz f s dvoma nulovými bodmi z0 &lt; z1; numZeros = body, kde je čitateľ nulový
  const signSolve = (f, z0, z1, numZeros, rel) => {
    const regions = [[-Infinity, z0], [z0, z1], [z1, Infinity]];
    const tests = [z0 - 1, (z0 + z1) / 2, z1 + 1];
    const strictSel = tests.map((x) => holds(f(x), rel === 'le' ? 'lt' : rel === 'ge' ? 'gt' : rel));
    const strict = rel === 'lt' || rel === 'gt';
    const build = (sel, closed) => regions.filter((_, i) => sel[i]).map(([a, b]) => ({ a, b, L: closed(a), R: closed(b) }));
    const ok = (v) => !strict && numZeros.includes(v);
    const all = (v) => Number.isFinite(v), none = () => false;
    const neg = strictSel.map((s) => !s);
    const ans = optT(build(strictSel, ok));
    const cands = [build(strictSel, all), build(strictSel, none), build(neg, ok), build(neg, all), build(neg, none)].map(optT);
    const signs = tests.map((x) => (f(x) > 0 ? '+' : '-'));
    return { ans, cands, signs, regions };
  };

  gen('s1-nerovnice', () => {
    const t = Math.random();
    if (t < 0.28) {
      let a, c, x0, b, d, lhs, sol1;
      if (rb()) {
        do { a = nz(-5, 5); c = nz(-5, 5); } while (a === c);
        x0 = rnd(-6, 6); b = rnd(-9, 9); d = (a - c) * x0 + b;
        lhs = lin(a, b);
        sol1 = '';
      } else {
        do { a = pick([-4, -3, -2, 2, 3, 4]); c = nz(-5, 5); } while (a === c);
        const e = nz(-5, 5);
        x0 = rnd(-6, 6); b = a * e; d = (a - c) * x0 + b;
        lhs = `${a}(${lin(1, e)})`;
        sol1 = T`Roznásobíme: $${lin(a, b)} `;
      }
      const rel = pick(['lt', 'le', 'gt', 'ge']), k = a - c, rel2 = k < 0 ? FLIP[rel] : rel;
      const ray = (r) => [r === 'lt' || r === 'le' ? { a: -Infinity, b: x0, R: r === 'le' } : { a: x0, b: Infinity, L: r === 'ge' }];
      const ans = optT(ray(rel2));
      const STRICT = { lt: 'le', le: 'lt', gt: 'ge', ge: 'gt' };
      const opts = shuffle(['lt', 'le', 'gt', 'ge'].map((r) => optT(ray(r))));
      return hintsFor({
        steps: [
          { q: T`Členy s $x$ preveď doľava, čísla doprava. Aký koeficient bude pri $x$?`, answer: k, signed: true },
          { q: T`Aké číslo bude na pravej strane?`, answer: d - b, signed: true },
          { q: T`Vydeľ koeficientom pri $x$ (pozor na znamienko). Aké je riešenie?`, type: 'choice', options: opts, answer: ans }
        ],
        type: 'choice', answer: ans, options: opts,
        q: T`Vyrieš nerovnicu $${lhs} ${REL[rel]} ${lin(c, d)}$ v $\\mathbb{R}$.`,
        solution: T`${sol1 ? sol1 + `${REL[rel]} ${lin(c, d)}$. ` : ''}Členy s $x$ prevedieme doľava, čísla doprava: $${lin(k, 0)} ${REL[rel]} ${d - b}$. `
          + (k === 1 ? '' : k < 0 ? T`Delíme záporným číslom $${k}$, znak nerovnosti sa obráti: ` : T`Delíme číslom $${k}$: `)
          + T`$x ${REL[rel2]} ${x0}$, teda $x\\in${setT(ray(rel2))}$.`,
        hint: T`Pri delení alebo násobení záporným číslom obráť znak nerovnosti. Ostrá nerovnosť znamená okrúhlu zátvorku.`
      }, [
        [optT(ray(k < 0 ? rel : FLIP[rel])), k < 0 ? T`Delil si záporným číslom $${k}$, vtedy sa znak nerovnosti obráti.` : T`Delíš kladným číslom, znak nerovnosti sa preto nemení.`],
        [optT(ray(STRICT[rel2])), T`Skontroluj krajný bod: pri ostrej nerovnosti do riešenia nepatrí (okrúhla zátvorka), pri neostrej patrí.`]
      ]);
    }
    if (t < 0.52) {
      let p, q;
      do { p = rnd(-6, 6); q = rnd(-6, 6); } while (p >= q);
      const flip = rb() && p !== 0;
      const rel = pick(['lt', 'le', 'gt', 'ge']);
      const f = (x) => (flip ? (p - x) : (x - p)) * (x - q);
      const F1 = flip ? `(${p} - x)` : fac1(p);
      const r = signSolve(f, p, q, [p, q], rel);
      const opts = choose(r.ans, r.cands);
      return hintsFor({
        steps: [
          { q: T`Aké sú nulové body činiteľov? Zadaj ich oddelené bodkočiarkou.`, answer: [p, q], type: 'set', signed: true, placeholder: T`napr. -2; 5` },
          { q: T`Urči znamienko súčinu na každom z troch intervalov a vyber riešenie.`, type: 'choice', options: opts, answer: r.ans }
        ],
        type: 'choice', answer: r.ans, options: opts,
        q: T`Vyrieš nerovnicu $${F1}${fac1(q)} ${REL[rel]} 0$.`,
        solution: T`Nulové body sú $${p}$ a $${q}$. Na intervaloch $(-\\infty; ${p})$, $(${p}; ${q})$, $(${q}; \\infty)$ má súčin postupne znamienka $${r.signs.join('$, $')}$. `
          + T`${rel === 'le' || rel === 'ge' ? T`Nulové body pridáme, lebo v nich je súčin rovný 0. ` : T`Nulové body nepatria, nerovnosť je ostrá. `}Riešenie: ${r.ans}.`,
        hint: T`Nájdi nulové body oboch činiteľov a v každom z troch intervalov urči znamienko súčinu (dosaď ľubovoľné číslo).`
      }, [
        ...r.cands.slice(0, 2).map((o) => [o, T`Intervaly máš správne, skontroluj krajné body: nulové body patria do riešenia len pri neostrej nerovnosti.`]),
        ...r.cands.slice(2).map((o) => [o, T`Vybral si intervaly s opačným znamienkom súčinu. Over znamienko dosadením jedného čísla z každého intervalu.`])
      ]);
    }
    if (t < 0.78) {
      let p, q;
      do { p = rnd(-6, 6); q = rnd(-6, 6); } while (p === q);
      const flip = rb() && p !== 0;
      const rel = pick(['lt', 'le', 'gt', 'ge']);
      const f = (x) => (flip ? (p - x) : (x - p)) / (x - q);
      const lo = Math.min(p, q), hi = Math.max(p, q);
      const r = signSolve(f, lo, hi, [p], rel);
      const opts = choose(r.ans, r.cands);
      return hintsFor({
        steps: [
          { q: T`Aké sú nulové body čitateľa a menovateľa? Zadaj ich oddelené bodkočiarkou.`, answer: [p, q], type: 'set', signed: true, placeholder: T`napr. -2; 5` },
          { q: T`Urči znamienko podielu na každom z troch intervalov a vyber riešenie.`, type: 'choice', options: opts, answer: r.ans }
        ],
        type: 'choice', answer: r.ans, options: opts,
        q: T`Vyrieš nerovnicu $\\frac{${flip ? `${p} - x` : lin(1, -p)}}{${lin(1, -q)}} ${REL[rel]} 0$.`,
        solution: T`Nulový bod čitateľa je $${p}$, menovateľa $${q}$ (podmienka $x\\neq ${q}$). Na intervaloch $(-\\infty; ${lo})$, $(${lo}; ${hi})$, $(${hi}; \\infty)$ má podiel znamienka $${r.signs.join('$, $')}$. `
          + T`${rel === 'le' || rel === 'ge' ? T`Bod $${p}$ pridáme (podiel je 0), bod $${q}$ nie.` : T`Krajné body nepatria.`} Riešenie: ${r.ans}.`,
        hint: T`Podiel má rovnaké znamienko ako súčin čitateľa a menovateľa. Nulový bod menovateľa do riešenia nikdy nepatrí.`
      }, [
        ...r.cands.slice(0, 2).map((o) => [o, T`Intervaly máš správne, skontroluj krajné body: nulový bod menovateľa nepatrí nikdy, nulový bod čitateľa len pri neostrej nerovnosti.`]),
        ...r.cands.slice(2).map((o) => [o, T`Vybral si intervaly s opačným znamienkom podielu. Over znamienko dosadením jedného čísla z každého intervalu.`])
      ]);
    }
    let p, q;
    do { p = rnd(-7, 6); q = rnd(-6, 8); } while (q - p < 2);
    const quot = rb(), rel = pick(['lt', 'le']);
    let a = p, b = q;
    if (quot && rb()) [a, b] = [q, p];
    const f = quot ? (x) => (x === b ? NaN : (x - a) / (x - b)) : (x) => (x - a) * (x - b);
    const ints = range(p - 2, q + 2).filter((x) => !Number.isNaN(f(x)) && holds(f(x), rel));
    const cnt = ints.length;
    const E = quot ? `\\frac{${lin(1, -a)}}{${lin(1, -b)}}` : `${fac1(a)}${fac1(b)}`;
    return withMist({
      answer: cnt,
      q: T`Koľko celých čísel vyhovuje nerovnici $${E} ${REL[rel]} 0$?`,
      solution: T`Výraz je záporný medzi nulovými bodmi $${p}$ a $${q}$. ${rel === 'le' ? (quot ? T`Číslo $${b}$ nepatrí (menovateľ je 0), číslo $${a}$ patrí.` : T`Oba nulové body patria.`) : (quot ? T`Krajné body nepatria (v čísle $${b}$ je menovateľ nulový).` : T`Krajné body nepatria.`)}`
        + (cnt === 1 ? T` Vyhovuje jediné celé číslo $${ints[0]}$.`
          : T` Vyhovujú celé čísla $${cnt <= 4 ? ints.join(', ') : `${ints[0]}, ${ints[1]}, \\dots, ${ints[cnt - 1]}`}$, spolu ${cnt}.`),
      hint: T`Urči interval riešení a potom spočítaj celé čísla v ňom. Dávaj pozor na krajné body.`
    }, [
      { value: q - p + 1, msg: rel === 'lt' ? T`Pri ostrej nerovnosti nulové body do riešenia nepatria, nepočítaj ich.` : T`Nulový bod menovateľa do riešenia nikdy nepatrí, výraz v ňom nie je definovaný.` },
      { value: q - p - 1, msg: quot ? T`Pri neostrej nerovnosti patrí do riešenia aj nulový bod čitateľa, výraz je v ňom rovný nule.` : T`Pri neostrej nerovnosti patria do riešenia aj nulové body, výraz je v nich rovný nule.` }
    ]);
  });

  /* ========== 140 Slovné úlohy riešené rovnicami ========== */

  lesson({
    id: 's1-slovne', order: 140, topics: ['rovnice', 'prakticke'], title: 'Slovné úlohy riešené rovnicami',
    summary: 'Pohyb, spoločná práca, zmesi a vek: od textu k rovnici.',
    theory: [
      `<p>Postup: 1. zvolíme neznámu (čo presne označuje a v akých jednotkách), 2. ostatné veličiny vyjadríme pomocou nej, 3. zostavíme rovnicu
       z údaja, ktorý sme ešte nepoužili, 4. vyriešime, 5. <strong>skúšku robíme podľa textu</strong>, nie dosadením do rovnice, 6. napíšeme odpoveď.</p>`,
      `<p><strong>Pohyb:</strong> $s=v\\cdot t$. Pri pohybe oproti sebe sa rýchlosti sčítajú, pri dobiehaní odčítajú. Loď po prúde ide rýchlosťou $v+w$, proti prúdu $v-w$.<br>
       <strong>Spoločná práca:</strong> kto urobí celú prácu za $t_1$ hodín, urobí za hodinu $\\frac{1}{t_1}$ práce; spolu za čas $t$ platí $\\frac{t}{t_1}+\\frac{t}{t_2}=1$.</p>`,
      `<p><strong>Zmesi:</strong> množstvo čistej látky sa pri miešaní zachováva: $p_1\\,m_1+p_2\\,m_2=p\\,(m_1+m_2)$, kde $p$ je koncentrácia.<br>
       <strong>Vek:</strong> o $n$ rokov sú všetci o $n$ rokov starší – rozdiel vekov sa nemení.</p>`
    ],
    examples: [
      { task: 'Jedno čerpadlo vyprázdni nádrž za 6 hodín, druhé za 3 hodiny. Za koľko hodín ju vyprázdnia spolu?',
        steps: ['Za hodinu urobí prvé $\\frac16$, druhé $\\frac13$ práce.',
                'Rovnica: $\\frac{t}{6}+\\frac{t}{3}=1$, vynásobíme 6: $t+2t=6$.',
                '<strong>$t=2$ hodiny</strong>'] },
      { task: 'Koľko litrov 80 % roztoku treba pridať k 6 litrom 20 % roztoku, aby vznikol 40 % roztok?',
        steps: ['Neznáma $x$ = litre 80 % roztoku.',
                'Čistá látka: $0{,}2\\cdot 6+0{,}8x=0{,}4(6+x)$.',
                '$1{,}2+0{,}8x=2{,}4+0{,}4x$, teda $0{,}4x=1{,}2$.',
                '<strong>$x=3$ litre</strong>'] }
    ]
  });

  const KRAT = { 2: 'dvakrát', 3: 'trikrát', 4: 'štyrikrát', 5: 'päťkrát', 6: 'šesťkrát', 7: 'sedemkrát' };
  const ROK = ['rok', 'roky', 'rokov'];
  const WORK = [[3, 6, 2], [4, 12, 3], [6, 12, 4], [10, 15, 6], [12, 24, 8], [2, 6, 1.5], [5, 20, 4],
    [8, 24, 6], [9, 18, 6], [20, 30, 12], [4, 4, 2], [15, 10, 6], [12, 6, 4], [6, 6, 3], [3, 1.5, 1]];

  gen('s1-slovne', () => {
    const t = Math.random();
    if (t < 0.25) {
      if (rb()) {
        let v1, h, tt, v2;
        do {
          v1 = pick([12, 15, 16, 18, 20, 24]); h = rnd(1, 3); tt = pick([0.5, 1, 1.5, 2]);
          v2 = v1 + v1 * h / tt;
        } while (!Number.isInteger(v2) || v2 > 120);
        return withMist({
          answer: tt,
          q: T`Cyklista vyrazil z mesta rýchlosťou $${v1}\\,\\text{km/h}$. O ${h} ${pl(h, [T`hodinu`, T`hodiny`, T`hodín`])} neskôr za ním po tej istej ceste vyrazil motocyklista rýchlosťou $${v2}\\,\\text{km/h}$. Za koľko hodín od svojho vyrazenia dobehne motocyklista cyklistu?`,
          solution: T`Nech motocyklista ide $t$ hodín, cyklista dovtedy ide $t+${h}$ hodín a prejdú rovnakú dráhu: $${v2}t=${v1}(t+${h})$. Odtiaľ $${v2 - v1}t=${v1 * h}$ a $t=${dc(tt)}\\,\\text{h}$.`,
          hint: T`V okamihu dobehnutia prešli obaja rovnakú dráhu. Cyklista išiel o niekoľko hodín dlhšie.`,
          steps: [
            { q: T`Aký náskok (v km) má cyklista v okamihu, keď motocyklista vyráža?`, answer: v1 * h },
            { q: T`O koľko kilometrov sa náskok zmenší za každú hodinu?`, answer: v2 - v1 },
            { q: T`Za koľko hodín motocyklista dobehne cyklistu?`, answer: tt }
          ]
        }, [
          { value: tt + h, msg: T`Toto je čas cyklistu, ktorý vyrazil skôr. Úloha sa pýta na čas od vyrazenia motocyklistu.` },
          { value: v1 * h / (v1 + v2), msg: T`Pri dobiehaní sa náskok zmenšuje o rozdiel rýchlostí, nie o ich súčet.` }
        ]);
      }
      let v, w, d;
      do { v = rnd(8, 20); w = rnd(1, 5); d = lcm(v + w, v - w) * rnd(1, 3); } while (v - w < 3 || d > 150 || d < 10);
      return withMist({
        steps: [
          { q: T`Aká je rýchlosť lode po prúde, $v+w$ (v km/h)?`, answer: v + w },
          { q: T`Aká je rýchlosť lode proti prúdu, $v-w$ (v km/h)?`, answer: v - w },
          { q: T`Vyrieš sústavu. Zadaj $v; w$.`, answer: [v, w], type: 'tuple', placeholder: 'v; w' }
        ],
        type: 'tuple', answer: [v, w], placeholder: 'v; w',
        q: T`Loď preplávala ${d} km po prúde rieky za ${d / (v + w)} h a späť proti prúdu za ${d / (v - w)} h. Aká je rýchlosť lode v stojatej vode $v$ a rýchlosť prúdu $w$ (v km/h)? Zadaj $v; w$.`,
        solution: T`Po prúde: $v+w=${d}:${d / (v + w)}=${v + w}$, proti prúdu: $v-w=${d}:${d / (v - w)}=${v - w}$. Sčítaním $2v=${2 * v}$, teda $v=${v}\\,\\text{km/h}$ a $w=${w}\\,\\text{km/h}$.`,
        hint: T`Po prúde sa rýchlosti sčítajú ($v+w$), proti prúdu odčítajú ($v-w$). Z dráhy a času vypočítaj obe a vyrieš sústavu.`
      }, [
        { value: [v + w, v - w], msg: T`Toto sú rýchlosti po prúde a proti prúdu. Rýchlosť lode $v$ a prúdu $w$ z nich ešte vypočítaj.` }
      ]);
    }
    if (t < 0.5) {
      const [t1, t2, tt] = pick(WORK);
      if (rb()) {
        return withMist({
          answer: tt, tol: 0.01,
          q: T`Prvé čerpadlo napustí bazén za ${dc(t1).replace('{,}', ',')} h, druhé za ${dc(t2).replace('{,}', ',')} h. Za koľko hodín ho napustia, ak pracujú súčasne?`,
          solution: T`Za hodinu napustí prvé $\\frac{1}{${dc(t1)}}$, druhé $\\frac{1}{${dc(t2)}}$ bazéna. Rovnica $\\frac{t}{${dc(t1)}}+\\frac{t}{${dc(t2)}}=1$ dáva $t=\\frac{${dc(t1)}\\cdot ${dc(t2)}}{${dc(t1)}+${dc(t2)}}=${dc(tt)}\\,\\text{h}$.`,
          hint: T`Vyjadri, akú časť bazéna napustí každé čerpadlo za $t$ hodín. Spolu to musí byť celý bazén, teda 1.`
        }, [
          { value: t1 + t2, msg: T`Keď čerpadlá pracujú spolu, napustia bazén rýchlejšie ako každé samo. Časy sa nesčítavajú.` },
          { value: (t1 + t2) / 2, msg: T`Spoločný čas nie je priemer časov: musí byť kratší ako čas rýchlejšieho čerpadla.` }
        ]);
      }
      return withMist({
        answer: t2, tol: 0.01,
        q: T`Dvaja maliari spolu vymaľujú halu za ${dc(tt).replace('{,}', ',')} h. Prvý by ju sám vymaľoval za ${dc(t1).replace('{,}', ',')} h. Za koľko hodín by ju vymaľoval sám druhý maliar?`,
        solution: T`Nech druhý potrebuje $x$ hodín. Rovnica $\\frac{${dc(tt)}}{${dc(t1)}}+\\frac{${dc(tt)}}{x}=1$, teda $\\frac{${dc(tt)}}{x}=${fTex(Math.round((t1 - tt) * 2), Math.round(t1 * 2))}$ a $x=${dc(t2)}\\,\\text{h}$.`,
        hint: T`Prvý maliar urobí za spoločný čas časť práce $\\frac{t}{t_1}$; zvyšok urobí druhý.`
      }, [
        { value: t1 - tt, msg: T`Časy práce sa neodčítavajú. Vyjadri, akú časť haly vymaľuje prvý maliar za spoločný čas, zvyšok urobí druhý.` }
      ]);
    }
    if (t < 0.75) {
      let p1, p2, p, m1, x;
      do {
        p1 = pick([10, 15, 20, 25, 30]); p2 = pick([50, 60, 70, 80, 90]); p = 5 * rnd(p1 / 5 + 1, p2 / 5 - 1); m1 = rnd(2, 20);
        x = m1 * (p - p1) / (p2 - p);
      } while (!Number.isInteger(x) || x < 1 || x > 40);
      return withMist({
        steps: [
          { q: T`Koľko litrov čistej soli je v ${m1} l ${p1} % roztoku?`, answer: m1 * p1 / 100 },
          { q: T`Zostav rovnicu pre množstvo soli. Koľko litrov ${p2} % roztoku treba pridať?`, answer: x }
        ],
        answer: x,
        q: T`Koľko litrov ${p2} % roztoku soli treba pridať k ${m1} litrom ${p1} % roztoku, aby vznikol ${p} % roztok?`,
        solution: T`Množstvo soli sa zachová: $${dc(p1 / 100)}\\cdot ${m1}+${dc(p2 / 100)}\\,x=${dc(p / 100)}(${m1}+x)$. Upravíme: $${dc((p2 - p) / 100)}\\,x=${dc(m1 * (p - p1) / 100)}$, teda $x=${x}$. Treba pridať ${x} l roztoku.`,
        hint: T`Porovnaj množstvo čistej soli pred zmiešaním a po ňom: $p_1m_1+p_2m_2=p(m_1+m_2)$.`
      }, [
        { value: m1 * (p - p1) / p2, msg: T`Po pridaní roztoku sa zväčší aj celkový objem: výsledný roztok má $${m1}+x$ litrov.` },
        { value: m1, msg: T`Rovnaké množstvo by stačilo, len keby bola výsledná koncentrácia presne v strede medzi ${p1} % a ${p2} %. Zostav rovnicu pre množstvo soli.` }
      ]);
    }
    let s, k, n, m;
    do {
      s = rnd(3, 15); k = rnd(3, 7); n = rnd(2, 20);
      m = (k * s + n) / (s + n);
    } while (!Number.isInteger(m) || m < 2 || m >= k || k * s < 22 || k * s > 55);
    const kid = pick([[T`syn`, T`syna`, T`Otec`, T`otec`], [T`dcéra`, T`dcéry`, T`Mama`, T`mama`]]);
    return withMist({
      steps: [
        { q: T`Vek dieťaťa označ $x$. Z rovnice $${k}x+${n}=${m}(x+${n})$ vypočítaj, aký koeficient bude pri $x$ po prevedení členov s $x$ doľava.`, answer: k - m },
        { q: T`Aké číslo bude na pravej strane?`, answer: n * (m - 1) },
        { q: T`Koľko rokov má dieťa teraz?`, answer: s }
      ],
      answer: s,
      q: T`${kid[2]} je teraz ${T.s(KRAT[k])} ${kid[2] === T`Otec` ? T`starší` : T`staršia`} ako ${kid[0]}. O ${n} ${T.s(pl(n, ROK))} bude ${T.s(KRAT[m])} ${kid[2] === T`Otec` ? T`starší` : T`staršia`}. Koľko rokov má teraz ${kid[0]}?`,
      solution: T`Nech ${kid[0]} má $x$ rokov, ${kid[3]} $${k}x$. O ${n} ${T.s(pl(n, ROK))}: $${k}x+${n}=${m}(x+${n})$, teda ${solveX(k - m, n * (m - 1), s)}. (${kid[2]} má ${k * s} rokov, o ${n} ${T.s(pl(n, ROK))} bude mať ${k * s + n} a ${kid[0]} ${s + n}.)`,
      hint: T`Označ vek dieťaťa $x$. O $n$ rokov budú obaja o $n$ rokov starší.`
    }, [
      { value: m * n / (k - m), msg: T`O ${n} ${T.s(pl(n, ROK))} bude starší aj rodič, nielen dieťa. Číslo ${n} pripočítaj k obom vekom.` },
      { value: k * s, msg: T`Toto je vek rodiča. Úloha sa pýta na vek dieťaťa.` }
    ]);
  });

  /* ========== 150 Geometrické útvary, uhly, trojuholníky a štvoruholníky ========== */

  lesson({
    id: 's1-uhly', order: 150, topics: ['planimetria'], title: 'Uhly, trojuholníky a štvoruholníky',
    summary: 'Základné útvary, dvojice uhlov pri rovnobežkách, súčet uhlov v mnohouholníku.',
    theory: [
      `<p><strong>Základné útvary:</strong> bod, priamka, polpriamka, úsečka, polrovina a uhol (časť roviny ohraničená dvoma polpriamkami so spoločným začiatkom – vrcholom).
       Dve priamky v rovine sú <em>rovnobežné</em> (nemajú spoločný bod alebo splývajú) alebo <em>rôznobežné</em> (jeden spoločný bod); kolmé priamky zvierajú pravý uhol.
       Vzdialenosť bodu od priamky je dĺžka kolmice z bodu na priamku.</p>`,
      `<p><strong>Dvojice uhlov:</strong> <em>vrcholové</em> uhly sú zhodné, <em>susedné</em> uhly majú súčet $180^\\circ$.
       Ak priečka pretína dve <strong>rovnobežky</strong>, sú zhodné aj <em>súhlasné</em> uhly (rovnaká poloha pri oboch priesečníkoch)
       a <em>striedavé</em> uhly (na opačných stranách priečky, jeden pri $p$ a druhý pri $q$).</p>`,
      { fig: 's1-priecka', caption: 'Uhly $\\alpha$ sú navzájom vrcholové, súhlasné a striedavé, preto majú rovnakú veľkosť. Uhol susedný s $\\alpha$ má veľkosť $180^\\circ-\\alpha$.' },
      `<p><strong>Trojuholník:</strong> súčet vnútorných uhlov je $180^\\circ$ (vrcholom vedieme rovnobežku s protiľahlou stranou a použijeme striedavé uhly).
       Vonkajší uhol sa rovná súčtu dvoch vnútorných uhlov pri ostatných vrcholoch. <strong>Trojuholníková nerovnosť:</strong> každá strana je kratšia ako súčet zvyšných dvoch.
       Oproti väčšej strane leží väčší uhol. Súčet vnútorných uhlov $n$-uholníka je $(n-2)\\cdot 180^\\circ$ (rozdelíme ho uhlopriečkami z jedného vrcholu na $n-2$ trojuholníkov).</p>`,
      `<p><strong>Štvoruholníky:</strong> <em>rovnobežník</em> má protiľahlé strany rovnobežné a zhodné, uhlopriečky sa navzájom rozpoľujú a susedné uhly majú súčet $180^\\circ$;
       špeciálne prípady sú <em>obdĺžnik</em>, <em>kosoštvorec</em> (kolmé uhlopriečky) a <em>štvorec</em>. <em>Lichobežník</em> má práve jednu dvojicu rovnobežných strán (základní).</p>`
    ],
    examples: [
      { task: 'V trojuholníku $ABC$ je $\\alpha=48^\\circ$ a vonkajší uhol pri vrchole $B$ má $115^\\circ$. Urči $\\beta$ a $\\gamma$.',
        steps: ['Vnútorný a vonkajší uhol pri $B$ sú susedné: $\\beta=180^\\circ-115^\\circ=65^\\circ$.',
                'Vonkajší uhol = $\\alpha+\\gamma$, teda $\\gamma=115^\\circ-48^\\circ=67^\\circ$.',
                'Kontrola: $48^\\circ+65^\\circ+67^\\circ=180^\\circ$ ✓'] },
      { task: 'Akú veľkosť má vnútorný uhol pravidelného osemuholníka?',
        steps: ['Súčet vnútorných uhlov: $(8-2)\\cdot 180^\\circ=1080^\\circ$.',
                'Všetky uhly sú zhodné: $1080^\\circ:8=135^\\circ$.'] }
    ]
  });

  // dvojica polôh uhlov pri priečke → názov vzťahu (alebo null)
  const pairName = (i, k, j, q) => {
    if (i === j) return (k + 2) % 4 === q ? T`vrcholové` : T`susedné`;
    if (k === q) return T`súhlasné`;
    const [top, bot] = i === 0 ? [k, q] : [q, k];
    return bot === (top + 2) % 4 ? T`striedavé` : null;
  };

  gen('s1-uhly', () => {
    const t = Math.random();
    if (t < 0.27) {
      let v, i, k, j, q;
      do { v = rnd(35, 145); } while (Math.abs(v - 90) < 12);
      do { i = rnd(0, 1); k = rnd(0, 3); j = rnd(0, 1); q = rnd(0, 3); } while (i === j && k === q);
      const theta = k % 2 === 0 ? v : 180 - v;
      const same = (k % 2) === (q % 2), ans = same ? v : 180 - v;
      const pic = transversal(theta, [
        { i, k, label: `${v}°`, cls: 'f-warn' },
        { i: j, k: q, label: 'φ', math: true, cls: 'f-accent', color: 'c-accent' }
      ], 300);
      let why;
      if (i === j) why = T`Uhly sú pri tom istom priesečníku a sú ${same ? T`vrcholové, teda zhodné` : T`susedné, ich súčet je $180^\\circ$`}.`;
      else {
        const nm = pairName(i, k, j, q);
        why = nm ? T`Uhly sú ${nm} pri rovnobežkách, teda zhodné.`
          : T`Uhol súhlasný s $\\varphi$ pri druhom priesečníku je s daným uhlom ${same ? T`vrcholový` : T`susedný`}, preto ${same ? T`sú zhodné` : T`má $\\varphi$ veľkosť $180^\\circ$ mínus daný uhol`}.`;
      }
      return withMist({
        answer: ans,
        q: T`Priamky $p$ a $q$ sú rovnobežné. Urči veľkosť uhla $\\varphi$ v stupňoch. ${pic}`,
        solution: `${why} $\\varphi=${ans}^\\circ$.`,
        hint: T`Vrcholové, súhlasné a striedavé uhly sú zhodné; susedné uhly majú súčet $180^\\circ$.`
      }, [
        { value: 180 - ans, msg: same ? T`Tieto uhly sú zhodné, netreba ich odčítať od $180^\\circ$.` : T`Tieto uhly nie sú zhodné: jeden je ostrý a druhý tupý, spolu majú $180^\\circ$.` }
      ]);
    }
    if (t < 0.45) {
      const NAMES = [T`vrcholové`, T`susedné`, T`súhlasné`, T`striedavé`];
      let i, k, j, q, nm;
      do { i = rnd(0, 1); k = rnd(0, 3); j = rnd(0, 1); q = rnd(0, 3); nm = (i === j && k === q) ? null : pairName(i, k, j, q); } while (!nm);
      let theta;
      do { theta = rnd(40, 140); } while (Math.abs(theta - 90) < 12);
      const pic = transversal(theta, [
        { i, k, label: 'α', math: true, cls: 'f-warn' },
        { i: j, k: q, label: 'β', math: true, cls: 'f-accent', color: 'c-accent' }
      ], 300);
      const why = {
        [T`vrcholové`]: T`majú spoločný vrchol a ich ramená sú opačné polpriamky`,
        [T`susedné`]: T`majú spoločný vrchol aj jedno rameno a zvyšné ramená sú opačné polpriamky`,
        [T`súhlasné`]: T`ležia pri rôznych rovnobežkách v rovnakej polohe vzhľadom na priečku`,
        [T`striedavé`]: T`ležia pri rôznych rovnobežkách na opačných stranách priečky a v opačnej polohe`
      }[nm];
      const [VR, SU, SH, ST] = NAMES;
      const pairs = i === j
        ? [[SH, T`Súhlasné a striedavé uhly ležia pri dvoch rôznych priesečníkoch. Tieto uhly majú spoločný vrchol.`],
          [ST, T`Súhlasné a striedavé uhly ležia pri dvoch rôznych priesečníkoch. Tieto uhly majú spoločný vrchol.`],
          [SU, T`Susedné uhly majú jedno rameno spoločné. Ramená týchto uhlov sú navzájom opačné polpriamky.`],
          [VR, T`Vrcholové uhly ležia oproti sebe a nemajú spoločné rameno. Tieto uhly majú jedno rameno spoločné.`]]
        : [[VR, T`Vrcholové a susedné uhly majú spoločný vrchol. Tieto uhly ležia pri dvoch rôznych priesečníkoch.`],
          [SU, T`Vrcholové a susedné uhly majú spoločný vrchol. Tieto uhly ležia pri dvoch rôznych priesečníkoch.`],
          [ST, T`Striedavé uhly ležia na opačných stranách priečky. Tieto uhly majú pri oboch priesečníkoch rovnakú polohu.`],
          [SH, T`Súhlasné uhly majú pri oboch priesečníkoch rovnakú polohu. Tieto ležia na opačných stranách priečky.`]];
      return hintsFor({
        type: 'choice', options: NAMES, answer: nm,
        q: T`Ako nazývame dvojicu uhlov $\\alpha$ a $\\beta$? ${pic}`,
        solution: T`Uhly $\\alpha$ a $\\beta$ ${why}, sú to uhly <strong>${nm}</strong>.`,
        hint: T`Zisti, či majú uhly spoločný vrchol. Ak nie, porovnaj ich polohu vzhľadom na priečku $t$.`
      }, pairs);
    }
    if (t < 0.72) {
      const k = rnd(0, 3);
      if (k === 0) {
        let a, b;
        do { a = rnd(20, 120); b = rnd(20, 120); } while (a + b > 160);
        return {
          answer: 180 - a - b,
          q: T`V trojuholníku $ABC$ je $\\alpha=${a}^\\circ$ a $\\beta=${b}^\\circ$. Urči veľkosť uhla $\\gamma$ v stupňoch.`,
          solution: `$\\gamma=180^\\circ-${a}^\\circ-${b}^\\circ=${180 - a - b}^\\circ$.`,
          hint: T`Súčet vnútorných uhlov trojuholníka je $180^\\circ$.`
        };
      }
      if (k === 1) {
        let a, b;
        do { a = rnd(20, 110); b = rnd(20, 110); } while (a + b > 160);
        return withMist({
          steps: [
            { q: T`Aký veľký je vnútorný uhol $\\beta$ (susedný s vonkajším uhlom)?`, answer: b },
            { q: T`Aký veľký je uhol $\\gamma$?`, answer: 180 - a - b }
          ],
          answer: 180 - a - b,
          q: T`V trojuholníku $ABC$ je $\\alpha=${a}^\\circ$ a vonkajší uhol pri vrchole $B$ má veľkosť $${180 - b}^\\circ$. Urči veľkosť uhla $\\gamma$ v stupňoch.`,
          solution: T`Vonkajší uhol pri $B$ sa rovná súčtu vnútorných uhlov pri $A$ a $C$: $${180 - b}^\\circ=${a}^\\circ+\\gamma$, teda $\\gamma=${180 - a - b}^\\circ$.`,
          hint: T`Vonkajší uhol trojuholníka sa rovná súčtu dvoch vnútorných uhlov pri zvyšných vrcholoch.`
        }, [
          { value: b - a, msg: T`Daný uhol pri $B$ je vonkajší, nie vnútorný. Vnútorný uhol $\\beta$ je s ním susedný.` },
          { value: 180 - b + a, msg: T`Vonkajší uhol sa rovná súčtu $\\alpha+\\gamma$, preto $\\gamma$ dostaneš odčítaním, nie sčítaním.` }
        ]);
      }
      if (k === 2) {
        if (rb()) {
          const g = 2 * rnd(10, 80);
          return withMist({
            steps: [
              { q: T`Koľko stupňov spolu majú oba uhly pri základni?`, answer: 180 - g },
              { q: T`Aký veľký je jeden uhol pri základni?`, answer: (180 - g) / 2 }
            ],
            answer: (180 - g) / 2,
            q: T`Rovnoramenný trojuholník má pri hlavnom vrchole (medzi ramenami) uhol $${g}^\\circ$. Akú veľkosť má uhol pri základni?`,
            solution: T`Uhly pri základni sú zhodné: $\\frac{180^\\circ-${g}^\\circ}{2}=${(180 - g) / 2}^\\circ$.`,
            hint: T`V rovnoramennom trojuholníku sú uhly pri základni zhodné.`
          }, [
            { value: 180 - g, msg: T`Toto je súčet oboch uhlov pri základni. Uhly sú zhodné, výsledok ešte rozdeľ na polovicu.` }
          ]);
        }
        const a = rnd(20, 85);
        return withMist({
          answer: 180 - 2 * a,
          q: T`Uhol pri základni rovnoramenného trojuholníka má $${a}^\\circ$. Akú veľkosť má uhol pri hlavnom vrchole?`,
          solution: `$180^\\circ-2\\cdot ${a}^\\circ=${180 - 2 * a}^\\circ$.`,
          hint: T`Oba uhly pri základni sú zhodné a spolu s uhlom pri hlavnom vrchole dávajú $180^\\circ$.`
        }, [
          { value: 180 - a, msg: T`Rovnoramenný trojuholník má pri základni dva zhodné uhly, od $180^\\circ$ odčítaj oba.` }
        ]);
      }
      const a = rnd(2, 12), b = rnd(2, 12), mode = rnd(0, 2);
      const c = mode === 0 ? rnd(Math.abs(a - b) + 1, a + b - 1) : mode === 1 ? a + b : a + b + rnd(1, 5);
      const sides = shuffle([a, b, c]).sort((x, y) => x - y);
      const ok = sides[0] + sides[1] > sides[2];
      const YES = T`Áno, existuje.`, NO = T`Nie, neexistuje.`;
      return hintsFor({
        type: 'choice', options: [YES, NO], answer: ok ? YES : NO,
        q: T`Existuje trojuholník so stranami dĺžok ${shuffle(sides).join(' cm, ')} cm?`,
        solution: T`Stačí porovnať najdlhšiu stranu so súčtom zvyšných dvoch: $${sides[0]}+${sides[1]}=${sides[0] + sides[1]}$ ${ok ? '&gt;' : sides[0] + sides[1] === sides[2] ? '=' : '&lt;'} $${sides[2]}$. `
          + (ok ? T`Trojuholníková nerovnosť platí, trojuholník existuje.` : T`Trojuholníková nerovnosť neplatí (musí byť ostrá), trojuholník neexistuje.`),
        hint: T`Trojuholník existuje práve vtedy, keď je najdlhšia strana kratšia ako súčet dvoch kratších.`
      }, ok
        ? [[NO, T`Porovnaj najdlhšiu stranu so súčtom dvoch kratších. Ak je kratšia ako tento súčet, trojuholník existuje.`]]
        : [[YES, sides[0] + sides[1] === sides[2]
          ? T`Súčet dvoch kratších strán sa rovná tretej strane, vrcholy by ležali na jednej priamke. Trojuholníková nerovnosť musí byť ostrá.`
          : T`Porovnaj najdlhšiu stranu so súčtom dvoch kratších strán.`]]);
    }
    const k = rnd(0, 3);
    const REG = [5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36];
    if (k === 0) {
      const n = rnd(5, 14);
      return withMist({
        steps: [
          { q: T`Na koľko trojuholníkov rozdelia ${n}-uholník uhlopriečky z jedného vrcholu?`, answer: n - 2 },
          { q: T`Aký je súčet vnútorných uhlov (v stupňoch)?`, answer: (n - 2) * 180 }
        ],
        answer: (n - 2) * 180,
        q: T`Aký je súčet vnútorných uhlov ${n}-uholníka (v stupňoch)?`,
        solution: T`Uhlopriečky z jedného vrcholu ho rozdelia na $${n}-2=${n - 2}$ trojuholníkov: $${n - 2}\\cdot 180^\\circ=${(n - 2) * 180}^\\circ$.`,
        hint: T`Súčet vnútorných uhlov $n$-uholníka je $(n-2)\\cdot 180^\\circ$.`
      }, [
        { value: n * 180, msg: T`Uhlopriečky z jedného vrcholu rozdelia $n$-uholník na $n-2$ trojuholníkov, nie na $n$.` }
      ]);
    }
    if (k === 1) {
      const n = pick(REG), ang = 180 * (n - 2) / n;
      return withMist({
        steps: [
          { q: T`Aký je súčet vnútorných uhlov (v stupňoch)?`, answer: (n - 2) * 180 },
          { q: T`Aký veľký je jeden vnútorný uhol?`, answer: ang }
        ],
        answer: ang,
        q: T`Akú veľkosť má vnútorný uhol pravidelného ${n}-uholníka (v stupňoch)?`,
        solution: T`Súčet uhlov je $${n - 2}\\cdot 180^\\circ=${(n - 2) * 180}^\\circ$, jeden uhol má $${(n - 2) * 180}^\\circ:${n}=${ang}^\\circ$.`,
        hint: T`Vypočítaj súčet vnútorných uhlov a vydeľ ho počtom uhlov.`
      }, [
        { value: 360 / n, msg: T`Toto je vonkajší uhol pravidelného mnohouholníka. Vnútorný uhol je s ním susedný.` }
      ]);
    }
    if (k === 2) {
      const n = pick(REG), ang = 180 * (n - 2) / n;
      return withMist({
        steps: [
          { q: T`Aký veľký je vonkajší uhol tohto mnohouholníka?`, answer: 180 - ang },
          { q: T`Koľko má mnohouholník vrcholov?`, answer: n }
        ],
        answer: n,
        q: T`Vnútorný uhol pravidelného mnohouholníka má $${ang}^\\circ$. Koľko má tento mnohouholník vrcholov?`,
        solution: T`Vonkajší uhol má $180^\\circ-${ang}^\\circ=${180 - ang}^\\circ$ a súčet vonkajších uhlov konvexného mnohouholníka je $360^\\circ$, preto $n=360:${180 - ang}=${n}$.`,
        hint: T`Rovnica $\\frac{(n-2)\\cdot 180}{n}=\\text{uhol}$, alebo rýchlejšie cez vonkajšie uhly, ktorých súčet je $360^\\circ$.`
      }, [
        { value: 360 / ang, msg: T`Súčet $360^\\circ$ majú vonkajšie uhly, nie vnútorné. Najprv vypočítaj vonkajší uhol.` }
      ]);
    }
    let a;
    do { a = rnd(25, 155); } while (a === 90);
    const nm = pick([T`rovnobežníku`, T`kosoštvorci`]), opp = rb();
    return withMist({
      answer: opp ? a : 180 - a,
      q: T`V ${nm} $ABCD$ má vnútorný uhol pri vrchole $A$ veľkosť $${a}^\\circ$. Akú veľkosť má vnútorný uhol pri vrchole $${opp ? 'C' : 'B'}$?`,
      solution: opp ? T`Uhly pri $A$ a $C$ sú protiľahlé, v rovnobežníku sú zhodné: $${a}^\\circ$.`
        : T`Uhly pri $A$ a $B$ sú susedné uhly rovnobežníka (pri rovnobežkách $AD$ a $BC$), ich súčet je $180^\\circ$: $180^\\circ-${a}^\\circ=${180 - a}^\\circ$.`,
      hint: T`V rovnobežníku sú protiľahlé uhly zhodné a susedné uhly majú súčet $180^\\circ$.`
    }, [
      { value: opp ? 180 - a : a, msg: opp ? T`Vrcholy $A$ a $C$ sú protiľahlé, nie susedné. Protiľahlé uhly rovnobežníka sú zhodné.` : T`Vrcholy $A$ a $B$ sú susedné, nie protiľahlé. Susedné uhly rovnobežníka majú súčet $180^\\circ$.` }
    ]);
  });

  /* ========== 160 Obvod, obsah a Pytagorova veta ========== */

  lesson({
    id: 's1-obsahy', order: 160, topics: ['planimetria'], title: 'Obvod, obsah a Pytagorova veta',
    summary: 'Obsahy mnohouholníkov a častí kruhu, Pytagorova veta a jej obrátenie.',
    theory: [
      `<p><strong>Obsahy:</strong> trojuholník $S=\\frac{a\\cdot v_a}{2}$, rovnobežník $S=a\\cdot v_a$, lichobežník $S=\\frac{(a+c)\\cdot v}{2}$,
       kosoštvorec aj deltoid $S=\\frac{u_1\\cdot u_2}{2}$ (uhlopriečky sú kolmé). Pri trojuholníku so stranami $a, b, c$ možno použiť <em>Herónov vzorec</em>
       $S=\\sqrt{s(s-a)(s-b)(s-c)}$, kde $s=\\frac{a+b+c}{2}$.</p>`,
      `<p><strong>Kruh</strong> s polomerom $r$: obvod $o=2\\pi r$, obsah $S=\\pi r^2$. <strong>Kruhový výsek</strong> so stredovým uhlom $\\alpha$ je $\\frac{\\alpha}{360^\\circ}$ kruhu:
       $S=\\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$ a dĺžka oblúka $l=2\\pi r\\cdot\\frac{\\alpha}{360^\\circ}$. <strong>Medzikružie</strong> má obsah $\\pi(R^2-r^2)$.</p>`,
      `<p><strong>Pytagorova veta:</strong> v pravouhlom trojuholníku s preponou $c$ platí $a^2+b^2=c^2$. Dôkaz: štvorec so stranou $a+b$ rozložíme na štvorec so stranou $c$
       a štyri zhodné pravouhlé trojuholníky: $(a+b)^2=c^2+4\\cdot\\frac{ab}{2}$, odkiaľ $a^2+b^2=c^2$. Platí aj <strong>obrátená veta</strong>: ak $a^2+b^2=c^2$, trojuholník je pravouhlý.
       Užitočné dôsledky: uhlopriečka štvorca $u=a\\sqrt2$, výška rovnostranného trojuholníka $v=\\frac{a\\sqrt3}{2}$.</p>`,
      { fig: 's1-lichobeznik', caption: 'V rovnoramennom lichobežníku odrežeme výškou pravouhlý trojuholník s odvesnami $x=\\frac{a-c}{2}$ a $v$ a preponou $b$, teda $v^2=b^2-x^2$.' }
    ],
    examples: [
      { task: 'Rovnoramenný lichobežník má základne $a=14$ cm, $c=6$ cm a ramená $b=5$ cm. Vypočítaj jeho obsah.',
        steps: ['$x=\\frac{14-6}{2}=4$ cm.',
                '$v=\\sqrt{5^2-4^2}=\\sqrt{9}=3$ cm.',
                '$S=\\frac{(14+6)\\cdot 3}{2}=30\\,\\text{cm}^2$.'] },
      { task: 'Kosoštvorec má uhlopriečky 10 cm a 24 cm. Vypočítaj jeho obvod a obsah.',
        steps: ['Uhlopriečky sa rozpoľujú a sú kolmé: polovice 5 cm a 12 cm sú odvesny pravouhlého trojuholníka so stranou kosoštvorca ako preponou.',
                '$a=\\sqrt{25+144}=13$ cm, obvod $o=4\\cdot 13=52$ cm.',
                '$S=\\frac{10\\cdot 24}{2}=120\\,\\text{cm}^2$.'] }
    ]
  });

  const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15]];

  gen('s1-obsahy', () => {
    const t = Math.random();
    if (t < 0.25) {
      let [x, v, b] = pick(TRIPLES.slice(0, 5));
      if (rb()) [x, v] = [v, x];
      const c = rnd(2, 12), a = c + 2 * x;
      if (rb()) {
        return withMist({
          steps: [
            { q: T`Aká dlhá je odvesna $x=\\frac{a-c}{2}$ (v cm)?`, answer: x },
            { q: T`Vypočítaj výšku $v$ Pytagorovou vetou (v cm).`, answer: v },
            { q: T`Aký je obsah lichobežníka (v $\\text{cm}^2$)?`, answer: (a + c) * v / 2 }
          ],
          answer: (a + c) * v / 2,
          q: T`Rovnoramenný lichobežník má základne $a=${a}$ cm, $c=${c}$ cm a ramená $b=${b}$ cm. Vypočítaj jeho obsah v $\\text{cm}^2$.`,
          solution: T`$x=\\frac{a-c}{2}=${x}$ cm, výška $v=\\sqrt{${b}^2-${x}^2}=\\sqrt{${v * v}}=${v}$ cm. $S=\\frac{(${a}+${c})\\cdot ${v}}{2}=${(a + c) * v / 2}\\,\\text{cm}^2$.`,
          hint: T`Výškou odrež pravouhlý trojuholník s preponou $b$ a odvesnou $\\frac{a-c}{2}$. Výšku dopočítaj Pytagorovou vetou.`
        }, [
          { value: (a + c) * v, msg: T`Obsah lichobežníka je $\\frac{(a+c)\\cdot v}{2}$, nezabudni deliť dvoma.` },
          { value: (a + c) * b / 2, msg: T`Rameno nie je výška lichobežníka. Výšku dopočítaj z pravouhlého trojuholníka s preponou $b$.` }
        ]);
      }
      return withMist({
        steps: [
          { q: T`Aká dlhá je odvesna $x=\\frac{a-c}{2}$ (v cm)?`, answer: x },
          { q: T`Vypočítaj rameno $b$ Pytagorovou vetou (v cm).`, answer: b },
          { q: T`Aký je obvod lichobežníka (v cm)?`, answer: a + c + 2 * b }
        ],
        answer: a + c + 2 * b,
        q: T`Rovnoramenný lichobežník má základne $a=${a}$ cm a $c=${c}$ cm a výšku $v=${v}$ cm. Vypočítaj jeho obvod v cm.`,
        solution: T`$x=\\frac{a-c}{2}=${x}$ cm, rameno $b=\\sqrt{${x}^2+${v}^2}=\\sqrt{${b * b}}=${b}$ cm. $o=${a}+${c}+2\\cdot ${b}=${a + c + 2 * b}$ cm.`,
        hint: T`Rameno je prepona pravouhlého trojuholníka s odvesnami $v$ a $\\frac{a-c}{2}$.`
      }, [
        { value: a + c + 2 * v, msg: T`Výška nie je rameno. Rameno je šikmé, dopočítaj ho Pytagorovou vetou.` },
        { value: a + c + b, msg: T`Lichobežník má dve ramená, obe patria do obvodu.` }
      ]);
    }
    if (t < 0.5) {
      const [p, q, s] = pick(TRIPLES.slice(0, 4)), u1 = 2 * p, u2 = 2 * q, k = rnd(0, 2);
      const S = u1 * u2 / 2;
      const ask = [T`obvod (v cm)`, T`obsah (v $\\text{cm}^2$)`, T`výšku (v cm, na dve desatinné miesta)`][k];
      const ans = [4 * s, S, S / s][k];
      const sA = { q: T`Aká dlhá je strana kosoštvorca (v cm)?`, answer: s };
      return withMist({
        steps: [
          [sA, { q: T`Aký je obvod kosoštvorca (v cm)?`, answer: 4 * s }],
          [{ q: T`Polovice uhlopriečok sú odvesny pravouhlého trojuholníka. Aký obsah má jeden z týchto štyroch trojuholníkov (v $\\text{cm}^2$)?`, answer: p * q / 2 },
            { q: T`Aký je obsah kosoštvorca (v $\\text{cm}^2$)?`, answer: S }],
          [sA, { q: T`Aký je obsah kosoštvorca (v $\\text{cm}^2$)?`, answer: S },
            { q: T`Z $S=a\\cdot v$ vypočítaj výšku (v cm, na dve desatinné miesta).`, answer: Math.round(S / s * 100) / 100, tol: 0.011 }]
        ][k],
        answer: Math.round(ans * 100) / 100, tol: k === 2 ? 0.011 : 1e-6,
        q: T`Kosoštvorec má uhlopriečky dĺžok ${u1} cm a ${u2} cm. Vypočítaj jeho ${ask}.`,
        solution: T`Strana: $a=\\sqrt{${p}^2+${q}^2}=${s}$ cm (polovice uhlopriečok sú odvesny). `
          + [`$o=4a=${4 * s}$ cm.`, `$S=\\frac{u_1u_2}{2}=\\frac{${u1}\\cdot ${u2}}{2}=${S}\\,\\text{cm}^2$.`,
            T`$S=\\frac{${u1}\\cdot ${u2}}{2}=${S}\\,\\text{cm}^2$ a zároveň $S=a\\cdot v$, preto $v=\\frac{${S}}{${s}}\\approx ${dc(Math.round(S / s * 100) / 100)}$ cm.`][k],
        hint: T`Uhlopriečky kosoštvorca sú na seba kolmé a rozpoľujú sa. Obsah je $\\frac{u_1u_2}{2}$, ale aj $a\\cdot v$.`
      }, [
        k === 0 && { value: 2 * (u1 + u2), msg: T`Uhlopriečky nie sú strany kosoštvorca. Stranu vypočítaj z polovíc uhlopriečok Pytagorovou vetou.` },
        k === 1 && { value: u1 * u2, msg: T`Obsah kosoštvorca je polovica súčinu uhlopriečok.` },
        k === 2 && { value: Math.round(u1 * u2 / s * 100) / 100, msg: T`Obsah kosoštvorca je polovica súčinu uhlopriečok, nezabudni deliť dvoma.` }
      ]);
    }
    if (t < 0.75) {
      const k = rnd(0, 2);
      if (k === 0) {
        const [p, q, s] = pick(TRIPLES);
        return withMist({
          steps: [
            { q: T`Výška rozpolí základňu. Aká dlhá je polovica základne (v cm)?`, answer: p },
            { q: T`Vypočítaj výšku na základňu Pytagorovou vetou (v cm).`, answer: q },
            { q: T`Aký je obsah trojuholníka (v $\\text{cm}^2$)?`, answer: p * q }
          ],
          answer: p * q,
          q: T`Rovnoramenný trojuholník má základňu ${2 * p} cm a ramená ${s} cm. Vypočítaj jeho obsah v $\\text{cm}^2$.`,
          solution: T`Výška na základňu ju rozpolí: $v=\\sqrt{${s}^2-${p}^2}=\\sqrt{${q * q}}=${q}$ cm. $S=\\frac{${2 * p}\\cdot ${q}}{2}=${p * q}\\,\\text{cm}^2$.`,
          hint: T`Výška na základňu rovnoramenného trojuholníka ju delí na polovice. Použi Pytagorovu vetu.`
        }, [
          { value: p * s, msg: T`Rameno nie je výška. Výšku na základňu vypočítaj Pytagorovou vetou.` },
          { value: 2 * p * q, msg: T`Obsah trojuholníka je polovica súčinu základne a výšky.` }
        ]);
      }
      if (k === 1) {
        const [a0, b0, c0] = pick(TRIPLES), m = rnd(1, 3), right = rb();
        const a = a0 * m, b = b0 * m, c = right ? c0 * m : c0 * m + pick([-1, 1]);
        const YES = T`je pravouhlý`, NO = T`nie je pravouhlý`;
        return hintsFor({
          type: 'choice', options: [YES, NO], answer: right ? YES : NO,
          q: T`Trojuholník má strany ${shuffle([a, b, c]).join(' cm, ')} cm. Rozhodni, či je pravouhlý.`,
          solution: T`Najdlhšia strana je ${c} cm. $${a}^2+${b}^2=${a * a + b * b}$ a $${c}^2=${c * c}$. `
            + (right ? T`Rovnosť platí, podľa obrátenej Pytagorovej vety je trojuholník pravouhlý.` : T`Rovnosť neplatí, trojuholník nie je pravouhlý.`),
          hint: T`Porovnaj štvorec najdlhšej strany so súčtom štvorcov dvoch kratších strán.`
        }, right
          ? [[NO, T`Over to výpočtom: najdlhšia strana je prepona. Porovnaj jej druhú mocninu so súčtom druhých mocnín dvoch kratších strán.`]]
          : [[YES, T`Strany len pripomínajú pytagorovskú trojicu. Over výpočtom, či platí presná rovnosť $a^2+b^2=c^2$.`]]);
      }
      const a = rnd(2, 20), v = a * Math.sqrt(3) / 2;
      return withMist({
        steps: [
          { q: T`Výška rozpolí stranu. Koľko je $\\left(\\frac{a}{2}\\right)^2$?`, answer: a * a / 4 },
          { q: T`Koľko je $v^2=a^2-\\left(\\frac{a}{2}\\right)^2$?`, answer: 3 * a * a / 4 },
          { q: T`Aká je výška (v cm, na dve desatinné miesta)?`, answer: Math.round(v * 100) / 100, tol: 0.011 }
        ],
        answer: Math.round(v * 100) / 100, tol: 0.011,
        q: T`Vypočítaj výšku rovnostranného trojuholníka so stranou $${a}$ cm (v cm, na dve desatinné miesta).`,
        solution: T`Výška rozpolí stranu: $v=\\sqrt{${a}^2-\\left(${fTex(a, 2)}\\right)^2}=\\frac{${a}\\sqrt3}{2}\\approx ${dc(Math.round(v * 100) / 100)}$ cm.`,
        hint: T`Výška rovnostranného trojuholníka ho delí na dva pravouhlé trojuholníky s odvesnou $\\frac{a}{2}$ a preponou $a$.`
      }, [
        { value: Math.round(a * Math.sqrt(5) / 2 * 100) / 100, msg: T`Strana trojuholníka je prepona: druhú mocninu polovice strany od jej druhej mocniny odčítaj, nepripočítaj.` }
      ]);
    }
    const k = rnd(0, 2);
    if (k < 2) {
      const al = pick([30, 45, 60, 72, 90, 120, 135, 150, 240, 270]), r = rnd(2, 12);
      if (k === 0) {
        const kk = r * r * al / 360;
        return withMist({
          ...piAns(kk),
          q: T`Vypočítaj obsah kruhového výseku s polomerom $${r}$ cm a stredovým uhlom $${al}^\\circ$ (v $\\text{cm}^2$, $\\pi\\approx 3{,}14$, na dve desatinné miesta).`,
          solution: `$S=\\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}=3${dsep()}14\\cdot ${r * r}\\cdot\\frac{${al}}{360}\\approx ${dc(piAns(kk).answer)}\\,\\text{cm}^2$.`,
          hint: T`Výsek so stredovým uhlom $\\alpha$ je $\\frac{\\alpha}{360^\\circ}$ celého kruhu.`
        }, [
          { value: piAns(r * r).answer, msg: T`Toto je obsah celého kruhu. Výsek je len jeho časť $\\frac{\\alpha}{360^\\circ}$.` },
          { value: piAns(2 * r * al / 360).answer, msg: T`Toto je dĺžka oblúka. Obsah výseku vychádza z obsahu kruhu $\\pi r^2$.` }
        ]);
      }
      const kk = 2 * r * al / 360;
      return withMist({
        ...piAns(kk),
        q: T`Vypočítaj dĺžku kruhového oblúka s polomerom $${r}$ cm a stredovým uhlom $${al}^\\circ$ (v cm, $\\pi\\approx 3{,}14$, na dve desatinné miesta).`,
        solution: `$l=2\\pi r\\cdot\\frac{\\alpha}{360^\\circ}=2\\cdot 3${dsep()}14\\cdot ${r}\\cdot\\frac{${al}}{360}\\approx ${dc(piAns(kk).answer)}$ cm.`,
        hint: T`Oblúk so stredovým uhlom $\\alpha$ je $\\frac{\\alpha}{360^\\circ}$ obvodu kružnice.`
      }, [
        { value: piAns(r * al / 360).answer, msg: T`Obvod kružnice je $2\\pi r$, nezabudni na dvojku.` },
        { value: piAns(r * r * al / 360).answer, msg: T`Toto je obsah výseku. Dĺžka oblúka vychádza z obvodu kružnice $2\\pi r$.` }
      ]);
    }
    const R = rnd(4, 15), r = rnd(2, R - 1);
    return withMist({
      steps: [
        { q: T`Koľko je $R^2-r^2$?`, answer: R * R - r * r },
        { q: T`Vynásob číslom $\\pi\\approx 3{,}14$. Aký je obsah medzikružia (v $\\text{cm}^2$)?`, ...piAns(R * R - r * r) }
      ],
      ...piAns(R * R - r * r),
      q: T`Vypočítaj obsah medzikružia s polomermi $R=${R}$ cm a $r=${r}$ cm (v $\\text{cm}^2$, $\\pi\\approx 3{,}14$).`,
      solution: `$S=\\pi(R^2-r^2)=3${dsep()}14\\cdot(${R * R}-${r * r})=3${dsep()}14\\cdot ${R * R - r * r}\\approx ${dc(piAns(R * R - r * r).answer)}\\,\\text{cm}^2$.`,
      hint: T`Od obsahu veľkého kruhu odčítaj obsah malého.`
    }, [
      { value: piAns((R - r) * (R - r)).answer, msg: T`Obsah medzikružia nie je $\\pi(R-r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého.` }
    ]);
  });

  /* ========== 170 Zhodnosť a základné konštrukcie ========== */

  lesson({
    id: 's1-zhodnost', order: 170, topics: ['planimetria'], title: 'Zhodnosť trojuholníkov a konštrukcie',
    summary: 'Vety sss, sus, usu, Ssu, množiny bodov danej vlastnosti a Talesova kružnica.',
    theory: [
      `<p>Dva útvary sú <strong>zhodné</strong>, ak jeden možno premiestniť tak, aby splynul s druhým. Pri zhodných trojuholníkoch $\\triangle ABC\\cong\\triangle KLM$
       poradie písmen určuje, ktoré vrcholy si zodpovedajú: $A\\leftrightarrow K$, $B\\leftrightarrow L$, $C\\leftrightarrow M$; zodpovedajúce strany a uhly sú zhodné.</p>`,
      `<p><strong>Vety o zhodnosti trojuholníkov</strong> – dva trojuholníky sú zhodné, ak sa zhodujú v:</p>
       <ul><li><strong>sss</strong> – všetkých troch stranách,</li>
       <li><strong>sus</strong> – dvoch stranách a uhle nimi zovretom,</li>
       <li><strong>usu</strong> – jednej strane a dvoch uhloch k nej priľahlých,</li>
       <li><strong>Ssu</strong> – dvoch stranách a uhle oproti <em>väčšej</em> z nich.</li></ul>
       <p>Zhoda v troch uhloch nestačí (trojuholníky sú len podobné) a ani dve strany s uhlom oproti menšej strane neurčujú trojuholník jednoznačne.</p>`,
      { fig: 's1-vety', caption: 'Zvýraznené prvky stačia na určenie trojuholníka. Pri Ssu je daný uhol $\\alpha$ oproti väčšej strane $a$.' },
      `<p><strong>Množiny bodov danej vlastnosti</strong> sú základom konštrukcií: body rovnako vzdialené od $A$ a $B$ tvoria <em>os úsečky</em> $AB$;
       body vnútri uhla rovnako vzdialené od jeho ramien tvoria <em>os uhla</em>; body vo vzdialenosti $r$ od $S$ tvoria <em>kružnicu</em>;
       body vo vzdialenosti $d$ od priamky $p$ tvoria <em>dvojicu rovnobežiek</em>. Body $X$, z ktorých vidno úsečku $AB$ pod pravým uhlom, ležia na <strong>Talesovej kružnici</strong>
       nad priemerom $AB$ (bez bodov $A$, $B$).</p>`,
      { fig: 's1-tales', caption: 'Pravouhlý trojuholník s preponou $AB$ a výškou $v$: vrchol $C$ leží na Talesovej kružnici aj na rovnobežke $p$ s $AB$ vo vzdialenosti $v$. V jednej polrovine sú dve riešenia $C_1$, $C_2$, ak je $v$ menšia ako polomer.' }
    ],
    examples: [
      { task: 'Sú trojuholníky $ABC$ s $a=5$ cm, $b=7$ cm, $\\gamma=40^\\circ$ určené jednoznačne?',
        steps: ['Uhol $\\gamma$ leží pri vrchole $C$, teda medzi stranami $a=BC$ a $b=CA$.',
                'Ide o dve strany a uhol nimi zovretý – veta <strong>sus</strong>.',
                'Všetky také trojuholníky sú zhodné.'] },
      { task: 'Zostroj pravouhlý trojuholník $ABC$ s preponou $|AB|=6$ cm a výškou $v_c=2$ cm. Koľko riešení má úloha v jednej polrovine určenej priamkou $AB$?',
        steps: ['$C$ leží na Talesovej kružnici nad $AB$ so stredom v strede $AB$ a polomerom 3 cm.',
                '$C$ leží aj na rovnobežke s $AB$ vo vzdialenosti 2 cm.',
                'Keďže $2&lt;3$, rovnobežka pretne polkružnicu v dvoch bodoch: <strong>2 riešenia</strong> (navzájom súmerné, teda zhodné).'] }
    ]
  });

  const ANG = { a: '\\alpha', b: '\\beta', c: '\\gamma' };
  const LOCI = [
    ['majú rovnakú vzdialenosť od bodov $A$ a $B$', 'os úsečky $AB$'],
    ['ležia vnútri uhla $AVB$ a majú rovnakú vzdialenosť od oboch jeho ramien', 'os uhla $AVB$'],
    ['majú od bodu $S$ vzdialenosť 3 cm', 'kružnica so stredom $S$ a polomerom 3 cm'],
    ['sú vrcholmi pravého uhla $AXB$', 'Talesova kružnica nad priemerom $AB$ bez bodov $A$, $B$'],
    ['majú od priamky $p$ vzdialenosť 2 cm', 'dve rovnobežky s $p$ vo vzdialenosti 2 cm'],
    ['majú od bodu $S$ vzdialenosť najviac 3 cm', 'kruh so stredom $S$ a polomerom 3 cm']
  ];

  gen('s1-zhodnost', () => {
    const t = Math.random();
    if (t < 0.3) {
      const type = pick(['sss', 'sus', 'usu', 'Ssu', 'uuu', 'ssu']);
      const [X, Y, Z] = shuffle(['a', 'b', 'c']);
      const s = (n, v) => `${n}=${v}\\,\\text{cm}`, u = (n, v) => `${ANG[n]}=${v}^\\circ`;
      let data, ans, why;
      if (type === 'sss') {
        let a, b, c;
        do { a = rnd(3, 12); b = rnd(3, 12); c = rnd(3, 12); } while (a + b <= c || a + c <= b || b + c <= a);
        data = [s('a', a), s('b', b), s('c', c)]; ans = T`sss`; why = T`Sú dané všetky tri strany (trojuholníková nerovnosť platí).`;
      } else if (type === 'sus') {
        data = [s(X, rnd(3, 12)), s(Y, rnd(3, 12)), u(Z, rnd(25, 130))]; ans = T`sus`;
        why = T`Uhol $${ANG[Z]}$ leží oproti strane $${Z}$, teda medzi stranami $${X}$ a $${Y}$ – je nimi zovretý.`;
      } else if (type === 'usu') {
        const p = rnd(25, 90), q = rnd(25, 150 - p);
        data = [s(X, rnd(3, 12)), u(Y, p), u(Z, q)]; ans = T`usu`;
        why = T`Uhly $${ANG[Y]}$ a $${ANG[Z]}$ ležia pri koncových bodoch strany $${X}$, sú k nej priľahlé.`;
      } else if (type === 'Ssu') {
        const big = rnd(6, 14), small = rnd(3, big - 1);
        data = [s(X, big), s(Y, small), u(X, rnd(30, 120))]; ans = T`Ssu`;
        why = T`Uhol $${ANG[X]}$ leží oproti väčšej zo strán ($${X}=${big}$ cm &gt; $${Y}=${small}$ cm).`;
      } else if (type === 'uuu') {
        const p = rnd(30, 90), q = rnd(30, 150 - p);
        data = [u('a', p), u('b', q), u('c', 180 - p - q)]; ans = T`žiadna z viet`;
        why = T`Sú dané len uhly. Trojuholníky s rovnakými uhlami môžu mať rôzne veľké strany – sú podobné, nie nutne zhodné.`;
      } else {
        const big = rnd(6, 14), small = rnd(3, big - 1);
        data = [s(X, big), s(Y, small), u(Y, rnd(20, 55))]; ans = T`žiadna z viet`;
        why = T`Uhol $${ANG[Y]}$ leží oproti <em>menšej</em> strane $${Y}$. Také údaje môžu určovať dva rôzne trojuholníky, nejde o vetu Ssu.`;
      }
      const tempt = {
        sus: [[T`Ssu`, T`Uhol $${ANG[Z]}$ neleží oproti žiadnej z daných strán. Pozri sa, kde leží vzhľadom na strany $${X}$ a $${Y}$.`]],
        usu: [[T`sus`, T`Je daná len jedna strana. Veta sus potrebuje dve strany a uhol nimi zovretý.`]],
        Ssu: [[T`sus`, T`Uhol $${ANG[X]}$ nie je zovretý danými stranami, leží oproti strane $${X}$.`],
          [T`žiadna z viet`, T`Uhol leží oproti väčšej z daných strán, a to na jednoznačné určenie trojuholníka stačí.`]],
        uuu: [[T`usu`, T`Veta usu potrebuje aj stranu. Samotné uhly určujú len tvar trojuholníka, nie jeho veľkosť.`]],
        ssu: [[T`Ssu`, T`Pri vete Ssu musí uhol ležať oproti väčšej z daných strán. Tu leží oproti menšej.`]],
        sss: []
      }[type];
      return hintsFor({
        type: 'choice', options: [T`sss`, T`sus`, T`usu`, T`Ssu`, T`žiadna z viet`], answer: ans,
        q: T`O trojuholníku $ABC$ vieme: $${shuffle(data).join('$, $')}$. Ktorá veta o zhodnosti zaručuje, že všetky trojuholníky s týmito údajmi sú navzájom zhodné?`,
        solution: T`${why} Odpoveď: <strong>${ans}</strong>.`,
        hint: T`Uhol $\\alpha$ leží oproti strane $a$ (pri vrchole $A$). Zisti, či je uhol zovretý danými stranami, priľahlý k danej strane, alebo oproti niektorej z nich.`
      }, tempt);
    }
    if (t < 0.55) {
      if (rb()) {
        const c = 2 * rnd(2, 6), r = c / 2, v = pick([rnd(1, r - 1), r, r, rnd(r + 1, r + 3)]);
        const cnt = v < r ? 2 : v === r ? 1 : 0;
        return withMist({
          answer: cnt,
          q: T`Konštruujeme pravouhlý trojuholník $ABC$ s preponou $|AB|=${c}$ cm a výškou $v_c=${v}$ cm. Koľko riešení má úloha v jednej polrovine určenej priamkou $AB$?`,
          solution: T`Vrchol $C$ leží na Talesovej kružnici nad $AB$ s polomerom $${r}$ cm a na rovnobežke s $AB$ vo vzdialenosti $${v}$ cm. `
            + (cnt === 2 ? T`Keďže $${v}&lt;${r}$, rovnobežka pretína polkružnicu v dvoch bodoch.` : cnt === 1 ? T`Keďže $${v}=${r}$, rovnobežka sa polkružnice dotýka v jednom bode (trojuholník je rovnoramenný).` : T`Keďže $${v}&gt;${r}$, rovnobežka polkružnicu nepretína, úloha nemá riešenie.`)
            + T` Počet riešení: ${cnt}.`,
          hint: T`Porovnaj výšku s polomerom Talesovej kružnice, ktorý je polovicou prepony.`
        }, [
          { value: v < c ? 2 : v === c ? 1 : 0, msg: T`Polomer Talesovej kružnice je polovica prepony, výšku porovnávaj s ním, nie s celou preponou.` },
          { value: 2, msg: T`Počet riešení závisí od toho, či je výška menšia, rovná alebo väčšia ako polomer Talesovej kružnice.` }
        ]);
      }
      const c = rnd(4, 12), v = rnd(2, 6), tc = pick([rnd(1, v - 1), v, rnd(v + 1, v + 4)]);
      const cnt = tc > v ? 2 : tc === v ? 1 : 0;
      return withMist({
        answer: cnt,
        q: T`Konštruujeme trojuholník $ABC$, ak $|AB|=${c}$ cm, výška $v_c=${v}$ cm a ťažnica $t_c=${tc}$ cm. Koľko riešení má úloha v jednej polrovine určenej priamkou $AB$?`,
        solution: T`Vrchol $C$ leží na kružnici so stredom v strede $S$ strany $AB$ a polomerom $t_c=${tc}$ cm a na rovnobežke s $AB$ vo vzdialenosti $${v}$ cm. `
          + (cnt === 2 ? T`Keďže $${tc}&gt;${v}$, kružnica pretína rovnobežku v dvoch bodoch.` : cnt === 1 ? T`Keďže $t_c=v_c$, kružnica sa rovnobežky dotýka (ťažnica splýva s výškou).` : T`Ťažnica nemôže byť kratšia ako výška, úloha nemá riešenie.`)
          + T` Počet riešení: ${cnt}.`,
        hint: T`Vrchol $C$ je vo vzdialenosti $t_c$ od stredu strany $AB$ a vo vzdialenosti $v_c$ od priamky $AB$.`
      }, [
        { value: tc < v ? 2 : tc === v ? 1 : 0, msg: T`Ťažnica je vzdialenosť bodu $C$ od stredu strany $AB$. Nemôže byť kratšia ako výška, ktorá je najkratšou vzdialenosťou bodu $C$ od priamky $AB$.` }
      ]);
    }
    if (t < 0.75) {
      const [desc, ans] = pick(LOCI).map(T.s);
      return {
        type: 'choice', answer: ans, options: choose(ans, LOCI.map((l) => T.s(l[1]))),
        q: T`Čo tvorí množina všetkých bodov $X$ roviny, ktoré ${desc}?`,
        solution: T`Množinou všetkých takých bodov je ${ans}.`,
        hint: T`Spomeň si na základné množiny bodov: os úsečky, os uhla, kružnica, rovnobežky a Talesova kružnica.`
      };
    }
    const img = shuffle(['K', 'L', 'M']), pre = {};
    ['A', 'B', 'C'].forEach((v, i) => { pre[img[i]] = v; });
    // častá chyba: vrcholy priradené podľa abecedy (K–A, L–B, M–C), nie podľa poradia v zápise
    const ALPHA = { K: 'A', L: 'B', M: 'C' };
    const ABC_MSG = T`Vrcholy si zodpovedajú podľa poradia v zápise zhodnosti, nie podľa abecedy.`;
    if (rb()) {
      let a, b, c;
      do { a = rnd(3, 12); b = rnd(3, 12); c = rnd(3, 12); } while (a + b <= c || a + c <= b || b + c <= a || a === b || b === c || a === c);
      const side = { AB: c, BA: c, BC: a, CB: a, CA: b, AC: b };
      const [X, Y] = shuffle(['K', 'L', 'M']);
      const val = side[pre[X] + pre[Y]];
      return withMist({
        answer: val,
        q: T`Platí $\\triangle ABC\\cong\\triangle ${img.join('')}$, pričom $|AB|=${c}$ cm, $|BC|=${a}$ cm a $|CA|=${b}$ cm. Akú dĺžku má strana $${X}${Y}$ (v cm)?`,
        solution: T`Zápis určuje dvojice vrcholov $A\\leftrightarrow ${img[0]}$, $B\\leftrightarrow ${img[1]}$, $C\\leftrightarrow ${img[2]}$. Strane $${X}${Y}$ zodpovedá strana $${pre[X]}${pre[Y]}$, teda $|${X}${Y}|=${val}$ cm.`,
        hint: T`V zápise zhodnosti si zodpovedajú vrcholy na rovnakých miestach: prvý s prvým, druhý s druhým, tretí s tretím.`
      }, [{ value: side[ALPHA[X] + ALPHA[Y]], msg: ABC_MSG }]);
    }
    const al = rnd(30, 90), be = rnd(25, 150 - al), ga = 180 - al - be;
    const X = pick(['K', 'L', 'M']), val = { A: al, B: be, C: ga }[pre[X]];
    return withMist({
      answer: val,
      q: T`Platí $\\triangle ABC\\cong\\triangle ${img.join('')}$, pričom $\\alpha=${al}^\\circ$ a $\\beta=${be}^\\circ$. Akú veľkosť má vnútorný uhol trojuholníka $${img.join('')}$ pri vrchole $${X}$?`,
      solution: T`Vrcholu $${X}$ zodpovedá vrchol $${pre[X]}$${pre[X] === 'C' ? ` a $\\gamma=180^\\circ-${al}^\\circ-${be}^\\circ=${ga}^\\circ$` : ''}. Uhol pri $${X}$ má teda $${val}^\\circ$.`,
      hint: T`Zisti, ktorému vrcholu trojuholníka $ABC$ zodpovedá daný vrchol. Tretí uhol dopočítaš zo súčtu $180^\\circ$.`
    }, [{ value: { A: al, B: be, C: ga }[ALPHA[X]], msg: ABC_MSG }]);
  });

  /* ========== 180 Pomer, mierka a úmernosť ========== */

  lesson({
    id: 's1-umernost', order: 180, topics: ['prakticke', 'funkcie'], title: 'Pomer, mierka a úmernosť',
    summary: 'Delenie v pomere, mierka mapy, priama a nepriama úmernosť.',
    theory: [
      `<p><strong>Pomer</strong> $a:b$ porovnáva dve veličiny podielom; hodnota pomeru sa nezmení, ak oba členy vynásobíme rovnakým nenulovým číslom ($12:18=2:3$).
       Pri <strong>delení celku v pomere</strong> $a:b:c$ rozdelíme celok na $a+b+c$ rovnakých dielov. Číslo $x$ <strong>zmeníme v pomere</strong> $p:q$, ak ho vynásobíme zlomkom $\\frac{p}{q}$
       (pre $p&gt;q$ ide o zväčšenie, pre $p&lt;q$ o zmenšenie).</p>`,
      `<p><strong>Mierka</strong> $1:n$ znamená, že 1 cm na mape zodpovedá $n$ cm v skutočnosti. Napr. pri mierke $1:50\\,000$ je 1 cm na mape $50\\,000$ cm $=500$ m.</p>`,
      `<p><strong>Priama úmernosť</strong> $y=kx$ ($k&gt;0$): koľkokrát sa zväčší $x$, toľkokrát sa zväčší $y$; podiel $\\frac{y}{x}$ je stály a grafom je časť priamky cez počiatok.
       <strong>Nepriama úmernosť</strong> $y=\\frac{k}{x}$: koľkokrát sa $x$ zväčší, toľkokrát sa $y$ zmenší; stály je súčin $x\\cdot y$ a grafom je časť hyperboly.</p>`,
      { fig: 's1-umernost', caption: 'Priama úmernosť $y=kx$ a nepriama úmernosť $y=\\frac{k}{x}$ pre $x&gt;0$. Mení koeficient $k$ a sleduj body pri $x=2$.' }
    ],
    examples: [
      { task: 'Sumu 960 € rozdeľ v pomere $3:4:5$.',
        steps: ['Počet dielov: $3+4+5=12$, jeden diel je $960:12=80$ €.',
                '<strong>$240$ €, $320$ € a $400$ €</strong>'] },
      { task: 'Šesť rovnako výkonných strojov vykope jamu za 10 hodín. Za koľko hodín ju vykopú 4 stroje?',
        steps: ['Menej strojov potrebuje viac času – nepriama úmernosť, súčin je stály.',
                '$6\\cdot 10=4\\cdot t$, teda $t=15$.',
                '<strong>Za 15 hodín.</strong>'] }
    ]
  });

  const UMER = [
    ['cena nakúpeného tovaru a jeho množstvo pri stálej cene za kus', 'priama úmernosť'],
    ['dráha prejdená stálou rýchlosťou a čas jazdy', 'priama úmernosť'],
    ['obvod štvorca a dĺžka jeho strany', 'priama úmernosť'],
    ['počet rovnako výkonných robotníkov a čas potrebný na danú prácu', 'nepriama úmernosť'],
    ['rýchlosť auta a čas potrebný na prejdenie danej trasy', 'nepriama úmernosť'],
    ['počet rovnakých dielov, na ktoré rozdelíme koláč, a veľkosť jedného dielu', 'nepriama úmernosť'],
    ['obsah štvorca a dĺžka jeho strany', 'ani priama, ani nepriama úmernosť'],
    ['vek človeka a jeho výška', 'ani priama, ani nepriama úmernosť'],
    ['cena taxíka (nástupné plus cena za km) a počet prejdených km', 'ani priama, ani nepriama úmernosť']
  ];

  gen('s1-umernost', () => {
    const t = Math.random();
    if (t < 0.25) {
      if (rb()) {
        const a = rnd(1, 7), b = rnd(1, 7), c = rnd(1, 7), u = rnd(2, 40), TOT = u * (a + b + c);
        return withMist({
          steps: [
            { q: T`Koľko dielov je spolu?`, answer: a + b + c },
            { q: T`Koľko eur je jeden diel?`, answer: u },
            { q: T`Koľko eur dostal každý? Zadaj sumy v poradí.`, answer: [a * u, b * u, c * u], type: 'tuple', placeholder: T`prvý; druhý; tretí` }
          ],
          type: 'tuple', answer: [a * u, b * u, c * u], placeholder: T`prvý; druhý; tretí`,
          q: T`Traja kamaráti si rozdelili ${TOT} € v pomere $${a}:${b}:${c}$. Koľko eur dostal každý? Zadaj sumy v poradí oddelené bodkočiarkou.`,
          solution: T`Dielov je $${a}+${b}+${c}=${a + b + c}$, jeden diel je $${TOT}:${a + b + c}=${u}$ €. Sumy: $${a}\\cdot ${u}=${a * u}$, $${b}\\cdot ${u}=${b * u}$, $${c}\\cdot ${u}=${c * u}$ €.`,
          hint: T`Sčítaj členy pomeru – to je počet dielov. Celok vydeľ počtom dielov.`
        }, [
          { value: [TOT / 3, TOT / 3, TOT / 3], msg: T`Suma sa nedelí každému rovnako, ale podľa pomeru: každý dostane toľko dielov, koľko udáva jeho číslo v pomere.` }
        ]);
      }
      let a, b;
      do { a = rnd(2, 9); b = rnd(1, 8); } while (a <= b || gcd(a, b) !== 1);
      const u = rnd(2, 30);
      return withMist({
        steps: [
          { q: T`Čísla zapíš ako $${a}k$ a $${b}k$. Aké je $k$?`, answer: u },
          { q: T`Urči obe čísla (najprv väčšie, potom menšie).`, answer: [a * u, b * u], type: 'tuple', placeholder: T`väčšia; menšia` }
        ],
        type: 'tuple', answer: [a * u, b * u], placeholder: T`väčšia; menšia`,
        q: T`Dve čísla sú v pomere $${a}:${b}$ a ich rozdiel je ${(a - b) * u}. Urči obe čísla (najprv väčšie, potom menšie).`,
        solution: T`Čísla sú $${a}k$ a $${b}k$. Rozdiel: $${a - b}k=${(a - b) * u}$, teda $k=${u}$. Čísla sú $${a * u}$ a $${b * u}$.`,
        hint: T`Čísla v pomere $a:b$ zapíš ako $ak$ a $bk$ a zostav rovnicu.`
      }, [
        { value: [a * (a - b) * u, b * (a - b) * u], msg: T`Rozdiel čísel nie je jeden diel. Rozdiel zodpovedá toľkým dielom, o koľko sa líšia čísla pomeru.` }
      ]);
    }
    if (t < 0.5) {
      const n = pick([10000, 25000, 50000, 100000, 200000, 500000]), cm = rnd(2, 40) / 2;
      const km = Math.round(cm * n / 100000 * 1e6) / 1e6;
      const k = rnd(0, 2);
      if (k === 0) {
        return {
          steps: [
            { q: T`Koľko centimetrov je skutočná vzdialenosť?`, answer: Math.round(cm * n) },
            { q: T`Preveď ju na kilometre.`, answer: km }
          ],
          answer: km,
          q: T`Na mape s mierkou $1:${big(n)}$ je vzdialenosť dvoch obcí $${dc(cm)}$ cm. Aká je skutočná vzdialenosť v kilometroch?`,
          solution: T`Skutočnosť je $${big(n)}$-krát väčšia: $${dc(cm)}\\cdot ${big(n)}=${big(Math.round(cm * n))}$ cm $=${dc(km)}$ km (1 km = 100 000 cm).`,
          hint: T`Vzdialenosť z mapy vynásob číslom $n$ a výsledok v centimetroch preveď na kilometre.`
        };
      }
      if (k === 1) {
        return {
          answer: cm,
          q: T`Skutočná vzdialenosť dvoch miest je $${dc(km)}$ km. Akú dlhú úsečku (v cm) nakreslíme na mape s mierkou $1:${big(n)}$?`,
          solution: T`$${dc(km)}$ km $=${big(Math.round(cm * n))}$ cm. Na mape: $${big(Math.round(cm * n))}:${big(n)}=${dc(cm)}$ cm.`,
          hint: T`Skutočnú vzdialenosť preveď na centimetre a vydeľ číslom $n$.`
        };
      }
      return {
        answer: n,
        q: T`Úsečka dlhá $${dc(cm)}$ cm na mape zodpovedá skutočnej vzdialenosti $${dc(km)}$ km. Aká je mierka mapy $1:n$? Zadaj $n$.`,
        solution: T`$${dc(km)}$ km $=${big(Math.round(cm * n))}$ cm, $n=${big(Math.round(cm * n))}:${dc(cm)}=${big(n)}$. Mierka je $1:${big(n)}$.`,
        hint: T`Obe vzdialenosti vyjadri v rovnakých jednotkách a vydeľ skutočnú vzdialenosť vzdialenosťou na mape.`
      };
    }
    if (t < 0.78) {
      const k = rnd(0, 2);
      if (k === 0) {
        const unit = pick([45, 80, 120, 150, 240, 360, 85, 190]), a = rnd(2, 9);
        let b;
        do { b = rnd(2, 12); } while (b === a);
        return withMist({
          steps: [
            { q: T`Koľko eur stojí 1 kg ovocia?`, answer: unit / 100 },
            { q: T`Koľko eur zaplatíme za ${b} kg?`, answer: b * unit / 100 }
          ],
          answer: b * unit / 100,
          q: T`${a} kg ovocia stojí $${dc(a * unit / 100)}$ €. Koľko eur zaplatíme za ${b} kg toho istého ovocia?`,
          solution: T`Priama úmernosť: cena za 1 kg je $${dc(a * unit / 100)}:${a}=${dc(unit / 100)}$ €, za ${b} kg zaplatíme $${b}\\cdot ${dc(unit / 100)}=${dc(b * unit / 100)}$ €.`,
          hint: T`Koľkokrát viac kilogramov, toľkokrát vyššia cena. Vypočítaj cenu za 1 kg.`
        }, [
          { value: Math.round(a * unit * b) / 100, msg: T`Cena $${dc(a * unit / 100)}$ € je za ${a} kg, nie za 1 kg. Najprv zisti cenu jedného kilogramu.` }
        ]);
      }
      if (k === 1) {
        let w1, d1, w2;
        do { w1 = rnd(2, 12); d1 = rnd(2, 20); w2 = rnd(2, 15); } while (w1 === w2 || (w1 * d1) % w2 !== 0 || w1 * d1 / w2 < 2);
        const d2 = w1 * d1 / w2, DEN = [T`deň`, T`dni`, T`dní`];
        const crew = (w, verb) => (w <= 4 ? T`${w} rovnako výkonní robotníci ${verb[1]}` : T`${w} rovnako výkonných robotníkov ${verb[0]}`);
        return withMist({
          steps: [
            { q: T`Za koľko dní by prácu urobil jeden robotník?`, answer: w1 * d1 },
            { q: T`Vydeľ tento počet dní počtom robotníkov v druhej skupine. Koľko dní to bude?`, answer: d2 }
          ],
          answer: d2,
          q: T`${crew(w1, [T`urobí`, T`urobia`])} prácu za ${d1} ${pl(d1, DEN)}. Za koľko dní by rovnakú prácu ${w2 <= 4 ? T`urobili` : T`urobilo`} ${w2} ${pl(w2, [T`robotník`, T`robotníci`, T`robotníkov`])}?`,
          solution: T`Nepriama úmernosť: súčin počtu robotníkov a dní je stály. $${w1}\\cdot ${d1}=${w2}\\cdot x$, teda $x=${d2}$ (${pl(d2, DEN)}).`,
          hint: T`Viac robotníkov potrebuje menej času. Stály je súčin (robotníci × dni).`
        }, [
          { value: d1 * w2 / w1, msg: T`Ide o nepriamu úmernosť: stály je súčin počtu robotníkov a dní, nie ich podiel.` }
        ]);
      }
      const [s, a] = pick(UMER);
      return hintsFor({
        type: 'choice', answer: T.s(a), options: [T`priama úmernosť`, T`nepriama úmernosť`, T`ani priama, ani nepriama úmernosť`],
        q: T`Aký vzťah je medzi veličinami: ${T.s(s)}?`,
        solution: a === 'priama úmernosť' ? T`Ak jednu veličinu zväčšíme $k$-krát, aj druhá sa zväčší $k$-krát; ich podiel je stály. Ide o priamu úmernosť.`
          : a === 'nepriama úmernosť' ? T`Ak jednu veličinu zväčšíme $k$-krát, druhá sa $k$-krát zmenší; ich súčin je stály. Ide o nepriamu úmernosť.`
            : T`Ani podiel, ani súčin veličín nie je stály (napr. pri dvojnásobnej hodnote jednej veličiny sa druhá nezmení dvojnásobne ani na polovicu). Nejde o úmernosť.`,
        hint: T`Skús jednu veličinu zdvojnásobiť. Zdvojnásobí sa druhá, klesne na polovicu, alebo ani jedno?`
      }, a === 'priama úmernosť' ? [[T`nepriama úmernosť`, T`Keď jednu veličinu zdvojnásobíš, druhá neklesne na polovicu. Zmenia sa obe rovnakým smerom.`]]
        : a === 'nepriama úmernosť' ? [[T`priama úmernosť`, T`Keď jednu veličinu zdvojnásobíš, druhá sa nezdvojnásobí, ale zmenší.`]]
          : [[T`priama úmernosť`, T`Obe veličiny síce rastú spolu, ale pri dvojnásobku jednej sa druhá nezdvojnásobí. Podiel veličín nie je stály.`]]);
    }
    let p, q;
    do { p = rnd(1, 9); q = rnd(1, 9); } while (p === q || gcd(p, q) !== 1);
    const x = q * rnd(2, 30), res = x * p / q;
    return withMist({
      answer: res,
      q: T`${p > q ? T`Zväčši` : T`Zmenši`} číslo ${x} v pomere $${p}:${q}$.`,
      solution: T`Zmena v pomere $${p}:${q}$ znamená násobenie zlomkom $\\frac{${p}}{${q}}$: $${x}\\cdot\\frac{${p}}{${q}}=${res}$.`,
      hint: T`Zmeniť číslo v pomere $p:q$ znamená vynásobiť ho číslom $\\frac{p}{q}$.`
    }, [
      { value: x * q / p, msg: T`Zlomok si obrátil: zmeniť v pomere $${p}:${q}$ znamená vynásobiť zlomkom s čitateľom ${p} a menovateľom ${q}.` }
    ]);
  });

  /* ========== 190 Percentá, zaokrúhľovanie a odhad ========== */

  lesson({
    id: 's1-percenta', order: 190, topics: ['prakticke', 'financna'], title: 'Percentá, zaokrúhľovanie a odhad',
    summary: 'Základ, percentová časť, postupné zmeny, zaokrúhľovanie a odhad výsledku.',
    theory: [
      `<p>Jedno percento je stotina celku. <strong>Základ</strong> $z$ je celok (100 %), <strong>percentová časť</strong> $\\check{c}$ zodpovedá <strong>počtu percent</strong> $p$:
       $\\check{c}=\\frac{p}{100}\\cdot z$. Z toho $z=\\frac{\\check{c}\\cdot 100}{p}$ a $p=\\frac{\\check{c}}{z}\\cdot 100$.</p>`,
      `<p><strong>Zmena o $p$ %</strong> je násobenie číslom $1\\pm\\frac{p}{100}$. Postupné zmeny sa <em>násobia, nie sčítajú</em>: zdraženie o 20 % a potom zlacnenie o 20 %
       dáva $1{,}2\\cdot 0{,}8=0{,}96$, teda celkovo zlacnenie o 4 %. Pôvodnú cenu zo zníženej zistíme delením: ak po zľave 25 % stojí tovar 60 €, pôvodná cena je $60:0{,}75=80$ €.
       Rozlišujeme <em>percento</em> a <em>percentuálny bod</em>: rast úroku z 2 % na 3 % je rast o 1 percentuálny bod, ale o 50 %.</p>`,
      `<p><strong>Zaokrúhľovanie:</strong> ak je prvá vynechaná cifra 0 – 4, zaokrúhľujeme nadol, ak 5 – 9, nahor ($3\\,476{,}52\\approx 3\\,500$ na stovky, $\\approx 3\\,476{,}5$ na desatiny).
       Na <em>platné cifry</em> počítame od prvej nenulovej cifry: $0{,}004\\,718\\approx 0{,}0047$ na 2 platné cifry.
       <strong>Odhad</strong> výsledku urobíme so zaokrúhlenými číslami a slúži na kontrolu rádu výsledku: $398\\cdot 51\\approx 400\\cdot 50=20\\,000$.</p>`
    ],
    examples: [
      { task: 'Cena tovaru stúpla o 10 % a potom klesla o 10 %. O koľko percent sa zmenila oproti pôvodnej cene?',
        steps: ['Celkový násobiteľ: $1{,}1\\cdot 0{,}9=0{,}99$.',
                'Nová cena je 99 % pôvodnej.',
                '<strong>Cena klesla o 1 %.</strong>'] },
      { task: '18 % žiakov školy, čo je 63 žiakov, chodí do krúžku. Koľko žiakov má škola?',
        steps: ['$\\check{c}=63$, $p=18$, hľadáme základ.',
                '1 % je $63:18=3{,}5$ žiaka, 100 % je $350$.',
                '<strong>Škola má 350 žiakov.</strong>'] }
    ]
  });

  // rád v tisícinách: 1 000 000 tisícin = tisícky, …, 10 tisícin = stotiny
  const PLACES = [[1000000, 'tisícky'], [100000, 'stovky'], [10000, 'desiatky'], [1000, 'jednotky'], [100, 'desatiny'], [10, 'stotiny']];
  const thou = (X) => fmt(X / 1000);
  const thouTex = (X) => {
    const [i, d] = thou(X).split(/[.,]/);
    return big(i) + (d ? dsep() + d : '');
  };

  gen('s1-percenta', () => {
    const t = Math.random();
    if (t < 0.25) {
      if (rb()) {
        let p, z, c;
        do { p = pick([2, 4, 5, 6, 8, 12, 15, 16, 18, 24, 25, 35, 45, 60, 75]); z = 10 * rnd(2, 80); c = p * z / 100; } while (!Number.isInteger(c));
        return withMist({
          steps: [
            { q: T`Koľko je 1 % neznámeho čísla?`, answer: c / p },
            { q: T`Koľko je 100 %?`, answer: z }
          ],
          answer: z,
          q: T`${p} % z neznámeho čísla je ${c}. Urči toto číslo.`,
          solution: T`Percentová časť je $${c}$, počet percent $${p}$, hľadáme základ: $z=\\frac{${c}\\cdot 100}{${p}}=${z}$.`,
          hint: T`Najprv zisti, koľko je 1 %, potom 100 %.`
        }, [
          { value: c * p / 100, msg: T`Číslo ${c} je len ${p} % hľadaného čísla, nie celok. Zisti, koľko je 1 %, a vynásob 100.` }
        ]);
      }
      let z, c, p;
      do { z = pick([40, 50, 80, 120, 150, 200, 250, 400, 500, 640, 800]); c = rnd(1, z - 1); p = c * 100 / z; } while ((c * 1000) % z !== 0);
      return withMist({
        answer: p,
        q: T`Koľko percent je ${c} z ${z}?`,
        solution: `$p=\\frac{${c}}{${z}}\\cdot 100=${dc(p)}\\,\\%$.`,
        hint: T`Percentovú časť vydeľ základom a vynásob 100.`
      }, [
        { value: z / c * 100, msg: T`Delíš v opačnom poradí: časť vydeľ celkom (základom), nie celok časťou.` }
      ]);
    }
    if (t < 0.5) {
      const p = pick([5, 10, 15, 20, 25, 30, 40, 50]), q = pick([5, 10, 15, 20, 25, 30, 40, 50]);
      const up1 = rb(), up2 = rb() ? !up1 : up1;
      const f = (1 + (up1 ? p : -p) / 100) * (1 + (up2 ? q : -q) / 100);
      const ch = Math.round((f - 1) * 10000) / 100;
      const w = (up) => (up ? T`zdražel` : T`zlacnel`);
      return withMist({
        steps: [
          { q: T`Aký je celkový násobiteľ ceny (súčin oboch násobiteľov)?`, answer: Math.round(f * 10000) / 10000, tol: 1e-4 },
          { q: T`O koľko percent sa cena zmenila? (Zníženie zadaj záporným číslom.)`, answer: ch, tol: 0.001, signed: true }
        ],
        signed: true, answer: ch, tol: 0.001,
        q: T`Tovar najprv ${w(up1)} o ${p} % a potom ${w(up2)} o ${q} %. O koľko percent sa zmenila jeho cena oproti pôvodnej? (Zníženie zadaj záporným číslom.)`,
        solution: T`Celkový násobiteľ: $${dc(1 + (up1 ? p : -p) / 100)}\\cdot ${dc(1 + (up2 ? q : -q) / 100)}=${dc(Math.round(f * 10000) / 10000)}$. Zmena je $${dc(ch)}\\,\\%$${ch < 0 ? T` (zlacnenie)` : ch > 0 ? T` (zdraženie)` : ''}.`,
        hint: T`Každú zmenu vyjadri násobiteľom (napr. $+20\\,\\%$ je $1{,}2$, $-15\\,\\%$ je $0{,}85$) a násobitele vynásob.`
      }, [
        { value: (up1 ? p : -p) + (up2 ? q : -q), msg: T`Percentá zmien sa nesčítavajú: druhá zmena sa počíta z už zmenenej ceny. Zmeny vyjadri násobiteľmi a vynásob ich.` }
      ]);
    }
    if (t < 0.75) {
      if (rb()) {
        const p = pick([10, 15, 20, 25, 30, 40]), z = 20 * rnd(2, 40), x = z * (100 - p) / 100;
        return withMist({
          steps: [
            { q: T`Koľko percent pôvodnej ceny je zľavnená cena?`, answer: 100 - p },
            { q: T`Aká bola pôvodná cena (v eurách)?`, answer: z }
          ],
          answer: z,
          q: T`Po zľave ${p} % stojí bicykel ${fmt(x)} €. Aká bola pôvodná cena (v eurách)?`,
          solution: T`Zľavnená cena je $${100 - p}\\,\\%$ pôvodnej: $z\\cdot ${dc((100 - p) / 100)}=${dc(x)}$, teda $z=${dc(x)}:${dc((100 - p) / 100)}=${z}$ €.`,
          hint: T`Pozor, zľava sa počíta z pôvodnej ceny. Zľavnená cena je $(100-p)\\,\\%$ pôvodnej.`
        }, [
          { value: Math.round(x * (100 + p)) / 100, msg: T`Zľava sa počíta z pôvodnej ceny, nie zo zľavnenej. Zľavnená cena je $${100 - p}\\,\\%$ pôvodnej.` }
        ]);
      }
      const z = 5 * rnd(4, 120), x = z * 1.2;
      return withMist({
        answer: z,
        q: T`Cena výrobku vrátane 20 % DPH je ${fmt(x)} €. Aká je cena bez DPH (v eurách)?`,
        solution: T`Cena s DPH je $120\\,\\%$ ceny bez DPH: $z=${dc(x)}:1{,}2=${z}$ €. (Nie je to $${dc(x)}$ mínus 20 % z $${dc(x)}$!)`,
        hint: T`DPH sa pripočítava k cene bez dane, ktorá je základom (100 %).`
      }, [
        { value: Math.round(x * 80) / 100, msg: T`DPH sa počíta z ceny bez dane, nie z ceny s daňou. Cena s DPH je $120\\,\\%$ ceny bez DPH.` }
      ]);
    }
    if (rb()) {
      if (rb()) {
        // číslo v tisícinách (celé), aby zaokrúhľovanie nebolo zaťažené chybami desatinných čísel
        let X;
        do { X = rnd(1000000, 99999999); } while (X % 10 === 0);
        const [unit, nm] = pick(PLACES);
        const next = Math.floor(X / (unit / 10)) % 10;
        const R = Math.round(X / unit) * unit;
        return withMist({
          answer: R / 1000, show: thou(R),
          q: T`Zaokrúhli číslo $${thouTex(X)}$ na ${T.s(nm)}.`,
          solution: T`Prvá vynechaná cifra (hneď za miestom, na ktoré zaokrúhľujeme) je $${next}$, preto zaokrúhľujeme ${next >= 5 ? T`nahor` : T`nadol`}: $${thouTex(X)}\\approx ${thouTex(R)}$.`,
          hint: T`Rozhoduje prvá vynechaná cifra: 0 až 4 nadol, 5 až 9 nahor.`
        }, [
          next >= 5 && { value: Math.floor(X / unit) * unit / 1000, msg: T`Cifry si len odrezal. Ak je prvá vynechaná cifra 5 až 9, zaokrúhľuje sa nahor.` }
        ]);
      }
      const e = rnd(-5, -2), d1 = rnd(1, 9), digs = rnd(1, 3);
      let rest;
      do { rest = rnd(100, 999); } while (rest % 10 === 0 || rest % 10 === 5);
      const x = Number(((d1 * 1000 + rest) * 10 ** (e - 3)).toPrecision(4));
      const res = Number(x.toPrecision(digs));
      const tx = (v) => String(v).replace('.', dsep());
      return withMist({
        answer: res, tol: 1e-12, show: String(res).replace('.', CONTENT_I18N.decimal()),
        q: T`Zaokrúhli číslo $${tx(x)}$ na ${digs} ${pl(digs, [T`platnú cifru`, T`platné cifry`, T`platných cifier`])}.`,
        solution: T`Platné cifry počítame od prvej nenulovej cifry, nuly pred ňou sa nerátajú. Ponecháme ${digs === 1 ? T`prvú platnú cifru` : T`prvé ${digs} platné cifry`} a podľa nasledujúcej cifry zaokrúhlime: $${tx(x)}\\approx ${tx(res)}$.`,
        hint: T`Nuly na začiatku desatinného čísla nie sú platné cifry.`
      }, [
        { value: Number(x.toFixed(digs)), msg: T`Zaokrúhlil si na ${digs} ${pl(digs, [T`desatinné miesto`, T`desatinné miesta`, T`desatinných miest`])}. Platné cifry sa počítajú až od prvej nenulovej cifry.` }
      ]);
    }
    const a = rnd(150, 999), b = rnd(15, 99);
    const r1 = (v) => { const p = 10 ** (String(v).length - 1); return Math.round(v / p) * p; };
    const E = r1(a) * r1(b);
    const opts = [E / 100, E / 10, E, E * 10].map((v) => `$${big(v)}$`);
    const ORDER = T`Skontroluj rád výsledku: spočítaj nuly v zaokrúhlených činiteľoch.`;
    return hintsFor({
      type: 'choice', answer: `$${big(E)}$`, options: opts,
      q: T`Bez kalkulačky odhadni výsledok $${a}\\cdot ${b}$. Ktorá hodnota je najbližšia?`,
      solution: T`Zaokrúhlime na jednu platnú cifru: $${a}\\approx ${r1(a)}$, $${b}\\approx ${r1(b)}$, $${r1(a)}\\cdot ${r1(b)}=${big(E)}$. (Presne: $${big(a * b)}$.)`,
      hint: T`Zaokrúhli oba činitele na jednu platnú cifru a vynásob ich.`
    }, opts.map((o) => [o, ORDER]));
  });
})();
