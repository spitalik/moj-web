/* 7. ročník: pohyb, dráha, rýchlosť, sila, tiaž, trenie a svetlo: šírenie, odraz, lom a zrkadlá.
   Vzorový súbor ročníka: lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, shuffle, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r7' }, l));
  const gen = EXERCISES.register;

  // desatinné číslo v matematike: 2{,}7 (čiarka sa tak nerozpadne na medzeru)
  const mf = (x) => fmt(x).replace(/[,.]/, '{' + CONTENT_I18N.decimal() + '}');

  // otázka s výberom: o.a je správna možnosť, o.wrong sú nesprávne
  const choice = (o) => ({
    type: 'choice',
    options: shuffle([o.a, ...o.wrong]),
    answer: o.a,
    q: o.q,
    choiceHints: Object.fromEntries(o.wrong.map((w) => [w, T.s('Táto možnosť nesedí. Over si, čo presne tento pojem alebo jav znamená.')])),
    solution: o.solution || T.s('Správna odpoveď vyplýva z definície tohto pojmu.'),
    hint: o.hint || T.s('Pozri si v teórii, čo tento pojem presne znamená.')
  });

  /* ---------- pohyb ---------- */

  lesson({
    id: 'r7-pohyb', order: 10, theme: 'pohyb', title: 'Pohyb telies a jeho opis',
    summary: 'Pohyb a pokoj sú relatívne a závisia od vzťažnej sústavy.',
    theory: [
      `<p>Pohyb a pokoj sú <strong>relatívne</strong>: závisia od toho, voči čomu ich posudzujeme. Teleso, voči ktorému pohyb opisujeme, sa volá
       <strong>vzťažné teleso</strong>. Spolu s hodinami tvorí <strong>vzťažnú sústavu</strong>.</p>`,
      `<p>Cestujúci sediaci vo vlaku je v pokoji voči vlaku, ale pohybuje sa voči stromom pri trati. Obe tvrdenia sú pravdivé,
       každé však v inej vzťažnej sústave. Preto pri opise pohybu vždy povieme, voči čomu ho opisujeme.</p>`,
      `<ul>
         <li><strong>Trajektória</strong>: čiara, ktorú teleso pri pohybe opisuje.</li>
         <li><strong>Dráha</strong> $s$: dĺžka trajektórie medzi dvoma miestami. Meria sa v metroch.</li>
         <li><strong>Hmotný bod</strong>: teleso, ktorého rozmery pri opise pohybu zanedbáme.</li>
       </ul>`,
      `<p>Dráha je dĺžka celej trasy, nie vzdialenosť medzi začiatkom a koncom. Ak prejdeme 3 m na východ a potom 4 m na sever,
       dráha je $7\\,\\text{m}$, hoci vzdialenosť od štartu je len $5\\,\\text{m}$.</p>`
    ],
    examples: [
      { task: 'Pasažier sedí v rýchlom vlaku. Je v pokoji, alebo v pohybe?',
        steps: ['Voči vlaku, v ktorom sedí, sa nehýbe.', 'Voči stromom pri trati sa pohybuje.', '<strong>Výsledok: v pokoji voči vlaku, v pohybe voči okoliu.</strong>'] },
      { task: 'Chodec prešiel 3 m na východ a potom 4 m na sever. Aká je jeho dráha?',
        steps: ['Dráha je dĺžka celej trasy, preto sečítame obe úseky.', '$s = 3\\,\\text{m} + 4\\,\\text{m} = 7\\,\\text{m}$', '<strong>Výsledok: 7 m</strong>'] }
    ]
  });

  gen('r7-pohyb', () => {
    return choice(pick([
      { q: T.s('Cestujúci sedí v jedúcom vlaku. Voči ktorému telesu je v pokoji?'),
        a: T.s('voči vlaku'), wrong: [T.s('voči stromom pri trati'), T.s('voči nádraží')],
        solution: T.s('Cestujúci sa voči vlaku, v ktorom sedí, nehýbe. Voči okoliu sa však pohybuje.') },
      { q: T.s('Čo tvorí vzťažnú sústavu?'),
        a: T.s('vzťažné teleso a hodiny'), wrong: [T.s('dráha a čas'), T.s('rýchlosť a zrýchlenie')],
        solution: T.s('Vzťažná sústava je vzťažné teleso spolu s hodinami, pomocou ktorých merame čas.') },
      { q: T.s('Ako sa nazýva čiara, ktorú teleso pri pohybe opisuje?'),
        a: T.s('trajektória'), wrong: [T.s('rýchlosť'), T.s('zrýchlenie')],
        solution: T.s('Trajektória je čiara, ktorú teleso pri pohybe opisuje. Jej dĺžka je dráha.') },
      { q: T.s('Ktorá jednotka patrí dráhe?'),
        a: T.s('meter (m)'), wrong: [T.s('sekunda (s)'), T.s('meter za sekundu (m/s)')],
        solution: T.s('Dráha je dĺžka, meria sa v metroch. Sekunda je jednotka času a meter za sekundu jednotka rýchlosti.') }
    ]));
  });

  lesson({
    id: 'r7-draha', order: 20, theme: 'pohyb', title: 'Dráha, čas a priemerná rýchlosť',
    summary: 'Výpočet rýchlosti, dráhy a času a prepočet jednotiek m/s a km/h.',
    theory: [
      `<p><strong>Rýchlosť</strong> hovorí, akú dráhu teleso prejde za jednotku času. Vzorec: $v=\\frac{s}{t}$, kde $s$ je dráha a $t$ čas.
       Jednotka v sústave SI je $\\text{m/s}$, v cestnej doprave sa používa $\\text{km/h}$.</p>`,
      `<p>Z tohto vzorca odvodíme ďalšie dva: $s=v\\cdot t$ a $t=\\frac{s}{v}$. Pred výpočtom vždy skontroluj jednotky.
       Ak je dráha v kilometroch a čas v minútach, musíme jednu z veličín prepočítať.</p>`,
      `<ul>
         <li>$1\\,\\text{m/s}=3{,}6\\,\\text{km/h}$: z metrov za sekundu na kilometre za hodinu násobíme číslom $3{,}6$.</li>
         <li>$1\\,\\text{km/h}=\\frac{1}{3{,}6}\\,\\text{m/s}$: z kilometrov za hodinu na metre za sekundu delíme číslom $3{,}6$.</li>
       </ul>`,
      `<p><strong>Priemerná rýchlosť</strong> sa nerovná priemeru rýchlostí. Počíta sa ako celková dráha delená celkovým časom:
       $v_p=\\frac{s_{\\text{celk}}}{t_{\\text{celk}}}$. Ak sa auto na časti trasy zdržalo, jeho priemerná rýchlosť je menšia než najvyššia rýchlosť.</p>`
    ],
    examples: [
      { task: 'Auto prešlo $120\\,\\text{km}$ za $2\\,\\text{h}$. Aká bola jeho priemerná rýchlosť?',
        steps: ['$v=\\frac{s}{t}=\\frac{120}{2}$', '$v=60\\,\\text{km/h}$', '<strong>Výsledok: 60 km/h</strong>'] },
      { task: 'Cyklista sa pohybuje rýchlosťou $5\\,\\text{m/s}$. Akou rýchlosťou to je v $\\text{km/h}$?',
        steps: ['Z m/s na km/h prepočítame násobením číslom 3,6.', '$5\\cdot 3{,}6=18\\,\\text{km/h}$', '<strong>Výsledok: 18 km/h</strong>'] }
    ]
  });

  gen('r7-draha', () => {
    const k = rnd(1, 3);
    if (k === 1) {
      // dráha zo rýchlosti a času
      const v = rnd(20, 90), t = rnd(2, 5), s = v * t;
      return {
        q: T`Vlak ide stálou rýchlosťou $${v}\\,\\text{km/h}$ počas $${t}\\,\\text{h}$. Akú dráhu prejde? Výsledok zadaj v kilometroch.`,
        answer: s,
        solution: T`$s=v\\cdot t=${v}\\cdot ${t}=${s}\\,\\text{km}$.`,
        hint: T`Dráhu dostaneš vynásobením rýchlosti časom: $s=v\\cdot t$.`,
        mistakes: v + t !== s ? [{ value: v + t, msg: T`Dráhu nezískame sčítaním. Platí $s=v\\cdot t$.` }] : []
      };
    }
    if (k === 2) {
      // rýchlosť zo dráhy a času
      const v = rnd(30, 120), t = rnd(2, 6), s = v * t;
      return {
        q: T`Cyklista prešiel $${s}\\,\\text{km}$ za $${t}\\,\\text{h}$. Aká bola jeho priemerná rýchlosť v $\\text{km/h}$?`,
        answer: v,
        solution: T`$v=\\frac{s}{t}=\\frac{${s}}{${t}}=${v}\\,\\text{km/h}$.`,
        hint: T`Rýchlosť dostaneš vydelením dráhy časom: $v=\\frac{s}{t}$.`,
        mistakes: s * t !== v ? [{ value: s * t, msg: T`Rýchlosť sa počíta delením dráhy časom: $v=\\frac{s}{t}$, nie násobením.` }] : []
      };
    }
    // prepočet z m/s na km/h (výsledok môže mať jedno desatinné miesto)
    const ms = rnd(3, 30), ans = ms * 36 / 10;
    return {
      q: T`Rýchlosť je $${ms}\\,\\text{m/s}$. Koľko je to v $\\text{km/h}$?`,
      answer: ans,
      tol: 0.01,
      solution: T`$${ms}\\cdot 3{,}6=${mf(ans)}\\,\\text{km/h}$.`,
      hint: T`Z metrov za sekundu na kilometre za hodinu násobíme číslom 3,6.`,
      mistakes: Math.abs(ms / 3.6 - ans) > 0.01 ? [{ value: ms / 3.6, msg: T`Delil si číslom 3,6. Z m/s na km/h sa prepočítava násobením.` }] : []
    };
  });

  lesson({
    id: 'r7-rovnomerny', order: 30, theme: 'pohyb', title: 'Rovnomerný a nerovnomerný pohyb',
    summary: 'Kedy sa rýchlosť nemení a ako počítať pohyb, ktorého rýchlosť sa mení.',
    theory: [
      `<p><strong>Rovnomerný pohyb</strong>: teleso prejde za každý rovnaký časový úsek rovnakú dráhu, teda jeho rýchlosť sa nemení.
       V grafe závislosti dráhy od času je to priamka a jej sklon zodpovedá rýchlosti.</p>`,
      `<p><strong>Nerovnomerný pohyb</strong>: rýchlosť sa mení, teleso zrýchľuje alebo spomaľuje. Príklad je rozbiehajúci sa vlak alebo kameň padajúci k zemi.</p>`,
      `<p>Pri rovnomernom pohybe platí vzorec $s=v\\cdot t$, kde $v$ je stála rýchlosť. Pri nerovnomernom pohybe môžeme použiť
       <strong>priemernú rýchlosť</strong>: celková dráha delená celkovým časom. Ukazuje však len celkový výsledok, nie to, ako sa rýchlosť menila.</p>`,
      `<ol>
         <li>Ak za rovnaké časy prejde teleso rovnaké dráhy, pohyb je rovnomerný.</li>
         <li>Ak sa dráhy za rovnaké časy menia, pohyb je nerovnomerný.</li>
         <li>Priemernú rýchlosť nikdy nepočítame ako priemer dvoch rýchlostí.</li>
       </ol>`
    ],
    examples: [
      { task: 'Chodec kráča stálou rýchlosťou $4\\,\\text{km/h}$. Akú dráhu prejde za $3\\,\\text{h}$?',
        steps: ['Pohyb je rovnomerný, preto $s=v\\cdot t$.', '$s=4\\cdot 3=12\\,\\text{km}$', '<strong>Výsledok: 12 km</strong>'] },
      { task: 'Teleso za každú sekundu prejde 5 m. Aký je to pohyb a akú dráhu prejde za 6 s?',
        steps: ['Za rovnaké časy prejde rovnaké dráhy, pohyb je rovnomerný.', '$s = 5\\cdot 6 = 30\\,\\text{m}$', '<strong>Výsledok: rovnomerný pohyb, 30 m</strong>'] }
    ]
  });

  gen('r7-rovnomerny', () => {
    const k = rnd(1, 3);
    if (k === 1) {
      return choice(pick([
        { q: T.s('Auto jazdí po diaľnici stále rýchlosťou 90 km/h. Aký pohyb koná?'),
          a: T.s('rovnomerný pohyb'), wrong: [T.s('nerovnomerný pohyb')],
          solution: T.s('Rýchlosť sa nemení, preto ide o rovnomerný pohyb.') },
        { q: T.s('Kameň pustený z výšky padá k zemi a jeho rýchlosť sa zväčšuje. Aký pohyb koná?'),
          a: T.s('nerovnomerný pohyb'), wrong: [T.s('rovnomerný pohyb')],
          solution: T.s('Rýchlosť kameňa sa počas pádu mení, preto ide o nerovnomerný pohyb.') },
        { q: T.s('Vlak sa rozbieha zo stanice. Aký pohyb koná pri rozbiehaní?'),
          a: T.s('nerovnomerný pohyb'), wrong: [T.s('rovnomerný pohyb')],
          solution: T.s('Pri rozbiehaní sa rýchlosť zväčšuje, takže pohyb nie je rovnomerný.') },
        { q: T.s('Eskalátor ide stále rovnakou rýchlosťou. Aký pohyb koná?'),
          a: T.s('rovnomerný pohyb'), wrong: [T.s('nerovnomerný pohyb')],
          solution: T.s('Eskalátor má stálu rýchlosť, preto sa pohybuje rovnomerne.') }
      ]));
    }
    if (k === 2) {
      const v = rnd(2, 9), t = rnd(3, 12), s = v * t;
      return {
        q: T`Teleso sa pohybuje rovnomerne rýchlosťou $${v}\\,\\text{m/s}$. Akú dráhu prejde za $${t}\\,\\text{s}$?`,
        answer: s,
        solution: T`Pri rovnomernom pohybe je $s=v\\cdot t=${v}\\cdot ${t}=${s}\\,\\text{m}$.`,
        hint: T`Pri rovnomernom pohybe vynásob rýchlosť časom: $s=v\\cdot t$.`,
        mistakes: [{ value: t, msg: T`Zabudol si rýchlosť vynásobiť časom. Dráha je $s=v\\cdot t$.` }]
      };
    }
    // nerovnomerný pohyb: dva úseky s rôznou rýchlosťou, počíta sa priemerná rýchlosť
    const t1 = rnd(2, 6), t2 = rnd(2, 6), v1 = rnd(2, 8);
    let v2 = rnd(2, 8);
    while (v2 === v1) v2 = rnd(2, 8);
    const s1 = v1 * t1, s2 = v2 * t2, ans = (s1 + s2) / (t1 + t2);
    return {
      q: T`Teleso prejde prvý úsek rýchlosťou $${v1}\\,\\text{m/s}$ počas $${t1}\\,\\text{s}$ a druhý úsek rýchlosťou $${v2}\\,\\text{m/s}$ počas $${t2}\\,\\text{s}$. Aká je jeho priemerná rýchlosť?`,
      answer: ans,
      tol: 0.01,
      solution: T`Celková dráha je $${s1}+${s2}=${s1 + s2}\\,\\text{m}$, celkový čas $${t1}+${t2}=${t1 + t2}\\,\\text{s}$, teda $v_p=\\frac{${s1 + s2}}{${t1 + t2}}=${mf(ans)}\\,\\text{m/s}$.`,
      hint: T`Priemerná rýchlosť je celková dráha delená celkovým časom, nie priemer dvoch rýchlostí.`,
      mistakes: Math.abs((v1 + v2) / 2 - ans) > 0.01 ? [{ value: (v1 + v2) / 2, msg: T`Spriemeroval si rýchlosti. Priemerná rýchlosť sa počíta z celkovej dráhy a celkového času.` }] : []
    };
  });

  /* ---------- sily ---------- */

  lesson({
    id: 'r7-sila', order: 40, theme: 'sily', title: 'Sila a jej účinky',
    summary: 'Čo je sila, aké má účinky a ako sa sčítavajú sily s rovnakým a opačným smerom.',
    theory: [
      `<p><strong>Sila</strong> je vzájomné pôsobenie telies. Silu nevidíme, vidíme jej účinky. Značí sa $F$ a jej jednotkou je newton: $1\\,\\text{N}$.</p>`,
      `<ul>
         <li>Môže <strong>zmeniť rýchlosť</strong> telesa: rozbehnúť ho, spomaliť alebo zastaviť.</li>
         <li>Môže <strong>zmeniť smer</strong> pohybu, napríklad pri zatáčaní bicykla.</li>
         <li>Môže <strong>zmeniť tvar</strong> telesa: stlačiť špongiu alebo natiahnuť gumu.</li>
       </ul>`,
      `<p>Sila je <strong>vektor</strong>: má veľkosť, smer a miesto pôsobenia. Zapisujeme ju šípkou. Ak na teleso pôsobia sily v rovnakom smere,
       sčítame ich. Ak pôsobia v opačných smeroch, odčítame menšiu od väčšej a výsledná sila má smer väčšej.</p>`,
      `<p>Sily vznikajú vždy vo dvojiciach: ak ruka tlačí na stenu, stena tlačí na ruku rovnako veľkou silou opačného smeru.
       Tieto dve sily však nepôsobia na to isté teleso, preto sa navzájom neruší.</p>`
    ],
    examples: [
      { task: 'Dvaja žiaci ťahajú vozík rovnakým smerom silami $30\\,\\text{N}$ a $20\\,\\text{N}$. Aká je výsledná sila?',
        steps: ['Sily majú rovnaký smer, preto ich sčítame.', '$30 + 20 = 50$', '<strong>Výsledok: 50 N</strong>'] },
      { task: 'Ten istý vozík ťahá prvý žiak silou $30\\,\\text{N}$ doprava a druhý silou $20\\,\\text{N}$ doľava. Aká je výsledná sila?',
        steps: ['Sily majú opačný smer, preto ich odčítame.', '$30 - 20 = 10$, výsledná sila smeruje doprava.', '<strong>Výsledok: 10 N doprava</strong>'] }
    ]
  });

  gen('r7-sila', () => {
    if (Math.random() < 0.5) {
      const a = rnd(5, 40);
      let b = rnd(5, 40);
      while (b === a) b = rnd(5, 40);
      if (Math.random() < 0.5) {
        return {
          q: T`Dve sily pôsobia na teleso v rovnakom smere: $${a}\\,\\text{N}$ a $${b}\\,\\text{N}$. Aká je ich výsledná sila?`,
          answer: a + b,
          solution: T`Sily v rovnakom smere sa sčítajú: $${a}+${b}=${a + b}\\,\\text{N}$.`,
          hint: T`Sily s rovnakým smerom sčítaj.`,
          mistakes: [{ value: Math.abs(a - b), msg: T`Sily majú rovnaký smer, preto sa sčítajú, nie odčítajú.` }]
        };
      }
      return {
        q: T`Dve sily pôsobia na teleso v opačných smeroch: $${a}\\,\\text{N}$ a $${b}\\,\\text{N}$. Aká je ich výsledná sila?`,
        answer: Math.abs(a - b),
        solution: T`Sily v opačných smeroch sa odčítajú: $${Math.max(a, b)}-${Math.min(a, b)}=${Math.abs(a - b)}\\,\\text{N}$.`,
        hint: T`Sily s opačným smerom odčítaj a výsledok má smer väčšej sily.`,
        mistakes: [{ value: a + b, msg: T`Sily majú opačný smer, preto sa odčítajú, nie sčítajú.` }]
      };
    }
    return choice(pick([
      { q: T.s('Ktorá jednotka je jednotkou sily?'),
        a: T.s('newton (N)'), wrong: [T.s('joule (J)'), T.s('pascal (Pa)')],
        solution: T.s('Sila sa meria v newtonoch. Joule je jednotka energie a pascal jednotka tlaku.') },
      { q: T.s('Ktorý účinok sily sa prejaví zmenou tvaru telesa?'),
        a: T.s('stlačenie alebo natiahnutie pružiny'), wrong: [T.s('zmena rýchlosti telesa'), T.s('zmena hmotnosti telesa')],
        solution: T.s('Pri stlačení alebo natiahnutí sa mení tvar telesa. Hmotnosť sa silou nemení.') },
      { q: T.s('Ktorý účinok sily zodpovedá rozbehnutiu vozíka?'),
        a: T.s('zmena rýchlosti'), wrong: [T.s('zmena tvaru vozíka'), T.s('zmena hmotnosti vozíka')],
        solution: T.s('Rozbehnutie znamená, že sa zväčší rýchlosť vozíka.') }
    ]));
  });

  lesson({
    id: 'r7-tiaz', order: 50, theme: 'sily', title: 'Gravitačná sila a tiaž',
    summary: 'Prečo na Zemi padajú telesá a ako sa líši hmotnosť od tiaže.',
    theory: [
      `<p>Všetky telesá sa navzájom priťahujú <strong>gravitačnou silou</strong>. Čím sú hmotnosti väčšie a telesá bližšie, tým je príťažlivá sila väčšia.
       Gravitácia Zeme nás drží na povrchu a Mesiac obieha okolo Zeme.</p>`,
      `<p><strong>Tiaž</strong> $F_G$ je sila, ktorou Zem priťahuje teleso k sebe. Vypočítame ju zo vzorca $F_G=m\\cdot g$, kde $m$ je hmotnosť v kilogramoch
       a $g$ gravitačné zrýchlenie. Na Zemi je $g\\approx 10\\,\\text{N/kg}$ (presnejšie $9{,}81\\,\\text{N/kg}$).</p>`,
      `<p><strong>Hmotnosť a tiaž nie sú to isté.</strong> Hmotnosť v kilogramoch hovorí, koľko látky teleso obsahuje, a je všade rovnaká.
       Tiaž v newtonoch závisí od miesta. Na Mesiaci je $g\\approx 1{,}6\\,\\text{N/kg}$, takže teleso s hmotnosťou $5\\,\\text{kg}$ tam váži asi $8\\,\\text{N}$.</p>`,
      `<ul>
         <li>Tiaž je sila, meria sa silomerom v newtonoch.</li>
         <li>Hmotnosť meriame váhami v kilogramoch.</li>
       </ul>`
    ],
    examples: [
      { task: 'Aká je tiaž telesa s hmotnosťou $4\\,\\text{kg}$ na Zemi? Použi $g=10\\,\\text{N/kg}$.',
        steps: ['$F_G=m\\cdot g$', '$F_G=4\\cdot 10=40\\,\\text{N}$', '<strong>Výsledok: 40 N</strong>'] },
      { task: 'Teleso má na Zemi tiaž $60\\,\\text{N}$. Aká je jeho hmotnosť?',
        steps: ['$m=\\frac{F_G}{g}$', '$m=\\frac{60}{10}=6\\,\\text{kg}$', '<strong>Výsledok: 6 kg</strong>'] }
    ]
  });

  gen('r7-tiaz', () => {
    const k = rnd(1, 4);
    if (k === 1) {
      const m = rnd(1, 30);
      return {
        q: T`Aká je tiaž telesa s hmotnosťou $${m}\\,\\text{kg}$ na Zemi? Použi $g=10\\,\\text{N/kg}$.`,
        answer: m * 10,
        solution: T`$F_G=m\\cdot g=${m}\\cdot 10=${m * 10}\\,\\text{N}$.`,
        hint: T`Tiaž je sila, vypočítaš ju ako $F_G=m\\cdot g$.`,
        mistakes: [{ value: m, msg: T`Zabudol si vynásobiť hmotnosť gravitačným zrýchlením. Tiaž je v newtonoch: $F_G=m\\cdot g$.` }]
      };
    }
    if (k === 2) {
      const m = rnd(2, 30), F = m * 10;
      return {
        q: T`Teleso má na Zemi tiaž $${F}\\,\\text{N}$. Aká je jeho hmotnosť v kilogramoch? Použi $g=10\\,\\text{N/kg}$.`,
        answer: m,
        solution: T`$m=\\frac{F_G}{g}=\\frac{${F}}{10}=${m}\\,\\text{kg}$.`,
        hint: T`Hmotnosť dostaneš vydelením tiaže gravitačným zrýchlením: $m=\\frac{F_G}{g}$.`,
        mistakes: [{ value: F, msg: T`Hmotnosť si nechal rovnakú ako tiaž. Tiaž je v newtonoch, hmotnosť v kilogramoch: $m=\\frac{F_G}{g}$.` }]
      };
    }
    if (k === 3) {
      const m = 5 * rnd(1, 8), ans = m * 16 / 10;
      return {
        q: T`Aká je tiaž telesa s hmotnosťou $${m}\\,\\text{kg}$ na Mesiaci, kde $g\\approx 1{,}6\\,\\text{N/kg}$?`,
        answer: ans,
        solution: T`$F_G=m\\cdot g=${m}\\cdot 1{,}6=${ans}\\,\\text{N}$.`,
        hint: T`Na Mesiaci je gravitačné zrýchlenie menšie, preto je aj tiaž menšia. Vynásob hmotnosť číslom $1{,}6$.`,
        mistakes: [{ value: m * 10, msg: T`To je tiaž na Zemi. Na Mesiaci je gravitačné zrýchlenie menšie, $g\\approx 1{,}6\\,\\text{N/kg}$.` }]
      };
    }
    return choice({
      q: T.s('Ktorá veličina sa pri presune telesa z Zeme na Mesiac nemení?'),
      a: T.s('hmotnosť telesa'), wrong: [T.s('tiaž telesa'), T.s('gravitačné zrýchlenie')],
      solution: T.s('Hmotnosť hovorí, koľko látky je v telese, a tá sa presunom nezmení. Tiaž aj gravitačné zrýchlenie sa na Mesiaci zmenia.'),
      hint: T.s('Pomysli, či sa pri presune mení látka telesa.')
    });
  });

  lesson({
    id: 'r7-trenie', order: 60, theme: 'sily', title: 'Trenie a odpor prostredia',
    summary: 'Kedy je trenie väčšie, ako ho zväčšiť alebo zmenšiť a čo brzdí telesá v tekutinách.',
    theory: [
      `<p><strong>Trenie</strong> vzniká na dotykovej ploche dvoch telies a pôsobí proti pohybu, alebo proti snahe o pohyb. Preto sa skrinka, ktorú posúvame po podlahe,
       zastaví, keď prestaneme tlačiť.</p>`,
      `<ul>
         <li>Trenie je väčšie, čím sú povrchy drsnejšie.</li>
         <li>Trenie je väčšie, čím silnejšie teleso tlačí na podložku.</li>
         <li>Trenie nezávisí od veľkosti dotykovej plochy.</li>
       </ul>`,
      `<p><strong>Odpor prostredia</strong> (vzduch, voda) brzdí pohyb telesa. Závisí od tvaru telesa, od jeho rýchlosti a od hustoty prostredia.
       Padák má veľký odpor vzduchu, preto padá pomaly. Plavec s hladkým tvarom tela kladie vode menší odpor.</p>`,
      `<p>Trenie niekedy chceme zväčšiť, napríklad pri pneumatikách na ceste alebo pri chôdzi. Inokedy ho chceme zmenšiť, napríklad v ložiskách.
       Mazivo medzi povrchy vytvorí tenkú vrstvu, a tak trenie zmenší.</p>`
    ],
    examples: [
      { task: 'Skriňu ťahá sila $300\\,\\text{N}$ v smere pohybu a trenie je $120\\,\\text{N}$ proti pohybu. Aká je výsledná sila v smere pohybu?',
        steps: ['Trenie pôsobí proti pohybu, preto ho odčítame.', '$300-120=180$', '<strong>Výsledok: 180 N</strong>'] },
      { task: 'Ktorý spôsob zväčší trenie: zjazdové pneumatiky, alebo mazivo v ložisku?',
        steps: ['Zjazdové pneumatiky majú drsnejší povrch, trenie sa zväčší.', 'Mazivo medzi povrchy trenie zmenšuje.', '<strong>Výsledok: zjazdové pneumatiky</strong>'] }
    ]
  });

  gen('r7-trenie', () => {
    if (Math.random() < 0.5) {
      const Fz = rnd(100, 400), Ftr = rnd(10, Fz - 10), ans = Fz - Ftr;
      return {
        q: T`Teleso ťahá sila $${Fz}\\,\\text{N}$ v smere pohybu, trenie je $${Ftr}\\,\\text{N}$ a pôsobí proti pohybu. Aká je výsledná sila v smere pohybu?`,
        answer: ans,
        solution: T`Trenie pôsobí proti pohybu, preto $${Fz}-${Ftr}=${ans}\\,\\text{N}$.`,
        hint: T`Sily opačného smeru sa odčítavajú.`,
        mistakes: [{ value: Fz + Ftr, msg: T`Trenie pôsobí proti pohybu, preto sa od ťažnej sily odčíta, nepripočíta.` }]
      };
    }
    return choice(pick([
      { q: T.s('Kedy je trenie medzi dvoma telesami väčšie?'),
        a: T.s('keď sú povrchy drsnejšie'), wrong: [T.s('keď sú povrchy leštené'), T.s('keď je dotyková plocha menšia')],
        solution: T.s('Trenie závisí od drsnosti povrchov a od tlaku, ktorým jedno teleso pritláča na druhé, nie od veľkosti plochy.') },
      { q: T.s('Ktoré prostredie kladie najväčší odpor pohybu telesa?'),
        a: T.s('voda'), wrong: [T.s('vzduch'), T.s('vákuum')],
        solution: T.s('Voda má väčšiu hustotu ako vzduch, preto brzdí pohyb viac. Vo vákuu odpor prostredia nie je žiadny.') },
      { q: T.s('Ktoré opatrenie zmenší trenie v ložisku?'),
        a: T.s('pridanie maziva'), wrong: [T.s('zväčšenie drsnosti povrchov'), T.s('zvýšenie zaťaženia ložiska')],
        solution: T.s('Mazivo vytvorí medzi povrchmi tenkú vrstvu, takže sa trú menej.') },
      { q: T.s('Prečo padák pomaly klesá k zemi?'),
        a: T.s('veľký odpor vzduchu'), wrong: [T.s('malá tiaž padáka'), T.s('vysoká hustota padáka')],
        solution: T.s('Veľký odpor vzduchu vyrovnáva tiaž padáka, preto klesá pomaly.') }
    ]));
  });

  /* ---------- svetlo ---------- */

  lesson({
    id: 'r7-svetlo', order: 70, theme: 'svetlo', title: 'Svetlo a jeho šírenie',
    summary: 'Priamočiare šírenie svetla, rýchlosť svetla, tiene a zatmenia.',
    theory: [
      `<p>Svetlo je elektromagnetické žiarenie, ktoré vnímame zrakom. Svetelný zdroj vysiela svetlo do všetkých smerov.
       Teleso, ktoré svetlo sám nevydáva, vidíme preto, že odráža svetlo do našich očí.</p>`,
      `<p>V jednom prostredí sa svetlo šíri <strong>priamočiaro</strong>. Preto za nepriehľadným predmetom vzniká tieň: predmet zakryje svetlo za sebou.
       Veľký zdroj svetla vytvára aj polotieň, kde svieti len časť zdroja.</p>`,
      `<p>Rýchlosť svetla vo vákuu je $c=300\\,000\\,\\text{km/s}$, teda $3\\cdot 10^8\\,\\text{m/s}$. Vo vzduchu je takmer rovnaká,
       vo vode a v skle je menšia. Svetlo z Mesiaca k nám prichádza asi za $1{,}3\\,\\text{s}$, zo Slnka asi za 8 minút.</p>`,
      `<p>Zatmenie Slnka nastane, keď sa Mesiac dostane medzi Slnko a Zem a vrhne tieň na Zem. Zatmenie Mesiaca nastane, keď sa Zem dostane medzi Slnko a Mesiac.</p>`
    ],
    examples: [
      { task: 'Svetlo sa šíri rýchlosťou $300\\,000\\,\\text{km/s}$. Akú dráhu prejde za $10\\,\\text{s}$?',
        steps: ['$s=c\\cdot t$', '$s=300\\,000\\cdot 10=3\\,000\\,000\\,\\text{km}$', '<strong>Výsledok: 3 000 000 km</strong>'] },
      { task: 'Prečo vzniká tieň za stromom na slnku?',
        steps: ['Strom je nepriehľadný a svetlo sa šíri priamočiaro.', 'Svetlo nemôže prejsť cez strom, a tak za ním zostane tma.', '<strong>Výsledok: strom zakrýva svetlo, lebo sa šíri priamočiaro</strong>'] }
    ]
  });

  gen('r7-svetlo', () => {
    if (Math.random() < 0.5) {
      const t = rnd(1, 20), ans = 300000 * t;
      return {
        q: T`Svetlo sa šíri rýchlosťou $300\\,000\\,\\text{km/s}$. Akú dráhu prejde za $${t}\\,\\text{s}$? Výsledok zadaj v kilometroch.`,
        answer: ans,
        solution: T`$s=c\\cdot t=300\\,000\\cdot ${t}=${ans}\\,\\text{km}$.`,
        hint: T`Dráhu dostaneš vynásobením rýchlosti svetla časom: $s=c\\cdot t$.`,
        mistakes: [{ value: ans * 1000, msg: T`Výsledok je v metroch, nie v kilometroch. Na kilometre prepočítaš delením tisíckou.` }]
      };
    }
    return choice(pick([
      { q: T.s('V ktorom prostredí sa svetlo šíri najpomalšie?'),
        a: T.s('voda'), wrong: [T.s('vzduch'), T.s('vákuum')],
        solution: T.s('Vo vode sa svetlo šíri pomalšie než vo vzduchu alebo vo vákuu.') },
      { q: T.s('Prečo za nepriehľadným predmetom vzniká tieň?'),
        a: T.s('lebo sa svetlo šíri priamočiaro'), wrong: [T.s('lebo sa svetlo ohýba okolo predmetu'), T.s('lebo predmet vyžaruje tmu')],
        solution: T.s('Svetlo sa v jednom prostredí šíri priamočiaro, a preto predmet zakryje svetlo za sebou.') },
      { q: T.s('Prečo vidíme knihu, ktorá nie je zdrojom svetla?'),
        a: T.s('odráža svetlo do našich očí'), wrong: [T.s('sama vydáva svetlo'), T.s('pohlcuje všetko svetlo')],
        solution: T.s('Kniha odráža svetlo zo zdroja do našich očí. Ak by všetko svetlo pohlcovala, nevideli by sme ju.') },
      { q: T.s('Kedy nastane zatmenie Slnka?'),
        a: T.s('Mesiac sa dostane medzi Slnko a Zem'), wrong: [T.s('Zem sa dostane medzi Slnko a Mesiac'), T.s('Mesiac sa dostane za Zem')],
        solution: T.s('Pri zatmení Slnka vrhá Mesiac tieň na Zem, preto leží medzi Slnkom a Zemou.') }
    ]));
  });

  lesson({
    id: 'r7-odraz', order: 80, theme: 'svetlo', title: 'Odraz a lom svetla',
    summary: 'Zákon odrazu, uhly od kolmice a zalomenie lúča pri prechode do iného prostredia.',
    theory: [
      `<p>Svetelný lúč dopadá na rozhranie dvoch prostredí. Časť sa odrazí späť, časť prechádza do druhého prostredia.
       Uhly merame vždy od <strong>kolmice</strong>, teda od čiary kolmej na povrch, nie od povrchu.</p>`,
      `<p><strong>Zákon odrazu:</strong> uhol dopadu $\\alpha$ sa rovná uhlu odrazu $\\beta$, teda $\\alpha=\\beta$.
       Odrazený lúč leží v rovine, ktorú tvoria dopadajúci lúč a kolmica.</p>`,
      `<ul>
         <li>Pri prechode do prostredia, kde je svetlo pomalšie (napr. zo vzduchu do vody), sa lúč láme <strong>ku kolmici</strong>.</li>
         <li>Pri prechode do prostredia, kde je svetlo rýchlejšie (napr. z vody do vzduchu), sa lúč láme <strong>od kolmice</strong>.</li>
       </ul>`,
      `<p>Preto sa ceruzka ponorená do pohára s vodou zdá zlomená a dno bazéna sa zdá plytšie, ako naozaj je.</p>`
    ],
    examples: [
      { task: 'Lúč dopadá na rovinné zrkadlo tak, že s kolmicou zviera uhol $35^\\circ$. Aký uhol zviera odrazený lúč s kolmicou?',
        steps: ['Podľa zákona odrazu je uhol odrazu rovný uhlu dopadu.', '$\\beta=\\alpha=35^\\circ$', '<strong>Výsledok: 35°</strong>'] },
      { task: 'Lúč dopadá na zrkadlo tak, že s povrchom zrkadla zviera uhol $60^\\circ$. Aký je uhol dopadu voči kolmici?',
        steps: ['Uhly sa merajú od kolmice, nie od povrchu.', '$\\alpha = 90^\\circ - 60^\\circ = 30^\\circ$', '<strong>Výsledok: 30°</strong>'] }
    ]
  });

  gen('r7-odraz', () => {
    const k = rnd(1, 3);
    if (k === 1) {
      const th = rnd(10, 80);
      return {
        q: T`Lúč dopadá na rovinné zrkadlo pod uhlom $${th}^\\circ$ voči kolmici. Aký uhol zviera odrazený lúč s kolmicou?`,
        answer: th,
        solution: T`Zákon odrazu hovorí $\\beta=\\alpha$, teda uhol odrazu je $${th}^\\circ$.`,
        hint: T`Uhol odrazu sa rovná uhlu dopadu. Oba merame od kolmice.`,
        mistakes: 90 - th !== th ? [{ value: 90 - th, msg: T`Uhol sa meria od kolmice, nie od povrchu zrkadla. Uhol odrazu je rovnaký ako uhol dopadu.` }] : []
      };
    }
    if (k === 2) {
      const ph = rnd(10, 80);
      return {
        q: T`Lúč dopadá na zrkadlo tak, že s jeho povrchom zviera uhol $${ph}^\\circ$. Aký uhol zviera dopadajúci lúč s kolmicou?`,
        answer: 90 - ph,
        solution: T`Uhol od kolmice je $90^\\circ-${ph}^\\circ=${90 - ph}^\\circ$.`,
        hint: T`Uhly sa merajú od kolmice. Uhol od povrchu doplň do $90^\\circ$.`,
        mistakes: ph !== 90 - ph ? [{ value: ph, msg: T`Uhol dopadu sa meria od kolmice. Uhol od povrchu musíš doplniť do $90^\\circ$.` }] : []
      };
    }
    return choice(pick([
      { q: T.s('Ako sa láme lúč pri prechode svetla zo vzduchu do vody?'),
        a: T.s('ku kolmici'), wrong: [T.s('od kolmice'), T.s('nemení smer')],
        solution: T.s('Voda je opticky hustejšie prostredie, svetlo sa v nej šíri pomalšie, a preto sa lúč láme ku kolmici.') },
      { q: T.s('Ako sa láme lúč pri prechode svetla z vody do vzduchu?'),
        a: T.s('od kolmice'), wrong: [T.s('ku kolmici'), T.s('nemení smer')],
        solution: T.s('Vo vzduchu sa svetlo šíri rýchlejšie, preto sa lúč láme od kolmice.') }
    ]));
  });

  lesson({
    id: 'r7-zrkadla', order: 90, theme: 'svetlo', title: 'Zrkadlá, šošovky a optické javy',
    summary: 'Obraz v rovinnom zrkadle, spojná a rozptylná šošovka a javy ako dúha alebo miráž.',
    theory: [
      `<p><strong>Rovinné zrkadlo</strong> vytvára zdanlivý (virtuálny) obraz: vidíme ho za zrkadlom a nedá sa zachytiť na tienidle.
       Obraz je rovnako veľký, priamy a rovnako vzdialený za zrkadlom, ako je predmet pred ním.</p>`,
      `<p>Ak stojíš vo vzdialenosti $2\\,\\text{m}$ od zrkadla, tvoj obraz je od teba vzdialený $4\\,\\text{m}$. Vzdialenosť medzi predmetom a jeho obrazom
       je dvojnásobok vzdialenosti predmetu od zrkadla.</p>`,
      `<p><strong>Šošovky</strong> lámu svetlo. <strong>Spojka</strong> je hrubšia v strede a zbiera rovnobežné lúče do jedného bodu (ohniska).
       <strong>Rozptylka</strong> je tenšia v strede a lúče rozptyľuje. Spojka sa používa v lupe, fotoaparáte a na okuliare pri ďalekozrakosti.</p>`,
      `<p><strong>Optické javy:</strong> dúha vzniká rozkladom bieleho svetla v kvapkách vody. Miráž vzniká lomom svetla v teplom vzduchu
       nad horúcim povrchom cesty, takže vidíme odraz oblohy, akoby bola na zemi voda.</p>`
    ],
    examples: [
      { task: 'Predmet stojí pred rovinným zrkadlom vo vzdialenosti $3\\,\\text{m}$. Aká je vzdialenosť predmetu od jeho obrazu?',
        steps: ['Obraz je za zrkadlom rovnako vzdialený ako predmet pred ním.', '$3\\,\\text{m}+3\\,\\text{m}=6\\,\\text{m}$', '<strong>Výsledok: 6 m</strong>'] },
      { task: 'Ktorá šošovka zbiera rovnobežné lúče do jedného bodu?',
        steps: ['Zbiera lúče do bodu šošovka, ktorá je hrubšia v strede.', 'Šošovka hrubšia v strede je spojka.', '<strong>Výsledok: spojka</strong>'] }
    ]
  });

  gen('r7-zrkadla', () => {
    if (Math.random() < 0.5) {
      const d = rnd(1, 8);
      return {
        q: T`Predmet stojí pred rovinným zrkadlom vo vzdialenosti $${d}\\,\\text{m}$. Aká je vzdialenosť medzi predmetom a jeho obrazom?`,
        answer: 2 * d,
        solution: T`Obraz je za zrkadlom vo vzdialenosti $${d}\\,\\text{m}$, takže medzi predmetom a obrazom je $${d}+${d}=${2 * d}\\,\\text{m}$.`,
        hint: T`Medzi predmetom a obrazom je dvojnásobok vzdialenosti predmetu od zrkadla.`,
        mistakes: [{ value: d, msg: T`Počítal si len vzdialenosť od zrkadla. Obraz je za zrkadlom rovnako ďaleko, preto počítaj celú vzdialenosť: $2d$.` }]
      };
    }
    return choice(pick([
      { q: T.s('Aký je obraz predmetu v rovinnom zrkadle?'),
        a: T.s('zdanlivý, rovnako veľký a priamy'), wrong: [T.s('skutočný a zväčšený'), T.s('skutočný a zmenšený')],
        solution: T.s('Rovinné zrkadlo vytvára zdanlivý obraz rovnakej veľkosti. Skutočný obraz by sa dal zachytiť na tienidle.') },
      { q: T.s('Ktorá šošovka zbiera rovnobežné lúče do jedného bodu?'),
        a: T.s('spojka (hrubšia v strede)'), wrong: [T.s('rozptylka (tenšia v strede)'), T.s('rovinné zrkadlo')],
        solution: T.s('Spojka je hrubšia v strede a lúče zbieha do ohniska. Rozptylka lúče rozptyľuje.') },
      { q: T.s('Ktorý optický jav vzniká rozkladom bieleho svetla v kvapkách vody?'),
        a: T.s('dúha'), wrong: [T.s('miráž'), T.s('zatmenie Slnka')],
        solution: T.s('Biele svetlo sa v kvapkách rozkladá na farby, a tak vzniká dúha.') },
      { q: T.s('Ktorý optický jav vzniká lomom svetla v teplom vzduchu nad horúcim povrchom?'),
        a: T.s('miráž'), wrong: [T.s('dúha'), T.s('zatmenie Mesiaca')],
        solution: T.s('Svetlo sa láme v rôzne teplých vrstvách vzduchu, a preto vidíme na ceste zdanlivú vodu.') }
    ]));
  });
})();
