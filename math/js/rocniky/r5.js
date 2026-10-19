/* 5. ročník: prirodzené čísla, zaokrúhľovanie, rímske číslice, počtové operácie, násobky a delitele,
   prvé zlomky, geometrické útvary, obvod, jednotky a slovné úlohy. */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const { n1 } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r5' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 jablko, 2 jablká, 5 jabĺk.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  // Oddelenie tisícov: M pre KaTeX, T pre bežný text (nezalomiteľná medzera).
  const M = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
  const T = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
  const EUR = ['euro', 'eurá', 'eur'];
  const ROKY = ['rok', 'roky', 'rokov'];
  // časti celku: 1/n slovom (nominatív, akuzatív)
  // časti celku: 1/n slovom (nominatív, akuzatív, genitív)
  const PART = { 2: ['polovica', 'polovicu', 'polovice'], 3: ['tretina', 'tretinu', 'tretiny'], 4: ['štvrtina', 'štvrtinu', 'štvrtiny'],
    5: ['pätina', 'pätinu', 'pätiny'], 6: ['šestina', 'šestinu', 'šestiny'], 8: ['osmina', 'osminu', 'osminy'],
    10: ['desatina', 'desatinu', 'desatiny'] };
  const cap = (s) => s[0].toUpperCase() + s.slice(1);
  const frac = (k, n) => `\\frac{${k}}{${n}}`;

  /* ---------- rímske číslice ---------- */

  const ROMAN = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  const toRoman = (n) => {
    let s = '';
    for (const [v, r] of ROMAN) while (n >= v) { s += r; n -= v; }
    return s;
  };
  // rozklad po rádoch: 1994 → [[1000,'M'],[900,'CM'],[90,'XC'],[4,'IV']]
  const romanParts = (n) => {
    const out = [];
    for (const p of [1000, 100, 10, 1]) {
      const v = Math.floor(n / p) % 10 * p;
      if (p === 1000) { const t = Math.floor(n / 1000) * 1000; if (t) out.push([t, toRoman(t)]); continue; }
      if (v) out.push([v, toRoman(v)]);
    }
    return out;
  };

  /* ---------- kreslenie ---------- */

  // koláč rozdelený na n dielov, k vyfarbených
  const pie = (cx, cy, r, n, k) => {
    let s = '';
    for (let i = 0; i < n; i++) {
      const a1 = -Math.PI / 2 + 2 * Math.PI * i / n, a2 = -Math.PI / 2 + 2 * Math.PI * (i + 1) / n;
      s += `<path class="${i < k ? 'f-fill f-outline' : 'f-cell'}" d="M${cx} ${cy} L${n1(cx + r * Math.cos(a1))} ${n1(cy + r * Math.sin(a1))}
        A${r} ${r} 0 0 1 ${n1(cx + r * Math.cos(a2))} ${n1(cy + r * Math.sin(a2))} Z"/>`;
    }
    return s + `<circle class="f-line" cx="${cx}" cy="${cy}" r="${r}"/>`;
  };
  // pás rozdelený na n dielov, k vyfarbených
  const bar = (x, y, w, h, n, k, cls = 'f-fill2 f-outline2') => {
    let s = '';
    for (let i = 0; i < n; i++) s += `<rect class="${i < k ? cls : 'f-cell'}" x="${n1(x + i * w / n)}" y="${y}" width="${n1(w / n)}" height="${h}"/>`;
    return s + `<rect class="f-line" x="${x}" y="${y}" width="${w}" height="${h}"/>`;
  };

  const dot = (x, y, lab, dx = 0) => `<circle class="f-solid" cx="${x}" cy="${y}" r="4"/>
    <text class="f-math" x="${x + dx}" y="${y - 10}" text-anchor="middle">${lab}</text>`;
  const LINES = {
    'priamka': (y) => `<line class="f-dash" x1="10" y1="${y}" x2="50" y2="${y}"/><line class="f-line" x1="50" y1="${y}" x2="230" y2="${y}"/>
      <line class="f-dash" x1="230" y1="${y}" x2="270" y2="${y}"/>${dot(90, y, 'A')}${dot(190, y, 'B')}`,
    'polpriamka': (y) => `<line class="f-line" x1="60" y1="${y}" x2="230" y2="${y}"/>
      <line class="f-dash" x1="230" y1="${y}" x2="270" y2="${y}"/>${dot(60, y, 'A')}${dot(170, y, 'B')}`,
    'úsečka': (y) => `<line class="f-line" x1="70" y1="${y}" x2="210" y2="${y}"/>${dot(70, y, 'A')}${dot(210, y, 'B')}`
  };

  // rebrík jednotiek: [jednotka, prevod k ďalšej]
  const ladder = (y, items) => {
    let s = '';
    items.forEach(([u, k], i) => {
      const x = 10 + i * 110;
      s += `<rect class="f-fill f-outline" x="${x}" y="${y}" width="56" height="32" rx="6"/>
        <text class="f-text" x="${x + 28}" y="${y + 22}" text-anchor="middle" font-weight="700">${u}</text>`;
      if (k) {
        s += `<line class="f-thin" x1="${x + 60}" y1="${y + 16}" x2="${x + 104}" y2="${y + 16}"/>
          <path class="f-solid" d="M${x + 106} ${y + 16} l-8 -4 v8 z"/>
          <text class="f-small c-accent" x="${x + 83}" y="${y + 9}" text-anchor="middle">· ${k}</text>`;
      }
    });
    return s;
  };

  /* ---------- obrázky ---------- */

  fig('r5-triedy', {
    draw: () => {
      const cls = ['milióny', 'tisíce', 'jednotky'];
      const sub = ['S', 'D', 'J'];
      const digs = ['', '', '3', '0', '4', '2', '7', '0', '5'];
      let s = '<svg viewBox="0 0 470 150" role="img" aria-label="Triedy a rády čísla 3 042 705">';
      cls.forEach((c, t) => {
        const x = 10 + t * 150;
        s += `<rect class="f-fill${t === 1 ? '2' : t === 2 ? '3' : ''}" x="${x}" y="10" width="150" height="28"/>
          <rect class="f-cell" x="${x}" y="10" width="150" height="28"/>
          <text class="f-text" x="${x + 75}" y="30" text-anchor="middle">${c}</text>`;
        sub.forEach((sb, j) => {
          const xx = x + j * 50;
          s += `<rect class="f-cell" x="${xx}" y="38" width="50" height="24"/><rect class="f-cell" x="${xx}" y="62" width="50" height="40"/>
            <text class="f-small" x="${xx + 25}" y="55" text-anchor="middle">${sb}</text>
            <text class="f-text" x="${xx + 25}" y="89" text-anchor="middle" font-size="22">${digs[t * 3 + j]}</text>`;
        });
      });
      return s + '<text class="f-small" x="235" y="126" text-anchor="middle">S = stovky, D = desiatky, J = jednotky danej triedy</text>' +
        '<text class="f-text" x="235" y="145" text-anchor="middle">3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť</text></svg>';
    }
  });

  fig('r5-zaokruhlovanie', {
    controls: [{ id: 'n', label: 'Číslo', min: 3400, max: 3500, step: 1, value: 3467 }],
    draw: (v) => {
      const n = Math.round(v.n);
      const X = (k) => n1(20 + (k - 3400) * 4);
      const r10 = Math.round(n / 10) * 10, r100 = Math.round(n / 100) * 100;
      let s = `<svg viewBox="0 0 440 110" role="img" aria-label="Zaokrúhľovanie na číselnej osi">
        <line class="f-line" x1="14" y1="60" x2="426" y2="60"/>`;
      for (let k = 3400; k <= 3500; k += 10) {
        const big = k % 50 === 0;
        s += `<line class="${big ? 'f-line' : 'f-thin'}" x1="${X(k)}" y1="${big ? 50 : 54}" x2="${X(k)}" y2="${big ? 70 : 66}"/>`;
        if (big) s += `<text class="f-small" x="${X(k)}" y="88" text-anchor="middle">${T(k)}</text>`;
      }
      s += `<line class="f-dash" x1="${X(3450)}" y1="20" x2="${X(3450)}" y2="76"/>
        <circle class="f-dot f-dot-ok" cx="${X(r10)}" cy="60" r="5"/>
        <path class="f-accent" d="M${X(n)} 38 Q${n1((Number(X(n)) + Number(X(r100))) / 2)} 14 ${X(r100)} 38"/>
        <circle class="f-dot" cx="${X(n)}" cy="60" r="6"/>
        <text class="f-text" x="${X(n)}" y="104" text-anchor="middle">${T(n)}</text></svg>`;
      return {
        svg: s,
        readout: `<span class="c-ok">${T(n)} ≐ ${T(r10)} (na desiatky)</span> · <span class="c-accent">${T(n)} ≐ ${T(r100)} (na stovky)</span>`
      };
    }
  });

  fig('r5-rimske', {
    draw: () => {
      const pairs = [['IV', 4], ['IX', 9], ['XL', 40], ['XC', 90], ['CD', 400], ['CM', 900]];
      let s = '<svg viewBox="0 0 450 96" role="img" aria-label="Rímske číslice s odčítaním">';
      pairs.forEach(([r, v], i) => {
        const x = 10 + i * 73;
        s += `<rect class="f-fill2 f-outline2" x="${x}" y="10" width="64" height="40" rx="6"/>
          <text class="f-text" x="${x + 32}" y="37" text-anchor="middle" font-size="20" font-weight="700">${r}</text>
          <text class="f-text" x="${x + 32}" y="74" text-anchor="middle">${v}</text>`;
      });
      return s + '<text class="f-small" x="225" y="92" text-anchor="middle">menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M</text></svg>';
    }
  });

  fig('r5-poradie', {
    draw: () => {
      const box = (x, t1, t2, cls) => `<rect class="${cls}" x="${x}" y="14" width="120" height="58" rx="8"/>
        <text class="f-text" x="${x + 60}" y="40" text-anchor="middle" font-weight="700">${t1}</text>
        <text class="f-small" x="${x + 60}" y="60" text-anchor="middle">${t2}</text>`;
      const arrow = (x) => `<line class="f-thin" x1="${x}" y1="43" x2="${x + 28}" y2="43"/><path class="f-solid" d="M${x + 32} 43 l-8 -4 v8 z"/>`;
      return `<svg viewBox="0 0 460 86" role="img" aria-label="Poradie operácií">
        ${box(10, '1. ( )', 'zátvorky', 'f-fill f-outline')}${arrow(134)}
        ${box(170, '2. · a :', 'zľava doprava', 'f-fill2 f-outline2')}${arrow(294)}
        ${box(330, '3. + a −', 'zľava doprava', 'f-fill3 f-outline3')}</svg>`;
    }
  });

  fig('r5-delitele', {
    draw: () => {
      const grid = (x0, cols, rows) => {
        let s = '';
        for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) s += `<circle class="f-dot" cx="${x0 + i * 13}" cy="${22 + j * 13}" r="5"/>`;
        return s;
      };
      return `<svg viewBox="0 0 470 140" role="img" aria-label="Dvanásť bodiek usporiadaných do obdĺžnikov">
        ${grid(14, 12, 1)}<text class="f-text" x="85" y="70" text-anchor="middle">1 · 12</text>
        ${grid(200, 6, 2)}<text class="f-text" x="232" y="70" text-anchor="middle">2 · 6</text>
        ${grid(330, 4, 3)}<text class="f-text" x="350" y="80" text-anchor="middle">3 · 4</text>
        <text class="f-text c-accent" x="235" y="122" text-anchor="middle">delitele čísla 12: 1, 2, 3, 4, 6, 12</text></svg>`;
    }
  });

  fig('r5-zlomky', {
    draw: () => `<svg viewBox="0 0 480 150" role="img" aria-label="Zlomky na koláčoch a páse">
      ${pie(60, 60, 45, 2, 1)}${pie(170, 60, 45, 4, 1)}${pie(280, 60, 45, 8, 3)}
      ${bar(350, 42, 120, 36, 5, 2)}
      <text class="f-text" x="60" y="134" text-anchor="middle">1/2</text>
      <text class="f-text" x="170" y="134" text-anchor="middle">1/4</text>
      <text class="f-text" x="280" y="134" text-anchor="middle">3/8</text>
      <text class="f-text" x="410" y="134" text-anchor="middle">2/5</text></svg>`
  });

  fig('r5-utvary', {
    draw: () => `<svg viewBox="0 0 560 210" role="img" aria-label="Priamka, polpriamka, úsečka a kružnica">
      <g transform="translate(0 0)">${LINES['priamka'](40)}</g><text class="f-small" x="140" y="66" text-anchor="middle">priamka AB</text>
      <g transform="translate(0 70)">${LINES['polpriamka'](40)}</g><text class="f-small" x="140" y="136" text-anchor="middle">polpriamka AB</text>
      <g transform="translate(0 140)">${LINES['úsečka'](40)}</g><text class="f-small" x="140" y="206" text-anchor="middle">úsečka AB</text>
      <circle class="f-fill f-outline" cx="430" cy="100" r="70"/>
      <line class="f-accent" x1="430" y1="100" x2="500" y2="100"/>
      <line class="f-ok" x1="360" y1="100" x2="430" y2="100"/><circle class="f-solid" cx="430" cy="100" r="4"/>
      <text class="f-math" x="430" y="122" text-anchor="middle">S</text>
      <text class="f-text c-accent" x="466" y="92" text-anchor="middle">r</text>
      <text class="f-small" x="430" y="190" text-anchor="middle">priemer d = 2 · r</text></svg>`
  });

  fig('r5-obvod', {
    draw: () => `<svg viewBox="0 0 560 170" role="img" aria-label="Obvod štvorca, obdĺžnika a trojuholníka">
      <rect class="f-fill f-outline" x="20" y="30" width="90" height="90"/>
      <text class="f-math" x="65" y="140" text-anchor="middle">a</text><text class="f-math" x="118" y="80">a</text>
      <text class="f-text" x="65" y="164" text-anchor="middle">o = 4 · a</text>
      <rect class="f-fill2 f-outline2" x="160" y="45" width="150" height="75"/>
      <text class="f-math" x="235" y="140" text-anchor="middle">a</text><text class="f-math" x="318" y="88">b</text>
      <text class="f-text" x="235" y="164" text-anchor="middle">o = 2 · (a + b)</text>
      <polygon class="f-fill3 f-outline3" points="370,120 540,120 420,30"/>
      <text class="f-math" x="455" y="140" text-anchor="middle">a</text><text class="f-math" x="490" y="70">b</text>
      <text class="f-math" x="382" y="72">c</text>
      <text class="f-text" x="455" y="164" text-anchor="middle">o = a + b + c</text></svg>`
  });

  fig('r5-jednotky', {
    draw: () => `<svg viewBox="0 0 560 240" role="img" aria-label="Prevody jednotiek dĺžky, hmotnosti, objemu a času">
      ${ladder(10, [['km', '1000'], ['m', '10'], ['dm', '10'], ['cm', '10'], ['mm']])}
      ${ladder(60, [['t', '1000'], ['kg', '100'], ['dag', '10'], ['g']])}
      ${ladder(110, [['hl', '100'], ['l', '10'], ['dl', '100'], ['ml']])}
      ${ladder(160, [['deň', '24'], ['h', '60'], ['min', '60'], ['s']])}
      <text class="f-small" x="10" y="226">Na menšiu jednotku násobíme, na väčšiu jednotku delíme.</text></svg>`
  });

  fig('r5-model', {
    draw: () => `<svg viewBox="0 0 470 150" role="img" aria-label="Úsečkový model súčtu a rozdielu">
      <text class="f-text" x="10" y="42">mladší</text>
      <rect class="f-fill f-outline" x="80" y="22" width="160" height="30"/>
      <text class="f-text" x="10" y="92">starší</text>
      <rect class="f-fill f-outline" x="80" y="72" width="160" height="30"/>
      <rect class="f-fill2 f-outline2" x="240" y="72" width="50" height="30"/>
      <text class="f-small c-ok" x="265" y="92" text-anchor="middle">8 €</text>
      <path class="f-thin" d="M300 22 q10 0 10 10 v28 q0 6 6 7 q-6 1 -6 7 v28 q0 10 -10 10"/>
      <text class="f-text c-accent" x="324" y="72">spolu 50 €</text>
      <text class="f-small" x="10" y="135">Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.</text></svg>`
  });

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'r5-prirodzene', order: 10, title: 'Prirodzené čísla a ich vlastnosti',
    summary: 'Triedy a rády veľkých čísel, porovnávanie, párne a nepárne čísla.',
    theory: [
      `<p><strong>Prirodzené čísla</strong> sú $1, 2, 3, 4, \\dots$ – čísla, ktorými počítame predmety. Najmenšie prirodzené číslo
       je 1, najväčšie neexistuje: ku každému číslu vieme pripočítať 1 a dostaneme jeho <strong>nasledovníka</strong>.
       Číslo o 1 menšie je <strong>predchodca</strong>.</p>`,
      `<p>Číslice veľkého čísla delíme sprava do <strong>tried</strong> po troch: jednotky, tisíce, milióny.
       V každej triede sú stovky, desiatky a jednotky. Hodnota číslice závisí od miesta, kde stojí.</p>`,
      { fig: 'r5-triedy', caption: 'V čísle $3\\,042\\,705$ má číslica 4 hodnotu $40\\,000$, lebo stojí na mieste desaťtisícov.' },
      `<p><strong>Párne čísla</strong> sú deliteľné dvomi a končia číslicou 0, 2, 4, 6 alebo 8. Ostatné čísla sú
       <strong>nepárne</strong> – končia číslicou 1, 3, 5, 7 alebo 9. O párnosti rozhoduje iba posledná číslica.</p>`
    ],
    examples: [
      { task: 'Z číslic 5, 0, 8, 2 (každú použi raz) zostav najväčšie a najmenšie štvorciferné číslo.',
        steps: ['Najväčšie: číslice zoradíme od najväčšej: $8\\,520$.', 'Najmenšie: zoradíme od najmenšej, ale na začiatku nesmie byť 0: $2\\,058$.'] },
      { task: 'Aký je nasledovník a predchodca čísla $499\\,999$?',
        steps: ['Nasledovník: $499\\,999 + 1 = 500\\,000$.', 'Predchodca: $499\\,999 - 1 = 499\\,998$.'] }
    ]
  });

  const PLACE_NAMES = ['jednotiek', 'desiatok', 'stoviek', 'tisícov', 'desaťtisícov', 'stotisícov', 'miliónov'];

  gen('r5-prirodzene', () => {
    const t = rnd(0, 4);
    if (t === 0) {
      let n, ds, i;
      do {
        n = rnd(100000, 9999999);
        ds = String(n).split('').reverse().map(Number);
        i = rnd(1, ds.length - 1);
      } while (ds[i] === 0 || ds.filter((d) => d === ds[i]).length > 1);
      const val = ds[i] * 10 ** i;
      // číslica počítaná zľava namiesto sprava (posun o 1 – 3 rády zachytí všeobecná kontrola)
      const j = ds.length - 1 - i;
      return {
        answer: val,
        q: `Akú hodnotu má číslica ${ds[i]} v čísle $${M(n)}$?`,
        solution: `Číslica ${ds[i]} stojí na mieste ${PLACE_NAMES[i]}, preto má hodnotu $${ds[i]}\\cdot ${M(10 ** i)} = ${M(val)}$.`,
        hint: 'Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).',
        mistakes: [
          ...(i > 3 ? [{ value: ds[i], msg: 'Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.' }] : []),
          ...(Math.abs(j - i) > 3 ? [{ value: ds[i] * 10 ** j, msg: 'Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…' }] : [])
        ]
      };
    }
    if (t === 1) {
      const digs = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 4);
      const big = Math.random() < 0.5;
      const desc = [...digs].sort((a, b) => b - a);
      let asc = [...digs].sort((a, b) => a - b);
      if (asc[0] === 0) asc = [asc[1], 0, ...asc.slice(2)];
      const res = Number((big ? desc : asc).join(''));
      return {
        answer: res,
        q: `Z číslic ${digs.join(', ')} zostav ${big ? 'najväčšie' : 'najmenšie'} štvorciferné číslo. Každú číslicu použi práve raz.`,
        solution: big ? `Číslice zoradíme od najväčšej po najmenšiu: $${M(res)}$.`
          : `Číslice zoradíme od najmenšej${digs.includes(0) ? ', ale 0 nemôže byť na začiatku, preto ide na druhé miesto' : ''}: $${M(res)}$.`,
        hint: big ? 'Najväčšia číslica patrí na miesto tisícov.' : 'Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.',
        mistakes: [
          ...(!big && digs.includes(0) ? [{ value: Number([...digs].sort((a, b) => a - b).join('')), msg: 'Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.' }] : []),
          { value: Number((big ? asc : desc).join('')), msg: `Hľadáš ${big ? 'najväčšie' : 'najmenšie'} číslo, ty si zostavil ${big ? 'najmenšie' : 'najväčšie'}.` }
        ]
      };
    }
    if (t === 2) {
      // štyri rôzne päťciferné čísla z tých istých piatich číslic
      const base = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 5);
      const set = new Set();
      while (set.size < 4) {
        const x = Number(shuffle(base).join(''));
        if (x >= 10000) set.add(x);
      }
      const uniq = [...set];
      const max = Math.max(...uniq);
      const want = Math.random() < 0.5;
      const ans = want ? max : Math.min(...uniq);
      return {
        type: 'choice', options: uniq.map(T), answer: T(ans),
        q: `Ktoré z čísel je ${want ? 'najväčšie' : 'najmenšie'}?`,
        solution: `Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. ${cap(want ? 'najväčšie' : 'najmenšie')} je $${M(ans)}$.`,
        hint: 'Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.'
      };
    }
    if (t === 3) {
      const n = rnd(1000, 999999), even = n % 2 === 0;
      return {
        type: 'choice', options: ['párne', 'nepárne'], answer: even ? 'párne' : 'nepárne',
        q: `Je číslo $${M(n)}$ párne alebo nepárne?`,
        solution: `Posledná číslica je ${n % 10}, preto je číslo ${even ? 'párne' : 'nepárne'}.`,
        hint: 'Pozri sa iba na poslednú číslicu.'
      };
    }
    const p = pick([1000, 10000, 100000]);
    const n = Math.random() < 0.6 ? p * rnd(2, 9) - pick([0, 1]) : rnd(10000, 999999);
    const next = Math.random() < 0.5;
    return {
      answer: next ? n + 1 : n - 1,
      q: `Napíš ${next ? 'nasledovníka' : 'predchodcu'} čísla $${M(n)}$.`,
      solution: `${next ? 'Nasledovník' : 'Predchodca'} je o 1 ${next ? 'väčší' : 'menší'}: $${M(n)} ${next ? '+' : '-'} 1 = ${M(next ? n + 1 : n - 1)}$.`,
      hint: next ? 'Nasledovník je číslo o 1 väčšie.' : 'Predchodca je číslo o 1 menšie.',
      mistakes: [{ value: next ? n - 1 : n + 1,
        msg: `Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš ${next ? 'nasledovníka' : 'predchodcu'}.` }]
    };
  });

  lesson({
    id: 'r5-zaokruhlovanie', order: 20, title: 'Zaokrúhľovanie čísel',
    summary: 'Zaokrúhľovanie na desiatky, stovky a tisíce, odhad výsledku.',
    theory: [
      `<p>Pri <strong>zaokrúhľovaní</strong> nahradíme číslo najbližším „okrúhlym“ číslom. Zapisujeme znakom $\\doteq$
       (čítame „približne sa rovná“): $3\\,467 \\doteq 3\\,470$ (na desiatky).</p>`,
      `<p><strong>Pravidlo:</strong> pozrieme sa na číslicu <em>hneď vpravo</em> od rádu, na ktorý zaokrúhľujeme.
       Ak je 0, 1, 2, 3 alebo 4, zaokrúhlime <strong>nadol</strong>. Ak je 5, 6, 7, 8 alebo 9, zaokrúhlime <strong>nahor</strong>.
       Číslice vpravo nahradíme nulami.</p>`,
      { fig: 'r5-zaokruhlovanie', caption: 'Posúvaj číslo a sleduj, ku ktorej desiatke (zelená bodka) a ku ktorej stovke (oblúk) má najbližšie.' },
      `<p><strong>Odhad:</strong> pred presným výpočtom môžeme čísla zaokrúhliť a výsledok odhadnúť.
       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$. Odhad nám pomôže odhaliť chybu vo výpočte.</p>`
    ],
    examples: [
      { task: 'Zaokrúhli číslo $72\\,649$ na stovky.',
        steps: ['Na mieste stoviek je 6, hneď vpravo je 4.', '4 je menej ako 5, zaokrúhľujeme nadol: stovky ostanú 6.', '<strong>$72\\,649 \\doteq 72\\,600$</strong>'] },
      { task: 'Zaokrúhli číslo $5\\,962$ na desiatky.',
        steps: ['Na mieste desiatok je 6, vpravo je 2 – zaokrúhľujeme nadol.', '<strong>$5\\,962 \\doteq 5\\,960$</strong>', 'Na stovky by to bolo $6\\,000$, lebo za stovkami je 6.'] }
    ]
  });

  const RND_PLACE = [[10, 'desiatky', 'desiatok'], [100, 'stovky', 'stoviek'], [1000, 'tisíce', 'tisícov'], [10000, 'desaťtisíce', 'desaťtisícov']];
  const roundTo = (n, p) => Math.round(n / p) * p;

  gen('r5-zaokruhlovanie', () => {
    const t = rnd(0, 3);
    if (t <= 1) {
      const [p, name, gen2] = pick(RND_PLACE);
      let n = rnd(p * 10, Math.min(p * 1000, 1000000) - 1);
      if (Math.random() < 0.2) n = Math.floor(n / p) * p + p / 2; // presne v polovici – pravidlo „5 nahor“
      if (n % p === 0) n += rnd(1, p - 1);
      const r = roundTo(n, p), next = Math.floor(n / (p / 10)) % 10;
      const down = Math.floor(n / p) * p;
      const mistakes = [];
      if (next >= 5) mistakes.push({ value: down, msg: `Číslica vpravo od rádu ${gen2} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.` });
      else mistakes.push({ value: down + p, msg: `Číslica vpravo od rádu ${gen2} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.` });
      for (const q of [p / 10, p * 10]) {
        const w = roundTo(n, q);
        if (q >= 10 && w !== r && w !== n && !mistakes.some((m) => m.value === w)) {
          mistakes.push({ value: w, msg: `Zaokrúhlil si na iný rád. Na ${name} znamená, že všetky číslice vpravo od rádu ${gen2} nahradíš nulami.` });
        }
      }
      return {
        answer: r,
        q: `Zaokrúhli číslo $${M(n)}$ na ${name}.`,
        solution: `Číslica hneď vpravo od rádu ${gen2} je ${next}, preto zaokrúhľujeme ${next >= 5 ? 'nahor' : 'nadol'}: $${M(n)} \\doteq ${M(r)}$.`,
        hint: 'Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.',
        mistakes,
        steps: [
          { q: `Ktorá číslica stojí v čísle $${M(n)}$ hneď vpravo od rádu ${gen2}?`, answer: next, hint: 'Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.' },
          { q: `Číslica vpravo je ${next}. Zaokrúhli $${M(n)}$ na ${name}.`, answer: r, hint: '0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.' }
        ]
      };
    }
    if (t === 2) {
      const [p, name] = pick(RND_PLACE.slice(0, 2));
      const R = p * rnd(p === 10 ? 11 : 11, p === 10 ? 99 : 99);
      const low = Math.random() < 0.5, ans = low ? R - p / 2 : R + p / 2 - 1;
      return {
        answer: ans,
        q: `Ktoré je ${low ? 'najmenšie' : 'najväčšie'} prirodzené číslo, ktoré sa po zaokrúhlení na ${name} rovná $${M(R)}$?`,
        solution: `Na $${M(R)}$ sa zaokrúhľujú čísla od $${M(R - p / 2)}$ (nahor) po $${M(R + p / 2 - 1)}$ (nadol).
          ${low ? 'Najmenšie' : 'Najväčšie'} je $${M(ans)}$.`,
        hint: `Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.`
      };
    }
    const a = rnd(1100, 8900), b = rnd(1100, 8900), plus = Math.random() < 0.6 || a === b;
    const [x, y] = plus ? [a, b] : [Math.max(a, b), Math.min(a, b)];
    const rx = roundTo(x, 100), ry = roundTo(y, 100), est = plus ? rx + ry : rx - ry;
    const exact = plus ? x + y : x - y, late = roundTo(exact, 100);
    return {
      mistakes: [
        ...(exact !== est ? [{ value: exact, msg: 'Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.' }] : []),
        ...(late !== est && late !== exact ? [{ value: late, msg: 'Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.' }] : [])
      ],
      steps: [
        { q: `Zaokrúhli $${M(x)}$ na stovky.`, answer: rx },
        { q: `Zaokrúhli $${M(y)}$ na stovky.`, answer: ry },
        { q: `Vypočítaj $${M(rx)} ${plus ? '+' : '-'} ${M(ry)}$.`, answer: est }
      ],
      answer: est,
      q: `Zaokrúhli obe čísla na stovky a odhadni výsledok: $${M(x)} ${plus ? '+' : '-'} ${M(y)}$.`,
      solution: `$${M(x)} \\doteq ${M(rx)}$, $${M(y)} \\doteq ${M(ry)}$. Odhad: $${M(rx)} ${plus ? '+' : '-'} ${M(ry)} = ${M(est)}$.
        (Presný výsledok je $${M(plus ? x + y : x - y)}$.)`,
      hint: 'Najprv zaokrúhli každé číslo na stovky, až potom počítaj.'
    };
  });

  lesson({
    id: 'r5-rimske', order: 30, title: 'Rímske číslice',
    summary: 'Zápis veľkých čísel a letopočtov, pravidlá odčítania, prevody oboma smermi.',
    theory: [
      `<p>Rímske číslice: $\\text{I} = 1$, $\\text{V} = 5$, $\\text{X} = 10$, $\\text{L} = 50$, $\\text{C} = 100$,
       $\\text{D} = 500$, $\\text{M} = 1\\,000$. Najväčšie číslo, ktoré nimi bežne zapíšeme, je $3\\,999 = \\text{MMMCMXCIX}$.</p>`,
      `<p><strong>Pravidlá zápisu:</strong></p>
       <ol><li>Znaky píšeme od najväčšieho po najmenší a ich hodnoty sčítavame: $\\text{MDCLX} = 1\\,660$.</li>
       <li>Znaky I, X, C, M môžu stáť za sebou najviac trikrát. V, L, D sa neopakujú.</li>
       <li>Menší znak pred väčším odčítame. Smie to byť iba I, X alebo C, a to len pred dvoma najbližšími väčšími znakmi.</li></ol>`,
      { fig: 'r5-rimske', caption: 'Šesť dvojíc, v ktorých sa odčítava. Iné dvojice (napríklad IL alebo IC) sú nesprávne.' },
      `<p><strong>Prevod na rímske číslice</strong> robíme po rádoch: tisíce, stovky, desiatky, jednotky.
       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$.</p>`
    ],
    examples: [
      { task: 'Zapíš rímskymi číslicami rok $2\\,026$.',
        steps: ['$2\\,026 = 2\\,000 + 20 + 6$.', '$2\\,000 = \\text{MM}$, $20 = \\text{XX}$, $6 = \\text{VI}$.', '<strong>$2\\,026 = \\text{MMXXVI}$</strong>'] },
      { task: 'Aké číslo je $\\text{CDXLIX}$?',
        steps: ['Rozdelíme na skupiny: $\\text{CD} = 400$, $\\text{XL} = 40$, $\\text{IX} = 9$.', '$400 + 40 + 9 = 449$.',
          'Pozor: 49 nie je IL, ale XLIX.', '<strong>$\\text{CDXLIX} = 449$</strong>'] }
    ]
  });

  const WRONG = [
    [4, ['IIII', 'VI']], [9, ['VIIII', 'XI']], [40, ['XXXX', 'LX']], [49, ['IL', 'XXXXVIIII']], [90, ['LXXXX', 'CX']],
    [99, ['IC', 'LXXXXVIIII']], [400, ['CCCC', 'DC']], [490, ['XD', 'CCCCLXXXX']], [999, ['IM', 'DCCCCLXXXXVIIII']],
    [1999, ['MIM', 'MDCCCCLXXXXVIIII']], [45, ['VL', 'XXXXV']], [95, ['VC', 'LXXXXV']], [1990, ['MXM', 'MDCCCCLXXXX']],
    [14, ['XIIII', 'IVX']], [1444, ['MCCCCXLIV', 'MCDXLIIII']]
  ];
  const partsSol = (n) => {
    const p = romanParts(n);
    return `$${M(n)} = ${p.map(([v]) => M(v)).join(' + ')} = ${p.map(([, r]) => `\\text{${r}}`).join(' + ')} = \\text{${toRoman(n)}}$`;
  };

  const RV = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  // hodnota zápisu, ak by sa všetky znaky iba sčítali (chyba: IV = 6)
  const romanAdd = (s) => s.split('').reduce((a, c) => a + RV[c], 0);
  // zápis bez odčítania (chyba: 4 = IIII, 9 = VIIII)
  const romanLong = (s) => s.replace('CM', 'DCCCC').replace('CD', 'CCCC').replace('XC', 'LXXXX')
    .replace('XL', 'XXXX').replace('IX', 'VIIII').replace('IV', 'IIII');
  const ROMAN_OK = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
  const romanHint = (s) => {
    if (/IIII|XXXX|CCCC|MMMM/.test(s)) return 'Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.';
    for (let i = 0; i + 1 < s.length; i++) {
      if (RV[s[i]] < RV[s[i + 1]] && !ROMAN_OK.includes(s[i] + s[i + 1])) {
        return `Dvojica ${s[i] + s[i + 1]} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.`;
      }
    }
    return 'Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.';
  };

  gen('r5-rimske', () => {
    const t = rnd(0, 3);
    const big = () => (Math.random() < 0.4 ? rnd(1400, 2030) : rnd(40, 3999));
    if (t === 0) {
      const n = big(), r = toRoman(n), p = romanParts(n), add = romanAdd(r);
      return {
        answer: n,
        q: `Aké číslo je zapísané rímskymi číslicami $\\text{${r}}$?`,
        solution: `Rozdelíme po rádoch: ${p.map(([v, s]) => `$\\text{${s}} = ${M(v)}$`).join(', ')}. Spolu $${p.map(([v]) => M(v)).join(' + ')} = ${M(n)}$.`,
        hint: 'Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.',
        mistakes: add !== n ? [{ value: add, msg: 'Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.' }] : [],
        steps: [
          ...p.map(([v, s]) => ({ q: `Akú hodnotu má skupina $\\text{${s}}$?`, answer: v })),
          { q: `Sčítaj hodnoty skupín ${p.map(([, s]) => s).join(', ')}.`, answer: n }
        ]
      };
    }
    if (t === 1) {
      const n = big(), long = romanLong(toRoman(n));
      return {
        type: 'text', answer: toRoman(n), placeholder: 'napr. MCMXC',
        q: `Zapíš rímskymi číslicami číslo $${M(n)}$.`,
        solution: `Rozložíme po rádoch: ${partsSol(n)}.`,
        hint: 'Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.',
        mistakes: long !== toRoman(n) ? [{ value: long, msg: 'Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.' }] : []
      };
    }
    if (t === 2) {
      const [n, wrong] = pick(WRONG), r = toRoman(n);
      return {
        type: 'choice', options: shuffle([r, ...wrong]), answer: r,
        q: `Ktorý zápis čísla $${M(n)}$ rímskymi číslicami je správny?`,
        solution: `Správne je ${r}: ${partsSol(n)}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.`,
        hint: 'Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.',
        choiceHints: Object.fromEntries(wrong.map((w) => [w, romanHint(w)]))
      };
    }
    const a = rnd(11, 1500), b = rnd(11, 1500), s = a + b;
    return {
      answer: s,
      q: `Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{${toRoman(a)}} + \\text{${toRoman(b)}}$`,
      solution: `$\\text{${toRoman(a)}} = ${M(a)}$, $\\text{${toRoman(b)}} = ${M(b)}$. Súčet: $${M(a)} + ${M(b)} = ${M(s)}$ (rímskymi číslicami ${toRoman(s)}).`,
      hint: 'Najprv preveď obe čísla na arabské číslice, potom sčítaj.',
      steps: [
        { q: `Aké číslo je $\\text{${toRoman(a)}}$?`, answer: a },
        { q: `Aké číslo je $\\text{${toRoman(b)}}$?`, answer: b },
        { q: `Vypočítaj $${M(a)} + ${M(b)}$.`, answer: s }
      ]
    };
  });

  lesson({
    id: 'r5-operacie', order: 40, title: 'Počtové operácie a poradie operácií',
    summary: 'Sčítanie, odčítanie, násobenie, delenie, zátvorky a výhodné počítanie.',
    theory: [
      `<p>Pri výpočte výrazu dodržiavame <strong>poradie operácií</strong>: najprv vypočítame zátvorky, potom násobenie a delenie
       (zľava doprava) a nakoniec sčítanie a odčítanie (zľava doprava).</p>`,
      { fig: 'r5-poradie', caption: 'Poradie operácií. Operácie na tom istom stupni počítame zľava doprava.' },
      `<p><strong>Výhodné počítanie:</strong> pri sčítaní a násobení môžeme čísla vymeniť aj inak zoskupiť:
       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$.
       Pomáha aj roznásobenie zátvorky: $36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$.</p>`,
      `<p><strong>Názvy:</strong> sčítanec + sčítanec = súčet, menšenec − menšiteľ = rozdiel, činiteľ · činiteľ = súčin,
       delenec : deliteľ = podiel. Neznámy člen zistíme opačnou operáciou: ak $\\square\\cdot 8 = 96$, tak $\\square = 96 : 8 = 12$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $120 - 6\\cdot(14 - 5)$.',
        steps: ['Zátvorka: $14 - 5 = 9$.', 'Násobenie: $6\\cdot 9 = 54$.', 'Odčítanie: $120 - 54 = 66$.', '<strong>Výsledok: 66</strong>'] },
      { task: 'Vypočítaj výhodne $5\\cdot 63\\cdot 20$.',
        steps: ['Spojíme $5\\cdot 20 = 100$.', '$100\\cdot 63 = 6\\,300$.', '<strong>Výsledok: $6\\,300$</strong>'] }
    ]
  });

  gen('r5-operacie', () => {
    const t = rnd(0, 3);
    if (t === 0) {
      const b = rnd(2, 9), d = rnd(2, 20), diff = rnd(2, 12), c = d + diff, a = b * diff + rnd(5, 200);
      const res = a - b * diff;
      return {
        answer: res,
        q: `Vypočítaj $${a} - ${b}\\cdot(${c} - ${d})$.`,
        solution: `Zátvorka: $${c} - ${d} = ${diff}$. Násobenie: $${b}\\cdot ${diff} = ${b * diff}$. Odčítanie: $${a} - ${b * diff} = ${res}$.`,
        hint: 'Najprv zátvorka, potom násobenie, nakoniec odčítanie.',
        mistakes: [
          ...((a - b) * diff !== res ? [{ value: (a - b) * diff, msg: `Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob ${b} výsledkom zátvorky, až potom odčítaj od ${a}.` }] : []),
          ...(a - b * c - d !== res ? [{ value: a - b * c - d, msg: `Počítal si, akoby tam zátvorka nebola. Číslo ${b} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.` }] : [])
        ],
        steps: [
          { q: `Vypočítaj zátvorku $${c} - ${d}$.`, answer: diff },
          { q: `Vynásob $${b}\\cdot ${diff}$.`, answer: b * diff },
          { q: `Vypočítaj $${a} - ${b * diff}$.`, answer: res }
        ]
      };
    }
    if (t === 1) {
      const c = rnd(3, 9), q = rnd(5, 40), s = c * q, a = rnd(1, s - 1), b = s - a, d = rnd(2, 12), e = rnd(2, 12);
      const res = q + d * e;
      return {
        answer: res,
        q: `Vypočítaj $(${a} + ${b}) : ${c} + ${d}\\cdot ${e}$.`,
        solution: `Zátvorka: $${a} + ${b} = ${s}$. Delenie a násobenie: $${s} : ${c} = ${q}$, $${d}\\cdot ${e} = ${d * e}$. Sčítanie: $${q} + ${d * e} = ${res}$.`,
        hint: 'Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.',
        mistakes: (q + d) * e !== res ? [{ value: (q + d) * e, msg: `Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: $${d}\\cdot ${e}$ vypočítaj skôr, ako budeš sčítať.` }] : [],
        steps: [
          { q: `Vypočítaj zátvorku $${a} + ${b}$.`, answer: s },
          { q: `Vydeľ $${s} : ${c}$.`, answer: q },
          { q: `Vynásob $${d}\\cdot ${e}$.`, answer: d * e },
          { q: `Sčítaj $${q} + ${d * e}$.`, answer: res }
        ]
      };
    }
    if (t === 2) {
      const x = rnd(12, 99), k = rnd(0, 3);
      if (k === 0) {
        return {
          answer: 100 * x, q: `Vypočítaj výhodne $25\\cdot ${x}\\cdot 4$.`,
          solution: `$25\\cdot 4 = 100$, preto $25\\cdot ${x}\\cdot 4 = 100\\cdot ${x} = ${M(100 * x)}$.`,
          hint: 'Ktoré dve čísla dajú spolu pekný súčin 100?'
        };
      }
      if (k === 1) {
        return {
          answer: 1000 * x, q: `Vypočítaj výhodne $125\\cdot ${x}\\cdot 8$.`,
          solution: `$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot ${x} = ${M(1000 * x)}$.`,
          hint: 'Ktoré dve čísla dajú spolu $1\\,000$?'
        };
      }
      const plus = k === 2;
      const r = plus ? 101 * x : 99 * x;
      return {
        answer: r, q: `Vypočítaj výhodne $${x}\\cdot ${plus ? 101 : 99}$.`,
        solution: `$${x}\\cdot ${plus ? 101 : 99} = ${x}\\cdot 100 ${plus ? '+' : '-'} ${x} = ${M(100 * x)} ${plus ? '+' : '-'} ${x} = ${M(r)}$.`,
        hint: `${plus ? 101 : 99} je $100 ${plus ? '+' : '-'} 1$. Vynásob stovkou a potom ${plus ? 'pripočítaj' : 'odčítaj'} číslo ešte raz.`,
        mistakes: [{ value: plus ? 100 * x + 1 : 100 * x - 1,
          msg: `Číslo ${plus ? 101 : 99} je $100 ${plus ? '+' : '-'} 1$, preto ${plus ? 'pripočítaš' : 'odčítaš'} jedenkrát celé číslo ${x}, nie iba jednotku.` }],
        steps: [
          { q: `Vypočítaj $${x}\\cdot 100$.`, answer: 100 * x },
          { q: `${plus ? 'Pripočítaj' : 'Odčítaj'} ešte raz ${x}: $${M(100 * x)} ${plus ? '+' : '-'} ${x}$.`, answer: r }
        ]
      };
    }
    const k = rnd(0, 2);
    if (k === 0) {
      const m = rnd(3, 12), x = rnd(12, 250), p = m * x;
      return {
        answer: x, q: `Doplň chýbajúce číslo: $\\square\\cdot ${m} = ${M(p)}$`,
        solution: `Neznámy činiteľ zistíme delením: $${M(p)} : ${m} = ${x}$.`,
        hint: 'Súčin vydeľ známym činiteľom.',
        mistakes: m === 10 ? [] : [{ value: p * m, msg: 'Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.' }]
      };
    }
    if (k === 1) {
      const d = rnd(3, 12), q = rnd(12, 400), x = d * q;
      return {
        answer: x, q: `Doplň chýbajúce číslo: $\\square : ${d} = ${q}$`,
        solution: `Neznámy delenec zistíme násobením: $${q}\\cdot ${d} = ${M(x)}$.`,
        hint: 'Podiel vynásob deliteľom.',
        mistakes: q % d === 0 ? [{ value: q / d, msg: 'Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.' }] : []
      };
    }
    const a = rnd(5000, 99999), x = rnd(1000, a - 100), r = a - x;
    return {
      answer: x, q: `Doplň chýbajúce číslo: $${M(a)} - \\square = ${M(r)}$`,
      solution: `Menšiteľ zistíme odčítaním: $${M(a)} - ${M(r)} = ${M(x)}$.`,
      hint: 'Od menšenca odčítaj rozdiel.',
      mistakes: [{ value: a + r, msg: 'Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.' }]
    };
  });

  lesson({
    id: 'r5-delitelnost', order: 50, title: 'Násobky a delitele',
    summary: 'Čo je násobok a deliteľ čísla, ako ich nájsť a znaky deliteľnosti 2, 3, 5 a 10.',
    theory: [
      `<p><strong>Násobky</strong> čísla dostaneme, keď ho násobíme číslami $1, 2, 3, \\dots$. Násobky čísla 6 sú
       $6, 12, 18, 24, \\dots$ – je ich nekonečne veľa.</p>`,
      `<p><strong>Deliteľ</strong> čísla je číslo, ktorým ho vydelíme bez zvyšku. Delitele čísla 12 sú $1, 2, 3, 4, 6, 12$.
       Hľadáme ich po dvojiciach: $12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$. Číslo 1 a samotné číslo sú deliteľom vždy.</p>`,
      { fig: 'r5-delitele', caption: '12 bodiek vieme usporiadať do obdĺžnikov $1\\cdot 12$, $2\\cdot 6$ a $3\\cdot 4$. Rozmery sú delitele čísla 12.' },
      `<p><strong>Znaky deliteľnosti:</strong> číslo je deliteľné <strong>2</strong>, ak končí číslicou 0, 2, 4, 6, 8;
       <strong>5</strong>, ak končí 0 alebo 5; <strong>10</strong>, ak končí 0; <strong>3</strong>, ak je jeho
       ciferný súčet (súčet číslic) deliteľný tromi.</p>`
    ],
    examples: [
      { task: 'Nájdi všetky delitele čísla 18.',
        steps: ['Hľadáme dvojice: $18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$.', '4 a 5 nie sú delitele, ďalej sa dvojice opakujú.', '<strong>Delitele: 1, 2, 3, 6, 9, 18.</strong>'] },
      { task: 'Je číslo $4\\,215$ deliteľné tromi?',
        steps: ['Ciferný súčet: $4 + 2 + 1 + 5 = 12$.', '12 je deliteľné tromi.', '<strong>Áno, $4\\,215$ je deliteľné tromi.</strong> ($4\\,215 : 3 = 1\\,405$)'] }
    ]
  });

  const divisors = (n) => {
    const d = [];
    for (let i = 1; i <= n; i++) if (n % i === 0) d.push(i);
    return d;
  };
  const RULE = {
    2: (n) => `Posledná číslica je ${n % 10}${n % 2 ? ', nie je párna' : ', je párna'}.`,
    5: (n) => `Posledná číslica je ${n % 10}${n % 5 ? ', nie je 0 ani 5' : ''}.`,
    10: (n) => `Posledná číslica je ${n % 10}${n % 10 ? ', nie je 0' : ''}.`,
    3: (n) => {
      const ds = String(n).split('').map(Number), s = ds.reduce((a, b) => a + b, 0);
      return `Ciferný súčet: $${ds.join(' + ')} = ${s}$, ${s % 3 ? 'nie je' : 'je'} deliteľný tromi.`;
    }
  };

  gen('r5-delitelnost', () => {
    const t = rnd(0, 3);
    if (t === 0) {
      const n = pick([6, 8, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 35, 36, 40, 42, 44, 45, 48, 50, 54, 56, 60, 13, 17]);
      const d = divisors(n);
      const pairs = d.filter((x) => x * x <= n).map((x) => `${x}\\cdot ${n / x}`);
      return {
        type: 'set', answer: d, placeholder: 'napr. 1; 2; 4',
        q: `Napíš všetky delitele čísla ${n}. Oddeľ ich bodkočiarkou.`,
        solution: `Dvojice: $${n} = ${pairs.join(' = ')}$. Delitele: ${d.join(', ')}.${d.length === 2 ? ' Číslo má iba dva delitele.' : ''}`,
        hint: `Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je ${n}.`
      };
    }
    if (t === 1) {
      const d = pick([2, 3, 5, 10]), yes = Math.random() < 0.5;
      let n = d * rnd(Math.ceil(100 / d), Math.floor(9999 / d));
      if (!yes) n += rnd(1, d - 1);
      if (n > 9999) n -= d;
      const ok = n % d === 0;
      return {
        type: 'choice', options: ['áno', 'nie'], answer: ok ? 'áno' : 'nie',
        q: `Je číslo $${M(n)}$ deliteľné číslom ${d}?`,
        solution: `${RULE[d](n)} Preto ${ok ? 'áno' : 'nie'}${ok ? `: $${M(n)} : ${d} = ${M(n / d)}$` : `, zvyšok po delení je ${n % d}`}.`,
        hint: d === 3 ? 'Sčítaj všetky číslice čísla.' : 'Pozri sa na poslednú číslicu.',
        choiceHints: { [ok ? 'nie' : 'áno']: d === 3
          ? 'Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.'
          : `Pri deliteľnosti číslom ${d} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.` }
      };
    }
    if (t === 2) {
      const d = rnd(3, 12), L = rnd(30, 120), c = Math.floor(L / d);
      return {
        answer: c,
        q: `Koľko násobkov čísla ${d} leží medzi číslami 1 a ${L} (vrátane)?`,
        solution: `Násobky: ${d}, ${2 * d}, ${3 * d}, …, ${c * d}. Posledný je $${c}\\cdot ${d} = ${c * d}$, ďalší $${(c + 1) * d}$ je už väčší ako ${L}. Je ich ${c}.`,
        hint: `Zisti, koľkokrát sa ${d} celé zmestí do ${L}.`,
        mistakes: d !== 10 ? [{ value: c * d, msg: `Toto je posledný násobok čísla ${d}, nie počet násobkov. Zisti, koľkokrát si musel ${d} pripočítať, aby si sa k nemu dostal.` }] : [],
        steps: [
          { q: `Ktorý je najväčší násobok čísla ${d}, ktorý nie je väčší ako ${L}?`, answer: c * d, hint: `Hľadaj v násobilke čísla ${d} posledný výsledok, ktorý ešte nepresiahne ${L}.` },
          { q: `Koľkokrát treba vziať ${d}, aby vyšlo ${c * d}?`, answer: c }
        ]
      };
    }
    const d = rnd(3, 9), right = d * rnd(Math.ceil(20 / d), Math.floor(99 / d));
    const opts = new Set([right]);
    while (opts.size < 4) {
      const x = rnd(20, 99);
      if (x % d) opts.add(x);
    }
    return {
      type: 'choice', options: shuffle([...opts].map(String)), answer: String(right),
      q: `Ktoré z čísel je násobkom čísla ${d}?`,
      solution: `$${right} = ${right / d}\\cdot ${d}$. Ostatné čísla po delení ${d} dávajú zvyšok.`,
      hint: `Spomeň si na malú násobilku čísla ${d}.`,
      choiceHints: Object.fromEntries([...opts].filter((x) => x !== right).map((x) =>
        [String(x), `Skús deliť: $${x} : ${d} = ${Math.floor(x / d)}$, zvyšok ${x % d}. Násobok čísla ${d} sa dá vydeliť bez zvyšku.`]))
    };
  });

  lesson({
    id: 'r5-zlomky', order: 60, title: 'Zlomky – základné predstavy',
    summary: 'Časť celku, čitateľ a menovateľ, zlomok z čísla, porovnávanie zlomkov.',
    theory: [
      `<p>Keď celok rozdelíme na <strong>rovnaké</strong> diely, jeden diel je jeho časť: polovica $\\frac{1}{2}$,
       tretina $\\frac{1}{3}$, štvrtina $\\frac{1}{4}$… Zlomok $\\frac{3}{8}$ znamená: celok rozdelíme na 8 rovnakých dielov a vezmeme 3.</p>`,
      `<p>Číslo pod zlomkovou čiarou je <strong>menovateľ</strong> – hovorí, na koľko dielov sme celok rozdelili.
       Číslo nad čiarou je <strong>čitateľ</strong> – hovorí, koľko dielov berieme.</p>`,
      { fig: 'r5-zlomky', caption: 'Zlomky $\\frac{1}{2}$, $\\frac{1}{4}$ a $\\frac{3}{8}$ koláča a $\\frac{2}{5}$ pásika.' },
      `<p><strong>Zlomok z čísla:</strong> $\\frac{3}{4}$ z 20 vypočítame tak, že 20 vydelíme menovateľom ($20 : 4 = 5$, to je jedna štvrtina)
       a vynásobíme čitateľom ($5\\cdot 3 = 15$).<br>
       <strong>Porovnávanie:</strong> pri rovnakom menovateli je väčší zlomok s väčším čitateľom: $\\frac{5}{7} &gt; \\frac{3}{7}$.
       Pri rovnakom čitateli je väčší zlomok s menším menovateľom: $\\frac{1}{3} &gt; \\frac{1}{5}$ (tretina je väčší kus ako pätina).</p>`
    ],
    examples: [
      { task: 'Koľko je $\\frac{2}{5}$ z 35?',
        steps: ['Jedna pätina: $35 : 5 = 7$.', 'Dve pätiny: $7\\cdot 2 = 14$.', '<strong>$\\frac{2}{5}$ z 35 je 14.</strong>'] },
      { task: 'Tretina cesty meria 4 km. Aká dlhá je celá cesta?',
        steps: ['Celá cesta má 3 tretiny.', '$3\\cdot 4 = 12$.', '<strong>Celá cesta meria 12 km.</strong>'] }
    ]
  });

  gen('r5-zlomky', () => {
    const t = rnd(0, 3);
    if (t === 0) {
      const usePie = Math.random() < 0.6;
      const n = usePie ? pick([2, 3, 4, 5, 6, 8]) : pick([3, 4, 5, 6, 7, 8, 10]), k = rnd(1, n - 1);
      const pic = usePie
        ? `<svg viewBox="0 0 120 120" width="130" role="img" aria-label="koláč">${pie(60, 60, 50, n, k)}</svg>`
        : `<svg viewBox="0 0 260 50" width="260" role="img" aria-label="pásik">${bar(10, 10, 240, 30, n, k)}</svg>`;
      return {
        answer: k / n, show: `${k}/${n}`, placeholder: 'napr. 2/5',
        q: `Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). ${pic}`,
        solution: `Celok je rozdelený na ${n} ${n <= 4 ? 'rovnaké diely' : 'rovnakých dielov'} (menovateľ),
          ${k === 1 ? 'vyfarbený je 1' : k <= 4 ? `vyfarbené sú ${k}` : `vyfarbených je ${k}`} (čitateľ): $${frac(k, n)}$.`,
        hint: 'Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.',
        mistakes: [
          ...(n - k !== k && k !== 1 ? [{ value: k / (n - k), msg: 'Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.' }] : []),
          ...(n - k !== k ? [{ value: (n - k) / n, msg: 'Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.' }] : [])
        ]
      };
    }
    if (t === 1) {
      const n = pick([2, 3, 4, 5, 6, 8, 10]), k = rnd(1, n - 1), part = rnd(2, 12), total = n * part, res = part * k;
      const fm = [
        ...(k > 1 ? [{ value: part, msg: `Vypočítal si iba $${frac(1, n)}$, teda jeden diel. Ešte ho vynásob čitateľom ${k}.` }] : []),
        ...(k > 1 && total % k === 0 && total / k * n !== res ? [{ value: total / k * n, msg: 'Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.' }] : [])
      ];
      const fs = [
        { q: `Koľko je $${frac(1, n)}$ z čísla ${total}?`, answer: part, hint: `Vydeľ ${total} menovateľom ${n}.` },
        { q: `Jedna časť je ${part}. Koľko je $${frac(k, n)}$ z čísla ${total}?`, answer: res, hint: `Vynásob ${part} čitateľom ${k}.` }
      ];
      if (Math.random() < 0.5) {
        return {
          answer: res,
          q: `Koľko je $${frac(k, n)}$ z čísla ${total}?`,
          solution: `$${total} : ${n} = ${part}$ (to je $${frac(1, n)}$), potom $${part}\\cdot ${k} = ${res}$.`,
          hint: 'Vydeľ číslo menovateľom a výsledok vynásob čitateľom.',
          mistakes: fm, steps: k > 1 ? fs : undefined
        };
      }
      return {
        mistakes: fm, steps: k > 1 ? fs : undefined,
        answer: res,
        q: `V košíku ${total <= 4 ? 'sú' : 'je'} ${total} ${pl(total, ['jablko', 'jablká', 'jabĺk'])}. Červené sú $${frac(k, n)}$ z nich. Koľko jabĺk je červených?`,
        solution: `$${frac(1, n)}$ z ${total} je $${total} : ${n} = ${part}$. $${frac(k, n)}$ je $${part}\\cdot ${k} = ${res}$.
          ${res === 1 ? 'Červené je 1 jablko' : res <= 4 ? `Červené sú ${res} jablká` : `Červených je ${res} jabĺk`}.`,
        hint: 'Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.'
      };
    }
    if (t === 2) {
      const sameDen = Math.random() < 0.55;
      let a, b, c, d;
      if (sameDen) {
        b = d = rnd(3, 12); a = rnd(1, b - 1); c = Math.random() < 0.1 ? a : rnd(1, b - 1);
      } else {
        a = c = rnd(1, 4); b = rnd(a + 1, 12); d = Math.random() < 0.1 ? b : rnd(a + 1, 12);
      }
      const L = a / b, R = c / d, ans = Math.abs(L - R) < 1e-9 ? '=' : L < R ? '<' : '>';
      const rel = ans === '<' ? '&lt;' : ans === '>' ? '&gt;' : '=';
      return {
        type: 'choice', options: ['<', '=', '>'], answer: ans,
        q: `Doplň správny znak: $${frac(a, b)} \\;\\square\\; ${frac(c, d)}$`,
        solution: ans === '=' ? 'Zlomky sú rovnaké.'
          : sameDen ? `Menovatele sú rovnaké, rozhoduje čitateľ: $${frac(a, b)} ${rel} ${frac(c, d)}$.`
            : `Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: $${frac(a, b)} ${rel} ${frac(c, d)}$.`,
        hint: 'Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.',
        choiceHints: Object.fromEntries(['<', '=', '>'].filter((o) => o !== ans).map((o) => [o,
          ans === '=' ? 'Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.'
            : o === '=' ? `Zlomky nie sú rovnaké – porovnaj ich ${sameDen ? 'čitatele' : 'menovatele'}.`
              : sameDen ? 'Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.'
                : 'Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.']))
      };
    }
    const n = pick([2, 3, 4, 5, 6, 8, 10]);
    const ctx = pick([
      { obj: 'cesty', verb: 'meria', u: 'km', q: 'Koľko kilometrov meria celá cesta?', p: rnd(2, 15) },
      { obj: 'koláča', verb: 'váži', u: 'g', q: 'Koľko gramov váži celý koláč?', p: 10 * rnd(5, 30) },
      { obj: 'nádrže', u: 'l', q: 'Koľko litrov sa zmestí do celej nádrže?', p: rnd(3, 20), into: true }
    ]);
    const whole = n * ctx.p;
    const lead = ctx.into ? `Do ${PART[n][2]} ${ctx.obj} sa zmestí` : `${cap(PART[n][0])} ${ctx.obj} ${ctx.verb}`;
    return {
      answer: whole,
      q: `${lead} $${ctx.p}\\,\\text{${ctx.u}}$. ${ctx.q}`,
      solution: `Celok má ${n} ${n <= 4 ? 'také časti' : 'takých častí'}: $${n}\\cdot ${ctx.p} = ${M(whole)}$, teda $${M(whole)}\\,\\text{${ctx.u}}$.`,
      hint: `Celok sa skladá z ${n} rovnakých častí. Vynásob.`,
      mistakes: ctx.p % n === 0 && ctx.p / n !== whole ? [{ value: ctx.p / n, msg: `Poznáš ${PART[n][1]}, celok je teda väčší. Časť treba násobiť, nie deliť.` }] : []
    };
  });

  lesson({
    id: 'r5-utvary', order: 70, title: 'Základné geometrické útvary',
    summary: 'Bod, priamka, polpriamka, úsečka, kružnica a kruh.',
    theory: [
      `<p><strong>Bod</strong> označujeme veľkým písmenom (A, B, S). Dvoma rôznymi bodmi prechádza práve jedna <strong>priamka</strong> –
       je rovná a nemá začiatok ani koniec. Označujeme ju malým písmenom ($p$) alebo dvoma bodmi (priamka $AB$).</p>`,
      `<p><strong>Polpriamka</strong> má začiatok, ale nemá koniec: polpriamka $AB$ začína v bode A a pokračuje cez bod B ďalej.
       <strong>Úsečka</strong> $AB$ je časť priamky medzi bodmi A a B, má dva krajné body a dá sa zmerať.</p>`,
      { fig: 'r5-utvary', caption: 'Prerušovaná čiara ukazuje, že čiara pokračuje bez konca. Vpravo kružnica so stredom S, polomerom r a priemerom d.' },
      `<p><strong>Kružnica</strong> je čiara, ktorej všetky body majú rovnakú vzdialenosť od stredu S – to je <strong>polomer</strong> $r$.
       <strong>Priemer</strong> $d$ prechádza stredom a je dvakrát dlhší: $d = 2\\cdot r$. <strong>Kruh</strong> je kružnica aj s celou vnútornou časťou.</p>`
    ],
    examples: [
      { task: 'Kružnica má priemer 14 cm. Aký má polomer?',
        steps: ['Polomer je polovica priemeru.', '$14 : 2 = 7$.', '<strong>$r = 7\\,\\text{cm}$</strong>'] },
      { task: 'Koľko úsečiek určujú 4 body, z ktorých žiadne tri neležia na jednej priamke?',
        steps: ['Body A, B, C, D. Spájame každý s každým: AB, AC, AD, BC, BD, CD.', '<strong>Je ich 6.</strong>'] }
    ]
  });

  const TF5 = [
    ['Úsečka má dva krajné body.', 'pravda', 'Úsečka AB začína v bode A a končí v bode B.'],
    ['Priamka má začiatok aj koniec.', 'nepravda', 'Priamka je nekonečná na obe strany.'],
    ['Polpriamka má jeden začiatočný bod.', 'pravda', 'Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.'],
    ['Dvoma rôznymi bodmi prechádza práve jedna priamka.', 'pravda', 'Cez dva body vieme viesť jedinú priamku.'],
    ['Priemer kružnice je polovica polomeru.', 'nepravda', 'Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.'],
    ['Kruh je kružnica aj s celou vnútornou časťou.', 'pravda', 'Kružnica je len čiara, kruh je aj plocha vnútri.'],
    ['Úsečku môžeme odmerať pravítkom.', 'pravda', 'Úsečka má konečnú dĺžku.'],
    ['Priamku môžeme odmerať pravítkom.', 'nepravda', 'Priamka nemá koniec, preto nemá ani dĺžku.']
  ];

  gen('r5-utvary', () => {
    const t = rnd(0, 3);
    if (t === 0) {
      const name = pick(Object.keys(LINES));
      return {
        type: 'choice', options: Object.keys(LINES), answer: name,
        q: `Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.
          <svg viewBox="0 0 280 60" width="280" role="img" aria-label="čiara">${LINES[name](40)}</svg>`,
        solution: name === 'priamka' ? 'Čiara nemá začiatok ani koniec – je to priamka.'
          : name === 'polpriamka' ? 'Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.'
            : 'Čiara má dva krajné body A a B – je to úsečka.',
        hint: 'Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.',
        choiceHints: Object.fromEntries(Object.keys(LINES).filter((o) => o !== name).map((o) => [o, {
          'priamka': 'Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.',
          'polpriamka': 'Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.',
          'úsečka': 'Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.'
        }[o]]))
      };
    }
    if (t === 1) {
      const r = rnd(2, 40), u = pick(['cm', 'mm', 'm']), toD = Math.random() < 0.5;
      return {
        answer: toD ? 2 * r : r,
        q: toD ? `Kružnica má polomer $${r}\\,\\text{${u}}$. Aký má priemer (v ${u})?`
          : `Kružnica má priemer $${2 * r}\\,\\text{${u}}$. Aký má polomer (v ${u})?`,
        solution: toD ? `$d = 2\\cdot r = 2\\cdot ${r} = ${2 * r}$, priemer je $${2 * r}\\,\\text{${u}}$.`
          : `$r = d : 2 = ${2 * r} : 2 = ${r}$, polomer je $${r}\\,\\text{${u}}$.`,
        hint: 'Priemer je dvakrát dlhší ako polomer.',
        mistakes: [toD ? { value: r / 2, msg: 'Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.' }
          : { value: 4 * r, msg: 'Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.' }]
      };
    }
    if (t === 2) {
      const n = rnd(3, 6), c = n * (n - 1) / 2;
      const P = 'ABCDEF'.slice(0, n).split('');
      const segs = [];
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) segs.push(P[i] + P[j]);
      return {
        answer: c,
        q: `Koľko úsečiek ${n <= 4 ? `určujú ${n} body` : `určuje ${n} bodov`}, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)`,
        solution: `Body ${P.join(', ')}. Úsečky: ${segs.join(', ')}. Spolu ${c}.`,
        hint: 'Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…',
        mistakes: [{ value: 2 * c, msg: 'Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.' }]
      };
    }
    const [q, a, why] = pick(TF5);
    return {
      type: 'choice', options: ['pravda', 'nepravda'], answer: a,
      q: `Je toto tvrdenie pravdivé? „${q}“`, solution: why,
      hint: 'Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.'
    };
  });

  lesson({
    id: 'r5-obvod', order: 80, title: 'Obvod štvorca, obdĺžnika a trojuholníka',
    summary: 'Výpočet obvodu, chýbajúca strana a počítanie s rôznymi jednotkami.',
    theory: [
      `<p><strong>Obvod</strong> mnohouholníka je súčet dĺžok všetkých jeho strán. Označujeme ho $o$.</p>`,
      { fig: 'r5-obvod', caption: 'Vzorce pre obvod štvorca, obdĺžnika a trojuholníka.' },
      `<p><strong>Štvorec:</strong> $o = 4\\cdot a$. <strong>Obdĺžnik:</strong> $o = 2\\cdot(a + b)$.
       <strong>Trojuholník:</strong> $o = a + b + c$; rovnostranný trojuholník má $o = 3\\cdot a$.</p>`,
      `<p>Pred sčítaním musia byť všetky dĺžky v <strong>rovnakej jednotke</strong>. Ak má obdĺžnik strany $3\\,\\text{dm}$ a $12\\,\\text{cm}$,
       najprv premeníme $3\\,\\text{dm} = 30\\,\\text{cm}$ a potom $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$.</p>`
    ],
    examples: [
      { task: 'Trojuholník má strany 7 cm, 9 cm a 12 cm. Vypočítaj jeho obvod.',
        steps: ['$o = 7 + 9 + 12$.', '$o = 28\\,\\text{cm}$.'] },
      { task: 'Obdĺžnik má obvod 50 m a jednu stranu 15 m. Aká dlhá je druhá strana?',
        steps: ['Polovica obvodu je $a + b = 50 : 2 = 25$.', '$b = 25 - 15 = 10$.', '<strong>Druhá strana meria $10\\,\\text{m}$.</strong>'] }
    ]
  });

  gen('r5-obvod', () => {
    const t = rnd(0, 3);
    const u = pick(['cm', 'm', 'mm', 'dm']);
    if (t === 0) {
      const a = rnd(3, 30), b = rnd(3, 30), c = rnd(Math.abs(a - b) + 1, a + b - 1), o = a + b + c;
      return {
        answer: o,
        q: `Trojuholník má strany $${a}\\,\\text{${u}}$, $${b}\\,\\text{${u}}$ a $${c}\\,\\text{${u}}$. Vypočítaj jeho obvod v ${u}.`,
        solution: `$o = ${a} + ${b} + ${c} = ${o}$, obvod je $${o}\\,\\text{${u}}$.`,
        hint: 'Sčítaj dĺžky všetkých troch strán.'
      };
    }
    if (t === 1) {
      if (Math.random() < 0.35) {
        const a = rnd(2, 9), b = rnd(3, 19), o = 2 * (10 * a + b);
        return {
          answer: o,
          q: `Obdĺžnik má strany $${a}\\,\\text{dm}$ a $${b}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.`,
          solution: `Najprv rovnaké jednotky: $${a}\\,\\text{dm} = ${10 * a}\\,\\text{cm}$. Potom $o = 2\\cdot(${10 * a} + ${b}) = 2\\cdot ${10 * a + b} = ${o}\\,\\text{cm}$.`,
          hint: 'Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.',
          mistakes: [
            { value: 2 * (a + b), msg: 'Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.' },
            { value: 10 * a + b, msg: 'Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.' }
          ],
          steps: [
            { q: `Premeň $${a}\\,\\text{dm}$ na centimetre.`, answer: 10 * a },
            { q: `Sčítaj dve susedné strany: $${10 * a} + ${b}$.`, answer: 10 * a + b },
            { q: 'Aký je obvod obdĺžnika v centimetroch?', answer: o, hint: 'Obvod je dvojnásobok súčtu dvoch susedných strán.' }
          ]
        };
      }
      const a = rnd(4, 60), b = rnd(2, a - 1), o = 2 * (a + b);
      return {
        answer: o,
        q: `Vypočítaj obvod obdĺžnika so stranami $a = ${a}\\,\\text{${u}}$ a $b = ${b}\\,\\text{${u}}$ (v ${u}).`,
        solution: `$o = 2\\cdot(${a} + ${b}) = 2\\cdot ${a + b} = ${o}$, obvod je $${o}\\,\\text{${u}}$.`,
        hint: 'Obvod obdĺžnika je $2\\cdot(a + b)$.',
        mistakes: [
          { value: a + b, msg: 'Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.' },
          ...(a * b !== o ? [{ value: a * b, msg: 'Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.' }] : [])
        ],
        steps: [
          { q: `Sčítaj dve susedné strany: $${a} + ${b}$.`, answer: a + b },
          { q: `Aký je obvod obdĺžnika (v ${u})?`, answer: o, hint: 'Obdĺžnik má dve dvojice rovnakých strán.' }
        ]
      };
    }
    if (t === 2) {
      const a = rnd(3, 45), sq = Math.random() < 0.6;
      const k = sq ? 4 : 3;
      return {
        answer: k * a,
        q: sq ? `Vypočítaj obvod štvorca so stranou $${a}\\,\\text{${u}}$ (v ${u}).`
          : `Vypočítaj obvod rovnostranného trojuholníka so stranou $${a}\\,\\text{${u}}$ (v ${u}).`,
        solution: `$o = ${k}\\cdot ${a} = ${k * a}$, obvod je $${k * a}\\,\\text{${u}}$.`,
        hint: sq ? 'Štvorec má 4 rovnaké strany.' : 'Rovnostranný trojuholník má 3 rovnaké strany.',
        mistakes: [
          ...(sq && a !== 4 ? [{ value: a * a, msg: 'Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.' }] : []),
          ...(!sq ? [{ value: 4 * a, msg: 'Trojuholník má iba tri strany, nie štyri.' }] : [])
        ]
      };
    }
    const k = rnd(0, 2);
    if (k === 0) {
      const a = rnd(5, 40), b = rnd(2, 40), o = 2 * (a + b);
      return {
        answer: b,
        q: `Obdĺžnik má obvod $${o}\\,\\text{${u}}$ a jednu stranu $${a}\\,\\text{${u}}$. Aká dlhá je druhá strana (v ${u})?`,
        solution: `$a + b = ${o} : 2 = ${a + b}$, preto $b = ${a + b} - ${a} = ${b}$, druhá strana meria $${b}\\,\\text{${u}}$.`,
        hint: 'Polovica obvodu obdĺžnika je súčet dvoch susedných strán.',
        mistakes: [
          { value: o - a, msg: 'Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.' },
          ...(a + b !== b ? [{ value: a + b, msg: 'Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.' }] : [])
        ],
        steps: [
          { q: `Koľko je polovica obvodu, teda $a + b$?`, answer: a + b },
          { q: `Od súčtu ${a + b} odčítaj známu stranu ${a}.`, answer: b }
        ]
      };
    }
    if (k === 1) {
      const a = rnd(3, 30), b = rnd(3, 30), c = rnd(Math.abs(a - b) + 1, a + b - 1), o = a + b + c;
      return {
        answer: c,
        q: `Trojuholník má obvod $${o}\\,\\text{${u}}$. Dve jeho strany merajú $${a}\\,\\text{${u}}$ a $${b}\\,\\text{${u}}$. Aká dlhá je tretia strana (v ${u})?`,
        solution: `$c = ${o} - ${a} - ${b} = ${c}$, tretia strana meria $${c}\\,\\text{${u}}$.`,
        hint: 'Od obvodu odčítaj dĺžky známych strán.',
        mistakes: [{ value: o - a, msg: 'Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.' },
          ...(o - b !== o - a ? [{ value: o - b, msg: 'Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.' }] : [])].filter((m) => m.value !== c),
        steps: [
          { q: `Sčítaj známe strany: $${a} + ${b}$.`, answer: a + b },
          { q: `Od obvodu ${o} odčítaj ${a + b}.`, answer: c }
        ]
      };
    }
    const a = rnd(3, 30);
    return {
      answer: a,
      q: `Štvorec má obvod $${4 * a}\\,\\text{${u}}$. Aká dlhá je jeho strana (v ${u})?`,
      solution: `$a = ${4 * a} : 4 = ${a}$, strana meria $${a}\\,\\text{${u}}$.`,
      hint: 'Obvod štvorca vydeľ štyrmi.',
      mistakes: [{ value: 2 * a, msg: 'Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.' }]
    };
  });

  lesson({
    id: 'r5-jednotky', order: 90, title: 'Jednotky dĺžky, hmotnosti, objemu a času',
    summary: 'Prevody jednotiek, zložené údaje a výber vhodnej jednotky.',
    theory: [
      `<p><strong>Dĺžka:</strong> km, m, dm, cm, mm. <strong>Hmotnosť:</strong> t, kg, dag, g.
       <strong>Objem:</strong> hl, l, dl, ml. <strong>Čas:</strong> deň, hodina (h), minúta (min), sekunda (s).</p>`,
      { fig: 'r5-jednotky', caption: 'Rebríky jednotiek. Šípka ukazuje, koľkými menšími jednotkami nahradíme jednu väčšiu.' },
      `<p><strong>Na menšiu jednotku</strong> násobíme: $3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$.
       <strong>Na väčšiu jednotku</strong> delíme: $4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$.
       Zložený údaj premeníme po častiach: $2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$.</p>`,
      `<p>Pri čase pozor: neplatí „desať“, ale <strong>60</strong> (hodina má 60 minút, minúta 60 sekúnd) a deň má <strong>24</strong> hodín.</p>`
    ],
    examples: [
      { task: 'Premeň $3\\,\\text{l}\\ 4\\,\\text{dl}$ na deciliter.',
        steps: ['$3\\,\\text{l} = 30\\,\\text{dl}$.', '$30 + 4 = 34$.', '<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>'] },
      { task: 'Film začal o 18:40 a skončil o 20:15. Koľko minút trval?',
        steps: ['Od 18:40 do 19:00 je 20 minút.', 'Od 19:00 do 20:00 je 60 minút, od 20:00 do 20:15 je 15 minút.', '$20 + 60 + 15 = 95$.', '<strong>Film trval 95 minút.</strong>'] }
    ]
  });

  const CONV5 = [['km', 'm', 1000], ['m', 'cm', 100], ['m', 'mm', 1000], ['dm', 'mm', 100], ['cm', 'mm', 10], ['m', 'dm', 10],
    ['t', 'kg', 1000], ['kg', 'g', 1000], ['kg', 'dag', 100], ['dag', 'g', 10],
    ['hl', 'l', 100], ['l', 'dl', 10], ['l', 'ml', 1000], ['dl', 'ml', 100],
    ['h', 'min', 60], ['min', 's', 60], ['h', 's', 3600]];
  const UNIT_CHOICE = [
    ['Hmotnosť jablka je asi', 150, 'g', ['g', 'kg', 't']],
    ['Hmotnosť nákladného auta je asi', 12, 't', ['g', 'kg', 't']],
    ['Hmotnosť žiaka 5. ročníka je asi', 40, 'kg', ['g', 'kg', 't']],
    ['Dĺžka triedy je asi', 9, 'm', ['cm', 'm', 'km']],
    ['Vzdialenosť z Bratislavy do Košíc je asi', 400, 'km', ['m', 'km', 'cm']],
    ['Hrúbka zošita je asi', 4, 'mm', ['mm', 'm', 'km']],
    ['Výška dospelého človeka je asi', 170, 'cm', ['mm', 'cm', 'm']],
    ['Do hrnčeka sa zmestí asi', 250, 'ml', ['ml', 'l', 'hl']],
    ['Do vane sa zmestí asi', 150, 'l', ['ml', 'dl', 'l']],
    ['Vyučovacia hodina trvá', 45, 'min', ['s', 'min', 'h']],
    ['Cesta vlakom z Bratislavy do Košíc trvá asi', 5, 'h', ['s', 'min', 'h']]
  ];
  const hm = (m) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;

  gen('r5-jednotky', () => {
    const t = rnd(0, 3);
    if (t === 0) {
      const [big, small, f] = pick(CONV5);
      const n = f >= 1000 ? rnd(2, 15) : f >= 100 ? rnd(2, 40) : rnd(2, 90);
      // čas sa nepremieňa po desiatkach (hodina = 60 min, nie 100 min)
      const time = f === 60 || f === 3600;
      const tf = f === 60 ? 100 : 10000;
      if (Math.random() < 0.5) {
        return {
          answer: n * f,
          q: `Premeň: $${n}\\,\\text{${big}} = \\square\\,\\text{${small}}$`,
          solution: `$1\\,\\text{${big}} = ${M(f)}\\,\\text{${small}}$, preto $${n}\\cdot ${M(f)} = ${M(n * f)}$.`,
          hint: 'Meníš na menšiu jednotku, preto násob.',
          mistakes: [
            ...(time ? [{ value: n * tf, msg: 'Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.' }] : []),
            ...(f === 3600 ? [{ value: n * 60, msg: 'Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.' }] : [])
          ]
        };
      }
      return {
        answer: n,
        q: `Premeň: $${M(n * f)}\\,\\text{${small}} = \\square\\,\\text{${big}}$`,
        solution: `$1\\,\\text{${big}} = ${M(f)}\\,\\text{${small}}$, preto $${M(n * f)} : ${M(f)} = ${n}$.`,
        hint: 'Meníš na väčšiu jednotku, preto deľ.',
        mistakes: [
          ...(f === 3600 ? [{ value: n * 60, msg: 'Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.' }] : []),
          ...(f === 60 ? [{ value: n * 60 / 100, msg: `Pri čase sa nepremieňa po stovkách: 1 ${big} = 60 ${small}, preto deľ šesťdesiatimi.` }] : [])
        ]
      };
    }
    if (t === 1) {
      if (Math.random() < 0.3) {
        const d = rnd(2, 6), h = rnd(1, 23), res = 24 * d + h;
        return {
          answer: res,
          q: `Koľko hodín majú ${d} ${pl(d, ['deň', 'dni', 'dní'])} a ${h} ${pl(h, ['hodina', 'hodiny', 'hodín'])}?`,
          solution: `Deň má 24 hodín: $${d}\\cdot 24 = ${24 * d}$, a ešte $${24 * d} + ${h} = ${res}$ hodín.`,
          hint: 'Jeden deň má 24 hodín.',
          mistakes: [{ value: d + h, msg: `Dni a hodiny nemôžeš len tak sčítať. Najprv premeň ${d} ${pl(d, ['deň', 'dni', 'dní'])} na hodiny.` }],
          steps: [
            { q: `Koľko hodín majú ${d} ${pl(d, ['deň', 'dni', 'dní'])}?`, answer: 24 * d },
            { q: `Pripočítaj ešte ${h} ${pl(h, ['hodinu', 'hodiny', 'hodín'])}: $${24 * d} + ${h}$.`, answer: res }
          ]
        };
      }
      const [big, small, f] = pick(CONV5.filter((c) => c[2] < 3600));
      const a = rnd(1, 12), b = rnd(1, f - 1), res = a * f + b;
      const glued = Number(`${a}${b}`);
      return {
        answer: res,
        q: `Premeň: $${a}\\,\\text{${big}}\\ ${b}\\,\\text{${small}} = \\square\\,\\text{${small}}$`,
        solution: `$${a}\\,\\text{${big}} = ${M(a * f)}\\,\\text{${small}}$ a pripočítame zvyšok: $${M(a * f)} + ${b} = ${M(res)}$.`,
        hint: 'Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.',
        mistakes: [
          ...(glued !== res ? [{ value: glued, msg: f === 60
            ? `Čísla si napísal vedľa seba, akoby platilo 1 ${big} = 100 ${small}. Platí však 1 ${big} = 60 ${small}.`
            : `Čísla nestačí napísať vedľa seba. Najprv premeň ${a} ${big} na ${small}, potom pripočítaj ${b}.` }] : []),
          ...(a + b !== res && a + b !== glued ? [{ value: a + b, msg: `Sčítal si čísla v rôznych jednotkách. Najprv premeň ${a} ${big} na ${small}.` }] : [])
        ],
        steps: [
          { q: `Premeň $${a}\\,\\text{${big}}$ na ${small}.`, answer: a * f },
          { q: `Pripočítaj ${b} ${small}: $${M(a * f)} + ${b}$.`, answer: res }
        ]
      };
    }
    if (t === 2) {
      const [txt, val, unit, opts] = pick(UNIT_CHOICE);
      const options = opts.map((o) => `${val} ${o}`);
      return {
        type: 'choice', options, answer: `${val} ${unit}`,
        q: `Vyber správny údaj: ${txt} …`,
        solution: `${txt} ${val} ${unit}. Ostatné údaje sú príliš veľké alebo príliš malé.`,
        hint: 'Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).'
      };
    }
    const start = rnd(8 * 60, 19 * 60), s = start - (start % 5), dur = 5 * rnd(5, 40), end = s + dur;
    const toFull = (60 - (s % 60)) % 60;
    const asNum = (m) => Math.floor(m / 60) * 100 + m % 60; // 18:40 → 1840
    const naive = asNum(end) - asNum(s);
    return {
      mistakes: naive !== dur ? [{ value: naive, msg: 'Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.' }] : [],
      steps: toFull && end > s + toFull ? [
        { q: `Koľko minút uplynie od ${hm(s)} do ${hm(s + toFull)}?`, answer: toFull },
        { q: `Koľko minút uplynie od ${hm(s + toFull)} do ${hm(end)}?`, answer: end - s - toFull },
        { q: 'Koľko minút trvala celá cesta?', answer: dur }
      ] : undefined,
      answer: dur,
      q: `Vlak odišiel o ${hm(s)} a do cieľa prišiel o ${hm(end)}. Koľko minút trvala cesta?`,
      solution: toFull && end > s + toFull
        ? `Od ${hm(s)} do ${hm(s + toFull)} je ${toFull} min, od ${hm(s + toFull)} do ${hm(end)} je ${end - s - toFull} min. Spolu $${toFull} + ${end - s - toFull} = ${dur}$ minút.`
        : `Od ${hm(s)} do ${hm(end)} uplynulo ${dur} minút.`,
      hint: 'Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.'
    };
  });

  lesson({
    id: 'r5-slovne', order: 100, title: 'Riešenie slovných úloh',
    summary: 'Úlohy na viac krokov, časti celku, súčet a rozdiel, zaokrúhlenie nahor.',
    theory: [
      `<p>Pri riešení slovnej úlohy: <strong>1.</strong> prečítaj úlohu a zapíš, čo vieš a čo hľadáš; <strong>2.</strong> rozmysli si,
       v akom poradí budeš počítať; <strong>3.</strong> vypočítaj; <strong>4.</strong> urob skúšku alebo odhad;
       <strong>5.</strong> napíš odpoveď celou vetou.</p>`,
      `<p><strong>Úsečkový model</strong> pomáha pri úlohách o súčte a rozdiele. Ak majú dvaja spolu 50 € a jeden má o 8 € viac,
       odčítame najprv rozdiel – potom majú obaja rovnako.</p>`,
      { fig: 'r5-model', caption: 'Úsečkový model: $50 - 8 = 42$, $42 : 2 = 21$. Mladší má 21 €, starší $21 + 8 = 29$ €.' },
      `<p>Pozor na <strong>zvyšok</strong>: ak má do auta nastúpiť 23 detí a do jedného sa zmestia 4, nestačí $23 : 4 = 5$ (zvyšok 3) áut.
       Zvyšné 3 deti potrebujú ďalšie auto, preto treba 6 áut.</p>`
    ],
    examples: [
      { task: 'Lucia mala 120 eur. Tretinu minula na topánky a 25 eur na knihy. Koľko eur jej zostalo?',
        steps: ['Tretina zo 120: $120 : 3 = 40$ eur.', 'Spolu minula $40 + 25 = 65$ eur.', 'Zostalo $120 - 65 = 55$ eur.', '<strong>Odpoveď: Lucii zostalo 55 eur.</strong>'] },
      { task: 'Otec má 42 rokov a je trikrát starší ako syn. Koľko rokov bude synovi o 6 rokov?',
        steps: ['Syn má teraz $42 : 3 = 14$ rokov.', 'O 6 rokov: $14 + 6 = 20$.', '<strong>Odpoveď: Synovi bude 20 rokov.</strong>'] }
    ]
  });

  const KIDS = [
    { n: 'Ema', d: 'Eme', f: true }, { n: 'Jakub', d: 'Jakubovi', f: false }, { n: 'Sofia', d: 'Sofii', f: true },
    { n: 'Martin', d: 'Martinovi', f: false }, { n: 'Lucia', d: 'Lucii', f: true }, { n: 'Samuel', d: 'Samuelovi', f: false },
    { n: 'Nina', d: 'Nine', f: true }, { n: 'Tomáš', d: 'Tomášovi', f: false }
  ];
  const v = (k, m, f) => (k.f ? f : m);

  gen('r5-slovne', () => {
    const t = rnd(0, 4);
    const k = pick(KIDS);
    if (t === 0) {
      const n = pick([2, 3, 4, 5]), part = rnd(5, 30), total = n * part, extra = rnd(3, part - 1);
      const left = total - part - extra;
      return {
        answer: left,
        q: `${k.n} ${v(k, 'mal', 'mala')} ${total} ${pl(total, EUR)}. ${cap(PART[n][1])} ${v(k, 'minul', 'minula')} na hru a ${extra} ${pl(extra, EUR)} na knihu. Koľko eur ${v(k, 'mu', 'jej')} zostalo?`,
        solution: `${cap(PART[n][0])} z ${total}: $${total} : ${n} = ${part}$. Minul${v(k, '', 'a')} spolu $${part} + ${extra} = ${part + extra}$. Zostalo $${total} - ${part + extra} = ${left}$ ${pl(left, EUR)}.`,
        hint: 'Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.',
        mistakes: [
          { value: total - part, msg: `Odčítal si iba peniaze za hru. Nezabudni odčítať aj ${extra} ${pl(extra, EUR)} za knihu.` },
          ...(extra !== part ? [{ value: total - extra, msg: `Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to ${PART[n][0]} všetkých peňazí.` }] : []),
          ...(total - n - extra > 0 && n !== part ? [{ value: total - n - extra, msg: `${cap(PART[n][0])} neznamená ${n} ${pl(n, EUR)}. ${cap(PART[n][1])} z ${total} vypočítaš delením: $${total} : ${n}$.` }] : [])
        ],
        steps: [
          { q: `Koľko eur je ${PART[n][0]} z ${total} eur?`, answer: part },
          { q: `Koľko eur ${v(k, 'minul', 'minula')} spolu?`, answer: part + extra },
          { q: `Koľko eur ${v(k, 'mu', 'jej')} zostalo?`, answer: left }
        ]
      };
    }
    if (t === 1) {
      const small = rnd(8, 60), diff = rnd(2, 20), sum = 2 * small + diff;
      const askBig = Math.random() < 0.5;
      return {
        answer: askBig ? small + diff : small,
        q: `Dvaja bratia majú spolu ${sum} ${pl(sum, EUR)}. Starší má o ${diff} ${pl(diff, EUR)} viac ako mladší. Koľko eur má ${askBig ? 'starší' : 'mladší'} brat?`,
        solution: `Bez rozdielu: $${sum} - ${diff} = ${2 * small}$, to je dvakrát toľko, koľko má mladší: $${2 * small} : 2 = ${small}$.
          ${askBig ? `Starší má $${small} + ${diff} = ${small + diff}$ ${pl(small + diff, EUR)}.` : `Mladší má ${small} ${pl(small, EUR)}.`} Skúška: $${small} + ${small + diff} = ${sum}$.`,
        hint: 'Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.',
        mistakes: [
          ...(sum % 2 === 0 ? [{ value: sum / 2, msg: `Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel ${diff} ${pl(diff, EUR)}.` }] : []),
          ...(2 * small !== (askBig ? small + diff : small) ? [{ value: 2 * small, msg: 'Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.' }] : []),
          { value: askBig ? small : small + diff, msg: `Toto má ${askBig ? 'mladší' : 'starší'} brat. Pýtame sa na ${askBig ? 'staršieho' : 'mladšieho'}.` }
        ],
        steps: [
          { q: `Koľko eur zostane, keď od súčtu ${sum} odčítaš rozdiel ${diff}?`, answer: 2 * small },
          { q: 'Koľko eur má mladší brat?', answer: small, hint: 'Zvyšok sa delí na dve rovnaké časti.' },
          ...(askBig ? [{ q: 'Koľko eur má starší brat?', answer: small + diff }] : [])
        ]
      };
    }
    if (t === 2) {
      const m = rnd(3, 5), child = rnd(Math.ceil(25 / m), Math.floor(55 / m)), adult = m * child, later = rnd(2, 10);
      const who = pick([['Mama', 'dcéra', 'dcére', 'je'], ['Otec', 'syn', 'synovi', 'je']]);
      const mult = ['', '', 'dvakrát', 'trikrát', 'štyrikrát', 'päťkrát'][m];
      return {
        answer: child + later,
        q: `${who[0]} má ${adult} ${pl(adult, ROKY)} a ${who[3]} ${mult} ${who[0] === 'Mama' ? 'staršia' : 'starší'} ako ${who[1]}. Koľko rokov bude ${who[2]} o ${later} ${pl(later, ROKY)}?`,
        solution: `Teraz: $${adult} : ${m} = ${child}$ ${pl(child, ROKY)}. O ${later} ${pl(later, ROKY)}: $${child} + ${later} = ${child + later}$.`,
        hint: 'Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.',
        mistakes: [
          { value: child, msg: `Toto je vek ${who[0] === 'Mama' ? 'dcéry' : 'syna'} teraz. Úloha sa pýta, koľko rokov bude mať o ${later} ${pl(later, ROKY)}.` },
          ...((adult + later) % m === 0 ? [{ value: (adult + later) / m, msg: `Najprv zisti vek ${who[0] === 'Mama' ? 'dcéry' : 'syna'} teraz z údaju ${adult} ${pl(adult, ROKY)}, až potom pripočítaj ${later}. ${who[0] === 'Mama' ? 'Mama' : 'Otec'} o ${later} ${pl(later, ROKY)} už nebude ${mult} ${who[0] === 'Mama' ? 'staršia' : 'starší'}.` }] : [])
        ],
        steps: [
          { q: `Koľko rokov má ${who[1]} teraz?`, answer: child },
          { q: `Koľko rokov bude mať ${who[1]} o ${later} ${pl(later, ROKY)}?`, answer: child + later }
        ]
      };
    }
    if (t === 3) {
      const boats = Math.random() < 0.5;
      const per = boats ? pick([3, 4, 5, 6]) : pick([6, 10, 12]);
      const n = rnd(15, 70), cnt = Math.ceil(n / per);
      const fits = per <= 4 ? 'zmestia' : 'zmestí';
      const q = boats
        ? `Na výlet ide ${n} ${pl(n, ['dieťa', 'deti', 'detí'])}. Do jednej lodičky sa ${fits} ${per} ${pl(per, ['dieťa', 'deti', 'detí'])}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?`
        : `Na farme nazbierali ${n} ${pl(n, ['vajce', 'vajcia', 'vajec'])}. Do jedného obalu sa zmestí ${per} vajec. Koľko obalov potrebujú na všetky vajcia?`;
      const u = boats ? ['lodička', 'lodičky', 'lodičiek'] : ['obal', 'obaly', 'obalov'];
      return {
        answer: cnt, q,
        solution: `$${n} : ${per} = ${Math.floor(n / per)}$, zvyšok ${n % per}. ${n % per ? `Na zvyšok treba ešte ${boats ? 'jednu lodičku' : 'jeden obal'}, spolu ${cnt} ${pl(cnt, u)}.` : `Spolu ${cnt} ${pl(cnt, u)}.`}`,
        hint: 'Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.'
      };
    }
    const d1 = rnd(8, 20), more = rnd(2, 8), d2 = d1 + more;
    const d2e = d2 % 2 === 0 ? d2 : d2 + 1, d1e = d2e - more, d3 = d2e / 2, s = d1e + d2e + d3;
    return {
      answer: s,
      q: `Turisti prešli prvý deň ${d1e} km. Druhý deň prešli o ${more} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?`,
      solution: `Druhý deň: $${d1e} + ${more} = ${d2e}$ km. Tretí deň: $${d2e} : 2 = ${d3}$ km. Spolu: $${d1e} + ${d2e} + ${d3} = ${s}$ km.`,
      hint: 'Vypočítaj postupne každý deň a nakoniec všetko sčítaj.',
      mistakes: [
        { value: d1e + d2e, msg: 'Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.' },
        ...(d1e % 2 === 0 && d1e / 2 !== d3 ? [{ value: d1e + d2e + d1e / 2, msg: 'Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.' }] : []),
        ...(more % 2 === 0 ? [{ value: d1e + more + more / 2, msg: `Druhý deň neprešli ${more} km, ale o ${more} km viac ako prvý deň.` }] : [])
      ].filter((m) => m.value !== s),
      steps: [
        { q: 'Koľko kilometrov prešli druhý deň?', answer: d2e },
        { q: 'Koľko kilometrov prešli tretí deň?', answer: d3 },
        { q: 'Koľko kilometrov prešli za tri dni spolu?', answer: s }
      ]
    };
  });
})();
