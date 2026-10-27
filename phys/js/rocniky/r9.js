/* 9. ročník: elektrické obvody, zapojenie rezistorov, Ohmov zákon, výkon, magnetické pole, elektromotor a energia.
   Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r9' }, l));
  const gen = EXERCISES.register;

  // Výber z pevného zoznamu: pool položiek { q, right, why, wrong: [[text, prečo nie], ...] }
  const choiceFrom = (pool, hint) => {
    const s = pick(pool);
    const answer = T.s(s.right);
    const choiceHints = {};
    s.wrong.forEach(([w, why]) => { choiceHints[T.s(w)] = T.s(why); });
    return {
      type: 'choice',
      options: shuffle([answer, ...s.wrong.map(([w]) => T.s(w))]),
      answer,
      choiceHints,
      q: T.s(s.q),
      solution: T.s(s.why),
      hint: T.s(hint)
    };
  };

  /* ---------- 1. elektrické obvody ---------- */

  lesson({
    id: 'r9-obvody', order: 10, theme: 'elektrina', title: 'Elektrické obvody a ich vlastnosti',
    summary: 'Zdroj, spotrebič, spínač a vodiče v uzavretom obvode.',
    theory: [
      `<p><strong>Elektrický obvod</strong> tvoria zdroj (batéria, akumulátor), spotrebiče (žiarovka, rezistor, motor), spínač a vodiče.
       Prúd preteká len vtedy, keď je obvod <strong>uzavretý</strong>, teda keď sa dá prejsť celou slučkou od jedného pólu zdroja k druhému.</p>`,
      `<ul>
         <li><strong>Zdroj</strong> dodáva energiu nabitým časticiam.</li>
         <li><strong>Spotrebič</strong> mení elektrickú energiu na inú: svetlo, teplo alebo pohyb.</li>
         <li><strong>Spínač</strong> obvod uzatvára alebo rozpája.</li>
         <li><strong>Vodiče</strong> spájajú súčiastky do jedného celku.</li>
       </ul>`,
      `<p>Obvod nakreslíme <strong>schémou</strong>, v ktorej každá súčiastka má svoju značku. Schéma ukazuje, ako sú súčiastky zapojené,
       nie ako vyzerajú.</p>`,
      `<p>Keď rozpojíme spínač, obvod sa preruší: prúd netečie a žiarovka zhasne. Obvod je teda funkčný len vtedy, keď je celý uzavretý.</p>`
    ],
    examples: [
      { task: 'Čo sa stane so žiarovkou, keď rozpojíme spínač?',
        steps: ['Obvod sa preruší a prúd netečie.', '<strong>Výsledok: žiarovka zhasne.</strong>'] },
      { task: 'Ktorá súčiastka v obvode mení elektrickú energiu na svetlo?',
        steps: ['Svetlo vzniká vo vlákne žiarovky.', '<strong>Výsledok: žiarovka (spotrebič).</strong>'] }
    ]
  });

  const CIRCUIT_CHOICES = [
    { q: 'Ktorá súčiastka obvodu je zdrojom elektrickej energie?', right: 'batéria',
      why: 'Batéria dodáva energiu nabitým časticiam. Ostatné súčiastky ju spotrebúvajú alebo len riadia.',
      wrong: [['žiarovka', 'Žiarovka je spotrebič: energiu spotrebúva, nedodáva.'],
        ['spínač', 'Spínač len uzatvára alebo rozpája obvod.']] },
    { q: 'Ktorá súčiastka mení elektrickú energiu na svetlo?', right: 'žiarovka',
      why: 'Vo vlákne žiarovky sa elektrická energia mení na svetlo a teplo.',
      wrong: [['batéria', 'Batéria energiu dodáva, nemení ju na svetlo.'],
        ['spínač', 'Spínač nemení energiu, len uzatvára obvod.']] },
    { q: 'Ktorá súčiastka slúži na prerušenie obvodu?', right: 'spínač',
      why: 'Spínač rozpojením preruší obvod a prúd prestane tiecť.',
      wrong: [['batéria', 'Batéria obvod nerozpája; je to zdroj energie.'],
        ['žiarovka', 'Žiarovka len svieti, obvod neprerušuje.']] }
  ];

  gen('r9-obvody', () => choiceFrom(CIRCUIT_CHOICES, 'Zamysli sa, ktorá súčiastka dodáva energiu, ktorá ju spotrebúva a ktorá obvod spína.'));

  /* ---------- 2. sériové a paralelné zapojenie ---------- */

  lesson({
    id: 'r9-zapojenie', order: 20, theme: 'elektrina', title: 'Sériové a paralelné zapojenie',
    summary: 'Ako sa mení celkový odpor, keď rezistory zapojíme za sebou alebo vedľa seba.',
    theory: [
      `<p>Dva rezistory zapájame <strong>sériovo</strong> (za sebou), alebo <strong>paralelne</strong> (vedľa seba).
       Pri sérii musí prúd prejsť oboma rezistormi. Pri paralelnom zapojení sa prúd rozdelí na dve vetvy.</p>`,
      `<ul>
         <li><strong>Sériové zapojenie:</strong> prúd je v celom obvode rovnaký, napätie sa rozdelí medzi rezistory.
             Celkový odpor je súčet: $R = R_1 + R_2$.</li>
         <li><strong>Paralelné zapojenie:</strong> napätie je na oboch vetvách rovnaké, prúd sa rozdelí.
             Platí $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$.</li>
       </ul>`,
      `<p>Pri paralelnom zapojení je celkový odpor vždy <strong>menší</strong> ako najmenší z odporov vetiev. Má to logický dôvod:
       každá ďalšia vetva je ďalšia cesta pre prúd. Preto paralelne pripojené spotrebiče v domácnosti odoberajú z elektrickej siete väčší prúd.</p>`,
      `<ol>
         <li>Zisti, či sú rezistory za sebou (séria), alebo vedľa seba (paralela).</li>
         <li>Pri sérii odpory sčítaj, pri paralele sčítaj ich prevrátené hodnoty.</li>
       </ol>`
    ],
    examples: [
      { task: 'Rezistory $R_1 = 6\\,\\Omega$ a $R_2 = 3\\,\\Omega$ sú zapojené paralelne. Aký je celkový odpor?',
        steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{6}+\\frac{2}{6}=\\frac{3}{6}$.', '$R=\\frac{6}{3}=2\\,\\Omega$.', '<strong>Výsledok: R = 2 Ω</strong>'] },
      { task: 'Rezistory $R_1 = 4\\,\\Omega$ a $R_2 = 5\\,\\Omega$ sú zapojené za sebou. Aký je celkový odpor?',
        steps: ['Pri sérii sa odpory sčítajú: $R = R_1 + R_2$.', '<strong>Výsledok: R = 9 Ω</strong>'] }
    ]
  });

  // [R1, R2, R] pre paralelné zapojenie s celým výsledkom
  const PARALLEL = [[6, 3, 2], [4, 4, 2], [10, 10, 5], [12, 4, 3], [6, 6, 3], [9, 18, 6], [8, 8, 4], [20, 5, 4], [12, 6, 4], [15, 10, 6], [5, 20, 4]];

  gen('r9-zapojenie', () => {
    if (Math.random() < 0.5) {
      const R1 = rnd(1, 20), R2 = rnd(1, 20), R = R1 + R2;
      return {
        q: T`Rezistory s odpormi $${R1}\\,\\Omega$ a $${R2}\\,\\Omega$ sú zapojené za sebou (sériovo). Aký je celkový odpor?`,
        answer: R,
        solution: T`Pri sérii sa odpory sčítajú: $R=R_1+R_2=${R1}+${R2}=${R}\\,\\Omega$.`,
        hint: T.s('Pri sériovom zapojení platí $R=R_1+R_2$.'),
        mistakes: [{ value: R1 * R2, msg: T`Odpory si vynásobil. Pri sérii sa odpory sčítajú.` }].filter((x) => x.value !== R)
      };
    }
    const [R1, R2, R] = pick(PARALLEL);
    return {
      q: T`Rezistory s odpormi $${R1}\\,\\Omega$ a $${R2}\\,\\Omega$ sú zapojené vedľa seba (paralelne). Aký je celkový odpor?`,
      answer: R,
      solution: T`$\\frac{1}{R}=\\frac{1}{${R1}}+\\frac{1}{${R2}}$, teda $R=${R}\\,\\Omega$.`,
      hint: T.s('Pri paralelnom zapojení platí $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.'),
      mistakes: [{ value: R1 + R2, msg: T`Odpory si sčítal ako pri sérii. Pri paralele sa sčítavajú prevrátené hodnoty.` }]
        .filter((x) => x.value !== R),
      steps: [
        { q: T`Koľko je $\\frac{1}{${R1}}+\\frac{1}{${R2}}$? Zadaj ako zlomok.`, answer: 1 / R1 + 1 / R2, tol: 0.001, placeholder: T.s('napr. 1/2') },
        { q: T`Aký je celkový odpor $R$? Prevráť výsledok predchádzajúceho kroku.`, answer: R }
      ]
    };
  });

  /* ---------- 3. výpočty prúdu, napätia a odporu ---------- */

  lesson({
    id: 'r9-vypocty', order: 30, theme: 'elektrina', title: 'Výpočty elektrického prúdu, napätia a odporu',
    summary: 'Z dvoch známych veličín vypočítame tretiu.',
    theory: [
      `<p>V obvode sú tri základné veličiny: prúd $I$ (A), napätie $U$ (V) a odpor $R$ (Ω). Ak poznáme dve z nich, vieme vypočítať tretiu.
       Vzťahy sú $I=\\frac{U}{R}$, $U=I\\cdot R$ a $R=\\frac{U}{I}$.</p>`,
      `<ol>
         <li>Zapíš, čo je dané a čo hľadáme.</li>
         <li>Vyber vzorec, v ktorom je hľadaná veličina sama.</li>
         <li>Dosaď jednotky V, A a Ω; pri prevode použi násobky.</li>
         <li>Skontroluj jednotky výsledku.</li>
       </ol>`,
      `<p><strong>Pozor na jednotky:</strong> $1\\,\\text{mA}=0{,}001\\,\\text{A}$ a $1\\,\\text{k}\\Omega=1000\\,\\Omega$. Ak je údaj v miliampéroch alebo kiloohmoch,
       najprv ho prepíš na základnú jednotku.</p>`
    ],
    examples: [
      { task: 'Na rezistore s odporom $R = 4\\,\\Omega$ je napätie $U = 12\\,\\text{V}$. Aký prúd ním preteká?',
        steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Výsledok: I = 3 A</strong>'] },
      { task: 'Spotrebičom preteká prúd $I = 0{,}5\\,\\text{A}$ pri napätí $U = 230\\,\\text{V}$. Aký je jeho odpor?',
        steps: ['$R=\\frac{U}{I}=\\frac{230}{0{,}5}$.', 'Deliť desatinným číslom: $\\frac{230}{0{,}5}=\\frac{460}{1}$.', '<strong>Výsledok: R = 460 Ω</strong>'] }
    ]
  });

  gen('r9-vypocty', () => {
    const I = rnd(1, 10), R = rnd(2, 30), U = I * R;
    const target = pick(['I', 'U', 'R']);
    if (target === 'I') {
      return {
        q: T`Na rezistore s odporom $${R}\\,\\Omega$ je napätie $${U}\\,\\text{V}$. Aký prúd ním preteká v ampéroch?`,
        answer: I,
        solution: T`$I=\\frac{U}{R}=\\frac{${U}}{${R}}=${I}\\,\\text{A}$.`,
        hint: T.s('Prúd je napätie delené odporom: $I=\\frac{U}{R}$.'),
        mistakes: [
          { value: U * R, msg: T`Napätie si vynásobil odporom. Prúd sa počíta ako $I=\\frac{U}{R}$.` },
          { value: U - R, msg: T`Odčítal si napätie a odpor. Použi vzorec $I=\\frac{U}{R}$.` }
        ].filter((x) => x.value !== I)
      };
    }
    if (target === 'U') {
      return {
        q: T`Rezistorom s odporom $${R}\\,\\Omega$ preteká prúd $${I}\\,\\text{A}$. Aké je napätie na rezistore?`,
        answer: U,
        solution: T`$U=I\\cdot R=${I}\\cdot ${R}=${U}\\,\\text{V}$.`,
        hint: T.s('Napätie je súčin prúdu a odporu: $U=I\\cdot R$.'),
        mistakes: [{ value: I + R, msg: T`Prúd a odpor si sčítal. Napätie je ich súčin.` }].filter((x) => x.value !== U)
      };
    }
    return {
      q: T`Na rezistore je napätie $${U}\\,\\text{V}$ a preteká ním prúd $${I}\\,\\text{A}$. Aký je jeho odpor v ohmoch?`,
      answer: R,
      solution: T`$R=\\frac{U}{I}=\\frac{${U}}{${I}}=${R}\\,\\Omega$.`,
      hint: T.s('Odpor je napätie delené prúdom: $R=\\frac{U}{I}$.'),
      mistakes: [
        { value: U * I, msg: T`Napätie si vynásobil prúdom. Odpor sa počíta delením.` },
        { value: I, msg: T`Odpor si zamenil s prúdom. Prúd je $I$, odpor je $R$.` }
      ].filter((x) => x.value !== R)
    };
  });

  /* ---------- 4. Ohmov zákon ---------- */

  lesson({
    id: 'r9-ohmov-zakon', order: 40, theme: 'elektrina', title: 'Ohmov zákon',
    summary: 'Prúd je úmerný napätiu a nepriamo úmerný odporu.',
    theory: [
      `<p><strong>Ohmov zákon</strong> hovorí: prúd prechádzajúci vodičom je priamo úmerný napätiu a nepriamo úmerný odporu.
       Zapisujeme ho $I=\\frac{U}{R}$, pri stálej teplote vodiča.</p>`,
      `<ul>
         <li>Pri stálom odpore: zdvojnásobenie napätia zdvojnásobí prúd.</li>
         <li>Pri stálom napätí: zdvojnásobenie odporu prúd zmenší na polovicu.</li>
       </ul>`,
      `<p>Závislosť prúdu od napätia pre stály odpor je na grafe <strong>priamka prechádzajúca počiatkom</strong>.
       Strmšia priamka znamená menší odpor, lebo pri rovnakom napätí prechádza väčší prúd.</p>`,
      `<p>Zákon presne platí pre kovové vodiče pri stálej teplote. Pri veľkom zahrievaní sa odpor kovu zväčšuje, takže závislosť už nie je priama.</p>`
    ],
    examples: [
      { task: 'Napätie na rezistore sa zväčšilo z $4\\,\\text{V}$ na $12\\,\\text{V}$. Odpor sa nezmenil. Koľkokrát sa zväčšil prúd?',
        steps: ['Pomer napätí je $\\frac{12}{4}=3$.', 'Prúd je priamo úmerný napätiu, preto sa zväčší tiež $3$-krát.', '<strong>Výsledok: 3-krát</strong>'] },
      { task: 'Pri napätí $230\\,\\text{V}$ rezistor odoberá prúd $2\\,\\text{A}$. Aký prúd odoberie pri dvojnásobnom odpore a rovnakom napätí?',
        steps: ['Odpor je dvojnásobný, prúd je nepriamo úmerný odporu.', '$I_2 = \\frac{I_1}{2} = \\frac{2}{2}$.', '<strong>Výsledok: 1 A</strong>'] }
    ]
  });

  gen('r9-ohmov-zakon', () => {
    const k = pick([2, 3, 4]);
    if (Math.random() < 0.5) {
      return {
        q: T`Odpor rezistora zostal rovnaký, ale napätie na ňom sa zväčšilo $${k}$-krát. Koľkokrát sa zväčší prúd?`,
        answer: k,
        solution: T`Prúd je priamo úmerný napätiu, preto $I_2=${k}\\,I_1$, teda sa zväčší $${k}$-krát.`,
        hint: T.s('Pri stálom odpore je prúd priamo úmerný napätiu: $I=\\frac{U}{R}$.'),
        mistakes: [{ value: 1 / k, msg: T`Prúd si zmenšil. Pri väčšom napätí a rovnakom odpore sa prúd zväčší.` }]
      };
    }
    return {
      q: T`Napätie na rezistore zostalo rovnaké, ale odpor sa zväčšil $${k}$-krát. Koľkonásobne sa zmení prúd? Zadaj ako zlomok (napr. 1/2) alebo desatinné číslo.`,
      answer: 1 / k,
      tol: 0.001,
      solution: T`Prúd je nepriamo úmerný odporu: $I_2=\\frac{I_1}{${k}}$, teda sa zmenší na $\\frac{1}{${k}}$ pôvodnej hodnoty.`,
      hint: T.s('Pri stálom napätí je prúd nepriamo úmerný odporu: $I=\\frac{U}{R}$.'),
      mistakes: [{ value: k, msg: T`Prúd sa nezväčšil, ale zmenšil. Väčší odpor prepúšťa menší prúd.` }]
    };
  });

  /* ---------- 5. elektrická práca a výkon ---------- */

  lesson({
    id: 'r9-praca-vykon', order: 50, theme: 'elektrina', title: 'Elektrická práca a elektrický výkon',
    summary: 'Koľko energie spotrebič odoberie za čas a ako sa to počíta v kWh.',
    theory: [
      `<p><strong>Elektrický výkon</strong> je $P=U\\cdot I$ a jeho jednotkou je watt (W). Udáva, koľko energie spotrebič premení za sekundu.
       Ak poznáme odpor, platí aj $P=I^2\\,R$ alebo $P=\\frac{U^2}{R}$.</p>`,
      `<p><strong>Elektrická práca</strong> (spotrebovaná energia) je $W=P\\cdot t=U\\cdot I\\cdot t$, kde $t$ je čas v sekundách. Jednotkou je joule (J).
       Pretože $1\\,\\text{W}\\cdot 1\\,\\text{s}=1\\,\\text{J}$.</p>`,
      `<p>V domácnostiach sa energia účtuje v <strong>kilowatthodinách</strong> (kWh). Vypočítame ju ako výkon v kilowattoch krát čas v hodinách:
       $E = P\\cdot t$, pričom $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
      `<ol>
         <li>Výkon v kilowattoch: $1000\\,\\text{W} = 1\\,\\text{kW}$.</li>
         <li>Energia v kWh: výkon v kW krát čas v hodinách.</li>
       </ol>`
    ],
    examples: [
      { task: 'Žiarovka je pripojená na napätie $230\\,\\text{V}$ a preteká ňou prúd $0{,}5\\,\\text{A}$. Aký je jej výkon?',
        steps: ['$P = U\\cdot I = 230\\cdot 0{,}5$.', '<strong>Výsledok: P = 115 W</strong>'] },
      { task: 'Práčka má výkon $2\\,\\text{kW}$ a pracuje $1{,}5\\,\\text{h}$. Akú energiu spotrebuje v kWh?',
        steps: ['$E = P\\cdot t = 2\\cdot 1{,}5$.', '<strong>Výsledok: E = 3 kWh</strong>'] }
    ]
  });

  gen('r9-praca-vykon', () => {
    if (Math.random() < 0.5) {
      const U = pick([6, 9, 12, 24, 110, 230]), I = rnd(1, 10), P = U * I;
      return {
        q: T`Spotrebič je pripojený na napätie $${U}\\,\\text{V}$ a odoberá prúd $${I}\\,\\text{A}$. Aký je jeho elektrický výkon vo wattoch?`,
        answer: P,
        solution: T`$P=U\\cdot I=${U}\\cdot ${I}=${P}\\,\\text{W}$.`,
        hint: T.s('Elektrický výkon je súčin napätia a prúdu: $P=U\\cdot I$.'),
        mistakes: [{ value: U + I, msg: T`Napätie a prúd si sčítal. Výkon je ich súčin.` }].filter((x) => x.value !== P)
      };
    }
    const P = 1000 * pick([1, 2, 3]), t = rnd(1, 10), E = (P / 1000) * t;
    return {
      q: T`Spotrebič s výkonom $${P}\\,\\text{W}$ beží $${t}\\,\\text{h}$. Koľko energie spotrebuje v kilowatthodinách?`,
      answer: E,
      solution: T`$E=P\\cdot t=${P / 1000}\\,\\text{kW}\\cdot ${t}\\,\\text{h}=${E}\\,\\text{kWh}$.`,
      hint: T.s('Výkon najprv prepíš na kilowatty (1 kW = 1000 W). Energia je výkon krát čas.'),
      mistakes: [
        { value: P * t, msg: T`Zabudol si previesť watty na kilowatty. Najprv vydeľ výkon tisíckami.` },
        { value: P / 1000, msg: T`Zabudol si vynásobiť časom. Energia je výkon krát čas.` }
      ].filter((x) => x.value !== E)
    };
  });

  /* ---------- 6. magnetické pole prúdu ---------- */

  lesson({
    id: 'r9-magnetizmus', order: 60, theme: 'magnetizmus', title: 'Magnetické pole a magnetické účinky elektrického prúdu',
    summary: 'Okolo vodiča s prúdom vzniká magnetické pole, ktorého smer určíme pravidlom pravej ruky.',
    theory: [
      `<p>Okolo vodiča, ktorým preteká elektrický prúd, vzniká <strong>magnetické pole</strong>. Súvislosť medzi elektrinou a magnetizmom
       objavil v roku 1820 dánsky fyzik Ørsted: kompasová ihla sa pri zapnutí prúdu v blízkom vodiči vychýlila.</p>`,
      `<p><strong>Smer poľa</strong> určíme pravidlom pravej ruky: palec ukazuje smer prúdu a ohnuté prsty ukazujú smer magnetických siločiar okolo vodiča.
       Ak zmeníme smer prúdu, zmení sa aj smer poľa.</p>`,
      `<p>Ak vodič navinieme do <strong>cievky</strong>, polia jednotlivých závitov sa zložia a vnútri cievky vznikne silnejšie pole.
       Silu poľa zväčšíme väčším prúdom alebo väčším počtom závitov.</p>`,
      `<ul>
         <li>Bez prúdu okolo vodiča žiadne magnetické pole nie je.</li>
         <li>Magnetické pole pôsobí silou na magnety aj na iné vodiče s prúdom.</li>
         <li>Ďalej od vodiča je pole slabšie.</li>
       </ul>`
    ],
    examples: [
      { task: 'Ako sa zmení smer magnetického poľa okolo vodiča, ak otočíme smer prúdu?',
        steps: ['Smer poľa sa určuje smerom prúdu (pravidlo pravej ruky).', '<strong>Výsledok: smer poľa sa zmení na opačný.</strong>'] },
      { task: 'Prečo sa ihla kompasu v blízkosti vodiča s prúdom vychýli?',
        steps: ['Ihla kompasu je malý magnet, ktorý sa stáča v magnetickom poli.', '<strong>Výsledok: okolo vodiča s prúdom je magnetické pole, ktoré pôsobí na ihlu.</strong>'] }
    ]
  });

  const MAGNET_CHOICES = [
    { q: 'Ktoré tvrdenie o magnetickom poli okolo vodiča je pravdivé?', right: 'pole vzniká len vtedy, keď cez vodič preteká prúd',
      why: 'Magnetické pole okolo vodiča vzniká prúdom. Bez prúdu pole nie je.',
      wrong: [['pole vzniká aj vtedy, keď cez vodič neprechádza prúd', 'Bez prúdu okolo vodiča pole nevzniká.'],
        ['meď pole vodiča úplne vyruší', 'Materiál vodiča nezruší pole, ktoré vzniká prúdom.']] },
    { q: 'Čo sa stane so smerom magnetického poľa, ak otočíme smer prúdu vo vodiči?', right: 'zmení sa na opačný',
      why: 'Smer poľa závisí od smeru prúdu. Pri otočení prúdu sa pole obráti.',
      wrong: [['ostane rovnaký', 'Smer poľa závisí od smeru prúdu, takže sa zmení.'],
        ['pole zmizne', 'Pole zmizne len vtedy, keď prúd vypneme, nie pri otočení.']] },
    { q: 'Ako zosilníme magnetické pole cievky s prúdom?', right: 'zväčšíme prúd alebo počet závitov',
      why: 'Väčší prúd a väčší počet závitov zosilnia pole vnútri cievky.',
      wrong: [['zmenšíme prúd a vzdialime sa od cievky', 'Menší prúd aj väčšia vzdialenosť pole oslabia.'],
        ['cievku otočíme bez zmeny prúdu', 'Otočenie cievky samo o sebe pole nezosilní.']] }
  ];

  gen('r9-magnetizmus', () => choiceFrom(MAGNET_CHOICES, 'Pamätaj na pravidlo pravej ruky a na to, že pole vzniká prúdom.'));

  /* ---------- 7. elektromagnet a elektromotor ---------- */

  lesson({
    id: 'r9-elektromagnet', order: 70, theme: 'magnetizmus', title: 'Elektromagnet a elektromotor',
    summary: 'Cievka s jadrom ako dočasný magnet a motor, ktorý mení elektrickú energiu na pohyb.',
    theory: [
      `<p><strong>Elektromagnet</strong> je cievka s jadrom z mäkkého železa. Keď cez cievku preteká prúd, jadro sa zmagnetizuje.
       Po vypnutí prúdu magnetizmus zmizne. Silu elektromagnetu zväčšíme väčším prúdom alebo väčším počtom závitov.</p>`,
      `<p><strong>Elektromotor</strong> premieňa elektrickú energiu na pohybovú (mechanickú). Využíva silové pôsobenie magnetického poľa na vodič s prúdom:
       cievka v magnetickom poli sa otáča.</p>`,
      `<ul>
         <li>Elektromagnet sa používa v zvončekoch, reléach a zdvíhacích magnetoch v šrotoviskách.</li>
         <li>Elektromotor poháňa práčku, vŕtačku alebo ventilátor.</li>
       </ul>`,
      `<ol>
         <li>Prúd tečie cievkou motora.</li>
         <li>Magnetické pole pôsobí silou na vodiče cievky.</li>
         <li>Cievka sa otáča.</li>
         <li>Komutátor mení smer prúdu, aby sa otáčala ďalej.</li>
       </ol>`
    ],
    examples: [
      { task: 'Prečo elektromagnet v šrotovisku zdvihne železný šrot, ale po vypnutí prúdu ho pustí?',
        steps: ['Pri zapnutom prúde je jadro magnetické a priťahuje železo.', 'Po vypnutí prúdu sa magnetické pole stratí.', '<strong>Výsledok: magnetizmus elektromagnetu závisí od prúdu.</strong>'] },
      { task: 'Akú premenu energie robí elektromotor v práčke?',
        steps: ['Elektrická energia prechádza cez cievky motora.', 'Vzniká otáčanie bubna.', '<strong>Výsledok: elektrickú energiu na pohybovú (mechanickú).</strong>'] }
    ]
  });

  const MOTOR_CHOICES = [
    { q: 'Ako zosilníme elektromagnet?', right: 'zväčšíme počet závitov cievky',
      why: 'Viac závitov vytvorí silnejšie pole. Pri rovnakom prúde sa sila elektromagnetu zväčší.',
      wrong: [['zmenšíme prúd tečúci cievkou', 'Menší prúd znamená slabšie magnetické pole.'],
        ['železné jadro vymeníme za plastovú tyč', 'Plast nie je magnetický. Bez železného jadra je pole slabšie.']] },
    { q: 'Ktorá premena energie prebieha v elektromotore?', right: 'elektrická na pohybovú (mechanickú)',
      why: 'Elektromotor mení elektrickú energiu na pohyb cievky a hriadeľa.',
      wrong: [['elektrická na tepelnú', 'Tepelnú premenu využíva napríklad vykurovacie teleso, nie motor ako hlavný účel.'],
        ['pohybová na elektrickú', 'Toto je princíp generátora, nie motora.']] },
    { q: 'Čo elektromagnet potrebuje, aby priťahoval železné predmety?', right: 'prechádzajúci elektrický prúd cievkou',
      why: 'Elektromagnet je magnetický len vtedy, keď cievkou preteká prúd.',
      wrong: [['trvalý magnet pripevnený na jadre', 'Elektromagnet nepotrebuje trvalý magnet. Magnetizmus vzniká prúdom.'],
        ['zmenu teploty cievky', 'Teplota magnetizmus priamo nevytvára.']] }
  ];

  gen('r9-elektromagnet', () => choiceFrom(MOTOR_CHOICES, 'Pamätaj: elektromagnet je magnetický len vtedy, keď preteká prúd.'));

  /* ---------- 8. premeny a zdroje energie ---------- */

  lesson({
    id: 'r9-premeny-zdroje', order: 80, theme: 'energia', title: 'Premeny a zdroje energie',
    summary: 'Ako sa energia mení v elektrárňach a čím sa líšia obnoviteľné zdroje od neobnoviteľných.',
    theory: [
      `<p>Energia sa dá premieňať z jednej formy na druhú. Zdroje energie delíme na <strong>obnoviteľné</strong>, ktoré sa prirodzene obnovujú
       (slnko, vietor, voda, biomasa, geotermálna energia), a <strong>neobnoviteľné</strong>, ktorých zásoby sa spotrebúvajú
       (uhlie, ropa, zemný plyn, jadrové palivo).</p>`,
      `<ul>
         <li><strong>Uhoľná elektráreň:</strong> chemická energia paliva, tepelná, mechanická (turbína), elektrická.</li>
         <li><strong>Vodná elektráreň:</strong> polohová energia vody, pohybová, mechanická (turbína), elektrická.</li>
         <li><strong>Solárny panel:</strong> žiarivá energia zo Slnka sa mení na elektrickú.</li>
         <li><strong>Veterná elektráreň:</strong> pohybová energia vetra, mechanická, elektrická.</li>
       </ul>`,
      `<p>Pri každej premene časť energie prechádza do tepla a rozptýli sa do okolia. Celková energia sa zachová,
       ale užitočná energia sa zmenšuje.</p>`
    ],
    examples: [
      { task: 'Akú premenu energie robí solárny panel?',
        steps: ['Panel prijíma žiarivú energiu zo Slnka.', 'Mení ju na elektrickú energiu.', '<strong>Výsledok: žiarivú energiu na elektrickú.</strong>'] },
      { task: 'Prečo je uhlie neobnoviteľný zdroj?',
        steps: ['Vzniklo za milióny rokov z rastlín.', 'Spotrebúvame ho rýchlejšie, než sa obnoví.', '<strong>Výsledok: je neobnoviteľné, lebo sa nestihne obnoviť.</strong>'] }
    ]
  });

  const SOURCE_CHOICES = [
    { q: 'Akú energetickú premenu prebieha vo vodnej elektrárni?', right: 'polohová → pohybová → elektrická',
      why: 'Voda vo výške má polohovú energiu, pri páde pohybovú. Turbína a generátor ju menia na elektrickú.',
      wrong: [['chemická → elektrická', 'Vo vodnej elektrárni nevzniká chemická energia.'],
        ['žiarivá → elektrická', 'Žiarivú energiu prijímajú solárne panely, nie vodné turbíny.']] },
    { q: 'Ktorý zdroj energie je obnoviteľný?', right: 'vietor',
      why: 'Vietor vzniká prirodzene a neminie sa, preto je obnoviteľný.',
      wrong: [['uhlie', 'Uhlie je neobnoviteľné fosílne palivo.'],
        ['zemný plyn', 'Zemný plyn je neobnoviteľné fosílne palivo.']] },
    { q: 'Ktorý zdroj energie patrí medzi neobnoviteľné?', right: 'zemný plyn',
      why: 'Zemný plyn vznikol v zemi počas milióna rokov a jeho zásoby sa obnovujú veľmi pomaly.',
      wrong: [['slnečné žiarenie', 'Slnko je obnoviteľný zdroj.'],
        ['biomasa z dreva', 'Biomasa sa obnovuje rastom rastlín.']] },
    { q: 'Akú premenu energie robí uhoľná elektráreň ako prvú?', right: 'chemická → tepelná',
      why: 'Pri spaľovaní uhlia sa chemická energia paliva mení na teplo, ktoré ohrieva paru.',
      wrong: [['jadrová → chemická', 'Jadrová energia sa v uhoľnej elektrárni nevyužíva.'],
        ['elektrická → tepelná', 'Elektrická energia sa v elektrárni vyrába, nespotrebúva.']] }
  ];

  gen('r9-premeny-zdroje', () => choiceFrom(SOURCE_CHOICES, 'Pozri sa, z akej formy energie sa začína a na akú sa mení.'));

  /* ---------- 9. energia v prírode a technike ---------- */

  lesson({
    id: 'r9-energia-priroda', order: 90, theme: 'energia', title: 'Energia v prírode a technike',
    summary: 'Účinnosť zariadenia a energia, ktorú sa nedarí využiť.',
    theory: [
      `<p><strong>Účinnosť</strong> zariadenia ukazuje, akú časť dodanej energie premení na užitočnú prácu alebo energiu:
       $\\eta = \\frac{E_u}{E_d}\\cdot 100\\,\\%$, kde $E_u$ je užitočná a $E_d$ dodaná energia.</p>`,
      `<p>Účinnosť je vždy menšia ako 100 %. Časť energie sa premení na teplo, ktoré sa rozptýli do okolia.
       Žiarovka s vláknom má malú účinnosť, lebo väčšinu energie vyžiari ako teplo.</p>`,
      `<ul>
         <li>LED žiarovka je účinnejšia ako klasická žiarovka, lebo menej energie mení na teplo.</li>
         <li>Pri spaľovacom motore auta sa zo spálenej energie paliva veľká časť stratí ako teplo.</li>
       </ul>`,
      `<p>Energia sa v prírode nestráca, len sa rozptýli ako teplo, ktoré už ťažko využijeme. Preto sa človek snaží zvyšovať účinnosť strojov.</p>`
    ],
    examples: [
      { task: 'Motor dostane 400 J energie a 100 J premení na pohyb. Aká je jeho účinnosť?',
        steps: ['$\\eta = \\frac{100}{400}\\cdot 100\\,\\%$.', '$\\eta = 0{,}25\\cdot 100\\,\\% = 25\\,\\%$.', '<strong>Výsledok: 25 %</strong>'] },
      { task: 'Ohrievač s účinnosťou $90\\,\\%$ dostane $1000\\,\\text{J}$. Koľko energie sa stratí?',
        steps: ['Užitočná energia je $0{,}9\\cdot 1000 = 900\\,\\text{J}$.', 'Zvyšok sa stratí: $1000 - 900 = 100\\,\\text{J}$.', '<strong>Výsledok: 100 J</strong>'] }
    ]
  });

  gen('r9-energia-priroda', () => {
    const Ed = 100 * rnd(1, 10), p = 5 * rnd(2, 19), Eu = Ed * p / 100;
    if (Math.random() < 0.5) {
      return {
        q: T`Zariadenie dostane energiu $${Ed}\\,\\text{J}$ a premení z nej na užitočnú prácu $${Eu}\\,\\text{J}$. Aká je jeho účinnosť v percentách?`,
        answer: p,
        solution: T`$\\eta=\\frac{E_u}{E_d}\\cdot 100\\,\\%=\\frac{${Eu}}{${Ed}}\\cdot 100\\,\\%=${p}\\,\\%$.`,
        hint: T.s('Účinnosť je pomer užitočnej energie k dodanej, vynásobený 100 %.'),
        mistakes: [{ value: 100 - p, msg: T`To je podiel straty, nie účinnosti. Účinnosť je podiel užitočnej energie.` }]
          .filter((x) => x.value !== p)
      };
    }
    return {
      q: T`Zariadenie s účinnosťou $${p}\\,\\%$ dostane energiu $${Ed}\\,\\text{J}$. Koľko joulov je jeho užitočná energia?`,
      answer: Eu,
      solution: T`$E_u=\\eta\\cdot E_d=\\frac{${p}}{100}\\cdot ${Ed}=${Eu}\\,\\text{J}$.`,
      hint: T.s('Užitočná energia je účinnosť (ako desatinné číslo) krát dodaná energia.'),
      mistakes: [
        { value: Ed - Eu, msg: T`To je strata, nie užitočná energia. Hľadáme časť, ktorá sa využije.` },
        { value: Ed * p, msg: T`Účinnosť si nepremenil na desatinné číslo. Percentá vydeľ stotinami.` }
      ].filter((x) => x.value !== Eu)
    };
  });

  /* ---------- 10. opakovanie a praktické úlohy ---------- */

  lesson({
    id: 'r9-opakovanie', order: 100, theme: 'opakovanie', title: 'Opakovanie a praktické fyzikálne úlohy',
    summary: 'Prehľad vzťahov z deviateho ročníka a postup pri praktických úlohách.',
    theory: [
      `<p>Pri každej úlohe najprv zapíš, čo je dané a čo hľadáme. Potom vyber vzorec, prevedieš jednotky a dosadíš.
       Na konci skontroluj jednotky výsledku a či je hodnota rozumná.</p>`,
      `<ol>
         <li>Urči, o aký jav ide: elektrický obvod, energia, výkon, magnetizmus.</li>
         <li>Vyber správny vzorec.</li>
         <li>Prevedi jednotky (mA na A, kW na W, minúty na sekundy, kWh na J).</li>
         <li>Dosaď, vypočítaj a skontroluj jednotky.</li>
       </ol>`,
      `<ul>
         <li>Ohmov zákon: $I=\\frac{U}{R}$, $U=I\\cdot R$, $R=\\frac{U}{I}$.</li>
         <li>Výkon a práca: $P=U\\cdot I$, $W=P\\cdot t$.</li>
         <li>Polohová energia: $E_p=m\\,g\\,h$, pri $g\\approx 10\\,\\text{m/s}^2$.</li>
         <li>Účinnosť: $\\eta=\\frac{E_u}{E_d}\\cdot 100\\,\\%$.</li>
       </ul>`
    ],
    examples: [
      { task: 'Motor s výkonom $1500\\,\\text{W}$ beží $2\\,\\text{h}$. Akú energiu spotrebuje v kWh?',
        steps: ['Výkon v kilowattoch: $1500\\,\\text{W} = 1{,}5\\,\\text{kW}$.', '$E = P\\cdot t = 1{,}5\\cdot 2 = 3$.', '<strong>Výsledok: E = 3 kWh</strong>'] },
      { task: 'Teleso s hmotnosťou $3\\,\\text{kg}$ je vo výške $4\\,\\text{m}$. Aká je jeho polohová energia pri $g = 10\\,\\text{m/s}^2$?',
        steps: ['$E_p = m\\,g\\,h = 3\\cdot 10\\cdot 4$.', '<strong>Výsledok: E_p = 120 J</strong>'] }
    ]
  });

  gen('r9-opakovanie', () => {
    const k = rnd(0, 2);
    if (k === 0) {
      const R = rnd(2, 25), I = rnd(1, 10), U = I * R;
      return {
        q: T`Na žiarovke je napätie $${U}\\,\\text{V}$ a jej odpor je $${R}\\,\\Omega$. Aký prúd žiarovkou preteká?`,
        answer: I,
        solution: T`$I=\\frac{U}{R}=\\frac{${U}}{${R}}=${I}\\,\\text{A}$.`,
        hint: T.s('Prúd je napätie delené odporom: $I=\\frac{U}{R}$.'),
        mistakes: [
          { value: U * R, msg: T`Napätie si vynásobil odporom. Prúd je $I=\\frac{U}{R}$.` },
          { value: U - R, msg: T`Odčítal si napätie a odpor. Použi vzorec $I=\\frac{U}{R}$.` }
        ].filter((x) => x.value !== I)
      };
    }
    if (k === 1) {
      const m = 2 * rnd(1, 10), h = rnd(1, 20), Ep = 10 * m * h;
      return {
        q: T`Teleso s hmotnosťou $${m}\\,\\text{kg}$ je vo výške $${h}\\,\\text{m}$. Aká je jeho polohová energia v joule? Uvažuj $g=10\\,\\text{m/s}^2$.`,
        answer: Ep,
        solution: T`$E_p=m\\,g\\,h=${m}\\cdot 10\\cdot ${h}=${Ep}\\,\\text{J}$.`,
        hint: T.s('Polohová energia je $E_p=m\\,g\\,h$. Nezabudni na gravitačné zrýchlenie.'),
        mistakes: [{ value: m * h, msg: T`Zabudol si vynásobiť gravitačným zrýchlením $g=10\\,\\text{m/s}^2$.` }]
          .filter((x) => x.value !== Ep)
      };
    }
    const I = rnd(1, 10), t = rnd(2, 30), Q = I * t;
    return {
      q: T`Nabíjačka dodáva prúd $${I}\\,\\text{A}$ počas $${t}\\,\\text{s}$. Aký elektrický náboj prejde prierezom nabíjacieho kábla?`,
      answer: Q,
      solution: T`$Q=I\\cdot t=${I}\\cdot ${t}=${Q}\\,\\text{C}$.`,
      hint: T.s('Náboj je súčin prúdu a času: $Q=I\\cdot t$.'),
      mistakes: [
        { value: I + t, msg: T`Prúd a čas si sčítal. Náboj je ich súčin.` },
        { value: I, msg: T`Výsledok je náboj, nie prúd. Vynásob prúd časom.` }
      ].filter((x) => x.value !== Q)
    };
  });
})();
