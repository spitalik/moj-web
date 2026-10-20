/* 6. ročník: desatinné čísla, zlomky, deliteľnosť a prvočísla, NSD a nsn, celé čísla, uhly, trojuholníky,
   obvod a obsah štvorca a obdĺžnika, osová súmernosť. */
(function () {
  'use strict';

  const { rnd, pick, gcd, shuffle } = EXERCISES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r6' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;
  const { T } = CONTENT_I18N;

  // Tvar podstatného mena podľa počtu: 1 deliteľ, 2 delitele, 5 deliteľov.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  // Desatinné čísla bez chýb zaokrúhľovania; D = zápis do KaTeX (0{,}5), dt = zápis do textu (0,5).
  // Oddeľovač podľa jazyka (v slovenčine čiarka, v angličtine bodka).
  const nice = (x) => +(+x).toFixed(6);
  const dsep = () => (CONTENT_I18N.decimal() === ',' ? '{,}' : '.');
  const D = (x) => String(nice(x)).replace('.', dsep());
  const dt = (x) => String(nice(x)).replace('.', CONTENT_I18N.decimal());
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
        if (big) s += `<text class="f-small" x="${X(k)}" y="74" text-anchor="middle">${end ? 2 + k / 100 : '2' + CONTENT_I18N.decimal() + k / 10}</text>`;
      }
      return s + `<circle class="f-dot" cx="${X(40)}" cy="46" r="6"/><text class="f-text c-accent" x="${X(40)}" y="24" text-anchor="middle">${dt(2.4)}</text>
        <circle class="f-dot f-dot-ok" cx="${X(75)}" cy="46" r="6"/><text class="f-text c-ok" x="${X(75)}" y="24" text-anchor="middle">${dt(2.75)}</text>
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
      const f2 = (x) => x.toFixed(2).replace('.', dsep());
      // čísla zarovnané sprava ako celé čísla: posledná číslica a (desatiny) pod stotinami b
      const shifted = nice(add ? a / 10 + b : a / 10 - b);
      return {
        mistakes: decs(a) === 1 && shifted > 0 && shifted !== res
          ? [{ value: shifted, msg: T`Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo ${dt(a)} si dopíš ako ${dt(a)}0.` }] : [],
        answer: res,
        q: T`Vypočítaj $${D(a)} ${add ? '+' : '-'} ${D(b)}$.`,
        solution: T`Zarovnáme desatinné čiarky pod seba a doplníme nuly: $${f2(a)} ${add ? '+' : '-'} ${f2(b)} = ${D(res)}$.`,
        hint: T`Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.`
      };
    }
    if (t < 0.5) {
      const a = rnd(11, 99) / 10, b = Math.random() < 0.5 ? rnd(2, 9) : rnd(11, 49) / 10;
      const ai = Math.round(a * 10), bi = Math.round(b * Math.pow(10, decs(b))), k = decs(a) + decs(b);
      const res = nice(a * b);
      // celú a desatinnú časť vynásobené zvlášť: 2,4 · 3 = 6,12
      const ia = Math.floor(a), fa = ai % 10;
      return {
        mistakes: decs(b) === 0 && fa * b >= 10
          ? [{ value: Number(`${ia * b}.${fa * b}`), msg: T`Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.` }] : [],
        steps: [
          { q: T`Vynásob čísla bez desatinných čiarok: $${ai}\\cdot ${bi}$.`, answer: ai * bi },
          { q: T`Koľko desatinných miest majú činitele $${D(a)}$ a $${D(b)}$ spolu?`, answer: k },
          { q: T`Umiestni desatinnú čiarku: koľko je $${D(a)}\\cdot ${D(b)}$?`, answer: res }
        ],
        answer: res,
        q: T`Vypočítaj $${D(a)}\\cdot ${D(b)}$.`,
        solution: T`Násobíme bez čiarok: $${ai}\\cdot ${bi} = ${ai * bi}$. Činitele majú spolu ${k} ${pl(k, ['desatinné miesto', 'desatinné miesta', 'desatinných miest'])}, preto $${D(a)}\\cdot ${D(b)} = ${D(res)}$.`,
        hint: T`Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.`
      };
    }
    if (t < 0.65) {
      const x = nice(rnd(1, 99999) / 1000), m = pick([10, 100, 1000]), mul = Math.random() < 0.5;
      const z = String(m).length - 1, res = nice(mul ? x * m : x / m);
      const M = m === 1000 ? '1 000' : m, places = pl(z, ['miesto', 'miesta', 'miest']);
      const eq = `$${D(x)} ${mul ? '\\cdot' : ':'} ${m === 1000 ? '1\\,000' : m} = ${D(res)}$`;
      return {
        mistakes: z >= 2 ? [{ value: nice(mul ? x / m : x * m), msg: mul
          ? T`Posunul si čiarku opačným smerom. Pri násobení číslom ${M} sa číslo zväčší.`
          : T`Posunul si čiarku opačným smerom. Pri delení číslom ${M} sa číslo zmenší.` }] : [],
        answer: res, show: dt(res),
        q: T`Vypočítaj $${D(x)} ${mul ? '\\cdot' : ':'} ${m === 1000 ? '1\\,000' : m}$.`,
        solution: mul
          ? T`Pri násobení číslom ${M} posunieme desatinnú čiarku o ${z} ${places} doprava: ${eq}.`
          : T`Pri delení číslom ${M} posunieme desatinnú čiarku o ${z} ${places} doľava: ${eq}.`,
        hint: T`Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.`
      };
    }
    if (t < 0.82) {
      const q = rnd(11, 199) / 10, d = rnd(2, 9), a = nice(q * d);
      return {
        answer: q,
        q: T`Vypočítaj $${D(a)} : ${d}$.`,
        solution: T`Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: $${D(a)} : ${d} = ${D(q)}$. Skúška: $${D(q)}\\cdot ${d} = ${D(a)}$.`,
        hint: T`Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.`
      };
    }
    const N = rnd(1001, 99999), x = N / 1000, p = rnd(0, 2);
    const ans = Math.round(N / Math.pow(10, 3 - p)) / Math.pow(10, p);
    const digit = Math.floor(N / Math.pow(10, 2 - p)) % 10;
    const place = ['jednotky (celé čísla)', 'desatiny', 'stotiny'][p];
    const unit = Math.pow(10, 3 - p), cut = Math.floor(N / unit) * unit / 1000;
    const rm = [digit >= 5
      ? { value: nice(cut), msg: T`Číslica za týmto miestom je ${digit}, teda 5 alebo viac – zaokrúhľuje sa nahor.` }
      : { value: nice(cut + unit / 1000), msg: T`Číslica za týmto miestom je ${digit}, teda menej ako 5 – zaokrúhľuje sa nadol.` }];
    for (const q of [p - 1, p + 1]) {
      if (q < 0 || q > 2) continue;
      const w = Math.round(N / Math.pow(10, 3 - q)) / Math.pow(10, q);
      if (Math.abs(w - ans) > 1e-9 && !rm.some((m) => Math.abs(m.value - w) < 1e-9)) {
        rm.push({ value: w, msg: T`Zaokrúhlil si na iné miesto. Na ${place} znamená, že posledná ponechaná číslica stojí na mieste ${['jednotiek', 'desatín', 'stotín'][p]}.` });
      }
    }
    return {
      mistakes: rm,
      steps: [
        { q: T`Ktorá číslica stojí v čísle $${D(x)}$ hneď za miestom ${['jednotiek', 'desatín', 'stotín'][p]}?`, answer: digit },
        { q: T`Za týmto miestom je číslica ${digit}. Zaokrúhli $${D(x)}$ na ${place}.`, answer: ans }
      ],
      answer: ans,
      q: T`Zaokrúhli číslo $${D(x)}$ na ${place}.`,
      solution: digit >= 5
        ? T`Rozhoduje číslica hneď za týmto miestom, je to ${digit}. Je 5 alebo viac, zaokrúhlime nahor: $${D(x)} \\doteq ${ans.toFixed(p).replace('.', dsep())}$.`
        : T`Rozhoduje číslica hneď za týmto miestom, je to ${digit}. Je menšia ako 5, zaokrúhlime nadol: $${D(x)} \\doteq ${ans.toFixed(p).replace('.', dsep())}$.`,
      hint: T`Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.`
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
        mistakes: p > 1 ? [
          { value: n / q, msg: q === 2 ? T`Vypočítal si iba jednu polovicu. Ešte ju vynásob čitateľom ${p}.` : T`Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom ${p}.` },
          ...(n % p === 0 && n / p * q !== n / q * p ? [{ value: n / p * q, msg: T`Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.` }] : [])
        ] : [],
        steps: p > 1 ? [
          { q: T`Koľko je $\\frac{1}{${q}}$ z čísla ${n}?`, answer: n / q },
          { q: T`Koľko je $\\frac{${p}}{${q}}$ z čísla ${n}?`, answer: n / q * p }
        ] : undefined,
        answer: n / q * p,
        q: T`Koľko je $\\frac{${p}}{${q}}$ z čísla ${n}?`,
        solution: T`Najprv jedna časť: $${n} : ${q} = ${n / q}$. Potom ${p} ${pl(p, ['časť', 'časti', 'častí'])}: $${n / q}\\cdot ${p} = ${n / q * p}$.`,
        hint: T`Číslo vydeľ menovateľom a výsledok vynásob čitateľom.`
      };
    }
    if (t < 0.55) {
      let p, q;
      do { q = rnd(2, 9); p = rnd(1, q - 1); } while (gcd(p, q) !== 1);
      const k = rnd(2, 9);
      // krátenie iba najmenším prvočiniteľom čísla k (zlomok ešte nie je v základnom tvare)
      let f = 2;
      while (k % f) f++;
      return {
        mistakes: f < k ? [{ value: `${p * k / f}/${q * k / f}`, msg: T`Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.` }] : [],
        steps: [
          { q: T`Aký je najväčší spoločný deliteľ čísel ${p * k} a ${q * k}?`, answer: k },
          { type: 'text', q: T`Vydeľ čitateľa aj menovateľa číslom ${k}. Aký zlomok dostaneš (a/b)?`, answer: `${p}/${q}`, placeholder: T`napr. 2/3` }
        ],
        type: 'text', answer: `${p}/${q}`, placeholder: T`napr. 2/3`,
        q: T`Skráť zlomok $\\frac{${p * k}}{${q * k}}$ na základný tvar. Odpoveď zapíš ako a/b.`,
        solution: T`Najväčší spoločný deliteľ čísel ${p * k} a ${q * k} je ${k}. Krátime ním: $\\frac{${p * k}}{${q * k}} = \\frac{${p * k} : ${k}}{${q * k} : ${k}} = \\frac{${p}}{${q}}$.`,
        hint: T`Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.`
      };
    }
    if (t < 0.78) {
      const [p, q] = pick(DEC_FRAC);
      let m = 1;
      while ((Math.pow(10, m)) % q) m++;
      const ten = Math.pow(10, m), k = ten / q;
      const glued = Number(`${p}.${q}`);
      return {
        mistakes: Math.abs(glued - p / q) > 1e-9 ? [{ value: glued, msg: T`Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.` }] : [],
        steps: q === ten ? undefined : [
          { q: T`Akým číslom treba rozšíriť zlomok $\\frac{${p}}{${q}}$, aby bol v menovateli ${ten === 1000 ? '1 000' : ten}?`, answer: k },
          { q: T`Aký bude čitateľ rozšíreného zlomku?`, answer: p * k },
          { q: T`Zapíš $\\frac{${p * k}}{${ten === 1000 ? '1\\,000' : ten}}$ ako desatinné číslo.`, answer: p / q }
        ],
        answer: p / q,
        q: T`Zapíš zlomok $\\frac{${p}}{${q}}$ ako desatinné číslo.`,
        solution: T`Rozšírime na menovateľ ${ten === 1000 ? '1 000' : ten}: $\\frac{${p}}{${q}} = \\frac{${p * k}}{${ten === 1000 ? '1\\,000' : ten}} = ${D(p / q)}$. (Alebo vydelíme $${p} : ${q}$.)`,
        hint: T`Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.`
      };
    }
    let a, b, c, d;
    do { b = rnd(2, 9); d = rnd(2, 9); a = rnd(1, b - 1); c = rnd(1, d - 1); } while (a === c && b === d);
    const L = lcm(b, d), A = a * L / b, C = c * L / d, s = sign(A, C);
    return {
      type: 'choice', options: ['<', '=', '>'], answer: s,
      q: T`Doplň správny znak: $\\frac{${a}}{${b}} \\;\\square\\; \\frac{${c}}{${d}}$`,
      solution: T`Spoločný menovateľ je ${L}: $\\frac{${a}}{${b}} = \\frac{${A}}{${L}}$ a $\\frac{${c}}{${d}} = \\frac{${C}}{${L}}$. Keďže $${A} ${signH(s)} ${C}$, platí $\\frac{${a}}{${b}} ${signH(s)} \\frac{${c}}{${d}}$.`,
      hint: T`Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.`,
      choiceHints: Object.fromEntries(['<', '=', '>'].filter((o) => o !== s).map((o) => [o,
        o === '=' ? T`Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.`
          : T`Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.`]))
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
    2: (n) => (n % 2 === 0 ? T`Posledná číslica je ${n % 10}, je párna.` : T`Posledná číslica je ${n % 10}, nie je párna.`),
    3: (n) => (digitSum(n) % 3 === 0 ? T`Ciferný súčet je ${digitSum(n)}, je deliteľný 3.` : T`Ciferný súčet je ${digitSum(n)}, nie je deliteľný 3.`),
    4: (n) => (n % 100 % 4 === 0 ? T`Číslo z posledných dvoch číslic je ${n % 100}, je deliteľné 4.` : T`Číslo z posledných dvoch číslic je ${n % 100}, nie je deliteľné 4.`),
    5: (n) => (n % 5 === 0 ? T`Posledná číslica je ${n % 10}, je to 0 alebo 5.` : T`Posledná číslica je ${n % 10}, nie je to 0 ani 5.`),
    6: (n) => `${n % 2 === 0
      ? (digitSum(n) % 3 === 0 ? T`Je párne a ciferný súčet ${digitSum(n)} je deliteľný 3.` : T`Je párne a ciferný súčet ${digitSum(n)} nie je deliteľný 3.`)
      : (digitSum(n) % 3 === 0 ? T`Nie je párne a ciferný súčet ${digitSum(n)} je deliteľný 3.` : T`Nie je párne a ciferný súčet ${digitSum(n)} nie je deliteľný 3.`)} ${T`Na deliteľnosť 6 treba oboje.`}`,
    9: (n) => (digitSum(n) % 9 === 0 ? T`Ciferný súčet je ${digitSum(n)}, je deliteľný 9.` : T`Ciferný súčet je ${digitSum(n)}, nie je deliteľný 9.`),
    10: (n) => (n % 10 === 0 ? T`Posledná číslica je ${n % 10}, je to 0.` : T`Posledná číslica je ${n % 10}, nie je to 0.`)
  };
  const sp = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  gen('r6-delitelnost', () => {
    const t = Math.random();
    if (t < 0.28) {
      const k = pick([2, 3, 4, 5, 6, 9, 10]);
      const n = Math.random() < 0.5 ? k * rnd(Math.ceil(100 / k), Math.floor(9999 / k)) : rnd(100, 9999);
      const yes = n % k === 0;
      return {
        type: 'choice', options: [T.s('áno'), T.s('nie')], answer: yes ? T.s('áno') : T.s('nie'),
        q: T`Je číslo ${sp(n)} deliteľné číslom ${k}?`,
        solution: `${RULES[k](n)} ${yes ? T`Preto áno, číslo ${sp(n)} je deliteľné ${k}.` : T`Preto nie, číslo ${sp(n)} nie je deliteľné ${k}.`}`,
        hint: T`Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).`,
        choiceHints: { [yes ? T.s('nie') : T.s('áno')]: {
          2: T`Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.`,
          3: T`Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.`,
          4: T`Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.`,
          5: T`Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.`,
          6: T`Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.`,
          9: T`Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.`,
          10: T`Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.`
        }[k] }
      };
    }
    if (t < 0.5) {
      const r = Math.random();
      const n = r < 0.06 ? 1 : r < 0.5 ? pick(PRIMES) : rnd(4, 100);
      const ans = n === 1 ? 'ani prvočíslo, ani zložené' : isPrime(n) ? 'prvočíslo' : 'zložené číslo';
      const f = factor(n);
      return {
        type: 'choice', options: ['prvočíslo', 'zložené číslo', 'ani prvočíslo, ani zložené'].map(T.s), answer: T.s(ans),
        q: T`Aké je číslo ${n}?`,
        solution: n === 1 ? T`Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.`
          : isPrime(n) ? T`Číslo ${n} má iba dva delitele: 1 a ${n}. Je to prvočíslo.`
            : T`$${n} = ${f[0]}\\cdot ${n / f[0]}$, teda okrem 1 a ${n} má aj deliteľ ${f[0]}. Je to zložené číslo.`,
        hint: T`Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.`,
        choiceHints: Object.fromEntries(['prvočíslo', 'zložené číslo', 'ani prvočíslo, ani zložené'].filter((o) => o !== ans).map((o) => [T.s(o),
          o === 'ani prvočíslo, ani zložené' ? T`Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.`
            : n === 1 ? T`Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?`
              : o === 'prvočíslo' ? T`Prvočíslo má iba dva delitele. Skús, či sa ${n} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.`
                : T`Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla ${n} – ak žiadny nie je, číslo nie je zložené.`]))
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
      let by3 = 0;
      while ((rest + by3) % 3) by3++;
      return {
        mistakes: [
          ...(k === 9 && by3 !== ans ? [{ value: by3, msg: T`Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.` }] : []),
          ...(ans + k <= 9 ? [{ value: ans + k, msg: T`S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.` }] : [])
        ],
        steps: [
          { q: T`Aký je súčet známych číslic?`, answer: rest },
          { q: T`Ktorú najmenšiu číslicu treba pripočítať k ${rest}, aby bol súčet deliteľný ${k}?`, answer: ans }
        ],
        answer: ans,
        q: T`Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo $${shown}$ bolo deliteľné ${k}?`,
        solution: T`Súčet známych číslic je ${rest}. Ciferný súčet musí byť deliteľný ${k}: najmenšia vhodná číslica je ${ans}, lebo $${rest} + ${ans} = ${rest + ans}$.`,
        hint: T`Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný ${k}.`
      };
    }
    if (t < 0.85) {
      const n = rnd(6, 60), dv = divisors(n);
      return {
        mistakes: dv.length > 3 ? [{ value: dv.length - 2, msg: T`Nezabudni, že deliteľom je vždy aj 1 a samotné číslo ${n}.` }] : [],
        answer: dv.length,
        q: T`Koľko deliteľov má číslo ${n}?`,
        solution: T`Delitele čísla ${n} sú ${dv.join(', ')}. Je ich ${dv.length}.`,
        hint: T`Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …`
      };
    }
    let n;
    do { n = [2, 2, 3, 3, 5, 7, 11].slice(0, 7).sort(() => Math.random() - 0.5).slice(0, rnd(2, 4)).reduce((a, b) => a * b, 1); } while (n > 400 || n < 12);
    const f = factor(n);
    let cur = n;
    const steps = f.map((p) => { const s = `${cur} : ${p} = ${cur / p}`; cur /= p; return s; });
    const rest = n / f[0];
    return {
      mistakes: !isPrime(rest) ? [{ value: [f[0], rest], msg: T`Rozklad nie je dokončený: ${rest} nie je prvočíslo. Pokračuj v delení prvočíslami.` }] : [],
      type: 'tuple', answer: f, placeholder: T`napr. 2; 2; 3`,
      q: T`Rozlož číslo ${n} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).`,
      solution: T`Delíme postupne prvočíslami: $${steps.join(',\\; ')}$. Teda $${n} = ${f.join('\\cdot ')}${f.length > new Set(f).size ? ` = ${powForm(n)}` : ''}$.`,
      hint: T`Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.`
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

  // [časť o NSD, časť o nsn] – v úlohe so stuhami sa použije len prvá časť
  const nsdParts = (a, b) => {
    const g = gcd(a, b), l = lcm(a, b);
    return [T`$${a} = ${powForm(a) || 1}$, $${b} = ${powForm(b) || 1}$. NSD je súčin spoločných prvočiniteľov: $D(${a}, ${b}) = ${g === 1 ? '1' : powForm(g)}${g > 1 && powForm(g).includes('\\cdot') || /\^/.test(powForm(g)) ? ` = ${g}` : ''}$.`,
      T`nsn obsahuje všetky prvočinitele: $n(${a}, ${b}) = ${powForm(l)} = ${l}$.`];
  };
  const nsdSolution = (a, b) => nsdParts(a, b).join(' ');

  gen('r6-nsd-nsn', () => {
    const t = Math.random();
    if (t < 0.4) {
      let a, b;
      do {
        const g = rnd(2, 12), x = rnd(1, 9), y = rnd(2, 9);
        a = g * x; b = g * y;
      } while (a === b || gcd(a / gcd(a, b), b / gcd(a, b)) !== 1 || lcm(a, b) > 400 || a < 4);
      const G = gcd(a, b), Lm = lcm(a, b);
      return {
        mistakes: G > 1 ? [{ value: [G, a * b], msg: T`Súčin ${a}·${b} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.` }] : [],
        steps: [
          { q: T`Rozlož čísla ${a} a ${b} na prvočinitele. Aký je ich najväčší spoločný deliteľ?`, answer: G, hint: T`Vynásob prvočinitele, ktoré sú v oboch rozkladoch.` },
          { q: T`Aký je najmenší spoločný násobok čísel ${a} a ${b}?`, answer: Lm, hint: T`Kontrola: NSD · nsn = ${a} · ${b}.` },
          { type: 'tuple', q: T`Zapíš výsledok v poradí NSD; nsn.`, answer: [G, Lm], placeholder: T`NSD; nsn` }
        ],
        type: 'tuple', answer: [gcd(a, b), lcm(a, b)], placeholder: T`NSD; nsn`,
        q: T`Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel ${a} a ${b}. Zapíš ich v poradí NSD; nsn.`,
        solution: nsdSolution(a, b),
        hint: T`Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).`
      };
    }
    if (t < 0.62) {
      let a, b;
      do { const g = rnd(3, 15); a = g * rnd(2, 7); b = g * rnd(2, 7); } while (a === b || a > 120 || b > 120);
      const g = gcd(a, b);
      let sp1 = 2;
      while (g % sp1) sp1++;
      return {
        mistakes: [
          { value: lcm(a, b), msg: T`Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.` },
          ...(sp1 < g ? [{ value: sp1, msg: T`Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.` }] : [])
        ],
        answer: g,
        q: T`Dve stuhy merajú ${a} cm a ${b} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?`,
        solution: `${T`Dĺžka kúska musí deliť ${a} aj ${b} a má byť čo najväčšia, hľadáme $D(${a}, ${b})$.`} ${nsdParts(a, b)[0]} ${T`Jeden kúsok bude merať ${g} cm.`}`,
        hint: T`Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?`
      };
    }
    if (t < 0.84) {
      let x, y;
      do { x = pick([6, 8, 9, 10, 12, 15, 18, 20, 24, 30]); y = pick([6, 8, 9, 10, 12, 15, 18, 20, 24, 30]); } while (x >= y || y % x === 0 || lcm(x, y) > 120);
      const l = lcm(x, y), h = 7 + Math.floor(l / 60), m = l % 60;
      return {
        mistakes: [
          ...(x * y !== l ? [{ value: x * y, msg: T`Súčin ${x}·${y} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.` }] : []),
          { value: gcd(x, y), msg: T`Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.` }
        ],
        answer: l,
        q: T`Z autobusovej stanice odchádza linka A každých ${x} minút a linka B každých ${y} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?`,
        solution: T`Hľadáme najmenší spoločný násobok: $${x} = ${powForm(x)}$, $${y} = ${powForm(y)}$, $n(${x}, ${y}) = ${powForm(l)} = ${l}$. Linky odídu znova naraz o ${l} minút, teda o ${h}:${String(m).padStart(2, '0')}.`,
        hint: T`Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.`
      };
    }
    let a, b;
    do { a = rnd(4, 60); b = rnd(4, 60); } while (a === b);
    const g = gcd(a, b);
    return {
      type: 'choice', options: [T.s('súdeliteľné'), T.s('nesúdeliteľné')], answer: g > 1 ? T.s('súdeliteľné') : T.s('nesúdeliteľné'),
      q: T`Sú čísla ${a} a ${b} súdeliteľné, alebo nesúdeliteľné?`,
      solution: g > 1 ? T`Obe čísla sú deliteľné ${g}, teda $D(${a}, ${b}) = ${g} &gt; 1$. Sú súdeliteľné.`
        : T`$${a} = ${powForm(a)}$ a $${b} = ${powForm(b)}$ nemajú spoločný prvočiniteľ, $D(${a}, ${b}) = 1$. Sú nesúdeliteľné.`,
      hint: T`Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.`,
      choiceHints: g > 1
        ? { [T.s('nesúdeliteľné')]: T`Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.` }
        : { [T.s('súdeliteľné')]: T`Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.` }
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
        q: T`Doplň správny znak: $${a} \\;\\square\\; ${b}$`,
        solution: a === b ? T`Čísla sú rovnaké: $${a} = ${b}$.` : T`Na číselnej osi leží číslo ${minus(Math.max(a, b))} viac vpravo, je väčšie. Preto $${a} ${signH(s)} ${b}$.`,
        hint: T`Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.`,
        choiceHints: Object.fromEntries(['<', '=', '>'].filter((o) => o !== s).map((o) => [o,
          a === b ? T`Pozri sa pozorne – obe čísla sú rovnaké.`
            : o === '=' ? T`Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.`
              : a < 0 && b < 0 ? T`Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.`
                : T`Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.`]))
      };
    }
    if (t < 0.58) {
      let a = rnd(-15, 15), b = rnd(-15, 15);
      if (b === 0) b = -3;
      const add = Math.random() < 0.5, res = add ? a + b : a - b;
      const rew = add ? (b < 0 ? T`Pripočítať záporné číslo znamená odčítať: $${a} + (${b}) = ${a} - ${-b} = ${res}$.` : T`$${a} + ${b} = ${res}$ (posun o ${b} doprava).`)
        : (b < 0 ? T`Odčítať záporné číslo znamená pripočítať opačné: $${a} - (${b}) = ${a} + ${-b} = ${res}$.` : T`$${a} - ${b} = ${res}$ (posun o ${b} doľava).`);
      const wrong = add ? a - b : a + b;
      return {
        mistakes: wrong !== res && wrong !== -res ? [{ value: wrong, msg: b < 0
          ? (add ? T`Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.` : T`Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.`)
          : (add ? T`Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.` : T`Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.`) }] : [],
        signed: true, answer: res,
        q: T`Vypočítaj $${a} ${add ? '+' : '-'} ${par(b)}$.`,
        solution: rew,
        hint: T`Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.`
      };
    }
    if (t < 0.82) {
      if (Math.random() < 0.5) {
        const t0 = rnd(-10, 5), ch = rnd(2, 12), up = Math.random() < 0.5, t1 = up ? t0 + ch : t0 - ch;
        return {
          signed: true, answer: t1,
          q: up ? T`Ráno bolo ${minus(t0)} °C. Do večera sa oteplilo o ${ch} °C. Aká teplota bola večer (v °C)?`
            : T`Ráno bolo ${minus(t0)} °C. Do večera sa ochladilo o ${ch} °C. Aká teplota bola večer (v °C)?`,
          solution: T`$${t0} ${up ? '+' : '-'} ${ch} = ${t1}$. Večer bolo ${minus(t1)} °C.`,
          hint: up ? T`Oteplenie znamená pripočítať.` : T`Ochladenie znamená odčítať.`
        };
      }
      const lo = rnd(-15, -1), hi = rnd(lo + 2, 12);
      return {
        mistakes: hi + lo !== -(hi - lo) && hi + lo !== hi - lo ? [{ value: Math.abs(hi + lo), msg: T`Od teploty ${minus(hi)} °C odčítavaš zápornú teplotu ${minus(lo)} °C. Odčítať záporné číslo znamená pripočítať opačné.` }] : [],
        steps: hi > 0 ? [
          { q: T`O koľko stupňov stúpne teplota z ${minus(lo)} °C na 0 °C?`, answer: -lo },
          { q: T`O koľko stupňov stúpne teplota z 0 °C na ${hi} °C?`, answer: hi },
          { q: T`O koľko stupňov bolo cez deň teplejšie?`, answer: hi - lo }
        ] : undefined,
        answer: hi - lo,
        q: T`Najnižšia nočná teplota bola ${minus(lo)} °C, najvyššia denná ${minus(hi)} °C. O koľko stupňov bolo cez deň teplejšie?`,
        solution: T`Rozdiel teplôt: $${hi} - (${lo}) = ${hi} + ${-lo} = ${hi - lo}$. Cez deň bolo o ${hi - lo} °C teplejšie.`,
        hint: T`Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.`
      };
    }
    const a = rnd(-30, 30) || -12;
    if (Math.random() < 0.5) {
      return {
        signed: true, answer: -a,
        q: T`Aké je číslo opačné k číslu ${minus(a)}?`,
        solution: T`Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k ${minus(a)} je to ${minus(-a)}.`,
        hint: T`Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.`
      };
    }
    const b = rnd(-20, 20), ab = Math.abs(a) + Math.abs(b);
    return {
      mistakes: a + b !== ab && a + b !== -ab ? [{ value: a + b, msg: T`Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.` }] : [],
      answer: Math.abs(a) + Math.abs(b),
      q: T`Vypočítaj $|${a}| + |${b}|$.`,
      solution: T`$|${a}| = ${Math.abs(a)}$ a $|${b}| = ${Math.abs(b)}$, teda súčet je $${Math.abs(a)} + ${Math.abs(b)} = ${Math.abs(a) + Math.abs(b)}$.`,
      hint: T`Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.`
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
        type: 'choice', options: ['ostrý', 'pravý', 'tupý', 'priamy'].map(T.s), answer: T.s(name),
        q: pic ? `${T`Aký je tento uhol?`} ${svg}` : T`Aký je uhol s veľkosťou $${deg}^\\circ$?`,
        solution: `${pic ? `${T`Uhol má ${deg}°.`} ` : ''}${T.s(['Je menší ako 90°, preto je ostrý.', 'Má presne 90°, je pravý.', 'Je väčší ako 90° a menší ako 180°, preto je tupý.', 'Má 180°, ramená tvoria priamku, je priamy.'][kind])}`,
        hint: T`Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).`,
        choiceHints: Object.fromEntries(['ostrý', 'pravý', 'tupý', 'priamy'].filter((o) => o !== name).map((o) => [T.s(o), T.s({
          'ostrý': 'Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.',
          'pravý': 'Pravý uhol má presne 90° – ako roh zošita.',
          'tupý': 'Tupý uhol je väčší ako 90° a zároveň menší ako 180°.',
          'priamy': 'Priamy uhol má 180°, jeho ramená ležia na jednej priamke.'
        }[o])]))
      };
    }
    if (t < 0.52) {
      const a = rnd(15, 165), side = Math.random() < 0.7;
      return {
        mistakes: side ? [
          { value: 360 - a, msg: T`Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.` },
          ...(a < 90 ? [{ value: 90 - a, msg: T`Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).` }] : [])
        ] : (a !== 90 ? [{ value: 180 - a, msg: T`Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.` }] : []),
        answer: side ? 180 - a : a,
        q: side ? T`Uhol $\\alpha$ má veľkosť $${a}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?`
          : T`Uhol $\\alpha$ má veľkosť $${a}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?`,
        solution: side ? T`Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - ${a}^\\circ = ${180 - a}^\\circ$.` : T`Vrcholové uhly sú rovnako veľké, preto má tiež $${a}^\\circ$.`,
        hint: T`Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.`
      };
    }
    if (t < 0.72) {
      if (Math.random() < 0.5) {
        const d = rnd(1, 9), m = rnd(1, 59);
        return {
          mistakes: [{ value: d * 100 + m, msg: T`Jeden stupeň má 60 minút, nie 100.` }],
          steps: [
            { q: T`Koľko minút je $${d}^\\circ$?`, answer: d * 60 },
            { q: T`Pripočítaj ešte $${m}'$.`, answer: d * 60 + m }
          ],
          answer: d * 60 + m,
          q: T`Koľko minút je $${DM(d, m)}$?`,
          solution: T`$1^\\circ = 60'$, preto $${d}^\\circ = ${d * 60}'$ a spolu $${d * 60}' + ${m}' = ${d * 60 + m}'$.`,
          hint: T`Jeden stupeň má 60 minút.`
        };
      }
      const d = rnd(1, 9), m = rnd(0, 59), tot = d * 60 + m;
      const h = [Math.floor(tot / 100), tot % 100];
      return {
        mistakes: h[0] !== d || h[1] !== m ? [{ value: h, msg: T`Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.` }] : [],
        steps: [
          { q: T`Koľko celých stupňov je v $${tot}'$?`, answer: d, hint: T`Koľkokrát sa 60 zmestí do počtu minút?` },
          { q: T`Koľko minút zostane?`, answer: m },
          { type: 'tuple', q: T`Zapíš výsledok v tvare stupne; minúty.`, answer: [d, m], placeholder: T`stupne; minúty` }
        ],
        type: 'tuple', answer: [d, m], placeholder: T`stupne; minúty`,
        q: T`Vyjadri $${tot}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.`,
        solution: T`$${tot} : 60 = ${d}$, zvyšok ${m}. Teda $${tot}' = ${DM(d, m)}$.`,
        hint: T`Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.`
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
      sol = m1 + m2 >= 60
        ? T`Stupne: $${d1} + ${d2} = ${d1 + d2}$, minúty: $${m1} + ${m2} = ${m1 + m2}$. Keďže $${m1 + m2}' = 1^\\circ\\,${m1 + m2 - 60}'$, výsledok je $${DM(rd, rm)}$.`
        : T`Stupne: $${d1} + ${d2} = ${d1 + d2}$, minúty: $${m1} + ${m2} = ${m1 + m2}$. Výsledok je $${DM(rd, rm)}$.`;
    } else {
      sol = m1 >= m2 ? T`Stupne: $${d1} - ${d2} = ${d1 - d2}$, minúty: $${m1} - ${m2} = ${m1 - m2}$. Výsledok je $${DM(rd, rm)}$.`
        : T`Minút je málo, preto zameníme 1 stupeň: $${DM(d1, m1)} = ${DM(d1 - 1, m1 + 60)}$. Potom $${d1 - 1} - ${d2} = ${d1 - 1 - d2}$ a $${m1 + 60} - ${m2} = ${m1 + 60 - m2}$, výsledok je $${DM(rd, rm)}$.`;
    }
    const fin = { type: 'tuple', q: T`Zapíš výsledok v tvare stupne; minúty.`, answer: [rd, rm], placeholder: T`stupne; minúty` };
    let am = [], as;
    if (add) {
      if (m1 + m2 >= 60) am = [{ value: [d1 + d2, m1 + m2], msg: T`Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.` }];
      as = [
        { q: T`Sčítaj stupne.`, answer: d1 + d2 },
        { q: T`Sčítaj minúty.`, answer: m1 + m2 },
        Object.assign(fin, { hint: T`Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.` })
      ];
    } else if (m1 >= m2) {
      as = [{ q: T`Odčítaj stupne.`, answer: d1 - d2 }, { q: T`Odčítaj minúty.`, answer: m1 - m2 }, fin];
    } else {
      am = [
        { value: [d1 - 1 - d2, m1 + 100 - m2], msg: T`Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.` },
        { value: [d1 - d2, m1 + 60 - m2], msg: T`Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.` }
      ];
      as = [
        { q: T`Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?`, answer: m1 + 60 },
        { q: T`Odčítaj minúty.`, answer: m1 + 60 - m2 },
        { q: T`Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?`, answer: d1 - 1 - d2 },
        fin
      ];
    }
    return {
      mistakes: am, steps: as,
      type: 'tuple', answer: [rd, rm], placeholder: T`stupne; minúty`,
      q: T`Vypočítaj $${DM(d1, m1)} ${add ? '+' : '-'} ${DM(d2, m2)}$. Výsledok zapíš v tvare stupne; minúty.`,
      solution: sol,
      hint: T`Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.`
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
        mistakes: [{ value: 360 - a - b, msg: T`Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.` }],
        steps: [
          { q: T`Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?`, answer: a + b },
          { q: T`Koľko stupňov zostáva do súčtu uhlov v trojuholníku?`, answer: 180 - a - b }
        ],
        answer: 180 - a - b,
        q: T`V trojuholníku $ABC$ je $\\alpha = ${a}^\\circ$ a $\\beta = ${b}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?`,
        solution: T`Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - ${a}^\\circ - ${b}^\\circ = ${180 - a - b}^\\circ$.`,
        hint: T`Súčet vnútorných uhlov trojuholníka je 180°.`
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
        type: 'choice', options: ['ostrouhlý', 'pravouhlý', 'tupouhlý'].map(T.s), answer: T.s(name),
        q: T`Trojuholník má dva vnútorné uhly s veľkosťou $${ang[0]}^\\circ$ a $${ang[1]}^\\circ$. Aký je to trojuholník podľa uhlov?`,
        solution: [
          () => T`Tretí uhol: $180^\\circ - ${ang[0]}^\\circ - ${ang[1]}^\\circ = ${ang[2]}^\\circ$. Najväčší uhol má $${Math.max(A, B, C)}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.`,
          () => T`Tretí uhol: $180^\\circ - ${ang[0]}^\\circ - ${ang[1]}^\\circ = ${ang[2]}^\\circ$. Najväčší uhol má $${Math.max(A, B, C)}^\\circ$, je pravý, trojuholník je pravouhlý.`,
          () => T`Tretí uhol: $180^\\circ - ${ang[0]}^\\circ - ${ang[1]}^\\circ = ${ang[2]}^\\circ$. Najväčší uhol má $${Math.max(A, B, C)}^\\circ$, je tupý, trojuholník je tupouhlý.`
        ][kind](),
        hint: T`Dopočítaj tretí uhol a pozri sa na najväčší z nich.`,
        choiceHints: Object.fromEntries(['ostrouhlý', 'pravouhlý', 'tupouhlý'].filter((o) => o !== name).map((o) => [T.s(o), T.s({
          'ostrouhlý': 'Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.',
          'pravouhlý': 'Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.',
          'tupouhlý': 'Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.'
        }[o])]))
      };
    }
    if (t < 0.75) {
      const s = [rnd(2, 12), rnd(2, 12)].sort((x, y) => x - y);
      const r = Math.random();
      const c = r < 0.45 ? rnd(s[1], s[0] + s[1] - 1) : r < 0.6 ? s[0] + s[1] : s[0] + s[1] + rnd(1, 5);
      const all = [s[0], s[1], c].sort((x, y) => x - y), ok = all[0] + all[1] > all[2];
      const shown = shuffle(all);
      return {
        type: 'choice', options: [T.s('áno'), T.s('nie')], answer: ok ? T.s('áno') : T.s('nie'),
        q: T`Dá sa zostrojiť trojuholník so stranami ${shown[0]} cm, ${shown[1]} cm a ${shown[2]} cm?`,
        solution: `${T`Dve kratšie strany: $${all[0]} + ${all[1]} = ${all[0] + all[1]}$, najdlhšia je ${all[2]}.`} ${ok ? T`$${all[0] + all[1]} &gt; ${all[2]}$, trojuholník sa zostrojiť dá.` : all[0] + all[1] === all[2] ? T`Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.` : T`$${all[0] + all[1]} &lt; ${all[2]}$, trojuholník sa zostrojiť nedá.`}`,
        hint: T`Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.`,
        choiceHints: ok
          ? { [T.s('nie')]: T`Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.` }
          : { [T.s('áno')]: all[0] + all[1] === all[2]
            ? T`Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.`
            : T`Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.` }
      };
    }
    if (Math.random() < 0.5) {
      const g = 2 * rnd(10, 80);
      return {
        mistakes: [
          { value: 180 - g, msg: T`Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.` },
          { value: (360 - g) / 2, msg: T`Súčet uhlov v trojuholníku je 180°, nie 360°.` }
        ].filter((m) => m.value !== (180 - g) / 2),
        steps: [
          { q: T`Koľko stupňov majú spolu oba uhly pri základni?`, answer: 180 - g },
          { q: T`Aký veľký je jeden uhol pri základni?`, answer: (180 - g) / 2 }
        ],
        answer: (180 - g) / 2,
        q: T`V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť $${g}^\\circ$. Aký veľký je každý z uhlov pri základni?`,
        solution: T`Uhly pri základni sú zhodné: $(180^\\circ - ${g}^\\circ) : 2 = ${180 - g}^\\circ : 2 = ${(180 - g) / 2}^\\circ$.`,
        hint: T`Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.`
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
      type: 'choice', options: ['rôznostranný', 'rovnoramenný', 'rovnostranný'].map(T.s), answer: T.s(name),
      q: T`Trojuholník má strany ${s[0]} cm, ${s[1]} cm a ${s[2]} cm. Aký je podľa strán?`,
      solution: T.s(['Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.', 'Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.', 'Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.'][k]),
      hint: T`Spočítaj, koľko strán má rovnakú dĺžku.`,
      choiceHints: Object.fromEntries(['rôznostranný', 'rovnoramenný', 'rovnostranný'].filter((o) => o !== name).map((o) => [T.s(o), T.s({
        'rôznostranný': 'Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.',
        'rovnoramenný': k === 2 ? 'Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.' : 'Rovnoramenný trojuholník má dve strany rovnako dlhé.',
        'rovnostranný': 'Rovnostranný trojuholník má všetky tri strany rovnako dlhé.'
      }[o])]))
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
        mistakes: (askO
          ? [{ value: S, msg: T`Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.` },
            { value: nice(a + b), msg: T`Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.` }]
          : [{ value: o, msg: T`Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.` },
            { value: nice(a + b), msg: T`Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.` }]
        ).filter((m) => Math.abs(m.value - (askO ? o : S)) > 1e-9),
        steps: askO ? [
          { q: T`Aký je súčet dvoch susedných strán?`, answer: nice(a + b) },
          { q: T`Aký je obvod (v ${u})?`, answer: o }
        ] : undefined,
        answer: askO ? o : S,
        q: garden
          ? (askO ? T`Záhrada má tvar obdĺžnika s rozmermi ${dt(a)} m a ${b} m. Koľko metrov pletiva treba na jej oplotenie?`
            : T`Záhrada má tvar obdĺžnika s rozmermi ${dt(a)} m a ${b} m. Aký je obsah záhrady v m²?`)
          : (askO ? T`Obdĺžnik má strany $a = ${D(a)}\\,\\text{cm}$ a $b = ${b}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.`
            : T`Obdĺžnik má strany $a = ${D(a)}\\,\\text{cm}$ a $b = ${b}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².`),
        solution: askO ? `$o = 2\\cdot(a + b) = 2\\cdot(${D(a)} + ${b}) = 2\\cdot ${D(a + b)} = ${D(o)}\\,\\text{${u}}$.` : `$S = a\\cdot b = ${D(a)}\\cdot ${b} = ${D(S)}\\,\\text{${u}}^2$.`,
        hint: askO ? T`Obvod obdĺžnika: o = 2 · (a + b).` : T`Obsah obdĺžnika: S = a · b.`
      };
    }
    if (t < 0.6) {
      const a = rnd(2, 15), k = rnd(0, 2);
      if (k === 0) {
        return { answer: a * a, q: T`Štvorec má stranu $${a}\\,\\text{cm}$. Aký je jeho obsah v cm²?`, solution: `$S = a\\cdot a = ${a}\\cdot ${a} = ${a * a}\\,\\text{cm}^2$.`, hint: T`Obsah štvorca je strana krát strana.`,
          mistakes: [
            ...(a !== 4 ? [{ value: 4 * a, msg: T`Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.` }] : []),
            ...(a !== 2 ? [{ value: 2 * a, msg: T`Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.` }] : [])
          ] };
      }
      if (k === 1) {
        return { answer: a * a, q: T`Štvorec má obvod $${4 * a}\\,\\text{cm}$. Aký je jeho obsah v cm²?`, solution: T`Strana: $a = ${4 * a} : 4 = ${a}\\,\\text{cm}$. Obsah: $S = ${a}\\cdot ${a} = ${a * a}\\,\\text{cm}^2$.`, hint: T`Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).`,
          mistakes: [{ value: a, msg: T`Toto je strana štvorca. Ešte z nej vypočítaj obsah.` },
            { value: 16 * a * a, msg: T`Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.` }],
          steps: [
            { q: T`Aká dlhá je strana štvorca (v cm)?`, answer: a },
            { q: T`Aký je obsah štvorca (v cm²)?`, answer: a * a }
          ] };
      }
      return { answer: 4 * a, q: T`Štvorec má obsah $${a * a}\\,\\text{cm}^2$. Aký je jeho obvod v cm?`, solution: T`Hľadáme číslo, ktoré vynásobené samo sebou dá ${a * a}: $a = ${a}\\,\\text{cm}$. Obvod: $o = 4\\cdot ${a} = ${4 * a}\\,\\text{cm}$.`, hint: T`Ktoré číslo krát samo sebou dá obsah? To je strana.`,
        mistakes: [{ value: a, msg: T`Toto je strana štvorca. Ešte z nej vypočítaj obvod.` },
          ...(a * a % 4 === 0 && a * a / 4 !== 4 * a ? [{ value: a * a / 4, msg: T`Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.` }] : [])],
        steps: [
          { q: T`Aká dlhá je strana štvorca (v cm)?`, answer: a, hint: T`Ktoré číslo vynásobené samo sebou dá ${a * a}?` },
          { q: T`Aký je obvod štvorca (v cm)?`, answer: 4 * a }
        ] };
    }
    if (t < 0.8) {
      const a = rnd(3, 15), b = rnd(2, 15), S = a * b;
      if (Math.random() < 0.5) {
        return {
          mistakes: S - a !== b ? [{ value: S - a, msg: T`Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.` }] : [],
          answer: b,
          q: T`Obdĺžnik má obsah $${S}\\,\\text{cm}^2$ a jednu stranu $${a}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?`,
          solution: T`$S = a\\cdot b$, preto $b = S : a = ${S} : ${a} = ${b}\\,\\text{cm}$.`,
          hint: T`Obsah je súčin strán, druhú stranu teda dostaneš delením.`
        };
      }
      const o = 2 * (a + b);
      return {
        mistakes: [
          { value: o - a, msg: T`Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.` },
          { value: o - 2 * a, msg: T`Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.` }
        ].filter((m) => m.value !== b),
        steps: [
          { q: T`Koľko je polovica obvodu, teda $a + b$ (v cm)?`, answer: o / 2 },
          { q: T`Od súčtu ${o / 2} odčítaj známu stranu ${a}.`, answer: b }
        ],
        answer: b,
        q: T`Obdĺžnik má obvod $${o}\\,\\text{cm}$ a jednu stranu $${a}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?`,
        solution: T`Polovica obvodu je $a + b = ${o} : 2 = ${o / 2}$, preto $b = ${o / 2} - ${a} = ${b}\\,\\text{cm}$.`,
        hint: T`Polovica obvodu je súčet dvoch susedných strán.`
      };
    }
    const i = rnd(0, 2), down = Math.random() < 0.5;
    const big = UNITS[i + 1], small = UNITS[i];
    if (down) {
      const v = Math.random() < 0.5 ? rnd(2, 40) : rnd(11, 99) / 10;
      return {
        mistakes: [{ value: nice(v * 10), msg: T`Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{${big}}^2 = 100\\,\\text{${small}}^2$.` }],
        answer: nice(v * 100),
        q: T`Premeň: $${D(v)}\\,\\text{${big}}^2 = \\;?\\;\\text{${small}}^2$`,
        solution: T`$1\\,\\text{${big}}^2 = 100\\,\\text{${small}}^2$, preto $${D(v)}\\,\\text{${big}}^2 = ${D(v)}\\cdot 100 = ${D(v * 100)}\\,\\text{${small}}^2$.`,
        hint: T`Medzi susednými plošnými jednotkami je prevodový vzťah 100.`
      };
    }
    const v = rnd(1, 99) * pick([10, 100]);
    return {
      mistakes: [{ value: nice(v / 10), msg: T`Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{${small}}^2 = 1\\,\\text{${big}}^2$.` }],
      answer: nice(v / 100),
      q: T`Premeň: $${v >= 1000 ? sp(v).replace(' ', '\\,') : v}\\,\\text{${small}}^2 = \\;?\\;\\text{${big}}^2$`,
      solution: T`$100\\,\\text{${small}}^2 = 1\\,\\text{${big}}^2$, preto delíme stom: $${v} : 100 = ${D(v / 100)}\\,\\text{${big}}^2$.`,
      hint: T`Z menšej jednotky na väčšiu delíme číslom 100.`
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
      const ax = (o) => (/\d/.test(o) ? o : T.s(o)); // čísla sa neprekladajú, „nekonečne veľa“ áno
      return {
        type: 'choice', options: AXES_OPTS.map(ax), answer: ax(s.axes),
        q: `${T`Koľko osí súmernosti má ${s.n}?`} <svg viewBox="0 0 180 120" width="180" role="img" aria-label="${s.n}">${s.d}</svg>`,
        solution: T.s(s.why),
        hint: T`Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?`,
        choiceHints: {
          'štvorec': { '2': T`Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.` },
          'obdĺžnik': { '4': T`Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.` },
          'rovnostranný trojuholník': { '1': T`Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.` },
          'rovnoramenný trojuholník': { '3': T`Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.` }
        }[s.n] || {}
      };
    }
    if (t < 0.6) {
      const r = Math.random(), L = r < 0.4 ? pick(SYM_LETTERS) : r < 0.6 ? pick(SYM_H) : pick(NOSYM);
      const yes = !NOSYM.includes(L);
      return {
        type: 'choice', options: [T.s('áno'), T.s('nie')], answer: yes ? T.s('áno') : T.s('nie'),
        q: T`Je veľké tlačené písmeno <strong style="font-size:1.6em">${L}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?`,
        solution: !yes ? T`Nie. Písmeno ${L} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.`
          : 'HIOX'.includes(L) ? T`Áno. Písmeno ${L} má zvislú aj vodorovnú os súmernosti.`
            : SYM_H.includes(L) ? T`Áno. Písmeno ${L} má vodorovnú os súmernosti.` : T`Áno. Písmeno ${L} má zvislú os súmernosti.`,
        hint: T`Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.`
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
    const dist = Math.abs(k - c);
    return {
      mistakes: [
        { value: dist, msg: T`Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.` },
        { value: 12 - c, msg: T`Zrkadlil si bod podľa stredu siete, nie podľa osi o.` }
      ].filter((m, i, arr) => m.value !== 2 * k - c && arr.findIndex((x) => x.value === m.value) === i),
      steps: vertical ? [
        { q: T`Koľko stĺpcov je bod A vzdialený od osi?`, answer: dist },
        { q: T`V ktorom stĺpci leží obraz $A'$?`, answer: 2 * k - c }
      ] : [
        { q: T`Koľko riadkov je bod A vzdialený od osi?`, answer: dist },
        { q: T`V ktorom riadku leží obraz $A'$?`, answer: 2 * k - c }
      ],
      answer: 2 * k - c,
      q: `${vertical
        ? T`Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci ${k}. Bod $A$ leží v stĺpci ${c}. V ktorom stĺpci leží jeho obraz $A'$?`
        : T`Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku ${k}. Bod $A$ leží v riadku ${c}. V ktorom riadku leží jeho obraz $A'$?`} ${g}`,
      solution: T`Bod $A$ je od osi vzdialený $|${k} - ${c}| = ${dist}$ ${pl(dist, vertical ? ['stĺpec', 'stĺpce', 'stĺpcov'] : ['riadok', 'riadky', 'riadkov'])}. Obraz je rovnako ďaleko na druhej strane osi: $${k} ${c < k ? '+' : '-'} ${dist} = ${2 * k - c}$.`,
      hint: vertical ? T`Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.`
        : T`Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.`
    };
  });
})();
