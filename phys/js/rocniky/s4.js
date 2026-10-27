/* 4. ročník SŠ: interferencia a difrakcia svetla, elektromagnetické žiarenie a spektrá, Bohrov model atómu,
   rádioaktivita, štiepenie a fúzia jadier, základy astrofyziky a kozmológie, opakovanie a príprava na maturitu.
   Vzorový súbor: lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 's4' }, l));
  const gen = EXERCISES.register;
  // desatinné číslo v matematickom zápise: 0{,}25 (čiarka vo vzorcoch v zložených zátvorkách)
  const dm = (x) => fmt(x).replace(',', '{,}');

  /* ---------- interferencia a difrakcia ---------- */

  lesson({
    id: 's4-interferencia', order: 10, theme: 'svetlo', title: 'Vlnové vlastnosti svetla: interferencia a difrakcia',
    summary: 'Skladanie vĺn, svetlé a tmavé pruhy pri dvojitej štrbine a ohyb vlny okolo prekážky.',
   
    theory: [
      `<p>Svetlo má vlnové vlastnosti. Viditeľné svetlo má vlnovú dĺžku $\\lambda$ zhruba od $380\\,\\text{nm}$ do $750\\,\\text{nm}$.
       Vlny sa môžu <strong>skladať</strong>, a tento jav nazývame interferencia.</p>`,
      `<p><strong>Interferencia</strong> na dvojitej štrbine: ak sa vlny zosilnia (dráhový rozdiel je celočíselný násobok $\\lambda$),
       vzniká <strong>svetlý pruh</strong>. Ak sa vyrušia (dráhový rozdiel je $\\left(k+\\frac{1}{2}\\right)\\lambda$), vzniká
       <strong>tmavý pruh</strong>.</p>`,
      `<p>Pre svetlé pruhy na tienidle vo vzdialenosti $L$ od štrbín s rozstupom $d$ platí približne
       $y_k = k\\,\\frac{\\lambda L}{d}$, kde $k = 0, 1, 2, \\dots$ je rád pruhu. Pri väčšej vlnovej dĺžke alebo väčšej vzdialenosti
       tienidla sú pruhy od seba ďalej.</p>`,
      `<p><strong>Difrakcia</strong> je ohyb vlny okolo prekážky alebo cez úzku štrbinu. Je výraznejšia, keď je rozmer prekážky blízky
       vlnovej dĺžke. Preto zvuk ohne roh miestnosti lepšie než svetlo.</p>`
    ],
    examples: [
      { task: 'Štrbiny sú od seba vzdialené $d = 0{,}5\\,\\text{mm}$, svetlo má $\\lambda = 500\\,\\text{nm}$ a tienidlo je $L = 1\\,\\text{m}$ ďaleko. Aká je vzdialenosť prvého svetlého pruhu ($k=1$)?',
        steps: ['$y_1 = \\frac{\\lambda L}{d}=\\frac{500\\cdot 10^{-9}\\cdot 1}{0{,}5\\cdot 10^{-3}}\\,\\text{m}$.',
          '$y_1 = 10^{-3}\\,\\text{m}=1\\,\\text{mm}$.',
          '<strong>Výsledok: 1 mm od stredu.</strong>'] },
      { task: 'Ktorá vlnová dĺžka dá pri rovnakom usporiadaní širšie pruhy: 400 nm, alebo 700 nm?',
        steps: ['Vzdialenosť pruhov $y_k$ je úmerná $\\lambda$.', '<strong>Širšie pruhy dáva 700 nm.</strong>'] }
    ]
  });

  gen('s4-interferencia', () => {
    const k = rnd(1, 3), L = pick([1, 2]), lam = pick([400, 500, 600, 650]), d = pick([0.2, 0.5, 1]);
    // y v mm: k·λ[nm]·L[m]/d[mm]·10^-3
    const ans = Number((k * L * lam / d * 1e-3).toPrecision(3));
    return {
      answer: ans,
      tol: ans * 0.01,
      q: T`Dvojitou štrbinou s rozstupom $${dm(d)}\\,\\text{mm}$ svieti monochromatické svetlo s vlnovou dĺžkou $${lam}\\,\\text{nm}$. Tienidlo je vo vzdialenosti $${L}\\,\\text{m}$. Aká je vzdialenosť svetlého pruhu rádu $k=${k}$ od stredu v $\\text{mm}$? Zadaj na tri platné cifry.`,
      solution: T`$y_k=k\\frac{\\lambda L}{d}=${k}\\cdot\\frac{${lam}\\cdot 10^{-9}\\cdot ${L}}{${dm(d)}\\cdot 10^{-3}}\\,\\text{m}\\approx ${fmt(ans)}\\,\\text{mm}$.`,
      hint: T.s('Svetlé pruhy: $y_k = k\\,\\frac{\\lambda L}{d}$. Nezabudni previesť nm na m a mm na m.'),
      mistakes: [
        { value: Number((ans / 1000).toPrecision(3)), msg: T`Výsledok je v milimetroch, nie v metroch. Vydelil si 1000 navyše.` },
        { value: Number(((k + 0.5) * L * lam / d * 1e-3).toPrecision(3)), msg: T`Použil si vzorec pre tmavé pruhy. Svetlé pruhy vznikajú pre celé $k$: $y_k = k\\,\\frac{\\lambda L}{d}$.` }
      ].filter((m) => m.value !== ans)
    };
  });

  /* ---------- elektromagnetické žiarenie a spektrá ---------- */

  lesson({
    id: 's4-ziarenie', order: 20, theme: 'moderna', title: 'Elektromagnetické žiarenie a spektrá',
    summary: 'Vlnová dĺžka, frekvencia a energia fotónu; čiarové a spojité spektrá.',
   
    theory: [
      `<p>Elektromagnetické žiarenie sú vlny, ktoré sa vo vákuu šíria rýchlosťou $c = 3\\cdot 10^{8}\\,\\text{m/s}$. Vlnová dĺžka
       a frekvencia súvisia vzťahom $c = \\lambda f$. Rádiové vlny, mikrovlny, infračervené, viditeľné, ultrafialové, röntgenové
       a gama žiarenie sú len rôzne časti rovnakého javu.</p>`,
      `<p><strong>Energia fotónu</strong>: svetlo sa vysiela a pohlcuje v kvantách, fotónoch. Energia fotónu je $E = h f = \\frac{h c}{\\lambda}$,
       kde $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$. Pri atómových výpočtoch sa hodí jednotka elektrónvolt
       ($1\\,\\text{eV} \\approx 1{,}6\\cdot 10^{-19}\\,\\text{J}$) a vzťah $hc \\approx 1240\\,\\text{eV·nm}$.</p>`,
      `<p><strong>Spektrá</strong>: rozžeravené pevné látky vyžarujú spojité spektrum, riedke plyny vyžarujú čiarové spektrum. Každý prvok má
       vlastné čiary, preto sa spektrá používajú na zistenie chemického zloženia hviezd.</p>`,
      `<p>Prečo sú spektrá čiarové: energetické hladiny atómov sú diskrétne, takže atóm vyžiari alebo pohltí len fotóny s energiou
       rovnou rozdielu dvoch hladín. Vyššia energia fotónu znamená kratšiu vlnovú dĺžku.</p>`
    ],
    examples: [
      { task: 'Fotón má vlnovú dĺžku 248 nm. Aká je jeho energia v elektrónvoltoch?',
        steps: ['$E=\\frac{hc}{\\lambda}\\approx\\frac{1240\\,\\text{eV·nm}}{248\\,\\text{nm}}$.', '<strong>Výsledok: E = 5 eV.</strong>'] },
      { task: 'Svetlo má frekvenciu $6\\cdot 10^{14}\\,\\text{Hz}$. Aká je jeho vlnová dĺžka?',
        steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{6\\cdot 10^{14}}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Výsledok: 500 nm.</strong>'] }
    ]
  });

  gen('s4-ziarenie', () => {
    if (Math.random() < 0.5) {
      const lam = pick([124, 155, 248, 310, 496, 620]), E = 1240 / lam;
      return {
        answer: E,
        q: T`Fotón má vlnovú dĺžku $${lam}\\,\\text{nm}$. Akú energiu má v elektrónvoltoch? Použi $hc \\approx 1240\\,\\text{eV·nm}$.`,
        solution: T`$E=\\frac{hc}{\\lambda}=\\frac{1240}{${lam}}\\,\\text{eV}=${fmt(E)}\\,\\text{eV}$.`,
        hint: T.s('Energia fotónu je $E=\\frac{hc}{\\lambda}$. Čím kratšia vlnová dĺžka, tým väčšia energia.'),
        mistakes: [{ value: Number((lam / 1240).toPrecision(3)), msg: T`Pomer si obrátil. Energia je $\\frac{hc}{\\lambda}$, nie $\\frac{\\lambda}{hc}$.` }]
          .filter((m) => m.value !== E)
      };
    }
    const lam = pick([300, 400, 500, 600, 750]), f = 3000 / lam;
    return {
      answer: f,
      q: T`Svetlo má vlnovú dĺžku $${lam}\\,\\text{nm}$. Aká je jeho frekvencia v jednotkách $10^{14}\\,\\text{Hz}$? Použi $c = 3\\cdot 10^{8}\\,\\text{m/s}$.`,
      solution: T`$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{${lam}\\cdot 10^{-9}}\\,\\text{Hz}=${fmt(f)}\\cdot 10^{14}\\,\\text{Hz}$.`,
      hint: T.s('Frekvencia je $f=\\frac{c}{\\lambda}$. Nezabudni previesť nm na m.'),
      mistakes: [{ value: Number((lam / 3000).toPrecision(3)), msg: T`Frekvencia je $c$ delené vlnovou dĺžkou, nie naopak.` }]
        .filter((m) => m.value !== f)
    };
  });

  /* ---------- modely atómu ---------- */

  lesson({
    id: 's4-atom', order: 30, theme: 'moderna', title: 'Modely atómu a kvantové javy',
    summary: 'Bohrov model vodíka: kvantované hladiny a energia fotónu pri prechode medzi nimi.',
   
    theory: [
      `<p>Podľa Rutherfordovho modelu má atóm malé kladné jadro a okolo neho elektróny. Podľa klasickej fyziky by sa však elektrón
       pohybujúci sa okolo jadra mal stále vyžarovať a spadnúť na jadro, čo sa nedeje. Bohrov model preto zaviedol
       <strong>kvantované hladiny</strong>, na ktorých elektrón nevyžaruje energiu.</p>`,
      `<p>Energia elektrónu v atóme vodíka je kvantovaná: $E_n = -\\frac{13{,}6\\,\\text{eV}}{n^2}$, kde $n = 1, 2, 3, \\dots$ je hlavné
       kvantové číslo. Čím vyššie $n$, tým je elektrón viazaný slabšie a jeho energia je bližšie k nule.</p>`,
      `<p><strong>Prechod medzi hladinami</strong>: pri prechode z vyššej hladiny $n_i$ na nižšiu $n_f$ atóm vyžiari fotón s energiou
       $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\frac{1}{n_f^2}-\\frac{1}{n_i^2}\\right)$. Opačný prechod pohltí fotón rovnakej energie.</p>`,
      `<p>Prečo to platí: vlnová dĺžka vyžiareného svetla zodpovedá rozdielu hladín, takže vodík vyžaruje len čiarové spektrum.
       Podobne fotoelektrický jav ukazuje, že svetlo prenáša energiu v kvantách, a teda má aj časticové vlastnosti.</p>`
    ],
    examples: [
      { task: 'Elektrón v atóme vodíka prejde z hladiny $n=3$ na $n=2$. Akú energiu vyžiari?',
        steps: ['$\\Delta E = 13{,}6\\left(\\frac{1}{2^2}-\\frac{1}{3^2}\\right)\\,\\text{eV}$.',
          '$\\frac{1}{4}-\\frac{1}{9}=\\frac{5}{36}$, teda $\\Delta E = 13{,}6\\cdot\\frac{5}{36}\\approx 1{,}89\\,\\text{eV}$.',
          '<strong>Výsledok: približne 1,89 eV.</strong>'] },
      { task: 'Aká je energia elektrónu na hladine $n=1$?',
        steps: ['$E_1=-\\frac{13{,}6}{1^2}\\,\\text{eV}$.', '<strong>Výsledok: E₁ = −13,6 eV.</strong>'] }
    ]
  });

  gen('s4-atom', () => {
    if (Math.random() < 0.5) {
      const n = pick([2, 3, 4, 5]), ans = Math.round((13.6 / (n * n)) * 100) / 100;
      return {
        answer: ans,
        tol: 0.01,
        q: T`Atóm vodíka je v hladine $n=${n}$. Vypočítaj absolútnu hodnotu energie $|E_n|$ v $\\text{eV}$. Výsledok zaokrúhli na dve desatinné miesta.`,
        solution: T`$|E_n|=\\frac{13{,}6}{n^2}=\\frac{13{,}6}{${n * n}}\\approx ${dm(ans)}\\,\\text{eV}$.`,
        hint: T.s('Energia hladiny je $E_n=-\\frac{13{,}6}{n^2}$ eV.'),
        mistakes: [{ value: Math.round((13.6 / n) * 100) / 100, msg: T`Vo vzorci je $n^2$, nie $n$. Energia klesá s druhou mocninou $n$.` }]
      };
    }
    const nf = pick([1, 2]), ni = nf + rnd(1, 3);
    const ans = Math.round(13.6 * (1 / (nf * nf) - 1 / (ni * ni)) * 100) / 100;
    return {
      answer: ans,
      tol: 0.01,
      q: T`Elektrón v atóme vodíka prejde z hladiny $n=${ni}$ na hladinu $n=${nf}$. Akú energiu vyžiari fotón v $\\text{eV}$? Zaokrúhli na dve desatinné miesta.`,
      solution: T`$\\Delta E=13{,}6\\left(\\frac{1}{${nf}^2}-\\frac{1}{${ni}^2}\\right)\\approx ${dm(ans)}\\,\\text{eV}$.`,
      hint: T.s('Energia fotónu je rozdiel hladín: $\\Delta E=13{,}6\\left(\\frac{1}{n_f^2}-\\frac{1}{n_i^2}\\right)$ eV.'),
      mistakes: [{ value: Math.round(13.6 * (1 / nf - 1 / ni) * 100) / 100, msg: T`V menovateli sú druhé mocniny $n^2$, nie $n$.` }]
    };
  });

  /* ---------- rádioaktivita ---------- */

  lesson({
    id: 's4-radioaktivita', order: 40, theme: 'moderna', title: 'Rádioaktivita a jadrové reakcie',
    summary: 'Rozpad jadier, polčas rozpadu a zápis jadrovej reakcie.',
   
    theory: [
      `<p><strong>Rádioaktivita</strong> je samovoľný rozpad nestabilných jadier. Vznikajú pri ňom žiarenia: $\\alpha$ (jadrá hélia),
       $\\beta$ (elektróny alebo pozitróny) a $\\gamma$ (vysokoenergetické fotóny). Rozpad jednotlivého jadra je náhodný, ale pri veľkom
       počte jadier sa správa predvídateľne.</p>`,
      `<p><strong>Polčas rozpadu</strong> $T_{1/2}$ je čas, za ktorý sa rozpadne polovica pôvodných jadier. Počet nerozpadnutých jadier
       po čase $t$ je $N = N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
      `<p>Prečo je úbytok geometrický: za každý polčas sa množstvo zmenší na polovicu, nie o rovnakú hodnotu. Po prvom polčase
       zostane polovica, po druhom štvrtina. Aktivita $A = \\lambda N$ udáva počet rozpadov za sekundu (jednotka becquerel, $\\text{Bq}$).</p>`,
      `<p><strong>Jadrové reakcie</strong> zapisujeme bilanciou nukleónového čísla (horný index) a protónového čísla (dolný index):
       súčet na ľavej strane sa rovná súčtu na pravej strane.</p>`
    ],
    examples: [
      { task: 'Rádioaktívny prvok má polčas rozpadu 4 dni. Koľko percent pôvodného množstva zostane po 8 dňoch?',
        steps: ['Za 8 dní uplynuli $\\frac{8}{4}=2$ polčasy.', 'Zostane $\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}$ pôvodného množstva.', '<strong>Výsledok: 25 %.</strong>'] },
      { task: 'Jadro uránu $^{238}_{92}\\text{U}$ sa rozpadne alfa rozpadom. Aké je nukleónové a protónové číslo nového jadra?',
        steps: ['Alfa častica je $^{4}_{2}\\text{He}$, odnesie 4 nukleóny a 2 protóny.', '$238-4=234$, $92-2=90$.', '<strong>Výsledok: $^{234}_{90}\\text{Th}$ (tórium).</strong>'] }
    ]
  });

  gen('s4-radioaktivita', () => {
    if (Math.random() < 0.6) {
      const N0 = pick([200, 400, 800, 1600]), m = rnd(1, 4), half = pick([2, 5, 10]), t = m * half;
      const N = N0 / Math.pow(2, m);
      return {
        answer: N,
        q: T`Vzorka obsahuje $${N0}$ jadier rádioaktívneho prvku s polčasom rozpadu $${half}$ dní. Koľko jadier zostane nerozpadnutých po $${t}$ dňoch?`,
        solution: T`Počet polčasov je $\\frac{${t}}{${half}}=${m}$, teda $N=\\frac{${N0}}{2^{${m}}}=${fmt(N)}$.`,
        hint: T.s('Po každom polčase zostane polovica: $N = N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.'),
        mistakes: [{ value: N0 / (2 * m), msg: T`Rozpad nie je lineárny. Za každý polčas sa množstvo zmenší na polovicu, nie o rovnakú hodnotu.` }]
          .filter((x) => x.value !== N),
        steps: [
          { q: T`Koľko polčasov uplynulo?`, answer: m },
          { q: T`Koľko je $\\frac{${N0}}{2^{${m}}}$?`, answer: N }
        ]
      };
    }
    const n = rnd(1, 5), ratio = Math.pow(2, n);
    return {
      answer: n,
      q: T`Vzorka sa zmenšila na $\\frac{1}{${ratio}}$ pôvodného množstva. Koľko polčasov rozpadu uplynulo?`,
      solution: T`$\\frac{N_0}{N}=2^{${n}}=${ratio}$, teda uplynulo $${n}$ polčasov.`,
      hint: T.s('Každý polčas zmenší množstvo dvakrát: po $n$ polčasoch zostane $\\left(\\frac{1}{2}\\right)^n$.'),
      mistakes: [{ value: ratio, msg: T`Pýtame sa na počet polčasov, nie na počet dielov. Pomer $\\frac{N_0}{N}=2^n$ je len medzivýsledok.` }]
        .filter((x) => x.value !== n)
    };
  });

  /* ---------- štiepenie a fúzia ---------- */

  lesson({
    id: 's4-jadro', order: 50, theme: 'moderna', title: 'Štiepenie a fúzia jadier',
    summary: 'Hmotnostný úbytok a uvoľnená energia pri štiepení ťažkých a fúzii ľahkých jadier.',
   
    theory: [
      `<p>Jadro má menšiu hmotnosť než súčet hmotností svojich nukleónov. Rozdiel je <strong>hmotnostný úbytok</strong> $\\Delta m$
       a zodpovedá energii väzby podľa Einsteinovho vzťahu $\\Delta E = \\Delta m\\,c^2$.</p>`,
      `<p>Ak hmotnosť meriame v atómových hmotnostných jednotkách ($1\\,\\text{u}$), platí praktický vzťah: úbytok $1\\,\\text{u}$
       zodpovedá energii približne $931{,}5\\,\\text{MeV}$.</p>`,
      `<p><strong>Štiepenie</strong>: ťažké jadro (napr. urán-235) sa rozdelí na dve stredne ťažké jadrá a uvoľní energiu.
       <strong>Fúzia</strong>: ľahké jadrá sa spoja do ťažšieho jadra a opäť sa uvoľní energia. Slnko získava energiu fúziou vodíka na hélium.</p>`,
      `<p>Prečo sa energia uvoľní: jadrá sú najpevnejšie viazané v okolí železa. Pohyb smerom k nemu, či už rozdelením ťažkého,
       alebo spojením ľahkého jadra, uvoľní rozdiel energií väzby.</p>`
    ],
    examples: [
      { task: 'Pri nejakom procese je hmotnostný úbytok $\\Delta m = 0{,}2\\,\\text{u}$. Koľko MeV energie sa uvoľní?',
        steps: ['$\\Delta E = \\Delta m\\cdot 931{,}5\\,\\text{MeV/u}=0{,}2\\cdot 931{,}5\\,\\text{MeV}$.', '<strong>Výsledok: približne 186 MeV.</strong>'] },
      { task: 'Pri reakcii D + T → He + n sú hmotnosti pred reakciou spolu 5,0301 u a po reakcii 5,0113 u. Koľko MeV sa uvoľní?',
        steps: ['$\\Delta m = 5{,}0301-5{,}0113=0{,}0188\\,\\text{u}$.', '$\\Delta E = 0{,}0188\\cdot 931{,}5\\approx 17{,}5\\,\\text{MeV}$.', '<strong>Výsledok: približne 17,5 MeV.</strong>'] }
    ]
  });

  gen('s4-jadro', () => {
    if (Math.random() < 0.5) {
      const dmv = pick([0.05, 0.1, 0.2, 0.25, 0.5]);
      const ans = Math.round(dmv * 931.5 * 10) / 10;
      return {
        answer: ans,
        tol: 0.1,
        q: T`Pri jadrovej reakcii je hmotnostný úbytok $\\Delta m = ${dm(dmv)}\\,\\text{u}$. Koľko MeV energie sa uvoľní? Výsledok zaokrúhli na jedno desatinné miesto.`,
        solution: T`$\\Delta E=\\Delta m\\cdot 931{,}5\\,\\text{MeV/u}=${dm(dmv)}\\cdot 931{,}5\\approx ${dm(ans)}\\,\\text{MeV}$.`,
        hint: T.s('Energia je hmotnostný úbytok krát 931,5 MeV na jednu atómovú hmotnostnú jednotku.'),
        mistakes: [
          { value: Math.round(dmv * 0.9315 * 1000) / 1000, msg: T`Výsledok si vyjadril v GeV. Úloha chce MeV, a $1\\,\\text{GeV} = 1000\\,\\text{MeV}$.` },
          { value: dmv, msg: T`Zabudol si prepočítať hmotnostný úbytok na energiu faktorom $931{,}5\\,\\text{MeV/u}$.` }
        ].filter((m) => m.value !== ans)
      };
    }
    return {
      answer: 17.5,
      tol: 0.1,
      q: T`Pri fúzii deutéria s trícium vznikne hélium a neutrón. Hmotnosti pred reakciou sú spolu $5{,}0301\\,\\text{u}$, po reakcii $5{,}0113\\,\\text{u}$. Koľko MeV energie sa uvoľní? Výsledok zaokrúhli na jedno desatinné miesto.`,
      solution: T`$\\Delta m=5{,}0301-5{,}0113=0{,}0188\\,\\text{u}$, teda $\\Delta E=0{,}0188\\cdot 931{,}5\\approx 17{,}5\\,\\text{MeV}$.`,
      hint: T.s('Najprv odčítaj hmotnosti po reakcii od hmotností pred reakciou, potom prepočítaj úbytok na MeV.'),
      mistakes: [{ value: 0.0188, msg: T`Hmotnostný úbytok je len začiatok. Treba ho prepočítať na energiu faktorom $931{,}5\\,\\text{MeV/u}$.` }]
    };
  });

  /* ---------- astrofyzika a kozmológia ---------- */

  lesson({
    id: 's4-astrofyzika', order: 60, theme: 'vesmir', title: 'Základy astrofyziky a kozmológie',
    summary: 'Vzdialenosť hviezd paralaxou, Hubblov zákon rozpínania a Wienov zákon žiarenia.',
   
    theory: [
      `<p><strong>Vzdialenosti vo vesmíre</strong> sa merajú v svetelných rokoch alebo v parsekoch: $1\\,\\text{pc}\\approx 3{,}26\\,\\text{ly}$.
       Pri <strong>paralaxe</strong> sa hviezda na oblohe javí posunutá voči vzdialeným hviezdam, keď Zem obieha okolo Slnka.
       Vzdialenosť v parsekoch je $d = \\frac{1}{p}$, kde $p$ je ročná paralaxa v uhlových sekundách.</p>`,
      `<p><strong>Hubblov zákon</strong>: vzdialené galaxie sa od nás vzďaľujú rýchlosťou $v = H_0\\,d$, kde $H_0 \\approx 70\\,\\text{km/(s·Mpc)}$.
       Čím sú galaxie vzdialenejšie, tým sa vzďaľujú rýchlejšie. To je dôkaz, že sa vesmír rozpína.</p>`,
      `<p><strong>Wienov zákon</strong>: teplota povrchu hviezdy určuje vlnovú dĺžku, pri ktorej žiari najsilnejšie:
       $\\lambda_{max} = \\frac{b}{T}$, kde $b \\approx 2{,}9\\cdot 10^{-3}\\,\\text{m·K}$. Chladnejšie hviezdy žiaria do červena,
       horúcejšie do modra.</p>`,
      `<p>Prečo to funguje: paralaxa je geometria trojuholníka Zem–Slnko–hviezda a Hubble zistil, že posun spektrálnych čiar k červenej
       rastie so vzdialenosťou. Z oboch meraní vieme odhadnúť vzdialenosti aj vek vesmíru.</p>`
    ],
    examples: [
      { task: 'Galaxia sa od nás vzďaľuje rýchlosťou 3500 km/s. Aká je jej vzdialenosť pri $H_0 = 70\\,\\text{km/(s·Mpc)}$?',
        steps: ['$d=\\frac{v}{H_0}=\\frac{3500}{70}\\,\\text{Mpc}$.', '<strong>Výsledok: 50 Mpc.</strong>'] },
      { task: 'Povrch hviezdy má teplotu 5800 K. Pri akej vlnovej dĺžke najsilnejšie žiari?',
        steps: ['$\\lambda_{max}=\\frac{2{,}9\\cdot 10^{-3}}{5800}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Výsledok: 500 nm (zelená oblasť).</strong>'] }
    ]
  });

  gen('s4-astrofyzika', () => {
    const t = Math.random();
    if (t < 0.34) {
      const v = pick([700, 1400, 2100, 3500, 7000]), d = v / 70;
      return {
        answer: d,
        q: T`Galaxia sa od nás vzďaľuje rýchlosťou $${v}\\,\\text{km/s}$. Aká je jej vzdialenosť v megaparsekoch ($\\text{Mpc}$), ak Hubblova konštanta je $H_0 = 70\\,\\text{km/(s·Mpc)}$?`,
        solution: T`$d=\\frac{v}{H_0}=\\frac{${v}}{70}=${d}\\,\\text{Mpc}$.`,
        hint: T.s('Z Hubblovho zákona $v=H_0 d$ vyjadri vzdialenosť: $d=\\frac{v}{H_0}$.'),
        mistakes: [{ value: v * 70, msg: T`Rýchlosť a $H_0$ si vynásobil. Vzdialenosť dostaneš deľením: $d=\\frac{v}{H_0}$.` }]
      };
    }
    if (t < 0.67) {
      const p = pick([0.1, 0.2, 0.25, 0.5]), d = 1 / p;
      return {
        answer: d,
        q: T`Hviezda má ročnú paralaxu $${dm(p)}$ uhlovej sekundy. Aká je jej vzdialenosť v parsekoch?`,
        solution: T`$d=\\frac{1}{p}=\\frac{1}{${dm(p)}}=${d}\\,\\text{pc}$.`,
        hint: T.s('Vzdialenosť v parsekoch je prevrátená hodnota paralaxy v uhlových sekundách: $d=\\frac{1}{p}$.'),
        mistakes: [{ value: p, msg: T`Paralaxu si nechal ako vzdialenosť. Vzdialenosť v parsekoch je $d=\\frac{1}{p}$.` }]
      };
    }
    const Tk = pick([2900, 3625, 5800, 7250]), lam = 2.9e6 / Tk;
    return {
      answer: lam,
      q: T`Povrch hviezdy má teplotu $${Tk}\\,\\text{K}$. Pri akej vlnovej dĺžke v $\\text{nm}$ najsilnejšie žiari? Použi $b \\approx 2{,}9\\cdot 10^{-3}\\,\\text{m·K}$.`,
      solution: T`$\\lambda_{max}=\\frac{b}{T}=\\frac{2{,}9\\cdot 10^{-3}}{${Tk}}\\,\\text{m}=${fmt(lam)}\\,\\text{nm}$.`,
      hint: T.s('Wienov zákon: $\\lambda_{max}=\\frac{b}{T}$. Nezabudni previesť metre na nanometre.'),
      mistakes: [{ value: Tk, msg: T`Výsledok je vlnová dĺžka, nie teplota. Wienov zákon dáva $\\lambda_{max}=\\frac{b}{T}$.` }]
        .filter((m) => m.value !== lam)
    };
  });

  /* ---------- opakovanie ---------- */

  lesson({
    id: 's4-opakovanie', order: 70, theme: 'opakovanie', title: 'Opakovanie mechaniky, elektriny a ďalších tematických celkov',
    summary: 'Zopakuj hlavné vzorce z mechaniky a elektriny a skontroluj jednotky.',
   
    theory: [
      `<p>Opakovanie spája veci, ktoré sa učíš oddelene. Mechanika: $F = m\\,a$, $E_k = \\frac{1}{2}m v^2$, $W = F\\,s$, $P = \\frac{W}{t}$.
       Elektrina: $I = \\frac{Q}{t}$, $U = R\\,I$, $P = U\\,I$. Vždy najprv zisti, čo je dané a čo sa hľadá, až potom vyber vzorec.</p>`,
      `<p><strong>Kontrola jednotiek:</strong> sila v newtonoch ($\\text{N} = \\text{kg·m/s}^2$), energia v joulech, napätie vo voltoch.
       Ak jednotky na oboch stranách nesedia, chyba je v postupe.</p>`,
      `<p><strong>Časté chyby:</strong> nezabudni na $\\frac{1}{2}$ a druhú mocninu rýchlosti pri kinetickej energii; km/h prepočítaj
       na m/s delením $3{,}6$; pri paralelnom zapojení sčítavaj prevrátené hodnoty odporov.</p>`,
      `<p>Prečo to pomáha: fyzika je jeden systém zákonov. Energia sa zachováva naprieč oblasťami, napríklad elektrická energia sa
       v motore mení na mechanickú, takže rovnaké myslenie funguje všade.</p>`
    ],
    examples: [
      { task: 'Auto s hmotnosťou 1000 kg ide rýchlosťou 20 m/s. Aká je jeho kinetická energia?',
        steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 1000\\cdot 20^2$.', '$=\\frac{1}{2}\\cdot 1000\\cdot 400=200\\,000\\,\\text{J}$.', '<strong>Výsledok: 200 kJ.</strong>'] },
      { task: 'Spotrebič má napätie 12 V a odpor 4 Ω. Aký prúd ním preteká?',
        steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Výsledok: 3 A.</strong>'] }
    ]
  });

  gen('s4-opakovanie', () => {
    const t = Math.random();
    if (t < 0.25) {
      const m = 10 * rnd(1, 20), v = rnd(2, 30), Ek = m * v * v / 2;
      return {
        answer: Ek,
        q: T`Teleso s hmotnosťou $${m}\\,\\text{kg}$ sa pohybuje rýchlosťou $${v}\\,\\text{m/s}$. Aká je jeho kinetická energia v $\\text{J}$?`,
        solution: T`$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot ${m}\\cdot ${v}^2=${Ek}\\,\\text{J}$.`,
        hint: T.s('Kinetická energia je $E_k=\\frac{1}{2}m v^2$.'),
        mistakes: [{ value: m * v * v, msg: T`Zabudol si na $\\frac{1}{2}$ vo vzorci pre kinetickú energiu.` }]
      };
    }
    if (t < 0.5) {
      const I = rnd(1, 9), R = rnd(2, 12), U = I * R;
      return {
        answer: U,
        q: T`Cez rezistor s odporom $${R}\\,\\Omega$ preteká prúd $${I}\\,\\text{A}$. Aké je napätie na rezistore v $\\text{V}$?`,
        solution: T`$U = R\\,I = ${R}\\,\\Omega\\cdot ${I}\\,\\text{A} = ${U}\\,\\text{V}$.`,
        hint: T.s('Ohmov zákon: $U = R\\,I$.'),
        mistakes: [{ value: I / R, msg: T`Napätie je súčin, nie podiel: $U = R\\,I$.` }]
          .filter((x) => x.value !== U)
      };
    }
    if (t < 0.75) {
      const mk = rnd(2, 20), a = rnd(1, 9), F = mk * a;
      return {
        answer: F,
        q: T`Na teleso s hmotnosťou $${mk}\\,\\text{kg}$ pôsobí sila a zrýchlenie je $${a}\\,\\text{m/s}^2$. Aká je veľkosť sily v $\\text{N}$?`,
        solution: T`$F = m\\,a = ${mk}\\cdot ${a} = ${F}\\,\\text{N}$.`,
        hint: T.s('Druhý Newtonov zákon: $F = m\\,a$.'),
        mistakes: [{ value: mk + a, msg: T`Hmotnosť a zrýchlenie sa násobia, nesčítavajú: $F = m\\,a$.` }]
          .filter((x) => x.value !== F)
      };
    }
    const tt = rnd(2, 12), P = 10 * rnd(2, 20), W = P * tt;
    return {
      answer: P,
      q: T`Práca $${W}\\,\\text{J}$ sa vykoná za čas $${tt}\\,\\text{s}$. Aký je výkon v $\\text{W}$?`,
      solution: T`$P=\\frac{W}{t}=\\frac{${W}\\,\\text{J}}{${tt}\\,\\text{s}}=${P}\\,\\text{W}$.`,
      hint: T.s('Výkon je práca delená časom: $P = \\frac{W}{t}$.'),
      mistakes: [{ value: W * tt, msg: T`Výkon je práca delená časom, nie súčin: $P=\\frac{W}{t}$.` }]
    };
  });

  /* ---------- príprava na maturitu ---------- */

  lesson({
    id: 's4-maturita', order: 80, theme: 'opakovanie', title: 'Príprava na maturitu, najmä ak si žiak zvolí fyziku',
    summary: 'Postup pri riešení úloh, jednotky, odhad výsledku a zaokrúhľovanie.',
   
    theory: [
      `<p>Na maturite z fyziky sa najviac bodov stráca za <strong>nesprávne jednotky</strong> a dosadzovanie bez kontroly.
       Postup, ktorý sa vyplatí: zapíš dané veličiny, zapíš hľadanú veličinu, vyber vzorec, prepíš jednotky do SI
       a až potom počítaj.</p>`,
      `<ol><li>Zapíš dané a hľadané veličiny.</li><li>Vyber vzorec a over, či platí pre tento dej.</li><li>Prepíš jednotky do SI.</li>
       <li>Vypočítaj a zaokrúhli až na konci.</li><li>Skontroluj jednotku a rád veľkosti výsledku.</li></ol>`,
      `<p><strong>Kontrola výsledku:</strong> over, či je rád veľkosti rozumný (rýchlosť auta nemôže byť $10^{6}\\,\\text{m/s}$),
       či je znamienko správne a či výsledok patrí do správnej jednotky. Rýchly odhad pred výpočtom ti ušetrí chyby s desatinnou čiarkou.</p>`,
      `<p><strong>Zaokrúhľovanie:</strong> počítaj s plnou presnosťou a zaokrúhľuj až na konci, na počet platných cifier zadania
       (zvyčajne 2 alebo 3). Zaokrúhľovanie v medzikrokoch posúva výsledok.</p>`,
      `<p>Prečo to funguje: maturitná úloha hodnotí spôsob myslenia, nie len číslo. Správne jednotky a kontrola ukazujú pochopenie,
       aj keď sa pri výpočte pomýlite o malú hodnotu.</p>`
    ],
    examples: [
      { task: 'Teleso s hmotnosťou 2 kg má rýchlosť 36 km/h. Aká je jeho kinetická energia?',
        steps: ['Prepíš jednotky: $v = 36\\,\\text{km/h}=10\\,\\text{m/s}$.', '$E_k=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 10^2=100\\,\\text{J}$.', '<strong>Výsledok: 100 J.</strong>'] },
      { task: 'Sila 500 N pôsobí na plochu 25 cm². Aký tlak vznikne v kPa?',
        steps: ['Prepíš plochu: $S=25\\,\\text{cm}^2=25\\cdot 10^{-4}\\,\\text{m}^2$.', '$p=\\frac{F}{S}=\\frac{500}{25\\cdot 10^{-4}}\\,\\text{Pa}=2\\cdot 10^{5}\\,\\text{Pa}$.', '<strong>Výsledok: 200 kPa.</strong>'] }
    ]
  });

  gen('s4-maturita', () => {
    const F = pick([200, 300, 400, 500, 600, 900]), S = pick([10, 20, 25, 40, 50]);
    // p v kPa: F [N] / (S [cm²]·10⁻⁴ [m²]) / 1000
    const ans = Math.round((F / (S * 0.1)) * 10) / 10;
    return {
      answer: ans,
      tol: 0.05,
      q: T`Sila $${F}\\,\\text{N}$ pôsobí na plochu $${S}\\,\\text{cm}^2$. Aký tlak vznikne v $\\text{kPa}$? Výsledok zaokrúhli na jedno desatinné miesto.`,
      solution: T`$S=${S}\\,\\text{cm}^2=${S}\\cdot 10^{-4}\\,\\text{m}^2$, teda $p=\\frac{F}{S}=\\frac{${F}}{${S}\\cdot 10^{-4}}\\,\\text{Pa}\\approx ${fmt(ans * 1000)}\\,\\text{Pa}$, čo je približne $${dm(ans)}\\,\\text{kPa}$.`,
      hint: T.s('Najprv prepíš plochu na $\\text{m}^2$: $1\\,\\text{cm}^2=10^{-4}\\,\\text{m}^2$. Potom použi $p=\\frac{F}{S}$.'),
      mistakes: [
        { value: Math.round((F / S) * 10) / 10, msg: T`Plochu si nepremenil na $\\text{m}^2$. Výsledok by vyšiel v zlej jednotke a veľkosti.` },
        { value: Math.round((ans * 1000) * 10) / 10, msg: T`Výsledok si vyjadril v paskaloch, ale úloha chce kilopaskaly: $1\\,\\text{kPa}=1000\\,\\text{Pa}$.` }
      ].filter((m) => m.value !== ans)
    };
  });
})();
