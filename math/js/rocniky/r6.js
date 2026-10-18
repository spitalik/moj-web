/* 6. ročník: desatinné čísla, zlomky, deliteľnosť a prvočísla, NSD a nsn, celé čísla, uhly, trojuholníky,
   obvod a obsah štvorca a obdĺžnika, osová súmernosť. */
(function () {
  'use strict';

  const { rnd, pick, gcd, shuffle } = EXERCISES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r6' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 deliteľ, 2 delitele, 5 deliteľov.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  // Desatinné čísla bez chýb zaokrúhľovania; D = zápis do KaTeX (0{,}5), T = zápis do textu (0,5).
  const nice = (x) => +(+x).toFixed(6);
  const D = (x) => String(nice(x)).replace('.', '{,}');
  const T = (x) => String(nice(x)).replace('.', ',');
  const par = (x) => (x < 0 ? `(${D(x)})` : D(x));
  const decs = (x) => (String(nice(x)).split('.')[1] || '').length;
  const lcm = (a, b) => a / gcd(a, b) * b;
  const minus = (x) => (x < 0 ? '−' + Math.abs(x) : String(x)); // text s typografickým mínusom
  const sign = (a, b) => (a < b ? '<' : a > b ? '>' : '=');
  const signH = (s) => (s === '<' ? '&lt;' : s === '>' ? '&gt;' : '=');

  // rozklad na prvočinitele: [2, 2, 3, 5]
  const factor = (n) => {
    const f = [];
    for (let p = 2; n > 1; p++) while (n % p === 0) { f.push(p); n /= p; }
    return f;
  };
  // zápis rozkladu s mocninami: 2^{2}\cdot 3\cdot 5
  const powForm = (n) => {
    const m = {};
    factor(n).forEach((p) => { m[p] = (m[p] || 0) + 1; });
    return Object.keys(m).map((p) => (m[p] > 1 ? `${p}^{${m[p]}}` : p)).join('\\cdot ');
  };
  const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  const isPrime = (n) => n > 1 && factor(n).length === 1;
  const divisors = (n) => { const d = []; for (let k = 1; k <= n; k++) if (n % k === 0) d.push(k); return d; };

  /* ---------- kreslenie ---------- */

  // uhol s vrcholom (cx, cy), jedno rameno vodorovne doprava, druhé pod uhlom deg (proti smeru hodinových ručičiek)
  const angleSvg = (cx, cy, deg, len = 80, r = 24) => {
    const a = deg * Math.PI / 180;
    const ex = cx + len * Math.cos(a), ey = cy - len * Math.sin(a);
    let mark;
    if (deg === 90) mark = `<path class="f-warn" d="M${cx + 16} ${cy} V${cy - 16} H${cx}"/>`;
    else {
      const px = cx + r * Math.cos(a), py = cy - r * Math.sin(a);
      mark = `<path class="f-warn" d="M${cx + r} ${cy} A${r} ${r} 0 ${deg > 180 ? 1 : 0} 0 ${px.toFixed(1)} ${py.toFixed(1)}"/>`;
    }
    return `<line class="f-line" x1="${cx}" y1="${cy}" x2="${cx + len}" y2="${cy}"/>
      <line class="f-line" x1="${cx}" y1="${cy}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}"/>${mark}
      <circle class="f-solid" cx="${cx}" cy="${cy}" r="3"/>`;
  };

  // výseče kruhu: n dielov, k vyfarbených
  const pie = (cx, cy, r, n, k) => {
    let s = '';
    const P = (i) => {
      const a = -Math.PI / 2 + 2 * Math.PI * i / n;
      return `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
    };
    for (let i = 0; i < n; i++) {
      s += `<path class="${i < k ? 'f-fill f-outline' : 'f-cell'}" d="M${cx} ${cy} L${P(i)} A${r} ${r} 0 0 1 ${P(i + 1)} Z"/>`;
    }
    return s + `<circle class="f-thin" cx="${cx}" cy="${cy}" r="${r}"/>`;
  };

  // malé obrázky útvarov pre úlohy o osovej súmernosti
  const SYM_SHAPES = [
    { n: 'štvorec', axes: '4', why: 'Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.',
      d: '<rect class="f-fill f-outline" x="50" y="20" width="80" height="80"/>' },
    { n: 'obdĺžnik', axes: '2', why: 'Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.',
      d: '<rect class="f-fill f-outline" x="30" y="30" width="120" height="60"/>' },
    { n: 'rovnostranný trojuholník', axes: '3', why: 'Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.',
      d: '<polygon class="f-fill2 f-outline2" points="90,16 136,96 44,96"/>' },
    { n: 'rovnoramenný trojuholník', axes: '1', why: 'Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.',
      d: '<polygon class="f-fill2 f-outline2" points="90,12 120,100 60,100"/>' },
    { n: 'rôznostranný trojuholník', axes: '0', why: 'Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.',
      d: '<polygon class="f-fill2 f-outline2" points="40,100 150,100 70,24"/>' },
    { n: 'kruh', axes: 'nekonečne veľa', why: 'Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.',
      d: '<circle class="f-fill3 f-outline3" cx="90" cy="60" r="45"/>' },
    { n: 'kosoštvorec', axes: '2', why: 'Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.',
      d: '<polygon class="f-fill3 f-outline3" points="90,12 140,60 90,108 40,60"/>' },
    { n: 'kosodĺžnik (rovnobežník)', axes: '0', why: 'Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.',
      d: '<polygon class="f-fill f-outline" points="30,96 120,96 150,24 60,24"/>' }
  ];
  const AXES_OPTS = ['0', '1', '2', '3', '4', 'nekonečne veľa'];

  /* ---------- obrázky ---------- */

  fig('r6-desatinna-os', {
    draw: () => {
      const X = (k) => 20 + k * 4; // k = stotiny od 2,00
      let s = '<svg viewBox="0 0 440 96" role="img" aria-label="Číselná os od 2 do 3 s desatinami a stotinami"><line class="f-line" x1="14" y1="46" x2="428" y2="46"/>';
      for (let k = 0; k <= 100; k++) {
        const big = k % 10 === 0, end = k % 100 === 0;
        s += `<line class="${big ? 'f-line' : 'f-thin'}" x1="${X(k)}" y1="${end ? 34 : big ? 38 : 42}" x2="${X(k)}" y2="${end ? 58 : big ? 54 : 50}"/>`;
        if (big) s += `<text class="f-small" x="${X(k)}" y="74" text-anchor="middle">${end ? 2 + k / 100 : '2,' + k / 10}</text>`;
      }
      return s + `<circle class="f-dot" cx="${X(40)}" cy="46" r="6"/><text class="f-text c-accent" x="${X(40)}" y="24" text-anchor="middle">2,4</text>
        <circle class="f-dot f-dot-ok" cx="${X(75)}" cy="46" r="6"/><text class="f-text c-ok" x="${X(75)}" y="24" text-anchor="middle">2,75</text>
        <text class="f-small" x="220" y="92" text-anchor="middle">malé dieliky sú stotiny (0,01), veľké desatiny (0,1)</text></svg>`;
    }
  });

  fig('r6-zlomky-kruhy', {
    draw: () => `<svg viewBox="0 0 420 150" role="img" aria-label="Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy">
      ${pie(70, 62, 50, 2, 1)}${pie(210, 62, 50, 4, 3)}${pie(350, 62, 50, 8, 3)}
      <text class="f-text" x="70" y="140" text-anchor="middle">1/2</text>
      <text class="f-text" x="210" y="140" text-anchor="middle">3/4</text>
      <text class="f-text" x="350" y="140" text-anchor="middle">3/8</text></svg>`
  });

  fig('r6-eratosten', {
    draw: () => {
      let s = '<svg viewBox="0 0 400 248" role="img" aria-label="Čísla od 1 do 60, prvočísla sú vyfarbené">';
      for (let n = 1; n <= 60; n++) {
        const x = 10 + ((n - 1) % 10) * 38, y = 10 + Math.floor((n - 1) / 10) * 38;
        const p = isPrime(n);
        s += `<rect class="f-cell${p ? ' f-fill2 f-outline2' : ''}" x="${x}" y="${y}" width="38" height="38"/>
          <text class="${p ? 'f-text' : 'f-small'}" x="${x + 19}" y="${y + 24}" text-anchor="middle"${p ? ' font-weight="700"' : ''}>${n}</text>`;
      }
      return s + '</svg>';
    }
  });

  fig('r6-strom', {
    draw: () => {
      const node = (x, y, t, prime) => `<circle class="${prime ? 'f-fill2 f-outline2' : 'f-fill f-outline'}" cx="${x}" cy="${y}" r="17"/>
        <text class="f-text" x="${x}" y="${y + 5}" text-anchor="middle">${t}</text>`;
      const edge = (x1, y1, x2, y2) => `<line class="f-thin" x1="${x1}" y1="${y1 + 17}" x2="${x2}" y2="${y2 - 17}"/>`;
      const tree = (ox, root, l, r, ll, lr, rl, rr) =>
        edge(ox + 80, 24, ox + 35, 84) + edge(ox + 80, 24, ox + 125, 84) +
        edge(ox + 35, 84, ox + 11, 144) + edge(ox + 35, 84, ox + 59, 144) +
        edge(ox + 125, 84, ox + 101, 144) + edge(ox + 125, 84, ox + 149, 144) +
        node(ox + 80, 24, root) + node(ox + 35, 84, l) + node(ox + 125, 84, r) +
        node(ox + 11, 144, ll, true) + node(ox + 59, 144, lr, true) + node(ox + 101, 144, rl, true) + node(ox + 149, 144, rr, true);
      return `<svg viewBox="0 0 420 196" role="img" aria-label="Stromy rozkladu čísel 60 a 84 na prvočinitele">
        ${tree(20, 60, 6, 10, 2, 3, 2, 5)}${tree(240, 84, 4, 21, 2, 2, 3, 7)}
        <text class="f-text" x="100" y="188" text-anchor="middle">60 = 2 · 2 · 3 · 5</text>
        <text class="f-text" x="320" y="188" text-anchor="middle">84 = 2 · 2 · 3 · 7</text></svg>`;
    }
  });

  fig('r6-os-cele', {
    draw: () => {
      const X = (k) => 220 + k * 32;
      let s = `<svg viewBox="0 0 440 110" role="img" aria-label="Číselná os s celými číslami od −6 do 6">
        <line class="f-line" x1="14" y1="62" x2="424" y2="62"/><path class="f-solid" d="M432 62 l-10 -5 v10 z"/>`;
      for (let k = -6; k <= 6; k++) {
        s += `<line class="f-line" x1="${X(k)}" y1="56" x2="${X(k)}" y2="68"/>
          <text class="f-small${k < 0 ? ' c-accent' : k > 0 ? ' c-ok' : ''}" x="${X(k)}" y="88" text-anchor="middle">${minus(k)}</text>`;
      }
      return s + `<path class="f-accent" d="M${X(0)} 50 Q${X(-2)} 18 ${X(-4)} 50"/>
        <path class="f-ok" d="M${X(0)} 50 Q${X(2)} 18 ${X(4)} 50"/>
        <circle class="f-dot" cx="${X(-4)}" cy="62" r="6"/><circle class="f-dot f-dot-ok" cx="${X(4)}" cy="62" r="6"/>
        <text class="f-small" x="${X(-2)}" y="22" text-anchor="middle">4 dieliky</text>
        <text class="f-small" x="${X(2)}" y="22" text-anchor="middle">4 dieliky</text>
        <text class="f-small" x="${X(-4)}" y="106" text-anchor="middle">záporné</text>
        <text class="f-small" x="${X(4)}" y="106" text-anchor="middle">kladné</text></svg>`;
    }
  });

  fig('r6-uhly-druhy', {
    draw: () => {
      const items = [[30, 'ostrý'], [90, 'pravý'], [135, 'tupý'], [180, 'priamy']];
      return `<svg viewBox="0 0 560 130" role="img" aria-label="Ostrý, pravý, tupý a priamy uhol">${items.map(([d, n], i) => {
        const cx = 70 + i * 140 + (d === 180 ? 0 : d > 90 ? -8 : -27);
        return `${angleSvg(cx, 90, d, 55, 20)}
          <text class="f-text" x="${70 + i * 140}" y="122" text-anchor="middle">${n} (${d}°)</text>`;
      }).join('')}</svg>`;
    }
  });

  fig('r6-uhlomer', {
    draw: () => {
      const cx = 210, cy = 170, R = 150;
      let s = `<svg viewBox="0 0 420 200" role="img" aria-label="Meranie uhla uhlomerom: uhol 50 stupňov">
        <path class="f-fill3 f-outline3" d="M${cx - R} ${cy} A${R} ${R} 0 0 1 ${cx + R} ${cy} Z"/>`;
      for (let d = 0; d <= 180; d += 5) {
        const a = d * Math.PI / 180, big = d % 10 === 0;
        const r1 = big ? R - 14 : R - 8;
        s += `<line class="f-thin" x1="${(cx + R * Math.cos(a)).toFixed(1)}" y1="${(cy - R * Math.sin(a)).toFixed(1)}" x2="${(cx + r1 * Math.cos(a)).toFixed(1)}" y2="${(cy - r1 * Math.sin(a)).toFixed(1)}"/>`;
        if (d % 30 === 0) s += `<text class="f-small" x="${(cx + (R - 28) * Math.cos(a)).toFixed(1)}" y="${(cy - (R - 28) * Math.sin(a) + 4).toFixed(1)}" text-anchor="middle">${d}</text>`;
      }
      const a = 50 * Math.PI / 180;
      return s + `<line class="f-accent" x1="${cx}" y1="${cy}" x2="${cx + R}" y2="${cy}"/>
        <line class="f-accent" x1="${cx}" y1="${cy}" x2="${(cx + R * Math.cos(a)).toFixed(1)}" y2="${(cy - R * Math.sin(a)).toFixed(1)}"/>
        <path class="f-warn" d="M${cx + 40} ${cy} A40 40 0 0 0 ${(cx + 40 * Math.cos(a)).toFixed(1)} ${(cy - 40 * Math.sin(a)).toFixed(1)}"/>
        <text class="f-text" x="${cx + 50}" y="${cy - 14}">50°</text>
        <circle class="f-solid" cx="${cx}" cy="${cy}" r="4"/>
        <text class="f-small" x="${cx}" y="${cy + 20}" text-anchor="middle">stred uhlomera = vrchol uhla</text></svg>`;
    }
  });

  fig('r6-trojuholniky', {
    draw: () => {
      const tri = (pts, cls) => `<polygon class="${cls}" points="${pts}"/>`;
      const lab = (x, y, t) => `<text class="f-small" x="${x}" y="${y}" text-anchor="middle">${t}</text>`;
      return `<svg viewBox="0 0 480 290" role="img" aria-label="Druhy trojuholníkov podľa strán a podľa uhlov">
        <text class="f-text" x="240" y="16" text-anchor="middle">podľa strán</text>
        ${tri('20,120 140,120 50,40', 'f-fill f-outline')}${lab(80, 140, 'rôznostranný')}
        ${tri('180,120 300,120 240,30', 'f-fill f-outline')}${lab(240, 140, 'rovnoramenný')}
        <path class="f-thin" d="M205 72 l8 6 M268 78 l8 -6"/>
        ${tri('340,120 460,120 400,16', 'f-fill f-outline')}${lab(400, 140, 'rovnostranný')}
        <path class="f-thin" d="M365 66 l8 5 M427 71 l8 -5 M400 116 v8"/>
        <text class="f-text" x="240" y="166" text-anchor="middle">podľa uhlov</text>
        ${tri('20,265 140,265 70,185', 'f-fill2 f-outline2')}${lab(80, 284, 'ostrouhlý')}
        ${tri('190,265 300,265 190,185', 'f-fill2 f-outline2')}${lab(245, 284, 'pravouhlý')}
        <path class="f-warn" d="M202 265 v-12 h-12"/>
        ${tri('330,265 460,265 365,235', 'f-fill2 f-outline2')}${lab(400, 284, 'tupouhlý')}
        <path class="f-warn" d="M352.9 245.4 A16 16 0 0 0 380.3 239.8"/></svg>`;
    }
  });

  fig('r6-obdlznik-siet', {
    draw: () => {
      let s = '<svg viewBox="0 0 360 200" role="img" aria-label="Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²">';
      for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++) {
        s += `<rect class="f-fill f-cell" x="${40 + i * 40}" y="${30 + j * 40}" width="40" height="40"/>`;
      }
      return s + `<rect class="f-line" x="40" y="30" width="200" height="120" fill="none"/>
        <text class="f-math" x="140" y="174" text-anchor="middle">a = 5 cm</text>
        <text class="f-math" x="250" y="95">b = 3 cm</text>
        <text class="f-small" x="60" y="54" text-anchor="middle">1 cm²</text>
        <text class="f-small" x="140" y="194" text-anchor="middle">S = 5 · 3 = 15 cm², o = 2 · (5 + 3) = 16 cm</text></svg>`;
    }
  });

  fig('r6-osova', {
    draw: () => {
      const C = 26, ox = 20, oy = 14;
      let s = '<svg viewBox="0 0 400 236" role="img" aria-label="Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti">';
      for (let i = 0; i <= 14; i++) s += `<line class="f-grid" x1="${ox + i * C}" y1="${oy}" x2="${ox + i * C}" y2="${oy + 8 * C}"/>`;
      for (let j = 0; j <= 8; j++) s += `<line class="f-grid" x1="${ox}" y1="${oy + j * C}" x2="${ox + 14 * C}" y2="${oy + j * C}"/>`;
      const P = (pts) => pts.map(([x, y]) => `${ox + x * C},${oy + y * C}`).join(' ');
      const shape = [[2, 6], [5, 6], [5, 3], [3, 1], [2, 3]];
      const image = shape.map(([x, y]) => [14 - x, y]);
      return s + `<polygon class="f-fill f-outline" points="${P(shape)}"/>
        <polygon class="f-fill2 f-outline2" points="${P(image)}"/>
        <line class="f-dash" x1="${ox + 7 * C}" y1="${oy - 6}" x2="${ox + 7 * C}" y2="${oy + 8 * C + 6}"/>
        <text class="f-math" x="${ox + 7 * C + 6}" y="${oy + 8 * C + 4}">o</text>
        <line class="f-thin" x1="${ox + 3 * C}" y1="${oy + C}" x2="${ox + 11 * C}" y2="${oy + C}" stroke-dasharray="2 3"/>
        <circle class="f-dot" cx="${ox + 3 * C}" cy="${oy + C}" r="5"/><circle class="f-dot f-dot-ok" cx="${ox + 11 * C}" cy="${oy + C}" r="5"/>
        <text class="f-math" x="${ox + 3 * C - 8}" y="${oy + C - 6}" text-anchor="end">A</text>
        <text class="f-math" x="${ox + 11 * C + 8}" y="${oy + C - 6}">A′</text></svg>`;
    }
  });

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'r6-desatinne', order: 10, title: 'Desatinné čísla a počtové operácie s nimi',
    summary: 'Zápis, porovnávanie a zaokrúhľovanie desatinných čísel; sčítanie, odčítanie, násobenie a delenie.',
    theory: [
      `<p>V <strong>desatinnom čísle</strong> oddeľuje desatinná čiarka celú časť od desatinnej. V čísle $2{,}75$ je 2 celé, 7 desatín a 5 stotín,
       teda $2{,}75 = 2 + \\frac{7}{10} + \\frac{5}{100}$. Nuly na konci desatinnej časti môžeme pridať aj vynechať: $2{,}4 = 2{,}40$.</p>`,
      { fig: 'r6-desatinna-os', caption: 'Úsek číselnej osi od 2 do 3. Medzi dvoma celými číslami je 10 desatín a 100 stotín.' },
      `<p><strong>Sčítanie a odčítanie:</strong> čísla zapíšeme pod seba tak, aby boli <em>desatinné čiarky pod sebou</em>, chýbajúce miesta doplníme nulami.
       <strong>Násobenie:</strong> násobíme ako celé čísla a výsledok má toľko desatinných miest, koľko majú oba činitele spolu: $1{,}2\\cdot 0{,}3 = 0{,}36$.
       Násobenie číslom 10, 100, 1 000 posunie čiarku o 1, 2, 3 miesta doprava, delenie doľava.</p>`,
      `<p><strong>Delenie prirodzeným číslom:</strong> delíme ako zvyčajne a desatinnú čiarku do podielu napíšeme v okamihu, keď ju v delencovi prekročíme: $7{,}5 : 3 = 2{,}5$.
       <strong>Zaokrúhľovanie:</strong> pozrieme sa na číslicu hneď za miestom, na ktoré zaokrúhľujeme. Ak je 0 až 4, zaokrúhlime nadol, ak 5 až 9, nahor: $3{,}462 \\doteq 3{,}5$ (na desatiny).</p>`
    ],
    examples: [
      { task: 'Vypočítaj $12{,}5 + 3{,}78$.',
        steps: ['Zarovnáme čiarky: $12{,}50 + 3{,}78$.', 'Sčítame po rádoch: $12{,}50 + 3{,}78 = 16{,}28$.', '<strong>Výsledok: 16,28</strong>'] },
      { task: 'Vypočítaj $2{,}4\\cdot 1{,}5$.',
        steps: ['Bez čiarok: $24\\cdot 15 = 360$.', 'Činitele majú spolu 2 desatinné miesta, preto výsledok je $3{,}60 = 3{,}6$.', '<strong>Výsledok: 3,6</strong>'] }
    ]
  });

  gen('r6-desatinne', () => {
    const t = Math.random();
    if (t < 0.3) {
      let a = rnd(12, 999) / 10, b = rnd(105, 9999) / 100;
      const add = Math.random() < 0.5;
      if (!add && a < b) [a, b] = [b, a];
      const res = nice(add ? a + b : a - b);
      const f2 = (x) => x.toFixed(2).replace('.', '{,}');
      return {
        answer: res,
        q: `Vypočítaj $${D(a)} ${add ? '+' : '-'} ${D(b)}$.`,
        solution: `Zarovnáme desatinné čiarky pod seba a doplníme nuly: $${f2(a)} ${add ? '+' : '-'} ${f2(b)} = ${D(res)}$.`,
        hint: 'Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.'
      };
    }
    if (t < 0.5) {
      const a = rnd(11, 99) / 10, b = Math.random() < 0.5 ? rnd(2, 9) : rnd(11, 49) / 10;
      const ai = Math.round(a * 10), bi = Math.round(b * Math.pow(10, decs(b))), k = decs(a) + decs(b);
      const res = nice(a * b);
      return {
        answer: res,
        q: `Vypočítaj $${D(a)}\\cdot ${D(b)}$.`,
        solution: `Násobíme bez čiarok: $${ai}\\cdot ${bi} = ${ai * bi}$. Činitele majú spolu ${k} ${pl(k, ['desatinné miesto', 'desatinné miesta', 'desatinných miest'])}, preto $${D(a)}\\cdot ${D(b)} = ${D(res)}$.`,
        hint: 'Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.'
      };
    }
    if (t < 0.65) {
      const x = nice(rnd(1, 99999) / 1000), m = pick([10, 100, 1000]), mul = Math.random() < 0.5;
      const z = String(m).length - 1, res = nice(mul ? x * m : x / m);
      return {
        answer: res, show: T(res),
        q: `Vypočítaj $${D(x)} ${mul ? '\\cdot' : ':'} ${m === 1000 ? '1\\,000' : m}$.`,
        solution: `Pri ${mul ? 'násobení' : 'delení'} číslom ${m === 1000 ? '1 000' : m} posunieme desatinnú čiarku o ${z} ${pl(z, ['miesto', 'miesta', 'miest'])} ${mul ? 'doprava' : 'doľava'}: $${D(x)} ${mul ? '\\cdot' : ':'} ${m === 1000 ? '1\\,000' : m} = ${D(res)}$.`,
        hint: 'Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.'
      };
    }
    if (t < 0.82) {
      const q = rnd(11, 199) / 10, d = rnd(2, 9), a = nice(q * d);
      return {
        answer: q,
        q: `Vypočítaj $${D(a)} : ${d}$.`,
        solution: `Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: $${D(a)} : ${d} = ${D(q)}$. Skúška: $${D(q)}\\cdot ${d} = ${D(a)}$.`,
        hint: 'Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.'
      };
    }
    const N = rnd(1001, 99999), x = N / 1000, p = rnd(0, 2);
    const ans = Math.round(N / Math.pow(10, 3 - p)) / Math.pow(10, p);
    const digit = Math.floor(N / Math.pow(10, 2 - p)) % 10;
    const place = ['jednotky (celé čísla)', 'desatiny', 'stotiny'][p];
    return {
      answer: ans,
      q: `Zaokrúhli číslo $${D(x)}$ na ${place}.`,
      solution: `Rozhoduje číslica hneď za týmto miestom, je to ${digit}. ${digit >= 5 ? 'Je 5 alebo viac, zaokrúhlime nahor' : 'Je menšia ako 5, zaokrúhlime nadol'}: $${D(x)} \\doteq ${ans.toFixed(p).replace('.', '{,}')}$.`,
      hint: 'Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.'
    };
  });

  lesson({
    id: 'r6-zlomky', order: 20, title: 'Zlomky a ich základné využitie',
    summary: 'Čo je zlomok, časť z celku, krátenie a rozširovanie, prevod na desatinné číslo, porovnávanie.',
    theory: [
      `<p><strong>Zlomok</strong> $\\frac{a}{b}$ opisuje časť celku: celok rozdelíme na $b$ rovnakých dielov (<em>menovateľ</em>) a vezmeme $a$ z nich (<em>čitateľ</em>).
       Zlomková čiara znamená delenie: $\\frac{3}{4} = 3 : 4 = 0{,}75$.</p>`,
      { fig: 'r6-zlomky-kruhy', caption: 'Vyfarbené časti kruhov: jedna polovica, tri štvrtiny a tri osminy.' },
      `<p><strong>Časť z čísla:</strong> $\\frac{3}{4}$ z 20 vypočítame tak, že 20 vydelíme menovateľom a vynásobíme čitateľom: $20 : 4 = 5$, $5\\cdot 3 = 15$.</p>`,
      `<p><strong>Rozširovanie a krátenie:</strong> ak čitateľa aj menovateľa vynásobíme alebo vydelíme tým istým číslom (okrem nuly), hodnota zlomku sa nezmení:
       $\\frac{12}{18} = \\frac{2}{3}$ (krátime šiestimi). Zlomok je v <em>základnom tvare</em>, keď sa už nedá krátiť.
       Dva zlomky porovnáme najľahšie, keď ich prevedieme na spoločného menovateľa.</p>`
    ],
    examples: [
      { task: 'Koľko je $\\frac{2}{5}$ z 35?',
        steps: ['Jedna pätina: $35 : 5 = 7$.', 'Dve pätiny: $7\\cdot 2 = 14$.', '<strong>Výsledok: 14</strong>'] },
      { task: 'Porovnaj zlomky $\\frac{3}{4}$ a $\\frac{5}{6}$.',
        steps: ['Spoločný menovateľ je 12: $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{5}{6} = \\frac{10}{12}$.', '$9 &lt; 10$, preto $\\frac{3}{4} &lt; \\frac{5}{6}$.'] }
    ]
  });

  const DEC_FRAC = [[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [3, 10], [7, 10], [9, 10], [1, 20], [3, 20], [7, 20], [1, 25], [6, 25], [1, 8], [3, 8], [5, 8]];

  gen('r6-zlomky', () => {
    const t = Math.random();
    if (t < 0.3) {
      const q = rnd(2, 10);
      let p = rnd(1, q - 1);
      const n = q * rnd(2, 12);
      return {
        answer: n / q * p,
        q: `Koľko je $\\frac{${p}}{${q}}$ z čísla ${n}?`,
        solution: `Najprv jedna časť: $${n} : ${q} = ${n / q}$. Potom ${p} ${pl(p, ['časť', 'časti', 'častí'])}: $${n / q}\\cdot ${p} = ${n / q * p}$.`,
        hint: 'Číslo vydeľ menovateľom a výsledok vynásob čitateľom.'
      };
    }
    if (t < 0.55) {
      let p, q;
      do { q = rnd(2, 9); p = rnd(1, q - 1); } while (gcd(p, q) !== 1);
      const k = rnd(2, 9);
      return {
        type: 'text', answer: `${p}/${q}`, placeholder: 'napr. 2/3',
        q: `Skráť zlomok $\\frac{${p * k}}{${q * k}}$ na základný tvar. Odpoveď zapíš ako a/b.`,
        solution: `Najväčší spoločný deliteľ čísel ${p * k} a ${q * k} je ${k}. Krátime ním: $\\frac{${p * k}}{${q * k}} = \\frac{${p * k} : ${k}}{${q * k} : ${k}} = \\frac{${p}}{${q}}$.`,
        hint: 'Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.'
      };
    }
    if (t < 0.78) {
      const [p, q] = pick(DEC_FRAC);
      let m = 1;
      while ((Math.pow(10, m)) % q) m++;
      const ten = Math.pow(10, m), k = ten / q;
      return {
        answer: p / q,
        q: `Zapíš zlomok $\\frac{${p}}{${q}}$ ako desatinné číslo.`,
        solution: `Rozšírime na menovateľ ${ten === 1000 ? '1 000' : ten}: $\\frac{${p}}{${q}} = \\frac{${p * k}}{${ten === 1000 ? '1\\,000' : ten}} = ${D(p / q)}$. (Alebo vydelíme $${p} : ${q}$.)`,
        hint: 'Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.'
      };
    }
    let a, b, c, d;
    do { b = rnd(2, 9); d = rnd(2, 9); a = rnd(1, b - 1); c = rnd(1, d - 1); } while (a === c && b === d);
    const L = lcm(b, d), A = a * L / b, C = c * L / d, s = sign(A, C);
    return {
      type: 'choice', options: ['<', '=', '>'], answer: s,
      q: `Doplň správny znak: $\\frac{${a}}{${b}} \\;\\square\\; \\frac{${c}}{${d}}$`,
      solution: `Spoločný menovateľ je ${L}: $\\frac{${a}}{${b}} = \\frac{${A}}{${L}}$ a $\\frac{${c}}{${d}} = \\frac{${C}}{${L}}$. Keďže $${A} ${signH(s)} ${C}$, platí $\\frac{${a}}{${b}} ${signH(s)} \\frac{${c}}{${d}}$.`,
      hint: 'Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.'
    };
  });

  lesson({
    id: 'r6-delitelnost', order: 30, title: 'Deliteľnosť, prvočísla a zložené čísla',
    summary: 'Deliteľ a násobok, znaky deliteľnosti, prvočísla, zložené čísla a rozklad na prvočinitele.',
    theory: [
      `<p>Číslo $a$ je <strong>deliteľné</strong> číslom $b$, ak pri delení $a : b$ nevznikne zvyšok. Vtedy je $b$ <em>deliteľ</em> čísla $a$ a $a$ je <em>násobok</em> čísla $b$.
       Napríklad delitele čísla 12 sú 1, 2, 3, 4, 6 a 12.</p>`,
      `<p><strong>Znaky deliteľnosti.</strong> Číslo je deliteľné</p>
       <ul><li><strong>2</strong>, ak je jeho posledná číslica párna (0, 2, 4, 6, 8),</li>
       <li><strong>3</strong>, ak je jeho ciferný súčet deliteľný 3; <strong>9</strong>, ak je ciferný súčet deliteľný 9,</li>
       <li><strong>4</strong>, ak je číslo z posledných dvoch číslic deliteľné 4,</li>
       <li><strong>5</strong>, ak končí 0 alebo 5; <strong>10</strong>, ak končí 0,</li>
       <li><strong>6</strong>, ak je deliteľné 2 aj 3 zároveň.</li></ul>`,
      `<p><strong>Prvočíslo</strong> je prirodzené číslo, ktoré má práve dva delitele: 1 a samo seba (2, 3, 5, 7, 11, …).
       <strong>Zložené číslo</strong> má viac ako dva delitele (4, 6, 8, 9, …). Číslo 1 nie je ani prvočíslo, ani zložené číslo.
       Každé zložené číslo vieme rozložiť na súčin prvočísel (<em>prvočiniteľov</em>): $60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$.</p>`,
      { fig: 'r6-eratosten', caption: 'Eratostenovo sito: z čísel 1 až 60 škrtáme násobky 2, 3, 5 a 7 (okrem nich samotných). Zostanú prvočísla, sú vyfarbené.' }
    ],
    examples: [
      { task: 'Je číslo 4 716 deliteľné 3? A deliteľné 4?',
        steps: ['Ciferný súčet: $4 + 7 + 1 + 6 = 18$, a 18 je deliteľné 3, preto <strong>áno</strong>.', 'Posledné dvojčíslie je 16 a $16 : 4 = 4$, preto je deliteľné aj 4: <strong>áno</strong>.'] },
      { task: 'Rozlož číslo 90 na prvočinitele.',
        steps: ['$90 : 2 = 45$, $45 : 3 = 15$, $15 : 3 = 5$, 5 je prvočíslo.', '<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>'] }
    ]
  });

  const digitSum = (n) => String(n).split('').reduce((s, c) => s + Number(c), 0);
  const RULES = {
    2: (n) => `Posledná číslica je ${n % 10}, ${n % 2 === 0 ? 'je párna' : 'nie je párna'}.`,
    3: (n) => `Ciferný súčet je ${digitSum(n)}, ${digitSum(n) % 3 === 0 ? 'je' : 'nie je'} deliteľný 3.`,
    4: (n) => `Číslo z posledných dvoch číslic je ${n % 100}, ${n % 100 % 4 === 0 ? 'je' : 'nie je'} deliteľné 4.`,
    5: (n) => `Posledná číslica je ${n % 10}, ${n % 5 === 0 ? 'je to 0 alebo 5' : 'nie je to 0 ani 5'}.`,
    6: (n) => `${n % 2 === 0 ? 'Je párne' : 'Nie je párne'} a ciferný súčet ${digitSum(n)} ${digitSum(n) % 3 === 0 ? 'je' : 'nie je'} deliteľný 3. Na deliteľnosť 6 treba oboje.`,
    9: (n) => `Ciferný súčet je ${digitSum(n)}, ${digitSum(n) % 9 === 0 ? 'je' : 'nie je'} deliteľný 9.`,
    10: (n) => `Posledná číslica je ${n % 10}, ${n % 10 === 0 ? 'je to 0' : 'nie je to 0'}.`
  };
  const sp = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  gen('r6-delitelnost', () => {
    const t = Math.random();
    if (t < 0.28) {
      const k = pick([2, 3, 4, 5, 6, 9, 10]);
      const n = Math.random() < 0.5 ? k * rnd(Math.ceil(100 / k), Math.floor(9999 / k)) : rnd(100, 9999);
      const yes = n % k === 0;
      return {
        type: 'choice', options: ['áno', 'nie'], answer: yes ? 'áno' : 'nie',
        q: `Je číslo ${sp(n)} deliteľné číslom ${k}?`,
        solution: `${RULES[k](n)} Preto ${yes ? 'áno' : 'nie'}, číslo ${sp(n)} ${yes ? 'je' : 'nie je'} deliteľné ${k}.`,
        hint: 'Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).'
      };
    }
    if (t < 0.5) {
      const r = Math.random();
      const n = r < 0.06 ? 1 : r < 0.5 ? pick(PRIMES) : rnd(4, 100);
      const ans = n === 1 ? 'ani prvočíslo, ani zložené' : isPrime(n) ? 'prvočíslo' : 'zložené číslo';
      const f = factor(n);
      return {
        type: 'choice', options: ['prvočíslo', 'zložené číslo', 'ani prvočíslo, ani zložené'], answer: ans,
        q: `Aké je číslo ${n}?`,
        solution: n === 1 ? 'Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.'
          : isPrime(n) ? `Číslo ${n} má iba dva delitele: 1 a ${n}. Je to prvočíslo.`
            : `$${n} = ${f[0]}\\cdot ${n / f[0]}$, teda okrem 1 a ${n} má aj deliteľ ${f[0]}. Je to zložené číslo.`,
        hint: 'Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.'
      };
    }
    if (t < 0.7) {
      const k = pick([3, 9]), len = rnd(3, 4);
      const digits = [rnd(1, 9)];
      for (let i = 1; i < len; i++) digits.push(rnd(0, 9));
      const pos = rnd(1, len - 1);
      const rest = digits.reduce((s, d, i) => (i === pos ? s : s + d), 0);
      let ans = 0;
      while ((rest + ans) % k) ans++;
      const shown = digits.map((d, i) => (i === pos ? '\\square' : d)).join('');
      return {
        answer: ans,
        q: `Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo $${shown}$ bolo deliteľné ${k}?`,
        solution: `Súčet známych číslic je ${rest}. Ciferný súčet musí byť deliteľný ${k}: najmenšia vhodná číslica je ${ans}, lebo $${rest} + ${ans} = ${rest + ans}$.`,
        hint: `Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný ${k}.`
      };
    }
    if (t < 0.85) {
      const n = rnd(6, 60), dv = divisors(n);
      return {
        answer: dv.length,
        q: `Koľko deliteľov má číslo ${n}?`,
        solution: `Delitele čísla ${n} sú ${dv.join(', ')}. Je ich ${dv.length}.`,
        hint: 'Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …'
      };
    }
    let n;
    do { n = [2, 2, 3, 3, 5, 7, 11].slice(0, 7).sort(() => Math.random() - 0.5).slice(0, rnd(2, 4)).reduce((a, b) => a * b, 1); } while (n > 400 || n < 12);
    const f = factor(n);
    let cur = n;
    const steps = f.map((p) => { const s = `${cur} : ${p} = ${cur / p}`; cur /= p; return s; });
    return {
      type: 'tuple', answer: f, placeholder: 'napr. 2; 2; 3',
      q: `Rozlož číslo ${n} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).`,
      solution: `Delíme postupne prvočíslami: $${steps.join(',\\; ')}$. Teda $${n} = ${f.join('\\cdot ')}${f.length > new Set(f).size ? ` = ${powForm(n)}` : ''}$.`,
      hint: 'Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.'
    };
  });

  lesson({
    id: 'r6-nsd-nsn', order: 40, title: 'Najväčší spoločný deliteľ a najmenší spoločný násobok',
    summary: 'NSD a nsn pomocou rozkladu na prvočinitele, súdeliteľné čísla a slovné úlohy.',
    theory: [
      `<p><strong>Najväčší spoločný deliteľ</strong> čísel $a$, $b$ – zapisujeme $D(a, b)$ alebo NSD – je najväčšie číslo, ktorým sú deliteľné obe čísla.
       <strong>Najmenší spoločný násobok</strong> – $n(a, b)$ alebo nsn – je najmenšie nenulové číslo, ktoré je násobkom oboch čísel.</p>`,
      { fig: 'r6-strom', caption: 'Rozklad čísel 60 a 84 na prvočinitele. Spoločné sú 2, 2 a 3, preto D(60, 84) = 12; n(60, 84) = 2 · 2 · 3 · 5 · 7 = 420.' },
      `<p><strong>Postup cez rozklad:</strong> obe čísla rozložíme na prvočinitele. NSD je súčin <em>spoločných</em> prvočiniteľov (každý toľkokrát, koľkokrát je v oboch).
       nsn je súčin <em>všetkých</em> prvočiniteľov, ktoré sa vyskytujú aspoň v jednom čísle (každý toľkokrát, koľkokrát je v tom čísle, kde ho je viac).
       Užitočná kontrola: $D(a, b)\\cdot n(a, b) = a\\cdot b$.</p>`,
      `<p>Čísla, ktorých NSD je 1, sa nazývajú <strong>nesúdeliteľné</strong> (napr. 8 a 15). Ak majú spoločný deliteľ väčší ako 1, sú <strong>súdeliteľné</strong>.
       NSD použijeme, keď niečo delíme na čo najväčšie rovnaké časti; nsn, keď hľadáme, kedy sa niečo opakujúce znova stretne.</p>`
    ],
    examples: [
      { task: 'Urči $D(24, 36)$ a $n(24, 36)$.',
        steps: ['$24 = 2^3\\cdot 3$, $36 = 2^2\\cdot 3^2$.', 'NSD: $2^2\\cdot 3 = 12$.', 'nsn: $2^3\\cdot 3^2 = 72$.', 'Kontrola: $12\\cdot 72 = 864 = 24\\cdot 36$.'] },
      { task: 'Dva semafory sa zapnú na zelenú naraz. Prvý mení farby v cykle 40 sekúnd, druhý 60 sekúnd. O koľko sekúnd budú znova naraz na začiatku cyklu?',
        steps: ['Hľadáme najmenší spoločný násobok: $n(40, 60)$.', '$40 = 2^3\\cdot 5$, $60 = 2^2\\cdot 3\\cdot 5$, teda $n = 2^3\\cdot 3\\cdot 5 = 120$.', '<strong>O 120 sekúnd (2 minúty).</strong>'] }
    ]
  });

  const nsdSolution = (a, b) => {
    const g = gcd(a, b), l = lcm(a, b);
    return `$${a} = ${powForm(a) || 1}$, $${b} = ${powForm(b) || 1}$. NSD je súčin spoločných prvočiniteľov: $D(${a}, ${b}) = ${g === 1 ? '1' : powForm(g)}${g > 1 && powForm(g).includes('\\cdot') || /\^/.test(powForm(g)) ? ` = ${g}` : ''}$. nsn obsahuje všetky prvočinitele: $n(${a}, ${b}) = ${powForm(l)} = ${l}$.`;
  };

  gen('r6-nsd-nsn', () => {
    const t = Math.random();
    if (t < 0.4) {
      let a, b;
      do {
        const g = rnd(2, 12), x = rnd(1, 9), y = rnd(2, 9);
        a = g * x; b = g * y;
      } while (a === b || gcd(a / gcd(a, b), b / gcd(a, b)) !== 1 || lcm(a, b) > 400 || a < 4);
      return {
        type: 'tuple', answer: [gcd(a, b), lcm(a, b)], placeholder: 'NSD; nsn',
        q: `Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel ${a} a ${b}. Zapíš ich v poradí NSD; nsn.`,
        solution: nsdSolution(a, b),
        hint: 'Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).'
      };
    }
    if (t < 0.62) {
      let a, b;
      do { const g = rnd(3, 15); a = g * rnd(2, 7); b = g * rnd(2, 7); } while (a === b || a > 120 || b > 120);
      const g = gcd(a, b);
      return {
        answer: g,
        q: `Dve stuhy merajú ${a} cm a ${b} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?`,
        solution: `Dĺžka kúska musí deliť ${a} aj ${b} a má byť čo najväčšia, hľadáme $D(${a}, ${b})$. ${nsdSolution(a, b).split(' nsn')[0]} Jeden kúsok bude merať ${g} cm.`,
        hint: 'Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?'
      };
    }
    if (t < 0.84) {
      let x, y;
      do { x = pick([6, 8, 9, 10, 12, 15, 18, 20, 24, 30]); y = pick([6, 8, 9, 10, 12, 15, 18, 20, 24, 30]); } while (x >= y || y % x === 0 || lcm(x, y) > 120);
      const l = lcm(x, y), h = 7 + Math.floor(l / 60), m = l % 60;
      return {
        answer: l,
        q: `Z autobusovej stanice odchádza linka A každých ${x} minút a linka B každých ${y} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?`,
        solution: `Hľadáme najmenší spoločný násobok: $${x} = ${powForm(x)}$, $${y} = ${powForm(y)}$, $n(${x}, ${y}) = ${powForm(l)} = ${l}$. Linky odídu znova naraz o ${l} minút, teda o ${h}:${String(m).padStart(2, '0')}.`,
        hint: 'Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.'
      };
    }
    let a, b;
    do { a = rnd(4, 60); b = rnd(4, 60); } while (a === b);
    const g = gcd(a, b);
    return {
      type: 'choice', options: ['súdeliteľné', 'nesúdeliteľné'], answer: g > 1 ? 'súdeliteľné' : 'nesúdeliteľné',
      q: `Sú čísla ${a} a ${b} súdeliteľné, alebo nesúdeliteľné?`,
      solution: g > 1 ? `Obe čísla sú deliteľné ${g}, teda $D(${a}, ${b}) = ${g} &gt; 1$. Sú súdeliteľné.`
        : `$${a} = ${powForm(a)}$ a $${b} = ${powForm(b)}$ nemajú spoločný prvočiniteľ, $D(${a}, ${b}) = 1$. Sú nesúdeliteľné.`,
      hint: 'Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.'
    };
  });

  lesson({
    id: 'r6-cele', order: 50, title: 'Celé čísla a záporné čísla',
    summary: 'Kladné a záporné čísla na číselnej osi, opačné číslo, absolútna hodnota, porovnávanie, sčítanie a odčítanie.',
    theory: [
      `<p><strong>Celé čísla</strong> sú $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ Záporné čísla používame napríklad pri teplote pod nulou ($-5\\,{}^\\circ\\mathrm{C}$),
       pri dlhu alebo pri nadmorskej výške pod hladinou mora. Nula nie je ani kladná, ani záporná.</p>`,
      { fig: 'r6-os-cele', caption: 'Čísla 4 a −4 sú opačné: ležia rovnako ďaleko od nuly, na opačných stranách. Obe majú absolútnu hodnotu 4.' },
      `<p><strong>Opačné číslo</strong> k číslu $a$ je $-a$ (k 4 je to $-4$, k $-7$ je to 7). <strong>Absolútna hodnota</strong> $|a|$ je vzdialenosť čísla od nuly: $|-6| = 6$, $|6| = 6$.
       <strong>Porovnávanie:</strong> na číselnej osi je väčšie to číslo, ktoré leží viac vpravo. Preto $-2 &gt; -5$ a každé záporné číslo je menšie ako 0.</p>`,
      `<p><strong>Sčítanie a odčítanie:</strong> pripočítať kladné číslo znamená posunúť sa na osi doprava, záporné doľava.
       Odčítať číslo je to isté ako pripočítať opačné číslo: $3 - (-4) = 3 + 4 = 7$, $-2 - 5 = -2 + (-5) = -7$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $-8 + 3$.',
        steps: ['Začneme na $-8$ a posunieme sa o 3 doprava.', '<strong>$-8 + 3 = -5$</strong>'] },
      { task: 'Ráno bolo $-6\\,{}^\\circ\\mathrm{C}$, na obed $2\\,{}^\\circ\\mathrm{C}$. O koľko stupňov sa oteplilo?',
        steps: ['Rozdiel: $2 - (-6) = 2 + 6 = 8$.', '<strong>Oteplilo sa o 8 °C.</strong>'] }
    ]
  });

  gen('r6-cele', () => {
    const t = Math.random();
    if (t < 0.22) {
      const a = rnd(-20, 20), b = Math.random() < 0.1 ? a : rnd(-20, 20), s = sign(a, b);
      return {
        type: 'choice', options: ['<', '=', '>'], answer: s,
        q: `Doplň správny znak: $${a} \\;\\square\\; ${b}$`,
        solution: a === b ? `Čísla sú rovnaké: $${a} = ${b}$.` : `Na číselnej osi leží číslo ${minus(Math.max(a, b))} viac vpravo, je väčšie. Preto $${a} ${signH(s)} ${b}$.`,
        hint: 'Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.'
      };
    }
    if (t < 0.58) {
      let a = rnd(-15, 15), b = rnd(-15, 15);
      if (b === 0) b = -3;
      const add = Math.random() < 0.5, res = add ? a + b : a - b;
      const rew = add ? (b < 0 ? `Pripočítať záporné číslo znamená odčítať: $${a} + (${b}) = ${a} - ${-b} = ${res}$.` : `$${a} + ${b} = ${res}$ (posun o ${b} doprava).`)
        : (b < 0 ? `Odčítať záporné číslo znamená pripočítať opačné: $${a} - (${b}) = ${a} + ${-b} = ${res}$.` : `$${a} - ${b} = ${res}$ (posun o ${b} doľava).`);
      return {
        signed: true, answer: res,
        q: `Vypočítaj $${a} ${add ? '+' : '-'} ${par(b)}$.`,
        solution: rew,
        hint: 'Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.'
      };
    }
    if (t < 0.82) {
      if (Math.random() < 0.5) {
        const t0 = rnd(-10, 5), ch = rnd(2, 12), up = Math.random() < 0.5, t1 = up ? t0 + ch : t0 - ch;
        return {
          signed: true, answer: t1,
          q: `Ráno bolo ${minus(t0)} °C. Do večera sa ${up ? 'oteplilo' : 'ochladilo'} o ${ch} °C. Aká teplota bola večer (v °C)?`,
          solution: `$${t0} ${up ? '+' : '-'} ${ch} = ${t1}$. Večer bolo ${minus(t1)} °C.`,
          hint: up ? 'Oteplenie znamená pripočítať.' : 'Ochladenie znamená odčítať.'
        };
      }
      const lo = rnd(-15, -1), hi = rnd(lo + 2, 12);
      return {
        answer: hi - lo,
        q: `Najnižšia nočná teplota bola ${minus(lo)} °C, najvyššia denná ${minus(hi)} °C. O koľko stupňov bolo cez deň teplejšie?`,
        solution: `Rozdiel teplôt: $${hi} - (${lo}) = ${hi} + ${-lo} = ${hi - lo}$. Cez deň bolo o ${hi - lo} °C teplejšie.`,
        hint: 'Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.'
      };
    }
    const a = rnd(-30, 30) || -12;
    if (Math.random() < 0.5) {
      return {
        signed: true, answer: -a,
        q: `Aké je číslo opačné k číslu ${minus(a)}?`,
        solution: `Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k ${minus(a)} je to ${minus(-a)}.`,
        hint: 'Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.'
      };
    }
    const b = rnd(-20, 20);
    return {
      answer: Math.abs(a) + Math.abs(b),
      q: `Vypočítaj $|${a}| + |${b}|$.`,
      solution: `$|${a}| = ${Math.abs(a)}$ a $|${b}| = ${Math.abs(b)}$, teda súčet je $${Math.abs(a)} + ${Math.abs(b)} = ${Math.abs(a) + Math.abs(b)}$.`,
      hint: 'Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.'
    };
  });

  lesson({
    id: 'r6-uhly', order: 60, title: 'Uhol a meranie uhlov',
    summary: 'Druhy uhlov, uhlomer, stupne a minúty, vedľajšie a vrcholové uhly, počítanie s uhlami.',
    theory: [
      `<p><strong>Uhol</strong> tvoria dve polpriamky (<em>ramená</em>) so spoločným začiatkom (<em>vrcholom</em>). Veľkosť uhla meriame v <strong>stupňoch</strong>;
       jeden stupeň má 60 minút: $1^\\circ = 60'$. Uhly označujeme gréckymi písmenami $\\alpha, \\beta, \\gamma$ alebo zápisom $\\angle AVB$.</p>`,
      { fig: 'r6-uhly-druhy', caption: 'Ostrý uhol je menší ako 90°, pravý má 90°, tupý je medzi 90° a 180°, priamy má 180°.' },
      `<p><strong>Meranie uhlomerom:</strong> stred uhlomera priložíme na vrchol uhla, nulu na jedno rameno a na stupnici odčítame, kde prechádza druhé rameno.</p>`,
      { fig: 'r6-uhlomer', caption: 'Uhlomer priložený k uhlu s veľkosťou 50°.' },
      `<p><strong>Vedľajšie uhly</strong> majú spoločné jedno rameno a zvyšné ramená tvoria priamku; ich súčet je $180^\\circ$.
       <strong>Vrcholové uhly</strong> vzniknú pri pretnutí dvoch priamok oproti sebe a sú rovnako veľké.
       Pri sčítaní uhlov sčítame zvlášť stupne a minúty; 60 minút zameníme za 1 stupeň.</p>`
    ],
    examples: [
      { task: 'Uhol $\\alpha$ má $48^\\circ$. Aký veľký je uhol k nemu vedľajší?',
        steps: ['Vedľajšie uhly majú spolu $180^\\circ$.', '$180^\\circ - 48^\\circ = 132^\\circ$.', '<strong>Vedľajší uhol má 132°.</strong>'] },
      { task: 'Sčítaj $35^\\circ\\,40\' + 27^\\circ\\,35\'$.',
        steps: ['Stupne: $35 + 27 = 62$, minúty: $40 + 35 = 75$.', '$75\' = 1^\\circ\\,15\'$, preto spolu $63^\\circ\\,15\'$.'] }
    ]
  });

  const DM = (d, m) => `${d}^\\circ\\,${m}'`;

  gen('r6-uhly', () => {
    const t = Math.random();
    if (t < 0.3) {
      const kind = rnd(0, 3);
      const deg = [rnd(4, 16) * 5, 90, rnd(20, 34) * 5, 180][kind];
      const name = ['ostrý', 'pravý', 'tupý', 'priamy'][kind];
      const pic = Math.random() < 0.6;
      const svg = `<svg viewBox="0 0 200 120" width="200" role="img" aria-label="uhol">${angleSvg(100, 100, deg, 80, 22)}</svg>`;
      return {
        type: 'choice', options: ['ostrý', 'pravý', 'tupý', 'priamy'], answer: name,
        q: pic ? `Aký je tento uhol? ${svg}` : `Aký je uhol s veľkosťou $${deg}^\\circ$?`,
        solution: `${pic ? `Uhol má ${deg}°. ` : ''}${['Je menší ako 90°, preto je ostrý.', 'Má presne 90°, je pravý.', 'Je väčší ako 90° a menší ako 180°, preto je tupý.', 'Má 180°, ramená tvoria priamku, je priamy.'][kind]}`,
        hint: 'Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).'
      };
    }
    if (t < 0.52) {
      const a = rnd(15, 165), side = Math.random() < 0.7;
      return {
        answer: side ? 180 - a : a,
        q: `Uhol $\\alpha$ má veľkosť $${a}^\\circ$. Aký veľký je uhol k nemu ${side ? 'vedľajší' : 'vrcholový'} (v stupňoch)?`,
        solution: side ? `Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - ${a}^\\circ = ${180 - a}^\\circ$.` : `Vrcholové uhly sú rovnako veľké, preto má tiež $${a}^\\circ$.`,
        hint: 'Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.'
      };
    }
    if (t < 0.72) {
      if (Math.random() < 0.5) {
        const d = rnd(1, 9), m = rnd(1, 59);
        return {
          answer: d * 60 + m,
          q: `Koľko minút je $${DM(d, m)}$?`,
          solution: `$1^\\circ = 60'$, preto $${d}^\\circ = ${d * 60}'$ a spolu $${d * 60}' + ${m}' = ${d * 60 + m}'$.`,
          hint: 'Jeden stupeň má 60 minút.'
        };
      }
      const d = rnd(1, 9), m = rnd(0, 59), tot = d * 60 + m;
      return {
        type: 'tuple', answer: [d, m], placeholder: 'stupne; minúty',
        q: `Vyjadri $${tot}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.`,
        solution: `$${tot} : 60 = ${d}$, zvyšok ${m}. Teda $${tot}' = ${DM(d, m)}$.`,
        hint: 'Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.'
      };
    }
    let d1 = rnd(10, 120), m1 = rnd(0, 59), d2 = rnd(10, 60), m2 = rnd(0, 59);
    const add = Math.random() < 0.5;
    if (!add && d1 * 60 + m1 < d2 * 60 + m2) [d1, m1, d2, m2] = [d2, m2, d1, m1];
    if (!add && d1 === d2) d1 += 1;
    const r = add ? d1 * 60 + m1 + d2 * 60 + m2 : d1 * 60 + m1 - (d2 * 60 + m2);
    const rd = Math.floor(r / 60), rm = r % 60;
    let sol;
    if (add) {
      sol = `Stupne: $${d1} + ${d2} = ${d1 + d2}$, minúty: $${m1} + ${m2} = ${m1 + m2}$.${m1 + m2 >= 60 ? ` Keďže $${m1 + m2}' = 1^\\circ\\,${m1 + m2 - 60}'$, výsledok je $${DM(rd, rm)}$.` : ` Výsledok je $${DM(rd, rm)}$.`}`;
    } else {
      sol = m1 >= m2 ? `Stupne: $${d1} - ${d2} = ${d1 - d2}$, minúty: $${m1} - ${m2} = ${m1 - m2}$. Výsledok je $${DM(rd, rm)}$.`
        : `Minút je málo, preto zameníme 1 stupeň: $${DM(d1, m1)} = ${DM(d1 - 1, m1 + 60)}$. Potom $${d1 - 1} - ${d2} = ${d1 - 1 - d2}$ a $${m1 + 60} - ${m2} = ${m1 + 60 - m2}$, výsledok je $${DM(rd, rm)}$.`;
    }
    return {
      type: 'tuple', answer: [rd, rm], placeholder: 'stupne; minúty',
      q: `Vypočítaj $${DM(d1, m1)} ${add ? '+' : '-'} ${DM(d2, m2)}$. Výsledok zapíš v tvare stupne; minúty.`,
      solution: sol,
      hint: 'Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.'
    };
  });

  lesson({
    id: 'r6-trojuholniky', order: 70, title: 'Trojuholníky a ich vlastnosti',
    summary: 'Súčet uhlov v trojuholníku, druhy trojuholníkov podľa strán a uhlov, trojuholníková nerovnosť.',
    theory: [
      `<p><strong>Trojuholník</strong> $ABC$ má tri vrcholy, tri strany $a = |BC|$, $b = |AC|$, $c = |AB|$ a tri vnútorné uhly $\\alpha, \\beta, \\gamma$.
       <strong>Súčet vnútorných uhlov</strong> každého trojuholníka je $\\alpha + \\beta + \\gamma = 180^\\circ$.</p>`,
      { fig: 'r6-trojuholniky', caption: 'Hore delenie podľa strán (čiarky označujú rovnako dlhé strany), dole podľa uhlov.' },
      `<p><strong>Podľa strán:</strong> rôznostranný (všetky strany rôzne), rovnoramenný (dve strany – ramená – rovnaké, uhly pri základni sú zhodné),
       rovnostranný (všetky strany rovnaké, každý uhol má $60^\\circ$).
       <strong>Podľa uhlov:</strong> ostrouhlý (všetky uhly ostré), pravouhlý (jeden uhol pravý), tupouhlý (jeden uhol tupý).</p>`,
      `<p><strong>Trojuholníková nerovnosť:</strong> súčet dĺžok ľubovoľných dvoch strán je vždy väčší ako dĺžka tretej strany.
       Stačí overiť, že dve kratšie strany sú spolu dlhšie ako najdlhšia. Napríklad zo strán 3 cm, 4 cm a 8 cm trojuholník nezostrojíme, lebo $3 + 4 &lt; 8$.</p>`
    ],
    examples: [
      { task: 'V trojuholníku je $\\alpha = 52^\\circ$ a $\\beta = 71^\\circ$. Vypočítaj $\\gamma$.',
        steps: ['$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$.', '<strong>$\\gamma = 57^\\circ$</strong>'] },
      { task: 'Dá sa zostrojiť trojuholník so stranami 5 cm, 6 cm a 10 cm?',
        steps: ['Dve kratšie strany: $5 + 6 = 11$.', '$11 &gt; 10$, nerovnosť platí.', '<strong>Áno, dá sa.</strong>'] }
    ]
  });

  gen('r6-trojuholniky', () => {
    const t = Math.random();
    if (t < 0.25) {
      const a = rnd(20, 100), b = rnd(15, 160 - a - 5);
      return {
        answer: 180 - a - b,
        q: `V trojuholníku $ABC$ je $\\alpha = ${a}^\\circ$ a $\\beta = ${b}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?`,
        solution: `Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - ${a}^\\circ - ${b}^\\circ = ${180 - a - b}^\\circ$.`,
        hint: 'Súčet vnútorných uhlov trojuholníka je 180°.'
      };
    }
    if (t < 0.5) {
      const kind = rnd(0, 2);
      let A, B, C;
      if (kind === 0) { do { A = rnd(35, 85); B = rnd(35, 85); C = 180 - A - B; } while (C <= 0 || C >= 90); }
      else if (kind === 1) { A = 90; B = rnd(15, 75); C = 90 - B; }
      else { A = rnd(95, 150); B = rnd(10, 170 - A); C = 180 - A - B; }
      const ang = shuffle([A, B, C]);
      const name = ['ostrouhlý', 'pravouhlý', 'tupouhlý'][kind];
      return {
        type: 'choice', options: ['ostrouhlý', 'pravouhlý', 'tupouhlý'], answer: name,
        q: `Trojuholník má dva vnútorné uhly s veľkosťou $${ang[0]}^\\circ$ a $${ang[1]}^\\circ$. Aký je to trojuholník podľa uhlov?`,
        solution: `Tretí uhol: $180^\\circ - ${ang[0]}^\\circ - ${ang[1]}^\\circ = ${ang[2]}^\\circ$. Najväčší uhol má $${Math.max(A, B, C)}^\\circ$, ${['všetky uhly sú ostré, trojuholník je ostrouhlý', 'je pravý, trojuholník je pravouhlý', 'je tupý, trojuholník je tupouhlý'][kind]}.`,
        hint: 'Dopočítaj tretí uhol a pozri sa na najväčší z nich.'
      };
    }
    if (t < 0.75) {
      const s = [rnd(2, 12), rnd(2, 12)].sort((x, y) => x - y);
      const r = Math.random();
      const c = r < 0.45 ? rnd(s[1], s[0] + s[1] - 1) : r < 0.6 ? s[0] + s[1] : s[0] + s[1] + rnd(1, 5);
      const all = [s[0], s[1], c].sort((x, y) => x - y), ok = all[0] + all[1] > all[2];
      const shown = shuffle(all);
      return {
        type: 'choice', options: ['áno', 'nie'], answer: ok ? 'áno' : 'nie',
        q: `Dá sa zostrojiť trojuholník so stranami ${shown[0]} cm, ${shown[1]} cm a ${shown[2]} cm?`,
        solution: `Dve kratšie strany: $${all[0]} + ${all[1]} = ${all[0] + all[1]}$, najdlhšia je ${all[2]}. ${ok ? `$${all[0] + all[1]} &gt; ${all[2]}$, trojuholník sa zostrojiť dá.` : all[0] + all[1] === all[2] ? `Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.` : `$${all[0] + all[1]} &lt; ${all[2]}$, trojuholník sa zostrojiť nedá.`}`,
        hint: 'Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.'
      };
    }
    if (Math.random() < 0.5) {
      const g = 2 * rnd(10, 80);
      return {
        answer: (180 - g) / 2,
        q: `V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť $${g}^\\circ$. Aký veľký je každý z uhlov pri základni?`,
        solution: `Uhly pri základni sú zhodné: $(180^\\circ - ${g}^\\circ) : 2 = ${180 - g}^\\circ : 2 = ${(180 - g) / 2}^\\circ$.`,
        hint: 'Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.'
      };
    }
    const k = rnd(0, 2), x = rnd(3, 9);
    let s;
    if (k === 0) { do { s = [x, rnd(3, 12), rnd(3, 12)]; } while (new Set(s).size < 3 || Math.max(...s) * 2 >= s[0] + s[1] + s[2]); }
    else if (k === 1) { let y; do { y = rnd(3, 12); } while (y === x || y >= 2 * x); s = [x, x, y]; }
    else s = [x, x, x];
    const name = ['rôznostranný', 'rovnoramenný', 'rovnostranný'][k];
    s = shuffle(s);
    return {
      type: 'choice', options: ['rôznostranný', 'rovnoramenný', 'rovnostranný'], answer: name,
      q: `Trojuholník má strany ${s[0]} cm, ${s[1]} cm a ${s[2]} cm. Aký je podľa strán?`,
      solution: ['Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.', 'Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.', 'Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.'][k],
      hint: 'Spočítaj, koľko strán má rovnakú dĺžku.'
    };
  });

  lesson({
    id: 'r6-obvod-obsah', order: 80, title: 'Obvod a obsah štvorca a obdĺžnika',
    summary: 'Vzorce pre obvod a obsah, výpočet chýbajúcej strany, jednotky obsahu a ich premena.',
    theory: [
      `<p><strong>Obvod</strong> je dĺžka hranice útvaru, meriame ho v dĺžkových jednotkách (mm, cm, m). <strong>Obsah</strong> udáva, koľko štvorčekov
       so stranou 1 jednotka sa do útvaru zmestí; meriame ho v plošných jednotkách ($\\text{mm}^2$, $\\text{cm}^2$, $\\text{m}^2$).</p>`,
      { fig: 'r6-obdlznik-siet', caption: 'Do obdĺžnika 5 cm × 3 cm sa zmestí 3 rady po 5 štvorčekoch s obsahom 1 cm², spolu 15 cm².' },
      `<p><strong>Obdĺžnik</strong> so stranami $a$, $b$: $o = 2\\cdot(a + b)$, $S = a\\cdot b$.
       <strong>Štvorec</strong> so stranou $a$: $o = 4\\cdot a$, $S = a\\cdot a = a^2$.
       Ak poznáme obsah a jednu stranu obdĺžnika, druhú dostaneme delením: $b = S : a$.</p>`,
      `<p><strong>Jednotky obsahu:</strong> $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$, $1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$, $1\\,\\text{m}^2 = 100\\,\\text{dm}^2$.
       Pri plošných jednotkách je prevodový vzťah 100, nie 10, lebo štvorec so stranou 1 cm obsahuje $10\\cdot 10$ štvorčekov so stranou 1 mm.</p>`
    ],
    examples: [
      { task: 'Záhrada má tvar obdĺžnika 14 m × 9 m. Koľko metrov pletiva treba na jej oplotenie a aký má obsah?',
        steps: ['Obvod: $o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$.', 'Obsah: $S = 14\\cdot 9 = 126\\,\\text{m}^2$.', '<strong>Treba 46 m pletiva, záhrada má 126 m².</strong>'] },
      { task: 'Štvorec má obvod 36 cm. Aký má obsah?',
        steps: ['Strana: $a = 36 : 4 = 9\\,\\text{cm}$.', '$S = 9\\cdot 9 = 81\\,\\text{cm}^2$.'] }
    ]
  });

  const UNITS = ['mm', 'cm', 'dm', 'm'];

  gen('r6-obvod-obsah', () => {
    const t = Math.random();
    if (t < 0.35) {
      const dec = Math.random() < 0.3;
      const a = dec ? rnd(21, 99) / 10 : rnd(3, 25), b = dec ? rnd(2, 9) : rnd(2, 20);
      const garden = Math.random() < 0.4, askO = Math.random() < 0.5, u = garden ? 'm' : 'cm';
      const o = nice(2 * (a + b)), S = nice(a * b);
      return {
        answer: askO ? o : S,
        q: garden
          ? `Záhrada má tvar obdĺžnika s rozmermi ${T(a)} m a ${b} m. ${askO ? 'Koľko metrov pletiva treba na jej oplotenie?' : 'Aký je obsah záhrady v m²?'}`
          : `Obdĺžnik má strany $a = ${D(a)}\\,\\text{cm}$ a $b = ${b}\\,\\text{cm}$. Vypočítaj jeho ${askO ? 'obvod v cm' : 'obsah v cm²'}.`,
        solution: askO ? `$o = 2\\cdot(a + b) = 2\\cdot(${D(a)} + ${b}) = 2\\cdot ${D(a + b)} = ${D(o)}\\,\\text{${u}}$.` : `$S = a\\cdot b = ${D(a)}\\cdot ${b} = ${D(S)}\\,\\text{${u}}^2$.`,
        hint: askO ? 'Obvod obdĺžnika: o = 2 · (a + b).' : 'Obsah obdĺžnika: S = a · b.'
      };
    }
    if (t < 0.6) {
      const a = rnd(2, 15), k = rnd(0, 2);
      if (k === 0) return { answer: a * a, q: `Štvorec má stranu $${a}\\,\\text{cm}$. Aký je jeho obsah v cm²?`, solution: `$S = a\\cdot a = ${a}\\cdot ${a} = ${a * a}\\,\\text{cm}^2$.`, hint: 'Obsah štvorca je strana krát strana.' };
      if (k === 1) return { answer: a * a, q: `Štvorec má obvod $${4 * a}\\,\\text{cm}$. Aký je jeho obsah v cm²?`, solution: `Strana: $a = ${4 * a} : 4 = ${a}\\,\\text{cm}$. Obsah: $S = ${a}\\cdot ${a} = ${a * a}\\,\\text{cm}^2$.`, hint: 'Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).' };
      return { answer: 4 * a, q: `Štvorec má obsah $${a * a}\\,\\text{cm}^2$. Aký je jeho obvod v cm?`, solution: `Hľadáme číslo, ktoré vynásobené samo sebou dá ${a * a}: $a = ${a}\\,\\text{cm}$. Obvod: $o = 4\\cdot ${a} = ${4 * a}\\,\\text{cm}$.`, hint: 'Ktoré číslo krát samo sebou dá obsah? To je strana.' };
    }
    if (t < 0.8) {
      const a = rnd(3, 15), b = rnd(2, 15), S = a * b;
      if (Math.random() < 0.5) {
        return {
          answer: b,
          q: `Obdĺžnik má obsah $${S}\\,\\text{cm}^2$ a jednu stranu $${a}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?`,
          solution: `$S = a\\cdot b$, preto $b = S : a = ${S} : ${a} = ${b}\\,\\text{cm}$.`,
          hint: 'Obsah je súčin strán, druhú stranu teda dostaneš delením.'
        };
      }
      const o = 2 * (a + b);
      return {
        answer: b,
        q: `Obdĺžnik má obvod $${o}\\,\\text{cm}$ a jednu stranu $${a}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?`,
        solution: `Polovica obvodu je $a + b = ${o} : 2 = ${o / 2}$, preto $b = ${o / 2} - ${a} = ${b}\\,\\text{cm}$.`,
        hint: 'Polovica obvodu je súčet dvoch susedných strán.'
      };
    }
    const i = rnd(0, 2), down = Math.random() < 0.5;
    const big = UNITS[i + 1], small = UNITS[i];
    if (down) {
      const v = Math.random() < 0.5 ? rnd(2, 40) : rnd(11, 99) / 10;
      return {
        answer: nice(v * 100),
        q: `Premeň: $${D(v)}\\,\\text{${big}}^2 = \\;?\\;\\text{${small}}^2$`,
        solution: `$1\\,\\text{${big}}^2 = 100\\,\\text{${small}}^2$, preto $${D(v)}\\,\\text{${big}}^2 = ${D(v)}\\cdot 100 = ${D(v * 100)}\\,\\text{${small}}^2$.`,
        hint: 'Medzi susednými plošnými jednotkami je prevodový vzťah 100.'
      };
    }
    const v = rnd(1, 99) * pick([10, 100]);
    return {
      answer: nice(v / 100),
      q: `Premeň: $${v >= 1000 ? sp(v).replace(' ', '\\,') : v}\\,\\text{${small}}^2 = \\;?\\;\\text{${big}}^2$`,
      solution: `$100\\,\\text{${small}}^2 = 1\\,\\text{${big}}^2$, preto delíme stom: $${v} : 100 = ${D(v / 100)}\\,\\text{${big}}^2$.`,
      hint: 'Z menšej jednotky na väčšiu delíme číslom 100.'
    };
  });

  lesson({
    id: 'r6-osova', order: 90, title: 'Osová súmernosť',
    summary: 'Obraz bodu a útvaru v osovej súmernosti, osovo súmerné útvary a ich osi.',
    theory: [
      `<p><strong>Osová súmernosť</strong> s osou $o$ priradí každému bodu $A$ jeho <em>obraz</em> $A'$ tak, že úsečka $AA'$ je kolmá na os
       a os ju rozpoľuje. Bod $A$ a jeho obraz sú teda rovnako ďaleko od osi, každý na inej strane. Body na osi sa zobrazia samy na seba.</p>`,
      { fig: 'r6-osova', caption: 'Modrý útvar a jeho obraz (zelený) podľa osi o. Bod A je 4 štvorčeky vľavo od osi, jeho obraz A′ 4 štvorčeky vpravo.' },
      `<p>Obraz útvaru zostrojíme tak, že zobrazíme jeho vrcholy a spojíme ich. Obraz má rovnaký tvar aj veľkosť ako vzor, je len „preklopený“ ako v zrkadle.</p>`,
      `<p>Útvar je <strong>osovo súmerný</strong>, ak existuje priamka, podľa ktorej sa zobrazí sám na seba (po preložení papiera pozdĺž nej sa obe polovice prekryjú).
       Takú priamku nazývame <em>os súmernosti</em>. Štvorec má 4 osi, obdĺžnik 2, rovnostranný trojuholník 3, rovnoramenný 1 a kruh nekonečne veľa.</p>`
    ],
    examples: [
      { task: 'Os $o$ je zvislá priamka v stĺpci 6. Bod $A$ leží v stĺpci 2. V ktorom stĺpci leží jeho obraz?',
        steps: ['Bod $A$ je od osi vzdialený $6 - 2 = 4$ stĺpce.', 'Obraz je 4 stĺpce na druhej strane: $6 + 4 = 10$.', '<strong>Obraz leží v stĺpci 10.</strong>'] },
      { task: 'Koľko osí súmernosti má obdĺžnik, ktorý nie je štvorec?',
        steps: ['Os prechádza stredmi dvoch protiľahlých strán – sú dve také.', 'Uhlopriečka osou nie je: po preložení sa polovice nekryjú.', '<strong>2 osi.</strong>'] }
    ]
  });

  const SYM_LETTERS = 'AHIMOTUVWXY'.split(''), SYM_H = 'BCDEK'.split(''), NOSYM = 'FGJLNPRSZ'.split('');

  gen('r6-osova', () => {
    const t = Math.random();
    if (t < 0.35) {
      const s = pick(SYM_SHAPES);
      return {
        type: 'choice', options: AXES_OPTS, answer: s.axes,
        q: `Koľko osí súmernosti má ${s.n}? <svg viewBox="0 0 180 120" width="180" role="img" aria-label="${s.n}">${s.d}</svg>`,
        solution: s.why,
        hint: 'Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?'
      };
    }
    if (t < 0.6) {
      const r = Math.random(), L = r < 0.4 ? pick(SYM_LETTERS) : r < 0.6 ? pick(SYM_H) : pick(NOSYM);
      const yes = !NOSYM.includes(L);
      return {
        type: 'choice', options: ['áno', 'nie'], answer: yes ? 'áno' : 'nie',
        q: `Je veľké tlačené písmeno <strong style="font-size:1.6em">${L}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?`,
        solution: yes ? `Áno. Písmeno ${L} má ${'HIOX'.includes(L) ? 'zvislú aj vodorovnú' : SYM_H.includes(L) ? 'vodorovnú' : 'zvislú'} os súmernosti.`
          : `Nie. Písmeno ${L} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.`,
        hint: 'Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.'
      };
    }
    const vertical = Math.random() < 0.5, k = rnd(3, 9);
    let c;
    do { c = rnd(0, 12); } while (c === k || 2 * k - c < 0 || 2 * k - c > 12);
    const other = rnd(1, 5), C = 22, ox = 24, oy = 12;
    const px = vertical ? c : other, py = vertical ? other : c;
    let g = `<svg viewBox="0 0 ${ox * 2 + 12 * C} ${oy + 16 + (vertical ? 6 : 12) * C}" width="320" role="img" aria-label="štvorčeková sieť s osou a bodom A">`;
    const W = 12, H = vertical ? 6 : 12;
    for (let i = 0; i <= W; i++) g += `<line class="f-grid" x1="${ox + i * C}" y1="${oy}" x2="${ox + i * C}" y2="${oy + H * C}"/>`;
    for (let j = 0; j <= H; j++) g += `<line class="f-grid" x1="${ox}" y1="${oy + j * C}" x2="${ox + W * C}" y2="${oy + j * C}"/>`;
    if (vertical) {
      for (let i = 0; i <= W; i += 2) g += `<text class="f-small" x="${ox + i * C}" y="${oy + H * C + 14}" text-anchor="middle">${i}</text>`;
      g += `<line class="f-dash" x1="${ox + k * C}" y1="${oy - 4}" x2="${ox + k * C}" y2="${oy + H * C + 4}"/>`;
    } else {
      for (let j = 0; j <= H; j += 2) g += `<text class="f-small" x="${ox - 4}" y="${oy + j * C + 4}" text-anchor="end">${j}</text>`;
      g += `<line class="f-dash" x1="${ox - 2}" y1="${oy + k * C}" x2="${ox + W * C + 4}" y2="${oy + k * C}"/>`;
    }
    g += `<circle class="f-dot" cx="${ox + px * C}" cy="${oy + py * C}" r="5"/><text class="f-math" x="${ox + px * C + 6}" y="${oy + py * C - 6}">A</text></svg>`;
    const what = vertical ? 'stĺpci' : 'riadku', whats = vertical ? 'stĺpcov' : 'riadkov';
    const dist = Math.abs(k - c);
    return {
      answer: 2 * k - c,
      q: `Os súmernosti $o$ (prerušovaná čiara) je ${vertical ? 'zvislá priamka v stĺpci' : 'vodorovná priamka v riadku'} ${k}. Bod $A$ leží v ${what} ${c}. V ktorom ${what} leží jeho obraz $A'$? ${g}`,
      solution: `Bod $A$ je od osi vzdialený $|${k} - ${c}| = ${dist}$ ${pl(dist, vertical ? ['stĺpec', 'stĺpce', 'stĺpcov'] : ['riadok', 'riadky', 'riadkov'])}. Obraz je rovnako ďaleko na druhej strane osi: $${k} ${c < k ? '+' : '-'} ${dist} = ${2 * k - c}$.`,
      hint: `Spočítaj, koľko ${whats} je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.`
    };
  });
})();
