/* Vysoká škola: Diferenciálne rovnice. Pojem ODR a smerové pole, rovnice 1. rádu (separovateľné, homogénne,
   lineárne, Bernoulliho, exaktné), aplikácie, lineárne rovnice 2. rádu s konštantnými koeficientmi, kmitanie,
   sústavy lineárnych rovníc a fázový portrét, Laplaceova transformácia. */
(function () {
  'use strict';

  const { rnd, pick, gcd, fmt, term, shuffle } = EXERCISES.util;
  const { plane, axes, curvePath, svg, n1, sk } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v3' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 rok, 2 roky, 5 rokov.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);

  const nz = (a, b) => { let v = 0; while (v === 0) v = rnd(a, b); return v; };
  const par = (v) => (v < 0 ? `(${v})` : String(v));
  const round = (x, d) => Math.round(x * Math.pow(10, d)) / Math.pow(10, d);
  const dd = (x, d = 2) => round(x, d).toFixed(d).replace('.', '{,}'); // pevný počet miest, pre KaTeX
  const dc3 = (x) => fmt(x).replace(',', '{,}');                       // najviac 3 desatinné miesta, pre KaTeX
  const dt = (x, d = 2) => round(x, d).toFixed(d).replace('.', ',');   // pevný počet miest, obyčajný text
  const red = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g, q / g]; };
  const fTex = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${b}}`; };
  const fTxt = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a}/${b}`; };
  // koeficient pred premennou: cf(1,'x') = 'x', cf(-1,'x') = '-x', cf(3,'x') = '3x', cf(3,'') = '3'
  const cf = (c, v) => (v === '' ? String(c) : c === 1 ? v : c === -1 ? '-' + v : c + v);
  // zlomkový koeficient pred premennou: cfr(1,2,'x') = '\frac{1}{2}x', cfr(-2,2,'x') = '-x'
  const cfr = (p, q, v) => { const [a, b] = red(p, q); return b === 1 ? cf(a, v) : fTex(a, b) + v; };
  // pripojenie člena so znamienkom: sg('-3x') = ' - 3x', sg('2') = ' + 2'
  const sg = (t) => (String(t)[0] === '-' ? ` - ${String(t).slice(1)}` : ` + ${t}`);
  // lineárna kombinácia: lin([[2,'x'],[-1,'y'],[3,'']]) = "2x - y + 3"
  const lin = (pairs) => {
    const s = pairs.map(([c, v]) => term(c, v)).join('').trim();
    return !s ? '0' : s[0] === '+' ? s.slice(2) : '-' + s.slice(2);
  };
  const poly = (cs, x = 'x') => {
    const n = cs.length - 1;
    return lin(cs.map((c, i) => [c, n - i === 0 ? '' : n - i === 1 ? x : `${x}^{${n - i}}`]));
  };
  const xp = (n, v = 'x') => (n === 0 ? '' : n === 1 ? v : `${v}^{${n}}`);
  // exponenciála e^{rx}; pre r = 0 vráti '1'
  const ex = (r, v = 'x') => (r === 0 ? '1' : `\\mathrm{e}^{${cf(r, v)}}`);
  // exponenciála ako činiteľ: pre r = 0 prázdny reťazec
  const ef = (r, v = 'x') => (r === 0 ? '' : `\\mathrm{e}^{${cf(r, v)}}`);
  const ROUND2 = 'Výsledok zaokrúhli na 2 desatinné miesta.';
  const T2 = 0.006;
  // ľavá strana y'' + p y' + q y
  const lhs2 = (p, q, y = 'y') => `${y}''${term(p, y + "'")}${term(q, y)}`;
  const charEq = (p, q) => `\\lambda^{2}${term(p, '\\lambda')}${term(q)} = 0`;
  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));

  /* ---------- pomocné kreslenie: smerové pole, numerické riešenie ---------- */

  // krátke úsečky v smere vektora F(x, y) = [dx, dy] (v súradniciach grafu)
  function field(p, F, nx = 17, ny = 13) {
    const sx = (p.W - 2 * p.pad) / (p.xmax - p.xmin), sy = (p.H - 2 * p.pad) / (p.ymax - p.ymin);
    const half = 0.36 * Math.min((p.W - 2 * p.pad) / nx, (p.H - 2 * p.pad) / ny);
    let s = '';
    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny; j++) {
        const x = p.xmin + (i + 0.5) * (p.xmax - p.xmin) / nx, y = p.ymin + (j + 0.5) * (p.ymax - p.ymin) / ny;
        const [a, b] = F(x, y);
        let u = a * sx, w = -b * sy;
        const L = Math.hypot(u, w);
        if (!Number.isFinite(L) || L < 1e-12) continue;
        u = u / L * half; w = w / L * half;
        const cx = p.X(x), cy = p.Y(y);
        s += `<line class="f-thin" opacity="0.5" x1="${n1(cx - u)}" y1="${n1(cy - w)}" x2="${n1(cx + u)}" y2="${n1(cy + w)}"/>`;
      }
    }
    return s;
  }

  // RK4 pre y' = f(x, y) od x0 po x1; zastaví sa, keď riešenie ujde ďaleko mimo graf
  function rkCurve(f, x0, y0, x1, lim, n = 240) {
    const h = (x1 - x0) / n, pts = [[x0, y0]];
    let x = x0, y = y0;
    for (let k = 0; k < n; k++) {
      const k1 = f(x, y), k2 = f(x + h / 2, y + h / 2 * k1), k3 = f(x + h / 2, y + h / 2 * k2), k4 = f(x + h, y + h * k3);
      y += h / 6 * (k1 + 2 * k2 + 2 * k3 + k4); x += h;
      if (!Number.isFinite(y)) break;
      pts.push([x, y]);
      if (Math.abs(y) > lim) break;
    }
    return pts;
  }
  const clampY = (p, y) => Math.max(Math.min(y, p.ymax + 50), p.ymin - 50);
  const ptsPath = (p, pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${n1(p.X(x))} ${n1(p.Y(clampY(p, y)))}`).join('');

  /* ======================= 1. POJEM DIFERENCIÁLNEJ ROVNICE ======================= */

  fig('v3-smerove-pole', {
    controls: [{ id: 'y0', label: 'Začiatočná hodnota y(0)', min: -3, max: 3, step: 0.25, value: 1 }],
    draw: (v) => {
      const p = plane(-3, 3, -3, 3, 400, 360);
      const f = (x, y) => x - y;
      const y0 = v.y0, c = y0 + 1;
      const right = rkCurve(f, 0, y0, 3, 40), left = rkCurve(f, 0, y0, -3, 40);
      const back = axes(p) + field(p, (x, y) => [1, f(x, y)], 15, 13);
      const clipped = `<line class="f-dash" x1="${n1(p.X(-3))}" y1="${n1(p.Y(-3))}" x2="${n1(p.X(3))}" y2="${n1(p.Y(3))}"/>
        <line class="f-ok" opacity="0.7" x1="${n1(p.X(-2))}" y1="${n1(p.Y(-3))}" x2="${n1(p.X(3))}" y2="${n1(p.Y(2))}"/>
        <path class="f-accent" d="${ptsPath(p, left)}"/><path class="f-accent" d="${ptsPath(p, right)}"/>
        <circle class="f-dot" cx="${n1(p.X(0))}" cy="${n1(p.Y(y0))}" r="5"/>`;
      return {
        svg: svg(p, back, clipped, '', "Smerové pole rovnice y' = x − y s integrálnou krivkou"),
        readout: `<span class="c-accent">y = x − 1 ${c >= 0 ? '+' : '−'} ${sk(Math.abs(c))}·e<sup>−x</sup></span> · y(0) = ${sk(y0)}`
          + (Math.abs(c) < 1e-9 ? ' · riešením je priamka y = x − 1' : '')
      };
    }
  });

  lesson({
    id: 'v3-pojem', order: 10, title: 'Pojem diferenciálnej rovnice, Cauchyho úloha, smerové pole',
    summary: 'Rád rovnice, všeobecné a partikulárne riešenie, začiatočná úloha, veta o existencii a jednoznačnosti, smerové pole.',
    theory: [
      `<p><strong>Obyčajná diferenciálna rovnica (ODR)</strong> je rovnica $F(x, y, y', \\dots, y^{(n)}) = 0$, v ktorej neznámou je funkcia
       jednej premennej $y = y(x)$ a vystupujú v nej derivácie tejto funkcie. <strong>Rád</strong> rovnice je rád najvyššej derivácie,
       ktorá sa v nej skutočne vyskytuje: $y'' + (y')^{5} = x$ je rovnica 2. rádu, mocnina $(y')^{5}$ na ráde nič nemení.
       Rovnica je <strong>lineárna</strong>, ak je lineárna vzhľadom na $y, y', \\dots, y^{(n)}$, teda má tvar
       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$.</p>
       <p><strong>Riešením</strong> na intervale $I$ je funkcia, ktorá má na $I$ derivácie do rádu $n$ a po dosadení spĺňa rovnicu pre každé $x\\in I$.
       <strong>Všeobecné riešenie</strong> rovnice $n$-tého rádu je systém riešení $y = \\varphi(x, C_1, \\dots, C_n)$ s $n$ nezávislými konštantami,
       <strong>partikulárne riešenie</strong> vznikne konkrétnou voľbou konštánt. Riešenie, ktoré zo všeobecného nedostaneme pre žiadnu voľbu konštánt,
       sa nazýva <strong>singulárne</strong>.</p>`,
      `<p><strong>Cauchyho (začiatočná) úloha</strong> pre rovnicu 1. rádu: nájsť riešenie rovnice $y' = f(x, y)$, ktoré spĺňa
       <strong>začiatočnú podmienku</strong> $y(x_0) = y_0$. Pri rovnici $n$-tého rádu predpisujeme $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$.</p>
       <p><strong>Veta (Picard, Lindelöf).</strong> Ak sú funkcie $f$ a $\\frac{\\partial f}{\\partial y}$ spojité v okolí bodu $[x_0; y_0]$, existuje
       interval okolo $x_0$, na ktorom má Cauchyho úloha <strong>práve jedno</strong> riešenie. Bez predpokladov jednoznačnosť platiť nemusí:
       úlohu $y' = 3y^{2/3}$, $y(0) = 0$ riešia funkcie $y = 0$ aj $y = x^{3}$ (tu $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$ nie je v bode $y = 0$ definovaná).</p>`,
      `<p><strong>Smerové pole.</strong> Rovnica $y' = f(x, y)$ predpisuje v každom bode $[x; y]$ smernicu dotyčnice k riešeniu, ktoré ním prechádza.
       Ak do bodov roviny nakreslíme krátke úsečky so smernicou $f(x, y)$, dostaneme smerové pole. Graf riešenia (<strong>integrálna krivka</strong>)
       sa v každom svojom bode dotýka poľa. Krivky $f(x, y) = k$, na ktorých majú všetky úsečky rovnakú smernicu $k$, sa volajú <strong>izoklíny</strong>.</p>`,
      { fig: 'v3-smerove-pole', caption: 'Smerové pole rovnice $y\' = x - y$. Prerušovaná priamka $y = x$ je izoklína so smernicou $0$, zelená priamka $y = x - 1$ je izoklína so smernicou $1$ a zároveň riešenie. Posúvaj začiatočnú hodnotu $y(0)$: všetky riešenia sa pre $x\\to\\infty$ približujú k priamke $y = x - 1$.' }
    ],
    examples: [
      { task: 'Over, že $y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$ je riešením rovnice $y\'\' - y\' - 2y = 0$ pre ľubovoľné $C_1, C_2$. Akého rádu je rovnica?',
        steps: ['Rovnica obsahuje druhú deriváciu a žiadnu vyššiu, je teda <strong>2. rádu</strong>.',
          'Derivujeme: $y\' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$, $y\'\' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$.',
          'Dosadíme: $(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$.',
          'Rovnosť platí pre všetky $x$ a všetky $C_1, C_2$. Funkcia obsahuje dve nezávislé konštanty, ide o <strong>všeobecné riešenie</strong>.'] },
      { task: 'Ukáž, že $y = C\\mathrm{e}^{-x} + x - 1$ je všeobecné riešenie rovnice $y\' = x - y$, a nájdi riešenie Cauchyho úlohy s podmienkou $y(0) = 2$.',
        steps: ['$y\' = -C\\mathrm{e}^{-x} + 1$ a $x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$. Obe strany sa rovnajú.',
          'Z podmienky: $y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$, teda $C = 3$.',
          '<strong>Partikulárne riešenie: $y = 3\\mathrm{e}^{-x} + x - 1$.</strong> Je to krivka z obrázka pre $y(0) = 2$.'] }
    ]
  });

  gen('v3-pojem', () => {
    const t = Math.random();
    if (t < 0.25) {
      const a = rnd(2, 7), b = rnd(2, 9), k = rnd(2, 5);
      const ORD = [
        [`y'' + ${a}(y')^{${k}} - y = ${b}x`, 2],
        [`x^{2}y''' - ${a}y' + y^{${k}} = 0`, 3],
        [`(y')^{${k}} + ${a}xy = \\mathrm{e}^{x}`, 1],
        [`y^{(4)} + ${a}y'' = \\cos x`, 4],
        [`\\frac{d^{2}y}{dx^{2}} = ${a}\\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^{2}}`, 2],
        [`\\sin(y') + x^{${k}}y = ${b}`, 1],
        [`(y''')^{2} - ${a}y'y'' = x^{${k}}`, 3]
      ];
      const [eq, n] = pick(ORD);
      return {
        answer: n,
        q: `Urči rád diferenciálnej rovnice $${eq}$.`,
        solution: `Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená.
          Najvyššia derivácia v rovnici je ${n === 1 ? 'prvá' : n === 2 ? 'druhá' : n === 3 ? 'tretia' : 'štvrtá'}, rovnica je teda <strong>${n}. rádu</strong>.`,
        hint: 'Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y\')^{3}$, rád nezvyšuje.'
      };
    }
    if (t < 0.5) {
      const x0 = rnd(-3, 3), y0 = rnd(-3, 3);
      const a = nz(-3, 3), b = nz(-3, 3), c = nz(-4, 4);
      const F = pick([
        [`${cf(a, 'x')}${term(b, 'y')}`, (x, y) => a * x + b * y, (x, y) => `${a}\\cdot ${par(x)}${sg(`${b}\\cdot ${par(y)}`)}`],
        [`x^{2}${term(b, 'y')}`, (x, y) => x * x + b * y, (x, y) => `${par(x)}^{2}${sg(`${b}\\cdot ${par(y)}`)}`],
        [`${cf(a, 'xy')}${term(c)}`, (x, y) => a * x * y + c, (x, y) => `${a}\\cdot ${par(x)}\\cdot ${par(y)}${sg(c)}`],
        [`y^{2}${term(-a, 'x')}`, (x, y) => y * y - a * x, (x, y) => `${par(y)}^{2}${sg(`${-a}\\cdot ${par(x)}`)}`]
      ]);
      const val = F[1](x0, y0);
      return {
        signed: true, answer: val,
        q: `Akú smernicu má úsečka smerového poľa rovnice $y' = ${F[0]}$ v bode $[${x0}; ${y0}]$?`,
        solution: `Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f(${x0}, ${y0}) = ${F[2](x0, y0)} = ${val}$.
          Integrálna krivka prechádzajúca bodom $[${x0}; ${y0}]$ má v ňom dotyčnicu so smernicou $${val}$.`,
        hint: 'Rovnica $y\' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.'
      };
    }
    if (t < 0.75) {
      const kind = rnd(0, 2);
      if (kind === 0) {
        const k = nz(-3, 3), m = rnd(-4, 4), y0 = rnd(-5, 5), C = y0 - m;
        return {
          signed: true, answer: C,
          q: `Všeobecné riešenie rovnice $y' = ${cf(k, 'y')}${term(-k * m)}$ je $y = C${ex(k)}${term(m)}$.
            Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = ${y0}$.`,
          solution: `Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}${term(m)} = C${term(m)} = ${y0}$, odkiaľ $C = ${C}$.
            Riešenie Cauchyho úlohy je $y = ${C === 0 ? (m === 0 ? '0' : String(m)) : `${cf(C, ex(k))}${term(m)}`}$.`,
          hint: 'Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.'
        };
      }
      if (kind === 1) {
        const a = nz(-3, 3), p0 = pick([1, 2, 3, -1, -2]), y0 = rnd(-6, 6), C = p0 * (y0 - a * p0);
        return {
          signed: true, answer: C,
          q: `Všeobecné riešenie rovnice $xy' + y = ${cf(2 * a, 'x')}$ na intervale, ktorý neobsahuje nulu, je $y = ${cf(a, 'x')} + \\frac{C}{x}$.
            Urči $C$ pre začiatočnú podmienku $y(${p0}) = ${y0}$.`,
          solution: `Dosadíme: $${a}\\cdot ${par(p0)} + \\frac{C}{${p0}} = ${y0}$, teda $\\frac{C}{${p0}} = ${y0 - a * p0}$ a $C = ${C}$.
            (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = ${cf(a, 'x^{2}')} + C$.)`,
          hint: 'Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.'
        };
      }
      const b = rnd(-4, 4), p0 = pick([1, 2, 3, -1, -2]), y0 = rnd(-6, 6);
      let yy = y0; if (yy === b) yy = b + 1;
      const C = (yy - b) / (p0 * p0);
      return {
        signed: true, answer: C, show: fTxt(yy - b, p0 * p0),
        q: `Všeobecné riešenie rovnice $xy' = 2y${term(-2 * b)}$ je $y = Cx^{2}${term(b)}$. Urči $C$ pre začiatočnú podmienku $y(${p0}) = ${yy}$.
          Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Dosadíme: $C\\cdot ${par(p0)}^{2}${term(b)} = ${yy}$, teda $${p0 * p0}C = ${yy - b}$ a $C = ${fTex(yy - b, p0 * p0)}$.`,
        hint: 'Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.'
      };
    }
    const k = rnd(2, 5), kind = rnd(0, 2);
    let eq, ok, wrong, why;
    if (kind === 0) {
      eq = `y'' + ${k * k}y = 0`;
      ok = `\\cos ${k}x`; wrong = [`\\cos ${k * k}x`, `\\mathrm{e}^{${k}x}`, `\\sin x + ${k}`];
      why = `Pre $y = \\cos ${k}x$ je $y'' = -${k * k}\\cos ${k}x$, a teda $y'' + ${k * k}y = 0$. Pri $\\cos ${k * k}x$ by vyšlo $y'' = -${k ** 4}\\cos ${k * k}x$, exponenciála má kladnú druhú deriváciu.`;
    } else if (kind === 1) {
      eq = `y'' - ${k * k}y = 0`;
      ok = `\\mathrm{e}^{-${k}x}`; wrong = [`\\mathrm{e}^{${k * k}x}`, `\\sin ${k}x`, `x\\,\\mathrm{e}^{${k}x}`];
      why = `Pre $y = \\mathrm{e}^{-${k}x}$ je $y'' = ${k * k}\\mathrm{e}^{-${k}x}$, a teda $y'' - ${k * k}y = 0$. Pre $\\sin ${k}x$ vyjde $y'' - ${k * k}y = -${2 * k * k}\\sin ${k}x \\neq 0$.`;
    } else {
      eq = `xy' = ${k}y`;
      ok = `x^{${k}}`; wrong = [`x^{${k + 1}}`, `\\mathrm{e}^{${k}x}`, `${k}x`];
      why = `Pre $y = x^{${k}}$ je $xy' = x\\cdot ${k}x^{${k - 1}} = ${k}x^{${k}} = ${k}y$. Pre $y = ${k}x$ by vyšlo $xy' = ${k}x$, ale $${k}y = ${k * k}x$.`;
    }
    return {
      type: 'choice', options: shuffle([ok, ...wrong].map((s) => `$y = ${s}$`)), answer: `$y = ${ok}$`,
      q: `Ktorá z funkcií je riešením rovnice $${eq}$?`,
      solution: why,
      hint: 'Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.'
    };
  });

  /* ======================= 2. SEPAROVATEĽNÉ PREMENNÉ ======================= */

  fig('v3-separovatelne', {
    draw: () => {
      const p = plane(-2.5, 2.5, -3, 3, 400, 340);
      const back = axes(p) + field(p, (x, y) => [1, x * y], 15, 13);
      let clipped = '';
      [-2, -1, -0.4, 0.4, 1, 2].forEach((C) => {
        clipped += `<path class="${C === 1 ? 'f-accent' : 'f-line'}" d="${curvePath(p, (x) => C * Math.exp(x * x / 2))}"/>`;
      });
      clipped += `<line class="f-ok" x1="${n1(p.X(-2.5))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(2.5))}" y2="${n1(p.Y(0))}"/>
        <circle class="f-dot" cx="${n1(p.X(0))}" cy="${n1(p.Y(1))}" r="5"/>`;
      return svg(p, back, clipped, '', "Integrálne krivky rovnice y' = xy");
    }
  });

  lesson({
    id: 'v3-separovatelne', order: 20, title: 'Rovnice so separovateľnými premennými',
    summary: 'Rovnica $y\' = g(x)\\,h(y)$: oddelenie premenných, stacionárne riešenia, rovnice typu $y\' = f(ax + by + c)$.',
    theory: [
      `<p>Rovnica so <strong>separovateľnými (oddeliteľnými) premennými</strong> má tvar $y' = g(x)\\,h(y)$, kde $g$ je spojitá na intervale $I$
       a $h$ spojitá na intervale $J$. Ekvivalentne ju možno zapísať v diferenciálnom tvare $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$.</p>
       <p><strong>Postup:</strong></p>
       <ol><li>Nájdeme nulové body funkcie $h$. Ak $h(c) = 0$, je konštanta $y = c$ riešením, tzv. <strong>stacionárne riešenie</strong>.</li>
       <li>Pre $h(y)\\neq 0$ oddelíme premenné: $\\frac{dy}{h(y)} = g(x)\\,dx$.</li>
       <li>Integrujeme: $\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$. Dostaneme riešenie v implicitnom tvare, ktoré podľa možnosti vyjadríme explicitne.</li>
       <li>Konštantu $C$ určíme zo začiatočnej podmienky a overíme, na akom intervale riešenie existuje.</li></ol>`,
      `<p><strong>Pozor na stratu riešení.</strong> Delením výrazom $h(y)$ môžeme stratiť stacionárne riešenia, preto ich treba vypísať zvlášť
       (niekedy sú obsiahnuté vo všeobecnom riešení pre $C = 0$, napríklad pri $y' = ky$ dáva $y = C\\mathrm{e}^{kx}$ aj $y = 0$).
       Riešenie nelineárnej rovnice nemusí existovať na celom $\\mathbb{R}$, hoci je pravá strana pekná: riešenie úlohy $y' = y^{2}$, $y(0) = 1$
       je $y = \\frac{1}{1 - x}$ a existuje len na intervale $(-\\infty; 1)$.</p>
       <p><strong>Rovnice typu $y' = f(ax + by + c)$</strong> prevedieme substitúciou $z = ax + by + c$ na separovateľnú rovnicu $z' = a + b\\,f(z)$.</p>`,
      { fig: 'v3-separovatelne', caption: 'Rovnica $y\' = xy$ má všeobecné riešenie $y = C\\mathrm{e}^{x^{2}/2}$. Zelená os $x$ je stacionárne riešenie $y = 0$ (pre $C = 0$), modrá krivka je riešenie s podmienkou $y(0) = 1$. Integrálne krivky sa nepretínajú, ako zaručuje veta o jednoznačnosti.' }
    ],
    examples: [
      { task: 'Vyrieš Cauchyho úlohu $y\' = xy^{2}$, $y(0) = 1$, a urči interval, na ktorom riešenie existuje.',
        steps: ['Stacionárne riešenie je $y = 0$, podmienku $y(0) = 1$ však nespĺňa.',
          'Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = x\\,dx$, po integrovaní $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$.',
          'Z podmienky $-1 = C$, teda $\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$ a $y = \\frac{2}{2 - x^{2}}$.',
          '<strong>Riešenie $y = \\frac{2}{2 - x^{2}}$ existuje na intervale $(-\\sqrt{2}; \\sqrt{2})$</strong>, ktorý obsahuje bod $x_0 = 0$; v bodoch $\\pm\\sqrt{2}$ má graf zvislé asymptoty.'] },
      { task: 'Vyrieš Cauchyho úlohu $y\' = \\mathrm{e}^{x - y}$, $y(0) = \\ln 2$.',
        steps: ['Pravá strana je súčin: $y\' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$. Oddelíme premenné: $\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$.',
          'Integrujeme: $\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$. Z podmienky $2 = 1 + C$, teda $C = 1$.',
          '<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>, riešenie existuje na celom $\\mathbb{R}$.'] }
    ]
  });

  const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10], [7, 24, 25], [20, 21, 29], [9, 12, 15], [12, 16, 20]];

  gen('v3-separovatelne', () => {
    const t = Math.random();
    if (t < 0.3) {
      let a, n, x1, E;
      do { a = nz(-2, 2); n = rnd(0, 2); x1 = rnd(1, 2); E = a * Math.pow(x1, n + 1) / (n + 1); } while (Math.abs(E) > 3);
      const b = pick([1, 2, 3, -1, -2, 4]);
      const val = b * Math.exp(E);
      const expo = cfr(a, n + 1, xp(n + 1));
      return {
        signed: true, answer: val, tol: T2, show: dt(val),
        q: `Vyrieš Cauchyho úlohu $y' = ${cf(a, xp(n) + 'y')}$, $y(0) = ${b}$, a vypočítaj $y(${x1})$. ${ROUND2}`,
        solution: `Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = ${n === 0 ? (a === 1 ? '' : a === -1 ? '-' : a) : cf(a, xp(n))}\\,dx$, teda $\\ln|y| = ${expo} + c$ a $y = C\\mathrm{e}^{${expo}}$
          (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = ${b}$, takže $y = ${cf(b, `\\mathrm{e}^{${expo}}`)}$ a
          $y(${x1}) = ${b === 1 ? '' : b === -1 ? '-' : b + '\\,'}\\mathrm{e}^{${fTex(a * Math.pow(x1, n + 1), n + 1)}} \\approx ${dd(val)}$.`,
        hint: 'Rovnica má tvar $y\' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.'
      };
    }
    if (t < 0.55) {
      const tr = pick(TRIPLES), sw = Math.random() < 0.5;
      const A = sw ? tr[1] : tr[0], B = sw ? tr[0] : tr[1], c = tr[2];
      const s = pick([1, 2, 3, 4].filter((d) => A % d === 0)), x1 = A / s, k = s * s;
      return {
        answer: c,
        q: `Vyrieš Cauchyho úlohu $yy' = ${cf(k, 'x')}$, $y(0) = ${B}$, a vypočítaj $y(${x1})$.`,
        solution: `Oddelíme premenné: $y\\,dy = ${cf(k, 'x')}\\,dx$, teda $\\frac{y^{2}}{2} = ${cfr(k, 2, 'x^{2}')} + C$, čiže $y^{2} = ${cf(k, 'x^{2}')} + 2C$.
          Z podmienky $2C = ${B * B}$, takže $y^{2} = ${cf(k, 'x^{2}')} + ${B * B}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu:
          $y = \\sqrt{${cf(k, 'x^{2}')} + ${B * B}}$ a $y(${x1}) = \\sqrt{${k * x1 * x1} + ${B * B}} = \\sqrt{${c * c}} = ${c}$.`,
        hint: 'Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.'
      };
    }
    if (t < 0.8) {
      let k, y0;
      do { k = nz(-2, 2); y0 = nz(-3, 3); } while (k * y0 >= 0);
      const x1 = rnd(1, 3), den = 1 - k * y0 * x1;
      return {
        signed: true, answer: y0 / den, show: fTxt(y0, den), tol: 1e-4,
        q: `Vyrieš Cauchyho úlohu $y' = ${cf(k, 'y^{2}')}$, $y(0) = ${y0}$, a vypočítaj $y(${x1})$. Výsledok zadaj ako zlomok alebo celé číslo.`,
        solution: `Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = ${k}\\,dx$, teda $-\\frac{1}{y} = ${cf(k, 'x')} + C$.
          Z podmienky $C = ${fTex(-1, y0)}$. Odtiaľ $y = \\frac{${y0}}{1${term(-k * y0, 'x')}}$, čo je na intervale $\\langle 0; ${x1}\\rangle$ definované
          (menovateľ je tam kladný). Dosadením $y(${x1}) = \\frac{${y0}}{${den}}${fTxt(y0, den) === `${y0}/${den}` ? '' : ` = ${fTex(y0, den)}`}$.`,
        hint: 'Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.'
      };
    }
    const k = rnd(1, 4), kx = cf(k, 'x');
    const ok = `y = \\mathrm{tg}(${kx} + C)`;
    return {
      type: 'choice', answer: `$${ok}$`,
      options: shuffle([ok, `y = \\mathrm{tg}(${kx}) + C`, `y = C\\,\\mathrm{tg}(${kx})`, `y = \\mathrm{arctg}(${kx} + C)`].map((s) => `$${s}$`)),
      q: `Ktorá funkcia je všeobecným riešením rovnice $y' = ${k === 1 ? '' : k}(1 + y^{2})$?`,
      solution: `Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = ${k === 1 ? '' : k}\\,dx$,
        teda $\\mathrm{arctg}\\,y = ${kx} + C$ a $y = \\mathrm{tg}(${kx} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}(${kx}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.`,
      hint: 'Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.'
    };
  });

  /* ======================= 3. HOMOGÉNNE ROVNICE ======================= */

  fig('v3-homogenne', {
    draw: () => {
      const p = plane(-4, 4, -3.2, 3.2, 420, 340);
      const back = axes(p) + field(p, (x, y) => [x - y, x + y], 17, 13);
      let clipped = '';
      [0.5, -0.6, 2.2].forEach((m) => {
        clipped += `<line class="f-dash" x1="${n1(p.X(-4))}" y1="${n1(p.Y(-4 * m))}" x2="${n1(p.X(4))}" y2="${n1(p.Y(4 * m))}"/>`;
      });
      [0.06, 0.06 * Math.exp(Math.PI)].forEach((C, i) => {
        let d = '';
        for (let k = 0; k <= 300; k++) {
          const th = -4 * Math.PI + k * (Math.log(6 / C) + 4 * Math.PI) / 300, r = C * Math.exp(th);
          d += `${k ? 'L' : 'M'}${n1(p.X(r * Math.cos(th)))} ${n1(p.Y(r * Math.sin(th)))}`;
        }
        clipped += `<path class="${i ? 'f-ok' : 'f-accent'}" d="${d}"/>`;
      });
      return svg(p, back, clipped, '', "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)");
    }
  });

  lesson({
    id: 'v3-homogenne', order: 30, title: 'Homogénne diferenciálne rovnice',
    summary: 'Rovnice $y\' = \\varphi\\left(\\frac{y}{x}\\right)$, substitúcia $y = ux$ a rovnice prevoditeľné na homogénne.',
    theory: [
      `<p>Funkcia $f(x, y)$ je <strong>homogénna stupňa $k$</strong>, ak $f(tx, ty) = t^{k}f(x, y)$ pre všetky $t \\gt 0$. Rovnica $y' = f(x, y)$ sa nazýva
       <strong>homogénna</strong>, ak je $f$ homogénna stupňa $0$; potom $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$, teda rovnica má tvar
       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$
       Rovnica $M(x, y)\\,dx + N(x, y)\\,dy = 0$ je homogénna, ak sú $M$ aj $N$ homogénne funkcie toho istého stupňa
       (napríklad $\\frac{x^{2} + y^{2}}{xy}$: čitateľ aj menovateľ majú stupeň $2$).</p>`,
      `<p><strong>Substitúcia $y = ux$</strong>, kde $u = u(x)$ je nová neznáma funkcia. Potom $y' = u + xu'$ a rovnica prejde na
       $$xu' = \\varphi(u) - u,$$
       čo je rovnica so separovateľnými premennými: $\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$. Ak $\\varphi(u_0) = u_0$, je priamka $y = u_0x$
       riešením. Po integrovaní dosadíme späť $u = \\frac{y}{x}$.</p>
       <p><strong>Rovnice prevoditeľné na homogénne</strong>: $y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$ s nenulovým determinantom
       $a_1b_2 - a_2b_1$. Posunutím $x = X + x_0$, $y = Y + y_0$, kde $[x_0; y_0]$ je priesečník priamok $a_ix + b_iy + c_i = 0$, zmiznú absolútne členy.</p>`,
      { fig: 'v3-homogenne', caption: 'Pri homogénnej rovnici má smerové pole na každej priamke $y = ux$ cez začiatok (prerušované čiary) rovnaký smer. Rovnica $y\' = \\frac{x + y}{x - y}$ má v polárnych súradniciach riešenia $r = C\\mathrm{e}^{\\varphi}$, teda logaritmické špirály.' }
    ],
    examples: [
      { task: 'Nájdi všeobecné riešenie rovnice $y\' = \\dfrac{x^{2} + y^{2}}{xy}$ pre $x \\gt 0$.',
        steps: ['Čitateľ aj menovateľ sú homogénne stupňa $2$. Po vydelení $x^{2}$: $y\' = \\frac{1 + u^{2}}{u}$, kde $u = \\frac{y}{x}$.',
          'Dosadíme $y\' = u + xu\'$: $u + xu\' = \\frac{1}{u} + u$, teda $xu\' = \\frac{1}{u}$.',
          'Oddelíme premenné: $u\\,du = \\frac{dx}{x}$, po integrovaní $\\frac{u^{2}}{2} = \\ln x + C$.',
          '<strong>Riešenie: $y^{2} = x^{2}(2\\ln x + C_1)$</strong>, kde $C_1 = 2C$.'] },
      { task: 'Vyrieš Cauchyho úlohu $y\' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$, $y(1) = 0$.',
        steps: ['Substitúcia $y = ux$: $u + xu\' = u + \\mathrm{e}^{-u}$, teda $xu\' = \\mathrm{e}^{-u}$.',
          'Oddelíme premenné: $\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$, takže $\\mathrm{e}^{u} = \\ln x + C$.',
          'Z podmienky $u(1) = 0$: $1 = 0 + C$, teda $C = 1$ a $u = \\ln(1 + \\ln x)$.',
          '<strong>$y = x\\ln(1 + \\ln x)$</strong> pre $x \\gt \\mathrm{e}^{-1}$.'] }
    ]
  });

  gen('v3-homogenne', () => {
    const t = Math.random();
    if (t < 0.27) {
      const a = nz(-3, 3), b = rnd(-3, 3), x1 = rnd(2, 5);
      const val = x1 * (a * Math.log(x1) + b);
      const eq = Math.random() < 0.5 ? `y' = \\frac{y}{x}${term(a)}` : `xy' = y${term(a, 'x')}`;
      return {
        signed: true, answer: val, tol: T2, show: dt(val),
        q: `Vyrieš Cauchyho úlohu $${eq}$, $y(1) = ${b}$ (pre $x \\gt 0$), a vypočítaj $y(${x1})$. ${ROUND2}`,
        solution: `Rovnica je homogénna: $y' = \\frac{y}{x}${term(a)}$. Substitúcia $y = ux$ dáva $u + xu' = u${term(a)}$, teda $u' = ${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{x}$
          a $u = ${cf(a, '\\ln x')} + C$. Z podmienky $u(1) = ${b}$ je $C = ${b}$, preto $y = x(${cf(a, '\\ln x')}${term(b)})$ a
          $y(${x1}) = ${x1}(${cf(a, `\\ln ${x1}`)}${term(b)}) \\approx ${dd(val)}$.`,
        hint: 'Zapíš rovnicu v tvare $y\' = \\frac{y}{x} + a$, dosaď $y = ux$, $y\' = u + xu\'$ a integruj.'
      };
    }
    if (t < 0.52) {
      const k = rnd(1, 3), c = rnd(1, 3), x1 = rnd(2, 3);
      const val = x1 * Math.sqrt(2 * k * Math.log(x1) + c * c);
      return {
        answer: val, tol: T2, show: dt(val),
        q: `Vyrieš Cauchyho úlohu $xyy' = y^{2}${term(k, 'x^{2}')}$, $y(1) = ${c}$ (pre $x \\gt 0$), a vypočítaj $y(${x1})$. ${ROUND2}`,
        solution: `Po vydelení $xy$: $y' = \\frac{y}{x} + ${k === 1 ? '' : k}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{${k}}{u}$, teda $u\\,du = ${k === 1 ? '' : k}\\frac{dx}{x}$
          a $\\frac{u^{2}}{2} = ${cf(k, '\\ln x')} + C$. Z podmienky $u(1) = ${c}$ máme $u^{2} = ${cf(2 * k, '\\ln x')} + ${c * c}$, a keďže $y \\gt 0$,
          $y = x\\sqrt{${cf(2 * k, '\\ln x')} + ${c * c}}$. Potom $y(${x1}) = ${x1}\\sqrt{${cf(2 * k, `\\ln ${x1}`)} + ${c * c}} \\approx ${dd(val)}$.`,
        hint: 'Vydeľ rovnicu výrazom $xy$, dostaneš $y\' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.'
      };
    }
    if (t < 0.77) {
      const b = pick([-3, -2, -1, 1]), x1 = b === 1 ? 2 : rnd(2, 4);
      const val = b * x1 / (1 - b * Math.log(x1));
      return {
        signed: true, answer: val, tol: T2, show: dt(val),
        q: `Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = ${b}$ (pre $x \\gt 0$), a vypočítaj $y(${x1})$. ${ROUND2}`,
        solution: `Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$
          (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = ${fTex(-1, b)}$.
          Odtiaľ $u = \\frac{${b}}{1${term(-b, '\\ln x')}}$ a $y = \\frac{${cf(b, 'x')}}{1${term(-b, '\\ln x')}}$, takže $y(${x1}) \\approx ${dd(val)}$.`,
        hint: 'Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.'
      };
    }
    const a = rnd(1, 4), b = nz(-3, 3), c = rnd(1, 3), d = nz(-3, 3);
    const homog = pick([`\\frac{${cf(a, 'x^{2}')}${term(b, 'y^{2}')}}{${cf(c, 'xy')}}`, `\\frac{${cf(a, 'x')}${term(b, 'y')}}{${cf(c, 'x')}${term(d, 'y')}}`]);
    const other = shuffle([
      `\\frac{${cf(a, 'x^{2}')}${term(b, 'y')}}{xy}`,
      `\\frac{x${term(b, 'y')}${term(c)}}{x${term(d, 'y')}}`,
      `\\frac{y}{x}${term(a, 'x')}`,
      `${cf(c, 'xy')}${term(b, 'y^{2}')}`
    ]).slice(0, 3);
    return {
      type: 'choice', answer: `$y' = ${homog}$`,
      options: shuffle([homog, ...other].map((s) => `$y' = ${s}$`)),
      q: 'Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y\' = \\varphi\\left(\\frac{y}{x}\\right)$?',
      solution: `Rovnica $y' = ${homog}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$
        sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen,
        po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.`,
      hint: 'Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.'
    };
  });

  /* ======================= 4. LINEÁRNE ROVNICE 1. RÁDU A BERNOULLIHO ROVNICA ======================= */

  lesson({
    id: 'v3-linearne', order: 40, title: 'Lineárne rovnice 1. rádu a Bernoulliho rovnica',
    summary: 'Integračný faktor, variácia konštanty, štruktúra riešenia $y = y_h + y_p$ a substitúcia $z = y^{1-n}$.',
    theory: [
      `<p><strong>Lineárna rovnica 1. rádu</strong> má tvar $y' + p(x)\\,y = q(x)$, kde $p, q$ sú spojité na intervale $I$. Ak $q = 0$, rovnica je
       <strong>homogénna</strong> (v zmysle lineárnych rovníc) a je separovateľná: $y_h = C\\mathrm{e}^{-P(x)}$, kde $P$ je ľubovoľná primitívna funkcia k $p$.
       Všeobecné riešenie nehomogénnej rovnice je $y = y_h + y_p$, súčet všeobecného riešenia homogénnej rovnice a jedného (partikulárneho) riešenia
       nehomogénnej rovnice. Cauchyho úloha má na celom $I$ práve jedno riešenie.</p>`,
      `<p><strong>Integračný faktor.</strong> Rovnicu vynásobíme $\\mu(x) = \\mathrm{e}^{P(x)}$. Ľavá strana je potom deriváciou súčinu:
       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$
       <strong>Variácia konštanty</strong> vedie k tomu istému: riešenie hľadáme v tvare $y = C(x)\\,\\mathrm{e}^{-P(x)}$; po dosadení
       sa členy s $C(x)$ odčítajú a zostane $C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$.</p>`,
      `<p><strong>Bernoulliho rovnica</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$, $n\\neq 0, 1$. Vydelíme ju $y^{n}$ a zavedieme $z = y^{1-n}$,
       takže $z' = (1-n)\\,y^{-n}y'$. Dostaneme lineárnu rovnicu
       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$
       Pre $n \\gt 0$ je riešením aj $y = 0$, ktoré sa pri delení stratí. Napríklad logistická rovnica $y' = ry - \\frac{r}{K}y^{2}$ je Bernoulliho rovnica s $n = 2$.</p>`
    ],
    examples: [
      { task: 'Vyrieš Cauchyho úlohu $y\' + 2y = 4x$, $y(0) = 1$.',
        steps: ['$p = 2$, integračný faktor $\\mu = \\mathrm{e}^{2x}$. Rovnica prejde na $(y\\mathrm{e}^{2x})\' = 4x\\mathrm{e}^{2x}$.',
          'Per partes: $\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$, teda $y = 2x - 1 + C\\mathrm{e}^{-2x}$.',
          'Z podmienky: $-1 + C = 1$, $C = 2$.',
          '<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$.</strong> Skúška: $y\' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$.'] },
      { task: 'Nájdi všeobecné riešenie Bernoulliho rovnice $y\' + \\dfrac{y}{x} = xy^{2}$ pre $x \\gt 0$.',
        steps: ['$n = 2$, preto $z = y^{-1}$ a $z\' = -y^{-2}y\'$. Po vydelení rovnice $y^{2}$: $y^{-2}y\' + \\frac{1}{x}y^{-1} = x$, teda $-z\' + \\frac{z}{x} = x$.',
          'Lineárna rovnica $z\' - \\frac{z}{x} = -x$ má integračný faktor $\\mu = \\frac{1}{x}$: $\\left(\\frac{z}{x}\\right)\' = -1$, takže $z = Cx - x^{2}$.',
          '<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong>, a navyše stacionárne riešenie $y = 0$.'] }
    ]
  });

  gen('v3-linearne', () => {
    const t = Math.random();
    if (t < 0.3) {
      let a, c;
      do { a = nz(-3, 3); c = nz(-3, 3); } while (c === -a);
      const A = nz(-3, 3), B = rnd(-4, 4), b = A * (a + c), y0 = A + B;
      return {
        type: 'tuple', signed: true, answer: [A, B], placeholder: 'A; B',
        q: `Riešenie Cauchyho úlohy $y'${term(a, 'y')} = ${cf(b, ex(c))}$, $y(0) = ${y0}$ má tvar $y = A${ex(c)} + B${ex(-a)}$. Urči $A$ a $B$.`,
        solution: `Integračný faktor je $\\mu = ${ex(a)}$: $(y${ex(a)})' = ${cf(b, ex(a + c))}$. Integrovaním $y${ex(a)} = ${cfr(b, a + c, ex(a + c))} + B$,
          teda $y = ${cf(A, ex(c))} + B${ex(-a)}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A${ex(c)}$: $A(${c}${term(a)}) = ${b}$, $A = ${A}$).
          Z podmienky $${A} + B = ${y0}$, teda $B = ${B}$. Odpoveď: $A = ${A}$, $B = ${B}$.`,
        hint: 'Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.'
      };
    }
    if (t < 0.55) {
      const n = rnd(1, 3), m = rnd(0, 3), C = rnd(-4, 4), y0 = 1 + C;
      const num = Math.pow(2, m + n) + C, den = Math.pow(2, n);
      return {
        signed: true, answer: num / den, show: fTxt(num, den), tol: 1e-4,
        q: `Vyrieš Cauchyho úlohu $xy'${term(n, 'y')} = ${cf(m + n, xp(m))}$, $y(1) = ${y0}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).`,
        solution: `Po vydelení $x$: $y' + \\frac{${n}}{x}y = ${m === 0 ? `\\frac{${n}}{x}` : cf(m + n, xp(m - 1))}$. Integračný faktor je $\\mathrm{e}^{${n}\\ln x} = ${xp(n)}$,
          rovnica prejde na $(${xp(n)}y)' = ${cf(m + n, xp(m + n - 1))}$, teda $${xp(n)}y = ${xp(m + n)} + C$ a $y = ${m === 0 ? '1' : xp(m)} + \\frac{C}{${xp(n)}}$.
          Z podmienky $1 + C = ${y0}$, $C = ${C}$. Potom $y(2) = ${Math.pow(2, m)}${C === 0 ? '' : `${sg(fTex(C, den))} = ${fTex(num, den)}`}$.`,
        hint: 'Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.'
      };
    }
    if (t < 0.8) {
      const N = pick([[2, 1], [3, 1], [-1, 1], [-2, 1], [1, 2], [4, 1]]); // n = N[0]/N[1]
      const p = nz(-3, 3), q = nz(-3, 3);
      const kn = N[1] - N[0], kd = N[1];                  // k = 1 - n
      const rhs = N[1] === 2 ? `${cf(q, '\\sqrt{y}')}` : N[0] === -1 ? `${q < 0 ? '-' : ''}\\frac{${Math.abs(q)}}{y}` : N[0] === -2 ? `${q < 0 ? '-' : ''}\\frac{${Math.abs(q)}}{y^{2}}` : `${cf(q, `y^{${N[0]}}`)}`;
      const nTex = fTex(N[0], N[1]);
      return {
        type: 'tuple', signed: true, answer: [kn / kd, kn * p / kd, kn * q / kd], placeholder: 'k; P; Q',
        show: `${fTxt(kn, kd)}; ${fTxt(kn * p, kd)}; ${fTxt(kn * q, kd)}`,
        q: `Bernoulliho rovnicu $y'${term(p, 'y')} = ${rhs}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi.
          Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).`,
        solution: `Tu $n = ${nTex}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - ${par(nTex)} = ${fTex(kn, kd)}$. Vydelením rovnice $y^{${nTex}}$ dostaneme
          $y^{-n}y'${term(p, 'y^{1-n}')} = ${q}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = ${fTex(kn, kd)}$ máme $z'${sg(cfr(kn * p, kd, 'z'))} = ${fTex(kn * q, kd)}$.
          Teda $P = (1-n)p = ${fTex(kn * p, kd)}$ a $Q = (1-n)q = ${fTex(kn * q, kd)}$.`,
        hint: 'Pre $y\' + py = qy^{n}$ je $z = y^{1-n}$ a $z\' + (1-n)pz = (1-n)q$.'
      };
    }
    const a = nz(-4, 4), b = nz(-6, 6);
    const ok = `y = ${fTex(b, a)} + C${ex(-a)}`;
    const opts = [ok, `y = ${fTex(b, a)} + C${ex(a)}`, `y = ${fTex(-b, a)} + C${ex(-a)}`, `y = \\left(${fTex(b, a)} + C\\right)${ex(-a)}`];
    return {
      type: 'choice', answer: `$${ok}$`, options: shuffle(opts.map((s) => `$${s}$`)),
      q: `Ktorá funkcia je všeobecným riešením rovnice $y'${term(a, 'y')} = ${b}$?`,
      solution: `Homogénna rovnica $y'${term(a, 'y')} = 0$ má riešenie $y_h = C${ex(-a)}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$:
        $${a}K = ${b}$, teda $K = ${fTex(b, a)}$. Všeobecné riešenie je $${ok}$.`,
      hint: 'Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.'
    };
  });

  /* ======================= 5. EXAKTNÉ ROVNICE ======================= */

  fig('v3-exaktne', {
    draw: () => {
      const p = plane(-3.2, 3.2, -3, 3, 400, 360);
      let clipped = '';
      [0.5, 1, 2, 3, 4.5, 6.5].forEach((C) => {
        let d = '';
        for (let k = 0; k <= 180; k++) {
          const th = 2 * Math.PI * k / 180, r = Math.sqrt(C / (1 - Math.sin(th) * Math.cos(th)));
          d += `${k ? 'L' : 'M'}${n1(p.X(r * Math.cos(th)))} ${n1(p.Y(r * Math.sin(th)))}`;
        }
        clipped += `<path class="${C === 3 ? 'f-accent' : 'f-line'}" d="${d}Z"/>`;
      });
      const front = `<circle class="f-dot" cx="${n1(p.X(1))}" cy="${n1(p.Y(2))}" r="5"/>
        <text class="f-small" x="${n1(p.X(1) + 8)}" y="${n1(p.Y(2) - 6)}">[1; 2]</text>`;
      return svg(p, axes(p), clipped, front, 'Vrstevnice funkcie F(x, y) = x² − xy + y²');
    }
  });

  lesson({
    id: 'v3-exaktne', order: 50, title: 'Exaktné rovnice a integračný faktor',
    summary: 'Rovnica $M\\,dx + N\\,dy = 0$ s $M_y = N_x$, kmeňová funkcia $F(x, y)$ a integračný faktor závislý od jednej premennej.',
    theory: [
      `<p>Rovnica $M(x, y)\\,dx + N(x, y)\\,dy = 0$ je <strong>exaktná</strong> na oblasti $D$, ak existuje funkcia $F(x, y)$ (kmeňová funkcia, potenciál) taká, že
       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$
       teda ľavá strana je totálny diferenciál $dF$. Pozdĺž každého riešenia je potom $dF = 0$, takže <strong>všeobecný integrál</strong> je $F(x, y) = C$:
       integrálne krivky sú vrstevnice funkcie $F$.</p>
       <p><strong>Kritérium.</strong> Ak sú $M, N$ spojito diferencovateľné na jednoducho súvislej oblasti, rovnica je exaktná práve vtedy, keď
       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>`,
      `<p><strong>Výpočet $F$.</strong> Integrujeme $M$ podľa $x$ (premennú $y$ považujeme za konštantu): $F = \\int M\\,dx + \\varphi(y)$.
       Neznámu funkciu $\\varphi$ určíme z podmienky $\\frac{\\partial F}{\\partial y} = N$, ktorá dáva $\\varphi'(y)$ závislé len od $y$.
       Rovnako dobre môžeme začať integrovaním $N$ podľa $y$.</p>
       <p><strong>Integračný faktor.</strong> Ak rovnica nie je exaktná, hľadáme funkciu $\\mu \\neq 0$ tak, aby $\\mu M\\,dx + \\mu N\\,dy = 0$ exaktná bola,
       teda $(\\mu M)_y = (\\mu N)_x$. V dvoch jednoduchých prípadoch:</p>
       <ul><li>ak $\\dfrac{M_y - N_x}{N} = \\omega(x)$ závisí len od $x$, potom $\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$;</li>
       <li>ak $\\dfrac{N_x - M_y}{M} = \\omega(y)$ závisí len od $y$, potom $\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$.</li></ul>
       <p>Napríklad lineárna rovnica $y' + p(x)y = q(x)$, zapísaná ako $(p y - q)\\,dx + dy = 0$, má $\\omega = p(x)$ a známy faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$.</p>`,
      { fig: 'v3-exaktne', caption: 'Rovnica $(2x - y)\\,dx + (2y - x)\\,dy = 0$ je exaktná s $F(x, y) = x^{2} - xy + y^{2}$. Integrálne krivky sú elipsy $F = C$; krivka cez bod $[1; 2]$ zodpovedá $C = 3$.' }
    ],
    examples: [
      { task: 'Vyrieš rovnicu $(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$ a nájdi integrálnu krivku, ktorá prechádza bodom $[1; 1]$.',
        steps: ['$M_y = 2x$ a $N_x = 2x$, rovnica je exaktná.',
          '$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$.',
          '$F_y = x^{2} + \\varphi\'(y) = x^{2} + 2y$, teda $\\varphi\'(y) = 2y$ a $\\varphi(y) = y^{2}$.',
          'Všeobecný integrál $x^{2}y + x^{3} + y^{2} = C$. Bod $[1; 1]$ dáva $C = 3$.',
          '<strong>$x^{2}y + x^{3} + y^{2} = 3$.</strong>'] },
      { task: 'Nájdi integračný faktor rovnice $(y + x^{2})\\,dx - x\\,dy = 0$ ($x \\gt 0$) a rovnicu vyrieš.',
        steps: ['$M_y = 1$, $N_x = -1$, rovnica nie je exaktná. $\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$ závisí len od $x$.',
          '$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$. Nová rovnica: $\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$, kde $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$.',
          '$F = -\\frac{y}{x} + x$ (skontroluj $F_x$ aj $F_y$), všeobecný integrál $x - \\frac{y}{x} = C$.',
          '<strong>$y = x^{2} - Cx$.</strong>'] }
    ]
  });

  const POOL = [[2, 1], [1, 2], [3, 0], [0, 3], [2, 0], [0, 2], [1, 1], [1, 0], [0, 1]];
  const mono = (a, b) => xp(a) + xp(b, 'y');
  const byDeg = (s, t) => (t.px + t.py) - (s.px + s.py) || t.px - s.px;
  const polyXY = (ts) => lin([...ts].sort(byDeg).map((t) => [t.c, mono(t.px, t.py)]));
  const dX = (ts) => ts.filter((t) => t.px > 0).map((t) => ({ c: t.c * t.px, px: t.px - 1, py: t.py }));
  const dY = (ts) => ts.filter((t) => t.py > 0).map((t) => ({ c: t.c * t.py, px: t.px, py: t.py - 1 }));
  const evalXY = (ts, x, y) => ts.reduce((s, t) => s + t.c * Math.pow(x, t.px) * Math.pow(y, t.py), 0);
  const randF = () => {
    let ts;
    do {
      ts = shuffle(POOL).slice(0, 3).map(([px, py]) => ({ c: nz(-3, 3), px, py }));
    } while (!ts.some((t) => t.px > 0 && t.py > 0));
    return ts;
  };

  gen('v3-exaktne', () => {
    const t = Math.random();
    if (t < 0.4) {
      const F = randF(), M = dX(F), N = dY(F);
      const x0 = rnd(-2, 2), y0 = rnd(-2, 2), C = evalXY(F, x0, y0);
      const withX = F.filter((s) => s.px > 0), onlyY = F.filter((s) => s.px === 0);
      return {
        signed: true, answer: C,
        q: `Rovnica $(${polyXY(M)})\\,dx + (${polyXY(N)})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$.
          Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[${x0}; ${y0}]$.`,
        solution: `Overenie: $\\frac{\\partial M}{\\partial y} = ${polyXY(dY(M))} = \\frac{\\partial N}{\\partial x}$.
          Integrovaním $M$ podľa $x$: $F = ${polyXY(withX)} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde
          ${onlyY.length ? `$\\varphi'(y) = ${polyXY(dY(onlyY))}$, teda $\\varphi(y) = ${polyXY(onlyY)}$` : '$\\varphi\'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú'}.
          Preto $F(x, y) = ${polyXY(F)}$ a $C = F(${x0}, ${y0}) = ${C}$.`,
        hint: 'Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.'
      };
    }
    if (t < 0.7) {
      const F = randF(), M = dX(F), N = dY(F);
      const s = pick(F.filter((u) => u.px > 0 && u.py > 0));
      const rest = N.filter((u) => !(u.px === s.px && u.py === s.py - 1));
      const aTerm = `a${mono(s.px, s.py - 1)}`;
      const Nshow = rest.length ? `${aTerm}${sg(polyXY(rest))}` : aTerm;
      const mon = mono(s.px - 1, s.py - 1);
      return {
        signed: true, answer: s.c * s.py,
        q: `Pre akú hodnotu parametra $a$ je rovnica $(${polyXY(M)})\\,dx + (${Nshow})\\,dy = 0$ exaktná?`,
        solution: `Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = ${polyXY(dY(M))}$ a $N_x = ${s.px === 1 ? '' : s.px}a${mon}${rest.length && dX(rest).length ? sg(polyXY(dX(rest))) : ''}$.
          Porovnaním koeficientov pri ${mon ? `$${mon}$` : 'absolútnom člene'} dostaneme $${s.px === 1 ? '' : s.px}a = ${s.c * s.px * s.py}$${s.px === 1 ? '' : `, teda $a = ${s.c * s.py}$`}.
          Kmeňová funkcia je potom $F = ${polyXY(F)}$.`,
        hint: 'Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.'
      };
    }
    let a, b;
    do { a = pick([-1, 0, 2, 3, 4]); b = pick([1, -1, 2]); } while (a === b || (a - b) % b !== 0);
    const k = (a - b) / b, c = nz(-3, 3), s = rnd(0, 2);
    const Mtex = lin([[a, 'y'], [c, xp(s)]]);
    return {
      signed: true, answer: k,
      q: `Rovnica $(${Mtex})\\,dx ${b > 0 ? '+' : '-'} ${cf(Math.abs(b), 'x')}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.`,
      solution: `$M_y = ${a}$, $N_x = ${b}$, teda $\\frac{M_y - N_x}{N} = \\frac{${a} - ${par(b)}}{${cf(b, 'x')}} = ${k < 0 ? '-' : ''}\\frac{${Math.abs(k)}}{x}$ závisí len od $x$.
        Preto $\\mu = \\mathrm{e}^{\\int ${k}/x\\,dx} = \\mathrm{e}^{${cf(k, '\\ln x')}} = x^{${k}}$, $k = ${k}$.
        Kontrola: $(\\mu M)_y = ${a === 0 ? '0' : cf(a, `x^{${k}}`)}$ a $(\\mu N)_x = ${k + 1 === 0 ? `(${b})_x = 0` : `(${cf(b, xp(k + 1))})_x = ${cf(b * (k + 1), `x^{${k}}`)}`}$.`,
      hint: 'Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.'
    };
  });

  /* ======================= 6. APLIKÁCIE ROVNÍC 1. RÁDU ======================= */

  fig('v3-rast', {
    controls: [
      { id: 'k', label: 'Koeficient rastu k', min: -1, max: 1, step: 0.05, value: 0.4 },
      { id: 'K', label: 'Nosná kapacita K', min: 2, max: 7, step: 0.5, value: 5 }
    ],
    draw: (v) => {
      const p = plane(0, 10, 0, 8, 420, 300);
      const k = v.k, K = v.K;
      const expo = (t) => Math.exp(k * t);
      const logi = (t) => K / (1 + (K - 1) * Math.exp(-k * t));
      const clipped = `<line class="f-dash" x1="${n1(p.X(0))}" y1="${n1(p.Y(K))}" x2="${n1(p.X(10))}" y2="${n1(p.Y(K))}"/>
        <path class="f-ok" d="${curvePath(p, logi, 0, 10)}"/>
        <path class="f-accent" d="${curvePath(p, expo, 0, 10)}"/>
        <circle class="f-dot" cx="${n1(p.X(0))}" cy="${n1(p.Y(1))}" r="5"/>`;
      let info;
      if (Math.abs(k) < 1e-9) info = 'k = 0: veličina sa nemení';
      else if (k > 0) info = `čas zdvojnásobenia ln 2 / k = ${sk(Math.log(2) / k)}`;
      else info = `polčas ln 2 / |k| = ${sk(Math.log(2) / -k)}`;
      return {
        svg: svg(p, axes(p, 2, 2), clipped, '', 'Exponenciálny a logistický rast'),
        readout: `<span class="c-accent">y = e<sup>${sk(k)}·t</sup></span> · ${info} · <span class="c-ok">logistická krivka s K = ${sk(K, 1)}</span>`
      };
    }
  });

  lesson({
    id: 'v3-aplikacie', order: 60, title: 'Aplikácie rovníc 1. rádu',
    summary: 'Rast populácie a rádioaktívny rozpad, Newtonov zákon ochladzovania, logistická rovnica, RC obvod a miešanie roztokov.',
    theory: [
      `<p><strong>Exponenciálny rast a rozpad.</strong> Ak je rýchlosť zmeny veličiny úmerná jej okamžitej hodnote, platí $y' = ky$, teda
       $y(t) = y_0\\mathrm{e}^{kt}$. Pre $k \\gt 0$ ide o rast (populácia, zložené úročenie so spojitým pripisovaním), čas zdvojnásobenia je $\\frac{\\ln 2}{k}$.
       Pre $k \\lt 0$ ide o rozpad; rádioaktívny izotop s <strong>polčasom rozpadu</strong> $T$ má $k = -\\frac{\\ln 2}{T}$, a teda $m(t) = m_0\\cdot 2^{-t/T}$.</p>
       <p><strong>Newtonov zákon ochladzovania.</strong> Teplota telesa v prostredí s konštantnou teplotou $T_o$ sa mení rýchlosťou úmernou rozdielu teplôt:
       $T' = -k(T - T_o)$, $k \\gt 0$. Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; konštantu $k$ zvyčajne určíme z jedného ďalšieho merania.</p>`,
      { fig: 'v3-rast', caption: 'Modrá krivka je riešenie $y\' = ky$, $y(0) = 1$, zelená riešenie logistickej rovnice s rovnakým $k$ a nosnou kapacitou $K$ (prerušovaná čiara). Na začiatku sú takmer totožné, logistická krivka sa však ustáli na hodnote $K$.' },
      `<p><strong>Logistická rovnica</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$ opisuje rast s obmedzenými zdrojmi; $K$ je nosná kapacita prostredia.
       Je separovateľná (aj Bernoulliho) a jej riešenie je
       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$
       Stacionárne riešenia sú $P = 0$ (nestabilné) a $P = K$ (stabilné). Najrýchlejšie populácia rastie pri $P = \\frac{K}{2}$, a to v čase $t = \\frac{\\ln A}{r}$.</p>`,
      `<p><strong>RC obvod.</strong> Pre náboj kondenzátora pri nabíjaní zo zdroja s napätím $U$ cez odpor $R$ platí $Rq' + \\frac{q}{C} = U$.
       Pri nulovom začiatočnom náboji je napätie na kondenzátore $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, kde $\\tau = RC$ je <strong>časová konštanta</strong>
       (za čas $\\tau$ sa kondenzátor nabije na asi $63\\,\\%$ napätia $U$).</p>
       <p><strong>Miešanie roztokov.</strong> Nádrž obsahuje $V$ litrov roztoku, priteká doň $q$ litrov za minútu roztoku s koncentráciou $c$ a rovnako rýchlo
       odteká dokonale premiešaný roztok. Pre množstvo látky $x(t)$ platí bilancia „prítok mínus odtok“:
       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>`
    ],
    examples: [
      { task: 'Káva s teplotou $90\\,{}^\\circ\\mathrm{C}$ stojí v miestnosti s teplotou $20\\,{}^\\circ\\mathrm{C}$. Po $10$ minútach má $60\\,{}^\\circ\\mathrm{C}$. Kedy vychladne na $40\\,{}^\\circ\\mathrm{C}$?',
        steps: ['$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$. Z merania $60 = 20 + 70\\,\\mathrm{e}^{-10k}$, teda $\\mathrm{e}^{-10k} = \\frac{4}{7}$ a $k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0{,}0560$.',
          'Podmienka $40 = 20 + 70\\,\\mathrm{e}^{-kt}$ dáva $\\mathrm{e}^{-kt} = \\frac{2}{7}$, teda $t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3{,}5}{\\ln 1{,}75}$.',
          '<strong>$t \\approx 22{,}4$ minúty.</strong>'] },
      { task: 'Nádrž obsahuje $100$ litrov vody, v ktorej je rozpustených $5\\,\\mathrm{kg}$ soli. Priteká do nej $4$ litre za minútu roztoku s koncentráciou $0{,}2\\,\\mathrm{kg/l}$ a rovnako rýchlo premiešaný roztok odteká. Koľko soli je v nádrži po $25$ minútach?',
        steps: ['Bilancia: $x\' = 0{,}2\\cdot 4 - \\frac{4}{100}x = 0{,}8 - 0{,}04x$, $x(0) = 5$.',
          'Lineárna rovnica s konštantnými koeficientmi: rovnovážna hodnota je $x = 20$, preto $x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0{,}04t} = 20 - 15\\,\\mathrm{e}^{-0{,}04t}$.',
          '<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14{,}48\\,\\mathrm{kg}$.</strong> Pre $t\\to\\infty$ sa množstvo blíži k $20\\,\\mathrm{kg}$.'] }
    ]
  });

  const UNITS = [['rok', 'roky', 'rokov'], ['deň', 'dni', 'dní'], ['hodina', 'hodiny', 'hodín']];
  const CEL = '\\,{}^\\circ\\mathrm{C}';

  gen('v3-aplikacie', () => {
    const t = Math.random();
    if (t < 0.2) {
      const U = pick(UNITS), T = pick([5, 8, 10, 12, 30]), m0 = pick([10, 20, 50, 80, 100, 200]);
      if (Math.random() < 0.5) {
        const tt = rnd(2, 3 * T), val = m0 * Math.pow(2, -tt / T);
        return {
          answer: val, tol: T2, show: dt(val),
          q: `Polčas rozpadu rádioaktívneho izotopu je $${T}$ ${pl(T, U)}. Vzorka obsahuje na začiatku $${m0}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za $${tt}$ ${pl(tt, U)}? ${ROUND2}`,
          solution: `Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$.
            $m(${tt}) = ${m0}\\cdot 2^{-${tt}/${T}} \\approx ${dd(val)}\\,\\mathrm{g}$.`,
          hint: 'Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.'
        };
      }
      const pc = pick([10, 20, 25, 30, 40, 60, 75, 80, 90]), val = T * Math.log2(100 / pc);
      return {
        answer: val, tol: T2, show: dt(val),
        q: `Polčas rozpadu rádioaktívneho izotopu je $${T}$ ${pl(T, U)}. Za koľko ${U[2]} klesne jeho množstvo na $${pc}\\,\\%$ pôvodného množstva? ${ROUND2}`,
        solution: `$m(t) = m_0\\cdot 2^{-t/${T}}$. Z podmienky $2^{-t/${T}} = ${dd(pc / 100)}$ logaritmovaním $t = ${T}\\cdot\\frac{\\ln(100/${pc})}{\\ln 2} \\approx ${dd(val)}$.`,
        hint: 'Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.'
      };
    }
    if (t < 0.4) {
      const To = pick([18, 20, 22, 25]), T0 = pick([80, 85, 90, 95, 100]), t1 = pick([5, 10, 15]);
      const T1 = To + Math.round((T0 - To) * (0.5 + 0.35 * Math.random()));
      const kTex = `\\frac{1}{${t1}}\\ln\\frac{${T0 - To}}{${T1 - To}}`, k = Math.log((T0 - To) / (T1 - To)) / t1;
      const intro = `Teleso s teplotou $${T0}${CEL}$ položíme do miestnosti s teplotou $${To}${CEL}$. Po $${t1}$ minútach má teplotu $${T1}${CEL}$.`;
      if (Math.random() < 0.5) {
        const t2 = rnd(t1 + 2, 4 * t1), val = To + (T0 - To) * Math.exp(-k * t2);
        return {
          answer: val, tol: 0.06, show: dt(val, 1),
          q: `${intro} Akú teplotu bude mať $${t2}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.`,
          solution: `Podľa Newtonovho zákona $T(t) = ${To} + ${T0 - To}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-${t1}k} = \\frac{${T1 - To}}{${T0 - To}}$, teda $k = ${kTex} \\approx ${dd(k, 4)}$.
            $T(${t2}) = ${To} + ${T0 - To}\\left(\\frac{${T1 - To}}{${T0 - To}}\\right)^{${t2}/${t1}} \\approx ${dd(val, 1)}${CEL}$.`,
          hint: 'Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.'
        };
      }
      const Ts = rnd(To + 4, T1 - 3), val = Math.log((T0 - To) / (Ts - To)) / k;
      return {
        answer: val, tol: 0.06, show: dt(val, 1),
        q: `${intro} Za koľko minút od položenia klesne teplota telesa na $${Ts}${CEL}$? Výsledok zaokrúhli na desatiny minúty.`,
        solution: `$T(t) = ${To} + ${T0 - To}\\,\\mathrm{e}^{-kt}$, z merania $k = ${kTex} \\approx ${dd(k, 4)}$.
          Z podmienky $${To} + ${T0 - To}\\,\\mathrm{e}^{-kt} = ${Ts}$ máme $t = \\frac{1}{k}\\ln\\frac{${T0 - To}}{${Ts - To}} = ${t1}\\cdot\\frac{\\ln(${T0 - To}/${Ts - To})}{\\ln(${T0 - To}/${T1 - To})} \\approx ${dd(val, 1)}$ minúty.`,
        hint: 'Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.'
      };
    }
    if (t < 0.6) {
      const K = pick([1000, 2000, 5000]), P0 = pick([50, 100, 200, 250]), r = pick([0.2, 0.3, 0.4, 0.5]);
      const A = (K - P0) / P0, rT = dd(r, 1);
      const intro = `Populácia sa riadi logistickou rovnicou $P' = ${rT}\\,P\\left(1 - \\frac{P}{${K}}\\right)$ ($t$ v rokoch), na začiatku má $${P0}$ jedincov.`;
      if (Math.random() < 0.5) {
        const tt = rnd(3, 12), val = K / (1 + A * Math.exp(-r * tt));
        return {
          answer: val, tol: 0.51, show: String(Math.round(val)),
          q: `${intro} Koľko jedincov bude mať populácia po $${tt}$ rokoch? Výsledok zaokrúhli na celé číslo.`,
          solution: `$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{${K - P0}}{${P0}} = ${dc3(A)}$.
            $P(${tt}) = \\frac{${K}}{1 + ${dc3(A)}\\,\\mathrm{e}^{-${dd(r * tt, 1)}}} \\approx ${dd(val, 1)}$, teda asi $${Math.round(val)}$ jedincov.`,
          hint: 'Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.'
        };
      }
      const val = Math.log(A) / r;
      return {
        answer: val, tol: T2, show: dt(val),
        q: `${intro} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? ${ROUND2}`,
        solution: `$P(t) = \\frac{${K}}{1 + A\\mathrm{e}^{-${rT}t}}$, $A = \\frac{${K - P0}}{${P0}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-${rT}t} = 1$,
          teda $t = \\frac{\\ln A}{${rT}} = \\frac{\\ln ${dc3(A)}}{${rT}} \\approx ${dd(val)}$ roka.`,
        hint: 'Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.'
      };
    }
    if (t < 0.8) {
      const V = pick([100, 200, 400, 500]), q = pick([2, 4, 5, 10]), c = pick([0, 0.1, 0.2, 0.25, 0.5]);
      let x0 = pick([0, 5, 10, 20, 40]);
      if (Math.abs(x0 - c * V) < 1e-9) x0 += 5;
      const tt = pick([10, 20, 30, 45, 60]), val = c * V + (x0 - c * V) * Math.exp(-q * tt / V);
      const rate = `rýchlosťou $${q}$ ${pl(q, ['liter', 'litre', 'litrov'])} za minútu`;
      const inflow = c === 0 ? `čistá voda ${rate}` : `roztok s koncentráciou $${dc3(c)}\\,\\mathrm{kg/l}$ ${rate}`;
      // x(t) = cV + (x0 - cV) e^{...}, pri c = 0 len x0 e^{...}
      const sol = (ex1) => (c === 0 ? `${x0}\\,${ex1}` : `${dc3(c * V)}${sg(dc3(x0 - c * V))}\\,${ex1}`);
      return {
        answer: val, tol: T2, show: dt(val),
        q: `Nádrž obsahuje $${V}$ litrov ${x0 === 0 ? 'čistej vody' : `roztoku, v ktorom je $${x0}\\,\\mathrm{kg}$ soli`}. Priteká do nej ${inflow}
          a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po $${tt}$ minútach? ${ROUND2}`,
        solution: `Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{${V}}$. Bilancia: $x' = ${c === 0 ? '' : dc3(c * q) + ' '}-\\frac{${q}}{${V}}x$, $x(0) = ${x0}$.
          Rovnovážna hodnota je $cV = ${dc3(c * V)}$, preto $x(t) = ${sol(`\\mathrm{e}^{-${q}t/${V}}`)}$ a
          $x(${tt}) = ${sol(`\\mathrm{e}^{-${dc3(q * tt / V)}}`)} \\approx ${dd(val)}\\,\\mathrm{kg}$.`,
        hint: 'Zostav bilanciu $x\' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.'
      };
    }
    const U = pick([5, 9, 12, 24]), R = pick([1, 2, 5, 10]), Cc = pick([10, 47, 100, 220]), tau = R * Cc;
    const intro = `Nenabitý kondenzátor s kapacitou $${Cc}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím $${U}\\,\\mathrm{V}$ cez rezistor s odporom $${R}\\,\\mathrm{k\\Omega}$.`;
    if (Math.random() < 0.5) {
      const tt = rnd(Math.max(1, Math.round(tau / 4)), 3 * tau), val = U * (1 - Math.exp(-tt / tau));
      return {
        answer: val, tol: T2, show: dt(val),
        q: `${intro} Aké napätie bude na kondenzátore $${tt}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.`,
        solution: `Časová konštanta $\\tau = RC = ${R}\\cdot 10^{3}\\,\\Omega\\cdot ${Cc}\\cdot 10^{-6}\\,\\mathrm{F} = ${tau}\\,\\mathrm{ms}$.
          $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = ${U}\\left(1 - \\mathrm{e}^{-${tt}/${tau}}\\right) \\approx ${dd(val)}\\,\\mathrm{V}$.`,
        hint: 'Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.'
      };
    }
    const pc = pick([50, 63, 80, 90, 95, 99]), val = tau * Math.log(100 / (100 - pc));
    return {
      answer: val, tol: T2, show: dt(val),
      q: `${intro} Za koľko milisekúnd dosiahne napätie na kondenzátore $${pc}\\,\\%$ napätia zdroja? ${ROUND2}`,
      solution: `$\\tau = RC = ${tau}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = ${dd(pc / 100)}$ máme $\\mathrm{e}^{-t/\\tau} = ${dd(1 - pc / 100)}$,
        teda $t = \\tau\\ln\\frac{100}{${100 - pc}} \\approx ${dd(val)}\\,\\mathrm{ms}$.`,
      hint: 'Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.'
    };
  });

  /* ======================= 7. LINEÁRNE ROVNICE 2. RÁDU – HOMOGÉNNE ======================= */

  fig('v3-rad2', {
    controls: [
      { id: 'p', label: 'Koeficient p', min: -1, max: 5, step: 0.5, value: 1 },
      { id: 'q', label: 'Koeficient q', min: -2, max: 10, step: 0.5, value: 4 }
    ],
    draw: (v) => {
      const p = plane(0, 10, -2.5, 2.5, 420, 280);
      const P = v.p, Q = v.q, D = P * P - 4 * Q;
      const pts = [[0, 1]];
      let y = 1, w = 0;
      const h = 10 / 600;
      for (let i = 1; i <= 600; i++) {
        const f = (yy, ww) => [ww, -P * ww - Q * yy];
        const a = f(y, w), b = f(y + h / 2 * a[0], w + h / 2 * a[1]), c = f(y + h / 2 * b[0], w + h / 2 * b[1]), d = f(y + h * c[0], w + h * c[1]);
        y += h / 6 * (a[0] + 2 * b[0] + 2 * c[0] + d[0]); w += h / 6 * (a[1] + 2 * b[1] + 2 * c[1] + d[1]);
        pts.push([i * h, y]);
        if (Math.abs(y) > 100) break;
      }
      let roots;
      if (D > 1e-9) roots = `λ₁ = ${sk((-P - Math.sqrt(D)) / 2)}, λ₂ = ${sk((-P + Math.sqrt(D)) / 2)} (rôzne reálne korene)`;
      else if (D > -1e-9) roots = `λ = ${sk(-P / 2)} (dvojnásobný koreň)`;
      else roots = `λ = ${sk(-P / 2)} ± ${sk(Math.sqrt(-D) / 2)}i (komplexné korene)`;
      return {
        svg: svg(p, axes(p, 1, 1), `<path class="f-accent" d="${ptsPath(p, pts)}"/><circle class="f-dot" cx="${n1(p.X(0))}" cy="${n1(p.Y(1))}" r="5"/>`, '', 'Riešenie rovnice y″ + py′ + qy = 0'),
        readout: `λ² ${P < 0 ? '−' : '+'} ${sk(Math.abs(P), 1)}λ ${Q < 0 ? '−' : '+'} ${sk(Math.abs(Q), 1)} = 0 · <span class="c-accent">${roots}</span>`
      };
    }
  });

  lesson({
    id: 'v3-charakteristicka', order: 70, title: 'Lineárne rovnice 2. rádu s konštantnými koeficientmi',
    summary: 'Fundamentálny systém, wronskián, charakteristická rovnica a tri typy jej koreňov.',
    theory: [
      `<p><strong>Lineárna homogénna rovnica 2. rádu</strong> $y'' + a_1(x)y' + a_0(x)y = 0$ so spojitými koeficientmi na intervale $I$ má tieto vlastnosti:</p>
       <ul><li><strong>Princíp superpozície:</strong> každá lineárna kombinácia riešení je opäť riešenie; riešenia tvoria vektorový priestor dimenzie $2$.</li>
       <li><strong>Fundamentálny systém</strong> je dvojica lineárne nezávislých riešení $y_1, y_2$; všeobecné riešenie je $y = C_1y_1 + C_2y_2$.</li>
       <li><strong>Wronskián</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$. Riešenia $y_1, y_2$ sú lineárne nezávislé práve vtedy,
       keď $W(x)\\neq 0$ (stačí v jednom bode). Platí <strong>Liouvilleov vzorec</strong> $W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$.</li></ul>`,
      `<p><strong>Konštantné koeficienty.</strong> Pre $y'' + py' + qy = 0$ skúsime $y = \\mathrm{e}^{\\lambda x}$. Po dosadení a vydelení $\\mathrm{e}^{\\lambda x}$ dostaneme
       <strong>charakteristickú rovnicu</strong> $\\lambda^{2} + p\\lambda + q = 0$. Podľa jej koreňov:</p>
       <table class="tbl"><tr><th>korene</th><th>fundamentálny systém</th><th>všeobecné riešenie</th></tr>
       <tr><td>$\\lambda_1\\neq\\lambda_2$ reálne</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>
       <tr><td>$\\lambda$ dvojnásobný</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>
       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>
       <p>Pri komplexných koreňoch vezmeme reálnu a imaginárnu časť komplexného riešenia $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$.
       Rovnaký postup funguje pre rovnice vyššieho rádu: $k$-násobnému koreňu $\\lambda$ zodpovedajú funkcie $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$.</p>`,
      { fig: 'v3-rad2', caption: 'Riešenie rovnice $y\'\' + py\' + qy = 0$ so začiatočnými podmienkami $y(0) = 1$, $y\'(0) = 0$. Pri komplexných koreňoch riešenie osciluje, pri reálnych nie; znamienko reálnej časti koreňov rozhoduje, či riešenie tlmí, alebo rastie.' }
    ],
    examples: [
      { task: 'Vyrieš Cauchyho úlohu $y\'\' - y\' - 6y = 0$, $y(0) = 1$, $y\'(0) = 8$.',
        steps: ['Charakteristická rovnica $\\lambda^{2} - \\lambda - 6 = 0$ má korene $\\lambda_1 = 3$, $\\lambda_2 = -2$.',
          'Všeobecné riešenie $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$, derivácia $y\' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$.',
          'Podmienky: $C_1 + C_2 = 1$, $3C_1 - 2C_2 = 8$, odkiaľ $C_1 = 2$, $C_2 = -1$.',
          '<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$.</strong>'] },
      { task: 'Nájdi fundamentálny systém rovnice $y\'\' + 4y\' + 13y = 0$ a vypočítaj jeho wronskián.',
        steps: ['$\\lambda^{2} + 4\\lambda + 13 = 0$, $D = 16 - 52 = -36$, korene $\\lambda = -2\\pm 3\\mathrm{i}$.',
          'Fundamentálny systém: $y_1 = \\mathrm{e}^{-2x}\\cos 3x$, $y_2 = \\mathrm{e}^{-2x}\\sin 3x$.',
          '$W = y_1y_2\' - y_1\'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.',
          '<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>, v súlade s Liouvilleovým vzorcom $W(x) = W(0)\\,\\mathrm{e}^{-4x}$.'] }
    ]
  });

  // náhodná charakteristická rovnica: { kind: 0 rôzne reálne, 1 dvojnásobný, 2 komplexné }
  const charCase = (kind, strict) => {
    if (kind === 0) {
      let r1, r2;
      do { r1 = rnd(-4, 4); r2 = rnd(-4, 4); } while (r1 === r2 || (strict && (r1 === 0 || r2 === 0 || r1 === -r2)));
      if (r1 < r2) [r1, r2] = [r2, r1];
      return { kind, r1, r2, p: -(r1 + r2), q: r1 * r2 };
    }
    if (kind === 1) {
      const r = strict ? nz(-3, 3) : rnd(-3, 3);
      return { kind, r, p: -2 * r, q: r * r };
    }
    let al, be;
    do { al = strict ? nz(-3, 3) : rnd(-3, 3); be = rnd(1, 3); } while (strict && Math.abs(al) === be);
    return { kind, al, be, p: -2 * al, q: al * al + be * be };
  };
  const Cexp = (C, r) => (r === 0 ? C : `${C}${ex(r)}`);
  const trig = (b) => [`\\cos ${cf(b, 'x')}`, `\\sin ${cf(b, 'x')}`];
  const genSol = (c) => {
    if (c.kind === 0) return `y = ${Cexp('C_1', c.r1)} + ${Cexp('C_2', c.r2)}`;
    if (c.kind === 1) return `y = (C_1 + C_2x)${ef(c.r)}`;
    const [co, si] = trig(c.be);
    return `y = ${ef(c.al)}${c.al === 0 ? '' : '('}C_1${co} + C_2${si}${c.al === 0 ? '' : ')'}`;
  };
  const rootsTex = (c) => (c.kind === 0 ? `$\\lambda_1 = ${c.r1}$, $\\lambda_2 = ${c.r2}$`
    : c.kind === 1 ? `$\\lambda = ${c.r}$ (dvojnásobný koreň)`
      : `$\\lambda = ${c.al === 0 ? '' : c.al}\\pm ${c.be === 1 ? '' : c.be}\\mathrm{i}$`);

  gen('v3-charakteristicka', () => {
    const t = Math.random();
    if (t < 0.25) {
      const c = charCase(0, false), m = pick([1, 1, 1, 2, 3]);
      const eq = `${m === 1 ? '' : m}y''${term(m * c.p, "y'")}${term(m * c.q, 'y')} = 0`;
      return {
        type: 'set', signed: true, answer: [c.r1, c.r2], placeholder: 'λ₁; λ₂',
        q: `Nájdi korene charakteristickej rovnice diferenciálnej rovnice $${eq}$. Zadaj ich oddelené bodkočiarkou.`,
        solution: `Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme ${m === 1 ? '' : `po vydelení číslom $${m}$ `}$${charEq(c.p, c.q)}$.
          Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = ${-c.p}$ a $\\lambda_1\\lambda_2 = ${c.q}$, korene sú ${rootsTex(c)}.
          Všeobecné riešenie je $${genSol(c)}$.`,
        hint: 'Zameň $y\'\'$ za $\\lambda^{2}$, $y\'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.'
      };
    }
    if (t < 0.5) {
      const c = charCase(rnd(0, 2), true);
      const ok = genSol(c);
      let wrong;
      if (c.kind === 0) {
        wrong = [genSol({ kind: 0, r1: -c.r1, r2: -c.r2 }), `y = (C_1 + C_2x)${ef(c.r1)}`,
          `y = ${ef(c.r1)}(C_1\\cos ${cf(Math.abs(c.r2), 'x')} + C_2\\sin ${cf(Math.abs(c.r2), 'x')})`];
      } else if (c.kind === 1) {
        wrong = [`y = C_1${ex(c.r)} + C_2${ex(-c.r)}`, `y = (C_1 + C_2x)${ef(-c.r)}`, `y = C_1${ex(c.r)} + C_2x^{2}${ef(c.r)}`];
      } else {
        const [co, si] = trig(Math.abs(c.al));
        wrong = [`y = ${ef(c.be)}(C_1${co} + C_2${si})`, genSol({ kind: 2, al: -c.al, be: c.be }), `y = C_1${ex(c.al)} + C_2${ex(c.be)}`];
      }
      return {
        type: 'choice', answer: `$${ok}$`, options: shuffle([ok, ...wrong].map((s) => `$${s}$`)),
        q: `Ktorá funkcia je všeobecným riešením rovnice $${lhs2(c.p, c.q)} = 0$?`,
        solution: `Charakteristická rovnica $${charEq(c.p, c.q)}$ má diskriminant $D = ${c.p * c.p - 4 * c.q}$ a korene ${rootsTex(c)}.
          ${['Pre dva rôzne reálne korene', 'Pre dvojnásobný koreň', 'Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$'][c.kind]} je všeobecné riešenie $${ok}$.`,
        hint: 'Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.'
      };
    }
    if (t < 0.78) {
      const c = charCase(rnd(0, 2), false);
      let C1, C2;
      do { C1 = rnd(-3, 3); C2 = rnd(-3, 3); } while (C1 === 0 && C2 === 0);
      let y0, y1, sys;
      if (c.kind === 0) {
        y0 = C1 + C2; y1 = c.r1 * C1 + c.r2 * C2;
        sys = `$C_1 + C_2 = ${y0}$ a $${lin([[c.r1, 'C_1'], [c.r2, 'C_2']])} = ${y1}$`;
      } else if (c.kind === 1) {
        y0 = C1; y1 = c.r * C1 + C2;
        sys = `$C_1 = ${y0}$ a $${lin([[c.r, 'C_1'], [1, 'C_2']])} = ${y1}$`;
      } else {
        y0 = C1; y1 = c.al * C1 + c.be * C2;
        sys = `$C_1 = ${y0}$ a $${lin([[c.al, 'C_1'], [c.be, 'C_2']])} = ${y1}$`;
      }
      return {
        type: 'tuple', signed: true, answer: [C1, C2], placeholder: 'C₁; C₂',
        q: `Riešenie Cauchyho úlohy $${lhs2(c.p, c.q)} = 0$, $y(0) = ${y0}$, $y'(0) = ${y1}$ zapíšeme v tvare $${genSol(c)}$. Urči $C_1$ a $C_2$.`,
        solution: `Charakteristická rovnica $${charEq(c.p, c.q)}$ má korene ${rootsTex(c)}, preto $${genSol(c)}$.
          Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu ${sys}, ktorej riešenie je $C_1 = ${C1}$, $C_2 = ${C2}$.`,
        hint: 'Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y\'$ a vyrieš sústavu dvoch lineárnych rovníc.'
      };
    }
    const c = charCase(rnd(0, 2), true);
    let K, m, pair, calc;
    if (c.kind === 0) {
      K = c.r2 - c.r1; m = c.r1 + c.r2; pair = `y_1 = ${ex(c.r1)}$, $y_2 = ${ex(c.r2)}`;
      calc = `W = ${ex(c.r1)}\\cdot ${c.r2}${ef(c.r2)} - ${c.r1}${ef(c.r1)}\\cdot ${ex(c.r2)} = ${m === 0 ? `${c.r2} - ${par(c.r1)}` : `(${c.r2} - ${par(c.r1)})\\,${ef(m)}`}`;
    } else if (c.kind === 1) {
      K = 1; m = 2 * c.r; pair = `y_1 = ${ex(c.r)}$, $y_2 = x${ef(c.r)}`;
      calc = `W = ${ex(c.r)}(1${term(c.r, 'x')})${ef(c.r)} - ${c.r}x${ef(c.r)}\\cdot ${ex(c.r)} = ${ef(m)}`;
    } else {
      const [co, si] = trig(c.be);
      K = c.be; m = 2 * c.al; pair = `y_1 = ${ef(c.al)}${co}$, $y_2 = ${ef(c.al)}${si}`;
      calc = `W = ${ef(m)}\\left[${c.be}\\cos^{2} ${cf(c.be, 'x')} + ${c.be}\\sin^{2} ${cf(c.be, 'x')}\\right] = ${c.be}\\,${ef(m)}`;
    }
    return {
      type: 'tuple', signed: true, answer: [K, m], placeholder: 'K; m',
      q: `Funkcie $${pair}$ tvoria fundamentálny systém rovnice $${lhs2(c.p, c.q)} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.`,
      solution: `$${calc}$, teda $K = ${K}$ a $m = ${m}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = ${c.p}$.`,
      hint: 'Použi $W = y_1y_2\' - y_1\'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.'
    };
  });

  /* ======================= 8. NEHOMOGÉNNE ROVNICE 2. RÁDU ======================= */

  lesson({
    id: 'v3-nehomogenne', order: 80, title: 'Nehomogénne rovnice 2. rádu',
    summary: 'Štruktúra riešenia $y = y_h + y_p$, metóda neurčitých koeficientov pre špeciálnu pravú stranu a variácia konštánt.',
    theory: [
      `<p>Všeobecné riešenie rovnice $y'' + py' + qy = f(x)$ je $y = y_h + y_p$, kde $y_h = C_1y_1 + C_2y_2$ je všeobecné riešenie príslušnej homogénnej rovnice
       a $y_p$ je ľubovoľné jedno (partikulárne) riešenie nehomogénnej rovnice. Ak $f = f_1 + f_2$, môžeme partikulárne riešenia pre $f_1$ a $f_2$
       hľadať zvlášť a sčítať (<strong>princíp superpozície</strong>).</p>`,
      `<p><strong>Metóda neurčitých koeficientov</strong> (špeciálna pravá strana). Ak $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$
       s polynómami $P_m, Q_n$, partikulárne riešenie hľadáme v tvare
       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$
       kde $R_N, S_N$ sú polynómy stupňa $N$ s neznámymi koeficientmi a $k$ je násobnosť čísla $\\alpha + \\beta\\mathrm{i}$ ako koreňa charakteristickej rovnice
       ($k = 0$, ak koreňom nie je). Koeficienty určíme dosadením do rovnice a porovnaním.</p>
       <table class="tbl"><tr><th>pravá strana $f(x)$</th><th>tvar $y_p$ (ak nejde o rezonanciu)</th></tr>
       <tr><td>$ax + b$</td><td>$Ax + B$ (ak $q\\neq 0$)</td></tr>
       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>
       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>
       <p>Ak je $\\alpha + \\beta\\mathrm{i}$ koreňom charakteristickej rovnice (<strong>rezonancia</strong>), tvar vynásobíme $x$, pri dvojnásobnom koreni $x^{2}$.</p>`,
      `<p><strong>Variácia konštánt</strong> funguje pre ľubovoľnú spojitú pravú stranu. Riešenie hľadáme v tvare $y = C_1(x)y_1 + C_2(x)y_2$ s podmienkou
       $C_1'y_1 + C_2'y_2 = 0$. Dosadením dostaneme sústavu
       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$
       ktorej riešenie je $C_1' = -\\frac{y_2 f}{W}$, $C_2' = \\frac{y_1 f}{W}$, kde $W$ je wronskián. Metódu potrebujeme napríklad pri pravých stranách
       $\\frac{1}{\\cos x}$, $\\mathrm{tg}\\,x$, $\\ln x$ alebo $\\frac{\\mathrm{e}^{x}}{x}$.</p>`
    ],
    examples: [
      { task: 'Nájdi všeobecné riešenie rovnice $y\'\' - 3y\' + 2y = \\mathrm{e}^{x}$.',
        steps: ['$\\lambda^{2} - 3\\lambda + 2 = 0$ má korene $1$ a $2$, teda $y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$.',
          'Číslo $\\alpha = 1$ je jednoduchý koreň (rezonancia), preto $y_p = Ax\\mathrm{e}^{x}$. Potom $y_p\' = A(1 + x)\\mathrm{e}^{x}$, $y_p\'\' = A(2 + x)\\mathrm{e}^{x}$.',
          'Dosadíme: $A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$, teda $A = -1$.',
          '<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$.</strong>'] },
      { task: 'Metódou variácie konštánt vyrieš rovnicu $y\'\' + y = \\dfrac{1}{\\cos x}$ na intervale $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$.',
        steps: ['$y_1 = \\cos x$, $y_2 = \\sin x$, $W = \\cos^{2} x + \\sin^{2} x = 1$.',
          '$C_1\' = -\\frac{\\sin x}{\\cos x}$, teda $C_1 = \\ln(\\cos x) + K_1$; $C_2\' = \\frac{\\cos x}{\\cos x} = 1$, teda $C_2 = x + K_2$.',
          '<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$.</strong>'] }
    ]
  });

  gen('v3-nehomogenne', () => {
    const t = Math.random();
    if (t < 0.22) {
      const p = rnd(-4, 4), q = nz(-4, 4), A = nz(-3, 3), B = rnd(-3, 3);
      if (Math.random() < 0.5) {
        const rhs = poly([q * A, q * B + p * A]);
        return {
          type: 'tuple', signed: true, answer: [A, B], placeholder: 'A; B',
          q: `Partikulárne riešenie rovnice $${lhs2(p, q)} = ${rhs}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.`,
          solution: `$y_p' = A$, $y_p'' = 0$. Dosadíme: $${p === 0 ? '' : `${cf(p, 'A')} `}${p === 0 ? cf(q, '(Ax + B)') : sg(cf(q, '(Ax + B)')).trim()} = ${rhs}$.
            Porovnaním koeficientov: pri $x$ je $${cf(q, 'A')} = ${q * A}$, teda $A = ${A}$; absolútny člen $${lin([[p, 'A'], [q, 'B']])} = ${q * B + p * A}$, teda $B = ${B}$.`,
          hint: 'Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.'
        };
      }
      const C = rnd(-3, 3), rhs = poly([q * A, 2 * p * A + q * B, 2 * A + p * B + q * C]);
      return {
        type: 'tuple', signed: true, answer: [A, B, C], placeholder: 'A; B; C',
        q: `Partikulárne riešenie rovnice $${lhs2(p, q)} = ${rhs}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.`,
        solution: `$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov:
          pri $x^{2}$: $${cf(q, 'A')} = ${q * A}$, $A = ${A}$; pri $x$: $${lin([[2 * p, 'A'], [q, 'B']])} = ${2 * p * A + q * B}$, $B = ${B}$;
          absolútny člen: $${lin([[2, 'A'], [p, 'B'], [q, 'C']])} = ${2 * A + p * B + q * C}$, $C = ${C}$.`,
        hint: 'Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.'
      };
    }
    if (t < 0.42) {
      let p, q, c, P;
      do { p = rnd(-4, 4); q = rnd(-4, 4); c = nz(-3, 3); P = c * c + p * c + q; } while (P === 0);
      const A = nz(-3, 3), k = A * P;
      return {
        signed: true, answer: A,
        q: `Rovnica $${lhs2(p, q)} = ${cf(k, ex(c))}$ má partikulárne riešenie tvaru $y_p = A${ex(c)}$. Urči $A$.`,
        solution: `Číslo $${c}$ nie je koreňom charakteristickej rovnice, lebo $${par(c)}^{2}${term(p, `\\cdot ${par(c)}`)}${term(q)} = ${P}\\neq 0$.
          Pre $y_p = A${ex(c)}$ je $y_p' = ${c}A${ex(c)}$ a $y_p'' = ${c * c}A${ex(c)}$, po dosadení $A\\cdot ${par(P)}\\,${ex(c)} = ${k}${ex(c)}$, teda $A = ${A}$.`,
        hint: 'Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.'
      };
    }
    if (t < 0.6) {
      let r1, r2;
      do { r1 = nz(-3, 3); r2 = rnd(-3, 3); } while (r1 === r2);
      const p = -(r1 + r2), q = r1 * r2, A = nz(-3, 3), k = A * (r1 - r2);
      return {
        signed: true, answer: A,
        q: `Rovnica $${lhs2(p, q)} = ${cf(k, ex(r1))}$ má partikulárne riešenie tvaru $y_p = Ax${ex(r1)}$. Urči $A$.`,
        solution: `Charakteristická rovnica $${charEq(p, q)}$ má korene $${r1}$ a $${r2}$, takže $${r1}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$.
          $y_p' = A(1${term(r1, 'x')})${ex(r1)}$, $y_p'' = A(${2 * r1}${term(r1 * r1, 'x')})${ex(r1)}$. Po dosadení sa členy s $x$ odčítajú a zostane
          $A(2\\cdot ${par(r1)}${term(p)})${ex(r1)} = ${r1 - r2}A${ex(r1)} = ${k}${ex(r1)}$, teda $A = ${A}$.`,
        hint: 'Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.'
      };
    }
    if (t < 0.8) {
      let p, q, w;
      do { p = rnd(-3, 3); q = rnd(-4, 9); w = rnd(1, 3); } while (q === w * w && p === 0);
      let A, B;
      do { A = rnd(-3, 3); B = rnd(-3, 3); } while (A === 0 && B === 0);
      const u = q - w * w, Kc = u * A + p * w * B, Ks = u * B - p * w * A;
      const [co, si] = [`\\cos ${cf(w, 'x')}`, `\\sin ${cf(w, 'x')}`];
      const rhs = lin([[Kc, co], [Ks, si]]);
      return {
        type: 'tuple', signed: true, answer: [A, B], placeholder: 'A; B',
        q: `Partikulárne riešenie rovnice $${lhs2(p, q)} = ${rhs}$ hľadáme v tvare $y_p = A${co} + B${si}$. Urči $A$ a $B$.`,
        solution: `${p === 0 ? `Keďže $${w * w}\\neq ${q}$, nejde o rezonanciu.` : `Číslo $${w === 1 ? '' : w}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.`}
          $y_p'' = -${w * w}y_p$ a $y_p' = ${w === 1 ? '' : w}(-A${si} + B${co})$. Po dosadení porovnáme koeficienty:
          pri $${co}$: $${lin([[u, 'A'], [p * w, 'B']])} = ${Kc}$, pri $${si}$: $${lin([[-p * w, 'A'], [u, 'B']])} = ${Ks}$.
          Riešenie sústavy je $A = ${A}$, $B = ${B}$.`,
        hint: 'Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.'
      };
    }
    // výber tvaru partikulárneho riešenia
    const dbl = Math.random() < 0.3;
    let r1, r2;
    if (dbl) { r1 = r2 = rnd(-2, 2); } else { do { r1 = rnd(-3, 3); r2 = rnd(-3, 3); } while (r1 === r2); }
    const p = -(r1 + r2), q = r1 * r2;
    const roll = Math.random(), c = roll < 0.4 ? r1 : roll < 0.6 && !dbl ? r2 : (() => { let v; do { v = rnd(-3, 3); } while (v === r1 || v === r2); return v; })();
    const s = (c === r1 ? 1 : 0) + (c === r2 ? 1 : 0);
    const deg = rnd(0, 1), k = nz(-5, 5), e = ef(c);
    const rhs = deg === 0 ? (c === 0 ? String(k) : cf(k, e)) : `${c === 0 ? '' : '('}${lin([[k, 'x'], [nz(-4, 4), '']])}${c === 0 ? '' : ')'}${e}`;
    const forms = deg === 0
      ? [`A${e}`, `Ax${e}`, `Ax^{2}${e}`, `(Ax + B)${e}`]
      : [`(Ax + B)${e}`, `x(Ax + B)${e}`, `x^{2}(Ax + B)${e}`, `Ax${e}`];
    const ok = forms[s];
    return {
      type: 'choice', answer: `$y_p = ${ok}$`, options: shuffle(forms.map((f) => `$y_p = ${f}$`)),
      q: `V akom tvare treba hľadať partikulárne riešenie rovnice $${lhs2(p, q)} = ${rhs}$ metódou neurčitých koeficientov?`,
      solution: `Charakteristická rovnica $${charEq(p, q)}$ má ${dbl ? `dvojnásobný koreň $${r1}$` : `korene $${r1}$ a $${r2}$`}.
        Pravá strana je ${deg === 0 ? 'konštanta' : 'polynóm 1. stupňa'}${c === 0 ? '' : ` krát $${e}$`}, teda $\\alpha = ${c}$, a to ${s === 0 ? 'nie je koreňom' : s === 1 ? 'je jednoduchým koreňom' : 'je dvojnásobným koreňom'} charakteristickej rovnice ($k = ${s}$).
        Preto $y_p = ${ok}$.`,
      hint: 'Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.'
    };
  });

  /* ======================= 9. KMITANIE ======================= */

  fig('v3-tlmenie', {
    controls: [{ id: 'd', label: 'Koeficient útlmu δ', min: 0, max: 3.5, step: 0.1, value: 0.4 }],
    draw: (v) => {
      const p = plane(0, 10, -1.2, 1.2, 420, 260);
      const w0 = 2, d = v.d;
      let x, regime;
      if (d < w0 - 1e-9) {
        const wd = Math.sqrt(w0 * w0 - d * d);
        x = (t) => Math.exp(-d * t) * (Math.cos(wd * t) + d / wd * Math.sin(wd * t));
        regime = d === 0 ? 'netlmené kmity, ω₀ = 2' : `podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = ${sk(wd)}`;
      } else if (d <= w0 + 1e-9) {
        x = (t) => (1 + d * t) * Math.exp(-d * t);
        regime = 'kritické tlmenie: najrýchlejší návrat bez kmitov';
      } else {
        const s = Math.sqrt(d * d - w0 * w0), l1 = -d + s, l2 = -d - s;
        x = (t) => (l2 * Math.exp(l1 * t) - l1 * Math.exp(l2 * t)) / (l2 - l1);
        regime = 'nadkritické tlmenie: aperiodický pohyb';
      }
      let clipped = '';
      if (d > 0 && d < w0) {
        clipped += `<path class="f-dash" d="${curvePath(p, (t) => Math.exp(-d * t))}"/><path class="f-dash" d="${curvePath(p, (t) => -Math.exp(-d * t))}"/>`;
      }
      clipped += `<path class="f-accent" d="${curvePath(p, x, 0, 10, 400)}"/><circle class="f-dot" cx="${n1(p.X(0))}" cy="${n1(p.Y(1))}" r="5"/>`;
      return {
        svg: svg(p, axes(p, 1, 1), clipped, '', 'Tlmený harmonický oscilátor'),
        readout: `x″ + ${sk(2 * d, 1)}x′ + 4x = 0 · δ = ${sk(d, 1)}, ω₀ = 2 · <span class="c-accent">${regime}</span>`
      };
    }
  });

  fig('v3-rezonancia', {
    controls: [{ id: 'd', label: 'Koeficient útlmu δ', min: 0.1, max: 2, step: 0.05, value: 0.25 }],
    draw: (v) => {
      const p = plane(0, 4.5, 0, 2.5, 420, 260);
      const w0 = 2, d = v.d;
      const amp = (w) => 1 / Math.sqrt((w0 * w0 - w * w) ** 2 + 4 * d * d * w * w);
      const wr = w0 * w0 > 2 * d * d ? Math.sqrt(w0 * w0 - 2 * d * d) : 0;
      const clipped = `<line class="f-dash" x1="${n1(p.X(2))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(2))}" y2="${n1(p.Y(2.5))}"/>
        <path class="f-accent" d="${curvePath(p, amp, 0, 4.5, 400)}"/>
        <circle class="f-dot" cx="${n1(p.X(wr))}" cy="${n1(p.Y(Math.min(amp(wr), 2.6)))}" r="5"/>`;
      return {
        svg: svg(p, axes(p, 1, 1), clipped, '', 'Amplitúda vynútených kmitov v závislosti od frekvencie'),
        readout: `ω₀ = 2, δ = ${sk(d)} · <span class="c-accent">maximum pri ω = ${sk(wr)}, amplitúda ${sk(amp(wr))}</span> (pre F₀/m = 1)`
      };
    }
  });

  lesson({
    id: 'v3-kmitanie', order: 90, title: 'Kmitanie: netlmené, tlmené a vynútené',
    summary: 'Rovnica $mx\'\' + cx\' + kx = F(t)$, podkritické, kritické a nadkritické tlmenie, vynútené kmity a rezonancia.',
    theory: [
      `<p>Teleso s hmotnosťou $m$ na pružine s tuhosťou $k$, tlmené silou úmernou rýchlosti (koeficient $c$) a poháňané vonkajšou silou $F(t)$, sa riadi rovnicou
       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$
       kde $\\omega_0 = \\sqrt{k/m}$ je <strong>vlastná uhlová frekvencia</strong> a $\\delta = \\frac{c}{2m}$ <strong>koeficient útlmu</strong>.
       Rovnaká rovnica opisuje náboj v sériovom $RLC$ obvode: $Lq'' + Rq' + \\frac{1}{C}q = U(t)$.</p>
       <p><strong>Netlmené kmity</strong> ($c = 0$, $F = 0$): $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$ s amplitúdou
       $A = \\sqrt{C_1^{2} + C_2^{2}}$ a periódou $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$.</p>`,
      `<p><strong>Tlmené kmity</strong> ($F = 0$). Charakteristická rovnica $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$ má korene $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$:</p>
       <ul><li>$\\delta \\lt \\omega_0$ (<strong>podkritické tlmenie</strong>, $c^{2} \\lt 4mk$): $x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$,
       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$; kmity s exponenciálne klesajúcou amplitúdou;</li>
       <li>$\\delta = \\omega_0$ (<strong>kritické tlmenie</strong>, $c = 2\\sqrt{mk}$): $x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$;</li>
       <li>$\\delta \\gt \\omega_0$ (<strong>nadkritické tlmenie</strong>): súčet dvoch klesajúcich exponenciál, aperiodický pohyb.</li></ul>`,
      { fig: 'v3-tlmenie', caption: 'Výchylka $x(t)$ pre $\\omega_0 = 2$, $x(0) = 1$, $x\'(0) = 0$. Prerušované krivky $\\pm\\mathrm{e}^{-\\delta t}$ ohraničujú tlmené kmity. Pri $\\delta = 2$ nastáva kritické tlmenie.' },
      `<p><strong>Vynútené kmity</strong>, $F(t) = F_0\\cos\\omega t$. Bez tlmenia a pre $\\omega\\neq\\omega_0$ je partikulárne riešenie
       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$. Pri $\\omega = \\omega_0$ nastáva <strong>rezonancia</strong>: $x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$
       a amplitúda neohraničene rastie. S tlmením sa voľné kmity utlmia a zostane ustálený stav s amplitúdou
       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}},$$
       ktorá je najväčšia pri $\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$ (ak $\\omega_0^{2} \\gt 2\\delta^{2}$).</p>`,
      { fig: 'v3-rezonancia', caption: 'Rezonančná krivka $A(\\omega)$ pre $\\omega_0 = 2$ a $F_0/m = 1$. Pri malom tlmení je maximum ostré a blízko vlastnej frekvencie (prerušovaná čiara).' }
    ],
    examples: [
      { task: 'Teleso s hmotnosťou $1\\,\\mathrm{kg}$ na pružine s tuhosťou $16\\,\\mathrm{N/m}$ je tlmené s koeficientom $c = 4\\,\\mathrm{kg/s}$. Na začiatku je vychýlené o $0{,}1\\,\\mathrm{m}$ a pustené z pokoja. Nájdi $x(t)$.',
        steps: ['$x\'\' + 4x\' + 16x = 0$, teda $\\delta = 2$, $\\omega_0 = 4$. Keďže $\\delta \\lt \\omega_0$, ide o podkritické tlmenie.',
          'Korene $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$, $\\omega_d = 2\\sqrt{3}$, $x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$.',
          '$x(0) = C_1 = 0{,}1$; $x\'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$, teda $C_2 = \\frac{0{,}1}{\\sqrt{3}}$.',
          '<strong>$x(t) = 0{,}1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$.</strong>'] },
      { task: 'Vyrieš úlohu $x\'\' + 9x = 6\\cos 3t$, $x(0) = 0$, $x\'(0) = 0$.',
        steps: ['Budiaca frekvencia sa rovná vlastnej ($\\omega = \\omega_0 = 3$), nastáva rezonancia: $x_p = t(A\\cos 3t + B\\sin 3t)$.',
          'Dosadením vyjde $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$, teda $A = 0$, $B = 1$, $x_p = t\\sin 3t$.',
          'Všeobecné riešenie $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$; z podmienok $C_1 = 0$ a $3C_2 = 0$.',
          '<strong>$x(t) = t\\sin 3t$</strong>, amplitúda rastie lineárne s časom.'] }
    ]
  });

  const REGIMES = ['podkritické tlmenie (tlmené kmity)', 'kritické tlmenie', 'nadkritické tlmenie (aperiodický pohyb)'];

  gen('v3-kmitanie', () => {
    const t = Math.random();
    if (t < 0.22) {
      const m = pick([1, 2, 4]), w0 = rnd(2, 5), k = m * w0 * w0, cc = 2 * m * w0;
      const kind = rnd(0, 2), c = kind === 1 ? cc : kind === 0 ? rnd(1, cc - 1) : cc + rnd(1, 8);
      return {
        type: 'choice', options: [...REGIMES], answer: REGIMES[kind],
        q: `Pohyb telesa sa riadi rovnicou $${m === 1 ? '' : m}x'' + ${c}x' + ${k}x = 0$ (hmotnosť $${m}\\,\\mathrm{kg}$, tlmenie $${c}\\,\\mathrm{kg/s}$, tuhosť $${k}\\,\\mathrm{N/m}$). O aký typ pohybu ide?`,
        solution: `Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = ${c * c}$, $4mk = ${4 * m * k}$.
          ${kind === 0 ? `Keďže $c^{2} \\lt 4mk$` : kind === 1 ? 'Keďže $c^{2} = 4mk$' : 'Keďže $c^{2} \\gt 4mk$'}, ide o ${REGIMES[kind]}.
          (Ekvivalentne $\\delta = \\frac{c}{2m} = ${dc3(c / (2 * m))}$ a $\\omega_0 = \\sqrt{k/m} = ${w0}$.)`,
        hint: 'Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.'
      };
    }
    if (t < 0.42) {
      if (Math.random() < 0.5) {
        const m = pick([0.5, 1, 2, 4, 5]), k = pick([8, 10, 20, 50, 100, 200]), T = 2 * Math.PI * Math.sqrt(m / k);
        return {
          answer: T, tol: T2, show: dt(T),
          q: `Teleso s hmotnosťou $${dc3(m)}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou $${k}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? ${ROUND2}`,
          solution: `Rovnica $${dc3(m)}x'' + ${k}x = 0$ má $\\omega_0 = \\sqrt{\\frac{${k}}{${dc3(m)}}} \\approx ${dd(Math.sqrt(k / m), 3)}\\,\\mathrm{s^{-1}}$.
            Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx ${dd(T)}\\,\\mathrm{s}$.`,
          hint: 'Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.'
        };
      }
      const w0 = rnd(2, 5), x0 = nz(-4, 4), v0 = nz(-12, 12), A = Math.sqrt(x0 * x0 + (v0 / w0) ** 2);
      return {
        answer: A, tol: T2, show: dt(A),
        q: `Netlmený oscilátor $x'' + ${w0 * w0}x = 0$ má začiatočné podmienky $x(0) = ${x0}$, $x'(0) = ${v0}$. Urči amplitúdu kmitov. ${ROUND2}`,
        solution: `$\\omega_0 = ${w0}$, riešenie $x = C_1\\cos ${w0}t + C_2\\sin ${w0}t$ s $C_1 = x(0) = ${x0}$ a $${w0}C_2 = x'(0) = ${v0}$, teda $C_2 = ${fTex(v0, w0)}$.
          Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{${x0 * x0} + ${fTex(v0 * v0, w0 * w0)}} \\approx ${dd(A)}$.`,
        hint: 'Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.'
      };
    }
    if (t < 0.6) {
      const m = pick([1, 2]), d = rnd(1, 3), w0 = rnd(d + 1, d + 5), c = 2 * m * d, k = m * w0 * w0, wd = Math.sqrt(w0 * w0 - d * d);
      return {
        answer: wd, tol: T2, show: dt(wd),
        q: `Tlmený oscilátor sa riadi rovnicou $${m === 1 ? '' : m}x'' + ${c}x' + ${k}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. ${ROUND2}`,
        solution: `${m === 1 ? '' : `Po vydelení číslom $${m}$: $x'' + ${c / m}x' + ${w0 * w0}x = 0$. `}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = ${2 * d}$, $\\delta = ${d}$ a $\\omega_0^{2} = ${w0 * w0}$.
          Korene charakteristickej rovnice sú $-${d}\\pm\\mathrm{i}\\sqrt{${w0 * w0} - ${d * d}}$, preto $\\omega_d = \\sqrt{${w0 * w0 - d * d}} \\approx ${dd(wd)}$.`,
        hint: 'Prepíš rovnicu na tvar $x\'\' + 2\\delta x\' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.'
      };
    }
    if (t < 0.8) {
      const w0 = rnd(2, 6), F = rnd(1, 20);
      let w; do { w = rnd(1, 7); } while (w === w0);
      const den = w0 * w0 - w * w;
      return {
        signed: true, answer: F / den, show: fTxt(F, den), tol: 1e-4,
        q: `Netlmený oscilátor je budený periodickou silou: $x'' + ${w0 * w0}x = ${cf(F, `\\cos ${cf(w, 't')}`)}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos ${cf(w, 't')}$. Urči $A$ (ako zlomok alebo celé číslo).`,
        solution: `Dosadíme $x_p = A\\cos ${cf(w, 't')}$: $x_p'' = -${w * w}A\\cos ${cf(w, 't')}$, teda $(${w0 * w0} - ${w * w})A = ${F}$ a $A = ${fTex(F, den)}$.
          ${den < 0 ? 'Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).' : 'Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.'}`,
        hint: 'Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.'
      };
    }
    const w0 = rnd(1, 5), F = nz(-12, 12), isCos = Math.random() < 0.5;
    const B = isCos ? F / (2 * w0) : -F / (2 * w0);
    const fn = isCos ? '\\cos' : '\\sin', other = isCos ? '\\sin' : '\\cos';
    return {
      signed: true, answer: B, show: fTxt(isCos ? F : -F, 2 * w0), tol: 1e-4,
      q: `Rovnica $x'' + ${w0 * w0}x = ${cf(F, `${fn} ${cf(w0, 't')}`)}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt${other} ${cf(w0, 't')}$. Urči $B$.`,
      solution: `Pre $x_p = Bt${other} ${cf(w0, 't')}$ je $x_p'' + ${w0 * w0}x_p = ${isCos ? '' : '-'}${2 * w0}B${fn} ${cf(w0, 't')}$ (členy s $t$ sa odčítajú).
        Porovnaním $${isCos ? '' : '-'}${2 * w0}B = ${F}$, teda $B = ${fTex(isCos ? F : -F, 2 * w0)}$. Amplitúda $|B|t$ rastie lineárne s časom.`,
      hint: 'Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.'
    };
  });

  /* ======================= 10. SÚSTAVY LINEÁRNYCH ROVNÍC ======================= */

  // typ rovnovážneho bodu sústavy x' = Ax podľa stopy a determinantu
  const classify = (a, b, c, d) => {
    const T = a + d, D = a * d - b * c, disc = T * T - 4 * D;
    if (Math.abs(D) < 1e-9) return 'neizolovaný rovnovážny bod (det A = 0)';
    if (D < 0) return 'sedlo';
    if (Math.abs(disc) < 1e-9) return T < 0 ? 'stabilný degenerovaný uzol' : 'nestabilný degenerovaný uzol';
    if (disc > 0) return T < 0 ? 'stabilný uzol' : 'nestabilný uzol';
    if (Math.abs(T) < 1e-9) return 'stred';
    return T < 0 ? 'stabilné ohnisko' : 'nestabilné ohnisko';
  };

  fig('v3-fazovy', {
    controls: [
      { id: 'a', label: 'a₁₁', min: -3, max: 3, step: 0.5, value: 1 },
      { id: 'b', label: 'a₁₂', min: -3, max: 3, step: 0.5, value: 2 },
      { id: 'c', label: 'a₂₁', min: -3, max: 3, step: 0.5, value: 2 },
      { id: 'd', label: 'a₂₂', min: -3, max: 3, step: 0.5, value: 1 }
    ],
    draw: (v) => {
      const p = plane(-4, 4, -4, 4, 360, 360);
      const { a, b, c, d } = v;
      const F = (x, y) => [a * x + b * y, c * x + d * y];
      const back = axes(p, 2, 2) + field(p, F, 15, 15);
      let clipped = '';
      const T = a + d, D = a * d - b * c, disc = T * T - 4 * D;
      if (disc > 1e-9 && Math.abs(D) > 1e-9) {
        [(T + Math.sqrt(disc)) / 2, (T - Math.sqrt(disc)) / 2].forEach((l) => {
          let vx = b, vy = l - a;
          if (Math.abs(vx) < 1e-9 && Math.abs(vy) < 1e-9) { vx = l - d; vy = c; }
          if (Math.abs(vx) < 1e-9 && Math.abs(vy) < 1e-9) return;
          const s = 10 / Math.hypot(vx, vy);
          clipped += `<line class="f-warn" x1="${n1(p.X(-vx * s))}" y1="${n1(p.Y(-vy * s))}" x2="${n1(p.X(vx * s))}" y2="${n1(p.Y(vy * s))}"/>`;
        });
      }
      const starts = [];
      for (let i = 0; i < 12; i++) starts.push([3.6 * Math.cos(i * Math.PI / 6 + 0.2), 3.6 * Math.sin(i * Math.PI / 6 + 0.2)]);
      for (let i = 0; i < 4; i++) starts.push([1.2 * Math.cos(i * Math.PI / 2 + 0.7), 1.2 * Math.sin(i * Math.PI / 2 + 0.7)]);
      const h = 0.02;
      const step = (x, y, s) => {
        const k1 = F(x, y), k2 = F(x + s * h / 2 * k1[0], y + s * h / 2 * k1[1]);
        const k3 = F(x + s * h / 2 * k2[0], y + s * h / 2 * k2[1]), k4 = F(x + s * h * k3[0], y + s * h * k3[1]);
        return [x + s * h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]), y + s * h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])];
      };
      starts.forEach(([x0, y0]) => {
        [1, -1].forEach((s) => {
          let x = x0, y = y0, dpath = `M${n1(p.X(x))} ${n1(p.Y(y))}`, mid = null;
          for (let k = 0; k < 400; k++) {
            [x, y] = step(x, y, s);
            if (!Number.isFinite(x) || Math.hypot(x, y) > 7 || Math.hypot(x, y) < 0.02) break;
            dpath += `L${n1(p.X(x))} ${n1(p.Y(y))}`;
            if (k === 25 && s === 1) mid = [x, y];
          }
          clipped += `<path class="f-accent" style="stroke-width:1.6" d="${dpath}"/>`;
          if (mid && Math.hypot(mid[0], mid[1]) < 4.2) {
            const [fx, fy] = F(mid[0], mid[1]), u = fx, w = -fy, L = Math.hypot(u, w);
            if (L > 1e-9) {
              const ux = u / L, uy = w / L, X0 = p.X(mid[0]), Y0 = p.Y(mid[1]);
              clipped += `<polygon class="f-solid" points="${n1(X0 + 6 * ux)},${n1(Y0 + 6 * uy)} ${n1(X0 - 4 * ux - 4 * uy)},${n1(Y0 - 4 * uy + 4 * ux)} ${n1(X0 - 4 * ux + 4 * uy)},${n1(Y0 - 4 * uy - 4 * ux)}"/>`;
            }
          }
        });
      });
      clipped += `<circle class="f-dot" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" r="4"/>`;
      let eig;
      if (disc >= -1e-9) eig = `λ₁ = ${sk((T + Math.sqrt(Math.max(disc, 0))) / 2)}, λ₂ = ${sk((T - Math.sqrt(Math.max(disc, 0))) / 2)}`;
      else eig = `λ = ${sk(T / 2)} ± ${sk(Math.sqrt(-disc) / 2)}i`;
      return {
        svg: svg(p, back, clipped, '', 'Fázový portrét lineárnej sústavy'),
        readout: `tr A = ${sk(T, 1)}, det A = ${sk(D)} · ${eig} · <span class="c-accent">${classify(a, b, c, d)}</span>`
      };
    }
  });

  lesson({
    id: 'v3-sustavy', order: 100, title: 'Sústavy lineárnych diferenciálnych rovníc a fázový portrét',
    summary: 'Sústava $\\mathbf{x}\' = A\\mathbf{x}$, riešenie pomocou vlastných čísel a vektorov, klasifikácia rovnovážneho bodu.',
    theory: [
      `<p>Sústava lineárnych rovníc 1. rádu s konštantnými koeficientmi má tvar $\\mathbf{x}' = A\\mathbf{x}$, kde $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$ a $A$ je
       štvorcová matica. Riešenia tvoria vektorový priestor dimenzie $n$; matica, ktorej stĺpce sú $n$ lineárne nezávislých riešení, sa nazýva
       <strong>fundamentálna matica</strong>. Každú rovnicu $n$-tého rádu možno zapísať ako sústavu (napr. pre $y'' + py' + qy = 0$ položíme $x_1 = y$, $x_2 = y'$),
       a naopak sústavu $2\\times 2$ možno <strong>eliminačnou metódou</strong> previesť na jednu rovnicu 2. rádu.</p>`,
      `<p><strong>Maticová metóda.</strong> Hľadáme riešenie $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$. Dosadením $A\\mathbf{v} = \\lambda\\mathbf{v}$: $\\lambda$ je
       <strong>vlastné číslo</strong> matice $A$ (koreň rovnice $\\det(A - \\lambda I) = 0$) a $\\mathbf{v}$ príslušný vlastný vektor.</p>
       <ul><li>Rôzne reálne $\\lambda_1, \\lambda_2$: $\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$.</li>
       <li>Komplexné $\\lambda = \\alpha\\pm\\beta\\mathrm{i}$ s vektorom $\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$: reálne riešenia sú reálna a imaginárna časť
       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$, teda $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$ a $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$.</li>
       <li>Dvojnásobné $\\lambda$ s jediným vlastným vektorom $\\mathbf{v}$: druhé riešenie je $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$, kde $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$.</li></ul>`,
      `<p><strong>Fázový portrét</strong> rovinnej sústavy zobrazuje trajektórie $(x(t), y(t))$ v rovine $xy$. Bod $\\mathbf{0}$ je rovnovážny (stacionárny) a pri
       $\\det A\\neq 0$ jediný. Jeho typ určujú vlastné čísla, resp. stopa $\\mathrm{tr}\\,A$ a determinant:</p>
       <table class="tbl"><tr><th>vlastné čísla</th><th>typ</th><th>stabilita</th></tr>
       <tr><td>reálne, opačných znamienok ($\\det A \\lt 0$)</td><td>sedlo</td><td>nestabilné</td></tr>
       <tr><td>reálne, rovnakého znamienka</td><td>uzol</td><td>stabilný pre $\\lambda \\lt 0$</td></tr>
       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\alpha\\neq 0$</td><td>ohnisko (špirály)</td><td>stabilné pre $\\alpha \\lt 0$</td></tr>
       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>stred (uzavreté krivky)</td><td>stabilný, nie asymptoticky</td></tr></table>`,
      { fig: 'v3-fazovy', caption: 'Fázový portrét sústavy $x\' = a_{11}x + a_{12}y$, $y\' = a_{21}x + a_{22}y$. Oranžové priamky sú smery vlastných vektorov (pri reálnych vlastných číslach), trojuholníčky ukazujú smer pohybu s rastúcim $t$. Zmenou prvkov matice prejdi všetkými typmi z tabuľky.' }
    ],
    examples: [
      { task: 'Vyrieš sústavu $x\' = x + 2y$, $y\' = 2x + y$ so začiatočnou podmienkou $x(0) = 3$, $y(0) = 1$.',
        steps: ['$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$, teda $\\lambda_1 = 3$, $\\lambda_2 = -1$.',
          'Vlastné vektory: pre $\\lambda_1 = 3$ je $\\mathbf{v}_1 = (1, 1)^{T}$, pre $\\lambda_2 = -1$ je $\\mathbf{v}_2 = (1, -1)^{T}$.',
          '$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$. Podmienky: $C_1 + C_2 = 3$, $C_1 - C_2 = 1$, teda $C_1 = 2$, $C_2 = 1$.',
          '<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$, $y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$.</strong> Vlastné čísla majú opačné znamienka, rovnovážny bod je sedlo.'] },
      { task: 'Urči typ rovnovážneho bodu sústavy $x\' = y$, $y\' = -5x - 2y$ a porovnaj ju s rovnicou 2. rádu.',
        steps: ['$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$, $\\mathrm{tr}\\,A = -2$, $\\det A = 5$, charakteristická rovnica $\\lambda^{2} + 2\\lambda + 5 = 0$.',
          'Vlastné čísla $-1\\pm 2\\mathrm{i}$ majú zápornú reálnu časť: <strong>stabilné ohnisko</strong>, trajektórie sa po špirálach blížia k počiatku.',
          'Sústava je zápisom rovnice $x\'\' + 2x\' + 5x = 0$ (tlmené kmity); jej riešenie $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$.'] }
    ]
  });

  const TYPES = ['sedlo', 'stabilný uzol', 'nestabilný uzol', 'stabilné ohnisko', 'nestabilné ohnisko', 'stred'];
  const pm = (M) => `\\begin{pmatrix}${M[0][0]} & ${M[0][1]}\\\\ ${M[1][0]} & ${M[1][1]}\\end{pmatrix}`;
  const sysTex = (a, b, c, d) => `$x' = ${lin([[a, 'x'], [b, 'y']])}$, $y' = ${lin([[c, 'x'], [d, 'y']])}$`;
  // matica s vlastnými číslami l1 > l2 a vlastnými vektormi (1, m1), (1, m2), m2 = m1 ± 1
  const eigMatrix = () => {
    let l1, l2;
    do { l1 = nz(-4, 4); l2 = nz(-4, 4); } while (l1 <= l2);
    const m1 = rnd(-2, 2), m2 = m1 + pick([1, -1]), det = m2 - m1;
    const A = [[(l1 * m2 - l2 * m1) / det, (l2 - l1) / det], [m1 * m2 * (l1 - l2) / det, (m2 * l2 - m1 * l1) / det]];
    return { l1, l2, m1, m2, A };
  };

  gen('v3-sustavy', () => {
    const t = Math.random();
    if (t < 0.33) {
      const { l1, l2, A } = eigMatrix();
      const [[a, b], [c, d]] = A, T = a + d, D = a * d - b * c;
      return {
        type: 'set', signed: true, answer: [l1, l2], placeholder: 'λ₁; λ₂',
        q: `Nájdi vlastné čísla matice sústavy ${sysTex(a, b, c, d)}. Zadaj ich oddelené bodkočiarkou.`,
        solution: `$A = ${pm(A)}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = ${charEq(-T, D)}$,
          kde $\\mathrm{tr}\\,A = ${T}$ a $\\det A = ${D}$. Korene sú $\\lambda_1 = ${l1}$ a $\\lambda_2 = ${l2}$.`,
        hint: 'Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.'
      };
    }
    if (t < 0.66) {
      const want = pick(TYPES);
      let a, b, c, d, n = 0;
      do {
        a = rnd(-4, 4); b = rnd(-4, 4); c = rnd(-4, 4); d = want === 'stred' ? -a : rnd(-4, 4); n++;
      } while (classify(a, b, c, d) !== want && n < 5000);
      if (classify(a, b, c, d) !== want) { a = 0; b = 1; c = -4; d = 0; }
      const T = a + d, D = a * d - b * c, disc = T * T - 4 * D;
      const kind = classify(a, b, c, d);
      return {
        type: 'choice', options: [...TYPES], answer: kind,
        q: `Urči typ rovnovážneho bodu $[0; 0]$ sústavy ${sysTex(a, b, c, d)}.`,
        solution: `$\\mathrm{tr}\\,A = ${T}$, $\\det A = ${D}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = ${disc}$.
          ${D < 0 ? 'Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.'
            : disc > 0 ? `Vlastné čísla sú reálne s rovnakým znamienkom (súčin $${D} \\gt 0$), ich súčet je $${T}$: ${kind}.`
              : T === 0 ? 'Vlastné čísla sú rýdzo imaginárne: stred.'
                : `Vlastné čísla sú komplexné s reálnou časťou $${fTex(T, 2)}$: ${kind}.`}`,
        hint: 'Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.'
      };
    }
    const { l1, l2, m1, m2, A } = eigMatrix();
    let C1, C2;
    do { C1 = rnd(-3, 3); C2 = rnd(-3, 3); } while (C1 === 0 || C2 === 0);
    const x0 = C1 + C2, y0 = m1 * C1 + m2 * C2, [[a, b], [c, d]] = A;
    const vec = (m) => `\\begin{pmatrix}1\\\\ ${m}\\end{pmatrix}`;
    return {
      type: 'tuple', signed: true, answer: [C1, C2], placeholder: 'C₁; C₂',
      q: `Sústava ${sysTex(a, b, c, d)} má začiatočnú podmienku $x(0) = ${x0}$, $y(0) = ${y0}$. Riešenie zapíšeme v tvare
        $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$
        a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.`,
      solution: `Charakteristická rovnica $${charEq(-(a + d), a * d - b * c)}$ má korene $\\lambda_1 = ${l1}$, $\\lambda_2 = ${l2}$.
        Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: $${a} - \\lambda${sg(cf(b, 'm'))} = 0$, teda $\\mathbf{v}_1 = ${vec(m1)}$, $\\mathbf{v}_2 = ${vec(m2)}$.
        Pre $t = 0$: $C_1 + C_2 = ${x0}$ a $${lin([[m1, 'C_1'], [m2, 'C_2']])} = ${y0}$, odkiaľ $C_1 = ${C1}$, $C_2 = ${C2}$.`,
      hint: 'Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.'
    };
  });

  /* ======================= 11. LAPLACEOVA TRANSFORMÁCIA ======================= */

  fig('v3-laplace', {
    draw: () => {
      const box = (x, y, w, t1, t2, cls) => `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="54" rx="8"/>
        <text class="f-text" x="${x + w / 2}" y="${y + 23}" text-anchor="middle">${t1}</text>
        <text class="f-small" x="${x + w / 2}" y="${y + 42}" text-anchor="middle">${t2}</text>`;
      const arrow = (x1, y1, x2, y2) => {
        const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
        return `<line class="f-line" x1="${x1}" y1="${y1}" x2="${n1(x2 - 8 * ux)}" y2="${n1(y2 - 8 * uy)}"/>
          <polygon class="f-solid" points="${x2},${y2} ${n1(x2 - 10 * ux - 5 * uy)},${n1(y2 - 10 * uy + 5 * ux)} ${n1(x2 - 10 * ux + 5 * uy)},${n1(y2 - 10 * uy - 5 * ux)}"/>`;
      };
      return `<svg viewBox="0 0 460 230" role="img" aria-label="Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou">
        ${box(10, 20, 170, 'začiatočná úloha', 'rovnica pre y(t)', 'f-fill f-outline')}
        ${box(280, 20, 170, 'algebraická rovnica', 'pre obraz Y(s)', 'f-fill2 f-outline2')}
        ${box(280, 150, 170, 'Y(s) vyjadrené', 'rozklad na parciálne zlomky', 'f-fill2 f-outline2')}
        ${box(10, 150, 170, 'riešenie y(t)', 'tabuľka obrazov', 'f-fill3 f-outline3')}
        ${arrow(184, 47, 276, 47)}${arrow(365, 78, 365, 146)}${arrow(276, 177, 184, 177)}
        <text class="f-math c-accent" x="230" y="38" text-anchor="middle">ℒ</text>
        <text class="f-math c-accent" x="230" y="168" text-anchor="middle">ℒ⁻¹</text>
        <text class="f-small" x="375" y="116">algebra</text></svg>`;
    }
  });

  lesson({
    id: 'v3-laplace', order: 110, title: 'Laplaceova transformácia',
    summary: 'Definícia, slovník obrazov, obraz derivácie, spätná transformácia rozkladom na parciálne zlomky a riešenie začiatočných úloh.',
    theory: [
      `<p><strong>Laplaceova transformácia</strong> priraďuje funkcii $f(t)$ definovanej pre $t \\ge 0$ funkciu komplexnej (pre nás reálnej) premennej $s$:
       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$
       Integrál konverguje pre $s \\gt s_0$, ak je $f$ po častiach spojitá a <strong>exponenciálneho rádu</strong>, t. j. $|f(t)| \\le M\\mathrm{e}^{s_0t}$.
       Napríklad $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$ pre $s \\gt a$. Transformácia je lineárna
       a pre spojité funkcie prostá, takže k obrazu $F$ existuje jediný vzor $f = \\mathcal{L}^{-1}\\{F\\}$.</p>`,
      `<table class="tbl"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>
       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>
       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>
       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>
       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>
       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>
       <p>Tu $u$ je Heavisideova funkcia (jednotkový skok). Obraz konvolúcie $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$ je súčin $F(s)G(s)$.</p>`,
      `<p><strong>Riešenie začiatočnej úlohy.</strong> Pravidlo pre obraz derivácie premení lineárnu rovnicu s konštantnými koeficientmi na algebraickú rovnicu pre $Y(s)$,
       pričom začiatočné podmienky sa do nej zapracujú automaticky. Z nej vyjadríme $Y(s)$ (zvyčajne racionálnu funkciu), rozložíme ju na
       <strong>parciálne zlomky</strong> a pomocou slovníka nájdeme $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$. Metóda je výhodná najmä pri nespojitých alebo impulzných pravých stranách.</p>`,
      { fig: 'v3-laplace', caption: 'Postup riešenia: transformácia, algebraická úprava v obore obrazov a spätná transformácia.' }
    ],
    examples: [
      { task: 'Nájdi Laplaceov obraz funkcie $f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$.',
        steps: ['Využijeme linearitu a slovník: $\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$, $\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$, $\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$.',
          '<strong>$F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong> pre $s \\gt 2$.'] },
      { task: 'Laplaceovou transformáciou vyrieš úlohu $y\'\' + 3y\' + 2y = 0$, $y(0) = 1$, $y\'(0) = 0$.',
        steps: ['Transformujeme: $s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$, teda $(s^{2} + 3s + 2)Y = s + 3$.',
          '$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$ (parciálne zlomky, napr. zakrývacou metódou).',
          '<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$.</strong> Skúška: $y(0) = 1$, $y\'(0) = -2 + 2 = 0$.'] }
    ]
  });

  // zlomky ako [čitateľ, menovateľ]
  const fadd = ([a, b], [c, d]) => red(a * d + c * b, b * d);

  gen('v3-laplace', () => {
    const t = Math.random();
    if (t < 0.3) {
      const a = nz(-4, 4), b = nz(-2, 2), c = nz(-3, 3), n = rnd(1, 2), d = nz(-3, 3), w = rnd(1, 3), isSin = Math.random() < 0.5;
      const s0 = Math.max(b, 0) + rnd(1, 2);
      const fn = isSin ? '\\sin' : '\\cos';
      const f = `${cf(a, ex(b, 't'))}${sg(cf(c, xp(n, 't')))}${sg(cf(d, `${fn} ${cf(w, 't')}`))}`;
      // zlomok so znamienkom pred zlomkovou čiarou
      const sfr = (sgn, num, den) => `${sgn < 0 ? '-' : ''}\\frac{${num}}{${den}}`;
      const Fs = `${sfr(a, Math.abs(a), `s${term(-b)}`)}${sg(sfr(c, Math.abs(c * fact(n)), `s^{${n + 1}}`))}${sg(sfr(d, isSin ? Math.abs(d * w) : cf(Math.abs(d), 's'), `s^{2} + ${w * w}`))}`;
      const parts = [[a, s0 - b], [c * fact(n), Math.pow(s0, n + 1)], [isSin ? d * w : d * s0, s0 * s0 + w * w]];
      const [P, Q] = parts.reduce(fadd, [0, 1]);
      return {
        signed: true, answer: P / Q, show: fTxt(P, Q), tol: 0.001,
        q: `Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = ${f}$. Vypočítaj $F(${s0})$ (presne ako zlomok, alebo na 3 desatinné miesta).`,
        solution: `Podľa slovníka a linearity $F(s) = ${Fs}$ pre $s \\gt ${Math.max(b, 0)}$.
          Dosadením $s = ${s0}$: $F(${s0}) = ${parts.map(([u, v]) => fTex(u, v)).map((x, i) => (i ? sg(x) : x)).join('')} = ${fTex(P, Q)} \\approx ${dc3(P / Q)}$.`,
        hint: 'Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.'
      };
    }
    if (t < 0.55) {
      let a, b;
      do { a = nz(-3, 3); b = nz(-3, 3); } while (a <= b);
      const A = nz(-3, 3), B = nz(-3, 3), al = A + B, be = -(A * b + B * a);
      const num = poly([al, be], 's'), den = poly([1, -(a + b), a * b], 's');
      return {
        type: 'tuple', signed: true, answer: [A, B], placeholder: 'A; B',
        q: `Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{${num}}{${den}}$. Výsledok má tvar $f(t) = A${ex(a, 't')} + B${ex(b, 't')}$; urči $A$ a $B$.`,
        solution: `Menovateľ rozložíme: $${den} = (s${term(-a)})(s${term(-b)})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s${term(-a)}} + \\frac{B}{s${term(-b)}}$.
          Zakrývacia metóda: $A = \\frac{${al}\\cdot ${par(a)}${term(be)}}{${a} - ${par(b)}} = ${A}$, $B = \\frac{${al}\\cdot ${par(b)}${term(be)}}{${b} - ${par(a)}} = ${B}$.
          Preto $f(t) = ${cf(A, ex(a, 't'))}${sg(cf(B, ex(b, 't')))}$.`,
        hint: 'Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.'
      };
    }
    if (t < 0.78) {
      let p, q, y0, y1;
      do { p = nz(-4, 4); q = rnd(-4, 6); y0 = nz(-3, 3); y1 = nz(-3, 3); } while (y1 === p * y0);
      const fr = (n0, d0) => `\\dfrac{${poly([y0, n0], 's')}}{${d0}}`;
      const D = poly([1, p, q], 's'), Dm = poly([1, -p, q], 's');
      const ok = `Y(s) = ${fr(y1 + p * y0, D)}`;
      const opts = [ok, `Y(s) = ${fr(y1 - p * y0, D)}`, `Y(s) = ${fr(-y1 + p * y0, D)}`, `Y(s) = ${fr(y1 + p * y0, Dm)}`];
      return {
        type: 'choice', answer: `$${ok}$`, options: shuffle(opts.map((o) => `$${o}$`)),
        q: `Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy $${lhs2(p, q)} = 0$, $y(0) = ${y0}$, $y'(0) = ${y1}$?`,
        solution: `$\\mathcal{L}\\{y''\\} = s^{2}Y${sg(cf(-y0, 's'))}${term(-y1)}$ a $\\mathcal{L}\\{y'\\} = sY${term(-y0)}$. Po dosadení
          $(${D})Y = ${cf(y0, 's')}${term(y1)}${term(p * y0)}$, teda $${ok}$.`,
        hint: 'Použi $\\mathcal{L}\\{y\'\'\\} = s^{2}Y - sy(0) - y\'(0)$ a $\\mathcal{L}\\{y\'\\} = sY - y(0)$ a vyjadri $Y$.'
      };
    }
    let a, b;
    do { a = nz(-3, 3); b = nz(-3, 3); } while (a === b);
    const A = nz(-3, 3), B = nz(-3, 3), k = B * (b - a), y0 = A + B;
    // celočíselný čitateľ, znamienko pred zlomkom
    const fs = (num, den) => `${num < 0 ? '-' : ''}\\frac{${Math.abs(num)}}{${den}}`;
    const sa = `s${term(-a)}`, sb = `s${term(-b)}`;
    return {
      type: 'tuple', signed: true, answer: [A, B], placeholder: 'A; B',
      q: `Laplaceovou transformáciou vyrieš úlohu $y'${term(-a, 'y')} = ${cf(k, ex(b, 't'))}$, $y(0) = ${y0}$. Riešenie má tvar $y(t) = A${ex(a, 't')} + B${ex(b, 't')}$; urči $A$ a $B$.`,
      solution: `Transformáciou: $sY${term(-y0)}${term(-a, 'Y')} = ${fs(k, sb)}$, teda $Y = ${y0 === 0 ? '' : fs(y0, sa)}${y0 === 0 ? fs(k, `(${sa})(${sb})`) : sg(fs(k, `(${sa})(${sb})`))}$.
        Rozklad: $${fs(k, `(${sa})(${sb})`)} = ${fs(-B, sa)}${sg(fs(B, sb))}$.
        Spätnou transformáciou $y = (${y0}${sg(fTex(k, a - b))})${ex(a, 't')}${sg(cf(B, ex(b, 't')))}$, teda $A = ${A}$, $B = ${B}$.`,
      hint: 'Transformuj rovnicu ($\\mathcal{L}\\{y\'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.'
    };
  });
})();
