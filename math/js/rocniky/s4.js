/* 4. ročník SŠ (gymnázium): limita, derivácie a priebeh funkcie, integrály, zložené a inverzné funkcie,
   náročnejšie rovnice a sústavy, parametrické úlohy, analytická geometria a stereometria, štatistika,
   kombinatorika a pravdepodobnosť, binomické rozdelenie a opakovanie na maturitu.
   Lekcie „derivacie“ (order 20) a „integraly“ (order 60) sú v content.js. */
(function () {
  'use strict';

  const { rnd, pick, gcd, fmt, term, shuffle } = EXERCISES.util;
  const { plane, axes, curvePath, svg, n1, sk } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 's4' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 riešenie, 2 riešenia, 5 riešení.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);

  const nz = (a, b) => { let v = 0; while (v === 0) v = rnd(a, b); return v; };
  const par = (v) => (v < 0 ? `(${v})` : String(v));
  const dc = (x) => fmt(x).replace(',', '{,}');                       // na 3 desatinné miesta, pre KaTeX
  const round = (x, d) => Math.round(x * Math.pow(10, d)) / Math.pow(10, d);
  const dd = (x, d = 2) => round(x, d).toFixed(d).replace('.', '{,}'); // pevný počet miest, pre KaTeX
  const dt = (x, d = 2) => round(x, d).toFixed(d).replace('.', ',');   // pevný počet miest, obyčajný text
  const red = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g, q / g]; };
  const fTex = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${b}}`; };
  const fTxt = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a}/${b}`; };
  const lead = (c, v) => (c === 1 && v ? v : c === -1 && v ? '-' + v : c + v);
  // lineárna kombinácia: lin([[2,'x'],[-1,'y'],[3,'']]) = "2x - y + 3"
  const lin = (pairs) => {
    const s = pairs.map(([c, v]) => term(c, v)).join('').trim();
    return !s ? '0' : s[0] === '+' ? s.slice(2) : '-' + s.slice(2);
  };
  const poly = (cs, x = 'x') => {
    const n = cs.length - 1;
    return lin(cs.map((c, i) => [c, n - i === 0 ? '' : n - i === 1 ? x : `${x}^{${n - i}}`]));
  };
  // oddelenie tisícov v KaTeX: "11314{,}08" -> "11\,314{,}08"
  const ths = (s) => s.replace(/^(-?\d+)/, (m) => m.replace(/\B(?=(\d{3})+(?!\d))/g, '\\,'));
  const fac = (r) => (r === 0 ? 'x' : `(${poly([1, -r])})`);           // činiteľ (x - r)
  const peval =(cs, x) => cs.reduce((s, c) => s * x + c, 0);
  // člen s násobením bodkou: " + 3\cdot 2^x", " - 2^x"
  const cterm = (c, v) => (c === 0 ? '' : ` ${c > 0 ? '+' : '-'} ${Math.abs(c) === 1 ? '' : Math.abs(c) + '\\cdot '}${v}`);
  const sq = (v, m) => (m === 0 ? `${v}^2` : `(${lin([[1, v], [-m, '']])})^2`);
  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
  const C = (n, k) => { if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
  const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10]];
  const ROUND2 = 'Výsledok zaokrúhli na 2 desatinné miesta.';
  // výsledok s π: prijme presné π aj π ≈ 3,14
  const piTol = (v) => Math.max(0.006, 0.0006 * Math.abs(v));

  /* ======================= A. DIFERENCIÁLNY A INTEGRÁLNY POČET ======================= */

  fig('s4-limita', {
    controls: [{ id: 'h', label: 'Vzdialenosť h od nuly', min: 0.1, max: 3, step: 0.1, value: 2 }],
    draw: (v) => {
      const p = plane(-8, 8, -1, 2, 420, 240);
      const f = (x) => (Math.abs(x) < 1e-9 ? 1 : Math.sin(x) / x);
      const h = v.h, y = f(h);
      const clipped = `<line class="f-dash" x1="${n1(p.X(-8))}" y1="${n1(p.Y(1))}" x2="${n1(p.X(8))}" y2="${n1(p.Y(1))}"/>
        <path class="f-accent" d="${curvePath(p, f, -8, 8, 320)}"/>
        <line class="f-thin" x1="${n1(p.X(-h))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(-h))}" y2="${n1(p.Y(y))}"/>
        <line class="f-thin" x1="${n1(p.X(h))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(h))}" y2="${n1(p.Y(y))}"/>
        <circle class="f-dot" cx="${n1(p.X(-h))}" cy="${n1(p.Y(y))}" r="5"/>
        <circle class="f-dot" cx="${n1(p.X(h))}" cy="${n1(p.Y(y))}" r="5"/>
        <circle class="f-tri" cx="${n1(p.X(0))}" cy="${n1(p.Y(1))}" r="5"/>`;
      return {
        svg: svg(p, axes(p, 2, 1), clipped, '', 'Graf funkcie sin x / x s dierou v bode 0'),
        readout: `f(−h) = f(h) = sin h / h = ${sk(y, 4)} · <span class="c-accent">pre h → 0 sa hodnota blíži k 1</span>`
      };
    }
  });

  lesson({
    id: 's4-limita', order: 10, topics: ['analyza'], title: 'Limita funkcie',
    summary: 'Čomu sa blížia hodnoty funkcie, výpočet limít typu 0/0 a limity v nekonečne.',
    theory: [
      `<p>Zápis $\\lim_{x\\to a} f(x) = L$ znamená, že hodnoty $f(x)$ sa ľubovoľne priblížia k číslu $L$, ak $x$ dostatočne priblížime k $a$ (pričom $x\\neq a$).
       Hodnota funkcie priamo v bode $a$ na limite <strong>nezáleží</strong>, funkcia v ňom dokonca nemusí byť definovaná.
       Limita existuje práve vtedy, keď sa rovnajú <strong>jednostranné limity</strong> $\\lim_{x\\to a^-} f(x)$ a $\\lim_{x\\to a^+} f(x)$.</p>`,
      { fig: 's4-limita', caption: 'Funkcia $f(x)=\\frac{\\sin x}{x}$ nie je v bode $0$ definovaná (prázdny krúžok), napriek tomu $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$. Zmenšuj $h$ a sleduj hodnoty.' },
      `<p><strong>Ako počítame limity:</strong></p>
       <ul><li>Ak je $f$ v bode $a$ spojitá (polynóm, $\\sin$, $\\mathrm{e}^x$ …), stačí dosadiť: $\\lim_{x\\to a} f(x) = f(a)$.</li>
       <li>Výraz typu $\\frac{0}{0}$ upravíme: rozložíme na súčin a vykrátime, alebo rozšírime odmocninu na rozdiel štvorcov.</li>
       <li>Dôležitá limita: $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, preto $\\lim_{x\\to 0}\\frac{\\sin kx}{x} = k$.</li>
       <li>Výraz $\\frac{c}{0}$ s $c\\neq 0$ vedie k nevlastnej limite $\\pm\\infty$; znamienko určíme z jednostranných limít.</li></ul>`,
      `<p><strong>Limita v nekonečne</strong> racionálnej funkcie: čitateľa aj menovateľa vydelíme najvyššou mocninou $x$ v menovateli.
       Pri rovnakých stupňoch je limita podielom vedúcich koeficientov, ak má čitateľ nižší stupeň, limita je $0$.
       Napríklad $\\lim_{x\\to\\infty}\\frac{3x^2+1}{2x^2-x} = \\frac{3}{2}$. Ak $\\lim_{x\\to\\pm\\infty} f(x) = q$, priamka $y=q$ je vodorovná asymptota grafu.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3}$.',
        steps: ['Dosadením dostaneme $\\frac{0}{0}$, takže treba výraz upraviť.',
          'Čitateľ rozložíme: $x^2-9=(x-3)(x+3)$. Pre $x\\neq 3$ vykrátime: $\\frac{(x-3)(x+3)}{x-3}=x+3$.',
          '$\\lim_{x\\to 3}(x+3)=6$.', '<strong>Výsledok: 6</strong>'] },
      { task: 'Vypočítaj $\\lim_{x\\to\\infty}\\dfrac{4x^2-x+7}{2x^2+5}$.',
        steps: ['Čitateľa aj menovateľa vydelíme $x^2$: $\\dfrac{4-\\frac{1}{x}+\\frac{7}{x^2}}{2+\\frac{5}{x^2}}$.',
          'Zlomky $\\frac{1}{x}$, $\\frac{7}{x^2}$ a $\\frac{5}{x^2}$ sa pre $x\\to\\infty$ blížia k nule.',
          '<strong>Výsledok: $\\frac{4}{2}=2$</strong>'] }
    ]
  });

  gen('s4-limita', () => {
    const t = Math.random();
    if (t < 0.28) {
      const a = nz(-5, 5), b = rnd(-6, 6), L = a + b;
      const num = poly([1, b - a, -a * b]);
      return {
        signed: true, answer: L,
        q: `Vypočítaj $\\lim_{x\\to ${a}} \\dfrac{${num}}{${poly([1, -a])}}$.`,
        solution: `Po dosadení $x=${a}$ vyjde výraz $\\frac{0}{0}$, preto čitateľa rozložíme: $${num}=${fac(a)}${fac(-b)}$.
          Pre $x\\neq ${a}$ vykrátime a dostaneme $\\lim_{x\\to ${a}}${b === 0 ? 'x' : `(${poly([1, b])})`}=${b === 0 ? '' : `${a}${term(b)}=`}${L}$.`,
        hint: 'Ak po dosadení vyjde $\\frac{0}{0}$, rozlož čitateľa na súčin. Jeden z činiteľov sa vykráti s menovateľom.',
        mistakes: [
          ...(L !== 0 ? [{ value: 0, msg: 'Dosadením vyšlo $\\frac{0}{0}$, a to nie je nula, ale neurčitý výraz. Čitateľa rozlož na súčin a vykráť.' }] : []),
          { value: b, msg: `Po vykrátení ostal výraz $${b === 0 ? 'x' : poly([1, b])}$ a doňho ešte treba dosadiť $x=${a}$.` }
        ],
        steps: [
          { q: `Čitateľ $${num}$ rozlož na súčin $${fac(a)}\\cdot(x+c)$. Aké je číslo $c$?`, answer: b, signed: true,
            hint: `Druhý koreň čitateľa je $-c$; súčin koreňov je $${-a * b}$.` },
          { q: `Po vykrátení činiteľa $${fac(a)}$ zostane $${b === 0 ? 'x' : poly([1, b])}$. Akú hodnotu má tento výraz pre $x=${a}$?`, answer: L, signed: true }
        ]
      };
    }
    if (t < 0.52) {
      const n = rnd(1, 3), lower = Math.random() < 0.25;
      const p = nz(-6, 6), s = nz(-6, 6);
      const N = [p]; for (let i = 0; i < (lower ? n - 1 : n); i++) N.push(rnd(-9, 9));
      const D = [s]; for (let i = 0; i < n; i++) D.push(rnd(-9, 9));
      const xn = n === 1 ? 'x' : `x^{${n}}`;
      return {
        signed: true, answer: lower ? 0 : p / s, show: lower ? '0' : fTxt(p, s),
        q: `Vypočítaj $\\lim_{x\\to\\infty} \\dfrac{${poly(N)}}{${poly(D)}}$. Výsledok zadaj ako celé číslo alebo zlomok (napr. -3/2).`,
        solution: `Čitateľa aj menovateľa vydelíme najvyššou mocninou menovateľa, teda $${xn}$. Všetky členy tvaru $\\frac{c}{x^k}$ sa blížia k nule.
          ${lower ? `Čitateľ má nižší stupeň než menovateľ, v čitateli preto zostane len nula a limita je $0$.`
            : `Zostane podiel vedúcich koeficientov: $\\frac{${p}}{${s}}${fTex(p, s) === `\\frac{${p}}{${s}}` ? '' : `=${fTex(p, s)}`}$.`}`,
        hint: 'Porovnaj stupne čitateľa a menovateľa. Pri rovnakom stupni rozhodujú vedúce koeficienty.',
        mistakes: lower
          ? [{ value: p / s, msg: 'Podiel vedúcich koeficientov rozhoduje len pri rovnakom stupni. Tu má čitateľ nižší stupeň, takže po vydelení najvyššou mocninou menovateľa ide celý čitateľ k nule.' }]
          : (D[n] !== 0 && Math.abs(N[n] / D[n] - p / s) > 1e-9
            ? [{ value: N[n] / D[n], msg: 'Pre $x\\to\\infty$ nerozhodujú absolútne členy, ale členy s najvyššou mocninou $x$.' }] : [])
      };
    }
    if (t < 0.7) {
      const a = rnd(1, 6);
      return {
        answer: 1 / (2 * a), show: `1/${2 * a}`,
        q: `Vypočítaj $\\lim_{x\\to ${a * a}} \\dfrac{\\sqrt{x}-${a}}{x-${a * a}}$. Výsledok zadaj ako zlomok.`,
        solution: `Dosadením dostaneme $\\frac{0}{0}$. Menovateľ je rozdiel štvorcov: $x-${a * a}=(\\sqrt{x}-${a})(\\sqrt{x}+${a})$.
          Po vykrátení $\\lim_{x\\to ${a * a}}\\frac{1}{\\sqrt{x}+${a}}=\\frac{1}{${a}+${a}}=\\frac{1}{${2 * a}}$.`,
        hint: 'Zapíš menovateľ ako $(\\sqrt{x})^2-a^2$ a rozlož ho podľa vzorca $A^2-B^2=(A-B)(A+B)$.',
        mistakes: [
          { value: 0, msg: 'Dosadením vyjde $\\frac{0}{0}$, čo nie je nula, ale neurčitý výraz. Menovateľ rozlož ako rozdiel štvorcov a vykráť.' },
          { value: 1 / a, msg: `Po vykrátení ostane v menovateli $\\sqrt{x}+${a}$, nie len $\\sqrt{x}$. Dosaď $x=${a * a}$ do celého súčtu.` }
        ],
        steps: [
          { q: `Menovateľ rozložíme: $x-${a * a}=(\\sqrt{x}-${a})(\\sqrt{x}+${a})$. Po vykrátení zostane $\\frac{1}{\\sqrt{x}+${a}}$. Akú hodnotu má $\\sqrt{x}+${a}$ pre $x=${a * a}$?`, answer: 2 * a },
          { q: 'Aká je teda hodnota limity? Zadaj ju ako zlomok.', answer: 1 / (2 * a) }
        ]
      };
    }
    if (t < 0.86) {
      const k = rnd(2, 9), m = rnd(1, 9);
      return {
        answer: k / m, show: fTxt(k, m),
        q: `Vypočítaj $\\lim_{x\\to 0} \\dfrac{\\sin ${k}x}{${lead(m, 'x')}}$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Upravíme: $\\dfrac{\\sin ${k}x}{${lead(m, 'x')}}=\\frac{${k}}{${m}}\\cdot\\dfrac{\\sin ${k}x}{${k}x}$. Pre $x\\to 0$ aj $t=${k}x\\to 0$ a $\\frac{\\sin t}{t}\\to 1$.
          Limita je $${gcd(k, m) > 1 ? `\\frac{${k}}{${m}}=` : ''}${fTex(k, m)}$.`,
        hint: 'Využi $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: vynásob a vydeľ výraz tak, aby si v menovateli dostal ten istý argument ako v sínuse.',
        mistakes: [
          ...(k !== m ? [{ value: 1, msg: `Vzorec $\\frac{\\sin t}{t}\\to 1$ platí, len keď je v menovateli presne argument sínusu, teda $${k}x$. Výraz najprv uprav.` }] : []),
          ...(m > 1 ? [{ value: k, msg: `Nezabudni na koeficient $${m}$ v menovateli: výraz je $\\frac{${k}}{${m}}\\cdot\\frac{\\sin ${k}x}{${k}x}$.` }] : [])
        ]
      };
    }
    const a = rnd(-4, 4), c = nz(-6, 6), right = Math.random() < 0.5;
    const plus = (c > 0) === right;
    const ans = plus ? '$+\\infty$' : '$-\\infty$';
    return {
      type: 'choice', options: ['$+\\infty$', '$-\\infty$', '$0$', `$${c}$`], answer: ans,
      q: `Urči jednostrannú limitu $\\lim_{x\\to ${a}^{${right ? '+' : '-'}}} \\dfrac{${c}}{${poly([1, -a])}}$.`,
      solution: `Pre $x\\to ${a}^{${right ? '+' : '-'}}$ je $x ${right ? '&gt;' : '&lt;'} ${a}$, menovateľ $${poly([1, -a])}$ je teda ${right ? 'kladný' : 'záporný'} a blíži sa k nule.
        Čitateľ $${c}$ je ${c > 0 ? 'kladný' : 'záporný'}, preto zlomok rastie v absolútnej hodnote nad všetky medze so znamienkom ${plus ? 'plus' : 'mínus'}: limita je ${ans}.`,
      hint: 'Zisti znamienko menovateľa pre $x$ tesne vpravo alebo vľavo od daného bodu a skombinuj ho so znamienkom čitateľa.',
      choiceHints: {
        [plus ? '$-\\infty$' : '$+\\infty$']: `Pozor na znamienko menovateľa: pre $x$ tesne ${right ? 'vpravo' : 'vľavo'} od $${a}$ je menovateľ $${poly([1, -a])}$ ${right ? 'kladný' : 'záporný'}. Skombinuj ho so znamienkom čitateľa.`,
        '$0$': 'Čitateľ je nenulová konštanta a menovateľ sa blíži k nule, takže zlomok v absolútnej hodnote rastie nad všetky medze.',
        [`$${c}$`]: 'Dosadiť sa nedá, menovateľ sa blíži k nule. Deliť číslom blízkym nule dáva v absolútnej hodnote veľmi veľké čísla.'
      }
    };
  });

  fig('s4-exp-ln', {
    draw: () => {
      const p = plane(-3, 4, -3, 4, 340, 340);
      const clipped = `<line class="f-dash" x1="${n1(p.X(-3))}" y1="${n1(p.Y(-3))}" x2="${n1(p.X(4))}" y2="${n1(p.Y(4))}"/>
        <path class="f-thin" d="${curvePath(p, (x) => x + 1, -3, 4, 2)}"/>
        <path class="f-thin" d="${curvePath(p, (x) => x - 1, -3, 4, 2)}"/>
        <path class="f-accent" d="${curvePath(p, Math.exp, -3, 1.5)}"/>
        <path class="f-ok" d="${curvePath(p, Math.log, 0.02, 4, 300)}"/>
        <circle class="f-dot" cx="${n1(p.X(0))}" cy="${n1(p.Y(1))}" r="5"/>
        <circle class="f-dot f-dot-ok" cx="${n1(p.X(1))}" cy="${n1(p.Y(0))}" r="5"/>`;
      const front = `<text class="f-math c-accent" x="${n1(p.X(1.3) + 6)}" y="${n1(p.Y(3.4))}">y = eˣ</text>
        <text class="f-math c-ok" x="${n1(p.X(3))}" y="${n1(p.Y(1.6))}" text-anchor="middle">y = ln x</text>
        <text class="f-small" x="${n1(p.X(-2.9))}" y="${n1(p.Y(-1.4))}">y = x + 1</text>
        <text class="f-small" x="${n1(p.X(2.2))}" y="${n1(p.Y(0.5))}">y = x − 1</text>`;
      return svg(p, axes(p), clipped, front, 'Grafy funkcií e na x a ln x s dotyčnicami');
    }
  });

  lesson({
    id: 's4-derivacie-funkcii', order: 30, topics: ['analyza'], title: 'Derivácie základných funkcií',
    summary: 'Derivácia exponenciálnej, logaritmickej a goniometrických funkcií, súčinu, podielu a zloženej funkcie.',
    theory: [
      `<p><strong>Derivácie základných funkcií:</strong></p>
       <table class="tbl tbl-auto">
         <tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(x)$</th><th>$f'(x)$</th></tr>
         <tr><td>$c$</td><td>$0$</td><td>$x^n$</td><td>$n\\,x^{n-1}$</td></tr>
         <tr><td>$\\mathrm{e}^x$</td><td>$\\mathrm{e}^x$</td><td>$a^x$</td><td>$a^x\\ln a$</td></tr>
         <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td>$\\log_a x$</td><td>$\\frac{1}{x\\ln a}$</td></tr>
         <tr><td>$\\sin x$</td><td>$\\cos x$</td><td>$\\cos x$</td><td>$-\\sin x$</td></tr>
         <tr><td>$\\mathrm{tg}\\,x$</td><td>$\\frac{1}{\\cos^2 x}$</td><td>$\\sqrt{x}$</td><td>$\\frac{1}{2\\sqrt{x}}$</td></tr>
       </table>`,
      `<p><strong>Pravidlá:</strong> súčin $(u\\cdot v)'=u'v+uv'$, podiel $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$ (pre $v\\neq 0$),
       zložená funkcia $\\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x)$ — deriváciu „vonkajšej“ funkcie vynásobíme deriváciou „vnútornej“.
       Napríklad $(\\sin 3x)'=3\\cos 3x$, $(\\mathrm{e}^{x^2})'=2x\\,\\mathrm{e}^{x^2}$, $\\big(\\ln(x^2+1)\\big)'=\\frac{2x}{x^2+1}$.</p>`,
      { fig: 's4-exp-ln', caption: 'Grafy $y=\\mathrm{e}^x$ a $y=\\ln x$ sú súmerné podľa priamky $y=x$. Dotyčnica ku grafu $\\mathrm{e}^x$ v bode $[0; 1]$ má smernicu $\\mathrm{e}^0=1$, dotyčnica ku grafu $\\ln x$ v bode $[1; 0]$ má smernicu $\\frac{1}{1}=1$.' },
      `<p><strong>Dotyčnica</strong> ku grafu funkcie $f$ v bode $[x_0; f(x_0)]$ má rovnicu $y=f(x_0)+f'(x_0)(x-x_0)$.</p>`
    ],
    examples: [
      { task: 'Zderivuj $f(x)=x^2\\sin x$.',
        steps: ['Ide o súčin $u=x^2$, $v=\\sin x$, kde $u\'=2x$ a $v\'=\\cos x$.',
          '<strong>$f\'(x)=2x\\sin x+x^2\\cos x$</strong>'] },
      { task: 'Pre $f(x)=\\ln(x^2+1)$ vypočítaj $f\'(1)$ a napíš rovnicu dotyčnice v bode $x_0=1$.',
        steps: ['Zložená funkcia: vonkajšia $\\ln u$ má deriváciu $\\frac{1}{u}$, vnútorná $u=x^2+1$ má deriváciu $2x$.',
          '$f\'(x)=\\frac{2x}{x^2+1}$, teda $f\'(1)=\\frac{2}{2}=1$.',
          '$f(1)=\\ln 2$, dotyčnica: $y=\\ln 2+1\\cdot(x-1)$, čiže $y=x-1+\\ln 2$.'] }
    ]
  });

  gen('s4-derivacie-funkcii', () => {
    const t = Math.random();
    if (t < 0.25) {
      const a = nz(-5, 5), b = nz(-6, 6);
      if (Math.random() < 0.5) {
        return {
          signed: true, answer: a + b,
          q: `Pre funkciu $f(x)=(${poly([a, b])})\\,\\mathrm{e}^{x}$ vypočítaj $f'(0)$.`,
          solution: `Derivácia súčinu: $f'(x)=${a}\\cdot\\mathrm{e}^{x}+(${poly([a, b])})\\,\\mathrm{e}^{x}=(${poly([a, a + b])})\\,\\mathrm{e}^{x}$.
            Keďže $\\mathrm{e}^0=1$, je $f'(0)=${a + b}$.`,
          hint: 'Použi $(u\\cdot v)\'=u\'v+uv\'$ a $(\\mathrm{e}^x)\'=\\mathrm{e}^x$.',
          mistakes: [
            { value: a, msg: 'Derivácia súčinu nie je súčin derivácií: $(u\\cdot v)\'=u\'v+uv\'$, nie $u\'\\cdot v\'$.' },
            { value: b, msg: 'Zabudol si na člen $u\'v$: derivuj aj lineárnu funkciu v zátvorke.' }
          ],
          steps: [
            { q: `Nech $u=${poly([a, b])}$, $v=\\mathrm{e}^x$. Akú hodnotu má člen $u'v$ v bode $0$?`, answer: a, signed: true },
            { q: 'Akú hodnotu má člen $uv\'$ v bode $0$?', answer: b, signed: true },
            { q: 'Koľko je $f\'(0)$?', answer: a + b, signed: true }
          ]
        };
      }
      return {
        signed: true, answer: a + b,
        q: `Pre funkciu $f(x)=(${poly([a, b])})\\ln x$ vypočítaj $f'(1)$.`,
        solution: `Derivácia súčinu: $f'(x)=${a}\\ln x+(${poly([a, b])})\\cdot\\frac{1}{x}$. Keďže $\\ln 1=0$, je $f'(1)=0+(${a}${term(b)})\\cdot 1=${a + b}$.`,
        hint: 'Použi $(u\\cdot v)\'=u\'v+uv\'$ a $(\\ln x)\'=\\frac{1}{x}$. Nezabudni, že $\\ln 1=0$.',
        mistakes: [
          { value: a, msg: 'Derivácia súčinu nie je súčin derivácií: $(u\\cdot v)\'=u\'v+uv\'$, nie $u\'\\cdot v\'$.' },
          ...(a + b !== 0 ? [{ value: 2 * a + b, msg: 'Pozor, $\\ln 1=0$, nie $1$ (lebo $\\mathrm{e}^0=1$). Prvý člen $u\'v$ je preto v bode $1$ nulový.' }] : [])
        ],
        steps: [
          { q: `Nech $u=${poly([a, b])}$, $v=\\ln x$. Akú hodnotu má člen $u'v=${a}\\ln x$ v bode $1$?`, answer: 0, signed: true },
          { q: `Člen $uv'$ je $(${poly([a, b])})\\cdot\\frac{1}{x}$. Koľko je teda $f'(1)$?`, answer: a + b, signed: true }
        ]
      };
    }
    if (t < 0.5) {
      let a, b, n, x0, inner;
      do { a = nz(-3, 3); b = rnd(-5, 5); n = rnd(2, 4); x0 = rnd(-2, 2); inner = a * x0 + b; } while (Math.abs(inner) > 4 || b === 0);
      const val = n * a * Math.pow(inner, n - 1);
      return {
        signed: true, answer: val,
        q: `Pre funkciu $f(x)=(${poly([a, b])})^{${n}}$ vypočítaj $f'(${x0})$.`,
        solution: `Derivácia zloženej funkcie: $f'(x)=${n}(${poly([a, b])})^{${n - 1}}\\cdot ${par(a)}$.
          V bode $${x0}$ je vnútorná funkcia $${a}\\cdot ${par(x0)}${term(b)}=${inner}$, teda $f'(${x0})=${n}\\cdot ${par(inner)}^{${n - 1}}\\cdot ${par(a)}=${val}$.`,
        hint: 'Zderivuj vonkajšiu mocninu (vnútro nechaj tak) a vynásob deriváciou vnútornej funkcie.',
        mistakes: [
          ...(a !== 1 && n * Math.pow(inner, n - 1) !== val ? [{ value: n * Math.pow(inner, n - 1), msg: `Zabudol si vynásobiť deriváciou vnútornej funkcie: $(${poly([a, b])})'=${a}$.` }] : []),
          ...(n * a * Math.pow(inner, n) !== val ? [{ value: n * a * Math.pow(inner, n), msg: `Pri derivovaní mocniny sa exponent zníži o jedna: $(u^{${n}})'=${n}u^{${n - 1}}\\cdot u'$.` }] : [])
        ],
        steps: [
          { q: `Akú hodnotu má vnútorná funkcia $${poly([a, b])}$ v bode $${x0}$?`, answer: inner, signed: true },
          { q: `Derivácia je $f'(x)=${n}(${poly([a, b])})^{${n - 1}}\\cdot ${par(a)}$. Koľko je $f'(${x0})$?`, answer: val, signed: true }
        ]
      };
    }
    if (t < 0.75) {
      let a, b, c, d, x0, den;
      do { a = nz(-5, 5); b = rnd(-6, 6); c = pick([1, 1, 2, -1]); d = nz(-5, 5); x0 = rnd(-3, 3); den = c * x0 + d; } while (a * d - b * c === 0 || den === 0);
      const num = a * d - b * c;
      return {
        signed: true, answer: num / (den * den), show: fTxt(num, den * den),
        q: `Pre funkciu $f(x)=\\dfrac{${poly([a, b])}}{${poly([c, d])}}$ vypočítaj $f'(${x0})$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Derivácia podielu: $f'(x)=\\dfrac{${a}(${poly([c, d])})-(${poly([a, b])})\\cdot ${par(c)}}{(${poly([c, d])})^2}=\\dfrac{${num}}{(${poly([c, d])})^2}$.
          V bode $${x0}$: $f'(${x0})=\\dfrac{${num}}{${par(den)}^2}=${fTex(num, den * den)}$.`,
        hint: 'Použi $\\left(\\frac{u}{v}\\right)\'=\\frac{u\'v-uv\'}{v^2}$. V čitateli sa členy s $x$ odčítajú.',
        mistakes: Math.abs(den) !== 1 ? [{ value: num / den, msg: 'Zabudol si umocniť menovateľ: vo vzorci pre deriváciu podielu je v menovateli $v^2$.' }] : [],
        steps: [
          { q: `Čitateľ derivácie $${a}(${poly([c, d])})-(${poly([a, b])})\\cdot ${par(c)}$ je po úprave konštanta. Aká?`, answer: num, signed: true },
          { q: `Akú hodnotu má menovateľ derivácie $(${poly([c, d])})^2$ v bode $${x0}$?`, answer: den * den },
          { q: `Koľko je $f'(${x0})$? Zadaj celé číslo alebo zlomok.`, answer: num / (den * den), signed: true }
        ]
      };
    }
    const A = nz(-4, 4), k = rnd(2, 6), B = nz(-4, 4), m = nz(-3, 3), cosine = Math.random() < 0.35;
    const val = cosine ? B * m : A * k + B * m;
    const g = cosine ? `\\cos ${k}x` : `\\sin ${k}x`;
    const ex = `\\mathrm{e}^{${lead(m, 'x')}}`;
    return {
      signed: true, answer: val,
      q: `Pre funkciu $f(x)=${lead(A, g)}${term(B, ex)}$ vypočítaj $f'(0)$.`,
      solution: cosine
        ? `$f'(x)=${-A * k}\\sin ${k}x${term(B * m, ex)}$. Keďže $\\sin 0=0$ a $\\mathrm{e}^0=1$, je $f'(0)=0${term(B * m)}=${val}$.`
        : `$f'(x)=${A * k}\\cos ${k}x${term(B * m, ex)}$. Keďže $\\cos 0=1$ a $\\mathrm{e}^0=1$, je $f'(0)=${A * k}${term(B * m)}=${val}$.`,
      hint: 'Pri zloženej funkcii násob deriváciou vnútra: $(\\sin kx)\'=k\\cos kx$, $(\\cos kx)\'=-k\\sin kx$, $(\\mathrm{e}^{mx})\'=m\\,\\mathrm{e}^{mx}$.',
      mistakes: [
        ...((cosine ? B : A + B) !== val ? [{ value: cosine ? B : A + B, msg: 'Zabudol si násobiť deriváciou vnútornej funkcie: $(\\sin kx)\'=k\\cos kx$ a $(\\mathrm{e}^{mx})\'=m\\,\\mathrm{e}^{mx}$.' }] : []),
        ...(!cosine && B * m - A * k !== val ? [{ value: B * m - A * k, msg: 'Derivácia sínusu je kosínus bez mínusu: $(\\sin x)\'=\\cos x$. Mínus patrí k derivácii kosínusu.' }] : [])
      ],
      steps: [
        { q: `Akú hodnotu má derivácia člena $${lead(A, g)}$ v bode $0$?`, answer: cosine ? 0 : A * k, signed: true },
        { q: `Akú hodnotu má derivácia člena $${lead(B, ex)}$ v bode $0$?`, answer: B * m, signed: true },
        { q: 'Koľko je $f\'(0)$?', answer: val, signed: true }
      ]
    };
  });

  fig('s4-extremy', {
    controls: [{ id: 'x0', label: 'x₀', min: -2.2, max: 2.2, step: 0.1, value: -1.6 }],
    draw: (v) => {
      const p = plane(-2.5, 2.5, -4, 4, 420, 300);
      const f = (x) => x * x * x - 3 * x;
      const x0 = v.x0, y0 = f(x0);
      let k = 3 * x0 * x0 - 3;
      if (Math.abs(k) < 1e-9) k = 0;
      const tx = (x) => y0 + k * (x - x0);
      const clipped = `<path class="f-ok" d="${curvePath(p, f, -2.5, -1, 80)}"/>
        <path class="f-warn" d="${curvePath(p, f, -1, 1, 80)}"/>
        <path class="f-ok" d="${curvePath(p, f, 1, 2.5, 80)}"/>
        <line class="f-accent" x1="${n1(p.X(x0 - 0.6))}" y1="${n1(p.Y(tx(x0 - 0.6)))}" x2="${n1(p.X(x0 + 0.6))}" y2="${n1(p.Y(tx(x0 + 0.6)))}"/>
        <circle class="f-vertex" cx="${n1(p.X(-1))}" cy="${n1(p.Y(2))}" r="5"/>
        <circle class="f-vertex" cx="${n1(p.X(1))}" cy="${n1(p.Y(-2))}" r="5"/>
        <circle class="f-dot" cx="${n1(p.X(x0))}" cy="${n1(p.Y(y0))}" r="5"/>`;
      const state = k > 0 ? '<span class="c-ok">f′ &gt; 0, funkcia rastie</span>'
        : k < 0 ? 'f′ &lt; 0, funkcia klesá' : '<span class="c-accent">f′ = 0, stacionárny bod (extrém)</span>';
      return {
        svg: svg(p, axes(p), clipped, '', 'Graf funkcie x na tretiu mínus 3x s extrémami'),
        readout: `x₀ = ${sk(x0, 1)} · f′(x₀) = ${sk(k)} · ${state}`
      };
    }
  });

  lesson({
    id: 's4-extremy', order: 40, topics: ['analyza', 'funkcie'], title: 'Monotónnosť a extrémy funkcie',
    summary: 'Znamienko derivácie, stacionárne body, lokálne a globálne extrémy, optimalizačné úlohy.',
    theory: [
      `<p>Ak je $f'(x)&gt;0$ na intervale $I$, funkcia $f$ je na ňom <strong>rastúca</strong>; ak $f'(x)&lt;0$, je <strong>klesajúca</strong>.
       Body, v ktorých $f'(x)=0$, nazývame <strong>stacionárne</strong>. Lokálny extrém môže mať funkcia (s deriváciou) len v stacionárnom bode.</p>`,
      { fig: 's4-extremy', caption: 'Graf $f(x)=x^3-3x$, $f\'(x)=3x^2-3=3(x-1)(x+1)$. Zelené časti: $f\'&gt;0$, oranžová časť: $f\'&lt;0$. V bode $-1$ je lokálne maximum $2$, v bode $1$ lokálne minimum $-2$.' },
      `<p><strong>Rozhodnutie o extréme:</strong> ak $f'$ mení znamienko z $+$ na $-$, je v bode <strong>lokálne maximum</strong>; zmena z $-$ na $+$ znamená <strong>lokálne minimum</strong>.
       Rovnako dobre poslúži druhá derivácia: $f'(x_0)=0$ a $f''(x_0)&lt;0$ dáva maximum, $f''(x_0)&gt;0$ minimum.</p>`,
      `<p><strong>Globálne extrémy na uzavretom intervale</strong> $\\langle a; b\\rangle$: porovnáme hodnoty v stacionárnych bodoch ležiacich v intervale a v krajných bodoch $a$, $b$.
       Tak riešime aj <strong>optimalizačné úlohy</strong>: veličinu vyjadríme ako funkciu jednej premennej a hľadáme jej najväčšiu či najmenšiu hodnotu.</p>`
    ],
    examples: [
      { task: 'Nájdi lokálne extrémy funkcie $f(x)=x^3-6x^2+9x+1$.',
        steps: ['$f\'(x)=3x^2-12x+9=3(x-1)(x-3)$, stacionárne body sú $1$ a $3$.',
          'Na $(-\\infty; 1)$ je $f\'&gt;0$, na $(1; 3)$ je $f\'&lt;0$, na $(3; \\infty)$ je $f\'&gt;0$.',
          'V bode $1$ je lokálne maximum $f(1)=5$, v bode $3$ lokálne minimum $f(3)=1$.'] },
      { task: 'Z drôtu dĺžky $40\\,\\text{cm}$ chceme ohnúť obdĺžnik s čo najväčším obsahom. Aké má rozmery?',
        steps: ['Strany sú $x$ a $20-x$, obsah $S(x)=x(20-x)=20x-x^2$ pre $x\\in(0; 20)$.',
          '$S\'(x)=20-2x=0$ pre $x=10$; $S\'\'(x)=-2&lt;0$, ide o maximum.',
          '<strong>Najväčší obsah má štvorec $10\\times 10\\,\\text{cm}$, $S=100\\,\\text{cm}^2$.</strong>'] }
    ]
  });

  // kubická funkcia s celočíselnými stacionárnymi bodmi p < q: f'(x) = 3a(x - p)(x - q)
  const cubicPQ = () => {
    let p, q;
    do { p = rnd(-4, 3); q = rnd(p + 1, 5); } while ((p + q) % 2 !== 0);
    const a = pick([1, -1]), c = rnd(-5, 5);
    const cs = [a, -a * 3 * (p + q) / 2, 3 * a * p * q, c];
    return { p, q, a, cs, d: [3 * a, -3 * a * (p + q), 3 * a * p * q] };
  };

  gen('s4-extremy', () => {
    const t = Math.random();
    if (t < 0.32) {
      const { p, q, a, cs, d } = cubicPQ();
      const wantMax = Math.random() < 0.5;
      const x = (a > 0) === wantMax ? p : q, y = peval(cs, x);
      const kind = wantMax ? 'lokálne maximum' : 'lokálne minimum';
      return {
        type: 'tuple', signed: true, answer: [x, y], placeholder: 'x; y',
        q: `Funkcia $f(x)=${poly(cs)}$ má práve jedno ${kind}. Nájdi bod, v ktorom ho nadobúda: zadaj $x$ a $f(x)$ (napr. 2; -5).`,
        solution: `$f'(x)=${poly(d)}=${a > 0 ? '3' : '-3'}${fac(p)}${fac(q)}$, stacionárne body sú $${p}$ a $${q}$.
          Derivácia má znamienka ${a > 0 ? '$+, -, +$' : '$-, +, -$'} na intervaloch $(-\\infty; ${p})$, $(${p}; ${q})$, $(${q}; \\infty)$.
          ${kind[0].toUpperCase() + kind.slice(1)} je preto v bode $x=${x}$ a $f(${x})=${y}$.`,
        hint: 'Rozlož $f\'(x)$ na súčin, nájdi nulové body a zisti, kde derivácia mení znamienko.',
        mistakes: [{ value: [p + q - x, peval(cs, p + q - x)], msg: `To je druhý stacionárny bod, v ňom má funkcia lokálne ${wantMax ? 'minimum' : 'maximum'}. Pri maxime mení $f'$ znamienko z $+$ na $-$, pri minime z $-$ na $+$.` }],
        steps: [
          { q: `Nájdi stacionárne body funkcie, teda korene rovnice $f'(x)=${poly(d)}=0$.`, type: 'set', answer: [p, q], signed: true, placeholder: 'x₁; x₂' },
          { q: `V ktorom z bodov $${p}$, $${q}$ má funkcia ${kind}?`, answer: x, signed: true, hint: 'Zisti znamienko $f\'$ vľavo a vpravo od bodu.' },
          { q: `Vypočítaj $f(${x})$.`, answer: y, signed: true }
        ]
      };
    }
    if (t < 0.55) {
      const { p, q, a, cs, d } = cubicPQ();
      const inc = Math.random() < 0.5;
      const mid = `$\\langle ${p}; ${q}\\rangle$`, outer = `$(-\\infty; ${p}\\rangle$ a $\\langle ${q}; \\infty)$`;
      const ans = (a > 0) !== inc ? mid : outer;
      return {
        type: 'choice', options: shuffle([mid, outer, `$(-\\infty; ${q}\\rangle$`, `$\\langle ${p}; \\infty)$`]), answer: ans,
        q: `Na ktorých intervaloch je funkcia $f(x)=${poly(cs)}$ ${inc ? 'rastúca' : 'klesajúca'}?`,
        solution: `$f'(x)=${poly(d)}=${a > 0 ? '3' : '-3'}${fac(p)}${fac(q)}$. Derivácia je ${a > 0 ? 'záporná' : 'kladná'} medzi koreňmi $${p}$ a $${q}$
          a ${a > 0 ? 'kladná' : 'záporná'} mimo nich. Funkcia je ${inc ? 'rastúca' : 'klesajúca'} na ${ans}.`,
        hint: 'Kvadratická funkcia $f\'$ má medzi koreňmi opačné znamienko ako jej vedúci koeficient.',
        choiceHints: {
          [ans === mid ? outer : mid]: `Tu je funkcia ${inc ? 'klesajúca' : 'rastúca'}. Skontroluj znamienko $f'$: medzi koreňmi má opačné znamienko ako vedúci koeficient $${3 * a}$.`,
          [`$(-\\infty; ${q}\\rangle$`]: 'Na tomto intervale leží stacionárny bod, v ktorom $f\'$ mení znamienko, takže tam funkcia nie je monotónna.',
          [`$\\langle ${p}; \\infty)$`]: 'Na tomto intervale leží stacionárny bod, v ktorom $f\'$ mení znamienko, takže tam funkcia nie je monotónna.'
        }
      };
    }
    if (t < 0.8) {
      const { p, q, cs, d } = cubicPQ();
      const u = p - rnd(0, 2), v = rnd(Math.max(u + 1, p), q + 2);
      const cand = [u, v];
      [p, q].forEach((s) => { if (s > u && s < v) cand.push(s); });
      cand.sort((x, y) => x - y);
      const vals = cand.map((x) => peval(cs, x));
      const wantMax = Math.random() < 0.5;
      const ans = wantMax ? Math.max(...vals) : Math.min(...vals);
      const inside = cand.filter((x) => x !== u && x !== v);
      return {
        signed: true, answer: ans,
        q: `Vypočítaj ${wantMax ? 'najväčšiu' : 'najmenšiu'} hodnotu funkcie $f(x)=${poly(cs)}$ na intervale $\\langle ${u}; ${v}\\rangle$.`,
        solution: `$f'(x)=${poly(d)}$ má korene $${p}$ a $${q}$. ${inside.length ? `Do vnútra intervalu patrí ${inside.map((x) => `$${x}$`).join(' a ')}.` : 'Žiadny z nich neleží vo vnútri intervalu.'}
          Porovnáme hodnoty: ${cand.map((x, i) => `$f(${x})=${vals[i]}$`).join(', ')}. ${wantMax ? 'Najväčšia' : 'Najmenšia'} z nich je $${ans}$.`,
        hint: 'Kandidáti sú stacionárne body vnútri intervalu a oba krajné body. Vypočítaj v nich funkčné hodnoty a porovnaj ich.',
        mistakes: (() => {
          const ms = [];
          if (inside.length) {
            const iv = inside.map((x) => peval(cs, x)), w = wantMax ? Math.max(...iv) : Math.min(...iv);
            if (w !== ans) ms.push({ value: w, msg: 'Porovnaj aj hodnoty funkcie v krajných bodoch intervalu, globálny extrém môže byť práve tam.' });
          }
          const xa = cand[vals.indexOf(ans)];
          if (xa !== ans && !ms.some((m) => m.value === xa)) ms.push({ value: xa, msg: 'Hľadá sa hodnota funkcie, nie bod $x$, v ktorom ju nadobúda.' });
          return ms;
        })(),
        steps: [
          { q: `Nájdi korene derivácie $f'(x)=${poly(d)}$.`, type: 'set', answer: [p, q], signed: true, placeholder: 'x₁; x₂' },
          { q: `Vypočítaj hodnotu v ľavom krajnom bode, $f(${u})$.`, answer: peval(cs, u), signed: true },
          { q: `Vypočítaj hodnotu v pravom krajnom bode, $f(${v})$.`, answer: peval(cs, v), signed: true },
          { q: `Porovnaj tieto hodnoty s hodnotami v stacionárnych bodoch vnútri intervalu. Aká je ${wantMax ? 'najväčšia' : 'najmenšia'} hodnota?`, answer: ans, signed: true }
        ]
      };
    }
    const k = rnd(3, 15), L = 4 * k, askArea = Math.random() < 0.6;
    return {
      answer: askArea ? 2 * k * k : 2 * k,
      q: `Pri rovnej stene chceme ohradiť obdĺžnikový pozemok, stena tvorí jednu jeho stranu. Máme $${L}\\,\\text{m}$ pletiva.
        ${askArea ? 'Aký najväčší obsah (v $\\text{m}^2$) môže mať pozemok?' : 'Aká dlhá musí byť strana rovnobežná so stenou, aby bol obsah najväčší (v metroch)?'}`,
      solution: `Nech $x$ je dĺžka strán kolmých na stenu. Strana rovnobežná so stenou má dĺžku $${L}-2x$ a obsah je $S(x)=x(${L}-2x)=${L}x-2x^2$.
        $S'(x)=${L}-4x=0$ pre $x=${k}$ a $S''=-4&lt;0$, ide o maximum. Rozmery sú $${k}\\,\\text{m}$ a $${2 * k}\\,\\text{m}$, obsah $${2 * k * k}\\,\\text{m}^2$.`,
      hint: 'Označ $x$ stranu kolmú na stenu, vyjadri druhú stranu z dĺžky pletiva a obsah ako funkciu $x$. Potom hľadaj, kde je jej derivácia nulová.',
      mistakes: askArea
        ? [{ value: k * k, msg: 'Pletivo netreba na všetky štyri strany: stena tvorí jednu stranu, ohradiť treba len tri.' }]
        : [{ value: k, msg: 'To je dĺžka strany kolmej na stenu. Pýtame sa na stranu rovnobežnú so stenou, jej dĺžka je ' + `$${L}-2x$.` }],
      steps: [
        { q: `Obsah je $S(x)=x(${L}-2x)$, kde $x$ je strana kolmá na stenu. Pre aké $x$ je $S'(x)=0$?`, answer: k },
        { q: 'Aká dlhá je potom strana rovnobežná so stenou (v metroch)?', answer: 2 * k },
        ...(askArea ? [{ q: 'Aký je najväčší obsah pozemku (v $\\text{m}^2$)?', answer: 2 * k * k }] : [])
      ]
    };
  });

  fig('s4-asymptoty', {
    draw: () => {
      const p = plane(-5, 7, -5, 9, 400, 320);
      const f = (x) => (2 * x + 1) / (x - 1);
      const clipped = `<line class="f-dash" x1="${n1(p.X(1))}" y1="${n1(p.Y(-5))}" x2="${n1(p.X(1))}" y2="${n1(p.Y(9))}"/>
        <line class="f-dash" x1="${n1(p.X(-5))}" y1="${n1(p.Y(2))}" x2="${n1(p.X(7))}" y2="${n1(p.Y(2))}"/>
        <path class="f-accent" d="${curvePath(p, f, -5, 0.97, 200)}"/>
        <path class="f-accent" d="${curvePath(p, f, 1.03, 7, 200)}"/>
        <circle class="f-dot f-dot-ok" cx="${n1(p.X(-0.5))}" cy="${n1(p.Y(0))}" r="5"/>
        <circle class="f-dot f-dot-ok" cx="${n1(p.X(0))}" cy="${n1(p.Y(-1))}" r="5"/>`;
      const front = `<text class="f-small" x="${n1(p.X(1) + 6)}" y="${n1(p.Y(8.4))}">x = 1</text>
        <text class="f-small" x="${n1(p.X(5.2))}" y="${n1(p.Y(2) - 6)}">y = 2</text>
        <text class="f-math c-accent" x="${n1(p.X(3.4))}" y="${n1(p.Y(5.6))}">y = (2x + 1)/(x − 1)</text>`;
      return svg(p, axes(p, 2, 2), clipped, front, 'Graf racionálnej funkcie s asymptotami');
    }
  });

  lesson({
    id: 's4-priebeh', order: 50, topics: ['analyza', 'funkcie'], title: 'Priebeh funkcie a jej graf',
    summary: 'Definičný obor, párnosť, asymptoty, extrémy, konvexnosť a inflexné body.',
    theory: [
      `<p><strong>Vyšetrenie priebehu funkcie</strong> robíme v krokoch:</p>
       <ol><li>definičný obor $D(f)$, prípadne párnosť ($f(-x)=f(x)$) alebo nepárnosť ($f(-x)=-f(x)$) a periodickosť,</li>
       <li>priesečníky grafu s osami a znamienko funkcie,</li>
       <li>limity v krajných bodoch $D(f)$ a <strong>asymptoty</strong>,</li>
       <li>$f'$: intervaly monotónnosti a lokálne extrémy,</li>
       <li>$f''$: intervaly, kde je funkcia <strong>konvexná</strong> ($f''&gt;0$) alebo <strong>konkávna</strong> ($f''&lt;0$), a <strong>inflexné body</strong>, v ktorých sa konvexnosť mení,</li>
       <li>náčrt grafu.</li></ol>`,
      `<p><strong>Asymptoty:</strong> priamka $x=a$ je zvislá asymptota, ak sa $f(x)$ pre $x\\to a^+$ alebo $x\\to a^-$ blíži k $\\pm\\infty$ (typicky nulový bod menovateľa).
       Priamka $y=kx+q$ je asymptota so smernicou, ak $k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}$ a $q=\\lim_{x\\to\\pm\\infty}(f(x)-kx)$; pre $k=0$ ide o vodorovnú asymptotu $y=q$.
       Lineárna lomená funkcia $f(x)=\\frac{ax+b}{cx+d}$ má asymptoty $x=-\\frac{d}{c}$ a $y=\\frac{a}{c}$.</p>`,
      { fig: 's4-asymptoty', caption: 'Graf $f(x)=\\frac{2x+1}{x-1}=2+\\frac{3}{x-1}$ s asymptotami $x=1$ a $y=2$. Zelené body sú priesečníky s osami $[-\\frac{1}{2}; 0]$ a $[0; -1]$. Funkcia je na $(-\\infty; 1)$ aj na $(1; \\infty)$ klesajúca.' },
      `<p>Konvexná funkcia leží nad každou svojou dotyčnicou (graf „drží vodu“), konkávna pod ňou.
       Polynóm tretieho stupňa $ax^3+bx^2+cx+d$ má vždy práve jeden inflexný bod, a to v $x=-\\frac{b}{3a}$.</p>`
    ],
    examples: [
      { task: 'Nájdi inflexný bod funkcie $f(x)=x^3-3x^2+4$ a urči, kde je konvexná.',
        steps: ['$f\'(x)=3x^2-6x$, $f\'\'(x)=6x-6$.', '$f\'\'(x)=0$ pre $x=1$; pre $x&lt;1$ je $f\'\'&lt;0$, pre $x&gt;1$ je $f\'\'&gt;0$.',
          'Inflexný bod je $[1; f(1)]=[1; 2]$, funkcia je konvexná na $(1; \\infty)$ a konkávna na $(-\\infty; 1)$.'] },
      { task: 'Vyšetri párnosť funkcie $f(x)=\\frac{x}{x^2+1}$ a urči jej vodorovnú asymptotu.',
        steps: ['$D(f)=\\mathbb{R}$ je súmerný podľa nuly a $f(-x)=\\frac{-x}{x^2+1}=-f(x)$, funkcia je nepárna (graf je súmerný podľa začiatku).',
          'Čitateľ má nižší stupeň ako menovateľ, preto $\\lim_{x\\to\\pm\\infty}f(x)=0$.', 'Vodorovná asymptota je $y=0$ (os $x$).'] }
    ]
  });

  const PARITY = [
    ['párna', (k) => `x^4-${k}x^2`, (k) => `$f(-x)=(-x)^4-${k}(-x)^2=x^4-${k}x^2=f(x)$, párne mocniny zmenu znamienka „pohltia“.`],
    ['párna', () => '\\mathrm{e}^{x}+\\mathrm{e}^{-x}', () => 'Zámenou $x$ za $-x$ sa sčítance len vymenia: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.'],
    ['párna', () => 'x\\sin x', () => 'Súčin dvoch nepárnych funkcií je párny: $(-x)\\sin(-x)=x\\sin x$.'],
    ['párna', (k) => `\\dfrac{${k}}{x^2+1}`, () => 'Výraz obsahuje len $x^2$, preto $f(-x)=f(x)$.'],
    ['párna', (k) => `\\cos x+${k}x^2`, () => '$\\cos(-x)=\\cos x$ a $(-x)^2=x^2$, teda $f(-x)=f(x)$.'],
    ['nepárna', (k) => `x^3-${k}x`, (k) => `$f(-x)=-x^3+${k}x=-f(x)$, výraz obsahuje len nepárne mocniny.`],
    ['nepárna', () => 'x^2\\sin x', () => '$(-x)^2\\sin(-x)=-x^2\\sin x$, teda $f(-x)=-f(x)$.'],
    ['nepárna', (k) => `\\dfrac{${k}x}{x^2+1}`, () => 'Čitateľ zmení znamienko, menovateľ nie: $f(-x)=-f(x)$.'],
    ['nepárna', (k) => `x^5+${k}\\sin x`, () => 'Obe časti sú nepárne funkcie, preto aj ich súčet: $f(-x)=-f(x)$.'],
    ['ani párna, ani nepárna', (k) => `x^3+${k}x^2`, (k) => `Napríklad $f(1)=${1 + k}$ a $f(-1)=${k - 1}$; neplatí $f(-1)=f(1)$ ani $f(-1)=-f(1)$.`],
    ['ani párna, ani nepárna', () => '\\mathrm{e}^{x}', () => '$f(-1)=\\mathrm{e}^{-1}$ sa nerovná $f(1)=\\mathrm{e}$ ani $-\\mathrm{e}$.'],
    ['ani párna, ani nepárna', () => '\\sin x+\\cos x', () => '$f(-x)=-\\sin x+\\cos x$, čo nie je $f(x)$ ani $-f(x)$.'],
    ['ani párna, ani nepárna', (k) => `x^2+${k}x`, (k) => `$f(1)=${1 + k}$ a $f(-1)=${1 - k}$; neplatí ani jedna z rovností $f(-1)=f(1)$, $f(-1)=-f(1)$.`],
    ['ani párna, ani nepárna', () => '\\ln x', () => 'Definičný obor $(0; \\infty)$ nie je súmerný podľa nuly, funkcia preto nemôže byť párna ani nepárna.']
  ];

  gen('s4-priebeh', () => {
    const t = Math.random();
    if (t < 0.3) {
      const a = pick([1, -1]), s = rnd(-3, 3), b = -3 * a * s, c = rnd(-6, 6), d = rnd(-5, 5);
      const cs = [a, b, c, d], y = peval(cs, s);
      return {
        type: 'tuple', signed: true, answer: [s, y], placeholder: 'x; y',
        q: `Nájdi inflexný bod funkcie $f(x)=${poly(cs)}$. Zadaj jeho súradnice $x$ a $y$ (napr. 1; -4).`,
        solution: `$f'(x)=${poly([3 * a, 2 * b, c])}$, $f''(x)=${poly([6 * a, 2 * b])}$. $f''(x)=0$ pre $x=${s}$ a druhá derivácia tam mení znamienko.
          $f(${s})=${y}$, inflexný bod je $[${s}; ${y}]$.`,
        hint: 'Inflexný bod hľadaj tam, kde $f\'\'(x)=0$ a druhá derivácia mení znamienko.',
        mistakes: y !== 0 ? [{ value: [s, 0], msg: `Druhá súradnica inflexného bodu je funkčná hodnota $f(${s})$, nie hodnota $f''(${s})$.` }] : [],
        steps: [
          { q: 'Vypočítaj druhú deriváciu. Pre aké $x$ je $f\'\'(x)=0$?', answer: s, signed: true, hint: `$f'(x)=${poly([3 * a, 2 * b, c])}$.` },
          { q: `Vypočítaj $f(${s})$.`, answer: y, signed: true }
        ]
      };
    }
    if (t < 0.55) {
      let a, b, c, d;
      do { a = nz(-5, 5); b = rnd(-6, 6); c = pick([1, 1, 2, -1, 3]); d = nz(-6, 6); } while (a * d - b * c === 0);
      return {
        type: 'tuple', signed: true, answer: [-d / c, a / c], show: `${fTxt(-d, c)}; ${fTxt(a, c)}`, placeholder: 'x; y',
        q: `Urči asymptoty grafu funkcie $f(x)=\\dfrac{${poly([a, b])}}{${poly([c, d])}}$. Zadaj číslo zo zvislej asymptoty $x=\\dots$ a potom číslo z vodorovnej asymptoty $y=\\dots$ (napr. 2; -1/2).`,
        solution: `Menovateľ je nulový pre $x=${fTex(-d, c)}$ a čitateľ tam nulový nie je (lebo $ad-bc=${a * d - b * c}\\neq 0$), preto je $x=${fTex(-d, c)}$ zvislá asymptota.
          Pre $x\\to\\pm\\infty$ sa $f(x)$ blíži k podielu koeficientov pri $x$: $\\frac{${a}}{${c}}=${fTex(a, c)}$, vodorovná asymptota je $y=${fTex(a, c)}$.`,
        hint: 'Zvislá asymptota je v nulovom bode menovateľa. Vodorovnú asymptotu dá limita pre $x\\to\\infty$: podiel koeficientov pri $x$.',
        mistakes: [
          { value: [d / c, a / c], msg: `Zvislá asymptota je v nulovom bode menovateľa: rieš rovnicu $${poly([c, d])}=0$. Pozor na znamienko.` },
          ...(b !== 0 && Math.abs(b / d - a / c) > 1e-9 ? [{ value: [-d / c, b / d], msg: 'Pre $x\\to\\pm\\infty$ rozhodujú koeficienty pri $x$, nie absolútne členy.' }] : [])
        ],
        steps: [
          { q: 'Číslo zo zvislej asymptoty $x=\\dots$ (nulový bod menovateľa)?', answer: -d / c, signed: true },
          { q: 'Číslo z vodorovnej asymptoty $y=\\dots$ (limita pre $x\\to\\infty$)?', answer: a / c, signed: true }
        ]
      };
    }
    if (t < 0.8) {
      const [kind, f, why] = pick(PARITY), k = rnd(2, 7);
      return {
        type: 'choice', options: ['párna', 'nepárna', 'ani párna, ani nepárna'], answer: kind,
        q: `Je funkcia $f(x)=${f(k)}$ párna, nepárna, alebo ani jedno?`,
        solution: `${why(k)} Funkcia je <strong>${kind}</strong>.`,
        hint: 'Dosaď $-x$ namiesto $x$ a porovnaj $f(-x)$ s $f(x)$ a s $-f(x)$. Over aj, či je definičný obor súmerný podľa nuly.',
        choiceHints: Object.fromEntries([
          ['párna', 'Párna funkcia spĺňa $f(-x)=f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.'],
          ['nepárna', 'Nepárna funkcia spĺňa $f(-x)=-f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.'],
          ['ani párna, ani nepárna', 'Uprav $f(-x)$: využi $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ a $\\cos(-x)=\\cos x$. Potom porovnaj s $f(x)$ aj s $-f(x)$.']
        ].filter(([o]) => o !== kind))
      };
    }
    const a = pick([1, -1]), s = rnd(-3, 3), b = -3 * a * s, c = rnd(-6, 6), d = rnd(-5, 5);
    const cs = [a, b, c, d], o = s + pick([2, -2]);
    const right = `$(${s}; \\infty)$`, left = `$(-\\infty; ${s})$`;
    const ans = a > 0 ? right : left;
    return {
      type: 'choice', options: shuffle([right, left, `$(${o}; \\infty)$`, `$(-\\infty; ${o})$`]), answer: ans,
      q: `Na ktorom intervale je funkcia $f(x)=${poly(cs)}$ konvexná?`,
      solution: `$f''(x)=${poly([6 * a, 2 * b])}$. Nerovnica $f''(x)&gt;0$ dáva $${a > 0 ? `x&gt;${s}` : `x&lt;${s}`}$, funkcia je konvexná na ${ans}.`,
      hint: 'Funkcia je konvexná tam, kde $f\'\'(x)&gt;0$. Vypočítaj druhú deriváciu a vyrieš lineárnu nerovnicu.',
      choiceHints: {
        [a > 0 ? left : right]: 'Tu je $f\'\'(x)&lt;0$, funkcia je tam konkávna. Pri delení nerovnice záporným číslom nezabudni otočiť znak nerovnosti.',
        [`$(${o}; \\infty)$`]: 'Hranica intervalu konvexnosti je inflexný bod, v ktorom $f\'\'(x)=0$. Over, kde je druhá derivácia nulová.',
        [`$(-\\infty; ${o})$`]: 'Hranica intervalu konvexnosti je inflexný bod, v ktorom $f\'\'(x)=0$. Over, kde je druhá derivácia nulová.'
      }
    };
  });

  fig('s4-medzi-krivkami', {
    draw: () => {
      const p = plane(-1, 3, -1, 5, 340, 320);
      let d = `M${n1(p.X(0))} ${n1(p.Y(0))}`;
      for (let i = 0; i <= 40; i++) { const x = 2 * i / 40; d += `L${n1(p.X(x))} ${n1(p.Y(2 * x))}`; }
      for (let i = 40; i >= 0; i--) { const x = 2 * i / 40; d += `L${n1(p.X(x))} ${n1(p.Y(x * x))}`; }
      const clipped = `<path class="f-fill" d="${d}Z"/>
        <path class="f-ok" d="${curvePath(p, (x) => 2 * x, -1, 3, 2)}"/>
        <path class="f-accent" d="${curvePath(p, (x) => x * x)}"/>
        <circle class="f-dot" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" r="5"/><circle class="f-dot" cx="${n1(p.X(2))}" cy="${n1(p.Y(4))}" r="5"/>`;
      const front = `<text class="f-math c-ok" x="${n1(p.X(2.25))}" y="${n1(p.Y(4.6))}">y = 2x</text>
        <text class="f-math c-accent" x="${n1(p.X(2.25))}" y="${n1(p.Y(3.2))}">y = x²</text>
        <text class="f-text" x="${n1(p.X(1.15))}" y="${n1(p.Y(1.5))}" text-anchor="middle">S</text>`;
      return svg(p, axes(p), clipped, front, 'Útvar ohraničený parabolou a priamkou');
    }
  });

  lesson({
    id: 's4-plocha', order: 70, topics: ['analyza'], title: 'Obsah útvaru a substitúcia v integráli',
    summary: 'Obsah útvaru medzi dvoma krivkami, integrály elementárnych funkcií a lineárna substitúcia.',
    theory: [
      `<p>Ak na intervale $\\langle a; b\\rangle$ platí $f(x)\\le g(x)$, obsah útvaru medzi grafmi je $S=\\int_a^b \\big(g(x)-f(x)\\big)\\,dx$ — „horná mínus dolná“.
       Hranice $a$, $b$ sú zvyčajne x-ové súradnice priesečníkov grafov, nájdeme ich z rovnice $f(x)=g(x)$.
       Ak funkcia leží pod osou $x$, jej určitý integrál je záporný, a obsah je preto jeho absolútna hodnota.</p>`,
      { fig: 's4-medzi-krivkami', caption: 'Priamka $y=2x$ a parabola $y=x^2$ sa pretínajú v bodoch $x=0$ a $x=2$. Obsah útvaru je $\\int_0^2 (2x-x^2)\\,dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=\\frac{4}{3}$.' },
      `<p><strong>Integrály elementárnych funkcií:</strong> $\\int \\mathrm{e}^x\\,dx=\\mathrm{e}^x+c$, $\\int \\frac{1}{x}\\,dx=\\ln|x|+c$, $\\int \\sin x\\,dx=-\\cos x+c$, $\\int \\cos x\\,dx=\\sin x+c$.</p>`,
      `<p><strong>Lineárna substitúcia:</strong> ak $F$ je primitívna k $f$, potom $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)+c$.
       Napríklad $\\int (2x+1)^3\\,dx=\\frac{1}{2}\\cdot\\frac{(2x+1)^4}{4}+c$ alebo $\\int \\cos 3x\\,dx=\\frac{1}{3}\\sin 3x+c$. Správnosť vždy overíme derivovaním.</p>`
    ],
    examples: [
      { task: 'Vypočítaj obsah útvaru ohraničeného parabolou $y=4-x^2$ a osou $x$.',
        steps: ['Priesečníky s osou: $4-x^2=0$, teda $x=\\pm 2$. Medzi nimi je parabola nad osou.',
          '$S=\\int_{-2}^{2}(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}=\\left(8-\\frac{8}{3}\\right)-\\left(-8+\\frac{8}{3}\\right)$.',
          '<strong>$S=16-\\frac{16}{3}=\\frac{32}{3}$</strong>'] },
      { task: 'Vypočítaj $\\int_0^{1} (2x+1)^2\\,dx$ pomocou substitúcie.',
        steps: ['Primitívna funkcia: $F(x)=\\frac{1}{2}\\cdot\\frac{(2x+1)^3}{3}=\\frac{(2x+1)^3}{6}$.',
          '$F(1)-F(0)=\\frac{27}{6}-\\frac{1}{6}=\\frac{26}{6}=\\frac{13}{3}$.',
          'Kontrola roznásobením: $\\int_0^1(4x^2+4x+1)\\,dx=\\frac{4}{3}+2+1=\\frac{13}{3}$ ✓'] }
    ]
  });

  gen('s4-plocha', () => {
    const t = Math.random();
    if (t < 0.28) {
      const k = rnd(1, 6);
      return {
        answer: k * k * k / 6, show: fTxt(k * k * k, 6),
        q: `Vypočítaj obsah útvaru ohraničeného parabolou $y=x^2$ a priamkou $y=${lead(k, 'x')}$. Výsledok zadaj ako zlomok alebo celé číslo.`,
        solution: `Priesečníky: $x^2=${lead(k, 'x')}$, teda $x=0$ a $x=${k}$. Na $\\langle 0; ${k}\\rangle$ leží priamka nad parabolou.
          $S=\\int_0^{${k}}(${lead(k, 'x')}-x^2)\\,dx=\\left[\\frac{${k}x^2}{2}-\\frac{x^3}{3}\\right]_0^{${k}}=\\frac{${k * k * k}}{2}-\\frac{${k * k * k}}{3}=${fTex(k * k * k, 6)}$.`,
        hint: 'Najprv nájdi priesečníky, potom integruj rozdiel „horná mínus dolná“ funkcia.',
        mistakes: [
          { value: k * k * k / 3, msg: 'To je obsah pod parabolou. Útvar je medzi dvoma krivkami, integruj rozdiel „horná mínus dolná“.' },
          { value: k * k * k / 2, msg: 'To je obsah pod priamkou. Od neho ešte treba odčítať obsah pod parabolou.' }
        ],
        steps: [
          { q: `Priesečníky sú $x=0$ a ešte jeden bod. Aké je jeho $x$?`, answer: k },
          { q: `Vypočítaj $\\int_0^{${k}} ${lead(k, 'x')}\\,dx$.`, answer: k * k * k / 2 },
          { q: `Vypočítaj $\\int_0^{${k}} x^2\\,dx$. Zadaj zlomok alebo celé číslo.`, answer: k * k * k / 3 },
          { q: 'Aký je obsah útvaru? Zadaj zlomok alebo celé číslo.', answer: k * k * k / 6 }
        ]
      };
    }
    if (t < 0.5) {
      const m = rnd(1, 4), M = m * m;
      return {
        answer: 4 * m * m * m / 3, show: fTxt(4 * m * m * m, 3),
        q: `Vypočítaj obsah útvaru ohraničeného parabolou $y=${M}-x^2$ a osou $x$. Výsledok zadaj ako zlomok alebo celé číslo.`,
        solution: `Priesečníky s osou $x$: $${M}-x^2=0$, teda $x=\\pm ${m}$.
          $S=\\int_{-${m}}^{${m}}(${M}-x^2)\\,dx=\\left[${M}x-\\frac{x^3}{3}\\right]_{-${m}}^{${m}}=2\\left(${M * m}-\\frac{${M * m}}{3}\\right)=${fTex(4 * M * m, 3)}$.`,
        hint: 'Hranice integrálu sú nulové body paraboly. Funkcia je párna, môžeš počítať $2\\int_0^{m}$.',
        mistakes: [{ value: 2 * M * m / 3, msg: `Integroval si len od $0$ do $${m}$, to je polovica útvaru. Dolná hranica je druhý nulový bod paraboly.` }],
        steps: [
          { q: `Primitívna funkcia je $F(x)=${M}x-\\frac{x^3}{3}$. Vypočítaj $F(${m})$. Zadaj zlomok alebo celé číslo.`, answer: 2 * M * m / 3 },
          { q: `Vypočítaj $F(-${m})$.`, answer: -2 * M * m / 3, signed: true },
          { q: 'Aký je obsah útvaru? Zadaj zlomok alebo celé číslo.', answer: 4 * M * m / 3 }
        ]
      };
    }
    if (t < 0.75) {
      const a = rnd(1, 3), b = rnd(0, 3), n = rnd(1, 3);
      const P = Math.pow(a + b, n + 1) - Math.pow(b, n + 1), Q = a * (n + 1);
      return {
        answer: P / Q, show: fTxt(P, Q),
        q: `Vypočítaj $\\displaystyle\\int_0^{1}(${poly([a, b])})^{${n}}\\,dx$. Výsledok zadaj ako zlomok alebo celé číslo.`,
        solution: `Substitúcia $u=${poly([a, b])}$ (alebo vzorec $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): primitívna funkcia je $F(x)=\\dfrac{(${poly([a, b])})^{${n + 1}}}{${Q}}$.
          $F(1)-F(0)=\\dfrac{${a + b}^{${n + 1}}-${b}^{${n + 1}}}{${Q}}=\\dfrac{${P}}{${Q}}=${fTex(P, Q)}$.`,
        hint: 'Integruj ako mocninu, $\\frac{u^{n+1}}{n+1}$, a výsledok vydeľ koeficientom pri $x$ vnútri zátvorky.',
        mistakes: [
          ...(a !== 1 ? [{ value: P / (n + 1), msg: `Pri lineárnej substitúcii treba výsledok vydeliť koeficientom pri $x$, teda číslom $${a}$.` }] : []),
          { value: P / a, msg: `Integrál mocniny je $\\frac{u^{${n + 1}}}{${n + 1}}$: exponent sa zvýši o jedna a zároveň sa ním delí.` }
        ],
        steps: [
          { q: `Primitívna funkcia je $F(x)=\\dfrac{(${poly([a, b])})^{${n + 1}}}{${Q}}$. Vypočítaj $F(1)$. Zadaj zlomok alebo celé číslo.`, answer: Math.pow(a + b, n + 1) / Q },
          { q: 'Vypočítaj $F(0)$.', answer: Math.pow(b, n + 1) / Q },
          { q: 'Vypočítaj $F(1)-F(0)$. Zadaj zlomok alebo celé číslo.', answer: P / Q }
        ]
      };
    }
    const k = rnd(1, 6), m = rnd(2, 5);
    const v = pick([
      { q: `\\displaystyle\\int_0^{\\pi} ${lead(k, '')}\\sin x\\,dx`, a: 2 * k, s: `$\\left[-${lead(k, '')}\\cos x\\right]_0^{\\pi}=-${lead(k, '')}\\cos\\pi+${lead(k, '')}\\cos 0=${k}+${k}=${2 * k}$.`,
        F: `-${lead(k, '')}\\cos x`, hi: '\\pi', lo: '0', Fh: k, Fl: -k,
        m: [{ value: 0, msg: 'Pozor, $\\cos\\pi=-1$, nie $1$. Hodnoty primitívnej funkcie v hraniciach sa preto neodčítajú na nulu.' }] },
      { q: `\\displaystyle\\int_0^{\\pi/2} ${lead(k, '')}\\cos x\\,dx`, a: k, s: `$\\left[${lead(k, '')}\\sin x\\right]_0^{\\pi/2}=${k}\\cdot 1-${k}\\cdot 0=${k}$.`,
        F: `${lead(k, '')}\\sin x`, hi: '\\frac{\\pi}{2}', lo: '0', Fh: k, Fl: 0, m: [] },
      { q: `\\displaystyle\\int_1^{\\mathrm{e}^{${m}}} \\frac{${k}}{x}\\,dx`, a: k * m, s: `$\\left[${lead(k, '')}\\ln x\\right]_1^{\\mathrm{e}^{${m}}}=${k}\\cdot ${m}-${k}\\cdot 0=${k * m}$.`,
        F: `${lead(k, '')}\\ln x`, hi: `\\mathrm{e}^{${m}}`, lo: '1', Fh: k * m, Fl: 0,
        m: [{ value: k * (m - 1), msg: 'Pozor, $\\ln 1=0$, lebo $\\mathrm{e}^0=1$. Hodnota primitívnej funkcie v dolnej hranici je nulová.' }] },
      { q: `\\displaystyle\\int_0^{\\ln ${m}} \\mathrm{e}^{x}\\,dx`, a: m - 1, s: `$\\left[\\mathrm{e}^{x}\\right]_0^{\\ln ${m}}=\\mathrm{e}^{\\ln ${m}}-\\mathrm{e}^0=${m}-1=${m - 1}$.`,
        F: '\\mathrm{e}^{x}', hi: `\\ln ${m}`, lo: '0', Fh: m, Fl: 1, m: [] }
    ]);
    return {
      answer: v.a,
      q: `Vypočítaj $${v.q}$.`,
      solution: `Newton-Leibnizova formula: ${v.s}`,
      hint: 'Nájdi primitívnu funkciu ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) a dosaď hranice.',
      mistakes: v.m,
      steps: [
        { q: `Primitívna funkcia je $F(x)=${v.F}$. Vypočítaj $F(${v.hi})$.`, answer: v.Fh, signed: true },
        { q: `Vypočítaj $F(${v.lo})$.`, answer: v.Fl, signed: true },
        { q: `Vypočítaj $F(${v.hi})-F(${v.lo})$.`, answer: v.a, signed: true }
      ]
    };
  });

  /* ======================= B. FUNKCIE A ROVNICE – ROZŠÍRENIE ======================= */

  fig('s4-inverzna', {
    controls: [{ id: 'a', label: 'Základ a', min: 1.2, max: 3, step: 0.1, value: 2 }],
    draw: (v) => {
      const p = plane(-3, 5, -3, 5, 340, 340);
      const a = v.a, la = Math.log(a);
      const clipped = `<line class="f-dash" x1="${n1(p.X(-3))}" y1="${n1(p.Y(-3))}" x2="${n1(p.X(5))}" y2="${n1(p.Y(5))}"/>
        <path class="f-accent" d="${curvePath(p, (x) => Math.pow(a, x))}"/>
        <path class="f-ok" d="${curvePath(p, (x) => Math.log(x) / la, 0.01, 5, 300)}"/>
        <line class="f-thin" x1="${n1(p.X(1))}" y1="${n1(p.Y(a))}" x2="${n1(p.X(a))}" y2="${n1(p.Y(1))}"/>
        <circle class="f-dot" cx="${n1(p.X(1))}" cy="${n1(p.Y(a))}" r="5"/>
        <circle class="f-dot f-dot-ok" cx="${n1(p.X(a))}" cy="${n1(p.Y(1))}" r="5"/>`;
      const front = `<text class="f-small" x="${n1(p.X(3.4))}" y="${n1(p.Y(3.9))}">y = x</text>`;
      return {
        svg: svg(p, axes(p), clipped, front, 'Exponenciálna funkcia a k nej inverzná logaritmická funkcia'),
        readout: `<span class="c-accent">f(x) = ${sk(a, 1)}ˣ</span> · <span class="c-ok">f⁻¹(x) = log<sub>${sk(a, 1)}</sub> x</span> · body [1; ${sk(a, 1)}] a [${sk(a, 1)}; 1] sú súmerné podľa y = x`
      };
    }
  });

  lesson({
    id: 's4-zlozene-inverzne', order: 110, topics: ['funkcie'], title: 'Zložené a inverzné funkcie',
    summary: 'Skladanie funkcií, prostá funkcia, výpočet inverznej funkcie a súmernosť grafov podľa priamky y = x.',
    theory: [
      `<p><strong>Zložená funkcia</strong> $f\\circ g$ je daná predpisom $(f\\circ g)(x)=f(g(x))$: najprv použijeme $g$ (vnútornú funkciu), na výsledok potom $f$ (vonkajšiu).
       Záleží na poradí, vo všeobecnosti $f\\circ g\\neq g\\circ f$. Napríklad pre $f(x)=x^2$, $g(x)=x+1$ je $f(g(x))=(x+1)^2$, ale $g(f(x))=x^2+1$.</p>`,
      `<p>Funkcia je <strong>prostá</strong>, ak rôznym $x$ priraďuje rôzne hodnoty (každá vodorovná priamka pretne graf najviac raz). Len prostá funkcia má
       <strong>inverznú funkciu</strong> $f^{-1}$, pre ktorú platí $f^{-1}(y)=x \\Leftrightarrow f(x)=y$. Pritom $D(f^{-1})=H(f)$ a $H(f^{-1})=D(f)$.</p>`,
      `<p><strong>Postup výpočtu</strong> $f^{-1}$: v rovnici $y=f(x)$ vymeníme $x$ a $y$ a vyjadríme $y$. Pre $f(x)=2x-6$: $x=2y-6$, teda $f^{-1}(x)=\\frac{x+6}{2}$.
       Grafy $f$ a $f^{-1}$ sú súmerné podľa priamky $y=x$. Navzájom inverzné sú aj $a^x$ a $\\log_a x$, preto $a^{\\log_a x}=x$ a $\\log_a a^x=x$.</p>`,
      { fig: 's4-inverzna', caption: 'Graf $y=a^x$ (modrý) a graf inverznej funkcie $y=\\log_a x$ (zelený). Každý bod $[u; v]$ jedného grafu má na druhom grafe obraz $[v; u]$.' }
    ],
    examples: [
      { task: 'Dané sú $f(x)=x^2-1$ a $g(x)=3x+2$. Vypočítaj $(f\\circ g)(1)$ a $(g\\circ f)(1)$.',
        steps: ['$(f\\circ g)(1)=f(g(1))=f(5)=25-1=24$.', '$(g\\circ f)(1)=g(f(1))=g(0)=2$.',
          'Výsledky sa líšia — skladanie funkcií nie je komutatívne.'] },
      { task: 'Nájdi inverznú funkciu k $f(x)=\\frac{x+1}{x-2}$, $x\\neq 2$.',
        steps: ['Vymeníme premenné: $x=\\frac{y+1}{y-2}$.', '$x(y-2)=y+1 \\Rightarrow xy-y=2x+1 \\Rightarrow y(x-1)=2x+1$.',
          '<strong>$f^{-1}(x)=\\frac{2x+1}{x-1}$, $x\\neq 1$</strong> (hodnotu $1$ funkcia $f$ nenadobúda).'] }
    ]
  });

  gen('s4-zlozene-inverzne', () => {
    const t = Math.random();
    if (t < 0.28) {
      const a = pick([1, 1, 2, -1]), b = rnd(-5, 5), m = nz(-4, 4), n = rnd(-5, 5), x0 = rnd(-3, 3);
      const F = [a, 0, b], G = [m, n];
      const fg = Math.random() < 0.5;
      const inner = fg ? peval(G, x0) : peval(F, x0);
      const val = fg ? peval(F, inner) : peval(G, inner);
      const nm = fg ? 'f\\circ g' : 'g\\circ f';
      return {
        signed: true, answer: val,
        q: `Dané sú funkcie $f(x)=${poly(F)}$ a $g(x)=${poly(G)}$. Vypočítaj $(${nm})(${x0})$.`,
        solution: fg
          ? `$(f\\circ g)(${x0})=f(g(${x0}))$. Najprv $g(${x0})=${m}\\cdot ${par(x0)}${term(n)}=${inner}$, potom $f(${inner})=${a === 1 ? '' : a === -1 ? '-' : a + '\\cdot '}${par(inner)}^2${term(b)}=${val}$.`
          : `$(g\\circ f)(${x0})=g(f(${x0}))$. Najprv $f(${x0})=${a === 1 ? '' : a === -1 ? '-' : a + '\\cdot '}${par(x0)}^2${term(b)}=${inner}$, potom $g(${inner})=${m}\\cdot ${par(inner)}${term(n)}=${val}$.`,
        hint: 'Pri $(f\\circ g)(x)=f(g(x))$ počítaš najprv vnútornú funkciu $g$, jej výsledok dosadíš do $f$.',
        mistakes: (() => {
          const w = fg ? peval(G, peval(F, x0)) : peval(F, peval(G, x0));
          return w !== val ? [{ value: w, msg: `Počítal si v opačnom poradí. Pri $(${nm})(x)$ sa najprv použije ${fg ? '$g$' : '$f$'} (vnútorná funkcia) a jej výsledok sa dosadí do ${fg ? '$f$' : '$g$'}.` }] : [];
        })(),
        steps: [
          { q: `Najprv vypočítaj vnútornú funkciu: $${fg ? 'g' : 'f'}(${x0})$.`, answer: inner, signed: true },
          { q: `Výsledok dosaď do vonkajšej funkcie: $${fg ? 'f' : 'g'}(${inner})$.`, answer: val, signed: true }
        ]
      };
    }
    if (t < 0.52) {
      const a = pick([2, 3, 4, 5, -2, -3, -4]), b = nz(-8, 8);
      return {
        type: 'tuple', signed: true, answer: [1 / a, -b / a], show: `${fTxt(1, a)}; ${fTxt(-b, a)}`, placeholder: 'k; q',
        q: `Inverzná funkcia k funkcii $f(x)=${poly([a, b])}$ má tvar $f^{-1}(x)=kx+q$. Zadaj $k$ a $q$ (napr. 1/2; -3).`,
        solution: `Vymeníme $x$ a $y$: $x=${poly([a, b], 'y')}$, odtiaľ $${a}y=${poly([1, -b])}$ a $y=\\dfrac{${poly([1, -b])}}{${a}}$.
          Teda $f^{-1}(x)=${fTex(1, a)}x${-b / a > 0 ? '+' : ''}${fTex(-b, a)}$, čiže $k=${fTex(1, a)}$ a $q=${fTex(-b, a)}$.`,
        hint: 'V rovnici $y=ax+b$ vymeň $x$ a $y$ a vyjadri $y$.',
        mistakes: [
          { value: [1 / a, -b], msg: `Pri vyjadrení $y$ treba číslom $${a}$ vydeliť celú pravú stranu, teda aj absolútny člen.` },
          { value: [a, -b], msg: 'Inverzná funkcia vráti operácie v opačnom poradí: násobenie sa zmení na delenie. Vymeň $x$ a $y$ a vyjadri $y$.' }
        ],
        steps: [
          { q: `Po výmene premenných máme $x=${poly([a, b], 'y')}$. Aký je koeficient $k$ pri $x$ vo vyjadrení $y=kx+q$?`, answer: 1 / a, signed: true },
          { q: 'Aký je absolútny člen $q$?', answer: -b / a, signed: true }
        ]
      };
    }
    if (t < 0.76) {
      let a, b, d, x0;
      do { a = nz(-4, 4); b = rnd(-6, 6); d = nz(-5, 5); x0 = rnd(-4, 4); } while (a * d - b === 0 || x0 + d === 0);
      const P = a * x0 + b, Q = x0 + d;
      return {
        signed: true, answer: x0,
        q: `Funkcia $f(x)=\\dfrac{${poly([a, b])}}{${poly([1, d])}}$ je prostá. Vypočítaj $f^{-1}\\!\\left(${fTex(P, Q)}\\right)$.`,
        solution: `$f^{-1}(${fTex(P, Q)})$ je číslo $x$, pre ktoré $f(x)=${fTex(P, Q)}$. Riešime $\\dfrac{${poly([a, b])}}{${poly([1, d])}}=${fTex(P, Q)}$:
          po vynásobení menovateľmi dostaneme lineárnu rovnicu s riešením $x=${x0}$. Skúška: $f(${x0})=\\dfrac{${P}}{${Q}}=${fTex(P, Q)}$ ✓`,
        hint: 'Hodnotu inverznej funkcie nájdeš bez jej predpisu: hľadáš $x$, pre ktoré $f(x)$ dá zadané číslo.',
        mistakes: P + d * Q !== 0 && Math.abs((a * P + b * Q) / (P + d * Q) - x0) > 1e-9
          ? [{ value: (a * P + b * Q) / (P + d * Q), msg: `Vypočítal si $f\\!\\left(${fTex(P, Q)}\\right)$. Hodnota $f^{-1}(c)$ je však číslo $x$, pre ktoré $f(x)=c$.` }] : []
      };
    }
    const B = pick([2, 3]), a = rnd(-3, 3), b = rnd(-4, 4), k = rnd(0, B === 2 ? 5 : 3);
    const y0 = b + Math.pow(B, k);
    return {
      signed: true, answer: k + a,
      q: `Je daná funkcia $f(x)=${B}^{${poly([1, -a])}}${term(b)}$. Vypočítaj $f^{-1}(${y0})$.`,
      solution: `Inverzná funkcia: $x=${B}^{y${term(-a)}}${term(b)} \\Rightarrow ${B}^{y${term(-a)}}=${poly([1, -b])} \\Rightarrow f^{-1}(x)=\\log_{${B}}(${poly([1, -b])})${term(a)}$.
        $f^{-1}(${y0})=\\log_{${B}}${Math.pow(B, k)}${term(a)}=${k}${term(a)}=${k + a}$.`,
      hint: `Inverznou funkciou k exponenciálnej je logaritmická. Hľadáš $x$, pre ktoré $${B}^{${poly([1, -a])}}${term(b)}=${y0}$.`,
      mistakes: a !== 0 ? [{ value: k, msg: `Zistil si len exponent $${poly([1, -a])}$. Z neho ešte vyjadri $x$.` }] : [],
      steps: [
        { q: `Riešime $${B}^{${poly([1, -a])}}${term(b)}=${y0}$. Čomu sa rovná mocnina $${B}^{${poly([1, -a])}}$?`, answer: Math.pow(B, k) },
        ...(a !== 0 ? [{ q: `Aký je teda exponent $${poly([1, -a])}$?`, answer: k, signed: true }] : []),
        { q: `Koľko je $x=f^{-1}(${y0})$?`, answer: k + a, signed: true }
      ]
    };
  });

  lesson({
    id: 's4-exp-log-rovnice', order: 120, topics: ['rovnice', 'funkcie'], title: 'Exponenciálne a logaritmické rovnice',
    summary: 'Substitúcia, rovnice s rôznymi základmi, logaritmovanie a podmienky riešiteľnosti.',
    theory: [
      `<p><strong>Základné typy exponenciálnych rovníc:</strong></p>
       <ul><li>rovnaký základ: $a^{f(x)}=a^{g(x)} \\Leftrightarrow f(x)=g(x)$ (pre $a&gt;0$, $a\\neq 1$),</li>
       <li><strong>substitúcia</strong>: $4^x-6\\cdot 2^x+8=0$ prepíšeme cez $t=2^x&gt;0$ na $t^2-6t+8=0$,</li>
       <li><strong>rôzne základy</strong>: obe strany zlogaritmujeme, napr. $3^x=5 \\Rightarrow x=\\frac{\\ln 5}{\\ln 3}$; rovnicu $c\\cdot a^x=d\\cdot b^x$ upravíme na $\\left(\\frac{a}{b}\\right)^x=\\frac{d}{c}$.</li></ul>`,
      `<p><strong>Logaritmické rovnice:</strong> najprv určíme podmienky (argument logaritmu musí byť kladný), potom využijeme pravidlá
       $\\log_a u+\\log_a v=\\log_a(uv)$, $\\log_a u-\\log_a v=\\log_a\\frac{u}{v}$, $k\\log_a u=\\log_a u^k$ a z rovnosti $\\log_a u=c$ dostaneme $u=a^c$.
       Každé riešenie overíme dosadením alebo porovnaním s podmienkami — úpravami môžu vzniknúť falošné korene.</p>`,
      `<p>Rovnica s výrazom $\\log_a x$ v rôznych mocninách sa rieši substitúciou $t=\\log_a x$: z $(\\log x)^2-3\\log x+2=0$ dostaneme $t\\in\\{1; 2\\}$, teda $x\\in\\{10; 100\\}$.
       Pozor: $(\\log x)^2$ nie je to isté ako $\\log x^2=2\\log x$.</p>`
    ],
    examples: [
      { task: 'Vyrieš rovnicu $9^x-4\\cdot 3^x+3=0$.',
        steps: ['$9^x=(3^x)^2$, substitúcia $t=3^x&gt;0$: $t^2-4t+3=0$, teda $t_1=1$, $t_2=3$.',
          '$3^x=1 \\Rightarrow x=0$; $3^x=3 \\Rightarrow x=1$.', '<strong>$K=\\{0; 1\\}$</strong>'] },
      { task: 'Vyrieš rovnicu $\\log_3(x+1)+\\log_3(x-1)=1$.',
        steps: ['Podmienky: $x+1&gt;0$ a $x-1&gt;0$, teda $x&gt;1$.', '$\\log_3\\big((x+1)(x-1)\\big)=1 \\Rightarrow x^2-1=3 \\Rightarrow x=\\pm 2$.',
          'Podmienku spĺňa len $x=2$, koreň $-2$ vylúčime.', '<strong>$K=\\{2\\}$</strong>'] }
    ]
  });

  gen('s4-exp-log-rovnice', () => {
    const t = Math.random();
    if (t < 0.3) {
      const B = pick([2, 3]), m = rnd(0, 3);
      let n; do { n = rnd(0, 3); } while (n === m);
      const neg = Math.random() < 0.3;
      const t1 = Math.pow(B, m), t2 = neg ? -rnd(1, 5) : Math.pow(B, n);
      const s = t1 + t2, pr = t1 * t2;
      const ans = neg ? [m] : [m, n];
      return {
        type: 'set', signed: true, answer: ans,
        q: `Vyrieš v $\\mathbb{R}$ rovnicu $${B * B}^{x}${cterm(-s, `${B}^{x}`)}${term(pr)}=0$. Zadaj všetky riešenia oddelené bodkočiarkou.`,
        solution: `$${B * B}^{x}=(${B}^{x})^2$, substitúcia $t=${B}^{x}$, pričom $t&gt;0$: $${poly([1, -s, pr], 't')}=0$, korene $t_1=${t1}$, $t_2=${t2}$.
          ${neg ? `Koreň $t_2=${t2}$ je záporný a rovnica $${B}^{x}=${t2}$ nemá riešenie. ` : ''}Z $${B}^{x}=${t1}$ je $x=${m}$${neg ? '' : `, z $${B}^{x}=${t2}$ je $x=${n}$`}.
          $K=\\{${[...ans].sort((x, y) => x - y).join('; ')}\\}$.`,
        hint: `Zapíš $${B * B}^{x}$ ako $(${B}^{x})^2$ a zaveď substitúciu $t=${B}^{x}$. Nezabudni, že $t$ musí byť kladné.`,
        mistakes: [{ value: neg ? [t1] : [t1, t2], msg: `To sú hodnoty substitúcie $t=${B}^{x}$. Ešte sa vráť k neznámej $x$.` }],
        steps: [
          { q: `Po substitúcii $t=${B}^{x}$ vyrieš rovnicu $${poly([1, -s, pr], 't')}=0$. Zadaj jej korene $t$.`, type: 'set', answer: [t1, t2], signed: true },
          { q: `Z rovníc $${B}^{x}=t$ urči všetky riešenia $x$ (pamätaj, že $${B}^{x}&gt;0$).`, type: 'set', answer: ans, signed: true }
        ]
      };
    }
    if (t < 0.55) {
      const [a, b] = shuffle([2, 3, 5, 7]).slice(0, 2);
      let c, d; do { c = rnd(1, 9); d = rnd(1, 9); } while (c === d);
      const x = Math.log(d / c) / Math.log(a / b);
      const side = (k, z) => `${k === 1 ? '' : k + '\\cdot '}${z}^{x}`;
      return {
        signed: true, answer: round(x, 2), tol: 0.006,
        q: `Vyrieš rovnicu $${side(c, a)}=${side(d, b)}$. ${ROUND2}`,
        solution: `Vydelíme obe strany výrazom $${side(c, b)}$: $\\left(\\frac{${a}}{${b}}\\right)^{x}=${fTex(d, c)}$. Zlogaritmujeme:
          $x\\cdot\\ln\\frac{${a}}{${b}}=\\ln ${fTex(d, c)}$, teda $x=\\dfrac{${c === 1 ? `\\ln ${d}` : d === 1 ? `-\\ln ${c}` : `\\ln ${d}-\\ln ${c}`}}{\\ln ${a}-\\ln ${b}}\\approx ${dd(x)}$.`,
        hint: 'Mocniny s rovnakým exponentom $x$ daj na jednu stranu, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, a potom obe strany zlogaritmuj.',
        steps: [
          { q: `Uprav rovnicu na tvar $\\left(\\frac{${a}}{${b}}\\right)^{x}=r$. Aké je číslo $r$? Zadaj zlomok alebo celé číslo.`, answer: d / c },
          { q: `Zlogaritmuj obe strany a vyjadri $x$. ${ROUND2}`, answer: round(x, 2), tol: 0.006, signed: true }
        ]
      };
    }
    if (t < 0.8) {
      const k = rnd(2, 5), i = rnd(0, k), a = rnd(-4, 4);
      const b = a + Math.pow(2, k - i) - Math.pow(2, i);
      const x1 = Math.pow(2, i) - a, x2 = -Math.pow(2, k - i) - a;
      const lo = Math.max(-a, -b);
      return {
        type: 'set', signed: true, answer: [x1],
        q: `Vyrieš rovnicu $\\log_2(${poly([1, a])})+\\log_2(${poly([1, b])})=${k}$. Zadaj všetky riešenia oddelené bodkočiarkou.`,
        solution: `Podmienky: $${poly([1, a])}&gt;0$ a $${poly([1, b])}&gt;0$, teda $x&gt;${lo}$.
          $\\log_2\\big((${poly([1, a])})(${poly([1, b])})\\big)=${k} \\Rightarrow (${poly([1, a])})(${poly([1, b])})=${Math.pow(2, k)} \\Rightarrow ${poly([1, a + b, a * b - Math.pow(2, k)])}=0$.
          Korene sú $${x1}$ a $${x2}$; podmienku spĺňa len $x=${x1}$. $K=\\{${x1}\\}$.`,
        hint: 'Urči podmienky, súčet logaritmov zapíš ako logaritmus súčinu a odlogaritmuj. Nájdené korene porovnaj s podmienkami.',
        mistakes: (Math.pow(2, k) - a - b) / 2 !== x1 ? [{ value: [(Math.pow(2, k) - a - b) / 2], msg: 'Súčet logaritmov je logaritmus súčinu: $\\log_2 u+\\log_2 v=\\log_2(uv)$, nie $\\log_2(u+v)$.' }] : [],
        steps: [
          { q: `Podmienky dávajú $x&gt;c$. Aké je číslo $c$?`, answer: lo, signed: true },
          { q: `Po odlogaritmovaní dostaneš $(${poly([1, a])})(${poly([1, b])})=${Math.pow(2, k)}$. Zadaj korene tejto kvadratickej rovnice.`, type: 'set', answer: [x1, x2], signed: true },
          { q: 'Ktoré z koreňov spĺňajú podmienky? Zadaj všetky riešenia rovnice.', type: 'set', answer: [x1], signed: true }
        ]
      };
    }
    const base = pick([2, 3, 10]), m = rnd(-1, 3);
    let n; do { n = rnd(-1, 3); } while (n === m);
    const lg = base === 10 ? '\\log x' : `\\log_{${base}} x`;
    const val = (e) => Math.pow(base, e);
    const txt = (e) => (e < 0 ? `1/${base}` : String(val(e)));
    const tex = (e) => (e < 0 ? `\\frac{1}{${base}}` : String(val(e)));
    const sorted = [m, n].sort((x, y) => x - y);
    return {
      type: 'set', answer: [val(m), val(n)], show: sorted.map(txt).join('; '),
      q: `Vyrieš rovnicu $(${lg})^2${term(-(m + n), lg)}${term(m * n)}=0$. Zadaj všetky riešenia oddelené bodkočiarkou (zlomok napr. ako 1/2).`,
      solution: `Podmienka $x&gt;0$. Substitúcia $t=${lg}$: $${poly([1, -(m + n), m * n], 't')}=0$, teda $t_1=${m}$, $t_2=${n}$.
        Z $${lg}=${m}$ je $x=${base}^{${m}}=${tex(m)}$ a z $${lg}=${n}$ je $x=${base}^{${n}}=${tex(n)}$. $K=\\left\\{${sorted.map(tex).join('; ')}\\right\\}$.`,
      hint: `Zaveď substitúciu $t=${lg}$, vyrieš kvadratickú rovnicu a potom sa vráť k $x$ cez definíciu logaritmu.`,
      mistakes: [{ value: [m, n], msg: `To sú hodnoty substitúcie $t=${lg}$. Z definície logaritmu ešte vypočítaj $x=${base}^{t}$.` }],
      steps: [
        { q: `Po substitúcii $t=${lg}$ vyrieš rovnicu $${poly([1, -(m + n), m * n], 't')}=0$. Zadaj jej korene $t$.`, type: 'set', answer: [m, n], signed: true },
        { q: 'Vráť sa k $x$ a zadaj všetky riešenia (zlomok napr. ako 1/2).', type: 'set', answer: [val(m), val(n)] }
      ]
    };
  });

  const SIN_DEG = { '-2': [270], '-1': [210, 330], '0': [0, 180], '1': [30, 150], '2': [90] };
  const COS_DEG = { '-2': [180], '-1': [120, 240], '0': [90, 270], '1': [60, 300], '2': [0] };
  const degShow = (arr) => arr.map((d) => d + '°').join('; ');
  const degTex = (arr) => arr.map((d) => `${d}^\\circ`).join('; ');
  const INT360 = '$x\\in\\langle 0^\\circ; 360^\\circ)$';

  lesson({
    id: 's4-gonio-rovnice', order: 130, topics: ['goniometria', 'rovnice'], title: 'Goniometrické rovnice',
    summary: 'Rovnice kvadratické vzhľadom na sínus či kosínus, využitie vzorcov a všeobecné riešenie.',
    theory: [
      `<p><strong>Základné rovnice</strong> $\\sin x=a$, $\\cos x=a$ majú riešenie len pre $a\\in\\langle -1; 1\\rangle$, a to v každej perióde $2\\pi$ zvyčajne dve.
       Napríklad $\\sin x=\\frac{1}{2}$ má v $\\langle 0; 2\\pi)$ riešenia $\\frac{\\pi}{6}$ a $\\frac{5\\pi}{6}$, všeobecne $x=\\frac{\\pi}{6}+2k\\pi$ alebo $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.
       Rovnica $\\mathrm{tg}\\,x=a$ má riešenie pre každé $a$ a jej perióda je $\\pi$: $x=x_0+k\\pi$.</p>`,
      `<p><strong>Rovnice kvadratické</strong> v $\\sin x$ alebo $\\cos x$ riešime substitúciou: $2\\sin^2 x-3\\sin x+1=0$ s $t=\\sin x$ dáva $2t^2-3t+1=0$, teda $t\\in\\{\\frac{1}{2}; 1\\}$.
       Korene mimo $\\langle -1; 1\\rangle$ zahodíme.</p>`,
      `<p><strong>Užitočné vzorce:</strong> $\\sin^2 x+\\cos^2 x=1$ (prevedie rovnicu na jednu funkciu), $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x=1-2\\sin^2 x$.
       Spoločného činiteľa <strong>vyberieme pred zátvorku</strong>, nikdy ním nedelíme — stratili by sme riešenia, kde je nulový.</p>
       <table class="tbl tbl-auto"><tr><th>$x$</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th></tr>
       <tr><td>$\\sin x$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$1$</td></tr>
       <tr><td>$\\cos x$</td><td>$1$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr></table>`
    ],
    examples: [
      { task: 'Vyrieš rovnicu $2\\cos^2 x+3\\sin x-3=0$ pre $x\\in\\langle 0; 2\\pi)$.',
        steps: ['$\\cos^2 x=1-\\sin^2 x$: $2-2\\sin^2 x+3\\sin x-3=0$, teda $2\\sin^2 x-3\\sin x+1=0$.',
          'Substitúcia $t=\\sin x$: $2t^2-3t+1=0$, $t_1=1$, $t_2=\\frac{1}{2}$.',
          '$\\sin x=1 \\Rightarrow x=\\frac{\\pi}{2}$; $\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}$ alebo $x=\\frac{5\\pi}{6}$.',
          '<strong>$K=\\left\\{\\frac{\\pi}{6}; \\frac{\\pi}{2}; \\frac{5\\pi}{6}\\right\\}$</strong>'] },
      { task: 'Vyrieš rovnicu $\\sin 2x=\\cos x$ v $\\mathbb{R}$.',
        steps: ['$2\\sin x\\cos x-\\cos x=0 \\Rightarrow \\cos x\\,(2\\sin x-1)=0$.',
          '$\\cos x=0 \\Rightarrow x=\\frac{\\pi}{2}+k\\pi$.', '$\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}+2k\\pi$ alebo $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.'] }
    ]
  });

  const HALF = [
    ['1', [30, 150], [60, 300]], ['-1', [210, 330], [120, 240]],
    ['\\sqrt{2}', [45, 135], [45, 315]], ['-\\sqrt{2}', [225, 315], [135, 225]],
    ['\\sqrt{3}', [60, 120], [30, 330]], ['-\\sqrt{3}', [240, 300], [150, 210]]
  ];
  // odčítanie konštanty c (text) krát v: negK('1','\\cos x') = "- \\cos x", negK('-\\sqrt{2}','') = "+ \\sqrt{2}"
  const negK = (c, v) => {
    const neg = c[0] === '-', abs = neg ? c.slice(1) : c;
    return `${neg ? '+' : '-'} ${abs === '1' && v ? '' : abs}${v}`;
  };
  const GENERAL = [
    ['2\\cos x-1=0', 'x=\\pm\\frac{\\pi}{3}+2k\\pi', ['x=\\frac{\\pi}{3}+k\\pi', 'x=\\pm\\frac{\\pi}{6}+2k\\pi', 'x=\\frac{\\pi}{3}+2k\\pi'],
      '$\\cos x=\\frac{1}{2}$; v jednej perióde má riešenia $\\frac{\\pi}{3}$ a $-\\frac{\\pi}{3}$, perióda kosínusu je $2\\pi$.'],
    ['2\\sin x-\\sqrt{2}=0', 'x=\\frac{\\pi}{4}+2k\\pi \\ \\vee\\ x=\\frac{3\\pi}{4}+2k\\pi', ['x=\\pm\\frac{\\pi}{4}+2k\\pi', 'x=\\frac{\\pi}{4}+k\\pi', 'x=\\frac{\\pi}{4}+2k\\pi'],
      '$\\sin x=\\frac{\\sqrt2}{2}$; sínus je kladný v I. a II. kvadrante, teda $\\frac{\\pi}{4}$ a $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, perióda $2\\pi$.'],
    ['\\sqrt{3}\\,\\mathrm{tg}\\,x-1=0', 'x=\\frac{\\pi}{6}+k\\pi', ['x=\\frac{\\pi}{3}+k\\pi', 'x=\\frac{\\pi}{6}+2k\\pi', 'x=\\pm\\frac{\\pi}{6}+k\\pi'],
      '$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, čo platí pre $\\frac{\\pi}{6}$; perióda tangensu je $\\pi$.'],
    ['\\mathrm{tg}^2 x=1', 'x=\\frac{\\pi}{4}+k\\frac{\\pi}{2}', ['x=\\frac{\\pi}{4}+k\\pi', 'x=\\frac{\\pi}{4}+2k\\pi', 'x=\\pm\\frac{\\pi}{4}+2k\\pi'],
      '$\\mathrm{tg}\\,x=1$ alebo $\\mathrm{tg}\\,x=-1$, teda $x=\\frac{\\pi}{4}+k\\pi$ alebo $x=-\\frac{\\pi}{4}+k\\pi$. Spolu sú to body vzdialené o $\\frac{\\pi}{2}$.'],
    ['\\cos 2x=1', 'x=k\\pi', ['x=2k\\pi', 'x=k\\frac{\\pi}{2}', 'x=\\frac{\\pi}{2}+k\\pi'],
      '$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.'],
    ['4\\sin^2 x=1', 'x=\\pm\\frac{\\pi}{6}+k\\pi', ['x=\\frac{\\pi}{6}+2k\\pi \\ \\vee\\ x=\\frac{5\\pi}{6}+2k\\pi', 'x=\\pm\\frac{\\pi}{3}+k\\pi', 'x=\\frac{\\pi}{6}+k\\pi'],
      '$\\sin x=\\pm\\frac{1}{2}$; riešenia $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ sa opakujú s periódou $\\pi$ ako $\\pm\\frac{\\pi}{6}+k\\pi$.']
  ];

  gen('s4-gonio-rovnice', () => {
    const t = Math.random();
    if (t < 0.6) {
      const isSin = Math.random() < 0.5;
      let R1, R2;
      do { R1 = pick([-2, -1, 0, 1, 2]); R2 = pick([-4, -3, -2, -1, 0, 1, 2, 3, 4]); } while (R1 === R2);
      let A = 4, B = -2 * (R1 + R2), Cc = R1 * R2;
      const g = gcd(gcd(A, Math.abs(B)), Math.abs(Cc));
      A /= g; B /= g; Cc /= g;
      const TB = isSin ? SIN_DEG : COS_DEG;
      const fn = isSin ? '\\sin' : '\\cos', other = isSin ? '\\cos' : '\\sin';
      const roots = [R1, R2].filter((R) => Math.abs(R) <= 2);
      const ans = [].concat(...roots.map((R) => TB[String(R)])).sort((x, y) => x - y);
      const viaIdentity = t < 0.3;
      const eq = viaIdentity
        ? `${lead(-A, `${other}^2 x`)}${term(B, `${fn} x`)}${term(A + Cc)}=0`
        : `${lead(A, `${fn}^2 x`)}${term(B, `${fn} x`)}${term(Cc)}=0`;
      const bad = [R1, R2].filter((R) => Math.abs(R) > 2);
      return {
        type: 'set', answer: ans, show: degShow(ans),
        q: `Vyrieš rovnicu $${eq}$ pre ${INT360}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou (napr. 30; 150).`,
        solution: `${viaIdentity ? `Dosadíme $${other}^2 x=1-${fn}^2 x$ a upravíme: $${lead(A, `${fn}^2 x`)}${term(B, `${fn} x`)}${term(Cc)}=0$. ` : ''}
          Substitúcia $t=${fn} x$: $${poly([A, B, Cc], 't')}=0$, korene $t_1=${fTex(R1, 2)}$, $t_2=${fTex(R2, 2)}$.
          ${bad.length ? `Hodnota $${fTex(bad[0], 2)}$ leží mimo $\\langle -1; 1\\rangle$, tá riešenie nedáva. ` : ''}
          ${roots.map((R) => `$${fn} x=${fTex(R, 2)}$ pre $x\\in\\{${degTex(TB[String(R)])}\\}$`).join('; ')}. Spolu $K=\\{${degTex(ans)}\\}$.`,
        hint: `${viaIdentity ? `Pomocou $\\sin^2 x+\\cos^2 x=1$ prepíš rovnicu len na $${fn} x$. ` : ''}Zaveď $t=${fn} x$, vyrieš kvadratickú rovnicu a ponechaj len korene z intervalu $\\langle -1; 1\\rangle$.`,
        steps: [
          { q: `Po substitúcii $t=${fn} x$ dostaneš $${poly([A, B, Cc], 't')}=0$. Zadaj jej korene (zlomok napr. ako 1/2).`, type: 'set', answer: [R1 / 2, R2 / 2], signed: true },
          { q: `Pre korene z intervalu $\\langle -1; 1\\rangle$ nájdi všetky $x$ v stupňoch z ${INT360}.`, type: 'set', answer: ans, show: degShow(ans) }
        ]
      };
    }
    if (t < 0.82) {
      const [c, sAng, cAng] = pick(HALF), withCos = Math.random() < 0.5;
      const cc = c === '1' ? '' : c === '-1' ? '-' : c;
      const ans = [...new Set((withCos ? [90, 270] : [0, 180]).concat(withCos ? sAng : cAng))].sort((x, y) => x - y);
      const eq = withCos ? `\\sin 2x=${cc}\\cos x` : `\\sin 2x=${cc}\\sin x`;
      return {
        type: 'set', answer: ans, show: degShow(ans),
        q: `Vyrieš rovnicu $${eq}$ pre ${INT360}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou.`,
        solution: withCos
          ? `$2\\sin x\\cos x ${negK(c, '\\cos x')}=0 \\Rightarrow \\cos x\\,(2\\sin x ${negK(c, '')})=0$.
            $\\cos x=0$ pre $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x=${c[0] === '-' ? '-' : ''}\\frac{${c.replace('-', '')}}{2}$ pre $x\\in\\{${degTex(sAng)}\\}$. $K=\\{${degTex(ans)}\\}$.`
          : `$2\\sin x\\cos x ${negK(c, '\\sin x')}=0 \\Rightarrow \\sin x\\,(2\\cos x ${negK(c, '')})=0$.
            $\\sin x=0$ pre $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x=${c[0] === '-' ? '-' : ''}\\frac{${c.replace('-', '')}}{2}$ pre $x\\in\\{${degTex(cAng)}\\}$. $K=\\{${degTex(ans)}\\}$.`,
        hint: 'Použi $\\sin 2x=2\\sin x\\cos x$, všetko prenes na jednu stranu a vyber spoločného činiteľa pred zátvorku. Nedeľ ním!',
        mistakes: (() => {
          const part = [...(withCos ? sAng : cAng)].sort((x, y) => x - y);
          return part.length < ans.length ? [{ value: part, msg: `Rovnicu si zrejme vydelil výrazom $${withCos ? '\\cos x' : '\\sin x'}$ a stratil si riešenia, v ktorých je nulový. Vyber ho pred zátvorku.` }] : [];
        })(),
        steps: [
          { q: `Po vybratí $${withCos ? '\\cos x' : '\\sin x'}$ pred zátvorku: pre ktoré $x$ z ${INT360} je $${withCos ? '\\cos x' : '\\sin x'}=0$?`, type: 'set', answer: withCos ? [90, 270] : [0, 180] },
          { q: `Pre ktoré $x$ je nulová zátvorka $${withCos ? '2\\sin x' : '2\\cos x'} ${negK(c, '')}$?`, type: 'set', answer: withCos ? sAng : cAng },
          { q: 'Zadaj všetky riešenia rovnice.', type: 'set', answer: ans, show: degShow(ans) }
        ]
      };
    }
    const [eq, ok, wrong, why] = pick(GENERAL);
    return {
      type: 'choice', options: shuffle([ok, ...wrong].map((s) => `$${s}$`)), answer: `$${ok}$`,
      q: `Ktorý zápis vyjadruje všetky riešenia rovnice $${eq}$ v $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?`,
      solution: `${why} Správne je $${ok}$, $k\\in\\mathbb{Z}$.`,
      hint: 'Vyjadri goniometrickú funkciu, nájdi riešenia v jednej perióde a pripočítaj násobky periódy ($2\\pi$ pre sínus a kosínus, $\\pi$ pre tangens).',
      choiceHints: Object.fromEntries(wrong.map((s) => [`$${s}$`, 'Over tento zápis: dosaď $k=0$ a $k=1$ a skontroluj, či dostaneš riešenia rovnice. Over aj, či zápis nevynecháva niektoré riešenie z jednej periódy.']))
    };
  });

  fig('s4-oblast', {
    draw: () => {
      const p = plane(-4, 6, -2, 5, 400, 290);
      const P = (x, y) => `${n1(p.X(x))},${n1(p.Y(y))}`;
      const clipped = `<polygon class="f-fill f-outline" points="${P(-2, 0)} ${P(4, 0)} ${P(1, 3)}"/>
        <path class="f-line" d="${curvePath(p, (x) => x + 2, -4, 6, 2)}"/>
        <path class="f-line" d="${curvePath(p, (x) => -x + 4, -4, 6, 2)}"/>
        <circle class="f-vertex" cx="${n1(p.X(1))}" cy="${n1(p.Y(3))}" r="5"/>`;
      const front = `<text class="f-math" x="${n1(p.X(-3.6))}" y="${n1(p.Y(-1.2))}">y = x + 2</text>
        <text class="f-math" x="${n1(p.X(3.6))}" y="${n1(p.Y(2.2))}">y = −x + 4</text>
        <text class="f-small" x="${n1(p.X(1) + 8)}" y="${n1(p.Y(3) - 6)}">[1; 3]</text>`;
      return svg(p, axes(p), clipped, front, 'Množina riešení sústavy troch lineárnych nerovníc');
    }
  });

  lesson({
    id: 's4-sustavy', order: 140, topics: ['sustavy', 'nerovnice'], title: 'Sústavy rovníc a nerovníc',
    summary: 'Nelineárne sústavy, priesečníky kriviek a sústavy nerovníc v jednej aj dvoch premenných.',
    theory: [
      `<p><strong>Nelineárnu sústavu</strong> riešime najčastejšie <strong>dosadzovacou metódou</strong>: z jednoduchšej (lineárnej) rovnice vyjadríme jednu neznámu a dosadíme ju do druhej.
       Riešeniami sú usporiadané dvojice $[x; y]$; ich počet zodpovedá počtu priesečníkov grafov oboch rovníc. Sústava $x+y=s$, $xy=p$ vedie podľa Vietových vzťahov na rovnicu $t^2-st+p=0$.</p>`,
      `<p><strong>Sústava nerovníc s jednou neznámou:</strong> vyriešime každú nerovnicu zvlášť a výsledok je <strong>prienik</strong> množín riešení.
       Pri násobení alebo delení záporným číslom sa znak nerovnosti otočí.</p>`,
      `<p><strong>Sústava lineárnych nerovníc s dvoma neznámymi</strong> opisuje časť roviny: každá nerovnica $y\\le kx+q$ je polrovina pod priamkou $y=kx+q$ (aj s ňou).
       Riešením sústavy je prienik polrovín — často mnohouholník.</p>`,
      { fig: 's4-oblast', caption: 'Sústava $y\\ge 0$, $y\\le x+2$, $y\\le -x+4$ opisuje trojuholník s vrcholmi $[-2; 0]$, $[4; 0]$ a $[1; 3]$. Jeho obsah je $\\frac{6\\cdot 3}{2}=9$.' }
    ],
    examples: [
      { task: 'Vyrieš sústavu $x+y=7$, $x\\cdot y=10$.',
        steps: ['Z prvej rovnice $y=7-x$, dosadíme: $x(7-x)=10 \\Rightarrow x^2-7x+10=0$.',
          '$x_1=2$, $x_2=5$, k nim $y_1=5$, $y_2=2$.', '<strong>Riešenia: $[2; 5]$ a $[5; 2]$</strong>'] },
      { task: 'Vyrieš sústavu nerovníc $3x-2&gt;4$ a $5-x\\ge -1$ v $\\mathbb{R}$.',
        steps: ['$3x&gt;6 \\Rightarrow x&gt;2$.', '$-x\\ge -6 \\Rightarrow x\\le 6$ (delenie záporným číslom otočí znak).',
          '<strong>$K=(2; 6\\rangle$</strong>, celé čísla v ňom sú $3, 4, 5, 6$.'] }
    ]
  });

  gen('s4-sustavy', () => {
    const t = Math.random();
    if (t < 0.25) {
      let a, b; do { a = rnd(-6, 7); b = rnd(-6, 7); } while (a === b);
      const s = a + b, pr = a * b;
      return {
        type: 'set', signed: true, answer: [a, b],
        q: `Vyrieš sústavu rovníc $x+y=${s}$, $x\\cdot y=${pr}$. Zadaj všetky možné hodnoty $x$ oddelené bodkočiarkou.`,
        solution: `Z prvej rovnice $y=${poly([-1, s])}$. Dosadíme: $x(${poly([-1, s])})=${pr} \\Rightarrow ${poly([1, -s, pr])}=0$, korene $x_1=${Math.min(a, b)}$, $x_2=${Math.max(a, b)}$.
          Riešenia sústavy sú $[${a}; ${b}]$ a $[${b}; ${a}]$, $x$ je teda $${Math.min(a, b)}$ alebo $${Math.max(a, b)}$.`,
        hint: 'Z lineárnej rovnice vyjadri $y$ a dosaď do druhej. Dostaneš kvadratickú rovnicu pre $x$.',
        steps: [
          { q: `Dosadením $y=${poly([-1, s])}$ dostaneš rovnicu $${poly([1, -s, pr])}=0$. Aký je jej diskriminant?`, answer: s * s - 4 * pr },
          { q: 'Zadaj všetky možné hodnoty $x$.', type: 'set', answer: [a, b], signed: true }
        ]
      };
    }
    if (t < 0.5) {
      let r1, r2; do { r1 = rnd(-4, 4); r2 = rnd(-4, 4); } while (r1 === r2);
      const k = nz(-3, 3), q0 = rnd(-5, 5), b = k - (r1 + r2), c = q0 + r1 * r2;
      const xm = Math.min(r1, r2), xM = Math.max(r1, r2);
      return {
        type: 'tuple', signed: true, answer: [xm, k * xm + q0], placeholder: 'x; y',
        q: `Parabola $y=${poly([1, b, c])}$ a priamka $y=${poly([k, q0])}$ majú dva spoločné body. Zadaj súradnice toho z nich, ktorý má menšiu $x$-ovú súradnicu (napr. -1; 4).`,
        solution: `Porovnáme pravé strany: $${poly([1, b, c])}=${poly([k, q0])} \\Rightarrow ${poly([1, b - k, c - q0])}=0$, korene $x=${xm}$ a $x=${xM}$.
          Pre $x=${xm}$ je $y=${k}\\cdot ${par(xm)}${term(q0)}=${k * xm + q0}$. Priesečníky sú $[${xm}; ${k * xm + q0}]$ a $[${xM}; ${k * xM + q0}]$.`,
        hint: 'V spoločnom bode majú obe funkcie rovnakú hodnotu: polož pravé strany rovné a vyrieš kvadratickú rovnicu.',
        mistakes: [{ value: [xM, k * xM + q0], msg: 'To je druhý spoločný bod. Pýtame sa na ten s menšou $x$-ovou súradnicou.' }],
        steps: [
          { q: `Z rovnice $${poly([1, b, c])}=${poly([k, q0])}$ urči $x$-ové súradnice spoločných bodov.`, type: 'set', answer: [r1, r2], signed: true },
          { q: `Aká je $y$-ová súradnica bodu s $x=${xm}$?`, answer: k * xm + q0, signed: true }
        ]
      };
    }
    if (t < 0.75) {
      const L = rnd(-6, 5), R = L + rnd(1, 9);
      const a1 = nz(-5, 5), b1 = rnd(-9, 9), a2 = nz(-5, 5), b2 = rnd(-9, 9);
      const in1 = `${poly([a1, b1])} ${a1 > 0 ? '&gt;' : '&lt;'} ${a1 * L + b1}`;
      const in2 = `${poly([a2, b2])} ${a2 > 0 ? '\\le' : '\\ge'} ${a2 * R + b2}`;
      const askMin = Math.random() < 0.35;
      return {
        signed: true, answer: askMin ? L + 1 : R - L,
        q: `Sústava nerovníc $${in1}$ a $${in2}$ má riešenie v $\\mathbb{R}$. ${askMin ? 'Aké je najmenšie celé číslo, ktoré ju spĺňa?' : 'Koľko celých čísel ju spĺňa?'}`,
        solution: `Prvá nerovnica: $${lead(a1, 'x')} ${a1 > 0 ? '&gt;' : '&lt;'} ${a1 * L}$, po delení číslom $${a1}$ ${a1 < 0 ? '(otočíme znak) ' : ''}$x&gt;${L}$.
          Druhá: $${lead(a2, 'x')} ${a2 > 0 ? '\\le' : '\\ge'} ${a2 * R}$, odtiaľ ${a2 < 0 ? '(otočíme znak) ' : ''}$x\\le ${R}$.
          Prienik je $(${L}; ${R}\\rangle$. ${askMin ? `Najmenšie celé číslo v ňom je $${L + 1}$.` : `Celé čísla $${L + 1}, \\dots, ${R}$ — je ich $${R - L}$.`}`,
        hint: 'Vyrieš každú nerovnicu zvlášť (pozor na delenie záporným číslom) a urob prienik intervalov.',
        steps: [
          { q: `Prvá nerovnica má riešenie $x&gt;c$. Aké je číslo $c$?`, answer: L, signed: true, ...(a1 < 0 ? { hint: 'Delíš záporným číslom, znak nerovnosti sa otočí.' } : {}) },
          { q: `Druhá nerovnica má riešenie $x\\le d$. Aké je číslo $d$?`, answer: R, signed: true, ...(a2 < 0 ? { hint: 'Delíš záporným číslom, znak nerovnosti sa otočí.' } : {}) },
          { q: askMin ? 'Aké je najmenšie celé číslo v prieniku?' : 'Koľko celých čísel leží v prieniku?', answer: askMin ? L + 1 : R - L, signed: true }
        ]
      };
    }
    let p, q;
    do { p = rnd(-1, 6); q = rnd(-1, 6); } while (p + q < 2 || (p + q) % 2 !== 0);
    const S = (p + q) * (p + q) / 4;
    return {
      answer: S,
      q: `Vypočítaj obsah časti roviny, ktorú určuje sústava nerovníc $y\\ge 0$, $y\\le ${poly([1, p])}$, $y\\le ${poly([-1, q])}$.`,
      solution: `Priamky $y=${poly([1, p])}$ a $y=${poly([-1, q])}$ pretínajú os $x$ v bodoch $[${-p}; 0]$ a $[${q}; 0]$ a navzájom sa pretínajú v bode $[${(q - p) / 2}; ${(p + q) / 2}]$.
        Oblasť je trojuholník so základňou $${p + q}$ a výškou $${(p + q) / 2}$, jeho obsah je $\\frac{${p + q}\\cdot ${(p + q) / 2}}{2}=${S}$.`,
      hint: 'Načrtni priamky a nájdi vrcholy oblasti ako priesečníky hraničných priamok. Oblasť je trojuholník.',
      mistakes: [{ value: 2 * S, msg: 'Obsah trojuholníka je polovica súčinu základne a výšky. Nezabudni deliť dvoma.' }],
      steps: [
        { q: 'Aká dlhá je základňa trojuholníka na osi $x$?', answer: p + q },
        { q: 'Aká je výška trojuholníka (y-ová súradnica priesečníka oboch priamok)?', answer: (p + q) / 2 },
        { q: 'Aký je obsah oblasti?', answer: S }
      ]
    };
  });

  lesson({
    id: 's4-parametre', order: 150, topics: ['rovnice', 'sustavy'], title: 'Rovnice a sústavy s parametrom',
    summary: 'Diskusia počtu riešení podľa parametra, kvadratické rovnice a sústavy s parametrom.',
    theory: [
      `<p><strong>Parameter</strong> je písmeno, ktoré v rovnici zastupuje pevné, ale ľubovoľné číslo. Rovnicu riešime pre všetky jeho hodnoty naraz
       a robíme <strong>diskusiu</strong>: pre ktoré hodnoty parametra má rovnica jedno, viac alebo žiadne riešenie.
       Napríklad $px=3$ má pre $p\\neq 0$ jediné riešenie $x=\\frac{3}{p}$, pre $p=0$ nemá riešenie.</p>`,
      `<p><strong>Kvadratická rovnica</strong> $ax^2+bx+c=0$ s $a\\neq 0$ má dva rôzne reálne korene pre $D&gt;0$, jeden dvojnásobný pre $D=0$ a žiadny reálny pre $D&lt;0$.
       Ak je známy jeden koreň, dosadíme ho a získame rovnicu pre parameter; druhý koreň potom ľahko dopočítame z Vietových vzťahov $x_1+x_2=-\\frac{b}{a}$, $x_1x_2=\\frac{c}{a}$.
       Ak je pri $x^2$ parameter, prípad $a=0$ (rovnica je lineárna) musíme vyšetriť zvlášť.</p>`,
      `<p><strong>Sústava dvoch lineárnych rovníc</strong> $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$ má práve jedno riešenie, keď $a_1b_2-a_2b_1\\neq 0$ (priamky sú rôznobežné).
       Ak $a_1b_2-a_2b_1=0$, priamky sú rovnobežné: buď rôzne (žiadne riešenie), alebo totožné (nekonečne veľa riešení).</p>`
    ],
    examples: [
      { task: 'Pre ktoré hodnoty parametra $p$ má rovnica $x^2-4x+p=0$ dva rôzne reálne korene?',
        steps: ['$D=16-4p$.', '$D&gt;0 \\Leftrightarrow 16-4p&gt;0 \\Leftrightarrow p&lt;4$.',
          '<strong>Pre $p\\in(-\\infty; 4)$</strong>; pre $p=4$ má dvojnásobný koreň $2$, pre $p&gt;4$ nemá reálne korene.'] },
      { task: 'Pre ktoré $m$ nemá sústava $mx+2y=4$, $2x+my=-4$ riešenie?',
        steps: ['Determinant $m\\cdot m-2\\cdot 2=m^2-4=0$ pre $m=\\pm 2$; inak má sústava jediné riešenie.',
          '$m=2$: $2x+2y=4$ a $2x+2y=-4$ sú rovnobežné rôzne priamky — žiadne riešenie.',
          '$m=-2$: $-2x+2y=4$ a $2x-2y=-4$ sú tá istá priamka — nekonečne veľa riešení.', '<strong>Sústava nemá riešenie pre $m=2$.</strong>'] }
    ]
  });

  gen('s4-parametre', () => {
    const t = Math.random();
    if (t < 0.25) {
      const m = rnd(1, 7);
      if (Math.random() < 0.6) {
        return {
          type: 'set', signed: true, answer: [-2 * m, 2 * m],
          q: `Pre ktoré hodnoty parametra $p$ má rovnica $x^2+px+${m * m}=0$ dvojnásobný koreň? Zadaj všetky hodnoty oddelené bodkočiarkou.`,
          solution: `Dvojnásobný koreň je pri $D=0$: $p^2-4\\cdot ${m * m}=0 \\Rightarrow p^2=${4 * m * m} \\Rightarrow p=\\pm ${2 * m}$.`,
          hint: 'Kvadratická rovnica má dvojnásobný koreň práve vtedy, keď je diskriminant nulový.',
          mistakes: [{ value: [-m, m], msg: 'Diskriminant je $D=b^2-4ac$. Nezabudni na štvorku pred súčinom $ac$.' }],
          steps: [
            { q: 'Z podmienky $D=0$ vyjadri $p^2$. Koľko je $p^2$?', answer: 4 * m * m },
            { q: 'Zadaj všetky hodnoty $p$.', type: 'set', answer: [-2 * m, 2 * m], signed: true }
          ]
        };
      }
      const b = 2 * nz(-6, 6);
      return {
        answer: b * b / 4,
        q: `Pre akú hodnotu parametra $c$ má rovnica $x^2${term(b, 'x')}+c=0$ dvojnásobný koreň?`,
        solution: `$D=${b * b}-4c=0 \\Rightarrow c=${b * b / 4}$. Rovnica je potom $(${poly([1, b / 2])})^2=0$ s dvojnásobným koreňom $${-b / 2}$.`,
        hint: 'Polož diskriminant rovný nule.',
        mistakes: [{ value: b * b, msg: 'Diskriminant je $D=b^2-4ac$. Z rovnice $D=0$ treba $c$ ešte vydeliť štyrmi.' }]
      };
    }
    if (t < 0.5) {
      const k = nz(-5, 5), K = k * k;
      const v = pick([
        ['dva rôzne reálne korene', `$p \\lt ${K}$`, '$D&gt;0$'],
        ['žiadny reálny koreň', `$p \\gt ${K}$`, '$D&lt;0$'],
        ['aspoň jeden reálny koreň', `$p \\le ${K}$`, '$D\\ge 0$'],
        ['práve jeden (dvojnásobný) koreň', `$p = ${K}$`, '$D=0$']
      ]);
      return {
        type: 'choice', options: shuffle([`$p \\lt ${K}$`, `$p \\gt ${K}$`, `$p \\le ${K}$`, `$p \\ge ${K}$`, `$p = ${K}$`]), answer: v[1],
        q: `Pre ktoré hodnoty parametra $p$ má rovnica $x^2${term(2 * k, 'x')}+p=0$ ${v[0]}?`,
        solution: `$D=${4 * K}-4p$. Podmienka ${v[2]} dáva ${v[1]}.`,
        hint: 'Vyjadri diskriminant pomocou $p$ a podľa požadovaného počtu koreňov urči, či má byť kladný, nulový alebo záporný.',
        choiceHints: Object.fromEntries([
          [`$p \\lt ${K}$`, 'Táto podmienka zodpovedá $D&gt;0$, teda dvom rôznym reálnym koreňom.'],
          [`$p \\gt ${K}$`, 'Táto podmienka zodpovedá $D&lt;0$, rovnica potom nemá reálny koreň.'],
          [`$p \\le ${K}$`, 'Táto podmienka zodpovedá $D\\ge 0$, teda aspoň jednému reálnemu koreňu.'],
          [`$p \\ge ${K}$`, 'Táto podmienka zodpovedá $D\\le 0$: zahŕňa dvojnásobný koreň aj prípad bez reálnych koreňov.'],
          [`$p = ${K}$`, 'Táto podmienka zodpovedá $D=0$, teda jednému dvojnásobnému koreňu.']
        ].filter(([o]) => o !== v[1]))
      };
    }
    if (t < 0.75) {
      const r = nz(-6, 6); let x2; do { x2 = nz(-6, 6); } while (x2 === r);
      const q0 = r * x2, p = -(r + x2);
      return {
        type: 'tuple', signed: true, answer: [p, x2], placeholder: 'p; x₂',
        q: `Rovnica $x^2+px${term(q0)}=0$ má koreň $x_1=${r}$. Urči parameter $p$ a druhý koreň $x_2$ (zadaj ich v tomto poradí, napr. -5; 3).`,
        solution: `Z Vietovho vzťahu $x_1x_2=${q0}$ je $x_2=\\frac{${q0}}{${r}}=${x2}$. Zo vzťahu $x_1+x_2=-p$ je $p=-(${r}${term(x2)})=${p}$.
          Kontrola dosadením: $${par(r)}^2${term(p)}\\cdot ${par(r)}${term(q0)}=0$ ✓`,
        hint: 'Využi Vietove vzťahy: súčin koreňov je absolútny člen, súčet koreňov je $-p$. Alebo dosaď známy koreň do rovnice.',
        mistakes: p !== 0 ? [{ value: [-p, x2], msg: 'Podľa Vietovho vzťahu je súčet koreňov $x_1+x_2=-p$, nie $p$. Pozor na znamienko.' }] : [],
        steps: [
          { q: `Súčin koreňov je $x_1x_2=${q0}$. Aký je druhý koreň $x_2$?`, answer: x2, signed: true },
          { q: 'Aký je parameter $p$?', answer: p, signed: true }
        ]
      };
    }
    const k = rnd(1, 5), s = nz(-6, 6), none = Math.random() < 0.5;
    return {
      signed: true, answer: none ? k : -k,
      q: `Sústava rovníc s parametrom $m$: $mx+${k === 1 ? '' : k}y=${s}$, $${k === 1 ? '' : k}x+my=${-s}$. Pre ktorú hodnotu $m$ ${none ? 'sústava nemá riešenie' : 'má sústava nekonečne veľa riešení'}?`,
      solution: `Determinant sústavy je $m^2-${k * k}$, je nulový pre $m=\\pm ${k}$ (inak má sústava jediné riešenie).
        Pre $m=${k}$ majú rovnice ľavé strany úmerné, ale pravé strany $${s}$ a $${-s}$ nie: priamky sú rovnobežné rôzne, riešenie neexistuje.
        Pre $m=${-k}$ je druhá rovnica $(-1)$-násobkom prvej: priamky splývajú, riešení je nekonečne veľa. Odpoveď: $m=${none ? k : -k}$.`,
      hint: 'Najprv nájdi hodnoty $m$, pre ktoré je determinant $m\\cdot m-k\\cdot k$ nulový. Potom pre každú z nich dosaď $m$ a porovnaj rovnice.'
    };
  });

  /* ======================= C. ANALYTICKÁ GEOMETRIA A STEREOMETRIA ======================= */

  fig('s4-priamka-kruznica', {
    controls: [{ id: 'q', label: 'q', min: -6, max: 6, step: 0.25, value: 2 }],
    draw: (v) => {
      const p = plane(-5, 5, -5, 5, 340, 340);
      const q = v.q, r = p.X(3) - p.X(0);
      const line = (x) => -0.75 * x + q;
      const D = 56.25 - 4 * q * q, d = 0.8 * Math.abs(q);
      let dots = '';
      if (D >= -1e-9) {
        const s = Math.sqrt(Math.max(D, 0));
        [(1.5 * q - s) / 3.125, (1.5 * q + s) / 3.125].forEach((x) => { dots += `<circle class="f-dot" cx="${n1(p.X(x))}" cy="${n1(p.Y(line(x)))}" r="5"/>`; });
      }
      const fx = 12 * q / 25, fy = 16 * q / 25;
      const clipped = `<circle class="f-ok" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" r="${n1(r)}"/>
        <path class="f-accent" d="${curvePath(p, line, -5, 5, 2)}"/>
        <line class="f-dash" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(fx))}" y2="${n1(p.Y(fy))}"/>
        <circle class="f-solid" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" r="3"/>${dots}`;
      const kind = Math.abs(D) < 1e-9 ? 'dotyčnica (1 spoločný bod)' : D > 0 ? 'sečnica (2 spoločné body)' : 'nesečnica (žiadny spoločný bod)';
      return {
        svg: svg(p, axes(p), clipped, '', 'Kružnica a priamka'),
        readout: `x² + y² = 9 · <span class="c-accent">y = −0,75x ${q < 0 ? '−' : '+'} ${sk(Math.abs(q))}</span> · vzdialenosť stredu d = ${sk(d)} · r = 3 → ${kind}`
      };
    }
  });

  lesson({
    id: 's4-priamka-kruznica', order: 210, topics: ['analyticka'], title: 'Priamka a kružnica v analytickom vyjadrení',
    summary: 'Vzájomná poloha priamky a kružnice, priesečníky a dotyčnica ku kružnici.',
    theory: [
      `<p>Kružnica so stredom $S[m; n]$ a polomerom $r$ má rovnicu $(x-m)^2+(y-n)^2=r^2$. Priamka v rovine má všeobecnú rovnicu $ax+by+c=0$,
       kde $\\vec{n}=(a; b)$ je jej normálový vektor. Vzdialenosť bodu $S[m; n]$ od priamky je $d=\\dfrac{|am+bn+c|}{\\sqrt{a^2+b^2}}$.</p>`,
      `<p><strong>Vzájomná poloha:</strong> ak $d&lt;r$, priamka je <strong>sečnica</strong> (2 spoločné body); ak $d=r$, je <strong>dotyčnica</strong> (1 bod); ak $d&gt;r$, je <strong>nesečnica</strong>.
       To isté zistíme aj algebraicky: dosadením priamky do rovnice kružnice dostaneme kvadratickú rovnicu a jej diskriminant rozhodne o počte priesečníkov.</p>`,
      { fig: 's4-priamka-kruznica', caption: 'Kružnica $x^2+y^2=9$ a priamka $y=-0{,}75x+q$. Posúvaj $q$: priamka je dotyčnicou práve pre $q=\\pm 3{,}75$, keď sa vzdialenosť stredu rovná polomeru.' },
      `<p><strong>Dotyčnica v bode</strong> $T$ kružnice je kolmá na polomer $ST$, preto vektor $\\vec{ST}$ je jej normálovým vektorom.
       Pre kružnicu $x^2+y^2=r^2$ a bod $T[x_0; y_0]$ na nej má dotyčnica rovnicu $x_0x+y_0y=r^2$.</p>`
    ],
    examples: [
      { task: 'Nájdi priesečníky kružnice $x^2+y^2=25$ a priamky $x-y+1=0$.',
        steps: ['Z rovnice priamky $y=x+1$, dosadíme: $x^2+(x+1)^2=25 \\Rightarrow 2x^2+2x-24=0 \\Rightarrow x^2+x-12=0$.',
          '$x_1=3$, $x_2=-4$, k nim $y_1=4$, $y_2=-3$.', '<strong>Priesečníky: $[3; 4]$ a $[-4; -3]$</strong>'] },
      { task: 'Napíš rovnicu dotyčnice ku kružnici $(x-1)^2+(y+2)^2=25$ v bode $T[4; 2]$.',
        steps: ['Stred $S[1; -2]$, $\\vec{ST}=(3; 4)$ je normálový vektor dotyčnice: $3x+4y+c=0$.',
          'Dosadíme $T$: $12+8+c=0$, teda $c=-20$.', '<strong>Dotyčnica: $3x+4y-20=0$</strong>'] }
    ]
  });

  const OFF5 = [[5, 0], [4, 3], [3, 4], [0, 5], [-3, 4], [-4, 3], [-5, 0], [-4, -3], [-3, -4], [0, -5], [3, -4], [4, -3]];
  const circEq = (m, n, r2) => `${sq('x', m)}+${sq('y', n)}=${r2}`;
  // y vyjadrené z ax + by + c = 0 (b ≠ 0)
  const yLine = (a, b, c) => {
    const k = fTex(-a, b), q = fTex(Math.abs(c), Math.abs(b));
    const kx = a === 0 ? '' : k === '1' ? 'x' : k === '-1' ? '-x' : k + 'x';
    if (c === 0) return kx || '0';
    const neg = -c / b < 0;
    return kx ? `${kx}${neg ? '-' : '+'}${q}` : `${neg ? '-' : ''}${q}`;
  };

  gen('s4-priamka-kruznica', () => {
    const t = Math.random();
    const m = rnd(-3, 3), n = rnd(-3, 3);
    if (t < 0.4) {
      let o1, o2;
      do { o1 = pick(OFF5); o2 = pick(OFF5); } while (o1 === o2 || o1[0] === o2[0]);
      const dx = o2[0] - o1[0], dy = o2[1] - o1[1], g = gcd(dx, dy);
      const a = dy / g, b = -dx / g, P1 = [m + o1[0], n + o1[1]], P2 = [m + o2[0], n + o2[1]];
      const c = -(a * P1[0] + b * P1[1]);
      // b²(x-m)² + (ax + c + nb)² = 25b²
      const e = c + n * b;
      let A = a * a + b * b, B = -2 * m * b * b + 2 * a * e, Cc = b * b * m * m + e * e - 25 * b * b;
      const h = gcd(gcd(A, Math.abs(B)), Math.abs(Cc)); A /= h; B /= h; Cc /= h;
      return {
        type: 'set', signed: true, answer: [P1[0], P2[0]],
        q: `Priamka $p: ${lin([[a, 'x'], [b, 'y'], [c, '']])}=0$ pretína kružnicu $k: ${circEq(m, n, 25)}$ v dvoch bodoch. Zadaj $x$-ové súradnice oboch priesečníkov oddelené bodkočiarkou.`,
        solution: `Z rovnice priamky vyjadríme $y=${yLine(a, b, c)}$ a dosadíme do rovnice kružnice.
          Po úprave dostaneme $${poly([A, B, Cc])}=0$ s koreňmi $x_1=${Math.min(P1[0], P2[0])}$, $x_2=${Math.max(P1[0], P2[0])}$.
          Priesečníky sú $[${P1[0]}; ${P1[1]}]$ a $[${P2[0]}; ${P2[1]}]$.`,
        hint: 'Z rovnice priamky vyjadri $y$, dosaď do rovnice kružnice a vyrieš kvadratickú rovnicu pre $x$.',
        mistakes: [P1[1], P2[1]].sort((x, y) => x - y).join() !== [P1[0], P2[0]].sort((x, y) => x - y).join()
          ? [{ value: [P1[1], P2[1]], msg: 'To sú $y$-ové súradnice priesečníkov. Zadaj ich $x$-ové súradnice.' }] : []
      };
    }
    if (t < 0.7) {
      const r = rnd(2, 6), [a, b] = pick([[3, 4], [4, 3], [1, 0], [0, 1], [3, -4], [4, -3]]);
      const N = Math.sqrt(a * a + b * b), d = r + pick([-2, -1, 0, 0, 1, 2]), s = pick([1, -1]);
      const c = s * d * N - a * m - b * n;
      const kind = d < r ? 'sečnica (dva spoločné body)' : d === r ? 'dotyčnica (jeden spoločný bod)' : 'nesečnica (žiadny spoločný bod)';
      return {
        type: 'choice', options: ['sečnica (dva spoločné body)', 'dotyčnica (jeden spoločný bod)', 'nesečnica (žiadny spoločný bod)'], answer: kind,
        q: `Urči vzájomnú polohu priamky $p: ${lin([[a, 'x'], [b, 'y'], [c, '']])}=0$ a kružnice $k: ${circEq(m, n, r * r)}$.`,
        solution: `Stred kružnice je $S[${m}; ${n}]$, polomer $r=${r}$. Vzdialenosť stredu od priamky:
          $d=\\dfrac{|${[[a, m], [b, n]].filter(([cf]) => cf !== 0).map(([cf, w], i) => `${i && cf > 0 ? '+' : ''}${cf}\\cdot ${par(w)}`).join('')}${term(c)}|}{\\sqrt{${a * a}+${b * b}}}=\\dfrac{${d * N}}{${N}}=${d}$.
          Keďže $d${d < r ? '&lt;' : d === r ? '=' : '&gt;'}r$, priamka je ${kind}.`,
        hint: 'Z rovnice kružnice zisti stred a polomer, potom vypočítaj vzdialenosť stredu od priamky a porovnaj ju s polomerom.',
        choiceHints: Object.fromEntries(['sečnica (dva spoločné body)', 'dotyčnica (jeden spoločný bod)', 'nesečnica (žiadny spoločný bod)'].filter((o) => o !== kind)
          .map((o) => [o, `Porovnaj vzdialenosť stredu od priamky s polomerom. Polomer je odmocnina z pravej strany rovnice kružnice, teda $r=${r}$, nie $${r * r}$. Pozor aj na znamienka súradníc stredu.`]))
      };
    }
    const [u, w] = pick(OFF5), T = [m + u, n + w], c = -(u * T[0] + w * T[1]);
    return {
      signed: true, answer: c,
      q: `Bod $T[${T[0]}; ${T[1]}]$ leží na kružnici $k: ${circEq(m, n, 25)}$. Dotyčnica ku kružnici v bode $T$ má rovnicu $${lin([[u, 'x'], [w, 'y']])}+c=0$. Vypočítaj $c$.`,
      solution: `Stred je $S[${m}; ${n}]$ a vektor $\\vec{ST}=(${u}; ${w})$ je kolmý na dotyčnicu, je to jej normálový vektor — preto má rovnica tvar $${lin([[u, 'x'], [w, 'y']])}+c=0$.
        Dosadíme $T$: $${u}\\cdot ${par(T[0])}${term(w)}\\cdot ${par(T[1])}+c=0$, teda $c=${c}$.`,
      hint: 'Dotyčnica je kolmá na polomer $ST$. Do zadanej rovnice dosaď súradnice bodu $T$.',
      mistakes: -(u * m + w * n) !== c ? [{ value: -(u * m + w * n), msg: 'Dosadil si stred kružnice. Dotyčnica stredom neprechádza, prechádza bodom dotyku $T$.' }] : []
    };
  });

  /* ---------- kocka: súradnice a kreslenie ---------- */

  const V3 = { A: [0, 0, 0], B: [1, 0, 0], C: [1, 1, 0], D: [0, 1, 0], E: [0, 0, 1], F: [1, 0, 1], G: [1, 1, 1], H: [0, 1, 1] };
  const VN = Object.keys(V3);
  const EDGES = ['AB', 'BC', 'CD', 'AD', 'EF', 'FG', 'GH', 'EH', 'AE', 'BF', 'CG', 'DH'];
  const sub3 = (u, v) => u.map((x, i) => x - v[i]);
  const dot3 = (u, v) => u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
  const cross3 = (u, v) => [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
  const zero3 = (u) => u.every((x) => Math.abs(x) < 1e-9);
  const len3 = (u) => Math.sqrt(dot3(u, u));
  const vec = (u) => `(${u.map((x) => dc(x)).join('; ')})`;
  const pt3 = (u) => `[${u.map((x) => dc(x)).join('; ')}]`;
  const P3 = (x, y, z) => [60 + 170 * x + 70 * y, 250 - 170 * z - 60 * y];
  const cubeSvg = (extra, label) => {
    const L = (a, b, cls) => { const [x1, y1] = P3(...V3[a]), [x2, y2] = P3(...V3[b]); return `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`; };
    const off = { A: [-16, 16], B: [6, 16], C: [8, 6], D: [-16, -4], E: [-16, -2], F: [6, -6], G: [8, -2], H: [-16, -6] };
    let s = `<svg viewBox="0 0 340 280" role="img" aria-label="${label}">`;
    s += ['AD', 'CD', 'DH'].map((e) => L(e[0], e[1], 'f-dash')).join('');
    s += ['AB', 'BC', 'CG', 'GH', 'EH', 'AE', 'EF', 'BF', 'FG'].map((e) => L(e[0], e[1], 'f-line')).join('');
    s += extra(L);
    s += VN.map((v) => { const [x, y] = P3(...V3[v]); return `<text class="f-math" x="${x + off[v][0]}" y="${y + off[v][1]}">${v}</text>`; }).join('');
    return s + '</svg>';
  };

  fig('s4-kocka', {
    draw: () => cubeSvg((L) => `${L('A', 'B', 'f-accent')}${L('C', 'G', 'f-ok')}${L('E', 'G', 'f-warn')}`, 'Kocka ABCDEFGH s vyznačenými priamkami')
  });

  lesson({
    id: 's4-polohy', order: 220, topics: ['stereometria', 'analyticka'], title: 'Vzájomná poloha bodov, priamok a rovín',
    summary: 'Rovnobežné, rôznobežné a mimobežné priamky, poloha priamky a roviny, dvoch rovín a ich analytický opis.',
    theory: [
      `<p><strong>Dve priamky v priestore</strong> sú buď <strong>totožné</strong>, <strong>rovnobežné</strong> (ležia v jednej rovine a nemajú spoločný bod),
       <strong>rôznobežné</strong> (majú práve jeden spoločný bod) alebo <strong>mimobežné</strong> — nemajú spoločný bod a neležia v jednej rovine.
       Mimobežné priamky v rovine neexistujú, v priestore sú bežné.</p>`,
      { fig: 's4-kocka', caption: 'Kocka $ABCDEFGH$. Priamky $AB$ (modrá) a $CG$ (zelená) sú mimobežné, priamky $AB$ a $EG$ (oranžová) tiež. Priamky $CG$ a $EG$ sú rôznobežné, pretínajú sa v bode $G$.' },
      `<p><strong>Priamka a rovina:</strong> priamka buď leží v rovine, je s ňou rovnobežná (nemajú spoločný bod), alebo je rôznobežná (jeden spoločný bod — priesečník).
       Priamka je rovnobežná s rovinou, ak je rovnobežná s niektorou priamkou tejto roviny. <strong>Dve roviny</strong> sú totožné, rovnobežné rôzne alebo rôznobežné — vtedy sa pretínajú v priamke.</p>`,
      `<p><strong>Analyticky:</strong> priamka má parametrické vyjadrenie $X=A+t\\vec{u}$, $t\\in\\mathbb{R}$; rovina všeobecnú rovnicu $ax+by+cz+d=0$ s normálovým vektorom $\\vec{n}=(a; b; c)$.
       Priamky s násobnými smerovými vektormi sú rovnobežné alebo totožné. Priamka je s rovinou rovnobežná alebo v nej leží, ak $\\vec{u}\\cdot\\vec{n}=0$.
       Pri výpočtoch v kocke s hranou $1$ zvolíme $A[0; 0; 0]$, $B[1; 0; 0]$, $D[0; 1; 0]$, $E[0; 0; 1]$.</p>`
    ],
    examples: [
      { task: 'V kocke $ABCDEFGH$ urči vzájomnú polohu priamok $BG$ a $AH$.',
        steps: ['$\\vec{BG}=G-B=(0; 1; 1)$ a $\\vec{AH}=H-A=(0; 1; 1)$ — smerové vektory sú rovnaké.',
          'Bod $A$ neleží na priamke $BG$, priamky teda nesplývajú.', '<strong>Priamky $BG$ a $AH$ sú rovnobežné</strong> (ležia v rovine $ABGH$).'] },
      { task: 'Rozhodni, či bod $Q[5; 1; -2]$ leží na priamke $p: X=[1; 3; 0]+t\\,(2; -1; -1)$.',
        steps: ['Z prvej súradnice: $1+2t=5$, teda $t=2$.', 'Pre $t=2$: $y=3-2=1$ ✓, $z=0-2=-2$ ✓.', '<strong>Bod $Q$ na priamke leží</strong> (parameter $t=2$).'] }
    ]
  });

  const lineRel = (P, Q, R, S) => {
    const u = sub3(Q, P), v = sub3(S, R), n = cross3(u, v);
    if (zero3(n)) return zero3(cross3(u, sub3(R, P))) ? 'totožné' : 'rovnobežné';
    return Math.abs(dot3(sub3(R, P), n)) < 1e-9 ? 'rôznobežné' : 'mimobežné';
  };
  const two = () => { const a = pick(VN); let b; do { b = pick(VN); } while (b === a); return a + b; };
  const three = () => { let s; do { s = shuffle(VN).slice(0, 3); } while (zero3(cross3(sub3(V3[s[1]], V3[s[0]]), sub3(V3[s[2]], V3[s[0]])))); return s.join(''); };
  const nrm = (pl3) => cross3(sub3(V3[pl3[1]], V3[pl3[0]]), sub3(V3[pl3[2]], V3[pl3[0]]));
  const LP_OPT = ['priamka leží v rovine', 'priamka je s rovinou rovnobežná a nemá s ňou spoločný bod', 'priamka je s rovinou rôznobežná (pretína ju v jednom bode)'];
  const PP_OPT = ['roviny sú totožné', 'roviny sú rovnobežné rôzne', 'roviny sú rôznobežné (pretínajú sa v priamke)'];
  const COORD = 'Zvolíme kocku s hranou $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ a body $E, F, G, H$ nad nimi so súradnicou $z=1$.';

  gen('s4-polohy', () => {
    const t = Math.random();
    if (t < 0.32) {
      const want = pick(['rovnobežné', 'rôznobežné', 'mimobežné']);
      let l1, l2, rel;
      do { l1 = two(); l2 = two(); rel = lineRel(V3[l1[0]], V3[l1[1]], V3[l2[0]], V3[l2[1]]); } while (rel !== want);
      const u = sub3(V3[l1[1]], V3[l1[0]]), v = sub3(V3[l2[1]], V3[l2[0]]);
      let why;
      if (rel === 'rovnobežné') why = `Smerové vektory $\\vec{${l1}}=${vec(u)}$ a $\\vec{${l2}}=${vec(v)}$ sú násobkami seba a bod $${l2[0]}$ na priamke $${l1}$ neleží, priamky sú rovnobežné.`;
      else {
        const n = cross3(u, v), w = sub3(V3[l2[0]], V3[l1[0]]);
        if (rel === 'rôznobežné') {
          const s = dot3(cross3(w, v), n) / dot3(n, n), X = V3[l1[0]].map((x, i) => x + s * u[i]);
          why = `Smerové vektory $${vec(u)}$ a $${vec(v)}$ nie sú násobkami seba, priamky však ležia v jednej rovine a pretínajú sa v bode $${pt3(X)}$. Sú rôznobežné.`;
        } else why = `Smerové vektory $${vec(u)}$ a $${vec(v)}$ nie sú násobkami seba, takže priamky nie sú rovnobežné; neležia ani v jednej rovine, preto nemajú spoločný bod. Sú mimobežné.`;
      }
      return {
        type: 'choice', options: ['totožné', 'rovnobežné', 'rôznobežné', 'mimobežné'], answer: rel,
        q: `V kocke $ABCDEFGH$ (podstava $ABCD$, nad ňou $EFGH$, hrany $AE$, $BF$, $CG$, $DH$) urči vzájomnú polohu priamok $${l1}$ a $${l2}$.`,
        solution: `${COORD} ${why}`,
        hint: 'Porovnaj smery priamok. Ak nie sú rovnobežné, zisti, či ležia v jednej rovine (napr. v stene alebo uhlopriečnom reze kocky).',
        choiceHints: Object.fromEntries([
          ['totožné', 'Totožné priamky majú všetky body spoločné. Over, či oba body jednej priamky ležia na druhej.'],
          ['rovnobežné', 'Rovnobežné priamky majú smerové vektory, ktoré sú násobkami seba. Porovnaj smerové vektory.'],
          ['rôznobežné', 'Rôznobežné priamky majú spoločný bod, a teda ležia v jednej rovine. Nájdeš takú rovinu?'],
          ['mimobežné', 'Mimobežné priamky neležia v jednej rovine. Skús nájsť stenu alebo rez kocky, v ktorom ležia obe priamky.']
        ].filter(([o]) => o !== rel))
      };
    }
    if (t < 0.56) {
      const want = rnd(0, 2);
      let ln, pl3, rel;
      do {
        ln = two(); pl3 = three();
        const n = nrm(pl3), u = sub3(V3[ln[1]], V3[ln[0]]);
        rel = Math.abs(dot3(n, u)) > 1e-9 ? 2 : Math.abs(dot3(n, sub3(V3[ln[0]], V3[pl3[0]]))) < 1e-9 ? 0 : 1;
      } while (rel !== want);
      const n = nrm(pl3), u = sub3(V3[ln[1]], V3[ln[0]]);
      return {
        type: 'choice', options: [...LP_OPT], answer: LP_OPT[rel],
        q: `V kocke $ABCDEFGH$ urči vzájomnú polohu priamky $${ln}$ a roviny $${pl3}$.`,
        solution: `${COORD} Normálový vektor roviny $${pl3}$ je $\\vec{n}=${vec(n)}$ (kolmý na $\\vec{${pl3[0]}${pl3[1]}}$ aj $\\vec{${pl3[0]}${pl3[2]}}$), smerový vektor priamky $\\vec{u}=${vec(u)}$.
          $\\vec{u}\\cdot\\vec{n}=${dot3(u, n)}$. ${rel === 2 ? 'Súčin je nenulový, priamka rovinu pretína.'
            : `Súčin je nulový, priamka je s rovinou rovnobežná; bod $${ln[0]}$ ${rel === 0 ? 'v rovine leží, takže v nej leží celá priamka' : 'v rovine neleží, preto nemajú spoločný bod'}.`}`,
        hint: 'Predstav si rovinu ako rez kockou. Priamka v nej leží, ak v nej ležia dva jej body; je rovnobežná, ak je rovnobežná s niektorou priamkou roviny.',
        choiceHints: Object.fromEntries([
          'Priamka leží v rovine, len ak v nej ležia dva jej body. Over oba koncové body.',
          'Priamka je s rovinou rovnobežná, len ak je jej smerový vektor kolmý na normálový vektor roviny ($\\vec u\\cdot\\vec n=0$). Vypočítaj tento skalárny súčin.',
          'Priamka pretína rovinu, len ak $\\vec u\\cdot\\vec n\\neq 0$. Vypočítaj skalárny súčin smerového a normálového vektora.'
        ].map((m, i) => [LP_OPT[i], m]).filter((_, i) => i !== rel))
      };
    }
    if (t < 0.78) {
      const want = rnd(0, 2);
      let p1, p2, rel;
      do {
        p1 = three(); p2 = three();
        const n1v = nrm(p1), n2v = nrm(p2);
        rel = !zero3(cross3(n1v, n2v)) ? 2 : Math.abs(dot3(n1v, sub3(V3[p2[0]], V3[p1[0]]))) < 1e-9 ? 0 : 1;
      } while (rel !== want || [...p1].sort().join('') === [...p2].sort().join(''));
      return {
        type: 'choice', options: [...PP_OPT], answer: PP_OPT[rel],
        q: `V kocke $ABCDEFGH$ urči vzájomnú polohu rovín $${p1}$ a $${p2}$.`,
        solution: `${COORD} Normálové vektory sú $${vec(nrm(p1))}$ a $${vec(nrm(p2))}$. ${rel === 2 ? 'Nie sú násobkami seba, roviny sú rôznobežné.'
          : `Sú násobkami seba, roviny sú rovnobežné; bod $${p2[0]}$ ${rel === 0 ? 'leží v rovine' : 'neleží v rovine'} $${p1}$, preto sú roviny ${rel === 0 ? 'totožné' : 'rovnobežné rôzne'}.`}`,
        hint: 'Zisti, ktoré body kocky v rovinách ležia. Tri body môžu určovať tú istú rovinu, aj keď sú to iné vrcholy.',
        choiceHints: Object.fromEntries([
          'Totožné roviny majú všetky body spoločné. Over, či všetky tri body druhej roviny ležia v prvej.',
          'Rovnobežné roviny majú normálové vektory, ktoré sú násobkami seba. Porovnaj normálové vektory.',
          'Rôznobežné roviny majú normálové vektory, ktoré nie sú násobkami seba. Porovnaj normálové vektory.'
        ].map((m, i) => [PP_OPT[i], m]).filter((_, i) => i !== rel))
      };
    }
    if (Math.random() < 0.5) {
      const n = [nz(-5, 5), rnd(-5, 5), nz(-5, 5)], P = [rnd(-4, 4), rnd(-4, 4), rnd(-4, 4)], d = -dot3(n, P);
      return {
        signed: true, answer: d,
        q: `Rovina $\\rho: ${lin([[n[0], 'x'], [n[1], 'y'], [n[2], 'z']])}+d=0$ prechádza bodom $P${pt3(P)}$. Vypočítaj $d$.`,
        solution: `Súradnice bodu $P$ musia vyhovovať rovnici: $${n[0]}\\cdot ${par(P[0])}${term(n[1])}\\cdot ${par(P[1])}${term(n[2])}\\cdot ${par(P[2])}+d=0$, teda $${dot3(n, P)}+d=0$ a $d=${d}$.`,
        hint: 'Dosaď súradnice bodu $P$ do rovnice roviny a vyjadri $d$.',
        steps: [
          { q: `Dosaď bod $P$ do výrazu $${lin([[n[0], 'x'], [n[1], 'y'], [n[2], 'z']])}$. Akú hodnotu dostaneš?`, answer: dot3(n, P), signed: true },
          { q: 'Súčet s $d$ má byť nula. Koľko je $d$?', answer: d, signed: true }
        ]
      };
    }
    const A = [rnd(-3, 3), rnd(-3, 3), rnd(-3, 3)], u = [nz(-3, 3), rnd(-3, 3), rnd(-3, 3)], tt = nz(-3, 3);
    const on = Math.random() < 0.5, Q = A.map((x, i) => x + tt * u[i]);
    if (!on) Q[pick([1, 2])] += pick([1, -1]);
    const ans = on ? 'áno' : 'nie';
    const rows = [0, 1, 2].map((i) => `$${'xyz'[i]}: ${A[i]}${term(u[i], 't')}=${Q[i]}$`);
    return {
      type: 'choice', options: ['áno', 'nie'], answer: ans,
      q: `Leží bod $Q${pt3(Q)}$ na priamke $p: X=${pt3(A)}+t\\,${vec(u)}$, $t\\in\\mathbb{R}$?`,
      solution: `Hľadáme $t$ tak, aby $A+t\\vec{u}=Q$. Z prvej rovnice ${rows[0]} je $t=${tt}$. Ďalšie rovnice: ${rows[1]} a ${rows[2]} —
        ${on ? `pre $t=${tt}$ obe platia, bod na priamke <strong>leží</strong>.` : `pre $t=${tt}$ niektorá z nich neplatí, bod na priamke <strong>neleží</strong>.`}`,
      hint: 'Z jednej súradnice vypočítaj parameter $t$ a over, či rovnaké $t$ vyhovuje aj ostatným súradniciam.',
      choiceHints: on
        ? { nie: 'Vypočítaj $t$ z prvej súradnice a dosaď ho do zvyšných dvoch rovníc. Over starostlivo obe.' }
        : { 'áno': 'Jedna súradnica nestačí: to isté $t$ musí vyhovovať všetkým trom rovniciam. Over aj $y$ a $z$.' }
    };
  });

  fig('s4-kocka-uhol', {
    draw: () => cubeSvg((L) => `${L('A', 'C', 'f-ok')}${L('C', 'G', 'f-thin')}${L('A', 'G', 'f-accent')}
      <path class="f-warn" d="M98.8 240.3 A40 40 0 0 0 88.9 222.3"/>
      <text class="f-math" x="104" y="232">φ</text>
      <text class="f-math c-ok" x="190" y="234">a√2</text><text class="f-math" x="306" y="110">a</text>
      <text class="f-math c-accent" x="160" y="140">a√3</text>`, 'Kocka s telesovou uhlopriečkou a uhlom s rovinou podstavy')
  });

  lesson({
    id: 's4-uhly-vzdialenosti', order: 230, topics: ['stereometria', 'analyticka'], title: 'Uhol a vzdialenosť v priestore',
    summary: 'Vzdialenosť bodov, bodu od priamky a od roviny, uhol priamok a uhol priamky s rovinou — najmä v kocke.',
    theory: [
      `<p><strong>Vzdialenosti:</strong> vzdialenosť bodov je $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2+(b_3-a_3)^2}$. Vzdialenosť bodu od priamky je dĺžka kolmice na priamku,
       vzdialenosť bodu $P$ od roviny $ax+by+cz+d=0$ je $\\dfrac{|ap_1+bp_2+cp_3+d|}{\\sqrt{a^2+b^2+c^2}}$.
       V kocke s hranou $a$: stenová uhlopriečka $a\\sqrt2$, telesová uhlopriečka $a\\sqrt3$.</p>`,
      `<p><strong>Uhol dvoch priamok</strong> (aj mimobežných) je uhol ich smerových vektorov, berieme ho z $\\langle 0^\\circ; 90^\\circ\\rangle$:
       $\\cos\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}$. <strong>Uhol priamky s rovinou</strong> je uhol priamky a jej kolmého priemetu do roviny;
       s normálovým vektorom $\\vec{n}$ platí $\\sin\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}$.</p>`,
      { fig: 's4-kocka-uhol', caption: 'Uhol telesovej uhlopriečky $AG$ s rovinou podstavy je uhol medzi $AG$ a jej priemetom $AC$. Z pravouhlého trojuholníka $ACG$: $\\mathrm{tg}\\,\\varphi=\\frac{a}{a\\sqrt2}$, teda $\\varphi\\approx 35{,}26^\\circ$.' },
      `<p><strong>Vektorový súčin</strong> $\\vec{u}\\times\\vec{v}=(u_2v_3-u_3v_2;\\ u_3v_1-u_1v_3;\\ u_1v_2-u_2v_1)$ je kolmý na oba vektory a jeho veľkosť je obsah rovnobežníka nad nimi.
       Preto vzdialenosť bodu $P$ od priamky $X=Q+t\\vec{u}$ je $\\dfrac{|\\vec{QP}\\times\\vec{u}|}{|\\vec{u}|}$ a normálový vektor roviny $QRS$ je $\\vec{QR}\\times\\vec{QS}$.</p>`
    ],
    examples: [
      { task: 'Kocka $ABCDEFGH$ má hranu $a=6\\,\\text{cm}$. Vypočítaj vzdialenosť vrcholu $A$ od stredu $K$ hrany $GH$.',
        steps: ['$A[0; 0; 0]$, $G[6; 6; 6]$, $H[0; 6; 6]$, teda $K[3; 6; 6]$.', '$|AK|=\\sqrt{3^2+6^2+6^2}=\\sqrt{81}=9$.', '<strong>$|AK|=9\\,\\text{cm}$</strong>'] },
      { task: 'Vypočítaj vzdialenosť vrcholu $A$ od roviny $BDE$ v kocke s hranou $a$.',
        steps: ['$B[a; 0; 0]$, $D[0; a; 0]$, $E[0; 0; a]$ ležia v rovine $x+y+z-a=0$.',
          '$d=\\dfrac{|0+0+0-a|}{\\sqrt{1+1+1}}=\\dfrac{a}{\\sqrt3}=\\dfrac{a\\sqrt3}{3}$.', 'Je to tretina telesovej uhlopriečky $AG$.'] }
    ]
  });

  gen('s4-uhly-vzdialenosti', () => {
    const t = Math.random();
    const a = pick([2, 4, 6, 8, 10]);
    const S = (u) => u.map((x) => x * a);
    const intro = `Kocka $ABCDEFGH$ má hranu $a=${a}\\,\\text{cm}$.`;
    const setup = `Zvolíme $A[0; 0; 0]$, $B[${a}; 0; 0]$, $D[0; ${a}; 0]$, $E[0; 0; ${a}]$.`;
    if (t < 0.25) {
      const P = pick(VN);
      let e; do { e = pick(EDGES); } while (e.includes(P));
      const K = V3[e[0]].map((x, i) => (x + V3[e[1]][i]) / 2);
      const d = sub3(S(K), S(V3[P])), s2 = dot3(d, d), dist = Math.sqrt(s2);
      return {
        answer: round(dist, 2), tol: 0.006,
        q: `${intro} Bod $K$ je stred hrany $${e}$. Vypočítaj vzdialenosť bodov $${P}$ a $K$ v cm. ${ROUND2}`,
        solution: `${setup} Potom $${P}${pt3(S(V3[P]))}$ a $K${pt3(S(K))}$.
          $|${P}K|=\\sqrt{${d.map((x) => `${par(x)}^2`).join('+')}}=\\sqrt{${s2}}${Number.isInteger(dist) ? '=' + dist : '\\approx ' + dd(dist)}\\,\\text{cm}$.`,
        hint: 'Umiestni kocku do súradnicovej sústavy, zapíš súradnice oboch bodov (stred hrany je priemer koncových bodov) a použi vzorec pre vzdialenosť.',
        mistakes: Math.abs(round(s2, 2) - round(dist, 2)) > 0.006 ? [{ value: s2, msg: 'To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.' }] : [],
        steps: [
          { q: `Aké sú súradnice bodu $K$ (v cm)? Zadaj $x$; $y$; $z$.`, type: 'tuple', answer: S(K), placeholder: 'x; y; z' },
          { q: `Vypočítaj $|${P}K|^2$.`, answer: s2 },
          { q: `Vypočítaj $|${P}K|$ v cm. ${ROUND2}`, answer: round(dist, 2), tol: 0.006 }
        ]
      };
    }
    if (t < 0.5) {
      if (Math.random() < 0.5) {
        let l1, l2, u, v;
        do { l1 = two(); l2 = two(); u = sub3(V3[l1[1]], V3[l1[0]]); v = sub3(V3[l2[1]], V3[l2[0]]); } while (zero3(cross3(u, v)));
        const c = Math.abs(dot3(u, v)) / (len3(u) * len3(v)), phi = Math.acos(c) * 180 / Math.PI;
        return {
          answer: round(phi, 1), tol: 0.06,
          q: `V kocke $ABCDEFGH$ vypočítaj uhol priamok $${l1}$ a $${l2}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.`,
          solution: `V kocke s hranou $1$ sú smerové vektory $\\vec{u}=\\vec{${l1}}=${vec(u)}$ a $\\vec{v}=\\vec{${l2}}=${vec(v)}$.
            $\\cos\\varphi=\\dfrac{|${dot3(u, v)}|}{\\sqrt{${dot3(u, u)}}\\cdot\\sqrt{${dot3(v, v)}}}\\approx ${dc(c)}$, teda $\\varphi\\approx ${dd(phi, 1)}^\\circ$.`,
          hint: 'Uhol priamok je uhol ich smerových vektorov z intervalu $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.',
          mistakes: dot3(u, v) < 0 ? [{ value: round(180 - phi, 1), msg: 'Uhol dvoch priamok je najviac $90^\\circ$. Vo vzorci pre $\\cos\\varphi$ je v čitateli absolútna hodnota skalárneho súčinu.' }] : [],
          steps: [
            { q: `Vypočítaj skalárny súčin smerových vektorov $\\vec{${l1}}\\cdot\\vec{${l2}}$ (kocka s hranou $1$).`, answer: dot3(u, v), signed: true },
            { q: 'Vypočítaj uhol priamok v stupňoch. Výsledok zaokrúhli na desatiny stupňa.', answer: round(phi, 1), tol: 0.06 }
          ]
        };
      }
      const FACES = [['ABC', [0, 0, 1]], ['ABF', [0, 1, 0]], ['BCG', [1, 0, 0]], ['EFG', [0, 0, 1]], ['ADH', [1, 0, 0]], ['CDH', [0, 1, 0]]];
      let ln, f, u;
      do { ln = two(); f = pick(FACES); u = sub3(V3[ln[1]], V3[ln[0]]); } while (Math.abs(dot3(u, f[1])) < 1e-9);
      const sn = Math.abs(dot3(u, f[1])) / len3(u), phi = Math.asin(sn) * 180 / Math.PI;
      return {
        answer: round(phi, 1), tol: 0.06,
        q: `V kocke $ABCDEFGH$ vypočítaj uhol priamky $${ln}$ s rovinou $${f[0]}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.`,
        solution: `V kocke s hranou $1$ je smerový vektor priamky $\\vec{u}=${vec(u)}$ a rovina $${f[0]}$ je stena kocky s normálovým vektorom $\\vec{n}=${vec(f[1])}$.
          $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{${Math.abs(dot3(u, f[1]))}}{\\sqrt{${dot3(u, u)}}}\\approx ${dc(sn)}$, teda $\\varphi\\approx ${dd(phi, 1)}^\\circ$.`,
        hint: 'Uhol priamky s rovinou počítaj cez normálový vektor roviny: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Alebo nájdi priemet priamky do roviny a pravouhlý trojuholník.',
        mistakes: Math.abs(90 - 2 * phi) > 0.1 ? [{ value: round(90 - phi, 1), msg: 'To je uhol priamky s normálovým vektorom roviny. Uhol s rovinou ho dopĺňa do $90^\\circ$: s normálou počítaj $\\sin\\varphi$, nie $\\cos\\varphi$.' }] : [],
        steps: [
          { q: `Vypočítaj $|\\vec u\\cdot\\vec n|$ pre $\\vec u=\\vec{${ln}}$ a normálový vektor $\\vec n=${vec(f[1])}$ (kocka s hranou $1$).`, answer: Math.abs(dot3(u, f[1])) },
          { q: 'Vypočítaj uhol priamky s rovinou v stupňoch. Výsledok zaokrúhli na desatiny stupňa.', answer: round(phi, 1), tol: 0.06 }
        ]
      };
    }
    if (t < 0.75) {
      let P, ln, u, w;
      do { P = pick(VN); ln = two(); u = sub3(V3[ln[1]], V3[ln[0]]); w = sub3(V3[P], V3[ln[0]]); } while (zero3(cross3(w, u)));
      const cr = cross3(S(w), u), dist = len3(cr) / len3(u);
      return {
        answer: round(dist, 2), tol: 0.006,
        q: `${intro} Vypočítaj vzdialenosť vrcholu $${P}$ od priamky $${ln}$ v cm. ${ROUND2}`,
        solution: `${setup} Smerový vektor priamky $\\vec{u}=\\vec{${ln}}=${vec(S(u))}$, vektor $\\vec{${ln[0]}${P}}=${vec(S(w))}$.
          $d=\\dfrac{|\\vec{${ln[0]}${P}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|${vec(cross3(S(w), S(u)))}|}{\\sqrt{${dot3(S(u), S(u))}}}\\approx ${dd(dist)}\\,\\text{cm}$.`,
        hint: 'Použi vzorec $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, kde $Q$ je bod priamky. Alebo nájdi trojuholník, v ktorom je hľadaná vzdialenosť výškou.',
        mistakes: Math.abs(round(len3(S(w)), 2) - round(dist, 2)) > 0.006
          ? [{ value: round(len3(S(w)), 2), msg: `To je vzdialenosť bodov $${ln[0]}$ a $${P}$. Vzdialenosť od priamky sa meria kolmo na priamku.` }] : []
      };
    }
    let P, pl3, n;
    do { P = pick(VN); pl3 = three(); n = nrm(pl3); } while (Math.abs(dot3(n, sub3(V3[P], V3[pl3[0]]))) < 1e-9);
    const g = gcd(gcd(Math.abs(n[0]), Math.abs(n[1])), Math.abs(n[2]));
    n = n.map((x) => x / g);
    const d0 = -dot3(n, V3[pl3[0]]) * a;
    const num = Math.abs(dot3(n, S(V3[P])) + d0), dist = num / len3(n);
    return {
      answer: round(dist, 2), tol: 0.006,
      q: `${intro} Vypočítaj vzdialenosť vrcholu $${P}$ od roviny $${pl3}$ v cm. ${ROUND2}`,
      solution: `${setup} Rovina $${pl3}$ má normálový vektor $\\vec{n}=${vec(n)}$ a rovnicu $${lin([[n[0], 'x'], [n[1], 'y'], [n[2], 'z'], [d0, '']])}=0$.
        Pre $${P}${pt3(S(V3[P]))}$: $d=\\dfrac{${num}}{\\sqrt{${dot3(n, n)}}}\\approx ${dd(dist)}\\,\\text{cm}$.`,
      hint: 'Zostav rovnicu roviny (normálový vektor je kolmý na dva vektory v rovine) a použi vzorec pre vzdialenosť bodu od roviny.',
      mistakes: dot3(n, n) !== 1 ? [{ value: num, msg: `Zabudol si deliť veľkosťou normálového vektora $|\\vec n|=\\sqrt{${dot3(n, n)}}$.` }] : [],
      steps: [
        { q: `Rovina $${pl3}$ má normálový vektor $\\vec{n}=${vec(n)}$ a rovnicu $${lin([[n[0], 'x'], [n[1], 'y'], [n[2], 'z']])}+d=0$. Vypočítaj $d$.`, answer: d0, signed: true },
        { q: `Dosaď bod $${P}$ do ľavej strany rovnice roviny. Aká je absolútna hodnota výsledku?`, answer: num },
        { q: `Vypočítaj vzdialenosť bodu $${P}$ od roviny v cm. ${ROUND2}`, answer: round(dist, 2), tol: 0.006 }
      ]
    };
  });

  fig('s4-ihlan', {
    draw: () => `<svg viewBox="0 0 330 230" role="img" aria-label="Pravidelný štvorboký ihlan">
      <polygon class="f-fill" points="40,200 220,200 290,150 165,30"/>
      <path class="f-dash" fill="none" d="M40 200 L110 150 L290 150 M110 150 L165 30"/>
      <path class="f-line" d="M40 200 H220 L290 150 L165 30 Z M220 200 L165 30"/>
      <line class="f-accent" x1="165" y1="30" x2="165" y2="175"/>
      <line class="f-ok" x1="165" y1="30" x2="255" y2="175"/>
      <line class="f-thin" x1="165" y1="175" x2="255" y2="175"/>
      <circle class="f-solid" cx="165" cy="175" r="3"/>
      <text class="f-math" x="130" y="220" text-anchor="middle">a</text>
      <text class="f-math c-accent" x="150" y="120">v</text>
      <text class="f-math c-ok" x="218" y="100">v<tspan font-size="12" dy="4">s</tspan></text>
      <text class="f-math" x="196" y="122">h</text>
      <text class="f-math" x="160" y="22">V</text>
      <text class="f-math" x="152" y="170">S</text></svg>`
  });

  lesson({
    id: 's4-telesa', order: 240, topics: ['stereometria'], title: 'Hranol, ihlan, valec, kužeľ a guľa',
    summary: 'Vlastnosti telies, pravouhlé trojuholníky vnútri telies, povrch a objem, rez guľou.',
    theory: [
      `<p><strong>Hranol</strong> a <strong>valec</strong> majú dve zhodné rovnobežné podstavy: $V=S_p\\cdot v$, $S=2S_p+S_{pl}$. Valec: $V=\\pi r^2v$, $S=2\\pi r^2+2\\pi rv$.
       <strong>Ihlan</strong> a <strong>kužeľ</strong> majú jednu podstavu a vrchol: $V=\\frac{1}{3}S_p\\cdot v$. Kužeľ so stranou $s$: $V=\\frac{1}{3}\\pi r^2 v$, $S=\\pi r^2+\\pi rs$, kde $s^2=r^2+v^2$.
       <strong>Guľa</strong>: $V=\\frac{4}{3}\\pi r^3$, $S=4\\pi r^2$.</p>`,
      { fig: 's4-ihlan', caption: 'Pravidelný štvorboký ihlan: výška $v$, stenová výška $v_s$ a polovica hrany $\\frac{a}{2}$ tvoria pravouhlý trojuholník: $v_s^2=v^2+\\left(\\frac{a}{2}\\right)^2$. Pre bočnú hranu $h$ platí $h^2=v_s^2+\\left(\\frac{a}{2}\\right)^2$.' },
      `<p><strong>Pravidelný štvorboký ihlan</strong> s podstavnou hranou $a$ má $S=a^2+4\\cdot\\frac{a\\cdot v_s}{2}=a^2+2av_s$ a $V=\\frac{1}{3}a^2v$.
       Kľúčom k väčšine úloh je správny pravouhlý trojuholník — napríklad výška, polovica uhlopriečky podstavy a bočná hrana: $h^2=v^2+\\left(\\frac{a\\sqrt2}{2}\\right)^2$.</p>`,
      `<p><strong>Rez gule</strong> rovinou vo vzdialenosti $d$ od stredu je kruh s polomerom $\\rho=\\sqrt{r^2-d^2}$. <strong>Pravidelný trojboký hranol</strong> má podstavu
       rovnostranný trojuholník s obsahom $\\frac{\\sqrt3}{4}a^2$.</p>`
    ],
    examples: [
      { task: 'Pravidelný štvorboký ihlan má podstavnú hranu $a=10\\,\\text{cm}$ a výšku $v=12\\,\\text{cm}$. Vypočítaj jeho povrch a objem.',
        steps: ['Stenová výška: $v_s=\\sqrt{12^2+5^2}=\\sqrt{169}=13\\,\\text{cm}$.', '$S=a^2+2av_s=100+2\\cdot 10\\cdot 13=360\\,\\text{cm}^2$.',
          '$V=\\frac{1}{3}\\cdot 100\\cdot 12=400\\,\\text{cm}^3$.'] },
      { task: 'Guľu s polomerom $r=10\\,\\text{cm}$ pretne rovina vo vzdialenosti $6\\,\\text{cm}$ od stredu. Aký obsah má rez?',
        steps: ['$\\rho=\\sqrt{10^2-6^2}=\\sqrt{64}=8\\,\\text{cm}$.', '$S=\\pi\\rho^2=64\\pi\\approx 201{,}06\\,\\text{cm}^2$.'] }
    ]
  });

  gen('s4-telesa', () => {
    const t = Math.random();
    const [x, y, z] = pick(TRIPLES.slice(0, 3)), k = rnd(1, 2);
    if (t < 0.3) {
      const a = 2 * x * k, v = y * k, w = z * k, ask = pick(['S', 'V', 'w']);
      const V = a * a * v / 3;
      const res = ask === 'S' ? a * a + 2 * a * w : ask === 'V' ? V : w;
      return {
        answer: Number.isInteger(res) ? res : round(res, 2), tol: Number.isInteger(res) ? 1e-6 : 0.006,
        q: `Pravidelný štvorboký ihlan má podstavnú hranu $a=${a}\\,\\text{cm}$ a výšku $v=${v}\\,\\text{cm}$. Vypočítaj ${ask === 'S' ? 'jeho povrch v $\\text{cm}^2$' : ask === 'V' ? 'jeho objem v $\\text{cm}^3$' : 'stenovú výšku $v_s$ v cm'}.${ask === 'V' && !Number.isInteger(res) ? ' ' + ROUND2 : ''}`,
        solution: `Stenová výška: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{${v * v}+${(a / 2) * (a / 2)}}=${w}\\,\\text{cm}$.
          ${ask === 'S' ? `$S=a^2+2av_s=${a * a}+2\\cdot ${a}\\cdot ${w}=${res}\\,\\text{cm}^2$.` : ask === 'V' ? `$V=\\frac{1}{3}a^2v=\\frac{1}{3}\\cdot ${a * a}\\cdot ${v}=${fTex(a * a * v, 3)}${Number.isInteger(V) ? '' : `\\approx ${dd(V)}`}\\,\\text{cm}^3$.` : ''}`,
        hint: ask === 'V' ? 'Objem ihlana je tretina súčinu obsahu podstavy a výšky.' : 'Výška ihlana, polovica podstavnej hrany a stenová výška tvoria pravouhlý trojuholník.',
        mistakes: ask === 'S' ? [{ value: 2 * a * w, msg: 'To je len plášť ihlana. Povrch zahŕňa aj štvorcovú podstavu.' }]
          : ask === 'V' ? [{ value: a * a * v, msg: 'To je objem hranola s rovnakou podstavou a výškou. Objem ihlana je jeho tretina.' }]
            : [{ value: round(Math.sqrt(v * v + a * a), 2), msg: 'V pravouhlom trojuholníku s výškou ihlana a stenovou výškou je druhou odvesnou polovica podstavnej hrany, nie celá hrana.' }],
        ...(ask === 'S' ? { steps: [
          { q: 'Vypočítaj stenovú výšku $v_s$ v cm.', answer: w },
          { q: 'Vypočítaj povrch ihlana v $\\text{cm}^2$.', answer: res }
        ] } : {})
      };
    }
    if (t < 0.55) {
      const r = x * k, v = y * k, s = z * k, ask = pick(['S', 'V', 'Spl']);
      const res = ask === 'S' ? Math.PI * r * (r + s) : ask === 'V' ? Math.PI * r * r * v / 3 : Math.PI * r * s;
      const coef = ask === 'S' ? String(r * (r + s)) : ask === 'V' ? fTex(r * r * v, 3) : String(r * s);
      return {
        answer: round(res, 2), tol: piTol(res),
        q: `Rotačný kužeľ má polomer podstavy $r=${r}\\,\\text{cm}$ a výšku $v=${v}\\,\\text{cm}$. Vypočítaj ${ask === 'S' ? 'jeho povrch v $\\text{cm}^2$' : ask === 'V' ? 'jeho objem v $\\text{cm}^3$' : 'obsah jeho plášťa v $\\text{cm}^2$'}. ${ROUND2}`,
        solution: `Strana kužeľa: $s=\\sqrt{r^2+v^2}=\\sqrt{${r * r}+${v * v}}=${s}\\,\\text{cm}$.
          ${ask === 'S' ? `$S=\\pi r^2+\\pi rs=\\pi\\cdot ${r}\\cdot(${r}+${s})` : ask === 'V' ? `$V=\\frac{1}{3}\\pi r^2v=\\frac{1}{3}\\pi\\cdot ${r * r}\\cdot ${v}` : `$S_{pl}=\\pi rs=\\pi\\cdot ${r}\\cdot ${s}`}=${coef}\\pi\\approx ${dd(res)}$.`,
        hint: 'Strana kužeľa $s$ je prepona pravouhlého trojuholníka s odvesnami $r$ a $v$.',
        mistakes: ask === 'S' ? [{ value: round(Math.PI * r * s, 2), msg: 'To je len plášť kužeľa. Povrch zahŕňa aj kruhovú podstavu $\\pi r^2$.' }]
          : ask === 'V' ? [{ value: round(Math.PI * r * r * v, 2), msg: 'To je objem valca. Objem kužeľa je jeho tretina.' }]
            : [{ value: round(Math.PI * r * v, 2), msg: 'Do vzorca pre plášť $\\pi rs$ patrí strana kužeľa $s$, nie výška $v$.' }],
        ...(ask !== 'V' ? { steps: [
          { q: 'Vypočítaj stranu kužeľa $s$ v cm.', answer: s },
          { q: `Vypočítaj ${ask === 'S' ? 'povrch' : 'obsah plášťa'} v $\\text{cm}^2$. ${ROUND2}`, answer: round(res, 2), tol: piTol(res) }
        ] } : {})
      };
    }
    if (t < 0.8) {
      if (Math.random() < 0.6) {
        const r = z * k, d = x * k, rho = y * k, askArea = Math.random() < 0.5;
        const res = askArea ? Math.PI * rho * rho : rho;
        return {
          answer: askArea ? round(res, 2) : rho, tol: askArea ? piTol(res) : 1e-6,
          q: `Guľu s polomerom $r=${r}\\,\\text{cm}$ pretne rovina vo vzdialenosti $${d}\\,\\text{cm}$ od stredu gule. Vypočítaj ${askArea ? `obsah rezu v $\\text{cm}^2$. ${ROUND2}` : 'polomer rezu v cm.'}`,
          solution: `Polomer rezu: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{${r * r}-${d * d}}=${rho}\\,\\text{cm}$.${askArea ? ` Obsah rezu: $\\pi\\rho^2=${rho * rho}\\pi\\approx ${dd(res)}\\,\\text{cm}^2$.` : ''}`,
          hint: 'Polomer gule, vzdialenosť roviny od stredu a polomer rezu tvoria pravouhlý trojuholník (polomer gule je prepona).',
          mistakes: askArea ? [{ value: round(Math.PI * r * r, 2), msg: 'Rez nemá polomer gule. Polomer rezu $\\rho$ najprv vypočítaj z pravouhlého trojuholníka.' }]
            : (r - d !== rho ? [{ value: r - d, msg: 'Dĺžky sa neodčítajú priamo. Polomer gule je prepona pravouhlého trojuholníka, použi Pytagorovu vetu.' }] : []),
          ...(askArea ? { steps: [
            { q: 'Vypočítaj polomer rezu $\\rho$ v cm.', answer: rho },
            { q: `Vypočítaj obsah rezu v $\\text{cm}^2$. ${ROUND2}`, answer: round(res, 2), tol: piTol(res) }
          ] } : {})
        };
      }
      const r = rnd(1, 6) * 3;
      return {
        answer: 4 * r * r * r / 3, show: String(4 * r * r * r / 3),
        q: `Povrch gule je $${4 * r * r}\\pi\\,\\text{cm}^2$. Jej objem sa dá zapísať ako $V=k\\pi\\,\\text{cm}^3$. Vypočítaj $k$.`,
        solution: `$4\\pi r^2=${4 * r * r}\\pi \\Rightarrow r^2=${r * r} \\Rightarrow r=${r}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot ${r * r * r}=${4 * r * r * r / 3}\\pi\\,\\text{cm}^3$, teda $k=${4 * r * r * r / 3}$.`,
        hint: 'Z povrchu $S=4\\pi r^2$ vypočítaj polomer a dosaď ho do vzorca pre objem $V=\\frac{4}{3}\\pi r^3$.',
        mistakes: [{ value: r * r * r, msg: 'Objem gule je $\\frac{4}{3}\\pi r^3$, nezabudni na koeficient $\\frac{4}{3}$.' }],
        steps: [
          { q: 'Vypočítaj polomer gule v cm.', answer: r },
          { q: 'Vypočítaj $k$.', answer: 4 * r * r * r / 3 }
        ]
      };
    }
    const a = rnd(2, 10), v = rnd(3, 15), Sp = Math.sqrt(3) / 4 * a * a, askV = Math.random() < 0.5;
    const res = askV ? Sp * v : 2 * Sp + 3 * a * v;
    return {
      answer: round(res, 2), tol: 0.006,
      q: `Pravidelný trojboký hranol má podstavnú hranu $a=${a}\\,\\text{cm}$ a výšku $v=${v}\\,\\text{cm}$. Vypočítaj jeho ${askV ? 'objem v $\\text{cm}^3$' : 'povrch v $\\text{cm}^2$'}. ${ROUND2}`,
      solution: `Podstava je rovnostranný trojuholník: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot ${a * a}\\approx ${dd(Sp, 3)}\\,\\text{cm}^2$.
        ${askV ? `$V=S_p\\cdot v\\approx ${dd(res)}\\,\\text{cm}^3$.` : `Plášť tvoria tri obdĺžniky $${a}\\times ${v}$: $S=2S_p+3av\\approx ${dd(2 * Sp, 3)}+${3 * a * v}\\approx ${dd(res)}\\,\\text{cm}^2$.`}`,
      hint: 'Obsah rovnostranného trojuholníka so stranou $a$ je $\\frac{\\sqrt3}{4}a^2$. Plášť hranola tvoria tri zhodné obdĺžniky.',
      mistakes: askV ? [{ value: a * a * v, msg: 'Podstava je rovnostranný trojuholník, nie štvorec: jej obsah je $\\frac{\\sqrt3}{4}a^2$.' }]
        : [{ value: round(Sp + 3 * a * v, 2), msg: 'Hranol má dve podstavy, hornú aj dolnú. Obsah podstavy započítaj dvakrát.' }],
      steps: [
        { q: `Vypočítaj obsah podstavy $S_p$ v $\\text{cm}^2$. ${ROUND2}`, answer: round(Sp, 2), tol: 0.006 },
        { q: `Vypočítaj ${askV ? 'objem hranola v $\\text{cm}^3$' : 'povrch hranola v $\\text{cm}^2$'}. ${ROUND2}`, answer: round(res, 2), tol: 0.006 }
      ]
    };
  });

  fig('s4-zrezany', {
    draw: () => `<svg viewBox="0 0 340 250" role="img" aria-label="Zrezaný kužeľ">
      <path class="f-fill2" d="M50 210 L110 60 A60 11 0 0 0 230 60 L290 210 A120 22 0 0 1 50 210 Z"/>
      <ellipse class="f-fill2 f-outline2" cx="170" cy="60" rx="60" ry="11"/>
      <path class="f-dash" fill="none" d="M50 210 A120 22 0 0 1 290 210"/>
      <path class="f-line" d="M50 210 A120 22 0 0 0 290 210 M50 210 L110 60 M290 210 L230 60"/>
      <line class="f-dash" x1="170" y1="60" x2="170" y2="210"/>
      <line class="f-accent" x1="170" y1="210" x2="290" y2="210"/>
      <line class="f-ok" x1="170" y1="60" x2="230" y2="60"/>
      <circle class="f-solid" cx="170" cy="210" r="3"/><circle class="f-solid" cx="170" cy="60" r="3"/>
      <text class="f-math c-accent" x="230" y="204">R</text>
      <text class="f-math c-ok" x="196" y="54">r</text>
      <text class="f-math" x="176" y="140">v</text>
      <text class="f-math" x="270" y="132">s</text></svg>`
  });

  lesson({
    id: 's4-povrch-objem', order: 250, topics: ['stereometria', 'prakticke'], title: 'Povrch a objem zložitejších telies',
    summary: 'Zrezaný kužeľ a ihlan, zložené telesá, podobnosť telies a praktické úlohy.',
    theory: [
      `<p><strong>Zrezaný kužeľ</strong> s polomermi podstáv $R$, $r$, výškou $v$ a stranou $s$: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$, plášť $S_{pl}=\\pi s(R+r)$,
       povrch $S=\\pi R^2+\\pi r^2+\\pi s(R+r)$. Stranu nájdeme z lichobežníkového osového rezu: $s^2=v^2+(R-r)^2$.</p>`,
      { fig: 's4-zrezany', caption: 'Zrezaný kužeľ vznikne odrezaním vrchnej časti kužeľa rovinou rovnobežnou s podstavou. Výška $v$, rozdiel polomerov $R-r$ a strana $s$ tvoria pravouhlý trojuholník.' },
      `<p><strong>Zrezaný ihlan</strong> s obsahmi podstáv $S_1$, $S_2$ a výškou $v$ má objem $V=\\frac{v}{3}\\left(S_1+\\sqrt{S_1S_2}+S_2\\right)$;
       pre pravidelný štvorboký s hranami $a_1$, $a_2$ je $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.
       <strong>Zložené teleso</strong> rozdelíme na známe telesá a objemy sčítame (pri dutinách odčítame). Pri povrchu pozor: styčné plochy do povrchu nepatria.</p>`,
      `<p><strong>Podobné telesá</strong> s koeficientom podobnosti $k$ majú povrchy v pomere $k^2$ a objemy v pomere $k^3$. Ak zdvojnásobíme všetky rozmery,
       povrch sa zväčší 4-krát a objem 8-krát. Pri pretavovaní sa zachováva objem.</p>`
    ],
    examples: [
      { task: 'Vedro má tvar zrezaného kužeľa s polomermi $R=15\\,\\text{cm}$, $r=10\\,\\text{cm}$ a výškou $v=30\\,\\text{cm}$. Koľko litrov sa doň zmestí?',
        steps: ['$V=\\frac{\\pi\\cdot 30}{3}(225+150+100)=10\\pi\\cdot 475=4750\\pi\\,\\text{cm}^3$.', '$V\\approx 14\\,923\\,\\text{cm}^3\\approx 14{,}9\\,\\ell$.'] },
      { task: 'Silo má tvar valca s polomerom $3\\,\\text{m}$ a výškou $8\\,\\text{m}$, na ktorom je polguľa s rovnakým polomerom. Vypočítaj objem sila.',
        steps: ['Valec: $\\pi\\cdot 9\\cdot 8=72\\pi$.', 'Polguľa: $\\frac{1}{2}\\cdot\\frac{4}{3}\\pi\\cdot 27=18\\pi$.', '<strong>$V=90\\pi\\approx 282{,}74\\,\\text{m}^3$</strong>'] }
    ]
  });

  gen('s4-povrch-objem', () => {
    const t = Math.random();
    if (t < 0.3) {
      const [x, y, z] = pick(TRIPLES.slice(0, 3)), r = rnd(1, 6), R = r + x, v = y, s = z, askV = Math.random() < 0.5;
      const coef = askV ? v * (R * R + R * r + r * r) / 3 : R * R + r * r + s * (R + r);
      const res = coef * Math.PI;
      return {
        answer: round(res, 2), tol: piTol(res),
        q: `Zrezaný rotačný kužeľ má polomery podstáv $R=${R}\\,\\text{cm}$, $r=${r}\\,\\text{cm}$ a výšku $v=${v}\\,\\text{cm}$. Vypočítaj jeho ${askV ? 'objem v $\\text{cm}^3$' : 'povrch v $\\text{cm}^2$'}. ${ROUND2}`,
        solution: askV
          ? `$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot ${v}}{3}(${R * R}+${R * r}+${r * r})=${fTex(v * (R * R + R * r + r * r), 3)}\\pi\\approx ${dd(res)}\\,\\text{cm}^3$.`
          : `Strana: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{${v * v}+${x * x}}=${s}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi(${R * R}+${r * r})+\\pi\\cdot ${s}\\cdot ${R + r}=${coef}\\pi\\approx ${dd(res)}\\,\\text{cm}^2$.`,
        hint: askV ? 'Použi $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.' : 'Najprv vypočítaj stranu $s$ z pravouhlého trojuholníka s odvesnami $v$ a $R-r$. Povrch tvoria dve podstavy a plášť $\\pi s(R+r)$.',
        mistakes: askV
          ? [{ value: round(3 * res, 2), msg: 'Vo vzorci pre objem zrezaného kužeľa je výška delená tromi: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.' },
            { value: round(Math.PI * v * (R * R + r * r) / 3, 2), msg: 'Nezabudni na prostredný člen $Rr$ v zátvorke: $R^2+Rr+r^2$.' }]
          : [{ value: round(Math.PI * s * (R + r), 2), msg: 'To je len plášť. Povrch zahŕňa aj obe kruhové podstavy.' }],
        steps: askV
          ? [{ q: 'Vypočítaj súčet $R^2+Rr+r^2$.', answer: R * R + R * r + r * r },
            { q: `Vypočítaj objem v $\\text{cm}^3$. ${ROUND2}`, answer: round(res, 2), tol: piTol(res) }]
          : [{ q: 'Vypočítaj stranu $s$ v cm.', answer: s },
            { q: `Vypočítaj povrch v $\\text{cm}^2$. ${ROUND2}`, answer: round(res, 2), tol: piTol(res) }]
      };
    }
    if (t < 0.5) {
      const a2 = rnd(2, 8), a1 = a2 + rnd(2, 6), v = rnd(3, 12);
      const V = v * (a1 * a1 + a1 * a2 + a2 * a2) / 3;
      return {
        answer: Number.isInteger(V) ? V : round(V, 2), tol: Number.isInteger(V) ? 1e-6 : 0.006,
        q: `Pravidelný štvorboký zrezaný ihlan má podstavné hrany $a_1=${a1}\\,\\text{cm}$, $a_2=${a2}\\,\\text{cm}$ a výšku $v=${v}\\,\\text{cm}$. Vypočítaj jeho objem v $\\text{cm}^3$.${Number.isInteger(V) ? '' : ' ' + ROUND2}`,
        solution: `$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{${v}}{3}(${a1 * a1}+${a1 * a2}+${a2 * a2})=${fTex(v * (a1 * a1 + a1 * a2 + a2 * a2), 3)}${Number.isInteger(V) ? '' : `\\approx ${dd(V)}`}\\,\\text{cm}^3$.`,
        hint: 'Pre zrezaný ihlan platí $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; pri štvorcových podstavách je $\\sqrt{S_1S_2}=a_1a_2$.',
        mistakes: [
          { value: 3 * (Number.isInteger(V) ? V : round(V, 2)), msg: 'Vo vzorci je výška delená tromi: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.' },
          { value: round(v * (a1 * a1 + a2 * a2) / 3, 2), msg: 'Nezabudni na prostredný člen $a_1a_2$, teda $\\sqrt{S_1S_2}$.' }
        ].filter((m) => Math.abs(m.value - V) > 0.006),
        steps: [
          { q: 'Vypočítaj súčet $a_1^2+a_1a_2+a_2^2$.', answer: a1 * a1 + a1 * a2 + a2 * a2 },
          { q: `Vypočítaj objem v $\\text{cm}^3$.${Number.isInteger(V) ? '' : ' ' + ROUND2}`, answer: Number.isInteger(V) ? V : round(V, 2), tol: Number.isInteger(V) ? 1e-6 : 0.006 }
        ]
      };
    }
    if (t < 0.75) {
      const r = rnd(1, 6), v = rnd(3, 12), kind = rnd(0, 2);
      if (kind === 0) {
        const coef = r * r * v + 2 * r * r * r / 3, res = coef * Math.PI;
        return {
          answer: round(res, 2), tol: piTol(res),
          q: `Teleso tvorí valec s polomerom $${r}\\,\\text{m}$ a výškou $${v}\\,\\text{m}$, na ktorého hornej podstave je polguľa s rovnakým polomerom. Vypočítaj objem telesa v $\\text{m}^3$. ${ROUND2}`,
          solution: `Valec: $\\pi r^2v=${r * r * v}\\pi$. Polguľa: $\\frac{2}{3}\\pi r^3=${fTex(2 * r * r * r, 3)}\\pi$. Spolu $V=${fTex(3 * r * r * v + 2 * r * r * r, 3)}\\pi\\approx ${dd(res)}\\,\\text{m}^3$.`,
          hint: 'Objem polgule je polovica objemu gule, teda $\\frac{2}{3}\\pi r^3$. Objemy častí sčítaj.',
          mistakes: [{ value: round((r * r * v + 4 * r * r * r / 3) * Math.PI, 2), msg: 'Na valci je len polguľa, jej objem je polovica objemu gule.' }],
          steps: [
            { q: `Vypočítaj objem valca v $\\text{m}^3$. ${ROUND2}`, answer: round(r * r * v * Math.PI, 2), tol: piTol(r * r * v * Math.PI) },
            { q: `Vypočítaj objem polgule v $\\text{m}^3$. ${ROUND2}`, answer: round(2 * r * r * r / 3 * Math.PI, 2), tol: piTol(2 * r * r * r / 3 * Math.PI) },
            { q: `Vypočítaj objem celého telesa v $\\text{m}^3$. ${ROUND2}`, answer: round(res, 2), tol: piTol(res) }
          ]
        };
      }
      if (kind === 1) {
        const w = rnd(2, 9), coef = r * r * v + r * r * w / 3, res = coef * Math.PI;
        return {
          answer: round(res, 2), tol: piTol(res),
          q: `Teleso tvorí valec s polomerom $${r}\\,\\text{dm}$ a výškou $${v}\\,\\text{dm}$, na ktorý je nasadený kužeľ s rovnakou podstavou a výškou $${w}\\,\\text{dm}$. Vypočítaj objem telesa v $\\text{dm}^3$. ${ROUND2}`,
          solution: `Valec: $\\pi r^2v=${r * r * v}\\pi$. Kužeľ: $\\frac{1}{3}\\pi r^2w=${fTex(r * r * w, 3)}\\pi$. Spolu $V=${fTex(3 * r * r * v + r * r * w, 3)}\\pi\\approx ${dd(res)}\\,\\text{dm}^3$.`,
          hint: 'Objem kužeľa je tretina objemu valca s rovnakou podstavou a výškou. Objemy častí sčítaj.',
          mistakes: [{ value: round((r * r * v + r * r * w) * Math.PI, 2), msg: 'Objem kužeľa nie je $\\pi r^2 w$, ale len jeho tretina.' }],
          steps: [
            { q: `Vypočítaj objem valca v $\\text{dm}^3$. ${ROUND2}`, answer: round(r * r * v * Math.PI, 2), tol: piTol(r * r * v * Math.PI) },
            { q: `Vypočítaj objem kužeľa v $\\text{dm}^3$. ${ROUND2}`, answer: round(r * r * w / 3 * Math.PI, 2), tol: piTol(r * r * w / 3 * Math.PI) },
            { q: `Vypočítaj objem celého telesa v $\\text{dm}^3$. ${ROUND2}`, answer: round(res, 2), tol: piTol(res) }
          ]
        };
      }
      const R = r + rnd(1, 3), l = v * 10, coef = (R * R - r * r) * l, res = coef * Math.PI;
      return {
        answer: round(res, 2), tol: piTol(res),
        q: `Rúra má tvar dutého valca s vonkajším polomerom $${R}\\,\\text{cm}$, vnútorným polomerom $${r}\\,\\text{cm}$ a dĺžkou $${l}\\,\\text{cm}$. Vypočítaj objem materiálu v $\\text{cm}^3$. ${ROUND2}`,
        solution: `Od objemu plného valca odčítame dutinu: $V=\\pi(R^2-r^2)\\cdot l=\\pi(${R * R}-${r * r})\\cdot ${l}=${coef}\\pi\\approx ${dd(res)}\\,\\text{cm}^3$.`,
        hint: 'Objem materiálu je rozdiel objemov dvoch valcov s rovnakou výškou.',
        mistakes: [{ value: round((R - r) * (R - r) * l * Math.PI, 2), msg: 'Pozor, $R^2-r^2$ nie je to isté ako $(R-r)^2$. Odčítaj objemy dvoch valcov.' }],
        steps: [
          { q: `Vypočítaj objem plného valca s polomerom $${R}\\,\\text{cm}$ v $\\text{cm}^3$. ${ROUND2}`, answer: round(R * R * l * Math.PI, 2), tol: piTol(R * R * l * Math.PI) },
          { q: `Vypočítaj objem dutiny s polomerom $${r}\\,\\text{cm}$ v $\\text{cm}^3$. ${ROUND2}`, answer: round(r * r * l * Math.PI, 2), tol: piTol(r * r * l * Math.PI) },
          { q: `Vypočítaj objem materiálu v $\\text{cm}^3$. ${ROUND2}`, answer: round(res, 2), tol: piTol(res) }
        ]
      };
    }
    if (Math.random() < 0.5) {
      const r = rnd(1, 3), k = rnd(2, 5), R = k * r;
      return {
        answer: k * k * k,
        q: `Olovenú guľu s polomerom $${R}\\,\\text{cm}$ pretavili na rovnaké guľôčky s polomerom $${r === 1 ? '1' : r}\\,\\text{cm}$. Koľko guľôčok vzniklo (bez strát materiálu)?`,
        solution: `Objem sa zachová: $n\\cdot\\frac{4}{3}\\pi\\cdot ${r}^3=\\frac{4}{3}\\pi\\cdot ${R}^3$, teda $n=\\left(\\frac{${R}}{${r}}\\right)^3=${k}^3=${k * k * k}$.`,
        hint: 'Pri pretavení sa zachováva objem. Pomer objemov podobných telies je tretia mocnina pomeru dĺžok.',
        mistakes: [
          { value: k, msg: 'To je pomer polomerov. Pri pretavení sa zachováva objem a objem rastie s treťou mocninou polomeru.' },
          { value: k * k, msg: 'Druhá mocnina pomeru dĺžok platí pre povrch. Zachováva sa však objem, a ten závisí od tretej mocniny.' }
        ]
      };
    }
    const p = pick([10, 20, 25, 50, 30]), surf = Math.random() < 0.4;
    const f = 1 + p / 100, res = ((surf ? f * f : f * f * f) - 1) * 100;
    return {
      answer: round(res, 2), tol: 0.006,
      q: `Všetky hrany kocky zväčšíme o $${p}\\,\\%$. O koľko percent sa zväčší jej ${surf ? 'povrch' : 'objem'}? ${ROUND2}`,
      solution: `Koeficient podobnosti je $k=${dc(f)}$. ${surf ? 'Povrch' : 'Objem'} sa zmení $k^{${surf ? 2 : 3}}=${dd(surf ? f * f : f * f * f, 4)}$-krát, teda sa zväčší o $${dd(res)}\\,\\%$.`,
      hint: `Pri podobnosti s koeficientom $k$ sa ${surf ? 'povrch mení $k^2$-krát' : 'objem mení $k^3$-krát'}. Výsledný násobok preveď na percentá.`,
      mistakes: [
        { value: p, msg: `Hrany sa zväčšia o $${p}\\,\\%$, ${surf ? 'povrch' : 'objem'} však rastie rýchlejšie: koeficient podobnosti treba umocniť.` },
        { value: (surf ? 2 : 3) * p, msg: `Percentá sa nesčitujú. Koeficient $k=${dc(f)}$ umocni na ${surf ? 'druhú' : 'tretiu'} a až potom preveď na percentá.` }
      ],
      steps: [
        { q: `Koeficient podobnosti je $k=${dc(f)}$. Koľkokrát sa zväčší ${surf ? 'povrch' : 'objem'}? Zadaj číslo na 4 desatinné miesta.`, answer: round(surf ? f * f : f * f * f, 4), tol: 0.00006 },
        { q: `O koľko percent sa ${surf ? 'povrch' : 'objem'} zväčší? ${ROUND2}`, answer: round(res, 2), tol: 0.006 }
      ]
    };
  });

  /* ======================= D. ŠTATISTIKA A PRAVDEPODOBNOSŤ ======================= */

  // stĺpcový graf početností (použitý v obrázku aj v zadaniach)
  const barChart = (counts, labels, xName, aria) => {
    const M = Math.max(...counts, 1), top = Math.ceil(M / 2) * 2, H = 160, W = 300, x0 = 44, y0 = 186;
    const bw = W / counts.length;
    let s = `<svg viewBox="0 0 360 220" role="img" aria-label="${aria}">`;
    for (let v = 0; v <= top; v += top > 10 ? 4 : 2) {
      const y = y0 - v / top * H;
      s += `<line class="f-grid" x1="${x0}" y1="${n1(y)}" x2="${x0 + W}" y2="${n1(y)}"/><text class="f-small" x="${x0 - 6}" y="${n1(y + 4)}" text-anchor="end">${v}</text>`;
    }
    counts.forEach((c, i) => {
      const h = c / top * H, x = x0 + i * bw + bw * 0.18;
      s += `<rect class="f-fill f-outline" x="${n1(x)}" y="${n1(y0 - h)}" width="${n1(bw * 0.64)}" height="${n1(h)}"/>
        <text class="f-small" x="${n1(x + bw * 0.32)}" y="${y0 + 16}" text-anchor="middle">${labels[i]}</text>`;
    });
    return s + `<line class="f-axis" x1="${x0}" y1="${y0}" x2="${x0 + W}" y2="${y0}"/><line class="f-axis" x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0 - H - 8}"/>
      <text class="f-small" x="${x0 + W}" y="${y0 + 32}" text-anchor="end">${xName}</text><text class="f-small" x="${x0 - 30}" y="14">počet</text></svg>`;
  };
  const freqTable = (head, labels, counts) => `<table class="tbl tbl-auto"><tr><th>${head}</th>${labels.map((l) => `<th>${l}</th>`).join('')}</tr>
    <tr><td>počet</td>${counts.map((c) => `<td>${c}</td>`).join('')}</tr></table>`;

  fig('s4-stlpcovy', { draw: () => barChart([6, 9, 7, 4, 2], [1, 2, 3, 4, 5], 'známka', 'Stĺpcový graf známok v triede') });

  lesson({
    id: 's4-statisticky-subor', order: 310, topics: ['statistika', 'prakticke'], title: 'Štatistický súbor, znaky, tabuľky a grafy',
    summary: 'Súbor a znak, absolútna a relatívna početnosť, tabuľka rozdelenia početností, grafy a ich čítanie.',
    theory: [
      `<p><strong>Štatistický súbor</strong> je množina skúmaných objektov (štatistických jednotiek), ich počet $n$ je <strong>rozsah súboru</strong>.
       Sledovaná vlastnosť je <strong>štatistický znak</strong>: <strong>kvalitatívny</strong> (slovný — farba, značka, odbor) alebo <strong>kvantitatívny</strong> (číselný).
       Kvantitatívny znak je <strong>diskrétny</strong>, ak nadobúda len izolované hodnoty (počet súrodencov), alebo <strong>spojitý</strong>, ak môže nadobudnúť ľubovoľnú hodnotu z intervalu (výška, čas).</p>`,
      `<p><strong>Absolútna početnosť</strong> $n_i$ hodnoty je počet jednotiek s touto hodnotou, <strong>relatívna početnosť</strong> je $f_i=\\frac{n_i}{n}$ (často v percentách).
       Súčet všetkých $n_i$ je $n$, súčet $f_i$ je $1$. Údaje zapisujeme do <strong>tabuľky rozdelenia početností</strong>.</p>`,
      { fig: 's4-stlpcovy', caption: 'Stĺpcový graf známok v triede s $28$ žiakmi. Napríklad známku $2$ má $9$ žiakov, relatívna početnosť je $\\frac{9}{28}\\approx 32{,}1\\,\\%$.' },
      `<p><strong>Grafy:</strong> stĺpcový (početnosti hodnôt), kruhový (výseč pre hodnotu má stredový uhol $f_i\\cdot 360^\\circ$), histogram (pre spojitý znak rozdelený do intervalov)
       a spojnicový (vývoj v čase). Pri <strong>interpretácii</strong> pozor na os, ktorá nezačína nulou — malé rozdiely potom vyzerajú obrovské.</p>`
    ],
    examples: [
      { task: 'V tabuľke je spôsob dopravy do školy: autobus 12, auto 5, bicykel 3, pešo 10. Akú časť kruhového diagramu (stredový uhol) zaberá autobus?',
        steps: ['$n=12+5+3+10=30$.', '$f=\\frac{12}{30}=0{,}4=40\\,\\%$.', 'Stredový uhol: $0{,}4\\cdot 360^\\circ=144^\\circ$.'] },
      { task: 'Podľa stĺpcového grafu vyššie vypočítaj priemernú známku triedy.',
        steps: ['$n=6+9+7+4+2=28$.', 'Súčet známok: $1\\cdot 6+2\\cdot 9+3\\cdot 7+4\\cdot 4+5\\cdot 2=6+18+21+16+10=71$.',
          '$\\bar{x}=\\frac{71}{28}\\approx 2{,}54$'] }
    ]
  });

  const ZNAKY = [
    ['farba očí žiaka', 0], ['obľúbený šport', 0], ['značka mobilného telefónu', 0], ['krajina, z ktorej prišiel turista', 0], ['druh dopravy do práce', 0],
    ['počet súrodencov', 1], ['počet áut v domácnosti', 1], ['počet vymeškaných hodín za polrok', 1], ['počet gólov v zápase', 1], ['počet strán knihy', 1],
    ['výška žiaka', 2], ['hmotnosť balíka', 2], ['čas behu na 100 m', 2], ['teplota vzduchu na poludnie', 2], ['spotreba auta na 100 km', 2]
  ];
  const ZNAK_OPT = ['kvalitatívny', 'kvantitatívny diskrétny', 'kvantitatívny spojitý'];
  const ZNAK_WHY = ['Hodnoty sú slová (kategórie), nie čísla.', 'Hodnoty sú celé čísla získané počítaním, medzi dvoma susednými nie je iná možná hodnota.',
    'Hodnoty získavame meraním a môžu byť ľubovoľným číslom z nejakého intervalu.'];
  const DOPRAVA = ['autobus', 'auto', 'bicykel', 'pešo', 'vlak'];

  gen('s4-statisticky-subor', () => {
    const t = Math.random();
    if (t < 0.22) {
      const [txt, k] = pick(ZNAKY);
      return {
        type: 'choice', options: [...ZNAK_OPT], answer: ZNAK_OPT[k],
        q: `Aký je štatistický znak „${txt}“?`,
        solution: `${ZNAK_WHY[k]} Znak je <strong>${ZNAK_OPT[k]}</strong>.`,
        hint: 'Najprv rozhodni, či sú hodnoty slová alebo čísla. Pri číslach rozlíš počítanie (diskrétny) a meranie (spojitý).',
        choiceHints: Object.fromEntries(ZNAK_OPT.filter((o, i) => i !== k).map((o) => [o,
          k === 0 ? 'Hodnoty tohto znaku sú slová (kategórie), nie čísla.'
            : o === 'kvalitatívny' ? 'Hodnoty tohto znaku sú čísla, takže znak je kvantitatívny.'
              : k === 1 ? 'Hodnoty získavame počítaním, sú to len celé čísla. Medzi dvoma susednými hodnotami nie je iná možná hodnota.'
                : 'Hodnoty získavame meraním, môžu byť ľubovoľným číslom z nejakého intervalu (aj desatinným).']))
      };
    }
    if (t < 0.48) {
      const cats = shuffle(DOPRAVA).slice(0, rnd(4, 5)), counts = cats.map(() => rnd(2, 15));
      const n = counts.reduce((a, b) => a + b, 0), i = rnd(0, cats.length - 1), f = counts[i] / n;
      const angle = Math.random() < 0.45;
      const res = angle ? f * 360 : f * 100;
      return {
        answer: round(res, 1), tol: 0.051,
        q: `Žiaci odpovedali, ako chodia do školy:${freqTable('doprava', cats, counts)}${angle
          ? `Aký stredový uhol (v stupňoch) bude mať výseč „${cats[i]}“ v kruhovom diagrame?` : `Koľko percent žiakov odpovedalo „${cats[i]}“?`} Výsledok zaokrúhli na desatiny.`,
        solution: `Rozsah súboru $n=${counts.join('+')}=${n}$. Relatívna početnosť: $f=\\frac{${counts[i]}}{${n}}\\approx ${dc(f)}$.
          ${angle ? `Stredový uhol: $f\\cdot 360^\\circ\\approx ${dd(res, 1)}^\\circ$.` : `V percentách $${dd(res, 1)}\\,\\%$.`}`,
        hint: angle ? 'Výseč má stredový uhol $\\frac{n_i}{n}\\cdot 360^\\circ$.' : 'Relatívna početnosť je $\\frac{n_i}{n}$, v percentách ju vynásob číslom 100.',
        mistakes: angle
          ? [{ value: round(f * 100, 1), msg: 'To sú percentá. Stredový uhol je rovnaká časť z celého uhla $360^\\circ$, nie zo $100$.' }]
          : [{ value: round(f * 360, 1), msg: 'To je stredový uhol výseče v stupňoch. Percentá sú časť zo $100$, nie z $360$.' }],
        steps: [
          { q: 'Aký je rozsah súboru $n$ (počet všetkých žiakov)?', answer: n },
          { q: `${angle ? 'Aký je stredový uhol výseče v stupňoch?' : 'Koľko percent to je?'} Výsledok zaokrúhli na desatiny.`, answer: round(res, 1), tol: 0.051 }
        ]
      };
    }
    let counts;
    do { counts = [1, 2, 3, 4, 5].map((g) => rnd(0, g <= 3 ? 10 : 6)); } while (counts.reduce((a, b) => a + b, 0) < 8);
    const n = counts.reduce((a, b) => a + b, 0), sum = counts.reduce((s, c, i) => s + c * (i + 1), 0);
    const chart = Math.random() < 0.5;
    const data = chart ? barChart(counts, [1, 2, 3, 4, 5], 'známka', 'Stĺpcový graf známok') : freqTable('známka', [1, 2, 3, 4, 5], counts);
    if (t < 0.75) {
      return {
        answer: round(sum / n, 2), tol: 0.006,
        q: `${chart ? 'Graf' : 'Tabuľka'} zobrazuje známky z písomky v triede:${data}Vypočítaj priemernú známku. ${ROUND2}`,
        solution: `$n=${counts.join('+')}=${n}$. Vážený aritmetický priemer: $\\bar{x}=\\dfrac{${counts.map((c, i) => `${i + 1}\\cdot ${c}`).join('+')}}{${n}}=\\dfrac{${sum}}{${n}}\\approx ${dd(sum / n)}$.`,
        hint: 'Každú známku vynásob počtom žiakov, ktorí ju dostali, výsledky sčítaj a vydeľ počtom všetkých žiakov.',
        mistakes: [
          ...(Math.abs(round(sum / n, 2) - 3) > 0.006 ? [{ value: 3, msg: 'Priemer z tabuľky početností je vážený: každú známku vynásob počtom žiakov, ktorí ju dostali.' }] : []),
          { value: round(sum / 5, 2), msg: 'Súčet známok treba deliť počtom žiakov $n$, nie počtom rôznych známok.' }
        ],
        steps: [
          { q: 'Koľko žiakov písalo písomku?', answer: n },
          { q: 'Aký je súčet známok všetkých žiakov?', answer: sum },
          { q: `Vypočítaj priemernú známku. ${ROUND2}`, answer: round(sum / n, 2), tol: 0.006 }
        ]
      };
    }
    const list = []; counts.forEach((c, i) => { for (let j = 0; j < c; j++) list.push(i + 1); });
    const med = n % 2 ? list[(n - 1) / 2] : (list[n / 2 - 1] + list[n / 2]) / 2;
    return {
      answer: med,
      q: `${chart ? 'Graf' : 'Tabuľka'} zobrazuje známky z písomky v triede:${data}Aký je medián známok?`,
      solution: `$n=${n}$ je ${n % 2 ? `nepárne, medián je ${(n + 1) / 2}. hodnota` : `párne, medián je priemer ${n / 2}. a ${n / 2 + 1}. hodnoty`} v usporiadanom súbore.
        Kumulované počty: ${counts.map((c, i) => `do známky ${i + 1} je to ${counts.slice(0, i + 1).reduce((a, b) => a + b, 0)}`).join(', ')}. Medián je $${dc(med)}$.`,
      hint: 'Predstav si všetky známky zoradené od najlepšej. Medián je prostredná hodnota (pri párnom počte priemer dvoch prostredných).',
      mistakes: [
        ...(med !== 3 ? [{ value: 3, msg: 'Medián nie je prostredná zo známok 1 až 5. Je to prostredná hodnota, keď známky všetkých žiakov zoradíš za sebou.' }] : []),
        ...(Math.abs(round(sum / n, 2) - med) > 1e-6 && Math.abs(round(sum / n, 2) - 3) > 1e-6 ? [{ value: round(sum / n, 2), msg: 'To je priemer. Medián je prostredná hodnota usporiadaného súboru.' }] : [])
      ],
      steps: [
        { q: 'Koľko žiakov písalo písomku?', answer: n },
        { q: `${n % 2 ? `Medián je ${(n + 1) / 2}. hodnota` : `Medián je priemer ${n / 2}. a ${n / 2 + 1}. hodnoty`} usporiadaného súboru. Aký je medián?`, answer: med }
      ]
    };
  });

  fig('s4-krabica', {
    draw: () => {
      const X = (v) => 30 + v * 22.5;
      let s = '<svg viewBox="0 0 420 150" role="img" aria-label="Krabicový graf">';
      for (let v = 0; v <= 16; v += 2) s += `<line class="f-thin" x1="${X(v)}" y1="112" x2="${X(v)}" y2="118"/><text class="f-small" x="${X(v)}" y="134" text-anchor="middle">${v}</text>`;
      s += `<line class="f-axis" x1="${X(0)}" y1="112" x2="${X(16)}" y2="112"/>
        <line class="f-line" x1="${X(2)}" y1="62" x2="${X(5)}" y2="62"/><line class="f-line" x1="${X(9)}" y1="62" x2="${X(14)}" y2="62"/>
        <line class="f-line" x1="${X(2)}" y1="50" x2="${X(2)}" y2="74"/><line class="f-line" x1="${X(14)}" y1="50" x2="${X(14)}" y2="74"/>
        <rect class="f-fill f-outline" x="${X(5)}" y="40" width="${X(9) - X(5)}" height="44"/>
        <line class="f-accent" x1="${X(7)}" y1="40" x2="${X(7)}" y2="84"/>
        <text class="f-small" x="${X(2)}" y="34" text-anchor="middle">min</text><text class="f-small" x="${X(5)}" y="34" text-anchor="middle">Q₁</text>
        <text class="f-small c-accent" x="${X(7)}" y="34" text-anchor="middle">medián</text><text class="f-small" x="${X(9)}" y="34" text-anchor="middle">Q₃</text>
        <text class="f-small" x="${X(14)}" y="34" text-anchor="middle">max</text>`;
      return s + '</svg>';
    }
  });

  lesson({
    id: 's4-charakteristiky', order: 320, topics: ['statistika'], title: 'Priemer, medián, modus a rozptyl',
    summary: 'Charakteristiky polohy a variability: priemer, medián, modus, kvartily, rozptyl a smerodajná odchýlka.',
    theory: [
      `<p><strong>Charakteristiky polohy:</strong> aritmetický priemer $\\bar{x}=\\frac{x_1+x_2+\\dots+x_n}{n}$ (z tabuľky vážený: $\\bar{x}=\\frac{\\sum n_ix_i}{n}$),
       <strong>medián</strong> — prostredná hodnota usporiadaného súboru (pri párnom $n$ priemer dvoch prostredných) a <strong>modus</strong> — najčastejšia hodnota.
       Medián na rozdiel od priemeru neovplyvnia extrémne hodnoty (napr. jeden veľmi vysoký plat).</p>`,
      `<p><strong>Charakteristiky variability:</strong> variačné rozpätie $R=x_{\\max}-x_{\\min}$, <strong>rozptyl</strong> $s^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2$
       (priemer štvorcov odchýlok od priemeru, tiež $s^2=\\overline{x^2}-\\bar{x}^2$) a <strong>smerodajná odchýlka</strong> $s=\\sqrt{s^2}$, ktorá má rovnakú jednotku ako údaje.</p>`,
      `<p><strong>Kvartily:</strong> dolný kvartil $Q_1$ je medián dolnej polovice údajov, horný kvartil $Q_3$ medián hornej polovice.
       Medzi $Q_1$ a $Q_3$ leží prostredná polovica údajov, ich rozdiel $Q_3-Q_1$ je medzikvartilové rozpätie. Päť čísel (min, $Q_1$, medián, $Q_3$, max) zobrazuje krabicový graf.</p>`,
      { fig: 's4-krabica', caption: 'Krabicový graf súboru $2, 4, 5, 5, 6, 7, 7, 8, 9, 10, 14$: minimum $2$, $Q_1=5$, medián $7$, $Q_3=9$, maximum $14$.' }
    ],
    examples: [
      { task: 'Vypočítaj priemer, medián a modus súboru $3, 8, 5, 3, 6, 9, 3, 7$.',
        steps: ['Usporiadame: $3, 3, 3, 5, 6, 7, 8, 9$; $n=8$.', '$\\bar{x}=\\frac{44}{8}=5{,}5$.',
          'Medián $=\\frac{5+6}{2}=5{,}5$, modus $=3$ (vyskytuje sa trikrát).'] },
      { task: 'Vypočítaj rozptyl a smerodajnú odchýlku súboru $4, 6, 7, 9, 9$.',
        steps: ['$\\bar{x}=\\frac{35}{5}=7$. Odchýlky: $-3, -1, 0, 2, 2$.', '$s^2=\\frac{9+1+0+4+4}{5}=\\frac{18}{5}=3{,}6$.', '$s=\\sqrt{3{,}6}\\approx 1{,}90$.'] }
    ]
  });

  gen('s4-charakteristiky', () => {
    const t = Math.random();
    if (t < 0.27) {
      const n = rnd(7, 10), data = Array.from({ length: n }, () => rnd(1, 30)), s = [...data].sort((x, y) => x - y);
      const askRange = Math.random() < 0.3;
      const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
      return {
        answer: askRange ? s[n - 1] - s[0] : med,
        q: `Daný je súbor údajov: $${data.join(';\\ ')}$. Urči jeho ${askRange ? 'variačné rozpätie' : 'medián'}.`,
        solution: `Usporiadaný súbor: $${s.join(';\\ ')}$ ($n=${n}$). ${askRange ? `$R=x_{\\max}-x_{\\min}=${s[n - 1]}-${s[0]}=${s[n - 1] - s[0]}$.`
          : n % 2 ? `Medián je ${(n + 1) / 2}. hodnota: $${med}$.` : `Medián je priemer ${n / 2}. a ${n / 2 + 1}. hodnoty: $\\frac{${s[n / 2 - 1]}+${s[n / 2]}}{2}=${dc(med)}$.`}`,
        hint: askRange ? 'Variačné rozpätie je rozdiel najväčšej a najmenšej hodnoty.' : 'Údaje najprv usporiadaj podľa veľkosti. Pri párnom počte je medián priemerom dvoch prostredných hodnôt.',
        mistakes: (() => {
          if (askRange) {
            const w = data[n - 1] - data[0];
            return w !== s[n - 1] - s[0] ? [{ value: w, msg: 'Rozpätie je rozdiel najväčšej a najmenšej hodnoty, nie poslednej a prvej hodnoty v zápise.' }] : [];
          }
          const w = n % 2 ? data[(n - 1) / 2] : (data[n / 2 - 1] + data[n / 2]) / 2;
          return w !== med ? [{ value: w, msg: 'Pred určením mediánu treba údaje usporiadať podľa veľkosti.' }] : [];
        })()
      };
    }
    if (t < 0.45) {
      const vals = shuffle(Array.from({ length: 20 }, (_, i) => i + 1)).slice(0, rnd(5, 6)), mode = vals[0];
      const data = [mode, mode, mode];
      vals.slice(1).forEach((v) => { for (let j = rnd(1, 2); j > 0; j--) data.push(v); });
      const sh = shuffle(data);
      return {
        answer: mode,
        q: `Hráč zapisoval počet bodov v jednotlivých zápasoch: $${sh.join(';\\ ')}$. Aký je modus tohto súboru?`,
        solution: `Najčastejšie sa vyskytuje hodnota $${mode}$ (trikrát), ostatné hodnoty najviac dvakrát. Modus je $${mode}$.`,
        hint: 'Modus je hodnota s najväčšou početnosťou. Spočítaj, koľkokrát sa vyskytuje každá hodnota.',
        mistakes: mode !== 3 ? [{ value: 3, msg: 'To je početnosť najčastejšej hodnoty. Modus je samotná hodnota, ktorá sa vyskytuje najčastejšie.' }] : []
      };
    }
    if (t < 0.75) {
      let n, m, devs;
      do {
        n = pick([5, 6]); m = rnd(6, 20);
        devs = Array.from({ length: n - 1 }, () => rnd(-5, 5));
        devs.push(-devs.reduce((a, b) => a + b, 0));
      } while (Math.abs(devs[n - 1]) > 6);
      const data = shuffle(devs.map((d) => m + d)), ss = devs.reduce((s, d) => s + d * d, 0), v = ss / n;
      const askS = Math.random() < 0.5, res = askS ? Math.sqrt(v) : v;
      return {
        answer: round(res, 2), tol: 0.006,
        q: `Vypočítaj ${askS ? 'smerodajnú odchýlku' : 'rozptyl'} súboru $${data.join(';\\ ')}$. ${ROUND2}`,
        solution: `$\\bar{x}=\\frac{${data.reduce((a, b) => a + b, 0)}}{${n}}=${m}$. Odchýlky od priemeru: $${data.map((x) => x - m).join(';\\ ')}$.
          $s^2=\\frac{${data.map((x) => `${par(x - m)}^2`).join('+')}}{${n}}=\\frac{${ss}}{${n}}\\approx ${dd(v)}$${askS ? `, $s=\\sqrt{s^2}\\approx ${dd(res)}$` : ''}.`,
        hint: 'Vypočítaj priemer, potom priemer druhých mocnín odchýlok od neho. Smerodajná odchýlka je odmocnina z rozptylu.',
        mistakes: [
          { value: round(askS ? Math.sqrt(ss / (n - 1)) : ss / (n - 1), 2), msg: `Súčet štvorcov odchýlok delíme počtom údajov $n=${n}$, nie číslom $n-1$ (tak je rozptyl definovaný v teórii).` },
          { value: round(askS ? v : Math.sqrt(v), 2), msg: askS ? 'To je rozptyl. Smerodajná odchýlka je jeho druhá odmocnina.' : 'To je smerodajná odchýlka. Rozptyl sa neodmocňuje.' }
        ].filter((mk) => Math.abs(mk.value - round(res, 2)) > 0.006),
        steps: [
          { q: 'Vypočítaj aritmetický priemer $\\bar{x}$.', answer: m },
          { q: 'Vypočítaj súčet druhých mocnín odchýlok od priemeru.', answer: ss },
          { q: `Vypočítaj rozptyl $s^2$. ${ROUND2}`, answer: round(v, 2), tol: 0.006 },
          ...(askS ? [{ q: `Vypočítaj smerodajnú odchýlku $s$. ${ROUND2}`, answer: round(res, 2), tol: 0.006 }] : [])
        ]
      };
    }
    const n = rnd(5, 20), m = rnd(15, 40), d = nz(-2, 3), x = m + (n + 1) * d;
    return {
      answer: x,
      q: `Priemerný vek ${n} členov speváckeho zboru je $${m}$ rokov. Keď do zboru pribudol nový člen, priemerný vek sa ${d > 0 ? 'zvýšil' : 'znížil'} na $${m + d}$ rokov. Koľko rokov má nový člen?`,
      solution: `Súčet vekov pôvodných členov je $${n}\\cdot ${m}=${n * m}$. Po príchode je súčet vekov $${n + 1}\\cdot ${m + d}=${(n + 1) * (m + d)}$.
        Nový člen má $${(n + 1) * (m + d)}-${n * m}=${x}$ rokov.`,
      hint: 'Pracuj so súčtami: súčet = priemer · počet. Porovnaj súčet pred príchodom a po príchode nového člena.',
      mistakes: [
        { value: m + d, msg: 'To je nový priemerný vek. Pracuj so súčtami vekov: súčet = priemer · počet.' },
        { value: m + n * d, msg: `Po príchode má zbor $${n + 1}$ členov, nový súčet je preto $${n + 1}\\cdot ${m + d}$.` }
      ].filter((mk) => mk.value !== x),
      steps: [
        { q: 'Aký je súčet vekov pôvodných členov?', answer: n * m },
        { q: 'Aký je súčet vekov po príchode nového člena?', answer: (n + 1) * (m + d) },
        { q: 'Koľko rokov má nový člen?', answer: x }
      ]
    };
  });

  lesson({
    id: 's4-kombinatorika', order: 330, topics: ['kombinatorika'], title: 'Kombinatorické úlohy',
    summary: 'Variácie, permutácie a kombinácie bez opakovania aj s opakovaním v typických úlohách.',
    theory: [
      `<p><strong>Kombinatorické pravidlo súčinu:</strong> ak prvú vec vyberáme $m$ spôsobmi a ku každej druhú $n$ spôsobmi, dvojíc je $m\\cdot n$.
       <strong>Pravidlo súčtu</strong> použijeme, keď sa možnosti navzájom vylučujú. Pri ťažších úlohách rozdelíme prípady (napr. podľa poslednej cifry) a sčítame ich.</p>`,
      `<table class="tbl"><tr><th></th><th>bez opakovania</th><th>s opakovaním</th></tr>
       <tr><td>variácie $k$-tej triedy z $n$ (záleží na poradí)</td><td>$V_k(n)=\\frac{n!}{(n-k)!}$</td><td>$V'_k(n)=n^k$</td></tr>
       <tr><td>permutácie (usporiadanie všetkých)</td><td>$P(n)=n!$</td><td>$P'(k_1,\\dots,k_m)=\\frac{n!}{k_1!\\cdots k_m!}$</td></tr>
       <tr><td>kombinácie $k$-tej triedy z $n$ (nezáleží na poradí)</td><td>$C_k(n)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$</td><td>$C'_k(n)=\\binom{n+k-1}{k}$</td></tr></table>`,
      `<p><strong>Ako rozhodnúť:</strong> záleží na poradí (kód, rozdelenie funkcií, číslo)? Ak áno, ide o variácie či permutácie, ak nie (výber skupiny, ťahanie lôpt naraz), o kombinácie.
       Pri ciferných číslach nesmie byť na prvom mieste nula. Užitočné: $\\binom{n}{k}=\\binom{n}{n-k}$, $\\binom{n}{2}=\\frac{n(n-1)}{2}$ (napr. počet podaní rúk medzi $n$ ľuďmi).</p>`
    ],
    examples: [
      { task: 'Koľko trojciferných čísel s rôznymi ciframi vieme zostaviť z cifier $0, 1, 2, 3, 4$?',
        steps: ['Na prvom mieste nesmie byť nula: $4$ možnosti.', 'Na druhom mieste $4$ zvyšné cifry (aj nula), na treťom $3$.', '<strong>$4\\cdot 4\\cdot 3=48$ čísel</strong>'] },
      { task: 'Z 8 chlapcov a 6 dievčat vyberáme štvorčlenný výbor, v ktorom budú 2 chlapci a 2 dievčatá. Koľko je možností?',
        steps: ['Chlapcov vyberieme $\\binom{8}{2}=28$ spôsobmi, dievčatá $\\binom{6}{2}=15$ spôsobmi.', 'Výbery sú nezávislé, použijeme pravidlo súčinu.', '<strong>$28\\cdot 15=420$ možností</strong>'] }
    ]
  });

  const WORDS = ['KAJAK', 'RADAR', 'POTOPA', 'KOLOTOČ', 'MATEMATIKA', 'ANANÁS', 'BARBORA', 'ANALÝZA'];
  const CIF = { 3: 'trojciferných', 4: 'štvorciferných' };
  const seqs = (digits, k, rep) => {
    const out = [];
    const go = (cur) => {
      if (cur.length === k) { out.push(cur); return; }
      digits.forEach((d) => { if (rep || !cur.includes(d)) go(cur.concat(d)); });
    };
    go([]);
    return out.filter((s) => s[0] !== 0);
  };

  gen('s4-kombinatorika', () => {
    const t = Math.random();
    if (t < 0.25) {
      if (Math.random() < 0.6) {
        const b = rnd(5, 12), g = rnd(4, 10), k1 = rnd(1, 3), k2 = rnd(1, 3);
        return {
          answer: C(b, k1) * C(g, k2),
          q: `V triede je ${b} chlapcov a ${g} dievčat. Koľkými spôsobmi môžeme vybrať skupinu, v ktorej budú ${k1 === 1 ? 'jeden chlapec' : `${k1} chlapci`} a ${k2 === 1 ? 'jedno dievča' : `${k2} dievčatá`}?`,
          solution: `Na poradí nezáleží, ide o kombinácie: chlapcov vyberieme $\\binom{${b}}{${k1}}=${C(b, k1)}$ spôsobmi, dievčatá $\\binom{${g}}{${k2}}=${C(g, k2)}$ spôsobmi.
            Podľa pravidla súčinu je spolu $${C(b, k1)}\\cdot ${C(g, k2)}=${C(b, k1) * C(g, k2)}$ možností.`,
          hint: 'Chlapcov a dievčatá vyberáš nezávisle (kombinácie, lebo na poradí nezáleží) a počty vynásobíš.',
          mistakes: [
            { value: C(b, k1) + C(g, k2), msg: 'Výber chlapcov a výber dievčat sa navzájom nevylučujú, kombinujú sa. Použi pravidlo súčinu, nie súčtu.' },
            { value: C(b, k1) * fact(k1) * C(g, k2) * fact(k2), msg: 'V skupine nezáleží na poradí, ide o kombinácie, nie variácie.' }
          ].filter((mk) => mk.value !== C(b, k1) * C(g, k2)),
          steps: [
            { q: `Koľkými spôsobmi vyberieme chlapcov?`, answer: C(b, k1) },
            { q: `Koľkými spôsobmi vyberieme dievčatá?`, answer: C(g, k2) },
            { q: 'Koľko je spolu možností?', answer: C(b, k1) * C(g, k2) }
          ]
        };
      }
      const n = rnd(6, 15);
      return {
        answer: n * (n - 1) * (n - 2),
        q: `Spolok má ${n} členov. Koľkými spôsobmi môžu zvoliť predsedu, podpredsedu a pokladníka (jedna osoba zastáva najviac jednu funkciu)?`,
        solution: `Záleží na tom, kto má akú funkciu, ide o variácie 3. triedy z ${n} prvkov: $V_3(${n})=${n}\\cdot ${n - 1}\\cdot ${n - 2}=${n * (n - 1) * (n - 2)}$.`,
        hint: 'Predsedu vyberáš z $n$ ľudí, podpredsedu už len zo zvyšných, pokladníka zo zvyšných ďalej.',
        mistakes: [
          { value: C(n, 3), msg: 'Funkcie sú rôzne, takže záleží na tom, kto je predseda a kto pokladník. Ide o variácie, nie kombinácie.' },
          { value: n * n * n, msg: 'Jedna osoba môže mať najviac jednu funkciu, ďalšiu funkciu už vyberáš len zo zvyšných ľudí.' }
        ]
      };
    }
    if (t < 0.5) {
      if (Math.random() < 0.65) {
        const w = pick(WORDS), letters = Array.from(w), cnt = {};
        letters.forEach((l) => { cnt[l] = (cnt[l] || 0) + 1; });
        const reps = Object.keys(cnt).filter((l) => cnt[l] > 1);
        const den = reps.reduce((p, l) => p * fact(cnt[l]), 1), res = fact(letters.length) / den;
        return {
          answer: res,
          q: `Koľko rôznych „slov“ (aj nezmyselných) vznikne preusporiadaním všetkých písmen slova ${w}?`,
          solution: `Slovo má ${letters.length} písmen, opakujú sa ${reps.map((l) => `${l} (${cnt[l]}×)`).join(', ')}. Ide o permutácie s opakovaním:
            $\\dfrac{${letters.length}!}{${reps.map((l) => `${cnt[l]}!`).join('\\cdot ')}}=\\dfrac{${fact(letters.length)}}{${den}}=${res}$.`,
          hint: 'Keby boli všetky písmená rôzne, bolo by ich $n!$. Výmena rovnakých písmen nové slovo nedá, preto vydeľ faktoriálmi počtov opakujúcich sa písmen.',
          mistakes: [{ value: fact(letters.length), msg: 'Niektoré písmená sa opakujú a ich výmenou nové slovo nevznikne. Vydeľ faktoriálmi počtov opakujúcich sa písmen.' }],
          steps: [
            { q: `Koľko je $${letters.length}!$?`, answer: fact(letters.length) },
            { q: 'Aký je súčin faktoriálov počtov opakujúcich sa písmen?', answer: den },
            { q: 'Koľko rôznych slov vznikne?', answer: res }
          ]
        };
      }
      const n = rnd(4, 9), round_ = Math.random() < 0.5;
      return {
        answer: round_ ? fact(n - 1) : fact(n),
        q: round_ ? `Koľkými spôsobmi si môže ${n} ľudí sadnúť okolo okrúhleho stola, ak rozlišujeme len to, kto sedí vedľa koho (otočenie celého rozsadenia nič nemení)?`
          : `Koľkými spôsobmi si môže ${n} ľudí sadnúť do radu na ${n} stoličiek?`,
        solution: round_ ? `Jedného človeka posadíme na ľubovoľné miesto (otočenia nerozlišujeme), ostatných ${n - 1} usporiadame: $(${n}-1)!=${n - 1}!=${fact(n - 1)}$.`
          : `Ide o permutácie: $${n}!=${fact(n)}$.`,
        hint: round_ ? 'Pri okrúhlom stole sú rozsadenia, ktoré sa líšia len otočením, rovnaké. Zafixuj jedného človeka.' : 'Počet usporiadaní $n$ rôznych prvkov je $n!$.',
        mistakes: round_ ? [{ value: fact(n), msg: `Rozsadenia, ktoré sa líšia len otočením stola, sú rovnaké. Každé si takto započítal ${n}-krát.` }]
          : [{ value: fact(n - 1), msg: 'V rade záleží na tom, kto sedí na ktorej stoličke: otočenie tu nehrá rolu, usporiadaj všetkých ľudí.' }]
      };
    }
    if (t < 0.78) {
      let digits, k, rep, cond, all, good;
      do {
        digits = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, rnd(4, 6)).sort((x, y) => x - y);
        k = pick([3, 4]); rep = Math.random() < 0.4; cond = pick(['', 'párnych', 'nepárnych', 'deliteľných piatimi']);
        all = seqs(digits, k, rep);
        good = all.filter((s) => { const l = s[k - 1]; return cond === '' || (cond === 'párnych' ? l % 2 === 0 : cond === 'nepárnych' ? l % 2 === 1 : l % 5 === 0); });
      } while (!good.length || (!rep && k > digits.length));
      const zero = digits.includes(0), d = digits.length;
      let sol;
      if (cond === '') {
        const f = [d - (zero ? 1 : 0)];
        for (let i = 1; i < k; i++) f.push(rep ? d : d - i);
        sol = `Na prvé miesto môžeme dať ${zero ? 'ľubovoľnú cifru okrem nuly' : 'ľubovoľnú cifru'} (${f[0]} ${pl(f[0], ['možnosť', 'možnosti', 'možností'])}), na ďalšie miesta ${rep ? 'opäť ľubovoľnú' : 'vždy niektorú zo zvyšných'}.
          Spolu $${f.join('\\cdot ')}=${good.length}$.`;
      } else {
        const lasts = [...new Set(good.map((s) => s[k - 1]))].sort((x, y) => x - y);
        sol = `Rozdelíme prípady podľa poslednej cifry (musí byť ${cond === 'párnych' ? 'párna' : cond === 'nepárnych' ? 'nepárna' : '0 alebo 5'}); prvá cifra nesmie byť nula${rep ? '' : ' ani sa cifry nesmú opakovať'}:
          ${lasts.map((l) => `končiace cifrou ${l}: ${good.filter((s) => s[k - 1] === l).length}`).join('; ')}. Spolu $${good.length}$.`;
      }
      return {
        answer: good.length,
        q: `Koľko ${CIF[k]} ${cond ? cond + ' ' : ''}čísel možno zostaviť z cifier ${digits.join(', ')}, ak sa cifry ${rep ? 'môžu opakovať' : 'nesmú opakovať'}?`,
        solution: sol,
        hint: 'Vypĺňaj miesta postupne a použi pravidlo súčinu. Prvá cifra nesmie byť nula; pri podmienke na deliteľnosť začni poslednou cifrou a rozdeľ prípady.',
        mistakes: (() => {
          if (!zero) return [];
          let cnt = 0;
          const go = (cur) => {
            if (cur.length === k) {
              const l = cur[k - 1];
              if (cond === '' || (cond === 'párnych' ? l % 2 === 0 : cond === 'nepárnych' ? l % 2 === 1 : l % 5 === 0)) cnt++;
              return;
            }
            digits.forEach((dg) => { if (rep || !cur.includes(dg)) go(cur.concat(dg)); });
          };
          go([]);
          return cnt !== good.length ? [{ value: cnt, msg: 'Započítal si aj „čísla“ začínajúce nulou. Na prvom mieste nula byť nemôže.' }] : [];
        })()
      };
    }
    if (Math.random() < 0.5) {
      const n = rnd(5, 25), H = n * (n - 1) / 2;
      return {
        answer: n,
        q: `Na stretnutí si každý účastník podal ruku s každým iným práve raz. Podaní rúk bolo ${H}. Koľko ľudí bolo na stretnutí?`,
        solution: `Podaní rúk je $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Z rovnice $\\frac{n(n-1)}{2}=${H}$ dostaneme $n^2-n-${2 * H}=0$, kladný koreň je $n=${n}$.`,
        hint: 'Každé podanie rúk je dvojica ľudí, na poradí nezáleží: $\\binom{n}{2}$. Zostav kvadratickú rovnicu.',
        steps: [
          { q: `Z rovnice $\\frac{n(n-1)}{2}=${H}$ vyjadri súčin $n(n-1)$. Koľko je?`, answer: 2 * H },
          { q: 'Vyrieš rovnicu. Koľko ľudí bolo na stretnutí?', answer: n }
        ]
      };
    }
    const n = rnd(5, 20), Dg = n * (n - 3) / 2, reverse = Math.random() < 0.5;
    return {
      answer: reverse ? n : Dg,
      q: reverse ? `Konvexný mnohouholník má ${Dg} uhlopriečok. Koľko má vrcholov?` : `Koľko uhlopriečok má konvexný ${n}-uholník?`,
      solution: `Každý vrchol spojíme s $n-3$ nesusednými vrcholmi a každú uhlopriečku tak započítame dvakrát: $\\frac{n(n-3)}{2}$.
        ${reverse ? `Z $\\frac{n(n-3)}{2}=${Dg}$ je $n^2-3n-${2 * Dg}=0$ a kladný koreň $n=${n}$.` : `$\\frac{${n}\\cdot ${n - 3}}{2}=${Dg}$.`}`,
      hint: 'Počet uhlopriečok $n$-uholníka je $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (všetky spojnice vrcholov mínus strany).',
      ...(reverse ? {
        steps: [
          { q: `Z rovnice $\\frac{n(n-3)}{2}=${Dg}$ vyjadri súčin $n(n-3)$. Koľko je?`, answer: 2 * Dg },
          { q: 'Vyrieš rovnicu. Koľko vrcholov má mnohouholník?', answer: n }
        ]
      } : {
        mistakes: [
          { value: n * (n - 3), msg: 'Každú uhlopriečku si započítal dvakrát, z oboch jej koncových vrcholov. Výsledok vydeľ dvoma.' },
          { value: C(n, 2), msg: 'To sú všetky spojnice dvojíc vrcholov, aj strany mnohouholníka. Strany treba odčítať.' }
        ]
      })
    };
  });

  lesson({
    id: 's4-pravdepodobnost', order: 340, topics: ['kombinatorika', 'statistika'], title: 'Pravdepodobnosť a nezávislé javy',
    summary: 'Klasická pravdepodobnosť, opačný jav, zjednotenie javov a súčin pravdepodobností nezávislých javov.',
    theory: [
      `<p><strong>Klasická definícia:</strong> ak má pokus $n$ rovnako možných výsledkov a jav $A$ nastane pri $m$ z nich, $P(A)=\\frac{m}{n}$.
       Platí $0\\le P(A)\\le 1$. Počty $m$ a $n$ často určíme kombinatoricky, napr. pri ťahaní $k$ guľôčok naraz sú výsledkami kombinácie $\\binom{n}{k}$.</p>`,
      `<p><strong>Opačný jav</strong> $A'$ (jav $A$ nenastane): $P(A')=1-P(A)$. Najmä úlohy typu „aspoň raz“ riešime cez opačný jav „ani raz“.
       <strong>Zjednotenie</strong>: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$; pre nezlučiteľné javy (nemôžu nastať súčasne) je $P(A\\cap B)=0$.</p>`,
      `<p>Javy $A$ a $B$ sú <strong>nezávislé</strong>, ak výsledok jedného nemení pravdepodobnosť druhého; vtedy $P(A\\cap B)=P(A)\\cdot P(B)$.
       Typicky ide o opakované hody, výstrely rôznych strelcov alebo ťahanie s vrátením. Pravdepodobnosť, že pri $n$ nezávislých pokusoch s pravdepodobnosťou $p$ nastane jav aspoň raz, je $1-(1-p)^n$.</p>`
    ],
    examples: [
      { task: 'V urne sú gule: 5 bielych a 3 čierne. Naraz vytiahneme dve. Aká je pravdepodobnosť, že obe sú biele?',
        steps: ['Všetkých dvojíc: $\\binom{8}{2}=28$, priaznivých: $\\binom{5}{2}=10$.', '$P=\\frac{10}{28}=\\frac{5}{14}\\approx 0{,}357$.'] },
      { task: 'Dvaja strelci zasiahnu terč s pravdepodobnosťami $0{,}8$ a $0{,}7$ (nezávisle). Aká je pravdepodobnosť, že terč bude zasiahnutý?',
        steps: ['Opačný jav: obaja minú, $P=0{,}2\\cdot 0{,}3=0{,}06$.', '<strong>$P=1-0{,}06=0{,}94$</strong>'] }
    ]
  });

  const PROB = '(Výsledok zadaj ako zlomok alebo desatinné číslo zaokrúhlené na 3 desatinné miesta.)';

  gen('s4-pravdepodobnost', () => {
    const t = Math.random();
    if (t < 0.3) {
      const w = rnd(2, 8), c = rnd(2, 8), n = w + c, all = C(n, 2), v = rnd(0, 2);
      const fav = v === 0 ? C(w, 2) : v === 1 ? w * c : all - C(c, 2);
      const ev = ['obe gule sú biele', 'jedna guľa je biela a jedna čierna', 'aspoň jedna guľa je biela'][v];
      return {
        answer: fav / all, tol: 0.00051, show: `${fTxt(fav, all)} ≈ ${dt(fav / all, 3)}`,
        q: `V urne sú gule: ${w} ${pl(w, ['biela', 'biele', 'bielych'])} a ${c} ${pl(c, ['čierna', 'čierne', 'čiernych'])}. Naraz náhodne vytiahneme dve. Aká je pravdepodobnosť, že ${ev}? ${PROB}`,
        solution: `Všetkých výberov dvoch gúľ je $\\binom{${n}}{2}=${all}$. ${v === 0 ? `Priaznivé: $\\binom{${w}}{2}=${fav}$.`
          : v === 1 ? `Priaznivé: $${w}\\cdot ${c}=${fav}$ (bielu a čiernu vyberáme nezávisle).`
            : `Opačný jav „obe čierne“ má $\\binom{${c}}{2}=${C(c, 2)}$ výberov, priaznivých je $${all}-${C(c, 2)}=${fav}$.`}
          $P=\\frac{${fav}}{${all}}=${fTex(fav, all)}\\approx ${dd(fav / all, 3)}$.`,
        hint: 'Výsledky pokusu sú dvojice gúľ (kombinácie). Spočítaj všetky a priaznivé; pri „aspoň jedna“ je jednoduchší opačný jav.',
        mistakes: [
          v === 0 ? { value: (w / n) * (w / n), msg: 'Gule ťaháme naraz, teda bez vrátenia. Po vytiahnutí bielej je v urne o jednu bielu menej.' }
            : v === 1 ? { value: w * c / (n * (n - 1)), msg: 'Biela a čierna môžu prísť v dvoch poradiach. Pri výbere naraz radšej počítaj neusporiadané dvojice: bielu a čiernu guľu vyberáš nezávisle.' }
              : { value: C(w, 2) / all, msg: 'Jav „aspoň jedna biela“ zahŕňa aj prípad, keď je jedna biela a jedna čierna. Použi opačný jav „obe čierne“.' }
        ].filter((mk) => Math.abs(mk.value - fav / all) > 0.0006),
        steps: [
          { q: 'Koľko je všetkých výberov dvoch gúľ?', answer: all },
          { q: 'Koľko je priaznivých výberov?', answer: fav },
          { q: `Aká je pravdepodobnosť? ${PROB}`, answer: fav / all, tol: 0.00051 }
        ]
      };
    }
    if (t < 0.55) {
      const p1 = pick([0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]), p2 = pick([0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]), v = rnd(0, 2);
      const q1 = 1 - p1, q2 = 1 - p2;
      const res = v === 0 ? 1 - q1 * q2 : v === 1 ? p1 * q2 + q1 * p2 : q1 * q2;
      const ev = ['terč zasiahne aspoň jeden z nich', 'terč zasiahne práve jeden z nich', 'terč nezasiahne ani jeden z nich'][v];
      return {
        answer: round(res, 4), tol: 0.0005,
        q: `Dvaja strelci vystrelia nezávisle po jednej rane. Prvý zasiahne terč s pravdepodobnosťou $${dc(p1)}$, druhý s pravdepodobnosťou $${dc(p2)}$. Aká je pravdepodobnosť, že ${ev}?`,
        solution: `Pravdepodobnosti netrafenia sú $${dc(q1)}$ a $${dc(q2)}$. ${v === 0 ? `Opačný jav (obaja minú): $${dc(q1)}\\cdot ${dc(q2)}=${dc(q1 * q2)}$, teda $P=1-${dc(q1 * q2)}=${dc(res)}$.`
          : v === 1 ? `$P=${dc(p1)}\\cdot ${dc(q2)}+${dc(q1)}\\cdot ${dc(p2)}=${dc(p1 * q2)}+${dc(q1 * p2)}=${dc(res)}$ (prvý trafí a druhý nie, alebo naopak).`
            : `$P=${dc(q1)}\\cdot ${dc(q2)}=${dc(res)}$.`}`,
        hint: 'Pri nezávislých javoch sa pravdepodobnosti súčasného nastania násobia. Pri „aspoň jeden“ použi opačný jav.',
        mistakes: [
          ...(v === 0 ? [{ value: round(p1 + p2, 4), msg: 'Javy „prvý zasiahne“ a „druhý zasiahne“ môžu nastať súčasne: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Alebo použi opačný jav.' },
            { value: round(p1 * p2, 4), msg: 'To je pravdepodobnosť, že zasiahnu obaja. „Aspoň jeden“ zahŕňa aj prípady, keď zasiahne len jeden.' }] : []),
          ...(v === 1 ? [{ value: round(p1 * q2, 4), msg: 'Práve jeden môže byť prvý aj druhý strelec. Sčítaj pravdepodobnosti oboch možností.' }] : []),
          ...(v === 2 ? [{ value: round(1 - p1 * p2, 4), msg: 'To je pravdepodobnosť, že nezasiahnu obaja súčasne. Ani jeden znamená, že minú obaja.' }] : [])
        ].filter((mk) => Math.abs(mk.value - round(res, 4)) > 0.0005),
        ...(v !== 2 ? { steps: v === 0
          ? [{ q: 'Aká je pravdepodobnosť, že obaja minú?', answer: round(q1 * q2, 4), tol: 0.0005 },
            { q: 'Aká je pravdepodobnosť, že terč zasiahne aspoň jeden?', answer: round(res, 4), tol: 0.0005 }]
          : [{ q: 'Aká je pravdepodobnosť, že prvý zasiahne a druhý minie?', answer: round(p1 * q2, 4), tol: 0.0005 },
            { q: 'Aká je pravdepodobnosť, že prvý minie a druhý zasiahne?', answer: round(q1 * p2, 4), tol: 0.0005 },
            { q: 'Aká je pravdepodobnosť, že terč zasiahne práve jeden?', answer: round(res, 4), tol: 0.0005 }] } : {})
      };
    }
    if (t < 0.78) {
      const pairs = []; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) pairs.push([a, b]);
      const v = rnd(0, 2), s = rnd(4, 10);
      const ok = v === 0 ? (p) => p[0] + p[1] === s : v === 1 ? (p) => p[0] + p[1] >= s : (p) => (p[0] * p[1]) % 2 === 0;
      const fav = pairs.filter(ok).length;
      const ev = [`súčet je ${s}`, `súčet je aspoň ${s}`, 'súčin je párny'][v];
      return {
        answer: fav / 36, tol: 0.00051, show: `${fTxt(fav, 36)} ≈ ${dt(fav / 36, 3)}`,
        q: `Hodíme naraz dvoma hracími kockami. Aká je pravdepodobnosť, že ${ev}? ${PROB}`,
        solution: `Všetkých výsledkov je $6\\cdot 6=36$. ${v === 2 ? `Súčin je nepárny len vtedy, keď sú obe čísla nepárne: $3\\cdot 3=9$ výsledkov. Priaznivých je $36-9=27$.`
          : `Priaznivé dvojice: ${pairs.filter(ok).map((p) => `[${p[0]}; ${p[1]}]`).join(', ')} — spolu $${fav}$.`} $P=\\frac{${fav}}{36}=${fTex(fav, 36)}$.`,
        hint: 'Výsledok je usporiadaná dvojica (prvá kocka, druhá kocka), všetkých je 36. Spočítaj priaznivé dvojice.',
        mistakes: (() => {
          if (v === 2) return [{ value: 9 / 36, msg: 'To je pravdepodobnosť opačného javu, že súčin je nepárny. Odpočítaj ju od jednotky.' }];
          const un = pairs.filter((p) => p[0] <= p[1] && ok(p)).length;
          return un !== fav ? [{ value: un / 36, msg: 'Kocky rozlišujeme: $[1; 2]$ a $[2; 1]$ sú dva rôzne výsledky. Započítaj obe poradia.' }] : [];
        })(),
        steps: [
          { q: 'Koľko je priaznivých výsledkov (usporiadaných dvojíc)?', answer: fav },
          { q: `Aká je pravdepodobnosť? ${PROB}`, answer: fav / 36, tol: 0.00051 }
        ]
      };
    }
    if (Math.random() < 0.5) {
      const n = rnd(2, 8), res = 1 - Math.pow(5 / 6, n);
      return {
        answer: round(res, 3), tol: 0.00051,
        q: `Hráč hodí hracou kockou ${n}-krát. Aká je pravdepodobnosť, že aspoň raz padne šestka? Výsledok zaokrúhli na 3 desatinné miesta.`,
        solution: `Opačný jav: šestka nepadne ani raz, $P=\\left(\\frac{5}{6}\\right)^{${n}}\\approx ${dd(1 - res, 4)}$. Hľadaná pravdepodobnosť je $1-\\left(\\frac{5}{6}\\right)^{${n}}\\approx ${dd(res, 3)}$.`,
        hint: 'Použi opačný jav: pravdepodobnosť, že šestka nepadne v žiadnom z hodov, je $\\left(\\frac{5}{6}\\right)^n$.',
        mistakes: [
          { value: round(n / 6, 3), msg: 'Pravdepodobnosti jednotlivých hodov sa nesčítavajú (pri 6 hodoch by vyšla istota). Použi opačný jav „ani raz“.' },
          { value: round(1 - res, 3), msg: 'To je pravdepodobnosť opačného javu, že šestka nepadne ani raz. Odpočítaj ju od jednotky.' }
        ].filter((mk) => Math.abs(mk.value - round(res, 3)) > 0.0006),
        steps: [
          { q: 'Aká je pravdepodobnosť, že šestka nepadne ani raz? Výsledok zaokrúhli na 4 desatinné miesta.', answer: round(1 - res, 4), tol: 0.00006 },
          { q: 'Aká je pravdepodobnosť, že šestka padne aspoň raz? Výsledok zaokrúhli na 3 desatinné miesta.', answer: round(res, 3), tol: 0.00051 }
        ]
      };
    }
    const th = pick([0.5, 0.75, 0.9, 0.95, 0.99]);
    let n = 1; while (1 - Math.pow(5 / 6, n) <= th) n++;
    return {
      answer: n,
      q: `Koľkokrát najmenej musíme hodiť hracou kockou, aby pravdepodobnosť, že aspoň raz padne šestka, bola väčšia ako $${dc(th)}$?`,
      solution: `Potrebujeme $1-\\left(\\frac{5}{6}\\right)^n&gt;${dc(th)}$, teda $\\left(\\frac{5}{6}\\right)^n&lt;${dc(1 - th)}$. Zlogaritmujeme (logaritmus čísla menšieho ako 1 je záporný, znak sa otočí):
        $n&gt;\\dfrac{\\ln ${dc(1 - th)}}{\\ln\\frac{5}{6}}\\approx ${dd(Math.log(1 - th) / Math.log(5 / 6))}$. Najmenšie celé $n$ je $${n}$.`,
      hint: 'Zapíš podmienku cez opačný jav $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ a vyrieš ju logaritmovaním.'
    };
  });

  fig('s4-binom', {
    controls: [
      { id: 'n', label: 'Počet pokusov n', min: 1, max: 20, step: 1, value: 10 },
      { id: 'p', label: 'Pravdepodobnosť p', min: 0.05, max: 0.95, step: 0.05, value: 0.3 }
    ],
    draw: (v) => {
      const n = v.n, p = v.p, P = [];
      for (let k = 0; k <= n; k++) P.push(C(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k));
      const M = Math.max(...P), mode = P.indexOf(M), x0 = 34, y0 = 200, W = 372, H = 170, bw = W / (n + 1);
      const Y = (q) => y0 - q / M * H * 0.92;
      let s = `<svg viewBox="0 0 420 230" role="img" aria-label="Binomické rozdelenie">`;
      P.forEach((q, k) => {
        const x = x0 + k * bw;
        s += `<rect class="${k === mode ? 'f-fill2 f-outline2' : 'f-fill f-outline'}" x="${n1(x + bw * 0.12)}" y="${n1(Y(q))}" width="${n1(bw * 0.76)}" height="${n1(y0 - Y(q))}"/>`;
        if (n <= 12 || k % 2 === 0) s += `<text class="f-small" x="${n1(x + bw / 2)}" y="${y0 + 16}" text-anchor="middle">${k}</text>`;
      });
      const mu = n * p, sg = Math.sqrt(n * p * (1 - p));
      if (sg >= 0.8) {
        let d = '';
        for (let i = 0; i <= 120; i++) {
          const xx = -0.5 + (n + 1) * i / 120, dens = Math.exp(-((xx - mu) ** 2) / (2 * sg * sg)) / (sg * Math.sqrt(2 * Math.PI));
          d += `${i ? 'L' : 'M'}${n1(x0 + (xx + 0.5) * bw)} ${n1(Math.max(Y(dens), 10))}`;
        }
        s += `<path class="f-warn" d="${d}"/>`;
      }
      s += `<line class="f-axis" x1="${x0}" y1="${y0}" x2="${x0 + W}" y2="${y0}"/><text class="f-small" x="${x0}" y="16">P(X = k)</text>
        <text class="f-small" x="${x0 - 4}" y="${n1(Y(M) + 4)}" text-anchor="end">${sk(M, 2)}</text></svg>`;
      return {
        svg: s,
        readout: `E(X) = np = ${sk(mu)} · D(X) = np(1 − p) = ${sk(sg * sg)} · σ = ${sk(sg)} · <span class="c-ok">najpravdepodobnejšie k = ${mode}</span>`
      };
    }
  });

  lesson({
    id: 's4-binomicke', order: 350, topics: ['statistika', 'kombinatorika'], title: 'Binomické rozdelenie',
    summary: 'Opakované nezávislé pokusy, pravdepodobnosť k úspechov, stredná hodnota a rozptyl.',
    theory: [
      `<p>Pokus s dvoma výsledkami (úspech s pravdepodobnosťou $p$, neúspech s $1-p$) opakujeme $n$-krát nezávisle. Náhodná premenná $X$ — počet úspechov —
       má <strong>binomické rozdelenie</strong> $X\\sim Bi(n; p)$ a $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$ pre $k=0, 1, \\dots, n$.
       Kombinačné číslo udáva, koľkými spôsobmi môžu byť úspešné pokusy rozmiestnené medzi $n$ pokusmi.</p>`,
      `<p><strong>Stredná hodnota</strong> (očakávaný počet úspechov) je $E(X)=np$, <strong>rozptyl</strong> $D(X)=np(1-p)$ a smerodajná odchýlka $\\sigma=\\sqrt{np(1-p)}$.
       „Aspoň jeden úspech“ počítame cez opačný jav: $P(X\\ge 1)=1-(1-p)^n$, „najviac $k$“ ako súčet $P(X=0)+\\dots+P(X=k)$.</p>`,
      { fig: 's4-binom', caption: 'Stĺpce ukazujú $P(X=k)$ pre $Bi(n; p)$, zelený stĺpec je najpravdepodobnejšia hodnota. Pre väčšie $n$ sa tvar približuje k zvonovitej krivke <strong>normálneho rozdelenia</strong> (oranžová) so strednou hodnotou $np$ a smerodajnou odchýlkou $\\sqrt{np(1-p)}$.' }
    ],
    examples: [
      { task: 'Žiak tipuje odpovede v teste s 5 otázkami, každá má 4 možnosti (jedna správna). Aká je pravdepodobnosť, že trafí práve 2 odpovede?',
        steps: ['$X\\sim Bi(5; \\frac{1}{4})$.', '$P(X=2)=\\binom{5}{2}\\left(\\frac{1}{4}\\right)^2\\left(\\frac{3}{4}\\right)^3=10\\cdot\\frac{1}{16}\\cdot\\frac{27}{64}=\\frac{270}{1024}$.', '$P\\approx 0{,}2637$'] },
      { task: 'Výrobok je chybný s pravdepodobnosťou $0{,}1$. Koľko chybných výrobkov očakávame v dodávke 50 kusov a aký je rozptyl?',
        steps: ['$E(X)=np=50\\cdot 0{,}1=5$ výrobkov.', '$D(X)=np(1-p)=50\\cdot 0{,}1\\cdot 0{,}9=4{,}5$, $\\sigma\\approx 2{,}12$.'] }
    ]
  });

  const BCTX = [
    () => ({ p: 0.25, ptex: '\\frac{1}{4}', txt: (n) => `Žiak v teste s ${n} otázkami náhodne tipuje; každá otázka má štyri možnosti a práve jedna je správna. Náhodná premenná $X$ je počet správnych odpovedí.` }),
    () => ({ p: 1 / 6, ptex: '\\frac{1}{6}', txt: (n) => `Hráč hodí ${n}-krát hracou kockou. Náhodná premenná $X$ je počet hodov, v ktorých padla šestka.` }),
    () => { const p = pick([0.6, 0.7, 0.8, 0.9]); return { p, ptex: dc(p), txt: (n) => `Basketbalista premení trestný hod s pravdepodobnosťou $${dc(p)}$, hody sú nezávislé. Hádže ${n}-krát; $X$ je počet premenených hodov.` }; },
    () => { const p = pick([0.05, 0.1, 0.2]); return { p, ptex: dc(p), txt: (n) => `Výrobok je chybný s pravdepodobnosťou $${dc(p)}$, nezávisle od ostatných. Náhodne vyberieme ${n} ${pl(n, ['výrobok', 'výrobky', 'výrobkov'])}; $X$ je počet chybných.` }; }
  ];
  const R4 = 'Výsledok zaokrúhli na 4 desatinné miesta.';

  gen('s4-binomicke', () => {
    const t = Math.random(), c = pick(BCTX)(), n = rnd(4, 10), p = c.p, q = 1 - p;
    const qtex = p === 0.25 ? '\\frac{3}{4}' : p === 1 / 6 ? '\\frac{5}{6}' : dc(q);
    const P = (k) => C(n, k) * Math.pow(p, k) * Math.pow(q, n - k);
    if (t < 0.3) {
      const k = rnd(0, Math.min(n, 4)), res = P(k);
      return {
        answer: round(res, 4), tol: 0.00006, show: dt(res, 4),
        q: `${c.txt(n)} Vypočítaj $P(X=${k})$. ${R4}`,
        solution: `$X\\sim Bi(${n}; ${c.ptex})$. $P(X=${k})=\\binom{${n}}{${k}}\\left(${c.ptex}\\right)^{${k}}\\left(${qtex}\\right)^{${n - k}}=${C(n, k)}\\cdot\\left(${c.ptex}\\right)^{${k}}\\cdot\\left(${qtex}\\right)^{${n - k}}\\approx ${dd(res, 4)}$.`,
        hint: 'Použi $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.',
        mistakes: C(n, k) > 1 && Math.abs(round(res / C(n, k), 4) - round(res, 4)) > 0.00006 ? [{ value: round(res / C(n, k), 4), msg: `Zabudol si na kombinačné číslo $\\binom{${n}}{${k}}$: úspešné pokusy môžu byť medzi všetkými pokusmi rozmiestnené rôznymi spôsobmi.` }] : [],
        steps: [
          { q: `Vypočítaj kombinačné číslo $\\binom{${n}}{${k}}$.`, answer: C(n, k) },
          { q: `Vypočítaj $P(X=${k})$. ${R4}`, answer: round(res, 4), tol: 0.00006 }
        ]
      };
    }
    if (t < 0.55) {
      const res = 1 - Math.pow(q, n);
      return {
        answer: round(res, 4), tol: 0.00006, show: dt(res, 4),
        q: `${c.txt(n)} Vypočítaj $P(X\\ge 1)$. ${R4}`,
        solution: `Opačný jav je $X=0$: $P(X=0)=\\left(${qtex}\\right)^{${n}}\\approx ${dd(Math.pow(q, n), 4)}$. Preto $P(X\\ge 1)=1-\\left(${qtex}\\right)^{${n}}\\approx ${dd(res, 4)}$.`,
        hint: 'Jav „aspoň jeden úspech“ je opačný k javu „ani jeden úspech“.',
        mistakes: [
          { value: round(P(1), 4), msg: 'To je pravdepodobnosť práve jedného úspechu. „Aspoň jeden“ zahŕňa aj viac úspechov, použi opačný jav.' },
          { value: round(Math.pow(q, n), 4), msg: 'To je pravdepodobnosť opačného javu $X=0$. Odpočítaj ju od jednotky.' }
        ].filter((mk) => Math.abs(mk.value - round(res, 4)) > 0.00006),
        steps: [
          { q: `Vypočítaj $P(X=0)$. ${R4}`, answer: round(Math.pow(q, n), 4), tol: 0.00006 },
          { q: `Vypočítaj $P(X\\ge 1)$. ${R4}`, answer: round(res, 4), tol: 0.00006 }
        ]
      };
    }
    if (t < 0.8) {
      const E = n * p, D = n * p * q, f4 = (x) => String(round(x, 4)).replace('.', ',');
      return {
        type: 'tuple', answer: [round(E, 4), round(D, 4)], tol: 0.006, placeholder: 'E; D',
        show: p === 1 / 6 ? `${fTxt(n, 6)}; ${fTxt(5 * n, 36)}` : `${f4(E)}; ${f4(D)}`,
        q: `${c.txt(n)} Vypočítaj strednú hodnotu $E(X)$ a rozptyl $D(X)$. Zadaj ich v tomto poradí oddelené bodkočiarkou (ako zlomky alebo desatinné čísla zaokrúhlené aspoň na 2 miesta).`,
        solution: `$E(X)=np=${n}\\cdot ${c.ptex}=${p === 1 / 6 ? fTex(n, 6) : dc(E)}$, $D(X)=np(1-p)=${n}\\cdot ${c.ptex}\\cdot ${qtex}=${p === 1 / 6 ? fTex(5 * n, 36) : dc(D)}$.`,
        hint: 'Pre binomické rozdelenie je $E(X)=np$ a $D(X)=np(1-p)$.',
        mistakes: [
          { value: [round(E, 4), round(E, 4)], msg: 'Rozptyl binomického rozdelenia je $np(1-p)$, nezabudni na činiteľ $1-p$.' },
          { value: [round(E, 4), round(Math.sqrt(D), 4)], msg: 'To je smerodajná odchýlka. Rozptyl je jej druhá mocnina, $D(X)=np(1-p)$.' }
        ].filter((mk) => Math.abs(mk.value[1] - D) > 0.006),
        steps: [
          { q: 'Vypočítaj strednú hodnotu $E(X)$ (zlomok alebo desatinné číslo aspoň na 2 miesta).', answer: round(E, 4), tol: 0.006 },
          { q: 'Vypočítaj rozptyl $D(X)$.', answer: round(D, 4), tol: 0.006 }
        ]
      };
    }
    const res = P(0) + P(1);
    return {
      answer: round(res, 4), tol: 0.00006, show: dt(res, 4),
      q: `${c.txt(n)} Vypočítaj pravdepodobnosť, že $X\\le 1$. ${R4}`,
      solution: `$P(X\\le 1)=P(X=0)+P(X=1)=\\left(${qtex}\\right)^{${n}}+${n}\\cdot ${c.ptex}\\cdot\\left(${qtex}\\right)^{${n - 1}}\\approx ${dd(P(0), 4)}+${dd(P(1), 4)}\\approx ${dd(res, 4)}$.`,
      hint: '„Najviac jeden“ znamená 0 alebo 1 úspech. Sčítaj tieto dve pravdepodobnosti.',
      mistakes: [
        { value: round(P(1), 4), msg: '„Najviac jeden“ zahŕňa aj možnosť, že nenastane žiadny úspech. Pripočítaj $P(X=0)$.' },
        { value: round(P(0) + p * Math.pow(q, n - 1), 4), msg: `V $P(X=1)$ chýba kombinačné číslo $\\binom{${n}}{1}=${n}$: úspech môže nastať v ktoromkoľvek pokuse.` }
      ].filter((mk) => Math.abs(mk.value - round(res, 4)) > 0.00006),
      steps: [
        { q: `Vypočítaj $P(X=0)$. ${R4}`, answer: round(P(0), 4), tol: 0.00006 },
        { q: `Vypočítaj $P(X=1)$. ${R4}`, answer: round(P(1), 4), tol: 0.00006 },
        { q: `Vypočítaj $P(X\\le 1)$. ${R4}`, answer: round(res, 4), tol: 0.00006 }
      ]
    };
  });

  /* ======================= E. OPAKOVANIE NA MATURITU ======================= */

  // Úloha z náhodnej lekcie SŠ s danými témami; generátory bežia lenivo, takže lekcie z s1–s3 sú už načítané.
  const SS = /^s[1-4]$/;
  const review = (wanted) => () => {
    const tagged = LESSONS.filter((l) => SS.test(l.level) && Array.isArray(l.topics) && !l.topics.includes('maturita') && EXERCISES.has(l.id));
    let list = tagged.filter((l) => l.topics.some((t) => wanted.includes(t)));
    if (!list.length) list = tagged;
    const L = pick(list), ex = EXERCISES.make(L.id);
    return Object.assign({}, ex, { solution: `<span class="muted small">Téma: ${L.title}</span><br>${ex.solution}` });
  };

  const REVIEWS = [
    {
      id: 's4-mat-cisla', order: 910, wanted: ['cisla', 'vyrazy', 'rovnice'], title: 'Maturita: číselné obory, výrazy a rovnice',
      summary: 'Zmiešané úlohy z čísel, úprav výrazov a rovníc zo všetkých ročníkov.',
      theory: [
        `<p><strong>Čo treba vedieť — čísla:</strong> $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$, deliteľnosť (NSD, nsn, prvočísla), množinové operácie a $|A\\cup B|=|A|+|B|-|A\\cap B|$,
         absolútna hodnota ako vzdialenosť na osi, intervaly, mocniny $a^{m}a^{n}=a^{m+n}$, $(a^m)^n=a^{mn}$, $a^{-n}=\\frac{1}{a^n}$, odmocniny $\\sqrt[n]{a}=a^{1/n}$ a usmerňovanie zlomkov.</p>`,
        `<p><strong>Výrazy:</strong> vzorce $(a\\pm b)^2=a^2\\pm 2ab+b^2$, $a^2-b^2=(a-b)(a+b)$, $a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$, rozklad na súčin vyňatím a podľa vzorcov,
         krátenie lomených výrazov — vždy s <strong>podmienkami</strong> (menovateľ $\\neq 0$).</p>`,
        `<p><strong>Rovnice:</strong> lineárne (ekvivalentné úpravy), kvadratické $x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ a Vietove vzťahy, rovnice s neznámou v menovateli,
         pod odmocninou (umocnenie a <strong>skúška</strong>), s absolútnou hodnotou (metóda nulových bodov), exponenciálne a logaritmické ($\\log_a x=c \\Leftrightarrow x=a^c$).</p>`
      ],
      examples: [
        { task: 'Vyrieš rovnicu $\\sqrt{x+7}=x+1$.',
          steps: ['Podmienka $x+1\\ge 0$. Umocníme: $x+7=x^2+2x+1 \\Rightarrow x^2+x-6=0$.', '$x_1=2$, $x_2=-3$.', 'Skúška: $\\sqrt9=3$ ✓; pre $-3$ je pravá strana záporná ✗. <strong>$K=\\{2\\}$</strong>'] },
        { task: 'Zjednoduš $\\dfrac{x^2-9}{x^2+3x}$ a urči podmienky.',
          steps: ['$\\dfrac{(x-3)(x+3)}{x(x+3)}$, podmienky $x\\neq 0$, $x\\neq -3$.', '<strong>$\\dfrac{x-3}{x}$</strong>'] }
      ]
    },
    {
      id: 's4-mat-nerovnice', order: 920, wanted: ['nerovnice', 'sustavy'], title: 'Maturita: nerovnice a sústavy rovníc',
      summary: 'Zmiešané úlohy z nerovníc a sústav rovníc a nerovníc.',
      theory: [
        `<p><strong>Nerovnice:</strong> pri násobení či delení záporným číslom sa otočí znak. Kvadratickú nerovnicu riešime pomocou koreňov a tvaru paraboly:
         pre $a&gt;0$ je $ax^2+bx+c&lt;0$ medzi koreňmi. Podielové a súčinové nerovnice riešime <strong>metódou nulových bodov</strong> (tabuľka znamienok),
         nerovnice s absolútnou hodnotou rozdelením na intervaly alebo cez $|x-a|&lt;r \\Leftrightarrow a-r&lt;x&lt;a+r$.</p>`,
        `<p><strong>Sústavy rovníc:</strong> dosadzovacia a sčítacia metóda, pri troch neznámych postupné vylučovanie. Lineárna sústava dvoch rovníc má jedno, žiadne alebo
         nekonečne veľa riešení (rôznobežné, rovnobežné, totožné priamky). Pri nelineárnych sústavách z lineárnej rovnice vyjadríme neznámu a dosadíme.</p>`,
        `<p><strong>Typické chyby:</strong> zabudnuté podmienky, delenie výrazom s neznámou (môže byť záporný alebo nulový), nesprávne spojenie výsledkov — pri sústave nerovníc robíme <strong>prienik</strong>, pri „alebo“ zjednotenie.</p>`
      ],
      examples: [
        { task: 'Vyrieš nerovnicu $\\dfrac{x-2}{x+1}\\le 0$.',
          steps: ['Nulové body: $2$ (čitateľ) a $-1$ (menovateľ, ten je vylúčený).', 'Znamienka: na $(-\\infty; -1)$ $+$, na $(-1; 2)$ $-$, na $(2; \\infty)$ $+$.', '<strong>$K=(-1; 2\\rangle$</strong>'] },
        { task: 'Vyrieš sústavu $2x+3y=12$, $x-y=1$.',
          steps: ['Z druhej rovnice $x=y+1$, dosadíme: $2y+2+3y=12 \\Rightarrow y=2$.', '$x=3$. <strong>Riešenie $[3; 2]$</strong>'] }
      ]
    },
    {
      id: 's4-mat-funkcie', order: 930, wanted: ['funkcie'], title: 'Maturita: funkcie a ich grafy',
      summary: 'Zmiešané úlohy o funkciách: lineárne, kvadratické, lomené, exponenciálne, logaritmické a ich vlastnosti.',
      theory: [
        `<p><strong>Vlastnosti funkcie:</strong> definičný obor a obor hodnôt, monotónnosť, párnosť, ohraničenosť, extrémy, prostota a inverzná funkcia (súmernosť podľa $y=x$).</p>`,
        `<p><strong>Prehľad funkcií:</strong> lineárna $y=kx+q$ ($k$ — smernica, $q$ — úsek na osi $y$); kvadratická $y=a(x-m)^2+n$ s vrcholom $V[m; n]$;
         lineárna lomená $y=\\frac{ax+b}{cx+d}$ (hyperbola s asymptotami); exponenciálna $y=a^x$ (rastúca pre $a&gt;1$, klesajúca pre $0&lt;a&lt;1$, $H=(0; \\infty)$)
         a logaritmická $y=\\log_a x$ ($D=(0; \\infty)$, prechádza bodom $[1; 0]$); goniometrické funkcie s periódou $2\\pi$ (tangens $\\pi$).</p>`,
        `<p><strong>Posuny grafov:</strong> $f(x-a)$ posúva graf o $a$ doprava, $f(x)+b$ o $b$ nahor, $-f(x)$ je preklopenie podľa osi $x$, $|f(x)|$ preklopí záporné časti nahor.</p>`
      ],
      examples: [
        { task: 'Urči vrchol paraboly $y=x^2-6x+5$ a obor hodnôt funkcie.',
          steps: ['Doplnenie na štvorec: $y=(x-3)^2-4$.', 'Vrchol $V[3; -4]$, parabola je otvorená nahor.', '<strong>$H(f)=\\langle -4; \\infty)$</strong>'] },
        { task: 'Urči definičný obor funkcie $f(x)=\\log_2(6-2x)$.',
          steps: ['Argument logaritmu musí byť kladný: $6-2x&gt;0$.', '<strong>$x&lt;3$, teda $D(f)=(-\\infty; 3)$</strong>'] }
      ]
    },
    {
      id: 's4-mat-geometria', order: 940, wanted: ['planimetria', 'stereometria', 'analyticka'], title: 'Maturita: planimetria, stereometria a analytická geometria',
      summary: 'Zmiešané úlohy z geometrie v rovine, v priestore a z analytickej geometrie.',
      theory: [
        `<p><strong>Planimetria:</strong> súčet uhlov v trojuholníku $180^\\circ$, Pytagorova a Euklidove vety, podobnosť trojuholníkov (vety $sss$, $sus$, $uu$),
         obsahy ($S=\\frac{a\\cdot v_a}{2}=\\frac{1}{2}ab\\sin\\gamma$, Herónov vzorec), kruh ($S=\\pi r^2$, $o=2\\pi r$, výsek $\\frac{\\alpha}{360^\\circ}\\pi r^2$), obvodový a stredový uhol.</p>`,
        `<p><strong>Stereometria:</strong> objemy $V=S_pv$ (hranol, valec), $V=\\frac{1}{3}S_pv$ (ihlan, kužeľ), $V=\\frac{4}{3}\\pi r^3$ (guľa); povrchy; vzájomná poloha priamok a rovín,
         uhly a vzdialenosti — vždy hľadáme vhodný pravouhlý trojuholník.</p>`,
        `<p><strong>Analytická geometria:</strong> $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2}$, stred úsečky, vektory a skalárny súčin ($\\vec u\\perp\\vec v \\Leftrightarrow \\vec u\\cdot\\vec v=0$),
         rovnice priamky (parametrická, všeobecná $ax+by+c=0$, smernicová $y=kx+q$), vzdialenosť bodu od priamky, kružnica $(x-m)^2+(y-n)^2=r^2$.</p>`
      ],
      examples: [
        { task: 'Nájdi všeobecnú rovnicu priamky prechádzajúcej bodmi $A[1; 2]$ a $B[4; -4]$.',
          steps: ['Smerový vektor $\\vec{AB}=(3; -6)\\sim(1; -2)$, normálový $(2; 1)$.', '$2x+y+c=0$, dosadíme $A$: $2+2+c=0$, $c=-4$.', '<strong>$2x+y-4=0$</strong>'] },
        { task: 'Valec má objem $72\\pi\\,\\text{cm}^3$ a výšku $8\\,\\text{cm}$. Aký má polomer podstavy?',
          steps: ['$\\pi r^2\\cdot 8=72\\pi \\Rightarrow r^2=9$.', '<strong>$r=3\\,\\text{cm}$</strong>'] }
      ]
    },
    {
      id: 's4-mat-goniometria', order: 950, wanted: ['goniometria'], title: 'Maturita: goniometria a trigonometria',
      summary: 'Zmiešané úlohy z goniometrických funkcií, rovníc a riešenia trojuholníkov.',
      theory: [
        `<p><strong>Goniometrické funkcie:</strong> oblúková miera $180^\\circ=\\pi\\,\\text{rad}$, jednotková kružnica, znamienka v kvadrantoch, hodnoty pre $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$,
         periodicita, párnosť ($\\cos$ párna, $\\sin$ a $\\mathrm{tg}$ nepárne).</p>`,
        `<p><strong>Vzorce:</strong> $\\sin^2 x+\\cos^2 x=1$, $\\mathrm{tg}\\,x=\\frac{\\sin x}{\\cos x}$, $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x$,
         $\\sin(\\pi-x)=\\sin x$, $\\cos(\\pi-x)=-\\cos x$. Goniometrické rovnice: substitúcia, vyňatie pred zátvorku, všeobecné riešenie s $k\\in\\mathbb{Z}$.</p>`,
        `<p><strong>Trigonometria:</strong> v pravouhlom trojuholníku definície $\\sin$, $\\cos$, $\\mathrm{tg}$; vo všeobecnom <strong>sínusová veta</strong>
         $\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2r$ a <strong>kosínusová veta</strong> $c^2=a^2+b^2-2ab\\cos\\gamma$.</p>`
      ],
      examples: [
        { task: 'Trojuholník má strany $a=5$, $b=8$ a uhol $\\gamma=60^\\circ$. Vypočítaj stranu $c$.',
          steps: ['Kosínusová veta: $c^2=25+64-2\\cdot 5\\cdot 8\\cdot\\frac{1}{2}=49$.', '<strong>$c=7$</strong>'] },
        { task: 'Ak $\\cos x=-\\frac{3}{5}$ a $x\\in(\\frac{\\pi}{2}; \\pi)$, vypočítaj $\\sin x$ a $\\mathrm{tg}\\,x$.',
          steps: ['$\\sin^2 x=1-\\frac{9}{25}=\\frac{16}{25}$; v II. kvadrante je sínus kladný: $\\sin x=\\frac{4}{5}$.', '$\\mathrm{tg}\\,x=\\frac{4/5}{-3/5}=-\\frac{4}{3}$.'] }
      ]
    },
    {
      id: 's4-mat-postupnosti', order: 960, wanted: ['postupnosti', 'financna', 'kombinatorika', 'statistika'], title: 'Maturita: postupnosti, kombinatorika a pravdepodobnosť',
      summary: 'Zmiešané úlohy z postupností, finančnej matematiky, kombinatoriky, pravdepodobnosti a štatistiky.',
      theory: [
        `<p><strong>Postupnosti:</strong> aritmetická $a_n=a_1+(n-1)d$, $s_n=\\frac{n}{2}(a_1+a_n)$; geometrická $a_n=a_1q^{n-1}$, $s_n=a_1\\frac{q^n-1}{q-1}$ ($q\\neq 1$);
         nekonečný geometrický rad $s=\\frac{a_1}{1-q}$ pre $|q|&lt;1$.</p>`,
        `<p><strong>Finančná matematika:</strong> zložené úročenie $K_n=K_0\\left(1+\\frac{p}{100}\\right)^n$ (pri dani z úrokov úroková sadzba klesá), pravidelné sporenie a splácanie ako súčet geometrickej postupnosti,
         percentá a promile.</p>`,
        `<p><strong>Kombinatorika a pravdepodobnosť:</strong> variácie, permutácie, kombinácie (aj s opakovaním), $P(A)=\\frac{m}{n}$, opačný jav, nezávislé javy, binomické rozdelenie.
         <strong>Štatistika:</strong> priemer, medián, modus, rozptyl, smerodajná odchýlka, čítanie tabuliek a grafov.</p>`
      ],
      examples: [
        { task: 'Vklad $2\\,000\\,€$ je úročený $3\\,\\%$ ročne (zložené úročenie). Koľko bude na účte po 5 rokoch?',
          steps: ['$K_5=2000\\cdot 1{,}03^5$.', '$1{,}03^5\\approx 1{,}159274$.', '<strong>$K_5\\approx 2\\,318{,}55\\,€$</strong>'] },
        { task: 'V aritmetickej postupnosti je $a_3=7$ a $a_7=19$. Vypočítaj $a_1$ a súčet prvých 10 členov.',
          steps: ['$a_7-a_3=4d=12 \\Rightarrow d=3$, $a_1=a_3-2d=1$.', '$a_{10}=1+9\\cdot 3=28$, $s_{10}=\\frac{10}{2}(1+28)=145$.'] }
      ]
    }
  ];

  REVIEWS.forEach((r) => {
    lesson({ id: r.id, order: r.order, topics: ['maturita'], title: r.title, summary: r.summary, theory: r.theory, examples: r.examples });
    gen(r.id, review(r.wanted));
  });

  lesson({
    id: 's4-mat-komplex', order: 970, topics: ['maturita'], title: 'Maturita: typové úlohy a komplexné príklady',
    summary: 'Viackrokové úlohy, ktoré spájajú viac tém: optimalizácia, financie, postupnosti, analytická geometria, pravdepodobnosť a derivácie.',
    theory: [
      `<p><strong>Ako na komplexnú úlohu:</strong></p>
       <ol><li>Prečítaj zadanie dvakrát a vypíš, čo je dané a čo sa hľadá (aj s jednotkami).</li>
       <li>Urob náčrt alebo tabuľku; pomenuj neznáme.</li>
       <li>Rozdeľ úlohu na menšie kroky — často ide o reťaz známych postupov (napr. „zostav funkciu → zderivuj → nájdi maximum“).</li>
       <li>Over výsledok: dosadením, odhadom rádu, kontrolou podmienok (dĺžka kladná, pravdepodobnosť z $\\langle 0; 1\\rangle$).</li></ol>`,
      `<p><strong>Časté kombinácie tém:</strong> optimalizácia (geometria + derivácie), úrokovanie a sporenie (percentá + geometrická postupnosť + logaritmy),
       trojuholník v súradniciach (vektory + obsah + vzdialenosť), výber skupiny a pravdepodobnosť (kombinácie + opačný jav), dotyčnica ku grafu (derivácia + rovnica priamky).</p>`,
      `<p><strong>Užitočné vzorce naviac:</strong> obsah trojuholníka $ABC$ v súradniciach $S=\\frac{1}{2}\\left|(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)\\right|$,
       dotyčnica $y=f(x_0)+f'(x_0)(x-x_0)$, počet rokov pri úročení $n=\\frac{\\ln(K_n/K_0)}{\\ln(1+p/100)}$.</p>`
    ],
    examples: [
      { task: 'Zo štvorcového plechu so stranou $30\\,\\text{cm}$ odstrihneme v rohoch zhodné štvorce a zahneme otvorenú krabicu. Aký najväčší objem môže mať?',
        steps: ['Pri strane odstrihnutého štvorca $x$: $V(x)=x(30-2x)^2$, $x\\in(0; 15)$.',
          '$V\'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)=0 \\Rightarrow x=5$ (hodnota $15$ nepatrí do intervalu).',
          '<strong>$V(5)=5\\cdot 20^2=2\\,000\\,\\text{cm}^3$</strong>'] },
      { task: 'Za koľko rokov sa vklad pri ročnom úročení $4\\,\\%$ prvýkrát zdvojnásobí?',
        steps: ['Hľadáme najmenšie $n$, pre ktoré $1{,}04^n\\ge 2$.', '$n\\ge\\frac{\\ln 2}{\\ln 1{,}04}\\approx 17{,}67$.', '<strong>Po 18 rokoch.</strong>'] }
    ]
  });

  gen('s4-mat-komplex', () => {
    const t = rnd(0, 6);
    if (t === 0) {
      const k = rnd(1, 5), a = 6 * k, askX = Math.random() < 0.35;
      return {
        answer: askX ? k : 16 * k * k * k,
        q: `Zo štvorcového kartónu so stranou $${a}\\,\\text{cm}$ odstrihneme v rohoch zhodné štvorce a zvyšok zahneme na otvorenú krabicu.
          ${askX ? 'Akú dĺžku (v cm) musí mať strana odstrihnutých štvorcov, aby mala krabica najväčší objem?' : 'Aký najväčší objem (v $\\text{cm}^3$) môže mať krabica?'}`,
        solution: `Pri strane odstrihnutého štvorca $x$ má krabica dno $(${a}-2x)^2$ a výšku $x$: $V(x)=x(${a}-2x)^2$ pre $x\\in(0; ${a / 2})$.
          $V'(x)=(${a}-2x)^2-4x(${a}-2x)=(${a}-2x)(${a}-6x)$, v intervale je nulová len pre $x=${k}$ (tam sa mení znamienko z $+$ na $-$).
          $V(${k})=${k}\\cdot ${a - 2 * k}^2=${16 * k * k * k}\\,\\text{cm}^3$.`,
        hint: 'Vyjadri objem ako funkciu strany odstrihnutého štvorca, zderivuj ju a nájdi stacionárny bod v prípustnom intervale.',
        mistakes: askX
          ? [{ value: a / 2, msg: `Hodnota $${a / 2}$ je síce koreňom $V'(x)$, ale nepatrí do prípustného intervalu: krabica by nemala žiadne dno.` }]
          : [{ value: k, msg: 'To je strana odstrihnutého štvorca. Pýtame sa na objem krabice.' }],
        steps: askX
          ? [{ q: `Objem je $V(x)=x(${a}-2x)^2$. Rozlož deriváciu na súčin $V'(x)=(${a}-2x)(${a}-cx)$. Aké je číslo $c$?`, answer: 6 },
            { q: `Ktorý koreň $V'(x)$ leží v intervale $(0; ${a / 2})$?`, answer: k }]
          : [{ q: `Objem je $V(x)=x(${a}-2x)^2$. Pre ktoré $x$ z intervalu $(0; ${a / 2})$ je $V'(x)=0$?`, answer: k },
            { q: 'Aký je najväčší objem krabice v $\\text{cm}^3$?', answer: 16 * k * k * k }]
      };
    }
    if (t === 1) {
      const K = pick([1000, 2000, 2500, 5000, 10000]), p = pick([2, 2.5, 3, 3.5, 4, 5]), f = 1 + p / 100;
      if (Math.random() < 0.5) {
        const n = rnd(3, 10), res = K * Math.pow(f, n);
        return {
          answer: round(res, 2), tol: 0.011,
          q: `Na účet sme vložili $${ths(String(K))}\\,€$ s ročnou úrokovou sadzbou $${dc(p)}\\,\\%$, úroky sa pripisujú raz ročne a ponechávajú na účte (daň neuvažujeme). Koľko eur bude na účte po ${n} rokoch? Výsledok zaokrúhli na centy.`,
          solution: `Zložené úročenie: $K_{${n}}=K_0\\left(1+\\frac{p}{100}\\right)^{${n}}=${ths(String(K))}\\cdot ${dc(f)}^{${n}}\\approx ${ths(dd(res))}\\,€$. Stav na účte tvorí geometrickú postupnosť s kvocientom $${dc(f)}$.`,
          hint: 'Každý rok sa suma vynásobí číslom $1+\\frac{p}{100}$ — ide o geometrickú postupnosť.',
          mistakes: [{ value: round(K * (1 + n * p / 100), 2), msg: 'Takto by to bolo pri jednoduchom úročení. Úroky ostávajú na účte a ďalší rok sa úročia tiež, suma sa každý rok násobí.' }],
          steps: [
            { q: 'Akým číslom sa suma na účte každý rok vynásobí?', answer: f },
            { q: `Koľko eur bude na účte po ${n} rokoch? Výsledok zaokrúhli na centy.`, answer: round(res, 2), tol: 0.011 }
          ]
        };
      }
      const m = pick([2, 3]);
      let n = 1; while (Math.pow(f, n) < m) n++;
      return {
        answer: n,
        q: `Vklad je úročený ročne sadzbou $${dc(p)}\\,\\%$ (zložené úročenie, bez dane). Po koľkých rokoch sa prvýkrát aspoň ${m === 2 ? 'zdvojnásobí' : 'strojnásobí'}?`,
        solution: `Hľadáme najmenšie prirodzené $n$, pre ktoré $${dc(f)}^n\\ge ${m}$. Logaritmovaním: $n\\ge\\dfrac{\\ln ${m}}{\\ln ${dc(f)}}\\approx ${dd(Math.log(m) / Math.log(f))}$, teda $n=${n}$.`,
        hint: 'Zostav nerovnicu $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ a vyrieš ju logaritmovaním. Výsledok zaokrúhli nahor.',
        mistakes: Math.ceil((m - 1) * 100 / p) !== n ? [{ value: Math.ceil((m - 1) * 100 / p), msg: 'Takto by to bolo pri jednoduchom úročení. Pri zloženom sa úročia aj pripísané úroky, suma sa každý rok násobí.' }] : [],
        steps: [
          { q: `Vypočítaj $\\dfrac{\\ln ${m}}{\\ln ${dc(f)}}$. ${ROUND2}`, answer: round(Math.log(m) / Math.log(f), 2), tol: 0.006 },
          { q: `Po koľkých rokoch sa vklad prvýkrát aspoň ${m === 2 ? 'zdvojnásobí' : 'strojnásobí'}?`, answer: n }
        ]
      };
    }
    if (t === 2) {
      const d = rnd(1, 8), o = 12 * d, askArea = Math.random() < 0.6;
      return {
        answer: askArea ? 6 * d * d : 5 * d,
        q: `Dĺžky strán pravouhlého trojuholníka tvoria aritmetickú postupnosť a jeho obvod je $${o}\\,\\text{cm}$. Vypočítaj ${askArea ? 'jeho obsah v $\\text{cm}^2$' : 'dĺžku prepony v cm'}.`,
        solution: `Strany označíme $a-d$, $a$, $a+d$ (prepona je najdlhšia). Z obvodu $3a=${o}$, teda $a=${4 * d}$.
          Pytagorova veta: $(${4 * d}-d)^2+${4 * d}^2=(${4 * d}+d)^2 \\Rightarrow ${16 * d * d}=${16 * d}d \\Rightarrow d=${d}$.
          Strany sú $${3 * d}$, $${4 * d}$, $${5 * d}$ cm${askArea ? `, obsah $S=\\frac{${3 * d}\\cdot ${4 * d}}{2}=${6 * d * d}\\,\\text{cm}^2$` : `, prepona má $${5 * d}\\,\\text{cm}$`}.`,
        hint: 'Strany zapíš ako $a-d$, $a$, $a+d$. Obvod dá $a$, Pytagorova veta potom diferenciu $d$.',
        mistakes: askArea ? [{ value: 12 * d * d, msg: 'Obsah pravouhlého trojuholníka je polovica súčinu odvesien.' }]
          : [{ value: 4 * d, msg: 'To je prostredná strana. Prepona je najdlhšia strana trojuholníka.' }],
        steps: [
          { q: 'Strany sú $a-d$, $a$, $a+d$. Z obvodu vypočítaj $a$.', answer: 4 * d },
          { q: 'Z Pytagorovej vety vypočítaj diferenciu $d$.', answer: d },
          { q: askArea ? 'Vypočítaj obsah v $\\text{cm}^2$.' : 'Aká dlhá je prepona v cm?', answer: askArea ? 6 * d * d : 5 * d }
        ]
      };
    }
    if (t === 3) {
      let A, B, Cp, det;
      do {
        A = [rnd(-5, 5), rnd(-5, 5)]; B = [rnd(-5, 5), rnd(-5, 5)]; Cp = [rnd(-5, 5), rnd(-5, 5)];
        det = (B[0] - A[0]) * (Cp[1] - A[1]) - (B[1] - A[1]) * (Cp[0] - A[0]);
      } while (det === 0 || (A[0] === B[0] && A[1] === B[1]));
      const S = Math.abs(det) / 2, ab2 = (B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2, vc = 2 * S / Math.sqrt(ab2);
      return {
        type: 'tuple', answer: [S, round(vc, 2)], tol: 0.006, placeholder: 'S; v_c',
        q: `Trojuholník má vrcholy $A[${A[0]}; ${A[1]}]$, $B[${B[0]}; ${B[1]}]$, $C[${Cp[0]}; ${Cp[1]}]$. Vypočítaj jeho obsah $S$ a výšku $v_c$ na stranu $AB$. Zadaj $S$ a $v_c$ (zaokrúhlenú na 2 desatinné miesta) oddelené bodkočiarkou.`,
        solution: `$\\vec{AB}=(${B[0] - A[0]}; ${B[1] - A[1]})$, $\\vec{AC}=(${Cp[0] - A[0]}; ${Cp[1] - A[1]})$.
          $S=\\frac{1}{2}|${B[0] - A[0]}\\cdot ${par(Cp[1] - A[1])}-${par(B[1] - A[1])}\\cdot ${par(Cp[0] - A[0])}|=\\frac{${Math.abs(det)}}{2}=${dc(S)}$.
          $|AB|=\\sqrt{${ab2}}$, z $S=\\frac{|AB|\\cdot v_c}{2}$ je $v_c=\\dfrac{2S}{|AB|}=\\dfrac{${Math.abs(det)}}{\\sqrt{${ab2}}}\\approx ${dd(vc)}$.`,
        hint: 'Obsah vypočítaj z vektorov $\\vec{AB}$ a $\\vec{AC}$ (polovica absolútnej hodnoty determinantu), výšku potom zo vzorca $S=\\frac{c\\cdot v_c}{2}$.',
        mistakes: [{ value: [Math.abs(det), round(2 * vc, 2)], msg: 'Determinant z vektorov $\\vec{AB}$ a $\\vec{AC}$ dáva obsah rovnobežníka. Obsah trojuholníka je jeho polovica.' }],
        steps: [
          { q: 'Vypočítaj determinant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.', answer: det, signed: true },
          { q: 'Vypočítaj obsah $S$.', answer: S },
          { q: 'Vypočítaj $|AB|^2$.', answer: ab2 },
          { q: `Vypočítaj výšku $v_c$. ${ROUND2}`, answer: round(vc, 2), tol: 0.006 }
        ]
      };
    }
    if (t === 4) {
      const b = rnd(4, 10), g = rnd(3, 9), n = b + g, all = C(n, 3), none = C(b, 3);
      return {
        answer: (all - none) / all, tol: 0.00051, show: `${fTxt(all - none, all)} ≈ ${dt((all - none) / all, 3)}`,
        q: `V krúžku je ${b} chlapcov a ${g} ${pl(g, ['dievča', 'dievčatá', 'dievčat'])}. Na súťaž náhodne vyberieme troch členov. Aká je pravdepodobnosť, že medzi nimi bude aspoň jedno dievča? ${PROB}`,
        solution: `Všetkých trojíc je $\\binom{${n}}{3}=${all}$. Opačný jav — vyberú sa len chlapci — má $\\binom{${b}}{3}=${none}$ možností.
          $P=1-\\frac{${none}}{${all}}=\\frac{${all - none}}{${all}}=${fTex(all - none, all)}\\approx ${dd((all - none) / all, 3)}$.`,
        hint: 'Spočítaj trojice kombináciami a využi opačný jav „samí chlapci“.',
        mistakes: [{ value: none / all, msg: 'To je pravdepodobnosť opačného javu, že sa vyberú len chlapci. Odpočítaj ju od jednotky.' }]
          .filter((mk) => Math.abs(mk.value - (all - none) / all) > 0.0006),
        steps: [
          { q: 'Koľko je všetkých trojíc?', answer: all },
          { q: 'Koľko je trojíc, v ktorých sú len chlapci?', answer: none },
          { q: `Aká je pravdepodobnosť, že vo výbere bude aspoň jedno dievča? ${PROB}`, answer: (all - none) / all, tol: 0.00051 }
        ]
      };
    }
    if (t === 5) {
      const b = rnd(-6, 6), c = rnd(-6, 6), x0 = rnd(-3, 3), k = 2 * x0 + b, y0 = x0 * x0 + b * x0 + c, q = y0 - k * x0;
      return {
        type: 'tuple', signed: true, answer: [k, q], placeholder: 'k; q',
        q: `Napíš rovnicu dotyčnice ku grafu funkcie $f(x)=${poly([1, b, c])}$ v bode s $x$-ovou súradnicou $x_0=${x0}$ v tvare $y=kx+q$. Zadaj $k$ a $q$.`,
        solution: `$f(${x0})=${y0}$, $f'(x)=${poly([2, b])}$, $f'(${x0})=${k}$. Dotyčnica: $y=${y0}+${par(k)}(x-${par(x0)})$, teda $y=${poly([k, q])}$.`,
        hint: 'Smernica dotyčnice je $f\'(x_0)$. Dosaď do $y=f(x_0)+f\'(x_0)(x-x_0)$ a uprav.',
        mistakes: y0 !== q ? [{ value: [k, y0], msg: `Číslo $f(${x0})$ nie je absolútny člen $q$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a roznásob zátvorku.` }] : [],
        steps: [
          { q: `Vypočítaj $f(${x0})$.`, answer: y0, signed: true },
          { q: `Vypočítaj smernicu $k=f'(${x0})$.`, answer: k, signed: true },
          { q: 'Vypočítaj absolútny člen $q$.', answer: q, signed: true }
        ]
      };
    }
    const a1 = rnd(1, 10), d = rnd(2, 6), T = rnd(100, 600);
    let n = 1; while (n * (2 * a1 + (n - 1) * d) / 2 < T) n++;
    const sn = n * (2 * a1 + (n - 1) * d) / 2, sp = (n - 1) * (2 * a1 + (n - 2) * d) / 2;
    return {
      answer: n,
      q: `Hľadisko letného amfiteátra má v prvom rade ${a1} ${pl(a1, ['sedadlo', 'sedadlá', 'sedadiel'])} a každý ďalší rad má o ${d} ${pl(d, ['sedadlo', 'sedadlá', 'sedadiel'])} viac. Koľko radov treba najmenej postaviť, aby bolo spolu aspoň ${T} sedadiel?`,
      solution: `Počty sedadiel tvoria aritmetickú postupnosť s $a_1=${a1}$, $d=${d}$. Súčet $s_n=\\frac{n}{2}\\big(2\\cdot ${a1}+(n-1)\\cdot ${d}\\big)\\ge ${T}$ vedie na kvadratickú nerovnicu
        $${poly([d, 2 * a1 - d, -2 * T], 'n')}\\ge 0$. Kladný koreň je približne $${dd((-(2 * a1 - d) + Math.sqrt((2 * a1 - d) ** 2 + 8 * d * T)) / (2 * d))}$, preto $n=${n}$.
        Kontrola: $s_{${n - 1}}=${sp}$, $s_{${n}}=${sn}$.`,
      hint: 'Zapíš súčet prvých $n$ členov aritmetickej postupnosti a vyrieš nerovnicu $s_n\\ge$ požadovaný počet. Hľadáš najmenšie prirodzené $n$.'
    };
  });
})();
