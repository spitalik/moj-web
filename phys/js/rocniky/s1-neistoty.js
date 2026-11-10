/* 1. ročník SŠ, doplnok k meraniu (téma Matematika vo fyzike): platné číslice a zaokrúhľovanie, chyby merania,
   spracovanie opakovaného merania a šírenie neistôt (terminológia GUM na úrovni SŠ).
   Lekcie (LESSONS.push), obrázky (FIGURES.register) a generátory úloh (EXERCISES.register).
   Preklady teórie aj textov úloh sú v balíku js/content-i18n/<jazyk>/neistoty.js, načíta sa spolu s týmto súborom. */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const { n1 } = FIGURES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 's1' }, l));
  const gen = EXERCISES.register;
  // vyradí chybné hodnoty, ktoré by vyšli ako správna odpoveď (alebo by sa od nej nedali rozlíšiť)
  const keep = (ms, ans, eps = 1e-6) => ms.filter((m) => Number.isFinite(m.value) && Math.abs(m.value - ans) > eps);

  /* ---------- čísla: desatinný oddeľovač jazyka, zaokrúhľovanie ---------- */

  const dec = () => CONTENT_I18N.decimal();
  // text čísla s d desatinnými miestami (oddeľovač podľa jazyka obsahu)
  const fx = (x, d) => (Math.abs(x) < 1e-12 ? 0 : x).toFixed(Math.max(0, d)).replace('.', dec());
  // to isté do KaTeX: čiarka v {,}, aby za ňou KaTeX nevložil medzeru
  const tx = (x, d) => fx(x, d).replace(dec(), `{${dec()}}`);
  // zaokrúhlenie na d desatinných miest (d < 0: na desiatky, stovky …), päťka nahor, bez šumu binárnych čísel
  const rd = (x, d) => (d >= 0
    ? Math.round(Number((x * 10 ** d).toPrecision(12))) / 10 ** d
    : Math.round(Number((x / 10 ** -d).toPrecision(12))) * 10 ** -d);
  // rád prvej platnej číslice a zaokrúhlenie na n platných číslic
  const mag = (x) => Math.floor(Math.log10(Math.abs(x)));
  const sig = (x, n) => rd(x, n - 1 - mag(x));
  // zaokrúhlené číslo s n platnými číslicami do KaTeX (aj s nulami na konci, napr. 2,70)
  const sigTx = (x, n) => { const r = sig(x, n); return tx(r, n - 1 - mag(r)); };

  /* ---------- obrázky ---------- */

  // odčítanie dĺžky na pravítku: isté číslice a odhadnutá posledná číslica
  FIGURES.register('neistoty-pravitko', {
    draw: () => {
      const X = (mm) => 30 + 6 * mm;
      let ticks = '';
      for (let mm = 0; mm <= 60; mm++) {
        const h = mm % 10 === 0 ? 20 : mm % 5 === 0 ? 14 : 8;
        ticks += `<line class="f-thin" x1="${X(mm)}" y1="74" x2="${X(mm)}" y2="${74 + h}"/>`;
        if (mm % 10 === 0) ticks += `<text class="f-small" x="${X(mm)}" y="110" text-anchor="middle">${mm / 10}</text>`;
      }
      const end = X(43.5);
      return `<svg viewBox="0 0 420 166" role="img" aria-label="Odčítanie dĺžky na pravítku">
      <rect class="f-fill f-outline" x="${X(0)}" y="44" width="${n1(end - X(0))}" height="28"/>
      <rect class="f-cell" x="20" y="74" width="380" height="46"/>
      ${ticks}
      <line class="f-dash" x1="${end}" y1="30" x2="${end}" y2="96"/>
      <text class="f-text" x="${end}" y="24" text-anchor="middle">l = ${fx(4.35, 2)} cm</text>
      <text class="f-small" x="390" y="110" text-anchor="end">cm</text>
      <text class="f-small" x="30" y="140">isté číslice: 4 a 3</text>
      <text class="f-small" x="390" y="158" text-anchor="end">odhad: posledná číslica 5</text></svg>`;
    }
  });

  // presnosť a správnosť: štyri terče
  FIGURES.register('neistoty-terc', {
    draw: () => {
      const tight = [[0, 0], [4, -3], [-3, 4], [3, 4], [-4, -2]];
      const wide = [[-20, 10], [15, 18], [22, -12], [-12, -22], [-5, 6]];
      const cases = [
        { pts: tight, off: [0, 0], a: 'presné', b: 'správne' },
        { pts: tight, off: [17, -15], a: 'presné', b: 'nesprávne' },
        { pts: wide, off: [0, 0], a: 'nepresné', b: 'správne' },
        { pts: wide, off: [14, -12], a: 'nepresné', b: 'nesprávne' }
      ];
      let s = `<svg viewBox="0 0 440 160" role="img" aria-label="Štyri terče: presnosť a správnosť merania">`;
      cases.forEach((c, i) => {
        const cx = 55 + 110 * i, cy = 62;
        s += `<circle class="f-thin" cx="${cx}" cy="${cy}" r="44"/><circle class="f-thin" cx="${cx}" cy="${cy}" r="29"/>
        <circle class="f-thin" cx="${cx}" cy="${cy}" r="14"/><circle class="f-solid" cx="${cx}" cy="${cy}" r="2"/>`;
        c.pts.forEach(([x, y]) => { s += `<circle class="f-dot" cx="${cx + c.off[0] + x}" cy="${cy + c.off[1] + y}" r="4"/>`; });
        s += `<text class="f-small" x="${cx}" y="128" text-anchor="middle">${c.a}</text>
        <text class="f-small" x="${cx}" y="146" text-anchor="middle">${c.b}</text>`;
      });
      return s + '</svg>';
    }
  });

  // rozptyl opakovaných meraní okolo priemeru, pás smerodajnej odchýlky a užší pás neistoty priemeru
  FIGURES.register('neistoty-rozptyl', {
    draw: () => {
      const d = [-5, -3, -2, -1, -1, 0, 1, 1, 2, 4, 0, 1];
      const n = d.length, mean = d.reduce((a, b) => a + b, 0) / n;
      const S2 = d.reduce((a, b) => a + (b - mean) ** 2, 0);
      const sd = Math.sqrt(S2 / (n - 1)), uA = sd / Math.sqrt(n);
      const X = (v) => 210 + 30 * v, base = 132;
      const seen = {};
      let dots = '';
      d.forEach((v) => {
        const k = seen[v] = (seen[v] || 0) + 1;
        dots += `<circle class="f-dot" cx="${X(v)}" cy="${base - 10 - 13 * (k - 1)}" r="5"/>`;
      });
      return `<svg viewBox="0 0 420 180" role="img" aria-label="Rozptyl opakovaných meraní okolo priemeru">
      <rect class="f-fill3" x="${n1(X(mean - sd))}" y="40" width="${n1(60 * sd)}" height="${base - 40}"/>
      <rect class="f-fill f-outline" x="${n1(X(mean - uA))}" y="40" width="${n1(60 * uA)}" height="${base - 40}"/>
      <line class="f-axis" x1="30" y1="${base}" x2="390" y2="${base}"/>
      ${dots}
      <line class="f-dash" x1="${n1(X(mean))}" y1="36" x2="${n1(X(mean))}" y2="${base + 6}"/>
      <text class="f-math" x="${n1(X(mean))}" y="${base + 26}" text-anchor="middle">x̄</text>
      <rect class="f-fill3" x="30" y="10" width="14" height="14"/>
      <text class="f-small" x="50" y="21">rozptyl meraní ± s</text>
      <rect class="f-fill f-outline" x="290" y="10" width="14" height="14"/>
      <text class="f-small" x="310" y="21">± u_A</text>
      <text class="f-small" x="30" y="${base + 22}">jednotlivé merania</text>
      <text class="f-small" x="390" y="${base + 22}" text-anchor="end">x</text></svg>`;
    }
  });

  /* ---------- 1. platné číslice a zaokrúhľovanie ---------- */

  lesson({
    id: 's1-platne-cislice', order: 12, theme: 'matematika',
    title: 'Platné číslice a zaokrúhľovanie',
    summary: 'Koľko číslic výsledku má zmysel, vedecký zápis a zaokrúhlenie výsledku výpočtu.',
    theory: [
      `<p>Nameraný údaj je len taký presný, aké presné bolo meranie. <strong>Platné číslice</strong> sú všetky číslice, ktoré o veličine naozaj niečo hovoria: tie, ktoré sme odčítali s istotou, a posledná, ktorú sme odhadli. Ak pravítkom s milimetrovou stupnicou nameriame $l = 4{,}35\\,\\text{cm}$, číslice 4 a 3 sú isté a 5 je odhad. Údaj má 3 platné číslice.</p>`,
      `<p>Pravidlá počítania platných číslic:</p>
       <ul>
         <li>každá nenulová číslica je platná: $274$ má 3 platné číslice,</li>
         <li>nuly medzi nenulovými číslicami sú platné: $2{,}05$ má 3,</li>
         <li>nuly <strong>na začiatku</strong> platné nie sú, len určujú polohu desatinnej čiarky: $0{,}0042$ má 2,</li>
         <li>nuly <strong>na konci za desatinnou čiarkou</strong> sú platné: $3{,}50$ má 3, lebo hovoria, že sa meralo na stotiny.</li>
       </ul>`,
      `<p><strong>Vedecký zápis</strong> $a\\cdot 10^n$, kde $1\\le a<10$ a $n$ je celé číslo, odstráni nejasnosť pri nulách na konci celého čísla. Zápis $1500\\,\\text{m}$ nehovorí, či sú nuly platné, ale $1{,}5\\cdot 10^3\\,\\text{m}$ má 2 platné číslice a $1{,}500\\cdot 10^3\\,\\text{m}$ má 4. Malé čísla majú záporný exponent: $0{,}00052\\,\\text{m} = 5{,}2\\cdot 10^{-4}\\,\\text{m}$.</p>`,
      `<p><strong>Násobenie a delenie:</strong> výsledok zaokrúhlime na toľko platných číslic, koľko ich má <em>najmenej presný</em> údaj. Z dráhy $s = 12{,}4\\,\\text{m}$ (3 platné číslice) a času $t = 3{,}7\\,\\text{s}$ (2 platné číslice) vyjde na kalkulačke $v = 3{,}351\\ldots\\,\\text{m/s}$, zapíšeme však $v = 3{,}4\\,\\text{m/s}$.</p>`,
      `<p><strong>Sčítanie a odčítanie:</strong> rozhoduje počet <em>desatinných miest</em>, nie počet platných číslic. Výsledok má toľko desatinných miest ako údaj s ich najmenším počtom: $12{,}35\\,\\text{m} + 4{,}2\\,\\text{m} = 16{,}55\\,\\text{m} \\approx 16{,}6\\,\\text{m}$. Číslica 5 a väčšia sa zaokrúhľuje nahor. Medzivýsledky nezaokrúhľujeme, zaokrúhli sa až konečný výsledok.</p>`,
      { fig: 'neistoty-pravitko', caption: 'Pri odčítaní zo stupnice sú celé dieliky isté a poslednú číslicu odhadneme. Aj odhadnutá číslica je platná.' }
    ],
    examples: [
      { task: 'Hranol má hmotnosť $m = 152\\,\\text{g}$ a objem $V = 56\\,\\text{cm}^3$. Vypočítaj jeho hustotu so správnym počtom platných číslic.',
        steps: ['Údaj $m$ má 3 platné číslice, $V$ má 2, výsledok preto bude mať 2.', '$\\rho = \\frac{m}{V} = \\frac{152}{56} = 2{,}714\\ldots\\,\\text{g/cm}^3$.', '<strong>Výsledok: $\\rho \\approx 2{,}7\\,\\text{g/cm}^3$</strong>'] },
      { task: 'Zapíš čas $0{,}0003070\\,\\text{s}$ vo vedeckom zápise a urči počet platných číslic.',
        steps: ['Nuly na začiatku platné nie sú. Platné sú číslice $3070$, lebo nula na konci za desatinnou čiarkou sa ráta.', 'Desatinnú čiarku posunieme o 4 miesta doprava, preto je exponent $-4$: $3{,}070\\cdot 10^{-4}\\,\\text{s}$.', '<strong>Výsledok: $3{,}070\\cdot 10^{-4}\\,\\text{s}$, 4 platné číslice</strong>'] }
    ]
  });

  gen('s1-platne-cislice', () => {
    const t = Math.random();
    const unit = pick(['m', 's', 'kg', 'g', 'N']);
    if (t < 0.3) {
      // počet platných číslic v zápise
      const n = rnd(2, 5);
      let digits = String(rnd(1, 9));
      for (let i = 1; i < n; i++) digits += String(rnd(0, 9));
      if (Math.random() < 0.5) digits = digits.slice(0, -1) + '0';
      const trail = digits.length - digits.replace(/0+$/, '').length;
      const small = Math.random() < 0.5, k = rnd(0, 3), p = rnd(1, n - 1), sep = dec();
      // malé číslo 0,00…; inak je desatinná čiarka vnútri zápisu a nuly na konci sú za ňou
      const str = small ? '0' + sep + '0'.repeat(k) + digits : digits.slice(0, p) + sep + digits.slice(p);
      const ex = {
        q: T`Koľko platných číslic má údaj $${str.replace(sep, `{${sep}}`)}\\,\\text{${unit}}$?`,
        answer: n,
        solution: small
          ? T`Nuly pred prvou nenulovou číslicou (${k + 1}) platné nie sú. Platné sú číslice $${digits}$, teda ${n}.`
          : T`Všetky číslice zápisu sú platné (aj nuly vnútri a nuly na konci za desatinnou čiarkou), teda ${n}.`,
        hint: T`Nuly na začiatku sa nerátajú, nuly na konci za desatinnou čiarkou áno.`,
        mistakes: keep([
          ...(small ? [{ value: n + k + 1, msg: T`Započítali sa aj nuly na začiatku. Tie len určujú polohu desatinnej čiarky a platné nie sú.` }] : []),
          ...(trail ? [{ value: n - trail, msg: T`Vynechali sa nuly na konci. Nula na konci za desatinnou čiarkou je platná, hovorí, s akou presnosťou sa meralo.` }] : [])
        ], n)
      };
      if (small) {
        ex.steps = [
          { q: T`Koľko núl stojí pred prvou nenulovou číslicou (vrátane nuly pred desatinnou čiarkou)?`, answer: k + 1 },
          { q: T`Koľko číslic zostane od prvej nenulovej číslice po koniec zápisu?`, answer: n }
        ];
      }
      return ex;
    }
    if (t < 0.55) {
      // násobenie a delenie: rozhoduje najmenší počet platných číslic
      let a, b, q, sol;
      if (Math.random() < 0.5) {
        a = rnd(101, 999) / 10; b = rnd(11, 99) / 10;
        q = T`Teleso prešlo dráhu $s = ${tx(a, 1)}\\,\\text{m}$ za čas $t = ${tx(b, 1)}\\,\\text{s}$. Vypočítaj jeho priemernú rýchlosť v m/s a zaokrúhli ju na správny počet platných číslic.`;
        sol = (raw, ans) => T`$v = \\frac{s}{t} = \\frac{${tx(a, 1)}}{${tx(b, 1)}} = ${tx(raw, 4)}\\ldots\\,\\text{m/s}$. Najmenej presný údaj $t$ má 2 platné číslice, preto $v \\approx ${ans}\\,\\text{m/s}$.`;
      } else {
        a = rnd(101, 999); b = rnd(11, 99);
        if (a % 10 === 0) a += 1;
        if (b % 10 === 0) b += 1;
        q = T`Teleso má hmotnosť $m = ${a}\\,\\text{g}$ a objem $V = ${b}\\,\\text{cm}^3$. Vypočítaj jeho hustotu v g/cm³ a zaokrúhli ju na správny počet platných číslic.`;
        sol = (raw, ans) => T`$\\rho = \\frac{m}{V} = \\frac{${a}}{${b}} = ${tx(raw, 4)}\\ldots\\,\\text{g/cm}^3$. Najmenej presný údaj $V$ má 2 platné číslice, preto $\\rho \\approx ${ans}\\,\\text{g/cm}^3$.`;
      }
      const raw = a / b, ans = sig(raw, 2);
      return {
        q, answer: ans, tol: 1e-9,
        solution: sol(raw, sigTx(raw, 2)),
        hint: T`Pri násobení a delení má výsledok toľko platných číslic ako najmenej presný údaj.`,
        mistakes: keep([
          { value: sig(raw, 4), msg: T`To je neupravený výsledok z kalkulačky. Zaokrúhli ho na toľko platných číslic, koľko má najmenej presný údaj.` },
          { value: sig(raw, 3), msg: T`Výsledok sa zaokrúhlil na 3 platné číslice podľa presnejšieho údaja. Rozhoduje najmenej presný údaj, ktorý má len 2 platné číslice.` },
          { value: sig(raw, 1), msg: T`Zaokrúhlilo sa príliš hrubo, na 1 platnú číslicu. Najmenej presný údaj má 2 platné číslice.` }
        ], ans, 1e-9),
        steps: [
          { q: T`Koľko platných číslic má najmenej presný údaj?`, answer: 2 },
          { q: T`Vypočítaj podiel a zaokrúhli ho na 2 platné číslice.`, answer: ans, tol: 1e-9 }
        ]
      };
    }
    if (t < 0.8) {
      // sčítanie: rozhoduje najmenší počet desatinných miest
      let a = rnd(1001, 4999);
      if (a % 10 === 0) a += 1;
      const b = rnd(11, 99), N = a + 10 * b;
      const exact = N / 100, ans = Math.round(N / 10) / 10;
      return {
        q: T`Dve tyče položené za sebou majú dĺžky $l_1 = ${tx(a / 100, 2)}\\,\\text{m}$ a $l_2 = ${tx(b / 10, 1)}\\,\\text{m}$. Aká je ich celková dĺžka v metroch, správne zaokrúhlená?`,
        answer: ans, tol: 1e-9,
        solution: T`$l = ${tx(a / 100, 2)} + ${tx(b / 10, 1)} = ${tx(exact, 2)}\\,\\text{m}$. Údaj $l_2$ má len jedno desatinné miesto, preto $l \\approx ${tx(ans, 1)}\\,\\text{m}$.`,
        hint: T`Pri sčítaní má výsledok toľko desatinných miest ako údaj s ich najmenším počtom.`,
        mistakes: keep([
          { value: exact, msg: T`To je nezaokrúhlený súčet. Pri sčítaní má výsledok toľko desatinných miest ako údaj s ich najmenším počtom, tu jedno.` },
          { value: sig(exact, 2), msg: T`Zaokrúhlilo sa podľa počtu platných číslic. To platí pri násobení a delení, pri sčítaní rozhoduje počet desatinných miest.` }
        ], ans, 1e-9),
        steps: [
          { q: T`Aký je presný súčet $${tx(a / 100, 2)} + ${tx(b / 10, 1)}$?`, answer: exact, tol: 1e-9 },
          { q: T`Na koľko desatinných miest sa zaokrúhli výsledok?`, answer: 1 },
          { q: T`Zaokrúhli súčet na 1 desatinné miesto.`, answer: ans, tol: 1e-9 }
        ]
      };
    }
    // vedecký zápis: exponent
    let m = rnd(11, 99);
    if (m % 10 === 0) m += 1;
    const n = pick([-6, -5, -4, -3, -2, 3, 4, 5, 6]), sep = dec(), a = m / 10;
    const str = n < 0 ? '0{' + sep + '}' + '0'.repeat(-n - 1) + m : m + '0'.repeat(n - 1);
    return {
      signed: true,
      q: T`Zapíš údaj $${str}\\,\\text{${unit}}$ vo vedeckom zápise $a\\cdot 10^n$, kde $1\\le a<10$. Aký je exponent $n$?`,
      answer: n,
      solution: T`$${str} = ${tx(a, 1)}\\cdot 10^{${n}}$. ${n < 0 ? T`Desatinná čiarka sa posúva doprava, preto je exponent záporný.` : T`Desatinná čiarka sa posúva doľava, preto je exponent kladný.`}`,
      hint: T`Exponent udáva, o koľko miest sa posunie desatinná čiarka, aby pred ňou zostala jedna nenulová číslica.`,
      mistakes: keep([
        n < 0
          ? { value: n + 1, msg: T`Zrátali sa len nuly za desatinnou čiarkou. Čiarka sa posúva až za prvú nenulovú číslicu, teda o jedno miesto viac.` }
          : { value: n - 1, msg: T`Zrátali sa len nuly na konci. Exponent udáva, o koľko miest sa posunie desatinná čiarka, aby pred ňou zostala jedna číslica.` }
      ], n),
      steps: [
        { q: T`Aké je číslo $a$ (jedna nenulová číslica pred desatinnou čiarkou)?`, answer: a, tol: 1e-9 },
        { q: T`O koľko miest sa posunula desatinná čiarka? Zadaj exponent $n$ (posun doľava je kladný, doprava záporný).`, answer: n, signed: true }
      ]
    };
  });

  /* ---------- 2. chyby merania ---------- */

  lesson({
    id: 's1-chyby-merania', order: 14, theme: 'matematika',
    title: 'Chyby merania',
    summary: 'Hrubé, systematické a náhodné chyby, presnosť meradla, absolútna a relatívna odchýlka.',
    theory: [
      `<p>Žiadne meranie nie je dokonalé. Rozdiel medzi nameranou hodnotou $x$ a skutočnou (správnou) hodnotou $x_0$ je <strong>chyba merania</strong>. Skutočnú hodnotu zvyčajne nepoznáme, preto chyby rozlišujeme podľa ich pôvodu a podľa toho, ako ovplyvňujú výsledok.</p>`,
      `<ul>
         <li><strong>Hrubá chyba</strong> vzniká omylom: zle odčítaná stupnica, preklep pri zápise, nesprávny rozsah prístroja. Taká hodnota sa výrazne líši od ostatných a zo spracovania ju vylúčime.</li>
         <li><strong>Systematická chyba</strong> posúva všetky merania rovnakým smerom: nevynulovaná váha, pohľad na stupnicu zboku, nepresne ciachované meradlo. Opakovaním merania sa nezmenší, treba odstrániť jej príčinu alebo výsledok opraviť.</li>
         <li><strong>Náhodná chyba</strong> mení výsledok raz nahor, raz nadol: reakčný čas, chvenie ruky, kolísanie podmienok. Jej vplyv zmenšíme opakovaním merania a spriemerovaním.</li>
       </ul>`,
      `<p>Rozlišujeme <strong>presnosť</strong> (opakované merania sú blízko seba) a <strong>správnosť</strong> (ich priemer je blízko skutočnej hodnoty). Náhodné chyby zhoršujú presnosť, systematické správnosť. Aj samotné meradlo má obmedzenú presnosť: pri dielikovom meradle odhadujeme jeho chybu na polovicu najmenšieho dielika, pri digitálnom na jednotku poslednej zobrazenej číslice, ak výrobca neuvádza inak.</p>`,
      `<p><strong>Absolútna odchýlka</strong> $\\Delta x = |x - x_0|$ má jednotku veličiny. <strong>Relatívna odchýlka</strong> $\\delta = \\frac{\\Delta x}{x_0}$ je bez jednotky a často sa udáva v percentách. Až relatívna odchýlka ukáže, aké dobré meranie bolo: odchýlka $1\\,\\text{mm}$ je veľká pri hrúbke drôtu, ale zanedbateľná pri dĺžke chodby.</p>`,
      { fig: 'neistoty-terc', caption: 'Presnosť a správnosť na terči: zásahy blízko seba sú presné, zásahy rozložené okolo stredu sú správne v priemere. Systematická chyba posúva celú skupinu mimo stred.' }
    ],
    examples: [
      { task: 'Pri určovaní tiažového zrýchlenia vyšlo $g = 9{,}62\\,\\text{m/s}^2$. Tabuľková hodnota je $g_0 = 9{,}81\\,\\text{m/s}^2$. Urči absolútnu a relatívnu odchýlku.',
        steps: ['$\\Delta g = |9{,}62 - 9{,}81| = 0{,}19\\,\\text{m/s}^2$.', '$\\delta = \\frac{0{,}19}{9{,}81} \\approx 0{,}019 = 1{,}9\\,\\%$.', '<strong>Výsledok: $\\Delta g = 0{,}19\\,\\text{m/s}^2$, $\\delta \\approx 1{,}9\\,\\%$</strong>'] },
      { task: 'Pravítkom s najmenším dielikom $1\\,\\text{mm}$ sa namerala dĺžka zošita $l = 250\\,\\text{mm}$ a hrúbka drôtu $d = 2\\,\\text{mm}$. Ktoré meranie je relatívne presnejšie?',
        steps: ['Chyba meradla je polovica dielika, $\\Delta = 0{,}5\\,\\text{mm}$ pri oboch meraniach.', 'Dĺžka: $\\delta_l = \\frac{0{,}5}{250} = 0{,}2\\,\\%$. Hrúbka: $\\delta_d = \\frac{0{,}5}{2} = 25\\,\\%$.', '<strong>Výsledok: meranie dĺžky je relatívne oveľa presnejšie. Tenké predmety treba merať citlivejším meradlom, napríklad mikrometrom.</strong>'] }
    ]
  });

  // situácie na rozlíšenie druhu chyby: [text, druh]
  const SCENES = [
    ['Digitálna váha ukazuje $0{,}3\\,\\text{g}$ aj vtedy, keď na nej nič neleží, a pred meraním ju nikto nevynuloval.', 'sys'],
    ['Ručičkový voltmeter sa pri každom meraní odčítava zboku pod rovnakým uhlom, takže všetky údaje vychádzajú o kúsok väčšie.', 'sys'],
    ['Kovové pásmo sa na slnku roztiahlo, takže všetky namerané dĺžky vychádzajú o trochu menšie.', 'sys'],
    ['Pri opakovanom meraní periódy kyvadla stopkami vychádzajú časy raz o trochu dlhšie, raz kratšie, podľa reakcie pri stláčaní.', 'nah'],
    ['Údaj citlivého teplomera v miestnosti sa pri odčítaní nepravidelne mení o pár stotín stupňa nahor aj nadol.', 'nah'],
    ['Do tabuľky sa namiesto nameraných $12{,}5\\,\\text{cm}$ zapísalo $21{,}5\\,\\text{cm}$.', 'hrub'],
    ['Ampérmeter bol prepnutý na iný rozsah, než z ktorého sa odčítala hodnota, takže zapísaný údaj je desaťkrát väčší.', 'hrub']
  ];

  gen('s1-chyby-merania', () => {
    const t = Math.random();
    if (t < 0.4) {
      // druh chyby
      const [scene, kind] = pick(SCENES);
      const name = { sys: T`systematická chyba`, nah: T`náhodná chyba`, hrub: T`hrubá chyba` };
      const why = {
        sys: { nah: T`Náhodná chyba mení výsledok raz nahor, raz nadol. Tu sa každé meranie posúva rovnakým smerom, to je systematická chyba.`,
          hrub: T`Hrubá chyba je jednorazový omyl. Tu sa chyba opakuje pri každom meraní rovnako, je teda systematická.` },
        nah: { sys: T`Systematická chyba posúva výsledky stále rovnakým smerom. Tu sa hodnoty nepravidelne menia oboma smermi.`,
          hrub: T`Hrubá chyba je výrazný omyl jedného merania. Malé kolísanie hodnôt oboma smermi je náhodná chyba.` },
        hrub: { sys: T`Systematická chyba ovplyvní všetky merania rovnako. Tu ide o jednorazový omyl, ktorý dá úplne odlišnú hodnotu.`,
          nah: T`Náhodná chyba je malé kolísanie výsledkov. Omyl pri odčítaní alebo zápise je hrubá chyba a takú hodnotu treba vylúčiť.` }
      };
      const sol = {
        sys: T`Chyba posúva všetky merania rovnakým smerom a opakovaním sa nezmenší, je to systematická chyba.`,
        nah: T`Hodnoty kolíšu nepravidelne oboma smermi, je to náhodná chyba. Jej vplyv zmenší opakovanie merania a priemer.`,
        hrub: T`Ide o jednorazový omyl, ktorý dá výrazne odlišnú hodnotu, je to hrubá chyba. Takú hodnotu zo spracovania vylúčime.`
      };
      const choiceHints = {};
      Object.keys(why[kind]).forEach((k) => { choiceHints[name[k]] = why[kind][k]; });
      return {
        type: 'choice',
        q: T.s(scene) + ' ' + T`O aký druh chyby merania ide?`,
        options: shuffle([name.sys, name.nah, name.hrub]),
        answer: name[kind],
        solution: sol[kind],
        hint: T`Opakuje sa chyba rovnako pri každom meraní, mení sa náhodne, alebo ide o jednorazový omyl?`,
        choiceHints
      };
    }
    if (t < 0.75) {
      // relatívna odchýlka od tabuľkovej hodnoty
      const it = pick([
        { s: 'g', ref: 9.81, d: 2, u: '\\text{m/s}^2' },
        { s: 'v', ref: 343, d: 0, u: '\\text{m/s}' },
        { s: '\\rho', ref: 1000, d: 0, u: '\\text{kg/m}^3' },
        { s: 'c', ref: 4180, d: 0, u: '\\text{J/(kg}\\cdot\\text{K)}' }
      ]);
      let meas;
      do { meas = rd(it.ref * (1 + pick([-1, 1]) * rnd(5, 60) / 1000), it.d); } while (meas === it.ref);
      const abs = rd(Math.abs(meas - it.ref), it.d), rel = abs / it.ref * 100;
      const intro = it.s === 'v' ? T`Rýchlosť zvuku vo vzduchu má tabuľkovú hodnotu` : it.s === 'g' ? T`Tiažové zrýchlenie má tabuľkovú hodnotu`
        : it.s === 'c' ? T`Merná tepelná kapacita vody má tabuľkovú hodnotu` : T`Hustota vody má tabuľkovú hodnotu`;
      return {
        q: intro + ' ' + T`$${it.s}_0 = ${tx(it.ref, it.d)}\\,${it.u}$, meraním vyšlo $${it.s} = ${tx(meas, it.d)}\\,${it.u}$. Aká je relatívna odchýlka merania v percentách? (zaokrúhli na 1 desatinné miesto)`,
        answer: rd(rel, 1), tol: 0.051,
        solution: T`$\\Delta = |${tx(meas, it.d)} - ${tx(it.ref, it.d)}| = ${tx(abs, it.d)}\\,${it.u}$, $\\delta = \\frac{${tx(abs, it.d)}}{${tx(it.ref, it.d)}}\\cdot 100\\,\\% \\approx ${tx(rel, 1)}\\,\\%$.`,
        hint: T`Relatívna odchýlka je absolútna odchýlka delená tabuľkovou (správnou) hodnotou, v percentách ešte krát 100.`,
        mistakes: keep([
          { value: abs / meas * 100, msg: T`Delilo sa nameranou hodnotou. Relatívna odchýlka sa vzťahuje na správnu (tabuľkovú) hodnotu.` },
          { value: abs / it.ref, msg: T`To je relatívna odchýlka ako desatinné číslo. Na percentá ju ešte vynásob číslom 100.` },
          { value: abs, msg: T`To je absolútna odchýlka v jednotkách veličiny. Relatívna odchýlka je jej podiel s tabuľkovou hodnotou.` }
        ], rel, 0.11),
        steps: [
          { q: T`Aká je absolútna odchýlka $\\Delta = |${it.s} - ${it.s}_0|$?`, answer: abs, tol: 1e-6 },
          { q: T`Koľko percent tabuľkovej hodnoty je táto odchýlka? (na 1 desatinné miesto)`, answer: rd(rel, 1), tol: 0.051 }
        ]
      };
    }
    // relatívna chyba spôsobená meradlom
    const it = pick([
      { u: '\\text{mm}', dv: 1 },
      { u: '\\text{ml}', dv: pick([1, 2, 5]) },
      { u: '{}^\\circ\\text{C}', dv: pick([1, 2]) }
    ]);
    const x = it.dv * rnd(Math.ceil(12 / it.dv), Math.floor(180 / it.dv));
    const delta = it.dv / 2, rel = delta / x * 100;
    return {
      q: T`Dielikovým meradlom s najmenším dielikom $${it.dv}\\,${it.u}$ sa namerala hodnota $${x}\\,${it.u}$. Aká je relatívna chyba merania spôsobená meradlom v percentách? (zaokrúhli na 2 desatinné miesta)`,
      answer: rd(rel, 2), tol: 0.0051,
      solution: T`Chyba meradla je polovica dielika: $\\Delta = ${tx(delta, 1)}\\,${it.u}$. Relatívna chyba je $\\delta = \\frac{${tx(delta, 1)}}{${x}}\\cdot 100\\,\\% \\approx ${tx(rel, 2)}\\,\\%$.`,
      hint: T`Chyba dielikového meradla je polovica najmenšieho dielika. Vydeľ ju nameranou hodnotou.`,
      mistakes: keep([
        { value: it.dv / x * 100, msg: T`Za chybu meradla sa vzal celý dielik. Pri dielikovom meradle je to polovica najmenšieho dielika.` },
        { value: delta / x, msg: T`To je relatívna chyba ako desatinné číslo. Na percentá ju ešte vynásob číslom 100.` }
      ], rel, 0.011),
      steps: [
        { q: T`Aká je chyba meradla $\\Delta$ (polovica najmenšieho dielika)?`, answer: delta, tol: 1e-6 },
        { q: T`Koľko percent nameranej hodnoty je $\\Delta$? (na 2 desatinné miesta)`, answer: rd(rel, 2), tol: 0.0051 }
      ]
    };
  });

  /* ---------- 3. spracovanie opakovaného merania ---------- */

  lesson({
    id: 's1-opakovane-meranie', order: 16, theme: 'matematika',
    title: 'Spracovanie opakovaného merania',
    summary: 'Aritmetický priemer, štandardná neistota typu A a B, kombinovaná neistota a zápis výsledku.',
    theory: [
      `<p>Ak meranie zopakujeme $n$-krát a dostaneme hodnoty $x_1, x_2, \\ldots, x_n$, najlepším odhadom veličiny je <strong>aritmetický priemer</strong> $\\bar x = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$. <strong>Odchýlky</strong> jednotlivých meraní od priemeru $x_i - \\bar x$ majú súčet nula a ukazujú, ako sú merania rozptýlené.</p>`,
      `<p><strong>Štandardná neistota typu A</strong> sa určí štatisticky z rozptylu meraní. Je to smerodajná odchýlka aritmetického priemeru: $$u_A = \\sqrt{\\frac{\\sum (x_i - \\bar x)^2}{n(n-1)}}.$$ Smerodajná odchýlka jedného merania je $s = \\sqrt{\\frac{\\sum (x_i - \\bar x)^2}{n-1}}$ a platí $u_A = \\frac{s}{\\sqrt{n}}$. Priemer z viacerých meraní je spoľahlivejší než jedno meranie, preto $u_A$ s rastúcim $n$ klesá.</p>`,
      `<p><strong>Štandardná neistota typu B</strong> sa odhadne inak než štatistikou, najčastejšie z presnosti meradla. Ak je najväčšia chyba meradla $\\Delta$ (napríklad polovica dielika), berieme $u_B = \\frac{\\Delta}{\\sqrt{3}}$. <strong>Kombinovaná štandardná neistota</strong> spája obe zložky: $u = \\sqrt{u_A^2 + u_B^2}$. Neistoty sa skladajú v druhých mocninách, nie priamym súčtom.</p>`,
      `<p><strong>Zápis výsledku:</strong> $x = (\\bar x \\pm u)\\,\\text{jednotka}$. Neistotu zaokrúhlime na 1 až 2 platné číslice (na 2, ak by prvou číslicou bola 1 alebo 2) a priemer zaokrúhlime na <em>rovnaký rád</em> ako neistotu. Napríklad $\\bar t = 12{,}3467\\,\\text{s}$ a $u = 0{,}0234\\,\\text{s}$ zapíšeme ako $t = (12{,}347 \\pm 0{,}023)\\,\\text{s}$. Často sa pripája aj relatívna neistota $\\frac{u}{\\bar x}$ v percentách.</p>`,
      { fig: 'neistoty-rozptyl', caption: 'Merania sú rozptýlené okolo priemeru x̄. Pás neistoty priemeru ± u_A je užší než rozptyl jednotlivých meraní ± s, lebo u_A = s/√n.' }
    ],
    examples: [
      { task: 'Perióda kyvadla sa merala päťkrát, vyšlo $2{,}03\\,\\text{s}$, $2{,}07\\,\\text{s}$, $1{,}99\\,\\text{s}$, $2{,}05\\,\\text{s}$ a $2{,}01\\,\\text{s}$. Urči priemer a štandardnú neistotu typu A.',
        steps: ['$\\bar T = \\frac{10{,}15}{5} = 2{,}03\\,\\text{s}$.', 'Odchýlky od priemeru sú $0$, $0{,}04$, $-0{,}04$, $0{,}02$ a $-0{,}02\\,\\text{s}$, súčet ich druhých mocnín je $0{,}0040\\,\\text{s}^2$.', '$u_A = \\sqrt{\\frac{0{,}0040}{5\\cdot 4}} \\approx 0{,}014\\,\\text{s}$.', '<strong>Výsledok: $T = (2{,}030 \\pm 0{,}014)\\,\\text{s}$</strong>'] },
      { task: 'Z opakovaného merania vyšlo $u_A = 0{,}014\\,\\text{s}$. Stopky ukazujú stotiny sekundy a za ich chybu berieme $\\Delta = 0{,}01\\,\\text{s}$. Aká je kombinovaná štandardná neistota?',
        steps: ['$u_B = \\frac{0{,}01}{\\sqrt{3}} \\approx 0{,}0058\\,\\text{s}$.', '$u = \\sqrt{0{,}014^2 + 0{,}0058^2} \\approx 0{,}015\\,\\text{s}$.', '<strong>Výsledok: $u \\approx 0{,}015\\,\\text{s}$, teda $T = (2{,}030 \\pm 0{,}015)\\,\\text{s}$</strong>'] }
    ]
  });

  gen('s1-opakovane-meranie', () => {
    const k = rnd(0, 3);
    if (k <= 1) {
      // namerané hodnoty v desatinách (celé čísla), aby súčty boli presné
      const n = pick([5, 6]), B = rnd(150, 450);
      let d;
      do { d = Array.from({ length: n }, () => rnd(-3, 3)); } while (d.every((x) => x === d[0]));
      const v = d.map((x) => B + x), sumI = v.reduce((a, b) => a + b, 0);
      const sum = sumI / 10, mean = sumI / 10 / n;
      const S2 = v.reduce((a, x) => a + (x / 10 - mean) ** 2, 0);
      const uA = Math.sqrt(S2 / (n * (n - 1))), sd = Math.sqrt(S2 / (n - 1));
      const list = v.map((x) => `$${tx(x / 10, 1)}$`).join(CONTENT_I18N.listSep());
      const intro = Math.random() < 0.5
        ? T`Dĺžka $l$ sa merala ${n}-krát, vyšli hodnoty v centimetroch: ${list}.`
        : T`Čas desiatich kmitov kyvadla sa meral ${n}-krát, vyšli hodnoty v sekundách: ${list}.`;
      if (k === 0) {
        return {
          q: intro + ' ' + T`Vypočítaj aritmetický priemer (zaokrúhli na 2 desatinné miesta).`,
          answer: rd(mean, 2), tol: 0.0051,
          solution: T`Súčet hodnôt je $${tx(sum, 1)}$, priemer $\\bar x = \\frac{${tx(sum, 1)}}{${n}} \\approx ${tx(mean, 2)}$.`,
          hint: T`Sčítaj všetky namerané hodnoty a súčet vydeľ počtom meraní.`,
          mistakes: keep([
            { value: sum / (n - 1), msg: T`Súčet sa vydelil číslom ${n - 1}. Pri priemere sa delí počtom meraní, teda ${n}.` },
            { value: sum, msg: T`To je súčet všetkých meraní. Priemer vznikne vydelením súčtu počtom meraní.` }
          ], mean, 0.011),
          steps: [
            { q: T`Aký je súčet všetkých nameraných hodnôt?`, answer: sum, tol: 1e-6 },
            { q: T`Vydeľ súčet počtom meraní ${n}. Aký je priemer? (na 2 desatinné miesta)`, answer: rd(mean, 2), tol: 0.0051 }
          ]
        };
      }
      return {
        q: intro + ' ' + T`Vypočítaj štandardnú neistotu typu A aritmetického priemeru (zaokrúhli na 3 desatinné miesta).`,
        answer: rd(uA, 3), tol: 0.00051,
        solution: T`$\\bar x \\approx ${tx(mean, 3)}$, súčet druhých mocnín odchýlok je $\\sum (x_i-\\bar x)^2 \\approx ${tx(S2, 4)}$, preto $u_A = \\sqrt{\\frac{${tx(S2, 4)}}{${n}\\cdot ${n - 1}}} \\approx ${tx(uA, 3)}$.`,
        hint: T`Najprv priemer, potom súčet druhých mocnín odchýlok od priemeru. Ten vydeľ súčinom $n(n-1)$ a odmocni.`,
        mistakes: keep([
          { value: sd, msg: T`To je smerodajná odchýlka jedného merania. Neistota priemeru je ešte $\\sqrt{n}$-krát menšia: v menovateli je $n(n-1)$, nie len $n-1$.` },
          { value: S2 / (n * (n - 1)), msg: T`Zabudlo sa odmocniť. Neistota $u_A$ je odmocnina z podielu.` },
          { value: Math.sqrt(S2 / (n * n)), msg: T`V menovateli má byť $n(n-1)$, nie $n^2$.` }
        ], uA, 0.0011),
        steps: [
          { q: T`Aký je aritmetický priemer? (na 3 desatinné miesta)`, answer: rd(mean, 3), tol: 0.00051 },
          { q: T`Aký je súčet druhých mocnín odchýlok $\\sum (x_i-\\bar x)^2$? (na 3 desatinné miesta)`, answer: rd(S2, 3), tol: 0.00051 },
          { q: T`Aká je neistota $u_A = \\sqrt{\\frac{\\sum (x_i-\\bar x)^2}{${n}\\cdot ${n - 1}}}$? (na 3 desatinné miesta)`, answer: rd(uA, 3), tol: 0.00051 }
        ]
      };
    }
    if (k === 2) {
      // kombinovaná neistota z typu A a z chyby meradla
      const len = Math.random() < 0.5;
      const uA = rnd(2, 15) / 100, delta = len ? 0.05 : 0.01;
      const uB = delta / Math.sqrt(3), u = Math.sqrt(uA ** 2 + uB ** 2);
      const q = len
        ? T`Z opakovaného merania dĺžky vyšla neistota typu A $u_A = ${tx(uA, 2)}\\,\\text{cm}$. Meradlo má milimetrovú stupnicu a za jeho chybu sa berie polovica dielika $\\Delta = ${tx(delta, 2)}\\,\\text{cm}$. Aká je kombinovaná štandardná neistota v centimetroch? (na 3 desatinné miesta)`
        : T`Z opakovaného merania času vyšla neistota typu A $u_A = ${tx(uA, 2)}\\,\\text{s}$. Stopky ukazujú stotiny sekundy a za ich chybu sa berie $\\Delta = ${tx(delta, 2)}\\,\\text{s}$. Aká je kombinovaná štandardná neistota v sekundách? (na 3 desatinné miesta)`;
      return {
        q, answer: rd(u, 3), tol: 0.00051,
        solution: T`$u_B = \\frac{${tx(delta, 2)}}{\\sqrt{3}} \\approx ${tx(uB, 4)}$, $u = \\sqrt{${tx(uA, 2)}^2 + ${tx(uB, 4)}^2} \\approx ${tx(u, 3)}$.`,
        hint: T`Z chyby meradla vypočítaj $u_B = \\frac{\\Delta}{\\sqrt{3}}$ a potom $u = \\sqrt{u_A^2 + u_B^2}$.`,
        mistakes: keep([
          { value: uA + uB, msg: T`Neistoty sa sčítali priamo. Nezávislé zložky sa skladajú v druhých mocninách: $u=\\sqrt{u_A^2+u_B^2}$.` },
          { value: Math.sqrt(uA ** 2 + delta ** 2), msg: T`Za $u_B$ sa dosadila celá chyba meradla $\\Delta$. Štandardná neistota typu B je $u_B=\\frac{\\Delta}{\\sqrt{3}}$.` }
        ], u, 0.0011),
        steps: [
          { q: T`Aká je neistota typu B $u_B = \\frac{\\Delta}{\\sqrt{3}}$? (na 4 desatinné miesta)`, answer: rd(uB, 4), tol: 0.000051 },
          { q: T`Aká je kombinovaná neistota $u = \\sqrt{u_A^2 + u_B^2}$? (na 3 desatinné miesta)`, answer: rd(u, 3), tol: 0.00051 }
        ]
      };
    }
    // zaokrúhlenie výsledku: neistota na 2 platné číslice, priemer na rovnaký rád
    const D = rnd(2, 3), unit = pick(['s', 'cm', 'g']);
    const ui = rnd(1001, 4999), mi = rnd(100000, 999999);
    const uRaw = ui / 10 ** (D + 2), mRaw = mi / 10 ** (D + 2);
    const ur = Math.round(ui / 100) / 10 ** D, mr = Math.round(mi / 100) / 10 ** D;
    return {
      q: T`Spracovaním merania vyšiel priemer $\\bar x = ${tx(mRaw, D + 2)}\\,\\text{${unit}}$ a kombinovaná neistota $u = ${tx(uRaw, D + 2)}\\,\\text{${unit}}$. Neistotu zaokrúhli na 2 platné číslice a priemer na rovnaký rád. Aký je zaokrúhlený priemer?`,
      answer: mr, tol: 1e-9,
      solution: T`$u \\approx ${tx(ur, D)}\\,\\text{${unit}}$ končí na ${D}. desatinnom mieste, preto $\\bar x \\approx ${tx(mr, D)}\\,\\text{${unit}}$. Výsledok: $x = (${tx(mr, D)} \\pm ${tx(ur, D)})\\,\\text{${unit}}$.`,
      hint: T`Najprv zaokrúhli neistotu. Jej posledná číslica určí, na koľko desatinných miest sa zaokrúhli priemer.`,
      mistakes: keep([
        { value: mRaw, msg: T`Priemer zostal nezaokrúhlený. Zapisuje sa len na rovnaký rád ako neistota, ďalšie číslice nemajú význam.` },
        { value: Math.round(mi / 10) / 10 ** (D + 1), msg: T`Priemer má o jedno desatinné miesto viac než neistota. Posledná číslica priemeru má byť na rovnakom mieste ako posledná číslica neistoty.` },
        { value: Math.round(mi / 1000) / 10 ** (D - 1), msg: T`Priemer sa zaokrúhlil príliš hrubo. Posledná číslica priemeru má byť na rovnakom mieste ako posledná číslica neistoty.` }
      ], mr, 1e-9),
      steps: [
        { q: T`Zaokrúhli neistotu na 2 platné číslice.`, answer: ur, tol: 1e-9 },
        { q: T`Na koľko desatinných miest je zaokrúhlená neistota?`, answer: D },
        { q: T`Zaokrúhli priemer na ${D} desatinné miesta.`, answer: mr, tol: 1e-9 }
      ]
    };
  });

  /* ---------- 4. šírenie neistôt ---------- */

  lesson({
    id: 's1-sirenie-neistot', order: 18, theme: 'matematika',
    title: 'Šírenie neistôt',
    summary: 'Neistota veličiny vypočítanej zo vzorca: súčet, rozdiel, súčin, podiel a mocnina.',
    theory: [
      `<p>Mnohé veličiny nemeriame priamo, ale <strong>vypočítame</strong> zo vzorca: hustotu z hmotnosti a objemu, rýchlosť z dráhy a času. Neistoty vstupných údajov sa prenesú do výsledku. Ak sú vstupné veličiny nezávislé, ich príspevky sa skladajú <strong>v druhých mocninách</strong> (kvadraticky). Priamy súčet neistôt by dal len hornú, príliš opatrnú hranicu.</p>`,
      `<p><strong>Súčet a rozdiel</strong> $y = a + b$ alebo $y = a - b$: skladajú sa <em>absolútne</em> neistoty, $u_y = \\sqrt{u_a^2 + u_b^2}$. Aj pri rozdiele sa neistoty skladajú, nikdy sa neodčítajú. Pri rozdiele dvoch blízkych hodnôt preto môže byť relatívna neistota výsledku veľká.</p>`,
      `<p><strong>Súčin a podiel</strong> $y = a\\cdot b$ alebo $y = \\frac{a}{b}$: skladajú sa <em>relatívne</em> neistoty, $\\frac{u_y}{y} = \\sqrt{\\left(\\frac{u_a}{a}\\right)^2 + \\left(\\frac{u_b}{b}\\right)^2}$. Absolútnu neistotu dostaneme spätne: $u_y = y\\cdot\\frac{u_y}{y}$.</p>`,
      `<p><strong>Mocnina</strong> $y = a^k$: relatívna neistota sa násobí exponentom, $\\frac{u_y}{y} = |k|\\,\\frac{u_a}{a}$, lebo všetky činitele sú tá istá nameraná hodnota. Pri objeme kocky $V = a^3$ je relatívna neistota trikrát väčšia než pri hrane. Pri tiažovom zrýchlení z kyvadla $g = \\frac{4\\pi^2 l}{T^2}$ platí $\\frac{u_g}{g} = \\sqrt{\\left(\\frac{u_l}{l}\\right)^2 + \\left(2\\,\\frac{u_T}{T}\\right)^2}$, preto treba periódu merať obzvlášť presne, napríklad ako čas desiatich kmitov.</p>`
    ],
    examples: [
      { task: 'Hmotnosť telesa je $m = (84{,}0 \\pm 0{,}2)\\,\\text{g}$ a jeho objem $V = (31{,}0 \\pm 0{,}5)\\,\\text{cm}^3$. Urči hustotu aj s neistotou.',
        steps: ['$\\rho = \\frac{84{,}0}{31{,}0} \\approx 2{,}710\\,\\text{g/cm}^3$.', 'Relatívne neistoty sú $\\frac{0{,}2}{84{,}0} \\approx 0{,}24\\,\\%$ a $\\frac{0{,}5}{31{,}0} \\approx 1{,}61\\,\\%$.', '$\\frac{u_\\rho}{\\rho} = \\sqrt{0{,}24^2 + 1{,}61^2}\\,\\% \\approx 1{,}63\\,\\%$, teda $u_\\rho \\approx 2{,}710\\cdot 0{,}0163 \\approx 0{,}044\\,\\text{g/cm}^3$.', '<strong>Výsledok: $\\rho = (2{,}710 \\pm 0{,}044)\\,\\text{g/cm}^3$</strong>'] },
      { task: 'Dĺžka kyvadla je $l = (1{,}000 \\pm 0{,}002)\\,\\text{m}$ a jeho perióda $T = (2{,}006 \\pm 0{,}004)\\,\\text{s}$. Urči tiažové zrýchlenie $g$ a jeho neistotu.',
        steps: ['$g = \\frac{4\\pi^2\\cdot 1{,}000}{2{,}006^2} \\approx 9{,}811\\,\\text{m/s}^2$.', '$\\frac{u_l}{l} = 0{,}20\\,\\%$ a $\\frac{u_T}{T} \\approx 0{,}20\\,\\%$. Perióda je v druhej mocnine, preto jej príspevok je $2\\cdot 0{,}20\\,\\% = 0{,}40\\,\\%$.', '$\\frac{u_g}{g} = \\sqrt{0{,}20^2 + 0{,}40^2}\\,\\% \\approx 0{,}45\\,\\%$, teda $u_g \\approx 9{,}811\\cdot 0{,}0045 \\approx 0{,}044\\,\\text{m/s}^2$.', '<strong>Výsledok: $g = (9{,}811 \\pm 0{,}044)\\,\\text{m/s}^2$</strong>'] }
    ]
  });

  gen('s1-sirenie-neistot', () => {
    const k = rnd(0, 4);
    if (k === 0) {
      // hustota: relatívna neistota podielu
      const m = rnd(400, 1600) / 10, um = pick([0.1, 0.2, 0.5]);
      const V = rnd(100, 600) / 10, uV = pick([0.2, 0.5, 1]);
      const dm = um / m * 100, dV = uV / V * 100, rel = Math.hypot(dm, dV);
      return {
        q: T`Hmotnosť telesa je $m = (${tx(m, 1)} \\pm ${tx(um, 1)})\\,\\text{g}$ a jeho objem $V = (${tx(V, 1)} \\pm ${tx(uV, 1)})\\,\\text{cm}^3$. Aká je relatívna štandardná neistota hustoty $\\rho = \\frac{m}{V}$ v percentách? (na 1 desatinné miesto)`,
        answer: rd(rel, 1), tol: 0.051,
        solution: T`$\\frac{u_m}{m} = \\frac{${tx(um, 1)}}{${tx(m, 1)}} \\approx ${tx(dm, 2)}\\,\\%$, $\\frac{u_V}{V} = \\frac{${tx(uV, 1)}}{${tx(V, 1)}} \\approx ${tx(dV, 2)}\\,\\%$, $\\frac{u_\\rho}{\\rho} = \\sqrt{${tx(dm, 2)}^2 + ${tx(dV, 2)}^2}\\,\\% \\approx ${tx(rel, 1)}\\,\\%$.`,
        hint: T`Pri podiele sa skladajú relatívne neistoty v druhých mocninách.`,
        mistakes: keep([
          { value: dm + dV, msg: T`Relatívne neistoty sa sčítali priamo. Pri nezávislých veličinách sa skladajú ich druhé mocniny: $\\sqrt{\\delta_m^2+\\delta_V^2}$.` },
          { value: Math.sqrt(Math.abs(dV ** 2 - dm ** 2)), msg: T`Neistoty sa pri podiele neodčítavajú. Aj pri delení sa druhé mocniny relatívnych neistôt sčítajú.` },
          { value: Math.hypot(um, uV), msg: T`Skladali sa absolútne neistoty. Pri súčine a podiele sa skladajú relatívne neistoty, nie absolútne.` }
        ], rel, 0.11),
        steps: [
          { q: T`Aká je relatívna neistota hmotnosti v percentách? (na 2 desatinné miesta)`, answer: rd(dm, 2), tol: 0.0051 },
          { q: T`Aká je relatívna neistota objemu v percentách? (na 2 desatinné miesta)`, answer: rd(dV, 2), tol: 0.0051 },
          { q: T`Aká je relatívna neistota hustoty $\\sqrt{\\delta_m^2+\\delta_V^2}$ v percentách? (na 1 desatinné miesto)`, answer: rd(rel, 1), tol: 0.051 }
        ]
      };
    }
    if (k === 1) {
      // rýchlosť: absolútna neistota podielu
      const s = rnd(500, 1500) / 10, us = pick([0.1, 0.2, 0.5]);
      const t = rnd(50, 250) / 10, ut = pick([0.1, 0.2]);
      const v = s / t, dv = Math.hypot(us / s, ut / t), uv = v * dv;
      return {
        q: T`Teleso prešlo dráhu $s = (${tx(s, 1)} \\pm ${tx(us, 1)})\\,\\text{m}$ za čas $t = (${tx(t, 1)} \\pm ${tx(ut, 1)})\\,\\text{s}$. Aká je štandardná neistota jeho priemernej rýchlosti $v = \\frac{s}{t}$ v m/s? (na 2 desatinné miesta)`,
        answer: rd(uv, 2), tol: 0.006,
        solution: T`$v = \\frac{${tx(s, 1)}}{${tx(t, 1)}} \\approx ${tx(v, 3)}\\,\\text{m/s}$, $\\frac{u_v}{v} = \\sqrt{\\left(\\frac{${tx(us, 1)}}{${tx(s, 1)}}\\right)^2 + \\left(\\frac{${tx(ut, 1)}}{${tx(t, 1)}}\\right)^2} \\approx ${tx(dv * 100, 2)}\\,\\%$, $u_v \\approx ${tx(uv, 2)}\\,\\text{m/s}$.`,
        hint: T`Vypočítaj rýchlosť, potom relatívnu neistotu podielu a nakoniec $u_v = v\\cdot\\frac{u_v}{v}$.`,
        mistakes: keep([
          { value: us + ut, msg: T`Sčítali sa absolútne neistoty dráhy a času. Pri podiele sa skladajú relatívne neistoty a z nich sa potom vypočíta $u_v = v\\cdot\\frac{u_v}{v}$.` },
          { value: v * (us / s + ut / t), msg: T`Relatívne neistoty sa sčítali priamo. Nezávislé príspevky sa skladajú v druhých mocninách.` },
          { value: dv * 100, msg: T`To je relatívna neistota v percentách. Úloha sa pýta na absolútnu neistotu v m/s: $u_v = v\\cdot\\frac{u_v}{v}$.` }
        ], uv, 0.013),
        steps: [
          { q: T`Aká je rýchlosť $v = \\frac{s}{t}$ v m/s? (na 3 desatinné miesta)`, answer: rd(v, 3), tol: 0.00051 },
          { q: T`Aká je relatívna neistota rýchlosti v percentách? (na 2 desatinné miesta)`, answer: rd(dv * 100, 2), tol: 0.0051 },
          { q: T`Aká je absolútna neistota $u_v$ v m/s? (na 2 desatinné miesta)`, answer: rd(uv, 2), tol: 0.006 }
        ]
      };
    }
    if (k === 2) {
      // rozdiel teplôt: absolútne neistoty sa skladajú aj pri rozdiele
      const t1 = rnd(150, 300) / 10, t2 = rd(t1 + rnd(30, 400) / 10, 1);
      const u1 = pick([0.1, 0.2, 0.5]), u2 = pick([0.1, 0.2, 0.5]);
      const s2 = u1 ** 2 + u2 ** 2, u = Math.sqrt(s2);
      return {
        q: T`Teplota vody pred ohrevom bola $t_1 = (${tx(t1, 1)} \\pm ${tx(u1, 1)})\\,{}^\\circ\\text{C}$ a po ohreve $t_2 = (${tx(t2, 1)} \\pm ${tx(u2, 1)})\\,{}^\\circ\\text{C}$. Aká je štandardná neistota zmeny teploty $\\Delta t = t_2 - t_1$ v °C? (na 2 desatinné miesta)`,
        answer: rd(u, 2), tol: 0.0051,
        solution: T`$\\Delta t = ${tx(t2 - t1, 1)}\\,{}^\\circ\\text{C}$, $u = \\sqrt{${tx(u1, 1)}^2 + ${tx(u2, 1)}^2} \\approx ${tx(u, 2)}\\,{}^\\circ\\text{C}$.`,
        hint: T`Pri súčte aj rozdiele sa skladajú absolútne neistoty v druhých mocninách.`,
        mistakes: keep([
          { value: Math.abs(u2 - u1), msg: T`Neistoty sa odčítali. Pri rozdiele sa neistoty nikdy neodčítajú, skladajú sa rovnako ako pri súčte: $u=\\sqrt{u_1^2+u_2^2}$.` },
          { value: u1 + u2, msg: T`Neistoty sa sčítali priamo. Nezávislé neistoty sa skladajú v druhých mocninách: $u=\\sqrt{u_1^2+u_2^2}$.` }
        ], u, 0.011),
        steps: [
          { q: T`Koľko je $u_1^2 + u_2^2$? (na 2 desatinné miesta)`, answer: rd(s2, 2), tol: 0.0051 },
          { q: T`Aká je neistota $u = \\sqrt{u_1^2+u_2^2}$? (na 2 desatinné miesta)`, answer: rd(u, 2), tol: 0.0051 }
        ]
      };
    }
    if (k === 3) {
      // objem kocky: mocnina
      const a = rnd(200, 600) / 10, ua = pick([0.1, 0.2, 0.5]);
      const da = ua / a * 100, rel = 3 * da;
      return {
        q: T`Hrana kocky je $a = (${tx(a, 1)} \\pm ${tx(ua, 1)})\\,\\text{mm}$. Aká je relatívna štandardná neistota objemu $V = a^3$ v percentách? (na 2 desatinné miesta)`,
        answer: rd(rel, 2), tol: 0.0051,
        solution: T`$\\frac{u_a}{a} = \\frac{${tx(ua, 1)}}{${tx(a, 1)}} \\approx ${tx(da, 3)}\\,\\%$, pri tretej mocnine $\\frac{u_V}{V} = 3\\cdot\\frac{u_a}{a} \\approx ${tx(rel, 2)}\\,\\%$.`,
        hint: T`Pri mocnine $a^k$ sa relatívna neistota násobí exponentom $k$.`,
        mistakes: keep([
          { value: da, msg: T`Zabudlo sa na exponent. Pri $V=a^3$ sa relatívna neistota hrany násobí tromi.` },
          { value: Math.sqrt(3) * da, msg: T`Hrana sa vzala ako tri nezávislé veličiny skladané v druhých mocninách. Všetky tri činitele sú tá istá hodnota $a$, preto sa relatívna neistota násobí exponentom 3.` }
        ], rel, 0.011),
        steps: [
          { q: T`Aká je relatívna neistota hrany v percentách? (na 3 desatinné miesta)`, answer: rd(da, 3), tol: 0.00051 },
          { q: T`Koľkokrát väčšia je relatívna neistota objemu $V=a^3$?`, answer: 3 },
          { q: T`Aká je relatívna neistota objemu v percentách? (na 2 desatinné miesta)`, answer: rd(rel, 2), tol: 0.0051 }
        ]
      };
    }
    // tiažové zrýchlenie z kyvadla: druhá mocnina periódy
    const l = rnd(400, 1200) / 1000, ul = pick([0.001, 0.002, 0.005]);
    const T0 = rd(2 * Math.PI * Math.sqrt(l / 9.81), 3), uT = pick([0.002, 0.005, 0.01]);
    const dl = ul / l * 100, dT2 = 2 * uT / T0 * 100, rel = Math.hypot(dl, dT2);
    return {
      q: T`Dĺžka kyvadla je $l = (${tx(l, 3)} \\pm ${tx(ul, 3)})\\,\\text{m}$ a jeho perióda $T = (${tx(T0, 3)} \\pm ${tx(uT, 3)})\\,\\text{s}$. Tiažové zrýchlenie sa určí zo vzťahu $g = \\frac{4\\pi^2 l}{T^2}$. Aká je relatívna štandardná neistota $g$ v percentách? (na 2 desatinné miesta)`,
      answer: rd(rel, 2), tol: 0.0051,
      solution: T`$\\frac{u_l}{l} \\approx ${tx(dl, 3)}\\,\\%$, príspevok periódy je $2\\,\\frac{u_T}{T} \\approx ${tx(dT2, 3)}\\,\\%$, spolu $\\frac{u_g}{g} = \\sqrt{${tx(dl, 3)}^2 + ${tx(dT2, 3)}^2}\\,\\% \\approx ${tx(rel, 2)}\\,\\%$.`,
      hint: T`Perióda je v druhej mocnine, preto sa jej relatívna neistota násobí dvomi. Potom slož príspevky v druhých mocninách.`,
      mistakes: keep([
        { value: Math.hypot(dl, dT2 / 2), msg: T`Zabudlo sa na druhú mocninu periódy. Relatívna neistota $T$ sa vo vzťahu pre $g$ násobí dvomi.` },
        { value: dl + dT2, msg: T`Príspevky sa sčítali priamo. Nezávislé príspevky sa skladajú v druhých mocninách.` }
      ], rel, 0.011),
      steps: [
        { q: T`Aká je relatívna neistota dĺžky $\\frac{u_l}{l}$ v percentách? (na 3 desatinné miesta)`, answer: rd(dl, 3), tol: 0.00051 },
        { q: T`Aký je príspevok periódy $2\\,\\frac{u_T}{T}$ v percentách? (na 3 desatinné miesta)`, answer: rd(dT2, 3), tol: 0.00051 },
        { q: T`Aká je relatívna neistota $g$ v percentách? (na 2 desatinné miesta)`, answer: rd(rel, 2), tol: 0.0051 }
      ]
    };
  });
})();
