/* Vysoká škola, oblasť 1: Klasická mechanika (v1). Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v1' }, l));
  const gen = EXERCISES.register;

  // zaokrúhlenie na 2 desatinné miesta a pomocník pre typické chyby (chyba sa uvedie len vtedy, ak sa líši od správnej odpovede)
  const r2 = (x) => Math.round(x * 100) / 100;
  const mis = (value, answer, msg, tol = 1e-9) => (Math.abs(value - answer) > tol ? [{ value, msg }] : []);

  /* ---------- 1. Kinematika ---------- */

  lesson({
    id: 'v1-kinematika', order: 10, theme: 'pohyb', title: 'Kinematika: poloha, rýchlosť a zrýchlenie',
    summary: 'Opis pohybu bez príčin: ako sa mení poloha, rýchlosť a zrýchlenie v čase.',
    theory: [
      `<p>Kinematika opisuje pohyb telies bez toho, aby sa pýtala na jeho príčiny. Základnou veličinou je <strong>poloha</strong> $x(t)$, teda súradnica telesa vzhľadom na zvolený počiatok a smer.</p>`,
      `<p><strong>Rýchlosť</strong> je zmena polohy za čas: $v=\\frac{\\Delta x}{\\Delta t}$. Je to vektor, takže nesie aj znamienko, ktoré určuje smer pohybu. <strong>Zrýchlenie</strong> je zmena rýchlosti za čas: $a=\\frac{\\Delta v}{\\Delta t}$, v jednotkách $\\text{m/s}^2$.</p>`,
      `<p>Pri <strong>rovnomerne zrýchlenom pohybe</strong> je zrýchlenie konštantné. Rýchlosť sa potom mení lineárne, $v=v_0+a\\,t$, a dráha rastie s druhou mocninou času: $x=x_0+v_0\\,t+\\frac{1}{2}a\\,t^2$.</p>`,
      `<p><strong>Prečo násobíme časom:</strong> zrýchlenie udáva, o koľko metrov za sekundu sa rýchlosť zmení za každú sekundu. Za čas $t$ sa teda zmení o $a\\,t$. Ak $a$ a $v_0$ majú rovnaké znamienko, teleso zrýchľuje, inak brzdí.</p>`
    ],
    examples: [
      { task: 'Auto stojí ($v_0=0$) a zrýchli so stálym zrýchlením $a=2\\,\\text{m/s}^2$. Aká bude jeho rýchlosť po $5\\,\\text{s}$?',
        steps: ['Dosadíme do vzťahu $v=v_0+a\\,t$: $v=0+2\\cdot 5$.', '<strong>Výsledok: $v=10\\,\\text{m/s}$</strong>'] },
      { task: 'Vlak má rýchlosť $v_0=12\\,\\text{m/s}$ a brzdí so zrýchlením $a=-3\\,\\text{m/s}^2$. Akú rýchlosť má po $2\\,\\text{s}$?',
        steps: ['$v=v_0+a\\,t=12+(-3)\\cdot 2$.', '$v=12-6$.', '<strong>Výsledok: $v=6\\,\\text{m/s}$</strong>'] }
    ]
  });

  gen('v1-kinematika', () => {
    const v0 = rnd(0, 10), a = rnd(1, 6) * pick([1, -1]), t = rnd(2, 9), v = v0 + a * t;
    return {
      signed: true,
      q: T`Teleso má počiatočnú rýchlosť $v_0=${v0}\\,\\text{m/s}$ a pohybuje sa so stálym zrýchlením $a=${a}\\,\\text{m/s}^2$. Akú rýchlosť bude mať po $t=${t}\\,\\text{s}$?`,
      answer: v,
      solution: T`$v=v_0+a\\,t=${v0}+(${a})\\cdot ${t}=${v}\\,\\text{m/s}$.`,
      hint: T`Rýchlosť sa mení o $a\\,t$. Túto zmenu pripočítaj k počiatočnej rýchlosti a nezabudni na znamienko zrýchlenia.`,
      mistakes: [
        ...mis(v0 + a, v, T`Zabudol si vynásobiť zrýchlenie časom. Zrýchlenie hovorí, koľko rýchlosti pribudne za jednu sekundu.`),
        ...mis(v0 - a * t, v, T`Zmenil si znamienko zrýchlenia. Zrýchlenie so záporným znamienkom rýchlosť zmenšuje.`)
      ],
      steps: [
        { q: T`Koľko je $a\\,t$ (aj so znamienkom)?`, answer: a * t, signed: true },
        { q: T`Koľko je $v_0+a\\,t$?`, answer: v, signed: true }
      ]
    };
  });

  /* ---------- 2. Newtonove pohybové zákony ---------- */

  lesson({
    id: 'v1-newton', order: 20, theme: 'sily', title: 'Newtonove pohybové zákony',
    summary: 'Prvý, druhý a tretí zákon: kedy sa teleso nehýbe rovnomerne a ako súvisí sila so zrýchlením.',
    theory: [
      `<p><strong>Prvý zákon</strong> (zotrvačnosti): teleso zostáva v kľude alebo v rovnomernom priamočiarom pohybe, pokiaľ nanj nepôsobí výslednica síl nenulová. Zotrvačnosť je vlastnosť hmotnosti, nie výsledok sily.</p>`,
      `<p><strong>Druhý zákon</strong>: zrýchlenie je úmerné výslednej sile a nepriamo úmerné hmotnosti, $\\vec a=\\frac{\\vec F}{m}$, teda $\\vec F=m\\,\\vec a$. Výslednica je vektorový súčet všetkých síl pôsobiacich na teleso; sily v opačných smeroch sa odčítajú.</p>`,
      `<p><strong>Tretí zákon</strong>: ak teleso A pôsobí na teleso B silou, B pôsobí na A rovnako veľkou silou opačného smeru. Tieto dve sily pôsobia na <em>rôzne</em> telesá, preto sa navzájom nerušia.</p>`,
      `<p><strong>Prečo je to tak:</strong> sila je príčina zmeny pohybu. Pri väčšej hmotnosti je pre rovnaké zrýchlenie potrebná väčšia sila, lebo hmotnosť kladie odpor voči zmene rýchlosti.</p>`
    ],
    examples: [
      { task: 'Teleso s hmotnosťou $m=4\\,\\text{kg}$ ťahá sila $F=20\\,\\text{N}$ a proti nej pôsobí trenie $F_t=8\\,\\text{N}$ v rovnakej priamke. Aké je zrýchlenie?',
        steps: ['Výslednica: $F_v=20-8=12\\,\\text{N}$.', 'Zrýchlenie: $a=\\frac{F_v}{m}=\\frac{12}{4}$.', '<strong>Výsledok: $a=3\\,\\text{m/s}^2$</strong>'] },
      { task: 'Na teleso s hmotnosťou $m=3\\,\\text{kg}$ pôsobí výsledná sila $12\\,\\text{N}$. Aké je zrýchlenie?',
        steps: ['$a=\\frac{F}{m}=\\frac{12}{3}$.', '<strong>Výsledok: $a=4\\,\\text{m/s}^2$</strong>'] }
    ]
  });

  gen('v1-newton', () => {
    const m = rnd(2, 12), a = rnd(1, 6), F2 = rnd(5, 40), F1 = F2 + m * a, F = F1 - F2;
    return {
      q: T`Teleso s hmotnosťou $m=${m}\\,\\text{kg}$ ťahajú dve sily v opačných smeroch: $F_1=${F1}\\,\\text{N}$ a $F_2=${F2}\\,\\text{N}$. Aké je zrýchlenie telesa v smere väčšej sily?`,
      answer: a,
      solution: T`Výslednica je $F=F_1-F_2=${F1}-${F2}=${F}\\,\\text{N}$. Podľa druhého Newtonovho zákona $a=\\frac{F}{m}=\\frac{${F}}{${m}}=${a}\\,\\text{m/s}^2$.`,
      hint: T`Sily v opačných smeroch sa odčítajú. Výslednú silu potom vydeľ hmotnosťou telesa.`,
      mistakes: [
        ...mis(r2((F1 + F2) / m), a, T`Sily si sčítal, hoci pôsobia proti sebe. Výslednica je ich rozdiel.`),
        ...mis(F, a, T`Dostal si silu, nie zrýchlenie. Výslednú silu ešte vydeľ hmotnosťou: $a=F/m$.`)
      ],
      steps: [
        { q: T`Aká je výslednica $F_1-F_2$ v newtonoch?`, answer: F },
        { q: T`Aké je zrýchlenie $a=\\frac{F}{m}$?`, answer: a }
      ]
    };
  });

  /* ---------- 3. Sily, hybnosť a moment hybnosti ---------- */

  lesson({
    id: 'v1-hybnost', order: 30, theme: 'sily', title: 'Sily, hybnosť a moment hybnosti',
    summary: 'Hybnosť ako mierka pohybu, impulz sily a moment hybnosti pri otáčaní okolo bodu.',
    theory: [
      `<p><strong>Hybnosť</strong> telesa je súčin jeho hmotnosti a rýchlosti: $\\vec p=m\\,\\vec v$. Ťažké a rýchle teleso má veľkú hybnosť a ťažšie sa zastavuje.</p>`,
      `<p>Druhý Newtonov zákon sa dá zapísať aj pomocou hybnosti: $\\vec F=\\frac{\\Delta \\vec p}{\\Delta t}$. Súčin $\\vec F\\,\\Delta t$ sa volá <strong>impulz sily</strong> a rovná sa zmene hybnosti: $\\Delta \\vec p=\\vec F\\,\\Delta t$.</p>`,
      `<p><strong>Moment hybnosti</strong> bodu vzhľadom na pevný bod $O$ je vektorový súčin polohy a hybnosti: $\\vec L=\\vec r\\times\\vec p$, s veľkosťou $L=r\\,p\\sin\\alpha$, kde $\\alpha$ je uhol medzi $\\vec r$ a $\\vec p$.</p>`,
      `<p><strong>Prečo to platí:</strong> sila mení hybnosť len vtedy, keď pôsobí dostatočne dlho. Krátky úder dá malý impulz aj pri veľkej sile. Moment hybnosti sa mení len vtedy, keď na teleso pôsobí moment sily $\\vec M=\\vec r\\times\\vec F$.</p>`
    ],
    examples: [
      { task: 'Guľka s hmotnosťou $m=0{,}02\\,\\text{kg}$ letí rýchlosťou $v=300\\,\\text{m/s}$. Aká je jej hybnosť?',
        steps: ['$p=m\\,v=0{,}02\\cdot 300$.', '<strong>Výsledok: $p=6\\,\\text{kg\\,m/s}$</strong>'] },
      { task: 'Sila $F=50\\,\\text{N}$ pôsobí na teleso $4\\,\\text{s}$. Aká je zmena jeho hybnosti?',
        steps: ['Impulz sily: $\\Delta p=F\\,\\Delta t=50\\cdot 4$.', '<strong>Výsledok: $\\Delta p=200\\,\\text{kg\\,m/s}$</strong>'] }
    ]
  });

  gen('v1-hybnost', () => {
    const F = 5 * rnd(2, 12), t = rnd(2, 9), dp = F * t;
    return {
      q: T`Na teleso pôsobí stála sila $F=${F}\\,\\text{N}$ po dobu $\\Delta t=${t}\\,\\text{s}$. Aká je zmena jeho hybnosti $\\Delta p$ v jednotkách $\\text{kg\\,m/s}$?`,
      answer: dp,
      solution: T`Impulzová veta: $\\Delta p=F\\,\\Delta t=${F}\\cdot ${t}=${dp}\\,\\text{kg\\,m/s}$.`,
      hint: T`Zmena hybnosti je súčin sily a času jej pôsobenia, nie súčet ani podiel.`,
      mistakes: [
        ...mis(F + t, dp, T`Silu a čas si sčítal. Zmena hybnosti je ich súčin: $\\Delta p=F\\,\\Delta t$.`),
        ...mis(F / t, dp, T`Silu si vydelil časom. Čím dlhšie sila pôsobí, tým väčšia je zmena hybnosti.`)
      ]
    };
  });

  /* ---------- 4. Práca, energia a výkon ---------- */

  lesson({
    id: 'v1-praca-energia', order: 40, theme: 'energia', title: 'Práca, energia a výkon',
    summary: 'Práca sily, kinetická energia telesa a výkon ako práca za čas.',
    theory: [
      `<p><strong>Práca</strong> konštantnej sily pri posunutí o $\\vec s$ je $W=F\\,s\\cos\\alpha$, kde $\\alpha$ je uhol medzi silou a posunutím. Sila kolmá na posunutie nekoná prácu.</p>`,
      `<p><strong>Kinetická energia</strong> telesa je $E_k=\\frac{1}{2}m v^2$. Práca výslednej sily sa rovná zmene kinetickej energie: $W=\\Delta E_k$. Ide o vetu o kinetickej energii.</p>`,
      `<p><strong>Výkon</strong> je práca vykonaná za jednotku času: $P=\\frac{W}{t}$, v jednotkách watt, $1\\,\\text{W}=1\\,\\text{J/s}$.</p>`,
      `<p><strong>Prečo je tam $v^2$:</strong> pri dvojnásobnej rýchlosti má teleso štvornásobnú energiu, lebo na zastavenie treba štvornásobnú prácu. Preto sú nehody pri vyššej rýchlosti také nebezpečné.</p>`
    ],
    examples: [
      { task: 'Teleso s hmotnosťou $m=2\\,\\text{kg}$ sa pohybuje rýchlosťou $v=3\\,\\text{m/s}$. Aká je jeho kinetická energia?',
        steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 2\\cdot 3^2$.', '<strong>Výsledok: $E_k=9\\,\\text{J}$</strong>'] },
      { task: 'Sila $F=10\\,\\text{N}$ posunie teleso o $s=6\\,\\text{m}$ v smere sily. Aká práca sa vykoná?',
        steps: ['Uhol je $\\alpha=0^\\circ$, takže $\\cos\\alpha=1$.', '$W=F\\,s\\cos\\alpha=10\\cdot 6\\cdot 1$.', '<strong>Výsledok: $W=60\\,\\text{J}$</strong>'] }
    ]
  });

  gen('v1-praca-energia', () => {
    const m = 2 * rnd(1, 8), v = rnd(2, 12), Ek = m * v * v / 2;
    return {
      q: T`Teleso s hmotnosťou $m=${m}\\,\\text{kg}$ sa pohybuje rýchlosťou $v=${v}\\,\\text{m/s}$. Aká je jeho kinetická energia $E_k$ v džouloch?`,
      answer: Ek,
      solution: T`$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot ${m}\\cdot ${v}^2=${Ek}\\,\\text{J}$.`,
      hint: T`Kinetická energia je polovica súčinu hmotnosti a druhej mocniny rýchlosti.`,
      mistakes: [
        ...mis(m * v, Ek, T`Vynásobil si hmotnosť a rýchlosť. Energia obsahuje druhú mocninu rýchlosti.`),
        ...mis(m * v * v, Ek, T`Zabudol si deliť dvomi. Vzorec je $E_k=\\frac{1}{2}m v^2$.`)
      ],
      steps: [
        { q: T`Koľko je $v^2$ pre $v=${v}\\,\\text{m/s}$?`, answer: v * v },
        { q: T`Koľko je $\\frac{1}{2}\\cdot ${m}\\cdot ${v * v}$ v džouloch?`, answer: Ek }
      ]
    };
  });

  /* ---------- 5. Gravitačné pole ---------- */

  lesson({
    id: 'v1-gravitacne-pole', order: 50, theme: 'vesmir', title: 'Gravitačné pole',
    summary: 'Newtonov gravitačný zákon, gravitačné zrýchlenie a jeho zmena so vzdialenosťou od stredu planéty.',
    theory: [
      `<p><strong>Newtonov gravitačný zákon</strong>: dve telesa s hmotnosťami $m_1$ a $m_2$ vo vzdialenosti $r$ sa priťahujú silou $F=G\\frac{m_1 m_2}{r^2}$, kde $G\\approx 6{,}67\\cdot 10^{-11}\\,\\text{N\\,m}^2/\\text{kg}^2$.</p>`,
      `<p><strong>Gravitačné pole</strong> je oblasť, v ktorej na hmotné teleso pôsobí gravitačná sila. Intenzita poľa, teda <em>gravitačné zrýchlenie</em>, je $g=\\frac{F}{m}=G\\frac{M}{r^2}$, kde $M$ je hmotnosť zdroja poľa.</p>`,
      `<p><strong>Prečo klesá so vzdialenosťou:</strong> gravitačné pôsobenie sa rozptyľuje po stále väčšej guli plochy $4\\pi r^2$. Preto sa gravitačné zrýchlenie mení s druhou mocninou vzdialenosti od stredu, nie lineárne.</p>`,
      `<p>Pri povrchu Zeme je $g\\approx 9{,}81\\,\\text{m/s}^2$. Vo vzdialenosti $r$ od stredu Zeme je $g(r)=9{,}81\\cdot\\left(\\frac{R}{r}\\right)^2$, kde $R$ je polomer Zeme.</p>`
    ],
    examples: [
      { task: 'Aké je gravitačné zrýchlenie vo výške, kde je vzdialenosť od stredu Zeme dvojnásobná oproti polomeru Zeme?',
        steps: ['Pomer vzdialeností je $\\frac{r}{R}=2$, takže $g(r)=g\\cdot\\left(\\frac{1}{2}\\right)^2$.', '$g(r)=\\frac{9{,}81}{4}\\approx 2{,}45\\,\\text{m/s}^2$.', '<strong>Výsledok: približne $2{,}45\\,\\text{m/s}^2$</strong>'] },
      { task: 'Dve telesá s hmotnosťami $m_1=10\\,\\text{kg}$ a $m_2=5\\,\\text{kg}$ sú vo vzdialenosti $r$. Ako sa zmení sila, ak vzdialenosť zdvojnásobíme?',
        steps: ['Sila je úmerná $\\frac{1}{r^2}$, pri $2r$ sa zmenší štvornásobne.', '<strong>Výsledok: sila sa zmenší na štvrtinu</strong>'] }
    ]
  });

  gen('v1-gravitacne-pole', () => {
    const k = pick([2, 3, 4]), g = 9.81, gk = r2(g / (k * k));
    return {
      tol: 0.01,
      q: T`Aké je gravitačné zrýchlenie vo vzdialenosti $${k}R$ od stredu Zeme, kde $R$ je polomer Zeme a $g=9{,}81\\,\\text{m/s}^2$ je zrýchlenie pri povrchu? Výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: gk,
      solution: T`$g(r)=g\\cdot\\left(\\frac{R}{r}\\right)^2=\\frac{9{,}81}{${k * k}}\\approx ${fmt(gk)}\\,\\text{m/s}^2$.`,
      hint: T`Gravitačné zrýchlenie klesá s druhou mocninou vzdialenosti od stredu Zeme, nie priamo úmerne.`,
      mistakes: [
        ...mis(r2(g / k), gk, T`Vzdialenosť si len vydelil. Gravitačné zrýchlenie klesá s druhou mocninou vzdialenosti: $g\\sim\\frac{1}{r^2}$.`, 0.01),
        ...mis(g, gk, T`Zabudol si, že vzdialenosť sa od stredu Zeme zväčšila. Zrýchlenie sa zmenilo, nezostalo pri povrchovej hodnote.`, 0.01)
      ]
    };
  });

  /* ---------- 6. Rotácia tuhého telesa ---------- */

  lesson({
    id: 'v1-rotacia', order: 60, theme: 'pohyb', title: 'Rotácia tuhého telesa',
    summary: 'Uhlová rýchlosť, moment zotrvačnosti a moment sily pri otáčaní telesa okolo osi.',
    theory: [
      `<p><strong>Tuhé teleso</strong> sa pri rotácii okolo osi nemení tvarom: všetky jeho body sa otáčajú rovnakou <strong>uhlovou rýchlosťou</strong> $\\omega$ v radiánoch za sekundu. Ak teleso vykoná $f$ obrátok za sekundu, je $\\omega=2\\pi f$, lebo jeden celý obrat zodpovedá uhlu $2\\pi$.</p>`,
      `<p>Obvodová rýchlosť bodu vo vzdialenosti $r$ od osi je $v=\\omega\\,r$. Body ďalej od osi sa pohybujú rýchlejšie, pri rovnakej uhlovej rýchlosti.</p>`,
      `<p><strong>Moment zotrvačnosti</strong> $I=\\sum m_i r_i^2$ je rotačný ekvivalent hmotnosti. Závisí nielen od hmotnosti, ale aj od toho, ako ďaleko od osi je rozložená. Druhý Newtonov zákon pre rotáciu má tvar $M=I\\,\\alpha$, kde $M$ je moment sily a $\\alpha$ uhlové zrýchlenie.</p>`,
      `<p><strong>Prečo je tam dvojka:</strong> uhol sa meria v radiánoch a jeden obrat je $2\\pi$ radiánov, nie $\\pi$. Preto sa frekvencia v hercoch násobí dvoma pí.</p>`
    ],
    examples: [
      { task: 'Kotúč sa otáča frekvenciou $f=3\\,\\text{Hz}$. Aká je jeho uhlová rýchlosť?',
        steps: ['$\\omega=2\\pi f=2\\pi\\cdot 3$.', '<strong>Výsledok: $\\omega=6\\pi\\approx 18{,}85\\,\\text{rad/s}$</strong>'] },
      { task: 'Bod na kolese je vo vzdialenosti $r=0{,}5\\,\\text{m}$ od osi a uhlová rýchlosť je $\\omega=4\\,\\text{rad/s}$. Aká je jeho obvodová rýchlosť?',
        steps: ['$v=\\omega\\,r=4\\cdot 0{,}5$.', '<strong>Výsledok: $v=2\\,\\text{m/s}$</strong>'] }
    ]
  });

  gen('v1-rotacia', () => {
    const f = rnd(1, 10), w = r2(2 * Math.PI * f);
    return {
      tol: 0.01,
      q: T`Koleso sa otáča frekvenciou $f=${f}\\,\\text{Hz}$. Aká je jeho uhlová rýchlosť $\\omega$ v $\\text{rad/s}$? Výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: w,
      solution: T`$\\omega=2\\pi f=2\\pi\\cdot ${f}\\approx ${fmt(w)}\\,\\text{rad/s}$.`,
      hint: T`Uhlová rýchlosť je $2\\pi$-násobok frekvencie, lebo jeden obrat zodpovedá uhlu $2\\pi$.`,
      mistakes: [
        ...mis(f, w, T`To je frekvencia, nie uhlová rýchlosť. Treba použiť $\\omega=2\\pi f$.`, 0.01),
        ...mis(r2(Math.PI * f), w, T`Zabudol si dvojku pri $2\\pi$. Jeden obrat zodpovedá uhlu $2\\pi$, nie $\\pi$.`, 0.01)
      ]
    };
  });

  /* ---------- 7. Mechanika sústav častíc ---------- */

  lesson({
    id: 'v1-sustavy', order: 70, theme: 'sily', title: 'Mechanika sústav častíc',
    summary: 'Ťažisko sústavy častíc ako vážený priemer ich polôh a pohyb ťažiska.',
    theory: [
      `<p><strong>Sústava častíc</strong> sa dá opísať jedným významným bodom, <strong>ťažiskom</strong>. Pre dve častice na osi $x$ je jeho poloha $x_T=\\frac{m_1x_1+m_2x_2}{m_1+m_2}$. Je to vážený priemer, v ktorom ťažšia častica ťahá ťažisko k sebe.</p>`,
      `<p>Ťažisko sa pohybuje ako jedna častica s celkovou hmotnosťou $M=\\sum m_i$, na ktorú pôsobí výslednica vonkajších síl: $M\\,\\vec a_T=\\sum \\vec F_{\\text{ext}}$. Vnútorné sily medzi časticami sa navzájom rušia, preto ťažisko nezmení pohyb.</p>`,
      `<p><strong>Prečo ťažisko, a nie obyčajný priemer:</strong> ak by mali častice rovnakú hmotnosť, vyjde aritmetický priemer. Pri rôznych hmotnostiach musí mať každá súradnica váhu podľa svojej hmotnosti.</p>`,
      `<p>Kinetická energia sústavy sa dá rozdeliť na energiu pohybu ťažiska a energiu pohybu častíc vzhľadom na ťažisko. Vďaka tomu sa zložité pohyby dajú rozložiť na jednoduchšie časti.</p>`
    ],
    examples: [
      { task: 'Častica s hmotnosťou $1\\,\\text{kg}$ je v bode $x_1=0\\,\\text{m}$ a častica s hmotnosťou $3\\,\\text{kg}$ v bode $x_2=4\\,\\text{m}$. Kde je ťažisko?',
        steps: ['$x_T=\\frac{1\\cdot 0+3\\cdot 4}{1+3}=\\frac{12}{4}$.', '<strong>Výsledok: $x_T=3\\,\\text{m}$</strong>'] },
      { task: 'Dve rovnako ťažké častice sú v bodoch $x_1=2\\,\\text{m}$ a $x_2=8\\,\\text{m}$. Kde je ťažisko?',
        steps: ['Pri rovnakých hmotnostiach je ťažisko aritmetický priemer: $x_T=\\frac{2+8}{2}$.', '<strong>Výsledok: $x_T=5\\,\\text{m}$</strong>'] }
    ]
  });

  gen('v1-sustavy', () => {
    const m1 = rnd(1, 9), m2 = rnd(1, 9), x1 = rnd(0, 10), x2 = rnd(11, 20), xt = r2((m1 * x1 + m2 * x2) / (m1 + m2));
    return {
      tol: 0.01,
      q: T`Dve častice ležia na osi $x$: prvá s hmotnosťou $${m1}\\,\\text{kg}$ v bode $x_1=${x1}\\,\\text{m}$, druhá s hmotnosťou $${m2}\\,\\text{kg}$ v bode $x_2=${x2}\\,\\text{m}$. Kde leží ťažisko sústavy $x_T$ v metroch? Výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: xt,
      solution: T`$x_T=\\frac{m_1x_1+m_2x_2}{m_1+m_2}=\\frac{${m1}\\cdot ${x1}+${m2}\\cdot ${x2}}{${m1 + m2}}=\\frac{${m1 * x1 + m2 * x2}}{${m1 + m2}}\\approx ${fmt(xt)}\\,\\text{m}$.`,
      hint: T`Ťažisko je vážený priemer. Každú súradnicu vynásob hmotnosťou častice, ktorej patrí.`,
      mistakes: [
        ...mis(r2((x1 + x2) / 2), xt, T`Počítal si obyčajný priemer. Ťažisko zohľadňuje hmotnosti: každú súradnicu váž jej hmotnosťou.`, 0.01),
        ...mis(r2((m1 * x2 + m2 * x1) / (m1 + m2)), xt, T`Hmotnosti si priradil k opačným súradniciam. Hmotnosť patrí k svojej vlastnej častici.`, 0.01)
      ]
    };
  });

  /* ---------- 8. Lagrangeova a Hamiltonova mechanika ---------- */

  lesson({
    id: 'v1-lagrange', order: 80, theme: 'energia', title: 'Lagrangeova a Hamiltonova mechanika',
    summary: 'Lagrangián ako rozdiel kinetickej a potenciálnej energie a Hamiltonián ako celková energia.',
    theory: [
      `<p><strong>Lagrangián</strong> sústavy je $L=T-V$, kde $T$ je kinetická a $V$ potenciálna energia. Namiesto sledovania jednotlivých síl stačí poznať tieto dve energie a ich závislosť od zovšeobecnených súradníc $q$ a rýchlostí $\\dot q$.</p>`,
      `<p><strong>Eulerove-Lagrangeove rovnice</strong> dávajú pohybové rovnice: $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q}-\\frac{\\partial L}{\\partial q}=0$. Výhoda je, že súradnice môžeme zvoliť ľubovoľne, ak sú vhodné pre danú úlohu, napríklad uhol kyvadla.</p>`,
      `<p><strong>Hamiltonián</strong> je pri konzervatívnych silách $H=T+V$, teda celková energia. Zavedením hybností $p=\\frac{\\partial L}{\\partial \\dot q}$ sa pohybové rovnice zapisujú ako dvojice rovníc prvého rádu, takzvané Hamiltonove rovnice.</p>`,
      `<p><strong>Prečo záporné znamienko v $L$:</strong> potenciálna energia pôsobí proti pohybu a v Lagrangiáne sa odčíta, zatiaľ čo v Hamiltoniáne sa sčíta s kinetickou energiou.</p>`
    ],
    examples: [
      { task: 'Častica s hmotnosťou $m=2\\,\\text{kg}$ má rýchlosť $v=3\\,\\text{m/s}$ vo výške $h=1\\,\\text{m}$. Aký je jej Lagrangián, ak $g=10\\,\\text{m/s}^2$?',
        steps: ['$T=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 9=9\\,\\text{J}$.', '$V=mgh=2\\cdot 10\\cdot 1=20\\,\\text{J}$.', '<strong>Výsledok: $L=T-V=9-20=-11\\,\\text{J}$</strong>'] },
      { task: 'Tá istá častica má Hamiltonián $H=T+V$. Aký je jeho výsledok?',
        steps: ['$H=9+20$.', '<strong>Výsledok: $H=29\\,\\text{J}$</strong>'] }
    ]
  });

  gen('v1-lagrange', () => {
    const m = 2 * rnd(1, 6), v = rnd(2, 8), h = rnd(1, 9), g = 9.81;
    const Kin = 0.5 * m * v * v, Pot = m * g * h, L = r2(Kin - Pot);
    return {
      signed: true,
      tol: 0.01,
      q: T`Častica s hmotnosťou $m=${m}\\,\\text{kg}$ sa pohybuje rýchlosťou $v=${v}\\,\\text{m/s}$ vo výške $h=${h}\\,\\text{m}$ nad nulovou hladinou. Aká je hodnota Lagrangiánu $L=T-V$ v džouloch? Výsledok zaokrúhli na 2 desatinné miesta; $g=9{,}81\\,\\text{m/s}^2$.`,
      answer: L,
      solution: T`$T=\\frac{1}{2}mv^2=${fmt(Kin)}\\,\\text{J}$, $V=mgh=${fmt(r2(Pot))}\\,\\text{J}$, teda $L=T-V=${fmt(L)}\\,\\text{J}$.`,
      hint: T`Lagrangián je kinetická mínus potenciálna energia. Pozor na znamienko pri $V$.`,
      mistakes: [
        ...mis(r2(Kin + Pot), L, T`Pri potenciálnej energii si zmenil znamienko. Lagrangián je rozdiel $T-V$, nie súčet.`, 0.01),
        ...mis(r2(Kin), L, T`Zabudol si odpočítať potenciálnu energiu $V=mgh$.`, 0.01)
      ]
    };
  });

})();
