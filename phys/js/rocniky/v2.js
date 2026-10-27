/* Vysoká škola, oblasť 2: Termodynamika a štatistická fyzika (v2). Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v2' }, l));
  const gen = EXERCISES.register;

  // zaokrúhlenie a pomocník pre typické chyby (chyba sa uvedie len vtedy, ak sa líši od správnej odpovede)
  const r2 = (x) => Math.round(x * 100) / 100;
  const r3 = (x) => Math.round(x * 1000) / 1000;
  const mis = (value, answer, msg, tol = 1e-9) => (Math.abs(value - answer) > tol ? [{ value, msg }] : []);

  const R = 8.314;      // molárna plynová konštanta J/(mol K)
  const KB = 1.380649;  // Boltzmannova konštanta v jednotkách 10^-23 J/K

  /* ---------- 1. Teplota, tlak, teplo a vnútorná energia ---------- */

  lesson({
    id: 'v2-teplota-tlak', order: 10, theme: 'teplo', title: 'Teplota, tlak, teplo a vnútorná energia',
    summary: 'Termodynamická teplota v kelvinoch, tlak ako sila na plochu a vnútorná energia ako súčet energií častíc.',
    theory: [
      `<p><strong>Termodynamická teplota</strong> $T$ sa meria v kelvinoch. Je úmerná priemernej kinetickej energii častíc, preto nemôže byť záporná. Prepočet zo stupňov Celzia je $T=t+273{,}15$, pričom $0\\,\\text{K}$ je absolútna nula.</p>`,
      `<p><strong>Tlak</strong> je sila pôsobiaca kolmo na jednotku plochy: $p=\\frac{F}{S}$, v pascaloch, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Plyn tlačí na steny nádoby, lebo jeho častice narážajú na ne a odovzdávajú im hybnosť.</p>`,
      `<p><strong>Vnútorná energia</strong> $U$ je súčet kinetických a potenciálnych energií všetkých častíc sústavy. Teplo $Q$ je energia, ktorá sa prenáša medzi telesami kvôli rozdielu teplôt, nie je to „obsah“ telesa.</p>`,
      `<p><strong>Prečo kelvin:</strong> stupne Celzia majú voľne zvolenú nulu. Pri vzorcoch, ktoré súvisia s energiou alebo pomerom, musíme používať nulu, pri ktorej energia zaniká, teda kelviny.</p>`
    ],
    examples: [
      { task: 'Aká je teplota $t=27\\,{}^\\circ\\text{C}$ v kelvinoch?',
        steps: ['$T=t+273{,}15=27+273{,}15$.', '<strong>Výsledok: $T=300{,}15\\,\\text{K}$</strong>'] },
      { task: 'Sila $F=600\\,\\text{N}$ pôsobí kolmo na plochu $S=0{,}2\\,\\text{m}^2$. Aký je tlak?',
        steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}2}$.', '<strong>Výsledok: $p=3000\\,\\text{Pa}$</strong>'] }
    ]
  });

  gen('v2-teplota-tlak', () => {
    const tC = rnd(-20, 90), Tk = r2(tC + 273.15);
    return {
      q: T`Teplota plynu je $t=${tC}\\,{}^\\circ\\text{C}$. Aká je jeho termodynamická teplota $T$ v kelvinoch? Výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: Tk,
      solution: T`$T=t+273{,}15=${tC}+273{,}15=${fmt(Tk)}\\,\\text{K}$.`,
      hint: T`K stupňom Celzia pripočítaj $273{,}15$. Termodynamická teplota je vždy kladná.`,
      mistakes: [
        ...mis(tC + 273, Tk, T`Zaokrúhlil si $273{,}15$ na $273$. Pri presnom prepočte ponechaj desatinnú časť.`, 0.01),
        ...mis(tC - 273.15, Tk, T`Prepočet ide opačným smerom. K teplote v Celziu sa pripočíta $273{,}15$, neodpočíta.`, 0.01)
      ]
    };
  });

  /* ---------- 2. Stavové rovnice ---------- */

  lesson({
    id: 'v2-stavove-rovnice', order: 20, theme: 'latky', title: 'Stavové rovnice',
    summary: 'Stavová rovnica ideálneho plynu pV = nRT a jej použitie pri výpočte tlaku.',
    theory: [
      `<p><strong>Stavová rovnica</strong> ideálneho plynu spája tlak $p$, objem $V$, látkové množstvo $n$ a teplotu $T$: $pV=nRT$, kde $R\\approx 8{,}314\\,\\text{J/(mol\\,K)}$.</p>`,
      `<p>Ideálny plyn je model, v ktorom častice nemajú vlastný objem a navzájom na seba nepôsobia, okrem zrážok. Pri dostatočne zriedenom plyne pri bežných teplotách je model veľmi presný.</p>`,
      `<p><strong>Ako ju používať:</strong> ak poznáme tri veličiny, štvrtú vyjadríme. Napríklad tlak je $p=\\frac{nRT}{V}$. Pri zmene jednej veličiny sa ostatné menia podľa úmerností: pri stálej teplote je tlak nepriamo úmerný objemu.</p>`,
      `<p><strong>Pozor na jednotky:</strong> teplota musí byť v kelvinoch a objem v kubických metroch, inak výsledok nebude v pascaloch. Litre a kubické decimetre sa prevedú deliacim číslom $1000$.</p>`
    ],
    examples: [
      { task: 'Plyn má $n=1\\,\\text{mol}$, teplotu $T=300\\,\\text{K}$ a objem $V=2\\,\\text{dm}^3$. Aký je tlak v kPa?',
        steps: ['$V=2\\,\\text{dm}^3=0{,}002\\,\\text{m}^3$.', '$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}314\\cdot 300}{0{,}002}\\approx 1\\,247\\,100\\,\\text{Pa}$.', '<strong>Výsledok: $p\\approx 1247\\,\\text{kPa}$</strong>'] },
      { task: 'Pri stálej teplote sa objem plynu zdvojnásobí. Ako sa zmení tlak?',
        steps: ['Pri $T$ a $n$ stálych platí $p\\,V=\\text{konšt.}$', 'Ak $V\\to 2V$, tak $p\\to \\frac{p}{2}$.', '<strong>Výsledok: tlak klesne na polovicu</strong>'] }
    ]
  });

  gen('v2-stavove-rovnice', () => {
    const n = rnd(1, 5), Tk = rnd(250, 400), k = rnd(1, 10), p = n * R * Tk / k;
    return {
      q: T`Ideálny plyn má látkové množstvo $n=${n}\\,\\text{mol}$, teplotu $T=${Tk}\\,\\text{K}$ a objem $V=${k}\\,\\text{dm}^3$. Aký je jeho tlak v kilopascaloch? Výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: r2(p),
      tol: 0.01,
      solution: T`$p=\\frac{nRT}{V}=\\frac{${n}\\cdot 8{,}314\\cdot ${Tk}}{${k}\\cdot 10^{-3}}=${fmt(Math.round(p * 1000))}\\,\\text{Pa}\\approx ${fmt(r2(p))}\\,\\text{kPa}$.`,
      hint: T`Objem najprv prepočítaj na kubické metre ($1\\,\\text{dm}^3=10^{-3}\\,\\text{m}^3$), potom použi $p=\\frac{nRT}{V}$.`,
      mistakes: [
        ...mis(r2(n * R * Tk * k), r2(p), T`Tlak si násobil objemom. Podľa $pV=nRT$ sa objemom delí: $p=\\frac{nRT}{V}$.`, 0.01),
        ...mis(Math.round(p * 1000), r2(p), T`Výsledok si dostal v pascaloch, nie v kilopascaloch. Pascal je tisíckrát menšia jednotka.`, 0.01)
      ]
    };
  });

  /* ---------- 3. Prvý a druhý termodynamický zákon ---------- */

  lesson({
    id: 'v2-prvy-zakon', order: 30, theme: 'teplo', title: 'Prvý a druhý termodynamický zákon',
    summary: 'Zachovanie energie pri tepelných dejoch a smer, ktorým prebiehajú prirodzené procesy.',
    theory: [
      `<p><strong>Prvý termodynamický zákon</strong> je zákon zachovania energie: zmena vnútornej energie sa rovná dodanému teplu zníženému o prácu, ktorú plyn vykonal: $\\Delta U=Q-W$, kde $W$ je práca plynu.</p>`,
      `<p>Ak plyn prácu vykoná, jeho vnútorná energia klesá, pretože energia odchádza do okolia. Ak sa na plyn práca vykoná, treba vzorec upraviť na $\\Delta U=Q+W_{\\text{na plyne}}$. Vždy je dôležité, ktorý smer konvencie sa používa.</p>`,
      `<p><strong>Druhý termodynamický zákon</strong> hovorí, že teplo samovoľne prechádza len z teplejšieho telesa na chladnejšie a že tepelný motor nemôže premieňať všetko teplo na prácu. Smer prirodzených dejov určuje rast entropie.</p>`,
      `<p><strong>Prečo je to dôležité:</strong> prvý zákon hovorí, koľko energie sa zachováva, a druhý zákon hovorí, ktorým smerom procesy prebiehajú. Bez druhého zákona by sa dalo zostrojiť perpetum mobile druhého druhu.</p>`
    ],
    examples: [
      { task: 'Plynu sa dodá teplo $Q=300\\,\\text{J}$ a plyn vykoná prácu $W=120\\,\\text{J}$. Aká je zmena jeho vnútornej energie?',
        steps: ['$\\Delta U=Q-W=300-120$.', '<strong>Výsledok: $\\Delta U=180\\,\\text{J}$</strong>'] },
      { task: 'Plyn pri stlačení dostane prácu $W_{\\text{na plyne}}=50\\,\\text{J}$ a odovzdá teplo $Q=-20\\,\\text{J}$. Aká je zmena vnútornej energie?',
        steps: ['$\\Delta U=Q+W_{\\text{na plyne}}=-20+50$.', '<strong>Výsledok: $\\Delta U=30\\,\\text{J}$</strong>'] }
    ]
  });

  gen('v2-prvy-zakon', () => {
    const Q = 50 * rnd(2, 12), W = 50 * rnd(1, 9), dU = Q - W;
    return {
      signed: true,
      q: T`Plynu sa dodá teplo $Q=${Q}\\,\\text{J}$ a plyn pri tom vykoná prácu $W=${W}\\,\\text{J}$. Aká je zmena jeho vnútornej energie $\\Delta U$ v džouloch?`,
      answer: dU,
      solution: T`Prvý termodynamický zákon: $\\Delta U=Q-W=${Q}-${W}=${dU}\\,\\text{J}$.`,
      hint: T`Teplo, ktoré plyn dostane, zvyšuje jeho energiu. Práca, ktorú plyn vykoná, energiu odnáša.`,
      mistakes: [
        ...mis(Q + W, dU, T`Prácu, ktorú plyn vykonal, si pripočítal. Ak ju plyn vykoná, energia odchádza, takže sa odčíta: $\\Delta U=Q-W$.`),
        ...mis(W - Q, dU, T`Odčítal si v opačnom poradí. Dodané teplo zvyšuje vnútornú energiu plynu.`)
      ]
    };
  });

  /* ---------- 4. Entropia a tepelné procesy ---------- */

  lesson({
    id: 'v2-entropia', order: 40, theme: 'teplo', title: 'Entropia a tepelné procesy',
    summary: 'Entropia ako mierka nevratnosti a jej zmena pri vratnom izotermickom deji.',
    theory: [
      `<p><strong>Entropia</strong> $S$ je veličina, ktorá meria počet možných mikrostavov sústavy pri danom makrostave. Pri vratnom prijatí tepla $Q$ pri stálej teplote $T$ sa mení o $\\Delta S=\\frac{Q}{T}$, v jednotkách $\\text{J/K}$.</p>`,
      `<p>Teplo dodané pri nízkej teplote zvýši entropiu viac než rovnaké teplo pri vysokej teplote. Preto sa vzorec delí teplotou, a nie len spočítava.</p>`,
      `<p><strong>Druhý termodynamický zákon v tvare entropie:</strong> pri izolovanej sústave entropia nikdy neklesne, pri vratných dejoch ostáva stála, pri nevratných rastie. Samovoľné deje prebiehajú smerom k vyššej entropii.</p>`,
      `<p><strong>Prečo je to tak:</strong> vysoko usporiadaný stav má málo mikrostavov a sústava sa prirodzene dostáva do stavov, ktorých je viac. Entropia je preto mierkou toho, koľko nezvratného neporiadku v sústave vznikne.</p>`
    ],
    examples: [
      { task: 'Plyn pri stálej teplote $T=300\\,\\text{K}$ vratne prijme teplo $Q=600\\,\\text{J}$. Aká je zmena jeho entropie?',
        steps: ['$\\Delta S=\\frac{Q}{T}=\\frac{600}{300}$.', '<strong>Výsledok: $\\Delta S=2\\,\\text{J/K}$</strong>'] },
      { task: 'Ako sa zmení entropia, ak sa rovnaké teplo $Q=600\\,\\text{J}$ dodá pri teplote $T=600\\,\\text{K}$?',
        steps: ['$\\Delta S=\\frac{600}{600}=1$.', '<strong>Výsledok: $\\Delta S=1\\,\\text{J/K}$, je to menej než pri nižšej teplote</strong>'] }
    ]
  });

  gen('v2-entropia', () => {
    const Tk = pick([200, 250, 300, 400, 500]), s = rnd(1, 6), Q = Tk * s;
    return {
      q: T`Plyn pri stálej teplote $T=${Tk}\\,\\text{K}$ vratne prijme teplo $Q=${Q}\\,\\text{J}$. Aká je zmena jeho entropie $\\Delta S$ v jednotkách $\\text{J/K}$?`,
      answer: s,
      solution: T`$\\Delta S=\\frac{Q}{T}=\\frac{${Q}}{${Tk}}=${s}\\,\\text{J/K}$.`,
      hint: T`Entropia sa mení podielom tepla a teploty, pri ktorej sa teplo prijme.`,
      mistakes: [
        ...mis(Q * Tk, s, T`Teplo a teplotu si vynásobil. Entropia je podiel $\\frac{Q}{T}$.`),
        ...mis(Tk / Q, s, T`Podiel si obrátil. Entropia rastie s teplom a klesá s teplotou: $\\Delta S=\\frac{Q}{T}$.`)
      ]
    };
  });

  /* ---------- 5. Tepelné motory a chladničky ---------- */

  lesson({
    id: 'v2-tepelne-motory', order: 50, theme: 'teplo', title: 'Tepelné motory a chladničky',
    summary: 'Účinnosť tepelného stroja, Carnotov cyklus a limit daný teplotami ohrievača a chladiča.',
    theory: [
      `<p><strong>Tepelný motor</strong> odoberá teplo z ohrievača, časť premení na prácu a zvyšok odovzdá chladiču. Účinnosť je $\\eta=\\frac{W}{Q_h}$, teda pomer vykonanej práce k teplu z ohrievača.</p>`,
      `<p><strong>Carnotov cyklus</strong> je najlepší možný vratný cyklus medzi dvoma teplotami. Jeho účinnosť je $\\eta=1-\\frac{T_c}{T_h}$, kde teploty musia byť v kelvinoch.</p>`,
      `<p><strong>Chladnička</strong> je tepelný stroj obrátený: prácou presúva teplo z chladnejšieho priestoru do teplejšieho. Preto sa pri nej nehovorí o účinnosti, ale o koeficiente výkonu.</p>`,
      `<p><strong>Prečo nie je účinnosť 100 %:</strong> aj ideálny motor musí odovzdať časť tepla chladiču, aby sa cyklus mohol uzavrieť. Čím väčší rozdiel teplôt, tým vyššia možná účinnosť.</p>`
    ],
    examples: [
      { task: 'Tepelný motor pracuje medzi ohrievačom s teplotou $T_h=500\\,\\text{K}$ a chladičom s $T_c=300\\,\\text{K}$. Aká je jeho ideálna účinnosť?',
        steps: ['$\\eta=1-\\frac{T_c}{T_h}=1-\\frac{300}{500}$.', '$\\eta=1-0{,}6=0{,}4$.', '<strong>Výsledok: $\\eta=40\\,\\%$</strong>'] },
      { task: 'Motor s účinnosťou $25\\,\\%$ dostane z ohrievača teplo $Q_h=800\\,\\text{J}$. Koľko práce vykoná?',
        steps: ['$W=\\eta\\,Q_h=0{,}25\\cdot 800$.', '<strong>Výsledok: $W=200\\,\\text{J}$</strong>'] }
    ]
  });

  gen('v2-tepelne-motory', () => {
    const Th = pick([400, 500, 600, 800, 1000]), Tc = pick([200, 250, 300, 400].filter((x) => x < Th)), ans = Math.round((1 - Tc / Th) * 1000) / 10;
    return {
      tol: 0.1,
      q: T`Ideálny tepelný motor pracuje medzi ohrievačom s teplotou $T_h=${Th}\\,\\text{K}$ a chladičom s teplotou $T_c=${Tc}\\,\\text{K}$. Aká je jeho účinnosť v percentách? Výsledok zaokrúhli na 1 desatinné miesto.`,
      answer: ans,
      solution: T`$\\eta=1-\\frac{T_c}{T_h}=1-\\frac{${Tc}}{${Th}}\\approx ${fmt(ans / 100)}$, teda $\\eta\\approx ${fmt(ans)}\\,\\%$.`,
      hint: T`Účinnosť počítaj z teplôt v kelvinoch. Výsledok vynásob sto, aby si dostal percentá.`,
      mistakes: [
        ...mis(Math.round(Tc / Th * 1000) / 10, ans, T`Vypočítal si len pomer teplôt. Účinnosť je $1-\\frac{T_c}{T_h}$, nie samotný pomer.`, 0.1),
        ...mis(Math.round((Th - Tc) / Tc * 1000) / 10, ans, T`Rozdiel teplôt si vydelil chladičom. Správny vzorec je $1-\\frac{T_c}{T_h}$, teda delenie ohrievačom.`, 0.1)
      ]
    };
  });

  /* ---------- 6. Kinetická teória plynov ---------- */

  lesson({
    id: 'v2-kinetika-plynov', order: 60, theme: 'latky', title: 'Kinetická teória plynov',
    summary: 'Molekulový pohľad na plyn: stredná kinetická energia častíc je úmerná absolútnej teplote.',
    theory: [
      `<p><strong>Kinetická teória plynov</strong> vysvetľuje tlak a teplotu pohybom molekúl. Tlak vzniká zrážkami molekúl so stenami nádoby, teplota je mierou ich priemernej kinetickej energie.</p>`,
      `<p>Stredná kinetická energia jednej molekuly v ideálnom plyne je $\\overline{E_k}=\\frac{3}{2}k\\,T$, kde $k\\approx 1{,}38\\cdot 10^{-23}\\,\\text{J/K}$ je Boltzmannova konštanta. Závisí len od teploty, nie od druhu plynu.</p>`,
      `<p><strong>Prečo je tam $\\frac{3}{2}$:</strong> molekula sa môže pohybovať v troch smeroch a každý smer prispieva polovicou $k\\,T$ k energii. Tri stupne voľnosti dávajú spolu $\\frac{3}{2}k\\,T$.</p>`,
      `<p><strong>Prečo kelvin:</strong> vzorec je priamo úmerný absolútnej teplote. Pri teplote $0\\,\\text{K}$ by kinetická energia molekúl mala byť nulová, preto sa v tomto vzorci nikdy nepoužíva stupeň Celzia.</p>`
    ],
    examples: [
      { task: 'Aká je stredná kinetická energia molekuly plynu pri teplote $T=300\\,\\text{K}$? Použi $k=1{,}38\\cdot 10^{-23}\\,\\text{J/K}$.',
        steps: ['$\\overline{E_k}=\\frac{3}{2}k\\,T=1{,}5\\cdot 1{,}38\\cdot 10^{-23}\\cdot 300$.', '$\\overline{E_k}\\approx 6{,}21\\cdot 10^{-21}\\,\\text{J}$.', '<strong>Výsledok: približne $6{,}21\\cdot 10^{-21}\\,\\text{J}$</strong>'] },
      { task: 'Ak sa teplota plynu zdvojnásobí, ako sa zmení stredná kinetická energia molekuly?',
        steps: ['Energia je priamo úmerná $T$.', '<strong>Výsledok: zdvojnásobí sa</strong>'] }
    ]
  });

  gen('v2-kinetika-plynov', () => {
    const t = rnd(-20, 90), Tk = t + 273.15, E = r2(1.5 * KB * 0.01 * Tk);
    return {
      tol: 0.01,
      q: T`Aká je stredná kinetická energia molekuly ideálneho plynu pri teplote $t=${t}\\,{}^\\circ\\text{C}$? Výsledok vyjadri v jednotkách $10^{-21}\\,\\text{J}$ a zaokrúhli na 2 desatinné miesta. Použi $k=1{,}38\\cdot 10^{-23}\\,\\text{J/K}$.`,
      answer: E,
      solution: T`$\\overline{E_k}=\\frac{3}{2}k\\,T$, kde $T=${t}+273{,}15=${fmt(Tk)}\\,\\text{K}$. Dostaneme $\\overline{E_k}\\approx ${fmt(E)}\\cdot 10^{-21}\\,\\text{J}$.`,
      hint: T`Najprv prepočítaj teplotu na kelvine. Nezabudni na faktor $\\frac{3}{2}$.`,
      mistakes: [
        ...mis(r2(KB * 0.01 * Tk), E, T`Zabudol si faktor $\\frac{3}{2}$. Stredná energia je $\\frac{3}{2}k\\,T$, nie $k\\,T$.`, 0.01),
        ...mis(r2(1.5 * KB * 0.01 * t), E, T`Dosadil si teplotu v stupňoch Celzia. Vzorec potrebuje absolútnu teplotu, teda kelviny.`, 0.01)
      ]
    };
  });

  /* ---------- 7. Boltzmannovo rozdelenie ---------- */

  lesson({
    id: 'v2-boltzmann', order: 70, theme: 'teplo', title: 'Boltzmannovo rozdelenie',
    summary: 'Rozdelenie častíc medzi energetické hladiny pri danej teplote a exponenciálny pokles obsadenia.',
    theory: [
      `<p>Pri teplotnej rovnováhe sa častice rozdelia medzi energetické hladiny tak, že vyššie hladiny sú menej obsadené. Pomer počtu častíc na hladinách $E_2$ a $E_1$ je $\\frac{N_2}{N_1}=e^{-(E_2-E_1)/(k\\,T)}$, za predpokladu rovnakých degenerácií hladín.</p>`,
      `<p>Exponenciála znamená, že malý rozdiel energií medzi hladinami má veľký vplyv, ak je teplota nízka. Pri vysokej teplote sa hladiny vyrovnávajú a obsadenie sa približuje rovnomernému rozdeleniu.</p>`,
      `<p><strong>Prečo práve exponenciála:</strong> pravdepodobnosť obsadenia stavu s energiou $E$ klesá s rastúcim $E$ násobne pri každom pevnom pridanom kuse energie. Práve to vedie na exponenciálnu závislosť.</p>`,
      `<p>Výsledok ukazuje, že teplota nie je len meradlo tepla, ale aj mierka, ktorá určuje, ktoré stavy sú prístupné. Rozdelenie je základom všetkých štatistických výpočtov makroskopických vlastností.</p>`
    ],
    examples: [
      { task: 'Hladina sa nachádza o $\\Delta E=kT$ vyššie ako základná hladina. Aký je pomer $\\frac{N_2}{N_1}$?',
        steps: ['$\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}=e^{-1}$.', '<strong>Výsledok: $\\frac{N_2}{N_1}\\approx 0{,}368$</strong>'] },
      { task: 'Hladina je o $2\\,kT$ vyššie. Aký je pomer obsadenia?',
        steps: ['$\\frac{N_2}{N_1}=e^{-2}\\approx 0{,}135$.', '<strong>Výsledok: približne $0{,}135$</strong>'] }
    ]
  });

  gen('v2-boltzmann', () => {
    const x = rnd(1, 3), ans = r3(Math.exp(-x));
    return {
      tol: 0.001,
      q: T`Vyššia energetická hladina je o $\\Delta E=${x}\\,k\\,T$ nad základnou. Aký je pomer počtu častíc $\\frac{N_2}{N_1}$ podľa Boltzmannovho rozdelenia? Výsledok zaokrúhli na 3 desatinné miesta.`,
      answer: ans,
      solution: T`$\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}=e^{-${x}}\\approx ${fmt(ans)}$.`,
      hint: T`Pomer je $e$ na zápornú hodnotu podielu energetického rozdielu a $kT$.`,
      mistakes: [
        ...mis(r3(Math.exp(x)), ans, T`Exponent si dal s opačným znamienkom. Vyššia hladina je menej obsadená, pomer je menší ako jedna.`, 0.001),
        ...mis(x, ans, T`Vypočítal si len exponent, nie exponenciálu. Výsledok je $e^{-${x}}$.`, 0.001)
      ]
    };
  });

  /* ---------- 8. Štatistické vysvetlenie makroskopických javov ---------- */

  lesson({
    id: 'v2-statisticke', order: 80, theme: 'latky', title: 'Štatistické vysvetlenie makroskopických javov',
    summary: 'Boltzmannov vzťah medzi entropiou a počtom mikrostavov a prečo makroskopické javy majú pravdepodobnostný charakter.',
    theory: [
      `<p><strong>Boltzmannov vzťah</strong> spája entropiu s počtom mikrostavov $W$, ktoré zodpovedajú danému makrostavu: $S=k\\ln W$. Prirodzený logaritmus znamená, že entropia je aditívna, keď sa spoja dve nezávislé sústavy.</p>`,
      `<p>Pri $N$ nezávislých časticiach, z ktorých každá môže byť v jednom z dvoch stavov, je počet mikrostavov $W=2^N$. Entropia je potom $S=k\\,N\\ln 2$, čo rastie úmerne s počtom častíc.</p>`,
      `<p><strong>Prečo sú makroskopické javy pravdepodobnostné:</strong> makrostavy s veľkým počtom mikrostavov sa vyskytujú oveľa častejšie. Pri mole častíc je rozdiel pravdepodobností taký obrovský, že sa samovoľný pokles entropie prakticky nikdy nepozoruje.</p>`,
      `<p><strong>Prečo logaritmus:</strong> počet mikrostavov rastie exponenciálne s počtom častíc, logaritmus z neho spraví lineárnu veličinu, ktorú možno rozumne sčítavať a porovnávať.</p>`
    ],
    examples: [
      { task: 'Systém má $N=3$ nezávislé častice, každá s dvoma stavmi. Koľko mikrostavov $W$ má?',
        steps: ['$W=2^N=2^3$.', '<strong>Výsledok: $W=8$</strong>'] },
      { task: 'Aká je hodnota $S/k$ pre $N=4$ častice s dvoma stavmi? Zaokrúhli na 2 desatinné miesta.',
        steps: ['$W=2^4=16$, takže $\\frac{S}{k}=\\ln 16$.', '$\\ln 16=4\\ln 2\\approx 2{,}77$.', '<strong>Výsledok: $\\frac{S}{k}\\approx 2{,}77$</strong>'] }
    ]
  });

  gen('v2-statisticke', () => {
    const N = rnd(2, 10), ans = r2(N * Math.log(2));
    return {
      tol: 0.01,
      q: T`Systém obsahuje $N=${N}$ nezávislých častíc, z ktorých každá môže byť len v jednom z dvoch stavov. Aká je hodnota $\\frac{S}{k}$ podľa Boltzmannovho vzťahu $S=k\\ln W$, pričom $W=2^N$? Výsledok zaokrúhli na 2 desatinné miesta.`,
      answer: ans,
      solution: T`Počet mikrostavov je $W=2^{${N}}$, teda $\\frac{S}{k}=\\ln W=${N}\\ln 2\\approx ${fmt(ans)}$.`,
      hint: T`Najprv nájdi $W=2^N$, potom vypočítaj prirodzený logaritmus celého počtu $W$.`,
      mistakes: [
        ...mis(r2(Math.log(N)), ans, T`Logaritmoval si počet častíc. Logaritmuje sa počet mikrostavov $W=2^N$, nie $N$.`, 0.01),
        ...mis(r2(N * Math.log10(2)), ans, T`Použil si dekadický logaritmus. Boltzmannov vzťah používa prirodzený logaritmus $\\ln$.`, 0.01)
      ]
    };
  });
})();
