/* Vysoká škola: Pravdepodobnosť a štatistika (úroveň v4).
   Pravdepodobnostný priestor, podmienená pravdepodobnosť a Bayesova veta, diskrétne a spojité náhodné veličiny
   a ich rozdelenia, náhodné vektory, zákon veľkých čísel a CLV, popisná štatistika, odhady, intervaly spoľahlivosti,
   testovanie hypotéz, korelácia a regresia. Funkcia Φ je implementovaná priamo tu (aproximácia erf, chyba pod 1e-6). */
(function () {
  'use strict';

  const { rnd, pick, gcd, shuffle } = EXERCISES.util;
  const { plane, curvePath, svg, n1, sk } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v4' }, l));
  // odpovede sú už zaokrúhlené na požadovaný počet miest; zobrazíme ich celé (fmt by krátil na 3 miesta)
  const gen = (id, fn) => EXERCISES.register(id, () => {
    const e = fn(), txt = (v) => String(v).replace('.', ',');
    if (!e.show && (!e.type || e.type === 'num') && !Number.isInteger(e.answer)) e.show = txt(e.answer);
    if (!e.show && e.type === 'tuple') e.show = e.answer.map(txt).join('; ');
    return e;
  });
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 výrobok, 2 výrobky, 5 výrobkov.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);

  /* ---------- čísla a zápis ---------- */

  const round = (x, d) => { const f = Math.pow(10, d); return Math.sign(x) * Math.round(Math.abs(x) * f + 1e-9) / f; };
  const nm = (x, d = 4) => String(round(x, d) || 0).replace('.', '{,}');     // KaTeX, bez koncových núl
  const nt = (x, d = 4) => String(round(x, d) || 0).replace('.', ',');       // obyčajný text
  const dd = (x, d = 4) => (round(x, d) || 0).toFixed(d).replace('.', '{,}'); // KaTeX, pevný počet miest
  const dt = (x, d = 4) => (round(x, d) || 0).toFixed(d).replace('.', ',');   // text, pevný počet miest
  const red = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g, q / g]; };
  const fTex = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${b}}`; };
  const fTxt = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a}/${b}`; };
  const par = (s) => (String(s).startsWith('-') ? `(${s})` : s);
  // oddelenie tisícov v KaTeX: 12500 -> 12\,500
  const ths = (s) => String(s).replace(/^(-?\d+)/, (m) => m.replace(/\B(?=(\d{3})+(?!\d))/g, '\\,'));
  const C = (n, k) => { if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
  const sum = (a) => a.reduce((s, v) => s + v, 0);
  // náhodný rozklad čísla tot na k kladných častí, každá aspoň mn
  const parts = (tot, k, mn = 1) => {
    const cut = shuffle(Array.from({ length: tot - k * mn + k - 1 }, (_, i) => i + 1)).slice(0, k - 1).sort((a, b) => a - b);
    const r = []; let prev = 0;
    cut.forEach((c) => { r.push(c - prev - 1 + mn); prev = c; });
    r.push(tot - k * mn + k - 1 - prev + mn);
    return r;
  };
  const R2 = 'Výsledok zaokrúhli na 2 desatinné miesta.';
  const R3 = 'Výsledok zaokrúhli na 3 desatinné miesta.';
  const R4 = 'Výsledok zaokrúhli na 4 desatinné miesta.';

  /* ---------- normálne rozdelenie ---------- */

  // erf podľa Abramowitza a Steguna (7.1.26), absolútna chyba pod 1,5e-7
  const erf = (x) => {
    const s = x < 0 ? -1 : 1, a = Math.abs(x), t = 1 / (1 + 0.3275911 * a);
    const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-a * a);
    return s * y;
  };
  const Phi = (z) => 0.5 * (1 + erf(z / Math.SQRT2));
  const PhiT = (z) => round(Phi(z), 4);                 // tabuľková hodnota na 4 miesta
  const npdf = (x, m = 0, s = 1) => Math.exp(-((x - m) ** 2) / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI));
  // výpis potrebných hodnôt Φ do zadania: "$\Phi(1{,}25)=0{,}8944$ a $\Phi(2)=0{,}9772$"
  const phiList = (zs) => {
    const u = [...new Set(zs.map((z) => round(Math.abs(z), 2)))].sort((a, b) => a - b);
    const items = u.map((z) => `$\\Phi(${nm(z, 2)})=${dd(PhiT(z), 4)}$`);
    return items.length > 1 ? items.slice(0, -1).join(', ') + ' a ' + items[items.length - 1] : items[0];
  };
  // kvantily N(0, 1)
  const ZQ = { 0.9: 1.2816, 0.95: 1.6449, 0.975: 1.96, 0.99: 2.3263, 0.995: 2.5758 };
  // kvantily Studentovho t-rozdelenia t_p(k) pre k = 1, …, 30
  const T95 = [6.314, 2.920, 2.353, 2.132, 2.015, 1.943, 1.895, 1.860, 1.833, 1.812, 1.796, 1.782, 1.771, 1.761, 1.753,
    1.746, 1.740, 1.734, 1.729, 1.725, 1.721, 1.717, 1.714, 1.711, 1.708, 1.706, 1.703, 1.701, 1.699, 1.697];
  const T975 = [12.706, 4.303, 3.182, 2.776, 2.571, 2.447, 2.365, 2.306, 2.262, 2.228, 2.201, 2.179, 2.160, 2.145, 2.131,
    2.120, 2.110, 2.101, 2.093, 2.086, 2.080, 2.074, 2.069, 2.064, 2.060, 2.056, 2.052, 2.048, 2.045, 2.042];
  const T995 = [63.657, 9.925, 5.841, 4.604, 4.032, 3.707, 3.499, 3.355, 3.250, 3.169, 3.106, 3.055, 3.012, 2.977, 2.947,
    2.921, 2.898, 2.878, 2.861, 2.845, 2.831, 2.819, 2.807, 2.797, 2.787, 2.779, 2.771, 2.763, 2.756, 2.750];
  // kvantily χ²_{0,95}(k) pre k = 1, …, 10
  const CHI95 = [3.841, 5.991, 7.815, 9.488, 11.070, 12.592, 14.067, 15.507, 16.919, 18.307];

  /* ---------- pomôcky na kreslenie ---------- */

  // vodorovná os s dielikmi v krokoch step, popis každý label-tý dielik
  const xAxis = (p, step = 1, every = 1, y = 0) => {
    let s = `<line class="f-axis" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(y))}" x2="${n1(p.X(p.xmax))}" y2="${n1(p.Y(y))}"/>`;
    const k0 = Math.ceil(p.xmin / step - 1e-9), k1 = Math.floor(p.xmax / step + 1e-9);
    for (let k = k0; k <= k1; k++) {
      const x = k * step;
      s += `<line class="f-thin" x1="${n1(p.X(x))}" y1="${n1(p.Y(y))}" x2="${n1(p.X(x))}" y2="${n1(p.Y(y) + 5)}"/>`;
      if (k % every === 0) s += `<text class="f-small" x="${n1(p.X(x))}" y="${n1(p.Y(y) + 17)}" text-anchor="middle">${sk(x, step < 1 ? 1 : 0).replace(',0', '')}</text>`;
    }
    return s;
  };
  // plocha pod krivkou fn na [a, b]
  const areaPath = (p, fn, a, b, steps = 120) => {
    if (b <= a) return '';
    let d = `M${n1(p.X(a))} ${n1(p.Y(0))}`;
    for (let i = 0; i <= steps; i++) {
      const x = a + (b - a) * i / steps;
      d += `L${n1(p.X(x))} ${n1(p.Y(Math.min(fn(x), p.ymax + 1)))}`;
    }
    return d + `L${n1(p.X(b))} ${n1(p.Y(0))}Z`;
  };
  // deterministický generátor (rovnaký obrázok pri každom prekreslení)
  const seeded = (seed) => () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
  const gaussList = (n, seed) => {
    const r = seeded(seed), out = [];
    while (out.length < n) {
      const u = r() || 1e-9, v = r();
      out.push(Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v));
    }
    return out;
  };

  /* ======================= 1. PRAVDEPODOBNOSTNÝ PRIESTOR ======================= */

  fig('v4-stretnutie', {
    draw: () => {
      const S = 200, ox = 60, oy = 20, k = S / 60;
      const P = (x, y) => `${n1(ox + x * k)},${n1(oy + S - y * k)}`;
      return `<svg viewBox="0 0 440 262" role="img" aria-label="Geometrická pravdepodobnosť: úloha o stretnutí">
        <polygon class="f-fill f-outline" points="${P(0, 0)} ${P(15, 0)} ${P(60, 45)} ${P(60, 60)} ${P(45, 60)} ${P(0, 15)}"/>
        <rect class="f-cell" x="${ox}" y="${oy}" width="${S}" height="${S}"/>
        <line class="f-dash" x1="${ox}" y1="${oy + S}" x2="${ox + S}" y2="${oy}"/>
        <text class="f-small" x="${ox}" y="${oy + S + 16}" text-anchor="middle">0</text>
        <text class="f-small" x="${ox + 15 * k}" y="${oy + S + 16}" text-anchor="middle">15</text>
        <text class="f-small" x="${ox + S}" y="${oy + S + 16}" text-anchor="middle">60</text>
        <text class="f-small" x="${ox - 6}" y="${oy + S - 15 * k + 4}" text-anchor="end">15</text>
        <text class="f-small" x="${ox - 6}" y="${oy + 4}" text-anchor="end">60</text>
        <text class="f-math" x="${ox + S / 2}" y="${oy + S + 38}" text-anchor="middle">x</text>
        <text class="f-math" x="${ox - 30}" y="${oy + S / 2}" text-anchor="middle">y</text>
        <text class="f-text c-accent" x="${ox + S + 22}" y="70">|x − y| ≤ 15</text>
        <text class="f-small" x="${ox + S + 22}" y="96">obsah pásu: 60² − 45²</text>
        <text class="f-small" x="${ox + S + 22}" y="118">obsah štvorca: 60²</text>
        <text class="f-text" x="${ox + S + 22}" y="150">P = 1 − (45/60)²</text>
        <text class="f-text" x="${ox + S + 22}" y="174">   = 0,4375</text></svg>`;
    }
  });

  lesson({
    id: 'v4-priestor', order: 10, title: 'Pravdepodobnostný priestor a axiómy',
    summary: 'Kolmogorovove axiómy, vlastnosti pravdepodobnosti, princíp inklúzie a exklúzie, geometrická pravdepodobnosť.',
    theory: [
      `<p><strong>Pravdepodobnostný priestor</strong> je trojica $(\\Omega, \\mathcal{A}, P)$. Množina $\\Omega$ obsahuje všetky elementárne výsledky pokusu,
       $\\mathcal{A}$ je systém <em>javov</em> (podmnožín $\\Omega$), ktorý je σ-algebrou: obsahuje $\\Omega$, s každým javom $A$ obsahuje aj opačný jav $\\bar{A}=\\Omega\\setminus A$
       a so spočítateľne mnohými javmi aj ich zjednotenie. <strong>Pravdepodobnosť</strong> je funkcia $P:\\mathcal{A}\\to\\mathbb{R}$ spĺňajúca
       <strong>Kolmogorovove axiómy</strong>:</p>
       <ol><li>$P(A)\\ge 0$ pre každý jav $A$,</li><li>$P(\\Omega)=1$,</li>
       <li>σ-aditivita: pre po dvoch disjunktné javy $A_1, A_2, \\dots$ platí $P\\left(\\bigcup_{i} A_i\\right)=\\sum_i P(A_i)$.</li></ol>`,
      `<p><strong>Dôsledky axióm.</strong> $P(\\emptyset)=0$, $P(\\bar{A})=1-P(A)$, z $A\\subseteq B$ vyplýva $P(A)\\le P(B)$ a $P(B\\setminus A)=P(B)-P(A)$.
       Vo všeobecnosti $P(A\\setminus B)=P(A)-P(A\\cap B)$ a platí <strong>princíp inklúzie a exklúzie</strong>
       $$P(A\\cup B)=P(A)+P(B)-P(A\\cap B),$$
       $$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(A\\cap B)-P(A\\cap C)-P(B\\cap C)+P(A\\cap B\\cap C).$$
       Odtiaľ <strong>Booleova nerovnosť</strong> $P(A\\cup B)\\le P(A)+P(B)$ a <strong>Bonferroniho nerovnosť</strong> $P(A\\cap B)\\ge P(A)+P(B)-1$.
       De Morganove pravidlá: $\\overline{A\\cup B}=\\bar{A}\\cap\\bar{B}$, $\\overline{A\\cap B}=\\bar{A}\\cup\\bar{B}$.</p>`,
      `<p><strong>Klasická a geometrická pravdepodobnosť</strong> sú špeciálne modely. Ak je $\\Omega$ konečná a všetky výsledky sú rovnako možné, $P(A)=\\frac{|A|}{|\\Omega|}$.
       Ak je $\\Omega$ ohraničená oblasť v $\\mathbb{R}^n$ a bod volíme „rovnomerne náhodne“, $P(A)=\\frac{\\lambda(A)}{\\lambda(\\Omega)}$, kde $\\lambda$ je dĺžka, obsah alebo objem.</p>`,
      { fig: 'v4-stretnutie', caption: 'Dvaja ľudia prídu na miesto stretnutia v náhodnom čase medzi 0. a 60. minútou a každý čaká 15 minút. Dvojica časov $(x, y)$ je náhodný bod štvorca, stretnú sa práve vtedy, keď bod leží vo vyfarbenom páse $|x-y|\\le 15$.' }
    ],
    examples: [
      { task: 'Pre javy $A$, $B$ platí $P(A)=0{,}5$, $P(B)=0{,}4$ a $P(A\\cup B)=0{,}7$. Určte $P(A\\cap B)$, $P(A\\setminus B)$ a $P(\\bar{A}\\cap\\bar{B})$.',
        steps: ['Z princípu inklúzie a exklúzie: $P(A\\cap B)=P(A)+P(B)-P(A\\cup B)=0{,}5+0{,}4-0{,}7=0{,}2$.',
          '$P(A\\setminus B)=P(A)-P(A\\cap B)=0{,}5-0{,}2=0{,}3$.',
          'Podľa De Morganovho pravidla $\\bar{A}\\cap\\bar{B}=\\overline{A\\cup B}$, preto $P(\\bar{A}\\cap\\bar{B})=1-0{,}7=0{,}3$.'] },
      { task: 'Dvaja priatelia sa dohodli, že prídu na miesto stretnutia náhodne medzi 17:00 a 18:00 (časy príchodov sú nezávislé a rovnomerne rozdelené). Kto príde prvý, čaká 15 minút a potom odíde. Aká je pravdepodobnosť, že sa stretnú?',
        steps: ['Časy príchodov v minútach po 17:00 tvoria bod $(x, y)$ štvorca $[0, 60]^2$ s obsahom $60^2=3600$.',
          'Stretnú sa, ak $|x-y|\\le 15$. Doplnok tvoria dva pravouhlé trojuholníky s odvesnami 45, spolu s obsahom $45^2=2025$.',
          '$P=\\frac{3600-2025}{3600}=1-\\left(\\frac{45}{60}\\right)^2=\\frac{7}{16}=0{,}4375$.'] }
    ]
  });

  gen('v4-priestor', () => {
    const t = Math.random(), h = (v) => nm(v / 100, 2);
    if (t < 0.3) {
      let p11, p10, p01, p00;
      do { p11 = rnd(5, 30); p10 = rnd(5, 40); p01 = rnd(5, 40); p00 = 100 - p11 - p10 - p01; } while (p00 < 5);
      const a = p11 + p10, b = p11 + p01, given = `$P(A)=${h(a)}$, $P(B)=${h(b)}$ a $P(A\\cap B)=${h(p11)}$`;
      const Q = [
        ['P(A\\cup B)', p11 + p10 + p01, `$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=${h(a)}+${h(b)}-${h(p11)}=${h(p11 + p10 + p01)}$.`],
        ['P(A\\setminus B)', p10, `$P(A\\setminus B)=P(A)-P(A\\cap B)=${h(a)}-${h(p11)}=${h(p10)}$.`],
        ['P(\\bar{A}\\cap\\bar{B})', p00, `$\\bar{A}\\cap\\bar{B}=\\overline{A\\cup B}$, preto $P(\\bar{A}\\cap\\bar{B})=1-P(A\\cup B)=1-(${h(a)}+${h(b)}-${h(p11)})=${h(p00)}$.`],
        ['P(\\bar{A}\\cup\\bar{B})', 100 - p11, `$\\bar{A}\\cup\\bar{B}=\\overline{A\\cap B}$, preto $P(\\bar{A}\\cup\\bar{B})=1-P(A\\cap B)=1-${h(p11)}=${h(100 - p11)}$.`],
        ['P(B\\setminus A)', p01, `$P(B\\setminus A)=P(B)-P(A\\cap B)=${h(b)}-${h(p11)}=${h(p01)}$.`]
      ];
      if (Math.random() < 0.25) {
        return {
          answer: (p10 + p01) / 100, tol: 0.0001,
          q: `Pre javy $A$, $B$ platí ${given}. Aká je pravdepodobnosť, že nastane <strong>práve jeden</strong> z javov $A$, $B$?`,
          solution: `Práve jeden jav nastane, ak nastane $A\\setminus B$ alebo $B\\setminus A$ (disjunktné javy):
            $P=(P(A)-P(A\\cap B))+(P(B)-P(A\\cap B))=${h(p10)}+${h(p01)}=${h(p10 + p01)}$.`,
          hint: 'Rozlož jav na dva disjunktné javy $A\\setminus B$ a $B\\setminus A$.'
        };
      }
      const [lab, ans, sol] = pick(Q);
      return {
        answer: ans / 100, tol: 0.0001,
        q: `Pre javy $A$, $B$ platí ${given}. Vypočítaj $${lab}$.`,
        solution: sol,
        hint: 'Použi $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$, $P(A\\setminus B)=P(A)-P(A\\cap B)$ a De Morganove pravidlá.'
      };
    }
    if (t < 0.55) {
      // atómy: [A only, B only, C only, AB only, AC only, BC only, ABC], zvyšok = žiadny
      let at, none;
      do { at = Array.from({ length: 7 }, () => rnd(2, 15)); none = 100 - sum(at); } while (none < 5 || none > 40);
      const [a, b, c, ab, ac, bc, abc] = at;
      const PA = a + ab + ac + abc, PB = b + ab + bc + abc, PC = c + ac + bc + abc;
      const PAB = ab + abc, PAC = ac + abc, PBC = bc + abc, U = 100 - none;
      const askNone = Math.random() < 0.4;
      return {
        answer: (askNone ? none : U) / 100, tol: 0.0001,
        q: `Pre javy $A$, $B$, $C$ platí $P(A)=${h(PA)}$, $P(B)=${h(PB)}$, $P(C)=${h(PC)}$, $P(A\\cap B)=${h(PAB)}$, $P(A\\cap C)=${h(PAC)}$, $P(B\\cap C)=${h(PBC)}$
          a $P(A\\cap B\\cap C)=${h(abc)}$. ${askNone ? 'Aká je pravdepodobnosť, že nenastane ani jeden z týchto javov?' : 'Vypočítaj $P(A\\cup B\\cup C)$.'}`,
        solution: `Princíp inklúzie a exklúzie: $P(A\\cup B\\cup C)=${h(PA)}+${h(PB)}+${h(PC)}-${h(PAB)}-${h(PAC)}-${h(PBC)}+${h(abc)}=${h(U)}$.
          ${askNone ? `Ani jeden jav nenastane s pravdepodobnosťou $1-P(A\\cup B\\cup C)=${h(none)}$.` : ''}`,
        hint: 'Sčítaj pravdepodobnosti jednotlivých javov, odčítaj prieniky dvojíc a pripočítaj prienik všetkých troch.'
      };
    }
    if (t < 0.78) {
      let a, b;
      do { a = rnd(50, 90); b = rnd(40, 90); } while (a + b < 106 || a === b);
      const k = rnd(0, 2), A = h(a), B = h(b);
      const Q = [
        ['najmenšiu možnú hodnotu $P(A\\cap B)$', (a + b - 100) / 100,
          `Keďže $P(A\\cup B)\\le 1$, platí $P(A\\cap B)=P(A)+P(B)-P(A\\cup B)\\ge ${A}+${B}-1=${h(a + b - 100)}$. Rovnosť nastane, ak $A\\cup B=\\Omega$ (Bonferroniho nerovnosť).`],
        ['najväčšiu možnú hodnotu $P(A\\cap B)$', Math.min(a, b) / 100,
          `$A\\cap B$ je podmnožinou $A$ aj $B$, teda $P(A\\cap B)\\le\\min(${A}, ${B})=${h(Math.min(a, b))}$. Rovnosť nastane, ak je menší jav podmnožinou väčšieho.`],
        ['najmenšiu možnú hodnotu $P(A\\cup B)$', Math.max(a, b) / 100,
          `$A\\cup B$ obsahuje $A$ aj $B$, teda $P(A\\cup B)\\ge\\max(${A}, ${B})=${h(Math.max(a, b))}$. Rovnosť nastane, ak je menší jav podmnožinou väčšieho.`]
      ];
      return {
        answer: Q[k][1], tol: 0.0001,
        q: `O javoch $A$, $B$ vieme len to, že $P(A)=${A}$ a $P(B)=${B}$. Urči ${Q[k][0]}.`,
        solution: Q[k][2],
        hint: 'Využi monotónnosť pravdepodobnosti ($X\\subseteq Y\\Rightarrow P(X)\\le P(Y)$) a vzťah $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)\\le 1$.'
      };
    }
    const T = pick([30, 60, 60]), w = T === 30 ? pick([5, 6, 10, 15]) : pick([5, 10, 12, 15, 20, 30]);
    const res = 1 - ((T - w) / T) ** 2;
    const hour = T === 60 ? 'medzi 17:00 a 18:00' : 'medzi 12:00 a 12:30';
    return {
      answer: round(res, 4), tol: 0.0001,
      q: `Dvaja kolegovia prídu na dohodnuté miesto nezávisle od seba v náhodnom okamihu ${hour} (rovnomerne rozdelenom). Kto príde prvý, čaká na druhého ${w} minút a potom odíde. Aká je pravdepodobnosť, že sa stretnú? ${R4}`,
      solution: `Časy príchodov (v minútach) tvoria náhodný bod štvorca $[0, ${T}]^2$. Stretnú sa, ak $|x-y|\\le ${w}$. Doplnok tvoria dva trojuholníky s odvesnami $${T - w}$, ktorých spoločný obsah je $${T - w}^2$.
        $P=1-\\left(\\frac{${T - w}}{${T}}\\right)^2=${fTex(T * T - (T - w) * (T - w), T * T)}\\approx ${dd(res, 4)}$.`,
      hint: 'Nakresli štvorec možných dvojíc príchodov a vyznač pás $|x-y|\\le w$. Pravdepodobnosť je pomer obsahov.'
    };
  });

  /* ======================= 2. PODMIENENÁ PRAVDEPODOBNOSŤ ======================= */

  fig('v4-bayes-strom', {
    draw: () => {
      const E = (x1, y1, x2, y2, cls) => `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
      const T = (x, y, s, cls = 'f-small', anchor = 'middle') => `<text class="${cls}" x="${x}" y="${y}" text-anchor="${anchor}">${s}</text>`;
      return `<svg viewBox="0 0 500 236" role="img" aria-label="Stromový diagram k Bayesovej vete">
        ${E(24, 118, 160, 58, 'f-accent')}${E(24, 118, 160, 178, 'f-line')}
        ${E(184, 58, 300, 26, 'f-accent')}${E(184, 58, 300, 90, 'f-thin')}
        ${E(184, 178, 300, 146, 'f-accent')}${E(184, 178, 300, 210, 'f-thin')}
        <circle class="f-dot" cx="20" cy="118" r="5"/>
        ${T(172, 64, 'D', 'f-math')}${T(172, 184, 'D̄', 'f-math')}
        ${T(84, 78, '0,01')}${T(84, 166, '0,99')}
        ${T(234, 30, '0,95')}${T(234, 92, '0,05')}${T(234, 150, '0,10')}${T(234, 212, '0,90')}
        ${T(312, 31, '+', 'f-math', 'start')}${T(312, 95, '−', 'f-math', 'start')}${T(312, 151, '+', 'f-math', 'start')}${T(312, 215, '−', 'f-math', 'start')}
        ${T(334, 30, '0,01 · 0,95 = 0,0095', 'f-text c-accent', 'start')}${T(334, 94, '0,01 · 0,05 = 0,0005', 'f-small', 'start')}
        ${T(334, 150, '0,99 · 0,10 = 0,0990', 'f-text c-accent', 'start')}${T(334, 214, '0,99 · 0,90 = 0,8910', 'f-small', 'start')}</svg>`;
    }
  });

  lesson({
    id: 'v4-podmienena', order: 20, title: 'Podmienená pravdepodobnosť, Bayesova veta a nezávislosť',
    summary: 'Podmienená pravdepodobnosť, veta o úplnej pravdepodobnosti, Bayesova veta, nezávislosť javov a spoľahlivosť systémov.',
    theory: [
      `<p>Nech $P(B)&gt;0$. <strong>Podmienená pravdepodobnosť</strong> javu $A$ za podmienky $B$ je
       $$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}.$$
       Pri pevnom $B$ je $P(\\cdot\\mid B)$ opäť pravdepodobnosť (spĺňa axiómy). Odtiaľ <strong>veta o násobení</strong> $P(A\\cap B)=P(B)\\,P(A\\mid B)$
       a všeobecnejšie $P(A_1\\cap\\dots\\cap A_n)=P(A_1)\\,P(A_2\\mid A_1)\\cdots P(A_n\\mid A_1\\cap\\dots\\cap A_{n-1})$.</p>`,
      `<p>Javy $H_1, \\dots, H_n$ tvoria <strong>úplný systém javov</strong>, ak sú po dvoch disjunktné, $H_1\\cup\\dots\\cup H_n=\\Omega$ a $P(H_i)&gt;0$. Potom platí
       <strong>veta o úplnej pravdepodobnosti</strong> a <strong>Bayesova veta</strong>:
       $$P(A)=\\sum_{i=1}^{n}P(H_i)\\,P(A\\mid H_i),\\qquad P(H_k\\mid A)=\\frac{P(H_k)\\,P(A\\mid H_k)}{\\sum_{i=1}^{n}P(H_i)\\,P(A\\mid H_i)}.$$
       $P(H_k)$ sú <em>apriórne</em> pravdepodobnosti hypotéz, $P(H_k\\mid A)$ <em>aposteriórne</em> — po pozorovaní javu $A$.</p>`,
      { fig: 'v4-bayes-strom', caption: 'Stromový diagram diagnostického testu: choroba $D$ s prevalenciou 1 %, citlivosť $P(+\\mid D)=0{,}95$, špecificita $P(-\\mid\\bar{D})=0{,}90$. Pozitívny výsledok vzniká dvoma cestami, $P(+)=0{,}0095+0{,}099=0{,}1085$.' },
      `<p>Javy $A$, $B$ sú <strong>nezávislé</strong>, ak $P(A\\cap B)=P(A)\\,P(B)$ (pri $P(B)&gt;0$ je to totéž ako $P(A\\mid B)=P(A)$). S javmi $A$, $B$ sú potom nezávislé aj $\\bar{A}$, $B$ a $\\bar{A}$, $\\bar{B}$.
       Javy $A_1, \\dots, A_n$ sú <strong>nezávislé (vzájomne)</strong>, ak pre každý výber indexov $i_1\\lt\\dots\\lt i_k$ platí $P(A_{i_1}\\cap\\dots\\cap A_{i_k})=P(A_{i_1})\\cdots P(A_{i_k})$.
       Nezávislosť po dvojiciach nestačí: pri dvoch hodoch mincou sú javy „na prvej padol znak“, „na druhej padol znak“ a „na oboch padlo to isté“ po dvoch nezávislé, ale nie vzájomne.
       <strong>Spoľahlivosť:</strong> sériový systém nezávislých súčiastok funguje s pravdepodobnosťou $p_1p_2\\cdots p_n$, paralelný s pravdepodobnosťou $1-(1-p_1)\\cdots(1-p_n)$.</p>`
    ],
    examples: [
      { task: 'Výrobky pochádzajú z troch liniek: linka 1 vyrába 50 %, linka 2 30 % a linka 3 20 % produkcie. Podiel chybných výrobkov je postupne 2 %, 3 % a 5 %. Aká je pravdepodobnosť, že náhodný výrobok je chybný? Ak je chybný, aká je pravdepodobnosť, že pochádza z linky 3?',
        steps: ['Hypotézy $H_i$: výrobok je z linky $i$; $A$: výrobok je chybný.',
          'Úplná pravdepodobnosť: $P(A)=0{,}5\\cdot 0{,}02+0{,}3\\cdot 0{,}03+0{,}2\\cdot 0{,}05=0{,}01+0{,}009+0{,}01=0{,}029$.',
          'Bayesova veta: $P(H_3\\mid A)=\\frac{0{,}2\\cdot 0{,}05}{0{,}029}=\\frac{0{,}01}{0{,}029}\\approx 0{,}3448$.',
          'Linka 3 vyrába iba pätinu produkcie, ale pochádza z nej viac ako tretina chybných výrobkov.'] },
      { task: 'Choroba má prevalenciu 1 %. Test má citlivosť 95 % a špecificitu 90 %. Aká je pravdepodobnosť, že človek s pozitívnym testom je naozaj chorý?',
        steps: ['$P(+)=P(D)P(+\\mid D)+P(\\bar{D})P(+\\mid\\bar{D})=0{,}01\\cdot 0{,}95+0{,}99\\cdot 0{,}10=0{,}1085$.',
          '$P(D\\mid +)=\\frac{0{,}0095}{0{,}1085}\\approx 0{,}0876$.',
          'Napriek dobrému testu je pozitívny výsledok správny iba asi v 9 % prípadov — choroba je zriedkavá a falošne pozitívnych je oveľa viac.'] }
    ]
  });

  gen('v4-podmienena', () => {
    const t = Math.random();
    if (t < 0.5) {
      const k = pick([2, 3, 3]);
      let sh;
      do { sh = parts(20, k, 2).map((v) => v * 5); } while (new Set(sh).size < k);
      const df = shuffle([1, 2, 3, 4, 5, 6, 8]).slice(0, k);
      const terms = sh.map((s, i) => s * df[i]), PA = sum(terms) / 10000;
      const src = pick([['linky', 'linka', 'linke', 'chybný'], ['dodávatelia', 'dodávateľ', 'dodávateľovi', 'chybný'], ['zmeny', 'zmena', 'zmene', 'chybný']]);
      const names = sh.map((_, i) => `${src[1]} ${i + 1}`);
      const ctx = `Výrobky na sklade pochádzajú z ${k === 2 ? 'dvoch' : 'troch'} zdrojov: ${names.map((n, i) => `${n} dodáva ${sh[i]} %`).join(', ')} všetkých kusov.
        Podiel chybných výrobkov je postupne ${df.map((d) => d + ' %').join(', ')}.`;
      const total = `$P(A)=${sh.map((s, i) => `${nm(s / 100, 2)}\\cdot ${nm(df[i] / 100, 2)}`).join('+')}=${nm(PA, 4)}$`;
      if (t < 0.25) {
        return {
          answer: PA, tol: 0.0001,
          q: `${ctx} Aká je pravdepodobnosť, že náhodne vybraný výrobok je chybný? Výsledok uveď ako desatinné číslo.`,
          solution: `Hypotézy $H_i$ (výrobok pochádza zo zdroja $i$) tvoria úplný systém. Podľa vety o úplnej pravdepodobnosti ${total}.`,
          hint: 'Veta o úplnej pravdepodobnosti: $P(A)=\\sum P(H_i)\\,P(A\\mid H_i)$.'
        };
      }
      const j = rnd(0, k - 1), res = terms[j] / 10000 / PA;
      return {
        answer: round(res, 4), tol: 0.0002,
        q: `${ctx} Náhodne vybraný výrobok je chybný. Aká je pravdepodobnosť, že ho dodal zdroj ${j + 1} (${names[j]})? ${R4}`,
        solution: `Najprv ${total}. Podľa Bayesovej vety $P(H_${j + 1}\\mid A)=\\frac{${nm(sh[j] / 100, 2)}\\cdot ${nm(df[j] / 100, 2)}}{${nm(PA, 4)}}=\\frac{${nm(terms[j] / 10000, 4)}}{${nm(PA, 4)}}\\approx ${dd(res, 4)}$.`,
        hint: 'Bayesova veta: čitateľ je pravdepodobnosť „cesty“ cez danú hypotézu, menovateľ je celková pravdepodobnosť $P(A)$.'
      };
    }
    if (t < 0.75) {
      const prev = pick([0.005, 0.01, 0.02, 0.04, 0.05, 0.1]), se = pick([0.9, 0.95, 0.98, 0.99]), sp = pick([0.85, 0.9, 0.95, 0.97, 0.99]);
      const pPos = prev * se + (1 - prev) * (1 - sp), pNeg = 1 - pPos;
      const pos = Math.random() < 0.7;
      const res = pos ? prev * se / pPos : (1 - prev) * sp / pNeg;
      const ctx = `Choroba sa v populácii vyskytuje s pravdepodobnosťou $${nm(prev, 3)}$. Diagnostický test má citlivosť $P(+\\mid D)=${nm(se, 2)}$ a špecificitu $P(-\\mid\\bar{D})=${nm(sp, 2)}$.`;
      return {
        answer: round(res, 4), tol: 0.0002,
        q: `${ctx} ${pos ? 'Test vyšiel pozitívne. Aká je pravdepodobnosť, že testovaný je naozaj chorý, teda $P(D\\mid +)$?' : 'Test vyšiel negatívne. Aká je pravdepodobnosť, že testovaný je naozaj zdravý, teda $P(\\bar{D}\\mid -)$?'} ${R4}`,
        solution: pos
          ? `$P(+)=${nm(prev, 3)}\\cdot ${nm(se, 2)}+${nm(1 - prev, 3)}\\cdot ${nm(1 - sp, 2)}=${nm(pPos, 6)}$. Bayesova veta: $P(D\\mid +)=\\frac{${nm(prev * se, 6)}}{${nm(pPos, 6)}}\\approx ${dd(res, 4)}$.`
          : `$P(-)=${nm(prev, 3)}\\cdot ${nm(1 - se, 2)}+${nm(1 - prev, 3)}\\cdot ${nm(sp, 2)}=${nm(pNeg, 6)}$. Bayesova veta: $P(\\bar{D}\\mid -)=\\frac{${nm((1 - prev) * sp, 6)}}{${nm(pNeg, 6)}}\\approx ${dd(res, 4)}$.`,
        hint: 'Nakresli strom: najprv chorý/zdravý, potom výsledok testu. Pravdepodobnosť výsledku testu získaš vetou o úplnej pravdepodobnosti.'
      };
    }
    if (t < 0.88) {
      const [p1, p2, p3] = [pick([0.8, 0.85, 0.9, 0.95]), pick([0.7, 0.8, 0.9]), pick([0.9, 0.95, 0.98, 0.99])];
      if (Math.random() < 0.5) {
        const res = (1 - (1 - p1) * (1 - p2)) * p3;
        return {
          answer: round(res, 4), tol: 0.0001,
          q: `Systém tvoria súčiastky $S_1$ a $S_2$ zapojené paralelne a k nim sériovo pripojená súčiastka $S_3$. Súčiastky fungujú nezávisle s pravdepodobnosťami $${nm(p1)}$, $${nm(p2)}$ a $${nm(p3)}$. Aká je pravdepodobnosť, že systém funguje? ${R4}`,
          solution: `Paralelná dvojica zlyhá, len ak zlyhajú obe: funguje s pravdepodobnosťou $1-${nm(1 - p1)}\\cdot ${nm(1 - p2)}=${nm(1 - (1 - p1) * (1 - p2))}$.
            Sériovo so $S_3$: $${nm(1 - (1 - p1) * (1 - p2))}\\cdot ${nm(p3)}\\approx ${dd(res, 4)}$.`,
          hint: 'Sériové zapojenie: násob pravdepodobnosti fungovania. Paralelné: systém zlyhá, iba ak zlyhajú všetky vetvy.'
        };
      }
      const res = 1 - (1 - p1 * p2) * (1 - p3);
      return {
        answer: round(res, 4), tol: 0.0001,
        q: `Systém má dve paralelné vetvy: v prvej sú sériovo súčiastky $S_1$ a $S_2$, v druhej súčiastka $S_3$. Súčiastky fungujú nezávisle s pravdepodobnosťami $${nm(p1)}$, $${nm(p2)}$ a $${nm(p3)}$. Aká je pravdepodobnosť, že systém funguje? ${R4}`,
        solution: `Prvá vetva funguje s pravdepodobnosťou $${nm(p1)}\\cdot ${nm(p2)}=${nm(p1 * p2)}$. Systém zlyhá, iba ak zlyhajú obe vetvy:
          $P=1-(1-${nm(p1 * p2)})(1-${nm(p3)})=1-${nm(1 - p1 * p2)}\\cdot ${nm(1 - p3)}\\approx ${dd(res, 4)}$.`,
        hint: 'Najprv vypočítaj spoľahlivosť sériovej vetvy, potom použi pravidlo pre paralelné zapojenie.'
      };
    }
    const a = rnd(2, 8), b = rnd(2, 8), indep = Math.random() < 0.5;
    let ab = a * b;
    if (!indep) {
      // posun prieniku tak, aby zostal prípustný: 0 < P(A∩B) < min(P(A), P(B)) a P(A∪B) ≤ 1
      const ok = (v) => v > 0 && v < 10 * Math.min(a, b) && 10 * a + 10 * b - v <= 100;
      const cand = [-6, -5, -4, -3, -2, 2, 3, 4, 5, 6].map((d) => a * b + d).filter(ok);
      ab = cand.length ? pick(cand) : a * b;
    }
    const dep = ab !== a * b;
    return {
      type: 'choice', options: ['nezávislé', 'závislé'], answer: dep ? 'závislé' : 'nezávislé',
      q: `Pre javy $A$, $B$ platí $P(A)=${nm(a / 10, 1)}$, $P(B)=${nm(b / 10, 1)}$ a $P(A\\cap B)=${nm(ab / 100, 2)}$. Sú javy $A$, $B$ nezávislé?`,
      solution: `$P(A)\\,P(B)=${nm(a / 10, 1)}\\cdot ${nm(b / 10, 1)}=${nm(a * b / 100, 2)}${dep ? `\\ne ${nm(ab / 100, 2)}=P(A\\cap B)$, javy sú <strong>závislé</strong>. Napríklad $P(A\\mid B)=${nm(ab / (10 * b), 4)}\\ne P(A)$.` : `=P(A\\cap B)$, javy sú <strong>nezávislé</strong>.`}`,
      hint: 'Porovnaj $P(A\\cap B)$ so súčinom $P(A)\\,P(B)$.'
    };
  });

  /* ======================= 3. DISKRÉTNA NÁHODNÁ VELIČINA ======================= */

  fig('v4-pf-df', {
    draw: () => {
      const pr = [0.1, 0.3, 0.4, 0.2];
      let s = '<svg viewBox="0 0 480 214" role="img" aria-label="Pravdepodobnostná a distribučná funkcia diskrétnej náhodnej veličiny">';
      // ľavý panel: pravdepodobnostná funkcia
      const yb = 176, H = 300;
      s += `<line class="f-axis" x1="20" y1="${yb}" x2="200" y2="${yb}"/>`;
      pr.forEach((q, k) => {
        const x = 50 + k * 40;
        s += `<line class="f-accent" x1="${x}" y1="${yb}" x2="${x}" y2="${n1(yb - q * H)}"/><circle class="f-dot" cx="${x}" cy="${n1(yb - q * H)}" r="5"/>
          <text class="f-small" x="${x}" y="${yb + 16}" text-anchor="middle">${k}</text>
          <text class="f-small" x="${x}" y="${n1(yb - q * H - 10)}" text-anchor="middle">${sk(q, 1)}</text>`;
      });
      s += `<text class="f-small" x="110" y="208" text-anchor="middle">P(X = x)</text>`;
      // pravý panel: distribučná funkcia
      const X = (x) => 270 + x * 45, Y = (F) => yb - F * 140, F = [0, 0.1, 0.4, 0.8, 1];
      s += `<line class="f-axis" x1="${X(-1)}" y1="${yb}" x2="${X(4.4)}" y2="${yb}"/><line class="f-axis" x1="${X(-0.6)}" y1="${yb + 4}" x2="${X(-0.6)}" y2="${Y(1.1)}"/>
        <line class="f-grid" x1="${X(-0.6)}" y1="${Y(1)}" x2="${X(4.4)}" y2="${Y(1)}"/><text class="f-small" x="${X(-0.6) - 4}" y="${Y(1) + 4}" text-anchor="end">1</text>`;
      for (let k = 0; k <= 4; k++) {
        const x0 = k === 0 ? -1 : k - 1, x1 = k === 4 ? 4.4 : k;
        s += `<line class="f-accent" x1="${n1(X(x0))}" y1="${n1(Y(F[k]))}" x2="${n1(X(x1))}" y2="${n1(Y(F[k]))}"/>`;
        if (k < 4) {
          s += `<circle class="f-tri" cx="${X(k)}" cy="${n1(Y(F[k]))}" r="4"/><circle class="f-dot" cx="${X(k)}" cy="${n1(Y(F[k + 1]))}" r="4.5"/>
            <text class="f-small" x="${X(k)}" y="${yb + 16}" text-anchor="middle">${k}</text>`;
        }
      }
      return s + `<text class="f-small" x="${X(1.7)}" y="208" text-anchor="middle">F(x) = P(X ≤ x)</text></svg>`;
    }
  });

  lesson({
    id: 'v4-diskretna', order: 30, title: 'Diskrétna náhodná veličina',
    summary: 'Pravdepodobnostná a distribučná funkcia, stredná hodnota, rozptyl a ich vlastnosti.',
    theory: [
      `<p><strong>Náhodná veličina</strong> je funkcia $X:\\Omega\\to\\mathbb{R}$, pre ktorú sú množiny $\\{X\\le x\\}$ javmi. Jej <strong>distribučná funkcia</strong>
       $F(x)=P(X\\le x)$ je neklesajúca, sprava spojitá, $\\lim_{x\\to-\\infty}F(x)=0$, $\\lim_{x\\to\\infty}F(x)=1$ a $P(a\\lt X\\le b)=F(b)-F(a)$.</p>
       <p>Veličina je <strong>diskrétna</strong>, ak nadobúda konečne alebo spočítateľne veľa hodnôt $x_1, x_2, \\dots$. Opisuje ju <strong>pravdepodobnostná funkcia</strong>
       $p_i=P(X=x_i)$, pričom $p_i\\ge 0$ a $\\sum_i p_i=1$. Distribučná funkcia je schodovitá: v bode $x_i$ má skok veľkosti $p_i$.</p>`,
      { fig: 'v4-pf-df', caption: 'Pravdepodobnostná funkcia (vľavo) a distribučná funkcia (vpravo) veličiny s hodnotami 0, 1, 2, 3 a pravdepodobnosťami 0,1; 0,3; 0,4; 0,2. Plný bod ukazuje hodnotu $F$ v bode skoku (sprava spojitá funkcia).' },
      `<p><strong>Stredná hodnota</strong> $E(X)=\\sum_i x_i p_i$ (ak rad konverguje absolútne), pre funkciu veličiny $E(g(X))=\\sum_i g(x_i)p_i$.
       <strong>Rozptyl</strong> $D(X)=E\\big[(X-E(X))^2\\big]=E(X^2)-\\big(E(X)\\big)^2$, <strong>smerodajná odchýlka</strong> $\\sigma=\\sqrt{D(X)}$.</p>
       <p>Pre konštanty $a$, $b$ platí $E(aX+b)=aE(X)+b$ a $D(aX+b)=a^2D(X)$ — posunutie nemení rozptyl, zmena mierky ho násobí štvorcom.
       Stredná hodnota súčtu je súčet stredných hodnôt vždy; rozptyl súčtu je súčet rozptylov pre nezávislé veličiny.</p>`
    ],
    examples: [
      { task: 'Veličina $X$ nadobúda hodnoty 0, 1, 2, 3 s pravdepodobnosťami $0{,}1$; $0{,}3$; $0{,}4$; $p$. Určte $p$, $E(X)$ a $D(X)$.',
        steps: ['Súčet pravdepodobností je 1: $p=1-0{,}1-0{,}3-0{,}4=0{,}2$.',
          '$E(X)=0\\cdot 0{,}1+1\\cdot 0{,}3+2\\cdot 0{,}4+3\\cdot 0{,}2=1{,}7$.',
          '$E(X^2)=0+0{,}3+4\\cdot 0{,}4+9\\cdot 0{,}2=3{,}7$, teda $D(X)=3{,}7-1{,}7^2=0{,}81$ a $\\sigma=0{,}9$.'] },
      { task: 'Pre veličinu z predchádzajúceho príkladu určte $F(1{,}5)$, $P(1\\lt X\\le 3)$ a $D(2X-3)$.',
        steps: ['$F(1{,}5)=P(X\\le 1{,}5)=P(X=0)+P(X=1)=0{,}4$.',
          '$P(1\\lt X\\le 3)=F(3)-F(1)=1-0{,}4=0{,}6$.',
          '$D(2X-3)=2^2D(X)=4\\cdot 0{,}81=3{,}24$.'] }
    ]
  });

  const pmfTable = (xs, ps) => `<table class="tbl tbl-auto"><tr><th>$x_i$</th>${xs.map((x) => `<td>$${x}$</td>`).join('')}</tr>
    <tr><th>$P(X=x_i)$</th>${ps.map((p) => `<td>$${p}$</td>`).join('')}</tr></table>`;

  gen('v4-diskretna', () => {
    const t = Math.random();
    if (t < 0.75) {
      const xs = pick([[-1, 0, 1, 2], [0, 1, 2, 3], [1, 2, 3, 4], [-2, -1, 0, 1, 2], [0, 2, 4, 6], [-1, 1, 3, 5], [0, 1, 2, 3, 4]]);
      const k = xs.length, P = parts(20, k).map((v) => v / 20), miss = rnd(0, k - 1);
      const shown = P.map((p, i) => (i === miss ? 'p' : nm(p, 2)));
      const E = sum(xs.map((x, i) => x * P[i])), E2 = sum(xs.map((x, i) => x * x * P[i])), D = E2 - E * E;
      const pStep = `Najprv $p=1-(${P.filter((_, i) => i !== miss).map((q) => nm(q, 2)).join('+')})=${nm(P[miss], 2)}$.`;
      const Etex = `$E(X)=${xs.map((x, i) => `${par(String(x))}\\cdot ${nm(P[i], 2)}`).join('+')}=${nm(E, 4)}$`;
      const head = `Náhodná veličina $X$ má pravdepodobnostnú funkciu danú tabuľkou:${pmfTable(xs, shown)}`;
      if (t < 0.3) {
        return {
          answer: round(E, 4), tol: 0.0001, signed: true,
          q: `${head}Vypočítaj strednú hodnotu $E(X)$.`,
          solution: `${pStep} ${Etex}.`,
          hint: 'Chýbajúcu pravdepodobnosť dopočítaj zo vzťahu $\\sum p_i=1$, potom $E(X)=\\sum x_i p_i$.'
        };
      }
      if (t < 0.55) {
        return {
          answer: round(D, 4), tol: 0.0001,
          q: `${head}Vypočítaj rozptyl $D(X)$. ${R4}`,
          solution: `${pStep} ${Etex}. $E(X^2)=${xs.map((x, i) => `${x * x}\\cdot ${nm(P[i], 2)}`).join('+')}=${nm(E2, 4)}$.
            $D(X)=E(X^2)-(E(X))^2=${nm(E2, 4)}-${par(nm(E, 4))}^2=${nm(D, 4)}$.`,
          hint: 'Použi $D(X)=E(X^2)-(E(X))^2$.'
        };
      }
      // distribučná funkcia
      if (Math.random() < 0.5) {
        const i = rnd(0, k - 2), x0 = xs[i] + (xs[i + 1] - xs[i]) / 2;
        const F = sum(P.slice(0, i + 1));
        return {
          answer: round(F, 4), tol: 0.0001,
          q: `${head}Urči hodnotu distribučnej funkcie $F(${nm(x0, 1)})$.`,
          solution: `${pStep} $F(${nm(x0, 1)})=P(X\\le ${nm(x0, 1)})=${P.slice(0, i + 1).map((q) => nm(q, 2)).join('+')}=${nm(F, 2)}$.`,
          hint: '$F(x)=P(X\\le x)$ je súčet pravdepodobností všetkých hodnôt $x_i\\le x$.'
        };
      }
      const i = rnd(0, k - 2), j = rnd(i + 1, k - 1), F = sum(P.slice(i + 1, j + 1));
      return {
        answer: round(F, 4), tol: 0.0001,
        q: `${head}Vypočítaj $P(${xs[i]}\\lt X\\le ${xs[j]})$.`,
        solution: `${pStep} $P(${xs[i]}\\lt X\\le ${xs[j]})=F(${xs[j]})-F(${xs[i]})=${j > i + 1 ? P.slice(i + 1, j + 1).map((q) => nm(q, 2)).join('+') + '=' : ''}${nm(F, 2)}$.`,
        hint: 'Sčítaj pravdepodobnosti hodnôt, ktoré sú väčšie ako dolná hranica a nanajvýš rovné hornej hranici.'
      };
    }
    if (t < 0.88) {
      const m = rnd(3, 6), S = m * (m + 1) / 2;
      if (Math.random() < 0.5) {
        return {
          answer: 1 / S, tol: 0.00006, show: `1/${S}`,
          q: `Náhodná veličina $X$ nadobúda hodnoty $${m <= 4 ? Array.from({ length: m }, (_, i) => i + 1).join(', ') : `1, 2, \\dots, ${m}`}$ a $P(X=k)=c\\,k$. Urči konštantu $c$ (zadaj ako zlomok alebo desatinné číslo na 4 desatinné miesta).`,
          solution: `$\\sum_{k=1}^{${m}}c\\,k=c\\cdot\\frac{${m}\\cdot ${m + 1}}{2}=${S}c=1$, teda $c=\\frac{1}{${S}}$.`,
          hint: 'Súčet všetkých pravdepodobností musí byť 1.'
        };
      }
      const E = (2 * m + 1) / 3;
      return {
        answer: E, tol: 0.0001, show: fTxt(2 * m + 1, 3),
        q: `Náhodná veličina $X$ nadobúda hodnoty $${m <= 4 ? Array.from({ length: m }, (_, i) => i + 1).join(', ') : `1, 2, \\dots, ${m}`}$ a $P(X=k)=c\\,k$. Vypočítaj $E(X)$ (zlomok alebo desatinné číslo na 4 desatinné miesta).`,
        solution: `Z podmienky $\\sum c\\,k=1$ je $c=\\frac{1}{${S}}$. $E(X)=\\sum_{k=1}^{${m}}k\\cdot\\frac{k}{${S}}=\\frac{1^2+\\dots+${m}^2}{${S}}=\\frac{${m * (m + 1) * (2 * m + 1) / 6}}{${S}}=${fTex(2 * m + 1, 3)}$.`,
        hint: 'Najprv urči $c$, potom $E(X)=\\sum k\\,P(X=k)$. Pomôže $1^2+\\dots+m^2=\\frac{m(m+1)(2m+1)}{6}$.'
      };
    }
    const E = rnd(-5, 10), D = pick([1, 2, 4, 2.5, 9, 0.5, 6.25]), a = pick([-3, -2, 2, 3, 4, -1, 5]), b = rnd(-6, 6);
    const askE = Math.random() < 0.35;
    const lin = `${a === -1 ? '-' : a}X${b === 0 ? '' : b > 0 ? '+' + b : b}`;
    return {
      answer: askE ? a * E + b : a * a * D, tol: 0.0001, signed: askE,
      q: `Náhodná veličina $X$ má $E(X)=${E}$ a $D(X)=${nm(D)}$. Vypočítaj ${askE ? `$E(${lin})$` : `$D(${lin})$`}.`,
      solution: askE ? `$E(${lin})=${a}\\cdot ${par(String(E))}${b === 0 ? '' : (b > 0 ? '+' : '') + b}=${a * E + b}$.`
        : `Posunutie rozptyl nemení: $D(${lin})=${par(String(a))}^2\\cdot ${nm(D)}=${nm(a * a * D)}$.`,
      hint: '$E(aX+b)=aE(X)+b$, $D(aX+b)=a^2D(X)$.'
    };
  });

  /* ======================= 4. DISKRÉTNE ROZDELENIA ======================= */

  fig('v4-poisson', {
    controls: [
      { id: 'lam', label: 'λ = np', min: 0.5, max: 10, step: 0.5, value: 3 },
      { id: 'n', label: 'Počet pokusov n', min: 10, max: 100, step: 5, value: 20 }
    ],
    draw: (v) => {
      const lam = v.lam, n = v.n, p = lam / n, K = Math.min(n, Math.max(8, Math.ceil(lam + 3.5 * Math.sqrt(lam) + 1)));
      const B = [], Po = [];
      for (let k = 0; k <= K; k++) {
        B.push(C(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k));
        Po.push(Math.exp(-lam) * Math.pow(lam, k) / fact(k));
      }
      const M = Math.max(...B, ...Po), x0 = 40, y0 = 204, W = 380, H = 176, bw = W / (K + 1), Y = (q) => y0 - q / M * H;
      let s = `<svg viewBox="0 0 440 236" role="img" aria-label="Binomické a Poissonovo rozdelenie">`;
      let dmax = 0;
      B.forEach((q, k) => {
        const x = x0 + k * bw;
        dmax = Math.max(dmax, Math.abs(q - Po[k]));
        s += `<rect class="f-fill f-outline" x="${n1(x + bw * 0.15)}" y="${n1(Y(q))}" width="${n1(bw * 0.7)}" height="${n1(y0 - Y(q))}"/>`;
        if (K <= 14 || k % 2 === 0) s += `<text class="f-small" x="${n1(x + bw / 2)}" y="${y0 + 16}" text-anchor="middle">${k}</text>`;
      });
      Po.forEach((q, k) => { s += `<circle class="f-dot f-dot-ok" cx="${n1(x0 + (k + 0.5) * bw)}" cy="${n1(Y(q))}" r="4.5"/>`; });
      s += `<line class="f-axis" x1="${x0}" y1="${y0}" x2="${x0 + W}" y2="${y0}"/>
        <text class="f-small" x="${x0 - 4}" y="${n1(Y(M) + 4)}" text-anchor="end">${sk(M, 2)}</text>
        <rect class="f-fill f-outline" x="${x0 + W - 150}" y="8" width="12" height="12"/><text class="f-small" x="${x0 + W - 132}" y="18">Bi(n; λ/n)</text>
        <circle class="f-dot f-dot-ok" cx="${x0 + W - 144}" cy="32" r="5"/><text class="f-small" x="${x0 + W - 132}" y="36">Po(λ)</text></svg>`;
      return {
        svg: s,
        readout: `p = λ/n = ${sk(p, 3)} · E = λ = ${sk(lam, 1)} · D(Bi) = ${sk(n * p * (1 - p), 2)}, D(Po) = ${sk(lam, 1)} · <span class="c-ok">najväčší rozdiel pravdepodobností ${sk(dmax, 4)}</span>`
      };
    }
  });

  lesson({
    id: 'v4-diskretne-rozdelenia', order: 40, title: 'Diskrétne rozdelenia',
    summary: 'Alternatívne, binomické, hypergeometrické, geometrické a Poissonovo rozdelenie, Poissonova aproximácia.',
    theory: [
      `<p><strong>Alternatívne rozdelenie</strong> $A(p)$: $P(X=1)=p$, $P(X=0)=1-p$; $E(X)=p$, $D(X)=p(1-p)$ — indikátor úspechu jedného pokusu.
       <strong>Binomické rozdelenie</strong> $Bi(n; p)$ je rozdelenie súčtu $n$ nezávislých veličín $A(p)$: $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$, $E(X)=np$, $D(X)=np(1-p)$.
       Ak vyberáme <em>bez vrátenia</em> $n$ prvkov z $N$, medzi ktorými je $M$ „označených“, počet označených má <strong>hypergeometrické rozdelenie</strong>
       $P(X=k)=\\binom{M}{k}\\binom{N-M}{n-k}\\big/\\binom{N}{n}$.</p>`,
      `<p><strong>Geometrické rozdelenie</strong>: $X$ je poradie prvého úspechu v nezávislých pokusoch s pravdepodobnosťou úspechu $p$.
       $$P(X=k)=(1-p)^{k-1}p,\\quad k=1, 2, \\dots;\\qquad E(X)=\\frac{1}{p},\\quad D(X)=\\frac{1-p}{p^2},\\quad P(X&gt;k)=(1-p)^k.$$
       Je <em>bez pamäte</em>: $P(X&gt;m+k\\mid X&gt;m)=P(X&gt;k)$. (Niekedy sa ako geometrické označuje rozdelenie počtu neúspechov pred prvým úspechom, $Y=X-1$.)</p>`,
      `<p><strong>Poissonovo rozdelenie</strong> $Po(\\lambda)$, $\\lambda&gt;0$: $P(X=k)=e^{-\\lambda}\\frac{\\lambda^k}{k!}$, $k=0, 1, 2, \\dots$; $E(X)=D(X)=\\lambda$.
       Opisuje počet zriedkavých nezávislých udalostí za pevný čas alebo na pevnej ploche; pri dvojnásobnom intervale sa $\\lambda$ zdvojnásobí.
       Súčet nezávislých $Po(\\lambda_1)$ a $Po(\\lambda_2)$ má rozdelenie $Po(\\lambda_1+\\lambda_2)$.</p>
       <p><strong>Poissonova veta:</strong> ak $n\\to\\infty$ a $p_n\\to 0$ tak, že $np_n\\to\\lambda$, potom $\\binom{n}{k}p_n^k(1-p_n)^{n-k}\\to e^{-\\lambda}\\frac{\\lambda^k}{k!}$.
       Prakticky: pre veľké $n$ a malé $p$ (napr. $n\\ge 30$, $p\\le 0{,}1$) je $Bi(n; p)\\approx Po(np)$.</p>`,
      { fig: 'v4-poisson', caption: 'Stĺpce: binomické rozdelenie $Bi(n; \\lambda/n)$, body: Poissonovo rozdelenie $Po(\\lambda)$. Pri pevnom $\\lambda$ a rastúcom $n$ sa rozdiely zmenšujú.' }
    ],
    examples: [
      { task: 'Do call centra prichádza v priemere 6 hovorov za hodinu (Poissonov model). Aká je pravdepodobnosť, že za 30 minút prídu najviac 2 hovory?',
        steps: ['Za pol hodiny je stredný počet hovorov $\\lambda=3$, $X\\sim Po(3)$.',
          '$P(X\\le 2)=e^{-3}\\left(1+3+\\frac{9}{2}\\right)=8{,}5\\,e^{-3}$.',
          '$P(X\\le 2)\\approx 8{,}5\\cdot 0{,}049787\\approx 0{,}4232$.'] },
      { task: 'Súčiastka je chybná s pravdepodobnosťou $0{,}004$. Odhadnite pravdepodobnosť, že v dodávke 500 súčiastok je najviac jedna chybná.',
        steps: ['$X\\sim Bi(500; 0{,}004)$, $n$ je veľké a $p$ malé, preto $X\\approx Po(\\lambda)$ s $\\lambda=np=2$.',
          '$P(X\\le 1)\\approx e^{-2}(1+2)=3e^{-2}\\approx 0{,}4060$.',
          'Presná binomická hodnota je približne $0{,}4055$ — aproximácia je veľmi dobrá.'] }
    ]
  });

  const DISTS = ['alternatívne', 'binomické', 'geometrické', 'hypergeometrické', 'Poissonovo'];
  const SITUATIONS = [
    ['počet šestiek v 10 hodoch hracou kockou', 'binomické'],
    ['počet hodov kockou, kým prvýkrát padne šestka (vrátane úspešného hodu)', 'geometrické'],
    ['počet telefonátov, ktoré prídu na linku pomoci za jednu hodinu', 'Poissonovo'],
    ['počet chybných kusov medzi 5 súčiastkami vybranými naraz zo zásielky 20 kusov, v ktorej sú 4 chybné', 'hypergeometrické'],
    ['výsledok jedného hodu mincou zakódovaný ako 1 (znak) alebo 0 (hlava)', 'alternatívne'],
    ['počet preklepov na jednej strane dlhého rukopisu', 'Poissonovo'],
    ['počet pacientov z 30, u ktorých liek zaberie, ak zaberá nezávisle s pravdepodobnosťou 0,7', 'binomické'],
    ['počet týždňov, kým prvýkrát vyhráme v lotérii s rovnakou šancou na výhru každý týždeň', 'geometrické'],
    ['počet žien v 4-člennej komisii vylosovanej z 12 mužov a 8 žien', 'hypergeometrické'],
    ['výsledok kontroly jedného výrobku: 1 = vyhovuje, 0 = nevyhovuje', 'alternatívne'],
    ['počet rozpadov jadier v rádioaktívnej vzorke za jednu sekundu', 'Poissonovo'],
    ['počet výhier v 20 nezávislých partiách, ak každú vyhráme s pravdepodobnosťou 0,3', 'binomické'],
    ['počet vytiahnutých es pri ťahaní 5 kariet z balíčka 32 kariet bez vrátenia', 'hypergeometrické'],
    ['počet pokusov o prihlásenie do preťaženého systému, kým sa prvýkrát podarí', 'geometrické']
  ];

  gen('v4-diskretne-rozdelenia', () => {
    const t = Math.random();
    const poisP = (lam, k) => Math.exp(-lam) * Math.pow(lam, k) / fact(k);
    if (t < 0.3) {
      const r = pick([2, 3, 4, 6]);
      // sloveso aj podstatné meno sa zhodujú s počtom: prichádzajú 4 autá / prichádza 6 áut
      const few = r <= 4;
      const ctx = pick([
        [`Na pohotovosť ${few ? 'prichádzajú' : 'prichádza'} v priemere`, `${few ? 'pacienti' : 'pacientov'} za hodinu`],
        [`Na kruhový objazd ${few ? 'prichádzajú' : 'prichádza'} v priemere`, `${few ? 'autá' : 'áut'} za minútu`],
        ['Server prijme v priemere', `${few ? 'chybové hlásenia' : 'chybových hlásení'} za hodinu`]
      ]);
      const tm = ctx[1].includes('minútu') ? pick([1, 2]) : pick([30, 60, 90]);
      const lam = ctx[1].includes('minútu') ? r * tm : r * tm / 60;
      const per = ctx[1].includes('minútu') ? `${tm} ${pl(tm, ['minútu', 'minúty', 'minút'])}` : `${tm} minút`;
      const kind = rnd(0, 2), k = rnd(0, Math.min(4, Math.round(lam) + 1));
      let res, what, sol;
      if (kind === 0) {
        res = poisP(lam, k); what = `presne ${k}`;
        sol = `$P(X=${k})=e^{-${nm(lam)}}\\frac{${nm(lam)}^{${k}}}{${k}!}\\approx ${dd(res, 4)}$.`;
      } else if (kind === 1) {
        const kk = Math.max(1, Math.min(k, 3));
        res = sum(Array.from({ length: kk + 1 }, (_, i) => poisP(lam, i))); what = `najviac ${kk}`;
        sol = `$P(X\\le ${kk})=e^{-${nm(lam)}}\\left(${Array.from({ length: kk + 1 }, (_, i) => `\\frac{${nm(lam)}^{${i}}}{${i}!}`).join('+')}\\right)\\approx ${dd(res, 4)}$.`;
      } else {
        res = 1 - poisP(lam, 0) - poisP(lam, 1); what = 'aspoň 2';
        sol = `Cez opačný jav: $P(X\\ge 2)=1-P(X=0)-P(X=1)=1-e^{-${nm(lam)}}(1+${nm(lam)})\\approx ${dd(res, 4)}$.`;
      }
      return {
        answer: round(res, 4), tol: 0.0002,
        q: `${ctx[0]} ${r} ${ctx[1]}; počet je modelovaný Poissonovým rozdelením. Aká je pravdepodobnosť, že za ${per} ich bude ${what}? ${R4}`,
        solution: `Stredný počet za ${per} je $\\lambda=${nm(lam)}$, teda $X\\sim Po(${nm(lam)})$. ${sol}`,
        hint: 'Najprv prepočítaj intenzitu na daný časový úsek: $\\lambda$ je úmerné dĺžke intervalu. Potom $P(X=k)=e^{-\\lambda}\\lambda^k/k!$.'
      };
    }
    if (t < 0.52) {
      const c = pick([
        { p: 1 / 6, tex: '\\frac{1}{6}', q: '\\frac{5}{6}', txt: 'Hádžeme hracou kockou, kým prvýkrát nepadne šestka. $X$ je počet hodov (vrátane posledného).' },
        { p: 0.2, tex: '0{,}2', q: '0{,}8', txt: 'Obchodný zástupca telefonuje zákazníkom; každý hovor nezávisle skončí predajom s pravdepodobnosťou $0{,}2$. $X$ je poradové číslo hovoru, pri ktorom prvýkrát predá.' },
        { p: 0.3, tex: '0{,}3', q: '0{,}7', txt: 'Strelec zasiahne terč s pravdepodobnosťou $0{,}3$, pokusy sú nezávislé. Strieľa, kým prvýkrát nezasiahne; $X$ je počet výstrelov.' },
        { p: 0.4, tex: '0{,}4', q: '0{,}6', txt: 'Prihlásenie do preťaženého systému sa podarí s pravdepodobnosťou $0{,}4$ nezávisle pri každom pokuse. $X$ je počet pokusov po prvé úspešné prihlásenie.' }
      ]);
      const kind = rnd(0, 2), k = rnd(2, 5);
      if (kind === 0) {
        const res = Math.pow(1 - c.p, k - 1) * c.p;
        return {
          answer: round(res, 4), tol: 0.0001,
          q: `${c.txt} Vypočítaj $P(X=${k})$. ${R4}`,
          solution: `$X$ má geometrické rozdelenie s $p=${c.tex}$: $P(X=${k})=(1-p)^{${k - 1}}p=\\left(${c.q}\\right)^{${k - 1}}\\cdot ${c.tex}\\approx ${dd(res, 4)}$.`,
          hint: 'Prvých $k-1$ pokusov musí byť neúspešných a $k$-tý úspešný.'
        };
      }
      if (kind === 1) {
        const res = Math.pow(1 - c.p, k);
        return {
          answer: round(res, 4), tol: 0.0001,
          q: `${c.txt} Aká je pravdepodobnosť, že bude treba viac ako ${k} ${pl(k, ['pokus', 'pokusy', 'pokusov'])}, teda $P(X&gt;${k})$? ${R4}`,
          solution: `$X&gt;${k}$ znamená, že prvých ${k} pokusov bolo neúspešných: $P(X&gt;${k})=\\left(${c.q}\\right)^{${k}}\\approx ${dd(res, 4)}$.`,
          hint: 'Jav $X&gt;k$ nastane práve vtedy, keď je prvých $k$ pokusov neúspešných.'
        };
      }
      const askD = Math.random() < 0.5, E = 1 / c.p, D = (1 - c.p) / (c.p * c.p);
      return {
        answer: round(askD ? D : E, 4), tol: 0.0001,
        q: `${c.txt} Vypočítaj ${askD ? 'rozptyl $D(X)$' : 'strednú hodnotu $E(X)$'}. ${askD ? R4 : ''}`,
        solution: askD ? `$D(X)=\\frac{1-p}{p^2}=\\frac{${c.q}}{\\left(${c.tex}\\right)^2}=${nm(D, 4)}$.` : `$E(X)=\\frac{1}{p}=\\frac{1}{${c.tex}}=${nm(E, 4)}$.`,
        hint: 'Pre geometrické rozdelenie je $E(X)=1/p$ a $D(X)=(1-p)/p^2$.'
      };
    }
    if (t < 0.78) {
      const lam = pick([1, 1.5, 2, 2.5, 3, 4]);
      const n = pick([200, 250, 400, 500, 1000].filter((m) => lam / m <= 0.01 || m === 200));
      const p = lam / n, kind = rnd(0, 2);
      let res, what, sol;
      if (kind === 0) {
        const k = rnd(0, 3); res = poisP(lam, k); what = `práve ${k} ${pl(k, ['chybná', 'chybné', 'chybných'])}`;
        sol = `$P(X=${k})\\approx e^{-${nm(lam)}}\\frac{${nm(lam)}^{${k}}}{${k}!}\\approx ${dd(res, 4)}$.`;
      } else if (kind === 1) {
        res = poisP(lam, 0) + poisP(lam, 1); what = 'najviac jedna chybná';
        sol = `$P(X\\le 1)\\approx e^{-${nm(lam)}}(1+${nm(lam)})\\approx ${dd(res, 4)}$.`;
      } else {
        res = 1 - poisP(lam, 0); what = 'aspoň jedna chybná';
        sol = `$P(X\\ge 1)=1-P(X=0)\\approx 1-e^{-${nm(lam)}}\\approx ${dd(res, 4)}$.`;
      }
      return {
        answer: round(res, 4), tol: 0.0002,
        q: `Súčiastka je chybná s pravdepodobnosťou $${nm(p, 5)}$ nezávisle od ostatných. Pomocou Poissonovej aproximácie odhadni pravdepodobnosť, že v balení ${n} súčiastok bude ${what}. ${R4}`,
        solution: `$X\\sim Bi(${n}; ${nm(p, 5)})$, $n$ je veľké a $p$ malé, preto $X\\approx Po(\\lambda)$ s $\\lambda=np=${nm(lam)}$. ${sol}`,
        hint: 'Nahraď $Bi(n; p)$ rozdelením $Po(np)$.'
      };
    }
    const [sit, ans] = pick(SITUATIONS);
    return {
      type: 'choice', options: DISTS, answer: ans,
      q: `Aké rozdelenie má náhodná veličina: <em>${sit}</em>?`,
      solution: {
        'alternatívne': 'Ide o jeden pokus s dvoma výsledkami zakódovanými 0 a 1 — <strong>alternatívne</strong> rozdelenie.',
        'binomické': 'Počet úspechov v pevnom počte nezávislých pokusov s rovnakou pravdepodobnosťou úspechu — <strong>binomické</strong> rozdelenie.',
        'geometrické': 'Čakáme na prvý úspech v nezávislých pokusoch, počet pokusov nie je vopred daný — <strong>geometrické</strong> rozdelenie.',
        'hypergeometrické': 'Výber bez vrátenia z konečného súboru s dvoma druhmi prvkov — <strong>hypergeometrické</strong> rozdelenie (pokusy nie sú nezávislé).',
        'Poissonovo': 'Počet zriedkavých nezávislých udalostí za pevný čas alebo na pevnej ploche — <strong>Poissonovo</strong> rozdelenie.'
      }[ans],
      hint: 'Rozhoduje: je počet pokusov pevný? sú pokusy nezávislé (s vrátením)? čakáme na prvý úspech? počítame udalosti v čase alebo priestore?'
    };
  });

  /* ======================= 5. SPOJITÁ NÁHODNÁ VELIČINA ======================= */

  fig('v4-hustota', {
    controls: [{ id: 'x', label: 'Horná hranica x', min: 0, max: 2, step: 0.05, value: 1.2 }],
    draw: (v) => {
      const p = plane(-0.3, 2.5, -0.12, 1.7, 420, 260, 24);
      const f = (x) => (x >= 0 && x <= 2 ? 3 * x * x / 8 : 0), med = 2 * Math.cbrt(0.5);
      const back = xAxis(p, 0.5, 2) + `<line class="f-axis" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(1.65))}"/>
        <text class="f-small" x="${n1(p.X(0) - 5)}" y="${n1(p.Y(1.5) + 4)}" text-anchor="end">1,5</text>
        <line class="f-thin" x1="${n1(p.X(0) - 4)}" y1="${n1(p.Y(1.5))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(1.5))}"/>`;
      const clipped = `<path class="f-fill f-outline" d="${areaPath(p, f, 0, v.x)}"/>
        <path class="f-accent" d="${curvePath(p, f, 0, 2)}"/>
        <line class="f-accent" x1="${n1(p.X(2))}" y1="${n1(p.Y(1.5))}" x2="${n1(p.X(2))}" y2="${n1(p.Y(0))}"/>
        <line class="f-dash" x1="${n1(p.X(med))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(med))}" y2="${n1(p.Y(f(med)))}"/>`;
      const front = `<text class="f-small" x="${n1(p.X(med) - 4)}" y="${n1(p.Y(f(med)) - 8)}" text-anchor="end">medián</text>
        <text class="f-math" x="${n1(p.X(1.15))}" y="${n1(p.Y(1.25))}">f(x) = 3x²/8</text>`;
      return {
        svg: svg(p, back, clipped, front, 'Hustota spojitej náhodnej veličiny a plocha pod ňou'),
        readout: `<span class="c-accent">F(${sk(v.x, 2)}) = P(X ≤ ${sk(v.x, 2)}) = x³/8 = ${sk(v.x ** 3 / 8, 4)}</span> · medián x₀,₅ = 2·∛0,5 ≈ ${sk(med, 4)}`
      };
    }
  });

  lesson({
    id: 'v4-spojita', order: 50, title: 'Spojitá náhodná veličina',
    summary: 'Hustota, distribučná funkcia, stredná hodnota, rozptyl a kvantily spojitej veličiny.',
    theory: [
      `<p>Náhodná veličina $X$ je <strong>spojitá</strong> (absolútne spojitá), ak existuje funkcia $f\\ge 0$ — <strong>hustota</strong> — taká, že
       $$F(x)=P(X\\le x)=\\int_{-\\infty}^{x}f(t)\\,\\mathrm{d}t\\quad\\text{pre všetky } x,\\qquad \\int_{-\\infty}^{\\infty}f(t)\\,\\mathrm{d}t=1.$$
       Potom $P(X=a)=0$ pre každé $a$, takže $P(a\\lt X\\lt b)=P(a\\le X\\le b)=\\int_a^b f(x)\\,\\mathrm{d}x=F(b)-F(a)$, a $F'(x)=f(x)$ v bodoch spojitosti $f$.
       Hodnota $f(x)$ nie je pravdepodobnosť (môže byť väčšia ako 1); pravdepodobnosť je plocha pod grafom hustoty.</p>`,
      `<p><strong>Stredná hodnota</strong> $E(X)=\\int_{-\\infty}^{\\infty}x f(x)\\,\\mathrm{d}x$ (ak integrál konverguje absolútne), $E(g(X))=\\int g(x)f(x)\\,\\mathrm{d}x$,
       <strong>rozptyl</strong> $D(X)=E(X^2)-(E(X))^2$. Pravidlá $E(aX+b)=aE(X)+b$, $D(aX+b)=a^2D(X)$ platia rovnako ako v diskrétnom prípade.
       Stredná hodnota ani rozptyl nemusia existovať: pre $f(x)=\\frac{2}{x^3}$, $x\\ge 1$, je $E(X)=2$, ale $E(X^2)=\\int_1^\\infty\\frac{2}{x}\\,\\mathrm{d}x=\\infty$.</p>`,
      `<p><strong>Kvantil</strong> rádu $p\\in(0, 1)$ je číslo $x_p$, pre ktoré $F(x_p)=p$ (pri rastúcej $F$; všeobecne $x_p=\\inf\\{x: F(x)\\ge p\\}$).
       $x_{0{,}5}$ je <strong>medián</strong>, $x_{0{,}25}$ a $x_{0{,}75}$ sú dolný a horný <strong>kvartil</strong>. Kvantil nájdeme riešením rovnice $F(x)=p$.</p>`,
      { fig: 'v4-hustota', caption: 'Hustota $f(x)=\\frac{3}{8}x^2$ na intervale $[0, 2]$. Vyfarbená plocha je $F(x)=\\frac{x^3}{8}$; čiarkovaná čiara je medián, ktorý delí plochu na dve polovice.' }
    ],
    examples: [
      { task: 'Hustota je $f(x)=cx^2$ pre $x\\in[0, 3]$ a $0$ inde. Určte $c$, $P(X&gt;2)$ a $E(X)$.',
        steps: ['$\\int_0^3 cx^2\\,\\mathrm{d}x=9c=1$, teda $c=\\frac{1}{9}$ a $F(x)=\\frac{x^3}{27}$ na $[0, 3]$.',
          '$P(X&gt;2)=1-F(2)=1-\\frac{8}{27}=\\frac{19}{27}\\approx 0{,}7037$.',
          '$E(X)=\\int_0^3 x\\cdot\\frac{x^2}{9}\\,\\mathrm{d}x=\\frac{1}{9}\\cdot\\frac{3^4}{4}=\\frac{9}{4}=2{,}25$.'] },
      { task: 'Hustota je $f(x)=\\frac{2}{x^3}$ pre $x\\ge 1$ a $0$ inde. Určte distribučnú funkciu, medián a kvantil $x_{0{,}9}$.',
        steps: ['Pre $x\\ge 1$: $F(x)=\\int_1^x\\frac{2}{t^3}\\,\\mathrm{d}t=1-\\frac{1}{x^2}$; pre $x\\lt 1$ je $F(x)=0$.',
          'Medián: $1-\\frac{1}{x^2}=\\frac{1}{2}$, teda $x_{0{,}5}=\\sqrt{2}\\approx 1{,}4142$.',
          '$1-\\frac{1}{x^2}=0{,}9$ dáva $x_{0{,}9}=\\sqrt{10}\\approx 3{,}1623$.'] }
    ]
  });

  gen('v4-spojita', () => {
    const t = Math.random();
    if (t < 0.85) {
      const k = pick([1, 2, 3]), a = pick([1, 2, 3, 4]), A = Math.pow(a, k + 1);
      const xk = k === 1 ? 'x' : `x^{${k}}`, fx = `f(x)=c\\,${xk}`, head = `Náhodná veličina $X$ má hustotu $${fx}$ pre $x\\in[0, ${a}]$ a $f(x)=0$ inde.`;
      const cTex = fTex(k + 1, A), Ftex = `F(x)=\\frac{x^{${k + 1}}}{${A}}`;
      const cStep = `Z podmienky $\\int_0^{${a}}c\\,${xk}\\,\\mathrm{d}x=c\\cdot\\frac{${a}^{${k + 1}}}{${k + 1}}=1$ je $c=${cTex}$ a pre $x\\in[0, ${a}]$ je $${Ftex}$.`;
      if (t < 0.2) {
        return {
          answer: (k + 1) / A, tol: 0.00006, show: fTxt(k + 1, A),
          q: `${head} Urči konštantu $c$ (zlomok alebo desatinné číslo na 4 desatinné miesta).`,
          solution: `$\\int_0^{${a}}c\\,${xk}\\,\\mathrm{d}x=c\\left[\\frac{x^{${k + 1}}}{${k + 1}}\\right]_0^{${a}}=c\\cdot\\frac{${A}}{${k + 1}}=1$, teda $c=${cTex}$.`,
          hint: 'Integrál hustoty cez celú reálnu os sa rovná 1.'
        };
      }
      if (t < 0.45) {
        const steps = a * 10, b1 = rnd(1, steps - 1) / 10;
        let b2 = rnd(1, steps - 1) / 10;
        const F = (x) => Math.pow(x / a, k + 1);
        const kind = rnd(0, 2);
        if (kind === 2) {
          while (Math.abs(b2 - b1) < 0.3) b2 = rnd(1, steps - 1) / 10;
          const lo = Math.min(b1, b2), hi = Math.max(b1, b2), res = F(hi) - F(lo);
          return {
            answer: round(res, 4), tol: 0.0001,
            q: `${head} Vypočítaj $P(${nm(lo)}\\lt X\\lt ${nm(hi)})$. ${R4}`,
            solution: `${cStep} $P(${nm(lo)}\\lt X\\lt ${nm(hi)})=F(${nm(hi)})-F(${nm(lo)})=\\frac{${nm(hi)}^{${k + 1}}-${nm(lo)}^{${k + 1}}}{${A}}\\approx ${dd(res, 4)}$.`,
            hint: 'Najprv urči $c$ a distribučnú funkciu $F$, potom $P(a\\lt X\\lt b)=F(b)-F(a)$.'
          };
        }
        const res = kind === 0 ? F(b1) : 1 - F(b1);
        return {
          answer: round(res, 4), tol: 0.0001,
          q: `${head} Vypočítaj $P(X${kind === 0 ? '\\lt' : '&gt;'}${nm(b1)})$. ${R4}`,
          solution: `${cStep} ${kind === 0 ? `$P(X\\lt ${nm(b1)})=F(${nm(b1)})=` : `$P(X&gt;${nm(b1)})=1-F(${nm(b1)})=1-`}\\frac{${nm(b1)}^{${k + 1}}}{${A}}\\approx ${dd(res, 4)}$.`,
          hint: 'Najprv urči $c$ a distribučnú funkciu $F(x)=\\int_0^x f(t)\\,\\mathrm{d}t$.'
        };
      }
      if (t < 0.65) {
        const E = (k + 1) * a / (k + 2), E2 = (k + 1) * a * a / (k + 3), D = E2 - E * E, askD = Math.random() < 0.5;
        return {
          answer: round(askD ? D : E, 4), tol: 0.0001,
          q: `${head} Vypočítaj ${askD ? 'rozptyl $D(X)$' : 'strednú hodnotu $E(X)$'}. ${R4}`,
          solution: `$c=${cTex}$. $E(X)=\\int_0^{${a}}x\\cdot c\\,${xk}\\,\\mathrm{d}x=c\\cdot\\frac{${a}^{${k + 2}}}{${k + 2}}=${fTex((k + 1) * a, k + 2)}${askD
            ? `$, $E(X^2)=c\\cdot\\frac{${a}^{${k + 3}}}{${k + 3}}=${fTex((k + 1) * a * a, k + 3)}$, $D(X)=E(X^2)-(E(X))^2=${fTex((k + 1) * a * a, k + 3)}-\\left(${fTex((k + 1) * a, k + 2)}\\right)^2\\approx ${dd(D, 4)}$.`
            : `${Number.isInteger(E) ? '' : `\\approx ${dd(E, 4)}`}$.`}`,
          hint: askD ? 'Vypočítaj $E(X)$ aj $E(X^2)=\\int x^2f(x)\\,\\mathrm{d}x$ a použi $D(X)=E(X^2)-(E(X))^2$.' : '$E(X)=\\int x\\,f(x)\\,\\mathrm{d}x$; najprv urči $c$.'
        };
      }
      const pp = pick([0.1, 0.25, 0.5, 0.75, 0.9]), xp = a * Math.pow(pp, 1 / (k + 1));
      const name = pp === 0.5 ? 'medián $x_{0{,}5}$' : pp === 0.25 ? 'dolný kvartil $x_{0{,}25}$' : pp === 0.75 ? 'horný kvartil $x_{0{,}75}$' : `kvantil $x_{${nm(pp)}}$`;
      return {
        answer: round(xp, 4), tol: 0.0002,
        q: `${head} Urči ${name}. ${R4}`,
        solution: `${cStep} Riešime $\\frac{x^{${k + 1}}}{${A}}=${nm(pp)}$: $x=${a}\\cdot\\sqrt[${k + 1}]{${nm(pp)}}\\approx ${dd(xp, 4)}$.`,
        hint: 'Kvantil $x_p$ je riešenie rovnice $F(x)=p$.'
      };
    }
    const al = pick([2, 3, 4]);
    const kind = rnd(0, 1);
    if (kind === 0) {
      const tt = pick([1.5, 2, 3, 4]), res = Math.pow(tt, -al);
      return {
        answer: round(res, 4), tol: 0.0001,
        q: `Náhodná veličina $X$ (Paretovo rozdelenie) má hustotu $f(x)=\\frac{${al}}{x^{${al + 1}}}$ pre $x\\ge 1$ a $0$ inde. Vypočítaj $P(X&gt;${nm(tt)})$. ${R4}`,
        solution: `$P(X&gt;${nm(tt)})=\\int_{${nm(tt)}}^{\\infty}\\frac{${al}}{x^{${al + 1}}}\\,\\mathrm{d}x=\\left[-x^{-${al}}\\right]_{${nm(tt)}}^{\\infty}=${nm(tt)}^{-${al}}\\approx ${dd(res, 4)}$.`,
        hint: 'Integruj hustotu od danej hodnoty do nekonečna (nevlastný integrál).'
      };
    }
    const med = Math.pow(2, 1 / al);
    return {
      answer: round(med, 4), tol: 0.0002,
      q: `Náhodná veličina $X$ má hustotu $f(x)=\\frac{${al}}{x^{${al + 1}}}$ pre $x\\ge 1$ a $0$ inde. Urči medián. ${R4}`,
      solution: `$F(x)=1-x^{-${al}}$ pre $x\\ge 1$. Z $1-x^{-${al}}=\\frac{1}{2}$ je $x^{${al}}=2$ a medián $x_{0{,}5}=\\sqrt[${al}]{2}\\approx ${dd(med, 4)}$.`,
      hint: 'Urči distribučnú funkciu a vyrieš $F(x)=0{,}5$.'
    };
  });

  /* ======================= 6. ROVNOMERNÉ A EXPONENCIÁLNE ROZDELENIE ======================= */

  fig('v4-exp', {
    controls: [
      { id: 'lam', label: 'Intenzita λ', min: 0.2, max: 3, step: 0.1, value: 0.8 },
      { id: 't', label: 'Čas t', min: 0, max: 5, step: 0.1, value: 1.5 }
    ],
    draw: (v) => {
      const lam = v.lam, p = plane(-0.3, 6, -0.25, 3.1, 420, 260, 24), f = (x) => (x < 0 ? 0 : lam * Math.exp(-lam * x));
      let back = xAxis(p, 1, 1) + `<line class="f-axis" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(3))}"/>`;
      for (let y = 1; y <= 3; y++) back += `<text class="f-small" x="${n1(p.X(0) - 5)}" y="${n1(p.Y(y) + 4)}" text-anchor="end">${y}</text><line class="f-thin" x1="${n1(p.X(0) - 4)}" y1="${n1(p.Y(y))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(y))}"/>`;
      const clipped = `<path class="f-fill3 f-outline3" d="${areaPath(p, f, v.t, 6.2)}"/><path class="f-accent" d="${curvePath(p, f, 0, 6)}"/>
        <line class="f-dash" x1="${n1(p.X(1 / lam))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(1 / lam))}" y2="${n1(p.Y(f(1 / lam)))}"/>`;
      const front = `<text class="f-small" x="${n1(p.X(1 / lam) + 4)}" y="${n1(p.Y(f(1 / lam)) - 6)}">E(X) = 1/λ</text>`;
      return {
        svg: svg(p, back, clipped, front, 'Hustota exponenciálneho rozdelenia'),
        readout: `<span class="c-accent">P(X &gt; ${sk(v.t, 1)}) = e^(−λt) = ${sk(Math.exp(-lam * v.t), 4)}</span> · E(X) = ${sk(1 / lam, 3)} · medián = ln 2/λ = ${sk(Math.LN2 / lam, 3)}`
      };
    }
  });

  lesson({
    id: 'v4-rovnomerne-exponencialne', order: 60, title: 'Rovnomerné a exponenciálne rozdelenie',
    summary: 'Rovnomerné rozdelenie na intervale, exponenciálne rozdelenie, vlastnosť bez pamäte a súvis s Poissonovým procesom.',
    theory: [
      `<p><strong>Rovnomerné rozdelenie</strong> $R(a, b)$ má na intervale $(a, b)$ konštantnú hustotu $f(x)=\\frac{1}{b-a}$ (inde 0), $F(x)=\\frac{x-a}{b-a}$ pre $x\\in[a, b]$ a
       $$E(X)=\\frac{a+b}{2},\\qquad D(X)=\\frac{(b-a)^2}{12}.$$
       Pravdepodobnosť podintervalu je úmerná jeho dĺžke: $P(c\\lt X\\lt d)=\\frac{d-c}{b-a}$ pre $a\\le c\\lt d\\le b$.</p>`,
      `<p><strong>Exponenciálne rozdelenie</strong> $Exp(\\lambda)$, $\\lambda&gt;0$: $f(x)=\\lambda e^{-\\lambda x}$ pre $x\\ge 0$, $F(x)=1-e^{-\\lambda x}$, $P(X&gt;x)=e^{-\\lambda x}$,
       $$E(X)=\\frac{1}{\\lambda},\\qquad D(X)=\\frac{1}{\\lambda^2},\\qquad x_p=-\\frac{\\ln(1-p)}{\\lambda},\\quad x_{0{,}5}=\\frac{\\ln 2}{\\lambda}.$$
       Modeluje dobu do poruchy či čakania; $\\lambda$ je intenzita (počet udalostí za jednotku času), $\\frac{1}{\\lambda}$ stredná doba.</p>`,
      `<p><strong>Vlastnosť bez pamäte:</strong> $P(X&gt;s+t\\mid X&gt;s)=\\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}}=e^{-\\lambda t}=P(X&gt;t)$. Zariadenie, ktoré už fungovalo $s$ hodín, „nezostarlo“.
       Exponenciálne rozdelenie je jediné spojité rozdelenie s touto vlastnosťou (v diskrétnom svete ju má geometrické).
       <strong>Súvis s Poissonovým procesom:</strong> ak udalosti prichádzajú s intenzitou $\\lambda$ a počet udalostí za čas $t$ má rozdelenie $Po(\\lambda t)$,
       potom čas do ďalšej udalosti má rozdelenie $Exp(\\lambda)$, lebo $P(T&gt;t)=P(\\text{za čas } t \\text{ žiadna udalosť})=e^{-\\lambda t}$.</p>`,
      { fig: 'v4-exp', caption: 'Hustota $Exp(\\lambda)$. Vyfarbená plocha je $P(X&gt;t)=e^{-\\lambda t}$, čiarkovaná čiara označuje strednú hodnotu $1/\\lambda$. Väčšia intenzita znamená kratšie čakanie.' }
    ],
    examples: [
      { task: 'Električka chodí presne každých 12 minút, cestujúci príde na zastávku v náhodnom čase. Čakacia doba $X\\sim R(0, 12)$. Určte $P(X&gt;9)$, $E(X)$ a $\\sigma$.',
        steps: ['$P(X&gt;9)=\\frac{12-9}{12}=0{,}25$.',
          '$E(X)=\\frac{0+12}{2}=6$ minút.',
          '$D(X)=\\frac{12^2}{12}=12$, $\\sigma=\\sqrt{12}\\approx 3{,}46$ minúty.'] },
      { task: 'Životnosť žiarovky má exponenciálne rozdelenie so strednou hodnotou 2000 hodín. Aká je pravdepodobnosť, že vydrží viac ako 3000 hodín? Ak už svieti 1000 hodín, aká je pravdepodobnosť, že vydrží ešte aspoň 3000 hodín?',
        steps: ['$\\lambda=\\frac{1}{2000}$, $P(X&gt;3000)=e^{-3000/2000}=e^{-1{,}5}\\approx 0{,}2231$.',
          'Bez pamäte: $P(X&gt;4000\\mid X&gt;1000)=P(X&gt;3000)\\approx 0{,}2231$.',
          'Doterajšia prevádzka na ďalšiu životnosť nemá vplyv — model je vhodný pre náhodné poruchy, nie pre opotrebenie.'] }
    ]
  });

  gen('v4-rovnomerne-exponencialne', () => {
    const t = Math.random();
    if (t < 0.25) {
      const a = rnd(0, 10), L = pick([4, 5, 6, 8, 10, 12, 20]), b = a + L;
      const kind = rnd(0, 2), RT = `R(${a}, ${b})`;
      if (kind === 0) {
        let c = rnd(a, b - 1), d = rnd(c + 1, b);
        if (c === a && d === b) d = b - 1;
        return {
          answer: round((d - c) / L, 4), tol: 0.0001, show: fTxt(d - c, L),
          q: `Náhodná veličina $X$ má rovnomerné rozdelenie $${RT}$. Vypočítaj $P(${c}\\lt X\\lt ${d})$. Výsledok zadaj ako zlomok alebo desatinné číslo na 4 desatinné miesta.`,
          solution: `Pravdepodobnosť je úmerná dĺžke podintervalu: $P(${c}\\lt X\\lt ${d})=\\frac{${d}-${c}}{${b}-${a}}=${fTex(d - c, L)}$.`,
          hint: 'Pri rovnomernom rozdelení je pravdepodobnosť podiel dĺžok intervalov.'
        };
      }
      if (kind === 1) {
        return {
          answer: L * L / 12, tol: 0.0001, show: fTxt(L * L, 12),
          q: `Náhodná veličina $X$ má rovnomerné rozdelenie $${RT}$. Vypočítaj rozptyl $D(X)$ (zlomok alebo desatinné číslo na 4 desatinné miesta).`,
          solution: `$D(X)=\\frac{(b-a)^2}{12}=\\frac{${L}^2}{12}=${fTex(L * L, 12)}$.`,
          hint: 'Pre $R(a, b)$ je $D(X)=(b-a)^2/12$.'
        };
      }
      return {
        answer: round(L / Math.sqrt(12), 4), tol: 0.0002,
        q: `Náhodná veličina $X$ má rovnomerné rozdelenie $${RT}$. Vypočítaj smerodajnú odchýlku $\\sigma$. ${R4}`,
        solution: `$D(X)=\\frac{${L}^2}{12}=${fTex(L * L, 12)}$, $\\sigma=\\frac{${L}}{\\sqrt{12}}\\approx ${dd(L / Math.sqrt(12), 4)}$.`,
        hint: 'Najprv rozptyl $(b-a)^2/12$, potom odmocnina.'
      };
    }
    const m = pick([20, 40, 50, 100, 200, 500]), unit = 'hodín';
    const ctx = pick([
      `Doba bezporuchovej prevádzky zariadenia (v hodinách) má exponenciálne rozdelenie so strednou hodnotou ${m} hodín.`,
      `Životnosť súčiastky (v hodinách) má exponenciálne rozdelenie so strednou hodnotou ${m} hodín.`
    ]);
    if (t < 0.5) {
      if (Math.random() < 0.3) {
        const lam = pick([0.5, 2, 3, 4]), tt = pick([0.5, 1, 1.5, 2]), res = Math.exp(-lam * tt), mins = tt === 1 ? 'minútu' : 'minúty';
        return {
          answer: round(res, 4), tol: 0.0001,
          q: `Zákazníci prichádzajú k pokladni ako Poissonov proces s intenzitou $\\lambda=${nm(lam)}$ za minútu. Aká je pravdepodobnosť, že na ďalšieho zákazníka budeme čakať dlhšie ako ${nt(tt, 1)} ${mins}? ${R4}`,
          solution: `Čas do ďalšieho príchodu $T\\sim Exp(${nm(lam)})$, teda $P(T&gt;${nm(tt)})=e^{-${nm(lam)}\\cdot ${nm(tt)}}=e^{-${nm(lam * tt)}}\\approx ${dd(res, 4)}$.
            (To isté dostaneme z $Po(${nm(lam * tt)})$: pravdepodobnosť, že za ${nt(tt, 1)} ${mins} nepríde nikto.)`,
          hint: 'Čakacie doby v Poissonovom procese s intenzitou $\\lambda$ majú rozdelenie $Exp(\\lambda)$.'
        };
      }
      const kind = rnd(0, 2), t1 = Math.round(m * pick([0.25, 0.5, 1, 1.5, 2])), t2 = t1 + Math.round(m * pick([0.5, 1]));
      const res = kind === 0 ? Math.exp(-t1 / m) : kind === 1 ? 1 - Math.exp(-t1 / m) : Math.exp(-t1 / m) - Math.exp(-t2 / m);
      const what = kind === 0 ? `vydrží dlhšie ako ${t1} ${unit}` : kind === 1 ? `sa pokazí do ${t1} ${unit}` : `sa pokazí medzi ${t1}. a ${t2}. hodinou prevádzky`;
      return {
        answer: round(res, 4), tol: 0.0001,
        q: `${ctx} Aká je pravdepodobnosť, že ${what}? ${R4}`,
        solution: `$\\lambda=\\frac{1}{${m}}$. ${kind === 0 ? `$P(X&gt;${t1})=e^{-${t1}/${m}}` : kind === 1 ? `$P(X\\le ${t1})=1-e^{-${t1}/${m}}` : `$P(${t1}\\lt X\\lt ${t2})=F(${t2})-F(${t1})=e^{-${t1}/${m}}-e^{-${t2}/${m}}`}\\approx ${dd(res, 4)}$.`,
        hint: 'Pre $Exp(\\lambda)$ je $P(X&gt;x)=e^{-\\lambda x}$ a $\\lambda$ je prevrátená hodnota strednej hodnoty.'
      };
    }
    if (t < 0.75) {
      const s = Math.round(m * pick([0.5, 1, 2, 3])), tt = Math.round(m * pick([0.25, 0.5, 1, 1.5])), res = Math.exp(-tt / m);
      return {
        answer: round(res, 4), tol: 0.0001,
        q: `${ctx} Zariadenie už funguje ${s} ${unit} bez poruchy. Aká je pravdepodobnosť, že vydrží bez poruchy ešte aspoň ďalších ${tt} ${unit}? ${R4}`,
        solution: `Exponenciálne rozdelenie je bez pamäte: $P(X&gt;${s}+${tt}\\mid X&gt;${s})=P(X&gt;${tt})=e^{-${tt}/${m}}\\approx ${dd(res, 4)}$.
          Doterajších ${s} ${unit} na výsledok nemá vplyv.`,
        hint: 'Použi vlastnosť bez pamäte, alebo priamo $\\frac{P(X&gt;s+t)}{P(X&gt;s)}$.'
      };
    }
    const pp = pick([0.5, 0.9, 0.95, 0.25, 0.1]), xp = -m * Math.log(1 - pp);
    return {
      answer: round(xp, 2), tol: 0.01,
      q: `${ctx} Urči čas, do ktorého sa pokazí ${nt(pp * 100, 0)} % zariadení (kvantil $x_{${nm(pp)}}$). ${R2}`,
      solution: `Riešime $F(x)=1-e^{-x/${m}}=${nm(pp)}$: $x=-${m}\\ln(1-${nm(pp)})=-${m}\\ln ${nm(1 - pp)}\\approx ${dd(xp, 2)}$ ${unit}.`,
      hint: 'Kvantil rádu $p$ je riešenie $F(x)=p$, pre exponenciálne rozdelenie $x_p=-\\frac{\\ln(1-p)}{\\lambda}$.'
    };
  });

  /* ======================= 7. NORMÁLNE ROZDELENIE ======================= */

  fig('v4-normal', {
    controls: [
      { id: 'mu', label: 'Stredná hodnota μ', min: -3, max: 3, step: 0.5, value: 0 },
      { id: 's', label: 'Smerodajná odchýlka σ', min: 0.5, max: 3, step: 0.1, value: 1 },
      { id: 'a', label: 'Dolná hranica a', min: -6, max: 6, step: 0.5, value: -1 },
      { id: 'b', label: 'Horná hranica b', min: -6, max: 6, step: 0.5, value: 1 }
    ],
    draw: (v) => {
      const p = plane(-7, 7, -0.08, 0.85, 440, 260, 24), f = (x) => npdf(x, v.mu, v.s);
      const lo = Math.min(v.a, v.b), hi = Math.max(v.a, v.b);
      const back = xAxis(p, 1, 2);
      const clipped = `<path class="f-fill f-outline" d="${areaPath(p, f, lo, hi)}"/><path class="f-accent" d="${curvePath(p, f, -7, 7)}"/>
        <line class="f-dash" x1="${n1(p.X(v.mu))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(v.mu))}" y2="${n1(p.Y(f(v.mu)))}"/>`;
      const za = (lo - v.mu) / v.s, zb = (hi - v.mu) / v.s, P = Phi(zb) - Phi(za);
      return {
        svg: svg(p, back, clipped, '', 'Hustota normálneho rozdelenia a pravdepodobnosť intervalu'),
        readout: `z₁ = (a − μ)/σ = ${sk(za, 2)} · z₂ = (b − μ)/σ = ${sk(zb, 2)} · <span class="c-accent">P(a &lt; X &lt; b) = Φ(z₂) − Φ(z₁) = ${sk(P, 4)}</span>`
      };
    }
  });

  lesson({
    id: 'v4-normalne', order: 70, title: 'Normálne rozdelenie',
    summary: 'Hustota N(μ, σ²), štandardizácia, distribučná funkcia Φ, kvantily a lineárne kombinácie normálnych veličín.',
    theory: [
      `<p><strong>Normálne (Gaussovo) rozdelenie</strong> $N(\\mu, \\sigma^2)$ má hustotu
       $$f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}},\\quad x\\in\\mathbb{R};\\qquad E(X)=\\mu,\\quad D(X)=\\sigma^2.$$
       Graf je zvonovitá krivka súmerná podľa $x=\\mu$ s inflexnými bodmi $\\mu\\pm\\sigma$. Pre číselné parametre píšeme napr. $N(100;\\,225)$, teda $\\sigma=15$.</p>`,
      `<p><strong>Štandardizácia:</strong> ak $X\\sim N(\\mu, \\sigma^2)$, potom $Z=\\frac{X-\\mu}{\\sigma}\\sim N(0, 1)$. Distribučnú funkciu $N(0, 1)$ označujeme $\\Phi(z)$; nedá sa vyjadriť elementárne, používame tabuľky.
       $$P(a\\lt X\\lt b)=\\Phi\\!\\left(\\frac{b-\\mu}{\\sigma}\\right)-\\Phi\\!\\left(\\frac{a-\\mu}{\\sigma}\\right),\\qquad \\Phi(-z)=1-\\Phi(z).$$
       Pravidlo $3\\sigma$: $P(|X-\\mu|\\lt k\\sigma)=2\\Phi(k)-1$, čo je $0{,}6827$; $0{,}9545$; $0{,}9973$ pre $k=1, 2, 3$.</p>`,
      `<p><strong>Kvantily:</strong> $z_p$ je riešenie $\\Phi(z_p)=p$, platí $z_{1-p}=-z_p$ a pre $X\\sim N(\\mu, \\sigma^2)$ je $x_p=\\mu+\\sigma z_p$. Najpoužívanejšie hodnoty:</p>
       <table class="tbl tbl-auto"><tr><th>$p$</th><td>$0{,}9$</td><td>$0{,}95$</td><td>$0{,}975$</td><td>$0{,}99$</td><td>$0{,}995$</td></tr>
       <tr><th>$z_p$</th><td>$1{,}2816$</td><td>$1{,}6449$</td><td>$1{,}9600$</td><td>$2{,}3263$</td><td>$2{,}5758$</td></tr></table>
       <p><strong>Lineárne kombinácie:</strong> $aX+b\\sim N(a\\mu+b, a^2\\sigma^2)$. Ak sú $X\\sim N(\\mu_1, \\sigma_1^2)$ a $Y\\sim N(\\mu_2, \\sigma_2^2)$ nezávislé,
       potom $X\\pm Y\\sim N(\\mu_1\\pm\\mu_2, \\sigma_1^2+\\sigma_2^2)$ — rozptyly sa sčítajú aj pri rozdiele.</p>`,
      { fig: 'v4-normal', caption: 'Hustota $N(\\mu, \\sigma^2)$ a vyfarbená pravdepodobnosť $P(a\\lt X\\lt b)$. Zmena $\\mu$ krivku posúva, väčšie $\\sigma$ ju rozširuje a znižuje — plocha pod ňou je stále 1.' }
    ],
    examples: [
      { task: 'IQ má rozdelenie $N(100;\\,225)$. Aký podiel populácie má IQ nad 130 a aký medzi 85 a 115? Použite $\\Phi(1)=0{,}8413$ a $\\Phi(2)=0{,}9772$.',
        steps: ['$\\sigma=15$. $P(X&gt;130)=1-\\Phi\\left(\\frac{130-100}{15}\\right)=1-\\Phi(2)=0{,}0228$, teda asi 2,3 %.',
          '$P(85\\lt X\\lt 115)=\\Phi(1)-\\Phi(-1)=2\\Phi(1)-1=0{,}6826$.'] },
      { task: 'Hmotnosť balíčka má rozdelenie $N(500;\\,16)$ (v gramoch). Akú hmotnosť nedosiahne iba 5 % balíčkov?',
        steps: ['Hľadáme $x_{0{,}05}=\\mu+\\sigma z_{0{,}05}=\\mu-\\sigma z_{0{,}95}$.',
          '$\\sigma=4$, $x_{0{,}05}=500-4\\cdot 1{,}6449\\approx 493{,}42$ g.'] }
    ]
  });

  const NCTX = [
    { mu: 250, s: [4, 5, 8], txt: 'Hmotnosť balíčka kávy (v gramoch)' },
    { mu: 70, s: [8, 10, 12], txt: 'Počet bodov v prijímacom teste' },
    { mu: 40, s: [4, 6, 8], txt: 'Doba dochádzania do práce (v minútach)' },
    { mu: 178, s: [6, 8], txt: 'Výška dospelého muža (v cm)' },
    { mu: 1000, s: [10, 20, 40], txt: 'Životnosť batérie (v nabíjacích cykloch)' }
  ];
  const ZS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5];

  gen('v4-normalne', () => {
    const t = Math.random();
    if (t < 0.35) {
      const c = pick(NCTX), s = pick(c.s), mu = c.mu, X = (z) => mu + z * s;
      const head = `${c.txt} má rozdelenie $N(${mu};\\,${s * s})$.`;
      const kind = rnd(0, 2);
      if (kind < 2) {
        const z = pick(ZS) * pick([1, -1]), x = X(z), up = kind === 1;
        const Pz = PhiT(Math.abs(z)), F = z >= 0 ? Pz : 1 - Pz, res = up ? 1 - F : F;
        return {
          answer: round(res, 4), tol: 0.0002,
          q: `${head} Vypočítaj $P(X${up ? '&gt;' : '\\lt'}${ths(nm(x, 2))})$. Použi ${phiList([z])}. ${R4}`,
          solution: `$z=\\frac{${ths(nm(x, 2))}-${ths(mu)}}{${s}}=${nm(z, 2)}$. ${z >= 0 ? `$\\Phi(${nm(z, 2)})=${dd(Pz, 4)}$` : `$\\Phi(${nm(z, 2)})=1-\\Phi(${nm(-z, 2)})=${dd(1 - Pz, 4)}$`}.
            ${up ? `$P(X&gt;${ths(nm(x, 2))})=1-\\Phi(${nm(z, 2)})=${dd(res, 4)}$.` : `$P(X\\lt ${ths(nm(x, 2))})=\\Phi(${nm(z, 2)})=${dd(res, 4)}$.`}`,
          hint: 'Štandardizuj: $z=\\frac{x-\\mu}{\\sigma}$. Pre záporné $z$ použi $\\Phi(-z)=1-\\Phi(z)$.'
        };
      }
      let z1 = pick(ZS) * pick([1, -1]), z2 = pick(ZS) * pick([1, -1]);
      while (z1 === z2) z2 = pick(ZS) * pick([1, -1]);
      const za = Math.min(z1, z2), zb = Math.max(z1, z2), F = (z) => (z >= 0 ? PhiT(z) : 1 - PhiT(-z));
      const res = F(zb) - F(za);
      return {
        answer: round(res, 4), tol: 0.0002,
        q: `${head} Vypočítaj $P(${ths(nm(X(za), 2))}\\lt X\\lt ${ths(nm(X(zb), 2))})$. Použi ${phiList([za, zb])}. ${R4}`,
        solution: `Štandardizované hranice: $z_1=${nm(za, 2)}$, $z_2=${nm(zb, 2)}$.
          $P=\\Phi(${nm(zb, 2)})-\\Phi(${nm(za, 2)})=${dd(F(zb), 4)}-${dd(F(za), 4)}=${dd(res, 4)}$.`,
        hint: 'Obe hranice štandardizuj a odčítaj hodnoty $\\Phi$. Pre záporné $z$ je $\\Phi(z)=1-\\Phi(-z)$.'
      };
    }
    if (t < 0.6) {
      const c = pick(NCTX), s = pick(c.s), mu = c.mu, pp = pick([0.9, 0.95, 0.975, 0.99]), z = ZQ[pp];
      const kind = rnd(0, 2);
      const head = `${c.txt} má rozdelenie $N(${mu};\\,${s * s})$.`;
      const zq = `Použi kvantil $z_{${nm(pp, 3)}}=${dd(z, 4)}$.`;
      if (kind === 0) {
        const x = mu + z * s;
        return {
          answer: round(x, 2), tol: 0.011,
          q: `${head} Urči hodnotu $x$, pre ktorú $P(X\\lt x)=${nm(pp, 3)}$. ${zq} ${R2}`,
          solution: `$x=x_{${nm(pp, 3)}}=\\mu+\\sigma z_{${nm(pp, 3)}}=${mu}+${s}\\cdot ${dd(z, 4)}\\approx ${dd(x, 2)}$.`,
          hint: 'Kvantil normálneho rozdelenia: $x_p=\\mu+\\sigma z_p$.'
        };
      }
      if (kind === 1) {
        const x = mu - z * s;
        return {
          answer: round(x, 2), tol: 0.011,
          q: `${head} Urči hodnotu $x$, pre ktorú $P(X&gt;x)=${nm(pp, 3)}$. ${zq} ${R2}`,
          solution: `$P(X&gt;x)=${nm(pp, 3)}$ znamená $P(X\\le x)=${nm(1 - pp, 3)}$, teda $x=\\mu+\\sigma z_{${nm(1 - pp, 3)}}=\\mu-\\sigma z_{${nm(pp, 3)}}=${mu}-${s}\\cdot ${dd(z, 4)}\\approx ${dd(x, 2)}$.`,
          hint: 'Prepíš na $P(X\\le x)=1-p$ a použi $z_{1-p}=-z_p$.'
        };
      }
      const pp2 = pick([0.95, 0.99, 0.9]), alpha = 1 - pp2, q2 = round(1 - alpha / 2, 3), z2 = ZQ[q2];
      const d = z2 * s;
      return {
        answer: round(d, 2), tol: 0.011,
        q: `${head} Urči $d$ tak, aby $P(|X-${mu}|\\lt d)=${nm(pp2, 2)}$ (interval súmerný okolo strednej hodnoty). Použi $z_{${nm(q2, 3)}}=${dd(z2, 4)}$. ${R2}`,
        solution: `$P(|X-\\mu|\\lt d)=2\\Phi\\left(\\frac{d}{\\sigma}\\right)-1=${nm(pp2, 2)}$, teda $\\Phi\\left(\\frac{d}{\\sigma}\\right)=${nm(q2, 3)}$ a $d=\\sigma z_{${nm(q2, 3)}}=${s}\\cdot ${dd(z2, 4)}\\approx ${dd(d, 2)}$.`,
        hint: 'Pre súmerný interval platí $P(|X-\\mu|\\lt d)=2\\Phi(d/\\sigma)-1$.'
      };
    }
    if (t < 0.8) {
      const [a, b, s] = pick([[3, 4, 5], [6, 8, 10]]);
      const step = s === 5 ? 0.2 : 0.1, z = rnd(2, s === 5 ? 12 : 25) * step * pick([1, -1]);
      if (Math.random() < 0.5) {
        const m1 = pick([20, 25, 30, 40]), m2 = pick([10, 15, 20, 35]), cc = round(m1 + m2 + z * s, 1);
        const Pz = PhiT(Math.abs(z)), res = z >= 0 ? 1 - Pz : Pz;
        return {
          answer: round(res, 4), tol: 0.0002,
          q: `Cesta do práce má dve nezávislé časti: doba jazdy autobusom $X\\sim N(${m1};\\,${a * a})$ a doba chôdze $Y\\sim N(${m2};\\,${b * b})$ (v minútach).
            Aká je pravdepodobnosť, že celá cesta bude trvať dlhšie ako ${nt(cc, 1)} ${Number.isInteger(cc) ? pl(cc, ['minútu', 'minúty', 'minút']) : 'minúty'}? Použi ${phiList([z])}. ${R4}`,
          solution: `$X+Y\\sim N(${m1 + m2};\\,${a * a}+${b * b})=N(${m1 + m2};\\,${s * s})$, $\\sigma=${s}$.
            $P(X+Y&gt;${nm(cc, 1)})=1-\\Phi\\left(\\frac{${nm(cc, 1)}-${m1 + m2}}{${s}}\\right)=1-\\Phi(${nm(z, 2)})=${dd(res, 4)}$.`,
          hint: 'Súčet nezávislých normálnych veličín je normálny; stredné hodnoty aj rozptyly sa sčítajú.'
        };
      }
      const diff = z * s, m2 = pick([50, 60, 70]), m1 = round(m2 + diff, 1);
      // P(X > Y) = P(X - Y > 0), X - Y ~ N(diff, s²): P = Φ(diff / s) = Φ(z)
      const Pz = PhiT(Math.abs(z)), res = z >= 0 ? Pz : 1 - Pz;
      return {
        answer: round(res, 4), tol: 0.0002,
        q: `Výsledky dvoch hráčov v jednom kole sú nezávislé: $X\\sim N(${nm(m1, 1)};\\,${a * a})$ a $Y\\sim N(${m2};\\,${b * b})$. Aká je pravdepodobnosť, že prvý hráč dosiahne viac bodov ako druhý, teda $P(X&gt;Y)$?
          Použi ${phiList([z])}. ${R4}`,
        solution: `$X-Y\\sim N(${nm(m1, 1)}-${m2};\\,${a * a}+${b * b})=N(${nm(diff, 1)};\\,${s * s})$.
          $P(X&gt;Y)=P(X-Y&gt;0)=1-\\Phi\\left(\\frac{0-${par(nm(diff, 1))}}{${s}}\\right)=\\Phi(${nm(z, 2)})=${dd(res, 4)}$.`,
        hint: 'Prejdi k rozdielu $X-Y$: je normálny so strednou hodnotou $\\mu_1-\\mu_2$ a rozptylom $\\sigma_1^2+\\sigma_2^2$.'
      };
    }
    const pp = pick([0.95, 0.99, 0.975, 0.9]), z = ZQ[pp], q = round(1 - pp, 3);
    if (Math.random() < 0.5) {
      const s = pick([2, 3, 4, 5]), cc = pick([500, 250, 1000]), mu = cc + z * s;
      return {
        answer: round(mu, 2), tol: 0.011,
        q: `Automat plní vrecká; hmotnosť náplne má rozdelenie $N(\\mu, ${s * s})$ v gramoch. Na akú strednú hodnotu $\\mu$ treba automat nastaviť, aby menej ako ${cc} g malo iba ${nt(q * 100, 1)} % vreciek? Použi $z_{${nm(pp, 3)}}=${dd(z, 4)}$. ${R2}`,
        solution: `Požadujeme $P(X\\lt ${cc})=\\Phi\\left(\\frac{${cc}-\\mu}{${s}}\\right)=${nm(q, 3)}$, teda $\\frac{${cc}-\\mu}{${s}}=z_{${nm(q, 3)}}=-${dd(z, 4)}$.
          $\\mu=${cc}+${s}\\cdot ${dd(z, 4)}\\approx ${dd(mu, 2)}$ g.`,
        hint: 'Zapíš podmienku cez štandardizáciu a použi $z_{1-p}=-z_p$.'
      };
    }
    const mu = pick([500, 250, 1000]), gap = pick([5, 6, 8, 10, 12]), sg = gap / z;
    return {
      answer: round(sg, 2), tol: 0.011,
      q: `Automat plní vrecká so strednou hodnotou ${mu} g; hmotnosť má normálne rozdelenie. Aká môže byť najväčšia smerodajná odchýlka $\\sigma$, aby menej ako ${mu - gap} g malo nanajvýš ${nt(q * 100, 1)} % vreciek? Použi $z_{${nm(pp, 3)}}=${dd(z, 4)}$. ${R2}`,
      solution: `Požadujeme $\\Phi\\left(\\frac{${mu - gap}-${mu}}{\\sigma}\\right)\\le ${nm(q, 3)}$, teda $-\\frac{${gap}}{\\sigma}\\le -${dd(z, 4)}$ a $\\sigma\\le\\frac{${gap}}{${dd(z, 4)}}\\approx ${dd(sg, 2)}$ g.`,
      hint: 'Štandardizovaná hranica musí byť najviac $-z_{p}$; vyjadri z nej $\\sigma$.'
    };
  });

  /* ======================= 8. NÁHODNÝ VEKTOR ======================= */

  const RHO_PTS = (() => { const z = gaussList(120, 20240611); return Array.from({ length: 60 }, (_, i) => [z[2 * i], z[2 * i + 1]]); })();

  fig('v4-korelacia', {
    controls: [{ id: 'rho', label: 'Korelačný koeficient ρ', min: -1, max: 1, step: 0.05, value: 0.6 }],
    draw: (v) => {
      const p = plane(-3.2, 3.2, -3.2, 3.2, 320, 320, 20), r = v.rho, q = Math.sqrt(Math.max(0, 1 - r * r));
      const pts = RHO_PTS.map(([a, b]) => [a, r * a + q * b]);
      const mx = sum(pts.map((u) => u[0])) / pts.length, my = sum(pts.map((u) => u[1])) / pts.length;
      const sxy = sum(pts.map((u) => (u[0] - mx) * (u[1] - my))), sxx = sum(pts.map((u) => (u[0] - mx) ** 2)), syy = sum(pts.map((u) => (u[1] - my) ** 2));
      const rs = syy > 1e-12 ? sxy / Math.sqrt(sxx * syy) : 0;
      let back = `<line class="f-axis" x1="${p.X(-3.2)}" y1="${n1(p.Y(0))}" x2="${p.X(3.2)}" y2="${n1(p.Y(0))}"/><line class="f-axis" x1="${n1(p.X(0))}" y1="${p.Y(-3.2)}" x2="${n1(p.X(0))}" y2="${p.Y(3.2)}"/>`;
      let clipped = '';
      pts.forEach(([x, y]) => { clipped += `<circle class="f-dot" cx="${n1(p.X(x))}" cy="${n1(p.Y(y))}" r="3.5"/>`; });
      return {
        svg: svg(p, back, clipped, `<text class="f-math" x="${p.W - 26}" y="${n1(p.Y(0) - 6)}">X</text><text class="f-math" x="${n1(p.X(0) + 6)}" y="34">Y</text>`, 'Mračno bodov s daným korelačným koeficientom'),
        readout: `ρ = ${sk(r, 2)} · výberový korelačný koeficient 60 bodov r = ${sk(rs, 3)}`
      };
    }
  });

  lesson({
    id: 'v4-vektory', order: 80, title: 'Náhodný vektor, kovariancia a korelácia',
    summary: 'Spoločné a marginálne rozdelenie, nezávislosť náhodných veličín, kovariancia, korelačný koeficient a rozptyl súčtu.',
    theory: [
      `<p><strong>Diskrétny náhodný vektor</strong> $(X, Y)$ opisuje <strong>spoločná pravdepodobnostná funkcia</strong> $p_{ij}=P(X=x_i, Y=y_j)$, $\\sum_{i,j}p_{ij}=1$.
       <strong>Marginálne rozdelenia</strong> dostaneme sčítaním riadkov a stĺpcov: $P(X=x_i)=\\sum_j p_{ij}$, $P(Y=y_j)=\\sum_i p_{ij}$.
       Veličiny $X$, $Y$ sú <strong>nezávislé</strong>, ak $p_{ij}=P(X=x_i)\\,P(Y=y_j)$ pre <em>všetky</em> $i, j$.
       Pre spojitý vektor so spoločnou hustotou $f(x, y)$ sú marginálne hustoty $f_X(x)=\\int f(x, y)\\,\\mathrm{d}y$ a nezávislosť znamená $f(x, y)=f_X(x)f_Y(y)$.</p>`,
      `<p><strong>Kovariancia</strong> $\\operatorname{cov}(X, Y)=E\\big[(X-EX)(Y-EY)\\big]=E(XY)-E(X)E(Y)$, kde $E(XY)=\\sum_{i,j}x_iy_jp_{ij}$. Platí
       $$D(aX+bY)=a^2D(X)+b^2D(Y)+2ab\\operatorname{cov}(X, Y).$$
       <strong>Korelačný koeficient</strong> $\\rho(X, Y)=\\frac{\\operatorname{cov}(X, Y)}{\\sqrt{D(X)D(Y)}}$ je bezrozmerný, $-1\\le\\rho\\le 1$, a $|\\rho|=1$ práve vtedy,
       keď $Y=aX+b$ s pravdepodobnosťou 1. Meria iba silu <em>lineárnej</em> závislosti.</p>`,
      `<p>Nezávislé veličiny sú nekorelované ($\\operatorname{cov}=0$), opak neplatí: ak $X$ nadobúda hodnoty $-1, 0, 1$ s pravdepodobnosťou $\\frac13$ a $Y=X^2$,
       je $\\operatorname{cov}(X, Y)=E(X^3)-E(X)E(X^2)=0$, hoci $Y$ je funkciou $X$. Pre nezávislé (aj len nekorelované) veličiny sa rozptyly sčítajú: $D(X\\pm Y)=D(X)+D(Y)$.</p>`,
      { fig: 'v4-korelacia', caption: 'Body $(X, Y)$ zo spoločného normálneho rozdelenia so zadaným $\\rho$. Pri $\\rho$ blízko $\\pm 1$ sa body tlačia k priamke, pri $\\rho=0$ tvoria guľaté mračno.' }
    ],
    examples: [
      { task: 'Spoločné rozdelenie: $P(X=0, Y=0)=0{,}4$, $P(X=0, Y=1)=0{,}1$, $P(X=1, Y=0)=0{,}2$, $P(X=1, Y=1)=0{,}3$. Určte $\\operatorname{cov}(X, Y)$ a $\\rho(X, Y)$. Sú $X$, $Y$ nezávislé?',
        steps: ['Marginálne: $P(X=1)=0{,}5$, $P(Y=1)=0{,}4$, teda $E(X)=0{,}5$, $E(Y)=0{,}4$, $D(X)=0{,}25$, $D(Y)=0{,}24$.',
          '$E(XY)=1\\cdot 1\\cdot 0{,}3=0{,}3$, $\\operatorname{cov}(X, Y)=0{,}3-0{,}5\\cdot 0{,}4=0{,}1$.',
          '$\\rho=\\frac{0{,}1}{\\sqrt{0{,}25\\cdot 0{,}24}}\\approx 0{,}4082$. Keďže $\\operatorname{cov}\\ne 0$, veličiny sú závislé (napr. $0{,}3\\ne 0{,}5\\cdot 0{,}4$).'] },
      { task: 'Platí $D(X)=4$, $D(Y)=9$ a $\\rho(X, Y)=-\\frac13$. Vypočítajte $D(2X-Y)$.',
        steps: ['$\\operatorname{cov}(X, Y)=\\rho\\sqrt{D(X)D(Y)}=-\\frac13\\cdot 2\\cdot 3=-2$.',
          '$D(2X-Y)=4D(X)+D(Y)-2\\cdot 2\\cdot\\operatorname{cov}(X, Y)=16+9+8=33$.'] }
    ]
  });

  const jointTable = (xs, ys, P) => `<table class="tbl tbl-auto"><tr><th>$X\\backslash Y$</th>${ys.map((y) => `<th>$${y}$</th>`).join('')}</tr>
    ${xs.map((x, i) => `<tr><th>$${x}$</th>${ys.map((_, j) => `<td>$${nm(P[i][j], 2)}$</td>`).join('')}</tr>`).join('')}</table>`;
  const moments = (xs, ys, P) => {
    const px = P.map((r) => sum(r)), py = ys.map((_, j) => sum(P.map((r) => r[j])));
    const EX = sum(xs.map((x, i) => x * px[i])), EY = sum(ys.map((y, j) => y * py[j]));
    const EX2 = sum(xs.map((x, i) => x * x * px[i])), EY2 = sum(ys.map((y, j) => y * y * py[j]));
    let EXY = 0;
    xs.forEach((x, i) => ys.forEach((y, j) => { EXY += x * y * P[i][j]; }));
    return { px, py, EX, EY, DX: EX2 - EX * EX, DY: EY2 - EY * EY, EXY, cov: EXY - EX * EY };
  };

  gen('v4-vektory', () => {
    const t = Math.random();
    if (t < 0.5) {
      const two = t < 0.25;
      const xs = pick([[0, 1], [1, 2], [-1, 1]]), ys = two ? pick([[0, 1], [1, 2], [0, 2]]) : pick([[0, 1, 2], [-1, 0, 1], [1, 2, 3]]);
      let P, m;
      do {
        const flat = parts(20, xs.length * ys.length).map((v) => v / 20);
        P = xs.map((_, i) => flat.slice(i * ys.length, (i + 1) * ys.length));
        m = moments(xs, ys, P);
      } while (Math.abs(m.cov) < 0.004 || m.DX < 1e-9 || m.DY < 1e-9);
      const head = `Náhodný vektor $(X, Y)$ má spoločné rozdelenie dané tabuľkou (riadky: hodnoty $X$, stĺpce: hodnoty $Y$):${jointTable(xs, ys, P)}`;
      const base = `Marginálne: $P(X=x_i)$: ${m.px.map((q) => `$${nm(q, 2)}$`).join(', ')}; $P(Y=y_j)$: ${m.py.map((q) => `$${nm(q, 2)}$`).join(', ')}.
        $E(X)=${nm(m.EX, 4)}$, $E(Y)=${nm(m.EY, 4)}$, $E(XY)=${nm(m.EXY, 4)}$, $\\operatorname{cov}(X, Y)=${nm(m.EXY, 4)}-${par(nm(m.EX, 4))}\\cdot ${par(nm(m.EY, 4))}=${nm(m.cov, 4)}$.`;
      if (!two) {
        return {
          answer: round(m.cov, 4), tol: 0.0001, signed: true,
          q: `${head}Vypočítaj kovarianciu $\\operatorname{cov}(X, Y)$. ${R4}`,
          solution: base,
          hint: '$\\operatorname{cov}(X, Y)=E(XY)-E(X)E(Y)$; $E(XY)=\\sum x_iy_jp_{ij}$, $E(X)$ a $E(Y)$ z marginálnych rozdelení.'
        };
      }
      const rho = m.cov / Math.sqrt(m.DX * m.DY);
      return {
        answer: round(rho, 4), tol: 0.0003, signed: true,
        q: `${head}Vypočítaj korelačný koeficient $\\rho(X, Y)$. ${R4}`,
        solution: `${base} $D(X)=${nm(m.DX, 4)}$, $D(Y)=${nm(m.DY, 4)}$, $\\rho=\\frac{${nm(m.cov, 4)}}{\\sqrt{${nm(m.DX, 4)}\\cdot ${nm(m.DY, 4)}}}\\approx ${dd(rho, 4)}$.`,
        hint: 'Vypočítaj kovarianciu a rozptyly z marginálnych rozdelení, potom $\\rho=\\operatorname{cov}/\\sqrt{D(X)D(Y)}$.'
      };
    }
    if (t < 0.75) {
      const sx = rnd(1, 5), sy = rnd(1, 5), rho = pick([-0.5, -0.25, 0.25, 0.5, 0.2, -0.4, 0.75]);
      const a = pick([1, 2, 3, -1, -2]), b = pick([1, -1, 2, -2, 3]);
      const cov = rho * sx * sy, res = a * a * sx * sx + b * b * sy * sy + 2 * a * b * cov;
      const lin = `${a === 1 ? '' : a === -1 ? '-' : a}X${b > 0 ? '+' : '-'}${Math.abs(b) === 1 ? '' : Math.abs(b)}Y`;
      return {
        answer: round(res, 4), tol: 0.0001,
        q: `Náhodné veličiny $X$, $Y$ majú $D(X)=${sx * sx}$, $D(Y)=${sy * sy}$ a korelačný koeficient $\\rho(X, Y)=${nm(rho, 2)}$. Vypočítaj $D(${lin})$.`,
        solution: `$\\operatorname{cov}(X, Y)=\\rho\\,\\sigma_X\\sigma_Y=${nm(rho, 2)}\\cdot ${sx}\\cdot ${sy}=${nm(cov, 4)}$.
          $D(${lin})=${par(String(a))}^2\\cdot ${sx * sx}+${par(String(b))}^2\\cdot ${sy * sy}+2\\cdot ${par(String(a))}\\cdot ${par(String(b))}\\cdot ${par(nm(cov, 4))}=${nm(res, 4)}$.`,
        hint: '$D(aX+bY)=a^2D(X)+b^2D(Y)+2ab\\operatorname{cov}(X, Y)$ a $\\operatorname{cov}=\\rho\\sqrt{D(X)D(Y)}$.'
      };
    }
    const xs = [0, 1], ys = pick([[0, 1, 2], [1, 2, 3], [-1, 0, 1]]);
    const px = pick([[0.5, 0.5], [0.4, 0.6], [0.2, 0.8], [0.3, 0.7]]), py = pick([[0.2, 0.3, 0.5], [0.1, 0.4, 0.5], [0.3, 0.3, 0.4], [0.2, 0.6, 0.2]]);
    let P = px.map((a) => py.map((b) => round(a * b, 4)));
    const indep = Math.random() < 0.5;
    if (!indep) {
      const d = pick([0.02, 0.03, 0.04, 0.05]), j1 = rnd(0, 2), j2 = (j1 + rnd(1, 2)) % 3;
      if (Math.min(P[0][j2], P[1][j1]) - d > 0.005) {
        P[0][j1] = round(P[0][j1] + d, 4); P[1][j1] = round(P[1][j1] - d, 4);
        P[0][j2] = round(P[0][j2] - d, 4); P[1][j2] = round(P[1][j2] + d, 4);
      }
    }
    const dep = P.some((r, i) => r.some((v, j) => Math.abs(v - px[i] * py[j]) > 1e-9));
    let bad = '';
    if (dep) {
      outer: for (let i = 0; i < 2; i++) for (let j = 0; j < 3; j++) {
        if (Math.abs(P[i][j] - px[i] * py[j]) > 1e-9) { bad = `napríklad $P(X=${xs[i]}, Y=${ys[j]})=${nm(P[i][j], 2)}\\ne ${nm(px[i], 2)}\\cdot ${nm(py[j], 2)}=${nm(px[i] * py[j], 4)}$`; break outer; }
      }
    }
    return {
      type: 'choice', options: ['nezávislé', 'závislé'], answer: dep ? 'závislé' : 'nezávislé',
      q: `Náhodný vektor $(X, Y)$ má spoločné rozdelenie dané tabuľkou:${jointTable(xs, ys, P.map((r) => r.map((v) => v)))}Sú náhodné veličiny $X$ a $Y$ nezávislé?`,
      solution: `Marginálne rozdelenia: $P(X=0)=${nm(px[0], 2)}$, $P(X=1)=${nm(px[1], 2)}$; $P(Y=y_j)$: ${py.map((q) => `$${nm(q, 2)}$`).join(', ')}.
        ${dep ? `Súčinové pravidlo neplatí, ${bad}. Veličiny sú <strong>závislé</strong>.` : 'Každé políčko tabuľky sa rovná súčinu príslušných marginálnych pravdepodobností, veličiny sú <strong>nezávislé</strong>.'}`,
      hint: 'Vypočítaj súčty riadkov a stĺpcov a over, či $p_{ij}=P(X=x_i)\\,P(Y=y_j)$ pre všetky políčka.'
    };
  });

  /* ======================= 9. ZÁKON VEĽKÝCH ČÍSEL A CLV ======================= */

  const BASES = {
    1: { name: 'hod kockou', xs: [1, 2, 3, 4, 5, 6], ps: [1, 1, 1, 1, 1, 1].map((v) => v / 6) },
    2: { name: 'šikmé rozdelenie', xs: [0, 1, 2, 3, 4, 5], ps: [0.4, 0.25, 0.15, 0.1, 0.06, 0.04] }
  };

  fig('v4-clv', {
    controls: [
      { id: 'n', label: 'Veľkosť výberu n', min: 1, max: 30, step: 1, value: 1 },
      { id: 'typ', label: 'Základné rozdelenie (1 = kocka, 2 = šikmé)', min: 1, max: 2, step: 1, value: 1 }
    ],
    draw: (v) => {
      const B = BASES[v.typ] || BASES[1], n = v.n;
      const mu = sum(B.xs.map((x, i) => x * B.ps[i])), s2 = sum(B.xs.map((x, i) => x * x * B.ps[i])) - mu * mu;
      // rozdelenie súčtu n nezávislých kópií (konvolúcia), hodnoty sú celé čísla
      let dist = new Map([[0, 1]]);
      for (let r = 0; r < n; r++) {
        const nd = new Map();
        dist.forEach((q, s) => B.xs.forEach((x, i) => nd.set(s + x, (nd.get(s + x) || 0) + q * B.ps[i])));
        dist = nd;
      }
      const xmin = Math.min(...B.xs), xmax = Math.max(...B.xs), sd = Math.sqrt(s2 / n);
      const peak = Math.max(npdf(mu, mu, sd), ...[...dist.values()].map((q) => q * n));
      const p = plane(xmin - 0.5, xmax + 0.5, -peak * 0.08, peak * 1.12, 440, 260, 24);
      let bars = '';
      const w = (p.X(1 / n) - p.X(0)) * 0.8;
      dist.forEach((q, s) => {
        const x = s / n, h = q * n;
        bars += `<rect class="f-fill f-outline" x="${n1(p.X(x) - w / 2)}" y="${n1(p.Y(h))}" width="${n1(Math.max(w, 1))}" height="${n1(p.Y(0) - p.Y(h))}"/>`;
      });
      const clipped = bars + `<path class="f-warn" d="${curvePath(p, (x) => npdf(x, mu, sd), xmin - 0.5, xmax + 0.5)}"/>
        <line class="f-dash" x1="${n1(p.X(mu))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(mu))}" y2="${n1(p.Y(peak))}"/>`;
      return {
        svg: svg(p, xAxis(p, 1, 1), clipped, '', 'Rozdelenie výberového priemeru a normálna aproximácia'),
        readout: `${B.name}: μ = ${sk(mu, 3)}, σ² = ${sk(s2, 3)} · <span class="c-accent">výberový priemer: E = μ, σ/√n = ${sk(sd, 3)}</span>`
      };
    }
  });

  lesson({
    id: 'v4-clv', order: 90, title: 'Zákon veľkých čísel a centrálna limitná veta',
    summary: 'Čebyševova nerovnosť, slabý zákon veľkých čísel, centrálna limitná veta a Moivreova–Laplaceova aproximácia binomického rozdelenia.',
    theory: [
      `<p><strong>Čebyševova nerovnosť:</strong> pre veličinu s konečným rozptylom a každé $\\varepsilon&gt;0$ platí
       $$P\\big(|X-E(X)|\\ge\\varepsilon\\big)\\le\\frac{D(X)}{\\varepsilon^2}.$$
       Platí pre <em>ľubovoľné</em> rozdelenie, preto je odhad hrubý (pre $\\varepsilon=2\\sigma$ dáva $\\frac14$, pri normálnom rozdelení je skutočná hodnota asi $0{,}0455$).</p>`,
      `<p>Nech $X_1, X_2, \\dots$ sú nezávislé rovnako rozdelené s $E(X_i)=\\mu$, $D(X_i)=\\sigma^2$ a $\\bar{X}_n=\\frac1n\\sum_{i=1}^nX_i$. Potom $E(\\bar{X}_n)=\\mu$, $D(\\bar{X}_n)=\\frac{\\sigma^2}{n}$ a
       <strong>slabý zákon veľkých čísel</strong> hovorí, že pre každé $\\varepsilon&gt;0$
       $$P\\big(|\\bar{X}_n-\\mu|\\ge\\varepsilon\\big)\\le\\frac{\\sigma^2}{n\\varepsilon^2}\\to 0.$$
       Špeciálne relatívna početnosť úspechu konverguje k jeho pravdepodobnosti (Bernoulliho veta).</p>`,
      `<p><strong>Centrálna limitná veta</strong> (Lindeberg–Lévy): pri rovnakých predpokladoch pre každé $z$
       $$\\lim_{n\\to\\infty}P\\left(\\frac{\\sum_{i=1}^nX_i-n\\mu}{\\sigma\\sqrt{n}}\\le z\\right)=\\Phi(z).$$
       Prakticky: $\\sum X_i\\approx N(n\\mu, n\\sigma^2)$ a $\\bar{X}_n\\approx N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$ pre veľké $n$, bez ohľadu na tvar pôvodného rozdelenia.</p>
       <p><strong>Moivreova–Laplaceova veta</strong> je špeciálny prípad: $Bi(n; p)\\approx N(np, np(1-p))$, ak je $np(1-p)$ dosť veľké (napr. $&gt;9$).
       Pre celočíselné $k$ používame <strong>opravu na spojitosť</strong>: $P(X\\le k)\\approx\\Phi\\left(\\frac{k+0{,}5-np}{\\sqrt{np(1-p)}}\\right)$.</p>`,
      { fig: 'v4-clv', caption: 'Rozdelenie výberového priemeru $n$ nezávislých pozorovaní (stĺpce, prepočítané na hustotu) a hustota $N(\\mu, \\sigma^2/n)$ (oranžová). Už pri $n\\approx 10$ je zhoda dobrá aj pre šikmé rozdelenie.' }
    ],
    examples: [
      { task: 'Hodíme 100-krát hracou kockou. Odhadnite pravdepodobnosť, že súčet bodov presiahne 380. Použite $\\Phi(1{,}76)=0{,}9608$.',
        steps: ['Pre jeden hod $\\mu=3{,}5$, $\\sigma^2=\\frac{35}{12}$. Súčet $S\\approx N(350;\\,291{,}67)$, $\\sigma_S=\\sqrt{291{,}67}\\approx 17{,}08$.',
          '$z=\\frac{380-350}{17{,}08}\\approx 1{,}76$.',
          '$P(S&gt;380)\\approx 1-\\Phi(1{,}76)=0{,}0392$.'] },
      { task: 'Mincou hodíme 400-krát. Odhadnite pravdepodobnosť, že znak padne 190- až 210-krát. Použite $\\Phi(1{,}05)=0{,}8531$.',
        steps: ['$X\\sim Bi(400; 0{,}5)$, $np=200$, $\\sqrt{np(1-p)}=10$.',
          'S opravou na spojitosť: $P(190\\le X\\le 210)\\approx\\Phi\\left(\\frac{210{,}5-200}{10}\\right)-\\Phi\\left(\\frac{189{,}5-200}{10}\\right)=\\Phi(1{,}05)-\\Phi(-1{,}05)$.',
          '$=2\\cdot 0{,}8531-1=0{,}7062$.'] }
    ]
  });

  gen('v4-clv', () => {
    const t = Math.random();
    if (t < 0.25) {
      const c = pick([
        { mu: 80, s: 15, unit: 'kg', txt: (n) => `Hmotnosť cestujúceho má strednú hodnotu 80 kg a smerodajnú odchýlku 15 kg. Do lanovky nastúpi ${n} cestujúcich (hmotnosti sú nezávislé).`, what: (c) => `ich celková hmotnosť prekročí $${ths(c)}$ kg` },
        { mu: 3, s: 2, unit: 'min', txt: (n) => `Obsluha zákazníka trvá v priemere 3 minúty so smerodajnou odchýlkou 2 minúty. Pracovník obslúži ${n} zákazníkov (doby sú nezávislé).`, what: (c) => `mu to bude trvať dlhšie ako $${ths(c)}$ minút` },
        { mu: 50, s: 4, unit: 'g', txt: (n) => `Hmotnosť jedného výrobku má strednú hodnotu 50 g a smerodajnú odchýlku 4 g. Do krabice sa balí ${n} výrobkov.`, what: (c) => `obsah krabice bude ťažší ako $${ths(c)}$ g` }
      ]);
      const n = pick([16, 25, 36, 49, 64, 100]), sS = c.s * Math.sqrt(n), z = pick([0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25]);
      const cc = c.mu * n + z * sS, res = 1 - PhiT(z);
      return {
        answer: round(res, 4), tol: 0.0002,
        q: `${c.txt(n)} Pomocou centrálnej limitnej vety odhadni pravdepodobnosť, že ${c.what(nm(cc, 1))}. Použi ${phiList([z])}. ${R4}`,
        solution: `Súčet $S\\approx N(n\\mu, n\\sigma^2)$: $E(S)=${n}\\cdot ${c.mu}=${ths(c.mu * n)}$, $\\sigma_S=${c.s}\\sqrt{${n}}=${nm(sS)}$.
          $P(S&gt;${ths(nm(cc, 1))})\\approx 1-\\Phi\\left(\\frac{${ths(nm(cc, 1))}-${ths(c.mu * n)}}{${nm(sS)}}\\right)=1-\\Phi(${nm(z, 2)})=${dd(res, 4)}$.`,
        hint: 'Súčet $n$ nezávislých veličín má približne rozdelenie $N(n\\mu, n\\sigma^2)$; smerodajná odchýlka súčtu je $\\sigma\\sqrt{n}$.'
      };
    }
    if (t < 0.45) {
      const n = pick([16, 25, 64, 100]), s = pick([2, 4, 5, 10]), z = pick([0.5, 1, 1.25, 1.5, 2, 2.5]), d = z * s / Math.sqrt(n);
      const res = 2 * PhiT(z) - 1;
      return {
        answer: round(res, 4), tol: 0.0002,
        q: `Meranie má náhodnú chybu so strednou hodnotou 0 a smerodajnou odchýlkou $\sigma=${s}$. Urobíme ${n} nezávislých meraní a výsledok spriemerujeme. Aká je (podľa CLV) pravdepodobnosť, že sa priemer od skutočnej hodnoty odchýli o menej ako ${nt(d, 3)}? Použi ${phiList([z])}. ${R4}`,
        solution: `$\\bar{X}\\approx N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$, $\\frac{\\sigma}{\\sqrt{n}}=\\frac{${s}}{${Math.sqrt(n)}}=${nm(s / Math.sqrt(n))}$.
          $P(|\\bar{X}-\\mu|\\lt ${nm(d, 3)})\\approx 2\\Phi\\left(\\frac{${nm(d, 3)}}{${nm(s / Math.sqrt(n))}}\\right)-1=2\\Phi(${nm(z, 2)})-1=${dd(res, 4)}$.`,
        hint: 'Výberový priemer má smerodajnú odchýlku $\\sigma/\\sqrt{n}$; pre súmerný interval použi $2\\Phi(z)-1$.'
      };
    }
    if (t < 0.75) {
      const [n, p, ctx] = pick([
        [100, 0.5, 'Mincou hodíme 100-krát; $X$ je počet znakov.'],
        [400, 0.5, 'Mincou hodíme 400-krát; $X$ je počet znakov.'],
        [900, 0.1, 'Výrobok je chybný s pravdepodobnosťou $0{,}1$. Skontrolujeme 900 výrobkov; $X$ je počet chybných.'],
        [625, 0.2, 'Kandidáta podporuje 20 % voličov. Náhodne oslovíme 625 voličov; $X$ je počet jeho priaznivcov.'],
        [1600, 0.2, 'Reklamný e-mail otvorí 20 % adresátov. Pošleme ho 1600 adresátom; $X$ je počet otvorení.'],
        [144, 0.5, 'Mincou hodíme 144-krát; $X$ je počet znakov.']
      ]);
      const mu = n * p, s = Math.sqrt(n * p * (1 - p)), kind = rnd(0, 2);
      if (kind < 2) {
        const k = Math.round(mu + pick([-1, 1]) * rnd(Math.ceil(s * 0.3), Math.ceil(s * 2)));
        const le = kind === 0, z = round(le ? (k + 0.5 - mu) / s : (k - 0.5 - mu) / s, 2);
        const F = z >= 0 ? PhiT(z) : 1 - PhiT(-z), res = le ? F : 1 - F;
        return {
          answer: round(res, 4), tol: 0.0003,
          q: `${ctx} Pomocou normálnej aproximácie s opravou na spojitosť odhadni $P(X${le ? '\\le' : '\\ge'}${k})$. Hodnotu $z$ zaokrúhli na 2 desatinné miesta a použi ${phiList([z])}. ${R4}`,
          solution: `$np=${nm(mu)}$, $\\sqrt{np(1-p)}=${nm(s, 4)}$. ${le
            ? `$P(X\\le ${k})\\approx\\Phi\\left(\\frac{${k}+0{,}5-${nm(mu)}}{${nm(s, 4)}}\\right)=\\Phi(${nm(z, 2)})=${dd(res, 4)}$.`
            : `$P(X\\ge ${k})=1-P(X\\le ${k - 1})\\approx 1-\\Phi\\left(\\frac{${k}-0{,}5-${nm(mu)}}{${nm(s, 4)}}\\right)=1-\\Phi(${nm(z, 2)})=${dd(res, 4)}$.`}`,
          hint: 'Binomické rozdelenie nahraď normálnym $N(np, np(1-p))$; pri $P(X\\le k)$ posuň hranicu na $k+0{,}5$, pri $P(X\\ge k)$ na $k-0{,}5$.'
        };
      }
      const d = rnd(Math.ceil(s * 0.5), Math.ceil(s * 1.8)), k1 = mu - d, k2 = mu + d, z = round((d + 0.5) / s, 2);
      const res = 2 * PhiT(z) - 1;
      return {
        answer: round(res, 4), tol: 0.0003,
        q: `${ctx} Pomocou normálnej aproximácie s opravou na spojitosť odhadni $P(${nm(k1)}\\le X\\le ${nm(k2)})$. Hodnotu $z$ zaokrúhli na 2 desatinné miesta a použi ${phiList([z])}. ${R4}`,
        solution: `$np=${nm(mu)}$, $\\sqrt{np(1-p)}=${nm(s, 4)}$. $P\\approx\\Phi\\left(\\frac{${nm(k2)}+0{,}5-${nm(mu)}}{${nm(s, 4)}}\\right)-\\Phi\\left(\\frac{${nm(k1)}-0{,}5-${nm(mu)}}{${nm(s, 4)}}\\right)=\\Phi(${nm(z, 2)})-\\Phi(-${nm(z, 2)})=2\\Phi(${nm(z, 2)})-1=${dd(res, 4)}$.`,
        hint: 'Interval rozšír o $0{,}5$ na každú stranu a štandardizuj; interval je súmerný okolo $np$.'
      };
    }
    if (Math.random() < 0.5) {
      const k = pick([1.5, 2, 2.5, 3, 4, 5]), s = pick([2, 3, 4, 5, 10]), eps = k * s, res = 1 / (k * k);
      return {
        answer: round(res, 4), tol: 0.0001,
        q: `O rozdelení náhodnej veličiny $X$ vieme len to, že $E(X)=${10 * s}$ a $\\sigma=${s}$. Pomocou Čebyševovej nerovnosti urči hornú hranicu pre $P(|X-${10 * s}|\\ge ${nm(eps)})$. ${R4}`,
        solution: `$P(|X-E(X)|\\ge\\varepsilon)\\le\\frac{D(X)}{\\varepsilon^2}=\\frac{${s * s}}{${nm(eps)}^2}=${nm(res, 4)}$.`,
        hint: 'Čebyševova nerovnosť: $P(|X-\\mu|\\ge\\varepsilon)\\le\\sigma^2/\\varepsilon^2$.'
      };
    }
    const s = pick([2, 3, 4, 5, 10]), eps = pick([0.5, 1, 2]), D = pick([10, 20, 50, 100]), n = Math.ceil(s * s * D / (eps * eps) - 1e-9);
    return {
      answer: n, tol: 0,
      q: `Veličiny $X_1, \\dots, X_n$ sú nezávislé s rovnakou strednou hodnotou $\\mu$ a smerodajnou odchýlkou ${s}. Aké najmenšie $n$ podľa Čebyševovej nerovnosti zaručí, že $P(|\\bar{X}_n-\\mu|\\ge ${nm(eps)})\\le ${nm(1 / D)}$?`,
      solution: `$P(|\\bar{X}_n-\\mu|\\ge\\varepsilon)\\le\\frac{\\sigma^2}{n\\varepsilon^2}=\\frac{${s * s}}{n\\cdot ${nm(eps * eps)}}$. Stačí $\\frac{${s * s}}{${nm(eps * eps)}\\,n}\\le ${nm(1 / D)}$, teda $n\\ge ${n}$.`,
      hint: 'Použi $D(\\bar{X}_n)=\\sigma^2/n$ a Čebyševovu nerovnosť; vyrieš nerovnicu pre $n$.'
    };
  });

  /* ======================= 10. POPISNÁ ŠTATISTIKA ======================= */

  // kvartily ako mediány dolnej a hornej polovice (pri nepárnom n bez mediánu)
  const median = (s) => { const n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
  const quart = (data) => {
    const s = [...data].sort((a, b) => a - b), n = s.length, h = Math.floor(n / 2);
    return { s, med: median(s), lo: s.slice(0, h), hi: s.slice(n - h), Q1: median(s.slice(0, h)), Q3: median(s.slice(n - h)) };
  };
  const list = (a) => a.map((v) => nm(v, 2)).join(';\\ ');

  fig('v4-histogram', {
    draw: () => {
      const data = [12, 15, 17, 18, 20, 21, 23, 24, 26, 41], counts = [1, 3, 4, 1, 0, 0, 1];
      const X = (v) => 40 + (v - 10) * 11, yb = 150, hh = 26;
      let s = '<svg viewBox="0 0 440 262" role="img" aria-label="Histogram a krabicový graf s odľahlou hodnotou">';
      counts.forEach((c, i) => {
        if (c) s += `<rect class="f-fill f-outline" x="${X(10 + 5 * i)}" y="${yb - c * hh}" width="${X(15) - X(10)}" height="${c * hh}"/>`;
      });
      s += `<line class="f-axis" x1="${X(8)}" y1="${yb}" x2="${X(46)}" y2="${yb}"/>`;
      for (let v = 10; v <= 45; v += 5) s += `<line class="f-thin" x1="${X(v)}" y1="${yb}" x2="${X(v)}" y2="${yb + 5}"/><text class="f-small" x="${X(v)}" y="${yb + 18}" text-anchor="middle">${v}</text>`;
      for (let c = 1; c <= 4; c++) s += `<text class="f-small" x="${X(8) - 4}" y="${yb - c * hh + 4}" text-anchor="end">${c}</text>`;
      s += `<text class="f-small" x="${X(8)}" y="16">početnosť</text>`;
      // krabicový graf
      const yc = 220;
      s += `<line class="f-line" x1="${X(12)}" y1="${yc}" x2="${X(17)}" y2="${yc}"/><line class="f-line" x1="${X(24)}" y1="${yc}" x2="${X(26)}" y2="${yc}"/>
        <line class="f-line" x1="${X(12)}" y1="${yc - 10}" x2="${X(12)}" y2="${yc + 10}"/><line class="f-line" x1="${X(26)}" y1="${yc - 10}" x2="${X(26)}" y2="${yc + 10}"/>
        <rect class="f-fill2 f-outline2" x="${X(17)}" y="${yc - 16}" width="${X(24) - X(17)}" height="32"/>
        <line class="f-accent" x1="${X(20.5)}" y1="${yc - 16}" x2="${X(20.5)}" y2="${yc + 16}"/>
        <circle class="f-vertex" cx="${X(41)}" cy="${yc}" r="5"/>
        <line class="f-dash" x1="${X(34.5)}" y1="${yc - 22}" x2="${X(34.5)}" y2="${yc + 22}"/>
        <text class="f-small" x="${X(17)}" y="${yc + 32}" text-anchor="middle">Q₁ = 17</text><text class="f-small c-accent" x="${X(20.5)}" y="${yc - 22}" text-anchor="middle">x̃ = 20,5</text>
        <text class="f-small" x="${X(24)}" y="${yc + 32}" text-anchor="middle">Q₃ = 24</text>
        <text class="f-small" x="${X(34.5)}" y="${yc + 36}" text-anchor="middle">Q₃ + 1,5·IQR</text>
        <text class="f-small" x="${X(41)}" y="${yc - 12}" text-anchor="middle">odľahlá</text>`;
      return s + '</svg>';
    }
  });

  lesson({
    id: 'v4-popisna', order: 100, title: 'Výberové charakteristiky',
    summary: 'Náhodný výber, výberový priemer a výberový rozptyl s delením n − 1, kvartily, odľahlé hodnoty, krabicový graf a histogram.',
    theory: [
      `<p><strong>Náhodný výber</strong> rozsahu $n$ sú nezávislé rovnako rozdelené veličiny $X_1, \\dots, X_n$; namerané čísla $x_1, \\dots, x_n$ sú jeho realizácia.
       <strong>Výberový priemer</strong> a <strong>výberový rozptyl</strong>:
       $$\\bar{x}=\\frac1n\\sum_{i=1}^nx_i,\\qquad s^2=\\frac{1}{n-1}\\sum_{i=1}^n(x_i-\\bar{x})^2=\\frac{1}{n-1}\\left(\\sum_{i=1}^nx_i^2-n\\bar{x}^2\\right),$$
       <strong>výberová smerodajná odchýlka</strong> $s=\\sqrt{s^2}$ a variačný koeficient $\\frac{s}{\\bar{x}}$. Delenie $n-1$ (nie $n$) zaručuje, že $E(S^2)=\\sigma^2$ — pozri lekciu o odhadoch.
       Hodnota $n-1$ je počet <em>stupňov voľnosti</em>: odchýlky $x_i-\\bar{x}$ majú súčet 0, voľne sa ich dá zvoliť iba $n-1$.</p>`,
      `<p><strong>Poriadkové štatistiky</strong> $x_{(1)}\\le x_{(2)}\\le\\dots\\le x_{(n)}$ sú usporiadané hodnoty. Medián $\\tilde{x}$ je prostredná hodnota (pri párnom $n$ priemer dvoch prostredných).
       Pre kvartily existuje viac konvencií; v týchto úlohách je <strong>dolný kvartil</strong> $Q_1$ medián dolnej polovice a <strong>horný kvartil</strong> $Q_3$ medián hornej polovice usporiadaných dát
       (pri nepárnom $n$ medián do polovíc nezahŕňame). <strong>Medzikvartilové rozpätie</strong> $IQR=Q_3-Q_1$ je robustná miera variability.
       Podľa Tukeyho pravidla je hodnota <strong>odľahlá</strong>, ak leží mimo intervalu $[Q_1-1{,}5\\,IQR;\\ Q_3+1{,}5\\,IQR]$.</p>`,
      `<p><strong>Krabicový graf</strong> zobrazuje $Q_1$, medián a $Q_3$ ako krabicu, „fúzy“ siahajú k najmenšej a najväčšej neodľahlej hodnote a odľahlé hodnoty sú vyznačené zvlášť.
       <strong>Histogram</strong> rozdelí obor hodnôt na triedy (zvyčajne rovnakej šírky $h$) a nad každou nakreslí obdĺžnik. Ak je výška $\\frac{n_j}{nh}$ (relatívna početnosť delená šírkou),
       celková plocha je 1 a histogram je odhadom hustoty. Počet tried sa často volí približne $1+\\log_2 n$ (Sturgesovo pravidlo).</p>`,
      { fig: 'v4-histogram', caption: 'Histogram (triedy šírky 5) a krabicový graf dát 12, 15, 17, 18, 20, 21, 23, 24, 26, 41. Hodnota 41 leží za hranicou $Q_3+1{,}5\\,IQR=34{,}5$, je odľahlá; horný fúz končí v 26.' }
    ],
    examples: [
      { task: 'Vypočítajte výberový priemer a výberový rozptyl dát 4, 7, 5, 9, 5.',
        steps: ['$\\bar{x}=\\frac{4+7+5+9+5}{5}=6$.',
          'Odchýlky $-2, 1, -1, 3, -1$, súčet ich štvorcov $4+1+1+9+1=16$.',
          '$s^2=\\frac{16}{5-1}=4$, $s=2$. (Delením $n=5$ by sme dostali vychýlenú hodnotu $3{,}2$.)'] },
      { task: 'Pre dáta 12, 15, 17, 18, 20, 21, 23, 24, 26, 41 určte medián, kvartily a odľahlé hodnoty.',
        steps: ['$n=10$, medián $\\tilde{x}=\\frac{20+21}{2}=20{,}5$.',
          'Dolná polovica 12, 15, 17, 18, 20 má medián $Q_1=17$; horná 21, 23, 24, 26, 41 má medián $Q_3=24$.',
          '$IQR=7$, hranice $17-10{,}5=6{,}5$ a $24+10{,}5=34{,}5$. Odľahlá je jediná hodnota 41.'] }
    ]
  });

  gen('v4-popisna', () => {
    const t = Math.random();
    if (t < 0.3) {
      const n = rnd(5, 8), x = Array.from({ length: n }, () => rnd(1, 25));
      const m = sum(x) / n, S = sum(x.map((v) => (v - m) ** 2)), s2 = S / (n - 1), askS = Math.random() < 0.4;
      return {
        answer: round(askS ? Math.sqrt(s2) : s2, 4), tol: 0.0002,
        q: `Namerali sme hodnoty ${x.join(', ')}. Vypočítaj výberov${askS ? 'ú smerodajnú odchýlku $s$' : 'ý rozptyl $s^2$'} (s delením $n-1$). ${R4}`,
        solution: `$n=${n}$, $\\bar{x}=\\frac{${sum(x)}}{${n}}=${nm(m, 4)}$. $\\sum x_i^2=${sum(x.map((v) => v * v))}$, teda $\\sum(x_i-\\bar{x})^2=\\sum x_i^2-n\\bar{x}^2=${nm(S, 4)}$.
          $s^2=\\frac{${nm(S, 4)}}{${n - 1}}${Number.isInteger(round(s2 * 1e4, 6)) ? '=' : '\\approx '}${nm(s2, 4)}$${askS ? `, $s=\\sqrt{s^2}\\approx ${dd(Math.sqrt(s2), 4)}$` : ''}.`,
        hint: '$s^2=\\frac{1}{n-1}\\sum(x_i-\\bar{x})^2=\\frac{1}{n-1}\\left(\\sum x_i^2-n\\bar{x}^2\\right)$.'
      };
    }
    if (t < 0.5) {
      const n = rnd(10, 40), m = rnd(5, 60), s2 = rnd(2, 40), Sx = n * m, Sx2 = (n - 1) * s2 + n * m * m, askS = Math.random() < 0.3;
      return {
        answer: round(askS ? Math.sqrt(s2) : s2, 4), tol: 0.0002,
        q: `Z výberu rozsahu $n=${n}$ poznáme len súčty $\\sum x_i=${ths(Sx)}$ a $\\sum x_i^2=${ths(Sx2)}$. Vypočítaj výberov${askS ? 'ú smerodajnú odchýlku $s$' : 'ý rozptyl $s^2$'}.${askS ? ' ' + R4 : ''}`,
        solution: `$\\bar{x}=\\frac{${ths(Sx)}}{${n}}=${m}$. $s^2=\\frac{\\sum x_i^2-n\\bar{x}^2}{n-1}=\\frac{${ths(Sx2)}-${n}\\cdot ${m}^2}{${n - 1}}=\\frac{${ths(Sx2 - n * m * m)}}{${n - 1}}=${s2}$${askS ? `, $s=\\sqrt{${s2}}\\approx ${dd(Math.sqrt(s2), 4)}$` : ''}.`,
        hint: 'Najprv $\\bar{x}=\\frac1n\\sum x_i$, potom $s^2=\\frac{\\sum x_i^2-n\\bar{x}^2}{n-1}$.'
      };
    }
    if (t < 0.78) {
      const n = rnd(8, 11), x = Array.from({ length: n }, () => rnd(10, 60)), q = quart(x), kind = rnd(0, 2);
      const what = ['dolný kvartil $Q_1$', 'horný kvartil $Q_3$', 'medzikvartilové rozpätie $IQR=Q_3-Q_1$'][kind];
      const ans = [q.Q1, q.Q3, q.Q3 - q.Q1][kind];
      return {
        answer: ans, tol: 0.001,
        q: `Dáta: ${shuffle(x).join(', ')}. Urči ${what}. Kvartily ber ako mediány dolnej a hornej polovice usporiadaných dát${n % 2 ? ' (medián do polovíc nezahŕňaj)' : ''}.`,
        solution: `Usporiadané dáta ($n=${n}$): $${list(q.s)}$. Dolná polovica $${list(q.lo)}$ má medián $Q_1=${nm(q.Q1, 2)}$, horná polovica $${list(q.hi)}$ má medián $Q_3=${nm(q.Q3, 2)}$.
          ${kind === 2 ? `$IQR=${nm(q.Q3, 2)}-${nm(q.Q1, 2)}=${nm(q.Q3 - q.Q1, 2)}$.` : ''}`,
        hint: 'Dáta usporiadaj, rozdeľ na dolnú a hornú polovicu a v každej nájdi medián.'
      };
    }
    let x, q, lo, hi, out;
    for (;;) {
      const n = rnd(9, 12), base = Array.from({ length: n }, () => rnd(20, 40)), k = rnd(0, 2);
      const extra = Array.from({ length: k }, () => (Math.random() < 0.7 ? rnd(55, 80) : rnd(0, 6)));
      x = base.concat(extra); q = quart(x);
      const iqr = q.Q3 - q.Q1; lo = q.Q1 - 1.5 * iqr; hi = q.Q3 + 1.5 * iqr;
      out = x.filter((v) => v < lo || v > hi);
      if (iqr > 0 && x.every((v) => Math.abs(v - lo) >= 0.5 && Math.abs(v - hi) >= 0.5)) break;
    }
    return {
      answer: out.length, tol: 0,
      q: `Dáta: ${shuffle(x).join(', ')}. Koľko odľahlých hodnôt obsahujú podľa pravidla $1{,}5\\,IQR$? Kvartily ber ako mediány dolnej a hornej polovice usporiadaných dát${x.length % 2 ? ' (medián do polovíc nezahŕňaj)' : ''}.`,
      solution: `Usporiadané: $${list(q.s)}$. $Q_1=${nm(q.Q1, 2)}$, $Q_3=${nm(q.Q3, 2)}$, $IQR=${nm(q.Q3 - q.Q1, 2)}$.
        Hranice: $${nm(q.Q1, 2)}-1{,}5\\cdot ${nm(q.Q3 - q.Q1, 2)}=${nm(lo, 2)}$ a $${nm(q.Q3, 2)}+1{,}5\\cdot ${nm(q.Q3 - q.Q1, 2)}=${nm(hi, 2)}$.
        ${out.length ? `Mimo intervalu ležia: ${out.join(', ')} — spolu ${out.length}.` : 'Všetky hodnoty ležia v tomto intervale, odľahlé hodnoty nie sú (odpoveď 0).'}`,
      hint: 'Vypočítaj $Q_1$, $Q_3$ a hranice $Q_1-1{,}5\\,IQR$, $Q_3+1{,}5\\,IQR$; spočítaj hodnoty mimo nich.'
    };
  });

  /* ======================= 11. ODHADY A INTERVALY SPOĽAHLIVOSTI ======================= */

  const CI_Z = gaussList(25, 15);

  fig('v4-intervaly', {
    controls: [
      { id: 'n', label: 'Rozsah výberu n', min: 4, max: 200, step: 1, value: 25 },
      { id: 'lev', label: 'Spoľahlivosť (1 = 90 %, 2 = 95 %, 3 = 99 %)', min: 1, max: 3, step: 1, value: 2 }
    ],
    draw: (v) => {
      const z = [1.6449, 1.96, 2.5758][v.lev - 1], pct = [90, 95, 99][v.lev - 1], mu = 50, sg = 10, se = sg / Math.sqrt(v.n);
      const p = plane(38, 62, 0, 26, 440, 300, 22);
      let back = xAxis(p, 2, 2) + `<line class="f-dash" x1="${n1(p.X(mu))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(mu))}" y2="${n1(p.Y(26))}"/>`;
      let clipped = '', miss = 0;
      CI_Z.forEach((zz, i) => {
        const m = mu + se * zz, ok = Math.abs(zz) <= z, y = n1(p.Y(i + 1));
        if (!ok) miss++;
        clipped += `<line class="${ok ? 'f-accent' : 'f-warn'}" x1="${n1(p.X(m - z * se))}" y1="${y}" x2="${n1(p.X(m + z * se))}" y2="${y}"/>
          <circle class="${ok ? 'f-dot' : 'f-vertex'}" cx="${n1(p.X(m))}" cy="${y}" r="3"/>`;
      });
      return {
        svg: svg(p, back, clipped, `<text class="f-math" x="${n1(p.X(mu) + 5)}" y="18">μ</text>`, 'Intervaly spoľahlivosti z opakovaných výberov'),
        readout: `${pct} %: z = ${sk(z, 4)} · šírka 2zσ/√n = ${sk(2 * z * se, 2)} · <span class="c-accent">μ nepokrýva ${miss} z 25 intervalov</span>`
      };
    }
  });

  lesson({
    id: 'v4-odhady', order: 110, title: 'Bodové odhady a intervaly spoľahlivosti',
    summary: 'Nevychýlené a konzistentné odhady, intervaly spoľahlivosti pre strednú hodnotu (známe σ, t-rozdelenie) a pre podiel, potrebný rozsah výberu.',
    theory: [
      `<p><strong>Bodový odhad</strong> parametra $\\theta$ je štatistika $T=T(X_1, \\dots, X_n)$. Odhad je <strong>nevychýlený</strong>, ak $E(T)=\\theta$, a <strong>konzistentný</strong>,
       ak $P(|T_n-\\theta|\\ge\\varepsilon)\\to 0$. Výberový priemer je nevychýlený a konzistentný odhad $\\mu$ ($E(\\bar{X})=\\mu$, $D(\\bar{X})=\\frac{\\sigma^2}{n}$).
       Výberový rozptyl $S^2$ s deliteľom $n-1$ je nevychýlený odhad $\\sigma^2$, kým $\\frac1n\\sum(X_i-\\bar{X})^2$ má strednú hodnotu $\\frac{n-1}{n}\\sigma^2$.
       Podiel $p$ odhadujeme relatívnou početnosťou $\\hat{p}=\\frac{k}{n}$.</p>`,
      `<p><strong>Interval spoľahlivosti</strong> so spoľahlivosťou $1-\\alpha$ je náhodný interval $(D, H)$, pre ktorý $P(D\\lt\\theta\\lt H)=1-\\alpha$. Pre výber z $N(\\mu, \\sigma^2)$:</p>
       <ul><li>pri <strong>známom</strong> $\\sigma$: $\\bar{x}\\pm z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}$,</li>
       <li>pri <strong>neznámom</strong> $\\sigma$: $\\bar{x}\\pm t_{1-\\alpha/2}(n-1)\\frac{s}{\\sqrt{n}}$, kde $t_p(k)$ je kvantil <strong>Studentovho t-rozdelenia</strong> s $k$ stupňami voľnosti
       (rozdelenie veličiny $\\frac{\\bar{X}-\\mu}{S}\\sqrt{n}$; má ťažšie chvosty ako $N(0, 1)$ a pre $k\\to\\infty$ k nemu konverguje),</li>
       <li>pre <strong>podiel</strong> (približne, pre veľké $n$): $\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$.</li></ul>
       <p>Interval sa zužuje ako $\\frac{1}{\\sqrt{n}}$: pre polovičnú šírku treba štvornásobný výber. Na dosiahnutie polovičnej šírky $\\Delta$ pri známom $\\sigma$ treba $n\\ge\\left(\\frac{z_{1-\\alpha/2}\\,\\sigma}{\\Delta}\\right)^2$.</p>`,
      `<table class="tbl tbl-auto"><tr><th>$k$</th><td>5</td><td>8</td><td>10</td><td>12</td><td>15</td><td>20</td><td>24</td><td>29</td><td>$\\infty$</td></tr>
       <tr><th>$t_{0{,}975}(k)$</th><td>2,571</td><td>2,306</td><td>2,228</td><td>2,179</td><td>2,131</td><td>2,086</td><td>2,064</td><td>2,045</td><td>1,960</td></tr></table>
       <p class="small">Výrez z tabuľky kvantilov t-rozdelenia. Pre $k\\to\\infty$ sa kvantily blížia kvantilom $N(0, 1)$.</p>`,
      { fig: 'v4-intervaly', caption: '25 intervalov spoľahlivosti z opakovaných výberov ($\\mu=50$, $\\sigma=10$). Oranžové intervaly skutočnú hodnotu $\\mu$ nepokrývajú. Väčšie $n$ intervaly zužuje, vyššia spoľahlivosť ich rozširuje.' }
    ],
    examples: [
      { task: 'Výška 25 náhodne vybraných mužov má priemer $\\bar{x}=178{,}4$ cm; $\\sigma=5$ cm je známe. Určte 95 % interval spoľahlivosti pre $\\mu$.',
        steps: ['$\\frac{\\sigma}{\\sqrt{n}}=\\frac{5}{5}=1$, $z_{0{,}975}=1{,}96$.',
          '$178{,}4\\pm 1{,}96\\cdot 1$, teda $\\mu\\in(176{,}44;\\ 180{,}36)$ cm.'] },
      { task: 'Z 16 meraní je $\\bar{x}=12{,}5$ a $s=2$; $\\sigma$ nepoznáme. Určte 95 % interval spoľahlivosti pre $\\mu$. Ďalej: v ankete 120 zo 400 respondentov odpovedalo „áno“ — určte 95 % interval pre podiel.',
        steps: ['$t_{0{,}975}(15)=2{,}131$, $\\frac{s}{\\sqrt{n}}=0{,}5$, polovičná šírka $2{,}131\\cdot 0{,}5\\approx 1{,}07$; interval $(11{,}43;\\ 13{,}57)$.',
          '$\\hat{p}=0{,}3$, $\\sqrt{\\frac{0{,}3\\cdot 0{,}7}{400}}\\approx 0{,}0229$, $1{,}96\\cdot 0{,}0229\\approx 0{,}0449$.',
          'Interval pre podiel: $(0{,}2551;\\ 0{,}3449)$.'] }
    ]
  });

  const LEVEL = { 90: [0.95, 1.645], 95: [0.975, 1.96], 99: [0.995, 2.576] };

  gen('v4-odhady', () => {
    const t = Math.random();
    if (t < 0.28) {
      const r = pick([4, 5, 6, 8, 10]), se = pick([0.5, 1, 1.5, 2, 2.5, 0.25]), sg = se * r, n = r * r;
      const lev = pick([90, 95, 99]), [q, z] = LEVEL[lev], m = round(rnd(200, 900) / 10 + pick([0, 50, 100]), 1), h = z * se;
      return {
        type: 'tuple', answer: [round(m - h, 2), round(m + h, 2)], tol: 0.011, placeholder: 'dolná; horná',
        q: `Výber rozsahu $n=${n}$ z normálneho rozdelenia so známou smerodajnou odchýlkou $\\sigma=${nm(sg)}$ má priemer $\\bar{x}=${nm(m, 1)}$.
          Urči ${lev} % interval spoľahlivosti pre $\\mu$. Použi $z_{${nm(q, 3)}}=${nm(z, 3)}$. Hranice zaokrúhli na 2 desatinné miesta a zadaj ich v tvare „dolná; horná“.`,
        solution: `$\\frac{\\sigma}{\\sqrt{n}}=\\frac{${nm(sg)}}{${r}}=${nm(se)}$, polovičná šírka $${nm(z, 3)}\\cdot ${nm(se)}=${nm(h, 4)}$.
          Interval: $${nm(m, 1)}\\pm ${nm(h, 4)}$, teda $(${dd(m - h, 2)};\\ ${dd(m + h, 2)})$.`,
        hint: 'Pri známom $\\sigma$: $\\bar{x}\\pm z_{1-\\alpha/2}\\,\\sigma/\\sqrt{n}$.'
      };
    }
    if (t < 0.55) {
      const n = rnd(6, 26), df = n - 1, lev = pick([95, 95, 90, 99]);
      const tq = lev === 95 ? T975[df - 1] : lev === 90 ? T95[df - 1] : T995[df - 1], q = LEVEL[lev][0];
      const s = rnd(8, 60) / 10, m = round(rnd(100, 800) / 10, 1), se = s / Math.sqrt(n), h = tq * se;
      return {
        type: 'tuple', answer: [round(m - h, 2), round(m + h, 2)], tol: 0.012, placeholder: 'dolná; horná',
        q: `Výber rozsahu $n=${n}$ z normálneho rozdelenia má priemer $\\bar{x}=${nm(m, 1)}$ a výberovú smerodajnú odchýlku $s=${nm(s, 1)}$; $\\sigma$ nepoznáme.
          Urči ${lev} % interval spoľahlivosti pre $\\mu$. Použi $t_{${nm(q, 3)}}(${df})=${dd(tq, 3)}$. Hranice zaokrúhli na 2 desatinné miesta a zadaj ich v tvare „dolná; horná“.`,
        solution: `$\\frac{s}{\\sqrt{n}}=\\frac{${nm(s, 1)}}{\\sqrt{${n}}}\\approx ${dd(se, 4)}$, polovičná šírka $${dd(tq, 3)}\\cdot ${dd(se, 4)}\\approx ${dd(h, 4)}$.
          Interval: $(${dd(m - h, 2)};\\ ${dd(m + h, 2)})$.`,
        hint: 'Pri neznámom $\\sigma$ nahradíme $\\sigma$ hodnotou $s$ a kvantil $z$ kvantilom t-rozdelenia s $n-1$ stupňami voľnosti.'
      };
    }
    if (t < 0.8) {
      const n = pick([100, 200, 250, 400, 500, 800, 1000]), ph = pick([0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.45, 0.6, 0.35]), k = Math.round(n * ph);
      const lev = pick([95, 95, 90, 99]), [q, z] = LEVEL[lev], se = Math.sqrt(ph * (1 - ph) / n), h = z * se;
      return {
        type: 'tuple', answer: [round(ph - h, 4), round(ph + h, 4)], tol: 0.0006, placeholder: 'dolná; horná',
        q: `V prieskume odpovedalo kladne ${k} z ${n} náhodne vybraných respondentov. Urči približný ${lev} % interval spoľahlivosti pre podiel $p$ v populácii.
          Použi $z_{${nm(q, 3)}}=${nm(z, 3)}$. Hranice zaokrúhli na 4 desatinné miesta a zadaj ich v tvare „dolná; horná“.`,
        solution: `$\\hat{p}=\\frac{${k}}{${n}}=${nm(ph)}$, $\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}=\\sqrt{\\frac{${nm(ph)}\\cdot ${nm(1 - ph)}}{${n}}}\\approx ${dd(se, 5)}$, polovičná šírka $${nm(z, 3)}\\cdot ${dd(se, 5)}\\approx ${dd(h, 4)}$.
          Interval: $(${dd(ph - h, 4)};\\ ${dd(ph + h, 4)})$.`,
        hint: 'Pre podiel: $\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\hat{p}(1-\\hat{p})/n}$.'
      };
    }
    let lev, q, z, sg, D, v;
    do {
      lev = pick([90, 95, 99]); [q, z] = LEVEL[lev]; sg = pick([2, 3, 4, 5, 6, 8, 10, 12, 15]); D = pick([0.5, 1, 1.5, 2, 2.5, 3]);
      v = (z * sg / D) ** 2;
    } while (Math.abs(v - Math.round(v)) < 0.02 || v < 5 || v > 3000);
    const n = Math.ceil(v);
    return {
      answer: n, tol: 0,
      q: `Smerodajná odchýlka meraní je $\\sigma=${sg}$. Aký najmenší rozsah výberu $n$ zaručí, že ${lev} % interval spoľahlivosti pre $\\mu$ bude mať polovičnú šírku najviac $${nm(D)}$? Použi $z_{${nm(q, 3)}}=${nm(z, 3)}$.`,
      solution: `Požadujeme $z\\frac{\\sigma}{\\sqrt{n}}\\le\\Delta$, teda $n\\ge\\left(\\frac{${nm(z, 3)}\\cdot ${sg}}{${nm(D)}}\\right)^2\\approx ${dd(v, 2)}$. Najmenšie celé číslo je $n=${n}$.`,
      hint: 'Z podmienky $z\\,\\sigma/\\sqrt{n}\\le\\Delta$ vyjadri $n$ a zaokrúhli nahor.'
    };
  });

  /* ======================= 12. TESTOVANIE HYPOTÉZ ======================= */

  fig('v4-kriticky-obor', {
    draw: () => {
      const p = plane(-4, 4, -0.05, 0.45, 440, 230, 24), zc = 1.96;
      const clipped = `<path class="f-fill3 f-outline3" d="${areaPath(p, npdf, -4.2, -zc)}"/><path class="f-fill3 f-outline3" d="${areaPath(p, npdf, zc, 4.2)}"/>
        <path class="f-accent" d="${curvePath(p, npdf, -4, 4)}"/>
        <line class="f-dash" x1="${n1(p.X(-zc))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(-zc))}" y2="${n1(p.Y(0.33))}"/>
        <line class="f-dash" x1="${n1(p.X(zc))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(zc))}" y2="${n1(p.Y(0.33))}"/>
        <circle class="f-dot" cx="${n1(p.X(-2.2))}" cy="${n1(p.Y(0))}" r="6"/>`;
      const front = `<text class="f-small" x="${n1(p.X(-zc))}" y="${n1(p.Y(0.35))}" text-anchor="middle">−1,96</text>
        <text class="f-small" x="${n1(p.X(zc))}" y="${n1(p.Y(0.35))}" text-anchor="middle">1,96</text>
        <text class="f-small" x="${n1(p.X(-3.1))}" y="${n1(p.Y(0.1))}" text-anchor="middle">α/2 = 0,025</text>
        <text class="f-small" x="${n1(p.X(3.1))}" y="${n1(p.Y(0.1))}" text-anchor="middle">α/2 = 0,025</text>
        <text class="f-text" x="${n1(p.X(0))}" y="${n1(p.Y(0.2))}" text-anchor="middle">H₀ nezamietame</text>
        <text class="f-small c-accent" x="${n1(p.X(-2.2))}" y="${n1(p.Y(0) - 12)}" text-anchor="middle">z = −2,2</text>`;
      return svg(p, xAxis(p, 1, 1), clipped, front, 'Kritický obor obojstranného z-testu na hladine 0,05');
    }
  });

  lesson({
    id: 'v4-testy', order: 120, title: 'Testovanie štatistických hypotéz',
    summary: 'Nulová a alternatívna hypotéza, chyby 1. a 2. druhu, hladina významnosti, p-hodnota, z-test, t-test a χ²-test dobrej zhody.',
    theory: [
      `<p><strong>Nulová hypotéza</strong> $H_0$ (napr. $\\mu=\\mu_0$) je tvrdenie, ktoré testujeme; <strong>alternatívna</strong> $H_1$ je obojstranná ($\\mu\\ne\\mu_0$) alebo jednostranná ($\\mu&gt;\\mu_0$, resp. $\\mu\\lt\\mu_0$).
       Z dát vypočítame <strong>testovú štatistiku</strong> $T$; ak padne do <strong>kritického oboru</strong> $W$, $H_0$ zamietame, inak ju nezamietame (čo neznamená, že sme ju dokázali).</p>
       <table class="tbl tbl-auto"><tr><th></th><th>$H_0$ platí</th><th>$H_0$ neplatí</th></tr>
       <tr><th>zamietneme $H_0$</th><td>chyba 1. druhu, pravdepodobnosť $\\alpha$</td><td>správne (sila testu $1-\\beta$)</td></tr>
       <tr><th>nezamietneme $H_0$</th><td>správne</td><td>chyba 2. druhu, pravdepodobnosť $\\beta$</td></tr></table>
       <p><strong>Hladina významnosti</strong> $\\alpha$ (zvyčajne $0{,}05$) je zvolená pravdepodobnosť chyby 1. druhu. <strong>p-hodnota</strong> je pravdepodobnosť, že za platnosti $H_0$ dostaneme štatistiku
       aspoň taku extrémnu ako pozorovanú; $H_0$ zamietame, ak $p\\le\\alpha$.</p>`,
      `<p><strong>z-test</strong> ($\\sigma$ známe): $Z=\\frac{\\bar{X}-\\mu_0}{\\sigma}\\sqrt{n}\\sim N(0, 1)$ za $H_0$. Pri $H_1: \\mu\\ne\\mu_0$ zamietame, ak $|Z|\\ge z_{1-\\alpha/2}$, a $p=2(1-\\Phi(|z|))$;
       pri $H_1: \\mu&gt;\\mu_0$ zamietame, ak $Z\\ge z_{1-\\alpha}$, a $p=1-\\Phi(z)$. Pre podiel: $Z=\\frac{\\hat{p}-p_0}{\\sqrt{p_0(1-p_0)/n}}$.
       <strong>t-test</strong> ($\\sigma$ neznáme): $T=\\frac{\\bar{X}-\\mu_0}{S}\\sqrt{n}\\sim t(n-1)$; kritické hodnoty sú $t_{1-\\alpha/2}(n-1)$, resp. $t_{1-\\alpha}(n-1)$.</p>`,
      { fig: 'v4-kriticky-obor', caption: 'Obojstranný z-test na hladine $\\alpha=0{,}05$: kritický obor tvoria oba chvosty za $\\pm 1{,}96$. Pozorovaná hodnota $z=-2{,}2$ v ňom leží, preto $H_0$ zamietame.' },
      `<p><strong>χ²-test dobrej zhody</strong> overuje, či dáta zodpovedajú zadanému rozdeleniu s pravdepodobnosťami $p_1, \\dots, p_k$ kategórií. Pri pozorovaných početnostiach $N_i$ a očakávaných $np_i$ je
       $$\\chi^2=\\sum_{i=1}^k\\frac{(N_i-np_i)^2}{np_i},$$
       ktorá má za $H_0$ približne rozdelenie $\\chi^2(k-1)$ (pri $r$ odhadnutých parametroch $\\chi^2(k-1-r)$); vyžaduje sa $np_i\\ge 5$. $H_0$ zamietame, ak $\\chi^2\\ge\\chi^2_{1-\\alpha}(k-1)$.
       Kvantily $\\chi^2_{0{,}95}(k)$ pre $k=1, \\dots, 6$: $3{,}841$; $5{,}991$; $7{,}815$; $9{,}488$; $11{,}070$; $12{,}592$.</p>`
    ],
    examples: [
      { task: 'Výrobca uvádza strednú hmotnosť 500 g, $\\sigma=6$ g. Priemer 36 vážení je $497{,}8$ g. Testujte $H_0: \\mu=500$ proti $H_1: \\mu\\ne 500$ na hladine $0{,}05$ a určte p-hodnotu ($\\Phi(2{,}2)=0{,}9861$).',
        steps: ['$Z=\\frac{497{,}8-500}{6}\\sqrt{36}=-2{,}2$.',
          '$|Z|=2{,}2\\ge 1{,}96$, preto $H_0$ zamietame.',
          '$p=2(1-\\Phi(2{,}2))=2\\cdot 0{,}0139=0{,}0278\\lt 0{,}05$ — rovnaký záver.'] },
      { task: 'Kocku sme hodili 120-krát, jednotlivé čísla padli 25, 17, 15, 23, 24, 16-krát. Je kocka na hladine $0{,}05$ v súlade s hypotézou, že je pravidelná?',
        steps: ['Očakávané početnosti $120\\cdot\\frac16=20$. Odchýlky $5, -3, -5, 3, 4, -4$.',
          '$\\chi^2=\\frac{25+9+25+9+16+16}{20}=5$.',
          '$\\chi^2_{0{,}95}(5)=11{,}070$; $5\\lt 11{,}07$, preto $H_0$ nezamietame — dáta neodporujú pravidelnosti kocky.'] }
    ]
  });

  const ZTEST_CTX = [
    { mu: 500, unit: 'g', txt: 'Hmotnosť balenia' },
    { mu: 120, unit: 'mm', txt: 'Dĺžka súčiastky' },
    { mu: 250, unit: 'kPa', txt: 'Tlak v pneumatike' },
    { mu: 30, unit: 'min', txt: 'Doba spracovania objednávky' }
  ];
  const H1TXT = (mu0, side) => (side === 0 ? `\\mu\\ne ${mu0}` : side === 1 ? `\\mu&gt;${mu0}` : `\\mu\\lt ${mu0}`);

  gen('v4-testy', () => {
    const t = Math.random();
    const zData = () => {
      const c = pick(ZTEST_CTX), r = pick([4, 5, 6, 8, 10]), se = pick([0.25, 0.5, 1, 1.5, 2]), sg = se * r, n = r * r;
      const z = round(rnd(5, 32) / 10 * pick([1, -1]), 1), m = round(c.mu + z * se, 3);
      return { c, n, sg, se, z, m, head: `${c.txt} má normálne rozdelenie so známou smerodajnou odchýlkou $\\sigma=${nm(sg)}$ ${c.unit}. Na výbere rozsahu $n=${n}$ sme namerali priemer $\\bar{x}=${nm(m, 3)}$ ${c.unit}.` };
    };
    if (t < 0.2) {
      if (Math.random() < 0.3) {
        const n = pick([100, 400]), step = n === 100 ? 0.2 : 0.1, z = round(rnd(3, 14) * step * pick([1, -1]), 1);
        const se = n === 100 ? 0.05 : 0.025, k = Math.round(n * (0.5 + z * se));
        return {
          answer: z, tol: 0.006, signed: true,
          q: `Overujeme, či je minca pravidelná: $H_0: p=0{,}5$. Z ${n} hodov padol znak ${k}-krát. Vypočítaj hodnotu testovej štatistiky $Z=\\frac{\\hat{p}-p_0}{\\sqrt{p_0(1-p_0)/n}}$. ${R2}`,
          solution: `$\\hat{p}=\\frac{${k}}{${n}}=${nm(k / n)}$, $\\sqrt{\\frac{0{,}5\\cdot 0{,}5}{${n}}}=${nm(se)}$, $Z=\\frac{${nm(k / n)}-0{,}5}{${nm(se)}}=${nm(z, 2)}$.`,
          hint: 'Dosaď relatívnu početnosť $\\hat{p}=k/n$ a $p_0=0{,}5$ do vzorca.'
        };
      }
      const d = zData();
      return {
        answer: d.z, tol: 0.006, signed: true,
        q: `${d.head} Testujeme $H_0: \\mu=${d.c.mu}$. Vypočítaj hodnotu testovej štatistiky $Z=\\frac{\\bar{x}-\\mu_0}{\\sigma}\\sqrt{n}$. ${R2}`,
        solution: `$Z=\\frac{${nm(d.m, 3)}-${d.c.mu}}{${nm(d.sg)}}\\cdot\\sqrt{${d.n}}=\\frac{${nm(d.m - d.c.mu, 3)}}{${nm(d.se)}}=${nm(d.z, 2)}$.`,
        hint: '$\\frac{\\sigma}{\\sqrt{n}}$ je smerodajná odchýlka priemeru; $Z$ udáva, o koľko takých jednotiek je $\\bar{x}$ vzdialený od $\\mu_0$.'
      };
    }
    if (t < 0.4) {
      const d = zData(), side = pick([0, 0, 1, 2]);
      const sz = side === 2 ? -Math.abs(d.z) : side === 1 ? Math.abs(d.z) : d.z;
      const m = round(d.c.mu + sz * d.se, 3), Pz = PhiT(Math.abs(sz)), p = side === 0 ? 2 * (1 - Pz) : 1 - Pz;
      return {
        answer: round(p, 4), tol: 0.0002,
        q: `${d.c.txt} má normálne rozdelenie so známou smerodajnou odchýlkou $\\sigma=${nm(d.sg)}$ ${d.c.unit}. Na výbere rozsahu $n=${d.n}$ sme namerali priemer $\\bar{x}=${nm(m, 3)}$ ${d.c.unit}.
          Testujeme $H_0: \\mu=${d.c.mu}$ proti $H_1: ${H1TXT(d.c.mu, side)}$. Vypočítaj p-hodnotu z-testu. Použi ${phiList([sz])}. ${R4}`,
        solution: `$z=\\frac{${nm(m, 3)}-${d.c.mu}}{${nm(d.sg)}}\\sqrt{${d.n}}=${nm(sz, 2)}$. ${side === 0
          ? `Obojstranná alternatíva: $p=2(1-\\Phi(|z|))=2(1-${dd(Pz, 4)})=${dd(p, 4)}$.`
          : side === 1 ? `Pravostranná alternatíva: $p=P(Z\\ge z)=1-\\Phi(${nm(sz, 2)})=${dd(p, 4)}$.`
            : `Ľavostranná alternatíva: $p=P(Z\\le z)=\\Phi(${nm(sz, 2)})=1-\\Phi(${nm(-sz, 2)})=${dd(p, 4)}$.`}
          ${p <= 0.05 ? 'Na hladine $0{,}05$ by sme $H_0$ zamietli.' : 'Na hladine $0{,}05$ by sme $H_0$ nezamietli.'}`,
        hint: 'Najprv vypočítaj $z$. Pri obojstrannej alternatíve sa p-hodnota počíta z oboch chvostov: $2(1-\\Phi(|z|))$.'
      };
    }
    if (t < 0.6) {
      let n, df, s, m, T, crit, side, mu0, c;
      do {
        c = pick(ZTEST_CTX); mu0 = c.mu; n = rnd(8, 26); df = n - 1; side = pick([0, 0, 1, 2]);
        crit = side === 0 ? T975[df - 1] : T95[df - 1];
        s = rnd(10, 60) / 10;
        const target = (crit + (Math.random() * 2 - 1) * 1.2) * pick([1, -1]);
        m = round(mu0 + target * s / Math.sqrt(n), 2);
        T = (m - mu0) / s * Math.sqrt(n);
      } while (Math.abs(Math.abs(T) - crit) < 0.12 || Math.abs(T) < 0.2);
      const rej = side === 0 ? Math.abs(T) >= crit : side === 1 ? T >= crit : T <= -crit;
      const q = side === 0 ? '0{,}975' : '0{,}95';
      return {
        type: 'choice', options: ['zamietame H₀', 'nezamietame H₀'], answer: rej ? 'zamietame H₀' : 'nezamietame H₀',
        q: `${c.txt} má normálne rozdelenie s neznámym rozptylom. Z výberu rozsahu $n=${n}$ máme $\\bar{x}=${nm(m, 2)}$ ${c.unit} a $s=${nm(s, 1)}$ ${c.unit}.
          Na hladine $\\alpha=0{,}05$ testuj $H_0: \\mu=${mu0}$ proti $H_1: ${H1TXT(mu0, side)}$. Kritická hodnota: $t_{${q}}(${df})=${dd(crit, 3)}$.`,
        solution: `$T=\\frac{\\bar{x}-\\mu_0}{s}\\sqrt{n}=\\frac{${nm(m, 2)}-${mu0}}{${nm(s, 1)}}\\sqrt{${n}}\\approx ${dd(T, 3)}$.
          ${side === 0 ? `Kritický obor: $|T|\\ge ${dd(crit, 3)}$.` : side === 1 ? `Kritický obor: $T\\ge ${dd(crit, 3)}$.` : `Kritický obor: $T\\le -${dd(crit, 3)}$.`}
          ${rej ? 'Hodnota v ňom leží, $H_0$ <strong>zamietame</strong>.' : 'Hodnota v ňom neleží, $H_0$ <strong>nezamietame</strong>.'}`,
        hint: 'Vypočítaj $T=\\frac{\\bar{x}-\\mu_0}{s}\\sqrt{n}$ a porovnaj s kritickou hodnotou podľa tvaru alternatívy.'
      };
    }
    if (t < 0.9) {
      const sc = pick([
        { k: 6, ps: [1, 1, 1, 1, 1, 1], ns: [60, 120, 180, 240], txt: (n) => `Kocku sme hodili ${n}-krát. Čísla 1 až 6 padli postupne`, h0: 'kocka je pravidelná' },
        { k: 4, ps: [9, 3, 3, 1], ns: [160, 320], txt: (n) => `Pri kontrole ${n} rastlín sme zistili štyri fenotypy s početnosťami`, h0: 'fenotypy sú v pomere 9 : 3 : 3 : 1' },
        { k: 3, ps: [1, 2, 1], ns: [80, 100, 200], txt: (n) => `Medzi ${n} potomkami sme zistili tri genotypy s početnosťami`, h0: 'genotypy sú v pomere 1 : 2 : 1' },
        { k: 3, ps: [5, 3, 2], ns: [100, 200, 300], txt: (n) => `Firma tvrdí, že jej trh sa delí v pomere 50 % : 30 % : 20 % medzi produkty A, B, C. Z ${n} predajov pripadlo na A, B, C postupne`, h0: 'podiely sú 50 %, 30 % a 20 %' },
        { k: 5, ps: [1, 1, 1, 1, 1], ns: [100, 150, 200], txt: (n) => `Z ${n} pracovných úrazov za rok pripadlo na pondelok až piatok postupne`, h0: 'úrazy sú rovnomerne rozdelené medzi pracovné dni' }
      ]);
      const n = pick(sc.ns), tot = sum(sc.ps), E = sc.ps.map((p) => n * p / tot);
      let O, chi;
      for (;;) {
        const d = E.slice(0, -1).map((e) => rnd(-Math.floor(0.4 * e), Math.floor(0.4 * e)));
        const last = -sum(d);
        if (Math.abs(last) > 0.45 * E[E.length - 1]) continue;
        O = E.map((e, i) => e + (i < d.length ? d[i] : last));
        chi = sum(O.map((o, i) => (o - E[i]) ** 2 / E[i]));
        if (chi > 0.3) break;
      }
      const crit = CHI95[sc.k - 2], terms = O.map((o, i) => `\\frac{(${o}-${E[i]})^2}{${E[i]}}`).join('+');
      const base = `${sc.txt(n)} ${O.join(', ')}. Testujeme $H_0$: ${sc.h0}.`;
      if (t < 0.75 || Math.abs(chi - crit) < 0.3) {
        return {
          answer: round(chi, 2), tol: 0.011,
          q: `${base} Vypočítaj hodnotu štatistiky $\\chi^2$ testu dobrej zhody. ${R2}`,
          solution: `Očakávané početnosti $np_i$: ${E.join(', ')}. $\\chi^2=${terms}\\approx ${dd(chi, 2)}$.`,
          hint: 'Očakávané početnosti sú $n\\,p_i$; sčítaj $\\frac{(N_i-np_i)^2}{np_i}$ cez všetky kategórie.'
        };
      }
      const rej = chi >= crit;
      return {
        type: 'choice', options: ['zamietame H₀', 'nezamietame H₀'], answer: rej ? 'zamietame H₀' : 'nezamietame H₀',
        q: `${base} Rozhodni na hladine $\\alpha=0{,}05$. Kritická hodnota: $\\chi^2_{0{,}95}(${sc.k - 1})=${dd(crit, 3)}$.`,
        solution: `Očakávané početnosti: ${E.join(', ')}. $\\chi^2=${terms}\\approx ${dd(chi, 2)}$. Počet stupňov voľnosti $k-1=${sc.k - 1}$.
          ${rej ? `$${dd(chi, 2)}\\ge ${dd(crit, 3)}$, $H_0$ <strong>zamietame</strong>.` : `$${dd(chi, 2)}\\lt ${dd(crit, 3)}$, $H_0$ <strong>nezamietame</strong>.`}`,
        hint: 'Vypočítaj $\\chi^2=\\sum\\frac{(N_i-np_i)^2}{np_i}$ a porovnaj ho s kvantilom $\\chi^2_{0{,}95}(k-1)$.'
      };
    }
    const sc = pick([
      { h0: 'nový liek nemá žiadny účinok', yes: 'liek v skutočnosti účinkuje', no: 'liek v skutočnosti neúčinkuje' },
      { h0: 'automat plní priemerne 500 g', yes: 'automat v skutočnosti plní menej', no: 'automat v skutočnosti plní priemerne 500 g' },
      { h0: 'obžalovaný je nevinný', yes: 'obžalovaný je v skutočnosti vinný', no: 'obžalovaný je v skutočnosti nevinný' }
    ]);
    const h0true = Math.random() < 0.5, rej = Math.random() < 0.5;
    const ans = h0true && rej ? 'chyba 1. druhu' : !h0true && !rej ? 'chyba 2. druhu' : 'žiadna chyba';
    return {
      type: 'choice', options: ['chyba 1. druhu', 'chyba 2. druhu', 'žiadna chyba'], answer: ans,
      q: `Testujeme $H_0$: ${sc.h0}. Predpokladajme, že ${h0true ? sc.no : sc.yes}, a test $H_0$ ${rej ? 'zamietol' : 'nezamietol'}. O aký výsledok ide?`,
      solution: `$H_0$ ${h0true ? 'platí' : 'neplatí'} a test ju ${rej ? 'zamietol' : 'nezamietol'}. ${ans === 'chyba 1. druhu' ? 'Zamietnutie pravdivej $H_0$ je <strong>chyba 1. druhu</strong> (jej pravdepodobnosť kontroluje hladina $\\alpha$).'
        : ans === 'chyba 2. druhu' ? 'Nezamietnutie nepravdivej $H_0$ je <strong>chyba 2. druhu</strong> (pravdepodobnosť $\\beta$).' : 'Rozhodnutie zodpovedá skutočnosti, ide o <strong>správne rozhodnutie</strong>.'}`,
      hint: 'Chyba 1. druhu: zamietneme pravdivú $H_0$. Chyba 2. druhu: nezamietneme nepravdivú $H_0$.'
    };
  });

  /* ======================= 13. KORELÁCIA A REGRESIA ======================= */

  const REG_EPS = gaussList(12, 4242);

  fig('v4-regresia', {
    controls: [{ id: 'noise', label: 'Veľkosť šumu', min: 0, max: 3, step: 0.1, value: 1 }],
    draw: (v) => {
      const xs = Array.from({ length: 12 }, (_, i) => i + 0.5 * (i % 3)), ys = xs.map((x, i) => 2 + 0.8 * x + v.noise * REG_EPS[i]);
      const n = xs.length, mx = sum(xs) / n, my = sum(ys) / n;
      const Sxx = sum(xs.map((x) => (x - mx) ** 2)), Sxy = sum(xs.map((x, i) => (x - mx) * (ys[i] - my))), Syy = sum(ys.map((y) => (y - my) ** 2));
      const b = Sxy / Sxx, a = my - b * mx, r = Syy > 1e-12 ? Sxy / Math.sqrt(Sxx * Syy) : 1;
      const p = plane(-0.5, 13, -2, 16, 420, 280, 24);
      let back = xAxis(p, 1, 2) + `<line class="f-axis" x1="${n1(p.X(0))}" y1="${n1(p.Y(-2))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(16))}"/>`;
      for (let y = 5; y <= 15; y += 5) back += `<text class="f-small" x="${n1(p.X(0) - 5)}" y="${n1(p.Y(y) + 4)}" text-anchor="end">${y}</text><line class="f-grid" x1="${n1(p.X(0))}" y1="${n1(p.Y(y))}" x2="${n1(p.X(13))}" y2="${n1(p.Y(y))}"/>`;
      let clipped = '';
      xs.forEach((x, i) => {
        clipped += `<line class="f-dash" x1="${n1(p.X(x))}" y1="${n1(p.Y(ys[i]))}" x2="${n1(p.X(x))}" y2="${n1(p.Y(a + b * x))}"/>`;
      });
      clipped += `<line class="f-accent" x1="${n1(p.X(-0.5))}" y1="${n1(p.Y(a - 0.5 * b))}" x2="${n1(p.X(13))}" y2="${n1(p.Y(a + 13 * b))}"/>`;
      xs.forEach((x, i) => { clipped += `<circle class="f-dot" cx="${n1(p.X(x))}" cy="${n1(p.Y(ys[i]))}" r="4"/>`; });
      return {
        svg: svg(p, back, clipped, '', 'Bodový graf s regresnou priamkou a rezíduami'),
        readout: `<span class="c-accent">ŷ = ${sk(a, 2)} + ${sk(b, 3)}x</span> · r = ${sk(r, 3)} · R² = ${sk(r * r, 3)} (skutočná priamka y = 2 + 0,8x)`
      };
    }
  });

  lesson({
    id: 'v4-regresia', order: 130, title: 'Korelácia a lineárna regresia',
    summary: 'Výberový korelačný koeficient, regresná priamka metódou najmenších štvorcov, rezíduá a koeficient determinácie.',
    theory: [
      `<p>Pre dvojice $(x_i, y_i)$, $i=1, \\dots, n$, označme
       $$S_{xx}=\\sum(x_i-\\bar{x})^2=\\sum x_i^2-n\\bar{x}^2,\\quad S_{yy}=\\sum(y_i-\\bar{y})^2,\\quad S_{xy}=\\sum(x_i-\\bar{x})(y_i-\\bar{y})=\\sum x_iy_i-n\\bar{x}\\bar{y}.$$
       <strong>Výberový (Pearsonov) korelačný koeficient</strong> $r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}\\in[-1, 1]$ meria silu lineárneho vzťahu. $r\\approx 0$ neznamená nezávislosť
       (vzťah môže byť nelineárny) a vysoké $|r|$ nedokazuje príčinnú súvislosť.</p>`,
      `<p><strong>Metóda najmenších štvorcov:</strong> priamku $\\hat{y}=a+bx$ volíme tak, aby súčet štvorcov rezíduí $\\sum(y_i-a-bx_i)^2$ bol minimálny.
       Položením parciálnych derivácií podľa $a$ a $b$ rovných nule (normálne rovnice) dostaneme
       $$b=\\frac{S_{xy}}{S_{xx}},\\qquad a=\\bar{y}-b\\bar{x}.$$
       Regresná priamka prechádza bodom $(\\bar{x}, \\bar{y})$, rezíduá $e_i=y_i-\\hat{y}_i$ majú súčet 0 a $b=r\\frac{s_y}{s_x}$, teda znamienko smernice je znamienkom $r$.</p>`,
      `<p><strong>Rozklad variability:</strong> $\\underbrace{\\sum(y_i-\\bar{y})^2}_{SST}=\\underbrace{\\sum(\\hat{y}_i-\\bar{y})^2}_{SSR}+\\underbrace{\\sum(y_i-\\hat{y}_i)^2}_{SSE}$.
       <strong>Koeficient determinácie</strong> $R^2=\\frac{SSR}{SST}=1-\\frac{SSE}{SST}$ udáva podiel variability $y$ vysvetlený modelom; pri jednoduchej lineárnej regresii $R^2=r^2$.</p>`,
      { fig: 'v4-regresia', caption: 'Body vznikli z priamky $y=2+0{,}8x$ s pridaným náhodným šumom. Modrá je regresná priamka, čiarkované úsečky sú rezíduá. Pri väčšom šume klesá $r$ aj $R^2$ a odhad smernice je menej presný.' }
    ],
    examples: [
      { task: 'Pre dáta $x$: 1, 2, 3, 4, 5 a $y$: 2, 4, 5, 4, 5 určte regresnú priamku, $r$ a $R^2$.',
        steps: ['$\\bar{x}=3$, $\\bar{y}=4$. Odchýlky $x$: $-2, -1, 0, 1, 2$; odchýlky $y$: $-2, 0, 1, 0, 1$.',
          '$S_{xx}=10$, $S_{xy}=4+0+0+0+2=6$, $S_{yy}=4+0+1+0+1=6$.',
          '$b=\\frac{6}{10}=0{,}6$, $a=4-0{,}6\\cdot 3=2{,}2$, teda $\\hat{y}=2{,}2+0{,}6x$.',
          '$r=\\frac{6}{\\sqrt{60}}\\approx 0{,}7746$, $R^2=r^2=0{,}6$ — model vysvetľuje 60 % variability $y$.'] },
      { task: 'Z $n=10$ dvojíc poznáme $\\sum x_i=50$, $\\sum y_i=120$, $\\sum x_i^2=310$, $\\sum x_iy_i=660$. Určte regresnú priamku a predikciu pre $x=8$.',
        steps: ['$\\bar{x}=5$, $\\bar{y}=12$, $S_{xx}=310-10\\cdot 25=60$, $S_{xy}=660-10\\cdot 5\\cdot 12=60$.',
          '$b=1$, $a=12-1\\cdot 5=7$, $\\hat{y}=7+x$.',
          '$\\hat{y}(8)=15$.'] }
    ]
  });

  const regTable = (xs, ys) => `<table class="tbl tbl-auto"><tr><th>$x_i$</th>${xs.map((x) => `<td>$${x}$</td>`).join('')}</tr>
    <tr><th>$y_i$</th>${ys.map((y) => `<td>$${y}$</td>`).join('')}</tr></table>`;
  const regStats = (xs, ys) => {
    const n = xs.length, mx = sum(xs) / n, my = sum(ys) / n;
    const Sxx = sum(xs.map((x) => (x - mx) ** 2)), Syy = sum(ys.map((y) => (y - my) ** 2)), Sxy = sum(xs.map((x, i) => (x - mx) * (ys[i] - my)));
    return { n, mx, my, Sxx, Syy, Sxy, b: Sxy / Sxx, a: my - Sxy / Sxx * mx, r: Sxy / Math.sqrt(Sxx * Syy) };
  };

  gen('v4-regresia', () => {
    const t = Math.random();
    if (t < 0.5) {
      let xs, ys, st;
      do {
        xs = pick([[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [0, 1, 2, 3, 4, 5], [1, 3, 4, 6, 8], [1, 2, 4, 5, 8]]);
        const b0 = pick([-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 3]), a0 = rnd(2, 15);
        ys = xs.map((x) => Math.round(a0 + b0 * x + rnd(-2, 2)));
        st = regStats(xs, ys);
      } while (st.Syy < 4 || Math.abs(st.r) < 0.3);
      const head = `Pre dvojice $(x_i, y_i)$ z tabuľky${regTable(xs, ys)}`;
      const base = `$\\bar{x}=${nm(st.mx)}$, $\\bar{y}=${nm(st.my)}$, $S_{xx}=${nm(st.Sxx)}$, $S_{xy}=${nm(st.Sxy)}$`;
      if (t < 0.28) {
        return {
          type: 'tuple', answer: [round(st.a, 3), round(st.b, 3)], tol: 0.002, placeholder: 'a; b', signed: true,
          q: `${head}urči metódou najmenších štvorcov koeficienty regresnej priamky $\\hat{y}=a+bx$. Zadaj ich v tvare „a; b“ zaokrúhlené na 3 desatinné miesta.`,
          solution: `${base}. $b=\\frac{S_{xy}}{S_{xx}}=\\frac{${nm(st.Sxy)}}{${nm(st.Sxx)}}\\approx ${dd(st.b, 3)}$, $a=\\bar{y}-b\\bar{x}=${nm(st.my)}-${par(nm(st.b, 6))}\\cdot ${nm(st.mx)}\\approx ${dd(st.a, 3)}$.`,
          hint: '$b=S_{xy}/S_{xx}$, $a=\\bar{y}-b\\bar{x}$.'
        };
      }
      return {
        answer: round(st.r, 4), tol: 0.0003, signed: true,
        q: `${head}vypočítaj výberový korelačný koeficient $r$. ${R4}`,
        solution: `${base}, $S_{yy}=${nm(st.Syy)}$. $r=\\frac{${nm(st.Sxy)}}{\\sqrt{${nm(st.Sxx)}\\cdot ${nm(st.Syy)}}}\\approx ${dd(st.r, 4)}$.`,
        hint: '$r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$, kde $S_{xy}=\\sum(x_i-\\bar{x})(y_i-\\bar{y})$.'
      };
    }
    if (t < 0.8) {
      const n = pick([10, 20, 25]), mx = rnd(2, 12), my = rnd(10, 60), Sxx = pick([40, 50, 60, 80, 100, 120]);
      const b = pick([-2, -1.5, -1, -0.5, -0.25, 0.25, 0.5, 0.75, 1.2, 1.5, 2, 2.5]), Sxy = b * Sxx, a = my - b * mx;
      const Sx = n * mx, Sy = n * my, Sx2 = Sxx + n * mx * mx, Sxyr = Sxy + n * mx * my;
      const head = `Z $n=${n}$ dvojíc poznáme $\\sum x_i=${ths(Sx)}$, $\\sum y_i=${ths(Sy)}$, $\\sum x_i^2=${ths(Sx2)}$ a $\\sum x_iy_i=${ths(nm(Sxyr))}$.`;
      const base = `$\\bar{x}=${mx}$, $\\bar{y}=${my}$, $S_{xx}=${ths(Sx2)}-${n}\\cdot ${mx}^2=${Sxx}$, $S_{xy}=${ths(nm(Sxyr))}-${n}\\cdot ${mx}\\cdot ${my}=${nm(Sxy)}$, $b=\\frac{${nm(Sxy)}}{${Sxx}}=${nm(b)}$`;
      const kind = rnd(0, 2);
      if (kind === 0) {
        return {
          answer: b, tol: 0.001, signed: true,
          q: `${head} Urči smernicu $b$ regresnej priamky $\\hat{y}=a+bx$.`,
          solution: `${base}.`,
          hint: '$S_{xx}=\\sum x_i^2-n\\bar{x}^2$, $S_{xy}=\\sum x_iy_i-n\\bar{x}\\bar{y}$, $b=S_{xy}/S_{xx}$.'
        };
      }
      if (kind === 1) {
        return {
          answer: a, tol: 0.001, signed: true,
          q: `${head} Urči absolútny člen $a$ regresnej priamky $\\hat{y}=a+bx$.`,
          solution: `${base}, $a=\\bar{y}-b\\bar{x}=${my}-${par(nm(b))}\\cdot ${mx}=${nm(a)}$.`,
          hint: 'Najprv smernica $b=S_{xy}/S_{xx}$, potom $a=\\bar{y}-b\\bar{x}$ (priamka prechádza bodom $(\\bar{x}, \\bar{y})$).'
        };
      }
      const x0 = mx + pick([-3, -2, 2, 3, 4]), y0 = a + b * x0;
      return {
        answer: y0, tol: 0.001, signed: true,
        q: `${head} Pomocou regresnej priamky $\\hat{y}=a+bx$ odhadni hodnotu $y$ pre $x=${x0}$.`,
        solution: `${base}, $a=${my}-${par(nm(b))}\\cdot ${mx}=${nm(a)}$. $\\hat{y}(${x0})=${nm(a)}+${par(nm(b))}\\cdot ${par(String(x0))}=${nm(y0)}$.`,
        hint: 'Urči $b$ a $a$ zo súčtov, potom dosaď $x$ do $\\hat{y}=a+bx$.'
      };
    }
    if (Math.random() < 0.5) {
      const Sxx = pick([20, 40, 50, 80]), Syy = pick([30, 45, 60, 90, 125]), Sxy = rnd(-Math.floor(Math.sqrt(Sxx * Syy)) + 1, Math.floor(Math.sqrt(Sxx * Syy)) - 1) || 5;
      const R2v = Sxy * Sxy / (Sxx * Syy);
      return {
        answer: round(R2v, 4), tol: 0.0002,
        q: `Pre dáta $(x_i, y_i)$ platí $S_{xx}=${Sxx}$, $S_{yy}=${Syy}$ a $S_{xy}=${Sxy}$. Vypočítaj koeficient determinácie $R^2$ regresnej priamky. ${R4}`,
        solution: `$r=\\frac{${Sxy}}{\\sqrt{${Sxx}\\cdot ${Syy}}}$ a pri jednoduchej regresii $R^2=r^2=\\frac{${par(String(Sxy))}^2}{${Sxx}\\cdot ${Syy}}=\\frac{${Sxy * Sxy}}{${Sxx * Syy}}\\approx ${dd(R2v, 4)}$.`,
        hint: 'Pri jednoduchej lineárnej regresii je $R^2=r^2=\\frac{S_{xy}^2}{S_{xx}S_{yy}}$.'
      };
    }
    const SST = pick([200, 250, 400, 500, 800]), SSE = rnd(Math.round(SST * 0.05), Math.round(SST * 0.7)), R2v = 1 - SSE / SST;
    return {
      answer: round(R2v, 4), tol: 0.0002,
      q: `Pri regresii je celkový súčet štvorcov $SST=\\sum(y_i-\\bar{y})^2=${SST}$ a reziduálny súčet štvorcov $SSE=\\sum(y_i-\\hat{y}_i)^2=${SSE}$. Vypočítaj koeficient determinácie $R^2$. ${R4}`,
      solution: `$R^2=1-\\frac{SSE}{SST}=1-\\frac{${SSE}}{${SST}}=${nm(R2v, 4)}$. Model vysvetľuje ${nt(R2v * 100, 2)} % variability premennej $y$.`,
      hint: '$R^2=1-SSE/SST$ je podiel vysvetlenej variability.'
    };
  });
})();
