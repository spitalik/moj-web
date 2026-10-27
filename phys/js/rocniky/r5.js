/* 5. ročník ZŠ: vlastnosti látok a telies, skupenstva, hmotnosť, objem a hustota, meranie, jednotky, teplota a pokus.
   Výberové úlohy (choice) a číselné úlohy (num) s typickými chybami. */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r5' }, l));
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

  /* ---------- Vlastnosti látok a telies ---------- */

  lesson({
    id: 'r5-vlastnosti-latok', order: 10, theme: 'latky', title: 'Vlastnosti látok a telies',
    summary: 'Rozlíšiš látku od telesa a poznáš základné vlastnosti materiálov.',
    theory: [
      `<p><strong>Látka</strong> je materiál, z ktorého je niečo vyrobené, napríklad drevo, železo alebo voda.
       <strong>Teleso</strong> je konkrétny predmet vyrobený z jednej alebo viacerých látok, napríklad stôl, kľúč alebo fľaša.</p>`,
      `<p>Vlastnosti látok zisťujeme pozorovaním a meraním: farba, lesk, tvrdosť, pružnosť, rozpustnosť vo vode či vedenie tepla a elektrického prúdu.</p>`,
      `<ul>
         <li><strong>Tvrdosť</strong>: odolnosť voči zoškriabaniu.</li>
         <li><strong>Pružnosť</strong>: schopnosť vrátiť sa do pôvodného tvaru po stlačení alebo ohnutí.</li>
         <li><strong>Rozpustnosť</strong>: schopnosť rozpustiť sa vo vode. Soľ sa rozpúšťa, piesok nie.</li>
       </ul>`,
      `<p>Telesá z tej istej látky môžu mať rozličný tvar a veľkosť. Vlastnosti látky sa však nemenia: dva kusy dreva majú rovnaké vlastnosti dreva.</p>`
    ],
    examples: [
      { task: 'Je kľúč teleso, alebo látka?',
        steps: ['Kľúč je konkrétny predmet.', '<strong>Výsledok: teleso, vyrobené z kovu.</strong>'] },
      { task: 'Ktorá látka sa rozpustí vo vode: soľ, alebo piesok?',
        steps: ['Soľ sa vo vode rozpúšťa.', 'Piesok sa vo vode nerozpustí.', '<strong>Výsledok: soľ.</strong>'] }
    ]
  });

  gen('r5-vlastnosti-latok', () => choice(pick([
    { q: T`Ktoré slovo označuje teleso, nie látku?`, ok: T`stolička`, bad: [T`drevo`, T`železo`],
      hints: [T`Drevo je látka, z ktorej môže byť predmet vyrobený.`, T`Železo je látka, nie konkrétny predmet.`],
      solution: T`Stolička je konkrétny predmet, teda teleso. Drevo a železo sú látky.`,
      hint: T`Teleso je predmet, látka je materiál.` },
    { q: T`Ktorá vlastnosť opisuje, či sa látka vráti do pôvodného tvaru?`, ok: T`pružnosť`, bad: [T`tvrdosť`, T`rozpustnosť`],
      hints: [T`Tvrdosť opisuje odolnosť voči zoškriabaniu, nie návrat tvaru.`, null],
      solution: T`Pružná látka sa po stlačení alebo ohnutí vráti do pôvodného tvaru.`,
      hint: T`Pomysli na gumičku.` },
    { q: T`Ktorá látka sa rozpúšťa vo vode?`, ok: T`cukor`, bad: [T`piesok`, T`kameň`],
      hints: [T`Piesok sa vo vode nerozpustí.`, T`Kameň sa vo vode nerozpustí.`],
      solution: T`Cukor sa vo vode rozpúšťa. Piesok a kameň nie.`,
      hint: T`Skús si predstaviť, čo sa stane, keď sa lyžička cukru pridá do pohára vody.` },
    { q: T`Ktorá vlastnosť opisuje odolnosť látky voči zoškriabaniu?`, ok: T`tvrdosť`, bad: [T`pružnosť`, T`rozpustnosť`],
      solution: T`Tvrdosť určuje, ako ľahko sa látka poškriabe. Diamant je veľmi tvrdý.`,
      hint: T`Skús si predstaviť skúšku s kľúčom na sklo alebo kov.` }
  ])));

  /* ---------- Pevné, kvapalné a plynné látky ---------- */

  lesson({
    id: 'r5-skupenstva', order: 20, theme: 'latky', title: 'Pevné, kvapalné a plynné látky',
    summary: 'Porovnáš pevné, kvapalné a plynné látky podľa tvaru a objemu.',
    theory: [
      `<p>Látky sa vyskytujú v troch základných skupenstvách: <strong>pevné</strong>, <strong>kvapalné</strong> a <strong>plynné</strong>.
       Rozlišujeme ich podľa toho, či majú stály tvar a stály objem.</p>`,
      `<ul>
         <li><strong>Pevná látka</strong>: stály tvar aj objem, napríklad kameň alebo kocka ľadu.</li>
         <li><strong>Kvapalina</strong>: stály objem, ale mení tvar podľa nádoby, napríklad voda v pohári.</li>
         <li><strong>Plyn</strong>: nemá stály tvar ani objem, vyplní celú nádobu, napríklad vzduch v balóne.</li>
       </ul>`,
      `<p>Častice pevných látok sú k sebe blízko, preto sa ťažko stláčajú. Častice plynov sú od seba ďaleko, preto sa plyny dajú stlačiť.</p>`,
      `<p><strong>Pokus:</strong> vodu nalejeme do vysokého a potom do širokého pohára. Voda zaberie vždy tvar nádoby, ale jej objem sa nezmení.</p>`
    ],
    examples: [
      { task: 'Aké vlastnosti má voda v pohári?',
        steps: ['Voda je kvapalina, mení tvar podľa nádoby.', 'Jej objem sa nemení.', '<strong>Výsledok: stály objem, meniaci sa tvar.</strong>'] },
      { task: 'Prečo sa vzduch dá stlačiť do futbalovej lopty?',
        steps: ['Častice plynu sú od seba ďaleko.', '<strong>Výsledok: pri stlačení sa častice priblížia k sebe.</strong>'] }
    ]
  });

  gen('r5-skupenstva', () => choice(pick([
    { q: T`Ktoré skupenstvo má stály tvar aj objem?`, ok: T`pevné`, bad: [T`kvapalné`, T`plynné`],
      hints: [T`Kvapalina mení tvar podľa nádoby.`, T`Plyn nemá stály tvar ani objem.`],
      solution: T`Pevné látky si zachovávajú tvar aj objem, napríklad kameň.`,
      hint: T`Pomysli na kameň alebo kocku.` },
    { q: T`Ktoré skupenstvo vždy vyplní celú nádobu?`, ok: T`plynné`, bad: [T`kvapalné`, T`pevné`],
      hints: [T`Kvapalina zaberá len spodnú časť nádoby, nie celú nádobu.`, T`Pevné telesá si zachovávajú tvar a nádobu nevyplnia.`],
      solution: T`Plyn sa rozpína a vyplní celý priestor, ktorý má k dispozícii.`,
      hint: T`Vzduch v balóne sa rozťahuje po celom balóne.` },
    { q: T`Ktoré skupenstvo má stály objem, ale nie stály tvar?`, ok: T`kvapalné`, bad: [T`pevné`, T`plynné`],
      hints: [T`Pevné látky majú stály tvar aj objem.`, T`Plyny nemajú stály objem ani tvar.`],
      solution: T`Kvapalina má stály objem, mení však tvar podľa nádoby.`,
      hint: T`Nalej vodu do iného pohára a sleduj tvar.` },
    { q: T`Ktoré skupenstvo sa dá najľahšie stlačiť?`, ok: T`plynné`, bad: [T`pevné`, T`kvapalné`],
      hints: [T`Pevné telesá sa stláčajú veľmi ťažko.`, T`Kvapaliny sa stláčajú veľmi ťažko.`],
      solution: T`Častice plynu sú od seba ďaleko, preto sa plyn dá stlačiť najľahšie.`,
      hint: T`Pomysli na vzduch v pumpe na bicykel.` }
  ])));

  /* ---------- Telesá a ich materiál ---------- */

  lesson({
    id: 'r5-telesa', order: 30, theme: 'latky', title: 'Telesá a ich vlastnosti',
    summary: 'Vysvetlíš, z čoho sú telesá zložené, a vyberieš materiál vhodný na daný účel.',
    theory: [
      `<p>Teleso je predmet vyrobený z látok. Mnohé telesá sa skladajú z viacerých látok. Nožnice majú kovové čepele a plastové rúčky.</p>`,
      `<p>Pri výrobe predmetov vyberáme látku podľa toho, čo od predmetu chceme. Ak potrebujeme, aby predmet bol priehľadný, vyberieme sklo.
       Ak chceme, aby sa predmet ľahko neohrieval, vyberieme materiál, ktorý teplo zle vedie.</p>`,
      `<ul>
         <li>Kovy vedú teplo a elektrický prúd dobre, preto sa hodia na hrnce a kábliky.</li>
         <li>Plasty a drevo vedú teplo zle, preto sa hodia na rúčky hrncov.</li>
       </ul>`,
      `<p>Pri posudzovaní telesa si vždy polož otázku: z akej látky je vyrobené a prečo práve z nej?</p>`
    ],
    examples: [
      { task: 'Prečo sú rúčky hrncov z plastu alebo dreva?',
        steps: ['Plast a drevo vedú teplo zle.', '<strong>Výsledok: rúčka sa neohrieva tak rýchlo ako kov, a preto sa ľahko drží.</strong>'] },
      { task: 'Je pohár teleso, alebo látka?',
        steps: ['Pohár je konkrétny predmet.', '<strong>Výsledok: teleso.</strong>'] }
    ]
  });

  gen('r5-telesa', () => choice(pick([
    { q: T`Prečo sa rúčky hrncov vyrábajú z plastu alebo dreva?`, ok: T`nevedú teplo tak dobre ako kov`, bad: [T`sú tvrdšie ako kov`, T`vedú teplo lepšie ako kov`],
      hints: [T`Tvrdosť nesúvisí s vedením tepla. Rúčka sa ohrieva kvôli vedeniu tepla.`, T`Plast ani drevo teplo nevedú dobre. Preto sa rúčka neohrieva.`],
      solution: T`Plast a drevo teplo nevedú dobre. Rúčka preto zostáva chladná a dá sa bezpečne držať.`,
      hint: T`Otázka je, ako rýchlo prechádza teplo cez látku.` },
    { q: T`Ktorá látka je vhodná na pohár na vodu?`, ok: T`sklo`, bad: [T`piesok`, T`vlna`],
      hints: [T`Piesok sa nedá použiť na pohár, nie je pevný ani vodotesný.`, T`Vlna nie je vodotesná a voda by z nej pretekala.`],
      solution: T`Sklo je pevné, vodotesné a priehľadné, preto sa z neho vyrábajú poháre.`,
      hint: T`Hľadáš látku, ktorá drží vodu a dá sa do nej pozerať.` },
    { q: T`Ktorý predmet je zložený z viacerých látok?`, ok: T`nožnice s kovovými čepeľami a plastovými rúčkami`, bad: [T`kovová lyžica`, T`sklenený pohár`],
      hints: [T`Lyžica je vyrobená z jedného kovu.`, T`Sklenený pohár je vyrobený zo skla.`],
      solution: T`Nožnice majú kovové čepele aj plastové rúčky. Lyžica a pohár sú z jednej látky.`,
      hint: T`Hľadaj predmet, v ktorom sú časti z rôznych materiálov.` },
    { q: T`Čo je teleso?`, ok: T`konkrétny predmet vyrobený z látok`, bad: [T`materiál, z ktorého je predmet vyrobený`, T`vlastnosť látky`],
      hints: [T`Materiál je látka, nie teleso.`, T`Vlastnosť je to, ako sa látka správa, nie predmet.`],
      solution: T`Teleso je konkrétny predmet, napríklad stôl alebo kľúč. Je vyrobený z jednej alebo viacerých látok.`,
      hint: T`Teleso je niečo, čo môžeš vziať do ruky.` }
  ])));

  /* ---------- Hmotnosť, objem a hustota ---------- */

  lesson({
    id: 'r5-hustota', order: 40, theme: 'latky', title: 'Hmotnosť, objem a hustota – základné predstavy',
    summary: 'Rozlíšiš hmotnosť a objem a vypočítaš hustotu látky.',
    theory: [
      `<p><strong>Hmotnosť</strong> $m$ hovorí, koľko látky teleso obsahuje. Jednotkou je gram $\\text{g}$ alebo kilogram $\\text{kg}$. Hmotnosť meriame váhami.</p>`,
      `<p><strong>Objem</strong> $V$ je priestor, ktorý teleso zaberá. Jednotky sú napríklad $\\text{cm}^3$ alebo mililiter, pričom $1\\,\\text{ml}=1\\,\\text{cm}^3$.
       Objem kvapaliny meriame odmerným valcom.</p>`,
      `<p><strong>Hustota</strong> $\\rho$ hovorí, akú hmotnosť má jeden $\\text{cm}^3$ látky. Vypočítame ju podielom: $\\rho = \\frac{m}{V}$.
       Hustota je vlastnosť látky, nie telesa. Voda má hustotu približne $1\\,\\text{g/cm}^3$.</p>`,
      `<ul>
         <li>Teleso s väčšou hustotou než voda sa potopí, napríklad kameň.</li>
         <li>Teleso s menšou hustotou než voda pláva, napríklad drevo.</li>
       </ul>`
    ],
    examples: [
      { task: 'Kocka má hmotnosť $48\\,\\text{g}$ a objem $16\\,\\text{cm}^3$. Aká je jej hustota?',
        steps: ['$\\rho=\\frac{m}{V}=\\frac{48}{16}$', '<strong>Výsledok: $3\\,\\text{g/cm}^3$</strong>'] },
      { task: 'Látka má hustotu $2\\,\\text{g/cm}^3$ a teleso z nej má objem $10\\,\\text{cm}^3$. Aká je jeho hmotnosť?',
        steps: ['$m=\\rho\\cdot V=2\\cdot 10$', '<strong>Výsledok: $20\\,\\text{g}$</strong>'] }
    ]
  });

  gen('r5-hustota', () => {
    const rho = rnd(1, 9), V = rnd(2, 12), m = rho * V;
    if (Math.random() < 0.5) {
      return {
        q: T`Teleso má hustotu $\\rho=${rho}\\,\\text{g/cm}^3$ a objem $V=${V}\\,\\text{cm}^3$. Aká je jeho hmotnosť $m$ v gramoch?`,
        answer: m,
        solution: T`$m=\\rho\\cdot V=${rho}\\cdot ${V}=${m}$, teda hmotnosť je $${m}\\,\\text{g}$.`,
        hint: T`Hmotnosť dostaneš vynásobením hustoty objemom: $m=\\rho\\cdot V$.`,
        mistakes: [
          { value: rho + V, msg: T`Hustotu a objem si sčítal. Hmotnosť sa počíta súčinom $m=\\rho\\cdot V$.` },
          { value: V, msg: T`Hustotou si delil namiesto násobenia. Pri hustote platí $m=\\rho\\cdot V$.` }
        ].filter((x) => x.value !== m)
      };
    }
    return {
      q: T`Teleso má hmotnosť $m=${m}\\,\\text{g}$ a objem $V=${V}\\,\\text{cm}^3$. Aká je jeho hustota $\\rho$ v $\\text{g/cm}^3$?`,
      answer: rho,
      solution: T`$\\rho=\\frac{m}{V}=\\frac{${m}}{${V}}=${rho}$, teda hustota je $${rho}\\,\\text{g/cm}^3$.`,
      hint: T`Hustota je podiel hmotnosti a objemu: $\\rho=\\frac{m}{V}$.`,
      mistakes: [
        { value: m * V, msg: T`Hmotnosť si vynásobil objemom. Hustota je podiel, nie súčin.` },
        { value: m + V, msg: T`Hmotnosť a objem si sčítal. Hustotu dostaneš delením $\\rho=\\frac{m}{V}$.` }
      ].filter((x) => x.value !== rho)
    };
  });

  /* ---------- Meranie dĺžky, objemu a hmotnosti ---------- */

  lesson({
    id: 'r5-merania', order: 50, theme: 'latky', title: 'Meranie dĺžky, objemu a hmotnosti',
    summary: 'Správne odčítaš výsledok merania a vypočítaš rozdiel nameraných hodnôt.',
    theory: [
      `<p>Dĺžku meriame pravítkom alebo metrom. Nulu stupnice priložíme presne na začiatok telesa a odčítame koniec.
       Častá chyba je začať merať od čísla 1, nie od nuly.</p>`,
      `<p>Objem kvapaliny odmeriame odmerným valcom. Oko dáme do výšky hladiny a odčítame dolný okraj hladiny, takzvaný <strong>menisk</strong>.
       Ak sa pozeráme zhora alebo zdola, výsledok je skreslený.</p>`,
      `<p>Hmotnosť meriame váhami. Pred meraním váhy vynulujeme, aby sme nezapočítali hmotnosť nádoby.</p>`,
      `<p>Objem telesa, ktoré sa potopí, zistíme pomocou vody: odčítame hladinu pred ponorením a po ponorení. Rozdiel hladín je objem telesa.</p>`
    ],
    examples: [
      { task: 'Tyčka leží na pravítku od čísla 2 cm do čísla 9 cm. Aká je jej dĺžka?',
        steps: ['Dĺžka je rozdiel koncového a začiatočného čísla: $9 - 2$.', '<strong>Výsledok: 7 cm</strong>'] },
      { task: 'Vo valci je $50\\,\\text{ml}$ vody. Po ponorení kocky hladina stúpla na $72\\,\\text{ml}$. Aký objem má kocka?',
        steps: ['Objem kocky je prírastok hladiny: $72 - 50$.', '<strong>Výsledok: $22\\,\\text{ml}$</strong>'] }
    ]
  });

  gen('r5-merania', () => {
    const s = rnd(20, 80), d = rnd(5, 40), f = s + d;
    return {
      q: T`Vo valci je $${s}\\,\\text{ml}$ vody. Do vody ponoríme kameň a hladina vystúpi na $${f}\\,\\text{ml}$. Aký objem má kameň v mililitroch?`,
      answer: d,
      solution: T`Objem kameňa je rozdiel hladín: $${f} - ${s} = ${d}$, teda $${d}\\,\\text{ml}$.`,
      hint: T`Objem ponoreného telesa zistíš rozdielom hladín pred a po ponorení.`,
      mistakes: [
        { value: f, msg: T`To je celkový objem vody aj kameňa. Objem kameňa dostaneš rozdielom hladín.` },
        { value: s + f, msg: T`Hladiny si sčítal. Objem kameňa je ich rozdiel.` }
      ].filter((x) => x.value !== d)
    };
  });

  /* ---------- Jednotky fyzikálnych veličín ---------- */

  lesson({
    id: 'r5-jednotky', order: 60, theme: 'latky', title: 'Jednotky fyzikálnych veličín',
    summary: 'Prevedieš jednotky dĺžky, hmotnosti a objemu.',
    theory: [
      `<p>Fyzikálna veličina je to, čo meriame, napríklad dĺžka, hmotnosť, čas alebo teplota. Každá veličina má <strong>jednotku</strong>,
       s ktorou ju porovnávame. Základné jednotky sústavy SI sú napríklad meter $\\text{m}$, kilogram $\\text{kg}$ a sekunda $\\text{s}$.</p>`,
      `<ul>
         <li>Dĺžka: $1\\,\\text{km}=1000\\,\\text{m}$, $1\\,\\text{m}=100\\,\\text{cm}$, $1\\,\\text{cm}=10\\,\\text{mm}$.</li>
         <li>Hmotnosť: $1\\,\\text{kg}=1000\\,\\text{g}$, $1\\,\\text{t}=1000\\,\\text{kg}$.</li>
         <li>Objem: $1\\,\\text{l}=1000\\,\\text{ml}$, $1\\,\\text{dm}^3=1\\,\\text{l}$.</li>
       </ul>`,
      `<p>Prevod na <strong>menšiu</strong> jednotku dáva väčšie číslo, preto číslo násobíme: $2\\,\\text{km}=2000\\,\\text{m}$.
       Prevod na <strong>väčšiu</strong> jednotku dáva menšie číslo, preto číslo delíme: $300\\,\\text{cm}=3\\,\\text{m}$.</p>`,
      `<p>Pozor na častú chybu: $1\\,\\text{m}$ nie je $10\\,\\text{cm}$, ale $100\\,\\text{cm}$.</p>`
    ],
    examples: [
      { task: 'Prevedi $3{,}5\\,\\text{m}$ na centimetre.',
        steps: ['Meter má 100 cm, prevod na menšiu jednotku číslo násobíme.', '$3{,}5\\cdot 100=350$', '<strong>Výsledok: 350 cm</strong>'] },
      { task: 'Prevedi $4\\,500\\,\\text{g}$ na kilogramy.',
        steps: ['Kilogram má 1000 g, prevod na väčšiu jednotku číslo delíme.', '$4500 : 1000=4{,}5$', '<strong>Výsledok: $4{,}5\\,\\text{kg}$</strong>'] }
    ]
  });

  gen('r5-jednotky', () => {
    const k = rnd(1, 9), g = 500 * k;
    const opts = [
      { q: T`Koľko centimetrov je $${k}\\,\\text{m}$?`, answer: k * 100, wrong: k * 10,
        msg: T`Meter má 100 centimetrov, nie 10.`,
        sol: T`$1\\,\\text{m}=100\\,\\text{cm}$, teda $${k}\\cdot 100=${k * 100}$ cm.` },
      { q: T`Koľko metrov je $${k}\\,\\text{km}$?`, answer: k * 1000, wrong: k * 100,
        msg: T`Kilometer má 1000 metrov, nie 100.`,
        sol: T`$1\\,\\text{km}=1000\\,\\text{m}$, teda $${k}\\cdot 1000=${k * 1000}$ m.` },
      { q: T`Koľko gramov je $${k}\\,\\text{kg}$?`, answer: k * 1000, wrong: k * 100,
        msg: T`Kilogram má 1000 gramov, nie 100.`,
        sol: T`$1\\,\\text{kg}=1000\\,\\text{g}$, teda $${k}\\cdot 1000=${k * 1000}$ g.` },
      { q: T`Koľko kilogramov je $${g}\\,\\text{g}$?`, answer: k / 2, wrong: k * 5,
        msg: T`Kilogram má 1000 gramov. Gramy na kilogramy delíme tisícom, nie stovkou.`,
        sol: T`$${g} : 1000 = ${k / 2}$, teda $${g}\\,\\text{g}=${k / 2}\\,\\text{kg}$.` }
    ];
    const it = pick(opts);
    return {
      q: it.q,
      answer: it.answer,
      solution: it.sol,
      hint: T`Pomôže ti tento vzťah: 1 km = 1000 m, 1 m = 100 cm, 1 kg = 1000 g.`,
      mistakes: [{ value: it.wrong, msg: it.msg }]
    };
  });

  /* ---------- Teplota a meranie teploty ---------- */

  lesson({
    id: 'r5-teplota', order: 70, theme: 'teplo', title: 'Teplota a meranie teploty',
    summary: 'Odčítaš teplotu v stupňoch Celzia a počítaš jej zmeny.',
    theory: [
      `<p>Teplotu meriame <strong>teplomerom</strong>. Na stupnici Celzia sú dva pevné body: topiaci sa ľad má teplotu $0\\,{}^\\circ\\text{C}$
       a voda vrie pri $100\\,{}^\\circ\\text{C}$ pri normálnom tlaku.</p>`,
      `<ul>
         <li>Teplomer obsahuje kvapalinu, napríklad lieh, ktorá sa pri zahriatí rozťahuje. Podľa dĺžky stĺpca odčítame teplotu.</li>
         <li>Teplomer necháme na mieste aspoň niekoľko minút, aby ukázal správnu teplotu.</li>
         <li>Teplomer sa nesmie dotýkať dna nádoby, lebo by ukázal teplotu dna, nie kvapaliny.</li>
       </ul>`,
      `<p>Teplota sa mení. Ak sa teplota zvýši, zmenu pričítame. Ak klesne, odčítame. Záporné teploty sú pod nulou,
       napríklad $-5\\,{}^\\circ\\text{C}$ je o 5 stupňov chladnejšie ako topiaci sa ľad.</p>`
    ],
    examples: [
      { task: 'Ráno bolo $-4\\,{}^\\circ\\text{C}$ a na obed vzrástla teplota o $9\\,{}^\\circ\\text{C}$. Aká je teplota na obed?',
        steps: ['$-4+9=5$', '<strong>Výsledok: $5\\,{}^\\circ\\text{C}$</strong>'] },
      { task: 'Voda mala $20\\,{}^\\circ\\text{C}$ a zohriala sa na $100\\,{}^\\circ\\text{C}$. O koľko stupňov sa zohriala?',
        steps: ['$100-20=80$', '<strong>Výsledok: o $80\\,{}^\\circ\\text{C}$</strong>'] }
    ]
  });

  gen('r5-teplota', () => {
    const t0 = rnd(-10, 15), d = rnd(1, 12), t1 = t0 + d;
    return {
      signed: true,
      q: T`Ráno bolo $${t0}\\,{}^\\circ\\text{C}$. Teplota vzrástla o $${d}\\,{}^\\circ\\text{C}$. Aká je teraz teplota?`,
      answer: t1,
      solution: T`$${t0}+${d}=${t1}$, teda teplota je $${t1}\\,{}^\\circ\\text{C}$.`,
      hint: T`Zmena teploty sa pričíta k počiatočnej teplote.`,
      mistakes: [
        { value: t0 - d, msg: T`Zmenu si odčítal. Pri zvýšení teploty sa hodnota pričítava.` },
        { value: d, msg: T`Zabudol si na počiatočnú teplotu. Nová teplota je počiatočná plus zmena.` }
      ].filter((x) => x.value !== t1)
    };
  });

  /* ---------- Pozorovanie, meranie a jednoduché experimenty ---------- */

  lesson({
    id: 'r5-pozorovanie', order: 80, theme: 'opakovanie', title: 'Pozorovanie, meranie a jednoduché experimenty',
    summary: 'Naplánuješ jednoduchý pokus, zapíšeš výsledky a vyvodíš záver.',
    theory: [
      `<p>Pri skúmaní postupujeme krok za krokom: pozorujeme, položíme si otázku, vyslovíme <strong>hypotézu</strong>, urobíme pokus,
       zapíšeme výsledky a sformulujeme záver. Hypotéza je overiteľný predpoklad, nie hotový záver.</p>`,
      `<ol>
         <li>Urči, čo chceš zistiť.</li>
         <li>Pri pokuse meníš iba jednu vec naraz.</li>
         <li>Výsledky zapisuj hneď do tabuľky.</li>
         <li>Pokus zopakuj, aby sa výsledky dali porovnať.</li>
       </ol>`,
      `<p>Veličina, ktorú meníme, sa volá <strong>premenná</strong>. Veci, ktoré necháme rovnaké, sú kontrolované. Ak meníme naraz viac vecí, nevieme určiť, čo výsledok spôsobilo.</p>`,
      `<p>Namerané hodnoty zapisujeme vždy s jednotkou, napríklad $25\\,\\text{cm}$, nie iba $25$.</p>`
    ],
    examples: [
      { task: 'Chceš zistiť, či sa soľ rýchlejšie rozpustí v teplej vode ako v studenej. Čo je premenná?',
        steps: ['Meníme teplotu vody.', 'Množstvo soli a vody necháme rovnaké.', '<strong>Výsledok: premennou je teplota vody.</strong>'] },
      { task: 'Ako zvýšiť presnosť merania?',
        steps: ['Pokus zopakujeme viackrát.', 'Výsledky spriemerujeme.', '<strong>Výsledok: pokus opakujeme a výsledky spriemerujeme.</strong>'] }
    ]
  });

  gen('r5-pozorovanie', () => choice(pick([
    { q: T`Ktorá veličina sa pri pokuse MENÍ, ak chceš zistiť vplyv teploty vody na rozpúšťanie soli?`, ok: T`teplota vody`, bad: [T`množstvo soli`, T`veľkosť pohára`],
      hints: [T`Množstvo soli necháme rovnaké, aby bol pokus férový.`, T`Veľkosť pohára necháme rovnakú, aby sa výsledky dali porovnať.`],
      solution: T`Premenná je veličina, ktorú meníme. Ostatné veci necháme rovnaké.`,
      hint: T`Zamysli sa, čo je v pokuse zmenou, ktorú chceš sledovať.` },
    { q: T`Ktorý zápis merania je správny?`, ok: T`25 cm`, bad: [T`25`, T`zapísať výsledok iba ústne`],
      hints: [T`Bez jednotky je číslo bez významu.`, T`Výsledok sa zapisuje do tabuľky, aby ho bolo možné porovnať.`],
      solution: T`Výsledok merania zapisujeme s jednotkou, napríklad 25 cm.`,
      hint: T`Každá fyzikálna veličina má jednotku.` },
    { q: T`Ako zvýšiť presnosť merania?`, ok: T`pokus zopakovať a výsledky spriemerovať`, bad: [T`zmeniť naraz viac vecí`, T`merať len raz a bez zápisu`],
      hints: [T`Ak zmeníš naraz viac vecí, nevieš určiť, čo spôsobilo výsledok.`, T`Bez zápisu sa výsledky nedajú porovnať.`],
      solution: T`Opakovaním pokusu a spriemerovaním výsledkov sa znižuje vplyv náhodných chýb.`,
      hint: T`Presnejšie výsledky dostaneš opakovaním.` },
    { q: T`Čo je hypotéza?`, ok: T`overiteľný predpoklad o výsledku pokusu`, bad: [T`hotový záver po pokuse`, T`presné meranie bez chyby`],
      hints: [T`Záver vzniká až po pokuse, hypotéza je predpoklad pred pokusom.`, T`Presné meranie bez chyby nie je hypotéza, ale výsledok merania.`],
      solution: T`Hypotéza je predpoklad, ktorý overíme pokusom. Môže sa ukázať ako správny aj nesprávny.`,
      hint: T`Hypotézu vyslovíš pred pokusom.` }
  ])));
})();
