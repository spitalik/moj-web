/* 10. oblasť VŠ: astrofyzika a kozmológia (v10). Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt, shuffle } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v10' }, l));
  const gen = EXERCISES.register;

  lesson({
    id: 'v10-hviezdy', order: 10, theme: 'vesmir', title: 'Vznik, vývoj a štruktúra hviezd',
    summary: 'Ako hviezda vzniká, prečo je v rovnováhe a ako súvisí jej svietivosť s polomerom a teplotou.',
    theory: [
      `<p>Hviezda vzniká zo zhustenej oblasti medzihviezdneho plynu a prachu, tzv. hmloviny. Gravitácia materiál stláča,
       plyn sa zohrieva a keď teplota v jadre dosiahne približne desiatky miliónov kelvinov, začne sa termojadrová fúzia,
       pri ktorej sa vodík mení na hélium.</p>`,
      `<p><strong>Prečo hviezda nekolabuje?</strong> Gravitácia sa snaží hviezdu stlačiť dovnútra, tlak horúceho plynu
       a žiarenia pôsobí opačným smerom. Keď sú tieto dva účinky v rovnováhe, hovoríme o <em>hydrostatickej rovnováhe</em>.
       Hviezda je stabilná, pokiaľ táto rovnováha trvá.</p>`,
      `<p><strong>Svietivosť</strong> $L$ je celkový výkon, ktorý hviezda vyžiari. Podľa Stefanovho–Boltzmannovho zákona
       platí $L=4\\pi R^2\\sigma T^4$, kde $R$ je polomer a $T$ povrchová teplota. Svietivosť rastie s druhou mocninou
       polomeru, ale so štvrtou mocninou teploty, preto malá zmena teploty výrazne zmení jas.</p>`,
      `<p>Hviezdy usporadúvame do <strong>Hertzsprungovho–Russellovho diagramu</strong>: na vodorovnej osi je teplota (alebo farba),
       na zvislej svietivosť. Väčšina hviezd vrátane Slnka leží v pásme hlavnej postupnosti, kde hviezda spaľuje vodík v jadre.</p>`
    ],
    examples: [
      { task: 'Hviezda má trikrát väčší polomer ako Slnko a dvakrát vyššiu povrchovú teplotu. Koľkokrát je svietivejšia?',
        steps: [
          'Pomer svietivostí: $\\frac{L}{L_\\odot}=\\left(\\frac{R}{R_\\odot}\\right)^2\\left(\\frac{T}{T_\\odot}\\right)^4$.',
          '$=3^2\\cdot 2^4=9\\cdot 16=144$.',
          '<strong>Výsledok: 144-krát</strong>'
        ] }
    ]
  });

  gen('v10-hviezdy', () => {
    const r = rnd(2, 5), k = pick([2, 3]);
    const L = r * r * Math.pow(k, 4);
    return {
      q: T`Hviezda má $${r}$-krát väčší polomer ako Slnko a $${k}$-krát vyššiu povrchovú teplotu. Koľkokrát je svietivejšia ako Slnko?`,
      answer: L,
      solution: T`Svietivosť rastie s $R^2$ a $T^4$: $\\frac{L}{L_\\odot}=${r}^2\\cdot ${k}^4=${L}$.`,
      hint: T.s('Svietivosť závisí od polomeru na druhú a od teploty na štvrtú.'),
      // typické chyby: zabudnutá druhá mocnina polomeru; teplota iba na druhú
      mistakes: [
        { value: r * Math.pow(k, 4), msg: T`Zabudol si umocniť polomer na druhú. Polomer vo vzorci je $R^2$.` },
        { value: r * r * k * k, msg: T`Teplotu si umocnil len na druhú. Vo vzorci je $T^4$.` }
      ].filter((m) => m.value !== L),
      steps: [
        { q: T`Koľko je $${r}^2$?`, answer: r * r },
        { q: T`Koľko je $${k}^4$?`, answer: Math.pow(k, 4) },
        { q: T`Aký je súčin týchto dvoch čísel?`, answer: L }
      ]
    };
  });

  lesson({
    id: 'v10-galaxie', order: 20, theme: 'vesmir', title: 'Galaxie a ich vývoj',
    summary: 'Hlavné typy galaxií a to, ako sa líšia hviezdami, plynom a tvarom.',
    theory: [
      `<p>Galaxia je gravitačne viazaný systém hviezd, plynu, prachu a temnej hmoty. Galaxie sa delia najmä podľa tvaru:
       <strong>eliptické</strong> (hladké, pozostávajú z starých hviezd), <strong>špirálové</strong> (plochý disk s ramenami)
       a <strong>nepravidelné</strong>.</p>`,
      `<p>Tvar galaxie úzko súvisí s tým, koľko v nej ostáva plynu. Plyn je surovina pre nové hviezdy: v špirálových ramenách
       sa neustále rodia mladé modré hviezdy, kým v eliptických galaxiách plyn takmer došiel a tvorba hviezd utícha.</p>`,
      `<p>Galaxie vznikajú postupným zhlukovaním hmoty a často rastú <strong>zrážkami a splývaním</strong> s inými galaxiami.
       Gravitačná interakcia pritom môže pretvoriť tvar oboch galaxií a vyvolať novú vlnu tvorby hviezd.</p>`
    ],
    examples: [
      { task: 'Galaxia má hladký eliptický tvar a takmer žiadny plyn. Aké hviezdy v nej prevažujú?',
        steps: ['Tvorba hviezd v galaxii závisí od zásoby plynu.', 'Bez plynu sa nerodia nové hviezdy, zostávajú staré, červenkasté.', '<strong>Výsledok: staré hviezdy</strong>'] }
    ]
  });

  gen('v10-galaxie', () => {
    const TYPES = [T.s('eliptická'), T.s('špirálová'), T.s('nepravidelná')];
    const QS = [
      { q: T.s('Ktorý typ galaxie má hladký tvar, staré hviezdy a takmer žiadny plyn?'), a: 0 },
      { q: T.s('Ktorý typ galaxie má plochý disk s ramenami, v ktorých vznikajú nové hviezdy?'), a: 1 },
      { q: T.s('Ktorý typ galaxie nemá pravidelný tvar a často vzniká zrážkou galaxií?'), a: 2 }
    ];
    const HINT = [
      T.s('Eliptické galaxie sú hladké a obsahujú hlavne staré hviezdy, plyn im takmer došiel.'),
      T.s('Špirálové galaxie majú disk s plynom a mladými hviezdami v ramenách.'),
      T.s('Nepravidelné galaxie nemajú pravidelný tvar, často po zrážke s inou galaxiou.')
    ];
    const Q = pick(QS), key = Q.a;
    const choiceHints = {};
    TYPES.forEach((o, i) => { if (i !== key) choiceHints[o] = HINT[i]; });
    return {
      type: 'choice', options: shuffle(TYPES), answer: TYPES[key], choiceHints,
      q: Q.q,
      solution: T`Správny typ je ${TYPES[key]}: ${HINT[key]}`,
      hint: T.s('Vyhľadaj, kde sa nachádzajú mladé hviezdy a koľko plynu v galaxii ostáva.')
    };
  });

  lesson({
    id: 'v10-cierne-diery', order: 30, theme: 'vesmir', title: 'Čierne diery a neutrónové hviezdy',
    summary: 'Čo určuje polomer čiernej diery a prečo po vyčerpaní paliva vzniká neutrónová hviezda alebo čierna diera.',
    theory: [
      `<p>Keď hviezda s dostatočnou hmotnosťou vyčerpá jadrové palivo, jadro sa zrúti. Ak zvyšok hmoty nepresiahne približne
       1,4 hmotnosti Slnka, vytvorí sa <strong>neutrónová hviezda</strong>: hustá guľa s polomerom okolo 10 km, držaná tlakom neutrónov.</p>`,
      `<p><strong>Čierna diera</strong> vznikne, ak je hmotnosť väčšia. Gravitácia je v jej blízkosti tak silná, že ani svetlo
       nemôže unikať za hranicu nazývanú <em>horizont udalostí</em>. Polomer tejto hranice je Schwarzschildov polomer.</p>`,
      `<p>Schwarzschildov polomer je $r_s=\\frac{2GM}{c^2}$, kde $G$ je gravitačná konštanta, $M$ hmotnosť a $c$ rýchlosť svetla.
       Pre hmotnosť Slnka vychádza približne $2{,}95\\,\\text{km}$. Polomer je úmerný hmotnosti, takže dvojnásobne ťažká diera
       má dvojnásobný horizont.</p>`
    ],
    examples: [
      { task: 'Aký je Schwarzschildov polomer čiernej diery s hmotnosťou $5\\,M_\\odot$?',
        steps: ['$r_s\\approx 2{,}95\\,\\text{km}\\cdot 5$.', '$r_s\\approx 14{,}75\\,\\text{km}$.', '<strong>Výsledok: približne 14,75 km</strong>'] }
    ]
  });

  gen('v10-cierne-diery', () => {
    const n = rnd(1, 10), rs = 2.95 * n;
    const ans = Math.round(rs * 100) / 100;
    return {
      q: T`Aký je Schwarzschildov polomer čiernej diery s hmotnosťou $${n}\\,M_\\odot$ v kilometroch? Výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: ans,
      tol: 0.01,
      solution: T`$r_s=\\frac{2GM}{c^2}\\approx ${fmt(2.95)}\\,\\text{km}\\cdot ${n}=${fmt(ans)}\\,\\text{km}$.`,
      hint: T.s('Použi vzorec $r_s=\\frac{2GM}{c^2}$; pre Slnko je polomer približne 2,95 km a výsledok sa škáluje hmotnosťou.'),
      // typické chyby: zabudnutá dvojka vo vzorci; priemer namiesto polomeru
      mistakes: [
        { value: ans / 2, msg: T`Vo vzorci $r_s=\\frac{2GM}{c^2}$ nesmieš zabudnúť dvojku v čitateli.` },
        { value: 2 * ans, msg: T`Dostal si priemer horizontu. Vzorec dáva polomer $r_s$.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v10-exoplanety', order: 40, theme: 'vesmir', title: 'Exoplanéty a planetárne sústavy',
    summary: 'Ako astronómovia nachádzajú planéty pri iných hviezdach a čo z pozorovania zistia.',
    theory: [
      `<p><strong>Exoplanéta</strong> je planéta obiehajúca okolo inej hviezdy než Slnka. Priamo ju vidno len výnimočne,
       preto sa hľadá nepriamo, najčastejšie tranzitom alebo meraním pohybu hviezdy.</p>`,
      `<p><strong>Tranzitová metóda:</strong> keď planéta prejde pred hviezdou, jej jas krátko poklesne. Pokles jasu je
       úmerný ploche, ktorú planéta zakryje: $\\Delta\\text{jas}=\\left(\\frac{r_p}{R}\\right)^2$. Pozor, je to druhá mocnina pomeru polomerov.</p>`,
      `<p><strong>Dopplerova metóda:</strong> planéta gravitačne ťahá hviezdu, a tá sa v pozorovaní mierne pohybuje tam a späť.
       Posun spektrálnych čiar tento pohyb odhalí, aj keď planéta nie je vidieť.</p>`
    ],
    examples: [
      { task: 'Planéta má polomer desatinu polomeru hviezdy. O koľko percent klesne jas hviezdy pri tranzite?',
        steps: ['$\\left(\\frac{1}{10}\\right)^2=\\frac{1}{100}$.', 'Jas klesne o $1\\,\\%$.', '<strong>Výsledok: 1 %</strong>'] }
    ]
  });

  gen('v10-exoplanety', () => {
    const k = pick([5, 10, 20]);
    const ans = 100 / (k * k);
    return {
      q: T`Planéta prechádza pred hviezdou. Jej polomer je $${k}$-krát menší ako polomer hviezdy. O koľko percent klesne jas hviezdy? Zadaj v percentách.`,
      answer: ans,
      solution: T`Pomer plôch je $\\left(\\frac{1}{${k}}\\right)^2=\\frac{1}{${k * k}}$, teda pokles jasu je $\\frac{100}{${k * k}}=${fmt(ans)}\\,\\%$.`,
      hint: T.s('Pokles jasu je úmerný ploche kotúča planéty, nie jej polomeru. Umocni pomer polomerov na druhú.'),
      // typické chyby: pomer polomerov bez umocnenia na druhú
      mistakes: [
        { value: 100 / k, msg: T`Zabudol si umocniť pomer polomerov na druhú. Jas závisí od plochy, nie od polomeru.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v10-rozpinanie', order: 50, theme: 'vesmir', title: 'Rozpínanie vesmíru',
    summary: 'Hubbleov zákon: čím ďalej galaxia leží, tým rýchlejšie sa od nás vzďaľuje.',
    theory: [
      `<p>Edwin Hubble zistil, že spektrá vzdialených galaxií sú posunuté k červenej farbe. Tento <em>červený posuv</em> znamená,
       že galaxie sa od nás vzďaľujú. Čím je galaxia ďalej, tým väčší posuv má.</p>`,
      `<p><strong>Hubbleov zákon:</strong> $v=H_0\\,d$, kde $v$ je rýchlosť vzďaľovania, $d$ vzdialenosť a $H_0$ Hubbleova konštanta.
       Jej hodnota je približne $70\\,\\text{km/s/Mpc}$, pričom $1\\,\\text{Mpc}\\approx 3{,}26$ milióna svetelných rokov.</p>`,
      `<p>Dôležité je pochopiť, že sa <strong>nerozpínajú galaxie vo vesmíre</strong>, ale rozpína sa samotný priestor medzi nimi.
       Preto sa vzdialenejšie galaxie vzďaľujú rýchlejšie, aj keby nemali žiadnu vlastnú rýchlosť.</p>`
    ],
    examples: [
      { task: 'Galaxia je vzdialená $100\\,\\text{Mpc}$. Aká je jej rýchlosť vzďaľovania?',
        steps: ['$v=H_0\\,d=70\\cdot 100$.', '<strong>Výsledok: 7000 km/s</strong>'] }
    ]
  });

  gen('v10-rozpinanie', () => {
    const d = rnd(10, 60), ans = 70 * d;
    return {
      q: T`Galaxia je vzdialená $${d}\\,\\text{Mpc}$. Aká je jej rýchlosť vzďaľovania podľa Hubbleovho zákona $v=H_0\\,d$, ak $H_0=70\\,\\text{km/s/Mpc}$? Výsledok v km/s.`,
      answer: ans,
      solution: T`$v=H_0\\,d=70\\,\\frac{\\text{km}}{\\text{s}\\cdot\\text{Mpc}}\\cdot ${d}\\,\\text{Mpc}=${ans}\\,\\text{km/s}$.`,
      hint: T.s('Dosaď do Hubbleovho zákona; jednotka Mpc sa v súčine skráti.'),
      // typické chyby: delenie Hubbleovou konštantou; zabudnutá konštanta
      mistakes: [
        { value: d / 70, msg: T`Vzdialenosť si vydelil Hubbleovou konštantou. Vzťah je $v=H_0\\,d$, rýchlosť dostaneš vynásobením.` },
        { value: d, msg: T`Zabudol si Hubbleovu konštantu $H_0=70\\,\\text{km/s/Mpc}$.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v10-velky-tresk', order: 60, theme: 'vesmir', title: 'Veľký tresk a kozmické mikrovlnné pozadie',
    summary: 'Ako vznikol vesmír z horúcej fázy a prečo dnes pozorujeme slabé žiarenie zo všetkých smerov.',
    theory: [
      `<p>Podľa modelu <strong>Veľkého tresku</strong> bol vesmír kedysi veľmi hustý a horúci. Odvtedy sa rozpína a ochladzuje.
       Nejde o výbuch v prázdnom priestore, ale o rozpínanie samotného priestoru.</p>`,
      `<p>Krátko po začiatku bol vesmír plný žiarenia a zrazu sa stal priehľadným, keď sa vytvorili atómy. Toto žiarenie sa
       od tej doby len natiahlo, a dnes ho vidíme ako <strong>kozmické mikrovlnné pozadie</strong> s teplotou približne $2{,}725\\,\\text{K}$.</p>`,
      `<p>Rozpínanie zväčšuje vlnové dĺžky žiarenia v rovnakom pomere ako mierka vesmíru. Preto je teplota žiarenia v minulosti
       úmerná $(1+z)$, kde $z$ je červený posuv. Pri $z=1$ bola teplota dvojnásobná oproti dnešnej.</p>`
    ],
    examples: [
      { task: 'Aká bola teplota žiarenia pri červenom posuve $z=3$?',
        steps: ['$T(z)=T_0(1+z)=2{,}725\\cdot(1+3)$.', '$=10{,}9\\,\\text{K}$.', '<strong>Výsledok: približne 10,9 K</strong>'] }
    ]
  });

  gen('v10-velky-tresk', () => {
    const z = pick([1, 3, 4, 9]), T0 = 2.725, ans = T0 * (1 + z);
    return {
      q: T`Teplota kozmického mikrovlnného pozadia dnes je $T_0=${fmt(T0)}\\,\\text{K}$. Aká bola teplota žiarenia pri červenom posuve $z=${z}$? Vzorec je $T(z)=T_0(1+z)$. Výsledok v kelvinoch.`,
      answer: ans,
      tol: 0.001,
      solution: T`$T(z)=T_0(1+z)=${fmt(T0)}\\cdot(1+${z})=${fmt(ans)}\\,\\text{K}$.`,
      hint: T.s('Pri vyššom červenom posuve bol vesmír menší a teplejší. Dosaď do vzorca $T(z)=T_0(1+z)$.'),
      // typické chyby: obrátený vzťah; zabudnutá jednotka k posuvu
      mistakes: [
        { value: T0 / (1 + z), msg: T`Obrátil si vzťah. V minulosti bolo žiarenie teplejšie, teplota rástla s $z$.` },
        { value: T0 * z, msg: T`Zabudol si pripočítať 1 v zátvorke: $(1+z)$, nie $z$.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v10-temna-hmota', order: 70, theme: 'vesmir', title: 'Temná hmota a temná energia',
    summary: 'Dôkazy o neviditeľnej hmote a energii a ich podiel na celkovej hustote vesmíru.',
    theory: [
      `<p><strong>Temná hmota</strong> sa neviditeľne spája s gravitáciou, ale nevyžaruje ani nepohlcuje svetlo. Dôkazom je rýchlosť hviezd
       na okraji galaxií, ktorá by bez nej bola príliš veľká na to, aby sa galaxia udržala pohromade.</p>`,
      `<p><strong>Temná energia</strong> je zložka, ktorá urýchľuje rozpínanie vesmíru. Pozorovanie vzdialených supernov ukázalo,
       že rozpínanie sa v súčasnosti zrýchľuje.</p>`,
      `<p>Podiely súčasného vesmíru sú približne: obyčajná hmota $\\approx 5\\,\\%$, temná hmota $\\approx 27\\,\\%$ a temná energia $\\approx 68\\,\\%$.
       Ak je vesmír plochý, celková hustota je $\\Omega=1$ a platí $\\Omega_\\Lambda=1-\\Omega_m$.</p>`
    ],
    examples: [
      { task: 'Hustota hmoty je $\\Omega_m=0{,}3$. Aký podiel tvorí temná energia v plochom vesmíre?',
        steps: ['$\\Omega_\\Lambda=1-\\Omega_m=1-0{,}3$.', '<strong>Výsledok: 0,7</strong>'] }
    ]
  });

  gen('v10-temna-hmota', () => {
    const om = pick([0.2, 0.25, 0.3, 0.35]), ans = Math.round((1 - om) * 100) / 100;
    return {
      q: T`Plochý vesmír má celkovú hustotu $\\Omega=1$. Hustota hmoty je $\\Omega_m=${fmt(om)}$. Aký podiel tvorí temná energia $\\Omega_\\Lambda$? Zadaj ako desatinné číslo.`,
      answer: ans,
      tol: 0.001,
      solution: T`$\\Omega_\\Lambda=\\Omega-\\Omega_m=1-${fmt(om)}=${fmt(ans)}$.`,
      hint: T.s('Plochý vesmír má celkovú hustotu $\\Omega=1$. Zvyšok po hmote je temná energia.'),
      // typické chyby: podiel hmoty namiesto zvyšku; zabudnutá celková hustota
      mistakes: [
        { value: om, msg: T`To je iba hmota $\\Omega_m$. Temná energia je zvyšok do celkovej hustoty $\\Omega=1$.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v10-kozmologicke-modely', order: 80, theme: 'vesmir', title: 'Kozmologické modely vesmíru',
    summary: 'Ako celková hustota určuje, či je vesmír otvorený, plochý alebo uzavretý.',
    theory: [
      `<p>Kozmologický model popisuje geometriu a vývoj vesmíru. Kľúčové je pomer celkovej strednej hustoty $\\rho$ ku
       <em>kritickej hustote</em> $\\rho_c$, ktorý sa označuje $\\Omega=\\rho/\\rho_c$.</p>`,
      `<ol>
        <li>$\\Omega &lt; 1$: <strong>otvorený</strong> vesmír, ktorý sa rozpína navždy.</li>
        <li>$\\Omega = 1$: <strong>plochý</strong> vesmír, priestor má euklidovskú geometriu.</li>
        <li>$\\Omega &gt; 1$: <strong>uzavretý</strong> vesmír, ktorý má kladnú zakrivenosť.</li>
      </ol>`,
      `<p>Pozorovania reliktného žiarenia ukazujú, že súčasný vesmír je veľmi blízko plochého. Moderný model, ktorý
       zahŕňa temnú energiu, preto počíta s celkovou hustotou blízkou jednej.</p>`
    ],
    examples: [
      { task: 'Vesmír má $\\Omega=0{,}4$. Aký je jeho model?',
        steps: ['Porovnáme: $0{,}4&lt;1$.', '<strong>Výsledok: otvorený vesmír</strong>'] }
    ]
  });

  gen('v10-kozmologicke-modely', () => {
    const OPT = [T.s('otvorený'), T.s('plochý'), T.s('uzavretý')];
    const om = pick([0.3, 1, 1.6]);
    const key = om < 1 ? 0 : om === 1 ? 1 : 2;
    const HINT = [
      T.s('Otvorený vesmír má $\\Omega &lt; 1$: hustota je menšia ako kritická a rozpínanie pokračuje navždy.'),
      T.s('Plochý vesmír má $\\Omega = 1$: hustota je presne kritická.'),
      T.s('Uzavretý vesmír má $\\Omega &gt; 1$: hustota je väčšia ako kritická a gravitácia by mohla rozpínanie zastaviť.')
    ];
    const choiceHints = {};
    OPT.forEach((o, i) => { if (i !== key) choiceHints[o] = HINT[i]; });
    return {
      type: 'choice', options: shuffle(OPT), answer: OPT[key], choiceHints,
      q: T`Celková hustota vesmíru je $\\Omega=${fmt(om)}$, kde $\\Omega$ je pomer skutočnej hustoty ku kritickej. Aký geometrický model vesmíru zodpovedá tejto hodnote?`,
      solution: T`Hodnota $\\Omega=${fmt(om)}$ určuje, že vesmír je ${OPT[key]}. ${HINT[key]}`,
      hint: T.s('Porovnaj $\\Omega$ s hodnotou 1.')
    };
  });
})();
