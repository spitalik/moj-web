/* 2. ročník: čísla do 100, sčítanie a odčítanie, násobenie a delenie, násobilka, slovné úlohy,
   bod, úsečka, priamka a krivá čiara, jednotky dĺžky, času a peňazí. */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r2' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu (akuzatív): 1 jablko, 2 jablká, 5 jabĺk.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  const cmp = (a, b) => (a < b ? '<' : a > b ? '>' : '=');
  const cmpHtml = (s) => (s === '<' ? '&lt;' : s === '>' ? '&gt;' : '=');
  const pad2 = (m) => (m < 10 ? '0' + m : String(m));

  const KIDS = [
    { n: 'Ema', f: true }, { n: 'Jano', f: false }, { n: 'Sofia', f: true }, { n: 'Miro', f: false },
    { n: 'Lea', f: true }, { n: 'Adam', f: false }, { n: 'Nina', f: true }, { n: 'Tomáš', f: false }
  ];
  const verb = (kid, m, f) => (kid.f ? f : m);
  // tvary v akuzatíve: 1 pastelku, 2 pastelky, 5 pasteliek
  const THINGS = [
    ['jablko', 'jablká', 'jabĺk'], ['cukrík', 'cukríky', 'cukríkov'], ['pastelku', 'pastelky', 'pasteliek'],
    ['guličku', 'guličky', 'guličiek'], ['nálepku', 'nálepky', 'nálepiek'], ['orech', 'orechy', 'orechov']
  ];

  /* ---------- kreslenie ---------- */

  // ciferník: stred (cx, cy), polomer r, čas h:m
  const clock = (cx, cy, r, h, m) => {
    let s = `<circle class="f-tri" cx="${cx}" cy="${cy}" r="${r}"/>`;
    for (let k = 0; k < 60; k++) {
      const a = k * 6 * Math.PI / 180, big = k % 5 === 0, r0 = big ? r - 8 : r - 4;
      s += `<line class="${big ? 'f-line' : 'f-thin'}" x1="${(cx + r0 * Math.sin(a)).toFixed(1)}" y1="${(cy - r0 * Math.cos(a)).toFixed(1)}"
        x2="${(cx + r * Math.sin(a)).toFixed(1)}" y2="${(cy - r * Math.cos(a)).toFixed(1)}"/>`;
    }
    for (let k = 1; k <= 12; k++) {
      const a = k * 30 * Math.PI / 180, rr = r - 20;
      s += `<text class="f-small" x="${(cx + rr * Math.sin(a)).toFixed(1)}" y="${(cy - rr * Math.cos(a) + 4).toFixed(1)}" text-anchor="middle">${k}</text>`;
    }
    const ha = ((h % 12) + m / 60) * 30 * Math.PI / 180, ma = m * 6 * Math.PI / 180;
    s += `<line class="f-accent" x1="${cx}" y1="${cy}" x2="${(cx + r * 0.5 * Math.sin(ha)).toFixed(1)}" y2="${(cy - r * 0.5 * Math.cos(ha)).toFixed(1)}"/>
      <line class="f-line" x1="${cx}" y1="${cy}" x2="${(cx + r * 0.78 * Math.sin(ma)).toFixed(1)}" y2="${(cy - r * 0.78 * Math.cos(ma)).toFixed(1)}"/>
      <circle class="f-solid" cx="${cx}" cy="${cy}" r="4"/>`;
    return s;
  };

  // minca s hodnotou v centoch
  const coinLabel = (c) => (c >= 100 ? `${c / 100} €` : `${c} c`);
  const coin = (x, y, c) => {
    const big = c >= 100, r = c >= 100 ? 26 : c >= 10 ? 23 : 19;
    return `<circle class="${big ? 'f-fill f-outline' : 'f-fill3 f-outline3'}" cx="${x}" cy="${y}" r="${r}"/>
      <text class="f-text" x="${x}" y="${y + 5}" text-anchor="middle">${coinLabel(c)}</text>`;
  };

  // pravítko s úsečkou AB od s do e (v cm), dĺžka pravítka L cm
  const ruler = (s, e, L = 12) => {
    const X = (k) => 20 + k * 30;
    let out = `<svg viewBox="0 0 ${X(L) + 20} 104" width="${X(L) + 20}" role="img" aria-label="Pravítko a úsečka AB">
      <line class="f-accent" x1="${X(s)}" y1="24" x2="${X(e)}" y2="24"/>
      <circle class="f-solid" cx="${X(s)}" cy="24" r="4"/><circle class="f-solid" cx="${X(e)}" cy="24" r="4"/>
      <text class="f-math" x="${X(s)}" y="14" text-anchor="middle">A</text><text class="f-math" x="${X(e)}" y="14" text-anchor="middle">B</text>
      <rect class="f-cell" x="8" y="40" width="${X(L) + 4}" height="56" rx="4"/>`;
    for (let k = 0; k <= L * 2; k++) {
      const x = 20 + k * 15, cm = k % 2 === 0;
      out += `<line class="${cm ? 'f-line' : 'f-thin'}" x1="${x}" y1="40" x2="${x}" y2="${cm ? 58 : 50}"/>`;
      if (cm) out += `<text class="f-small" x="${x}" y="74" text-anchor="middle">${k / 2}</text>`;
    }
    return out + `<text class="f-small" x="${X(L) - 4}" y="90" text-anchor="end">cm</text></svg>`;
  };

  // jednoduché čiary na pomenovanie
  const LINES = {
    'bod': () => `<circle class="f-solid" cx="${rnd(70, 110)}" cy="${rnd(50, 70)}" r="5"/><text class="f-math" x="122" y="50">A</text>`,
    'úsečka': () => {
      const y1 = rnd(30, 90), y2 = rnd(30, 90);
      return `<line class="f-line" x1="30" y1="${y1}" x2="150" y2="${y2}"/><circle class="f-solid" cx="30" cy="${y1}" r="4"/>
        <circle class="f-solid" cx="150" cy="${y2}" r="4"/><text class="f-math" x="22" y="${y1 - 10}">A</text>
        <text class="f-math" x="150" y="${y2 - 10}">B</text>`;
    },
    'priamka': () => {
      const y1 = rnd(25, 95), y2 = rnd(25, 95);
      return `<line class="f-line" x1="0" y1="${y1}" x2="180" y2="${y2}"/><text class="f-math" x="160" y="${Math.min(y1, y2) - 10 < 15 ? Math.max(y1, y2) + 22 : Math.min(y1, y2) - 10}">p</text>`;
    },
    'krivá čiara': () => `<path class="f-line" d="M15 ${rnd(50, 70)} C 50 ${rnd(0, 20)}, 70 ${rnd(100, 120)}, 100 60 S 150 ${rnd(10, 30)}, 168 ${rnd(60, 90)}"/>`
  };

  /* ---------- obrázky ---------- */

  fig('r2-stovka', {
    draw: () => {
      let s = '<svg viewBox="0 0 360 360" role="img" aria-label="Stovková tabuľka čísel od 1 do 100">';
      for (let i = 0; i < 100; i++) {
        const n = i + 1, x = 10 + (i % 10) * 34, y = 10 + Math.floor(i / 10) * 34;
        const mark = n === 47 ? ' f-fill' : n === 57 ? ' f-fill2' : '';
        s += `<rect class="f-cell${mark}" x="${x}" y="${y}" width="34" height="34"/>
          <text class="${n % 10 === 0 ? 'f-text c-accent' : 'f-text'}" x="${x + 17}" y="${y + 22}" text-anchor="middle">${n}</text>`;
      }
      return s + '</svg>';
    }
  });

  fig('r2-skoky', {
    draw: () => {
      const X = (k) => 20 + (k - 35) * 12;
      let s = `<svg viewBox="0 0 400 120" role="img" aria-label="Skoky na číselnom rade: 38 plus 20 plus 5">
        <line class="f-line" x1="14" y1="80" x2="386" y2="80"/>`;
      for (let k = 35; k <= 65; k++) {
        const big = k % 5 === 0;
        s += `<line class="${big ? 'f-line' : 'f-thin'}" x1="${X(k)}" y1="${big ? 72 : 76}" x2="${X(k)}" y2="${big ? 88 : 84}"/>`;
        if (big) s += `<text class="f-small" x="${X(k)}" y="104" text-anchor="middle">${k}</text>`;
      }
      return s + `<path class="f-accent" d="M${X(38)} 78 Q ${X(48)} 10 ${X(58)} 78"/>
        <path class="f-ok" d="M${X(58)} 78 Q ${X(60.5)} 46 ${X(63)} 78"/>
        <text class="f-text c-accent" x="${X(48)}" y="36" text-anchor="middle">+20</text>
        <text class="f-text c-ok" x="${X(60.5)}" y="52" text-anchor="middle">+5</text>
        <circle class="f-dot" cx="${X(38)}" cy="80" r="5"/><circle class="f-dot f-dot-ok" cx="${X(63)}" cy="80" r="5"/>
        <text class="f-text" x="${X(38)}" y="66" text-anchor="middle">38</text>
        <text class="f-text c-ok" x="${X(63) + 12}" y="66" text-anchor="start">63</text></svg>`;
    }
  });

  fig('r2-pole', {
    draw: () => {
      let s = '<svg viewBox="0 0 360 140" role="img" aria-label="Tri rady po štyri bodky">';
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 4; c++) s += `<circle class="f-dot" cx="${40 + c * 40}" cy="${30 + r * 40}" r="13"/>`;
        s += `<text class="f-small" x="${200}" y="${35 + r * 40}">4</text>`;
      }
      return s + `<text class="f-text" x="240" y="60">4 + 4 + 4</text>
        <text class="f-text c-accent" x="240" y="90">3 · 4 = 12</text></svg>`;
    }
  });

  fig('r2-nasobky', {
    draw: () => {
      const X = (k) => 20 + k * 12.4;
      let s = `<svg viewBox="0 0 400 110" role="img" aria-label="Násobky čísla 3 na číselnom rade">
        <line class="f-line" x1="14" y1="70" x2="${X(30) + 8}" y2="70"/>`;
      for (let k = 0; k <= 30; k++) {
        const m = k % 3 === 0;
        s += `<line class="${m ? 'f-line' : 'f-thin'}" x1="${X(k)}" y1="${m ? 62 : 66}" x2="${X(k)}" y2="${m ? 78 : 74}"/>`;
        if (m) s += `<text class="f-small${k ? ' c-accent' : ''}" x="${X(k)}" y="96" text-anchor="middle">${k}</text>`;
        if (m && k < 30) s += `<path class="f-accent" d="M${X(k)} 68 Q ${X(k + 1.5)} 34 ${X(k + 3)} 68"/>`;
      }
      return s + `<text class="f-text c-accent" x="200" y="22" text-anchor="middle">skáčeme vždy o 3</text></svg>`;
    }
  });

  fig('r2-ciary', {
    draw: () => `<svg viewBox="0 0 520 150" role="img" aria-label="Bod, úsečka, priamka a krivá čiara">
      <circle class="f-solid" cx="60" cy="60" r="5"/><text class="f-math" x="72" y="52">A</text>
      <line class="f-line" x1="140" y1="85" x2="230" y2="40"/>
      <circle class="f-solid" cx="140" cy="85" r="4"/><circle class="f-solid" cx="230" cy="40" r="4"/>
      <text class="f-math" x="128" y="78">C</text><text class="f-math" x="236" y="36">D</text>
      <line class="f-line" x1="262" y1="95" x2="378" y2="25"/><text class="f-math" x="350" y="62">p</text>
      <path class="f-line" d="M405 70 C 425 20, 445 110, 465 60 S 500 30, 510 75"/>
      <text class="f-small" x="65" y="135" text-anchor="middle">bod A</text>
      <text class="f-small" x="185" y="135" text-anchor="middle">úsečka CD</text>
      <text class="f-small" x="320" y="135" text-anchor="middle">priamka p</text>
      <text class="f-small" x="458" y="135" text-anchor="middle">krivá čiara</text></svg>`
  });

  fig('r2-pravitko', { draw: () => ruler(0, 7, 10) });

  fig('r2-hodiny', {
    draw: () => `<svg viewBox="0 0 400 200" role="img" aria-label="Hodiny ukazujú 7:00 a 2:30">
      ${clock(100, 92, 80, 7, 0)}${clock(300, 92, 80, 2, 30)}
      <text class="f-text" x="100" y="194" text-anchor="middle">7:00</text>
      <text class="f-text" x="300" y="194" text-anchor="middle">2:30</text></svg>`
  });

  fig('r2-mince', {
    draw: () => {
      const vals = [1, 2, 5, 10, 20, 50, 100, 200];
      return `<svg viewBox="0 0 470 70" role="img" aria-label="Euromince">${vals.map((c, i) => coin(30 + i * 58, 35, c)).join('')}</svg>`;
    }
  });

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'r2-cisla100', order: 10, title: 'Čísla do 100',
    summary: 'Desiatky a jednotky, číselný rad a porovnávanie čísel do 100.',
    theory: [
      `<p>Každé dvojciferné číslo má <strong>desiatky</strong> a <strong>jednotky</strong>. Číslo 47 má 4 desiatky a 7 jednotiek:
       $47 = 40 + 7$. Desať desiatok je <strong>sto</strong>: $100$.</p>`,
      { fig: 'r2-stovka', caption: 'Stovková tabuľka. V každom riadku je jedna desiatka čísel. Pod číslom 47 leží 57, teda číslo o 10 väčšie.' },
      `<p><strong>Porovnávanie:</strong> najprv porovnáme desiatky. Ak sú rovnaké, porovnáme jednotky.
       $63 &gt; 58$, lebo 6 desiatok je viac ako 5 desiatok. $42 &lt; 45$, lebo desiatky sú rovnaké a 2 je menej ako 5.</p>`
    ],
    examples: [
      { task: 'Porovnaj čísla 71 a 17.',
        steps: ['Číslo 71 má 7 desiatok, číslo 17 má len 1 desiatku.', '<strong>$71 &gt; 17$</strong>'] },
      { task: 'Ktoré číslo má 6 desiatok a 3 jednotky?',
        steps: ['6 desiatok je 60, k tomu 3 jednotky.', '$60 + 3 = 63$.', '<strong>Je to číslo 63.</strong>'] }
    ]
  });

  gen('r2-cisla100', () => {
    const t = Math.random();
    if (t < 0.35) {
      let a = rnd(10, 100), b = rnd(10, 100);
      const k = Math.random();
      if (k < 0.3 && a < 100) b = Math.floor(a / 10) * 10 + rnd(0, 9); // rovnaké desiatky
      else if (k < 0.45 && a % 10 !== Math.floor(a / 10) % 10 && a < 100) b = (a % 10) * 10 + Math.floor(a / 10); // vymenené cifry
      else if (k < 0.52) b = a;
      if (b < 10) b += 10;
      const ans = cmp(a, b);
      return {
        type: 'choice', options: ['<', '=', '>'], answer: ans,
        q: `Doplň správny znak: $${a} \\;\\square\\; ${b}$`,
        solution: a === b ? `Čísla sú rovnaké: $${a} = ${b}$.`
          : Math.floor(a / 10) !== Math.floor(b / 10)
            ? `Porovnáme desiatky: ${Math.floor(a / 10)} a ${Math.floor(b / 10)}. Preto $${a} ${cmpHtml(ans)} ${b}$.`
            : `Desiatky sú rovnaké, porovnáme jednotky: ${a % 10} a ${b % 10}. Preto $${a} ${cmpHtml(ans)} ${b}$.`,
        hint: 'Najprv porovnaj desiatky. Ak sú rovnaké, porovnaj jednotky.'
      };
    }
    if (t < 0.55) {
      const n = rnd(11, 99), d = Math.floor(n / 10), j = n % 10, askJ = Math.random() < 0.5;
      return {
        answer: askJ ? j : d,
        q: `Koľko ${askJ ? 'jednotiek' : 'desiatok'} má číslo ${n}?`,
        solution: `$${n} = ${d * 10} + ${j}$, teda ${d} ${pl(d, ['desiatka', 'desiatky', 'desiatok'])} a ${j} ${pl(j, ['jednotka', 'jednotky', 'jednotiek'])}.`,
        hint: `Rozlož číslo na desiatky a jednotky: $${n} = \\square + \\square$.`
      };
    }
    if (t < 0.7) {
      const d = rnd(1, 9), j = rnd(0, 9);
      return {
        answer: d * 10 + j,
        q: `Ktoré číslo má ${d} ${pl(d, ['desiatku', 'desiatky', 'desiatok'])} a ${j} ${pl(j, ['jednotku', 'jednotky', 'jednotiek'])}?`,
        solution: `$${d * 10} + ${j} = ${d * 10 + j}$.`,
        hint: `${d} ${pl(d, ['desiatka je', 'desiatky sú', 'desiatok je'])} ${d * 10}.`
      };
    }
    if (t < 0.85) {
      const step = pick([1, 2, 5, 10]), up = Math.random() < 0.6;
      const start = up ? rnd(0, 100 - 4 * step) : rnd(4 * step, 100), miss = rnd(1, 3);
      const seq = [0, 1, 2, 3, 4].map((i) => (up ? start + i * step : start - i * step));
      return {
        answer: seq[miss],
        q: `Doplň číslo, ktoré chýba v rade: ${seq.map((v, i) => (i === miss ? '□' : v)).join(', ')}`,
        solution: `Čísla ${up ? 'rastú' : 'klesajú'} vždy o ${step}: ${seq.join(', ')}.`,
        hint: 'Pozri sa na dve susedné čísla. O koľko sa líšia?'
      };
    }
    const by = pick([1, 10]), up = Math.random() < 0.5, n = up ? rnd(1, 100 - by) : rnd(by, 99);
    return {
      answer: up ? n + by : n - by,
      q: `Ktoré číslo je o ${by} ${up ? 'väčšie' : 'menšie'} ako ${n}?`,
      solution: `$${n} ${up ? '+' : '-'} ${by} = ${up ? n + by : n - by}$.`,
      hint: by === 10 ? 'Zmení sa len počet desiatok, jednotky ostanú rovnaké. V stovkovej tabuľke sa posuň o riadok.' : 'Hľadaj suseda čísla v číselnom rade.'
    };
  });

  // postup sčítania a odčítania po častiach: najprv desiatky, potom jednotky
  const addSteps = (a, b) => {
    const t = b - (b % 10), o = b % 10;
    if (!t || !o || a % 10 === 0) return `$${a} + ${b} = ${a + b}$.`;
    return `Najprv pripočítame desiatky: $${a} + ${t} = ${a + t}$. Potom jednotky: $${a + t} + ${o} = ${a + b}$.`;
  };
  const subSteps = (a, b) => {
    const t = b - (b % 10), o = b % 10;
    if (!t || !o) return `$${a} - ${b} = ${a - b}$.`;
    return `Najprv odčítame desiatky: $${a} - ${t} = ${a - t}$. Potom jednotky: $${a - t} - ${o} = ${a - b}$.`;
  };

  lesson({
    id: 'r2-scitanie', order: 20, title: 'Sčítanie a odčítanie do 100',
    summary: 'Počítanie s desiatkami, prechod cez desiatku a skoky na číselnom rade.',
    theory: [
      `<p><strong>Celé desiatky</strong> sčítame ako jednotky: $30 + 40$ sú 3 desiatky a 4 desiatky, teda 7 desiatok, $70$.
       Podobne $90 - 60 = 30$.</p>`,
      `<p>Pri väčších číslach si druhé číslo rozdelíme na <strong>desiatky a jednotky</strong> a pripočítame ich postupne.
       Pri $38 + 25$ najprv pridáme 20 a potom 5.</p>`,
      { fig: 'r2-skoky', caption: '$38 + 25$: skok o 20 nás dovedie na 58, skok o 5 na 63. Teda $38 + 25 = 63$.' },
      `<p>Pri odčítaní postupujeme rovnako: $72 - 34$ = najprv $72 - 30 = 42$, potom $42 - 4 = 38$.
       Výsledok vieme skontrolovať sčítaním: $38 + 34 = 72$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $47 + 36$.',
        steps: ['Číslo 36 rozdelíme na 30 a 6.', '$47 + 30 = 77$.', '$77 + 6 = 83$.', '<strong>Výsledok: 83</strong>'] },
      { task: 'Vypočítaj $81 - 25$.',
        steps: ['Číslo 25 rozdelíme na 20 a 5.', '$81 - 20 = 61$.', '$61 - 5 = 56$.', 'Skúška: $56 + 25 = 81$. <strong>Výsledok: 56</strong>'] }
    ]
  });

  gen('r2-scitanie', () => {
    const t = Math.random();
    if (t < 0.15) {
      const plus = Math.random() < 0.5, a = rnd(1, 9) * 10, b = plus ? rnd(1, 10 - a / 10) * 10 : rnd(1, a / 10) * 10;
      return {
        answer: plus ? a + b : a - b, q: `Vypočítaj $${a} ${plus ? '+' : '-'} ${b}$.`,
        solution: `${a / 10} ${pl(a / 10, ['desiatka', 'desiatky', 'desiatok'])} ${plus ? '+' : '−'} ${b / 10} ${pl(b / 10, ['desiatka', 'desiatky', 'desiatok'])}: $${a} ${plus ? '+' : '-'} ${b} = ${plus ? a + b : a - b}$.`,
        hint: 'Počítaj s desiatkami ako s jednotkami: 3 desiatky + 4 desiatky = 7 desiatok.'
      };
    }
    if (t < 0.5) {
      const a = rnd(11, 88), b = rnd(3, 99 - a);
      return {
        answer: a + b, q: `Vypočítaj $${a} + ${b}$.`,
        solution: addSteps(a, b),
        hint: 'Rozdeľ druhé číslo na desiatky a jednotky a pripočítaj ich postupne.'
      };
    }
    if (t < 0.85) {
      const a = rnd(20, 100), b = rnd(3, a - 1);
      return {
        answer: a - b, q: `Vypočítaj $${a} - ${b}$.`,
        solution: `${subSteps(a, b)} Skúška: $${a - b} + ${b} = ${a}$.`,
        hint: 'Najprv odčítaj desiatky, potom jednotky.'
      };
    }
    const a = rnd(10, 80), x = rnd(3, 100 - a), s = a + x;
    if (Math.random() < 0.5) {
      return {
        answer: x, q: `Doplň chýbajúce číslo: $${a} + \\square = ${s}$`,
        solution: `Chýbajúce číslo zistíme odčítaním: $${s} - ${a} = ${x}$. Skúška: $${a} + ${x} = ${s}$.`,
        hint: `Koľko chýba od ${a} do ${s}?`
      };
    }
    return {
      answer: x, q: `Doplň chýbajúce číslo: $${s} - \\square = ${a}$`,
      solution: `Od ${s} sme ubrali toľko, koľko je $${s} - ${a} = ${x}$. Skúška: $${s} - ${x} = ${a}$.`,
      hint: `O koľko je ${s} viac ako ${a}?`
    };
  });

  lesson({
    id: 'r2-nasobenie', order: 30, title: 'Násobenie a delenie',
    summary: 'Násobenie ako opakované sčítanie, delenie na rovnaké časti.',
    theory: [
      `<p><strong>Násobenie</strong> je skrátené sčítanie rovnakých čísel. Namiesto $4 + 4 + 4$ napíšeme $3 \\cdot 4$
       (tri razy štyri). Čísla, ktoré násobíme, sú <em>činitele</em>, výsledok je <em>súčin</em>.</p>`,
      { fig: 'r2-pole', caption: '3 rady po 4 bodky: $4 + 4 + 4 = 3 \\cdot 4 = 12$. Ak čítame po stĺpcoch, máme 4 stĺpce po 3 bodky: $4 \\cdot 3 = 12$.' },
      `<p>Na poradí činiteľov nezáleží: $3 \\cdot 4 = 4 \\cdot 3$. Každé číslo krát 1 sa nezmení ($7 \\cdot 1 = 7$)
       a každé číslo krát 0 je 0 ($5 \\cdot 0 = 0$).</p>`,
      `<p><strong>Delenie</strong> je rozdeľovanie na rovnaké časti. Ak 12 cukríkov rozdelíme rovnako 3 deťom, každé dostane
       $12 : 3 = 4$. Delenie je opačné k násobeniu: $12 : 3 = 4$, lebo $3 \\cdot 4 = 12$.</p>`
    ],
    examples: [
      { task: 'Zapíš súčet $5 + 5 + 5 + 5$ ako násobenie a vypočítaj.',
        steps: ['Číslo 5 sčítavame štyrikrát.', '$4 \\cdot 5 = 20$.', '<strong>Výsledok: 20</strong>'] },
      { task: 'Z 15 kvetov urobíme kytice po 5 kvetov. Koľko bude kytíc?',
        steps: ['Hľadáme, koľkokrát sa 5 zmestí do 15.', '$15 : 5 = 3$, lebo $3 \\cdot 5 = 15$.', '<strong>Budú 3 kytice.</strong>'] }
    ]
  });

  const FRUIT = [['🍎', 'jabĺk'], ['🍐', 'hrušiek'], ['🍓', 'jahôd'], ['🍋', 'citrónov'], ['🥕', 'mrkiev']];

  gen('r2-nasobenie', () => {
    const t = Math.random();
    if (t < 0.3) {
      const [e, gpl] = pick(FRUIT), k = rnd(2, 5), n = rnd(2, 5);
      const row = Array.from({ length: k }, () => e.repeat(n)).join('&nbsp;&nbsp;&nbsp;');
      return {
        answer: k * n,
        q: `Koľko je spolu ${gpl}? <span class="emoji-row">${row}</span>`,
        solution: `Sú tu ${k} ${pl(k, ['skupina', 'skupiny', 'skupín'])} po ${n}: $${Array(k).fill(n).join(' + ')} = ${k} \\cdot ${n} = ${k * n}$.`,
        hint: 'Spočítaj skupiny a koľko je v jednej skupine. Potom vynásob.'
      };
    }
    if (t < 0.5) {
      const k = rnd(2, 5), n = rnd(1, 10);
      return {
        answer: k * n,
        q: `Zapíš súčet ako násobenie a vypočítaj: $${Array(k).fill(n).join(' + ')}$`,
        solution: `Číslo ${n} sčítavame ${k}-krát: $${k} \\cdot ${n} = ${k * n}$.`,
        hint: 'Koľkokrát sa opakuje to isté číslo?'
      };
    }
    const kid = pick(KIDS), d = rnd(2, 5), q = rnd(2, 5), tot = d * q;
    if (t < 0.75) {
      return {
        answer: q,
        q: `${kid.n} ${verb(kid, 'rozdelil', 'rozdelila')} ${tot} ${pl(tot, ['cukrík', 'cukríky', 'cukríkov'])} rovnako medzi ${d} ${pl(d, ['dieťa', 'deti', 'detí'])}. Koľko cukríkov dostalo každé dieťa?`,
        solution: `Delíme na ${d} ${pl(d, ['rovnakú časť', 'rovnaké časti', 'rovnakých častí'])}: $${tot} : ${d} = ${q}$, lebo $${d} \\cdot ${q} = ${tot}$.`,
        hint: `Ktoré číslo krát ${d} dá ${tot}?`
      };
    }
    return {
      answer: d,
      q: `Z ${tot} balónov robíme zväzky po ${q} ${pl(q, ['balón', 'balóny', 'balónov'])}. Koľko zväzkov urobíme?`,
      solution: `Zisťujeme, koľkokrát sa ${q} zmestí do ${tot}: $${tot} : ${q} = ${d}$, lebo $${d} \\cdot ${q} = ${tot}$.`,
      hint: `Koľkokrát musíš sčítať ${q}, aby si dostal ${tot}?`
    };
  });

  lesson({
    id: 'r2-nasobilka', order: 40, title: 'Násobky čísel a násobilka',
    summary: 'Násobilka do 10 · 10, násobky čísla a delenie v obore násobilky.',
    theory: [
      `<p><strong>Násobky čísla</strong> dostaneme, keď číslo násobíme postupne 1, 2, 3, … Násobky čísla 3 sú
       3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Na číselnom rade skáčeme vždy o 3.</p>`,
      { fig: 'r2-nasobky', caption: 'Násobky čísla 3: každý skok je dlhý 3. Po štyroch skokoch sme na čísle $4 \\cdot 3 = 12$.' },
      `<p>Užitočné triky: násobky 2 sú párne čísla, násobky 5 končia na 0 alebo 5, násobky 10 končia na 0.
       Keď nevieš $6 \\cdot 4$, pomôž si: $5 \\cdot 4 = 20$ a ešte raz 4, teda $24$.</p>`,
      `<p>Z jedného násobenia vieme hneď dve delenia: z $6 \\cdot 4 = 24$ plynie $24 : 4 = 6$ a $24 : 6 = 4$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $7 \\cdot 5$.',
        steps: ['Násobky 5: 5, 10, 15, 20, 25, 30, 35.', 'Siedmy násobok je 35.', '<strong>$7 \\cdot 5 = 35$</strong>'] },
      { task: 'Vypočítaj $32 : 4$.',
        steps: ['Hľadáme číslo, ktoré krát 4 dá 32.', '$8 \\cdot 4 = 32$.', '<strong>$32 : 4 = 8$</strong>'] }
    ]
  });

  gen('r2-nasobilka', () => {
    const t = Math.random(), a = rnd(2, 10), b = rnd(1, 10), c = a * b;
    if (t < 0.3) {
      return {
        answer: c, q: `Vypočítaj $${a} \\cdot ${b}$.`,
        solution: `Násobky ${b}: ${Array.from({ length: a }, (_, i) => (i + 1) * b).join(', ')}. Teda $${a} \\cdot ${b} = ${c}$.`,
        hint: `Pripočítavaj ${b} toľkokrát, koľko je ${a}, alebo si spomeň na násobilku čísla ${b}.`
      };
    }
    if (t < 0.55) {
      return {
        answer: b, q: `Vypočítaj $${c} : ${a}$.`,
        solution: `$${b} \\cdot ${a} = ${c}$, preto $${c} : ${a} = ${b}$.`,
        hint: `Ktoré číslo krát ${a} dá ${c}?`
      };
    }
    if (t < 0.7) {
      return {
        answer: b, q: `Doplň chýbajúce číslo: $${a} \\cdot \\square = ${c}$`,
        solution: `$${c} : ${a} = ${b}$, teda $${a} \\cdot ${b} = ${c}$.`,
        hint: `Prejdi násobky čísla ${a}, kým nenájdeš ${c}.`
      };
    }
    if (t < 0.85) {
      const n = rnd(2, 10), k = rnd(2, 9), good = n * k;
      const opts = new Set([good]);
      while (opts.size < 4) {
        const v = rnd(Math.max(2, good - 12), good + 12);
        if (v % n !== 0) opts.add(v);
      }
      return {
        type: 'choice', options: shuffle([...opts].map(String)), answer: String(good),
        q: `Ktoré z týchto čísel je násobkom čísla ${n}?`,
        solution: `$${k} \\cdot ${n} = ${good}$, preto ${good} je násobok čísla ${n}. Ostatné čísla v násobilke čísla ${n} nie sú.`,
        hint: `Vymenuj násobky ${n}: ${n}, ${2 * n}, ${3 * n}, …`
      };
    }
    const n = rnd(2, 10), start = rnd(1, 6), miss = rnd(1, 3);
    const seq = [0, 1, 2, 3, 4].map((i) => (start + i) * n);
    return {
      answer: seq[miss],
      q: `Doplň chýbajúci násobok čísla ${n}: ${seq.map((v, i) => (i === miss ? '□' : v)).join(', ')}`,
      solution: `Násobky ${n} rastú vždy o ${n}: ${seq.join(', ')}. Chýba $${start + miss} \\cdot ${n} = ${seq[miss]}$.`,
      hint: `Každé ďalšie číslo je o ${n} väčšie.`
    };
  });

  lesson({
    id: 'r2-slovne', order: 50, title: 'Slovné úlohy a zápisy',
    summary: 'Zo slovnej úlohy príklad: sčítanie, odčítanie, násobenie aj delenie.',
    theory: [
      `<p>Pri slovnej úlohe si najprv zapíšeme, čo <strong>vieme</strong> a čo <strong>hľadáme</strong>. Potom vyberieme správnu
       počtovú operáciu, vypočítame a napíšeme <strong>odpoveď</strong> celou vetou.</p>`,
      `<ul><li><em>dostal, pribudlo, spolu, o … viac</em> → sčítanie,</li>
       <li><em>dal preč, zostalo, o … menej, o koľko viac</em> → odčítanie,</li>
       <li><em>po … (viackrát to isté)</em> → násobenie,</li>
       <li><em>rozdelil rovnako, koľko skupín po …</em> → delenie.</li></ul>`,
      `<p><strong>Zápis</strong> úlohy môže vyzerať takto:<br>Jano mal … 35 guličiek<br>stratil … 12 guličiek<br>
       zostalo … ? guličiek<br>$35 - 12 = 23$<br>Odpoveď: Janovi zostalo 23 guličiek.</p>`
    ],
    examples: [
      { task: 'Lea má 28 nálepiek. Adam má o 15 nálepiek viac. Koľko nálepiek má Adam?',
        steps: ['„O 15 viac“ znamená k 28 pripočítať 15.', '$28 + 15 = 43$.', '<strong>Odpoveď: Adam má 43 nálepiek.</strong>'] },
      { task: 'Mama dala na 4 taniere po 5 jabĺk. Koľko jabĺk je na tanieroch spolu?',
        steps: ['4-krát po 5 je násobenie.', '$4 \\cdot 5 = 20$.', '<strong>Odpoveď: Na tanieroch je 20 jabĺk.</strong>'] }
    ]
  });

  gen('r2-slovne', () => {
    const T = pick(THINGS);
    const k1 = pick(KIDS), k2 = pick(KIDS.filter((k) => k !== k1));
    const kind = rnd(0, 6);
    if (kind === 0) {
      const a = rnd(12, 70), b = rnd(5, 100 - a);
      return {
        answer: a + b,
        q: `${k1.n} ${verb(k1, 'mal', 'mala')} ${a} ${pl(a, T)} a ${verb(k1, 'dostal', 'dostala')} ešte ${b}. Koľko ${T[2]} má teraz?`,
        solution: `Pridávame, preto sčítame: ${addSteps(a, b)} ${k1.n} má ${a + b} ${pl(a + b, T)}.`,
        hint: 'Keď niečo pribudne, sčítavame.'
      };
    }
    if (kind === 1) {
      const a = rnd(20, 100), b = rnd(5, a - 3);
      return {
        answer: a - b,
        q: `${k1.n} ${verb(k1, 'mal', 'mala')} ${a} ${pl(a, T)}. Kamarátom ${verb(k1, 'dal', 'dala')} ${b} ${pl(b, T)}. Koľko ${T[2]} ${verb(k1, 'mu', 'jej')} zostalo?`,
        solution: `Uberáme, preto odčítame: ${subSteps(a, b)} Zostalo ${verb(k1, 'mu', 'jej')} ${a - b} ${pl(a - b, T)}.`,
        hint: 'Keď niečo ubudne, odčítavame.'
      };
    }
    if (kind === 2) {
      const a = rnd(20, 99), b = rnd(5, a - 5);
      return {
        answer: a - b,
        q: `${k1.n} má ${a} ${pl(a, T)}, ${k2.n} má ${b} ${pl(b, T)}. O koľko ${T[2]} má ${k1.n} viac?`,
        solution: `Porovnávame, preto odčítame: ${subSteps(a, b)} ${k1.n} má o ${a - b} ${pl(a - b, T)} viac.`,
        hint: 'Otázka „o koľko viac“ sa rieši odčítaním väčšieho a menšieho čísla.'
      };
    }
    if (kind === 3) {
      const a = rnd(20, 90), b = rnd(3, a - 5);
      return {
        answer: a - b,
        q: `${k1.n} má ${a} ${pl(a, T)}. ${k2.n} má o ${b} ${pl(b, T)} menej. Koľko ${T[2]} má ${k2.n}?`,
        solution: `„O ${b} menej“ znamená ${b} ubrať: ${subSteps(a, b)} ${k2.n} má ${a - b} ${pl(a - b, T)}.`,
        hint: '„O … menej“ znamená odčítať.'
      };
    }
    if (kind === 4) {
      const k = rnd(2, 5), n = rnd(2, 10);
      return {
        answer: k * n,
        q: `${k1.n} ${verb(k1, 'položil', 'položila')} na ${k} ${pl(k, ['tanier', 'taniere', 'tanierov'])} po ${n} ${pl(n, T)}. Koľko ${T[2]} je na tanieroch spolu?`,
        solution: `${k}-krát po ${n} je násobenie: $${k} \\cdot ${n} = ${k * n}$. Na tanieroch je ${k * n} ${pl(k * n, T)}.`,
        hint: 'Keď je viackrát to isté číslo, môžeš násobiť.'
      };
    }
    if (kind === 5) {
      const d = rnd(2, 5), q = rnd(2, 10), tot = d * q;
      return {
        answer: q,
        q: `${k1.n} ${verb(k1, 'rozdelil', 'rozdelila')} ${tot} ${pl(tot, T)} rovnako medzi ${d} kamarátov. Koľko ${T[2]} dostal každý kamarát?`,
        solution: `Rozdeľujeme na ${d} ${pl(d, ['rovnakú časť', 'rovnaké časti', 'rovnakých častí'])}: $${tot} : ${d} = ${q}$, lebo $${d} \\cdot ${q} = ${tot}$. Každý dostal ${q} ${pl(q, T)}.`,
        hint: 'Rovnaké rozdeľovanie je delenie.'
      };
    }
    // výber správneho zápisu
    const a = rnd(2, 5), b = rnd(6, 9);
    const mul = `$${a} \\cdot ${b}$`, add = `$${b} + ${a}$`, sub = `$${b} - ${a}$`;
    const story = pick([
      [`${k1.n} ${verb(k1, 'mal', 'mala')} ${b} ${pl(b, T)} a ${verb(k1, 'dostal', 'dostala')} ešte ${a}. Ktorý zápis ukazuje, koľko ${T[2]} má teraz?`, add, 'Pribudlo, preto sčítame.'],
      [`${k1.n} ${verb(k1, 'mal', 'mala')} ${b} ${pl(b, T)} a ${a} ${verb(k1, 'stratil', 'stratila')}. Ktorý zápis ukazuje, koľko ${T[2]} ${verb(k1, 'mu', 'jej')} zostalo?`, sub, 'Ubudlo, preto odčítame.'],
      [`${k1.n} ${verb(k1, 'kúpil', 'kúpila')} ${a} ${pl(a, ['vrecko', 'vrecká', 'vreciek'])} po ${b} ${pl(b, T)}. Ktorý zápis ukazuje, koľko ${T[2]} ${verb(k1, 'kúpil', 'kúpila')} spolu?`, mul, `${a}-krát po ${b} je násobenie.`]
    ]);
    return {
      type: 'choice', options: shuffle([add, sub, mul]), answer: story[1],
      q: story[0],
      solution: `${story[2]} Správny zápis je ${story[1]}.`,
      hint: 'Pribudlo → sčítanie, ubudlo → odčítanie, viackrát po rovnako → násobenie.'
    };
  });

  lesson({
    id: 'r2-ciary', order: 60, title: 'Bod, úsečka, priamka a krivá čiara',
    summary: 'Rozlišujeme čiary, meriame a porovnávame úsečky.',
    theory: [
      `<p><strong>Bod</strong> kreslíme ako malú bodku a označujeme veľkým písmenom, napríklad bod $A$.
       <strong>Úsečka</strong> je rovná čiara medzi dvoma bodmi, napríklad úsečka $CD$. Body $C$ a $D$ sú jej krajné body.</p>`,
      `<p><strong>Priamka</strong> je rovná čiara, ktorá nemá začiatok ani koniec, môžeme si ju predĺžiť na obe strany.
       Označujeme ju malým písmenom, napríklad priamka $p$. <strong>Krivá čiara</strong> nie je rovná, zatáča sa.</p>`,
      { fig: 'r2-ciary', caption: 'Bod, úsečka, priamka a krivá čiara. Rovné čiary kreslíme podľa pravítka.' },
      `<p>Dĺžku úsečky meriame pravítkom v <strong>centimetroch</strong>. Nulu pravítka priložíme ku krajnému bodu $A$
       a prečítame číslo pri bode $B$.</p>`,
      { fig: 'r2-pravitko', caption: 'Úsečka $AB$ začína na nule a končí pri čísle 7. Je dlhá $7\\,\\text{cm}$.' }
    ],
    examples: [
      { task: 'Ktorá čiara má dva krajné body?',
        steps: ['Bod je len bodka, priamka ani krivá čiara krajné body nemajú.', '<strong>Úsečka má dva krajné body.</strong>'] },
      { task: 'Úsečka $AB$ meria $9\\,\\text{cm}$, úsečka $CD$ meria $4\\,\\text{cm}$. O koľko je úsečka $AB$ dlhšia?',
        steps: ['Porovnávame, preto odčítame.', '$9 - 4 = 5$.', '<strong>Úsečka $AB$ je o $5\\,\\text{cm}$ dlhšia.</strong>'] }
    ]
  });

  const LINE_FACTS = [
    ['Koľko krajných bodov má úsečka?', 2, 'Úsečka má dva krajné body, napríklad $A$ a $B$.'],
    ['Koľko krajných bodov má priamka?', 0, 'Priamka nemá začiatok ani koniec, nemá žiadny krajný bod.'],
    ['Koľko priamok môžeš nakresliť cez dva rôzne body?', 1, 'Cez dva rôzne body prechádza práve jedna priamka.'],
    ['Z koľkých úsečiek sa skladá obvod trojuholníka?', 3, 'Trojuholník má 3 strany a každá strana je úsečka.'],
    ['Z koľkých úsečiek sa skladá obvod štvorca?', 4, 'Štvorec má 4 strany, každá strana je úsečka.']
  ];

  gen('r2-ciary', () => {
    const t = Math.random();
    if (t < 0.35) {
      const name = pick(Object.keys(LINES));
      return {
        type: 'choice', options: Object.keys(LINES), answer: name,
        q: `Čo je na obrázku?<svg viewBox="0 0 180 120" width="200" role="img" aria-label="čiara alebo bod">${LINES[name]()}</svg>`,
        solution: {
          'bod': 'Je to len jedna bodka, teda bod.',
          'úsečka': 'Rovná čiara s dvoma krajnými bodmi je úsečka.',
          'priamka': 'Rovná čiara bez krajných bodov, ktorá ide cez celý obrázok, je priamka.',
          'krivá čiara': 'Čiara sa zatáča, nie je rovná, teda je to krivá čiara.'
        }[name],
        hint: 'Je čiara rovná? Má krajné body?'
      };
    }
    if (t < 0.65) {
      const len = rnd(2, 9), s = Math.random() < 0.6 ? 0 : rnd(1, 10 - len);
      return {
        answer: len,
        q: `Aká dlhá je úsečka $AB$? Odpoveď napíš v centimetroch.${ruler(s, s + len, 10)}`,
        solution: s === 0 ? `Úsečka začína na nule a končí pri čísle ${len}. Je dlhá $${len}\\,\\text{cm}$.`
          : `Bod $A$ je pri čísle ${s}, bod $B$ pri čísle ${s + len}. $${s + len} - ${s} = ${len}$, úsečka meria $${len}\\,\\text{cm}$.`,
        hint: s === 0 ? 'Pozri sa, pri ktorom čísle je bod B.' : 'Pozor, úsečka nezačína na nule. Spočítaj centimetre medzi A a B.'
      };
    }
    if (t < 0.85) {
      const a = rnd(3, 15), b = rnd(2, 15), sum = Math.random() < 0.5;
      if (sum) {
        return {
          answer: a + b,
          q: `Lomená čiara sa skladá z dvoch úsečiek. Prvá meria $${a}\\,\\text{cm}$, druhá $${b}\\,\\text{cm}$. Aká dlhá je celá lomená čiara (v cm)?`,
          solution: `Dĺžky sčítame: $${a} + ${b} = ${a + b}$. Lomená čiara meria $${a + b}\\,\\text{cm}$.`,
          hint: 'Celá dĺžka je súčet dĺžok všetkých úsečiek.'
        };
      }
      const x = Math.max(a, b) + 1, y = Math.min(a, b);
      return {
        answer: x - y,
        q: `Úsečka $KL$ meria $${x}\\,\\text{cm}$, úsečka $MN$ meria $${y}\\,\\text{cm}$. O koľko centimetrov je úsečka $KL$ dlhšia?`,
        solution: `$${x} - ${y} = ${x - y}$. Úsečka $KL$ je o $${x - y}\\,\\text{cm}$ dlhšia.`,
        hint: 'Rozdiel dĺžok zistíš odčítaním.'
      };
    }
    const [q, a, why] = pick(LINE_FACTS);
    return { answer: a, q, solution: why, hint: 'Úsečka má začiatok aj koniec, priamka nemá ani jedno.' };
  });

  lesson({
    id: 'r2-jednotky', order: 70, title: 'Jednotky dĺžky, času a peňazí',
    summary: 'Centimeter a meter, hodiny a minúty, eurá a centy.',
    theory: [
      `<p><strong>Dĺžka:</strong> krátke veci meriame v centimetroch (cm), dlhšie v metroch (m).
       $1\\,\\text{m} = 100\\,\\text{cm}$ a $1\\,\\text{dm} = 10\\,\\text{cm}$.</p>`,
      `<p><strong>Čas:</strong> deň má 24 hodín, hodina (h) má 60 minút (min). Pol hodiny je 30 minút, štvrť hodiny je 15 minút.
       Na hodinách ukazuje <em>krátka ručička</em> hodiny a <em>dlhá ručička</em> minúty.</p>`,
      { fig: 'r2-hodiny', caption: 'Vľavo je 7:00, dlhá ručička ukazuje na 12. Vpravo je 2:30 (pol tretej), dlhá ručička ukazuje na 6 a krátka je medzi 2 a 3.' },
      `<p><strong>Peniaze:</strong> platíme eurami (€) a centami (c). $1\\,\\text{€} = 100$ centov.
       Mince sú 1 c, 2 c, 5 c, 10 c, 20 c, 50 c, 1 € a 2 €.</p>`,
      { fig: 'r2-mince', caption: 'Euromince od najmenšej po najväčšiu hodnotu.' }
    ],
    examples: [
      { task: 'Koľko minút je 1 hodina a 15 minút?',
        steps: ['1 hodina je 60 minút.', '$60 + 15 = 75$.', '<strong>Je to 75 minút.</strong>'] },
      { task: 'V peňaženke máš mince 50 c, 20 c a 20 c. Koľko centov chýba do 1 eura?',
        steps: ['$50 + 20 + 20 = 90$ centov.', '1 euro je 100 centov: $100 - 90 = 10$.', '<strong>Chýba 10 centov.</strong>'] }
    ]
  });

  const UNIT_GUESS = [
    ['Ceruzka je dlhá asi 15 …', 'cm'], ['Trieda je dlhá asi 9 …', 'm'], ['Prestávka trvá 10 …', 'min'],
    ['Vyučovanie trvá asi 5 …', 'h'], ['Zmrzlina stojí asi 2 …', '€'], ['Dom je vysoký asi 10 …', 'm'],
    ['Čistenie zubov trvá asi 3 …', 'min'], ['V noci spíme asi 10 …', 'h'], ['Kniha stojí asi 12 …', '€'],
    ['Palec na ruke je dlhý asi 5 …', 'cm']
  ];

  gen('r2-jednotky', () => {
    const t = Math.random();
    if (t < 0.3) {
      const h = rnd(1, 12), m = pick([0, 0, 30, 30, 15, 45]);
      const fmtT = (H, M) => `${H}:${pad2(M)}`;
      const right = fmtT(h, m);
      const opts = new Set([right, fmtT(h % 12 + 1, m), fmtT(m === 0 ? 12 : m / 5, (h * 5) % 60)]);
      while (opts.size < 4) opts.add(fmtT(rnd(1, 12), pick([0, 15, 30, 45])));
      const hw = `${h} ${pl(h, ['hodina', 'hodiny', 'hodín'])}`;
      const words = m === 0 ? `presne ${hw}` : `${hw} a ${m} minút`;
      return {
        type: 'choice', options: shuffle([...opts]), answer: right,
        q: `Koľko je hodín?<svg viewBox="0 0 180 180" width="180" role="img" aria-label="ciferník hodín">${clock(90, 90, 80, h, m)}</svg>`,
        solution: `Krátka ručička ${m === 0 ? `ukazuje na ${h}` : `je medzi ${h} a ${h % 12 + 1}`}, dlhá ručička ukazuje na ${m === 0 ? 12 : m / 5}, teda ${m} minút. Je ${right} (${words}).`,
        hint: 'Krátka ručička ukazuje hodiny, dlhá minúty. Keď je dlhá na 6, je pol.'
      };
    }
    if (t < 0.55) {
      const kind = rnd(0, 5);
      if (kind === 0) {
        const n = rnd(1, 10);
        return { answer: n * 10, q: `Koľko centimetrov je $${n}\\,\\text{dm}$?`,
          solution: `$1\\,\\text{dm} = 10\\,\\text{cm}$, teda $${n}\\,\\text{dm} = ${n} \\cdot 10\\,\\text{cm} = ${n * 10}\\,\\text{cm}$.`,
          hint: '1 dm je 10 cm.' };
      }
      if (kind === 1) {
        const c = rnd(5, 95);
        return { answer: 100 - c, q: `Stuha meria $${c}\\,\\text{cm}$. Koľko centimetrov chýba do $1\\,\\text{m}$?`,
          solution: `$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - ${c} = ${100 - c}$. Chýba $${100 - c}\\,\\text{cm}$.`,
          hint: '1 m je 100 cm.' };
      }
      if (kind === 2) {
        const [w, v] = pick([['pol hodiny', 30], ['štvrť hodiny', 15], ['trištvrte hodiny', 45], ['1 hodina', 60]]);
        return { answer: v, q: `Koľko minút je ${w}?`,
          solution: `Hodina má 60 minút. ${w.charAt(0).toUpperCase() + w.slice(1)} je ${v} minút.`,
          hint: 'Hodina má 60 minút. Polovica z 60 je 30, štvrtina je 15.' };
      }
      if (kind === 3) {
        const m = rnd(1, 8) * 5;
        return { answer: 60 + m, q: `Koľko minút je 1 hodina a ${m} minút?`,
          solution: `1 hodina je 60 minút: $60 + ${m} = ${60 + m}$ minút.`,
          hint: 'Najprv premeň hodinu na minúty a potom pripočítaj.' };
      }
      if (kind === 4) {
        const c = rnd(1, 19) * 5;
        return { answer: 100 - c, q: `Máš ${c} ${pl(c, ['cent', 'centy', 'centov'])}. Koľko centov ti chýba do 1 eura?`,
          solution: `1 euro je 100 centov: $100 - ${c} = ${100 - c}$. Chýba ${100 - c} ${pl(100 - c, ['cent', 'centy', 'centov'])}.`,
          hint: '1 € = 100 centov.' };
      }
      return { answer: 24, q: 'Koľko hodín má jeden deň?',
        solution: 'Deň (s nocou) má 24 hodín.', hint: 'Spočítaj 12 hodín dopoludnia a 12 hodín popoludní.' };
    }
    if (t < 0.8) {
      const vals = [1, 2, 5, 10, 20, 50, 100, 200];
      const euros = Math.random() < 0.5;
      const pool = euros ? vals : vals.slice(0, 6);
      let cs;
      do {
        cs = Array.from({ length: rnd(3, 4) }, () => pick(pool)).sort((x, y) => y - x);
      } while (!euros && cs.reduce((s, c) => s + c, 0) >= 100);
      const sum = cs.reduce((s, c) => s + c, 0);
      const pic = `<svg viewBox="0 0 ${cs.length * 60 + 10} 64" width="${cs.length * 60 + 10}" role="img" aria-label="mince">${cs.map((c, i) => coin(35 + i * 60, 32, c)).join('')}</svg>`;
      const parts = cs.join(' + ');
      if (sum < 100) {
        return {
          answer: sum, q: `Koľko centov je spolu?${pic}`,
          solution: `$${parts} = ${sum}$ centov.`,
          hint: 'Sčítaj hodnoty mincí, začni od najväčšej.'
        };
      }
      const e = Math.floor(sum / 100), c = sum % 100;
      return {
        type: 'tuple', placeholder: 'eurá; centy', answer: [e, c],
        q: `Koľko je to spolu eur a centov? Napíš dve čísla oddelené bodkočiarkou (napr. 2; 35).${pic}`,
        solution: `V centoch: $${parts} = ${sum}$ centov. 100 centov je 1 euro, preto je to ${e} € a ${c} c.`,
        hint: 'Mince 1 € a 2 € maj zvlášť, centy sčítaj zvlášť. 100 centov je 1 euro.'
      };
    }
    const [s, u] = pick(UNIT_GUESS);
    return {
      type: 'choice', options: ['cm', 'm', 'min', 'h', '€'], answer: u,
      q: `Doplň správnu jednotku: ${s}`,
      solution: `${s.replace('…', u)}. ${{ cm: 'Krátke veci meriame v centimetroch.', m: 'Dlhšie veci meriame v metroch.', min: 'Krátky čas meriame v minútach.', h: 'Dlhší čas meriame v hodinách.', '€': 'Ceny píšeme v eurách.' }[u]}`,
      hint: 'Je to dĺžka, čas, alebo cena? A je to krátke, alebo dlhé?'
    };
  });
})();
