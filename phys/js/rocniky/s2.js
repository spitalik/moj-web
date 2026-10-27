/* 2. ročník SŠ: molekulová stavba, teplo a vnútorná energia, skupenstvá, ideálny plyn, termodynamika, kmitanie a vlnenie.
   Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 's2' }, l));
  const gen = EXERCISES.register;
  // vyradí chybné hodnoty, ktoré by vyšli ako správna odpoveď
  const keep = (ms, ans, eps = 1e-6) => ms.filter((m) => Math.abs(m.value - ans) > eps);

  /* ---------- 1. molekulová stavba látok ---------- */

  lesson({
    id: 's2-molekuly', order: 10, theme: 'latky',
    title: 'Molekulová stavba látok',
    summary: 'Častice látky, látkové množstvo a molárna hmotnosť.',
    theory: [
      `<p>Každá látka je zložená z veľmi malých častíc: atómov alebo molekúl. Tie sú v neustálom neusporiadanom pohybe a navzájom na seba pôsobia príťažlivými a odpudivými silami. Od týchto síl závisí, či je látka pevná, kvapalná alebo plynná.</p>`,
      `<p>Dôkazom pohybu molekúl je <strong>Brownov pohyb</strong>: drobné častice rozptýlené v kvapaline sa trasú nepravidelne, lebo ich zo všetkých strán narážajú molekuly kvapaliny. Pohyb samotných molekúl nevidíme, ale jeho dôsledky áno.</p>`,
      `<p>Množstvo látky udávame v móloch. Jeden mól obsahuje $N_A\\approx 6{,}02\\cdot 10^{23}$ častíc (Avogadrova konštanta). <strong>Molárna hmotnosť</strong> $M$ je hmotnosť jedného mólu, v gramoch na mól. Napríklad voda má $M=18\\,\\text{g/mol}$, lebo jej molekula má väčšiu hmotnosť než $1\\,\\text{g}$ vynásobenú celkovým počtom.</p>`,
      `<p>Vzťahy: látkové množstvo $n=\\frac{m}{M}$ a počet častíc $N=n\\,N_A$. Preto aj veľmi malé množstvo látky obsahuje obrovské množstvo častíc.</p>`
    ],
    examples: [
      { task: 'Koľko mólov je $36\\,\\text{g}$ vody, ak $M=18\\,\\text{g/mol}$?',
        steps: ['$n=\\frac{m}{M}=\\frac{36}{18}$.', '<strong>Výsledok: 2 mol</strong>'] },
      { task: 'Koľko molekúl je v $2\\,\\text{mol}$ vody?',
        steps: ['$N=n\\,N_A=2\\cdot 6{,}02\\cdot 10^{23}$.', '<strong>Výsledok: približne $1{,}2\\cdot 10^{24}$ molekúl</strong>'] }
    ]
  });

  gen('s2-molekuly', () => {
    const M = pick([2, 4, 12, 16, 18, 28, 32, 44]), k = rnd(2, 9);
    if (Math.random() < 0.5) {
      const m = M * k;
      return {
        q: T`Koľko mólov látky je v $${m}\\,\\text{g}$ látky s molárnou hmotnosťou $${M}\\,\\text{g/mol}$?`,
        answer: k,
        solution: T`$n=\\frac{m}{M}=\\frac{${m}\\,\\text{g}}{${M}\\,\\text{g/mol}}=${k}\\,\\text{mol}$.`,
        hint: T`Látkové množstvo je podiel hmotnosti a molárnej hmotnosti: $n=\\frac{m}{M}$.`,
        mistakes: keep([
          { value: m * M, msg: T`Vynásobil si hmotnosť a molárnu hmotnosť. Látkové množstvo dostaneš delením.` },
          { value: M / m, msg: T`Obrátil si podiel. Látkové množstvo je $\\frac{m}{M}$, nie $\\frac{M}{m}$.` }
        ], k)
      };
    }
    return {
      q: T`Koľko molekúl je v $${k}\\,\\text{mol}$ látky? Výsledok vyjadri v násobkoch $10^{23}$ (použi $N_A\\approx 6{,}02\\cdot 10^{23}\\,\\text{mol}^{-1}$, zaokrúhli na 2 desatinné miesta).`,
      answer: 6.02 * k, tol: 0.01,
      solution: T`$N=n\\,N_A=${k}\\cdot 6{,}02\\cdot 10^{23}=${fmt(6.02 * k)}\\cdot 10^{23}$.`,
      hint: T`Jeden mól obsahuje $N_A$ častíc. Počet mólov vynásob Avogadrovou konštantou.`,
      mistakes: keep([
        { value: k, msg: T`Zabudol si vynásobiť Avogadrovou konštantou, ktorá je v násobkoch $10^{23}$.` }
      ], 6.02 * k, 0.05)
    };
  });

  /* ---------- 2. teplota, teplo a vnútorná energia ---------- */

  lesson({
    id: 's2-teplo', order: 20, theme: 'teplo',
    title: 'Teplota, teplo a vnútorná energia',
    summary: 'Teplota, kelvin, vnútorná energia a teplo potrebné na ohrev.',
    theory: [
      `<p><strong>Teplota</strong> je mierou priemernej kinetickej energie neusporiadaného pohybu častíc. Teplejšie teleso má častice v priemere rýchlejšie. Celzia stupnica má nulu pri topení ľadu, absolútna stupnica v kelvinoch má nulu pri absolútnej nule. Platí $T=t+273{,}15$, pričom veľkosť stupňa je rovnaká.</p>`,
      `<p><strong>Vnútorná energia</strong> $U$ telesa je súčet kinetických a potenciálnych energií všetkých jeho častíc. Mení sa dvoma spôsobmi: prácou (napríklad trením) alebo prenosom tepla.</p>`,
      `<p><strong>Teplo</strong> je energia, ktorá prechádza z teplejšieho telesa na chladnejšie. Teplo nie je látka a telesá ho „nemajú“. Teplo potrebné na ohriatie telesa je $Q=m\\,c\\,\\Delta T$, kde $c$ je merná tepelná kapacita. Voda má $c=4200\\,\\text{J/(kg\\,K)}$, hliník $900\\,\\text{J/(kg\\,K)}$. Preto sa voda ohrieva pomaly a dlho si drží teplo.</p>`,
      `<p>Zmenu teploty v kelvinoch a v stupňoch Celzia počítame rovnako, lebo $\\Delta T=\\Delta t$. Prepočet na absolútnu teplotu treba urobiť len pri konkrétnej teplote.</p>`
    ],
    examples: [
      { task: 'Koľko tepla treba na ohriatie $2\\,\\text{kg}$ vody o $10\\,\\text{K}$? Použi $c=4200\\,\\text{J/(kg\\,K)}$.',
        steps: ['$Q=m\\,c\\,\\Delta T=2\\cdot 4200\\cdot 10$.', '<strong>Výsledok: 84 000 J = 84 kJ</strong>'] },
      { task: 'Aká je teplota $25\\,{}^\\circ\\text{C}$ v kelvinoch?',
        steps: ['$T=t+273{,}15=25+273{,}15$.', '<strong>Výsledok: 298,15 K</strong>'] }
    ]
  });

  gen('s2-teplo', () => {
    if (Math.random() < 0.6) {
      const c = pick([4200, 900, 460]), m = rnd(1, 5), dt = rnd(5, 60), Q = m * c * dt;
      return {
        q: T`Koľko tepla (v joulov) treba na ohriatie $${m}\\,\\text{kg}$ látky s mernou tepelnou kapacitou $c=${c}\\,\\text{J/(kg\\,K)}$ o $${dt}\\,\\text{K}$?`,
        answer: Q,
        solution: T`$Q=m\\,c\\,\\Delta T=${m}\\cdot ${c}\\cdot ${dt}=${Q}\\,\\text{J}$.`,
        hint: T`Teplo na ohrev je súčin hmotnosti, mernej tepelnej kapacity a zmeny teploty: $Q=m\\,c\\,\\Delta T$.`,
        mistakes: keep([
          { value: m * dt, msg: T`Zabudol si na mernú tepelnú kapacitu $c$. Ukazuje, koľko energie látka potrebuje na ohriatie.` },
          { value: Q / 1000, msg: T`Vydelil si tisíckou. Úloha žiada joule, nie kilojoule.` }
        ], Q)
      };
    }
    const t = rnd(-20, 90), tk = t + 273.15;
    return {
      q: T`Prepočítaj teplotu $${t}\\,{}^\\circ\\text{C}$ na kelvin. (zaokrúhli na 2 desatinné miesta)`,
      answer: tk, tol: 0.01,
      solution: T`$T=t+273{,}15=${t}+273{,}15=${fmt(tk)}\\,\\text{K}$.`,
      hint: T`Kelvin: $T=t+273{,}15$. Stupeň je rovnako veľký ako na Celziovej stupnici.`,
      mistakes: keep([
        { value: t + 273, msg: T`Použil si zaokrúhlenú konštantu. Presnejšie je $273{,}15$.` },
        { value: t, msg: T`Kelvin a Celzius sa líšia posunom o $273{,}15$. Teplotu treba prepočítať, nie len prepísať.` }
      ], tk, 0.01)
    };
  });

  /* ---------- 3. zmeny skupenstva ---------- */

  lesson({
    id: 's2-skupenstva', order: 30, theme: 'teplo',
    title: 'Zmeny skupenstva',
    summary: 'Topenie, tuhnutie, vyparovanie a kondenzácia a skupenské teplo.',
    theory: [
      `<p>Látka môže byť pevná, kvapalná alebo plynná. Prechod medzi skupenstvami vyžaduje energiu alebo ju uvoľňuje. Pri topení a vyparovaní sa <strong>teplota nemení</strong>, dodané teplo sa spotrebuje na oslabenie väzieb medzi molekulami, nie na zvýšenie ich rýchlosti.</p>`,
      `<p><strong>Skupenské teplo</strong> je teplo potrebné na premenu jedného kilogramu látky bez zmeny teploty. Pri topení ide o merné skupenské teplo topenia $L_t$, pri vyparovaní o $L_v$. Pre ľad $L_t\\approx 334\\,\\text{kJ/kg}$, pre vodu $L_v\\approx 2260\\,\\text{kJ/kg}$. Teplo potrebné na premenu telesa hmotnosti $m$ je $Q=m\\,L$.</p>`,
      `<p>Pri <strong>tuhnutí</strong> a <strong>kondenzácii</strong> sa tie isté množstvá tepla uvoľňujú. Preto je para o $100\\,{}^\\circ\\text{C}$ nebezpečnejšia než voda rovnakej teploty: pri kondenzácii na pokožke odovzdá obrovské množstvo tepla.</p>`,
      `<p>Vyparovanie je aj chladenie: z povrchu odchádzajú najrýchlejšie molekuly, preto sa zvyšná kvapalina ochladzuje. Preto sa po vykúpaní cítime chladnejšie.</p>`
    ],
    examples: [
      { task: 'Koľko tepla treba na roztopenie $2\\,\\text{kg}$ ľadu pri teplote $0\\,{}^\\circ\\text{C}$? Použi $L_t=334\\,\\text{kJ/kg}$.',
        steps: ['$Q=m\\,L_t=2\\cdot 334$.', '<strong>Výsledok: 668 kJ</strong>'] },
      { task: 'Koľko tepla uvoľní $0{,}5\\,\\text{kg}$ pary pri kondenzácii na vodu o teplote $100\\,{}^\\circ\\text{C}$? Použi $L_v=2260\\,\\text{kJ/kg}$.',
        steps: ['$Q=m\\,L_v=0{,}5\\cdot 2260$.', '<strong>Výsledok: 1130 kJ</strong>'] }
    ]
  });

  gen('s2-skupenstva', () => {
    const m = rnd(1, 8);
    if (Math.random() < 0.5) {
      return {
        q: T`Koľko kilojoulov tepla treba na roztopenie $${m}\\,\\text{kg}$ ľadu pri teplote $0\\,{}^\\circ\\text{C}$? Merné skupenské teplo topenia ľadu je $334\\,\\text{kJ/kg}$.`,
        answer: m * 334,
        solution: T`$Q=m\\,L_t=${m}\\cdot 334=${m * 334}\\,\\text{kJ}$.`,
        hint: T`Teplota sa pri topení nemení. Teplo počítame ako $Q=m\\,L_t$.`,
        mistakes: keep([
          { value: m * 2260, msg: T`To by bolo vyparovanie. Pri topení ľadu použi $334\\,\\text{kJ/kg}$.` },
          { value: m * 0.334, msg: T`Výsledok si dostal v megajouloch. Úloha žiada kilojouly.` }
        ], m * 334)
      };
    }
    return {
      q: T`Koľko kilojoulov tepla uvoľní $${m}\\,\\text{kg}$ vodnej pary pri kondenzácii na vodu o teplote $100\\,{}^\\circ\\text{C}$? Merné skupenské teplo vyparovania vody je $2260\\,\\text{kJ/kg}$.`,
      answer: m * 2260,
      solution: T`$Q=m\\,L_v=${m}\\cdot 2260=${m * 2260}\\,\\text{kJ}$.`,
      hint: T`Kondenzácia je opak vyparovania: teplo sa uvoľňuje. Počíta sa rovnako, $Q=m\\,L_v$.`,
      mistakes: keep([
        { value: m * 334, msg: T`To je teplo topenia ľadu. Pri kondenzácii pary použi $2260\\,\\text{kJ/kg}$.` },
        { value: m * 2.26, msg: T`Výsledok si dostal v megajouloch. Úloha žiada kilojouly.` }
      ], m * 2260)
    };
  });

  /* ---------- 4. ideálny plyn a stavová rovnica ---------- */

  lesson({
    id: 's2-ideal', order: 40, theme: 'teplo',
    title: 'Ideálny plyn a stavová rovnica',
    summary: 'Model ideálneho plynu, stavová rovnica a izotermický dej.',
    theory: [
      `<p><strong>Ideálny plyn</strong> je model: molekuly sú malé body, medzi nimi nepôsobia žiadne sily a narážajú do stien nádoby a navzájom sa pružne odrážajú. Reálne plyny pri nízkom tlaku a vysokej teplote sa správajú takmer ideálne.</p>`,
      `<p><strong>Stavová rovnica</strong> ideálneho plynu: $p\\,V=n\\,R\\,T$, kde $R\\approx 8{,}31\\,\\text{J/(mol\\,K)}$ je molárna plynová konštanta a teplota $T$ sa dosadzuje v kelvinoch. Ak zvýšime teplotu v uzavretej nádobe, molekuly narážajú silnejšie a častejšie, tlak rastie.</p>`,
      `<p><strong>Izotermický dej</strong> prebieha pri stálej teplote. Vtedy $p\\,V=\\text{konšt.}$, teda $p_1V_1=p_2V_2$: keď tlak stúpne dvojnásobne, objem klesne na polovicu. Podobne pri stálom tlaku je objem úmerný teplote, a pri stálom objeme je tlak úmerný teplote.</p>`,
      `<p>Pri každom výpočte musíme dať pozor na jednotky: tlak v pascaloch, objem v metroch kubických a teplotu v kelvinoch.</p>`
    ],
    examples: [
      { task: 'Plyn má pri stálej teplote objem $4\\,\\text{l}$ a tlak $200\\,\\text{kPa}$. Aký bude objem pri tlaku $400\\,\\text{kPa}$?',
        steps: ['$p_1V_1=p_2V_2$, teda $V_2=\\frac{p_1V_1}{p_2}=\\frac{200\\cdot 4}{400}$.', '<strong>Výsledok: 2 l</strong>'] },
      { task: 'Aký tlak má $1\\,\\text{mol}$ plynu pri $T=300\\,\\text{K}$ a objeme $V=0{,}025\\,\\text{m}^3$? Použi $R=8{,}31\\,\\text{J/(mol\\,K)}$.',
        steps: ['$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}31\\cdot 300}{0{,}025}$.', '<strong>Výsledok: 99 720 Pa</strong>'] }
    ]
  });

  gen('s2-ideal', () => {
    if (Math.random() < 0.5) {
      const V1 = 4 * rnd(1, 5), p2 = pick([50, 100, 400, 800]), V2 = (V1 * 200) / p2;
      return {
        q: T`Plyn má pri stálej teplote objem $${V1}\\,\\text{l}$ a tlak $200\\,\\text{kPa}$. Aký bude jeho objem pri tlaku $${p2}\\,\\text{kPa}$? (v litroch)`,
        answer: V2,
        solution: T`Pri stálej teplote platí $p_1V_1=p_2V_2$, teda $V_2=\\frac{p_1V_1}{p_2}=\\frac{200\\cdot ${V1}}{${p2}}=${V2}\\,\\text{l}$.`,
        hint: T`Izotermický dej: súčin tlaku a objemu je stály. Keď tlak rastie, objem klesá.`,
        mistakes: keep([
          { value: (V1 * p2) / 200, msg: T`Pomer si obrátil. Objem klesá, keď tlak rastie: $V_2=\\frac{p_1V_1}{p_2}$.` },
          { value: V1, msg: T`Objem si nechal nezmenený. Pri stálej teplote sa objem mení nepriamo úmerne tlaku.` }
        ], V2)
      };
    }
    const V = pick([0.025, 0.05, 0.1]), n = pick([1, 2]), Tk = 300, p = (n * 8.31 * Tk) / V;
    return {
      q: T`Ideálny plyn má látkové množstvo $${n}\\,\\text{mol}$, teplotu $300\\,\\text{K}$ a objem $V=${fmt(V)}\\,\\text{m}^3$. Aký je jeho tlak? Použi $R=8{,}31\\,\\text{J/(mol\\,K)}$. (v pascaloch)`,
      answer: p, tol: 1,
      solution: T`Zo stavovej rovnice $pV=nRT$ dostaneme $p=\\frac{nRT}{V}=\\frac{${n}\\cdot 8{,}31\\cdot 300}{${fmt(V)}}=${fmt(p)}\\,\\text{Pa}$.`,
      hint: T`Zo stavovej rovnice vyjadri tlak: $p=\\frac{nRT}{V}$. Teplota musí byť v kelvinoch.`,
      mistakes: keep([
        { value: n * 8.31 * Tk * V, msg: T`Objem si dosadil do čitateľa. Vzťah je $p=\\frac{nRT}{V}$, objem je v menovateli.` },
        { value: n * 8.31 * Tk, msg: T`Zabudol si deliť objemom.` }
      ], p, 1)
    };
  });

  /* ---------- 5. termodynamické zákony a tepelné motory ---------- */

  lesson({
    id: 's2-termo', order: 50, theme: 'teplo',
    title: 'Termodynamické zákony a tepelné motory',
    summary: 'Prvý zákon termodynamiky, druhý zákon a účinnosť tepelného motora.',
    theory: [
      `<p><strong>Prvý termodynamický zákon</strong> je zákon zachovania energie pre tepelné deje: $\\Delta U=Q-A$. Zmena vnútornej energie $\\Delta U$ je rovná teplu $Q$ dodanému sústave mínus práci $A$, ktorú sústava vykoná na okolí. Ak plyn expanduje a koná prácu, jeho vnútorná energia klesá, pokiaľ mu nedodáme dostatok tepla.</p>`,
      `<p><strong>Druhý termodynamický zákon</strong> hovorí, že teplo prechádza samovoľne z teplejšieho telesa na chladnejšie, nie naopak. Z toho vyplýva, že žiadny tepelný motor nemôže premeniť všetko teplo na prácu. Časť tepla musí odísť do chladiča.</p>`,
      `<p><strong>Tepelný motor</strong> prijme z ohrievača teplo $Q_1$, časť premení na prácu $A$ a zvyšok $Q_2$ odovzdá chladiču. <strong>Účinnosť</strong> je $\\eta=\\frac{A}{Q_1}=1-\\frac{Q_2}{Q_1}$. Vždy je menšia než 1, teda menšia než 100 %.</p>`,
      `<p>Najvyššiu možnú účinnosť má ideálny Carnotov cyklus: $\\eta_{\\max}=1-\\frac{T_2}{T_1}$, kde teploty $T_1$ ohrievača a $T_2$ chladiča sú v kelvinoch. Preto sa motory zlepšujú zvyšovaním teploty ohrievača.</p>`
    ],
    examples: [
      { task: 'Plynu bolo dodané teplo $300\\,\\text{J}$ a plyn vykonal prácu $120\\,\\text{J}$. Aká je zmena jeho vnútornej energie?',
        steps: ['$\\Delta U=Q-A=300-120$.', '<strong>Výsledok: 180 J (vnútorná energia vzrástla)</strong>'] },
      { task: 'Motor prijme z ohrievača $1000\\,\\text{J}$ a vykoná prácu $250\\,\\text{J}$. Aká je jeho účinnosť?',
        steps: ['$\\eta=\\frac{A}{Q_1}=\\frac{250}{1000}=0{,}25$.', '<strong>Výsledok: 25 %</strong>'] }
    ]
  });

  gen('s2-termo', () => {
    if (Math.random() < 0.5) {
      const Q = rnd(50, 400), A = rnd(20, 300), dU = Q - A;
      return {
        q: T`Plynu bolo dodané teplo $${Q}\\,\\text{J}$ a plyn pri tom vykonal prácu $${A}\\,\\text{J}$. Aká je zmena jeho vnútornej energie $\\Delta U$? (v joulov, môže byť záporná)`,
        answer: dU, signed: true,
        solution: T`Podľa prvého termodynamického zákona $\\Delta U=Q-A=${Q}-${A}=${dU}\\,\\text{J}$.`,
        hint: T`Prvý termodynamický zákon: $\\Delta U=Q-A$, kde $A$ je práca, ktorú vykoná plyn.`,
        mistakes: keep([
          { value: Q + A, msg: T`Prácu, ktorú plyn vykoná, odčítaj od tepla, nesčítaj ju.` },
          { value: A - Q, msg: T`Odčítal si v opačnom poradí. Vzorec je $\\Delta U=Q-A$.` }
        ], dU)
      };
    }
    const Q1 = pick([500, 800, 1000, 1200, 2000]), eta = pick([10, 20, 25, 30, 40, 50]), A = (Q1 * eta) / 100;
    return {
      q: T`Tepelný motor prijme z ohrievača teplo $${Q1}\\,\\text{J}$ a vykoná prácu $${A}\\,\\text{J}$. Aká je jeho účinnosť v percentách?`,
      answer: eta, tol: 0.01,
      solution: T`$\\eta=\\frac{A}{Q_1}\\cdot 100\\,\\%=\\frac{${A}}{${Q1}}\\cdot 100\\,\\%=${eta}\\,\\%$.`,
      hint: T`Účinnosť je podiel práce a tepla prijatého z ohrievača, vynásobený 100 %.`,
      mistakes: keep([
        { value: Q1 - A, msg: T`To je teplo odovzdané chladiču, nie účinnosť. Účinnosť je podiel práce a tepla z ohrievača.` },
        { value: A / Q1, msg: T`Výsledok je v desatinnom tvare. Účinnosť v percentách dostaneš vynásobením 100.` }
      ], eta, 0.01)
    };
  });

  /* ---------- 6. mechanické kmitanie a rezonancia ---------- */

  lesson({
    id: 's2-kmitanie', order: 60, theme: 'vlny',
    title: 'Mechanické kmitanie a rezonancia',
    summary: 'Perióda, frekvencia, kyvadlo a rezonancia.',
    theory: [
      `<p><strong>Kmitavý pohyb</strong> je pohyb okolo rovnovážnej polohy, ktorý sa periodicky opakuje. Príkladom je závažie na pružine alebo kyvadlo. <strong>Perióda</strong> $T$ je čas jedného kmitu, <strong>frekvencia</strong> $f$ je počet kmitov za sekundu: $f=\\frac{1}{T}=\\frac{n}{t}$. Jednotka frekvencie je hertz, $1\\,\\text{Hz}=1\\,\\text{s}^{-1}$.</p>`,
      `<p><strong>Harmonický kmit</strong> má výchylku $y=A\\sin(\\omega t)$, kde $A$ je amplitúda a $\\omega=2\\pi f$ uhlová frekvencia. Sínusový priebeh vzniká pri pružine, kde sila je priamo úmerná výchylke.</p>`,
      `<p>Perióda závisí od vlastností kmitajúcej sústavy. Pri pružine $T=2\\pi\\sqrt{\\frac{m}{k}}$: ťažšie závažie kmitá pomalšie, tuhšia pružina rýchlejšie. Pri matematickom kyvadle $T=2\\pi\\sqrt{\\frac{l}{g}}$, kde $l$ je dĺžka závesu (pre malé výchylky).</p>`,
      `<p><strong>Rezonancia</strong> nastane, keď vonkajšia periodická sila kmitá s vlastnou frekvenciou telesa. Každý impulz sa pridá k predchádzajúcemu kmitu a amplitúda narastá. Preto sa hojdačka rozhojdá, keď ju tlačíme v rytme jej kmitania.</p>`
    ],
    examples: [
      { task: 'Závažie za $20\\,\\text{s}$ vykoná $40$ kmitov. Aká je jeho perióda a frekvencia?',
        steps: ['$T=\\frac{t}{n}=\\frac{20}{40}=0{,}5\\,\\text{s}$.', '$f=\\frac{1}{T}=\\frac{1}{0{,}5}$.', '<strong>Výsledok: T = 0,5 s, f = 2 Hz</strong>'] },
      { task: 'Teleso kmitá s frekvenciou $5\\,\\text{Hz}$. Aká je jeho perióda?',
        steps: ['$T=\\frac{1}{f}=\\frac{1}{5}$.', '<strong>Výsledok: 0,2 s</strong>'] }
    ]
  });

  gen('s2-kmitanie', () => {
    const r = Math.random();
    if (r < 0.4) {
      const tm = rnd(4, 20), n = rnd(10, 60);
      return {
        q: T`Teleso za $${tm}\\,\\text{s}$ vykoná $${n}$ kmitov. Aká je jeho frekvencia v hertzoch? (zaokrúhli na 2 desatinné miesta)`,
        answer: n / tm, tol: 0.01,
        solution: T`$f=\\frac{n}{t}=\\frac{${n}}{${tm}}\\approx ${fmt(n / tm)}\\,\\text{Hz}$.`,
        hint: T`Frekvencia je počet kmitov za sekundu: $f=\\frac{n}{t}$.`,
        mistakes: keep([
          { value: tm / n, msg: T`Obrátil si podiel. Výsledok je perióda $T$, čas jedného kmitu, nie frekvencia.` }
        ], n / tm, 0.05)
      };
    }
    if (r < 0.7) {
      const f = pick([2, 4, 5, 10, 20, 25]);
      return {
        q: T`Teleso kmitá s frekvenciou $${f}\\,\\text{Hz}$. Aká je jeho perióda v sekundách?`,
        answer: 1 / f, tol: 0.001,
        solution: T`$T=\\frac{1}{f}=\\frac{1}{${f}}=${fmt(1 / f)}\\,\\text{s}$.`,
        hint: T`Perióda a frekvencia sú prevrátené hodnoty: $T=\\frac{1}{f}$.`,
        mistakes: keep([
          { value: f, msg: T`To je frekvencia, nie perióda. Perióda je prevrátená hodnota frekvencie.` }
        ], 1 / f, 0.001)
      };
    }
    const [l, root] = pick([[0.4, 0.2], [0.9, 0.3], [1.6, 0.4], [2.5, 0.5], [3.6, 0.6], [4.9, 0.7], [6.4, 0.8]]);
    const T0 = 2 * 3.14 * root;
    return {
      q: T`Matematické kyvadlo dĺžky $${fmt(l)}\\,\\text{m}$ kmitá na mieste, kde $g=10\\,\\text{m/s}^2$. Aká je jeho perióda? Použi $\\pi\\approx 3{,}14$ a zaokrúhli na 2 desatinné miesta. (v sekundách)`,
      answer: T0, tol: 0.01,
      solution: T`$T=2\\pi\\sqrt{\\frac{l}{g}}=2\\cdot 3{,}14\\cdot\\sqrt{\\frac{${fmt(l)}}{10}}=2\\cdot 3{,}14\\cdot ${fmt(root)}\\approx ${fmt(Math.round(T0 * 100) / 100)}\\,\\text{s}$.`,
      hint: T`Perióda kyvadla je $T=2\\pi\\sqrt{\\frac{l}{g}}$. Dĺžku vydeľ tiažovým zrýchlením a odmocni.`,
      mistakes: keep([
        { value: 2 * 3.14 * root * root, msg: T`Zabudol si odmocniť podiel $\\frac{l}{g}$. Vzorec obsahuje $\\sqrt{\\frac{l}{g}}$, nie $\\frac{l}{g}$.` }
      ], T0, 0.05)
    };
  });

  /* ---------- 7. mechanické vlnenie a zvuk ---------- */

  lesson({
    id: 's2-vlnenie', order: 70, theme: 'vlny',
    title: 'Mechanické vlnenie a zvuk',
    summary: 'Vlnová dĺžka, rýchlosť šírenia vlny a zvuk ako mechanické vlnenie.',
    theory: [
      `<p><strong>Vlnenie</strong> je šírenie kmitov prostredím. Prenáša sa energia a vlnový tvar, ale častice prostredia len kmitajú okolo svojich rovnovážnych polôh. Mechanická vlna potrebuje látkové prostredie, preto zvuk nepočuť vo vákuu.</p>`,
      `<p>Vlnová dĺžka $\\lambda$ je vzdialenosť dvoch najbližších bodov s rovnakou fázou, napríklad dvoch hrebeňov. Za jednu periódu $T$ vlna postúpi o $\\lambda$, preto pre rýchlosť šírenia platí $v=\\frac{\\lambda}{T}=\\lambda\\,f$.</p>`,
      `<p><strong>Zvuk</strong> je pozdĺžne mechanické vlnenie. Človek počuje frekvencie približne od $20\\,\\text{Hz}$ do $20\\,\\text{kHz}$. Výška tónu závisí od frekvencie, hlasitosť od amplitúdy. V suchom vzduchu pri $20\\,{}^\\circ\\text{C}$ sa zvuk šíri rýchlosťou približne $340\\,\\text{m/s}$, vo vode a v oceli rýchlejšie.</p>`,
      `<p><strong>Ozvena</strong> vznikne, keď sa zvuk odrazí od prekážky. Zvuk prejde dráhu tam a späť, preto vzdialenosť prekážky je $s=\\frac{v\\,t}{2}$, kde $t$ je čas medzi výstrelom zvuku a jeho návratom.</p>`
    ],
    examples: [
      { task: 'Vlna s frekvenciou $50\\,\\text{Hz}$ má vlnovú dĺžku $4\\,\\text{m}$. Akou rýchlosťou sa šíri?',
        steps: ['$v=\\lambda\\,f=4\\cdot 50$.', '<strong>Výsledok: 200 m/s</strong>'] },
      { task: 'Ozvena prišla po $2\\,\\text{s}$ od výstrelu. Ako ďaleko je prekážka? Použi $v=340\\,\\text{m/s}$.',
        steps: ['$2s=v\\,t=340\\cdot 2=680\\,\\text{m}$.', '<strong>Výsledok: $s=340\\,\\text{m}$</strong>'] }
    ]
  });

  gen('s2-vlnenie', () => {
    const r = Math.random();
    if (r < 0.35) {
      const f = pick([170, 340, 680, 850]);
      return {
        q: T`Zvuk v vzduchu sa šíri rýchlosťou $340\\,\\text{m/s}$. Aká je vlnová dĺžka zvuku s frekvenciou $${f}\\,\\text{Hz}$? (v metroch)`,
        answer: 340 / f, tol: 0.001,
        solution: T`$\\lambda=\\frac{v}{f}=\\frac{340}{${f}}=${fmt(340 / f)}\\,\\text{m}$.`,
        hint: T`Zo vzťahu $v=\\lambda\\,f$ vyjadri vlnovú dĺžku: $\\lambda=\\frac{v}{f}$.`,
        mistakes: keep([
          { value: 340 * f, msg: T`Násobil si. Vlnovú dĺžku dostaneš delením rýchlosti frekvenciou.` },
          { value: f / 340, msg: T`Obrátil si podiel. Vlnová dĺžka je $\\frac{v}{f}$.` }
        ], 340 / f, 0.001)
      };
    }
    if (r < 0.65) {
      const t = rnd(1, 6), s = 170 * t;
      return {
        q: T`Ozvena od prekážky prišla po $${t}\\,\\text{s}$ od vyslania zvuku. Aká je vzdialenosť prekážky? Rýchlosť zvuku je $340\\,\\text{m/s}$. (v metroch)`,
        answer: s,
        solution: T`Zvuk prejde dráhu tam aj späť: $2s=v\\,t=340\\cdot ${t}=${340 * t}\\,\\text{m}$, teda $s=${s}\\,\\text{m}$.`,
        hint: T`Zvuk prejde k prekážke a naspäť, celková dráha je $2s$.`,
        mistakes: keep([
          { value: 340 * t, msg: T`To je celá dráha tam a späť. Vzdialenosť prekážky je polovica.` }
        ], s)
      };
    }
    const lam = rnd(1, 6), f = pick([20, 50, 80, 100, 200]);
    return {
      q: T`Vlna má vlnovú dĺžku $${lam}\\,\\text{m}$ a frekvenciu $${f}\\,\\text{Hz}$. Akou rýchlosťou sa šíri? (v m/s)`,
      answer: lam * f,
      solution: T`$v=\\lambda\\,f=${lam}\\cdot ${f}=${lam * f}\\,\\text{m/s}$.`,
      hint: T`Rýchlosť vlny je súčin vlnovej dĺžky a frekvencie: $v=\\lambda\\,f$.`,
      mistakes: keep([
        { value: lam + f, msg: T`Sčítal si vlnovú dĺžku a frekvenciu. Rýchlosť je ich súčin.` },
        { value: f / lam, msg: T`Delil si. Rýchlosť vlny je súčin $\\lambda\\,f$.` }
      ], lam * f)
    };
  });
})();
