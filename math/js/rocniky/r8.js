/* 8. ročník: celé a racionálne čísla, mocniny a odmocniny, výrazy a ich úpravy, lineárne rovnice a slovné úlohy,
   kruh a kružnica, hranoly, grafy a štatistika. Pytagorova veta (8. ročník) je v js/content.js pod id 'pytagoras'. */
(function () {
  'use strict';

  const { rnd, pick, gcd, fmt, term, shuffle } = EXERCISES.util;
  const { n1 } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r8' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 rok, 2 roky, 5 rokov.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  const ROK = ['rok', 'roky', 'rokov'];

  const nz = (a, b) => { let v = 0; while (v === 0) v = rnd(a, b); return v; };
  const par = (v) => (v < 0 ? `(${v})` : String(v));            // záporné číslo do zátvorky
  const dc = (x) => fmt(x).replace(',', '{,}');                  // desatinná čiarka v KaTeX
  const lcm = (a, b) => a / gcd(a, b) * b;

  // zlomky: základný tvar, zápis v KaTeX a ako text p/q
  const red = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g, q / g]; };
  const fTex = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${b}}`; };
  const fTxt = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a}/${b}`; };
  const fPar =(p, q) => (p / q < 0 ? `\\left(${fTex(p, q)}\\right)` : fTex(p, q));

  // prvý člen výrazu: x, -x, 3x
  const lead = (c, v) => (c === 1 && v ? v : c === -1 && v ? '-' + v : c + v);
  // mnohočlen v x, koeficienty od najvyššej mocniny: poly([1, -5, 6]) = "x^2 - 5x + 6"
  const poly = (cs, x = 'x') => {
    const n = cs.length - 1;
    let s = '';
    cs.forEach((c, i) => { const d = n - i; s += term(c, d === 0 ? '' : d === 1 ? x : `${x}^${d}`); });
    s = s.trim();
    return !s ? '0' : s[0] === '+' ? s.slice(2) : '-' + s.slice(2);
  };

  /* ---------- kreslenie ---------- */

  // stĺpcový diagram s hodnotami nad stĺpcami
  const barChart = (labels, vals, aria) => {
    const step = Math.max(...vals) <= 12 ? 2 : 5;
    const top = Math.max(step, Math.ceil(Math.max(...vals) / step) * step);
    const base = 200, H = 160, W = 64, x0 = 50;
    const Y = (v) => n1(base - v / top * H);
    const right = x0 + labels.length * W + 10;
    let s = `<svg viewBox="0 0 ${right + 10} 236" role="img" aria-label="${aria}">`;
    for (let v = 0; v <= top; v += step) {
      s += `<line class="f-grid" x1="${x0}" y1="${Y(v)}" x2="${right}" y2="${Y(v)}"/>
        <text class="f-small" x="${x0 - 8}" y="${Y(v) + 4}" text-anchor="end">${v}</text>`;
    }
    labels.forEach((lab, i) => {
      const x = x0 + i * W + 14;
      s += `<rect class="f-fill f-outline" x="${x}" y="${Y(vals[i])}" width="40" height="${n1(vals[i] / top * H)}"/>
        <text class="f-small" x="${x + 20}" y="${Y(vals[i]) - 6}" text-anchor="middle">${vals[i]}</text>
        <text class="f-small" x="${x + 20}" y="${base + 18}" text-anchor="middle">${lab}</text>`;
    });
    return s + `<line class="f-axis" x1="${x0}" y1="${base}" x2="${right}" y2="${base}"/>
      <line class="f-axis" x1="${x0}" y1="${base}" x2="${x0}" y2="${base - H - 10}"/></svg>`;
  };

  // kruhový diagram: parts = [[percentá, triedy], …]
  const pie = (cx, cy, r, parts) => {
    let a0 = -90, s = '';
    const P = (a) => `${n1(cx + r * Math.cos(a * Math.PI / 180))} ${n1(cy + r * Math.sin(a * Math.PI / 180))}`;
    parts.forEach(([pct, cls]) => {
      const a1 = a0 + pct * 3.6;
      s += `<path class="${cls}" d="M${cx} ${cy} L${P(a0)} A${r} ${r} 0 ${pct > 50 ? 1 : 0} 1 ${P(a1)} Z"/>`;
      a0 = a1;
    });
    return s;
  };

  /* ---------- obrázky ---------- */

  fig('r8-obory', {
    draw: () => `<svg viewBox="0 0 440 230" role="img" aria-label="Množiny prirodzených, celých a racionálnych čísel">
      <rect class="f-fill3 f-outline3" x="8" y="8" width="424" height="214" rx="18"/>
      <rect class="f-fill2 f-outline2" x="26" y="48" width="276" height="160" rx="16"/>
      <rect class="f-fill f-outline" x="44" y="88" width="150" height="106" rx="14"/>
      <text class="f-text" x="22" y="34">ℚ – racionálne čísla</text>
      <text class="f-text" x="40" y="74">ℤ – celé čísla</text>
      <text class="f-text" x="58" y="114">ℕ – prirodzené</text>
      <text class="f-math" x="70" y="160">1</text><text class="f-math" x="100" y="148">2</text>
      <text class="f-math" x="128" y="176">7</text><text class="f-math" x="156" y="152">25</text>
      <text class="f-math" x="226" y="110">−3</text><text class="f-math" x="252" y="150">0</text>
      <text class="f-math" x="214" y="186">−12</text>
      <text class="f-math" x="328" y="96">1/2</text><text class="f-math" x="350" y="140">−0,75</text>
      <text class="f-math" x="318" y="190">2,5</text><text class="f-math" x="382" y="190">−7/3</text></svg>`
  });

  fig('r8-mocniny', {
    draw: () => {
      let s = '<svg viewBox="0 0 440 210" role="img" aria-label="Druhá mocnina ako štvorec, tretia mocnina ako kocka">';
      for (let i = 0; i < 9; i++) {
        s += `<rect class="f-fill f-outline" x="${40 + (i % 3) * 36}" y="${40 + Math.floor(i / 3) * 36}" width="36" height="36"/>`;
      }
      s += '<text class="f-text" x="94" y="180" text-anchor="middle">3² = 3 · 3 = 9</text>';
      const x = 270, y = 70, a = 100, d = 40;
      s += `<polygon class="f-fill3 f-outline3" points="${x},${y} ${x + d},${y - d} ${x + a + d},${y - d} ${x + a},${y}"/>
        <polygon class="f-fill2 f-outline2" points="${x + a},${y} ${x + a + d},${y - d} ${x + a + d},${y + a - d} ${x + a},${y + a}"/>
        <rect class="f-fill f-outline" x="${x}" y="${y}" width="${a}" height="${a}"/>
        <line class="f-thin" x1="${x + a / 2}" y1="${y}" x2="${x + a / 2}" y2="${y + a}"/>
        <line class="f-thin" x1="${x}" y1="${y + a / 2}" x2="${x + a}" y2="${y + a / 2}"/>
        <line class="f-thin" x1="${x + a / 2}" y1="${y}" x2="${x + a / 2 + d}" y2="${y - d}"/>
        <line class="f-thin" x1="${x + d / 2}" y1="${y - d / 2}" x2="${x + a + d / 2}" y2="${y - d / 2}"/>
        <line class="f-thin" x1="${x + a + d / 2}" y1="${y - d / 2}" x2="${x + a + d / 2}" y2="${y + a - d / 2}"/>
        <line class="f-thin" x1="${x + a}" y1="${y + a / 2}" x2="${x + a + d}" y2="${y + a / 2 - d}"/>
        <text class="f-text" x="${x + (a + d) / 2}" y="198" text-anchor="middle">2³ = 2 · 2 · 2 = 8</text>`;
      return s + '</svg>';
    }
  });

  fig('r8-obdlznik', {
    draw: () => `<svg viewBox="0 0 360 180" role="img" aria-label="Obdĺžnik so stranami a a a plus 3">
      <rect class="f-fill f-outline" x="60" y="30" width="230" height="110"/>
      <text class="f-math" x="175" y="164" text-anchor="middle">a + 3</text>
      <text class="f-math" x="300" y="92">a</text>
      <text class="f-text" x="175" y="91" text-anchor="middle">S = a(a + 3)</text></svg>`
  });

  fig('r8-dlazdice', {
    draw: () => `<svg viewBox="0 0 290 256" role="img" aria-label="Štvorec so stranou a plus b rozdelený na štyri časti">
      <rect class="f-fill f-outline" x="40" y="24" width="150" height="150"/>
      <rect class="f-fill2 f-outline2" x="190" y="24" width="70" height="150"/>
      <rect class="f-fill2 f-outline2" x="40" y="174" width="150" height="70"/>
      <rect class="f-fill3 f-outline3" x="190" y="174" width="70" height="70"/>
      <text class="f-math" x="115" y="105" text-anchor="middle">a²</text>
      <text class="f-math" x="225" y="105" text-anchor="middle">ab</text>
      <text class="f-math" x="115" y="215" text-anchor="middle">ab</text>
      <text class="f-math" x="225" y="215" text-anchor="middle">b²</text>
      <text class="f-math" x="115" y="17" text-anchor="middle">a</text>
      <text class="f-math" x="225" y="17" text-anchor="middle">b</text>
      <text class="f-math" x="26" y="105" text-anchor="middle">a</text>
      <text class="f-math" x="26" y="215" text-anchor="middle">b</text></svg>`
  });

  fig('r8-vahy', {
    draw: () => {
      let s = `<svg viewBox="0 0 440 240" role="img" aria-label="Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo">
        <polygon class="f-tri" points="220,70 198,200 242,200"/>
        <line class="f-line" x1="170" y1="200" x2="270" y2="200"/>
        <line class="f-line" x1="110" y1="70" x2="330" y2="70"/>
        <circle class="f-solid" cx="220" cy="70" r="5"/>
        <line class="f-thin" x1="110" y1="70" x2="40" y2="152"/><line class="f-thin" x1="110" y1="70" x2="180" y2="152"/>
        <line class="f-thin" x1="330" y1="70" x2="260" y2="152"/><line class="f-thin" x1="330" y1="70" x2="400" y2="152"/>
        <line class="f-line" x1="34" y1="152" x2="186" y2="152"/><line class="f-line" x1="254" y1="152" x2="406" y2="152"/>
        <rect class="f-fill f-outline" x="46" y="118" width="32" height="32" rx="4"/><text class="f-math" x="62" y="140" text-anchor="middle">x</text>
        <rect class="f-fill f-outline" x="84" y="118" width="32" height="32" rx="4"/><text class="f-math" x="100" y="140" text-anchor="middle">x</text>`;
      [134, 154, 174].forEach((cx) => { s += `<circle class="f-fill3 f-outline3" cx="${cx}" cy="141" r="9"/>`; });
      [282, 300, 318, 336, 354].forEach((cx) => { s += `<circle class="f-fill3 f-outline3" cx="${cx}" cy="141" r="9"/>`; });
      [291, 309, 327, 345].forEach((cx) => { s += `<circle class="f-fill3 f-outline3" cx="${cx}" cy="123" r="9"/>`; });
      return s + '<text class="f-text" x="220" y="228" text-anchor="middle">2x + 3 = 9</text></svg>';
    }
  });

  fig('r8-kruh', {
    draw: () => `<svg viewBox="0 0 440 250" role="img" aria-label="Kruh so stredom, polomerom, priemerom a výsekom">
      <circle class="f-fill f-outline" cx="150" cy="130" r="100"/>
      <path class="f-fill2 f-outline2" d="M150 130 L250 130 A100 100 0 0 0 200 43.4 Z"/>
      <line class="f-accent" x1="79.3" y1="59.3" x2="220.7" y2="200.7"/>
      <line class="f-line" x1="150" y1="130" x2="250" y2="130"/>
      <path class="f-warn" d="M175 130 A25 25 0 0 0 162.5 108.3"/>
      <circle class="f-solid" cx="150" cy="130" r="4"/>
      <text class="f-math" x="134" y="152">S</text>
      <text class="f-math" x="196" y="150">r</text>
      <text class="f-math c-accent" x="118" y="88">d</text>
      <text class="f-math" x="178" y="120">α</text>
      <text class="f-math" x="56" y="226">k</text>
      <text class="f-text" x="282" y="80">S – stred</text>
      <text class="f-text" x="282" y="108">r – polomer</text>
      <text class="f-text c-accent" x="282" y="136">d = 2r – priemer</text>
      <text class="f-text c-ok" x="282" y="164">výsek s uhlom α</text>
      <text class="f-text" x="282" y="192">k – kružnica</text></svg>`
  });

  fig('r8-siet', {
    draw: () => `<svg viewBox="0 0 420 236" role="img" aria-label="Sieť kvádra">
      <rect class="f-fill2 f-outline2" x="150" y="10" width="120" height="40"/>
      <rect class="f-fill f-outline" x="150" y="50" width="120" height="60"/>
      <rect class="f-fill2 f-outline2" x="110" y="50" width="40" height="60"/>
      <rect class="f-fill2 f-outline2" x="270" y="50" width="40" height="60"/>
      <rect class="f-fill2 f-outline2" x="150" y="110" width="120" height="40"/>
      <rect class="f-fill f-outline" x="150" y="150" width="120" height="60"/>
      <text class="f-small" x="210" y="84" text-anchor="middle">podstava</text>
      <text class="f-small" x="210" y="184" text-anchor="middle">podstava</text>
      <text class="f-math" x="210" y="228" text-anchor="middle">a</text>
      <text class="f-math" x="140" y="186" text-anchor="end">b</text>
      <text class="f-math" x="280" y="36">c</text></svg>`
  });

  fig('r8-stlpce', {
    draw: () => barChart(['1', '2', '3', '4', '5'], [5, 8, 6, 3, 1], 'Stĺpcový diagram známok z písomky')
  });

  fig('r8-kolac', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Kruhový diagram dopravy do školy">
      ${pie(110, 110, 90, [[50, 'f-fill f-outline'], [30, 'f-fill2 f-outline2'], [20, 'f-fill3 f-outline3']])}
      <rect class="f-fill f-outline" x="230" y="58" width="18" height="18"/><text class="f-text" x="256" y="72">pešo 50 %</text>
      <rect class="f-fill2 f-outline2" x="230" y="98" width="18" height="18"/><text class="f-text" x="256" y="112">autobusom 30 %</text>
      <rect class="f-fill3 f-outline3" x="230" y="138" width="18" height="18"/><text class="f-text" x="256" y="152">na bicykli 20 %</text></svg>`
  });

  /* ---------- 1. Celé a racionálne čísla ---------- */

  lesson({
    id: 'r8-cisla', order: 10, title: 'Celé a racionálne čísla',
    summary: 'Záporné čísla, opačné číslo, absolútna hodnota a počítanie so zlomkami so znamienkom.',
    theory: [
      `<p><strong>Prirodzené čísla</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ používame pri počítaní predmetov. Ak k nim pridáme nulu
       a čísla opačné ($-1, -2, -3, \\dots$), dostaneme <strong>celé čísla</strong> $\\mathbb{Z}$. <strong>Racionálne čísla</strong> $\\mathbb{Q}$
       sú všetky čísla, ktoré sa dajú zapísať ako zlomok $\\frac{p}{q}$ ($p$ celé, $q$ prirodzené), napríklad $\\frac{3}{4}$,
       $-2{,}5 = -\\frac{5}{2}$ alebo $7 = \\frac{7}{1}$.</p>`,
      { fig: 'r8-obory', caption: 'Každé prirodzené číslo je celé a každé celé číslo je racionálne: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$.' },
      `<p><strong>Opačné číslo</strong> k číslu $a$ je $-a$: k číslu $5$ je to $-5$, k číslu $-3$ je to $3$. <strong>Absolútna hodnota</strong> $|a|$
       je vzdialenosť čísla od nuly na číselnej osi, preto nikdy nie je záporná: $|-7| = 7$, $|7| = 7$.</p>`,
      `<p><strong>Počítanie so znamienkami:</strong> odčítať číslo znamená pripočítať opačné číslo: $4 - (-6) = 4 + 6 = 10$.
       Pri násobení a delení dajú rovnaké znamienka kladný výsledok a rôzne znamienka záporný: $(-3)\\cdot(-4) = 12$, $(-20) : 5 = -4$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $-8 - (-5) + 2\\cdot(-3)$.',
        steps: ['Najprv násobenie: $2\\cdot(-3) = -6$ (rôzne znamienka, výsledok je záporný).',
          'Odčítanie záporného čísla nahradíme pripočítaním: $-8 - (-5) = -8 + 5 = -3$.',
          'Nakoniec $-3 + (-6) = -9$.', '<strong>Výsledok: $-9$</strong>'] },
      { task: 'Porovnaj čísla $-\\frac{3}{4}$ a $-0{,}7$.',
        steps: ['Zlomok prevedieme na desatinné číslo: $-\\frac{3}{4} = -0{,}75$.',
          'Číslo $-0{,}75$ je ďalej od nuly na zápornej strane, leží teda na číselnej osi viac vľavo.',
          '<strong>$-\\frac{3}{4} &lt; -0{,}7$</strong>'] }
    ]
  });

  gen('r8-cisla', () => {
    const t = Math.random();
    if (t < 0.35) {
      const a = nz(-15, 15), b = nz(-12, 12), k = rnd(0, 3);
      const sgn = (a < 0) === (b < 0) ? 'rovnaké, výsledok je kladný' : 'rôzne, výsledok je záporný';
      if (k === 0) {
        return {
          signed: true, answer: a + b, q: `Vypočítaj $${a} + ${par(b)}$.`,
          solution: b < 0
            ? `Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: $${a} + ${par(b)} = ${a} - ${-b} = ${a + b}$.`
            : `$${a} + ${b} = ${a + b}$.`,
          hint: 'Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.'
        };
      }
      if (k === 1) {
        return {
          signed: true, answer: a - b, q: `Vypočítaj $${a} - ${par(b)}$.`,
          solution: `Odčítať číslo znamená pripočítať opačné číslo: $${a} - ${par(b)} = ${a} + ${par(-b)} = ${a - b}$.`,
          hint: 'Odčítanie nahraď pripočítaním opačného čísla.'
        };
      }
      if (k === 2) {
        return {
          signed: true, answer: a * b, q: `Vypočítaj $${par(a)}\\cdot ${par(b)}$.`,
          solution: `$${Math.abs(a)}\\cdot ${Math.abs(b)} = ${Math.abs(a * b)}$ a znamienka sú ${sgn}: $${par(a)}\\cdot ${par(b)} = ${a * b}$.`,
          hint: 'Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.'
        };
      }
      return {
        signed: true, answer: a, q: `Vypočítaj $${a * b} : ${par(b)}$.`,
        solution: `$${Math.abs(a * b)} : ${Math.abs(b)} = ${Math.abs(a)}$ a znamienka sú ${(a * b < 0) === (b < 0) ? 'rovnaké, výsledok je kladný' : 'rôzne, výsledok je záporný'}: $${a * b} : ${par(b)} = ${a}$.`,
        hint: 'Pri delení platí rovnaké pravidlo znamienok ako pri násobení.'
      };
    }
    if (t < 0.55) {
      const a = nz(-20, 20);
      let b = nz(-20, 20);
      if (Math.random() < 0.5) {
        return {
          signed: true, answer: Math.abs(a) - Math.abs(b), q: `Vypočítaj $|${a}| - |${b}|$.`,
          solution: `$|${a}| = ${Math.abs(a)}$ a $|${b}| = ${Math.abs(b)}$, teda $${Math.abs(a)} - ${Math.abs(b)} = ${Math.abs(a) - Math.abs(b)}$.`,
          hint: 'Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.'
        };
      }
      if (b === a) b = -a;
      return {
        answer: Math.abs(a - b), q: `Na číselnej osi ležia čísla $${a}$ a $${b}$. Aká je ich vzdialenosť?`,
        solution: `Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|${a} - ${par(b)}| = |${a - b}| = ${Math.abs(a - b)}$.`,
        hint: 'Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.'
      };
    }
    if (t < 0.78) {
      const q1 = pick([2, 4, 5, 8, 10]), p1 = nz(-2 * q1 + 1, 2 * q1 - 1);
      const V1 = p1 * 1000 / q1;                                        // v tisícinách
      const V2 = Math.random() < 0.2 ? V1 : Math.round(V1 / 100) * 100 + pick([-200, -100, 0, 100, 200]);
      const fr = fTex(p1, q1), de = dc(V2 / 1000);
      const left = Math.random() < 0.5;
      const L = left ? V1 : V2, R = left ? V2 : V1;
      const ans = L < R ? '<' : L > R ? '>' : '=';
      const sym = ans === '<' ? '&lt;' : ans === '>' ? '&gt;' : '=';
      const [LS, RS] = left ? [fr, de] : [de, fr];
      return {
        type: 'choice', options: ['<', '=', '>'], answer: ans,
        q: `Doplň správny znak: $${LS} \\;\\square\\; ${RS}$`,
        solution: `Zlomok prevedieme na desatinné číslo: $${fr} = ${dc(V1 / 1000)}$. Porovnávame $${dc(L / 1000)}$ a $${dc(R / 1000)}$, preto $${LS} ${sym} ${RS}$.`,
        hint: 'Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.'
      };
    }
    let [a, b] = red(nz(-7, 7), pick([2, 3, 4, 5, 6]));
    let [c, d] = red(nz(-7, 7), pick([2, 3, 4, 6, 8]));
    if (b === 1) b = 3;
    if (d === 1) d = 4;
    [a, b] = red(a, b);
    [c, d] = red(c, d);
    const op = pick(['+', '-', '·']);
    const L = lcm(b, d), A = a * L / b, C = c * L / d;
    const [P, Q] = op === '+' ? [A + C, L] : op === '-' ? [A - C, L] : [a * c, b * d];
    const expr = `${fTex(a, b)} ${op === '·' ? '\\cdot' : op} ${fPar(c, d)}`;
    return {
      signed: true, answer: P / Q, show: fTxt(P, Q),
      q: `Vypočítaj $${expr}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.`,
      solution: op === '·'
        ? `Čitateľ násobíme čitateľom a menovateľ menovateľom: $${expr} = ${a * c < 0 ? '-' : ''}\\frac{${Math.abs(a * c)}}{${b * d}}${gcd(a * c, b * d) > 1 ? ` = ${fTex(P, Q)}` : ''}$.`
        : `Spoločný menovateľ je ${L}: $${expr} = \\frac{${A} ${op} ${par(C)}}{${L}} = ${fTex(P, Q)}$.`,
      hint: 'Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.'
    };
  });

  /* ---------- 2. Mocniny a odmocniny ---------- */

  lesson({
    id: 'r8-mocniny', order: 20, title: 'Mocniny a odmocniny',
    summary: 'Druhá a tretia mocnina, druhá odmocnina, odhad odmocniny a zápis veľkých čísel.',
    theory: [
      `<p><strong>Mocnina</strong> $a^n$ je skrátený zápis súčinu $n$ rovnakých činiteľov: $a^n = a\\cdot a\\cdot\\ldots\\cdot a$.
       Číslo $a$ je <em>základ</em> a $n$ je <em>exponent</em> (mocniteľ). Napríklad $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$.</p>`,
      { fig: 'r8-mocniny', caption: 'Druhá mocnina je obsah štvorca: štvorec so stranou 3 má $3^2 = 9$ štvorčekov. Tretia mocnina je objem kocky: kocka s hranou 2 sa skladá z $2^3 = 8$ kociek.' },
      `<p><strong>Pozor na znamienko:</strong> $(-3)^2 = (-3)\\cdot(-3) = 9$, ale $-3^2 = -(3\\cdot 3) = -9$.
       Párna mocnina záporného čísla je kladná, nepárna záporná: $(-2)^3 = -8$.</p>`,
      `<p><strong>Druhá odmocnina</strong> z nezáporného čísla $a$ je nezáporné číslo $b$, pre ktoré $b^2 = a$. Píšeme $\\sqrt{a} = b$,
       napríklad $\\sqrt{49} = 7$ a $\\sqrt{0{,}09} = 0{,}3$. Veľké čísla zapisujeme v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$:
       $45\\,000 = 4{,}5\\cdot 10^4$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $(-2)^3 + 3^2 - \\sqrt{64}$.',
        steps: ['$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$.', '$3^2 = 9$ a $\\sqrt{64} = 8$, lebo $8^2 = 64$.',
          '$-8 + 9 - 8 = -7$.', '<strong>Výsledok: $-7$</strong>'] },
      { task: 'Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{50}$?',
        steps: ['Hľadáme druhé mocniny okolo čísla 50: $7^2 = 49$ a $8^2 = 64$.',
          'Keďže $49 &lt; 50 &lt; 64$, platí $7 &lt; \\sqrt{50} &lt; 8$.',
          '<strong>$\\sqrt{50}$ leží medzi číslami 7 a 8</strong> (veľmi blízko k 7).'] }
    ]
  });

  const grp = (N) => String(N).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');

  gen('r8-mocniny', () => {
    const t = Math.random();
    if (t < 0.3) {
      const k = rnd(0, 2);
      if (k === 0) {
        const a = nz(-12, 15);
        return {
          signed: true, answer: a * a, q: `Vypočítaj $${par(a)}^2$.`,
          solution: `$${par(a)}^2 = ${par(a)}\\cdot ${par(a)} = ${a * a}$.`,
          hint: 'Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.'
        };
      }
      if (k === 1) {
        const a = nz(-5, 6);
        return {
          signed: true, answer: a * a * a, q: `Vypočítaj $${par(a)}^3$.`,
          solution: `$${par(a)}^3 = ${par(a)}\\cdot ${par(a)}\\cdot ${par(a)} = ${a * a * a}$.`,
          hint: 'Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.'
        };
      }
      const a = rnd(2, 9), inside = Math.random() < 0.5;
      return {
        signed: true, answer: inside ? a * a : -a * a, q: `Vypočítaj $${inside ? `(-${a})` : `-${a}`}^2$.`,
        solution: inside
          ? `Umocňujeme celé číslo $-${a}$: $(-${a})^2 = (-${a})\\cdot(-${a}) = ${a * a}$.`
          : `Bez zátvorky sa umocňuje len číslo ${a}, mínus ostáva pred výsledkom: $-${a}^2 = -(${a}\\cdot ${a}) = -${a * a}$.`,
        hint: 'Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.'
      };
    }
    if (t < 0.55) {
      const k = rnd(0, 2);
      if (k === 0) {
        const n = rnd(2, 20);
        return {
          answer: n, q: `Vypočítaj $\\sqrt{${n * n}}$.`,
          solution: `$\\sqrt{${n * n}} = ${n}$, lebo $${n}^2 = ${n * n}$.`,
          hint: 'Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.'
        };
      }
      if (k === 1) {
        const a = rnd(2, 12), b = rnd(2, 12);
        return {
          signed: true, answer: a - b, q: `Vypočítaj $\\sqrt{${a * a}} - \\sqrt{${b * b}}$.`,
          solution: `$\\sqrt{${a * a}} = ${a}$ a $\\sqrt{${b * b}} = ${b}$, teda $${a} - ${b} = ${a - b}$.`,
          hint: 'Najprv vypočítaj každú odmocninu zvlášť.'
        };
      }
      const n = rnd(1, 9);
      return {
        answer: n / 10, q: `Vypočítaj $\\sqrt{${dc(n * n / 100)}}$.`,
        solution: `$\\sqrt{${dc(n * n / 100)}} = ${dc(n / 10)}$, lebo $${dc(n / 10)}^2 = ${dc(n * n / 100)}$.`,
        hint: `Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{${n * n}}$ a vydeľ 10.`
      };
    }
    if (t < 0.78) {
      let n = rnd(3, 200);
      while (Number.isInteger(Math.sqrt(n))) n = rnd(3, 200);
      const a = Math.floor(Math.sqrt(n));
      return {
        type: 'tuple', answer: [a, a + 1], placeholder: 'napr. 4; 5',
        q: `Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{${n}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.`,
        solution: `$${a}^2 = ${a * a}$ a $${a + 1}^2 = ${(a + 1) * (a + 1)}$. Keďže $${a * a} &lt; ${n} &lt; ${(a + 1) * (a + 1)}$, platí $${a} &lt; \\sqrt{${n}} &lt; ${a + 1}$.`,
        hint: 'Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.'
      };
    }
    let m10 = rnd(11, 99);
    if (m10 % 10 === 0) m10 += 1;
    const e = rnd(3, 8), N = m10 * Math.pow(10, e - 1);
    return {
      type: 'tuple', answer: [m10 / 10, e], placeholder: 'a; n',
      q: `Zapíš číslo $${grp(N)}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.`,
      solution: `Desatinnú čiarku posunieme o ${e} ${pl(e, ['miesto', 'miesta', 'miest'])} doľava, aby pred ňou ostala jediná nenulová číslica: $${grp(N)} = ${dc(m10 / 10)}\\cdot 10^{${e}}$.`,
      hint: 'Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.'
    };
  });

  /* ---------- 3. Výrazy s premennými ---------- */

  lesson({
    id: 'r8-vyrazy', order: 30, title: 'Výrazy s premennými',
    summary: 'Čo je premenná, dosadzovanie do výrazu a zápis slovného opisu výrazom.',
    theory: [
      `<p><strong>Premenná</strong> je písmeno (napríklad $x$, $a$, $n$), ktoré zastupuje ľubovoľné číslo. <strong>Výraz s premennou</strong>
       spája čísla a premenné počtovými operáciami, napríklad $3x + 5$ alebo $2(a - 1)$. Medzi číslom a premennou znak násobenia
       nepíšeme: $3x$ znamená $3\\cdot x$.</p>`,
      `<p><strong>Hodnotu výrazu</strong> vypočítame tak, že za premennú dosadíme číslo. Záporné číslo dosadzujeme do zátvorky:
       pre $x = -2$ je $x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$.</p>`,
      { fig: 'r8-obdlznik', caption: 'Obdĺžnik so stranami $a$ a $a + 3$ má obvod $o = 2a + 2(a + 3)$ a obsah $S = a(a + 3)$. Pre $a = 4$ je $o = 22$ a $S = 28$.' },
      `<p><strong>Zápis slovami:</strong> „dvojnásobok čísla $x$“ je $2x$, „číslo o 5 väčšie ako $x$“ je $x + 5$, „tretina čísla $x$“ je $\\frac{x}{3}$,
       „druhá mocnina súčtu čísel $a$ a $b$“ je $(a + b)^2$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj hodnotu výrazu $2x^2 - 5x + 1$ pre $x = -3$.',
        steps: ['Dosadíme $-3$ do zátvoriek: $2\\cdot(-3)^2 - 5\\cdot(-3) + 1$.',
          '$(-3)^2 = 9$, teda $2\\cdot 9 = 18$; ďalej $-5\\cdot(-3) = 15$.', '$18 + 15 + 1 = 34$.',
          '<strong>Hodnota výrazu je 34.</strong>'] },
      { task: 'Zapíš výrazom: „číslo o 4 menšie ako trojnásobok čísla $n$“.',
        steps: ['Trojnásobok čísla $n$ je $3n$.', '„O 4 menšie“ znamená odčítať 4.', '<strong>$3n - 4$</strong>'] }
    ]
  });

  const NAS = [[2, 'dvojnásobok', 'dvojnásobku'], [3, 'trojnásobok', 'trojnásobku'], [4, 'štvornásobok', 'štvornásobku'], [5, 'päťnásobok', 'päťnásobku']];
  const mulSub = (c, x) => (c === 1 ? par(x) : c === -1 ? `-${par(x)}` : `${c}\\cdot ${par(x)}`);

  gen('r8-vyrazy', () => {
    const t = Math.random();
    if (t < 0.45) {
      const x = nz(-6, 6), k = rnd(0, 3);
      if (k === 0) {
        const a = nz(-9, 9), b = nz(-12, 12), v = a * x + b;
        return {
          signed: true, answer: v, q: `Vypočítaj hodnotu výrazu $${lead(a, 'x')}${term(b)}$ pre $x = ${x}$.`,
          solution: `$${mulSub(a, x)}${term(b)} = ${a * x}${term(b)} = ${v}$.`,
          hint: 'Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.'
        };
      }
      if (k === 1) {
        const b = rnd(-6, 6), c = nz(-9, 9), v = x * x + b * x + c;
        const bs = b === 0 ? '' : ` ${b > 0 ? '+' : '-'} ${mulSub(Math.abs(b), x)}`;
        return {
          signed: true, answer: v, q: `Vypočítaj hodnotu výrazu $${poly([1, b, c])}$ pre $x = ${x}$.`,
          solution: `$${par(x)}^2${bs}${term(c)} = ${x * x}${term(b * x)}${term(c)} = ${v}$.`,
          hint: 'Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.'
        };
      }
      if (k === 2) {
        const a = pick([-4, -3, -2, 2, 3, 4, 5]), b = nz(-8, 8), v = a * (x + b);
        return {
          signed: true, answer: v, q: `Vypočítaj hodnotu výrazu $${a}(x${term(b)})$ pre $x = ${x}$.`,
          solution: `$${a}\\cdot(${x}${term(b)}) = ${a}\\cdot ${par(x + b)} = ${v}$.`,
          hint: 'Najprv vypočítaj, čo je v zátvorke, potom násob.'
        };
      }
      const y = nz(-6, 6), a = nz(-6, 6), b = nz(-6, 6), v = a * x + b * y;
      return {
        signed: true, answer: v, q: `Vypočítaj hodnotu výrazu $${lead(a, 'x')}${term(b, 'y')}$ pre $x = ${x}$ a $y = ${y}$.`,
        solution: `$${mulSub(a, x)} ${b > 0 ? '+' : '-'} ${mulSub(Math.abs(b), y)} = ${a * x}${term(b * y)} = ${v}$.`,
        hint: 'Dosaď za obe premenné naraz, záporné čísla do zátvoriek.'
      };
    }
    if (t < 0.8) {
      const [m, nom, gen2] = pick(NAS);
      let k = rnd(2, 9);
      if (k === m) k += 1;
      const T = [
        [`číslo o ${k} väčšie ako ${nom} čísla $x$`, `${m}x + ${k}`, [`${m}(x + ${k})`, `${k}x + ${m}`, `${m}x - ${k}`]],
        [`${nom} súčtu čísla $x$ a čísla ${k}`, `${m}(x + ${k})`, [`${m}x + ${k}`, `x + ${m * k}`, `${m} + x + ${k}`]],
        [`rozdiel ${gen2} čísla $x$ a čísla ${k}`, `${m}x - ${k}`, [`${m}(x - ${k})`, `${k} - ${m}x`, `x - ${m * k}`]],
        [`druhá mocnina rozdielu čísla $x$ a čísla ${k}`, `(x - ${k})^2`, [`x^2 - ${k * k}`, `x^2 - ${k}`, `2(x - ${k})`]],
        [`číslo o ${k} menšie ako polovica čísla $x$`, `\\frac{x}{2} - ${k}`, [`\\frac{x - ${k}}{2}`, `2x - ${k}`, `${k} - \\frac{x}{2}`]]
      ];
      const [desc, ok, wrong] = pick(T);
      const opts = shuffle([ok, ...wrong].map((s) => `$${s}$`));
      return {
        type: 'choice', options: opts, answer: `$${ok}$`,
        q: `Ktorý výraz zodpovedá opisu: <em>${desc}</em>?`,
        solution: `Opis zodpovedá výrazu $${ok}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.`,
        hint: 'Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.'
      };
    }
    const k = rnd(1, 6), v = rnd(2, 9), obvod = Math.random() < 0.5;
    return {
      answer: obvod ? 4 * v + 2 * k : v * (v + k),
      q: `Obdĺžnik má strany dlhé $a$ a $a + ${k}$ centimetrov. Vypočítaj jeho ${obvod ? 'obvod (v cm)' : 'obsah (v cm²)'} pre $a = ${v}$.`,
      solution: obvod
        ? `$o = 2a + 2(a + ${k}) = 2\\cdot ${v} + 2\\cdot ${v + k} = ${2 * v} + ${2 * (v + k)} = ${4 * v + 2 * k}\\,\\text{cm}$.`
        : `$S = a(a + ${k}) = ${v}\\cdot ${v + k} = ${v * (v + k)}\\,\\text{cm}^2$.`,
      hint: obvod ? 'Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + ' + k + '$.' : 'Obsah obdĺžnika je súčin jeho strán.'
    };
  });

  /* ---------- 4. Úprava algebraických výrazov ---------- */

  lesson({
    id: 'r8-upravy', order: 40, title: 'Úprava algebraických výrazov',
    summary: 'Podobné členy, roznásobenie zátvoriek a vzorce pre druhú mocninu dvojčlena.',
    theory: [
      `<p><strong>Podobné členy</strong> majú rovnakú premennú s rovnakým exponentom, napríklad $3x$ a $-5x$ alebo $2x^2$ a $x^2$.
       Sčítame ich tak, že sčítame koeficienty: $3x - 5x + 2 = -2x + 2$. Nepodobné členy (napríklad $x^2$ a $x$) sčítať nemôžeme.</p>`,
      `<p><strong>Roznásobenie zátvorky:</strong> číslom pred zátvorkou vynásobíme každý člen v zátvorke: $3(2x - 4) = 6x - 12$.
       Mínus pred zátvorkou zmení znamienka všetkých členov: $-(x - 5) = -x + 5$. Dva dvojčleny násobíme „každý člen s každým“:
       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.</p>`,
      { fig: 'r8-dlazdice', caption: 'Štvorec so stranou $a + b$ sa skladá zo štvorca $a^2$, štvorca $b^2$ a dvoch obdĺžnikov $ab$. Preto $(a + b)^2 = a^2 + 2ab + b^2$.' },
      `<p><strong>Vzorce</strong>, ktoré sa oplatí vedieť naspamäť: $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$
       a $(a + b)(a - b) = a^2 - b^2$.</p>`
    ],
    examples: [
      { task: 'Zjednoduš výraz $4(x - 3) - 2(x - 5)$.',
        steps: ['Roznásobíme: $4x - 12 - 2x + 10$ (mínus pred druhou zátvorkou zmení $-5$ na $+10$).',
          'Spojíme podobné členy: $4x - 2x = 2x$ a $-12 + 10 = -2$.', '<strong>$2x - 2$</strong>'] },
      { task: 'Umocni $(x - 4)^2$.',
        steps: ['Použijeme vzorec $(a - b)^2 = a^2 - 2ab + b^2$, kde $a = x$ a $b = 4$.',
          '$x^2 - 2\\cdot x\\cdot 4 + 4^2$.', '<strong>$x^2 - 8x + 16$</strong>'] }
    ]
  });

  gen('r8-upravy', () => {
    const t = Math.random();
    if (t < 0.25) {
      let a1, a2, a3, A;
      do { a1 = nz(-9, 9); a2 = nz(-9, 9); a3 = rnd(-5, 5); A = a1 + a2 + a3; } while (A === 0);
      const b1 = nz(-12, 12), b2 = nz(-12, 12), B = b1 + b2;
      const e = `${lead(a1, 'x')}${term(b1)}${term(a2, 'x')}${term(b2)}${term(a3, 'x')}`;
      return {
        type: 'tuple', signed: true, answer: [A, B], placeholder: 'a; b',
        q: `Zjednoduš výraz $${e}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.`,
        solution: `Členy s $x$: $${lead(a1, 'x')}${term(a2, 'x')}${term(a3, 'x')} = ${lead(A, 'x')}$. Čísla: $${b1}${term(b2)} = ${B}$. Výsledok: $${poly([A, B])}$, teda $a = ${A}$, $b = ${B}$.`,
        hint: 'Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.'
      };
    }
    if (t < 0.5) {
      let m, n, p, q, r, s, A;
      do {
        m = pick([-4, -3, -2, 2, 3, 4, 5]); n = pick([-5, -3, -2, -1, 1, 2, 3, 4]);
        p = nz(-5, 5); q = nz(-7, 7); r = nz(-4, 4); s = nz(-7, 7); A = m * p + n * r;
      } while (A === 0);
      const B = m * q + n * s;
      const e = `${m}(${poly([p, q])}) ${n > 0 ? '+' : '-'} ${Math.abs(n) === 1 ? '' : Math.abs(n)}(${poly([r, s])})`;
      return {
        type: 'tuple', signed: true, answer: [A, B], placeholder: 'a; b',
        q: `Roznásob a zjednoduš $${e}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.`,
        solution: `Roznásobíme: $${poly([m * p, m * q])}${term(n * r, 'x')}${term(n * s)}$. Spojíme podobné členy: $${poly([A, B])}$, teda $a = ${A}$, $b = ${B}$.`,
        hint: 'Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.'
      };
    }
    if (t < 0.75) {
      const a = nz(-8, 8), b = nz(-8, 8);
      return {
        type: 'tuple', signed: true, answer: [a + b, a * b], placeholder: 'p; q',
        q: `Roznásob $(x${term(a)})(x${term(b)})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.`,
        solution: `$(x${term(a)})(x${term(b)}) = x^2${term(b, 'x')}${term(a, 'x')}${term(a * b)} = ${poly([1, a + b, a * b])}$, teda $p = ${a + b}$ a $q = ${a * b}$.`,
        hint: 'Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.'
      };
    }
    const a = rnd(2, 9), k = rnd(0, 2);
    const V = [
      [`(x + ${a})^2`, `x^2 + ${2 * a}x + ${a * a}`, [`x^2 + ${a * a}`, `x^2 + ${a}x + ${a * a}`, `x^2 + ${2 * a}x + ${a}`], '(a + b)^2 = a^2 + 2ab + b^2'],
      [`(x - ${a})^2`, `x^2 - ${2 * a}x + ${a * a}`, [`x^2 - ${a * a}`, `x^2 - ${2 * a}x - ${a * a}`, `x^2 + ${a * a}`], '(a - b)^2 = a^2 - 2ab + b^2'],
      [`(x + ${a})(x - ${a})`, `x^2 - ${a * a}`, [`x^2 + ${a * a}`, `x^2 - ${2 * a}x + ${a * a}`, `x^2 - ${a}`], '(a + b)(a - b) = a^2 - b^2']
    ][k];
    return {
      type: 'choice', options: shuffle([V[1], ...V[2]].map((s) => `$${s}$`)), answer: `$${V[1]}$`,
      q: `Ktorý výraz sa rovná $${V[0]}$?`,
      solution: `Podľa vzorca $${V[3]}$ pre $a = x$, $b = ${a}$: $${V[0]} = ${V[1]}$.`,
      hint: 'Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.'
    };
  });

  /* ---------- 5. Lineárne rovnice ---------- */

  lesson({
    id: 'r8-rovnice', order: 50, title: 'Lineárne rovnice',
    summary: 'Ekvivalentné úpravy, rovnice so zátvorkami a skúška správnosti.',
    theory: [
      `<p><strong>Rovnica</strong> je zápis rovnosti dvoch výrazov, v ktorom je neznáma, napríklad $2x + 3 = 9$. <strong>Vyriešiť rovnicu</strong>
       znamená nájsť číslo (koreň), po ktorého dosadení platí rovnosť. Koreň tejto rovnice je $x = 3$, lebo $2\\cdot 3 + 3 = 9$.</p>`,
      { fig: 'r8-vahy', caption: 'Rovnica je ako váhy v rovnováhe: vľavo sú dve vrecúška s neznámou hmotnosťou $x$ a tri závažia, vpravo deväť závaží. Ak z oboch misiek zoberieme 3 závažia, váhy ostanú v rovnováhe: $2x = 6$, teda $x = 3$.' },
      `<p><strong>Ekvivalentné úpravy</strong> nemenia riešenie rovnice: k obom stranám môžeme pripočítať (alebo od nich odčítať) to isté číslo
       či výraz a obe strany môžeme vynásobiť alebo vydeliť tým istým nenulovým číslom. Cieľom je dostať neznámu osamote na jednu stranu.</p>`,
      `<p><strong>Postup:</strong> 1. odstránime zátvorky, 2. členy s neznámou presunieme na jednu stranu a čísla na druhú,
       3. obe strany vydelíme koeficientom pri neznámej, 4. urobíme <strong>skúšku</strong> dosadením do pôvodnej rovnice.</p>`
    ],
    examples: [
      { task: 'Vyrieš rovnicu $5x - 7 = 2x + 8$.',
        steps: ['Od oboch strán odčítame $2x$: $3x - 7 = 8$.', 'K obom stranám pripočítame 7: $3x = 15$.',
          'Obe strany vydelíme 3: $x = 5$.', 'Skúška: ľavá strana $5\\cdot 5 - 7 = 18$, pravá strana $2\\cdot 5 + 8 = 18$ ✓'] },
      { task: 'Vyrieš rovnicu $3(x + 2) = x - 4$.',
        steps: ['Roznásobíme zátvorku: $3x + 6 = x - 4$.', 'Odčítame $x$ a potom 6: $2x = -10$.', 'Vydelíme 2: $x = -5$.',
          'Skúška: $3\\cdot(-5 + 2) = -9$ a $-5 - 4 = -9$ ✓'] }
    ]
  });

  const A_COEF = [-9, -8, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9];

  gen('r8-rovnice', () => {
    const x = rnd(-10, 10), k = rnd(0, 3);
    const hint = 'Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.';
    if (k === 0) {
      const a = pick(A_COEF), b = nz(-20, 20), c = a * x + b;
      return {
        signed: true, answer: x, hint, q: `Vyrieš rovnicu $${a}x${term(b)} = ${c}$.`,
        solution: `${b > 0 ? `Od oboch strán odčítame ${b}` : `K obom stranám pripočítame ${-b}`}: $${a}x = ${a * x}$. Obe strany vydelíme číslom $${a}$: $x = ${x}$.`
      };
    }
    if (k === 1) {
      let a, c;
      do { a = nz(-9, 9); c = nz(-9, 9); } while (a === c);
      const b = nz(-15, 15), d = a * x + b - c * x;
      return {
        signed: true, answer: x, hint, q: `Vyrieš rovnicu $${lead(a, 'x')}${term(b)} = ${lead(c, 'x')}${term(d)}$.`,
        solution: `Členy s $x$ dáme naľavo, čísla napravo: $${lead(a, 'x')}${term(-c, 'x')} = ${d}${term(-b)}$, teda $${lead(a - c, 'x')} = ${d - b}$ a $x = ${x}$.`
      };
    }
    if (k === 2) {
      const m = pick([-3, -2, 2, 3, 4, 5]), p = nz(-6, 6);
      let c = nz(-4, 4);
      if (c === m) c = -c;
      const d = m * (x + p) - c * x;
      return {
        signed: true, answer: x, hint: 'Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.',
        q: `Vyrieš rovnicu $${m}(x${term(p)}) = ${lead(c, 'x')}${term(d)}$.`,
        solution: `Roznásobíme: $${lead(m, 'x')}${term(m * p)} = ${lead(c, 'x')}${term(d)}$. Členy s $x$ naľavo, čísla napravo: $${lead(m - c, 'x')} = ${d - m * p}$, teda $x = ${x}$.`
      };
    }
    const a = rnd(2, 5), X = a * rnd(-6, 6), b = nz(-9, 9), c = X / a + b;
    return {
      signed: true, answer: X, hint: 'Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.',
      q: `Vyrieš rovnicu $\\frac{x}{${a}}${term(b)} = ${c}$.`,
      solution: `$\\frac{x}{${a}} = ${c}${term(-b)} = ${X / a}$. Obe strany vynásobíme ${a}: $x = ${X}$.`
    };
  });

  /* ---------- 6. Slovné úlohy riešené rovnicami ---------- */

  lesson({
    id: 'r8-slovne', order: 60, title: 'Slovné úlohy riešené rovnicami',
    summary: 'Ako z textu zostaviť rovnicu: čísla, vek, obvod a delenie peňazí.',
    theory: [
      `<p>Slovnú úlohu riešime rovnicou v piatich krokoch:</p>
       <ol><li>Neznámu veličinu označíme písmenom (napríklad $x$) a zapíšeme, čo znamená.</li>
       <li>Ostatné veličiny vyjadríme pomocou $x$.</li><li>Zostavíme rovnicu podľa toho, čo sa v úlohe rovná.</li>
       <li>Rovnicu vyriešime.</li><li>Urobíme skúšku <em>podľa textu úlohy</em> a napíšeme odpoveď.</li></ol>`,
      `<p>Užitočné zápisy: „o 5 viac“ je $x + 5$, „trikrát viac“ je $3x$, „tri po sebe idúce čísla“ sú $x$, $x + 1$, $x + 2$,
       „obvod obdĺžnika“ je $2a + 2b$.</p>`,
      `<p>Skúšku robíme podľa zadania, nie dosadením do vlastnej rovnice. Ak by sme rovnicu zostavili zle, skúška v rovnici by chybu neodhalila.</p>`
    ],
    examples: [
      { task: 'Súčet troch po sebe idúcich prirodzených čísel je 48. Ktoré sú to čísla?',
        steps: ['Najmenšie číslo označíme $x$, ďalšie sú $x + 1$ a $x + 2$.',
          'Rovnica: $x + (x + 1) + (x + 2) = 48$, teda $3x + 3 = 48$.', '$3x = 45$, $x = 15$.',
          'Skúška: $15 + 16 + 17 = 48$ ✓', '<strong>Odpoveď: Sú to čísla 15, 16 a 17.</strong>'] },
      { task: 'Mama je o 26 rokov staršia ako dcéra. Spolu majú 50 rokov. Koľko rokov má dcéra?',
        steps: ['Vek dcéry je $x$, vek mamy $x + 26$.', 'Rovnica: $x + (x + 26) = 50$, teda $2x + 26 = 50$.',
          '$2x = 24$, $x = 12$.', 'Skúška: mama má $12 + 26 = 38$ rokov a $12 + 38 = 50$ ✓',
          '<strong>Odpoveď: Dcéra má 12 rokov.</strong>'] }
    ]
  });

  // [dospelý, jeho genitív, dieťa, jeho genitív, starší/staršia, rozsah vekového rozdielu]
  const FAMILY = [
    ['otec', 'otca', 'syn', 'syna', 'starší', 24, 40], ['mama', 'mamy', 'dcéra', 'dcéry', 'staršia', 22, 38],
    ['babka', 'babky', 'vnučka', 'vnučky', 'staršia', 45, 60], ['dedko', 'dedka', 'vnuk', 'vnuka', 'starší', 45, 62]
  ];
  const cap = (s) => s[0].toUpperCase() + s.slice(1);
  const KIDS = [
    { n: 'Ema', f: true }, { n: 'Jakub', f: false }, { n: 'Sofia', f: true }, { n: 'Martin', f: false },
    { n: 'Lucia', f: true }, { n: 'Samuel', f: false }, { n: 'Natália', f: true }, { n: 'Filip', f: false }
  ];
  const KRAT = { 2: 'dvakrát', 3: 'trikrát', 4: 'štyrikrát', 5: 'päťkrát' };
  const verb = (kid, m, f) => (kid.f ? f : m);

  gen('r8-slovne', () => {
    const kind = rnd(0, 3);
    if (kind === 0) {
      const n = pick([3, 4]), x = rnd(5, 60), c = n * (n - 1) / 2, S = n * x + c, big = Math.random() < 0.5;
      return {
        answer: big ? x + n - 1 : x,
        q: `Súčet ${n === 3 ? 'troch' : 'štyroch'} po sebe idúcich prirodzených čísel je ${S}. Ktoré z nich je ${big ? 'najväčšie' : 'najmenšie'}?`,
        solution: `Čísla označíme $x$, $x + 1$${n === 4 ? ', $x + 2$ a $x + 3$' : ' a $x + 2$'}. Rovnica: $${n}x + ${c} = ${S}$, teda $${n}x = ${n * x}$ a $x = ${x}$. ${big ? `Najväčšie číslo je $x + ${n - 1} = ${x + n - 1}$.` : `Najmenšie číslo je ${x}.`}`,
        hint: 'Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.'
      };
    }
    if (kind === 1) {
      const [big, bigG, child, childG, older, dmin, dmax] = pick(FAMILY);
      const c = rnd(5, 16), d = rnd(dmin, dmax), S = 2 * c + d, askChild = Math.random() < 0.6;
      return {
        answer: askChild ? c : c + d,
        q: `${cap(big)} je o ${d} ${pl(d, ROK)} ${older} ako ${child}. Spolu majú ${S} ${pl(S, ROK)}. Koľko rokov má ${askChild ? child : big}?`,
        solution: `Vek ${childG} označíme $x$, vek ${bigG} je potom $x + ${d}$. Rovnica: $x + (x + ${d}) = ${S}$, teda $2x = ${2 * c}$ a $x = ${c}$. ${askChild ? `${cap(child)} má ${c} ${pl(c, ROK)}.` : `${cap(big)} má $${c} + ${d} = ${c + d}$ ${pl(c + d, ROK)}.`}`,
        hint: 'Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.'
      };
    }
    if (kind === 2) {
      const x = rnd(3, 20), d = rnd(1, 10), o = 4 * x + 2 * d, long = Math.random() < 0.5;
      return {
        answer: long ? x + d : x,
        q: `Jedna strana obdĺžnika je o ${d} cm dlhšia ako druhá. Obvod obdĺžnika je ${o} cm. Aká dlhá je ${long ? 'dlhšia' : 'kratšia'} strana (v cm)?`,
        solution: `Kratšia strana je $x$, dlhšia $x + ${d}$. Rovnica: $2x + 2(x + ${d}) = ${o}$, teda $4x + ${2 * d} = ${o}$, $4x = ${4 * x}$ a $x = ${x}$. ${long ? `Dlhšia strana má $${x} + ${d} = ${x + d}\\,\\text{cm}$.` : `Kratšia strana má $${x}\\,\\text{cm}$.`}`,
        hint: 'Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.'
      };
    }
    const A = pick(KIDS), B = pick(KIDS.filter((k) => k !== A));
    const x = rnd(3, 30), m = rnd(2, 5), S = (m + 1) * x;
    return {
      answer: x,
      q: `${A.n} a ${B.n} ušetrili spolu ${S} €. ${B.n} ${verb(B, 'ušetril', 'ušetrila')} ${KRAT[m]} viac ako ${A.n}. Koľko eur ${verb(A, 'ušetril', 'ušetrila')} ${A.n}?`,
      solution: `${A.n}: $x$, ${B.n}: $${m}x$. Rovnica: $x + ${m}x = ${S}$, teda $${m + 1}x = ${S}$ a $x = ${x}$. ${A.n} ${verb(A, 'ušetril', 'ušetrila')} ${x} €.`,
      hint: `Sumu, ktorú ${verb(A, 'ušetril', 'ušetrila')} ${A.n}, označ $x$. „${KRAT[m][0].toUpperCase() + KRAT[m].slice(1)} viac“ znamená ${m}-násobok.`
    };
  });

  /* ---------- 8. Kruh a kružnica (poradie 70 má lekcia 'pytagoras') ---------- */

  lesson({
    id: 'r8-kruh', order: 80, title: 'Kruh a kružnica',
    summary: 'Polomer a priemer, dĺžka kružnice, obsah kruhu, kruhový výsek a medzikružie.',
    theory: [
      `<p><strong>Kružnica</strong> $k$ so stredom $S$ a polomerom $r$ je množina všetkých bodov roviny, ktoré majú od bodu $S$ vzdialenosť $r$ –
       je to len „čiara“. <strong>Kruh</strong> tvorí kružnica spolu s celou plochou vo vnútri. <strong>Priemer</strong> je úsečka, ktorá prechádza
       stredom a spája dva body kružnice; jeho dĺžka je $d = 2r$.</p>`,
      { fig: 'r8-kruh', caption: 'Stred $S$, polomer $r$, priemer $d = 2r$ a kruhový výsek s uhlom $\\alpha$.' },
      `<p><strong>Dĺžka kružnice</strong> (obvod kruhu) je $o = 2\\pi r = \\pi d$, <strong>obsah kruhu</strong> je $S = \\pi r^2$.
       Číslo $\\pi$ je pomer obvodu a priemeru ľubovoľného kruhu, $\\pi \\approx 3{,}14$.</p>`,
      `<p><strong>Kruhový výsek</strong> s uhlom $\\alpha$ je časť kruhu medzi dvoma polomermi, jeho obsah je $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$.
       <strong>Medzikružie</strong> je plocha medzi dvoma sústrednými kružnicami s polomermi $R &gt; r$: $S = \\pi (R^2 - r^2)$.</p>`
    ],
    examples: [
      { task: 'Koleso bicykla má priemer $70\\,\\text{cm}$. Akú dráhu prejde pri jednom otočení? Použi $\\pi \\approx 3{,}14$.',
        steps: ['Pri jednom otočení prejde koleso dĺžku svojej kružnice: $o = \\pi d$.',
          '$o \\approx 3{,}14\\cdot 70 = 219{,}8\\,\\text{cm}$.',
          '<strong>Koleso prejde asi $219{,}8\\,\\text{cm}$, teda približne $2{,}2\\,\\text{m}$.</strong>'] },
      { task: 'Vypočítaj obsah štvrtiny kruhu s polomerom $10\\,\\text{cm}$ ($\\pi \\approx 3{,}14$).',
        steps: ['Štvrtina kruhu je výsek s uhlom $90^\\circ$, teda $\\frac{90}{360} = \\frac{1}{4}$ kruhu.',
          'Obsah celého kruhu: $S = \\pi r^2 \\approx 3{,}14\\cdot 100 = 314\\,\\text{cm}^2$.',
          '<strong>Štvrtina: $314 : 4 = 78{,}5\\,\\text{cm}^2$.</strong>'] }
    ]
  });

  // výsledok k·π počítaný s π ≈ 3,14; tolerancia prijme aj presné π
  const piAns = (k) => ({ answer: Math.round(314 * k) / 100, tol: 0.002 * k + 0.01 });
  const PI = 'Použi $\\pi \\approx 3{,}14$.';

  gen('r8-kruh', () => {
    const t = Math.random();
    if (t < 0.3) {
      const r = rnd(2, 25), useD = Math.random() < 0.5, A = piAns(2 * r);
      return Object.assign(A, {
        q: `Kruh má ${useD ? `priemer $d = ${2 * r}\\,\\text{cm}$` : `polomer $r = ${r}\\,\\text{cm}$`}. Vypočítaj jeho obvod v cm. ${PI}`,
        solution: useD
          ? `$o = \\pi d \\approx 3{,}14\\cdot ${2 * r} = ${dc(A.answer)}\\,\\text{cm}$.`
          : `$o = 2\\pi r \\approx 2\\cdot 3{,}14\\cdot ${r} = ${dc(A.answer)}\\,\\text{cm}$.`,
        hint: 'Obvod kruhu je $o = 2\\pi r = \\pi d$.'
      });
    }
    if (t < 0.6) {
      const r = rnd(2, 20), useD = Math.random() < 0.4, A = piAns(r * r);
      return Object.assign(A, {
        q: `Kruh má ${useD ? `priemer $d = ${2 * r}\\,\\text{cm}$` : `polomer $r = ${r}\\,\\text{cm}$`}. Vypočítaj jeho obsah v cm². ${PI}`,
        solution: `${useD ? `Polomer je polovica priemeru: $r = ${r}\\,\\text{cm}$. ` : ''}$S = \\pi r^2 \\approx 3{,}14\\cdot ${r}^2 = 3{,}14\\cdot ${r * r} = ${dc(A.answer)}\\,\\text{cm}^2$.`,
        hint: useD ? 'Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.' : 'Obsah kruhu je $S = \\pi r^2$.'
      });
    }
    if (t < 0.8) {
      const r = rnd(2, 20), o = Math.round(628 * r) / 100;
      return {
        answer: r, tol: 0.05,
        q: `Obvod kruhu je $${dc(o)}\\,\\text{cm}$. Aký je jeho polomer v cm? ${PI}`,
        solution: `Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{${dc(o)}}{6{,}28} = ${r}\\,\\text{cm}$.`,
        hint: 'Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.'
      };
    }
    if (Math.random() < 0.6) {
      const [al, name] = pick([[90, 'štvrtinu'], [180, 'polovicu'], [60, 'šestinu'], [120, 'tretinu'], [45, 'osminu'], [270, 'tri štvrtiny']]);
      const r = al === 60 || al === 120 ? pick([3, 6, 9, 12]) : al === 45 ? pick([2, 4, 6, 8, 10]) : rnd(2, 12);
      const A = piAns(r * r * al / 360);
      return Object.assign(A, {
        q: `Vypočítaj obsah kruhového výseku s polomerom $r = ${r}\\,\\text{cm}$ a stredovým uhlom $${al}^\\circ$ (v cm²). ${PI}`,
        solution: `Uhol $${al}^\\circ$ je $\\frac{${al}}{360}$ plného uhla, teda výsek je ${name} kruhu: $S = \\pi r^2\\cdot\\frac{${al}}{360} \\approx 3{,}14\\cdot ${r * r}\\cdot\\frac{${al}}{360} = ${dc(A.answer)}\\,\\text{cm}^2$.`,
        hint: 'Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.'
      });
    }
    const r = rnd(2, 8), R = r + rnd(1, 6), A = piAns(R * R - r * r);
    return Object.assign(A, {
      q: `Vypočítaj obsah medzikružia s polomermi $R = ${R}\\,\\text{cm}$ a $r = ${r}\\,\\text{cm}$ (v cm²). ${PI}`,
      solution: `$S = \\pi(R^2 - r^2) \\approx 3{,}14\\cdot(${R * R} - ${r * r}) = 3{,}14\\cdot ${R * R - r * r} = ${dc(A.answer)}\\,\\text{cm}^2$.`,
      hint: 'Od obsahu veľkého kruhu odčítaj obsah malého kruhu.'
    });
  });

  /* ---------- 9. Hranoly ---------- */

  lesson({
    id: 'r8-hranoly', order: 90, title: 'Hranoly – povrch a objem',
    summary: 'Podstava a plášť hranola, sieť kvádra, povrch a objem kvádra, kocky a trojbokého hranola.',
    theory: [
      `<p><strong>Hranol</strong> je teleso, ktoré má dve zhodné a rovnobežné <strong>podstavy</strong> (mnohouholníky) a <strong>plášť</strong>
       zložený z obdĺžnikov – bočných stien. Podľa tvaru podstavy hovoríme o trojbokom, štvorbokom, šesťbokom… hranole.
       Kváder a kocka sú štvorboké hranoly.</p>`,
      { fig: 'r8-siet', caption: 'Sieť kvádra s rozmermi $a$, $b$, $c$: dve podstavy $a\\times b$ (modré) a štyri bočné steny plášťa (zelené).' },
      `<p><strong>Objem</strong> hranola: $V = S_p\\cdot v$ (obsah podstavy krát výška). Pre kváder $V = a\\cdot b\\cdot c$, pre kocku $V = a^3$.
       Objem meriame v kubických jednotkách; $1\\,\\text{dm}^3 = 1\\,\\text{l}$ a $1\\,\\text{cm}^3 = 1\\,\\text{ml}$.</p>`,
      `<p><strong>Povrch</strong> je súčet obsahov všetkých stien: $S = 2\\cdot S_p + S_{pl}$, kde obsah plášťa je $S_{pl} = o_p\\cdot v$
       (obvod podstavy krát výška). Pre kváder $S = 2(ab + bc + ac)$, pre kocku $S = 6a^2$.</p>`
    ],
    examples: [
      { task: 'Kváder má rozmery $a = 5\\,\\text{cm}$, $b = 3\\,\\text{cm}$, $c = 4\\,\\text{cm}$. Vypočítaj jeho povrch a objem.',
        steps: ['$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$.',
          '$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$.'] },
      { task: 'Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami $3\\,\\text{cm}$ a $4\\,\\text{cm}$ (prepona má $5\\,\\text{cm}$) a výšku $10\\,\\text{cm}$. Vypočítaj jeho povrch a objem.',
        steps: ['Obsah podstavy: $S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$.', 'Objem: $V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$.',
          'Plášť: $S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$.', 'Povrch: $S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$.'] }
    ]
  });

  gen('r8-hranoly', () => {
    const t = Math.random();
    if (t < 0.3) {
      const a = rnd(2, 12), b = rnd(2, 12), c = rnd(2, 12);
      const S = 2 * (a * b + b * c + a * c), V = a * b * c;
      return {
        type: 'tuple', answer: [S, V], placeholder: 'povrch; objem',
        q: `Kváder má rozmery $a = ${a}\\,\\text{cm}$, $b = ${b}\\,\\text{cm}$, $c = ${c}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.`,
        solution: `$S = 2(ab + bc + ac) = 2(${a * b} + ${b * c} + ${a * c}) = ${S}\\,\\text{cm}^2$; $V = abc = ${a}\\cdot ${b}\\cdot ${c} = ${V}\\,\\text{cm}^3$.`,
        hint: 'Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.'
      };
    }
    if (t < 0.55) {
      const a = rnd(2, 12), k = rnd(0, 3);
      if (k === 0) {
        return { answer: 6 * a * a, q: `Vypočítaj povrch kocky s hranou $${a}\\,\\text{cm}$ (v cm²).`,
          solution: `Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot ${a * a} = ${6 * a * a}\\,\\text{cm}^2$.`,
          hint: 'Kocka má 6 stien, každá je štvorec so stranou $a$.' };
      }
      if (k === 1) {
        return { answer: a * a * a, q: `Vypočítaj objem kocky s hranou $${a}\\,\\text{cm}$ (v cm³).`,
          solution: `$V = a^3 = ${a}\\cdot ${a}\\cdot ${a} = ${a * a * a}\\,\\text{cm}^3$.`,
          hint: 'Objem kocky je $a^3$.' };
      }
      if (k === 2) {
        return { answer: a, q: `Kocka má objem $${a * a * a}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?`,
          solution: `Hľadáme číslo, ktorého tretia mocnina je ${a * a * a}: $${a}^3 = ${a * a * a}$, teda $a = ${a}\\,\\text{cm}$.`,
          hint: 'Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.' };
      }
      return { answer: a, q: `Kocka má povrch $${6 * a * a}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?`,
        solution: `Jedna stena má obsah $${6 * a * a} : 6 = ${a * a}\\,\\text{cm}^2$, teda $a = \\sqrt{${a * a}} = ${a}\\,\\text{cm}$.`,
        hint: 'Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.' };
    }
    if (t < 0.8) {
      const [p, q, r] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 6, 10]]);
      const v = rnd(2, 15), Sp = p * q / 2, V = Sp * v, S = 2 * Sp + (p + q + r) * v;
      const askBoth = Math.random() < 0.4, askV = Math.random() < 0.5;
      const base = `Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami $${p}\\,\\text{cm}$ a $${q}\\,\\text{cm}$ (prepona má $${r}\\,\\text{cm}$) a výšku $${v}\\,\\text{cm}$.`;
      const sol = `$S_p = \\frac{${p}\\cdot ${q}}{2} = ${Sp}\\,\\text{cm}^2$. $V = S_p\\cdot v = ${Sp}\\cdot ${v} = ${V}\\,\\text{cm}^3$. Plášť: $(${p} + ${q} + ${r})\\cdot ${v} = ${(p + q + r) * v}\\,\\text{cm}^2$, povrch $S = 2\\cdot ${Sp} + ${(p + q + r) * v} = ${S}\\,\\text{cm}^2$.`;
      const hint = 'Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.';
      if (askBoth) {
        return { type: 'tuple', answer: [S, V], placeholder: 'povrch; objem', hint, solution: sol,
          q: `${base} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.` };
      }
      return { answer: askV ? V : S, hint, solution: sol, q: `${base} Vypočítaj jeho ${askV ? 'objem (v cm³)' : 'povrch (v cm²)'}.` };
    }
    const a = 10 * rnd(3, 10), b = 10 * rnd(2, 5), c = 10 * rnd(2, 6), L = a * b * c / 1000;
    return {
      answer: L,
      q: `Akvárium tvaru kvádra má vnútorné rozmery ${a} cm, ${b} cm a ${c} cm. Koľko litrov vody sa doň zmestí?`,
      solution: `Rozmery prevedieme na decimetre: $${a / 10}\\,\\text{dm}$, $${b / 10}\\,\\text{dm}$, $${c / 10}\\,\\text{dm}$. $V = ${a / 10}\\cdot ${b / 10}\\cdot ${c / 10} = ${L}\\,\\text{dm}^3 = ${L}\\,\\text{l}$.`,
      hint: 'Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.'
    };
  });

  /* ---------- 10. Grafy, tabuľky a štatistika ---------- */

  lesson({
    id: 'r8-statistika', order: 100, title: 'Grafy, tabuľky a štatistika',
    summary: 'Stĺpcový a kruhový diagram, aritmetický priemer, modus a medián.',
    theory: [
      `<p>Údaje zbierame do <strong>tabuliek</strong> a znázorňujeme <strong>diagramami</strong>. Stĺpcový diagram dobre porovnáva počty,
       kruhový diagram ukazuje, akú časť celku tvorí každá skupina.</p>`,
      { fig: 'r8-stlpce', caption: 'Stĺpcový diagram: známky z písomky v triede s 23 žiakmi. Najviac žiakov dostalo dvojku.' },
      { fig: 'r8-kolac', caption: 'Kruhový diagram: ako sa žiaci dopravujú do školy. Polovica chodí pešo, 30 % autobusom a 20 % na bicykli.' },
      `<p><strong>Aritmetický priemer</strong> je súčet všetkých hodnôt vydelený ich počtom. <strong>Modus</strong> je hodnota, ktorá sa vyskytuje
       najčastejšie. <strong>Medián</strong> je prostredná hodnota, keď údaje usporiadame podľa veľkosti; pri párnom počte údajov je to
       priemer dvoch prostredných hodnôt.</p>`
    ],
    examples: [
      { task: 'Teploty počas piatich dní boli $12$, $15$, $9$, $15$ a $14\\,{}^\\circ\\text{C}$. Urči priemer, modus a medián.',
        steps: ['Priemer: $\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$.',
          'Modus: najčastejšie sa vyskytuje $15\\,{}^\\circ\\text{C}$.',
          'Medián: usporiadame $9, 12, 14, 15, 15$; prostredná hodnota je $14\\,{}^\\circ\\text{C}$.'] },
      { task: 'Z diagramu známok vypočítaj priemernú známku triedy.',
        steps: ['Súčet všetkých známok: $1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$.',
          'Počet žiakov: $5 + 8 + 6 + 3 + 1 = 23$.', '<strong>Priemer: $56 : 23 \\approx 2{,}43$.</strong>'] }
    ]
  });

  // [úvod, popisy stĺpcov, otázka na súčet, otázka na najvyšší stĺpec]
  const CHARTS = [
    ['Žiaci hlasovali o obľúbenom ovocí.', ['jablko', 'hruška', 'banán', 'slivka', 'jahoda'],
      'Koľko žiakov hlasovalo spolu?', 'Ktoré ovocie dostalo najviac hlasov?'],
    ['Žiaci uviedli svoj obľúbený šport.', ['futbal', 'hokej', 'tenis', 'plávanie', 'beh'],
      'Koľko žiakov odpovedalo spolu?', 'Ktorý šport je medzi žiakmi najobľúbenejší?'],
    ['Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.', ['Po', 'Ut', 'St', 'Št', 'Pi'],
      'Koľko kníh si požičali za celý týždeň?', 'V ktorý deň si požičali najviac kníh?']
  ];
  const list = (arr) => arr.join(', ');

  gen('r8-statistika', () => {
    const t = Math.random();
    if (t < 0.3) {
      const [intro, labels, qSum, qMax] = pick(CHARTS);
      let vals;
      do { vals = labels.map(() => rnd(1, 14)); } while (vals.filter((v) => v === Math.max(...vals)).length > 1);
      const chart = barChart(labels, vals, 'stĺpcový diagram');
      const k = rnd(0, 2);
      if (k === 0) {
        const sum = vals.reduce((s, v) => s + v, 0);
        return { answer: sum, q: `${intro} ${qSum} ${chart}`,
          solution: `Sčítame hodnoty všetkých stĺpcov: $${vals.join(' + ')} = ${sum}$.`, hint: 'Sčítaj hodnoty všetkých stĺpcov.' };
      }
      if (k === 1) {
        let i = rnd(0, 4), j = rnd(0, 4);
        while (vals[i] === vals[j]) { i = rnd(0, 4); j = rnd(0, 4); }
        if (vals[i] < vals[j]) [i, j] = [j, i];
        return { answer: vals[i] - vals[j], q: `${intro} O koľko je stĺpec „${labels[i]}“ vyšší ako stĺpec „${labels[j]}“? ${chart}`,
          solution: `$${vals[i]} - ${vals[j]} = ${vals[i] - vals[j]}$.`, hint: 'Odčítaj hodnoty dvoch stĺpcov.' };
      }
      const best = labels[vals.indexOf(Math.max(...vals))];
      return { type: 'choice', options: [...labels], answer: best, q: `${intro} ${qMax} ${chart}`,
        solution: `Najvyšší stĺpec má hodnotu ${Math.max(...vals)} a patrí k možnosti „${best}“. Táto hodnota je modus údajov.`,
        hint: 'Hľadaj najvyšší stĺpec.' };
    }
    if (t < 0.55) {
      const n = rnd(4, 7), vals = Array.from({ length: n - 1 }, () => rnd(1, 20));
      const s = vals.reduce((a, b) => a + b, 0);
      vals.push(((n - s % n) % n || n) + n * rnd(0, 2));
      const sum = s + vals[n - 1];
      return {
        answer: sum / n, q: `Vypočítaj aritmetický priemer čísel ${list(vals)}.`,
        solution: `Súčet je $${vals.join(' + ')} = ${sum}$, počet čísel je ${n}. Priemer: $${sum} : ${n} = ${sum / n}$.`,
        hint: 'Sčítaj všetky čísla a súčet vydeľ ich počtom.'
      };
    }
    if (t < 0.8) {
      const n = rnd(5, 8), vals = Array.from({ length: n }, () => rnd(1, 30));
      const sorted = [...vals].sort((a, b) => a - b);
      const med = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
      return {
        answer: med, q: `Urči medián čísel ${list(vals)}.`,
        solution: `Usporiadame: ${list(sorted)}. ${n % 2
          ? `Počet čísel je nepárny (${n}), medián je prostredné, ${(n + 1) / 2}. číslo: ${med}.`
          : `Počet čísel je párny (${n}), medián je priemer ${n / 2}. a ${n / 2 + 1}. čísla: $\\frac{${sorted[n / 2 - 1]} + ${sorted[n / 2]}}{2} = ${dc(med)}$.`}`,
        hint: 'Čísla najprv usporiadaj od najmenšieho po najväčšie.'
      };
    }
    const mode = rnd(1, 20), others = shuffle(Array.from({ length: 20 }, (_, i) => i + 1).filter((v) => v !== mode)).slice(0, rnd(3, 5));
    const vals = shuffle([mode, mode, mode, ...others]);
    return {
      answer: mode, q: `Urči modus súboru údajov ${list(vals)}.`,
      solution: `Číslo ${mode} sa vyskytuje trikrát, ostatné čísla len raz. Modus je ${mode}.`,
      hint: 'Modus je hodnota, ktorá sa opakuje najčastejšie.'
    };
  });
})();
