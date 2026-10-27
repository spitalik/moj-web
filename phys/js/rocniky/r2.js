/* 2. ročník ZŠ: vlastnosti látok, pevné látky, kvapaliny a plyny, voda a vzduch, zmeny skupenstva, magnety, pokusy.
   Každá lekcia má jeden generátor výberových úloh (choice); nesprávne možnosti majú vysvetlenie typickej chyby. */
(function () {
  'use strict';

  const { pick, shuffle } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r2' }, l));
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

  /* ---------- Vlastnosti látok a predmetov ---------- */

  lesson({
    id: 'r2-vlastnosti-latok', order: 10, theme: 'latky', title: 'Vlastnosti látok a predmetov',
    summary: 'Rozlíšiš vlastnosti látok, ako sú priehľadnosť, pevnosť a schopnosť viesť elektrinu.',
    theory: [
      `<p>Každá látka má svoje <strong>vlastnosti</strong>. Podľa nich vieme vybrať, z čoho sa dá vyrobiť určitý predmet.
       Napríklad okno nevyrábame z dreva, lebo drevo nie je priehľadné.</p>`,
      `<ul>
         <li><strong>Priehľadná</strong> látka prepúšťa svetlo, napríklad sklo alebo čistá voda.</li>
         <li><strong>Nepriehľadná</strong> látka svetlo nepustí, napríklad drevo alebo kameň.</li>
         <li><strong>Lesklá</strong> látka odráža svetlo, napríklad kov.</li>
         <li><strong>Vodivá</strong> látka vedie elektrický prúd, napríklad kov. Plast je <strong>izolant</strong>, elektrický prúd nevedie.</li>
       </ul>`,
      `<p>Pri opise látky sa môžeme pýtať: je tvrdá, mäkká, priehľadná, lesklá, pružná? Čím presnejšie ju opíšeš, tým ľahšie ju spoznáš.</p>`,
      `<p><strong>Pokus:</strong> do tmy posvieť baterkou na sklo, drevo a fóliu. Zapíš si, ktorá látka pustila svetlo.</p>`
    ],
    examples: [
      { task: 'Prečo sa okná vyrábajú zo skla, a nie z dreva?',
        steps: ['Okno má byť priehľadné, aby cez neho prechádzalo svetlo.', 'Sklo je priehľadné, drevo nie.', '<strong>Výsledok: sklo je priehľadná látka, preto sa na okná hodí.</strong>'] },
      { task: 'Ktorá látka vedie elektrický prúd: meď, alebo plast?',
        steps: ['Meď je kov a kovy vedú prúd.', 'Plast je izolant a prúd nevedie.', '<strong>Výsledok: meď.</strong>'] }
    ]
  });

  gen('r2-vlastnosti-latok', () => choice(pick([
    { q: T`Ktorá látka je priehľadná?`, ok: T`sklo`, bad: [T`drevo`, T`kameň`],
      hints: [T`Drevo je nepriehľadné, svetlo cez neho neprejde.`, T`Kameň je nepriehľadný, nedá sa cez neho pozerať.`],
      solution: T`Sklo prepúšťa svetlo, preto cez neho vidíme.`,
      hint: T`Priehľadná látka je taká, cez ktorú vidíš.` },
    { q: T`Ktorá látka vedie elektrický prúd?`, ok: T`meď`, bad: [T`plast`, T`guma`],
      hints: [T`Plast je izolant. Elektrický prúd nevedie.`, T`Guma je izolant, prúd nevedie.`],
      solution: T`Kovy, napríklad meď, vedú elektrický prúd. Preto sa z nich robia vodiče.`,
      hint: T`Elektrické vodiče bývajú z kovu.` },
    { q: T`Ktorá látka je lesklá a odráža svetlo?`, ok: T`kov`, bad: [T`hlina`, T`papier`],
      hints: [T`Hlina je matná, svetlo skôr pohlcuje.`, T`Papier je matný a svetlo sa od neho neodráža tak, aby žiaril.`],
      solution: T`Kov je lesklý, preto odráža svetlo.`,
      hint: T`Pomysli na lyžičku, ktorá sa leskne.` },
    { q: T`Ktorý predmet je najvhodnejší na výrobu okna?`, ok: T`sklenený`, bad: [T`drevený`, T`kamenný`],
      hints: [T`Drevo je nepriehľadné, cez okno by sme nevideli.`, T`Kameň je nepriehľadný a ťažký na okno.`],
      solution: T`Okno má byť priehľadné, aby do miestnosti prechádzalo svetlo, preto je vhodné sklo.`,
      hint: T`Okno potrebujeme, aby sme cez neho videli von.` }
  ])));

  /* ---------- Pevné látky, kvapaliny a plyny ---------- */

  lesson({
    id: 'r2-skupenstva', order: 20, theme: 'latky', title: 'Pevné látky, kvapaliny a plyny',
    summary: 'Rozlíšiš pevné látky, kvapaliny a plyny podľa tvaru a objemu.',
    theory: [
      `<p>Látky sa vyskytujú v troch <strong>skupenstvách</strong>: pevnom, kvapalnom a plynnom.</p>`,
      `<ul>
         <li><strong>Pevná látka</strong> má stály tvar aj objem. Kocka z ľadu alebo kameň si tvar zachová.</li>
         <li><strong>Kvapalina</strong> má stály objem, ale tvar sa mení podľa nádoby. Voda v pohári má tvar pohára.</li>
         <li><strong>Plyn</strong> nemá stály tvar ani objem. Vyplní celú nádobu, v ktorej je.</li>
       </ul>`,
      `<p>Vzduch je plyn. Keď nafúkame balón, napĺňame ho plynom a ten sa rozšíri po celom balóne.</p>`,
      `<p>Skupenstvo látky sa dá pozorovať. Vezmi si kocku z ľadu, potom vodu v pohári a nakoniec vzduch v balóne a porovnaj ich.</p>`
    ],
    examples: [
      { task: 'Aké skupenstvo má mlieko v pohári?',
        steps: ['Mlieko tečie a zaberá tvar pohára.', 'Má stály objem, ale nie tvar.', '<strong>Výsledok: kvapalina.</strong>'] },
      { task: 'Ktoré skupenstvo má stály tvar?',
        steps: ['Pevná látka si zachová svoj tvar.', 'Plyn a kvapalina tvar nemajú stály.', '<strong>Výsledok: pevná látka.</strong>'] }
    ]
  });

  gen('r2-skupenstva', () => choice(pick([
    { q: T`Ktoré skupenstvo má stály tvar aj objem?`, ok: T`pevné`, bad: [T`kvapalné`, T`plynné`],
      hints: [T`Kvapalina mení tvar podľa nádoby.`, T`Plyn nemá stály tvar ani objem.`],
      solution: T`Pevné látky majú stály tvar aj objem, napríklad kameň alebo kocka z dreva.`,
      hint: T`Pomysli na predmet, ktorý si nevieš ľahko tvarovať rukou.` },
    { q: T`Ktoré skupenstvo vyplní celú nádobu?`, ok: T`plynné`, bad: [T`kvapalné`, T`pevné`],
      hints: [T`Kvapalina zaberá len spodnú časť nádoby.`, T`Pevné telesá si zachovávajú tvar a nádobu nevyplnia.`],
      solution: T`Plyn sa rozpína a vyplní všetok priestor, ktorý má k dispozícii.`,
      hint: T`Vzduch v balóne sa rozťahuje po celom balóne.` },
    { q: T`Ktoré skupenstvo má stály objem, ale mení tvar?`, ok: T`kvapalné`, bad: [T`pevné`, T`plynné`],
      hints: [T`Pevné látky majú stály tvar aj objem.`, T`Plyny nemajú stály objem ani tvar.`],
      solution: T`Kvapalina má stály objem, ale tvar podľa nádoby sa mení.`,
      hint: T`Nalej vodu do iného pohára a sleduj tvar.` },
    { q: T`Ktoré skupenstvo sa dá najľahšie stlačiť?`, ok: T`plynné`, bad: [T`pevné`, T`kvapalné`],
      hints: [T`Pevné telesá sa stláčajú veľmi ťažko.`, T`Kvapaliny sa stláčajú veľmi ťažko.`],
      solution: T`Častice plynu sú od seba ďaleko, preto sa plyn dá stlačiť najľahšie.`,
      hint: T`Pomysli na vzduch v pumpe na bicykel.` }
  ])));

  /* ---------- Voda a vzduch ---------- */

  lesson({
    id: 'r2-voda-vzduch', order: 30, theme: 'tekutiny', title: 'Voda a vzduch',
    summary: 'Pozorovaním zistíš, že vzduch zaberá priestor a voda tečie a mení tvar.',
    theory: [
      `<p><strong>Voda</strong> je kvapalina. Tečie, zaberá tvar nádoby a dá sa prelievať z jednej nádoby do druhej.
       Voda sa dá zmraziť na ľad a zohriať na paru.</p>`,
      `<p><strong>Vzduch</strong> je plyn. Aj keď ho nevidíme, zaberá priestor. Preto sa do nafúknutého balóna zmestí len určité množstvo vzduchu.</p>`,
      `<ul>
         <li>Voda sa vsakuje do piesku a pôdy. Niektoré látky sa vo vode rozpúšťajú, niektoré nie.</li>
         <li>Vzduch sa pohybuje ako vietor. Vietor môže hýbať listami a točiť veterník.</li>
       </ul>`,
      `<p><strong>Pokus:</strong> do pohára s vodou vlož prázdny pohár otočený dnom nahor a pozoruj, či voda vnikne dovnútra. Vzduch v pohári bráni vode vtiecť.</p>`
    ],
    examples: [
      { task: 'Prečo sa pohár otočený dnom nahor nenaplní vodou?',
        steps: ['V pohári je vzduch.', 'Vzduch zaberá priestor a vodu nepustí dnu.', '<strong>Výsledok: vzduch v pohári zaberá miesto.</strong>'] },
      { task: 'Aké skupenstvo má voda a ako sa správa?',
        steps: ['Voda je kvapalina.', 'Tečie a zaberá tvar nádoby.', '<strong>Výsledok: voda je kvapalina, ktorá tečie.</strong>'] }
    ]
  });

  gen('r2-voda-vzduch', () => choice(pick([
    { q: T`Ktorý pokus dokazuje, že vzduch zaberá priestor?`, ok: T`pohár otočený dnom nahor zostane vo vode suchý`, bad: [T`voda v pohári zmizne`, T`vzduch sa dá vidieť`],
      hints: [T`Voda nezmizne. Nepriestupuje do pohára, lebo ho blokuje vzduch.`, T`Vzduch vidieť nevieme. Dokazuje sa tým, že zaberá miesto.`],
      solution: T`Vzduch v pohári zaberá priestor, preto voda do pohára nevnikne.`,
      hint: T`Zamysli sa, čo je v pohári, keď ho otočíš.` },
    { q: T`Čo spôsobí, že voda tečie?`, ok: T`je kvapalina`, bad: [T`je pevná`, T`je plyn`],
      hints: [T`Pevné látky netečú, zachovávajú si tvar.`, T`Plyny sa rozptýlia, nie sú v tvare prúdu.`],
      solution: T`Voda je kvapalina, preto ľahko tečie a mení tvar.`,
      hint: T`Skupenstvo kvapaliny je medzi pevným a plynným.` },
    { q: T`Ktorá z týchto vecí nám ukazuje, že vzduch sa pohybuje?`, ok: T`veterník sa točí`, bad: [T`kameň leží na zemi`, T`kniha stojí na poličke`],
      hints: [T`Kameň sa nehýbe, nedokazuje pohyb vzduchu.`, T`Kniha na poličke stojí. Nehýbe sa, a tak nič nedokazuje.`],
      solution: T`Veterník sa točí, lebo ho poháňa vietor, teda pohybujúci sa vzduch.`,
      hint: T`Čo je vietor?` }
  ])));

  /* ---------- Zmeny skupenstva ---------- */

  lesson({
    id: 'r2-zmeny-skupenstva', order: 40, theme: 'teplo', title: 'Zmeny skupenstva v bežnom živote',
    summary: 'Pomenuješ topenie, mrznutie, vyparovanie a kondenzáciu na príkladoch z okolia.',
    theory: [
      `<p>Látka sa môže <strong>premieňať</strong> z jedného skupenstva do druhého. Najčastejšie to vidíme na vode.</p>`,
      `<ul>
         <li><strong>Topenie</strong>: pevná látka sa mení na kvapalinu, napríklad ľad na vodu pri zahriatí.</li>
         <li><strong>Mrznutie</strong>: kvapalina sa mení na pevnú látku, napríklad voda na ľad v mrazničke.</li>
         <li><strong>Vyparovanie</strong>: kvapalina sa mení na plyn (paru), napríklad mokrá bielizeň sa suší.</li>
         <li><strong>Kondenzácia</strong>: plyn (para) sa mení na kvapalinu, napríklad kvapky na studenom pohári.</li>
       </ul>`,
      `<p>Pri topení a vyparovaní látka prijíma teplo. Pri mrznutí a kondenzácii teplo odovzdáva. Preto sa v zime rýchlo ochladia kaluže a v lete sa nám voda rýchlo suší.</p>`
    ],
    examples: [
      { task: 'Ako sa nazýva zmena, keď sa sneh mení na vodu?',
        steps: ['Sneh je pevná látka.', 'Pri zahriatí sa mení na kvapalinu.', '<strong>Výsledok: topenie.</strong>'] },
      { task: 'Čo sa stane s mokrou bielizňou na slnku?',
        steps: ['Voda z bielizne sa mení na paru.', 'Para odchádza do vzduchu.', '<strong>Výsledok: vyparovanie, bielizeň schne.</strong>'] }
    ]
  });

  gen('r2-zmeny-skupenstva', () => choice(pick([
    { q: T`Ľad sa topí na vodu. Ako sa nazýva táto zmena?`, ok: T`topenie`, bad: [T`mrznutie`, T`vyparovanie`],
      hints: [T`Mrznutie je opačný dej: kvapalina sa mení na pevnú látku.`, T`Vyparovanie je zmena na paru, nie na vodu.`],
      solution: T`Pevná látka (ľad) sa pri zahriatí mení na kvapalinu, to je topenie.`,
      hint: T`Pri topení sa pevná látka mení na kvapalinu.` },
    { q: T`Voda v mrazničke stuhne na ľad. Ako sa nazýva táto zmena?`, ok: T`mrznutie`, bad: [T`topenie`, T`kondenzácia`],
      hints: [T`Topenie je opačná zmena: pevná látka sa mení na kvapalinu.`, T`Kondenzácia je zmena z plynu na kvapalinu.`],
      solution: T`Kvapalina sa ochladí a mení sa na pevnú látku, to je mrznutie.`,
      hint: T`Pri mrznutí voda tuhne.` },
    { q: T`Prečo sa na studenom pohári tvoria kvapky vody?`, ok: T`para kondenzuje na kvapalinu`, bad: [T`sklo sa topí`, T`voda prechádza cez sklo`],
      hints: [T`Sklo sa netopí. Ide o inú zmenu.`, T`Voda cez sklo neprechádza. Vodná para na ňom vytvára kvapky.`],
      solution: T`Vodná para z vzduchu sa na studenom povrchu mení na kvapalinu, to je kondenzácia.`,
      hint: T`Kvapky sa tvoria na chladnom povrchu.` },
    { q: T`Mokré oblečenie sa na slnku suší. Ako sa nazýva táto zmena?`, ok: T`vyparovanie`, bad: [T`mrznutie`, T`topenie`],
      hints: [T`Pri mrznutí by voda stuhla, nie by vyschla.`, T`Topenie sa týka pevných látok, oblečenie je mokré, nie zamrznuté.`],
      solution: T`Voda sa mení na paru a odchádza do vzduchu, to je vyparovanie.`,
      hint: T`Voda sa mení na plyn, ktorý nevidíme.` }
  ])));

  /* ---------- Magnety ---------- */

  lesson({
    id: 'r2-magnety', order: 50, theme: 'magnetizmus', title: 'Magnety a ich účinky',
    summary: 'Zistíš, ktoré predmety magnet priťahuje, a opíšeš póly magnetu.',
    theory: [
      `<p><strong>Magnet</strong> priťahuje predmety zo železa, ocele a niklu. Drevo, plast, papier ani sklo magnet nepriťahuje.</p>`,
      `<p>Každý magnet má dva <strong>póly</strong>: severný a južný. Najsilnejší účinok je na jeho koncoch.</p>`,
      `<ul>
         <li>Dva rovnaké póly sa <strong>odpudzujú</strong>.</li>
         <li>Dva rozdielne póly sa <strong>priťahujú</strong>.</li>
       </ul>`,
      `<p>Magnet pôsobí aj cez niektoré látky, napríklad cez papier alebo tenkú vrstvu plastu. Cez železo však magnet účinok prenáša ťažšie.</p>`
    ],
    examples: [
      { task: 'Priťahuje magnet kľúč z ocele?',
        steps: ['Oceľ obsahuje železo.', 'Magnet priťahuje železo.', '<strong>Výsledok: áno, kľúč z ocele magnet priťahuje.</strong>'] },
      { task: 'Čo sa stane, keď priložíme dva magnety severnými pólmi k sebe?',
        steps: ['Oba póly sú rovnaké.', 'Rovnaké póly sa odpudzujú.', '<strong>Výsledok: magnety sa od seba odtlačia.</strong>'] }
    ]
  });

  gen('r2-magnety', () => choice(pick([
    { q: T`Ktorý predmet magnet priťahuje?`, ok: T`železný klinec`, bad: [T`drevená ceruzka`, T`plastová kocka`],
      hints: [T`Drevo magnet nepriťahuje.`, T`Plast magnet nepriťahuje.`],
      solution: T`Železo magnet priťahuje, preto klinec z železa k nemu prilipne.`,
      hint: T`Magnet priťahuje predmety z železa.` },
    { q: T`Čo sa stane, keď priblížime dva severné póly magnetov?`, ok: T`odpudzujú sa`, bad: [T`priťahujú sa`, T`nič sa nestane`],
      hints: [T`Priťahujú sa rozdielne póly, nie rovnaké.`, T`Medzi magnetmi pôsobí sila, takže sa niečo stane.`],
      solution: T`Rovnaké póly magnetov sa odpudzujú.`,
      hint: T`Rovnaké póly sa navzájom odtláčajú.` },
    { q: T`Čo sa stane, keď priblížime severný pól k južnému pólu?`, ok: T`priťahujú sa`, bad: [T`odpudzujú sa`, T`magnet sa rozbije`],
      hints: [T`Odpudzujú sa rovnaké póly, nie rozdielne.`, T`Magnet sa pri tom nerozbije. Ide len o silu medzi pólmi.`],
      solution: T`Rozdielne póly sa priťahujú.`,
      hint: T`Rozdielne póly sa k sebe chcú dostať.` },
    { q: T`Ktorá látka magnet nepriťahuje?`, ok: T`drevo`, bad: [T`železo`, T`oceľ`],
      hints: [T`Železo magnet priťahuje.`, T`Oceľ obsahuje železo, magnet ju priťahuje.`],
      solution: T`Drevo nie je kov a magnet ho nepriťahuje.`,
      hint: T`Magnet priťahuje hlavne železo a oceľ.` }
  ])));

  /* ---------- Pozorovania a pokusy ---------- */

  lesson({
    id: 'r2-pokusy', order: 60, theme: 'opakovanie', title: 'Jednoduché pozorovania a pokusy',
    summary: 'Naplánuješ jednoduchý pokus a zapíšeš pozorovania a záver.',
    theory: [
      `<p>Pokus je overenie nášho nápadu. Najprv si položíme otázku, potom vyslovíme <strong>predpoklad</strong> (hypotézu), urobíme pokus a výsledky zapíšeme.</p>`,
      `<ol>
         <li><strong>Otázka</strong>: Čo chceme zistiť? Napríklad: Rozpustí sa cukor vo vode rýchlejšie v teplej alebo studenej vode?</li>
         <li><strong>Predpoklad</strong>: Čo si myslíme, že sa stane? Napríklad: V teplej vode sa cukor rozpustí rýchlejšie.</li>
         <li><strong>Pokus a pozorovanie</strong>: Urobíme pokus a presne zapíšeme, čo vidíme.</li>
         <li><strong>Záver</strong>: Potvrdil pokus náš predpoklad? Ak nie, nie je to problém, výsledok je tiež informácia.</li>
       </ol>`,
      `<p>Pri pokuse sa vždy riaď pravidlami bezpečnosti a pracuj s rovnakými podmienkami, aby bol výsledok spoľahlivý.</p>`
    ],
    examples: [
      { task: 'Aký je prvý krok pri jednoduchom pokuse?',
        steps: ['Najprv si položíme otázku.', 'Potom vyslovíme predpoklad a robíme pokus.', '<strong>Výsledok: prvý krok je položiť si otázku.</strong>'] },
      { task: 'Čo zapíšeme po pokuse?',
        steps: ['Zapisujeme pozorovania, čo sme videli.', 'Na konci napíšeme záver.', '<strong>Výsledok: pozorovania a záver.</strong>'] }
    ]
  });

  gen('r2-pokusy', () => choice(pick([
    { q: T`Čo je prvý krok pri jednoduchom pokuse?`, ok: T`položiť si otázku`, bad: [T`zapísať záver`, T`vyhodiť pomôcky`],
      hints: [T`Záver zapisujeme až na konci, keď máme výsledok.`, T`Pomôcky sa nevyhadzujú, potrebujeme ich pri pokuse.`],
      solution: T`Pokus začína otázkou, na ktorú chceme nájsť odpoveď.`,
      hint: T`Najprv chceme vedieť, čo zisťujeme.` },
    { q: T`Čo je predpoklad (hypotéza)?`, ok: T`náš odhad, čo sa stane`, bad: [T`konečný výsledok po pokuse`, T`zoznam pomôcok`],
      hints: [T`Výsledok zistíme až po pokuse. Predpoklad je odhad pred ním.`, T`Zoznam pomôcok je súčasť prípravy, nie predpoklad.`],
      solution: T`Predpoklad je náš odhad, čo sa podľa nás stane. Pokus ho potom overí.`,
      hint: T`Je to to, čo si myslíš, že vyjde, ešte pred pokusom.` },
    { q: T`Čo patrí do zápisu pozorovania?`, ok: T`čo presne sme videli`, bad: [T`čo by sme chceli vidieť`, T`kto nám pokus vymyslel`],
      hints: [T`Zapisujeme skutočné pozorovania, nie želania.`, T`Autor pokusu do pozorovania nepatrí.`],
      solution: T`V pozorovaní zapíšeme presne to, čo sme pri pokuse skutočne videli.`,
      hint: T`Pozorovanie je to, čo je vidieť, nie to, čo očakávame.` },
    { q: T`Výsledok pokusu nepotvrdil náš predpoklad. Čo máme urobiť?`, ok: T`zapísať výsledok do záveru`, bad: [T`výsledok zahodiť a zmeniť pozorovanie`, T`predstierať, že pokus vyšiel`],
      hints: [T`Pozorovanie sa nemá meniť, aby sedelo k predpokladu.`, T`Nepravdivý zápis nám nepomôže. Ukazuje to, že náš predpoklad nebol správny.`],
      solution: T`Nesúlad s predpokladom je tiež výsledok. Zapíšeme ho do záveru ako poznatok.`,
      hint: T`Vedci zapisujú aj výsledky, ktoré nečakali.` }
  ])));
})();
