(function () {
  'use strict';

  const { rnd, pick, shuffle, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v9' }, l));
  const gen = EXERCISES.register;
  // desatinné číslo v matematike (čiarka sa v $...$ zapisuje ako {,})
  const mn = (x) => fmt(x).replace(',', '{,}');
  // typické chyby, ktoré sa rovnajú správnej odpovedi, vynecháme
  const dropAns = (list, ans) => list.filter((m) => m.value !== ans);
  // nápovedy len k nesprávnym možnostiam výberu
  const hintsFor = (options, ans, map) => {
    const h = {};
    options.forEach((o) => { if (o !== ans) h[o] = map[o]; });
    return h;
  };

  /* ---------- 1. Kryštálové štruktúry ---------- */

  lesson({
    id: 'v9-kryst-struktury', order: 10, theme: 'pevne', title: 'Kryštálové štruktúry',
    summary: 'Elementárna bunka, typy kubických mriežok a počet atómov v bunke.',
    theory: [
      `<p>Kryštál je látka, v ktorej sú atómy usporiadané pravidelne do priestorovej <em>mriežky</em>. Najmenší celok, ktorý sa opakovaním posunov vytvorí celú mriežku, je <strong>elementárna bunka</strong>.</p>`,
      `<p>Tri základné kubické bunky sú: <em>jednoduchá kubická</em> (atómy len v rohoch), <em>telesne centrovaná</em> (okrem rohov aj atóm v strede) a <em>plošne centrovaná</em> (okrem rohov aj atómy v stredoch stien).</p>`,
      `<p>Na bunku patrí atóm v strede celý, atóm na stene polovicou a atóm v rohu osminou. Preto má jednoduchá kubická bunka 1 atóm, telesne centrovaná 2 a plošne centrovaná 4 atómy.</p>`,
      `<p>Usporiadanie ovplyvňuje mechanické vlastnosti. Kovy s plošne centrovanou mriežkou (Al, Cu, Au) sú tvárne, pretože sa atómové roviny dajú ľahko posúvať.</p>`
    ],
    examples: [
      { task: 'Koľko atómov patrí na jednu elementárnu bunku plošne centrovanej mriežky?',
        steps: ['Osem rohových atómov, každý patrí bunke osminou: $8\\cdot\\tfrac{1}{8}=1$.', 'Šesť stenových atómov, každý polovicou: $6\\cdot\\tfrac{1}{2}=3$.', '<strong>Výsledok: $1+3=4$ atómy</strong>'] },
      { task: 'Koľko atómov má telesne centrovaná bunka?',
        steps: ['Rohy dávajú $8\\cdot\\tfrac{1}{8}=1$ atóm.', 'Atóm v strede patrí celý, teda 1.', '<strong>Výsledok: 2 atómy</strong>'] }
    ]
  });

  gen('v9-kryst-struktury', () => {
    const TYPES = [
      [T`jednoduchej kubickej`, 1, T.s('Osem rohových atómov, každý patrí bunke len osminou: $8\\cdot\\tfrac{1}{8}=1$.')],
      [T`telesne centrovanej kubickej`, 2, T.s('Rohy dávajú $8\\cdot\\tfrac{1}{8}=1$ atóm, atóm v strede patrí celý, spolu $2$.')],
      [T`plošne centrovanej kubickej`, 4, T.s('Rohy dávajú $1$, šesť stenových atómov po polovici dáva $3$, spolu $4$.')]
    ];
    const [name, ans, expl] = pick(TYPES);
    return {
      q: T`Koľko atómov patrí na jednu elementárnu bunku ${name} mriežky?`,
      answer: ans,
      mistakes: dropAns([
        { value: 8, msg: T`Započítal si všetkých osem rohových atómov naplno. Každý roh patrí bunke len osminou.` },
        { value: 1, msg: T`Zabudol si na atómy v stenách alebo v strede. Tie patria bunke celé alebo polovicou.` }
      ], ans),
      solution: expl,
      hint: T`Rozmysli si, ktoré atómy sú v rohoch, v stredoch stien a v strede bunky, a koľkému z nich patrí bunka.`
    };
  });

  /* ---------- 2. Atómové väzby ---------- */

  lesson({
    id: 'v9-vazby', order: 20, theme: 'pevne', title: 'Atómové väzby v pevných látkach',
    summary: 'Iónová, kovalentná, kovová a van der Waalsova väzba a ich dôsledky.',
    theory: [
      `<p>Atómy sa spájajú do pevnej látky vtedy, keď sa tým zníži celková energia sústavy. Väzba vzniká prerozdelením alebo zdieľaním valenčných elektrónov.</p>`,
      `<ul><li><strong>Iónová</strong>: elektróny prechádzajú z jedného atómu na druhý a vznikajú opačne nabité ióny (napr. NaCl). Látky sú tvrdé, krehké, s vysokou teplotou topenia.</li><li><strong>Kovalentná</strong>: atómy zdieľajú elektrónové páry (diamant, kremík). Väzby sú silné a látky tvrdé.</li><li><strong>Kovová</strong>: valenčné elektróny tvoria spoločný „elektrónový plyn“ patriaci všetkým atómom (Cu, Fe). Kovy sú tvárne a vedú prúd.</li><li><strong>Van der Waalsova</strong>: slabé príťažlivé sily medzi dočasnými dipólmi (napr. pevný CO₂ alebo vrstvy grafitu). Ľahko sa rozrušia.</li></ul>`,
      `<p>Vlastnosti pevnej látky, ako tvrdosť, vodivosť a teplota topenia, sú priamym dôsledkom typu väzby. Keď poznáme väzbu, vieme predpovedať, ako sa materiál bude správať.</p>`
    ],
    examples: [
      { task: 'Ktorá väzba je v kove medi?',
        steps: ['Atómy medi uvoľňujú valenčné elektróny do spoločného „mora“.', '<strong>Výsledok: kovová väzba</strong>'] },
      { task: 'Prečo je diamant veľmi tvrdý?',
        steps: ['Každý atóm uhlíka je kovalentne viazaný na štyri susedy.', 'Takáto pevná sieť vyžaduje veľa energie na rozrušenie.', '<strong>Výsledok: pevné kovalentné väzby v celom kryštáli</strong>'] }
    ]
  });

  gen('v9-vazby', () => {
    const PAIRS = [
      { desc: T`zdieľaním elektrónových párov medzi atómami`, ans: 'kovalentná' },
      { desc: T`prenosom elektrónov a priťahovaním vzniknutých iónov`, ans: 'iónová' },
      { desc: T`spoločným elektrónovým plynom, ktorý patrí všetkým atómom`, ans: 'kovová' },
      { desc: T`slabými príťažlivými silami medzi dočasnými dipólmi`, ans: 'van der Waalsova' }
    ];
    const p = pick(PAIRS);
    const options = shuffle(['kovalentná', 'iónová', 'kovová', 'van der Waalsova']);
    const HINT = {
      'kovalentná': T.s('Kovalentná väzba vzniká zdieľaním elektrónových párov medzi atómami.'),
      'iónová': T.s('Iónová väzba vzniká prenosom elektrónov a príťažlivosťou iónov.'),
      'kovová': T.s('Kovová väzba je spoločný elektrónový plyn kovov.'),
      'van der Waalsova': T.s('Van der Waalsova väzba je slabá príťažlivosť medzi dipólmi.')
    };
    return {
      type: 'choice',
      q: T`Ktorá väzba vzniká ${p.desc}?`,
      options,
      answer: p.ans,
      choiceHints: hintsFor(options, p.ans, HINT),
      solution: T`Správna odpoveď je ${p.ans} väzba, lebo sa uskutočňuje ${p.desc}.`,
      hint: T`Zamysli sa, či atómy zdieľajú elektróny, prenášajú ich, alebo majú spoločný elektrónový plyn.`
    };
  });

  /* ---------- 3. Elektrické a tepelné vlastnosti ---------- */

  lesson({
    id: 'v9-elektricke-tepelne', order: 30, theme: 'pevne', title: 'Elektrické a tepelné vlastnosti materiálov',
    summary: 'Merný odpor, závislosť odporu od teploty a tepelná vodivosť.',
    theory: [
      `<p>Odpor vodiča je $R = \\rho\\dfrac{l}{S}$, kde $\\rho$ je <em>merný odpor</em> látky, $l$ dĺžka a $S$ prierez. Merný odpor medi je približne $1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$. Dlhší a tenší vodič kladie väčší odpor.</p>`,
      `<p>Kov vedie prúd, lebo jeho valenčné elektróny sa voľne pohybujú v mriežke. Pri zvyšovaní teploty ich pohyb rozptyľujú kmity iónov mriežky, preto odpor kovu s teplotou rastie. Naopak, u polovodičov a izolantov sa s teplotou uvoľňuje viac nosičov a odpor klesá.</p>`,
      `<p><strong>Tepelná vodivosť:</strong> teplo prenášajú v kovoch hlavne voľné elektróny, v nekovoch kmity mriežky (fonóny). Preto je meď výborný vodič tepla, zatiaľ čo sklo a keramika tepelne izolujú.</p>`
    ],
    examples: [
      { task: 'Medený drôt dĺžky 50 m a prierezu 2 mm² má odpor? Merný odpor medi je $\\rho=1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$.',
        steps: ['Prierez prevedieme: $S=2\\,\\text{mm}^2=2\\cdot 10^{-6}\\,\\text{m}^2$.', '$R=\\rho\\dfrac{l}{S}=1{,}7\\cdot 10^{-8}\\cdot\\dfrac{50}{2\\cdot 10^{-6}}=0{,}425\\,\\Omega$.', '<strong>Výsledok: približne 0,43 Ω</strong>'] },
      { task: 'Ktorý vodič má väčší odpor: dlhší alebo kratší, pri rovnakom priereze a materiáli?',
        steps: ['Odpor je úmerný dĺžke $l$.', '<strong>Výsledok: dlhší</strong>'] }
    ]
  });

  gen('v9-elektricke-tepelne', () => {
    const L = rnd(10, 100), S = pick([1, 2, 4, 5]), ans = Math.round((0.017 * L / S) * 100) / 100;
    return {
      q: T`Medený vodič má dĺžku $l=${L}\\,\\text{m}$ a prierez $S=${S}\\,\\text{mm}^2$. Aký je jeho odpor v ohmoch? Merný odpor medi je $\\rho=1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$. Zaokrúhli na 2 desatinné miesta.`,
      answer: ans,
      tol: 0.01,
      mistakes: dropAns([
        { value: Math.round(0.017 * L * S * 100) / 100, msg: T`Prierez sme mali deliť, nie násobiť. Väčší prierez znamená menší odpor.` },
        { value: Math.round((0.017 * L / S) * 1e6 * 100) / 100, msg: T`Prierez treba previesť na m²: $1\\,\\text{mm}^2=10^{-6}\\,\\text{m}^2$. Inak vyjde nezmyselne veľké číslo.` }
      ], ans),
      solution: T`$S=${S}\\,\\text{mm}^2=${S}\\cdot 10^{-6}\\,\\text{m}^2$, teda $R=\\rho\\dfrac{l}{S}\\approx ${mn(ans)}\\,\\Omega$.`,
      hint: T`Dosaď do vzorca $R=\\rho\\dfrac{l}{S}$ s prierezom v m². Pozor na prevod jednotiek.`
    };
  });

  /* ---------- 4. Pásová teória ---------- */

  lesson({
    id: 'v9-pasova-teoria', order: 40, theme: 'pevne', title: 'Pásová teória pevných látok',
    summary: 'Energetické pásy v kryštáli a rozdelenie látok na vodiče, polovodiče a izolanty.',
    theory: [
      `<p>Pri spojení veľkého počtu atómov sa diskrétne energetické hladiny elektrónov zmenia na <em>pásy</em>, teda súbory veľmi blízkych hladín. Medzi pásmi môže ležať <strong>zakázaný pás</strong> šírky $E_g$, v ktorom elektróny byť nemôžu.</p>`,
      `<p>Najvyššie obsadený pás je <em>valenčný</em>, nad ním je <em>vodivostný</em> pás. Elektróny plnia pásy zdola nahor a Pauliho princíp zakazuje obsadiť jeden stav dvoma elektrónmi. Plne obsadený pás nevedie prúd, lebo elektróny v ňom nemajú kam sa posunúť.</p>`,
      `<ul><li><strong>Vodič</strong> (kov): zakázaný pás chýba, pásy sa prekrývajú, vodivostný pás je čiastočne obsadený.</li><li><strong>Polovodič</strong>: $E_g$ približne 0,1 až 3 eV (kremík má 1,1 eV). Pri izbovej teplote sa do vodivostného pásu dostane niekoľko elektrónov.</li><li><strong>Izolant</strong>: $E_g$ väčšie ako 3 eV (diamant má 5,5 eV).</li></ul>`
    ],
    examples: [
      { task: 'Materiál má šírku zakázaného pásu $E_g = 0{,}67\\,\\text{eV}$. Vodič, polovodič, alebo izolant?',
        steps: ['Hodnota je medzi 0,1 a 3 eV a nie je nulová.', '<strong>Výsledok: polovodič (napr. germánium)</strong>'] },
      { task: 'Prečo diamant ($E_g=5{,}5\\,\\text{eV}$) nevedie prúd?',
        steps: ['Zakázaný pás je veľmi široký.', 'Elektróny sa pri bežných teplotách nedostanú do vodivostného pásu.', '<strong>Výsledok: je to izolant</strong>'] }
    ]
  });

  gen('v9-pasova-teoria', () => {
    const MAT = [
      [T`meď`, 0, 'vodič'],
      [T`kremík`, 1.1, 'polovodič'],
      [T`germánium`, 0.67, 'polovodič'],
      [T`diamant`, 5.5, 'izolant'],
      [T`sklo`, 4, 'izolant']
    ];
    const [name, eg, ans] = pick(MAT);
    const options = shuffle(['vodič', 'polovodič', 'izolant']);
    const HINT = {
      'vodič': T.s('Vodič nemá zakázaný pás alebo sa pásy prekrývajú.'),
      'polovodič': T.s('Polovodič má úzky zakázaný pás, približne 0,1 až 3 eV.'),
      'izolant': T.s('Izolant má široký zakázaný pás, väčší ako 3 eV.')
    };
    return {
      type: 'choice',
      q: T`Materiál ${name} má šírku zakázaného pásu $E_g = ${mn(eg)}\\,\\text{eV}$. Ako ho zatriedime?`,
      options,
      answer: ans,
      choiceHints: hintsFor(options, ans, HINT),
      solution: T`Pre ${name} je $E_g=${mn(eg)}\\,\\text{eV}$, teda ide o ${ans}.`,
      hint: T`Porovnaj šírku zakázaného pásu s hranicami: do 0,1 eV je vodič, 0,1 až 3 eV polovodič, nad 3 eV izolant.`
    };
  });

  /* ---------- 5. Polovodiče a tranzistory ---------- */

  lesson({
    id: 'v9-polovodice', order: 50, theme: 'elektrina', title: 'Polovodiče a tranzistory',
    summary: 'Dotovanie kremíka, PN prechod a princíp tranzistora.',
    theory: [
      `<p>Čistý kremík má štyri valenčné elektróny a viaže sa kovalentne. Pri izbovej teplote sa malá časť elektrónov uvoľní do vodivostného pásu a zanechá <em>diery</em>, miesta, do ktorých môže prejsť elektrón. Hovoríme o vlastnej vodivosti.</p>`,
      `<p><strong>Dotovanie</strong> zvyšuje vodivosť. Prvok s piatimi valenčnými elektrónmi (fosfor, arzén, antimón) dodá voľný elektrón navyše a vzniká polovodič typu $n$, kde nosiče sú elektróny. Prvok s tromi valenčnými elektrónmi (bór, hliník, gálium) vytvorí diery a vzniká polovodič typu $p$.</p>`,
      `<p><strong>PN prechod</strong> vznikne spojením oboch typov. V priepustnom smere prúd preteká, v závernom smere prakticky nie. Tranzistor je zložený z dvoch takýchto prechodov a malý prúd v jednom obvode riadi veľký prúd v druhom.</p>`,
      `<p>Tranzistor slúži ako zosilňovač a spínač. Z miliárd tranzistorov sú zložené všetky číslicové obvody v počítačoch a mobiloch.</p>`
    ],
    examples: [
      { task: 'Ku kremíku pridáme fosfor. Aký typ polovodiča vznikne?',
        steps: ['Fosfor má 5 valenčných elektrónov, jeden z nich je navyše.', '<strong>Výsledok: polovodič typu $n$</strong>'] },
      { task: 'Prečo dióda v závernom smere takmer nevedie prúd?',
        steps: ['Na PN prechode vznikne oblasť bez voľných nosičov.', 'Pri zvyšovaní napätia v závernom smere sa táto oblasť iba rozširuje.', '<strong>Výsledok: prúd prakticky neprechádza</strong>'] }
    ]
  });

  gen('v9-polovodice', () => {
    const donor = Math.random() < 0.5;
    const ans = donor ? pick(['fosfor', 'arzén', 'antimón']) : pick(['bór', 'hliník', 'gálium']);
    const others = donor ? ['bór', 'hliník', 'gálium'] : ['fosfor', 'arzén', 'antimón'];
    const options = shuffle([ans, ...others.slice(0, 3)]);
    const HINT = {
      'fosfor': T.s('Fosfor má päť valenčných elektrónov a dáva elektróny, vzniká typ $n$.'),
      'arzén': T.s('Arzén má päť valenčných elektrónov a dáva elektróny, vzniká typ $n$.'),
      'antimón': T.s('Antimón má päť valenčných elektrónov a dáva elektróny, vzniká typ $n$.'),
      'bór': T.s('Bór má tri valenčné elektróny a vytvára diery, vzniká typ $p$.'),
      'hliník': T.s('Hliník má tri valenčné elektróny a vytvára diery, vzniká typ $p$.'),
      'gálium': T.s('Gálium má tri valenčné elektróny a vytvára diery, vzniká typ $p$.')
    };
    return {
      type: 'choice',
      q: donor
        ? T`Ktorý prvok pridáme do kremíka, aby vznikol polovodič typu $n$?`
        : T`Ktorý prvok pridáme do kremíka, aby vznikol polovodič typu $p$?`,
      options,
      answer: ans,
      choiceHints: hintsFor(options, ans, HINT),
      solution: donor
        ? T`${ans} má 5 valenčných elektrónov a dodá kremíku voľný elektrón, vznikne typ $n$.`
        : T`${ans} má 3 valenčné elektróny, v kremíku vzniká diera, vznikne typ $p$.`,
      hint: T`Zisti počet valenčných elektrónov prvku: päť dáva typ $n$, tri dávajú typ $p$.`
    };
  });

  /* ---------- 6. Supravodivosť ---------- */

  lesson({
    id: 'v9-supravodivost', order: 60, theme: 'elektrina', title: 'Supravodivosť',
    summary: 'Nulový odpor pod kritickou teplotou, Meissnerov efekt a vysokoteplotné supravodiče.',
    theory: [
      `<p>Supravodivosť je stav, v ktorom materiál pod <em>kritickou teplotou</em> $T_c$ stratí elektrický odpor úplne. Prúd v ňom môže tiecť bez strát.</p>`,
      `<p><strong>Meissnerov efekt</strong>: supravodič vypudí magnetické pole zo svojho vnútra. Preto sa supravodič nad magnetom vznáša.</p>`,
      `<p>Klasické supravodiče, ako olovo alebo niób, majú $T_c$ niekoľko kelvinov a chladia sa kvapalným héliom ($4{,}2\\,\\text{K}$). Vysokoteplotné supravodiče (kupráty, napr. YBCO s $T_c\\approx 92\\,\\text{K}$) sa dajú chladiť lacnejším kvapalným dusíkom ($77\\,\\text{K}$).</p>`,
      `<p>Podľa teórie BCS sa elektróny v kryštáli spárujú do <em>Cooperových párov</em> vďaka výmene kmitov mriežky. Tieto páry sa pohybujú bez rozptylu, a preto je odpor nulový.</p>`
    ],
    examples: [
      { task: 'Kritická teplota niób je $T_c=9{,}2\\,\\text{K}$. Aká je to teplota v stupňoch Celzia?',
        steps: ['$t = T - 273{,}15$.', '$t = 9{,}2 - 273{,}15 = -263{,}95\\,{}^{\\circ}\\text{C}$.', '<strong>Výsledok: približne -263,95 °C</strong>'] },
      { task: 'Prečo sa supravodič vznáša nad magnetom?',
        steps: ['Magnetické pole nemôže vniknúť do supravodiča (Meissnerov efekt).', 'Indukované prúdy v povrchu vytvárajú pole, ktoré magnet odpudzuje.', '<strong>Výsledok: odpudivá sila supravodič nadvihne</strong>'] }
    ]
  });

  gen('v9-supravodivost', () => {
    const [name, Tc] = pick([[T`hliník`, 1.2], [T`olovo`, 7.2], [T`niób`, 9.2], [T`YBCO`, 92]]);
    const ans = Math.round((Tc - 273.15) * 10) / 10;
    return {
      q: T`Materiál ${name} má kritickú teplotu $T_c=${mn(Tc)}\\,\\text{K}$. Aká je jeho kritická teplota v stupňoch Celzia? Zaokrúhli na 1 desatinné miesto.`,
      answer: ans,
      tol: 0.05,
      mistakes: dropAns([
        { value: Tc, msg: T`To je teplota v kelvinoch. Na stupne Celzia prevedieme odčítaním 273,15.` },
        { value: Math.round((Tc + 273.15) * 10) / 10, msg: T`Pri prevode na Celzia sa 273,15 odčítava, nie pripočítava.` }
      ], ans),
      solution: T`$t = T_c - 273{,}15 = ${mn(Tc)} - 273{,}15 \\approx ${mn(ans)}\\,{}^{\\circ}\\text{C}$.`,
      hint: T`Prevod z kelvinov na stupne Celzia: $t = T - 273{,}15$.`
    };
  });

  /* ---------- 7. Magnetické materiály ---------- */

  lesson({
    id: 'v9-magneticke', order: 70, theme: 'magnetizmus', title: 'Magnetické materiály',
    summary: 'Diamagnetizmus, paramagnetizmus a feromagnetizmus, domény a Curieova teplota.',
    theory: [
      `<p>Podľa správania v magnetickom poli delíme látky na <strong>diamagnetické</strong> (slabo odpudzované, napr. med, zinok), <strong>paramagnetické</strong> (slabo priťahované, napr. hliník, platina) a <strong>feromagnetické</strong> (silno priťahované, napr. železo, nikel, kobalt).</p>`,
      `<p>Vo feromagnetikách sa magnetické momenty atómov zoradia do spoločne orientovaných oblastí, ktoré nazývame <em>domény</em>. Bez poľa sú domény nahodené a výsledný moment je nulový. Vonkajšie pole ich zoradí a materiál sa zmagnetizuje.</p>`,
      `<p>Nad <em>Curieovou teplotou</em> $T_C$ tepelný pohyb atómov domény rozruší a feromagnetizmus zmizne. Železo má $T_C\\approx 770\\,{}^{\\circ}\\text{C}$.</p>`,
      `<p>Mäkké magnetické materiály, napríklad transformátorové plechy, sa ľahko zmagnetizujú a odmagnetizujú. Tvrdé materiály, napríklad permanentné magnety, si magnetizáciu pamätajú.</p>`
    ],
    examples: [
      { task: 'Prečo sa kancelársky klip prilepí na magnet, ale medený drôt nie?',
        steps: ['Klip je z ocele, ktorá obsahuje železo; jeho domény sa zoradia v poli magnetu.', 'Med je diamagnetický a jeho odozva je slabá a odpudivá.', '<strong>Výsledok: klip je feromagnetický</strong>'] },
      { task: 'Železo má Curieovu teplotu 770 °C. Čo sa stane pri zahriatí na 800 °C?',
        steps: ['800 °C je nad Curieovou teplotou.', 'Domény sa rozpadnú a železo stratí trvalú magnetizáciu.', '<strong>Výsledok: prestane byť feromagnetické</strong>'] }
    ]
  });

  gen('v9-magneticke', () => {
    const FERRO = ['železo', 'nikel', 'kobalt'];
    const NON = ['med', 'zinok', 'hliník', 'platina'];
    const ans = pick(FERRO);
    const options = shuffle([ans, ...shuffle(NON).slice(0, 3)]);
    const HINT = {
      'železo': T.s('Železo je feromagnetické, silno sa priťahuje k magnetu.'),
      'nikel': T.s('Nikel je feromagnetický kov.'),
      'kobalt': T.s('Kobalt je feromagnetický kov.'),
      'med': T.s('Med je diamagnetický: magnetické pole ho slabo odpudzuje.'),
      'zinok': T.s('Zinok je diamagnetický kov so slabou odozvou.'),
      'hliník': T.s('Hliník je paramagnetický: slabo sa zmagnetizuje v smere poľa.'),
      'platina': T.s('Platina je paramagnetická, jej odozva je slabá.')
    };
    return {
      type: 'choice',
      q: T`Ktorý z uvedených materiálov je feromagnetický?`,
      options,
      answer: ans,
      choiceHints: hintsFor(options, ans, HINT),
      solution: T`Feromagnetický materiál silno priťahovaný magnetom je ${ans}.`,
      hint: T`Feromagnetizmus majú len niektoré prechodné kovy, najmä železo, nikel a kobalt.`
    };
  });

  /* ---------- 8. Nanomateriály a kvantové materiály ---------- */

  lesson({
    id: 'v9-nanomaterialy', order: 80, theme: 'pevne', title: 'Nanomateriály a kvantové materiály',
    summary: 'Pomer povrchu k objemu v nanomateriáloch a príklady kvantových materiálov.',
    theory: [
      `<p>Nanomateriály majú aspoň jeden rozmer v rozsahu približne 1 až 100 nm. Keď sa veľkosť zmenšuje, rastie pomer povrchu k objemu a veľká časť atómov leží na povrchu. Vlastnosti, ako farba, teplota topenia alebo reaktivita, sa preto môžu výrazne líšiť od veľkého kusu tej istej látky.</p>`,
      `<p>Pre kocku s hranou $a$ platí $S = 6a^2$ a $V = a^3$, teda $\\dfrac{S}{V}=\\dfrac{6}{a}$. Pomer klesá s rastúcou hranou, a preto je hrana v menovateli. Keď sa hrana zmenší desaťkrát, pomer sa zvýši desaťkrát.</p>`,
      `<p><strong>Kvantové materiály</strong> vykazujú účinky kvantovej mechaniky v makroskopickom meradle. Príklady: grafén (jedna vrstva atómov uhlíka s veľmi vysokou pohyblivosťou elektrónov), kvantové body (veľkosť určuje farbu vyžiareného svetla) a topologické izolanty.</p>`
    ],
    examples: [
      { task: 'Kocka má hranu $a=2\\,\\text{nm}$. Aký je pomer $S/V$?',
        steps: ['$\\dfrac{S}{V}=\\dfrac{6a^2}{a^3}=\\dfrac{6}{a}$.', '$\\dfrac{6}{2}=3\\,\\text{nm}^{-1}$.', '<strong>Výsledok: 3 nm⁻¹</strong>'] },
      { task: 'Ako sa zmení pomer $S/V$, ak sa hrana zdvojnásobí?',
        steps: ['$S/V = 6/a$ je nepriamo úmerný hrane.', 'Dvojnásobná hrana dá polovičný pomer.', '<strong>Výsledok: klesne na polovicu</strong>'] }
    ]
  });

  gen('v9-nanomaterialy', () => {
    const a = pick([1, 2, 4, 5, 10, 20]), ans = 6 / a;
    return {
      q: T`Kocka z nanomateriálu má hranu $a=${a}\\,\\text{nm}$. Aký je pomer povrchu k objemu $S/V$ v jednotkách $\\text{nm}^{-1}$?`,
      answer: ans,
      tol: 1e-3,
      mistakes: dropAns([
        { value: 6 * a, msg: T`S rastúcou hranou pomer klesá. Hrana je v menovateli: $6/a$, nie $6a$.` },
        { value: 6 / (a * a), msg: T`Vzorec je $S/V=6/a$, nie $6/a^2$. Mocninu hrany nedelíme dvakrát.` }
      ], ans),
      solution: T`$\\dfrac{S}{V}=\\dfrac{6a^2}{a^3}=\\dfrac{6}{a}=\\dfrac{6}{${a}}=${mn(ans)}\\,\\text{nm}^{-1}$.`,
      hint: T`Pre kocku je $S=6a^2$ a $V=a^3$. Skráť a dostaneš $S/V$.`
    };
  });
})();
