/* 12. oblasť VŠ: matematická a výpočtová fyzika (v12). Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v12' }, l));
  const gen = EXERCISES.register;

  lesson({
    id: 'v12-modelovanie', order: 10, theme: 'matematika', title: 'Matematické modelovanie fyzikálnych javov',
    summary: 'Ako z fyzikálnej úvahy zostrojiť matematický model a overiť, či zodpovedá pozorovaniu.',
    theory: [
      `<p><strong>Model</strong> je zjednodušený matematický opis javu. Najprv určíme veličiny, ktoré ovplyvňujú výsledok,
       potom zapíšeme vzťahy medzi nimi a nakoniec overíme, či výpočet zodpovedá meraniu alebo rozumnému očakávaniu.</p>`,
      `<p>Typickým príkladom je <strong>rádioaktívny rozpad</strong>. Počet nerozpadnutých jadier klesá úmerne ich aktuálnemu počtu,
       čo vedie na exponenciálny zákon. Pri polčase rozpadu $T_{1/2}$ platí $N(t)=N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
      `<p>Model má obmedzenia: predpokladá, že rozpad je náhodný a nezávislý od okolia. Skutočné meranie preto môže
       vykazovať malé odchýlky, ktoré sa štatisticky spriemerujú pri veľkom počte jadier.</p>`
    ],
    examples: [
      { task: 'Vzorka má na začiatku $800$ jadier a polčas rozpadu je $10$ rokov. Koľko jadier zostane po $30$ rokoch?',
        steps: ['Po $30$ rokoch je to $3$ polčasy.', '$N=800\\cdot\\left(\\frac{1}{2}\\right)^3=800\\cdot\\frac{1}{8}$.', '<strong>Výsledok: 100 jadier</strong>'] }
    ]
  });

  gen('v12-modelovanie', () => {
    const N0 = pick([64, 128, 256, 512]), n = rnd(1, 4), ans = N0 / Math.pow(2, n);
    return {
      q: T`Vzorka má na začiatku $N_0=${N0}$ jadier a polčas rozpadu je $T_{1/2}$. Koľko jadier zostane po $${n}$ polčasoch? Použi model $N(t)=N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.`,
      answer: ans,
      solution: T`Po $${n}$ polčasoch je $\\frac{t}{T_{1/2}}=${n}$, teda $N=${N0}\\cdot\\left(\\frac{1}{2}\\right)^{${n}}=${N0}\\cdot\\frac{1}{${Math.pow(2, n)}}=${ans}$.`,
      hint: T.s('Počet polčasov je podiel času a polčasu. Každý polčas zníži počet na polovicu.'),
      // typické chyby: exponent násobený namiesto mocniny; len prvý polčas
      mistakes: [
        { value: N0 / (2 * n), msg: T`Exponent je v mocnine: $\\left(\\frac{1}{2}\\right)^n$, nie $\\frac{1}{2n}$.` },
        { value: N0 / 2, msg: T`Počítal si len prvý polčas. Rozpad pokračuje pri každom ďalšom polčase.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v12-diferencialne-rovnice', order: 20, theme: 'matematika', title: 'Diferenciálne rovnice',
    summary: 'Pohybové zákony sú diferenciálne rovnice; ich riešenie dostaneme integrovaním a počiatočnou podmienkou.',
    theory: [
      `<p>Newtonov druhý zákon $F=ma$ je diferenciálna rovnica, lebo zrýchlenie je derivácia rýchlosti: $a=\\frac{dv}{dt}$.
       Veličiny sa tu nevyjadrujú priamo, ale ich <em>zmena</em> v čase.</p>`,
      `<p><strong>Riešenie</strong> hľadáme integrovaním. Z rovnice $\\frac{dv}{dt}=a$ dostaneme $v(t)=at+C$. Konštantu $C$ určíme
       z <em>počiatočnej podmienky</em>, napríklad $v(0)=v_0$. Preto sa jedna rovnica vždy rieši spolu s takouto podmienkou.</p>`,
      `<p>Diferenciálne rovnice popisujú takmer všetky dynamické javy: pohyb telies, obvody, šírenie tepla alebo vlny. Ich riešenie
       je jednoznačné len vtedy, keď poznáme dostatok počiatočných podmienok.</p>`
    ],
    examples: [
      { task: 'Riešte $\\frac{dv}{dt}=2$ s podmienkou $v(0)=5$. Aká je rýchlosť v čase $t=4$?',
        steps: ['$v(t)=2t+C$, z $v(0)=5$ je $C=5$.', '$v(t)=2t+5$, teda $v(4)=8+5$.', '<strong>Výsledok: 13</strong>'] }
    ]
  });

  gen('v12-diferencialne-rovnice', () => {
    const v0 = rnd(-5, 10), a = pick([-3, -2, 2, 3, 4]), t = rnd(2, 8), ans = v0 + a * t;
    return {
      signed: true,
      q: T`Teleso má zrýchlenie opísané rovnicou $\\frac{dv}{dt}=${a}$ s počiatočnou podmienkou $v(0)=${v0}$. Vypočítaj $v(${t})$ v m/s.`,
      answer: ans,
      solution: T`Integrovaním dostaneme $v(t)=${a}\\,t+C$. Z $v(0)=${v0}$ je $C=${v0}$, teda $v(${t})=${v0}+(${a})\\cdot ${t}=${ans}$.`,
      hint: T.s('Najprv integruj rovnicu a potom dosaď počiatočnú podmienku, aby si určil konštantu.'),
      // typické chyby: znamienko počiatočnej rýchlosti; zabudnutý čas
      mistakes: [
        { value: v0 - a * t, msg: T`Počiatočnú rýchlosť si odčítal. Riešenie je $v(t)=v_0+at$.` },
        { value: v0 + a, msg: T`Zabudol si, že zrýchlenie pôsobí $t$ sekúnd. Integrál konštanty $a$ je $at$.` }
      ].filter((m) => m.value !== ans),
      steps: [
        { q: T`Aký je koeficient pri $t$ v riešení $v(t)=k\\,t+C$? Teda koľko je $k$?`, answer: a, signed: true },
        { q: T`Koľko je $v(${t})$?`, answer: ans, signed: true }
      ]
    };
  });

  lesson({
    id: 'v12-vektory', order: 30, theme: 'matematika', title: 'Vektorová analýza a tenzory',
    summary: 'Skalárny a vektorový súčin, ktoré opisujú prácu sily a moment sily; tenzor ako zovšeobecnenie.',
    theory: [
      `<p><strong>Vektor</strong> má veľkosť a smer, zapisujeme ho zložkami $\\vec a=(a_1,a_2,a_3)$. Sčítavanie vektorov je po zložkách.
       Veľkosť je $|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}$.</p>`,
      `<p><strong>Skalárny súčin</strong> $\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3$ je číslo. Používa sa pri práci sily: $W=\\vec F\\cdot\\vec s$.
       Platí aj $\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\varphi$, takže je nulový pre navzájom kolmé vektory.</p>`,
      `<p><strong>Vektorový súčin</strong> $\\vec a\\times\\vec b$ je vektor kolmý na obe pôvodné, napríklad moment sily $\\vec M=\\vec r\\times\\vec F$.
       <strong>Tenzor</strong> je zovšeobecnenie: napríklad tenzor napätia v pevnej látke priradí každej rovine vektor sily.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\vec a\\cdot\\vec b$ pre $\\vec a=(1,2,3)$ a $\\vec b=(4,-5,6)$.',
        steps: ['$1\\cdot 4+2\\cdot(-5)+3\\cdot 6$.', '$=4-10+18=12$.', '<strong>Výsledok: 12</strong>'] }
    ]
  });

  gen('v12-vektory', () => {
    const r = () => rnd(-4, 4);
    const a1 = r(), a2 = r(), a3 = r(), b1 = r(), b2 = r(), b3 = r();
    const ans = a1 * b1 + a2 * b2 + a3 * b3;
    return {
      signed: true,
      q: T`Vektory $\\vec a=(${a1},\\,${a2},\\,${a3})$ a $\\vec b=(${b1},\\,${b2},\\,${b3})$. Vypočítaj skalárny súčin $\\vec a\\cdot\\vec b$.`,
      answer: ans,
      solution: T`$\\vec a\\cdot\\vec b=(${a1})\\cdot(${b1})+(${a2})\\cdot(${b2})+(${a3})\\cdot(${b3})=${ans}$.`,
      hint: T.s('Skalárny súčin je $a_1b_1+a_2b_2+a_3b_3$: vynásob zložky po dvojiciach a súčiny sčítaj.'),
      // typické chyby: zabudnutá tretia zložka; zložky sčítané namiesto násobenia
      mistakes: [
        { value: a1 * b1 + a2 * b2, msg: T`Zabudol si tretiu zložku. Skalárny súčin sčítava súčiny všetkých troch dvojíc.` },
        { value: (a1 + b1) + (a2 + b2) + (a3 + b3), msg: T`Zložky si sčítal. Skalárny súčin ich násobí po dvojiciach.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v12-fourier', order: 40, theme: 'matematika', title: 'Fourierova analýza',
    summary: 'Periodický signál rozložíme na sínusové zložky a zistíme, aké frekvencie v ňom sú.',
    theory: [
      `<p>Každý periodický priebeh s periódou $T$ možno zapísať ako súčet sínusov a kosínusov s násobkami základnej frekvencie
       $\\omega=\\frac{2\\pi}{T}$. Tento súčet je <strong>Fourierov rad</strong>; jeho členy sa nazývajú harmonické zložky.</p>`,
      `<p>Koeficienty rozvoja zistíme integráciou: vynásobíme signál príslušnou funkciou a výsledok integrujeme cez periódu.
       Vďaka <em>ortogonalite</em> sínusov a kosínusov sa na to ostatné členy vynulujú.</p>`,
      `<p>Štvorcový signál s amplitúdou $A$ má len nepárne harmonické, pričom amplitúda $n$-tej je $\\frac{4A}{n\\pi}$.
       Fourierov rozvoj ukazuje, aké frekvencie treba prenášať, aby sa signál nezdeformoval, a je základom spektrálnej analýzy.</p>`
    ],
    examples: [
      { task: 'Aká je amplitúda prvej harmonickej štvorcového signálu s amplitúdou $A=3$?',
        steps: ['Pre prvú harmonickú je $n=1$ a vzorec $\\frac{4A}{n\\pi}$.', '$\\frac{4\\cdot 3}{\\pi}\\approx 3{,}82$.', '<strong>Výsledok: približne 3,82</strong>'] }
    ]
  });

  gen('v12-fourier', () => {
    const A = pick([2, 3, 5, 6]), ans = Math.round((4 * A / Math.PI) * 100) / 100;
    return {
      q: T`Štvorcový signál s amplitúdou $A=${A}$ (striedavo $+A$ a $-A$) má Fourierov rozvoj $f(t)=\\frac{4A}{\\pi}\\sin\\omega t+\\dots$ Aká je amplitúda jeho základnej harmonickej zložky? Zaokrúhli na 2 desatinné miesta.`,
      answer: ans,
      tol: 0.01,
      solution: T`Pre štvorcový signál je amplitúda $n$-tej harmonickej $\\frac{4A}{n\\pi}$ pre nepárne $n$. Pre $n=1$ je to $\\frac{4\\cdot ${A}}{\\pi}\\approx ${fmt(ans)}$.`,
      hint: T.s('Amplitúda prvej harmonickej je $\\frac{4A}{\\pi}$, nie $A$.'),
      // typické chyby: amplitúda celého signálu; tretia harmonická namiesto prvej
      mistakes: [
        { value: A, msg: T`To je amplitúda celého signálu, nie prvej harmonickej.` },
        { value: 4 * A / (3 * Math.PI), msg: T`Vzal si tretiu harmonickú, ktorá má amplitúdu $\\frac{4A}{3\\pi}$. Pýtali sme sa na základnú.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v12-numericke-metody', order: 50, theme: 'matematika', title: 'Numerické riešenie fyzikálnych problémov',
    summary: 'Keď sa rovnicu nedá vyriešiť vzorcom, riešime ju po malých krokoch, napríklad Eulerovou metódou.',
    theory: [
      `<p>Mnohé diferenciálne rovnice nemajú riešenie v tvare vzorca. Vtedy ich riešime <strong>numericky</strong>: čas rozdelíme na
       kroky dĺžky $h$ a v každom kroku odhadneme zmenu veličiny.</p>`,
      `<p><strong>Eulerova metóda</strong> pre rovnicu $\\frac{dy}{dt}=f(t,y)$ počíta $y_{n+1}=y_n+h\\,f(t_n,y_n)$. Je jednoduchá,
       ale chyba klesá len lineárne s krokom, preto sa v praxi používajú presnejšie metódy, napríklad Runge–Kutta.</p>`,
      `<p>Voľba kroku je kompromis: malý krok dáva presnejší výsledok, ale vyžaduje viac výpočtov. Príliš veľký krok môže
       spôsobiť nestabilitu, kedy sa odchýlky zväčšujú a riešenie je nezmyselné.</p>`
    ],
    examples: [
      { task: 'Riešte $\\frac{dy}{dt}=-y$ s $y(0)=10$ Eulerovou metódou s krokom $h=0{,}1$. Aká je hodnota $y_1$?',
        steps: ['$y_1=y_0+h\\cdot(-y_0)=10+0{,}1\\cdot(-10)$.', '$=10-1=9$.', '<strong>Výsledok: 9</strong>'] }
    ]
  });

  gen('v12-numericke-metody', () => {
    const y0 = pick([10, 20, 40, 50]), k = pick([1, 2, 3]), h = 0.1;
    const ans = Math.round(y0 * (1 - k * h) * 100) / 100;
    return {
      q: T`Rovnica $\\frac{dy}{dt}=-${k}\\,y$ s počiatočnou podmienkou $y(0)=${y0}$. Eulerovou metódou s krokom $h=${fmt(h)}$ vypočítaj $y_1=y_0+h\\,f(t_0,y_0)$.`,
      answer: ans,
      tol: 0.01,
      solution: T`$y_1=y_0+h\\cdot(-${k}\\,y_0)=${y0}+${fmt(h)}\\cdot(-${k * y0})=${fmt(ans)}$.`,
      hint: T.s('Dosaď do vzorca $y_{n+1}=y_n+h\\,f(t_n,y_n)$; pozor na znamienko funkcie $f$.'),
      // typické chyby: zabudnutý prírastok; znamienko funkcie
      mistakes: [
        { value: y0, msg: T`Zabudol si pridať prírastok $h\\,f(t_0,y_0)$. Bez neho sa hodnota nezmení.` },
        { value: y0 * (1 + k * h), msg: T`Znamienko: pravá strana $-${k}y$ je záporná, prírastok má byť záporný.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v12-pocitacove-simulacie', order: 60, theme: 'matematika', title: 'Počítačové simulácie',
    summary: 'Simulácia postupuje v krokoch; dĺžka kroku a celkový čas určujú počet výpočtov.',
    theory: [
      `<p><strong>Počítačová simulácia</strong> opakovane aplikuje pohybový zákon na malé časové kroky. Na začiatku je stav systému
       (polohy, rýchlosti), v každom kroku sa vypočíta nový stav.</p>`,
      `<p>Počet krokov pre čas $t$ a krok $h$ je $N=\\frac{t}{h}$. Ak zmenšíme krok na polovicu, výpočet trvá dvojnásobne dlho,
       ale presnosť sa zvyšuje. Pri ručnom výpočte to nevieme, pri počítači je to kľúčová voľba.</p>`,
      `<p>Simulácie sa používajú všade, kde nie je riešenie v tvare vzorca: pohyb planét v sústave troch telies, prúdenie vzduchu
       okolo krídla alebo šírenie tepla v materiáli.</p>`
    ],
    examples: [
      { task: 'Simulácia pádu má trvať $10\\,\\text{s}$ a krok je $0{,}05\\,\\text{s}$. Koľko krokov treba?',
        steps: ['$N=\\frac{t}{h}=\\frac{10}{0{,}05}$.', '<strong>Výsledok: 200 krokov</strong>'] }
    ]
  });

  gen('v12-pocitacove-simulacie', () => {
    const tt = pick([5, 10, 12, 20]), h = pick([0.01, 0.02, 0.05, 0.1]), ans = Math.round(tt / h);
    return {
      q: T`Simulácia pohybu má trvať $${tt}\\,\\text{s}$ a časový krok je $h=${fmt(h)}\\,\\text{s}$. Koľko výpočtových krokov treba vykonať?`,
      answer: ans,
      solution: T`Počet krokov je $N=\\frac{t}{h}=\\frac{${tt}}{${fmt(h)}}=${ans}$.`,
      hint: T.s('Počet krokov dostaneš delením celkového času krokom.'),
      // typické chyby: súčin namiesto podielu; zbytočný krok navyše
      mistakes: [
        { value: tt * h, msg: T`Vynásobil si čas a krok. Počet krokov dostaneš delením $t/h$.` },
        { value: ans + 1, msg: T`Pridal si zbytočný krok. Začiatočný stav nie je krok simulácie, počet krokov je $t/h$.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v12-konecne-prvky', order: 70, theme: 'matematika', title: 'Metóda konečných prvkov',
    summary: 'Zložité teleso rozdelíme na jednoduché prvky, ich vlastnosti zložíme do jednej sústavy rovníc.',
    theory: [
      `<p><strong>Metóda konečných prvkov (MKP)</strong> rozdelí zložitú konštrukciu na veľa jednoduchých častí (prvkov), napríklad trojuholníkov.
       Pre každý prvok zostavíme jednoduchú rovnicu, ktorá spája sily a posuny jeho uzlov.</p>`,
      `<p>Prvky sa potom spoja do <strong>globálnej sústavy rovníc</strong>, ktorá sa rieši počítačom. Pre pružiny alebo tyče platí:
       pri <em>sériovom</em> zapojení sa podajnosti sčítajú, teda $\\frac{1}{k}=\\frac{1}{k_1}+\\frac{1}{k_2}$.
       Pri <em>paralelnom</em> zapojení sa tuhosti sčítajú: $k=k_1+k_2$.</p>`,
      `<p>MKP sa používa pri pevnostnej analýze, prúdení tekutín aj pri šírení tepla. Výsledok je približný, presnosť rastie
       s počtom a jemnosťou prvkov.</p>`
    ],
    examples: [
      { task: 'Dve pružiny s tuhosťami $k_1=6\\,\\text{N/m}$ a $k_2=3\\,\\text{N/m}$ sú zapojené sériovo. Aká je ekvivalentná tuhosť?',
        steps: ['$\\frac{1}{k}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$.', '$k=2\\,\\text{N/m}$.', '<strong>Výsledok: 2 N/m</strong>'] }
    ]
  });

  gen('v12-konecne-prvky', () => {
    const ks = [2, 3, 4, 6, 8, 12];
    const k1 = pick(ks), k2 = pick(ks), ans = Math.round((k1 * k2 / (k1 + k2)) * 100) / 100;
    return {
      q: T`Dva prvky konštrukcie s tuhosťami $k_1=${k1}\\,\\text{N/m}$ a $k_2=${k2}\\,\\text{N/m}$ sú zapojené za sebou (sériovo). Aká je ekvivalentná tuhosť $k$? Zaokrúhli na 2 desatinné miesta.`,
      answer: ans,
      tol: 0.01,
      solution: T`Pri sérii je $\\frac{1}{k}=\\frac{1}{${k1}}+\\frac{1}{${k2}}$, teda $k=\\frac{${k1}\\cdot ${k2}}{${k1}+${k2}}=${fmt(ans)}\\,\\text{N/m}$.`,
      hint: T.s('Pri sériovom zapojení sa sčítajú prevrátené hodnoty tuhostí, nie samotné tuhosti.'),
      // typické chyby: paralelný vzorec; súčin namiesto podielu
      mistakes: [
        { value: k1 + k2, msg: T`Sčítal si tuhosti, ako keby boli zapojené paralelne. Pri sérii sa sčítajú prevrátené hodnoty.` },
        { value: k1 * k2, msg: T`Vynásobil si tuhosti. Pri sérii platí $\\frac{1}{k}=\\frac{1}{k_1}+\\frac{1}{k_2}$.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v12-komplexne-systemy', order: 80, theme: 'matematika', title: 'Modelovanie komplexných systémov',
    summary: 'Veľa jednoduchých častíc s vzájomnými väzbami vedie k zložitému správaniu; počet väzieb rastie rýchlo.',
    theory: [
      `<p><strong>Komplexný systém</strong> pozostáva z mnohých častí, ktoré na seba vzájomne pôsobia. Správanie celku často nevyplýva
       zo súčtu vlastností jednotlivých častí, ale z ich vzájomných väzieb. Hovoríme o <em>vznikajúcom</em> správaní.</p>`,
      `<p>Počet vzájomných väzieb rastie rýchlo. Pri $N$ časticiach, kde každá pôsobí na každú inú raz, vznikne
       $\\binom{N}{2}=\\frac{N(N-1)}{2}$ dvojíc. Pri $N=100$ je to už $4950$ väzieb.</p>`,
      `<p>Na modelovanie sa používajú napríklad <strong>agentné modely</strong> (každá častica sa riadi jednoduchými pravidlami),
       alebo <strong>Monte Carlo</strong> simulácie, ktoré náhodne vzorkujú možné stavy. Výsledok je vždy odhad, ktorý treba overiť.</p>`
    ],
    examples: [
      { task: 'V systéme je $5$ častíc, každá pôsobí na každú inú raz. Koľko rôznych dvojíc vznikne?',
        steps: ['$\\binom{5}{2}=\\frac{5\\cdot 4}{2}$.', '<strong>Výsledok: 10 dvojíc</strong>'] }
    ]
  });

  gen('v12-komplexne-systemy', () => {
    const N = rnd(4, 12), ans = N * (N - 1) / 2;
    return {
      q: T`V systéme je $N=${N}$ častíc a každá častica pôsobí na každú inú práve raz. Koľko rôznych dvojíc interakcií v systéme vznikne?`,
      answer: ans,
      solution: T`Počet dvojíc je $\\binom{N}{2}=\\frac{N(N-1)}{2}=\\frac{${N}\\cdot ${N - 1}}{2}=${ans}$.`,
      hint: T.s('Vyber dve častice z $N$; poradie nerozhoduje: $\\binom{N}{2}$.'),
      // typické chyby: obe poradia dvojice; všetky kombinácie vrátane dvojíc so sebou
      mistakes: [
        { value: N * (N - 1), msg: T`Započítal si obe poradia $(i,j)$ aj $(j,i)$. Pri vzájomnej interakcii ide o jednu dvojicu.` },
        { value: N * N, msg: T`Počítal si aj dvojice častice so sebou samou. Každá dvojica $i\\neq j$ sa počíta raz.` }
      ].filter((m) => m.value !== ans)
    };
  });
})();
