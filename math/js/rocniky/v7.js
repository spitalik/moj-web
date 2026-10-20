/* Vysoká škola: Numerická matematika (úroveň v7).
   Chyby a presnosť výpočtov, numerické riešenie rovníc, interpolácia a metóda najmenších štvorcov,
   numerická derivácia a integrácia, numerické riešenie diferenciálnych rovníc a maticové algoritmy.
   Všetky výsledky v úlohách počíta kód (rovnakými vzorcami, aké sú v riešení). */
(function () {
  'use strict';

  const { rnd, pick } = EXERCISES.util;
  const { plane, axes, curvePath, svg, n1, sk } = FIGURES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v7' }, l));
  // odpovede sú už zaokrúhlené na požadovaný počet miest; zobrazíme ich celé (fmt by krátil na 3 miesta)
  const gen = (id, fn) => EXERCISES.register(id, () => {
    const e = fn(), txt = (v) => String(v).replace('.', CONTENT_I18N.decimal());
    if (!e.show && (!e.type || e.type === 'num') && !Number.isInteger(e.answer)) e.show = txt(e.answer);
    if (!e.show && e.type === 'tuple') e.show = e.answer.map(txt).join('; ');
    return e;
  });
  const fig = FIGURES.register;

  /* ---------- čísla a zápis ---------- */

  const round = (x, d) => { const f = Math.pow(10, d); return Math.sign(x) * Math.round(Math.abs(x) * f + 1e-9) / f; };
  const dsep = () => (CONTENT_I18N.decimal() === ',' ? '{,}' : '.');         // desatinný oddeľovač v KaTeXe
  const nm = (x, d = 4) => String(round(x, d) || 0).replace('.', dsep());     // KaTeX, bez koncových núl
  const nt = (x, d = 4) => String(round(x, d) || 0).replace('.', CONTENT_I18N.decimal()); // obyčajný text
  const dd = (x, d = 4) => (round(x, d) || 0).toFixed(d).replace('.', dsep()); // KaTeX, pevný počet miest
  const par = (s) => (String(s).startsWith('-') ? `(${s})` : s);
  const pn = (x, d = 4) => par(nm(x, d));                                     // záporné číslo v zátvorke
  const sum = (a) => a.reduce((s, v) => s + v, 0);
  // „Výsledok zaokrúhli na 4 desatinné miesta.“ – správny tvar podľa počtu
  const R = (d) => T`Výsledok zaokrúhli na ${d} ${d === 1 ? 'desatinné miesto' : d <= 4 ? 'desatinné miesta' : 'desatinných miest'}.`;
  // člen v zápise funkcie: " + 3x", " - 2"
  const tm = (c, v = '') => (c === 0 ? '' : ` ${c > 0 ? '+' : '-'} ${Math.abs(c) === 1 && v ? '' : nm(Math.abs(c))}${v}`);
  const vec = (a, d = 4) => `(${a.map((v) => nm(v, d)).join(';\\ ')})`;

  /* ======================= 1. CHYBY A PRESNOSŤ ======================= */

  lesson({
    id: 'v7-chyby', order: 10, title: 'Chyby a presnosť výpočtov',
    summary: 'Absolútna a relatívna chyba, platné cifry, strojové čísla a strojové epsilon, šírenie chýb, podmienenosť úlohy a strata presnosti pri odčítaní.',
    theory: [
      `<p>Výsledok numerického výpočtu je takmer vždy len <strong>približný</strong>. Chyby pochádzajú z niekoľkých zdrojov: z <em>modelu</em>
       (zjednodušený popis skutočnosti), zo <em>vstupných dát</em> (merania), z <em>metódy</em> (nekonečný proces, napríklad rad alebo limitu, nahradíme konečným — chyba
       metódy alebo diskretizácie) a zo <em>zaokrúhľovania</em> pri počítaní s konečným počtom cifier.</p>
       <p>Ak $x$ je presná hodnota a $\\tilde{x}$ jej aproximácia, potom <strong>absolútna chyba</strong> je $\\Delta = |x-\\tilde{x}|$ a <strong>relatívna chyba</strong>
       $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$ (pre $x\\neq 0$), často v percentách. Presnú hodnotu spravidla nepoznáme, preto pracujeme s <em>odhadom</em> (hranicou) chyby:
       číslo $\\varepsilon$, pre ktoré $|x-\\tilde{x}|\\le\\varepsilon$, a píšeme $x=\\tilde{x}\\pm\\varepsilon$. Relatívna chyba je dôležitejšia, lebo nezávisí od jednotiek:
       chyba 1 mm je zanedbateľná pri dĺžke mosta, ale obrovská pri hrúbke plechu.</p>`,
      `<p><strong>Platné cifry.</strong> Cifra aproximácie $\\tilde{x}$ na mieste rádu $10^{-k}$ je <em>platná</em> (spoľahlivá), ak $|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$.
       Počet platných cifier rátame od prvej nenulovej cifry zľava po poslednú platnú. Napríklad $\\tilde{x}=23{,}4718$ s chybou nanajvýš $0{,}004$ má platné dve desatinné miesta
       ($0{,}004\\le 0{,}005$), teda štyri platné cifry 2, 3, 4, 7. <strong>Zaokrúhlenie</strong> na $k$ desatinných miest spôsobí chybu nanajvýš $\\frac{1}{2}\\cdot 10^{-k}$,
       správne zaokrúhlené číslo má teda všetky zapísané cifry platné.</p>`,
      `<p><strong>Strojové čísla.</strong> Počítač ukladá reálne čísla v tvare s pohyblivou rádovou čiarkou $\\pm m\\cdot\\beta^{e}$, kde $\\beta$ je základ, mantisa $m$ má pevný počet
       $t$ cifier a exponent $e$ leží v obmedzenom rozsahu. Štandard IEEE 754 v dvojnásobnej presnosti (double) používa $\\beta=2$, $t=53$ bitov mantisy a exponenty
       približne od $-1022$ do $1023$. Množina strojových čísel je konečná, mimo nej nastáva <em>pretečenie</em> (príliš veľké číslo) alebo <em>podtečenie</em> (príliš malé).</p>
       <p><strong>Strojové epsilon</strong> $\\varepsilon_M$ je vzdialenosť čísla 1 od najbližšieho väčšieho strojového čísla; pre double $\\varepsilon_M=2^{-52}\\approx 2{,}22\\cdot 10^{-16}$.
       Zaokrúhlením reálneho čísla na strojové vznikne $\\mathrm{fl}(x)=x(1+\\eta)$, kde $|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$ (jednotková zaokrúhľovacia chyba).
       Double teda nesie asi 15 až 16 platných dekadických cifier. Ani číslo $0{,}1$ nemá v dvojkovej sústave konečný zápis, preto napríklad $0{,}1+0{,}2$ nie je presne $0{,}3$.</p>`,
      `<p><strong>Šírenie chýb.</strong> Pre odhady chýb vstupov platí (v lineárnom priblížení):
       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$
       Pre funkciu $y=f(x)$ je $\\Delta y\\approx|f'(x)|\\,\\Delta x$, pre funkciu viacerých premenných $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$.
       Pri sčítaní sa teda sčítavajú absolútne chyby, pri násobení a delení relatívne.</p>
       <p><strong>Podmienenosť.</strong> Úloha je <em>dobre podmienená</em>, ak malá relatívna zmena vstupu spôsobí malú relatívnu zmenu výsledku. Mierou je
       <strong>číslo podmienenosti</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, pre ktoré $\\delta y\\approx\\kappa\\,\\delta x$. Napríklad $f(x)=\\ln x$ má $\\kappa=\\frac{1}{|\\ln x|}$,
       čo je pri $x$ blízko 1 veľké číslo: logaritmus čísla blízkeho jednej je zle podmienená úloha. Podmienenosť je vlastnosť <em>úlohy</em>, kým <em>stabilita</em> je vlastnosť
       <em>algoritmu</em> — stabilný algoritmus nezväčšuje zaokrúhľovacie chyby viac, než zodpovedá podmienenosti úlohy.</p>`,
      `<p><strong>Strata presnosti pri odčítaní.</strong> Rozdiel dvoch blízkych čísel je zle podmienený: $\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$, a menovateľ je malý.
       Spoločné úvodné cifry sa odčítaním zrušia a zvyšné cifry sú zaťažené chybou (tzv. <em>katastrofické krátenie</em>). Pomôže algebraická úprava, ktorá odčítanie odstráni:
       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>`
    ],
    examples: [
      { task: 'Číslo $\\pi$ nahradíme hodnotou $3{,}14$. Určte absolútnu a relatívnu chybu a počet platných cifier aproximácie.',
        steps: ['$\\Delta=|\\pi-3{,}14|=|3{,}14159\\ldots-3{,}14|\\approx 0{,}00159$.',
          '$\\delta=\\frac{0{,}00159}{3{,}14159}\\approx 0{,}000507=0{,}0507\\,\\%$.',
          'Keďže $0{,}00159\\le 0{,}005=\\frac{1}{2}\\cdot 10^{-2}$, sú platné dve desatinné miesta. Aproximácia $3{,}14$ má <strong>3 platné cifry</strong>.'] },
      { task: 'Menší koreň rovnice $x^2-200x+1=0$ je $x=100-\\sqrt{9999}$. Vypočítajte ho v aritmetike so 4 platnými ciframi priamo a po úprave, ktorá odstráni odčítanie.',
        steps: ['Na 4 platné cifry je $\\sqrt{9999}=99{,}99499\\ldots\\approx 100{,}0$. Priamy výpočet dá $100-100{,}0=0$ — všetky cifry sa stratili, relatívna chyba je 100 %.',
          'Rozšírime výraz: $100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$.',
          'Teraz $\\frac{1}{100+100{,}0}=\\frac{1}{200{,}0}=0{,}005000$. Presná hodnota je $0{,}0050001250\\ldots$, takže výsledok má všetky 4 cifry platné.',
          'Úloha sama je dobre podmienená, zlý bol len algoritmus (odčítanie blízkych čísel).'] }
    ]
  });

  gen('v7-chyby', () => {
    const t = Math.random();
    if (t < 0.22) {
      const C = pick([
        ['\\pi', Math.PI, [['3{,}14', 3.14], ['3{,}142', 3.142], ['\\frac{22}{7}', 22 / 7], ['3{,}1', 3.1]]],
        ['e', Math.E, [['2{,}72', 2.72], ['2{,}7', 2.7], ['2{,}718', 2.718]]],
        ['\\sqrt{2}', Math.SQRT2, [['1{,}41', 1.41], ['1{,}4', 1.4], ['1{,}414', 1.414]]],
        ['\\sqrt{3}', Math.sqrt(3), [['1{,}73', 1.73], ['1{,}7', 1.7], ['1{,}732', 1.732]]],
        ['\\ln 2', Math.LN2, [['0{,}69', 0.69], ['0{,}7', 0.7], ['0{,}693', 0.693]]]
      ]);
      const [tex, x] = C, [at, a] = pick(C[2]);
      const D = Math.abs(x - a), rel = D / Math.abs(x) * 100;
      if (Math.random() < 0.35) {
        return {
          mistakes: [{ value: round(D / Math.abs(x), 6), msg: T.s('Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.') }],
          answer: round(D, 6), tol: 0.0000011,
          q: T`Číslo $${tex}$ nahradíme aproximáciou $${at}$. Aká je absolútna chyba tejto aproximácie? ${R(6)}`,
          solution: T`$${tex}\\approx ${nm(x, 8)}$, teda $\\Delta=|${tex}-${at}|\\approx ${dd(D, 6)}$.`,
          hint: T.s('Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).')
        };
      }
      return {
        mistakes: Math.abs(round(D, 3) - round(rel, 3)) > 0.0011 ? [{ value: round(D, 3), msg: T.s('Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).') }] : [],
        steps: [
          { q: T`Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. ${R(6)}`, answer: round(D, 6), tol: 0.0000011, show: nt(D, 6) },
          { q: T`Aká je relatívna chyba v percentách? ${R(3)}`, answer: round(rel, 3), tol: 0.0011, show: nt(rel, 3) }
        ],
        answer: round(rel, 3), tol: 0.0011,
        q: T`Číslo $${tex}$ nahradíme aproximáciou $${at}$. Aká je relatívna chyba v percentách? ${R(3)}`,
        solution: T`$${tex}\\approx ${nm(x, 8)}$, absolútna chyba $\\Delta\\approx ${nm(D, 7)}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|${tex}|}\\approx\\frac{${nm(D, 7)}}{${nm(x, 6)}}\\approx ${nm(rel / 100, 7)}$, teda približne $${dd(rel, 3)}\\,\\%$.`,
        hint: T.s('Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.')
      };
    }
    if (t < 0.42) {
      const a = rnd(50, 250) / 10, b = rnd(30, 200) / 10, e = pick([0.05, 0.1, 0.02]);
      if (Math.random() < 0.5) {
        const dS = b * e + a * e;
        return {
          mistakes: [
            { value: round(e * e, 3), msg: T.s('Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.') },
            { value: round(b * e, 3), msg: T.s('Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.') }
          ],
          steps: [
            { q: T`Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. ${R(3)}`, answer: round(b * e, 3), tol: 0.0011, show: nt(b * e, 3) },
            { q: T`Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. ${R(3)}`, answer: round(a * e, 3), tol: 0.0011, show: nt(a * e, 3) },
            { q: T`Aká je hranica absolútnej chyby obsahu? ${R(3)}`, answer: round(dS, 3), tol: 0.0011, show: nt(dS, 3) }
          ],
          answer: round(dS, 3), tol: 0.0011,
          q: T`Strany obdĺžnika sme namerali s presnosťou $\\pm ${nm(e)}$ cm: $a=${nm(a)}$ cm a $b=${nm(b)}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. ${R(3)}`,
          solution: T`$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b=${nm(b)}\\cdot ${nm(e)}+${nm(a)}\\cdot ${nm(e)}=${nm(dS, 4)}$ cm².`,
          hint: T.s('Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.')
        };
      }
      const n = pick([2, 3, 3, 4]), x = rnd(15, 90) / 10, dx = pick([0.01, 0.02, 0.05]);
      const rel = n * dx / x * 100;
      return {
        mistakes: [{ value: round(dx / x * 100, 3), msg: T`Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom $${n}$.` }],
        steps: [
          { q: T`Vypočítaj relatívnu chybu $x$ v percentách. ${R(3)}`, answer: round(dx / x * 100, 3), tol: 0.0011, show: nt(dx / x * 100, 3) },
          { q: T`Aká je relatívna chyba $x^{${n}}$ v percentách? ${R(3)}`, answer: round(rel, 3), tol: 0.0011, show: nt(rel, 3) }
        ],
        answer: round(rel, 3), tol: 0.0011,
        q: T`Hodnota $x=${nm(x)}\\pm ${nm(dx)}$. Odhadni relatívnu chybu výrazu $x^{${n}}$ v percentách. ${R(3)}`,
        solution: T`$\\delta x=\\frac{${nm(dx)}}{${nm(x)}}\\approx ${nm(dx / x, 6)}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{${n}})\\approx ${n}\\,\\delta x\\approx ${nm(n * dx / x, 6)}$, teda asi $${dd(rel, 3)}\\,\\%$.`,
        hint: T.s('Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.')
      };
    }
    if (t < 0.6) {
      const m = pick([1, 2, 3]);
      const [eps, k] = pick([[0.0004, 3], [0.003, 2], [0.02, 1], [0.00004, 4], [0.04, 1], [0.2, 0], [0.0002, 3], [0.001, 2]]);
      let s = String(rnd(1, 9));
      for (let i = 1; i < m; i++) s += rnd(0, 9);
      s += ',';
      for (let i = 0; i < 5; i++) s += rnd(0, 9);
      const half = 0.5 * Math.pow(10, -k);
      return {
        mistakes: k > 0 ? [{ value: k, msg: T.s('Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.') }] : [],
        steps: [
          { q: T.s('Koľko desatinných miest je platných?'), answer: k, hint: T.s('Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.') },
          { q: T.s('Koľko platných cifier má aproximácia celkovo?'), answer: m + k }
        ],
        answer: m + k,
        q: T`Aproximácia $\\tilde{x}=${s.replace(',', dsep())}$ má absolútnu chybu nanajvýš $${nm(eps, 6)}$. Koľko má platných cifier?`,
        solution: T`Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí $${nm(eps, 6)}\\le ${nm(half, 6)}=\\frac{1}{2}\\cdot 10^{${-k}}$${k < 4 ? T`, ale $${nm(eps, 6)}&gt;${nm(half / 10, 6)}$` : ''}, preto ${k === 0 ? T.s('nie je platné žiadne desatinné miesto') : k === 1 ? T.s('je platné 1 desatinné miesto') : T`sú platné ${k} desatinné miesta`}.
          Spolu s ${m} ${m === 1 ? 'cifrou' : 'ciframi'} pred desatinnou čiarkou ${m + k === 1 ? T.s('je to <strong>1</strong> platná cifra') : m + k <= 4 ? T`sú to <strong>${m + k}</strong> platné cifry` : T`je to <strong>${m + k}</strong> platných cifier`}.`,
        hint: T.s('Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.')
      };
    }
    if (t < 0.8) {
      const kind = rnd(0, 2);
      if (kind === 0) {
        const x = pick([1.01, 1.02, 1.05, 1.1, 0.9, 0.95, 2, 3, 0.5]);
        const k = 1 / Math.abs(Math.log(x));
        return {
          mistakes: [{ value: round(k / x, 3), msg: T.s('Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f\'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f\'(x)}{f(x)}\\right|$.') }],
          answer: round(k, 3), tol: 0.0011,
          q: T`Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x=${nm(x)}$. ${R(3)}`,
          solution: T`$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln ${nm(x)}|}=\\frac{1}{${nm(Math.abs(Math.log(x)), 6)}}\\approx ${dd(k, 3)}$.
            ${k > 5 ? T`Relatívna chyba vstupu sa teda zväčší asi ${nt(k, 1)}-krát — úloha je zle podmienená.` : ''}`,
          hint: T.s('Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.')
        };
      }
      if (kind === 1) {
        const c = rnd(1, 5), d = pick([0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1]), x = c + d;
        const k = Math.abs(x / (x - c));
        return {
          mistakes: [{ value: round(1 / d, 3), msg: T.s('Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f\'(x)}{f(x)}\\right|$.') }],
          answer: round(k, 3), tol: 0.0011,
          q: T`Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-${c}$ v bode $x=${nm(x)}$. ${R(3)}`,
          solution: T`$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-${c}}\\right|=\\frac{${nm(x)}}{${nm(d)}}=${nm(k, 3)}$. Odčítanie blízkych čísel je zle podmienené.`,
          hint: T.s('Dosaď do $\\kappa=\\left|\\frac{x f\'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.')
        };
      }
      const x = pick([3, 3.1, 3.12, 3.13, 3.05, 3.2]);
      const k = Math.abs(x * Math.cos(x) / Math.sin(x));
      return {
        mistakes: [{ value: round(Math.abs(Math.cos(x) / Math.sin(x)), 3), msg: T.s('Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.') }],
        answer: round(k, 3), tol: 0.0011,
        q: T`Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x=${nm(x)}$ (v radiánoch). ${R(3)}`,
        solution: T`$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{${nm(x)}\\cdot(${nm(Math.cos(x), 6)})}{${nm(Math.sin(x), 6)}}\\right|\\approx ${dd(k, 3)}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.`,
        hint: T.s('Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.')
      };
    }
    const x = 100 * rnd(10, 500), v = 1 / (Math.sqrt(x + 1) + Math.sqrt(x)), sS = Math.sqrt(x + 1) + Math.sqrt(x);
    return {
      steps: [
        { q: T`Vypočítaj menovateľ $\\sqrt{${x + 1}}+\\sqrt{${x}}$. ${R(6)}`, answer: round(sS, 6), tol: 0.0000011, show: nt(sS, 6) },
        { q: T`Vypočítaj $\\frac{1}{\\sqrt{${x + 1}}+\\sqrt{${x}}}$. ${R(7)}`, answer: round(v, 7), tol: 0.00000011, show: nt(v, 7) }
      ],
      answer: round(v, 7), tol: 0.00000011,
      q: T`Vypočítaj $\\sqrt{${x + 1}}-\\sqrt{${x}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). ${R(7)}`,
      solution: T`Rozšírime výraz súčtom odmocnín: $\\sqrt{${x + 1}}-\\sqrt{${x}}=\\frac{1}{\\sqrt{${x + 1}}+\\sqrt{${x}}}\\approx\\frac{1}{${nm(Math.sqrt(x + 1), 6)}+${nm(Math.sqrt(x), 6)}}\\approx ${dd(v, 7)}$.`,
      hint: T.s('Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.')
    };
  });

  /* ======================= 2. RIEŠENIE ROVNÍC ======================= */

  fig('v7-newton', {
    controls: [
      { id: 'x0', label: 'Štart x₀', min: 0.6, max: 4, step: 0.1, value: 3.6 },
      { id: 'k', label: 'Počet krokov', min: 1, max: 4, step: 1, value: 2 }
    ],
    draw: (v) => {
      const p = plane(-0.3, 4.4, -3, 16, 420, 320);
      const f = (x) => x * x - 2, df = (x) => 2 * x;
      const xs = [v.x0];
      for (let i = 0; i < v.k; i++) { const x = xs[i]; xs.push(x - f(x) / df(x)); }
      let steps = '';
      for (let i = 0; i < v.k; i++) {
        const a = xs[i], b = xs[i + 1];
        steps += `<line class="f-dash" x1="${n1(p.X(a))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(a))}" y2="${n1(p.Y(f(a)))}"/>
          <line class="f-accent" x1="${n1(p.X(a))}" y1="${n1(p.Y(f(a)))}" x2="${n1(p.X(b))}" y2="${n1(p.Y(0))}"/>
          <circle class="f-dot" cx="${n1(p.X(a))}" cy="${n1(p.Y(f(a)))}" r="4"/>`;
      }
      const last = xs[xs.length - 1];
      const clipped = `<path class="f-line" d="${curvePath(p, f)}"/>${steps}
        <circle class="f-dot f-dot-ok" cx="${n1(p.X(last))}" cy="${n1(p.Y(0))}" r="5"/>`;
      return {
        svg: svg(p, axes(p, 1, 4), clipped, '', 'Newtonova metóda: dotyčnice ku grafu y = x² − 2'),
        readout: xs.map((x, i) => `x${'₀₁₂₃₄'[i]} = ${sk(x, 6)}`).join(' · ')
          + T` · <span class="c-ok">chyba |x${'₀₁₂₃₄'[v.k]} − √2| = ${Math.abs(last - Math.SQRT2).toExponential(1).replace('.', CONTENT_I18N.decimal())}</span>`
      };
    }
  });

  lesson({
    id: 'v7-rovnice', order: 20, title: 'Numerické riešenie rovníc',
    summary: 'Separácia koreňa, metóda bisekcie, prostá iterácia, Newtonova metóda a metóda sečníc, rád konvergencie a zastavovacie kritériá.',
    theory: [
      `<p>Hľadáme koreň $\\xi$ rovnice $f(x)=0$, ktorý sa nedá vyjadriť vzorcom (napríklad $x=\\cos x$ alebo $x^5-x-1=0$). Najprv koreň <strong>separujeme</strong> — nájdeme interval
       $[a, b]$, v ktorom leží práve jeden koreň. Podľa <strong>Bolzanovej vety</strong> má spojitá funkcia s $f(a)\\,f(b)&lt;0$ v intervale $(a, b)$ aspoň jeden koreň; ak navyše
       $f'$ nemení na $[a, b]$ znamienko, koreň je jediný.</p>
       <p><strong>Metóda bisekcie (polenia intervalu).</strong> Vypočítame stred $c=\\frac{a+b}{2}$. Ak $f(a)\\,f(c)&lt;0$, pokračujeme s $[a, c]$, inak s $[c, b]$. Každý krok
       interval rozpolí, po $n$ krokoch má dĺžku $\\frac{b-a}{2^n}$. Na dosiahnutie dĺžky nanajvýš $\\varepsilon$ treba $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ krokov.
       Metóda je pomalá, ale <em>vždy</em> konverguje a potrebuje iba znamienka hodnôt funkcie.</p>`,
      `<p><strong>Metóda prostej iterácie.</strong> Rovnicu prepíšeme do tvaru $x=g(x)$ a počítame $x_{k+1}=g(x_k)$. Ak $g$ zobrazuje interval $I$ do seba a
       $|g'(x)|\\le q&lt;1$ na $I$, potom má $g$ v $I$ jediný <em>pevný bod</em> $\\xi$ a postupnosť k nemu konverguje pre každý štart $x_0\\in I$ (Banachova veta o pevnom bode).
       Platia odhady
       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$
       Voľba tvaru je dôležitá: rovnicu $x^2-2=0$ možno písať ako $x=\\frac{2}{x}$ (iterácie oscilujú, $|g'(\\sqrt{2})|=1$) alebo $x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$ (veľmi rýchla konvergencia).</p>`,
      `<p><strong>Newtonova metóda (metóda dotyčníc).</strong> Graf funkcie v bode $x_k$ nahradíme dotyčnicou a za ďalšiu aproximáciu vezmeme jej priesečník s osou $x$:
       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$
       Pri jednoduchom koreni ($f'(\\xi)\\neq 0$) a štarte dosť blízko koreňa konverguje <strong>kvadraticky</strong>: $|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$,
       počet platných cifier sa v každom kroku zhruba zdvojnásobí. <em>Fourierova podmienka:</em> ak $f'$ a $f''$ nemenia na $[a, b]$ znamienko a štartujeme v krajnom bode,
       kde $f(x_0)\\,f''(x_0)&gt;0$, iterácie konvergujú monotónne. Zo zlého štartu môže metóda odskočiť ďaleko; pri násobnom koreni konverguje iba lineárne.</p>`,
      { fig: 'v7-newton', caption: 'Newtonova metóda pre $f(x)=x^2-2$: z bodu $[x_k; f(x_k)]$ vedieme dotyčnicu a jej priesečník s osou $x$ je $x_{k+1}$. Už po troch krokoch má aproximácia $\\sqrt{2}$ chybu rádovo $10^{-6}$ až $10^{-12}$.' },
      `<p><strong>Metóda sečníc</strong> nahradí deriváciu podielom diferencií z posledných dvoch aproximácií:
       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
       Nepotrebuje deriváciu a konverguje s rádom $\\frac{1+\\sqrt{5}}{2}\\approx 1{,}618$. Ak sečnicu vždy vedieme cez body s opačnými znamienkami (ako pri bisekcii),
       dostaneme <em>regula falsi</em>, ktorá vždy konverguje, ale obvykle len lineárne.</p>
       <p><strong>Rád konvergencie.</strong> Metóda má rád $p$, ak $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$; pre $p=1$ (lineárna konvergencia) musí byť $C&lt;1$. Bisekcia a prostá iterácia
       sú rádu 1, sečnice rádu $1{,}618$, Newtonova metóda rádu 2. <strong>Zastavovacie kritériá:</strong> $|x_{k+1}-x_k|&lt;\\varepsilon$, relatívne $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$,
       $|f(x_k)|&lt;\\delta$ a vždy aj maximálny počet iterácií. Malé $|f(x_k)|$ samo nezaručuje blízkosť koreňa, ak je funkcia veľmi plochá.</p>`
    ],
    examples: [
      { task: 'Newtonovou metódou nájdite $\\sqrt{5}$ ako koreň funkcie $f(x)=x^2-5$, začnite v bode $x_0=2$ a urobte dva kroky.',
        steps: ['$f\'(x)=2x$, takže $x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$.',
          '$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2{,}25$.',
          '$x_2=2{,}25-\\frac{2{,}25^2-5}{4{,}5}=2{,}25-\\frac{0{,}0625}{4{,}5}\\approx 2{,}236111$.',
          'Presne $\\sqrt{5}=2{,}236068\\ldots$: chyba klesla z $0{,}014$ na $0{,}00004$, čo zodpovedá kvadratickej konvergencii.'] },
      { task: 'Bisekciou lokalizujte koreň rovnice $x^3-x-1=0$ na intervale $[1; 2]$ (tri kroky). Koľko krokov by bolo treba na interval dĺžky nanajvýš $10^{-6}$?',
        steps: ['$f(1)=-1&lt;0$, $f(2)=5&gt;0$, koreň leží v $[1; 2]$.',
          '$f(1{,}5)=0{,}875&gt;0$ → $[1; 1{,}5]$. $f(1{,}25)\\approx-0{,}297&lt;0$ → $[1{,}25; 1{,}5]$. $f(1{,}375)\\approx 0{,}225&gt;0$ → $[1{,}25; 1{,}375]$.',
          'Po $n$ krokoch má interval dĺžku $2^{-n}$. Podmienka $2^{-n}\\le 10^{-6}$ dáva $n\\ge 6\\log_2 10\\approx 19{,}93$, teda <strong>20 krokov</strong>.',
          'Koreň je $\\xi\\approx 1{,}3247$; Newtonova metóda by rovnakú presnosť dosiahla za 4 až 5 krokov.'] }
    ]
  });

  gen('v7-rovnice', () => {
    const t = Math.random();
    if (t < 0.17) {
      let a;
      do { a = rnd(2, 60); } while (Number.isInteger(Math.sqrt(a)));
      const x0 = Math.ceil(Math.sqrt(a)) + rnd(0, 1), x1 = 0.5 * (x0 + a / x0);
      const wPlus = x0 + (x0 * x0 - a) / (2 * x0), wDer = a / x0;
      return {
        mistakes: [
          { value: round(wPlus, 4), msg: T.s('Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f\'(x_0)}$; zlomok sa odčítava, nie pripočítava.') },
          ...(Math.abs(round(wDer, 4) - round(x1, 4)) > 0.0001 ? [{ value: round(wDer, 4), msg: T.s('Derivácia $x^2 - a$ je $2x$, nie $x$.') }] : [])
        ],
        steps: [
          { q: T`Vypočítaj $f(x_0)$.`, answer: x0 * x0 - a, signed: true },
          { q: T`Vypočítaj $f'(x_0)$.`, answer: 2 * x0 },
          { q: T`Vypočítaj $x_1$. ${R(4)}`, answer: round(x1, 4), tol: 0.0001, show: nt(x1, 4) }
        ],
        answer: round(x1, 4), tol: 0.0001,
        q: T`Newtonovou metódou hľadáme $\\sqrt{${a}}$ ako koreň funkcie $f(x)=x^2-${a}$. Vypočítaj $x_1$ zo štartu $x_0=${x0}$. ${R(4)}`,
        solution: T`$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-${a}}{2x_0}=${x0}-\\frac{${x0 * x0 - a}}{${2 * x0}}\\approx ${dd(x1, 4)}$. (Presne $\\sqrt{${a}}\\approx ${nm(Math.sqrt(a), 6)}$.)`,
        hint: T.s('Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f\'(x_0)}$.')
      };
    }
    if (t < 0.34) {
      const pp = rnd(1, 6), q = rnd(2, 25), x0 = rnd(1, 3);
      const f = x0 ** 3 + pp * x0 - q, d = 3 * x0 * x0 + pp, x1 = x0 - f / d;
      return {
        mistakes: f !== 0 ? [{ value: round(x0 + f / d, 4), msg: T.s('Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f\'(x_0)}$; zlomok sa odčítava, nie pripočítava.') }] : [],
        steps: [
          { q: T.s('Vypočítaj $f(x_0)$.'), answer: f, signed: true },
          { q: T.s("Vypočítaj $f'(x_0)$."), answer: d },
          { q: T`Vypočítaj $x_1$. ${R(4)}`, answer: round(x1, 4), tol: 0.0001, show: nt(x1, 4), signed: x1 < 0 }
        ],
        signed: x1 < 0,
        answer: round(x1, 4), tol: 0.0001,
        q: T`Urob jeden krok Newtonovej metódy pre rovnicu $x^3${tm(pp, 'x')}-${q}=0$ so štartom $x_0=${x0}$. ${R(4)}`,
        solution: T`$f(x)=x^3${tm(pp, 'x')}-${q}$, $f'(x)=3x^2${tm(pp)}$. $f(${x0})=${f}$, $f'(${x0})=${d}$. $x_1=${x0}-\\frac{${f}}{${d}}\\approx ${dd(x1, 4)}$.`,
        hint: T.s('Vypočítaj $f(x_0)$ a $f\'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f\'(x_0)}$.')
      };
    }
    if (t < 0.52) {
      let a, m;
      do { a = rnd(3, 90); m = Math.floor(Math.sqrt(a)); } while (m * m === a);
      let lo = m, hi = m + 1;
      const rows = [], after = [];
      for (let i = 0; i < 2; i++) {
        const c = (lo + hi) / 2, fc = c * c - a;
        rows.push(`$f(${nm(c)})=${nm(fc, 4)}${fc > 0 ? '&gt;' : '&lt;'}0$ → $[${nm(fc > 0 ? lo : c)};\\ ${nm(fc > 0 ? c : hi)}]$`);
        if (fc > 0) hi = c; else lo = c;
        after.push([lo, hi]);
      }
      // typická chyba: ponechaná polovica, na ktorej koncoch má f rovnaké znamienko
      let wl = m, wh = m + 1;
      for (let i = 0; i < 2; i++) { const c = (wl + wh) / 2; if (c * c - a > 0) wl = c; else wh = c; }
      return {
        mistakes: [{ value: [wl, wh], msg: T.s('Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.') }],
        steps: [
          { q: T`Vypočítaj $f$ v strede intervalu, teda $f(${nm(m + 0.5)})$. ${R(4)}`, answer: round((m + 0.5) ** 2 - a, 4), tol: 0.0001, show: nt((m + 0.5) ** 2 - a, 4), signed: true },
          { q: T.s('Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)'), type: 'tuple', answer: after[0], tol: 1e-9, show: after[0].map((v) => nt(v)).join('; ') },
          { q: T.s('Aký interval dostaneš po druhom kroku?'), type: 'tuple', answer: after[1], tol: 1e-9, show: after[1].map((v) => nt(v)).join('; ') }
        ],
        type: 'tuple', answer: [lo, hi], tol: 1e-9,
        q: T`Rovnica $x^2-${a}=0$ má koreň v intervale $[${m};\\ ${m + 1}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).`,
        solution: T`$f(${m})=${m * m - a}&lt;0$, $f(${m + 1})=${(m + 1) ** 2 - a}&gt;0$. ${rows.join(', ')}. Výsledný interval je $[${nm(lo)};\\ ${nm(hi)}]$.`,
        hint: T.s('V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.')
      };
    }
    if (t < 0.64) {
      const L = pick([1, 2, 3, 4, 0.5]), k = rnd(2, 6), eps = pick([1, 5]) * Math.pow(10, -k);
      let n = 0;
      while (L / Math.pow(2, n) > eps) n++;
      const n10 = Math.ceil(Math.log10(L / eps) - 1e-9);
      return {
        mistakes: n10 !== n && Math.abs(n10 - n) !== 1 ? [{ value: n10, msg: T.s('Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.') }] : [],
        steps: [
          { q: T.s('Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?'), answer: L / eps, tol: 0.01, show: nt(L / eps, 2) },
          { q: T.s('Koľko najmenej krokov bisekcie treba?'), answer: n, hint: T.s('Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.') }
        ],
        answer: n,
        q: T`Koreň leží v intervale dĺžky $${nm(L)}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš $${nm(eps, 8)}$?`,
        solution: T`Po $n$ krokoch má interval dĺžku $\\frac{${nm(L)}}{2^n}$. Treba $2^n\\ge\\frac{${nm(L)}}{${nm(eps, 8)}}=${nm(L / eps, 2)}$, teda $n\\ge\\log_2 ${nm(L / eps, 2)}\\approx ${nm(Math.log2(L / eps), 3)}$. Najmenšie celé je $n=${n}$.`,
        hint: T.s('Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.')
      };
    }
    if (t < 0.82) {
      const G = pick([
        { tex: '\\cos x', g: Math.cos, eq: 'x=\\cos x', x0: pick([0.5, 0.7, 1]) },
        { tex: 'e^{-x}', g: (x) => Math.exp(-x), eq: 'x=e^{-x}', x0: pick([0.5, 0.6, 1]) },
        { tex: '\\sqrt{x+2}', g: (x) => Math.sqrt(x + 2), eq: 'x=\\sqrt{x+2}', x0: pick([0, 1, 3]) },
        { tex: '\\sqrt{x+5}', g: (x) => Math.sqrt(x + 5), eq: 'x=\\sqrt{x+5}', x0: pick([1, 2, 3]) },
        { tex: '\\frac{1}{1+x}', g: (x) => 1 / (1 + x), eq: 'x=\\frac{1}{1+x}', x0: pick([0, 0.5, 1]) }
      ]);
      const x1 = G.g(G.x0), x2 = G.g(x1);
      const D2R = Math.PI / 180, xd = G.tex === '\\cos x' ? Math.cos(Math.cos(G.x0 * D2R) * D2R) : NaN;
      return {
        mistakes: [
          ...(Math.abs(round(x1, 4) - round(x2, 4)) > 0.0001 ? [{ value: round(x1, 4), msg: T.s('Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.') }] : []),
          ...(Number.isFinite(xd) ? [{ value: round(xd, 4), msg: T.s('Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.') }] : [])
        ],
        steps: [
          { q: T`Vypočítaj $x_1 = g(x_0)$. ${R(4)}`, answer: round(x1, 4), tol: 0.0001, show: nt(x1, 4) },
          { q: T`Vypočítaj $x_2 = g(x_1)$. ${R(4)}`, answer: round(x2, 4), tol: 0.0001, show: nt(x2, 4) }
        ],
        answer: round(x2, 4), tol: 0.0001,
        q: T`Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)=${G.tex}$ (rovnica $${G.eq}$) a štartom $x_0=${nm(G.x0)}$. Vypočítaj $x_2$. ${R(4)}`,
        solution: T`$x_1=g(${nm(G.x0)})\\approx ${nm(x1, 6)}$, $x_2=g(x_1)\\approx ${nm(x2, 6)}\\approx ${dd(x2, 4)}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)`,
        hint: T.s('Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.')
      };
    }
    let a, m;
    do { a = rnd(3, 80); m = Math.floor(Math.sqrt(a)); } while (m * m === a);
    const x0 = m, x1 = m + 1, f0 = x0 * x0 - a, f1 = x1 * x1 - a;
    const x2 = x1 - f1 * (x1 - x0) / (f1 - f0);
    return {
      mistakes: [{ value: round(x1 + f1 * (x1 - x0) / (f1 - f0), 4), msg: T.s('Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.') }],
      steps: [
        { q: T.s('Vypočítaj $f(x_0)$.'), answer: f0, signed: true },
        { q: T.s('Vypočítaj $f(x_1)$.'), answer: f1, signed: true },
        { q: T`Vypočítaj $x_2$. ${R(4)}`, answer: round(x2, 4), tol: 0.0001, show: nt(x2, 4) }
      ],
      answer: round(x2, 4), tol: 0.0001,
      q: T`Urob jeden krok metódy sečníc pre $f(x)=x^2-${a}$ s počiatočnými bodmi $x_0=${x0}$ a $x_1=${x1}$. ${R(4)}`,
      solution: T`$f(x_0)=${f0}$, $f(x_1)=${f1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}=${x1}-${par(f1)}\\cdot\\frac{1}{${f1 - f0}}\\approx ${dd(x2, 4)}$. (Presne $\\sqrt{${a}}\\approx ${nm(Math.sqrt(a), 6)}$.)`,
      hint: T.s('Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.')
    };
  });

  /* ======================= 3. INTERPOLÁCIA A APROXIMÁCIA ======================= */

  lesson({
    id: 'v7-interpolacia', order: 30, title: 'Interpolácia a aproximácia',
    summary: 'Interpolačný polynóm v Lagrangeovom a Newtonovom tvare, pomerné diferencie, chyba interpolácie, Rungeho jav a metóda najmenších štvorcov.',
    theory: [
      `<p><strong>Úloha interpolácie.</strong> Dané sú navzájom rôzne <em>uzly</em> $x_0, x_1, \\dots, x_n$ a hodnoty $y_0, y_1, \\dots, y_n$ (napríklad namerané alebo z tabuľky).
       Hľadáme polynóm $P_n$ stupňa nanajvýš $n$, pre ktorý $P_n(x_i)=y_i$ pre všetky $i$. Taký polynóm existuje a je <strong>práve jeden</strong>: podmienky tvoria sústavu
       s Vandermondovou maticou, ktorej determinant $\\prod_{i&lt;j}(x_j-x_i)$ je nenulový. Polynóm potom používame na výpočet hodnôt medzi uzlami.</p>`,
      `<p><strong>Lagrangeov tvar.</strong> Pre každý uzol zostrojíme bázový polynóm, ktorý je v ňom rovný 1 a v ostatných uzloch 0:
       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$
       Pre dva uzly dostaneme <em>lineárnu interpoláciu</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$. Lagrangeov tvar je prehľadný, ale pri pridaní uzla treba všetko prepočítať.</p>`,
      `<p><strong>Newtonov tvar a pomerné diferencie.</strong> Pomerné (delené) diferencie definujeme rekurentne:
       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$
       Potom
       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$
       Diferencie sa počítajú v trojuholníkovej tabuľke a pridanie ďalšieho uzla znamená len pridanie jedného člena. Hodnotu polynómu vypočítame úsporne Hornerovou schémou.</p>`,
      `<p><strong>Chyba interpolácie.</strong> Ak má $f$ spojitú deriváciu rádu $n+1$, pre každé $x$ existuje $\\xi$ v najmenšom intervale obsahujúcom $x$ a uzly, pre ktoré
       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$
       Odtiaľ odhad $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$, kde $M_{n+1}=\\max|f^{(n+1)}|$. Pri lineárnej interpolácii s krokom $h$ je chyba nanajvýš $\\frac{M_2h^2}{8}$.
       Zvyšovanie stupňa na rovnomerne rozložených uzloch nemusí pomôcť: pri funkcii $\\frac{1}{1+25x^2}$ na $[-1; 1]$ polynóm pri krajoch silno osciluje (<strong>Rungeho jav</strong>).
       Riešením sú Čebyševove uzly zahustené ku krajom alebo po častiach polynomiálna interpolácia (splajny).</p>`,
      `<p><strong>Metóda najmenších štvorcov.</strong> Namerané dáta obsahujú chyby, preto nimi nechceme viesť polynóm vysokého stupňa, ale jednoduchú funkciu, ktorá ich
       <em>aproximuje</em>. Priamku $y=ax+b$ zvolíme tak, aby bol súčet štvorcov odchýlok $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$ minimálny. Z podmienok
       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$ dostaneme <strong>normálne rovnice</strong>
       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i,$$
       s riešením $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$, $b=\\frac{\\sum y_i-a\\sum x_i}{n}$. Priamka prechádza ťažiskom dát $[\\bar{x}; \\bar{y}]$.</p>`
    ],
    examples: [
      { task: 'Nájdite hodnotu interpolačného polynómu pre body $[0; 1]$, $[1; 3]$, $[3; 2]$ v bode $x=2$ v Lagrangeovom aj Newtonovom tvare.',
        steps: ['Lagrange: $\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$, $\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$, $\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$.',
          '$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3{,}333$.',
          'Newton: $f[0, 1]=\\frac{3-1}{1}=2$, $f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$, $f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$.',
          '$P(x)=1+2x-\\frac{5}{6}x(x-1)$, teda $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$ — rovnaký polynóm, iný zápis.'] },
      { task: 'Metódou najmenších štvorcov preložte priamku bodmi $[0; 1]$, $[1; 2]$, $[2; 4]$, $[3; 4]$.',
        steps: ['$n=4$, $\\sum x_i=6$, $\\sum y_i=11$, $\\sum x_i^2=14$, $\\sum x_iy_i=0+2+8+12=22$.',
          '$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1{,}1$.',
          '$b=\\frac{11-1{,}1\\cdot 6}{4}=\\frac{4{,}4}{4}=1{,}1$.',
          'Hľadaná priamka je $y=1{,}1x+1{,}1$; prechádza ťažiskom $[1{,}5; 2{,}75]$.'] }
    ]
  });

  gen('v7-interpolacia', () => {
    const t = Math.random();
    if (t < 0.4) {
      const x0 = rnd(-2, 1), x1 = x0 + rnd(1, 2), x2 = x1 + rnd(1, 2), X = [x0, x1, x2];
      const Y = [rnd(-4, 8), rnd(-4, 8), rnd(-4, 8)];
      const pts = X.map((x, i) => `$[${x};\\ ${Y[i]}]$`).join(', ');
      if (t < 0.22) {
        const cand = [];
        for (let s = 2 * x0 + 1; s < 2 * x2; s++) if (!X.includes(s / 2)) cand.push(s / 2);
        const xs = pick(cand);
        const L = X.map((xi, i) => X.reduce((pr, xj, j) => (j === i ? pr : pr * (xs - xj) / (xi - xj)), 1));
        const val = sum(L.map((l, i) => l * Y[i]));
        const i0 = xs < x1 ? 0 : 1, lin = Y[i0] + (Y[i0 + 1] - Y[i0]) / (X[i0 + 1] - X[i0]) * (xs - X[i0]);
        return {
          mistakes: Math.abs(round(lin, 3) - round(val, 3)) > 0.001 ? [{ value: round(lin, 3), msg: T.s('Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.') }] : [],
          steps: [
            ...L.map((l, i) => ({ q: T`Vypočítaj $\\ell_${i}(${nm(xs)})$. ${R(4)}`, answer: round(l, 4), tol: 0.0001, show: nt(l, 4), signed: true })),
            { q: T`Vypočítaj $P(${nm(xs)})$. ${R(3)}`, answer: round(val, 3), tol: 0.001, show: nt(val, 3), signed: true }
          ],
          signed: true,
          answer: round(val, 3), tol: 0.001,
          q: T`Interpolačný polynóm 2. stupňa prechádza bodmi ${pts}. Vypočítaj jeho hodnotu v bode $x=${nm(xs)}$. ${R(3)}`,
          solution: T`Lagrangeove bázové polynómy v bode $${nm(xs)}$: ${L.map((l, i) => `$\\ell_${i}=${nm(l, 4)}$`).join(', ')}.
            $P(${nm(xs)})=${Y.map((y, i) => `${par(y)}\\cdot ${pn(L[i], 4)}`).join('+')}\\approx ${dd(val, 3)}$.`,
          hint: T.s('Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.')
        };
      }
      const d01 = (Y[1] - Y[0]) / (x1 - x0), d12 = (Y[2] - Y[1]) / (x2 - x1), d012 = (d12 - d01) / (x2 - x0);
      const wr = (d12 - d01) / (x2 - x1);
      return {
        mistakes: [
          ...(Math.abs(round(d12 - d01, 4) - round(d012, 4)) > 0.0001 ? [{ value: round(d12 - d01, 4), msg: T.s('Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.') }] : []),
          ...(Math.abs(round(wr, 4) - round(d012, 4)) > 0.0001 && Math.abs(round(wr, 4) - round(d12 - d01, 4)) > 0.0001 ? [{ value: round(wr, 4), msg: T.s('Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.') }] : [])
        ],
        steps: [
          { q: T`Vypočítaj $f[x_0, x_1]$. ${R(4)}`, answer: round(d01, 4), tol: 0.0001, show: nt(d01, 4), signed: true },
          { q: T`Vypočítaj $f[x_1, x_2]$. ${R(4)}`, answer: round(d12, 4), tol: 0.0001, show: nt(d12, 4), signed: true },
          { q: T`Vypočítaj $f[x_0, x_1, x_2]$. ${R(4)}`, answer: round(d012, 4), tol: 0.0001, show: nt(d012, 4), signed: true }
        ],
        signed: true,
        answer: round(d012, 4), tol: 0.0001,
        q: T`Pre body ${pts} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). ${R(4)}`,
        solution: T`$f[x_0, x_1]=\\frac{${Y[1]}-${par(Y[0])}}{${x1}-${par(x0)}}=${nm(d01, 4)}$, $f[x_1, x_2]=\\frac{${Y[2]}-${par(Y[1])}}{${x2}-${par(x1)}}=${nm(d12, 4)}$,
          $f[x_0, x_1, x_2]=\\frac{${pn(d12, 4)}-${pn(d01, 4)}}{${x2}-${par(x0)}}\\approx ${dd(d012, 4)}$.`,
        hint: T.s('Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.')
      };
    }
    if (t < 0.65) {
      const n = pick([4, 5, 5, 6]), start = pick([0, 1]);
      const X = Array.from({ length: n }, (_, i) => start + i);
      const a0 = pick([-2, -1, 1, 2, 3]) * rnd(1, 3) / 2, b0 = rnd(-3, 5);
      const Y = X.map((x) => Math.round(a0 * x + b0 + rnd(-2, 2)));
      const Sx = sum(X), Sy = sum(Y), Sxx = sum(X.map((x) => x * x)), Sxy = sum(X.map((x, i) => x * Y[i]));
      const a = (n * Sxy - Sx * Sy) / (n * Sxx - Sx * Sx), b = (Sy - a * Sx) / n;
      const askA = Math.random() < 0.55, ans = askA ? a : b;
      const wv = askA ? Sxy / Sxx : Sy / n;
      return {
        mistakes: Math.abs(round(wv, 3) - round(ans, 3)) > 0.001 ? [{ value: round(wv, 3), msg: askA
          ? T.s('Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.')
          : T.s('Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.') }] : [],
        steps: [
          { q: T.s('Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).'), type: 'tuple', answer: [Sx, Sy], signed: true, show: `${Sx}; ${Sy}` },
          { q: T.s('Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).'), type: 'tuple', answer: [Sxx, Sxy], signed: true, show: `${Sxx}; ${Sxy}` },
          { q: T`Vypočítaj smernicu $a$. ${R(3)}`, answer: round(a, 3), tol: 0.001, show: nt(a, 3), signed: true },
          ...(askA ? [] : [{ q: T`Vypočítaj absolútny člen $b$. ${R(3)}`, answer: round(b, 3), tol: 0.001, show: nt(b, 3), signed: true }])
        ],
        signed: true,
        answer: round(ans, 3), tol: 0.001,
        q: T`Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi ${X.map((x, i) => `$[${x};\\ ${Y[i]}]$`).join(', ')}. Urči ${askA ? T.s('smernicu $a$') : T.s('absolútny člen $b$')}. ${R(3)}`,
        solution: T`$n=${n}$, $\\sum x_i=${Sx}$, $\\sum y_i=${Sy}$, $\\sum x_i^2=${Sxx}$, $\\sum x_iy_i=${Sxy}$.
          $a=\\frac{${n}\\cdot ${par(Sxy)}-${Sx}\\cdot ${par(Sy)}}{${n}\\cdot ${Sxx}-${Sx}^2}=\\frac{${n * Sxy - Sx * Sy}}{${n * Sxx - Sx * Sx}}\\approx ${nm(a, 4)}$${askA ? '' : `, $b=\\frac{${Sy}-a\\cdot ${Sx}}{${n}}\\approx ${dd(b, 3)}$`}.`,
        hint: T.s('Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.')
      };
    }
    if (t < 0.83) {
      const F = pick([
        { tex: '\\sin x', name: 'sínus', M: () => 1, Mt: '|f\'\'(x)|=|\\sin x|\\le 1' },
        { tex: '\\cos x', name: 'kosínus', M: () => 1, Mt: '|f\'\'(x)|=|\\cos x|\\le 1' },
        { tex: 'e^{x}', name: 'exponenciála', M: (b) => Math.exp(b), Mt: null }
      ]);
      const h = pick([0.1, 0.2]), x0 = rnd(1, 9) / 10, x1 = round(x0 + h, 2);
      const off = pick([0.25, 0.5, 0.3, 0.4]) * h, x = round(x0 + off, 3);
      const M = F.M(x1), w = Math.abs((x - x0) * (x - x1)), bound = M / 2 * w, glob = M * h * h / 8;
      return {
        mistakes: [
          { value: round(M * w, 6), msg: T.s('Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.') },
          ...(Math.abs(round(glob, 6) - round(bound, 6)) > 0.0000011 ? [{ value: round(glob, 6), msg: T.s('Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.') }] : [])
        ],
        steps: [
          { q: T`Urči $M_2 = \\max|f''|$ na intervale. ${R(6)}`, answer: round(M, 6), tol: 0.0000011, show: nt(M, 6) },
          { q: T`Vypočítaj $|(x-x_0)(x-x_1)|$. ${R(6)}`, answer: round(w, 6), tol: 0.0000011, show: nt(w, 6) },
          { q: T`Vypočítaj odhad chyby. ${R(6)}`, answer: round(bound, 6), tol: 0.0000011, show: nt(bound, 6) }
        ],
        answer: round(bound, 6), tol: 0.0000011,
        q: T`Funkciu $f(x)=${F.tex}$ nahradíme na intervale $[${nm(x0)};\\ ${nm(x1)}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x=${nm(x)}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. ${R(6)}`,
        solution: T`${F.Mt ? T`$${F.Mt}$, teda $M_2=1$.` : T`$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{${nm(x1)}}\\approx ${nm(M, 6)}$.`}
          $|(x-x_0)(x-x_1)|=${nm(x - x0, 4)}\\cdot ${nm(x1 - x, 4)}=${nm(w, 6)}$. Odhad chyby: $\\frac{${nm(M, 6)}}{2}\\cdot ${nm(w, 6)}\\approx ${dd(bound, 6)}$.`,
        hint: T.s('Chyba lineárnej interpolácie je $\\frac{f\'\'(\\xi)}{2}(x-x_0)(x-x_1)$; za $f\'\'(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.')
      };
    }
    const F = pick([
      { tex: '\\sqrt{x}', f: Math.sqrt, xs: [2, 3, 5, 6, 7, 8, 10, 11] },
      { tex: '\\ln x', f: Math.log, xs: [2, 3, 4, 5, 6, 7] },
      { tex: 'e^{x}', f: Math.exp, xs: [0, 1, 2] }
    ]);
    const x0 = pick(F.xs), h = pick([1, 0.5]), x1 = x0 + h, x = x0 + h * pick([0.2, 0.3, 0.4, 0.6, 0.75]);
    const y0 = round(F.f(x0), 4), y1 = round(F.f(x1), 4), P = y0 + (y1 - y0) / (x1 - x0) * (x - x0);
    const wP = y0 + (y1 - y0) * (x - x0);
    return {
      mistakes: Math.abs(round(wP, 4) - round(P, 4)) > 0.00011 ? [{ value: round(wP, 4), msg: T`Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = ${nm(h)}$, až potom násobiť $(x - x_0)$.` }] : [],
      steps: [
        { q: T`Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. ${R(4)}`, answer: round((y1 - y0) / h, 4), tol: 0.00011, show: nt((y1 - y0) / h, 4), signed: true },
        { q: T`Vypočítaj $P_1(${nm(x)})$. ${R(4)}`, answer: round(P, 4), tol: 0.00011, show: nt(P, 4) }
      ],
      answer: round(P, 4), tol: 0.00011,
      q: T`Z tabuľky poznáme $${F.tex.replace(/x/g, nm(x0))}\\approx ${dd(y0, 4)}$ a $${F.tex.replace(/x/g, nm(x1))}\\approx ${dd(y1, 4)}$. Lineárnou interpoláciou odhadni hodnotu funkcie $${F.tex}$ v bode $x=${nm(x)}$. ${R(4)}`,
      solution: T`$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)=${dd(y0, 4)}+\\frac{${dd(y1 - y0, 4)}}{${nm(h)}}\\cdot ${nm(x - x0, 4)}\\approx ${dd(P, 4)}$. (Presná hodnota je $${nm(F.f(x), 6)}$.)`,
      hint: T.s('Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.')
    };
  });

  /* ======================= 4. DERIVÁCIA A INTEGRÁCIA ======================= */

  const LF = (x) => 2 + Math.sin(1.5 * x) + 0.3 * x;
  const LF_EXACT = 8 + (1 - Math.cos(6)) / 1.5 + 2.4;
  fig('v7-lichobeznik', {
    controls: [{ id: 'n', label: 'Počet dielikov n', min: 1, max: 12, step: 1, value: 3 }],
    draw: (v) => {
      const p = plane(-0.3, 4.4, -0.6, 5, 420, 300);
      const n = v.n, h = 4 / n;
      let traps = '', Tn = 0;
      for (let i = 0; i < n; i++) {
        const a = i * h, b = a + h;
        Tn += h / 2 * (LF(a) + LF(b));
        traps += `<polygon class="f-fill f-outline" points="${n1(p.X(a))},${n1(p.Y(0))} ${n1(p.X(a))},${n1(p.Y(LF(a)))} ${n1(p.X(b))},${n1(p.Y(LF(b)))} ${n1(p.X(b))},${n1(p.Y(0))}"/>`;
      }
      let S = null;
      if (n % 2 === 0) {
        S = LF(0) + LF(4);
        for (let i = 1; i < n; i++) S += (i % 2 ? 4 : 2) * LF(i * h);
        S *= h / 3;
      }
      const clipped = `${traps}<path class="f-accent" d="${curvePath(p, LF, 0, 4)}"/>`;
      return {
        svg: svg(p, axes(p), clipped, '', 'Lichobežníková metóda pre funkciu na intervale od 0 do 4'),
        readout: T`h = ${sk(h, 3)} · <span class="c-accent">T<sub>n</sub> = ${sk(Tn, 5)}</span> · presne I = ${sk(LF_EXACT, 5)} · chyba ${sk(Math.abs(Tn - LF_EXACT), 5)}`
          + (S === null ? T.s(' · Simpson: n musí byť párne') : T` · <span class="c-ok">S<sub>n</sub> = ${sk(S, 5)}, chyba ${sk(Math.abs(S - LF_EXACT), 5)}</span>`)
      };
    }
  });

  const DFUN = [
    { tex: 'e^{x}', f: Math.exp, d: Math.exp, x: [0, 0.5, 1, 2] },
    { tex: '\\sin x', f: Math.sin, d: Math.cos, x: [0, 0.5, 1, 2] },
    { tex: '\\ln x', f: Math.log, d: (x) => 1 / x, x: [1, 2, 4] },
    { tex: 'x^3', f: (x) => x ** 3, d: (x) => 3 * x * x, x: [1, 2, 0.5] },
    { tex: '\\sqrt{x}', f: Math.sqrt, d: (x) => 0.5 / Math.sqrt(x), x: [1, 4, 2] }
  ];
  const IFUN = [
    { tex: 'x^2', f: (x) => x * x, F: (a, b) => (b ** 3 - a ** 3) / 3, ab: [[0, 1], [0, 2], [1, 3]] },
    { tex: '\\frac{1}{x}', f: (x) => 1 / x, F: (a, b) => Math.log(b / a), ab: [[1, 2], [1, 3], [2, 4]] },
    { tex: 'e^{x}', f: Math.exp, F: (a, b) => Math.exp(b) - Math.exp(a), ab: [[0, 1], [0, 2]] },
    { tex: '\\frac{1}{1+x^2}', f: (x) => 1 / (1 + x * x), F: (a, b) => Math.atan(b) - Math.atan(a), ab: [[0, 1], [0, 2]] },
    { tex: '\\sqrt{x}', f: Math.sqrt, F: (a, b) => 2 / 3 * (b ** 1.5 - a ** 1.5), ab: [[0, 1], [1, 4], [1, 2]] },
    { tex: '\\sin x', f: Math.sin, F: (a, b) => Math.cos(a) - Math.cos(b), ab: [[0, 1], [0, 2], [1, 3]] }
  ];

  lesson({
    id: 'v7-derivacia-integracia', order: 40, title: 'Numerická derivácia a integrácia',
    summary: 'Dopredná a centrálna diferencia, voľba kroku, obdĺžniková, lichobežníková a Simpsonova metóda, rád presnosti a odhad chyby.',
    theory: [
      `<p><strong>Numerická derivácia.</strong> Z Taylorovho rozvoja $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$ dostaneme vzorce
       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{dopredná diferencia, chyba }-\\frac{h}{2}f''(\\xi)},\\qquad
       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{centrálna diferencia, chyba }-\\frac{h^2}{6}f'''(\\xi)}.$$
       Dopredná (aj spätná $\\frac{f(x)-f(x-h)}{h}$) diferencia má <strong>rád presnosti 1</strong>, centrálna <strong>rád 2</strong>: pri polovičnom kroku sa chyba zmenší asi
       dvakrát, resp. štyrikrát. Pre druhú deriváciu slúži $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$ s chybou $O(h^2)$.</p>`,
      `<p><strong>Voľba kroku.</strong> Krok nemožno zmenšovať donekonečna. V čitateli odčítame dve blízke hodnoty, takže zaokrúhľovacia chyba je rádovo $\\frac{\\varepsilon_M|f(x)|}{h}$
       a s klesajúcim $h$ <em>rastie</em>. Celková chyba doprednej diferencie $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$ je najmenšia približne pri $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$,
       pre centrálnu diferenciu pri $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$. Numerické derivovanie je teda zle podmienená úloha, na rozdiel od integrovania.</p>`,
      `<p><strong>Kvadratúrne vzorce.</strong> Interval $[a, b]$ rozdelíme na $n$ dielikov s krokom $h=\\frac{b-a}{n}$, uzly sú $x_i=a+ih$ a $f_i=f(x_i)$. Na každom dieliku nahradíme
       funkciu polynómom a ten integrujeme presne:</p>
       <ul><li><strong>obdĺžniková (stredová) metóda</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$, chyba $\\frac{(b-a)h^2}{24}f''(\\xi)$;</li>
       <li><strong>lichobežníková metóda</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$, chyba $-\\frac{(b-a)h^2}{12}f''(\\xi)$;</li>
       <li><strong>Simpsonova metóda</strong> ($n$ párne, na dvojiciach dielikov parabola) $S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$, chyba $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$.</li></ul>`,
      { fig: 'v7-lichobeznik', caption: 'Lichobežníková metóda pre $f(x)=2+\\sin 1{,}5x+0{,}3x$ na $[0; 4]$. Zvyšuj počet dielikov a sleduj, ako chyba klesá zhruba so štvorcom kroku; pri párnom $n$ sa zobrazí aj výsledok Simpsonovej metódy.' },
      `<p><strong>Rád presnosti.</strong> Chyba zloženého vzorca sa správa ako $Ch^p$. Obdĺžniková a lichobežníková metóda majú $p=2$ (polovičný krok → chyba štyrikrát menšia),
       Simpsonova $p=4$ (šestnásťkrát menšia) a je presná pre polynómy do tretieho stupňa vrátane. Stredová metóda má približne polovičnú chybu opačného znamienka ako lichobežníková,
       preto $S_{2n}=\\frac{2M_n+T_n}{3}$. Z dvoch výpočtov s krokmi $h$ a $\\frac{h}{2}$ odhadneme chybu <strong>Rungeho pravidlom</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$
       a zlepšený výsledok $\\frac{4T_{2n}-T_n}{3}$ je práve Simpsonov vzorec (Richardsonova extrapolácia, na nej stojí Rombergova metóda).</p>`
    ],
    examples: [
      { task: 'Odhadnite $f\'(0)$ pre $f(x)=e^x$ s krokom $h=0{,}1$ doprednou a centrálnou diferenciou a porovnajte chyby.',
        steps: ['Dopredná: $\\frac{e^{0{,}1}-1}{0{,}1}=\\frac{0{,}105171}{0{,}1}\\approx 1{,}051709$, chyba $\\approx 0{,}0517$.',
          'Centrálna: $\\frac{e^{0{,}1}-e^{-0{,}1}}{0{,}2}\\approx\\frac{1{,}105171-0{,}904837}{0{,}2}\\approx 1{,}001668$, chyba $\\approx 0{,}0017$.',
          'Presne $f\'(0)=1$. Odhady chýb $\\frac{h}{2}f\'\'=0{,}05$ a $\\frac{h^2}{6}f\'\'\'\\approx 0{,}0017$ s výsledkom dobre súhlasia.'] },
      { task: 'Vypočítajte $\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0{,}785398$ lichobežníkovou a Simpsonovou metódou s $n=2$.',
        steps: ['$h=0{,}5$, $f(0)=1$, $f(0{,}5)=0{,}8$, $f(1)=0{,}5$.',
          '$T_2=\\frac{0{,}5}{2}(1+2\\cdot 0{,}8+0{,}5)=0{,}25\\cdot 3{,}1=0{,}775$, chyba $\\approx 0{,}0104$.',
          '$S_2=\\frac{0{,}5}{3}(1+4\\cdot 0{,}8+0{,}5)=\\frac{0{,}5\\cdot 4{,}7}{3}\\approx 0{,}783333$, chyba $\\approx 0{,}0021$.',
          'Pri rovnakom počte vyhodnotení funkcie je Simpsonova metóda podstatne presnejšia.'] }
    ]
  });

  gen('v7-derivacia-integracia', () => {
    const t = Math.random();
    if (t < 0.3) {
      const F = pick(DFUN), x = pick(F.x), h = pick([0.1, 0.2, 0.05]);
      const central = Math.random() < 0.5;
      const v = central ? (F.f(x + h) - F.f(x - h)) / (2 * h) : (F.f(x + h) - F.f(x)) / h;
      const ex = F.d(x);
      const xl = central ? x - h : x, fl = F.f(xl), fr = F.f(x + h);
      const mis = [];
      if (central) mis.push({ value: round(2 * v, 4), msg: T.s('Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.') });
      if (F.tex === '\\sin x' && x !== 0) {
        const D = Math.PI / 180, vd = central ? (Math.sin((x + h) * D) - Math.sin((x - h) * D)) / (2 * h) : (Math.sin((x + h) * D) - Math.sin(x * D)) / h;
        if (Math.abs(round(vd, 4) - round(v, 4)) > 0.0001) mis.push({ value: round(vd, 4), msg: T.s('Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.') });
      }
      return {
        mistakes: mis,
        steps: [
          { q: T`Vypočítaj $f(${nm(x + h)})$. ${R(6)}`, answer: round(fr, 6), tol: 0.0000011, show: nt(fr, 6), signed: fr < 0 },
          { q: T`Vypočítaj $f(${nm(xl)})$. ${R(6)}`, answer: round(fl, 6), tol: 0.0000011, show: nt(fl, 6), signed: fl < 0 },
          { q: T`Dosaď do vzorca ${central ? 'centrálnej' : 'doprednej'} diferencie. ${R(4)}`, answer: round(v, 4), tol: 0.0001, show: nt(v, 4), signed: v < 0 }
        ],
        signed: v < 0,
        answer: round(v, 4), tol: 0.0001,
        q: T`Odhadni deriváciu funkcie $f(x)=${F.tex}$ v bode $x=${nm(x)}$ ${central ? 'centrálnou' : 'doprednou'} diferenciou s krokom $h=${nm(h)}$. ${R(4)}`,
        solution: central
          ? T`$f'(${nm(x)})\\approx\\frac{f(${nm(x + h)})-f(${nm(x - h)})}{2\\cdot ${nm(h)}}=\\frac{${nm(F.f(x + h), 6)}-${pn(F.f(x - h), 6)}}{${nm(2 * h)}}\\approx ${dd(v, 4)}$. Presne $f'(${nm(x)})\\approx ${nm(ex, 6)}$, chyba je asi $${nm(Math.abs(v - ex), 6)}$.`
          : T`$f'(${nm(x)})\\approx\\frac{f(${nm(x + h)})-f(${nm(x)})}{${nm(h)}}=\\frac{${nm(F.f(x + h), 6)}-${pn(F.f(x), 6)}}{${nm(h)}}\\approx ${dd(v, 4)}$. Presne $f'(${nm(x)})\\approx ${nm(ex, 6)}$, chyba je asi $${nm(Math.abs(v - ex), 6)}$.`,
        hint: central ? T.s('Centrálna diferencia: $f\'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.')
          : T.s('Dopredná diferencia: $f\'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.')
      };
    }
    if (t < 0.85) {
      const F = pick(IFUN), [a, b] = pick(F.ab), kind = pick(['T', 'T', 'S', 'S', 'M']);
      const n = pick([2, 4]), h = (b - a) / n;
      const xs = Array.from({ length: n + 1 }, (_, i) => a + i * h), fs = xs.map(F.f);
      let val, sol, name, hint;
      if (kind === 'T') {
        val = h / 2 * (fs[0] + fs[n] + 2 * sum(fs.slice(1, n)));
        name = T.s('lichobežníkovou metódou');
        sol = `$T_{${n}}=\\frac{${nm(h)}}{2}\\left(${nm(fs[0], 5)}+2\\cdot(${fs.slice(1, n).map((v) => nm(v, 5)).join('+')})+${nm(fs[n], 5)}\\right)\\approx ${dd(val, 4)}$`;
        hint = T.s('Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.');
      } else if (kind === 'S') {
        val = h / 3 * (fs[0] + fs[n] + sum(fs.slice(1, n).map((v, i) => (i % 2 === 0 ? 4 : 2) * v)));
        name = T.s('Simpsonovou metódou');
        sol = `$S_{${n}}=\\frac{${nm(h)}}{3}\\left(${fs.map((v, i) => `${i === 0 || i === n ? '' : (i % 2 ? '4' : '2') + '\\cdot '}${nm(v, 5)}`).join('+')}\\right)\\approx ${dd(val, 4)}$`;
        hint = T.s('Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.');
      } else {
        const ms = Array.from({ length: n }, (_, i) => a + (i + 0.5) * h), fm = ms.map(F.f);
        val = h * sum(fm);
        name = T.s('obdĺžnikovou (stredovou) metódou');
        sol = T`Stredy dielikov: ${ms.map((m) => `$${nm(m, 4)}$`).join(', ')}. $M_{${n}}=${nm(h)}\\cdot(${fm.map((v) => nm(v, 5)).join('+')})\\approx ${dd(val, 4)}$`;
        hint = T.s('Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.');
      }
      const exact = F.F(a, b);
      const mis = [], st = [{ q: T.s('Aký je krok $h$?'), answer: h, tol: 1e-9, show: nt(h) }];
      const add = (wv, msg) => { if (Math.abs(round(wv, 4) - round(val, 4)) > 0.0001) mis.push({ value: round(wv, 4), msg }); };
      const inner = sum(fs.slice(1, n));
      if (kind === 'T') {
        add(h * sum(fs), T.s('Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.'));
        st.push({ q: T`Vypočítaj súčet vnútorných hodnôt ${n === 2 ? T.s('(tu len $f_1$)') : `$f_1 + \\dots + f_{${n - 1}}$`}. ${R(4)}`, answer: round(inner, 4), tol: 0.0003, show: nt(inner, 4) });
      } else if (kind === 'S') {
        add(h / 3 * (fs[0] + fs[n] + sum(fs.slice(1, n).map((v, i) => (i % 2 === 0 ? 2 : 4) * v))), T.s('Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.'));
        add(h / 2 * (fs[0] + fs[n] + 2 * inner), T.s('Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.'));
        const odd = sum(fs.filter((_, i) => i % 2 === 1));
        st.push({ q: T`Vypočítaj súčet hodnôt v nepárnych uzloch $f_1${n > 2 ? ' + f_3' : ''}$ (váha 4). ${R(4)}`, answer: round(odd, 4), tol: 0.0003, show: nt(odd, 4) });
      } else {
        add(h * sum(fs.slice(0, n)), T.s('Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.'));
        const fmS = sum(Array.from({ length: n }, (_, i) => F.f(a + (i + 0.5) * h)));
        st.push({ q: T`Vypočítaj súčet hodnôt funkcie v stredoch dielikov. ${R(4)}`, answer: round(fmS, 4), tol: 0.0003, show: nt(fmS, 4) });
      }
      st.push({ q: T`Vypočítaj výslednú hodnotu integrálu. ${R(4)}`, answer: round(val, 4), tol: 0.0001, show: nt(val, 4) });
      return {
        mistakes: mis,
        steps: st,
        answer: round(val, 4), tol: 0.0001,
        q: T`Vypočítaj $\\displaystyle\\int_{${a}}^{${b}} ${F.tex}\\,dx$ ${name} s $n=${n}$ dielikmi. ${R(4)}`,
        solution: T`$h=\\frac{${b}-${a}}{${n}}=${nm(h)}$, ${kind === 'M' ? '' : T`uzly ${xs.map((x) => `$${nm(x, 4)}$`).join(', ')}. `}${sol}. Presná hodnota je $${nm(exact, 6)}$, chyba asi $${nm(Math.abs(val - exact), 6)}$.`,
        hint
      };
    }
    const M = pick([
      [T.s('lichobežníkovej metódy'), 2], [T.s('obdĺžnikovej (stredovej) metódy'), 2], [T.s('Simpsonovej metódy'), 4],
      [T.s('centrálnej diferencie'), 2], [T.s('doprednej diferencie'), 1]
    ]);
    const k = pick([2, 2, 3, 4]), r = Math.pow(k, M[1]);
    return {
      mistakes: [
        ...(M[1] > 1 ? [{ value: k, msg: T`Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.` }] : []),
        ...(M[1] === 4 ? [{ value: k * k, msg: T.s('Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.') }] : []),
        ...(M[1] === 2 && k * M[1] !== r ? [{ value: k * M[1], msg: T.s('Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.') }] : [])
      ],
      answer: r,
      q: T`Krok $h$ zmenšíme ${k === 2 ? T.s('na polovicu') : T`${k}-krát`}. Približne koľkokrát sa zmenší chyba ${M[0]} (pre hladkú funkciu)?`,
      solution: T`Chyba ${M[0]} je úmerná $h^{${M[1]}}$ (rád presnosti ${M[1]}). Pri kroku $\\frac{h}{${k}}$ sa zmenší $${k}^{${M[1]}}=${r}$-krát.`,
      hint: T.s('Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.')
    };
  });

  /* ======================= 5. DIFERENCIÁLNE ROVNICE ======================= */

  fig('v7-euler', {
    controls: [{ id: 'n', label: 'Počet krokov n', min: 1, max: 20, step: 1, value: 4 }],
    draw: (v) => {
      const p = plane(-0.2, 2.25, -0.6, 8, 420, 320);
      const n = v.n, h = 2 / n;
      const E = [[0, 1]], H = [[0, 1]];
      for (let i = 0; i < n; i++) {
        const x = i * h, ye = E[i][1], yh = H[i][1];
        E.push([x + h, ye + h * ye]);
        const pr = yh + h * yh;
        H.push([x + h, yh + h / 2 * (yh + pr)]);
      }
      const path = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${n1(p.X(x))} ${n1(p.Y(y))}`).join('');
      const dots = (pts, cls) => pts.map(([x, y]) => `<circle class="${cls}" cx="${n1(p.X(x))}" cy="${n1(p.Y(y))}" r="${n > 10 ? 2.5 : 4}"/>`).join('');
      const clipped = `<path class="f-line" d="${curvePath(p, Math.exp, 0, 2)}"/>
        <path class="f-accent" d="${path(E)}"/>${dots(E, 'f-dot')}
        <path class="f-ok" d="${path(H)}"/>${dots(H, 'f-dot f-dot-ok')}`;
      const ex = Math.exp(2), ye = E[n][1], yh = H[n][1];
      return {
        svg: svg(p, axes(p, 1, 2), clipped, '', "Eulerova a Heunova metóda pre y' = y, y(0) = 1"),
        readout: T`h = ${sk(h, 3)} · <span class="c-accent">Euler y(2) ≈ ${sk(ye, 4)} (chyba ${sk(ex - ye, 4)})</span> · <span class="c-ok">Heun y(2) ≈ ${sk(yh, 4)} (chyba ${sk(ex - yh, 4)})</span> · presne e² = ${sk(ex, 4)}`
      };
    }
  });

  const ODE = [
    { tex: 'y', f: (x, y) => y }, { tex: '-y', f: (x, y) => -y }, { tex: '2y', f: (x, y) => 2 * y },
    { tex: 'x+y', f: (x, y) => x + y }, { tex: 'x-y', f: (x, y) => x - y }, { tex: 'xy', f: (x, y) => x * y },
    { tex: 'y-x^2', f: (x, y) => y - x * x }, { tex: 'x^2+y', f: (x, y) => x * x + y }, { tex: '1+y^2', f: (x, y) => 1 + y * y }
  ];

  lesson({
    id: 'v7-ode', order: 50, title: 'Numerické riešenie diferenciálnych rovníc',
    summary: 'Cauchyho úloha, Eulerova metóda, Heunova (zlepšená Eulerova) metóda, Rungeho–Kuttova metóda 4. rádu, lokálna a globálna chyba, voľba kroku a stabilita.',
    theory: [
      `<p>Riešime <strong>Cauchyho úlohu</strong> $y'=f(x, y)$, $y(x_0)=y_0$, ktorú väčšinou nevieme vyriešiť analyticky. Zvolíme <strong>krok</strong> $h$ a uzly $x_k=x_0+kh$ a postupne
       počítame aproximácie $y_k\\approx y(x_k)$. Jednokrokové metódy počítajú $y_{k+1}$ len z dvojice $[x_k; y_k]$. <strong>Lokálna chyba</strong> je chyba jedného kroku
       (za predpokladu presného $y_k$), <strong>globálna chyba</strong> $y(x_k)-y_k$ je nahromadená chyba v uzle. Ak je lokálna chyba $O(h^{p+1})$, po $\\frac{X-x_0}{h}$ krokoch
       je globálna chyba $O(h^p)$ a hovoríme, že metóda má <strong>rád</strong> $p$.</p>`,
      `<p><strong>Eulerova metóda.</strong> Na dieliku $[x_k, x_{k+1}]$ nahradíme riešenie dotyčnicou so smernicou $f(x_k, y_k)$ zo smerového poľa:
       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$
       Je to najjednoduchšia metóda prvého rádu: lokálna chyba $\\frac{h^2}{2}y''(\\xi)$, globálna $O(h)$. Polovičný krok zmenší chybu len asi na polovicu, preto sa v praxi
       používa skôr ako východisko pre presnejšie metódy.</p>`,
      { fig: 'v7-euler', caption: 'Úloha $y\'=y$, $y(0)=1$ na $[0; 2]$ s presným riešením $y=e^x$ (čierna krivka). Eulerova metóda (modrá) systematicky zaostáva, Heunova (zelená) je pri rovnakom kroku oveľa presnejšia. Zvyšuj počet krokov a porovnaj, ako rýchlo klesajú chyby.' },
      `<p><strong>Heunova (zlepšená Eulerova) metóda</strong> je typu prediktor–korektor: Eulerovým krokom odhadneme hodnotu na konci dielika a smernicu potom spriemerujeme:
       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$
       Zodpovedá lichobežníkovému pravidlu a má <strong>rád 2</strong>. Podobná je <em>modifikovaná Eulerova (stredová) metóda</em> $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$.</p>
       <p><strong>Rungeho–Kuttova metóda 4. rádu (RK4)</strong> vyhodnotí v každom kroku štyri smernice
       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$
       a vezme ich vážený priemer $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$ — obdoba Simpsonovho pravidla. Pri polovičnom kroku sa chyba zmenší asi 16-krát.</p>`,
      `<p><strong>Krok a chyba.</strong> Pre metódu rádu $p$ je globálna chyba približne $Ch^p$. Z dvoch výpočtov s krokmi $h$ a $\\frac{h}{2}$ ju odhadneme <strong>Rungeho pravidlom</strong>
       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$. Moderné programy krok prispôsobujú (adaptívny krok, napríklad dvojice Rungeho–Kuttových metód rôznych rádov).
       Menší krok neznamená vždy lepší výsledok — rastie počet operácií aj zaokrúhľovacích chýb.</p>
       <p><strong>Stabilita.</strong> Pre testovaciu rovnicu $y'=\\lambda y$ s $\\lambda&lt;0$ dáva Eulerova metóda $y_{k+1}=(1+h\\lambda)y_k$; numerické riešenie klesá k nule iba pri
       $|1+h\\lambda|&lt;1$, teda $h&lt;\\frac{2}{|\\lambda|}$. Pri väčšom kroku osciluje a rastie, hoci presné riešenie rýchlo klesá. Rovnice s veľmi rozdielnymi časovými škálami
       (<em>tuhé</em> rovnice) sa preto riešia implicitnými metódami, napríklad implicitnou Eulerovou $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$, ktorá je stabilná pre každé $h&gt;0$.</p>`
    ],
    examples: [
      { task: 'Úlohu $y\'=y$, $y(0)=1$ riešte s krokom $h=0{,}5$ Eulerovou a Heunovou metódou až po $x=1$ a porovnajte s $e\\approx 2{,}71828$.',
        steps: ['Euler: $y_1=1+0{,}5\\cdot 1=1{,}5$, $y_2=1{,}5+0{,}5\\cdot 1{,}5=2{,}25$, chyba $\\approx 0{,}468$.',
          'Heun, 1. krok: prediktor $\\tilde{y}_1=1{,}5$, $y_1=1+0{,}25\\,(1+1{,}5)=1{,}625$.',
          'Heun, 2. krok: $\\tilde{y}_2=1{,}625+0{,}5\\cdot 1{,}625=2{,}4375$, $y_2=1{,}625+0{,}25\\,(1{,}625+2{,}4375)=2{,}640625$, chyba $\\approx 0{,}078$.',
          'Pri rovnakom kroku je Heunova metóda asi šesťkrát presnejšia.'] },
      { task: 'Urobte jeden krok metódy RK4 s krokom $h=0{,}1$ pre úlohu $y\'=x+y$, $y(0)=1$. Presné riešenie je $y=2e^x-x-1$.',
        steps: ['$k_1=f(0; 1)=1$, $k_2=f(0{,}05;\\ 1+0{,}05\\cdot 1)=0{,}05+1{,}05=1{,}1$.',
          '$k_3=f(0{,}05;\\ 1+0{,}05\\cdot 1{,}1)=0{,}05+1{,}055=1{,}105$, $k_4=f(0{,}1;\\ 1+0{,}1\\cdot 1{,}105)=0{,}1+1{,}1105=1{,}2105$.',
          '$y_1=1+\\frac{0{,}1}{6}(1+2{,}2+2{,}21+1{,}2105)=1+\\frac{0{,}66205}{6}\\approx 1{,}1103417$.',
          'Presne $y(0{,}1)=2e^{0{,}1}-1{,}1\\approx 1{,}1103418$, chyba je asi $10^{-7}$.'] }
    ]
  });

  gen('v7-ode', () => {
    const t = Math.random();
    const E = pick(ODE), y0 = pick([1, 1, 2, 0.5]), f = E.f;
    const ic = `$y'=${E.tex}$, $y(0)=${nm(y0)}$`;
    if (t < 0.38) {
      const h = pick([0.1, 0.2, 0.25, 0.5].filter((v) => E.tex !== '1+y^2' || v <= 0.2));
      const k1 = f(0, y0), y1 = y0 + h * k1, k2 = f(h, y1), y2 = y1 + h * k2;
      const w2h = y0 + 2 * h * k1;
      return {
        mistakes: [
          ...(Math.abs(round(w2h, 4) - round(y2, 4)) > 0.0001 ? [{ value: round(w2h, 4), msg: T.s('Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.') }] : []),
          ...(Math.abs(round(y1, 4) - round(y2, 4)) > 0.0001 ? [{ value: round(y1, 4), msg: T.s('Toto je až $y_1$. Urob ešte druhý krok.') }] : [])
        ],
        steps: [
          { q: T`Vypočítaj $f(x_0, y_0)$. ${R(4)}`, answer: round(k1, 4), tol: 0.0001, show: nt(k1, 4), signed: k1 < 0 },
          { q: T`Vypočítaj $y_1$. ${R(4)}`, answer: round(y1, 4), tol: 0.0001, show: nt(y1, 4), signed: y1 < 0 },
          { q: T`Vypočítaj $f(x_1, y_1)$. ${R(4)}`, answer: round(k2, 4), tol: 0.0002, show: nt(k2, 4), signed: k2 < 0 },
          { q: T`Vypočítaj $y_2$. ${R(4)}`, answer: round(y2, 4), tol: 0.0001, show: nt(y2, 4), signed: y2 < 0 }
        ],
        signed: y2 < 0,
        answer: round(y2, 4), tol: 0.0001,
        q: T`Úlohu ${ic} rieš Eulerovou metódou s krokom $h=${nm(h)}$. Vypočítaj $y_2\\approx y(${nm(2 * h)})$. ${R(4)}`,
        solution: T`$y_1=y_0+h\\,f(x_0, y_0)=${nm(y0)}+${nm(h)}\\cdot ${pn(k1, 6)}=${nm(y1, 6)}$.
          $y_2=y_1+h\\,f(x_1, y_1)=${nm(y1, 6)}+${nm(h)}\\cdot ${pn(k2, 6)}\\approx ${dd(y2, 4)}$.`,
        hint: T.s('Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.')
      };
    }
    if (t < 0.62) {
      const h = pick([0.1, 0.2, 0.25, 0.5].filter((v) => E.tex !== '1+y^2' || v <= 0.2));
      const k1 = f(0, y0), yp = y0 + h * k1, k2 = f(h, yp), y1 = y0 + h / 2 * (k1 + k2);
      return {
        mistakes: [
          ...(Math.abs(round(yp, 4) - round(y1, 4)) > 0.0001 ? [{ value: round(yp, 4), msg: T.s('Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.') }] : []),
          ...(Math.abs(round(y0 + h * (k1 + k2), 4) - round(y1, 4)) > 0.0001 ? [{ value: round(y0 + h * (k1 + k2), 4), msg: T.s('Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.') }] : [])
        ],
        steps: [
          { q: T`Vypočítaj $f(x_0, y_0)$. ${R(4)}`, answer: round(k1, 4), tol: 0.0001, show: nt(k1, 4), signed: k1 < 0 },
          { q: T`Vypočítaj prediktor $\\tilde{y}_1$. ${R(4)}`, answer: round(yp, 4), tol: 0.0001, show: nt(yp, 4), signed: yp < 0 },
          { q: T`Vypočítaj $f(x_1, \\tilde{y}_1)$. ${R(4)}`, answer: round(k2, 4), tol: 0.0002, show: nt(k2, 4), signed: k2 < 0 },
          { q: T`Vypočítaj $y_1$. ${R(4)}`, answer: round(y1, 4), tol: 0.0001, show: nt(y1, 4), signed: y1 < 0 }
        ],
        signed: y1 < 0,
        answer: round(y1, 4), tol: 0.0001,
        q: T`Úlohu ${ic} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h=${nm(h)}$. Vypočítaj $y_1\\approx y(${nm(h)})$. ${R(4)}`,
        solution: T`$f(x_0, y_0)=${nm(k1, 6)}$, prediktor $\\tilde{y}_1=${nm(y0)}+${nm(h)}\\cdot ${pn(k1, 6)}=${nm(yp, 6)}$, $f(x_1, \\tilde{y}_1)=f(${nm(h)};\\ ${nm(yp, 6)})=${nm(k2, 6)}$.
          $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)=${nm(y0)}+${nm(h / 2)}\\cdot(${nm(k1, 6)}+${pn(k2, 6)})\\approx ${dd(y1, 4)}$.`,
        hint: T.s('Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.')
      };
    }
    if (t < 0.84) {
      const h = pick([0.1, 0.2]);
      const k1 = f(0, y0), k2 = f(h / 2, y0 + h / 2 * k1), k3 = f(h / 2, y0 + h / 2 * k2), k4 = f(h, y0 + h * k3);
      const y1 = y0 + h / 6 * (k1 + 2 * k2 + 2 * k3 + k4);
      const yq = y0 + h / 4 * (k1 + k2 + k3 + k4);
      const kst = (k, i) => ({ q: T`Vypočítaj $k_${i}$. ${R(6)}`, answer: round(k, 6), tol: 0.000003, show: nt(k, 6), signed: k < 0 });
      return {
        mistakes: Math.abs(round(yq, 5) - round(y1, 5)) > 0.00001 ? [{ value: round(yq, 5), msg: T.s('Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.') }] : [],
        steps: [kst(k1, 1), kst(k2, 2), kst(k3, 3), kst(k4, 4),
          { q: T`Vypočítaj $y_1$. ${R(5)}`, answer: round(y1, 5), tol: 0.00001, show: nt(y1, 5), signed: y1 < 0 }],
        signed: y1 < 0,
        answer: round(y1, 5), tol: 0.00001,
        q: T`Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h=${nm(h)}$ pre úlohu ${ic}. ${R(5)}`,
        solution: T`$k_1=f(0;\\ ${nm(y0)})=${nm(k1, 6)}$, $k_2=f(${nm(h / 2)};\\ ${nm(y0 + h / 2 * k1, 6)})=${nm(k2, 6)}$, $k_3=f(${nm(h / 2)};\\ ${nm(y0 + h / 2 * k2, 6)})=${nm(k3, 6)}$,
          $k_4=f(${nm(h)};\\ ${nm(y0 + h * k3, 6)})=${nm(k4, 6)}$. $y_1=${nm(y0)}+\\frac{${nm(h)}}{6}(k_1+2k_2+2k_3+k_4)\\approx ${dd(y1, 5)}$.`,
        hint: T.s('RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.')
      };
    }
    const M = pick([
      [T.s('Eulerovou metódou'), 1, [0.08, 0.12, 0.05, 0.3], [2, 4, 5, 10]],
      [T.s('Heunovou metódou'), 2, [0.02, 0.012, 0.048, 0.08], [2, 4]],
      [T.s('metódou RK4'), 4, [0.0032, 0.0048, 0.016], [2]]
    ]);
    const e = pick(M[2]), k = pick(M[3]), r = e / Math.pow(k, M[1]);
    return {
      mistakes: M[1] > 1 ? [{ value: round(e / k, 6), msg: T`Chyba sa nezmenšuje úmerne kroku: metóda má rád ${M[1]}, takže chyba je úmerná $h^{${M[1]}}$.` }] : [],
      answer: round(r, 6), tol: 0.0000011,
      q: T`Riešenie istej úlohy ${M[0]} s krokom $h$ má v koncovom bode globálnu chybu približne $${nm(e, 6)}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{${k}}$? ${R(6)}`,
      solution: T`Metóda má rád ${M[1]}, globálna chyba je približne $Ch^{${M[1]}}$. Pri kroku $\\frac{h}{${k}}$ sa zmenší $${k}^{${M[1]}}=${Math.pow(k, M[1])}$-krát: $\\frac{${nm(e, 6)}}{${Math.pow(k, M[1])}}=${nm(r, 6)}$.`,
      hint: T.s('Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.')
    };
  });

  /* ======================= 6. MATICOVÉ ALGORITMY ======================= */

  const mat = (A) => `\\begin{pmatrix}${A.map((r) => r.join('&')).join('\\\\')}\\end{pmatrix}`;
  const mulMat = (A, B) => A.map((r) => B[0].map((_, j) => sum(r.map((v, k) => v * B[k][j]))));
  const mulVec = (A, x) => A.map((r) => sum(r.map((v, j) => v * x[j])));
  const NZ3 = [-3, -2, -1, 1, 2, 3], NZ2 = [-2, -1, 1, 2];
  // diagonálne dominantná 3×3 matica s celočíselným riešením
  const ddSystem = () => {
    const A = [0, 1, 2].map((i) => {
      const r = [0, 1, 2].map((j) => (j === i ? 0 : pick([-2, -1, 1, 2, 0])));
      r[i] = Math.abs(r[0]) + Math.abs(r[1]) + Math.abs(r[2]) + rnd(2, 5);
      return r;
    });
    const xs = [rnd(-3, 3), rnd(-3, 3), rnd(-3, 3)];
    return { A, b: mulVec(A, xs), xs };
  };
  const sysTex = (A, b) => `$\\begin{aligned}${A.map((r, i) => r.map((v, j) => {
    if (v === 0) return '';
    const c = Math.abs(v) === 1 ? '' : Math.abs(v);
    return `${v < 0 ? '-' : j > 0 && r.slice(0, j).some((w) => w !== 0) ? '+' : ''}${c}x_${j + 1}`;
  }).join('') + `&=${b[i]}`).join('\\\\')}\\end{aligned}$`;

  lesson({
    id: 'v7-matice', order: 60, title: 'Algoritmy na prácu s maticami',
    summary: 'Gaussova eliminácia s výberom hlavného prvku, LU rozklad, zložitosť priamych metód, Jacobiho a Gaussova–Seidelova iterácia, mocninová metóda pre dominantné vlastné číslo.',
    theory: [
      `<p><strong>Gaussova eliminácia</strong> rieši sústavu $Ax=b$ s regulárnou maticou typu $n\\times n$ v dvoch fázach. V <em>priamom chode</em> pre $k=1, \\dots, n-1$
       odčítame od riadkov $i&gt;k$ násobok $k$-teho riadku s <strong>multiplikátorom</strong> $l_{ik}=\\frac{a_{ik}}{a_{kk}}$, takže pod diagonálou vzniknú nuly a matica
       prejde na hornú trojuholníkovú. <em>Spätným chodom</em> vypočítame $x_n, x_{n-1}, \\dots, x_1$ dosadzovaním zdola nahor.</p>
       <p>Ak je <em>hlavný prvok</em> (pivot) $a_{kk}$ nulový alebo veľmi malý, multiplikátory sú obrovské a zaokrúhľovacie chyby narastú. Preto sa používa
       <strong>čiastočný výber hlavného prvku</strong>: pred $k$-tym krokom vymeníme riadky tak, aby $|a_{kk}|$ bolo najväčšie v $k$-tom stĺpci na diagonále a pod ňou. Potom $|l_{ik}|\\le 1$.</p>`,
      `<p><strong>LU rozklad.</strong> Multiplikátory z priamého chodu tvoria dolnú trojuholníkovú maticu $L$ s jednotkami na diagonále a výsledná horná trojuholníková matica je $U$; platí
       $A=LU$ (s výberom hlavného prvku $PA=LU$, kde $P$ je permutačná matica). Sústavu potom riešime dvoma trojuholníkovými sústavami:
       $$Ly=b\\ \\text{(dopredná substitúcia)},\\qquad Ux=y\\ \\text{(spätná substitúcia)}.$$
       Rozklad sa oplatí, ak riešime viac sústav s rovnakou maticou a rôznymi pravými stranami. Dostaneme aj determinant $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$.
       Pre symetrické pozitívne definitné matice existuje úspornejší <em>Choleského rozklad</em> $A=LL^{T}$.</p>`,
      `<p><strong>Zložitosť.</strong> Priamy chod Gaussovej eliminácie stojí približne $\\frac{2}{3}n^3$ aritmetických operácií, každá trojuholníková substitúcia asi $n^2$. Pri dvojnásobnom
       rozmere sa čas eliminácie zväčší asi osemkrát. Inverznú maticu (asi $2n^3$ operácií) na riešenie sústavy počítať netreba. Pre <em>pásové</em> matice so šírkou pásu $w$ klesne
       cena na $O(nw^2)$, pre trojdiagonálne na $O(n)$. Pri veľkých <em>riedkych</em> maticiach (väčšina prvkov nulová) eliminácia zapĺňa nuly, preto sa uplatnia iteračné metódy.</p>`,
      `<p><strong>Iteračné metódy.</strong> Z $i$-tej rovnice vyjadríme $x_i$ a dosadzujeme predchádzajúcu aproximáciu. <strong>Jacobiho metóda</strong> používa iba hodnoty z minulého kroku,
       <strong>Gaussova–Seidelova</strong> hneď využije už prepočítané zložky:
       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$
       Obe metódy konvergujú pre každý štart, ak je matica <strong>rýdzo diagonálne dominantná</strong> ($|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$ pre každý riadok); Gaussova–Seidelova aj pre symetrickú
       pozitívne definitnú maticu. Jeden krok stojí rádovo toľko operácií, koľko má matica nenulových prvkov. Zastavujeme, keď $\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$ alebo keď je reziduum $\\|b-Ax^{(k)}\\|$ malé.</p>`,
      `<p><strong>Mocninová metóda.</strong> Nech má matica $A$ vlastné čísla $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$ (dominantné $\\lambda_1$ je jediné s najväčšou absolútnou hodnotou).
       Opakované násobenie $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$ zosilňuje zložku v smere vlastného vektora $v_1$, takže $x^{(k)}$ sa blíži k $\\pm v_1$ rýchlosťou $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$.
       Vlastné číslo odhadneme <strong>Rayleighovým podielom</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$ alebo podielom zodpovedajúcich zložiek $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$.
       Najmenšie vlastné číslo v absolútnej hodnote nájde <em>inverzná mocninová metóda</em> (mocninová metóda pre $A^{-1}$, v každom kroku sa rieši sústava s LU rozkladom). Na tomto princípe
       je založené aj hodnotenie stránok PageRank.</p>`
    ],
    examples: [
      { task: 'Nájdite LU rozklad matice $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$ a vyriešte $Ax=b$ pre $b=(4;\\ 10;\\ 24)^{T}$.',
        steps: ['1. krok: $l_{21}=\\frac{4}{2}=2$, $l_{31}=\\frac{8}{2}=4$; riadky sa zmenia na $(0, 1, 1)$ a $(0, 3, 5)$.',
          '2. krok: $l_{32}=\\frac{3}{1}=3$; tretí riadok $(0, 0, 2)$. Teda $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$, $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$.',
          '$Ly=b$: $y_1=4$, $y_2=10-2\\cdot 4=2$, $y_3=24-4\\cdot 4-3\\cdot 2=2$.',
          '$Ux=y$: $x_3=\\frac{2}{2}=1$, $x_2=2-1=1$, $x_1=\\frac{4-1-1}{2}=1$. Riešenie $x=(1;\\ 1;\\ 1)^{T}$, navyše $\\det A=2\\cdot 1\\cdot 2=4$.'] },
      { task: 'Sústavu $4x_1-x_2=7$, $x_1+3x_2=5$ (riešenie $x=(2;\\ 1)$) riešte z bodu $(0;\\ 0)$ dvoma krokmi Jacobiho a Gaussovej–Seidelovej metódy.',
        steps: ['Iteračné predpisy: $x_1=\\frac{7+x_2}{4}$, $x_2=\\frac{5-x_1}{3}$. Matica je diagonálne dominantná ($4&gt;1$, $3&gt;1$), obe metódy konvergujú.',
          'Jacobi: $x^{(1)}=(1{,}75;\\ 1{,}6667)$, $x^{(2)}=\\left(\\frac{7+1{,}6667}{4};\\ \\frac{5-1{,}75}{3}\\right)=(2{,}1667;\\ 1{,}0833)$.',
          'Gauss–Seidel: $x_1^{(1)}=1{,}75$, hneď $x_2^{(1)}=\\frac{5-1{,}75}{3}=1{,}0833$; $x_1^{(2)}=\\frac{7+1{,}0833}{4}=2{,}0208$, $x_2^{(2)}=\\frac{5-2{,}0208}{3}=0{,}9931$.',
          'Po dvoch krokoch má Gaussova–Seidelova metóda chybu asi $0{,}02$, Jacobiho asi $0{,}17$.'] }
    ]
  });

  gen('v7-matice', () => {
    const t = Math.random();
    if (t < 0.36) {
      const { A, b } = ddSystem(), gs = t < 0.18;
      const x0 = gs ? [0, 0, 0] : [pick([0, 1]), pick([0, 1]), 1];
      const x = [...x0];
      const nx = [0, 1, 2].map((i) => {
        const src = gs ? x : x0;
        const v = (b[i] - sum([0, 1, 2].filter((j) => j !== i).map((j) => A[i][j] * src[j]))) / A[i][i];
        if (gs) x[i] = v;
        return v;
      });
      const ans = nx.map((v) => round(v, 4));
      // výsledok druhej metódy (typická zámena Jacobi ↔ Gauss–Seidel)
      const ox = [...x0], other = [0, 1, 2].map((i) => {
        const src = gs ? x0 : ox;
        const v = (b[i] - sum([0, 1, 2].filter((j) => j !== i).map((j) => A[i][j] * src[j]))) / A[i][i];
        if (!gs) ox[i] = v;
        return round(v, 4);
      });
      const diff = other.some((v, i) => Math.abs(v - ans[i]) > 0.00011);
      const mistakes = diff ? [{ value: other, msg: gs
        ? T.s('Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.')
        : T.s('Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.') }] : [];
      const steps = [0, 1, 2].map((i) => ({ q: T`Vypočítaj $x_${i + 1}^{(1)}$. ${R(4)}`, answer: ans[i], tol: 0.00011, show: nt(ans[i], 4), signed: ans[i] < 0 }));
      const rows = [0, 1, 2].map((i) => `$x_${i + 1}^{(1)}=\\frac{${b[i]}${[0, 1, 2].filter((j) => j !== i && A[i][j] !== 0).map((j) => {
        const val = gs && j < i ? nx[j] : x0[j];
        return `${A[i][j] > 0 ? '-' : '+'}${Math.abs(A[i][j])}\\cdot ${pn(val, 4)}`;
      }).join('')}}{${A[i][i]}}\\approx ${dd(nx[i], 4)}$`);
      return {
        mistakes, steps,
        type: 'tuple', answer: ans, tol: 0.00011,
        q: T`Sústavu ${sysTex(A, b)} rieš ${gs ? T.s('Gaussovou–Seidelovou') : T.s('Jacobiho')} metódou zo štartu $x^{(0)}=${vec(x0)}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.`,
        solution: T`${rows.join(', ')}.${gs ? T.s(' Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.') : T.s(' Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.')}`,
        hint: gs ? T.s('Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.')
          : T.s('Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.')
      };
    }
    if (t < 0.56) {
      let L, U, A;
      do {
        L = [[1, 0, 0], [pick(NZ3), 1, 0], [pick(NZ3), pick(NZ3), 1]];
        U = [[pick([1, 2, 3, -2]), rnd(-3, 3), rnd(-3, 3)], [0, pick([1, 2, -1, 3]), rnd(-3, 3)], [0, 0, pick([1, 2, 3, -1, -2, 4])]];
        A = mulMat(L, U);
      } while (A.some((r) => r.some((v) => Math.abs(v) > 30)));
      const Q = pick([
        ['l_{21}', L[1][0]], ['l_{31}', L[2][0]], ['l_{32}', L[2][1]], ['u_{22}', U[1][1]], ['u_{23}', U[1][2]], ['u_{33}', U[2][2]], ['\\det A', U[0][0] * U[1][1] * U[2][2]]
      ]);
      const u32 = A[2][1] - L[2][0] * U[0][1];
      const MIS = {
        'l_{21}': U[0][0] !== 1 ? [{ value: A[1][0], msg: T.s('Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.') }] : [],
        'l_{31}': U[0][0] !== 1 ? [{ value: A[2][0], msg: T.s('Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.') }] : [],
        'l_{32}': A[2][1] !== u32 && A[2][1] / U[1][1] !== L[2][1] ? [{ value: A[2][1] / U[1][1], msg: T.s('Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.') }] : [],
        'u_{22}': A[1][1] !== U[1][1] ? [{ value: A[1][1], msg: T.s('Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.') }] : [],
        'u_{23}': A[1][2] !== U[1][2] ? [{ value: A[1][2], msg: T.s('Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.') }] : [],
        'u_{33}': A[2][2] !== U[2][2] ? [{ value: A[2][2], msg: T.s('Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.') }] : [],
        '\\det A': A[0][0] * A[1][1] * A[2][2] !== Q[1] ? [{ value: A[0][0] * A[1][1] * A[2][2], msg: T.s('Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.') }] : []
      };
      const S = { l21: { q: T.s('Urči multiplikátor $l_{21}$.'), answer: L[1][0], signed: true }, l31: { q: T.s('Urči multiplikátor $l_{31}$.'), answer: L[2][0], signed: true },
        u22: { q: T.s('Urči $u_{22}$.'), answer: U[1][1], signed: true }, l32: { q: T.s('Urči multiplikátor $l_{32}$.'), answer: L[2][1], signed: true },
        u33: { q: T.s('Urči $u_{33}$.'), answer: U[2][2], signed: true } };
      const STEPS = {
        'u_{22}': [S.l21, S.u22], 'u_{23}': [S.l21, { q: T.s('Urči $u_{23}$.'), answer: U[1][2], signed: true }],
        'l_{32}': [S.l21, S.l31, S.u22, S.l32], 'u_{33}': [S.l21, S.l31, S.l32, S.u33],
        '\\det A': [S.u22, S.u33, { q: T.s('Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.'), answer: Q[1], signed: true }]
      };
      return {
        mistakes: MIS[Q[0]],
        ...(STEPS[Q[0]] ? { steps: STEPS[Q[0]] } : {}),
        signed: true, answer: Q[1],
        q: T`Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A=${mat(A)}$ a urči ${Q[0] === '\\det A' ? T.s('determinant $\\det A$ ako súčin diagonálnych prvkov $U$') : T`prvok $${Q[0]}$`}.`,
        solution: T`Multiplikátory: $l_{21}=\\frac{${A[1][0]}}{${A[0][0]}}=${L[1][0]}$, $l_{31}=\\frac{${A[2][0]}}{${A[0][0]}}=${L[2][0]}$; po prvom kroku má druhý riadok tvar $(0, ${U[1][1]}, ${U[1][2]})$
          a tretí $(0, ${A[2][1] - L[2][0] * U[0][1]}, ${A[2][2] - L[2][0] * U[0][2]})$; $l_{32}=${L[2][1]}$, $u_{33}=${U[2][2]}$.
          $L=${mat(L)}$, $U=${mat(U)}$${Q[0] === '\\det A' ? `, $\\det A=${U[0][0]}\\cdot ${par(U[1][1])}\\cdot ${par(U[2][2])}=${Q[1]}$` : ''}.`,
        hint: T.s('Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.')
      };
    }
    if (t < 0.74) {
      let A;
      const c = rnd(1, 4);
      do { A = [[rnd(1, 7), c], [c, rnd(1, 7)]]; } while (A[0][0] === A[1][1] && c === 1);
      const x0 = [1, 1], x1 = mulVec(A, x0), x2 = mulVec(A, x1);
      const lam = (x2[0] * x1[0] + x2[1] * x1[1]) / (x1[0] ** 2 + x1[1] ** 2);
      const tr = A[0][0] + A[1][1], det = A[0][0] * A[1][1] - A[0][1] * A[1][0], ex = (tr + Math.sqrt(tr * tr - 4 * det)) / 2;
      const w0 = (x1[0] + x1[1]) / 2, wn = x2[0] * x1[0] + x2[1] * x1[1];
      return {
        mistakes: [
          ...(Math.abs(round(w0, 4) - round(lam, 4)) > 0.0001 ? [{ value: round(w0, 4), msg: T.s('Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.') }] : []),
          { value: wn, msg: T.s('Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.') }
        ],
        steps: [
          { q: T.s('Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).'), type: 'tuple', answer: x1, show: x1.join('; ') },
          { q: T.s('Vypočítaj $Ax^{(1)}$.'), type: 'tuple', answer: x2, show: x2.join('; ') },
          { q: T`Vypočítaj Rayleighov podiel. ${R(4)}`, answer: round(lam, 4), tol: 0.0001, show: nt(lam, 4) }
        ],
        answer: round(lam, 4), tol: 0.0001,
        q: T`Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A=${mat(A)}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. ${R(4)}`,
        solution: T`$x^{(1)}=Ax^{(0)}=(${x1[0]};\\ ${x1[1]})^{T}$, $Ax^{(1)}=(${x2[0]};\\ ${x2[1]})^{T}$. Rayleighov podiel: $\\frac{${x1[0]}\\cdot ${x2[0]}+${x1[1]}\\cdot ${x2[1]}}{${x1[0]}^2+${x1[1]}^2}=\\frac{${x2[0] * x1[0] + x2[1] * x1[1]}}{${x1[0] ** 2 + x1[1] ** 2}}\\approx ${dd(lam, 4)}$.
          Presné dominantné vlastné číslo je $\\frac{${tr}+\\sqrt{${tr * tr - 4 * det}}}{2}\\approx ${nm(ex, 4)}$.`,
        hint: T.s('Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.')
      };
    }
    if (t < 0.86) {
      const n1v = pick([500, 1000, 2000]), k = pick([2, 3, 4, 5, 10]), tm0 = pick([0.5, 1, 2, 3, 4]);
      const r = tm0 * k ** 3;
      return {
        mistakes: [
          { value: tm0 * k, msg: T.s('Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.') },
          { value: tm0 * k * k, msg: T.s('Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.') }
        ],
        answer: r,
        q: T`Gaussova eliminácia sústavy s $${n1v}$ neznámymi trvá na istom počítači $${nm(tm0)}$ s. Približne koľko sekúnd potrvá sústava s $${n1v * k}$ neznámymi (plná matica)?`,
        solution: T`Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil $${k}$-krát, čas teda $${k}^3=${k ** 3}$-krát: $${nm(tm0)}\\cdot ${k ** 3}=${nm(r)}$ s.`,
        hint: T.s('Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.')
      };
    }
    let L, U, A;
    do {
      L = [[1, 0, 0], [pick(NZ2), 1, 0], [pick(NZ2), pick(NZ2), 1]];
      U = [[pick([1, 2, -1]), rnd(-2, 2), rnd(-2, 2)], [0, pick([1, -1, 2]), rnd(-2, 2)], [0, 0, pick([1, -1, 2, 3])]];
      A = mulMat(L, U);
    } while (A.some((r) => r.some((v) => Math.abs(v) > 12)) || A[1][0] === 0);
    const xs = [rnd(-3, 3), rnd(-3, 3), rnd(-3, 3)], b = mulVec(A, xs);
    return {
      steps: [
        { q: T.s('Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?'), answer: L[1][0], signed: true },
        { q: T.s('Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?'), answer: L[2][1], signed: true },
        { q: T.s('Spätným chodom urči najprv $x_3$.'), answer: xs[2], signed: true },
        { q: T.s('Zadaj celé riešenie $x_1; x_2; x_3$.'), type: 'tuple', answer: xs, signed: true, tol: 1e-6 }
      ],
      type: 'tuple', answer: xs, tol: 1e-6,
      q: T`Gaussovou elimináciou vyrieš sústavu ${sysTex(A, b)}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.`,
      solution: T`Priamy chod s multiplikátormi $l_{21}=${L[1][0]}$, $l_{31}=${L[2][0]}$, $l_{32}=${L[2][1]}$ dá hornú trojuholníkovú maticu $U=${mat(U)}$ a pravú stranu $y=(${[b[0], b[1] - L[1][0] * b[0], b[2] - L[2][0] * b[0] - L[2][1] * (b[1] - L[1][0] * b[0])].join(';\\ ')})^{T}$.
        Spätný chod: $x_3=${xs[2]}$, $x_2=${xs[1]}$, $x_1=${xs[0]}$.`,
      hint: T.s('Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.')
    };
  });
})();
