(function () {
  'use strict';

  const { rnd, pick, shuffle, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v7' }, l));
  const gen = EXERCISES.register;
  // desatinné číslo v matematike (čiarka sa v $...$ zapisuje ako {,})
  const mn = (x) => fmt(x).replace(',', '{,}');
  // typické chyby, ktoré sa rovnajú správnej odpovedi, vynecháme
  const dropAns = (list, ans) => list.filter((m) => m.value !== ans);

  /* ---------- 1. Štruktúra atómu ---------- */

  lesson({
    id: 'v7-atom', order: 10, theme: 'moderna', title: 'Štruktúra atómu a elektrónový obal',
    summary: 'Jadro, obal a rozloženie elektrónov do slupiek a ich kapacita.',
    theory: [
      `<p>Atóm má <strong>jadro</strong> tvorené protónmi a neutrónmi (spoločne nukleóny) a <strong>elektrónový obal</strong>. Počet protónov je protónové číslo $Z$ a určuje chemický prvok. Neutrálny atóm má rovnako veľa elektrónov.</p>`,
      `<p>Elektróny nie sú rozmiestnené ľubovoľne. Zdržiavajú sa v <strong>slupkách</strong> s číslom $n = 1, 2, 3, \\dots$ (označenia K, L, M). Slupka s číslom $n$ pojme najviac $2n^2$ elektrónov: K pojme 2, L pojme 8, M pojme 18.</p>`,
      `<p><strong>Prečo práve toľko?</strong> Elektróny opisuje kvantová mechanika. Každý stav elektrónu je určený súborom kvantových čísel a Pauliho princíp zakazuje, aby dva elektróny v atóme mali rovnaký stav. Slupky sa plnia zdola nahor a vonkajšia (valenčná) slupka určuje chemické vlastnosti prvku.</p>`,
      `<ol><li>Z periodickej tabuľky zisti $Z$, a tým aj počet elektrónov.</li><li>Rozdeľ ich do slupiek: najprv K, potom L, potom M.</li><li>Posledná obsadená slupka je valenčná.</li></ol>`
    ],
    examples: [
      { task: 'Koľko elektrónov najviac pojme slupka L (číslo $n = 2$)?',
        steps: ['Dosadíme $n = 2$ do vzorca $2n^2$.', '$2\\cdot 2^2 = 8$.', '<strong>Výsledok: 8 elektrónov</strong>'] },
      { task: 'Uhlík má $Z = 6$. Koľko elektrónov je v jeho K a L slupke?',
        steps: ['Slupka K pojme 2 elektróny.', 'Zvyšné $6 - 2 = 4$ elektróny idú do slupky L.', '<strong>Výsledok: 2 v K a 4 v L</strong>'] }
    ]
  });

  gen('v7-atom', () => {
    const n = rnd(1, 4), SL = ['K', 'L', 'M', 'N'], ans = 2 * n * n;
    return {
      q: T`Koľko elektrónov najviac pojme slupka ${SL[n - 1]}, teda slupka s číslom $n=${n}$?`,
      answer: ans,
      mistakes: dropAns([
        { value: n * n, msg: T`Zabudol si na dvojku vo vzorci. Kapacita je $2n^2$, nie $n^2$.` },
        { value: 2 * n, msg: T`To je dvojnásobok čísla $n$. Hodnotu $n$ treba umocniť na druhú.` }
      ], ans),
      solution: T`Kapacita slupky je $2n^2 = 2\\cdot ${n}^2 = ${ans}$ elektrónov.`,
      hint: T`Kapacita slupky s číslom $n$ je $2n^2$.`
    };
  });

  /* ---------- 2. Atómové spektrá ---------- */

  lesson({
    id: 'v7-spektra', order: 20, theme: 'moderna', title: 'Atómové spektrá a energetické hladiny',
    summary: 'Prechody elektrónov medzi hladinami a energia vyžiarených fotónov.',
    theory: [
      `<p>Atóm môže mať len isté <strong>energetické hladiny</strong>. Elektrón pri prechode z vyššej hladiny na nižšiu vyžiari <strong>fotón</strong> s energiou rovnou rozdielu hladín. Naopak, fotón správnej energie môže elektrón vybudiť na vyššiu hladinu.</p>`,
      `<p>Energia fotónu je $E = h f = \\dfrac{h c}{\\lambda}$, kde $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$ je Planckova konštanta. V atómovej fyzike sa energia udáva v elektrónvoltoch: $1\\,\\text{eV} = 1{,}6\\cdot 10^{-19}\\,\\text{J}$.</p>`,
      `<p>Pre vodíkový atóm platí $E_n = -\\dfrac{13{,}6}{n^2}\\,\\text{eV}$. Základný stav ($n = 1$) je najnižší a hladiny sa k nule približujú zhora. Pri prechode z $n_i$ na $n_f$ vznikne fotón s energiou $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}\\right)$.</p>`,
      `<p><strong>Prečo sú spektrá čiarové?</strong> Hladiny sú diskrétne, takže fotóny majú len niekoľko presných energií. Na spektrograme preto vidíme ostré čiary, nie spojitú dúhu. Každý prvok má vlastnú sadu čiar, a preto je spektrum jeho „odtlačkom“.</p>`
    ],
    examples: [
      { task: 'Elektrón v atóme vodíka prejde z hladiny $n=3$ na $n=2$. Akú energiu má vyžiarený fotón?',
        steps: ['Rozdiel hladín: $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{2^2}-\\dfrac{1}{3^2}\\right)$.', '$\\dfrac{1}{4}-\\dfrac{1}{9}=\\dfrac{5}{36}$, teda $\\Delta E = 13{,}6\\cdot\\dfrac{5}{36}\\approx 1{,}89\\,\\text{eV}$.', '<strong>Výsledok: približne 1,89 eV</strong>'] },
      { task: 'Ktorý prechod vyžiari fotón s väčšou energiou: $2\\to 1$, alebo $3\\to 2$?',
        steps: ['Prechod $2\\to 1$: $13{,}6\\cdot\\left(1-\\dfrac{1}{4}\\right)=10{,}2\\,\\text{eV}$.', 'Prechod $3\\to 2$ dáva približne $1{,}89\\,\\text{eV}$.', '<strong>Výsledok: prechod $2\\to 1$</strong>'] }
    ]
  });

  gen('v7-spektra', () => {
    const [ni, nf] = pick([[2, 1], [3, 1], [3, 2], [4, 2], [5, 2]]);
    const ans = Math.round(13.6 * (1 / (nf * nf) - 1 / (ni * ni)) * 100) / 100;
    const wrong = Math.round(13.6 * (1 / nf - 1 / ni) * 100) / 100;
    return {
      q: T`Elektrón v atóme vodíka prejde z hladiny $n=${ni}$ na hladinu $n=${nf}$. Akú energiu v elektrónvoltoch má vyžiarený fotón? Zaokrúhli na 2 desatinné miesta.`,
      answer: ans,
      tol: 0.01,
      mistakes: dropAns([
        { value: wrong, msg: T`Zabudol si na druhé mocniny čísel $n$. Správny tvar je $\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}$.` }
      ], ans),
      solution: T`$\\Delta E = 13{,}6\\cdot\\left(\\dfrac{1}{${nf}^2}-\\dfrac{1}{${ni}^2}\\right)\\approx ${mn(ans)}\\,\\text{eV}$.`,
      hint: T`Energia fotónu sa rovná rozdielu energií hladín. Pre vodík platí $E_n=-\\dfrac{13{,}6}{n^2}\\,\\text{eV}$.`
    };
  });

  /* ---------- 3. Atómové jadro ---------- */

  lesson({
    id: 'v7-jadro', order: 30, theme: 'moderna', title: 'Štruktúra atómového jadra',
    summary: 'Protóny, neutróny, zápis nuklidu, izotopy a veľkosť jadra.',
    theory: [
      `<p>Jadro tvoria protóny (náboj $+e$) a neutróny (bez náboja). Spoločne sa nazývajú nukleóny. Nuklid zapisujeme ako $^{A}_{Z}\\mathrm{X}$: $A$ je nukleónové číslo, $Z$ protónové číslo a počet neutrónov je $N = A - Z$.</p>`,
      `<p>Polomer jadra rastie približne s treťou odmocninou nukleónového čísla: $r \\approx 1{,}2\\cdot 10^{-15}\\,\\text{m}\\cdot A^{1/3}$. Jadrá sú teda veľmi malé (rádovo femtometre), ale majú takmer rovnakú hustotu.</p>`,
      `<p><strong>Prečo sa jadro nerozletí?</strong> Protóny sa elektricky odpudzujú, no pôsobí silná jadrová interakcia. Je to krátkodosahová príťažlivá sila, ktorá je silnejšia než elektrické odpudzovanie. Stabilné ťažšie jadrá majú viac neutrónov než protónov (napr. $^{208}_{82}\\mathrm{Pb}$).</p>`,
      `<ul><li><strong>Izotopy</strong> majú rovnaké $Z$, ale rôzne $N$ (napr. $^{12}_{6}\\mathrm{C}$ a $^{14}_{6}\\mathrm{C}$).</li><li><strong>Izobary</strong> majú rovnaké $A$, ale rôzne $Z$.</li></ul>`
    ],
    examples: [
      { task: 'Koľko protónov a neutrónov má jadro $^{238}_{92}\\mathrm{U}$?',
        steps: ['Protónové číslo je $Z=92$.', '$N = A - Z = 238 - 92 = 146$.', '<strong>Výsledok: 92 protónov a 146 neutrónov</strong>'] },
      { task: 'Ako sa zmení polomer jadra, ak sa jeho nukleónové číslo zväčší osemkrát?',
        steps: ['$r \\propto A^{1/3}$, teda $r$ sa mení ako $\\sqrt[3]{A}$.', '$\\sqrt[3]{8}=2$, polomer sa zdvojnásobí.', '<strong>Výsledok: polomer sa zdvojnásobí</strong>'] }
    ]
  });

  gen('v7-jadro', () => {
    const NUC = [['C', 6, 12], ['O', 8, 16], ['Ne', 10, 20], ['Na', 11, 23], ['Ca', 20, 40],
      ['Fe', 26, 56], ['Cl', 17, 35], ['He', 2, 4], ['Pb', 82, 208], ['U', 92, 238]];
    const [sym, Z, A] = pick(NUC);
    const isN = Math.random() < 0.5;
    const ans = isN ? A - Z : Z;
    return {
      q: T`Koľko ${isN ? T`neutrónov` : T`protónov`} má jadro $^{${A}}_{${Z}}\\mathrm{${sym}}$?`,
      answer: ans,
      mistakes: dropAns(isN ? [
        { value: Z, msg: T`To je počet protónov, nie neutrónov. Neutróny dostaneš odčítaním $N = A - Z$.` },
        { value: A, msg: T`To je nukleónové číslo $A$ (všetky nukleóny). Od neho odčítaj protónové číslo $Z$.` }
      ] : [
        { value: A - Z, msg: T`To je počet neutrónov. Protóny určuje dolný index $Z$.` },
        { value: A, msg: T`To je horný index $A$, počet všetkých nukleónov. Protóny určuje dolný index $Z$.` }
      ], ans),
      solution: isN
        ? T`Počet neutrónov je $N = A - Z = ${A} - ${Z} = ${ans}$.`
        : T`Počet protónov je protónové číslo $Z = ${ans}$, čo je dolný index.`,
      hint: T`Horný index je $A$ (nukleóny), dolný index $Z$ (protóny). Neutróny: $N = A - Z$.`
    };
  });

  /* ---------- 4. Rádioaktivita ---------- */

  lesson({
    id: 'v7-radioaktivita', order: 40, theme: 'moderna', title: 'Rádioaktivita a jadrové premeny',
    summary: 'Typy rozpadov, zákon rozpadu, polčas a aktivita.',
    theory: [
      `<p>Nestabilné jadrá sa samovoľne premieňajú. Pri <strong>alfa</strong> rozpade vyletí jadro hélia $^{4}_{2}\\mathrm{He}$. Pri <strong>beta-mínus</strong> sa neutrón mení na protón a vzniká elektrón a antineutríno. Pri <strong>gama</strong> žiarení jadro len zbavuje prebytočnej energie, $Z$ ani $A$ sa nemení. Pri každej premene platí zachovanie nukleónového a protónového čísla.</p>`,
      `<p>Rozpad jedného jadra je náhodný dej, ale pre veľký počet jadier platí zákon rozpadu $N(t) = N_0\\cdot 2^{-t/T}$. Čas $T$ je <em>polčas rozpadu</em>, za ktorý sa rozpadne polovica jadier. Zákon vzniká z predpokladu, že pravdepodobnosť rozpadu za krátky čas $dt$ je úmerná počtu jadier: $\\dfrac{dN}{dt}=-\\lambda N$.</p>`,
      `<p><strong>Aktivita</strong> $A = \\lambda N$ udáva počet rozpadov za sekundu. Jednotka je becquerel, $1\\,\\text{Bq} = 1\\,\\text{s}^{-1}$. Konštanta rozpadu je $\\lambda = \\dfrac{\\ln 2}{T}$.</p>`,
      `<ol><li>Vypočítaj počet polčasov $k = t/T$.</li><li>Počet jadier vydeľ $2^{k}$, nie len dvojkou.</li></ol>`
    ],
    examples: [
      { task: 'Rádioizotop má polčas 8 dní. Koľko percent jadier ostane po 24 dňoch?',
        steps: ['Počet polčasov je $k = 24/8 = 3$.', '$N = N_0\\cdot 2^{-3} = \\dfrac{N_0}{8}$, teda zostáva 12,5 %.', '<strong>Výsledok: 12,5 %</strong>'] },
      { task: 'Vzorka má $4\\cdot 10^{6}$ jadier a polčas 2 h. Koľko jadier ostane po 6 h?',
        steps: ['Za 6 h prejdú $k = 6/2 = 3$ polčasy.', '$N = \\dfrac{4\\cdot 10^{6}}{2^{3}} = 5\\cdot 10^{5}$.', '<strong>Výsledok: 500 000 jadier</strong>'] }
    ]
  });

  gen('v7-radioaktivita', () => {
    const k = rnd(1, 4), Tt = pick([2, 5, 8, 12]), m = rnd(3, 40), N0 = m * Math.pow(2, k), ans = m;
    return {
      q: T`Vzorka obsahuje $${N0}$ jadier rádioizotopu s polčasom rozpadu $T=${Tt}\\,\\text{h}$. Koľko jadier v nej ostane po $${k * Tt}\\,\\text{h}$?`,
      answer: ans,
      mistakes: dropAns([
        ...(k > 1 ? [{ value: N0 / 2, msg: T`Započítal si len jeden polčas. Počet polčasov je $k=${k}$.` }] : []),
        ...(Number.isInteger(N0 / (2 * k)) ? [{ value: N0 / (2 * k), msg: T`Počet jadier si zmenšil lineárne. Každý polčas znamená delenie dvomi, pri $k$ polčasoch ide o $2^{k}$.` }] : [])
      ], ans),
      solution: T`Počet polčasov je $k = \\dfrac{${k * Tt}}{${Tt}} = ${k}$, teda $N = \\dfrac{${N0}}{2^{${k}}} = ${ans}$.`,
      hint: T`Najprv zisti, koľko polčasov uplynulo ($k=t/T$), a počiatočný počet vydeľ $2^{k}$.`
    };
  });

  /* ---------- 5. Štiepenie a fúzia ---------- */

  lesson({
    id: 'v7-stiepenie-fuzia', order: 50, theme: 'moderna', title: 'Jadrové štiepenie a fúzia',
    summary: 'Hmotnostný úbytok, väzbová energia a energia uvoľnená štiepením či zlučovaním.',
    theory: [
      `<p>Jadro má menšiu hmotnosť než súčet hmotností svojich nukleónov. Tento rozdiel je <em>hmotnostný úbytok</em> $\\Delta m$. Podľa vzťahu $E = \\Delta m\\, c^2$ sa zodpovedajúca energia uvoľní. Pre praktické výpočty platí $1\\,\\text{u}\\cdot c^2 \\approx 931{,}5\\,\\text{MeV}$.</p>`,
      `<p>Najväčšiu väzbovú energiu na nukleón majú jadrá okolo železa ($A\\approx 56$). Preto sa ťažké jadrá môžu <strong>štiepiť</strong> na stredne ťažké a ľahké jadrá sa môžu <strong>zlučovať</strong> (fúzia). Obe cesty smerujú k väčšej väzbovej energii a uvoľňujú energiu.</p>`,
      `<p>Pri štiepení $^{235}_{92}\\mathrm{U}$ neutrónom vzniknú dva fragmenty, 2 až 3 neutróny a približne 200 MeV energie. Tieto neutróny môžu vyvolať reťazovú reakciu, ktorú treba v reaktore regulovať.</p>`,
      `<p>Fúzia vyžaduje extrémne vysokú teplotu, aby sa kladne nabité jadrá priblížili na dosah silnej interakcie. Pri reakcii $^{2}_{1}\\mathrm{H}+{}^{3}_{1}\\mathrm{H}\\to{}^{4}_{2}\\mathrm{He}+n$ sa uvoľní približne 17,6 MeV.</p>`
    ],
    examples: [
      { task: 'Pri jadrovej reakcii vznikne hmotnostný úbytok $\\Delta m = 0{,}2\\,\\text{u}$. Akú energiu to je?',
        steps: ['$E=\\Delta m\\cdot 931{,}5\\,\\text{MeV}$.', '$E=0{,}2\\cdot 931{,}5=186{,}3\\,\\text{MeV}$.', '<strong>Výsledok: 186,3 MeV</strong>'] },
      { task: 'Prečo je fúzia na Zemi náročnejšia než štiepenie?',
        steps: ['Jadrá sú kladne nabité a odpudzujú sa.', 'Treba extrémnu teplotu a tlak, aby sa priblížili na dosah silnej interakcie.', '<strong>Výsledok: fúzia vyžaduje extrémne podmienky</strong>'] }
    ]
  });

  gen('v7-stiepenie-fuzia', () => {
    const dm = rnd(1, 300) / 1000, E = dm * 931.5, ans = Math.round(E * 10) / 10;
    return {
      q: T`Pri jadrovej reakcii vznikne hmotnostný úbytok $\\Delta m = ${mn(dm)}\\,\\text{u}$. Akú energiu v MeV sa uvoľní? Použi $1\\,\\text{u}\\cdot c^2 = 931{,}5\\,\\text{MeV}$ a zaokrúhli na 1 desatinné miesto.`,
      answer: ans,
      tol: 0.05,
      mistakes: dropAns([
        { value: dm, msg: T`Dosadil si len hmotnostný úbytok. Najprv ho vynásob číslom $931{,}5\\,\\text{MeV}$.` },
        { value: E / 1000, msg: T`To je energia v GeV. Výsledok sa pýta v MeV, preto nedeľ tisíckou.` }
      ], ans),
      solution: T`$E=\\Delta m\\cdot 931{,}5\\,\\text{MeV}=${mn(dm)}\\cdot 931{,}5\\approx ${mn(ans)}\\,\\text{MeV}$.`,
      hint: T`Hmotnostný úbytok sa mení na energiu podľa $E=\\Delta m\\,c^2$, s $1\\,\\text{u}\\,c^2 = 931{,}5\\,\\text{MeV}$.`
    };
  });

  /* ---------- 6. Interakcia žiarenia s látkou ---------- */

  lesson({
    id: 'v7-ziarenie-latka', order: 60, theme: 'moderna', title: 'Interakcia žiarenia s látkou',
    summary: 'Útlm žiarenia, polovičná hrúbka a hlavné procesy pri gama žiarení.',
    theory: [
      `<p>Žiarenie pri prechode látkou stráca energiu. Alfa častice sa zastavia už v liste papiera, beta častice prejdú niekoľkými milimetrmi hliníka a gama žiarenie preniká hlboko a oslabuje sa len postupne.</p>`,
      `<p>Pre úzky zväzok fotónov platí exponenciálny útlm $I(x) = I_0\\,e^{-\\mu x}$, kde $\\mu$ je súčiniteľ útlmu. Praktickejšia je <em>polovičná hrúbka</em> $d_{1/2}$, teda vrstva, ktorá zoslabí intenzitu na polovicu. Potom $I = I_0\\cdot 2^{-x/d_{1/2}}$.</p>`,
      `<p>Pri gama žiarení sú dôležité tri procesy: <strong>fotoefekt</strong> (fotón je pohltený, dominuje pri nízkych energiách), <strong>Comptonov rozptyl</strong> (fotón stratí časť energie) a <strong>tvorba párov</strong> elektrón–pozitrón (od energie 1,022 MeV). Ťažké a husté látky, napríklad olovo, tienia lepšie.</p>`,
      `<ul><li>Ionizujúce žiarenie vyráža elektróny z atómov, preto môže poškodiť bunky.</li><li>Ochrana sa volí podľa typu žiarenia: papier alebo ruka pred alfa, plexisklo pred beta, olovo alebo betón pred gama.</li></ul>`
    ],
    examples: [
      { task: 'Olovená vrstva má polovičnú hrúbku 1,2 cm. Aké percento žiarenia prejde vrstvou hrubou 3,6 cm?',
        steps: ['$x/d_{1/2}=3{,}6/1{,}2=3$ polovičné hrúbky.', '$I = I_0\\cdot 2^{-3}=\\dfrac{I_0}{8}$.', '<strong>Výsledok: 12,5 %</strong>'] },
      { task: 'Intenzita žiarenia klesla na štvrtinu. Koľko polovičných hrúbok vrstva mala?',
        steps: ['$\\dfrac{1}{4}=2^{-2}$.', 'Teda vrstva mala 2 polovičné hrúbky.', '<strong>Výsledok: 2</strong>'] }
    ]
  });

  gen('v7-ziarenie-latka', () => {
    const d = rnd(1, 5), k = rnd(1, 4), ans = 100 / Math.pow(2, k);
    return {
      q: T`Vrstva má polovičnú hrúbku $d_{1/2}=${d}\\,\\text{cm}$. Aké percento pôvodnej intenzity žiarenia prejde vrstvou hrubou $${k * d}\\,\\text{cm}$? Zadaj číslo v percentách.`,
      answer: ans,
      tol: 0.01,
      mistakes: dropAns([
        { value: 100 / (2 * k), msg: T`Intenzitu si delil lineárne. Každá polovičná hrúbka zníži intenzitu na polovicu, preto treba mocninu dvojky.` },
        { value: 100 - ans, msg: T`To je zoslabená časť, nie časť, ktorá prejde. Pýtame sa na zostávajúcu intenzitu.` }
      ], ans),
      solution: T`Hrúbka $${k * d}\\,\\text{cm}$ je $${k}$ polovičných hrúbok, teda $I=I_0\\cdot 2^{-${k}}$, čo je $${mn(ans)}\\,\\%$ pôvodnej intenzity.`,
      hint: T`Každá polovičná hrúbka zníži intenzitu na polovicu. Počet takých hrúbok je $x/d_{1/2}$.`
    };
  });

  /* ---------- 7. Jadrová energetika a detekcia ---------- */

  lesson({
    id: 'v7-jadrova-energetika', order: 70, theme: 'moderna', title: 'Jadrová energetika a detekcia žiarenia',
    summary: 'Princíp jadrového reaktora, účinnosť elektrárne a meranie dávky žiarenia.',
    theory: [
      `<p>Jadrový reaktor využíva štiepenie $^{235}_{92}\\mathrm{U}$ v riadenej reťazovej reakcii. Teplo z reaktora ohrieva vodu, vzniká para, ktorá poháňa turbínu s generátorom elektriny.</p>`,
      `<p>Účinnosť elektrárne je $\\eta = \\dfrac{P_{\\text{el}}}{P_{\\text{t}}}$, kde $P_{\\text{t}}$ je tepelný výkon reaktora. Časť tepla sa nedá premeniť na prácu, a preto sa odvádza do chladiacej vody. Jadrové elektrárne majú účinnosť zvyčajne okolo 33 %.</p>`,
      `<p><strong>Riadenie:</strong> regulačné tyče z látok, ktoré pohlcujú neutróny (napr. bór, kadmium). <strong>Moderátor</strong> (voda, grafit) spomaľuje neutróny, aby lepšie štiepili jadrá.</p>`,
      `<p><strong>Dozimetria:</strong> absorbovaná dávka $D = E/m$ sa udáva v grayoch, $1\\,\\text{Gy} = 1\\,\\text{J/kg}$. Detektory, ako Geiger-Müllerova trubica alebo scintilátor, reagujú na jednotlivé častice a fotóny.</p>`
    ],
    examples: [
      { task: 'Reaktor má tepelný výkon 3000 MW a účinnosť 33 %. Aký je jeho elektrický výkon?',
        steps: ['$P_{\\text{el}}=\\eta\\,P_{\\text{t}}$.', '$0{,}33\\cdot 3000=990\\,\\text{MW}$.', '<strong>Výsledok: 990 MW</strong>'] },
      { task: 'Telo v dôsledku ožiarenia absorbovalo energiu 0,5 J. Hmotnosť tela je 50 kg. Aká je absorbovaná dávka?',
        steps: ['$D = E/m$.', '$D = 0{,}5/50 = 0{,}01\\,\\text{Gy}$.', '<strong>Výsledok: 0,01 Gy</strong>'] }
    ]
  });

  gen('v7-jadrova-energetika', () => {
    const P = 100 * rnd(10, 50), eta = pick([30, 32, 33, 34, 36, 38]), ans = (P * eta) / 100;
    return {
      q: T`Jadrová elektráreň má tepelný výkon $P_{\\text{t}}=${P}\\,\\text{MW}$ a účinnosť $\\eta=${eta}\\,\\%$. Aký je jej elektrický výkon $P_{\\text{el}}$ v MW?`,
      answer: ans,
      mistakes: dropAns([
        { value: P - ans, msg: T`To je odpadové teplo, ktoré sa nepremení na elektrinu. Elektrický výkon je $\\eta\\,P_{\\text{t}}$.` },
        { value: P, msg: T`To je tepelný výkon reaktora, nie elektrický. Účinnosť sme nezohľadnili.` }
      ], ans),
      solution: T`$P_{\\text{el}}=\\dfrac{${eta}}{100}\\cdot ${P}=${ans}\\,\\text{MW}$.`,
      hint: T`Účinnosť je $\\eta=\\dfrac{P_{\\text{el}}}{P_{\\text{t}}}$, takže $P_{\\text{el}}=\\eta\\,P_{\\text{t}}$.`
    };
  });
})();
