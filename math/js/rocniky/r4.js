/* 4. ročník: čísla do 10 000 a väčšie, písomné počítanie, slovné úlohy, rímske číslice,
   uhly a štvoruholníky, obvod a obsah, jednotky a údaje.
   Lekcia „Číselné výrazy a poradie operácií“ (id cisla, order 40) je v content.js. */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const { n1 } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r4' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;
  const { T } = CONTENT_I18N;

  // Tvar podstatného mena podľa počtu: 1 jablko, 2 jablká, 5 jabĺk.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  // Oddelenie tisícov: M pre KaTeX (tenká medzera), tis pre bežný text (nezalomiteľná medzera).
  const M = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
  const tis = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
  const EUR = ['euro', 'eurá', 'eur'];

  /* ---------- písomné počítanie: zápis pod sebou a slovný postup ---------- */

  // KaTeX: čísla pod sebou zarovnané vpravo, Riadok '-' = vodorovná čiara.
  const column = (rows) => {
    let s = '';
    rows.forEach((r, i) => {
      if (r === '-') s += ' \\\\ \\hline ';
      else s += (i && rows[i - 1] !== '-' ? ' \\\\ ' : '') + r;
    });
    return `$\\begin{array}{r}${s}\\end{array}$`;
  };
  const PLACE = ['jednotky', 'desiatky', 'stovky', 'tisíce', 'desaťtisíce', 'statisíce'];
  const digitsR = (n) => String(n).split('').reverse().map(Number);

  function addSteps(a, b) {
    const da = digitsR(a), db = digitsR(b), L = Math.max(da.length, db.length);
    let carry = 0;
    const out = [];
    for (let i = 0; i < L; i++) {
      const x = da[i] || 0, y = db[i] || 0, s = x + y + carry;
      const sum = `${x} + ${y}${carry ? ' + ' + carry : ''} = ${s}`;
      out.push(`${T.s(PLACE[i])}: $${sum}$, ${s >= 10 ? T`píšeme ${s % 10} a 1 si pamätáme` : T`píšeme ${s}`}`);
      carry = s >= 10 ? 1 : 0;
    }
    if (carry) out.push(T.s('zapamätanú 1 napíšeme na začiatok výsledku'));
    return out.join('; ') + '.';
  }

  function subSteps(a, b) {
    const da = digitsR(a), db = digitsR(b);
    let carry = 0;
    const out = [];
    for (let i = 0; i < da.length; i++) {
      const x = da[i], y0 = db[i] || 0, y = y0 + carry;
      // zapamätanú 1 pripočítame k dolnej číslici
      const head = `${T.s(PLACE[i])}: ${carry ? `$${y0} + 1 = ${y}$, ` : ''}`;
      let txt;
      if (x >= y) {
        const d = x - y;
        if (i === da.length - 1 && d === 0) txt = head + T`$${x} - ${y} = 0$, nulu na začiatok nepíšeme`;
        else if (i >= db.length && !carry) txt = `${T.s(PLACE[i])}: ` + T`opíšeme ${x}`;
        else txt = head + T`$${x} - ${y} = ${d}$, píšeme ${d}`;
        carry = 0;
      } else {
        txt = head + T`${x} je menej ako ${y}, preto $${x + 10} - ${y} = ${x + 10 - y}$, píšeme ${x + 10 - y} a 1 si pamätáme`;
        carry = 1;
      }
      out.push(txt);
    }
    return out.join('; ') + '.';
  }

  /* ---------- typické chyby a kroky písomného počítania ---------- */

  // sčítanie bez prenosu: v každom stĺpci len jednotky súčtu
  const noCarry = (a, b) => {
    let r = 0;
    for (let p = 1; p <= Math.max(a, b); p *= 10) r += ((Math.floor(a / p) % 10 + Math.floor(b / p) % 10) % 10) * p;
    return r;
  };
  // odčítanie „obrátene“: v každom stĺpci menšia číslica od väčšej
  const noBorrow = (a, b) => {
    let r = 0;
    for (let p = 1; p <= a; p *= 10) r += Math.abs(Math.floor(a / p) % 10 - Math.floor(b / p) % 10) * p;
    return r;
  };
  // odčítanie s požičaním, ale bez pripočítania zapamätanej 1 v ďalšom stĺpci
  const forgotBorrow = (a, b) => {
    let r = 0;
    for (let p = 1; p <= a; p *= 10) {
      const x = Math.floor(a / p) % 10, y = Math.floor(b / p) % 10;
      r += (x < y ? x + 10 - y : x - y) * p;
    }
    return r;
  };
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  // kroky písomného sčítania: súčet v každom stĺpci, potom výsledok
  function addColSteps(a, b) {
    const da = digitsR(a), db = digitsR(b);
    let carry = 0;
    const steps = da.map((x, i) => {
      const y = db[i] || 0, s = x + y + carry;
      const st = { q: carry ? T`${cap(PLACE[i])}: koľko je $${x} + ${y} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)`
        : T`${cap(PLACE[i])}: koľko je $${x} + ${y}$?`, answer: s };
      carry = s >= 10 ? 1 : 0;
      return st;
    });
    steps.push({ q: T`Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.`, answer: a + b });
    return steps;
  }
  // kroky písomného odčítania: číslica výsledku v každom stĺpci, potom výsledok
  function subColSteps(a, b) {
    const da = digitsR(a), db = digitsR(b);
    let carry = 0;
    const steps = da.map((x, i) => {
      const y0 = db[i] || 0, y = y0 + carry, borrow = x < y;
      const st = { q: `${T.s(cap(PLACE[i]))}: ${carry ? T`k dolnej číslici pripočítaj zapamätanú 1 ($${y0} + 1 = ${y}$).` + ' ' : ''}${borrow ? T`${x} je menej ako ${y}, preto počítaj $${x + 10} - ${y}$. Koľko to je?` : T`Koľko je $${x} - ${y}$?`}`, answer: borrow ? x + 10 - y : x - y };
      carry = borrow ? 1 : 0;
      return st;
    });
    steps.push({ q: T`Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.`, answer: a - b });
    return steps;
  }

  // násobenie bez pripočítania zapamätaných desiatok (posledný súčin sa píše celý)
  const mulNoCarry = (a, m) => {
    const da = digitsR(a);
    return da.reduce((r, x, i) => r + (i === da.length - 1 ? x * m : (x * m) % 10) * Math.pow(10, i), 0);
  };
  // kroky písomného násobenia jednociferným číslom: súčin v každom ráde, potom výsledok
  function mulColSteps(a, m) {
    let carry = 0;
    const steps = digitsR(a).map((x, i) => {
      const p = x * m + carry;
      const st = { q: carry ? T`${cap(PLACE[i])}: koľko je $${m}\\cdot ${x} + ${carry}$? (${carry} si pamätáš z predchádzajúceho rádu.)`
        : T`${cap(PLACE[i])}: koľko je $${m}\\cdot ${x}$?`, answer: p };
      carry = Math.floor(p / 10);
      return st;
    });
    steps.push({ q: T`Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.`, answer: a * m });
    return steps;
  }
  // čiastočné delenia písomného delenia (ako divSteps) ako malé úlohy
  function divColSteps(n, d) {
    const ds = String(n).split('').map(Number);
    let cur = 0, started = false;
    const out = [];
    ds.forEach((dig, i) => {
      cur = cur * 10 + dig;
      if (!started && cur < d && i < ds.length - 1) return;
      const q = Math.floor(cur / d);
      out.push({ q: started ? T`Pripíš ${dig}: koľkokrát sa ${d} zmestí do ${cur}?` : T`Koľkokrát sa ${d} zmestí do ${cur}?`, answer: q });
      started = true;
      cur -= q * d;
    });
    return out;
  }
  // podiel s vynechanými nulami (keď sa číslo nedalo deliť, žiak nenapísal 0)
  const dropZeros = (q) => Number(String(q).replace(/0/g, '') || '0');

  function mulSteps(a, m) {
    const da = digitsR(a);
    let carry = 0;
    const out = [];
    da.forEach((x, i) => {
      const p = x * m + carry;
      const last = i === da.length - 1;
      out.push(`$${m}\\cdot ${x}${carry ? ' + ' + carry : ''} = ${p}$, ${last || p < 10 ? T`píšeme ${p}` : T`píšeme ${p % 10} a ${Math.floor(p / 10)} si pamätáme`}`);
      carry = Math.floor(p / 10);
    });
    return out.join('; ') + '.';
  }

  // Písomné delenie jednociferným deliteľom krok za krokom.
  function divSteps(n, d) {
    const ds = String(n).split('').map(Number);
    let cur = 0, started = false;
    const out = [];
    ds.forEach((dig, i) => {
      cur = cur * 10 + dig;
      if (!started && cur < d && i < ds.length - 1) return;
      const q = Math.floor(cur / d), r = cur - q * d;
      out.push(started ? T`pripíšeme ${dig}: $${cur} : ${d} = ${q}$, lebo $${q}\\cdot ${d} = ${q * d}$, zvyšok ${r}`
        : T`$${cur} : ${d} = ${q}$, lebo $${q}\\cdot ${d} = ${q * d}$, zvyšok ${r}`);
      started = true;
      cur = r;
    });
    return out.join('; ') + '.';
  }

  /* ---------- rímske číslice ---------- */

  const ROMAN = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  const toRoman = (n) => {
    let s = '';
    for (const [v, r] of ROMAN) while (n >= v) { s += r; n -= v; }
    return s;
  };
  // rozklad na časti, napr. 94 → XC + IV = 90 + 4
  const romanParts = (n) => {
    const parts = [];
    for (const [v, r] of ROMAN) while (n >= v) { parts.push([v, r]); n -= v; }
    return parts;
  };

  /* ---------- kreslenie ---------- */

  // Písomný zápis pod sebou v SVG: riadky číslic zarovnané vpravo.
  // row: { s: '3476', shift, op, cls, h, line (čiara nad riadkom) }
  function columnSvg(rows, label) {
    const cw = 22, right = 170;
    const opX = right - Math.max(...rows.map((r) => r.s.length + (r.shift || 0))) * cw;
    let y = 26, s = '';
    rows.forEach((r) => {
      if (r.line) { s += `<line class="f-line" x1="${opX - 12}" y1="${y - 19}" x2="${right + 14}" y2="${y - 19}"/>`; y += 6; }
      if (r.op) s += `<text class="f-text" x="${opX}" y="${y}" text-anchor="middle">${r.op}</text>`;
      [...r.s].reverse().forEach((ch, i) => {
        if (ch !== ' ') s += `<text class="${r.cls || 'f-text'}" x="${right - (i + (r.shift || 0)) * cw}" y="${y}" text-anchor="middle">${ch}</text>`;
      });
      y += r.h || 28;
    });
    return `<svg viewBox="0 0 230 ${y - 10}" style="max-width:280px" role="img" aria-label="${label}">${s}</svg>`;
  }

  // uhol s vrcholom (x, y), jedno rameno vodorovne doprava
  const angle = (deg, x, y, L = 80) => {
    const a = deg * Math.PI / 180;
    const ex = x + L * Math.cos(a), ey = y - L * Math.sin(a);
    const r = 22;
    const mark = deg === 90
      ? `<path class="f-warn" d="M${x + 16} ${y} V${y - 16} H${x}"/>`
      : `<path class="f-warn" d="M${x + r} ${y} A${r} ${r} 0 0 0 ${n1(x + r * Math.cos(a))} ${n1(y - r * Math.sin(a))}"/>`;
    return `<line class="f-line" x1="${x}" y1="${y}" x2="${x + L}" y2="${y}"/>
      <line class="f-line" x1="${x}" y1="${y}" x2="${n1(ex)}" y2="${n1(ey)}"/>${mark}
      <circle class="f-vertex" cx="${x}" cy="${y}" r="4"/>`;
  };
  const rightMark = (x, y, dx, dy) => `<path class="f-thin" d="M${x + dx} ${y} V${y + dy} H${x}"/>`;

  const SHAPES = {
    'štvorec': (x, y) => `<rect class="f-fill f-outline" x="${x - 40}" y="${y - 40}" width="80" height="80"/>
      ${rightMark(x - 40, y - 40, 10, 10)}${rightMark(x + 40, y + 40, -10, -10)}`,
    'obdĺžnik': (x, y) => `<rect class="f-fill2 f-outline2" x="${x - 62}" y="${y - 32}" width="124" height="64"/>
      ${rightMark(x - 62, y - 32, 10, 10)}${rightMark(x + 62, y + 32, -10, -10)}`,
    'trojuholník': (x, y) => `<polygon class="f-fill3 f-outline3" points="${x - 55},${y + 38} ${x + 58},${y + 38} ${x + 10},${y - 40}"/>`,
    'všeobecný štvoruholník': (x, y) => `<polygon class="f-fill f-outline" points="${x - 58},${y + 36} ${x + 52},${y + 40} ${x + 38},${y - 30} ${x - 30},${y - 42}"/>`
  };

  /* ---------- obrázky ---------- */

  fig('r4-rady', {
    draw: () => {
      const heads = ['desaťtisíce', 'tisíce', 'stovky', 'desiatky', 'jednotky'];
      const digs = ['4', '7', '3', '8', '5'];
      let s = '<svg viewBox="0 0 470 132" role="img" aria-label="Tabuľka miestnych hodnôt pre číslo 47 385">';
      heads.forEach((h, i) => {
        const x = 10 + i * 90;
        s += `<rect class="f-cell" x="${x}" y="10" width="90" height="34"/><rect class="f-cell" x="${x}" y="44" width="90" height="44"/>
          <text class="f-small" x="${x + 45}" y="31" text-anchor="middle">${h}</text>
          <text class="f-text${i === 2 ? ' c-accent' : ''}" x="${x + 45}" y="73" text-anchor="middle" font-size="22">${digs[i]}</text>`;
      });
      return s + '<text class="f-text" x="235" y="118" text-anchor="middle">47 385 = 40 000 + 7 000 + 300 + 80 + 5</text></svg>';
    }
  });

  fig('r4-scitanie', {
    draw: () => columnSvg([
      { s: '111', shift: 1, cls: 'f-small c-accent', h: 20 },
      { s: '3476' }, { s: '2858', op: '+' }, { s: '6334', line: true, cls: 'f-text c-ok' }
    ], 'Písomné sčítanie 3476 plus 2858')
  });

  fig('r4-nasobenie', {
    draw: () => columnSvg([
      { s: '243' }, { s: '32', op: '·' },
      { s: '486', line: true }, { s: '729', shift: 1, op: '+' },
      { s: '7776', line: true, cls: 'f-text c-ok' }
    ], 'Písomné násobenie 243 krát 32')
  });

  fig('r4-rimske', {
    draw: () => {
      const sy = [['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]];
      let s = '<svg viewBox="0 0 430 92" role="img" aria-label="Rímske číslice a ich hodnoty">';
      sy.forEach(([r, v], i) => {
        const x = 10 + i * 59;
        s += `<rect class="f-fill f-outline" x="${x}" y="10" width="53" height="40" rx="6"/>
          <text class="f-text" x="${x + 26.5}" y="37" text-anchor="middle" font-size="22" font-weight="700">${r}</text>
          <text class="f-text" x="${x + 26.5}" y="76" text-anchor="middle">${v}</text>`;
      });
      return s + '</svg>';
    }
  });

  fig('r4-uhly', {
    draw: () => `<svg viewBox="0 0 470 150" role="img" aria-label="Ostrý, pravý a tupý uhol">
      ${angle(45, 30, 110)}${angle(90, 200, 110)}${angle(135, 390, 110, 70)}
      <text class="f-text" x="70" y="140" text-anchor="middle">ostrý</text>
      <text class="f-text" x="240" y="140" text-anchor="middle">pravý</text>
      <text class="f-text" x="400" y="140" text-anchor="middle">tupý</text></svg>`
  });

  fig('r4-stvoruholniky', {
    draw: () => {
      const names = Object.keys(SHAPES);
      return `<svg viewBox="0 0 600 150" role="img" aria-label="Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník">${names.map((n, i) =>
        SHAPES[n](75 + i * 150, 62) + `<text class="f-small" x="${75 + i * 150}" y="140" text-anchor="middle">${n}</text>`).join('')}</svg>`;
    }
  });

  // mriežka so štvorčekmi 1 cm × 1 cm a obdĺžnikom a × b
  const gridRect = (a, b, cols = 10, rows = 6, label = 'Obdĺžnik v štvorcovej sieti') => {
    const c = 26, x0 = 10, y0 = 10, ox = x0 + c, oy = y0 + c;
    let s = `<svg viewBox="0 0 ${cols * c + 20} ${rows * c + 20}" width="${Math.min(cols * c + 20, 300)}" role="img" aria-label="${label}">`;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) s += `<rect class="f-cell" x="${x0 + i * c}" y="${y0 + j * c}" width="${c}" height="${c}"/>`;
    s += `<rect class="f-fill" x="${ox}" y="${oy}" width="${a * c}" height="${b * c}"/>`;
    s += `<rect class="f-accent" x="${ox}" y="${oy}" width="${a * c}" height="${b * c}"/>`;
    return s + '</svg>';
  };

  fig('r4-obvod-obsah', {
    draw: () => {
      const c = 26;
      let s = '<svg viewBox="0 0 470 150" role="img" aria-label="Obdĺžnik 4 krát 3 v štvorcovej sieti">';
      for (let i = 0; i < 6; i++) for (let j = 0; j < 5; j++) s += `<rect class="f-cell" x="${10 + i * c}" y="${10 + j * c}" width="${c}" height="${c}"/>`;
      s += `<rect class="f-fill" x="36" y="36" width="104" height="78"/><rect class="f-accent" x="36" y="36" width="104" height="78"/>`;
      return s + `<text class="f-text c-accent" x="190" y="58">obvod: 4 + 3 + 4 + 3 = 14 cm</text>
        <text class="f-text" x="190" y="88">obsah: 3 riadky po 4 štvorčekoch</text>
        <text class="f-text" x="190" y="112">= 12 štvorčekov = 12 cm²</text></svg>`;
    }
  });

  // rebrík jednotiek: [jednotka, prevod k ďalšej]
  const ladder = (y, items) => {
    let s = '';
    items.forEach(([u, k], i) => {
      const x = 10 + i * 110;
      s += `<rect class="f-fill f-outline" x="${x}" y="${y}" width="56" height="34" rx="6"/>
        <text class="f-text" x="${x + 28}" y="${y + 23}" text-anchor="middle" font-weight="700">${u}</text>`;
      if (k) {
        s += `<line class="f-thin" x1="${x + 60}" y1="${y + 17}" x2="${x + 104}" y2="${y + 17}"/>
          <path class="f-solid" d="M${x + 106} ${y + 17} l-8 -4 v8 z"/>
          <text class="f-small c-accent" x="${x + 83}" y="${y + 10}" text-anchor="middle">· ${k}</text>`;
      }
    });
    return s;
  };

  fig('r4-jednotky', {
    draw: () => `<svg viewBox="0 0 560 150" role="img" aria-label="Prevody jednotiek dĺžky a hmotnosti">
      ${ladder(10, [['km', '1000'], ['m', '10'], ['dm', '10'], ['cm', '10'], ['mm']])}
      ${ladder(62, [['t', '1000'], ['kg', '100'], ['dag', '10'], ['g']])}
      <text class="f-small" x="10" y="138">Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.</text></svg>`
  });

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'r4-cisla10000', order: 10, title: 'Čísla do 10 000 a väčšie',
    summary: 'Tisícky, stovky, desiatky a jednotky; čítanie, zápis a porovnávanie veľkých čísel.',
    theory: [
      `<p>Každá číslica v čísle má svoje <strong>miesto (rád)</strong>: jednotky, desiatky, stovky, tisíce, desaťtisíce…
       Desať jednotiek je jedna desiatka, desať desiatok je stovka, desať stoviek je tisícka a desať tisícok je $10\\,000$.</p>`,
      { fig: 'r4-rady', caption: 'Číslo $47\\,385$ má 4 desaťtisíce, 7 tisícok, 3 stovky, 8 desiatok a 5 jednotiek.' },
      `<p>Veľké čísla píšeme s medzerou po troch číslach sprava: $8\\,206$, $35\\,000$. Ľahšie sa tak čítajú:
       <em>osemtisíc dvestošesť</em>, <em>tridsaťpäťtisíc</em>.</p>`,
      `<p><strong>Porovnávanie:</strong> väčšie je číslo, ktoré má viac číslic. Ak majú rovnako veľa číslic, porovnávame
       zľava – najprv tisíce, potom stovky, desiatky a jednotky. Napríklad $5\\,382 &gt; 5\\,297$, lebo 3 stovky sú viac ako 2 stovky.</p>`
    ],
    examples: [
      { task: 'Zapíš číslom: 6 tisícok, 0 stoviek, 4 desiatky a 9 jednotiek.',
        steps: ['Na miesto stoviek napíšeme nulu, aby sa číslice neposunuli.', '$6\\,000 + 40 + 9 = 6\\,049$.', '<strong>Číslo je $6\\,049$.</strong>'] },
      { task: 'Porovnaj čísla $7\\,615$ a $7\\,651$.',
        steps: ['Obe čísla sú štvorciferné a majú 7 tisícok aj 6 stoviek.', 'Desiatky: 1 je menej ako 5.', '<strong>$7\\,615 &lt; 7\\,651$</strong>'] }
    ]
  });

  const PLACE_GEN = ['jednotiek', 'desiatok', 'stoviek', 'tisícov', 'desaťtisícov'];
  const PL_FORMS = [['jednotka', 'jednotky', 'jednotiek'], ['desiatka', 'desiatky', 'desiatok'],
    ['stovka', 'stovky', 'stoviek'], ['tisícka', 'tisícky', 'tisícok']];

  gen('r4-cisla10000', () => {
    const t = rnd(0, 3);
    if (t === 0) {
      const n = Math.random() < 0.7 ? rnd(1000, 9999) : rnd(10000, 99999);
      const d = digitsR(n), i = rnd(0, d.length - 1), fromLeft = Number(String(n)[i]);
      return {
        // typická chyba: rády počítané zľava namiesto sprava
        mistakes: fromLeft !== d[i] ? [{ value: fromLeft, msg: T`Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.` }] : [],
        answer: d[i],
        q: T`Ktorá číslica je v čísle $${M(n)}$ na mieste ${PLACE_GEN[i]}?`,
        solution: T`Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste ${PLACE_GEN[i]} je číslica ${d[i]}.`,
        hint: T`Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.`
      };
    }
    if (t === 1) {
      const big = Math.random() < 0.3;
      const a = big ? rnd(10000, 99999) : rnd(1000, 9999);
      let b;
      const r = Math.random();
      if (r < 0.15) b = a;
      else if (r < 0.7) {
        const p = pick([1, 10, 100, 1000]);
        b = a + pick([-1, 1]) * p * rnd(1, 5);
        if (b < 1000) b = a + p;
      } else b = big ? rnd(1000, 99999) : rnd(1000, 9999);
      const ans = a < b ? '<' : a > b ? '>' : '=';
      const choiceHints = a === b
        ? { '<': T`Čísla sú úplne rovnaké, ani jedno nie je väčšie.`, '>': T`Čísla sú úplne rovnaké, ani jedno nie je väčšie.` }
        : {
          [ans === '<' ? '>' : '<']: String(a).length !== String(b).length
            ? T`Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.`
            : T`Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.`,
          '=': T`Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.`
        };
      return {
        type: 'choice', options: ['<', '=', '>'], answer: ans, choiceHints,
        q: T`Doplň správny znak: $${M(a)} \\;\\square\\; ${M(b)}$`,
        solution: a === b ? T`Čísla sú rovnaké.`
          : String(a).length !== String(b).length
            ? T`Číslo s viacerými číslicami je väčšie, preto $${M(a)} ${ans === '<' ? '&lt;' : '&gt;'} ${M(b)}$.`
            : T`Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: $${M(a)} ${ans === '<' ? '&lt;' : '&gt;'} ${M(b)}$.`,
        hint: T`Porovnaj najprv počet číslic, potom číslice zľava doprava.`
      };
    }
    if (t === 2) {
      const d = [rnd(1, 9), rnd(0, 9), rnd(0, 9), rnd(0, 9)];
      if (Math.random() < 0.5) d[rnd(1, 2)] = 0;
      const n = d[0] * 1000 + d[1] * 100 + d[2] * 10 + d[3];
      const w = [3, 2, 1, 0].map((i, k) => pl(d[k], PL_FORMS[i]));
      // typická chyba: vynechané nuly v strede čísla
      const noZero = Number(d.filter((x, k) => x !== 0 || k === 0 || k === 3).join(''));
      return {
        mistakes: noZero !== n ? [{ value: noZero, msg: T`Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.` }] : [],
        answer: n,
        q: T`Zapíš číslom: ${d[0]} ${w[0]}, ${d[1]} ${w[1]}, ${d[2]} ${w[2]} a ${d[3]} ${w[3]}.`,
        solution: T`$${M(d[0] * 1000)} + ${d[1] * 100} + ${d[2] * 10} + ${d[3]} = ${M(n)}$. Kde je 0 kusov, píšeme na to miesto nulu.`,
        hint: T`Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.`
      };
    }
    const step = pick([1, 10, 100, 1000]);
    const up = Math.random() < 0.5;
    const n = up ? rnd(1000, 9999 - step) : rnd(1000 + step, 9999);
    const nice = Math.random() < 0.4 ? n - (n % (step * 10)) + (up ? step * 10 - step : 0) : n;
    const base = Math.min(Math.max(nice, 1000 + step), 9999 - step);
    const res = up ? base + step : base - step;
    return {
      mistakes: [{ value: up ? base - step : base + step, msg: up
        ? T`Posunul si sa na opačnú stranu. Väčšie číslo dostaneš pripočítaním.`
        : T`Posunul si sa na opačnú stranu. Menšie číslo dostaneš odčítaním.` }],
      answer: res,
      q: up ? T`Ktoré číslo je o ${tis(step)} väčšie ako $${M(base)}$?` : T`Ktoré číslo je o ${tis(step)} menšie ako $${M(base)}$?`,
      solution: `$${M(base)} ${up ? '+' : '-'} ${M(step)} = ${M(res)}$.`,
      hint: up ? T`Pripočítaj ${tis(step)}. Pozor na prechod cez rád.` : T`Odčítaj ${tis(step)}. Pozor na prechod cez rád.`
    };
  });

  lesson({
    id: 'r4-scitanie', order: 20, title: 'Písomné sčítanie a odčítanie',
    summary: 'Sčítanie a odčítanie viacciferných čísel pod sebou.',
    theory: [
      `<p>Pri písomnom sčítaní píšeme čísla <strong>pod seba</strong> tak, aby jednotky boli pod jednotkami, desiatky pod
       desiatkami atď. Počítame <strong>sprava</strong>, od jednotiek. Keď súčet v stĺpci presiahne 9, napíšeme len jednotky
       a 1 si zapamätáme do ďalšieho stĺpca.</p>`,
      { fig: 'r4-scitanie', caption: 'Písomné sčítanie $3\\,476 + 2\\,858 = 6\\,334$. Malé jednotky hore sú čísla, ktoré si pamätáme.' },
      `<p>Pri písomnom odčítaní tiež počítame od jednotiek. Ak je horná číslica menšia ako dolná, pripočítame k nej 10
       a do ďalšieho stĺpca si zapamätáme 1, ktorú pripočítame k dolnej číslici.</p>`,
      `<p><strong>Skúška:</strong> výsledok odčítania overíme sčítaním. Ak $5\\,203 - 1\\,868 = 3\\,335$,
       musí platiť $3\\,335 + 1\\,868 = 5\\,203$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj písomne $4\\,587 + 3\\,765$.',
        steps: [column(['4587', '+\\,3765', '-', '8352']),
          'Jednotky: $7 + 5 = 12$, píšeme 2, 1 si pamätáme. Desiatky: $8 + 6 + 1 = 15$, píšeme 5, 1 si pamätáme.',
          'Stovky: $5 + 7 + 1 = 13$, píšeme 3, 1 si pamätáme. Tisíce: $4 + 3 + 1 = 8$.', '<strong>Výsledok: $8\\,352$</strong>'] },
      { task: 'Vypočítaj písomne $6\\,042 - 2\\,718$.',
        steps: [column(['6042', '-\\,2718', '-', '3324']),
          'Jednotky: 2 je menej ako 8, preto $12 - 8 = 4$, 1 si pamätáme.', 'Desiatky: $1 + 1 = 2$, $4 - 2 = 2$. Stovky: 0 je menej ako 7, preto $10 - 7 = 3$, 1 si pamätáme.',
          'Tisíce: $2 + 1 = 3$, $6 - 3 = 3$.', '<strong>Výsledok: $3\\,324$</strong>. Skúška: $3\\,324 + 2\\,718 = 6\\,042$.'] }
    ]
  });

  gen('r4-scitanie', () => {
    const t = rnd(0, 2);
    if (t === 0) {
      const a = rnd(1000, 8999), b = rnd(100, 9999 - a > 999 ? 9999 - a : 999);
      const s = a + b;
      return {
        answer: s,
        q: T`Vypočítaj písomne $${M(a)} + ${M(b)}$.`,
        solution: `${column([String(a), '+\\,' + b, '-', String(s)])} ${addSteps(a, b)}`,
        hint: T`Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.`,
        mistakes: noCarry(a, b) !== s ? [{ value: noCarry(a, b), msg: T`Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.` }] : [],
        steps: addColSteps(a, b)
      };
    }
    if (t === 1) {
      const a = rnd(2000, 9999), b = rnd(100, a - 100), d = a - b, nb = noBorrow(a, b), fb = forgotBorrow(a, b);
      return {
        answer: d,
        q: T`Vypočítaj písomne $${M(a)} - ${M(b)}$.`,
        solution: `${column([String(a), '-\\,' + b, '-', String(d)])} ${subSteps(a, b)} ` + T`Skúška: $${M(d)} + ${M(b)} = ${M(a)}$.`,
        hint: T`Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.`,
        mistakes: [
          ...(nb !== d ? [{ value: nb, msg: T`V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.` }] : []),
          ...(fb !== d && fb !== nb ? [{ value: fb, msg: T`Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.` }] : [])
        ],
        steps: subColSteps(a, b)
      };
    }
    const a = rnd(1000, 6000), x = rnd(500, 3999), s = a + x;
    if (Math.random() < 0.5) {
      return {
        answer: x,
        q: T`Doplň chýbajúce číslo: $${M(a)} + \\square = ${M(s)}$`,
        solution: T`Chýbajúci sčítanec zistíme odčítaním: $${M(s)} - ${M(a)} = ${M(x)}$.`,
        hint: T`Od súčtu odčítaj známy sčítanec.`,
        mistakes: [{ value: s + a, msg: T`Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.` }]
      };
    }
    return {
      answer: x,
      q: T`Doplň chýbajúce číslo: $${M(s)} - \\square = ${M(a)}$`,
      solution: T`Hľadáme, koľko sme odčítali: $${M(s)} - ${M(a)} = ${M(x)}$. Skúška: $${M(s)} - ${M(x)} = ${M(a)}$.`,
      hint: T`Od menšenca odčítaj rozdiel.`,
      mistakes: [{ value: s + a, msg: T`Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.` }]
    };
  });

  lesson({
    id: 'r4-nasobenie', order: 30, title: 'Písomné násobenie a delenie',
    summary: 'Násobenie jednociferným a dvojciferným číslom, delenie jednociferným číslom so zvyškom.',
    theory: [
      `<p><strong>Písomné násobenie jednociferným číslom:</strong> násobíme postupne jednotky, desiatky, stovky…
       Ak výsledok presiahne 9, napíšeme jednotky a desiatky si zapamätáme a pripočítame k ďalšiemu súčinu.</p>`,
      `<p><strong>Násobenie dvojciferným číslom:</strong> najprv násobíme jednotkami, potom desiatkami. Druhý čiastočný
       súčin píšeme posunutý o jedno miesto doľava. Nakoniec čiastočné súčiny sčítame.</p>`,
      { fig: 'r4-nasobenie', caption: '$243\\cdot 32$: najprv $243\\cdot 2 = 486$, potom $243\\cdot 3 = 729$ posunuté doľava (znamená $7\\,290$). Spolu $7\\,776$.' },
      `<p><strong>Písomné delenie:</strong> delíme zľava. Zoberieme toľko číslic, aby sa dali deliť, zistíme výsledok a zvyšok,
       pripíšeme ďalšiu číslicu a pokračujeme. Ak na konci niečo zostane, je to <strong>zvyšok</strong>, ktorý je vždy menší ako deliteľ.
       Skúška: $\\text{podiel}\\cdot\\text{deliteľ} + \\text{zvyšok} = \\text{delenec}$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj písomne $1\\,627\\cdot 4$.',
        steps: [column(['1627', '\\cdot\\,4', '-', '6508']),
          '$4\\cdot 7 = 28$, píšeme 8, 2 si pamätáme. $4\\cdot 2 + 2 = 10$, píšeme 0, 1 si pamätáme.',
          '$4\\cdot 6 + 1 = 25$, píšeme 5, 2 si pamätáme. $4\\cdot 1 + 2 = 6$.', '<strong>Výsledok: $6\\,508$</strong>'] },
      { task: 'Vypočítaj písomne $947 : 6$.',
        steps: ['$9 : 6 = 1$, zvyšok 3.', 'Pripíšeme 4: $34 : 6 = 5$, zvyšok 4.', 'Pripíšeme 7: $47 : 6 = 7$, zvyšok 5.',
          '<strong>$947 : 6 = 157$, zvyšok 5.</strong> Skúška: $157\\cdot 6 + 5 = 947$.'] }
    ]
  });

  gen('r4-nasobenie', () => {
    const t = rnd(0, 3);
    if (t === 0) {
      const m = rnd(2, 9), a = rnd(102, Math.floor(9999 / m)), p = a * m;
      return {
        answer: p,
        q: T`Vypočítaj písomne $${M(a)}\\cdot ${m}$.`,
        solution: `${column([String(a), '\\cdot\\,' + m, '-', String(p)])} ${mulSteps(a, m)}`,
        hint: T`Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.`,
        mistakes: mulNoCarry(a, m) !== p ? [{ value: mulNoCarry(a, m), msg: T`Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.` }] : [],
        steps: digitsR(a).length <= 4 ? mulColSteps(a, m) : undefined
      };
    }
    if (t === 1) {
      const a = rnd(12, 99), u = rnd(1, 9), d = rnd(1, 9), b = d * 10 + u, p = a * b;
      return {
        answer: p,
        q: T`Vypočítaj písomne $${a}\\cdot ${b}$.`,
        solution: `${column([String(a), '\\cdot\\,' + b, '-', String(a * u), `${a * d}\\phantom{0}`, '-', String(p)])}` + T`
          Najprv $${a}\\cdot ${u} = ${a * u}$, potom $${a}\\cdot ${d} = ${a * d}$ (píšeme o miesto doľava, znamená to $${M(a * d * 10)}$).
          Sčítame: $${a * u} + ${M(a * d * 10)} = ${M(p)}$.`,
        hint: T`Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.`,
        mistakes: [
          { value: a * u + a * d, msg: T`Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.` },
          ...(a * u !== p ? [{ value: a * u, msg: T`Vynásobil si len jednotkami. Vynásob aj desiatkami (${d}) a oba čiastočné súčiny sčítaj.` }] : [])
        ],
        steps: [
          { q: T`Najprv násob jednotkami: koľko je $${a}\\cdot ${u}$?`, answer: a * u },
          { q: T`Potom desiatkami: koľko je $${a}\\cdot ${d}$?`, answer: a * d },
          { q: T`Druhý súčin posuň o miesto doľava (znamená $${M(a * d * 10)}$) a sčítaj: koľko je $${a * u} + ${M(a * d * 10)}$?`, answer: p }
        ]
      };
    }
    const d = rnd(2, 9);
    const exact = t === 2;
    const q = rnd(Math.ceil(100 / d), Math.floor(9999 / d) - 1), r = exact ? 0 : rnd(1, d - 1), n = q * d + r;
    // typická chyba: vynechaná 0 v podiele; kroky: čiastočné delenia zľava
    const dz = dropZeros(q), parts = divColSteps(n, d);
    const zeroMsg = T`V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.`;
    if (exact) {
      return {
        answer: q,
        q: T`Vypočítaj písomne $${M(n)} : ${d}$.`,
        solution: T`${divSteps(n, d)} Výsledok je $${M(q)}$. Skúška: $${M(q)}\\cdot ${d} = ${M(n)}$.`,
        hint: T`Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.`,
        mistakes: dz !== q ? [{ value: dz, msg: zeroMsg }] : [],
        steps: parts.length >= 2 && parts.length <= 4
          ? [...parts, { q: T`Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.`, answer: q }] : undefined
      };
    }
    return {
      type: 'tuple', answer: [q, r], placeholder: T`podiel; zvyšok`,
      q: T`Vypočítaj písomne $${M(n)} : ${d}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.`,
      solution: T`${divSteps(n, d)} Podiel je $${M(q)}$, zvyšok ${r}. Skúška: $${M(q)}\\cdot ${d} + ${r} = ${M(n)}$.`,
      hint: T`Deľ zľava a zvyšok na konci musí byť menší ako ${d}.`,
      mistakes: [
        ...(dz !== q ? [{ value: [dz, r], msg: zeroMsg }] : []),
        { value: [q], msg: T`Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.` }
      ],
      steps: parts.length >= 2 && parts.length <= 4
        ? [...parts, { q: T`Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.`, type: 'tuple', placeholder: T`podiel; zvyšok`, answer: [q, r] }] : undefined
    };
  });

  lesson({
    id: 'r4-slovne', order: 45, title: 'Slovné úlohy s viacerými operáciami',
    summary: 'Úlohy, ktoré riešime vo viacerých krokoch: nákupy, delenie do skupín, porovnávanie.',
    theory: [
      `<p>Niektoré slovné úlohy sa nedajú vyriešiť jedným príkladom. Postupujeme v krokoch:</p>
       <ol><li>Čo vieme? Čo hľadáme?</li><li>Čo musím zistiť najprv, aby som mohol odpovedať?</li>
       <li>Vypočítam každý krok a zapíšem ho.</li><li>Napíšem odpoveď a skontrolujem, či dáva zmysel.</li></ol>`,
      `<p><strong>Užitočné slová:</strong> <em>o … viac / menej</em> – sčítame alebo odčítame;
       <em>…-krát viac / menej</em> – násobíme alebo delíme; <em>rozdelili rovnako</em>, <em>po …</em> – delíme;
       <em>zvyšok</em>, <em>vydali</em> – odčítame.</p>`,
      `<p>Kroky môžeme zapísať aj jedným výrazom so zátvorkami, napríklad $50 - 3\\cdot 12 = 50 - 36 = 14$.
       Pamätaj na poradie operácií: najprv násobenie a delenie, potom sčítanie a odčítanie.</p>`
    ],
    examples: [
      { task: 'Mama kúpila 3 knihy po 12 eur a zaplatila 50-eurovou bankovkou. Koľko eur jej vydali?',
        steps: ['Najprv zistíme cenu kníh: $3\\cdot 12 = 36$ eur.', 'Potom vydané peniaze: $50 - 36 = 14$ eur.',
          'Spolu jedným výrazom: $50 - 3\\cdot 12 = 14$.', '<strong>Odpoveď: Mame vydali 14 eur.</strong>'] },
      { task: 'Na výlet išli 4 triedy po 23 žiakov. Cestovali autobusmi, v každom sedelo 46 žiakov. Koľko autobusov išlo?',
        steps: ['Počet žiakov: $4\\cdot 23 = 92$.', 'Počet autobusov: $92 : 46 = 2$.', '<strong>Odpoveď: Išli 2 autobusy.</strong>'] }
    ]
  });

  const KIDS = [
    { n: 'Ema', f: true }, { n: 'Jakub', f: false }, { n: 'Sofia', f: true }, { n: 'Martin', f: false },
    { n: 'Lucia', f: true }, { n: 'Samuel', f: false }, { n: 'Nina', f: true }, { n: 'Tomáš', f: false }
  ];
  const v = (k, m, f) => (k.f ? f : m);
  const ITEMS = [['zošit', 'zošity', 'zošitov'], ['knihu', 'knihy', 'kníh'], ['loptu', 'lopty', 'lôpt'], ['tričko', 'tričká', 'tričiek']];

  gen('r4-slovne', () => {
    const t = rnd(0, 3);
    const k = pick(KIDS);
    if (t === 0) {
      const it = pick(ITEMS), n = rnd(2, 6), p = rnd(3, 18), cost = n * p;
      const bill = [20, 50, 100, 200].find((b) => b > cost);
      return {
        answer: bill - cost,
        q: T`${k.n} ${v(k, 'kúpil', 'kúpila')} ${n} ${pl(n, it)} po ${p} ${pl(p, EUR)} a ${v(k, 'zaplatil', 'zaplatila')} ${bill}-eurovou bankovkou. Koľko eur ${v(k, 'mu', 'jej')} vydali?`,
        solution: T`Najprv cena nákupu: $${n}\\cdot ${p} = ${cost}$ ${pl(cost, EUR)}. Potom vydané peniaze: $${bill} - ${cost} = ${bill - cost}$. Vydali ${v(k, 'mu', 'jej')} ${bill - cost} ${pl(bill - cost, EUR)}.`,
        hint: T`Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.`,
        mistakes: [
          { value: bill - p, msg: T`Odčítal si cenu len jednej veci. Kúpených vecí bolo ${n}, najprv vypočítaj cenu celého nákupu.` },
          ...(cost !== bill - cost ? [{ value: cost, msg: T`To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.` }] : [])
        ],
        steps: [
          { q: T`Koľko eur stál celý nákup?`, answer: cost },
          { q: T`Koľko eur vydali? Vypočítaj $${bill} - ${cost}$.`, answer: bill - cost }
        ]
      };
    }
    if (t === 1) {
      const c = rnd(5, 9), per = pick([4, 5, 6, 8, 10]), bags = rnd(12, 40), total = bags * per + c * 10 * rnd(1, 3);
      const sold = total - bags * per;
      return {
        answer: bags,
        q: T`V obchode mali ${tis(total)} kg zemiakov. Predali ${tis(sold)} kg a zvyšok rozdelili do vriec po ${per} kg. Koľko vriec naplnili?`,
        solution: T`Zvyšok zemiakov: $${M(total)} - ${M(sold)} = ${M(bags * per)}$ kg. Počet vriec: $${M(bags * per)} : ${per} = ${bags}$.`,
        hint: T`Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.`,
        mistakes: [
          ...(total % per === 0 ? [{ value: total / per, msg: T`Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.` }] : []),
          { value: bags * per, msg: T`To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po ${per} kg sa z nich naplní.` }
        ],
        steps: [
          { q: T`Koľko kilogramov zemiakov zostalo po predaji?`, answer: bags * per },
          { q: T`Koľko vriec po ${per} kg sa z nich naplní?`, answer: bags }
        ]
      };
    }
    if (t === 2) {
      const a = rnd(15, 60), b = rnd(5, 25), m = rnd(2, 4);
      const k2 = pick(KIDS.filter((x) => x !== k)), k3 = pick(KIDS.filter((x) => x !== k && x !== k2));
      const x = a + b, y = x * m, s = a + x + y;
      const mult = ['', '', 'dvakrát', 'trikrát', 'štyrikrát'][m];
      return {
        answer: s,
        q: T`${k.n} má ušetrených ${a} ${pl(a, EUR)}. ${k2.n} má o ${b} ${pl(b, EUR)} viac ako ${k.n} a ${k3.n} má ${mult} toľko ako ${k2.n}. Koľko eur majú ${k.f && k2.f && k3.f ? 'všetky tri' : 'všetci traja'} spolu?`,
        solution: T`${k2.n}: $${a} + ${b} = ${x}$. ${k3.n}: $${m}\\cdot ${x} = ${y}$. Spolu: $${a} + ${x} + ${y} = ${s}$ ${pl(s, EUR)}.`,
        hint: T`„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.`,
        mistakes: [
          { value: a + x + x + m, msg: T`„${mult.charAt(0).toUpperCase() + mult.slice(1)} toľko“ znamená násobiť, nie pripočítať ${m}.` },
          { value: a + x + a * m, msg: T`${k3.n} má ${mult} toľko ako ${k2.n}, nie ako ${k.n}. Násob sumu, ktorú má ${k2.n}.` },
          { value: y, msg: T`Toľko má len ${k3.n}. Pýtame sa, koľko majú spolu všetky tri deti.` }
        ].filter((e) => e.value !== s),
        steps: [
          { q: T`Koľko eur má ${k2.n}?`, answer: x },
          { q: T`Koľko eur má ${k3.n}?`, answer: y },
          { q: T`Koľko eur majú spolu? Vypočítaj $${a} + ${x} + ${y}$.`, answer: s }
        ]
      };
    }
    const cls = rnd(2, 4), per = rnd(18, 28), teach = rnd(2, 4), seats = pick([30, 40, 50]);
    const people = cls * per + teach, buses = Math.ceil(people / seats);
    return {
      answer: buses,
      q: T`Na výlet idú ${cls} triedy po ${per} žiakov a s nimi ${teach} učitelia. Jeden autobus má ${seats} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?`,
      solution: T`Počet ľudí: $${cls}\\cdot ${per} + ${teach} = ${people}$. $${people} : ${seats} = ${Math.floor(people / seats)}$, zvyšok ${people % seats}.` + `
        ${people % seats ? T`Zvyšní ľudia potrebujú ešte jeden autobus, preto treba ${buses} ${pl(buses, ['autobus', 'autobusy', 'autobusov'])}.` : T`Treba ${buses} ${pl(buses, ['autobus', 'autobusy', 'autobusov'])}.`}`,
      hint: T`Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.`,
      // chyby o 1 autobus (zabudnutý zvyšok, zabudnutí učitelia) rozpozná aplikácia všeobecne
      steps: [
        { q: T`Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?`, answer: people },
        { q: T`Koľko autobusov po ${seats} miest treba, aby sa zmestili všetci?`, answer: buses }
      ]
    };
  });

  lesson({
    id: 'r4-rimske', order: 50, title: 'Rímske číslice',
    summary: 'Znaky I, V, X, L, C, D, M a zápis čísel rímskymi číslicami.',
    theory: [
      `<p>Starí Rimania zapisovali čísla siedmimi písmenami. Rímske číslice dodnes nájdeme na hodinách, v názvoch storočí
       či na budovách.</p>`,
      { fig: 'r4-rimske', caption: 'Rímske číslice a ich hodnoty.' },
      `<p><strong>Pravidlá:</strong> hodnoty znakov sčítavame: $\\text{XVI} = 10 + 5 + 1 = 16$. Ten istý znak (I, X, C, M)
       môžeme napísať najviac trikrát za sebou: $\\text{III} = 3$, $\\text{XXX} = 30$.</p>`,
      `<p>Ak stojí menší znak <strong>pred</strong> väčším, odčítame ho: $\\text{IV} = 4$, $\\text{IX} = 9$, $\\text{XL} = 40$,
       $\\text{XC} = 90$. Preto 4 nepíšeme IIII, ale IV.</p>`
    ],
    examples: [
      { task: 'Aké číslo je zapísané rímskymi číslicami $\\text{LXXIV}$?',
        steps: ['Rozdelíme: $\\text{L} = 50$, $\\text{XX} = 20$, $\\text{IV} = 4$.', '$50 + 20 + 4 = 74$.', '<strong>$\\text{LXXIV} = 74$</strong>'] },
      { task: 'Zapíš rímskymi číslicami číslo 39.',
        steps: ['$39 = 30 + 9$.', '$30 = \\text{XXX}$, $9 = \\text{IX}$.', '<strong>$39 = \\text{XXXIX}$</strong>'] }
    ]
  });

  const partsTxt = (n) => romanParts(n).reduce((acc, [val, r]) => {
    const last = acc[acc.length - 1];
    if (last && last[1][0] === r && r.length === 1) { last[0] += val; last[1] += r; } else acc.push([val, r]);
    return acc;
  }, []);

  gen('r4-rimske', () => {
    const t = rnd(0, 2);
    const VAL = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    if (t === 0) {
      const n = rnd(1, 100), r = toRoman(n), p = partsTxt(n);
      // typická chyba: menší znak pred väčším pripočítaný namiesto odčítaný (IV ako 6)
      const allAdded = [...r].reduce((s, ch) => s + VAL[ch], 0);
      return {
        mistakes: allAdded !== n ? [{ value: allAdded, msg: T`Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.` }] : [],
        steps: p.length >= 2 && p.length <= 4 ? [
          ...p.map(([v, s]) => ({ q: T`Akú hodnotu má časť $\\text{${s}}$?`, answer: v })),
          { q: T`Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{${r}}$?`, answer: n }
        ] : undefined,
        answer: n,
        q: T`Aké číslo je zapísané rímskymi číslicami $\\text{${r}}$?`,
        solution: T`${p.map(([val, s]) => `$\\text{${s}} = ${val}$`).join(', ')}. Spolu ${p.length > 1 ? `$${p.map(([val]) => val).join(' + ')} = ${n}$` : n}.`,
        hint: T`Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.`
      };
    }
    if (t === 1) {
      const n = rnd(1, 100), r = toRoman(n), p = partsTxt(n);
      // typická chyba: štyri rovnaké znaky za sebou (IIII namiesto IV, XXXX namiesto XL…)
      let add = '', k = n;
      for (const [v, s] of [[100, 'C'], [50, 'L'], [10, 'X'], [5, 'V'], [1, 'I']]) while (k >= v) { add += s; k -= v; }
      const tens = n - n % 10, ones = n % 10;
      return {
        mistakes: add !== r ? [{ value: add, msg: T`Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.` }] : [],
        steps: tens && ones && n < 100 ? [
          { q: T`Ako zapíšeš rímskymi číslicami ${tens}?`, type: 'text', answer: toRoman(tens), placeholder: T`napr. XX` },
          { q: T`Ako zapíšeš rímskymi číslicami ${ones}?`, type: 'text', answer: toRoman(ones), placeholder: T`napr. III` },
          { q: T`Spoj obe časti: ako zapíšeš ${n}?`, type: 'text', answer: r, placeholder: T`napr. XIV` }
        ] : undefined,
        type: 'text', answer: r, placeholder: T`napr. XIV`,
        q: T`Zapíš rímskymi číslicami číslo ${n}.`,
        solution: T`Rozložíme: ${p.map(([val, s]) => `$${val} = \\text{${s}}$`).join(', ')}. Spolu $${n} = \\text{${r}}$.`,
        hint: T`Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.`
      };
    }
    const sy = [['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]];
    const [r, val] = pick(sy);
    const choiceHints = {};
    sy.filter((x) => x[0] !== r).forEach(([s, v]) => { choiceHints[String(v)] = T`Hodnotu ${v} má rímska číslica ${s}, nie ${r}.`; });
    return {
      choiceHints,
      type: 'choice', options: sy.map((x) => String(x[1])), answer: String(val),
      q: T`Akú hodnotu má rímska číslica $\\text{${r}}$?`,
      solution: T`$\\text{${r}} = ${val}$.`,
      hint: T`I = 1, V = 5, X = 10 – a ďalej L, C, D, M.`
    };
  });

  lesson({
    id: 'r4-utvary', order: 60, title: 'Uhol, trojuholník a štvoruholníky',
    summary: 'Ostrý, pravý a tupý uhol; trojuholník, obdĺžnik, štvorec a ďalšie štvoruholníky.',
    theory: [
      `<p><strong>Uhol</strong> tvoria dve ramená, ktoré vychádzajú z jedného bodu – <strong>vrcholu</strong>.
       Pravý uhol má tvar rohu zošita. Uhol menší ako pravý je <strong>ostrý</strong>, uhol väčší ako pravý
       (ale ešte nie priamka) je <strong>tupý</strong>.</p>`,
      { fig: 'r4-uhly', caption: 'Ostrý, pravý a tupý uhol. Pravý uhol označujeme štvorčekom.' },
      `<p><strong>Trojuholník</strong> má 3 strany, 3 vrcholy a 3 uhly. <strong>Štvoruholník</strong> má 4 strany, 4 vrcholy a 4 uhly.
       <strong>Obdĺžnik</strong> je štvoruholník so 4 pravými uhlami, jeho protiľahlé strany sú rovnako dlhé.
       <strong>Štvorec</strong> je obdĺžnik, ktorý má všetky 4 strany rovnako dlhé.</p>`,
      { fig: 'r4-stvoruholniky', caption: 'Štvorec a obdĺžnik majú všetky uhly pravé. Každý štvorec je zároveň obdĺžnikom.' }
    ],
    examples: [
      { task: 'Je uhol medzi ručičkami hodín o 3:00 ostrý, pravý alebo tupý?',
        steps: ['Malá ručička ukazuje na 3, veľká na 12.', 'Medzi nimi je štvrtina kruhu – tvar rohu zošita.', '<strong>Je to pravý uhol.</strong>'] },
      { task: 'Obdĺžnik má jednu stranu dlhú 7 cm a druhú 4 cm. Aké dlhé sú zvyšné dve strany?',
        steps: ['Protiľahlé strany obdĺžnika sú rovnako dlhé.', '<strong>Zvyšné strany merajú 7 cm a 4 cm.</strong>'] }
    ]
  });

  const ANGLE_FACTS = [
    ['Koľko pravých uhlov má obdĺžnik?', 4, 'Obdĺžnik má všetky 4 uhly pravé.'],
    ['Koľko pravých uhlov má štvorec?', 4, 'Štvorec má všetky 4 uhly pravé.'],
    ['Koľko uhlov má trojuholník?', 3, 'Trojuholník má 3 vrcholy, a preto aj 3 uhly.'],
    ['Koľko vrcholov má štvoruholník?', 4, 'Štvoruholník má 4 strany a 4 vrcholy.'],
    ['Koľko ramien má jeden uhol?', 2, 'Každý uhol má 2 ramená a 1 vrchol.'],
    ['Koľko uhlov majú spolu dva trojuholníky?', 6, 'Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.',
      [3, 'Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.']]
  ];
  const TF = [
    ['Každý štvorec je obdĺžnik.', 'pravda', 'Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.'],
    ['Každý obdĺžnik je štvorec.', 'nepravda', 'Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.'],
    ['Trojuholník môže mať dva pravé uhly.', 'nepravda', 'Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.'],
    ['Obdĺžnik má protiľahlé strany rovnako dlhé.', 'pravda', 'Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.'],
    ['Tupý uhol je menší ako pravý uhol.', 'nepravda', 'Tupý uhol je väčší ako pravý, menší je ostrý uhol.'],
    ['Štvorec má všetky strany rovnako dlhé.', 'pravda', 'Áno, to je vlastnosť štvorca.']
  ];

  gen('r4-utvary', () => {
    const t = rnd(0, 3);
    if (t === 0) {
      const kind = pick(['ostrý', 'pravý', 'tupý']);
      const deg = kind === 'ostrý' ? rnd(20, 70) : kind === 'pravý' ? 90 : rnd(110, 160);
      const rot = Math.random() < 0.5;
      const pic = `<svg viewBox="0 0 260 150" width="220" role="img" aria-label="uhol"><g${rot ? ' transform="translate(260 0) scale(-1 1)"' : ''}>${angle(deg, 130, 130, 110)}</g></svg>`;
      const WHY = {
        'ostrý': T`Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.`,
        'pravý': T`Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.`,
        'tupý': T`Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.`
      };
      const choiceHints = {};
      Object.keys(WHY).filter((w) => w !== kind).forEach((w) => { choiceHints[T.s(w)] = WHY[w]; });
      return {
        type: 'choice', options: ['ostrý', 'pravý', 'tupý'].map(T.s), answer: T.s(kind), choiceHints,
        q: T`Aký je tento uhol?` + ` ${pic}`,
        solution: kind === 'pravý' ? T`Uhol má tvar rohu zošita, je pravý.`
          : kind === 'ostrý' ? T`Uhol je menší ako roh zošita, je ostrý.` : T`Uhol je väčší ako roh zošita, je tupý.`,
        hint: T`Porovnaj uhol s rohom zošita (pravým uhlom).`
      };
    }
    if (t === 1) {
      const name = pick(Object.keys(SHAPES));
      const right = name === 'štvorec' || name === 'obdĺžnik';
      const choiceHints = {};
      Object.keys(SHAPES).filter((w) => w !== name).forEach((w) => {
        choiceHints[T.s(w)] = name === 'trojuholník' || w === 'trojuholník' ? T`Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.`
          : w === 'obdĺžnik' && name === 'štvorec' ? T`Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.`
            : w === 'štvorec' && name === 'obdĺžnik' ? T`Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.`
              : w === 'všeobecný štvoruholník' && right ? T`Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.`
                : T`Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.`;
      });
      return {
        type: 'choice', options: shuffle(Object.keys(SHAPES)).map(T.s), answer: T.s(name), choiceHints,
        q: T`Ako sa volá tento útvar? Vyber najpresnejší názov.` + `
          <svg viewBox="0 0 180 140" width="180" role="img" aria-label="útvar">${SHAPES[name](90, 70)}</svg>`,
        solution: name === 'štvorec' ? T`Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.`
          : name === 'obdĺžnik' ? T`Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.`
            : name === 'trojuholník' ? T`Má 3 strany a 3 vrcholy – je to trojuholník.`
              : T`Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.`,
        hint: T`Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).`
      };
    }
    if (t === 2) {
      const [q, a, why, mis] = pick(ANGLE_FACTS);
      const ex = { answer: a, q: T.s(q), solution: T.s(why), hint: T`Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.` };
      if (mis) ex.mistakes = [{ value: mis[0], msg: T.s(mis[1]) }];
      return ex;
    }
    const [q, a, why] = pick(TF);
    return {
      type: 'choice', options: ['pravda', 'nepravda'].map(T.s), answer: T.s(a),
      q: T`Je toto tvrdenie pravdivé? „${q}“`, solution: T.s(why),
      hint: T`Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.`
    };
  });

  lesson({
    id: 'r4-obvod', order: 70, title: 'Obvod a obsah',
    summary: 'Obvod ako dĺžka okraja, obsah ako počet štvorčekov, ktoré útvar pokryjú.',
    theory: [
      `<p><strong>Obvod</strong> útvaru je dĺžka jeho okraja – súčet dĺžok všetkých strán. Obvod obdĺžnika so stranami
       $a$ a $b$ je $a + b + a + b$, teda $2\\cdot(a + b)$. Obvod štvorca so stranou $a$ je $4\\cdot a$.</p>`,
      `<p><strong>Obsah</strong> hovorí, koľko miesta útvar zaberá. Zistíme ho tak, že spočítame štvorčeky, ktoré ho pokryjú.
       Štvorček so stranou 1 cm má obsah 1 štvorcový centimeter ($1\\,\\text{cm}^2$).</p>`,
      { fig: 'r4-obvod-obsah', caption: 'Obdĺžnik 4 cm × 3 cm: obvod je dĺžka modrého okraja, obsah je počet štvorčekov vnútri.' },
      `<p>Pri obdĺžniku nemusíme štvorčeky počítať po jednom: v každom riadku je ich toľko, aká dlhá je strana,
       a riadkov je toľko, aká je druhá strana. Preto obsah $= a\\cdot b$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj obvod obdĺžnika so stranami 8 cm a 5 cm.',
        steps: ['$o = 8 + 5 + 8 + 5$.', '$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$.', '<strong>Obvod je $26\\,\\text{cm}$.</strong>'] },
      { task: 'Štvorec má obvod 36 cm. Aká dlhá je jeho strana?',
        steps: ['Štvorec má 4 rovnako dlhé strany, spolu 36 cm.', '$36 : 4 = 9$.', '<strong>Strana má $9\\,\\text{cm}$.</strong>'] }
    ]
  });

  gen('r4-obvod', () => {
    const t = rnd(0, 3);
    if (t === 0) {
      const a = rnd(3, 25), b = rnd(2, a - 1), u = pick(['cm', 'm', 'mm']);
      return {
        answer: 2 * (a + b),
        q: T`Vypočítaj obvod obdĺžnika so stranami $${a}\\,\\text{${u}}$ a $${b}\\,\\text{${u}}$. Výsledok zapíš v ${u}.`,
        solution: T`$o = 2\\cdot(${a} + ${b}) = 2\\cdot ${a + b} = ${2 * (a + b)}$, obvod je $${2 * (a + b)}\\,\\text{${u}}$.`,
        hint: T`Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.`,
        mistakes: [
          { value: a + b, msg: T`Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.` },
          ...(a * b !== 2 * (a + b) ? [{ value: a * b, msg: T`Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.` }] : [])
        ],
        steps: [
          { q: T`Koľko je $${a} + ${b}$ (dve susedné strany)?`, answer: a + b },
          { q: T`Obvod tvoria dve také dvojice strán: koľko je $2\\cdot ${a + b}$?`, answer: 2 * (a + b) }
        ]
      };
    }
    if (t === 1) {
      const a = rnd(3, 30), u = pick(['cm', 'm', 'dm']);
      if (Math.random() < 0.5) {
        return {
          answer: 4 * a,
          q: T`Vypočítaj obvod štvorca so stranou $${a}\\,\\text{${u}}$. Výsledok zapíš v ${u}.`,
          solution: T`$o = 4\\cdot ${a} = ${4 * a}$, obvod je $${4 * a}\\,\\text{${u}}$.`,
          hint: T`Štvorec má 4 rovnako dlhé strany.`,
          mistakes: [
            ...(a !== 4 ? [{ value: a * a, msg: T`Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.` }] : []),
            { value: 2 * a, msg: T`Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.` }
          ]
        };
      }
      return {
        answer: a,
        q: T`Štvorec má obvod $${4 * a}\\,\\text{${u}}$. Aká dlhá je jeho strana (v ${u})?`,
        solution: T`Obvod tvoria 4 rovnaké strany: $${4 * a} : 4 = ${a}$, strana má $${a}\\,\\text{${u}}$.`,
        hint: T`Obvod štvorca vydeľ štyrmi.`,
        mistakes: [{ value: 2 * a, msg: T`Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.` }]
      };
    }
    const a = rnd(2, 7), b = rnd(1, 4);
    const pic = gridRect(a, b, a + 2, b + 2);
    if (t === 2) {
      return {
        answer: a * b,
        q: T`Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) ${pic}`,
        solution: T`Obdĺžnik má ${b} ${pl(b, ['riadok', 'riadky', 'riadkov'])} po ${a} štvorčekoch: $${b}\\cdot ${a} = ${a * b}$. Obsah je $${a * b}\\,\\text{cm}^2$.`,
        hint: T`Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.`,
        mistakes: [
          ...(a + b !== a * b ? [{ value: a + b, msg: T`Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.` }] : []),
          ...(2 * (a + b) !== a * b ? [{ value: 2 * (a + b), msg: T`To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.` }] : [])
        ],
        steps: b > 1 ? [
          { q: T`Koľko štvorčekov je v jednom riadku?`, answer: a },
          { q: T`Koľko je riadkov?`, answer: b },
          { q: T`Koľko je $${b}\\cdot ${a}$?`, answer: a * b }
        ] : undefined
      };
    }
    return {
      // typické chyby: obvod len z dvoch strán; obvod ako počet štvorčekov pri okraji
      mistakes: [
        { value: [a + b, a * b], msg: T`Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.` },
        ...(a > 2 && b > 2 ? [{ value: [2 * (a + b) - 4, a * b], msg: T`Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.` }] : [])
      ],
      steps: [
        { q: T`Aká dlhá je vodorovná strana obdĺžnika (v cm)?`, answer: a },
        { q: T`Aká dlhá je zvislá strana obdĺžnika (v cm)?`, answer: b },
        { q: T`Obvod: koľko je $2\\cdot(${a} + ${b})$?`, answer: 2 * (a + b) },
        { q: T`Obsah: koľko je $${a}\\cdot ${b}$?`, answer: a * b },
        { q: T`Zapíš obvod a obsah v tvare „obvod; obsah“.`, type: 'tuple', placeholder: T`obvod; obsah`, answer: [2 * (a + b), a * b] }
      ],
      type: 'tuple', answer: [2 * (a + b), a * b], placeholder: T`obvod; obsah`,
      q: T`Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. ${pic}`,
      solution: T`Strany sú ${a} cm a ${b} cm. Obvod: $2\\cdot(${a} + ${b}) = ${2 * (a + b)}\\,\\text{cm}$. Obsah: $${a}\\cdot ${b} = ${a * b}\\,\\text{cm}^2$.`,
      hint: T`Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.`
    };
  });

  lesson({
    id: 'r4-jednotky', order: 80, title: 'Premeny jednotiek a práca s údajmi',
    summary: 'Jednotky dĺžky, hmotnosti, objemu a času; čítanie údajov z tabuľky a diagramu.',
    theory: [
      `<p><strong>Dĺžka:</strong> $1\\,\\text{km} = 1\\,000\\,\\text{m}$, $1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$,
       $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{cm} = 10\\,\\text{mm}$.<br>
       <strong>Hmotnosť:</strong> $1\\,\\text{t} = 1\\,000\\,\\text{kg}$, $1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$.<br>
       <strong>Objem:</strong> $1\\,\\text{hl} = 100\\,\\text{l}$, $1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$.<br>
       <strong>Čas:</strong> $1\\,\\text{h} = 60\\,\\text{min}$, $1\\,\\text{min} = 60\\,\\text{s}$, 1 deň = 24 h.</p>`,
      { fig: 'r4-jednotky', caption: 'Keď meníme väčšiu jednotku na menšiu, číslo bude väčšie – násobíme. Naopak delíme.' },
      `<p><strong>Údaje</strong> často čítame z tabuľky alebo zo stĺpcového diagramu. Výška stĺpca ukazuje hodnotu –
       odčítame ju na zvislej osi. Z údajov potom vieme porovnávať (o koľko viac) aj sčítavať (koľko spolu).</p>`
    ],
    examples: [
      { task: 'Koľko centimetrov je 4 m 35 cm?',
        steps: ['$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$.', '$400 + 35 = 435$.', '<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>'] },
      { task: 'Koľko kilogramov je $6\\,000\\,\\text{g}$?',
        steps: ['$1\\,\\text{kg} = 1\\,000\\,\\text{g}$, meníme na väčšiu jednotku, preto delíme.', '$6\\,000 : 1\\,000 = 6$.', '<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>'] }
    ]
  });

  // [väčšia jednotka, menšia jednotka, koľko menších je v jednej väčšej]
  const CONV = [['km', 'm', 1000], ['m', 'cm', 100], ['m', 'dm', 10], ['dm', 'cm', 10], ['cm', 'mm', 10], ['m', 'mm', 1000],
    ['t', 'kg', 1000], ['kg', 'g', 1000], ['kg', 'dag', 100], ['dag', 'g', 10],
    ['hl', 'l', 100], ['l', 'dl', 10], ['l', 'ml', 1000], ['h', 'min', 60], ['min', 's', 60]];
  const FRUIT = ['jablká', 'hrušky', 'banány', 'slivky', 'jahody', 'čerešne'];
  const DETI = ['dieťa', 'deti', 'detí'];

  gen('r4-jednotky', () => {
    const t = rnd(0, 3);
    if (t <= 1) {
      const [big, small, f] = pick(CONV);
      const n = f >= 100 ? rnd(2, 9) : rnd(2, 40);
      const tm = big === 'h' || big === 'min';
      if (t === 0) {
        return {
          answer: n * f,
          q: T`Premeň: $${n}\\,\\text{${big}} = \\square\\,\\text{${small}}$`,
          solution: T`$1\\,\\text{${big}} = ${M(f)}\\,\\text{${small}}$, preto $${n}\\cdot ${M(f)} = ${M(n * f)}$. Teda $${n}\\,\\text{${big}} = ${M(n * f)}\\,\\text{${small}}$.`,
          hint: tm ? T`Hodina má 60 minút a minúta 60 sekúnd.` : T`Meníš na menšiu jednotku – číslo sa zväčší, násob.`,
          // pri čase typicky počítanie so 100 namiesto 60
          mistakes: tm ? [{ value: n * 100, msg: T`Počítal si so 100. Pri čase platí $1\\,\\text{${big}} = 60\\,\\text{${small}}$.` }] : []
        };
      }
      return {
        answer: n,
        q: T`Premeň: $${M(n * f)}\\,\\text{${small}} = \\square\\,\\text{${big}}$`,
        solution: T`$1\\,\\text{${big}} = ${M(f)}\\,\\text{${small}}$, preto $${M(n * f)} : ${M(f)} = ${n}$. Teda $${M(n * f)}\\,\\text{${small}} = ${n}\\,\\text{${big}}$.`,
        hint: tm ? T`Zisti, koľkokrát sa 60 zmestí do daného čísla.` : T`Meníš na väčšiu jednotku – číslo sa zmenší, deľ.`
      };
    }
    if (t === 2) {
      const [big, small, f] = pick(CONV.filter((c) => c[2] >= 60));
      const a = rnd(1, 9), b = rnd(1, f - 1), res = a * f + b;
      return {
        answer: res,
        q: T`Premeň: $${a}\\,\\text{${big}}\\ ${b}\\,\\text{${small}} = \\square\\,\\text{${small}}$`,
        solution: T`$${a}\\,\\text{${big}} = ${M(a * f)}\\,\\text{${small}}$, pripočítame $${b}\\,\\text{${small}}$: $${M(a * f)} + ${b} = ${M(res)}$.`,
        hint: T`Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.`,
        mistakes: [
          { value: a + b, msg: T`Čísla nesčítavaj hneď. Najprv premeň $${a}\\,\\text{${big}}$ na menšiu jednotku $\\text{${small}}$.` },
          { value: a * f, msg: T`Zabudol si pripočítať ešte $${b}\\,\\text{${small}}$.` },
          ...(f === 60 ? [{ value: a * 100 + b, msg: T`Počítal si so 100. Pri čase platí $1\\,\\text{${big}} = 60\\,\\text{${small}}$.` }] : [])
        ],
        steps: [
          { q: T`Najprv premeň väčšiu jednotku: $${a}\\,\\text{${big}} = \\square\\,\\text{${small}}$`, answer: a * f },
          { q: T`Pripočítaj zvyšok: koľko je $${M(a * f)} + ${b}$?`, answer: res }
        ]
      };
    }
    // stĺpcový diagram
    const cats = shuffle(FRUIT).slice(0, 4);
    const vals = shuffle([2, 4, 6, 8, 10, 12, 14]).slice(0, 4);
    const H = 10;
    let pic = '<svg viewBox="0 0 320 210" width="300" role="img" aria-label="Stĺpcový diagram hlasovania">';
    for (let y = 0; y <= 14; y += 2) {
      pic += `<line class="${y ? 'f-cell' : 'f-line'}" x1="40" y1="${170 - y * H}" x2="310" y2="${170 - y * H}"/>
        <text class="f-small" x="32" y="${174 - y * H}" text-anchor="end">${y}</text>`;
    }
    cats.forEach((c, i) => {
      pic += `<rect class="f-fill${(i % 3) ? i % 3 + 1 : ''} f-outline${(i % 3) ? i % 3 + 1 : ''}" x="${55 + i * 64}" y="${170 - vals[i] * H}" width="40" height="${vals[i] * H}"/>
        <text class="f-small" x="${75 + i * 64}" y="190" text-anchor="middle">${c}</text>`;
    });
    pic += '</svg>';
    const intro = T`Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.` + ` ${pic}`;
    const k = rnd(0, 2);
    if (k === 0) {
      const i = rnd(0, 3);
      return {
        answer: vals[i], q: T`${intro} Koľko detí hlasovalo za ${cats[i]}?`,
        solution: T`Stĺpec „${cats[i]}“ siaha po čiaru ${vals[i]}. Hlasovalo ${vals[i]} ${pl(vals[i], DETI)}.`,
        hint: T`Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.`
      };
    }
    if (k === 1) {
      const order = [0, 1, 2, 3].sort((x, y) => vals[y] - vals[x]);
      const hi = order[0], lo = order[3];
      const d = vals[hi] - vals[lo];
      return {
        answer: d, q: T`${intro} O koľko viac detí hlasovalo za ${cats[hi]} ako za ${cats[lo]}?`,
        solution: T`Za ${cats[hi]}: ${vals[hi]}, za ${cats[lo]}: ${vals[lo]}. $${vals[hi]} - ${vals[lo]} = ${d}$.`,
        hint: T`Prečítaj obe hodnoty a odčítaj menšiu od väčšej.`,
        mistakes: [{ value: vals[hi] + vals[lo], msg: T`Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.` }],
        steps: [
          { q: T`Koľko detí hlasovalo za ${cats[hi]}?`, answer: vals[hi] },
          { q: T`Koľko detí hlasovalo za ${cats[lo]}?`, answer: vals[lo] },
          { q: T`Koľko je $${vals[hi]} - ${vals[lo]}$?`, answer: d }
        ]
      };
    }
    const s = vals.reduce((x, y) => x + y, 0);
    let run = 0;
    return {
      answer: s, q: T`${intro} Koľko detí hlasovalo spolu?`,
      solution: T`$${vals.join(' + ')} = ${s}$. Hlasovalo ${s} ${pl(s, DETI)}.`,
      hint: T`Prečítaj hodnotu každého stĺpca a všetky sčítaj.`,
      // typická chyba: počet stĺpcov namiesto počtu hlasov
      mistakes: [{ value: 4, msg: T`To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.` }],
      steps: cats.map((c, i) => {
        run += vals[i];
        return i === 0 ? { q: T`Koľko detí hlasovalo za ${c}?`, answer: vals[0] } : { q: T`Pripočítaj hlasy za ${c}: koľko je spolu teraz?`, answer: run };
      })
    };
  });
})();
