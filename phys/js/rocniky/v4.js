/* Vysoká škola, 4. oblasť: Optika a fyzika vĺn (v4). Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, shuffle, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v4' }, l));
  const gen = EXERCISES.register;
  // desatinné číslo v matematickom režime: 0{,}25 (slovenčina), 0.25 (jazyk s bodkou)
  const M = (x) => fmt(x).replace(',', '{,}');
  // ponechá len chyby, ktoré sa líšia od správnej odpovede
  const keep = (list, ans, eps = 1e-6) => list.filter((m) => Math.abs(m.value - ans) > eps);

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'v4-vlnenie', order: 10, theme: 'vlny', title: 'Mechanické a elektromagnetické vlnenie',
    summary: 'Čo sa pri vlnení prenáša a prečo mechanické vlny potrebujú látku, kým elektromagnetické nie.',
    theory: [
      `<p>Vlnenie je šírenie kmitov v priestore. Látka sa pri ňom nepresúva, prenáša sa <strong>energia</strong> a <strong>informácia</strong>. Podľa toho, čo kmitá, delíme vlny na <strong>mechanické</strong> (kmitá látka, napr. zvuk, vlny na vode, seizmické vlny) a <strong>elektromagnetické</strong> (kmitá elektrické a magnetické pole, napr. svetlo, rádiové vlny, röntgenové žiarenie).</p>`,
      `<p>Mechanické vlnenie potrebuje <strong>látkové prostredie</strong>, pretože každá častica rozkmitá svoju susedku. Preto sa zvuk vo vákuu nešíri. Elektromagnetické vlnenie sa šíri aj vo vákuu, lebo kmity poľa nepotrebujú žiadnu časticu, ktorá by ich odovzdávala ďalej.</p>`,
      `<p>Podľa smeru kmitov rozlišujeme vlny <strong>priečne</strong> (kmity sú kolmé na smer šírenia, napr. vlna na strune a svetlo) a <strong>pozdĺžne</strong> (kmity sú v smere šírenia, napr. zvuk v plynoch). Rýchlosť zvuku vo vzduchu je približne $340\\,\\text{m/s}$, rýchlosť svetla vo vákuu je $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`
    ],
    examples: [
      { task: 'Svetlo zo Slnka prichádza na Zem cez prázdny vesmírny priestor. Je to mechanické, alebo elektromagnetické vlnenie?',
        steps: ['Medzi Slnkom a Zemou nie je látka, teda vlnenie sa šíri vo vákuu.', '<strong>Výsledok: ide o elektromagnetické vlnenie.</strong>'] },
      { task: 'Prečo sa zvuk nepočuje v prázdnom priestore medzi dvoma loďami vo vesmíre?',
        steps: ['Zvuk je mechanické vlnenie, potrebuje látkové prostredie.', 'Vo vákuu žiadne častice nie sú, takže kmity sa nemajú komu odovzdať.', '<strong>Výsledok: zvuk sa vo vákuu nešíri.</strong>'] }
    ]
  });

  gen('v4-vlnenie', () => {
    const items = [
      ['zvuk šíriaci sa vzduchom', 'mechanické'],
      ['svetlo prichádzajúce zo vzdialenej hviezdy', 'elektromagnetické'],
      ['vlny na hladine jazera', 'mechanické'],
      ['röntgenové žiarenie', 'elektromagnetické'],
      ['seizmické vlny v zemskej kôre', 'mechanické'],
      ['signál rádiovej stanice', 'elektromagnetické']
    ];
    const [what, kind] = pick(items);
    const MECH = T.s('mechanické'), EM = T.s('elektromagnetické');
    const answer = kind === 'mechanické' ? MECH : EM;
    const wrong = answer === MECH ? EM : MECH;
    return {
      type: 'choice',
      options: [MECH, EM],
      answer,
      choiceHints: { [wrong]: T`Skús si spomenúť, či sa tento jav šíri aj vo vákuu. Mechanické vlnenie vždy potrebuje látku.` },
      q: T`Ktorý druh vlnenia predstavuje ${T.s(what)}?`,
      solution: T`Správne je ${answer}. Mechanické vlnenie potrebuje látkové prostredie, elektromagnetické sa šíri aj vo vákuu.`,
      hint: T`Zamysli sa, či sa daný jav šíri aj vo vákuu, a čo presne kmitá.`
    };
  });

  lesson({
    id: 'v4-frekvencia', order: 20, theme: 'vlny', title: 'Frekvencia, vlnová dĺžka a amplitúda',
    summary: 'Veličiny opisujúce vlnu a vzťah v = λ·f medzi nimi.',
    theory: [
      `<p>Vlna sa opisuje tromi základnými veličinami: <strong>amplitúdou</strong> $A$ (najväčšia výchylka od rovnovážnej polohy), <strong>frekvenciou</strong> $f$ (počet kmitov za sekundu, jednotka $\\text{Hz}$) a <strong>vlnovou dĺžkou</strong> $\\lambda$ (vzdialenosť dvoch najbližších bodov, ktoré kmitajú v zhode).</p>`,
      `<p>Perióda $T=\\frac{1}{f}$ je čas jedného kmitu. Amplitúda súvisí so <em>silou</em> vlnenia (napr. hlasitosťou zvuku alebo jasom svetla), frekvencia určuje výšku tónu alebo farbu svetla.</p>`,
      `<p>Rýchlosť šírenia vlny je $v=\\lambda\\cdot f$. Pri prechode do iného prostredia sa mení rýchlosť aj vlnová dĺžka, ale <strong>frekvencia sa nemení</strong>: ju určuje zdroj kmitov, nie prostredie.</p>`
    ],
    examples: [
      { task: 'Vlna má frekvenciu $f=50\\,\\text{Hz}$ a vlnovú dĺžku $\\lambda=6\\,\\text{m}$. Aká je jej rýchlosť?',
        steps: ['$v=\\lambda\\cdot f=6\\cdot 50$.', '<strong>Výsledok: $v=300\\,\\text{m/s}$</strong>'] },
      { task: 'Aká je perióda vlny s frekvenciou $f=4\\,\\text{Hz}$?',
        steps: ['$T=\\frac{1}{f}=\\frac{1}{4}$.', '<strong>Výsledok: $T=0{,}25\\,\\text{s}$</strong>'] }
    ]
  });

  gen('v4-frekvencia', () => {
    const f = 20 * rnd(5, 50), lam = pick([0.2, 0.25, 0.4, 0.5, 0.8, 1.25, 2]);
    const v = Math.round(f * lam);
    return {
      q: T`Vlna má frekvenciu $f=${f}\\,\\text{Hz}$ a vlnovú dĺžku $\\lambda=${M(lam)}\\,\\text{m}$. Akou rýchlosťou sa šíri? Výsledok zadaj v m/s.`,
      answer: v,
      solution: T`$v=\\lambda\\cdot f=${M(lam)}\\cdot ${f}=${v}\\,\\text{m/s}$.`,
      hint: T`Rýchlosť vlny je súčin vlnovej dĺžky a frekvencie: $v=\\lambda\\cdot f$.`,
      mistakes: keep([{ value: f / lam, msg: T`Delil si frekvenciu vlnovou dĺžkou. Pre rýchlosť platí $v=\\lambda\\cdot f$, teda násobíme.` }], v)
    };
  });

  lesson({
    id: 'v4-interferencia', order: 30, theme: 'vlny', title: 'Interferencia a difrakcia',
    summary: 'Skladanie vĺn: kedy sa vlny zosilnia, kedy zoslabia, a prečo sa vlny ohýbajú za prekážkami.',
    theory: [
      `<p><strong>Princíp superpozície:</strong> výsledný kmit v bode je súčet kmitov všetkých vĺn, ktoré tam prichádzajú. Ak vlny kmitajú v zhode (koherentne), o výsledku rozhoduje <strong>dráhový rozdiel</strong> $\\Delta d$.</p>`,
      `<p><strong>Zosilnenie</strong> nastane, ak je dráhový rozdiel celočíselným násobkom vlnovej dĺžky: $\\Delta d=m\\,\\lambda$. <strong>Zoslabenie</strong> nastane, ak je dráhový rozdiel nepárnym násobkom polovice vlnovej dĺžky: $\\Delta d=\\left(m+\\tfrac{1}{2}\\right)\\lambda$.</p>`,
      `<p><strong>Difrakcia</strong> je ohyb vlny okolo prekážky alebo cez úzku štrbinu. Je výraznejšia, ak je rozmer prekážky porovnateľný s vlnovou dĺžkou. Preto sa zvuk ohýba za rohom ľahko, kým svetlo vytvorí ostrý tieň.</p>`
    ],
    examples: [
      { task: 'Dve koherentné vlny s vlnovou dĺžkou $\\lambda=0{,}5\\,\\text{m}$ majú dráhový rozdiel $\\Delta d=1{,}25\\,\\text{m}$. Nastane zosilnenie, alebo zoslabenie?',
        steps: ['$\\frac{\\Delta d}{\\lambda}=\\frac{1{,}25}{0{,}5}=2{,}5$.', 'Číslo $2{,}5$ je polovičný nepárny násobok: $2{,}5=\\left(2+\\tfrac{1}{2}\\right)$.', '<strong>Výsledok: zoslabenie.</strong>'] }
    ]
  });

  gen('v4-interferencia', () => {
    const lam = pick([0.4, 0.5, 0.8, 1.2, 2]);
    const m = rnd(0, 4), half = rnd(0, 1);
    const dd = (m + 0.5 * half) * lam;
    const ZOS = T.s('zosilnenie'), ZOL = T.s('zoslabenie');
    const answer = half === 0 ? ZOS : ZOL;
    const wrong = half === 0 ? ZOL : ZOS;
    return {
      type: 'choice',
      options: [ZOS, ZOL],
      answer,
      choiceHints: { [wrong]: T`Zosilnenie nastáva pri celočíselnom násobku vlnovej dĺžky, zoslabenie pri polovičnom nepárnom násobku.` },
      q: T`Dve koherentné vlny s vlnovou dĺžkou $\\lambda=${M(lam)}\\,\\text{m}$ sa v bode stretnú s dráhovým rozdielom $\\Delta d=${M(dd)}\\,\\text{m}$. Nastane zosilnenie, alebo zoslabenie?`,
      solution: T`$\\frac{\\Delta d}{\\lambda}=${M(dd / lam)}$. ${half === 1 ? T`Ide o nepárny násobok polovice vlnovej dĺžky, nastáva zoslabenie.` : T`Ide o celočíselný násobok vlnovej dĺžky, nastáva zosilnenie.`}`,
      hint: T`Vydeľ dráhový rozdiel vlnovou dĺžkou. Celé číslo znamená zosilnenie, číslo končiace na $\\frac{1}{2}$ zoslabenie.`
    };
  });

  lesson({
    id: 'v4-polarizacia', order: 40, theme: 'svetlo', title: 'Polarizácia svetla',
    summary: 'Priečnosť svetla, polarizátor a Malusov zákon pre intenzitu za analyzátorom.',
    theory: [
      `<p>Svetlo je priečne vlnenie: elektrické pole kmitá kolmo na smer šírenia. <strong>Polarizované</strong> svetlo má kmity v jednej rovine. Bežný zdroj (žiarovka, Slnko) vysiela nepolarizované svetlo, kde rovina kmitov sa náhodne mení.</p>`,
      `<p>Polarizátor prepúšťa len zložku kmitov v svojom smere. Pri prechode <strong>nepolarizovaného</strong> svetla prvým polarizátorom sa intenzita zníži na polovicu.</p>`,
      `<p><strong>Malusov zákon:</strong> ak lineárne polarizované svetlo s intenzitou $I_0$ dopadne na analyzátor natočený o uhol $\\varphi$, za ním je intenzita $I=I_0\\cos^2\\varphi$. Kosínus je na druhú preto, lebo prepúšťa len zložku poľa v smere osi a intenzita je úmerná štvorcu amplitúdy.</p>`
    ],
    examples: [
      { task: 'Lineárne polarizované svetlo s intenzitou $I_0=80$ prejde analyzátorom natočeným o $60^\\circ$. Akú má intenzitu za ním?',
        steps: ['$\\cos^2 60^\\circ=\\left(\\tfrac{1}{2}\\right)^2=0{,}25$.', '$I=80\\cdot 0{,}25=20$.', '<strong>Výsledok: $I=20$</strong>'] }
    ]
  });

  gen('v4-polarizacia', () => {
    const I0 = pick([40, 80, 100, 200]);
    const [deg, c2] = pick([[0, 1], [30, 0.75], [45, 0.5], [60, 0.25], [90, 0]]);
    const I = I0 * c2;
    return {
      q: T`Lineárne polarizované svetlo s intenzitou $I_0=${I0}$ prechádza analyzátorom. Os analyzátora je natočená o $\\varphi=${deg}^\\circ$ voči rovine polarizácie svetla. Akú intenzitu $I$ má svetlo za analyzátorom?`,
      answer: I,
      solution: T`$I=I_0\\cos^2\\varphi=${I0}\\cdot ${M(c2)}=${I}$.`,
      hint: T`Malusov zákon: $I=I_0\\cos^2\\varphi$, kde $\\varphi$ je uhol medzi polarizáciou svetla a osou analyzátora.`,
      mistakes: keep([
        { value: I0 * (1 - c2), msg: T`Použil si $\\sin^2\\varphi$ namiesto $\\cos^2\\varphi$. Malusov zákon používa kosínus.` },
        { value: I0 * Math.sqrt(c2), msg: T`Zabudol si umocniť kosínus na druhú. Platí $I=I_0\\cos^2\\varphi$, nie $I_0\\cos\\varphi$.` }
      ], I)
    };
  });

  lesson({
    id: 'v4-geometricka-optika', order: 50, theme: 'svetlo', title: 'Geometrická a vlnová optika',
    summary: 'Index lomu, rýchlosť svetla v látkach a Snellov zákon lomu.',
    theory: [
      `<p><strong>Geometrická optika</strong> opisuje svetlo ako lúče, ktoré sa šíria priamo, odrážajú sa podľa zákona odrazu ($\\alpha=\\alpha'$) a lomia na rozhraní prostredí. Vlnová optika vysvetľuje javy, ktoré lúče nezachytia, napríklad interferenciu a difrakciu.</p>`,
      `<p><strong>Index lomu</strong> $n=\\frac{c}{v}$ udáva, koľkokrát je svetlo v látke pomalšie ako vo vákuu. Vo vode je $n\\approx 1{,}33$, v skle okolo $1{,}5$. Rýchlosť svetla v látke je $v=\\frac{c}{n}$.</p>`,
      `<p><strong>Snellov zákon</strong> $n_1\\sin\\alpha=n_2\\sin\\beta$ hovorí, ako sa lúč láme. Prechod do opticky hustejšieho prostredia ($n_2>n_1$) lúč láme k normále, prechod do redšieho od normály.</p>`
    ],
    examples: [
      { task: 'Aká je rýchlosť svetla v skle s indexom lomu $n=1{,}5$? Použi $c=3\\cdot 10^{8}\\,\\text{m/s}$.',
        steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{1{,}5}$.', '<strong>Výsledok: $v=2\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
    ]
  });

  gen('v4-geometricka-optika', () => {
    const n = pick([1.25, 1.33, 1.5, 1.6, 2]);
    const ans = Math.round(300 / n) / 100;
    return {
      q: T`Svetlo sa šíri v priehľadnej látke s indexom lomu $n=${M(n)}$. Akú rýchlosť má v nej? Výsledok zadaj v jednotkách $10^{8}\\,\\text{m/s}$ (zaokrúhli na 2 des. miesta).`,
      answer: ans,
      tol: 0.01,
      solution: T`$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{${M(n)}}\\approx ${M(ans)}\\cdot 10^{8}\\,\\text{m/s}$.`,
      hint: T`Rýchlosť svetla v látke je $v=\\frac{c}{n}$, kde $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$ je rýchlosť vo vákuu.`,
      mistakes: keep([
        { value: 3 * n, msg: T`Vynásobil si index lomu. Platí $v=\\frac{c}{n}$, teda deliť.` },
        { value: 3, msg: T`Dosadil si rýchlosť vo vákuu. V látke sa svetlo spomalí o faktor $n$.` }
      ], ans, 0.05)
    };
  });

  lesson({
    id: 'v4-zobrazovanie', order: 60, theme: 'svetlo', title: 'Zobrazovanie šošovkami a zrkadlami',
    summary: 'Zobrazovacia rovnica pre spojnú šošovku a určenie polohy obrazu.',
    theory: [
      `<p>Spojná šošovka sústredí rovnobežné lúče do <strong>ohniska</strong> vo vzdialenosti $f$. Predmet vo vzdialenosti $a$ pred šošovkou vytvorí obraz vo vzdialenosti $b$ za ňou.</p>`,
      `<p><strong>Zobrazovacia rovnica</strong> platí pre tenké šošovky a zrkadlá: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$. Je to vzťah medzi tromi veličinami, takže ak poznáme dve, tretiu dopočítame.</p>`,
      `<p>Ak je $a>f$, obraz je skutočný a prevrátený. Pozor na chybu: prevrátenú hodnotu sčítavame, nie samotné vzdialenosti. Vzťah $b=a+f$ neplatí.</p>`
    ],
    examples: [
      { task: 'Predmet je vo vzdialenosti $a=30\\,\\text{cm}$ pred spojnou šošovkou s ohniskom $f=15\\,\\text{cm}$. Kde vznikne obraz?',
        steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{15}-\\frac{1}{30}=\\frac{1}{30}$.', '<strong>Výsledok: $b=30\\,\\text{cm}$</strong>'] }
    ]
  });

  // trojice [a, f, b] v cm, vždy splňa 1/f = 1/a + 1/b
  const LENS = [[30, 15, 30], [20, 15, 60], [60, 30, 60], [40, 20, 40], [30, 20, 60], [20, 10, 20],
    [30, 10, 15], [60, 15, 20], [120, 30, 40], [50, 25, 50], [24, 12, 24], [36, 12, 18]];

  gen('v4-zobrazovanie', () => {
    const [a, f, b] = pick(LENS);
    return {
      q: T`Predmet je vo vzdialenosti $a=${a}\\,\\text{cm}$ pred spojnou šošovkou s ohniskovou vzdialenosťou $f=${f}\\,\\text{cm}$. Vo vzdialenosti $b$ za šošovkou vznikne obraz. Akú vzdialenosť $b$ má obraz od šošovky v cm?`,
      answer: b,
      solution: T`$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{${f}}-\\frac{1}{${a}}=\\frac{1}{${b}}$, teda $b=${b}\\,\\text{cm}$.`,
      hint: T`Použi zobrazovaciu rovnicu $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$ a vyjadri z nej $b$.`,
      mistakes: keep([
        { value: (a * f) / (a + f), msg: T`Zamenil si znamienko pri ohnisku: správne je $\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}$, nie $\\frac{1}{f}+\\frac{1}{a}$.` },
        { value: f, msg: T`Hodnota $f$ je ohnisková vzdialenosť, nie vzdialenosť obrazu. Obraz dopočítaj zo zobrazovacej rovnice.` }
      ], b)
    };
  });

  lesson({
    id: 'v4-lasery', order: 70, theme: 'svetlo', title: 'Lasery a optické prístroje',
    summary: 'Vlastnosti laserového svetla, výpočet frekvencie a zväčšenie lupy.',
    theory: [
      `<p><strong>Laser</strong> (zosilnenie svetla stimulovanou emisiou žiarenia) vytvára svetlo s vlastnosťami, ktoré bežný zdroj nemá: je <strong>monochromatické</strong> (jedna vlnová dĺžka), <strong>koherentné</strong> (kmity v zhode) a tvorí <strong>úzky zväzok</strong>. Preto sa dá zaostriť na malú škvrnu.</p>`,
      `<p>Pre každé svetlo platí $c=\\lambda\\cdot f$, teda frekvencia je $f=\\frac{c}{\\lambda}$. Vlnová dĺžka sa v optike zvykne uvádzať v nanometroch: $1\\,\\text{nm}=10^{-9}\\,\\text{m}$.</p>`,
      `<p><strong>Optické prístroje</strong> používajú šošovky na zväčšenie. Lupa so ohniskom $f$ dáva pri pohodlnom pozorovaní zväčšenie $Z=\\frac{d}{f}$, kde $d\\approx 250\\,\\text{mm}$ je zraková vzdialenosť. Kratšie ohnisko znamená väčšie zväčšenie.</p>`
    ],
    examples: [
      { task: 'Červené laserové svetlo má vlnovú dĺžku $\\lambda=650\\,\\text{nm}$. Aká je jeho frekvencia v jednotkách $10^{14}\\,\\text{Hz}$?',
        steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{650\\cdot 10^{-9}}\\approx 4{,}6\\cdot 10^{14}\\,\\text{Hz}$.', '<strong>Výsledok: približne $4{,}6\\cdot 10^{14}\\,\\text{Hz}$</strong>'] }
    ]
  });

  gen('v4-lasery', () => {
    if (Math.random() < 0.5) {
      const lam = pick([405, 532, 633, 650, 780]);
      const ans = Math.round(3000 / lam) / 100;
      return {
        q: T`Laser vyžaruje svetlo s vlnovou dĺžkou $\\lambda=${lam}\\,\\text{nm}$. Akú frekvenciu má toto svetlo? Výsledok zadaj v jednotkách $10^{14}\\,\\text{Hz}$ (zaokrúhli na 2 des. miesta).`,
        answer: ans,
        tol: 0.01,
        solution: T`$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{${lam}\\cdot 10^{-9}}\\approx ${M(ans)}\\cdot 10^{14}\\,\\text{Hz}$.`,
        hint: T`Pre svetlo platí $c=\\lambda\\cdot f$. Nanometer je $10^{-9}\\,\\text{m}$, takže ho najprv prepíš na metre.`,
        mistakes: keep([
          { value: lam / 1000, msg: T`Pomýlil si prevod jednotiek. Vlnová dĺžka je v nanometroch, $1\\,\\text{nm}=10^{-9}\\,\\text{m}$.` }
        ], ans, 0.05)
      };
    }
    const f = pick([25, 50, 100, 125, 250]);
    const G = 250 / f;
    return {
      q: T`Lupa má ohniskovú vzdialenosť $f=${f}\\,\\text{mm}$. Aké je jej zväčšenie pri pohodlnom pozorovaní, ak zraková vzdialenosť je $d=250\\,\\text{mm}$? Zväčšenie je $Z=\\frac{d}{f}$.`,
      answer: G,
      solution: T`$Z=\\frac{d}{f}=\\frac{250}{${f}}=${G}$.`,
      hint: T`Zväčšenie lupy je podiel zrakovej vzdialenosti a ohniskovej vzdialenosti.`,
      mistakes: keep([
        { value: f / 250, msg: T`Obrátil si zlomok. Zväčšenie je $\\frac{d}{f}$, teda zrakovú vzdialenosť deľ ohniskom.` }
      ], G)
    };
  });

  lesson({
    id: 'v4-vlakna', order: 80, theme: 'svetlo', title: 'Základy optických vlákien',
    summary: 'Úplný odraz na rozhraní jadra a plášťa a kritický uhol.',
    theory: [
      `<p>Optické vlákno vedie svetlo vnútri tenkého jadra s indexom lomu $n_1$, obklopeného plášťom s nižším indexom $n_2&lt;n_1$. Svetlo sa v jadre udržuje <strong>úplným odrazom</strong>, nie lomom, takže sa takmer nestráca.</p>`,
      `<p>Úplný odraz nastane, ak uhol dopadu presiahne <strong>kritický uhol</strong> $\\alpha_c$, pre ktorý platí $\\sin\\alpha_c=\\frac{n_2}{n_1}$. Pre väčší rozdiel indexov je kritický uhol menší a vlákno zachytí viac svetla.</p>`,
      `<p>Signál sa prenáša impulzmi svetla. Vlákna sa používajú v internete a telekomunikáciách, lebo svetlo prenesie veľa informácie na veľké vzdialenosti a nie je rušené elektromagnetickým poľom.</p>`
    ],
    examples: [
      { task: 'Jadro vlákna má $n_1=1{,}5$ a plášť $n_2=1{,}0$. Aký je sínus kritického uhla?',
        steps: ['$\\sin\\alpha_c=\\frac{n_2}{n_1}=\\frac{1{,}0}{1{,}5}$.', '<strong>Výsledok: $\\sin\\alpha_c\\approx 0{,}67$</strong>'] }
    ]
  });

  gen('v4-vlakna', () => {
    const n1 = 1.5, n2 = pick([1, 1.25, 1.33]);
    const ans = Math.round((n2 / n1) * 100) / 100;
    return {
      q: T`Jadro optického vlákna má index lomu $n_1=${M(n1)}$, plášť má $n_2=${M(n2)}$. Aký je sínus kritického uhla pre úplný odraz na rozhraní jadro–plášť? Zaokrúhli na 2 des. miesta.`,
      answer: ans,
      tol: 0.005,
      solution: T`$\\sin\\alpha_c=\\frac{n_2}{n_1}=\\frac{${M(n2)}}{${M(n1)}}\\approx ${M(ans)}$.`,
      hint: T`Kritický uhol pre úplný odraz: $\\sin\\alpha_c=\\frac{n_2}{n_1}$. Dosaď index plášťa do čitateľa.`,
      mistakes: keep([
        { value: n1 / n2, msg: T`Obrátil si pomer indexov. Kritický uhol počítame z $\\frac{n_2}{n_1}$, nie z $\\frac{n_1}{n_2}$.` },
        { value: n2, msg: T`Zabudol si deliť indexom jadra. Sínus kritického uhla je podiel $\\frac{n_2}{n_1}$.` }
      ], ans, 0.05)
    };
  });
})();
