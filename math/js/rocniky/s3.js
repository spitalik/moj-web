/* 3. ročník SŠ / gymnázium: goniometria a trigonometria, analytická geometria v rovine, postupnosti
   a finančná matematika, kombinatorika a pravdepodobnosť.
   Lekcia 'goniometria' (order 20, pravouhlý trojuholník) je v content.js, ostatné sú tu. */
(function () {
  'use strict';

  const { rnd, pick, gcd, fmt, term, shuffle } = EXERCISES.util;
  const { plane, axes, curvePath, svg, n1, sk } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 's3' }, l));
  // Zaokrúhľované číselné výsledky zobraz s toľkými desatinnými miestami, koľko žiada zadanie (podľa tolerancie).
  const gen = (id, fn) => EXERCISES.register(id, () => {
    const ex = fn();
    if ((ex.type || 'num') === 'num' && !ex.show && ex.tol >= 0.009) {
      ex.show = ex.answer.toFixed(ex.tol >= 0.5 ? 0 : ex.tol >= 0.1 ? 1 : 2).replace('.', ',');
    }
    return ex;
  });
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 guľôčku, 2 guľôčky, 5 guľôčok.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  // akuzatív: na 1 mesiac / 3 mesiace / 6 mesiacov
  const MESIAC = ['mesiac', 'mesiace', 'mesiacov'];
  const ROK = ['rok', 'roky', 'rokov'];

  const nz = (a, b) => { let v = 0; while (v === 0) v = rnd(a, b); return v; };
  const par = (v) => (v < 0 ? `(${v})` : String(v));
  const dc = (x) => fmt(x).replace(',', '{,}');
  // desatinné číslo na d miest (do KaTeXu)
  const fx = (x, d = 2) => (Math.abs(x) < 0.5 * Math.pow(10, -d) ? 0 : x).toFixed(d).replace('.', '{,}');
  // číslo bez zbytočných núl na konci, najviac d desatinných miest
  const dcx = (x, d = 6) => String(parseFloat(x.toFixed(d))).replace('.', '{,}');
  // peniaze: 12\,345{,}67
  const eur = (x, d = 2) => {
    const s = Math.abs(x).toFixed(d).split('.');
    return (x < 0 ? '-' : '') + s[0].replace(/\B(?=(\d{3})+(?!\d))/g, '\\,') + (s[1] ? '{,}' + s[1] : '');
  };
  const eurTxt = (x) => x.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d),)/g, ' ');
  const mn = (x) => String(x).replace('-', '−');

  const red = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g, q / g]; };
  const fTex = (p, q = 1) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${b}}`; };
  const fTxt = (p, q = 1) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a}/${b}`; };
  const fPar = (p, q = 1) => (p * q < 0 ? `\\left(${fTex(p, q)}\\right)` : fTex(p, q));

  // násobok čísla π: \frac{5\pi}{6}, -\pi, 2\pi
  const piTex = (p, q = 1) => {
    const [a, b] = red(p, q);
    if (a === 0) return '0';
    const A = Math.abs(a), num = A === 1 ? '\\pi' : `${A}\\pi`;
    return (a < 0 ? '-' : '') + (b === 1 ? num : `\\frac{${num}}{${b}}`);
  };
  const piTxt = (p, q = 1) => {
    const [a, b] = red(p, q);
    if (a === 0) return '0';
    const A = Math.abs(a);
    return (a < 0 ? '−' : '') + (A === 1 ? '' : A) + 'π' + (b === 1 ? '' : '/' + b);
  };

  // lineárna kombinácia: [[3,'x'],[-1,'y'],[5,'']] -> 3x - y + 5
  const lin = (terms) => {
    const s = terms.map(([c, v]) => term(c, v)).join('').trim();
    if (!s) return '0';
    return s[0] === '+' ? s.slice(2) : '-' + s.slice(2);
  };
  const genEq = (a, b, c) => `${lin([[a, 'x'], [b, 'y'], [c, '']])} = 0`;
  const linTxt = (terms) => lin(terms).replace(/-/g, '−');

  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
  const C = (n, k) => { if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
  const V = (n, k) => { let r = 1; for (let i = 0; i < k; i++) r *= n - i; return r; };

  /* ---------- goniometrické hodnoty ---------- */

  const FT = { sin: '\\sin', cos: '\\cos', tg: '\\mathrm{tg}', cotg: '\\mathrm{cotg}' };
  const FX = { sin: '\\sin x', cos: '\\cos x', tg: '\\mathrm{tg}\\,x', cotg: '\\mathrm{cotg}\\,x' };
  const FN = { sin: 'sínus', cos: 'kosínus', tg: 'tangens', cotg: 'kotangens' };
  const QN = ['I.', 'II.', 'III.', 'IV.'];
  const mod360 = (d) => ((d % 360) + 360) % 360;
  const quad = (deg) => Math.floor(mod360(deg) / 90);           // 0..3 (len pre uhly mimo osí)
  const trig = (f, deg) => {
    const r = mod360(deg) * Math.PI / 180;
    const s = Math.abs(Math.sin(r)) < 1e-12 ? 0 : Math.sin(r), c = Math.abs(Math.cos(r)) < 1e-12 ? 0 : Math.cos(r);
    if (f === 'sin') return s;
    if (f === 'cos') return c;
    if (f === 'tg') return c === 0 ? null : s / c;
    return s === 0 ? null : c / s;
  };
  const EXACT = [[0, '0', '0'], [0.5, '\\frac{1}{2}', '1/2'], [Math.SQRT1_2, '\\frac{\\sqrt{2}}{2}', '√2/2'],
    [Math.sqrt(3) / 2, '\\frac{\\sqrt{3}}{2}', '√3/2'], [1, '1', '1'], [Math.sqrt(3) / 3, '\\frac{\\sqrt{3}}{3}', '√3/3'],
    [Math.sqrt(3), '\\sqrt{3}', '√3']];
  const exFind = (v) => EXACT.find((t) => Math.abs(t[0] - Math.abs(v)) < 1e-9);
  const exTex = (v) => { const e = exFind(v); return (v < -1e-9 ? '-' : '') + (e ? e[1] : fmt(Math.abs(v))); };
  const exPar = (v) => (v < -1e-9 ? `\\left(${exTex(v)}\\right)` : exTex(v));
  const exTxt = (v) => { if (v === null) return 'nie je definovaný'; const e = exFind(v); return (v < -1e-9 ? '−' : '') + (e ? e[2] : sk(Math.abs(v), 3)); };
  const degArg = (d) => (d < 0 ? `(${d}^\\circ)` : `${d}^\\circ`);
  const radArg = (d) => (d < 0 ? `\\left(${piTex(d, 180)}\\right)` : piTex(d, 180));

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
  const num1 = (x) => mn(Number.isInteger(x) ? String(x) : sk(x, 1));

  /* ---------- obrázky ---------- */

  fig('s3-radian', {
    draw: () => {
      const cx = 150, cy = 140, r = 100, a = 1;
      const ex = n1(cx + r * Math.cos(a)), ey = n1(cy - r * Math.sin(a));
      const sx = n1(cx + 28 * Math.cos(a)), sy = n1(cy - 28 * Math.sin(a));
      return `<svg viewBox="0 0 470 260" role="img" aria-label="Uhol veľkosti jeden radián">
        <circle class="f-thin" cx="${cx}" cy="${cy}" r="${r}"/>
        <line class="f-line" x1="${cx}" y1="${cy}" x2="${cx + r}" y2="${cy}"/>
        <line class="f-line" x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}"/>
        <path class="f-accent" d="M${cx + r} ${cy} A${r} ${r} 0 0 0 ${ex} ${ey}"/>
        <path class="f-warn" d="M${cx + 28} ${cy} A28 28 0 0 0 ${sx} ${sy}"/>
        <circle class="f-solid" cx="${cx}" cy="${cy}" r="3"/>
        <text class="f-math" x="${cx + 50}" y="${cy + 22}" text-anchor="middle">r</text>
        <text class="f-math" x="${n1(cx + 50 * Math.cos(a) - 8)}" y="${n1(cy - 50 * Math.sin(a))}" text-anchor="end">r</text>
        <text class="f-small" x="${cx + 36}" y="${cy - 10}">1 rad</text>
        <text class="f-text c-accent" x="${n1(cx + 118 * Math.cos(a / 2))}" y="${n1(cy - 118 * Math.sin(a / 2))}">l = r</text>
        <text class="f-text" x="320" y="80">α = l : r</text>
        <text class="f-text" x="320" y="112">1 rad ≈ 57,3°</text>
        <text class="f-text" x="320" y="144">180° = π rad</text>
        <text class="f-text" x="320" y="176">360° = 2π rad</text></svg>`;
    }
  });

  fig('s3-jednotkova', {
    controls: [{ id: 'deg', label: 'Uhol α (°)', min: 0, max: 360, step: 15, value: 150 }],
    draw: (v) => {
      const p = plane(-1.5, 1.5, -1.5, 1.5, 320, 320, 16);
      const d = v.deg, a = d * Math.PI / 180;
      const c = trig('cos', d), s = trig('sin', d), t = trig('tg', d), ct = trig('cotg', d);
      const R = p.X(1) - p.X(0), rr = 0.24;
      const arc = d > 0 && d < 360
        ? `<path class="f-warn" d="M${n1(p.X(rr))} ${n1(p.Y(0))} A${n1(rr * R)} ${n1(rr * R)} 0 ${d > 180 ? 1 : 0} 0 ${n1(p.X(rr * Math.cos(a)))} ${n1(p.Y(rr * Math.sin(a)))}"/>`
        : '';
      let clipped = `<line class="f-thin" x1="${n1(p.X(1))}" y1="${n1(p.Y(-1.5))}" x2="${n1(p.X(1))}" y2="${n1(p.Y(1.5))}"/>`;
      if (t !== null) {
        clipped += `<line class="f-dash" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(1))}" y2="${n1(p.Y(t))}"/>
          <line class="f-warn" x1="${n1(p.X(1))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(1))}" y2="${n1(p.Y(t))}"/>`;
      }
      const q = (x, y, l) => `<text class="f-small" x="${n1(p.X(x))}" y="${n1(p.Y(y))}" text-anchor="middle">${l}</text>`;
      const front = `<circle class="f-line" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" r="${n1(R)}"/>${arc}
        <line class="f-accent" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(c))}" y2="${n1(p.Y(0))}"/>
        <line class="f-ok" x1="${n1(p.X(c))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(c))}" y2="${n1(p.Y(s))}"/>
        <line class="f-line" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(c))}" y2="${n1(p.Y(s))}"/>
        <circle class="f-dot" cx="${n1(p.X(c))}" cy="${n1(p.Y(s))}" r="5"/>
        ${q(1.25, 1.3, 'I.')}${q(-1.25, 1.3, 'II.')}${q(-1.25, -1.38, 'III.')}${q(1.25, -1.38, 'IV.')}`;
      const where = d % 90 === 0 ? 'koncové rameno leží na osi' : `${QN[quad(d)]} kvadrant`;
      return {
        svg: svg(p, axes(p), clipped, front, 'Goniometrické funkcie na jednotkovej kružnici'),
        readout: `α = ${d}° = ${piTxt(d, 180)} rad · ${where}<br><span class="c-ok">sin α = ${exTxt(s)}</span> · <span class="c-accent">cos α = ${exTxt(c)}</span> · tg α = ${exTxt(t)} · cotg α = ${exTxt(ct)}`
      };
    }
  });

  fig('s3-sinus', {
    controls: [
      { id: 'a', label: 'a', min: -3, max: 3, step: 0.5, value: 2 },
      { id: 'b', label: 'b', min: 0.5, max: 3, step: 0.5, value: 1 },
      { id: 'k', label: 'c (násobok π/4)', min: -4, max: 4, step: 1, value: 2 }
    ],
    draw: (v) => {
      const p = plane(-6.6, 6.6, -3.6, 3.6, 440, 260, 20);
      const a = v.a, b = v.b, k = v.k, c = k * Math.PI / 4, m = Math.round(2 * b);
      let back = '';
      for (let y = -3; y <= 3; y++) back += `<line class="f-grid" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(y))}" x2="${n1(p.X(p.xmax))}" y2="${n1(p.Y(y))}"/>`;
      for (let j = -4; j <= 4; j++) back += `<line class="f-grid" x1="${n1(p.X(j * Math.PI / 2))}" y1="${n1(p.Y(p.ymin))}" x2="${n1(p.X(j * Math.PI / 2))}" y2="${n1(p.Y(p.ymax))}"/>`;
      back += `<line class="f-axis" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(p.xmax))}" y2="${n1(p.Y(0))}"/>
        <line class="f-axis" x1="${n1(p.X(0))}" y1="${n1(p.Y(p.ymin))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(p.ymax))}"/>`;
      [-2, -1, 1, 2].forEach((j) => { back += `<text class="f-small" x="${n1(p.X(j * Math.PI))}" y="${n1(p.Y(0) + 14)}" text-anchor="middle">${piTxt(j)}</text>`; });
      [-3, -2, -1, 1, 2, 3].forEach((y) => { back += `<text class="f-small" x="${n1(p.X(0) - 5)}" y="${n1(p.Y(y) + 4)}" text-anchor="end">${mn(y)}</text>`; });
      const clipped = `<path class="f-dash" fill="none" d="${curvePath(p, Math.sin)}"/>
        <path class="f-accent" d="${curvePath(p, (x) => a * Math.sin(b * x + c), p.xmin, p.xmax, 400)}"/>`;
      const aT = a === 1 ? '' : a === -1 ? '−' : num1(a) + '·';
      const bT = b === 1 ? '' : num1(b);
      const cT = k === 0 ? '' : ` ${k > 0 ? '+' : '−'} ${piTxt(Math.abs(k), 4)}`;
      const shift = k === 0 ? '' : ` · posun o ${piTxt(Math.abs(k), 2 * m)} ${k > 0 ? 'doľava' : 'doprava'}`;
      const readout = a === 0
        ? 'a = 0: funkcia je konštantná, graf splýva s osou x'
        : `y = ${aT}sin(${bT}x${cT}) · amplitúda ${num1(Math.abs(a))} · perióda ${piTxt(4, m)}${shift} · H = ⟨${num1(-Math.abs(a))}; ${num1(Math.abs(a))}⟩`;
      return { svg: svg(p, back, clipped, '', 'Graf funkcie y = a sin(bx + c)'), readout };
    }
  });

  fig('s3-rovnica', {
    draw: () => {
      const p = plane(-1.5, 1.5, -1.3, 1.3, 340, 300, 16);
      const R = p.X(1) - p.X(0);
      const P1 = [Math.cos(Math.PI / 6), 0.5], P2 = [-Math.cos(Math.PI / 6), 0.5];
      const front = `<circle class="f-line" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" r="${n1(R)}"/>
        <line class="f-accent" x1="${n1(p.X(-1.45))}" y1="${n1(p.Y(0.5))}" x2="${n1(p.X(1.45))}" y2="${n1(p.Y(0.5))}"/>
        <line class="f-thin" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(P1[0]))}" y2="${n1(p.Y(P1[1]))}"/>
        <line class="f-thin" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(P2[0]))}" y2="${n1(p.Y(P2[1]))}"/>
        <path class="f-warn" d="M${n1(p.X(0.3))} ${n1(p.Y(0))} A${n1(0.3 * R)} ${n1(0.3 * R)} 0 0 0 ${n1(p.X(0.3 * P1[0]))} ${n1(p.Y(0.3 * P1[1]))}"/>
        <circle class="f-dot" cx="${n1(p.X(P1[0]))}" cy="${n1(p.Y(P1[1]))}" r="5"/>
        <circle class="f-dot" cx="${n1(p.X(P2[0]))}" cy="${n1(p.Y(P2[1]))}" r="5"/>
        <text class="f-text" x="${n1(p.X(P1[0]) + 8)}" y="${n1(p.Y(P1[1]) - 10)}">π/6</text>
        <text class="f-text" x="${n1(p.X(P2[0]) - 8)}" y="${n1(p.Y(P2[1]) - 10)}" text-anchor="end">5π/6</text>
        <text class="f-text c-accent" x="${n1(p.X(1.45))}" y="${n1(p.Y(0.5) + 18)}" text-anchor="end">y = 1/2</text>`;
      return svg(p, axes(p), '', front, 'Riešenie rovnice sin x = 1/2 na jednotkovej kružnici');
    }
  });

  fig('s3-trojuholnik', {
    draw: () => `<svg viewBox="0 0 400 240" role="img" aria-label="Všeobecný trojuholník s označením strán a uhlov">
      <polygon class="f-tri" points="40,200 360,200 240,50"/>
      <path class="f-warn" d="M68 200 A28 28 0 0 0 62.4 183.2"/>
      <path class="f-warn" d="M332 200 A28 28 0 0 1 342.5 178.1"/>
      <path class="f-warn" d="M217.6 66.8 A28 28 0 0 0 257.5 71.9"/>
      <text class="f-math" x="76" y="194">α</text>
      <text class="f-math" x="314" y="194">β</text>
      <text class="f-math" x="234" y="94">γ</text>
      <text class="f-math" x="24" y="216">A</text>
      <text class="f-math" x="364" y="216">B</text>
      <text class="f-math" x="234" y="40">C</text>
      <text class="f-math c-accent" x="200" y="224" text-anchor="middle">c</text>
      <text class="f-math c-accent" x="308" y="120">a</text>
      <text class="f-math c-accent" x="128" y="118" text-anchor="end">b</text></svg>`
  });

  fig('s3-vektory', {
    controls: [
      { id: 'u1', label: 'u₁', min: -4, max: 4, step: 1, value: 3 },
      { id: 'u2', label: 'u₂', min: -4, max: 4, step: 1, value: 1 },
      { id: 'v1', label: 'v₁', min: -4, max: 4, step: 1, value: 1 },
      { id: 'v2', label: 'v₂', min: -4, max: 4, step: 1, value: 3 }
    ],
    draw: (v) => {
      const p = plane(-8, 8, -8, 8, 340, 340, 16);
      const { u1, u2, v1, v2 } = v, w1 = u1 + v1, w2 = u2 + v2;
      const L = (x1, y1, x2, y2) => `<line class="f-dash" x1="${n1(p.X(x1))}" y1="${n1(p.Y(y1))}" x2="${n1(p.X(x2))}" y2="${n1(p.Y(y2))}"/>`;
      const front = L(u1, u2, w1, w2) + L(v1, v2, w1, w2)
        + arrow(p, 0, 0, w1, w2, 'f-warn', 'f-vertex')
        + arrow(p, 0, 0, u1, u2, 'f-accent', 'f-dot')
        + arrow(p, 0, 0, v1, v2, 'f-ok', 'f-dot f-dot-ok');
      return {
        svg: svg(p, axes(p, 2, 2), '', front, 'Súčet dvoch vektorov'),
        readout: `<span class="c-accent">u = (${mn(u1)}; ${mn(u2)})</span> · <span class="c-ok">v = (${mn(v1)}; ${mn(v2)})</span> · u + v = (${mn(w1)}; ${mn(w2)}) · |u + v| = ${sk(Math.hypot(w1, w2))} · u · v = ${mn(u1 * v1 + u2 * v2)}`
      };
    }
  });

  // normalizovaná všeobecná rovnica: celé čísla bez spoločného deliteľa, a > 0 (pri a = 0 je b > 0)
  const normLine = (a, b, c) => {
    const g = gcd(gcd(a, b), c) || 1;
    let A = a / g, B = b / g, Cc = c / g;
    if (A < 0 || (A === 0 && B < 0)) { A = -A; B = -B; Cc = -Cc; }
    return [A + 0, B + 0, Cc + 0];
  };
  // smernicový tvar y = kx + q zo zlomkov k = kp/kq, q = qp/qq
  const slopeTex = (kp, kq, qp, qq) => {
    const [k1, k2] = red(kp, kq), [q1, q2] = red(qp, qq);
    let s = k1 === 0 ? '' : k2 === 1 ? (k1 === 1 ? 'x' : k1 === -1 ? '-x' : `${k1}x`) : `${fTex(k1, k2)}x`;
    if (!s) return `y = ${fTex(q1, q2)}`;
    if (q1 !== 0) s += ` ${q1 < 0 ? '-' : '+'} ${fTex(Math.abs(q1), q2)}`;
    return `y = ${s}`;
  };
  const slopeTxt = (kp, kq, qp, qq) => slopeTex(kp, kq, qp, qq).replace(/\\frac\{(\d+)\}\{(\d+)\}/g, '$1/$2').replace(/(\d+\/\d+)x/, '($1)x').replace(/-/g, '−');

  fig('s3-priamka', {
    controls: [
      { id: 'x0', label: 'a₁ (bod A)', min: -4, max: 4, step: 1, value: -2 },
      { id: 'y0', label: 'a₂ (bod A)', min: -4, max: 4, step: 1, value: 1 },
      { id: 'u1', label: 'u₁', min: -4, max: 4, step: 1, value: 3 },
      { id: 'u2', label: 'u₂', min: -4, max: 4, step: 1, value: 1 }
    ],
    draw: (v) => {
      const p = plane(-8, 8, -8, 8, 340, 340, 16);
      const { x0, y0, u1, u2 } = v;
      const dotA = `<circle class="f-dot" cx="${n1(p.X(x0))}" cy="${n1(p.Y(y0))}" r="5"/>
        <text class="f-math" x="${n1(p.X(x0) - 8)}" y="${n1(p.Y(y0) - 8)}" text-anchor="end">A</text>`;
      if (u1 === 0 && u2 === 0) {
        return { svg: svg(p, axes(p, 2, 2), '', dotA, 'Priamka určená bodom a smerovým vektorom'), readout: 'Smerový vektor nesmie byť nulový – posuň u₁ alebo u₂.' };
      }
      const [a, b, c] = normLine(u2, -u1, -(u2 * x0 - u1 * y0));
      const clipped = `<line class="f-line" x1="${n1(p.X(x0 - 40 * u1))}" y1="${n1(p.Y(y0 - 40 * u2))}" x2="${n1(p.X(x0 + 40 * u1))}" y2="${n1(p.Y(y0 + 40 * u2))}"/>`;
      const front = arrow(p, x0, y0, x0 + a, y0 + b, 'f-ok', 'f-dot f-dot-ok') + arrow(p, x0, y0, x0 + u1, y0 + u2, 'f-accent', 'f-dot') + dotA;
      const sl = u1 === 0 ? 'smernicový tvar neexistuje (priamka je rovnobežná s osou y)' : `smernicový tvar: ${slopeTxt(u2, u1, y0 * u1 - u2 * x0, u1)}`;
      return {
        svg: svg(p, axes(p, 2, 2), clipped, front, 'Priamka určená bodom a smerovým vektorom'),
        readout: `<span class="c-accent">u = (${mn(u1)}; ${mn(u2)})</span> · <span class="c-ok">n = (${mn(a)}; ${mn(b)})</span><br>p: x = ${linTxt([[x0, ''], [u1, 't']])}, y = ${linTxt([[y0, ''], [u2, 't']])}, t ∈ R<br>všeobecná rovnica: ${linTxt([[a, 'x'], [b, 'y'], [c, '']])} = 0 · ${sl}`
      };
    }
  });

  const sqTxt = (m, v) => (m === 0 ? `${v}²` : `(${v} ${m > 0 ? '−' : '+'} ${Math.abs(m)})²`);
  const sqTex = (m, v) => (m === 0 ? `${v}^2` : `(${v} ${m > 0 ? '-' : '+'} ${Math.abs(m)})^2`);

  fig('s3-kruznica', {
    controls: [
      { id: 'm', label: 'm', min: -5, max: 5, step: 1, value: 2 },
      { id: 'n', label: 'n', min: -5, max: 5, step: 1, value: -1 },
      { id: 'r', label: 'r', min: 1, max: 6, step: 1, value: 3 }
    ],
    draw: (v) => {
      const p = plane(-10, 10, -10, 10, 340, 340, 16);
      const { m, n, r } = v, R = r * (p.X(1) - p.X(0));
      const clipped = `<circle class="f-fill f-outline" cx="${n1(p.X(m))}" cy="${n1(p.Y(n))}" r="${n1(R)}"/>
        <line class="f-accent" x1="${n1(p.X(m))}" y1="${n1(p.Y(n))}" x2="${n1(p.X(m + r))}" y2="${n1(p.Y(n))}"/>
        <circle class="f-dot" cx="${n1(p.X(m))}" cy="${n1(p.Y(n))}" r="5"/>
        <text class="f-math" x="${n1(p.X(m) - 6)}" y="${n1(p.Y(n) - 8)}" text-anchor="end">S</text>`;
      return {
        svg: svg(p, axes(p, 2, 2), clipped, '', 'Kružnica v súradnicovej sústave'),
        readout: `S[${mn(m)}; ${mn(n)}], r = ${r} · ${sqTxt(m, 'x')} + ${sqTxt(n, 'y')} = ${r * r}<br>všeobecný tvar: x² + y² ${linTxt([[-2 * m, 'x'], [-2 * n, 'y'], [m * m + n * n - r * r, '']]).replace(/^(?!−)/, '+ ').replace(/^−/, '− ')} = 0`
      };
    }
  });

  fig('s3-postupnosti', {
    controls: [
      { id: 'a1', label: 'a₁', min: 1, max: 5, step: 1, value: 2 },
      { id: 'd', label: 'd (aritmetická)', min: -2, max: 2, step: 0.5, value: 1 },
      { id: 'q', label: 'q (geometrická)', min: 0.5, max: 2, step: 0.1, value: 1.5 }
    ],
    draw: (v) => {
      const N = 8, a1 = v.a1, d = v.d, q = v.q;
      const A = [], G = [];
      for (let i = 0; i < N; i++) { A.push(a1 + i * d); G.push(a1 * Math.pow(q, i)); }
      const all = A.concat(G), hi = Math.max(1, ...all), lo = Math.min(0, ...all);
      const top = 30, bot = 220, Y = (y) => bot - (y - lo) / (hi - lo) * (bot - top);
      let s = `<svg viewBox="0 0 440 260" role="img" aria-label="Členy aritmetickej a geometrickej postupnosti">
        <line class="f-axis" x1="36" y1="${n1(Y(0))}" x2="430" y2="${n1(Y(0))}"/>
        <text class="f-small" x="32" y="${n1(Y(0) + 4)}" text-anchor="end">0</text>
        <text class="f-small" x="32" y="${n1(Y(hi) + 4)}" text-anchor="end">${num1(Math.round(hi * 10) / 10)}</text>
        <line class="f-grid" x1="36" y1="${n1(Y(hi))}" x2="430" y2="${n1(Y(hi))}"/>`;
      for (let i = 0; i < N; i++) {
        const x = 44 + i * 48;
        const bar = (val, dx, cls) => `<rect class="${cls}" x="${x + dx}" y="${n1(Math.min(Y(val), Y(0)))}" width="18" height="${n1(Math.max(Math.abs(Y(val) - Y(0)), 0.5))}"/>`;
        s += bar(A[i], 0, 'f-fill f-outline') + bar(G[i], 20, 'f-fill2 f-outline2')
          + `<text class="f-small" x="${x + 19}" y="248" text-anchor="middle">${i + 1}</text>`;
      }
      s += `<text class="f-text c-accent" x="44" y="20">aritmetická</text><text class="f-text c-ok" x="160" y="20">geometrická</text></svg>`;
      const sA = N * (A[0] + A[N - 1]) / 2, sG = G.reduce((x, y) => x + y, 0);
      return {
        svg: s,
        readout: `<span class="c-accent">aritmetická: a₈ = ${mn(fmt(A[N - 1]))}, s₈ = ${mn(fmt(sA))}</span> · <span class="c-ok">geometrická: a₈ = ${mn(fmt(G[N - 1]))}, s₈ = ${mn(fmt(sG))}</span>`
      };
    }
  });

  fig('s3-urok', {
    controls: [
      { id: 'p', label: 'úroková miera p (% p. a.)', min: 0.5, max: 10, step: 0.5, value: 4 },
      { id: 'n', label: 'počet rokov n', min: 1, max: 30, step: 1, value: 15 }
    ],
    draw: (v) => {
      const K0 = 1000, p = v.p, n = v.n, q = 1 + p / 100;
      const hi = K0 * Math.pow(q, n), top = 34, bot = 220, Y = (y) => bot - y / hi * (bot - top);
      const w = 390 / (n + 1);
      let s = `<svg viewBox="0 0 440 260" role="img" aria-label="Jednoduché a zložené úrokovanie">
        <line class="f-axis" x1="40" y1="${bot}" x2="432" y2="${bot}"/>
        <line class="f-grid" x1="40" y1="${n1(Y(K0))}" x2="432" y2="${n1(Y(K0))}"/>
        <text class="f-small" x="36" y="${n1(Y(K0) + 4)}" text-anchor="end">1000</text>
        ${Y(K0) - Y(hi) > 14 ? `<text class="f-small" x="36" y="${n1(Y(hi) + 4)}" text-anchor="end">${Math.round(hi)}</text>` : ''}`;
      let pts = '';
      for (let k = 0; k <= n; k++) {
        const x = 42 + k * w, val = K0 * Math.pow(q, k);
        s += `<rect class="f-fill2 f-outline2" x="${n1(x)}" y="${n1(Y(val))}" width="${n1(Math.max(w - 3, 1))}" height="${n1(bot - Y(val))}"/>`;
        pts += `${n1(x + (w - 3) / 2)},${n1(Y(K0 * (1 + k * p / 100)))} `;
        if (k % 5 === 0) s += `<text class="f-small" x="${n1(x + (w - 3) / 2)}" y="236" text-anchor="middle">${k}</text>`;
      }
      s += `<polyline class="f-accent" points="${pts.trim()}"/>
        <text class="f-text c-ok" x="44" y="20">zložené</text><text class="f-text c-accent" x="130" y="20">jednoduché</text>
        <text class="f-small" x="432" y="252" text-anchor="end">roky</text></svg>`;
      const simple = K0 * (1 + n * p / 100);
      return {
        svg: s,
        readout: `vklad 1000 € · <span class="c-accent">jednoduché: ${eurTxt(simple)} €</span> · <span class="c-ok">zložené: ${eurTxt(hi)} €</span> · rozdiel ${eurTxt(hi - simple)} €`
      };
    }
  });

  fig('s3-strom', {
    draw: () => {
      const L1 = [['A', 70], ['B', 145], ['C', 220]];
      let s = `<svg viewBox="0 0 420 295" role="img" aria-label="Strom možností: 3 tričká a 2 nohavice">
        <text class="f-small" x="150" y="18" text-anchor="middle">tričko</text>
        <text class="f-small" x="290" y="18" text-anchor="middle">nohavice</text>
        <circle class="f-solid" cx="30" cy="145" r="5"/>`;
      L1.forEach(([l, y], i) => {
        s += `<line class="f-thin" x1="30" y1="145" x2="140" y2="${y}"/>`;
        [1, 2].forEach((k) => {
          const yy = 45 + (2 * i + k - 1) * 40;
          s += `<line class="f-thin" x1="160" y1="${y}" x2="280" y2="${yy}"/>
            <circle class="f-dot f-dot-ok" cx="290" cy="${yy}" r="10"/>
            <text class="f-text" x="290" y="${yy + 5}" text-anchor="middle">${k}</text>
            <text class="f-text c-accent" x="330" y="${yy + 5}">${l}${k}</text>`;
        });
        s += `<circle class="f-dot" cx="150" cy="${y}" r="11"/><text class="f-text" x="150" y="${y + 5}" text-anchor="middle">${l}</text>`;
      });
      return s + '<text class="f-text" x="400" y="288" text-anchor="end">3 · 2 = 6 možností</text></svg>';
    }
  });

  fig('s3-pascal', {
    draw: () => {
      let s = '<svg viewBox="0 0 440 272" role="img" aria-label="Pascalov trojuholník">';
      for (let n = 0; n <= 6; n++) {
        const y = 28 + n * 34;
        s += `<text class="f-small" x="8" y="${y + 5}">n = ${n}</text>`;
        for (let k = 0; k <= n; k++) {
          const x = 235 + (k - n / 2) * 52;
          const hl = (n === 4 && (k === 1 || k === 2)) ? 'f-fill f-outline' : (n === 5 && k === 2) ? 'f-fill2 f-outline2' : '';
          if (hl) s += `<circle class="${hl}" cx="${n1(x)}" cy="${y}" r="15"/>`;
          s += `<text class="f-text" x="${n1(x)}" y="${y + 5}" text-anchor="middle">${C(n, k)}</text>`;
        }
      }
      return s + '<text class="f-small c-accent" x="432" y="266" text-anchor="end">4 + 6 = 10</text></svg>';
    }
  });

  fig('s3-kocky', {
    draw: () => {
      let s = `<svg viewBox="0 0 440 260" role="img" aria-label="Všetky výsledky hodu dvoma kockami">
        <text class="f-small" x="148" y="16" text-anchor="middle">druhá kocka</text>
        <text class="f-small" x="16" y="140" text-anchor="middle" transform="rotate(-90 16 140)">prvá kocka</text>`;
      for (let i = 1; i <= 6; i++) {
        s += `<text class="f-small" x="${n1(52 + (i - 1) * 32 + 16)}" y="36" text-anchor="middle">${i}</text>
          <text class="f-small" x="44" y="${n1(42 + (i - 1) * 32 + 21)}" text-anchor="end">${i}</text>`;
        for (let j = 1; j <= 6; j++) {
          const x = 52 + (j - 1) * 32, y = 42 + (i - 1) * 32;
          s += `<rect class="f-cell${i + j === 7 ? ' f-fill2' : ''}" x="${x}" y="${y}" width="32" height="32"/>
            <text class="f-small" x="${x + 16}" y="${y + 21}" text-anchor="middle">${i + j}</text>`;
        }
      }
      return s + `<text class="f-text" x="270" y="110">|Ω| = 6 · 6 = 36</text>
        <text class="f-text c-ok" x="270" y="140">súčet 7: 6 výsledkov</text>
        <text class="f-text" x="270" y="170">P = 6/36 = 1/6</text></svg>`;
    }
  });

  /* ================= A. GONIOMETRIA A TRIGONOMETRIA ================= */

  lesson({
    id: 's3-uhly', order: 10, topics: ['goniometria'], title: 'Uhol v stupňovej a oblúkovej miere',
    summary: 'Radián, prevod medzi stupňami a radiánmi, orientovaný uhol a jeho základná veľkosť.',
    theory: [
      `<p><strong>Stupňová miera.</strong> Plný uhol má $360^\\circ$, priamy $180^\\circ$, pravý $90^\\circ$. Menšie jednotky sú minúty a sekundy: $1^\\circ = 60'$, $1' = 60''$.</p>
       <p><strong>Oblúková miera.</strong> Nakreslíme kružnicu so stredom vo vrchole uhla. Veľkosť uhla v radiánoch je podiel dĺžky oblúka $l$, ktorý uhol vytína, a polomeru $r$: $\\alpha = \\frac{l}{r}$. Uhol $1\\,\\mathrm{rad}$ vytína oblúk dlhý presne ako polomer.</p>`,
      { fig: 's3-radian', caption: 'Uhol veľkosti 1 radián: dĺžka oblúka sa rovná polomeru.' },
      `<p>Plný uhol vytína celý obvod $2\\pi r$, preto $360^\\circ = 2\\pi\\,\\mathrm{rad}$ a $180^\\circ = \\pi\\,\\mathrm{rad}$. Jednotku rad zvyčajne nepíšeme.</p>
       $$\\alpha_{\\mathrm{rad}} = \\alpha^\\circ\\cdot\\frac{\\pi}{180}, \\qquad \\alpha^\\circ = \\alpha_{\\mathrm{rad}}\\cdot\\frac{180}{\\pi}$$
       <table class="tbl">
         <tr><th>stupne</th><td>$30^\\circ$</td><td>$45^\\circ$</td><td>$60^\\circ$</td><td>$90^\\circ$</td><td>$120^\\circ$</td><td>$180^\\circ$</td><td>$270^\\circ$</td><td>$360^\\circ$</td></tr>
         <tr><th>radiány</th><td>$\\frac{\\pi}{6}$</td><td>$\\frac{\\pi}{4}$</td><td>$\\frac{\\pi}{3}$</td><td>$\\frac{\\pi}{2}$</td><td>$\\frac{2\\pi}{3}$</td><td>$\\pi$</td><td>$\\frac{3\\pi}{2}$</td><td>$2\\pi$</td></tr>
       </table>
       <p>V oblúkovej miere je dĺžka oblúka jednoducho $l = r\\cdot\\alpha$.</p>`,
      `<p><strong>Orientovaný uhol</strong> vznikne otočením polpriamky okolo vrcholu z počiatočného do koncového ramena. Otáčanie proti chodu hodinových ručičiek je kladné, v smere chodu záporné. Rovnaké ramená má nekonečne veľa orientovaných uhlov s veľkosťami $\\alpha + k\\cdot 360^\\circ$, resp. $\\alpha + 2k\\pi$, kde $k \\in \\mathbb{Z}$.</p>
       <p>Veľkosť z intervalu $\\langle 0^\\circ; 360^\\circ)$, resp. $\\langle 0; 2\\pi)$, je <strong>základná veľkosť</strong> orientovaného uhla.</p>`
    ],
    examples: [
      { task: 'Preveď $135^\\circ$ na oblúkovú mieru a $\\frac{7\\pi}{6}$ na stupne.',
        steps: ['$135^\\circ = 135\\cdot\\frac{\\pi}{180} = \\frac{135}{180}\\pi = \\frac{3\\pi}{4}$.',
                '$\\frac{7\\pi}{6} = \\frac{7\\pi}{6}\\cdot\\frac{180^\\circ}{\\pi} = 7\\cdot 30^\\circ = 210^\\circ$.'] },
      { task: 'Urči základnú veľkosť orientovaného uhla $-1000^\\circ$ a uhla $\\frac{17\\pi}{4}$.',
        steps: ['K uhlu $-1000^\\circ$ pripočítame tri otočenia: $-1000^\\circ + 3\\cdot 360^\\circ = 80^\\circ$.',
                '$\\frac{17\\pi}{4} = \\frac{16\\pi}{4} + \\frac{\\pi}{4} = 4\\pi + \\frac{\\pi}{4}$, teda základná veľkosť je $\\frac{\\pi}{4}$.'] }
    ]
  });

  gen('s3-uhly', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const deg = 15 * rnd(1, 48), [p, q] = red(deg, 180);
      return {
        signed: true, answer: p / q, show: fTxt(p, q),
        q: `Preveď uhol $${deg}^\\circ$ na oblúkovú mieru. Výsledok má tvar $k\\cdot\\pi$, zadaj číslo $k$ (napr. pre $\\frac{3\\pi}{4}$ zadaj 3/4).`,
        solution: `$${deg}^\\circ = ${deg}\\cdot\\frac{\\pi}{180} = \\frac{${deg}}{180}\\pi = ${piTex(deg, 180)}$, teda $k = ${fTex(p, q)}$.`,
        hint: 'Počet stupňov vynásob zlomkom $\\frac{\\pi}{180}$ a zlomok skráť.'
      };
    }
    if (k === 1) {
      const q = pick([2, 3, 4, 5, 6, 9, 10, 12]);
      let p;
      do p = rnd(1, 4 * q); while (gcd(p, q) !== 1);
      const deg = 180 * p / q;
      return {
        answer: deg,
        q: `Preveď uhol $${piTex(p, q)}$ na stupne.`,
        solution: p === 1
          ? `$${piTex(p, q)}\\cdot\\frac{180^\\circ}{\\pi} = \\frac{180^\\circ}{${q}} = ${deg}^\\circ$.`
          : `$${piTex(p, q)}\\cdot\\frac{180^\\circ}{\\pi} = \\frac{${p}\\cdot 180^\\circ}{${q}} = ${p}\\cdot ${180 / q}^\\circ = ${deg}^\\circ$.`,
        hint: 'Číslo $\\pi$ nahraď hodnotou $180^\\circ$.'
      };
    }
    if (k === 2) {
      const turns = pick([-3, -2, -1, 1, 2, 3, 4]);
      const sg = turns > 0 ? '-' : '+', T = Math.abs(turns);
      if (Math.random() < 0.5) {
        const base = rnd(1, 359), deg = base + 360 * turns;
        return {
          answer: base,
          q: `Urči základnú veľkosť orientovaného uhla $${deg}^\\circ$ (v stupňoch, z intervalu $\\langle 0^\\circ; 360^\\circ)$).`,
          solution: `Odpočítame alebo pripočítame celé otočenia: $${deg}^\\circ ${sg} ${T}\\cdot 360^\\circ = ${base}^\\circ$.`,
          hint: 'Pripočítaj alebo odpočítaj vhodný násobok $360^\\circ$, aby si sa dostal do intervalu $\\langle 0^\\circ; 360^\\circ)$.'
        };
      }
      const q = pick([2, 3, 4, 6]);
      let p0;
      do p0 = rnd(1, 2 * q - 1); while (gcd(p0, q) !== 1);
      const p = p0 + 2 * q * turns;
      return {
        signed: true, answer: p0 / q, show: fTxt(p0, q),
        q: `Urči základnú veľkosť orientovaného uhla $${piTex(p, q)}$ v intervale $\\langle 0; 2\\pi)$. Zadaj koeficient pri $\\pi$ (napr. pre $\\frac{5\\pi}{3}$ zadaj 5/3).`,
        solution: `Jedno otočenie je $2\\pi = \\frac{${2 * q}\\pi}{${q}}$. $${piTex(p, q)} ${sg} ${2 * T}\\pi = ${piTex(p0, q)}$, teda koeficient je $${fTex(p0, q)}$.`,
        hint: 'Pripočítaj alebo odpočítaj vhodný násobok $2\\pi$, aby výsledok ležal v intervale $\\langle 0; 2\\pi)$.'
      };
    }
    const r = rnd(2, 20), deg = pick([20, 30, 40, 45, 60, 72, 75, 90, 120, 135, 150, 210, 240, 270, 300]);
    const l = r * deg * Math.PI / 180;
    return {
      answer: l, tol: 0.011,
      q: `Na kružnici s polomerom $r = ${r}$ cm vytína stredový uhol $${deg}^\\circ$ kruhový oblúk. Vypočítaj jeho dĺžku v cm a zaokrúhli ju na dve desatinné miesta.`,
      solution: `$\\alpha = ${deg}^\\circ = ${piTex(deg, 180)}$, $l = r\\cdot\\alpha = ${r}\\cdot ${piTex(deg, 180)} \\approx ${fx(l)}$ cm.`,
      hint: 'V oblúkovej miere platí $l = r\\cdot\\alpha$. Uhol najprv preveď na radiány.'
    };
  });

  lesson({
    id: 's3-jednotkova', order: 30, topics: ['goniometria', 'funkcie'], title: 'Goniometrické funkcie ľubovoľného uhla',
    summary: 'Jednotková kružnica, sin, cos, tg a cotg pre ľubovoľné reálne číslo, znamienka v kvadrantoch a periodicita.',
    theory: [
      `<p>Na <strong>jednotkovej kružnici</strong> (stred v počiatku, polomer 1) nanesieme od kladnej polosi $x$ orientovaný uhol veľkosti $x$. Jeho koncové rameno pretne kružnicu v bode $P$. Pre <em>každé</em> reálne číslo $x$ definujeme
       $\\cos x$ ako $x$-ovú a $\\sin x$ ako $y$-ovú súradnicu bodu $P$, teda $P[\\cos x; \\sin x]$.</p>
       <p>Ďalej $\\mathrm{tg}\\,x = \\frac{\\sin x}{\\cos x}$ pre $\\cos x \\neq 0$ a $\\mathrm{cotg}\\,x = \\frac{\\cos x}{\\sin x}$ pre $\\sin x \\neq 0$. Pre ostré uhly dostaneme tie isté hodnoty ako v pravouhlom trojuholníku.</p>`,
      { fig: 's3-jednotkova', caption: 'Posúvaj uhol po $15^\\circ$. Vodorovná úsečka zodpovedá $\\cos\\alpha$, zvislá $\\sin\\alpha$ a úsečka na dotyčnici $x = 1$ hodnote $\\mathrm{tg}\\,\\alpha$. Hodnoty v popise sú presné.' },
      `<p><strong>Znamienka v kvadrantoch:</strong></p>
       <table class="tbl">
         <tr><th>kvadrant</th><th>I. $\\left(0; \\frac{\\pi}{2}\\right)$</th><th>II. $\\left(\\frac{\\pi}{2}; \\pi\\right)$</th><th>III. $\\left(\\pi; \\frac{3\\pi}{2}\\right)$</th><th>IV. $\\left(\\frac{3\\pi}{2}; 2\\pi\\right)$</th></tr>
         <tr><td>$\\sin x$</td><td>+</td><td>+</td><td>−</td><td>−</td></tr>
         <tr><td>$\\cos x$</td><td>+</td><td>−</td><td>−</td><td>+</td></tr>
         <tr><td>$\\mathrm{tg}\\,x$, $\\mathrm{cotg}\\,x$</td><td>+</td><td>−</td><td>+</td><td>−</td></tr>
       </table>`,
      `<p><strong>Periodicita a párnosť.</strong> $\\sin(x + 2k\\pi) = \\sin x$, $\\cos(x + 2k\\pi) = \\cos x$, $\\mathrm{tg}(x + k\\pi) = \\mathrm{tg}\\,x$, $\\mathrm{cotg}(x + k\\pi) = \\mathrm{cotg}\\,x$ pre $k \\in \\mathbb{Z}$. Kosínus je párna funkcia, $\\cos(-x) = \\cos x$; sínus, tangens a kotangens sú nepárne, napr. $\\sin(-x) = -\\sin x$.</p>
       <p><strong>Prevod na ostrý uhol.</strong> Ak koncové rameno zviera s osou $x$ ostrý uhol $\\alpha$ (tzv. príslušný ostrý uhol), absolútna hodnota funkcie je rovnaká ako pre $\\alpha$ a znamienko určí kvadrant. Napríklad $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$, $\\cos 240^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\cos\\frac{5\\pi}{4}$ a $\\mathrm{tg}\\,\\frac{5\\pi}{4}$.',
        steps: ['$\\frac{5\\pi}{4} = 225^\\circ$ leží v III. kvadrante, príslušný ostrý uhol je $45^\\circ$.',
                'Kosínus je v III. kvadrante záporný: $\\cos\\frac{5\\pi}{4} = -\\cos\\frac{\\pi}{4} = -\\frac{\\sqrt{2}}{2}$.',
                'Tangens je v III. kvadrante kladný: $\\mathrm{tg}\\,\\frac{5\\pi}{4} = \\mathrm{tg}\\,\\frac{\\pi}{4} = 1$.'] },
      { task: 'Vypočítaj $\\sin 1110^\\circ$ a $\\cos\\left(-\\frac{\\pi}{3}\\right)$.',
        steps: ['$1110^\\circ = 3\\cdot 360^\\circ + 30^\\circ$, sínus má periódu $360^\\circ$: $\\sin 1110^\\circ = \\sin 30^\\circ = \\frac{1}{2}$.',
                'Kosínus je párny: $\\cos\\left(-\\frac{\\pi}{3}\\right) = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$.'] }
    ]
  });

  // náhodný uhol mimo osí: { deg (zobrazený), base (základná veľkosť), tex (zápis) }
  const randomAngle = () => {
    const turns = pick([0, 0, 0, 1, -1, 2]);
    if (Math.random() < 0.5) {
      let base;
      do base = rnd(1, 359); while (base % 90 === 0);
      const deg = base + 360 * turns;
      return { deg, base, tex: `${deg}^\\circ`, arg: degArg(deg), turns };
    }
    const q = pick([3, 4, 6]);
    let p0;
    do p0 = rnd(1, 2 * q - 1); while (gcd(p0, q) !== 1);
    const p = p0 + 2 * q * turns, deg = 180 * p / q;
    return { deg, base: 180 * p0 / q, tex: piTex(p, q), arg: radArg(deg), turns, rad: true };
  };
  const angleIntro = (A) => {
    let s = '';
    if (A.rad) s += `$${A.tex} = ${A.deg}^\\circ$. `;
    if (A.turns) s += `Odstránime celé otočenia: $${A.deg}^\\circ ${A.turns > 0 ? '-' : '+'} ${Math.abs(A.turns)}\\cdot 360^\\circ = ${A.base}^\\circ$. `;
    return s;
  };
  const SIGNQ = { sin: [1, 1, -1, -1], cos: [1, -1, -1, 1], tg: [1, -1, 1, -1], cotg: [1, -1, 1, -1] };

  gen('s3-jednotkova', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const A = randomAngle(), Q = quad(A.base);
      return {
        type: 'choice', options: QN.map((x) => `${x} kvadrant`), answer: `${QN[Q]} kvadrant`,
        q: `V ktorom kvadrante leží koncové rameno orientovaného uhla $${A.tex}$?`,
        solution: `${angleIntro(A)}Uhol $${A.base}^\\circ$ leží medzi $${90 * Q}^\\circ$ a $${90 * Q + 90}^\\circ$, teda v ${QN[Q]} kvadrante.`,
        hint: 'Preveď uhol na stupne a odpočítaj (pripočítaj) celé otočenia $360^\\circ$. Kvadranty sú ohraničené uhlami $90^\\circ$, $180^\\circ$, $270^\\circ$.'
      };
    }
    if (k === 1) {
      const A = randomAngle(), Q = quad(A.base), f = pick(['sin', 'cos', 'tg', 'cotg']);
      const pos = SIGNQ[f][Q] > 0, ans = pos ? 'kladná' : 'záporná';
      return {
        type: 'choice', options: ['kladná', 'záporná'], answer: ans,
        q: `Je hodnota $${FT[f]}\\,${A.arg}$ kladná, alebo záporná?`,
        solution: `${angleIntro(A)}Uhol $${A.base}^\\circ$ leží v ${QN[Q]} kvadrante, kde je ${FN[f]} ${pos ? 'kladný' : 'záporný'}. Hodnota je ${ans}.`,
        hint: 'Urči kvadrant. Sínus má znamienko $y$-ovej súradnice bodu na jednotkovej kružnici, kosínus $x$-ovej; tangens a kotangens sú ich podielom.'
      };
    }
    const ref = pick([30, 45, 60]), Q = pick([0, 1, 1, 2, 2, 3, 3]);
    const base = [ref, 180 - ref, 180 + ref, 360 - ref][Q];
    const turns = pick([0, 0, 0, 1, -1, 2]), deg = base + 360 * turns;
    const rad = Math.random() < 0.5;
    const f = pick(['sin', 'cos', 'tg', 'cotg']), val = trig(f, base);
    const pool = (f === 'sin' || f === 'cos') ? ['\\frac{1}{2}', '\\frac{\\sqrt{2}}{2}', '\\frac{\\sqrt{3}}{2}'] : ['\\frac{\\sqrt{3}}{3}', '1', '\\sqrt{3}'];
    const mag = exTex(Math.abs(val)), other = pick(pool.filter((t) => t !== mag));
    const options = shuffle([mag, '-' + mag, other, '-' + other]).map((t) => `$${t}$`);
    const arg = rad ? radArg(deg) : degArg(deg);
    const intro = (rad ? `$${piTex(deg, 180)} = ${deg}^\\circ$. ` : '')
      + (turns ? `Celé otočenia môžeme vynechať: $${deg}^\\circ ${turns > 0 ? '-' : '+'} ${Math.abs(turns)}\\cdot 360^\\circ = ${base}^\\circ$. ` : '');
    const sgn = val < 0 ? '-' : '';
    return {
      type: 'choice', options, answer: `$${exTex(val)}$`,
      q: `Vypočítaj presnú hodnotu $${FT[f]}\\,${arg}$.`,
      solution: `${intro}Uhol $${base}^\\circ$ leží v ${QN[Q]} kvadrante, príslušný ostrý uhol je $${ref}^\\circ$ a ${FN[f]} je tu ${val > 0 ? 'kladný' : 'záporný'}. Preto $${FT[f]}\\,${arg} = ${sgn}${FT[f]}\\,${ref}^\\circ = ${exTex(val)}$.`,
      hint: 'Odstráň celé otočenia, urči kvadrant a príslušný ostrý uhol. Absolútnu hodnotu vezmi z tabuľky pre $30^\\circ$, $45^\\circ$, $60^\\circ$, znamienko podľa kvadrantu.'
    };
  });

  lesson({
    id: 's3-grafy', order: 40, topics: ['goniometria', 'funkcie'], title: 'Grafy goniometrických funkcií',
    summary: 'Sínusoida a kosínusoida, grafy tangensu a kotangensu, amplitúda, perióda a posun grafu.',
    theory: [
      `<p>Funkcia $y = \\sin x$ má definičný obor $\\mathbb{R}$, obor hodnôt $\\langle -1; 1\\rangle$ a najmenšiu periódu $2\\pi$. Je nepárna, jej graf (<strong>sínusoida</strong>) je súmerný podľa počiatku. Funkcia $y = \\cos x$ má rovnaký definičný obor, obor hodnôt aj periódu, je párna a jej graf je sínusoida posunutá o $\\frac{\\pi}{2}$ doľava: $\\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right)$.</p>
       <p>Funkcia $y = \\mathrm{tg}\\,x$ je definovaná pre $x \\neq \\frac{\\pi}{2} + k\\pi$, funkcia $y = \\mathrm{cotg}\\,x$ pre $x \\neq k\\pi$ ($k\\in\\mathbb{Z}$). Obe majú obor hodnôt $\\mathbb{R}$, najmenšiu periódu $\\pi$ a sú nepárne. Tangens je rastúci na každom intervale $\\left(-\\frac{\\pi}{2} + k\\pi; \\frac{\\pi}{2} + k\\pi\\right)$, kotangens klesajúci na každom intervale $(k\\pi; \\pi + k\\pi)$.</p>`,
      `<p><strong>Transformácie grafu.</strong> Pre $f(x) = a\\cdot\\sin(bx + c) + d$, kde $a \\neq 0$ a $b &gt; 0$:</p>
       <ul>
         <li>$|a|$ je <strong>amplitúda</strong>, obor hodnôt je $\\langle d - |a|; d + |a|\\rangle$; pri $a &lt; 0$ sa graf navyše preklopí podľa osi $x$;</li>
         <li>najmenšia perióda je $\\frac{2\\pi}{b}$;</li>
         <li>keďže $bx + c = b\\left(x + \\frac{c}{b}\\right)$, graf je posunutý o $\\frac{c}{b}$ doľava (pri $c &gt; 0$) alebo doprava (pri $c &lt; 0$);</li>
         <li>číslo $d$ posúva graf v smere osi $y$.</li>
       </ul>
       <p>Rovnako to platí pre kosínus. Pri tangense a kotangense je perióda $\\frac{\\pi}{b}$.</p>`,
      { fig: 's3-sinus', caption: 'Prerušovaná krivka je graf $y = \\sin x$. Mení parametre $a$, $b$, $c$ a sleduj, čo robia s amplitúdou, periódou a posunom.' }
    ],
    examples: [
      { task: 'Urči amplitúdu, periódu, obor hodnôt a posun grafu funkcie $f(x) = 3\\sin\\left(2x - \\frac{\\pi}{3}\\right)$.',
        steps: ['Amplitúda je $3$, obor hodnôt $H(f) = \\langle -3; 3\\rangle$.',
                'Perióda je $\\frac{2\\pi}{2} = \\pi$.',
                '$2x - \\frac{\\pi}{3} = 2\\left(x - \\frac{\\pi}{6}\\right)$, graf funkcie $3\\sin 2x$ je posunutý o $\\frac{\\pi}{6}$ doprava.'] },
      { task: 'Nájdi najväčšiu hodnotu funkcie $g(x) = 2\\cos x - 1$ a všetky $x$, v ktorých ju nadobúda.',
        steps: ['$\\cos x \\le 1$, preto $2\\cos x - 1 \\le 2\\cdot 1 - 1 = 1$.',
                'Hodnotu $1$ funkcia nadobúda práve vtedy, keď $\\cos x = 1$, t. j. pre $x = 2k\\pi$, $k \\in \\mathbb{Z}$.'] }
    ]
  });

  const PARITY = [
    ['\\sin x', 'nepárna', '$\\sin(-x) = -\\sin x$.'],
    ['\\cos x', 'párna', '$\\cos(-x) = \\cos x$.'],
    ['\\mathrm{tg}\\,x', 'nepárna', '$\\mathrm{tg}(-x) = \\frac{\\sin(-x)}{\\cos(-x)} = \\frac{-\\sin x}{\\cos x} = -\\mathrm{tg}\\,x$.'],
    ['\\mathrm{cotg}\\,x', 'nepárna', '$\\mathrm{cotg}(-x) = \\frac{\\cos(-x)}{\\sin(-x)} = \\frac{\\cos x}{-\\sin x} = -\\mathrm{cotg}\\,x$.'],
    ['3\\cos 2x', 'párna', '$3\\cos(-2x) = 3\\cos 2x$, lebo kosínus je párny.'],
    ['2\\sin 3x', 'nepárna', '$2\\sin(-3x) = -2\\sin 3x$, lebo sínus je nepárny.'],
    ['\\sin x + 1', 'ani párna, ani nepárna', '$f\\left(\\frac{\\pi}{2}\\right) = 2$, ale $f\\left(-\\frac{\\pi}{2}\\right) = 0$, čo sa nerovná ani $2$, ani $-2$.'],
    ['\\cos x - 2', 'párna', '$\\cos(-x) - 2 = \\cos x - 2$.'],
    ['x\\cdot\\sin x', 'párna', '$(-x)\\cdot\\sin(-x) = (-x)\\cdot(-\\sin x) = x\\sin x$.'],
    ['\\sin^2 x', 'párna', '$\\sin^2(-x) = (-\\sin x)^2 = \\sin^2 x$.'],
    ['\\sin x\\cdot\\cos x', 'nepárna', '$\\sin(-x)\\cos(-x) = -\\sin x\\cos x$.'],
    ['|\\sin x|', 'párna', '$|\\sin(-x)| = |-\\sin x| = |\\sin x|$.'],
    ['\\sin\\left(x + \\frac{\\pi}{4}\\right)', 'ani párna, ani nepárna', '$f(0) = \\frac{\\sqrt{2}}{2} \\neq 0$, preto nie je nepárna; $f\\left(\\frac{\\pi}{4}\\right) = 1$, ale $f\\left(-\\frac{\\pi}{4}\\right) = 0$, preto nie je párna.'],
    ['x + \\cos x', 'ani párna, ani nepárna', '$f(\\pi) = \\pi - 1$, ale $f(-\\pi) = -\\pi - 1$, čo sa nerovná ani $\\pi - 1$, ani $-(\\pi - 1)$.']
  ];

  gen('s3-grafy', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const f = pick(['sin', 'cos', 'sin', 'cos', 'tg', 'cotg']), base = (f === 'sin' || f === 'cos') ? 2 : 1;
      const [bn, bd] = pick([[2, 1], [3, 1], [4, 1], [5, 1], [1, 2], [1, 3], [2, 3], [3, 2]]);
      const a = nz(-4, 4), aT = a === 1 ? '' : a === -1 ? '-' : String(a);
      const bT = bd === 1 ? String(bn) : `\\frac{${bn}}{${bd}}`;
      const c = pick(['', '', ' + \\frac{\\pi}{4}', ' - \\frac{\\pi}{3}', ' + 1']);
      const expr = c ? `${aT}${FT[f]}\\left(${bT}x${c}\\right)` : `${aT}${FT[f]}\\,${bT}x`;
      const [pp, pq] = red(base * bd, bn);
      return {
        signed: true, answer: pp / pq, show: fTxt(pp, pq),
        q: `Urči najmenšiu periódu funkcie $f(x) = ${expr}$. Zadaj ju ako násobok čísla $\\pi$ (napr. pre periódu $\\frac{2\\pi}{3}$ zadaj 2/3).`,
        solution: `Funkcia ${FN[f]} má periódu $${base === 2 ? '2\\pi' : '\\pi'}$. Ak je argument $bx + c$, perióda sa vydelí číslom $b = ${fTex(bn, bd)}$: $p = ${base === 2 ? '2\\pi' : '\\pi'} : ${fTex(bn, bd)} = ${piTex(base * bd, bn)}$. Koeficient pred funkciou ani posun periódu nemenia.`,
        hint: 'Perióda funkcie $\\sin(bx + c)$ aj $\\cos(bx + c)$ je $\\frac{2\\pi}{b}$, funkcie $\\mathrm{tg}(bx + c)$ aj $\\mathrm{cotg}(bx + c)$ je $\\frac{\\pi}{b}$.'
      };
    }
    if (k === 1) {
      const f = pick(['sin', 'cos']), a = nz(-5, 5), d = rnd(-5, 5), b = rnd(1, 4);
      const aT = a === 1 ? '' : a === -1 ? '-' : String(a), A = Math.abs(a);
      const arg = `${FT[f]}${b === 1 ? ' x' : ` ${b}x`}`;
      return {
        type: 'tuple', signed: true, answer: [d - A, d + A], placeholder: 'min; max',
        q: `Urči obor hodnôt funkcie $f(x) = ${aT}${arg}${term(d)}$. Zadaj najmenšiu a najväčšiu hodnotu v tvare „min; max“.`,
        solution: `$-1 \\le ${arg} \\le 1$. ${a === 1 ? '' : `Po vynásobení číslom $${a}$${a < 0 ? ' (nerovnosti sa otočia)' : ''} je $${-A} \\le ${aT}${arg} \\le ${A}$. `}${d ? `Po pripočítaní čísla $${d}$ dostaneme $${d - A} \\le f(x) \\le ${d + A}$. ` : ''}Teda $H(f) = \\langle ${d - A}; ${d + A}\\rangle$.`,
        hint: 'Vyjdi z nerovnosti $-1 \\le \\sin t \\le 1$ (rovnako pre kosínus) a postupne ju vynásob a posuň.'
      };
    }
    if (k === 2) {
      const f = pick(['sin', 'cos']);
      const T = f === 'sin'
        ? [[1, 6], [1, 2], [5, 6], [7, 6], [3, 2], [11, 6], [1, 1]]
        : [[1, 3], [2, 3], [1, 1], [4, 3], [5, 3], [1, 2], [3, 2]];
      const [tn, td] = pick(T), b = rnd(1, 3), a = nz(-4, 4);
      const val = trig(f, 180 * tn / td), res = a * val;
      const aT = a === 1 ? '' : a === -1 ? '-' : String(a);
      const x0 = piTex(tn, td * b);
      const inner = b === 1 ? '' : `${a}\\cdot ${FT[f]}\\left(${b}\\cdot ${x0}\\right) = `;
      return {
        signed: true, answer: res, show: fTxt(Math.round(2 * res), 2),
        q: `Pre funkciu $f(x) = ${aT}${FT[f]}${b === 1 ? ' x' : ` ${b}x`}$ vypočítaj $f\\left(${x0}\\right)$.`,
        solution: `$f\\left(${x0}\\right) = ${inner}${a}\\cdot ${FT[f]}\\,${piTex(tn, td)} = ${a}\\cdot ${exPar(val)} = ${fTex(Math.round(2 * res), 2)}$.`,
        hint: 'Dosaď za $x$, vynásob argument a hodnotu goniometrickej funkcie zisti z jednotkovej kružnice.'
      };
    }
    const [tex, ans, why] = pick(PARITY);
    return {
      type: 'choice', options: ['párna', 'nepárna', 'ani párna, ani nepárna'], answer: ans,
      q: `Rozhodni, či je funkcia $f(x) = ${tex}$ párna, nepárna, alebo ani párna, ani nepárna.`,
      solution: `${why} Funkcia ${ans.startsWith('ani') ? 'nie je ani párna, ani nepárna' : `je ${ans}`}.`,
      hint: 'Porovnaj $f(-x)$ s $f(x)$ (párna) a s $-f(x)$ (nepárna). Na vyvrátenie stačí jeden protipríklad.'
    };
  });

  lesson({
    id: 's3-vztahy', order: 50, topics: ['goniometria', 'vyrazy'], title: 'Základné goniometrické vzťahy',
    summary: 'Vzťahy medzi sin, cos, tg a cotg, súčtové vzorce a vzorce pre dvojnásobný uhol.',
    theory: [
      `<p>Pre každé $x \\in \\mathbb{R}$ platí <strong>základný vzťah</strong> $\\sin^2 x + \\cos^2 x = 1$ – je to Pytagorova veta pre bod $P[\\cos x; \\sin x]$ na jednotkovej kružnici. Ďalej (ak sú výrazy definované):</p>
       $$\\mathrm{tg}\\,x = \\frac{\\sin x}{\\cos x}, \\qquad \\mathrm{cotg}\\,x = \\frac{\\cos x}{\\sin x}, \\qquad \\mathrm{tg}\\,x\\cdot\\mathrm{cotg}\\,x = 1, \\qquad 1 + \\mathrm{tg}^2 x = \\frac{1}{\\cos^2 x}.$$`,
      `<p><strong>Súčtové vzorce:</strong></p>
       $$\\sin(x \\pm y) = \\sin x\\cos y \\pm \\cos x\\sin y, \\qquad \\cos(x \\pm y) = \\cos x\\cos y \\mp \\sin x\\sin y.$$
       <p><strong>Vzorce pre dvojnásobný uhol</strong> (dosadíme $y = x$):</p>
       $$\\sin 2x = 2\\sin x\\cos x, \\qquad \\cos 2x = \\cos^2 x - \\sin^2 x = 1 - 2\\sin^2 x = 2\\cos^2 x - 1.$$`,
      `<p>Ak poznáme hodnotu jednej funkcie a kvadrant, v ktorom uhol leží, ostatné hodnoty dopočítame. Odmocnina dá len absolútnu hodnotu – <strong>znamienko určíme podľa kvadrantu</strong>.</p>`
    ],
    examples: [
      { task: 'Vieme, že $\\sin x = \\frac{3}{5}$ a $x \\in \\left(\\frac{\\pi}{2}; \\pi\\right)$. Vypočítaj $\\cos x$, $\\mathrm{tg}\\,x$ a $\\sin 2x$.',
        steps: ['$\\cos^2 x = 1 - \\sin^2 x = 1 - \\frac{9}{25} = \\frac{16}{25}$, teda $|\\cos x| = \\frac{4}{5}$.',
                'V II. kvadrante je kosínus záporný: $\\cos x = -\\frac{4}{5}$.',
                '$\\mathrm{tg}\\,x = \\frac{\\sin x}{\\cos x} = -\\frac{3}{4}$, $\\sin 2x = 2\\cdot\\frac{3}{5}\\cdot\\left(-\\frac{4}{5}\\right) = -\\frac{24}{25}$.'] },
      { task: 'Vypočítaj presnú hodnotu $\\sin 75^\\circ$.',
        steps: ['$75^\\circ = 45^\\circ + 30^\\circ$.',
                '$\\sin 75^\\circ = \\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ = \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2}$.',
                '$\\sin 75^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.'] }
    ]
  });

  const QINT = ['\\left(0; \\frac{\\pi}{2}\\right)', '\\left(\\frac{\\pi}{2}; \\pi\\right)', '\\left(\\pi; \\frac{3\\pi}{2}\\right)', '\\left(\\frac{3\\pi}{2}; 2\\pi\\right)'];
  const SIMPLIFY = [
    ['\\frac{1 - \\cos^2 x}{\\sin x}', 'sin', '$\\frac{1 - \\cos^2 x}{\\sin x} = \\frac{\\sin^2 x}{\\sin x} = \\sin x$.'],
    ['\\frac{\\sin 2x}{2\\sin x}', 'cos', '$\\frac{2\\sin x\\cos x}{2\\sin x} = \\cos x$.'],
    ['\\mathrm{tg}\\,x\\cdot\\cos x', 'sin', '$\\frac{\\sin x}{\\cos x}\\cdot\\cos x = \\sin x$.'],
    ['(\\sin x + \\cos x)^2 - \\sin 2x', '1', '$\\sin^2 x + 2\\sin x\\cos x + \\cos^2 x - 2\\sin x\\cos x = \\sin^2 x + \\cos^2 x = 1$.'],
    ['\\frac{1}{\\cos^2 x} - \\mathrm{tg}^2 x', '1', '$\\frac{1}{\\cos^2 x} = 1 + \\mathrm{tg}^2 x$, preto výraz je $1 + \\mathrm{tg}^2 x - \\mathrm{tg}^2 x = 1$.'],
    ['\\cos^4 x - \\sin^4 x', 'cos2', '$(\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x) = \\cos 2x\\cdot 1 = \\cos 2x$.'],
    ['\\sin^2 x + \\cos^2 x + \\mathrm{tg}\\,x\\cdot\\mathrm{cotg}\\,x', '2', '$\\sin^2 x + \\cos^2 x = 1$ a $\\mathrm{tg}\\,x\\cdot\\mathrm{cotg}\\,x = 1$, spolu $2$.'],
    ['\\frac{\\cos 2x + 1}{2\\cos x}', 'cos', '$\\cos 2x + 1 = 2\\cos^2 x$, teda $\\frac{2\\cos^2 x}{2\\cos x} = \\cos x$.'],
    ['\\frac{\\sin x}{\\mathrm{tg}\\,x}', 'cos', '$\\sin x : \\frac{\\sin x}{\\cos x} = \\sin x\\cdot\\frac{\\cos x}{\\sin x} = \\cos x$.'],
    ['\\sin(\\pi - x) - \\sin x', '0', '$\\sin(\\pi - x) = \\sin\\pi\\cos x - \\cos\\pi\\sin x = 0 + \\sin x$, rozdiel je $0$.'],
    ['\\frac{2\\,\\mathrm{tg}\\,x}{1 + \\mathrm{tg}^2 x}', 'sin2', '$\\frac{2\\,\\mathrm{tg}\\,x}{1 + \\mathrm{tg}^2 x} = 2\\cdot\\frac{\\sin x}{\\cos x}\\cdot\\cos^2 x = 2\\sin x\\cos x = \\sin 2x$.'],
    ['\\frac{\\sin^2 x}{\\sin x\\cos x}', 'tg', '$\\frac{\\sin^2 x}{\\sin x\\cos x} = \\frac{\\sin x}{\\cos x} = \\mathrm{tg}\\,x$.']
  ];
  const SIMP_OPT = { sin: '$\\sin x$', cos: '$\\cos x$', 1: '$1$', 2: '$2$', 0: '$0$', cos2: '$\\cos 2x$', sin2: '$\\sin 2x$', tg: '$\\mathrm{tg}\\,x$' };

  gen('s3-vztahy', () => {
    if (Math.random() < 0.3) {
      const [expr, key, why] = pick(SIMPLIFY);
      const others = shuffle(Object.keys(SIMP_OPT).filter((x) => x !== key)).slice(0, 3);
      return {
        type: 'choice', options: shuffle([key, ...others]).map((x) => SIMP_OPT[x]), answer: SIMP_OPT[key],
        q: `Zjednoduš výraz $${expr}$ (pre všetky $x$, pre ktoré je definovaný).`,
        solution: why,
        hint: 'Použi $\\sin^2 x + \\cos^2 x = 1$, $\\mathrm{tg}\\,x = \\frac{\\sin x}{\\cos x}$ alebo vzorce pre dvojnásobný uhol.'
      };
    }
    let [s1, c1, h] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]]);
    if (Math.random() < 0.5) [s1, c1] = [c1, s1];
    const Q = rnd(0, 3), sS = Q <= 1 ? 1 : -1, cS = (Q === 0 || Q === 3) ? 1 : -1;
    const F = {
      sin: [sS * s1, h], cos: [cS * c1, h], tg: [sS * cS * s1, c1], cotg: [sS * cS * c1, s1],
      sin2: [2 * sS * cS * s1 * c1, h * h], cos2: [c1 * c1 - s1 * s1, h * h]
    };
    const T = { sin: '\\sin x', cos: '\\cos x', tg: '\\mathrm{tg}\\,x', cotg: '\\mathrm{cotg}\\,x', sin2: '\\sin 2x', cos2: '\\cos 2x' };
    const g = pick(['sin', 'cos', 'tg']);
    const want = pick(['sin', 'cos', 'tg', 'cotg', 'sin2', 'cos2'].filter((x) => x !== g));
    const st = [];
    const sgn = (pos, name) => `V ${QN[Q]} kvadrante je ${name} ${pos ? 'kladný' : 'záporný'}`;
    if (g === 'sin') {
      st.push(`$\\cos^2 x = 1 - \\sin^2 x = 1 - \\frac{${s1 * s1}}{${h * h}} = \\frac{${c1 * c1}}{${h * h}}$, teda $|\\cos x| = \\frac{${c1}}{${h}}$. ${sgn(cS > 0, 'kosínus')}: $\\cos x = ${fTex(...F.cos)}$.`);
    } else if (g === 'cos') {
      st.push(`$\\sin^2 x = 1 - \\cos^2 x = 1 - \\frac{${c1 * c1}}{${h * h}} = \\frac{${s1 * s1}}{${h * h}}$, teda $|\\sin x| = \\frac{${s1}}{${h}}$. ${sgn(sS > 0, 'sínus')}: $\\sin x = ${fTex(...F.sin)}$.`);
    } else {
      st.push(`$\\cos^2 x = \\frac{1}{1 + \\mathrm{tg}^2 x} = \\frac{1}{1 + \\frac{${s1 * s1}}{${c1 * c1}}} = \\frac{${c1 * c1}}{${h * h}}$. ${sgn(cS > 0, 'kosínus')}: $\\cos x = ${fTex(...F.cos)}$.`);
      st.push(`$\\sin x = \\mathrm{tg}\\,x\\cdot\\cos x = ${fTex(...F.tg)}\\cdot ${fPar(...F.cos)} = ${fTex(...F.sin)}$.`);
    }
    if (want === 'tg') st.push(`$\\mathrm{tg}\\,x = \\frac{\\sin x}{\\cos x} = ${fTex(...F.tg)}$.`);
    if (want === 'cotg') st.push(`$\\mathrm{cotg}\\,x = \\frac{\\cos x}{\\sin x} = ${fTex(...F.cotg)}$.`);
    if (want === 'sin2') st.push(`$\\sin 2x = 2\\sin x\\cos x = 2\\cdot ${fPar(...F.sin)}\\cdot ${fPar(...F.cos)} = ${fTex(...F.sin2)}$.`);
    if (want === 'cos2') st.push(`$\\cos 2x = \\cos^2 x - \\sin^2 x = \\frac{${c1 * c1}}{${h * h}} - \\frac{${s1 * s1}}{${h * h}} = ${fTex(...F.cos2)}$.`);
    const [ap, aq] = F[want];
    return {
      signed: true, answer: ap / aq, show: fTxt(ap, aq),
      q: `Vieme, že $${T[g]} = ${fTex(...F[g])}$ a $x \\in ${QINT[Q]}$. Vypočítaj $${T[want]}$. Výsledok zadaj ako zlomok (napr. -3/4).`,
      solution: st.join(' '),
      hint: g === 'tg'
        ? 'Použi $1 + \\mathrm{tg}^2 x = \\frac{1}{\\cos^2 x}$, znamienko kosínusu urči podľa kvadrantu a potom $\\sin x = \\mathrm{tg}\\,x\\cdot\\cos x$.'
        : 'Použi $\\sin^2 x + \\cos^2 x = 1$ a znamienko urči podľa kvadrantu, v ktorom $x$ leží.'
    };
  });

  lesson({
    id: 's3-rovnice', order: 60, topics: ['goniometria', 'rovnice'], title: 'Goniometrické rovnice',
    summary: 'Rovnice sin x = a, cos x = a, tg x = a, všetky riešenia v ℝ a rovnice riešené substitúciou.',
    theory: [
      `<p><strong>Goniometrická rovnica</strong> obsahuje neznámu v argumente goniometrickej funkcie. Pre periodicitu má (ak vôbec má riešenie) nekonečne veľa koreňov. Rovnicu upravíme na základný tvar $\\sin x = a$, $\\cos x = a$ alebo $\\mathrm{tg}\\,x = a$, nájdeme korene v jednej perióde a pripočítame násobky periódy.</p>`,
      { fig: 's3-rovnica', caption: 'Rovnica $\\sin x = \\frac{1}{2}$: priamka $y = \\frac{1}{2}$ pretína jednotkovú kružnicu v dvoch bodoch, preto má rovnica v intervale $\\langle 0; 2\\pi)$ dva korene $\\frac{\\pi}{6}$ a $\\frac{5\\pi}{6}$.' },
      `<table class="tbl">
         <tr><th>rovnica</th><th>kedy má riešenie</th><th>všetky riešenia ($k \\in \\mathbb{Z}$)</th></tr>
         <tr><td>$\\sin x = a$</td><td>$|a| \\le 1$</td><td>$x = x_0 + 2k\\pi$ alebo $x = \\pi - x_0 + 2k\\pi$</td></tr>
         <tr><td>$\\cos x = a$</td><td>$|a| \\le 1$</td><td>$x = \\pm x_0 + 2k\\pi$</td></tr>
         <tr><td>$\\mathrm{tg}\\,x = a$</td><td>vždy</td><td>$x = x_0 + k\\pi$</td></tr>
       </table>
       <p>Tu $x_0$ je jeden koreň (napr. príslušný ostrý uhol s vhodným znamienkom). Rovnice so sínusom a kosínusom pri $|a| &gt; 1$ riešenie nemajú.</p>`,
      `<p><strong>Substitúcia.</strong> Rovnicu $2\\sin^2 x - \\sin x - 1 = 0$ riešime ako kvadratickú rovnicu pre neznámu $t = \\sin x$: $2t^2 - t - 1 = 0$ má korene $t_1 = 1$, $t_2 = -\\frac{1}{2}$. Potom riešime zvlášť $\\sin x = 1$ a $\\sin x = -\\frac{1}{2}$.</p>`
    ],
    examples: [
      { task: 'Vyrieš v $\\mathbb{R}$ rovnicu $2\\cos x + \\sqrt{3} = 0$.',
        steps: ['$\\cos x = -\\frac{\\sqrt{3}}{2}$.',
                'Príslušný ostrý uhol je $\\frac{\\pi}{6}$, kosínus je záporný v II. a III. kvadrante: $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ a $x = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$.',
                'Všetky riešenia: $x = \\frac{5\\pi}{6} + 2k\\pi$ alebo $x = \\frac{7\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$ (stručne $x = \\pm\\frac{5\\pi}{6} + 2k\\pi$).'] },
      { task: 'Vyrieš rovnicu $2\\sin^2 x - \\sin x - 1 = 0$ v intervale $\\langle 0^\\circ; 360^\\circ)$.',
        steps: ['Substitúcia $t = \\sin x$: $2t^2 - t - 1 = 0$, $D = 1 + 8 = 9$, $t_1 = 1$, $t_2 = -\\frac{1}{2}$.',
                '$\\sin x = 1$ pre $x = 90^\\circ$; $\\sin x = -\\frac{1}{2}$ pre $x = 210^\\circ$ a $x = 330^\\circ$.',
                '<strong>Korene:</strong> $90^\\circ$, $210^\\circ$, $330^\\circ$.'] }
    ]
  });

  // riešenia rovnice f(x) = v na ⟨0°; 360°)
  const solveDeg = (f, v) => {
    const out = [];
    for (let d = 0; d < 360; d++) { const t = trig(f, d); if (t !== null && Math.abs(t - v) < 1e-9) out.push(d); }
    return out;
  };
  const degList = (arr) => arr.map((d) => `${d}^\\circ`).join(';\\ ');

  gen('s3-rovnice', () => {
    const k = rnd(0, 2);
    if (k === 0) {
      const f = pick(['sin', 'cos', 'sin', 'cos', 'tg']);
      // [hodnota, koeficient pred funkciou, konštanta]
      const forms = f === 'tg'
        ? [[1, '', '1'], [Math.sqrt(3), '', '\\sqrt{3}'], [Math.sqrt(3) / 3, '\\sqrt{3}\\,', '1'], [0, '', null]]
        : [[0.5, '2', '1'], [Math.SQRT1_2, '2', '\\sqrt{2}'], [Math.sqrt(3) / 2, '2', '\\sqrt{3}'], [1, '', '1'], [0, '', null]];
      const [mag, coef, cst] = pick(forms), s = mag === 0 ? 1 : pick([1, -1]), v = s * mag;
      const eq = cst === null ? `${coef}${FX[f]} = 0` : `${coef}${FX[f]} ${s > 0 ? '-' : '+'} ${cst} = 0`;
      const sol = solveDeg(f, v);
      const ref = [30, 45, 60].find((r) => Math.abs(Math.abs(trig(f, r)) - mag) < 1e-9 && mag !== 0 && mag !== 1);
      let expl;
      if (ref) {
        const qs = sol.map((d) => QN[quad(d)]);
        expl = `Príslušný ostrý uhol je $${ref}^\\circ$, lebo $${FT[f]}\\,${ref}^\\circ = ${exTex(mag)}$. ${FN[f][0].toUpperCase() + FN[f].slice(1)} je ${v > 0 ? 'kladný' : 'záporný'} v ${qs.join(' a ')} kvadrante, preto $x \\in \\{${degList(sol)}\\}$.`;
      } else {
        expl = `Na jednotkovej kružnici nájdeme všetky uhly z intervalu $\\langle 0^\\circ; 360^\\circ)$, pre ktoré $${FX[f]} = ${exTex(v)}$: $x \\in \\{${degList(sol)}\\}$.`;
      }
      return {
        type: 'set', answer: sol, show: sol.map((d) => d + '°').join('; '),
        q: `Vyrieš rovnicu $${eq}$ v intervale $\\langle 0^\\circ; 360^\\circ)$. Všetky korene zadaj v stupňoch oddelené bodkočiarkou (napr. 30; 150).`,
        solution: `Úpravou dostaneme $${FX[f]} = ${exTex(v)}$. ${expl}`,
        hint: 'Rovnicu uprav na tvar $\\sin x = a$ (resp. $\\cos x = a$, $\\mathrm{tg}\\,x = a$) a nájdi všetky uhly v intervale – pomôže jednotková kružnica a znamienka v kvadrantoch.'
      };
    }
    if (k === 1) {
      const f = pick(['sin', 'cos']);
      let p1, p2;
      do { p1 = rnd(-4, 4); p2 = rnd(-4, 4); } while (p1 === p2 || (Math.abs(p1) > 2 && Math.abs(p2) > 2));
      let A = 4, B = -2 * (p1 + p2), Cc = p1 * p2;
      const g = gcd(gcd(A, B), Cc) || 1;
      A /= g; B /= g; Cc /= g;
      const lead = A === 1 ? '' : String(A);
      const eq = `${lead}${FT[f]}^2 x${term(B, FX[f])}${term(Cc)} = 0`;
      const parts = [], all = [];
      [p1, p2].sort((a, b) => a - b).forEach((p) => {
        const t = p / 2;
        if (Math.abs(t) > 1) { parts.push(`Rovnica $${FX[f]} = ${fTex(p, 2)}$ nemá riešenie, lebo $|${FX[f]}| \\le 1$.`); return; }
        const s = solveDeg(f, t);
        all.push(...s);
        parts.push(`$${FX[f]} = ${fTex(p, 2)}$ pre $x \\in \\{${degList(s)}\\}$.`);
      });
      all.sort((a, b) => a - b);
      return {
        type: 'set', answer: all, show: all.map((d) => d + '°').join('; '),
        q: `Vyrieš rovnicu $${eq}$ v intervale $\\langle 0^\\circ; 360^\\circ)$. Všetky korene zadaj v stupňoch oddelené bodkočiarkou.`,
        solution: `Substitúcia $t = ${FX[f]}$: $${lead}t^2${term(B, 't')}${term(Cc)} = 0$ má korene $t_1 = ${fTex(Math.min(p1, p2), 2)}$, $t_2 = ${fTex(Math.max(p1, p2), 2)}$. ${parts.join(' ')} <strong>Korene:</strong> $${degList(all)}$.`,
        hint: `Zaveď substitúciu $t = ${FX[f]}$, vyrieš kvadratickú rovnicu a potom pre každý koreň $t$ rieš základnú rovnicu. Nezabudni, že $|${FX[f]}| \\le 1$.`
      };
    }
    const f = pick(['sin', 'cos', 'tg']), q = pick([6, 4, 3]);
    const a = piTex(1, q), pa = piTex(q - 1, q), val = trig(f, 180 / q);
    const O = {
      two: `$x = ${a} + 2k\\pi$ alebo $x = ${pa} + 2k\\pi$`,
      pm: `$x = \\pm ${a} + 2k\\pi$`,
      kpi: `$x = ${a} + k\\pi$`,
      one: `$x = ${a} + 2k\\pi$`
    };
    const ans = f === 'sin' ? O.two : f === 'cos' ? O.pm : O.kpi;
    const why = f === 'sin'
      ? `Jeden koreň je $${a}$, lebo $\\sin ${a} = ${exTex(val)}$. Rovnaký sínus (rovnakú $y$-ovú súradnicu na jednotkovej kružnici) má aj uhol $\\pi - ${a} = ${pa}$. Sínus má periódu $2\\pi$, preto $x = ${a} + 2k\\pi$ alebo $x = ${pa} + 2k\\pi$.`
      : f === 'cos'
        ? `Jeden koreň je $${a}$, lebo $\\cos ${a} = ${exTex(val)}$. Rovnaký kosínus (rovnakú $x$-ovú súradnicu) má aj uhol $-${a}$. Kosínus má periódu $2\\pi$, preto $x = \\pm ${a} + 2k\\pi$.`
        : `Jeden koreň je $${a}$, lebo $\\mathrm{tg}\\,${a} = ${exTex(val)}$. Tangens má periódu $\\pi$ a v každej perióde nadobúda danú hodnotu práve raz, preto $x = ${a} + k\\pi$.`;
    return {
      type: 'choice', options: shuffle([O.two, O.pm, O.kpi, O.one]), answer: ans,
      q: `Ktorý zápis vyjadruje všetky riešenia rovnice $${FX[f]} = ${exTex(val)}$ v obore $\\mathbb{R}$? ($k \\in \\mathbb{Z}$)`,
      solution: why,
      hint: 'Nájdi jeden koreň, potom zisti, či má rovnakú hodnotu funkcie ešte iný uhol v tej istej perióde, a pripočítaj násobky periódy.'
    };
  });

  lesson({
    id: 's3-trojuholnik', order: 70, topics: ['goniometria', 'planimetria'], title: 'Sínusová a kosínusová veta',
    summary: 'Riešenie všeobecného trojuholníka: sínusová veta, kosínusová veta a obsah pomocou sínusu.',
    theory: [
      `<p>V trojuholníku $ABC$ označujeme strany $a = |BC|$, $b = |AC|$, $c = |AB|$ a vnútorné uhly $\\alpha$, $\\beta$, $\\gamma$ pri vrcholoch $A$, $B$, $C$. Platí $\\alpha + \\beta + \\gamma = 180^\\circ$ a oproti väčšej strane leží väčší uhol.</p>`,
      { fig: 's3-trojuholnik', caption: 'Strana $a$ leží oproti uhlu $\\alpha$, strana $b$ oproti $\\beta$, strana $c$ oproti $\\gamma$.' },
      `<p><strong>Sínusová veta:</strong> $\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma} = 2r$, kde $r$ je polomer kružnice opísanej trojuholníku. Používame ju, ak poznáme stranu a dva uhly, alebo dve strany a uhol oproti jednej z nich.</p>
       <p><strong>Kosínusová veta:</strong> $c^2 = a^2 + b^2 - 2ab\\cos\\gamma$ (analogicky $a^2 = b^2 + c^2 - 2bc\\cos\\alpha$, $b^2 = a^2 + c^2 - 2ac\\cos\\beta$). Používame ju, ak poznáme dve strany a uhol nimi zovretý, alebo všetky tri strany. Pre $\\gamma = 90^\\circ$ je $\\cos\\gamma = 0$ a dostaneme Pytagorovu vetu.</p>
       <p><strong>Obsah trojuholníka:</strong> $S = \\frac{1}{2}ab\\sin\\gamma = \\frac{1}{2}bc\\sin\\alpha = \\frac{1}{2}ac\\sin\\beta$.</p>`
    ],
    examples: [
      { task: 'V trojuholníku $ABC$ je $a = 8$ cm, $\\alpha = 50^\\circ$, $\\beta = 70^\\circ$. Vypočítaj dĺžku strany $b$.',
        steps: ['Zo sínusovej vety $b = \\frac{a\\sin\\beta}{\\sin\\alpha} = \\frac{8\\cdot\\sin 70^\\circ}{\\sin 50^\\circ}$.',
                '$b \\approx \\frac{8\\cdot 0{,}9397}{0{,}7660} \\approx 9{,}81$ cm.'] },
      { task: 'Trojuholník má strany $a = 3$, $b = 5$, $c = 7$. Urči jeho najväčší uhol.',
        steps: ['Najväčší uhol leží oproti najdlhšej strane $c$, je to $\\gamma$.',
                '$\\cos\\gamma = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{9 + 25 - 49}{30} = -\\frac{1}{2}$.',
                '$\\gamma = 120^\\circ$.'] }
    ]
  });

  const sinD = (d) => Math.sin(d * Math.PI / 180), cosD = (d) => Math.cos(d * Math.PI / 180);

  gen('s3-trojuholnik', () => {
    const k = rnd(0, 3);
    const R2 = 'Výsledok zaokrúhli na dve desatinné miesta.';
    if (k === 0) {
      const a = rnd(4, 20), al = rnd(25, 80), be = rnd(25, Math.min(120, 160 - al)), ga = 180 - al - be;
      const askB = Math.random() < 0.5, ang = askB ? be : ga, res = a * sinD(ang) / sinD(al), nm = askB ? 'b' : 'c', gr = askB ? '\\beta' : '\\gamma';
      return {
        answer: res, tol: 0.02,
        q: `V trojuholníku $ABC$ je $a = ${a}$ cm, $\\alpha = ${al}^\\circ$, $\\beta = ${be}^\\circ$. Vypočítaj dĺžku strany $${nm}$ v cm. ${R2}`,
        solution: `${askB ? '' : `$\\gamma = 180^\\circ - ${al}^\\circ - ${be}^\\circ = ${ga}^\\circ$. `}Zo sínusovej vety $${nm} = \\frac{a\\sin ${gr}}{\\sin\\alpha} = \\frac{${a}\\cdot\\sin ${ang}^\\circ}{\\sin ${al}^\\circ} \\approx \\frac{${a}\\cdot ${fx(sinD(ang), 4)}}{${fx(sinD(al), 4)}} \\approx ${fx(res)}$ cm.`,
        hint: askB ? 'Poznáš stranu a dva uhly – použi sínusovú vetu $\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta}$.' : 'Najprv dopočítaj uhol $\\gamma$, potom použi sínusovú vetu.'
      };
    }
    if (k === 1) {
      const a = rnd(3, 15), b = rnd(3, 15), g = rnd(20, 150);
      const c2 = a * a + b * b - 2 * a * b * cosD(g), c = Math.sqrt(c2);
      return {
        answer: c, tol: 0.02,
        q: `V trojuholníku $ABC$ je $a = ${a}$ cm, $b = ${b}$ cm a uhol $\\gamma = ${g}^\\circ$. Vypočítaj dĺžku strany $c$ v cm. ${R2}`,
        solution: `Kosínusová veta: $c^2 = a^2 + b^2 - 2ab\\cos\\gamma = ${a * a} + ${b * b} - 2\\cdot ${a}\\cdot ${b}\\cdot\\cos ${g}^\\circ \\approx ${fx(c2, 3)}$, teda $c \\approx ${fx(c)}$ cm.`,
        hint: 'Poznáš dve strany a uhol nimi zovretý – použi kosínusovú vetu.'
      };
    }
    if (k === 2) {
      let s;
      do s = [rnd(3, 15), rnd(3, 15), rnd(3, 15)]; while (s[0] + s[1] <= s[2] || s[0] + s[2] <= s[1] || s[1] + s[2] <= s[0]);
      const i = rnd(0, 2), names = ['a', 'b', 'c'], angs = ['\\alpha', '\\beta', '\\gamma'];
      const x = s[i], y = s[(i + 1) % 3], z = s[(i + 2) % 3];
      const [ny, nzz] = [names[(i + 1) % 3], names[(i + 2) % 3]].sort();
      const [yy, zz] = ny === names[(i + 1) % 3] ? [y, z] : [z, y];
      const cs = (yy * yy + zz * zz - x * x) / (2 * yy * zz), ang = Math.acos(cs) * 180 / Math.PI;
      return {
        answer: ang, tol: 0.1,
        q: `Trojuholník $ABC$ má strany $a = ${s[0]}$ cm, $b = ${s[1]}$ cm, $c = ${s[2]}$ cm. Vypočítaj veľkosť uhla $${angs[i]}$ v stupňoch, zaokrúhli na desatiny stupňa.`,
        solution: `Z kosínusovej vety $\\cos${angs[i]} = \\frac{${ny}^2 + ${nzz}^2 - ${names[i]}^2}{2${ny}${nzz}} = \\frac{${yy * yy} + ${zz * zz} - ${x * x}}{${2 * yy * zz}} = ${fTex(yy * yy + zz * zz - x * x, 2 * yy * zz)} \\approx ${fx(cs, 4)}$, teda $${angs[i]} \\approx ${fx(ang, 1)}^\\circ$.`,
        hint: 'Poznáš všetky tri strany – z kosínusovej vety vyjadri kosínus hľadaného uhla.'
      };
    }
    if (Math.random() < 0.6) {
      const a = rnd(3, 15), b = rnd(3, 15), g = rnd(20, 160), S = a * b * sinD(g) / 2;
      return {
        answer: S, tol: 0.02,
        q: `V trojuholníku $ABC$ je $a = ${a}$ cm, $b = ${b}$ cm a $\\gamma = ${g}^\\circ$. Vypočítaj jeho obsah v cm². ${R2}`,
        solution: `$S = \\frac{1}{2}ab\\sin\\gamma = \\frac{1}{2}\\cdot ${a}\\cdot ${b}\\cdot\\sin ${g}^\\circ \\approx ${fx(a * b / 2, 1)}\\cdot ${fx(sinD(g), 4)} \\approx ${fx(S)}$ cm².`,
        hint: 'Obsah trojuholníka je polovica súčinu dvoch strán a sínusu uhla, ktorý zvierajú.'
      };
    }
    const a = rnd(4, 20), al = rnd(20, 150), r = a / (2 * sinD(al));
    return {
      answer: r, tol: 0.02,
      q: `V trojuholníku $ABC$ je $a = ${a}$ cm a $\\alpha = ${al}^\\circ$. Vypočítaj polomer kružnice opísanej tomuto trojuholníku v cm. ${R2}`,
      solution: `Zo sínusovej vety $\\frac{a}{\\sin\\alpha} = 2r$, teda $r = \\frac{a}{2\\sin\\alpha} = \\frac{${a}}{2\\cdot\\sin ${al}^\\circ} \\approx \\frac{${a}}{2\\cdot ${fx(sinD(al), 4)}} \\approx ${fx(r)}$ cm.`,
      hint: 'Sínusová veta: $\\frac{a}{\\sin\\alpha} = 2r$.'
    };
  });

  /* ================= B. ANALYTICKÁ GEOMETRIA ================= */

  const pt = (n, x, y) => `${n}[${x}; ${y}]`;
  const vc = (x, y) => `(${x}; ${y})`;

  lesson({
    id: 's3-vektory', order: 110, topics: ['analyticka'], title: 'Súradnice, vzdialenosť bodov a vektory',
    summary: 'Súradnicová sústava v rovine, vzdialenosť a stred úsečky, vektor, operácie s vektormi a skalárny súčin.',
    theory: [
      `<p>V pravouhlej <strong>súradnicovej sústave</strong> v rovine je každý bod určený usporiadanou dvojicou súradníc, píšeme $A[a_1; a_2]$. <strong>Vzdialenosť</strong> bodov $A[a_1; a_2]$ a $B[b_1; b_2]$ vyplýva z Pytagorovej vety:</p>
       $$|AB| = \\sqrt{(b_1 - a_1)^2 + (b_2 - a_2)^2}.$$
       <p><strong>Stred</strong> úsečky $AB$ je $S\\left[\\frac{a_1 + b_1}{2}; \\frac{a_2 + b_2}{2}\\right]$.</p>`,
      `<p><strong>Vektor</strong> $\\vec{u} = \\overrightarrow{AB}$ je určený orientovanou úsečkou; všetky rovnako dlhé a rovnako orientované úsečky určujú ten istý vektor. Jeho súradnice sú $\\vec{u} = B - A = (b_1 - a_1; b_2 - a_2)$ a jeho veľkosť je $|\\vec{u}| = \\sqrt{u_1^2 + u_2^2}$.</p>
       <p>Súčet a násobok počítame po súradniciach: $\\vec{u} + \\vec{v} = (u_1 + v_1; u_2 + v_2)$, $k\\cdot\\vec{u} = (k u_1; k u_2)$.</p>`,
      { fig: 's3-vektory', caption: 'Súčet vektorov podľa pravidla rovnobežníka: $\\vec{u} + \\vec{v}$ je uhlopriečka rovnobežníka zostrojeného z $\\vec{u}$ a $\\vec{v}$.' },
      `<p><strong>Skalárny súčin</strong> $\\vec{u}\\cdot\\vec{v} = u_1 v_1 + u_2 v_2 = |\\vec{u}|\\cdot|\\vec{v}|\\cdot\\cos\\varphi$, kde $\\varphi \\in \\langle 0^\\circ; 180^\\circ\\rangle$ je uhol vektorov. Preto $\\cos\\varphi = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}|\\cdot|\\vec{v}|}$. Nenulové vektory sú <strong>kolmé</strong> práve vtedy, keď $\\vec{u}\\cdot\\vec{v} = 0$.</p>`
    ],
    examples: [
      { task: 'Dané sú body $A[1; -2]$ a $B[7; 6]$. Vypočítaj $|AB|$ a stred úsečky $AB$.',
        steps: ['$\\overrightarrow{AB} = (7 - 1; 6 + 2) = (6; 8)$, $|AB| = \\sqrt{36 + 64} = 10$.',
                '$S\\left[\\frac{1 + 7}{2}; \\frac{-2 + 6}{2}\\right] = S[4; 2]$.'] },
      { task: 'Pre $\\vec{u} = (3; 1)$ a $\\vec{v} = (1; 2)$ vypočítaj $2\\vec{u} - \\vec{v}$ a uhol vektorov $\\vec{u}$, $\\vec{v}$.',
        steps: ['$2\\vec{u} - \\vec{v} = (6 - 1; 2 - 2) = (5; 0)$.',
                '$\\vec{u}\\cdot\\vec{v} = 3 + 2 = 5$, $|\\vec{u}| = \\sqrt{10}$, $|\\vec{v}| = \\sqrt{5}$.',
                '$\\cos\\varphi = \\frac{5}{\\sqrt{50}} = \\frac{\\sqrt{2}}{2}$, teda $\\varphi = 45^\\circ$.'] }
    ]
  });

  gen('s3-vektory', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const a1 = rnd(-6, 6), a2 = rnd(-6, 6);
      let dx, dy, exact = Math.random() < 0.55;
      if (exact) {
        const [p, q] = pick([[3, 4], [6, 8], [5, 12], [8, 6], [4, 3], [12, 5], [0, 5], [7, 0]]);
        dx = p * pick([1, -1]); dy = q * pick([1, -1]);
      } else {
        do { dx = rnd(-7, 7); dy = rnd(-7, 7); } while (dx === 0 || dy === 0);
      }
      const b1 = a1 + dx, b2 = a2 + dy, d2 = dx * dx + dy * dy, d = Math.sqrt(d2);
      exact = Number.isInteger(d);
      return {
        answer: d, tol: exact ? 1e-6 : 0.01,
        q: `Vypočítaj vzdialenosť bodov $${pt('A', a1, a2)}$ a $${pt('B', b1, b2)}$.${exact ? '' : ' Výsledok zaokrúhli na dve desatinné miesta.'}`,
        solution: `$|AB| = \\sqrt{(${b1} - ${par(a1)})^2 + (${b2} - ${par(a2)})^2} = \\sqrt{${dx * dx} + ${dy * dy}} = \\sqrt{${d2}}${exact ? ` = ${d}` : ` \\approx ${fx(d)}`}$.`,
        hint: 'Použi $|AB| = \\sqrt{(b_1 - a_1)^2 + (b_2 - a_2)^2}$.'
      };
    }
    if (k === 1) {
      const a1 = rnd(-8, 8), a2 = rnd(-8, 8), b1 = rnd(-8, 8), b2 = rnd(-8, 8);
      if (Math.random() < 0.5) {
        const s1 = (a1 + b1) / 2, s2 = (a2 + b2) / 2;
        return {
          type: 'tuple', signed: true, answer: [s1, s2], placeholder: 'x; y',
          q: `Urči súradnice stredu $S$ úsečky $AB$, kde $${pt('A', a1, a2)}$ a $${pt('B', b1, b2)}$. Zadaj ich v tvare „x; y“.`,
          solution: `$S\\left[\\frac{${a1} + ${par(b1)}}{2}; \\frac{${a2} + ${par(b2)}}{2}\\right] = S[${dc(s1)}; ${dc(s2)}]$.`,
          hint: 'Súradnice stredu sú aritmetické priemery príslušných súradníc krajných bodov.'
        };
      }
      const s1 = rnd(-6, 6), s2 = rnd(-6, 6);
      return {
        type: 'tuple', signed: true, answer: [2 * s1 - a1, 2 * s2 - a2], placeholder: 'x; y',
        q: `Bod $${pt('S', s1, s2)}$ je stredom úsečky $AB$, pričom $${pt('A', a1, a2)}$. Urči súradnice bodu $B$ v tvare „x; y“.`,
        solution: `Z $s_1 = \\frac{a_1 + b_1}{2}$ dostaneme $b_1 = 2s_1 - a_1 = ${2 * s1} - ${par(a1)} = ${2 * s1 - a1}$, podobne $b_2 = ${2 * s2} - ${par(a2)} = ${2 * s2 - a2}$. Teda $${pt('B', 2 * s1 - a1, 2 * s2 - a2)}$.`,
        hint: 'Platí $B = 2S - A$, t. j. $b_1 = 2s_1 - a_1$ a $b_2 = 2s_2 - a_2$.'
      };
    }
    if (k === 2) {
      const u1 = rnd(-5, 5), u2 = rnd(-5, 5), v1 = rnd(-5, 5), v2 = rnd(-5, 5), p = nz(-3, 3), q = nz(-3, 3);
      const cf = (c) => (c === 1 ? '' : c === -1 ? '-' : String(c));
      const expr = `${cf(p)}\\vec{u} ${q > 0 ? '+' : '-'} ${Math.abs(q) === 1 ? '' : Math.abs(q)}\\vec{v}`;
      const w1 = p * u1 + q * v1, w2 = p * u2 + q * v2;
      return {
        type: 'tuple', signed: true, answer: [w1, w2], placeholder: 'x; y',
        q: `Dané sú vektory $\\vec{u} = ${vc(u1, u2)}$ a $\\vec{v} = ${vc(v1, v2)}$. Vypočítaj súradnice vektora $${expr}$ v tvare „x; y“.`,
        solution: `$${expr} = (${p}\\cdot ${par(u1)} ${q < 0 ? '-' : '+'} ${Math.abs(q)}\\cdot ${par(v1)}; ${p}\\cdot ${par(u2)} ${q < 0 ? '-' : '+'} ${Math.abs(q)}\\cdot ${par(v2)}) = ${vc(w1, w2)}$.`,
        hint: 'Násobok aj súčet vektorov počítaj zvlášť pre prvú a zvlášť pre druhú súradnicu.'
      };
    }
    if (Math.random() < 0.5) {
      let u1, u2, v1, v2;
      do { u1 = rnd(-5, 5); u2 = rnd(-5, 5); v1 = rnd(-5, 5); v2 = rnd(-5, 5); } while ((u1 === 0 && u2 === 0) || (v1 === 0 && v2 === 0));
      const dot = u1 * v1 + u2 * v2, nu = u1 * u1 + u2 * u2, nv = v1 * v1 + v2 * v2;
      const cs = Math.max(-1, Math.min(1, dot / Math.sqrt(nu * nv))), ang = Math.acos(cs) * 180 / Math.PI;
      return {
        answer: ang, tol: 0.1,
        q: `Vypočítaj veľkosť uhla vektorov $\\vec{u} = ${vc(u1, u2)}$ a $\\vec{v} = ${vc(v1, v2)}$ v stupňoch, zaokrúhli na desatiny stupňa.`,
        solution: `$\\vec{u}\\cdot\\vec{v} = ${u1}\\cdot ${par(v1)} + ${par(u2)}\\cdot ${par(v2)} = ${dot}$, $|\\vec{u}| = \\sqrt{${nu}}$, $|\\vec{v}| = \\sqrt{${nv}}$. $\\cos\\varphi = \\frac{${dot}}{\\sqrt{${nu}}\\cdot\\sqrt{${nv}}} \\approx ${fx(cs, 4)}$, teda $\\varphi \\approx ${fx(ang, 1)}^\\circ$.`,
        hint: 'Použi $\\cos\\varphi = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}|\\cdot|\\vec{v}|}$.'
      };
    }
    const t = rnd(-6, 6), v2 = nz(-4, 4), s = nz(-2, 2), u1 = v2 * s, u2 = -s * t;
    return {
      signed: true, answer: t,
      q: `Pre aké číslo $t$ sú vektory $\\vec{u} = ${vc(u1, u2)}$ a $\\vec{v} = (t; ${v2})$ na seba kolmé?`,
      solution: `Kolmé vektory majú nulový skalárny súčin: $${u1}t + ${par(u2)}\\cdot ${par(v2)} = 0$, teda $${u1}t = ${-u2 * v2}$ a $t = ${t}$.`,
      hint: 'Vektory sú kolmé práve vtedy, keď $u_1 v_1 + u_2 v_2 = 0$.'
    };
  });

  lesson({
    id: 's3-priamka', order: 120, topics: ['analyticka'], title: 'Priamka a vzájomná poloha priamok',
    summary: 'Parametrické vyjadrenie, všeobecná rovnica a smernicový tvar priamky; rovnobežky, rôznobežky a priesečník.',
    theory: [
      `<p><strong>Parametrické vyjadrenie.</strong> Priamka $p$ je určená bodom $A[a_1; a_2]$ a nenulovým <strong>smerovým vektorom</strong> $\\vec{u} = (u_1; u_2)$: $X = A + t\\cdot\\vec{u}$, $t \\in \\mathbb{R}$, po súradniciach $x = a_1 + t u_1$, $y = a_2 + t u_2$.</p>
       <p><strong>Všeobecná rovnica</strong> $ax + by + c = 0$, kde $(a; b) \\neq (0; 0)$. Vektor $\\vec{n} = (a; b)$ je <strong>normálový</strong> – kolmý na priamku. Zo smerového vektora $\\vec{u} = (u_1; u_2)$ dostaneme normálový zámenou súradníc a zmenou jedného znamienka: $\\vec{n} = (u_2; -u_1)$. Číslo $c$ dopočítame dosadením bodu priamky.</p>
       <p><strong>Smernicový tvar</strong> $y = kx + q$ majú priamky, ktoré nie sú rovnobežné s osou $y$. Smernica $k = \\frac{u_2}{u_1} = -\\frac{a}{b} = \\mathrm{tg}\\,\\varphi$, kde $\\varphi$ je uhol priamky s kladnou polosou $x$; $q$ je $y$-ová súradnica priesečníka s osou $y$.</p>`,
      { fig: 's3-priamka', caption: 'Priamka určená bodom $A$ a smerovým vektorom $\\vec{u}$. Druhá šípka je normálový vektor $\\vec{n}$. Popis ukazuje všetky tri tvary rovnice.' },
      `<p><strong>Vzájomná poloha</strong> priamok $p\\colon a_1x + b_1y + c_1 = 0$ a $q\\colon a_2x + b_2y + c_2 = 0$:</p>
       <ul>
         <li>ak normálové vektory nie sú násobkami (t. j. $a_1b_2 - a_2b_1 \\neq 0$), priamky sú <strong>rôznobežné</strong> a priesečník nájdeme riešením sústavy rovníc;</li>
         <li>ak je $\\vec{n}_q = m\\cdot\\vec{n}_p$ a aj $c_2 = m\\cdot c_1$, priamky sú <strong>totožné</strong>;</li>
         <li>ak je $\\vec{n}_q = m\\cdot\\vec{n}_p$, ale $c_2 \\neq m\\cdot c_1$, priamky sú <strong>rovnobežné rôzne</strong>.</li>
       </ul>
       <p>Ak je priamka $q$ daná parametricky, stačí overiť, či je jej smerový vektor kolmý na $\\vec{n}_p$ (rovnobežnosť), a dosadiť jej bod do rovnice $p$. Rôznobežky sú kolmé, ak $\\vec{n}_p\\cdot\\vec{n}_q = 0$; v smernicovom tvare rovnobežky majú $k_1 = k_2$, kolmice $k_1\\cdot k_2 = -1$.</p>`
    ],
    examples: [
      { task: 'Priamka prechádza bodmi $A[1; 2]$ a $B[4; -4]$. Napíš jej parametrické vyjadrenie, všeobecnú rovnicu a smernicový tvar.',
        steps: ['$\\vec{u} = B - A = (3; -6)$, kratší smerový vektor je $(1; -2)$. Parametricky: $x = 1 + t$, $y = 2 - 2t$, $t \\in \\mathbb{R}$.',
                'Normálový vektor $\\vec{n} = (2; 1)$, rovnica $2x + y + c = 0$. Dosadíme $A$: $2 + 2 + c = 0$, $c = -4$. Teda $2x + y - 4 = 0$.',
                'Smernicový tvar: $y = -2x + 4$.'] },
      { task: 'Urči vzájomnú polohu priamok $p\\colon x - 2y + 3 = 0$ a $q\\colon 2x + y - 4 = 0$.',
        steps: ['$\\vec{n}_p = (1; -2)$ a $\\vec{n}_q = (2; 1)$ nie sú násobkami – priamky sú rôznobežné (a keďže $\\vec{n}_p\\cdot\\vec{n}_q = 0$, dokonca kolmé).',
                'Z $p$: $x = 2y - 3$. Dosadíme do $q$: $2(2y - 3) + y - 4 = 0$, $5y = 10$, $y = 2$, $x = 1$.',
                '<strong>Priesečník</strong> $P[1; 2]$.'] }
    ]
  });

  const paramEq = (x0, y0, u1, u2) => `x = ${lin([[x0, ''], [u1, 't']])},\\ y = ${lin([[y0, ''], [u2, 't']])},\\ t \\in \\mathbb{R}`;

  gen('s3-priamka', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      let a1, a2, b1, b2;
      do { a1 = rnd(-5, 5); a2 = rnd(-5, 5); b1 = rnd(-5, 5); b2 = rnd(-5, 5); } while (a1 === b1 && a2 === b2);
      const u1 = b1 - a1, u2 = b2 - a2, A0 = u2, B0 = -u1, C0 = -(A0 * a1 + B0 * a2);
      const [a, b, c] = normLine(A0, B0, C0);
      const changed = a !== A0 || b !== B0 || c !== C0;
      return {
        type: 'tuple', proportional: true, signed: true, answer: [a, b, c], placeholder: 'a; b; c',
        q: `Napíš všeobecnú rovnicu $ax + by + c = 0$ priamky $AB$, kde $${pt('A', a1, a2)}$ a $${pt('B', b1, b2)}$. Zadaj koeficienty $a; b; c$ (uznáme aj ich nenulový násobok).`,
        solution: `Smerový vektor $\\vec{u} = B - A = ${vc(u1, u2)}$, normálový vektor $\\vec{n} = ${vc(A0, B0)}$. Rovnica $${lin([[A0, 'x'], [B0, 'y']])} + c = 0$; dosadením bodu $A$ dostaneme $c = ${C0}$, teda $${genEq(A0, B0, C0)}$${changed ? `, po úprave $${genEq(a, b, c)}$` : ''}.`,
        hint: 'Z bodov urči smerový vektor, z neho normálový vektor $(u_2; -u_1)$ a $c$ dopočítaj dosadením jedného bodu.'
      };
    }
    if (k === 1) {
      if (Math.random() < 0.5) {
        const b = nz(-5, 5), a = rnd(-5, 5), c = rnd(-9, 9);
        return {
          type: 'tuple', signed: true, answer: [-a / b, -c / b], show: `${fTxt(-a, b)}; ${fTxt(-c, b)}`, placeholder: 'k; q',
          q: `Priamku $p\\colon ${genEq(a, b, c)}$ vyjadri v smernicovom tvare $y = kx + q$. Zadaj $k; q$ (zlomky v tvare 2/3).`,
          solution: `Vyjadríme $y$: $${b === 1 ? '' : b === -1 ? '-' : b}y = ${lin([[-a, 'x'], [-c, '']])}$${b === 1 ? '' : `, po vydelení číslom $${b}$`}: $${slopeTex(-a, b, -c, b)}$. Teda $k = ${fTex(-a, b)}$, $q = ${fTex(-c, b)}$.`,
          hint: 'Z rovnice vyjadri neznámu $y$: všetko ostatné presuň na pravú stranu a vydeľ koeficientom pri $y$.'
        };
      }
      let x1, y1, x2, y2;
      do { x1 = rnd(-5, 5); y1 = rnd(-5, 5); x2 = rnd(-5, 5); y2 = rnd(-5, 5); } while (x1 === x2);
      const u1 = x2 - x1, u2 = y2 - y1, qp = y1 * u1 - u2 * x1;
      return {
        type: 'tuple', signed: true, answer: [u2 / u1, qp / u1], show: `${fTxt(u2, u1)}; ${fTxt(qp, u1)}`, placeholder: 'k; q',
        q: `Napíš smernicový tvar $y = kx + q$ priamky prechádzajúcej bodmi $${pt('A', x1, y1)}$ a $${pt('B', x2, y2)}$. Zadaj $k; q$ (zlomky v tvare 2/3).`,
        solution: `$k = \\frac{y_B - y_A}{x_B - x_A} = \\frac{${u2}}{${u1}} = ${fTex(u2, u1)}$. Z bodu $A$: $q = y_A - k x_A = ${y1} - ${fPar(u2, u1)}\\cdot ${par(x1)} = ${fTex(qp, u1)}$. Priamka: $${slopeTex(u2, u1, qp, u1)}$.`,
        hint: 'Smernica je podiel prírastku $y$ a prírastku $x$: $k = \\frac{y_B - y_A}{x_B - x_A}$. Potom dosaď jeden bod do $y = kx + q$.'
      };
    }
    if (k === 2) {
      let a, b;
      do { a = rnd(-4, 4); b = rnd(-4, 4); } while ((a === 0 && b === 0) || gcd(a, b) !== 1 || a < 0 || (a === 0 && b < 0));
      const x1 = rnd(-4, 4), y1 = rnd(-4, 4), c1 = -(a * x1 + b * y1);
      const kind = pick(['rovnobežné rôzne', 'totožné', 'rôznobežné']);
      const eqP = genEq(a, b, c1);
      let eqQ, why;
      if (Math.random() < 0.5) {
        let a2, b2, c2;
        if (kind === 'totožné') { const m = pick([-3, -2, 2, 3]); a2 = m * a; b2 = m * b; c2 = m * c1; }
        else if (kind === 'rovnobežné rôzne') { const m = pick([-2, -1, 1, 2]); a2 = m * a; b2 = m * b; c2 = m * c1 + nz(-6, 6); }
        else { do { a2 = rnd(-4, 4); b2 = rnd(-4, 4); } while (a * b2 - a2 * b === 0); c2 = rnd(-8, 8); }
        eqQ = genEq(a2, b2, c2);
        const det = a * b2 - a2 * b;
        if (det !== 0) {
          why = `Normálové vektory $\\vec{n}_p = ${vc(a, b)}$ a $\\vec{n}_q = ${vc(a2, b2)}$ nie sú násobkami ($${a}\\cdot ${par(b2)} - ${par(a2)}\\cdot ${par(b)} = ${det} \\neq 0$), priamky sú rôznobežné.`;
        } else {
          const m = a !== 0 ? a2 / a : b2 / b;
          why = `$\\vec{n}_q = ${vc(a2, b2)} = ${m}\\cdot ${vc(a, b)} = ${m}\\cdot\\vec{n}_p$, priamky sú rovnobežné. `
            + (c2 === m * c1
              ? `Aj $c_q = ${c2} = ${m}\\cdot ${par(c1)}$, rovnica $q$ vznikne vynásobením rovnice $p$ číslom $${m}$ – priamky sú totožné.`
              : `Ale $c_q = ${c2} \\neq ${m}\\cdot ${par(c1)} = ${m * c1}$, priamky nemajú spoločný bod – sú rovnobežné rôzne.`);
        }
      } else {
        let x0, y0, u1, u2;
        if (kind === 'totožné') { const s = rnd(-2, 2), m = nz(-2, 2); x0 = x1 + s * b; y0 = y1 - s * a; u1 = m * b; u2 = -m * a; }
        else if (kind === 'rovnobežné rôzne') { const m = nz(-2, 2); x0 = x1 + a; y0 = y1 + b; u1 = m * b; u2 = -m * a; }
        else { do { u1 = rnd(-4, 4); u2 = rnd(-4, 4); } while (a * u1 + b * u2 === 0); x0 = rnd(-5, 5); y0 = rnd(-5, 5); }
        eqQ = paramEq(x0, y0, u1, u2);
        const dot = a * u1 + b * u2;
        why = `Smerový vektor priamky $q$ je $\\vec{u} = ${vc(u1, u2)}$, normálový vektor priamky $p$ je $\\vec{n}_p = ${vc(a, b)}$; $\\vec{n}_p\\cdot\\vec{u} = ${a}\\cdot ${par(u1)} + ${par(b)}\\cdot ${par(u2)} = ${dot}$. `;
        if (dot !== 0) why += 'Vektor $\\vec{u}$ nie je kolmý na $\\vec{n}_p$, priamky sú rôznobežné.';
        else {
          const val = a * x0 + b * y0 + c1;
          why += `Vektor $\\vec{u}$ je kolmý na $\\vec{n}_p$, priamky sú rovnobežné. Bod $${pt('Q', x0, y0)}$ priamky $q$ dosadíme do rovnice $p$: $${a}\\cdot ${par(x0)} + ${par(b)}\\cdot ${par(y0)} + ${par(c1)} = ${val}${val === 0 ? '' : ' \\neq 0'}$`
            + (val === 0 ? ', bod na $p$ leží – priamky sú totožné.' : ', bod na $p$ neleží – priamky sú rovnobežné rôzne.');
        }
      }
      return {
        type: 'choice', options: ['rovnobežné rôzne', 'totožné', 'rôznobežné'], answer: kind,
        q: `Urči vzájomnú polohu priamok $p\\colon ${eqP}$ a $q\\colon ${eqQ}$.`,
        solution: why,
        hint: 'Porovnaj normálové (alebo smerové) vektory. Ak sú priamky rovnobežné, over, či majú spoločný bod.'
      };
    }
    const X = rnd(-5, 5), Y = rnd(-5, 5);
    let a, b, a2, b2;
    do { a = rnd(-4, 4); b = rnd(-4, 4); a2 = rnd(-4, 4); b2 = rnd(-4, 4); }
    while ((a === 0 && b === 0) || (a2 === 0 && b2 === 0) || a * b2 - a2 * b === 0 || a < 0 || (a === 0 && b < 0));
    const c1 = -(a * X + b * Y), c2 = -(a2 * X + b2 * Y), det = a * b2 - a2 * b;
    let st;
    if (b === 0) st = `Z rovnice $p$: $${a}x = ${-c1}$, $x = ${X}$.`;
    else if (b2 === 0) st = `Z rovnice $q$: $${a2}x = ${-c2}$, $x = ${X}$.`;
    else st = `Prvú rovnicu vynásobíme číslom $${b2}$, druhú číslom $${b}$ a odčítame ich: $${det}x${term(c1 * b2 - c2 * b)} = 0$, teda $x = ${X}$.`;
    const [ea, eb, ec, nm] = b !== 0 ? [a, b, c1, 'p'] : [a2, b2, c2, 'q'];
    st += ` Dosadením do rovnice $${nm}$: $${eb}y = ${-ec - ea * X}$, $y = ${Y}$.`;
    return {
      type: 'tuple', signed: true, answer: [X, Y], placeholder: 'x; y',
      q: `Nájdi priesečník priamok $p\\colon ${genEq(a, b, c1)}$ a $q\\colon ${genEq(a2, b2, c2)}$. Zadaj jeho súradnice v tvare „x; y“.`,
      solution: `Riešime sústavu rovníc oboch priamok. ${st} Priesečník $${pt('P', X, Y)}$.`,
      hint: 'Súradnice priesečníka spĺňajú obe rovnice naraz – vyrieš sústavu (sčítacou alebo dosadzovacou metódou).'
    };
  });

  lesson({
    id: 's3-kruznica', order: 130, topics: ['analyticka'], title: 'Kružnica v súradnicovej sústave',
    summary: 'Stredový a všeobecný tvar rovnice kružnice, doplnenie na štvorec, poloha bodu a priamky voči kružnici.',
    theory: [
      `<p><strong>Kružnica</strong> so stredom $S[m; n]$ a polomerom $r &gt; 0$ je množina všetkých bodov $X[x; y]$, ktoré majú od $S$ vzdialenosť $r$. Zo vzorca pre vzdialenosť dostaneme <strong>stredový tvar</strong> rovnice:</p>
       $$(x - m)^2 + (y - n)^2 = r^2.$$`,
      { fig: 's3-kruznica', caption: 'Posúvaj stred a meň polomer. Popis ukazuje stredový aj všeobecný tvar rovnice.' },
      `<p>Roznásobením dostaneme <strong>všeobecný tvar</strong> $x^2 + y^2 + ax + by + c = 0$. Späť sa vrátime <strong>doplnením na štvorec</strong>, napr. $x^2 - 6x = (x - 3)^2 - 9$. Rovnica opisuje kružnicu iba vtedy, ak po úprave vyjde na pravej strane kladné číslo.</p>`,
      `<p><strong>Poloha bodu</strong> $X$: ak $|SX| &lt; r$, bod leží vnútri kružnice, ak $|SX| = r$, leží na kružnici, ak $|SX| &gt; r$, leží mimo nej. Stačí porovnať $(x - m)^2 + (y - n)^2$ s $r^2$.</p>
       <p><strong>Poloha priamky</strong> $ax + by + c = 0$: vypočítame vzdialenosť stredu od priamky $d = \\frac{|am + bn + c|}{\\sqrt{a^2 + b^2}}$. Ak $d &lt; r$, priamka je <strong>sečnica</strong> (dva spoločné body), ak $d = r$, <strong>dotyčnica</strong> (jeden bod), ak $d &gt; r$, <strong>nesečnica</strong>.</p>`
    ],
    examples: [
      { task: 'Urči stred a polomer kružnice $x^2 + y^2 - 4x + 6y - 12 = 0$.',
        steps: ['Doplníme na štvorce: $(x - 2)^2 - 4 + (y + 3)^2 - 9 - 12 = 0$.',
                '$(x - 2)^2 + (y + 3)^2 = 25$, teda $S[2; -3]$ a $r = 5$.'] },
      { task: 'Napíš rovnicu kružnice so stredom $S[-1; 2]$, ktorá prechádza bodom $A[2; 6]$.',
        steps: ['$r = |SA| = \\sqrt{3^2 + 4^2} = 5$.',
                '$(x + 1)^2 + (y - 2)^2 = 25$.'] }
    ]
  });

  gen('s3-kruznica', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const m = rnd(-6, 6), n = rnd(-6, 6), r = rnd(1, 9);
      return {
        type: 'tuple', signed: true, answer: [m, n, r], placeholder: 'm; n; r',
        q: `Urči stred $S[m; n]$ a polomer $r$ kružnice $${sqTex(m, 'x')} + ${sqTex(n, 'y')} = ${r * r}$. Zadaj v tvare „m; n; r“.`,
        solution: `Porovnáme so stredovým tvarom $(x - m)^2 + (y - n)^2 = r^2$: $m = ${m}$, $n = ${n}$ a $r = \\sqrt{${r * r}} = ${r}$.`,
        hint: 'V stredovom tvare sa súradnice stredu odčítajú: $(x + 3)^2 = (x - (-3))^2$, teda $m = -3$.'
      };
    }
    if (k === 1) {
      const m = rnd(-6, 6), n = rnd(-6, 6), r = rnd(1, 8), a = -2 * m, b = -2 * n, c = m * m + n * n - r * r;
      const sqx = m === 0 ? 'x^2' : `${sqTex(m, 'x')} - ${m * m}`, sqy = n === 0 ? 'y^2' : `${sqTex(n, 'y')} - ${n * n}`;
      return {
        type: 'tuple', signed: true, answer: [m, n, r], placeholder: 'm; n; r',
        q: `Urči stred $S[m; n]$ a polomer $r$ kružnice $x^2 + y^2${term(a, 'x')}${term(b, 'y')}${term(c)} = 0$. Zadaj v tvare „m; n; r“.`,
        solution: `Doplníme na štvorce: $${sqx} + ${sqy}${term(c)} = 0$, teda $${sqTex(m, 'x')} + ${sqTex(n, 'y')} = ${r * r}$. Stred $${pt('S', m, n)}$, polomer $r = ${r}$.`,
        hint: 'Členy s $x$ doplň na štvorec: $x^2 + ax = \\left(x + \\frac{a}{2}\\right)^2 - \\frac{a^2}{4}$, rovnako pre $y$.'
      };
    }
    if (k === 2) {
      const m = rnd(-5, 5), n = rnd(-5, 5);
      if (Math.random() < 0.5) {
        let dx, dy;
        do { dx = rnd(-5, 5); dy = rnd(-5, 5); } while (dx * dx + dy * dy < 2);
        const d2 = dx * dx + dy * dy, kind = pick(['vnútri kružnice', 'na kružnici', 'mimo kružnice']);
        const r2 = kind === 'na kružnici' ? d2 : kind === 'vnútri kružnice' ? d2 + rnd(1, 10) : d2 - rnd(1, d2 - 1);
        const x = m + dx, y = n + dy;
        return {
          type: 'choice', options: ['vnútri kružnice', 'na kružnici', 'mimo kružnice'], answer: kind,
          q: `Kde leží bod $${pt('X', x, y)}$ vzhľadom na kružnicu $${sqTex(m, 'x')} + ${sqTex(n, 'y')} = ${r2}$?`,
          solution: `Dosadíme: $(${x} ${m < 0 ? '+' : '-'} ${Math.abs(m)})^2 + (${y} ${n < 0 ? '+' : '-'} ${Math.abs(n)})^2 = ${dx * dx} + ${dy * dy} = ${d2}$, čo je ${d2 < r2 ? 'menej ako' : d2 === r2 ? 'presne' : 'viac ako'} $r^2 = ${r2}$. Bod leží ${kind}.`,
          hint: 'Dosaď súradnice bodu do ľavej strany rovnice a porovnaj výsledok s $r^2$.'
        };
      }
      const [a, b, h] = pick([[3, 4, 5], [4, -3, 5], [3, -4, 5], [0, 1, 1], [1, 0, 1], [5, 12, 13], [12, -5, 13]]);
      const r = rnd(2, 6), kind = pick(['sečnica', 'dotyčnica', 'nesečnica']);
      const d = kind === 'dotyčnica' ? r : kind === 'sečnica' ? rnd(0, r - 1) : r + rnd(1, 4);
      const c = pick([1, -1]) * d * h - (a * m + b * n), numv = a * m + b * n + c;
      return {
        type: 'choice', options: ['sečnica', 'dotyčnica', 'nesečnica'], answer: kind,
        q: `Urči vzájomnú polohu priamky $p\\colon ${genEq(a, b, c)}$ a kružnice $${sqTex(m, 'x')} + ${sqTex(n, 'y')} = ${r * r}$.`,
        solution: `Stred $${pt('S', m, n)}$, $r = ${r}$. Vzdialenosť stredu od priamky: $d = \\frac{|${a}\\cdot ${par(m)} + ${par(b)}\\cdot ${par(n)} + ${par(c)}|}{\\sqrt{${a * a} + ${b * b}}} = \\frac{${Math.abs(numv)}}{${h}} = ${d}$. Keďže $d ${d < r ? '&lt;' : d === r ? '=' : '&gt;'} r$, priamka je ${kind}.`,
        hint: 'Vypočítaj vzdialenosť stredu od priamky $d = \\frac{|am + bn + c|}{\\sqrt{a^2 + b^2}}$ a porovnaj ju s polomerom.'
      };
    }
    let i, j;
    do { i = rnd(-4, 4); j = rnd(-4, 4); } while (i === 0 && j === 0);
    const a1 = rnd(-6, 6), a2 = rnd(-6, 6), b1 = a1 + 2 * i, b2 = a2 + 2 * j, m = a1 + i, n = a2 + j, r2 = i * i + j * j;
    return {
      type: 'tuple', signed: true, answer: [m, n, r2], placeholder: 'm; n; r²',
      q: `Úsečka $AB$, kde $${pt('A', a1, a2)}$ a $${pt('B', b1, b2)}$, je priemerom kružnice. Napíš jej rovnicu v stredovom tvare $(x - m)^2 + (y - n)^2 = r^2$ a zadaj „m; n; r²“.`,
      solution: `Stred kružnice je stred úsečky: $${pt('S', m, n)}$. $r^2 = |SA|^2 = ${i * i} + ${j * j} = ${r2}$. Rovnica: $${sqTex(m, 'x')} + ${sqTex(n, 'y')} = ${r2}$.`,
      hint: 'Stred kružnice je stredom priemeru $AB$, polomer je polovica dĺžky $AB$ (alebo vzdialenosť $S$ od $A$).'
    };
  });

  /* ================= C. POSTUPNOSTI A FINANČNÁ MATEMATIKA ================= */

  lesson({
    id: 's3-postupnosti', order: 210, topics: ['postupnosti'], title: 'Postupnosti a aritmetická postupnosť',
    summary: 'Pojem postupnosti, vzorec pre n-tý člen, rekurentné zadanie, monotónnosť, aritmetická postupnosť a jej súčet.',
    theory: [
      `<p><strong>Postupnosť</strong> je funkcia, ktorej definičným oborom je množina prirodzených čísel $\\mathbb{N}$ (pri konečnej postupnosti množina $\\{1, 2, \\dots, k\\}$). Hodnotu v čísle $n$ označujeme $a_n$ a nazývame <strong>$n$-tý člen</strong>, celú postupnosť zapisujeme $(a_n)_{n=1}^{\\infty}$.</p>
       <p>Postupnosť môžeme zadať <strong>vzorcom pre $n$-tý člen</strong> (napr. $a_n = 2n + 1$) alebo <strong>rekurentne</strong> – prvým členom a pravidlom, ako z predchádzajúceho člena vypočítať nasledujúci (napr. $a_1 = 3$, $a_{n+1} = 2a_n - 1$).</p>
       <p>Postupnosť je <strong>rastúca</strong>, ak $a_{n+1} &gt; a_n$ pre všetky $n$, a <strong>klesajúca</strong>, ak $a_{n+1} &lt; a_n$ pre všetky $n$. Zvyčajne skúmame znamienko rozdielu $a_{n+1} - a_n$.</p>`,
      `<p><strong>Aritmetická postupnosť</strong> má stálu <strong>diferenciu</strong> $d$: $a_{n+1} = a_n + d$. Potom</p>
       $$a_n = a_1 + (n - 1)d, \\qquad a_r = a_s + (r - s)d.$$
       <p>Pre $d &gt; 0$ je rastúca, pre $d &lt; 0$ klesajúca. Každý člen (okrem prvého) je aritmetickým priemerom susedných členov.</p>`,
      { fig: 's3-postupnosti', caption: 'Prvých osem členov aritmetickej a geometrickej postupnosti s rovnakým prvým členom. Aritmetická rastie (alebo klesá) rovnomerne – stĺpce tvoria „schody“ rovnakej výšky.' },
      `<p><strong>Súčet prvých $n$ členov</strong> aritmetickej postupnosti: $s_n = \\frac{n}{2}(a_1 + a_n)$. Prvý a posledný, druhý a predposledný člen atď. majú rovnaký súčet a takých dvojíc je $\\frac{n}{2}$.</p>`
    ],
    examples: [
      { task: 'V aritmetickej postupnosti je $a_3 = 7$ a $a_8 = 22$. Urči $a_1$, $d$ a $a_{20}$.',
        steps: ['$a_8 - a_3 = 5d$, teda $5d = 15$ a $d = 3$.',
                '$a_1 = a_3 - 2d = 7 - 6 = 1$.',
                '$a_{20} = a_1 + 19d = 1 + 57 = 58$.'] },
      { task: 'Vypočítaj súčet všetkých dvojciferných čísel deliteľných siedmimi.',
        steps: ['Sú to čísla $14;\\ 21;\\ \\dots;\\ 98$ – aritmetická postupnosť s $a_1 = 14$, $d = 7$.',
                'Z $98 = 14 + (n - 1)\\cdot 7$ dostaneme $n = 13$.',
                '$s_{13} = \\frac{13}{2}(14 + 98) = 13\\cdot 56 = 728$.'] }
    ]
  });

  const MONO = [
    ['a_n = \\frac{1}{n}', 'klesajúca', '$a_{n+1} - a_n = \\frac{1}{n+1} - \\frac{1}{n} = -\\frac{1}{n(n+1)} &lt; 0$.'],
    ['a_n = \\frac{n}{n + 1}', 'rastúca', '$a_{n+1} - a_n = \\frac{n+1}{n+2} - \\frac{n}{n+1} = \\frac{1}{(n+1)(n+2)} &gt; 0$.'],
    ['a_n = (-1)^n\\cdot n', 'ani rastúca, ani klesajúca', '$a_1 = -1$, $a_2 = 2$, $a_3 = -3$ – členy striedajú znamienko, raz rastú, raz klesajú.'],
    ['a_n = n^2 - 5n', 'ani rastúca, ani klesajúca', '$a_1 = -4$, $a_2 = -6$, $a_3 = -6$, $a_4 = -4$ – postupnosť najprv klesá, potom rastie.'],
    ['a_n = 3\\cdot 2^n', 'rastúca', '$a_{n+1} = 2a_n &gt; a_n$, lebo všetky členy sú kladné.'],
    ['a_n = \\left(\\frac{1}{2}\\right)^n', 'klesajúca', '$a_{n+1} = \\frac{1}{2}a_n &lt; a_n$, lebo všetky členy sú kladné.'],
    ['a_n = (-2)^n', 'ani rastúca, ani klesajúca', '$a_1 = -2$, $a_2 = 4$, $a_3 = -8$ – členy striedajú znamienko.'],
    ['a_n = n^2 + n', 'rastúca', '$a_{n+1} - a_n = (n+1)^2 + (n+1) - n^2 - n = 2n + 2 &gt; 0$.'],
    ['a_n = \\frac{2n + 3}{n}', 'klesajúca', '$a_n = 2 + \\frac{3}{n}$ a zlomok $\\frac{3}{n}$ s rastúcim $n$ klesá.']
  ];
  const MONO_OPT = ['rastúca', 'klesajúca', 'ani rastúca, ani klesajúca'];

  gen('s3-postupnosti', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const t = rnd(0, 2);
      if (t === 0) {
        const p = nz(-3, 3), q = rnd(-5, 5), r = rnd(-6, 6), n = rnd(2, 10), val = p * n * n + q * n + r;
        const sub = `${p}\\cdot ${n}^2${q ? ` ${q < 0 ? '-' : '+'} ${Math.abs(q)}\\cdot ${n}` : ''}${r ? ` ${r < 0 ? '-' : '+'} ${Math.abs(r)}` : ''}`;
        return {
          signed: true, answer: val,
          q: `Postupnosť je daná vzorcom $a_n = ${lin([[p, 'n^2'], [q, 'n'], [r, '']])}$. Vypočítaj $a_{${n}}$.`,
          solution: `Dosadíme $n = ${n}$: $a_{${n}} = ${sub} = ${val}$.`,
          hint: 'Do vzorca dosaď za $n$ poradové číslo člena.'
        };
      }
      if (t === 1) {
        const p = rnd(1, 5), q = rnd(-6, 6), r = rnd(0, 5), n = rnd(2, 9);
        return {
          signed: true, answer: (p * n + q) / (n + r), show: fTxt(p * n + q, n + r),
          q: `Postupnosť je daná vzorcom $a_n = \\frac{${lin([[p, 'n'], [q, '']])}}{${lin([[1, 'n'], [r, '']])}}$. Vypočítaj $a_{${n}}$ (zlomok zadaj v tvare 7/4).`,
          solution: `$a_{${n}} = \\frac{${p}\\cdot ${n}${term(q)}}{${n}${term(r)}} = \\frac{${p * n + q}}{${n + r}}${gcd(p * n + q, n + r) > 1 ? ` = ${fTex(p * n + q, n + r)}` : ''}$.`,
          hint: 'Dosaď za $n$ a zlomok podľa možnosti skráť.'
        };
      }
      const a1 = rnd(-3, 4), m = pick([2, -1, 3, -2]), c = rnd(-4, 4), n = rnd(4, 5);
      const seq = [a1];
      for (let i = 1; i < n; i++) seq.push(m * seq[i - 1] + c);
      return {
        signed: true, answer: seq[n - 1],
        q: `Postupnosť je daná rekurentne: $a_1 = ${a1}$, $a_{n+1} = ${lin([[m, 'a_n'], [c, '']])}$. Vypočítaj $a_{${n}}$.`,
        solution: seq.slice(1).map((v, i) => `$a_{${i + 2}} = ${m}\\cdot ${par(seq[i])}${term(c)} = ${v}$`).join(', ') + '.',
        hint: 'Počítaj postupne člen za členom: z $a_1$ vypočítaj $a_2$, z neho $a_3$ atď.'
      };
    }
    if (k === 1) {
      const a1 = rnd(-10, 10), d = nz(-6, 6), r = rnd(2, 6), s = r + rnd(2, 8);
      const ar = a1 + (r - 1) * d, as = a1 + (s - 1) * d;
      return {
        type: 'tuple', signed: true, answer: [a1, d], placeholder: 'a₁; d',
        q: `V aritmetickej postupnosti je $a_{${r}} = ${ar}$ a $a_{${s}} = ${as}$. Urči prvý člen $a_1$ a diferenciu $d$, zadaj „a₁; d“.`,
        solution: `$a_{${s}} - a_{${r}} = ${s - r}d$, teda $${s - r}d = ${as - ar}$ a $d = ${d}$. $a_1 = a_{${r}} - ${r === 2 ? '' : r - 1}d = ${ar} - ${par((r - 1) * d)} = ${a1}$.`,
        hint: 'Rozdiel dvoch členov je násobok diferencie: $a_s - a_r = (s - r)d$.'
      };
    }
    if (k === 2) {
      if (Math.random() < 0.5) {
        const a1 = rnd(-10, 10), d = nz(-5, 5), n = rnd(8, 30), an = a1 + (n - 1) * d, sn = n * (a1 + an) / 2;
        return {
          signed: true, answer: sn,
          q: `Aritmetická postupnosť má $a_1 = ${a1}$ a $d = ${d}$. Vypočítaj súčet jej prvých ${n} členov.`,
          solution: `$a_{${n}} = a_1 + ${n - 1}d = ${a1} + ${n - 1}\\cdot ${par(d)} = ${an}$, $s_{${n}} = \\frac{${n}}{2}(${a1} + ${par(an)}) = ${sn}$.`,
          hint: 'Najprv vypočítaj posledný sčítaný člen $a_n = a_1 + (n-1)d$, potom $s_n = \\frac{n}{2}(a_1 + a_n)$.'
        };
      }
      const three = Math.random() < 0.4, m = three ? rnd(7, 25) : rnd(3, 12);
      const lo = three ? 100 : 10, hi = three ? 999 : 99;
      const first = Math.ceil(lo / m) * m, last = Math.floor(hi / m) * m, n = (last - first) / m + 1, sn = n * (first + last) / 2;
      return {
        answer: sn,
        q: `Vypočítaj súčet všetkých ${three ? 'trojciferných' : 'dvojciferných'} prirodzených čísel deliteľných číslom ${m}.`,
        solution: `Sú to čísla $${first};\\ ${first + m};\\ \\dots;\\ ${last}$ – aritmetická postupnosť s $a_1 = ${first}$ a $d = ${m}$. Z $${last} = ${first} + (n - 1)\\cdot ${m}$ dostaneme $n = ${n}$. $s_{${n}} = \\frac{${n}}{2}(${first} + ${last}) = ${sn}$.`,
        hint: 'Nájdi najmenší a najväčší taký násobok, urči počet členov a použi $s_n = \\frac{n}{2}(a_1 + a_n)$.'
      };
    }
    if (Math.random() < 0.4) {
      const p = nz(-5, 5), q = rnd(-9, 9), ans = p > 0 ? 'rastúca' : 'klesajúca';
      return {
        type: 'choice', options: MONO_OPT, answer: ans,
        q: `Rozhodni, či je postupnosť $(a_n)_{n=1}^{\\infty}$, kde $a_n = ${lin([[p, 'n'], [q, '']])}$, rastúca, klesajúca, alebo ani rastúca, ani klesajúca.`,
        solution: `$a_{n+1} - a_n = ${p}$, čo je ${p > 0 ? 'kladné' : 'záporné'} číslo. Postupnosť je ${ans} (je to aritmetická postupnosť s diferenciou $${p}$).`,
        hint: 'Vypočítaj rozdiel $a_{n+1} - a_n$ a zisti jeho znamienko.'
      };
    }
    const [tex, ans, why] = pick(MONO);
    return {
      type: 'choice', options: MONO_OPT, answer: ans,
      q: `Rozhodni, či je postupnosť $(a_n)_{n=1}^{\\infty}$, kde $${tex}$, rastúca, klesajúca, alebo ani rastúca, ani klesajúca.`,
      solution: `${why} Postupnosť ${ans.startsWith('ani') ? 'nie je ani rastúca, ani klesajúca' : `je ${ans}`}.`,
      hint: 'Vypíš niekoľko prvých členov a potom skús zistiť znamienko rozdielu $a_{n+1} - a_n$ (alebo porovnaj podiel $\\frac{a_{n+1}}{a_n}$ s jednotkou).'
    };
  });

  lesson({
    id: 's3-geometricka', order: 220, topics: ['postupnosti'], title: 'Geometrická postupnosť',
    summary: 'Kvocient, vzorec pre n-tý člen, súčet prvých n členov a geometrický rast v praxi.',
    theory: [
      `<p><strong>Geometrická postupnosť</strong> má stály <strong>kvocient</strong> $q$: $a_{n+1} = a_n\\cdot q$ (pričom $a_1 \\neq 0$, $q \\neq 0$). Potom</p>
       $$a_n = a_1\\cdot q^{n-1}, \\qquad a_r = a_s\\cdot q^{r-s}.$$
       <p>Pre $a_1 &gt; 0$ je pri $q &gt; 1$ rastúca, pri $0 &lt; q &lt; 1$ klesajúca a pri $q &lt; 0$ striedajú členy znamienka (nie je ani rastúca, ani klesajúca).</p>`,
      { fig: 's3-postupnosti', caption: 'Pri kvociente $q &gt; 1$ geometrická postupnosť skôr či neskôr predbehne každú aritmetickú – rastie „exponenciálne“.' },
      `<p><strong>Súčet prvých $n$ členov:</strong></p>
       $$s_n = a_1\\cdot\\frac{q^n - 1}{q - 1} \\quad (q \\neq 1), \\qquad s_n = n\\cdot a_1 \\quad (q = 1).$$
       <p>Vzorec dostaneme, ak od $q\\cdot s_n$ odčítame $s_n$ – takmer všetky členy sa odčítajú.</p>
       <p><strong>V praxi:</strong> ak veličina rastie každý rok o $p\\,\\%$, jej hodnoty tvoria geometrickú postupnosť s kvocientom $q = 1 + \\frac{p}{100}$; pri poklese o $p\\,\\%$ je $q = 1 - \\frac{p}{100}$.</p>`
    ],
    examples: [
      { task: 'V geometrickej postupnosti je $a_2 = 6$ a $a_5 = 162$. Urči $a_1$, $q$ a $s_5$.',
        steps: ['$a_5 = a_2\\cdot q^3$, teda $q^3 = 27$ a $q = 3$.',
                '$a_1 = \\frac{a_2}{q} = 2$.',
                '$s_5 = 2\\cdot\\frac{3^5 - 1}{3 - 1} = 2\\cdot\\frac{242}{2} = 242$.'] },
      { task: 'Mesto má 20 000 obyvateľov a počet obyvateľov každý rok vzrastie o 2 %. Koľko obyvateľov bude mať o 10 rokov?',
        steps: ['Počty obyvateľov tvoria geometrickú postupnosť s $q = 1{,}02$.',
                'O 10 rokov: $20\\,000\\cdot 1{,}02^{10} \\approx 20\\,000\\cdot 1{,}219 \\approx 24\\,380$ obyvateľov.'] }
    ]
  });

  const qTex = (qn, qd) => (qd === 1 && qn > 0 ? String(qn) : `\\left(${fTex(qn, qd)}\\right)`);

  gen('s3-geometricka', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const [qn, qd] = pick([[2, 1], [3, 1], [-2, 1], [-3, 1], [1, 2], [-1, 2], [1, 3], [3, 2]]);
      const n = Math.abs(qn) === 3 ? rnd(3, 5) : rnd(3, 7), a1 = nz(-5, 5);
      const P = a1 * Math.pow(qn, n - 1), Q = Math.pow(qd, n - 1);
      return {
        signed: true, answer: P / Q, show: fTxt(P, Q),
        q: `Geometrická postupnosť má $a_1 = ${a1}$ a kvocient $q = ${fTex(qn, qd)}$. Vypočítaj $a_{${n}}$${qd > 1 ? ' (zlomok zadaj v tvare 3/8)' : ''}.`,
        solution: `$a_{${n}} = a_1\\cdot q^{${n - 1}} = ${a1}\\cdot ${qTex(qn, qd)}^{${n - 1}} = ${a1}\\cdot ${fPar(Math.pow(qn, n - 1), Q)} = ${fTex(P, Q)}$.`,
        hint: 'Použi $a_n = a_1\\cdot q^{n-1}$. Pozor na znamienko pri zápornom kvociente.'
      };
    }
    if (k === 1) {
      const q = pick([2, 3, -2, -3]), a1 = nz(-4, 4), r = rnd(2, 3), s = r + 3;
      const ar = a1 * Math.pow(q, r - 1), as = a1 * Math.pow(q, s - 1);
      return {
        type: 'tuple', signed: true, answer: [a1, q], placeholder: 'a₁; q',
        q: `V geometrickej postupnosti je $a_{${r}} = ${ar}$ a $a_{${s}} = ${as}$. Urči prvý člen $a_1$ a kvocient $q$, zadaj „a₁; q“.`,
        solution: `$a_{${s}} = a_{${r}}\\cdot q^3$, teda $q^3 = \\frac{${as}}{${ar}} = ${q * q * q}$ a $q = ${q}$. $a_1 = \\frac{a_{${r}}}{q^{${r - 1}}} = \\frac{${ar}}{${Math.pow(q, r - 1)}} = ${a1}$.`,
        hint: 'Podiel dvoch členov je mocnina kvocientu: $\\frac{a_s}{a_r} = q^{s-r}$.'
      };
    }
    if (k === 2) {
      const [qn, qd] = pick([[2, 1], [3, 1], [-2, 1], [-3, 1], [1, 2], [3, 2]]);
      const n = Math.abs(qn) === 3 ? rnd(4, 6) : rnd(4, 8), a1 = nz(-5, 5);
      const P = a1 * (Math.pow(qn, n) - Math.pow(qd, n)), Q = Math.pow(qd, n - 1) * (qn - qd);
      const qs = fTex(qn, qd);
      return {
        signed: true, answer: P / Q, show: fTxt(P, Q),
        q: `Geometrická postupnosť má $a_1 = ${a1}$ a $q = ${qs}$. Vypočítaj súčet jej prvých ${n} členov${qd > 1 ? ' (zlomok zadaj v tvare p/q)' : ''}.`,
        solution: `$s_{${n}} = a_1\\cdot\\frac{q^{${n}} - 1}{q - 1} = ${a1}\\cdot\\frac{${fPar(Math.pow(qn, n), Math.pow(qd, n))} - 1}{${qs} - 1} = ${fTex(P, Q)}$.`,
        hint: 'Použi $s_n = a_1\\cdot\\frac{q^n - 1}{q - 1}$.'
      };
    }
    if (Math.random() < 0.45) {
      const up = Math.random() < 0.5;
      if (up) {
        const N = 1000 * rnd(5, 80), p = pick([1, 1.5, 2, 2.5, 3, 4]), n = rnd(3, 15), res = N * Math.pow(1 + p / 100, n);
        return {
          answer: res, tol: 0.51,
          q: `Obec má ${N} obyvateľov a ich počet každý rok vzrastie o $${dc(p)}\\,\\%$. Koľko obyvateľov bude mať o ${n} ${pl(n, ['rok', 'roky', 'rokov'])}? Výsledok zaokrúhli na celé číslo.`,
          solution: `Počty obyvateľov tvoria geometrickú postupnosť s $q = 1 + \\frac{${dc(p)}}{100} = ${dcx(1 + p / 100)}$. O ${n} ${pl(n, ['rok', 'roky', 'rokov'])}: $${eur(N, 0)}\\cdot ${dcx(1 + p / 100)}^{${n}} \\approx ${eur(Math.round(res), 0)}$.`,
          hint: 'Každý rok sa počet vynásobí číslom $1 + \\frac{p}{100}$; po $n$ rokoch teda číslom $\\left(1 + \\frac{p}{100}\\right)^n$.'
        };
      }
      const V0 = 1000 * rnd(8, 40), p = pick([8, 10, 12, 15, 20]), n = rnd(2, 8), res = V0 * Math.pow(1 - p / 100, n);
      return {
        answer: res, tol: 0.51,
        q: `Auto v hodnote $${eur(V0, 0)}$ € stráca každý rok $${p}\\,\\%$ svojej hodnoty z predchádzajúceho roka. Akú hodnotu bude mať o ${n} ${pl(n, ['rok', 'roky', 'rokov'])}? Výsledok zaokrúhli na celé eurá.`,
        solution: `Hodnoty tvoria geometrickú postupnosť s $q = 1 - \\frac{${p}}{100} = ${dcx(1 - p / 100)}$. Po ${n} ${pl(n, ['roku', 'rokoch', 'rokoch'])}: $${eur(V0, 0)}\\cdot ${dcx(1 - p / 100)}^{${n}} \\approx ${eur(Math.round(res), 0)}$ €.`,
        hint: 'Pokles o $p\\,\\%$ znamená každý rok vynásobiť hodnotu číslom $1 - \\frac{p}{100}$.'
      };
    }
    const kind = pick(['aritmetická', 'geometrická', 'ani aritmetická, ani geometrická']);
    let terms, why;
    if (kind === 'aritmetická') {
      const a1 = rnd(-10, 10), d = nz(-6, 6);
      terms = [0, 1, 2, 3, 4].map((i) => String(a1 + i * d));
      why = `Rozdiel každých dvoch susedných členov je rovnaký: $d = ${d}$.`;
    } else if (kind === 'geometrická') {
      const [qn, qd] = pick([[2, 1], [3, 1], [-2, 1], [-3, 1], [1, 2], [-1, 2]]);
      const a1 = nz(-3, 3) * (qd === 2 ? 16 : 1);
      terms = [0, 1, 2, 3, 4].map((i) => fTex(a1 * Math.pow(qn, i), Math.pow(qd, i)));
      why = `Podiel každých dvoch susedných členov je rovnaký: $q = ${fTex(qn, qd)}$.`;
    } else {
      const t = rnd(0, 3);
      if (t === 0) { const c = rnd(-3, 3); terms = [1, 2, 3, 4, 5].map((n) => String(n * n + c)); }
      else if (t === 1) { const a = rnd(1, 4); terms = [0, 1, 2, 3, 4].map((i) => String(a + i * (i + 1) / 2)); }
      else if (t === 2) { const f = [rnd(1, 3), rnd(2, 4)]; for (let i = 2; i < 5; i++) f.push(f[i - 1] + f[i - 2]); terms = f.map(String); }
      else { terms = [1, 2, 3, 4, 5].map((n) => String(n * n * n)); }
      const nums = terms.map(Number);
      why = `Rozdiely susedných členov $${nums.slice(1).map((x, i) => x - nums[i]).join(';\\ ')}$ nie sú rovnaké a ani podiely $\\frac{${nums[1]}}{${nums[0]}}$, $\\frac{${nums[2]}}{${nums[1]}}$ sa nerovnajú.`;
    }
    return {
      type: 'choice', options: ['aritmetická', 'geometrická', 'ani aritmetická, ani geometrická'], answer: kind,
      q: `Postupnosť začína členmi $${terms.join(';\\ ')};\\ \\dots$ Je aritmetická, geometrická, alebo ani jedna?`,
      solution: `${why} Postupnosť ${kind.startsWith('ani') ? 'nie je ani aritmetická, ani geometrická' : `je ${kind}`}.`,
      hint: 'Vypočítaj rozdiely susedných členov (aritmetická: stále rovnaké) a ich podiely (geometrická: stále rovnaké).'
    };
  });

  lesson({
    id: 's3-financna', order: 230, topics: ['financna', 'postupnosti'], title: 'Úrokovanie, sporenie a úvery',
    summary: 'Jednoduché a zložené úrokovanie, daň z úrokov, pravidelné vklady a anuitné splácanie úveru.',
    theory: [
      `<p><strong>Pojmy:</strong> istina $K_0$ (vložená alebo požičaná suma), úroková miera $p\\,\\%$ p. a. (za rok), úrok (odmena za požičanie peňazí), úrokovacie obdobie (po ňom sa úrok pripisuje).</p>
       <p><strong>Jednoduché úrokovanie:</strong> úrok sa počíta stále len z počiatočnej istiny, za $n$ rokov je $K_n = K_0\\left(1 + n\\cdot\\frac{p}{100}\\right)$ – hodnoty tvoria aritmetickú postupnosť. Za časť roka (napr. $m$ mesiacov) je úrok $K_0\\cdot\\frac{p}{100}\\cdot\\frac{m}{12}$.</p>
       <p><strong>Zložené úrokovanie:</strong> pripísaný úrok sa ďalej úročí, $K_n = K_0\\left(1 + \\frac{p}{100}\\right)^n$ – geometrická postupnosť. Ak sa úrok pripisuje $m$-krát ročne, je $K_n = K_0\\left(1 + \\frac{p}{100m}\\right)^{mn}$. Na Slovensku sa z úrokov platí daň $19\\,\\%$, skutočne sa teda pripisuje len $81\\,\\%$ úroku: počítame s mierou $0{,}81\\cdot p\\,\\%$.</p>`,
      { fig: 's3-urok', caption: 'Vklad 1000 € pri jednoduchom (čiara) a zloženom (stĺpce) úrokovaní. Pri dlhšej dobe a vyššej miere je rozdiel výrazný.' },
      `<p><strong>Pravidelné sporenie.</strong> Ak na konci každého roka vložíme sumu $a$ a úročí sa mierou $p\\,\\%$, po $n$ rokoch máme (súčet geometrickej postupnosti, $q = 1 + \\frac{p}{100}$):</p>
       $$S_n = a + aq + aq^2 + \\dots + aq^{n-1} = a\\cdot\\frac{q^n - 1}{q - 1}.$$
       <p>Ak vkladáme na začiatku roka, každý vklad sa úročí o rok dlhšie: $S_n = aq\\cdot\\frac{q^n - 1}{q - 1}$.</p>`,
      `<p><strong>Úver splácaný anuitne</strong> (rovnakými mesačnými splátkami). Dlh $D$, ročná úroková miera $p\\,\\%$, teda mesačný kvocient $q = 1 + \\frac{p}{1200}$, počet splátok $n$. Po zaplatení poslednej splátky má byť dlh nulový: $Dq^n - a\\cdot\\frac{q^n - 1}{q - 1} = 0$, odkiaľ výška splátky (anuity) je</p>
       $$a = D\\cdot\\frac{q^n(q - 1)}{q^n - 1}.$$
       <p>Spolu zaplatíme $n\\cdot a$; rozdiel $n\\cdot a - D$ je preplatok (zaplatené úroky).</p>`
    ],
    examples: [
      { task: 'Vklad 2 000 € je uložený na 4 roky pri úrokovej miere 3 % p. a. Porovnaj jednoduché a zložené úrokovanie (bez dane).',
        steps: ['Jednoduché: $K_4 = 2000\\cdot(1 + 4\\cdot 0{,}03) = 2000\\cdot 1{,}12 = 2240$ €.',
                'Zložené: $K_4 = 2000\\cdot 1{,}03^4 \\approx 2000\\cdot 1{,}125509 \\approx 2251{,}02$ €.'] },
      { task: 'Úver 10 000 € pri úrokovej miere 6 % p. a. splácame 2 roky rovnakými mesačnými splátkami. Aká je splátka a koľko spolu preplatíme?',
        steps: ['Mesačne $\\frac{6}{12} = 0{,}5\\,\\%$, teda $q = 1{,}005$, počet splátok $n = 24$.',
                '$a = 10\\,000\\cdot\\frac{1{,}005^{24}\\cdot 0{,}005}{1{,}005^{24} - 1} \\approx 10\\,000\\cdot\\frac{1{,}127160\\cdot 0{,}005}{0{,}127160} \\approx 443{,}21$ €.',
                'Spolu zaplatíme $24\\cdot 443{,}21 = 10\\,637{,}04$ €, preplatok je $637{,}04$ €.'] }
    ]
  });

  gen('s3-financna', () => {
    const k = rnd(0, 3);
    const cents = 'Výsledok zaokrúhli na centy.';
    if (k === 0) {
      const K0 = 100 * rnd(10, 300), p = pick([1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]);
      if (Math.random() < 0.5) {
        const n = rnd(2, 6), K = K0 * (1 + n * p / 100);
        return {
          answer: K, tol: 0.011,
          q: `Na účet s jednoduchým úrokovaním a úrokovou mierou $${dc(p)}\\,\\%$ p. a. vložíme $${eur(K0, 0)}$ €. Aká suma bude na účte po ${n} rokoch (bez dane)? ${cents}`,
          solution: `$K_{${n}} = K_0\\left(1 + n\\cdot\\frac{p}{100}\\right) = ${eur(K0, 0)}\\cdot\\left(1 + ${n}\\cdot ${dcx(p / 100)}\\right) = ${eur(K0, 0)}\\cdot ${dcx(1 + n * p / 100)} = ${eur(K)}$ €.`,
          hint: 'Pri jednoduchom úrokovaní je úrok každý rok rovnaký: $K_0\\cdot\\frac{p}{100}$.'
        };
      }
      const m = pick([3, 4, 6, 8, 9]), u = K0 * p / 100 * m / 12;
      return {
        answer: u, tol: 0.011,
        q: `Akú veľkosť bude mať úrok z vkladu $${eur(K0, 0)}$ € uloženého na ${m} ${pl(m, MESIAC)} pri úrokovej miere $${dc(p)}\\,\\%$ p. a. (jednoduché úrokovanie, bez dane)? ${cents}`,
        solution: `Ročný úrok by bol $${eur(K0, 0)}\\cdot ${dcx(p / 100)} = ${eur(K0 * p / 100)}$ €, za ${m} ${pl(m, MESIAC)} je to $\\frac{${m}}{12}$ z neho: $${eur(K0 * p / 100)}\\cdot\\frac{${m}}{12} = ${eur(u)}$ €.`,
        hint: 'Úrok za $m$ mesiacov je $K_0\\cdot\\frac{p}{100}\\cdot\\frac{m}{12}$.'
      };
    }
    if (k === 1) {
      const K0 = 500 * rnd(1, 40), p = pick([1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6]);
      const t = rnd(0, 3);
      if (t === 0) {
        const n = rnd(2, 15), q = 1 + p / 100, K = K0 * Math.pow(q, n);
        return {
          answer: K, tol: 0.02,
          q: `Vklad $${eur(K0, 0)}$ € je uložený na ${n} ${pl(n, ROK)} pri zloženom úrokovaní s ročným pripisovaním úrokov a mierou $${dc(p)}\\,\\%$ p. a. Akú sumu budeme mať na konci (bez dane)? ${cents}`,
          solution: `$K_{${n}} = K_0\\cdot q^{${n}} = ${eur(K0, 0)}\\cdot ${dcx(q)}^{${n}} \\approx ${eur(K)}$ €.`,
          hint: 'Pri zloženom úrokovaní sa suma každý rok vynásobí číslom $q = 1 + \\frac{p}{100}$.'
        };
      }
      if (t === 1) {
        const n = rnd(2, 10), pe = 0.81 * p, q = 1 + pe / 100, K = K0 * Math.pow(q, n);
        return {
          answer: K, tol: 0.02,
          q: `Vklad $${eur(K0, 0)}$ € je uložený na ${n} ${pl(n, ROK)} pri zloženom úrokovaní s mierou $${dc(p)}\\,\\%$ p. a. Úroky sa pripisujú raz ročne a zdaňujú sa daňou $19\\,\\%$. Akú sumu budeme mať na konci? ${cents}`,
          solution: `Po zdanení sa pripisuje $81\\,\\%$ úroku, skutočná miera je $0{,}81\\cdot ${dc(p)} = ${dcx(pe)}\\,\\%$. $K_{${n}} = ${eur(K0, 0)}\\cdot ${dcx(q)}^{${n}} \\approx ${eur(K)}$ €.`,
          hint: 'Daň $19\\,\\%$ zníži úrokovú mieru na $0{,}81\\cdot p\\,\\%$; potom počítaj ako pri zloženom úrokovaní.'
        };
      }
      if (t === 2) {
        const n = rnd(1, 5), q = 1 + p / 1200, K = K0 * Math.pow(q, 12 * n);
        return {
          answer: K, tol: 0.02,
          q: `Vklad $${eur(K0, 0)}$ € je uložený na ${n} ${pl(n, ['rok', 'roky', 'rokov'])} pri úrokovej miere $${dc(p)}\\,\\%$ p. a., úroky sa pripisujú mesačne (bez dane). Akú sumu budeme mať na konci? ${cents}`,
          solution: `Mesačná miera je $\\frac{${dc(p)}}{12}\\,\\%$, počet období $12\\cdot ${n} = ${12 * n}$. $K = ${eur(K0, 0)}\\cdot\\left(1 + \\frac{${dc(p)}}{1200}\\right)^{${12 * n}} \\approx ${eur(K)}$ €.`,
          hint: 'Pri $m$ pripisovaniach ročne: $K_n = K_0\\left(1 + \\frac{p}{100m}\\right)^{mn}$.'
        };
      }
      const pp = pick([2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8]), q = 1 + pp / 100, x = Math.log(2) / Math.log(q);
      const n = Math.ceil(x - 1e-9);
      return {
        answer: n,
        q: `Najmenej koľko celých rokov musí byť vklad uložený pri zloženom úrokovaní s mierou $${dc(pp)}\\,\\%$ p. a. (ročné pripisovanie, bez dane), aby sa zdvojnásobil?`,
        solution: `Hľadáme najmenšie $n$, pre ktoré $${dcx(q)}^n \\ge 2$. Logaritmovaním: $n \\ge \\frac{\\log 2}{\\log ${dcx(q)}} \\approx ${fx(x)}$, teda $n = ${n}$.`,
        hint: 'Rieš nerovnicu $q^n \\ge 2$ logaritmovaním: $n \\ge \\frac{\\log 2}{\\log q}$.'
      };
    }
    if (k === 2) {
      const a = 100 * rnd(1, 30), p = pick([1, 1.5, 2, 2.5, 3, 3.5, 4, 5]), n = rnd(3, 20), q = 1 + p / 100;
      const begin = Math.random() < 0.4, S = a * (begin ? q : 1) * (Math.pow(q, n) - 1) / (q - 1);
      return {
        answer: S, tol: 0.02,
        q: `Sporiteľ vkladá na ${begin ? 'začiatku' : 'konci'} každého roka $${eur(a, 0)}$ € na účet so zloženým úrokovaním a mierou $${dc(p)}\\,\\%$ p. a. (bez dane). Koľko bude mať na účte na konci ${n}. roka? ${cents}`,
        solution: `$q = ${dcx(q)}$. ${begin ? 'Každý vklad sa úročí o rok dlhšie, preto ' : ''}$S_{${n}} = ${eur(a, 0)}${begin ? `\\cdot ${dcx(q)}` : ''}\\cdot\\frac{${dcx(q)}^{${n}} - 1}{${dcx(q)} - 1} \\approx ${eur(S)}$ €.`,
        hint: begin
          ? 'Vklady na začiatku roka: $S_n = aq\\cdot\\frac{q^n - 1}{q - 1}$, kde $q = 1 + \\frac{p}{100}$.'
          : 'Posledný vklad sa neúročí, predposledný raz, … prvý $(n-1)$-krát. Sčítaj geometrickú postupnosť: $S_n = a\\cdot\\frac{q^n - 1}{q - 1}$.'
      };
    }
    const D = 1000 * rnd(3, 40), p = pick([3, 3.5, 4, 4.5, 5, 5.5, 6, 7, 8, 9]), y = rnd(1, 10), n = 12 * y, q = 1 + p / 1200;
    const a = D * Math.pow(q, n) * (q - 1) / (Math.pow(q, n) - 1);
    const qq = String(parseFloat(q.toFixed(8))).replace('.', '{,}');
    if (Math.random() < 0.6) {
      return {
        answer: a, tol: 0.02,
        q: `Úver $${eur(D, 0)}$ € s úrokovou mierou $${dc(p)}\\,\\%$ p. a. splácame ${y} ${pl(y, ['rok', 'roky', 'rokov'])} rovnakými mesačnými splátkami (prvá splátka mesiac po poskytnutí úveru). Aká je výška mesačnej splátky? ${cents}`,
        solution: `$q = 1 + \\frac{${dc(p)}}{1200} \\approx ${qq}$, $n = ${n}$. $a = D\\cdot\\frac{q^n(q - 1)}{q^n - 1} = ${eur(D, 0)}\\cdot\\frac{q^{${n}}(q - 1)}{q^{${n}} - 1} \\approx ${eur(a)}$ €.`,
        hint: 'Použi vzorec pre anuitu $a = D\\cdot\\frac{q^n(q - 1)}{q^n - 1}$ s mesačným kvocientom $q = 1 + \\frac{p}{1200}$ a počtom splátok $n$. Medzivýsledky nezaokrúhľuj.'
      };
    }
    const ar = Math.round(a * 100) / 100, over = n * ar - D;
    return {
      answer: over, tol: 0.02,
      q: `Úver $${eur(D, 0)}$ € s úrokovou mierou $${dc(p)}\\,\\%$ p. a. splácame ${y} ${pl(y, ['rok', 'roky', 'rokov'])} rovnakými mesačnými splátkami. Splátku zaokrúhli na centy a vypočítaj, koľko eur spolu preplatíme oproti požičanej sume.`,
      solution: `$q = 1 + \\frac{${dc(p)}}{1200}$, $n = ${n}$, splátka $a = ${eur(D, 0)}\\cdot\\frac{q^{${n}}(q - 1)}{q^{${n}} - 1} \\approx ${eur(ar)}$ €. Spolu zaplatíme $${n}\\cdot ${eur(ar)} = ${eur(n * ar)}$ €, preplatok je $${eur(n * ar)} - ${eur(D, 0)} = ${eur(over)}$ €.`,
      hint: 'Najprv vypočítaj mesačnú splátku (anuitu), potom ju vynásob počtom splátok a odčítaj požičanú sumu.'
    };
  });

  /* ================= D. KOMBINATORIKA A PRAVDEPODOBNOSŤ ================= */

  lesson({
    id: 's3-kombinatorika', order: 310, topics: ['kombinatorika'], title: 'Pravidlo súčtu a súčinu, faktoriál',
    summary: 'Základné kombinatorické pravidlá, strom možností a počítanie s faktoriálmi.',
    theory: [
      `<p><strong>Pravidlo súčinu.</strong> Ak vyberáme postupne niekoľko prvkov a prvý môžeme vybrať $n_1$ spôsobmi, druhý (po ľubovoľnom výbere prvého) $n_2$ spôsobmi, …, $k$-ty $n_k$ spôsobmi, počet všetkých možností je $n_1\\cdot n_2\\cdot\\ldots\\cdot n_k$.</p>`,
      { fig: 's3-strom', caption: 'Strom možností: 3 tričká a 2 nohavice dávajú $3\\cdot 2 = 6$ rôznych oblečení.' },
      `<p><strong>Pravidlo súčtu.</strong> Ak sa možnosti rozpadajú na skupiny, ktoré sa neprekrývajú (sú disjunktné), počty v skupinách sčítame: $|A \\cup B| = |A| + |B|$. Ak sa skupiny prekrývajú, prienik sme započítali dvakrát: $|A \\cup B| = |A| + |B| - |A \\cap B|$.</p>
       <p>Typický postup: úlohu rozdelíme na <em>prípady</em> (pravidlo súčtu) a v každom prípade počítame postupným výberom (pravidlo súčinu).</p>`,
      `<p><strong>Faktoriál</strong> prirodzeného čísla $n$ je $n! = n\\cdot(n - 1)\\cdot\\ldots\\cdot 2\\cdot 1$, navyše $0! = 1$. Udáva počet spôsobov, ako usporiadať $n$ rôznych prvkov za sebou. Rastie veľmi rýchlo: $5! = 120$, $10! = 3\\,628\\,800$.</p>
       <p>Pri úpravách využívame $n! = n\\cdot(n - 1)!$, napríklad $\\frac{(n+1)!}{(n-1)!} = (n + 1)\\cdot n$.</p>`
    ],
    examples: [
      { task: 'Koľko je štvorciferných čísel s navzájom rôznymi ciframi?',
        steps: ['Prvá cifra nesmie byť 0: 9 možností. Druhá: ľubovoľná okrem prvej, teda 9 možností (aj 0).',
                'Tretia: 8 možností, štvrtá: 7 možností.',
                'Podľa pravidla súčinu $9\\cdot 9\\cdot 8\\cdot 7 = 4536$.'] },
      { task: 'Vyrieš v obore prirodzených čísel rovnicu $\\frac{(n+1)!}{(n-1)!} = 30$.',
        steps: ['$\\frac{(n+1)!}{(n-1)!} = \\frac{(n+1)\\cdot n\\cdot(n-1)!}{(n-1)!} = (n+1)n$.',
                '$n^2 + n - 30 = 0$, $(n + 6)(n - 5) = 0$.',
                '$n = 5$ (koreň $-6$ nie je prirodzené číslo).'] }
    ]
  });

  const DIGW = { 2: 'dvojciferných', 3: 'trojciferných', 4: 'štvorciferných', 5: 'päťciferných' };

  gen('s3-kombinatorika', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const t = rnd(0, 3);
      if (t === 0) {
        const n = rnd(2, 5);
        const f = [9]; for (let i = 0; i < n - 1; i++) f.push(9 - i);
        const ans = f.reduce((x, y) => x * y, 1);
        return {
          answer: ans,
          q: `Koľko je ${DIGW[n]} prirodzených čísel, ktoré majú všetky cifry navzájom rôzne?`,
          solution: `Prvá cifra nesmie byť 0 – 9 možností; druhá môže byť aj 0, ale nie prvá – 9 možností${n > 2 ? ', každá ďalšia o jednu menej' : ''}. $${f.join('\\cdot ')} = ${ans}$.`,
          hint: 'Obsadzuj miesta zľava. Na prvom mieste nemôže byť nula, na ďalších nemôžu byť už použité cifry.'
        };
      }
      if (t === 1) {
        const d = rnd(3, 6), n = rnd(2, 4);
        const digs = [0, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, d - 1)].sort((a, b) => a - b);
        const ans = (d - 1) * Math.pow(d, n - 1);
        return {
          answer: ans,
          q: `Koľko ${DIGW[n]} čísel možno zapísať pomocou cifier ${digs.join(', ')}, ak sa cifry môžu opakovať?`,
          solution: `Na prvom mieste môže byť ${d - 1} ${pl(d - 1, ['cifra', 'cifry', 'cifier'])} (nie 0), na každom z ďalších ${n - 1} miest ľubovoľná z ${d} cifier: $${d - 1}\\cdot ${d}^{${n - 1}} = ${ans}$.`,
          hint: 'Pravidlo súčinu: prvé miesto bez nuly, ostatné miesta ľubovoľne (cifry sa môžu opakovať).'
        };
      }
      if (t === 2) {
        const x = rnd(2, 5), y = rnd(2, 5), z = rnd(1, 4);
        return {
          answer: x * y + z,
          q: `Z mesta A do mesta B vedie ${x} ${pl(x, ['cesta', 'cesty', 'ciest'])}, z B do C ${y} ${pl(y, ['cesta', 'cesty', 'ciest'])} a z A do C priamo (mimo B) ${z} ${pl(z, ['cesta', 'cesty', 'ciest'])}. Koľkými spôsobmi sa dá dostať z A do C, ak sa žiadnym mestom neprechádza dvakrát?`,
          solution: `Cez B: $${x}\\cdot ${y} = ${x * y}$ spôsobov (pravidlo súčinu). Priamo: ${z}. Prípady sa neprekrývajú, preto spolu $${x * y} + ${z} = ${x * y + z}$ (pravidlo súčtu).`,
          hint: 'Rozdeľ cesty na tie, ktoré idú cez B, a tie priame. V prvom prípade použi pravidlo súčinu, prípady potom sčítaj.'
        };
      }
      const L = rnd(1, 3), D = rnd(2, 4), ans = Math.pow(26, L) * Math.pow(10, D);
      return {
        answer: ans,
        q: `Kód sa skladá ${L === 1 ? 'z jedného písmena' : `z ${L === 2 ? 'dvoch' : 'troch'} písmen`} (26 písmen bez diakritiky) a za ${L === 1 ? 'ním' : 'nimi'} ${D === 2 ? 'z dvoch' : D === 3 ? 'z troch' : 'zo štyroch'} cifier. Písmená aj cifry sa môžu opakovať. Koľko rôznych kódov existuje?`,
        solution: `Každé písmeno 26 možností, každá cifra 10 možností: $26^{${L}}\\cdot 10^{${D}} = ${eur(ans, 0)}$.`,
        hint: 'Na každé miesto vyberáš nezávisle – použi pravidlo súčinu.'
      };
    }
    if (k === 1) {
      const d = rnd(4, 6);
      let digs;
      do digs = [0, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, d - 1)].sort((a, b) => a - b);
      while (!digs.some((x) => x > 0 && x % 2 === 0));
      let cnt = 0;
      for (const a of digs) for (const b of digs) for (const c of digs) {
        if (a !== 0 && a !== b && a !== c && b !== c && c % 2 === 0) cnt++;
      }
      const E = digs.filter((x) => x > 0 && x % 2 === 0).length;
      return {
        answer: cnt,
        q: `Koľko párnych trojciferných čísel s navzájom rôznymi ciframi možno zostaviť z cifier ${digs.join(', ')}?`,
        solution: `Rozdelíme na prípady podľa poslednej cifry. Končí nulou: prvú cifru vyberáme z ${d - 1}, strednú zo zvyšných ${d - 2}, spolu $${(d - 1) * (d - 2)}$ čísel. Končí nenulovou párnou cifrou (${E} ${pl(E, ['možnosť', 'možnosti', 'možností'])}): prvá cifra nesmie byť 0 ani posledná, vyberáme ju z ${d - 2}, strednú tiež z ${d - 2} (už môže byť 0), spolu $${E}\\cdot ${d - 2}\\cdot ${d - 2} = ${E * (d - 2) * (d - 2)}$. Celkom $${(d - 1) * (d - 2)} + ${E * (d - 2) * (d - 2)} = ${cnt}$.`,
        hint: 'Rozdeľ na prípady: posledná cifra je 0, alebo iná párna cifra. Nula nesmie byť na prvom mieste.'
      };
    }
    if (k === 2) {
      const t = rnd(0, 2), n = rnd(4, 9);
      if (t === 0) {
        return {
          answer: n * (n - 1),
          q: `Vypočítaj $\\frac{${n}!}{${n - 2}!}$.`,
          solution: `$\\frac{${n}!}{${n - 2}!} = \\frac{${n}\\cdot ${n - 1}\\cdot ${n - 2}!}{${n - 2}!} = ${n}\\cdot ${n - 1} = ${n * (n - 1)}$.`,
          hint: 'Zapíš väčší faktoriál ako $n! = n\\cdot(n-1)\\cdot(n-2)!$ a skráť.'
        };
      }
      if (t === 1) {
        return {
          answer: (n - 1) * (n - 1),
          q: `Vypočítaj $\\frac{${n}! - ${n - 1}!}{${n - 2}!}$.`,
          solution: `$\\frac{${n}\\cdot ${n - 1}\\cdot ${n - 2}! - ${n - 1}\\cdot ${n - 2}!}{${n - 2}!} = ${n}\\cdot ${n - 1} - ${n - 1} = ${n - 1}\\cdot ${n - 1} = ${(n - 1) * (n - 1)}$.`,
          hint: 'Oba faktoriály v čitateli vyjadri pomocou $(n-2)!$ a skráť.'
        };
      }
      const m = rnd(3, 6), s = Array.from({ length: m + 1 }, (_, i) => fact(i)).reduce((x, y) => x + y, 0);
      return {
        answer: s,
        q: `Vypočítaj $${Array.from({ length: m + 1 }, (_, i) => `${i}!`).join(' + ')}$.`,
        solution: `$${Array.from({ length: m + 1 }, (_, i) => fact(i)).join(' + ')} = ${s}$ (pozor, $0! = 1$).`,
        hint: 'Pamätaj, že $0! = 1$ a $1! = 1$.'
      };
    }
    const n = rnd(3, 12), t = rnd(0, 2);
    const F = [
      [`\\frac{(n+1)!}{(n-1)!}`, (n + 1) * n, '(n+1)\\cdot n', `n^2 + n - ${(n + 1) * n} = 0`, -(n + 1)],
      [`\\frac{n!}{(n-2)!}`, n * (n - 1), 'n\\cdot(n-1)', `n^2 - n - ${n * (n - 1)} = 0`, -(n - 1)],
      [`\\frac{(n+2)!}{n!}`, (n + 2) * (n + 1), '(n+2)(n+1)', `n^2 + 3n ${2 - (n + 2) * (n + 1) < 0 ? '-' : '+'} ${Math.abs(2 - (n + 2) * (n + 1))} = 0`, -(n + 3)]
    ][t];
    return {
      answer: n,
      q: `Vyrieš v obore prirodzených čísel rovnicu $${F[0]} = ${F[1]}$.`,
      solution: `$${F[0]} = ${F[2]}$, teda $${F[3]}$. Korene sú $${n}$ a $${F[4]}$; prirodzené je len $n = ${n}$.`,
      hint: 'Skráť faktoriály (napr. $(n+1)! = (n+1)\\cdot n\\cdot(n-1)!$) a vyrieš kvadratickú rovnicu.'
    };
  });

  lesson({
    id: 's3-kombinacie', order: 320, topics: ['kombinatorika'], title: 'Variácie, permutácie a kombinácie',
    summary: 'Usporiadané a neusporiadané výbery bez opakovania aj s opakovaním, kombinačné čísla a Pascalov trojuholník.',
    theory: [
      `<p><strong>Variácie</strong> $k$-tej triedy z $n$ prvkov sú usporiadané $k$-tice navzájom rôznych prvkov (záleží na poradí):</p>
       $$V(k, n) = n\\cdot(n-1)\\cdot\\ldots\\cdot(n-k+1) = \\frac{n!}{(n-k)!}.$$
       <p><strong>Permutácie</strong> sú variácie, v ktorých použijeme všetky prvky: $P(n) = n!$.</p>
       <p><strong>Kombinácie</strong> $k$-tej triedy z $n$ prvkov sú $k$-prvkové podmnožiny (na poradí nezáleží). Ich počet je <strong>kombinačné číslo</strong></p>
       $$C(k, n) = \\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!} = \\frac{V(k, n)}{k!}.$$`,
      `<p><strong>Vlastnosti kombinačných čísel:</strong> $\\binom{n}{0} = \\binom{n}{n} = 1$, $\\binom{n}{k} = \\binom{n}{n-k}$ a $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$. Posledný vzťah vytvára Pascalov trojuholník.</p>`,
      { fig: 's3-pascal', caption: 'Pascalov trojuholník: v $n$-tom riadku sú čísla $\\binom{n}{0}, \\binom{n}{1}, \\dots, \\binom{n}{n}$. Každé číslo je súčtom dvoch čísel nad ním, napr. $\\binom{4}{1} + \\binom{4}{2} = \\binom{5}{2}$.' },
      `<p><strong>S opakovaním:</strong></p>
       <table class="tbl">
         <tr><th>výber</th><th>záleží na poradí?</th><th>počet</th></tr>
         <tr><td>variácie s opakovaním $V'(k, n)$</td><td>áno</td><td>$n^k$</td></tr>
         <tr><td>permutácie s opakovaním (prvky $k_1$-krát, …, $k_m$-krát)</td><td>áno</td><td>$\\frac{n!}{k_1!\\cdot\\ldots\\cdot k_m!}$, kde $n = k_1 + \\dots + k_m$</td></tr>
         <tr><td>kombinácie s opakovaním $C'(k, n)$</td><td>nie</td><td>$\\binom{n+k-1}{k}$</td></tr>
       </table>
       <p>Pri každej úlohe sa pýtame: <em>Záleží na poradí? Môžu sa prvky opakovať? Vyberáme všetky prvky, alebo len niektoré?</em></p>`
    ],
    examples: [
      { task: 'Z 12 žiakov vyberáme a) trojčlennú delegáciu, b) predsedu, podpredsedu a pokladníka. Koľko je možností?',
        steps: ['a) Na poradí nezáleží – kombinácie: $\\binom{12}{3} = \\frac{12\\cdot 11\\cdot 10}{3\\cdot 2\\cdot 1} = 220$.',
                'b) Funkcie sú rôzne, na poradí záleží – variácie: $V(3, 12) = 12\\cdot 11\\cdot 10 = 1320$.'] },
      { task: 'Koľko rôznych slov (aj nezmyselných) vznikne preusporiadaním písmen slova ANANAS?',
        steps: ['Slovo má 6 písmen: A trikrát, N dvakrát, S raz.',
                'Permutácie s opakovaním: $\\frac{6!}{3!\\cdot 2!\\cdot 1!} = \\frac{720}{12} = 60$.'] }
    ]
  });

  const WORDS = [['ANANAS', [['A', 3], ['N', 2], ['S', 1]]], ['KAKAO', [['K', 2], ['A', 2], ['O', 1]]],
    ['BARBORA', [['B', 2], ['A', 2], ['R', 2], ['O', 1]]], ['POTOPA', [['P', 2], ['O', 2], ['T', 1], ['A', 1]]],
    ['KOLOTOČ', [['O', 3], ['K', 1], ['L', 1], ['T', 1], ['Č', 1]]], ['MAMA', [['M', 2], ['A', 2]]], ['ALABAMA', [['A', 4], ['L', 1], ['B', 1], ['M', 1]]]];
  const TYPES = ['permutácie', 'variácie', 'kombinácie', 'variácie s opakovaním', 'permutácie s opakovaním', 'kombinácie s opakovaním'];
  const SITUATIONS = [
    ['Koľkými spôsobmi možno rozdeliť zlatú, striebornú a bronzovú medailu medzi 10 pretekárov?', 1, 'Záleží na poradí (medaily sú rôzne) a nikto nezíska dve medaily: $V(3, 10) = 720$.'],
    ['Koľko trojčlenných skupín možno vybrať z 10 žiakov?', 2, 'Na poradí v skupine nezáleží a žiaci sa neopakujú: $\\binom{10}{3} = 120$.'],
    ['Koľko štvormiestnych PIN kódov možno vytvoriť z cifier 0 až 9?', 3, 'Záleží na poradí a cifry sa môžu opakovať: $V\'(4, 10) = 10^4 = 10\\,000$.'],
    ['Koľkými spôsobmi sa môže 6 ľudí postaviť do radu?', 0, 'Usporiadame všetkých 6 ľudí: $P(6) = 6! = 720$.'],
    ['Koľkými spôsobmi môžeme kúpiť 5 zákuskov, ak majú v cukrárni 3 druhy?', 5, 'Na poradí nezáleží a druhy sa môžu opakovať: $C\'(5, 3) = \\binom{7}{5} = 21$.'],
    ['Koľko rôznych slov vznikne preusporiadaním písmen slova KAKAO?', 4, 'Usporiadame všetky písmená, niektoré sa opakujú: $\\frac{5!}{2!\\cdot 2!\\cdot 1!} = 30$.'],
    ['Koľko rôznych tipov možno podať v lotérii, kde sa tipuje 5 čísel z 35?', 2, 'Na poradí čísel nezáleží a neopakujú sa: $\\binom{35}{5} = 324\\,632$.'],
    ['Koľkými spôsobmi možno obsadiť funkcie predsedu a tajomníka v klube s 20 členmi?', 1, 'Funkcie sú rôzne, záleží na poradí, jeden človek nemá dve funkcie: $V(2, 20) = 380$.'],
    ['Koľko rôznych výsledkov môže dať hod tromi rôznofarebnými kockami?', 3, 'Kocky sú rozlíšené (záleží na poradí) a čísla sa môžu opakovať: $6^3 = 216$.'],
    ['Koľkými spôsobmi možno uložiť 8 rôznych kníh vedľa seba na policu?', 0, 'Usporiadame všetkých 8 kníh: $8! = 40\\,320$.'],
    ['Koľkými spôsobmi môžeme rozdeliť 4 rovnaké jablká medzi 3 deti?', 5, 'Jablká sú rovnaké – zaujíma nás len, koľko dostane ktoré dieťa; vyberáme 4-krát jedno z 3 detí s opakovaním: $\\binom{6}{4} = 15$.'],
    ['Koľko rôznych „slov“ dĺžky 5 vytvoríme z písmen A a B?', 3, 'Záleží na poradí, písmená sa opakujú: $2^5 = 32$.'],
    ['Koľkými spôsobmi možno zoradiť do radu 3 rovnaké červené a 2 rovnaké modré guľôčky?', 4, 'Zoradíme všetkých 5 guľôčok, rovnaké nerozlišujeme: $\\frac{5!}{3!\\cdot 2!} = 10$.'],
    ['Koľko úsečiek určuje 7 bodov, z ktorých žiadne tri neležia na jednej priamke?', 2, 'Úsečka je určená dvojicou bodov bez ohľadu na poradie: $\\binom{7}{2} = 21$.']
  ];
  const BOYS = { 1: 'jedného chlapca', 2: 'dvoch chlapcov', 3: 'troch chlapcov' };
  const GIRLS = { 1: 'jedno dievča', 2: 'dve dievčatá', 3: 'tri dievčatá' };
  const KW = { 2: 'dvojčlennú', 3: 'trojčlennú', 4: 'štvorčlennú', 5: 'päťčlennú' };

  gen('s3-kombinacie', () => {
    const k = rnd(0, 2);
    if (k === 0) {
      const t = rnd(0, 7);
      if (t === 0) {
        const n = rnd(6, 15), kk = rnd(2, 4), ans = C(n, kk);
        return { answer: ans,
          q: `Koľkými spôsobmi možno z ${n} žiakov vybrať ${KW[kk]} skupinu?`,
          solution: `Na poradí nezáleží – kombinácie: $\\binom{${n}}{${kk}} = \\frac{${Array.from({ length: kk }, (_, i) => n - i).join('\\cdot ')}}{${kk}!} = ${ans}$.`,
          hint: 'Záleží na poradí členov skupiny? Ak nie, ide o kombinácie $\\binom{n}{k}$.' };
      }
      if (t === 1) {
        const n = rnd(5, 20), three = Math.random() < 0.5, kk = three ? 3 : 2, ans = V(n, kk);
        return { answer: ans,
          q: `Klub má ${n} členov. Koľkými spôsobmi možno spomedzi nich zvoliť ${three ? 'predsedu, podpredsedu a pokladníka' : 'predsedu a podpredsedu'}, ak nikto nemôže mať dve funkcie?`,
          solution: `Funkcie sú rôzne, záleží na poradí – variácie: $V(${kk}, ${n}) = ${Array.from({ length: kk }, (_, i) => n - i).join('\\cdot ')} = ${ans}$.`,
          hint: 'Funkcie sa líšia, preto záleží na tom, kto dostane ktorú – variácie bez opakovania.' };
      }
      if (t === 2) {
        const n = rnd(4, 8), ans = fact(n);
        return { answer: ans,
          q: `Koľkými spôsobmi možno postaviť ${n} ${pl(n, ['rôznu knihu', 'rôzne knihy', 'rôznych kníh'])} vedľa seba na policu?`,
          solution: `Usporadúvame všetky knihy – permutácie: $P(${n}) = ${n}! = ${ans}$.`,
          hint: 'Usporiadanie všetkých $n$ rôznych prvkov: $n!$.' };
      }
      if (t === 3) {
        const m = rnd(3, 9), kk = rnd(3, 5), ans = Math.pow(m, kk);
        return { answer: ans,
          q: `Koľko rôznych ${{ 3: 'trojmiestnych', 4: 'štvormiestnych', 5: 'päťmiestnych' }[kk]} kódov možno zostaviť z cifier 1 až ${m}, ak sa cifry môžu opakovať?`,
          solution: `Záleží na poradí a cifry sa opakujú – variácie s opakovaním: $V'(${kk}, ${m}) = ${m}^{${kk}} = ${ans}$.`,
          hint: 'Na každé miesto vyberáš z rovnakého počtu cifier: $n^k$.' };
      }
      if (t === 4) {
        const n = rnd(3, 8), kk = rnd(2, 6), ans = C(n + kk - 1, kk);
        return { answer: ans,
          q: `V cukrárni majú ${n} ${pl(n, ['druh', 'druhy', 'druhov'])} zákuskov (každého dostatok). Koľkými spôsobmi môžeme kúpiť ${kk} ${pl(kk, ['zákusok', 'zákusky', 'zákuskov'])}?`,
          solution: `Na poradí nezáleží a druhy sa môžu opakovať – kombinácie s opakovaním: $C'(${kk}, ${n}) = \\binom{${n} + ${kk} - 1}{${kk}} = \\binom{${n + kk - 1}}{${kk}} = ${ans}$.`,
          hint: 'Kombinácie s opakovaním: $C\'(k, n) = \\binom{n + k - 1}{k}$.' };
      }
      if (t === 5) {
        const [w, parts] = pick(WORDS), n = w.length;
        const den = parts.reduce((x, [, c]) => x * fact(c), 1), ans = fact(n) / den;
        return { answer: ans,
          q: `Koľko rôznych slov (aj nezmyselných) vznikne preusporiadaním všetkých písmen slova ${w}?`,
          solution: `Slovo má ${n} písmen: ${parts.map(([l, c]) => `${l} ${c === 1 ? 'raz' : c === 2 ? 'dvakrát' : c === 3 ? 'trikrát' : 'štyrikrát'}`).join(', ')}. Permutácie s opakovaním: $\\frac{${n}!}{${parts.map(([, c]) => `${c}!`).join('\\cdot ')}} = \\frac{${fact(n)}}{${den}} = ${ans}$.`,
          hint: 'Permutácie s opakovaním: $\\frac{n!}{k_1!\\cdot k_2!\\cdot\\ldots}$, kde $k_i$ je počet výskytov jednotlivých písmen.' };
      }
      if (t === 6) {
        const n = rnd(4, 8), ans = 2 * fact(n - 1);
        return { answer: ans,
          q: `Koľkými spôsobmi si ${n <= 4 ? `môžu ${n} deti` : `môže ${n} detí`} sadnúť na lavičku vedľa seba, ak Ema a Jana chcú sedieť vedľa seba?`,
          solution: `Emu a Janu považujeme za jeden „blok“. Usporadúvame ${n - 1} ${pl(n - 1, ['objekt', 'objekty', 'objektov'])}: $${n - 1}!$ spôsobmi; v bloku si môžu dievčatá vymeniť miesta: $2$ spôsoby. Spolu $2\\cdot ${n - 1}! = ${ans}$.`,
          hint: 'Dvojicu, ktorá musí sedieť spolu, zlep do jedného bloku a nezabudni, že v bloku môžu sedieť dvoma spôsobmi.' };
      }
      const b = rnd(5, 10), g = rnd(5, 10), i = rnd(1, 3), j = rnd(1, 3), ans = C(b, i) * C(g, j);
      return { answer: ans,
        q: `V triede je ${b} chlapcov a ${g} dievčat. Koľkými spôsobmi možno vybrať ${BOYS[i]} a ${GIRLS[j]}?`,
        solution: `Chlapcov vyberieme $\\binom{${b}}{${i}} = ${C(b, i)}$ spôsobmi, dievčatá $\\binom{${g}}{${j}} = ${C(g, j)}$ spôsobmi. Podľa pravidla súčinu $${C(b, i)}\\cdot ${C(g, j)} = ${ans}$.`,
        hint: 'Výber chlapcov a výber dievčat sú nezávislé kombinácie – vynásob ich počty.' };
    }
    if (k === 1) {
      if (Math.random() < 0.5) {
        const n = rnd(6, 20), kk = rnd(2, 4), useCompl = Math.random() < 0.4 && n - kk > kk, shownK = useCompl ? n - kk : kk, ans = C(n, kk);
        return { answer: ans,
          q: `Vypočítaj kombinačné číslo $\\binom{${n}}{${shownK}}$.`,
          solution: `${useCompl ? `$\\binom{${n}}{${n - kk}} = \\binom{${n}}{${kk}}$. ` : ''}$\\binom{${n}}{${kk}} = \\frac{${Array.from({ length: kk }, (_, i) => n - i).join('\\cdot ')}}{${Array.from({ length: kk }, (_, i) => kk - i).join('\\cdot ')}} = ${ans}$.`,
          hint: '$\\binom{n}{k} = \\frac{n\\cdot(n-1)\\cdot\\ldots\\cdot(n-k+1)}{k!}$; ak je $k$ blízko $n$, použi $\\binom{n}{k} = \\binom{n}{n-k}$.' };
      }
      const n = rnd(4, 20), alt = Math.random() < 0.5;
      const v = alt ? n * (n + 1) / 2 : n * (n - 1) / 2;
      return { answer: n,
        q: alt ? `Vyrieš v obore prirodzených čísel rovnicu $\\binom{n}{2} + \\binom{n}{1} = ${v}$.` : `Vyrieš v obore prirodzených čísel rovnicu $\\binom{n}{2} = ${v}$.`,
        solution: alt
          ? `$\\frac{n(n-1)}{2} + n = \\frac{n(n+1)}{2} = ${v}$, teda $n^2 + n - ${2 * v} = 0$ s koreňmi $${n}$ a $${-n - 1}$. Vyhovuje $n = ${n}$.`
          : `$\\frac{n(n-1)}{2} = ${v}$, teda $n^2 - n - ${2 * v} = 0$ s koreňmi $${n}$ a $${1 - n}$. Vyhovuje $n = ${n}$.`,
        hint: 'Rozpíš $\\binom{n}{2} = \\frac{n(n-1)}{2}$ a vyrieš kvadratickú rovnicu; ponechaj iba prirodzený koreň.' };
    }
    const [text, ti, why] = pick(SITUATIONS);
    const others = shuffle(TYPES.filter((_, i) => i !== ti)).slice(0, 3);
    return {
      type: 'choice', options: shuffle([TYPES[ti], ...others]), answer: TYPES[ti],
      q: `O aký druh výberu ide? ${text}`,
      solution: `${why} Ide o ${TYPES[ti]}.`,
      hint: 'Polož si otázky: Záleží na poradí? Môžu sa prvky opakovať? Používajú sa všetky prvky?'
    };
  });

  lesson({
    id: 's3-pravdepodobnost', order: 330, topics: ['kombinatorika', 'statistika'], title: 'Náhodný jav a pravdepodobnosť',
    summary: 'Náhodný pokus a jav, klasická pravdepodobnosť, opačný jav a výpočty pomocou kombinačných čísel.',
    theory: [
      `<p><strong>Náhodný pokus</strong> je dej, ktorého výsledok nevieme vopred určiť (hod kockou, ťahanie lósu). Množinu všetkých možných výsledkov označujeme $\\Omega$. <strong>Náhodný jav</strong> $A$ je podmnožina $\\Omega$ – výsledky, pri ktorých jav nastane (<em>priaznivé</em> výsledky). Jav $\\Omega$ je istý, jav $\\emptyset$ nemožný.</p>
       <p><strong>Klasická pravdepodobnosť:</strong> ak má pokus konečne veľa rovnako možných výsledkov, je</p>
       $$P(A) = \\frac{|A|}{|\\Omega|} = \\frac{\\text{počet priaznivých výsledkov}}{\\text{počet všetkých výsledkov}}.$$`,
      { fig: 's3-kocky', caption: 'Hod dvoma kockami má 36 rovnako možných výsledkov. Súčet 7 padne v 6 z nich.' },
      `<p><strong>Vlastnosti:</strong> $0 \\le P(A) \\le 1$, $P(\\Omega) = 1$, $P(\\emptyset) = 0$. Pre <strong>opačný jav</strong> $A'$ (jav $A$ nenastane) platí $P(A') = 1 - P(A)$. Pre nezlučiteľné javy (nemôžu nastať súčasne) $P(A \\cup B) = P(A) + P(B)$, vo všeobecnosti $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.</p>
       <p>Úlohy so slovom <em>„aspoň jeden“</em> riešime zvyčajne cez opačný jav <em>„ani jeden“</em>.</p>`,
      `<p><strong>Výpočty pomocou kombinatoriky.</strong> Ak z $n$ predmetov vyberáme naraz $k$, je $|\\Omega| = \\binom{n}{k}$. Ak je medzi nimi $r$ označených, pravdepodobnosť, že vyberieme práve $j$ označených, je</p>
       $$P = \\frac{\\binom{r}{j}\\cdot\\binom{n - r}{k - j}}{\\binom{n}{k}}.$$`
    ],
    examples: [
      { task: 'Hodíme dvoma kockami. Aká je pravdepodobnosť, že súčet bude aspoň 10?',
        steps: ['$|\\Omega| = 36$. Priaznivé dvojice: $[4; 6]$, $[5; 5]$, $[6; 4]$, $[5; 6]$, $[6; 5]$, $[6; 6]$ – je ich 6.',
                '$P = \\frac{6}{36} = \\frac{1}{6}$.'] },
      { task: 'V urne je 5 bielych a 3 čierne guľôčky, naraz vytiahneme dve. Aká je pravdepodobnosť, že obe budú biele? A že aspoň jedna bude čierna?',
        steps: ['$|\\Omega| = \\binom{8}{2} = 28$, priaznivé $\\binom{5}{2} = 10$, teda $P(\\text{obe biele}) = \\frac{10}{28} = \\frac{5}{14}$.',
                '„Aspoň jedna čierna“ je opačný jav k „obe biele“: $P = 1 - \\frac{5}{14} = \\frac{9}{14}$.'] }
    ]
  });

  const ANS = 'Výsledok zadaj ako zlomok (napr. 5/14) alebo desatinné číslo zaokrúhlené na štyri desatinné miesta.';
  const prob = (p, q) => ({ signed: true, answer: p / q, show: fTxt(p, q), tol: 0.0001 });
  const COINW = { 3: 'tromi', 4: 'štyrmi', 5: 'piatimi', 6: 'šiestimi' };
  const DICE2 = [
    ['súčet bodov bude 7', (a, b) => a + b === 7],
    ['súčet bodov bude aspoň 9', (a, b) => a + b >= 9],
    ['súčet bodov bude najviac 4', (a, b) => a + b <= 4],
    ['padne aspoň jedna šestka', (a, b) => a === 6 || b === 6],
    ['na oboch kockách padne rovnaké číslo', (a, b) => a === b],
    ['súčin bodov bude párny', (a, b) => (a * b) % 2 === 0],
    ['súčet bodov bude deliteľný tromi', (a, b) => (a + b) % 3 === 0],
    ['na prvej kocke padne viac bodov ako na druhej', (a, b) => a > b]
  ];

  gen('s3-pravdepodobnost', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const r = rnd(3, 7), w = rnd(2, 7), n = r + w, kk = rnd(2, Math.min(4, n - 1));
      let j;
      do j = rnd(0, kk); while (j > r || kk - j > w);
      const fav = C(r, j) * C(w, kk - j), all = C(n, kk);
      const ev = j === kk ? 'všetky vytiahnuté guľôčky budú červené'
        : j === 0 ? 'medzi vytiahnutými nebude žiadna červená guľôčka'
        : j === 1 ? 'medzi vytiahnutými bude práve jedna červená guľôčka'
          : `medzi vytiahnutými budú práve ${j} červené guľôčky`;
      return Object.assign(prob(fav, all), {
        q: `Urna obsahuje ${r} ${pl(r, ['červenú', 'červené', 'červených'])} a ${w} ${pl(w, ['bielu guľôčku', 'biele guľôčky', 'bielych guľôčok'])}. Naraz náhodne vytiahneme ${kk} ${pl(kk, ['guľôčku', 'guľôčky', 'guľôčok'])}. Aká je pravdepodobnosť, že ${ev}? ${ANS}`,
        solution: `$|\\Omega| = \\binom{${n}}{${kk}} = ${all}$. Priaznivé: vyberieme ${j} z ${r} červených a ${kk - j} z ${w} bielych: $\\binom{${r}}{${j}}\\cdot\\binom{${w}}{${kk - j}} = ${C(r, j)}\\cdot ${C(w, kk - j)} = ${fav}$. $P = \\frac{${fav}}{${all}}${gcd(fav, all) > 1 ? ` = ${fTex(fav, all)}` : ''}$.`,
        hint: 'Počet všetkých výberov je $\\binom{n}{k}$. Priaznivé výbery počítaj ako súčin: výber červených krát výber bielych.'
      });
    }
    if (k === 1) {
      if (Math.random() < 0.5) {
        const n = rnd(10, 30), d = rnd(2, 5), kk = rnd(2, 3), none = C(n - d, kk), all = C(n, kk);
        return Object.assign(prob(all - none, all), {
          q: `V dodávke ${n} výrobkov ${d <= 4 ? 'sú' : 'je'} ${d} ${pl(d, ['chybný', 'chybné', 'chybných'])}. Kontrolór náhodne vyberie ${kk === 2 ? 'dva' : 'tri'} výrobky. Aká je pravdepodobnosť, že aspoň jeden z vybraných bude chybný? ${ANS}`,
          solution: `Opačný jav: žiadny vybraný nie je chybný, $P' = \\frac{\\binom{${n - d}}{${kk}}}{\\binom{${n}}{${kk}}} = \\frac{${none}}{${all}}$. Hľadaná pravdepodobnosť $P = 1 - \\frac{${none}}{${all}} = ${fTex(all - none, all)}$.`,
          hint: '„Aspoň jeden chybný“ je opačný jav k „žiadny chybný“. Vypočítaj ten a odčítaj od 1.'
        });
      }
      const n = rnd(3, 6);
      if (Math.random() < 0.5) {
        const kk = rnd(0, n), fav = C(n, kk), all = Math.pow(2, n);
        const ev = kk === 0 ? 'nepadne ani jeden znak' : kk === n ? 'na všetkých minciach padne znak' : `${kk >= 2 && kk <= 4 ? 'padnú' : 'padne'} práve ${kk} ${pl(kk, ['znak', 'znaky', 'znakov'])}`;
        return Object.assign(prob(fav, all), {
          q: `Hodíme ${COINW[n]} mincami. Aká je pravdepodobnosť, že ${ev}? ${ANS}`,
          solution: `Každá minca má 2 výsledky, $|\\Omega| = 2^{${n}} = ${all}$. Mince, na ktorých padne znak, môžeme vybrať $\\binom{${n}}{${kk}} = ${fav}$ ${fav === 1 ? 'spôsobom' : 'spôsobmi'}. $P = \\frac{${fav}}{${all}}${gcd(fav, all) > 1 ? ` = ${fTex(fav, all)}` : ''}$.`,
          hint: 'Všetkých výsledkov je $2^n$. Priaznivé: koľkými spôsobmi vyberieš mince, na ktorých padne znak?'
        });
      }
      const all = Math.pow(2, n);
      return Object.assign(prob(all - 1, all), {
        q: `Hodíme ${COINW[n]} mincami. Aká je pravdepodobnosť, že padne aspoň jeden znak? ${ANS}`,
        solution: `Opačný jav „nepadne ani jeden znak“ nastane v jedinom výsledku z $2^{${n}} = ${all}$. $P = 1 - \\frac{1}{${all}} = \\frac{${all - 1}}{${all}}$.`,
        hint: 'Použi opačný jav: na všetkých minciach padne druhá strana.'
      });
    }
    if (k === 2) {
      const [ev, f] = pick(DICE2);
      const fav = [];
      for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (f(a, b)) fav.push(`[${a}; ${b}]`);
      const list = fav.length <= 12 ? ` (${fav.map((x) => `$${x}$`).join(', ')})` : '';
      return Object.assign(prob(fav.length, 36), {
        q: `Hodíme naraz dvoma rôznofarebnými kockami. Aká je pravdepodobnosť, že ${ev}? ${ANS}`,
        solution: `$|\\Omega| = 6\\cdot 6 = 36$. Priaznivých výsledkov je ${fav.length}${list}. $P = \\frac{${fav.length}}{36}${gcd(fav.length, 36) > 1 ? ` = ${fTex(fav.length, 36)}` : ''}$.`,
        hint: 'Výsledok hodu je usporiadaná dvojica [prvá kocka; druhá kocka], všetkých je 36. Spočítaj priaznivé dvojice (pomôže tabuľka 6 × 6).'
      });
    }
    if (Math.random() < 0.5) {
      const t = rnd(0, 2), all = C(32, 2);
      const D = [
        ['obe budú esá', C(4, 2), `$\\binom{4}{2} = 6$`],
        ['obe budú srdcové', C(8, 2), `$\\binom{8}{2} = 28$`],
        ['aspoň jedna bude eso', all - C(28, 2), `$\\binom{32}{2} - \\binom{28}{2} = ${all} - ${C(28, 2)} = ${all - C(28, 2)}$ (od všetkých odčítame dvojice bez esa)`]
      ][t];
      return Object.assign(prob(D[1], all), {
        q: `Z balíčka 32 mariášových kariet (4 farby po 8 kariet, v balíčku sú 4 esá) náhodne vytiahneme naraz dve karty. Aká je pravdepodobnosť, že ${D[0]}? ${ANS}`,
        solution: `$|\\Omega| = \\binom{32}{2} = ${all}$. Priaznivých výberov je ${D[2]}. $P = \\frac{${D[1]}}{${all}} = ${fTex(D[1], all)}$.`,
        hint: 'Všetkých dvojíc kariet je $\\binom{32}{2}$. Priaznivé dvojice počítaj tiež kombinačným číslom (pri „aspoň“ cez opačný jav).'
      });
    }
    const b = rnd(5, 16), g = rnd(5, 16), n = b + g, all = C(n, 2), t = rnd(0, 2);
    const D = [
      ['obaja vyžrebovaní budú chlapci', C(b, 2), `$\\binom{${b}}{2} = ${C(b, 2)}$`],
      ['obe vyžrebované osoby budú dievčatá', C(g, 2), `$\\binom{${g}}{2} = ${C(g, 2)}$`],
      ['sa vyžrebuje jeden chlapec a jedno dievča', b * g, `$${b}\\cdot ${g} = ${b * g}$`]
    ][t];
    return Object.assign(prob(D[1], all), {
      q: `V triede je ${b} chlapcov a ${g} dievčat. Na službu sa žrebujú dvaja žiaci. Aká je pravdepodobnosť, že ${D[0]}? ${ANS}`,
      solution: `$|\\Omega| = \\binom{${n}}{2} = ${all}$. Priaznivých dvojíc je ${D[2]}. $P = \\frac{${D[1]}}{${all}}${gcd(D[1], all) > 1 ? ` = ${fTex(D[1], all)}` : ''}$.`,
      hint: 'Všetkých dvojíc žiakov je $\\binom{n}{2}$; spočítaj dvojice, ktoré vyhovujú.'
    });
  });
})();
