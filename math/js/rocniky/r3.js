/* 3. ročník: čísla do 1 000, sčítanie a odčítanie, násobilka, zátvorky, slovné úlohy na viac krokov,
   obvod, jednotky dĺžky, hmotnosti, objemu a času, tabuľky a jednoduché údaje. */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r3' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu (akuzatív): 1 jablko, 2 jablká, 5 jabĺk.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  const cmp = (a, b) => (a < b ? '<' : a > b ? '>' : '=');
  const cmpHtml = (s) => (s === '<' ? '&lt;' : s === '>' ? '&gt;' : '=');
  const pad2 = (m) => (m < 10 ? '0' + m : String(m));
  const hm = (t) => `${Math.floor(t / 60)}:${pad2(t % 60)}`; // minúty od polnoci → 15:05

  const KIDS = [
    { n: 'Ema', f: true }, { n: 'Jano', f: false }, { n: 'Sofia', f: true }, { n: 'Miro', f: false },
    { n: 'Lea', f: true }, { n: 'Adam', f: false }, { n: 'Nina', f: true }, { n: 'Tomáš', f: false }
  ];
  const verb = (kid, m, f) => (kid.f ? f : m);
  const THINGS = [
    ['nálepku', 'nálepky', 'nálepiek'], ['guličku', 'guličky', 'guličiek'], ['kartičku', 'kartičky', 'kartičiek'],
    ['orech', 'orechy', 'orechov'], ['gaštan', 'gaštany', 'gaštanov']
  ];
  const DES = ['desiatka', 'desiatky', 'desiatok'];

  /* ---------- kreslenie ---------- */

  // stĺpcový graf: hodnoty nad stĺpcami, mierka sa prispôsobí maximu
  const barChart = (labels, vals, title) => {
    const max = Math.max(...vals), top = Math.ceil(max / 5) * 5, H = 150, base = 180;
    const Y = (v) => base - v / top * H, w = 44, gap = 22, x0 = 48;
    let s = `<svg viewBox="0 0 ${x0 + labels.length * (w + gap) + 10} 222" width="${x0 + labels.length * (w + gap) + 10}" role="img" aria-label="${title}">
      <text class="f-small" x="${x0}" y="14">${title}</text>`;
    for (let v = 0; v <= top; v += top > 25 ? 10 : 5) {
      s += `<line class="f-grid" x1="${x0 - 6}" y1="${Y(v).toFixed(1)}" x2="${x0 + labels.length * (w + gap)}" y2="${Y(v).toFixed(1)}"/>
        <text class="f-small" x="${x0 - 10}" y="${(Y(v) + 4).toFixed(1)}" text-anchor="end">${v}</text>`;
    }
    labels.forEach((l, i) => {
      const x = x0 + gap / 2 + i * (w + gap);
      s += `<rect class="f-fill f-outline" x="${x}" y="${Y(vals[i]).toFixed(1)}" width="${w}" height="${(base - Y(vals[i])).toFixed(1)}"/>
        <text class="f-small" x="${x + w / 2}" y="${(Y(vals[i]) - 5).toFixed(1)}" text-anchor="middle">${vals[i]}</text>
        <text class="f-text" x="${x + w / 2}" y="${base + 22}" text-anchor="middle">${l}</text>`;
    });
    return s + `<line class="f-line" x1="${x0 - 6}" y1="${base}" x2="${x0 + labels.length * (w + gap)}" y2="${base}"/></svg>`;
  };

  const table = (head, labels, vals) => `<table class="tbl"><tr><th>${head[0]}</th>${labels.map((l) => `<th>${l}</th>`).join('')}</tr>
    <tr><td>${head[1]}</td>${vals.map((v) => `<td>${v}</td>`).join('')}</tr></table>`;

  // obdĺžnik so stranami a × b (v cm) v mierke
  const rectPic = (a, b) => {
    const k = Math.min(18, 200 / Math.max(a, b)), W = a * k, H = b * k;
    return `<svg viewBox="0 0 ${W + 100} ${H + 60}" width="${W + 100}" role="img" aria-label="obdĺžnik">
      <rect class="f-fill f-outline" x="40" y="20" width="${W.toFixed(1)}" height="${H.toFixed(1)}"/>
      <text class="f-text" x="${(40 + W / 2).toFixed(1)}" y="${(H + 46).toFixed(1)}" text-anchor="middle">${a} cm</text>
      <text class="f-text" x="${(48 + W).toFixed(1)}" y="${(25 + H / 2).toFixed(1)}">${b} cm</text></svg>`;
  };

  /* ---------- obrázky ---------- */

  fig('r3-rad1000', {
    draw: () => {
      const X = (k) => 20 + k * 0.4;
      let s = `<svg viewBox="0 0 440 90" role="img" aria-label="Číselný rad od 0 do 1000">
        <line class="f-line" x1="14" y1="50" x2="426" y2="50"/>`;
      for (let k = 0; k <= 1000; k += 50) {
        const big = k % 100 === 0;
        s += `<line class="${big ? 'f-line' : 'f-thin'}" x1="${X(k)}" y1="${big ? 42 : 46}" x2="${X(k)}" y2="${big ? 58 : 54}"/>`;
        if (big) s += `<text class="f-small" x="${X(k)}" y="76" text-anchor="middle">${k}</text>`;
      }
      return s + `<circle class="f-dot" cx="${X(350)}" cy="50" r="6"/><text class="f-text c-accent" x="${X(350)}" y="30" text-anchor="middle">350</text>
        <circle class="f-dot f-dot-ok" cx="${X(720)}" cy="50" r="6"/><text class="f-text c-ok" x="${X(720)}" y="30" text-anchor="middle">720</text></svg>`;
    }
  });

  fig('r3-stlpec', {
    draw: () => {
      const col = [140, 110, 80]; // x pre jednotky, desiatky, stovky
      const row = (y, digits, cls = 'f-text') => digits.map((d, i) => `<text class="${cls}" x="${col[i]}" y="${y}" text-anchor="middle" font-size="22">${d}</text>`).join('');
      return `<svg viewBox="0 0 400 170" role="img" aria-label="Písomné sčítanie 347 plus 285">
        <text class="f-small c-accent" x="${col[1]}" y="22" text-anchor="middle">1</text>
        <text class="f-small c-accent" x="${col[2]}" y="22" text-anchor="middle">1</text>
        ${row(52, [7, 4, 3])}${row(86, [5, 8, 2])}
        <text class="f-text" x="45" y="86" text-anchor="middle" font-size="22">+</text>
        <line class="f-line" x1="35" y1="100" x2="160" y2="100"/>
        ${row(130, [2, 3, 6], 'f-text c-ok')}
        <text class="f-small" x="${col[2]}" y="160" text-anchor="middle">S</text>
        <text class="f-small" x="${col[1]}" y="160" text-anchor="middle">D</text>
        <text class="f-small" x="${col[0]}" y="160" text-anchor="middle">J</text>
        <text class="f-small" x="180" y="52">7 + 5 = 12, píšem 2, 1 ďalej</text>
        <text class="f-small" x="180" y="86">4 + 8 + 1 = 13, píšem 3, 1 ďalej</text>
        <text class="f-small" x="180" y="130">3 + 2 + 1 = 6</text></svg>`;
    }
  });

  fig('r3-nasobilka', {
    draw: () => {
      const c = 30, x0 = 10, y0 = 10;
      let s = '<svg viewBox="0 0 350 350" role="img" aria-label="Tabuľka násobilky do 10 krát 10">';
      for (let r = 0; r <= 10; r++) {
        for (let k = 0; k <= 10; k++) {
          if (!r && !k) { s += `<text class="f-text" x="${x0 + c / 2}" y="${y0 + 20}" text-anchor="middle">·</text>`; continue; }
          const head = !r || !k, hit = (r === 6 && k === 7), line = (r === 6 && k <= 7) || (k === 7 && r <= 6);
          const cls = hit ? ' f-fill2' : head ? ' f-fill' : line ? ' f-fill3' : '';
          const v = head ? (r || k) : r * k;
          s += `<rect class="f-cell${cls}" x="${x0 + k * c}" y="${y0 + r * c}" width="${c}" height="${c}"/>
            <text class="${head ? 'f-text' : 'f-small'}" x="${x0 + k * c + c / 2}" y="${y0 + r * c + 20}" text-anchor="middle">${v}</text>`;
        }
      }
      return s + '</svg>';
    }
  });

  fig('r3-obvod', {
    draw: () => `<svg viewBox="0 0 440 170" role="img" aria-label="Obdĺžnik a trojuholník s dĺžkami strán">
      <rect class="f-fill f-outline" x="20" y="30" width="180" height="90"/>
      <text class="f-text" x="110" y="142" text-anchor="middle">6 cm</text>
      <text class="f-text" x="208" y="80">3 cm</text>
      <polygon class="f-fill2 f-outline2" points="270,120 420,120 320,30"/>
      <text class="f-text" x="345" y="142" text-anchor="middle">5 cm</text>
      <text class="f-text" x="282" y="72" text-anchor="end">3 cm</text>
      <text class="f-text" x="380" y="70">4 cm</text>
      <text class="f-small" x="110" y="164" text-anchor="middle">o = 6 + 3 + 6 + 3 = 18 cm</text>
      <text class="f-small" x="345" y="164" text-anchor="middle">o = 5 + 3 + 4 = 12 cm</text></svg>`
  });

  fig('r3-graf', { draw: () => barChart(['Po', 'Ut', 'St', 'Št', 'Pi'], [12, 8, 15, 10, 18], 'Predané zmrzliny') });

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'r3-cisla1000', order: 10, title: 'Čísla do 1 000',
    summary: 'Stovky, desiatky a jednotky, číselný rad a porovnávanie trojciferných čísel.',
    theory: [
      `<p>Trojciferné číslo má <strong>stovky (S)</strong>, <strong>desiatky (D)</strong> a <strong>jednotky (J)</strong>.
       Číslo 472 má 4 stovky, 7 desiatok a 2 jednotky: $472 = 400 + 70 + 2$. Desať stoviek je <strong>tisíc</strong>: $1\\,000$.</p>`,
      { fig: 'r3-rad1000', caption: 'Číselný rad od 0 do 1 000. Číslo 350 leží v strede medzi 300 a 400, číslo 720 je bližšie k 700.' },
      `<p><strong>Porovnávanie:</strong> najprv porovnáme stovky, keď sú rovnaké, desiatky, a nakoniec jednotky.
       $538 &gt; 497$, lebo 5 stoviek je viac ako 4. $642 &lt; 648$, lebo stovky aj desiatky sú rovnaké a $2 &lt; 8$.</p>`
    ],
    examples: [
      { task: 'Porovnaj čísla 806 a 860.',
        steps: ['Stovky sú rovnaké (8).', 'Desiatky: 0 a 6, nula je menej.', '<strong>$806 &lt; 860$</strong>'] },
      { task: 'Zapíš číslo, ktoré má 3 stovky, 0 desiatok a 9 jednotiek.',
        steps: ['$300 + 0 + 9 = 309$.', 'Na mieste desiatok píšeme nulu.', '<strong>Je to číslo 309.</strong>'] }
    ]
  });

  gen('r3-cisla1000', () => {
    const t = Math.random();
    if (t < 0.3) {
      const a = rnd(100, 999);
      let b;
      const k = Math.random();
      if (k < 0.35) b = Math.floor(a / 100) * 100 + rnd(0, 99);
      else if (k < 0.5) b = Math.floor(a / 10) * 10 + rnd(0, 9);
      else if (k < 0.57) b = a;
      else b = rnd(100, 999);
      const ans = cmp(a, b), da = String(a), db = String(b);
      let i = 0;
      while (i < 2 && da[i] === db[i]) i++;
      const place = ['stovky', 'desiatky', 'jednotky'][i];
      return {
        type: 'choice', options: ['<', '=', '>'], answer: ans,
        q: `Doplň správny znak: $${a} \\;\\square\\; ${b}$`,
        solution: a === b ? `Čísla sú rovnaké: $${a} = ${b}$.`
          : `${i ? 'Predchádzajúce miesta sú rovnaké, rozhodujú ' : 'Rozhodujú '}${place}: ${da[i]} a ${db[i]}. Preto $${a} ${cmpHtml(ans)} ${b}$.`,
        hint: 'Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.'
      };
    }
    if (t < 0.5) {
      const n = rnd(100, 999), i = rnd(0, 2), d = String(n)[i];
      return {
        answer: Number(d),
        q: `Akú číslicu má číslo ${n} na mieste ${['stoviek', 'desiatok', 'jednotiek'][i]}?`,
        solution: `$${n} = ${Math.floor(n / 100) * 100} + ${Math.floor(n / 10) % 10 * 10} + ${n % 10}$. Na mieste ${['stoviek', 'desiatok', 'jednotiek'][i]} je číslica ${d}.`,
        hint: 'Stovky sú prvá číslica zľava, jednotky posledná.'
      };
    }
    if (t < 0.7) {
      const s = rnd(1, 9), d = Math.random() < 0.25 ? 0 : rnd(0, 9), j = Math.random() < 0.2 ? 0 : rnd(0, 9);
      return {
        answer: s * 100 + d * 10 + j,
        q: `Ktoré číslo má ${s} ${pl(s, ['stovku', 'stovky', 'stoviek'])}, ${d} ${pl(d, ['desiatku', 'desiatky', 'desiatok'])} a ${j} ${pl(j, ['jednotku', 'jednotky', 'jednotiek'])}?`,
        solution: `$${s * 100} + ${d * 10} + ${j} = ${s * 100 + d * 10 + j}$.`,
        hint: 'Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.'
      };
    }
    if (t < 0.85) {
      const step = pick([5, 10, 50, 100, 2]), up = Math.random() < 0.6;
      const start = up ? rnd(0, 1000 - 4 * step) : rnd(4 * step, 1000), miss = rnd(1, 3);
      const seq = [0, 1, 2, 3, 4].map((i) => (up ? start + i * step : start - i * step));
      return {
        answer: seq[miss],
        q: `Doplň číslo, ktoré chýba v rade: ${seq.map((v, i) => (i === miss ? '□' : v)).join(', ')}`,
        solution: `Čísla ${up ? 'rastú' : 'klesajú'} vždy o ${step}: ${seq.join(', ')}.`,
        hint: 'Zisti, o koľko sa líšia dve susedné čísla.'
      };
    }
    const by = pick([1, 10, 100]), up = Math.random() < 0.5, n = up ? rnd(100, 1000 - by) : rnd(100 + by, 999);
    return {
      answer: up ? n + by : n - by,
      q: `Ktoré číslo je o ${by} ${up ? 'väčšie' : 'menšie'} ako ${n}?`,
      solution: `$${n} ${up ? '+' : '-'} ${by} = ${up ? n + by : n - by}$.`,
      hint: by === 100 ? 'Zmení sa počet stoviek.' : by === 10 ? 'Zmení sa počet desiatok.' : 'Hľadaj suseda v číselnom rade.'
    };
  });

  // postupné sčítanie / odčítanie po stovkách, desiatkach a jednotkách
  const stepwise = (a, b, plus) => {
    const parts = [Math.floor(b / 100) * 100, Math.floor(b / 10) % 10 * 10, b % 10].filter((x) => x);
    if (parts.length < 2) return `$${a} ${plus ? '+' : '-'} ${b} = ${plus ? a + b : a - b}$.`;
    let cur = a;
    const st = parts.map((p) => {
      const nx = plus ? cur + p : cur - p, s = `$${cur} ${plus ? '+' : '-'} ${p} = ${nx}$`;
      cur = nx;
      return s;
    });
    return `Číslo ${b} rozdelíme na ${parts.join(' + ')}: ${st.join(', ')}.`;
  };

  lesson({
    id: 'r3-scitanie', order: 20, title: 'Sčítanie a odčítanie do 1 000',
    summary: 'Spamäti po častiach aj písomne pod sebou.',
    theory: [
      `<p><strong>Spamäti</strong> počítame po častiach: $356 + 230$ = najprv $356 + 200 = 556$, potom $556 + 30 = 586$.
       S celými stovkami počítame ako s jednotkami: $400 + 500 = 900$, $800 - 300 = 500$.</p>`,
      `<p><strong>Písomne</strong> píšeme čísla pod seba tak, aby jednotky boli pod jednotkami, desiatky pod desiatkami a stovky pod stovkami.
       Počítame sprava: jednotky, desiatky, stovky. Ak súčet na niektorom mieste presiahne 9, jednotku prenesieme o miesto vľavo.</p>`,
      { fig: 'r3-stlpec', caption: 'Písomné sčítanie $347 + 285 = 632$. Malé jednotky hore sú prenesené desiatky a stovky.' },
      `<p>Odčítanie vieme vždy <strong>skontrolovať sčítaním</strong>: ak $632 - 285 = 347$, potom musí platiť $347 + 285 = 632$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $468 + 275$.',
        steps: ['Jednotky: $8 + 5 = 13$, píšem 3, 1 ďalej.', 'Desiatky: $6 + 7 + 1 = 14$, píšem 4, 1 ďalej.',
          'Stovky: $4 + 2 + 1 = 7$.', '<strong>Výsledok: 743</strong>'] },
      { task: 'Vypočítaj $700 - 340$.',
        steps: ['$700 - 300 = 400$.', '$400 - 40 = 360$.', 'Skúška: $360 + 340 = 700$. <strong>Výsledok: 360</strong>'] }
    ]
  });

  gen('r3-scitanie', () => {
    const t = Math.random();
    if (t < 0.15) {
      const plus = Math.random() < 0.5;
      const a = plus ? rnd(1, 8) * 100 + pick([0, 0, 50]) : rnd(3, 10) * 100;
      const b = plus ? rnd(1, Math.floor((1000 - a) / 100)) * 100 : rnd(1, a / 100 - 1) * 100 + pick([0, 0, 50]);
      return {
        answer: plus ? a + b : a - b, q: `Vypočítaj $${a} ${plus ? '+' : '-'} ${b}$.`,
        solution: stepwise(a, b, plus),
        hint: 'S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.'
      };
    }
    if (t < 0.5) {
      const a = rnd(100, 850), b = rnd(12, 999 - a);
      return {
        answer: a + b, q: `Vypočítaj $${a} + ${b}$.`,
        solution: stepwise(a, b, true),
        hint: 'Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.'
      };
    }
    if (t < 0.85) {
      const a = rnd(150, 1000), b = rnd(12, a - 10);
      return {
        answer: a - b, q: `Vypočítaj $${a} - ${b}$.`,
        solution: `${stepwise(a, b, false)} Skúška: $${a - b} + ${b} = ${a}$.`,
        hint: 'Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.'
      };
    }
    const a = rnd(100, 700), x = rnd(20, 1000 - a), s = a + x;
    if (Math.random() < 0.5) {
      return {
        answer: x, q: `Doplň chýbajúce číslo: $${a} + \\square = ${s}$`,
        solution: `$${s} - ${a} = ${x}$. Skúška: $${a} + ${x} = ${s}$.`,
        hint: 'Chýbajúci sčítanec zistíš odčítaním.'
      };
    }
    return {
      answer: x, q: `Doplň chýbajúce číslo: $${s} - \\square = ${a}$`,
      solution: `$${s} - ${a} = ${x}$. Skúška: $${s} - ${x} = ${a}$.`,
      hint: `O koľko je ${s} viac ako ${a}?`
    };
  });

  lesson({
    id: 'r3-nasobilka', order: 30, title: 'Násobenie a delenie',
    summary: 'Celá násobilka, násobenie desiatok a delenie so zvyškom.',
    theory: [
      `<p>Násobilku do $10 \\cdot 10$ vieme nájsť v tabuľke: v riadku je prvý činiteľ, v stĺpci druhý, na ich prieniku je súčin.
       Delenie je opak násobenia: z $6 \\cdot 7 = 42$ vieme, že $42 : 6 = 7$ aj $42 : 7 = 6$.</p>`,
      { fig: 'r3-nasobilka', caption: 'Tabuľka násobilky: riadok 6 a stĺpec 7 sa stretnú v čísle 42, teda $6 \\cdot 7 = 42$.' },
      `<p><strong>Násobenie desiatok:</strong> $30 \\cdot 4$ sú 3 desiatky krát 4, teda 12 desiatok, čiže $120$.</p>`,
      `<p><strong>Delenie so zvyškom:</strong> nie každé delenie vyjde presne. $17 : 5 = 3$ <em>zvyšok</em> 2, lebo $3 \\cdot 5 = 15$
       a do 17 chýbajú ešte 2. Zvyšok musí byť vždy menší ako deliteľ.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $8 \\cdot 7$ a $56 : 8$.',
        steps: ['Z násobilky: $8 \\cdot 7 = 56$.', 'Delenie je opak násobenia, preto $56 : 8 = 7$.'] },
      { task: 'Vydeľ so zvyškom $29 : 4$.',
        steps: ['Najväčší násobok 4, ktorý nie je väčší ako 29, je $7 \\cdot 4 = 28$.', 'Zvyšok: $29 - 28 = 1$.',
          '<strong>$29 : 4 = 7$, zvyšok 1</strong>'] }
    ]
  });

  gen('r3-nasobilka', () => {
    const t = Math.random(), a = rnd(2, 10), b = rnd(2, 10), c = a * b;
    if (t < 0.25) {
      return {
        answer: c, q: `Vypočítaj $${a} \\cdot ${b}$.`,
        solution: `$${a} \\cdot ${b} = ${c}$. ${a > 5 && b <= 10 ? `Pomôcka: $5 \\cdot ${b} = ${5 * b}$ a ešte ${a - 5}-krát ${b}, teda $${5 * b} + ${(a - 5) * b} = ${c}$.` : ''}`,
        hint: 'Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.'
      };
    }
    if (t < 0.45) {
      return {
        answer: b, q: `Vypočítaj $${c} : ${a}$.`,
        solution: `$${a} \\cdot ${b} = ${c}$, preto $${c} : ${a} = ${b}$.`,
        hint: `Ktoré číslo krát ${a} dá ${c}?`
      };
    }
    if (t < 0.6) {
      const d = rnd(2, 9), k = rnd(2, 9);
      return {
        answer: d * 10 * k, q: `Vypočítaj $${d * 10} \\cdot ${k}$.`,
        solution: `${d} ${pl(d, DES)} krát ${k} je ${d * k} ${pl(d * k, DES)}: $${d * 10} \\cdot ${k} = ${d * k * 10}$.`,
        hint: `Vypočítaj najprv $${d} \\cdot ${k}$ a potom pripíš nulu.`
      };
    }
    if (t < 0.85) {
      const d = rnd(2, 9), q = rnd(1, 10), r = rnd(1, d - 1), n = d * q + r;
      return {
        type: 'tuple', placeholder: 'podiel; zvyšok', answer: [q, r],
        q: `Vydeľ so zvyškom: $${n} : ${d}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).`,
        solution: `Najväčší násobok ${d}, ktorý nie je väčší ako ${n}, je $${q} \\cdot ${d} = ${q * d}$. Zvyšok: $${n} - ${q * d} = ${r}$. Teda $${n} : ${d} = ${q}$, zvyšok ${r}.`,
        hint: `Hľadaj v násobilke čísla ${d} najväčší násobok, ktorý sa ešte zmestí do ${n}. Zvyšok musí byť menší ako ${d}.`
      };
    }
    return {
      answer: b, q: `Doplň chýbajúce číslo: $\\square \\cdot ${a} = ${c}$`,
      solution: `$${c} : ${a} = ${b}$, teda $${b} \\cdot ${a} = ${c}$.`,
      hint: `Prejdi násobky čísla ${a}, kým nenájdeš ${c}.`
    };
  });

  lesson({
    id: 'r3-zatvorky', order: 40, title: 'Zátvorky a poradie operácií',
    summary: 'Čo počítame skôr: zátvorky, násobenie a delenie, sčítanie a odčítanie.',
    theory: [
      `<p>V príklade s viacerými operáciami platí poradie:</p>
       <ol><li>najprv vypočítame, čo je v <strong>zátvorkách</strong>,</li>
       <li>potom <strong>násobenie a delenie</strong>,</li>
       <li>nakoniec <strong>sčítanie a odčítanie</strong> (zľava doprava).</li></ol>`,
      `<p>Porovnaj: $2 + 3 \\cdot 4 = 2 + 12 = 14$, ale $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$. Zátvorky menia výsledok!</p>`,
      `<p>Pri samom sčítaní a odčítaní ideme zľava doprava: $20 - 5 - 3 = 15 - 3 = 12$. Ak je však časť v zátvorke,
       počítame ju skôr: $20 - (5 - 3) = 20 - 2 = 18$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $18 + 4 \\cdot 6$.',
        steps: ['Násobenie má prednosť: $4 \\cdot 6 = 24$.', '$18 + 24 = 42$.', '<strong>Výsledok: 42</strong>'] },
      { task: 'Vypočítaj $(15 - 7) \\cdot 3$.',
        steps: ['Najprv zátvorka: $15 - 7 = 8$.', '$8 \\cdot 3 = 24$.', '<strong>Výsledok: 24</strong>'] }
    ]
  });

  gen('r3-zatvorky', () => {
    const t = Math.random();
    if (t < 0.2) {
      const a = rnd(2, 50), b = rnd(2, 9), c = rnd(2, 9), minus = Math.random() < 0.4 && a > b * c;
      const res = minus ? a - b * c : a + b * c;
      return {
        answer: res, q: `Vypočítaj $${a} ${minus ? '-' : '+'} ${b} \\cdot ${c}$.`,
        solution: `Najprv násobenie: $${b} \\cdot ${c} = ${b * c}$. Potom $${a} ${minus ? '-' : '+'} ${b * c} = ${res}$.`,
        hint: 'Násobenie má prednosť pred sčítaním aj odčítaním.'
      };
    }
    if (t < 0.4) {
      const c = rnd(2, 9), s = rnd(3, 12), a = rnd(1, s - 1), b = s - a, minus = Math.random() < 0.35;
      const A = minus ? s + rnd(1, 10) : a, B = minus ? A - s : b;
      return {
        answer: s * c, q: `Vypočítaj $(${A} ${minus ? '-' : '+'} ${B}) \\cdot ${c}$.`,
        solution: `Najprv zátvorka: $${A} ${minus ? '-' : '+'} ${B} = ${s}$. Potom $${s} \\cdot ${c} = ${s * c}$.`,
        hint: 'Najprv vypočítaj, čo je v zátvorke.'
      };
    }
    if (t < 0.55) {
      const c = rnd(2, 9), q = rnd(2, 10), tot = c * q, a = rnd(1, tot - 1), b = tot - a;
      return {
        answer: q, q: `Vypočítaj $(${a} + ${b}) : ${c}$.`,
        solution: `Najprv zátvorka: $${a} + ${b} = ${tot}$. Potom $${tot} : ${c} = ${q}$.`,
        hint: 'Najprv vypočítaj, čo je v zátvorke.'
      };
    }
    if (t < 0.7) {
      const a = rnd(30, 100), b = rnd(10, a - 5), c = rnd(2, b - 1), paren = Math.random() < 0.6;
      const res = paren ? a - (b - c) : a - b - c;
      if (!paren && res < 0) return { answer: a - (b - c), q: `Vypočítaj $${a} - (${b} - ${c})$.`,
        solution: `Najprv zátvorka: $${b} - ${c} = ${b - c}$. Potom $${a} - ${b - c} = ${a - (b - c)}$.`, hint: 'Najprv vypočítaj, čo je v zátvorke.' };
      return {
        answer: res, q: paren ? `Vypočítaj $${a} - (${b} - ${c})$.` : `Vypočítaj $${a} - ${b} - ${c}$.`,
        solution: paren ? `Najprv zátvorka: $${b} - ${c} = ${b - c}$. Potom $${a} - ${b - c} = ${res}$.`
          : `Bez zátvoriek počítame zľava: $${a} - ${b} = ${a - b}$, potom $${a - b} - ${c} = ${res}$.`,
        hint: paren ? 'Najprv vypočítaj, čo je v zátvorke.' : 'Bez zátvoriek počítaj zľava doprava.'
      };
    }
    if (t < 0.85) {
      const a = rnd(3, 9), b = rnd(3, 9), d = rnd(2, 5), q = rnd(1, 5), c = d * q;
      const res = a * b - q;
      return {
        answer: res, q: `Vypočítaj $${a} \\cdot ${b} - ${c} : ${d}$.`,
        solution: `Najprv násobenie a delenie: $${a} \\cdot ${b} = ${a * b}$ a $${c} : ${d} = ${q}$. Potom $${a * b} - ${q} = ${res}$.`,
        hint: 'Násobenie a delenie urob skôr ako odčítanie.'
      };
    }
    const a = rnd(1, 9), b = rnd(1, 9), c = rnd(2, 6);
    const L = (a + b) * c, R = a + b * c, ans = cmp(L, R);
    return {
      type: 'choice', options: ['<', '=', '>'], answer: ans,
      q: `Doplň správny znak: $(${a} + ${b}) \\cdot ${c} \\;\\square\\; ${a} + ${b} \\cdot ${c}$`,
      solution: `Vľavo: $(${a} + ${b}) \\cdot ${c} = ${a + b} \\cdot ${c} = ${L}$. Vpravo: $${a} + ${b * c} = ${R}$. Preto $${L} ${cmpHtml(ans)} ${R}$.`,
      hint: 'Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.'
    };
  });

  lesson({
    id: 'r3-slovne', order: 50, title: 'Slovné úlohy na viac krokov',
    summary: 'Úlohy, ktoré sa riešia dvoma alebo tromi príkladmi za sebou.',
    theory: [
      `<p>Niektoré úlohy nevyriešime jedným príkladom. Postupujeme po krokoch: <strong>čo vieme</strong>,
       <strong>čo potrebujeme zistiť najprv</strong> a <strong>čo hľadáme na konci</strong>.</p>`,
      `<p>Príklad: Mama kúpila 3 zošity po 4 € a platila bankovkou 20 €. Koľko eur jej vrátili?<br>
       1. krok – cena zošitov: $3 \\cdot 4 = 12$ €.<br>2. krok – vrátili: $20 - 12 = 8$ €.<br>Odpoveď: Mame vrátili 8 €.</p>`,
      `<p>Kroky môžeme spojiť aj do jedného zápisu: $20 - 3 \\cdot 4 = 20 - 12 = 8$ (násobenie má prednosť).
       Na konci vždy skontrolujeme, či odpoveď dáva zmysel.</p>`
    ],
    examples: [
      { task: 'V autobuse sedelo 34 ľudí. Na zastávke 12 ľudí vystúpilo a 9 ľudí nastúpilo. Koľko ľudí je teraz v autobuse?',
        steps: ['Po vystúpení: $34 - 12 = 22$.', 'Po nastúpení: $22 + 9 = 31$.', '<strong>V autobuse je 31 ľudí.</strong>'] },
      { task: 'Ema má 2 balíčky po 8 nálepiek a ešte 5 voľných. Koľko nálepiek má spolu?',
        steps: ['V balíčkoch: $2 \\cdot 8 = 16$.', 'Spolu: $16 + 5 = 21$.', '<strong>Ema má 21 nálepiek.</strong>'] }
    ]
  });

  const ITEMS = [['zošit', 'zošity', 'zošitov'], ['pero', 'perá', 'pier'], ['knihu', 'knihy', 'kníh'],
    ['loptu', 'lopty', 'lôpt'], ['čokoládu', 'čokolády', 'čokolád']];

  gen('r3-slovne', () => {
    const kind = rnd(0, 4), k1 = pick(KIDS);
    if (kind === 0) {
      const I = pick(ITEMS), k = rnd(2, 6), p = rnd(2, 9), cost = k * p, B = [10, 20, 50, 100].find((x) => x > cost);
      return {
        answer: B - cost,
        q: `${k1.n} ${verb(k1, 'kúpil', 'kúpila')} ${k} ${pl(k, I)} po ${p} €. ${verb(k1, 'Platil', 'Platila')} bankovkou ${B} €. Koľko eur ${verb(k1, 'mu', 'jej')} vrátili?`,
        solution: `1. krok – cena: $${k} \\cdot ${p} = ${cost}$ €. 2. krok – vrátili: $${B} - ${cost} = ${B - cost}$ €.`,
        hint: 'Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.'
      };
    }
    if (kind === 1) {
      const a = rnd(20, 60), b = rnd(5, a - 5), c = rnd(5, 30);
      return {
        answer: a - b + c,
        q: `V autobuse sedelo ${a} ľudí. Na zastávke ${b} ľudí vystúpilo a ${c} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?`,
        solution: `Po vystúpení: $${a} - ${b} = ${a - b}$. Po nastúpení: $${a - b} + ${c} = ${a - b + c}$.`,
        hint: 'Vystúpili → odčítaj. Nastúpili → pripočítaj.'
      };
    }
    if (kind === 2) {
      const T = pick(THINGS), k = rnd(2, 9), n = rnd(3, 10), m = rnd(1, 9);
      return {
        answer: k * n + m,
        q: `${k1.n} má ${k} ${pl(k, ['balíček', 'balíčky', 'balíčkov'])} po ${n} ${pl(n, T)} a ešte ${m} ${pl(m, T)} navyše. Koľko ${T[2]} má spolu?`,
        solution: `V balíčkoch: $${k} \\cdot ${n} = ${k * n}$. Spolu: $${k * n} + ${m} = ${k * n + m}$.`,
        hint: 'Najprv vypočítaj, koľko je vo všetkých balíčkoch.'
      };
    }
    if (kind === 3) {
      const T = pick(THINGS), k2 = pick(KIDS.filter((k) => k !== k1)), k3 = pick(KIDS.filter((k) => k !== k1 && k !== k2));
      const a = rnd(10, 60), b = rnd(5, 30), c = rnd(3, a + b - 5);
      const x2 = a + b, x3 = a + b - c;
      return {
        answer: a + x2 + x3,
        q: `${k1.n} má ${a} ${pl(a, T)}. ${k2.n} má o ${b} viac ako ${k1.n} a ${k3.n} má o ${c} menej ako ${k2.n}. Koľko ${T[2]} majú spolu?`,
        solution: `${k2.n}: $${a} + ${b} = ${x2}$. ${k3.n}: $${x2} - ${c} = ${x3}$. Spolu: $${a} + ${x2} + ${x3} = ${a + x2 + x3}$.`,
        hint: 'Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.'
      };
    }
    const r = rnd(3, 9), s = rnd(4, 10), u = rnd(1, 9), tot = r * s;
    return {
      answer: tot - u,
      q: `Záhradník zasadil ${r} ${pl(r, ['rad', 'rady', 'radov'])} po ${s} ${pl(s, ['stromček', 'stromčeky', 'stromčekov'])}. ${u} ${pl(u, ['stromček uschol', 'stromčeky uschli', 'stromčekov uschlo'])}. Koľko stromčekov zostalo?`,
      solution: `Zasadil: $${r} \\cdot ${s} = ${tot}$. Zostalo: $${tot} - ${u} = ${tot - u}$.`,
      hint: 'Najprv vypočítaj, koľko stromčekov zasadil.'
    };
  });

  lesson({
    id: 'r3-obvod', order: 60, title: 'Obvod rovinných útvarov',
    summary: 'Obvod trojuholníka, štvorca a obdĺžnika ako súčet dĺžok strán.',
    theory: [
      `<p><strong>Obvod</strong> útvaru je dĺžka čiary okolo neho. Vypočítame ho tak, že <strong>sčítame dĺžky všetkých strán</strong>.
       Obvod označujeme písmenom $o$.</p>`,
      { fig: 'r3-obvod', caption: 'Obdĺžnik má dve dlhšie a dve kratšie strany, trojuholník tri strany. Obvod je súčet všetkých strán.' },
      `<p><strong>Trojuholník</strong> so stranami $a, b, c$: $o = a + b + c$.<br>
       <strong>Štvorec</strong> so stranou $a$: $o = a + a + a + a = 4 \\cdot a$.<br>
       <strong>Obdĺžnik</strong> so stranami $a, b$: $o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj obvod štvorca so stranou $7\\,\\text{cm}$.',
        steps: ['Štvorec má 4 rovnaké strany.', '$o = 4 \\cdot 7 = 28$.', '<strong>$o = 28\\,\\text{cm}$</strong>'] },
      { task: 'Obdĺžnik má strany $9\\,\\text{cm}$ a $4\\,\\text{cm}$. Aký má obvod?',
        steps: ['$o = 9 + 4 + 9 + 4$.', '$o = 18 + 8 = 26$.', '<strong>$o = 26\\,\\text{cm}$</strong>'] }
    ]
  });

  gen('r3-obvod', () => {
    const t = Math.random();
    if (t < 0.35) {
      const a = rnd(3, 15), b = rnd(2, a - 1);
      return {
        answer: 2 * a + 2 * b,
        q: `Vypočítaj obvod obdĺžnika (v cm).${rectPic(a, b)}`,
        solution: `$o = ${a} + ${b} + ${a} + ${b} = 2 \\cdot ${a} + 2 \\cdot ${b} = ${2 * a} + ${2 * b} = ${2 * a + 2 * b}\\,\\text{cm}$.`,
        hint: 'Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.'
      };
    }
    if (t < 0.55) {
      const a = rnd(2, 25);
      return {
        answer: 4 * a,
        q: `Štvorec má stranu $${a}\\,\\text{cm}$. Aký má obvod (v cm)?`,
        solution: `$o = 4 \\cdot ${a} = ${4 * a}\\,\\text{cm}$.`,
        hint: 'Štvorec má 4 rovnako dlhé strany.'
      };
    }
    if (t < 0.8) {
      const a = rnd(3, 12), b = rnd(3, 12), c = rnd(Math.abs(a - b) + 1, Math.min(a + b - 1, 15));
      return {
        answer: a + b + c,
        q: `Trojuholník má strany $${a}\\,\\text{cm}$, $${b}\\,\\text{cm}$ a $${c}\\,\\text{cm}$. Aký má obvod (v cm)?`,
        solution: `$o = ${a} + ${b} + ${c} = ${a + b + c}\\,\\text{cm}$.`,
        hint: 'Obvod trojuholníka je súčet jeho troch strán.'
      };
    }
    if (Math.random() < 0.5) {
      const a = rnd(2, 15);
      return {
        answer: a,
        q: `Obvod štvorca je $${4 * a}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?`,
        solution: `Štvorec má 4 rovnaké strany: $${4 * a} : 4 = ${a}\\,\\text{cm}$.`,
        hint: 'Obvod rozdeľ na 4 rovnaké časti.'
      };
    }
    const a = rnd(4, 12), b = rnd(2, a - 1), o = 2 * a + 2 * b;
    return {
      answer: b,
      q: `Obdĺžnik má obvod $${o}\\,\\text{cm}$ a jednu stranu $${a}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?`,
      solution: `Dve strany po ${a} cm majú spolu $2 \\cdot ${a} = ${2 * a}$. Na zvyšné dve strany ostáva $${o} - ${2 * a} = ${2 * b}$, jedna strana je $${2 * b} : 2 = ${b}\\,\\text{cm}$.`,
      hint: 'Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.'
    };
  });

  lesson({
    id: 'r3-jednotky', order: 70, title: 'Jednotky dĺžky, hmotnosti, objemu a času',
    summary: 'Milimeter až kilometer, gram a kilogram, liter a deciliter, sekunda až týždeň.',
    theory: [
      `<p><strong>Dĺžka:</strong> $1\\,\\text{cm} = 10\\,\\text{mm}$, $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{m} = 100\\,\\text{cm}$,
       $1\\,\\text{km} = 1\\,000\\,\\text{m}$.</p>`,
      `<p><strong>Hmotnosť:</strong> $1\\,\\text{kg} = 1\\,000\\,\\text{g}$, $1\\,\\text{t} = 1\\,000\\,\\text{kg}$.<br>
       <strong>Objem:</strong> $1\\,\\text{l} = 10\\,\\text{dl}$, $1\\,\\text{dl} = 100\\,\\text{ml}$, teda $1\\,\\text{l} = 1\\,000\\,\\text{ml}$.</p>`,
      `<p><strong>Čas:</strong> $1\\,\\text{min} = 60\\,\\text{s}$, $1\\,\\text{h} = 60\\,\\text{min}$, 1 deň = 24 h, 1 týždeň = 7 dní.</p>`,
      `<p>Pri premene na <strong>menšiu</strong> jednotku číslo zväčšíme (násobíme), pri premene na <strong>väčšiu</strong> jednotku ho zmenšíme (delíme).
       Napríklad $3\\,\\text{m} = 300\\,\\text{cm}$ a $40\\,\\text{mm} = 4\\,\\text{cm}$.</p>`
    ],
    examples: [
      { task: 'Premeň $2\\,\\text{m}\\ 35\\,\\text{cm}$ na centimetre.',
        steps: ['$2\\,\\text{m} = 200\\,\\text{cm}$.', '$200 + 35 = 235$.', '<strong>$235\\,\\text{cm}$</strong>'] },
      { task: 'Film začal o 17:40 a skončil o 19:10. Koľko minút trval?',
        steps: ['Od 17:40 do 18:00 je 20 minút.', 'Od 18:00 do 19:00 je 60 minút, od 19:00 do 19:10 ešte 10 minút.',
          '$20 + 60 + 10 = 90$. <strong>Film trval 90 minút.</strong>'] }
    ]
  });

  // [z jednotky, na jednotku, násobok, rozsah]
  const CONV = [
    ['cm', 'mm', 10, [2, 30]], ['dm', 'cm', 10, [2, 30]], ['m', 'cm', 100, [2, 9]], ['m', 'dm', 10, [2, 20]],
    ['km', 'm', 1000, [1, 5]], ['kg', 'g', 1000, [1, 5]], ['t', 'kg', 1000, [1, 3]], ['l', 'dl', 10, [2, 20]],
    ['l', 'ml', 1000, [1, 3]], ['dl', 'ml', 100, [1, 9]], ['h', 'min', 60, [2, 5]], ['min', 's', 60, [2, 5]]
  ];
  const tx = (n, u) => `${n}\\,\\text{${u}}`;
  const UNIT_GUESS = [
    ['Mravec je dlhý asi 5 …', 'mm', ['mm', 'cm', 'm', 'km']], ['Vzdialenosť medzi dvoma mestami je 40 …', 'km', ['mm', 'cm', 'm', 'km']],
    ['Dvere sú vysoké asi 2 …', 'm', ['mm', 'cm', 'm', 'km']], ['Zošit je dlhý asi 30 …', 'cm', ['mm', 'cm', 'm', 'km']],
    ['Jablko váži asi 150 …', 'g', ['g', 'kg', 't']], ['Taška zemiakov váži 5 …', 'kg', ['g', 'kg', 't']],
    ['Nákladné auto váži asi 8 …', 't', ['g', 'kg', 't']], ['Do hrnčeka sa zmestia asi 3 …', 'dl', ['ml', 'dl', 'l']],
    ['Vo vedre je 10 …', 'l', ['ml', 'dl', 'l']], ['Lyžička sirupu má asi 5 …', 'ml', ['ml', 'dl', 'l']],
    ['Tlesknutie trvá asi 1 …', 's', ['s', 'min', 'h']], ['Vyučovacia hodina trvá 45 …', 'min', ['s', 'min', 'h']],
    ['Cesta vlakom k babke trvala 3 …', 'h', ['s', 'min', 'h']]
  ];

  gen('r3-jednotky', () => {
    const t = Math.random();
    if (t < 0.35) {
      const [from, to, f, [lo, hi]] = pick(CONV), n = rnd(lo, hi), back = Math.random() < 0.3;
      if (back) {
        return {
          answer: n, q: `Premeň: $${tx(n * f, to)} = \\square\\,\\text{${from}}$`,
          solution: `$1\\,\\text{${from}} = ${tx(f, to)}$, preto $${n * f} : ${f} = ${n}$. $${tx(n * f, to)} = ${tx(n, from)}$.`,
          hint: `Koľkokrát sa ${f} ${to} zmestí do ${n * f} ${to}?`
        };
      }
      return {
        answer: n * f, q: `Premeň: $${tx(n, from)} = \\square\\,\\text{${to}}$`,
        solution: `$1\\,\\text{${from}} = ${tx(f, to)}$, preto $${n} \\cdot ${f} = ${n * f}$. $${tx(n, from)} = ${tx(n * f, to)}$.`,
        hint: `Spomeň si, koľko ${to} je $1\\,\\text{${from}}$.`
      };
    }
    if (t < 0.55) {
      const [big, small, f, part] = pick([['m', 'cm', 100, 99], ['kg', 'g', 1000, 999], ['h', 'min', 60, 59], ['l', 'dl', 10, 9], ['cm', 'mm', 10, 9]]);
      const n = rnd(1, f === 1000 ? 4 : 9), m = rnd(1, part);
      return {
        answer: n * f + m, q: `Premeň: $${tx(n, big)}\\ ${tx(m, small)} = \\square\\,\\text{${small}}$`,
        solution: `$${tx(n, big)} = ${tx(n * f, small)}$, potom $${n * f} + ${m} = ${n * f + m}$. Výsledok: $${tx(n * f + m, small)}$.`,
        hint: `Najprv premeň ${big} na ${small} a potom pripočítaj zvyšok.`
      };
    }
    if (t < 0.8) {
      const start = rnd(7 * 12, 18 * 12) * 5, dur = rnd(3, 19) * 5, end = start + dur;
      const nextH = Math.ceil(start / 60) * 60;
      const sol = end <= nextH || start % 60 === 0
        ? `Od ${hm(start)} do ${hm(end)} je ${dur} minút.`
        : `Od ${hm(start)} do ${hm(nextH)} je ${nextH - start} minút, od ${hm(nextH)} do ${hm(end)} ešte ${end - nextH} minút. Spolu $${nextH - start} + ${end - nextH} = ${dur}$ minút.`;
      return {
        answer: dur,
        q: `Tréning začal o ${hm(start)} a skončil o ${hm(end)}. Koľko minút trval?`,
        solution: sol,
        hint: 'Počítaj najprv minúty do celej hodiny a potom minúty po nej.'
      };
    }
    const [s, u, opts] = pick(UNIT_GUESS);
    return {
      type: 'choice', options: opts, answer: u,
      q: `Doplň vhodnú jednotku: ${s}`,
      solution: `${s.replace('…', u)}.`,
      hint: 'Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?'
    };
  });

  lesson({
    id: 'r3-tabulky', order: 80, title: 'Tabuľky a jednoduché údaje',
    summary: 'Čítanie údajov z tabuľky a stĺpcového grafu, porovnávanie a súčet.',
    theory: [
      `<p>Údaje často zapisujeme do <strong>tabuľky</strong>. V prvom riadku sú názvy (napríklad dni) a pod nimi čísla.
       Cukráreň si zapísala, koľko zmrzlín predala:</p>
       <table class="tbl"><tr><th>deň</th><th>Po</th><th>Ut</th><th>St</th><th>Št</th><th>Pi</th></tr>
       <tr><td>zmrzliny</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>`,
      `<p>Tie isté údaje môžeme nakresliť do <strong>stĺpcového grafu</strong>. Čím vyšší stĺpec, tým väčšie číslo.</p>`,
      { fig: 'r3-graf', caption: 'Najvyšší stĺpec je v piatok (18), najnižší v utorok (8). V piatok predali o $18 - 8 = 10$ zmrzlín viac ako v utorok.' },
      `<p>Z údajov vieme zistiť, kde je <strong>najviac</strong> a <strong>najmenej</strong>, <strong>o koľko</strong> sa dve čísla líšia
       (odčítanie) a koľko je to <strong>spolu</strong> (sčítanie).</p>`
    ],
    examples: [
      { task: 'Koľko zmrzlín predali spolu v pondelok a v stredu (podľa tabuľky vyššie)?',
        steps: ['Pondelok 12, streda 15.', '$12 + 15 = 27$.', '<strong>Spolu predali 27 zmrzlín.</strong>'] },
      { task: 'O koľko viac zmrzlín predali v stredu ako vo štvrtok?',
        steps: ['Streda 15, štvrtok 10.', '$15 - 10 = 5$.', '<strong>V stredu predali o 5 zmrzlín viac.</strong>'] }
    ]
  });

  const DAYS = ['pondelok', 'utorok', 'streda', 'štvrtok', 'piatok'];
  const DAYS_IN = ['v pondelok', 'v utorok', 'v stredu', 'vo štvrtok', 'v piatok'];
  const DAYS_SHORT = ['Po', 'Ut', 'St', 'Št', 'Pi'];
  const DATA = [
    { title: 'Predané zmrzliny', row: 'zmrzliny', T: ['zmrzlinu', 'zmrzliny', 'zmrzlín'], v: 'predali', who: 'V cukrárni si zapisovali, koľko zmrzlín predali.' },
    { title: 'Prečítané strany', row: 'strany', T: ['stranu', 'strany', 'strán'], v: 'prečítala Zuzka', who: 'Zuzka si zapisovala, koľko strán knihy prečítala.' },
    { title: 'Upečené koláče', row: 'koláče', T: ['koláč', 'koláče', 'koláčov'], v: 'upiekli v pekárni', who: 'V pekárni si zapisovali, koľko koláčov upiekli.' }
  ];

  gen('r3-tabulky', () => {
    const D = pick(DATA);
    let vals;
    do {
      vals = DAYS.map(() => rnd(2, 30));
    } while (vals.filter((v) => v === Math.max(...vals)).length > 1 || vals.filter((v) => v === Math.min(...vals)).length > 1);
    const show = Math.random() < 0.5 ? table(['deň', D.row], DAYS_SHORT, vals) : barChart(DAYS_SHORT, vals, D.title);
    const intro = `${D.who}${show}`;
    const kind = rnd(0, 3);
    if (kind === 0) {
      const i = rnd(0, 4);
      return {
        answer: vals[i], q: `${intro}Koľko ${D.T[2]} ${D.v} ${DAYS_IN[i]}?`,
        solution: `${DAYS_IN[i].charAt(0).toUpperCase() + DAYS_IN[i].slice(1)} je v údajoch číslo ${vals[i]}.`,
        hint: 'Nájdi správny deň a prečítaj číslo pri ňom.'
      };
    }
    if (kind === 1) {
      let i, j;
      do { i = rnd(0, 4); j = rnd(0, 4); } while (vals[i] <= vals[j]);
      return {
        answer: vals[i] - vals[j], q: `${intro}O koľko viac ${D.T[2]} ${D.v} ${DAYS_IN[i]} ako ${DAYS_IN[j]}?`,
        solution: `${DAYS_IN[i].charAt(0).toUpperCase() + DAYS_IN[i].slice(1)} ${vals[i]}, ${DAYS_IN[j]} ${vals[j]}: $${vals[i]} - ${vals[j]} = ${vals[i] - vals[j]}$.`,
        hint: '„O koľko viac“ zistíš odčítaním.'
      };
    }
    if (kind === 2) {
      const sum = vals.reduce((s, v) => s + v, 0);
      return {
        answer: sum, q: `${intro}Koľko ${D.T[2]} ${D.v} spolu za všetkých päť dní?`,
        solution: `$${vals.join(' + ')} = ${sum}$.`,
        hint: 'Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.'
      };
    }
    const most = Math.random() < 0.5, target = most ? Math.max(...vals) : Math.min(...vals), i = vals.indexOf(target);
    return {
      type: 'choice', options: DAYS, answer: DAYS[i],
      q: `${intro}V ktorý deň ${D.v} ${most ? 'najviac' : 'najmenej'} ${D.T[2]}?`,
      solution: `${most ? 'Najväčšie' : 'Najmenšie'} číslo je ${target}, a to ${DAYS_IN[i]}.`,
      hint: most ? 'Hľadaj najväčšie číslo (najvyšší stĺpec).' : 'Hľadaj najmenšie číslo (najnižší stĺpec).'
    };
  });
})();
