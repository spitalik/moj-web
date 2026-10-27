/* 1. ročník ZŠ: pozorovanie okolia, vlastnosti materiálov, voda a vzduch, svetlo a teplo, zmeny v prírode.
   Každá lekcia má jeden generátor výberových úloh (choice); nesprávne možnosti majú vysvetlenie typickej chyby. */
(function () {
  'use strict';

  const { pick, shuffle } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r1' }, l));
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

  /* ---------- Pozorovanie okolia ---------- */

  lesson({
    id: 'r1-pozorovanie', order: 10, theme: 'latky', title: 'Pozorovanie predmetov a javov',
    summary: 'Pozorovaním zistíš vlastnosti predmetov a rozlíšiš predmet od látky.',
    theory: [
      `<p>Pozorovanie je cieľavedomé sledovanie niečoho. Pri pozorovaní používame <strong>zmysly</strong>: zrak, sluch, hmat, čuch a chuť.
       Chuť a čuch však nikdy nepoužívame na neznáme látky bez dovolenia dospelého.</p>`,
      `<p><strong>Predmet</strong> je to, čo vidíme a vieme pomenovať, napríklad lopta, stolička alebo kniha.
       <strong>Látka</strong> je to, z čoho je predmet vyrobený, napríklad drevo, sklo alebo plast.</p>`,
      `<p>Pri opise predmetu hovoríme o jeho <strong>vlastnostiach</strong>: farbe, tvare, veľkosti, hmotnosti, tvrdosti alebo o tom, či sa leskne.
       Dobrý opis je presný a dá sa podľa neho predmet spoznať.</p>`,
      `<ul>
         <li>Jav je to, čo sa okolo nás deje, napríklad dážď, topenie snehu alebo padajúce lístie.</li>
         <li>Pri pozorovaní sa pýtame: čo vidím, čo počujem a čo sa mení?</li>
       </ul>`
    ],
    examples: [
      { task: 'Opíš vlastnosti lopty.',
        steps: ['Lopta je guľatá a pružná.', 'Má pestrú farbu a dá sa odraziť od zeme.', '<strong>Výsledok: guľatý, pružný predmet, ktorý sa odráža.</strong>'] },
      { task: 'Je drevo predmet, alebo látka?',
        steps: ['Drevo nie je jeden konkrétny tvar, ale materiál.', 'Z dreva vieme vyrobiť stoličku alebo stôl.', '<strong>Výsledok: drevo je látka.</strong>'] }
    ]
  });

  gen('r1-pozorovanie', () => choice(pick([
    { q: T`Ktorým zmyslom zistíš, či je polievka horúca?`, ok: T`hmatom`, bad: [T`zrakom`, T`sluchom`],
      hints: [T`Zrakom vidíš farbu, nie teplotu. Teplo však vieš ucítiť dotykom alebo blízkosťou.`, T`Sluchom počúvaš zvuky, teplotu z nich nezistíš.`],
      solution: T`Teplotu vnímame hmatom, napríklad keď sa dotkneme hrnčeka.`,
      hint: T`Pomysli na to, ako zistíš, že niečo pália.` },
    { q: T`Ktorým zmyslom zistíš, že je hudba hlasná?`, ok: T`sluchom`, bad: [T`chuťou`, T`čuchom`],
      hints: [T`Chuťou ochutnávame jedlo, hlasitosť nezistíš jazykom.`, T`Čuchom vnímame vône, nie hlasitosť.`],
      solution: T`Hlasitosť zvuku vnímame sluchom, ušami.`,
      hint: T`Zvuky vnímame ušami.` },
    { q: T`Ktorý z predmetov je látka, a nie predmet?`, ok: T`drevo`, bad: [T`stolička`, T`lopta`],
      hints: [T`Stolička je predmet, ktorý má konkrétny tvar a účel.`, T`Lopta je predmet, ktorý vieme pomenovať a držať v ruke.`],
      solution: T`Drevo je materiál, z ktorého sa vyrábajú predmety. Stolička a lopta sú predmety.`,
      hint: T`Látka je to, z čoho niečo je vyrobené.` },
    { q: T`Ktorý z javov pozoruješ v prírode?`, ok: T`padanie listov na jeseň`, bad: [T`kniha na poličke`, T`pero v peračníku`],
      hints: [T`Kniha na poličke sa nemení. Je to predmet, nie jav.`, T`Pero v peračníku stojí na mieste. Nedeje sa nič nové.`],
      solution: T`Padanie listov je jav: niečo sa v prírode deje a mení.`,
      hint: T`Jav je dej, ktorý sa mení v čase.` }
  ])));

  /* ---------- Vlastnosti materiálov ---------- */

  lesson({
    id: 'r1-vlastnosti-materialov', order: 20, theme: 'latky', title: 'Vlastnosti materiálov: tvrdosť, pružnosť, tvar',
    summary: 'Porovnáš materiály podľa tvrdosti, pružnosti a toho, či si zachovajú tvar.',
    theory: [
      `<p>Materiály sa od seba líšia. Dve dôležité vlastnosti sú <strong>tvrdosť</strong> a <strong>pružnosť</strong>.</p>`,
      `<ul>
         <li><strong>Tvrdý</strong> materiál sa ťažko poškriabe alebo stlačí, napríklad kameň alebo kov.</li>
         <li><strong>Mäkký</strong> materiál sa dá ľahko zarezať alebo stlačiť, napríklad mydlo alebo mäkké drevo.</li>
         <li><strong>Pružný</strong> materiál sa po stlačení alebo natiahnutí vráti do pôvodného tvaru, napríklad guma alebo pružina.</li>
       </ul>`,
      `<p><strong>Tvar</strong> niektorých materiálov sa dá ľahko zmeniť. Plastelína alebo hlina zostanú v novom tvare aj po pustení.
       Takýto materiál nie je pružný.</p>`,
      `<p><strong>Pokus:</strong> skús stlačiť gumu, plastelínu a kocku z dreva. Zapíš si, ktorá sa vráti do pôvodného tvaru.</p>`
    ],
    examples: [
      { task: 'Ktorý materiál je tvrdší, kameň alebo mydlo?',
        steps: ['Kameň sa ťažko zarezáva a mydlo ľahko.', '<strong>Výsledok: kameň je tvrdší.</strong>'] },
      { task: 'Ktorý materiál je pružný: plastelína, alebo guma?',
        steps: ['Po stlačení gumy sa vráti do pôvodného tvaru.', 'Plastelína si tvar po stlačení zachová.', '<strong>Výsledok: guma je pružná.</strong>'] }
    ]
  });

  gen('r1-vlastnosti-materialov', () => choice(pick([
    { q: T`Ktorý materiál je najtvrdší?`, ok: T`kameň`, bad: [T`mydlo`, T`papier`],
      hints: [T`Mydlo sa dá ľahko zarezať nožom. Je mäkké.`, T`Papier sa ľahko trhá a ohýba. Je mäkší než kameň.`],
      solution: T`Kameň sa ťažko poškriabe, preto je tvrdý.`,
      hint: T`Skús predstaviť, čo sa stane, keď materiál zatlačíš nechtom.` },
    { q: T`Ktorý materiál je pružný?`, ok: T`guma`, bad: [T`plastelína`, T`kocka z dreva`],
      hints: [T`Plastelína po stlačení zostane zdeformovaná, nevráti sa do tvaru.`, T`Drevená kocka sa stlačiť nedá a nevráti sa, je tuhá.`],
      solution: T`Guma sa po natiahnutí alebo stlačení vráti do pôvodného tvaru.`,
      hint: T`Pružný materiál sa vráti do pôvodného tvaru.` },
    { q: T`Ktorý materiál si po stlačení zachová nový tvar?`, ok: T`plastelína`, bad: [T`pružina`, T`gumová loptička`],
      hints: [T`Pružina sa po stlačení vracia do pôvodného tvaru.`, T`Gumová loptička sa po stlačení vráti do guľatého tvaru.`],
      solution: T`Plastelína nie je pružná, preto si po stlačení zachová nový tvar.`,
      hint: T`Pomysli na to, či sa materiál po tlaku vráti späť.` },
    { q: T`Ktorý materiál je mäkký a dá sa ľahko zarezať?`, ok: T`mydlo`, bad: [T`železo`, T`sklo`],
      hints: [T`Železo je tvrdý kov, zarezať ho je ťažké.`, T`Sklo je tvrdé a krehké, nedá sa ľahko zarezať.`],
      solution: T`Mydlo je mäkké, dá sa ľahko zarezať nožom.`,
      hint: T`Mäkké materiály sa ľahko deformujú a rezú.` }
  ])));

  /* ---------- Voda a vzduch ---------- */

  lesson({
    id: 'r1-voda-vzduch', order: 30, theme: 'tekutiny', title: 'Voda, vzduch a ich význam',
    summary: 'Opíšeš vlastnosti vody a vzduchu a vysvetlíš, prečo sú pre život dôležité.',
    theory: [
      `<p><strong>Voda</strong> je tekutá. Nemá vlastný tvar, zaberá tvar nádoby, v ktorej je. Voda tečie, preto je ľahké ju naliať.
       Bez vody by žiadny živočích ani rastlina nemohli prežiť.</p>`,
      `<p><strong>Vzduch</strong> nevidíme, ale je všade okolo nás. Cítime ho ako vietor alebo keď dýchame.
       Vzduch je dôležitý, lebo z neho dýchame a bez neho by nemohli rásť rastliny.</p>`,
      `<ul>
         <li>Voda je potrebná na pitie, varenie, umývanie a pre rastliny.</li>
         <li>Vzduch potrebujeme na dýchanie a jeho pohyb vytvára vietor.</li>
         <li>Vzduch vyplní balón, keď ho nafúkame. Balón sa zväčší, lebo vzduch zaberá miesto.</li>
       </ul>`,
      `<p><strong>Pokus:</strong> do pohára vlož papierovú vreckovku, pohár otoč dnom nahor a ponor do vody. Vreckovka zostane suchá, lebo vzduch v pohári nedovolí vode vniknúť.</p>`
    ],
    examples: [
      { task: 'Prečo potrebuje človek vodu?',
        steps: ['Voda je v tele a pomáha telu fungovať.', 'Bez vody by človek dlho neprežil.', '<strong>Výsledok: voda je potrebná pre život.</strong>'] },
      { task: 'Čo je v nafúknutom balóne?',
        steps: ['Balón sa nafúkal, ale nič sme do neho nedali.', 'Vzduch je všade okolo nás, aj v balóne.', '<strong>Výsledok: v balóne je vzduch.</strong>'] }
    ]
  });

  gen('r1-voda-vzduch', () => choice(pick([
    { q: T`Čo potrebuje človek na dýchanie?`, ok: T`vzduch`, bad: [T`voda`, T`piesok`],
      hints: [T`Vodu pijeme, dýchať vodu človek nevie.`, T`Piesok nie je súčasť vzduchu a dýchať ho nevieme.`],
      solution: T`Na dýchanie potrebujeme vzduch, ktorý obsahuje kyslík.`,
      hint: T`Pomysli na to, čo cítiš, keď sa nadýchneš.` },
    { q: T`Ktorá látka nemá vlastný tvar?`, ok: T`voda`, bad: [T`kameň`, T`drevo`],
      hints: [T`Kameň má tvar, ktorý si zachová aj bez nádoby.`, T`Drevo má pevný tvar, zachová si ho.`],
      solution: T`Voda je tekutina. Zaberá tvar nádoby, v ktorej je.`,
      hint: T`Nalej vodu do rôznych pohárov a sleduj tvar.` },
    { q: T`Čo dokazuje pokus s vreckovkou v pohári ponorenom do vody?`, ok: T`vzduch zaberá miesto`, bad: [T`voda je ťažšia ako vzduch`, T`vzduch sa dá ochutnať`],
      hints: [T`Vážením vody sa tento pokus nedokazuje.`, T`Vzduch sa nedá ochutnať. Pokus ukazuje, že vzduch zaberá miesto.`],
      solution: T`Vzduch v pohári nedovolí vode vniknúť. Zaberá priestor, ktorý by inak vyplnila voda.`,
      hint: T`Pozorne sleduj, či je vreckovka po vytiahnutí mokrá.` },
    { q: T`Prečo sa balón pri nafukovaní zväčšuje?`, ok: T`vzduch zaberá miesto`, bad: [T`balón je z vody`, T`balón sa roztiahne sám od seba`],
      hints: [T`Balón nie je z vody, je z gumy.`, T`Balón sa nerozťahuje sám, vzduch ho zväčšuje zvnútra.`],
      solution: T`Vzduch, ktorý do balóna dostaneme, zaberá miesto, preto sa balón zväčší.`,
      hint: T`Čo je v balóne, keď ho nafúkaš?` }
  ])));

  /* ---------- Svetlo a teplo ---------- */

  lesson({
    id: 'r1-svetlo-tien-teplo', order: 40, theme: 'svetlo', title: 'Svetlo, tieň a teplo v každodennom živote',
    summary: 'Zistíš, odkiaľ prichádza svetlo a teplo, a vysvetlíš, ako vzniká tieň.',
    theory: [
      `<p><strong>Slnko</strong> nám dáva svetlo aj teplo. Svetlo nám pomáha vidieť, teplo nás zohrieva.
       Aj žiarovka a sviečka dávajú svetlo a niektoré z nich aj teplo.</p>`,
      `<p>Keď svetlo narazí na predmet, ktorý nepustí svetlo cez seba, za predmetom vznikne <strong>tieň</strong>.
       Tieň je tmavé miesto, kam svetlo nedopadne.</p>`,
      `<ul>
         <li>Predmety z dreva alebo kameňa vrhajú tieň.</li>
         <li>Sklo a voda nechajú svetlo prejsť, preto tieň za nimi nie je tmavý.</li>
       </ul>`,
      `<p>V horúci letný deň hľadáme tieň stromu, lebo tam nás slnko tak nezohrieva. Teplo sa dostane k nám hlavne cez slnečné lúče, ktoré tieň zastavuje.</p>`
    ],
    examples: [
      { task: 'Prečo je pod stromom v slnečný deň tieň?',
        steps: ['Slnko svieti na strom.', 'Strom je nepriehľadný, svetlo ním neprejde.', '<strong>Výsledok: za stromom vznikne tieň.</strong>'] },
      { task: 'Ktorý predmet nám dáva svetlo aj teplo?',
        steps: ['Svetlo a teplo dáva predmet, ktorý horí alebo svieti.', 'Slnko svieti a hreje.', '<strong>Výsledok: slnko.</strong>'] }
    ]
  });

  gen('r1-svetlo-tien-teplo', () => choice(pick([
    { q: T`Ktorý zdroj nám dáva svetlo aj teplo?`, ok: T`slnko`, bad: [T`mesiac`, T`kniha`],
      hints: [T`Mesiac svieti len odrazeným svetlom slnka a nehreje.`, T`Kniha nie je zdroj svetla ani tepla.`],
      solution: T`Slnko je zdroj svetla aj tepla.`,
      hint: T`Pomysli na to, čo ťa v lete zohrieva.` },
    { q: T`Ktorý predmet vytvorí najtmavší tieň?`, ok: T`drevená doska`, bad: [T`sklenený pohár`, T`pohár s vodou`],
      hints: [T`Sklo nechá svetlo prejsť, tieň je preto slabší.`, T`Voda je priehľadná a svetlo cez ňu prejde.`],
      solution: T`Drevená doska je nepriehľadná, svetlo ňou neprejde, preto je tieň tmavý.`,
      hint: T`Tmavý tieň vzniká za predmetom, ktorý svetlo nepustí.` },
    { q: T`Prečo je v horúci deň v tieni príjemnejšie?`, ok: T`tieň zastavuje slnečné lúče`, bad: [T`tieň vydáva teplo`, T`v tieni je horšie vidieť`],
      hints: [T`Tieň teplo nevydáva, len bráni slnečným lúčom dopadnúť na nás.`, T`Vidieť je v tieni slabšie, ale to nie je dôvod, prečo je príjemnejšie.`],
      solution: T`V tieni nás slnečné lúče nezohrievajú tak silno, preto je príjemnejšie.`,
      hint: T`Čo robí tieň so slnečnými lúčmi?` },
    { q: T`Čo potrebujeme na to, aby vznikol tieň?`, ok: T`zdroj svetla a nepriehľadný predmet`, bad: [T`len tma`, T`len priehľadný predmet`],
      hints: [T`Tma nevytvára tieň. Tieň vzniká len vtedy, keď svetlo niečo zastaví.`, T`Priehľadný predmet svetlo prepúšťa a tieň nevytvorí.`],
      solution: T`Tieň vznikne, keď nepriehľadný predmet zastaví svetlo z nejakého zdroja.`,
      hint: T`Pri tieni sú potrebné dve veci.` }
  ])));

  /* ---------- Zmeny v prírode ---------- */

  lesson({
    id: 'r1-zmeny-prirody', order: 50, theme: 'vesmir', title: 'Pozorovanie zmien v prírode',
    summary: 'Opíšeš, ako sa príroda mení počas dňa a počas roka.',
    theory: [
      `<p>Príroda sa neustále mení. Niektoré zmeny sú rýchle, napríklad dážď alebo vietor. Iné sú pomalšie, napríklad rast stromu alebo striedanie ročných období.</p>`,
      `<ul>
         <li><strong>Jar</strong>: rastú kvety, stromy vypúšťajú listy, je teplejšie.</li>
         <li><strong>Leto</strong>: je najteplejšie, dni sú dlhé.</li>
         <li><strong>Jeseň</strong>: listy žltnú a opadávajú, je chladnejšie.</li>
         <li><strong>Zima</strong>: je najchladnejšie, často padá sneh a rastliny sú v kľude.</li>
       </ul>`,
      `<p>Počas dňa sa mení svetlo a teplota: ráno je chladnejšie, v poludnie najteplejšie, večer sa stmieva.
       Dni a noci sa striedajú, lebo sa Zem otáča.</p>`,
      `<p>Zmeny si môžeš zaznamenávať do kalendára v prírode, napríklad každý týždeň zapíšeš, koľko listov má strom.</p>`
    ],
    examples: [
      { task: 'Ktoré ročné obdobie je na jeseň?',
        steps: ['Na jeseni listy žltnú a opadávajú.', 'Je chladnejšie a dni sú kratšie.', '<strong>Výsledok: jeseň je obdobie, keď listy opadávajú.</strong>'] },
      { task: 'Prečo sa striedajú dni a noci?',
        steps: ['Zem sa otáča okolo svojej osi.', 'Keď je k Slnku obrátená naša strana, máme deň.', '<strong>Výsledok: otáčanie Zeme spôsobuje striedanie dňa a noci.</strong>'] }
    ]
  });

  gen('r1-zmeny-prirody', () => choice(pick([
    { q: T`Ktoré ročné obdobie je najteplejšie?`, ok: T`leto`, bad: [T`zima`, T`jeseň`],
      hints: [T`V zime je najchladnejšie, nie najteplejšie.`, T`Na jeseň je už chladnejšie a listy opadávajú.`],
      solution: T`Najteplejšie je v lete, dni sú dlhé a slnko nás zohrieva najviac.`,
      hint: T`Myslí na dlhé dni a kúpanie v rieke.` },
    { q: T`Čo sa stane s listami stromov na jeseň?`, ok: T`žltnú a opadávajú`, bad: [T`zelenejú a rastú`, T`začnú kvitnúť`],
      hints: [T`Zelenanie a rast patria skôr na jar.`, T`Kvitnutie patrí hlavne na jar.`],
      solution: T`Na jeseň listy žltnú a opadávajú, lebo sa rastliny pripravujú na zimu.`,
      hint: T`Pozri sa na strom v parku, keď je chladnejšie.` },
    { q: T`Čo spôsobuje, že sa striedajú dni a noci?`, ok: T`Zem sa otáča`, bad: [T`Slnko sa otáča okolo Zeme`, T`Mesiac sám svieti`],
      hints: [T`Slnko nekrúži okolo Zeme. Je to Zem, ktorá sa otáča.`, T`Mesiac nesvieti sám. Odráža svetlo zo Slnka.`],
      solution: T`Zem sa otáča okolo svojej osi. Keď je k Slnku obrátená naša strana, je deň.`,
      hint: T`Predstav si, že sa otáčaš pred lampou.` },
    { q: T`Ktorá zmena prebehne počas jari?`, ok: T`rastú kvety`, bad: [T`rieka zamŕza`, T`stromy strácajú všetky listy`],
      hints: [T`Zamŕzanie rieky je typické pre zimu.`, T`Stromy strácajú listy hlavne na jeseň a v zime.`],
      solution: T`Na jar sa oteplí a rastliny začínajú rásť a kvitnúť.`,
      hint: T`Na jar je príroda plná nového života.` }
  ])));
})();
