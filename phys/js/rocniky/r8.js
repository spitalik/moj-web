/* 8. ročník: mechanická práca a výkon, energia, jednoduché stroje, teplo a elektrina.
   Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). Gravitačné zrýchlenie g ≈ 10 m/s². */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r8' }, l));
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

  /* ---------- 1. práca a výkon ---------- */

  lesson({
    id: 'r8-praca', order: 10, theme: 'energia', title: 'Mechanická práca a výkon',
    summary: 'Kedy sila koná prácu, ako ju vypočítať a ako rýchlo sa koná.',
    theory: [
      `<p><strong>Mechanická práca</strong> sa koná vtedy, keď sila pôsobí na teleso a teleso sa posunie v smere tejto sily.
       Ak teleso nepohneme, práca je nulová: tlačenie na múr žiadnu prácu nevykoná.</p>`,
      `<p>Prácu počítame vzorcom $W = F\\cdot s$, kde $F$ je sila v newtonoch (N) a $s$ dráha v metroch (m).
       Jednotka práce je <strong>joule</strong> (J): $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$.</p>`,
      `<p><strong>Výkon</strong> hovorí, ako rýchlo sa práca koná. Počíta sa ako práca delená časom: $P = \\frac{W}{t}$,
       kde $t$ je čas v sekundách. Jednotka výkonu je <strong>watt</strong> (W): $1\\,\\text{W} = 1\\,\\text{J/s}$.
       Dva motory môžu vykonať rovnakú prácu, ale silnejší ju stihne za kratší čas.</p>`,
      `<ol>
         <li>Zisti silu a dráhu v jednotkách N a m.</li>
         <li>Vynásob ich: $W = F\\cdot s$.</li>
         <li>Ak sa pýta na výkon, výsledok vydeľ časom: $P = W : t$.</li>
       </ol>`
    ],
    examples: [
      { task: 'Dvaja chlapci tlačia vozík silou $F = 150\\,\\text{N}$ a posunú ho o $s = 8\\,\\text{m}$. Aká práca sa vykonala?',
        steps: ['Dosadíme do vzorca: $W = F\\cdot s = 150\\cdot 8$.', '<strong>Výsledok: W = 1200 J</strong>'] },
      { task: 'Zdvíhací motor vykoná prácu $W = 3000\\,\\text{J}$ za $t = 20\\,\\text{s}$. Aký je jeho výkon?',
        steps: ['$P = \\frac{W}{t} = \\frac{3000}{20}$.', '<strong>Výsledok: P = 150 W</strong>'] }
    ]
  });

  gen('r8-praca', () => {
    if (Math.random() < 0.6) {
      const F = 5 * rnd(4, 40), s = rnd(2, 30), W = F * s;
      return {
        q: T`Sila $${F}\\,\\text{N}$ posunie teleso po dráhe $${s}\\,\\text{m}$ v smere sily. Akú prácu sila vykoná? Výsledok zadaj v jouloch.`,
        answer: W,
        solution: T`$W=F\\cdot s=${F}\\cdot ${s}=${W}\\,\\text{J}$.`,
        hint: T.s('Práca je súčin sily a dráhy v smere sily: $W=F\\cdot s$.'),
        mistakes: [
          { value: F + s, msg: T`Sčítal si silu a dráhu. Práca je ich súčin: $W=F\\cdot s$.` },
          { value: F / s, msg: T`Delil si silu dráhou. Práca sa počíta vynásobením.` }
        ].filter((m) => m.value !== W)
      };
    }
    const P = 10 * rnd(2, 30), t = rnd(2, 20), W = P * t;
    return {
      q: T`Zdvíhací motor vykonal prácu $${W}\\,\\text{J}$ za $${t}\\,\\text{s}$. Aký mal výkon? Výsledok zadaj vo wattoch.`,
      answer: P,
      solution: T`$P=\\frac{W}{t}=\\frac{${W}}{${t}}=${P}\\,\\text{W}$.`,
      hint: T.s('Výkon je práca delená časom: $P=\\frac{W}{t}$.'),
      mistakes: [
        { value: W * t, msg: T`Prácu si vynásobil časom. Výkon sa počíta ako práca delená časom.` },
        { value: W, msg: T`Výsledkom je práca, nie výkon. Ešte ju musíš vydeliť časom.` }
      ].filter((m) => m.value !== P)
    };
  });

  /* ---------- 2. mechanická energia a premeny ---------- */

  lesson({
    id: 'r8-mechanicka-energia', order: 20, theme: 'energia', title: 'Mechanická energia a jej premeny',
    summary: 'Energia je schopnosť konať prácu a mení sa z jednej formy na inú.',
    theory: [
      `<p><strong>Energia</strong> je schopnosť telesa konať prácu. Označuje sa $E$ a jej jednotka je rovnaká ako pre prácu: joule (J).
       Energiu nevieme vytvoriť z ničoho ani ju zničiť. Vieme ju len premeniť z jednej formy na inú.</p>`,
      `<p><strong>Zákon zachovania energie:</strong> celková energia uzavretej sústavy sa nemení. Ak jedna forma energie ubudne,
       iná forma vzrastie o rovnaké množstvo.</p>`,
      `<ul>
         <li>Kameň padá z výšky: polohová energia sa mení na pohybovú.</li>
         <li>Kyvadlo sa vracia hore: pohybová energia sa mení späť na polohovú.</li>
         <li>Auto s brzdami: pohybová energia sa mení na vnútornú energiu (teplo).</li>
       </ul>`,
      `<p>Pri trení sa časť mechanickej energie vždy premení na teplo. Energia sa tak nestratí, len sa rozptýli do okolia
       a ťažko sa dá využiť.</p>`
    ],
    examples: [
      { task: 'Čo sa deje s energiou, keď kniha padá zo stola na podlahu?',
        steps: ['Na stole má kniha polohovú energiu. Pri páde sa pohybuje, teda má pohybovú energiu.', 'Pri náraze sa časť energie premení na zvuk a teplo.', '<strong>Výsledok: polohová energia sa premení na pohybovú, zvukovú a tepelnú.</strong>'] },
      { task: 'Akú premenu energie prebieha pri brzdení bicykla?',
        steps: ['Bicykel sa pohybuje, má pohybovú energiu.', 'Brzdy trením o obruč vytvoria teplo.', '<strong>Výsledok: pohybová energia sa premení na vnútornú energiu (teplo).</strong>'] }
    ]
  });

  const ENERGY_PATHS = [
    { q: 'Pri brzdení bicykla sa pohybová energia najviac premení na', right: 'vnútornú energiu (teplo) v brzdách a pneumatikách',
      why: 'Trenie brzdových čeľustí o obruč zohreje súčasti. Pohybová energia sa mení na teplo.',
      wrong: [['elektrickú energiu v batérii', 'Bicykel batériu pri brzdení nenabíja.'],
        ['polohovú energiu', 'Pri jazde po rovine sa výška nemení, polohová energia sa nezväčší.']] },
    { q: 'Keď kameň padá z výšky, jeho polohová energia sa premieňa na', right: 'pohybovú energiu',
      why: 'Pri páde klesá výška a rastie rýchlosť. Polohová energia sa mení na pohybovú.',
      wrong: [['elektrickú energiu', 'Pri páde kameňa elektrická energia nevzniká.'],
        ['chemickú energiu', 'Pri páde kameňa nedochádza k chemickej reakcii.']] },
    { q: 'Lyžiar stojí na vrchole kopca. Akú energiu má najviac?', right: 'polohovú energiu',
      why: 'Je vysoko nad zemou, preto má veľkú polohovú energiu.',
      wrong: [['pohybovú energiu', 'Stojí, nepohybuje sa, takže jeho pohybová energia je nulová.'],
        ['elektrickú energiu', 'Lyžiar nie je zdroj elektrickej energie.']] },
    { q: 'Pri trení kníh o podlahu sa časť mechanickej energie premení na', right: 'vnútornú energiu (teplo)',
      why: 'Trenie zohrieva telesá. Energia sa nestratí, len prejde do tepla.',
      wrong: [['chemickú energiu v podlahe', 'Trenie nemení chemické zloženie látok.'],
        ['jadrovú energiu', 'Pri trení nedochádza k jadrovým premenám.']] }
  ];

  gen('r8-mechanicka-energia', () => choiceFrom(ENERGY_PATHS, 'Pozri sa, kam sa energia premení. Pri trení a brzdení vzniká teplo.'));

  /* ---------- 3. polohová a pohybová energia ---------- */

  lesson({
    id: 'r8-polohova-pohybova', order: 30, theme: 'energia', title: 'Polohová a pohybová energia',
    summary: 'Výpočet energie telesa vo výške a v pohybe.',
    theory: [
      `<p><strong>Polohovú energiu</strong> má teleso, ktoré je zdvihnuté nad zem. Čím je ťažšie a vyššie, tým má viac energie.
       Počíta sa $E_p = m\\cdot g\\cdot h$, kde $m$ je hmotnosť v kilogramoch, $g \\approx 10\\,\\text{m/s}^2$ gravitačné zrýchlenie
       a $h$ výška v metroch.</p>`,
      `<p><strong>Pohybovú (kinetickú) energiu</strong> má teleso, ktoré sa pohybuje. Počíta sa $E_k = \\frac{1}{2}\\,m\\,v^2$,
       kde $v$ je rýchlosť v m/s. Rýchlosť je na druhú, preto dvojnásobná rýchlosť znamená štvornásobnú pohybovú energiu.</p>`,
      `<p>Tieto energie závisia od hmotnosti, výšky a rýchlosti, nie od tvaru telesa. Preto sa auto pri vyššej rýchlosti
       ťažšie zastaví: má oveľa väčšiu pohybovú energiu.</p>`,
      `<ol>
         <li>Zisti hmotnosť v kg, výšku v m alebo rýchlosť v m/s.</li>
         <li>Vyber vzorec podľa toho, či teleso stojí vysoko alebo sa hýbe.</li>
         <li>Dosaď a vypočítaj; výsledok je v joule.</li>
       </ol>`
    ],
    examples: [
      { task: 'Kameň s hmotnosťou $m = 2\\,\\text{kg}$ leží na streche vysokej $h = 5\\,\\text{m}$. Aká je jeho polohová energia pri $g = 10\\,\\text{m/s}^2$?',
        steps: ['$E_p = m\\cdot g\\cdot h = 2\\cdot 10\\cdot 5$.', '<strong>Výsledok: E_p = 100 J</strong>'] },
      { task: 'Vozík s hmotnosťou $m = 4\\,\\text{kg}$ sa pohybuje rýchlosťou $v = 3\\,\\text{m/s}$. Aká je jeho pohybová energia?',
        steps: ['$E_k=\\frac{1}{2}\\,m\\,v^2=\\frac{1}{2}\\cdot 4\\cdot 3^2$.', '$\\frac{1}{2}\\cdot 4 = 2$ a $3^2 = 9$, teda $E_k = 2\\cdot 9$.', '<strong>Výsledok: E_k = 18 J</strong>'] }
    ]
  });

  gen('r8-polohova-pohybova', () => {
    if (Math.random() < 0.5) {
      const m = rnd(1, 20), h = rnd(1, 30), Ep = 10 * m * h;
      return {
        q: T`Teleso s hmotnosťou $${m}\\,\\text{kg}$ je vo výške $${h}\\,\\text{m}$ nad zemou. Aká je jeho polohová energia? Uvažuj $g=10\\,\\text{m/s}^2$. Výsledok zadaj v jouloch.`,
        answer: Ep,
        solution: T`$E_p=m\\,g\\,h=${m}\\cdot 10\\cdot ${h}=${Ep}\\,\\text{J}$.`,
        hint: T.s('Polohová energia je $E_p=m\\,g\\,h$. Nezabudni na gravitačné zrýchlenie $g$.'),
        mistakes: [{ value: m * h, msg: T`Zabudol si vynásobiť gravitačným zrýchlením $g=10\\,\\text{m/s}^2$.` }]
          .filter((x) => x.value !== Ep)
      };
    }
    const m = 2 * rnd(1, 10), v = rnd(1, 15), Ek = (m / 2) * v * v;
    return {
      q: T`Vozík s hmotnosťou $${m}\\,\\text{kg}$ sa pohybuje rýchlosťou $${v}\\,\\text{m/s}$. Aká je jeho pohybová energia v jouloch?`,
      answer: Ek,
      solution: T`$E_k=\\frac{1}{2}\\,m\\,v^2=\\frac{1}{2}\\cdot ${m}\\cdot ${v}^2=${Ek}\\,\\text{J}$.`,
      hint: T.s('Pohybová energia je $E_k=\\frac{1}{2}\\,m\\,v^2$. Rýchlosť sa umocňuje na druhú.'),
      mistakes: [
        { value: m * v, msg: T`Rýchlosť si len vynásobil hmotnosťou. Rýchlosť sa v pohybovej energii umocňuje na druhú.` },
        { value: m * v * v, msg: T`Zabudol si na polovicu vo vzorci: $E_k=\\frac{1}{2}\\,m\\,v^2$.` }
      ].filter((x) => x.value !== Ek),
      steps: [
        { q: T`Koľko je $\\frac{1}{2}\\cdot ${m}$?`, answer: m / 2 },
        { q: T`Koľko je $${v}^2$?`, answer: v * v },
        { q: T`Koľko je $${m / 2}\\cdot ${v * v}$?`, answer: Ek }
      ]
    };
  });

  /* ---------- 4. jednoduché stroje ---------- */

  lesson({
    id: 'r8-jednoduche-stroje', order: 40, theme: 'energia', title: 'Jednoduché stroje',
    summary: 'Páka, kladka a naklonená rovina nám uľahčujú prácu, ale dráhu nezlepšia.',
    theory: [
      `<p><strong>Jednoduché stroje</strong> (páka, kladka, naklonená rovina) umožňujú zdvihnúť väčšiu záťaž menšou silou.
       Platí však zlaté pravidlo mechaniky: práca sa ušetriť nedá. Menšiu silu kupujeme dlhšou dráhou.</p>`,
      `<p><strong>Páka</strong> je tyč otáčajúca sa okolo osi. Vzdialenosť sily od osi je <em>rameno</em> sily $r$.
       Páka je v rovnováhe, keď $F_1\\cdot r_1 = F_2\\cdot r_2$. Dlhšie rameno znamená menšiu potrebnú silu.</p>`,
      `<p><strong>Kladky:</strong> pevná kladka len mení smer sily. Pohyblivá kladka zmenší silu na polovicu, ale dráha
       sa zdvojnásobí. <strong>Naklonená rovina:</strong> čím je sklon menší, tým menšia sila stačí, ale dráha je dlhšia.</p>`,
      `<ol>
         <li>Urči, ktorá sila je bremeno a ktorá sila ťahá.</li>
         <li>Zmeraj ramená (vzdialenosti od osi).</li>
         <li>Použi rovnováhu páky a vypočítaj neznámu silu.</li>
       </ol>`
    ],
    examples: [
      { task: 'Na páke s ramenom sily $r_1 = 2\\,\\text{m}$ zdvíhame bremeno silou $F_2 = 300\\,\\text{N}$ s ramenom $r_2 = 0{,}5\\,\\text{m}$. Akou silou pôsobíme na rameno $r_1$?',
        steps: ['Rovnováha: $F_1\\cdot r_1 = F_2\\cdot r_2$.', '$F_1 = \\frac{F_2\\cdot r_2}{r_1} = \\frac{300\\cdot 0{,}5}{2}$.', '<strong>Výsledok: F_1 = 75 N</strong>'] },
      { task: 'Pohyblivou kladkou zdvihneme bremeno s tiažou $200\\,\\text{N}$. Akou silou ťaháme, ak zanedbáme trenie?',
        steps: ['Pohyblivá kladka zmenší silu na polovicu: $F = \\frac{200}{2}$.', '<strong>Výsledok: F = 100 N, ale ťahať treba na dvojnásobnej dráhe.</strong>'] }
    ]
  });

  gen('r8-jednoduche-stroje', () => {
    const rb = rnd(1, 6);
    let rs = rnd(1, 6);
    while (rs === rb) rs = rnd(1, 6);
    const k = rnd(2, 20), Fb = rs * k, Fs = k * rb;
    return {
      q: T`Páka je v rovnováhe. Na ramene bremena dlhom $${rb}\\,\\text{m}$ visí bremeno s tiažou $${Fb}\\,\\text{N}$. Akou silou treba pôsobiť na rameno sily dlhé $${rs}\\,\\text{m}$? Výsledok zadaj v newtonoch.`,
      answer: Fs,
      solution: T`Rovnováha páky: $F_s\\cdot r_s=F_b\\cdot r_b$, teda $F_s=\\frac{${Fb}\\cdot ${rb}}{${rs}}=${Fs}\\,\\text{N}$.`,
      hint: T.s('Súčin sily a ramena musí byť na oboch stranách páky rovnaký: $F_s\\cdot r_s=F_b\\cdot r_b$.'),
      mistakes: [{ value: Fb, msg: T`Silu si nepreniesol cez pomer ramien. Sila na páke sa mení podľa dĺžky ramena.` }]
        .filter((x) => x.value !== Fs),
      steps: [
        { q: T`Koľko je súčin $F_b\\cdot r_b = ${Fb}\\cdot ${rb}$?`, answer: Fb * rb },
        { q: T`Akou silou treba pôsobiť na rameno dlhé $${rs}\\,\\text{m}$, aby bol súčin rovnaký? Zadaj silu v newtonoch.`, answer: Fs }
      ]
    };
  });

  /* ---------- 5. vnútorná energia a tepelná výmena ---------- */

  lesson({
    id: 'r8-vnutorna-energia', order: 50, theme: 'teplo', title: 'Vnútorná energia a tepelná výmena',
    summary: 'Vnútorná energia telesa, prenos tepla a výpočet tepla pri ohrievaní.',
    theory: [
      `<p>Každé teleso má <strong>vnútornú energiu</strong>. Tvoria ju pohybové a polohové energie jeho častíc (atómov a molekúl).
       Čím sa častice rýchlejšie hýbu, tým je teleso teplejšie a tým má väčšiu vnútornú energiu.</p>`,
      `<p><strong>Teplo</strong> je energia, ktorú si telesá odovzdávajú pri rozdiele teplôt. Prechádza vždy z teplejšieho telesa
       na chladnejšie, dovtedy, kým sa teploty nevyrovnajú. Teplo nie je vlastnosť telesa, ale prenesená energia.</p>`,
      `<ul>
         <li><strong>Vedením:</strong> teplo sa prenáša z častice na časticu, napríklad lyžica v horúcom čaji.</li>
         <li><strong>Prúdením:</strong> ohriaty vzduch alebo voda stúpa, napríklad pri radiátore.</li>
         <li><strong>Sálaním:</strong> teplo prechádza aj bez látky, napríklad zo Slnka.</li>
       </ul>`,
      `<p>Množstvo tepla na ohriatie počítame zo vzťahu $Q = m\\cdot c\\cdot \\Delta t$. Hodnota $c$ je merná tepelná kapacita:
       pre vodu $c = 4200\\,\\text{J/(kg\\cdot K)}$. Zmena teploty $\\Delta t$ je rozdiel konečnej a začiatočnej teploty.</p>`
    ],
    examples: [
      { task: 'Koľko tepla treba na ohriatie $m = 2\\,\\text{kg}$ vody o 10 °C? Použi $c = 4200\\,\\text{J/(kg\\cdot K)}$.',
        steps: ['$Q = m\\cdot c\\cdot \\Delta t = 2\\cdot 4200\\cdot 10$.', '<strong>Výsledok: Q = 84 000 J = 84 kJ</strong>'] },
      { task: 'Horúci čaj v hrnčeku postupne chladne. Akým spôsobom odovzdáva teplo okoliu?',
        steps: ['Teplo sa z čaju prenáša cez stenu hrnčeka vedením.', 'Ohriaty vzduch nad hrnčekom stúpa, čo je prúdenie. Teplo vyžaruje aj sálaním.', '<strong>Výsledok: vedením, prúdením a sálaním.</strong>'] }
    ]
  });

  gen('r8-vnutorna-energia', () => {
    const m = rnd(1, 5), dt = 5 * rnd(1, 12), Q = 4200 * m * dt;
    return {
      q: T`Koľko tepla treba dodať $${m}\\,\\text{kg}$ vody, aby sa ohriala o ${dt} °C? Merná tepelná kapacita vody je $c=4200\\,\\text{J/(kg\\cdot K)}$. Výsledok zadaj v jouloch.`,
      answer: Q,
      solution: T`$Q=m\\cdot c\\cdot \\Delta t=${m}\\cdot 4200\\cdot ${dt}=${Q}\\,\\text{J}$.`,
      hint: T.s('Teplo na ohriatie je $Q=m\\cdot c\\cdot \\Delta t$. Zmena teploty je rozdiel konečnej a začiatočnej teploty.'),
      mistakes: [
        { value: m * dt, msg: T`Zabudol si na merné teplo vody $c=4200\\,\\text{J/(kg\\cdot K)}$.` },
        { value: 4200 * dt, msg: T`Zabudol si vynásobiť hmotnosťou $m$.` }
      ].filter((x) => x.value !== Q)
    };
  });

  /* ---------- 6. elektrický náboj ---------- */

  lesson({
    id: 'r8-naboj', order: 60, theme: 'elektrina', title: 'Elektrický náboj',
    summary: 'Dva druhy náboja, elektrizovanie trením a náboj elektrónu.',
    theory: [
      `<p>Všetky telesá sa skladajú z atómov. Atóm má kladne nabité jadro a záporne nabité elektróny.
       <strong>Elektrický náboj</strong> je vlastnosť telies, ktorá sa prejavuje silovým pôsobením. Označuje sa $Q$ a jednotkou je coulomb (C).</p>`,
      `<p>Existujú dva druhy náboja: kladný a záporný. Rovnaké náboje sa odpudzujú, opačné sa priťahujú.
       Neutrálne teleso má rovnaký počet kladných a záporných nábojov.</p>`,
      `<p><strong>Elektrizovanie trením:</strong> pri trení prechádzajú elektróny z jedného telesa na druhé. Teleso, ktoré elektróny
       získa, je záporne nabité. Teleso, ktoré ich stratí, je kladne nabité. Náboj sa nedá vytvoriť ani zničiť, iba preniesť.</p>`,
      `<ul>
         <li>Elementárny náboj $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$ nesie jeden elektrón.</li>
         <li>Náboj telesa s $n$ elektrónmi navyše je $Q = -n\\,e$; s $n$ elektrónmi menej je $Q = +n\\,e$.</li>
       </ul>`
    ],
    examples: [
      { task: 'Teleso stratilo 3 elektróny. Aký náboj má v násobkoch elementárneho náboja $e$?',
        steps: ['Stratou elektrónov vznikol nedostatok záporného náboja, teleso je kladné.', 'Náboj je $Q = +3e$.', '<strong>Výsledok: +3e</strong>'] },
      { task: 'Dve gule sa po dotyku odpudzujú. Čo to znamená pre ich náboje?',
        steps: ['Odpudzovanie nastane len pri rovnakých nábojoch.', '<strong>Výsledok: obe gule majú náboj rovnakého znamienka.</strong>'] }
    ]
  });

  const CHARGE_CHOICES = [
    { q: 'Teleso po triení získalo nadbytok elektrónov. Aký náboj má?', right: 'záporný náboj',
      why: 'Elektróny nesú záporný náboj. Ak ich má teleso navyše, je záporne nabité.',
      wrong: [['kladný náboj', 'Kladný náboj vzniká, keď teleso elektróny stratí.'],
        ['žiadny náboj', 'Teleso s nadbytkom elektrónov je nabité, nie neutrálne.']] },
    { q: 'Ktoré telesá sa navzájom odpudzujú?', right: 'telesá s rovnakým nábojom',
      why: 'Rovnaké náboje sa odpudzujú, opačné sa priťahujú.',
      wrong: [['telesá s opačným nábojom', 'Opačné náboje sa priťahujú, neodpudzujú.'],
        ['neutrálne teleso a kladne nabité teleso', 'Neutrálne teleso nemá náboj, preto na seba nepôsobí odpudivou silou.']] }
  ];

  gen('r8-naboj', () => {
    if (Math.random() < 0.6) {
      const n = rnd(1, 9), gain = Math.random() < 0.5, ans = gain ? -n : n;
      return {
        signed: true,
        q: T`Teleso ${gain ? T`získalo` : T`stratilo`} ${n} ${n === 1 ? T`elektrón` : n < 5 ? T`elektróny` : T`elektrónov`}. Aký je jeho náboj v násobkoch elementárneho náboja $e$? Zadaj číslo so znamienkom (napr. +2 alebo -2).`,
        answer: ans,
        solution: T`${gain ? T`Získanie elektrónov dáva záporný náboj` : T`Strata elektrónov dáva kladný náboj`}: $Q=${ans > 0 ? '+' : ''}${ans}\\,e$.`,
        hint: T.s('Elektrón má záporný náboj. Teleso s nadbytkom elektrónov je záporné, s ich nedostatkom kladné.'),
        mistakes: [{ value: -ans, msg: T`Znamienko je opačné. Získané elektróny nesú záporný náboj.` }]
      };
    }
    return choiceFrom(CHARGE_CHOICES, 'Pamätaj: rovnaké náboje sa odpudzujú, opačné sa priťahujú.');
  });

  /* ---------- 7. elektrický prúd a napätie ---------- */

  lesson({
    id: 'r8-prud-napatie', order: 70, theme: 'elektrina', title: 'Elektrický prúd a elektrické napätie',
    summary: 'Prúd ako náboj za čas, napätie ako hnací tlak a ich meranie.',
    theory: [
      `<p><strong>Elektrický prúd</strong> je usporiadaný pohyb nabitých častíc, v kovoch najmä elektrónov. Označuje sa $I$ a jednotkou je ampér (A).
       Ak cez prierez vodiča prejde za čas $t$ náboj $Q$, prúd je $I = \\frac{Q}{t}$. Odtiaľ $1\\,\\text{A} = 1\\,\\text{C/s}$.</p>`,
      `<p>Smer prúdu sa dohodou označuje ako pohyb kladného náboja od kladného pólu zdroja k zápornému. Elektróny sa hýbu opačne.</p>`,
      `<p><strong>Elektrické napätie</strong> $U$ je rozdiel potenciálov, ktorý poháňa elektróny v obvode. Zdroj (batéria) ho vytvára medzi svojimi svorkami.
       Jednotka je volt (V).</p>`,
      `<ol>
         <li>Prúd meriame <strong>ampérmetrom</strong>, zapojeným do série so spotrebičom.</li>
         <li>Napätie meriame <strong>voltmetrom</strong>, zapojeným paralelne k spotrebiču.</li>
       </ol>`
    ],
    examples: [
      { task: 'Cez vodič prejde za $t = 10\\,\\text{s}$ náboj $Q = 20\\,\\text{C}$. Aký je prúd?',
        steps: ['$I = \\frac{Q}{t} = \\frac{20}{10}$.', '<strong>Výsledok: I = 2 A</strong>'] },
      { task: 'Ktorý prístroj meria prúd a ktorý napätie a ako sa zapájajú?',
        steps: ['Prúd meria ampérmeter zapojený v sérii.', 'Napätie meria voltmeter zapojený paralelne.', '<strong>Výsledok: ampérmeter meria prúd, voltmeter napätie.</strong>'] }
    ]
  });

  gen('r8-prud-napatie', () => {
    const I = rnd(1, 10), t = rnd(2, 20), Q = I * t;
    if (Math.random() < 0.6) {
      return {
        q: T`Cez prierez vodiča prešiel za $${t}\\,\\text{s}$ elektrický náboj $${Q}\\,\\text{C}$. Aká bola veľkosť prúdu v ampéroch?`,
        answer: I,
        solution: T`$I=\\frac{Q}{t}=\\frac{${Q}}{${t}}=${I}\\,\\text{A}$.`,
        hint: T.s('Prúd je náboj delený časom: $I=\\frac{Q}{t}$.'),
        mistakes: [
          { value: Q * t, msg: T`Náboj si vynásobil časom. Prúd sa počíta ako náboj delený časom.` },
          { value: Q, msg: T`Výsledok si nechal ako náboj. Musíš ho ešte vydeliť časom.` }
        ].filter((x) => x.value !== I)
      };
    }
    return {
      q: T`Vodičom preteká prúd $${I}\\,\\text{A}$ počas $${t}\\,\\text{s}$. Aký elektrický náboj pretečie prierezom vodiča?`,
      answer: Q,
      solution: T`$Q=I\\cdot t=${I}\\cdot ${t}=${Q}\\,\\text{C}$.`,
      hint: T.s('Náboj je súčin prúdu a času: $Q=I\\cdot t$.'),
      mistakes: [
        { value: I + t, msg: T`Prúd a čas si sčítal. Náboj je ich súčin.` },
        { value: I, msg: T`Výsledok je náboj, nie prúd. Náboj získame vynásobením prúdu a času.` }
      ].filter((x) => x.value !== Q)
    };
  });

  /* ---------- 8. elektrický obvod a odpor ---------- */

  lesson({
    id: 'r8-odpor', order: 80, theme: 'elektrina', title: 'Elektrický obvod a elektrický odpor',
    summary: 'Čo tvorí obvod a ako odpor brzdí prúd.',
    theory: [
      `<p><strong>Elektrický obvod</strong> je uzavretá dráha, po ktorej preteká prúd. Tvoria ho zdroj, spotrebiče, vodiče a spínač.
       Ak je obvod prerušený (napríklad rozpojeným spínačom), prúd netečie.</p>`,
      `<p><strong>Elektrický odpor</strong> $R$ brzdí pohyb elektrónov vo vodiči. Vzniká ich zrážkami s atómami látky.
       Jednotka je ohm ($\\Omega$). Odpor závisí od materiálu, dĺžky, prierezu a teploty vodiča.</p>`,
      `<p>Medzi napätím, prúdom a odporom platí vzťah $R = \\frac{U}{I}$. Pri rovnakom napätí väčší odpor znamená menší prúd.</p>`,
      `<ol>
         <li>Zisti napätie $U$ vo voltoch a prúd $I$ v ampéroch.</li>
         <li>Vypočítaj odpor podľa $R = \\frac{U}{I}$.</li>
       </ol>`
    ],
    examples: [
      { task: 'Žiarovka pri napätí $U = 12\\,\\text{V}$ prejde prúdom $I = 2\\,\\text{A}$. Aký má odpor?',
        steps: ['$R = \\frac{U}{I} = \\frac{12}{2}$.', '<strong>Výsledok: R = 6 Ω</strong>'] },
      { task: 'Ktorý vodič brzdí prúd viac: ten s väčším, alebo s menším odporom?',
        steps: ['Väčší odpor znamená, že elektróny prechádzajú ťažšie.', '<strong>Výsledok: vodič s väčším odporom.</strong>'] }
    ]
  });

  gen('r8-odpor', () => {
    const I = rnd(1, 8), R = rnd(2, 25), U = I * R;
    return {
      q: T`Žiarovka je pripojená na napätie $${U}\\,\\text{V}$ a prechádza ňou prúd $${I}\\,\\text{A}$. Aký je jej elektrický odpor v ohmoch?`,
      answer: R,
      solution: T`$R=\\frac{U}{I}=\\frac{${U}}{${I}}=${R}\\,\\Omega$.`,
      hint: T.s('Odpor vypočítame zo vzťahu $R=\\frac{U}{I}$.'),
      mistakes: [
        { value: U * I, msg: T`Napätie si vynásobil prúdom. Odpor sa počíta ako napätie delené prúdom.` },
        { value: I, msg: T`Odpor si zamenil s prúdom. Prúd je $I$, odpor je $R$.` }
      ].filter((x) => x.value !== R)
    };
  });

  /* ---------- 9. vodiče a izolanty ---------- */

  lesson({
    id: 'r8-vodice', order: 90, theme: 'elektrina', title: 'Elektrické vodiče a izolanty',
    summary: 'Ktoré látky vedú prúd a prečo, a na čo sa používajú.',
    theory: [
      `<p><strong>Vodič</strong> je látka, v ktorej sa elektróny môžu voľne pohybovať. Typickými vodičmi sú kovy, napríklad meď, hliník
       a železo, a grafit. <strong>Izolant</strong> (nevodič) má elektróny pevne viazané a prúd nevedie: napríklad plast, guma, sklo či suché drevo.</p>`,
      `<ul>
         <li>Kov: dobrý vodič, používa sa na vedenie prúdu.</li>
         <li>Plast a guma: izolanty, používajú sa ako obaly vodičov.</li>
         <li>Roztok soli vo vode: vedie prúd, lebo sa v ňom pohybujú nabité častice.</li>
         <li>Čistá destilovaná voda: prakticky izolant.</li>
       </ul>`,
      `<p>Vodiče používame na prenos prúdu, napríklad meď v kábloch. Izolanty ich obaľujú, aby sme sa nedotkli živého vodiča
       a prúd netiekol tam, kde nemá.</p>`,
      `<p>Polovodiče, napríklad kremík, sú medzi vodičmi a izolantmi. Vedú prúd len za určitých podmienok, a preto sa používajú v elektronike.</p>`
    ],
    examples: [
      { task: 'Prečo je medený drôt obalený plastom?',
        steps: ['Meď vedie prúd, plast nie je vodič.', 'Plast zabraňuje dotyku s vodičom a úniku prúdu.', '<strong>Výsledok: plast je izolant a chráni pred úrazom.</strong>'] },
      { task: 'Vedie prúd slaná voda?',
        steps: ['Soľ sa vo vode rozpustí a vytvorí nabité častice, ktoré môžu prenášať náboj.', '<strong>Výsledok: roztok soli vedie prúd, je vodič.</strong>'] }
    ]
  });

  const CONDUCTOR_CHOICES = [
    { q: 'Ktorý z týchto materiálov je dobrý vodič elektrického prúdu?', right: 'meď',
      why: 'Meď má veľa voľných elektrónov, ktoré sa ľahko pohybujú, preto vedie prúd.',
      wrong: [['plast', 'Plast je izolant: jeho elektróny sú pevne viazané.'],
        ['sklo', 'Sklo je izolant a prúd nevedie.']] },
    { q: 'Ktorý materiál vedie elektrický prúd?', right: 'hliník',
      why: 'Hliník je kov, má voľné elektróny a vedie prúd.',
      wrong: [['guma', 'Guma je izolant, preto sa používa na obaly vodičov.'],
        ['suché drevo', 'Suché drevo je izolant.']] },
    { q: 'Ktorý z týchto materiálov je izolant?', right: 'guma',
      why: 'Guma nevedie prúd, lebo jej elektróny sú pevne viazané v molekulách.',
      wrong: [['železo', 'Železo je kov a dobre vedie prúd.'],
        ['meď', 'Meď je jeden z najlepších vodičov.']] },
    { q: 'Ktorý z týchto materiálov nevedie elektrický prúd?', right: 'plast',
      why: 'Plast je izolant, jeho elektróny nie sú voľné.',
      wrong: [['meď', 'Meď je kov a vedie prúd.'],
        ['hliník', 'Hliník je kov a vedie prúd.']] }
  ];

  gen('r8-vodice', () => choiceFrom(CONDUCTOR_CHOICES, 'Pozri sa, či má materiál voľné elektróny (kovy), alebo sú elektróny viazané (izolanty).'));

  /* ---------- 10. bezpečnosť ---------- */

  lesson({
    id: 'r8-bezpecnost', order: 100, theme: 'elektrina', title: 'Bezpečnosť pri používaní elektrických zariadení',
    summary: 'Pravidlá, ktoré chránia pred úrazom elektrickým prúdom a požiarom.',
    theory: [
      `<p>Elektrický prúd prechádzajúci telom môže spôsobiť popáleniny, poruchu srdca či smrť. Preto dodržiavame pravidlá bezpečnosti.
       Nebezpečenstvo je väčšie, keď je koža mokrá, lebo voda zvyšuje vedenie prúdu.</p>`,
      `<ul>
         <li>Nedotýkaj sa elektrických zariadení mokrými rukami ani na mokrej podlahe.</li>
         <li>Nepoužívaj poškodené kábly a zástrčky; nikdy neťahaj za šnúru.</li>
         <li>Do zásuviek nestrkaj predmety, najmä nie kovové.</li>
         <li>Pri poruche zariadenie odpoj zo zásuvky a zavolaj odborníka.</li>
       </ul>`,
      `<p><strong>Poistka</strong> alebo <strong>istič</strong> preruší obvod pri veľkom prúde, napríklad pri skrate alebo preťažení.
       Tak zabránia prehriatiu vodičov a požiaru.</p>`,
      `<p><strong>Uzemnenie:</strong> kovové kryty spotrebičov sa spájajú so zemou. Pri poruche tak kryt nie je pod napätím a dotyk nie je nebezpečný.</p>`
    ],
    examples: [
      { task: 'Peter vytiahol zástrčku zo zásuvky mokrou rukou. Čo je v takom prípade nebezpečné?',
        steps: ['Voda na koži zvyšuje vedenie prúdu a prúd môže prejsť cez telo.', '<strong>Výsledok: hrozí úraz elektrickým prúdom. Zástrčku nikdy nechytaj s mokrými rukami.</strong>'] },
      { task: 'Ktorý prvok chráni vodič pred prehriatím pri skrate?',
        steps: ['Pri skrate je prúd veľmi veľký a vodič sa rýchlo zohrieva.', 'Poistka sa prepáli alebo istič vypne obvod.', '<strong>Výsledok: poistka alebo istič.</strong>'] }
    ]
  });

  const SAFETY_CHOICES = [
    { q: 'Ktoré správanie je pri elektrických zariadeniach bezpečné?', right: 'pred výmenou žiarovky vytiahnem zástrčku zo zásuvky',
      why: 'Odpojením zo siete sa obvod vypne a riziko úrazu sa zníži.',
      wrong: [['žiarovku vymením s mokrými rukami', 'Voda na rukách zvyšuje riziko úrazu prúdom.'],
        ['používam kábel, ktorý je oderený', 'Oderená izolácia môže spôsobiť úraz alebo skrat.']] },
    { q: 'Ktoré opatrenie chráni pred úrazom elektrickým prúdom?', right: 'kovové kryty spotrebičov sa uzemňujú',
      why: 'Uzemnenie odvádza prúd pri poruche mimo osoby, takže kryt nie je pod napätím.',
      wrong: [['kovové kryty sa nechávajú bez spojenia so zemou', 'Bez uzemnenia môže byť kryt pri poruche pod napätím.'],
        ['poistka sa nahradí drôtom', 'Drôt namiesto poistky necháva obvod bez ochrany pred prehriatím.']] },
    { q: 'Čo máme urobiť, ak sa spotrebič pri zapnutí iskrí a dymí?', right: 'odpojiť ho zo siete a zavolať odborníka',
      why: 'Odpojením sa prerušia prúd a riziko požiaru. Odborník chybu opraví.',
      wrong: [['dolievať vodu a znova ho zapnúť', 'Voda v blízkosti elektriny je veľmi nebezpečná.'],
        ['zakryť ho handrou, aby sa nerozptýlilo teplo', 'Zakrytím sa teplo zvyšuje a hrozí požiar.']] }
  ];

  gen('r8-bezpecnost', () => choiceFrom(SAFETY_CHOICES, 'Pri elektrine vždy najprv odpoj zdroj a potom sa dotýkaj zariadenia.'));
})();
