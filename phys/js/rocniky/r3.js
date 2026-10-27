/* 3. ročník ZŠ: látky a ich vlastnosti, merania dĺžky, času a teploty, teplo, rozpúšťanie, pohyb a sily, pozorovania.
   Výberové úlohy (choice) majú vysvetlenia typických chýb; jedna úloha s merania je číselná (num) s typickými chybami. */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r3' }, l));
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

  /* ---------- Látky a ich vlastnosti ---------- */

  lesson({
    id: 'r3-latky', order: 10, theme: 'latky', title: 'Látky a ich vlastnosti',
    summary: 'Porovnáš látky podľa priehľadnosti, tvrdosti, rozpustnosti a ďalších vlastností.',
    theory: [
      `<p>Každý predmet je vyrobený z nejakej <strong>látky</strong>. Tú istú látku však nájdeme v rôznych predmetoch: z dreva sa vyrobia stoličky aj ceruzky.</p>`,
      `<ul>
         <li><strong>Priehľadnosť</strong>: cez priehľadnú látku vidíme, napríklad sklo.</li>
         <li><strong>Tvrdosť</strong>: tvrdá látka sa ťažko poškriabe, napríklad kameň.</li>
         <li><strong>Rozpustnosť</strong>: rozpustná látka sa vo vode rozpustí a zmizne, napríklad cukor alebo soľ. Piesok sa vo vode nerozpustí.</li>
         <li><strong>Magnetickosť</strong>: magnet priťahuje železo a oceľ, nie drevo či plast.</li>
       </ul>`,
      `<p>Vlastnosti látok porovnávame tak, že pozorujeme, meriame a výsledky zapíšeme. Napríklad vieme zistiť, ktorá látka sa rozpustí rýchlejšie.</p>`,
      `<p><strong>Pokus:</strong> do troch pohárov s vodou daj cukor, piesok a kamienok. Sleduj, kde zmizne a kde zostane na dne.</p>`
    ],
    examples: [
      { task: 'Ktorá látka sa vo vode rozpustí: soľ, alebo piesok?',
        steps: ['Soľ sa vo vode rozpustí a zmizne.', 'Piesok zostáva na dne, nerozpúšťa sa.', '<strong>Výsledok: soľ.</strong>'] },
      { task: 'Ktorú látku magnet priťahuje: železný klinec, alebo drevenú paličku?',
        steps: ['Magnet priťahuje železo.', 'Drevo magnet nepriťahuje.', '<strong>Výsledok: železný klinec.</strong>'] }
    ]
  });

  gen('r3-latky', () => choice(pick([
    { q: T`Ktorá látka sa vo vode rozpustí?`, ok: T`cukor`, bad: [T`piesok`, T`kamienok`],
      hints: [T`Piesok sa vo vode nerozpúšťa, zostane na dne.`, T`Kamienok sa vo vode nerozpustí.`],
      solution: T`Cukor sa vo vode rozpúšťa, preto v pohári zmizne.`,
      hint: T`Pozoruj, či látka vo vode zmizne.` },
    { q: T`Ktorá látka je priehľadná?`, ok: T`sklo`, bad: [T`drevo`, T`kov`],
      hints: [T`Drevo je nepriehľadné, cez neho nevidíme.`, T`Kov je nepriehľadný, cez neho nevidíme.`],
      solution: T`Sklo prepúšťa svetlo, cez sklo vidíme jasne.`,
      hint: T`Priehľadnú látku vidíš cez.` },
    { q: T`Ktorá látka magnet nepriťahuje?`, ok: T`drevo`, bad: [T`železo`, T`oceľ`],
      hints: [T`Železo magnet priťahuje.`, T`Oceľ obsahuje železo, magnet ju priťahuje.`],
      solution: T`Drevo nie je kov, magnet ho nepriťahuje.`,
      hint: T`Magnet priťahuje hlavne kov so železom.` },
    { q: T`Ktorá látka je najtvrdšia?`, ok: T`kameň`, bad: [T`mydlo`, T`vosk`],
      hints: [T`Mydlo sa dá ľahko zarezať nožom.`, T`Vosk je mäkký a dá sa ľahko zdeformovať.`],
      solution: T`Kameň sa ťažko poškriabe, preto je tvrdý.`,
      hint: T`Pomysli, čo sa dá ľahko zarezať.` }
  ])));

  /* ---------- Merania dĺžky, času a teploty ---------- */

  lesson({
    id: 'r3-merania', order: 20, theme: 'opakovanie', title: 'Meranie dĺžky, času a teploty',
    summary: 'Zvolíš vhodný prístroj a jednotku a prevedieš jednoduché dĺžky.',
    theory: [
      `<p>Pri meraní vždy zisťujeme, <strong>koľko</strong> niečoho je, a porovnávame to s jednotkou. Každá veličina má svoju jednotku a prístroj.</p>`,
      `<ul>
         <li><strong>Dĺžka</strong>: meriame pravítkom alebo metrom. Jednotka je centimeter (cm) a meter (m).</li>
         <li><strong>Čas</strong>: meriame hodinami alebo stopkami. Jednotky sú sekunda (s), minúta (min) a hodina (h).</li>
         <li><strong>Teplota</strong>: meriame teplomerom. Jednotka je stupeň Celzia (°C).</li>
       </ul>`,
      `<p>Jeden meter má <strong>100 centimetrov</strong>. Pri prevode preto násobíme stovkou: 3 m = 300 cm.</p>`,
      `<p>Pri meraní dĺžky priloží pravítko na začiatok predmetu a odčítaj koniec v rovnakej úrovni, aby výsledok bol presný.</p>`
    ],
    examples: [
      { task: 'Koľko centimetrov je 4 metre?',
        steps: ['Jeden meter má 100 centimetrov.', 'Štyri metre majú $4 \\cdot 100 = 400$ centimetrov.', '<strong>Výsledok: 400 cm</strong>'] },
      { task: 'Ktorý prístroj použiješ na meranie času behu?',
        steps: ['Čas meriame prístrojom, ktorý ukazuje sekundy a minúty.', 'Teplomer meria teplotu, pravítko dĺžku.', '<strong>Výsledok: stopky.</strong>'] }
    ]
  });

  gen('r3-merania', () => {
    const n = rnd(2, 9);
    if (Math.random() < 0.5) {
      return {
        q: T`Koľko centimetrov je $${n}\\,\\text{m}$?`,
        answer: n * 100,
        solution: T`Jeden meter má 100 cm, preto $${n}\\cdot 100 = ${n * 100}$ cm.`,
        hint: T`Jeden meter má 100 centimetrov.`,
        // typické chyby: deliť namiesto násobenia; zabudnutá prevodná hodnota
        mistakes: [
          { value: n * 10, msg: T`Meter má 100 centimetrov, nie 10. Preto násobíš stovkou.` },
          { value: n, msg: T`To je počet metrov, nie centimetrov. Prepočítaj ho na centimetre.` }
        ],
        steps: [
          { q: T`Koľko centimetrov má jeden meter?`, answer: 100 },
          { q: T`Koľko centimetrov je $${n}$ metrov?`, answer: n * 100 }
        ]
      };
    }
    const pr = pick([
      { q: T`Ktorý prístroj meria teplotu?`, ok: T`teplomer`, bad: [T`pravítko`, T`stopky`],
        hints: [T`Pravítko meria dĺžku, nie teplotu.`, T`Stopky merajú čas, nie teplotu.`] },
      { q: T`Ktorý prístroj meria čas?`, ok: T`stopky`, bad: [T`teplomer`, T`pravítko`],
        hints: [T`Teplomer meria teplotu, nie čas.`, T`Pravítko meria dĺžku, nie čas.`] },
      { q: T`Ktorý prístroj meria dĺžku?`, ok: T`pravítko`, bad: [T`teplomer`, T`stopky`],
        hints: [T`Teplomer meria teplotu, nie dĺžku.`, T`Stopky merajú čas, nie dĺžku.`] }
    ]);
    return choice({ q: pr.q, ok: pr.ok, bad: pr.bad, hints: pr.hints,
      solution: T`Na túto veličinu sa používa daný prístroj: ${pr.ok}.`,
      hint: T`Každá veličina má svoj prístroj.` });
  });

  /* ---------- Teplo a zahrievanie ---------- */

  lesson({
    id: 'r3-teplo', order: 30, theme: 'teplo', title: 'Teplo a zahrievanie predmetov',
    summary: 'Vysvetlíš, ako sa predmety zahrievajú a ochladzujú, a prečo sa niektoré zahrejú rýchlejšie.',
    theory: [
      `<p><strong>Teplo</strong> prechádza z teplejšieho predmetu na chladnejší. Preto sa studená polievka v hrnci zohreje, keď ju položíme na horák.</p>`,
      `<ul>
         <li><strong>Tmavé predmety</strong> pohlcujú viac slnečného svetla, a preto sa zahrejú rýchlejšie.</li>
         <li><strong>Svetlé predmety</strong> odrážajú viac svetla, zahrejú sa pomalšie.</li>
         <li><strong>Kovy</strong> vedú teplo rýchlo, preto sa lyžica v horúcej polievke rýchlo zohreje.</li>
       </ul>`,
      `<p>Zahrievanie merame teplomerom. Teplota stúpa, keď predmet prijíma teplo, a klesá, keď teplo odovzdáva.</p>`
    ],
    examples: [
      { task: 'Ktorý predmet sa na slnku zahreje rýchlejšie: tmavé tričko, alebo biele tričko?',
        steps: ['Tmavé predmety pohlcujú viac svetla.', 'Biele predmety odrážajú svetlo a teplo.', '<strong>Výsledok: tmavé tričko sa zohreje rýchlejšie.</strong>'] },
      { task: 'Prečo sa kovová lyžica v horúcej polievke zohreje rýchlo?',
        steps: ['Kov vedie teplo rýchlo.', 'Teplo sa prenesie z polievky na lyžicu.', '<strong>Výsledok: kov rýchlo vedie teplo.</strong>'] }
    ]
  });

  gen('r3-teplo', () => choice(pick([
    { q: T`Ktorý predmet sa na slnku zohreje rýchlejšie?`, ok: T`tmavý`, bad: [T`svetlý`, T`lesklý biely`],
      hints: [T`Svetlé predmety odrážajú svetlo, zohrievajú sa pomalšie.`, T`Biely lesklý predmet odrazí väčšinu svetla, nezohreje sa tak rýchlo.`],
      solution: T`Tmavé predmety pohlcujú viac svetla a menej ho odrážajú, preto sa zohrejú rýchlejšie.`,
      hint: T`Ktoré oblečenie je v lete príjemnejšie?` },
    { q: T`Ktorým smerom prechádza teplo?`, ok: T`z teplejšieho predmetu na chladnejší`, bad: [T`z chladnejšieho na teplejší`, T`nikam, zostáva v predmete`],
      hints: [T`Teplo sa neprenáša opačným smerom sám od seba.`, T`Teplo sa prenáša medzi predmetmi, nezostáva uzamknuté.`],
      solution: T`Teplo vždy prechádza z teplejšieho telesa na chladnejšie.`,
      hint: T`Pomysli na studenú polievku na horáku.` },
    { q: T`Ktorý materiál vedie teplo najrýchlejšie?`, ok: T`kov`, bad: [T`drevo`, T`vzduch`],
      hints: [T`Drevo vedie teplo pomaly, preto sa drevená rukoväť nezohreje.`, T`Vzduch vedie teplo veľmi zle.`],
      solution: T`Kovy vedú teplo rýchlo, preto sa na nich rýchlo cítiť teplo.`,
      hint: T`Prečo je kovová lyžica horúca, keď je v polievke?` },
    { q: T`Ako meriame, že sa predmet zahrial?`, ok: T`teplomerom`, bad: [T`pravítkom`, T`stopkami`],
      hints: [T`Pravítko meria dĺžku, nie teplotu.`, T`Stopky merajú čas, nie teplotu.`],
      solution: T`Zmenu teploty meriame teplomerom.`,
      hint: T`Ktorý prístroj ukazuje teplotu?` }
  ])));

  /* ---------- Rozpúšťanie látok vo vode ---------- */

  lesson({
    id: 'r3-rozpustanie', order: 40, theme: 'tekutiny', title: 'Rozpúšťanie látok vo vode',
    summary: 'Zistíš, ktoré látky sa vo vode rozpustia, a aké faktory rozpúšťanie urýchľujú.',
    theory: [
      `<p><strong>Rozpúšťanie</strong> je, keď sa látka vo vode rozdrobí na také malé časti, že ich už nevidíme. Roztok je potom priehľadný.</p>`,
      `<ul>
         <li><strong>Rozpustné</strong> látky: cukor, soľ, kakao.</li>
         <li><strong>Nerozpustné</strong> látky: piesok, kamienky, olej (ten sa vo vode vrství navrch).</li>
       </ul>`,
      `<p>Rozpúšťanie ide rýchlejšie, keď:</p>
       <ol>
         <li>voda je teplá,</li>
         <li>látku miešame,</li>
         <li>látku najprv rozdrobíme na menšie kúsky.</li>
       </ol>`,
      `<p><strong>Pokus:</strong> do dvoch pohárov daj rovnaké množstvo cukru, jeden naplň teplou vodou a druhý studenou. Pozoruj, kde sa cukor rozpustí rýchlejšie.</p>`
    ],
    examples: [
      { task: 'Ktorá látka sa vo vode rozpustí: kamienok, alebo cukor?',
        steps: ['Cukor sa rozpúšťa vo vode.', 'Kamienok zostáva na dne.', '<strong>Výsledok: cukor.</strong>'] },
      { task: 'Kde sa cukor rozpustí rýchlejšie: v teplej, alebo v studenej vode?',
        steps: ['Teplé molekuly vody sa pohybujú rýchlejšie.', 'Rýchlejšie pohybujúca sa voda rozpustí cukor skôr.', '<strong>Výsledok: v teplej vode.</strong>'] }
    ]
  });

  gen('r3-rozpustanie', () => choice(pick([
    { q: T`Ktorá látka sa vo vode rozpustí?`, ok: T`soľ`, bad: [T`piesok`, T`kamienok`],
      hints: [T`Piesok sa vo vode nerozpúšťa, zostane na dne.`, T`Kamienok sa vo vode nerozpustí.`],
      solution: T`Soľ sa vo vode rozpúšťa a roztok je priehľadný.`,
      hint: T`Pozoruj, či látka vo vode zmizne.` },
    { q: T`Kde sa cukor rozpustí najrýchlejšie?`, ok: T`v teplej vode`, bad: [T`v studenej vode`, T`v ľade`],
      hints: [T`V studenej vode sa cukor rozpúšťa pomalšie.`, T`Ľad je pevný a cukor sa v ňom rozpúšťa veľmi ťažko.`],
      solution: T`V teplej vode sa častice rýchlejšie pohybujú a cukor sa rozpustí rýchlejšie.`,
      hint: T`Teplá voda je rýchlejšia.` },
    { q: T`Čo urýchli rozpúšťanie cukru vo vode?`, ok: T`miešanie`, bad: [T`zatvorenie pohára`, T`zníženie teploty`],
      hints: [T`Zatvorený pohár neurýchli rozpúšťanie, len sa voda neodparí.`, T`Chladná voda sa rozpúšťa pomalšie.`],
      solution: T`Miešanie prinesie čerstvú vodu k cukru, preto sa cukor rozpúšťa rýchlejšie.`,
      hint: T`Čo sa stane, keď cukor v lyžičke pomaly premiešavaš?` },
    { q: T`Ktorá látka ostane po premiešaní v pohári vody ako nerozpustená?`, ok: T`piesok`, bad: [T`cukor`, T`soľ`],
      hints: [T`Cukor sa rozpúšťa vo vode.`, T`Soľ sa rozpúšťa vo vode.`],
      solution: T`Piesok sa vo vode nerozpustí, zostane na dne.`,
      hint: T`Ktorá látka zostane vidieť na dne?` }
  ])));

  /* ---------- Pohyb a sily ---------- */

  lesson({
    id: 'r3-pohyb', order: 50, theme: 'sily', title: 'Pohyb predmetov a pôsobenie síl',
    summary: 'Opíšeš, ako sily uvádzajú predmety do pohybu alebo ich zastavujú.',
    theory: [
      `<p>Predmet sa hýbe, keď naň niečo <strong>pôsobí</strong>. Pôsobenie sa volá <strong>sila</strong>. Silu môžeme tlačiť alebo ťahať.</p>`,
      `<ul>
         <li><strong>Gravitačná sila</strong> ťahá predmety k zemi. Vďaka nej padá lopta dole.</li>
         <li><strong>Trenie</strong> pôsobí medzi predmetmi, ktoré sa dotýkajú. Spomaľuje pohyb, napríklad loptu na tráve.</li>
         <li><strong>Magnetická sila</strong> pôsobí medzi magnetom a železom.</li>
       </ul>`,
      `<p>Sila môže predmet uviesť do pohybu, zrýchliť, spomaliť, alebo zmeniť smer pohybu.</p>`,
      `<p>Na stole stojí kniha, lebo ju tlačí zem nahor a gravitácia ju ťahá dolu. Tieto dve sily sa vyrovnajú, a preto sa kniha nehýbe.</p>`
    ],
    examples: [
      { task: 'Ktorá sila zastaví loptu, ktorá sa kotúľa po tráve?',
        steps: ['Tráva a lopta sa dotýkajú a trú sa o seba.', 'Tento odpor spomaľuje loptu.', '<strong>Výsledok: trenie.</strong>'] },
      { task: 'Prečo padne lopta, keď ju pustíme?',
        steps: ['Na loptu pôsobí gravitačná sila.', 'Tá ju ťahá k zemi.', '<strong>Výsledok: gravitačná sila.</strong>'] }
    ]
  });

  gen('r3-pohyb', () => choice(pick([
    { q: T`Ktorá sila spomaľuje loptu, ktorá sa kotúľa po tráve?`, ok: T`trenie`, bad: [T`magnetická sila`, T`zvuk`],
      hints: [T`Magnetická sila pôsobí len medzi magnetom a železom.`, T`Zvuk nie je sila, ktorá by spomaľovala loptu.`],
      solution: T`Trenie medzi loptou a trávou spomaľuje pohyb lopty.`,
      hint: T`Zamysli sa, čo sa deje, keď sa dve veci o seba trú.` },
    { q: T`Ktorá sila ťahá kameň, ktorý spadol z ruky, k zemi?`, ok: T`gravitačná sila`, bad: [T`magnetická sila`, T`trenie vzduchu v smere hore`],
      hints: [T`Kameň nie je magnet a nemá magnetickú silu k zemi.`, T`Trenie nie je hlavná sila, ktorá kameň ťahá dole.`],
      solution: T`Gravitačná sila ťahá všetky predmety k zemi, preto kameň padá.`,
      hint: T`Všetko, čo pustíš, padá dole.` },
    { q: T`Čo môže sila urobiť s predmetom?`, ok: T`uviesť ho do pohybu alebo zastaviť`, bad: [T`zmeniť jeho farbu`, T`zmeniť jeho chuť`],
      hints: [T`Sila nemení farbu predmetu.`, T`Chuť predmetu sila nemení.`],
      solution: T`Sila môže predmet uviesť do pohybu, zastaviť, spomaliť alebo zmeniť smer.`,
      hint: T`Pomysli na kopnutie do lopty.` },
    { q: T`Ktorý predmet sa zastaví najrýchlejšie na drsnom povrchu?`, ok: T`ten, čo sa trie o drsný povrch`, bad: [T`ten, čo sa pohybuje po ľade`, T`ten, čo nepôsobí trenie`],
      hints: [T`Ľad má malé trenie, predmet sa po ňom pohybuje dlhšie.`, T`Bez trenia by sa predmet nezastavil, a tak to nie je odpoveď.`],
      solution: T`Väčšie trenie spôsobuje rýchlejšie zastavenie, preto drsný povrch zastaví predmet skôr.`,
      hint: T`Na ľade sa korčuľuješ dlho, lebo trenie je malé.` }
  ])));

  /* ---------- Pozorovanie a zaznamenávanie ---------- */

  lesson({
    id: 'r3-zaznamenavanie', order: 60, theme: 'opakovanie', title: 'Pozorovanie a zaznamenávanie výsledkov pokusov',
    summary: 'Zapíšeš výsledky pokusu do tabuľky a z nich vyvodíš záver.',
    theory: [
      `<p>Pri pokuse nestačí len sledovať. Výsledky si musíme <strong>zaznamenať</strong>, inak si ich o chvíľu nepamätáme.</p>`,
      `<ol>
         <li>Zapíšeme si, čo sme robili a s čím.</li>
         <li>Počas pokusu zapisujeme namerané hodnoty do <strong>tabuľky</strong>.</li>
         <li>Na konci výsledky porovnáme a napíšeme <strong>záver</strong>.</li>
       </ol>`,
      `<p>Tabuľka má stĺpce pre jednotlivé merania. Napríklad čas, ktorý potrebuje cukor na rozpustenie, a teplotu vody. Vďaka tabuľke vidíme, ako súvisia dve veci.</p>`,
      `<p>Zapisuj presne, nie podľa toho, čo si myslíš. Ak výsledok nevyšiel tak, ako si čakal, napíš to tiež.</p>`
    ],
    examples: [
      { task: 'Čo je najlepšie urobiť s nameranými hodnotami počas pokusu?',
        steps: ['Hodnoty si rýchlo zabudneme, ak ich nezapíšeme.', 'Zapíšeme ich do tabuľky hneď, ako ich zmeriame.', '<strong>Výsledok: zapísať ich do tabuľky.</strong>'] },
      { task: 'Čo patrí do tabuľky pri pokuse s rozpúšťaním?',
        steps: ['Pri pokuse meriame čas a teplotu vody.', 'Tieto hodnoty zapisujeme do stĺpcov.', '<strong>Výsledok: čas rozpúšťania a teplota vody.</strong>'] }
    ]
  });

  gen('r3-zaznamenavanie', () => choice(pick([
    { q: T`Čo je najlepšie urobiť s nameranými hodnotami počas pokusu?`, ok: T`zapísať ich hneď do tabuľky`, bad: [T`zapamätať si ich bez zápisu`, T`zapísať ich až o týždeň`],
      hints: [T`Bez zápisu si hodnoty rýchlo zabudneme.`, T`Ak zápis odložíme, môžeme zabudnúť alebo pomiešať hodnoty.`],
      solution: T`Hodnoty zapisujeme hneď, aby sme ich nestratili a nepomiešali.`,
      hint: T`Čo je horšie, keď si niečo nezapíšeš?` },
    { q: T`Ako sa nazýva posledný krok pokusu, v ktorom napíšeme, čo výsledky znamenajú?`, ok: T`záver`, bad: [T`predpoklad`, T`pomôcka`],
      hints: [T`Predpoklad je odhad pred pokusom, nie hodnotenie výsledkov.`, T`Pomôcka je vec, ktorú používame, nie krok pokusu.`],
      solution: T`V závere vysvetlíme, čo nám výsledky ukázali.`,
      hint: T`Na konci pokusu povedz, čo si zistil.` },
    { q: T`Čo patrí do stĺpca tabuľky pri pokuse s rozpúšťaním?`, ok: T`čas rozpúšťania`, bad: [T`farba pohára`, T`meno pokusu`],
      hints: [T`Farba pohára nemá vplyv na rozpúšťanie a nie je meranie.`, T`Meno pokusu nie je nameraná hodnota.`],
      solution: T`Čas rozpúšťania je nameraná hodnota, preto patrí do tabuľky.`,
      hint: T`Patrí sem to, čo meriame.` },
    { q: T`Výsledok pokusu nevyšiel podľa predpokladu. Čo máme urobiť?`, ok: T`zapísať skutočný výsledok`, bad: [T`zmeniť výsledok, aby sedel`, T`pokus vôbec nezapisovať`],
      hints: [T`Zmenený výsledok skresľuje pravdu. Pokus má ukázať, čo sa naozaj stalo.`, T`Nezapísaný pokus nám nepomôže, z neho sa nedá nič poučiť.`],
      solution: T`Aj nesprávny predpoklad je užitočný. Zapíšeme skutočný výsledok a vyvodíme záver.`,
      hint: T`Pravdivý zápis je dôležitejší než správny výsledok.` }
  ])));
})();
