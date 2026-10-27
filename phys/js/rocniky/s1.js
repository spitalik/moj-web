/* 1. ročník SŠ: veličiny a jednotky, pohyb, zrýchlenie, Newtonove zákony, gravitácia, práca a energia, tlak.
   Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 's1' }, l));
  const gen = EXERCISES.register;
  // vyradí chybné hodnoty, ktoré by vyšli ako správna odpoveď
  const keep = (ms, ans, eps = 1e-6) => ms.filter((m) => Math.abs(m.value - ans) > eps);

  /* ---------- 1. veličiny a jednotky ---------- */

  lesson({
    id: 's1-veliciny', order: 10, theme: 'latky',
    title: 'Fyzikálne veličiny, jednotky a meranie',
    summary: 'Číslo a jednotka, sústava SI, predpony a prevody jednotiek.',
    theory: [
      `<p>Fyzikálna veličina je vlastnosť telesa alebo javu, ktorú vieme <strong>zmerať</strong> a vyjadriť číslom s jednotkou. Napríklad dĺžka $s = 12\\,\\text{m}$: číslo $12$ hovorí, koľkokrát sme použili jednotku, a $\\text{m}$ hovorí, akú jednotku sme použili. Údaj bez jednotky nemá význam.</p>`,
      `<p>Medzinárodná sústava SI má sedem základných jednotiek. Pre tento ročník stačia tieto: meter $\\text{m}$ (dĺžka), kilogram $\\text{kg}$ (hmotnosť), sekunda $\\text{s}$ (čas) a kelvin $\\text{K}$ (teplota). Odvodené jednotky vznikajú skladaním základných: rýchlosť má jednotku $\\text{m/s}$ a sila $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$.</p>`,
      `<p><strong>Predpony</strong> skracujú zápis veľkých a malých čísel. Platí napríklad $1\\,\\text{km}=10^3\\,\\text{m}$, $1\\,\\text{cm}=10^{-2}\\,\\text{m}$ a $1\\,\\text{g}=10^{-3}\\,\\text{kg}$. Pri prevode si stačí uvedomiť, koľkokrát je nová jednotka väčšia alebo menšia, a podľa toho násobiť alebo deliť.</p>`,
      `<p>Každé meranie má <strong>chybu</strong>, preto výsledok zapisujeme s primeraným počtom platných číslic a jednotku vždy uvedieme. Zápis $s = 12{,}0\\,\\text{m}$ hovorí viac než $s = 12\\,\\text{m}$, pretože naznačuje presnosť na desatiny metra.</p>`
    ],
    examples: [
      { task: 'Prevedie $3{,}5\\,\\text{km}$ na metre.',
        steps: ['Predpona k znamená tisíc, teda $1\\,\\text{km}=10^3\\,\\text{m}$.', '$3{,}5\\cdot 10^3\\,\\text{m}=3500\\,\\text{m}$.', '<strong>Výsledok: 3500 m</strong>'] },
      { task: 'Koľko sekúnd má $2\\,\\text{h}$?',
        steps: ['Hodina má $60\\,\\text{min}$ a minúta $60\\,\\text{s}$.', 'Jedna hodina má teda $60\\cdot 60=3600\\,\\text{s}$.', '$2\\,\\text{h}=2\\cdot 3600\\,\\text{s}=7200\\,\\text{s}$.', '<strong>Výsledok: 7200 s</strong>'] }
    ]
  });

  gen('s1-veliciny', () => {
    const t = Math.random();
    if (t < 0.4) {
      const a = rnd(2, 9);
      return {
        q: T`Prevedi $${a}\\,\\text{km}$ na metre.`,
        answer: a * 1000,
        solution: T`$1\\,\\text{km}=10^3\\,\\text{m}$, teda $${a}\\,\\text{km}=${a}\\cdot 10^3\\,\\text{m}=${a * 1000}\\,\\text{m}$.`,
        hint: T`Predpona k znamená tisíc. Jeden kilometer má 1000 metrov.`,
        mistakes: keep([
          { value: a * 100, msg: T`Násobil si číslom 100. Predpona k znamená tisíc, nie sto.` },
          { value: a / 1000, msg: T`Delil si tisíckou. Kilometer je väčšia jednotka než meter, takže metrov bude viac.` }
        ], a * 1000)
      };
    }
    if (t < 0.7) {
      const h = rnd(2, 6);
      return {
        q: T`Koľko sekúnd má $${h}\\,\\text{h}$?`,
        answer: h * 3600,
        solution: T`Hodina má $60\\,\\text{min}$ a minúta $60\\,\\text{s}$, teda $1\\,\\text{h}=3600\\,\\text{s}$. Preto $${h}\\,\\text{h}=${h * 3600}\\,\\text{s}$.`,
        hint: T`Najprv prepočítaj hodiny na minúty, potom minúty na sekundy.`,
        mistakes: keep([
          { value: h * 60, msg: T`To sú minúty. Na sekundy treba ešte raz násobiť číslom 60.` }
        ], h * 3600)
      };
    }
    const g = pick([250, 500, 750, 1250, 40, 80]);
    return {
      q: T`Koľko kilogramov je $${g}\\,\\text{g}$?`,
      answer: g / 1000,
      solution: T`$1\\,\\text{g}=10^{-3}\\,\\text{kg}$, teda $${g}\\,\\text{g}=${fmt(g / 1000)}\\,\\text{kg}$.`,
      hint: T`Gram je tisícina kilogramu, preto číslo delíme tisíckou.`,
      mistakes: keep([
        { value: g * 1000, msg: T`Násobil si tisíckou. Gram je menšia jednotka, kilogramov bude menej.` },
        { value: g / 100, msg: T`Delil si stotinou. Kilogram má 1000 gramov, nie 100.` }
      ], g / 1000)
    };
  });

  /* ---------- 2. rovnomerný a nerovnomerný pohyb ---------- */

  lesson({
    id: 's1-pohyb', order: 20, theme: 'pohyb',
    title: 'Rovnomerný a nerovnomerný pohyb',
    summary: 'Dráha, čas a rýchlosť; priemerná rýchlosť pri zmene pohybu.',
    theory: [
      `<p>Pohyb telesa opisujeme vzhľadom na nejaké <strong>vzťažné teleso</strong>. Dráha $s$ je dĺžka trajektórie, ktorú teleso prešlo, a čas $t$ je doba pohybu. <strong>Priemerná rýchlosť</strong> je podiel dráhy a času: $\\bar v=\\frac{s}{t}$, jednotka $\\text{m/s}$ alebo $\\text{km/h}$.</p>`,
      `<p><strong>Rovnomerný pohyb</strong> je pohyb s stálou rýchlosťou. Za rovnaké časy prejde teleso rovnaké dráhy, preto platí $s=v\\,t$. V grafe závislosti dráhy od času je to priamka.</p>`,
      `<p><strong>Nerovnomerný pohyb</strong> znamená, že sa rýchlosť mení. Priemerná rýchlosť celej cesty nie je aritmetický priemer rýchlostí, ale celková dráha delená celkovým časom: $\\bar v=\\frac{s_1+s_2}{t_1+t_2}$.</p>`,
      `<p><strong>Prečo to tak je?</strong> Ak ideme 2 hodiny rýchlosťou $60\\,\\text{km/h}$ a potom 1 hodinu rýchlosťou $30\\,\\text{km/h}$, prejdeme $120+30=150\\,\\text{km}$ za $3$ hodiny. Priemer rýchlostí by dal $45\\,\\text{km/h}$, ale skutočná priemerná rýchlosť je $50\\,\\text{km/h}$, lebo dlhšie sme išli rýchlejšie.</p>`
    ],
    examples: [
      { task: 'Auto prejde $120\\,\\text{km}$ za $2\\,\\text{h}$. Aká je jeho priemerná rýchlosť?',
        steps: ['$\\bar v=\\frac{s}{t}=\\frac{120\\,\\text{km}}{2\\,\\text{h}}$.', '<strong>Výsledok: 60 km/h</strong>'] },
      { task: 'Cyklista ide $2\\,\\text{h}$ rýchlosťou $20\\,\\text{km/h}$ a potom $2\\,\\text{h}$ rýchlosťou $10\\,\\text{km/h}$. Aká je jeho priemerná rýchlosť?',
        steps: ['Prvý úsek: $s_1=20\\cdot 2=40\\,\\text{km}$, druhý: $s_2=10\\cdot 2=20\\,\\text{km}$.', 'Celkovo $60\\,\\text{km}$ za $4\\,\\text{h}$.', '<strong>Výsledok: 15 km/h</strong>'] }
    ]
  });

  gen('s1-pohyb', () => {
    if (Math.random() < 0.6) {
      const v = rnd(4, 30), tm = rnd(2, 15), s = v * tm, k = rnd(0, 2);
      if (k === 0) {
        return {
          q: T`Teleso sa pohybuje rovnomerne rýchlosťou $${v}\\,\\text{m/s}$ po dobu $${tm}\\,\\text{s}$. Akú dráhu prejde? (v metroch)`,
          answer: s,
          solution: T`$s=v\\,t=${v}\\cdot ${tm}=${s}\\,\\text{m}$.`,
          hint: T`Pri rovnomernom pohybe je dráha súčinom rýchlosti a času.`,
          mistakes: keep([
            { value: v + tm, msg: T`Rýchlosť a čas si sčítal. Dráha vznikne ich násobením.` },
            { value: v / tm, msg: T`Delil si čas rýchlosťou. Dráha je súčin $s=v\\,t$.` }
          ], s)
        };
      }
      if (k === 1) {
        return {
          q: T`Teleso prejde rovnomerne dráhu $${s}\\,\\text{m}$ za $${tm}\\,\\text{s}$. Akou rýchlosťou sa pohybuje? (v m/s)`,
          answer: v,
          solution: T`$v=\\frac{s}{t}=\\frac{${s}}{${tm}}=${v}\\,\\text{m/s}$.`,
          hint: T`Rýchlosť je podiel dráhy a času.`,
          mistakes: keep([
            { value: s * tm, msg: T`Vynásobil si dráhu a čas. Rýchlosť dostaneš delením.` },
            { value: s - tm, msg: T`Odčítal si čas od dráhy. Rýchlosť je podiel, nie rozdiel.` }
          ], v)
        };
      }
      return {
        q: T`Rovnomerne sa pohybujúce teleso má rýchlosť $${v}\\,\\text{m/s}$ a prejde dráhu $${s}\\,\\text{m}$. Koľko sekúnd trvala cesta?`,
        answer: tm,
        solution: T`$t=\\frac{s}{v}=\\frac{${s}}{${v}}=${tm}\\,\\text{s}$.`,
        hint: T`Čas vyjadri zo vzťahu $s=v\\,t$ ako $t=\\frac{s}{v}$.`,
        mistakes: keep([
          { value: s * v, msg: T`Vynásobil si dráhu a rýchlosť. Čas je podiel dráhy a rýchlosti.` },
          { value: s - v, msg: T`Odčítal si rýchlosť od dráhy. Čas sa počíta delením.` }
        ], tm)
      };
    }
    // nerovnomerný pohyb: dva úseky s rôznou rýchlosťou
    const v1 = rnd(5, 25), v2 = rnd(5, 25), t1 = rnd(1, 6), t2 = rnd(1, 6);
    const s1 = v1 * t1, s2 = v2 * t2, avg = (s1 + s2) / (t1 + t2);
    return {
      q: T`Teleso sa najprv $${t1}\\,\\text{s}$ pohybovalo rýchlosťou $${v1}\\,\\text{m/s}$ a potom $${t2}\\,\\text{s}$ rýchlosťou $${v2}\\,\\text{m/s}$. Aká je jeho priemerná rýchlosť za celý čas? (zaokrúhli na 2 desatinné miesta)`,
      answer: avg, tol: 0.01,
      solution: T`$s_1=${v1}\\cdot ${t1}=${s1}\\,\\text{m}$, $s_2=${v2}\\cdot ${t2}=${s2}\\,\\text{m}$. Priemerná rýchlosť je $\\bar v=\\frac{s_1+s_2}{t_1+t_2}=\\frac{${s1 + s2}}{${t1 + t2}}\\approx ${fmt(avg)}\\,\\text{m/s}$.`,
      hint: T`Priemerná rýchlosť je celková dráha delená celkovým časom, nie priemer rýchlostí.`,
      mistakes: keep([
        { value: (v1 + v2) / 2, msg: T`Spriemeroval si rýchlosti. Priemerná rýchlosť sa počíta ako celková dráha delená celkovým časom.` }
      ], avg, 0.05)
    };
  });

  /* ---------- 3. rýchlosť a zrýchlenie ---------- */

  lesson({
    id: 's1-zrychlenie', order: 30, theme: 'pohyb',
    title: 'Rýchlosť a zrýchlenie',
    summary: 'Zmena rýchlosti za čas a rovnomerne zrýchlený pohyb.',
    theory: [
      `<p><strong>Zrýchlenie</strong> je zmena rýchlosti za jednotku času: $a=\\frac{\\Delta v}{\\Delta t}=\\frac{v-v_0}{t}$. Jednotka je $\\text{m/s}^2$. Ak rýchlosť rastie o $2\\,\\text{m/s}$ každú sekundu, zrýchlenie je $2\\,\\text{m/s}^2$.</p>`,
      `<p>Zrýchlenie nie je len zrýchľovanie. Kladné $a$ znamená, že rýchlosť rastie, záporné $a$ znamená brzdenie. Rovnako je zrýchlenie aj pri zmene smeru pohybu, aj keď veľkosť rýchlosti zostáva rovnaká, napríklad pri pohybe po kružnici.</p>`,
      `<p>Pri <strong>rovnomerne zrýchlenom pohybe</strong> rastie rýchlosť úmerne s časom: $v=v_0+a\\,t$. Priemerná rýchlosť je $\\frac{v_0+v}{2}$, preto dráha je $s=v_0\\,t+\\frac{1}{2}a\\,t^2$. Člen s $\\frac{1}{2}$ je dôležitý, lebo rýchlosť sa počas cesty neustále mení.</p>`,
      `<p>Pri voľnom páde pri povrchu Zeme smeruje zrýchlenie nadol a má veľkosť približne $g\\approx 9{,}81\\,\\text{m/s}^2$. Teleso padajúce z kľudu zvyšuje rýchlosť každú sekundu približne o $9{,}81\\,\\text{m/s}$.</p>`
    ],
    examples: [
      { task: 'Auto zrýchli z kľudu na $20\\,\\text{m/s}$ za $5\\,\\text{s}$. Aké je jeho zrýchlenie?',
        steps: ['$a=\\frac{v-v_0}{t}=\\frac{20-0}{5}$.', '<strong>Výsledok: 4 m/s²</strong>'] },
      { task: 'Teleso má rýchlosť $2\\,\\text{m/s}$ a zrýchlenie $3\\,\\text{m/s}^2$. Aká bude jeho rýchlosť po $4\\,\\text{s}$?',
        steps: ['$v=v_0+a\\,t=2+3\\cdot 4$.', '<strong>Výsledok: 14 m/s</strong>'] }
    ]
  });

  gen('s1-zrychlenie', () => {
    if (Math.random() < 0.5) {
      const v0 = rnd(0, 8), tm = rnd(2, 10), a = rnd(1, 6), v = v0 + a * tm;
      return {
        q: T`Teleso zmení rýchlosť z $${v0}\\,\\text{m/s}$ na $${v}\\,\\text{m/s}$ za $${tm}\\,\\text{s}$. Aké je jeho zrýchlenie v $\\text{m/s}^2$?`,
        answer: a,
        solution: T`$a=\\frac{v-v_0}{t}=\\frac{${v}-${v0}}{${tm}}=${a}\\,\\text{m/s}^2$.`,
        hint: T`Zrýchlenie je zmena rýchlosti za jednotku času. Od konečnej rýchlosti odčítaj počiatočnú.`,
        mistakes: keep([
          { value: v / tm, msg: T`Počítal si $\\frac{v}{t}$, ale zmena rýchlosti je $v-v_0$. Najprv odčítaj počiatočnú rýchlosť.` }
        ], a)
      };
    }
    const a = 2 * rnd(1, 4), tm = rnd(2, 6), v0 = rnd(0, 6), s = v0 * tm + (a / 2) * tm * tm;
    return {
      q: T`Teleso má na začiatku rýchlosť $${v0}\\,\\text{m/s}$ a rovnomerne zrýchľuje so zrýchlením $${a}\\,\\text{m/s}^2$. Akú dráhu prejde za $${tm}\\,\\text{s}$? (v metroch)`,
      answer: s,
      solution: T`$s=v_0\\,t+\\frac{1}{2}a\\,t^2=${v0}\\cdot ${tm}+\\frac{1}{2}\\cdot ${a}\\cdot ${tm}^2=${s}\\,\\text{m}$.`,
      hint: T`Pri rovnomerne zrýchlenom pohybe dráha nie je len $v_0\\,t$: pribudne člen $\\frac{1}{2}a\\,t^2$.`,
      mistakes: keep([
        { value: v0 * tm + a * tm * tm, msg: T`Zabudol si na $\\frac{1}{2}$ pri člene so zrýchlením.` },
        { value: v0 + a * tm, msg: T`To je rýchlosť po $t$ sekundách, nie dráha.` }
      ], s)
    };
  });

  /* ---------- 4. Newtonove zákony ---------- */

  lesson({
    id: 's1-newton', order: 40, theme: 'sily',
    title: 'Newtonove pohybové zákony',
    summary: 'Zotrvačnosť, vzťah F = m·a a princíp akcie a reakcie.',
    theory: [
      `<p><strong>Prvý Newtonov zákon (zotrvačnosti):</strong> teleso zostáva v kľude alebo v rovnomernom priamočiarom pohybe, pokiaľ naň nepôsobí sila, alebo ak je výslednica všetkých síl nulová. Preto sa pri náhlom brzdení autobusu pasažieri vychýlia dopredu: ich telo chce pokračovať v pohybe.</p>`,
      `<p><strong>Druhý Newtonov zákon:</strong> výsledná sila udeľuje telesu zrýchlenie, ktoré je priamo úmerné sile a nepriamo úmerné hmotnosti: $F=m\\,a$. Jednotka sily je newton, $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$. Pri rovnakej sile sa ťažšie teleso rozbieha pomalšie.</p>`,
      `<p><strong>Tretí Newtonov zákon (akcia a reakcia):</strong> ak teleso A pôsobí na teleso B silou, teleso B pôsobí na A silou rovnakej veľkosti a opačného smeru. Tieto sily pôsobia na <em>rôzne</em> telesá, preto sa nikdy neodčítavajú. Kôň ťahá voz a voz ťahá koňa späť.</p>`,
      `<p><strong>Výslednica</strong> viacerých síl na jednej priamke: sily v rovnakom smere sa sčítavajú, sily v opačných smeroch sa odčítavajú. Výsledné zrýchlenie má smer výslednice.</p>`
    ],
    examples: [
      { task: 'Teleso hmotnosti $4\\,\\text{kg}$ sa pohybuje so zrýchlením $3\\,\\text{m/s}^2$. Aká výsledná sila naň pôsobí?',
        steps: ['$F=m\\,a=4\\cdot 3$.', '<strong>Výsledok: 12 N</strong>'] },
      { task: 'Dve sily $7\\,\\text{N}$ a $3\\,\\text{N}$ pôsobia na teleso v opačných smeroch. Aká je ich výslednica?',
        steps: ['Sily majú opačný smer, preto sa odčítajú: $7-3=4$.', '<strong>Výsledok: 4 N v smere väčšej sily</strong>'] }
    ]
  });

  gen('s1-newton', () => {
    const r = Math.random();
    if (r < 0.4) {
      const m = rnd(2, 12), a = rnd(1, 9), F = m * a;
      return {
        q: T`Na teleso hmotnosti $${m}\\,\\text{kg}$ pôsobí výsledná sila a udeľuje mu zrýchlenie $${a}\\,\\text{m/s}^2$. Akú silu na teleso pôsobí? (v newtonoch)`,
        answer: F,
        solution: T`$F=m\\,a=${m}\\cdot ${a}=${F}\\,\\text{N}$.`,
        hint: T`Druhý Newtonov zákon: sila je súčin hmotnosti a zrýchlenia.`,
        mistakes: keep([
          { value: m + a, msg: T`Sčítal si hmotnosť a zrýchlenie. Vzťah je súčin $F=m\\,a$.` },
          { value: a / m, msg: T`Delil si. Sila je súčin hmotnosti a zrýchlenia.` }
        ], F)
      };
    }
    if (r < 0.7) {
      const m = rnd(2, 12), a = rnd(1, 9), F = m * a;
      return {
        q: T`Na teleso hmotnosti $${m}\\,\\text{kg}$ pôsobí výsledná sila $${F}\\,\\text{N}$. Aké zrýchlenie získa? (v $\\text{m/s}^2$)`,
        answer: a,
        solution: T`$a=\\frac{F}{m}=\\frac{${F}}{${m}}=${a}\\,\\text{m/s}^2$.`,
        hint: T`Zo vzťahu $F=m\\,a$ vyjadri zrýchlenie: $a=\\frac{F}{m}$.`,
        mistakes: keep([
          { value: F * m, msg: T`Vynásobil si silu hmotnosťou. Zrýchlenie dostaneš delením.` },
          { value: F - m, msg: T`Odčítal si hmotnosť od sily. Zrýchlenie je podiel sily a hmotnosti.` }
        ], a)
      };
    }
    const F1 = rnd(3, 20);
    let F2 = rnd(1, 20);
    if (F2 === F1) F2 += 1;
    return {
      q: T`Na teleso pôsobia v opačných smeroch dve sily: $${F1}\\,\\text{N}$ a $${F2}\\,\\text{N}$. Aká je veľkosť výslednej sily? (v newtonoch)`,
      answer: Math.abs(F1 - F2),
      solution: T`Sily majú opačný smer, preto sa odčítajú: $F=|${F1}-${F2}|=${Math.abs(F1 - F2)}\\,\\text{N}$.`,
      hint: T`Sily v opačných smeroch sa odčítavajú, v rovnakom smere sa sčítavajú.`,
      mistakes: keep([
        { value: F1 + F2, msg: T`Sily pôsobia opačne, preto ich nesčítavaj. Menšiu odčítaj od väčšej.` }
      ], Math.abs(F1 - F2))
    };
  });

  /* ---------- 5. gravitačná sila a tiaž ---------- */

  lesson({
    id: 's1-gravitacia', order: 50, theme: 'sily',
    title: 'Gravitačná sila a tiaž',
    summary: 'Hmotnosť a tiaž, tiažové zrýchlenie na Zemi a na Mesiaci.',
    theory: [
      `<p><strong>Gravitačná sila</strong> je príťažlivá sila medzi všetkými telesami. Čím sú telesá ťažšie a bližšie k sebe, tým je väčšia. Pri telesách na povrchu Zeme ju pozorujeme ako <strong>tiaž</strong>.</p>`,
      `<p><strong>Tiaž</strong> je sila, ktorou Zem priťahuje teleso: $F_g=m\\,g$, kde $g\\approx 9{,}81\\,\\text{m/s}^2$ je tiažové zrýchlenie. Hmotnosť $m$ v kilogramoch je vlastnosť telesa a nemení sa. Tiaž v newtonoch závisí od miesta: na Mesiaci, kde $g\\approx 1{,}62\\,\\text{m/s}^2$, je asi šesťkrát menšia.</p>`,
      `<p><strong>Prečo všetky telesa padajú rovnako rýchlo?</strong> Tiaž je úmerná hmotnosti, rovnako aj zotrvačnosť. Zrýchlenie $a=\\frac{F_g}{m}=g$ teda nezávisí od hmotnosti. Pri páde bez odporu vzduchu padajú kameň aj peľ rovnako rýchlo.</p>`,
      `<p>Nezamieňaj si pojmy: <strong>hmotnosť</strong> sa meria v kilogramoch a je to množstvo látky v telese, <strong>tiaž</strong> je sila a meria sa v newtonoch.</p>`
    ],
    examples: [
      { task: 'Aká je tiaž telesa hmotnosti $5\\,\\text{kg}$ na Zemi?',
        steps: ['$F_g=m\\,g=5\\cdot 9{,}81$.', '<strong>Výsledok: približne 49,1 N</strong>'] },
      { task: 'Aká je tiaž toho istého telesa na Mesiaci, kde $g\\approx 1{,}62\\,\\text{m/s}^2$? Aká je jeho hmotnosť?',
        steps: ['$F_g=5\\cdot 1{,}62=8{,}1\\,\\text{N}$.', 'Hmotnosť sa nemení, zostáva $5\\,\\text{kg}$.', '<strong>Výsledok: 8,1 N, hmotnosť 5 kg</strong>'] }
    ]
  });

  gen('s1-gravitacia', () => {
    if (Math.random() < 0.5) {
      const m = rnd(1, 20), F = m * 9.81;
      return {
        q: T`Aká je tiaž telesa hmotnosti $${m}\\,\\text{kg}$ na Zemi? Použi $g=9{,}81\\,\\text{m/s}^2$. (v newtonoch, zaokrúhli na 2 desatinné miesta)`,
        answer: F, tol: 0.01,
        solution: T`$F_g=m\\,g=${m}\\cdot 9{,}81=${fmt(F)}\\,\\text{N}$.`,
        hint: T`Tiaž je súčin hmotnosti a tiažového zrýchlenia.`,
        mistakes: keep([
          { value: m, msg: T`To je hmotnosť, nie tiaž. Hmotnosť je v kilogramoch, tiaž v newtonoch.` },
          { value: m / 9.81, msg: T`Delil si tiažovým zrýchlením. Tiaž dostaneš násobením.` }
        ], F, 0.05)
      };
    }
    const m = rnd(1, 20), F = m * 1.62;
    return {
      q: T`Teleso má na Zemi hmotnosť $${m}\\,\\text{kg}$. Aká je jeho tiaž na Mesiaci, kde $g\\approx 1{,}62\\,\\text{m/s}^2$? (v newtonoch, zaokrúhli na 2 desatinné miesta)`,
      answer: F, tol: 0.01,
      solution: T`Hmotnosť telesa sa nemení: $F_g=m\\,g=${m}\\cdot 1{,}62=${fmt(F)}\\,\\text{N}$.`,
      hint: T`Na Mesiaci je tiažové zrýchlenie menšie než na Zemi. Hmotnosť telesa zostáva rovnaká.`,
      mistakes: keep([
        { value: m * 9.81, msg: T`Použil si zrýchlenie Zeme. Na Mesiaci je tiažové zrýchlenie približne $1{,}62\\,\\text{m/s}^2$.` },
        { value: m, msg: T`To je hmotnosť, ktorá sa na Mesiaci nemení. Tiaž je sila v newtonoch.` }
      ], F, 0.05)
    };
  });

  /* ---------- 6. práca, výkon a energia ---------- */

  lesson({
    id: 's1-praca-energia', order: 60, theme: 'energia',
    title: 'Práca, výkon a energia',
    summary: 'Mechanická práca, výkon a kinetická energia telesa.',
    theory: [
      `<p><strong>Mechanická práca</strong> je energia prenesená silou pri posunutí telesa. Ak má sila smer pohybu, počíta sa $W=F\\,s$. Jednotka je joule, $1\\,\\text{J}=1\\,\\text{N}\\cdot\\text{m}$. Rovnakú prácu môžeme vykonať veľkou silou na krátkej dráhe alebo malou silou na dlhej dráhe.</p>`,
      `<p><strong>Výkon</strong> hovorí, ako rýchlo sa práca koná: $P=\\frac{W}{t}$. Jednotka je watt, $1\\,\\text{W}=1\\,\\text{J/s}$. Dva motory môžu vykonať rovnakú prácu, ale ten s väčším výkonom to urobí za kratší čas.</p>`,
      `<p><strong>Kinetická energia</strong> je energia pohybu: $E_k=\\frac{1}{2}m\\,v^2$. Závisí od druhej mocniny rýchlosti, preto dvojnásobná rýchlosť znamená štvornásobnú energiu. Preto je brzdná dráha auta pri vyššej rýchlosti výrazne dlhšia.</p>`,
      `<p>Práca a energia sú spojené: práca vykonaná na teleso sa mení na zmenu jeho energie. Ak je $W$ kladná, energia telesa rastie.</p>`
    ],
    examples: [
      { task: 'Sila $50\\,\\text{N}$ posunie vozík o $4\\,\\text{m}$ v smere sily. Akú prácu vykoná?',
        steps: ['$W=F\\,s=50\\cdot 4$.', '<strong>Výsledok: 200 J</strong>'] },
      { task: 'Teleso hmotnosti $2\\,\\text{kg}$ sa pohybuje rýchlosťou $3\\,\\text{m/s}$. Aká je jeho kinetická energia?',
        steps: ['$E_k=\\frac{1}{2}\\cdot 2\\cdot 3^2=9$.', '<strong>Výsledok: 9 J</strong>'] }
    ]
  });

  gen('s1-praca-energia', () => {
    const r = Math.random();
    if (r < 0.35) {
      const F = rnd(5, 40), s = rnd(2, 20);
      return {
        q: T`Sila $${F}\\,\\text{N}$ posunie teleso v smere pôsobenia sily o $${s}\\,\\text{m}$. Akú prácu sila vykoná? (v joulov)`,
        answer: F * s,
        solution: T`$W=F\\,s=${F}\\cdot ${s}=${F * s}\\,\\text{J}$.`,
        hint: T`Práca v smere sily je súčin sily a dráhy.`,
        mistakes: keep([
          { value: F + s, msg: T`Sčítal si silu a dráhu. Práca je ich súčin $W=F\\,s$.` },
          { value: F / s, msg: T`Delil si dráhou. Práca je súčin sily a dráhy.` }
        ], F * s)
      };
    }
    if (r < 0.65) {
      const P = rnd(5, 60), tm = rnd(2, 12), W = P * tm;
      return {
        q: T`Motor vykonal prácu $${W}\\,\\text{J}$ za $${tm}\\,\\text{s}$. Aký bol jeho výkon? (vo wattoch)`,
        answer: P,
        solution: T`$P=\\frac{W}{t}=\\frac{${W}}{${tm}}=${P}\\,\\text{W}$.`,
        hint: T`Výkon je práca vykonaná za jednotku času: $P=\\frac{W}{t}$.`,
        mistakes: keep([
          { value: W * tm, msg: T`Vynásobil si prácu časom. Výkon je podiel práce a času.` },
          { value: W - tm, msg: T`Odčítal si čas od práce. Výkon je podiel, nie rozdiel.` }
        ], P)
      };
    }
    const m = 2 * rnd(1, 10), v = rnd(2, 12), Ek = (m / 2) * v * v;
    return {
      q: T`Teleso hmotnosti $${m}\\,\\text{kg}$ sa pohybuje rýchlosťou $${v}\\,\\text{m/s}$. Aká je jeho kinetická energia? (v joulov)`,
      answer: Ek,
      solution: T`$E_k=\\frac{1}{2}m\\,v^2=\\frac{1}{2}\\cdot ${m}\\cdot ${v}^2=${Ek}\\,\\text{J}$.`,
      hint: T`Kinetická energia závisí od druhej mocniny rýchlosti: $E_k=\\frac{1}{2}m\\,v^2$.`,
      mistakes: keep([
        { value: m * v * v, msg: T`Zabudol si na $\\frac{1}{2}$. Vzorec pre kinetickú energiu obsahuje polovicu súčinu $m\\,v^2$.` },
        { value: m * v, msg: T`To je hybnosť $p=m\\,v$, nie energia.` }
      ], Ek)
    };
  });

  /* ---------- 7. zákony zachovania ---------- */

  lesson({
    id: 's1-zakony-zachovania', order: 70, theme: 'energia',
    title: 'Zákony zachovania energie a hybnosti',
    summary: 'Hybnosť telesa a premeny polohovej energie na pohybovú.',
    theory: [
      `<p><strong>Hybnosť</strong> telesa je súčin jeho hmotnosti a rýchlosti: $p=m\\,v$, jednotka $\\text{kg\\,m/s}$. Hybnosť je vektor, takže má smer rýchlosti. Ťažšie teleso rovnakej rýchlosti má väčšiu hybnosť, preto je ťažšie ho zastaviť.</p>`,
      `<p><strong>Zákon zachovania hybnosti:</strong> ak na sústavu nepôsobia vonkajšie sily, súčet hybností telies v nej sa nemení. Dvaja korčuliari, ktorí sa odtlačia od seba, sa pohybujú opačným smerom. Ľahší korčuliar dostane väčšiu rýchlosť, pretože súčet ich hybností musí zostať nulový.</p>`,
      `<p><strong>Zákon zachovania mechanickej energie:</strong> ak nepôsobí trenie ani odpor prostredia, súčet kinetickej a polohovej energie $E_k+E_p$ sa nemení. Pri voľnom páde sa polohová energia $E_p=m\\,g\\,h$ mení na kinetickú energiu $\\frac{1}{2}m\\,v^2$. Odtiaľ $v=\\sqrt{2gh}$: rýchlosť nezávisí od hmotnosti.</p>`,
      `<p>V skutočnosti trenie a odpor vzduchu časť mechanickej energie premieňajú na teplo. Mechanická energia potom klesá, ale celková energia sústavy zostáva zachovaná.</p>`
    ],
    examples: [
      { task: 'Guľka hmotnosti $0{,}01\\,\\text{kg}$ letí rýchlosťou $500\\,\\text{m/s}$. Aká je jej hybnosť?',
        steps: ['$p=m\\,v=0{,}01\\cdot 500$.', '<strong>Výsledok: 5 kg·m/s</strong>'] },
      { task: 'Teleso padá z kľudu z výšky $5\\,\\text{m}$ bez odporu vzduchu. Akou rýchlosťou dopadne? Použi $g=10\\,\\text{m/s}^2$.',
        steps: ['$m\\,g\\,h=\\frac{1}{2}m\\,v^2$, teda $v^2=2gh=2\\cdot 10\\cdot 5=100$.', '<strong>Výsledok: v = 10 m/s</strong>'] }
    ]
  });

  gen('s1-zakony-zachovania', () => {
    const r = Math.random();
    if (r < 0.4) {
      const m = rnd(2, 20), v = rnd(2, 15), p = m * v;
      return {
        q: T`Teleso hmotnosti $${m}\\,\\text{kg}$ sa pohybuje rýchlosťou $${v}\\,\\text{m/s}$. Aká je jeho hybnosť? (v $\\text{kg\\,m/s}$)`,
        answer: p,
        solution: T`$p=m\\,v=${m}\\cdot ${v}=${p}\\,\\text{kg\\,m/s}$.`,
        hint: T`Hybnosť je súčin hmotnosti a rýchlosti: $p=m\\,v$.`,
        mistakes: keep([
          { value: m + v, msg: T`Sčítal si hmotnosť a rýchlosť. Hybnosť je ich súčin.` },
          { value: m * v * v / 2, msg: T`To je kinetická energia $\\frac{1}{2}m\\,v^2$, nie hybnosť.` }
        ], p)
      };
    }
    if (r < 0.7) {
      const m1 = rnd(1, 10), v1 = rnd(2, 10), m2 = rnd(1, 10), v2 = rnd(1, 10), p = m1 * v1 - m2 * v2;
      return {
        q: T`Teleso hmotnosti $${m1}\\,\\text{kg}$ sa pohybuje rýchlosťou $${v1}\\,\\text{m/s}$ doprava, teleso hmotnosti $${m2}\\,\\text{kg}$ rýchlosťou $${v2}\\,\\text{m/s}$ doľava. Aká je celková hybnosť sústavy? Kladný smer je doprava. (v $\\text{kg\\,m/s}$)`,
        answer: p, signed: true,
        solution: T`$p=m_1v_1-m_2v_2=${m1 * v1}-${m2 * v2}=${p}\\,\\text{kg\\,m/s}$.`,
        hint: T`Hybnosti majú opačné smery, preto sa odčítajú. Kladný smer zvoľ doprava.`,
        mistakes: keep([
          { value: m1 * v1 + m2 * v2, msg: T`Hybnosti majú opačné smery, takže sa odčítajú, nesčítajú.` }
        ], p)
      };
    }
    const k = rnd(1, 4), h = 5 * k * k, v = 10 * k;
    return {
      q: T`Teleso padá z kľudu z výšky $${h}\\,\\text{m}$ bez odporu vzduchu. Akou rýchlosťou dopadne na zem? Použi $g=10\\,\\text{m/s}^2$. (v m/s)`,
      answer: v,
      solution: T`Polohová energia sa pri páde premení na pohybovú: $m\\,g\\,h=\\frac{1}{2}m\\,v^2$, teda $v=\\sqrt{2gh}=\\sqrt{2\\cdot 10\\cdot ${h}}=\\sqrt{${v * v}}=${v}\\,\\text{m/s}$.`,
      hint: T`Zo zákona zachovania energie vyjadri $v$ z rovnosti $m\\,g\\,h=\\frac{1}{2}m\\,v^2$. Hmotnosť sa vykráti.`,
      mistakes: keep([
        { value: 2 * 10 * h, msg: T`To je $v^2$, nie $v$. Na konci ešte odmocni.` }
      ], v)
    };
  });

  /* ---------- 8. tlak ---------- */

  lesson({
    id: 's1-tlak', order: 80, theme: 'tekutiny',
    title: 'Tlak, vlastnosti kvapalín a plynov',
    summary: 'Tlak pevných telies, hydrostatický tlak a Pascalov zákon.',
    theory: [
      `<p><strong>Tlak</strong> je podiel sily kolmej na plochu a obsahu tejto plochy: $p=\\frac{F}{S}$. Jednotka je pascal, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Ostrým hrotom tlačíme silnejšie, lebo tá istá sila pôsobí na menšiu plochu.</p>`,
      `<p><strong>Hydrostatický tlak</strong> v kvapaline rastie s hĺbkou: $p=\\rho\\,g\\,h$, kde $\\rho$ je hustota kvapaliny (voda $1000\\,\\text{kg/m}^3$) a $h$ hĺbka pod hladinou. Tento tlak nezávisí od tvaru nádoby, iba od hĺbky a hustoty.</p>`,
      `<p><strong>Pascalov zákon:</strong> tlak vyvolaný na uzavretú kvapalinu sa prenáša nezmenený do všetkých miest kvapaliny. Preto hydraulický lis dokáže zdvihnúť auto: malou silou na malý piest vytvoríme tlak, ktorý pôsobí na veľký piest s väčšou silou.</p>`,
      `<p><strong>Plyny</strong> vyvíjajú tlak nárazmi molekúl na steny nádoby. Atmosférický tlak na hladine mora je približne $101\\,325\\,\\text{Pa}\\approx 100\\,\\text{kPa}$ a s rastúcou nadmorskou výškou klesá.</p>`
    ],
    examples: [
      { task: 'Kváder s tiažou $600\\,\\text{N}$ stojí na podlahe s plochou $0{,}5\\,\\text{m}^2$. Aký tlak vyvoláva?',
        steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$.', '<strong>Výsledok: 1200 Pa</strong>'] },
      { task: 'Aký je hydrostatický tlak vody v hĺbke $3\\,\\text{m}$? Použi $\\rho=1000\\,\\text{kg/m}^3$ a $g=10\\,\\text{m/s}^2$.',
        steps: ['$p=\\rho\\,g\\,h=1000\\cdot 10\\cdot 3=30000\\,\\text{Pa}$.', '<strong>Výsledok: 30 kPa</strong>'] }
    ]
  });

  gen('s1-tlak', () => {
    const r = Math.random();
    if (r < 0.4) {
      const S = rnd(2, 8), P = rnd(50, 500), F = S * P;
      return {
        q: T`Na plochu $${S}\\,\\text{m}^2$ kolmo pôsobí sila $${F}\\,\\text{N}$. Aký tlak vyvoláva? (v pascaloch)`,
        answer: P,
        solution: T`$p=\\frac{F}{S}=\\frac{${F}}{${S}}=${P}\\,\\text{Pa}$.`,
        hint: T`Tlak je podiel sily kolmej na plochu a obsahu tejto plochy.`,
        mistakes: keep([
          { value: F * S, msg: T`Vynásobil si silu a plochu. Tlak je podiel sily a plochy.` },
          { value: S / F, msg: T`Obrátil si podiel. Tlak je sila delená plochou.` }
        ], P)
      };
    }
    if (r < 0.75) {
      const h = rnd(1, 20);
      return {
        q: T`Aký je hydrostatický tlak vody v hĺbke $${h}\\,\\text{m}$ pod hladinou? Hustota vody je $1000\\,\\text{kg/m}^3$, $g=10\\,\\text{m/s}^2$. (v kilopascaloch)`,
        answer: 10 * h,
        solution: T`$p=\\rho\\,g\\,h=1000\\cdot 10\\cdot ${h}=${10000 * h}\\,\\text{Pa}=${10 * h}\\,\\text{kPa}$.`,
        hint: T`Hydrostatický tlak je $p=\\rho\\,g\\,h$. Pozor na jednotky: výsledok vyjde v pascaloch.`,
        mistakes: keep([
          { value: 10000 * h, msg: T`Výsledok si dostal v pascaloch. Úloha žiada kilopascaly, vydeľ tisíckou.` },
          { value: h, msg: T`Zabudol si na hustotu a tiažové zrýchlenie. Tlak nie je len hĺbka.` }
        ], 10 * h)
      };
    }
    const S1 = rnd(2, 9), k = rnd(2, 6), F1 = rnd(10, 50);
    return {
      q: T`Hydraulický lis: na malý piest s plochou $${S1}\\,\\text{cm}^2$ pôsobí sila $${F1}\\,\\text{N}$. Veľký piest má plochu $${S1 * k}\\,\\text{cm}^2$. Akú silu prenesie veľký piest? (v newtonoch)`,
      answer: F1 * k,
      solution: T`Tlak sa v kvapaline prenesie do oboch piestov: $\\frac{F_1}{S_1}=\\frac{F_2}{S_2}$, teda $F_2=F_1\\cdot\\frac{S_2}{S_1}=${F1}\\cdot ${k}=${F1 * k}\\,\\text{N}$.`,
      hint: T`Pascalov zákon: tlak sa prenesie nezmenený. Pomer síl sa rovná pomeru plôch.`,
      mistakes: keep([
        { value: F1, msg: T`Sila sa nezmení len preto, že je piest väčší. Pascalov zákon hovorí, že tlak je v oboch piestoch rovnaký.` },
        { value: F1 / k, msg: T`Delil si pomerom plôch. Väčší piest dáva väčšiu silu, preto treba násobiť.` }
      ], F1 * k)
    };
  });
})();
