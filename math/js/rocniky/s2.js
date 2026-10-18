/* 2. ročník SŠ (gymnázium): kvadratické nerovnice, sústavy a rovnice s parametrom, absolútna hodnota, lomené výrazy,
   funkcie (pojem, lineárna, nepriama úmernosť, kvadratická, transformácie grafov, mocninové, exponenciálne, logaritmické),
   podobnosť a Euklidove vety, kružnica a kruh, hranoly, ihlany a rotačné telesá.
   Lekcia „kvadraticke“ (order 10, kvadratické rovnice) je v content.js. */
(function () {
  'use strict';

  const { rnd, pick, gcd, fmt, term, shuffle } = EXERCISES.util;
  const { plane, axes, curvePath, svg, n1, sk } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 's2' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 riešenie, 2 riešenia, 5 riešení.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  const RIES = ['riešenie', 'riešenia', 'riešení'];

  const nz = (a, b) => { let v = 0; while (v === 0) v = rnd(a, b); return v; };
  const par = (v) => (v < 0 ? `(${v})` : String(v));
  const dc = (x) => fmt(x).replace(',', '{,}');
  const dc2 = (v) => (Math.round(v * 100) / 100).toFixed(2).replace('.', '{,}');
  const pt = (n, x, y) => `${n}[${x};\\, ${y}]`;

  const red = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g, q / g]; };
  const fTex = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${b}}`; };
  const fTxt = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a}/${b}`; };
  const fPar = (p, q) => (p / q < 0 ? `\\left(${fTex(p, q)}\\right)` : fTex(p, q));
  const piTex = (p, q) => {
    const [a, b] = red(p, q);
    if (b !== 1) return `\\frac{${a}}{${b}}\\pi`;
    return `${a === 1 ? '' : a === -1 ? '-' : a}\\pi`;
  };
  // tolerancia pre výsledky s π: prijme presné π aj π ≈ 3,14 a zaokrúhlenie na stotiny
  const piTol = (v) => 0.0006 * Math.abs(v) + 0.011;
  // odpoveď zaokrúhlená na stotiny (zobrazenie aj tolerancia)
  const r2ans = (v) => ({ answer: v, tol: piTol(v), show: (Math.round(v * 100) / 100).toFixed(2).replace('.', ',') });

  const lead = (c, v) => (c === 1 && v ? v : c === -1 && v ? '-' + v : c + v);
  const poly = (cs, x = 'x') => {
    const n = cs.length - 1;
    let s = '';
    cs.forEach((c, i) => { const d = n - i; s += term(c, d === 0 ? '' : d === 1 ? x : `${x}^${d}`); });
    s = s.trim();
    return !s ? '0' : s[0] === '+' ? s.slice(2) : '-' + s.slice(2);
  };
  const lin = (r) => poly([1, -r]);                       // x − r
  const fac = (r) => (r === 0 ? 'x' : `(${lin(r)})`);      // činiteľ (x − r)
  const coef = (a) => (a === 1 ? '' : a === -1 ? '-' : String(a));
  // lineárna rovnica c·v = r a jej riešenie (bez zbytočného „x = 5, teda x = 5“)
  const eqSolve = (c, r, v = 'x') => (c === 1 ? `$${v} = ${r}$` : `$${lead(c, v)} = ${r}$, teda $${v} = ${fTex(r, c)}$`);

  const INF = '\\infty';
  const R = '\\mathbb{R}';
  const iv = (a, b, lc, rc) => `${lc ? '\\langle ' : '('}${a}; ${b}${rc ? '\\rangle' : ')'}`;
  const RELS = ['\\gt', '\\lt', '\\ge', '\\le'];
  const uniq = (arr) => [...new Set(arr)];
  // výber z možností v LaTeXu: správna + nesprávne (duplicity sa vyhodia, najviac 4 možnosti)
  const choice = (ok, wrong) => ({
    type: 'choice', options: shuffle(uniq([ok, ...wrong]).slice(0, 4).map((s) => `$${s}$`)), answer: `$${ok}$`
  });
  const sysTex = (rows) => `$\\begin{aligned}${rows.map(([l, r]) => `${l} &= ${r}`).join('\\\\ ')}\\end{aligned}$`;
  const L = (b) => (b === 10 ? '\\log' : `\\log_{${b}}`);

  /* ---------- pomocné funkcie pre obrázky ---------- */

  const nm = (v) => (Number.isInteger(v) ? String(v) : sk(v, 1)).replace('-', '−');
  const shiftX = (m) => (m === 0 ? 'x' : `x ${m > 0 ? '−' : '+'} ${nm(Math.abs(m))}`);
  const tailN = (n) => (n === 0 ? '' : ` ${n > 0 ? '+' : '−'} ${nm(Math.abs(n))}`);

  // krivka po častiach: zlomí sa v bodoch breaks (asymptoty) a vynechá body, kde funkcia nie je definovaná
  const pieces = (p, fn, breaks = [], steps = 300) => {
    const cuts = [p.xmin, ...breaks.filter((b) => b > p.xmin && b < p.xmax).sort((a, b) => a - b), p.xmax];
    let d = '';
    for (let k = 0; k < cuts.length - 1; k++) {
      const lo = cuts[k] + (k ? 1e-4 : 0), hi = cuts[k + 1] - (k < cuts.length - 2 ? 1e-4 : 0);
      let pen = false;
      for (let i = 0; i <= steps; i++) {
        const x = lo + (hi - lo) * i / steps, y = fn(x);
        if (!Number.isFinite(y)) { pen = false; continue; }
        const yc = Math.max(Math.min(y, p.ymax + 20), p.ymin - 20);
        d += `${pen ? 'L' : 'M'}${n1(p.X(x))} ${n1(p.Y(yc))}`;
        pen = true;
      }
    }
    return d;
  };
  const vline = (p, x, cls = 'f-dash') => `<line class="${cls}" x1="${n1(p.X(x))}" y1="${n1(p.Y(p.ymin))}" x2="${n1(p.X(x))}" y2="${n1(p.Y(p.ymax))}"/>`;
  const hline = (p, y, cls = 'f-dash') => `<line class="${cls}" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(y))}" x2="${n1(p.X(p.xmax))}" y2="${n1(p.Y(y))}"/>`;
  const dot = (p, x, y, cls = 'f-dot', r = 5) => `<circle class="${cls}" cx="${n1(p.X(x))}" cy="${n1(p.Y(y))}" r="${r}"/>`;

  /* ---------- obrázky ---------- */

  fig('s2-znamienka', {
    draw: () => {
      const p = plane(-3, 5, -5, 6, 420, 280);
      const X = (x) => n1(p.X(x)), Y = (y) => n1(p.Y(y));
      const clipped = `<path class="f-accent" d="${curvePath(p, (x) => (x + 1) * (x - 3))}"/>`;
      const front = `<line class="f-ok" x1="${X(-3)}" y1="${Y(0)}" x2="${X(-1)}" y2="${Y(0)}"/>
        <line class="f-ok" x1="${X(3)}" y1="${Y(0)}" x2="${X(5)}" y2="${Y(0)}"/>
        <line class="f-warn" x1="${X(-1)}" y1="${Y(0)}" x2="${X(3)}" y2="${Y(0)}"/>
        ${dot(p, -1, 0)}${dot(p, 3, 0)}
        <text class="f-math c-ok" x="${X(-2.2)}" y="${Y(1.2)}" text-anchor="middle">+</text>
        <text class="f-math c-ok" x="${X(4.2)}" y="${Y(1.2)}" text-anchor="middle">+</text>
        <text class="f-math" x="${X(1)}" y="${Y(-2)}" text-anchor="middle">−</text>`;
      return svg(p, axes(p), clipped, front, 'Znamienko kvadratického trojčlena na intervaloch');
    }
  });

  fig('s2-sustava', {
    draw: () => {
      const panel = (ox, body, label) => `<rect class="f-cell" x="${ox}" y="10" width="140" height="120"/>${body}
        <text class="f-small" x="${ox + 70}" y="150" text-anchor="middle">${label}</text>`;
      return `<svg viewBox="0 0 500 160" role="img" aria-label="Tri prípady riešenia sústavy dvoch lineárnych rovníc">
        ${panel(20, `<line class="f-accent" x1="30" y1="120" x2="150" y2="20"/><line class="f-ok" x1="30" y1="30" x2="150" y2="110"/>
          <circle class="f-dot" cx="90" cy="70" r="5"/>`, 'jedno riešenie')}
        ${panel(180, `<line class="f-accent" x1="190" y1="110" x2="310" y2="50"/><line class="f-ok" x1="190" y1="80" x2="310" y2="20"/>`, 'žiadne riešenie')}
        ${panel(340, `<line class="f-accent" x1="350" y1="115" x2="470" y2="25"/><line class="f-dash" x1="350" y1="115" x2="470" y2="25"/>`, 'nekonečne veľa riešení')}</svg>`;
    }
  });

  fig('s2-abs', {
    draw: () => {
      const X = (k) => 40 + (k + 3) * 38;
      let s = `<svg viewBox="0 0 460 110" role="img" aria-label="Absolútna hodnota ako vzdialenosť na číselnej osi">
        <rect class="f-fill" x="${X(-1)}" y="64" width="${X(5) - X(-1)}" height="14"/>
        <line class="f-line" x1="20" y1="71" x2="440" y2="71"/><path class="f-solid" d="M448 71 l-10 -5 v10 z"/>`;
      for (let k = -3; k <= 7; k++) {
        s += `<line class="f-thin" x1="${X(k)}" y1="65" x2="${X(k)}" y2="77"/><text class="f-small" x="${X(k)}" y="96" text-anchor="middle">${k}</text>`;
      }
      const m1 = (X(-1) + X(2)) / 2, m2 = (X(2) + X(5)) / 2;
      return s + `<path class="f-warn" d="M${X(-1)} 60 Q${m1} 14 ${X(2)} 60"/><path class="f-warn" d="M${X(2)} 60 Q${m2} 14 ${X(5)} 60"/>
        <text class="f-text" x="${m1}" y="30" text-anchor="middle">3</text><text class="f-text" x="${m2}" y="30" text-anchor="middle">3</text>
        <circle class="f-dot f-dot-ok" cx="${X(2)}" cy="71" r="6"/>
        <circle class="f-dot" cx="${X(-1)}" cy="71" r="6"/><circle class="f-dot" cx="${X(5)}" cy="71" r="6"/></svg>`;
    }
  });

  fig('s2-graf-dh', {
    draw: () => {
      const p = plane(-5, 6, -4, 5, 400, 300);
      const P = [[-3, 1], [-1, 3], [1, -2], [3, 0], [4, 1]];
      const d = P.map(([x, y], i) => `${i ? 'L' : 'M'}${n1(p.X(x))} ${n1(p.Y(y))}`).join('');
      const front = `<line class="f-ok" x1="${n1(p.X(-3))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(4))}" y2="${n1(p.Y(0))}"/>
        <line class="f-warn" x1="${n1(p.X(0))}" y1="${n1(p.Y(-2))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(3))}"/>
        <line class="f-dash" x1="${n1(p.X(-1))}" y1="${n1(p.Y(3))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(3))}"/>
        <line class="f-dash" x1="${n1(p.X(1))}" y1="${n1(p.Y(-2))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(-2))}"/>
        <line class="f-dash" x1="${n1(p.X(-3))}" y1="${n1(p.Y(1))}" x2="${n1(p.X(-3))}" y2="${n1(p.Y(0))}"/>
        <line class="f-dash" x1="${n1(p.X(4))}" y1="${n1(p.Y(1))}" x2="${n1(p.X(4))}" y2="${n1(p.Y(0))}"/>
        <path class="f-accent" d="${d}"/>${dot(p, -3, 1)}${dot(p, 4, 1)}
        <text class="f-text c-ok" x="${n1(p.X(4.4))}" y="${n1(p.Y(0) - 8)}">D(f)</text>
        <text class="f-text" x="${n1(p.X(0) + 8)}" y="${n1(p.Y(4))}">H(f)</text>`;
      return svg(p, axes(p), '', front, 'Graf funkcie s vyznačeným definičným oborom a oborom hodnôt');
    }
  });

  fig('s2-hyperbola', {
    controls: [
      { id: 'k', label: 'k', min: -6, max: 6, step: 1, value: 2 },
      { id: 'm', label: 'm', min: -3, max: 3, step: 1, value: 0 },
      { id: 'n', label: 'n', min: -3, max: 3, step: 1, value: 0 }
    ],
    draw: (v) => {
      const p = plane(-7, 7, -7, 7, 360, 360);
      const { k, m, n } = v;
      if (k === 0) {
        return { svg: svg(p, axes(p), `<path class="f-accent" d="${pieces(p, () => n, [], 2)}"/>`, '', 'Graf konštantnej funkcie'),
          readout: `k = 0: y = ${nm(n)} je konštantná funkcia, nie hyperbola` };
      }
      const clipped = `${vline(p, m)}${hline(p, n)}<path class="f-accent" d="${pieces(p, (x) => k / (x - m) + n, [m])}"/>${dot(p, m, n, 'f-vertex', 4)}`;
      const quad = k > 0 ? 'I. a III.' : 'II. a IV.';
      const where = m === 0 && n === 0 ? `vetvy v ${quad} kvadrante` : `D = ℝ ∖ {${nm(m)}}, H = ℝ ∖ {${nm(n)}}`;
      return {
        svg: svg(p, axes(p), clipped, '', 'Graf funkcie k/(x − m) + n'),
        readout: `y = ${nm(k)}/${m === 0 ? 'x' : `(${shiftX(m)})`}${tailN(n)} · stred S[${nm(m)}; ${nm(n)}] · asymptoty x = ${nm(m)}, y = ${nm(n)} · ${where}`
      };
    }
  });

  fig('s2-vrchol', {
    controls: [
      { id: 'a', label: 'a', min: -3, max: 3, step: 0.5, value: 1 },
      { id: 'm', label: 'm', min: -4, max: 4, step: 1, value: 1 },
      { id: 'n', label: 'n', min: -5, max: 5, step: 1, value: -2 }
    ],
    draw: (v) => {
      const p = plane(-7, 7, -7, 7, 360, 360);
      const { a, m, n } = v;
      const clipped = `<path class="f-thin" d="${curvePath(p, (x) => x * x)}"/>${vline(p, m)}
        <path class="f-accent" d="${curvePath(p, (x) => a * (x - m) * (x - m) + n)}"/>${dot(p, m, n, 'f-vertex', 5)}`;
      const sq = m === 0 ? 'x²' : `(${shiftX(m)})²`;
      const ca = a === 1 ? '' : a === -1 ? '−' : nm(a);
      const readout = a === 0
        ? `a = 0: y = ${nm(n)} nie je kvadratická funkcia (graf je priamka)`
        : `y = ${ca}${sq}${tailN(n)} · V[${nm(m)}; ${nm(n)}] · ${a > 0 ? `otvorená nahor, minimum ${nm(n)}, H = ⟨${nm(n)}; ∞)` : `otvorená nadol, maximum ${nm(n)}, H = (−∞; ${nm(n)}⟩`}`;
      return { svg: svg(p, axes(p), clipped, '', 'Parabola vo vrcholovom tvare'), readout };
    }
  });

  const TBASE = [
    { name: 'x²', fn: (x) => x * x, br: [], g: (s) => (s === 'x' ? 'x²' : `(${s})²`), key: 'vrchol' },
    { name: '|x|', fn: Math.abs, br: [], g: (s) => `|${s}|`, key: 'vrchol' },
    { name: '√x', fn: (x) => (x < 0 ? NaN : Math.sqrt(x)), br: [0], g: (s) => (s === 'x' ? '√x' : `√(${s})`), key: 'začiatočný bod' },
    { name: '1/x', fn: (x) => 1 / x, br: [0], g: (s) => (s === 'x' ? '1/x' : `1/(${s})`), key: 'stred' },
    { name: '2ˣ', fn: (x) => Math.pow(2, x), br: [], g: (s) => `2^(${s})`, key: 'bod' }
  ];

  fig('s2-transformacie', {
    controls: [
      { id: 'f', label: 'funkcia f (1 až 5)', min: 1, max: 5, step: 1, value: 1 },
      { id: 'a', label: 'a', min: -2, max: 2, step: 0.5, value: 1 },
      { id: 'm', label: 'm', min: -4, max: 4, step: 1, value: 2 },
      { id: 'n', label: 'n', min: -4, max: 4, step: 1, value: -1 }
    ],
    draw: (v) => {
      const p = plane(-7, 7, -7, 7, 360, 360);
      const B = TBASE[v.f - 1], { a, m, n } = v;
      const g = (x) => a * B.fn(x - m) + n;
      let extra = '';
      if (v.f === 4) extra = vline(p, m) + hline(p, n);
      if (v.f === 5) extra = hline(p, n);
      const ky = v.f === 5 ? a + n : n;
      const clipped = `${extra}<path class="f-thin" d="${pieces(p, B.fn, B.br)}"/>
        <path class="f-accent" d="${pieces(p, g, B.br.map((b) => b + m))}"/>${dot(p, m, ky, 'f-vertex', 5)}`;
      const ca = a === 1 ? '' : a === -1 ? '−' : `${nm(a)}·`;
      const gtxt = a === 0 ? nm(n) : `${ca}${B.g(m === 0 ? 'x' : shiftX(m))}${tailN(n)}`;
      return {
        svg: svg(p, axes(p), clipped, '', 'Transformácia grafu funkcie'),
        readout: `f(x) = ${B.name} · g(x) = ${a === 0 ? nm(n) : `${ca}f(${shiftX(m)})${tailN(n)}`} = ${gtxt} · ${B.key} [${nm(m)}; ${nm(ky)}]`
      };
    }
  });

  fig('s2-mocnina', {
    controls: [{ id: 'n', label: 'exponent n', min: -4, max: 5, step: 1, value: 3 }],
    draw: (v) => {
      const p = plane(-3, 3, -4, 4, 360, 320);
      const n = v.n, odd = Math.abs(n) % 2 === 1;
      const clipped = `<path class="f-accent" d="${pieces(p, (x) => Math.pow(x, n), n <= 0 ? [0] : [])}"/>
        ${dot(p, 1, 1)}${dot(p, -1, Math.pow(-1, n))}`;
      let props;
      if (n === 0) props = 'y = 1 pre x ≠ 0 · D = ℝ ∖ {0}';
      else {
        const D = n > 0 ? 'ℝ' : 'ℝ ∖ {0}';
        const H = n > 0 ? (odd ? 'ℝ' : '⟨0; ∞)') : (odd ? 'ℝ ∖ {0}' : '(0; ∞)');
        props = `${odd ? 'nepárna' : 'párna'} · D = ${D} · H = ${H}`;
      }
      return { svg: svg(p, axes(p), clipped, '', 'Graf mocninovej funkcie'), readout: `y = x<sup>${nm(n)}</sup> · ${props}` };
    }
  });

  fig('s2-exp-log', {
    controls: [{ id: 'a', label: 'základ a', min: 0.2, max: 4, step: 0.1, value: 2 }],
    draw: (v) => {
      const p = plane(-4, 6, -4, 6, 360, 360);
      const a = v.a, one = Math.abs(a - 1) < 1e-9;
      let clipped = `<line class="f-dash" x1="${n1(p.X(-4))}" y1="${n1(p.Y(-4))}" x2="${n1(p.X(6))}" y2="${n1(p.Y(6))}"/>
        <path class="f-accent" d="${curvePath(p, (x) => Math.pow(a, x))}"/>${dot(p, 0, 1)}`;
      if (!one) clipped += `<path class="f-ok" d="${pieces(p, (x) => Math.log(x) / Math.log(a), [0])}"/>${dot(p, 1, 0, 'f-dot f-dot-ok')}`;
      const kind = a > 1 ? 'obe rastúce' : 'obe klesajúce';
      return {
        svg: svg(p, axes(p), clipped, '', 'Exponenciálna a logaritmická funkcia'),
        readout: one ? 'a = 1: y = 1ˣ = 1 je konštantná, logaritmus so základom 1 neexistuje'
          : `a = ${sk(a, 1)} · <span class="c-accent">y = aˣ</span> a <span class="c-ok">y = logₐ x</span> sú ${kind} · súmerné podľa priamky y = x`
      };
    }
  });

  fig('s2-euklid', {
    draw: () => `<svg viewBox="0 0 420 260" role="img" aria-label="Pravouhlý trojuholník s výškou na preponu a úsekmi prepony">
      <polygon class="f-tri" points="30,200 390,200 260.4,27.2"/>
      <line class="f-ok" x1="30" y1="200" x2="260.4" y2="200"/>
      <line class="f-accent" x1="260.4" y1="200" x2="390" y2="200"/>
      <line class="f-dash" x1="260.4" y1="27.2" x2="260.4" y2="200"/>
      <path class="f-thin" d="M249.2 35.6 L257.6 46.8 L268.8 38.4"/>
      <path class="f-thin" d="M248.4 200 V188 H260.4"/>
      <text class="f-math" x="14" y="214">A</text><text class="f-math" x="396" y="214">B</text>
      <text class="f-math" x="254" y="20">C</text><text class="f-math" x="254" y="222">P</text>
      <text class="f-math" x="338" y="110">a</text><text class="f-math" x="128" y="106" text-anchor="end">b</text>
      <text class="f-math" x="268" y="124">v</text>
      <text class="f-math c-ok" x="145" y="224" text-anchor="middle">c<tspan font-size="12" dy="4">b</tspan></text>
      <text class="f-math c-accent" x="325" y="224" text-anchor="middle">c<tspan font-size="12" dy="4">a</tspan></text>
      <text class="f-math" x="210" y="252" text-anchor="middle">c = c<tspan font-size="12" dy="4">a</tspan><tspan dy="-4"> + c</tspan><tspan font-size="12" dy="4">b</tspan></text></svg>`
  });

  fig('s2-uhly', {
    draw: () => `<svg viewBox="0 0 460 222" role="img" aria-label="Stredový a obvodový uhol, Talesova kružnica">
      <circle class="f-line" cx="110" cy="110" r="85"/>
      <line class="f-thin" x1="36.4" y1="152.5" x2="183.6" y2="152.5"/>
      <line class="f-accent" x1="110" y1="110" x2="36.4" y2="152.5"/><line class="f-accent" x1="110" y1="110" x2="183.6" y2="152.5"/>
      <line class="f-ok" x1="95.2" y1="26.3" x2="36.4" y2="152.5"/><line class="f-ok" x1="95.2" y1="26.3" x2="183.6" y2="152.5"/>
      <path class="f-warn" d="M92.7 120 A20 20 0 0 0 127.3 120"/>
      <path class="f-warn" d="M85.9 46.2 A22 22 0 0 0 107.8 44.3"/>
      <circle class="f-solid" cx="110" cy="110" r="3"/>
      <text class="f-math" x="110" y="146" text-anchor="middle" font-size="14">2α</text>
      <text class="f-math" x="97" y="66" text-anchor="middle">α</text>
      <text class="f-math" x="20" y="168">A</text><text class="f-math" x="188" y="168">B</text>
      <text class="f-math" x="86" y="20">V</text><text class="f-math" x="116" y="106">S</text>
      <circle class="f-line" cx="340" cy="110" r="85"/>
      <line class="f-accent" x1="255" y1="110" x2="425" y2="110"/>
      <line class="f-ok" x1="255" y1="110" x2="382.5" y2="36.4"/><line class="f-ok" x1="425" y1="110" x2="382.5" y2="36.4"/>
      <path class="f-thin" d="M372.1 42.4 L378.1 52.8 L388.5 46.8"/>
      <circle class="f-solid" cx="340" cy="110" r="3"/>
      <text class="f-math" x="238" y="116">A</text><text class="f-math" x="430" y="116">B</text>
      <text class="f-math" x="382" y="28">C</text><text class="f-math" x="334" y="130">S</text>
      <text class="f-small" x="110" y="214" text-anchor="middle">stredový uhol 2α, obvodový uhol α</text>
      <text class="f-small" x="340" y="214" text-anchor="middle">Talesova kružnica: uhol pri C je pravý</text></svg>`
  });

  fig('s2-telesa', {
    draw: () => `<svg viewBox="0 0 480 236" role="img" aria-label="Pravidelný štvorboký ihlan a rotačný kužeľ s vyznačenými rozmermi">
      <path class="f-dash" fill="none" d="M30 190 L70 160 L210 160 M70 160 L120 40"/>
      <polygon class="f-fill3 f-outline3" points="120,40 30,190 170,190"/>
      <polygon class="f-fill2 f-outline2" points="120,40 170,190 210,160"/>
      <line class="f-dash" x1="120" y1="40" x2="120" y2="175"/>
      <line class="f-ok" x1="120" y1="40" x2="100" y2="190"/>
      <line class="f-thin" x1="120" y1="175" x2="100" y2="190"/>
      <text class="f-math" x="125" y="128">v</text>
      <text class="f-math c-ok" x="94" y="112" text-anchor="end">v<tspan font-size="12" dy="4">s</tspan></text>
      <text class="f-math" x="100" y="212" text-anchor="middle">a</text>
      <path class="f-fill f-outline" d="M290 185 L360 40 L430 185 A70 18 0 0 1 290 185 Z"/>
      <path class="f-dash" fill="none" d="M290 185 A70 18 0 0 1 430 185"/>
      <line class="f-dash" x1="360" y1="40" x2="360" y2="185"/>
      <line class="f-accent" x1="360" y1="185" x2="430" y2="185"/>
      <line class="f-ok" x1="360" y1="40" x2="430" y2="185"/>
      <text class="f-math" x="366" y="128">v</text>
      <text class="f-math c-accent" x="395" y="179" text-anchor="middle">r</text>
      <text class="f-math c-ok" x="404" y="108">s</text>
      <text class="f-small" x="120" y="230" text-anchor="middle">pravidelný štvorboký ihlan</text>
      <text class="f-small" x="360" y="230" text-anchor="middle">rotačný kužeľ</text></svg>`
  });

  /* ---------- A. Algebra a rovnice ---------- */

  lesson({
    id: 's2-nerovnice', order: 20, topics: ['nerovnice'], title: 'Kvadratické nerovnice',
    summary: 'Riešenie nerovníc s kvadratickým trojčlenom pomocou koreňov, rozkladu a znamienka.',
    theory: [
      `<p>Kvadratická nerovnica má tvar $ax^2+bx+c&gt;0$ (prípadne so znakom $&lt;$, $\\ge$ alebo $\\le$), kde $a\\neq 0$. Riešime ju v troch krokoch:
       nájdeme korene príslušnej kvadratickej rovnice, trojčlen rozložíme na súčin $a(x-x_1)(x-x_2)$ a určíme jeho znamienko na intervaloch, na ktoré korene rozdelia číselnú os.</p>`,
      { fig: 's2-znamienka', caption: 'Graf funkcie $y=x^2-2x-3=(x+1)(x-3)$. Nad osou $x$ (znamienko $+$) leží pre $x&lt;-1$ a $x&gt;3$, pod osou (znamienko $-$) pre $-1&lt;x&lt;3$.' },
      `<p><strong>Pravidlo pre dva rôzne korene $x_1&lt;x_2$:</strong> ak $a&gt;0$, parabola je otvorená nahor, trojčlen je <em>záporný medzi koreňmi</em> a kladný mimo nich. Pri $a&lt;0$ je to naopak.
       Pri neostrých nerovnostiach ($\\le$, $\\ge$) korene do riešenia patria a interval je pri nich uzavretý: $\\langle x_1; x_2\\rangle$; pri ostrých nerovnostiach nepatria: $(x_1; x_2)$.</p>`,
      `<p>Ak $D&lt;0$, parabola os $x$ nepretína a trojčlen má pre každé $x$ rovnaké znamienko ako $a$; riešením je celé $\\mathbb{R}$ alebo prázdna množina $\\emptyset$.
       Ak $D=0$, trojčlen je $a(x-x_0)^2$ a nulový je len v bode $x_0$. Takýto prípad najľahšie odhalíme doplnením na štvorec.</p>`
    ],
    examples: [
      { task: 'Vyrieš v $\\mathbb{R}$ nerovnicu $x^2-2x-3\\le 0$.',
        steps: ['Korene rovnice $x^2-2x-3=0$: $D=4+12=16$, $x_{1,2}=\\frac{2\\pm 4}{2}$, teda $x_1=-1$, $x_2=3$.',
          'Rozklad: $(x+1)(x-3)\\le 0$.',
          'Koeficient $a=1$ je kladný, trojčlen je nekladný medzi koreňmi vrátane nich.',
          '<strong>$K=\\langle -1; 3\\rangle$</strong>'] },
      { task: 'Vyrieš v $\\mathbb{R}$ nerovnicu $-2x^2+2x+12&lt;0$.',
        steps: ['Vydelíme číslom $-2$ a otočíme znak nerovnosti: $x^2-x-6&gt;0$.',
          'Korene: $x^2-x-6=(x+2)(x-3)$, teda $x_1=-2$, $x_2=3$.',
          'Pri $a=1&gt;0$ je trojčlen kladný mimo koreňov.',
          '<strong>$K=(-\\infty; -2)\\cup(3; \\infty)$</strong>'] }
    ]
  });

  gen('s2-nerovnice', () => {
    const t = Math.random();
    const inT = (r1, r2, cl) => iv(r1, r2, cl, cl);
    const outT = (r1, r2, cl) => `${iv('-' + INF, r1, false, cl)}\\cup${iv(r2, INF, cl, false)}`;
    if (t < 0.5) {
      let r1, r2;
      do { r1 = rnd(-6, 6); r2 = rnd(-6, 6); } while (r2 <= r1);
      const a = pick([1, 1, -1, 2, -2]);
      const rel = rnd(0, 3), strict = rel < 2, gt = rel % 2 === 0, cl = !strict;
      const cs = [a, -a * (r1 + r2), a * r1 * r2];
      const outside = (a > 0) === gt;
      const ok = outside ? outT(r1, r2, cl) : inT(r1, r2, cl);
      const wrong = outside
        ? [inT(r1, r2, cl), outT(r1, r2, !cl), outT(-r2, -r1, cl), inT(r1, r2, !cl)]
        : [outT(r1, r2, cl), inT(r1, r2, !cl), inT(-r2, -r1, cl), outT(r1, r2, !cl)];
      return Object.assign(choice(ok, wrong), {
        q: `Vyrieš v $${R}$ nerovnicu $${poly(cs)} ${RELS[rel]} 0$.`,
        solution: `Korene rovnice $${poly(cs)} = 0$ sú $x_1 = ${r1}$ a $x_2 = ${r2}$, teda $${poly(cs)} = ${coef(a)}${r2 === 0 ? 'x' + fac(r1) : fac(r1) + fac(r2)}$.
          Koeficient $a = ${a}$ je ${a > 0 ? 'kladný, parabola je otvorená nahor' : 'záporný, parabola je otvorená nadol'}: trojčlen je ${a > 0 ? 'záporný' : 'kladný'} medzi koreňmi a ${a > 0 ? 'kladný' : 'záporný'} mimo nich.
          Hľadáme, kde je ${gt ? 'kladný' : 'záporný'}${strict ? '' : ' alebo nulový (korene do riešenia patria)'}, preto $K = ${ok}$.`,
        hint: 'Nájdi korene, rozlož trojčlen na súčin a urči, kde je kladný a kde záporný. Pozor na znamienko koeficientu pri $x^2$.'
      });
    }
    if (t < 0.75) {
      let r1, r2;
      do { r1 = rnd(-7, 5); r2 = r1 + rnd(2, 8); } while (r2 > 9);
      const a = pick([1, -1]), strict = Math.random() < 0.5;
      const rel = a > 0 ? (strict ? 1 : 3) : (strict ? 0 : 2);
      const cs = [a, -a * (r1 + r2), a * r1 * r2];
      const lo = strict ? r1 + 1 : r1, hi = strict ? r2 - 1 : r2, cnt = hi - lo + 1;
      const list = hi - lo <= 3 ? Array.from({ length: cnt }, (_, i) => lo + i).join(';\\ ') : `${lo};\\ ${lo + 1};\\ \\dots;\\ ${hi}`;
      return {
        answer: cnt,
        q: `Koľko celých čísel vyhovuje nerovnici $${poly(cs)} ${RELS[rel]} 0$?`,
        solution: `Korene trojčlena sú $${r1}$ a $${r2}$. Koeficient pri $x^2$ je ${a > 0 ? 'kladný, trojčlen je teda záporný' : 'záporný, trojčlen je teda kladný'} medzi koreňmi.
          Riešením je $${iv(r1, r2, !strict, !strict)}$. Celé čísla v ňom sú $${list}$, spolu $${cnt}$.`,
        hint: 'Najprv urči interval riešení, potom spočítaj celé čísla v ňom. Pozor, či krajné body do riešenia patria.'
      };
    }
    const m = rnd(-5, 5), k = Math.random() < 0.5 ? 0 : rnd(1, 6), a = pick([1, -1]), rel = rnd(0, 3);
    const cs = [a, -2 * a * m, a * (m * m + k)];
    const P = (v) => [v > 0, v < 0, v >= 0, v <= 0][rel];
    const pg = P(a), pz = k === 0 ? P(0) : pg;
    const NONE = '\\emptyset', PT = `\\{${m}\\}`, MINUS = `${R}\\setminus\\{${m}\\}`;
    const ok = pg ? (pz ? R : MINUS) : (pz ? PT : NONE);
    const sq = m === 0 ? 'x^2' : `(${lin(m)})^2`;
    const form = a > 0 ? `${sq}${term(k)}` : (k ? `-\\left[${sq}${term(k)}\\right]` : `-${sq}`);
    const about = k > 0
      ? `Výraz $${sq}${term(k)}$ je vždy aspoň $${k}$, teda kladný${a < 0 ? ', a ľavá strana je preto vždy záporná' : ''}.`
      : `Výraz $${sq}$ je nezáporný a nulový iba pre $x = ${m}$${a < 0 ? ', ľavá strana je preto nekladná a nulová iba v tomto bode' : ''}.`;
    return Object.assign(choice(ok, [R, NONE, PT, MINUS]), {
      q: `Vyrieš v $${R}$ nerovnicu $${poly(cs)} ${RELS[rel]} 0$.`,
      solution: `Diskriminant je $D = ${-4 * k}$${k ? ' (záporný)' : ''}. Doplníme na štvorec: $${poly(cs)} = ${form}$. ${about} Preto $K = ${ok}$.`,
      hint: 'Vypočítaj diskriminant. Ak $D\\le 0$, doplň trojčlen na štvorec a zisti, aké znamienko môže mať.'
    });
  });

  lesson({
    id: 's2-sustavy', order: 30, topics: ['sustavy', 'rovnice'], title: 'Sústavy lineárnych rovníc a rovnice s parametrom',
    summary: 'Sčítacia a dosadzovacia metóda, sústavy troch rovníc, počet riešení a úlohy s parametrom.',
    theory: [
      `<p>Sústavu dvoch lineárnych rovníc s dvoma neznámymi riešime <strong>dosadzovacou metódou</strong> (z jednej rovnice vyjadríme neznámu a dosadíme do druhej)
       alebo <strong>sčítacou metódou</strong> (rovnice vynásobíme vhodnými číslami tak, aby sa po sčítaní jedna neznáma vyrušila). Riešením je usporiadaná dvojica $[x; y]$.</p>`,
      { fig: 's2-sustava', caption: 'Každá rovnica $ax+by=c$ (s $a$, $b$ nie súčasne nulovými) je priamka. Sústava má jedno riešenie (priamky sa pretínajú), žiadne riešenie (rovnobežné rôzne priamky) alebo nekonečne veľa riešení (priamky splývajú).' },
      `<p>Sústavu $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$ má práve jedno riešenie, ak $a_1b_2-a_2b_1\\neq 0$. Ak $a_1b_2-a_2b_1=0$, ľavé strany sú násobkami
       a sústava má buď nekonečne veľa riešení (aj pravé strany sú v rovnakom pomere), alebo žiadne. <strong>Sústavu troch rovníc s tromi neznámymi</strong> riešime elimináciou:
       postupne odstraňujeme neznáme, až zostane jedna rovnica s jednou neznámou. Pri súmerných sústavách pomôže sčítať všetky rovnice.</p>`,
      `<p><strong>Rovnica s parametrom</strong> obsahuje okrem neznámej aj písmeno (parameter), ktoré zastupuje ľubovoľné číslo; riešenie závisí od jeho hodnoty.
       Pri rovnici $ax=b$: ak $a\\neq 0$, má jediné riešenie $x=\\frac{b}{a}$; ak $a=0$ a $b=0$, vyhovuje každé $x$; ak $a=0$ a $b\\neq 0$, nemá riešenie.
       O počte koreňov kvadratickej rovnice s parametrom rozhoduje diskriminant.</p>`
    ],
    examples: [
      { task: 'Vyrieš sústavu $\\begin{aligned}3x+2y&amp;=7\\\\ 2x-y&amp;=7\\end{aligned}$',
        steps: ['Druhú rovnicu vynásobíme dvoma: $4x-2y=14$.',
          'Sčítame s prvou rovnicou: $7x=21$, teda $x=3$.',
          'Dosadíme do druhej rovnice: $6-y=7$, teda $y=-1$.',
          'Skúška v prvej rovnici: $9-2=7$ ✓',
          '<strong>$[x; y]=[3; -1]$</strong>'] },
      { task: 'Pre ktorú hodnotu parametra $m$ má rovnica $x^2+6x+m=0$ dvojnásobný koreň? Aký je to koreň?',
        steps: ['Dvojnásobný koreň je práve vtedy, keď $D=0$.',
          '$D=36-4m=0$, teda $m=9$.',
          'Rovnica $x^2+6x+9=(x+3)^2=0$ má dvojnásobný koreň $x=-3$.',
          'Pre $m&lt;9$ má rovnica dva rôzne korene, pre $m&gt;9$ nemá reálny koreň.'] }
    ]
  });

  gen('s2-sustavy', () => {
    const t = Math.random();
    const lhs = (a, b) => `${lead(a, 'x')}${term(b, 'y')}`;
    if (t < 0.35) {
      let a1, b1, a2, b2;
      do { a1 = nz(-5, 5); b1 = nz(-5, 5); a2 = nz(-5, 5); b2 = nz(-5, 5); } while (a1 * b2 - a2 * b1 === 0);
      const x = rnd(-6, 6), y = rnd(-6, 6), c1 = a1 * x + b1 * y, c2 = a2 * x + b2 * y, D = a1 * b2 - a2 * b1;
      const mid = a1 * x ? `${c1}${term(-a1 * x)} = ` : '';
      return {
        type: 'tuple', signed: true, answer: [x, y], placeholder: 'x; y',
        q: `Vyrieš sústavu rovníc ${sysTex([[lhs(a1, b1), c1], [lhs(a2, b2), c2]])} Zadaj $x$ a $y$ oddelené bodkočiarkou.`,
        solution: `Odstránime $y$: prvú rovnicu vynásobíme číslom $${b2}$, druhú číslom $${b1}$ a odčítame ich. Dostaneme $${lead(D, 'x')} = ${c1 * b2 - c2 * b1}$, teda $x = ${x}$.
          Z prvej rovnice: $${lead(b1, 'y')} = ${mid}${c1 - a1 * x}$, teda $y = ${y}$. Riešenie: $[x; y] = [${x}; ${y}]$.`,
        hint: 'Vynásob rovnice vhodnými číslami tak, aby sa po sčítaní alebo odčítaní jedna neznáma vyrušila.'
      };
    }
    if (t < 0.6) {
      const x = rnd(-5, 5), y = rnd(-5, 5), z = rnd(-5, 5);
      const base = { type: 'tuple', signed: true, answer: [x, y, z], placeholder: 'x; y; z' };
      if (Math.random() < 0.5) {
        const p = x + y, q = y + z, r = z + x, S = x + y + z;
        return Object.assign(base, {
          q: `Vyrieš sústavu rovníc ${sysTex([['x + y', p], ['y + z', q], ['x + z', r]])} Zadaj $x$, $y$ a $z$ oddelené bodkočiarkou.`,
          solution: `Sčítame všetky tri rovnice: $2(x + y + z) = ${p + q + r}$, teda $x + y + z = ${S}$. Od tohto súčtu odčítame jednotlivé rovnice:
            $z = ${S} - ${par(p)} = ${z}$, $x = ${S} - ${par(q)} = ${x}$, $y = ${S} - ${par(r)} = ${y}$.`,
          hint: 'Sčítaj všetky tri rovnice – dostaneš súčet $x + y + z$.'
        });
      }
      const s = x + y + z, u = x - y + z, w = x + y - z;
      return Object.assign(base, {
        q: `Vyrieš sústavu rovníc ${sysTex([['x + y + z', s], ['x - y + z', u], ['x + y - z', w]])} Zadaj $x$, $y$ a $z$ oddelené bodkočiarkou.`,
        solution: `Odčítame druhú rovnicu od prvej: $2y = ${s - u}$, teda $y = ${y}$. Odčítame tretiu rovnicu od prvej: $2z = ${s - w}$, teda $z = ${z}$.
          Z prvej rovnice: $x = ${s} - ${par(y)} - ${par(z)} = ${x}$.`,
        hint: 'Odčítaj rovnice od seba tak, aby v rozdiele zostala jediná neznáma.'
      });
    }
    if (t < 0.8) {
      const p = nz(-4, 4), q = nz(-4, 4), k = nz(-3, 3), m = k * p, k1 = k * q, c2 = rnd(-9, 9);
      let c1;
      do { c1 = rnd(-9, 9); } while (c1 === k * c2);
      return {
        signed: true, answer: m,
        q: `Pre ktorú hodnotu parametra $m\\in${R}$ nemá sústava ${sysTex([[`mx${term(k1, 'y')}`, c1], [lhs(p, q), c2]])} riešenie?`,
        solution: `Sústava nemá práve jedno riešenie, ak $m\\cdot ${par(q)} - ${par(k1)}\\cdot ${par(p)} = 0$, odkiaľ ${eqSolve(q, k1 * p, 'm')}.
          Pre $m = ${m}$ je ľavá strana prvej rovnice ${k === 1 ? 'rovnaká ako ľavá strana druhej rovnice' : `$${k}$-násobkom ľavej strany druhej rovnice`}, ale $${c1}\\neq ${k}\\cdot ${par(c2)} = ${k * c2}$.
          Priamky sú rovnobežné a rôzne, sústava nemá riešenie.`,
        hint: 'Sústava $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$ nemá jediné riešenie, ak $a_1b_2-a_2b_1=0$. Potom over pravé strany.'
      };
    }
    const v = rnd(0, 2);
    if (v === 0) {
      const h = nz(-6, 6), b = 2 * h;
      return {
        answer: h * h,
        q: `Pre ktorú hodnotu parametra $m$ má rovnica $x^2${term(b, 'x')} + m = 0$ dvojnásobný koreň?`,
        solution: `Dvojnásobný koreň je pri $D = 0$: $D = ${b * b} - 4m = 0$, teda $m = ${h * h}$. Rovnica je potom $(${lin(-h)})^2 = 0$ s koreňom $x = ${-h}$.`,
        hint: 'Kvadratická rovnica má dvojnásobný koreň, ak je jej diskriminant nulový.'
      };
    }
    if (v === 1) {
      const x0 = nz(-5, 5), m = nz(-6, 6), c = -x0 * x0 - m * x0, x2 = -(x0 + m);
      return {
        type: 'tuple', signed: true, answer: [m, x2], placeholder: 'm; x₂',
        q: `Rovnica $x^2 + mx${term(c)} = 0$ má koreň $x_1 = ${x0}$. Urči parameter $m$ a druhý koreň $x_2$ (zadaj ich oddelené bodkočiarkou).`,
        solution: `Dosadíme $x_1$: $${x0 * x0}${term(x0, 'm')}${term(c)} = 0$, odkiaľ ${eqSolve(x0, -(x0 * x0) - c, 'm')}.
          Z Vietovho vzťahu $x_1 + x_2 = -m = ${-m}$ dostaneme $x_2 = ${-m} - ${par(x0)} = ${x2}$.`,
        hint: 'Koreň musí rovnicu spĺňať – dosaď ho za $x$. Druhý koreň nájdeš z Vietových vzťahov.'
      };
    }
    const a = rnd(1, 6), none = Math.random() < 0.5;
    return {
      signed: true, answer: none ? -a : a,
      q: `Pre ktorú hodnotu parametra $m$ ${none ? 'nemá rovnica' : 'má rovnica'} $(m^2 - ${a * a})x = m - ${a}$ ${none ? 'riešenie' : 'nekonečne veľa riešení'}?`,
      solution: `Ak $m^2 - ${a * a}\\neq 0$, má rovnica jediné riešenie $x = \\frac{m - ${a}}{(m - ${a})(m + ${a})} = \\frac{1}{m + ${a}}$. Koeficient pri $x$ je nulový pre $m = ${a}$ a $m = -${a}$.
        Pre $m = ${a}$ dostaneme $0\\cdot x = 0$ – vyhovuje každé $x$. Pre $m = -${a}$ dostaneme $0\\cdot x = ${-2 * a}$ – rovnica nemá riešenie. Odpoveď: $m = ${none ? -a : a}$.`,
      hint: 'Rozhoduje, kedy je koeficient pri $x$ nulový. Potom porovnaj pravú stranu s nulou.'
    };
  });

  lesson({
    id: 's2-absolutna', order: 40, topics: ['rovnice', 'nerovnice'], title: 'Rovnice a nerovnice s absolútnou hodnotou',
    summary: 'Absolútna hodnota ako vzdialenosť, metóda nulových bodov a overovanie koreňov.',
    theory: [
      `<p><strong>Absolútna hodnota</strong>: $|x| = x$ pre $x\\ge 0$ a $|x| = -x$ pre $x&lt;0$. Geometricky je $|x-a|$ vzdialenosť čísel $x$ a $a$ na číselnej osi.</p>`,
      { fig: 's2-abs', caption: 'Rovnica $|x-2|=3$: hľadáme čísla vzdialené od čísla $2$ presne o $3$, teda $x=-1$ a $x=5$. Nerovnici $|x-2|&lt;3$ vyhovujú čísla bližšie ako $3$, teda interval $(-1; 5)$.' },
      `<p><strong>Základné typy</strong> (pre $b&gt;0$): $|x-a|=b \\iff x=a\\pm b$; $\\ |x-a|&lt;b \\iff a-b&lt;x&lt;a+b$; $\\ |x-a|&gt;b \\iff x&lt;a-b$ alebo $x&gt;a+b$.
       Rovnica $|V|=b$ so záporným $b$ nemá riešenie.</p>`,
      `<p><strong>Metóda nulových bodov:</strong> nájdeme čísla, v ktorých sú výrazy v absolútnych hodnotách nulové. Tie rozdelia os na intervaly, na ktorých má každý výraz stále znamienko,
       takže absolútne hodnoty môžeme odstrániť. Na každom intervale rovnicu vyriešime a <em>overíme, či nájdené číslo do intervalu patrí</em>. Výsledok je zjednotenie riešení zo všetkých intervalov.</p>`
    ],
    examples: [
      { task: 'Vyrieš rovnicu $|x+1|+|x-3|=6$.',
        steps: ['Nulové body sú $-1$ a $3$.',
          'Pre $x&lt;-1$: $-(x+1)-(x-3)=6$, teda $-2x+2=6$ a $x=-2$. Patrí do intervalu ✓',
          'Pre $-1\\le x&lt;3$: $(x+1)-(x-3)=4$, čo sa nerovná $6$ – žiadne riešenie.',
          'Pre $x\\ge 3$: $(x+1)+(x-3)=6$, teda $2x-2=6$ a $x=4$ ✓',
          '<strong>$K=\\{-2; 4\\}$</strong>'] },
      { task: 'Vyrieš rovnicu $|x-3|=2x$.',
        steps: ['Pre $x\\ge 3$: $x-3=2x$, teda $x=-3$. Toto číslo nepatrí do $\\langle 3; \\infty)$, nie je koreňom.',
          'Pre $x&lt;3$: $3-x=2x$, teda $x=1$. Patrí do $(-\\infty; 3)$ ✓',
          'Skúška: $|1-3|=2=2\\cdot 1$ ✓',
          '<strong>$K=\\{1\\}$</strong>'] }
    ]
  });

  gen('s2-absolutna', () => {
    const t = Math.random();
    if (t < 0.3) {
      const k = pick([1, 1, 2, 3]);
      let x1, d;
      do { x1 = rnd(-7, 5); d = rnd(1, 8); } while ((k * d) % 2 !== 0);
      const x2 = x1 + d, b = k * d / 2, c = k * x1 + b;
      const inner = `${lead(k, 'x')}${term(-c)}`;
      return {
        type: 'set', signed: true, answer: [x1, x2], placeholder: 'x₁; x₂',
        q: `Vyrieš rovnicu $|${inner}| = ${b}$. Zadaj všetky korene oddelené bodkočiarkou.`,
        solution: `Výraz v absolútnej hodnote sa rovná $${b}$ alebo $-${b}$. Z $${inner} = ${b}$ dostaneme $x = ${x2}$, z $${inner} = -${b}$ dostaneme $x = ${x1}$. $K = \\{${x1}; ${x2}\\}$.`,
        hint: 'Rovnica $|V| = b$ pre $b\\gt 0$ znamená $V = b$ alebo $V = -b$.'
      };
    }
    if (t < 0.55) {
      const a = rnd(-5, 5), b = rnd(1, 6), rel = rnd(0, 3), strict = rel < 2, gt = rel % 2 === 0, cl = !strict;
      const lo = a - b, hi = a + b;
      const inT = (c) => iv(lo, hi, c, c), outT = (c) => `${iv('-' + INF, lo, false, c)}\\cup${iv(hi, INF, c, false)}`;
      const ok = gt ? outT(cl) : inT(cl);
      return Object.assign(choice(ok, gt ? [inT(cl), outT(!cl), inT(!cl)] : [outT(cl), inT(!cl), outT(!cl)]), {
        q: `Vyrieš nerovnicu $|${lin(a)}| ${RELS[rel]} ${b}$.`,
        solution: `$|${lin(a)}|$ je vzdialenosť čísla $x$ od čísla $${a}$. Hľadáme čísla, ktorých vzdialenosť od $${a}$ je ${['väčšia ako', 'menšia ako', 'aspoň', 'najviac'][rel]} $${b}$.
          Hranice sú $${a} - ${b} = ${lo}$ a $${a} + ${b} = ${hi}$${strict ? '' : ' a patria do riešenia'}, teda $K = ${ok}$.`,
        hint: 'Využi, že $|x - a|$ je vzdialenosť čísel $x$ a $a$ na číselnej osi.'
      });
    }
    if (t < 0.8) {
      const a = rnd(-5, 3), b = a + rnd(1, 5), r = rnd(1, 4), c = (b - a) + 2 * r;
      const x1 = a - r, x2 = b + r;
      return {
        type: 'set', signed: true, answer: [x1, x2], placeholder: 'x₁; x₂',
        q: `Vyrieš rovnicu $|${lin(a)}| + |${lin(b)}| = ${c}$. Zadaj všetky korene oddelené bodkočiarkou.`,
        solution: `Nulové body $${a}$ a $${b}$ rozdelia os na tri intervaly.
          Pre $x\\lt ${a}$: $-2x${term(a + b)} = ${c}$, teda $x = ${x1}$ (patrí do intervalu).
          Pre $${a}\\le x\\lt ${b}$: ľavá strana je $${fac(a)} - ${fac(b)} = ${b - a}$, čo sa nerovná $${c}$ – žiadne riešenie.
          Pre $x\\ge ${b}$: $2x${term(-(a + b))} = ${c}$, teda $x = ${x2}$ (patrí do intervalu). $K = \\{${x1}; ${x2}\\}$.`,
        hint: 'Urči nulové body, rozdeľ os na intervaly a na každom odstráň absolútne hodnoty podľa znamienka výrazov.'
      };
    }
    let a, m, n, c1, c2, v1, v2;
    do {
      a = rnd(-5, 5); m = pick([2, 3, -2, -3]); n = rnd(-8, 8);
      c1 = (a + n) / (1 - m); c2 = (a - n) / (1 + m);
      v1 = c1 >= a; v2 = c2 < a;
    } while (!Number.isInteger(c1) || !Number.isInteger(c2) || !(v1 || v2));
    const ans = [...(v1 ? [c1] : []), ...(v2 ? [c2] : [])];
    const rhs = poly([m, n]);
    return {
      type: 'set', signed: true, answer: ans, placeholder: ans.length > 1 ? 'x₁; x₂' : 'x',
      q: `Vyrieš rovnicu $|${lin(a)}| = ${rhs}$. Zadaj všetky korene oddelené bodkočiarkou.`,
      solution: `1. prípad $x\\ge ${a}$: $${lin(a)} = ${rhs}$, odtiaľ $x = ${c1}$; ${v1 ? `patrí do intervalu $\\langle ${a}; \\infty)$, je to koreň` : `nepatrí do intervalu $\\langle ${a}; \\infty)$, nie je to koreň`}.
        2. prípad $x\\lt ${a}$: $${poly([-1, a])} = ${rhs}$, odtiaľ $x = ${c2}$; ${v2 ? `patrí do intervalu $(-\\infty; ${a})$, je to koreň` : `nepatrí do intervalu $(-\\infty; ${a})$, nie je to koreň`}.
        $K = \\{${ans.join('; ')}\\}$.`,
      hint: 'Rozlíš prípady $x\\ge a$ a $x\\lt a$. Každé nájdené číslo over, či patrí do intervalu, na ktorom si počítal.'
    };
  });

  lesson({
    id: 's2-lomene', order: 50, topics: ['vyrazy', 'rovnice'], title: 'Lomené výrazy a rovnice',
    summary: 'Podmienky, krátenie, sčítanie lomených výrazov a riešenie rovníc s neznámou v menovateli.',
    theory: [
      `<p><strong>Lomený výraz</strong> je podiel dvoch mnohočlenov, napríklad $\\frac{x+1}{x^2-4}$. Má zmysel len tam, kde je menovateľ nenulový.
       <strong>Podmienky</strong> určujeme ešte pred úpravami a platia počas celého výpočtu: tu $x\\neq 2$ a $x\\neq -2$.</p>`,
      `<p><strong>Krátenie:</strong> čitateľ aj menovateľ rozložíme na súčin (vynímanie, vzorce $a^2-b^2=(a-b)(a+b)$, $(a\\pm b)^2$, rozklad trojčlena $x^2+px+q=(x-x_1)(x-x_2)$)
       a vykrátime spoločný činiteľ. <strong>Sčítanie a odčítanie:</strong> výrazy rozšírime na spoločný menovateľ (najmenší spoločný násobok menovateľov).
       <strong>Násobenie a delenie</strong> ako pri zlomkoch; pri delení pribudne podmienka, že deliteľ je nenulový.</p>`,
      `<p><strong>Lomené rovnice</strong> riešime tak, že po určení podmienok rovnicu vynásobíme spoločným menovateľom. Táto úprava môže pridať korene,
       ktoré podmienky nespĺňajú, preto na konci každý koreň porovnáme s podmienkami (alebo urobíme skúšku).</p>`
    ],
    examples: [
      { task: 'Zjednoduš výraz $\\frac{x^2-9}{x^2+3x}$.',
        steps: ['Rozklad: $\\frac{(x-3)(x+3)}{x(x+3)}$.',
          'Podmienky: $x\\neq 0$, $x\\neq -3$.',
          'Vykrátime činiteľ $(x+3)$.',
          '<strong>$\\frac{x-3}{x}$ pre $x\\neq 0$, $x\\neq -3$</strong>'] },
      { task: 'Vyrieš rovnicu $\\frac{2}{x-1}+\\frac{1}{x+1}=\\frac{4}{x^2-1}$.',
        steps: ['Podmienky: $x\\neq 1$, $x\\neq -1$. Spoločný menovateľ je $x^2-1=(x-1)(x+1)$.',
          'Vynásobíme ním rovnicu: $2(x+1)+(x-1)=4$, teda $3x+1=4$ a $x=1$.',
          'Číslo $1$ nespĺňa podmienku $x\\neq 1$.',
          '<strong>Rovnica nemá riešenie, $K=\\emptyset$.</strong>'] }
    ]
  });

  gen('s2-lomene', () => {
    const t = Math.random();
    const fr = (u, w) => `\\frac{${u}}{${w}}`;
    if (t < 0.25) {
      let r1, r2, p;
      do { r1 = nz(-6, 6); r2 = nz(-6, 6); p = rnd(-6, 6); } while (r1 >= r2 || r1 === -r2 || -p === r1 || -p === r2);
      const den = poly([1, -(r1 + r2), r1 * r2]);
      const cond = (a, b) => `x\\neq ${a},\\ x\\neq ${b}`;
      const ok = cond(r1, r2);
      return Object.assign(choice(ok, [cond(-r2, -r1), `x\\neq ${-p}`, `${ok},\\ x\\neq ${-p}`]), {
        q: `Pre ktoré reálne čísla $x$ má výraz $${fr(poly([1, p]), den)}$ zmysel?`,
        solution: `Menovateľ nesmie byť nulový. $${den} = ${fac(r1)}${fac(r2)}$, je nulový pre $x = ${r1}$ a $x = ${r2}$. Čitateľ podmienky neovplyvňuje. Výraz má zmysel pre $${ok}$.`,
        hint: 'Rozlož menovateľ na súčin a zisti, kedy je nulový.'
      });
    }
    if (t < 0.5) {
      let r1, r2, r3;
      do { r1 = nz(-6, 6); r2 = nz(-6, 6); r3 = nz(-6, 6); } while (new Set([r1, r2, r3]).size < 3);
      const N = poly([1, -(r1 + r2), r1 * r2]), D = poly([1, -(r1 + r3), r1 * r3]);
      const ok = fr(lin(r2), lin(r3));
      return Object.assign(choice(ok, [fr(lin(-r2), lin(-r3)), fr(lin(r3), lin(r2)), fr(lin(r1), lin(r3))]), {
        q: `Zjednoduš výraz $${fr(N, D)}$ (za predpokladu, že má zmysel).`,
        solution: `Rozložíme čitateľ aj menovateľ: $${fr(fac(r1) + fac(r2), fac(r1) + fac(r3))}$. Podmienky: $x\\neq ${r1}$, $x\\neq ${r3}$.
          Vykrátime spoločný činiteľ $${fac(r1)}$ a dostaneme $${ok}$.`,
        hint: 'Oba trojčleny rozlož na súčin $(x - x_1)(x - x_2)$ a hľadaj spoločný činiteľ.'
      });
    }
    if (t < 0.75) {
      if (Math.random() < 0.5) {
        let a, b, p, q, x;
        do { a = nz(-6, 6); b = nz(-6, 6); p = rnd(-5, 5); q = rnd(-5, 5); x = (a * q - b * p) / (a - b); }
        while (a === b || p === q || !Number.isInteger(x) || Math.abs(x) > 20);
        return {
          signed: true, answer: x,
          q: `Vyrieš rovnicu $${fr(a, lin(p))} = ${fr(b, lin(q))}$.`,
          solution: `Podmienky: $x\\neq ${p}$, $x\\neq ${q}$. Vynásobíme oba menovatele: $${coef(a)}${fac(q)} = ${coef(b)}${fac(p)}$,
            odkiaľ ${eqSolve(a - b, a * q - b * p)}. Koreň podmienky spĺňa.`,
          hint: 'Urči podmienky a rovnicu vynásob súčinom menovateľov.'
        };
      }
      let r, k;
      do { r = nz(-5, 5); k = rnd(-5, 5); } while (-r - k === r);
      const Nn = r * r + k * r, root = -r - k, num = poly([1, k, 0]);
      return {
        signed: true, answer: root,
        q: `Vyrieš rovnicu $${fr(num, lin(r))} = ${fr(Nn, lin(r))}$.`,
        solution: `Podmienka: $x\\neq ${r}$. Vynásobíme výrazom $${fac(r)}$: $${num} = ${Nn}$, teda $${poly([1, k, -Nn])} = 0$ a $${fac(r)}${fac(root)} = 0$.
          Korene sú $${r}$ a $${root}$, ale $x = ${r}$ nespĺňa podmienku. $K = \\{${root}\\}$.`,
        hint: 'Najprv urči podmienku. Po vynásobení menovateľom over, ktoré korene podmienku spĺňajú.'
      };
    }
    let a, b, p, q;
    do { a = rnd(-5, 5); b = rnd(-5, 5); p = nz(-4, 4); q = nz(-4, 4); } while (a === b || p === q || p + q === 0 || p * b + q * a === 0);
    const den = poly([1, -(a + b), a * b]), num = poly([p + q, -(p * b + q * a)]);
    const ok = fr(num, den);
    const first = p < 0 ? `-${fr(-p, lin(a))}` : fr(p, lin(a));
    return Object.assign(choice(ok, [fr(poly([p + q, -(p * a + q * b)]), den), fr(poly([p + q, p * b + q * a]), den), fr(p + q, den)]), {
      q: `Uprav na jeden zlomok: $${first} ${q > 0 ? '+' : '-'} ${fr(Math.abs(q), lin(b))}$.`,
      solution: `Spoločný menovateľ je $${fac(a)}${fac(b)} = ${den}$. Čitateľ: $${coef(p)}${fac(b)} ${q > 0 ? '+' : '-'} ${coef(Math.abs(q))}${fac(a)} = ${num}$.
        Výsledok: $${ok}$ pre $x\\neq ${a}$, $x\\neq ${b}$.`,
      hint: 'Rozšír oba zlomky na spoločný menovateľ $(x - a)(x - b)$ a sčítaj čitatele.'
    });
  });

  /* ---------- B. Funkcie ---------- */

  lesson({
    id: 's2-funkcia', order: 60, topics: ['funkcie'], title: 'Funkcia, definičný obor a graf',
    summary: 'Pojem funkcie, definičný obor a obor hodnôt, čítanie z grafu, párnosť a nepárnosť.',
    theory: [
      `<p><strong>Funkcia</strong> $f$ na množine $D$ je predpis, ktorý každému číslu $x\\in D$ priradí <em>práve jedno</em> reálne číslo $y=f(x)$.
       Množina $D=D(f)$ je <strong>definičný obor</strong>, množina všetkých hodnôt $f(x)$ je <strong>obor hodnôt</strong> $H(f)$.
       Ak je daný len predpis, za $D(f)$ berieme všetky $x$, pre ktoré má predpis zmysel: menovateľ je nenulový, pod párnou odmocninou je nezáporné číslo a argument logaritmu je kladný.</p>`,
      { fig: 's2-graf-dh', caption: 'Definičný obor čítame z grafu na osi $x$, obor hodnôt na osi $y$. Tu je $D(f)=\\langle -3; 4\\rangle$ a $H(f)=\\langle -2; 3\\rangle$.' },
      `<p><strong>Graf funkcie</strong> je množina bodov $[x; f(x)]$. Každá zvislá priamka ho pretne najviac raz. Z grafu čítame: hodnotu $f(a)$ (výška bodu grafu nad číslom $a$),
       počet riešení rovnice $f(x)=k$ (koľkokrát vodorovná priamka $y=k$ pretne graf), intervaly, kde je funkcia rastúca či klesajúca, a jej maximum a minimum.</p>`,
      `<p>Funkcia je <strong>párna</strong>, ak $f(-x)=f(x)$ pre všetky $x\\in D(f)$ (graf je súmerný podľa osi $y$), a <strong>nepárna</strong>, ak $f(-x)=-f(x)$
       (graf je súmerný podľa začiatku sústavy súradníc). Definičný obor musí byť v oboch prípadoch súmerný podľa nuly.</p>`
    ],
    examples: [
      { task: 'Urči definičný obor funkcie $f(x)=\\frac{\\sqrt{x+2}}{x-3}$.',
        steps: ['Pod odmocninou: $x+2\\ge 0$, teda $x\\ge -2$.',
          'Menovateľ: $x-3\\neq 0$, teda $x\\neq 3$.',
          '<strong>$D(f)=\\langle -2; 3)\\cup(3; \\infty)$</strong>'] },
      { task: 'Rozhodni, či je funkcia $f(x)=x^4-3x^2$ párna alebo nepárna.',
        steps: ['$D(f)=\\mathbb{R}$ je súmerný podľa nuly.',
          '$f(-x)=(-x)^4-3(-x)^2=x^4-3x^2=f(x)$.',
          '<strong>Funkcia je párna</strong>, jej graf je súmerný podľa osi $y$.'] }
    ]
  });

  gen('s2-funkcia', () => {
    const t = Math.random();
    if (t < 0.35) {
      const kind = rnd(0, 6), a = rnd(-6, 6), c = rnd(1, 5), mInf = '-' + INF;
      const amx = a === 0 ? '-x' : `${a} - x`;
      let f, ok, wrong, why;
      switch (kind) {
        case 0:
          f = `\\sqrt{${lin(a)}}`; ok = iv(a, INF, true, false);
          wrong = [iv(a, INF, false, false), iv(mInf, a, false, true), `${R}\\setminus\\{${a}\\}`];
          why = `Pod odmocninou musí byť nezáporné číslo: $${lin(a)}\\ge 0$, teda $x\\ge ${a}$.`; break;
        case 1:
          f = `\\sqrt{${amx}}`; ok = iv(mInf, a, false, true);
          wrong = [iv(a, INF, true, false), iv(mInf, a, false, false), iv(mInf, -a, false, true)];
          why = `Pod odmocninou musí byť nezáporné číslo: $${amx}\\ge 0$, teda $x\\le ${a}$.`; break;
        case 2:
          f = `\\frac{1}{${lin(a)}}`; ok = `${R}\\setminus\\{${a}\\}`;
          wrong = [`${R}\\setminus\\{${-a}\\}`, iv(a, INF, false, false), R];
          why = `Menovateľ nesmie byť nula: $x\\neq ${a}$.`; break;
        case 3:
          f = `\\frac{1}{\\sqrt{${lin(a)}}}`; ok = iv(a, INF, false, false);
          wrong = [iv(a, INF, true, false), `${R}\\setminus\\{${a}\\}`, iv(mInf, a, false, false)];
          why = `Výraz pod odmocninou musí byť nezáporný a odmocnina v menovateli nenulová, teda $${lin(a)}\\gt 0$ a $x\\gt ${a}$.`; break;
        case 4: {
          const b = a + rnd(1, 5);
          f = `\\frac{\\sqrt{${lin(a)}}}{${lin(b)}}`; ok = `${iv(a, b, true, false)}\\cup${iv(b, INF, false, false)}`;
          wrong = [iv(a, INF, true, false), `${iv(a, b, false, false)}\\cup${iv(b, INF, false, false)}`, `${R}\\setminus\\{${b}\\}`];
          why = `Podmienky: $x\\ge ${a}$ (odmocnina) a $x\\neq ${b}$ (menovateľ).`; break;
        }
        case 5:
          f = `\\sqrt{x^2 - ${c * c}}`; ok = `${iv(mInf, -c, false, true)}\\cup${iv(c, INF, true, false)}`;
          wrong = [iv(-c, c, true, true), `${iv(mInf, -c, false, false)}\\cup${iv(c, INF, false, false)}`, iv(c, INF, true, false)];
          why = `$x^2 - ${c * c}\\ge 0$, teda $x^2\\ge ${c * c}$ a $|x|\\ge ${c}$.`; break;
        default:
          f = `\\frac{${rnd(1, 5)}}{x^2 - ${c * c}}`; ok = `${R}\\setminus\\{-${c}; ${c}\\}`;
          wrong = [`${R}\\setminus\\{${c}\\}`, iv(-c, c, false, false), `${iv(mInf, -c, false, false)}\\cup${iv(c, INF, false, false)}`];
          why = `Menovateľ nesmie byť nula: $x^2\\neq ${c * c}$, teda $x\\neq \\pm ${c}$.`;
      }
      return Object.assign(choice(ok, wrong), {
        q: `Urči definičný obor funkcie $f(x) = ${f}$.`,
        solution: `${why} $D(f) = ${ok}$.`,
        hint: 'Hľadaj, kedy má predpis zmysel: menovateľ nesmie byť nula a pod párnou odmocninou nesmie byť záporné číslo.'
      });
    }
    if (t < 0.75) {
      let ys;
      do {
        ys = [rnd(-3, 3)];
        for (let i = 1; i < 9; i++) {
          let s;
          do { s = pick([-2, -1, -1, 0, 1, 1, 2]); } while (Math.abs(ys[i - 1] + s) > 4);
          ys.push(ys[i - 1] + s);
        }
      } while (Math.max(...ys) - Math.min(...ys) < 3);
      const mn = Math.min(...ys), mx = Math.max(...ys);
      const p = plane(-5, 5, -5, 5, 280, 280, 18);
      const d = ys.map((y, i) => `${i ? 'L' : 'M'}${n1(p.X(i - 4))} ${n1(p.Y(y))}`).join('');
      const pic = svg(p, axes(p), '', `<path class="f-accent" d="${d}"/>${dot(p, -4, ys[0])}${dot(p, 4, ys[8])}`, 'Graf funkcie f');
      const intro = 'Na obrázku je graf funkcie $f$ s definičným oborom $D(f) = \\langle -4; 4\\rangle$. Graf je lomená čiara, jej zlomy majú celočíselné súradnice.';
      let sub = rnd(0, 2), k = 0, cnt = 0;
      if (sub === 1) {
        let ok = false;
        for (let tries = 0; tries < 20 && !ok; tries++) {
          k = rnd(mn, mx);
          ok = !ys.some((y, i) => i < 8 && y === k && ys[i + 1] === k);
        }
        if (!ok) sub = 0;
        else {
          cnt = ys.filter((y) => y === k).length;
          for (let i = 0; i < 8; i++) if ((ys[i] - k) * (ys[i + 1] - k) < 0) cnt++;
        }
      }
      if (sub === 0) {
        const c = rnd(-4, 4), y = ys[c + 4];
        return {
          signed: true, answer: y,
          q: `${intro} Urči $f(${c})$. ${pic}`,
          solution: `Číslu $${c}$ na osi $x$ zodpovedá bod grafu $[${c}; ${y}]$, teda $f(${c}) = ${y}$.`,
          hint: 'Nájdi na osi $x$ zadané číslo a zisti výšku bodu grafu nad ním (alebo pod ním).'
        };
      }
      if (sub === 1) {
        return {
          answer: cnt,
          q: `${intro} Koľko riešení má rovnica $f(x) = ${k}$? ${pic}`,
          solution: `Vodorovná priamka $y = ${k}$ pretne graf v $${cnt}$ ${pl(cnt, ['bode', 'bodoch', 'bodoch'])}, rovnica má teda $${cnt}$ ${pl(cnt, RIES)}.`,
          hint: 'Predstav si vodorovnú priamku $y = k$ a spočítaj jej spoločné body s grafom.'
        };
      }
      const ok = iv(mn, mx, true, true);
      return Object.assign(choice(ok, [iv(-4, 4, true, true), iv(mn, mx, false, false),
        iv(Math.min(ys[0], ys[8]), Math.max(ys[0], ys[8]), true, true), iv(mn, mx - 1, true, true)]), {
        q: `${intro} Urči obor hodnôt $H(f)$. ${pic}`,
        solution: `Najnižší bod grafu má $y = ${mn}$, najvyšší $y = ${mx}$. Graf je súvislá čiara, funkcia teda nadobúda všetky hodnoty medzi nimi: $H(f) = ${ok}$.`,
        hint: 'Obor hodnôt čítaš na osi $y$: od najnižšieho po najvyšší bod grafu.'
      });
    }
    const kind = rnd(0, 2), A = nz(-4, 4), B = nz(-5, 5);
    const OPTS = ['párna', 'nepárna', 'ani párna, ani nepárna'];
    if (kind === 0) {
      const C = rnd(-5, 5), cs = [A, 0, B, 0, C];
      return {
        type: 'choice', options: OPTS, answer: OPTS[0],
        q: `Rozhodni o párnosti funkcie $f(x) = ${poly(cs)}$.`,
        solution: `$f(-x) = ${poly(cs, '(-x)')} = ${poly(cs)} = f(x)$ pre každé $x\\in${R}$, funkcia je párna (graf je súmerný podľa osi $y$).`,
        hint: 'Vypočítaj $f(-x)$ a porovnaj s $f(x)$ a $-f(x)$. Párna mocnina záporného čísla je kladná.'
      };
    }
    if (kind === 1) {
      const cs = [A, 0, B, 0];
      return {
        type: 'choice', options: OPTS, answer: OPTS[1],
        q: `Rozhodni o párnosti funkcie $f(x) = ${poly(cs)}$.`,
        solution: `$f(-x) = ${poly(cs, '(-x)')} = ${poly([-A, 0, -B, 0])} = -f(x)$, funkcia je nepárna (graf je súmerný podľa začiatku sústavy súradníc).`,
        hint: 'Vypočítaj $f(-x)$ a porovnaj s $f(x)$ a $-f(x)$. Nepárna mocnina zachová znamienko.'
      };
    }
    let C;
    do { C = nz(-5, 5); } while (A + C === 0);
    const cs = [A, B, C];
    return {
      type: 'choice', options: OPTS, answer: OPTS[2],
      q: `Rozhodni o párnosti funkcie $f(x) = ${poly(cs)}$.`,
      solution: `$f(1) = ${A + B + C}$ a $f(-1) = ${A - B + C}$. Keďže $f(-1)\\neq f(1)$ a zároveň $f(-1)\\neq -f(1)$, funkcia nie je ani párna, ani nepárna.`,
      hint: 'Stačí nájsť jedno $x$, pre ktoré $f(-x)\\neq f(x)$, a jedno, pre ktoré $f(-x)\\neq -f(x)$.'
    };
  });

  lesson({
    id: 's2-linearna', order: 70, topics: ['funkcie'], title: 'Lineárna funkcia a nepriama úmernosť',
    summary: 'Smernica a predpis priamky, priesečníky grafov, nepriama úmernosť a lineárna lomená funkcia.',
    theory: [
      `<p><strong>Lineárna funkcia</strong> $f(x)=kx+q$ má za graf priamku; $k$ je <strong>smernica</strong>, $q$ je $y$-ová súradnica priesečníka s osou $y$.
       Pre $k&gt;0$ je rastúca, pre $k&lt;0$ klesajúca, pre $k=0$ konštantná. Smernica priamky cez body $A[x_1; y_1]$, $B[x_2; y_2]$ je $k=\\frac{y_2-y_1}{x_2-x_1}$.
       Rovnobežné priamky majú rovnakú smernicu; priesečník dvoch grafov nájdeme riešením rovnice $f(x)=g(x)$.</p>`,
      `<p><strong>Nepriama úmernosť</strong> $f(x)=\\frac{k}{x}$, $k\\neq 0$, má $D(f)=H(f)=\\mathbb{R}\\setminus\\{0\\}$. Jej grafom je <strong>hyperbola</strong>, ktorej asymptoty sú súradnicové osi.
       Pre $k&gt;0$ ležia vetvy v I. a III. kvadrante a funkcia je klesajúca na $(-\\infty; 0)$ aj na $(0; \\infty)$ – nie však na celom definičnom obore.</p>`,
      { fig: 's2-hyperbola', caption: 'Graf funkcie $y=\\frac{k}{x-m}+n$. Pre $m=n=0$ ide o nepriamu úmernosť $y=\\frac{k}{x}$. Zmenou $m$ a $n$ sa hyperbola posúva spolu s asymptotami $x=m$ a $y=n$; ich priesečník je stred hyperboly.' },
      `<p><strong>Lineárna lomená funkcia</strong> $f(x)=\\frac{ax+b}{cx+d}$ sa dá upraviť na tvar $f(x)=\\frac{k}{x-m}+n$. Potom má stred $S[m; n]$, $D(f)=\\mathbb{R}\\setminus\\{m\\}$ a $H(f)=\\mathbb{R}\\setminus\\{n\\}$.
       Napríklad $\\frac{2x+1}{x-1}=\\frac{2(x-1)+3}{x-1}=2+\\frac{3}{x-1}$.</p>`
    ],
    examples: [
      { task: 'Urči predpis lineárnej funkcie, ktorej graf prechádza bodmi $A[-1; 5]$ a $B[3; -3]$, a jej priesečník s osou $x$.',
        steps: ['$k=\\frac{-3-5}{3-(-1)}=\\frac{-8}{4}=-2$.',
          'Dosadíme bod $A$: $5=-2\\cdot(-1)+q$, teda $q=3$ a $f(x)=-2x+3$.',
          'S osou $x$: $-2x+3=0$, $x=\\frac{3}{2}$.',
          '<strong>$f(x)=-2x+3$, priesečník $\\left[\\frac{3}{2}; 0\\right]$</strong>'] },
      { task: 'Urči stred hyperboly, definičný obor a obor hodnôt funkcie $f(x)=\\frac{2x+1}{x-1}$.',
        steps: ['Čitateľ upravíme: $2x+1=2(x-1)+3$.',
          'Teda $f(x)=2+\\frac{3}{x-1}=\\frac{3}{x-1}+2$, čiže $k=3$, $m=1$, $n=2$.',
          '<strong>$S[1; 2]$, $D(f)=\\mathbb{R}\\setminus\\{1\\}$, $H(f)=\\mathbb{R}\\setminus\\{2\\}$</strong>'] }
    ]
  });

  gen('s2-linearna', () => {
    const t = Math.random();
    if (t < 0.3) {
      const kn = nz(-6, 6), half = kn % 2 !== 0, q = rnd(-6, 6);
      const x1 = half ? 2 * rnd(-3, 1) : rnd(-5, 3), x2 = x1 + (half ? 2 * rnd(1, 3) : rnd(1, 5));
      const y1 = kn * x1 / 2 + q, y2 = kn * x2 / 2 + q;
      return {
        type: 'tuple', signed: true, answer: [kn / 2, q], show: `${fTxt(kn, 2)}; ${q}`, placeholder: 'k; q',
        q: `Graf lineárnej funkcie $f(x) = kx + q$ prechádza bodmi $${pt('A', x1, y1)}$ a $${pt('B', x2, y2)}$. Urči $k$ a $q$ a zadaj ich oddelené bodkočiarkou (zlomok zapíš napr. ako 1/2).`,
        solution: `$k = \\frac{${y2} - ${par(y1)}}{${x2} - ${par(x1)}} = \\frac{${y2 - y1}}{${x2 - x1}} = ${fTex(kn, 2)}$. Z bodu $A$: $q = y_A - k\\cdot x_A = ${y1} - ${fPar(kn, 2)}\\cdot ${par(x1)} = ${q}$.`,
        hint: 'Smernica je podiel zmeny $y$ a zmeny $x$. Potom dosaď jeden bod do $y = kx + q$.'
      };
    }
    if (t < 0.55) {
      let k1, k2;
      do { k1 = nz(-4, 4); k2 = nz(-4, 4); } while (k1 === k2);
      const X = rnd(-5, 5), q1 = rnd(-8, 8), Y = k1 * X + q1, q2 = Y - k2 * X;
      return {
        type: 'tuple', signed: true, answer: [X, Y], placeholder: 'x; y',
        q: `Urči priesečník grafov funkcií $f(x) = ${poly([k1, q1])}$ a $g(x) = ${poly([k2, q2])}$. Zadaj jeho súradnice oddelené bodkočiarkou.`,
        solution: `$${poly([k1, q1])} = ${poly([k2, q2])}$, odkiaľ ${eqSolve(k1 - k2, q2 - q1)}. Potom $y = f(${X}) = ${Y}$. Priesečník je $[${X}; ${Y}]$.`,
        hint: 'V priesečníku majú obe funkcie rovnakú hodnotu: vyrieš rovnicu $f(x) = g(x)$.'
      };
    }
    if (t < 0.78) {
      let a, b, c;
      do { a = nz(-6, 6); b = nz(-6, 6); c = nz(-6, 6); } while (c === a || Math.abs(a * b) > 36);
      const k = a * b;
      return {
        signed: true, answer: k / c, show: fTxt(k, c),
        q: `Graf nepriamej úmernosti $y = \\frac{k}{x}$ prechádza bodom $${pt('A', a, b)}$. Vypočítaj hodnotu funkcie pre $x = ${c}$ (zlomok zapíš napr. ako 3/2).`,
        solution: `$k = x\\cdot y = ${a}\\cdot ${par(b)} = ${k}$, teda $y = \\frac{${k}}{x}$. Pre $x = ${c}$: $y = ${k} : ${par(c)} = ${fTex(k, c)}$.`,
        hint: 'Pri nepriamej úmernosti je súčin $x\\cdot y$ stály a rovná sa $k$.'
      };
    }
    const m = nz(-4, 4), n = rnd(-4, 4), k = nz(-6, 6);
    const num = poly([n, k - n * m]);
    const tail = `${k < 0 ? '-' : ''}\\frac{${Math.abs(k)}}{${lin(m)}}${term(n)}`;
    return {
      type: 'tuple', signed: true, answer: [m, n], placeholder: 'm; n',
      q: `Urči stred $S[m; n]$ hyperboly, ktorá je grafom funkcie $f(x) = \\frac{${num}}{${lin(m)}}$. Zadaj $m$ a $n$ oddelené bodkočiarkou.`,
      solution: `${n === 0 ? `Funkcia už má tvar $\\frac{k}{x - m}$ s $k = ${k}$.` : `Čitateľ upravíme: $${num} = ${coef(n)}(${lin(m)})${term(k)}$, teda $f(x) = ${tail}$.`}
        Asymptoty sú $x = ${m}$ a $y = ${n}$, stred hyperboly je $S[${m}; ${n}]$. Navyše $D(f) = ${R}\\setminus\\{${m}\\}$ a $H(f) = ${R}\\setminus\\{${n}\\}$.`,
      hint: 'Čitateľ zapíš ako násobok menovateľa plus zvyšok, aby si dostal tvar $\\frac{k}{x - m} + n$.'
    };
  });

  lesson({
    id: 's2-kvadraticka-funkcia', order: 80, topics: ['funkcie'], title: 'Kvadratická funkcia',
    summary: 'Vrcholový tvar, doplnenie na štvorec, vrchol paraboly, obor hodnôt, monotónnosť a extrémy.',
    theory: [
      `<p><strong>Kvadratická funkcia</strong> $f(x)=ax^2+bx+c$, $a\\neq 0$, má za graf parabolu. Doplnením na štvorec ju prevedieme na <strong>vrcholový tvar</strong>
       $f(x)=a(x-m)^2+n$, kde $V[m; n]$ je vrchol paraboly. Platí $m=-\\frac{b}{2a}$ a $n=f(m)$.
       Napríklad $x^2-6x+5=(x^2-6x+9)-9+5=(x-3)^2-4$, vrchol je $V[3; -4]$.</p>`,
      { fig: 's2-vrchol', caption: 'Graf funkcie $y=a(x-m)^2+n$ (modrý) a základná parabola $y=x^2$ (tenká čiara). Parameter $a$ určuje otvorenie a „šírku“ paraboly, $m$ a $n$ posúvajú vrchol. Prerušovaná čiara je os súmernosti $x=m$.' },
      `<p><strong>Vlastnosti:</strong> pre $a&gt;0$ je parabola otvorená nahor, funkcia má v bode $m$ <em>minimum</em> $n$, $H(f)=\\langle n; \\infty)$, je klesajúca na $(-\\infty; m\\rangle$
       a rastúca na $\\langle m; \\infty)$. Pre $a&lt;0$ je otvorená nadol, má <em>maximum</em> $n$, $H(f)=(-\\infty; n\\rangle$ a monotónnosť je opačná.
       Ak $|a|&gt;1$, parabola je užšia ako $y=x^2$, ak $|a|&lt;1$, je širšia.</p>`,
      `<p>Na uzavretom intervale $\\langle u; w\\rangle$ nadobúda kvadratická funkcia najväčšiu a najmenšiu hodnotu buď v krajných bodoch, alebo vo vrchole (ak $m$ leží v intervale).
       Stačí porovnať hodnoty $f(u)$, $f(w)$ a prípadne $f(m)$.</p>`
    ],
    examples: [
      { task: 'Uprav $f(x)=2x^2-8x+5$ na vrcholový tvar a urči $H(f)$ a interval, na ktorom je rastúca.',
        steps: ['$2x^2-8x+5=2(x^2-4x)+5=2\\left[(x-2)^2-4\\right]+5=2(x-2)^2-3$.',
          'Vrchol $V[2; -3]$, $a=2&gt;0$, parabola je otvorená nahor.',
          '<strong>$H(f)=\\langle -3; \\infty)$, rastúca na $\\langle 2; \\infty)$</strong>'] },
      { task: 'Parabola s vrcholom $V[1; 4]$ prechádza bodom $P[3; -4]$. Urči predpis funkcie.',
        steps: ['Vrcholový tvar: $f(x)=a(x-1)^2+4$.',
          'Dosadíme $P$: $-4=a\\cdot 2^2+4$, teda $4a=-8$ a $a=-2$.',
          '<strong>$f(x)=-2(x-1)^2+4=-2x^2+4x+2$</strong>'] }
    ]
  });

  gen('s2-kvadraticka-funkcia', () => {
    const t = Math.random();
    const vform = (a, m, n) => `${coef(a)}${m === 0 ? 'x^2' : `(${lin(m)})^2`}${term(n)}`;
    if (t < 0.28) {
      const a = nz(-3, 3), m = rnd(-4, 4), n = rnd(-6, 6), cs = [a, -2 * a * m, a * m * m + n];
      return {
        type: 'tuple', signed: true, answer: [m, n], placeholder: 'm; n',
        q: `Urči súradnice vrcholu $V[m; n]$ paraboly $y = ${poly(cs)}$. Zadaj $m$ a $n$ oddelené bodkočiarkou.`,
        solution: `Pre $a = ${a}$, $b = ${cs[1]}$ je $m = -\\frac{b}{2a} = ${m}$ a $n = f(${m}) = ${n}$. Vrcholový tvar: $y = ${vform(a, m, n)}$.`,
        hint: 'Použi $m = -\\frac{b}{2a}$ a $n = f(m)$, alebo doplň trojčlen na štvorec.'
      };
    }
    if (t < 0.52) {
      const a = nz(-3, 3), m = rnd(-4, 4), n = rnd(-6, 6), cs = [a, -2 * a * m, a * m * m + n], mInf = '-' + INF;
      const intro = `$f(x) = ${poly(cs)} = ${vform(a, m, n)}$, vrchol $V[${m}; ${n}]$, $a = ${a}$ ${a > 0 ? '(parabola otvorená nahor)' : '(parabola otvorená nadol)'}.`;
      if (Math.random() < 0.5) {
        const ok = a > 0 ? iv(n, INF, true, false) : iv(mInf, n, false, true);
        const other = a > 0 ? iv(mInf, n, false, true) : iv(n, INF, true, false);
        return Object.assign(choice(ok, [other, iv(m, INF, true, false), iv(mInf, m, false, true), a > 0 ? iv(n, INF, false, false) : iv(mInf, n, false, false)]), {
          q: `Urči obor hodnôt funkcie $f(x) = ${poly(cs)}$.`,
          solution: `${intro} Funkcia má ${a > 0 ? 'minimum' : 'maximum'} $${n}$, preto $H(f) = ${ok}$.`,
          hint: 'Obor hodnôt určuje $y$-ová súradnica vrcholu a to, či je parabola otvorená nahor alebo nadol.'
        });
      }
      const up = Math.random() < 0.5, right = (a > 0) === up;
      const ok = right ? iv(m, INF, true, false) : iv(mInf, m, false, true);
      return Object.assign(choice(ok, [right ? iv(mInf, m, false, true) : iv(m, INF, true, false), iv(n, INF, true, false), iv(mInf, n, false, true)]), {
        q: `Urči najväčší interval, na ktorom je funkcia $f(x) = ${poly(cs)}$ ${up ? 'rastúca' : 'klesajúca'}.`,
        solution: `${intro} Funkcia je ${a > 0 ? 'klesajúca na $(-\\infty; ' + m + '\\rangle$ a rastúca na $\\langle ' + m + '; \\infty)$' : 'rastúca na $(-\\infty; ' + m + '\\rangle$ a klesajúca na $\\langle ' + m + '; \\infty)$'}. Odpoveď: $${ok}$.`,
        hint: 'Monotónnosť sa mení vo vrchole paraboly; záleží na znamienku koeficientu $a$.'
      });
    }
    if (t < 0.76) {
      const a = nz(-3, 3), m = rnd(-4, 4), n = rnd(-6, 6), d = nz(-3, 3), P = m + d, Q = a * d * d + n;
      return {
        signed: true, answer: a,
        q: `Parabola s vrcholom $V[${m}; ${n}]$ prechádza bodom $P[${P}; ${Q}]$. Urči koeficient $a$ vo vrcholovom tvare $y = a(x - m)^2 + n$.`,
        solution: `$y = a${m === 0 ? 'x^2' : `(${lin(m)})^2`}${term(n)}$. Dosadíme $P$: $${Q} = a\\cdot ${par(d)}^2${term(n)}$, odkiaľ ${eqSolve(d * d, Q - n, 'a')}.`,
        hint: 'Dosaď súradnice vrcholu do vrcholového tvaru a potom súradnice bodu $P$.'
      };
    }
    const a = pick([1, -1, 2, -2]), m = rnd(-3, 3), n = rnd(-5, 5), cs = [a, -2 * a * m, a * m * m + n];
    const u = rnd(-5, 2), w = u + rnd(2, 5), f = (x) => a * (x - m) * (x - m) + n, findMax = Math.random() < 0.5;
    const inside = m >= u && m <= w;
    const vals = [f(u), f(w), ...(inside ? [n] : [])];
    const ans = findMax ? Math.max(...vals) : Math.min(...vals);
    return {
      signed: true, answer: ans,
      q: `Urči ${findMax ? 'najväčšiu' : 'najmenšiu'} hodnotu funkcie $f(x) = ${poly(cs)}$ na intervale $\\langle ${u}; ${w}\\rangle$.`,
      solution: `Vrcholový tvar: $f(x) = ${vform(a, m, n)}$, vrchol $V[${m}; ${n}]$. Číslo $m = ${m}$ ${inside ? 'patrí' : 'nepatrí'} do intervalu $\\langle ${u}; ${w}\\rangle$.
        Porovnáme hodnoty: $f(${u}) = ${f(u)}$, $f(${w}) = ${f(w)}$${inside ? `, $f(${m}) = ${n}$` : ''}. ${findMax ? 'Najväčšia' : 'Najmenšia'} z nich je $${ans}$.`,
      hint: 'Porovnaj hodnoty v krajných bodoch intervalu a vo vrchole, ak vrchol leží v intervale.'
    };
  });

  // základné funkcie pre úlohy o transformáciách
  const TF = [
    { f: 'x^2', g: (s) => (s === 'x' ? 'x^2' : `(${s})^2`), pts: [[-2, 4], [-1, 1], [1, 1], [2, 4], [3, 9]], H: true },
    { f: '|x|', g: (s) => `|${s}|`, pts: [[-3, 3], [-2, 2], [1, 1], [2, 2], [4, 4]], H: true },
    { f: '\\sqrt{x}', g: (s) => `\\sqrt{${s}}`, pts: [[0, 0], [1, 1], [4, 2], [9, 3]], H: true },
    { f: '\\frac{1}{x}', g: (s) => `\\frac{1}{${s}}`, pts: [[1, 1], [-1, -1]], frac: true },
    { f: '2^{x}', g: (s) => `2^{${s}}`, pts: [[0, 1], [1, 2], [2, 4], [3, 8]], exp: true }
  ];
  const gTex = (B, a, m, n) => {
    const s = lin(m);
    const core = B.frac ? `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${s}}`
      : `${a === 1 ? '' : a === -1 ? '-' : a + (B.exp ? '\\cdot ' : '')}${B.g(s)}`;
    return core + term(n);
  };
  const shiftWords = (m, n) => `o $${Math.abs(m)}$ ${m > 0 ? 'doprava' : 'doľava'} a o $${Math.abs(n)}$ ${n > 0 ? 'nahor' : 'nadol'}`;

  lesson({
    id: 's2-transformacie', order: 90, topics: ['funkcie'], title: 'Posuny a transformácie grafov',
    summary: 'Ako z grafu funkcie f dostať graf funkcie a·f(x − m) + n: posuny, preklopenie, natiahnutie.',
    theory: [
      `<p>Z grafu funkcie $f$ dostaneme graf novej funkcie $g$ jednoduchými transformáciami:</p>
       <ul><li>$g(x)=f(x)+n$: posun o $n$ v smere osi $y$ (pre $n&gt;0$ nahor),</li>
       <li>$g(x)=f(x-m)$: posun o $m$ v smere osi $x$ (pre $m&gt;0$ <em>doprava</em> – pozor na znamienko),</li>
       <li>$g(x)=-f(x)$: osová súmernosť podľa osi $x$; $\\ g(x)=f(-x)$: osová súmernosť podľa osi $y$,</li>
       <li>$g(x)=a\\cdot f(x)$, $a&gt;0$: natiahnutie ($a&gt;1$) alebo stlačenie ($a&lt;1$) v smere osi $y$,</li>
       <li>$g(x)=|f(x)|$: časti grafu pod osou $x$ preklopíme nad os.</li></ul>`,
      { fig: 's2-transformacie', caption: 'Funkcie: 1 – $x^2$, 2 – $|x|$, 3 – $\\sqrt{x}$, 4 – $\\frac{1}{x}$, 5 – $2^x$. Tenká čiara je graf $f$, modrá graf $g(x)=a\\cdot f(x-m)+n$. Oranžový bod je obraz význačného bodu (vrcholu, začiatočného bodu, stredu, pri $2^x$ obraz bodu $[0; 1]$).' },
      `<p><strong>Postup pre $g(x)=a\\cdot f(x-m)+n$:</strong> graf $f$ posunieme o $m$ v smere osi $x$, potom ho vynásobíme číslom $a$ (pri $a&lt;0$ sa preklopí podľa osi $x$)
       a nakoniec posunieme o $n$ v smere osi $y$. Bod $[x_0; y_0]$ grafu $f$ prejde na bod $[x_0+m; a\\,y_0+n]$.
       Posun v smere osi $x$ mení definičný obor, posun v smere osi $y$ a násobenie menia obor hodnôt.</p>`
    ],
    examples: [
      { task: 'Opíš graf funkcie $g(x)=|x+2|-3$ a urči jej obor hodnôt a priesečníky s osou $x$.',
        steps: ['$g(x)=f(x+2)-3$ pre $f(x)=|x|$: graf posunieme o $2$ doľava a o $3$ nadol.',
          'Vrchol je $[-2; -3]$, preto $H(g)=\\langle -3; \\infty)$.',
          'Priesečníky: $|x+2|=3$, teda $x=1$ alebo $x=-5$.',
          '<strong>$H(g)=\\langle -3; \\infty)$, priesečníky $[1; 0]$ a $[-5; 0]$</strong>'] },
      { task: 'Urči definičný obor, obor hodnôt a monotónnosť funkcie $g(x)=-\\sqrt{x-1}+2$.',
        steps: ['Graf $\\sqrt{x}$ posunieme o $1$ doprava, preklopíme podľa osi $x$ a posunieme o $2$ nahor.',
          'Začiatočný bod $[0; 0]$ prejde na $[1; 2]$.',
          '$D(g)=\\langle 1; \\infty)$; po preklopení graf klesá, takže $H(g)=(-\\infty; 2\\rangle$.',
          '<strong>Funkcia je klesajúca na celom $D(g)$.</strong>'] }
    ]
  });

  gen('s2-transformacie', () => {
    const t = Math.random();
    if (t < 0.3) {
      const B = pick(TF), [x0, y0] = pick(B.pts);
      let a, m, n;
      do { a = pick([1, -1, 2, -2, 3]); m = rnd(-4, 4); n = rnd(-4, 4); } while (a === 1 && (m === 0 || n === 0));
      const X = x0 + m, Y = a * y0 + n;
      return {
        type: 'tuple', signed: true, answer: [X, Y], placeholder: 'x; y',
        q: `Bod $${pt('A', x0, y0)}$ leží na grafe funkcie $f(x) = ${B.f}$. Na ktorý bod grafu funkcie $g(x) = ${gTex(B, a, m, n)}$ sa zobrazí? Zadaj jeho súradnice oddelené bodkočiarkou.`,
        solution: `$g(x) = ${a === 1 ? '' : a === -1 ? '-' : a + '\\cdot '}f(${lin(m)})${term(n)}$. Posun v smere osi $x$ zmení prvú súradnicu na $${x0}${term(m)} = ${X}$.
          Druhú súradnicu vynásobíme číslom $${a}$${n ? ` a pripočítame $${n}$` : ''}: $${a}\\cdot ${par(y0)}${term(n)} = ${Y}$. Obraz je $[${X}; ${Y}]$.
          Kontrola: $g(${X}) = ${a}\\cdot f(${x0})${term(n)} = ${Y}$.`,
        hint: 'Bod $[x_0; y_0]$ prejde pri $g(x) = a\\cdot f(x - m) + n$ na bod $[x_0 + m; a y_0 + n]$.'
      };
    }
    if (t < 0.55) {
      const B = pick(TF), m = nz(-4, 4), n = nz(-4, 4);
      const desc = (mm, nn) => `posun o ${Math.abs(mm)} ${mm > 0 ? 'doprava' : 'doľava'} a o ${Math.abs(nn)} ${nn > 0 ? 'nahor' : 'nadol'}`;
      return {
        type: 'choice', options: shuffle([desc(m, n), desc(-m, n), desc(m, -n), desc(-m, -n)]), answer: desc(m, n),
        q: `Ako vznikne graf funkcie $g(x) = ${gTex(B, 1, m, n)}$ z grafu funkcie $f(x) = ${B.f}$?`,
        solution: `$g(x) = f(${lin(m)})${term(n)}$. Zápis $f(x - m)$ znamená posun o $m$ doprava, preto $f(${lin(m)})$ je posun ${m > 0 ? `o $${m}$ doprava` : `o $${-m}$ doľava`}.
          Pripočítanie čísla $${n}$ posunie graf ${n > 0 ? `o $${n}$ nahor` : `o $${-n}$ nadol`}.`,
        hint: 'Číslo odčítané od $x$ v argumente posúva graf vodorovne (opačne, než naznačuje znamienko), číslo pripočítané k funkcii zvislo.'
      };
    }
    if (t < 0.78) {
      const B = pick(TF), m = nz(-4, 4), n = nz(-4, 4), a = pick([1, 1, -1]);
      const ok = `g(x) = ${gTex(B, a, m, n)}`;
      return Object.assign(choice(ok, [`g(x) = ${gTex(B, a, -m, n)}`, `g(x) = ${gTex(B, a, m, -n)}`, `g(x) = ${gTex(B, -a, m, n)}`]), {
        q: `Graf funkcie $f(x) = ${B.f}$ ${a < 0 ? 'najprv preklopíme podľa osi $x$ a potom ho ' : ''}posunieme ${shiftWords(m, n)}. Graf ktorej funkcie dostaneme?`,
        solution: `${a < 0 ? 'Preklopenie podľa osi $x$ zmení $f(x)$ na $-f(x)$. ' : ''}Posun o $${Math.abs(m)}$ ${m > 0 ? 'doprava' : 'doľava'} znamená nahradiť $x$ výrazom $${lin(m)}$,
          posun ${n > 0 ? 'nahor' : 'nadol'} znamená pripočítať $${n}$. Dostaneme $${ok}$.`,
        hint: 'Posun o $m$ doprava: $x$ nahradíme $x - m$. Posun o $n$ nahor: k funkcii pripočítame $n$.'
      });
    }
    const B = pick(TF.filter((b) => b.H)), a = pick([1, -1, 2, -2, 3]), m = nz(-4, 4), n = nz(-5, 5), mInf = '-' + INF;
    const askD = B === TF[2] && Math.random() < 0.5;
    if (askD) {
      const ok = iv(m, INF, true, false);
      return Object.assign(choice(ok, [iv(-m, INF, true, false), iv(n, INF, true, false), iv(m, INF, false, false)]), {
        q: `Urči definičný obor funkcie $g(x) = ${gTex(B, a, m, n)}$.`,
        solution: `Pod odmocninou musí byť $${lin(m)}\\ge 0$, teda $x\\ge ${m}$. Graf $\\sqrt{x}$ je posunutý ${m > 0 ? `o $${m}$ doprava` : `o $${-m}$ doľava`}, $D(g) = ${ok}$.`,
        hint: 'Definičný obor mení len posun v smere osi $x$.'
      });
    }
    const ok = a > 0 ? iv(n, INF, true, false) : iv(mInf, n, false, true);
    return Object.assign(choice(ok, [a > 0 ? iv(mInf, n, false, true) : iv(n, INF, true, false), iv(m, INF, true, false), iv(mInf, m, false, true), iv(-n, INF, true, false)]), {
      q: `Urči obor hodnôt funkcie $g(x) = ${gTex(B, a, m, n)}$.`,
      solution: `Funkcia $${B.f}$ má obor hodnôt $\\langle 0; \\infty)$. Posun v smere osi $x$ ho nemení.
        ${a === 1 ? '' : a < 0 ? `Násobenie číslom $${a}$ ho zmení na $(-\\infty; 0\\rangle$, ` : `Násobenie kladným číslom $${a}$ ho nezmení, `}posun o $${n}$ v smere osi $y$ dá $H(g) = ${ok}$.`,
      hint: 'Obor hodnôt menia násobenie (pri zápornom $a$ preklopenie) a posun v smere osi $y$.'
    });
  });

  /* ---------- D. Mocninové, exponenciálne a logaritmické funkcie ---------- */

  lesson({
    id: 's2-mocninove', order: 100, topics: ['funkcie', 'rovnice'], title: 'Mocninové funkcie a odmocninové rovnice',
    summary: 'Funkcie y = xⁿ s celým exponentom, rovnice xⁿ = a a iracionálne rovnice so skúškou.',
    theory: [
      `<p><strong>Mocninová funkcia</strong> $y=x^n$. Pre párne prirodzené $n$ je párna, $H=\\langle 0; \\infty)$, na $(-\\infty; 0\\rangle$ klesá a na $\\langle 0; \\infty)$ rastie.
       Pre nepárne prirodzené $n$ je nepárna, rastúca a $H=\\mathbb{R}$. Pre záporné celé $n$ je $x^{n}=\\frac{1}{x^{|n|}}$, $D=\\mathbb{R}\\setminus\\{0\\}$ a osi sú asymptoty grafu.
       Na intervale $(0; 1)$ platí $x^3&lt;x^2&lt;x$, pre $x&gt;1$ je to naopak.</p>`,
      { fig: 's2-mocnina', caption: 'Graf funkcie $y=x^n$ pre zvolený celý exponent. Všetky grafy prechádzajú bodom $[1; 1]$; bod $[-1; (-1)^n]$ ukazuje, či je funkcia párna alebo nepárna.' },
      `<p><strong>Rovnica $x^n=a$:</strong> pre nepárne $n$ má jediný koreň $x=\\sqrt[n]{a}$ (aj pre $a&lt;0$, napr. $x^3=-8$ má koreň $-2$).
       Pre párne $n$: ak $a&gt;0$, korene sú $x=\\pm\\sqrt[n]{a}$; ak $a=0$, koreň je $0$; ak $a&lt;0$, rovnica nemá riešenie.</p>`,
      `<p><strong>Odmocninové (iracionálne) rovnice</strong> riešime tak, že odmocninu osamostatníme a obe strany umocníme. Umocnenie na párnu mocninu <em>nie je ekvivalentná úprava</em>:
       môžu pribudnúť čísla, ktoré pôvodnú rovnicu nespĺňajú. <strong>Skúška je preto povinnou súčasťou riešenia.</strong></p>`
    ],
    examples: [
      { task: 'Vyrieš rovnicu $\\sqrt{x+7}=x+1$.',
        steps: ['Umocníme: $x+7=x^2+2x+1$, teda $x^2+x-6=0$ a $(x-2)(x+3)=0$.',
          'Skúška pre $x=2$: $\\sqrt{9}=3$ a $2+1=3$ ✓',
          'Skúška pre $x=-3$: $\\sqrt{4}=2$, ale $-3+1=-2$ ✗',
          '<strong>$K=\\{2\\}$</strong>'] },
      { task: 'Vyrieš rovnice $x^4=81$ a $x^3=-8$.',
        steps: ['Exponent $4$ je párny a $81&gt;0$: $x=\\pm\\sqrt[4]{81}=\\pm 3$.',
          'Exponent $3$ je nepárny: $x=\\sqrt[3]{-8}=-2$.',
          '<strong>$K_1=\\{-3; 3\\}$, $K_2=\\{-2\\}$</strong>'] }
    ]
  });

  gen('s2-mocninove', () => {
    const t = Math.random();
    if (t < 0.3) {
      const n = pick([2, 3, 4, 5]), r = n === 2 ? rnd(2, 12) : n === 3 ? rnd(2, 6) : rnd(2, 4);
      const odd = n % 2 === 1, s = odd ? pick([1, -1]) : 1, c = s * Math.pow(r, n);
      const ans = odd ? [s * r] : [-r, r];
      const root = n === 2 ? `\\sqrt{${c}}` : `\\sqrt[${n}]{${c}}`;
      const finish = odd ? `Exponent je nepárny, rovnica má jediný koreň $x = ${root} = ${s * r}$.`
        : `Exponent je párny a pravá strana kladná, rovnica má dva korene $x = \\pm ${root} = \\pm ${r}$.`;
      const v = Math.random();
      let eq, pre = '';
      if (v < 0.3) {
        eq = `x^{-${n}} = ${c < 0 ? '-' : ''}\\frac{1}{${Math.abs(c)}}`;
        pre = `$x^{-${n}} = \\frac{1}{x^{${n}}}$, teda $x^{${n}} = ${c}$. `;
      } else if (v < 0.6) {
        const k = pick([2, 3]), b = nz(-10, 10);
        eq = `${k}x^{${n}}${term(b)} = ${k * c + b}`;
        pre = `$${k}x^{${n}} = ${k * c}$, teda $x^{${n}} = ${c}$. `;
      } else eq = `x^{${n}} = ${c}`;
      return {
        type: 'set', signed: true, answer: ans, placeholder: ans.length > 1 ? 'x₁; x₂' : 'x',
        q: `Vyrieš v $${R}$ rovnicu $${eq}$. Zadaj všetky korene oddelené bodkočiarkou.`,
        solution: pre + finish,
        hint: 'Uprav rovnicu na tvar $x^n = a$. Pri párnom $n$ nezabudni na záporný koreň.'
      };
    }
    if (t < 0.6) {
      let r1, r2, c, a, b, valid;
      do {
        r1 = rnd(-6, 6); r2 = rnd(-6, 6); c = rnd(-3, 3);
        a = 2 * c + r1 + r2; b = c * c - r1 * r2;
        valid = [r1, r2].filter((r) => r + c >= 0);
      } while (r1 >= r2 || a === 0 || valid.length === 0);
      const rhs = poly([1, c]);
      const check = [r1, r2].map((r) => `$x = ${r}$: $\\sqrt{${a * r + b}} = ${Math.abs(r + c)}$ a pravá strana $${r + c}$ ${r + c >= 0 ? '✓' : '✗'}`).join('; ');
      return {
        type: 'set', signed: true, answer: valid, placeholder: valid.length > 1 ? 'x₁; x₂' : 'x',
        q: `Vyrieš rovnicu $\\sqrt{${poly([a, b])}} = ${rhs}$. Zadaj všetky korene oddelené bodkočiarkou.`,
        solution: `Umocníme: $${poly([a, b])} = ${c === 0 ? 'x^2' : poly([1, 2 * c, c * c])}$, teda $${poly([1, 2 * c - a, c * c - b])} = 0$ a $${fac(r1)}${fac(r2)} = 0$.
          Skúška: ${check}. $K = \\{${valid.join('; ')}\\}$.`,
        hint: 'Umocni obe strany, vyrieš kvadratickú rovnicu a nezabudni na skúšku – pravá strana nesmie byť záporná.'
      };
    }
    if (t < 0.8) {
      const x = rnd(-6, 6), p = nz(-3, 3);
      if (Math.random() < 0.5) {
        const c = nz(-3, 3), q = c * c * c - p * x;
        return {
          signed: true, answer: x,
          q: `Vyrieš rovnicu $\\sqrt[3]{${poly([p, q])}} = ${c}$.`,
          solution: `Umocníme na tretiu (pri nepárnej mocnine je to ekvivalentná úprava): $${poly([p, q])} = ${c * c * c}$, odkiaľ ${eqSolve(p, c * c * c - q)}.`,
          hint: 'Tretiu odmocninu odstrániš umocnením na tretiu; tretia odmocnina môže byť aj záporná.'
        };
      }
      const c = rnd(1, 5), q = c * c - p * x;
      return {
        signed: true, answer: x,
        q: `Vyrieš rovnicu $\\sqrt{${poly([p, q])}} = ${c}$.`,
        solution: `Umocníme: $${poly([p, q])} = ${c * c}$, odkiaľ ${eqSolve(p, c * c - q)}. Skúška: $\\sqrt{${c * c}} = ${c}$ ✓`,
        hint: 'Umocni obe strany na druhú a nezabudni na skúšku.'
      };
    }
    const BASES = [['0{,}3', 0.3], ['0{,}5', 0.5], ['0{,}8', 0.8], ['1{,}2', 1.2], ['1{,}5', 1.5], ['2{,}5', 2.5],
      ['\\sqrt{2}', Math.SQRT2], ['\\frac{3}{4}', 0.75], ['\\frac{4}{3}', 4 / 3]];
    let i, j;
    do { i = rnd(0, 8); j = rnd(0, 8); } while (i === j);
    const n = pick([-3, -2, -1, 2, 3, 4, 5]);
    const [t1, v1] = BASES[i], [t2, v2] = BASES[j];
    const e = (s) => `\\left(${s}\\right)^{${n}}`;
    const big = Math.pow(v1, n) > Math.pow(v2, n) ? e(t1) : e(t2);
    return Object.assign(choice(big, [e(t1), e(t2)]), {
      q: `Ktoré z čísel $${e(t1)}$ a $${e(t2)}$ je väčšie?`,
      solution: `Obe čísla sú hodnoty funkcie $y = x^{${n}}$ v kladných číslach $${t1}$ a $${t2}$. Na intervale $(0; \\infty)$ je táto funkcia ${n > 0 ? 'rastúca' : 'klesajúca'},
        preto väčšiu hodnotu dáva ${n > 0 ? 'väčší' : 'menší'} základ. Väčšie je $${big}$.`,
      hint: 'Zisti, či je funkcia $y = x^n$ pre daný exponent na $(0; \\infty)$ rastúca alebo klesajúca, a porovnaj základy.'
    });
  });

  lesson({
    id: 's2-exponencialne', order: 110, topics: ['funkcie', 'rovnice'], title: 'Exponenciálna funkcia a exponenciálne rovnice',
    summary: 'Vlastnosti funkcie y = aˣ, rovnice s rovnakým základom, vyňatie pred zátvorku a substitúcia.',
    theory: [
      `<p><strong>Exponenciálna funkcia</strong> $f(x)=a^x$, kde $a&gt;0$, $a\\neq 1$, má $D(f)=\\mathbb{R}$ a $H(f)=(0; \\infty)$. Graf prechádza bodom $[0; 1]$ a os $x$ je jeho asymptota.
       Pre $a&gt;1$ je rastúca, pre $0&lt;a&lt;1$ klesajúca. Je prostá, preto platí $a^u=a^v \\iff u=v$.</p>`,
      { fig: 's2-exp-log', caption: 'Graf funkcie $y=a^x$ (modrý) a $y=\\log_a x$ (zelený) pre zvolený základ $a$. Pre $a&gt;1$ obe rastú, pre $0&lt;a&lt;1$ obe klesajú. Grafy sú súmerné podľa priamky $y=x$.' },
      `<p><strong>Pravidlá pre mocniny:</strong> $a^r\\cdot a^s=a^{r+s}$, $\\ \\frac{a^r}{a^s}=a^{r-s}$, $\\ (a^r)^s=a^{rs}$, $\\ a^{-r}=\\frac{1}{a^r}$, $\\ a^{\\frac{1}{n}}=\\sqrt[n]{a}$.</p>`,
      `<p><strong>Typy exponenciálnych rovníc:</strong> (1) obe strany zapíšeme ako mocniny s rovnakým základom a porovnáme exponenty;
       (2) spoločnú mocninu vyberieme pred zátvorku, napr. $2^{x+2}+2^x=2^x(4+1)$; (3) substitúciou $y=a^x$ prevedieme rovnicu na kvadratickú.
       Pri substitúcii vyradíme záporné a nulové hodnoty $y$, lebo $a^x&gt;0$.</p>`
    ],
    examples: [
      { task: 'Vyrieš rovnicu $4^{x+1}=8^{x-1}$.',
        steps: ['$4=2^2$ a $8=2^3$, teda $2^{2x+2}=2^{3x-3}$.',
          'Porovnáme exponenty: $2x+2=3x-3$.',
          '<strong>$x=5$</strong>'] },
      { task: 'Vyrieš rovnicu $4^x-6\\cdot 2^x+8=0$.',
        steps: ['$4^x=(2^x)^2$. Substitúcia $y=2^x&gt;0$: $y^2-6y+8=0$.',
          'Korene $y_1=2$, $y_2=4$ sú kladné.',
          '$2^x=2$ dáva $x=1$, $2^x=4$ dáva $x=2$.',
          '<strong>$K=\\{1; 2\\}$</strong>'] }
    ]
  });

  gen('s2-exponencialne', () => {
    const t = Math.random();
    const sm = (s, e) => (s === 1 ? e : `${s}(${e})`);
    if (t < 0.35) {
      const b = pick([2, 2, 3, 5]), sMax = b === 2 ? 3 : 2, s1 = rnd(1, sMax), B1 = Math.pow(b, s1);
      const p = nz(-3, 3), q = rnd(-3, 3), ex1 = poly([p, q]);
      if (Math.random() < 0.5) {
        const tt = rnd(-3, b === 2 ? 6 : 3), rhs = tt >= 0 ? String(Math.pow(b, tt)) : `\\frac{1}{${Math.pow(b, -tt)}}`;
        const num = tt - s1 * q, den = s1 * p;
        return {
          signed: true, answer: num / den, show: fTxt(num, den),
          q: `Vyrieš rovnicu $${B1}^{${ex1}} = ${rhs}$ (zlomok zapíš napr. ako 3/2).`,
          solution: `Obe strany zapíšeme ako mocniny čísla $${b}$: ${s1 > 1 ? `$${B1} = ${b}^{${s1}}$, ` : ''}$${rhs} = ${b}^{${tt}}$.
            Dostaneme $${b}^{${sm(s1, ex1)}} = ${b}^{${tt}}$, teda $${poly([s1 * p, s1 * q])} = ${tt}$, odkiaľ ${eqSolve(den, num)}.`,
          hint: 'Zapíš obe strany ako mocniny toho istého základu a porovnaj exponenty.'
        };
      }
      let s2, u, w;
      do { s2 = rnd(1, sMax); u = nz(-3, 3); w = rnd(-3, 3); } while (s2 === s1 || s1 * p === s2 * u);
      const B2 = Math.pow(b, s2), ex2 = poly([u, w]), num = s2 * w - s1 * q, den = s1 * p - s2 * u;
      return {
        signed: true, answer: num / den, show: fTxt(num, den),
        q: `Vyrieš rovnicu $${B1}^{${ex1}} = ${B2}^{${ex2}}$ (zlomok zapíš napr. ako 3/2).`,
        solution: `${[[B1, s1], [B2, s2]].filter(([, s]) => s > 1).map(([B, s]) => `$${B} = ${b}^{${s}}$`).join(' a ')}, teda $${b}^{${sm(s1, ex1)}} = ${b}^{${sm(s2, ex2)}}$.
          Porovnáme exponenty: $${poly([s1 * p, s1 * q])} = ${poly([s2 * u, s2 * w])}$, odtiaľ ${eqSolve(den, num)}.`,
        hint: 'Zapíš obe strany ako mocniny toho istého základu a porovnaj exponenty.'
      };
    }
    if (t < 0.55) {
      const b = pick([2, 3, 5]), k = b === 5 ? 1 : rnd(1, 2), e = rnd(0, b === 2 ? 4 : 2), plus = b === 2 && k === 1 ? true : Math.random() < 0.6;
      const F = plus ? Math.pow(b, k) + 1 : Math.pow(b, k) - 1, N = Math.pow(b, e) * F, sg = plus ? '+' : '-';
      return {
        signed: true, answer: e,
        q: `Vyrieš rovnicu $${b}^{x + ${k}} ${sg} ${b}^{x} = ${N}$.`,
        solution: `Vyberieme $${b}^{x}$ pred zátvorku: $${b}^{x}(${b}^{${k}} ${sg} 1) = ${N}$, teda $${F}\\cdot ${b}^{x} = ${N}$ a $${b}^{x} = ${Math.pow(b, e)} = ${b}^{${e}}$. Preto $x = ${e}$.`,
        hint: 'Použi $a^{x+k} = a^k\\cdot a^x$ a vyber $a^x$ pred zátvorku.'
      };
    }
    if (t < 0.78) {
      const b = pick([2, 3]), eMax = b === 2 ? 3 : 2, e1 = rnd(0, eMax), u1 = Math.pow(b, e1);
      let e2 = null, u2;
      if (Math.random() < 0.6) { do { e2 = rnd(0, eMax); } while (e2 === e1); u2 = Math.pow(b, e2); } else u2 = -rnd(1, 6);
      const S = u1 + u2, P = u1 * u2, sq = Math.random() < 0.5;
      const first = sq ? `${b * b}^{x}` : `${b}^{2x}`;
      const mid = S === 0 ? '' : ` ${S > 0 ? '-' : '+'} ${Math.abs(S) === 1 ? '' : Math.abs(S) + '\\cdot '}${b}^{x}`;
      const ans = e2 === null ? [e1] : [e1, e2];
      return {
        type: 'set', signed: true, answer: ans, placeholder: ans.length > 1 ? 'x₁; x₂' : 'x',
        q: `Vyrieš rovnicu $${first}${mid}${term(P)} = 0$. Zadaj všetky korene oddelené bodkočiarkou.`,
        solution: `$${first} = (${b}^{x})^2$. Substitúcia $y = ${b}^{x}$, kde $y\\gt 0$: $y^2${term(-S, 'y')}${term(P)} = 0$, korene $y_1 = ${u1}$ a $y_2 = ${u2}$.
          ${e2 === null ? `Koreň $y_2 = ${u2}$ je záporný a $${b}^{x}$ záporné byť nemôže, preto ho vyradíme. ` : ''}Z $${b}^{x} = ${u1}$ dostaneme $x = ${e1}$${e2 !== null ? `, z $${b}^{x} = ${u2}$ dostaneme $x = ${e2}$` : ''}.`,
        hint: 'Zaveď substitúciu $y = a^x$ a vyrieš kvadratickú rovnicu. Záporné $y$ vyraď.'
      };
    }
    if (Math.random() < 0.5) {
      const MON = [
        ['\\left(\\frac{2}{3}\\right)^{x}', false, 'základ $\\frac{2}{3}$ leží medzi $0$ a $1$'],
        ['\\left(\\frac{5}{4}\\right)^{x}', true, 'základ $\\frac{5}{4}$ je väčší ako $1$'],
        ['\\left(0{,}4\\right)^{-x}', true, '$\\left(0{,}4\\right)^{-x} = \\left(\\frac{1}{0{,}4}\\right)^{x} = 2{,}5^{x}$ a základ $2{,}5$ je väčší ako $1$'],
        ['3^{-x}', false, '$3^{-x} = \\left(\\frac{1}{3}\\right)^{x}$ a základ $\\frac{1}{3}$ leží medzi $0$ a $1$'],
        ['\\left(\\sqrt{2}\\right)^{x}', true, 'základ $\\sqrt{2}\\approx 1{,}41$ je väčší ako $1$'],
        ['0{,}9^{x}', false, 'základ $0{,}9$ leží medzi $0$ a $1$'],
        ['\\left(\\frac{1}{5}\\right)^{-x}', true, '$\\left(\\frac{1}{5}\\right)^{-x} = 5^{x}$ a základ $5$ je väčší ako $1$'],
        ['\\left(\\sqrt{3} - 1\\right)^{x}', false, 'základ $\\sqrt{3} - 1\\approx 0{,}73$ leží medzi $0$ a $1$'],
        ['\\pi^{x}', true, 'základ $\\pi\\approx 3{,}14$ je väčší ako $1$'],
        ['\\left(\\frac{1}{2}\\right)^{-2x}', true, '$\\left(\\frac{1}{2}\\right)^{-2x} = 4^{x}$ a základ $4$ je väčší ako $1$']
      ];
      const [f, up, why] = pick(MON);
      return {
        type: 'choice', options: ['rastúca', 'klesajúca'], answer: up ? 'rastúca' : 'klesajúca',
        q: `Je funkcia $f(x) = ${f}$ rastúca, alebo klesajúca?`,
        solution: `Platí: ${why}. Exponenciálna funkcia so základom väčším ako $1$ je rastúca, so základom z intervalu $(0; 1)$ klesajúca. Funkcia je ${up ? 'rastúca' : 'klesajúca'}.`,
        hint: 'Zapíš funkciu v tvare $a^x$ a porovnaj základ $a$ s číslom $1$.'
      };
    }
    const BS = [['0{,}7', 0.7], ['\\frac{3}{5}', 0.6], ['1{,}3', 1.3], ['\\frac{7}{4}', 1.75]];
    const [bt, bv] = pick(BS);
    let e1, e2;
    do { e1 = rnd(-3, 4); e2 = rnd(-3, 4); } while (e1 === e2);
    const e = (x) => `\\left(${bt}\\right)^{${x}}`;
    const big = Math.pow(bv, e1) > Math.pow(bv, e2) ? e(e1) : e(e2);
    return Object.assign(choice(big, [e(e1), e(e2)]), {
      q: `Ktoré z čísel $${e(e1)}$ a $${e(e2)}$ je väčšie?`,
      solution: `Obe čísla sú hodnoty funkcie $y = \\left(${bt}\\right)^{x}$. Základ je ${bv > 1 ? 'väčší ako $1$, funkcia je rastúca a väčšiu hodnotu dáva väčší' : 'menší ako $1$, funkcia je klesajúca a väčšiu hodnotu dáva menší'} exponent. Väčšie je $${big}$.`,
      hint: 'Pri rovnakom základe rozhoduje, či je exponenciálna funkcia rastúca (základ väčší ako 1) alebo klesajúca.'
    });
  });

  lesson({
    id: 's2-logaritmy', order: 120, topics: ['funkcie', 'rovnice', 'vyrazy'], title: 'Logaritmus, logaritmická funkcia a rovnice',
    summary: 'Definícia a vlastnosti logaritmu, logaritmická funkcia ako inverzná k exponenciálnej, logaritmické rovnice.',
    theory: [
      `<p><strong>Logaritmus</strong> čísla $x&gt;0$ pri základe $a$ ($a&gt;0$, $a\\neq 1$) je exponent, na ktorý treba umocniť $a$, aby sme dostali $x$:
       $\\log_a x=y \\iff a^y=x$. Napríklad $\\log_2 8=3$, lebo $2^3=8$, a $\\log_3\\frac{1}{9}=-2$. Dekadický logaritmus $\\log x=\\log_{10} x$.
       Vždy platí $\\log_a 1=0$, $\\log_a a=1$ a $a^{\\log_a x}=x$.</p>`,
      `<p><strong>Vlastnosti</strong> (pre $x, y&gt;0$): $\\log_a(xy)=\\log_a x+\\log_a y$, $\\ \\log_a\\frac{x}{y}=\\log_a x-\\log_a y$, $\\ \\log_a x^r=r\\log_a x$.
       <strong>Prechod k inému základu:</strong> $\\log_a x=\\frac{\\log_b x}{\\log_b a}$; odtiaľ napríklad $\\log_a b\\cdot\\log_b a=1$.</p>`,
      { fig: 's2-exp-log', caption: 'Logaritmická funkcia $y=\\log_a x$ (zelená) je inverzná k $y=a^x$ (modrá); jej graf je súmerný s grafom exponenciálnej funkcie podľa priamky $y=x$. Platí $D=(0; \\infty)$, $H=\\mathbb{R}$, graf prechádza bodom $[1; 0]$.' },
      `<p><strong>Logaritmické rovnice:</strong> najprv určíme podmienky (každý argument logaritmu musí byť kladný). Rovnicu $\\log_a f(x)=c$ prepíšeme na $f(x)=a^c$;
       rovnicu $\\log_a f(x)=\\log_a g(x)$ na $f(x)=g(x)$; súčet logaritmov zlúčime na logaritmus súčinu; pri výrazoch s $\\log_a^2 x$ pomôže substitúcia $y=\\log_a x$.
       Nakoniec korene porovnáme s podmienkami.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\log_4 8$ a $\\log_6 4+\\log_6 9$.',
        steps: ['$4=2^2$, $8=2^3$: hľadáme $y$ s $2^{2y}=2^3$, teda $\\log_4 8=\\frac{3}{2}$.',
          '$\\log_6 4+\\log_6 9=\\log_6 (4\\cdot 9)=\\log_6 36=2$.',
          '<strong>$\\frac{3}{2}$ a $2$</strong>'] },
      { task: 'Vyrieš rovnicu $\\log_2 x+\\log_2(x-2)=3$.',
        steps: ['Podmienky: $x&gt;0$ a $x-2&gt;0$, teda $x&gt;2$.',
          'Zlúčime: $\\log_2[x(x-2)]=3$, teda $x(x-2)=8$ a $x^2-2x-8=0$.',
          'Korene $x_1=4$, $x_2=-2$; podmienke vyhovuje len $4$.',
          '<strong>$K=\\{4\\}$</strong>'] }
    ]
  });

  gen('s2-logaritmy', () => {
    const t = Math.random();
    if (t < 0.28) {
      const [b, ss, tr] = pick([[2, [1, 2, 3], [-4, 6]], [3, [1, 2], [-3, 4]], [5, [1, 2], [-2, 3]], [10, [1], [-3, 4]]]);
      const s = pick(ss) * (b !== 10 && Math.random() < 0.25 ? -1 : 1);
      const baseTex = s > 0 ? String(Math.pow(b, s)) : `\\frac{1}{${Math.pow(b, -s)}}`;
      const basePow = s > 0 ? baseTex : `\\left(${baseTex}\\right)`;
      let tn, td = 1, argTex;
      if (b !== 10 && Math.random() < 0.25) {
        td = 2; tn = pick([1, -1, 3]);
        argTex = tn === 1 ? `\\sqrt{${b}}` : tn === -1 ? `\\frac{1}{\\sqrt{${b}}}` : `${b}\\sqrt{${b}}`;
      } else {
        tn = rnd(tr[0], tr[1]);
        argTex = tn >= 0 ? String(Math.pow(b, tn)) : b === 10 ? dc(Math.pow(10, tn)) : `\\frac{1}{${Math.pow(b, -tn)}}`;
      }
      const logT = b === 10 && s === 1 ? '\\log' : `\\log_{${baseTex}}`;
      const tt = fTex(tn, td);
      return {
        signed: true, answer: tn / (td * s), show: fTxt(tn, td * s),
        q: `Vypočítaj $${logT} ${argTex}$ (zlomok zapíš napr. ako 3/2).`,
        solution: `Hľadáme exponent $y$, pre ktorý $${basePow}^{y} = ${argTex}$. ${s === 1 ? `Číslo $${argTex}$ zapíšeme ako $${b}^{${tt}}$, teda $y = ${tt}$.`
          : `Zapíšeme obe čísla ako mocniny čísla $${b}$: $${baseTex} = ${b}^{${s}}$ a $${argTex} = ${b}^{${tt}}$. Teda $${lead(s, 'y')} = ${tt}$ a $y = ${fTex(tn, td * s)}$.`}`,
        hint: '$\\log_a x$ je exponent, na ktorý treba umocniť $a$, aby vyšlo $x$. Zapíš základ aj argument ako mocniny toho istého čísla.'
      };
    }
    if (t < 0.52) {
      const v = rnd(0, 2);
      if (v === 0) {
        const [b, k] = pick([[2, 3], [2, 4], [2, 5], [3, 2], [3, 3], [5, 2], [6, 2], [10, 2], [10, 3]]);
        const P = Math.pow(b, k), divs = [];
        for (let d = 2; d < P; d++) if (P % d === 0) divs.push(d);
        const m = pick(divs), n = P / m;
        return {
          signed: true, answer: k,
          q: `Vypočítaj $${L(b)} ${m} + ${L(b)} ${n}$.`,
          solution: `Súčet logaritmov s rovnakým základom je logaritmus súčinu: $${L(b)} (${m}\\cdot ${n}) = ${L(b)} ${P} = ${k}$, lebo $${b}^{${k}} = ${P}$.`,
          hint: 'Použi $\\log_a x + \\log_a y = \\log_a (xy)$.'
        };
      }
      if (v === 1) {
        const b = pick([2, 3, 5, 10]), k = rnd(1, b === 2 ? 4 : 2);
        const n = pick([3, 5, 6, 7, 11, 12, 15].filter((x) => x !== b && x % b !== 0));
        const M = n * Math.pow(b, k);
        return {
          signed: true, answer: k,
          q: `Vypočítaj $${L(b)} ${M} - ${L(b)} ${n}$.`,
          solution: `Rozdiel logaritmov je logaritmus podielu: $${L(b)} \\frac{${M}}{${n}} = ${L(b)} ${Math.pow(b, k)} = ${k}$.`,
          hint: 'Použi $\\log_a x - \\log_a y = \\log_a \\frac{x}{y}$.'
        };
      }
      let p, q;
      do { p = pick([2, 3, 5]); q = pick([2, 3, 5]); } while (p === q);
      const iMax = q === 2 ? 3 : 2, jMax = p === 2 ? 3 : 2, i = rnd(1, iMax), j = rnd(1, jMax);
      return {
        signed: true, answer: i * j,
        q: `Vypočítaj $\\log_{${p}} ${Math.pow(q, i)} \\cdot \\log_{${q}} ${Math.pow(p, j)}$.`,
        solution: `$\\log_{${p}} ${q}^{${i}} = ${i}\\log_{${p}} ${q}$ a $\\log_{${q}} ${p}^{${j}} = ${j}\\log_{${q}} ${p}$. Keďže $\\log_{${p}} ${q}\\cdot\\log_{${q}} ${p} = 1$ (prechod k inému základu), výsledok je $${i}\\cdot ${j} = ${i * j}$.`,
        hint: 'Argumenty zapíš ako mocniny, exponenty vyber pred logaritmus a použi $\\log_a b\\cdot\\log_b a = 1$.'
      };
    }
    if (t < 0.8) {
      const v = rnd(0, 2);
      if (v === 0) {
        const b = pick([2, 3, 5, 10]), k = rnd(0, b === 2 ? 5 : 3), x = rnd(-6, 8), p = nz(-3, 3), P = Math.pow(b, k), q = P - p * x;
        return {
          signed: true, answer: x,
          q: `Vyrieš rovnicu $${L(b)} (${poly([p, q])}) = ${k}$.`,
          solution: `Podľa definície logaritmu $${poly([p, q])} = ${b}^{${k}} = ${P}$, odkiaľ ${eqSolve(p, P - q)}.
            Podmienka $${poly([p, q])}\\gt 0$ je splnená, lebo argument sa rovná $${P}$.`,
          hint: 'Rovnicu $\\log_a V = c$ prepíš podľa definície na $V = a^c$.'
        };
      }
      if (v === 1) {
        const [b, k] = pick([[2, 2], [2, 3], [2, 4], [3, 2], [3, 3], [10, 2], [2, 5]]);
        const P = Math.pow(b, k), divs = [];
        for (let d = 1; d <= P; d++) if (P % d === 0 && d * d !== P) divs.push(d);
        const r = pick(divs), s = P / r, d = r - s;
        return {
          signed: true, answer: r,
          q: `Vyrieš rovnicu $${L(b)} x + ${L(b)} (${lin(d)}) = ${k}$.`,
          solution: `Podmienky: $x\\gt 0$ a $${lin(d)}\\gt 0$, teda $x\\gt ${Math.max(0, d)}$. Zlúčime: $${L(b)} [x(${lin(d)})] = ${k}$, teda $x(${lin(d)}) = ${P}$
            a $${poly([1, -d, -P])} = 0$. Korene sú $${r}$ a $${-s}$; podmienkam vyhovuje iba $x = ${r}$.`,
          hint: 'Urči podmienky, zlúč logaritmy na logaritmus súčinu a korene porovnaj s podmienkami.'
        };
      }
      const b = pick([2, 3, 10]);
      let e1, e2;
      do { e1 = rnd(0, 3); e2 = rnd(0, 3); } while (e1 >= e2);
      const S = e1 + e2, P = e1 * e2, lg = `${L(b)} x`;
      return {
        type: 'set', answer: [Math.pow(b, e1), Math.pow(b, e2)], placeholder: 'x₁; x₂',
        q: `Vyrieš rovnicu $${L(b)}^2 x${term(-S, lg)}${term(P)} = 0$. Zadaj všetky korene oddelené bodkočiarkou.`,
        solution: `Podmienka $x\\gt 0$. Substitúcia $y = ${lg}$: $y^2${term(-S, 'y')}${term(P)} = 0$, korene $y_1 = ${e1}$ a $y_2 = ${e2}$.
          Odtiaľ $x = ${b}^{${e1}} = ${Math.pow(b, e1)}$ a $x = ${b}^{${e2}} = ${Math.pow(b, e2)}$. Obe čísla sú kladné.`,
        hint: 'Zaveď substitúciu $y = \\log_a x$, vyrieš kvadratickú rovnicu a vráť sa k $x = a^y$.'
      };
    }
    const kind = rnd(0, 3), a = rnd(-5, 5), c = rnd(1, 5), lg = L(pick([2, 3, 10])), mInf = '-' + INF;
    let f, ok, wrong, why;
    if (kind === 0) {
      f = `${lg} (${lin(a)})`; ok = iv(a, INF, false, false);
      wrong = [iv(a, INF, true, false), iv(mInf, a, false, false), `${R}\\setminus\\{${a}\\}`];
      why = `$${lin(a)}\\gt 0$, teda $x\\gt ${a}$.`;
    } else if (kind === 1) {
      const amx = a === 0 ? '-x' : `${a} - x`;
      f = `${lg} (${amx})`; ok = iv(mInf, a, false, false);
      wrong = [iv(a, INF, false, false), iv(mInf, a, false, true), iv(-a, INF, false, false)];
      why = `$${amx}\\gt 0$, teda $x\\lt ${a}$.`;
    } else if (kind === 2) {
      f = `${lg} (x^2 - ${c * c})`; ok = `${iv(mInf, -c, false, false)}\\cup${iv(c, INF, false, false)}`;
      wrong = [iv(-c, c, false, false), iv(c, INF, false, false), `${R}\\setminus\\{-${c}; ${c}\\}`];
      why = `$x^2 - ${c * c}\\gt 0$, teda $x^2\\gt ${c * c}$ a $|x|\\gt ${c}$.`;
    } else {
      f = `${lg} (${c * c} - x^2)`; ok = iv(-c, c, false, false);
      wrong = [iv(-c, c, true, true), `${iv(mInf, -c, false, false)}\\cup${iv(c, INF, false, false)}`, iv(0, c, false, false)];
      why = `$${c * c} - x^2\\gt 0$, teda $x^2\\lt ${c * c}$ a $|x|\\lt ${c}$.`;
    }
    return Object.assign(choice(ok, wrong), {
      q: `Urči definičný obor funkcie $f(x) = ${f}$.`,
      solution: `Argument logaritmu musí byť kladný: ${why} $D(f) = ${ok}$.`,
      hint: 'Logaritmus je definovaný len pre kladné argumenty (nula nestačí).'
    });
  });

  /* ---------- C. Planimetria a stereometria ---------- */

  const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10], [7, 24, 25]];

  lesson({
    id: 's2-podobnost', order: 130, topics: ['planimetria'], title: 'Podobnosť trojuholníkov, Euklidove vety a Pytagorova veta',
    summary: 'Koeficient podobnosti, vety o podobnosti, Euklidova veta o výške a o odvesne, Pytagorova veta.',
    theory: [
      `<p>Trojuholníky $ABC$ a $A'B'C'$ sú <strong>podobné</strong>, ak existuje číslo $k&gt;0$ (koeficient podobnosti), pre ktoré $|A'B'|=k|AB|$, $|B'C'|=k|BC|$ a $|A'C'|=k|AC|$.
       Podobnosť overíme vetou <em>sss</em> (pomery všetkých strán sú rovnaké), <em>uu</em> (zhodujú sa v dvoch uhloch) alebo <em>sus</em> (pomer dvoch strán a uhol nimi zovretý).
       Pomer obvodov podobných trojuholníkov je $k$, pomer ich obsahov je $k^2$.</p>`,
      { fig: 's2-euklid', caption: 'V pravouhlom trojuholníku $ABC$ s pravým uhlom pri vrchole $C$ rozdelí výška $v$ (päta $P$) preponu na úseky $c_a$ (pri strane $a$) a $c_b$ (pri strane $b$). Trojuholníky $ABC$, $ACP$ a $CBP$ sú podobné podľa vety uu.' },
      `<p>Z tejto podobnosti vyplývajú <strong>Euklidove vety</strong>:</p>
       <ul><li>veta o výške: $v^2=c_a\\cdot c_b$,</li>
       <li>veta o odvesne: $a^2=c\\cdot c_a$ a $b^2=c\\cdot c_b$.</li></ul>
       <p>Sčítaním viet o odvesnách dostaneme <strong>Pytagorovu vetu</strong> $a^2+b^2=c\\,(c_a+c_b)=c^2$. Z dvoch vyjadrení obsahu $\\frac{ab}{2}=\\frac{c\\,v}{2}$ plynie aj $v=\\frac{ab}{c}$.</p>`
    ],
    examples: [
      { task: 'Výška na preponu rozdelí preponu pravouhlého trojuholníka na úseky $c_a=9$ cm a $c_b=16$ cm. Vypočítaj výšku a odvesny.',
        steps: ['$v^2=c_a c_b=144$, teda $v=12$ cm.',
          'Prepona $c=9+16=25$ cm.',
          '$a^2=c\\,c_a=225$, $a=15$ cm; $b^2=c\\,c_b=400$, $b=20$ cm.',
          'Kontrola: $15^2+20^2=625=25^2$ ✓'] },
      { task: 'Tyč vysoká $1{,}5$ m vrhá tieň dlhý $2$ m. Strom vrhá v tom istom čase tieň dlhý $14$ m. Aký vysoký je strom?',
        steps: ['Lúče dopadajú pod rovnakým uhlom, trojuholníky (tyč, tieň) a (strom, tieň) sú podobné podľa vety uu.',
          'Koeficient podobnosti $k=\\frac{14}{2}=7$.',
          '<strong>Výška stromu je $7\\cdot 1{,}5=10{,}5$ m.</strong>'] }
    ]
  });

  gen('s2-podobnost', () => {
    const t = Math.random();
    if (t < 0.35) {
      const v = rnd(0, 2);
      if (v === 0) {
        let a, b, c;
        do { a = rnd(3, 9); b = rnd(3, 9); c = rnd(3, 12); } while (!(a < b && b < c && c < a + b));
        const k = pick([2, 3, 1.5, 2.5, 0.5]), askB = Math.random() < 0.5, side = askB ? b : c, nm2 = askB ? 'b' : 'c';
        return {
          answer: k * side,
          q: `Trojuholníky $ABC$ a $A'B'C'$ sú podobné (vrcholu $A$ zodpovedá $A'$ atď.). Trojuholník $ABC$ má strany $a = ${a}$ cm, $b = ${b}$ cm, $c = ${c}$ cm a v trojuholníku $A'B'C'$ je $a' = ${dc(k * a)}$ cm. Vypočítaj $${nm2}'$ v cm.`,
          solution: `Koeficient podobnosti $k = \\frac{a'}{a} = \\frac{${dc(k * a)}}{${a}} = ${dc(k)}$. Potom $${nm2}' = k\\cdot ${nm2} = ${dc(k)}\\cdot ${side} = ${dc(k * side)}$ cm.`,
          hint: 'Najprv urči koeficient podobnosti z dvojice zodpovedajúcich strán.'
        };
      }
      if (v === 1) {
        const k = pick([2, 3, 1.5, 0.5, 2.5]), area = Math.random() < 0.5, base = 4 * rnd(2, 12);
        const ans = area ? k * k * base : k * base;
        return {
          answer: ans,
          q: `Trojuholník $ABC$ má ${area ? `obsah $${base}$ cm²` : `obvod $${base}$ cm`}. Trojuholník $A'B'C'$ je s ním podobný a jeho strany sú $${dc(k)}$-násobkom zodpovedajúcich strán trojuholníka $ABC$. Aký ${area ? 'obsah (v cm²)' : 'obvod (v cm)'} má trojuholník $A'B'C'$?`,
          solution: area ? `Obsahy podobných útvarov sú v pomere $k^2 = ${dc(k * k)}$: $S' = ${dc(k * k)}\\cdot ${base} = ${dc(ans)}$ cm².`
            : `Obvody sú v pomere $k = ${dc(k)}$: $o' = ${dc(k)}\\cdot ${base} = ${dc(ans)}$ cm.`,
          hint: area ? 'Pri podobnosti s koeficientom $k$ sa obsah zmení $k^2$-krát.' : 'Pri podobnosti s koeficientom $k$ sa obvod zmení $k$-krát.'
        };
      }
      const h = pick([1, 1.2, 1.5, 2]), s = pick([0.8, 1.2, 1.5, 2, 2.5, 3]), m = rnd(3, 10);
      return {
        answer: h * m,
        q: `Tyč s výškou $${dc(h)}$ m vrhá tieň dlhý $${dc(s)}$ m. V tom istom čase vrhá strom tieň dlhý $${dc(s * m)}$ m. Aký vysoký je strom (v metroch)?`,
        solution: `Slnečné lúče dopadajú pod rovnakým uhlom, trojuholníky (tyč, tieň) a (strom, tieň) sú podobné. Koeficient $k = \\frac{${dc(s * m)}}{${dc(s)}} = ${m}$,
          preto výška stromu je $${m}\\cdot ${dc(h)} = ${dc(h * m)}$ m.`,
        hint: 'Pomer výšky a dĺžky tieňa je pre tyč aj strom rovnaký.'
      };
    }
    if (t < 0.7) {
      const [a0, b0, c0] = pick([[3, 4, 5], [4, 3, 5], [5, 12, 13], [12, 5, 13]]), k = c0 === 5 ? rnd(1, 3) : 1;
      const ca = k * a0 * a0, cb = k * b0 * b0, v = k * a0 * b0, C = k * c0 * c0, la = k * a0 * c0, lb = k * b0 * c0;
      const intro = 'Pravouhlý trojuholník $ABC$ má pravý uhol pri vrchole $C$.';
      const sub = rnd(0, 3);
      if (sub === 0) {
        return { answer: v, q: `${intro} Výška na preponu ju delí na úseky $c_a = ${ca}$ cm a $c_b = ${cb}$ cm. Vypočítaj výšku $v$ v cm.`,
          solution: `Euklidova veta o výške: $v^2 = c_a\\cdot c_b = ${ca}\\cdot ${cb} = ${v * v}$, teda $v = ${v}$ cm.`,
          hint: 'Použi Euklidovu vetu o výške $v^2 = c_a\\cdot c_b$.' };
      }
      if (sub === 1) {
        return { answer: la, q: `${intro} Prepona má dĺžku $c = ${C}$ cm a úsek prepony pri strane $a$ je $c_a = ${ca}$ cm. Vypočítaj dĺžku odvesny $a$ v cm.`,
          solution: `Euklidova veta o odvesne: $a^2 = c\\cdot c_a = ${C}\\cdot ${ca} = ${la * la}$, teda $a = ${la}$ cm.`,
          hint: 'Použi Euklidovu vetu o odvesne $a^2 = c\\cdot c_a$.' };
      }
      if (sub === 2) {
        return { answer: cb, q: `${intro} Výška na preponu má dĺžku $v = ${v}$ cm a úsek prepony $c_a = ${ca}$ cm. Vypočítaj úsek $c_b$ v cm.`,
          solution: `Z vety o výške $v^2 = c_a\\cdot c_b$: $c_b = \\frac{v^2}{c_a} = \\frac{${v * v}}{${ca}} = ${cb}$ cm.`,
          hint: 'Z Euklidovej vety o výške vyjadri $c_b$.' };
      }
      return { answer: v, q: `${intro} Jeho odvesny majú dĺžky $a = ${la}$ cm a $b = ${lb}$ cm. Vypočítaj výšku na preponu v cm.`,
        solution: `Prepona $c = \\sqrt{${la}^2 + ${lb}^2} = ${C}$ cm. Z obsahu $\\frac{ab}{2} = \\frac{c\\,v}{2}$ dostaneme $v = \\frac{ab}{c} = \\frac{${la}\\cdot ${lb}}{${C}} = ${v}$ cm.`,
        hint: 'Vypočítaj preponu a vyjadri obsah trojuholníka dvoma spôsobmi.' };
    }
    const [p0, q0, r0] = pick(TRIPLES), k = rnd(1, 3), p = k * p0, q = k * q0, r = k * r0;
    const sub = rnd(0, 2);
    if (sub === 0) {
      return { answer: r, q: `Kosoštvorec má uhlopriečky dlhé $${2 * p}$ cm a $${2 * q}$ cm. Vypočítaj dĺžku jeho strany v cm.`,
        solution: `Uhlopriečky kosoštvorca sú na seba kolmé a navzájom sa rozpoľujú. Strana je preponou pravouhlého trojuholníka s odvesnami $${p}$ a $${q}$: $a = \\sqrt{${p * p} + ${q * q}} = ${r}$ cm.`,
        hint: 'Uhlopriečky kosoštvorca sa rozpoľujú a zvierajú pravý uhol.' };
    }
    if (sub === 1) {
      return { answer: q, q: `Rovnoramenný trojuholník má základňu $${2 * p}$ cm a ramená dlhé $${r}$ cm. Vypočítaj výšku na základňu v cm.`,
        solution: `Výška na základňu ju rozpoľuje, vznikne pravouhlý trojuholník s preponou $${r}$ a odvesnou $${p}$: $v = \\sqrt{${r * r} - ${p * p}} = ${q}$ cm.`,
        hint: 'Výška rovnoramenného trojuholníka rozdelí základňu na dve rovnaké časti.' };
    }
    const top = rnd(2, 10), bottom = top + 2 * p;
    return { answer: q, q: `Rovnoramenný lichobežník má základne $${bottom}$ cm a $${top}$ cm a ramená dlhé $${r}$ cm. Vypočítaj jeho výšku v cm.`,
      solution: `Výšky z koncových bodov kratšej základne odrežú z dlhšej základne na každej strane úsek $\\frac{${bottom} - ${top}}{2} = ${p}$ cm.
        Z pravouhlého trojuholníka: $v = \\sqrt{${r * r} - ${p * p}} = ${q}$ cm.`,
      hint: 'Spusti výšky z vrcholov kratšej základne – vzniknú dva pravouhlé trojuholníky a obdĺžnik.' };
  });

  lesson({
    id: 's2-kruh', order: 140, topics: ['planimetria'], title: 'Kružnica, kruh a zložitejšie útvary',
    summary: 'Stredový a obvodový uhol, Talesova veta, dotyčnica, kruhový výsek a obsahy zložených útvarov.',
    theory: [
      `<p><strong>Stredový uhol</strong> má vrchol v strede kružnice, <strong>obvodový uhol</strong> na kružnici. Obvodový uhol je polovicou stredového uhla prislúchajúceho
       k tomu istému oblúku a všetky obvodové uhly nad tým istým oblúkom sú zhodné. Obvodové uhly nad doplnkovými oblúkmi majú súčet $180^\\circ$,
       preto v <strong>tetivovom štvoruholníku</strong> (vpísanom do kružnice) je súčet protiľahlých uhlov $180^\\circ$.</p>`,
      { fig: 's2-uhly', caption: 'Vľavo: obvodový uhol $\\alpha$ pri vrchole $V$ a stredový uhol $2\\alpha$ nad tým istým oblúkom $AB$. Vpravo: Talesova veta – obvodový uhol nad priemerom je pravý.' },
      `<p><strong>Talesova veta:</strong> každý obvodový uhol nad priemerom je pravý. <strong>Dotyčnica</strong> je kolmá na polomer v bode dotyku, preto z bodu vo vzdialenosti $d$ od stredu
       je dĺžka dotyčnicovej úsečky $t=\\sqrt{d^2-r^2}$. <strong>Kruh:</strong> $o=2\\pi r$, $S=\\pi r^2$. <strong>Kruhový výsek</strong> so stredovým uhlom $\\alpha$:
       dĺžka oblúka $l=2\\pi r\\cdot\\frac{\\alpha}{360^\\circ}$, obsah $S=\\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$. <strong>Medzikružie:</strong> $S=\\pi(R^2-r^2)$.</p>`,
      `<p><strong>Zložitejšie útvary</strong> rozložíme na známe útvary a obsahy sčítame, alebo od väčšieho útvaru odčítame jeho časti. Pravidelný šesťuholník sa skladá
       zo šiestich rovnostranných trojuholníkov: $S=6\\cdot\\frac{\\sqrt3}{4}a^2$. Kruhový odsek dostaneme, keď od výseku odčítame trojuholník.</p>`
    ],
    examples: [
      { task: 'Obvodový uhol nad tetivou $AB$ (na väčšom oblúku) má $35^\\circ$. Aký je stredový uhol nad menším oblúkom a obvodový uhol nad väčším oblúkom?',
        steps: ['Stredový uhol je dvojnásobkom obvodového: $2\\cdot 35^\\circ=70^\\circ$.',
          'Obvodový uhol z menšieho oblúka dopĺňa pôvodný do $180^\\circ$: $180^\\circ-35^\\circ=145^\\circ$.',
          '<strong>$70^\\circ$ a $145^\\circ$</strong>'] },
      { task: 'Do štvorca so stranou $10$ cm je vpísaný kruh. Aký obsah má časť štvorca mimo kruhu?',
        steps: ['Polomer vpísaného kruhu je polovica strany: $r=5$ cm.',
          '$S=a^2-\\pi r^2=100-25\\pi$.',
          '<strong>$S\\approx 21{,}46$ cm²</strong>'] }
    ]
  });

  gen('s2-kruh', () => {
    const t = Math.random();
    if (t < 0.35) {
      const v = rnd(0, 4);
      const deg = (x) => `${x}^\\circ`;
      const base = { q: '', solution: '', hint: 'Obvodový uhol je polovicou stredového uhla nad tým istým oblúkom; uhol nad priemerom je pravý.' };
      if (v === 0) {
        const a = rnd(10, 85);
        return Object.assign(base, { answer: 2 * a,
          q: `Obvodový uhol prislúchajúci k oblúku $AB$ má veľkosť $${deg(a)}$. Aký veľký je stredový uhol prislúchajúci k tomu istému oblúku (v stupňoch)?`,
          solution: `Stredový uhol je dvojnásobkom obvodového: $2\\cdot ${deg(a)} = ${deg(2 * a)}$.` });
      }
      if (v === 1) {
        const w = 2 * rnd(10, 85);
        return Object.assign(base, { answer: w / 2,
          q: `Stredový uhol $ASB$ má veľkosť $${deg(w)}$. Aký veľký je obvodový uhol prislúchajúci k tomu istému oblúku $AB$ (v stupňoch)?`,
          solution: `Obvodový uhol je polovicou stredového: $${deg(w)} : 2 = ${deg(w / 2)}$.` });
      }
      if (v === 2) {
        const a = rnd(15, 75);
        return Object.assign(base, { answer: 90 - a,
          q: `Trojuholník $ABC$ je vpísaný do kružnice a jeho strana $AB$ je priemerom kružnice. Uhol pri vrchole $A$ má $${deg(a)}$. Aký veľký je uhol pri vrchole $B$ (v stupňoch)?`,
          solution: `Podľa Talesovej vety je uhol pri vrchole $C$ pravý. Preto $\\beta = 180^\\circ - 90^\\circ - ${deg(a)} = ${deg(90 - a)}$.` });
      }
      if (v === 3) {
        const a = rnd(40, 140);
        return Object.assign(base, { answer: 180 - a,
          q: `Štvoruholník $ABCD$ je vpísaný do kružnice. Uhol pri vrchole $A$ má $${deg(a)}$. Aký veľký je uhol pri vrchole $C$ (v stupňoch)?`,
          solution: `V tetivovom štvoruholníku je súčet protiľahlých uhlov $180^\\circ$: $\\gamma = 180^\\circ - ${deg(a)} = ${deg(180 - a)}$.` });
      }
      const w = 2 * rnd(20, 85);
      return Object.assign(base, { answer: 180 - w / 2,
        q: `Stredový uhol $ASB$ má veľkosť $${deg(w)}$. Bod $V$ leží na menšom oblúku $AB$. Aký veľký je uhol $AVB$ (v stupňoch)?`,
        solution: `Uhol $AVB$ je obvodový uhol nad väčším oblúkom $AB$, ktorému prislúcha stredový uhol $360^\\circ - ${deg(w)} = ${deg(360 - w)}$.
          Preto $|\\angle AVB| = ${deg(360 - w)} : 2 = ${deg(180 - w / 2)}$.` });
    }
    const round = 'Výsledok zaokrúhli na dve desatinné miesta.';
    if (t < 0.65) {
      const v = rnd(0, 2), r = rnd(2, 12);
      if (v === 0) {
        const al = pick([30, 40, 45, 60, 72, 90, 120, 135, 150, 210, 240, 270, 300]), val = 2 * Math.PI * r * al / 360;
        return { ...r2ans(val),
          q: `Vypočítaj dĺžku kružnicového oblúka s polomerom $r = ${r}$ cm, ktorému prislúcha stredový uhol $${al}^\\circ$ (v cm). ${round}`,
          solution: `$l = 2\\pi r\\cdot\\frac{\\alpha}{360^\\circ} = 2\\pi\\cdot ${r}\\cdot\\frac{${al}}{360} = ${piTex(2 * r * al, 360)}\\approx ${dc2(val)}$ cm.`,
          hint: 'Oblúk je taká časť obvodu kružnice, aká časť z $360^\\circ$ je stredový uhol.' };
      }
      if (v === 1) {
        const al = pick([30, 40, 45, 60, 72, 90, 120, 135, 150, 210, 240, 270, 300]), val = Math.PI * r * r * al / 360;
        return { ...r2ans(val),
          q: `Vypočítaj obsah kruhového výseku s polomerom $r = ${r}$ cm a stredovým uhlom $${al}^\\circ$ (v cm²). ${round}`,
          solution: `$S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ} = \\pi\\cdot ${r * r}\\cdot\\frac{${al}}{360} = ${piTex(r * r * al, 360)}\\approx ${dc2(val)}$ cm².`,
          hint: 'Výsek je taká časť kruhu, aká časť z $360^\\circ$ je stredový uhol.' };
      }
      const Rr = r + rnd(1, 5), val = Math.PI * (Rr * Rr - r * r);
      return { ...r2ans(val),
        q: `Medzikružie je ohraničené sústrednými kružnicami s polomermi $${Rr}$ cm a $${r}$ cm. Vypočítaj jeho obsah (v cm²). ${round}`,
        solution: `$S = \\pi(R^2 - r^2) = \\pi(${Rr * Rr} - ${r * r}) = ${piTex(Rr * Rr - r * r, 1)}\\approx ${dc2(val)}$ cm².`,
        hint: 'Od obsahu väčšieho kruhu odčítaj obsah menšieho.' };
    }
    const v = rnd(0, 4);
    if (v === 0) {
      const a = 2 * rnd(2, 10), val = a * a - Math.PI * a * a / 4;
      return { ...r2ans(val),
        q: `Do štvorca so stranou $${a}$ cm je vpísaný kruh. Vypočítaj obsah časti štvorca, ktorá leží mimo kruhu (v cm²). ${round}`,
        solution: `Polomer kruhu je $${a / 2}$ cm. $S = a^2 - \\pi r^2 = ${a * a} - ${piTex(a * a, 4)}\\approx ${dc2(val)}$ cm².`,
        hint: 'Polomer vpísaného kruhu je polovica strany štvorca.' };
    }
    if (v === 1) {
      const h = rnd(4, 15), b = 2 * rnd(2, 8), val = h * b + Math.PI * b * b / 8;
      return { ...r2ans(val),
        q: `Okno má tvar obdĺžnika s výškou $${h}$ dm a šírkou $${b}$ dm, nad ktorým je polkruh s priemerom $${b}$ dm. Vypočítaj obsah okna (v dm²). ${round}`,
        solution: `Obdĺžnik: $${h}\\cdot ${b} = ${h * b}$. Polkruh s polomerom $${b / 2}$: $\\frac{1}{2}\\pi\\cdot ${b * b / 4} = ${piTex(b * b, 8)}$.
          Spolu $S = ${h * b} + ${piTex(b * b, 8)}\\approx ${dc2(val)}$ dm².`,
        hint: 'Rozlož okno na obdĺžnik a polkruh a obsahy sčítaj.' };
    }
    if (v === 2) {
      const [p0, q0, h0] = pick(TRIPLES), k = rnd(1, 2), swap = Math.random() < 0.5;
      const r = k * (swap ? q0 : p0), tt = k * (swap ? p0 : q0), d = k * h0;
      return { answer: tt,
        q: `Bod $M$ má od stredu kružnice s polomerom $${r}$ cm vzdialenosť $${d}$ cm. Aká dlhá je úsečka z bodu $M$ do bodu dotyku dotyčnice vedenej z $M$ ku kružnici (v cm)?`,
        solution: `Dotyčnica je kolmá na polomer v bode dotyku, vzniká pravouhlý trojuholník s preponou $${d}$ a odvesnou $${r}$: $t = \\sqrt{${d * d} - ${r * r}} = ${tt}$ cm.`,
        hint: 'Spoj stred s bodom dotyku – polomer je kolmý na dotyčnicu.' };
    }
    if (v === 3) {
      const a = rnd(2, 12), val = 3 * Math.sqrt(3) / 2 * a * a;
      return { ...r2ans(val),
        q: `Vypočítaj obsah pravidelného šesťuholníka so stranou $${a}$ cm (v cm²). ${round}`,
        solution: `Šesťuholník sa skladá zo šiestich rovnostranných trojuholníkov so stranou $${a}$: $S = 6\\cdot\\frac{\\sqrt3}{4}\\cdot ${a * a} = ${fTex(3 * a * a, 2)}\\sqrt3\\approx ${dc2(val)}$ cm².`,
        hint: 'Spoj stred šesťuholníka s vrcholmi – vznikne šesť rovnostranných trojuholníkov s obsahom $\\frac{\\sqrt3}{4}a^2$.' };
    }
    const r = 2 * rnd(1, 6), val = Math.PI * r * r / 4 - r * r / 2;
    return { ...r2ans(val),
      q: `Vypočítaj obsah kruhového odseku, ktorý odreže z kruhu s polomerom $${r}$ cm tetiva so stredovým uhlom $90^\\circ$ (v cm²). ${round}`,
      solution: `Výsek: $\\frac{1}{4}\\pi r^2 = ${piTex(r * r, 4)}$. Trojuholník so stranami $r$, $r$ a pravým uhlom: $\\frac{r^2}{2} = ${r * r / 2}$.
        Odsek: $S = ${piTex(r * r, 4)} - ${r * r / 2}\\approx ${dc2(val)}$ cm².`,
      hint: 'Od obsahu štvrťkruhu (výseku) odčítaj obsah pravouhlého trojuholníka.' };
  });

  const BOKY = ['trojboký', 'štvorboký', 'päťboký', 'šesťboký', 'sedemboký', 'osemboký', 'deväťboký', 'desaťboký'];
  const UHOL = ['trojuholník', 'štvoruholník', 'päťuholník', 'šesťuholník', 'sedemuholník', 'osemuholník', 'deväťuholník', 'desaťuholník'];

  lesson({
    id: 's2-telesa', order: 150, topics: ['stereometria'], title: 'Hranoly, ihlany a rotačné telesá',
    summary: 'Hranol, ihlan, valec, kužeľ a guľa: prvky telies, uhlopriečky, povrch a objem.',
    theory: [
      `<p><strong>Hranol</strong> má dve zhodné rovnobežné podstavy ($n$-uholníky) a plášť z rovnobežníkov; v kolmom hranole sú bočné steny obdĺžniky. Objem $V=S_p\\cdot v$,
       povrch $S=2S_p+S_{pl}$. <strong>Kváder</strong> s hranami $a$, $b$, $c$ má telesovú uhlopriečku $u=\\sqrt{a^2+b^2+c^2}$.
       Pre každý konvexný mnohosten platí Eulerov vzťah $v-h+s=2$ (vrcholy, hrany, steny).</p>`,
      `<p><strong>Ihlan</strong> má podstavu ($n$-uholník) a bočné steny – trojuholníky so spoločným vrcholom. $V=\\frac{1}{3}S_p\\cdot v$, $S=S_p+S_{pl}$.
       V <strong>pravidelnom štvorbokom ihlane</strong> so štvorcovou podstavou so stranou $a$ je stenová výška $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}$ a plášť tvoria štyri zhodné trojuholníky s obsahom $\\frac{a\\,v_s}{2}$.</p>`,
      { fig: 's2-telesa', caption: 'Vľavo: pravidelný štvorboký ihlan s výškou $v$ a stenovou výškou $v_s$; $v$, $\\frac{a}{2}$ a $v_s$ tvoria pravouhlý trojuholník. Vpravo: rotačný kužeľ s polomerom $r$, výškou $v$ a stranou $s$, pričom $s^2=r^2+v^2$.' },
      `<p><strong>Rotačné telesá:</strong> valec $V=\\pi r^2 v$, $S=2\\pi r(r+v)$; kužeľ $V=\\frac{1}{3}\\pi r^2 v$, $S=\\pi r(r+s)$; guľa $V=\\frac{4}{3}\\pi r^3$, $S=4\\pi r^2$.</p>`
    ],
    examples: [
      { task: 'Pravidelný štvorboký ihlan má podstavnú hranu $a=6$ cm a výšku $v=4$ cm. Vypočítaj jeho povrch a objem.',
        steps: ['Stenová výška: $v_s=\\sqrt{4^2+3^2}=5$ cm.',
          '$S=a^2+4\\cdot\\frac{a\\,v_s}{2}=36+4\\cdot 15=96$ cm².',
          '$V=\\frac{1}{3}a^2 v=\\frac{1}{3}\\cdot 36\\cdot 4=48$ cm³.'] },
      { task: 'Rotačný kužeľ má polomer podstavy $r=3$ cm a stranu $s=5$ cm. Vypočítaj jeho objem a povrch.',
        steps: ['Výška: $v=\\sqrt{s^2-r^2}=\\sqrt{25-9}=4$ cm.',
          '$V=\\frac{1}{3}\\pi\\cdot 9\\cdot 4=12\\pi\\approx 37{,}70$ cm³.',
          '$S=\\pi r(r+s)=\\pi\\cdot 3\\cdot 8=24\\pi\\approx 75{,}40$ cm².'] }
    ]
  });

  gen('s2-telesa', () => {
    const t = Math.random();
    if (t < 0.25) {
      if (Math.random() < 0.5) {
        const [a0, b0, c0, u0] = pick([[1, 2, 2, 3], [2, 3, 6, 7], [1, 4, 8, 9], [4, 4, 7, 9], [2, 6, 9, 11], [6, 6, 7, 11], [3, 4, 12, 13], [2, 10, 11, 15], [8, 9, 12, 17]]);
        const k = rnd(1, 2), [a, b, c] = shuffle([a0 * k, b0 * k, c0 * k]), u = u0 * k;
        return { answer: u,
          q: `Kváder má rozmery $a = ${a}$ cm, $b = ${b}$ cm a $c = ${c}$ cm. Vypočítaj dĺžku jeho telesovej uhlopriečky (v cm).`,
          solution: `$u^2 = a^2 + b^2 + c^2 = ${a * a} + ${b * b} + ${c * c} = ${u * u}$, teda $u = ${u}$ cm.`,
          hint: 'Telesová uhlopriečka je prepona pravouhlého trojuholníka s odvesnami: stenová uhlopriečka a tretia hrana. Spolu $u^2 = a^2 + b^2 + c^2$.' };
      }
      const [p, q, r] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]]), h = rnd(2, 12), askV = Math.random() < 0.5;
      const V = p * q * h / 2, S = p * q + (p + q + r) * h;
      return { answer: askV ? V : S,
        q: `Kolmý trojboký hranol má podstavu tvaru pravouhlého trojuholníka s odvesnami $${p}$ cm a $${q}$ cm. Výška hranola je $${h}$ cm. Vypočítaj jeho ${askV ? 'objem (v cm³)' : 'povrch (v cm²)'}.`,
        solution: askV ? `$V = S_p\\cdot v = \\frac{${p}\\cdot ${q}}{2}\\cdot ${h} = ${V}$ cm³.`
          : `Prepona podstavy: $\\sqrt{${p * p} + ${q * q}} = ${r}$ cm. $S = 2S_p + S_{pl} = ${p}\\cdot ${q} + (${p} + ${q} + ${r})\\cdot ${h} = ${S}$ cm².`,
        hint: askV ? 'Objem hranola je obsah podstavy krát výška.' : 'Povrch tvoria dve podstavy a tri obdĺžnikové bočné steny; chýbajúcu stranu podstavy dopočítaj Pytagorovou vetou.' };
    }
    if (t < 0.5) {
      const [h2, v, vs] = pick([[3, 4, 5], [4, 3, 5], [5, 12, 13], [12, 5, 13], [6, 8, 10], [8, 6, 10], [8, 15, 17]]);
      const a = 2 * h2, ask = rnd(0, 2), S = a * a + 2 * a * vs, V = a * a * v / 3;
      const vsTxt = `Stenová výška je preponou pravouhlého trojuholníka s odvesnami $v = ${v}$ a $\\frac{a}{2} = ${h2}$: $v_s = \\sqrt{${v * v} + ${h2 * h2}} = ${vs}$ cm.`;
      return { answer: [vs, S, V][ask],
        q: `Pravidelný štvorboký ihlan má podstavnú hranu $a = ${a}$ cm a výšku $v = ${v}$ cm. Vypočítaj ${['jeho stenovú výšku $v_s$ (v cm)', 'jeho povrch (v cm²)', 'jeho objem (v cm³)'][ask]}.`,
        solution: ask === 0 ? vsTxt : ask === 1 ? `${vsTxt} $S = a^2 + 4\\cdot\\frac{a\\,v_s}{2} = ${a * a} + 2\\cdot ${a}\\cdot ${vs} = ${S}$ cm².`
          : `$V = \\frac{1}{3}a^2 v = \\frac{1}{3}\\cdot ${a * a}\\cdot ${v} = ${V}$ cm³.`,
        hint: ask === 2 ? 'Objem ihlana je tretina súčinu obsahu podstavy a výšky.' : 'Výška ihlana, polovica podstavnej hrany a stenová výška tvoria pravouhlý trojuholník.' };
    }
    if (t < 0.8) {
      const v = rnd(0, 2), askV = Math.random() < 0.5, round = 'Výsledok zaokrúhli na dve desatinné miesta.';
      if (v === 0) {
        const r = rnd(2, 10), h = rnd(2, 15), val = askV ? Math.PI * r * r * h : 2 * Math.PI * r * (r + h);
        return { ...r2ans(val),
          q: `Rotačný valec má polomer podstavy $${r}$ cm a výšku $${h}$ cm. Vypočítaj jeho ${askV ? 'objem (v cm³)' : 'povrch (v cm²)'}. ${round}`,
          solution: askV ? `$V = \\pi r^2 v = \\pi\\cdot ${r * r}\\cdot ${h} = ${piTex(r * r * h, 1)}\\approx ${dc2(val)}$ cm³.`
            : `$S = 2\\pi r(r + v) = 2\\pi\\cdot ${r}\\cdot ${r + h} = ${piTex(2 * r * (r + h), 1)}\\approx ${dc2(val)}$ cm².`,
          hint: askV ? 'Objem valca je obsah podstavy krát výška.' : 'Povrch valca tvoria dve kruhové podstavy a plášť – obdĺžnik so stranami $2\\pi r$ a $v$.' };
      }
      if (v === 1) {
        const [r, h, s] = pick([[3, 4, 5], [4, 3, 5], [5, 12, 13], [6, 8, 10], [8, 6, 10], [9, 12, 15], [12, 5, 13]]);
        const val = askV ? Math.PI * r * r * h / 3 : Math.PI * r * (r + s);
        return { ...r2ans(val),
          q: `Rotačný kužeľ má polomer podstavy $${r}$ cm a ${askV ? `stranu $${s}$ cm` : `výšku $${h}$ cm`}. Vypočítaj jeho ${askV ? 'objem (v cm³)' : 'povrch (v cm²)'}. ${round}`,
          solution: askV ? `Výška: $v = \\sqrt{${s * s} - ${r * r}} = ${h}$ cm. $V = \\frac{1}{3}\\pi r^2 v = \\frac{1}{3}\\pi\\cdot ${r * r}\\cdot ${h} = ${piTex(r * r * h, 3)}\\approx ${dc2(val)}$ cm³.`
            : `Strana: $s = \\sqrt{${r * r} + ${h * h}} = ${s}$ cm. $S = \\pi r(r + s) = \\pi\\cdot ${r}\\cdot ${r + s} = ${piTex(r * (r + s), 1)}\\approx ${dc2(val)}$ cm².`,
          hint: 'Polomer, výška a strana kužeľa tvoria pravouhlý trojuholník: $s^2 = r^2 + v^2$.' };
      }
      const r = rnd(1, 10), val = askV ? 4 / 3 * Math.PI * r * r * r : 4 * Math.PI * r * r;
      return { ...r2ans(val),
        q: `Guľa má polomer $${r}$ cm. Vypočítaj jej ${askV ? 'objem (v cm³)' : 'povrch (v cm²)'}. ${round}`,
        solution: askV ? `$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi\\cdot ${r * r * r} = ${piTex(4 * r * r * r, 3)}\\approx ${dc2(val)}$ cm³.`
          : `$S = 4\\pi r^2 = 4\\pi\\cdot ${r * r} = ${piTex(4 * r * r, 1)}\\approx ${dc2(val)}$ cm².`,
        hint: askV ? 'Objem gule je $\\frac{4}{3}\\pi r^3$.' : 'Povrch gule je $4\\pi r^2$.' };
    }
    const n = rnd(3, 10), prism = Math.random() < 0.5, what = rnd(0, 2);
    const vals = prism ? [2 * n, 3 * n, n + 2] : [n + 1, 2 * n, n + 1];
    const name = `${BOKY[n - 3]} ${prism ? 'hranol' : 'ihlan'}`;
    return {
      answer: vals[what],
      q: `Koľko ${['vrcholov', 'hrán', 'stien'][what]} má ${name}?`,
      solution: prism
        ? `${name[0].toUpperCase() + name.slice(1)} má dve podstavy (${UHOL[n - 3]}y): $2\\cdot ${n} = ${2 * n}$ vrcholov; $${n}$ hrán v každej podstave a $${n}$ bočných hrán, spolu $${3 * n}$ hrán;
          $${n}$ bočných stien a $2$ podstavy, spolu $${n + 2}$ stien. Kontrola Eulerovým vzťahom: $${2 * n} - ${3 * n} + ${n + 2} = 2$.`
        : `${name[0].toUpperCase() + name.slice(1)} má podstavu (${UHOL[n - 3]}) a hlavný vrchol: $${n} + 1 = ${n + 1}$ vrcholov; $${n}$ podstavných a $${n}$ bočných hrán, spolu $${2 * n}$ hrán;
          $${n}$ bočných stien a podstavu, spolu $${n + 1}$ stien. Kontrola Eulerovým vzťahom: $${n + 1} - ${2 * n} + ${n + 1} = 2$.`,
      hint: prism ? '$n$-boký hranol má dve podstavy s $n$ vrcholmi a $n$ bočných stien.' : '$n$-boký ihlan má podstavu s $n$ vrcholmi a jeden hlavný vrchol.'
    };
  });
})();
