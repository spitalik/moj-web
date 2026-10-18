/* Generátory úloh na precvičovanie a kontrola odpovedí.
   Každý generátor vráti: q (zadanie, LaTeX), answer (číslo, alebo pole čísel pri type 'set'),
   type ('num' | 'set'), tol (tolerancia), solution (HTML), hint (text).
   Texty sa označujú značkou T (js/content-i18n.js): make(id, jazyk) spustí generátor v kontexte jazyka. */
(function () {
  'use strict';

  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const { T } = CONTENT_I18N;
  // desatinný oddeľovač podľa jazyka obsahu (slovenčina čiarka, angličtina bodka)
  const fmt = (x) => (Number.isInteger(x) ? String(x) : String(Math.round(x * 1000) / 1000).replace('.', CONTENT_I18N.decimal()));

  // Člen polynómu: " + 3x", " - x", " + 5"; pri nulovom koeficiente prázdny reťazec.
  const term = (c, v = '') => {
    if (c === 0) return '';
    const coef = (Math.abs(c) === 1 && v) ? '' : String(Math.abs(c));
    return ` ${c > 0 ? '+' : '-'} ${coef}${v}`;
  };

  const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29]];
  const G = {};

  G.cisla = () => {
    const a = rnd(1, 30), b = rnd(2, 9), c = rnd(2, 9), e = rnd(2, 6), q = rnd(1, 9), d = e * q;
    const res = a + b * c - q;
    return {
      q: `$${a} + ${b}\\cdot ${c} - ${d} : ${e}$`,
      answer: res,
      solution: `Najprv násobenie a delenie: $${b}\\cdot ${c} = ${b * c}$ a $${d} : ${e} = ${q}$. Potom $${a} + ${b * c} - ${q} = ${res}$.`,
      hint: 'Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.'
    };
  };

  G.zlomky = () => {
    const b = rnd(2, 9), d = rnd(2, 9), a = rnd(1, 2 * b), c = rnd(1, 2 * d);
    const p = a * d + c * b, q = b * d, g = gcd(p, q);
    return {
      q: `$\\frac{${a}}{${b}}+\\frac{${c}}{${d}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).`,
      answer: p / q,
      solution: `Spoločný menovateľ je $${q}$: $\\frac{${a * d}}{${q}}+\\frac{${c * b}}{${q}}=\\frac{${p}}{${q}}$${g > 1 ? ` $=\\frac{${p / g}}{${q / g}}$` : ''}.`,
      hint: 'Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.'
    };
  };

  G.percenta = () => {
    const p = pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75]);
    const x = 20 * rnd(1, 20);
    return {
      q: `Koľko je $${p}\\,\\%$ z čísla $${x}$?`,
      answer: p * x / 100,
      solution: `$${p}\\,\\%=\\frac{${p}}{100}$, teda $\\frac{${p}}{100}\\cdot ${x}=${p * x / 100}$.`,
      hint: '$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.'
    };
  };

  G.mnoziny = () => {
    const c = rnd(0, 5), a = rnd(c, c + 8), b = rnd(c, c + 8);
    return {
      q: T`Množina $A$ má $${a}$ prvkov, množina $B$ má $${b}$ prvkov a ich prienik má $${c}$ prvkov. Koľko prvkov má $A\\cup B$?`,
      answer: a + b - c,
      solution: `$|A\\cup B|=|A|+|B|-|A\\cap B|=${a}+${b}-${c}=${a + b - c}$.`,
      hint: T`Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.`
    };
  };

  G.obsah = () => {
    if (Math.random() < 0.33) {
      const a = rnd(2, 15), b = rnd(2, 15);
      return {
        q: `Obdĺžnik má strany $a=${a}$ a $b=${b}$. Aký je jeho obsah $S$?`,
        answer: a * b,
        solution: `$S=a\\cdot b=${a}\\cdot ${b}=${a * b}$.`,
        hint: 'Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.'
      };
    }
    if (Math.random() < 0.5) {
      const z = 2 * rnd(2, 10), v = rnd(2, 12);
      return {
        q: `Trojuholník má základňu $z=${z}$ a výšku $v=${v}$. Aký je jeho obsah $S$?`,
        answer: z * v / 2,
        solution: `$S=\\frac{z\\cdot v}{2}=\\frac{${z}\\cdot ${v}}{2}=${z * v / 2}$.`,
        hint: 'Obsah trojuholníka je polovica súčinu základne a výšky.'
      };
    }
    const r = rnd(1, 10);
    return {
      q: `Kruh má polomer $r=${r}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{,}14$).`,
      answer: Math.PI * r * r,
      tol: 0.002 * r * r,
      solution: `$S=\\pi r^2=\\pi\\cdot ${r * r}\\approx ${fmt(Math.PI * r * r)}$.`,
      hint: 'Obsah kruhu je $\\pi r^2$.'
    };
  };

  G.pytagoras = () => {
    const [a, b, c] = pick(TRIPLES), k = rnd(1, 3);
    const A = a * k, B = b * k, C = c * k;
    if (Math.random() < 0.5) {
      return {
        q: `Pravouhlý trojuholník má odvesny $a=${A}$ a $b=${B}$. Aká je dĺžka prepony $c$?`,
        answer: C,
        solution: `$c^2=a^2+b^2=${A * A}+${B * B}=${C * C}$, teda $c=${C}$.`,
        hint: 'Použi Pytagorovu vetu $c^2=a^2+b^2$.'
      };
    }
    return {
      q: `Pravouhlý trojuholník má preponu $c=${C}$ a odvesnu $a=${A}$. Aká je dĺžka druhej odvesny $b$?`,
      answer: B,
      solution: `$b^2=c^2-a^2=${C * C}-${A * A}=${B * B}$, teda $b=${B}$.`,
      hint: 'Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.'
    };
  };

  G.linearne = () => {
    const a = rnd(2, 9) * pick([1, -1]), x = rnd(-10, 10), b = pick([-1, 1]) * rnd(1, 20), c = a * x + b;
    return {
      signed: true,
      q: T`Vyrieš rovnicu $${a}x${term(b)} = ${c}$.`,
      answer: x,
      solution: T`$${a}x=${c}${term(-b)}=${a * x}$, teda $x=${x}$.`,
      hint: T`Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.`
    };
  };

  G.kvadraticke = () => {
    const r1 = rnd(-6, 6), r2 = rnd(-6, 6);
    const p = -(r1 + r2), q = r1 * r2;
    return {
      type: 'set',
      q: `Vyrieš rovnicu $x^2${term(p, 'x')}${term(q)} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).`,
      answer: [r1, r2],
      solution: `Vietove vzťahy: $x_1+x_2=${-p}$ a $x_1\\cdot x_2=${q}$. Korene sú $x_1=${Math.min(r1, r2)}$ a $x_2=${Math.max(r1, r2)}$.`,
      hint: 'Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.'
    };
  };

  G.mocniny = () => {
    const a = rnd(2, 5), m = rnd(1, 3), n = rnd(1, 3);
    if (Math.random() < 0.5) {
      return {
        q: T`Vypočítaj $${a}^{${m}}\\cdot ${a}^{${n}}$.`,
        answer: Math.pow(a, m + n),
        solution: `$${a}^{${m}}\\cdot ${a}^{${n}}=${a}^{${m + n}}=${Math.pow(a, m + n)}$.`,
        hint: T`Pri násobení mocnín rovnakého základu sa exponenty sčítajú.`
      };
    }
    return {
      q: T`Vypočítaj $(${a}^{${m}})^{${n}}$.`,
      answer: Math.pow(a, m * n),
      solution: `$(${a}^{${m}})^{${n}}=${a}^{${m * n}}=${Math.pow(a, m * n)}$.`,
      hint: T`Pri umocňovaní mocniny sa exponenty násobia.`
    };
  };

  // [stupne, sin, cos, sin v tvare, cos v tvare]
  const SPECIAL = [
    [0, 0, 1, '0', '1'],
    [30, 0.5, Math.sqrt(3) / 2, '\\frac{1}{2}', '\\frac{\\sqrt3}{2}'],
    [45, Math.SQRT1_2, Math.SQRT1_2, '\\frac{\\sqrt2}{2}', '\\frac{\\sqrt2}{2}'],
    [60, Math.sqrt(3) / 2, 0.5, '\\frac{\\sqrt3}{2}', '\\frac{1}{2}'],
    [90, 1, 0, '1', '0']
  ];

  G.goniometria = () => {
    if (Math.random() < 0.6) {
      const [deg, s, c, st, ct] = pick(SPECIAL);
      const isSin = Math.random() < 0.5;
      const name = isSin ? '\\sin' : '\\cos';
      return {
        q: `Vypočítaj $${name}\\,${deg}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).`,
        answer: isSin ? s : c,
        tol: 0.001,
        solution: `$${name}\\,${deg}^\\circ=${isSin ? st : ct}\\approx ${(isSin ? s : c).toFixed(3).replace('.', ',')}$.`,
        hint: 'Pozri si tabuľku hodnôt v teórii.'
      };
    }
    const [a, b, c] = pick(TRIPLES);
    return {
      q: `Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{${a}}{${c}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).`,
      answer: b / c,
      tol: 0.001,
      solution: `$\\cos^2\\alpha=1-\\frac{${a * a}}{${c * c}}=\\frac{${b * b}}{${c * c}}$, teda $\\cos\\alpha=\\frac{${b}}{${c}}\\approx ${(b / c).toFixed(3).replace('.', ',')}$.`,
      hint: 'Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.'
    };
  };

  G.matice = () => {
    const a = rnd(-5, 5), b = rnd(-5, 5), c = rnd(-5, 5), d = rnd(-5, 5);
    return {
      signed: true,
      q: `Vypočítaj determinant $\\det\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}$.`,
      answer: a * d - b * c,
      solution: `$\\det=(${a})(${d})-(${b})(${c})=${a * d}-(${b * c})=${a * d - b * c}$.`,
      hint: 'Pre $2\\times 2$ matica je $\\det=ad-bc$.'
    };
  };

  G.sucin = () => {
    const A = [[rnd(0, 5), rnd(0, 5)], [rnd(0, 5), rnd(0, 5)]];
    const B = [[rnd(0, 5), rnd(0, 5)], [rnd(0, 5), rnd(0, 5)]];
    const i = rnd(0, 1), j = rnd(0, 1);
    const val = A[i][0] * B[0][j] + A[i][1] * B[1][j];
    const mat = (M) => `\\begin{pmatrix}${M[0][0]}&${M[0][1]}\\\\${M[1][0]}&${M[1][1]}\\end{pmatrix}`;
    return {
      q: `$A=${mat(A)}$, $B=${mat(B)}$. Aký prvok má súčin $AB$ v riadku ${i + 1} a stĺpci ${j + 1}?`,
      answer: val,
      solution: `$(AB)_{${i + 1}${j + 1}}=${A[i][0]}\\cdot ${B[0][j]}+${A[i][1]}\\cdot ${B[1][j]}=${val}$.`,
      hint: 'Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.'
    };
  };

  G.derivacie = () => {
    let a = 0;
    while (a === 0) a = rnd(-5, 5);
    const n = rnd(2, 4), b = rnd(-4, 4), x0 = rnd(-3, 3);
    const val = a * n * Math.pow(x0, n - 1) + b;
    return {
      signed: true,
      q: `Pre funkciu $f(x)=${a}x^{${n}}${term(b, 'x')}$ vypočítaj $f'(${x0})$.`,
      answer: val,
      solution: `$f'(x)=${a * n}x^{${n - 1}}${term(b)}$, teda $f'(${x0})=${a * n}\\cdot(${x0})^{${n - 1}}${term(b)}=${val}$.`,
      hint: 'Použi $(x^n)\'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.'
    };
  };

  G.integraly = () => {
    const c = rnd(1, 5), n = rnd(0, 3), a = rnd(0, 2), b = rnd(a + 1, 4);
    const val = c * (Math.pow(b, n + 1) - Math.pow(a, n + 1)) / (n + 1);
    return {
      q: `Vypočítaj $\\displaystyle\\int_{${a}}^{${b}} ${c}x^{${n}}\\,dx$.`,
      answer: val,
      tol: 0.01,
      solution: `Primitívna funkcia je $F(x)=\\frac{${c}}{${n + 1}}x^{${n + 1}}$, teda $F(${b})-F(${a})=${fmt(val)}$.`,
      hint: 'Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.'
    };
  };

  /* ---------- kontrola odpovedí ---------- */

  // Prevedie text na číslo: desatinná čiarka alebo bodka, zlomok p/q, unicode mínus.
  function parseNum(s) {
    const t = String(s || '').trim().replace(/−/g, '-').replace(/\s+/g, '').replace(',', '.');
    const m = t.match(/^([-+]?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/);
    if (m) return Number(m[2]) === 0 ? NaN : Number(m[1]) / Number(m[2]);
    if (/^[-+]?\d+(\.\d+)?$/.test(t)) return Number(t);
    return NaN;
  }

  // lang = jazyk obsahu lekcie (CONTENT_I18N.langFor); bez neho slovenčina
  function make(id, lang) {
    const gen = G[id];
    if (!gen) throw new Error('Neznáma téma: ' + id);
    return CONTENT_I18N.run(lang, id, () => {
      const ex = gen();
      ex.type = ex.type || 'num';
      ex.lang = CONTENT_I18N.lang();
      // obrázky v zadaní: popisy v SVG podľa slovníka
      ex.q = CONTENT_I18N.markup(ex.q);
      return ex;
    });
  }

  // medzery nehrajú rolu: „3 / 4“ = „3/4“, „xiv“ = „XIV“
  const normText = (s) => String(s || '').toUpperCase().replace(/\s+/g, '');

  // true = správne, false = nesprávne, null = vstup sa nedá prečítať
  //   num    – jedno číslo (tolerancia tol)
  //   set    – viac čísel v ľubovoľnom poradí (korene)
  //   tuple  – viac čísel v pevnom poradí (napr. podiel; zvyšok)
  //   text   – text bez ohľadu na veľkosť písmen (napr. rímske číslice), alternatívy v ex.accept
  //   choice – výber z ex.options, odpoveď je presne jedna z možností
  function check(ex, input) {
    const tol = ex.tol ?? 1e-6;
    if (ex.type === 'choice') return String(input) === String(ex.answer);
    if (ex.type === 'text') {
      const got = normText(input);
      if (!got) return null;
      return [ex.answer, ...(ex.accept || [])].some((a) => normText(a) === got);
    }
    if (ex.type === 'set' || ex.type === 'tuple') {
      const got = String(input || '').split(/[;\s]+|,(?=\s)|,(?!\d)/).filter(Boolean).map(parseNum);
      if (got.length === 0 || got.some(Number.isNaN)) return null;
      const want = [...ex.answer];
      if (ex.type === 'set') {
        got.sort((x, y) => x - y);
        want.sort((x, y) => x - y);
      }
      if (got.length !== want.length) return false;
      // proportional: uzná aj nenulový násobok (napr. koeficienty všeobecnej rovnice priamky)
      if (ex.proportional) {
        const k = want.findIndex((v) => v !== 0);
        if (k < 0 || got[k] === 0) return false;
        const f = got[k] / want[k];
        return want.every((v, i) => Math.abs(v * f - got[i]) <= tol * Math.max(1, Math.abs(f)));
      }
      return want.every((v, i) => Math.abs(v - got[i]) <= tol);
    }
    const v = parseNum(input);
    if (Number.isNaN(v)) return null;
    return Math.abs(v - ex.answer) <= tol;
  }

  function formatAnswer(ex) {
    return CONTENT_I18N.run(ex.lang, null, () => formatIn(ex));
  }
  function formatIn(ex) {
    if (ex.show) return ex.show;
    if (ex.type === 'set') return [...ex.answer].sort((x, y) => x - y).map(fmt).join('; ');
    if (ex.type === 'tuple') return ex.answer.map(fmt).join('; ');
    if (ex.type === 'text' || ex.type === 'choice') return String(ex.answer);
    return fmt(ex.answer);
  }

  // Ďalšie súbory (js/rocniky/*.js) pridávajú generátory cez register(id, fn).
  function register(id, fn) {
    if (G[id]) throw new Error('Generátor už existuje: ' + id);
    G[id] = fn;
  }

  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  window.EXERCISES = {
    make, check, formatAnswer, parseNum, register,
    has: (id) => !!G[id],
    util: { rnd, pick, gcd, fmt, term, shuffle }
  };
})();
