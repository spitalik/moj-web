/* 7. ročník: pomer a mierka, priama a nepriama úmernosť, slovné úlohy na percentá, celé a racionálne čísla,
   rovnobežníky a lichobežníky, kružnica a kruh, kombinatorika a pravdepodobnosť.
   Zlomky, percentá a obvod/obsah útvarov 7. ročníka sú v js/content.js (zlomky, percenta, obsah). */
(function () {
  'use strict';

  const { rnd, pick, gcd, shuffle } = EXERCISES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r7' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;
  const { plane, svg, n1, sk } = FIGURES.util;

  // Tvar podstatného mena podľa počtu: 1 deň, 2 dni, 5 dní.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  const nice = (x) => +(+x).toFixed(6);
  const D = (x) => String(nice(x)).replace('.', '{,}');          // do KaTeX: 0{,}5
  const T = (x) => String(nice(x)).replace('.', ',');            // do textu: 0,5
  const eur = (x) => (Number.isInteger(nice(x)) ? String(nice(x)) : nice(x).toFixed(2).replace('.', ','));
  const K = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');     // 50\,000 v KaTeX
  const sp = (n) => T(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');      // 50 000 v texte
  const par = (x) => (x < 0 ? `(${D(x)})` : D(x));
  const lcm = (a, b) => a / gcd(a, b) * b;
  const KD = (x) => { const [i, d] = String(nice(x)).split('.'); return K(i) + (d ? '{,}' + d : ''); };
  // malá tabuľka hodnôt (štýl .tbl zo style.css)
  const table = (rows) => `<table class="tbl tbl-auto">${rows.map((r) => `<tr>${r.map((c, i) =>
    `<${i ? 'td' : 'th'}>${c}</${i ? 'td' : 'th'}>`).join('')}</tr>`).join('')}</table>`;
  const sign = (a, b) => (Math.abs(a - b) < 1e-9 ? '=' : a < b ? '<' : '>');
  const signH = (s) => (s === '<' ? '&lt;' : s === '>' ? '&gt;' : '=');
  // zlomok p/q v základnom tvare do KaTeX (so znamienkom pred zlomkom)
  const fr = (p, q) => {
    const g = gcd(p, q) || 1;
    p /= g; q /= g;
    if (q < 0) { p = -p; q = -q; }
    if (q === 1) return String(p);
    return `${p < 0 ? '-' : ''}\\frac{${Math.abs(p)}}{${q}}`;
  };
  const frText = (p, q) => {
    const g = gcd(p, q) || 1;
    return q / g === 1 ? String(p / g) : `${p / g}/${q / g}`;
  };

  /* ---------- obrázky ---------- */

  fig('r7-mapa', {
    draw: () => `<svg viewBox="0 0 440 200" role="img" aria-label="Mapa v mierke 1 : 50 000 s dvoma obcami vzdialenými 4 cm">
      <rect class="f-cell" x="10" y="10" width="420" height="130" rx="8"/>
      <path class="f-fill2" d="M300 20 q60 10 110 50 q-10 50 -80 60 q-50 -40 -30 -110 z"/>
      <path class="f-warn" d="M20 120 C120 90 200 140 420 40"/>
      <line class="f-dash" x1="90" y1="80" x2="250" y2="80"/>
      <circle class="f-dot" cx="90" cy="80" r="7"/><circle class="f-dot" cx="250" cy="80" r="7"/>
      <text class="f-text" x="90" y="62" text-anchor="middle">Lipovec</text>
      <text class="f-text" x="250" y="62" text-anchor="middle">Brezno</text>
      <text class="f-small c-accent" x="170" y="98" text-anchor="middle">4 cm na mape</text>
      <rect class="f-solid" x="20" y="160" width="40" height="8"/><rect class="f-cell" x="60" y="160" width="40" height="8"/>
      <rect class="f-solid" x="100" y="160" width="40" height="8"/><rect class="f-cell" x="140" y="160" width="40" height="8"/>
      <text class="f-small" x="20" y="186" text-anchor="middle">0</text>
      <text class="f-small" x="100" y="186" text-anchor="middle">1 km</text>
      <text class="f-small" x="180" y="186" text-anchor="middle">2 km</text>
      <text class="f-text" x="420" y="172" text-anchor="end">mierka 1 : 50 000</text></svg>`
  });

  // priama úmernosť y = 3x a nepriama y = 36/x, posúvaním x vidno, ako sa menia
  fig('r7-umernost', {
    controls: [{ id: 'x', label: 'x', min: 1, max: 12, step: 1, value: 3 }],
    draw: (v) => {
      const p = plane(0, 12.5, 0, 40, 420, 300, 30);
      let back = '';
      for (let x = 1; x <= 12; x++) back += `<line class="f-grid" x1="${n1(p.X(x))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(x))}" y2="${n1(p.Y(40))}"/>`;
      for (let y = 5; y <= 40; y += 5) back += `<line class="f-grid" x1="${n1(p.X(0))}" y1="${n1(p.Y(y))}" x2="${n1(p.X(12.5))}" y2="${n1(p.Y(y))}"/>`;
      back += `<line class="f-axis" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(12.5))}" y2="${n1(p.Y(0))}"/>
        <line class="f-axis" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(40))}"/>`;
      for (let x = 2; x <= 12; x += 2) back += `<text class="f-small" x="${n1(p.X(x))}" y="${n1(p.Y(0) + 15)}" text-anchor="middle">${x}</text>`;
      for (let y = 10; y <= 40; y += 10) back += `<text class="f-small" x="${n1(p.X(0) - 5)}" y="${n1(p.Y(y) + 4)}" text-anchor="end">${y}</text>`;
      let hyp = '';
      for (let i = 0; i <= 120; i++) {
        const x = 0.9 + (12.5 - 0.9) * i / 120;
        hyp += `${i ? 'L' : 'M'}${n1(p.X(x))} ${n1(p.Y(Math.min(36 / x, 45)))}`;
      }
      const x = v.x, y1 = 3 * x, y2 = 36 / x;
      const clipped = `<line class="f-accent" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(13))}" y2="${n1(p.Y(39))}"/>
        <path class="f-ok" d="${hyp}"/>
        <line class="f-dash" x1="${n1(p.X(x))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(x))}" y2="${n1(p.Y(40))}"/>
        <circle class="f-dot" cx="${n1(p.X(x))}" cy="${n1(p.Y(y1))}" r="6"/>
        <circle class="f-dot f-dot-ok" cx="${n1(p.X(x))}" cy="${n1(p.Y(y2))}" r="6"/>`;
      const front = `<text class="f-small c-accent" x="${n1(p.X(10.6))}" y="${n1(p.Y(36))}" text-anchor="end">priama: y = 3 · x</text>
        <text class="f-small c-ok" x="${n1(p.X(12.3))}" y="${n1(p.Y(6))}" text-anchor="end">nepriama: y = 36 : x</text>`;
      return {
        svg: svg(p, back, clipped, front, 'Grafy priamej a nepriamej úmernosti'),
        readout: `x = ${x} · <span class="c-accent">priama: y = 3 · ${x} = ${y1}</span> · <span class="c-ok">nepriama: y = 36 : ${x} = ${sk(y2, Number.isInteger(y2) ? 0 : 2)}</span>`
      };
    }
  });

  fig('r7-zlava', {
    draw: () => {
      let s = '<svg viewBox="0 0 440 120" role="img" aria-label="Pôvodná cena 100 percent, zľava 20 percent, nová cena 80 percent">';
      for (let i = 0; i < 10; i++) s += `<rect class="${i < 8 ? 'f-fill f-outline' : 'f-fill3 f-outline3'}" x="${20 + i * 40}" y="34" width="40" height="40"/>`;
      return s + `<text class="f-small" x="220" y="22" text-anchor="middle">pôvodná cena 50 € = 100 %, jeden dielik = 10 % = 5 €</text>
        <text class="f-text c-accent" x="180" y="98" text-anchor="middle">platíš 80 % = 40 €</text>
        <text class="f-text" x="380" y="98" text-anchor="middle">zľava 20 % = 10 €</text></svg>`;
    }
  });

  fig('r7-racionalna-os', {
    draw: () => {
      const X = (v) => 220 + v * 60;
      let s = `<svg viewBox="0 0 440 112" role="img" aria-label="Racionálne čísla na číselnej osi">
        <line class="f-line" x1="14" y1="60" x2="424" y2="60"/><path class="f-solid" d="M432 60 l-10 -5 v10 z"/>`;
      for (let k = -6; k <= 6; k++) {
        const big = k % 2 === 0;
        s += `<line class="${big ? 'f-line' : 'f-thin'}" x1="${X(k / 2)}" y1="${big ? 52 : 55}" x2="${X(k / 2)}" y2="${big ? 68 : 65}"/>`;
        if (big) s += `<text class="f-small" x="${X(k / 2)}" y="86" text-anchor="middle">${k < 0 ? '−' + (-k / 2) : k / 2}</text>`;
      }
      const pts = [[-2.5, '−2,5'], [-0.75, '−3/4'], [0.5, '1/2'], [1.75, '1,75']];
      pts.forEach(([v, t], i) => {
        s += `<circle class="f-dot${i % 2 ? ' f-dot-ok' : ''}" cx="${X(v)}" cy="60" r="6"/>
          <text class="f-text ${i % 2 ? 'c-ok' : 'c-accent'}" x="${X(v)}" y="38" text-anchor="middle">${t}</text>`;
      });
      return s + `<text class="f-small" x="220" y="106" text-anchor="middle">menšie ← → väčšie</text></svg>`;
    }
  });

  fig('r7-rovnobezniky', {
    draw: () => `<svg viewBox="0 0 480 200" role="img" aria-label="Rovnobežník a lichobežník s vyznačenou výškou">
      <polygon class="f-fill f-outline" points="20,160 180,160 230,50 70,50"/>
      <line class="f-dash" x1="100" y1="50" x2="100" y2="160"/><path class="f-thin" d="M100 150 h10 v10"/>
      <text class="f-math" x="100" y="182" text-anchor="middle">a</text>
      <text class="f-math" x="214" y="112">b</text>
      <text class="f-math" x="86" y="112" text-anchor="end">v</text>
      <text class="f-small" x="40" y="155">A</text><text class="f-small" x="168" y="155">B</text>
      <text class="f-small" x="226" y="46">C</text><text class="f-small" x="62" y="46">D</text>
      <text class="f-small" x="125" y="196" text-anchor="middle">rovnobežník: S = a · v</text>
      <polygon class="f-fill2 f-outline2" points="270,160 460,160 410,50 320,50"/>
      <line class="f-dash" x1="340" y1="50" x2="340" y2="160"/><path class="f-thin" d="M340 150 h10 v10"/>
      <text class="f-math" x="365" y="182" text-anchor="middle">a</text>
      <text class="f-math" x="365" y="42" text-anchor="middle">c</text>
      <text class="f-math" x="330" y="112" text-anchor="end">v</text>
      <text class="f-math" x="444" y="104">b</text><text class="f-math" x="284" y="104">d</text>
      <text class="f-small" x="365" y="196" text-anchor="middle">lichobežník: S = (a + c) · v : 2</text></svg>`
  });

  fig('r7-kruznica-casti', {
    draw: () => {
      const cx = 170, cy = 120, r = 90;
      const P = (deg) => [n1(cx + r * Math.cos(deg * Math.PI / 180)), n1(cy - r * Math.sin(deg * Math.PI / 180))];
      const [a1x, a1y] = P(150), [a2x, a2y] = P(235), tx = cx + r;
      // dotyčnica t je zvislá priamka v bode (cx + r, cy), kolmá na vodorovný polomer
      return `<svg viewBox="0 0 440 240" role="img" aria-label="Časti kružnice a kruhu: stred, polomer, priemer, tetiva a dotyčnica">
        <circle class="f-fill f-outline" cx="${cx}" cy="${cy}" r="${r}"/>
        <line class="f-ok" x1="${cx}" y1="${cy - r}" x2="${cx}" y2="${cy + r}"/>
        <line class="f-accent" x1="${cx}" y1="${cy}" x2="${tx}" y2="${cy}"/>
        <line class="f-warn" x1="${a1x}" y1="${a1y}" x2="${a2x}" y2="${a2y}"/>
        <line class="f-line" x1="${tx}" y1="${cy - 95}" x2="${tx}" y2="${cy + 90}"/>
        <path class="f-thin" d="M${tx - 10} ${cy} v-10 h10"/>
        <circle class="f-solid" cx="${cx}" cy="${cy}" r="4"/><circle class="f-solid" cx="${tx}" cy="${cy}" r="3.5"/>
        <text class="f-math" x="${cx - 8}" y="${cy + 18}" text-anchor="end">S</text>
        <text class="f-small c-ok" x="${cx + 6}" y="${cy - 60}">priemer d</text>
        <text class="f-small c-accent" x="${cx + 45}" y="${cy + 16}" text-anchor="middle">polomer r</text>
        <text class="f-small" x="${n1((a1x + a2x) / 2) + 8}" y="${n1((a1y + a2y) / 2)}">tetiva</text>
        <text class="f-small" x="${tx + 8}" y="${cy - 70}">dotyčnica t</text>
        <text class="f-small" x="${tx + 8}" y="${cy - 6}">bod dotyku</text>
        <text class="f-small" x="${cx}" y="${cy + r + 18}" text-anchor="middle">kružnica k = okraj, kruh = okraj aj vnútro</text></svg>`;
    }
  });

  fig('r7-priamka-kruznica', {
    controls: [{ id: 'd', label: 'vzdialenosť d (cm)', min: 0, max: 7, step: 0.5, value: 2 }],
    draw: (v) => {
      const U = 24, cx = 200, cy = 190, R = 4 * U, d = v.d, y = cy - d * U;
      let pts = '', what;
      if (d < 4) {
        const h = Math.sqrt(16 - d * d) * U;
        pts = `<circle class="f-dot" cx="${n1(cx - h)}" cy="${n1(y)}" r="5"/><circle class="f-dot" cx="${n1(cx + h)}" cy="${n1(y)}" r="5"/>`;
        what = 'd &lt; r: priamka je <strong>sečnica</strong> (2 spoločné body)';
      } else if (d === 4) {
        pts = `<circle class="f-dot" cx="${cx}" cy="${n1(y)}" r="5"/>`;
        what = 'd = r: priamka je <strong>dotyčnica</strong> (1 spoločný bod)';
      } else what = 'd &gt; r: priamka je <strong>nesečnica</strong> (žiadny spoločný bod)';
      const s = `<svg viewBox="0 0 400 300" role="img" aria-label="Kružnica s polomerom 4 cm a priamka vo vzdialenosti d od stredu">
        <circle class="f-fill f-outline" cx="${cx}" cy="${cy}" r="${R}"/>
        <line class="f-accent" x1="10" y1="${n1(y)}" x2="390" y2="${n1(y)}"/>
        ${d > 0 ? `<line class="f-dash" x1="${cx}" y1="${cy}" x2="${cx}" y2="${n1(y)}"/>` : ''}
        <line class="f-ok" x1="${cx}" y1="${cy}" x2="${cx + R}" y2="${cy}"/>
        <circle class="f-solid" cx="${cx}" cy="${cy}" r="4"/>${pts}
        <text class="f-math" x="${cx - 8}" y="${cy + 18}" text-anchor="end">S</text>
        <text class="f-small c-ok" x="${cx + R / 2}" y="${cy + 16}" text-anchor="middle">r = 4</text>
        ${d > 0 ? `<text class="f-small" x="${cx + 6}" y="${n1((cy + y) / 2)}">d</text>` : ''}
        <text class="f-math" x="380" y="${n1(y - 8)}" text-anchor="end">p</text></svg>`;
      return { svg: s, readout: `d = ${sk(d, 1)} cm, r = 4 cm · ${what}` };
    }
  });

  fig('r7-strom', {
    draw: () => {
      const T1 = [['biele', 155], ['modré', 335]], C = ['červená', 'zelená', 'čierna'];
      let s = `<svg viewBox="0 0 440 230" role="img" aria-label="Stromový diagram: 2 tričká a 3 šiltovky dávajú 6 možností">
        <circle class="f-solid" cx="245" cy="18" r="5"/>`;
      T1.forEach(([t, x], i) => {
        s += `<line class="f-thin" x1="245" y1="18" x2="${x}" y2="70"/>
          <rect class="${i ? 'f-fill2 f-outline2' : 'f-fill f-outline'}" x="${x - 42}" y="62" width="84" height="26" rx="6"/>
          <text class="f-small" x="${x}" y="80" text-anchor="middle">tričko ${t}</text>`;
        C.forEach((c, j) => {
          const lx = x - 58 + j * 58;
          s += `<line class="f-thin" x1="${x}" y1="88" x2="${lx}" y2="140"/>
            <rect class="f-fill3 f-outline3" x="${lx - 27}" y="140" width="54" height="24" rx="6"/>
            <text class="f-small" x="${lx}" y="157" text-anchor="middle">${c}</text>`;
        });
      });
      return s + `<text class="f-small" x="6" y="80">tričko</text><text class="f-small" x="6" y="157">šiltovka</text>
        <text class="f-text" x="245" y="200" text-anchor="middle">2 · 3 = 6 možností oblečenia</text>
        <text class="f-small" x="245" y="220" text-anchor="middle">každá cesta zhora nadol je jedna možnosť</text></svg>`;
    }
  });

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'r7-pomer', order: 20, title: 'Pomer a mierka',
    summary: 'Zápis a krátenie pomeru, rozdelenie celku v danom pomere, zväčšenie a zmenšenie, mierka mapy a plánu.',
    theory: [
      `<p><strong>Pomer</strong> $a : b$ porovnáva dve veličiny delením: v triede s 12 dievčatami a 16 chlapcami je pomer dievčat ku chlapcom $12 : 16$.
       Pomer môžeme krátiť aj rozširovať ako zlomok: $12 : 16 = 3 : 4$ (krátime štyrmi). Pomer v <em>základnom tvare</em> má nesúdeliteľné prirodzené čísla.</p>`,
      `<p><strong>Rozdelenie v pomere:</strong> ak delíme 35 € v pomere $2 : 3$, celok má $2 + 3 = 5$ dielov, jeden diel je $35 : 5 = 7$ €,
       teda časti sú $2\\cdot 7 = 14$ € a $3\\cdot 7 = 21$ €. <strong>Zväčšiť</strong> číslo v pomere $5 : 3$ znamená vynásobiť ho zlomkom $\\frac{5}{3}$,
       <strong>zmenšiť</strong> v pomere $2 : 5$ znamená vynásobiť ho $\\frac{2}{5}$.</p>`,
      `<p><strong>Mierka mapy</strong> $1 : n$ hovorí, že 1 cm na mape zodpovedá $n$ cm v skutočnosti. Pri mierke $1 : 50\\,000$ je 1 cm na mape
       $50\\,000\\,\\text{cm} = 500\\,\\text{m}$ v teréne. Skutočnú vzdialenosť dostaneme násobením číslom $n$, vzdialenosť na mape delením číslom $n$.
       Pri prevode pomôže: $100\\,000\\,\\text{cm} = 1\\,\\text{km}$.</p>`,
      { fig: 'r7-mapa', caption: 'V mierke 1 : 50 000 zodpovedajú 4 cm na mape 200 000 cm = 2 km v skutočnosti.' }
    ],
    examples: [
      { task: 'Rozdeľ 48 cukríkov medzi Evu a Toma v pomere $5 : 3$.',
        steps: ['Počet dielov: $5 + 3 = 8$, jeden diel: $48 : 8 = 6$.', 'Eva: $5\\cdot 6 = 30$, Tom: $3\\cdot 6 = 18$.', 'Kontrola: $30 + 18 = 48$.'] },
      { task: 'Na mape s mierkou $1 : 25\\,000$ je vzdialenosť dvoch chát 6 cm. Aká je skutočná vzdialenosť?',
        steps: ['$6\\cdot 25\\,000 = 150\\,000\\,\\text{cm}$.', '$150\\,000\\,\\text{cm} = 1\\,500\\,\\text{m} = 1{,}5\\,\\text{km}$.'] }
    ]
  });

  const PAIRS = [['Jana', 'Peter'], ['Eva', 'Tomáš'], ['Lucia', 'Martin'], ['Zuzka', 'Adam']];
  const SCALES = [10000, 20000, 25000, 50000, 100000, 200000];

  gen('r7-pomer', () => {
    const t = Math.random();
    if (t < 0.22) {
      let x, y;
      do { x = rnd(1, 9); y = rnd(1, 9); } while (x === y || gcd(x, y) !== 1);
      const g = rnd(2, 12);
      let f = 2;
      while (g % f) f++;
      return {
        mistakes: f < g ? [{ value: [g * x / f, g * y / f], msg: 'Krátil si správne, ale pomer ešte nie je v základnom tvare – obe čísla sa dajú ešte spoločne vydeliť.' }] : [],
        steps: [
          { q: `Aký je najväčší spoločný deliteľ čísel ${g * x} a ${g * y}?`, answer: g },
          { type: 'tuple', q: `Vydeľ obe čísla pomeru číslom ${g}. Zapíš ich oddelené bodkočiarkou.`, answer: [x, y], placeholder: 'napr. 2; 3' }
        ],
        type: 'tuple', answer: [x, y], placeholder: 'napr. 2; 3',
        q: `Uprav pomer $${g * x} : ${g * y}$ na základný tvar. Zapíš obe čísla oddelené bodkočiarkou.`,
        solution: `Obe čísla majú najväčší spoločný deliteľ ${g}. Krátime: $${g * x} : ${g * y} = ${x} : ${y}$.`,
        hint: 'Vydeľ obe čísla tým istým (čo najväčším) číslom.'
      };
    }
    if (t < 0.44) {
      let x, y;
      do { x = rnd(1, 7); y = rnd(1, 7); } while (x === y || gcd(x, y) !== 1);
      const k = rnd(2, 15), tot = (x + y) * k, [A, B] = pick(PAIRS);
      return {
        mistakes: [
          ...(tot % 2 === 0 ? [{ value: [tot / 2, tot / 2], msg: `Peniaze sa nedelia na polovice, ale v pomere $${x} : ${y}$. Zisti, na koľko dielov sa suma delí.` }] : []),
          ...(tot % x === 0 && tot % y === 0 ? [{ value: [tot / x, tot / y], msg: 'Sumu nedelíš číslami pomeru. Najprv sčítaj čísla pomeru – dostaneš počet dielov – a zisti, koľko eur je jeden diel.' }] : [])
        ].filter((m) => m.value[0] !== x * k || m.value[1] !== y * k),
        steps: [
          { q: 'Na koľko rovnakých dielov sa suma delí?', answer: x + y, hint: 'Sčítaj čísla pomeru.' },
          { q: 'Koľko eur je jeden diel?', answer: k },
          { q: `Koľko eur dostane ${A}?`, answer: x * k },
          { type: 'tuple', q: `Koľko eur dostane ${A} a koľko ${B}? Zapíš v poradí ${A}; ${B}.`, answer: [x * k, y * k], placeholder: `${A}; ${B}` }
        ],
        type: 'tuple', answer: [x * k, y * k], placeholder: `${A}; ${B}`,
        q: `${A} a ${B} si rozdelia ${tot} € v pomere $${x} : ${y}$. Koľko eur dostane ${A} a koľko ${B}? Zapíš v poradí ${A}; ${B}.`,
        solution: `Celok má $${x} + ${y} = ${x + y}$ ${pl(x + y, ['diel', 'diely', 'dielov'])}, jeden diel je $${tot} : ${x + y} = ${k}$ €. ${A}: $${x}\\cdot ${k} = ${x * k}$ €, ${B}: $${y}\\cdot ${k} = ${y * k}$ €.`,
        hint: 'Sčítaj čísla pomeru, tak zistíš počet dielov. Potom vypočítaj, koľko je jeden diel.'
      };
    }
    if (t < 0.66) {
      const M = pick(SCALES), d = rnd(2, 24) / 2, cm = nice(d * M), km = nice(cm / 100000);
      return {
        steps: [
          { q: 'Aká je skutočná vzdialenosť v centimetroch?', answer: cm, hint: 'Vzdialenosť na mape vynásob číslom z mierky.' },
          { q: 'Preveď ju na kilometre.', answer: km, show: T(km), hint: '1 km = 100 000 cm.' }
        ],
        answer: km, show: T(km),
        q: `Mapa má mierku $1 : ${K(M)}$. Vzdialenosť dvoch obcí na mape je $${D(d)}\\,\\text{cm}$. Aká je ich skutočná vzdialenosť v kilometroch?`,
        solution: `Skutočná vzdialenosť: $${D(d)}\\cdot ${K(M)} = ${K(cm)}\\,\\text{cm}$. Keďže $1\\,\\text{km} = 100\\,000\\,\\text{cm}$, je to $${D(km)}\\,\\text{km}$.`,
        hint: 'Vzdialenosť na mape vynásob číslom z mierky a výsledok v centimetroch preveď na kilometre (1 km = 100 000 cm).'
      };
    }
    if (t < 0.84) {
      const M = pick(SCALES), d = rnd(2, 24) / 2, km = nice(d * M / 100000);
      return {
        mistakes: M === 10000 ? [] : [{ value: nice(km * M), msg: 'Na mape je vzdialenosť oveľa menšia ako v skutočnosti – skutočnú vzdialenosť (v cm) treba číslom z mierky deliť, nie násobiť.' }],
        steps: [
          { q: `Koľko centimetrov je $${D(km)}\\,\\text{km}$?`, answer: nice(km * 100000), hint: '1 km = 100 000 cm.' },
          { q: 'Koľko centimetrov to bude na mape?', answer: d, show: T(d), hint: 'Vydeľ číslom z mierky.' }
        ],
        answer: d, show: T(d),
        q: `Skutočná vzdialenosť dvoch miest je $${D(km)}\\,\\text{km}$. Koľko centimetrov bude merať na mape s mierkou $1 : ${K(M)}$?`,
        solution: `$${D(km)}\\,\\text{km} = ${K(nice(km * 100000))}\\,\\text{cm}$. Na mape: $${K(nice(km * 100000))} : ${K(M)} = ${D(d)}\\,\\text{cm}$.`,
        hint: 'Skutočnú vzdialenosť preveď na centimetre a vydeľ číslom z mierky.'
      };
    }
    const up = Math.random() < 0.5;
    let p, q;
    do { p = rnd(1, 9); q = rnd(1, 9); } while (p === q || gcd(p, q) !== 1 || (up ? p < q : p > q));
    const n = q * rnd(2, 15), r = n / q * p;
    return {
      mistakes: n % p === 0 && n / p * q !== r ? [{ value: n / p * q, msg: `Zamenil si členy pomeru. Číslo vydeľ druhým členom ${q} a vynásob prvým členom ${p}. Pri ${up ? 'zväčšení' : 'zmenšení'} musí výsledok vyjsť ${up ? 'väčší' : 'menší'} ako ${n}.` }] : [],
      steps: [
        { q: `Vydeľ číslo ${n} druhým členom pomeru.`, answer: n / q },
        { q: `Výsledok ${n / q} vynásob prvým členom pomeru.`, answer: r }
      ],
      answer: r,
      q: `${up ? 'Zväčši' : 'Zmenši'} číslo ${n} v pomere $${p} : ${q}$.`,
      solution: `Číslo vynásobíme zlomkom $\\frac{${p}}{${q}}$: $${n} : ${q} = ${n / q}$ a $${n / q}\\cdot ${p} = ${r}$.`,
      hint: `Vydeľ číslo druhým členom pomeru (${q}) a vynásob prvým (${p}).`
    };
  });

  lesson({
    id: 'r7-umernost', order: 30, title: 'Priama a nepriama úmernosť',
    summary: 'Ako rozpoznať priamu a nepriamu úmernosť, tabuľka, graf a trojčlenka.',
    theory: [
      `<p><strong>Priama úmernosť:</strong> koľkokrát sa zväčší jedna veličina, toľkokrát sa zväčší aj druhá (2-krát viac rožkov stojí 2-krát viac).
       Podiel $y : x$ je stále rovnaký, platí $y = k\\cdot x$. Grafom je časť priamky, ktorá prechádza začiatkom súradnicovej sústavy.</p>`,
      `<p><strong>Nepriama úmernosť:</strong> koľkokrát sa zväčší jedna veličina, toľkokrát sa druhá <em>zmenší</em> (2-krát viac robotníkov urobí prácu za polovičný čas).
       Súčin $x\\cdot y$ je stále rovnaký, platí $y = \\frac{k}{x}$. Grafom je časť krivky, ktorá sa volá hyperbola.</p>`,
      { fig: 'r7-umernost', caption: 'Posúvaj x. Pri priamej úmernosti (modrá) rastie y spolu s x, pri nepriamej (zelená) y klesá. Z x = 2 na x = 4 sa modrá hodnota zdvojnásobí, zelená klesne na polovicu.' },
      `<p><strong>Trojčlenka:</strong> zapíšeme známe hodnoty pod seba a šípkami vyznačíme, ako sa veličiny menia. Pri priamej úmernosti majú šípky
       rovnaký smer, pri nepriamej opačný. Najjednoduchšie je prejsť cez jednotku: zistíme hodnotu pre 1 kus (1 robotníka, 1 hodinu) a potom pre hľadaný počet.</p>`
    ],
    examples: [
      { task: '4 kg jabĺk stoja 6 €. Koľko stojí 7 kg?',
        steps: ['Priama úmernosť: viac kilogramov, viac eur.', '1 kg: $6 : 4 = 1{,}5$ €.', '7 kg: $7\\cdot 1{,}5 = 10{,}5$ €.', '<strong>7 kg stojí 10,50 €.</strong>'] },
      { task: '3 čerpadlá vyprázdnia nádrž za 8 hodín. Za koľko hodín ju vyprázdnia 4 rovnaké čerpadlá?',
        steps: ['Nepriama úmernosť: viac čerpadiel, menej hodín.', 'Jedno čerpadlo by potrebovalo $3\\cdot 8 = 24$ hodín.', '4 čerpadlá: $24 : 4 = 6$ hodín.'] }
    ]
  });

  const SCEN = [
    ['počet kúpených rožkov a cena, ktorú za ne zaplatíme', 'priama úmernosť', 'Dvakrát viac rožkov stojí dvakrát viac.'],
    ['čas jazdy a prejdená dráha auta, ktoré ide stále rovnakou rýchlosťou', 'priama úmernosť', 'Za dvojnásobný čas prejde auto dvojnásobnú dráhu.'],
    ['hmotnosť kúpeného syra a jeho cena', 'priama úmernosť', 'Za dvojnásobnú hmotnosť zaplatíme dvojnásobok.'],
    ['počet natretých rovnakých plotových dosiek a spotrebovaná farba', 'priama úmernosť', 'Na dvojnásobný počet dosiek treba dvojnásobok farby.'],
    ['počet robotníkov a čas, za ktorý urobia tú istú prácu', 'nepriama úmernosť', 'Dvakrát viac robotníkov urobí prácu za polovičný čas.'],
    ['rýchlosť auta a čas, za ktorý prejde tú istú trasu', 'nepriama úmernosť', 'Pri dvojnásobnej rýchlosti trvá cesta polovicu času.'],
    ['počet detí, ktoré si rovným dielom rozdelia 60 cukríkov, a počet cukríkov pre jedno dieťa', 'nepriama úmernosť', 'Keď je detí dvakrát viac, každé dostane polovicu.'],
    ['dĺžka a šírka obdĺžnikov, ktoré majú všetky obsah 24 cm²', 'nepriama úmernosť', 'Súčin dĺžky a šírky je stále 24: dvojnásobná dĺžka znamená polovičnú šírku.'],
    ['vek dieťaťa a jeho výška', 'ani jedna', 'Výška s vekom rastie, ale nie rovnomerne – dvojnásobný vek neznamená dvojnásobnú výšku.'],
    ['dĺžka strany štvorca a jeho obsah', 'ani jedna', 'Pri dvojnásobnej strane je obsah štvornásobný, nie dvojnásobný.'],
    ['číslo topánok a známka z matematiky', 'ani jedna', 'Tieto veličiny spolu vôbec nesúvisia.'],
    ['počet strán knihy a jej cena v kníhkupectve', 'ani jedna', 'Cena kníh nezávisí len od počtu strán, dvojnásobne hrubá kniha nemusí byť dvakrát drahšia.']
  ];

  gen('r7-umernost', () => {
    const t = Math.random();
    if (t < 0.3) {
      if (Math.random() < 0.5) {
        const u = 5 * rnd(6, 50), n1_ = rnd(2, 8);
        let n2;
        do { n2 = rnd(2, 12); } while (n2 === n1_);
        const W = ['zošit', 'zošity', 'zošitov'];
        const inv = nice(u * n1_ * n1_ / n2 / 100);
        return {
          mistakes: [{ value: inv, msg: 'Počítal si ako pri nepriamej úmernosti. Viac zošitov stojí viac – je to priama úmernosť.' }],
          steps: [
            { q: 'Koľko eur stojí jeden zošit?', answer: nice(u / 100), show: eur(u / 100) },
            { q: `Koľko eur zaplatíme za ${n2} ${pl(n2, W)}?`, answer: nice(u * n2 / 100), show: eur(u * n2 / 100) }
          ],
          answer: nice(u * n2 / 100), show: eur(u * n2 / 100),
          q: `${n1_} ${pl(n1_, W)} ${n1_ <= 4 ? 'stoja' : 'stojí'} spolu ${eur(u * n1_ / 100)} €. Koľko eur zaplatíme za ${n2} ${pl(n2, W)}?`,
          solution: `Priama úmernosť. Jeden zošit stojí $${D(u * n1_ / 100)} : ${n1_} = ${D(u / 100)}$ €. Za ${n2} ${pl(n2, W)}: $${n2}\\cdot ${D(u / 100)} = ${D(u * n2 / 100)}$ €.`,
          hint: 'Najprv zisti, koľko stojí jeden zošit.'
        };
      }
      const v = rnd(8, 25), h1 = rnd(2, 5);
      let h2;
      do { h2 = rnd(2, 9); } while (h2 === h1);
      const H = ['hodinu', 'hodiny', 'hodín'];
      return {
        mistakes: [{ value: nice(v * h1 * h1 / h2), msg: 'Počítal si ako pri nepriamej úmernosti. Za dlhší čas prejde cyklista viac kilometrov – je to priama úmernosť.' }],
        steps: [
          { q: 'Koľko kilometrov prejde za 1 hodinu?', answer: v },
          { q: `Koľko kilometrov prejde za ${h2} ${pl(h2, H)}?`, answer: v * h2 }
        ],
        answer: v * h2,
        q: `Cyklista prejde rovnakou rýchlosťou za ${h1} ${pl(h1, H)} ${v * h1} km. Koľko kilometrov prejde za ${h2} ${pl(h2, H)}?`,
        solution: `Priama úmernosť. Za 1 hodinu prejde $${v * h1} : ${h1} = ${v}$ km, za ${h2} ${pl(h2, H)} $${h2}\\cdot ${v} = ${v * h2}$ km.`,
        hint: 'Zisti, koľko kilometrov prejde za 1 hodinu.'
      };
    }
    if (t < 0.6) {
      let a, b, c, tot;
      do { a = rnd(2, 12); b = rnd(2, 30); tot = a * b; c = rnd(2, 15); } while (c === a || tot % c !== 0);
      const ans = tot / c, DN = ['deň', 'dni', 'dní'];
      const dir = nice(b * c / a);
      const um = (who) => (dir !== ans && Number.isInteger(dir) ? [{ value: dir, msg: `Počítal si ako pri priamej úmernosti. ${who} – je to nepriama úmernosť.` }] : []);
      if (Math.random() < 0.5) {
        return {
          mistakes: um('Viac robotníkov urobí prácu rýchlejšie'),
          steps: [
            { q: 'Za koľko dní by prácu urobil jeden robotník?', answer: tot },
            { q: `Za koľko dní ju urobí ${c} robotníkov?`, answer: ans }
          ],
          answer: ans,
          q: `Partia ${a} robotníkov urobí prácu za ${b} ${pl(b, DN)}. Za koľko dní urobí rovnakú prácu partia ${c} robotníkov, ak všetci pracujú rovnako rýchlo?`,
          solution: `Nepriama úmernosť: viac robotníkov, menej dní. Jeden robotník by potreboval $${a}\\cdot ${b} = ${tot}$ ${pl(tot, DN)}. ${c} robotníkov: $${tot} : ${c} = ${ans}$ ${pl(ans, DN)}.`,
          hint: 'Vypočítaj, za koľko dní by prácu urobil jeden robotník. Potom deľ počtom robotníkov.'
        };
      }
      return {
        mistakes: um('Viac kráv zje zásobu skôr'),
        steps: [
          { q: 'Na koľko dní by zásoba vystačila jednej krave?', answer: tot },
          { q: `Na koľko dní vystačí ${c} kravám?`, answer: ans }
        ],
        answer: ans,
        q: `Zásoba krmiva vystačí ${a} ${a === 1 ? 'krave' : 'kravám'} na ${b} ${pl(b, DN)}. Na koľko dní vystačí ${c} kravám, ak každá zje denne rovnako?`,
        solution: `Nepriama úmernosť: viac kráv, menej dní. Jednej krave by zásoba vystačila na $${a}\\cdot ${b} = ${tot}$ ${pl(tot, DN)}, ${c} kravám na $${tot} : ${c} = ${ans}$ ${pl(ans, DN)}.`,
        hint: 'Na koľko dní by zásoba vystačila jednej krave?'
      };
    }
    if (t < 0.8) {
      const [s, ans, why] = pick(SCEN);
      return {
        type: 'choice', options: ['priama úmernosť', 'nepriama úmernosť', 'ani jedna'], answer: ans,
        q: `Aký je vzťah medzi veličinami: ${s}?`,
        solution: `${why} ${ans === 'ani jedna' ? 'Nejde o priamu ani nepriamu úmernosť.' : `Ide o ${ans === 'priama úmernosť' ? 'priamu' : 'nepriamu'} úmernosť.`}`,
        hint: 'Predstav si, že jednu veličinu zdvojnásobíš. Čo sa stane s druhou: zdvojnásobí sa, klesne na polovicu, alebo ani jedno?',
        choiceHints: Object.fromEntries(['priama úmernosť', 'nepriama úmernosť', 'ani jedna'].filter((o) => o !== ans).map((o) => [o, {
          'priama úmernosť': 'Pri priamej úmernosti sa pri zdvojnásobení jednej veličiny zdvojnásobí aj druhá. Platí to tu naozaj?',
          'nepriama úmernosť': 'Pri nepriamej úmernosti klesne pri zdvojnásobení jednej veličiny druhá na polovicu. Platí to tu naozaj?',
          'ani jedna': 'Skús jednu veličinu zdvojnásobiť a sleduj, či sa druhá mení pravidelne – zdvojnásobí sa alebo klesne na polovicu.'
        }[o]]))
      };
    }
    const direct = Math.random() < 0.5;
    if (direct) {
      const k = rnd(2, 9), xs = shuffle([1, 2, 3, 4, 5, 6, 8, 10]).slice(0, 3).sort((a, b) => a - b);
      const prodRule = nice(k * xs[0] * xs[0] / xs[2]);
      return {
        mistakes: Number.isInteger(prodRule) && xs[2] !== 10 * xs[0] ? [{ value: prodRule, msg: 'Pri priamej úmernosti je stály podiel $y : x$, nie súčin $x\\cdot y$.' }] : [],
        steps: [
          { q: 'Aký je stály podiel $y : x$?', answer: k },
          { q: `Aká je hodnota $y$ pre $x = ${xs[2]}$?`, answer: k * xs[2] }
        ],
        answer: k * xs[2],
        q: `Veličiny $x$ a $y$ sú priamo úmerné. Doplň chýbajúcu hodnotu v tabuľke:
          ${table([['$x$', xs[0], xs[1], xs[2]], ['$y$', k * xs[0], k * xs[1], '?']])}`,
        solution: `Podiel $y : x$ je stále $${k * xs[0]} : ${xs[0]} = ${k}$, teda $y = ${k}\\cdot x$. Pre $x = ${xs[2]}$: $y = ${k}\\cdot ${xs[2]} = ${k * xs[2]}$.`,
        hint: 'Pri priamej úmernosti je podiel y : x vždy rovnaký.'
      };
    }
    const k = pick([12, 24, 36, 48, 60, 72]);
    const ds = shuffle([1, 2, 3, 4, 6, 12]).slice(0, 3).sort((x, y) => x - y);
    return {
      mistakes: [{ value: nice(k * ds[2] / ds[0] / ds[0]), msg: 'Pri nepriamej úmernosti je stály súčin $x\\cdot y$, nie podiel $y : x$.' }].filter((m) => Number.isInteger(m.value)),
      steps: [
        { q: 'Aký je stály súčin $x\\cdot y$?', answer: k },
        { q: `Aká je hodnota $y$ pre $x = ${ds[2]}$?`, answer: k / ds[2] }
      ],
      answer: k / ds[2],
      q: `Veličiny $x$ a $y$ sú nepriamo úmerné. Doplň chýbajúcu hodnotu v tabuľke:
        ${table([['$x$', ds[0], ds[1], ds[2]], ['$y$', k / ds[0], k / ds[1], '?']])}`,
      solution: `Súčin $x\\cdot y$ je stále $${ds[0]}\\cdot ${k / ds[0]} = ${k}$. Pre $x = ${ds[2]}$: $y = ${k} : ${ds[2]} = ${k / ds[2]}$.`,
      hint: 'Pri nepriamej úmernosti je súčin x · y vždy rovnaký.'
    };
  });

  lesson({
    id: 'r7-slovne-percenta', order: 50, title: 'Slovné úlohy na percentá',
    summary: 'Zľavy a zdraženia, pôvodná cena, koľko percent, opakované zmeny a jednoduché úročenie.',
    theory: [
      `<p>Pripomeňme si: <strong>základ</strong> je celok (100 %), <strong>počet percent</strong> hovorí, akú časť hľadáme, a <strong>percentová časť</strong> je výsledná hodnota.
       Najistejšie je počítať cez <strong>1 %</strong>, čo je stotina základu.</p>`,
      { fig: 'r7-zlava', caption: 'Zľava 20 % z ceny 50 €: zaplatíme zvyšných 80 %, teda 40 €.' },
      `<p><strong>Zľava o $p$ %:</strong> nová cena je $(100 - p)$ % pôvodnej. <strong>Zdraženie o $p$ %:</strong> nová cena je $(100 + p)$ % pôvodnej.
       Ak poznáme cenu <em>po</em> zľave a hľadáme pôvodnú, vydelíme ju počtom percent, ktoré zostali, a dostaneme 1 %: napríklad 72 € po zľave 10 % je 90 %, 1 % je 0,8 €, pôvodná cena je 80 €.</p>`,
      `<p><strong>Pozor na opakované zmeny:</strong> zdraženie o 10 % a potom zlacnenie o 10 % nevráti pôvodnú cenu, lebo druhé percentá sa počítajú z inej (vyššej) sumy.
       <strong>Úrok</strong> je odmena banky za uložené peniaze: pri ročnej úrokovej sadzbe 3 % dostaneme za rok 3 % z vkladu.</p>`
    ],
    examples: [
      { task: 'Bunda stála 120 €. Zlacnela o 25 %. Koľko stojí teraz?',
        steps: ['Zaplatíme $100 - 25 = 75$ % pôvodnej ceny.', '1 % je $120 : 100 = 1{,}2$ €, 75 % je $75\\cdot 1{,}2 = 90$ €.', '<strong>Bunda stojí 90 €.</strong>'] },
      { task: 'Po zdražení o 20 % stojí lístok 18 €. Koľko stál predtým?',
        steps: ['18 € je 120 % pôvodnej ceny.', '1 %: $18 : 120 = 0{,}15$ €, 100 %: $15$ €.', '<strong>Lístok stál 15 €.</strong>'] }
    ]
  });

  gen('r7-slovne-percenta', () => {
    const t = Math.random();
    const ITEMS = ['bunda', 'bicykel', 'mobil', 'kabelka', 'stan', 'kolobežka'];
    if (t < 0.3) {
      const C = 10 * rnd(2, 60), p = pick([5, 10, 15, 20, 25, 30, 40, 50]), down = Math.random() < 0.6, it = pick(ITEMS);
      const N = nice(C * (100 + (down ? -p : p)) / 100), ch = nice(C * p / 100);
      return {
        mistakes: [
          { value: ch, msg: `Toto je iba ${down ? 'zľava' : 'zdraženie'} v eurách. Ešte ${down ? 'ju odčítaj od pôvodnej ceny' : 'ho pripočítaj k pôvodnej cene'}.` },
          { value: nice(C * (100 + (down ? p : -p)) / 100), msg: `Cena sa ${down ? 'znížila' : 'zvýšila'}, nie ${down ? 'zvýšila' : 'znížila'}. ${down ? 'Zľavu od pôvodnej ceny odčítaj' : 'Zdraženie k pôvodnej cene pripočítaj'}.` }
        ].filter((m) => Math.abs(m.value - N) > 1e-9),
        steps: [
          { q: 'Koľko eur je 1 % pôvodnej ceny?', answer: nice(C / 100), show: eur(C / 100) },
          { q: `Koľko eur je ${p} % pôvodnej ceny?`, answer: ch, show: eur(ch) },
          { q: 'Koľko eur stojí teraz?', answer: N, show: eur(N) }
        ],
        answer: N, show: eur(N),
        q: `${it[0].toUpperCase() + it.slice(1)} stál${it === 'bicykel' || it === 'mobil' || it === 'stan' ? '' : 'a'} ${C} €. Cena sa ${down ? 'znížila' : 'zvýšila'} o ${p} %. Koľko eur stojí teraz?`,
        solution: `Nová cena je $${100 + (down ? -p : p)}$ % pôvodnej. 1 % je $${C} : 100 = ${D(C / 100)}$ €, teda $${100 + (down ? -p : p)}\\cdot ${D(C / 100)} = ${D(N)}$ €.`,
        hint: down ? 'Po zľave platíš (100 − p) % pôvodnej ceny.' : 'Po zdražení platíš (100 + p) % pôvodnej ceny.'
      };
    }
    if (t < 0.5) {
      const p = pick([10, 20, 25, 40, 50]), C = (100 / gcd(100, 100 - p)) * rnd(4, 30), down = Math.random() < 0.7;
      const perc = down ? 100 - p : 100 + p, N = nice(C * perc / 100);
      const back = nice(N * (down ? 100 + p : 100 - p) / 100);
      return {
        mistakes: Math.abs(back - C) > 1e-9 ? [{ value: back, msg: `${down ? 'Zľava sa počítala' : 'Zdraženie sa počítalo'} z pôvodnej ceny, nie z novej. Nová cena je ${perc} % pôvodnej – zisti, koľko eur je 1 %.` }] : [],
        steps: [
          { q: `Koľko percent pôvodnej ceny je ${eur(N)} €?`, answer: perc },
          { q: 'Koľko eur je 1 % pôvodnej ceny?', answer: nice(C / 100), show: eur(C / 100) },
          { q: 'Koľko eur stála hra pôvodne?', answer: C }
        ],
        answer: C,
        q: `Po ${down ? 'zľave' : 'zdražení'} o ${p} % stojí hra ${eur(N)} €. Koľko eur stála pred ${down ? 'zľavou' : 'zdražením'}?`,
        solution: `${eur(N)} € je ${perc} % pôvodnej ceny. 1 %: $${D(N)} : ${perc} = ${D(C / 100)}$ €. Pôvodná cena (100 %): $${D(C / 100)}\\cdot 100 = ${C}$ €.`,
        hint: `Nová cena nie je 100 %, ale ${down ? '(100 − p)' : '(100 + p)'} %. Zisti najprv, koľko je 1 %.`
      };
    }
    if (t < 0.7) {
      const tot = pick([20, 25, 40, 50, 200, 400, 500]);
      const part = rnd(5, tot - 5), pc = nice(part * 100 / tot);
      return {
        mistakes: [
          ...(part !== pc ? [{ value: part, msg: `Počet ľudí nie je počet percent. Základ (100 %) je ${tot} ľudí, nie 100.` }] : []),
          ...(Math.abs(nice(tot / part * 100) - pc) > 1e-9 && Number.isInteger(nice(tot / part * 1000)) ? [{ value: nice(tot / part * 100), msg: 'Zamenil si časť a základ. Počet percent = časť : základ · 100.' }] : [])
        ],
        steps: [
          { q: `Koľko ľudí je 1 % z ${tot}?`, answer: nice(tot / 100), show: T(tot / 100) },
          { q: `Koľko percent je ${part} ľudí?`, answer: pc, show: T(pc) }
        ],
        answer: pc, show: T(pc),
        q: `V ankete odpovedalo ${tot} ľudí. Odpoveď „áno“ zvolilo ${part} z nich. Koľko percent opýtaných odpovedalo „áno“?`,
        solution: `1 % je $${tot} : 100 = ${D(tot / 100)}$ človeka. Počet percent: $${part} : ${D(tot / 100)} = ${D(pc)}$ %. (Alebo $\\frac{${part}}{${tot}}\\cdot 100$.)`,
        hint: 'Počet percent = časť : základ · 100.'
      };
    }
    if (t < 0.85) {
      const C = 100 * rnd(1, 9), p = pick([10, 20, 25, 50]), up = nice(C * (100 + p) / 100), fin = nice(up * (100 - p) / 100);
      return {
        mistakes: [{ value: C, msg: 'Zdraženie a zlacnenie o rovnaký počet percent sa nevyrušia: zlacnenie sa počíta z vyššej sumy po zdražení.' }],
        steps: [
          { q: `Koľko eur stojí tovar po zdražení o ${p} %?`, answer: up, show: eur(up) },
          { q: `Koľko eur stojí po následnom zlacnení o ${p} %?`, answer: fin, show: eur(fin), hint: 'Percentá počítaj z ceny po zdražení.' }
        ],
        answer: fin, show: eur(fin),
        q: `Tovar stál ${C} €. Najprv ho zdražili o ${p} % a potom zlacnili o ${p} %. Koľko eur stojí teraz?`,
        solution: `Po zdražení: $${C}\\cdot ${D((100 + p) / 100)} = ${D(up)}$ €. Po zlacnení: $${D(up)}\\cdot ${D((100 - p) / 100)} = ${D(fin)}$ €. Cena je o ${eur(C - fin)} € nižšia ako na začiatku, lebo zlacnenie sa počítalo z vyššej sumy.`,
        hint: 'Druhú zmenu počítaj z ceny po prvej zmene, nie z pôvodnej.'
      };
    }
    const V = 500 * rnd(2, 20), p = pick([1, 1.5, 2, 2.5, 3, 4]), u = nice(V * p / 100), tot = Math.random() < 0.5;
    return {
      mistakes: [tot ? { value: u, msg: 'Toto je iba úrok. Pýtame sa, koľko bude na účte – pripočítaj úrok k vkladu.' }
        : { value: nice(V + u), msg: 'Toto je celá suma na účte. Pýtame sa iba na úrok.' }],
      steps: tot ? [
        { q: 'Koľko eur úroku dostaneme za rok?', answer: u, show: eur(u) },
        { q: 'Koľko eur bude na účte po 1 roku?', answer: nice(V + u), show: eur(V + u) }
      ] : undefined,
      answer: tot ? nice(V + u) : u, show: eur(tot ? V + u : u),
      q: `Na účet s ročnou úrokovou sadzbou ${T(p)} % sme vložili ${sp(V)} €. ${tot ? 'Koľko eur bude na účte po 1 roku' : 'Koľko eur úroku dostaneme po 1 roku'} (daň neuvažujeme)?`,
      solution: `Úrok je ${T(p)} % z vkladu: $${K(V)} : 100\\cdot ${D(p)} = ${D(u)}$ €.${tot ? ` Na účte bude $${K(V)} + ${D(u)} = ${KD(V + u)}$ €.` : ''}`,
      hint: 'Úrok za rok vypočítaš ako p % z vloženej sumy.'
    };
  });

  lesson({
    id: 'r7-racionalne', order: 60, title: 'Celé a racionálne čísla',
    summary: 'Racionálne čísla na osi, porovnávanie, sčítanie, odčítanie, násobenie a delenie so znamienkami.',
    theory: [
      `<p><strong>Racionálne čísla</strong> sú všetky čísla, ktoré vieme zapísať ako zlomok $\\frac{a}{b}$ s celými číslami $a$, $b$ ($b \\neq 0$):
       celé čísla, zlomky aj desatinné čísla, kladné aj záporné. Napríklad $-2{,}5 = -\\frac{5}{2}$ alebo $0{,}75 = \\frac{3}{4}$.</p>`,
      { fig: 'r7-racionalna-os', caption: 'Racionálne čísla na číselnej osi. Z dvoch čísel je väčšie to, ktoré leží viac vpravo: $-\\frac{3}{4} &gt; -2{,}5$.' },
      `<p><strong>Sčítanie a odčítanie</strong> funguje ako pri celých číslach: odčítať číslo znamená pripočítať opačné. Pri zlomkoch najprv nájdeme spoločného menovateľa:
       $-\\frac{3}{4} + \\frac{1}{2} = -\\frac{3}{4} + \\frac{2}{4} = -\\frac{1}{4}$.</p>`,
      `<p><strong>Násobenie a delenie:</strong> vypočítame výsledok bez znamienok a znamienko určíme podľa pravidla:
       rovnaké znamienka dávajú <strong>plus</strong>, rôzne znamienka <strong>mínus</strong>. $(-4)\\cdot(-3) = 12$, $(-20) : 5 = -4$, $6\\cdot(-0{,}5) = -3$.
       Pri dlhšom výraze platí obvyklé poradie: zátvorky, potom násobenie a delenie, nakoniec sčítanie a odčítanie.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $(-6)\\cdot 4 - (-15) : 3$.',
        steps: ['Najprv násobenie a delenie: $(-6)\\cdot 4 = -24$, $(-15) : 3 = -5$.', '$-24 - (-5) = -24 + 5 = -19$.', '<strong>Výsledok: −19</strong>'] },
      { task: 'Porovnaj čísla $-\\frac{2}{3}$ a $-0{,}6$.',
        steps: ['$-\\frac{2}{3} \\doteq -0{,}667$.', 'Na osi leží $-0{,}667$ viac vľavo ako $-0{,}6$.', '<strong>$-\\frac{2}{3} &lt; -0{,}6$</strong>'] }
    ]
  });

  const nz = (a, b) => { let x = 0; while (x === 0) x = rnd(a, b); return x; };
  // náhodné racionálne číslo v tvare zlomku alebo desatinného čísla
  const randRat = () => {
    if (Math.random() < 0.5) {
      let q, p;
      do { q = rnd(2, 9); p = nz(-2 * q, 2 * q); } while (p % q !== 0 && gcd(p, q) !== 1);
      if (p % q === 0) return { tex: String(p / q), val: p / q };
      return { tex: `${p < 0 ? '-' : ''}\\frac{${Math.abs(p)}}{${q}}`, val: p / q };
    }
    const v = nz(-40, 40) / 10;
    return { tex: D(v), val: v };
  };

  // prevod zlomkov na desatinné čísla do riešenia (len ak sa v zadaní nejaký zlomok vyskytuje)
  const conv = (xs) => {
    const fr_ = xs.filter((o) => o.tex.includes('frac'));
    return fr_.length ? `Prevedieme zlomky na desatinné čísla: ${fr_.map((o) => `$${o.tex} ${Number.isInteger(o.val * 1000) ? '=' : '\\doteq'} ${D(Math.round(o.val * 1000) / 1000)}$`).join(' a ')}. ` : '';
  };

  gen('r7-racionalne', () => {
    const t = Math.random();
    if (t < 0.25) {
      let a = nz(-12, 12), b = nz(-12, 12);
      if (a > 0 && b > 0) { if (Math.random() < 0.5) a = -a; else b = -b; }
      if (Math.abs(a) === 1) a *= rnd(2, 9);
      if (Math.abs(b) === 1) b *= rnd(2, 9);
      const mul = Math.random() < 0.5;
      const A = mul ? a : a * b, res = mul ? a * b : a;
      const same = (A < 0) === (b < 0);
      return {
        signed: true, answer: res,
        q: `Vypočítaj $${par(A)} ${mul ? '\\cdot' : ':'} ${par(b)}$.`,
        solution: `Bez znamienok: $${Math.abs(A)} ${mul ? '\\cdot' : ':'} ${Math.abs(b)} = ${Math.abs(res)}$. Znamienka sú ${same ? 'rovnaké, výsledok je kladný' : 'rôzne, výsledok je záporný'}: $${res}$.`,
        hint: 'Rovnaké znamienka dávajú plus, rôzne znamienka mínus.'
      };
    }
    if (t < 0.45) {
      const a = nz(-9, 9), b = nz(-9, 9), c = nz(-20, 20);
      if (Math.random() < 0.5) {
        const res = a * b + c, w = a * (b + c);
        return {
          mistakes: w !== res && w !== -res ? [{ value: w, msg: 'Násobenie má prednosť pred sčítaním a odčítaním. Najprv vynásob, až potom pripočítaj.' }] : [],
          steps: [
            { q: `Vynásob $${par(a)}\\cdot ${par(b)}$.`, answer: a * b, signed: true },
            { q: `Vypočítaj $${a * b} ${c < 0 ? '-' : '+'} ${Math.abs(c)}$.`, answer: res, signed: true }
          ],
          signed: true, answer: res,
          q: `Vypočítaj $${par(a)}\\cdot ${par(b)} ${c < 0 ? '-' : '+'} ${Math.abs(c)}$.`,
          solution: `Najprv násobenie: $${par(a)}\\cdot ${par(b)} = ${a * b}$. Potom $${a * b} ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${res}$.`,
          hint: 'Násobenie má prednosť pred sčítaním a odčítaním.'
        };
      }
      const res = (a + c) * b, w = a + c * b;
      return {
        mistakes: w !== res && w !== -res ? [{ value: w, msg: `Zátvorku musíš vypočítať ako prvú – číslo ${par(b).replace(/[()]/g, '')} násobí celý jej obsah, nie iba posledné číslo.` }] : [],
        steps: [
          { q: 'Vypočítaj zátvorku.', answer: a + c, signed: true },
          { q: `Vynásob $${par(a + c)}\\cdot ${par(b)}$.`, answer: res, signed: true }
        ],
        signed: true, answer: res,
        q: `Vypočítaj $(${a} ${c < 0 ? '-' : '+'} ${Math.abs(c)})\\cdot ${par(b)}$.`,
        solution: `Najprv zátvorka: $${a} ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${a + c}$. Potom $${par(a + c)}\\cdot ${par(b)} = ${res}$.`,
        hint: 'Najprv vypočítaj zátvorku, potom násob. Pozor na znamienka.'
      };
    }
    if (t < 0.65) {
      const x = randRat();
      let y = randRat();
      if (Math.random() < 0.12) y = { tex: Number.isInteger(x.val * 10) ? D(x.val) : x.tex, val: x.val };
      if (y.tex === x.tex) y = { tex: D(nice(x.val + (x.val < 0 ? -0.1 : 0.1))), val: nice(x.val + (x.val < 0 ? -0.1 : 0.1)) };
      const s = sign(x.val, y.val);
      return {
        type: 'choice', options: ['<', '=', '>'], answer: s,
        q: `Doplň správny znak: $${x.tex} \\;\\square\\; ${y.tex}$`,
        solution: `${conv([x, y])}${s === '=' ? 'Čísla sa rovnajú.' : `Na osi leží viac vpravo ${s === '>' ? 'prvé' : 'druhé'} číslo, preto $${x.tex} ${signH(s)} ${y.tex}$.`}`,
        hint: 'Preveď obe čísla na desatinné čísla. Pri záporných číslach je väčšie to, ktoré je bližšie k nule.',
        choiceHints: Object.fromEntries(['<', '=', '>'].filter((o) => o !== s).map((o) => [o,
          s === '=' ? 'Preveď obe čísla na desatinné čísla – vyjde ti to isté číslo.'
            : o === '=' ? 'Čísla nie sú rovnaké. Preveď ich na desatinné čísla a porovnaj.'
              : x.val < 0 && y.val < 0 ? 'Pri záporných číslach je väčšie to, ktoré je bližšie k nule (leží na osi viac vpravo).'
                : 'Preveď obe čísla na desatinné čísla a predstav si ich na číselnej osi. Väčšie je to, ktoré leží viac vpravo.']))
      };
    }
    if (t < 0.85) {
      let a, b, c, d;
      do { b = rnd(2, 8); d = rnd(2, 8); a = nz(-9, 9); c = nz(-9, 9); } while (gcd(a, b) !== 1 || gcd(c, d) !== 1 || (a > 0 && c > 0));
      const add = Math.random() < 0.5;
      const L = lcm(b, d), A = a * L / b, C = c * L / d, R = add ? A + C : A - C;
      const ft = (p, q) => `${p < 0 ? '-' : ''}\\frac{${Math.abs(p)}}{${q}}`;
      const fp = (p, q) => (p < 0 ? `\\left(${ft(p, q)}\\right)` : ft(p, q));
      const want = R / L, near = (v) => Math.abs(v - want) < 1e-9 || Math.abs(v + want) < 1e-9;
      const both = (add ? a + c : a - c) / (b + d), flip = (add ? A - C : A + C) / L;
      return {
        mistakes: [
          ...(b !== d && !near(both) ? [{ value: both, msg: 'Menovatele sa nesčítavajú. Preveď zlomky na spoločného menovateľa a počítaj iba s čitateľmi.' }] : []),
          ...(c < 0 && !near(flip) && Math.abs(flip - both) > 1e-9 ? [{ value: flip, msg: add ? 'Pozor na znamienko: pripočítať záporné číslo znamená odčítať.' : 'Pozor na znamienko: odčítať záporné číslo znamená pripočítať opačné číslo.' }] : [])
        ],
        steps: [
          { q: `Aký je spoločný menovateľ zlomkov $${ft(a, b)}$ a $${ft(c, d)}$?`, answer: L },
          { q: `Aký čitateľ bude mať zlomok $${ft(a, b)}$ po prevode na menovateľ ${L}?`, answer: A, signed: true },
          { q: `Aký čitateľ bude mať zlomok $${ft(c, d)}$ po prevode na menovateľ ${L}?`, answer: C, signed: true },
          { q: 'Vypočítaj výsledok a zapíš ho v základnom tvare.', answer: R / L, signed: true, show: frText(R, L), placeholder: 'napr. -3/4' }
        ],
        signed: true, answer: R / L, show: frText(R, L), placeholder: 'napr. -3/4',
        q: `Vypočítaj $${ft(a, b)} ${add ? '+' : '-'} ${fp(c, d)}$. Výsledok zapíš ako zlomok v základnom tvare (napr. -3/4) alebo celé číslo.`,
        solution: `Spoločný menovateľ je ${L}: $${ft(A, L)} ${add ? '+' : '-'} ${fp(C, L)} = \\frac{${A} ${add ? '+' : '-'} ${par(C)}}{${L}} = ${R === 0 ? '0' : ft(R, L)}${R !== 0 && (gcd(R, L) > 1) ? ` = ${fr(R, L)}` : ''}$.`,
        hint: 'Preveď zlomky na spoločného menovateľa, potom sčítaj čitatele so znamienkami.'
      };
    }
    const a = nz(-80, 80) / 10, b = nz(-80, 80) / 100 * 5, add = Math.random() < 0.5, res = nice(add ? a + b : a - b);
    const w = nice(add ? a - b : a + b);
    return {
      mistakes: Math.abs(w - res) > 1e-9 && Math.abs(w + res) > 1e-9 ? [{ value: w, msg: b < 0
        ? (add ? 'Pripočítať záporné číslo znamená odčítať.' : 'Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.')
        : (add ? 'Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.' : 'Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.') }] : [],
      signed: true, answer: res, show: T(res),
      q: `Vypočítaj $${D(a)} ${add ? '+' : '-'} ${par(nice(b))}$.`,
      solution: `${add ? '' : `Odčítať číslo znamená pripočítať opačné: $${D(a)} - ${par(nice(b))} = ${D(a)} + ${par(nice(-b))}$. `}Výsledok: $${D(res)}$.`,
      hint: 'Pri sčítaní čísel s rôznymi znamienkami odčítaj ich absolútne hodnoty a výsledok dostane znamienko čísla s väčšou absolútnou hodnotou.'
    };
  });

  lesson({
    id: 'r7-rovnobezniky', order: 80, title: 'Rovnobežníky a lichobežníky',
    summary: 'Druhy rovnobežníkov, vlastnosti strán, uhlov a uhlopriečok, obvod a obsah rovnobežníka a lichobežníka.',
    theory: [
      `<p><strong>Rovnobežník</strong> je štvoruholník, ktorý má obe dvojice protiľahlých strán rovnobežné. Protiľahlé strany sú rovnako dlhé, protiľahlé uhly sú zhodné,
       susedné uhly majú súčet $180^\\circ$ a uhlopriečky sa navzájom rozpoľujú.
       Druhy: <strong>štvorec</strong> (rovnaké strany, pravé uhly), <strong>obdĺžnik</strong> (pravé uhly), <strong>kosoštvorec</strong> (rovnaké strany, uhly nie sú pravé)
       a <strong>kosodĺžnik</strong> (susedné strany rôzne, uhly nie sú pravé).</p>`,
      `<p>Uhlopriečky obdĺžnika a štvorca sú rovnako dlhé; uhlopriečky kosoštvorca a štvorca sú na seba kolmé.
       <strong>Lichobežník</strong> má práve jednu dvojicu rovnobežných strán – <em>základne</em> $a$, $c$; zvyšné strany sú <em>ramená</em>.
       Uhly pri jednom ramene majú súčet $180^\\circ$. Rovnoramenný lichobežník má rovnako dlhé ramená a zhodné uhly pri každej základni.</p>`,
      { fig: 'r7-rovnobezniky', caption: 'Výška v je vzdialenosť rovnobežných strán (kolmica medzi nimi).' },
      `<p><strong>Obvod</strong> rovnobežníka: $o = 2\\cdot(a + b)$, lichobežníka: $o = a + b + c + d$.
       <strong>Obsah</strong> rovnobežníka: $S = a\\cdot v_a$ (strana krát výška na ňu). Rovnobežník sa dá prestrihnúť a poskladať na obdĺžnik s rovnakým obsahom.
       Obsah lichobežníka: $S = \\frac{(a + c)\\cdot v}{2}$ – dva rovnaké lichobežníky poskladajú rovnobežník so stranou $a + c$.</p>`
    ],
    examples: [
      { task: 'Rovnobežník má stranu $a = 8\\,\\text{cm}$ a výšku na ňu $v_a = 5\\,\\text{cm}$. Vypočítaj jeho obsah.',
        steps: ['$S = a\\cdot v_a = 8\\cdot 5$.', '<strong>$S = 40\\,\\text{cm}^2$</strong>'] },
      { task: 'Lichobežník má základne 10 cm a 6 cm a výšku 4 cm. Aký má obsah?',
        steps: ['$S = \\frac{(10 + 6)\\cdot 4}{2} = \\frac{64}{2}$.', '<strong>$S = 32\\,\\text{cm}^2$</strong>'] }
    ]
  });

  const QUADS = [
    ['má všetky strany rovnako dlhé a všetky uhly pravé', 'štvorec'],
    ['má uhlopriečky rovnako dlhé a navzájom kolmé, pričom sa rozpoľujú', 'štvorec'],
    ['má všetky uhly pravé, ale susedné strany nie sú rovnako dlhé', 'obdĺžnik'],
    ['má uhlopriečky, ktoré sa rozpoľujú a sú rovnako dlhé, ale nie sú na seba kolmé', 'obdĺžnik'],
    ['má všetky strany rovnako dlhé, ale žiadny uhol nie je pravý', 'kosoštvorec'],
    ['má uhlopriečky, ktoré sa rozpoľujú a sú na seba kolmé, ale nie sú rovnako dlhé', 'kosoštvorec'],
    ['má obe dvojice protiľahlých strán rovnobežné, susedné strany rôzne dlhé a žiadny pravý uhol', 'kosodĺžnik'],
    ['má uhlopriečky, ktoré sa rozpoľujú, ale nie sú rovnako dlhé ani kolmé', 'kosodĺžnik'],
    ['má práve jednu dvojicu rovnobežných strán', 'lichobežník'],
    ['má dve rovnobežné základne rôznej dĺžky a dve rovnako dlhé ramená', 'lichobežník']
  ];

  gen('r7-rovnobezniky', () => {
    const t = Math.random();
    if (t < 0.4) {
      const k = rnd(0, 3);
      if (k === 0) {
        const a = rnd(3, 20), v = rnd(2, 15);
        return { mistakes: [{ value: a * v / 2, msg: 'Delenie dvomi patrí do vzorca pre trojuholník alebo lichobežník. Obsah rovnobežníka je strana krát výška na ňu.' }],
          answer: a * v, q: `Rovnobežník má stranu $a = ${a}\\,\\text{cm}$ a výšku na túto stranu $v_a = ${v}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².`,
          solution: `$S = a\\cdot v_a = ${a}\\cdot ${v} = ${a * v}\\,\\text{cm}^2$.`, hint: 'Obsah rovnobežníka je strana krát výška na túto stranu.' };
      }
      if (k === 1) {
        const a = rnd(3, 20), v = rnd(2, 15);
        return { mistakes: a * v - a !== v ? [{ value: a * v - a, msg: 'Obsah je súčin strany a výšky, preto výšku dostaneš delením, nie odčítaním.' }] : [],
          answer: v, q: `Rovnobežník má obsah $${a * v}\\,\\text{cm}^2$ a stranu $a = ${a}\\,\\text{cm}$. Aká veľká je výška $v_a$ (v cm)?`,
          solution: `Zo vzorca $S = a\\cdot v_a$: $v_a = S : a = ${a * v} : ${a} = ${v}\\,\\text{cm}$.`, hint: 'Obsah vydeľ dĺžkou strany.' };
      }
      if (k === 2) {
        const a = rnd(4, 20), b = rnd(3, 15);
        return { mistakes: [{ value: a + b, msg: 'Sčítal si iba dve strany. Kosodĺžnik má štyri strany – protiľahlé sú rovnako dlhé.' },
          ...(a * b !== 2 * (a + b) ? [{ value: a * b, msg: 'Vynásobil si strany, to nie je obvod. Obvod je súčet dĺžok všetkých strán.' }] : [])],
          steps: [{ q: 'Aký je súčet dvoch susedných strán?', answer: a + b }, { q: 'Aký je obvod kosodĺžnika (v cm)?', answer: 2 * (a + b) }],
          answer: 2 * (a + b), q: `Kosodĺžnik má strany $a = ${a}\\,\\text{cm}$ a $b = ${b}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.`,
          solution: `$o = 2\\cdot(a + b) = 2\\cdot(${a} + ${b}) = ${2 * (a + b)}\\,\\text{cm}$.`, hint: 'Protiľahlé strany rovnobežníka sú rovnako dlhé.' };
      }
      let a, c, v;
      do { a = rnd(5, 20); c = rnd(2, a - 1); v = rnd(2, 12); } while (((a + c) * v) % 2);
      return { mistakes: [
        { value: (a + c) * v, msg: 'Zabudol si deliť dvomi. Dva rovnaké lichobežníky tvoria rovnobežník – jeden je jeho polovica.' },
        { value: a * v, msg: 'Lichobežník nie je rovnobežník so stranou a. Použi obe základne: $S = \\frac{(a + c)\\cdot v}{2}$.' }
      ].filter((m) => m.value !== (a + c) * v / 2),
      steps: [
        { q: 'Aký je súčet základní $a + c$?', answer: a + c },
        { q: 'Vynásob súčet základní výškou.', answer: (a + c) * v },
        { q: 'Aký je obsah lichobežníka (v cm²)?', answer: (a + c) * v / 2 }
      ],
      answer: (a + c) * v / 2, q: `Lichobežník má základne $a = ${a}\\,\\text{cm}$, $c = ${c}\\,\\text{cm}$ a výšku $v = ${v}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².`,
        solution: `$S = \\frac{(a + c)\\cdot v}{2} = \\frac{(${a} + ${c})\\cdot ${v}}{2} = \\frac{${(a + c) * v}}{2} = ${(a + c) * v / 2}\\,\\text{cm}^2$.`,
        hint: 'Sčítaj základne, vynásob výškou a vydeľ dvomi.' };
    }
    if (t < 0.7) {
      const al = rnd(25, 155);
      if (al === 90) return { answer: 90, q: 'V obdĺžniku $ABCD$ má uhol $\\alpha$ veľkosť $90^\\circ$. Aký veľký je uhol $\\beta$ (v stupňoch)?', solution: 'V obdĺžniku sú všetky uhly pravé, $\\beta = 90^\\circ$.', hint: 'Susedné uhly v rovnobežníku majú spolu 180°.' };
      const k = rnd(0, 2);
      if (k === 0) return { mistakes: [{ value: al, msg: 'Uhly α a β sú susedné, nie protiľahlé. Susedné uhly rovnobežníka majú spolu 180°.' }],
        answer: 180 - al, q: `V rovnobežníku $ABCD$ je $\\alpha = ${al}^\\circ$. Aký veľký je uhol $\\beta$ (v stupňoch)?`,
        solution: `Susedné uhly rovnobežníka majú súčet $180^\\circ$: $\\beta = 180^\\circ - ${al}^\\circ = ${180 - al}^\\circ$.`, hint: 'Susedné uhly rovnobežníka majú spolu 180°.' };
      if (k === 1) return { mistakes: [{ value: 180 - al, msg: 'Uhol γ nie je susedný k uhlu α, leží oproti nemu. Protiľahlé uhly rovnobežníka sú zhodné.' }],
        answer: al, q: `V rovnobežníku $ABCD$ je $\\alpha = ${al}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?`,
        solution: `Uhol $\\gamma$ je protiľahlý k uhlu $\\alpha$, protiľahlé uhly rovnobežníka sú zhodné: $\\gamma = ${al}^\\circ$.`, hint: 'Ktorý uhol leží oproti uhlu α?' };
      return { mistakes: [{ value: al, msg: 'Lichobežník nie je rovnobežník. Uhly α a δ ležia pri tom istom ramene, ich súčet je 180°.' }],
        answer: 180 - al, q: `V lichobežníku $ABCD$ so základňami $AB$ a $CD$ je $\\alpha = ${al}^\\circ$. Aký veľký je uhol $\\delta$ pri vrchole $D$ (v stupňoch)?`,
        solution: `Uhly $\\alpha$ a $\\delta$ ležia pri tom istom ramene $AD$, ich súčet je $180^\\circ$: $\\delta = 180^\\circ - ${al}^\\circ = ${180 - al}^\\circ$.`,
        hint: 'Uhly pri jednom ramene lichobežníka majú súčet 180°.' };
    }
    const [desc, ans] = pick(QUADS);
    return {
      type: 'choice', options: ['štvorec', 'obdĺžnik', 'kosoštvorec', 'kosodĺžnik', 'lichobežník'], answer: ans,
      q: `Štvoruholník ${desc}. Aký je to štvoruholník?`,
      solution: `Takéto vlastnosti má ${ans}.`,
      hint: 'Rozhoduje, či sú strany rovnako dlhé, či sú uhly pravé, a pri uhlopriečkach, či sú rovnako dlhé a kolmé.',
      choiceHints: Object.fromEntries(['štvorec', 'obdĺžnik', 'kosoštvorec', 'kosodĺžnik', 'lichobežník'].filter((o) => o !== ans).map((o) => [o, {
        'štvorec': 'Štvorec má všetky strany rovnako dlhé a všetky uhly pravé; uhlopriečky sú rovnako dlhé a kolmé.',
        'obdĺžnik': 'Obdĺžnik má všetky uhly pravé a uhlopriečky rovnako dlhé, susedné strany sú rôzne dlhé.',
        'kosoštvorec': 'Kosoštvorec má všetky strany rovnako dlhé, ale uhly nie sú pravé; uhlopriečky sú kolmé, nie rovnako dlhé.',
        'kosodĺžnik': 'Kosodĺžnik má susedné strany rôzne dlhé a žiadny pravý uhol; uhlopriečky nie sú ani kolmé, ani rovnako dlhé.',
        'lichobežník': 'Lichobežník má iba jednu dvojicu rovnobežných strán – nie je to rovnobežník.'
      }[o]]))
    };
  });

  lesson({
    id: 'r7-kruznica', order: 90, title: 'Kružnica, kruh a ich vlastnosti',
    summary: 'Stred, polomer, priemer, tetiva, dotyčnica, vzájomná poloha priamky a kružnice aj dvoch kružníc, číslo π a dĺžka kružnice.',
    theory: [
      `<p><strong>Kružnica</strong> $k(S; r)$ je množina všetkých bodov roviny, ktoré majú od stredu $S$ vzdialenosť $r$ (<em>polomer</em>).
       <strong>Kruh</strong> tvorí kružnica spolu so všetkými bodmi vo vnútri. <strong>Tetiva</strong> je úsečka spájajúca dva body kružnice;
       najdlhšia tetiva prechádza stredom a je to <strong>priemer</strong> $d = 2r$.</p>`,
      { fig: 'r7-kruznica-casti', caption: 'Časti kružnice a kruhu. Dotyčnica je kolmá na polomer v bode dotyku.' },
      `<p><strong>Priamka a kružnica:</strong> ak je vzdialenosť $d$ priamky od stredu menšia ako $r$, priamka je <em>sečnica</em> (2 spoločné body);
       ak $d = r$, je to <em>dotyčnica</em> (1 bod dotyku); ak $d &gt; r$, je to <em>nesečnica</em> (žiadny spoločný bod).</p>`,
      { fig: 'r7-priamka-kruznica', caption: 'Posúvaj priamku p a sleduj, koľko spoločných bodov má s kružnicou.' },
      `<p><strong>Dve kružnice</strong> s polomermi $r_1 \\ge r_2$ a vzdialenosťou stredov $s$: pre $s &gt; r_1 + r_2$ ležia mimo seba, pre $s = r_1 + r_2$ sa dotýkajú zvonka,
       pre $r_1 - r_2 &lt; s &lt; r_1 + r_2$ sa pretínajú v dvoch bodoch, pre $s = r_1 - r_2$ sa dotýkajú zvnútra a pre $s &lt; r_1 - r_2$ leží menšia vnútri väčšej.</p>
       <p><strong>Číslo π:</strong> pre každú kružnicu je podiel jej dĺžky a priemeru rovnaký, $o : d = \\pi \\doteq 3{,}14$. Preto <strong>dĺžka kružnice</strong> je
       $o = \\pi\\cdot d = 2\\pi r$.</p>`
    ],
    examples: [
      { task: 'Koleso bicykla má priemer 70 cm. Akú dráhu prejde pri jednom otočení? (π ≈ 3,14)',
        steps: ['Dráha = dĺžka kružnice: $o = \\pi\\cdot d \\doteq 3{,}14\\cdot 70$.', '<strong>$o \\doteq 219{,}8\\,\\text{cm}$</strong>'] },
      { task: 'Kružnice majú polomery 5 cm a 3 cm, ich stredy sú vzdialené 8 cm. Aká je ich vzájomná poloha?',
        steps: ['Súčet polomerov: $5 + 3 = 8$.', 'Vzdialenosť stredov sa rovná súčtu polomerov.', '<strong>Kružnice sa dotýkajú zvonka.</strong>'] }
    ]
  });

  const POS2 = ['ležia mimo seba', 'dotýkajú sa zvonka', 'pretínajú sa v dvoch bodoch', 'dotýkajú sa zvnútra', 'menšia leží vnútri väčšej'];

  gen('r7-kruznica', () => {
    const t = Math.random();
    if (t < 0.15) {
      const r = Math.random() < 0.7 ? rnd(2, 30) : rnd(5, 99) / 2, toD = Math.random() < 0.5;
      return toD
        ? { mistakes: [{ value: nice(r / 2), msg: 'Priemer je dlhší ako polomer – polomer treba dvomi násobiť, nie deliť.' }], answer: nice(2 * r), show: T(2 * r), q: `Kružnica má polomer $r = ${D(r)}\\,\\text{cm}$. Aký je jej priemer v cm?`, solution: `$d = 2\\cdot r = 2\\cdot ${D(r)} = ${D(2 * r)}\\,\\text{cm}$.`, hint: 'Priemer je dvakrát dlhší ako polomer.' }
        : { mistakes: [{ value: nice(4 * r), msg: 'Polomer je kratší ako priemer – priemer treba dvomi deliť, nie násobiť.' }], answer: r, show: T(r), q: `Kruh má priemer $d = ${D(2 * r)}\\,\\text{cm}$. Aký je jeho polomer v cm?`, solution: `$r = d : 2 = ${D(2 * r)} : 2 = ${D(r)}\\,\\text{cm}$.`, hint: 'Polomer je polovica priemeru.' };
    }
    if (t < 0.38) {
      const r = rnd(1, 15), useD = Math.random() < 0.4, o = Math.round(2 * 3.14 * r * 10) / 10;
      const r1 = (x) => Math.round(x * 10) / 10;
      return {
        mistakes: (useD
          ? [{ value: r1(2 * 3.14 * 2 * r), msg: 'Priemer si dosadil do vzorca $o = 2\\pi r$ namiesto polomeru. Ak poznáš priemer, použi $o = \\pi\\cdot d$.' }]
          : [{ value: r1(3.14 * r), msg: 'Zabudol si na dvojku: dĺžka kružnice je $o = 2\\cdot\\pi\\cdot r$.' },
            { value: r1(3.14 * r * r), msg: 'Toto je obsah kruhu ($\\pi r^2$). Dĺžka kružnice je $o = 2\\cdot\\pi\\cdot r$.' }]
        ).filter((m) => Math.abs(m.value - o) > 0.06),
        answer: o, tol: 0.051, show: T(o),
        q: `Vypočítaj dĺžku kružnice, ktorá má ${useD ? `priemer $d = ${2 * r}\\,\\text{cm}$` : `polomer $r = ${r}\\,\\text{cm}$`}. Použi $\\pi \\doteq 3{,}14$ a výsledok zaokrúhli na desatiny cm.`,
        solution: useD ? `$o = \\pi\\cdot d \\doteq 3{,}14\\cdot ${2 * r} = ${D(nice(6.28 * r))} \\doteq ${D(o)}\\,\\text{cm}$.` : `$o = 2\\pi r \\doteq 2\\cdot 3{,}14\\cdot ${r} = ${D(nice(6.28 * r))} \\doteq ${D(o)}\\,\\text{cm}$.`,
        hint: 'Dĺžka kružnice je o = π · d = 2 · π · r.'
      };
    }
    if (t < 0.5) {
      const r = rnd(1, 20), o = nice(6.28 * r);
      return {
        mistakes: [{ value: 2 * r, msg: 'Vydelil si iba číslom π – tak dostaneš priemer. Polomer je jeho polovica.' }],
        answer: r,
        q: `Kružnica má dĺžku $${D(o)}\\,\\text{cm}$. Aký má polomer v cm? Použi $\\pi \\doteq 3{,}14$.`,
        solution: `Z $o = 2\\pi r$ dostaneme $r = o : (2\\pi) \\doteq ${D(o)} : 6{,}28 = ${r}\\,\\text{cm}$.`,
        hint: 'Dĺžku kružnice vydeľ číslom 2π ≈ 6,28.'
      };
    }
    if (t < 0.75) {
      const r = rnd(2, 12), k = rnd(0, 2);
      const d = k === 0 ? rnd(1, r * 2 - 1) / 2 : k === 1 ? r : r + rnd(1, 12) / 2;
      const ans = ['sečnica', 'dotyčnica', 'nesečnica'][k];
      return {
        type: 'choice', options: ['sečnica', 'dotyčnica', 'nesečnica'], answer: ans,
        q: `Kružnica má polomer $r = ${r}\\,\\text{cm}$. Priamka $p$ je od jej stredu vzdialená $${D(d)}\\,\\text{cm}$. Čím je priamka pre kružnicu?`,
        solution: [`$${D(d)} &lt; ${r}$, vzdialenosť je menšia ako polomer, priamka je sečnica (2 spoločné body).`,
          `Vzdialenosť sa rovná polomeru, priamka je dotyčnica (1 spoločný bod).`,
          `$${D(d)} &gt; ${r}$, vzdialenosť je väčšia ako polomer, priamka je nesečnica (žiadny spoločný bod).`][k],
        hint: 'Porovnaj vzdialenosť priamky od stredu s polomerom.',
        choiceHints: Object.fromEntries(['sečnica', 'dotyčnica', 'nesečnica'].filter((o) => o !== ans).map((o) => [o, {
          'sečnica': 'Sečnica je od stredu vzdialená menej ako polomer. Porovnaj to s danou vzdialenosťou.',
          'dotyčnica': 'Dotyčnica je od stredu vzdialená presne o polomer. Porovnaj to s danou vzdialenosťou.',
          'nesečnica': 'Nesečnica je od stredu vzdialená viac ako polomer. Porovnaj to s danou vzdialenosťou.'
        }[o]]))
      };
    }
    const k = rnd(0, 4);
    let r1, r2, s;
    do { r1 = rnd(3, 12); r2 = rnd(1, r1 - 1); } while (k === 4 && r1 - r2 < 2);
    if (k === 0) s = r1 + r2 + rnd(1, 6);
    else if (k === 1) s = r1 + r2;
    else if (k === 2) s = rnd(r1 - r2 + 1, r1 + r2 - 1);
    else if (k === 3) s = r1 - r2;
    else s = rnd(1, r1 - r2 - 1);
    const [A, B] = Math.random() < 0.5 ? [r1, r2] : [r2, r1];
    const why = [
      `$${s} &gt; ${r1} + ${r2} = ${r1 + r2}$`,
      `$${s} = ${r1} + ${r2}$`,
      `$${r1} - ${r2} = ${r1 - r2} &lt; ${s} &lt; ${r1 + r2} = ${r1} + ${r2}$`,
      `$${s} = ${r1} - ${r2}$`,
      `$${s} &lt; ${r1} - ${r2} = ${r1 - r2}$`][k];
    return {
      type: 'choice', options: POS2, answer: POS2[k],
      q: `Kružnice $k_1$ a $k_2$ majú polomery $${A}\\,\\text{cm}$ a $${B}\\,\\text{cm}$, ich stredy sú od seba vzdialené $${s}\\,\\text{cm}$. Aká je ich vzájomná poloha?`,
      solution: `Porovnáme vzdialenosť stredov so súčtom a rozdielom polomerov: ${why}. ${['Kružnice teda ležia mimo seba.', 'Kružnice sa teda dotýkajú zvonka.', 'Kružnice sa teda pretínajú v dvoch bodoch.', 'Kružnice sa teda dotýkajú zvnútra.', 'Menšia kružnica teda leží vnútri väčšej.'][k]}`,
      hint: 'Vypočítaj súčet aj rozdiel polomerov a porovnaj ich so vzdialenosťou stredov.',
      choiceHints: Object.fromEntries(POS2.filter((o, i) => i !== k).map((o) => [o, {
        'ležia mimo seba': 'Kružnice ležia mimo seba, ak je vzdialenosť stredov väčšia ako súčet polomerov.',
        'dotýkajú sa zvonka': 'Kružnice sa dotýkajú zvonka, ak sa vzdialenosť stredov rovná súčtu polomerov.',
        'pretínajú sa v dvoch bodoch': 'Kružnice sa pretínajú, ak je vzdialenosť stredov medzi rozdielom a súčtom polomerov.',
        'dotýkajú sa zvnútra': 'Kružnice sa dotýkajú zvnútra, ak sa vzdialenosť stredov rovná rozdielu polomerov.',
        'menšia leží vnútri väčšej': 'Menšia kružnica leží vnútri väčšej, ak je vzdialenosť stredov menšia ako rozdiel polomerov.'
      }[o]]))
    };
  });

  lesson({
    id: 'r7-kombinatorika', order: 100, title: 'Kombinatorika a jednoduchá pravdepodobnosť',
    summary: 'Systematické vypisovanie možností, stromový diagram, pravidlo súčinu a pravdepodobnosť jednoduchých udalostí.',
    theory: [
      `<p>V kombinatorických úlohách zisťujeme, <strong>koľko je možností</strong>. Pomáha ich vypisovať systematicky – v tabuľke alebo v <strong>stromovom diagrame</strong>,
       aby sme žiadnu nevynechali ani nezopakovali.</p>`,
      { fig: 'r7-strom', caption: 'Z 2 tričiek a 3 šiltoviek vieme zostaviť 2 · 3 = 6 rôznych oblečení.' },
      `<p><strong>Pravidlo súčinu:</strong> ak prvú vec vyberáme z $m$ možností a ku každej z nich druhú z $n$ možností, spolu je $m\\cdot n$ možností.
       Pri trojciferných číslach z číslic 1, 2, 3, 4 bez opakovania je $4\\cdot 3\\cdot 2 = 24$ možností, s opakovaním $4\\cdot 4\\cdot 4 = 64$.
       Ak hrá každý s každým jeden zápas, pri $n$ hráčoch je $\\frac{n\\cdot(n - 1)}{2}$ zápasov (každú dvojicu by sme inak započítali dvakrát).</p>`,
      `<p><strong>Pravdepodobnosť</strong> udalosti pri rovnako možných výsledkoch:
       $P = \\frac{\\text{počet priaznivých výsledkov}}{\\text{počet všetkých výsledkov}}$. Je to číslo od 0 (nemožná udalosť) po 1 (istá udalosť).
       Pri hode kockou je pravdepodobnosť, že padne párne číslo, $\\frac{3}{6} = \\frac{1}{2}$.</p>`
    ],
    examples: [
      { task: 'Koľko dvojciferných čísel vytvoríš z číslic 2, 5, 7, 9, ak sa číslice nesmú opakovať?',
        steps: ['Na miesto desiatok máme 4 možnosti, na miesto jednotiek už len 3.', '$4\\cdot 3 = 12$.', '<strong>12 čísel.</strong>'] },
      { task: 'Vo vrecku sú 3 červené a 5 modrých guličiek. Aká je pravdepodobnosť, že náhodne vytiahneš červenú?',
        steps: ['Všetkých guličiek je $3 + 5 = 8$, priaznivé sú 3.', '<strong>$P = \\frac{3}{8}$</strong>'] }
    ]
  });

  const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  gen('r7-kombinatorika', () => {
    const t = Math.random();
    if (t < 0.15) {
      const a = rnd(2, 6), b = rnd(2, 6), c = Math.random() < 0.4 ? rnd(2, 4) : 0;
      return {
        mistakes: a + b + c !== a * b * (c || 1) ? [{ value: a + b + c, msg: 'Počty možností sa nesčítavajú. Ku každej polievke môžeš zvoliť každé hlavné jedlo – použi pravidlo súčinu.' }] : [],
        answer: a * b * (c || 1),
        q: `V jedálni si môžeš vybrať z ${a} polievok${c ? ',' : ' a'} ${b} hlavných jedál${c ? ` a ${c} dezertov` : ''}. Koľko rôznych obedov zostavíš, ak si vezmeš jednu polievku${c ? ', jedno hlavné jedlo a jeden dezert' : ' a jedno hlavné jedlo'}?`,
        solution: `Ku každej polievke môžeš zvoliť každé hlavné jedlo${c ? ' a ku každej takej dvojici každý dezert' : ''}: $${a}\\cdot ${b}${c ? `\\cdot ${c}` : ''} = ${a * b * (c || 1)}$.`,
        hint: 'Použi pravidlo súčinu: počty možností jednotlivých výberov vynásob.'
      };
    }
    if (t < 0.35) {
      const k = rnd(3, 6), m = rnd(2, 3), rep = Math.random() < 0.5;
      const ds = shuffle(DIGITS).slice(0, k).sort((x, y) => x - y);
      const factors = [];
      for (let i = 0; i < m; i++) factors.push(rep ? k : k - i);
      const ans = factors.reduce((x, y) => x * y, 1);
      let other = 1;
      for (let i = 0; i < m; i++) other *= rep ? k - i : k;
      const places = m === 2 ? ['desiatok', 'jednotiek'] : ['stoviek', 'desiatok', 'jednotiek'];
      return {
        mistakes: [
          { value: other, msg: rep ? 'Číslice sa môžu opakovať, preto máš na každé miesto všetkých ' + k + ' číslic.' : 'Číslice sa nesmú opakovať: na každé ďalšie miesto máš o jednu číslicu menej.' },
          ...(factors.reduce((x, y) => x + y, 0) !== ans ? [{ value: factors.reduce((x, y) => x + y, 0), msg: 'Počty možností na jednotlivé miesta sa nesčítavajú, ale násobia.' }] : [])
        ],
        steps: [
          ...places.map((pn, i) => ({ q: `Koľko možností máš na miesto ${pn}${i && !rep ? ' (keď už sú obsadené predchádzajúce miesta)' : ''}?`, answer: factors[i] })),
          { q: 'Koľko čísel teda vytvoríš?', answer: ans }
        ],
        answer: ans,
        q: `Koľko ${m === 2 ? 'dvojciferných' : 'trojciferných'} čísel vytvoríš z číslic ${ds.join(', ')}, ak sa číslice ${rep ? 'môžu' : 'nesmú'} opakovať?`,
        solution: `Na každé miesto ${rep ? `môžeme dať ktorúkoľvek z daných ${k} číslic` : 'máme o jednu číslicu menej, lebo použitá sa nesmie zopakovať'}: $${factors.join('\\cdot ')} = ${ans}$.`,
        hint: 'Postupne zisti, koľko možností máš na miesto stoviek, desiatok a jednotiek.'
      };
    }
    if (t < 0.5) {
      const n = rnd(4, 12), ans = n * (n - 1) / 2;
      const hm = (game) => [{ value: n * (n - 1), msg: `Každú dvojicu si započítal dvakrát. ${game ? 'Zápas A – B je ten istý' : 'Podanie rúk A – B je to isté'} ako B – A.` },
        { value: n * n, msg: `${game ? 'Nikto nehrá sám so sebou' : 'Nikto si nepodáva ruku sám so sebou'}. Každý má iba ${n - 1} ${game ? 'súperov' : 'partnerov'}.` }];
      const hs = [{ q: 'Ak spočítaš dvojice za každého zvlášť, koľko ich je?', answer: n * (n - 1), hint: `Každý z ${n} má ${n - 1} partnerov.` },
        { q: 'Každú dvojicu si tak počítal dvakrát. Koľko je ich naozaj?', answer: ans }];
      return Math.random() < 0.5 ? {
        mistakes: hm(true), steps: hs,
        answer: ans,
        q: `Na turnaji ${n <= 4 ? 'sú' : 'je'} ${n} ${pl(n, ['družstvo', 'družstvá', 'družstiev'])}. Každé hrá s každým práve jeden zápas. Koľko zápasov sa odohrá?`,
        solution: `Každé družstvo hrá s ${n - 1} ostatnými, to je $${n}\\cdot ${n - 1} = ${n * (n - 1)}$. Každý zápas sme však počítali dvakrát (za oba tímy): $${n * (n - 1)} : 2 = ${ans}$.`,
        hint: 'Každý hrá s každým okrem seba. Nezabudni, že zápas A – B je ten istý ako B – A.'
      } : {
        mistakes: hm(false), steps: hs,
        answer: ans,
        q: `Na stretnutí ${n <= 4 ? 'sa stretli' : 'sa stretlo'} ${n} ${pl(n, ['kamarát', 'kamaráti', 'kamarátov'])} a každý si s každým raz podal ruku. Koľko podaní rúk to bolo?`,
        solution: `Každý podá ruku ${n - 1} ostatným: $${n}\\cdot ${n - 1} = ${n * (n - 1)}$. Každé podanie sme tak započítali dvakrát, preto $${n * (n - 1)} : 2 = ${ans}$.`,
        hint: 'Podanie rúk medzi A a B je to isté ako medzi B a A.'
      };
    }
    if (t < 0.62) {
      const n = rnd(3, 5), f = [];
      for (let i = n; i >= 1; i--) f.push(i);
      const ans = f.reduce((x, y) => x * y, 1), sum = n * (n + 1) / 2;
      return {
        mistakes: [
          ...(sum !== ans ? [{ value: sum, msg: 'Počty možností na jednotlivé miesta sa nesčítavajú, ale násobia.' }] : []),
          { value: n * n, msg: 'Na každé ďalšie miesto zostáva o jedno dieťa menej – to, ktoré už stojí v rade, sa nedá vybrať znova.' }
        ],
        steps: [
          { q: 'Koľko detí môže stáť na prvom mieste?', answer: n },
          { q: 'Koľko detí môže stáť na druhom mieste, keď prvé je už obsadené?', answer: n - 1 },
          { q: 'Koľkými spôsobmi ich teda postavíš do radu?', answer: ans, hint: 'Vynásob počty možností pre všetky miesta.' }
        ],
        answer: ans,
        q: `Koľkými spôsobmi môžeme postaviť do radu ${n} ${pl(n, ['dieťa', 'deti', 'detí'])}?`,
        solution: `Na prvé miesto môže ísť ktorékoľvek z ${n} detí, na druhé už len jedno zo zvyšných ${n - 1} atď.: $${f.join('\\cdot ')} = ${ans}$.`,
        hint: 'Koľko možností máš na prvé miesto, koľko na druhé, …? Potom ich vynásob.'
      };
    }
    if (t < 0.8) {
      const EV = [
        ['párne číslo', [2, 4, 6]], ['nepárne číslo', [1, 3, 5]], ['číslo deliteľné tromi', [3, 6]],
        ['šestka', [6]], ['prvočíslo', [2, 3, 5]], ['číslo menšie ako 3', [1, 2]]
      ];
      const k = rnd(1, 5);
      EV.push([`číslo väčšie ako ${k}`, [1, 2, 3, 4, 5, 6].filter((x) => x > k)]);
      const [name, fav] = pick(EV);
      return {
        mistakes: [
          ...(fav.length < 6 ? [{ value: fav.length / (6 - fav.length), msg: 'V menovateli je počet všetkých výsledkov, nie iba nepriaznivých.' }] : []),
          { value: fav.length, msg: 'Toto je počet priaznivých výsledkov. Pravdepodobnosť je ich podiel s počtom všetkých výsledkov.' }
        ].filter((m) => Math.abs(m.value - fav.length / 6) > 1e-9),
        steps: [
          { q: `Koľko výsledkov je priaznivých (padne ${name})?`, answer: fav.length },
          { q: 'Aká je pravdepodobnosť? Zapíš ju ako zlomok a/b.', answer: fav.length / 6, show: frText(fav.length, 6), placeholder: 'napr. 1/3' }
        ],
        answer: fav.length / 6, show: frText(fav.length, 6), placeholder: 'napr. 1/3',
        q: `Hodíme jednou hracou kockou. Aká je pravdepodobnosť, že padne ${name}? Výsledok zapíš ako zlomok v tvare a/b.`,
        solution: `Všetkých výsledkov je 6, priaznivé sú ${fav.join(', ')} – je ich ${fav.length}. $P = \\frac{${fav.length}}{6}${gcd(fav.length, 6) > 1 ? ` = ${fr(fav.length, 6)}` : ''}$.`,
        hint: 'Vypíš, ktoré čísla na kocke vyhovujú, a vydeľ ich počet šiestimi.'
      };
    }
    const r = rnd(2, 8), m = rnd(2, 8), z = rnd(0, 6), tot = r + m + z;
    const which = pick(z ? ['červenú', 'modrú', 'zelenú'] : ['červenú', 'modrú']);
    const fav = { 'červenú': r, 'modrú': m, 'zelenú': z }[which];
    return {
      mistakes: [{ value: fav / (tot - fav), msg: 'V menovateli je počet všetkých guličiek, nie iba tých ostatných.' }].filter((x) => Math.abs(x.value - fav / tot) > 1e-9),
      steps: [
        { q: 'Koľko guličiek je vo vrecku spolu?', answer: tot },
        { q: `Koľko z nich je priaznivých (${which.replace(/ú$/, 'á')})?`, answer: fav },
        { q: 'Aká je pravdepodobnosť? Zapíš ju ako zlomok a/b.', answer: fav / tot, show: frText(fav, tot), placeholder: 'napr. 2/7' }
      ],
      answer: fav / tot, show: frText(fav, tot), placeholder: 'napr. 2/7',
      q: `Vo vrecku sú guličky: červených je ${r}, modrých ${m}${z ? `, zelených ${z}` : ''}. Naslepo vytiahneme jednu. Aká je pravdepodobnosť, že bude ${which.replace(/ú$/, 'á')}? Výsledok zapíš ako zlomok v tvare a/b.`,
      solution: `Všetkých guličiek je $${r} + ${m}${z ? ` + ${z}` : ''} = ${tot}$, priaznivých je ${fav}. $P = \\frac{${fav}}{${tot}}${gcd(fav, tot) > 1 ? ` = ${fr(fav, tot)}` : ''}$.`,
      hint: 'Pravdepodobnosť = počet priaznivých možností : počet všetkých možností.'
    };
  });
})();
