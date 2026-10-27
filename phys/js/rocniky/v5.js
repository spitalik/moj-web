/* Vysoká škola, 5. oblasť: Kvantová mechanika (v5). Lekcie (LESSONS.push) a generátory úloh (EXERCISES.register). */
(function () {
  'use strict';

  const { rnd, pick, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v5' }, l));
  const gen = EXERCISES.register;
  // desatinné číslo v matematickom režime: 0{,}25 (slovenčina), 0.25 (jazyk s bodkou)
  const M = (x) => fmt(x).replace(',', '{,}');
  // ponechá len chyby, ktoré sa líšia od správnej odpovede
  const keep = (list, ans, eps = 1e-6) => list.filter((m) => Math.abs(m.value - ans) > eps);

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'v5-dualizmus', order: 10, theme: 'moderna', title: 'Vlnovo-časticový dualizmus',
    summary: 'Svetlo aj častice sa správajú ako vlna i ako častica; de Broglieho vlnová dĺžka.',
    theory: [
      `<p>Fotoefekt a Comptonov jav ukázali, že svetlo sa správa ako prúd častíc (fotónov) s energiou $E=h\\,f$. Interferencia a difrakcia zase ukazujú vlnové vlastnosti. Hovoríme o <strong>vlnovo-časticovom dualizme</strong>: každý kvantový objekt má obe vlastnosti, ale pri konkrétnom meraní sa prejaví len jedna z nich.</p>`,
      `<p>Louis de Broglie navrhol, že aj častice s hybnosťou $p$ majú vlnovú dĺžku $\\lambda=\\frac{h}{p}$. Pre voľný elektrón s rýchlosťou $v$ (nerelativisticky) platí $p=m_e\\,v$. Čím je častica ťažšia alebo rýchlejšia, tým je jej vlnová dĺžka kratšia.</p>`,
      `<p>Preto makroskopické telesá (napr. loptička) majú vlnovú dĺžku tak malú, že ju nemožno pozorovať, kým elektróny v kryštáli vytvárajú difrakčný obraz podobný rentgenovému. Konštanta $h=6{,}63\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$ určuje, kde sa kvantové javy prejavia.</p>`
    ],
    examples: [
      { task: 'Elektrón sa pohybuje rýchlosťou $v=2\\cdot 10^{6}\\,\\text{m/s}$. Aká je jeho de Broglieho vlnová dĺžka? Použi $m_e=9{,}11\\cdot 10^{-31}\\,\\text{kg}$.',
        steps: ['$p=m_e v=9{,}11\\cdot 10^{-31}\\cdot 2\\cdot 10^{6}$.', '$\\lambda=\\frac{h}{p}=\\frac{6{,}63\\cdot 10^{-34}}{1{,}82\\cdot 10^{-24}}\\approx 3{,}6\\cdot 10^{-10}\\,\\text{m}$.', '<strong>Výsledok: $\\lambda\\approx 0{,}36\\,\\text{nm}$</strong>'] }
    ]
  });

  gen('v5-dualizmus', () => {
    const v = pick([1, 2, 3, 5]) * 1e6;
    const lamM = 6.63e-34 / (9.11e-31 * v);
    const ans = Math.round(lamM * 1e9 * 100) / 100;
    return {
      q: T`Elektrón sa pohybuje rýchlosťou $v=${v / 1e6}\\cdot 10^{6}\\,\\text{m/s}$. Aká je jeho de Broglieho vlnová dĺžka v nanometroch? Zaokrúhli na 2 des. miesta. Použi $h=6{,}63\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$ a $m_e=9{,}11\\cdot 10^{-31}\\,\\text{kg}$.`,
      answer: ans,
      tol: 0.01,
      solution: T`$\\lambda=\\frac{h}{m_e v}=\\frac{6{,}63\\cdot 10^{-34}}{9{,}11\\cdot 10^{-31}\\cdot ${v / 1e6}\\cdot 10^{6}}\\approx ${M(lamM * 1e10)}\\cdot 10^{-10}\\,\\text{m}=${M(ans)}\\,\\text{nm}$.`,
      hint: T`De Broglieho vzťah je $\\lambda=\\frac{h}{p}$, kde $p=m_e\\,v$. Výsledok prepíš z metrov na nanometre ($1\\,\\text{nm}=10^{-9}\\,\\text{m}$).`,
      mistakes: keep([
        { value: ans * 10, msg: T`Pomýlil si mocninu desiatky o jeden rád. Výsledok v nanometroch je $\\lambda\\approx ${M(ans)}\\,\\text{nm}$.` }
      ], ans, 0.05)
    };
  });

  lesson({
    id: 'v5-vlnova-funkcia', order: 20, theme: 'moderna', title: 'Vlnová funkcia a pravdepodobnosť',
    summary: 'Vlnová funkcia ψ, hustota pravdepodobnosti |ψ|² a výpočet pravdepodobnosti pre úsek.',
    theory: [
      `<p>Stav kvantovej častice opisuje <strong>vlnová funkcia</strong> $\\psi(x,t)$. Sama o sebe nie je merateľná. Jej štvorec $|\\psi|^2$ je <strong>hustota pravdepodobnosti</strong>: pravdepodobnosť, že sa častica nachádza v malom okolí bodu $x$, je $|\\psi|^2\\,dx$.</p>`,
      `<p>Pravdepodobnosť nájdenia častice v konečnom úseku $[x_1,x_2]$ je integrál $P=\\int_{x_1}^{x_2}|\\psi|^2\\,dx$. Celková pravdepodobnosť je 1, teda $\\int|\\psi|^2\\,dx=1$. Taká funkcia sa volá normovaná.</p>`,
      `<p>Preto kvantová mechanika dáva len <em>pravdepodobnosti</em> výsledkov merania, nie presné hodnoty pre jednu časticu. Ak je hustota rovnomerná, pravdepodobnosť sa rovná pomeru dĺžky úseku k celej dĺžke oblasti.</p>`
    ],
    examples: [
      { task: 'Častica je s rovnakou hustotou rozložená na úsečke dĺžky $L=20\\,\\text{nm}$. Aká je pravdepodobnosť, že leží na úseku od $0$ do $5\\,\\text{nm}$?',
        steps: ['Hustota je konštantná, $|\\psi|^2=\\frac{1}{L}$.', '$P=\\frac{5}{20}=\\frac{1}{4}$.', '<strong>Výsledok: $P=0{,}25$</strong>'] }
    ]
  });

  gen('v5-vlnova-funkcia', () => {
    const L = pick([20, 40, 60, 100]);
    const [p, q] = pick([[1, 4], [1, 2], [1, 5], [2, 5], [3, 4]]);
    const a = (L * p) / q;
    const ans = p / q;
    return {
      q: T`Častica sa s rovnakou hustotou pravdepodobnosti nachádza kdekoľvek na úsečke dlhej $L=${L}\\,\\text{nm}$. Aká je pravdepodobnosť, že sa nachádza na úseku od $0$ do $${a}\\,\\text{nm}$? Zadaj ako desatinné číslo.`,
      answer: ans,
      solution: T`$P=\\frac{${a}}{${L}}=${M(ans)}$.`,
      hint: T`Pri rovnomernej hustote je pravdepodobnosť úmerná dĺžke úseku: $P=\\frac{a}{L}$.`,
      mistakes: keep([
        { value: 1 - ans, msg: T`Vypočítal si pravdepodobnosť zvyšnej časti úsečky. Pýtame sa na úsek od $0$ do $${a}\\,\\text{nm}$.` },
        { value: a, msg: T`Dostal si dĺžku úseku, nie pravdepodobnosť. Ten treba vydeliť celou dĺžkou $L$.` }
      ], ans)
    };
  });

  lesson({
    id: 'v5-schrodinger', order: 30, theme: 'moderna', title: 'Schrödingerova rovnica',
    summary: 'Časovo nezávislá Schrödingerova rovnica a energie častice v nekonečne hlbokej jame.',
    theory: [
      `<p><strong>Schrödingerova rovnica</strong> opisuje vývoj vlnovej funkcie. Jej časovo nezávislá forma $\\hat{H}\\psi=E\\psi$ hovorí, že pre stacionárne stavy je energia $E$ konštantná a vlnová funkcia je vlastnou funkciou energetického operátora $\\hat{H}$.</p>`,
      `<p>Uvažujme časticu v <strong>nekonečne hlbokej potenciálovej jame</strong> šírky $L$. Vlnová funkcia musí na okrajoch jamy zmiznúť, preto sa do jamy zmestí len celočíselný počet polovíc vlnovej dĺžky. Výsledkom sú diskrétne energie $E_n=\\frac{n^2 h^2}{8 m L^2}$, kde $n=1,2,3,\\dots$</p>`,
      `<p>Energia rastie s druhou mocninou čísla $n$ a klesá s druhou mocninou šírky jamy. Preto je pre elektrón v jame šírky $1\\,\\text{nm}$ najnižšia energia $E_1=0{,}376\\,\\text{eV}$, kým v širšej jame sú hladiny tesnejšie pri sebe.</p>`
    ],
    examples: [
      { task: 'Elektrón je v jame šírky $L=1\\,\\text{nm}$ v stave $n=2$. Aká je jeho energia? Pre $n=1$ platí $E_1=0{,}376\\,\\text{eV}$.',
        steps: ['$E_n=E_1\\cdot\\frac{n^2}{L^2}$ s $L$ v nanometroch.', '$E_2=0{,}376\\cdot 4=1{,}504\\,\\text{eV}$.', '<strong>Výsledok: $E_2\\approx 1{,}5\\,\\text{eV}$</strong>'] }
    ]
  });

  gen('v5-schrodinger', () => {
    const L = pick([0.5, 1]), n = rnd(1, 3);
    const E = (0.376 * n * n) / (L * L);
    const ans = Math.round(E * 100) / 100;
    return {
      q: T`Elektrón je v nekonečne hlbokej potenciálovej jame šírky $L=${M(L)}\\,\\text{nm}$ v stave $n=${n}$. Akú má energiu $E_n$ v elektrónvoltoch? Zaokrúhli na 2 des. miesta. Pre elektrón v jame šírky $1\\,\\text{nm}$ platí $E_1=0{,}376\\,\\text{eV}$.`,
      answer: ans,
      tol: 0.01,
      solution: T`$E_{${n}}=E_1\\cdot\\frac{${n}^2}{${M(L)}^2}=0{,}376\\cdot\\frac{${n * n}}{${M(L * L)}}\\approx ${M(ans)}\\,\\text{eV}$.`,
      hint: T`Energia v jame rastie s $n^2$ a klesá s $L^2$: $E_n\\propto\\frac{n^2}{L^2}$.`,
      mistakes: keep([
        { value: (0.376 * n) / (L * L), msg: T`Zabudol si umocniť číslo $n$ na druhú. Energia rastie s $n^2$, nie s $n$.` },
        { value: (0.376 * n * n) / L, msg: T`Zabudol si umocniť šírku jamy na druhú. Energia klesá s $L^2$.` }
      ], ans, 0.05)
    };
  });

  lesson({
    id: 'v5-operatory', order: 40, theme: 'moderna', title: 'Operátory a pozorovateľné veličiny',
    summary: 'Operátory v kvantovej mechanike, vlastné funkcie a vlastné hodnoty ako výsledky merania.',
    theory: [
      `<p>Každej fyzikálnej veličine ($x$, hybnosť, energia) zodpovedá <strong>operátor</strong>, teda predpis, ktorý z funkcie urobí inú funkciu. Napríklad hybnosti zodpovedá $\\hat{p}=-i\\hbar\\,\\frac{d}{dx}$ a energii Hamiltonov operátor $\\hat{H}$.</p>`,
      `<p>Ak operátor $\\hat{A}$ pôsobí na funkciu $\\psi$ tak, že $\\hat{A}\\psi=a\\,\\psi$, je $\\psi$ <strong>vlastnou funkciou</strong> a číslo $a$ <strong>vlastnou hodnotou</strong>. Meranie veličiny $A$ dá vždy niektorú z jej vlastných hodnôt; stav sa pri meraní zmení na zodpovedajúcu vlastnú funkciu.</p>`,
      `<p>Pozorovateľné veličiny majú reálne vlastné hodnoty, lebo ich operátory sú hermitovské. Preto výsledky merania sú vždy reálne čísla.</p>`
    ],
    examples: [
      { task: 'Operátor $\\hat{D}=\\frac{d}{dx}$ pôsobí na $\\psi=e^{3x}$. Aká je vlastná hodnota?',
        steps: ['$\\frac{d}{dx}e^{3x}=3\\,e^{3x}$.', 'Platí $\\hat{D}\\psi=3\\psi$.', '<strong>Výsledok: vlastná hodnota je $3$</strong>'] }
    ]
  });

  gen('v5-operatory', () => {
    const k = rnd(1, 4);
    const ans = -k * k;
    return {
      signed: true,
      q: T`Operátor $\\hat{D}^2=\\frac{d^2}{dx^2}$ pôsobí na funkciu $\\psi(x)=\\sin(${k}x)$. Platí $\\hat{D}^2\\psi=\\lambda\\,\\psi$. Aká je vlastná hodnota $\\lambda$?`,
      answer: ans,
      solution: T`$\\frac{d^2}{dx^2}\\sin(${k}x)=-${k * k}\\sin(${k}x)$, teda $\\lambda=-${k * k}$.`,
      hint: T`Dvakrát zderivuj $\\sin(kx)$. Každá derivácia vynásobí funkciu $k$ a druhá derivácia sínusu mení znamienko.`,
      mistakes: keep([
        { value: k * k, msg: T`Zabudol si na znamienko. Druhá derivácia sínusu dáva záporný násobok, $\\lambda=-k^2$.` },
        { value: k, msg: T`Zderivoval si len raz. Operátor je druhá derivácia, takže vlastná hodnota je $-k^2$.` }
      ], ans)
    };
  });

  lesson({
    id: 'v5-kvantovanie', order: 50, theme: 'moderna', title: 'Kvantovanie energie',
    summary: 'Prečo má viazaná častica len diskrétne energie, na príklade harmonického oscilátora.',
    theory: [
      `<p>Ak je častica <strong>viazaná</strong> (napr. v jame alebo v kmitajúcom sústave), jej vlnová funkcia musí byť na okrajoch oblasti nulová. Táto podmienka obmedzuje možné energie na <strong>diskrétne hladiny</strong>. Voľná častica má naopak spojité energie.</p>`,
      `<p>Kvantový harmonický oscilátor má hladiny $E_n=\\left(n+\\tfrac{1}{2}\\right)\\hbar\\omega$, kde $n=0,1,2,\\dots$ a $\\omega$ je kruhová frekvencia. Susedné hladiny sú rovnako od seba vzdialené o $\\hbar\\omega$.</p>`,
      `<p>Najnižšia hladina ($n=0$) nemá nulovú energiu, ale $\\frac{1}{2}\\hbar\\omega$. Tá nulová energia je dôsledkom princípu neurčitosti: častica nemôže byť súčasne v kľude v jednom bode.</p>`
    ],
    examples: [
      { task: 'Aká je energia oscilátora v stave $n=3$ v jednotkách $\\hbar\\omega$?',
        steps: ['$E_3=\\left(3+\\tfrac{1}{2}\\right)\\hbar\\omega$.', '<strong>Výsledok: $E_3=3{,}5\\,\\hbar\\omega$</strong>'] }
    ]
  });

  gen('v5-kvantovanie', () => {
    const n = rnd(0, 4);
    const ans = n + 0.5;
    return {
      q: T`Kvantový harmonický oscilátor má energetické hladiny $E_n=\\left(n+\\tfrac{1}{2}\\right)\\hbar\\omega$. Koľkonásobok $\\hbar\\omega$ je energia stavu $n=${n}$? Zadaj číslo.`,
      answer: ans,
      solution: T`$E_{${n}}=\\left(${n}+\\tfrac{1}{2}\\right)\\hbar\\omega=${M(ans)}\\,\\hbar\\omega$.`,
      hint: T`Dosaď $n$ do vzorca. Nezabudni na polovicu, najnižšia hladina nie je nulová.`,
      mistakes: keep([
        { value: n, msg: T`Zabudol si pripočítať $\\frac{1}{2}$. Energia nulového stavu nie je nulová.` },
        { value: n + 1, msg: T`Počítal si od jednotky. Pre stav $n$ dosadzujeme priamo $n$, pričom $n$ začína nulou.` }
      ], ans)
    };
  });

  lesson({
    id: 'v5-spin', order: 60, theme: 'moderna', title: 'Moment hybnosti a spin',
    summary: 'Orbitálny moment hybnosti, kvantové číslo l, počet stavov a spin elektrónu.',
    theory: [
      `<p>Orbitálny moment hybnosti elektrónu v atóme je kvantovaný: jeho veľkosť je $|\\vec{L}|=\\sqrt{l(l+1)}\\,\\hbar$, kde $l=0,1,2,\\dots$ je <strong>orbitálne kvantové číslo</strong>. Priemet na zvolenú os môže nadobúdať hodnoty $L_z=m_l\\hbar$.</p>`,
      `<p>Magnetické kvantové číslo $m_l$ nadobúda hodnoty od $-l$ po $+l$ vrátane nuly, preto je pre dané $l$ práve $2l+1$ možných stavov. Pre $l=0$ je jeden stav, pre $l=1$ tri stavy.</p>`,
      `<p><strong>Spin</strong> je vnútorný moment hybnosti elektrónu, ktorý nemá klasický obraz rotujúcej guľôčky. Elektrón má spinové kvantové číslo $s=\\tfrac{1}{2}$, takže sú dve možné orientácie. Spolu s orbitálnym momentom určuje štruktúru atómových hladín.</p>`
    ],
    examples: [
      { task: 'Elektrón má orbitálne kvantové číslo $l=2$. Koľko rôznych hodnôt $m_l$ je možných?',
        steps: ['Hodnoty $m_l$ idú od $-2$ po $+2$: $-2,-1,0,1,2$.', '<strong>Výsledok: $2l+1=5$ hodnôt</strong>'] }
    ]
  });

  gen('v5-spin', () => {
    const l = rnd(1, 3);
    if (Math.random() < 0.5) {
      return {
        q: T`Elektrón v atóme má orbitálne kvantové číslo $l=${l}$. Koľko rôznych hodnôt magnetického kvantového čísla $m_l$ je pre tento stav možných?`,
        answer: 2 * l + 1,
        solution: T`Magnetické kvantové číslo nadobúda hodnoty $m_l=-l,\\dots,+l$, čo je $2l+1$ hodnôt: $2\\cdot ${l}+1=${2 * l + 1}$.`,
        hint: T`Hodnoty $m_l$ idú od $-l$ po $+l$ a zahŕňajú nulu.`,
        mistakes: keep([
          { value: 2 * l, msg: T`Nezapočítal si hodnotu $m_l=0$. Počet stavov je $2l+1$.` },
          { value: l + 1, msg: T`Zamenil si počet stavov za hodnotu $l+1$. Správne je $2l+1$.` }
        ], 2 * l + 1)
      };
    }
    const ans = Math.round(Math.sqrt(l * (l + 1)) * 100) / 100;
    return {
      q: T`Orbitálny moment hybnosti elektrónu má kvantové číslo $l=${l}$. Aká je veľkosť momentu hybnosti $|\\vec{L}|$ v jednotkách $\\hbar$? Zaokrúhli na 2 des. miesta.`,
      answer: ans,
      tol: 0.01,
      solution: T`$|\\vec{L}|=\\sqrt{l(l+1)}\\,\\hbar=\\sqrt{${l * (l + 1)}}\\,\\hbar\\approx ${M(ans)}\\,\\hbar$.`,
      hint: T`Veľkosť momentu hybnosti je $\\sqrt{l(l+1)}\\,\\hbar$. Nezabudni na odmocninu.`,
      mistakes: keep([
        { value: l * (l + 1), msg: T`Zabudol si odmocniť. Platí $|\\vec{L}|=\\sqrt{l(l+1)}\\,\\hbar$.` },
        { value: l, msg: T`Dosadil si len $l$. Veľkosť momentu hybnosti závisí od súčinu $l(l+1)$.` }
      ], ans, 0.05)
    };
  });

  lesson({
    id: 'v5-vodik', order: 70, theme: 'moderna', title: 'Atóm vodíka a kvantové stavy',
    summary: 'Energetické hladiny atómu vodíka a energia fotónu pri prechode medzi nimi.',
    theory: [
      `<p>Energie elektrónu v atóme vodíka sú $E_n=-\\frac{13{,}6\\,\\text{eV}}{n^2}$, kde $n=1,2,3,\\dots$ je hlavné kvantové číslo. Záporné znamienko znamená, že elektrón je viazaný; pri $n\\to\\infty$ sa energia blíži k nule.</p>`,
      `<p>Pri prechode elektrónu z vyššej hladiny $n_i$ na nižšiu $n_f$ vyžiari atóm fotón s energiou $E_f=E_{n_i}-E_{n_f}$ v absolútnej hodnote. Pri absorpcii fotónu je to naopak. Preto spektrum vodíka tvorí čiary, nie spojité pásmo.</p>`,
      `<p>Najdôležitejšia je séria prechodov do $n_f=2$ (Balmerova séria), ktorá je v viditeľnej oblasti svetla. Prechody do $n_f=1$ dávajú ultrafialové žiarenie.</p>`
    ],
    examples: [
      { task: 'Elektrón v atóme vodíka prejde z $n=3$ do $n=2$. Akú energiu má vyžiarený fotón?',
        steps: ['$E_3=-\\frac{13{,}6}{9}\\approx -1{,}51\\,\\text{eV}$ a $E_2=-\\frac{13{,}6}{4}=-3{,}40\\,\\text{eV}$.', '$\\Delta E=|E_2-E_3|\\approx 1{,}89\\,\\text{eV}$.', '<strong>Výsledok: $\\Delta E\\approx 1{,}89\\,\\text{eV}$</strong>'] }
    ]
  });

  const PAIRS = [[2, 1], [3, 1], [3, 2], [4, 2], [4, 3], [5, 2]];

  gen('v5-vodik', () => {
    const [ni, nf] = pick(PAIRS);
    const ans = Math.round(13.6 * (1 / (nf * nf) - 1 / (ni * ni)) * 100) / 100;
    return {
      q: T`Elektrón v atóme vodíka prejde zo stavu $n=${ni}$ do stavu $n=${nf}$ a vyžiari fotón. Akú energiu má fotón v elektrónvoltoch? Použi $E_n=-\\frac{13{,}6\\,\\text{eV}}{n^2}$ a zaokrúhli na 2 des. miesta.`,
      answer: ans,
      tol: 0.01,
      solution: T`$\\Delta E=13{,}6\\,\\text{eV}\\cdot\\left(\\frac{1}{${nf}^2}-\\frac{1}{${ni}^2}\\right)\\approx ${M(ans)}\\,\\text{eV}$.`,
      hint: T`Energia fotónu je rozdiel energií hladín. Dolná hladina má väčšiu väzbovú energiu, preto výsledok vyjde kladný.`,
      mistakes: keep([
        { value: -ans, msg: T`Zlé znamienko. Energia vyžiareného fotónu je kladná, je to rozdiel $|E_{n_i}-E_{n_f}|$.` },
        { value: 13.6 / (nf * nf), msg: T`Počítal si len energiu nižšej hladiny. Energia fotónu je rozdiel oboch hladín.` }
      ], ans, 0.05)
    };
  });

  lesson({
    id: 'v5-neurcitost', order: 80, theme: 'moderna', title: 'Tunelový jav a princíp neurčitosti',
    summary: 'Heisenbergov princíp neurčitosti a tunelovanie cez bariéru, ktorú klasicky nepreskočí.',
    theory: [
      `<p><strong>Heisenbergov princíp neurčitosti</strong> hovorí, že polohu a hybnosť časticy nemožno súčasne určiť ľubovoľne presne: $\\Delta x\\,\\Delta p\\geq\\frac{\\hbar}{2}$. Ide o vlastnosť vĺn, nie o nedostatok meracej techniky. Čím presnejšie poznáme polohu, tým väčšia je neistota hybnosti.</p>`,
      `<p><strong>Tunelový jav</strong> znamená, že častica prejde cez potenciálovú bariéru, ktorú by klasicky nepreskočila, lebo nemá dosť energie. Vlnová funkcia sa v bariére exponenciálne zmenšuje, ale nie na nulu, a na druhej strane bariéry je nenulová pravdepodobnosť nájdenia častice.</p>`,
      `<p>Tunelovanie vysvetľuje rádioaktívny rozpad alfa, fungovanie tunelového mikroskopu aj elektronický prúd v niektorých polovodičových súčiastkach.</p>`
    ],
    examples: [
      { task: 'Poloha elektrónu je známa s neistotou $\\Delta x=1\\,\\text{pm}$. Aká je najmenšia neistota jeho hybnosti? Použi $\\hbar=1{,}0546\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$.',
        steps: ['$\\Delta p_{\\min}=\\frac{\\hbar}{2\\,\\Delta x}=\\frac{1{,}0546\\cdot 10^{-34}}{2\\cdot 10^{-12}}$.', '$\\Delta p_{\\min}\\approx 5{,}27\\cdot 10^{-23}\\,\\text{kg}\\,\\text{m/s}$.', '<strong>Výsledok: $\\Delta p_{\\min}\\approx 52{,}7\\cdot 10^{-24}\\,\\text{kg}\\,\\text{m/s}$</strong>'] }
    ]
  });

  gen('v5-neurcitost', () => {
    const dx = pick([1, 2, 5, 10]);
    const dp = 1.0546e-34 / (2 * dx * 1e-12);
    const ans = Math.round((dp / 1e-24) * 100) / 100;
    return {
      q: T`Poloha elektrónu je známa s neistotou $\\Delta x=${dx}\\,\\text{pm}$. Aká je najmenšia možná neistota jeho hybnosti $\\Delta p$? Výsledok zadaj v jednotkách $10^{-24}\\,\\text{kg}\\,\\text{m/s}$ (zaokrúhli na 2 des. miesta). Použi $\\hbar=1{,}0546\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$.`,
      answer: ans,
      tol: 0.01,
      solution: T`$\\Delta p=\\frac{\\hbar}{2\\,\\Delta x}=\\frac{1{,}0546\\cdot 10^{-34}}{2\\cdot ${dx}\\cdot 10^{-12}}\\approx ${M(ans)}\\cdot 10^{-24}\\,\\text{kg}\\,\\text{m/s}$.`,
      hint: T`Z princípu neurčitosti vyjadri najmenšiu neistotu hybnosti: $\\Delta p=\\frac{\\hbar}{2\\,\\Delta x}$. Pikometer je $10^{-12}\\,\\text{m}$.`,
      mistakes: keep([
        { value: ans * 2, msg: T`Zabudol si deliť dvomi. Princíp neurčitosti má tvar $\\Delta x\\,\\Delta p\\geq\\frac{\\hbar}{2}$.` }
      ], ans, 0.05)
    };
  });
})();
