/* Vysoká škola, oblasť 3: Elektromagnetizmus (v3). Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v3' }, l));
  const gen = EXERCISES.register;

  // zaokrúhlenie a pomocník pre typické chyby (chyba sa uvedie len vtedy, ak sa líši od správnej odpovede)
  const r2 = (x) => Math.round(x * 100) / 100;
  const r3 = (x) => Math.round(x * 1000) / 1000;
  const mis = (value, answer, msg, tol = 1e-9) => (Math.abs(value - answer) > tol ? [{ value, msg }] : []);

  const K = 8.99;        // Coulombova konštanta k = 8,99 * 10^9 N m^2/C^2 (v tvare 8,99 * 10^9)
  const EPS0 = 8.854e-12; // permitivita vákua F/m
  const MU0 = 4 * Math.PI * 1e-7; // permeabilita vákua T m/A
  const C = 3e8;         // rýchlosť svetla m/s

  /* ---------- 1. Elektrické pole a elektrický potenciál ---------- */

  lesson({
    id: 'v3-elektricke-pole', order: 10, theme: 'elektrina', title: 'Elektrické pole a elektrický potenciál',
    summary: 'Intenzita a potenciál bodového náboja, princíp superpozície a práca v elektrickom poli.',
    theory: [
      `<p><strong>Intenzita elektrického poľa</strong> v bode je sila na kladný skúšobný náboj delená jeho veľkosťou: $\\vec E=\\frac{\\vec F}{q}$, v jednotkách $\\text{V/m}$. Pole je vlastnosť priestoru, nie vlastnosť skúšobného náboja.</p>`,
      `<p>Pre bodový náboj $Q$ vo vzdialenosti $r$ je $E=k\\frac{Q}{r^2}$, kde $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$. Smer poľa je radiálny: od kladného náboja von a ku záporného dnu.</p>`,
      `<p><strong>Elektrický potenciál</strong> je energia na jednotku náboja: $V=k\\frac{Q}{r}$. Práca pri presune náboja $q$ medzi bodmi je $W=q\\,\\Delta V$ a nezávisí od dráhy, len od začiatočného a koncového bodu.</p>`,
      `<p><strong>Superpozícia:</strong> polia viacerých nábojov sa skladajú vektorovo, potenciály sa skladajú sčítaním ako skaláre. Preto je potenciál jednoduchší na výpočet než intenzita.</p>`
    ],
    examples: [
      { task: 'Bodový náboj $Q=2\\,\\mu\\text{C}$ je vo vzdialenosti $r=3\\,\\text{m}$. Aká je intenzita poľa v kV/m? Použi $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$.',
        steps: ['$E=k\\frac{Q}{r^2}=8{,}99\\cdot\\frac{2}{3^2}$.', '$E\\approx 2{,}00\\,\\text{kV/m}$', '<strong>Výsledok: približne $2{,}00\\,\\text{kV/m}$</strong>'] },
      { task: 'Ako sa zmení intenzita poľa bodového náboja, ak sa vzdialenosť zdvojnásobí?',
        steps: ['Intenzita je úmerná $\\frac{1}{r^2}$.', '$\\frac{1}{(2r)^2}=\\frac{1}{4r^2}$.', '<strong>Výsledok: klesne na štvrtinu</strong>'] }
    ]
  });

  gen('v3-elektricke-pole', () => {
    const Q = rnd(1, 9), r = rnd(1, 5), E = r2(K * Q / (r * r));
    return {
      tol: 0.01,
      q: T`Bodový náboj $Q=${Q}\\,\\mu\\text{C}$ je v bode vo vzdialenosti $r=${r}\\,\\text{m}$ od seba. Aká je veľkosť intenzity elektrického poľa v kV/m? Použi $k=8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$ a výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: E,
      solution: T`$E=k\\frac{Q}{r^2}=8{,}99\\cdot 10^{9}\\cdot\\frac{${Q}\\cdot 10^{-6}}{${r * r}}\\approx ${fmt(E)}\\,\\text{kV/m}$.`,
      hint: T`Intenzita klesá s druhou mocninou vzdialenosti. Náboj v mikrokulomboch najprv prepočítaj na kulomby ($1\\,\\mu\\text{C}=10^{-6}\\,\\text{C}$).`,
      mistakes: [
        ...mis(r2(K * Q / r), E, T`Vzdialenosť si nedal na druhú. Intenzita je úmerná $\\frac{1}{r^2}$, nie $\\frac{1}{r}$.`, 0.01),
        ...mis(r2(K * Q * r * r), E, T`Vzdialenosť si dal do čitateľa. Vo vzorci $E=k\\frac{Q}{r^2}$ je v menovateli.`, 0.01)
      ]
    };
  });

  /* ---------- 2. Gaussov zákon ---------- */

  lesson({
    id: 'v3-gauss', order: 20, theme: 'elektrina', title: 'Gaussov zákon',
    summary: 'Elektrický tok uzavretou plochou a jeho súvis s nábojom vnútri plochy.',
    theory: [
      `<p><strong>Elektrický tok</strong> plochou $S$ je $\\Phi_E=\\oint \\vec E\\cdot d\\vec S$, teda súčet zložiek poľa kolmých na plochu. Jednotkou je $\\text{N\\,m}^2/\\text{C}$.</p>`,
      `<p><strong>Gaussov zákon</strong> hovorí, že tok uzavretou plochou je úmerný náboju vnútri plochy: $\\oint \\vec E\\cdot d\\vec S=\\frac{Q_{\\text{vnútri}}}{\\varepsilon_0}$, kde $\\varepsilon_0\\approx 8{,}854\\cdot 10^{-12}\\,\\text{F/m}$.</p>`,
      `<p><strong>Prečo to platí:</strong> siločiary vychádzajú z kladných nábojov a vchádzajú do záporných. Tok uzavretou plochou teda zachytí presne toľko siločiar, koľko náboja je vnútri, a nezáleží na tvare plochy.</p>`,
      `<p>Gaussov zákon je výhodný pri symetrických úlohách, napríklad pri guli alebo nekonečnej rovine náboja. Vo vhodne zvolenej ploche sa pole dá vytiahnuť pred integrál a výpočet je jednoduchý.</p>`
    ],
    examples: [
      { task: 'Uzavretou plochou prechádza náboj $Q=1\\,\\mu\\text{C}$. Aký je celkový tok plochou, ak $\\varepsilon_0=8{,}854\\cdot 10^{-12}\\,\\text{F/m}$?',
        steps: ['$\\Phi_E=\\frac{Q}{\\varepsilon_0}=\\frac{10^{-6}}{8{,}854\\cdot 10^{-12}}$.', '$\\Phi_E\\approx 1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$', '<strong>Výsledok: približne $1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$</strong>'] },
      { task: 'Náboj vnútri plochy sa zdvojnásobí. Ako sa zmení tok?',
        steps: ['Tok je priamo úmerný náboju.', '<strong>Výsledok: zdvojnásobí sa</strong>'] }
    ]
  });

  gen('v3-gauss', () => {
    const Q = rnd(2, 9), Phi = Q * 1e-6 / EPS0 / 1e5, ans = r2(Phi);
    return {
      tol: 0.01,
      q: T`Uzavretou plochou prechádza náboj $Q=${Q}\\,\\mu\\text{C}$ a nič iné. Aký je celkový elektrický tok $\\Phi_E$ touto plochou v jednotkách $10^{5}\\,\\text{N\\,m}^2/\\text{C}$? Použi $\\varepsilon_0=8{,}854\\cdot 10^{-12}\\,\\text{F/m}$ a výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: ans,
      solution: T`$\\Phi_E=\\frac{Q}{\\varepsilon_0}=\\frac{${Q}\\cdot 10^{-6}}{8{,}854\\cdot 10^{-12}}\\approx ${fmt(r3(Phi))}\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$.`,
      hint: T`Tok uzavretou plochou nezávisí od tvaru plochy, len od náboja vnútri. Vo vzorci sa delí permitivitou vákua.`,
      mistakes: [
        ...mis(r2(Phi / (4 * Math.PI)), ans, T`Do vzorca si dosadil $4\\pi$. Ten patrí do intenzity bodového náboja, nie do Gaussovho zákona.`, 0.01),
        ...mis(Q, ans, T`Zabudol si prepočítať náboj na tok. Tok je $\\frac{Q}{\\varepsilon_0}$, nie samotný náboj.`, 0.01)
      ]
    };
  });

  /* ---------- 3. Elektrický prúd a elektrické obvody ---------- */

  lesson({
    id: 'v3-elektricky-prud', order: 30, theme: 'elektrina', title: 'Elektrický prúd a elektrické obvody',
    summary: 'Ohmov zákon, odpory v sérii a paralelne a celkový prúd zo zdroja.',
    theory: [
      `<p><strong>Elektrický prúd</strong> je množstvo náboja prechádzajúce prierezom za jednotku času: $I=\\frac{\\Delta Q}{\\Delta t}$, v amperoch. Smer prúdu sa dohodne ako smer pohybu kladných nábojov.</p>`,
      `<p><strong>Ohmov zákon</strong>: napätie na vodiči je úmerné prúdu, $U=R\\,I$, kde $R$ je odpor v ohmoch. Pri sériovom zapojení sa odpory sčítajú, $R=R_1+R_2$.</p>`,
      `<p>Pri <strong>paralelnom zapojení</strong> je napätie na oboch vetvách rovnaké a prúdy sa sčítajú. Ekvivalentný odpor je menší než najmenší z odporov: $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.</p>`,
      `<p><strong>Prečo je odpor paralelne menší:</strong> druhá vetva dáva prúdu ďalšiu cestu, takže celkovo prechádza väčší prúd pri tom istom napätí. Zdroj preto dodáva väčší prúd, než by dodal jednou vetvou.</p>`
    ],
    examples: [
      { task: 'Dva rezistory $R_1=6\\,\\Omega$ a $R_2=3\\,\\Omega$ sú zapojené paralelne na napätie $U=6\\,\\text{V}$. Aký celkový prúd dodáva zdroj?',
        steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$, teda $R=2\\,\\Omega$.', '$I=\\frac{U}{R}=\\frac{6}{2}$.', '<strong>Výsledok: $I=3\\,\\text{A}$</strong>'] },
      { task: 'Rezistory $4\\,\\Omega$ a $6\\,\\Omega$ sú zapojené za sebou na napätie $10\\,\\text{V}$. Aký prúd tečie?',
        steps: ['$R=4+6=10\\,\\Omega$.', '$I=\\frac{10}{10}$.', '<strong>Výsledok: $I=1\\,\\text{A}$</strong>'] }
    ]
  });

  gen('v3-elektricky-prud', () => {
    const U = pick([6, 9, 12, 24]), R1 = rnd(2, 20), R2 = rnd(2, 20), Req = R1 * R2 / (R1 + R2), ans = r2(U / Req);
    return {
      tol: 0.01,
      q: T`Zdroj napätia $U=${U}\\,\\text{V}$ je pripojený na dva rezistory zapojené paralelne: $R_1=${R1}\\,\\Omega$ a $R_2=${R2}\\,\\Omega$. Aký celkový prúd dodáva zdroj v amperoch? Výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: ans,
      solution: T`$\\frac{1}{R}=\\frac{1}{${R1}}+\\frac{1}{${R2}}$, teda $R\\approx ${fmt(r3(Req))}\\,\\Omega$. Potom $I=\\frac{U}{R}\\approx ${fmt(ans)}\\,\\text{A}$.`,
      hint: T`Najprv nájdi ekvivalentný odpor paralelného zapojenia, potom použi Ohmov zákon.`,
      mistakes: [
        ...mis(r2(U / (R1 + R2)), ans, T`Rezistory si zapojil do série. Pri paralelnom zapojení odpory nesčítavaš, ale počítaš $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.`, 0.01),
        ...mis(r2(U * Req), ans, T`Výsledok si vynásobil odporom namiesto delenia. Podľa Ohmovho zákona je $I=\\frac{U}{R}$.`, 0.01)
      ]
    };
  });

  /* ---------- 4. Magnetické pole a magnetická sila ---------- */

  lesson({
    id: 'v3-magneticke-pole', order: 40, theme: 'magnetizmus', title: 'Magnetické pole a magnetická sila',
    summary: 'Lorentzova sila na pohybujúci sa náboj a na vodič s prúdom v magnetickom poli.',
    theory: [
      `<p><strong>Magnetická indukcia</strong> $\\vec B$ opisuje magnetické pole, jednotkou je tesla, $1\\,\\text{T}=1\\,\\text{N/(A\\,m)}$. Pole pôsobí silou len na pohybujúce sa náboje, statický náboj na magnetickú silu nereaguje.</p>`,
      `<p><strong>Lorentzova sila</strong> na náboj $q$ pohybujúci sa rýchlosťou $\\vec v$ je $\\vec F=q\\,\\vec v\\times\\vec B$. Jej veľkosť je $F=q\\,v\\,B\\sin\\alpha$, kde $\\alpha$ je uhol medzi $\\vec v$ a $\\vec B$.</p>`,
      `<p><strong>Smer sily</strong> sa určí pravidlom pravej ruky: prsty ukazujú smer rýchlosti, dlaň smer poľa a palec smer sily pre kladný náboj. Pri zápornom náboji je sila opačná.</p>`,
      `<p><strong>Prečo je sila kolmá na rýchlosť:</strong> magnetická sila nekoná prácu, mení iba smer pohybu. Častica preto v kolmom poli krúži, nie zrýchľuje. Vďaka tomu sa magnetické polia využívajú na zakrivovanie dráh častíc.</p>`
    ],
    examples: [
      { task: 'Elektrón letí kolmo na pole s indukciou $B=0{,}2\\,\\text{T}$ rýchlosťou $v=10^{5}\\,\\text{m/s}$. Aká je veľkosť sily, ak $q=1{,}6\\cdot 10^{-19}\\,\\text{C}$?',
        steps: ['$\\alpha=90^\\circ$, takže $\\sin\\alpha=1$.', '$F=qvB=1{,}6\\cdot 10^{-19}\\cdot 10^{5}\\cdot 0{,}2$.', '<strong>Výsledok: $F=3{,}2\\cdot 10^{-15}\\,\\text{N}$</strong>'] },
      { task: 'Častica s nábojom $q=2\\,\\mu\\text{C}$ letí rýchlosťou $v=300\\,\\text{m/s}$ kolmo na pole $B=0{,}5\\,\\text{T}$. Aká je sila v mikronewtonoch?',
        steps: ['$F=qvB=2\\cdot 300\\cdot 0{,}5$ v jednotkách $\\mu\\text{N}$.', '<strong>Výsledok: $F=300\\,\\mu\\text{N}$</strong>'] }
    ]
  });

  gen('v3-magneticke-pole', () => {
    const q = rnd(1, 9), v = 100 * rnd(1, 9), Bj = rnd(1, 9), B = Bj / 10, F = q * v * Bj / 10;
    return {
      q: T`Častica s nábojom $q=${q}\\,\\mu\\text{C}$ letí rýchlosťou $v=${v}\\,\\text{m/s}$ kolmo na magnetické pole s indukciou $B=${fmt(B)}\\,\\text{T}$. Akú silu na ňu pôsobí pole? Výsledok vyjadri v mikronewtonoch ($\\mu\\text{N}$).`,
      answer: F,
      solution: T`Lorentzova sila: $F=qvB=${q}\\cdot 10^{-6}\\cdot ${v}\\cdot ${fmt(B)}=${F}\\cdot 10^{-6}\\,\\text{N}$, teda $${F}\\,\\mu\\text{N}$.`,
      hint: T`Pri kolmom smere rýchlosti je $\\sin\\alpha=1$, takže $F=qvB$. Pozor na predpony: $1\\,\\mu\\text{C}=10^{-6}\\,\\text{C}$.`,
      mistakes: [
        ...mis(q * v, F, T`Zabudol si magnetickú indukciu. Sila je $F=qvB$, nie $qv$.`),
        ...mis(r2(q * v / B), F, T`Silu si vydelil indukciou. Vo vzorci $F=qvB$ sa násobí.`)
      ]
    };
  });

  /* ---------- 5. Elektromagnetická indukcia ---------- */

  lesson({
    id: 'v3-indukcia', order: 50, theme: 'magnetizmus', title: 'Elektromagnetická indukcia',
    summary: 'Faradayov zákon: napätie vzniká zmenou magnetického toku plochou slučky.',
    theory: [
      `<p><strong>Magnetický tok</strong> plochou $S$ je $\\Phi=B\\,S\\cos\\alpha$, kde $\\alpha$ je uhol medzi poľom a normálou plochy. Jednotkou je weber, $1\\,\\text{Wb}=1\\,\\text{T\\,m}^2$.</p>`,
      `<p><strong>Faradayov zákon indukcie</strong>: v uzavretej slučke vzniká napätie úmerné rýchlosti zmeny toku, $U_i=-\\frac{\\Delta\\Phi}{\\Delta t}$. Záporné znamienko hovorí o Lenzovom pravidle, že indukovaný prúd bráni zmene toku.</p>`,
      `<p><strong>Ako vzniká napätie:</strong> zmenou indukcie, zmenou plochy alebo otočením slučky v poli. Ak je tok konštantný, napätie nevzniká, aj keď je pole silné.</p>`,
      `<p><strong>Prečo je tam delenie časom:</strong> napätie závisí od toho, ako rýchlo sa tok mení, nie od jeho veľkosti. Rýchla zmena dá väčšie napätie než pomalá, aj pri rovnakej celkovej zmene toku.</p>`
    ],
    examples: [
      { task: 'Plocha slučky $S=0{,}5\\,\\text{m}^2$ je kolmo v poli, ktoré sa za $2\\,\\text{s}$ zmení o $\\Delta B=4\\,\\text{T}$. Aké napätie sa indukuje?',
        steps: ['$U_i=\\frac{\\Delta\\Phi}{\\Delta t}=\\frac{S\\,\\Delta B}{\\Delta t}=\\frac{0{,}5\\cdot 4}{2}$.', '<strong>Výsledok: $U_i=1\\,\\text{V}$</strong>'] },
      { task: 'Tok plochou je stály. Aké napätie sa indukuje?',
        steps: ['Napätie je úmerné zmene toku, $\\Delta\\Phi=0$.', '<strong>Výsledok: $U_i=0\\,\\text{V}$</strong>'] }
    ]
  });

  gen('v3-indukcia', () => {
    const dB = rnd(2, 9), S = rnd(1, 9) / 10, dt = rnd(2, 5), U = r2(dB * S / dt);
    return {
      tol: 0.01,
      q: T`Plocha slučky $S=${fmt(S)}\\,\\text{m}^2$ je celá v magnetickom poli, ktoré kolmo na plochu narastie za čas $\\Delta t=${dt}\\,\\text{s}$ o $\\Delta B=${dB}\\,\\text{T}$. Aké je veľkosť indukovaného napätia v voltoch? Výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: U,
      solution: T`$U_i=\\left|\\frac{\\Delta\\Phi}{\\Delta t}\\right|=\\frac{S\\,\\Delta B}{\\Delta t}=\\frac{${fmt(S)}\\cdot ${dB}}{${dt}}\\approx ${fmt(U)}\\,\\text{V}$.`,
      hint: T`Tok je $BS$ a napätie je jeho zmena za čas. Plocha je konštantná, takže sa mení len indukcia.`,
      mistakes: [
        ...mis(r2(dB * S * dt), U, T`Časom si násobil namiesto delenia. Napätie je rýchlosť zmeny toku, $\\frac{\\Delta\\Phi}{\\Delta t}$.`, 0.01),
        ...mis(r2(dB * S), U, T`Zabudol si deliť časom. Napätie závisí od rýchlosti zmeny toku, nie od samotnej zmeny.`, 0.01)
      ]
    };
  });

  /* ---------- 6. Maxwellove rovnice ---------- */

  lesson({
    id: 'v3-maxwell', order: 60, theme: 'magnetizmus', title: 'Maxwellove rovnice',
    summary: 'Štyri rovnice, ktoré spájajú elektrické a magnetické pole, a ich výpočtové použitie pri vodiči s prúdom.',
    theory: [
      `<p><strong>Maxwellove rovnice</strong> v integrálnom tvare sú štyri: Gaussov zákon pre elektrické pole, Gaussov zákon pre magnetické pole (magnetické náboje neexistujú), Faradayov zákon indukcie a Ampère-Maxwellov zákon. Spolu popisujú všetky klasické elektromagnetické javy.</p>`,
      `<p><strong>Ampère-Maxwellov zákon</strong> hovorí, že cirkulácia magnetického poľa po uzavretej krivke je úmerná prúdu cez ňu a zmene elektrického toku: $\\oint \\vec B\\cdot d\\vec l=\\mu_0 I+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}$. Pri stacionárnych dejoch zostáva len prúdový člen.</p>`,
      `<p>Z Ampèrovho zákona pre dlhý priamy vodič s prúdom $I$ vo vzdialenosti $r$ vyplýva $B=\\frac{\\mu_0 I}{2\\pi r}$, pričom $\\mu_0=4\\pi\\cdot 10^{-7}\\,\\text{T\\,m/A}$.</p>`,
      `<p><strong>Prečo je dôležitý posuvný prúd:</strong> bez člena so zmenou elektrického toku by zákon nebol v súlade so zachovaním náboja. Maxwell ho doplnil a z rovníc vyplynula existencia elektromagnetických vĺn.</p>`
    ],
    examples: [
      { task: 'Priamym vodičom preteká prúd $I=10\\,\\text{A}$. Aká je magnetická indukcia vo vzdialenosti $r=0{,}2\\,\\text{m}$? Výsledok v mikroteslach.',
        steps: ['$B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{4\\pi\\cdot 10^{-7}\\cdot 10}{2\\pi\\cdot 0{,}2}$.', '$B=\\frac{2\\cdot 10^{-7}\\cdot 10}{0{,}2}=10^{-5}\\,\\text{T}$.', '<strong>Výsledok: $B=10\\,\\mu\\text{T}$</strong>'] },
      { task: 'Ako sa zmení indukcia vodiča s prúdom, ak sa vzdialenosť od neho zdvojnásobí?',
        steps: ['$B$ je úmerné $\\frac{1}{r}$.', '<strong>Výsledok: klesne na polovicu</strong>'] }
    ]
  });

  gen('v3-maxwell', () => {
    const I = rnd(2, 20), r = pick([0.1, 0.2, 0.25, 0.4, 0.5]), B = r2(0.2 * I / r);
    return {
      tol: 0.01,
      q: T`Dlhým priamym vodičom preteká prúd $I=${I}\\,\\text{A}$. Aká je veľkosť magnetickej indukcie vo vzdialenosti $r=${fmt(r)}\\,\\text{m}$ od vodiča? Výsledok v mikroteslach ($\\mu\\text{T}$) zaokrúhli na 2 desatinné miesta. Použi $\\mu_0=4\\pi\\cdot 10^{-7}\\,\\text{T\\,m/A}$.`,
      answer: B,
      solution: T`$B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{4\\pi\\cdot 10^{-7}\\cdot ${I}}{2\\pi\\cdot ${fmt(r)}}=\\frac{2\\cdot 10^{-7}\\cdot ${I}}{${fmt(r)}}\\,\\text{T}\\approx ${fmt(B)}\\,\\mu\\text{T}$.`,
      hint: T`Pre priamy vodič je indukcia úmerná prúdu a nepriamo úmerná vzdialenosti. Nezabudni na $2\\pi$ v menovateli.`,
      mistakes: [
        ...mis(r2(MU0 * I / r * 1e6), B, T`Zabudol si deliť $2\\pi$. Pre priamy vodič je $B=\\frac{\\mu_0 I}{2\\pi r}$.`, 0.01),
        ...mis(r2(0.2 * I * r), B, T`Vzdialenosť si násobil namiesto delenia. Indukcia so vzdialenosťou klesá.`, 0.01)
      ]
    };
  });

  /* ---------- 7. Elektromagnetické vlny ---------- */

  lesson({
    id: 'v3-em-vlny', order: 70, theme: 'vlny', title: 'Elektromagnetické vlny',
    summary: 'Vlna ako striedavé elektrické a magnetické pole kolmé na smer šírenia, s rýchlosťou svetla c.',
    theory: [
      `<p>Zmena elektrického poľa vytvára magnetické pole a zmena magnetického poľa vytvára elektrické pole. Ich vzájomné podporovanie sa šíri priestorom ako <strong>elektromagnetická vlna</strong>. Vo vákuu je jej rýchlosť $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
      `<p>Vlna má frekvenciu $f$ a vlnovú dĺžku $\\lambda$. Platí vzťah $c=\\lambda\\,f$, z ktorého vyplýva $\\lambda=\\frac{c}{f}$. Čím vyššia frekvencia, tým kratšia vlnová dĺžka.</p>`,
      `<p>Elektrické a magnetické pole vo vlne sú navzájom kolmé a obe sú kolmé na smer šírenia. Preto je elektromagnetická vlna <em>priečna</em>.</p>`,
      `<p><strong>Prečo je to dôležité:</strong> rádiové, svetelné aj röntgenové žiarenie sú tej istej povahy. Líšia sa len frekvenciou, a teda vlnovou dĺžkou, a s tým súvisia ich rôzne využitia.</p>`
    ],
    examples: [
      { task: 'Vysielač pracuje na frekvencii $f=100\\,\\text{MHz}$. Aká je vlnová dĺžka vlny vo vzduchu?',
        steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{100\\cdot 10^{6}}$.', '<strong>Výsledok: $\\lambda=3\\,\\text{m}$</strong>'] },
      { task: 'Vlnová dĺžka je $\\lambda=0{,}5\\,\\text{m}$. Aká je frekvencia vlny?',
        steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{0{,}5}$.', '<strong>Výsledok: $f=6\\cdot 10^{8}\\,\\text{Hz}=600\\,\\text{MHz}$</strong>'] }
    ]
  });

  gen('v3-em-vlny', () => {
    const f = pick([50, 60, 75, 100, 120, 150, 200, 300]), lam = C / (f * 1e6);
    return {
      q: T`Rozhlasová stanica vysiela na frekvencii $f=${f}\\,\\text{MHz}$. Akú vlnovú dĺžku $\\lambda$ má jej elektromagnetická vlna vo vzduchu? Použi $c=3\\cdot 10^{8}\\,\\text{m/s}$, výsledok v metroch.`,
      answer: lam,
      solution: T`$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{${f}\\cdot 10^{6}}=${fmt(lam)}\\,\\text{m}$.`,
      hint: T`Frekvenciu najprv prepočítaj na hertze ($1\\,\\text{MHz}=10^{6}\\,\\text{Hz}$), potom použi $\\lambda=\\frac{c}{f}$.`,
      mistakes: [
        ...mis(f * 300, lam, T`Vlnovú dĺžku si vynásobil frekvenciou. Platí $\\lambda=\\frac{c}{f}$, teda delenie.`),
        ...mis(C / f, lam, T`Frekvenciu si nepremenil na hertze. Pri megahertzoch je $1\\,\\text{MHz}=10^{6}\\,\\text{Hz}$.`)
      ]
    };
  });

  /* ---------- 8. Šírenie elektromagnetického žiarenia ---------- */

  lesson({
    id: 'v3-sirenie', order: 80, theme: 'svetlo', title: 'Šírenie elektromagnetického žiarenia',
    summary: 'Rýchlosť svetla v látke, index lomu a vplyv permitivity a permeability prostredia.',
    theory: [
      `<p>Vo vákuu sa elektromagnetické žiarenie šíri rýchlosťou $c$, v látke je jeho rýchlosť menšia. <strong>Index lomu</strong> $n=\\frac{c}{v}$ hovorí, koľkokrát je rýchlosť v látke menšia.</p>`,
      `<p>Pre nemagnetické prostredie s relatívnou permitivitou $\\varepsilon_r$ a permeabilitou $\\mu_r=1$ je $n=\\sqrt{\\varepsilon_r\\,\\mu_r}=\\sqrt{\\varepsilon_r}$. Dielektrikum s väčšou permitivitou teda spomaľuje vlnu.</p>`,
      `<p><strong>Prečo sa vlna spomalí:</strong> elektrické pole vlny polarizuje atómy látky, ich oscilácie sa oneskorujú a výsledná vlna sa šíri pomalšie. Frekvencia sa pri vstupe do látky nemení, mení sa rýchlosť aj vlnová dĺžka.</p>`,
      `<p>Práve tento jav vysvetľuje lom svetla na rozhraní dvoch prostredí a princíp šošoviek a optických vlákien.</p>`
    ],
    examples: [
      { task: 'Prostredie má relatívnu permitivitu $\\varepsilon_r=4$. Aký je index lomu?',
        steps: ['$n=\\sqrt{\\varepsilon_r}=\\sqrt{4}$.', '<strong>Výsledok: $n=2$</strong>'] },
      { task: 'Aká je rýchlosť svetla v prostredí s indexom lomu $n=2$, ak $c=3\\cdot 10^{8}\\,\\text{m/s}$?',
        steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{2}$.', '<strong>Výsledok: $v=1{,}5\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
    ]
  });

  gen('v3-sirenie', () => {
    const er = pick([4, 9, 16, 25]), n = Math.sqrt(er), ans = 3 / n;
    return {
      q: T`Elektromagnetická vlna sa šíri prostredím s relatívnou permitivitou $\\varepsilon_r=${er}$ a relatívnou permeabilitou $\\mu_r=1$. Akou rýchlosťou sa šíri? Výsledok vyjadri v jednotkách $10^{8}\\,\\text{m/s}$, použi $c=3\\cdot 10^{8}\\,\\text{m/s}$.`,
      answer: ans,
      solution: T`$n=\\sqrt{\\varepsilon_r}=\\sqrt{${er}}=${n}$, $v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{${n}}=${fmt(ans)}\\cdot 10^{8}\\,\\text{m/s}$.`,
      hint: T`Najprv z permitivity vypočítaj index lomu ako odmocninu, potom rýchlosť ako $c/n$.`,
      mistakes: [
        ...mis(3 / er, ans, T`Odmocninu si nevzal. Index lomu je $n=\\sqrt{\\varepsilon_r}$, rýchlosť je $c/n$.`),
        ...mis(3 * n, ans, T`Index lomu si použil v menovateli naopak. Rýchlosť je $c/n$, nie $c\\cdot n$.`)
      ]
    };
  });
})();
