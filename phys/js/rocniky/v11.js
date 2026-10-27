/* 11. oblasť VŠ: mechanika tekutín (v11). Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt, shuffle } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v11' }, l));
  const gen = EXERCISES.register;

  lesson({
    id: 'v11-hydrostatika', order: 10, theme: 'tekutiny', title: 'Hydrostatika',
    summary: 'Tlak v kľudnej kvapaline závisí len od hĺbky a hustoty, nie od tvaru nádoby.',
    theory: [
      `<p><strong>Hydrostatika</strong> študuje kvapaliny v pokoji. Tlak v kvapaline v hĺbke $h$ je
       $p=\\rho g h$, kde $\\rho$ je hustota kvapaliny a $g$ gravitačné zrýchlenie. Ide o <em>pretlak</em>, teda tlak nad atmosférickým.</p>`,
      `<p>Tlak nezávisí od tvaru nádoby. V širokej aj úzkej nádobe rovnakej hĺbky je tlak na dne rovnaký. Tento zdanlivý paradox
       sa vysvetľuje tým, že tiaž kvapaliny nesie stena nádoby, nie dno.</p>`,
      `<p>Celkový (absolútny) tlak je $p=p_0+\\rho g h$, kde $p_0$ je atmosférický tlak. Rozdiel tlakov v kvapaline je
       úmerný výškovému rozdielu, preto sa tlak smerom nadol zväčšuje.</p>`,
      `<p><strong>Pascalov zákon:</strong> tlak vyvolaný na uzavretú kvapalinu sa prenesie rovnako do všetkých smerov. Využíva sa
       v hydraulických zdvihákoch, kde malá sila na malom piestu zdvihne veľké bremeno na veľkom piestu.</p>`
    ],
    examples: [
      { task: 'Aký je pretlak vody vo hĺbke $4\\,\\text{m}$? Hustota vody je $1000\\,\\text{kg/m}^3$, $g=9{,}81\\,\\text{m/s}^2$.',
        steps: ['$p=\\rho g h=1000\\cdot 9{,}81\\cdot 4=39\\,240\\,\\text{Pa}$.', '<strong>Výsledok: 39,24 kPa</strong>'] }
    ]
  });

  gen('v11-hydrostatika', () => {
    const h = pick([2, 5, 8, 10, 20]), ans = 9.81 * h;
    return {
      q: T`Aký je pretlak vody vo hĺbke $${h}\\,\\text{m}$? Hustota vody je $1000\\,\\text{kg/m}^3$, $g=${fmt(9.81)}\\,\\text{m/s}^2$. Výsledok v kPa.`,
      answer: ans,
      tol: 0.01,
      solution: T`$p=\\rho g h=1000\\cdot ${fmt(9.81)}\\cdot ${h}=${fmt(9.81 * h * 1000)}\\,\\text{Pa}=${fmt(ans)}\\,\\text{kPa}$.`,
      hint: T.s('Pretlak v kvapaline je $p=\\rho g h$. Výsledok v pascaloch vydeľ tisíckami, aby bol v kilopascaloch.'),
      // typické chyby: zabudnuté g; výsledok v paskaloch namiesto kilopascalov
      mistakes: [
        { value: h, msg: T`Zabudol si gravitačné zrýchlenie. Pretlak je $\\rho g h$, nie len hĺbka $h$.` },
        { value: 9.81 * h * 1000, msg: T`Výsledok je v pascaloch. Zadanie chce kilopascaly, vydeľ tisíckami.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v11-tlak-vztlak', order: 20, theme: 'tekutiny', title: 'Tlak a vztlak',
    summary: 'Archimedov zákon: na ponorené teleso pôsobí vztlak rovný tiaži vytlačenej kvapaliny.',
    theory: [
      `<p>Teleso ponorené do kvapaliny je nadľahčované silou, ktorá smeruje nahor. Túto <strong>vztlakovú silu</strong> určuje
       Archimedov zákon: $F_{vz}=\\rho_k\\,g\\,V$, kde $\\rho_k$ je hustota kvapaliny a $V$ objem ponorenej časti telesa.</p>`,
      `<p>Vztlak nezávisí od hĺbky ani od hustoty telesa, ale len od objemu vytlačenej kvapaliny. Hovorí sa tomu tiaž vytlačenej kvapaliny.</p>`,
      `<p>O plávaní rozhoduje porovnanie hustôt. Teleso s hustotou menšou ako kvapalina pláva a ponorí sa len toľko, aby vytlačená kvapalina
       mala tiaž rovnakú ako celé teleso. Teleso s väčšou hustotou klesne ku dnu.</p>`
    ],
    examples: [
      { task: 'Teleso s objemom $3\\,\\text{dm}^3$ je celé ponorené vo vode. Aká je vztlaková sila?',
        steps: ['$V=3\\,\\text{dm}^3=0{,}003\\,\\text{m}^3$.', '$F_{vz}=1000\\cdot 9{,}81\\cdot 0{,}003=29{,}43\\,\\text{N}$.', '<strong>Výsledok: 29,43 N</strong>'] }
    ]
  });

  gen('v11-tlak-vztlak', () => {
    const n = pick([2, 5, 10, 20]), ans = 9.81 * n;
    return {
      q: T`Ponorené teleso má objem $${n}\\,\\text{dm}^3$ a je celé ponorené vo vode. Aká je veľkosť vztlakovej sily? Hustota vody je $1000\\,\\text{kg/m}^3$, $g=${fmt(9.81)}\\,\\text{m/s}^2$. Výsledok v newtonoch.`,
      answer: ans,
      tol: 0.01,
      solution: T`$F_{vz}=\\rho\\,g\\,V=1000\\cdot ${fmt(9.81)}\\cdot ${fmt(n * 0.001)}=${fmt(ans)}\\,\\text{N}$.`,
      hint: T.s('Vztlak je tiaž vytlačenej vody: $F_{vz}=\\rho g V$. Objem najprv premeň na metre kubické.'),
      // typické chyby: zabudnuté g; objem nepremenený na metre kubické
      mistakes: [
        { value: n, msg: T`Zabudol si gravitačné zrýchlenie. Vztlak je $\\rho g V$.` },
        { value: 1000 * 9.81 * n, msg: T`Objem si nepremenil na metre kubické. Jeden decimeter kubický je $0{,}001\\,\\text{m}^3$.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v11-kontinuita', order: 30, theme: 'tekutiny', title: 'Rovnica kontinuity',
    summary: 'Ak kvapalina netečie zo zásobníka a nevzniká v ňom, súčin prierezu a rýchlosti je stály.',
    theory: [
      `<p>Pri ustálenom prúdení nestlačiteľnej kvapaliny sa hmota nehromadí ani nemizne. Za jednotku času preto musí
       cez každý prierez pretiecť rovnaký objem: $S_1 v_1 = S_2 v_2 = \\text{konšt.}$</p>`,
      `<p>Veličina $Q=S\\,v$ sa nazýva <strong>objemový prietok</strong>. Kde je potrubie užšie, tam voda tečie rýchlejšie.
       Preto sa rieka v úzkom úseku zrýchli a na širokej pláni spomalí.</p>`,
      `<p>Rovnica kontinuity je zákon zachovania hmoty pre prúd kvapaliny. Platí presne pre nestlačiteľnú kvapalinu
       a približne pre plyny pri malých rýchlostiach.</p>`
    ],
    examples: [
      { task: 'Potrubie sa zúži z prierezu $6\\,\\text{cm}^2$ na $2\\,\\text{cm}^2$. Voda v širšom úseku tečie rýchlosťou $1{,}5\\,\\text{m/s}$. Aká je rýchlosť v užšom úseku?',
        steps: ['$S_1 v_1=S_2 v_2$, teda $v_2=\\frac{6\\cdot 1{,}5}{2}$.', '<strong>Výsledok: 4,5 m/s</strong>'] }
    ]
  });

  gen('v11-kontinuita', () => {
    const a1 = pick([6, 12]), a2 = pick([2, 3, 4]), v1 = rnd(1, 6);
    const ans = Math.round((v1 * a1 / a2) * 100) / 100;
    return {
      q: T`Vodovodným potrubím prúdi voda. V úseku s prierezom $S_1=${a1}\\,\\text{cm}^2$ je rýchlosť $v_1=${v1}\\,\\text{m/s}$. Aká je rýchlosť $v_2$ v úseku s prierezom $S_2=${a2}\\,\\text{cm}^2$? Zadaj v m/s, zaokrúhli na 2 desatinné miesta.`,
      answer: ans,
      tol: 0.01,
      solution: T`Z rovnice kontinuity $S_1v_1=S_2v_2$: $v_2=\\frac{${a1}\\cdot ${v1}}{${a2}}=${fmt(ans)}\\,\\text{m/s}$.`,
      hint: T.s('Súčin prierezu a rýchlosti je v celom potrubí rovnaký: $S_1v_1=S_2v_2$.'),
      // typické chyby: obrátený pomer prierezov; rýchlosť sa nezmenila
      mistakes: [
        { value: v1 * a2 / a1, msg: T`Pomer prierezov si obrátil. Užší úsek má väčšiu rýchlosť, preto $v_2$ rastie.` },
        { value: v1, msg: T`Rýchlosť sa nezmenila? Zmenil sa prierez, a preto sa musí zmeniť aj rýchlosť.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v11-bernoulli', order: 40, theme: 'tekutiny', title: 'Bernoulliho rovnica',
    summary: 'Energia v prúdiacej kvapaline sa zachováva: kde je vyššia rýchlosť, tam je nižší tlak.',
    theory: [
      `<p><strong>Bernoulliho rovnica</strong> vyjadruje zákon zachovania energie pre ideálnu, nestlačiteľnú a netrecí kvapalinu v toku:
       $p+\\frac{1}{2}\\rho v^2+\\rho g h=\\text{konšt.}$ Členy zľava sú tlak, kinetická a potenciálna energia na objem.</p>`,
      `<p>Pre vodorovné potrubie ($h$ je rovnaké) platí $p_1+\\frac{1}{2}\\rho v_1^2=p_2+\\frac{1}{2}\\rho v_2^2$. Ak v jednom mieste
       rýchlosť vzrastie, tlak tam klesne.</p>`,
      `<p>Tento jav sa volá <strong>Venturiho efekt</strong> a využíva sa v karburátoroch, Venturiho meračoch prietoku
       a vo vývevách. Vzniká hlavne v zúžených miestach potrubia.</p>`
    ],
    examples: [
      { task: 'Vodorovným potrubím prúdi voda; v úzkom mieste je rýchlosť $6\\,\\text{m/s}$, v širokom $2\\,\\text{m/s}$. Aký je rozdiel tlakov $p_1-p_2$ v kPa?',
        steps: ['$p_1-p_2=\\frac{1}{2}\\rho\\left(v_2^2-v_1^2\\right)=\\frac{1}{2}\\cdot 1000\\cdot(36-4)$.', '$=16\\,000\\,\\text{Pa}$.', '<strong>Výsledok: 16 kPa</strong>'] }
    ]
  });

  gen('v11-bernoulli', () => {
    const v1 = rnd(1, 4), v2 = v1 + rnd(1, 6), ans = 0.5 * (v2 * v2 - v1 * v1);
    return {
      q: T`Vodorovným potrubím prúdi voda ($\\rho=1000\\,\\text{kg/m}^3$). Rýchlosť v bode 1 je $v_1=${v1}\\,\\text{m/s}$, v zúženom bode 2 je $v_2=${v2}\\,\\text{m/s}$. Aký je rozdiel tlakov $p_1-p_2$ v kilopascaloch?`,
      answer: ans,
      tol: 0.001,
      solution: T`$p_1-p_2=\\frac{1}{2}\\rho\\left(v_2^2-v_1^2\\right)=\\frac{1}{2}\\cdot 1000\\cdot(${v2 * v2}-${v1 * v1})=${fmt(ans * 1000)}\\,\\text{Pa}=${fmt(ans)}\\,\\text{kPa}$.`,
      hint: T.s('Pre vodorovné potrubie je $p_1-p_2=\\frac{1}{2}\\rho(v_2^2-v_1^2)$. Výsledok v pascaloch vydeľ tisíckami.'),
      // typické chyby: súčet namiesto rozdielu rýchlostí; rozdiel rýchlostí pred umocnením
      mistakes: [
        { value: 0.5 * (v1 * v1 + v2 * v2), msg: T`Rozdiel tlakov vyjadruje rozdiel rýchlostí, nie ich súčet.` },
        { value: 0.5 * (v2 - v1) * (v2 - v1), msg: T`Najprv odčítaj rýchlosti a až potom umocni. Bernoulli používa rozdiel druhých mocnín $v_2^2-v_1^2$.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v11-viskozita', order: 50, theme: 'tekutiny', title: 'Viskozita a laminárne prúdenie',
    summary: 'Vnútorné trenie kvapalín, Newtonov zákon a odpor pri pomalom pohybe guľôčky.',
    theory: [
      `<p><strong>Viskozita</strong> (dynamická viskozita $\\eta$) je mierou vnútorného trenia kvapaliny. Med má väčšiu viskozitu
       ako voda, lebo vrstvy kvapaliny sa proti sebe ťažšie posúvajú. Jednotka je $\\text{Pa}\\cdot\\text{s}$.</p>`,
      `<p><strong>Laminárne prúdenie</strong> je hladké, vrstvy kvapaliny kĺzu jedna po druhej bez miešania. Pri pomalom pohybe
       telesa v kvapaline vzniká odpor úmerný rýchlosti: <em>Stokesov zákon</em> $F=6\\pi\\eta r v$ pre guľu s polomerom $r$.</p>`,
      `<p>Pozor na rozdiel medzi polomerom a priemerom: vo vzorci je polomer $r$. Ak dosadíš priemer, sila vyjde dvojnásobná.</p>`
    ],
    examples: [
      { task: 'Guľôčka s polomerom $1\\,\\text{cm}$ sa pohybuje rýchlosťou $0{,}5\\,\\text{m/s}$ v kvapaline s $\\eta=2\\,\\text{Pa}\\cdot\\text{s}$. Aký je odpor?',
        steps: ['$F=6\\pi\\eta r v=6\\pi\\cdot 2\\cdot 0{,}01\\cdot 0{,}5$.', '$F\\approx 0{,}188\\,\\text{N}$.', '<strong>Výsledok: približne 188 mN</strong>'] }
    ]
  });

  gen('v11-viskozita', () => {
    const eta = pick([1, 2, 3]), r = pick([0.01, 0.02, 0.05]), v = pick([0.1, 0.2, 0.5]);
    const FN = 6 * Math.PI * eta * r * v;
    const ans = Math.round(FN * 1000 * 10) / 10;
    return {
      q: T`Guľôčka s polomerom $r=${fmt(r)}\\,\\text{m}$ sa pohybuje rýchlosťou $v=${fmt(v)}\\,\\text{m/s}$ v kvapaline s viskozitou $\\eta=${eta}\\,\\text{Pa}\\cdot\\text{s}$. Vypočítaj odpor podľa Stokesovho zákona $F=6\\pi\\eta r v$. Výsledok v miliníutonoch, zaokrúhli na 1 desatinné miesto.`,
      answer: ans,
      tol: 0.05,
      solution: T`$F=6\\pi\\eta r v\\approx ${fmt(ans)}\\,\\text{mN}\\approx ${fmt(ans / 1000)}\\,\\text{N}$.`,
      hint: T.s('Dosaď do vzorca $F=6\\pi\\eta r v$ a výsledok v newtonoch vynásob tisíckou.'),
      // typické chyby: priemer namiesto polomeru; zabudnuté π
      mistakes: [
        { value: 2 * ans, msg: T`Dosadil si priemer namiesto polomeru. Vo vzorci je $r$ polomer, priemer je $2r$.` },
        { value: ans / Math.PI, msg: T`Zabudol si násobiť číslom $\\pi$. Vzorec je $F=6\\pi\\eta r v$.` }
      ].filter((m) => m.value !== ans)
    };
  });

  lesson({
    id: 'v11-turbulencia', order: 60, theme: 'tekutiny', title: 'Turbulencia',
    summary: 'Reynoldsovo číslo rozhoduje, či je prúdenie hladké, alebo víriace.',
    theory: [
      `<p>Pri väčších rýchlostiach a priemeroch sa laminárne prúdenie rozpadne na <strong>turbulentné</strong>: vznikajú víry
       a miešanie, ktoré sa náhodne mení v čase a priestore.</p>`,
      `<p>O type prúdenia rozhoduje <strong>Reynoldsovo číslo</strong> $\\text{Re}=\\frac{\\rho v d}{\\eta}$, kde $d$ je charakteristický rozmer
       (napríklad priemer potrubia). Pre potrubie približne platí: $\\text{Re}&lt;2300$ laminárne, $\\text{Re}&gt;4000$ turbulentné,
       medzi tým prechodné prúdenie.</p>`,
      `<p>Turbulencia zvyšuje odpor prúdenia a miešanie látok, preto sa v praxi snažíme prúdenie hladiť, napríklad v krídlach lietadiel,
       alebo naopak vyvolávame turbulenciu, aby sa palivo lepšie zmiešalo.</p>`
    ],
    examples: [
      { task: 'Voda ($\\rho=1000\\,\\text{kg/m}^3$, $\\eta=10^{-3}\\,\\text{Pa}\\cdot\\text{s}$) tečie potrubím s priemerom $0{,}05\\,\\text{m}$ rýchlosťou $1\\,\\text{m/s}$. Aké je Reynoldsovo číslo?',
        steps: ['$\\text{Re}=\\frac{1000\\cdot 1\\cdot 0{,}05}{10^{-3}}$.', '<strong>Výsledok: Re = 50 000, prúdenie je turbulentné</strong>'] }
    ]
  });

  gen('v11-turbulencia', () => {
    const LAM = T.s('laminárne'), PRE = T.s('prechodné'), TUR = T.s('turbulentné');
    if (Math.random() < 0.5) {
      const v = pick([0.5, 1, 2]), d = pick([0.01, 0.05, 0.1]);
      const ans = Math.round(1e6 * v * d);
      return {
        q: T`Voda ($\\rho=1000\\,\\text{kg/m}^3$, $\\eta=${fmt(1e-3)}\\,\\text{Pa}\\cdot\\text{s}$) preteká potrubím s priemerom $d=${fmt(d)}\\,\\text{m}$ rýchlosťou $v=${fmt(v)}\\,\\text{m/s}$. Aké je Reynoldsovo číslo $\\text{Re}=\\frac{\\rho v d}{\\eta}$? Zaokrúhli na celé číslo.`,
        answer: ans,
        solution: T`$\\text{Re}=\\frac{1000\\cdot ${fmt(v)}\\cdot ${fmt(d)}}{${fmt(1e-3)}}=${ans}$.`,
        hint: T.s('Dosaď do vzorca $\\text{Re}=\\frac{\\rho v d}{\\eta}$. Pozor na jednotky viskozity.'),
        // typické chyby: zabudnutá viskozita v menovateli
        mistakes: [
          { value: 1000 * v * d, msg: T`Zabudol si deliť viskozitou $\\eta$. Vzorec je $\\frac{\\rho v d}{\\eta}$.` }
        ].filter((m) => m.value !== ans)
      };
    }
    const re = pick([1200, 1800, 3000, 50000, 120000]);
    const HINT = {};
    HINT[LAM] = T.s('Laminárne prúdenie je pri $\\text{Re}&lt;2300$, vrstvy kvapaliny sa neobmiešavajú.');
    HINT[PRE] = T.s('Prechodné prúdenie leží medzi $2300$ a $4000$.');
    HINT[TUR] = T.s('Turbulentné prúdenie je pri $\\text{Re}&gt;4000$, vznikajú víry.');
    const ans = re < 2300 ? LAM : re <= 4000 ? PRE : TUR;
    const options = shuffle([LAM, PRE, TUR]);
    const choiceHints = {};
    options.forEach((o) => { if (o !== ans) choiceHints[o] = HINT[o]; });
    return {
      type: 'choice', options, answer: ans, choiceHints,
      q: T`Akého typu je prúdenie s Reynoldsovým číslom $\\text{Re}=${re}$?`,
      solution: T`Pre $\\text{Re}=${re}$ je prúdenie ${ans}. ${HINT[ans]}`,
      hint: T.s('Porovnaj Reynoldsovo číslo s hranicami 2300 a 4000.')
    };
  });

  lesson({
    id: 'v11-aerodynamika', order: 70, theme: 'tekutiny', title: 'Prúdenie plynov a aerodynamika',
    summary: 'Aerodynamický odpor a vztlak: od čoho závisia a prečo rastú s druhou mocninou rýchlosti.',
    theory: [
      `<p>Plyny sú pri bežných rýchlostiach takmer nestlačiteľné a dajú sa v mnohom opísať rovnakými zákonmi ako kvapaliny. Telesá
       pohybujúce sa vzduchom sú brzdené <strong>aerodynamickým odporom</strong>.</p>`,
      `<p>Odpor určuje vzorec $F=\\frac{1}{2}\\,c_w\\,\\rho\\,S\\,v^2$, kde $c_w$ je súčiniteľ odporu (tvar telesa), $\\rho$ hustota vzduchu,
       $S$ čelná plocha a $v$ rýchlosť. Odpor rastie s <strong>druhou mocninou</strong> rýchlosti: dvojnásobná rýchlosť znamená štvornásobný odpor.</p>`,
      `<p>Krídlo lietadla alebo vozidla vytvára <strong>vztlak</strong>, lebo nad ním je prúdenie rýchlejšie a tlak nižší (Bernoulli).
       Obtekaný tvar preto navrhujeme tak, aby odpor bol čo najmenší a vztlak čo najväčší.</p>`
    ],
    examples: [
      { task: 'Automobil má čelnú plochu $2\\,\\text{m}^2$, súčiniteľ odporu $c_w=0{,}5$ a jazdí rýchlosťou $20\\,\\text{m/s}$. Aký je odpor vzduchu? Hustota vzduchu je $1{,}2\\,\\text{kg/m}^3$.',
        steps: ['$F=\\frac{1}{2}\\cdot 0{,}5\\cdot 1{,}2\\cdot 2\\cdot 20^2$.', '$=0{,}6\\cdot 400=240\\,\\text{N}$.', '<strong>Výsledok: 240 N</strong>'] }
    ]
  });

  gen('v11-aerodynamika', () => {
    const v = pick([10, 20, 30]), ans = 0.6 * v * v;
    return {
      q: T`Automobil má čelnú plochu $S=${fmt(2)}\\,\\text{m}^2$ a súčiniteľ odporu $c_w=${fmt(0.5)}$. Hustota vzduchu je $\\rho=${fmt(1.2)}\\,\\text{kg/m}^3$. Aký je aerodynamický odpor pri rýchlosti $v=${v}\\,\\text{m/s}$? Použi $F=\\frac{1}{2}c_w\\rho S v^2$. Výsledok v newtonoch.`,
      answer: ans,
      tol: 0.01,
      solution: T`$F=\\frac{1}{2}\\cdot ${fmt(0.5)}\\cdot ${fmt(1.2)}\\cdot ${fmt(2)}\\cdot ${v}^2=${fmt(0.6)}\\cdot ${v * v}=${fmt(ans)}\\,\\text{N}$.`,
      hint: T.s('Odpor rastie s druhou mocninou rýchlosti. Nezabudni na polovicu vo vzorci.'),
      // typické chyby: zabudnutá polovica; lineárna závislosť od rýchlosti
      mistakes: [
        { value: 1.2 * v * v, msg: T`Zabudol si polovicu vo vzorci $\\frac{1}{2}$.` },
        { value: 0.3 * v, msg: T`Odpor nerastie lineárne s rýchlosťou, ale s jej druhou mocninou.` }
      ].filter((m) => m.value !== ans)
    };
  });
})();
