/* 3. ročník SŠ: elektrický náboj a pole, prúd, napätie a odpor, Ohmov zákon, práca a výkon,
   magnetické pole a indukcia, elektromotory a transformátory, striedavý prúd, odraz a lom svetla, šošovky a zrkadlá.
   Vzorový súbor: lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 's3' }, l));
  const gen = EXERCISES.register;
  // desatinné číslo v matematickom zápise: 0{,}25 (čiarka vo vzorcoch v zložených zátvorkách)
  const dm = (x) => fmt(x).replace(',', '{,}');
  // [f, a, b] v cm: spojná šošovka s ohniskovou vzdialenosťou f, predmet vo vzdialenosti a, obraz vo vzdialenosti b (celé číslo)
  const LENS = [];
  [10, 12, 15, 20].forEach((f) => {
    for (let a = Math.ceil(1.5 * f); a <= 4 * f; a++) {
      const b = (a * f) / (a - f);
      if (Number.isInteger(b)) LENS.push({ f, a, b });
    }
  });

  /* ---------- elektrický náboj a pole ---------- */

  lesson({
    id: 's3-naboj', order: 10, theme: 'elektrina', title: 'Elektrický náboj a elektrické pole',
    summary: 'Náboje sa priťahujú a odpudzujú; pole okolo bodového náboja a jeho intenzita.',
   
    theory: [
      `<p>Elektrický náboj $Q$ je vlastnosť telies. Meria sa v coulomboch ($\\text{C}$). Rovnaké náboje sa <strong>odpudzujú</strong>,
       opačné sa <strong>priťahujú</strong>. Najmenší náboj v prírode je náboj elektrónu, $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$.</p>`,
      `<p><strong>Elektrické pole</strong> je priestor okolo nabitého telesa, ktorý pôsobí silou na iný náboj. Jeho silu opisujeme
       <em>intenzitou</em> $E = \\frac{F}{q}$: sila, ktorou pole pôsobí na malý kladný náboj $q$, delená týmto nábojom.
       Jednotka je $\\text{N/C}$, čo je rovnaké ako $\\text{V/m}$.</p>`,
      `<p>Pre bodový náboj $Q$ vo vzdialenosti $r$ platí $E = k\\frac{Q}{r^2}$, kde $k \\approx 9\\cdot 10^{9}\\,\\text{N·m}^2/\\text{C}^2$.
       Intenzita klesá s <strong>druhou mocninou</strong> vzdialenosti: pri dvojnásobnej vzdialenosti je pole štvrtinové.
       Preto sa pole rýchlo oslabuje so vzdialenosťou.</p>`,
      `<ol><li>Zapíš náboj a vzdialenosť a prepíš ich do jednotiek SI (nC = $10^{-9}$ C, cm = $10^{-2}$ m).</li>
       <li>Dosaď do $E = k\\frac{Q}{r^2}$.</li><li>Výsledok zapíš v $\\text{N/C}$.</li></ol>`
    ],
    examples: [
      { task: 'Bodový náboj $Q = 2\\,\\text{nC}$. Aká je intenzita poľa vo vzdialenosti $r = 0{,}5\\,\\text{m}$?',
        steps: ['Prepíš náboj: $Q = 2\\cdot 10^{-9}\\,\\text{C}$.',
          '$E = 9\\cdot 10^{9}\\cdot\\frac{2\\cdot 10^{-9}}{0{,}25}=72\\,\\text{N/C}$.',
          '<strong>Výsledok: $E = 72\\,\\text{N/C}$.</strong>'] },
      { task: 'Ako sa zmení intenzita poľa, ak vzdialenosť od náboja zdvojnásobíme?',
        steps: ['Vo vzorci je $r^2$, takže pri $2r$ je menovateľ štvornásobný.', '<strong>Intenzita klesne na štvrtinu.</strong>'] }
    ]
  });

  gen('s3-naboj', () => {
    const qnc = rnd(1, 9), r = pick([0.1, 0.2, 0.5, 1, 2]);
    const rr = Math.round(r * r * 1e6) / 1e6;
    const ans = Math.round((9 * qnc / rr) * 1e6) / 1e6;
    return {
      answer: ans,
      q: T`Bodový náboj $Q = ${qnc}\\,\\text{nC}$ vytvára elektrické pole. Aká je intenzita $E$ vo vzdialenosti $r = ${dm(r)}\\,\\text{m}$ od tohto náboja v $\\text{N/C}$? Použi $k = 9\\cdot 10^{9}\\,\\text{N·m}^2/\\text{C}^2$.`,
      solution: T`$E=k\\frac{Q}{r^2}=9\\cdot 10^{9}\\cdot\\frac{${qnc}\\cdot 10^{-9}}{${dm(rr)}}=${fmt(ans)}\\,\\text{N/C}$.`,
      hint: T.s('Intenzita klesá s druhou mocninou vzdialenosti: $r^2$ je v menovateli.'),
      mistakes: [
        { value: Math.round(ans * r * 1e6) / 1e6, msg: T`Vzdialenosť si použil na prvú mocninu. Intenzita klesá s $r^2$, nie s $r$.` },
        { value: Math.round(ans * rr * 1e6) / 1e6, msg: T`Vzdialenosť si umocnil a vynásobil. Vo vzorci je $r^2$ v menovateli, takže ho treba deliť.` }
      ].filter((m) => m.value !== ans),
      steps: [
        { q: T`Koľko je $k\\,Q$ v jednotkách $\\text{N·m}^2/\\text{C}$, ak $Q = ${qnc}\\,\\text{nC}=${qnc}\\cdot 10^{-9}\\,\\text{C}$?`, answer: 9 * qnc },
        { q: T`Koľko je $r^2$ pre $r = ${dm(r)}\\,\\text{m}$?`, answer: rr },
        { q: T`Aká je intenzita $E = \\frac{${9 * qnc}}{${dm(rr)}}$ v $\\text{N/C}$?`, answer: ans }
      ]
    };
  });

  /* ---------- prúd, napätie, odpor ---------- */

  lesson({
    id: 's3-prud-napatie', order: 20, theme: 'elektrina', title: 'Elektrický prúd, napätie a odpor',
    summary: 'Prúd je náboj za čas, napätie je práca na náboj, odpor brzdí pohyb nábojov.',
   
    theory: [
      `<p><strong>Elektrický prúd</strong> $I$ je náboj, ktorý prejde prierezom vodiča za jednotku času: $I = \\frac{Q}{t}$.
       Jednotka je ampér ($\\text{A}$). Prúd tečie len vtedy, keď sa náboje môžu pohybovať a na ne pôsobí sila.</p>`,
      `<p><strong>Elektrické napätie</strong> $U$ hovorí, akú prácu $W$ vykoná pole pri prenose náboja $Q$: $U = \\frac{W}{Q}$.
       Jednotka je volt ($\\text{V}$). Napätie je to, čo „tlačí“ náboje obvodom.</p>`,
      `<p><strong>Elektrický odpor</strong> $R$ je schopnosť vodiča brzdiť pohyb nábojov. Jednotka je ohm ($\\Omega$).
       Odpor závisí od materiálu, dĺžky a prierezu vodiča a od teploty: dlhší a tenší vodič má väčší odpor.</p>`,
      `<p>Prečo je prúd obmedzený: napätie náboje uvádza do pohybu, no zrážky s atómami vodiča ich brzdia. Výsledkom je ustálený
       prúd, ktorý závisí od napätia aj od odporu.</p>`
    ],
    examples: [
      { task: 'Cez vodič prejde za 4 s náboj 12 C. Aký je prúd?',
        steps: ['Dosadíme do vzťahu $I = \\frac{Q}{t}$.', '$I = \\frac{12\\,\\text{C}}{4\\,\\text{s}} = 3\\,\\text{A}$.', '<strong>Výsledok: prúd je 3 A.</strong>'] },
      { task: 'Pri prenose náboja 5 C pole vykonalo prácu 30 J. Aké je napätie?',
        steps: ['$U = \\frac{W}{Q}$.', '$U = \\frac{30\\,\\text{J}}{5\\,\\text{C}} = 6\\,\\text{V}$.', '<strong>Výsledok: napätie je 6 V.</strong>'] }
    ]
  });

  gen('s3-prud-napatie', () => {
    if (Math.random() < 0.5) {
      const I = rnd(1, 9), t = rnd(2, 12), Q = I * t;
      return {
        answer: I,
        q: T`Za $${t}\\,\\text{s}$ prejde vodičom náboj $${Q}\\,\\text{C}$. Aký je prúd $I$ vo vodiči v $\\text{A}$?`,
        solution: T`$I = \\frac{Q}{t} = \\frac{${Q}\\,\\text{C}}{${t}\\,\\text{s}} = ${I}\\,\\text{A}$.`,
        hint: T.s('Prúd je náboj delený časom: $I = \\frac{Q}{t}$.'),
        mistakes: [{ value: Q * t, msg: T`Náboj a čas si vynásobil. Prúd dostaneš delením: $I = \\frac{Q}{t}$.` }]
      };
    }
    const Qc = rnd(2, 9), U = rnd(2, 12), W = Qc * U;
    return {
      answer: U,
      q: T`Pri prenose náboja $${Qc}\\,\\text{C}$ pole vykoná prácu $${W}\\,\\text{J}$. Aké je napätie $U$ medzi týmito bodmi v $\\text{V}$?`,
      solution: T`$U = \\frac{W}{Q} = \\frac{${W}\\,\\text{J}}{${Qc}\\,\\text{C}} = ${U}\\,\\text{V}$.`,
      hint: T.s('Napätie je práca na jeden coulomb: $U = \\frac{W}{Q}$.'),
      mistakes: [{ value: W * Qc, msg: T`Prácu a náboj si vynásobil. Napätie je práca delená nábojom.` }]
    };
  });

  /* ---------- Ohmov zákon ---------- */

  lesson({
    id: 's3-ohm', order: 30, theme: 'elektrina', title: 'Ohmov zákon a elektrické obvody',
    summary: 'Prúd a napätie a odpor, sériové a paralelné zapojenie rezistorov.',
   
    theory: [
      `<p><strong>Ohmov zákon</strong> hovorí, že prúd vo vodiči je priamo úmerný napätiu a nepriamo úmerný odporu:
       $I = \\frac{U}{R}$, teda $U = R\\,I$ a $R = \\frac{U}{I}$. Platí pre kovové vodiče pri stálej teplote.</p>`,
      `<p><strong>Sériové zapojenie</strong>: spotrebiče sú za sebou, prechádza nimi rovnaký prúd a napätia sa sčítavajú:
       $U = U_1 + U_2$, odpory $R = R_1 + R_2$. Ak jeden spotrebič prestane fungovať, celý obvod sa preruší.</p>`,
      `<p><strong>Paralelné zapojenie</strong>: spotrebiče sú vedľa seba, na každom je rovnaké napätie a prúdy sa sčítavajú:
       $I = I_1 + I_2$ a $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. Celkový odpor je menší než najmenší z vetiev,
       preto sú domáce spotrebiče zapojené paralelne: každý dostane plné napätie a jeden z nich sa nevypne ostatné.</p>`,
      `<p>Pri riešení obvodu najprv urči, ktoré časti sú v sérii a ktoré paralelne, potom nahraď zapojenie jedným odporom
       a použi Ohmov zákon.</p>`
    ],
    examples: [
      { task: 'Rezistor s odporom $6\\,\\Omega$ je pripojený na napätie 12 V. Aký prúd ním prechádza?',
        steps: ['$I = \\frac{U}{R} = \\frac{12\\,\\text{V}}{6\\,\\Omega}$.', '<strong>Výsledok: I = 2 A.</strong>'] },
      { task: 'Dva rezistory s odporom $4\\,\\Omega$ sú zapojené paralelne. Aký je celkový odpor?',
        steps: ['$\\frac{1}{R}=\\frac{1}{4}+\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$.', '<strong>Výsledok: R = 2 Ω.</strong>'] }
    ]
  });

  gen('s3-ohm', () => {
    const t = Math.random();
    if (t < 0.4) {
      const I = rnd(1, 8), R = rnd(2, 12), U = I * R;
      return {
        answer: I,
        q: T`Na rezistor s odporom $${R}\\,\\Omega$ priložíme napätie $${U}\\,\\text{V}$. Aký prúd $I$ ním prechádza v $\\text{A}$?`,
        solution: T`$I = \\frac{U}{R} = \\frac{${U}\\,\\text{V}}{${R}\\,\\Omega} = ${I}\\,\\text{A}$.`,
        hint: T.s('Ohmov zákon: $I = \\frac{U}{R}$.'),
        mistakes: [
          { value: U * R, msg: T`Napätie a odpor si vynásobil. Ohmov zákon dáva prúd ako podiel $\\frac{U}{R}$.` },
          { value: R / U, msg: T`Podiel si obrátil. Napätie je v čitateli: $I = \\frac{U}{R}$.` }
        ].filter((m) => m.value !== I)
      };
    }
    if (t < 0.7) {
      const R1 = rnd(2, 15), R2 = rnd(2, 15), s = R1 + R2;
      return {
        answer: s,
        q: T`Rezistory s odpormi $${R1}\\,\\Omega$ a $${R2}\\,\\Omega$ sú zapojené za sebou (v sérii). Aký je celkový odpor $R$ v $\\Omega$?`,
        solution: T`Pri sériovom zapojení sa odpory sčítajú: $R = ${R1} + ${R2} = ${s}\\,\\Omega$.`,
        hint: T.s('V sérii sa odpory sčítajú. Paralelné zapojenie počíta s prevrátenými hodnotami.'),
        mistakes: [{ value: R1 * R2, msg: T`Odpory si vynásobil. V sérii sa odpory sčítavajú.` }].filter((m) => m.value !== s)
      };
    }
    const R = 2 * rnd(2, 8);
    return {
      answer: R / 2,
      q: T`Dva rovnaké rezistory s odporom $${R}\\,\\Omega$ sú zapojené paralelne (vedľa seba). Aký je celkový odpor $R$ v $\\Omega$?`,
      solution: T`$\\frac{1}{R}=\\frac{1}{${R}}+\\frac{1}{${R}}=\\frac{2}{${R}}$, teda $R=\\frac{${R}}{2}=${R / 2}\\,\\Omega$.`,
      hint: T.s('Pri paralelnom zapojení sčítaj prevrátené hodnoty: $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.'),
      mistakes: [{ value: 2 * R, msg: T`Odpory si sčítal ako v sérii. Pri paralelnom zapojení sa sčítavajú prevrátené hodnoty.` }]
    };
  });

  /* ---------- práca a výkon ---------- */

  lesson({
    id: 's3-praca-vykon', order: 40, theme: 'elektrina', title: 'Elektrická práca a výkon',
    summary: 'Výkon spotrebiča, energia v joulech a kilowatthodinách.',
   
    theory: [
      `<p><strong>Elektrický výkon</strong> $P$ udáva, akou rýchlosťou spotrebič mení elektrickú energiu: $P = U\\,I = \\frac{W}{t}$.
       Jednotka je watt ($\\text{W}$), pričom $1\\,\\text{W} = 1\\,\\text{J/s}$.</p>`,
      `<p><strong>Elektrická práca</strong> (energia) $W$ za čas $t$ je $W = P\\,t = U\\,I\\,t$. Jednotka je joule ($\\text{J}$).
       Na účtu za elektrinu sa používa kilowatthodina: $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
      `<p>Prečo to platí: napätie udáva energiu na jeden coulomb a prúd udáva, koľko coulombov prejde za sekundu. Ich súčin je energia
       za sekundu, teda výkon.</p>`,
      `<p>Na štítku spotrebiča je výkon (napr. 2000 W). Energiu zistíš tak, že výkon v kilowattoch vynásobíš časom v hodinách.</p>`
    ],
    examples: [
      { task: 'Žiarovka je pripojená na napätie 230 V a prechádza ňou prúd 0,5 A. Aký je jej výkon?',
        steps: ['$P = U\\,I = 230\\,\\text{V}\\cdot 0{,}5\\,\\text{A}$.', '<strong>Výsledok: P = 115 W.</strong>'] },
      { task: 'Fén s výkonom 1,5 kW beží 2 hodiny. Koľko kWh energie spotrebuje?',
        steps: ['$W = P\\,t = 1{,}5\\,\\text{kW}\\cdot 2\\,\\text{h}$.', '<strong>Výsledok: 3 kWh.</strong>'] }
    ]
  });

  gen('s3-praca-vykon', () => {
    if (Math.random() < 0.5) {
      const U = pick([12, 230]), I = rnd(1, 10), P = U * I;
      return {
        answer: P,
        q: T`Spotrebič je pripojený na napätie $${U}\\,\\text{V}$ a prechádza ním prúd $${I}\\,\\text{A}$. Aký je jeho výkon $P$ vo $\\text{W}$?`,
        solution: T`$P = U\\,I = ${U}\\,\\text{V}\\cdot ${I}\\,\\text{A} = ${P}\\,\\text{W}$.`,
        hint: T.s('Výkon je súčin napätia a prúdu: $P = U\\,I$.'),
        mistakes: [{ value: U + I, msg: T`Napätie a prúd si sčítal. Výkon je ich súčin $P = U\\,I$.` }]
      };
    }
    const P = rnd(1, 5), t = rnd(1, 8), E = P * t;
    return {
      answer: E,
      q: T`Spotrebič s výkonom $${P}\\,\\text{kW}$ beží $${t}\\,\\text{h}$. Koľko kilowatthodín energie spotrebuje?`,
      solution: T`$W = P\\,t = ${P}\\,\\text{kW}\\cdot ${t}\\,\\text{h} = ${E}\\,\\text{kWh}$.`,
      hint: T.s('Energia je výkon krát čas: $W = P\\,t$. Výkon musí byť v kW a čas v h.'),
      mistakes: [
        { value: P / t, msg: T`Výkon a čas si delil. Energia je súčin $W = P\\,t$.` },
        { value: E * 1000, msg: T`Výsledok si vyjadril vo wattohodinách. Úloha chce kilowatthodiny, a $1\\,\\text{kWh} = 1000\\,\\text{Wh}$.` }
      ].filter((m) => m.value !== E)
    };
  });

  /* ---------- magnetické pole a indukcia ---------- */

  lesson({
    id: 's3-magnetizmus', order: 50, theme: 'magnetizmus', title: 'Magnetické pole a elektromagnetická indukcia',
    summary: 'Magnetické pole vodiča a cievky a vznik napätia pri zmene magnetického toku.',
   
    theory: [
      `<p><strong>Magnetické pole</strong> vzniká okolo magnetov a okolo vodiča, ktorým tečie prúd. Jeho smer vyznačujú siločiary,
       ktoré vychádzajú zo severného pólu a vchádzajú do južného. Magnetická indukcia $B$ sa meria v teslach ($\\text{T}$).</p>`,
      `<p>Dlhý priamy vodič s prúdom $I$ vytvára vo vzdialenosti $r$ pole $B = \\frac{\\mu_0 I}{2\\pi r}$. Vnútri
       <strong>cievky</strong> s $N$ závitmi na dĺžke $l$ je pole približne rovnomerné: $B = \\mu_0\\frac{N}{l}I$, kde
       $\\mu_0 \\approx 1{,}26\\cdot 10^{-6}\\,\\text{T·m/A}$.</p>`,
      `<p><strong>Elektromagnetická indukcia:</strong> ak sa mení magnetický tok cez uzavretú slučku vodiča, v nej vzniká napätie.
       Podľa Lenzovho pravidla má indukovaný prúd taký smer, že bráni zmene, ktorá ho vyvolala. Preto sa cievka pri priblížení magnetu
       bráni pohybu.</p>`,
      `<p>Prečo to platí: zmena magnetického poľa pôsobí silou na voľné náboje vo vodiči, ktoré sa tak pohybujú. Ak by indukovaný prúd
       zmenu podporoval, energia by vznikala sama z ničoho, a to je v rozpore so zákonom zachovania energie.</p>`
    ],
    examples: [
      { task: 'Cievka má 500 závitov na dĺžke 0,25 m a prechádza ňou prúd 2 A. Aká je indukcia v jej vnútri?',
        steps: ['$\\frac{N}{l}=\\frac{500}{0{,}25}=2000\\,\\text{m}^{-1}$.',
          '$B = \\mu_0\\frac{N}{l}I \\approx 1{,}26\\cdot 10^{-6}\\cdot 2000\\cdot 2 \\approx 5{,}0\\cdot 10^{-3}\\,\\text{T}$.',
          '<strong>Výsledok: B ≈ 5,0 mT.</strong>'] },
      { task: 'Priamym vodičom tečie prúd 4 A. Aká je indukcia vo vzdialenosti 0,2 m od vodiča?',
        steps: ['$B = \\frac{\\mu_0 I}{2\\pi r}=\\frac{1{,}26\\cdot 10^{-6}\\cdot 4}{2\\pi\\cdot 0{,}2}$.',
          '<strong>Výsledok: B ≈ 4,0·10⁻⁶ T.</strong>'] }
    ]
  });

  gen('s3-magnetizmus', () => {
    if (Math.random() < 0.5) {
      const I = pick([2, 4, 5, 10, 20]), r = pick([0.1, 0.2, 0.25, 0.5, 1]);
      // μ0/(2π) = 2·10^-7 T·m/A, výsledok v μT: 0,2·I/r
      const ans = Math.round((0.2 * I / r) * 1e6) / 1e6;
      return {
        answer: ans,
        q: T`Priamym vodičom tečie prúd $${I}\\,\\text{A}$. Aká je veľkosť magnetickej indukcie vo vzdialenosti $r = ${dm(r)}\\,\\text{m}$ od vodiča? Výsledok zadaj v $\\mu\\text{T}$ a použi $\\mu_0 = 4\\pi\\cdot 10^{-7}\\,\\text{T·m/A}$.`,
        solution: T`$B=\\frac{\\mu_0 I}{2\\pi r}=2\\cdot 10^{-7}\\cdot\\frac{${I}}{${dm(r)}}\\,\\text{T}=${fmt(ans)}\\,\\mu\\text{T}$.`,
        hint: T.s('Pre priamy vodič je $B=\\frac{\\mu_0 I}{2\\pi r}$ a $\\frac{\\mu_0}{2\\pi}=2\\cdot 10^{-7}\\,\\text{T·m/A}$.'),
        mistakes: [{ value: Math.round(0.2 * I * 1e6) / 1e6, msg: T`Zabudol si deliť vzdialenosťou $r$. Indukcia s rastúcou vzdialenosťou klesá, preto je $r$ v menovateli.` }]
          .filter((m) => m.value !== ans)
      };
    }
    const N = pick([100, 200, 300, 500, 1000]), l = pick([0.2, 0.25, 0.4, 0.5]), I = pick([1, 2, 3, 5]);
    const ans = Number((1.26e-6 * N / l * I).toPrecision(3));
    return {
      answer: ans,
      tol: ans * 0.02,
      q: T`Cievka má $${N}$ závitov na dĺžke $${dm(l)}\\,\\text{m}$ a prechádza ňou prúd $${I}\\,\\text{A}$. Aká je magnetická indukcia $B$ vo vnútri cievky v teslach? Použi $\\mu_0 \\approx 1{,}26\\cdot 10^{-6}\\,\\text{T·m/A}$.`,
      solution: T`$B=\\mu_0\\frac{N}{l}I=1{,}26\\cdot 10^{-6}\\cdot\\frac{${N}}{${dm(l)}}\\cdot ${I}\\approx ${dm(ans * 1000)}\\,\\text{mT}$.`,
      hint: T.s('Vnútri cievky je pole rovnomerné: $B=\\mu_0\\frac{N}{l}I$.'),
      mistakes: [{ value: Number((ans * l).toPrecision(3)), msg: T`Zabudol si deliť dĺžkou cievky. Počet závitov na jednotku dĺžky je $\\frac{N}{l}$.` }]
    };
  });

  /* ---------- elektromotory, generátory, transformátory ---------- */

  lesson({
    id: 's3-transformator', order: 60, theme: 'magnetizmus', title: 'Elektromotory, generátory a transformátory',
    summary: 'Motor mení elektrinu na pohyb, generátor naopak; transformátor mení napätie.',
   
    theory: [
      `<p><strong>Elektromotor</strong> mení elektrickú energiu na mechanickú. Na vodič s prúdom v magnetickom poli pôsobí sila.
       Ak je vodič navinutý do cievky, sila ju otáča a cievka sa stáva rotorom motora.</p>`,
      `<p><strong>Generátor</strong> je opak motora: otáčaním cievky v magnetickom poli sa periodicky mení magnetický tok a v cievke
       sa indukuje striedavé napätie.</p>`,
      `<p><strong>Transformátor</strong> mení napätie striedavého prúdu. Pri ideálnom transformátore platí
       $\\frac{U_1}{U_2}=\\frac{N_1}{N_2}$, kde $N_1$ a $N_2$ sú počty závitov primárneho a sekundárneho vinutia.
       Ak má sekundárne vinutie viac závitov, napätie stúpa; ak menej, napätie klesá.</p>`,
      `<p>Prečo sa napätie zvyšuje pri prenose: pri rovnakom výkone $P = U\\,I$ je pri vyššom napätí menší prúd, a teda aj menšie
       straty tepla vo vedení. Preto sa elektrina prenáša vysokým napätím a na mieste spotreby sa transformuje nadol.</p>`
    ],
    examples: [
      { task: 'Transformátor má na primárnej strane 200 závitov a na sekundárnej 1000. Aké je napätie na sekundárnej strane, ak je na primárnej 230 V?',
        steps: ['$\\frac{U_2}{U_1}=\\frac{N_2}{N_1}=\\frac{1000}{200}=5$.', '$U_2 = 5\\cdot 230\\,\\text{V}=1150\\,\\text{V}$.', '<strong>Výsledok: 1150 V (transformátor napätie zvyšuje).</strong>'] },
      { task: 'Transformátor zníži napätie z 230 V na 23 V. Koľko závitov má sekundárne vinutie, ak primárne má 1000?',
        steps: ['$\\frac{N_2}{N_1}=\\frac{U_2}{U_1}=\\frac{23}{230}=\\frac{1}{10}$.', '$N_2 = \\frac{1000}{10}=100$.', '<strong>Výsledok: 100 závitov.</strong>'] }
    ]
  });

  gen('s3-transformator', () => {
    const up = Math.random() < 0.5;
    const base = up ? pick([50, 100, 200]) : pick([20, 50, 100]);
    const m = up ? pick([2, 3, 4, 5]) : pick([2, 5, 10]);
    const N1 = up ? base : base * m, N2 = up ? base * m : base;
    const U1 = up ? pick([12, 24, 230]) : 230;
    const U2 = U1 * N2 / N1;
    return {
      answer: U2,
      q: T`Transformátor má na primárnom vinutí $${N1}$ závitov a na sekundárnom $${N2}$ závitov. Na primárne vinutie privedieme napätie $${U1}\\,\\text{V}$. Aké je napätie $U_2$ na sekundárnom vinutí v $\\text{V}$? Transformátor považuj za ideálny.`,
      solution: T`$\\frac{U_2}{U_1}=\\frac{N_2}{N_1}$, teda $U_2=${U1}\\cdot\\frac{${N2}}{${N1}}=${U2}\\,\\text{V}$.`,
      hint: T.s('Napätia sa správajú ako počty závitov: $\\frac{U_2}{U_1}=\\frac{N_2}{N_1}$.'),
      mistakes: [{ value: U1 * N1 / N2, msg: T`Pomer závitov si obrátil. Napätie sa mení v rovnakom pomere ako počet závitov: $U_2=U_1\\cdot\\frac{N_2}{N_1}$.` }]
        .filter((x) => x.value !== U2),
      steps: [
        { q: T`Koľko je pomer $\\frac{N_2}{N_1}=\\frac{${N2}}{${N1}}$?`, answer: N2 / N1, tol: 0.001 },
        { q: T`Koľko je $U_2 = ${U1}\\,\\text{V}\\cdot$ tento pomer, v $\\text{V}$?`, answer: U2 }
      ]
    };
  });

  /* ---------- striedavý prúd ---------- */

  lesson({
    id: 's3-striedavy', order: 70, theme: 'elektrina', title: 'Striedavý prúd',
    summary: 'Sínusové napätie, perióda, frekvencia a efektívna hodnota v sieti.',
   
    theory: [
      `<p><strong>Striedavý prúd</strong> mení smer aj veľkosť periodicky. Napätie sa v čase mení sínusovo:
       $u = U_{max}\\sin(\\omega t)$, kde $U_{max}$ je amplitúda a $\\omega = 2\\pi f$ je uhlová frekvencia.</p>`,
      `<p>Doba jednej periódy je $T = \\frac{1}{f}$. Vo verejnej sieti je frekvencia $f = 50\\,\\text{Hz}$, teda perióda je
       $T = 0{,}02\\,\\text{s}$. Za sekundu sa napätie zopakuje 50-krát.</p>`,
      `<p><strong>Efektívna hodnota</strong> je hodnota jednosmerného napätia, ktoré by v spotrebiči vyvolalo rovnaký tepelný účinok.
       Pre sínusové napätie platí $U_{ef} = \\frac{U_{max}}{\\sqrt{2}}$, teda $U_{max} = U_{ef}\\sqrt{2}$. Sieť s efektívnym napätím
       230 V má amplitúdu približne $325\\,\\text{V}$.</p>`,
      `<p>Prečo používame efektívne hodnoty: spotrebiče (žiarovka, fén) reagujú na priemerný výkon, nie na špičky. Preto sú na štítkoch
       a na voltmetri uvádzané práve efektívne hodnoty.</p>`
    ],
    examples: [
      { task: 'Efektívne napätie siete je 230 V. Aká je amplitúda napätia?',
        steps: ['$U_{max}=U_{ef}\\sqrt{2}=230\\cdot 1{,}414\\approx 325\\,\\text{V}$.', '<strong>Výsledok: približne 325 V.</strong>'] },
      { task: 'Sieť má frekvenciu 50 Hz. Aká je jej perióda?',
        steps: ['$T=\\frac{1}{f}=\\frac{1}{50}\\,\\text{s}$.', '<strong>Výsledok: T = 0,02 s.</strong>'] }
    ]
  });

  gen('s3-striedavy', () => {
    if (Math.random() < 0.5) {
      const Uef = pick([12, 24, 110, 230]);
      const ans = Math.round(Uef * Math.SQRT2 * 10) / 10;
      return {
        answer: ans,
        tol: 0.1,
        q: T`Efektívne napätie siete je $U_{ef}=${Uef}\\,\\text{V}$. Aká je amplitúda $U_{max}$ napätia v $\\text{V}$? Výsledok zaokrúhli na jedno desatinné miesto.`,
        solution: T`$U_{max}=U_{ef}\\sqrt{2}=${Uef}\\cdot\\sqrt{2}\\approx ${dm(ans)}\\,\\text{V}$.`,
        hint: T.s('Amplitúda je $\\sqrt{2}$-krát väčšia ako efektívna hodnota: $U_{max}=U_{ef}\\sqrt{2}$.'),
        mistakes: [
          { value: Uef, msg: T`Zabudol si vynásobiť odmocninou z dvoch. Amplitúda je väčšia ako efektívna hodnota.` },
          { value: Uef * 2, msg: T`Vynásobil si dvomi namiesto $\\sqrt{2}$. Správny koeficient je približne $1{,}41$.` }
        ]
      };
    }
    const f = pick([10, 20, 25, 50, 100]), ans = 1 / f;
    return {
      answer: ans,
      q: T`Striedavý prúd má frekvenciu $${f}\\,\\text{Hz}$. Aká je jeho perióda $T$ v sekundách?`,
      solution: T`$T=\\frac{1}{f}=\\frac{1}{${f}}\\,\\text{s}=${dm(ans)}\\,\\text{s}$.`,
      hint: T.s('Perióda je prevrátená hodnota frekvencie: $T=\\frac{1}{f}$.'),
      mistakes: [{ value: f, msg: T`Frekvenciu si nechal ako periódu. Perióda je prevrátená hodnota frekvencie: $T=\\frac{1}{f}$.` }]
    };
  });

  /* ---------- odraz a lom svetla ---------- */

  lesson({
    id: 's3-odraz-lom', order: 80, theme: 'svetlo', title: 'Odraz a lom svetla',
    summary: 'Zákon odrazu, index lomu a Snellov zákon pri prechode medzi prostrediami.',
   
    theory: [
      `<p><strong>Odraz svetla</strong>: uhol dopadu sa rovná uhlu odrazu. Oba uhly merame od <em>kolmice</em> k rozhraniu, nie od
       povrchu. Ak lúč dopadá na zrkadlo pod uhlom 30° od povrchu, uhol dopadu od kolmice je $60^\\circ$.</p>`,
      `<p><strong>Lom svetla</strong>: pri prechode do iného prostredia sa mení rýchlosť svetla a lúč sa láme. Index lomu
       $n = \\frac{c}{v}$, kde $c = 3\\cdot 10^{8}\\,\\text{m/s}$ je rýchlosť svetla vo vákuu a $v$ rýchlosť v látke.
       Väčší index znamená pomalšie svetlo.</p>`,
      `<p><strong>Snellov zákon</strong>: $n_1\\sin\\alpha = n_2\\sin\\beta$, kde $\\alpha$ je uhol dopadu a $\\beta$ uhol lomu, oba od kolmice.
       Ak $n_2 > n_1$, lúč sa láme ku kolmici, teda $\\beta < \\alpha$.</p>`,
      `<p>Prečo sa lúč láme: vlnoplocha sa v pomalšom prostredí spomalí na jednej strane skôr než na druhej, čím sa zmení smer šírenia.
       Pri kolmom dopade sa smer nemení.</p>`
    ],
    examples: [
      { task: 'Svetlo prechádza zo vzduchu do skla s indexom lomu $n = 1{,}5$. Aká je rýchlosť svetla v skle?',
        steps: ['$n=\\frac{c}{v}$, teda $v=\\frac{c}{n}$.', '$v=\\frac{3\\cdot 10^{8}}{1{,}5}=2\\cdot 10^{8}\\,\\text{m/s}$.', '<strong>Výsledok: 2·10⁸ m/s.</strong>'] },
      { task: 'Lúč dopadá na rozhranie kolmo. Aký je uhol lomu?',
        steps: ['Kolmý dopad znamená $\\alpha=0^\\circ$, takže $\\sin\\alpha=0$.', '$n_1\\cdot 0 = n_2\\sin\\beta$, teda $\\sin\\beta = 0$.', '<strong>Výsledok: $\\beta = 0^\\circ$, lúč nemení smer.</strong>'] }
    ]
  });

  gen('s3-odraz-lom', () => {
    if (Math.random() < 0.5) {
      const v = pick([2e8, 2.5e8, 2.4e8, 1.5e8]);
      const ans = Math.round((3e8 / v) * 100) / 100;
      return {
        answer: ans,
        tol: 0.01,
        q: T`Svetlo sa v priehľadnej látke šíri rýchlosťou $${dm(v / 1e8)}\\cdot 10^{8}\\,\\text{m/s}$. Aký je index lomu $n$ tejto látky? Výsledok zaokrúhli na dve desatinné miesta.`,
        solution: T`$n=\\frac{c}{v}=\\frac{3\\cdot 10^{8}}{${dm(v / 1e8)}\\cdot 10^{8}}=${dm(ans)}$.`,
        hint: T.s('Index lomu je $n=\\frac{c}{v}$, kde $c=3\\cdot 10^{8}\\,\\text{m/s}$.'),
        mistakes: [{ value: Math.round((v / 3e8) * 100) / 100, msg: T`Pomer si obrátil. Index lomu je $n=\\frac{c}{v}$: pomalšie svetlo znamená väčší index.` }]
          .filter((x) => x.value !== ans)
      };
    }
    const a = pick([20, 30, 35, 40, 50, 60, 70]);
    return {
      answer: a,
      q: T`Svetelný lúč dopadá na rovné zrkadlo tak, že uhol dopadu meraný od kolmice je $${a}^\\circ$. Aký je uhol odrazu meraný od kolmice?`,
      solution: T`Podľa zákona odrazu sa uhol odrazu rovná uhlu dopadu: $\\beta=\\alpha=${a}^\\circ$.`,
      hint: T.s('Uhol odrazu je rovnaký ako uhol dopadu. Oba merajme od kolmice, nie od povrchu.'),
      mistakes: [{ value: 90 - a, msg: T`Uhol si odčítal od 90°. Takto dostaneš uhol od povrchu, ale odraz sa meria od kolmice.` }]
    };
  });

  /* ---------- zrkadlá a šošovky ---------- */

  lesson({
    id: 's3-sosovky', order: 90, theme: 'svetlo', title: 'Zrkadlá, šošovky a zobrazovanie',
    summary: 'Zobrazovacia rovnica tenkej šošovky, vzdialenosť obrazu a zväčšenie.',
   
    theory: [
      `<p><strong>Ohnisková vzdialenosť</strong> $f$ je vzdialenosť ohniska od stredu šošovky (alebo od vrcholu zrkadla). Spojná šošovka
       má kladnú ohniskovú vzdialenosť: zbiera lúče do ohniska.</p>`,
      `<p><strong>Zobrazovacia rovnica tenkej šošovky</strong>: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$, kde $a$ je vzdialenosť predmetu
       a $b$ vzdialenosť obrazu. Ak je predmet ďalej než dvojnásobok ohniskovej vzdialenosti, obraz je skutočný, zmenšený a prevrátený.</p>`,
      `<p><strong>Zväčšenie</strong> udáva, koľkokrát je obraz väčší alebo menší než predmet: $|k| = \\frac{b}{a}$.
       Ak je $|k| < 1$, obraz je zmenšený; ak $|k| > 1$, je zväčšený.</p>`,
      `<p><strong>Rovinné zrkadlo</strong> vytvorí zdanlivý obraz rovnako veľký ako predmet a rovnako vzdialený za zrkadlom. Zobrazovacia rovnica
       sa dá použiť aj pre guľové zrkadlá, len s iným znamienkom vzdialeností.</p>`,
      `<p>Prečo to platí: lúče z bodu predmetu sa za šošovkou zbiehajú do bodu obrazu a podobné trojuholníky tvorené lúčmi dávajú
       uvedené vzťahy.</p>`
    ],
    examples: [
      { task: 'Predmet je 30 cm pred spojnou šošovkou s ohniskovou vzdialenosťou 10 cm. Aká je vzdialenosť obrazu?',
        steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{10}-\\frac{1}{30}=\\frac{2}{30}=\\frac{1}{15}$.', '$b = 15\\,\\text{cm}$.', '<strong>Výsledok: obraz vznikne 15 cm za šošovkou.</strong>'] },
      { task: 'Predmet je 30 cm pred šošovkou a obraz je 15 cm za ňou. Koľkokrát je obraz menší?',
        steps: ['$|k| = \\frac{b}{a} = \\frac{15}{30}$.', '<strong>Výsledok: |k| = 0,5, obraz je zmenšený na polovicu.</strong>'] }
    ]
  });

  gen('s3-sosovky', () => {
    const { f, a, b } = pick(LENS);
    if (Math.random() < 0.6) {
      return {
        answer: b,
        q: T`Predmet je vo vzdialenosti $${a}\\,\\text{cm}$ pred spojnou šošovkou s ohniskovou vzdialenosťou $${f}\\,\\text{cm}$. Vo vzdialenosti koľkých centimetrov za šošovkou vznikne obraz?`,
        solution: T`$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{${f}}-\\frac{1}{${a}}=\\frac{1}{${b}}$, teda $b=${b}\\,\\text{cm}$.`,
        hint: T.s('Zo zobrazovacej rovnice $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$ vyjadri $\\frac{1}{b}$.'),
        mistakes: [
          { value: Math.round((f * a / (a + f)) * 1e6) / 1e6, msg: T`Znamienko si zamenil. Vzťah je $\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}$, nie súčet.` },
          { value: a - f, msg: T`Vzdialenosť obrazu nie je rozdiel predmetu a ohniska. Použi zobrazovaciu rovnicu.` }
        ].filter((m) => m.value !== b)
      };
    }
    const ans = Math.round((b / a) * 100) / 100;
    return {
      answer: ans,
      tol: 0.01,
      q: T`Predmet je $${a}\\,\\text{cm}$ pred spojnou šošovkou a jeho obraz je $${b}\\,\\text{cm}$ za šošovkou. Koľkokrát je obraz väčší alebo menší ako predmet? Zadaj $|k| = \\frac{b}{a}$ na dve desatinné miesta.`,
      solution: T`$|k|=\\frac{b}{a}=\\frac{${b}}{${a}}=${dm(ans)}$.`,
      hint: T.s('Zväčšenie je obraz delený predmetom: $|k| = \\frac{b}{a}$.'),
      mistakes: [{ value: Math.round((a / b) * 100) / 100, msg: T`Pomer si obrátil. Zväčšenie je $\\frac{b}{a}$, teda obraz delený predmetom.` }]
        .filter((m) => m.value !== ans)
    };
  });
})();
