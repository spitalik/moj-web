/* 4. ročník ZŠ: svetlo a tieň, zvuk, magnety, jednoduché elektrické obvody, energia a bezpečnosť.
   Každá lekcia má jeden generátor výberových úloh (choice); nesprávne možnosti majú vysvetlenie typickej chyby. */
(function () {
  'use strict';

  const { pick, shuffle } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r4' }, l));
  const gen = EXERCISES.register;

  // Výberová úloha. ok = správna možnosť, bad = nesprávne možnosti,
  // hints = vysvetlenia pre nesprávne možnosti (zarovnané s bad; null = bez vysvetlenia).
  const choice = (it) => {
    const ex = { type: 'choice', options: shuffle([it.ok, ...it.bad]), answer: it.ok, q: it.q, solution: it.solution, hint: it.hint };
    const hints = it.hints || [];
    const choiceHints = {};
    it.bad.forEach((b, i) => { if (hints[i]) choiceHints[b] = hints[i]; });
    if (Object.keys(choiceHints).length) ex.choiceHints = choiceHints;
    return ex;
  };

  /* ---------- Svetlo a tieň ---------- */

  lesson({
    id: 'r4-svetlo-tien', order: 10, theme: 'svetlo', title: 'Svetlo, tieň a zdroje svetla',
    summary: 'Rozlíšiš zdroj svetla od osvetleného predmetu a vysvetlíš, ako vzniká tieň.',
    theory: [
      `<p>Svetlo sa šíri priamo. Predmet, ktorý svetlo sám vysiela, je <strong>zdroj svetla</strong>, napríklad slnko, žiarovka alebo sviečka.
       Mesiac, stôl alebo kniha svetlo nevysielajú. Len ho odrážajú, a preto ich vidíme.</p>`,
      `<p>Keď svetlo narazí na <strong>nepriehľadný</strong> predmet, za ním vznikne <strong>tieň</strong>. Svetlo sa za predmetom nedostane,
       pretože sa okolo neho nemôže ohnúť.</p>`,
      `<ul>
         <li>Nepriehľadné predmety, napríklad drevo alebo kameň, svetlo zastavia a vrhajú tmavý tieň.</li>
         <li>Priehľadné predmety, napríklad čisté sklo alebo voda, svetlo prepúšťajú. Tieň za nimi je slabý alebo žiadny.</li>
       </ul>`,
      `<p>Veľkosť tieňa závisí od vzdialenosti. Keď sa predmet približuje k zdroju svetla, tieň sa zväčšuje.
       Keď sa od zdroja vzďaľuje, tieň sa zmenšuje.</p>`
    ],
    examples: [
      { task: 'Ktorý predmet je zdroj svetla: sviečka, kniha alebo strom?',
        steps: ['Zdroj svetla svetlo vysiela. Kniha a strom svetlo len odrážajú.', 'Sviečka horí a vysiela svetlo.', '<strong>Výsledok: sviečka</strong>'] },
      { task: 'Prečo je v slnečnom dni za stromom tieň?',
        steps: ['Slnko je zdroj svetla.', 'Strom je nepriehľadný, svetlo ho nepresvieti.', '<strong>Výsledok: svetlo sa za stromom nedostane, preto tam vznikne tieň.</strong>'] }
    ]
  });

  gen('r4-svetlo-tien', () => choice(pick([
    { q: T`Ktorý predmet je zdroj svetla?`, ok: T`sviečka`, bad: [T`mesiac`, T`stôl`],
      hints: [T`Mesiac svetlo nevysiela. Len odráža svetlo zo Slnka.`, null],
      solution: T`Sviečka horí a sama vysiela svetlo. Mesiac a stôl svetlo len odrážajú.`,
      hint: T`Zdroj svetla svetlo sám vysiela, nie len odráža.` },
    { q: T`Ktorý predmet NIE je zdroj svetla?`, ok: T`zrkadlo`, bad: [T`žiarovka`, T`slnko`],
      hints: [T`Žiarovka svetlo vysiela, je to zdroj svetla.`, T`Slnko je najväčší zdroj svetla v našej blízkosti.`],
      solution: T`Zrkadlo svetlo len odráža. Žiarovka a slnko svetlo vysielajú.`,
      hint: T`Opýtaj sa, či predmet svetlo vysiela, alebo ho len odráža.` },
    { q: T`Predmet sa približuje k zdroju svetla. Tieň na stene bude...`, ok: T`väčší`, bad: [T`menší`, T`rovnako veľký`],
      hints: [T`Pri približovaní k zdroju sa tieň zväčšuje, nie zmenšuje.`, null],
      solution: T`Čím bližšie je predmet k zdroju svetla, tým väčší tieň vrhá na stenu.`,
      hint: T`Predstav si, že predmet zakrýva väčšiu časť svetla.` },
    { q: T`Ktorý predmet vrhá najtmavší tieň?`, ok: T`drevená doska`, bad: [T`čisté sklo`, T`vrstva čistej vody`],
      hints: [T`Sklo je priehľadné, svetlo ním prejde a tieň je slabý.`, T`Čistá voda je priehľadná, tieň za ňou je slabý.`],
      solution: T`Drevená doska je nepriehľadná. Svetlo ju nepresvieti, a preto vrhá najtmavší tieň.`,
      hint: T`Najtmavší tieň vrhá nepriehľadný predmet.` }
  ])));

  /* ---------- Zvuk ---------- */

  lesson({
    id: 'r4-zvuk', order: 20, theme: 'vlny', title: 'Zvuk a jeho vznik',
    summary: 'Vysvetlíš, že zvuk vzniká chvením telies, a rozlíšiš výšku a hlasnosť tónu.',
    theory: [
      `<p>Zvuk vzniká <strong>chvením</strong>, teda kmitaním telesa. Keď udrieš do ladičky alebo pustíš napnutú strunu gitary,
       teleso sa rýchlo chveje a rozkmitá okolitý vzduch.</p>`,
      `<p>Chvenie sa k nám šíri vzduchom ako <strong>zvuková vlna</strong>. Zvuk potrebuje látkové prostredie, napríklad vzduch, vodu alebo pevnú látku.
       Vo vákuu sa nešíri, preto v kozmickom priestore nepočuť výbuchy.</p>`,
      `<ul>
         <li><strong>Výška tónu</strong> závisí od rýchlosti kmitania. Rýchlejšie kmitanie znie vyššie.</li>
         <li><strong>Hlasnosť</strong> závisí od veľkosti kmitov. Väčší výkyv znie hlasnejšie.</li>
       </ul>`,
      `<p>Zvuk sa vo vzduchu šíri približne rýchlosťou $340\\,\\text{m/s}$. Svetlo sa šíri oveľa rýchlejšie, takmer okamžite.
       Preto pri búrke najprv vidíme blesk a až potom počujeme hrom.</p>`
    ],
    examples: [
      { task: 'Prečo pri búrke najprv vidíme blesk a až potom počujeme hrom?',
        steps: ['Svetlo sa šíri takmer okamžite.', 'Zvuk sa šíri vzduchom omnoho pomalšie.', '<strong>Výsledok: zvuk k nám dorazí neskôr ako svetlo.</strong>'] },
      { task: 'Čo musí urobiť teleso, aby vydávalo zvuk?',
        steps: ['Zvuk vzniká chvením telesa.', '<strong>Výsledok: teleso musí kmitať.</strong>'] }
    ]
  });

  gen('r4-zvuk', () => choice(pick([
    { q: T`Čím vzniká zvuk?`, ok: T`chvením (kmitaním) telesa`, bad: [T`odrazom svetla`, T`tým, že teleso stojí`],
      solution: T`Zvuk vzniká, keď sa teleso chveje a rozkmitá vzduch. Svetlo ani pokojný predmet zvuk nevytvárajú.`,
      hint: T`Zvuk je kmitanie, ktoré sa šíri k ušiam.` },
    { q: T`Kde sa zvuk nešíri?`, ok: T`vo vákuu`, bad: [T`vo vzduchu`, T`vo vode`],
      hints: [T`Vzduch je látka, zvuk sa ním šíri.`, T`Voda je látka, zvuk sa ňou šíri.`],
      solution: T`Zvuk potrebuje látkové prostredie. Vo vákuu, teda bez látok, sa nešíri.`,
      hint: T`Zvuk sa nešíri tam, kde nie je žiadna látka.` },
    { q: T`Struna kmitá rýchlejšie. Čo sa stane s tónom?`, ok: T`tón je vyšší`, bad: [T`tón je nižší`, T`tón je hlasnejší`],
      hints: [null, T`Hlasnosť závisí od veľkosti kmitov, nie od ich rýchlosti.`],
      solution: T`Rýchlejšie kmitanie znamená vyšší tón. Hlasnosť závisí od veľkosti výkyvu.`,
      hint: T`Výška tónu závisí od toho, ako rýchlo teleso kmitá.` },
    { q: T`Ktorá vlastnosť zvuku sa mení veľkosťou kmitov?`, ok: T`hlasnosť`, bad: [T`výška tónu`, T`rýchlosť šírenia`],
      hints: [T`Výška tónu závisí od rýchlosti kmitania, nie od veľkosti kmitov.`, null],
      solution: T`Väčší výkyv kmitajúceho telesa znie hlasnejšie. Výška tónu závisí od rýchlosti kmitania.`,
      hint: T`Hlasný zvuk vzniká väčším kmitaním.` }
  ])));

  /* ---------- Magnety ---------- */

  lesson({
    id: 'r4-magnety', order: 30, theme: 'magnetizmus', title: 'Magnetické vlastnosti predmetov',
    summary: 'Rozlíšiš predmety, ktoré magnet priťahuje, od tých, ktoré nepriťahuje.',
    theory: [
      `<p>Magnet <strong>priťahuje</strong> predmety zo železa, niklu a kobaltu, napríklad klinec alebo oceľovú sponu. Takým kovom hovoríme magnetické.
       Drevo, plast, sklo a väčšina ďalších kovov, napríklad meď, magnet nepriťahuje.</p>`,
      `<p>Každý magnet má dva <strong>póly</strong>: severný a južný. Opačné póly sa priťahujú, rovnaké sa odpudzujú.</p>`,
      `<p>Magnetický účinok prechádza aj cez papier alebo tenkú vrstvu plastu. Preto môže magnet priťahovať klinec ležiaci pod papierom.</p>`,
      `<p>Vlastnosť predmetu zistíme jednoduchým pokusom: priblížime magnet a pozorujeme, či sa predmet pohne.</p>`
    ],
    examples: [
      { task: 'Ktoré predmety príťahuje magnet: klinec, guma a plastové pravítko?',
        steps: ['Klinec je zo železa, magnet ho priťahuje.', 'Guma a plastové pravítko magnet nepriťahujú.', '<strong>Výsledok: len klinec.</strong>'] },
      { task: 'Dva magnety sa priblížia k sebe opačnými pólmi. Čo sa stane?',
        steps: ['Opačné póly sa priťahujú.', '<strong>Výsledok: magnety sa k sebe priťahujú.</strong>'] }
    ]
  });

  gen('r4-magnety', () => choice(pick([
    { q: T`Ktorý predmet magnet priťahuje?`, ok: T`železný klinec`, bad: [T`plastové pravítko`, T`drevená lyžička`],
      solution: T`Klinec je zo železa, a magnet železo priťahuje. Plast a drevo magnetické nie sú.`,
      hint: T`Magnet priťahuje železo, nikel a kobalt.` },
    { q: T`Ktorý predmet magnet NEpriťahuje?`, ok: T`medený drôt`, bad: [T`oceľová spona`, T`železný klinec`],
      hints: [T`Oceľ obsahuje železo, magnet ju priťahuje.`, null],
      solution: T`Meď nie je magnetický kov. Oceľ a železo magnet priťahuje.`,
      hint: T`Zisti, z akého kovu je predmet vyrobený.` },
    { q: T`Ktoré póly magnetov sa priťahujú?`, ok: T`severný a južný`, bad: [T`dva severné`, T`dva južné`],
      hints: [T`Dva severné póly sa odpudzujú.`, T`Dva južné póly sa odpudzujú.`],
      solution: T`Opačné póly sa priťahujú, rovnaké sa odpudzujú.`,
      hint: T`Priťahujú sa opačné póly.` },
    { q: T`Ktorý pól magnetu priťahuje južný pól iného magnetu?`, ok: T`severný`, bad: [T`južný`, T`žiadny`],
      hints: [T`Dva južné póly sa odpudzujú, nie priťahujú.`, null],
      solution: T`Južný pól priťahuje severný pól. Rovnaké póly sa odpudzujú.`,
      hint: T`Opačné póly sa priťahujú.` }
  ])));

  /* ---------- Jednoduché elektrické obvody ---------- */

  lesson({
    id: 'r4-elektricke-zariadenia', order: 40, theme: 'elektrina', title: 'Jednoduché elektrické zariadenia',
    summary: 'Poznáš súčasti jednoduchého elektrického obvodu a vieš, čo každá z nich robí.',
    theory: [
      `<p>Jednoduchý elektrický obvod tvoria <strong>zdroj</strong> (batéria), <strong>spotrebič</strong> (žiarovka, zvonček, ventilátor),
       <strong>vodiče</strong> (väčšinou medené drôty) a <strong>spínač</strong>.</p>`,
      `<ul>
         <li>Zdroj dodáva elektrickú energiu.</li>
         <li>Spotrebič elektrickú energiu premení na inú, napríklad na svetlo, teplo alebo pohyb.</li>
         <li>Spínač obvod zapína alebo vypína.</li>
       </ul>`,
      `<p>Elektrický prúd tečie len v <strong>uzavretom</strong> obvode. Ak je obvod prerušený, napríklad vypnutým spínačom, žiarovka nesvieti.</p>`,
      `<p>Vodiče prepúšťajú elektrický prúd, napríklad kovy. Izolanty, napríklad plast alebo guma, prúd neprepúšťajú. Preto sú na drôtoch obal z plastu a na rukoväti nástrojov guma.</p>`
    ],
    examples: [
      { task: 'Ktorá súčasť obvodu dodáva energiu?',
        steps: ['Zdroj dodáva elektrickú energiu, spotrebič ju spotrebúva.', '<strong>Výsledok: batéria (zdroj).</strong>'] },
      { task: 'Prečo žiarovka po vypnutí spínača nesvieti?',
        steps: ['Vypnutý spínač preruší obvod.', 'V prerušenom obvode prúd netečie.', '<strong>Výsledok: žiarovka nesvieti, lebo prúd netečie.</strong>'] }
    ]
  });

  gen('r4-elektricke-zariadenia', () => choice(pick([
    { q: T`Ktorá súčasť obvodu dodáva energiu?`, ok: T`batéria`, bad: [T`žiarovka`, T`spínač`],
      hints: [T`Žiarovka je spotrebič. Energiu spotrebúva, nedodáva ju.`, T`Spínač obvod len zapína alebo vypína.`],
      solution: T`Batéria je zdroj, dodáva elektrickú energiu. Žiarovka je spotrebič a spínač len uzatvára alebo preruší obvod.`,
      hint: T`Zdroj je to, z čoho prúd vychádza.` },
    { q: T`Ktorý materiál je vodič elektrického prúdu?`, ok: T`meď`, bad: [T`guma`, T`plast`],
      hints: [T`Guma je izolant. Prúd neprepúšťa.`, T`Plast je izolant. Prúd neprepúšťa.`],
      solution: T`Kovy, napríklad meď, prepúšťajú elektrický prúd. Guma a plast sú izolanty.`,
      hint: T`Vodiče sú väčšinou kovy.` },
    { q: T`Ktorý materiál je izolant?`, ok: T`guma`, bad: [T`meď`, T`železo`],
      hints: [T`Meď je kov a dobre vedie prúd.`, T`Železo je kov a vedie prúd.`],
      solution: T`Guma prúd neprepúšťa, je to izolant. Meď a železo sú kovy a vedú prúd.`,
      hint: T`Izolanty elektrický prúd neprepúšťajú.` },
    { q: T`Čo sa stane, keď je obvod prerušený?`, ok: T`prúd netečie a žiarovka nesvieti`, bad: [T`prúd tečie rýchlejšie`, T`žiarovka svieti jasnejšie`],
      hints: [T`Prerušený obvod prúd nepustí, takže nemôže tiecť rýchlejšie.`, null],
      solution: T`Prúd tečie len v uzavretom obvode. Pri prerušení sa zastaví.`,
      hint: T`Prúd potrebuje cestu, po ktorej tečie.` }
  ])));

  /* ---------- Energia a jej využitie ---------- */

  lesson({
    id: 'r4-energia', order: 50, theme: 'energia', title: 'Energia a jej využitie',
    summary: 'Rozpoznáš, na akú inú energiu sa mení energia v bežných zariadeniach.',
    theory: [
      `<p><strong>Energia</strong> sa nedá vytvoriť z ničoho ani zničiť. Len sa mení z jednej podoby na druhú. Jednotkou energie je joule, značka $\\text{J}$.</p>`,
      `<ul>
         <li><strong>Elektrická</strong> energia: zásuvka, batéria, nabíjačka.</li>
         <li><strong>Chemická</strong> energia: uložená v batérii alebo v potrave.</li>
         <li><strong>Pohybová</strong> energia: bežiaci človek, otáčajúci sa ventilátor.</li>
         <li><strong>Svetelná</strong> energia: slnko, žiarovka, displej.</li>
         <li><strong>Tepelná</strong> energia: horúca voda, nahriaty radiátor.</li>
         <li><strong>Zvuková</strong> energia: hudba z reproduktora, hlas.</li>
       </ul>`,
      `<p>Zariadenia energiu zvyčajne nepremieňajú iba na jednu podobu. Žiarovka dodá svetlo, ale väčšina jej energie sa mení na teplo. Preto je po zapnutí horúca.</p>`,
      `<p>Ventilátor mení elektrickú energiu na pohyb lopatiek. Reproduktor mení elektrickú energiu na zvuk.</p>`
    ],
    examples: [
      { task: 'Akú premenu energie robí elektrický ventilátor?',
        steps: ['Ventilátor je spotrebič elektrickej energie.', 'Motorček sa točí a lopatky sa pohybujú.', '<strong>Výsledok: elektrická energia sa mení na pohybovú.</strong>'] },
      { task: 'Akú premenu energie robí žiarovka?',
        steps: ['Žiarovka dostáva elektrickú energiu.', 'Vysiela svetlo a zároveň sa zohrieva.', '<strong>Výsledok: elektrická energia sa mení na svetelnú a tepelnú.</strong>'] }
    ]
  });

  gen('r4-energia', () => choice(pick([
    { q: T`Akú premenu energie robí elektrický ventilátor?`, ok: T`elektrickú na pohybovú`, bad: [T`elektrickú na svetelnú`, T`tepelnú na zvukovú`],
      hints: [T`Ventilátor svetlo nevytvára. Jeho hlavnou úlohou je pohyb vzduchu.`, null],
      solution: T`Ventilátor je spotrebič. Elektrická energia sa v motorčeku mení na pohyb lopatiek.`,
      hint: T`Pozri sa, čo sa v zariadení hýbe.` },
    { q: T`Akú premenu energie robí žiarovka?`, ok: T`elektrickú na svetelnú a tepelnú`, bad: [T`svetelnú na elektrickú`, T`zvukovú na pohybovú`],
      solution: T`Žiarovka vysiela svetlo, ale väčšina energie sa mení na teplo. Preto je horúca.`,
      hint: T`Žiarovka sa po zapnutí zohrieva.` },
    { q: T`Akú premenu energie robí reproduktor?`, ok: T`elektrickú na zvukovú`, bad: [T`zvukovú na elektrickú`, T`tepelnú na pohybovú`],
      hints: [T`Mikrofón robí opak: zvuk mení na elektrickú energiu.`, null],
      solution: T`Reproduktor dostáva elektrickú energiu a mení ju na zvukové vlnenie.`,
      hint: T`Zariadenie, ktoré vydáva zvuk, dostáva elektrickú energiu zo zdroja.` },
    { q: T`Akú premenu energie robí batéria v hračke?`, ok: T`chemickú na elektrickú`, bad: [T`pohybovú na tepelnú`, T`svetelnú na zvukovú`],
      solution: T`V batérii je uložená chemická energia. Pri používaní sa mení na elektrickú.`,
      hint: T`Batéria je zásobník energie, ktorá sa uvoľňuje pri používaní.` }
  ])));

  /* ---------- Bezpečnosť pri elektrických spotrebičoch ---------- */

  lesson({
    id: 'r4-bezpecnost', order: 60, theme: 'elektrina', title: 'Bezpečné správanie pri elektrických spotrebičoch',
    summary: 'Vieš, ktoré správanie pri elektrických spotrebičoch je bezpečné a ktoré nie.',
    theory: [
      `<p>Elektrina je užitočná, ale môže byť nebezpečná. Prúd, ktorý prejde telom, môže spôsobiť vážny úraz.
       Preto s elektrickými zariadeniami manipuluj len podľa pokynov dospelých.</p>`,
      `<ol>
         <li>Nikdy sa nedotýkaj zásuvky ani zástrčky mokrými rukami.</li>
         <li>Zariadenie odpájaj tak, že uchopíš zástrčku, nie šnúru.</li>
         <li>Ak je šnúra poškodená alebo odhalené vodiče, zariadenie nepoužívaj a oznám to dospelému.</li>
       </ol>`,
      `<p>Voda výborne vedie elektrický prúd, preto je spojenie vody a elektrických spotrebičov veľmi nebezpečné.
       Fén, nabíjačku ani iný spotrebič nepoužívaj v kúpeľni alebo pri vode.</p>`,
      `<p>Ak vidíš človeka, ktorý sa dotýka vedenia pod prúdom, nedotýkaj sa ho. Najprv zavolaj dospelého alebo záchrannú službu,
       aby sa prúd vypol.</p>`
    ],
    examples: [
      { task: 'Ako správne odpojiť žehličku od zásuvky?',
        steps: ['Ťahanie za šnúru môže poškodiť vodiče.', 'Správne je uchopiť zástrčku a vytiahnuť ju.', '<strong>Výsledok: ťaháme za zástrčku, nie za šnúru.</strong>'] },
      { task: 'Môžeš nabíjať telefón vo vlhkej kúpeľni?',
        steps: ['Voda dobre vedie elektrický prúd.', '<strong>Výsledok: nie, vo vlhku nie je bezpečné nabíjať.</strong>'] }
    ]
  });

  gen('r4-bezpecnost', () => choice(pick([
    { q: T`Ktoré správanie pri elektrických spotrebičoch je bezpečné?`, ok: T`odpojiť zariadenie tak, že uchopíš zástrčku`, bad: [T`vytiahnuť zástrčku ťahaním za šnúru`, T`dotknúť sa zásuvky mokrou rukou`],
      hints: [T`Ťahaním za šnúru sa môžu vodiče prerušiť alebo odhaliť.`, T`Voda vedie elektrický prúd. Zásuvky sa nikdy nedotýkaj mokrými rukami.`],
      solution: T`Zástrčku uchopíš a vytiahneš rovno. Šnúra sa pri ťahaní môže poškodiť.`,
      hint: T`Pri odpájaní držíš vždy zástrčku.` },
    { q: T`Ako reagovať na poškodenú šnúru spotrebiča?`, ok: T`nepoužívať ho a oznámiť to dospelému`, bad: [T`zalepiť ju páskou a používať ďalej`, T`používať ju opatrne, kým nevidno vodiče`],
      hints: [T`Páska poškodenú izoláciu nenahradí. Vodič môže stále odhaľovať prúd.`, T`Odhalené vodiče sú nebezpečné aj pri opatrnom používaní.`],
      solution: T`Poškodená šnúra môže viesť ku zásahu elektrickým prúdom. Spotrebič sa nepoužíva, kým ho neopraví odborník.`,
      hint: T`Pri poškodení elektrického zariadenia rozhoduje bezpečnosť, nie pohodlie.` },
    { q: T`Kde nie je bezpečné používať fén?`, ok: T`v kúpeľni pri vani s vodou`, bad: [T`v suchej izbe`, T`na suchej poličke`],
      solution: T`Fén používaj len na suchom mieste, ďaleko od vody. Voda a elektrický prúd sú nebezpečná kombinácia.`,
      hint: T`Pri vode je elektrický prúd nebezpečný.` },
    { q: T`Čo urobíš, ak vidíš človeka, ktorý sa dotýka vedenia pod prúdom?`, ok: T`najprv zavolám dospelého alebo záchrannú službu`, bad: [T`dotknem sa ho a odtiahnem`, T`pomôžem mu rukami`],
      hints: [T`Ak sa dotkneš človeka pod prúdom, môžeš sám dostať úraz.`, T`Ak sa dotkneš človeka pod prúdom, môžeš sám dostať úraz.`],
      solution: T`Najprv treba vypnúť prúd. Pomoc sa nesmie poskytnúť dotykom, ktorý prenesie prúd aj na teba.`,
      hint: T`Najprv zabezpeč, aby prúd nepreteká, až potom pomáhaj.` }
  ])));
})();
