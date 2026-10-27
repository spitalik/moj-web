/* Vysoká škola, 6. oblasť: Teória relativity (v6). Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, shuffle, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v6' }, l));
  const gen = EXERCISES.register;
  // desatinné číslo v matematickom režime: 0{,}25 (slovenčina), 0.25 (jazyk s bodkou)
  const M = (x) => fmt(x).replace(',', '{,}');
  // ponechá len chyby, ktoré sa líšia od správnej odpovede
  const keep = (list, ans, eps = 1e-6) => list.filter((m) => Math.abs(m.value - ans) > eps);

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'v6-specialna', order: 10, theme: 'relativita', title: 'Špeciálna teória relativity',
    summary: 'Dva postuláty, dilatácia času a Lorentzov faktor.',
    theory: [
      `<p>Špeciálna teória relativity vychádza z dvoch postulátov: (1) fyzikálne zákony sú rovnaké vo všetkých inerciálnych sústavách, (2) rýchlosť svetla vo vákuu $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$ je rovnaká pre každého pozorovateľa bez ohľadu na pohyb zdroja.</p>`,
      `<p>Z druhého postulátu vyplýva, že čas nie je absolútny. Pohybujúce sa hodiny idú pomalšie: interval $\\Delta t$ nameraný v sústave, vzhľadom na ktorú sa hodiny pohybujú, je dlhší ako vlastný čas $\\Delta t_0$ v ich kľudovej sústave. Platí $\\Delta t=\\gamma\\,\\Delta t_0$, kde $\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}\\geq 1$ je <strong>Lorentzov faktor</strong>.</p>`,
      `<p>Efekt je zanedbateľný pri bežných rýchlostiach, lebo $\\gamma$ je blízko 1. Pri rýchlostiach blízkych $c$ rastie veľmi rýchlo. Častice v kozmickom žiarení napríklad žijú dlhšie, než by podľa klasickej fyziky mohli.</p>`
    ],
    examples: [
      { task: 'Častica sa pohybuje rýchlosťou $v=0{,}6\\,c$. Aký je jej Lorentzov faktor?',
        steps: ['$\\gamma=\\frac{1}{\\sqrt{1-0{,}6^2}}=\\frac{1}{\\sqrt{0{,}64}}$.', '$\\sqrt{0{,}64}=0{,}8$, takže $\\gamma=\\frac{1}{0{,}8}$.', '<strong>Výsledok: $\\gamma=1{,}25$</strong>'] }
    ]
  });

  gen('v6-specialna', () => {
    const b = pick([0.5, 0.6, 0.8, 0.96]);
    const g = 1 / Math.sqrt(1 - b * b);
    if (Math.random() < 0.5) {
      const ans = Math.round(g * 100) / 100;
      return {
        q: T`Častica sa pohybuje rýchlosťou $v=${M(b)}\\,c$. Aký je jej Lorentzov faktor $\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}$? Zaokrúhli na 2 des. miesta.`,
        answer: ans,
        tol: 0.01,
        solution: T`$\\gamma=\\frac{1}{\\sqrt{1-${M(b)}^2}}\\approx ${M(ans)}$.`,
        hint: T`Najprv vypočítaj $\\frac{v^2}{c^2}$, potom odčítaj od jednotky, odmocni a vezmi prevrátenú hodnotu.`,
        mistakes: keep([
          { value: Math.sqrt(1 - b * b), msg: T`Dosadil si prevrátenú hodnotu. Lorentzov faktor je $\\frac{1}{\\sqrt{1-v^2/c^2}}$, teda väčší ako 1.` },
          { value: 1 + (b * b) / 2, msg: T`Použil si nerelativistickú aproximáciu. Pri veľkých rýchlostiach ju nemožno použiť, treba presný vzorec.` }
        ], ans, 0.05)
      };
    }
    const dt0 = pick([2, 5, 10]);
    const ans = Math.round(g * dt0 * 100) / 100;
    return {
      q: T`Pohybujúce sa hodiny majú vlastný čas $\\Delta t_0=${dt0}\\,\\text{s}$ a pohybujú sa rýchlosťou $v=${M(b)}\\,c$. Aký časový interval $\\Delta t$ nameria pozorovateľ v laboratóriu? Zaokrúhli na 2 des. miesta.`,
      answer: ans,
      tol: 0.01,
      solution: T`$\\Delta t=\\gamma\\,\\Delta t_0=${M(g)}\\cdot ${dt0}\\,\\text{s}\\approx ${M(ans)}\\,\\text{s}$.`,
      hint: T`Dilatácia času je $\\Delta t=\\gamma\\,\\Delta t_0$. Pozorovateľ meria dlhší čas, nie kratší.`,
      mistakes: keep([
        { value: dt0 / g, msg: T`Čas si skrátil. Pohybujúce sa hodiny idú pomalšie, takže pozorovateľ nameria dlhší interval.` },
        { value: g, msg: T`Zabudol si vynásobiť vlastným časom $\\Delta t_0$.` }
      ], ans, 0.05)
    };
  });

  lesson({
    id: 'v6-lorentz', order: 20, theme: 'relativita', title: 'Lorentzove transformácie',
    summary: 'Ako sa priestorové a časové súradnice udalosti menia pri prechode do inej inerciálnej sústavy.',
    theory: [
      `<p>Galileiho transformácia $x'=x-vt$ platí len pri malých rýchlostiach. Pri rýchlostiach blízkych $c$ treba <strong>Lorentzove transformácie</strong>, ktoré zachovávajú rýchlosť svetla. Pre sústavu $S'$, ktorá sa pohybuje rýchlosťou $v$ v kladnom smere osi $x$, je $x'=\\gamma\\,(x-\\beta\\,ct)$ a $ct'=\\gamma\\,(ct-\\beta\\,x)$, kde $\\beta=\\frac{v}{c}$.</p>`,
      `<p>Priestor a čas sa tak miešajú: udalosť, ktorá je v jednej sústave súčasná, v inej súčasná nemusí byť. Táto <strong>relativita súčasnosti</strong> je priamy dôsledok konečnej rýchlosti svetla.</p>`,
      `<p>Pri inverznej transformácii sa zmení znamienko rýchlosti. Pri $v\\to 0$ sa $\\gamma\\to 1$ a dostaneme späť klasický vzťah $x'=x-vt$, takže Lorentzove transformácie obsahujú klasickú fyziku ako limitný prípad.</p>`
    ],
    examples: [
      { task: 'Udalosť má v sústave $S$ súradnice $x=8\\,\\text{m}$ a $ct=4\\,\\text{m}$. Sústava $S\'$ sa pohybuje rýchlosťou $0{,}6\\,c$ v kladnom smere osi $x$. Aká je $x\'$ v $S\'$?',
        steps: ['$\\gamma=1{,}25$, $\\beta=0{,}6$.', '$x\'=\\gamma\\,(x-\\beta\\,ct)=1{,}25\\cdot(8-0{,}6\\cdot 4)=1{,}25\\cdot 5{,}6=7$.', '<strong>Výsledok: $x\'=7\\,\\text{m}$</strong>'] }
    ]
  });

  gen('v6-lorentz', () => {
    const a = rnd(1, 5), b = rnd(1, 5);
    const ct = 4 * a, x = 4 * b;
    const ans = 5 * b - 3 * a;
    return {
      signed: true,
      q: T`V sústave $S$ nastane udalosť v bode $ct=${ct}\\,\\text{m}$ a $x=${x}\\,\\text{m}$. Sústava $S'$ sa pohybuje vzhľadom na $S$ rýchlosťou $v=0{,}6\\,c$ v kladnom smere osi $x$. Aká je súradnica $x'$ tej istej udalosti v sústave $S'$ v metroch? Použi $x'=\\gamma\\,(x-\\beta\\,ct)$, kde $\\beta=0{,}6$ a $\\gamma=1{,}25$.`,
      answer: ans,
      solution: T`$x'=1{,}25\\cdot(${x}-${M(0.6)}\\cdot ${ct})=1{,}25\\cdot ${M(x - 0.6 * ct)}=${ans}\\,\\text{m}$.`,
      hint: T`Lorentzova transformácia je $x'=\\gamma\\,(x-\\beta\\,ct)$. Sústava sa pohybuje v kladnom smere, takže sa rýchlosť odčítava.`,
      mistakes: keep([
        { value: x - 0.6 * ct, msg: T`Zabudol si na Lorentzov faktor $\\gamma$ pred zátvorkou.` },
        { value: 5 * b + 3 * a, msg: T`Zamenil si znamienko rýchlosti. Sústava $S'$ sa pohybuje v kladnom smere, odčítame $\\beta\\,ct$.` }
      ], ans)
    };
  });

  lesson({
    id: 'v6-energia', order: 30, theme: 'relativita', title: 'Relativistická energia a hybnosť',
    summary: 'Celková a kinetická energia častice pri veľkých rýchlostiach.',
    theory: [
      `<p>V relativite má častica pokojovú energiu $E_0=mc^2$, aj keď stojí. Celková energia pohybujúcej sa častice je $E=\\gamma\\,mc^2$. Pre $v\\to 0$ sa $\\gamma\\to 1$ a celková energia sa blíži k pokojovej.</p>`,
      `<p><strong>Kinetická energia</strong> je rozdiel $E_k=E-E_0=(\\gamma-1)\\,mc^2$. Je to energia, ktorú musí urobiť práca na zrýchlenie častice z kľudu na rýchlosť $v$. Pri rýchlostiach blízkych $c$ rastie kinetická energia neobmedzene, takže žiadna častica s nenulovou pokojovou hmotnosťou sa svetla nedosiahne.</p>`,
      `<p>Relativistická hybnosť je $p=\\gamma\\,m\\,v$. Pre energiu a hybnosť platí aj vzťah $E^2=(pc)^2+(mc^2)^2$, ktorý je vhodný pre fotóny, kde $m=0$.</p>`
    ],
    examples: [
      { task: 'Elektrón ($m\\,c^2=0{,}511\\,\\text{MeV}$) sa pohybuje rýchlosťou $0{,}8\\,c$. Aká je jeho kinetická energia?',
        steps: ['$\\gamma=\\frac{1}{\\sqrt{1-0{,}64}}=\\frac{5}{3}$.', '$E_k=(\\gamma-1)\\,mc^2=\\frac{2}{3}\\cdot 0{,}511\\approx 0{,}34\\,\\text{MeV}$.', '<strong>Výsledok: $E_k\\approx 0{,}34\\,\\text{MeV}$</strong>'] }
    ]
  });

  gen('v6-energia', () => {
    const P = pick([{ n: T.s('elektrón'), m: 0.511 }, { n: T.s('proton'), m: 938 }]);
    const b = pick([0.6, 0.8]);
    const g = 1 / Math.sqrt(1 - b * b);
    const ans = Math.round((g - 1) * P.m * 100) / 100;
    return {
      q: T`Častica (${P.n}) má pokojovú energiu $mc^2=${M(P.m)}\\,\\text{MeV}$ a pohybuje sa rýchlosťou $v=${M(b)}\\,c$. Akú má kinetickú energiu $E_k$ v MeV? Zaokrúhli na 2 des. miesta. Použi $E_k=(\\gamma-1)\\,mc^2$.`,
      answer: ans,
      tol: 0.01,
      solution: T`$\\gamma=${M(g)}$, teda $E_k=(${M(g)}-1)\\cdot ${M(P.m)}\\,\\text{MeV}\\approx ${M(ans)}\\,\\text{MeV}$.`,
      hint: T`Kinetická energia je rozdiel celkovej a pokojovej energie: $E_k=\\gamma mc^2-mc^2$.`,
      mistakes: keep([
        { value: g * P.m, msg: T`Dostal si celkovú energiu $\\gamma mc^2$. Kinetická energia je len jej časť nad pokojovou energiou.` },
        { value: P.m, msg: T`Dostal si pokojovú energiu $mc^2$. Pýtame sa na kinetickú energiu, ktorá je $(\\gamma-1)\\,mc^2$.` }
      ], ans, 0.05)
    };
  });

  lesson({
    id: 'v6-ekvivalencia', order: 40, theme: 'relativita', title: 'Ekvivalencia hmotnosti a energie',
    summary: 'Vzťah E = mc² a prepočet hmotnosti na energiu a naopak.',
    theory: [
      `<p>Najznámejší výsledok relativity je vzťah $E=mc^2$: hmotnosť je forma energie a energia má zodpovedajúcu hmotnosť $m=\\frac{E}{c^2}$. Nie je to len vzorec pre pohyb, ale vlastnosť každého telesa, aj keď stojí.</p>`,
      `<p>Malé zmeny hmotnosti znamenajú veľké množstvo energie, lebo $c^2\\approx 9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$ je veľmi veľké číslo. Jadrové reakcie uvoľňujú energiu práve preto, že súčet hmotností produktov je o malý zlomok menší ako pôvodných jadier.</p>`,
      `<p>Pri prepočte pozor na jednotky: hmotnosť v kilogramoch, rýchlosť v metroch za sekundu, energia v džouloch. Terajoul je $1\\,\\text{TJ}=10^{12}\\,\\text{J}$.</p>`
    ],
    examples: [
      { task: 'Akú energiu uvoľní premena hmoty $1\\,\\text{g}$? Výsledok v terajouloch.',
        steps: ['$m=10^{-3}\\,\\text{kg}$, $c^2=9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$.', '$E=mc^2=10^{-3}\\cdot 9\\cdot 10^{16}=9\\cdot 10^{13}\\,\\text{J}=90\\,\\text{TJ}$.', '<strong>Výsledok: $90\\,\\text{TJ}$</strong>'] }
    ]
  });

  gen('v6-ekvivalencia', () => {
    if (Math.random() < 0.5) {
      const m = pick([0.1, 0.5, 1, 2, 5]);
      const ans = Math.round(m * 90 * 1000) / 1000;
      return {
        q: T`Akú energiu uvoľní úplná premena $${M(m)}\\,\\text{g}$ hmoty? Použi $E=mc^2$, $c=3\\cdot 10^{8}\\,\\text{m/s}$. Výsledok zadaj v terajouloch ($1\\,\\text{TJ}=10^{12}\\,\\text{J}$).`,
        answer: ans,
        tol: 0.001,
        solution: T`$E=mc^2=${M(m)}\\cdot 10^{-3}\\,\\text{kg}\\cdot 9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2=${M(m)}\\cdot 9\\cdot 10^{13}\\,\\text{J}=${M(ans)}\\,\\text{TJ}$.`,
        hint: T`Najprv prepíš gramy na kilogramy ($1\\,\\text{g}=10^{-3}\\,\\text{kg}$), potom použi $E=mc^2$ a výsledok prepíš na terajouly.`,
        mistakes: keep([
          { value: ans * 1000, msg: T`Zabudol si previesť gramy na kilogramy. Výsledok je tisíckrát menší.` },
          { value: ans / 9, msg: T`Zle si umocnil rýchlosť svetla. Počítame $c^2$, nie $c$ (a výsledok sa nemení len o číslo 9).` }
        ], ans, 0.001)
      };
    }
    const E = pick([9, 45, 90, 180]);
    const ans = Math.round((E / 90) * 1000) / 1000;
    return {
      q: T`Koľko hmoty v gramoch sa musí úplne premeniť, aby sa uvoľnilo $${E}\\,\\text{TJ}$ energie? Použi $E=mc^2$, $c=3\\cdot 10^{8}\\,\\text{m/s}$ a $1\\,\\text{TJ}=10^{12}\\,\\text{J}$.`,
      answer: ans,
      tol: 0.001,
      solution: T`$m=\\frac{E}{c^2}=\\frac{${E}\\cdot 10^{12}}{9\\cdot 10^{16}}\\,\\text{kg}=${M(ans)}\\,\\text{g}$ po prepočte na gramy.`,
      hint: T`Z $E=mc^2$ vyjadri $m=\\frac{E}{c^2}$. Výsledok v kilogramoch prepočítaj na gramy ($1\\,\\text{kg}=1000\\,\\text{g}$).`,
      mistakes: keep([
        { value: E * 90, msg: T`Vynásobil si energiou číslom 90, ale hmotnosť dostaneme deľbou: $m=\\frac{E}{c^2}$.` },
        { value: (E / 90) * 1000, msg: T`Výsledok je v gramoch, nie v kilogramoch. Hodnota tisíckrát väčšia je preto nesprávna.` }
      ], ans, 0.001)
    };
  });

  lesson({
    id: 'v6-interval', order: 50, theme: 'relativita', title: 'Priestorovo-časové intervaly',
    summary: 'Invariantný interval v priestorovo-časovom diagrame a vlastný čas.',
    theory: [
      `<p>Relativita spája priestor a čas do štvorrozmerného <strong>časopriestoru</strong>. Udalosti sú body v ňom a ich vzdialenosť nie je obyčajná. <strong>Interval</strong> medzi dvoma udalosťami s časovým rozdielom $\\Delta t$ a priestorovým rozdielom $\\Delta x$ je $\\Delta s^2=c^2\\Delta t^2-\\Delta x^2$.</p>`,
      `<p>Interval má rovnakú hodnotu v každej inerciálnej sústave, preto sa nazýva <strong>invariantný</strong>. Ak je $\\Delta s^2>0$, ide o časupodobný interval a existuje sústava, v ktorej sa obe udalosti stali na tom istom mieste. Vlastný čas je potom $\\Delta\\tau=\\frac{\\sqrt{\\Delta s^2}}{c}$.</p>`,
      `<p>Pri jednotkách s $c=1$ (dĺžky merané v sekundách svetla) stačí počítať $\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}$. Výsledok je vždy menší alebo rovný $\\Delta t$, čo je opäť dilatácia času.</p>`
    ],
    examples: [
      { task: 'Dve udalosti sú od seba vzdialené v čase $\\Delta t=5\\,\\text{s}$ a v priestore $\\Delta x=3\\,\\text{ls}$ (svetelné sekundy). Aký je vlastný čas $\\Delta\\tau$?',
        steps: ['$\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}=\\sqrt{25-9}$.', '<strong>Výsledok: $\\Delta\\tau=4\\,\\text{s}$</strong>'] }
    ]
  });

  const TRI = [[5, 3, 4], [13, 5, 12], [17, 8, 15], [25, 7, 24], [29, 20, 21]];

  gen('v6-interval', () => {
    const [DT, DX, ans0] = pick(TRI), k = rnd(1, 3);
    const dt = DT * k, dx = DX * k, ans = ans0 * k;
    return {
      q: T`Dve udalosti sú od seba vzdialené v čase $\\Delta t=${dt}\\,\\text{s}$ a v priestore $\\Delta x=${dx}\\,\\text{ls}$ (svetelné sekundy). Aký je vlastný čas $\\Delta\\tau$ medzi nimi v sekundách? Predpokladaj, že $c=1$.`,
      answer: ans,
      solution: T`$\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}=\\sqrt{${dt * dt}-${dx * dx}}=\\sqrt{${ans * ans}}=${ans}\\,\\text{s}$.`,
      hint: T`Vlastný čas je odmocnina z rozdielu $\\Delta t^2-\\Delta x^2$. Pozor na znamienko: časový člen je kladný.`,
      mistakes: keep([
        { value: dt * dt - dx * dx, msg: T`Nezabudol si odmocniť? Vlastný čas je $\\sqrt{\\Delta t^2-\\Delta x^2}$, nie samotný rozdiel štvorcov.` },
        { value: dt - dx, msg: T`Odčítal si časy a priestorové vzdialenosti. Invariantný interval obsahuje štvorce oboch veličín.` }
      ], ans)
    };
  });

  lesson({
    id: 'v6-vseobecna', order: 60, theme: 'relativita', title: 'Všeobecná teória relativity',
    summary: 'Princíp ekvivalencie, gravitácia ako zakrivenie časopriestoru a Schwarzschildov polomer.',
    theory: [
      `<p>Všeobecná teória relativity (1915) vychádza z <strong>princípu ekvivalencie</strong>: lokálne nie je možné odlíšiť zrýchlenie od gravitácie. Človek vo výťahu voľne padajúcom v gravitačnom poli necíti tiaž, presne ako astronaut na obežnej dráhe.</p>`,
      `<p>Z toho Einstein odvodil, že gravitácia nie je sila v klasickom zmysle, ale <strong>zakrivenie časopriestoru</strong> spôsobené hmotou a energiou. Telesá sa pohybujú po najkratších možných dráhach, tzv. geodetikách, ktoré sú v zakrivenom priestore zakrivené.</p>`,
      `<p>Silné gravitačné pole spomaľuje čas: hodiny blízko masívneho telesa idú pomalšie ako ďaleko od neho. Pre hmotnosť $M$ je <strong>Schwarzschildov polomer</strong> $r_s=\\frac{2GM}{c^2}$. Pre Zem je to približne $9$ mm, pre Slnko približne $3\\,\\text{km}$.</p>`
    ],
    examples: [
      { task: 'Aký je Schwarzschildov polomer Slnka, ak $M=1{,}989\\cdot 10^{30}\\,\\text{kg}$, $G=6{,}674\\cdot 10^{-11}$ a $c=3\\cdot 10^{8}\\,\\text{m/s}$?',
        steps: ['$r_s=\\frac{2GM}{c^2}=\\frac{2\\cdot 6{,}674\\cdot 10^{-11}\\cdot 1{,}989\\cdot 10^{30}}{9\\cdot 10^{16}}$.', '$r_s\\approx 2{,}95\\cdot 10^{3}\\,\\text{m}$.', '<strong>Výsledok: $r_s\\approx 2{,}95\\,\\text{km}$</strong>'] }
    ]
  });

  gen('v6-vseobecna', () => {
    // hmotnosti telies; názvy sa prekladajú až pri tvorbe úlohy (v kontexte jazyka)
    const BODIES = [
      { label: T.s('Slnka'), mtex: '1{,}989\\cdot 10^{30}', M: 1.989e30, unit: 'km', f: 1e-3 },
      { label: T.s('Zeme'), mtex: '5{,}97\\cdot 10^{24}', M: 5.97e24, unit: 'mm', f: 1e3 }
    ];
    const b = pick(BODIES);
    const G = 6.674e-11, c = 2.998e8;
    const rsM = (2 * G * b.M) / (c * c);
    const ans = Math.round(rsM * b.f * 100) / 100;
    return {
      q: T`Aký je Schwarzschildov polomer $r_s=\\frac{2GM}{c^2}$ ${b.label}, ak jeho hmotnosť je $M=${b.mtex}\\,\\text{kg}$? Použi $G=6{,}674\\cdot 10^{-11}\\,\\text{m}^3\\,\\text{kg}^{-1}\\,\\text{s}^{-2}$ a $c=2{,}998\\cdot 10^{8}\\,\\text{m/s}$. Výsledok zadaj v jednotkách $\\text{${b.unit}}$ (zaokrúhli na 2 des. miesta).`,
      answer: ans,
      tol: 0.01,
      solution: T`$r_s=\\frac{2GM}{c^2}\\approx ${M(rsM)}\\,\\text{m}=${M(ans)}\\,\\text{${b.unit}}$.`,
      hint: T`Dosaď do $r_s=\\frac{2GM}{c^2}$ v jednotkách SI a výsledok prepočítaj na požadované jednotky.`,
      mistakes: keep([
        { value: ans / 2, msg: T`Zabudol si na faktor 2 v čitateli. Schwarzschildov polomer je $\\frac{2GM}{c^2}$.` },
        { value: ans * 1000, msg: T`Pomýlil si jednotky. Skontroluj, či je výsledok v požadovaných jednotkách.` }
      ], ans, 0.05)
    };
  });

  lesson({
    id: 'v6-zakrivenie', order: 70, theme: 'relativita', title: 'Zakrivenie časopriestoru',
    summary: 'Ako hmota zakrivuje časopriestor a ktoré javy to dokazujú.',
    theory: [
      `<p>Predstav si pružnú plachtu, na ktorú položíš ťažkú guľu. Plachta sa prehne a malé guľôčky sa k nej skotúľajú. Podobne hmota zakrivuje časopriestor a telesá sa pohybujú po zakrivených dráhach. Analógia je len názorná, nie presný model.</p>`,
      `<p>Najpriamejším dôkazom je <strong>ohyb svetla</strong> pri prechode blízko Slnka. Svetlo sa šíri po najkratšej dráhe, ktorá v zakrivenom priestore nie je priamka. Hviezda za Slnkom sa preto pozorovateľovi zdá posunutá. Tento efekt zmeral Eddington v roku 1919.</p>`,
      `<p>Ďalšie javy, napríklad gravitačné posunutie spektrálnych čiar alebo spomalenie času blízko hmoty, sa dajú merať s presnosťou potrebnou na navigáciu GPS družíc. Javy, ktoré nesúvisia s gravitáciou alebo časopriestorom, napríklad farebný rozklad svetla v hranole, zakrivením nevysvetlíme.</p>`
    ],
    examples: [
      { task: 'Ktorý z javov je dôsledkom zakrivenia časopriestoru: ohyb svetla okolo Slnka, alebo zmena farby svetla v hranole?',
        steps: ['Zakrivenie časopriestoru opisuje gravitáciu, ktorá ovplyvňuje dráhu svetla.', 'Rozklad svetla v hranole je dôsledok závislosti indexu lomu od vlnovej dĺžky.', '<strong>Výsledok: ohyb svetla okolo Slnka</strong>'] }
    ]
  });

  gen('v6-zakrivenie', () => {
    const CURV_OK = T.s('ohyb svetla pri prechode blízko Slnka');
    const CURV_BAD = [T.s('rozklad bieleho svetla v hranole'), T.s('prúdenie elektrónov vo vodiči'), T.s('zvuk vznikajúci chvením struny')];
    const options = shuffle([CURV_OK, ...CURV_BAD]);
    const choiceHints = {};
    CURV_BAD.forEach((w) => { choiceHints[w] = T`Tento jav nesúvisí so zakrivením časopriestoru. Má iné fyzikálne vysvetlenie.`; });
    return {
      type: 'choice',
      options,
      answer: CURV_OK,
      choiceHints,
      q: T`Ktorý z uvedených javov je priamym dôsledkom zakrivenia časopriestoru?`,
      solution: T`Hmotnosť zakrivuje časopriestor a svetlo sleduje zakrivenú dráhu, preto sa ohýba okolo hmotných telies.`,
      hint: T`Pýtaj sa, ktorý jav súvisí s gravitáciou, teda s hmotnosťou ovplyvňujúcou dráhu svetla.`
    };
  });

  lesson({
    id: 'v6-gravvlny', order: 80, theme: 'relativita', title: 'Gravitačné vlny a čierne diery',
    summary: 'Gravitačné vlny ako zvlnenie časopriestoru a horizont udalostí čiernej diery.',
    theory: [
      `<p><strong>Gravitačné vlny</strong> sú zvlnenia časopriestoru, ktoré sa šíria rýchlosťou svetla. Vznikajú pri urýchľovanom pohybe veľkých hmotností, napríklad pri splynutí dvoch čiernych dier. Prvé priame pozorovanie sa podarilo v roku 2015 interferometrom LIGO.</p>`,
      `<p><strong>Čierna diera</strong> je oblasť, kde je únikovou rýchlosťou väčšia ako $c$ a svetlo sa z nej nedostane. Hranicou je <strong>horizont udalostí</strong> vo Schwarzschildovom polomere $r_s=\\frac{2GM}{c^2}$. Vo vnútri horizontu sa všetky dráhy smerujú k stredu.</p>`,
      `<p>Polomer horizontu rastie priamo úmerne s hmotnosťou. Čierna diera s hmotnosťou Slnka má horizont približne $3\\,\\text{km}$, čierna diera s desaťnásobkom hmotnosti Slnka približne $30\\,\\text{km}$.</p>`
    ],
    examples: [
      { task: 'Aký je polomer horizontu čiernej diery s hmotnosťou $10\\,M_{\\odot}$, ak pre Slnko platí $r_s\\approx 2{,}95\\,\\text{km}$?',
        steps: ['Polomer je úmerný hmotnosti: $r_s=2{,}95\\,\\text{km}\\cdot 10$.', '<strong>Výsledok: $r_s\\approx 29{,}5\\,\\text{km}$</strong>'] }
    ]
  });

  gen('v6-gravvlny', () => {
    const k = pick([1, 3, 10, 30]);
    const rsSunKm = (2 * 6.674e-11 * 1.989e30) / (2.998e8 * 2.998e8) / 1000;
    const ans = Math.round(rsSunKm * k * 100) / 100;
    return {
      q: T`Čierna diera má hmotnosť $M=${k}\\,M_{\\odot}$, kde $M_{\\odot}$ je hmotnosť Slnka. Aký je polomer jej horizontu udalostí v kilometroch? Zaokrúhli na 2 des. miesta. Pre Slnko platí $r_s\\approx ${M(2.95)}\\,\\text{km}$ a polomer je úmerný hmotnosti.`,
      answer: ans,
      tol: 0.01,
      solution: T`$r_s\\approx ${M(2.95)}\\,\\text{km}\\cdot ${k}\\approx ${M(ans)}\\,\\text{km}$.`,
      hint: T`Schwarzschildov polomer je $r_s=\\frac{2GM}{c^2}$, je teda priamo úmerný hmotnosti. Vynásob polomer Slnka číslom $${k}$.`,
      mistakes: keep([
        { value: ans / 2, msg: T`Zabudol si na faktor 2 vo vzorci $r_s=\\frac{2GM}{c^2}$.` },
        { value: ans * 1000, msg: T`Výsledok je v kilometroch, nie v metroch.` }
      ], ans, 0.05)
    };
  });
})();
