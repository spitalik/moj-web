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
    // typické chyby: počítanie zľava doprava; zabudnuté delenie
    const lr = ((a + b) * c - d) / e;
    return {
      q: `$${a} + ${b}\\cdot ${c} - ${d} : ${e}$`,
      answer: res,
      solution: `Najprv násobenie a delenie: $${b}\\cdot ${c} = ${b * c}$ a $${d} : ${e} = ${q}$. Potom $${a} + ${b * c} - ${q} = ${res}$.`,
      hint: 'Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.',
      mistakes: [
        ...(Number.isInteger(lr) && lr !== res ? [{ value: lr, msg: 'Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.' }] : []),
        { value: a + b * c - d, msg: `Zabudol si na delenie. Neodčítavaš ${d}, ale až výsledok $${d} : ${e}$.` }
      ],
      steps: [
        { q: `Koľko je $${b}\\cdot ${c}$?`, answer: b * c },
        { q: `Koľko je $${d} : ${e}$?`, answer: q },
        { q: `Koľko je $${a} + ${b * c} - ${q}$?`, answer: res }
      ]
    };
  };

  G.zlomky = () => {
    const b = rnd(2, 9), d = rnd(2, 9), a = rnd(1, 2 * b), c = rnd(1, 2 * d);
    const p = a * d + c * b, q = b * d, g = gcd(p, q);
    const differs = (v) => Math.abs(v - p / q) > 1e-6;
    return {
      q: `$\\frac{${a}}{${b}}+\\frac{${c}}{${d}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).`,
      answer: p / q,
      solution: `Spoločný menovateľ je $${q}$: $\\frac{${a * d}}{${q}}+\\frac{${c * b}}{${q}}=\\frac{${p}}{${q}}$${g > 1 ? ` $=\\frac{${p / g}}{${q / g}}$` : ''}.`,
      hint: 'Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.',
      // typické chyby: sčítané čitatele aj menovatele; menovateľ zmenený, ale čitatele nerozšírené
      mistakes: [
        ...(differs((a + c) / (b + d)) ? [{ value: (a + c) / (b + d), msg: 'Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.' }] : []),
        ...(differs((a + c) / q) ? [{ value: (a + c) / q, msg: 'Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.' }] : [])
      ],
      steps: [
        { q: `Aký je spoločný menovateľ (súčin menovateľov $${b}\\cdot ${d}$)?`, answer: q },
        { q: `Rozšír prvý zlomok na menovateľa ${q}. Aký bude jeho čitateľ?`, answer: a * d },
        { q: `Rozšír druhý zlomok na menovateľa ${q}. Aký bude jeho čitateľ?`, answer: c * b },
        { q: 'Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.', answer: p / q, placeholder: 'napr. 5/6' }
      ]
    };
  };

  G.percenta = () => {
    const p = pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75]);
    const x = 20 * rnd(1, 20);
    return {
      q: `Koľko je $${p}\\,\\%$ z čísla $${x}$?`,
      answer: p * x / 100,
      solution: `$${p}\\,\\%=\\frac{${p}}{100}$, teda $\\frac{${p}}{100}\\cdot ${x}=${p * x / 100}$.`,
      hint: '$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.',
      // typické chyby: delenie počtom percent; zvyšok do 100 % namiesto časti
      mistakes: [
        ...(Math.abs(x / p - p * x / 100) > 1e-6 ? [{ value: x / p, msg: `Číslo si vydelil počtom percent. $${p}\\,\\%$ znamená ${p} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob ${p}.` }] : []),
        ...(p !== 50 ? [{ value: x - p * x / 100, msg: `To je zvyšok do 100 %. Pýtame sa na samotných $${p}\\,\\%$ z čísla ${x}.` }] : [])
      ],
      steps: [
        { q: `Koľko je $1\\,\\%$ z čísla ${x}?`, answer: x / 100 },
        { q: `Koľko je teda $${p}\\,\\%$ z čísla ${x}?`, answer: p * x / 100 }
      ]
    };
  };

  G.mnoziny = () => {
    const c = rnd(0, 5), a = rnd(c, c + 8), b = rnd(c, c + 8);
    const ex = {
      q: T`Množina $A$ má $${a}$ prvkov, množina $B$ má $${b}$ prvkov a ich prienik má $${c}$ prvkov. Koľko prvkov má $A\\cup B$?`,
      answer: a + b - c,
      solution: `$|A\\cup B|=|A|+|B|-|A\\cap B|=${a}+${b}-${c}=${a + b - c}$.`,
      hint: T`Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.`
    };
    // typické chyby a kroky zatiaľ len po slovensky (anglický preklad v js/content-i18n/en/s1.js ešte chýba)
    if (CONTENT_I18N.lang() === 'sk') {
      ex.mistakes = [
        ...(c > 0 ? [{ value: a + b, msg: T`Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.` }] : []),
        ...(c > 1 ? [{ value: a + b - 2 * c, msg: T`Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.` }] : [])
      ];
      if (c > 0) {
        ex.steps = [
          { q: T`Koľko je $|A| + |B|$?`, answer: a + b },
          { q: T`Prvky prieniku sú v tomto súčte dvakrát. Koľko je $${a + b} - ${c}$?`, answer: a + b - c }
        ];
      }
    }
    return ex;
  };

  G.obsah = () => {
    if (Math.random() < 0.33) {
      const a = rnd(2, 15), b = rnd(2, 15);
      return {
        q: `Obdĺžnik má strany $a=${a}$ a $b=${b}$. Aký je jeho obsah $S$?`,
        answer: a * b,
        solution: `$S=a\\cdot b=${a}\\cdot ${b}=${a * b}$.`,
        hint: 'Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.',
        mistakes: [
          ...(2 * (a + b) !== a * b ? [{ value: 2 * (a + b), msg: 'To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.' }] : []),
          ...(a + b !== a * b ? [{ value: a + b, msg: 'Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.' }] : [])
        ]
      };
    }
    if (Math.random() < 0.5) {
      const z = 2 * rnd(2, 10), v = rnd(2, 12);
      return {
        q: `Trojuholník má základňu $z=${z}$ a výšku $v=${v}$. Aký je jeho obsah $S$?`,
        answer: z * v / 2,
        solution: `$S=\\frac{z\\cdot v}{2}=\\frac{${z}\\cdot ${v}}{2}=${z * v / 2}$.`,
        hint: 'Obsah trojuholníka je polovica súčinu základne a výšky.',
        mistakes: [{ value: z * v, msg: 'Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.' }],
        steps: [
          { q: `Koľko je $z\\cdot v = ${z}\\cdot ${v}$?`, answer: z * v },
          { q: `Trojuholník je polovica obdĺžnika. Koľko je $${z * v} : 2$?`, answer: z * v / 2 }
        ]
      };
    }
    const r = rnd(1, 10), S = Math.PI * r * r, tol = 0.002 * r * r;
    // typické chyby: priemer namiesto polomeru, obvod namiesto obsahu, zabudnutá druhá mocnina (hodnoty s π ≈ 3,14 ako v zadaní)
    const circ = [
      { value: 3.14 * 4 * r * r, msg: `Dosadil si priemer $${2 * r}$. Vo vzorci $\\pi r^2$ je polomer $r=${r}$.` },
      { value: 2 * 3.14 * r, msg: 'To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.' },
      { value: 3.14 * r, msg: 'Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.' }
    ].filter((m) => Math.abs(m.value - S) > 10 * tol);
    return {
      q: `Kruh má polomer $r=${r}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{,}14$).`,
      answer: S,
      tol,
      solution: `$S=\\pi r^2=\\pi\\cdot ${r * r}\\approx ${fmt(Math.PI * r * r)}$.`,
      hint: 'Obsah kruhu je $\\pi r^2$.',
      mistakes: circ,
      steps: [
        { q: `Koľko je $r^2 = ${r}^2$?`, answer: r * r },
        { q: `Koľko je $\\pi\\cdot ${r * r}$ (použi $\\pi\\approx 3{,}14$)?`, answer: S, tol }
      ]
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
        hint: 'Použi Pytagorovu vetu $c^2=a^2+b^2$.',
        mistakes: [
          { value: A + B, msg: 'Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.' },
          { value: C * C, msg: 'To je $c^2$. Na konci ešte odmocni.' }
        ],
        steps: [
          { q: `Koľko je $a^2 = ${A}^2$?`, answer: A * A },
          { q: `Koľko je $b^2 = ${B}^2$?`, answer: B * B },
          { q: `Koľko je $c^2 = ${A * A} + ${B * B}$?`, answer: C * C },
          { q: `Koľko je $c = \\sqrt{${C * C}}$?`, answer: C }
        ]
      };
    }
    return {
      q: `Pravouhlý trojuholník má preponu $c=${C}$ a odvesnu $a=${A}$. Aká je dĺžka druhej odvesny $b$?`,
      answer: B,
      solution: `$b^2=c^2-a^2=${C * C}-${A * A}=${B * B}$, teda $b=${B}$.`,
      hint: 'Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.',
      mistakes: [
        ...(C - A !== B ? [{ value: C - A, msg: 'Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.' }] : []),
        { value: B * B, msg: 'To je $b^2$. Na konci ešte odmocni.' }
      ],
      steps: [
        { q: `Koľko je $c^2 = ${C}^2$?`, answer: C * C },
        { q: `Koľko je $a^2 = ${A}^2$?`, answer: A * A },
        { q: `Koľko je $b^2 = ${C * C} - ${A * A}$?`, answer: B * B },
        { q: `Koľko je $b = \\sqrt{${B * B}}$?`, answer: B }
      ]
    };
  };

  G.linearne = () => {
    const a = rnd(2, 9) * pick([1, -1]), x = rnd(-10, 10), b = pick([-1, 1]) * rnd(1, 20), c = a * x + b;
    const ex = {
      signed: true,
      q: T`Vyrieš rovnicu $${a}x${term(b)} = ${c}$.`,
      answer: x,
      solution: T`$${a}x=${c}${term(-b)}=${a * x}$, teda $x=${x}$.`,
      hint: T`Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.`
    };
    // typické chyby a kroky zatiaľ len po slovensky (anglický preklad v js/content-i18n/en/s1.js ešte chýba)
    if (CONTENT_I18N.lang() === 'sk') {
      const wrongSide = (c + b) / a;
      ex.mistakes = [
        ...(Number.isInteger(wrongSide) && wrongSide !== x && wrongSide !== -x
          ? [{ value: wrongSide, msg: T`Pri prenesení čísla ${Math.abs(b)} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.` }] : []),
        ...(c - b - a !== x && c - b - a !== -x
          ? [{ value: c - b - a, msg: T`Koeficient ${a} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom ${a}.` }] : [])
      ];
      ex.steps = [
        { q: T`Prenes konštantu na pravú stranu. Koľko je $${a}x$?`, answer: a * x, signed: true },
        { q: T`Vydeľ obe strany číslom ${a}. Koľko je $x$?`, answer: x, signed: true }
      ];
    }
    return ex;
  };

  G.kvadraticke = () => {
    const r1 = rnd(-6, 6), r2 = rnd(-6, 6);
    const p = -(r1 + r2), q = r1 * r2;
    return {
      type: 'set',
      q: `Vyrieš rovnicu $x^2${term(p, 'x')}${term(q)} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).`,
      answer: [r1, r2],
      solution: `Vietove vzťahy: $x_1+x_2=${-p}$ a $x_1\\cdot x_2=${q}$. Korene sú $x_1=${Math.min(r1, r2)}$ a $x_2=${Math.max(r1, r2)}$.`,
      hint: 'Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.',
      // typická chyba: vo vzorci $x=\frac{-p\pm\sqrt{D}}{2}$ chýba delenie dvomi
      mistakes: r1 || r2 ? [{ value: [2 * r1, 2 * r2], msg: 'Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.' }] : [],
      steps: [
        { q: 'Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?', answer: -p, signed: true },
        { q: 'Aký je súčin koreňov $x_1 \\cdot x_2$?', answer: q, signed: true },
        { q: `Ktoré dve čísla majú súčet ${-p} a súčin ${q}? Zadaj ich oddelené bodkočiarkou.`, type: 'set', answer: [r1, r2] }
      ]
    };
  };

  G.mocniny = () => {
    const a = rnd(2, 5), m = rnd(1, 3), n = rnd(1, 3);
    // typické chyby a kroky zatiaľ len po slovensky (anglický preklad v js/content-i18n/en/s1.js ešte chýba)
    const sk = CONTENT_I18N.lang() === 'sk';
    if (Math.random() < 0.5) {
      const ex = {
        q: T`Vypočítaj $${a}^{${m}}\\cdot ${a}^{${n}}$.`,
        answer: Math.pow(a, m + n),
        solution: `$${a}^{${m}}\\cdot ${a}^{${n}}=${a}^{${m + n}}=${Math.pow(a, m + n)}$.`,
        hint: T`Pri násobení mocnín rovnakého základu sa exponenty sčítajú.`
      };
      if (sk) {
        ex.mistakes = [
          ...(m * n !== m + n ? [{ value: Math.pow(a, m * n), msg: T`Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.` }] : []),
          { value: Math.pow(a * a, m + n), msg: T`Základy si vynásobil. Základ ${a} ostáva, sčítajú sa len exponenty.` }
        ];
        ex.steps = [
          { q: T`Aký exponent bude mať výsledok $${a}^{\\square}$?`, answer: m + n },
          { q: T`Koľko je $${a}^{${m + n}}$?`, answer: Math.pow(a, m + n) }
        ];
      }
      return ex;
    }
    const ex = {
      q: T`Vypočítaj $(${a}^{${m}})^{${n}}$.`,
      answer: Math.pow(a, m * n),
      solution: `$(${a}^{${m}})^{${n}}=${a}^{${m * n}}=${Math.pow(a, m * n)}$.`,
      hint: T`Pri umocňovaní mocniny sa exponenty násobia.`
    };
    if (sk) {
      ex.mistakes = m * n !== m + n ? [{ value: Math.pow(a, m + n), msg: T`Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.` }] : [];
      if (m > 1 && n > 1) {
        ex.steps = [
          { q: T`Aký exponent bude mať výsledok $${a}^{\\square}$?`, answer: m * n },
          { q: T`Koľko je $${a}^{${m * n}}$?`, answer: Math.pow(a, m * n) }
        ];
      }
    }
    return ex;
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
        hint: 'Pozri si tabuľku hodnôt v teórii.',
        // typická chyba: zamenený sínus a kosínus
        mistakes: Math.abs(s - c) > 0.01 ? [{ value: isSin ? c : s, msg: `To je hodnota ${isSin ? 'kosínusu' : 'sínusu'} uhla $${deg}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.` }] : []
      };
    }
    const [a, b, c] = pick(TRIPLES);
    return {
      q: `Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{${a}}{${c}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).`,
      answer: b / c,
      tol: 0.001,
      solution: `$\\cos^2\\alpha=1-\\frac{${a * a}}{${c * c}}=\\frac{${b * b}}{${c * c}}$, teda $\\cos\\alpha=\\frac{${b}}{${c}}\\approx ${(b / c).toFixed(3).replace('.', ',')}$.`,
      hint: 'Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.',
      // typické chyby: identita bez druhých mocnín; zabudnutá odmocnina
      mistakes: [
        { value: 1 - a / c, msg: 'Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.' },
        { value: (b * b) / (c * c), msg: 'To je $\\cos^2\\alpha$. Na konci ešte odmocni.' }
      ].filter((m) => Math.abs(m.value - b / c) > 0.01),
      steps: [
        { q: `Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).`, answer: (a * a) / (c * c), tol: 0.001 },
        { q: 'Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.', answer: (b * b) / (c * c), tol: 0.001 },
        { q: 'Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?', answer: b / c, tol: 0.001 }
      ]
    };
  };

  G.matice = () => {
    const a = rnd(-5, 5), b = rnd(-5, 5), c = rnd(-5, 5), d = rnd(-5, 5);
    return {
      signed: true,
      q: `Vypočítaj determinant $\\det\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}$.`,
      answer: a * d - b * c,
      solution: `$\\det=(${a})(${d})-(${b})(${c})=${a * d}-(${b * c})=${a * d - b * c}$.`,
      hint: 'Pre $2\\times 2$ matica je $\\det=ad-bc$.',
      // typické chyby: súčiny sčítané; násobené prvky v stĺpcoch namiesto diagonál
      mistakes: [
        { value: a * d + b * c, msg: 'Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.' },
        { value: a * c - b * d, msg: 'Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.' }
      ].filter((m) => m.value !== a * d - b * c && m.value !== -(a * d - b * c)),
      steps: [
        { q: `Súčin na hlavnej diagonále: koľko je $(${a})\\cdot(${d})$?`, answer: a * d, signed: true },
        { q: `Súčin na vedľajšej diagonále: koľko je $(${b})\\cdot(${c})$?`, answer: b * c, signed: true },
        { q: `Koľko je $${a * d} - (${b * c})$?`, answer: a * d - b * c, signed: true }
      ]
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
      hint: 'Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.',
      // typické chyby: riadok krát riadok; násobenie len prvkov na rovnakej pozícii
      mistakes: [
        { value: A[i][0] * B[j][0] + A[i][1] * B[j][1], msg: `Z matice $B$ si vzal riadok. Prvok súčinu je ${i + 1}. riadok matice $A$ krát ${j + 1}. stĺpec matice $B$.` },
        { value: A[i][j] * B[i][j], msg: 'Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.' }
      ].filter((m) => m.value !== val),
      steps: [
        { q: `Prvý súčin: koľko je $${A[i][0]}\\cdot ${B[0][j]}$?`, answer: A[i][0] * B[0][j] },
        { q: `Druhý súčin: koľko je $${A[i][1]}\\cdot ${B[1][j]}$?`, answer: A[i][1] * B[1][j] },
        { q: `Súčet: koľko je $${A[i][0] * B[0][j]} + ${A[i][1] * B[1][j]}$?`, answer: val }
      ]
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
      hint: 'Použi $(x^n)\'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.',
      // typické chyby: zabudnutý exponent pred x; dosadené do f namiesto f'; člen bx nezderivovaný
      mistakes: [
        { value: a * Math.pow(x0, n - 1) + b, msg: `Zabudol si exponent ${n} dať pred $x$: $(x^{${n}})'=${n}x^{${n - 1}}$.` },
        { value: a * Math.pow(x0, n) + b * x0, msg: 'Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.' },
        ...(b !== 0 ? [{ value: a * n * Math.pow(x0, n - 1) + b * x0, msg: `Člen $${b}x$ si nezderivoval. Jeho derivácia je ${b}.` }] : [])
      ].filter((m) => m.value !== val && m.value !== -val),
      steps: [
        { q: `Derivácia je $f'(x)=k\\,x^{${n - 1}}${term(b)}$. Aký je koeficient $k$?`, answer: a * n, signed: true },
        { q: `Koľko je $f'(${x0})$?`, answer: val, signed: true }
      ]
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
      hint: 'Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.',
      // typické chyby: zabudnuté delenie (n+1); zabudnuté F(a); rozdiel hodnôt funkcie namiesto primitívnej
      mistakes: [
        { value: c * (Math.pow(b, n + 1) - Math.pow(a, n + 1)), msg: `Zabudol si deliť číslom ${n + 1}: $\\int x^{${n}}\\,dx=\\frac{x^{${n + 1}}}{${n + 1}}$.` },
        ...(a !== 0 ? [{ value: c * Math.pow(b, n + 1) / (n + 1), msg: `Dosadil si len hornú hranicu. Od $F(${b})$ ešte odčítaj $F(${a})$.` }] : []),
        { value: c * (Math.pow(b, n) - Math.pow(a, n)), msg: 'Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.' }
      ].filter((m) => Math.abs(m.value - val) > 0.05),
      steps: [
        { q: `Primitívna funkcia je $F(x)=\\frac{${c}}{${n + 1}}x^{${n + 1}}$. Koľko je $F(${b})$?`, answer: c * Math.pow(b, n + 1) / (n + 1), tol: 0.01 },
        { q: `Koľko je $F(${a})$?`, answer: c * Math.pow(a, n + 1) / (n + 1), tol: 0.01 },
        { q: `Koľko je $F(${b}) - F(${a})$?`, answer: val, tol: 0.01 }
      ]
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

  // Deterministický generátor (mulberry32) – rovnaké semienko dá rovnaké úlohy
  // (zadanie od učiteľa, denná výzva). Generátory volajú Math.random, preto ho počas tvorby úlohy dočasne nahradíme.
  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  // ľubovoľný text → 32-bitové semienko
  function hashSeed(s) {
    let h = 2166136261;
    for (const ch of String(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function withSeed(seed, fn) {
    if (seed === undefined || seed === null) return fn();
    const orig = Math.random;
    Math.random = mulberry32(typeof seed === 'number' ? seed : hashSeed(seed));
    try { return fn(); } finally { Math.random = orig; }
  }

  // lang = jazyk obsahu lekcie (CONTENT_I18N.langFor); bez neho slovenčina. seed = voliteľné semienko.
  function make(id, lang, seed) {
    const gen = G[id];
    if (!gen) throw new Error('Neznáma téma: ' + id);
    return withSeed(seed, () => CONTENT_I18N.run(lang, id, () => {
      const ex = gen();
      ex.type = ex.type || 'num';
      ex.lang = CONTENT_I18N.lang();
      ex.lesson = id;
      // obrázky v zadaní: popisy v SVG podľa slovníka
      ex.q = CONTENT_I18N.markup(ex.q);
      if (Array.isArray(ex.steps)) ex.steps.forEach((s) => { s.q = CONTENT_I18N.markup(s.q); });
      return ex;
    }));
  }

  /* ---------- kroky riešenia ----------
     Generátor môže vrátiť steps: [{ q, answer, type?, tol?, options?, hint?, show?, placeholder?, signed?, proportional? }].
     Každý krok je malá úloha (rovnaké typy odpovedí ako celá úloha); posledný krok vedie k výsledku úlohy.
     Krok sa kontroluje tou istou funkciou check ako celá úloha. */
  const stepEx = (ex, s) => Object.assign({ type: 'num', lang: ex.lang, lesson: ex.lesson }, s);

  /* ---------- typické chyby ----------
     Generátor môže vrátiť mistakes: [{ value, msg }] – výsledok, ktorý vznikne konkrétnou chybou postupu
     (value má rovnaký tvar ako answer), a vysvetlenie chyby (text obsahu lekcie, môže mať $…$).
     diagnose vráti { msg } pre konkrétnu chybu z generátora, alebo { key, vars } pre všeobecnú chybu
     (preklad cez I18N: kľúče mistake*), alebo null. */
  function diagnose(ex, input) {
    if (ex.type === 'choice' && ex.choiceHints && ex.choiceHints[input]) return { msg: ex.choiceHints[input] };
    for (const m of ex.mistakes || []) {
      const fake = Object.assign({}, ex, { answer: m.value, show: undefined });
      if (m.value !== undefined && check(fake, input) === true) return { msg: m.msg };
    }
    const tol = ex.tol ?? 1e-6;
    const near = (x, y) => Math.abs(x - y) <= Math.max(tol, 1e-9 * Math.abs(y));
    if (ex.type === 'num' && typeof ex.answer === 'number') {
      const v = parseNum(input), a = ex.answer;
      if (Number.isNaN(v)) return null;
      if (a !== 0 && near(v, -a)) return { key: 'mistakeSign' };
      for (const k of [10, 100, 1000]) {
        if (a !== 0 && (near(v, a * k) || near(v, a / k))) return { key: 'mistakeDecimal' };
      }
      if (a !== 0 && Math.abs(a) !== 1 && near(v, 1 / a)) return { key: 'mistakeReciprocal' };
      if (Number.isInteger(a) && Number.isInteger(v) && Math.abs(v - a) === 1) return { key: 'mistakeOffByOne' };
      if (Math.abs(v - a) <= Math.max(10 * tol, Math.abs(a) * 0.02)) return { key: 'mistakeRounding' };
      return null;
    }
    if (ex.type === 'set' || ex.type === 'tuple') {
      const got = String(input || '').split(/[;\s]+|,(?=\s)|,(?!\d)/).filter(Boolean).map(parseNum);
      if (!got.length || got.some(Number.isNaN)) return null;
      const want = [...ex.answer];
      const hit = (x) => want.some((w) => near(x, w));
      if (ex.type === 'tuple' && got.length === want.length && want.length > 1 &&
          [...got].reverse().every((x, i) => near(x, want[i]))) return { key: 'mistakeOrder' };
      if (ex.type === 'set' && got.length < want.length && got.every(hit)) return { key: 'mistakeMissing', vars: { n: want.length } };
      if (ex.type === 'set' && got.length > want.length && want.every((w) => got.some((x) => near(x, w)))) return { key: 'mistakeExtra' };
      if (ex.type === 'tuple' && got.length === want.length) {
        const ok = got.filter((x, i) => near(x, want[i])).length;
        if (ok > 0 && ok < want.length) return { key: 'mistakePartial', vars: { k: ok, n: want.length } };
      }
      if (ex.type === 'set' && got.length === want.length && want.every((w) => got.some((x) => near(x, -w)))) return { key: 'mistakeSign' };
    }
    return null;
  }

  // správna odpoveď v tvare, ktorý prejde kontrolou (pre validátor a testy)
  function canonical(ex) {
    if (ex.type === 'set' || ex.type === 'tuple') return ex.answer.join('; ');
    return String(ex.answer);
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
    make, check, formatAnswer, parseNum, register, diagnose, stepEx, canonical, withSeed, hashSeed,
    has: (id) => !!G[id],
    util: { rnd, pick, gcd, fmt, term, shuffle }
  };
})();
