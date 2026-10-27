/* 6. ročník: hustota, vlastnosti kvapalín a plynov, tlak, atmosférický tlak, vztlak, teplo a zmeny skupenstva.
   Vzorový súbor ročníka: lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, shuffle, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r6' }, l));
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
    solution: o.solution || T.s('Správna odpoveď vyplýva z vlastností tejto látky a z toho, ako sú jej častice usporiadané.'),
    hint: o.hint || T.s('Pozri si v teórii, ako sa jednotlivé skupenstvá správajú.')
  });

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'r6-hustota', order: 10, theme: 'latky', title: 'Hustota látok a jej výpočet',
    summary: 'Čo hovorí hustota a ako ju vypočítame z hmotnosti a objemu.',
    theory: [
      `<p>Dve telesá rovnakej veľkosti môžu mať veľmi rozdielnu hmotnosť. Olovená guľa je oveľa ťažšia ako drevená guľa s rovnakým objemom.
       Rozdiel nespôsobuje tvar ani veľkosť, ale <strong>látka</strong>, z ktorej je teleso vyrobené. Túto vlastnosť látky popisuje <strong>hustota</strong>.</p>`,
      `<p><strong>Hustota</strong> ukazuje, akú hmotnosť má jednotka objemu danej látky. Značí sa $\\rho$ (ró) a počíta sa podľa vzorca
       $\\rho = \\frac{m}{V}$, kde $m$ je hmotnosť a $V$ objem. Hmotnosť teda delíme objemom.</p>`,
      `<ul>
         <li>Jednotky: $\\text{g/cm}^3$ (v praxi) a $\\text{kg/m}^3$ (v sústave SI).</li>
         <li>Prepočet: $1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$, lebo $1\\,\\text{g}=0{,}001\\,\\text{kg}$ a $1\\,\\text{cm}^3=0{,}000001\\,\\text{m}^3$.</li>
       </ul>`,
      `<p>Hustota je vlastnosť látky, nie telesa. Všetky kusy rovnakej látky majú rovnakú hustotu, nech sú veľké alebo malé.
       Pomáha nám rozlíšiť látky, ktoré vyzerajú podobne, a neskôr vysvetlí, prečo jedny telesá plávajú a iné klesajú.</p>`,
      `<p>Orientačné hustoty: voda $1\\,\\text{g/cm}^3$, olej približne $0{,}9\\,\\text{g/cm}^3$, hliník $2{,}7\\,\\text{g/cm}^3$, železo $7{,}8\\,\\text{g/cm}^3$.
       Drevo je ľahšie ako voda, napríklad borovica má približne $0{,}5\\,\\text{g/cm}^3$.</p>`
    ],
    examples: [
      { task: 'Kváder z hliníka má hmotnosť $135\\,\\text{g}$ a objem $50\\,\\text{cm}^3$. Vypočítaj jeho hustotu.',
        steps: ['Použijeme vzorec $\\rho = \\frac{m}{V}$.', '$\\rho = \\frac{135}{50} = 2{,}7\\,\\text{g/cm}^3$', '<strong>Výsledok: 2,7 g/cm³</strong>'] },
      { task: 'Akú hmotnosť má $200\\,\\text{cm}^3$ vody? Hustota vody je $1\\,\\text{g/cm}^3$.',
        steps: ['Zo vzorca $\\rho = \\frac{m}{V}$ dostaneme $m = \\rho\\cdot V$.', '$m = 1\\,\\text{g/cm}^3\\cdot 200\\,\\text{cm}^3 = 200\\,\\text{g}$', '<strong>Výsledok: 200 g</strong>'] }
    ]
  });

  gen('r6-hustota', () => {
    const M = pick([
      { g: T`vody`, r: 10 }, { g: T`oleja`, r: 9 }, { g: T`medu`, r: 14 },
      { g: T`hliníka`, r: 27 }, { g: T`železa`, r: 78 }, { g: T`borovicového dreva`, r: 5 }
    ]);
    // hustota v desatinách g/cm³ (r/10), objem v cm³ (násobok 10), hmotnosť v g
    const rho = M.r / 10, V = 10 * rnd(1, 20), m = M.r * V / 10;
    const t = rnd(0, 2);
    if (t === 0) {
      return {
        q: T`Koľko gramov má $${V}\\,\\text{cm}^3$ ${M.g}, ak má hustotu $\\rho=${mf(rho)}\\,\\text{g/cm}^3$?`,
        answer: m,
        solution: T`Zo vzorca $m=\\rho\\cdot V$ dostaneme $m=${mf(rho)}\\cdot ${V}=${m}$, teda ${m} g.`,
        hint: T`Hmotnosť dostaneš vynásobením hustoty objemom: $m=\\rho\\cdot V$.`,
        mistakes: m !== V ? [{ value: V, msg: T`Hmotnosť si rovnal objemu. Hustota hovorí, koľko gramov má každý cm³ látky, preto ju musíš vynásobiť objemom.` }] : []
      };
    }
    if (t === 1) {
      return {
        q: T`Teleso má hmotnosť $${m}\\,\\text{g}$ a objem $${V}\\,\\text{cm}^3$. Aká je jeho hustota v $\\text{g/cm}^3$?`,
        answer: rho,
        tol: 0.001,
        solution: T`Hustotu dostaneme zo vzorca $\\rho=\\frac{m}{V}=\\frac{${m}}{${V}}=${mf(rho)}\\,\\text{g/cm}^3$.`,
        hint: T`Hustotu vypočítaš, ak hmotnosť vydelíš objemom: $\\rho=\\frac{m}{V}$.`,
        mistakes: Math.abs(V / m - rho) > 0.01 ? [{ value: V / m, msg: T`Delil si opačne. Hustota je hmotnosť delená objemom, nie objem delený hmotnosťou.` }] : []
      };
    }
    return {
      q: T`Aký objem má teleso z ${M.g}, ktoré má hmotnosť $${m}\\,\\text{g}$ a hustotu $\\rho=${mf(rho)}\\,\\text{g/cm}^3$?`,
      answer: V,
      tol: 0.01,
      solution: T`Objem dostaneme zo vzorca $V=\\frac{m}{\\rho}=\\frac{${m}}{${mf(rho)}}=${V}\\,\\text{cm}^3$.`,
      hint: T`Objem dostaneš, ak hmotnosť vydelíš hustotou: $V=\\frac{m}{\\rho}$.`,
      mistakes: Math.abs(m * rho - V) > 0.01 ? [{ value: m * rho, msg: T`Hmotnosť si vynásobil hustotou. Objem dostaneš delením: $V=\\frac{m}{\\rho}$.` }] : []
    };
  });

  lesson({
    id: 'r6-vlastnosti', order: 20, theme: 'tekutiny', title: 'Vlastnosti kvapalín a plynov',
    summary: 'Ako sa kvapaliny a plyny líšia tvarom, objemom a stlačiteľnosťou.',
    theory: [
      `<p>Látky sa vyskytujú v troch skupenstvách: pevnom, kvapalnom a plynnom. Pevné telesá majú stály tvar aj stály objem.
       <strong>Kvapaliny</strong> majú stály objem, ale tvar si prispôsobia nádobe. <strong>Plyny</strong> nemajú stály tvar ani objem: rozšíria sa a vyplnia celú nádobu.</p>`,
      `<p>Prečo je to tak? Častice v kvapaline sú blízko pri sebe a držia sa, ale môžu sa voči sebe posúvať, preto kvapalina tečie.
       Častice plynu sú od seba ďaleko a pohybujú sa voľne, preto sa rozptýlia po celom dostupnom priestore.</p>`,
      `<p><strong>Stlačiteľnosť:</strong> kvapaliny sa prakticky nedajú stlačiť, lebo ich častice sú už blízko pri sebe. Plyny sa stlačiť dajú,
       pretože medzi časticami je veľa voľného priestoru. Vzduch v pumpe na bicykel sa preto stlačí, kým voda v uzavretej nádobe nie.</p>`,
      `<ul>
         <li><strong>Tvar:</strong> kvapalina sa prispôsobí nádobe, plyn vyplní celú nádobu.</li>
         <li><strong>Objem:</strong> kvapalina má stály objem, objem plynu je rovný objemu nádoby.</li>
         <li><strong>Stlačiteľnosť:</strong> kvapalina je takmer nestlačiteľná, plyn sa dá stlačiť.</li>
       </ul>`,
      `<p>Kvapaliny a plyny spolu nazývame <strong>tekutiny</strong>. Tekutiny sa dajú prelievať a prúdiť, preto na nich pozorujeme tlak a vztlak.</p>`
    ],
    examples: [
      { task: 'Vysvetli, prečo sa vzduch v injekčnej striekačke dá stlačiť, ale voda nie.',
        steps: ['Častice vzduchu sú od seba ďaleko, medzi nimi je voľný priestor.', 'Častice vody sú blízko pri sebe, nie je kam ich stlačiť.', '<strong>Výsledok: vzduch je stlačiteľný, voda takmer nie.</strong>'] },
      { task: 'Liter vody prelejeme z širokej nádoby do vysokého úzkeho pohára. Aký objem má voda teraz?',
        steps: ['Voda mení tvar podľa nádoby.', 'Objem kvapaliny sa pri prelievaní nemení.', '<strong>Výsledok: stále 1 liter.</strong>'] }
    ]
  });

  gen('r6-vlastnosti', () => {
    const Q = pick([
      { q: T.s('Ktoré skupenstvo má stály objem, ale nemá stály tvar?'), a: T.s('kvapalina'), wrong: [T.s('pevná látka'), T.s('plyn')],
        solution: T.s('Kvapalina má stály objem, ale jej tvar sa prispôsobí nádobe, v ktorej je.') },
      { q: T.s('Ktoré skupenstvo sa dá najľahšie stlačiť?'), a: T.s('plyn'), wrong: [T.s('kvapalina'), T.s('pevná látka')],
        solution: T.s('Častice plynu sú od seba ďaleko a medzi nimi je voľný priestor, preto sa plyn dá stlačiť.') },
      { q: T.s('Ktoré skupenstvo má stály tvar aj stály objem?'), a: T.s('pevná látka'), wrong: [T.s('kvapalina'), T.s('plyn')],
        solution: T.s('Pevné telesá si zachovávajú tvar aj objem, lebo ich častice sú pevne na svojich miestach.') },
      { q: T.s('Ktoré skupenstvo vyplní celý objem nádoby, do ktorej ho dáme?'), a: T.s('plyn'), wrong: [T.s('kvapalina'), T.s('pevná látka')],
        solution: T.s('Plyn sa rozpína a vyplní celú nádobu. Kvapalina zaberá len objem, ktorý má, a pevné telesá si tvar nemenia.') }
    ]);
    return choice(Q);
  });

  lesson({
    id: 'r6-tlak', order: 30, theme: 'tekutiny', title: 'Tlak v kvapalinách a plynoch',
    summary: 'Tlak ako sila na plochu a tlak v kvapaline, ktorý rastie s hĺbkou.',
    theory: [
      `<p><strong>Tlak</strong> je sila pôsobiaca kolmo na plochu, prepočítaná na jednotku plochy. Vzorec: $p=\\frac{F}{S}$, kde $F$ je sila v newtonoch
       a $S$ obsah plochy v $\\text{m}^2$. Jednotkou tlaku je pascal: $1\\,\\text{Pa}=1\\,\\text{N/m}^2$.</p>`,
      `<p>Rovnaká sila vyvolá väčší tlak na menšiu plochu. Preto sa ostrý klinec ľahko zatĺka do dreva a tupý nie: na malej špičke je tlak veľký.</p>`,
      `<p><strong>Tlak v kvapaline</strong> rastie s hĺbkou. Čím hlbšie sme, tým viac kvapaliny je nad nami a tlačí na vrstvy pod ňou.
       Vzorec: $p=\\rho\\cdot g\\cdot h$, kde $\\rho$ je hustota kvapaliny, $h$ hĺbka pod hladinou a $g\\approx 10\\,\\text{N/kg}$ (v ZŠ zaokrúhľujeme).</p>`,
      `<p>Kvapalina tlačí na steny nádoby, na dno aj nahor. Tlak v kvapaline pôsobí vo všetkých smeroch rovnako, ak je v rovnakej hĺbke.</p>`,
      `<p>Aj plyn v uzavretej nádobe tlačí na steny všetkými smermi. Keď plyn stlačíme, jeho tlak rastie.</p>`
    ],
    examples: [
      { task: 'Sila $600\\,\\text{N}$ pôsobí kolmo na plochu $0{,}5\\,\\text{m}^2$. Aký tlak vyvoláva?',
        steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$', '$p=1200\\,\\text{Pa}$', '<strong>Výsledok: 1200 Pa</strong>'] },
      { task: 'Aký tlak je vo vode v hĺbke $3\\,\\text{m}$? Hustota vody je $1000\\,\\text{kg/m}^3$, $g=10\\,\\text{N/kg}$.',
        steps: ['$p=\\rho\\cdot g\\cdot h$', '$p=1000\\cdot 10\\cdot 3=30\\,000\\,\\text{Pa}$', '<strong>Výsledok: 30 000 Pa = 30 kPa</strong>'] }
    ]
  });

  gen('r6-tlak', () => {
    if (Math.random() < 0.5) {
      const S = pick([2, 4, 5, 8, 10]), p = 100 * rnd(1, 50), F = p * S;
      return {
        q: T`Sila $${F}\\,\\text{N}$ pôsobí kolmo na plochu $${S}\\,\\text{m}^2$. Aký tlak (v pascaloch) vyvolá?`,
        answer: p,
        solution: T`$p=\\frac{F}{S}=\\frac{${F}}{${S}}=${p}\\,\\text{Pa}$.`,
        hint: T`Tlak je sila delená plochou: $p=\\frac{F}{S}$.`,
        mistakes: [{ value: F * S, msg: T`Silu si vynásobil plochou. Tlak sa počíta delením: $p=\\frac{F}{S}$.` }]
      };
    }
    // tlak v kvapaline na dne nádoby, výsledok v kPa (1 kPa = 1000 Pa)
    const L = pick([{ inst: T`vodou`, r: 1000 }, { inst: T`olejom`, r: 800 }]);
    const h = rnd(1, 10), kpa = L.r * 10 * h / 1000;
    return {
      q: T`Aký je tlak v kilopascaloch na dne nádoby hlbokej $${h}\\,\\text{m}$, ktorú naplníme ${L.inst}? Hustota je $\\rho=${L.r}\\,\\text{kg/m}^3$, $g=10\\,\\text{N/kg}$.`,
      answer: kpa,
      solution: T`$p=\\rho\\cdot g\\cdot h=${L.r}\\cdot 10\\cdot ${h}=${L.r * 10 * h}\\,\\text{Pa}=${kpa}\\,\\text{kPa}$.`,
      hint: T`Hydrostatický tlak je $p=\\rho\\cdot g\\cdot h$. Výsledok v pascaloch vydeľ tisíckou.`,
      mistakes: [{ value: L.r * 10 * h, msg: T`Výsledok si nechal v pascaloch. Úloha žiada kilopascaly, preto vydeľ 1000.` }]
    };
  });

  lesson({
    id: 'r6-atmosfera', order: 40, theme: 'tekutiny', title: 'Atmosférický tlak',
    summary: 'Prečo na nás tlačí vzduch a ako sa mení tlak s výškou.',
    theory: [
      `<p>Vzduch okolo Zeme má hmotnosť, a preto na nás tlačí. Tento tlak sa volá <strong>atmosférický tlak</strong>. Pri hladine mora je asi $101\\,\\text{kPa}$,
       čo zodpovedá tiaži vzduchu nad jedným štvorcovým metrom približne 10 ton.</p>`,
      `<p>Meteorológovia používajú hektopascal: $1\\,\\text{hPa}=100\\,\\text{Pa}$, teda $1\\,\\text{kPa}=10\\,\\text{hPa}$. Normálny tlak je približne $1013\\,\\text{hPa}$.
       Tlak meriame <strong>barometrom</strong>.</p>`,
      `<p>Prečo môžeme piť slamkou? Pri sávaní znížime tlak v ústach. Atmosférický tlak pôsobí na hladinu nápoja a tlačí ho nahor do slamky.
       Nápoj teda nevysávame, tlačí ho vzduch.</p>`,
      `<p>S rastúcou výškou nad morom tlak klesá, pretože nad nami je menej vzduchu. Preto na horách tlak vzduchu klesá a voda vrie pri nižšej teplote.</p>`
    ],
    examples: [
      { task: 'Barometer ukazuje tlak $1013\\,\\text{hPa}$. Koľko kilopascalov to je?',
        steps: ['$1\\,\\text{kPa}=10\\,\\text{hPa}$, preto výsledok delíme desiatimi.', '$1013 : 10 = 101{,}3$', '<strong>Výsledok: 101,3 kPa</strong>'] },
      { task: 'Ako sa mení atmosférický tlak, keď vystúpime na vysokú horu?',
        steps: ['Nad nami je menej vzduchu, ktorý na nás tlačí.', 'Tlak vzduchu preto klesá.', '<strong>Výsledok: tlak klesá</strong>'] }
    ]
  });

  gen('r6-atmosfera', () => {
    if (Math.random() < 0.6) {
      const x = rnd(950, 1050);
      return {
        q: T`Barometer ukazuje tlak $${x}\\,\\text{hPa}$. Koľko kilopascalov $\\text{kPa}$ to je?`,
        answer: x / 10,
        tol: 0.001,
        solution: T`Keďže $1\\,\\text{kPa}=10\\,\\text{hPa}$, dostaneme $${x} : 10 = ${mf(x / 10)}$, teda ${fmt(x / 10)} kPa.`,
        hint: T`Kilopascal je 10 hektopascalov, preto hodnotu v hPa vydeľ desiatimi.`,
        mistakes: [{ value: x * 10, msg: T`Číslo si vynásobil desiatimi. Pri prepočte z hPa na kPa delíme desiatimi.` }]
      };
    }
    if (Math.random() < 0.5) {
      return choice({
        q: T.s('Ako sa mení atmosférický tlak, keď vystúpime na vysokú horu?'),
        a: T.s('klesá'), wrong: [T.s('rastie'), T.s('zostáva rovnaký')],
        solution: T.s('Nad nami je menej vzduchu, takže tlak klesá.'),
        hint: T.s('Pomysli, koľko vzduchu je nad tebou.')
      });
    }
    return choice({
      q: T.s('Aký prístroj meria atmosférický tlak?'),
      a: T.s('barometer'), wrong: [T.s('teplomer'), T.s('silomer')],
      solution: T.s('Barometer je prístroj na meranie tlaku vzduchu. Teplomer meria teplotu a silomer silu.'),
      hint: T.s('Názov prístroja odvodíš od slova tlak v gréčtine: baros znamená ťažkosť.')
    });
  });

  lesson({
    id: 'r6-vztlak', order: 50, theme: 'tekutiny', title: 'Vztlaková sila a plávanie telies',
    summary: 'Prečo kvapalina nadľahčuje telesá a kedy teleso pláva.',
    theory: [
      `<p>Lopta ponorená do vody sa vynorí. Kvapalina pôsobí na ponorené teleso silou smerom nahor. Táto sila sa volá <strong>vztlaková sila</strong>.
       Vzniká preto, že tlak v kvapaline rastie s hĺbkou: spodná plocha telesa je tlačená silnejšie než horná.</p>`,
      `<p><strong>Archimedov zákon:</strong> vztlaková sila sa rovná tiaži kvapaliny, ktorú teleso vytlačí. Vzorec: $F_{vz}=\\rho_k\\cdot g\\cdot V_p$,
       kde $\\rho_k$ je hustota kvapaliny a $V_p$ objem ponorenej časti telesa.</p>`,
      `<ul>
         <li>Tiaž telesa je väčšia ako vztlak: teleso klesá.</li>
         <li>Tiaž a vztlak sú rovnaké: teleso sa vznáša alebo pláva ponorené.</li>
         <li>Vztlak je väčší ako tiaž: teleso vypláva a pláva na hladine, ponorená je len jeho časť.</li>
       </ul>`,
      `<p>Oceľová loď pláva, pretože je veľká a dutá. Jej priemerná hustota je menšia ako hustota vody, a preto vytlačí dostatok vody na to, aby jej tiaž unieslo.</p>`
    ],
    examples: [
      { task: 'Kocka s objemom $1\\,\\text{dm}^3$ je celá ponorená vo vode. Voda má hustotu $1\\,\\text{kg/dm}^3$. Aká je vztlaková sila?',
        steps: ['Vytlačená voda má hmotnosť $\\rho\\cdot V = 1\\,\\text{kg}$.', 'Jej tiaž je $1\\,\\text{kg}\\cdot 10\\,\\text{N/kg}=10\\,\\text{N}$.', '<strong>Výsledok: vztlaková sila je 10 N.</strong>'] },
      { task: 'Teleso s hmotnosťou $3\\,\\text{kg}$ pláva na vode. Aká je veľkosť vztlakovej sily?',
        steps: ['Teleso pláva, preto je vztlak rovný tiaži.', '$F_{vz}=F_G=m\\cdot g=3\\cdot 10=30\\,\\text{N}$', '<strong>Výsledok: 30 N</strong>'] }
    ]
  });

  gen('r6-vztlak', () => {
    if (Math.random() < 0.5) {
      // ponorené teleso: hustota v desatinách kg/dm³ (voda 10, olej 8); F = r·V v newtonoch pri V v dm³
      const K = pick([{ inst: T`vodou`, r: 10 }, { inst: T`olejom`, r: 8 }]);
      const V = rnd(1, 8), F = K.r * V;
      return {
        q: T`Teleso s objemom $${V}\\,\\text{dm}^3$ je celé ponorené ${K.inst}. Aká je veľkosť vztlakovej sily? Hustota kvapaliny je $\\rho=${mf(K.r / 10)}\\,\\text{kg/dm}^3$ a $g=10\\,\\text{N/kg}$.`,
        answer: F,
        solution: T`$F_{vz}=\\rho\\cdot g\\cdot V=${mf(K.r / 10)}\\cdot 10\\cdot ${V}=${F}\\,\\text{N}$.`,
        hint: T`Vztlak závisí od hustoty kvapaliny a od objemu ponorenej časti telesa.`,
        mistakes: F !== V * 10 ? [{ value: V * 10, msg: T`Dosadil si hustotu vody. Vztlak závisí od hustoty kvapaliny, v ktorej je teleso ponorené.` }] : []
      };
    }
    const m = rnd(1, 20);
    return {
      q: T`Teleso s hmotnosťou $${m}\\,\\text{kg}$ pláva na hladine. Aká je veľkosť vztlakovej sily? Použi $g=10\\,\\text{N/kg}$.`,
      answer: m * 10,
      solution: T`Teleso pláva, takže vztlak sa rovná tiaži: $F_{vz}=F_G=m\\cdot g=${m}\\cdot 10=${m * 10}\\,\\text{N}$.`,
      hint: T`Plávajúce teleso je v rovnováhe: vztlaková sila a tiaž sú rovnaké.`,
      mistakes: [{ value: m, msg: T`Hmotnosť si nechal bez zmeny. Vztlak sa počíta v newtonoch, preto hmotnosť vynásob gravitačným zrýchlením $g=10\\,\\text{N/kg}$.` }]
    };
  });

  lesson({
    id: 'r6-teplo', order: 60, theme: 'teplo', title: 'Teplota, teplo a tepelná výmena',
    summary: 'Rozdiel medzi teplotou a teplom a smer, ktorým teplo prúdi.',
    theory: [
      `<p><strong>Teplota</strong> ukazuje, aké teplé je teleso. Meria sa v stupňoch Celzia (°C). Čím rýchlejšie sa častice látky pohybujú, tým je látka teplejšia.
       Teplomer sa musí dostať na teplotu okolia, preto ukazuje jeho teplotu.</p>`,
      `<p><strong>Teplo</strong> je energia, ktorá sa prenáša medzi telesami kvôli rozdielu teplôt. Jednotkou tepla je joule (J).
       Teplo vždy prúdi z teplejšieho telesa do chladnejšieho, nikdy naopak. Chladnička je výnimka, lebo na chladenie potrebuje prácu.</p>`,
      `<p><strong>Tepelná výmena</strong> trvá, kým sa teploty telies nevyrovnajú. Vtedy nastáva <em>tepelná rovnováha</em>.
       Teplo sa prenáša tromi spôsobmi: <em>vedením</em> (kovová lyžička v čaji), <em>prúdením</em> (kvapaliny a plyny) a <em>sálaním</em> (teplo zo Slnka).</p>`,
      `<p>Ak zmiešame rovnaké množstvá vody s rôznou teplotou a tepelné straty zanedbáme, výsledná teplota je aritmetický priemer oboch teplôt.</p>`
    ],
    examples: [
      { task: 'Zmiešame rovnaké množstvá vody teplôt 80 °C a 20 °C. Aká bude výsledná teplota?',
        steps: ['Pri rovnakých množstvách je výsledná teplota priemer teplôt.', '$\\frac{80+20}{2}=50$', '<strong>Výsledok: 50 °C</strong>'] },
      { task: 'Ktorým smerom prúdi teplo medzi pohárom čaju s teplotou 70 °C a vzduchom s teplotou 22 °C?',
        steps: ['Teplo prúdi vždy od teplejšieho telesa k chladnejšiemu.', 'Čaj má vyššiu teplotu, teplo teda prechádza z čaju do vzduchu.', '<strong>Výsledok: z čaju do okolia</strong>'] }
    ]
  });

  gen('r6-teplo', () => {
    if (Math.random() < 0.5) {
      return choice(pick([
        { q: T.s('Kam prúdi teplo medzi telesom s teplotou 80 °C a telesom s teplotou 20 °C, ak sa ich dotýkajú?'),
          a: T.s('z telesa s 80 °C do telesa s 20 °C'), wrong: [T.s('z telesa s 20 °C do telesa s 80 °C'), T.s('nikam, teplo sa neprenáša')],
          solution: T.s('Teplo prúdi vždy od teplejšieho telesa k chladnejšiemu, kým sa teploty nevyrovnajú.') },
        { q: T.s('Akým spôsobom sa teplo prenáša zo Slnka k Zemi?'),
          a: T.s('sálaním'), wrong: [T.s('vedením'), T.s('prúdením')],
          solution: T.s('Teplo zo Slnka cez prázdny priestor prichádza sálaním, pretože medzi nimi nie je látka, ktorou by sa šírilo vedením.') },
        { q: T.s('Akým spôsobom sa teplo prenáša kovovou lyžičkou, ktorú ponoríme do horúceho čaju?'),
          a: T.s('vedením'), wrong: [T.s('prúdením'), T.s('sálaním')],
          solution: T.s('Kov vedie teplo: energia sa odovzdáva z častice na časticu.') },
        { q: T.s('Akú jednotku má teplo ako energia?'),
          a: T.s('joule (J)'), wrong: [T.s('stupeň Celzia (°C)'), T.s('newton (N)')],
          solution: T.s('Teplo je energia, a tá sa v sústave SI meria v joulech.') }
      ]));
    }
    // rovnaké množstvá vody: výsledná teplota je priemer (teploty zvolené tak, aby bol priemer celé číslo)
    const t1 = 2 * rnd(25, 50), t2 = 2 * rnd(5, 20);
    return {
      q: T`Zmiešame rovnaké množstvá vody s teplotami ${t1} °C a ${t2} °C. Aká bude výsledná teplota? Tepelné straty zanedbaj.`,
      answer: (t1 + t2) / 2,
      solution: T`Pri rovnakých množstvách vody je výsledná teplota priemer: $\\frac{${t1}+${t2}}{2}=${(t1 + t2) / 2}$, teda ${(t1 + t2) / 2} °C.`,
      hint: T`Teploty sa nesčítavajú. Pri rovnakých množstvách vody vypočítaj ich priemer.`,
      mistakes: [{ value: t1 + t2, msg: T`Teploty si sčítal. Výsledná teplota je priemer, nie súčet.` }]
    };
  });

  lesson({
    id: 'r6-skupenstva', order: 70, theme: 'teplo', title: 'Zmena skupenstva látok',
    summary: 'Topenie, tuhnutie, vyparovanie, kondenzácia, sublimácia a ich dej v časticiach.',
    theory: [
      `<p>Látky sa vyskytujú v pevnom, kvapalnom a plynnom skupenstve. Pri zmene skupenstva sa látka nemení na inú látku,
       mení sa len usporiadanie a pohyb jej častíc.</p>`,
      `<ul>
         <li><strong>Topenie</strong>: pevné na kvapalné (ľad sa topí na vodu).</li>
         <li><strong>Tuhnutie</strong>: kvapalné na pevné (voda mrzne).</li>
         <li><strong>Vyparovanie</strong>: kvapalné na plynné (mokrá bielizeň schne).</li>
         <li><strong>Kondenzácia</strong>: plynné na kvapalné (rosa na tráve).</li>
         <li><strong>Sublimácia</strong>: pevné priamo na plynné (suchý ľad, naftalín).</li>
         <li><strong>Desublimácia</strong>: plynné priamo na pevné (námraza v mrazničke).</li>
       </ul>`,
      `<p><strong>Prečo?</strong> Pri topení musí látka prijať energiu, aby sa jej častice mohli uvoľniť z pevného usporiadania. Pri tuhnutí sa energia naopak uvoľňuje.</p>`,
      `<ol>
         <li>Ľad o teplote $-5\\,{}^\\circ\\text{C}$ sa pri zohrievaní najprv zohrieva na $0\\,{}^\\circ\\text{C}$.</li>
         <li>Pri $0\\,{}^\\circ\\text{C}$ sa topí a jeho teplota sa dovtedy nemení, kým sa celý neroztopí.</li>
         <li>Až potom sa voda ďalej zohrieva.</li>
       </ol>`
    ],
    examples: [
      { task: 'Voda z mrazničky sa mení na ľad. Ako sa volá tento dej?',
        steps: ['Voda sa mení z kvapalného na pevné skupenstvo.', 'Prechod z kvapalného do pevného skupenstva sa volá tuhnutie.', '<strong>Výsledok: tuhnutie</strong>'] },
      { task: 'Námraza vzniká na chladnom povrchu priamo z vodnej pary bez toho, aby prešla kvapalinou. Ako sa volá tento dej?',
        steps: ['Para prechádza priamo do pevného skupenstva.', 'Prechod z plynného do pevného skupenstva sa volá desublimácia.', '<strong>Výsledok: desublimácia</strong>'] }
    ]
  });

  gen('r6-skupenstva', () => {
    const names = {
      topenie: T`topenie`, tuhnutie: T`tuhnutie`, vyparovanie: T`vyparovanie`,
      kondenzacia: T`kondenzácia`, sublimacia: T`sublimácia`, desublimacia: T`desublimácia`
    };
    const P = pick([
      { f: T`pevného`, t: T`kvapalného`, a: 'topenie' },
      { f: T`kvapalného`, t: T`pevného`, a: 'tuhnutie' },
      { f: T`kvapalného`, t: T`plynného`, a: 'vyparovanie' },
      { f: T`plynného`, t: T`kvapalného`, a: 'kondenzacia' },
      { f: T`pevného`, t: T`plynného`, a: 'sublimacia' },
      { f: T`plynného`, t: T`pevného`, a: 'desublimacia' }
    ]);
    const wrong = shuffle(Object.keys(names).filter((k) => k !== P.a)).slice(0, 3).map((k) => names[k]);
    return choice({
      q: T`Ako sa volá prechod látky z ${P.f} do ${P.t} skupenstva?`,
      a: names[P.a],
      wrong,
      solution: T`Prechod z ${P.f} do ${P.t} skupenstva sa volá ${names[P.a]}.`,
      hint: T.s('Urči, z akého skupenstva do akého látka prechádza, a porovnaj to s názvami prechodov v teórii.')
    });
  });

  lesson({
    id: 'r6-var', order: 80, theme: 'teplo', title: 'Vyparovanie, kondenzácia a var',
    summary: 'Rozdiel medzi vyparovaním a varom a prečo sa kvapaliny ochladzujú.',
    theory: [
      `<p><strong>Vyparovanie</strong> prebieha na povrchu kvapaliny pri ľubovoľnej teplote. Najrýchlejšie častice unikajú z hladiny do okolia.
       Vyparovanie je rýchlejšie pri vyššej teplote, na väčšej hladine a pri vetre, ktorý odnáša paru preč.</p>`,
      `<p><strong>Vyparovanie ochladzuje.</strong> Z kvapaliny odchádzajú najrýchlejšie častice, takže zvyšok má nižšiu priemernú energiu.
       Preto nás po kúpaní ochladzuje vietor: voda sa z pokožky vyparuje a odoberá teplo.</p>`,
      `<p><strong>Var</strong> je prechod kvapaliny na plyn v celom objeme, nielen na hladine. Nastáva pri určitej <em>teplote varu</em>, ktorá závisí od tlaku.
       Pri normálnom tlaku vrie voda pri 100 °C. Na vysokej hore je tlak nižší, a preto voda vrie pri nižšej teplote.</p>`,
      `<p><strong>Kondenzácia</strong> je opačný prechod: para sa mení na kvapalinu. Pri kondenzácii sa teplo uvoľňuje do okolia,
       preto je popálenina parou horšia ako popálenina vriacou vodou. Rosa, hmla a oblaky vznikajú kondenzáciou vodnej pary.</p>`
    ],
    examples: [
      { task: 'Prečo sa mokrá bielizeň suší rýchlejšie na slnku a na vetre?',
        steps: ['Vyššia teplota a vietor zrýchľujú vyparovanie.', 'Častice vody z bielizne ľahšie unikajú do vzduchu.', '<strong>Výsledok: teplo a vietor zrýchľujú vyparovanie.</strong>'] },
      { task: 'Voda vrie pri 100 °C za normálneho tlaku. Pri akej teplote bude vrieť na vrchole vysokej hory, kde je tlak nižší?',
        steps: ['Čím nižší tlak, tým nižšia teplota varu.', 'Na vysokej hore vrie voda pri teplote nižšej ako 100 °C.', '<strong>Výsledok: pri nižšej teplote ako 100 °C</strong>'] }
    ]
  });

  gen('r6-var', () => {
    return choice(pick([
      { q: T.s('Ktorý faktor urýchli vyparovanie vody?'),
        a: T.s('zvýšenie teploty vody'), wrong: [T.s('zakrytie nádoby s vodou'), T.s('zmenšenie plochy hladiny')],
        solution: T.s('Vyššia teplota dodá časticiam viac energie, a tak viac z nich unikne z hladiny.'),
        hint: T.s('Pomysli, čo sa stane s časticami vody, keď sa zohrejú.') },
      { q: T.s('Pri ktorom deji sa teplo uvoľňuje do okolia?'),
        a: T.s('kondenzácia'), wrong: [T.s('vyparovanie'), T.s('var')],
        solution: T.s('Pri kondenzácii sa para mení na kvapalinu a uvoľnená energia sa odovzdáva okoliu.'),
        hint: T.s('Porovnaj smer prechodu: plyn sa mení na kvapalinu.') },
      { q: T.s('Kde prebieha var kvapaliny?'),
        a: T.s('v celom objeme kvapaliny'), wrong: [T.s('iba na jej povrchu'), T.s('iba na dne nádoby')],
        solution: T.s('Pri vare sa para tvorí v celom objeme kvapaliny, nielen na hladine.'),
        hint: T.s('Na hladine prebieha vyparovanie. Čo je iné pri vare?') },
      { q: T.s('Pri akej teplote vrie voda za normálneho tlaku?'),
        a: T.s('100 °C'), wrong: [T.s('0 °C'), T.s('50 °C')],
        solution: T.s('Za normálneho tlaku vrie voda pri 100 °C.'),
        hint: T.s('Ide o teplotu, ktorú poznáš z varenia čaju.') }
    ]));
  });
})();
