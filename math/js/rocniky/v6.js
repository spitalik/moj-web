/* Vysoká škola – Abstraktná algebra: grupy a podgrupy, okruhy a polia, homomorfizmy, polynómy nad poľom,
   kongruencie, teória čísel (Euklidov algoritmus, Eulerova funkcia, Fermatova a Eulerova veta, RSA)
   a základy Galoisovej teórie. Lekcie, generátory úloh a obrázky úrovne 'v6'. */
(function () {
  'use strict';

  const { rnd, pick, gcd, shuffle } = EXERCISES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v6' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  /* ---------- teória čísel ---------- */

  const mod = (a, n) => ((a % n) + n) % n;
  const lcm = (a, b) => a / gcd(a, b) * b;
  const isPrime = (n) => { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
  const factor = (n) => {
    const out = [];
    for (let p = 2; p * p <= n; p++) { let e = 0; while (n % p === 0) { n /= p; e++; } if (e) out.push([p, e]); }
    if (n > 1) out.push([n, 1]);
    return out;
  };
  const phi = (n) => factor(n).reduce((s, [p, e]) => s * (p - 1) * Math.pow(p, e - 1), 1);
  const divisors = (n) => { const d = []; for (let k = 1; k <= n; k++) if (n % k === 0) d.push(k); return d; };
  const powmod = (a, k, n) => { let r = 1 % n, b = mod(a, n); while (k > 0) { if (k & 1) r = r * b % n; b = b * b % n; k = Math.floor(k / 2); } return r; };
  // rozšírený Euklidov algoritmus: [d, x, y] s a·x + b·y = d
  const egcd = (a, b) => {
    let r0 = a, r1 = b, s0 = 1, s1 = 0, t0 = 0, t1 = 1;
    while (r1) { const q = Math.floor(r0 / r1); [r0, r1] = [r1, r0 - q * r1]; [s0, s1] = [s1, s0 - q * s1]; [t0, t1] = [t1, t0 - q * t1]; }
    return [r0, s0, t0];
  };
  const inv = (a, n) => mod(egcd(mod(a, n), n)[1], n);
  const mulOrder = (a, n) => { let k = 1, x = mod(a, n); while (x !== 1) { x = x * a % n; k++; } return k; };
  // riadky Euklidovho algoritmu: "a = q·b + r"
  const euclid = (a, b) => {
    const out = [];
    while (b) { const q = Math.floor(a / b), r = a % b; out.push(`${a} = ${q}\\cdot ${b} + ${r}`); a = b; b = r; }
    return out;
  };
  const factTex = (n) => factor(n).map(([p, e]) => (e > 1 ? `${p}^{${e}}` : String(p))).join('\\cdot ');
  const par = (v) => (v < 0 ? `(${v})` : String(v));
  // binárne umocňovanie s medzivýsledkami
  const powSteps = (a, k, n) => {
    const sq = [];
    let b = mod(a, n);
    for (let e = 1; e <= k; e *= 2) { sq.push([e, b]); b = b * b % n; }
    const used = sq.filter(([e]) => (k & e) !== 0);
    const exps = used.map(([e]) => e);
    return `$${k} = ${exps.slice().reverse().join(' + ')}$; postupným umocňovaním na druhú: `
      + sq.map(([e, v]) => `$${a}^{${e}}\\equiv ${v}$`).join(', ')
      + `. Preto $${a}^{${k}}\\equiv ${used.map(([, v]) => v).reverse().join('\\cdot ')}\\equiv ${powmod(a, k, n)} \\pmod{${n}}$.`;
  };

  /* ---------- polynómy (koeficienty od najvyššej mocniny) ---------- */

  const polyTex = (c, v = 'x') => {
    const n = c.length - 1;
    let s = '';
    c.forEach((a, i) => {
      if (!a) return;
      const k = n - i, A = Math.abs(a);
      const mon = k === 0 ? '' : k === 1 ? v : `${v}^{${k}}`;
      const co = A === 1 && k > 0 ? '' : String(A);
      s += s ? ` ${a < 0 ? '-' : '+'} ${co}${mon}` : `${a < 0 ? '-' : ''}${co}${mon}`;
    });
    return s || '0';
  };
  const trim = (c) => { let i = 0; while (i < c.length - 1 && c[i] === 0) i++; return c.slice(i); };
  const evalP = (c, x, p) => c.reduce((s, a) => mod(s * x + a, p), 0);
  // delenie f : g nad Z_p (g normovaný), vráti podiel, zvyšok a medzikroky
  const polyDiv = (f, g, p) => {
    let r = f.slice();
    const q = new Array(Math.max(f.length - g.length + 1, 1)).fill(0), steps = [];
    while (r.length >= g.length && !(r.length === 1 && r[0] === 0)) {
      const k = r.length - g.length, c = r[0];
      if (c === 0) { r = r.slice(1); continue; }
      q[q.length - 1 - k] = c;
      const sub = g.map((a) => mod(a * c, p)).concat(new Array(k).fill(0));
      r = r.map((a, i) => mod(a - sub[i], p));
      steps.push({ c, k, r: trim(r.slice(1).length ? r.slice(1) : [0]) });
      r = r.slice(1);
      if (!r.length) r = [0];
    }
    return { q, r: trim(r), steps };
  };
  const mono = (c, k) => (k === 0 ? String(c) : `${c === 1 ? '' : c}x${k > 1 ? `^{${k}}` : ''}`);

  /* ---------- obrázky ---------- */

  fig('v6-cayley', {
    controls: [{ id: 'n', label: 'n', min: 2, max: 9, step: 1, value: 6 }],
    draw: (v) => {
      const n = v.n, W = 340, c = Math.min(36, (W - 20) / (n + 1)), x0 = (W - c * (n + 1)) / 2, y0 = 10;
      const t = (x, y, s, cls = 'f-text') => `<text class="${cls}" x="${(x + c / 2).toFixed(1)}" y="${(y + c / 2 + 5).toFixed(1)}" text-anchor="middle">${s}</text>`;
      let s = `<svg viewBox="0 0 ${W} ${(y0 * 2 + c * (n + 1)).toFixed(0)}" role="img" aria-label="Cayleyho tabuľka grupy Z_${n} so sčítaním">`;
      s += `<rect class="f-cell f-fill3" x="${x0.toFixed(1)}" y="${y0}" width="${c.toFixed(1)}" height="${c.toFixed(1)}"/>` + t(x0, y0, '+', 'f-math');
      for (let i = 0; i < n; i++) {
        s += `<rect class="f-cell f-fill2" x="${(x0 + (i + 1) * c).toFixed(1)}" y="${y0}" width="${c.toFixed(1)}" height="${c.toFixed(1)}"/>` + t(x0 + (i + 1) * c, y0, i);
        s += `<rect class="f-cell f-fill2" x="${x0.toFixed(1)}" y="${(y0 + (i + 1) * c).toFixed(1)}" width="${c.toFixed(1)}" height="${c.toFixed(1)}"/>` + t(x0, y0 + (i + 1) * c, i);
      }
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        const val = (i + j) % n, X = x0 + (j + 1) * c, Y = y0 + (i + 1) * c;
        s += `<rect class="f-cell${val === 0 ? ' f-fill f-outline' : ''}" x="${X.toFixed(1)}" y="${Y.toFixed(1)}" width="${c.toFixed(1)}" height="${c.toFixed(1)}"/>` + t(X, Y, val);
      }
      const pairs = [];
      for (let a = 0; a < n; a++) { const b = (n - a) % n; if (a <= b) pairs.push(a === b ? `−${a} = ${a}` : `−${a} = ${b}`); }
      return { svg: s + '</svg>', readout: `ℤ<sub>${n}</sub>: neutrálny prvok 0 · <span class="c-accent">inverzné prvky: ${pairs.join(', ')}</span>` };
    }
  });

  fig('v6-hodiny', {
    controls: [
      { id: 'n', label: 'Modul n', min: 2, max: 16, step: 1, value: 12 },
      { id: 'a', label: 'Generátor a', min: 0, max: 15, step: 1, value: 8 }
    ],
    draw: (v) => {
      const n = v.n, a = v.a % n, R = 120, cx = 170, cy = 150;
      const P = (k, r = R) => [cx + r * Math.sin(2 * Math.PI * k / n), cy - r * Math.cos(2 * Math.PI * k / n)];
      const sub = [];
      let x = 0;
      do { sub.push(x); x = (x + a) % n; } while (x !== 0);
      let s = `<svg viewBox="0 0 340 300" role="img" aria-label="Hodiny modulo ${n}"><circle class="f-thin" cx="${cx}" cy="${cy}" r="${R}"/>`;
      if (sub.length > 1) {
        const pts = sub.concat([0]).map((k) => P(k).map((t) => t.toFixed(1)).join(',')).join(' ');
        s += `<polyline class="f-accent" points="${pts}"/>`;
      }
      for (let k = 0; k < n; k++) {
        const [px, py] = P(k), [lx, ly] = P(k, R + 18), on = sub.includes(k);
        s += `<circle class="${on ? 'f-dot' : 'f-tri'}" cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${on ? 7 : 5}"/>
          <text class="${on ? 'f-text c-accent' : 'f-small'}" x="${lx.toFixed(1)}" y="${(ly + 5).toFixed(1)}" text-anchor="middle">${k}</text>`;
      }
      return {
        svg: s + '</svg>',
        readout: `a = ${v.a} ≡ ${a} (mod ${n}) · <span class="c-accent">⟨${a}⟩ = {${sub.slice().sort((p, q) => p - q).join(', ')}}</span> · rád prvku = ${n} / NSD(${a}, ${n}) = ${sub.length}`
      };
    }
  });

  fig('v6-zvaz', {
    draw: () => {
      const N = { z12: [200, 32, 'ℤ₁₂ = ⟨1⟩', 'rád 12'], g2: [100, 102, '⟨2⟩', 'rád 6'], g3: [300, 102, '⟨3⟩', 'rád 4'],
        g4: [100, 172, '⟨4⟩', 'rád 3'], g6: [300, 172, '⟨6⟩', 'rád 2'], g0: [200, 242, '{0} = ⟨0⟩', 'rád 1'] };
      const E = [['z12', 'g2'], ['z12', 'g3'], ['g2', 'g4'], ['g2', 'g6'], ['g3', 'g6'], ['g4', 'g0'], ['g6', 'g0']];
      let s = '<svg viewBox="0 0 400 276" role="img" aria-label="Zväz podgrúp grupy Z12">';
      E.forEach(([p, q]) => { s += `<line class="f-line" x1="${N[p][0]}" y1="${N[p][1]}" x2="${N[q][0]}" y2="${N[q][1]}"/>`; });
      Object.values(N).forEach(([x, y, t, o]) => {
        s += `<rect class="f-tri" x="${x - 58}" y="${y - 20}" width="116" height="40" rx="8"/>
          <text class="f-text" x="${x}" y="${y - 1}" text-anchor="middle">${t}</text>
          <text class="f-small" x="${x}" y="${y + 14}" text-anchor="middle">${o}</text>`;
      });
      return s + '</svg>';
    }
  });

  /* ---------- lekcie a generátory ---------- */

  // ===== 10: grupy a podgrupy =====
  lesson({
    id: 'v6-grupy', order: 10, title: 'Grupy a podgrupy',
    summary: 'Binárna operácia, grupa, komutatívnosť, grupy ℤₙ a S₃, rád prvku, podgrupy, cyklické grupy a Lagrangeova veta.',
    theory: [
      `<p><strong>Binárna operácia</strong> na množine $G$ je zobrazenie $\\ast: G\\times G\\to G$, ktoré dvojici $(a, b)$ priradí prvok $a\\ast b\\in G$ – výsledok teda z množiny „nevypadne“ (uzavretosť). Dvojica $(G, \\ast)$ je <strong>grupa</strong>, ak platí:</p>
       <ul><li><strong>asociatívnosť</strong>: $(a\\ast b)\\ast c=a\\ast(b\\ast c)$ pre všetky $a, b, c\\in G$;</li>
       <li>existuje <strong>neutrálny prvok</strong> $e$ s $e\\ast a=a\\ast e=a$ pre každé $a$;</li>
       <li>ku každému $a$ existuje <strong>inverzný prvok</strong> $a^{-1}$ s $a\\ast a^{-1}=a^{-1}\\ast a=e$.</li></ul>
       <p>Ak navyše $a\\ast b=b\\ast a$ pre všetky prvky, grupa je <strong>komutatívna (abelovská)</strong>. Neutrálny prvok aj inverzie sú jednoznačné a platí $(ab)^{-1}=b^{-1}a^{-1}$. Príklady: $(\\mathbb{Z}, +)$, $(\\mathbb{Q}\\setminus\\{0\\}, \\cdot)$, regulárne matice $GL_n(\\mathbb{R})$ s násobením (nekomutatívna). Naopak $(\\mathbb{N}, +)$ grupou nie je – chýbajú inverzie.</p>`,
      `<p><strong>Grupa $\\mathbb{Z}_n$</strong> je množina zvyškov $\\{0, 1, \\dots, n-1\\}$ so sčítaním modulo $n$: sčítame ako obvykle a vezmeme zvyšok po delení $n$. Neutrálny prvok je $0$, inverzný k $a$ je $n-a$. Počet prvkov $|G|$ sa nazýva <strong>rád grupy</strong>; $|\\mathbb{Z}_n|=n$. Konečnú grupu prehľadne zapíšeme <strong>Cayleyho tabuľkou</strong> – v každom riadku aj stĺpci sa každý prvok vyskytne práve raz.</p>`,
      { fig: 'v6-cayley', caption: 'Cayleyho tabuľka grupy $(\\mathbb{Z}_n, +)$. Zvýraznené nuly ukazujú dvojice navzájom inverzných prvkov; tabuľka je súmerná podľa diagonály, lebo grupa je komutatívna.' },
      `<p><strong>Symetrická grupa $S_3$</strong> obsahuje všetkých $3!=6$ permutácií množiny $\\{1, 2, 3\\}$ s operáciou skladania $\\circ$ (najprv pravá, potom ľavá). Permutácie zapisujeme dvojriadkovo alebo cyklami, napr. $(1\\,2)$ vymení $1$ a $2$. Pre $\\sigma=(1\\,2)$ a $\\tau=(2\\,3)$ je $\\sigma\\circ\\tau=(1\\,2\\,3)$, ale $\\tau\\circ\\sigma=(1\\,3\\,2)$, preto $S_3$ je <strong>najmenšia nekomutatívna grupa</strong>.</p>
       <p><strong>Rád prvku</strong> $a$ je najmenšie $k\\geq 1$ s $a^k=e$ (v aditívnom zápise $k\\cdot a=0$). V $\\mathbb{Z}_n$ má prvok $a$ rád $\\frac{n}{\\operatorname{NSD}(a, n)}$. Rád permutácie je najmenší spoločný násobok dĺžok jej disjunktných cyklov.</p>`,
      `<p>Podmnožina $H\\subseteq G$ je <strong>podgrupa</strong> ($H\\leq G$), ak je sama grupou s tou istou operáciou; stačí overiť, že $H\\neq\\emptyset$ a pre $a, b\\in H$ je aj $ab^{-1}\\in H$. Pre prvok $a$ je $\\langle a\\rangle=\\{a^k : k\\in\\mathbb{Z}\\}$ najmenšia podgrupa obsahujúca $a$; má toľko prvkov, aký je rád $a$. Grupa je <strong>cyklická</strong>, ak $G=\\langle a\\rangle$ pre nejaký generátor $a$ – napríklad $\\mathbb{Z}_n=\\langle 1\\rangle$.</p>
       <p><strong>Lagrangeova veta:</strong> ak $H$ je podgrupa konečnej grupy $G$, tak $|H|$ delí $|G|$. Dôsledky: rád každého prvku delí $|G|$; grupa prvočíselného rádu je cyklická. V cyklickej grupe $\\mathbb{Z}_n$ existuje ku každému deliteľovi $d$ čísla $n$ práve jedna podgrupa rádu $d$, totiž $\\langle n/d\\rangle$.</p>`,
      { fig: 'v6-zvaz', caption: 'Zväz podgrúp grupy $\\mathbb{Z}_{12}$: čiara spája podgrupu s menšou podgrupou, ktorú obsahuje. Podgrúp je toľko ako deliteľov čísla $12$, teda šesť.' }
    ],
    examples: [
      { task: 'Urči rád prvku $8$ v grupe $(\\mathbb{Z}_{12}, +)$ a vypíš podgrupu $\\langle 8\\rangle$.',
        steps: ['Postupne pripočítavame $8$: $8$, $8+8=16\\equiv 4$, $4+8=12\\equiv 0$.',
                'Nula sa objavila po troch krokoch, teda rád prvku $8$ je $3$. Súhlasí to so vzorcom $\\frac{12}{\\operatorname{NSD}(8, 12)}=\\frac{12}{4}=3$.',
                '<strong>Výsledok:</strong> $\\langle 8\\rangle=\\{0, 4, 8\\}=\\langle 4\\rangle$; jej rád $3$ delí $12$ v súlade s Lagrangeovou vetou.'] },
      { task: 'Môže mať grupa rádu $10$ podgrupu so $4$ prvkami? A prvok rádu $5$?',
        steps: ['Podľa Lagrangeovej vety musí rád podgrupy deliť rád grupy. Číslo $4$ nedelí $10$, takže podgrupa so $4$ prvkami <strong>neexistuje</strong>.',
                'Rád prvku je rád cyklickej podgrupy, ktorú generuje, preto môže byť len $1, 2, 5$ alebo $10$.',
                'Prvok rádu $5$ existovať môže, napr. v $\\mathbb{Z}_{10}$ má prvok $2$ rád $\\frac{10}{2}=5$: $\\langle 2\\rangle=\\{0, 2, 4, 6, 8\\}$.'] }
    ]
  });

  const GROUPS = [
    () => ['(\\mathbb{Z}, +)', 0, 'Súčet celých čísel je celé číslo, sčítanie je asociatívne a komutatívne, neutrálny prvok je $0$ a inverzný k $a$ je $-a$.'],
    () => ['(\\mathbb{N}, +)', 2, 'Neutrálny prvok $0$ síce možno pridať, ale k $a\\geq 1$ neexistuje prirodzené $b$ s $a+b=0$ – chýbajú inverzné prvky.'],
    () => ['(\\mathbb{Z}, \\cdot)', 2, 'Neutrálny prvok je $1$, ale napr. k číslu $2$ neexistuje celé $b$ s $2b=1$ (a k $0$ vôbec nie).'],
    () => ['(\\mathbb{Q}\\setminus\\{0\\}, \\cdot)', 0, 'Súčin nenulových zlomkov je nenulový zlomok, neutrálny prvok je $1$, inverzný k $\\frac{p}{q}$ je $\\frac{q}{p}$ a násobenie je komutatívne.'],
    () => ['(\\mathbb{R}, -)', 2, 'Odčítanie nie je asociatívne: $(1-1)-1=-1$, ale $1-(1-1)=1$.'],
    () => ['(S_3, \\circ)', 1, 'Skladanie permutácií je asociatívne, identita je neutrálna a každá permutácia má inverznú, no $(1\\,2)\\circ(2\\,3)\\neq(2\\,3)\\circ(1\\,2)$.'],
    () => ['(GL_2(\\mathbb{R}), \\cdot)', 1, 'Súčin regulárnych matíc je regulárny ($\\det(AB)=\\det A\\det B\\neq 0$), $I$ je neutrálna, inverzná matica existuje, ale násobenie matíc nie je komutatívne.'],
    () => ['(\\{1, -1, i, -i\\}, \\cdot)', 0, 'Súčin dvoch z týchto čísel je opäť medzi nimi, $1$ je neutrálny prvok, $i^{-1}=-i$, $(-1)^{-1}=-1$ a násobenie komplexných čísel je komutatívne.'],
    () => ['(M_2(\\mathbb{R}), \\cdot)', 2, 'Neutrálny prvok je $I$, ale singulárne matice (napr. nulová) nemajú inverznú maticu.'],
    () => ['(M_2(\\mathbb{R}), +)', 0, 'Matice sa sčítajú po prvkoch, neutrálna je nulová matica, inverzná k $A$ je $-A$; sčítanie je komutatívne.'],
    () => ['(2\\mathbb{Z}, +)', 0, 'Súčet párnych čísel je párny, $0$ je párne a k párnemu $a$ je aj $-a$ párne – ide o podgrupu grupy $(\\mathbb{Z}, +)$.'],
    () => ['(\\{\\text{nepárne celé čísla}\\}, +)', 2, 'Množina nie je uzavretá: súčet dvoch nepárnych čísel je párny, napr. $1+1=2$.'],
    () => { const n = pick([4, 5, 6, 7, 8, 9, 10, 11, 12]); return [`(\\mathbb{Z}_{${n}}, +)`, 0, `Sčítanie modulo ${n} je asociatívne a komutatívne, neutrálny prvok je $0$ a inverzný k $a$ je $${n}-a$.`]; },
    () => { const n = pick([4, 5, 6, 7, 8, 9, 10, 11, 13]); return [`(\\mathbb{Z}_{${n}}, \\cdot)`, 2, 'Prvok $0$ nemá inverzný prvok: $0\\cdot b=0\\neq 1$ pre každé $b$.']; },
    () => {
      const n = pick([5, 6, 7, 8, 9, 10, 11, 12, 13]);
      if (isPrime(n)) return [`(\\mathbb{Z}_{${n}}\\setminus\\{0\\}, \\cdot)`, 0, `Číslo $${n}$ je prvočíslo, preto súčin nenulových zvyškov je nenulový a každý nenulový zvyšok je nesúdeliteľný s $${n}$, má teda inverzný prvok.`];
      const f = factor(n)[0][0];
      return [`(\\mathbb{Z}_{${n}}\\setminus\\{0\\}, \\cdot)`, 2, `Množina nie je uzavretá: $${f}\\cdot ${n / f}=${n}\\equiv 0 \\pmod{${n}}$, hoci oba činitele sú nenulové.`];
    }
  ];

  gen('v6-grupy', () => {
    const k = rnd(0, 4);
    if (k === 0) {
      const n = pick([6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 24, 30]);
      const a = rnd(1, n - 1), d = gcd(a, n), o = n / d;
      const mult = [];
      for (let j = 1; j <= Math.min(o, 6); j++) mult.push(`${j}\\cdot ${a}\\equiv ${j * a % n}`);
      return {
        mistakes: [
          ...(n !== o ? [{ value: n, msg: `Toto je rád celej grupy $\\mathbb{Z}_{${n}}$. Rád prvku je najmenšie $k$ s $k\\cdot ${a}\\equiv 0$ a môže byť menší.` }] : []),
          ...(d !== o && d !== n ? [{ value: d, msg: 'Toto je $\\operatorname{NSD}(a, n)$. Rád prvku je $\\frac{n}{\\operatorname{NSD}(a, n)}$.' }] : [])
        ],
        steps: [
          { q: `Vypočítaj $\\operatorname{NSD}(${a}, ${n})$.`, answer: d },
          { q: `Aký je rád prvku $${a}$?`, answer: o }
        ],
        answer: o,
        q: `Aký je rád prvku $${a}$ v grupe $(\\mathbb{Z}_{${n}}, +)$?`,
        solution: `Rád je najmenšie $k\\geq 1$ s $k\\cdot ${a}\\equiv 0 \\pmod{${n}}$. Platí $\\operatorname{NSD}(${a}, ${n})=${d}$, teda rád je $\\frac{${n}}{${d}}=${o}$.`
          + ` Kontrola: $${mult.join(',\\ ')}${o > 6 ? ',\\ \\dots' : ''}$.`,
        hint: 'V grupe $\\mathbb{Z}_n$ má prvok $a$ rád $\\frac{n}{\\operatorname{NSD}(a, n)}$.'
      };
    }
    if (k === 1) {
      const p = pick([5, 7, 11, 13]), a = rnd(2, p - 1), o = mulOrder(a, p);
      const pw = [];
      for (let j = 1, x = a; j <= o; j++, x = x * a % p) pw.push(`${a}^{${j}}\\equiv ${x}`);
      return {
        mistakes: o !== p - 1 ? [{ value: p - 1, msg: `Toto je rád celej grupy. Rád prvku ho podľa Lagrangeovej vety delí, ale nemusí sa mu rovnať: hľadaj prvú mocninu $${a}$, ktorá dá $1$.` }] : [],
        steps: [
          { q: `Vypočítaj $${a}^{2} \\bmod ${p}$.`, answer: a * a % p },
          { q: `Aký je rád prvku $${a}$?`, answer: o, hint: `Rád delí číslo $${p - 1}$; stačí overiť mocniny s exponentmi, ktoré ho delia.` }
        ],
        answer: o,
        q: `Aký je rád prvku $${a}$ v multiplikatívnej grupe $(\\mathbb{Z}_{${p}}\\setminus\\{0\\}, \\cdot)$?`,
        solution: `Počítame mocniny modulo $${p}$: $${pw.join(',\\ ')}$. Prvá mocnina rovná $1$ je ${o}. mocnina, rád je teda $${o}$ (delí rád grupy $${p - 1}$, ako hovorí Lagrangeova veta).`,
        hint: 'Postupne násob prvkom $a$ a hľadaj prvú mocninu, ktorá dá zvyšok $1$. Rád musí deliť $p-1$.'
      };
    }
    if (k === 2) {
      const n = pick([6, 8, 10, 12, 15, 16, 18, 20, 24, 28, 30, 36]), D = divisors(n);
      return {
        mistakes: [{ value: D.length - 2, msg: 'Započítaj aj triviálnu podgrupu $\\{0\\}$ a celú grupu – aj tie zodpovedajú deliteľom $1$ a $n$.' }],
        answer: D.length,
        q: `Koľko podgrúp má cyklická grupa $(\\mathbb{Z}_{${n}}, +)$ (vrátane triviálnej a celej grupy)?`,
        solution: `V cyklickej grupe rádu $${n}$ zodpovedá každému deliteľovi $d$ čísla $${n}$ práve jedna podgrupa $\\langle ${n}/d\\rangle$ rádu $d$. Delitele sú $${D.join(', ')}$, podgrúp je teda $${D.length}$.`,
        hint: 'Podľa Lagrangeovej vety môže mať podgrupa len rád, ktorý delí $n$; v cyklickej grupe je ku každému deliteľovi práve jedna.'
      };
    }
    if (k === 3) {
      const O = ['komutatívna grupa', 'nekomutatívna grupa', 'nie je grupa'];
      const [t, ans, why] = pick(GROUPS)();
      const GH = [
        ans === 2 ? 'Over všetky axiómy grupy: uzavretosť, asociatívnosť, neutrálny prvok a inverzie. Stačí, aby jedna zlyhala.'
          : 'Over komutatívnosť: skús nájsť dva prvky, pre ktoré $a\\ast b\\neq b\\ast a$.',
        ans === 2 ? 'Komutatívnosť riešime až vtedy, keď je štruktúra grupou. Over najprv axiómy grupy (uzavretosť, neutrálny prvok, inverzie).'
          : 'Over, či sa výsledok operácie naozaj zmení pri výmene poradia operandov.',
        'Over axiómy znova: je operácia uzavretá, existuje neutrálny prvok a má každý prvok inverz?'
      ];
      const choiceHints = {};
      O.forEach((x, i) => { if (i !== ans) choiceHints[x] = GH[i]; });
      return {
        choiceHints,
        type: 'choice', options: O, answer: O[ans],
        q: `Rozhodni o štruktúre $${t}$.`,
        solution: `${why} Odpoveď: <strong>${O[ans]}</strong>.`,
        hint: 'Over uzavretosť, asociatívnosť, existenciu neutrálneho prvku a inverzií; potom komutatívnosť.'
      };
    }
    // rád permutácie zadanej dvojriadkovo
    const n = pick([5, 6, 7]);
    let perm;
    do { perm = shuffle(Array.from({ length: n }, (_, i) => i + 1)); } while (perm.every((x, i) => x === i + 1));
    const seen = new Set(), cyc = [];
    for (let i = 1; i <= n; i++) {
      if (seen.has(i)) continue;
      const c = [];
      let j = i;
      while (!seen.has(j)) { seen.add(j); c.push(j); j = perm[j - 1]; }
      if (c.length > 1) cyc.push(c);
    }
    const o = cyc.reduce((s, c) => lcm(s, c.length), 1);
    const two = `\\begin{pmatrix}${perm.map((_, i) => i + 1).join('&')}\\\\${perm.join('&')}\\end{pmatrix}`;
    const sumL = cyc.reduce((s, c) => s + c.length, 0), prodL = cyc.reduce((s, c) => s * c.length, 1);
    const c1 = cyc.find((c) => c.includes(1));
    return {
      mistakes: [
        ...(sumL !== o ? [{ value: sumL, msg: 'Rád permutácie nie je súčet dĺžok cyklov, ale ich najmenší spoločný násobok.' }] : []),
        ...(prodL !== o && prodL !== sumL ? [{ value: prodL, msg: 'Súčin dĺžok cyklov je len násobok rádu; rád je ich najmenší spoločný násobok.' }] : [])
      ],
      steps: [
        { q: 'Akú dĺžku má cyklus, ktorý obsahuje číslo $1$? (Ak je $1$ pevný bod, zadaj 1.)', answer: c1 ? c1.length : 1 },
        { q: 'Koľko cyklov dĺžky aspoň 2 má rozklad $\\sigma$ na disjunktné cykly?', answer: cyc.length },
        { q: 'Aký je rád permutácie $\\sigma$?', answer: o, hint: 'Rád je NSN dĺžok cyklov.' }
      ],
      answer: o,
      q: `Aký je rád permutácie $\\sigma=${two}$ v grupe $S_{${n}}$?`,
      solution: `Rozklad na disjunktné cykly: $\\sigma=${cyc.map((c) => `(${c.join('\\,')})`).join('')}$, dĺžky cyklov sú $${cyc.map((c) => c.length).join(', ')}$.`
        + ` Rád je ich najmenší spoločný násobok: $${o}$.`,
      hint: 'Sleduj, kam sa postupne zobrazí $1$, potom najmenšie číslo, ktoré ešte nebolo v žiadnom cykle. Rád je NSN dĺžok cyklov.'
    };
  });

  // ===== 20: okruhy a polia =====
  lesson({
    id: 'v6-okruhy', order: 20, title: 'Okruhy a telesá (polia)',
    summary: 'Okruh, obor integrity, delitele nuly, pole, kedy je ℤₙ pole a výpočet inverzných prvkov.',
    theory: [
      `<p><strong>Okruh</strong> $(R, +, \\cdot)$ je množina s dvoma operáciami, kde $(R, +)$ je komutatívna grupa (neutrálny prvok $0$), násobenie je asociatívne a platia <strong>distributívne zákony</strong> $a(b+c)=ab+ac$ a $(a+b)c=ac+bc$. Väčšinou predpokladáme aj <strong>jednotku</strong> $1$ s $1\\cdot a=a\\cdot 1=a$. Ak $ab=ba$ pre všetky prvky, okruh je <strong>komutatívny</strong>.</p>
       <p>Príklady: $\\mathbb{Z}$, $\\mathbb{Q}$, $\\mathbb{R}$, $\\mathbb{Z}_n$ so sčítaním a násobením modulo $n$, polynómy $\\mathbb{R}[x]$ a nekomutatívny okruh matíc $M_2(\\mathbb{R})$. V každom okruhu platí $0\\cdot a=0$ a $(-a)b=-(ab)$.</p>`,
      `<p>Nenulový prvok $a$ je <strong>deliteľ nuly</strong>, ak existuje nenulové $b$ s $ab=0$. V $\\mathbb{Z}_6$ je $2\\cdot 3=0$, takže $2$ aj $3$ sú delitele nuly; v maticiach je $\\begin{pmatrix}0&amp;1\\\\0&amp;0\\end{pmatrix}^2=O$. Komutatívny okruh s jednotkou $1\\neq 0$ bez deliteľov nuly je <strong>obor integrity</strong> – v ňom možno krátiť: z $ab=ac$ a $a\\neq 0$ vyplýva $b=c$. Príklady: $\\mathbb{Z}$, $\\mathbb{Z}[x]$, gaussovské celé čísla $\\mathbb{Z}[i]$.</p>`,
      `<p>Prvok $a$ je <strong>invertibilný</strong>, ak existuje $a^{-1}$ s $a\\,a^{-1}=a^{-1}a=1$. Komutatívny okruh, v ktorom je každý nenulový prvok invertibilný, je <strong>pole</strong> (v slovenskej literatúre aj komutatívne <strong>teleso</strong>; teleso vo všeobecnosti komutatívnosť nevyžaduje). V poli možno deliť nenulovým prvkom. Každé pole je obor integrity: z $ab=0$ a $a\\neq 0$ dostaneme $b=a^{-1}ab=0$. Príklady polí: $\\mathbb{Q}$, $\\mathbb{R}$, $\\mathbb{C}$, $\\mathbb{Q}(\\sqrt2)=\\{a+b\\sqrt2 : a, b\\in\\mathbb{Q}\\}$.</p>`,
      `<p><strong>Kedy je $\\mathbb{Z}_n$ pole.</strong> Prvok $a\\in\\mathbb{Z}_n$ je invertibilný práve vtedy, keď $\\operatorname{NSD}(a, n)=1$; inverz nájdeme rozšíreným Euklidovým algoritmom z rovnosti $ax+ny=1$, potom $a^{-1}=x \\bmod n$. Ak $\\operatorname{NSD}(a, n)=d&gt;1$, tak $a\\cdot\\frac{n}{d}\\equiv 0$, teda $a$ je deliteľ nuly. Preto:</p>
       <p style="text-align:center">$\\mathbb{Z}_n$ je pole $\\iff$ $n$ je prvočíslo.</p>
       <p>Pole $\\mathbb{Z}_p$ označujeme aj $\\mathbb{F}_p$. Počet invertibilných prvkov v $\\mathbb{Z}_n$ je Eulerova funkcia $\\varphi(n)$, ostatných $n-1-\\varphi(n)$ nenulových prvkov sú delitele nuly. Každý konečný obor integrity je pole.</p>`
    ],
    examples: [
      { task: 'Nájdi inverzný prvok k $5$ v poli $\\mathbb{Z}_{17}$.',
        steps: ['Euklidov algoritmus: $17=3\\cdot 5+2$, $5=2\\cdot 2+1$.',
                'Spätne: $1=5-2\\cdot 2=5-2\\cdot(17-3\\cdot 5)=7\\cdot 5-2\\cdot 17$.',
                'Modulo $17$ je teda $7\\cdot 5\\equiv 1$. <strong>Výsledok:</strong> $5^{-1}=7$ v $\\mathbb{Z}_{17}$ (skúška: $35=2\\cdot 17+1$).'] },
      { task: 'Nájdi všetky delitele nuly a všetky invertibilné prvky okruhu $\\mathbb{Z}_{10}$.',
        steps: ['Invertibilné sú prvky nesúdeliteľné s $10$: $1, 3, 7, 9$ (napr. $3\\cdot 7=21\\equiv 1$, $9\\cdot 9=81\\equiv 1$). Je ich $\\varphi(10)=4$.',
                'Ostatné nenulové prvky $2, 4, 5, 6, 8$ sú delitele nuly, napr. $2\\cdot 5=10\\equiv 0$, $4\\cdot 5\\equiv 0$, $6\\cdot 5\\equiv 0$, $8\\cdot 5\\equiv 0$.',
                '<strong>Záver:</strong> $\\mathbb{Z}_{10}$ nie je obor integrity, a teda ani pole – $10$ nie je prvočíslo.'] }
    ]
  });

  const RINGS = [
    () => ['\\mathbb{Z}', 1, 'V $\\mathbb{Z}$ nie sú delitele nuly, ale napr. $2$ nemá celočíselný inverz.'],
    () => ['\\mathbb{Q}', 0, 'Každý nenulový zlomok $\\frac{p}{q}$ má inverz $\\frac{q}{p}$.'],
    () => ['\\mathbb{R}', 0, 'Každé nenulové reálne číslo $a$ má inverz $\\frac1a$.'],
    () => ['\\mathbb{C}', 0, 'Každé nenulové $z$ má inverz $\\frac{\\bar z}{|z|^2}$.'],
    () => ['\\mathbb{Q}(\\sqrt2)', 0, 'Pre $a+b\\sqrt2\\neq 0$ je $\\frac{1}{a+b\\sqrt2}=\\frac{a-b\\sqrt2}{a^2-2b^2}$, kde $a^2-2b^2\\neq 0$, lebo $\\sqrt2$ je iracionálne.'],
    () => ['\\mathbb{Z}[x]', 1, 'Súčin nenulových polynómov je nenulový (stupne sa sčítajú), ale polynóm $x$ nemá inverzný polynóm.'],
    () => ['\\mathbb{R}[x]', 1, 'Delitele nuly nie sú (stupeň súčinu je súčet stupňov), invertibilné sú však len nenulové konštanty – napr. $x$ inverz nemá.'],
    () => ['\\mathbb{Z}[i]', 1, 'Je to podokruh poľa $\\mathbb{C}$, preto nemá delitele nuly; invertibilné sú len $\\pm 1, \\pm i$, napr. $2$ inverz nemá.'],
    () => ['M_2(\\mathbb{R})', 2, 'Napr. $\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}=O$, hoci obe matice sú nenulové.'],
    () => ['\\mathbb{Z}\\times\\mathbb{Z}', 2, 'Operácie po zložkách: $(1, 0)\\cdot(0, 1)=(0, 0)$.'],
    () => {
      const n = pick([5, 7, 11, 13, 17, 19, 23]);
      return [`\\mathbb{Z}_{${n}}`, 0, `Číslo $${n}$ je prvočíslo, preto je každý nenulový zvyšok nesúdeliteľný s $${n}$ a má inverzný prvok.`];
    },
    () => {
      const n = pick([4, 6, 8, 9, 10, 12, 14, 15, 21, 25]), f = factor(n)[0][0];
      return [`\\mathbb{Z}_{${n}}`, 2, `$${f}\\cdot ${n / f}=${n}\\equiv 0 \\pmod{${n}}$, hoci oba činitele sú nenulové.`];
    }
  ];

  gen('v6-okruhy', () => {
    const k = rnd(0, 4);
    if (k === 0) {
      const p = pick([7, 11, 13, 17, 19, 23, 29, 31]), a = rnd(2, p - 1), x = inv(a, p);
      const E = euclid(p, a), [, , t] = egcd(p, a);
      return {
        mistakes: [
          ...(t < 0 ? [{ value: t, msg: `Koeficient z Euklidovho algoritmu je správny, ale výsledok treba zapísať ako zvyšok z $\\{0, \\dots, ${p - 1}\\}$: pripočítaj $${p}$.` }] : []),
          ...(p - x !== x ? [{ value: p - x, msg: 'Pri spätnom dosadzovaní v Euklidovom algoritme si sa pomýlil v znamienku. Urob skúšku: súčin s pôvodným číslom musí dať zvyšok 1.' }] : [])
        ],
        steps: [
          { q: `Prvý krok Euklidovho algoritmu: aký zvyšok dáva $${p}$ po delení číslom $${a}$?`, answer: p % a },
          { q: `Zapíš $${a}^{-1}$ ako číslo z $\\{0, \\dots, ${p - 1}\\}$.`, answer: x }
        ],
        answer: x,
        q: `Nájdi inverzný prvok k $${a}$ v poli $\\mathbb{Z}_{${p}}$. Výsledok zadaj ako číslo z $\\{0, 1, \\dots, ${p - 1}\\}$.`,
        solution: `Euklidov algoritmus: $${E.join(',\\ ')}$. Spätným dosadením dostaneme $1=${par(egcd(p, a)[1])}\\cdot ${p}+${par(t)}\\cdot ${a}$, teda $${a}^{-1}\\equiv ${t}\\equiv ${x} \\pmod{${p}}$. Skúška: $${a}\\cdot ${x}=${a * x}=${Math.floor(a * x / p)}\\cdot ${p}+1$.`,
        hint: 'Rozšíreným Euklidovým algoritmom vyjadri $1=ax+py$; potom $a^{-1}\\equiv x$.'
      };
    }
    if (k === 1) {
      const p = pick([5, 7, 11, 13, 17, 19]), a = rnd(2, p - 1), b = rnd(1, p - 1), ai = inv(a, p), x = b * ai % p;
      return {
        mistakes: [
          ...(a * b % p !== x ? [{ value: a * b % p, msg: `Rovnicu treba vynásobiť inverzným prvkom $${a}^{-1}$, nie číslom $${a}$.` }] : []),
          ...(ai !== x && ai !== a * b % p ? [{ value: ai, msg: `Toto je inverz $${a}^{-1}$. Ešte ním vynásob pravú stranu $${b}$.` }] : [])
        ],
        steps: [
          { q: `Nájdi $${a}^{-1}$ v $\\mathbb{Z}_{${p}}$.`, answer: ai },
          { q: `Vypočítaj $x = ${b}\\cdot ${a}^{-1} \\bmod ${p}$.`, answer: x }
        ],
        answer: x,
        q: `V poli $\\mathbb{Z}_{${p}}$ vyrieš rovnicu $${a}\\cdot x=${b}$. Výsledok zadaj ako číslo z $\\{0, \\dots, ${p - 1}\\}$.`,
        solution: `V poli môžeme deliť: $x=${b}\\cdot ${a}^{-1}$. Inverz je $${a}^{-1}=${ai}$, lebo $${a}\\cdot ${ai}=${a * ai}\\equiv 1$. Teda $x=${b}\\cdot ${ai}=${b * ai}\\equiv ${x} \\pmod{${p}}$.`,
        hint: 'Rovnicu vynásob inverzným prvkom k $a$.'
      };
    }
    if (k === 2) {
      const n = pick([8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 24, 25, 26, 27, 28, 30]), f = phi(n), z = n - 1 - f;
      return {
        mistakes: f !== z ? [{ value: f, msg: `Toto je počet invertibilných prvkov $\\varphi(${n})$. Delitele nuly sú zvyšné nenulové prvky.` }] : [],
        steps: [
          { q: `Vypočítaj $\\varphi(${n})$, teda počet invertibilných prvkov.`, answer: f },
          { q: 'Koľko je deliteľov nuly?', answer: z }
        ],
        answer: z,
        q: `Koľko deliteľov nuly má okruh $\\mathbb{Z}_{${n}}$?`,
        solution: `Nenulový prvok $a$ je buď invertibilný ($\\operatorname{NSD}(a, ${n})=1$), alebo deliteľ nuly. Invertibilných je $\\varphi(${n})=${f}$ (lebo $${n}=${factTex(n)}$), deliteľov nuly je teda $${n}-1-${f}=${z}$.`,
        hint: 'Nenulových prvkov je $n-1$; od nich odpočítaj invertibilné, ktorých je $\\varphi(n)$.'
      };
    }
    if (k === 3) {
      const n = pick([7, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 30, 36]), f = phi(n);
      const U = Array.from({ length: n }, (_, i) => i).filter((a) => gcd(a, n) === 1);
      const wPhi = factor(n).reduce((s, [p, e]) => s * Math.pow(p - 1, e), 1);
      return {
        mistakes: [
          ...(n - 1 !== f ? [{ value: n - 1, msg: `Invertibilné sú len prvky nesúdeliteľné s $${n}$; všetky nenulové by to boli len pre prvočíslo.` }] : []),
          ...(wPhi !== f ? [{ value: wPhi, msg: 'Pre mocninu prvočísla platí $\\varphi(p^{e}) = p^{e-1}(p-1)$, nie $(p-1)^{e}$.' }] : [])
        ],
        answer: f,
        q: `Koľko invertibilných prvkov má okruh $\\mathbb{Z}_{${n}}$?`,
        solution: `Invertibilné sú zvyšky nesúdeliteľné s $${n}$: $${U.join(', ')}$. Je ich $\\varphi(${n})=${f}$.`,
        hint: 'Prvok $a$ je v $\\mathbb{Z}_n$ invertibilný práve vtedy, keď $\\operatorname{NSD}(a, n)=1$.'
      };
    }
    const O = ['pole', 'obor integrity, ale nie pole', 'okruh s deliteľmi nuly'];
    const [t, ans, why] = pick(RINGS)();
    const RH = [
      ans === 1 ? 'Pole vyžaduje inverz ku každému nenulovému prvku. Má ho naozaj každý?'
        : 'V poli nemôžu byť delitele nuly. Skús nájsť dva nenulové prvky so súčinom $0$.',
      ans === 0 ? 'Over, či náhodou nemá inverz každý nenulový prvok – potom je to pole.'
        : 'Obor integrity nemá delitele nuly. Skús nájsť nenulové $a, b$ s $ab = 0$.',
      'Delitele nuly sú nenulové $a, b$ s $ab = 0$. Vieš také konkrétne nájsť?'
    ];
    const choiceHints = {};
    O.forEach((x, i) => { if (i !== ans) choiceHints[x] = RH[i]; });
    return {
      choiceHints,
      type: 'choice', options: O, answer: O[ans],
      q: `Ktorá možnosť najlepšie opisuje okruh $${t}$ (s obvyklým sčítaním a násobením)?`,
      solution: `${why} Odpoveď: <strong>${O[ans]}</strong>.`,
      hint: 'Najprv hľadaj delitele nuly ($ab=0$ pri $a, b\\neq 0$); ak nie sú, zisti, či má každý nenulový prvok inverz.'
    };
  });

  // ===== 30: homomorfizmy =====
  lesson({
    id: 'v6-homomorfizmy', order: 30, title: 'Homomorfizmy a izomorfizmy',
    summary: 'Zobrazenia zachovávajúce operáciu, jadro a obraz, izomorfné grupy a príklady exp, det a mod n.',
    theory: [
      `<p>Zobrazenie $f: G\\to H$ medzi grupami $(G, \\ast)$ a $(H, \\circ)$ je <strong>homomorfizmus</strong>, ak zachováva operáciu:</p>
       <p style="text-align:center">$f(a\\ast b)=f(a)\\circ f(b)$ pre všetky $a, b\\in G$.</p>
       <p>Z definície vyplýva $f(e_G)=e_H$ a $f(a^{-1})=f(a)^{-1}$, a tiež $f(a^k)=f(a)^k$. Rád prvku $f(a)$ preto delí rád prvku $a$. Homomorfizmus okruhov musí zachovávať sčítanie aj násobenie (a zvyčajne aj jednotku).</p>`,
      `<p><strong>Jadro</strong> $\\ker f=\\{a\\in G : f(a)=e_H\\}$ je podgrupa grupy $G$ a <strong>obraz</strong> $\\operatorname{Im} f=f(G)$ je podgrupa grupy $H$. Homomorfizmus je injektívny práve vtedy, keď $\\ker f=\\{e_G\\}$. Pre konečnú grupu platí $|G|=|\\ker f|\\cdot|\\operatorname{Im} f|$ (dôsledok vety o homomorfizme $G/\\ker f\\cong\\operatorname{Im} f$).</p>`,
      `<p>Bijektívny homomorfizmus je <strong>izomorfizmus</strong>; grupy sú <strong>izomorfné</strong> ($G\\cong H$), ak medzi nimi izomorfizmus existuje – líšia sa len „pomenovaním“ prvkov. Izomorfné grupy majú rovnaký rád, rovnaký počet prvkov každého rádu, obe sú (ne)komutatívne a (ne)cyklické. Každá cyklická grupa rádu $n$ je izomorfná so $\\mathbb{Z}_n$; napr. komplexné odmocniny z jednotky $\\{1, i, -1, -i\\}$ s násobením sú izomorfné so $(\\mathbb{Z}_4, +)$ cez $k\\mapsto i^k$. Naopak $\\mathbb{Z}_4\\not\\cong\\mathbb{Z}_2\\times\\mathbb{Z}_2$, lebo druhá grupa nemá prvok rádu $4$.</p>`,
      `<p><strong>Dôležité príklady.</strong></p>
       <ul><li>$\\exp: (\\mathbb{R}, +)\\to(\\mathbb{R}^{+}, \\cdot)$, $x\\mapsto e^x$, lebo $e^{x+y}=e^x e^y$. Je bijektívne, teda izomorfizmus; inverzný izomorfizmus je $\\ln$.</li>
       <li>$\\det: GL_n(\\mathbb{R})\\to(\\mathbb{R}\\setminus\\{0\\}, \\cdot)$, lebo $\\det(AB)=\\det A\\cdot\\det B$. Jadro tvoria matice s determinantom $1$ (grupa $SL_n(\\mathbb{R})$), takže pre $n\\geq 2$ to nie je izomorfizmus.</li>
       <li>Redukcia $\\mathbb{Z}\\to\\mathbb{Z}_n$, $a\\mapsto a \\bmod n$, je surjektívny homomorfizmus okruhov s jadrom $n\\mathbb{Z}$.</li>
       <li>Homomorfizmus $f:\\mathbb{Z}_m\\to\\mathbb{Z}_n$ je určený hodnotou $f(1)=a$, pričom musí platiť $m\\cdot a\\equiv 0 \\pmod n$; takých homomorfizmov je $\\operatorname{NSD}(m, n)$.</li></ul>`
    ],
    examples: [
      { task: 'Zobrazenie $f:\\mathbb{Z}_{12}\\to\\mathbb{Z}_{12}$, $f(x)=3x$. Over, že je to homomorfizmus, a nájdi jeho jadro a obraz.',
        steps: ['$f(x+y)=3(x+y)=3x+3y=f(x)+f(y)$ modulo $12$, teda ide o homomorfizmus.',
                'Jadro: $3x\\equiv 0 \\pmod{12}$ $\\iff$ $4\\mid x$, teda $\\ker f=\\{0, 4, 8\\}$.',
                'Obraz: $\\operatorname{Im} f=\\{0, 3, 6, 9\\}$. Kontrola: $|\\ker f|\\cdot|\\operatorname{Im} f|=3\\cdot 4=12$. Keďže jadro nie je triviálne, $f$ nie je izomorfizmus.'] },
      { task: 'Sú grupy $(\\mathbb{Z}_6, +)$ a $S_3$ izomorfné?',
        steps: ['Obe grupy majú $6$ prvkov, rád teda izomorfizmus nevylučuje.',
                'Grupa $\\mathbb{Z}_6$ je komutatívna, kým v $S_3$ je $(1\\,2)\\circ(2\\,3)\\neq(2\\,3)\\circ(1\\,2)$. Izomorfizmus by komutatívnosť zachoval.',
                '<strong>Záver:</strong> $\\mathbb{Z}_6\\not\\cong S_3$. (Iný argument: $\\mathbb{Z}_6$ má prvok rádu $6$, v $S_3$ majú prvky rády len $1, 2, 3$.)'] }
    ]
  });

  const HOMS = [
    () => ['f:(\\mathbb{R}, +)\\to(\\mathbb{R}^{+}, \\cdot),\\ f(x)=e^{x}', 0, '$e^{x+y}=e^xe^y$ a exponenciála je bijekcia $\\mathbb{R}\\to\\mathbb{R}^{+}$ (inverzná je $\\ln$).'],
    () => ['f:(\\mathbb{R}^{+}, \\cdot)\\to(\\mathbb{R}, +),\\ f(x)=\\ln x', 0, '$\\ln(xy)=\\ln x+\\ln y$ a logaritmus je bijekcia.'],
    () => ['f:GL_2(\\mathbb{R})\\to(\\mathbb{R}\\setminus\\{0\\}, \\cdot),\\ f(A)=\\det A', 1, '$\\det(AB)=\\det A\\det B$, ale napr. $I$ aj $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ majú determinant $1$ – zobrazenie nie je injektívne.'],
    () => { const n = rnd(2, 9); return [`f:(\\mathbb{Z}, +)\\to(\\mathbb{Z}_{${n}}, +),\\ f(a)=a \\bmod ${n}`, 1, `Zvyšok súčtu je súčet zvyškov modulo $${n}$, ale $\\ker f=${n}\\mathbb{Z}\\neq\\{0\\}$ (a $\\mathbb{Z}$ je nekonečná, $\\mathbb{Z}_{${n}}$ konečná).`]; },
    () => { const c = rnd(2, 5); return [`f:(\\mathbb{Z}, +)\\to(\\mathbb{Z}, +),\\ f(x)=${c}x`, 1, `$${c}(x+y)=${c}x+${c}y$ a $f$ je injektívne, no nie surjektívne – napr. $1$ nie je násobkom $${c}$.`]; },
    () => { const c = rnd(2, 5); return [`f:(\\mathbb{Q}, +)\\to(\\mathbb{Q}, +),\\ f(x)=${c}x`, 0, `$${c}(x+y)=${c}x+${c}y$ a inverzné zobrazenie je $x\\mapsto\\frac{x}{${c}}$, teda ide o bijekciu.`]; },
    () => { const c = rnd(1, 5); return [`f:(\\mathbb{Z}, +)\\to(\\mathbb{Z}, +),\\ f(x)=x+${c}`, 2, `$f(0)=${c}\\neq 0$, homomorfizmus však musí zobraziť neutrálny prvok na neutrálny.`]; },
    () => ['f:(\\mathbb{R}, +)\\to(\\mathbb{R}, +),\\ f(x)=x^2', 2, '$f(1+1)=4$, ale $f(1)+f(1)=2$.'],
    () => ['f:(\\mathbb{R}\\setminus\\{0\\}, \\cdot)\\to(\\mathbb{R}\\setminus\\{0\\}, \\cdot),\\ f(x)=x^2', 1, '$(xy)^2=x^2y^2$, ale $f(-1)=f(1)=1$, takže $f$ nie je injektívne.'],
    () => ['f:(\\mathbb{R}\\setminus\\{0\\}, \\cdot)\\to(\\mathbb{R}\\setminus\\{0\\}, \\cdot),\\ f(x)=x^3', 0, '$(xy)^3=x^3y^3$ a $x\\mapsto x^3$ je bijekcia reálnych čísel (inverzná je tretia odmocnina), ktorá zachováva nenulovosť.'],
    () => ['f:(\\mathbb{R}\\setminus\\{0\\}, \\cdot)\\to(\\mathbb{R}\\setminus\\{0\\}, \\cdot),\\ f(x)=|x|', 1, '$|xy|=|x||y|$, ale $f(-2)=f(2)$ a záporné čísla nie sú v obraze.'],
    () => ['f:(\\mathbb{Z}, +)\\to(\\mathbb{Z}, +),\\ f(x)=-x', 0, '$-(x+y)=(-x)+(-y)$ a $f$ je sama k sebe inverzná, teda bijekcia.'],
    () => ['f:(\\mathbb{R}, +)\\to(\\mathbb{C}\\setminus\\{0\\}, \\cdot),\\ f(x)=e^{ix}', 1, '$e^{i(x+y)}=e^{ix}e^{iy}$, ale $f(0)=f(2\\pi)=1$ a obraz je len jednotková kružnica.'],
    () => {
      const n = pick([6, 7, 8, 9, 10, 12]), c = rnd(2, n - 1), d = gcd(c, n);
      return [`f:(\\mathbb{Z}_{${n}}, +)\\to(\\mathbb{Z}_{${n}}, +),\\ f(x)=${c}x`, d === 1 ? 0 : 1,
        `$${c}(x+y)=${c}x+${c}y$ modulo $${n}$. `
          + (d === 1 ? `Keďže $\\operatorname{NSD}(${c}, ${n})=1$, násobenie číslom $${c}$ je bijekcia (inverzné je násobenie číslom $${inv(c, n)}$).`
            : `Keďže $\\operatorname{NSD}(${c}, ${n})=${d}$, je $f(${n / d})=${c * n / d}\\equiv 0$, jadro nie je triviálne.`)];
    }
  ];

  gen('v6-homomorfizmy', () => {
    const k = rnd(0, 4);
    if (k === 0) {
      const n = pick([8, 9, 10, 12, 14, 15, 16, 18, 20, 24]), c = rnd(2, n - 1), d = gcd(c, n), askKer = Math.random() < 0.5;
      const ker = Array.from({ length: d }, (_, i) => i * n / d);
      const o = {
        mistakes: d !== n / d ? [{ value: askKer ? n / d : d, msg: askKer
          ? 'Toto je počet prvkov obrazu. Jadro tvoria prvky, ktoré sa zobrazia na $0$, a má ich $\\operatorname{NSD}(c, n)$.'
          : 'Toto je počet prvkov jadra. Obraz dostaneš z rovnosti $|G| = |\\ker f|\\cdot|\\operatorname{Im} f|$.' }] : [],
        answer: askKer ? d : n / d,
        q: `Homomorfizmus $f:\\mathbb{Z}_{${n}}\\to\\mathbb{Z}_{${n}}$ je daný predpisom $f(x)=${c}x$. Koľko prvkov má ${askKer ? 'jeho jadro $\\ker f$' : 'jeho obraz $\\operatorname{Im} f$'}?`,
        solution: `$${c}x\\equiv 0 \\pmod{${n}}$ práve vtedy, keď $\\frac{${n}}{${d}}\\mid x$ (lebo $\\operatorname{NSD}(${c}, ${n})=${d}$), teda $\\ker f=\\{${ker.join(', ')}\\}$ má $${d}$ prvkov.`
          + ` Z rovnosti $|\\mathbb{Z}_{${n}}|=|\\ker f|\\cdot|\\operatorname{Im} f|$ má obraz $\\frac{${n}}{${d}}=${n / d}$ prvkov. Odpoveď: $${askKer ? d : n / d}$.`,
        hint: 'Jadro tvoria $x$ s $cx\\equiv 0 \\pmod n$; má $\\operatorname{NSD}(c, n)$ prvkov. Potom použi $|G|=|\\ker f|\\cdot|\\operatorname{Im} f|$.'
      };
      if (!askKer) {
        o.steps = [
          { q: `Vypočítaj $\\operatorname{NSD}(${c}, ${n})$.`, answer: d },
          { q: 'Koľko prvkov má jadro $\\ker f$?', answer: d },
          { q: 'Koľko prvkov má obraz $\\operatorname{Im} f$?', answer: n / d }
        ];
      }
      return o;
    }
    if (k === 1) {
      const m = pick([4, 6, 8, 9, 10, 12, 15, 18, 20, 24]), n = pick([4, 6, 8, 9, 10, 12, 14, 15, 16, 18]), d = gcd(m, n);
      const vals = Array.from({ length: d }, (_, i) => i * n / d);
      return {
        mistakes: n !== d ? [{ value: n, msg: `Obraz generátora $f(1) = a$ nemôže byť ľubovoľný: musí platiť $${m}\\cdot a\\equiv 0 \\pmod{${n}}$.` }] : [],
        answer: d,
        q: `Koľko existuje homomorfizmov grúp $(\\mathbb{Z}_{${m}}, +)\\to(\\mathbb{Z}_{${n}}, +)$?`,
        solution: `Homomorfizmus je určený obrazom generátora $a=f(1)$, pričom musí platiť $${m}\\cdot a\\equiv 0 \\pmod{${n}}$, t. j. $\\frac{${n}}{${d}}\\mid a$.`
          + ` Vyhovujú $a\\in\\{${vals.join(', ')}\\}$, homomorfizmov je teda $\\operatorname{NSD}(${m}, ${n})=${d}$.`,
        hint: 'Homomorfizmus z cyklickej grupy je určený obrazom generátora $1$; rád obrazu musí deliť $m$.'
      };
    }
    if (k === 2) {
      const O = ['izomorfizmus', 'homomorfizmus, ale nie izomorfizmus', 'nie je homomorfizmus'];
      const [t, ans, why] = pick(HOMS)();
      const HH = [
        ans === 1 ? 'Izomorfizmus musí byť bijekcia: over, či nemajú dva prvky rovnaký obraz a či je zobrazenie surjektívne.'
          : 'Najprv over, či $f(a\\ast b) = f(a)\\circ f(b)$. Pomôže napríklad otázka, kam sa zobrazí neutrálny prvok.',
        ans === 0 ? 'Over, či zobrazenie nie je aj bijektívne – potom je to izomorfizmus.'
          : 'Over rovnosť $f(a\\ast b) = f(a)\\circ f(b)$ na konkrétnych prvkoch, napríklad $a = b = 1$.',
        'Over rovnosť $f(a\\ast b) = f(a)\\circ f(b)$ všeobecne, pre ľubovoľné prvky; použi známe vlastnosti funkcie.'
      ];
      const choiceHints = {};
      O.forEach((x, i) => { if (i !== ans) choiceHints[x] = HH[i]; });
      return {
        choiceHints,
        type: 'choice', options: O, answer: O[ans],
        q: `Rozhodni o zobrazení $${t}$.`,
        solution: `${why} Odpoveď: <strong>${O[ans]}</strong>.`,
        hint: 'Over $f(a\\ast b)=f(a)\\circ f(b)$; ak platí, zisti, či je $f$ injektívne (jadro je triviálne) a surjektívne.'
      };
    }
    if (k === 3) {
      let m, n, d;
      do { m = pick([6, 8, 9, 10, 12, 15, 18, 20]); n = pick([4, 6, 8, 9, 10, 12, 15, 16, 18]); d = gcd(m, n); } while (d < 2);
      const a = (n / d) * rnd(1, d - 1), x = rnd(2, m - 1), y = x * a % n;
      return {
        mistakes: [
          ...(x * a !== y ? [{ value: x * a, msg: `Výsledok je prvok $\\mathbb{Z}_{${n}}$, treba ho zredukovať modulo $${n}$.` }] : []),
          ...((x + a) % n !== y ? [{ value: (x + a) % n, msg: `Homomorfizmus zachováva násobky: $f(${x}) = ${x}\\cdot f(1)$, nie $${x} + f(1)$.` }] : [])
        ],
        steps: [
          { q: `Vypočítaj súčin $${x}\\cdot f(1)$ (bez redukcie).`, answer: x * a },
          { q: `Zredukuj ho modulo $${n}$.`, answer: y }
        ],
        answer: y,
        q: `Homomorfizmus $f:\\mathbb{Z}_{${m}}\\to\\mathbb{Z}_{${n}}$ spĺňa $f(1)=${a}$. Vypočítaj $f(${x})$ ako číslo z $\\{0, \\dots, ${n - 1}\\}$.`,
        solution: `$${x}=1+1+\\dots+1$ (${x}-krát), preto $f(${x})=${x}\\cdot f(1)=${x}\\cdot ${a}=${x * a}\\equiv ${y} \\pmod{${n}}$.`
          + ` (Predpis je korektný, lebo $${m}\\cdot ${a}=${m * a}\\equiv 0 \\pmod{${n}}$.)`,
        hint: 'Homomorfizmus zachováva násobky: $f(k\\cdot 1)=k\\cdot f(1)$; výsledok zredukuj modulo $n$.'
      };
    }
    const n = pick([5, 7, 8, 9, 10, 12, 14, 15, 16, 18, 20]), f = phi(n);
    const U = Array.from({ length: n }, (_, i) => i).filter((a) => gcd(a, n) === 1);
    return {
      mistakes: n !== f ? [{ value: n, msg: `Toto je počet všetkých homomorfizmov $\\mathbb{Z}_{${n}}\\to\\mathbb{Z}_{${n}}$. Izomorfizmus musí poslať generátor $1$ na generátor.` }] : [],
      answer: f,
      q: `Koľko izomorfizmov $\\mathbb{Z}_{${n}}\\to\\mathbb{Z}_{${n}}$ (automorfizmov) existuje?`,
      solution: `Homomorfizmus $f(x)=ax$ je bijekcia práve vtedy, keď $f(1)=a$ je generátor $\\mathbb{Z}_{${n}}$, t. j. $\\operatorname{NSD}(a, ${n})=1$. Takých $a$ je $\\varphi(${n})=${f}$: $${U.join(', ')}$.`,
      hint: 'Izomorfizmus musí generátor $1$ poslať na generátor. Generátory $\\mathbb{Z}_n$ sú prvky nesúdeliteľné s $n$.'
    };
  });

  // ===== 40: polynómy nad poľom =====
  lesson({
    id: 'v6-polynomy', order: 40, title: 'Polynómy nad poľom',
    summary: 'Okruh F[x], delenie so zvyškom, NSD polynómov, ireducibilné polynómy a korene v ℤₚ.',
    theory: [
      `<p>Pre pole $F$ (napr. $\\mathbb{Q}$, $\\mathbb{R}$, $\\mathbb{Z}_p$) tvoria polynómy $a_nx^n+\\dots+a_1x+a_0$ s koeficientmi z $F$ okruh $F[x]$. Sčítame ich po koeficientoch a násobíme roznásobením, pričom s koeficientmi počítame v $F$ – v $\\mathbb{Z}_2[x]$ je napr. $(x+1)^2=x^2+2x+1=x^2+1$. Platí $\\deg(fg)=\\deg f+\\deg g$, preto je $F[x]$ obor integrity; invertibilné sú len nenulové konštanty. Polynóm s vedúcim koeficientom $1$ je <strong>normovaný</strong>.</p>`,
      `<p><strong>Delenie so zvyškom:</strong> pre $f, g\\in F[x]$, $g\\neq 0$, existujú jednoznačné $q, r$ s $f=q\\cdot g+r$ a $\\deg r&lt;\\deg g$. Počítame ako „delenie pod sebou“; nad $\\mathbb{Z}_p$ len všetky čísla redukujeme modulo $p$. Zvyšok po delení lineárnym polynómom $x-c$ je hodnota $f(c)$ (<strong>Bézoutova veta</strong>), preto $c$ je koreň $f$ práve vtedy, keď $(x-c)\\mid f$. Polynóm stupňa $n$ má nad poľom najviac $n$ koreňov.</p>`,
      `<p><strong>Najväčší spoločný deliteľ</strong> polynómov je normovaný polynóm najvyššieho stupňa, ktorý delí oba. Hľadáme ho <strong>Euklidovým algoritmom</strong> ako pri celých číslach: $\\operatorname{NSD}(f, g)=\\operatorname{NSD}(g, r)$, kde $r$ je zvyšok po delení $f$ polynómom $g$; posledný nenulový zvyšok (normovaný) je NSD. Platí aj Bézoutova rovnosť $\\operatorname{NSD}(f, g)=uf+vg$ pre vhodné $u, v\\in F[x]$.</p>`,
      `<p>Nekonštantný polynóm je <strong>ireducibilný</strong> nad $F$, ak ho nemožno zapísať ako súčin dvoch polynómov nižšieho stupňa z $F[x]$; ireducibilné polynómy sú „prvočíslami“ okruhu $F[x]$ a každý polynóm sa na ne rozkladá jednoznačne (až na poradie a konštanty). Ireducibilnosť závisí od poľa: $x^2-2$ je ireducibilný nad $\\mathbb{Q}$, ale nad $\\mathbb{R}$ je $x^2-2=(x-\\sqrt2)(x+\\sqrt2)$; $x^2+1$ je ireducibilný nad $\\mathbb{R}$, nad $\\mathbb{C}$ nie a nad $\\mathbb{Z}_5$ tiež nie, lebo $2^2+1=5\\equiv 0$.</p>
       <p><strong>Polynóm stupňa 2 alebo 3 je ireducibilný práve vtedy, keď nemá v $F$ koreň</strong> (rozklad by obsahoval lineárny činiteľ). Nad konečným poľom $\\mathbb{Z}_p$ korene jednoducho nájdeme dosadením všetkých $p$ prvkov. Pre stupeň $4$ a viac to nestačí: $(x^2+1)^2$ nemá reálny koreň, a predsa je rozložiteľný. Nad $\\mathbb{Q}$ pomáha <strong>Eisensteinovo kritérium</strong>: ak prvočíslo $p$ delí všetky koeficienty okrem vedúceho a $p^2$ nedelí absolútny člen, polynóm je ireducibilný (napr. $x^n-2$).</p>`
    ],
    examples: [
      { task: 'Vydeľ so zvyškom $f=x^3+2x+4$ polynómom $g=x^2+1$ v $\\mathbb{Z}_5[x]$.',
        steps: ['Vedúci člen podielu je $x$: $f-x\\cdot g=x^3+2x+4-(x^3+x)=x+4$.',
                'Stupeň $x+4$ je menší ako stupeň $g$, delenie končí.',
                '<strong>Výsledok:</strong> $x^3+2x+4=x\\cdot(x^2+1)+(x+4)$, podiel $q=x$, zvyšok $r=x+4$.'] },
      { task: 'Je polynóm $x^3+x+1$ ireducibilný nad $\\mathbb{Z}_2$? A nad $\\mathbb{Z}_3$?',
        steps: ['Nad $\\mathbb{Z}_2$: $f(0)=1$, $f(1)=1+1+1=3\\equiv 1$. Polynóm stupňa $3$ nemá koreň, je teda <strong>ireducibilný</strong>.',
                'Nad $\\mathbb{Z}_3$: $f(0)=1$, $f(1)=3\\equiv 0$. Číslo $1$ je koreň, preto $(x-1)\\mid f$.',
                'Delením dostaneme $x^3+x+1=(x-1)(x^2+x+2)$ v $\\mathbb{Z}_3[x]$, polynóm je <strong>reducibilný</strong>.'] }
    ]
  });

  gen('v6-polynomy', () => {
    const k = rnd(0, 4);
    if (k === 0) {
      const p = pick([5, 7, 11, 13]), n = rnd(3, 4);
      const f = [rnd(1, p - 1)].concat(Array.from({ length: n }, () => rnd(0, p - 1)));
      const c = rnd(1, p - 1), v = evalP(f, c, p);
      const terms = f.map((a, i) => {
        if (!a) return '';
        const e = n - i, pw = e === 0 ? '' : e === 1 ? String(c) : `${c}^{${e}}`;
        return e === 0 ? String(a) : a === 1 ? pw : `${a}\\cdot ${pw}`;
      }).filter(Boolean);
      const raw = f.reduce((s, a) => s * c + a, 0), vm = evalP(f, p - c, p);
      return {
        mistakes: [
          ...(raw !== v ? [{ value: raw, msg: `Hodnotu $f(${c})$ treba ešte zredukovať modulo $${p}$, zvyšok má byť z $\\{0, \\dots, ${p - 1}\\}$.` }] : []),
          ...(vm !== v ? [{ value: vm, msg: `Pri delení polynómom $x-${c}$ dosadzuješ $x = ${c}$, nie $x = -${c}$.` }] : [])
        ],
        steps: [
          { q: `Dosaď $x = ${c}$ do $f$ a vypočítaj hodnotu ako celé číslo (bez redukcie).`, answer: raw },
          { q: `Zredukuj výsledok modulo $${p}$.`, answer: v }
        ],
        answer: v,
        q: `Aký je zvyšok po delení polynómu $f=${polyTex(f)}$ polynómom $x-${c}$ v $\\mathbb{Z}_{${p}}[x]$? (Zvyšok je konštanta z $\\{0, \\dots, ${p - 1}\\}$.)`,
        solution: `Podľa Bézoutovej vety je zvyšok $f(${c})$. Dosadením: $${terms.join(' + ')}=${raw}\\equiv ${v} \\pmod{${p}}$.`,
        hint: 'Zvyšok po delení polynómom $x-c$ je hodnota $f(c)$; počítaj modulo $p$.'
      };
    }
    if (k === 1) {
      const p = pick([3, 5, 7]);
      const f = [1, rnd(0, p - 1), rnd(0, p - 1), rnd(0, p - 1)];
      const vals = Array.from({ length: p }, (_, x) => evalP(f, x, p));
      const roots = vals.map((v, x) => (v === 0 ? x : -1)).filter((x) => x >= 0);
      return {
        mistakes: roots.length !== 3 ? [{ value: 3, msg: `Polynóm stupňa 3 má nad poľom najviac 3 korene, nie vždy práve 3. Dosaď všetky prvky $\\mathbb{Z}_{${p}}$.` }] : [],
        steps: [
          { q: `Vypočítaj $f(0)$ v $\\mathbb{Z}_{${p}}$.`, answer: vals[0] },
          { q: `Vypočítaj $f(1)$ v $\\mathbb{Z}_{${p}}$.`, answer: vals[1] },
          { q: `Dosaď aj ostatné prvky. Koľko rôznych koreňov má polynóm?`, answer: roots.length }
        ],
        answer: roots.length,
        q: `Koľko rôznych koreňov má polynóm $${polyTex(f)}$ v poli $\\mathbb{Z}_{${p}}$?`,
        solution: `Dosadíme všetky prvky: ${vals.map((v, x) => `$f(${x})\\equiv ${v}$`).join(', ')}. `
          + (roots.length ? `Korene sú $${roots.join(', ')}$, teda ich je $${roots.length}$.` : 'Žiadna hodnota nie je nulová, polynóm nemá v $\\mathbb{Z}_{' + p + '}$ koreň.'),
        hint: 'Pole $\\mathbb{Z}_p$ má len $p$ prvkov – dosaď každý z nich a počítaj modulo $p$.'
      };
    }
    if (k === 2) {
      const p = pick([3, 5, 7]);
      const f = [rnd(1, p - 1), rnd(0, p - 1), rnd(0, p - 1), rnd(0, p - 1)], g = [1, rnd(0, p - 1), rnd(0, p - 1)];
      const D = polyDiv(f, g, p);
      const r = D.r.length === 1 ? [0, D.r[0]] : D.r;
      const steps = D.steps.map((s) => `odčítame $${mono(s.c, s.k)}\\cdot(${polyTex(g)})$ a zostane $${polyTex(s.r)}$`).join('; ');
      // delenie v Z[x] bez redukcie modulo p (g je normovaný)
      const q1 = f[0], q0 = f[1] - q1 * g[1], ri = [f[2] - q1 * g[2] - q0 * g[1], f[3] - q0 * g[2]];
      const qq = trim(D.q);
      return {
        mistakes: ri[0] !== r[0] || ri[1] !== r[1] ? [{ value: ri, msg: `Koeficienty počas delenia aj vo zvyšku treba redukovať modulo $${p}$, aby ležali v $\\{0, \\dots, ${p - 1}\\}$.` }] : [],
        steps: [
          { q: 'Aký je koeficient podielu pri $x$?', answer: qq.length > 1 ? qq[0] : 0 },
          { q: 'Aký je absolútny člen podielu?', answer: qq[qq.length - 1] },
          { q: 'Zadaj zvyšok v tvare „r₁; r₀“.', type: 'tuple', answer: r, placeholder: 'r₁; r₀' }
        ],
        type: 'tuple', answer: r, placeholder: 'r₁; r₀',
        q: `V $\\mathbb{Z}_{${p}}[x]$ vydeľ so zvyškom $f=${polyTex(f)}$ polynómom $g=${polyTex(g)}$. Zvyšok má tvar $r_1x+r_0$; zadaj „r₁; r₀“ s hodnotami z $\\{0, \\dots, ${p - 1}\\}$.`,
        solution: `Delíme pod sebou, koeficienty redukujeme modulo $${p}$: ${steps}. Podiel je $q=${polyTex(trim(D.q))}$ a zvyšok $r=${polyTex(D.r)}$, teda $r_1=${r[0]}$, $r_0=${r[1]}$.`,
        hint: 'Vedúci člen $f$ vydeľ vedúcim členom $g$, odčítaj príslušný násobok $g$ a pokračuj, kým stupeň zvyšku nie je menší ako $2$. Záporné čísla nahraď zvyškom modulo $p$.'
      };
    }
    if (k === 3) {
      const p = pick([2, 3, 5, 7]), deg = pick([2, 3]);
      const f = [1].concat(Array.from({ length: deg - 1 }, () => rnd(0, p - 1)), [rnd(1, p - 1)]);
      const vals = Array.from({ length: p }, (_, x) => evalP(f, x, p));
      const root = vals.indexOf(0);
      const O = ['ireducibilný', 'reducibilný'];
      return {
        choiceHints: root < 0
          ? { [O[1]]: `Polynóm stupňa ${deg} je reducibilný len vtedy, keď má koreň. Over hodnoty vo všetkých prvkoch $\\mathbb{Z}_{${p}}$.` }
          : { [O[0]]: `Dosaď všetky prvky $\\mathbb{Z}_{${p}}$ a počítaj modulo $${p}$; ak niektorý dá $0$, polynóm má lineárny činiteľ.` },
        type: 'choice', options: O, answer: root < 0 ? O[0] : O[1],
        q: `Je polynóm $${polyTex(f)}$ ireducibilný nad poľom $\\mathbb{Z}_{${p}}$?`,
        solution: `Polynóm má stupeň $${deg}$, preto je reducibilný práve vtedy, keď má v $\\mathbb{Z}_{${p}}$ koreň. Hodnoty: ${vals.map((v, x) => `$f(${x})\\equiv ${v}$`).join(', ')}. `
          + (root < 0 ? 'Koreň neexistuje, polynóm je <strong>ireducibilný</strong>.' : `Číslo $${root}$ je koreň, teda $(x-${root})$ delí $f$ a polynóm je <strong>reducibilný</strong>.`),
        hint: 'Polynóm stupňa 2 alebo 3 je ireducibilný práve vtedy, keď nemá koreň v danom poli.'
      };
    }
    // NSD dvoch kvadratických polynómov nad Q so spoločným koreňom
    let r, s, t;
    do { r = rnd(-6, 6); s = rnd(-6, 6); t = rnd(-6, 6); } while (s === t || r === s || r === t);
    const f = [1, -(r + s), r * s], g = [1, -(r + t), r * t], dfg = t - s;
    return {
      mistakes: [
        { value: s, msg: 'Toto je koreň len polynómu $f$. NSD tvorí spoločný činiteľ oboch polynómov.' },
        { value: t, msg: 'Toto je koreň len polynómu $g$. NSD tvorí spoločný činiteľ oboch polynómov.' }
      ],
      steps: [
        { q: 'Vypočítaj $f - g$. Aký je jeho koeficient pri $x$?', answer: dfg, signed: true },
        { q: 'Aký je absolútny člen polynómu $f - g$?', answer: -dfg * r, signed: true },
        { q: 'Urči $c$.', answer: r, signed: true }
      ],
      signed: true, answer: r,
      q: `Najväčší spoločný deliteľ polynómov $f=${polyTex(f)}$ a $g=${polyTex(g)}$ v $\\mathbb{Q}[x]$ má tvar $x-c$. Urči $c$.`,
      solution: `Prvý krok Euklidovho algoritmu: $f-g=${polyTex([dfg, -dfg * r])}=${dfg}\\,(${polyTex([1, -r])})$. NSD teda delí $${polyTex([1, -r])}$.`
        + ` Skúška: $f(${r})=${r * r - (r + s) * r + r * s}$ a $g(${r})=0$, takže $${polyTex([1, -r])}$ delí oba polynómy a $c=${r}$. (Naozaj $f=(${polyTex([1, -r])})(${polyTex([1, -s])})$, $g=(${polyTex([1, -r])})(${polyTex([1, -t])})$.)`,
      hint: 'Oba polynómy sú normované stupňa 2, takže $f-g$ je lineárny – ten už určuje kandidáta na NSD.'
    };
  });

  // ===== 50: kongruencie =====
  lesson({
    id: 'v6-kongruencie', order: 50, title: 'Kongruencie',
    summary: 'Zvyškové triedy, počítanie modulo n, lineárne kongruencie, inverz modulo n a čínska zvyšková veta.',
    theory: [
      `<p>Celé čísla $a, b$ sú <strong>kongruentné modulo $n$</strong>, píšeme $a\\equiv b \\pmod{n}$, ak $n\\mid a-b$, t. j. ak dávajú po delení $n$ rovnaký zvyšok. Kongruencia je reflexívna, symetrická a tranzitívna (ekvivalencia), a rozkladá $\\mathbb{Z}$ na $n$ <strong>zvyškových tried</strong> $[0], [1], \\dots, [n-1]$, kde $[a]=\\{a+kn : k\\in\\mathbb{Z}\\}$. Množina tried je práve $\\mathbb{Z}_n$.</p>`,
      `<p><strong>Počítanie modulo $n$.</strong> Ak $a\\equiv a'$ a $b\\equiv b' \\pmod n$, tak $a+b\\equiv a'+b'$, $ab\\equiv a'b'$ a $a^k\\equiv a'^k$. Čísla preto môžeme kedykoľvek nahradiť zvyškami, napr. $47\\cdot 38\\equiv 2\\cdot 3=6\\equiv 1 \\pmod 5$. Deliť však vo všeobecnosti nemožno: $2\\cdot 3\\equiv 2\\cdot 0 \\pmod 6$, ale $3\\not\\equiv 0$. Krátiť smieme len číslom nesúdeliteľným s modulom.</p>`,
      { fig: 'v6-hodiny', caption: 'Počítanie modulo $n$ ako na hodinách: po $n-1$ nasleduje $0$. Násobky generátora $a$ obchádzajú ciferník a tvoria podgrupu $\\langle a\\rangle$; všetky body navštívia len vtedy, keď $\\operatorname{NSD}(a, n)=1$.' },
      `<p><strong>Lineárna kongruencia</strong> $ax\\equiv b \\pmod n$. Nech $d=\\operatorname{NSD}(a, n)$. Kongruencia má riešenie práve vtedy, keď $d\\mid b$, a vtedy má v $\\{0, \\dots, n-1\\}$ presne $d$ riešení. Ak $d=1$, existuje <strong>inverz</strong> $a^{-1}$ modulo $n$ (z Bézoutovej rovnosti $ax+ny=1$) a jediné riešenie je $x\\equiv a^{-1}b$. Ak $d&gt;1$ a $d\\mid b$, celú kongruenciu vydelíme $d$: $\\frac{a}{d}x\\equiv\\frac{b}{d} \\pmod{\\frac{n}{d}}$.</p>`,
      `<p><strong>Čínska zvyšková veta:</strong> ak sú moduly $m_1, \\dots, m_k$ po dvoch nesúdeliteľné, sústava $x\\equiv a_1 \\pmod{m_1}$, …, $x\\equiv a_k \\pmod{m_k}$ má riešenie a je jednoznačné modulo $M=m_1m_2\\cdots m_k$. Prakticky ju riešime postupne: z prvej kongruencie $x=a_1+m_1t$, dosadíme do druhej, vyriešime lineárnu kongruenciu pre $t$ a pokračujeme. Algebraicky veta hovorí, že $\\mathbb{Z}_{M}\\cong\\mathbb{Z}_{m_1}\\times\\dots\\times\\mathbb{Z}_{m_k}$.</p>`
    ],
    examples: [
      { task: 'Vyrieš kongruenciu $6x\\equiv 9 \\pmod{15}$.',
        steps: ['$\\operatorname{NSD}(6, 15)=3$ a $3\\mid 9$, riešenia teda existujú a v $\\{0, \\dots, 14\\}$ sú tri.',
                'Vydelíme tromi: $2x\\equiv 3 \\pmod 5$. Inverz k $2$ modulo $5$ je $3$ ($2\\cdot 3=6\\equiv 1$), preto $x\\equiv 3\\cdot 3=9\\equiv 4 \\pmod 5$.',
                '<strong>Výsledok:</strong> $x\\in\\{4, 9, 14\\}$ modulo $15$. Skúška: $6\\cdot 4=24\\equiv 9 \\pmod{15}$.'] },
      { task: 'Nájdi najmenšie kladné $x$, pre ktoré $x\\equiv 2 \\pmod 5$ a $x\\equiv 3 \\pmod 7$.',
        steps: ['Z prvej kongruencie $x=2+5t$. Dosadíme do druhej: $2+5t\\equiv 3 \\pmod 7$, teda $5t\\equiv 1 \\pmod 7$.',
                'Inverz k $5$ modulo $7$ je $3$ ($15\\equiv 1$), preto $t\\equiv 3 \\pmod 7$.',
                '<strong>Výsledok:</strong> $x=2+5\\cdot 3=17$; všetky riešenia sú $x\\equiv 17 \\pmod{35}$.'] }
    ]
  });

  // postupné riešenie sústavy kongruencií (moduly po dvoch nesúdeliteľné)
  function crtSolve(as, ms) {
    let x = mod(as[0], ms[0]), M = ms[0];
    const lines = [`Z prvej kongruencie $x=${x}+${M}t$.`];
    for (let i = 1; i < ms.length; i++) {
      const m = ms[i], rhs = mod(as[i] - x, m), cM = M % m, iv = inv(cM, m), t = rhs * iv % m;
      lines.push(`Dosadením do kongruencie modulo $${m}$: $${x}+${M}t\\equiv ${as[i]}$, teda $${cM}t\\equiv ${rhs} \\pmod{${m}}$; inverz k $${cM}$ je $${iv}$, preto $t\\equiv ${t}$`
        + ` a $x=${x}+${M}\\cdot ${t}=${x + M * t}$.`);
      x += M * t; M *= m;
      if (i < ms.length - 1) lines.push(`Všetky doterajšie riešenia sú $x=${x}+${M}t$.`);
    }
    return { x: mod(x, M), M, text: lines.join(' ') };
  }

  gen('v6-kongruencie', () => {
    const k = rnd(0, 4);
    if (k === 0) {
      const n = rnd(3, 13), a = rnd(100, 999), b = rnd(100, 999), c = rnd(10, 99), r = (a * b + c) % n;
      const ra = a % n, rb = b % n, rc = c % n;
      return {
        mistakes: ra * rb + rc !== r ? [{ value: ra * rb + rc, msg: `Po dosadení zvyškov treba výsledok $${ra}\\cdot ${rb}+${rc}$ ešte raz zredukovať modulo $${n}$.` }] : [],
        steps: [
          { q: `Aký zvyšok dáva $${a}$ po delení $${n}$?`, answer: ra },
          { q: `Aký zvyšok dáva $${b}$ po delení $${n}$?`, answer: rb },
          { q: `Aký zvyšok dáva celé číslo $${a}\\cdot ${b}+${c}$?`, answer: r }
        ],
        answer: r,
        q: `Aký zvyšok dáva číslo $${a}\\cdot ${b}+${c}$ po delení číslom $${n}$?`,
        solution: `Nahradíme čísla zvyškami: $${a}\\equiv ${ra}$, $${b}\\equiv ${rb}$, $${c}\\equiv ${rc} \\pmod{${n}}$. Potom $${a}\\cdot ${b}+${c}\\equiv ${ra}\\cdot ${rb}+${rc}=${ra * rb + rc}\\equiv ${r} \\pmod{${n}}$.`,
        hint: 'Pri sčítaní a násobení môžeš každé číslo najprv nahradiť jeho zvyškom modulo $n$.'
      };
    }
    if (k === 1) {
      let n, a;
      do { n = rnd(10, 60); a = rnd(2, n - 1); } while (gcd(a, n) !== 1);
      const x = inv(a, n), [, s, t] = egcd(n, a);
      return {
        mistakes: [
          ...(t < 0 ? [{ value: t, msg: `Bézoutov koeficient je správny, ale inverz treba zapísať ako číslo z $\\{0, \\dots, ${n - 1}\\}$: pripočítaj $${n}$.` }] : []),
          ...(n - x !== x && n - x !== t ? [{ value: n - x, msg: 'Pri spätnom dosadzovaní si sa pomýlil v znamienku. Urob skúšku: $a\\cdot x$ musí dať zvyšok $1$, nie $-1$.' }] : [])
        ],
        steps: [
          { q: `Prvý krok Euklidovho algoritmu: aký zvyšok dáva $${n}$ po delení číslom $${a}$?`, answer: n % a },
          { q: `Urči inverz $${a}^{-1}$ modulo $${n}$.`, answer: x }
        ],
        answer: x,
        q: `Nájdi inverz čísla $${a}$ modulo $${n}$, t. j. $x\\in\\{0, \\dots, ${n - 1}\\}$ s $${a}x\\equiv 1 \\pmod{${n}}$.`,
        solution: `Euklidov algoritmus: $${euclid(n, a).join(',\\ ')}$. Spätne $1=${par(s)}\\cdot ${n}+${par(t)}\\cdot ${a}$, teda $${a}^{-1}\\equiv ${t}\\equiv ${x} \\pmod{${n}}$. Skúška: $${a}\\cdot ${x}=${a * x}\\equiv 1$.`,
        hint: 'Inverz existuje, lebo $\\operatorname{NSD}(a, n)=1$. Nájdi ho rozšíreným Euklidovým algoritmom alebo skúšaním násobkov.'
      };
    }
    if (k === 2) {
      let n, a;
      do { n = rnd(7, 40); a = rnd(2, n - 1); } while (gcd(a, n) !== 1);
      const b = rnd(1, n - 1), ai = inv(a, n), x = ai * b % n;
      return {
        mistakes: [
          ...(a * b % n !== x ? [{ value: a * b % n, msg: `Obe strany treba vynásobiť inverzom $${a}^{-1}$, nie samotným číslom $${a}$.` }] : []),
          ...(ai !== x && ai !== a * b % n ? [{ value: ai, msg: `Toto je inverz $${a}^{-1}$. Ešte ním vynásob pravú stranu $${b}$.` }] : [])
        ],
        steps: [
          { q: `Nájdi inverz $${a}^{-1}$ modulo $${n}$.`, answer: ai },
          { q: `Vypočítaj $x\\equiv ${a}^{-1}\\cdot ${b} \\pmod{${n}}$.`, answer: x }
        ],
        answer: x,
        q: `Vyrieš kongruenciu $${a}x\\equiv ${b} \\pmod{${n}}$. Zadaj riešenie z $\\{0, \\dots, ${n - 1}\\}$.`,
        solution: `$\\operatorname{NSD}(${a}, ${n})=1$, riešenie je jediné. Inverz k $${a}$ modulo $${n}$ je $${ai}$ ($${a}\\cdot ${ai}=${a * ai}\\equiv 1$). Vynásobením: $x\\equiv ${ai}\\cdot ${b}=${ai * b}\\equiv ${x} \\pmod{${n}}$.`,
        hint: 'Obe strany vynásob inverzom koeficientu pri $x$.'
      };
    }
    if (k === 3) {
      const n = pick([12, 14, 15, 16, 18, 20, 21, 24, 26, 28, 30]);
      const dv = divisors(n).filter((d) => d > 1 && d < n), d0 = pick(dv), a = d0 * pick(Array.from({ length: n / d0 - 1 }, (_, i) => i + 1).filter((u) => gcd(u, n / d0) === 1));
      const d = gcd(a, n), b = Math.random() < 0.65 ? d * rnd(1, n / d - 1) : rnd(1, n - 1), sol = b % d === 0 ? d : 0;
      const sols = [];
      for (let x = 0; x < n; x++) if ((a * x - b) % n === 0) sols.push(x);
      return {
        mistakes: [
          ...(sols.length > 1 ? [{ value: 1, msg: `Riešenie nie je jediné: koeficient pri $x$ je súdeliteľný s modulom. Riešení je toľko, koľko je $\\operatorname{NSD}(a, n)$.` }] : []),
          ...(!sols.length ? [{ value: d, msg: `Riešenia existujú len vtedy, keď $\\operatorname{NSD}(a, n)$ delí pravú stranu $${b}$. Over túto podmienku.` }] : [])
        ],
        steps: [
          { q: `Vypočítaj $d = \\operatorname{NSD}(${a}, ${n})$.`, answer: d },
          { q: 'Koľko riešení má kongruencia v danej množine?', answer: sols.length }
        ],
        answer: sols.length,
        q: `Koľko riešení v množine $\\{0, 1, \\dots, ${n - 1}\\}$ má kongruencia $${a}x\\equiv ${b} \\pmod{${n}}$?`,
        solution: `$d=\\operatorname{NSD}(${a}, ${n})=${d}$. ` + (sol
          ? `Keďže $${d}\\mid ${b}$, riešení je presne $${d}$: $x\\in\\{${sols.join(', ')}\\}$.`
          : `Číslo $${d}$ nedelí $${b}$, ale ľavá strana $${a}x-${b}$ by musela byť deliteľná $${n}$, teda aj $${d}$ – riešenie neexistuje, odpoveď je $0$.`),
        hint: 'Kongruencia $ax\\equiv b \\pmod n$ má riešenie práve vtedy, keď $d=\\operatorname{NSD}(a, n)$ delí $b$, a potom má $d$ riešení.'
      };
    }
    const three = Math.random() < 0.35;
    let ms;
    do { ms = three ? [pick([2, 3, 4, 5]), pick([3, 5, 7]), pick([7, 9, 11])] : [rnd(3, 12), rnd(5, 17)]; }
    while (ms.some((m, i) => ms.some((q, j) => i < j && gcd(m, q) !== 1)));
    const as = ms.map((m) => rnd(0, m - 1));
    if (as.every((a) => a === 0)) as[0] = 1;
    const R = crtSolve(as, ms);
    const o = {
      mistakes: [
        ...(mod(as[0] + as[1], ms[0] * ms[1]) !== R.x && !three ? [{ value: mod(as[0] + as[1], ms[0] * ms[1]), msg: 'Zvyšky sa nesčítavajú. Vyjadri $x = a_1 + m_1t$ z prvej kongruencie a dosaď do druhej.' }] : []),
        { value: R.x + R.M, msg: `Toto číslo sústavu spĺňa, ale nie je najmenšie nezáporné. Riešenie je jednoznačné modulo $${R.M}$, zredukuj ho.` }
      ],
      answer: R.x,
      q: `Nájdi najmenšie nezáporné $x$, ktoré spĺňa ${ms.map((m, i) => `$x\\equiv ${as[i]} \\pmod{${m}}$`).join(three ? ', ' : ' a ').replace(/, ([^,]*)$/, ' a $1')}.`,
      solution: `Moduly sú po dvoch nesúdeliteľné, podľa čínskej zvyškovej vety je riešenie jednoznačné modulo $${R.M}$. ${R.text} Najmenšie nezáporné riešenie je $x=${R.x}$.`,
      hint: 'Z prvej kongruencie vyjadri $x=a_1+m_1t$, dosaď do ďalšej a vyrieš lineárnu kongruenciu pre $t$.'
    };
    if (!three) {
      const [m1, m2] = ms, cM = m1 % m2, rhs = mod(as[1] - as[0], m2), tt = rhs * inv(cM, m2) % m2;
      o.steps = [
        { q: `Z prvej kongruencie $x = ${as[0]} + ${m1}t$. Po dosadení do druhej dostaneš $${cM}t\\equiv c \\pmod{${m2}}$. Urči $c$ ako číslo z $\\{0, \\dots, ${m2 - 1}\\}$.`, answer: rhs },
        { q: `Vyrieš kongruenciu pre $t$ (číslo z $\\{0, \\dots, ${m2 - 1}\\}$).`, answer: tt },
        { q: 'Urči najmenšie nezáporné $x$.', answer: R.x }
      ];
    }
    return o;
  });

  // ===== 60: teória čísel =====
  lesson({
    id: 'v6-cisla', order: 60, title: 'Teória čísel',
    summary: 'Euklidov algoritmus a Bézoutova rovnosť, Eulerova funkcia, Malá Fermatova a Eulerova veta, mocniny modulo n a šifra RSA.',
    theory: [
      `<p><strong>Euklidov algoritmus</strong> počíta $\\operatorname{NSD}(a, b)$ opakovaným delením so zvyškom: z $a=qb+r$ vyplýva $\\operatorname{NSD}(a, b)=\\operatorname{NSD}(b, r)$, a posledný nenulový zvyšok je hľadaný NSD. Algoritmus je veľmi rýchly – počet krokov rastie len logaritmicky s veľkosťou čísel. Spätným dosadením zvyškov získame <strong>Bézoutovu rovnosť</strong>: existujú celé $x, y$ s</p>
       <p style="text-align:center">$ax+by=\\operatorname{NSD}(a, b)$.</p>
       <p>Koeficienty nie sú jednoznačné: ak $(x, y)$ vyhovuje a $d=\\operatorname{NSD}(a, b)$, vyhovuje aj $\\left(x+k\\frac{b}{d},\\ y-k\\frac{a}{d}\\right)$ pre každé $k\\in\\mathbb{Z}$. Rovnica $ax+by=c$ má celočíselné riešenie práve vtedy, keď $d\\mid c$.</p>`,
      `<p><strong>Eulerova funkcia</strong> $\\varphi(n)$ udáva počet čísel z $\\{1, \\dots, n\\}$ nesúdeliteľných s $n$ – teda počet invertibilných prvkov v $\\mathbb{Z}_n$. Pre prvočíslo $\\varphi(p)=p-1$, pre mocninu prvočísla $\\varphi(p^k)=p^k-p^{k-1}$ a pre nesúdeliteľné $m, n$ je $\\varphi(mn)=\\varphi(m)\\varphi(n)$. Z rozkladu $n=p_1^{k_1}\\cdots p_r^{k_r}$ teda</p>
       <p style="text-align:center">$\\varphi(n)=n\\left(1-\\frac{1}{p_1}\\right)\\cdots\\left(1-\\frac{1}{p_r}\\right)$, napr. $\\varphi(36)=36\\cdot\\frac12\\cdot\\frac23=12$.</p>`,
      `<p><strong>Eulerova veta:</strong> ak $\\operatorname{NSD}(a, n)=1$, tak $a^{\\varphi(n)}\\equiv 1 \\pmod n$. Je to priamy dôsledok Lagrangeovej vety v grupe invertibilných prvkov $\\mathbb{Z}_n^{*}$, ktorá má $\\varphi(n)$ prvkov. Špeciálny prípad pre prvočíslo je <strong>Malá Fermatova veta</strong>: $a^{p-1}\\equiv 1 \\pmod p$ pre $p\\nmid a$, resp. $a^p\\equiv a$ pre každé $a$.</p>
       <p><strong>Mocniny modulo $n$:</strong> exponent zmenšíme modulo $\\varphi(n)$: ak $k=q\\varphi(n)+r$, tak $a^k\\equiv a^r$. Inak používame <strong>opakované umocňovanie na druhú</strong> – $a, a^2, a^4, a^8, \\dots$ – a vynásobíme mocniny podľa dvojkového zápisu exponentu.</p>`,
      `<p><strong>RSA</strong> je šifra s verejným kľúčom postavená na týchto vetách. Zvolíme veľké prvočísla $p, q$, $N=pq$ a $\\varphi(N)=(p-1)(q-1)$. Verejný exponent $e$ je nesúdeliteľný s $\\varphi(N)$ a súkromný exponent je $d\\equiv e^{-1} \\pmod{\\varphi(N)}$. Správu $m&lt;N$ zašifrujeme ako $c\\equiv m^e \\pmod N$ a dešifrujeme $m\\equiv c^d \\pmod N$ – funguje to, lebo $ed=1+k\\varphi(N)$ a podľa Eulerovej vety $m^{ed}\\equiv m$. Bezpečnosť spočíva v tom, že z $N$ nevieme rýchlo zistiť $p, q$, a teda ani $\\varphi(N)$ a $d$.</p>`
    ],
    examples: [
      { task: 'Nájdi $\\operatorname{NSD}(252, 198)$ a celé čísla $x, y$ s $252x+198y=\\operatorname{NSD}(252, 198)$.',
        steps: ['$252=1\\cdot 198+54$, $198=3\\cdot 54+36$, $54=1\\cdot 36+18$, $36=2\\cdot 18+0$, teda $\\operatorname{NSD}=18$.',
                'Spätne: $18=54-36=54-(198-3\\cdot 54)=4\\cdot 54-198=4\\cdot(252-198)-198=4\\cdot 252-5\\cdot 198$.',
                '<strong>Výsledok:</strong> $x=4$, $y=-5$ (skúška: $1008-990=18$). Ďalšie riešenia sú $x=4+11k$, $y=-5-14k$.'] },
      { task: 'Vypočítaj zvyšok čísla $3^{100}$ po delení $14$.',
        steps: ['$\\operatorname{NSD}(3, 14)=1$ a $\\varphi(14)=\\varphi(2)\\varphi(7)=1\\cdot 6=6$, podľa Eulerovej vety $3^6\\equiv 1 \\pmod{14}$.',
                '$100=16\\cdot 6+4$, preto $3^{100}=(3^6)^{16}\\cdot 3^4\\equiv 3^4=81 \\pmod{14}$.',
                '<strong>Výsledok:</strong> $81=5\\cdot 14+11$, zvyšok je $11$.'] }
    ]
  });

  gen('v6-cisla', () => {
    const k = rnd(0, 5);
    if (k === 0) {
      const d = rnd(2, 15), a = d * rnd(5, 40), b = d * rnd(3, 30);
      const A = Math.max(a, b), B = Math.min(a, b);
      if (A === B) return { answer: A, q: `Vypočítaj $\\operatorname{NSD}(${A}, ${B})$.`, solution: `Čísla sú rovnaké, $\\operatorname{NSD}=${A}$.`, hint: 'Použi Euklidov algoritmus.' };
      const g = gcd(A, B), r1 = A % B;
      return {
        mistakes: r1 !== g && r1 !== 0 ? [{ value: r1, msg: 'Toto je len prvý zvyšok. Pokračuj: $\\operatorname{NSD}(a, b) = \\operatorname{NSD}(b, r)$, kým nedostaneš zvyšok $0$; NSD je posledný nenulový zvyšok.' }] : [],
        steps: [
          { q: `Aký zvyšok dáva $${A}$ po delení číslom $${B}$?`, answer: r1 },
          { q: `Pokračuj v algoritme. Aký je $\\operatorname{NSD}(${A}, ${B})$?`, answer: g }
        ],
        answer: g,
        q: `Euklidovým algoritmom vypočítaj $\\operatorname{NSD}(${A}, ${B})$.`,
        solution: `$${euclid(A, B).join(',\\ ')}$. Posledný nenulový zvyšok je $${g}$, teda $\\operatorname{NSD}(${A}, ${B})=${g}$.`,
        hint: 'Opakuj delenie so zvyškom: $\\operatorname{NSD}(a, b)=\\operatorname{NSD}(b, a \\bmod b)$, kým zvyšok nie je nula.'
      };
    }
    if (k === 1) {
      let a, b, d;
      do { d = rnd(1, 9); a = d * rnd(4, 30); b = d * rnd(3, 25); } while (a <= b || b / gcd(a, b) < 2);
      d = gcd(a, b);
      const [, x0, y0] = egcd(a, b), step = b / d, x = mod(x0, step), y = (d - a * x) / b;
      return {
        mistakes: x0 !== x ? [{ value: x0, msg: `Našiel si jedno riešenie, ale nie v požadovanom rozsahu. Ostatné riešenia sa líšia o násobky $${step}$ – posuň $x$ do intervalu $\\langle 0; ${step})$.` }] : [],
        steps: [
          { q: `Vypočítaj $\\operatorname{NSD}(${a}, ${b})$.`, answer: d },
          { q: `O koľko sa líšia hodnoty $x$ dvoch susedných riešení?`, answer: step, hint: 'Rozdiel je $\\frac{b}{\\operatorname{NSD}(a, b)}$.' },
          { q: `Nájdi $x$ s $0\\leq x &lt; ${step}$.`, answer: x }
        ],
        answer: x,
        q: `Bézoutova rovnosť $${a}x+${b}y=\\operatorname{NSD}(${a}, ${b})$ má nekonečne veľa celočíselných riešení. Nájdi to, pre ktoré $0\\leq x&lt;${step}$, a zadaj hodnotu $x$.`,
        solution: `$${euclid(a, b).join(',\\ ')}$, teda $\\operatorname{NSD}=${d}$. Spätným dosadením $${a}\\cdot ${par(x0)}+${b}\\cdot ${par(y0)}=${d}$.`
          + ` Všetky riešenia sú $x=${x0}+${step}k$, $y=${y0}-${a / d}k$; podmienku $0\\leq x&lt;${step}$ spĺňa $x=${x}$ (vtedy $y=${y}$).`,
        hint: 'Rozšíreným Euklidovým algoritmom nájdi jedno riešenie; ostatné sa líšia o násobky $\\frac{b}{d}$ v $x$.'
      };
    }
    if (k === 2) {
      const n = pick([12, 15, 18, 20, 21, 24, 28, 30, 36, 40, 42, 45, 48, 50, 60, 63, 72, 84, 90, 100, 105, 120, 126, 144]);
      const F = factor(n), f = phi(n);
      const wPhi = F.reduce((s, [p, e]) => s * Math.pow(p - 1, e), 1), [p1, e1] = F[0];
      return {
        mistakes: [
          ...(wPhi !== f ? [{ value: wPhi, msg: 'Pre mocninu prvočísla platí $\\varphi(p^{e}) = p^{e} - p^{e-1} = p^{e-1}(p-1)$, nie $(p-1)^{e}$.' }] : []),
          ...(n - 1 !== f ? [{ value: n - 1, msg: `$\\varphi(n) = n - 1$ platí len pre prvočísla. Číslo $${n}$ je zložené, rozlož ho na prvočinitele.` }] : [])
        ],
        steps: [
          { q: `Vypočítaj $\\varphi(${e1 > 1 ? `${p1}^{${e1}}` : p1})$ pre najmenší prvočiniteľ čísla $${n}$ (s jeho exponentom).`, answer: (p1 - 1) * Math.pow(p1, e1 - 1) },
          { q: `Vypočítaj $\\varphi(${n})$.`, answer: f, hint: 'Pre nesúdeliteľné $m, k$ je $\\varphi(mk) = \\varphi(m)\\varphi(k)$.' }
        ],
        answer: f,
        q: `Vypočítaj hodnotu Eulerovej funkcie $\\varphi(${n})$.`,
        solution: `$${n}=${factTex(n)}$, teda $\\varphi(${n})=${n}${F.map(([p]) => `\\left(1-\\frac{1}{${p}}\\right)`).join('')}=`
          + `${F.map(([p, e]) => (e > 1 ? `(${p}^{${e}}-${p}^{${e - 1}})` : `(${p}-1)`)).join('\\cdot ')}=${f}$.`,
        hint: 'Rozlož $n$ na prvočinitele a použi $\\varphi(n)=n\\prod\\left(1-\\frac1p\\right)$.'
      };
    }
    if (k === 3) {
      let n, a;
      do { n = pick([7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 25]); a = rnd(2, 12); } while (gcd(a, n) !== 1 || a % n === 1);
      const e = rnd(50, 999), f = phi(n), r = e % f, v = powmod(a, e, n);
      const thm = isPrime(n) ? `Malá Fermatova veta: $${a}^{${f}}\\equiv 1 \\pmod{${n}}$` : `$\\varphi(${n})=${f}$ a podľa Eulerovej vety $${a}^{${f}}\\equiv 1 \\pmod{${n}}$`;
      const wv = powmod(a, e % n, n);
      return {
        mistakes: wv !== v ? [{ value: wv, msg: `Exponent sa redukuje modulo $\\varphi(${n})$, nie modulo $${n}$.` }] : [],
        steps: [
          { q: `Vypočítaj $\\varphi(${n})$.`, answer: f },
          { q: `Aký zvyšok dáva exponent $${e}$ po delení číslom $\\varphi(${n})$?`, answer: r },
          { q: `Vypočítaj zvyšok $${a}^{${e}}$ po delení $${n}$.`, answer: v }
        ],
        answer: v,
        q: `Vypočítaj zvyšok čísla $${a}^{${e}}$ po delení $${n}$.`,
        solution: `$\\operatorname{NSD}(${a}, ${n})=1$. ${thm}. Keďže $${e}=${Math.floor(e / f)}\\cdot ${f}+${r}$, je $${a}^{${e}}\\equiv ${a}^{${r}}$`
          + (r === 0 ? ` $=1$.` : `, a $${a}^{${r}}=${Math.pow(a, r) < 1e9 ? Math.pow(a, r) : '\\dots'}\\equiv ${v} \\pmod{${n}}$.`) + ` Zvyšok je $${v}$.`,
        hint: 'Exponent zmenši modulo $\\varphi(n)$ (Eulerova veta), potom dopočítaj malú mocninu.'
      };
    }
    // RSA
    const P = [5, 7, 11, 13, 17, 19, 23];
    let p, q, f, e;
    do { p = pick(P); q = pick(P); f = (p - 1) * (q - 1); e = pick([3, 5, 7, 11, 13, 17]); } while (p === q || gcd(e, f) !== 1 || e >= f);
    const N = p * q;
    if (k === 4) {
      const d = inv(e, f), dN = gcd(e, N) === 1 ? inv(e, N) : d;
      return {
        mistakes: dN !== d ? [{ value: dN, msg: 'Súkromný exponent je inverz $e$ modulo $\\varphi(N) = (p-1)(q-1)$, nie modulo $N$.' }] : [],
        steps: [
          { q: 'Vypočítaj $\\varphi(N)$.', answer: f },
          { q: `Nájdi $d\\equiv ${e}^{-1} \\pmod{\\varphi(N)}$.`, answer: d }
        ],
        answer: d,
        q: `V šifre RSA sú zvolené prvočísla $p=${p}$, $q=${q}$ a verejný exponent $e=${e}$. Vypočítaj súkromný exponent $d$ ($0&lt;d&lt;\\varphi(N)$).`,
        solution: `$N=${N}$, $\\varphi(N)=(${p}-1)(${q}-1)=${f}$. Hľadáme $d\\equiv ${e}^{-1} \\pmod{${f}}$: Euklidov algoritmus $${euclid(f, e).join(',\\ ')}$ dáva $d=${d}$. Skúška: $${e}\\cdot ${d}=${e * d}=${(e * d - 1) / f}\\cdot ${f}+1$.`,
        hint: 'Súkromný exponent je inverz $e$ modulo $\\varphi(N)=(p-1)(q-1)$.'
      };
    }
    const m = rnd(2, Math.min(N - 1, 60)), c = powmod(m, e, N);
    return {
      mistakes: m * e % N !== c ? [{ value: m * e % N, msg: 'Šifrovanie v RSA je umocnenie $m^{e}$, nie násobenie $m\\cdot e$.' }] : [],
      steps: [
        { q: `Vypočítaj $m^{2} \\bmod ${N}$.`, answer: m * m % N },
        { q: `Pokračuj umocňovaním na druhú a vypočítaj $c\\equiv ${m}^{${e}} \\pmod{${N}}$.`, answer: c }
      ],
      answer: c,
      q: `RSA s verejným kľúčom $(N, e)=(${N}, ${e})$. Zašifruj správu $m=${m}$, t. j. vypočítaj $c\\equiv m^{e} \\pmod{N}$ s $0\\leq c&lt;${N}$.`,
      solution: `Počítame modulo $${N}$. ${powSteps(m, e, N)}`,
      hint: 'Použi opakované umocňovanie na druhú a po každom násobení redukuj modulo $N$.'
    };
  });

  // ===== 70: Galoisova teória =====
  lesson({
    id: 'v6-galois', order: 70, title: 'Základy Galoisovej teórie',
    summary: 'Rozšírenia polí, stupeň rozšírenia, rozkladové pole, Galoisova grupa a prehľad riešiteľnosti rovníc v radikáloch.',
    theory: [
      `<p>Ak je pole $F$ podpoľom poľa $K$, hovoríme o <strong>rozšírení</strong> $K/F$. Pole $K$ je potom vektorový priestor nad $F$ a jeho dimenzia je <strong>stupeň rozšírenia</strong> $[K:F]$. Napríklad $\\mathbb{Q}(\\sqrt2)=\\{a+b\\sqrt2 : a, b\\in\\mathbb{Q}\\}$ má bázu $1, \\sqrt2$, teda $[\\mathbb{Q}(\\sqrt2):\\mathbb{Q}]=2$; $[\\mathbb{C}:\\mathbb{R}]=2$. Pre veže polí $F\\subseteq L\\subseteq K$ platí <strong>vzorec pre stupne</strong> $[K:F]=[K:L]\\cdot[L:F]$.</p>`,
      `<p>Prvok $\\alpha\\in K$ je <strong>algebraický</strong> nad $F$, ak je koreňom nenulového polynómu z $F[x]$. Normovaný polynóm najmenšieho stupňa s koreňom $\\alpha$ je <strong>minimálny polynóm</strong>; je ireducibilný a $[F(\\alpha):F]$ sa rovná jeho stupňu. Napr. $\\sqrt[3]{2}$ má minimálny polynóm $x^3-2$ (ireducibilný podľa Eisensteina), preto $[\\mathbb{Q}(\\sqrt[3]{2}):\\mathbb{Q}]=3$ a báza je $1, \\sqrt[3]{2}, \\sqrt[3]{4}$. Primitívna $p$-tá odmocnina z jednotky $\\zeta_p$ má minimálny polynóm $x^{p-1}+\\dots+x+1$, teda stupeň $p-1$.</p>`,
      `<p><strong>Rozkladové pole</strong> polynómu $f\\in F[x]$ je najmenšie rozšírenie, v ktorom sa $f$ rozloží na lineárne činitele – vznikne pridaním všetkých koreňov k $F$. Pre $x^2-2$ je to $\\mathbb{Q}(\\sqrt2)$ (stupeň $2$). Pre $x^3-2$ s koreňmi $\\sqrt[3]{2}, \\sqrt[3]{2}\\,\\omega, \\sqrt[3]{2}\\,\\omega^2$, kde $\\omega=e^{2\\pi i/3}$, je to $\\mathbb{Q}(\\sqrt[3]{2}, \\omega)$; keďže $[\\mathbb{Q}(\\sqrt[3]{2}):\\mathbb{Q}]=3$ a $\\omega\\notin\\mathbb{R}$ pridá ďalší stupeň $2$, celkový stupeň je $6$.</p>`,
      `<p><strong>Galoisova grupa</strong> $\\operatorname{Gal}(K/F)$ je grupa všetkých automorfizmov poľa $K$, ktoré nechávajú prvky $F$ na mieste. Každý taký automorfizmus posiela koreň polynómu s koeficientmi z $F$ opäť na koreň, preto ju možno chápať ako grupu permutácií koreňov. Pre rozkladové pole (nad $\\mathbb{Q}$) platí $|\\operatorname{Gal}(K/\\mathbb{Q})|=[K:\\mathbb{Q}]$.</p>
       <ul><li>$\\operatorname{Gal}(\\mathbb{Q}(\\sqrt2)/\\mathbb{Q})\\cong\\mathbb{Z}_2$: identita a $a+b\\sqrt2\\mapsto a-b\\sqrt2$.</li>
       <li>Rozkladové pole $(x^2-2)(x^2-3)$ je $\\mathbb{Q}(\\sqrt2, \\sqrt3)$, grupa $\\mathbb{Z}_2\\times\\mathbb{Z}_2$ (nezávisle meníme znamienka $\\sqrt2$ a $\\sqrt3$).</li>
       <li>Pre $x^3-2$ je Galoisova grupa celá $S_3$ – permutuje tri korene ľubovoľne.</li></ul>
       <p><strong>Hlavná veta Galoisovej teórie</strong> priraďuje podgrupám Galoisovej grupy navzájom jednoznačne medziľahlé polia $F\\subseteq L\\subseteq K$ (podgrupe $H$ pole prvkov, ktoré $H$ nemení). Napr. $\\mathbb{Q}(\\sqrt2, \\sqrt3)$ má päť medziľahlých polí: $\\mathbb{Q}$, $\\mathbb{Q}(\\sqrt2)$, $\\mathbb{Q}(\\sqrt3)$, $\\mathbb{Q}(\\sqrt6)$ a celé pole – rovnako ako má $\\mathbb{Z}_2\\times\\mathbb{Z}_2$ päť podgrúp.</p>`,
      `<p><strong>Riešiteľnosť v radikáloch (prehľad).</strong> Rovnica $f(x)=0$ je riešiteľná v radikáloch, ak sa jej korene dajú vyjadriť z koeficientov pomocou $+, -, \\cdot, :$ a odmocnín. Galois dokázal, že to nastane práve vtedy, keď je Galoisova grupa polynómu <strong>riešiteľná</strong> (dá sa postupne „rozobrať“ na komutatívne kúsky). Grupy $S_2, S_3, S_4$ sú riešiteľné – preto existujú vzorce pre rovnice stupňa $2$, $3$ (Cardano) a $4$ (Ferrari). Grupa $S_5$ riešiteľná nie je, a polynóm stupňa $5$, ktorý je ireducibilný nad $\\mathbb{Q}$ a má práve tri reálne korene, má Galoisovu grupu $S_5$ – napr. $x^5-4x+2$. Všeobecný vzorec pre rovnice stupňa $5$ a vyššieho preto neexistuje (Abelova–Ruffiniho veta), hoci niektoré konkrétne rovnice, napr. $x^5-2=0$, riešiteľné sú.</p>`
    ],
    examples: [
      { task: 'Urči stupeň rozšírenia $[\\mathbb{Q}(\\sqrt2, \\sqrt3):\\mathbb{Q}]$ a bázu.',
        steps: ['$[\\mathbb{Q}(\\sqrt2):\\mathbb{Q}]=2$, lebo $x^2-2$ je ireducibilný nad $\\mathbb{Q}$.',
                'Číslo $\\sqrt3\\notin\\mathbb{Q}(\\sqrt2)$: z $(a+b\\sqrt2)^2=3$ by vyšlo $2ab=0$ a potom $a^2=3$ alebo $2b^2=3$, čo v $\\mathbb{Q}$ nejde. Preto $[\\mathbb{Q}(\\sqrt2, \\sqrt3):\\mathbb{Q}(\\sqrt2)]=2$.',
                'Podľa vzorca pre stupne je celkový stupeň $2\\cdot 2=4$ a báza je $1, \\sqrt2, \\sqrt3, \\sqrt6$.'] },
      { task: 'Opíš Galoisovu grupu rozkladového poľa polynómu $x^3-2$ nad $\\mathbb{Q}$.',
        steps: ['Rozkladové pole $K=\\mathbb{Q}(\\sqrt[3]{2}, \\omega)$ má stupeň $6$, teda $|\\operatorname{Gal}(K/\\mathbb{Q})|=6$.',
                'Automorfizmus je určený obrazmi $\\sqrt[3]{2}\\mapsto\\sqrt[3]{2}\\,\\omega^j$ ($3$ možnosti) a $\\omega\\mapsto\\omega^{\\pm 1}$ ($2$ možnosti); všetkých $6$ kombinácií nastane.',
                'Grupa permutuje tri korene a má $6=3!$ prvkov, je to teda celá $S_3$ – nekomutatívna, ale riešiteľná, v súlade s tým, že $\\sqrt[3]{2}$ je vyjadrené odmocninou.'] }
    ]
  });

  const SQF = [2, 3, 5, 6, 7, 10, 11, 13, 14, 15];
  const sqrtT = (n) => `\\sqrt{${n}}`;

  gen('v6-galois', () => {
    const k = rnd(0, 3);
    if (k === 0) {
      const t = rnd(0, 3);
      if (t === 0) {
        const a = pick(SQF);
        let b, same = Math.random() < 0.35;
        if (same) b = a * pick([4, 9]); else do { b = pick(SQF); } while (b === a);
        return {
          mistakes: [same
            ? { value: 4, msg: `Over, či $${sqrtT(b)}$ už neleží v $\\mathbb{Q}(${sqrtT(a)})$: $${b} = ${b / a}\\cdot ${a}$ a $${b / a}$ je štvorec.` }
            : { value: 2, msg: `Číslo $${sqrtT(b)}$ neleží v $\\mathbb{Q}(${sqrtT(a)})$, takže pridá ďalší stupeň $2$; stupne sa násobia.` }],
          answer: same ? 2 : 4,
          q: `Urči stupeň rozšírenia $[\\mathbb{Q}(${sqrtT(a)}, ${sqrtT(b)}):\\mathbb{Q}]$.`,
          solution: same
            ? `$${sqrtT(b)}=${Math.sqrt(b / a)}${sqrtT(a)}\\in\\mathbb{Q}(${sqrtT(a)})$, teda $\\mathbb{Q}(${sqrtT(a)}, ${sqrtT(b)})=\\mathbb{Q}(${sqrtT(a)})$ a stupeň je $2$.`
            : `$[\\mathbb{Q}(${sqrtT(a)}):\\mathbb{Q}]=2$ a $${sqrtT(b)}\\notin\\mathbb{Q}(${sqrtT(a)})$ (súčin $${a * b}$ nie je štvorec racionálneho čísla), preto podľa vzorca pre stupne je stupeň $2\\cdot 2=4$ s bázou $1, ${sqrtT(a)}, ${sqrtT(b)}, ${sqrtT(a * b)}$.`,
          hint: 'Zisti, či druhá odmocnina už leží v $\\mathbb{Q}(\\sqrt a)$; potom použi $[K:F]=[K:L][L:F]$.'
        };
      }
      if (t === 1) {
        const n = rnd(2, 7), c = pick([2, 3, 5, 7]);
        return {
          answer: n,
          q: `Urči stupeň rozšírenia $[\\mathbb{Q}(\\sqrt[${n}]{${c}}):\\mathbb{Q}]$.`.replace(`\\sqrt[2]{${c}}`, `\\sqrt{${c}}`),
          solution: `Číslo je koreňom polynómu $x^{${n}}-${c}$, ktorý je podľa Eisensteinovho kritéria (prvočíslo $${c}$) ireducibilný nad $\\mathbb{Q}$. Je to teda minimálny polynóm a stupeň rozšírenia je $${n}$.`,
          hint: 'Stupeň $[\\mathbb{Q}(\\alpha):\\mathbb{Q}]$ je stupeň minimálneho polynómu prvku $\\alpha$; ireducibilitu over Eisensteinovým kritériom.'
        };
      }
      if (t === 2) {
        const p = pick([3, 5, 7, 11, 13]);
        return {
          answer: p - 1,
          q: `Nech $\\zeta=e^{2\\pi i/${p}}$ je primitívna ${p}. odmocnina z jednotky. Urči $[\\mathbb{Q}(\\zeta):\\mathbb{Q}]$.`,
          solution: `$x^{${p}}-1=(x-1)(x^{${p - 1}}+\\dots+x+1)$ a pre prvočíslo $${p}$ je druhý činiteľ ireducibilný nad $\\mathbb{Q}$. Je to minimálny polynóm prvku $\\zeta$, stupeň je $${p - 1}$.`,
          hint: 'Minimálny polynóm primitívnej $p$-tej odmocniny z jednotky je $x^{p-1}+\\dots+x+1$.'
        };
      }
      const c = pick([2, 3, 5, 7]);
      return {
        mistakes: [{ value: 3, msg: `Toto je stupeň $\\mathbb{Q}(\\sqrt[3]{${c}})$. Toto pole je reálne, ostatné dva korene v ňom nie sú – treba pridať ešte $\\omega$.` }],
        steps: [
          { q: `Urči $[\\mathbb{Q}(\\sqrt[3]{${c}}):\\mathbb{Q}]$.`, answer: 3 },
          { q: `Aký stupeň pridá $\\omega = e^{2\\pi i/3}$ nad $\\mathbb{Q}(\\sqrt[3]{${c}})$?`, answer: 2, hint: '$\\omega$ je koreňom $x^2 + x + 1$ a nie je reálne.' },
          { q: 'Urči stupeň rozkladového poľa.', answer: 6 }
        ],
        answer: 6,
        q: `Urči stupeň rozkladového poľa polynómu $x^3-${c}$ nad $\\mathbb{Q}$.`,
        solution: `Korene sú $\\sqrt[3]{${c}}, \\sqrt[3]{${c}}\\,\\omega, \\sqrt[3]{${c}}\\,\\omega^2$, rozkladové pole je $\\mathbb{Q}(\\sqrt[3]{${c}}, \\omega)$. $[\\mathbb{Q}(\\sqrt[3]{${c}}):\\mathbb{Q}]=3$ a $\\omega$ (koreň $x^2+x+1$) nie je reálne, pridá stupeň $2$. Spolu $3\\cdot 2=6$.`,
        hint: 'Pridaj najprv reálny koreň, potom $\\omega=e^{2\\pi i/3}$, a použi vzorec pre stupne.'
      };
    }
    if (k === 1) {
      const t = rnd(0, 4);
      let poly, ans, why;
      if (t === 0) {
        const d = pick(SQF); poly = `x^2-${d}`; ans = 2;
        why = `Rozkladové pole je $\\mathbb{Q}(${sqrtT(d)})$ stupňa $2$; grupa obsahuje identitu a konjugáciu $${sqrtT(d)}\\mapsto -${sqrtT(d)}$, je izomorfná so $\\mathbb{Z}_2$.`;
      } else if (t === 1) {
        const d = pick([2, 3, 5, 6, 7, 10]); poly = `x^3-${d}`; ans = 6;
        why = `Rozkladové pole $\\mathbb{Q}(\\sqrt[3]{${d}}, \\omega)$ má stupeň $6$, Galoisova grupa je $S_3$.`;
      } else if (t === 2) {
        const a = pick(SQF); let b; do { b = pick(SQF); } while (b === a);
        poly = `(x^2-${a})(x^2-${b})`; ans = 4;
        why = `Rozkladové pole $\\mathbb{Q}(${sqrtT(a)}, ${sqrtT(b)})$ má stupeň $4$, grupa je $\\mathbb{Z}_2\\times\\mathbb{Z}_2$ (nezávislé zmeny znamienok oboch odmocnín).`;
      } else if (t === 3) {
        const p = pick([3, 5, 7, 11]); poly = `x^{${p}}-1`; ans = p - 1;
        why = `Rozkladové pole je $\\mathbb{Q}(\\zeta_{${p}})$ stupňa $${p - 1}$; automorfizmy $\\zeta\\mapsto\\zeta^j$ pre $j=1, \\dots, ${p - 1}$ tvoria grupu izomorfnú s $\\mathbb{Z}_{${p}}^{*}$.`;
      } else {
        const d = pick([2, 3, 5, 6, 7]); poly = `x^4-${d}`; ans = 8;
        why = `Korene sú $\\pm\\sqrt[4]{${d}}, \\pm i\\sqrt[4]{${d}}$, rozkladové pole je $\\mathbb{Q}(\\sqrt[4]{${d}}, i)$ stupňa $4\\cdot 2=8$; grupa je dihedrálna grupa symetrií štvorca $D_4$.`;
      }
      const degP = [2, 3, 4, 0, 4][t] || ans + 1;
      return {
        mistakes: degP !== ans ? [{ value: degP, msg: 'Rád Galoisovej grupy sa rovná stupňu rozkladového poľa, nie stupňu polynómu (počtu koreňov).' }] : [],
        answer: ans,
        q: `Koľko prvkov má Galoisova grupa rozkladového poľa polynómu $${poly}$ nad $\\mathbb{Q}$?`,
        solution: `Pre rozkladové pole $K$ platí $|\\operatorname{Gal}(K/\\mathbb{Q})|=[K:\\mathbb{Q}]$. ${why} Odpoveď: $${ans}$.`,
        hint: 'Rád Galoisovej grupy rozkladového poľa sa rovná stupňu rozšírenia; nájdi korene a postupne ich pridávaj.'
      };
    }
    if (k === 2) {
      const t = rnd(0, 3);
      let what, ans, why;
      if (t === 0) {
        const p = pick([5, 7, 11, 13, 17]), D = divisors(p - 1);
        what = `\\mathbb{Q}(\\zeta_{${p}})`; ans = D.length;
        why = `Galoisova grupa je cyklická rádu $${p - 1}$ (izomorfná so $\\mathbb{Z}_{${p}}^{*}$) a cyklická grupa má jednu podgrupu ku každému deliteľovi: $${D.join(', ')}$.`;
      } else if (t === 1) {
        const a = pick(SQF); let b; do { b = pick(SQF); } while (b === a);
        what = `\\mathbb{Q}(${sqrtT(a)}, ${sqrtT(b)})`; ans = 5;
        why = `Grupa $\\mathbb{Z}_2\\times\\mathbb{Z}_2$ má podgrupy: triviálnu, tri rádu $2$ a celú grupu. Zodpovedajú im polia $${what}$, $\\mathbb{Q}(${sqrtT(a)})$, $\\mathbb{Q}(${sqrtT(b)})$, $\\mathbb{Q}(${sqrtT(a * b)})$ a $\\mathbb{Q}$.`;
      } else if (t === 2) {
        const d = pick([2, 3, 5, 7]);
        what = `\\mathbb{Q}(\\sqrt[3]{${d}}, \\omega)`; ans = 6;
        why = `Galoisova grupa je $S_3$, ktorá má $6$ podgrúp: triviálnu, tri rádu $2$, $A_3$ rádu $3$ a celú $S_3$. Napr. $A_3$ zodpovedá pole $\\mathbb{Q}(\\omega)$ a podgrupám rádu $2$ polia $\\mathbb{Q}(\\sqrt[3]{${d}}\\,\\omega^j)$.`;
      } else {
        const d = pick(SQF);
        what = `\\mathbb{Q}(${sqrtT(d)})`; ans = 2;
        why = 'Galoisova grupa $\\mathbb{Z}_2$ má len dve podgrupy, medziľahlé polia sú len $\\mathbb{Q}$ a celé rozšírenie.';
      }
      return {
        mistakes: ans > 2 ? [{ value: ans - 2, msg: 'Započítaj aj krajné polia $\\mathbb{Q}$ a celé rozšírenie – zodpovedajú celej grupe a triviálnej podgrupe.' }] : [],
        answer: ans,
        q: `Koľko medziľahlých polí $L$ s $\\mathbb{Q}\\subseteq L\\subseteq ${what}$ existuje (vrátane $\\mathbb{Q}$ a celého poľa)?`,
        solution: `Podľa hlavnej vety Galoisovej teórie je medziľahlých polí toľko ako podgrúp Galoisovej grupy. ${why} Odpoveď: $${ans}$.`,
        hint: 'Použi hlavnú vetu Galoisovej teórie: medziľahlé polia zodpovedajú podgrupám Galoisovej grupy.'
      };
    }
    const O = ['riešiteľná v radikáloch', 'nie je riešiteľná v radikáloch'];
    const L = [
      ['x^5-4x+2=0', 1, 'Polynóm je ireducibilný (Eisenstein, $p=2$) a má práve tri reálne korene, preto je jeho Galoisova grupa $S_5$, ktorá nie je riešiteľná.'],
      ['x^5-6x+3=0', 1, 'Polynóm je ireducibilný (Eisenstein, $p=3$) a má práve tri reálne korene, Galoisova grupa je $S_5$ – nie je riešiteľná.'],
      ['x^5-10x+5=0', 1, 'Polynóm je ireducibilný (Eisenstein, $p=5$) a má práve tri reálne korene, Galoisova grupa je $S_5$ – nie je riešiteľná.'],
      ['x^5-2=0', 0, 'Korene sú $\\sqrt[5]{2}\\,\\zeta^j$, kde $\\zeta=e^{2\\pi i/5}$ – sú priamo vyjadrené odmocninami (Galoisova grupa rádu $20$ je riešiteľná).'],
      ['x^5-1=0', 0, 'Korene sú piate odmocniny z jednotky; Galoisova grupa $\\mathbb{Z}_4$ je komutatívna, teda riešiteľná.'],
      ['x^4-5x^2+6=0', 0, 'Ide o rovnicu stupňa 4 (navyše $(x^2-2)(x^2-3)=0$, korene $\\pm\\sqrt2, \\pm\\sqrt3$); všetky rovnice stupňa najviac 4 sú riešiteľné v radikáloch.'],
      ['x^3-3x+1=0', 0, 'Rovnica stupňa 3 je vždy riešiteľná Cardanovými vzorcami – grupy $S_3$ a $A_3$ sú riešiteľné.'],
      ['x^4+x+1=0', 0, 'Rovnica stupňa 4 je riešiteľná Ferrariho metódou, lebo $S_4$ a všetky jej podgrupy sú riešiteľné.'],
      ['x^3-2=0', 0, 'Korene $\\sqrt[3]{2}\\,\\omega^j$ sú vyjadrené odmocninami; Galoisova grupa $S_3$ je riešiteľná.']
    ];
    const [eq, ans, why] = pick(L);
    return {
      choiceHints: { [O[1 - ans]]: ans === 1
        ? 'Stupeň 5 sám osebe nerozhoduje. Ak je polynóm ireducibilný a má práve tri reálne korene, jeho Galoisova grupa je $S_5$ – je riešiteľná?'
        : 'Neexistuje len všeobecný vzorec pre stupeň 5. Rovnice stupňa najviac 4 a mnohé konkrétne rovnice vyššieho stupňa riešiteľné sú – rozhoduje Galoisova grupa.' },
      type: 'choice', options: O, answer: O[ans],
      q: `Je rovnica $${eq}$ nad $\\mathbb{Q}$ riešiteľná v radikáloch?`,
      solution: `${why} Odpoveď: <strong>${O[ans]}</strong>.`,
      hint: 'Rovnice stupňa najviac 4 sú vždy riešiteľné. Pri stupni 5 rozhoduje Galoisova grupa: $S_5$ riešiteľná nie je.'
    };
  });
})();
