/* 9. ročník: opakovanie číselných oborov a zlomkov, percentá a pomer, rozklad výrazov, rovnice a sústavy,
   súradnicová sústava, lineárna funkcia, podobnosť, využitie Pytagorovej vety, telesá, povrch a objem, štatistika,
   kombinatorika a pravdepodobnosť. */
(function () {
  'use strict';

  const { rnd, pick, gcd, fmt, term, shuffle } = EXERCISES.util;
  const { plane, axes, curvePath, svg, n1, sk } = FIGURES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r9' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 hodinu, 2 hodiny, 5 hodín.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  const HOD = ['hodinu', 'hodiny', 'hodín'];

  const nz = (a, b) => { let v = 0; while (v === 0) v = rnd(a, b); return v; };
  const par = (v) => (v < 0 ? `(${v})` : String(v));
  const dc = (x) => fmt(x).replace(',', '{,}');                  // desatinná čiarka v KaTeXe (v angličtine bodka)
  const dsep = () => (CONTENT_I18N.decimal() === ',' ? '{,}' : '.'); // oddeľovač v KaTeXe pre čísla mimo fmt
  const lcm = (a, b) => a / gcd(a, b) * b;
  const pt = (n, x, y) => `${n}[${x};\\, ${y}]`;                     // bod A[x; y]

  const red = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g, q / g]; };
  const fTex = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${b}}`; };
  const fTxt = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a}/${b}`; };
  const fPar = (p, q) => (p / q < 0 ? `\\left(${fTex(p, q)}\\right)` : fTex(p, q));

  const lead = (c, v) => (c === 1 && v ? v : c === -1 && v ? '-' + v : c + v);
  const poly = (cs, x = 'x') => {
    const n = cs.length - 1;
    let s = '';
    cs.forEach((c, i) => { const d = n - i; s += term(c, d === 0 ? '' : d === 1 ? x : `${x}^${d}`); });
    s = s.trim();
    return !s ? '0' : s[0] === '+' ? s.slice(2) : '-' + s.slice(2);
  };

  // výsledok k·π počítaný s π ≈ 3,14; tolerancia prijme aj presné π
  const piAns = (k) => ({ answer: Math.round(314 * k) / 100, tol: 0.002 * k + 0.01 });
  const PI = 'Použi $\\pi \\approx 3{,}14$.';

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

  /* ---------- telesá (obrázok v teórii aj v úlohách) ---------- */

  const SOLID = {
    hranol: [60, `<polygon class="f-fill3 f-outline3" points="14,51 36,29 106,29 84,51"/>
      <polygon class="f-fill2 f-outline2" points="84,51 106,29 106,109 84,131"/>
      <rect class="f-fill f-outline" x="14" y="51" width="70" height="80"/>
      <path class="f-dash" fill="none" d="M14 131 L36 109 L106 109 M36 109 V29"/>`],
    valec: [180, `<path class="f-fill2 f-outline2" d="M144 46 V114 A36 11 0 0 0 216 114 V46 Z"/>
      <ellipse class="f-fill2 f-outline2" cx="180" cy="46" rx="36" ry="11"/>
      <path class="f-dash" fill="none" d="M216 114 A36 11 0 0 0 144 114"/>`],
    ihlan: [300, `<polygon class="f-fill3 f-outline3" points="302,30 262,124 320,124"/>
      <polygon class="f-fill3 f-outline3" points="302,30 320,124 342,106"/>
      <path class="f-dash" fill="none" d="M262 124 L284 106 L342 106 M284 106 L302 30"/>`],
    'kužeľ': [420, `<path class="f-fill2 f-outline2" d="M420 34 L382 114 A38 11 0 0 0 458 114 Z"/>
      <path class="f-dash" fill="none" d="M458 114 A38 11 0 0 0 382 114"/>`],
    'guľa': [540, `<circle class="f-fill f-outline" cx="540" cy="78" r="42"/>
      <ellipse class="f-dash" fill="none" cx="540" cy="78" rx="42" ry="11"/>`]
  };
  const solidPic = (name) => `<svg viewBox="${SOLID[name][0] - 75} 10 150 140" width="170" role="img" aria-label="obrázok telesa">${SOLID[name][1]}</svg>`;

  /* ---------- obrázky ---------- */

  fig('r9-os', {
    draw: () => {
      const X = (v) => n1(30 + (v + 3) * 55);
      let s = `<svg viewBox="0 0 440 100" role="img" aria-label="Reálne čísla na číselnej osi">
        <line class="f-line" x1="12" y1="56" x2="424" y2="56"/><path class="f-solid" d="M432 56 l-10 -5 v10 z"/>`;
      for (let k = -3; k <= 4; k++) {
        s += `<line class="f-line" x1="${X(k)}" y1="50" x2="${X(k)}" y2="62"/><text class="f-small" x="${X(k)}" y="80" text-anchor="middle">${k}</text>`;
      }
      const P = [[-2, '−2', 'f-dot', 'c-accent'], [-0.5, '−1/2', 'f-dot f-dot-ok', 'c-ok'], [0.75, '3/4', 'f-dot f-dot-ok', 'c-ok'],
        [Math.SQRT2, '√2', 'f-dot f-vertex', ''], [Math.PI, 'π', 'f-dot f-vertex', '']];
      P.forEach(([v, lab, cls, c]) => {
        s += `<circle class="${cls}" cx="${X(v)}" cy="56" r="6"/><text class="f-text ${c}" x="${X(v)}" y="36" text-anchor="middle">${lab}</text>`;
      });
      return s + '</svg>';
    }
  });

  fig('r9-pomer', {
    draw: () => {
      let s = `<svg viewBox="0 0 420 150" role="img" aria-label="Rozdelenie 40 eur v pomere 2 ku 3">
        <text class="f-text" x="205" y="24" text-anchor="middle">spolu 40 €</text>`;
      for (let i = 0; i < 5; i++) {
        s += `<rect class="${i < 2 ? 'f-fill f-outline' : 'f-fill2 f-outline2'}" x="${30 + i * 70}" y="36" width="70" height="44"/>
          <text class="f-text" x="${65 + i * 70}" y="64" text-anchor="middle">8 €</text>`;
      }
      return s + `<line class="f-accent" x1="32" y1="96" x2="168" y2="96"/>
        <text class="f-text c-accent" x="100" y="120" text-anchor="middle">2 diely = 16 €</text>
        <line class="f-ok" x1="172" y1="96" x2="378" y2="96"/>
        <text class="f-text c-ok" x="275" y="120" text-anchor="middle">3 diely = 24 €</text></svg>`;
    }
  });

  fig('r9-rozdiel', {
    draw: () => `<svg viewBox="0 0 460 190" role="img" aria-label="Rozdiel štvorcov ako obdĺžnik">
      <rect class="f-fill f-outline" x="20" y="20" width="140" height="90"/>
      <rect class="f-fill2 f-outline2" x="20" y="110" width="90" height="50"/>
      <rect class="f-cell" x="110" y="110" width="50" height="50" stroke-dasharray="5 4"/>
      <text class="f-math" x="90" y="14" text-anchor="middle">a</text>
      <text class="f-math" x="10" y="94" text-anchor="middle">a</text>
      <text class="f-math" x="135" y="142" text-anchor="middle">b</text>
      <text class="f-text" x="185" y="96" text-anchor="middle">→</text>
      <rect class="f-fill f-outline" x="210" y="50" width="140" height="90"/>
      <rect class="f-fill2 f-outline2" x="350" y="50" width="50" height="90"/>
      <text class="f-math" x="305" y="166" text-anchor="middle">a + b</text>
      <text class="f-math" x="408" y="100">a − b</text></svg>`
  });

  fig('r9-body', {
    draw: () => {
      const p = plane(-5, 5, -5, 5, 320, 320);
      const dot = (x, y, n, cls, dx, dy) => `<circle class="${cls}" cx="${n1(p.X(x))}" cy="${n1(p.Y(y))}" r="5"/>
        <text class="f-math" x="${n1(p.X(x) + dx)}" y="${n1(p.Y(y) + dy)}">${n}</text>`;
      const q = (x, y, t) => `<text class="f-text c-accent" x="${n1(p.X(x))}" y="${n1(p.Y(y))}" text-anchor="middle">${t}</text>`;
      const front = dot(3, 2, 'A', 'f-dot', 6, -8) + dot(-4, 3, 'B', 'f-dot f-dot-ok', 6, -8) + dot(-2, -3, 'C', 'f-dot', 6, 18)
        + dot(4, -2, 'D', 'f-dot f-dot-ok', 6, 18) + q(4, 4.2, 'I.') + q(-4, 4.2, 'II.') + q(-4, -4.6, 'III.') + q(4, -4.6, 'IV.')
        + `<line class="f-dash" x1="${n1(p.X(3))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(3))}" y2="${n1(p.Y(2))}"/>
           <line class="f-dash" x1="${n1(p.X(0))}" y1="${n1(p.Y(2))}" x2="${n1(p.X(3))}" y2="${n1(p.Y(2))}"/>
           <text class="f-math" x="${n1(p.X(5) - 4)}" y="${n1(p.Y(0) - 8)}" text-anchor="end">x</text>
           <text class="f-math" x="${n1(p.X(0) + 8)}" y="${n1(p.Y(5) + 12)}">y</text>`;
      return svg(p, axes(p), '', front, 'Body v súradnicovej sústave');
    }
  });

  const kTxt = (k) => (Number.isInteger(k) ? String(Math.abs(k)) : sk(Math.abs(k), 1));

  fig('r9-linearna', {
    controls: [
      { id: 'k', label: 'k', min: -3, max: 3, step: 0.5, value: 1 },
      { id: 'q', label: 'q', min: -5, max: 5, step: 1, value: 2 }
    ],
    draw: (v) => {
      const p = plane(-6, 6, -6, 6, 360, 360);
      const k = v.k, q = v.q;
      let dots = `<circle class="f-dot" cx="${n1(p.X(0))}" cy="${n1(p.Y(q))}" r="5"/>`;
      let xs = '';
      if (k !== 0) {
        const x0 = -q / k;
        if (Math.abs(x0) <= 6) dots += `<circle class="f-dot f-dot-ok" cx="${n1(p.X(x0))}" cy="${n1(p.Y(0))}" r="5"/>`;
        const x0s = Math.abs(x0 - Math.round(x0)) < 1e-9 ? String(Math.round(x0) || 0) : sk(x0);
        xs = T` · <span class="c-ok">s osou x: [${x0s.replace('-', '−')}; 0]</span>`;
      } else {
        xs = q === 0 ? T.s(' · graf leží na osi x') : T.s(' · priamka je rovnobežná s osou x');
      }
      const kx = k === 0 ? '' : `${k < 0 ? '−' : ''}${Math.abs(k) === 1 ? '' : kTxt(k)}x`;
      const qs = k === 0 ? `${q < 0 ? '−' : ''}${Math.abs(q)}` : (q === 0 ? '' : ` ${q > 0 ? '+' : '−'} ${Math.abs(q)}`);
      const kind = T.s(k > 0 ? 'rastúca' : k < 0 ? 'klesajúca' : 'konštantná');
      return {
        svg: svg(p, axes(p), `<path class="f-accent" d="${curvePath(p, (x) => k * x + q, -6, 6, 2)}"/>${dots}`, '', 'Graf lineárnej funkcie'),
        readout: T`y = ${kx}${qs} · ${kind} · s osou y: [0; ${String(q).replace('-', '−')}]${xs}`
      };
    }
  });

  fig('r9-podobne', {
    draw: () => `<svg viewBox="0 0 400 210" role="img" aria-label="Dva podobné trojuholníky">
      <polygon class="f-fill f-outline" points="20,180 140,180 60,100"/>
      <polygon class="f-fill2 f-outline2" points="200,180 380,180 260,60"/>
      <path class="f-warn" d="M38 180 A18 18 0 0 0 28.1 163.9"/>
      <path class="f-warn" d="M218 180 A18 18 0 0 0 208.1 163.9"/>
      <text class="f-math" x="8" y="196">A</text><text class="f-math" x="142" y="196">B</text><text class="f-math" x="54" y="92">C</text>
      <text class="f-math" x="184" y="196">A′</text><text class="f-math" x="382" y="196">B′</text><text class="f-math" x="252" y="52">C′</text>
      <text class="f-math" x="80" y="200" text-anchor="middle">c</text>
      <text class="f-math" x="106" y="134">a</text>
      <text class="f-math" x="30" y="140" text-anchor="end">b</text>
      <text class="f-math" x="290" y="202" text-anchor="middle">c′</text>
      <text class="f-math" x="328" y="116">a′</text>
      <text class="f-math" x="222" y="116" text-anchor="end">b′</text></svg>`
  });

  fig('r9-kvader', {
    draw: () => `<svg viewBox="0 0 330 220" role="img" aria-label="Kváder s telesovou uhlopriečkou">
      <polygon class="f-fill" points="40,190 220,190 220,80 40,80"/>
      <polygon class="f-fill" points="220,190 280,150 280,40 220,80"/>
      <path class="f-dash" fill="none" d="M40 190 L100 150 L280 150 M100 150 V40"/>
      <path class="f-line" d="M40 190 H220 L280 150 V40 H100 L40 80 Z M40 80 H220 V190 M220 80 L280 40"/>
      <line class="f-ok" x1="40" y1="190" x2="280" y2="150"/>
      <line class="f-accent" x1="40" y1="190" x2="280" y2="40"/>
      <path class="f-thin" d="M268 152 v-12 l12 -2"/>
      <text class="f-math" x="130" y="210" text-anchor="middle">a</text>
      <text class="f-math" x="258" y="184">b</text>
      <text class="f-math" x="290" y="100">c</text>
      <text class="f-math c-ok" x="170" y="186">u<tspan font-size="12" dy="4">s</tspan></text>
      <text class="f-math c-accent" x="150" y="112">u</text></svg>`
  });

  fig('r9-telesa', {
    draw: () => `<svg viewBox="0 0 600 172" role="img" aria-label="Hranol, valec, ihlan, kužeľ a guľa">
      ${Object.keys(SOLID).map((n) => SOLID[n][1] + `<text class="f-small" x="${SOLID[n][0]}" y="164" text-anchor="middle">${n}</text>`).join('')}
      <text class="f-math" x="49" y="147" text-anchor="middle">a</text><text class="f-math" x="112" y="76">v</text>
      <line class="f-line" x1="180" y1="46" x2="216" y2="46"/><text class="f-math" x="196" y="40">r</text>
      <line class="f-dash" x1="180" y1="48" x2="180" y2="114"/><text class="f-math" x="186" y="88">v</text>
      <line class="f-dash" x1="302" y1="30" x2="302" y2="115"/><text class="f-math" x="308" y="84">v</text>
      <text class="f-math" x="291" y="142" text-anchor="middle">a</text>
      <line class="f-dash" x1="420" y1="34" x2="420" y2="114"/><text class="f-math" x="426" y="84">v</text>
      <line class="f-line" x1="420" y1="114" x2="458" y2="114"/><text class="f-math" x="436" y="142">r</text>
      <line class="f-line" x1="540" y1="78" x2="582" y2="78"/><circle class="f-solid" cx="540" cy="78" r="3"/>
      <text class="f-math" x="556" y="72">r</text></svg>`
  });

  fig('r9-siet-valca', {
    draw: () => `<svg viewBox="0 0 440 240" role="img" aria-label="Sieť valca">
      <circle class="f-fill f-outline" cx="220" cy="35" r="35"/>
      <rect class="f-fill2 f-outline2" x="110" y="70" width="220" height="90"/>
      <circle class="f-fill f-outline" cx="220" cy="195" r="35"/>
      <line class="f-line" x1="220" y1="35" x2="255" y2="35"/><circle class="f-solid" cx="220" cy="35" r="3"/>
      <text class="f-math" x="232" y="30">r</text>
      <text class="f-text" x="220" y="120" text-anchor="middle">plášť</text>
      <text class="f-math" x="300" y="64" text-anchor="middle">2πr</text>
      <text class="f-math" x="340" y="120">v</text></svg>`
  });

  fig('r9-strom', {
    draw: () => {
      let s = `<svg viewBox="0 0 440 240" role="img" aria-label="Stromový diagram: 2 tričká a 3 nohavice">
        <circle class="f-solid" cx="30" cy="120" r="5"/>`;
      [[60, 'T1'], [180, 'T2']].forEach(([y, t], i) => {
        s += `<line class="f-line" x1="30" y1="120" x2="140" y2="${y}"/><circle class="f-dot" cx="140" cy="${y}" r="6"/>
          <text class="f-text c-accent" x="128" y="${y - 10}" text-anchor="end">${t}</text>`;
        [-35, 0, 35].forEach((dy, j) => {
          const yy = y + dy;
          s += `<line class="f-thin" x1="140" y1="${y}" x2="260" y2="${yy}"/><circle class="f-dot f-dot-ok" cx="260" cy="${yy}" r="5"/>
            <text class="f-text c-ok" x="272" y="${yy + 5}">N${j + 1}</text>
            <text class="f-small" x="320" y="${yy + 5}">${t} + N${j + 1}</text>`;
        });
      });
      return s + '</svg>';
    }
  });

  /* ---------- 1. Opakovanie: číselné obory a zlomky ---------- */

  lesson({
    id: 'r9-cisla', order: 10, title: 'Číselné obory a zlomky (opakovanie)',
    summary: 'Prirodzené, celé, racionálne a iracionálne čísla, počítanie so zlomkami a zmiešanými číslami.',
    theory: [
      `<p>Číselné obory do seba zapadajú: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$. <strong>Racionálne čísla</strong>
       sa dajú zapísať zlomkom; ich desatinný rozvoj je konečný ($\\frac{3}{8} = 0{,}375$) alebo periodický ($\\frac{1}{3} = 0{,}333\\ldots = 0{,}\\overline{3}$).
       <strong>Iracionálne čísla</strong>, napríklad $\\sqrt{2}$ alebo $\\pi$, majú nekonečný neperiodický rozvoj. Racionálne a iracionálne čísla
       spolu tvoria <strong>reálne čísla</strong> $\\mathbb{R}$.</p>`,
      { fig: 'r9-os', caption: 'Každé reálne číslo má na číselnej osi svoje miesto. Modrý bod je celé číslo, zelené body sú racionálne čísla, ktoré nie sú celé, oranžové body sú iracionálne čísla.' },
      `<p><strong>Počítanie so zlomkami:</strong> pri sčítaní a odčítaní prevedieme zlomky na spoločného menovateľa, pri násobení násobíme
       čitateľa čitateľom a menovateľa menovateľom, pri delení násobíme prevrátenou hodnotou: $\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b}\\cdot\\frac{d}{c}$.
       Výsledok vždy upravíme na <strong>základný tvar</strong> (zlomok už nejde krátiť).</p>`,
      `<p><strong>Zmiešané číslo</strong> $2\\frac{1}{3}$ znamená $2 + \\frac{1}{3} = \\frac{7}{3}$. Pred počítaním ho prevedieme na zlomok.
       Aj pri zlomkoch platí poradie operácií: násobenie a delenie má prednosť pred sčítaním a odčítaním.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\frac{2}{3} + \\frac{5}{6} : \\frac{5}{4}$.',
        steps: ['Delenie má prednosť: $\\frac{5}{6} : \\frac{5}{4} = \\frac{5}{6}\\cdot\\frac{4}{5} = \\frac{20}{30} = \\frac{2}{3}$.',
          '$\\frac{2}{3} + \\frac{2}{3} = \\frac{4}{3}$.', '<strong>Výsledok: $\\frac{4}{3} = 1\\frac{1}{3}$</strong>'] },
      { task: 'Je číslo $\\sqrt{36}$ racionálne alebo iracionálne? A číslo $\\sqrt{12}$?',
        steps: ['$\\sqrt{36} = 6$, čo je prirodzené číslo, a teda aj racionálne.',
          'Číslo 12 nie je druhou mocninou celého čísla ($3^2 = 9$, $4^2 = 16$), preto je $\\sqrt{12}$ iracionálne číslo.'] }
    ]
  });

  const OBOR = ['prirodzené číslo', 'celé číslo, ktoré nie je prirodzené', 'racionálne číslo, ktoré nie je celé', 'iracionálne číslo'];
  const NONSQ = [2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 17, 20, 50];

  gen('r9-cisla', () => {
    const t = Math.random();
    if (t < 0.3) {
      const kind = rnd(0, 3), k = rnd(2, 12);
      // [zápis, zdôvodnenie, lákavá nesprávna možnosť (index v OBOR), vysvetlenie k nej]
      const ROOT = T.s('Odmocninu najprv vypočítaj: číslo pod ňou je druhou mocninou celého čísla, takže výsledok je celé číslo.');
      let tex, why, bad, badMsg;
      if (kind === 0) {
        [tex, why, bad, badMsg] = pick([
          [String(rnd(1, 99)), T.s('Je to kladné celé číslo.'), 1, T.s('Prirodzené čísla sú tiež celé. Vyber najpresnejší opis: kladné celé číslo je prirodzené.')],
          [`\\sqrt{${k * k}}`, T`$\\sqrt{${k * k}} = ${k}$, to je prirodzené číslo.`, 3, ROOT],
          [`\\frac{${k * 3}}{3}`, T`$\\frac{${k * 3}}{3} = ${k}$, to je prirodzené číslo.`, 2, T.s('Zlomok sa dá vykrátiť. Pozri sa, aké číslo z neho vyjde.')]
        ]);
      } else if (kind === 1) {
        [tex, why, bad, badMsg] = pick([
          [String(-rnd(1, 99)), T.s('Je to záporné celé číslo.'), 0, T.s('Prirodzené čísla sú len kladné: 1, 2, 3, …')],
          ['0', T.s('Nula je celé číslo, ale medzi prirodzené čísla ju nezaraďujeme.'), 0, T.s('Nula medzi prirodzené čísla nepatrí, prirodzené čísla začínajú jednotkou.')],
          [`-\\sqrt{${k * k}}`, T`$-\\sqrt{${k * k}} = -${k}$, to je záporné celé číslo.`, 3, ROOT]
        ]);
      } else if (kind === 2) {
        const q = pick([3, 4, 5, 7, 8]), p = pick([1, 2, 3, 4, 5, 6, 7].filter((v) => v % q !== 0));
        const d = rnd(1, 9);
        [tex, why, bad, badMsg] = pick([
          [`-\\frac{${p}}{${q}}`, T.s('Je to zlomok, ktorý sa nedá upraviť na celé číslo.'), 1, T.s('Zlomok sa nedá vykrátiť na celé číslo, záporné znamienko z neho celé číslo nespraví.')],
          [`${rnd(-9, 9)}${dsep()}${rnd(1, 9)}${rnd(1, 9)}`, T.s('Desatinné číslo s konečným rozvojom je racionálne, ale nie celé.'), 3, T.s('Desatinné číslo s konečným počtom cifier sa dá zapísať ako zlomok s menovateľom 100.')],
          [`0${dsep()}\\overline{${d}}`, T`Periodické číslo je racionálne: $0${dsep()}\\overline{${d}} = \\frac{${d}}{9}$.`, 3, T.s('Periodické desatinné číslo nie je iracionálne, dá sa zapísať ako zlomok.')]
        ]);
      } else {
        const n = pick(NONSQ);
        [tex, why, bad, badMsg] = pick([
          [`\\sqrt{${n}}`, T`Číslo ${n} nie je druhou mocninou celého čísla, preto je $\\sqrt{${n}}$ iracionálne.`, 2, T`Číslo ${n} nie je druhou mocninou celého ani racionálneho čísla, odmocnina z neho sa nedá zapísať zlomkom.`],
          ['\\pi', T.s('Číslo $\\pi$ má nekonečný neperiodický desatinný rozvoj.'), 2, T.s('Číslo $3{,}14$ je len približná hodnota $\\pi$. Samotné $\\pi$ sa zlomkom zapísať nedá.')],
          [`1 + \\sqrt{${n}}`, T`$\\sqrt{${n}}$ je iracionálne a pripočítaním 1 sa to nezmení.`, 2, T`Pozri sa na $\\sqrt{${n}}$: číslo ${n} nie je druhou mocninou, a pripočítanie 1 na tom nič nezmení.`]
        ]);
      }
      const opts = OBOR.map((o) => T.s(o));
      return {
        type: 'choice', options: opts, answer: opts[kind], choiceHints: { [opts[bad]]: badMsg },
        q: T`Ktorá možnosť najpresnejšie opisuje číslo $${tex}$?`,
        solution: T`${why} Správna možnosť: <strong>${opts[kind]}</strong>.`,
        hint: T.s('Najprv skús číslo zjednodušiť (odmocninu, zlomok). Iracionálne sú napríklad odmocniny z čísel, ktoré nie sú druhou mocninou, a $\\pi$.')
      };
    }
    if (t < 0.7) {
      let [a, b] = red(nz(-9, 9), pick([2, 3, 4, 5, 6, 8, 9]));
      let [c, d] = red(nz(-9, 9), pick([2, 3, 4, 5, 6, 7]));
      if (b === 1) [a, b] = red(a * 2 + 1, 2);
      if (d === 1) [c, d] = red(c * 3 + 1, 3);
      const op = pick(['+', '-', '·', ':']);
      const L = lcm(b, d), A = a * L / b, C = c * L / d;
      let P, Q, sol;
      const expr = `${fTex(a, b)} ${op === '·' ? '\\cdot' : op} ${fPar(c, d)}`;
      if (op === '+' || op === '-') {
        [P, Q] = [op === '+' ? A + C : A - C, L];
        sol = T`Spoločný menovateľ je ${L}: $${expr} = \\frac{${A} ${op} ${par(C)}}{${L}} = ${fTex(P, Q)}$.`;
      } else if (op === '·') {
        [P, Q] = [a * c, b * d];
        sol = `$${expr} = ${a * c < 0 ? '-' : ''}\\frac{${Math.abs(a * c)}}{${b * d}} = ${fTex(P, Q)}$.`;
      } else {
        [P, Q] = [a * d, b * c];
        sol = T`Delíme zlomkom, teda násobíme jeho prevrátenou hodnotou: $${expr} = ${fTex(a, b)}\\cdot ${fPar(d, c)} = ${fTex(P, Q)}$.`;
      }
      const ex = withMist({
        signed: true, answer: P / Q, show: fTxt(P, Q),
        q: T`Vypočítaj $${expr}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -7/4) alebo ako celé číslo.`,
        solution: sol, hint: T.s('Sčítanie a odčítanie: spoločný menovateľ. Násobenie: čitateľ krát čitateľ, menovateľ krát menovateľ. Delenie: násob prevrátenou hodnotou.')
      }, [
        op === '+' && { value: (a + c) / (b + d), msg: T.s('Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.') },
        op === '-' && b !== d && { value: (a - c) / (b - d), msg: T.s('Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.') },
        op === '·' && { value: A * C / L, msg: T.s('Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.') },
        op === ':' && { value: (a * c) / (b * d), msg: T.s('Delenie zlomkom nahraď násobením jeho prevrátenou hodnotou. Čitatele a menovatele nenásob priamo.') },
        op === ':' && { value: (b * c) / (a * d), msg: T.s('Prevrátiť treba zlomok, ktorým delíš (druhý), nie prvý.') }
      ]);
      if (op === '+' || op === '-') {
        ex.steps = [
          { q: T`Aký je najmenší spoločný menovateľ zlomkov $${fTex(a, b)}$ a $${fTex(c, d)}$?`, answer: L },
          { q: op === '+' ? T`Rozšír oba zlomky na menovateľ ${L} a sčítaj ich čitatele. Aký čitateľ dostaneš?` : T`Rozšír oba zlomky na menovateľ ${L} a odčítaj ich čitatele. Aký čitateľ dostaneš?`, answer: P, signed: true },
          { q: T`Zapíš výsledok $\\frac{${P}}{${L}}$ v základnom tvare (alebo ako celé číslo).`, answer: P / Q, show: fTxt(P, Q), signed: true }
        ];
      } else if (op === ':') {
        ex.steps = [
          { q: T`Delenie nahradíme násobením prevrátenou hodnotou. Aká je prevrátená hodnota čísla $${fTex(c, d)}$? Zadaj ju ako zlomok.`, answer: d / c, show: fTxt(d, c), signed: true },
          { q: T`Vynásob $${fTex(a, b)}$ touto prevrátenou hodnotou. Výsledok zadaj v základnom tvare.`, answer: P / Q, show: fTxt(P, Q), signed: true }
        ];
      }
      return ex;
    }
    if (Math.random() < 0.5) {
      const w = rnd(1, 4), q = pick([2, 3, 4, 5]), p = rnd(1, q - 1);
      const [c, d] = red(rnd(1, 7), pick([2, 3, 4, 6]));
      const W = w * q + p, L = lcm(q, d), P = W * L / q - c * L / d;
      return withMist({
        signed: true, answer: P / L, show: fTxt(P, L),
        q: T`Vypočítaj $${w}\\frac{${p}}{${q}} - ${fTex(c, d)}$. Výsledok zadaj ako zlomok v základnom tvare alebo ako celé číslo.`,
        solution: T`Zmiešané číslo prevedieme na zlomok: $${w}\\frac{${p}}{${q}} = \\frac{${W}}{${q}}$. Spoločný menovateľ je ${L}: $\\frac{${W * L / q}}{${L}} - \\frac{${c * L / d}}{${L}} = ${fTex(P, L)}$.`,
        hint: T`Zmiešané číslo $${w}\\frac{${p}}{${q}}$ preveď na zlomok: celú časť vynásob menovateľom a pripočítaj čitateľa.`,
        steps: [
          { q: T`Preveď $${w}\\frac{${p}}{${q}}$ na zlomok s menovateľom ${q}. Aký bude jeho čitateľ?`, answer: W },
          { q: T`Aký je spoločný menovateľ zlomkov $\\frac{${W}}{${q}}$ a $${fTex(c, d)}$?`, answer: L },
          { q: T.s('Odčítaj zlomky a výsledok zapíš v základnom tvare.'), answer: P / L, show: fTxt(P, L), signed: true }
        ]
      }, [
        { value: (w + p) / q - c / d, msg: T`Zmiešané číslo $${w}\\frac{${p}}{${q}}$ znamená $${w} + \\frac{${p}}{${q}}$. Celú časť vynásob menovateľom a až potom pripočítaj čitateľa.` },
        { value: w * p / q - c / d, msg: T`Zmiešané číslo $${w}\\frac{${p}}{${q}}$ nie je súčin, znamená $${w} + \\frac{${p}}{${q}}$.` }
      ]);
    }
    // kladný zlomok v základnom tvare, ktorý nie je celým číslom
    const pf = (dens) => { let r; do { r = red(rnd(1, 7), pick(dens)); } while (r[1] === 1); return r; };
    const [a, b] = pf([2, 3, 4, 6]), [c, d] = pf([2, 3, 5]), [e, f] = pf([2, 4, 3, 7]);
    const [m1, m2] = red(c * e, d * f), L = lcm(b, m2), P = a * L / b + m1 * L / m2;
    return withMist({
      signed: true, answer: P / L, show: fTxt(P, L),
      q: T`Vypočítaj $${fTex(a, b)} + ${fTex(c, d)}\\cdot ${fTex(e, f)}$. Výsledok zadaj ako zlomok v základnom tvare alebo ako celé číslo.`,
      solution: T`Násobenie má prednosť: $${fTex(c, d)}\\cdot ${fTex(e, f)} = ${fTex(m1, m2)}$. Potom $${fTex(a, b)} + ${fTex(m1, m2)} = ${fTex(P, L)}$.`,
      hint: T.s('Najprv vynásob, až potom sčítaj. Pri sčítaní potrebuješ spoločného menovateľa.'),
      steps: [
        { q: T`Násobenie má prednosť. Koľko je $${fTex(c, d)}\\cdot ${fTex(e, f)}$? Zadaj zlomok v základnom tvare.`, answer: m1 / m2, show: fTxt(m1, m2) },
        { q: T`Pripočítaj $${fTex(a, b)}$. Výsledok zapíš v základnom tvare.`, answer: P / L, show: fTxt(P, L), signed: true }
      ]
    }, [
      { value: (a / b + c / d) * (e / f), msg: T.s('Násobenie má prednosť pred sčítaním: najprv vynásob, až potom sčítaj.') }
    ]);
  });

  /* ---------- 2. Percentá, pomer a úmernosť ---------- */

  lesson({
    id: 'r9-percenta', order: 20, title: 'Percentá, pomer a úmernosť',
    summary: 'Základ, počet percent a percentová časť, zmena o percentá, pomer, mierka, priama a nepriama úmernosť.',
    theory: [
      `<p><strong>Percento</strong> je stotina celku: $1\\,\\% = \\frac{1}{100}$. Pri výpočtoch vystupujú tri veličiny: <em>základ</em> $z$ (celok, $100\\,\\%$),
       <em>počet percent</em> $p$ a <em>percentová časť</em> $c$. Platí $c = \\frac{p}{100}\\cdot z$; z toho $z = \\frac{c\\cdot 100}{p}$ a $p = \\frac{c}{z}\\cdot 100$.</p>`,
      `<p><strong>Zmena o percentá:</strong> zvýšenie o $p\\,\\%$ znamená vynásobiť číslom $1 + \\frac{p}{100}$, zníženie číslom $1 - \\frac{p}{100}$.
       Cena 80 € po zľave $25\\,\\%$ je $80\\cdot 0{,}75 = 60$ €.</p>`,
      { fig: 'r9-pomer', caption: 'Rozdelenie 40 € v pomere $2 : 3$: celok má $2 + 3 = 5$ dielov, jeden diel je $40 : 5 = 8$ €, časti sú 16 € a 24 €.' },
      `<p><strong>Pomer</strong> $a : b$ porovnáva dve veličiny. <strong>Mierka mapy</strong> $1 : 50\\,000$ znamená, že 1 cm na mape je $50\\,000\\,\\text{cm} = 500\\,\\text{m}$
       v skutočnosti. <strong>Priama úmernosť:</strong> koľkokrát sa zväčší jedna veličina, toľkokrát sa zväčší aj druhá (počet kusov a cena).
       <strong>Nepriama úmernosť:</strong> koľkokrát sa jedna veličina zväčší, toľkokrát sa druhá zmenší (počet robotníkov a čas práce).</p>`
    ],
    examples: [
      { task: 'Bicykel stál 360 €, po zdražení stojí 414 €. O koľko percent zdražel?',
        steps: ['Rozdiel cien: $414 - 360 = 54$ €.', 'Porovnáme so základom (pôvodnou cenou): $\\frac{54}{360} = 0{,}15 = 15\\,\\%$.',
          '<strong>Bicykel zdražel o 15 %.</strong>'] },
      { task: 'Štyria maliari vymaľujú školu za 6 dní. Za koľko dní by ju vymaľovali traja maliari?',
        steps: ['Ide o nepriamu úmernosť: menej maliarov potrebuje viac dní.', 'Celá práca predstavuje $4\\cdot 6 = 24$ dní práce jedného maliara.',
          '$24 : 3 = 8$.', '<strong>Traja maliari by školu vymaľovali za 8 dní.</strong>'] }
    ]
  });

  const DEN = ['deň', 'dni', 'dní'];

  gen('r9-percenta', () => {
    const t = Math.random();
    if (t < 0.3) {
      const p = pick([5, 10, 15, 20, 25, 30, 40, 45, 60, 75]), z = 20 * rnd(2, 30), c = p * z / 100, k = rnd(0, 2);
      if (k === 0) {
        return withMist({ answer: c, q: T`Koľko je $${p}\\,\\%$ z čísla ${z}?`,
          solution: T`$c = \\frac{${p}}{100}\\cdot ${z} = ${dc(c)}$.`, hint: T.s('Vypočítaj 1 % (vydeľ základ 100) a vynásob počtom percent.'),
          steps: [
            { q: T`Koľko je $1\\,\\%$ z čísla ${z}?`, answer: z / 100 },
            { q: T`Koľko je $${p}\\,\\%$ z čísla ${z}?`, answer: c }
          ] }, [
          { value: z / p, msg: T`Percento je stotina celku: základ vydeľ stomi (to je 1 %) a potom vynásob ${p}. Deliť číslom ${p} je chyba.` },
          { value: z - c, msg: T`Toto je zvyšok po odobratí $${p}\\,\\%$. Úloha sa pýta, koľko je samotných $${p}\\,\\%$.` }
        ]);
      }
      if (k === 1) {
        return withMist({ answer: z, q: T`$${p}\\,\\%$ z neznámeho čísla je ${dc(c)}. Aké je to číslo?`,
          solution: T`$1\\,\\%$ je $${dc(c)} : ${p} = ${dc(c / p)}$, celok ($100\\,\\%$) je $${dc(c / p)}\\cdot 100 = ${z}$.`,
          hint: T.s('Zisti, koľko je 1 %, a potom vynásob 100.'),
          steps: [
            { q: T.s('Koľko je $1\\,\\%$ neznámeho čísla?'), answer: c / p },
            { q: T.s('Koľko je celok, teda $100\\,\\%$?'), answer: z }
          ] }, [
          { value: c * p / 100, msg: T`Číslo ${dc(c)} nie je základ, ale percentová časť – je to len $${p}\\,\\%$ hľadaného čísla. Zisti, koľko je 1 %.` }
        ]);
      }
      return withMist({ answer: p, q: T`Koľko percent je ${dc(c)} z čísla ${z}?`,
        solution: T`$p = \\frac{${dc(c)}}{${z}}\\cdot 100 = ${p}\\,\\%$.`, hint: T.s('Vydeľ časť celkom a výsledok vynásob 100.'),
        steps: [
          { q: T`Akú časť celku tvorí ${dc(c)} z ${z}? Zadaj podiel ako desatinné číslo.`, answer: c / z },
          { q: T.s('Vyjadri túto časť v percentách.'), answer: p }
        ] }, [
        { value: z / c * 100, msg: T.s('Delíš v opačnom poradí: časť vydeľ celkom (základom), nie celok časťou.') }
      ]);
    }
    if (t < 0.55) {
      const p = pick([10, 15, 20, 25, 30, 40, 50]), P = 20 * rnd(2, 25), up = Math.random() < 0.4;
      const N = up ? P * (100 + p) / 100 : P * (100 - p) / 100;
      const mult = dc((up ? 100 + p : 100 - p) / 100);
      if (Math.random() < 0.6) {
        return withMist({ answer: N, q: T`Tovar stál ${P} €. Cena sa ${up ? T.s('zvýšila') : T.s('znížila')} o $${p}\\,\\%$. Koľko eur stojí teraz?`,
          solution: T`Nová cena je $${up ? 100 + p : 100 - p}\\,\\%$ pôvodnej: $${P}\\cdot ${mult} = ${dc(N)}$ €.`,
          hint: T`${up ? T.s('Zvýšenie') : T.s('Zníženie')} o $${p}\\,\\%$ znamená, že nová cena je $${up ? 100 + p : 100 - p}\\,\\%$ pôvodnej.`,
          steps: [
            { q: up ? T.s('O koľko eur sa cena zvýšila?') : T.s('O koľko eur sa cena znížila?'), answer: P * p / 100 },
            { q: T.s('Koľko eur stojí tovar teraz?'), answer: N }
          ] }, [
          { value: P * p / 100, msg: T`Toto je len zmena ceny ($${p}\\,\\%$ z ${P} €). Novú cenu dostaneš, keď ju ${up ? T.s('pripočítaš k pôvodnej cene') : T.s('odpočítaš od pôvodnej ceny')}.` },
          { value: up ? P * (100 - p) / 100 : P * (100 + p) / 100, msg: up ? T.s('Cena sa zvýšila, zmenu preto k pôvodnej cene pripočítaj.') : T.s('Cena sa znížila, zmenu preto od pôvodnej ceny odpočítaj.') }
        ]);
      }
      return withMist({ answer: P, q: T`Po ${up ? T.s('zdražení') : T.s('zľave')} o $${p}\\,\\%$ stojí tovar ${dc(N)} €. Koľko eur stál pôvodne?`,
        solution: T`Nová cena je $${up ? 100 + p : 100 - p}\\,\\%$ pôvodnej, teda pôvodná cena je $${dc(N)} : ${mult} = ${P}$ €.`,
        hint: T.s('Pozor, percentá sa počítajú z pôvodnej ceny. Novú cenu vydeľ číslom, ktorým sa pôvodná cena násobila.'),
        steps: [
          { q: T.s('Koľko percent pôvodnej ceny je nová cena?'), answer: up ? 100 + p : 100 - p },
          { q: T.s('Koľko eur stál tovar pôvodne?'), answer: P }
        ] }, [
        { value: up ? N * (100 - p) / 100 : N * (100 + p) / 100, msg: T`Percentá sa počítajú z pôvodnej ceny, nie z novej. Nová cena je $${up ? 100 + p : 100 - p}\\,\\%$ pôvodnej, preto ju vydeľ číslom $${mult}$.` }
      ]);
    }
    if (t < 0.78) {
      if (Math.random() < 0.55) {
        let a = rnd(1, 7), b = rnd(1, 7);
        while (a === b || gcd(a, b) > 1) { a = rnd(1, 7); b = rnd(1, 7); }
        const k = rnd(2, 15), S = (a + b) * k, big = Math.random() < 0.5;
        const want = big ? Math.max(a, b) * k : Math.min(a, b) * k;
        return withMist({ answer: want,
          q: big ? T`Rozdeľ ${S} € v pomere $${a} : ${b}$. Koľko eur bude väčšia časť?` : T`Rozdeľ ${S} € v pomere $${a} : ${b}$. Koľko eur bude menšia časť?`,
          solution: T`Spolu je $${a} + ${b} = ${a + b}$ dielov, jeden diel je $${S} : ${a + b} = ${k}$ €. Časti sú $${a}\\cdot ${k} = ${a * k}$ € a $${b}\\cdot ${k} = ${b * k}$ €.`,
          hint: T.s('Sčítaj čísla pomeru, tým zistíš počet dielov. Potom vypočítaj, koľko je jeden diel.'),
          steps: [
            { q: T.s('Koľko dielov je spolu?'), answer: a + b },
            { q: T.s('Koľko eur je jeden diel?'), answer: k },
            { q: big ? T.s('Koľko eur bude väčšia časť?') : T.s('Koľko eur bude menšia časť?'), answer: want }
          ] }, [
          { value: big ? Math.min(a, b) * k : Math.max(a, b) * k, msg: big ? T.s('Toto je menšia časť. Úloha sa pýta na väčšiu.') : T.s('Toto je väčšia časť. Úloha sa pýta na menšiu.') },
          { value: k, msg: T.s('Toto je len jeden diel. Časť dostaneš, keď ho vynásobíš príslušným číslom pomeru.') },
          { value: S / (big ? Math.max(a, b) : Math.min(a, b)), msg: T.s('Celú sumu treba deliť počtom všetkých dielov (súčtom čísel pomeru), nie jedným číslom pomeru.') }
        ]);
      }
      const M = pick([10000, 20000, 25000, 50000, 100000, 200000]), d = rnd(2, 12), km = d * M / 100000;
      return { answer: km, q: T`Mapa má mierku $1 : ${String(M).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,')}$. Vzdialenosť dvoch miest na mape je ${d} cm. Koľko kilometrov je to v skutočnosti?`,
        solution: T`$${d}\\cdot ${M} = ${d * M}\\,\\text{cm}$. Keďže $1\\,\\text{km} = 100\\,000\\,\\text{cm}$, je to $${dc(km)}\\,\\text{km}$.`,
        hint: T.s('Vzdialenosť na mape vynásob číslom z mierky a potom centimetre preveď na kilometre (1 km = 100 000 cm).'),
        steps: [
          { q: T.s('Koľko centimetrov je vzdialenosť v skutočnosti?'), answer: d * M },
          { q: T.s('Preveď ju na kilometre.'), answer: km }
        ] };
    }
    if (Math.random() < 0.5) {
      const u = pick([0.4, 0.5, 0.6, 1.2, 1.5, 2.5, 3]), n1 = rnd(2, 6), n2 = rnd(7, 15);
      const c1 = Math.round(u * n1 * 100) / 100, c2 = Math.round(u * n2 * 100) / 100;
      return withMist({ answer: c2, q: T`${n1} ${pl(n1, ['rovnaký zošit stojí', 'rovnaké zošity stoja', 'rovnakých zošitov stojí'])} ${dc(c1)} €. Koľko eur stojí ${n2} takých zošitov?`,
        solution: T`Ide o priamu úmernosť. Jeden zošit stojí $${dc(c1)} : ${n1} = ${dc(u)}$ €, ${n2} zošitov stojí $${n2}\\cdot ${dc(u)} = ${dc(c2)}$ €.`,
        hint: T.s('Najprv zisti cenu jedného zošita.'),
        steps: [
          { q: T.s('Koľko eur stojí jeden zošit?'), answer: u },
          { q: T`Koľko eur stojí ${n2} zošitov?`, answer: c2 }
        ] }, [
        { value: Math.round(c1 * n2 * 100) / 100, msg: T`${dc(c1)} € je cena za ${n1} ${pl(n1, ['zošit', 'zošity', 'zošitov'])}, nie za jeden. Najprv zisti cenu jedného zošita.` },
        { value: Math.round((c1 + (n2 - n1)) * 100) / 100, msg: T.s('Pri priamej úmernosti sa cena nezväčšuje o rovnaký rozdiel ako počet kusov, ale rovnakým násobkom.') }
      ]);
    }
    let w1, d1, w2;
    do { w1 = rnd(2, 8); d1 = rnd(2, 12); w2 = rnd(2, 12); } while (w2 === w1 || (w1 * d1) % w2 !== 0);
    const d2 = w1 * d1 / w2;
    // 2 – 4 robotníci by dokončili, 5 a viac robotníkov by dokončilo
    const crew = (n) => (n <= 4 ? T`${n} robotníci by dokončili` : T`${n} robotníkov by dokončilo`);
    const crew2 = (n) => (n <= 4 ? T`dokončili ${n} robotníci` : T`dokončilo ${n} robotníkov`);
    return withMist({ answer: d2, q: T`${crew(w1)} prácu za ${d1} ${pl(d1, DEN)}. Za koľko dní by rovnakú prácu ${crew2(w2)}?`,
      solution: T`Ide o nepriamu úmernosť. Celá práca predstavuje $${w1}\\cdot ${d1} = ${w1 * d1}$ dní práce jedného robotníka, preto $${w1 * d1} : ${w2} = ${d2}$ ${pl(d2, DEN)}.`,
      hint: T.s('Viac robotníkov potrebuje menej dní. Vypočítaj, koľko dní by prácu robil jeden robotník.'),
      steps: [
        { q: T.s('Za koľko dní by celú prácu urobil jeden robotník?'), answer: w1 * d1 },
        { q: T`Za koľko dní ju urobí ${w2} robotníkov?`, answer: d2 }
      ] }, [
      { value: d1 * w2 / w1, msg: T`Ide o nepriamu úmernosť: ${w2 > w1 ? T.s('viac robotníkov potrebuje menej dní') : T.s('menej robotníkov potrebuje viac dní')}. Dni sa nemenia v rovnakom pomere ako počet robotníkov, ale v obrátenom.` }
    ]);
  });

  /* ---------- 3. Algebraické výrazy a rozklad na súčin ---------- */

  lesson({
    id: 'r9-rozklad', order: 30, title: 'Rozklad výrazov na súčin',
    summary: 'Vynímanie pred zátvorku a rozklad podľa vzorcov $a^2 - b^2$ a $(a \\pm b)^2$.',
    theory: [
      `<p><strong>Rozložiť výraz na súčin</strong> znamená zapísať ho ako súčin jednoduchších výrazov. Je to opačný postup k roznásobovaniu:
       $3x(x + 2) = 3x^2 + 6x$, a naopak $3x^2 + 6x = 3x(x + 2)$.</p>`,
      `<p><strong>Vynímanie pred zátvorku:</strong> nájdeme najväčší spoločný deliteľ všetkých členov (čísla aj premenné) a vyberieme ho
       pred zátvorku: $12a^2 - 8a = 4a(3a - 2)$. Správnosť overíme roznásobením.</p>`,
      { fig: 'r9-rozdiel', caption: 'Zo štvorca so stranou $a$ odstránime štvorec so stranou $b$. Zvyšok rozrežeme na dva obdĺžniky a zložíme ich do jedného s rozmermi $a + b$ a $a - b$: $a^2 - b^2 = (a + b)(a - b)$.' },
      `<p><strong>Rozklad podľa vzorcov:</strong> $a^2 - b^2 = (a + b)(a - b)$, $a^2 + 2ab + b^2 = (a + b)^2$, $a^2 - 2ab + b^2 = (a - b)^2$.
       Vzorce pomáhajú aj pri počítaní spamäti: $51^2 - 49^2 = (51 + 49)(51 - 49) = 100\\cdot 2 = 200$.</p>`
    ],
    examples: [
      { task: 'Rozlož na súčin $5x^2 - 20$.',
        steps: ['Najprv vyberieme spoločného deliteľa 5: $5(x^2 - 4)$.', 'V zátvorke je rozdiel štvorcov $x^2 - 2^2$.',
          '<strong>$5x^2 - 20 = 5(x + 2)(x - 2)$</strong>'] },
      { task: 'Rozlož na súčin $x^2 - 6x + 9$.',
        steps: ['Prvý člen je $x^2$, posledný $9 = 3^2$ a prostredný $6x = 2\\cdot x\\cdot 3$.',
          'Ide o vzorec $a^2 - 2ab + b^2 = (a - b)^2$.', '<strong>$x^2 - 6x + 9 = (x - 3)^2$</strong>'] }
    ]
  });

  gen('r9-rozklad', () => {
    const t = Math.random();
    // why[i] = vysvetlenie k nesprávnej možnosti wrong[i]
    const choice = (expr, ok, wrong, sol, hint, why) => {
      const choiceHints = {};
      wrong.forEach((w, i) => { if (w !== ok && why[i]) choiceHints[`$${w}$`] = why[i]; });
      return {
        type: 'choice', options: shuffle([ok, ...wrong].map((s) => `$${s}$`)), answer: `$${ok}$`, choiceHints,
        q: T`Ktorý zápis je úplný rozklad výrazu $${expr}$ na súčin?`, solution: sol, hint
      };
    };
    if (t < 0.3) {
      const k = rnd(2, 6);
      let p = rnd(1, 5), q = rnd(1, 7);
      while (p === q || gcd(p, q) > 1) { p = rnd(1, 5); q = rnd(1, 7); }
      const s = pick(['+', '-']);
      const expr = `${k * p}x^2 ${s} ${k * q}x`;
      const ok = `${k}x(${lead(p, 'x')} ${s} ${q})`;
      return choice(expr, ok, [`${k}x(${lead(p, 'x')} ${s} ${k * q})`, `x(${k * p}x ${s} ${q})`, `${k}x(${p} ${s} ${q}x)`],
        T`Spoločný deliteľ členov $${k * p}x^2$ a $${k * q}x$ je $${k}x$. Po vydelení zostane $${lead(p, 'x')} ${s} ${q}$, teda $${expr} = ${ok}$. Skúška roznásobením: $${k}x\\cdot ${lead(p, 'x')} = ${k * p}x^2$ a $${k}x\\cdot ${q} = ${k * q}x$.`,
        T.s('Nájdi najväčší spoločný deliteľ čísel aj najvyššiu mocninu premennej, ktorá je v každom člene. Skontroluj roznásobením.'),
        [T`Aj druhý člen treba vydeliť spoločným deliteľom $${k}x$. Skontroluj roznásobením.`,
          T`Pred zátvorku vyber aj číslo ${k}, je spoločným deliteľom oboch koeficientov. Navyše roznásobením nedostaneš pôvodný výraz.`,
          T.s('Skontroluj roznásobením: $x$ musí ostať pri prvom člene, lebo $x^2 : x = x$.')]);
    }
    if (t < 0.55) {
      let m = rnd(1, 3), a = rnd(1, 9);
      while (gcd(m, a) > 1) { m = rnd(1, 3); a = rnd(1, 9); }
      const mx = lead(m, 'x'), expr = `${m === 1 ? '' : m * m}x^2 - ${a * a}`;
      const ok = `(${mx} + ${a})(${mx} - ${a})`;
      return choice(expr, ok, [`(${mx} - ${a})^2`, `(${mx} + ${a})^2`, `(${a} - ${mx})(${a} + ${mx})`],
        T`$${expr} = (${mx})^2 - ${a}^2$, je to rozdiel štvorcov: $a^2 - b^2 = (a + b)(a - b)$, teda $${ok}$.`,
        T.s('Výraz je rozdiel dvoch druhých mocnín. Použi vzorec $a^2 - b^2 = (a + b)(a - b)$.'),
        [T.s('Druhá mocnina rozdielu má aj stredný člen $-2ab$, zadaný výraz ho nemá.'),
          T.s('Druhá mocnina súčtu má aj stredný člen $+2ab$ a na konci plus. Zadaný výraz je rozdiel.'),
          T.s('Roznásob a porovnaj: dostaneš opačné znamienka, ako má zadaný výraz.')]);
    }
    if (t < 0.78) {
      const a = rnd(1, 9), s = pick(['+', '-']), o = s === '+' ? '-' : '+';
      const expr = `x^2 ${s} ${2 * a}x + ${a * a}`, ok = `(x ${s} ${a})^2`;
      return choice(expr, ok, [`(x ${s} ${2 * a})^2`, `(x + ${a})(x - ${a})`, `(x ${o} ${a})^2`],
        T`$${a * a} = ${a}^2$ a $${2 * a}x = 2\\cdot x\\cdot ${a}$, takže ide o vzorec $(a ${s} b)^2 = a^2 ${s} 2ab + b^2$: $${expr} = ${ok}$.`,
        T.s('Skontroluj, či je prvý a posledný člen druhou mocninou a prostredný člen ich dvojnásobným súčinom.'),
        [T`V zátvorke je číslo, ktorého druhá mocnina je posledný člen ${a * a}. Stredný člen je jeho dvojnásobok.`,
          T.s('To je rozklad rozdielu štvorcov $x^2 - b^2$. Zadaný výraz má tri členy.'),
          T.s('Pozri sa na znamienko stredného člena, to rozhoduje o znamienku v zátvorke.')]);
    }
    if (Math.random() < 0.5) {
      const a = rnd(25, 99), b = a - rnd(1, 9);
      return withMist({ answer: (a + b) * (a - b), q: T`Vypočítaj výhodne pomocou vzorca: $${a}^2 - ${b}^2$.`,
        solution: T`$${a}^2 - ${b}^2 = (${a} + ${b})(${a} - ${b}) = ${a + b}\\cdot ${a - b} = ${(a + b) * (a - b)}$.`,
        hint: T.s('Použi vzorec $a^2 - b^2 = (a + b)(a - b)$.'),
        steps: [
          { q: T`Koľko je $${a} + ${b}$?`, answer: a + b },
          { q: T`Koľko je $${a} - ${b}$?`, answer: a - b },
          { q: T.s('Vynásob oba výsledky.'), answer: (a + b) * (a - b) }
        ] }, [
        { value: (a - b) * (a - b), msg: T.s('$a^2 - b^2$ sa nerovná $(a - b)^2$. Použi vzorec $a^2 - b^2 = (a + b)(a - b)$.') },
        { value: 2 * (a - b), msg: T.s('Druhá mocnina nie je dvojnásobok. Použi vzorec $a^2 - b^2 = (a + b)(a - b)$.') }
      ]);
    }
    const k = rnd(3, 99), a = rnd(11, 89), b = 100 - a;
    return withMist({ answer: 100 * k, q: T`Vypočítaj výhodne vynímaním: $${k}\\cdot ${a} + ${k}\\cdot ${b}$.`,
      solution: T`$${k}\\cdot ${a} + ${k}\\cdot ${b} = ${k}\\cdot(${a} + ${b}) = ${k}\\cdot 100 = ${100 * k}$.`,
      hint: T.s('Oba sčítance majú spoločného činiteľa, vyber ho pred zátvorku.'),
      steps: [
        { q: T`Vyber ${k} pred zátvorku. Koľko je v zátvorke $${a} + ${b}$?`, answer: 100 },
        { q: T`Vynásob výsledok číslom ${k}.`, answer: 100 * k }
      ] }, [
      { value: k + 100, msg: T`Spoločný činiteľ ${k} násobí celú zátvorku, nepripočítava sa k nej.` }
    ]);
  });

  /* ---------- 4. Lineárne rovnice, sústavy a slovné úlohy ---------- */

  lesson({
    id: 'r9-rovnice', order: 40, title: 'Rovnice, sústavy rovníc a slovné úlohy',
    summary: 'Rovnice so zlomkami, sústava dvoch rovníc, úlohy o pohybe a o spoločnej práci.',
    theory: [
      `<p><strong>Rovnice so zlomkami</strong> riešime tak, že obe strany vynásobíme spoločným násobkom menovateľov a zlomkov sa zbavíme.
       Napríklad rovnicu $\\frac{x}{2} + \\frac{x}{3} = 10$ vynásobíme číslom 6: $3x + 2x = 60$, teda $x = 12$.</p>`,
      `<p><strong>Sústava dvoch lineárnych rovníc</strong> s dvoma neznámymi má riešenie, ktoré vyhovuje obom rovniciam naraz.
       <em>Sčítacia metóda:</em> rovnice vynásobíme tak, aby sa po ich sčítaní (alebo odčítaní) jedna neznáma vyrušila.
       <em>Dosadzovacia metóda:</em> z jednej rovnice vyjadríme neznámu a dosadíme ju do druhej.</p>`,
      `<p><strong>Úlohy o pohybe:</strong> dráha $s = v\\cdot t$. Ak idú dve telesá oproti sebe, ich vzdialenosť sa každú hodinu zmenšuje
       o súčet rýchlostí $v_1 + v_2$; ak jedno dobieha druhé, rozdiel sa zmenšuje o $v_2 - v_1$. <strong>Úlohy o spoločnej práci:</strong>
       kto urobí prácu za $a$ hodín, urobí za hodinu $\\frac{1}{a}$ práce; ak pracujú dvaja spolu čas $t$, platí $\\frac{t}{a} + \\frac{t}{b} = 1$.</p>`
    ],
    examples: [
      { task: 'Vyrieš sústavu rovníc $x + y = 10$ a $x - y = 4$.',
        steps: ['Rovnice sčítame, $y$ sa vyruší: $2x = 14$, teda $x = 7$.', 'Dosadíme do prvej rovnice: $7 + y = 10$, $y = 3$.',
          'Skúška v druhej rovnici: $7 - 3 = 4$ ✓', '<strong>Riešenie: $x = 7$, $y = 3$.</strong>'] },
      { task: 'Z dvoch miest vzdialených 210 km vyrazili súčasne oproti sebe auto rýchlosťou $80\\,\\text{km/h}$ a autobus rýchlosťou $60\\,\\text{km/h}$. Za ako dlho sa stretnú?',
        steps: ['Za hodinu sa priblížia o $80 + 60 = 140\\,\\text{km}$.', 'Rovnica: $140\\,t = 210$, teda $t = 1{,}5\\,\\text{h}$.',
          '<strong>Stretnú sa o 1,5 hodiny, teda o 1 h 30 min.</strong>'] }
    ]
  });

  const WORK = [[3, 6], [4, 12], [6, 12], [10, 15], [12, 24], [2, 6], [4, 4], [20, 30], [5, 20], [8, 24], [9, 18], [6, 3]];

  gen('r9-rovnice', () => {
    const t = Math.random();
    if (t < 0.3) {
      if (Math.random() < 0.5) {
        let a = rnd(2, 6), b = rnd(2, 6);
        while (a === b) b = rnd(2, 6);
        const L = lcm(a, b), x = L * nz(-4, 5), c = x / a + x / b;
        return withMist({ signed: true, answer: x, q: T`Vyrieš rovnicu $\\frac{x}{${a}} + \\frac{x}{${b}} = ${c}$.`,
          solution: T`Obe strany vynásobíme číslom ${L}: $${lead(L / a, 'x')} + ${lead(L / b, 'x')} = ${c * L}$, teda $${L / a + L / b}x = ${c * L}$ a $x = ${x}$.`,
          hint: T.s('Vynásob obe strany najmenším spoločným násobkom menovateľov.'),
          steps: [
            { q: T`Akým najmenším číslom vynásobíš rovnicu, aby zmizli oba menovatele ${a} a ${b}?`, answer: L },
            { q: T`Po vynásobení a spojení členov dostaneš rovnicu tvaru $\\square\\, x = ${c * L}$. Aký koeficient je pri $x$?`, answer: L / a + L / b },
            { q: T.s('Aké je $x$?'), answer: x, signed: true }
          ] }, [
          { value: c * (a + b), msg: T.s('Zlomky sa nesčítavajú sčítaním menovateľov: $\\frac{x}{a} + \\frac{x}{b}$ nie je $\\frac{x}{a + b}$. Vynásob rovnicu spoločným násobkom menovateľov.') },
          { value: c / (L / a + L / b), msg: T`Spoločným násobkom ${L} vynásob obe strany rovnice, aj pravú stranu.` }
        ]);
      }
      let x, b, d, a, e;
      do {
        x = rnd(-8, 10); b = rnd(2, 5); d = rnd(2, 5);
        const p = nz(-4, 5);
        a = b * p - x; e = d * p - x;
      } while (b === d || a === 0 || e === 0);
      return withMist({ signed: true, answer: x, q: T`Vyrieš rovnicu $\\frac{x${term(a)}}{${b}} = \\frac{x${term(e)}}{${d}}$.`,
        solution: T`Obe strany vynásobíme číslom ${b * d}: $${d}(x${term(a)}) = ${b}(x${term(e)})$, teda $${d}x${term(d * a)} = ${b}x${term(b * e)}$. Potom $${lead(d - b, 'x')} = ${b * e - d * a}$${d - b === 1 ? '' : T`, teda $x = ${x}$`}.`,
        hint: T.s('Vynásob obe strany súčinom menovateľov; čitatele daj do zátvoriek.'),
        steps: [
          { q: T`Vynásob obe strany číslom ${b * d} a roznásob zátvorky. Členy s $x$ daj naľavo, čísla napravo. Aký koeficient bude pri $x$?`, answer: d - b, signed: true },
          { q: T.s('Aké číslo bude na pravej strane?'), answer: b * e - d * a, signed: true },
          { q: T.s('Aké je $x$?'), answer: x, signed: true }
        ] }, [
        { value: (e - a) / (d - b), msg: T.s('Čitateľ je celý výraz: pri násobení ho daj do zátvorky a vynásob oba jeho členy, aj samotné číslo.') }
      ]);
    }
    if (t < 0.55) {
      let a1, b1, a2, b2;
      do { a1 = rnd(1, 3); a2 = rnd(1, 3); b1 = nz(-4, 4); b2 = nz(-4, 4); } while (a1 * b2 - a2 * b1 === 0);
      const x = nz(-6, 8), y = nz(-6, 8), c1 = a1 * x + b1 * y, c2 = a2 * x + b2 * y;
      const e1 = `${lead(a1, 'x')}${term(b1, 'y')} = ${c1}`, e2 = `${lead(a2, 'x')}${term(b2, 'y')} = ${c2}`;
      // od a2-násobku prvej rovnice odčítame a1-násobok druhej (pri a1 = a2 stačí rovnice odčítať)
      const [m1, m2] = a1 === a2 ? [1, 1] : [a2, a1];
      const elim = a1 === a2 ? T.s('Druhú rovnicu odčítame od prvej')
        : m2 === 1 ? T`Prvú rovnicu vynásobíme číslom ${m1} a odčítame od nej druhú`
          : m1 === 1 ? T`Druhú rovnicu vynásobíme číslom ${m2} a odčítame ju od prvej`
            : T`Prvú rovnicu vynásobíme číslom ${m1}, druhú číslom ${m2} a druhú odčítame od prvej`;
      const B = b1 * m1 - b2 * m2, Cc = c1 * m1 - c2 * m2;
      return { type: 'tuple', signed: true, answer: [x, y], placeholder: 'x; y',
        q: T`Vyrieš sústavu rovníc $${e1}$ a $${e2}$. Zadaj $x$ a $y$ oddelené bodkočiarkou.`,
        solution: T`${elim}, $x$ sa vyruší: $${lead(B, 'y')} = ${Cc}$, teda $y = ${y}$. Dosadíme do prvej rovnice: $${lead(a1, 'x')}${term(b1 * y)} = ${c1}$, teda $x = ${x}$.`,
        hint: T.s('Uprav rovnice tak, aby mala jedna neznáma v oboch rovnaký koeficient, a rovnice odčítaj.'),
        steps: [
          { q: T`${elim}. Neznáma $x$ sa vyruší a ostane rovnica tvaru $\\square\\, y = ${Cc}$. Aký koeficient je pri $y$?`, answer: B, signed: true },
          { q: T.s('Aké je $y$?'), answer: y, signed: true },
          { q: T.s('Dosaď $y$ do prvej rovnice. Aké je $x$?'), answer: x, signed: true },
          { q: T.s('Zapíš riešenie sústavy: $x$ a $y$ oddelené bodkočiarkou.'), answer: [x, y], type: 'tuple', signed: true, placeholder: 'x; y' }
        ] };
    }
    if (t < 0.8) {
      if (Math.random() < 0.5) {
        const v1 = 10 * rnd(5, 12), v2 = 10 * rnd(3, 10), tt = pick([1, 1.5, 2, 2.5, 3]), s = (v1 + v2) * tt;
        return withMist({ answer: tt,
          q: T`Z dvoch miest vzdialených ${s} km vyrazili v rovnakom čase oproti sebe osobné auto rýchlosťou $${v1}\\,\\text{km/h}$ a nákladné auto rýchlosťou $${v2}\\,\\text{km/h}$. Za koľko hodín sa stretnú?`,
          solution: T`Za hodinu sa priblížia o $${v1} + ${v2} = ${v1 + v2}\\,\\text{km}$. Rovnica: $${v1 + v2}\\,t = ${s}$, teda $t = ${dc(tt)}\\,\\text{h}$.`,
          hint: T.s('Keď idú oproti sebe, ich rýchlosti sa sčítajú.'),
          steps: [
            { q: T.s('O koľko kilometrov sa autá priblížia za jednu hodinu?'), answer: v1 + v2 },
            { q: T.s('Za koľko hodín sa stretnú?'), answer: tt }
          ] }, [
          v1 !== v2 && { value: s / Math.abs(v1 - v2), msg: T.s('Autá idú oproti sebe, preto sa za hodinu priblížia o súčet rýchlostí, nie o rozdiel.') },
          { value: s / v1, msg: T.s('Nákladné auto ide tiež, oproti osobnému. Za hodinu sa priblížia o súčet oboch rýchlostí.') }
        ]);
      }
      let diff, tt, v1;
      do { diff = pick([10, 20, 30]); tt = rnd(1, 4); v1 = tt * diff; } while (v1 < 40 || v1 > 90);
      const v2 = v1 + diff;
      return withMist({ answer: tt,
        q: T`Nákladné auto vyrazilo rýchlosťou $${v1}\\,\\text{km/h}$. O hodinu neskôr za ním z rovnakého miesta vyrazilo osobné auto rýchlosťou $${v2}\\,\\text{km/h}$. Za koľko hodín od svojho štartu dobehne osobné auto nákladné?`,
        solution: T`Nákladné auto má náskok $${v1}\\,\\text{km}$. Rovnica: $${v2}t = ${v1}(t + 1)$, teda $${diff}t = ${v1}$ a $t = ${tt}\\,\\text{h}$.`,
        hint: T.s('Obe autá prejdú do stretnutia rovnakú dráhu. Nákladné auto ide o hodinu dlhšie: $s = v_1(t + 1)$.'),
        steps: [
          { q: T.s('Aký náskok (v km) má nákladné auto, keď osobné auto štartuje?'), answer: v1 },
          { q: T.s('O koľko kilometrov sa náskok zmenší za každú hodinu?'), answer: diff },
          { q: T.s('Za koľko hodín osobné auto dobehne nákladné?'), answer: tt }
        ] }, [
        { value: tt + 1, msg: T.s('Toto je čas nákladného auta, ktoré išlo o hodinu dlhšie. Úloha sa pýta na čas od štartu osobného auta.') }
      ]);
    }
    const [a, b] = pick(WORK), tt = a * b / (a + b);
    return withMist({ answer: tt,
      q: T`Prvé čerpadlo vyčerpá vodu z bazéna za ${a} ${pl(a, HOD)}, druhé za ${b} ${pl(b, HOD)}. Za koľko hodín vyčerpajú bazén, ak budú pracovať spolu?`,
      solution: T`Za hodinu vyčerpá prvé $\\frac{1}{${a}}$ a druhé $\\frac{1}{${b}}$ bazéna. Rovnica: $\\frac{t}{${a}} + \\frac{t}{${b}} = 1$. Vynásobíme ${a * b}: $${b}t + ${a}t = ${a * b}$, teda $t = \\frac{${a * b}}{${a + b}} = ${dc(tt)}\\,\\text{h}$.`,
      hint: T.s('Zisti, akú časť bazéna vyčerpá každé čerpadlo za hodinu. Spolu musia vyčerpať celý bazén, teda 1.'),
      steps: [
        { q: T.s('Akú časť bazéna vyčerpajú obe čerpadlá spolu za jednu hodinu? Zadaj zlomok v základnom tvare.'), answer: (a + b) / (a * b), show: fTxt(a + b, a * b) },
        { q: T.s('Za koľko hodín vyčerpajú celý bazén?'), answer: tt }
      ] }, [
      { value: a + b, msg: T.s('Keď pracujú spolu, sú rýchlejšie ako každé čerpadlo samo. Časy sa nesčítavajú.') },
      { value: (a + b) / 2, msg: T`Priemer časov to nie je: spolu to musia zvládnuť rýchlejšie ako rýchlejšie z čerpadiel, teda za menej ako ${Math.min(a, b)} ${pl(Math.min(a, b), HOD)}.` }
    ]);
  });

  /* ---------- 5. Súradnicová sústava ---------- */

  lesson({
    id: 'r9-suradnice', order: 50, title: 'Súradnicová sústava',
    summary: 'Súradnice bodu, kvadranty, stred úsečky a súmernosť podľa osí.',
    theory: [
      `<p><strong>Pravouhlá súradnicová sústava</strong> v rovine má dve na seba kolmé číselné osi: vodorovnú os $x$ a zvislú os $y$.
       Pretínajú sa v <strong>začiatku</strong> $O[0;\\, 0]$. Polohu bodu udávajú dve súradnice $A[x;\\, y]$ – najprv vodorovná, potom zvislá.</p>`,
      { fig: 'r9-body', caption: 'Body v štyroch kvadrantoch. K bodu $A[3;\\, 2]$ sa dostaneme tak, že zo začiatku ideme 3 dieliky doprava a 2 dieliky hore.' },
      `<p>Osi delia rovinu na štyri <strong>kvadranty</strong>, číslované proti smeru hodinových ručičiek: I. ($x &gt; 0$, $y &gt; 0$),
       II. ($x &lt; 0$, $y &gt; 0$), III. ($x &lt; 0$, $y &lt; 0$) a IV. ($x &gt; 0$, $y &lt; 0$). Body na osiach nepatria do žiadneho kvadrantu.</p>`,
      `<p><strong>Stred úsečky</strong> $AB$ má súradnice rovné priemeru súradníc krajných bodov: $S\\left[\\frac{x_A + x_B}{2};\\, \\frac{y_A + y_B}{2}\\right]$.
       Bod súmerný s bodom $[x;\\, y]$ podľa osi $x$ je $[x;\\, -y]$, podľa osi $y$ je $[-x;\\, y]$ a podľa začiatku $[-x;\\, -y]$.
       V súradnicovej sústave kreslíme aj <strong>grafy</strong> závislostí, napríklad dráhy od času.</p>`
    ],
    examples: [
      { task: 'Urči stred úsečky $AB$, ak $A[-2;\\, 5]$ a $B[6;\\, 1]$.',
        steps: ['$x_S = \\frac{-2 + 6}{2} = 2$.', '$y_S = \\frac{5 + 1}{2} = 3$.', '<strong>$S[2;\\, 3]$</strong>'] },
      { task: 'V ktorom kvadrante leží bod $P[-4;\\, -1]$?',
        steps: ['Obe súradnice sú záporné: bod je vľavo od osi $y$ a pod osou $x$.', '<strong>Bod $P$ leží v III. kvadrante.</strong>'] }
    ]
  });

  const KVAD = ['I. kvadrant', 'II. kvadrant', 'III. kvadrant', 'IV. kvadrant', 'leží na osi'];
  const DIEL = ['dielik', 'dieliky', 'dielikov'];

  gen('r9-suradnice', () => {
    const t = Math.random();
    if (t < 0.3) {
      let x, y;
      do { x = rnd(-5, 5); y = rnd(-5, 5); } while (x === 0 && y === 0);
      const p = plane(-6, 6, -6, 6, 280, 280, 18);
      const front = `<circle class="f-dot" cx="${n1(p.X(x))}" cy="${n1(p.Y(y))}" r="6"/>
        <text class="f-math" x="${n1(p.X(x) + 8)}" y="${n1(p.Y(y) - 8)}">P</text>`;
      return { type: 'tuple', signed: true, answer: [x, y], placeholder: 'x; y',
        q: T`Aké súradnice má bod $P$? Zadaj $x$ a $y$ oddelené bodkočiarkou. ${svg(p, axes(p), '', front, 'Bod P v súradnicovej sústave')}`,
        solution: T`Bod $P$ je ${x === 0 ? T.s('na osi $y$') : x > 0 ? T`${Math.abs(x)} ${pl(Math.abs(x), DIEL)} vpravo od osi $y$` : T`${Math.abs(x)} ${pl(Math.abs(x), DIEL)} vľavo od osi $y$`} a ${y === 0 ? T.s('na osi $x$') : y > 0 ? T`${Math.abs(y)} ${pl(Math.abs(y), DIEL)} nad osou $x$` : T`${Math.abs(y)} ${pl(Math.abs(y), DIEL)} pod osou $x$`}: $${pt('P', x, y)}$.`,
        hint: T.s('Prvá súradnica je vodorovná (vľavo záporná), druhá zvislá (dole záporná).') };
    }
    if (t < 0.55) {
      let x = nz(-9, 9), y = nz(-9, 9);
      if (Math.random() < 0.2) { if (Math.random() < 0.5) x = 0; else y = 0; }
      const K = KVAD.map((o) => T.s(o));
      const ans = x === 0 || y === 0 ? K[4] : x > 0 ? (y > 0 ? K[0] : K[3]) : (y > 0 ? K[1] : K[2]);
      const choiceHints = {};
      if (ans === K[4]) {
        K.slice(0, 4).forEach((k) => { choiceHints[k] = T.s('Jedna zo súradníc je nula, bod preto leží na osi. Body na osiach nepatria do žiadneho kvadrantu.'); });
      } else if ((x > 0) !== (y > 0)) {
        // zámena súradníc alebo číslovanie v smere hodinových ručičiek: II ↔ IV
        choiceHints[ans === K[1] ? K[3] : K[1]] = T.s('Pozor na poradie súradníc: prvá je $x$ (vľavo záporná, vpravo kladná), druhá $y$ (dole záporná, hore kladná). Kvadranty sa číslujú proti smeru hodinových ručičiek.');
      }
      return { type: 'choice', options: K, answer: ans, q: T`Kde leží bod $${pt('A', x, y)}$?`, choiceHints,
        solution: x === 0 || y === 0
          ? T`Jedna súradnica je nulová, bod leží na osi ${x === 0 ? '$y$' : '$x$'} a nepatrí do žiadneho kvadrantu.`
          : T`$x$ je ${x > 0 ? T.s('kladné') : T.s('záporné')} a $y$ je ${y > 0 ? T.s('kladné') : T.s('záporné')}, preto bod leží v časti ${ans}.`,
        hint: T.s('Pozri sa na znamienka oboch súradníc. I. kvadrant je vpravo hore, ďalšie idú proti smeru hodinových ručičiek.') };
    }
    if (t < 0.8) {
      const xa = rnd(-8, 8), ya = rnd(-8, 8), xb = rnd(-8, 8), yb = rnd(-8, 8);
      const sx = (xa + xb) / 2, sy = (ya + yb) / 2;
      return withMist({ type: 'tuple', signed: true, answer: [sx, sy], placeholder: 'x; y',
        q: T`Urči súradnice stredu $S$ úsečky $AB$, ak $${pt('A', xa, ya)}$ a $${pt('B', xb, yb)}$. Zadaj $x$ a $y$ oddelené bodkočiarkou.`,
        solution: T`$x_S = \\frac{${xa} + ${par(xb)}}{2} = ${dc(sx)}$, $y_S = \\frac{${ya} + ${par(yb)}}{2} = ${dc(sy)}$, teda $${pt('S', dc(sx), dc(sy))}$.`,
        hint: T.s('Každá súradnica stredu je priemerom príslušných súradníc krajných bodov.'),
        steps: [
          { q: T.s('Vypočítaj prvú súradnicu stredu $x_S$.'), answer: sx, signed: true },
          { q: T.s('Vypočítaj druhú súradnicu stredu $y_S$.'), answer: sy, signed: true },
          { q: T.s('Zapíš súradnice stredu $S$ oddelené bodkočiarkou.'), answer: [sx, sy], type: 'tuple', signed: true, placeholder: 'x; y' }
        ] }, [
        { value: [(xb - xa) / 2, (yb - ya) / 2], msg: T.s('Súradnice stredu nie sú polovicou rozdielu súradníc, ale ich priemerom: súradnice sčítaj a vydeľ dvoma.') },
        { value: [xa + xb, ya + yb], msg: T.s('Súčet súradníc ešte vydeľ dvoma, stred je ich priemer.') }
      ]);
    }
    const x = nz(-9, 9), y = nz(-9, 9), k = rnd(0, 2);
    const [name, ans] = [[T.s('osi $x$'), [x, -y]], [T.s('osi $y$'), [-x, y]], [T.s('začiatku sústavy $O$'), [-x, -y]]][k];
    const AXM = T.s('Pri súmernosti podľa osi sa mení znamienko tej súradnice, ktorá meria vzdialenosť od osi: podľa osi $x$ je to $y$, podľa osi $y$ je to $x$.');
    return withMist({ type: 'tuple', signed: true, answer: ans, placeholder: 'x; y',
      q: T`Urči súradnice bodu $A'$, ktorý je súmerný s bodom $${pt('A', x, y)}$ podľa ${name}. Zadaj $x$ a $y$ oddelené bodkočiarkou.`,
      solution: T`${k === 0 ? T.s('Pri súmernosti podľa osi $x$ sa mení znamienko druhej súradnice') : k === 1 ? T.s('Pri súmernosti podľa osi $y$ sa mení znamienko prvej súradnice') : T.s('Pri súmernosti podľa začiatku sa menia znamienka oboch súradníc')}: $${pt("A'", ans[0], ans[1])}$.`,
      hint: T.s('Nakresli si bod a jeho obraz. Súradnica, ktorá je kolmá na os súmernosti, zmení znamienko.') },
    k === 0 ? [{ value: [-x, y], msg: AXM }, { value: [-x, -y], msg: T.s('Pri súmernosti podľa osi sa mení znamienko len jednej súradnice. Obe sa menia pri súmernosti podľa začiatku.') }]
      : k === 1 ? [{ value: [x, -y], msg: AXM }, { value: [-x, -y], msg: T.s('Pri súmernosti podľa osi sa mení znamienko len jednej súradnice. Obe sa menia pri súmernosti podľa začiatku.') }]
        : [{ value: [x, -y], msg: T.s('Pri súmernosti podľa začiatku sa menia znamienka oboch súradníc.') }, { value: [-x, y], msg: T.s('Pri súmernosti podľa začiatku sa menia znamienka oboch súradníc.') }]);
  });

  /* ---------- 6. Funkcie ---------- */

  lesson({
    id: 'r9-funkcie', order: 60, title: 'Funkcie a ich grafy',
    summary: 'Pojem funkcie, lineárna funkcia $y = kx + q$, priama a nepriama úmernosť, priesečníky s osami.',
    theory: [
      `<p><strong>Funkcia</strong> je predpis, ktorý každému číslu $x$ z definičného oboru priradí <em>práve jedno</em> číslo $y$.
       Zapisujeme $y = f(x)$, napríklad $f(x) = 2x - 1$; potom $f(3) = 2\\cdot 3 - 1 = 5$. Funkciu môžeme zadať vzorcom, tabuľkou alebo grafom.</p>`,
      `<p><strong>Lineárna funkcia</strong> má predpis $y = kx + q$ a jej grafom je priamka. Číslo $q$ určuje priesečník s osou $y$, bod $[0;\\, q]$.
       Číslo $k$ hovorí, o koľko sa zmení $y$, keď $x$ zväčšíme o 1: pre $k &gt; 0$ je funkcia <strong>rastúca</strong>,
       pre $k &lt; 0$ <strong>klesajúca</strong> a pre $k = 0$ <strong>konštantná</strong>.</p>`,
      { fig: 'r9-linearna', caption: 'Graf funkcie $y = kx + q$. Posúvaj $k$ a $q$: číslo $k$ mení sklon priamky, číslo $q$ ju posúva hore a dole. Modrý bod je priesečník s osou $y$, zelený s osou $x$.' },
      `<p><strong>Priama úmernosť</strong> $y = kx$ je lineárna funkcia s $q = 0$, jej graf prechádza začiatkom. <strong>Nepriama úmernosť</strong>
       $y = \\frac{k}{x}$ nie je lineárna, jej grafom je hyperbola. Priesečník grafu lineárnej funkcie s osou $x$ nájdeme riešením rovnice $kx + q = 0$.</p>`
    ],
    examples: [
      { task: 'Urči priesečníky grafu funkcie $y = 2x - 6$ s osami.',
        steps: ['S osou $y$: dosadíme $x = 0$, dostaneme $y = -6$, teda bod $[0;\\, -6]$.', 'S osou $x$: $2x - 6 = 0$, $x = 3$, teda bod $[3;\\, 0]$.'] },
      { task: 'Lineárna funkcia prechádza bodmi $A[1;\\, 5]$ a $B[3;\\, 9]$. Urči jej predpis.',
        steps: ['Keď sa $x$ zväčší o 2, $y$ sa zväčší o 4, teda $k = \\frac{4}{2} = 2$.', 'Dosadíme bod $A$: $5 = 2\\cdot 1 + q$, teda $q = 3$.',
          '<strong>$y = 2x + 3$</strong>'] }
    ]
  });

  gen('r9-funkcie', () => {
    const t = Math.random();
    if (t < 0.25) {
      if (Math.random() < 0.7) {
        const k = nz(-5, 5), q = rnd(-9, 9), a = nz(-6, 6);
        return withMist({ signed: true, answer: k * a + q, q: T`Pre funkciu $f(x) = ${poly([k, q])}$ vypočítaj $f(${a})$.`,
          solution: T`$f(${a}) = ${k === 1 ? '' : k === -1 ? '-' : k + '\\cdot '}${par(a)}${term(q)} = ${k * a}${term(q)} = ${k * a + q}$.`,
          hint: T.s('Za $x$ dosaď zadané číslo.') }, [
          Math.abs(k) !== 1 && { value: k + a + q, msg: T`Zápis $${lead(k, 'x')}$ znamená súčin $${k}\\cdot x$. Dosadené číslo vynásob, nepripočítaj.` }
        ]);
      }
      const k = pick([1.5, 2.5, 3, 4, 0.5, 2]), x1 = pick([2, 4, 6]), x2 = pick([8, 10, 12, 3, 5]);
      return withMist({ answer: k * x2, q: T`Veličina $y$ je priamo úmerná veličine $x$. Pre $x = ${x1}$ je $y = ${dc(k * x1)}$. Aké je $y$ pre $x = ${x2}$?`,
        solution: T`Pri priamej úmernosti $y = kx$: $k = ${dc(k * x1)} : ${x1} = ${dc(k)}$, teda $y = ${dc(k)}\\cdot ${x2} = ${dc(k * x2)}$.`,
        hint: T.s('Vypočítaj konštantu úmernosti $k = \\frac{y}{x}$.'),
        steps: [
          { q: T.s('Vypočítaj konštantu úmernosti $k = \\frac{y}{x}$.'), answer: k },
          { q: T`Aké je $y$ pre $x = ${x2}$?`, answer: k * x2 }
        ] }, [
        { value: k * x1 + (x2 - x1), msg: T.s('Pri priamej úmernosti sa $y$ nemení o rovnaký rozdiel ako $x$, ale rovnakým násobkom. Vypočítaj $k = \\frac{y}{x}$.') },
        { value: k * x1 * x1 / x2, msg: T.s('To by platilo pri nepriamej úmernosti. Pri priamej úmernosti s rastúcim $x$ rastie aj $y$ rovnakým násobkom.') }
      ]);
    }
    if (t < 0.5) {
      const x0 = nz(-6, 6), k = nz(-4, 4), q = -k * x0, askX = Math.random() < 0.6;
      return withMist({ signed: true, answer: askX ? x0 : q,
        steps: askX ? [
          { q: T`Polož $y = 0$ a presuň číslo na pravú stranu: $${lead(k, 'x')} = \\square$. Aké číslo je napravo?`, answer: -q, signed: true },
          { q: T.s('Aké je $x_0$?'), answer: x0, signed: true }
        ] : undefined,
        q: askX ? T`Graf funkcie $y = ${poly([k, q])}$ pretína os $x$ v bode $[x_0;\\, 0]$. Urči $x_0$.` : T`Graf funkcie $y = ${poly([k, q])}$ pretína os $y$ v bode $[0;\\, y_0]$. Urči $y_0$.`,
        solution: askX ? T`Položíme $y = 0$: $${poly([k, q])} = 0$, teda $${lead(k, 'x')} = ${-q}$ a $x_0 = ${x0}$.`
          : T`Dosadíme $x = 0$: $y_0 = ${q}$. Je to absolútny člen $q$ v predpise.`,
        hint: askX ? T.s('Na osi $x$ je $y = 0$. Vyrieš rovnicu $kx + q = 0$.') : T.s('Na osi $y$ je $x = 0$.') },
      askX ? [{ value: q, msg: T.s('Číslo $q$ udáva priesečník s osou $y$. Pre priesečník s osou $x$ polož $y = 0$ a vyrieš rovnicu.') }]
        : [{ value: x0, msg: T.s('Toto je priesečník s osou $x$. Na osi $y$ je $x = 0$, dosaď ho do predpisu.') },
          { value: k, msg: T.s('Číslo $k$ určuje sklon priamky. Priesečník s osou $y$ dostaneš dosadením $x = 0$.') }]);
    }
    if (t < 0.7) {
      const k = rnd(-4, 4), q = rnd(-8, 8);
      let f;
      if (k === 0) f = `y = ${q}`;
      else if (Math.random() < 0.5 && q !== 0) f = `y = ${q}${term(k, 'x')}`;
      else f = `y = ${poly([k, q])}`;
      const [up, down, flat] = ['rastúca', 'klesajúca', 'konštantná'].map((o) => T.s(o));
      const ans = k > 0 ? up : k < 0 ? down : flat;
      const choiceHints = {};
      if (k === 0) {
        choiceHints[q > 0 ? up : down] = T.s('V predpise nie je člen s $x$. Hodnota $y$ sa pri zmene $x$ nemení, číslo $q$ len posúva graf hore alebo dole.');
      } else {
        choiceHints[k > 0 ? down : up] = T.s('Rozhoduje znamienko koeficientu pri $x$, nie prvé číslo v predpise ani absolútny člen.');
      }
      return { type: 'choice', options: [up, down, flat], answer: ans, q: T`Aká je funkcia $${f}$?`, choiceHints,
        solution: k === 0 ? T.s('V predpise nie je člen s $x$, teda $k = 0$ a funkcia je konštantná – jej graf je vodorovná priamka.')
          : T`Koeficient pri $x$ je $k = ${k}$, to je ${k > 0 ? T.s('kladné') : T.s('záporné')} číslo, preto je funkcia ${ans}.`,
        hint: T.s('Rozhoduje znamienko čísla $k$, ktoré stojí pri $x$ (nemusí byť na začiatku predpisu).') };
    }
    let k, q, x1, x2;
    do { k = nz(-3, 3); q = rnd(-4, 4); x1 = rnd(-4, 1); x2 = x1 + rnd(1, 4); }
    while (Math.abs(k * x1 + q) > 5 || Math.abs(k * x2 + q) > 5 || x2 > 5);
    const y1 = k * x1 + q, y2 = k * x2 + q;
    let show = '';
    if (Math.random() < 0.5) {
      const p = plane(-6, 6, -6, 6, 280, 280, 18);
      const dots = [[x1, y1], [x2, y2]].map(([x, y]) => `<circle class="f-dot" cx="${n1(p.X(x))}" cy="${n1(p.Y(y))}" r="5"/>`).join('');
      show = T` Graf: ${svg(p, axes(p), `<path class="f-accent" d="${curvePath(p, (x) => k * x + q, -6, 6, 2)}"/>${dots}`, '', 'Graf lineárnej funkcie')} Vyznačené body majú celočíselné súradnice.`;
    }
    const kw = (x2 - x1) / (y2 - y1);
    return withMist({ type: 'tuple', signed: true, answer: [k, q], placeholder: 'k; q',
      q: T`Graf lineárnej funkcie $y = kx + q$ prechádza bodmi $${pt('A', x1, y1)}$ a $${pt('B', x2, y2)}$. Urči $k$ a $q$, zadaj ich oddelené bodkočiarkou.${show}`,
      solution: T`$k = \\frac{${y2} - ${par(y1)}}{${x2} - ${par(x1)}} = \\frac{${y2 - y1}}{${x2 - x1}} = ${k}$. Dosadíme bod $A$: $${y1} = ${k === 1 ? '' : k === -1 ? '-' : k + '\\cdot '}${par(x1)} + q$, teda $q = ${q}$.`,
      hint: T.s('$k$ je zmena $y$ delená zmenou $x$. Potom dosaď jeden bod do $y = kx + q$ a vypočítaj $q$.'),
      steps: [
        { q: T.s('Vypočítaj $k$ ako zmenu $y$ delenú zmenou $x$.'), answer: k, signed: true },
        { q: T.s('Dosaď bod $A$ do $y = kx + q$. Aké je $q$?'), answer: q, signed: true }
      ] }, [
      Number.isFinite(kw) && { value: [kw, y1 - kw * x1], msg: T.s('Smernica $k$ je zmena $y$ delená zmenou $x$, nie naopak.') }
    ]);
  });

  /* ---------- 7. Podobnosť trojuholníkov ---------- */

  lesson({
    id: 'r9-podobnost', order: 70, title: 'Podobnosť trojuholníkov',
    summary: 'Koeficient podobnosti, vety o podobnosti, obsahy podobných útvarov a meranie výšky podľa tieňa.',
    theory: [
      `<p>Dva trojuholníky sú <strong>podobné</strong>, ak majú rovnaký tvar – jeden je zväčšeninou alebo zmenšeninou druhého.
       Zapisujeme $\\triangle ABC \\sim \\triangle A'B'C'$. Podobné trojuholníky majú zhodné zodpovedajúce uhly a dĺžky zodpovedajúcich strán
       sú v rovnakom pomere $k$, ktorý voláme <strong>koeficient podobnosti</strong>: $\\frac{a'}{a} = \\frac{b'}{b} = \\frac{c'}{c} = k$.</p>`,
      { fig: 'r9-podobne', caption: 'Trojuholník $A\'B\'C\'$ je zväčšeninou trojuholníka $ABC$ s koeficientom $k = 1{,}5$: každá strana je 1,5-krát dlhšia, uhly ostali rovnaké.' },
      `<p><strong>Vety o podobnosti:</strong> trojuholníky sú podobné, ak sa zhodujú v dvoch uhloch (veta <em>uu</em>), ak majú všetky tri
       strany v rovnakom pomere (<em>sss</em>), alebo ak majú dve strany v rovnakom pomere a zhodný uhol nimi zovretý (<em>sus</em>).
       Ak $k &gt; 1$, ide o zväčšenie, ak $k &lt; 1$, o zmenšenie.</p>`,
      `<p><strong>Obsahy</strong> podobných trojuholníkov sú v pomere $k^2$: ak strany zdvojnásobíme, obsah sa zväčší štvornásobne.
       Podobnosť využívame pri meraní výšok podľa tieňa, pri mapách a plánoch.</p>`
    ],
    examples: [
      { task: 'Trojuholník $ABC$ má strany $4$, $6$ a $7\\,\\text{cm}$. Podobný trojuholník $A\'B\'C\'$ má najkratšiu stranu $10\\,\\text{cm}$. Aké dlhé sú jeho ďalšie strany?',
        steps: ['Koeficient podobnosti: $k = \\frac{10}{4} = 2{,}5$.', '$6\\cdot 2{,}5 = 15\\,\\text{cm}$ a $7\\cdot 2{,}5 = 17{,}5\\,\\text{cm}$.',
          '<strong>Strany sú $10$, $15$ a $17{,}5\\,\\text{cm}$.</strong>'] },
      { task: 'Tyč vysoká $2\\,\\text{m}$ vrhá tieň dlhý $3\\,\\text{m}$. V tom istom čase má tieň stromu dĺžku $18\\,\\text{m}$. Aký vysoký je strom?',
        steps: ['Slnečné lúče dopadajú pod rovnakým uhlom, preto sú trojuholníky tyč – tieň a strom – tieň podobné (veta uu).',
          'Koeficient podobnosti: $k = \\frac{18}{3} = 6$.', '<strong>Strom je vysoký $2\\cdot 6 = 12\\,\\text{m}$.</strong>'] }
    ]
  });

  const TRI = [[3, 4, 5], [4, 6, 7], [5, 6, 8], [2, 3, 4], [6, 8, 9], [5, 7, 10], [4, 5, 6]];

  gen('r9-podobnost', () => {
    const t = Math.random();
    if (t < 0.35) {
      const [a, b, c] = pick(TRI), k = pick([0.5, 1.5, 2, 2.5, 3, 4]), askB = Math.random() < 0.5;
      const want = askB ? b : c;
      return withMist({ answer: k * want,
        steps: [
          { q: T.s("Vypočítaj koeficient podobnosti $k = \\frac{a'}{a}$."), answer: k },
          { q: T`Vypočítaj $${askB ? "b'" : "c'"}$ (v cm).`, answer: k * want }
        ],
        q: T`Trojuholník $ABC$ má strany $a = ${a}\\,\\text{cm}$, $b = ${b}\\,\\text{cm}$, $c = ${c}\\,\\text{cm}$. Trojuholník $A'B'C'$ je s ním podobný a $a' = ${dc(k * a)}\\,\\text{cm}$. Vypočítaj $${askB ? "b'" : "c'"}$ (v cm).`,
        solution: T`$k = \\frac{a'}{a} = \\frac{${dc(k * a)}}{${a}} = ${dc(k)}$, teda $${askB ? "b'" : "c'"} = ${dc(k)}\\cdot ${want} = ${dc(k * want)}\\,\\text{cm}$.`,
        hint: T.s('Z dvojice zodpovedajúcich strán $a$ a $a\'$ vypočítaj koeficient podobnosti $k$.') }, [
        { value: want + (k * a - a), msg: T.s('Pri podobnosti sa strany nezväčšujú o rovnaký rozdiel, ale rovnakým násobkom – koeficientom podobnosti $k$.') },
        { value: want / k, msg: T`Koeficient $k$ je pomer novej strany k pôvodnej. Novú stranu dostaneš násobením, nie delením.` }
      ]);
    }
    if (t < 0.55) {
      const a = rnd(2, 12), k = pick([0.5, 1.5, 2, 2.5, 3, 0.25, 4]);
      return { answer: k,
        q: T`V podobných trojuholníkoch $ABC \\sim A'B'C'$ je $a = ${a}\\,\\text{cm}$ a $a' = ${dc(k * a)}\\,\\text{cm}$. Aký je koeficient podobnosti $k$?`,
        solution: T`$k = \\frac{a'}{a} = \\frac{${dc(k * a)}}{${a}} = ${dc(k)}$. ${k > 1 ? T.s('Je to zväčšenie.') : T.s('Je to zmenšenie.')}`,
        hint: T.s('Koeficient podobnosti je pomer strany nového trojuholníka k zodpovedajúcej strane pôvodného.') };
    }
    if (t < 0.75) {
      const S = 4 * rnd(2, 15), k = pick([2, 3, 0.5, 1.5, 4]);
      return withMist({ answer: k * k * S,
        steps: [
          { q: T.s('Koľkokrát sa zmení obsah? Vypočítaj $k^2$.'), answer: k * k },
          { q: T.s('Aký obsah má podobný trojuholník (v cm²)?'), answer: k * k * S }
        ],
        q: T`Trojuholník má obsah $${S}\\,\\text{cm}^2$. Podobný trojuholník má strany ${k === 0.5 ? T`dvakrát kratšie (koeficient podobnosti $k = 0${dsep()}5$)` : T`$${dc(k)}$-krát dlhšie`}. Aký má obsah (v cm²)?`,
        solution: T`Obsahy podobných útvarov sú v pomere $k^2 = ${dc(k)}^2 = ${dc(k * k)}$, teda $S' = ${dc(k * k)}\\cdot ${S} = ${dc(k * k * S)}\\,\\text{cm}^2$.`,
        hint: T.s('Obsah sa nemení $k$-krát, ale $k^2$-krát.') }, [
        { value: k * S, msg: T.s('Keď sa všetky strany zmenia $k$-krát, obsah sa zmení $k\\cdot k$-krát, nie len $k$-krát.') }
      ]);
    }
    const h1 = pick([1, 1.5, 2]), s1 = pick([1, 2, 2.5, 3]), m = rnd(2, 10);
    const [obj, how] = pick([['strom', 'Aký vysoký je strom'], ['stĺp', 'Aký vysoký je stĺp'], ['komín', 'Aký vysoký je komín'], ['veža', 'Aká vysoká je veža']]).map((w) => T.s(w));
    return withMist({ answer: h1 * m,
      steps: [
        { q: T.s('Koľkokrát je tieň predmetu dlhší ako tieň tyče?'), answer: m },
        { q: T`${how} (v m)?`, answer: h1 * m }
      ],
      q: T`Tyč vysoká $${dc(h1)}\\,\\text{m}$ vrhá tieň dlhý $${dc(s1)}\\,\\text{m}$. V tom istom čase vrhá ${obj} tieň dlhý $${dc(s1 * m)}\\,\\text{m}$. ${how} (v m)?`,
      solution: T`Trojuholníky tyč – tieň a predmet – tieň sú podobné (lúče dopadajú pod rovnakým uhlom). $k = \\frac{${dc(s1 * m)}}{${dc(s1)}} = ${m}$, výška je $${dc(h1)}\\cdot ${m} = ${dc(h1 * m)}\\,\\text{m}$.`,
      hint: T.s('Koľkokrát je tieň predmetu dlhší ako tieň tyče, toľkokrát je predmet vyšší ako tyč.') }, [
      { value: h1 + (s1 * m - s1), msg: T.s('Výšky a tiene sú v rovnakom pomere: porovnávaj, koľkokrát je tieň dlhší, nie o koľko.') },
      { value: s1 * m * s1 / h1, msg: T.s('Pomer si obrátil. Výška predmetu je k jeho tieňu v rovnakom pomere ako výška tyče k jej tieňu.') }
    ]);
  });

  /* ---------- 8. Využitie Pytagorovej vety ---------- */

  lesson({
    id: 'r9-pytagoras', order: 80, title: 'Využitie Pytagorovej vety',
    summary: 'Slovné úlohy, vzdialenosť bodov, uhlopriečky, výška rovnoramenného trojuholníka a telesová uhlopriečka.',
    theory: [
      `<p>Pytagorova veta $c^2 = a^2 + b^2$ platí v každom pravouhlom trojuholníku. Využijeme ju všade, kde vieme nájsť pravý uhol:
       pri uhlopriečkach, výškach, vzdialenostiach aj v priestore. Pri slovnej úlohe si najprv nakreslíme náčrt a vyznačíme pravouhlý trojuholník.</p>`,
      `<p><strong>Typické použitia:</strong> uhlopriečka obdĺžnika $u = \\sqrt{a^2 + b^2}$; výška rovnoramenného trojuholníka s ramenom $r$
       a základňou $z$ je $v = \\sqrt{r^2 - \\left(\\frac{z}{2}\\right)^2}$; vzdialenosť bodov $A$, $B$ v súradnicovej sústave je
       $|AB| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.</p>`,
      { fig: 'r9-kvader', caption: 'Telesová uhlopriečka kvádra $u$ je preponou pravouhlého trojuholníka s odvesnami $u_s$ (uhlopriečka podstavy) a $c$: $u^2 = u_s^2 + c^2 = a^2 + b^2 + c^2$.' },
      `<p><strong>Obrátená veta:</strong> ak pre strany trojuholníka platí $a^2 + b^2 = c^2$, trojuholník je pravouhlý. Tak sa dá overiť pravý uhol
       aj v praxi: trojuholník so stranami 3 m, 4 m a 5 m má pravý uhol.</p>`
    ],
    examples: [
      { task: 'Rebrík dlhý $5\\,\\text{m}$ je opretý o stenu, jeho spodný koniec je $1{,}4\\,\\text{m}$ od steny. Do akej výšky siaha?',
        steps: ['Rebrík je prepona, vzdialenosť od steny a výška sú odvesny.', '$v^2 = 5^2 - 1{,}4^2 = 25 - 1{,}96 = 23{,}04$.',
          '<strong>$v = \\sqrt{23{,}04} = 4{,}8\\,\\text{m}$</strong>'] },
      { task: 'Vypočítaj dĺžku telesovej uhlopriečky kvádra s rozmermi $2$, $3$ a $6\\,\\text{cm}$.',
        steps: ['$u^2 = a^2 + b^2 + c^2 = 4 + 9 + 36 = 49$.', '<strong>$u = \\sqrt{49} = 7\\,\\text{cm}$</strong>'] }
    ]
  });

  const LADDER = [[1.5, 2, 2.5], [1.2, 1.6, 2], [1.4, 4.8, 5], [0.9, 1.2, 1.5], [2.1, 2.8, 3.5], [1, 2.4, 2.6], [1.8, 2.4, 3], [0.7, 2.4, 2.5]];
  const TRIP = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [12, 16, 20], [7, 24, 25]];
  const QUAD = [[1, 2, 2, 3], [2, 3, 6, 7], [1, 4, 8, 9], [4, 4, 7, 9], [2, 6, 9, 11], [6, 6, 7, 11], [2, 5, 14, 15],
    [2, 10, 11, 15], [3, 4, 12, 13], [8, 9, 12, 17], [2, 4, 4, 6], [4, 5, 20, 21], [6, 10, 15, 19]];
  const sq = (v) => dc(Math.round(v * v * 100) / 100);

  gen('r9-pytagoras', () => {
    const t = Math.random();
    if (t < 0.25) {
      const [a, b, c] = pick(LADDER), askH = Math.random() < 0.6;
      const r2 = (v) => Math.round(v * v * 100) / 100;
      if (askH) {
        return withMist({ answer: b, q: T`Rebrík dlhý $${dc(c)}\\,\\text{m}$ je opretý o zvislú stenu. Jeho spodný koniec je $${dc(a)}\\,\\text{m}$ od steny. Do akej výšky (v m) siaha horný koniec rebríka?`,
          solution: T`Rebrík je prepona: $v^2 = ${dc(c)}^2 - ${dc(a)}^2 = ${sq(c)} - ${sq(a)} = ${sq(b)}$, teda $v = ${dc(b)}\\,\\text{m}$.`,
          hint: T.s('Rebrík, stena a zem tvoria pravouhlý trojuholník; rebrík je prepona.'),
          steps: [
            { q: T`Koľko je $${dc(c)}^2$?`, answer: r2(c) },
            { q: T`Koľko je $${dc(a)}^2$?`, answer: r2(a) },
            { q: T.s('Rebrík je prepona. Koľko je $v^2$?'), answer: r2(b) },
            { q: T.s('Do akej výšky (v m) siaha rebrík?'), answer: b }
          ] }, [
          { value: Math.round((c - a) * 100) / 100, msg: T.s('Pytagorova veta platí pre druhé mocniny strán, nie pre samotné dĺžky. Najprv umocni, odčítaj a až potom odmocni.') }
        ]);
      }
      return withMist({ answer: c, q: T`Horný koniec rebríka siaha do výšky $${dc(b)}\\,\\text{m}$, spodný koniec je $${dc(a)}\\,\\text{m}$ od steny. Aký dlhý je rebrík (v m)?`,
        solution: T`$c^2 = ${dc(a)}^2 + ${dc(b)}^2 = ${sq(a)} + ${sq(b)} = ${sq(c)}$, teda $c = ${dc(c)}\\,\\text{m}$.`,
        hint: T.s('Rebrík je prepona pravouhlého trojuholníka, výška a vzdialenosť od steny sú odvesny.'),
        steps: [
          { q: T`Koľko je $${dc(a)}^2 + ${dc(b)}^2$?`, answer: r2(c) },
          { q: T.s('Odmocni. Aký dlhý je rebrík (v m)?'), answer: c }
        ] }, [
        { value: Math.round((a + b) * 100) / 100, msg: T.s('Prepona nie je súčet odvesien. Sčítaj druhé mocniny odvesien a výsledok odmocni.') },
        { value: r2(c), msg: T.s('Toto je $c^2$. Dĺžku rebríka dostaneš, keď výsledok ešte odmocníš.') }
      ]);
    }
    if (t < 0.45) {
      const [p, q, c] = pick(TRIP.slice(0, 5)), sw = Math.random() < 0.5;
      const dx = (sw ? q : p) * pick([1, -1]), dy = (sw ? p : q) * pick([1, -1]);
      const xa = rnd(-5, 5), ya = rnd(-5, 5), xb = xa + dx, yb = ya + dy;
      return withMist({ answer: c, q: T`Vypočítaj vzdialenosť bodov $${pt('A', xa, ya)}$ a $${pt('B', xb, yb)}$.`,
        solution: T`$|AB|^2 = (${xb} - ${par(xa)})^2 + (${yb} - ${par(ya)})^2 = ${par(dx)}^2 + ${par(dy)}^2 = ${dx * dx} + ${dy * dy} = ${c * c}$, teda $|AB| = ${c}$.`,
        hint: T.s('Rozdiely súradníc sú odvesny pravouhlého trojuholníka, vzdialenosť bodov je jeho prepona.'),
        steps: [
          { q: T.s('O koľko sa líšia prvé súradnice bodov (bez znamienka)?'), answer: Math.abs(dx) },
          { q: T.s('O koľko sa líšia druhé súradnice bodov (bez znamienka)?'), answer: Math.abs(dy) },
          { q: T.s('Koľko je $|AB|^2$?'), answer: c * c },
          { q: T.s('Aká je vzdialenosť bodov $|AB|$?'), answer: c }
        ] }, [
        { value: Math.abs(dx) + Math.abs(dy), msg: T.s('Vzdialenosť bodov nie je súčet rozdielov súradníc. Tie sú odvesnami pravouhlého trojuholníka, použi Pytagorovu vetu.') },
        { value: c * c, msg: T.s('Toto je $|AB|^2$. Vzdialenosť dostaneš, keď výsledok ešte odmocníš.') }
      ]);
    }
    if (t < 0.65) {
      const [a, b, c, u] = pick(QUAD), d = shuffle([a, b, c]);
      return withMist({ answer: u, q: T`Vypočítaj dĺžku telesovej uhlopriečky kvádra s rozmermi $${d[0]}\\,\\text{cm}$, $${d[1]}\\,\\text{cm}$ a $${d[2]}\\,\\text{cm}$.`,
        solution: T`$u^2 = ${d[0]}^2 + ${d[1]}^2 + ${d[2]}^2 = ${d[0] ** 2} + ${d[1] ** 2} + ${d[2] ** 2} = ${u * u}$, teda $u = ${u}\\,\\text{cm}$.`,
        hint: T.s('Telesová uhlopriečka: $u^2 = a^2 + b^2 + c^2$.'),
        steps: [
          { q: T.s('Sčítaj druhé mocniny všetkých troch rozmerov. Koľko je $u^2$?'), answer: u * u },
          { q: T.s('Odmocni. Aká dlhá je telesová uhlopriečka (v cm)?'), answer: u }
        ] }, [
        { value: a + b + c, msg: T.s('Uhlopriečka nie je súčet rozmerov. Sčítaj ich druhé mocniny a výsledok odmocni.') },
        { value: u * u, msg: T.s('Toto je $u^2$. Dĺžku uhlopriečky dostaneš, keď výsledok ešte odmocníš.') }
      ]);
    }
    if (t < 0.85) {
      const [a, b, c] = pick(TRIP);
      if (Math.random() < 0.5) {
        return withMist({ answer: c, q: T`Obdĺžnik má strany $${a}\\,\\text{cm}$ a $${b}\\,\\text{cm}$. Aká dlhá je jeho uhlopriečka (v cm)?`,
          solution: T`Uhlopriečka rozdelí obdĺžnik na dva pravouhlé trojuholníky: $u^2 = ${a * a} + ${b * b} = ${c * c}$, $u = ${c}\\,\\text{cm}$.`,
          hint: T.s('Uhlopriečka je preponou pravouhlého trojuholníka, ktorého odvesny sú strany obdĺžnika.'),
          steps: [
            { q: T.s('Sčítaj druhé mocniny strán. Koľko je $u^2$?'), answer: c * c },
            { q: T.s('Odmocni. Aká dlhá je uhlopriečka (v cm)?'), answer: c }
          ] }, [
          { value: a + b, msg: T.s('Uhlopriečka nie je súčet strán. Sčítaj ich druhé mocniny a výsledok odmocni.') },
          { value: c * c, msg: T.s('Toto je $u^2$. Dĺžku uhlopriečky dostaneš, keď výsledok ešte odmocníš.') }
        ]);
      }
      return withMist({ answer: b, q: T`Rovnoramenný trojuholník má ramená dlhé $${c}\\,\\text{cm}$ a základňu $${2 * a}\\,\\text{cm}$. Vypočítaj jeho výšku na základňu (v cm).`,
        solution: T`Výška rozdelí trojuholník na dva pravouhlé trojuholníky s preponou ${c} a odvesnou $${2 * a} : 2 = ${a}$: $v^2 = ${c * c} - ${a * a} = ${b * b}$, $v = ${b}\\,\\text{cm}$.`,
        hint: T.s('Výška na základňu ju rozpolí. Rameno je prepona, polovica základne a výška sú odvesny.'),
        steps: [
          { q: T.s('Výška rozpolí základňu. Aká dlhá je polovica základne (v cm)?'), answer: a },
          { q: T.s('Rameno je prepona. Koľko je $v^2$?'), answer: b * b },
          { q: T.s('Aká je výška na základňu (v cm)?'), answer: b }
        ] }, [
        { value: c - a, msg: T.s('Pytagorova veta platí pre druhé mocniny strán, nie pre samotné dĺžky. Najprv umocni, odčítaj a až potom odmocni.') },
        { value: b * b, msg: T.s('Toto je $v^2$. Výšku dostaneš, keď výsledok ešte odmocníš.') }
      ]);
    }
    const [a, b, c] = pick(TRIP), k = pick([1, 2]), right = Math.random() < 0.5;
    const C = right ? c * k : c * k + pick([-1, 1]);
    const [yes, no] = [T.s('áno'), T.s('nie')];
    return { type: 'choice', options: [yes, no], answer: right ? yes : no,
      choiceHints: right
        ? { [no]: T.s('Over to výpočtom: porovnaj súčet druhých mocnín dvoch kratších strán s druhou mocninou najdlhšej strany.') }
        : { [yes]: T.s('Strany len pripomínajú známu pytagorovskú trojicu. Over výpočtom, či sa súčet druhých mocnín kratších strán rovná druhej mocnine najdlhšej.') },
      q: T`Je trojuholník so stranami $${a * k}$, $${b * k}$ a $${C}$ pravouhlý?`,
      solution: T`$${a * k}^2 + ${b * k}^2 = ${(a * k) ** 2 + (b * k) ** 2}$ a $${C}^2 = ${C * C}$. ${right ? T.s('Čísla sa rovnajú, trojuholník je pravouhlý.') : T.s('Čísla sa nerovnajú, trojuholník nie je pravouhlý.')}`,
      hint: T.s('Porovnaj súčet druhých mocnín dvoch kratších strán s druhou mocninou najdlhšej strany.') };
  });

  /* ---------- 9. Telesá ---------- */

  lesson({
    id: 'r9-telesa', order: 90, title: 'Telesá: hranol, valec, ihlan, kužeľ a guľa',
    summary: 'Vlastnosti telies, ich siete a počty vrcholov, hrán a stien.',
    theory: [
      `<p><strong>Hranol</strong> má dve zhodné rovnobežné podstavy (mnohouholníky) a bočné steny – obdĺžniky. <strong>Valec</strong> má dve zhodné
       kruhové podstavy a plášť, ktorý sa rozvinie do obdĺžnika.</p>`,
      `<p><strong>Ihlan</strong> má jednu podstavu (mnohouholník) a jeden <em>hlavný vrchol</em>, bočné steny sú trojuholníky. <strong>Kužeľ</strong>
       má kruhovú podstavu a vrchol, jeho plášť sa rozvinie do kruhového výseku. <strong>Guľa</strong> je tvorená všetkými bodmi priestoru, ktoré majú
       od stredu vzdialenosť nanajvýš $r$; nemá hrany ani vrcholy.</p>`,
      { fig: 'r9-telesa', caption: 'Hranol, valec, ihlan, kužeľ a guľa s vyznačenými rozmermi: $v$ je výška, $r$ polomer podstavy alebo gule a $a$ hrana podstavy.' },
      `<p><strong>Počty pri hranatých telesách:</strong> $n$-boký hranol má $2n$ vrcholov, $3n$ hrán a $n + 2$ stien. $n$-boký ihlan má $n + 1$ vrcholov,
       $2n$ hrán a $n + 1$ stien. Pre každý takýto mnohosten platí <strong>Eulerov vzťah</strong>: vrcholy + steny − hrany $= 2$.</p>`
    ],
    examples: [
      { task: 'Koľko vrcholov, hrán a stien má šesťboký ihlan?',
        steps: ['Podstava je šesťuholník so 6 vrcholmi, pridá sa hlavný vrchol: $6 + 1 = 7$ vrcholov.',
          'Hrany: 6 hrán podstavy a 6 bočných hrán, spolu $12$.', 'Steny: podstava a 6 bočných trojuholníkov, spolu $7$.',
          'Kontrola Eulerovým vzťahom: $7 + 7 - 12 = 2$ ✓'] },
      { task: 'Ktoré teleso má sieť zloženú z obdĺžnika a dvoch zhodných kruhov?',
        steps: ['Dva zhodné kruhy sú podstavy, obdĺžnik je rozvinutý plášť.', '<strong>Je to sieť valca.</strong>'] }
    ]
  });

  const DESC = [
    ['Má dve zhodné kruhové podstavy a plášť, ktorý sa rozvinie do obdĺžnika.', 'valec'],
    ['Má jednu kruhovú podstavu a vrchol; plášť sa rozvinie do kruhového výseku.', 'kužeľ'],
    ['Má jednu podstavu tvaru mnohouholníka a bočné steny sú trojuholníky so spoločným vrcholom.', 'ihlan'],
    ['Má dve zhodné rovnobežné podstavy tvaru mnohouholníka a bočné steny sú obdĺžniky.', 'hranol'],
    ['Nemá hrany ani vrcholy a všetky body jeho povrchu sú rovnako vzdialené od stredu.', 'guľa'],
    ['Jeho sieť tvorí obdĺžnik a dva zhodné kruhy.', 'valec'],
    ['Jeho sieť tvorí kruh a kruhový výsek.', 'kužeľ'],
    ['Jeho sieť tvorí štvorec a štyri zhodné rovnoramenné trojuholníky.', 'ihlan'],
    ['Jeho sieť tvorí dva zhodné trojuholníky a tri obdĺžniky.', 'hranol']
  ];
  const NBOK = { 3: 'trojboký', 4: 'štvorboký', 5: 'päťboký', 6: 'šesťboký', 7: 'sedemboký', 8: 'osemboký', 9: 'deväťboký', 10: 'desaťboký' };
  const NAMES = Object.keys(SOLID);

  gen('r9-telesa', () => {
    const t = Math.random();
    if (t < 0.25) {
      const name = pick(NAMES);
      return { type: 'choice', options: shuffle(NAMES).map((o) => T.s(o)), answer: T.s(name), q: T`Ako sa volá toto teleso? ${solidPic(name)}`,
        solution: T`Na obrázku je ${T.s(name)}.`, hint: T.s('Všimni si podstavy (koľko ich je a aký majú tvar) a či má teleso hlavný vrchol.') };
    }
    if (t < 0.5) {
      const [d, name] = pick(DESC);
      return { type: 'choice', options: shuffle(NAMES).map((o) => T.s(o)), answer: T.s(name), q: T`Ktoré teleso má túto vlastnosť? <em>${T.s(d)}</em>`,
        solution: T`Je to ${T.s(name)}.`, hint: T.s('Predstav si teleso rozložené do siete: aké tvary majú podstavy a plášť?') };
    }
    const n = rnd(3, 10), prism = Math.random() < 0.5;
    const V = prism ? 2 * n : n + 1, H = prism ? 3 * n : 2 * n, S = prism ? n + 2 : n + 1;
    if (t < 0.8) {
      const k = rnd(0, 2), what = ['vrcholov', 'hrán', 'stien'][k], ans = [V, H, S][k];
      const forgot = prism
        ? [[n, T.s('Hranol má dve podstavy a každá z nich má svoje vrcholy.')],
          [2 * n, T.s('Okrem hrán oboch podstáv má hranol aj bočné hrany, ktoré podstavy spájajú.')],
          [n, T.s('Nezabudni na dve podstavy, aj tie sú steny.')]][k]
        : [[n, T.s('Nezabudni na hlavný vrchol ihlana.')],
          [n, T.s('Okrem hrán podstavy má ihlan aj bočné hrany, ktoré idú do hlavného vrcholu.')],
          [n, T.s('Nezabudni na podstavu, aj tá je stena.')]][k];
      const why = prism
        ? [T`Každá z dvoch podstáv má ${n} ${pl(n, ['vrchol', 'vrcholy', 'vrcholov'])}: $2\\cdot ${n} = ${V}$.`,
          T`Každá podstava má ${n} ${pl(n, ['hranu', 'hrany', 'hrán'])} a bočných hrán je tiež ${n}: $3\\cdot ${n} = ${H}$.`,
          T`2 podstavy a ${n} ${pl(n, ['bočná stena', 'bočné steny', 'bočných stien'])}: $${n} + 2 = ${S}$.`][k]
        : [T`${n} ${pl(n, ['vrchol', 'vrcholy', 'vrcholov'])} podstavy a hlavný vrchol: $${n} + 1 = ${V}$.`,
          T`${n} ${pl(n, ['hrana', 'hrany', 'hrán'])} podstavy a ${n} ${pl(n, ['bočná hrana', 'bočné hrany', 'bočných hrán'])}: $2\\cdot ${n} = ${H}$.`,
          T`Podstava a ${n} ${pl(n, ['bočný trojuholník', 'bočné trojuholníky', 'bočných trojuholníkov'])}: $${n} + 1 = ${S}$.`][k];
      return withMist({ answer: ans, q: prism ? T`Koľko ${what} má ${NBOK[n]} hranol?` : T`Koľko ${what} má ${NBOK[n]} ihlan?`, solution: why,
        hint: prism ? T.s('Hranol má dve rovnaké podstavy, každá je $n$-uholník.') : T.s('Ihlan má jednu podstavu ($n$-uholník) a hlavný vrchol.') },
      [{ value: forgot[0], msg: forgot[1] }]);
    }
    const k = rnd(0, 2), names = ['vrcholov', 'hrán', 'stien'], vals = [V, H, S];
    // akuzatív podľa počtu: má 1 hranu, 4 hrany, 12 hrán
    const forms = [['vrchol', 'vrcholy', 'vrcholov'], ['hranu', 'hrany', 'hrán'], ['stenu', 'steny', 'stien']];
    const giv = [0, 1, 2].filter((i) => i !== k);
    // zlé znamienko pri vyjadrení z v + s − h = 2
    const wrongE = [H - S - 2, V + S + 2, H - V - 2][k];
    return withMist({ answer: vals[k],
      q: T`Mnohosten má ${vals[giv[0]]} ${pl(vals[giv[0]], forms[giv[0]])} a ${vals[giv[1]]} ${pl(vals[giv[1]], forms[giv[1]])}. Koľko má ${names[k]}? Použi Eulerov vzťah.`,
      solution: T`Vrcholy + steny − hrany $= 2$: $${k === 0 ? 'v' : V} + ${k === 2 ? 's' : S} - ${k === 1 ? 'h' : H} = 2$, teda hľadaný počet ${names[k]} je ${vals[k]}.`,
      hint: T.s('Eulerov vzťah: vrcholy + steny − hrany = 2.') }, [
      { value: wrongE, msg: T.s('Pozor na znamienka: z rovnosti $v + s - h = 2$ vyjadri hľadaný počet tak, ako pri riešení rovnice.') }
    ]);
  });

  /* ---------- 10. Povrch a objem telies ---------- */

  lesson({
    id: 'r9-objem', order: 100, title: 'Povrch a objem valca, ihlana, kužeľa a gule',
    summary: 'Vzorce pre objem a povrch valca, ihlana, kužeľa a gule a ich použitie.',
    theory: [
      `<p><strong>Valec</strong> s polomerom podstavy $r$ a výškou $v$ má objem $V = \\pi r^2 v$ (obsah podstavy krát výška, ako pri hranole).
       Povrch $S = 2\\pi r^2 + 2\\pi r v$ tvoria dve podstavy a plášť, ktorý je obdĺžnikom so stranami $2\\pi r$ a $v$.</p>`,
      { fig: 'r9-siet-valca', caption: 'Sieť valca: dva kruhy s polomerom $r$ a obdĺžnik, ktorého jedna strana je obvod podstavy $2\\pi r$ a druhá výška $v$.' },
      `<p><strong>Ihlan</strong> a <strong>kužeľ</strong> majú tretinový objem oproti hranolu a valcu s rovnakou podstavou a výškou:
       $V = \\frac{1}{3} S_p\\cdot v$, pre kužeľ $V = \\frac{1}{3}\\pi r^2 v$. Povrch pravidelného štvorbokého ihlana s podstavnou hranou $a$
       a stenovou výškou $v_s$ (výška bočného trojuholníka) je $S = a^2 + 4\\cdot\\frac{a\\cdot v_s}{2}$. Povrch kužeľa so stranou $s$ je $S = \\pi r^2 + \\pi r s$.</p>`,
      `<p><strong>Guľa</strong> s polomerom $r$ má objem $V = \\frac{4}{3}\\pi r^3$ a povrch $S = 4\\pi r^2$. Pri výpočtoch s $\\pi$ používame $\\pi \\approx 3{,}14$
       a dbáme na jednotky: objem je v kubických, povrch v štvorcových jednotkách.</p>`
    ],
    examples: [
      { task: 'Plechovka tvaru valca má priemer $8\\,\\text{cm}$ a výšku $10\\,\\text{cm}$. Koľko $\\text{cm}^3$ sa do nej zmestí? ($\\pi \\approx 3{,}14$)',
        steps: ['Polomer je polovica priemeru: $r = 4\\,\\text{cm}$.', '$V = \\pi r^2 v \\approx 3{,}14\\cdot 16\\cdot 10 = 502{,}4\\,\\text{cm}^3$.',
          '<strong>Zmestí sa asi $502\\,\\text{cm}^3$, teda približne pol litra.</strong>'] },
      { task: 'Pravidelný štvorboký ihlan má podstavnú hranu $6\\,\\text{cm}$ a výšku $4\\,\\text{cm}$. Vypočítaj jeho objem a povrch.',
        steps: ['$V = \\frac{1}{3}a^2 v = \\frac{1}{3}\\cdot 36\\cdot 4 = 48\\,\\text{cm}^3$.',
          'Stenová výška je prepona pravouhlého trojuholníka s odvesnami $v = 4$ a $\\frac{a}{2} = 3$: $v_s = \\sqrt{16 + 9} = 5\\,\\text{cm}$.',
          '$S = a^2 + 4\\cdot\\frac{a\\cdot v_s}{2} = 36 + 4\\cdot 15 = 96\\,\\text{cm}^2$.'] }
    ]
  });

  const CONE = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 6, 10], [9, 12, 15], [12, 5, 13]];

  gen('r9-objem', () => {
    const t = Math.random();
    if (t < 0.3) {
      const r = rnd(1, 10), v = rnd(2, 15), useD = Math.random() < 0.3, askV = Math.random() < 0.55;
      const given = useD ? T`priemer podstavy $${2 * r}\\,\\text{cm}$` : T`polomer podstavy $${r}\\,\\text{cm}$`;
      const rStep = useD ? [{ q: T.s('Aký je polomer podstavy (v cm)?'), answer: r }] : [];
      const dMist = useD ? T.s('Do vzorca patrí polomer, nie priemer. Priemer najprv vydeľ dvoma.') : '';
      if (askV) {
        const A = piAns(r * r * v);
        return withMist(Object.assign(A, { q: T`Valec má ${given} a výšku $${v}\\,\\text{cm}$. Vypočítaj jeho objem v cm³. ${T.s(PI)}`,
          solution: T`${useD ? `$r = ${r}\\,\\text{cm}$. ` : ''}$V = \\pi r^2 v \\approx 3{,}14\\cdot ${r * r}\\cdot ${v} = ${dc(A.answer)}\\,\\text{cm}^3$.`,
          hint: T.s('Objem valca je obsah podstavy krát výška: $V = \\pi r^2 v$.'),
          steps: [...rStep,
            { q: T.s('Aký je obsah podstavy $\\pi r^2$ (v cm²)?'), ...piAns(r * r) },
            { q: T.s('Vynásob ho výškou. Aký je objem valca (v cm³)?'), ...piAns(r * r * v) }
          ] }), [
          useD && { value: piAns(4 * r * r * v).answer, msg: dMist },
          { value: piAns(r * v).answer, msg: T.s('Vo vzorci $V = \\pi r^2 v$ je polomer umocnený na druhú.') },
          { value: piAns(2 * r * v).answer, msg: T.s('Toto je obsah plášťa ($2\\pi r v$). Objem je obsah podstavy krát výška.') }
        ]);
      }
      const A = piAns(2 * r * (r + v));
      return withMist(Object.assign(A, { q: T`Valec má ${given} a výšku $${v}\\,\\text{cm}$. Vypočítaj jeho povrch v cm². ${T.s(PI)}`,
        solution: T`${useD ? `$r = ${r}\\,\\text{cm}$. ` : ''}$S = 2\\pi r^2 + 2\\pi r v = 2\\pi r(r + v) \\approx 2\\cdot 3{,}14\\cdot ${r}\\cdot ${r + v} = ${dc(A.answer)}\\,\\text{cm}^2$.`,
        hint: T.s('Povrch valca: dve podstavy $2\\pi r^2$ a plášť $2\\pi r v$.'),
        steps: [...rStep,
          { q: T.s('Aký je obsah jednej podstavy $\\pi r^2$ (v cm²)?'), ...piAns(r * r) },
          { q: T.s('Aký je obsah plášťa $2\\pi r v$ (v cm²)?'), ...piAns(2 * r * v) },
          { q: T.s('Aký je povrch valca (v cm²)?'), ...piAns(2 * r * (r + v)) }
        ] }), [
        { value: piAns(r * r + 2 * r * v).answer, msg: T.s('Valec má dve podstavy, hornú aj dolnú. Obe patria do povrchu.') },
        { value: piAns(2 * r * v).answer, msg: T.s('Toto je len plášť. K povrchu patria aj obe podstavy.') },
        useD && { value: piAns(4 * r * (2 * r + v)).answer, msg: dMist }
      ]);
    }
    if (t < 0.55) {
      const [r, v, s] = pick(CONE);
      if (Math.random() < 0.5) {
        const A = piAns(r * r * v / 3);
        return withMist(Object.assign(A, { q: T`Kužeľ má polomer podstavy $${r}\\,\\text{cm}$ a výšku $${v}\\,\\text{cm}$. Vypočítaj jeho objem v cm³. ${T.s(PI)}`,
          solution: T`$V = \\frac{1}{3}\\pi r^2 v \\approx \\frac{1}{3}\\cdot 3{,}14\\cdot ${r * r}\\cdot ${v} = 3{,}14\\cdot ${r * r * v / 3} = ${dc(A.answer)}\\,\\text{cm}^3$.`,
          hint: T.s('Objem kužeľa je tretina objemu valca s rovnakou podstavou a výškou.'),
          steps: [
            { q: T.s('Aký objem by mal valec s rovnakou podstavou a výškou (v cm³)?'), ...piAns(r * r * v) },
            { q: T.s('Aký je objem kužeľa (v cm³)?'), ...piAns(r * r * v / 3) }
          ] }), [
          { value: piAns(r * r * v).answer, msg: T.s('Toto je objem valca. Objem kužeľa je jeho tretina, nezabudni na $\\frac{1}{3}$.') }
        ]);
      }
      const A = piAns(r * (r + s));
      return withMist(Object.assign(A, { q: T`Kužeľ má polomer podstavy $${r}\\,\\text{cm}$ a výšku $${v}\\,\\text{cm}$. Vypočítaj jeho povrch v cm². ${T.s(PI)}`,
        solution: T`Strana kužeľa: $s = \\sqrt{r^2 + v^2} = \\sqrt{${r * r} + ${v * v}} = ${s}\\,\\text{cm}$. $S = \\pi r^2 + \\pi r s = \\pi r(r + s) \\approx 3{,}14\\cdot ${r}\\cdot ${r + s} = ${dc(A.answer)}\\,\\text{cm}^2$.`,
        hint: T.s('Najprv z Pytagorovej vety vypočítaj stranu $s$ (polomer a výška sú odvesny). Potom $S = \\pi r^2 + \\pi r s$.'),
        steps: [
          { q: T.s('Vypočítaj stranu kužeľa $s$ z Pytagorovej vety (v cm).'), answer: s },
          { q: T.s('Aký je obsah podstavy $\\pi r^2$ (v cm²)?'), ...piAns(r * r) },
          { q: T.s('Aký je obsah plášťa $\\pi r s$ (v cm²)?'), ...piAns(r * s) },
          { q: T.s('Aký je povrch kužeľa (v cm²)?'), ...piAns(r * (r + s)) }
        ] }), [
        { value: piAns(r * (r + v)).answer, msg: T.s('Do vzorca pre plášť $\\pi r s$ patrí strana kužeľa $s$, nie výška $v$. Stranu vypočítaj z Pytagorovej vety.') },
        { value: piAns(r * s).answer, msg: T.s('Toto je len plášť. K povrchu patrí aj podstava $\\pi r^2$.') }
      ]);
    }
    if (t < 0.78) {
      if (Math.random() < 0.5) {
        const r = pick([3, 6, 9, 12]), A = piAns(4 * r * r * r / 3);
        return withMist(Object.assign(A, { q: T`Vypočítaj objem gule s polomerom $${r}\\,\\text{cm}$ v cm³. ${T.s(PI)}`,
          solution: T`$V = \\frac{4}{3}\\pi r^3 \\approx \\frac{4}{3}\\cdot 3{,}14\\cdot ${r * r * r} = 3{,}14\\cdot ${4 * r * r * r / 3} = ${dc(A.answer)}\\,\\text{cm}^3$.`,
          hint: T.s('Objem gule: $V = \\frac{4}{3}\\pi r^3$.') }), [
          { value: piAns(r * r * r).answer, msg: T.s('Nezabudni na zlomok $\\frac{4}{3}$ vo vzorci $V = \\frac{4}{3}\\pi r^3$.') },
          { value: piAns(4 * r * r).answer, msg: T.s('Toto je povrch gule ($4\\pi r^2$). Objem počítaš s tretou mocninou polomeru.') }
        ]);
      }
      const r = rnd(1, 12), A = piAns(4 * r * r);
      return withMist(Object.assign(A, { q: T`Vypočítaj povrch gule s polomerom $${r}\\,\\text{cm}$ v cm². ${T.s(PI)}`,
        solution: T`$S = 4\\pi r^2 \\approx 4\\cdot 3{,}14\\cdot ${r * r} = ${dc(A.answer)}\\,\\text{cm}^2$.`,
        hint: T.s('Povrch gule: $S = 4\\pi r^2$.') }), [
        { value: piAns(r * r).answer, msg: T.s('Toto je obsah kruhu s rovnakým polomerom. Povrch gule je štyrikrát väčší.') },
        { value: piAns(4 * r * r * r / 3).answer, msg: T.s('Toto je objem gule. Povrch je $4\\pi r^2$.') }
      ]);
    }
    if (Math.random() < 0.5) {
      let a, v;
      do { a = rnd(2, 12); v = rnd(2, 15); } while ((a * a * v) % 3 !== 0);
      return withMist({ answer: a * a * v / 3, q: T`Pravidelný štvorboký ihlan má podstavnú hranu $${a}\\,\\text{cm}$ a výšku $${v}\\,\\text{cm}$. Vypočítaj jeho objem v cm³.`,
        solution: T`$V = \\frac{1}{3}a^2 v = \\frac{1}{3}\\cdot ${a * a}\\cdot ${v} = ${a * a * v / 3}\\,\\text{cm}^3$.`,
        hint: T.s('Podstava je štvorec s obsahom $a^2$. Objem ihlana je tretina súčinu obsahu podstavy a výšky.'),
        steps: [
          { q: T.s('Aký je obsah podstavy (v cm²)?'), answer: a * a },
          { q: T.s('Aký je objem ihlana (v cm³)?'), answer: a * a * v / 3 }
        ] }, [
        { value: a * a * v, msg: T.s('Toto je objem hranola s rovnakou podstavou a výškou. Objem ihlana je jeho tretina.') },
        { value: a * v / 3, msg: T.s('Podstava je štvorec, jej obsah je $a^2$, nie $a$.') }
      ]);
    }
    const a = 2 * rnd(1, 7), w = rnd(3, 15);
    return withMist({ answer: a * a + 2 * a * w, q: T`Pravidelný štvorboký ihlan má podstavnú hranu $${a}\\,\\text{cm}$ a stenovú výšku $v_s = ${w}\\,\\text{cm}$. Vypočítaj jeho povrch v cm².`,
      solution: T`$S = a^2 + 4\\cdot\\frac{a\\cdot v_s}{2} = ${a * a} + 4\\cdot\\frac{${a}\\cdot ${w}}{2} = ${a * a} + ${2 * a * w} = ${a * a + 2 * a * w}\\,\\text{cm}^2$.`,
      hint: T.s('Povrch tvorí štvorcová podstava a štyri zhodné trojuholníky so základňou $a$ a výškou $v_s$.'),
      steps: [
        { q: T.s('Aký je obsah podstavy (v cm²)?'), answer: a * a },
        { q: T.s('Aký je obsah jednej bočnej steny (trojuholníka) v cm²?'), answer: a * w / 2 },
        { q: T.s('Aký je povrch ihlana (v cm²)?'), answer: a * a + 2 * a * w }
      ] }, [
      { value: a * a + 4 * a * w, msg: T.s('Obsah trojuholníkovej steny je $\\frac{a\\cdot v_s}{2}$, nezabudni deliť dvoma.') },
      { value: 2 * a * w, msg: T.s('Toto je len plášť. K povrchu patrí aj štvorcová podstava.') }
    ]);
  });

  /* ---------- 11. Štatistika, kombinatorika a pravdepodobnosť ---------- */

  lesson({
    id: 'r9-statistika', order: 110, title: 'Štatistika, kombinatorika a pravdepodobnosť',
    summary: 'Vážený priemer a medián, pravidlo súčinu, poradia a dvojice, pravdepodobnosť náhodného javu.',
    theory: [
      `<p><strong>Štatistika:</strong> z údajov počítame aritmetický priemer, modus (najčastejšiu hodnotu) a medián (prostrednú hodnotu usporiadaných údajov).
       Ak sa hodnoty opakujú, použijeme <em>vážený priemer</em>: každú hodnotu vynásobíme jej početnosťou, výsledky sčítame a vydelíme počtom všetkých údajov.</p>`,
      `<p><strong>Kombinatorika – pravidlo súčinu:</strong> ak prvú voľbu môžeme urobiť $m$ spôsobmi a druhú $n$ spôsobmi, obe spolu $m\\cdot n$ spôsobmi.
       Počet poradí $n$ rôznych vecí je $n\\cdot(n - 1)\\cdot\\ldots\\cdot 2\\cdot 1$, napríklad 4 veci zoradíme $4\\cdot 3\\cdot 2\\cdot 1 = 24$ spôsobmi.
       Počet dvojíc z $n$ ľudí (bez ohľadu na poradie) je $\\frac{n(n - 1)}{2}$.</p>`,
      { fig: 'r9-strom', caption: 'Stromový diagram: ku každému z 2 tričiek (T) môžeme vybrať jedny z 3 nohavíc (N), spolu $2\\cdot 3 = 6$ možností oblečenia.' },
      `<p><strong>Pravdepodobnosť</strong> javu pri pokuse s rovnako možnými výsledkami je $P = \\frac{\\text{počet priaznivých výsledkov}}{\\text{počet všetkých výsledkov}}$.
       Platí $0 \\le P \\le 1$: nemožný jav má pravdepodobnosť 0, istý jav 1. Pri hode kockou je $P(\\text{párne číslo}) = \\frac{3}{6} = \\frac{1}{2}$.</p>`
    ],
    examples: [
      { task: 'Koľko trojciferných čísel s rôznymi číslicami vytvoríme z číslic 1, 3, 5 a 7?',
        steps: ['Na miesto stoviek môžeme dať ktorúkoľvek zo 4 číslic, na miesto desiatok jednu zo zvyšných 3 a na miesto jednotiek jednu zo zvyšných 2.',
          '$4\\cdot 3\\cdot 2 = 24$.', '<strong>Vytvoríme 24 čísel.</strong>'] },
      { task: 'Vo vrecku sú 3 červené, 5 modrých a 2 zelené guľôčky. Aká je pravdepodobnosť, že náhodne vytiahneme modrú?',
        steps: ['Všetkých guľôčok je $3 + 5 + 2 = 10$.', 'Priaznivých výsledkov je 5 (modré guľôčky).',
          '<strong>$P = \\frac{5}{10} = \\frac{1}{2} = 0{,}5$</strong>'] }
    ]
  });

  const DICE = [
    ['padne párne číslo', [2, 4, 6]], ['padne nepárne číslo', [1, 3, 5]], ['padne číslo deliteľné tromi', [3, 6]],
    ['padne šestka', [6]], ['padne prvočíslo', [2, 3, 5]], ['padne číslo menšie ako 3', [1, 2]],
    ['padne číslo väčšie ako 4', [5, 6]], ['padne číslo väčšie ako 1', [2, 3, 4, 5, 6]]
  ];
  const COLORS = [['červenú', 'červené', 'červených'], ['modrú', 'modré', 'modrých'], ['zelenú', 'zelené', 'zelených']];

  gen('r9-statistika', () => {
    const t = Math.random();
    if (t < 0.3) {
      let c;
      do { c = [0, 0, 0, 0, 0].map(() => rnd(0, 8)); } while (c.reduce((a, b) => a + b, 0) < 6);
      const n = c.reduce((a, b) => a + b, 0), sum = c.reduce((a, b, i) => a + b * (i + 1), 0);
      const table = c.map((v, i) => T`známka ${i + 1}: ${v}×`).join(', ');
      if (Math.random() < 0.55) {
        const avg = Math.round(sum / n * 100) / 100;
        return withMist({ answer: avg, tol: 0.006, q: T`Známky z písomky v triede: ${table}. Vypočítaj priemernú známku (zaokrúhli na stotiny).`,
          solution: T`Súčet známok: $${c.map((v, i) => `${i + 1}\\cdot ${v}`).join(' + ')} = ${sum}$. Počet žiakov: ${n}. Priemer: $${sum} : ${n} \\approx ${dc(avg)}$.`,
          hint: T.s('Každú známku vynásob počtom žiakov, ktorí ju dostali, súčiny sčítaj a vydeľ počtom žiakov.'),
          steps: [
            { q: T.s('Aký je súčet všetkých známok (každá známka toľkokrát, koľko žiakov ju dostalo)?'), answer: sum },
            { q: T.s('Koľko žiakov písalo písomku?'), answer: n },
            { q: T.s('Aký je priemer (zaokrúhlený na stotiny)?'), answer: avg, tol: 0.006 }
          ] }, [
          { value: Math.round(sum / 5 * 100) / 100, msg: T.s('Súčet známok treba deliť počtom žiakov, nie počtom rôznych známok.') },
          { value: 3, msg: T.s('Priemer známok $1$ až $5$ bez ohľadu na počty žiakov nestačí. Každú známku vynásob počtom žiakov, ktorí ju dostali.') }
        ]);
      }
      const all = [];
      c.forEach((v, i) => { for (let j = 0; j < v; j++) all.push(i + 1); });
      const med = n % 2 ? all[(n - 1) / 2] : (all[n / 2 - 1] + all[n / 2]) / 2;
      return withMist({ answer: med, q: T`Známky z písomky v triede: ${table}. Urči medián známok.`,
        solution: T`Žiakov je ${n}. Usporiadané známky: ${all.join(', ')}. ${n % 2 ? T`Prostredná je ${(n + 1) / 2}. hodnota: ${med}.` : T`Prostredné sú ${n / 2}. a ${n / 2 + 1}. hodnota, medián je ich priemer: ${dc(med)}.`}`,
        hint: T.s('Známky si usporiadaj od najlepšej po najhoršiu a nájdi prostrednú.'),
        steps: n % 2
          ? [{ q: T`Žiakov je ${n}. Koľká v poradí je prostredná známka?`, answer: (n + 1) / 2 },
            { q: T.s('Usporiadaj známky. Ktorá známka je na tomto mieste?'), answer: med }]
          : [{ q: T`Žiakov je ${n}, v strede sú dve hodnoty. Koľká v poradí je prvá z nich?`, answer: n / 2 },
            { q: T.s('Usporiadaj známky. Aký je priemer dvoch prostredných známok?'), answer: med }] }, [
        { value: 3, msg: T.s('Medián nie je prostredná známka stupnice, ale prostredná hodnota zo známok všetkých žiakov zoradených podľa veľkosti.') },
        { value: c.indexOf(Math.max(...c)) + 1, msg: T.s('Toto je najčastejšia známka (modus). Medián je prostredná hodnota usporiadaných známok.') }
      ]);
    }
    if (t < 0.6) {
      const k = rnd(0, 3);
      if (k === 0) {
        const m = rnd(2, 4), n = rnd(2, 6), d = rnd(2, 4);
        return withMist({ answer: m * n * d,
          q: T`Jedáleň ponúka ${m} ${pl(m, ['polievku', 'polievky', 'polievok'])}, ${n} ${pl(n, ['hlavné jedlo', 'hlavné jedlá', 'hlavných jedál'])} a ${d} ${pl(d, ['dezert', 'dezerty', 'dezertov'])}. Koľko rôznych obedov (polievka, hlavné jedlo a dezert) si môžeš zostaviť?`,
          solution: T`Podľa pravidla súčinu: $${m}\\cdot ${n}\\cdot ${d} = ${m * n * d}$.`,
          hint: T.s('Ku každej polievke môžeš vybrať každé hlavné jedlo a ku každej dvojici každý dezert.') }, [
          { value: m + n + d, msg: T.s('Ku každej polievke môžeš vybrať každé hlavné jedlo a ku každej takej dvojici každý dezert. Počty možností sa násobia, nie sčítajú.') }
        ]);
      }
      if (k === 1) {
        const n = rnd(4, 15);
        return withMist({ answer: n * (n - 1) / 2,
          steps: [
            { q: T.s('Koľkým ľuďom podá ruku každý z nich? Koľko je to podaní spolu, ak ich počítaš za každého človeka zvlášť?'), answer: n * (n - 1) },
            { q: T.s('Každé podanie ruky si takto započítal dvakrát. Koľko podaní rúk sa naozaj uskutočnilo?'), answer: n * (n - 1) / 2 }
          ],
          q: n <= 4 ? T`Na stretnutí boli ${n} ${pl(n, ['človek', 'ľudia', 'ľudí'])}. Každý si s každým raz podal ruku. Koľko podaní rúk sa uskutočnilo?`
            : T`Na stretnutí bolo ${n} ${pl(n, ['človek', 'ľudia', 'ľudí'])}. Každý si s každým raz podal ruku. Koľko podaní rúk sa uskutočnilo?`,
          solution: T`Každý z ${n} ľudí podal ruku ${n - 1} ostatným, to je $${n}\\cdot ${n - 1} = ${n * (n - 1)}$, ale každé podanie sme tak počítali dvakrát: $${n * (n - 1)} : 2 = ${n * (n - 1) / 2}$.`,
          hint: T.s('Spočítaj, koľkým ľuďom podá ruku jeden človek, a nezabudni, že podanie ruky A–B je to isté ako B–A.') }, [
          { value: n * (n - 1), msg: T.s('Každé podanie ruky si započítal dvakrát: podanie A–B je to isté ako B–A.') },
          { value: n * n, msg: T.s('Nikto si nepodáva ruku sám so sebou, každý podá ruku len ostatným.') }
        ]);
      }
      if (k === 2) {
        const digs = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, rnd(4, 6)).sort((a, b) => a - b), d = digs.length, len = rnd(2, 3);
        const ans = len === 2 ? d * (d - 1) : d * (d - 1) * (d - 2);
        return withMist({ answer: ans,
          q: len === 2 ? T`Koľko dvojciferných čísel s rôznymi číslicami môžeme vytvoriť z číslic ${digs.join(', ')}?`
            : T`Koľko trojciferných čísel s rôznymi číslicami môžeme vytvoriť z číslic ${digs.join(', ')}?`,
          solution: T`Prvú číslicu vyberáme z ${d}, druhú zo zvyšných ${d - 1}${len === 3 ? T`, tretiu zo zvyšných ${d - 2}` : ''}: $${len === 2 ? `${d}\\cdot ${d - 1}` : `${d}\\cdot ${d - 1}\\cdot ${d - 2}`} = ${ans}$.`,
          hint: T.s('Na každé ďalšie miesto máš o jednu číslicu menej, lebo sa nesmú opakovať.') }, [
          { value: Math.pow(d, len), msg: T.s('Číslice sa nesmú opakovať, preto na každé ďalšie miesto ostáva o jednu číslicu menej.') }
        ]);
      }
      const n = rnd(3, 6);
      let f = 1;
      for (let i = 2; i <= n; i++) f *= i;
      return withMist({ answer: f,
        q: n <= 4 ? T`Koľkými spôsobmi sa môžu ${n} ${pl(n, ['kamarát', 'kamaráti', 'kamarátov'])} posadiť na lavičku vedľa seba?`
          : T`Koľkými spôsobmi sa môže ${n} ${pl(n, ['kamarát', 'kamaráti', 'kamarátov'])} posadiť na lavičku vedľa seba?`,
        solution: T`Na prvé miesto môže sadnúť ktorýkoľvek z ${n}, na druhé jeden zo zvyšných ${n - 1} atď.: $${Array.from({ length: n }, (_, i) => n - i).join('\\cdot ')} = ${f}$.`,
        hint: T.s('Postupne obsadzuj miesta: na každé ďalšie miesto zostáva o jedného kamaráta menej.') }, [
        { value: n * (n + 1) / 2, msg: T.s('Počty možností pre jednotlivé miesta sa násobia, nie sčítajú.') },
        { value: n * n, msg: T.s('Na každé ďalšie miesto zostáva o jedného kamaráta menej, lebo jeden človek nemôže sedieť na dvoch miestach.') }
      ]);
    }
    const k = rnd(0, 2);
    if (k === 0) {
      const [ev, fav] = pick(DICE);
      return withMist({ signed: true, answer: fav.length / 6, show: fTxt(fav.length, 6),
        steps: [
          { q: T.s('Koľko výsledkov hodu je priaznivých?'), answer: fav.length },
          { q: T.s('Aká je pravdepodobnosť? Zadaj zlomok v základnom tvare.'), answer: fav.length / 6, show: fTxt(fav.length, 6) }
        ],
        q: T`Hodíme jednou hracou kockou. Aká je pravdepodobnosť, že ${T.s(ev)}? Výsledok zadaj ako zlomok v základnom tvare (napr. 1/3).`,
        solution: T`Všetkých výsledkov je 6, priaznivé sú ${fav.join(', ')} – teda ${fav.length}. $P = \\frac{${fav.length}}{6}${gcd(fav.length, 6) > 1 ? ` = ${fTex(fav.length, 6)}` : ''}$.`,
        hint: T.s('Vypíš všetky čísla na kocke, ktoré vyhovujú, a vydeľ ich počet šiestimi.') }, [
        fav.length < 6 && { value: fav.length / (6 - fav.length), msg: T.s('Pravdepodobnosť je počet priaznivých výsledkov delený počtom všetkých výsledkov, nie počtom nepriaznivých.') }
      ]);
    }
    if (k === 1) {
      const cnt = [rnd(1, 8), rnd(1, 8), rnd(1, 8)], i = rnd(0, 2), n = cnt[0] + cnt[1] + cnt[2];
      return withMist({ signed: true, answer: cnt[i] / n, show: fTxt(cnt[i], n),
        steps: [
          { q: T.s('Koľko guľôčok je vo vrecku spolu?'), answer: n },
          { q: T.s('Aká je pravdepodobnosť? Zadaj zlomok v základnom tvare.'), answer: cnt[i] / n, show: fTxt(cnt[i], n) }
        ],
        q: T`Vo vrecku máme ${cnt[0]} ${pl(cnt[0], ['červenú', 'červené', 'červených'])}, ${cnt[1]} ${pl(cnt[1], ['modrú', 'modré', 'modrých'])} a ${cnt[2]} ${pl(cnt[2], ['zelenú guľôčku', 'zelené guľôčky', 'zelených guľôčok'])}. Aká je pravdepodobnosť, že náhodne vytiahneme ${COLORS[i][0]}? Výsledok zadaj ako zlomok v základnom tvare.`,
        solution: T`Všetkých guľôčok je $${cnt.join(' + ')} = ${n}$, priaznivé sú ${COLORS[i][1]} guľôčky a je ich ${cnt[i]}. $P = \\frac{${cnt[i]}}{${n}}${gcd(cnt[i], n) > 1 ? ` = ${fTex(cnt[i], n)}` : ''}$.`,
        hint: T.s('Počet guľôčok požadovanej farby vydeľ počtom všetkých guľôčok.') }, [
        { value: cnt[i] / (n - cnt[i]), msg: T.s('Pravdepodobnosť je počet priaznivých guľôčok delený počtom všetkých guľôčok, nie počtom ostatných.') },
        { value: 1 / 3, msg: T.s('Farby nie sú rovnako zastúpené, preto pravdepodobnosť nie je $\\frac{1}{3}$. Rozhoduje počet guľôčok, nie počet farieb.') }
      ]);
    }
    const s = rnd(2, 12), c = 6 - Math.abs(s - 7);
    return withMist({ signed: true, answer: c / 36, show: fTxt(c, 36),
      steps: [
        { q: T`Koľko usporiadaných dvojíc (prvá kocka, druhá kocka) dáva súčet ${s}?`, answer: c },
        { q: T.s('Aká je pravdepodobnosť? Zadaj zlomok v základnom tvare.'), answer: c / 36, show: fTxt(c, 36) }
      ],
      q: T`Hodíme dvoma hracími kockami. Aká je pravdepodobnosť, že súčet bodov bude ${s}? Výsledok zadaj ako zlomok v základnom tvare.`,
      solution: T`Všetkých dvojíc výsledkov je $6\\cdot 6 = 36$. Súčet ${s} dávajú dvojice ${Array.from({ length: 6 }, (_, i) => i + 1).filter((a) => s - a >= 1 && s - a <= 6).map((a) => `[${a}; ${s - a}]`).join(', ')} – je ich ${c}. $P = \\frac{${c}}{36}${gcd(c, 36) > 1 ? ` = ${fTex(c, 36)}` : ''}$.`,
      hint: T.s('Kocky rozlíš (prvá a druhá). Všetkých možností je 36, vypíš dvojice s daným súčtom.') }, [
      { value: 1 / 11, msg: T.s('Súčty 2 až 12 nie sú rovnako pravdepodobné. Počítaj usporiadané dvojice výsledkov, všetkých je 36.') },
      c > 1 && { value: Math.ceil(c / 2) / 36, msg: T.s('Kocky rozlíš: napríklad [1; 2] a [2; 1] sú dva rôzne výsledky.') },
      { value: c / 12, msg: T.s('Všetkých výsledkov hodu dvoma kockami nie je 12, ale $6\\cdot 6 = 36$.') }
    ]);
  });
})();
