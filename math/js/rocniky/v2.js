/* Vysoká škola – Matematická analýza (úroveň v2): reálne a komplexné čísla, postupnosti, limita a spojitosť funkcie, L'Hospitalovo pravidlo,
   metódy integrovania, určitý a nevlastný integrál, číselné a mocninové rady, Taylorov rad,
   funkcie viac premenných, parciálne derivácie, extrémy, dvojný a viacnásobné integrály, vektorová analýza.
   Nadväzuje na gymnaziálne lekcie (s4.js, „derivacie“ a „integraly“ v content.js) a neopakuje ich. */
(function () {
  'use strict';

  const { rnd, pick, gcd, term, shuffle } = EXERCISES.util;
  const { plane, axes, curvePath, svg, n1, sk } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v2' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 člen, 2 členy, 5 členov.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);

  const nz = (a, b) => { let v = 0; while (v === 0) v = rnd(a, b); return v; };
  const par = (v) => (v < 0 ? `(${v})` : String(v));
  const round = (x, d) => Math.round(x * Math.pow(10, d)) / Math.pow(10, d);
  const dd = (x, d = 3) => round(x, d).toFixed(d).replace('.', '{,}'); // pevný počet miest, pre KaTeX
  const dt = (x, d = 3) => round(x, d).toFixed(d).replace('.', ',');   // pevný počet miest, obyčajný text
  const red = (p, q) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return [p / g, q / g]; };
  const fTex = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a < 0 ? '-' : ''}\\frac{${Math.abs(a)}}{${b}}`; };
  const fTxt = (p, q) => { const [a, b] = red(p, q); return b === 1 ? String(a) : `${a}/${b}`; };
  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
  // lineárna kombinácia: lin([[2,'x'],[-1,'y'],[3,'']]) = "2x - y + 3"
  const lin = (pairs) => {
    const s = pairs.map(([c, v]) => term(c, v)).join('').trim();
    return !s ? '0' : s[0] === '+' ? s.slice(2) : '-' + s.slice(2);
  };
  // koeficient pri premennej: cx(1)='x', cx(-1)='-x', cx(3)='3x'
  const cx = (a, v = 'x') => (a === 1 ? v : a === -1 ? '-' + v : a + v);
  // činiteľ (x − a): fac(0)='x', fac(2)='(x - 2)'
  const fac = (a, v = 'x') => (a === 0 ? v : `(${lin([[1, v], [-a, '']])})`);
  // súčet členov so zlomkovými koeficientmi: rsum([[1,2,'x'],[-1,4,'']]) = "\frac{1}{2}x - \frac{1}{4}"
  const rsum = (ts) => {
    let s = '';
    ts.forEach(([p, q, v]) => {
      const [a, b] = red(p, q);
      if (a === 0) return;
      const A = Math.abs(a);
      const body = b === 1 ? (A === 1 && v ? v : A + v) : `\\frac{${A}}{${b}}${v}`;
      s += s ? (a < 0 ? ' - ' : ' + ') + body : (a < 0 ? '-' : '') + body;
    });
    return s || '0';
  };
  // člen so zlomkom: sfr(3,'n') = "+\frac{3}{n}", sfr(-1,'n^2') = "-\frac{1}{n^2}", sfr(0,…) = ""
  const sfr = (c, den) => (c === 0 ? '' : `${c > 0 ? '+' : '-'}\\frac{${Math.abs(c)}}{${den}}`);
  // koeficient pred funkciou: fco(-1, true) = '-', fco(3) = ' + 3', fco(-1) = ' - '
  const fco = (c, first) => (first ? (c === 1 ? '' : c === -1 ? '-' : String(c)) : `${c > 0 ? ' + ' : ' - '}${Math.abs(c) === 1 ? '' : Math.abs(c)}`);
  const fx = (a) => lin([[1, 'x'], [-a, '']]); // x − a bez zátvoriek
  const ROUND3 = 'Výsledok zaokrúhli na 3 desatinné miesta.';
  const TOL3 = 0.0006;
  const CONV = ['konverguje', 'diverguje'];

  // Mriežka s popisom v zadaných hodnotách (pre grafy, kde os neprechádza nulou).
  function frame(p, xt, yt, fx = (v) => sk(v, 0), fy = (v) => sk(v, 1)) {
    let s = '';
    xt.forEach((x) => {
      s += `<line class="f-grid" x1="${n1(p.X(x))}" y1="${n1(p.Y(p.ymin))}" x2="${n1(p.X(x))}" y2="${n1(p.Y(p.ymax))}"/>
        <text class="f-small" x="${n1(p.X(x))}" y="${n1(p.Y(p.ymin) + 15)}" text-anchor="middle">${fx(x)}</text>`;
    });
    yt.forEach((y) => {
      s += `<line class="f-grid" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(y))}" x2="${n1(p.X(p.xmax))}" y2="${n1(p.Y(y))}"/>
        <text class="f-small" x="${n1(p.X(p.xmin) - 4)}" y="${n1(p.Y(y) + 4)}" text-anchor="end">${fy(y)}</text>`;
    });
    return s + `<line class="f-axis" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(p.ymin))}" x2="${n1(p.X(p.xmax))}" y2="${n1(p.Y(p.ymin))}"/>
      <line class="f-axis" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(p.ymin))}" x2="${n1(p.X(p.xmin))}" y2="${n1(p.Y(p.ymax))}"/>`;
  }

  // šípka v súradniciach roviny p
  function arrow(p, x1, y1, x2, y2, cls = 'f-accent', head = 'c-accent') {
    const X1 = p.X(x1), Y1 = p.Y(y1), X2 = p.X(x2), Y2 = p.Y(y2);
    const L = Math.hypot(X2 - X1, Y2 - Y1) || 1, ux = (X2 - X1) / L, uy = (Y2 - Y1) / L;
    const bx = X2 - 11 * ux, by = Y2 - 11 * uy;
    return `<line class="${cls}" x1="${n1(X1)}" y1="${n1(Y1)}" x2="${n1(bx)}" y2="${n1(by)}"/>
      <polygon class="${head}" points="${n1(X2)},${n1(Y2)} ${n1(bx - 5 * uy)},${n1(by + 5 * ux)} ${n1(bx + 5 * uy)},${n1(by - 5 * ux)}"/>`;
  }

  /* ======================= 0. REÁLNE A KOMPLEXNÉ ČÍSLA ======================= */

  // komplexné číslo a + bi v algebraickom tvare: cTex(3,-4) = "3-4\mathrm{i}", cTex(0,1) = "\mathrm{i}"
  const cTex = (a, b) => {
    if (b === 0) return String(a);
    const im = Math.abs(b) === 1 ? '\\mathrm{i}' : `${Math.abs(b)}\\mathrm{i}`;
    if (a === 0) return (b < 0 ? '-' : '') + im;
    return `${a}${b < 0 ? '-' : '+'}${im}`;
  };
  const cMul = (u, v) => [u[0] * v[0] - u[1] * v[1], u[0] * v[1] + u[1] * v[0]];
  const degT = (x) => String(round(x, 1)).replace('.', '{,}'); // stupne v KaTeX
  const SUP = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶'];

  fig('v2-gauss', {
    controls: [
      { id: 'r', label: '|z|', min: 0.6, max: 1.25, step: 0.05, value: 1.1 },
      { id: 'phi', label: 'arg z (°)', min: 0, max: 360, step: 5, value: 40 },
      { id: 'n', label: 'n', min: 1, max: 6, step: 1, value: 3 }
    ],
    draw: (v) => {
      const p = plane(-4, 4, -4, 4, 340, 340);
      const R = (r) => p.X(r) - p.X(0);
      const f = v.phi * Math.PI / 180, a = v.r * Math.cos(f), b = v.r * Math.sin(f);
      const rn = Math.pow(v.r, v.n), fn = v.n * f, an = rn * Math.cos(fn), bn = rn * Math.sin(fn);
      const circ = (r, cls) => `<circle class="${cls}" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" r="${n1(R(r))}"/>`;
      const ang = Math.min(v.phi, 359.9) * Math.PI / 180, rho = 0.6;
      const arc = v.phi > 0 ? `<path class="f-warn" d="M${n1(p.X(rho))} ${n1(p.Y(0))} A${n1(R(rho))} ${n1(R(rho))} 0 ${v.phi > 180 ? 1 : 0} 0 ${n1(p.X(rho * Math.cos(ang)))} ${n1(p.Y(rho * Math.sin(ang)))}"/>` : '';
      const clipped = circ(1, 'f-dash') + circ(rn, 'f-thin')
        + `<line class="f-dash" x1="${n1(p.X(a))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(a))}" y2="${n1(p.Y(b))}"/>` + arc
        + arrow(p, 0, 0, an, bn, 'f-ok', 'c-ok') + arrow(p, 0, 0, a, b);
      const lab = (x, y, t, cls) => {
        const L = Math.hypot(x, y) || 1;
        return `<text class="f-math ${cls}" x="${n1(p.X(x + 0.35 * x / L))}" y="${n1(p.Y(y + 0.35 * y / L) + 5)}" text-anchor="middle">${t}</text>`;
      };
      const front = lab(a, b, 'z', 'c-accent') + (v.n > 1 ? lab(an, bn, 'z' + SUP[v.n], 'c-ok') : '')
        + `<text class="f-small" x="${n1(p.X(3.9))}" y="${n1(p.Y(0) - 6)}" text-anchor="end">Re</text>
        <text class="f-small" x="${n1(p.X(0) + 6)}" y="${n1(p.Y(3.8))}">Im</text>`;
      const sg = (x) => (x < 0 ? '−' : '+');
      const deg = ((v.n * v.phi) % 360 + 360) % 360;
      return {
        svg: svg(p, axes(p, 1), clipped, front, 'Komplexné číslo a jeho mocnina v Gaussovej rovine'),
        readout: `<span class="c-accent">z ≈ ${sk(a)} ${sg(b)} ${sk(Math.abs(b))}i</span> = ${sk(v.r)}·(cos ${v.phi}° + i sin ${v.phi}°) · `
          + `<span class="c-ok">z${SUP[v.n]} = ${sk(rn, 3)}·(cos ${deg}° + i sin ${deg}°) ≈ ${sk(an)} ${sg(bn)} ${sk(Math.abs(bn))}i</span>`
      };
    }
  });

  lesson({
    id: 'v2-komplexne', order: 5, title: 'Reálne a komplexné čísla',
    summary: 'Axióma úplnosti, supremum a infimum, komplexné čísla v algebraickom a goniometrickom tvare, Moivreova veta a n-té odmocniny.',
    theory: [
      `<p><strong>Reálne čísla axiomaticky.</strong> Množina $\\mathbb{R}$ s operáciami $+$, $\\cdot$ a usporiadaním $\\le$ spĺňa tri skupiny axióm: <em>axiómy poľa</em> (komutatívnosť, asociatívnosť, distributívnosť, existencia $0$ a $1$, opačného prvku a pre $x\\neq 0$ aj prevráteného prvku),
       <em>axiómy usporiadania</em> (z $x\\le y$ vyplýva $x+z\\le y+z$; z $0\\le x$ a $0\\le y$ vyplýva $0\\le xy$) a <em>axiómu úplnosti</em>. Prvé dve skupiny spĺňajú aj racionálne čísla – až úplnosť odlišuje $\\mathbb{R}$ od $\\mathbb{Q}$.</p>
       <p>Číslo $K$ je <strong>horné ohraničenie</strong> množiny $A\\subset\\mathbb{R}$, ak $a\\le K$ pre všetky $a\\in A$. Najmenšie horné ohraničenie sa nazýva <strong>supremum</strong> $\\sup A$, najväčšie dolné ohraničenie <strong>infimum</strong> $\\inf A$.
       <strong>Axióma úplnosti:</strong> každá neprázdna zhora ohraničená množina reálnych čísel má v $\\mathbb{R}$ supremum.</p>`,
      `<p>Číslo $s$ je supremom množiny $A$ práve vtedy, keď (1) $a\\le s$ pre všetky $a\\in A$ a (2) ku každému $\\varepsilon\\gt 0$ existuje $a\\in A$ také, že $a\\gt s-\\varepsilon$.
       Supremum nemusí patriť do množiny: $A=\\left\\{1-\\frac{1}{n}:\\ n\\in\\mathbb{N}\\right\\}$ má $\\sup A=1$, ale maximum nemá, kým $\\inf A=\\min A=0$. Ak $\\sup A\\in A$, je supremum zároveň maximom.</p>
       <ul><li>V $\\mathbb{Q}$ úplnosť neplatí: množina $\\{x\\in\\mathbb{Q}:\\ x^2\\lt 2\\}$ je ohraničená, no jej „kandidát na supremum“ $\\sqrt{2}$ nie je racionálny.</li>
       <li>Z úplnosti vyplýva <em>Archimedova vlastnosť</em> (ku každému $x\\in\\mathbb{R}$ existuje $n\\in\\mathbb{N}$, $n\\gt x$), existencia $n$-tých odmocnín kladných čísel aj veta o monotónnej ohraničenej postupnosti.</li></ul>`,
      `<p><strong>Komplexné čísla</strong> sú usporiadané dvojice reálnych čísel, ktoré zapisujeme v <em>algebraickom tvare</em> $z=a+b\\mathrm{i}$, kde $\\mathrm{i}^2=-1$. Číslo $a=\\operatorname{Re} z$ je reálna a $b=\\operatorname{Im} z$ imaginárna časť. Počítame ako s dvojčlenmi a $\\mathrm{i}^2$ nahradíme číslom $-1$:</p>
       <p style="text-align:center">$(a+b\\mathrm{i})(c+d\\mathrm{i})=(ac-bd)+(ad+bc)\\mathrm{i} .$</p>
       <p><strong>Komplexne združené</strong> číslo je $\\bar z=a-b\\mathrm{i}$, <strong>absolútna hodnota</strong> $|z|=\\sqrt{a^2+b^2}$ a platí $z\\bar z=|z|^2$. Delíme rozšírením číslom združeným k menovateľu: $\\dfrac{z}{w}=\\dfrac{z\\bar w}{|w|^2}$.
       Množina $\\mathbb{C}$ je pole, ktoré sa však nedá usporiadať v súlade s operáciami – nerovnosť medzi dvoma komplexnými číslami nemá zmysel.</p>`,
      `<p><strong>Gaussova rovina.</strong> Číslo $a+b\\mathrm{i}$ zobrazíme ako bod $[a;b]$. Absolútna hodnota $|z|$ je jeho vzdialenosť od počiatku a <strong>argument</strong> $\\arg z$ je orientovaný uhol od kladnej reálnej poloosi. Z $a=|z|\\cos\\varphi$, $b=|z|\\sin\\varphi$ dostaneme <em>goniometrický</em> a pomocou Eulerovho vzorca $\\mathrm{e}^{\\mathrm{i}\\varphi}=\\cos\\varphi+\\mathrm{i}\\sin\\varphi$ aj <em>exponenciálny tvar</em></p>
       <p style="text-align:center">$z=r(\\cos\\varphi+\\mathrm{i}\\sin\\varphi)=r\\,\\mathrm{e}^{\\mathrm{i}\\varphi},\\qquad r=|z| .$</p>
       <p>Argument je určený až na násobok $2\\pi$, <em>hlavná hodnota</em> leží v intervale $(-\\pi;\\pi\\rangle$. Pozor na kvadrant: rovnica $\\operatorname{tg}\\varphi=\\frac{b}{a}$ sama nestačí, napr. $\\arg(-1-\\mathrm{i})=-\\frac{3\\pi}{4}$, nie $\\frac{\\pi}{4}$.
       Pri násobení sa absolútne hodnoty násobia a argumenty sčítajú: $r_1\\mathrm{e}^{\\mathrm{i}\\varphi_1}\\cdot r_2\\mathrm{e}^{\\mathrm{i}\\varphi_2}=r_1r_2\\,\\mathrm{e}^{\\mathrm{i}(\\varphi_1+\\varphi_2)}$.</p>`,
      { fig: 'v2-gauss', caption: 'Číslo $z=r(\\cos\\varphi+\\mathrm{i}\\sin\\varphi)$ (modré) a jeho mocnina $z^n$ (zelená). Mocnina má absolútnu hodnotu $r^n$ a argument $n\\varphi$: pre $r\\gt 1$ sa vzďaľuje od jednotkovej kružnice (čiarkovaná), pre $r\\lt 1$ sa k počiatku približuje.' },
      `<p><strong>Moivreova veta.</strong> Opakovaným násobením dostaneme pre každé celé $n$</p>
       <p style="text-align:center">$\\left[r(\\cos\\varphi+\\mathrm{i}\\sin\\varphi)\\right]^n=r^n(\\cos n\\varphi+\\mathrm{i}\\sin n\\varphi) .$</p>
       <p><strong>$n$-té odmocniny.</strong> Rovnica $z^n=w$, kde $w=R\\,\\mathrm{e}^{\\mathrm{i}\\psi}\\neq 0$, má práve $n$ rôznych komplexných riešení</p>
       <p style="text-align:center">$z_k=\\sqrt[n]{R}\\;\\mathrm{e}^{\\mathrm{i}\\frac{\\psi+2k\\pi}{n}},\\qquad k=0,1,\\dots,n-1 .$</p>
       <p>Ležia na kružnici s polomerom $\\sqrt[n]{R}$ vo vrcholoch pravidelného $n$-uholníka, susedné sa líšia o uhol $\\frac{2\\pi}{n}$. Je to špeciálny prípad <em>základnej vety algebry</em>: každý polynóm stupňa $n\\ge 1$ s komplexnými koeficientmi má v $\\mathbb{C}$ práve $n$ koreňov, ak ich rátame aj s násobnosťou.</p>`
    ],
    examples: [
      { task: 'Urči supremum a infimum množiny $A=\\left\\{\\dfrac{2n+3}{n+1}:\\ n\\in\\mathbb{N}\\right\\}$ a rozhodni, či ide o maximum a minimum.',
        steps: ['Upravíme: $\\dfrac{2n+3}{n+1}=2+\\dfrac{1}{n+1}$. Zlomok $\\frac{1}{n+1}$ s rastúcim $n$ klesá k nule, prvky množiny teda tvoria klesajúcu postupnosť.',
          'Najväčší prvok je pre $n=1$: $\\frac{5}{2}$. Preto $\\sup A=\\max A=\\frac{5}{2}$.',
          'Všetky prvky sú väčšie ako $2$, teda $2$ je dolné ohraničenie. Ku každému $\\varepsilon\\gt 0$ existuje $n$ s $\\frac{1}{n+1}\\lt\\varepsilon$, t. j. prvok menší ako $2+\\varepsilon$ – väčšie dolné ohraničenie neexistuje.',
          '<strong>Výsledok: $\\sup A=\\max A=\\frac{5}{2}$, $\\inf A=2$, minimum neexistuje</strong>'] },
      { task: 'Vypočítaj $(1-\\mathrm{i})^{10}$ a výsledok zapíš v algebraickom tvare.',
        steps: ['$|1-\\mathrm{i}|=\\sqrt{2}$ a bod $[1;-1]$ leží vo 4. kvadrante, preto $\\arg(1-\\mathrm{i})=-\\frac{\\pi}{4}$ a $1-\\mathrm{i}=\\sqrt{2}\\,\\mathrm{e}^{-\\mathrm{i}\\pi/4}$.',
          'Podľa Moivreovej vety $(1-\\mathrm{i})^{10}=(\\sqrt{2})^{10}\\,\\mathrm{e}^{-\\mathrm{i}\\cdot 10\\pi/4}=32\\,\\mathrm{e}^{-\\mathrm{i}\\cdot 5\\pi/2}$.',
          'Uhol $-\\frac{5\\pi}{2}$ sa od $-\\frac{\\pi}{2}$ líši o $-2\\pi$, takže $\\mathrm{e}^{-\\mathrm{i}\\cdot 5\\pi/2}=\\cos\\left(-\\frac{\\pi}{2}\\right)+\\mathrm{i}\\sin\\left(-\\frac{\\pi}{2}\\right)=-\\mathrm{i}$.',
          '<strong>Výsledok: $(1-\\mathrm{i})^{10}=-32\\mathrm{i}$</strong>'] },
      { task: 'Nájdi všetky riešenia rovnice $z^3=-8$ v $\\mathbb{C}$.',
        steps: ['$-8=8\\,\\mathrm{e}^{\\mathrm{i}\\pi}$, teda $R=8$, $\\psi=\\pi$ a $\\sqrt[3]{8}=2$.',
          'Riešenia sú $z_k=2\\,\\mathrm{e}^{\\mathrm{i}\\frac{\\pi+2k\\pi}{3}}$ pre $k=0,1,2$, t. j. s argumentmi $\\frac{\\pi}{3}$, $\\pi$ a $\\frac{5\\pi}{3}$.',
          '$z_0=2\\left(\\frac{1}{2}+\\frac{\\sqrt{3}}{2}\\mathrm{i}\\right)=1+\\sqrt{3}\\,\\mathrm{i}$, $z_1=-2$, $z_2=1-\\sqrt{3}\\,\\mathrm{i}$.',
          '<strong>Výsledok: $z\\in\\{1+\\sqrt{3}\\,\\mathrm{i};\\ -2;\\ 1-\\sqrt{3}\\,\\mathrm{i}\\}$</strong> – vrcholy rovnostranného trojuholníka na kružnici s polomerom $2$.'] }
    ]
  });

  gen('v2-komplexne', () => {
    const t = Math.random();
    if (t < 0.16) {
      const u = Math.random();
      if (u < 0.45) {
        const [p, q, c] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10], [7, 24, 25]]);
        const sw = Math.random() < 0.5, a = (sw ? q : p) * pick([1, -1]), b = (sw ? p : q) * pick([1, -1]);
        return {
          answer: c,
          q: `Vypočítaj absolútnu hodnotu komplexného čísla $z=${cTex(a, b)}$.`,
          solution: `$|z|=\\sqrt{(\\operatorname{Re} z)^2+(\\operatorname{Im} z)^2}=\\sqrt{${par(a)}^2+${par(b)}^2}=\\sqrt{${a * a + b * b}}=${c}$.`,
          hint: 'Absolútna hodnota čísla $a+b\\mathrm{i}$ je vzdialenosť bodu $[a;b]$ od počiatku: $\\sqrt{a^2+b^2}$.'
        };
      }
      if (u < 0.75) {
        let a, b;
        do { a = nz(-6, 6); b = nz(-6, 6); } while (Number.isInteger(Math.hypot(a, b)));
        const val = Math.hypot(a, b);
        return {
          answer: round(val, 3), tol: TOL3, show: dt(val),
          q: `Vypočítaj $|z|$ pre $z=${cTex(a, b)}$. ${ROUND3}`,
          solution: `$|z|=\\sqrt{${par(a)}^2+${par(b)}^2}=\\sqrt{${a * a + b * b}}\\approx ${dd(val)}$.`,
          hint: 'Použi $|a+b\\mathrm{i}|=\\sqrt{a^2+b^2}$.'
        };
      }
      const a = nz(-3, 3), b = nz(-3, 3), n = pick([2, 4, 6]), m = a * a + b * b, val = Math.pow(m, n / 2);
      return {
        answer: val,
        q: `Vypočítaj $\\left|\\left(${cTex(a, b)}\\right)^{${n}}\\right|$.`,
        solution: `Absolútna hodnota súčinu je súčinom absolútnych hodnôt, preto $|z^{${n}}|=|z|^{${n}}=\\left(\\sqrt{${m}}\\right)^{${n}}=${m}^{${n / 2}}=${val}$. Umocňovať v algebraickom tvare netreba.`,
        hint: 'Využi $|z^n|=|z|^n$.'
      };
    }
    if (t < 0.31) {
      const a = nz(-5, 5), b = nz(-5, 5), deg = Math.atan2(b, a) * 180 / Math.PI;
      const al = Math.atan(Math.abs(b) / Math.abs(a)) * 180 / Math.PI;
      const quad = a > 0 ? (b > 0 ? 1 : 4) : (b > 0 ? 2 : 3);
      const how = ['\\varphi=\\alpha', '\\varphi=180^\\circ-\\alpha', '\\varphi=-180^\\circ+\\alpha', '\\varphi=-\\alpha'][quad - 1];
      return {
        signed: true, answer: round(deg, 1), tol: 0.06, show: dt(deg, 1),
        q: `Urči hlavnú hodnotu argumentu čísla $z=${cTex(a, b)}$ v stupňoch, t. j. $\\arg z\\in(-180^\\circ;180^\\circ\\rangle$. Zaokrúhli na 1 desatinné miesto.`,
        solution: `Bod $[${a};${b}]$ leží v ${quad}. kvadrante. Pomocný ostrý uhol je $\\alpha=\\operatorname{arctg}\\frac{${Math.abs(b)}}{${Math.abs(a)}}\\approx ${degT(al)}^\\circ$, a preto $${how}\\approx ${degT(deg)}^\\circ$.`,
        hint: 'Najprv urči kvadrant bodu $[a;b]$, potom pomocný uhol $\\alpha=\\operatorname{arctg}\\left|\\frac{b}{a}\\right|$ a podľa kvadrantu z neho argument.'
      };
    }
    if (t < 0.5) {
      const u = Math.random();
      if (u < 0.4) {
        const z = [nz(-5, 5), rnd(-5, 5)], w = [rnd(-4, 4), nz(-4, 4)], r = cMul(z, w);
        return {
          type: 'tuple', signed: true, answer: r,
          q: `Vypočítaj súčin $(${cTex(...z)})(${cTex(...w)})$. Zadaj reálnu a imaginárnu časť oddelené bodkočiarkou (Re; Im).`,
          solution: `Roznásobíme a použijeme $\\mathrm{i}^2=-1$: $(${cTex(...z)})(${cTex(...w)})=\\bigl(${z[0]}\\cdot ${par(w[0])}-${par(z[1])}\\cdot ${par(w[1])}\\bigr)+\\bigl(${z[0]}\\cdot ${par(w[1])}+${par(z[1])}\\cdot ${par(w[0])}\\bigr)\\mathrm{i}=${cTex(...r)}$. Odpoveď: $${r[0]};\\ ${r[1]}$.`,
          hint: 'Platí $(a+b\\mathrm{i})(c+d\\mathrm{i})=(ac-bd)+(ad+bc)\\mathrm{i}$.'
        };
      }
      if (u < 0.75) {
        const w = [nz(-4, 4), nz(-3, 3)], q = [rnd(-4, 4), nz(-4, 4)], z = cMul(q, w), m = w[0] * w[0] + w[1] * w[1], num = cMul(z, [w[0], -w[1]]);
        return {
          type: 'tuple', signed: true, answer: q,
          q: `Vypočítaj podiel $\\dfrac{${cTex(...z)}}{${cTex(...w)}}$. Zadaj reálnu a imaginárnu časť oddelené bodkočiarkou (Re; Im).`,
          solution: `Rozšírime číslom združeným k menovateľu: $\\dfrac{${cTex(...z)}}{${cTex(...w)}}=\\dfrac{(${cTex(...z)})(${cTex(w[0], -w[1])})}{${par(w[0])}^2+${par(w[1])}^2}=\\dfrac{${cTex(...num)}}{${m}}=${cTex(...q)}$. Odpoveď: $${q[0]};\\ ${q[1]}$.`,
          hint: 'Čitateľa aj menovateľa vynásob číslom $\\bar w$ – v menovateli vznikne reálne číslo $|w|^2$.'
        };
      }
      const n = rnd(5, 2030), k = n % 4, r = [[1, 0], [0, 1], [-1, 0], [0, -1]][k];
      return {
        type: 'tuple', signed: true, answer: r,
        q: `Vypočítaj $\\mathrm{i}^{${n}}$. Zadaj reálnu a imaginárnu časť oddelené bodkočiarkou (Re; Im).`,
        solution: `Mocniny čísla $\\mathrm{i}$ sa opakujú s periódou 4: $\\mathrm{i}^1=\\mathrm{i}$, $\\mathrm{i}^2=-1$, $\\mathrm{i}^3=-\\mathrm{i}$, $\\mathrm{i}^4=1$. Keďže $${n}=4\\cdot ${Math.floor(n / 4)}+${k}$, je $\\mathrm{i}^{${n}}=\\mathrm{i}^{${k}}=${cTex(...r)}$. Odpoveď: $${r[0]};\\ ${r[1]}$.`,
        hint: 'Vydeľ exponent štyrmi so zvyškom; $\\mathrm{i}^4=1$.'
      };
    }
    if (t < 0.68) {
      if (Math.random() < 0.6) {
        const s = [pick([1, -1]), pick([1, -1])], n = rnd(2, 12);
        let r = [1, 0];
        for (let i = 0; i < n; i++) r = cMul(r, s);
        const th = Math.round(Math.atan2(s[1], s[0]) * 180 / Math.PI), N = th * n, Nm = ((N % 360) + 360) % 360;
        const mod = n % 2 ? `${Math.pow(2, (n - 1) / 2)}\\sqrt{2}` : String(Math.pow(2, n / 2));
        return {
          type: 'tuple', signed: true, answer: r,
          q: `Pomocou Moivreovej vety vypočítaj $(${cTex(...s)})^{${n}}$. Zadaj reálnu a imaginárnu časť oddelené bodkočiarkou (Re; Im).`,
          solution: `$|z|=\\sqrt{2}$ a $\\arg z=${th}^\\circ$, teda $z=\\sqrt{2}\\,\\bigl(\\cos(${th}^\\circ)+\\mathrm{i}\\sin(${th}^\\circ)\\bigr)$. Podľa Moivreovej vety
            $z^{${n}}=(\\sqrt{2})^{${n}}\\bigl(\\cos(${N}^\\circ)+\\mathrm{i}\\sin(${N}^\\circ)\\bigr)$, kde $(\\sqrt{2})^{${n}}=${mod}$ a uhol $${N}^\\circ$ má rovnakú polohu ako $${Nm}^\\circ$. Výsledok: $z^{${n}}=${cTex(...r)}$, odpoveď $${r[0]};\\ ${r[1]}$.`,
          hint: 'Preveď číslo do goniometrického tvaru ($|z|=\\sqrt{2}$, argument je násobok $45^\\circ$), umocni absolútnu hodnotu a argument vynásob exponentom.'
        };
      }
      const th = pick([60, 120, -60, -120]), n = pick([3, 6]);
      const s = { 60: '1+\\sqrt{3}\\,\\mathrm{i}', 120: '-1+\\sqrt{3}\\,\\mathrm{i}', '-60': '1-\\sqrt{3}\\,\\mathrm{i}', '-120': '-1-\\sqrt{3}\\,\\mathrm{i}' }[th];
      const N = th * n, cs = Math.round(Math.cos(N * Math.PI / 180)), re = Math.pow(2, n) * cs;
      return {
        type: 'tuple', signed: true, answer: [re, 0],
        q: `Vypočítaj $\\left(${s}\\right)^{${n}}$. Zadaj reálnu a imaginárnu časť oddelené bodkočiarkou (Re; Im).`,
        solution: `$|z|=\\sqrt{1+3}=2$ a $\\arg z=${th}^\\circ$. Podľa Moivreovej vety $z^{${n}}=2^{${n}}\\bigl(\\cos(${N}^\\circ)+\\mathrm{i}\\sin(${N}^\\circ)\\bigr)=${Math.pow(2, n)}\\cdot(${cs})=${re}$, imaginárna časť je $0$. Odpoveď: $${re};\\ 0$.`,
        hint: 'Absolútna hodnota je $2$ a argument je násobok $60^\\circ$; použi Moivreovu vetu.'
      };
    }
    if (t < 0.84) {
      const psi = pick([0, 90, 180, 270]), n = rnd(2, 6), m = pick([1, 1, 2]), M = Math.pow(m, n);
      const w = psi === 0 ? [M, 0] : psi === 90 ? [0, M] : psi === 180 ? [-M, 0] : [0, -M];
      const args = [];
      for (let k = 0; k < n; k++) args.push((psi + 360 * k) / n);
      const argsT = args.map((x) => degT(x) + '^\\circ').join(',\\ ');
      const intro = `$${cTex(...w)}=${M}\\,\\mathrm{e}^{\\mathrm{i}\\cdot ${psi}^\\circ}$, takže rovnica má ${n} ${pl(n, ['riešenie', 'riešenia', 'riešení'])} s absolútnou hodnotou $\\sqrt[${n}]{${M}}=${m}$ a s argumentmi $\\frac{${psi}^\\circ+k\\cdot 360^\\circ}{${n}}$, $k=0,\\dots,${n - 1}$: $${argsT}$.`;
      if (Math.random() < 0.5) {
        const cnt = args.filter((x) => x > 1e-9 && x < 90 - 1e-9).length;
        return {
          answer: cnt,
          q: `Koľko riešení rovnice $z^{${n}}=${cTex(...w)}$ leží v otvorenom prvom kvadrante Gaussovej roviny (t. j. $\\operatorname{Re} z\\gt 0$ a $\\operatorname{Im} z\\gt 0$)?`,
          solution: `${intro} Do intervalu $(0^\\circ;90^\\circ)$ patrí ${cnt} z nich, odpoveď je <strong>${cnt}</strong>.`,
          hint: 'Riešenia sú vrcholy pravidelného $n$-uholníka: argumenty $\\frac{\\psi+k\\cdot 360^\\circ}{n}$. Spočítaj, koľko z nich leží medzi $0^\\circ$ a $90^\\circ$.'
        };
      }
      const val = psi > 0 ? psi / n : 360 / n;
      return {
        answer: round(val, 1), tol: 0.06, show: dt(val, 1).replace(/,0$/, ''),
        q: `Aký najmenší kladný argument (v stupňoch, z intervalu $(0^\\circ;360^\\circ)$) má niektoré riešenie rovnice $z^{${n}}=${cTex(...w)}$?`,
        solution: `${intro} Najmenší kladný z nich je $${degT(val)}^\\circ$.`,
        hint: 'Použi vzorec pre $n$-té odmocniny: argumenty $\\frac{\\psi+2k\\pi}{n}$, $k=0,\\dots,n-1$.'
      };
    }
    if (Math.random() < 0.55) {
      const a = rnd(1, 5), c = rnd(0, 4);
      let b;
      do { b = rnd(-6, 9); } while (b === a * c);
      const d = b - a * c, askSup = Math.random() < 0.5, dec = d > 0, isFirst = askSup === dec;
      const den = lin([[1, 'n'], [c, '']]), a1 = fTex(a + b, 1 + c);
      return {
        signed: true, answer: isFirst ? (a + b) / (1 + c) : a, show: isFirst ? fTxt(a + b, 1 + c) : String(a),
        q: `Urči ${askSup ? 'supremum' : 'infimum'} množiny $A=\\left\\{\\dfrac{${lin([[a, 'n'], [b, '']])}}{${den}}:\\ n\\in\\mathbb{N}\\right\\}$, kde $\\mathbb{N}=\\{1,2,3,\\dots\\}$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Upravíme: $\\dfrac{${lin([[a, 'n'], [b, '']])}}{${den}}=${a}${dec ? '+' : '-'}\\dfrac{${Math.abs(d)}}{${den}}$. Zlomok $\\frac{${Math.abs(d)}}{${den}}$ s rastúcim $n$ klesá k nule, prvky preto tvoria ${dec ? 'klesajúcu' : 'rastúcu'} postupnosť s limitou $${a}$.
          ${dec ? `Najväčší prvok je pre $n=1$, teda $\\sup A=\\max A=${a1}$. Všetky prvky sú väčšie ako $${a}$ a ku každému $\\varepsilon\\gt 0$ existuje prvok menší ako $${a}+\\varepsilon$, preto $\\inf A=${a}$ (minimum neexistuje).`
    : `Najmenší prvok je pre $n=1$, teda $\\inf A=\\min A=${a1}$. Všetky prvky sú menšie ako $${a}$ a ku každému $\\varepsilon\\gt 0$ existuje prvok väčší ako $${a}-\\varepsilon$, preto $\\sup A=${a}$ (maximum neexistuje).`}
          Hľadané ${askSup ? 'supremum' : 'infimum'} je $${isFirst ? a1 : a}$.`,
        hint: 'Vydeľ čitateľa menovateľom, zisti monotónnosť prvkov. Jedna z hraníc je prvý prvok, druhá je limita.'
      };
    }
    const a = rnd(1, 4), b = rnd(1, 6), askSup = Math.random() < 0.5;
    const evenMax = 4 * a >= b; // a + b/2 ≥ b − a
    const supP = evenMax ? 2 * a + b : 2 * (b - a), supT = fTex(supP, 2);
    return {
      signed: true, answer: askSup ? supP / 2 : -a, show: askSup ? fTxt(supP, 2) : String(-a),
      q: `Urči ${askSup ? 'supremum' : 'infimum'} množiny $A=\\left\\{(-1)^n${a === 1 ? '' : '\\cdot ' + a}+\\dfrac{${b}}{n}:\\ n\\in\\mathbb{N}\\right\\}$. Výsledok zadaj ako celé číslo alebo zlomok.`,
      solution: `Pre párne $n$ sú prvky $${a}+\\frac{${b}}{n}$ – klesajú, najväčší je pre $n=2$: $${fTex(2 * a + b, 2)}$, a všetky sú väčšie ako $${a}$.
        Pre nepárne $n$ sú prvky $-${a}+\\frac{${b}}{n}$ – klesajú k $-${a}$, najväčší je pre $n=1$: $${b - a}$.
        Preto $\\sup A=\\max\\left\\{${fTex(2 * a + b, 2)};\\ ${b - a}\\right\\}=${supT}$ a $\\inf A=-${a}$ (nenadobúda sa: prvky s nepárnym $n$ sú väčšie ako $-${a}$, ale ľubovoľne blízko). Hľadaná hodnota: $${askSup ? supT : -a}$.`,
      hint: 'Rozdeľ prvky na tie s párnym a nepárnym $n$ a každú skupinu vyšetri zvlášť.'
    };
  });

  /* ======================= 1. POSTUPNOSTI ======================= */

  fig('v2-epsilon', {
    controls: [{ id: 'eps', label: 'ε', min: 0.1, max: 1, step: 0.05, value: 0.4 }],
    draw: (v) => {
      const p = plane(0, 31, -1.5, 3.2, 440, 280);
      const a = (n) => 1 + (n % 2 ? -2 : 2) / n;
      const e = v.eps;
      let N = 1;
      while (2 / N >= e - 1e-12) N++;
      let dots = '';
      for (let n = 1; n <= 30; n++) {
        const ok = n >= N;
        dots += `<circle class="f-dot${ok ? ' f-dot-ok' : ''}" cx="${n1(p.X(n))}" cy="${n1(p.Y(a(n)))}" r="${ok ? 4 : 5}"/>`;
      }
      const clipped = `<rect class="f-fill" x="${n1(p.X(0))}" y="${n1(p.Y(1 + e))}" width="${n1(p.X(31) - p.X(0))}" height="${n1(p.Y(1 - e) - p.Y(1 + e))}"/>
        <line class="f-dash" x1="${n1(p.X(0))}" y1="${n1(p.Y(1))}" x2="${n1(p.X(31))}" y2="${n1(p.Y(1))}"/>
        <line class="f-warn" x1="${n1(p.X(N))}" y1="${n1(p.Y(-1.5))}" x2="${n1(p.X(N))}" y2="${n1(p.Y(3.2))}"/>${dots}`;
      const front = `<text class="f-small c-accent" x="${n1(p.X(30.5))}" y="${n1(p.Y(1 + e) - 4)}" text-anchor="end">1 + ε</text>
        <text class="f-small" x="${n1(p.X(N) + 4)}" y="${n1(p.Y(3.2) + 12)}">N = ${N}</text>`;
      return {
        svg: svg(p, axes(p, 5, 1), clipped, front, 'Členy postupnosti a ε-pás okolo limity'),
        readout: `ε = ${sk(e, 2)} · N = ${N} · <span class="c-ok">pre všetky n ≥ ${N} je |aₙ − 1| = 2/n &lt; ε</span>`
      };
    }
  });

  lesson({
    id: 'v2-postupnosti', order: 10, title: 'Postupnosti a ich limita',
    summary: 'ε-definícia limity, vety o limitách, monotónne a ohraničené postupnosti, číslo e.',
    theory: [
      `<p><strong>Postupnosť</strong> reálnych čísel je zobrazenie $\\mathbb{N}\\to\\mathbb{R}$, $n\\mapsto a_n$. Číslo $a\\in\\mathbb{R}$ je jej <strong>limitou</strong>, píšeme $\\lim_{n\\to\\infty} a_n=a$, ak</p>
       <p style="text-align:center">$\\forall\\varepsilon\\gt 0\\ \\exists N\\in\\mathbb{N}\\ \\forall n\\ge N:\\ |a_n-a|\\lt\\varepsilon .$</p>
       <p>Slovami: v ľubovoľne úzkom pásme $(a-\\varepsilon;\\,a+\\varepsilon)$ ležia všetky členy postupnosti okrem konečného počtu. Postupnosť s vlastnou limitou je <strong>konvergentná</strong>, inak <strong>divergentná</strong>.
       Nevlastná limita $\\lim_{n\\to\\infty} a_n=+\\infty$ znamená $\\forall K\\in\\mathbb{R}\\ \\exists N\\ \\forall n\\ge N:\\ a_n\\gt K$. Limita je určená jednoznačne a každá konvergentná postupnosť je ohraničená.</p>`,
      { fig: 'v2-epsilon', caption: 'Postupnosť $a_n=1+\\frac{(-1)^n\\cdot 2}{n}$ má limitu $1$. Pre zvolené $\\varepsilon$ ležia v pásme $(1-\\varepsilon;\\,1+\\varepsilon)$ všetky členy od indexu $N$ ďalej (zelené). Čím menšie $\\varepsilon$, tým väčšie $N$.' },
      `<p><strong>Vety o limitách.</strong> Ak $a_n\\to a$ a $b_n\\to b$, potom $a_n\\pm b_n\\to a\\pm b$, $a_nb_n\\to ab$ a pri $b\\neq 0$ aj $\\frac{a_n}{b_n}\\to\\frac{a}{b}$.</p>
       <ul><li><strong>Veta o zovretí:</strong> ak $a_n\\le c_n\\le b_n$ od istého indexu a $a_n\\to L$, $b_n\\to L$, tak aj $c_n\\to L$.</li>
       <li>Súčin postupnosti s limitou $0$ a ohraničenej postupnosti má limitu $0$, napr. $\\frac{\\sin n}{n}\\to 0$.</li>
       <li>Dôležité limity: $q^n\\to 0$ pre $|q|\\lt 1$, $\\sqrt[n]{a}\\to 1$ pre $a\\gt 0$, $\\sqrt[n]{n}\\to 1$, $\\frac{n^k}{a^n}\\to 0$ pre $a\\gt 1$, $\\frac{a^n}{n!}\\to 0$.</li></ul>`,
      `<p><strong>Monotónne postupnosti.</strong> Postupnosť je rastúca, ak $a_{n+1}\\gt a_n$ pre všetky $n$ (podobne klesajúca, nerastúca, neklesajúca). Platí
       <strong>veta o monotónnej postupnosti</strong>: každá monotónna a ohraničená postupnosť je konvergentná (neklesajúca zhora ohraničená má limitu $\\sup_n a_n$).</p>
       <p><strong>Číslo e.</strong> Postupnosť $\\left(1+\\frac{1}{n}\\right)^n$ je rastúca a zhora ohraničená číslom $3$, preto má limitu
       $\\mathrm{e}=\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n\\approx 2{,}71828$. Všeobecnejšie: ak $|x_n|\\to\\infty$, tak $\\left(1+\\frac{1}{x_n}\\right)^{x_n}\\to\\mathrm{e}$, odkiaľ $\\left(1+\\frac{a}{n}\\right)^n\\to\\mathrm{e}^a$.</p>`
    ],
    examples: [
      { task: 'Podľa definície ukáž, že $\\lim_{n\\to\\infty}\\frac{3n+1}{n+2}=3$, a nájdi najmenšie $N$ pre $\\varepsilon=0{,}01$.',
        steps: ['Upravíme rozdiel: $\\left|\\frac{3n+1}{n+2}-3\\right|=\\left|\\frac{3n+1-3n-6}{n+2}\\right|=\\frac{5}{n+2}$.',
          'Nerovnosť $\\frac{5}{n+2}\\lt\\varepsilon$ platí práve pre $n\\gt\\frac{5}{\\varepsilon}-2$. Ku každému $\\varepsilon\\gt 0$ teda stačí zvoliť $N$ ako najmenšie prirodzené číslo väčšie ako $\\frac{5}{\\varepsilon}-2$; výraz $\\frac{5}{n+2}$ s rastúcim $n$ klesá, takže nerovnosť platí pre všetky $n\\ge N$.',
          'Pre $\\varepsilon=0{,}01$: $n\\gt 500-2=498$.', '<strong>Výsledok: $N=499$</strong>'] },
      { task: 'Vypočítaj $\\lim_{n\\to\\infty}\\left(1+\\frac{3}{n}\\right)^{2n}$.',
        steps: ['Výraz prepíšeme tak, aby sa objavila základná limita: $\\left(1+\\frac{3}{n}\\right)^{2n}=\\left[\\left(1+\\frac{1}{n/3}\\right)^{n/3}\\right]^{6}$.',
          'Pre $n\\to\\infty$ je aj $\\frac{n}{3}\\to\\infty$, preto výraz v hranatej zátvorke konverguje k $\\mathrm{e}$.',
          'Funkcia $t\\mapsto t^6$ je spojitá, a tak limita je $\\mathrm{e}^6$.', '<strong>Výsledok: $\\mathrm{e}^6\\approx 403{,}4$</strong>'] }
    ]
  });

  gen('v2-postupnosti', () => {
    const t = Math.random();
    if (t < 0.3) {
      const p = rnd(1, 5), s = rnd(1, 5), D0 = nz(-6, 6), q = D0 + p * s, k = pick([10, 20, 50, 100]);
      const M = Math.abs(D0) * k, N = Math.max(1, M - s + 1);
      return {
        answer: N,
        q: `Postupnosť $a_n=\\dfrac{${lin([[p, 'n'], [q, '']])}}{${lin([[1, 'n'], [s, '']])}}$ má limitu $${p}$. Nájdi najmenšie prirodzené číslo $N$ také, že $|a_n-${p}|\\lt\\frac{1}{${k}}$ pre všetky $n\\ge N$.`,
        solution: `$a_n-${p}=\\dfrac{${lin([[p, 'n'], [q, '']])}-${p}(${lin([[1, 'n'], [s, '']])})}{n+${s}}=\\dfrac{${D0}}{n+${s}}$, teda $|a_n-${p}|=\\dfrac{${Math.abs(D0)}}{n+${s}}$, čo s rastúcim $n$ klesá.
          Nerovnosť $\\frac{${Math.abs(D0)}}{n+${s}}\\lt\\frac{1}{${k}}$ je ekvivalentná s $n+${s}\\gt ${M}$, teda $n\\gt ${M - s}$. Najmenšie vyhovujúce $N=${N}$.`,
        hint: 'Uprav rozdiel $a_n-L$ na jeden zlomok, potom rieš nerovnosť $|a_n-L|\\lt\\varepsilon$ vzhľadom na $n$.'
      };
    }
    if (t < 0.55) {
      if (Math.random() < 0.5) {
        let a, b;
        do { a = nz(-4, 4); b = rnd(1, 3); } while (gcd(Math.abs(a), b) !== 1);
        const c = rnd(1, 4), kT = a * c < 0 ? `\\left(${fTex(a * c, b)}\\right)` : fTex(a * c, b);
        const frac = b === 1 ? `\\frac{${Math.abs(a)}}{n}` : `\\frac{${Math.abs(a)}}{${b}n}`;
        const base = `1${a > 0 ? '+' : '-'}${frac}`;
        const xn = rsum([[b, a, 'n']]);
        return {
          signed: true, answer: a * c / b, show: fTxt(a * c, b),
          q: `Limita $\\lim_{n\\to\\infty}\\left(${base}\\right)^{${cx(c, 'n')}}$ sa rovná $\\mathrm{e}^{k}$. Urči $k$ (celé číslo alebo zlomok).`,
          solution: `Označme $x_n=${xn}$; potom $|x_n|\\to\\infty$ a $${base}=1+\\frac{1}{x_n}$. Exponent zapíšeme ako $${cx(c, 'n')}=x_n\\cdot ${kT}$, teda
            $\\left(${base}\\right)^{${cx(c, 'n')}}=\\left[\\left(1+\\frac{1}{x_n}\\right)^{x_n}\\right]^{${fTex(a * c, b)}}\\to\\mathrm{e}^{${fTex(a * c, b)}}$. Preto $k=${fTex(a * c, b)}$.`,
          hint: 'Využi $\\left(1+\\frac{1}{x_n}\\right)^{x_n}\\to\\mathrm{e}$ pre $|x_n|\\to\\infty$, prípadne priamo $\\left(1+\\frac{a}{n}\\right)^{n}\\to\\mathrm{e}^{a}$.'
        };
      }
      let a, b;
      do { a = rnd(-3, 5); b = rnd(1, 5); } while (a === b);
      const c = rnd(1, 3), d = a - b;
      return {
        signed: true, answer: c * d,
        q: `Limita $\\lim_{n\\to\\infty}\\left(\\dfrac{${lin([[1, 'n'], [a, '']])}}{n+${b}}\\right)^{${cx(c, 'n')}}$ sa rovná $\\mathrm{e}^{k}$. Urči $k$.`,
        solution: `$\\dfrac{${lin([[1, 'n'], [a, '']])}}{n+${b}}=1+\\dfrac{${d}}{n+${b}}$. Pre $x_n=${d === 1 ? `n+${b}` : `${d < 0 ? '-' : ''}\\frac{n+${b}}{${Math.abs(d)}}`}$ platí $|x_n|\\to\\infty$ a exponent $${cx(c, 'n')}=x_n\\cdot\\dfrac{${c * d}n}{n+${b}}$, kde $\\dfrac{${c * d}n}{n+${b}}\\to ${c * d}$.
          Preto limita je $\\mathrm{e}^{${c * d}}$ a $k=${c * d}$.`,
        hint: 'Zlomok prepíš na tvar $1+\\frac{\\text{konštanta}}{n+b}$ a použi základnú limitu pre číslo $\\mathrm{e}$.'
      };
    }
    if (t < 0.78) {
      const a = nz(-8, 8), b = rnd(-5, 9);
      const inner = lin([[1, 'n^2'], [a, 'n'], [b, '']]);
      return {
        signed: true, answer: a / 2, show: fTxt(a, 2),
        q: `Vypočítaj $\\lim_{n\\to\\infty}\\left(\\sqrt{${inner}}-n\\right)$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Ide o typ $\\infty-\\infty$; rozšírime výrazom $\\sqrt{${inner}}+n$:
          $\\dfrac{${inner}-n^2}{\\sqrt{${inner}}+n}=\\dfrac{${lin([[a, 'n'], [b, '']])}}{\\sqrt{${inner}}+n}$.
          Čitateľa aj menovateľa vydelíme $n$: menovateľ $\\sqrt{1${sfr(a, 'n')}${sfr(b, 'n^2')}}+1\\to 2$, čitateľ $\\to ${a}$. Limita je $${fTex(a, 2)}$.`,
        hint: 'Rozdiel s odmocninou rozšír na rozdiel štvorcov: $(\\sqrt{A}-B)(\\sqrt{A}+B)=A-B^2$.'
      };
    }
    const a = rnd(1, 5), c = rnd(0, 4);
    let b;
    do { b = rnd(-6, 9); } while (b === a * c);
    const d = a * c - b, grows = d > 0;
    const ans = grows ? 'rastúca' : 'klesajúca';
    return {
      type: 'choice', options: ['rastúca', 'klesajúca', 'konštantná'], answer: ans,
      q: `Rozhodni o monotónnosti postupnosti $a_n=\\dfrac{${lin([[a, 'n'], [b, '']])}}{${lin([[1, 'n'], [c, '']])}}$, $n\\ge 1$.`,
      solution: `Zlomok rozdelíme: $a_n=${a}${d > 0 ? '-' : '+'}\\dfrac{${Math.abs(d)}}{${lin([[1, 'n'], [c, '']])}}$. Výraz $\\frac{1}{${lin([[1, 'n'], [c, '']])}}$ s rastúcim $n$ klesá.
        ${grows ? `Od čísla $${a}$ odčítavame stále menšie kladné číslo, postupnosť je preto <strong>rastúca</strong>` : `K číslu $${a}$ pripočítavame stále menšie kladné číslo, postupnosť je preto <strong>klesajúca</strong>`}.
        Pritom je ohraničená ($a_1$ a $${a}$ sú jej hranice) a $\\lim_{n\\to\\infty} a_n=${a}$.`,
      hint: 'Vydeľ čitateľa menovateľom (alebo vyšetri znamienko rozdielu $a_{n+1}-a_n$).'
    };
  });

  /* ======================= 2. LIMITA A SPOJITOSŤ FUNKCIE ======================= */

  fig('v2-eps-delta', {
    controls: [{ id: 'eps', label: 'ε', min: 0.1, max: 0.9, step: 0.05, value: 0.6 }],
    draw: (v) => {
      const p = plane(-0.2, 2.2, -0.2, 2.6, 400, 320);
      const e = v.eps, d = Math.sqrt(1 + e) - 1;
      const sq = (x) => x * x;
      const clipped = `<rect class="f-fill" x="${n1(p.X(p.xmin))}" y="${n1(p.Y(1 + e))}" width="${n1(p.X(p.xmax) - p.X(p.xmin))}" height="${n1(p.Y(1 - e) - p.Y(1 + e))}"/>
        <rect class="f-fill2" x="${n1(p.X(1 - d))}" y="${n1(p.Y(p.ymax))}" width="${n1(p.X(1 + d) - p.X(1 - d))}" height="${n1(p.Y(p.ymin) - p.Y(p.ymax))}"/>
        <path class="f-line" d="${curvePath(p, sq)}"/>
        <path class="f-ok" d="${curvePath(p, sq, 1 - d, 1 + d, 40)}"/>
        <line class="f-dash" x1="${n1(p.X(1))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(1))}" y2="${n1(p.Y(1))}"/>
        <circle class="f-dot" cx="${n1(p.X(1))}" cy="${n1(p.Y(1))}" r="5"/>`;
      const front = `<text class="f-small c-accent" x="${n1(p.X(2.15))}" y="${n1(p.Y(1 + e) - 4)}" text-anchor="end">1 + ε</text>
        <text class="f-small c-accent" x="${n1(p.X(2.15))}" y="${n1(p.Y(1 - e) + 13)}" text-anchor="end">1 − ε</text>
        <text class="f-small c-ok" x="${n1(p.X(1))}" y="${n1(p.Y(2.6) + 12)}" text-anchor="middle">1 ± δ</text>`;
      return {
        svg: svg(p, axes(p), clipped, front, 'Epsilon-delta definícia limity funkcie x na druhú v bode 1'),
        readout: `ε = ${sk(e, 2)} · <span class="c-ok">δ = √(1 + ε) − 1 ≈ ${sk(d, 3)}</span> · pre 0 &lt; |x − 1| &lt; δ je |x² − 1| &lt; ε`
      };
    }
  });

  lesson({
    id: 'v2-limita-funkcie', order: 20, title: 'Limita a spojitosť funkcie, L’Hospitalovo pravidlo',
    summary: 'Definícia limity cez ε a δ, Heineho definícia, spojitosť a typy nespojitosti, neurčité výrazy.',
    theory: [
      `<p>Nech $f$ je definovaná na prstencovom okolí bodu $a$. Hovoríme, že $\\lim_{x\\to a} f(x)=L$, ak</p>
       <p style="text-align:center">$\\forall\\varepsilon\\gt 0\\ \\exists\\delta\\gt 0\\ \\forall x:\\ 0\\lt|x-a|\\lt\\delta\\ \\Rightarrow\\ |f(x)-L|\\lt\\varepsilon .$</p>
       <p><strong>Heineho definícia</strong> je ekvivalentná: $\\lim_{x\\to a} f(x)=L$ práve vtedy, keď pre každú postupnosť $x_n\\to a$, $x_n\\neq a$, platí $f(x_n)\\to L$.
       Na dôkaz neexistencie limity preto stačia dve postupnosti s rôznymi limitami funkčných hodnôt; napr. $\\sin\\frac{1}{x}$ nemá v bode $0$ limitu (pre $x_n=\\frac{1}{n\\pi}$ dostaneme $0$, pre $x_n=\\frac{1}{\\pi/2+2n\\pi}$ dostaneme $1$).</p>`,
      { fig: 'v2-eps-delta', caption: 'Pre $f(x)=x^2$ a $a=1$: k danému $\\varepsilon$ (modrý pás) existuje $\\delta$ (zelený pás) také, že graf nad intervalom $(1-\\delta;\\,1+\\delta)$ zostane v modrom pásme.' },
      `<p><strong>Spojitosť.</strong> Funkcia $f$ je spojitá v bode $a$, ak $\\lim_{x\\to a} f(x)=f(a)$. Body nespojitosti delíme na
       <em>odstrániteľné</em> (limita existuje, ale $\\neq f(a)$ alebo $f(a)$ nie je definované), <em>skoky</em> (nespojitosť 1. druhu: jednostranné limity sú vlastné a rôzne) a nespojitosti <em>2. druhu</em> (aspoň jedna jednostranná limita neexistuje alebo je nevlastná).
       Spojitá funkcia na uzavretom intervale $\\langle a;b\\rangle$ je ohraničená a nadobúda svoje maximum aj minimum (Weierstrassova veta) a každú hodnotu medzi $f(a)$ a $f(b)$ (Bolzanova–Cauchyho veta).</p>`,
      `<p><strong>L’Hospitalovo pravidlo.</strong> Nech $\\lim_{x\\to a} f(x)=\\lim_{x\\to a} g(x)=0$ (alebo $\\lim_{x\\to a}|g(x)|=\\infty$) a existuje $\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$ (vlastná alebo nevlastná). Potom
       $\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$. Pravidlo platí aj pre jednostranné limity a pre $a=\\pm\\infty$.</p>
       <ul><li>$0\\cdot\\infty$: prepíšeme $fg=\\frac{f}{1/g}$; $\\infty-\\infty$: prevedieme na spoločný menovateľ.</li>
       <li>$1^\\infty$, $0^0$, $\\infty^0$: použijeme $f^g=\\mathrm{e}^{g\\ln f}$ a počítame limitu exponentu.</li>
       <li>Užitočné limity: $\\lim_{x\\to 0}\\frac{\\mathrm{e}^x-1}{x}=1$, $\\lim_{x\\to 0}\\frac{\\ln(1+x)}{x}=1$, $\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}=\\frac{1}{2}$.</li></ul>`
    ],
    examples: [
      { task: 'Vypočítaj $\\lim_{x\\to 0}\\dfrac{\\mathrm{e}^{2x}-1-2x}{x^2}$.',
        steps: ['Dosadením dostaneme $\\frac{0}{0}$, použijeme L’Hospitalovo pravidlo: $\\lim_{x\\to 0}\\dfrac{2\\mathrm{e}^{2x}-2}{2x}$.',
          'Opäť typ $\\frac{0}{0}$, pravidlo použijeme druhýkrát: $\\lim_{x\\to 0}\\dfrac{4\\mathrm{e}^{2x}}{2}=2$.',
          'Keďže posledná limita existuje, existujú aj predchádzajúce a rovnajú sa jej.', '<strong>Výsledok: 2</strong>'] },
      { task: 'Vypočítaj $\\lim_{x\\to 0^+} x^x$.',
        steps: ['Ide o typ $0^0$. Zapíšeme $x^x=\\mathrm{e}^{x\\ln x}$ a vypočítame limitu exponentu.',
          '$\\lim_{x\\to 0^+} x\\ln x=\\lim_{x\\to 0^+}\\dfrac{\\ln x}{1/x}$ je typ $\\frac{-\\infty}{\\infty}$; podľa L’Hospitalovho pravidla $=\\lim_{x\\to 0^+}\\dfrac{1/x}{-1/x^2}=\\lim_{x\\to 0^+}(-x)=0$.',
          'Exponenciálna funkcia je spojitá, preto $\\lim_{x\\to 0^+}x^x=\\mathrm{e}^0$.', '<strong>Výsledok: 1</strong>'] }
    ]
  });

  gen('v2-limita-funkcie', () => {
    const t = Math.random();
    if (t < 0.3) {
      const kind = rnd(0, 3);
      if (kind === 0) {
        const a = nz(-4, 4);
        return {
          signed: true, answer: a * a / 2, show: fTxt(a * a, 2),
          q: `Vypočítaj $\\lim_{x\\to 0}\\dfrac{\\mathrm{e}^{${cx(a)}}-1${term(-a, 'x')}}{x^2}$.`,
          solution: `Typ $\\frac{0}{0}$. Prvé použitie L’Hospitalovho pravidla dá $\\dfrac{${a === 1 ? '' : a === -1 ? '-' : a}\\mathrm{e}^{${cx(a)}}${term(-a, '')}}{2x}$, opäť typ $\\frac{0}{0}$.
            Druhé použitie: $\\dfrac{${a * a}\\mathrm{e}^{${cx(a)}}}{2}\\to\\dfrac{${a * a}}{2}$. Limita je $${fTex(a * a, 2)}$.`,
          hint: 'Typ $\\frac{0}{0}$ – použi L’Hospitalovo pravidlo (aj opakovane).'
        };
      }
      if (kind === 1) {
        const a = rnd(1, 5);
        return {
          answer: a * a / 2, show: fTxt(a * a, 2),
          q: `Vypočítaj $\\lim_{x\\to 0}\\dfrac{1-\\cos ${cx(a)}}{x^2}$.`,
          solution: `Typ $\\frac{0}{0}$. Podľa L’Hospitalovho pravidla $\\lim_{x\\to 0}\\dfrac{${a === 1 ? '' : a}\\sin ${cx(a)}}{2x}$, znova $\\frac{0}{0}$; ďalšie použitie dá $\\lim_{x\\to 0}\\dfrac{${a * a}\\cos ${cx(a)}}{2}=${fTex(a * a, 2)}$.`,
          hint: 'Typ $\\frac{0}{0}$ – derivuj čitateľa aj menovateľa (dvakrát).'
        };
      }
      if (kind === 2) {
        const a = rnd(1, 3);
        return {
          answer: a * a * a / 6, show: fTxt(a * a * a, 6),
          q: `Vypočítaj $\\lim_{x\\to 0}\\dfrac{${cx(a)}-\\sin ${cx(a)}}{x^3}$.`,
          solution: `Trikrát použijeme L’Hospitalovo pravidlo (vždy typ $\\frac{0}{0}$):
            $\\dfrac{${a}-${a === 1 ? '' : a}\\cos ${cx(a)}}{3x^2}\\ \\to\\ \\dfrac{${a * a === 1 ? '' : a * a}\\sin ${cx(a)}}{6x}\\ \\to\\ \\dfrac{${a * a * a}\\cos ${cx(a)}}{6}\\to ${fTex(a * a * a, 6)}$.`,
          hint: 'Rozvoj $\\sin u=u-\\frac{u^3}{6}+\\dots$ alebo opakované L’Hospitalovo pravidlo.'
        };
      }
      const a = nz(-3, 3);
      return {
        signed: true, answer: -a * a / 2, show: fTxt(-a * a, 2),
        q: `Vypočítaj $\\lim_{x\\to 0}\\dfrac{\\ln(1${term(a, 'x')})${term(-a, 'x')}}{x^2}$.`,
        solution: `Typ $\\frac{0}{0}$. Po derivovaní: $\\dfrac{\\frac{${a}}{1${term(a, 'x')}}${term(-a, '')}}{2x}=\\dfrac{${-a * a}x}{2x(1${term(a, 'x')})}=\\dfrac{${-a * a}}{2(1${term(a, 'x')})}\\to ${fTex(-a * a, 2)}$.`,
        hint: 'Použi L’Hospitalovo pravidlo a čitateľa uprav na spoločný menovateľ.'
      };
    }
    if (t < 0.55) {
      if (Math.random() < 0.5) {
        let a, b;
        do { a = nz(-4, 4); b = nz(-4, 4); } while (a === b);
        const c = rnd(1, 4);
        return {
          signed: true, answer: (a - b) / c, show: fTxt(a - b, c),
          q: `Vypočítaj $\\lim_{x\\to 0}\\dfrac{\\mathrm{e}^{${cx(a)}}-\\mathrm{e}^{${cx(b)}}}{\\sin ${cx(c)}}$. Výsledok zadaj ako celé číslo alebo zlomok.`,
          solution: `Typ $\\frac{0}{0}$. Podľa L’Hospitalovho pravidla $\\lim_{x\\to 0}\\dfrac{${lin([[a, `\\mathrm{e}^{${cx(a)}}`], [-b, `\\mathrm{e}^{${cx(b)}}`]])}}{${fco(c, true)}\\cos ${cx(c)}}=\\dfrac{${a}-${par(b)}}{${c}}=${fTex(a - b, c)}$.`,
          hint: 'Typ $\\frac{0}{0}$ – derivuj čitateľa aj menovateľa a dosaď $x=0$.'
        };
      }
      const a = nz(-4, 4), b = nz(-4, 4);
      return {
        signed: true, answer: a / b, show: fTxt(a, b),
        q: `Vypočítaj $\\lim_{x\\to 0}\\dfrac{\\ln(1${term(a, 'x')})}{\\mathrm{e}^{${cx(b)}}-1}$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Typ $\\frac{0}{0}$. Podľa L’Hospitalovho pravidla $\\lim_{x\\to 0}\\dfrac{${a}/(1${term(a, 'x')})}{${fco(b, true)}\\mathrm{e}^{${cx(b)}}}=\\dfrac{${a}}{${b}}${fTex(a, b) === `\\frac{${a}}{${b}}` ? '' : `=${fTex(a, b)}`}$.`,
        hint: 'Využi $\\ln(1+u)\\approx u$ a $\\mathrm{e}^u-1\\approx u$ pre malé $u$, alebo L’Hospitalovo pravidlo.'
      };
    }
    if (t < 0.78) {
      if (Math.random() < 0.5) {
        const a = rnd(1, 5), b = rnd(1, 4);
        return {
          signed: true, answer: a / b, show: fTxt(a, b),
          q: `Pre aké $c$ je funkcia $f(x)=\\begin{cases}\\dfrac{\\sin ${cx(a)}}{\\ln(1+${cx(b)})}, & x\\gt 0,\\\\ c, & x=0\\end{cases}$ sprava spojitá v bode $0$?`,
          solution: `Musí platiť $c=\\lim_{x\\to 0^+} f(x)$. Typ $\\frac{0}{0}$, podľa L’Hospitalovho pravidla $\\lim_{x\\to 0^+}\\dfrac{${fco(a, true)}\\cos ${cx(a)}}{${b}/(1+${cx(b)})}=${b === 1 ? a : `\\dfrac{${a}}{${b}}`}$. Teda $c=${fTex(a, b)}$.`,
          hint: 'Spojitosť sprava v bode $0$ znamená $\\lim_{x\\to 0^+} f(x)=f(0)$.'
        };
      }
      const a = rnd(1, 4), b = rnd(1, 4);
      return {
        answer: a * a / (2 * b), show: fTxt(a * a, 2 * b),
        q: `Pre aké $c$ je funkcia $f(x)=\\begin{cases}\\dfrac{1-\\cos ${cx(a)}}{${cx(b, 'x^2')}}, & x\\neq 0,\\\\ c, & x=0\\end{cases}$ spojitá na $\\mathbb{R}$?`,
        solution: `Mimo nuly je $f$ spojitá ako podiel spojitých funkcií. V nule potrebujeme $c=\\lim_{x\\to 0}\\dfrac{1-\\cos ${cx(a)}}{${cx(b, 'x^2')}}$.
          Dvakrát použijeme L’Hospitalovo pravidlo: $\\dfrac{${a === 1 ? '' : a}\\sin ${cx(a)}}{${2 * b}x}\\to\\dfrac{${a * a}\\cos ${cx(a)}}{${2 * b}}\\to\\dfrac{${a * a}}{${2 * b}}$. Teda $c=${fTex(a * a, 2 * b)}$.`,
        hint: 'Funkcia je spojitá v nule práve vtedy, keď sa limita v nule rovná funkčnej hodnote $c$.'
      };
    }
    if (Math.random() < 0.5) {
      const a = nz(-4, 4), b = nz(-3, 3);
      return {
        signed: true, answer: a * b,
        q: `Limita $\\lim_{x\\to 0}(1${term(a, 'x')})^{${b}/x}$ sa rovná $\\mathrm{e}^{k}$. Urči $k$.`,
        solution: `Typ $1^\\infty$. Zapíšeme $(1${term(a, 'x')})^{${b}/x}=\\mathrm{e}^{\\frac{${fco(b, true)}\\ln(1${term(a, 'x')})}{x}}$.
          Limita exponentu: $\\lim_{x\\to 0}\\dfrac{${fco(b, true)}\\ln(1${term(a, 'x')})}{x}=\\lim_{x\\to 0}\\dfrac{${b}\\cdot ${par(a)}}{1${term(a, 'x')}}=${a * b}$ (L’Hospitalovo pravidlo). Teda $k=${a * b}$.`,
        hint: 'Použi $f^g=\\mathrm{e}^{g\\ln f}$ a vypočítaj limitu exponentu.'
      };
    }
    const a = rnd(1, 3), b = rnd(1, 4);
    return {
      signed: true, answer: -a * a * b / 2, show: fTxt(-a * a * b, 2),
      q: `Limita $\\lim_{x\\to 0}(\\cos ${cx(a)})^{${b}/x^2}$ sa rovná $\\mathrm{e}^{k}$. Urči $k$ (celé číslo alebo zlomok).`,
      solution: `Typ $1^\\infty$. Exponent: $\\lim_{x\\to 0}\\dfrac{${fco(b, true)}\\ln\\cos ${cx(a)}}{x^2}$, typ $\\frac{0}{0}$. L’Hospitalovo pravidlo dá
        $\\lim_{x\\to 0}\\dfrac{-${b * a === 1 ? '' : b * a}\\operatorname{tg} ${cx(a)}}{2x}=-\\dfrac{${b * a}\\cdot ${a}}{2}=${fTex(-a * a * b, 2)}$, lebo $\\frac{\\operatorname{tg} u}{u}\\to 1$. Teda $k=${fTex(-a * a * b, 2)}$.`,
      hint: 'Použi $f^g=\\mathrm{e}^{g\\ln f}$; pri derivovaní $\\ln\\cos u$ dostaneš $-\\operatorname{tg} u\\cdot u\'$.'
    };
  });

  /* ======================= 3. METÓDY INTEGROVANIA ======================= */

  lesson({
    id: 'v2-per-partes', order: 30, title: 'Neurčitý integrál: per partes a substitúcia',
    summary: 'Primitívna funkcia, integrovanie po častiach a substitučná metóda v neurčitom aj určitom integráli.',
    theory: [
      `<p>Funkcia $F$ je <strong>primitívna</strong> k funkcii $f$ na intervale $I$, ak $F'(x)=f(x)$ pre všetky $x\\in I$. Každá spojitá funkcia na intervale má primitívnu funkciu a všetky primitívne funkcie sa líšia len o konštantu:
       $\\int f(x)\\,dx=F(x)+C$. Integrál je lineárny, no na rozdiel od derivácie neexistuje všeobecné pravidlo pre integrál súčinu či podielu – preto potrebujeme metódy.</p>`,
      `<p><strong>Metóda per partes</strong> (integrovanie po častiach) vychádza z derivácie súčinu: ak $u$, $v$ majú spojité derivácie, tak</p>
       <p style="text-align:center">$\\displaystyle\\int u\\,v'\\,dx=u\\,v-\\int u'\\,v\\,dx .$</p>
       <ul><li>$P(x)\\,\\mathrm{e}^{ax}$, $P(x)\\sin ax$, $P(x)\\cos ax$ (polynóm $P$): volíme $u=P$, derivovaním sa stupeň znižuje.</li>
       <li>$P(x)\\ln x$, $P(x)\\operatorname{arctg} x$: volíme $u=\\ln x$ (resp. $\\operatorname{arctg} x$), $v'=P$.</li>
       <li>$\\mathrm{e}^{ax}\\sin bx$: per partes dvakrát, vznikne rovnica pre hľadaný integrál.</li></ul>`,
      `<p><strong>Substitučná metóda.</strong> Ak $\\varphi$ má spojitú deriváciu a $F'=f$, tak $\\int f(\\varphi(x))\\,\\varphi'(x)\\,dx=F(\\varphi(x))+C$; prakticky položíme $t=\\varphi(x)$, $dt=\\varphi'(x)\\,dx$.
       Dôležité prípady: $\\int\\frac{f'(x)}{f(x)}\\,dx=\\ln|f(x)|+C$ a $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)+C$.
       V <strong>určitom integráli</strong> netreba vracať substitúciu, stačí prepočítať hranice: $\\int_a^b f(\\varphi(x))\\varphi'(x)\\,dx=\\int_{\\varphi(a)}^{\\varphi(b)} f(t)\\,dt$.
       Analogicky per partes: $\\int_a^b u v'\\,dx=[uv]_a^b-\\int_a^b u'v\\,dx$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\int x^2\\,\\mathrm{e}^{x}\\,dx$.',
        steps: ['Per partes s $u=x^2$, $v\'=\\mathrm{e}^x$: $u\'=2x$, $v=\\mathrm{e}^x$, teda $\\int x^2\\mathrm{e}^x\\,dx=x^2\\mathrm{e}^x-\\int 2x\\,\\mathrm{e}^x\\,dx$.',
          'Ešte raz per partes s $u=2x$, $v\'=\\mathrm{e}^x$: $\\int 2x\\,\\mathrm{e}^x\\,dx=2x\\,\\mathrm{e}^x-\\int 2\\mathrm{e}^x\\,dx=2x\\,\\mathrm{e}^x-2\\mathrm{e}^x$.',
          'Spolu: $x^2\\mathrm{e}^x-2x\\,\\mathrm{e}^x+2\\mathrm{e}^x+C$. Skúška: derivácia $\\mathrm{e}^x(x^2-2x+2)$ je $\\mathrm{e}^x(x^2-2x+2+2x-2)=x^2\\mathrm{e}^x$.',
          '<strong>Výsledok: $\\mathrm{e}^x(x^2-2x+2)+C$</strong>'] },
      { task: 'Vypočítaj $\\int_0^{\\sqrt{3}} x\\sqrt{1+x^2}\\,dx$.',
        steps: ['Substitúcia $t=1+x^2$, $dt=2x\\,dx$, teda $x\\,dx=\\frac{1}{2}dt$. Hranice: $x=0\\Rightarrow t=1$, $x=\\sqrt{3}\\Rightarrow t=4$.',
          '$\\displaystyle\\int_1^4\\frac{1}{2}\\sqrt{t}\\,dt=\\frac{1}{2}\\cdot\\frac{2}{3}\\left[t^{3/2}\\right]_1^4=\\frac{1}{3}(8-1)$.',
          '<strong>Výsledok: $\\frac{7}{3}$</strong>'] }
    ]
  });

  gen('v2-per-partes', () => {
    const t = Math.random();
    if (t < 0.4) {
      const fam = rnd(0, 3), a = rnd(2, 4), C = '+C';
      let f, ok, wrong, sol;
      if (fam === 0) {
        const E = `\\mathrm{e}^{${a}x}`;
        f = `x\\,${E}`;
        ok = `${E}\\left(${rsum([[1, a, 'x'], [-1, a * a, '']])}\\right)${C}`;
        wrong = [`${E}\\left(${rsum([[1, a, 'x'], [1, a * a, '']])}\\right)${C}`, `${E}\\left(${rsum([[1, 1, 'x'], [-1, a, '']])}\\right)${C}`,
          `\\frac{x^2}{${2 * a}}${E}${C}`];
        sol = `$u=x$, $v'=${E}$, teda $u'=1$, $v=\\frac{1}{${a}}${E}$: $\\int x\\,${E}\\,dx=\\frac{x}{${a}}${E}-\\frac{1}{${a}}\\int ${E}\\,dx=\\frac{x}{${a}}${E}-\\frac{1}{${a * a}}${E}+C$.`;
      } else if (fam === 1) {
        f = `x\\cos ${a}x`;
        ok = `\\frac{x}{${a}}\\sin ${a}x+\\frac{1}{${a * a}}\\cos ${a}x${C}`;
        wrong = [`\\frac{x}{${a}}\\sin ${a}x-\\frac{1}{${a * a}}\\cos ${a}x${C}`, `-\\frac{x}{${a}}\\sin ${a}x+\\frac{1}{${a * a}}\\cos ${a}x${C}`,
          `\\frac{x}{${a}}\\sin ${a}x+\\frac{1}{${a}}\\cos ${a}x${C}`];
        sol = `$u=x$, $v'=\\cos ${a}x$, teda $u'=1$, $v=\\frac{1}{${a}}\\sin ${a}x$: $\\int x\\cos ${a}x\\,dx=\\frac{x}{${a}}\\sin ${a}x-\\frac{1}{${a}}\\int\\sin ${a}x\\,dx=\\frac{x}{${a}}\\sin ${a}x+\\frac{1}{${a * a}}\\cos ${a}x+C$.`;
      } else if (fam === 2) {
        f = `x\\sin ${a}x`;
        ok = `-\\frac{x}{${a}}\\cos ${a}x+\\frac{1}{${a * a}}\\sin ${a}x${C}`;
        wrong = [`-\\frac{x}{${a}}\\cos ${a}x-\\frac{1}{${a * a}}\\sin ${a}x${C}`, `\\frac{x}{${a}}\\cos ${a}x+\\frac{1}{${a * a}}\\sin ${a}x${C}`,
          `-\\frac{x}{${a}}\\cos ${a}x+\\frac{1}{${a}}\\sin ${a}x${C}`];
        sol = `$u=x$, $v'=\\sin ${a}x$, teda $u'=1$, $v=-\\frac{1}{${a}}\\cos ${a}x$: $\\int x\\sin ${a}x\\,dx=-\\frac{x}{${a}}\\cos ${a}x+\\frac{1}{${a}}\\int\\cos ${a}x\\,dx=-\\frac{x}{${a}}\\cos ${a}x+\\frac{1}{${a * a}}\\sin ${a}x+C$.`;
      } else {
        const n = rnd(1, 3), m = n + 1, xn = n === 1 ? 'x' : `x^{${n}}`;
        f = `${xn}\\ln x`;
        ok = `\\frac{x^{${m}}}{${m}}\\ln x-\\frac{x^{${m}}}{${m * m}}${C}`;
        wrong = [`\\frac{x^{${m}}}{${m}}\\ln x+\\frac{x^{${m}}}{${m * m}}${C}`, `\\frac{x^{${m}}}{${m}}\\ln x-\\frac{x^{${m}}}{${m}}${C}`,
          `\\frac{x^{${m}}}{${m}}\\ln x${C}`];
        sol = `$u=\\ln x$, $v'=${xn}$, teda $u'=\\frac{1}{x}$, $v=\\frac{x^{${m}}}{${m}}$: $\\int ${xn}\\ln x\\,dx=\\frac{x^{${m}}}{${m}}\\ln x-\\int\\frac{${xn === 'x' ? 'x' : xn}}{${m}}\\,dx=\\frac{x^{${m}}}{${m}}\\ln x-\\frac{x^{${m}}}{${m * m}}+C$.`;
      }
      const opts = shuffle([ok, ...wrong].map((s) => `$${s}$`));
      return {
        type: 'choice', options: opts, answer: `$${ok}$`,
        q: `Ktorá funkcia je neurčitým integrálom $\\int ${f}\\,dx$?`,
        solution: `Metóda per partes: ${sol} Správnosť overíš derivovaním.`,
        hint: 'Per partes: $\\int u v\'\\,dx=uv-\\int u\'v\\,dx$. Za $u$ zvoľ polynóm, pri logaritme naopak $u=\\ln x$.'
      };
    }
    if (t < 0.7) {
      const fam = rnd(0, 2);
      if (fam === 0) {
        const a = rnd(1, 3), val = ((a - 1) * Math.exp(a) + 1) / (a * a);
        return {
          answer: round(val, 3), tol: TOL3, show: dt(val),
          q: `Vypočítaj $\\displaystyle\\int_0^1 x\\,\\mathrm{e}^{${cx(a)}}\\,dx$. ${ROUND3}`,
          solution: `Per partes ($u=x$, $v'=\\mathrm{e}^{${cx(a)}}$): $\\displaystyle\\int_0^1 x\\,\\mathrm{e}^{${cx(a)}}\\,dx=\\left[${a === 1 ? 'x\\,\\mathrm{e}^{x}' : `\\frac{x}{${a}}\\mathrm{e}^{${a}x}`}\\right]_0^1-${a === 1 ? '' : `\\frac{1}{${a}}`}\\int_0^1\\mathrm{e}^{${cx(a)}}\\,dx
            =${a === 1 ? '\\mathrm{e}-(\\mathrm{e}-1)=1' : `\\frac{\\mathrm{e}^{${a}}}{${a}}-\\frac{\\mathrm{e}^{${a}}-1}{${a * a}}=\\frac{${a - 1}\\,\\mathrm{e}^{${a}}+1}{${a * a}}\\approx ${dd(val)}`}$.`,
          hint: 'Per partes v určitom integráli: $\\int_a^b uv\'\\,dx=[uv]_a^b-\\int_a^b u\'v\\,dx$.'
        };
      }
      if (fam === 1) {
        const n = rnd(1, 3), m = n + 1, val = (n * Math.exp(m) + 1) / (m * m), xn = n === 1 ? 'x' : `x^{${n}}`;
        return {
          answer: round(val, 3), tol: TOL3, show: dt(val),
          q: `Vypočítaj $\\displaystyle\\int_1^{\\mathrm{e}} ${xn}\\ln x\\,dx$. ${ROUND3}`,
          solution: `Per partes ($u=\\ln x$, $v'=${xn}$): $\\displaystyle\\left[\\frac{x^{${m}}}{${m}}\\ln x\\right]_1^{\\mathrm{e}}-\\int_1^{\\mathrm{e}}\\frac{${xn}}{${m}}\\,dx=\\frac{\\mathrm{e}^{${m}}}{${m}}-\\frac{\\mathrm{e}^{${m}}-1}{${m * m}}=\\frac{${n === 1 ? '' : n}\\mathrm{e}^{${m}}+1}{${m * m}}\\approx ${dd(val)}$.`,
          hint: 'Za $u$ zvoľ $\\ln x$, potom $u\'=\\frac{1}{x}$ a integrál sa zjednoduší na integrál z mocniny.'
        };
      }
      const k = rnd(1, 4), val = (k % 2 ? 1 : -1) * Math.PI / k;
      return {
        signed: true, answer: round(val, 3), tol: TOL3, show: dt(val),
        q: `Vypočítaj $\\displaystyle\\int_0^{\\pi} x\\sin ${cx(k)}\\,dx$. ${ROUND3}`,
        solution: `Per partes ($u=x$, $v'=\\sin ${cx(k)}$, $v=-\\frac{1}{${k}}\\cos ${cx(k)}$):
          $\\displaystyle\\left[-\\frac{x}{${k}}\\cos ${cx(k)}\\right]_0^{\\pi}+\\frac{1}{${k}}\\int_0^{\\pi}\\cos ${cx(k)}\\,dx=-\\frac{\\pi\\cos ${k}\\pi}{${k}}+0=${k % 2 ? '' : '-'}\\frac{\\pi}{${k}}\\approx ${dd(val)}$.`,
        hint: 'Per partes s $u=x$; pamätaj, že $\\cos k\\pi=(-1)^k$ a $\\sin k\\pi=0$.'
      };
    }
    const fam = rnd(0, 3);
    if (fam === 0) {
      const n = rnd(2, 5), m = n + 1;
      return {
        answer: (Math.pow(2, m) - 1) / (2 * m), show: fTxt(Math.pow(2, m) - 1, 2 * m),
        q: `Vypočítaj $\\displaystyle\\int_0^1 x\\,(x^2+1)^{${n}}\\,dx$. Výsledok zadaj ako zlomok.`,
        solution: `Substitúcia $t=x^2+1$, $dt=2x\\,dx$; hranice $0\\mapsto 1$, $1\\mapsto 2$:
          $\\displaystyle\\frac{1}{2}\\int_1^2 t^{${n}}\\,dt=\\frac{1}{2}\\left[\\frac{t^{${m}}}{${m}}\\right]_1^2=\\frac{${Math.pow(2, m)}-1}{${2 * m}}=${fTex(Math.pow(2, m) - 1, 2 * m)}$.`,
        hint: 'Derivácia výrazu v zátvorke je až na konštantu rovná činiteľu pred ňou – substituuj $t=x^2+1$.'
      };
    }
    if (fam === 1) {
      const n = rnd(2, 6);
      return {
        answer: 1 / (n + 1), show: `1/${n + 1}`,
        q: `Vypočítaj $\\displaystyle\\int_0^{\\pi/2}\\sin^{${n}}x\\,\\cos x\\,dx$. Výsledok zadaj ako zlomok.`,
        solution: `Substitúcia $t=\\sin x$, $dt=\\cos x\\,dx$; hranice $0\\mapsto 0$, $\\frac{\\pi}{2}\\mapsto 1$: $\\displaystyle\\int_0^1 t^{${n}}\\,dt=\\frac{1}{${n + 1}}$.`,
        hint: 'Polož $t=\\sin x$ a prepočítaj hranice.'
      };
    }
    if (fam === 2) {
      const n = rnd(1, 5);
      return {
        answer: 1 / (n + 1), show: `1/${n + 1}`,
        q: `Vypočítaj $\\displaystyle\\int_1^{\\mathrm{e}}\\frac{(\\ln x)^{${n}}}{x}\\,dx$. Výsledok zadaj ako zlomok.`,
        solution: `Substitúcia $t=\\ln x$, $dt=\\frac{dx}{x}$; hranice $1\\mapsto 0$, $\\mathrm{e}\\mapsto 1$: $\\displaystyle\\int_0^1 t^{${n}}\\,dt=\\frac{1}{${n + 1}}$.`,
        hint: 'Výraz $\\frac{1}{x}$ je derivácia $\\ln x$ – substituuj $t=\\ln x$.'
      };
    }
    const [a, b, c] = pick([[3, 4, 5], [4, 3, 5], [5, 12, 13], [12, 5, 13], [8, 6, 10], [6, 8, 10], [15, 8, 17]]);
    return {
      answer: c - b,
      q: `Vypočítaj $\\displaystyle\\int_0^{${a}}\\frac{x}{\\sqrt{x^2+${b * b}}}\\,dx$.`,
      solution: `Substitúcia $t=x^2+${b * b}$, $dt=2x\\,dx$; hranice $0\\mapsto ${b * b}$, $${a}\\mapsto ${c * c}$:
        $\\displaystyle\\frac{1}{2}\\int_{${b * b}}^{${c * c}} t^{-1/2}\\,dt=\\left[\\sqrt{t}\\right]_{${b * b}}^{${c * c}}=${c}-${b}=${c - b}$.`,
      hint: 'Substituuj výraz pod odmocninou; jeho derivácia je $2x$.'
    };
  });

  lesson({
    id: 'v2-racionalne', order: 40, title: 'Integrovanie racionálnych funkcií',
    summary: 'Delenie polynómov, rozklad na parciálne zlomky a integrály elementárnych zlomkov.',
    theory: [
      `<p>Racionálna funkcia je podiel polynómov $\\frac{P(x)}{Q(x)}$. Ak $\\deg P\\ge\\deg Q$, najprv polynómy vydelíme: $\\frac{P}{Q}=S+\\frac{R}{Q}$, kde $S$ je polynóm a $\\deg R\\lt\\deg Q$ (<em>rýdzo racionálna</em> funkcia).
       Menovateľ $Q$ sa dá rozložiť na súčin reálnych činiteľov tvaru $(x-a)^k$ a $(x^2+px+q)^m$, kde $p^2-4q\\lt 0$.</p>`,
      `<p><strong>Rozklad na parciálne zlomky.</strong> Každá rýdzo racionálna funkcia sa dá jednoznačne zapísať ako súčet zlomkov, v ktorom</p>
       <ul><li>činiteľ $(x-a)^k$ prispieva členmi $\\frac{A_1}{x-a}+\\frac{A_2}{(x-a)^2}+\\dots+\\frac{A_k}{(x-a)^k}$,</li>
       <li>činiteľ $(x^2+px+q)^m$ prispieva členmi $\\frac{B_1x+C_1}{x^2+px+q}+\\dots+\\frac{B_mx+C_m}{(x^2+px+q)^m}$.</li></ul>
       <p>Koeficienty nájdeme porovnaním koeficientov pri rovnakých mocninách $x$ alebo dosadením vhodných čísel (pri jednoduchom koreni $a$ stačí vynásobiť rovnosť $(x-a)$ a dosadiť $x=a$).</p>`,
      `<p><strong>Integrály elementárnych zlomkov:</strong></p>
       <table class="tbl"><tr><td>$\\int\\frac{dx}{x-a}=\\ln|x-a|+C$</td><td>$\\int\\frac{dx}{(x-a)^k}=-\\frac{1}{(k-1)(x-a)^{k-1}}+C,\\ k\\ge 2$</td></tr>
       <tr><td>$\\int\\frac{dx}{x^2+a^2}=\\frac{1}{a}\\operatorname{arctg}\\frac{x}{a}+C$</td><td>$\\int\\frac{dx}{x^2-a^2}=\\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right|+C$</td></tr></table>
       <p>Pri zlomku $\\frac{Bx+C}{x^2+px+q}$ oddelíme v čitateli násobok derivácie menovateľa (vznikne logaritmus) a zvyšok upravíme doplnením na štvorec (vznikne arkustangens).</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\int\\dfrac{x+5}{(x-1)(x+2)}\\,dx$.',
        steps: ['Hľadáme $\\frac{x+5}{(x-1)(x+2)}=\\frac{A}{x-1}+\\frac{B}{x+2}$, teda $x+5=A(x+2)+B(x-1)$.',
          'Dosadíme $x=1$: $6=3A$, $A=2$. Dosadíme $x=-2$: $3=-3B$, $B=-1$.',
          '$\\int\\left(\\frac{2}{x-1}-\\frac{1}{x+2}\\right)dx=2\\ln|x-1|-\\ln|x+2|+C$.',
          '<strong>Výsledok: $\\ln\\dfrac{(x-1)^2}{|x+2|}+C$</strong>'] },
      { task: 'Vypočítaj $\\int\\dfrac{2x+3}{x^2+2x+5}\\,dx$.',
        steps: ['Menovateľ nemá reálne korene ($D=4-20\\lt 0$). Jeho derivácia je $2x+2$, preto čitateľ rozdelíme: $2x+3=(2x+2)+1$.',
          '$\\int\\frac{2x+2}{x^2+2x+5}\\,dx=\\ln(x^2+2x+5)$.',
          'Doplníme na štvorec: $x^2+2x+5=(x+1)^2+4$, preto $\\int\\frac{dx}{(x+1)^2+2^2}=\\frac{1}{2}\\operatorname{arctg}\\frac{x+1}{2}$.',
          '<strong>Výsledok: $\\ln(x^2+2x+5)+\\frac{1}{2}\\operatorname{arctg}\\frac{x+1}{2}+C$</strong>'] }
    ]
  });

  gen('v2-racionalne', () => {
    const t = Math.random();
    if (t < 0.55) {
      const A = nz(-4, 4), B = nz(-4, 4);
      let a, b;
      do { a = rnd(-4, 4); b = rnd(-4, 4); } while (a === b);
      const num = lin([[A + B, 'x'], [-(A * b + B * a), '']]);
      const den = `${fac(a)}${fac(b)}`;
      if (t < 0.32) {
        return {
          type: 'tuple', signed: true, answer: [A, B], placeholder: 'A; B',
          q: `Rozlož na parciálne zlomky: $\\dfrac{${num}}{${den}}=\\dfrac{A}{${fx(a)}}+\\dfrac{B}{${fx(b)}}$. Zadaj $A;\\,B$.`,
          solution: `Po vynásobení menovateľom: $${num}=A${fac(b)}+B${fac(a)}$.
            Dosadíme $x=${a}$: $${(A + B) * a - (A * b + B * a)}=A\\cdot ${par(a - b)}$, teda $A=${A}$. Dosadíme $x=${b}$: $${(A + B) * b - (A * b + B * a)}=B\\cdot ${par(b - a)}$, teda $B=${B}$.`,
          hint: 'Rovnosť vynásob menovateľom a dosaď postupne korene menovateľa.'
        };
      }
      const c = Math.max(a, b) + rnd(1, 2), d = c + rnd(1, 3);
      const val = A * Math.log((d - a) / (c - a)) + B * Math.log((d - b) / (c - b));
      return {
        signed: true, answer: round(val, 3), tol: TOL3, show: dt(val),
        q: `Vypočítaj $\\displaystyle\\int_{${c}}^{${d}}\\frac{${num}}{${den}}\\,dx$. ${ROUND3}`,
        solution: `Rozklad: $\\dfrac{${num}}{${den}}=\\dfrac{${A}}{${fx(a)}}${B > 0 ? '+' : '-'}\\dfrac{${Math.abs(B)}}{${fx(b)}}$ (dosadením koreňov menovateľa).
          Primitívna funkcia je $${fco(A, true)}\\ln|${fx(a)}|${fco(B)}\\ln|${fx(b)}|$, teda
          $\\displaystyle\\int_{${c}}^{${d}}=${fco(A, true)}\\ln ${fTex(d - a, c - a)}${fco(B)}\\ln ${fTex(d - b, c - b)}\\approx ${dd(val)}$.`,
        hint: 'Najprv rozlož integrand na parciálne zlomky, potom integruj: $\\int\\frac{dx}{x-a}=\\ln|x-a|$.'
      };
    }
    if (t < 0.8) {
      const k = rnd(2, 5), plus = Math.random() < 0.5;
      const at = `\\frac{1}{${k}}\\operatorname{arctg}\\frac{x}{${k}}+C`, at1 = `\\operatorname{arctg}\\frac{x}{${k}}+C`, at2 = `\\frac{1}{${k * k}}\\operatorname{arctg}\\frac{x}{${k}}+C`;
      const ln = `\\frac{1}{${2 * k}}\\ln\\left|\\frac{x-${k}}{x+${k}}\\right|+C`, ln1 = `\\frac{1}{${2 * k}}\\ln\\left|\\frac{x+${k}}{x-${k}}\\right|+C`, ln2 = `\\frac{1}{${k}}\\ln\\left|\\frac{x-${k}}{x+${k}}\\right|+C`;
      const ok = plus ? at : ln;
      const opts = plus ? [at, at1, at2, ln] : [ln, ln1, ln2, at];
      return {
        type: 'choice', options: shuffle(opts.map((s) => `$${s}$`)), answer: `$${ok}$`,
        q: `Ktorá funkcia je neurčitým integrálom $\\displaystyle\\int\\frac{dx}{x^2${plus ? '+' : '-'}${k * k}}$?`,
        solution: plus
          ? `Vyberieme $${k * k}$: $\\frac{1}{x^2+${k * k}}=\\frac{1}{${k * k}}\\cdot\\frac{1}{(x/${k})^2+1}$. Substitúcia $t=\\frac{x}{${k}}$, $dx=${k}\\,dt$ dá $\\frac{${k}}{${k * k}}\\int\\frac{dt}{t^2+1}=\\frac{1}{${k}}\\operatorname{arctg}\\frac{x}{${k}}+C$.`
          : `Menovateľ má korene $\\pm ${k}$: $\\frac{1}{x^2-${k * k}}=\\frac{1}{${2 * k}}\\left(\\frac{1}{x-${k}}-\\frac{1}{x+${k}}\\right)$. Integrovaním $\\frac{1}{${2 * k}}\\left(\\ln|x-${k}|-\\ln|x+${k}|\\right)+C=\\frac{1}{${2 * k}}\\ln\\left|\\frac{x-${k}}{x+${k}}\\right|+C$.`,
        hint: plus ? 'Menovateľ nemá reálne korene – výsledkom bude arkustangens.' : 'Menovateľ je rozdiel štvorcov – rozlož ho na parciálne zlomky.'
      };
    }
    const A = nz(-4, 4), B = nz(-5, 5), a = nz(-3, 3);
    const num = lin([[A, 'x'], [B - A * a, '']]);
    return {
      type: 'tuple', signed: true, answer: [A, B], placeholder: 'A; B',
      q: `Rozlož na parciálne zlomky: $\\dfrac{${num}}{${fac(a)}^2}=\\dfrac{A}{${fx(a)}}+\\dfrac{B}{${fac(a)}^2}$. Zadaj $A;\\,B$.`,
      solution: `Po vynásobení $${fac(a)}^2$: $${num}=A${fac(a)}+B$. Porovnaním koeficientov pri $x$: $A=${A}$. Dosadením $x=${a}$: $B=${A}\\cdot${par(a)}${term(B - A * a, '')}=${B}$.`,
      hint: 'Rovnosť vynásob $(x-a)^2$; koeficient pri $x$ dá $A$, dosadenie $x=a$ dá $B$.'
    };
  });

  /* ======================= 4. URČITÝ A NEVLASTNÝ INTEGRÁL ======================= */

  fig('v2-riemann', {
    controls: [{ id: 'n', label: 'Počet dielikov n', min: 1, max: 40, step: 1, value: 6 }],
    draw: (v) => {
      const p = plane(-0.3, 2.3, -0.5, 4.5, 420, 300);
      const n = v.n, h = 2 / n, f = (x) => x * x;
      let rects = '', L = 0;
      for (let k = 0; k < n; k++) {
        const x = k * h, y = f(x);
        L += y * h;
        rects += `<rect class="f-fill f-outline" x="${n1(p.X(x))}" y="${n1(p.Y(y))}" width="${n1(p.X(x + h) - p.X(x))}" height="${n1(p.Y(0) - p.Y(y))}"/>`;
      }
      const clipped = `${rects}<path class="f-line" d="${curvePath(p, f)}"/>`;
      return {
        svg: svg(p, axes(p), clipped, '', 'Ľavé integrálne súčty funkcie x na druhú na intervale od 0 do 2'),
        readout: `n = ${n} · <span class="c-accent">ľavý súčet Lₙ = ${sk(L, 4)}</span> · ∫₀² x² dx = 8/3 ≈ 2,6667 · rozdiel ${sk(8 / 3 - L, 4)}`
      };
    }
  });

  lesson({
    id: 'v2-urcity', order: 50, title: 'Určitý a nevlastný integrál, aplikácie',
    summary: 'Riemannov integrál, obsah, objem rotačného telesa, dĺžka krivky a integrály cez neohraničený interval.',
    theory: [
      `<p><strong>Riemannov integrál.</strong> Delenie intervalu $\\langle a;b\\rangle$ je $D: a=x_0\\lt x_1\\lt\\dots\\lt x_n=b$; v každom dieliku zvolíme bod $\\xi_i\\in\\langle x_{i-1};x_i\\rangle$ a vytvoríme
       <em>integrálny súčet</em> $\\sum_{i=1}^{n} f(\\xi_i)\\,(x_i-x_{i-1})$. Ak sa tieto súčty pri zjemňovaní delenia (norma delenia $\\to 0$) blížia k jednému číslu nezávisle od voľby bodov $\\xi_i$, je to
       $\\int_a^b f(x)\\,dx$. Každá spojitá (aj po častiach spojitá ohraničená) funkcia na $\\langle a;b\\rangle$ je integrovateľná a platí <strong>Newtonova–Leibnizova formula</strong> $\\int_a^b f(x)\\,dx=F(b)-F(a)$.</p>`,
      { fig: 'v2-riemann', caption: 'Ľavé integrálne súčty funkcie $f(x)=x^2$ na $\\langle 0;2\\rangle$. S rastúcim počtom dielikov sa blížia k hodnote integrálu $\\frac{8}{3}$.' },
      `<p><strong>Geometrické aplikácie</strong> (funkcie spojité na $\\langle a;b\\rangle$):</p>
       <ul><li>obsah oblasti medzi grafmi $f$ a $g$: $S=\\int_a^b |f(x)-g(x)|\\,dx$,</li>
       <li>objem telesa, ktoré vznikne rotáciou oblasti pod grafom $f$ okolo osi $x$: $V=\\pi\\int_a^b f^2(x)\\,dx$,</li>
       <li>dĺžka grafu funkcie so spojitou deriváciou: $\\ell=\\int_a^b\\sqrt{1+f'^2(x)}\\,dx$,</li>
       <li>obsah rotačnej plochy: $P=2\\pi\\int_a^b |f(x)|\\sqrt{1+f'^2(x)}\\,dx$.</li></ul>`,
      `<p><strong>Nevlastný integrál.</strong> Pre neohraničený interval definujeme $\\int_a^{\\infty} f(x)\\,dx=\\lim_{b\\to\\infty}\\int_a^b f(x)\\,dx$; ak je $f$ neohraničená v okolí bodu $a$, tak $\\int_a^b f(x)\\,dx=\\lim_{c\\to a^+}\\int_c^b f(x)\\,dx$.
       Ak je limita vlastná, integrál <strong>konverguje</strong>, inak diverguje. Základné porovnávacie integrály:</p>
       <p style="text-align:center">$\\displaystyle\\int_1^{\\infty}\\frac{dx}{x^p}=\\frac{1}{p-1}$ pre $p\\gt 1$ (pre $p\\le 1$ diverguje),&nbsp;&nbsp; $\\displaystyle\\int_0^{1}\\frac{dx}{x^p}=\\frac{1}{1-p}$ pre $p\\lt 1$ (pre $p\\ge 1$ diverguje).</p>
       <p><strong>Porovnávacie kritérium:</strong> ak $0\\le f\\le g$ na $\\langle a;\\infty)$ a $\\int_a^\\infty g$ konverguje, konverguje aj $\\int_a^\\infty f$; ak $\\int_a^\\infty f$ diverguje, diverguje aj $\\int_a^\\infty g$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj objem telesa, ktoré vznikne rotáciou oblasti pod grafom $f(x)=\\sqrt{x}$, $x\\in\\langle 0;4\\rangle$, okolo osi $x$.',
        steps: ['$V=\\pi\\int_0^4 (\\sqrt{x})^2\\,dx=\\pi\\int_0^4 x\\,dx$.', '$=\\pi\\left[\\frac{x^2}{2}\\right]_0^4=8\\pi$.',
          '<strong>Výsledok: $V=8\\pi\\approx 25{,}13$</strong>'] },
      { task: 'Vypočítaj $\\int_0^{\\infty} x\\,\\mathrm{e}^{-x}\\,dx$.',
        steps: ['Najprv integrál na $\\langle 0;b\\rangle$ per partes ($u=x$, $v\'=\\mathrm{e}^{-x}$): $\\int_0^b x\\,\\mathrm{e}^{-x}\\,dx=\\left[-(x+1)\\mathrm{e}^{-x}\\right]_0^b=1-(b+1)\\mathrm{e}^{-b}$.',
          'Pre $b\\to\\infty$ je $(b+1)\\mathrm{e}^{-b}=\\frac{b+1}{\\mathrm{e}^b}\\to 0$ (napr. podľa L’Hospitalovho pravidla).',
          '<strong>Výsledok: integrál konverguje a rovná sa 1</strong>'] }
    ]
  });

  gen('v2-urcity', () => {
    const t = Math.random();
    if (t < 0.22) {
      const n = rnd(2, 6), left = Math.random() < 0.5;
      const P = left ? (n - 1) * (2 * n - 1) : (n + 1) * (2 * n + 1), Q = 6 * n * n;
      const S0 = left ? (n - 1) * n * (2 * n - 1) / 6 : n * (n + 1) * (2 * n + 1) / 6;
      const pts = Array.from({ length: n }, (_, i) => `\\frac{${left ? i : i + 1}}{${n}}`).join(',\\ ');
      return {
        answer: P / Q, show: fTxt(P, Q),
        q: `Vypočítaj ${left ? 'ľavý' : 'pravý'} integrálny súčet funkcie $f(x)=x^2$ na intervale $\\langle 0;1\\rangle$ pri rozdelení na $${n}$ rovnakých dielikov (funkčné hodnoty berieme v ${left ? 'ľavých' : 'pravých'} koncových bodoch dielikov). Výsledok zadaj ako zlomok.`,
        solution: `Dĺžka dielika je $\\frac{1}{${n}}$, body sú $${pts}$. Súčet je $\\frac{1}{${n}}\\sum_{k=${left ? 0 : 1}}^{${left ? n - 1 : n}}\\left(\\frac{k}{${n}}\\right)^2=\\frac{1}{${n * n * n}}\\sum_{k=1}^{${left ? n - 1 : n}}k^2=\\frac{${S0}}{${n * n * n}}${gcd(S0, n * n * n) > 1 ? `=${fTex(P, Q)}` : ''}$
          (použili sme $\\sum_{k=1}^{m}k^2=\\frac{m(m+1)(2m+1)}{6}$). Presná hodnota integrálu je $\\frac{1}{3}$.`,
        hint: 'Súčet je $\\sum f(\\xi_i)\\,\\Delta x$ s $\\Delta x=\\frac{1}{n}$; použi vzorec pre súčet druhých mocnín.'
      };
    }
    if (t < 0.44) {
      const c = rnd(1, 2), a = rnd(1, 3), kind = rnd(0, 2);
      let f, P, Q, integ;
      if (kind === 2) { f = `${c === 1 ? '' : c}\\sqrt{x}`; P = c * c * a * a; Q = 2; integ = `${c * c === 1 ? '' : c * c}x`; }
      else {
        const m = kind + 1;
        f = `${c === 1 ? '' : c}x${m === 1 ? '' : `^{${m}}`}`; P = c * c * Math.pow(a, 2 * m + 1); Q = 2 * m + 1; integ = `${c * c === 1 ? '' : c * c}x^{${2 * m}}`;
      }
      return {
        answer: P / Q, show: fTxt(P, Q),
        q: `Oblasť pod grafom funkcie $f(x)=${f}$, $x\\in\\langle 0;${a}\\rangle$, rotuje okolo osi $x$. Objem vzniknutého telesa má tvar $V=k\\pi$. Urči $k$ (celé číslo alebo zlomok).`,
        solution: `$V=\\pi\\displaystyle\\int_0^{${a}} f^2(x)\\,dx=\\pi\\int_0^{${a}} ${integ}\\,dx=${fTex(P, Q)}\\,\\pi$, teda $k=${fTex(P, Q)}$.`,
        hint: 'Objem rotačného telesa: $V=\\pi\\int_a^b f^2(x)\\,dx$.'
      };
    }
    if (t < 0.64) {
      const s = rnd(2, 5), a = s * s - 1;
      return {
        answer: 2 * (s * s * s - 1) / 3, show: fTxt(2 * (s * s * s - 1), 3),
        q: `Vypočítaj dĺžku grafu funkcie $f(x)=\\frac{2}{3}x\\sqrt{x}$ na intervale $\\langle 0;${a}\\rangle$. Výsledok zadaj ako zlomok.`,
        solution: `$f(x)=\\frac{2}{3}x^{3/2}$, teda $f'(x)=\\sqrt{x}$ a $\\sqrt{1+f'^2(x)}=\\sqrt{1+x}$.
          $\\ell=\\displaystyle\\int_0^{${a}}\\sqrt{1+x}\\,dx=\\frac{2}{3}\\left[(1+x)^{3/2}\\right]_0^{${a}}=\\frac{2}{3}\\left(${s * s}^{3/2}-1\\right)=\\frac{2}{3}(${s * s * s}-1)=${fTex(2 * (s * s * s - 1), 3)}$.`,
        hint: 'Dĺžka krivky: $\\ell=\\int_a^b\\sqrt{1+f\'^2(x)}\\,dx$.'
      };
    }
    if (t < 0.84) {
      const kind = rnd(0, 2);
      if (kind === 0) {
        const p = rnd(2, 4), c = rnd(1, 6);
        return {
          answer: c / (p - 1), show: fTxt(c, p - 1),
          q: `Vypočítaj nevlastný integrál $\\displaystyle\\int_1^{\\infty}\\frac{${c}}{x^{${p}}}\\,dx$.`,
          solution: `$\\displaystyle\\int_1^{b}${c}x^{-${p}}\\,dx=\\left[-\\frac{${c}}{${p - 1}x^{${p - 1}}}\\right]_1^b=\\frac{${c}}{${p - 1}}-\\frac{${c}}{${p - 1}b^{${p - 1}}}\\to\\frac{${c}}{${p - 1}}$ pre $b\\to\\infty$. Výsledok: $${fTex(c, p - 1)}$.`.replace(/x\^\{1\}/g, 'x').replace(/b\^\{1\}/g, 'b'),
          hint: 'Vypočítaj integrál od 1 po $b$ a potom limitu pre $b\\to\\infty$.'
        };
      }
      if (kind === 1) {
        const q = rnd(2, 4), c = rnd(1, 5);
        return {
          answer: c * q / (q - 1), show: fTxt(c * q, q - 1),
          q: `Vypočítaj nevlastný integrál $\\displaystyle\\int_0^{1}\\frac{${c}}{${q === 2 ? '\\sqrt{x}' : `\\sqrt[${q}]{x}`}}\\,dx$.`,
          solution: `Integrand je neohraničený pri $x\\to 0^+$. $\\displaystyle\\int_\\varepsilon^1 ${c}x^{-1/${q}}\\,dx=\\left[${fTex(c * q, q - 1)}\\,x^{${q - 1}/${q}}\\right]_\\varepsilon^1\\to ${fTex(c * q, q - 1)}$ pre $\\varepsilon\\to 0^+$.`,
          hint: 'Zapíš odmocninu ako mocninu $x^{-1/q}$; ide o integrál $\\int_0^1 x^{-p}\\,dx$ s $p\\lt 1$.'
        };
      }
      const a = rnd(1, 4);
      return {
        answer: 1 / (a * a), show: `1/${a * a}`,
        q: `Vypočítaj nevlastný integrál $\\displaystyle\\int_0^{\\infty} x\\,\\mathrm{e}^{${cx(-a)}}\\,dx$.`,
        solution: `Per partes: $\\displaystyle\\int_0^b x\\,\\mathrm{e}^{${cx(-a)}}\\,dx=\\left[-\\left(${rsum([[1, a, 'x'], [1, a * a, '']])}\\right)\\mathrm{e}^{${cx(-a)}}\\right]_0^b=\\frac{1}{${a * a}}-\\left(${rsum([[1, a, 'b'], [1, a * a, '']])}\\right)\\mathrm{e}^{${cx(-a, 'b')}}\\to\\frac{1}{${a * a}}$, lebo exponenciála klesá rýchlejšie, než rastie polynóm.`,
        hint: 'Per partes s $u=x$ a potom limita $b\\to\\infty$; $\\lim_{b\\to\\infty} b\\,\\mathrm{e}^{-ab}=0$.'
      };
    }
    const atInf = Math.random() < 0.5;
    const [pTex, pv] = pick([['\\sqrt{x}', 0.5], ['x', 1], ['x^2', 2], ['x\\sqrt{x}', 1.5], ['\\sqrt[3]{x}', 1 / 3], ['\\sqrt[3]{x^2}', 2 / 3]]);
    const conv = atInf ? pv > 1 : pv < 1;
    const pt = pv === 0.5 ? '\\frac{1}{2}' : pv === 1.5 ? '\\frac{3}{2}' : pv === 1 / 3 ? '\\frac{1}{3}' : pv === 2 / 3 ? '\\frac{2}{3}' : String(pv);
    return {
      type: 'choice', options: [...CONV], answer: conv ? CONV[0] : CONV[1],
      q: `Rozhodni, či nevlastný integrál $\\displaystyle\\int_${atInf ? '1^{\\infty}' : '0^{1}'}\\frac{dx}{${pTex}}$ konverguje.`,
      solution: `Integrand je $x^{-p}$ s $p=${pt}$. ${atInf ? `Integrál $\\int_1^\\infty x^{-p}\\,dx$ konverguje práve pre $p\\gt 1$` : `Integrál $\\int_0^1 x^{-p}\\,dx$ konverguje práve pre $p\\lt 1$`}, preto tento integrál <strong>${conv ? 'konverguje' : 'diverguje'}</strong>.`,
      hint: 'Porovnaj s integrálmi $\\int_1^\\infty\\frac{dx}{x^p}$ (konverguje pre $p\\gt 1$) a $\\int_0^1\\frac{dx}{x^p}$ (konverguje pre $p\\lt 1$).'
    };
  });

  /* ======================= 5. ČÍSELNÉ RADY ======================= */

  fig('v2-ciastocne-sucty', {
    controls: [
      { id: 'q', label: 'Kvocient q', min: -0.9, max: 0.9, step: 0.1, value: 0.5 },
      { id: 'n', label: 'Index n', min: 0, max: 20, step: 1, value: 4 }
    ],
    draw: (v) => {
      const q = Math.round(v.q * 10) / 10, s = 1 / (1 - q);
      const ymax = Math.max(2, s) + 0.5;
      const p = plane(-0.8, 21, -0.5, ymax, 420, 300);
      let sum = 0, dots = '', sn = 0;
      for (let k = 0; k <= 20; k++) {
        sum += Math.pow(q, k);
        if (k === v.n) sn = sum;
        dots += `<circle class="${k === v.n ? 'f-vertex' : 'f-dot'}" cx="${n1(p.X(k))}" cy="${n1(p.Y(sum))}" r="${k === v.n ? 6 : 4}"/>`;
      }
      const clipped = `<line class="f-dash" x1="${n1(p.X(-0.8))}" y1="${n1(p.Y(s))}" x2="${n1(p.X(21))}" y2="${n1(p.Y(s))}"/>${dots}`;
      const front = `<text class="f-small" x="${n1(p.X(20.5))}" y="${n1(p.Y(s) - 6)}" text-anchor="end">s = 1/(1 − q)</text>`;
      return {
        svg: svg(p, axes(p, 5, ymax > 6 ? 2 : 1), clipped, front, 'Čiastočné súčty geometrického radu'),
        readout: `q = ${sk(q, 1)} · súčet s = ${sk(s, 4)} · <span class="c-accent">s<sub>${v.n}</sub> = ${sk(sn, 4)}</span> · s − s<sub>${v.n}</sub> = ${sk(s - sn, 4)}`
      };
    }
  });

  lesson({
    id: 'v2-rady', order: 60, title: 'Nekonečné číselné rady',
    summary: 'Čiastočné súčty a súčet radu, geometrický a teleskopický rad, nutná podmienka konvergencie.',
    theory: [
      `<p><strong>Nekonečný rad</strong> $\\sum_{n=1}^{\\infty} a_n=a_1+a_2+a_3+\\cdots$ je dvojica postupností: členov $(a_n)$ a <strong>čiastočných súčtov</strong> $s_n=a_1+a_2+\\dots+a_n$.
       Rad <strong>konverguje</strong>, ak existuje vlastná limita $s=\\lim_{n\\to\\infty} s_n$; číslo $s$ je jeho <strong>súčet</strong>. Inak rad diverguje.
       Konvergentné rady môžeme sčítavať a násobiť konštantou člen po člene; zmena konečného počtu členov konvergenciu neovplyvní (súčet áno).</p>`,
      `<p><strong>Geometrický rad</strong> $\\sum_{n=0}^{\\infty} a q^n$ ($a\\neq 0$) má $s_n=a\\frac{1-q^{n+1}}{1-q}$ pre $q\\neq 1$, preto konverguje práve pre $|q|\\lt 1$ a jeho súčet je</p>
       <p style="text-align:center">$\\displaystyle\\sum_{n=0}^{\\infty} a q^n=\\frac{a}{1-q}\\qquad(\\text{prvý člen delený } 1-q).$</p>
       <p><strong>Teleskopický rad:</strong> ak sa člen dá zapísať ako rozdiel $a_n=b_n-b_{n+1}$, čiastočný súčet sa „zloží“: $s_n=b_1-b_{n+1}$. Napríklad $\\frac{1}{n(n+1)}=\\frac{1}{n}-\\frac{1}{n+1}$, teda $s_n=1-\\frac{1}{n+1}\\to 1$.</p>`,
      { fig: 'v2-ciastocne-sucty', caption: 'Čiastočné súčty geometrického radu $\\sum_{n=0}^{\\infty} q^n$. Pre $q\\gt 0$ rastú monotónne k súčtu, pre $q\\lt 0$ oscilujú okolo neho.' },
      `<p><strong>Nutná podmienka konvergencie:</strong> ak rad $\\sum a_n$ konverguje, tak $\\lim_{n\\to\\infty} a_n=0$ (lebo $a_n=s_n-s_{n-1}\\to s-s=0$).
       Ak teda $a_n\\not\\to 0$, rad diverguje. Podmienka však <strong>nie je postačujúca</strong>: <em>harmonický rad</em> $\\sum\\frac{1}{n}$ diverguje, hoci $\\frac{1}{n}\\to 0$,
       lebo $s_{2^k}\\ge 1+\\frac{k}{2}$ (každá skupina $\\frac{1}{2^{j}+1}+\\dots+\\frac{1}{2^{j+1}}$ má súčet aspoň $\\frac{1}{2}$).</p>`
    ],
    examples: [
      { task: 'Vypočítaj súčet radu $\\sum_{n=1}^{\\infty}\\dfrac{2^n+3^n}{6^n}$.',
        steps: ['Rad rozdelíme na dva geometrické: $\\sum_{n=1}^{\\infty}\\left(\\frac{1}{3}\\right)^n+\\sum_{n=1}^{\\infty}\\left(\\frac{1}{2}\\right)^n$; oba majú $|q|\\lt 1$, teda konvergujú.',
          '$\\sum_{n=1}^{\\infty}\\left(\\frac{1}{3}\\right)^n=\\frac{1/3}{1-1/3}=\\frac{1}{2}$ a $\\sum_{n=1}^{\\infty}\\left(\\frac{1}{2}\\right)^n=\\frac{1/2}{1-1/2}=1$.',
          '<strong>Výsledok: $\\frac{3}{2}$</strong>'] },
      { task: 'Vypočítaj súčet radu $\\sum_{n=1}^{\\infty}\\dfrac{1}{n(n+2)}$.',
        steps: ['Rozklad: $\\frac{1}{n(n+2)}=\\frac{1}{2}\\left(\\frac{1}{n}-\\frac{1}{n+2}\\right)$.',
          'V čiastočnom súčte sa členy navzájom rušia: $s_n=\\frac{1}{2}\\left(1+\\frac{1}{2}-\\frac{1}{n+1}-\\frac{1}{n+2}\\right)$.',
          'Pre $n\\to\\infty$: $s_n\\to\\frac{1}{2}\\cdot\\frac{3}{2}$.', '<strong>Výsledok: $\\frac{3}{4}$</strong>'] }
    ]
  });

  gen('v2-rady', () => {
    const t = Math.random();
    if (t < 0.4) {
      if (Math.random() < 0.6) {
        const r = rnd(2, 6);
        let p;
        do { p = nz(-(r - 1), r - 1); } while (gcd(Math.abs(p), r) !== 1);
        const k = rnd(0, 2), c = rnd(1, 5);
        const num = c * Math.pow(p, k) * r, den = Math.pow(r, k) * (r - p);
        const qT = fTex(p, r), first = fTex(c * Math.pow(p, k), Math.pow(r, k));
        return {
          signed: true, answer: num / den, show: fTxt(num, den),
          q: `Vypočítaj súčet radu $\\displaystyle\\sum_{n=${k}}^{\\infty}${c === 1 ? '' : c}\\left(${qT}\\right)^{n}$. Výsledok zadaj ako zlomok.`,
          solution: `Ide o geometrický rad s kvocientom $q=${qT}$, $|q|\\lt 1$, teda konverguje. Prvý člen (pre $n=${k}$) je $${first}$.
            Súčet: $\\dfrac{${first}}{1-${p < 0 ? `\\left(${qT}\\right)` : qT}}=${fTex(num, den)}$.`,
          hint: 'Súčet geometrického radu je prvý člen delený $1-q$; pozor, od ktorého $n$ sa sčítava.'
        };
      }
      const c = rnd(3, 7);
      let a = rnd(1, c - 2), b = rnd(a + 1, c - 1);
      const P = a * (c - b) + b * (c - a), Q = (c - a) * (c - b);
      return {
        answer: P / Q, show: fTxt(P, Q),
        q: `Vypočítaj súčet radu $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{${a === 1 ? '1' : `${a}^n`}+${b}^n}{${c}^n}$. Výsledok zadaj ako zlomok.`,
        solution: `Rad je súčtom dvoch konvergentných geometrických radov s kvocientmi $\\frac{${a}}{${c}}$ a $\\frac{${b}}{${c}}$:
          $\\dfrac{${a}/${c}}{1-${a}/${c}}+\\dfrac{${b}/${c}}{1-${b}/${c}}=\\frac{${a}}{${c - a}}+\\frac{${b}}{${c - b}}=${fTex(P, Q)}$.`,
        hint: 'Rozdeľ zlomok na dva geometrické rady a sčítaj ich súčty.'
      };
    }
    if (t < 0.7) {
      const k = rnd(1, 4), c = pick([1, 2, 3, 4, 6]);
      const H = [[1, 1], [3, 2], [11, 6], [25, 12]][k - 1];
      const num = c * H[0], den = k * H[1];
      const cf = fTex(c, k) === '1' ? '' : fTex(c, k);
      const which = k === 1 ? 'prvého kladného a posledného záporného' : `prvých ${k} kladných a posledných ${k} záporných`;
      const parts = Array.from({ length: k }, (_, i) => `\\frac{1}{${i + 1}}`).join('+').replace('\\frac{1}{1}', '1');
      const tail = Array.from({ length: k }, (_, i) => `\\frac{1}{n+${i + 1}}`).join('-');
      return {
        answer: num / den, show: fTxt(num, den),
        q: `Vypočítaj súčet radu $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{${c}}{n(n+${k})}$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Rozklad: $\\frac{${c}}{n(n+${k})}=${cf}\\left(\\frac{1}{n}-\\frac{1}{n+${k}}\\right)$. V čiastočnom súčte $s_n$ (pre $n\\ge ${k}$) sa zrušia všetky členy okrem ${which}:
          $s_n=${cf}\\left(${parts}-${tail}\\right)\\to ${k === 1 ? (cf ? cf + '\\cdot 1' : '1') : `${cf}\\left(${parts}\\right)`}=${fTex(num, den)}$.`,
        hint: 'Rozlož člen na parciálne zlomky $\\frac{1}{n}-\\frac{1}{n+k}$ a sleduj, ktoré členy sa v $s_n$ navzájom zrušia.'
      };
    }
    const DIV = 'rad diverguje', CON = 'rad konverguje', UND = 'nutná podmienka o konvergencii nerozhoduje';
    const p = rnd(1, 5), r = rnd(1, 5), q0 = rnd(1, 9), s0 = rnd(1, 9);
    const cases = [
      [`\\frac{${lin([[p, 'n'], [q0, '']])}}{${lin([[r, 'n'], [s0, '']])}}`, `\\lim a_n=${fTex(p, r)}\\neq 0`, DIV, ''],
      ['\\left(1+\\frac{1}{n}\\right)^n', '\\lim a_n=\\mathrm{e}\\neq 0', DIV, ''],
      ['n\\sin\\frac{1}{n}', '\\lim a_n=\\lim\\frac{\\sin(1/n)}{1/n}=1\\neq 0', DIV, ''],
      ['\\sqrt[n]{n}', '\\lim a_n=1\\neq 0', DIV, ''],
      ['\\cos\\frac{1}{n}', '\\lim a_n=1\\neq 0', DIV, ''],
      ['(-1)^n\\frac{n}{n+1}', 'postupnosť $a_n$ nemá limitu (párne členy sa blížia k 1, nepárne k −1), teda $a_n\\not\\to 0$', DIV, ''],
      ['\\frac{1}{n}', '\\lim a_n=0', UND, 'Tento (harmonický) rad v skutočnosti diverguje.'],
      ['\\frac{1}{n^2}', '\\lim a_n=0', UND, 'Tento rad v skutočnosti konverguje (rad $\\sum\\frac{1}{n^p}$ s $p=2\\gt 1$).'],
      ['\\frac{1}{\\sqrt{n}}', '\\lim a_n=0', UND, 'Tento rad v skutočnosti diverguje (porovnaj s harmonickým radom).'],
      ['\\ln\\left(1+\\frac{1}{n}\\right)', '\\lim a_n=\\ln 1=0', UND, 'Tento rad v skutočnosti diverguje: $s_n=\\ln(n+1)\\to\\infty$.'],
      ['\\frac{n}{n^2+1}', '\\lim a_n=0', UND, 'Tento rad v skutočnosti diverguje (správa sa ako $\\sum\\frac{1}{n}$).'],
      ['\\sin\\frac{1}{n^2}', '\\lim a_n=0', UND, 'Tento rad v skutočnosti konverguje (správa sa ako $\\sum\\frac{1}{n^2}$).']
    ];
    const [an, why, ans, more] = pick(cases);
    const whyTex = why.includes('postupnosť') ? why : `$${why}$`;
    return {
      type: 'choice', options: [DIV, CON, UND], answer: ans,
      q: `Čo vyplýva o rade $\\displaystyle\\sum_{n=1}^{\\infty}${an}$ <em>iba</em> z nutnej podmienky konvergencie?`,
      solution: `Platí ${whyTex}. ${ans === DIV ? 'Nutná podmienka nie je splnená, preto <strong>rad diverguje</strong>.'
        : `Nutná podmienka je splnená, ale nie je postačujúca, preto sama o sebe <strong>nerozhoduje</strong>. ${more}`} Z nutnej podmienky nikdy nemožno usúdiť, že rad konverguje.`,
      hint: 'Vypočítaj $\\lim_{n\\to\\infty} a_n$. Ak nie je nulová (alebo neexistuje), rad diverguje; nulová limita o konvergencii nerozhoduje.'
    };
  });

  fig('v2-integralne', {
    controls: [{ id: 'p', label: 'Exponent p', min: 0.5, max: 3, step: 0.1, value: 2 }],
    draw: (v) => {
      const p = plane(0, 11.5, -0.08, 1.15, 420, 260);
      const e = v.p, f = (x) => Math.pow(x, -e);
      let bars = '', s = 0;
      for (let n = 1; n <= 10; n++) {
        s += f(n);
        bars += `<rect class="f-fill2 f-outline2" x="${n1(p.X(n))}" y="${n1(p.Y(f(n)))}" width="${n1(p.X(n + 1) - p.X(n))}" height="${n1(p.Y(0) - p.Y(f(n)))}"/>`;
      }
      const clipped = `${bars}<path class="f-accent" d="${curvePath(p, f, 0.5, 11.5)}"/>`;
      const conv = e > 1 + 1e-9;
      return {
        svg: svg(p, axes(p, 1, 1), clipped, '', 'Porovnanie radu 1 lomeno n na p s integrálom'),
        readout: `p = ${sk(e, 1)} · s₁₀ = ${sk(s, 3)} · <span class="c-accent">∫<sub>1</sub><sup>∞</sup> x<sup>−p</sup> dx ${conv ? '= 1/(p − 1) = ' + sk(1 / (e - 1), 3) : 'diverguje'}</span> · rad ${conv ? 'konverguje' : 'diverguje'}`
      };
    }
  });

  lesson({
    id: 'v2-kriteria', order: 70, title: 'Kritériá konvergencie radov s nezápornými členmi',
    summary: 'Porovnávacie a limitné porovnávacie kritérium, d’Alembertovo, Cauchyho a integrálne kritérium.',
    theory: [
      `<p>Pre rad s nezápornými členmi je postupnosť čiastočných súčtov neklesajúca, preto rad konverguje práve vtedy, keď je $(s_n)$ ohraničená. Na tom stoja kritériá:</p>
       <ul><li><strong>Porovnávacie:</strong> ak $0\\le a_n\\le b_n$ (od istého $n$), tak z konvergencie $\\sum b_n$ vyplýva konvergencia $\\sum a_n$ a z divergencie $\\sum a_n$ divergencia $\\sum b_n$.</li>
       <li><strong>Limitné porovnávacie:</strong> ak $a_n, b_n\\gt 0$ a $\\lim_{n\\to\\infty}\\frac{a_n}{b_n}=L\\in(0;\\infty)$, oba rady súčasne konvergujú alebo divergujú.</li></ul>
       <p>Ako porovnávacie rady používame geometrický rad a <strong>rad $\\sum\\frac{1}{n^p}$</strong>, ktorý konverguje práve pre $p\\gt 1$. Napr. $\\frac{2n+1}{n^3+5}$ sa správa ako $\\frac{2}{n^2}$, rad konverguje.</p>`,
      `<p><strong>D’Alembertovo (podielové) kritérium:</strong> nech $a_n\\gt 0$ a $q=\\lim_{n\\to\\infty}\\frac{a_{n+1}}{a_n}$. Ak $q\\lt 1$, rad konverguje; ak $q\\gt 1$, diverguje; pre $q=1$ kritérium nerozhoduje.<br>
       <strong>Cauchyho (odmocninové) kritérium:</strong> to isté pre $q=\\lim_{n\\to\\infty}\\sqrt[n]{a_n}$. Je silnejšie (kde rozhoduje podielové, rozhoduje aj odmocninové) a hodí sa pre členy tvaru $(\\dots)^n$.
       Pre rady typu $\\sum\\frac{1}{n^p}$ vychádza v oboch kritériách $q=1$.</p>`,
      `<p><strong>Integrálne kritérium:</strong> nech $f$ je na $\\langle 1;\\infty)$ spojitá, nezáporná a nerastúca a $a_n=f(n)$. Potom $\\sum_{n=1}^{\\infty} a_n$ konverguje práve vtedy, keď konverguje $\\int_1^{\\infty} f(x)\\,dx$.
       Navyše pre zvyšok platí $\\int_{N+1}^{\\infty} f\\le\\sum_{n=N+1}^{\\infty} a_n\\le\\int_N^{\\infty} f$. Odtiaľ vyplýva, že $\\sum\\frac{1}{n^p}$ konverguje práve pre $p\\gt 1$.</p>`,
      { fig: 'v2-integralne', caption: 'Obdĺžniky s výškami $\\frac{1}{n^p}$ ležia nad grafom $y=x^{-p}$, preto $\\sum_{n=1}^{N}\\frac{1}{n^p}\\ge\\int_1^{N+1}x^{-p}\\,dx$. Posuň $p$ pod a nad hodnotu 1.' }
    ],
    examples: [
      { task: 'Rozhodni o konvergencii radu $\\sum_{n=1}^{\\infty}\\dfrac{n^2}{3^n}$.',
        steps: ['Použijeme d’Alembertovo kritérium: $\\dfrac{a_{n+1}}{a_n}=\\dfrac{(n+1)^2}{3^{n+1}}\\cdot\\dfrac{3^n}{n^2}=\\dfrac{1}{3}\\left(1+\\frac{1}{n}\\right)^2$.',
          'Limita je $q=\\frac{1}{3}\\lt 1$.', '<strong>Rad konverguje.</strong>'] },
      { task: 'Rozhodni o konvergencii radu $\\sum_{n=2}^{\\infty}\\dfrac{1}{n\\ln n}$.',
        steps: ['Funkcia $f(x)=\\frac{1}{x\\ln x}$ je na $\\langle 2;\\infty)$ kladná, spojitá a klesajúca, môžeme použiť integrálne kritérium.',
          'Substitúciou $t=\\ln x$: $\\int_2^{b}\\frac{dx}{x\\ln x}=\\left[\\ln\\ln x\\right]_2^{b}=\\ln\\ln b-\\ln\\ln 2\\to\\infty$.',
          'Integrál diverguje, preto diverguje aj rad (hoci $a_n\\to 0$ a podielové kritérium dáva $q=1$).', '<strong>Rad diverguje.</strong>'] }
    ]
  });

  gen('v2-kriteria', () => {
    const t = Math.random();
    if (t < 0.4) {
      if (Math.random() < 0.25) {
        const k = rnd(1, 4), conv = k < Math.E;
        return {
          type: 'choice', options: [...CONV], answer: conv ? CONV[0] : CONV[1],
          q: `Rozhodni o konvergencii radu $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{${k === 1 ? '' : `${k}^n\\,`}n!}{n^n}$.`,
          solution: `D’Alembertovo kritérium: $\\dfrac{a_{n+1}}{a_n}=\\dfrac{${k === 1 ? '' : k}(n+1)!\\,n^n}{(n+1)^{n+1}\\,n!}=${k === 1 ? '' : k}\\left(\\dfrac{n}{n+1}\\right)^n=\\dfrac{${k}}{\\left(1+\\frac{1}{n}\\right)^n}\\to\\dfrac{${k}}{\\mathrm{e}}$.
            Keďže $\\mathrm{e}\\approx 2{,}718$, je $q ${conv ? '\\lt' : '\\gt'} 1$ a rad <strong>${conv ? 'konverguje' : 'diverguje'}</strong>.`,
          hint: 'Použi podielové kritérium a limitu $\\left(1+\\frac{1}{n}\\right)^n\\to\\mathrm{e}$.'
        };
      }
      const AL = [[0, ''], [0.5, '\\sqrt{n}'], [1, 'n'], [2, 'n^2']], BE = [[1, 'n'], [1.5, 'n\\sqrt{n}'], [2, 'n^2'], [3, 'n^3']];
      let A, B;
      do { A = pick(AL); B = pick(BE); } while (B[0] <= A[0]);
      const c = rnd(1, 5), e = rnd(0, 4), dd0 = rnd(1, 9);
      const num = A[0] === 0 ? String(c) : `${A[1]}${e ? '+' + e : ''}`;
      const L = A[0] === 0 ? c : 1, d = B[0] - A[0], conv = d > 1;
      const dT = fTex(Math.round(2 * d), 2);
      return {
        type: 'choice', options: [...CONV], answer: conv ? CONV[0] : CONV[1],
        q: `Rozhodni o konvergencii radu $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{${num}}{${B[1]}+${dd0}}$.`,
        solution: `Pre veľké $n$ sa člen správa ako $\\frac{${A[0] === 0 ? c : A[1]}}{${B[1]}}${A[0] === 0 ? '' : `=\\frac{1}{n^{${dT}}}`}$. Porovnáme s radom $\\sum\\frac{1}{n^{${dT}}}$:
          $\\lim_{n\\to\\infty}\\dfrac{a_n}{1/n^{${dT}}}=${L}\\in(0;\\infty)$. Podľa limitného porovnávacieho kritéria sa oba rady správajú rovnako; rad $\\sum\\frac{1}{n^p}$ s $p=${dT}$ ${conv ? 'konverguje, lebo $p\\gt 1$' : 'diverguje, lebo $p\\le 1$'}. Rad teda <strong>${conv ? 'konverguje' : 'diverguje'}</strong>.`,
        hint: 'Porovnaj vedúce mocniny čitateľa a menovateľa a použi limitné porovnávacie kritérium s radom $\\sum\\frac{1}{n^p}$.'
      };
    }
    if (t < 0.7) {
      const fam = rnd(0, 2);
      if (fam === 0) {
        const k = rnd(1, 3), r = rnd(2, 7);
        let p;
        do { p = rnd(1, 6); } while (p === r);
        const nk = k === 1 ? 'n' : `n^{${k}}`;
        return {
          answer: p / r, show: fTxt(p, r),
          q: `Pre rad $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{${nk}${p === 1 ? '' : `\\cdot ${p}^n`}}{${r}^n}$ vypočítaj $q=\\lim_{n\\to\\infty}\\frac{a_{n+1}}{a_n}$ (d’Alembertovo kritérium). Výsledok zadaj ako zlomok.`,
          solution: `$\\dfrac{a_{n+1}}{a_n}=\\left(\\dfrac{n+1}{n}\\right)^{${k}}\\cdot\\dfrac{${p}}{${r}}\\to ${fTex(p, r)}$. Keďže $q ${p < r ? '\\lt' : '\\gt'} 1$, rad ${p < r ? 'konverguje' : 'diverguje'}.`,
          hint: 'Vydeľ $a_{n+1}$ členom $a_n$: mocniny $n$ dajú v limite 1, exponenciálne časti dajú podiel základov.'
        };
      }
      if (fam === 1) {
        const c = rnd(1, 7);
        return {
          answer: c / 4, show: fTxt(c, 4),
          q: `Pre rad $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(n!)^2${c === 1 ? '' : `\\,${c}^n`}}{(2n)!}$ vypočítaj $q=\\lim_{n\\to\\infty}\\frac{a_{n+1}}{a_n}$. Výsledok zadaj ako zlomok.`,
          solution: `$\\dfrac{a_{n+1}}{a_n}=\\dfrac{(n+1)^2\\cdot ${c}}{(2n+1)(2n+2)}\\to\\dfrac{${c}}{4}${gcd(c, 4) > 1 ? `=${fTex(c, 4)}` : ''}$, lebo čitateľ aj menovateľ sú kvadratické s vedúcimi koeficientmi $${c}$ a $4$.
            ${c < 4 ? 'Keďže $q\\lt 1$, rad konverguje.' : c > 4 ? 'Keďže $q\\gt 1$, rad diverguje.' : 'Pre $q=1$ podielové kritérium nerozhoduje.'}`,
          hint: 'Využi $(n+1)!=(n+1)\\cdot n!$ a $(2n+2)!=(2n+2)(2n+1)\\cdot(2n)!$.'
        };
      }
      const c = rnd(2, 9);
      return {
        answer: 0,
        q: `Pre rad $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{${c}^n}{n!}$ vypočítaj $q=\\lim_{n\\to\\infty}\\frac{a_{n+1}}{a_n}$.`,
        solution: `$\\dfrac{a_{n+1}}{a_n}=\\dfrac{${c}^{n+1}}{(n+1)!}\\cdot\\dfrac{n!}{${c}^n}=\\dfrac{${c}}{n+1}\\to 0$. Keďže $q=0\\lt 1$, rad konverguje (jeho súčet je $\\mathrm{e}^{${c}}-1$).`,
        hint: 'Využi $(n+1)!=(n+1)\\cdot n!$.'
      };
    }
    if (Math.random() < 0.7) {
      let a, c;
      do { a = rnd(1, 6); c = rnd(1, 7); } while (a === c);
      const b = rnd(1, 9), d = rnd(1, 9);
      return {
        answer: a / c, show: fTxt(a, c),
        q: `Pre rad $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\frac{${lin([[a, 'n'], [b, '']])}}{${lin([[c, 'n'], [d, '']])}}\\right)^{n}$ vypočítaj $q=\\lim_{n\\to\\infty}\\sqrt[n]{a_n}$ (Cauchyho kritérium). Výsledok zadaj ako zlomok.`,
        solution: `$\\sqrt[n]{a_n}=\\dfrac{${lin([[a, 'n'], [b, '']])}}{${lin([[c, 'n'], [d, '']])}}\\to ${fTex(a, c)}$. Keďže $q ${a < c ? '\\lt' : '\\gt'} 1$, rad ${a < c ? 'konverguje' : 'diverguje'}.`,
        hint: 'Odmocnina $n$-tého stupňa zruší exponent $n$; zostane limita racionálnej funkcie.'
      };
    }
    const k = rnd(1, 4), r = rnd(2, 9);
    return {
      answer: 1 / r, show: `1/${r}`,
      q: `Pre rad $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{n^{${k}}}{${r}^n}$ vypočítaj $q=\\lim_{n\\to\\infty}\\sqrt[n]{a_n}$. Výsledok zadaj ako zlomok.`,
      solution: `$\\sqrt[n]{a_n}=\\dfrac{\\left(\\sqrt[n]{n}\\right)^{${k}}}{${r}}\\to\\dfrac{1}{${r}}$, lebo $\\sqrt[n]{n}\\to 1$. Keďže $q\\lt 1$, rad konverguje.`,
      hint: 'Využi $\\lim_{n\\to\\infty}\\sqrt[n]{n}=1$.'
    };
  });

  fig('v2-leibniz', {
    controls: [{ id: 'n', label: 'Počet sčítaných členov n', min: 1, max: 30, step: 1, value: 6 }],
    draw: (v) => {
      const p = plane(0, 31, 0.45, 1.05, 440, 280, 32);
      const L2 = Math.LN2;
      let s = 0, dots = '', sn = 0;
      for (let k = 1; k <= 30; k++) {
        s += (k % 2 ? 1 : -1) / k;
        if (k === v.n) sn = s;
        dots += `<circle class="${k === v.n ? 'f-vertex' : 'f-dot'}" cx="${n1(p.X(k))}" cy="${n1(p.Y(s))}" r="${k === v.n ? 6 : 4}"/>`;
      }
      const r = 1 / (v.n + 1);
      const clipped = `<line class="f-dash" x1="${n1(p.X(0))}" y1="${n1(p.Y(L2))}" x2="${n1(p.X(31))}" y2="${n1(p.Y(L2))}"/>
        <line class="f-warn" x1="${n1(p.X(v.n))}" y1="${n1(p.Y(sn - r))}" x2="${n1(p.X(v.n))}" y2="${n1(p.Y(sn + r))}"/>${dots}`;
      const front = `<text class="f-small" x="${n1(p.X(30.5))}" y="${n1(p.Y(L2) - 6)}" text-anchor="end">ln 2</text>`;
      return {
        svg: svg(p, frame(p, [0, 5, 10, 15, 20, 25, 30], [0.5, 0.6, 0.7, 0.8, 0.9, 1]), clipped, front, 'Čiastočné súčty alternujúceho harmonického radu'),
        readout: `<span class="c-accent">s<sub>${v.n}</sub> = ${sk(sn, 4)}</span> · ln 2 ≈ 0,6931 · skutočná chyba ${sk(Math.abs(L2 - sn), 4)} ≤ a<sub>${v.n + 1}</sub> = 1/${v.n + 1} ≈ ${sk(r, 4)}`
      };
    }
  });

  lesson({
    id: 'v2-alternujuce', order: 80, title: 'Absolútna a relatívna konvergencia, Leibnizovo kritérium',
    summary: 'Rady so striedavými znamienkami, absolútna a neabsolútna konvergencia, odhad chyby čiastočného súčtu.',
    theory: [
      `<p>Rad $\\sum a_n$ (s ľubovoľnými znamienkami) <strong>konverguje absolútne</strong>, ak konverguje rad $\\sum|a_n|$. Platí: <em>absolútne konvergentný rad je konvergentný</em> a $\\left|\\sum a_n\\right|\\le\\sum|a_n|$.
       Ak $\\sum a_n$ konverguje, ale $\\sum|a_n|$ diverguje, rad konverguje <strong>relatívne</strong> (neabsolútne).
       Absolútne konvergentný rad môžeme ľubovoľne preusporiadať bez zmeny súčtu; relatívne konvergentný rad sa dá podľa Riemannovej vety preusporiadať tak, aby mal ľubovoľný súčet alebo divergoval.</p>`,
      `<p><strong>Leibnizovo kritérium.</strong> Nech $(a_n)$ je nerastúca postupnosť kladných čísel s $\\lim_{n\\to\\infty} a_n=0$. Potom alternujúci rad $\\sum_{n=1}^{\\infty}(-1)^{n+1}a_n=a_1-a_2+a_3-\\cdots$ konverguje a pre jeho súčet $s$ platí</p>
       <p style="text-align:center">$|s-s_n|\\le a_{n+1}$,</p>
       <p>teda chyba čiastočného súčtu nepresiahne absolútnu hodnotu prvého vynechaného člena. Napríklad $1-\\frac{1}{2}+\\frac{1}{3}-\\frac{1}{4}+\\cdots=\\ln 2$ konverguje relatívne.</p>`,
      { fig: 'v2-leibniz', caption: 'Čiastočné súčty radu $\\sum\\frac{(-1)^{n+1}}{n}$ striedavo preskakujú súčet $\\ln 2$. Oranžová úsečka má polomer $a_{n+1}$ a vždy obsahuje súčet radu.' },
      `<p><strong>Odporúčaný postup:</strong> (1) skontroluj nutnú podmienku $a_n\\to 0$; (2) vyšetri $\\sum|a_n|$ kritériami pre nezáporné rady – ak konverguje, rad konverguje absolútne; (3) ak nie, skús Leibnizovo kritérium – ak platí, rad konverguje relatívne.</p>`
    ],
    examples: [
      { task: 'Rozhodni, či rad $\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n}}{\\sqrt{n}}$ konverguje absolútne, relatívne, alebo diverguje.',
        steps: ['Rad absolútnych hodnôt $\\sum\\frac{1}{\\sqrt{n}}=\\sum\\frac{1}{n^{1/2}}$ diverguje ($p=\\frac{1}{2}\\le 1$), absolútne teda rad nekonverguje.',
          'Postupnosť $\\frac{1}{\\sqrt{n}}$ je klesajúca, kladná a má limitu $0$, podľa Leibnizovho kritéria rad konverguje.',
          '<strong>Rad konverguje relatívne.</strong>'] },
      { task: 'Koľko členov radu $\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n^3}$ stačí sčítať, aby bola chyba podľa Leibnizovho odhadu menšia ako $10^{-3}$?',
        steps: ['Podľa Leibnizovho kritéria $|s-s_n|\\le a_{n+1}=\\frac{1}{(n+1)^3}$.',
          'Chceme $\\frac{1}{(n+1)^3}\\lt\\frac{1}{1000}$, teda $(n+1)^3\\gt 1000$, čiže $n+1\\gt 10$.',
          '<strong>Stačí sčítať 10 členov.</strong>'] }
    ]
  });

  gen('v2-alternujuce', () => {
    const t = Math.random();
    const ABS = 'konverguje absolútne', REL = 'konverguje relatívne (neabsolútne)', DIV = 'diverguje';
    if (t < 0.45) {
      const cases = [
        ['\\frac{(-1)^n}{\\sqrt{n}}', REL, '$\\sum\\frac{1}{\\sqrt{n}}$ diverguje ($p=\\frac{1}{2}$), ale $\\frac{1}{\\sqrt{n}}$ klesá k nule, takže platí Leibnizovo kritérium.'],
        ['\\frac{(-1)^n}{\\sqrt[3]{n}}', REL, '$\\sum\\frac{1}{\\sqrt[3]{n}}$ diverguje ($p=\\frac{1}{3}$), ale $\\frac{1}{\\sqrt[3]{n}}$ klesá k nule, takže platí Leibnizovo kritérium.'],
        ['\\frac{(-1)^n}{n}', REL, 'harmonický rad $\\sum\\frac{1}{n}$ diverguje, ale $\\frac{1}{n}$ klesá k nule, takže platí Leibnizovo kritérium.'],
        ['\\frac{(-1)^n}{n^2}', ABS, '$\\sum\\frac{1}{n^2}$ konverguje ($p=2\\gt 1$).'],
        ['\\frac{(-1)^n}{n\\sqrt{n}}', ABS, '$\\sum\\frac{1}{n^{3/2}}$ konverguje ($p=\\frac{3}{2}\\gt 1$).'],
        ['(-1)^n\\frac{n}{n^2+1}', REL, '$\\sum\\frac{n}{n^2+1}$ diverguje (správa sa ako $\\sum\\frac{1}{n}$), ale $\\frac{n}{n^2+1}$ je od $n=1$ klesajúca s limitou $0$, takže platí Leibnizovo kritérium.'],
        ['(-1)^n\\frac{n}{n^3+1}', ABS, '$\\sum\\frac{n}{n^3+1}$ konverguje (správa sa ako $\\sum\\frac{1}{n^2}$).'],
        ['(-1)^n\\frac{n}{n+1}', DIV, '$|a_n|=\\frac{n}{n+1}\\to 1$, nie je splnená nutná podmienka konvergencie.'],
        ['\\frac{(-1)^n}{2^n}', ABS, '$\\sum\\frac{1}{2^n}$ je konvergentný geometrický rad.'],
        ['(-1)^n\\frac{2^n}{n^2}', DIV, '$\\frac{2^n}{n^2}\\to\\infty$, nie je splnená nutná podmienka konvergencie.'],
        ['\\frac{(-1)^n\\,n!}{n^n}', ABS, 'pre $\\sum\\frac{n!}{n^n}$ dáva podielové kritérium $q=\\frac{1}{\\mathrm{e}}\\lt 1$.'],
        ['(-1)^n\\sin\\frac{1}{n}', REL, '$\\sin\\frac{1}{n}$ sa správa ako $\\frac{1}{n}$, rad absolútnych hodnôt diverguje; $\\sin\\frac{1}{n}$ však klesá k nule, takže platí Leibnizovo kritérium.']
      ];
      const [an, ans, why] = pick(cases);
      return {
        type: 'choice', options: [ABS, REL, DIV], answer: ans,
        q: `Rozhodni o konvergencii radu $\\displaystyle\\sum_{n=1}^{\\infty}${an}$.`,
        solution: `Platí: ${why} Rad teda <strong>${ans}</strong>.`,
        hint: 'Najprv over nutnú podmienku, potom konvergenciu radu $\\sum|a_n|$ a nakoniec Leibnizovo kritérium.'
      };
    }
    if (t < 0.8) {
      const fam = rnd(0, 3);
      let an, M, f, epsT;
      if (fam === 3) { an = '\\frac{(-1)^{n+1}}{n!}'; M = pick([1000, 10000, 1000000]); f = (n) => fact(n); }
      else {
        const k = fam + 1;
        an = `\\frac{(-1)^{n+1}}{${k === 1 ? 'n' : `n^{${k}}`}}`;
        M = pick(k === 1 ? [100, 500, 1000] : k === 2 ? [100, 500, 1000, 10000] : [1000, 10000, 100000]);
        f = (n) => Math.pow(n, k);
      }
      let n = 1;
      while (f(n + 1) <= M) n++;
      const lg = Math.log10(M);
      epsT = Number.isInteger(lg) && lg > 2 ? `10^{-${lg}}` : `\\frac{1}{${M}}`;
      const aT = fam === 3 ? '\\frac{1}{(n+1)!}' : fam === 0 ? '\\frac{1}{n+1}' : `\\frac{1}{(n+1)^{${fam + 1}}}`;
      return {
        answer: n,
        q: `Koľko najmenej členov radu $\\displaystyle\\sum_{n=1}^{\\infty}${an}$ treba sčítať, aby Leibnizov odhad zaručil chybu menšiu ako $${epsT}$?`,
        solution: `Podľa Leibnizovho kritéria $|s-s_n|\\le a_{n+1}=${aT}$. Hľadáme najmenšie $n$, pre ktoré $${aT}\\lt\\frac{1}{${M}}$, teda ${fam === 3 ? '$(n+1)!' : fam === 0 ? '$n+1' : `$(n+1)^{${fam + 1}}`}\\gt ${M}$.
          Pre $n=${n}$ je ľavá strana $${f(n + 1)}$, pre $n=${n - 1}$ len $${f(n)}$. Treba sčítať <strong>${n} ${pl(n, ['člen', 'členy', 'členov'])}</strong>.`,
        hint: 'Chyba čiastočného súčtu $s_n$ je najviac $a_{n+1}$, prvý vynechaný člen.'
      };
    }
    if (Math.random() < 0.5) {
      const r = rnd(2, 6), c = rnd(1, 5);
      return {
        answer: c * r / (r + 1), show: fTxt(c * r, r + 1),
        q: `Vypočítaj súčet radu $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^n${c === 1 ? '' : `\\cdot ${c}`}}{${r}^n}$. Výsledok zadaj ako zlomok.`,
        solution: `Geometrický rad s kvocientom $q=-\\frac{1}{${r}}$ konverguje absolútne. Súčet: $\\dfrac{${c}}{1+\\frac{1}{${r}}}=\\dfrac{${c * r}}{${r + 1}}${gcd(c * r, r + 1) > 1 ? `=${fTex(c * r, r + 1)}` : ''}$.`,
        hint: 'Ide o geometrický rad so záporným kvocientom.'
      };
    }
    const N = rnd(2, 6);
    let P = 0, Q = 1;
    for (let k = 1; k <= N; k++) { P = P * k + (k % 2 ? 1 : -1) * Q; Q *= k; const g = gcd(Math.abs(P), Q); P /= g; Q /= g; }
    const terms = Array.from({ length: N }, (_, i) => (i === 0 ? '1' : `${i % 2 ? '-' : '+'}\\frac{1}{${i + 1}}`)).join('');
    return {
      answer: P / Q, show: fTxt(P, Q),
      q: `Vypočítaj čiastočný súčet $s_{${N}}$ radu $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}$ a zadaj ho ako zlomok.`,
      solution: `$s_{${N}}=${terms}=${fTex(P, Q)}\\approx ${dd(P / Q)}$. Podľa Leibnizovho odhadu sa od súčtu $\\ln 2\\approx 0{,}693$ líši najviac o $\\frac{1}{${N + 1}}$.`,
      hint: 'Sčítaj prvých niekoľko členov so striedavými znamienkami na spoločného menovateľa.'
    };
  });

  /* ======================= 6. MOCNINOVÉ RADY A TAYLOROV RAD ======================= */

  fig('v2-obor', {
    draw: () => `<svg viewBox="0 0 460 120" role="img" aria-label="Interval konvergencie mocninového radu">
      <line class="f-warn" x1="20" y1="62" x2="130" y2="62"/><line class="f-warn" x1="330" y1="62" x2="440" y2="62"/>
      <line class="f-accent" x1="130" y1="62" x2="330" y2="62"/>
      <circle class="f-tri" cx="130" cy="62" r="6"/><circle class="f-tri" cx="330" cy="62" r="6"/>
      <circle class="f-dot" cx="230" cy="62" r="5"/>
      <text class="f-text" x="130" y="42" text-anchor="middle">?</text><text class="f-text" x="330" y="42" text-anchor="middle">?</text>
      <text class="f-small c-accent" x="230" y="44" text-anchor="middle">absolútna konvergencia</text>
      <text class="f-small" x="75" y="44" text-anchor="middle">divergencia</text><text class="f-small" x="385" y="44" text-anchor="middle">divergencia</text>
      <text class="f-math" x="130" y="94" text-anchor="middle">x₀ − R</text><text class="f-math" x="230" y="94" text-anchor="middle">x₀</text>
      <text class="f-math" x="330" y="94" text-anchor="middle">x₀ + R</text>
      <text class="f-small" x="230" y="114" text-anchor="middle">v koncových bodoch treba konvergenciu vyšetriť zvlášť</text></svg>`
  });

  lesson({
    id: 'v2-mocninove', order: 90, title: 'Mocninové rady',
    summary: 'Polomer a obor konvergencie, vyšetrenie koncových bodov, derivovanie a integrovanie člen po člene.',
    theory: [
      `<p><strong>Mocninový rad</strong> so stredom $x_0$ je rad $\\sum_{n=0}^{\\infty} a_n (x-x_0)^n$. Podľa <em>Abelovej vety</em> existuje číslo $R\\in\\langle 0;\\infty\\rangle$ – <strong>polomer konvergencie</strong> – také, že rad
       konverguje absolútne pre $|x-x_0|\\lt R$ a diverguje pre $|x-x_0|\\gt R$. Množina všetkých $x$, pre ktoré rad konverguje, je <strong>obor konvergencie</strong>; je to interval so stredom $x_0$.</p>`,
      `<p><strong>Výpočet polomeru</strong> (ak limity existujú, $\\frac{1}{0}=\\infty$, $\\frac{1}{\\infty}=0$):</p>
       <p style="text-align:center">$\\displaystyle R=\\lim_{n\\to\\infty}\\left|\\frac{a_n}{a_{n+1}}\\right|\\qquad\\text{alebo}\\qquad\\frac{1}{R}=\\lim_{n\\to\\infty}\\sqrt[n]{|a_n|}.$</p>
       <p>Všeobecne platí Cauchyho–Hadamardov vzorec $\\frac{1}{R}=\\limsup_{n\\to\\infty}\\sqrt[n]{|a_n|}$. Ak rad obsahuje len niektoré mocniny (napr. $x^{2n}$), je bezpečnejšie použiť podielové kritérium priamo na rad absolútnych hodnôt.</p>`,
      { fig: 'v2-obor', caption: 'Vnútri intervalu $(x_0-R;\\,x_0+R)$ rad konverguje absolútne, mimo neho diverguje. V koncových bodoch môže nastať čokoľvek.' },
      `<p><strong>Koncové body</strong> $x_0\\pm R$ vyšetrujeme samostatne ako číselné rady: $\\sum\\frac{x^n}{n}$ má obor $\\langle -1;1)$, $\\sum\\frac{x^n}{n^2}$ obor $\\langle -1;1\\rangle$, $\\sum x^n$ obor $(-1;1)$ a $\\sum\\frac{x^n}{n!}$ konverguje na celom $\\mathbb{R}$.</p>
       <p><strong>Vlastnosti súčtu:</strong> súčet mocninového radu je vo vnútri intervalu konvergencie spojitý a môžeme ho derivovať aj integrovať člen po člene, pričom sa polomer nezmení. Z $\\frac{1}{1-x}=\\sum_{n=0}^{\\infty} x^n$ tak dostaneme
       $\\frac{1}{(1-x)^2}=\\sum_{n=1}^{\\infty} n x^{n-1}$ a $-\\ln(1-x)=\\sum_{n=1}^{\\infty}\\frac{x^n}{n}$ pre $|x|\\lt 1$.</p>`
    ],
    examples: [
      { task: 'Urči obor konvergencie radu $\\sum_{n=1}^{\\infty}\\dfrac{(x-2)^n}{n\\cdot 3^n}$.',
        steps: ['$a_n=\\frac{1}{n\\,3^n}$, $\\left|\\frac{a_n}{a_{n+1}}\\right|=\\frac{(n+1)\\,3^{n+1}}{n\\,3^n}\\to 3$, teda $R=3$ a rad konverguje absolútne na $(-1;5)$.',
          'Pre $x=5$ dostaneme $\\sum\\frac{3^n}{n\\,3^n}=\\sum\\frac{1}{n}$ – harmonický rad diverguje.',
          'Pre $x=-1$ dostaneme $\\sum\\frac{(-1)^n}{n}$ – konverguje podľa Leibnizovho kritéria.',
          '<strong>Obor konvergencie: $\\langle -1;5)$</strong>'] },
      { task: 'Vypočítaj súčet radu $\\sum_{n=1}^{\\infty}\\dfrac{n}{2^n}$.',
        steps: ['Pre $|x|\\lt 1$ derivovaním geometrického radu: $\\sum_{n=1}^{\\infty} n x^{n-1}=\\frac{1}{(1-x)^2}$, po vynásobení $x$: $\\sum_{n=1}^{\\infty} n x^{n}=\\frac{x}{(1-x)^2}$.',
          'Dosadíme $x=\\frac{1}{2}$: $\\dfrac{1/2}{(1/2)^2}=2$.', '<strong>Výsledok: 2</strong>'] }
    ]
  });

  gen('v2-mocninove', () => {
    const t = Math.random();
    const X = (c) => (c === 0 ? 'x' : `(${fx(c)})`);
    if (t < 0.38) {
      const fam = rnd(0, 4);
      if (fam === 0) {
        const k = rnd(0, 2), b = rnd(2, 6), c = rnd(-3, 3);
        const nk = k === 0 ? '' : k === 1 ? 'n\\,' : 'n^2\\,';
        return {
          answer: b,
          q: `Urči polomer konvergencie radu $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{${nk}${X(c)}^n}{${b}^n}$.`,
          solution: `$a_n=\\frac{${k === 0 ? '1' : k === 1 ? 'n' : 'n^2'}}{${b}^n}$, $\\left|\\dfrac{a_n}{a_{n+1}}\\right|=${k === 0 ? '' : `\\left(\\dfrac{n}{n+1}\\right)^{${k}}\\cdot `}${b}\\to ${b}$. Polomer konvergencie je $R=${b}$ (stred radu je $x_0=${c}$).`,
          hint: 'Použi $R=\\lim\\left|\\frac{a_n}{a_{n+1}}\\right|$, kde $a_n$ je koeficient pri $(x-x_0)^n$.'
        };
      }
      if (fam === 1) {
        const b = rnd(2, 5);
        return {
          answer: 1 / b, show: `1/${b}`,
          q: `Urči polomer konvergencie radu $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{${b}^n}{n}\\,x^n$. Výsledok zadaj ako zlomok.`,
          solution: `$a_n=\\frac{${b}^n}{n}$, $\\left|\\dfrac{a_n}{a_{n+1}}\\right|=\\dfrac{${b}^n(n+1)}{n\\cdot ${b}^{n+1}}=\\dfrac{n+1}{${b}n}\\to\\dfrac{1}{${b}}$. Teda $R=\\frac{1}{${b}}$.`,
          hint: 'Použi $R=\\lim\\left|\\frac{a_n}{a_{n+1}}\\right|$.'
        };
      }
      if (fam === 2) {
        const s = rnd(2, 4);
        return {
          answer: s,
          q: `Urči polomer konvergencie radu $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{2n}}{${s * s}^n}$.`,
          solution: `Rad obsahuje len párne mocniny, použijeme podielové kritérium na $\\sum|u_n|$ s $u_n=\\frac{x^{2n}}{${s * s}^n}$: $\\left|\\dfrac{u_{n+1}}{u_n}\\right|=\\dfrac{x^2}{${s * s}}$.
            Rad konverguje pre $\\frac{x^2}{${s * s}}\\lt 1$, teda $|x|\\lt ${s}$, a diverguje pre $|x|\\gt ${s}$. Preto $R=${s}$.`,
          hint: 'Pozor, nejde o $\\sum a_n x^n$ so všetkými mocninami. Použi podielové kritérium priamo, alebo substitúciu $t=x^2$.'
        };
      }
      if (fam === 3) {
        return {
          answer: 0,
          q: 'Urči polomer konvergencie radu $\\displaystyle\\sum_{n=0}^{\\infty} n!\\,x^n$.',
          solution: '$\\left|\\dfrac{a_n}{a_{n+1}}\\right|=\\dfrac{n!}{(n+1)!}=\\dfrac{1}{n+1}\\to 0$, teda $R=0$: rad konverguje iba v bode $x=0$.',
          hint: 'Použi $R=\\lim\\left|\\frac{a_n}{a_{n+1}}\\right|$ a $(n+1)!=(n+1)\\cdot n!$.'
        };
      }
      return {
        answer: 0.25, show: '1/4',
        q: 'Urči polomer konvergencie radu $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(2n)!}{(n!)^2}\\,x^n$. Výsledok zadaj ako zlomok.',
        solution: '$\\left|\\dfrac{a_n}{a_{n+1}}\\right|=\\dfrac{(2n)!}{(n!)^2}\\cdot\\dfrac{((n+1)!)^2}{(2n+2)!}=\\dfrac{(n+1)^2}{(2n+1)(2n+2)}\\to\\dfrac{1}{4}$. Teda $R=\\frac{1}{4}$.',
        hint: 'Využi $(2n+2)!=(2n+2)(2n+1)\\cdot(2n)!$.'
      };
    }
    if (t < 0.72) {
      const c = rnd(-3, 3), b = rnd(1, 4), kind = rnd(0, 3);
      const p = kind === 3 ? 1 : kind, alt = kind === 3;
      const L = c - b, R = c + b;
      const den = [p === 1 ? 'n' : p === 2 ? 'n^2' : '', b === 1 ? '' : `${b}^n`].filter(Boolean).join('\\cdot ');
      const numT = `${alt ? '(-1)^n' : ''}${X(c)}^n`;
      const termT = den ? `\\frac{${numT}}{${den}}` : numT;
      const iv = (l, r) => `$${l ? '\\langle' : '('} ${L}; ${R}${r ? '\\rangle' : ')'}$`;
      const opts = [iv(false, false), iv(true, false), iv(false, true), iv(true, true)];
      const ans = kind === 0 ? opts[0] : kind === 1 ? opts[1] : kind === 2 ? opts[3] : opts[2];
      const atR = alt ? `\\sum\\frac{(-1)^n}{${p === 1 ? 'n' : 'n^2'}}` : p === 0 ? '\\sum 1' : `\\sum\\frac{1}{${p === 1 ? 'n' : 'n^2'}}`;
      const atL = alt ? `\\sum\\frac{1}{n}` : p === 0 ? '\\sum(-1)^n' : `\\sum\\frac{(-1)^n}{${p === 1 ? 'n' : 'n^2'}}`;
      const verdict = (s) => (s ? 'konverguje' : 'diverguje');
      const okR = kind === 2 || kind === 3, okL = kind === 1 || kind === 2;
      return {
        type: 'choice', options: opts, answer: ans,
        q: `Urči obor konvergencie radu $\\displaystyle\\sum_{n=${p === 0 ? 0 : 1}}^{\\infty}${termT}$.`,
        solution: `Polomer konvergencie je $R=${b}$ (napr. $\\left|\\frac{a_n}{a_{n+1}}\\right|\\to ${b}$), stred $x_0=${c}$, rad teda absolútne konverguje na $(${L};\\,${R})$.
          Pre $x=${R}$ dostaneme $${atR}$, ktorý ${verdict(okR)}${okR && !alt ? ' ($p=2\\gt 1$)' : okR ? ' (Leibnizovo kritérium)' : p === 0 ? ' (členy nejdú k nule)' : ' (harmonický rad)'}.
          Pre $x=${L}$ dostaneme $${atL}$, ktorý ${verdict(okL)}${okL && p === 2 ? ' (absolútne)' : okL ? ' (Leibnizovo kritérium)' : p === 0 ? ' (členy nejdú k nule)' : ' (harmonický rad)'}. Obor konvergencie je ${ans}.`,
        hint: 'Najprv urči polomer, potom dosaď oba koncové body a vyšetri vzniknuté číselné rady.'
      };
    }
    const q = rnd(2, 5);
    let p;
    do { p = nz(-(q - 1), q - 1); } while (gcd(Math.abs(p), q) !== 1);
    const xT = fTex(p, q), fam = rnd(0, 2);
    if (fam === 0) {
      return {
        signed: true, answer: p * q / ((q - p) * (q - p)), show: fTxt(p * q, (q - p) * (q - p)),
        q: `Vypočítaj súčet radu $\\displaystyle\\sum_{n=1}^{\\infty} n\\,x^n$ pre $x=${xT}$. Výsledok zadaj ako zlomok.`,
        solution: `Pre $|x|\\lt 1$ je $\\sum_{n=1}^{\\infty} n x^n=x\\left(\\sum_{n=0}^{\\infty}x^n\\right)'=\\frac{x}{(1-x)^2}$. Pre $x=${xT}$: $\\dfrac{${xT}}{\\left(${fTex(q - p, q)}\\right)^2}=${fTex(p * q, (q - p) * (q - p))}$.`,
        hint: 'Derivuj geometrický rad $\\sum x^n=\\frac{1}{1-x}$ a výsledok vynásob $x$.'
      };
    }
    if (fam === 1) {
      return {
        answer: q * q / ((q - p) * (q - p)), show: fTxt(q * q, (q - p) * (q - p)),
        q: `Vypočítaj súčet radu $\\displaystyle\\sum_{n=0}^{\\infty}(n+1)\\,x^n$ pre $x=${xT}$. Výsledok zadaj ako zlomok.`,
        solution: `Pre $|x|\\lt 1$ je $\\sum_{n=0}^{\\infty}(n+1)x^n=\\left(\\sum_{n=0}^{\\infty}x^{n+1}\\right)'=\\left(\\frac{x}{1-x}\\right)'=\\frac{1}{(1-x)^2}$. Pre $x=${xT}$: $\\dfrac{1}{\\left(${fTex(q - p, q)}\\right)^2}=${fTex(q * q, (q - p) * (q - p))}$.`,
        hint: 'Rad je deriváciou radu $\\sum x^{n+1}=\\frac{x}{1-x}$.'
      };
    }
    const val = -Math.log(1 - p / q);
    return {
      signed: true, answer: round(val, 3), tol: TOL3, show: dt(val),
      q: `Vypočítaj súčet radu $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^n}{n}$ pre $x=${xT}$. ${ROUND3}`,
      solution: `Integrovaním geometrického radu: $\\sum_{n=1}^{\\infty}\\frac{x^n}{n}=\\int_0^x\\frac{dt}{1-t}=-\\ln(1-x)$ pre $|x|\\lt 1$. Pre $x=${xT}$: $-\\ln${fTex(q - p, q).startsWith('\\frac') ? fTex(q - p, q) : `(${fTex(q - p, q)})`}=\\ln${fTex(q, q - p).startsWith('\\frac') ? fTex(q, q - p) : ` ${fTex(q, q - p)}`}\\approx ${dd(val)}$.`,
      hint: 'Rad vznikne integrovaním $\\sum x^{n-1}=\\frac{1}{1-x}$ od 0 po $x$.'
    };
  });

  fig('v2-taylor', {
    controls: [{ id: 'n', label: 'Stupeň n', min: 1, max: 15, step: 1, value: 3 }],
    draw: (v) => {
      const p = plane(-7, 7, -2.5, 2.5, 440, 260);
      const n = v.n;
      const T = (x) => { let s = 0, term0 = x; for (let k = 1; k <= n; k += 2) { s += term0; term0 *= -x * x / ((k + 1) * (k + 2)); } return s; };
      const sup = (k) => String(k).split('').map((d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]).join('');
      const parts = [];
      for (let k = 1; k <= n; k += 2) parts.push(k === 1 ? 'x' : `${(k - 1) / 2 % 2 ? ' − ' : ' + '}x${sup(k)}/${k}!`);
      const poly = parts.length > 3 ? parts.slice(0, 3).join('') + (parts.length > 4 ? ' … ' : '') + parts[parts.length - 1] : parts.join('');
      const clipped = `<path class="f-line" d="${curvePath(p, Math.sin)}"/><path class="f-accent" d="${curvePath(p, T, -7, 7, 400)}"/>`;
      return {
        svg: svg(p, axes(p, 2, 1), clipped, '', 'Funkcia sínus a jej Taylorov polynóm'),
        readout: `<span class="c-accent">T<sub>${n}</sub>(x) = ${poly}</span> · chyba v bode x = π: |sin π − T<sub>${n}</sub>(π)| = ${sk(Math.abs(T(Math.PI)), 4)}`
      };
    }
  });

  lesson({
    id: 'v2-taylor', order: 100, title: 'Taylorov polynóm a Taylorov rad',
    summary: 'Aproximácia funkcie polynómom, zvyšok v Lagrangeovom tvare, rozvoje funkcií eˣ, sin, cos a ln(1 + x).',
    theory: [
      `<p>Ak má $f$ v bode $a$ derivácie do rádu $n$, jej <strong>Taylorov polynóm</strong> stupňa $n$ je</p>
       <p style="text-align:center">$\\displaystyle T_n(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(a)}{k!}(x-a)^k=f(a)+f'(a)(x-a)+\\frac{f''(a)}{2!}(x-a)^2+\\dots$</p>
       <p>Je to jediný polynóm stupňa nanajvýš $n$, ktorý má v bode $a$ rovnakú hodnotu a rovnaké derivácie do rádu $n$ ako $f$. Pre $a=0$ hovoríme o Maclaurinovom polynóme.</p>`,
      `<p><strong>Taylorova veta.</strong> Ak má $f$ na intervale medzi $a$ a $x$ deriváciu rádu $n+1$, tak $f(x)=T_n(x)+R_n(x)$, kde zvyšok v <em>Lagrangeovom tvare</em> je</p>
       <p style="text-align:center">$\\displaystyle R_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}$ pre nejaké $\\xi$ medzi $a$ a $x$.</p>
       <p>Ak $|f^{(n+1)}|\\le M$, tak $|R_n(x)|\\le\\frac{M}{(n+1)!}|x-a|^{n+1}$. Napr. pre $\\mathrm{e}^x$ na $\\langle 0;1\\rangle$ je $M=\\mathrm{e}\\lt 3$, pre $\\sin$ a $\\cos$ je $M=1$.</p>`,
      { fig: 'v2-taylor', caption: 'Funkcia $\\sin x$ (čierna) a jej Maclaurinov polynóm $T_n$ (modrý). S rastúcim stupňom sa oblasť dobrej aproximácie rozširuje.' },
      `<p><strong>Taylorov rad</strong> $\\sum_{k=0}^{\\infty}\\frac{f^{(k)}(a)}{k!}(x-a)^k$ konverguje k $f(x)$ práve vtedy, keď $R_n(x)\\to 0$. Základné rozvoje:</p>
       <table class="tbl"><tr><td>$\\mathrm{e}^x=\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}=1+x+\\frac{x^2}{2!}+\\cdots$</td><td>$x\\in\\mathbb{R}$</td></tr>
       <tr><td>$\\sin x=\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{(2n+1)!}=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots$</td><td>$x\\in\\mathbb{R}$</td></tr>
       <tr><td>$\\cos x=\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n}}{(2n)!}=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots$</td><td>$x\\in\\mathbb{R}$</td></tr>
       <tr><td>$\\ln(1+x)=\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}x^n}{n}=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots$</td><td>$x\\in(-1;1\\rangle$</td></tr></table>`
    ],
    examples: [
      { task: 'Pomocou $T_3$ funkcie $\\ln(1+x)$ v bode $0$ odhadni $\\ln 1{,}1$ a ohraničuj chybu.',
        steps: ['$T_3(x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}$, teda $\\ln 1{,}1\\approx 0{,}1-0{,}005+0{,}000\\,333=0{,}095\\,333$.',
          '$f^{(4)}(x)=-\\frac{6}{(1+x)^4}$, na $\\langle 0;\\,0{,}1\\rangle$ je $|f^{(4)}|\\le 6$.',
          '$|R_3(0{,}1)|\\le\\frac{6}{4!}\\cdot 0{,}1^4=0{,}000\\,025$.', '<strong>$\\ln 1{,}1\\approx 0{,}09533$ s chybou menšou ako $2{,}5\\cdot 10^{-5}$</strong> (skutočne $\\ln 1{,}1=0{,}095\\,310\\ldots$)'] },
      { task: 'Aký stupeň $n$ Maclaurinovho polynómu funkcie $\\mathrm{e}^x$ zaručí výpočet čísla $\\mathrm{e}$ s chybou menšou ako $10^{-4}$?',
        steps: ['$\\mathrm{e}=\\mathrm{e}^1=T_n(1)+R_n(1)$, kde $|R_n(1)|=\\frac{\\mathrm{e}^{\\xi}}{(n+1)!}\\le\\frac{3}{(n+1)!}$ pre $\\xi\\in(0;1)$.',
          'Chceme $\\frac{3}{(n+1)!}\\lt 10^{-4}$, teda $(n+1)!\\gt 30\\,000$.', '$7!=5\\,040$, $8!=40\\,320$, preto $n+1=8$.',
          '<strong>Stačí $n=7$:</strong> $\\mathrm{e}\\approx 1+1+\\frac{1}{2!}+\\dots+\\frac{1}{7!}=2{,}71825\\ldots$'] }
    ]
  });

  gen('v2-taylor', () => {
    const t = Math.random();
    if (t < 0.3) {
      const fam = rnd(0, 3);
      let fT, k, num, den, how;
      if (fam === 0) {
        const a = pick([1, 2, 3, -1, -2]); k = rnd(2, 5);
        fT = `\\mathrm{e}^{${cx(a)}}`; num = Math.pow(a, k); den = fact(k);
        how = `$\\mathrm{e}^{u}=\\sum\\frac{u^n}{n!}$ s $u=${cx(a)}$: koeficient pri $x^{${k}}$ je $\\frac{${par(a)}^{${k}}}{${k}!}$`;
      } else if (fam === 1) {
        const a = rnd(1, 3); k = pick([3, 5]);
        fT = `\\sin ${cx(a)}`; num = (k === 3 ? -1 : 1) * Math.pow(a, k); den = fact(k);
        how = `$\\sin u=u-\\frac{u^3}{3!}+\\frac{u^5}{5!}-\\cdots$ s $u=${cx(a)}$: koeficient pri $x^{${k}}$ je $${k === 3 ? '-' : ''}\\frac{${a}^{${k}}}{${k}!}$`;
      } else if (fam === 2) {
        const a = rnd(1, 3); k = pick([2, 4]);
        fT = `\\cos ${cx(a)}`; num = (k === 2 ? -1 : 1) * Math.pow(a, k); den = fact(k);
        how = `$\\cos u=1-\\frac{u^2}{2!}+\\frac{u^4}{4!}-\\cdots$ s $u=${cx(a)}$: koeficient pri $x^{${k}}$ je $${k === 2 ? '-' : ''}\\frac{${a}^{${k}}}{${k}!}$`;
      } else {
        const a = pick([1, 2, 3, -1, -2]); k = rnd(2, 4);
        fT = `\\ln(1${term(a, 'x')})`; num = (k % 2 ? 1 : -1) * Math.pow(a, k); den = k;
        how = `$\\ln(1+u)=\\sum\\frac{(-1)^{n+1}u^n}{n}$ s $u=${cx(a)}$: koeficient pri $x^{${k}}$ je $\\frac{(-1)^{${k + 1}}\\cdot ${par(a)}^{${k}}}{${k}}$`;
      }
      return {
        signed: true, answer: num / den, show: fTxt(num, den),
        q: `Urči koeficient pri $x^{${k}}$ v Maclaurinovom rade funkcie $f(x)=${fT}$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Do známeho rozvoja dosadíme: ${how.slice(0, -1)}=${fTex(num, den)}$.`,
        hint: 'Netreba derivovať – dosaď $u=ax$ do známeho rozvoja a vyber člen s $x^k$.'
      };
    }
    if (t < 0.55) {
      if (Math.random() < 0.6) {
        const m = rnd(1, 2), a = pick([1, 2, -1, 3]), j = rnd(1, 3), n = m + j;
        const val = fact(n) / fact(j) * Math.pow(a, j);
        const xm = m === 1 ? 'x' : 'x^2';
        return {
          signed: true, answer: val,
          q: `Pre $f(x)=${xm}\\,\\mathrm{e}^{${cx(a)}}$ vypočítaj $f^{(${n})}(0)$.`,
          solution: `$f(x)=${xm}\\sum_{k=0}^{\\infty}\\frac{${a === 1 ? '' : par(a) + '^k'}${a === 1 ? 'x^k' : 'x^k'}}{k!}$, koeficient pri $x^{${n}}$ je ${a === 1 ? `$\\frac{1}{${j}!}$` : `$\\frac{${par(a)}^{${j}}}{${j}!}$`}.
            Keďže koeficient pri $x^n$ je $\\frac{f^{(n)}(0)}{n!}$, platí $f^{(${n})}(0)=${n}!\\cdot ${a === 1 ? `\\frac{1}{${j}!}` : `\\frac{${par(a)}^{${j}}}{${j}!}`}=${val}$.`,
          hint: 'Rozviň funkciu do Maclaurinovho radu a využi, že koeficient pri $x^n$ sa rovná $\\frac{f^{(n)}(0)}{n!}$.'
        };
      }
      const m = rnd(1, 2), j = pick([2, 4]), n = m + j;
      const val = (j === 2 ? -1 : 1) * fact(n) / fact(j);
      const xm = m === 1 ? 'x' : 'x^2';
      return {
        signed: true, answer: val,
        q: `Pre $f(x)=${xm}\\cos x$ vypočítaj $f^{(${n})}(0)$.`,
        solution: `$f(x)=${xm}\\left(1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots\\right)$, koeficient pri $x^{${n}}$ je $${j === 2 ? '-' : ''}\\frac{1}{${j}!}$.
          Preto $f^{(${n})}(0)=${n}!\\cdot\\left(${j === 2 ? '-' : ''}\\frac{1}{${j}!}\\right)=${val}$.`,
        hint: 'Koeficient pri $x^n$ v Maclaurinovom rade je $\\frac{f^{(n)}(0)}{n!}$.'
      };
    }
    if (t < 0.8) {
      const atOne = Math.random() < 0.5, m = rnd(2, 6);
      // atOne: e = e¹, |Rₙ(1)| ≤ 3/(n+1)!;  inak √e = e^{1/2}, |Rₙ(1/2)| ≤ 2/(2^{n+1}(n+1)!) = 1/(2ⁿ(n+1)!)
      const G = (k) => (atOne ? fact(k + 1) : Math.pow(2, k) * fact(k + 1)), lim = (atOne ? 3 : 1) * Math.pow(10, m);
      let n = 0;
      while (G(n) <= lim) n++;
      const gT = atOne ? '(n+1)!' : '2^n\\,(n+1)!';
      return {
        answer: n,
        q: `Aký najmenší stupeň $n$ Maclaurinovho polynómu funkcie $\\mathrm{e}^x$ zaručí podľa odhadu zvyšku v Lagrangeovom tvare výpočet ${atOne ? 'čísla $\\mathrm{e}=\\mathrm{e}^1$' : 'čísla $\\sqrt{\\mathrm{e}}=\\mathrm{e}^{1/2}$'} s chybou menšou ako $10^{-${m}}$?${atOne ? ' Použi odhad $\\mathrm{e}\\lt 3$.' : ' Použi odhad $\\sqrt{\\mathrm{e}}\\lt 2$.'}`,
        solution: `$|R_n(x)|=\\frac{\\mathrm{e}^{\\xi}}{(n+1)!}|x|^{n+1}$ pre $\\xi$ medzi $0$ a $x$. ${atOne
          ? 'Pre $x=1$ je $\\mathrm{e}^{\\xi}\\lt 3$, teda $|R_n(1)|\\lt\\frac{3}{(n+1)!}$.'
          : 'Pre $x=\\frac{1}{2}$ je $\\mathrm{e}^{\\xi}\\lt 2$, teda $|R_n(\\tfrac{1}{2})|\\lt\\frac{2}{2^{n+1}(n+1)!}=\\frac{1}{2^n\\,(n+1)!}$.'}
          Chceme $${gT}\\gt ${atOne ? '3\\cdot ' : ''}10^{${m}}$. Pre $n=${n - 1}$ je ľavá strana $${G(n - 1)}$, pre $n=${n}$ už $${G(n)}$. Preto $n=${n}$.`,
        hint: 'Odhad zvyšku: $|R_n(x)|\\le\\frac{M}{(n+1)!}|x|^{n+1}$, kde $M$ ohraničuje $(n+1)$-vú deriváciu.'
      };
    }
    const fam = rnd(0, 2), h = pick([0.1, 0.2, 0.3, -0.1, -0.2]);
    const hT = h < 0 ? `(${dd(h, 1)})` : dd(h, 1);
    let val, fT, poly, deg;
    if (fam === 0) { val = 1 + h + h * h / 2 + h * h * h / 6; fT = `\\mathrm{e}^{${dd(h, 1)}}`; poly = `1+${hT}+\\frac{${hT}^2}{2}+\\frac{${hT}^3}{6}`; deg = 3; }
    else if (fam === 1) { val = h - h * h / 2 + h * h * h / 3; fT = `\\ln ${dd(1 + h, 1)}`; poly = `${hT}-\\frac{${hT}^2}{2}+\\frac{${hT}^3}{3}`; deg = 3; }
    else { val = 1 - h * h / 2 + h * h * h * h / 24; fT = `\\cos ${dd(Math.abs(h), 1)}`; poly = `1-\\frac{${dd(Math.abs(h), 1)}^2}{2}+\\frac{${dd(Math.abs(h), 1)}^4}{24}`; deg = 4; }
    return {
      signed: true, answer: round(val, 4), tol: 0.00006, show: dt(val, 4),
      q: `Pomocou Maclaurinovho polynómu stupňa $${deg}$ odhadni $${fT}$. Výsledok zaokrúhli na 4 desatinné miesta.`,
      solution: `$T_${deg}=${poly}\\approx ${dd(val, 4)}$.`,
      hint: 'Dosaď hodnotu do prvých členov známeho rozvoja ($\\mathrm{e}^x$, $\\ln(1+x)$ alebo $\\cos x$).'
    };
  });

  /* ======================= 7. FUNKCIE VIAC PREMENNÝCH ======================= */

  // vrstevnice funkcie f(x, y) = x²/4 + y² (elipsy s poloosami 2√c a √c)
  const ELL = (p, c, cls) => `<ellipse class="${cls}" fill="none" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" rx="${n1(p.X(2 * Math.sqrt(c)) - p.X(0))}" ry="${n1(p.Y(0) - p.Y(Math.sqrt(c)))}"/>`;

  fig('v2-vrstevnice', {
    controls: [{ id: 'c', label: 'Úroveň c', min: 0.25, max: 6, step: 0.25, value: 2 }],
    draw: (v) => {
      const p = plane(-5, 5, -3.2, 3.2, 440, 300);
      let back = '';
      [0.5, 1, 2, 3, 4, 5, 6].forEach((c) => { back += ELL(p, c, 'f-thin'); });
      const c = v.c, a = 2 * Math.sqrt(c), b = Math.sqrt(c);
      const clipped = `${back}${ELL(p, c, 'f-accent')}<circle class="f-dot" cx="${n1(p.X(a))}" cy="${n1(p.Y(0))}" r="4"/><circle class="f-dot" cx="${n1(p.X(0))}" cy="${n1(p.Y(b))}" r="4"/>`;
      return {
        svg: svg(p, axes(p), clipped, '', 'Vrstevnice funkcie x na druhú lomeno 4 plus y na druhú'),
        readout: `<span class="c-accent">vrstevnica x²/4 + y² = ${sk(c, 2)}</span> · elipsa s poloosami a = 2√c ≈ ${sk(a)} a b = √c ≈ ${sk(b)}`
      };
    }
  });

  lesson({
    id: 'v2-viac-premennych', order: 110, title: 'Funkcie viac premenných',
    summary: 'Definičný obor, graf a vrstevnice, limita a spojitosť funkcie dvoch premenných.',
    theory: [
      `<p><strong>Funkcia dvoch premenných</strong> je zobrazenie $f: D\\to\\mathbb{R}$, $D\\subset\\mathbb{R}^2$. Ak je daný len predpis, <strong>definičný obor</strong> je množina všetkých bodov $(x,y)$, pre ktoré má predpis zmysel
       (odmocnina z nezáporného čísla, logaritmus kladného čísla, nenulový menovateľ…). Grafom je plocha $\\{(x,y,z): z=f(x,y),\\ (x,y)\\in D\\}$ v priestore.
       <em>Okolie</em> bodu $A$ je kruh $U_\\delta(A)=\\{X: |X-A|\\lt\\delta\\}$, kde $|X-A|$ je euklidovská vzdialenosť.</p>`,
      `<p><strong>Vrstevnica</strong> funkcie $f$ na úrovni $c$ je množina $\\{(x,y)\\in D: f(x,y)=c\\}$ – priemet rezu grafu rovinou $z=c$ do roviny $xy$. Sústava vrstevníc tvorí „mapu“ funkcie:
       pre $f=x^2+y^2$ sú vrstevnice sústredné kružnice, pre $f=x^2-y^2$ hyperboly, pre lineárnu funkciu rovnobežné priamky. Kde sú vrstevnice (s rovnakým krokom $c$) hustejšie, tam funkcia rýchlejšie rastie.</p>`,
      { fig: 'v2-vrstevnice', caption: 'Vrstevnice funkcie $f(x,y)=\\frac{x^2}{4}+y^2$ sú elipsy. Zvýraznená je vrstevnica na zvolenej úrovni $c$.' },
      `<p><strong>Limita.</strong> $\\lim_{(x,y)\\to(a,b)} f(x,y)=L$, ak $\\forall\\varepsilon\\gt 0\\ \\exists\\delta\\gt 0$: pre všetky $(x,y)\\in D$ s $0\\lt\\sqrt{(x-a)^2+(y-b)^2}\\lt\\delta$ je $|f(x,y)-L|\\lt\\varepsilon$.
       K bodu sa teraz môžeme blížiť po nekonečne veľa cestách a limita nesmie od cesty závisieť. Preto: <em>ak sa limity po dvoch krivkách líšia, limita neexistuje</em>.
       Existenciu dokážeme odhadom, často v polárnych súradniciach: ak $|f(x,y)-L|\\le g(r)$ s $g(r)\\to 0$ pre $r=\\sqrt{x^2+y^2}\\to 0$, limita je $L$.
       Funkcia je <strong>spojitá</strong> v bode $A\\in D$, ak $\\lim_{X\\to A} f(X)=f(A)$; elementárne funkcie sú spojité na svojom definičnom obore.</p>`
    ],
    examples: [
      { task: 'Urči definičný obor funkcie $f(x,y)=\\sqrt{4-x^2-y^2}+\\ln(y-x)$.',
        steps: ['Odmocnina: $4-x^2-y^2\\ge 0$, teda $x^2+y^2\\le 4$ – uzavretý kruh so stredom v počiatku a polomerom $2$.',
          'Logaritmus: $y-x\\gt 0$, teda $y\\gt x$ – otvorená polrovina nad priamkou $y=x$.',
          '<strong>$D=\\{(x,y): x^2+y^2\\le 4,\\ y\\gt x\\}$</strong> – polkruh bez hraničného priemeru na priamke $y=x$.'] },
      { task: 'Rozhodni, či existuje $\\lim_{(x,y)\\to(0,0)}\\dfrac{xy}{x^2+y^2}$ a $\\lim_{(x,y)\\to(0,0)}\\dfrac{x^2y}{x^2+y^2}$.',
        steps: ['Prvá: po priamke $y=kx$ je $\\frac{kx^2}{x^2+k^2x^2}=\\frac{k}{1+k^2}$, výsledok závisí od $k$ (pre $k=0$ je $0$, pre $k=1$ je $\\frac{1}{2}$). Limita <strong>neexistuje</strong>.',
          'Druhá: $\\left|\\frac{x^2y}{x^2+y^2}\\right|\\le|y|$, lebo $\\frac{x^2}{x^2+y^2}\\le 1$; a $|y|\\to 0$.',
          'Podľa vety o zovretí je druhá limita <strong>rovná 0</strong>.'] }
    ]
  });

  gen('v2-viac-premennych', () => {
    const t = Math.random();
    if (t < 0.3) {
      const m = nz(-3, 3);
      if (Math.random() < 0.5) {
        const a = nz(-4, 4);
        return {
          signed: true, answer: a * m / (1 + m * m), show: fTxt(a * m, 1 + m * m),
          q: `Vypočítaj limitu funkcie $f(x,y)=\\dfrac{${cx(a, 'xy')}}{x^2+y^2}$ pre $(x,y)\\to(0,0)$ po priamke $y=${cx(m)}$. Výsledok zadaj ako zlomok.`,
          solution: `Po dosadení $y=${cx(m)}$ ($x\\neq 0$): $f(x,${cx(m)})=\\dfrac{${cx(a * m, 'x^2')}}{x^2+${cx(m * m, 'x^2')}}=\\dfrac{${a * m}}{${1 + m * m}}${gcd(Math.abs(a * m), 1 + m * m) > 1 ? `=${fTex(a * m, 1 + m * m)}` : ''}$.
            Výsledok závisí od smernice priamky, preto dvojná limita v bode $(0,0)$ neexistuje.`,
          hint: 'Dosaď $y=kx$ a vykráť $x^2$.'
        };
      }
      const a = nz(-4, 4);
      let b;
      do { b = nz(-4, 4); } while (b === -a);
      return {
        signed: true, answer: (a - b * m * m) / (1 + m * m), show: fTxt(a - b * m * m, 1 + m * m),
        q: `Vypočítaj limitu funkcie $f(x,y)=\\dfrac{${lin([[a, 'x^2'], [-b, 'y^2']])}}{x^2+y^2}$ pre $(x,y)\\to(0,0)$ po priamke $y=${cx(m)}$. Výsledok zadaj ako zlomok.`,
        solution: `Po dosadení $y=${cx(m)}$: $\\dfrac{${lin([[a, 'x^2'], [-b * m * m, 'x^2']])}}{x^2+${cx(m * m, 'x^2')}}=\\dfrac{${a - b * m * m}}{${1 + m * m}}${gcd(Math.abs(a - b * m * m), 1 + m * m) > 1 ? `=${fTex(a - b * m * m, 1 + m * m)}` : ''}$.
          Po osi $x$ ($y=0$) je limita $${a}$, po osi $y$ je $${-b}$; keďže sa líšia, dvojná limita v bode $(0,0)$ neexistuje.`,
        hint: 'Dosaď $y=kx$ a vykráť $x^2$.'
      };
    }
    if (t < 0.55) {
      const YES = 'limita existuje', NO = 'limita neexistuje';
      const cases = [
        ['\\frac{x^2y}{x^2+y^2}', YES, '$\\left|\\frac{x^2y}{x^2+y^2}\\right|\\le|y|\\to 0$, limita je $0$.'],
        ['\\frac{xy}{x^2+y^2}', NO, 'po priamke $y=kx$ vychádza $\\frac{k}{1+k^2}$, čo závisí od $k$.'],
        ['\\frac{x^2y^2}{x^2+y^2}', YES, '$0\\le\\frac{x^2y^2}{x^2+y^2}\\le y^2\\to 0$, limita je $0$.'],
        ['\\frac{xy^2}{x^2+y^4}', NO, 'po priamkach $y=kx$ je limita $0$, ale po parabole $x=y^2$ je hodnota $\\frac{y^4}{2y^4}=\\frac{1}{2}$.'],
        ['\\frac{x^2-y^2}{x^2+y^2}', NO, 'po osi $x$ je limita $1$, po osi $y$ je $-1$.'],
        ['\\frac{x^3+y^3}{x^2+y^2}', YES, 'v polárnych súradniciach $|f|=r\\,|\\cos^3\\varphi+\\sin^3\\varphi|\\le 2r\\to 0$, limita je $0$.'],
        ['\\frac{\\sin(x^2+y^2)}{x^2+y^2}', YES, 'pre $t=x^2+y^2\\to 0^+$ je $\\frac{\\sin t}{t}\\to 1$, limita je $1$.'],
        ['\\frac{xy}{\\sqrt{x^2+y^2}}', YES, '$\\left|\\frac{xy}{\\sqrt{x^2+y^2}}\\right|\\le|x|\\to 0$, lebo $|y|\\le\\sqrt{x^2+y^2}$; limita je $0$.'],
        ['\\frac{x^2}{x^2+y^2}', NO, 'po osi $x$ je hodnota $1$, po osi $y$ je $0$.']
      ];
      const [f, ans, why] = pick(cases);
      return {
        type: 'choice', options: [YES, NO], answer: ans,
        q: `Rozhodni, či existuje $\\displaystyle\\lim_{(x,y)\\to(0,0)}${f}$.`,
        solution: `${ans === YES ? 'Limita existuje: ' : 'Limita neexistuje: '}${why}`,
        hint: 'Skús priblíženie po priamkach $y=kx$ (prípadne po parabole). Ak výsledok nezávisí od cesty, skús odhad absolútnej hodnoty.'
      };
    }
    if (t < 0.78) {
      let px, py, k, c;
      for (let i = 0; i < 200; i++) {
        px = rnd(1, 8); py = nz(-5, 5); k = rnd(2, 5); c = px * px + k * py * py;
        if (Number.isInteger(Math.sqrt(c))) break;
      }
      if (!Number.isInteger(Math.sqrt(c))) { px = 3; py = 2; k = 4; c = 25; }
      const s = Math.sqrt(c);
      return {
        answer: s,
        q: `Vrstevnica funkcie $f(x,y)=x^2+${k}y^2$, ktorá prechádza bodom $[${px};\\,${py}]$, je elipsa. Aká dlhá je jej poloos v smere osi $x$?`,
        solution: `$f(${px},${py})=${px * px}+${k}\\cdot ${py * py}=${c}$, vrstevnica je $x^2+${k}y^2=${c}$, teda $\\dfrac{x^2}{${c}}+\\dfrac{y^2}{${fTex(c, k)}}=1$.
          Poloos v smere osi $x$ je $\\sqrt{${c}}=${s}$ (v smere osi $y$ je $\\sqrt{${fTex(c, k)}}$).`,
        hint: 'Najprv vypočítaj úroveň $c=f(x_0,y_0)$, potom rovnicu $f(x,y)=c$ uprav na stredový tvar elipsy.'
      };
    }
    const r = rnd(1, 5), r2 = r * r;
    const S = [['\\lt', 'x^2+y^2\\lt'], ['\\le', 'x^2+y^2\\le'], ['\\gt', 'x^2+y^2\\gt'], ['\\ge', 'x^2+y^2\\ge']];
    const cases = [
      [`\\sqrt{${r2}-x^2-y^2}`, 1, 'odmocnina vyžaduje nezáporný výraz'],
      [`\\ln(${r2}-x^2-y^2)`, 0, 'logaritmus vyžaduje kladný argument'],
      [`\\frac{1}{\\sqrt{${r2}-x^2-y^2}}`, 0, 'výraz pod odmocninou v menovateli musí byť kladný'],
      [`\\sqrt{x^2+y^2-${r2}}`, 3, 'odmocnina vyžaduje nezáporný výraz'],
      [`\\ln(x^2+y^2-${r2})`, 2, 'logaritmus vyžaduje kladný argument'],
      [`\\frac{1}{\\sqrt{x^2+y^2-${r2}}}`, 2, 'výraz pod odmocninou v menovateli musí byť kladný']
    ];
    const [f, i, why] = pick(cases);
    const opt = (j) => `$\\{(x,y): ${S[j][1]} ${r2}\\}$`;
    const desc = ['otvorený kruh', 'uzavretý kruh', 'vonkajšok kruhu bez hraničnej kružnice', 'vonkajšok kruhu spolu s hraničnou kružnicou'][i];
    return {
      type: 'choice', options: [0, 1, 2, 3].map(opt), answer: opt(i),
      q: `Ktorá množina je definičným oborom funkcie $f(x,y)=${f}$?`,
      solution: `Podmienka: ${why}, teda ${i < 2 ? `$${r2}-x^2-y^2 ${i === 1 ? '\\ge' : '\\gt'} 0$` : `$x^2+y^2-${r2} ${i === 3 ? '\\ge' : '\\gt'} 0$`}, čiže $${S[i][1]} ${r2}$.
        Je to ${desc} so stredom v počiatku a polomerom $${r}$.`,
      hint: 'Zapíš podmienku existencie výrazu (odmocnina, logaritmus, menovateľ) a uprav ju na nerovnosť pre $x^2+y^2$.'
    };
  });

  fig('v2-gradient', {
    controls: [{ id: 't', label: 'Poloha bodu na vrstevnici (°)', min: 0, max: 360, step: 5, value: 40 }],
    draw: (v) => {
      const p = plane(-5, 5, -3.2, 3.2, 440, 300);
      let back = '';
      [0.25, 2.25, 4].forEach((c) => { back += ELL(p, c, 'f-thin'); });
      const a = v.t * Math.PI / 180, x = 2 * Math.cos(a), y = Math.sin(a);
      const gx = x / 2, gy = 2 * y, g = Math.hypot(gx, gy), tx = -gy / g, ty = gx / g;
      const clipped = `${back}${ELL(p, 1, 'f-line')}
        <line class="f-dash" x1="${n1(p.X(x - 1.8 * tx))}" y1="${n1(p.Y(y - 1.8 * ty))}" x2="${n1(p.X(x + 1.8 * tx))}" y2="${n1(p.Y(y + 1.8 * ty))}"/>
        ${arrow(p, x, y, x + gx, y + gy)}<circle class="f-dot" cx="${n1(p.X(x))}" cy="${n1(p.Y(y))}" r="5"/>`;
      return {
        svg: svg(p, axes(p), clipped, '', 'Gradient funkcie je kolmý na vrstevnicu'),
        readout: `P = [${sk(x)}; ${sk(y)}] · <span class="c-accent">∇f(P) = (${sk(gx)}; ${sk(gy)})</span> · |∇f(P)| = ${sk(g)} · gradient je kolmý na dotyčnicu k vrstevnici`
      };
    }
  });

  lesson({
    id: 'v2-parcialne', order: 120, title: 'Parciálne derivácie, gradient a dotyková rovina',
    summary: 'Parciálne derivácie, gradient, derivácia v smere, totálny diferenciál a dotyková rovina ku grafu.',
    theory: [
      `<p><strong>Parciálna derivácia</strong> funkcie $f$ podľa $x$ v bode $(a,b)$ je</p>
       <p style="text-align:center">$\\displaystyle\\frac{\\partial f}{\\partial x}(a,b)=f'_x(a,b)=\\lim_{h\\to 0}\\frac{f(a+h,b)-f(a,b)}{h}$,</p>
       <p>počítame ju ako obyčajnú deriváciu podľa $x$, pričom $y$ považujeme za konštantu (analogicky $f'_y$). Derivovaním parciálnych derivácií dostaneme derivácie 2. rádu $f''_{xx}, f''_{xy}, f''_{yx}, f''_{yy}$;
       ak sú zmiešané derivácie spojité, platí $f''_{xy}=f''_{yx}$ (Schwarzova veta).</p>`,
      `<p><strong>Gradient</strong> je vektor $\\nabla f=\\left(\\frac{\\partial f}{\\partial x},\\frac{\\partial f}{\\partial y}\\right)$. Pre diferencovateľnú funkciu je <strong>derivácia v smere</strong> jednotkového vektora $\\vec u$</p>
       <p style="text-align:center">$\\displaystyle\\frac{\\partial f}{\\partial\\vec u}(A)=\\lim_{t\\to 0^+}\\frac{f(A+t\\vec u)-f(A)}{t}=\\nabla f(A)\\cdot\\vec u$.</p>
       <p>Odtiaľ: funkcia najrýchlejšie rastie v smere gradientu (rýchlosťou $|\\nabla f|$), najrýchlejšie klesá v opačnom smere a v smere kolmom na gradient sa nemení – <strong>gradient je kolmý na vrstevnicu</strong>.</p>`,
      { fig: 'v2-gradient', caption: 'Funkcia $f(x,y)=\\frac{x^2}{4}+y^2$, vrstevnica $f=1$ a gradient $\\nabla f=\\left(\\frac{x}{2},\\,2y\\right)$ v bode $P$. Prerušovaná priamka je dotyčnica k vrstevnici.' },
      `<p><strong>Totálny diferenciál.</strong> Funkcia je diferencovateľná v bode $(a,b)$, ak $f(a+h,b+k)-f(a,b)=f'_x h+f'_y k+o\\left(\\sqrt{h^2+k^2}\\right)$. Lineárnu časť nazývame totálny diferenciál
       $df=f'_x\\,dx+f'_y\\,dy$ a používame ju na približný výpočet: $f(a+h,b+k)\\approx f(a,b)+f'_x(a,b)\\,h+f'_y(a,b)\\,k$.
       Postačujúca podmienka diferencovateľnosti: spojité parciálne derivácie (samotná existencia nestačí).
       <strong>Dotyková rovina</strong> ku grafu v bode $(x_0,y_0,z_0)$, $z_0=f(x_0,y_0)$: $z-z_0=f'_x(x_0,y_0)(x-x_0)+f'_y(x_0,y_0)(y-y_0)$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj gradient funkcie $f(x,y)=x^2y+\\mathrm{e}^{xy}$ v bode $(1,0)$.',
        steps: ['$f\'_x=2xy+y\\,\\mathrm{e}^{xy}$ (premenná $y$ je konštanta), $f\'_y=x^2+x\\,\\mathrm{e}^{xy}$ (premenná $x$ je konštanta).',
          'V bode $(1,0)$: $f\'_x=0+0=0$, $f\'_y=1+1\\cdot\\mathrm{e}^0=2$.', '<strong>$\\nabla f(1,0)=(0;\\,2)$</strong>'] },
      { task: 'Vypočítaj deriváciu funkcie $f(x,y)=x^2+3xy$ v bode $A=[1;2]$ v smere vektora $\\vec v=(3,4)$.',
        steps: ['$\\nabla f=(2x+3y,\\ 3x)$, teda $\\nabla f(A)=(8,\\ 3)$.', 'Jednotkový vektor: $|\\vec v|=5$, $\\vec u=\\left(\\frac{3}{5},\\frac{4}{5}\\right)$.',
          '$\\frac{\\partial f}{\\partial\\vec u}(A)=8\\cdot\\frac{3}{5}+3\\cdot\\frac{4}{5}=\\frac{36}{5}$.', '<strong>Výsledok: $\\frac{36}{5}=7{,}2$</strong>'] }
    ]
  });

  gen('v2-parcialne', () => {
    const al = nz(-3, 3), be = rnd(-4, 4), ga = rnd(-3, 3), de = rnd(-5, 5);
    const x0 = rnd(-2, 2), y0 = rnd(-2, 2);
    const fT = lin([[al, 'x^2y'], [be, 'xy'], [ga, 'y^2'], [de, 'x']]);
    const F = (x, y) => al * x * x * y + be * x * y + ga * y * y + de * x;
    const fx = 2 * al * x0 * y0 + be * y0 + de, fy = al * x0 * x0 + be * x0 + 2 * ga * y0, f0 = F(x0, y0);
    const fxT = lin([[2 * al, 'xy'], [be, 'y'], [de, '']]), fyT = lin([[al, 'x^2'], [be, 'x'], [2 * ga, 'y']]);
    const derivs = `$f'_x=${fxT}$, $f'_y=${fyT}$; v bode $[${x0};\\,${y0}]$: $f'_x=${fx}$, $f'_y=${fy}$`;
    const t = Math.random();
    if (t < 0.28) {
      return {
        type: 'tuple', signed: true, answer: [fx, fy], placeholder: 'f′x; f′y',
        q: `Vypočítaj gradient funkcie $f(x,y)=${fT}$ v bode $[${x0};\\,${y0}]$. Zadaj obe zložky oddelené bodkočiarkou.`,
        solution: `${derivs}. Teda $\\nabla f(${x0},${y0})=(${fx};\\,${fy})$.`,
        hint: 'Pri derivovaní podľa $x$ považuj $y$ za konštantu a naopak.'
      };
    }
    if (t < 0.52) {
      const [v1, v2] = pick([[3, 4], [4, 3], [-3, 4], [4, -3], [5, 12], [12, -5], [-6, 8], [8, 6], [0, 1], [-1, 0]]);
      const L = Math.hypot(v1, v2), num = fx * v1 + fy * v2;
      return {
        signed: true, answer: num / L, show: fTxt(num, L),
        q: `Vypočítaj deriváciu funkcie $f(x,y)=${fT}$ v bode $[${x0};\\,${y0}]$ v smere vektora $\\vec v=(${v1},\\,${v2})$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `${derivs}. Jednotkový vektor $\\vec u=\\frac{\\vec v}{|\\vec v|}=\\left(${fTex(v1, L)},\\,${fTex(v2, L)}\\right)$.
          $\\frac{\\partial f}{\\partial\\vec u}=\\nabla f\\cdot\\vec u=\\dfrac{${fx}\\cdot${par(v1)}+${par(fy)}\\cdot${par(v2)}}{${L}}=${fTex(num, L)}$.`,
        hint: 'Vektor najprv znormuj na dĺžku 1, potom ho skalárne vynásob gradientom.'
      };
    }
    if (t < 0.76) {
      const C = f0 - fx * x0 - fy * y0;
      return {
        type: 'tuple', signed: true, answer: [fx, fy, C], placeholder: 'A; B; C',
        q: `Dotyková rovina ku grafu funkcie $f(x,y)=${fT}$ v bode $[${x0};\\,${y0};\\,z_0]$ má rovnicu $z=Ax+By+C$. Zadaj $A;\\,B;\\,C$.`,
        solution: `$z_0=f(${x0},${y0})=${f0}$. ${derivs}.
          Rovina: $z=${lin([[f0, ''], [fx, x0 === 0 ? 'x' : `(${lin([[1, 'x'], [-x0, '']])})`], [fy, y0 === 0 ? 'y' : `(${lin([[1, 'y'], [-y0, '']])})`]])}$, po úprave $z=${lin([[fx, 'x'], [fy, 'y'], [C, '']])}$.`,
        hint: 'Rovnica dotykovej roviny: $z=z_0+f\'_x(x_0,y_0)(x-x_0)+f\'_y(x_0,y_0)(y-y_0)$.'
      };
    }
    const H = nz(-5, 5), K = nz(-5, 5);
    const val = round(f0 + (fx * H + fy * K) / 100, 2);
    return {
      signed: true, answer: val, tol: 0.001, show: dt(val, 2),
      q: `Pomocou totálneho diferenciálu odhadni hodnotu $f(${dd(x0 + H / 100, 2)};\\,${dd(y0 + K / 100, 2)})$ pre $f(x,y)=${fT}$. Výsledok zadaj na 2 desatinné miesta.`,
      solution: `Bod $[${x0};\\,${y0}]$, prírastky $h=${dd(H / 100, 2)}$, $k=${dd(K / 100, 2)}$. $f(${x0},${y0})=${f0}$, ${derivs}.
        $f\\approx ${f0}+${par(fx)}\\cdot${H < 0 ? `(${dd(H / 100, 2)})` : dd(H / 100, 2)}+${par(fy)}\\cdot${K < 0 ? `(${dd(K / 100, 2)})` : dd(K / 100, 2)}=${dd(val, 2)}$.`,
      hint: 'Použi $f(a+h,b+k)\\approx f(a,b)+f\'_x(a,b)\\,h+f\'_y(a,b)\\,k$ s celočíselným bodom $(a,b)$ najbližšie k zadanému.'
    };
  });

  /* ======================= 8. EXTRÉMY FUNKCIE DVOCH PREMENNÝCH ======================= */

  fig('v2-lagrange', {
    controls: [{ id: 'c', label: 'Úroveň c funkcie f = 3x + 4y', min: -35, max: 35, step: 1, value: 15 }],
    draw: (v) => {
      const p = plane(-8, 8, -8, 8, 320, 320);
      const c = v.c, r = p.X(5) - p.X(0);
      const L = (x) => (c - 3 * x) / 4;
      const state = Math.abs(c) < 25 ? 'priamka pretína kružnicu – hodnotu c ešte možno zväčšiť aj zmenšiť'
        : Math.abs(c) === 25 ? `dotyk: ${c > 0 ? 'maximum' : 'minimum'} f = ${c} v bode [${c > 0 ? '3; 4' : '−3; −4'}], ∇f ∥ ∇g` : 'priamka nemá s kružnicou spoločný bod';
      const touch = Math.abs(c) === 25 ? `<circle class="f-vertex" cx="${n1(p.X(3 * c / 25))}" cy="${n1(p.Y(4 * c / 25))}" r="6"/>` : '';
      const clipped = `<circle class="f-ok" fill="none" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" r="${n1(r)}"/>
        <line class="f-accent" x1="${n1(p.X(-8))}" y1="${n1(p.Y(L(-8)))}" x2="${n1(p.X(8))}" y2="${n1(p.Y(L(8)))}"/>${touch}`;
      return {
        svg: svg(p, axes(p, 2, 2), clipped, '', 'Vrstevnica lineárnej funkcie a kružnica väzby'),
        readout: `<span class="c-accent">3x + 4y = ${c}</span> · <span class="c-ok">x² + y² = 25</span> · ${state}`
      };
    }
  });

  lesson({
    id: 'v2-extremy', order: 130, title: 'Lokálne a viazané extrémy',
    summary: 'Stacionárne body, Hessova matica a Sylvestrovo kritérium, Lagrangeova funkcia pre extrémy s väzbou.',
    theory: [
      `<p>Funkcia $f$ má v bode $A$ <strong>lokálne maximum</strong> (minimum), ak $f(X)\\le f(A)$ (resp. $\\ge$) pre všetky $X$ z nejakého okolia bodu $A$.
       <strong>Nutná podmienka:</strong> ak má diferencovateľná funkcia v $A$ lokálny extrém, tak $\\nabla f(A)=\\vec 0$, t. j. $f'_x(A)=f'_y(A)=0$. Takéto body nazývame <strong>stacionárne</strong>; nie v každom z nich je extrém.</p>`,
      `<p><strong>Postačujúca podmienka.</strong> Nech má $f$ spojité druhé derivácie a $A$ je stacionárny bod. Zostavíme <strong>Hessovu maticu</strong> a jej determinant</p>
       <p style="text-align:center">$H(A)=\\begin{pmatrix} f''_{xx} & f''_{xy}\\\\ f''_{xy} & f''_{yy}\\end{pmatrix},\\qquad D=f''_{xx}f''_{yy}-\\left(f''_{xy}\\right)^2 .$</p>
       <ul><li>$D\\gt 0$ a $f''_{xx}\\gt 0$: $H$ je kladne definitná (Sylvestrovo kritérium) – <strong>lokálne minimum</strong>;</li>
       <li>$D\\gt 0$ a $f''_{xx}\\lt 0$: $H$ je záporne definitná – <strong>lokálne maximum</strong>;</li>
       <li>$D\\lt 0$: $H$ je indefinitná – <strong>sedlový bod</strong>, extrém nenastáva;</li>
       <li>$D=0$: kritérium nerozhoduje.</li></ul>`,
      `<p><strong>Viazané extrémy.</strong> Hľadáme extrémy $f(x,y)$ na množine $g(x,y)=0$ (väzba). Ak je $\\nabla g\\neq\\vec 0$, v bode viazaného extrému sú gradienty rovnobežné: $\\nabla f=\\lambda\\nabla g$.
       Zostavíme <strong>Lagrangeovu funkciu</strong> $L(x,y,\\lambda)=f(x,y)-\\lambda\\,g(x,y)$ a riešime sústavu</p>
       <p style="text-align:center">$L'_x=0,\\quad L'_y=0,\\quad g(x,y)=0 .$</p>
       <p>Ak je množina $g=0$ ohraničená a uzavretá (napr. kružnica), spojitá $f$ na nej nadobúda maximum aj minimum (Weierstrassova veta) a stačí porovnať hodnoty v nájdených bodoch.</p>`,
      { fig: 'v2-lagrange', caption: 'Hľadáme extrémy $f=3x+4y$ na kružnici $x^2+y^2=25$. Vrstevnica $f=c$ sa kružnice dotýka práve pri $c=\\pm 25$ – tam sú viazané extrémy.' }
    ],
    examples: [
      { task: 'Nájdi lokálne extrémy funkcie $f(x,y)=x^3+y^3-3xy$.',
        steps: ['$f\'_x=3x^2-3y=0$, $f\'_y=3y^2-3x=0$. Z prvej $y=x^2$, dosadením $x^4=x$, teda $x=0$ alebo $x=1$. Stacionárne body: $[0;0]$ a $[1;1]$.',
          '$f\'\'_{xx}=6x$, $f\'\'_{xy}=-3$, $f\'\'_{yy}=6y$, teda $D=36xy-9$.',
          'V $[0;0]$: $D=-9\\lt 0$ – sedlový bod. V $[1;1]$: $D=27\\gt 0$, $f\'\'_{xx}=6\\gt 0$ – lokálne minimum.',
          '<strong>Lokálne minimum $f(1,1)=-1$, v bode $[0;0]$ extrém nie je.</strong>'] },
      { task: 'Nájdi extrémy funkcie $f(x,y)=x+2y$ na kružnici $x^2+y^2=5$.',
        steps: ['$L=x+2y-\\lambda(x^2+y^2-5)$: $L\'_x=1-2\\lambda x=0$, $L\'_y=2-2\\lambda y=0$.',
          'Z oboch rovníc $x=\\frac{1}{2\\lambda}$, $y=\\frac{1}{\\lambda}$, teda $y=2x$. Dosadením do väzby $5x^2=5$, $x=\\pm 1$.',
          'Body $[1;2]$ s $f=5$ a $[-1;-2]$ s $f=-5$. Kružnica je ohraničená a uzavretá, takže ide o globálne extrémy na nej.',
          '<strong>Maximum 5 v bode $[1;2]$, minimum −5 v bode $[-1;-2]$.</strong>'] }
    ]
  });

  gen('v2-extremy', () => {
    const t = Math.random();
    const MIN = 'lokálne minimum', MAX = 'lokálne maximum', SAD = 'sedlový bod (extrém nenastáva)';
    if (t < 0.5) {
      let a, b, c;
      do { a = nz(-3, 3); b = rnd(-4, 4); c = nz(-3, 3); } while (4 * a * c - b * b === 0);
      const x0 = rnd(-3, 3), y0 = rnd(-3, 3);
      const d = -(2 * a * x0 + b * y0), e = -(b * x0 + 2 * c * y0);
      const fT = lin([[a, 'x^2'], [b, 'xy'], [c, 'y^2'], [d, 'x'], [e, 'y']]);
      const D = 4 * a * c - b * b;
      const sys = `$f'_x=${lin([[2 * a, 'x'], [b, 'y'], [d, '']])}=0$, $f'_y=${lin([[b, 'x'], [2 * c, 'y'], [e, '']])}=0$`;
      if (t < 0.25) {
        return {
          type: 'tuple', signed: true, answer: [x0, y0], placeholder: 'x; y',
          q: `Nájdi stacionárny bod funkcie $f(x,y)=${fT}$. Zadaj jeho súradnice v tvare x; y.`,
          solution: `${sys}. Determinant sústavy je $${2 * a}\\cdot${par(2 * c)}-${par(b)}^2=${D}\\neq 0$, sústava má jediné riešenie $x=${x0}$, $y=${y0}$.`,
          hint: 'Polož obe parciálne derivácie rovné nule a vyrieš lineárnu sústavu.'
        };
      }
      const ans = D < 0 ? SAD : a > 0 ? MIN : MAX;
      return {
        type: 'choice', options: [MIN, MAX, SAD], answer: ans,
        q: `Funkcia $f(x,y)=${fT}$ má stacionárny bod $[${x0};\\,${y0}]$. Rozhodni o jeho type.`,
        solution: `$f''_{xx}=${2 * a}$, $f''_{xy}=${b}$, $f''_{yy}=${2 * c}$, teda $D=${2 * a}\\cdot${par(2 * c)}-${par(b)}^2=${D}$.
          ${D < 0 ? 'Keďže $D\\lt 0$, ide o sedlový bod.' : `Keďže $D\\gt 0$ a $f''_{xx}${a > 0 ? '\\gt' : '\\lt'} 0$, ide o ${ans}.`}`,
        hint: 'Vypočítaj druhé parciálne derivácie a determinant Hessovej matice $D=f\'\'_{xx}f\'\'_{yy}-(f\'\'_{xy})^2$.'
      };
    }
    if (t < 0.7) {
      const p = rnd(1, 3), q = rnd(-2, 2), c = nz(-3, 3), s = pick([1, -1]), x0 = s * p;
      const fT = lin([[1, 'x^3'], [-3 * p * p, 'x'], [c, 'y^2'], [-2 * c * q, 'y']]);
      const fxx = 6 * x0, D = fxx * 2 * c;
      const ans = D < 0 ? SAD : fxx > 0 ? MIN : MAX;
      return {
        type: 'choice', options: [MIN, MAX, SAD], answer: ans,
        q: `Funkcia $f(x,y)=${fT}$ má stacionárne body $[${p};\\,${q}]$ a $[${-p};\\,${q}]$. Rozhodni o type bodu $[${x0};\\,${q}]$.`,
        solution: `$f'_x=3x^2-${3 * p * p}$, $f'_y=${lin([[2 * c, 'y'], [-2 * c * q, '']])}$. Druhé derivácie: $f''_{xx}=6x$, $f''_{xy}=0$, $f''_{yy}=${2 * c}$.
          V bode $[${x0};\\,${q}]$: $f''_{xx}=${fxx}$, $D=${fxx}\\cdot${par(2 * c)}-0=${D}$. ${D < 0 ? 'Keďže $D\\lt 0$, ide o sedlový bod.' : `Keďže $D\\gt 0$ a $f''_{xx}${fxx > 0 ? '\\gt' : '\\lt'} 0$, ide o ${ans}.`}`,
        hint: 'V danom bode vypočítaj $f\'\'_{xx}$ a determinant Hessovej matice.'
      };
    }
    if (t < 0.86) {
      const [A0, B0, L0] = pick([[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17]]);
      const sw = Math.random() < 0.5, a = (sw ? B0 : A0) * pick([1, -1]), b = (sw ? A0 : B0) * pick([1, -1]);
      const r = rnd(1, 3), wantMax = Math.random() < 0.5, val = (wantMax ? 1 : -1) * r * L0;
      return {
        signed: true, answer: val,
        q: `Nájdi ${wantMax ? 'maximum' : 'minimum'} funkcie $f(x,y)=${lin([[a, 'x'], [b, 'y']])}$ na kružnici $x^2+y^2=${r * r}$.`,
        solution: `$L=${lin([[a, 'x'], [b, 'y']])}-\\lambda(x^2+y^2-${r * r})$: $${a}-2\\lambda x=0$, $${b}-2\\lambda y=0$, teda $(x,y)=\\frac{1}{2\\lambda}(${a},${b})$ – bod leží na priamke v smere gradientu $(${a},${b})$.
          Z väzby: $(x,y)=\\pm\\frac{${r}}{${L0}}(${a},${b})$, hodnoty $f=\\pm\\frac{${r}}{${L0}}(${a * a}+${b * b})=\\pm ${r * L0}$. ${wantMax ? 'Maximum' : 'Minimum'} je $${val}$.`,
        hint: 'Lagrangeova funkcia $L=f-\\lambda g$; z rovníc vyplýva, že bod extrému je násobkom vektora $(a,b)$.'
      };
    }
    const a = nz(-3, 3), b = nz(-3, 3), c = nz(-6, 6), N = a * a + b * b;
    return {
      type: 'tuple', signed: true, answer: [a * c / N, b * c / N], show: `${fTxt(a * c, N)}; ${fTxt(b * c, N)}`, placeholder: 'x; y',
      q: `Funkcia $f(x,y)=x^2+y^2$ nadobúda na priamke $${lin([[a, 'x'], [b, 'y']])}=${c}$ minimum. V ktorom bode? Zadaj x; y (zlomky v tvare p/q).`,
      solution: `$L=x^2+y^2-\\lambda(${lin([[a, 'x'], [b, 'y'], [-c, '']])})$: $2x=${a === 1 ? '' : a === -1 ? '-' : a}\\lambda$, $2y=${b === 1 ? '' : b === -1 ? '-' : b}\\lambda$. Dosadením do väzby $\\frac{\\lambda}{2}(${a * a}+${b * b})=${c}$, teda $\\lambda=${fTex(2 * c, N)}$.
        Bod: $x=${fTex(a * c, N)}$, $y=${fTex(b * c, N)}$ (päta kolmice z počiatku na priamku), minimum $f=${fTex(c * c, N)}$.`,
      hint: 'Z rovníc $L\'_x=L\'_y=0$ vyjadri $x$ a $y$ pomocou $\\lambda$ a dosaď do väzby.'
    };
  });

  /* ======================= 9. DVOJNÝ INTEGRÁL ======================= */

  fig('v2-oblast', {
    draw: () => {
      const p = plane(-0.2, 1.3, -0.2, 1.3, 320, 320);
      let d = `M${n1(p.X(0))} ${n1(p.Y(0))}`;
      for (let i = 0; i <= 40; i++) { const x = i / 40; d += `L${n1(p.X(x))} ${n1(p.Y(x))}`; }
      for (let i = 40; i >= 0; i--) { const x = i / 40; d += `L${n1(p.X(x))} ${n1(p.Y(x * x))}`; }
      const xs = 0.6;
      const clipped = `<path class="f-fill f-outline" d="${d}Z"/>
        <path class="f-line" d="${curvePath(p, (x) => x, -0.2, 1.3, 2)}"/><path class="f-line" d="${curvePath(p, (x) => x * x, -0.2, 1.3)}"/>
        <line class="f-dash" x1="${n1(p.X(xs))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(xs))}" y2="${n1(p.Y(xs * xs))}"/>
        <line class="f-ok" x1="${n1(p.X(xs))}" y1="${n1(p.Y(xs * xs))}" x2="${n1(p.X(xs))}" y2="${n1(p.Y(xs))}"/>`;
      const front = `<text class="f-small" x="${n1(p.X(0.25))}" y="${n1(p.Y(0.36))}" text-anchor="end">y = x</text>
        <text class="f-small" x="${n1(p.X(0.88))}" y="${n1(p.Y(0.5))}">y = x²</text>
        <text class="f-small c-ok" x="${n1(p.X(xs) + 6)}" y="${n1(p.Y(0.12))}">x² ≤ y ≤ x</text>
        <text class="f-small" x="${n1(p.X(xs))}" y="${n1(p.Y(0) + 14)}" text-anchor="middle">x</text>`;
      return svg(p, axes(p), clipped, front, 'Elementárna oblasť medzi parabolou a priamkou');
    }
  });

  fig('v2-polarne', {
    draw: () => {
      const p = plane(-3.4, 3.4, -3.4, 3.4, 300, 300);
      const R = (r) => p.X(r) - p.X(0);
      let back = '';
      [1, 2, 3].forEach((r) => { back += `<circle class="f-grid" fill="none" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" r="${n1(R(r))}"/>`; });
      for (let k = 0; k < 12; k++) {
        const a = k * Math.PI / 6;
        back += `<line class="f-grid" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(3.2 * Math.cos(a)))}" y2="${n1(p.Y(3.2 * Math.sin(a)))}"/>`;
      }
      const r1 = 2, r2 = 2.6, a1 = Math.PI / 6, a2 = 55 * Math.PI / 180;
      const P = (r, a) => `${n1(p.X(r * Math.cos(a)))} ${n1(p.Y(r * Math.sin(a)))}`;
      const cell = `<path class="f-fill2 f-outline2" d="M${P(r1, a1)} L${P(r2, a1)} A${n1(R(r2))} ${n1(R(r2))} 0 0 0 ${P(r2, a2)} L${P(r1, a2)} A${n1(R(r1))} ${n1(R(r1))} 0 0 1 ${P(r1, a1)} Z"/>`;
      const front = `${cell}<line class="f-thin" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(r1 * Math.cos(a1)))}" y2="${n1(p.Y(r1 * Math.sin(a1)))}"/>
        <path class="f-warn" d="M${P(0.7, 0)} A${n1(R(0.7))} ${n1(R(0.7))} 0 0 0 ${P(0.7, a1)}"/>
        <text class="f-math" x="${n1(p.X(0.95))}" y="${n1(p.Y(0.2))}">φ</text>
        <text class="f-math" x="${n1(p.X(0.9))}" y="${n1(p.Y(0.85))}">r</text>
        <text class="f-small" x="${n1(p.X(-3.2))}" y="${n1(p.Y(3.0))}">dS = r dr dφ</text>`;
      return svg(p, back + axes(p), '', front, 'Polárne súradnice a element plochy');
    }
  });

  lesson({
    id: 'v2-dvojny', order: 140, title: 'Dvojný integrál',
    summary: 'Dvojný integrál cez obdĺžnik a elementárnu oblasť, Fubiniho veta, transformácia do polárnych súradníc.',
    theory: [
      `<p><strong>Dvojný integrál</strong> funkcie $f$ cez obdĺžnik $D=\\langle a;b\\rangle\\times\\langle c;d\\rangle$ definujeme podobne ako Riemannov integrál: $D$ rozdelíme na malé obdĺžniky $D_{ij}$ s obsahmi $\\Delta S_{ij}$, vyberieme body $\\xi_{ij}\\in D_{ij}$ a
       $\\iint_D f\\,dS$ je limita súčtov $\\sum f(\\xi_{ij})\\,\\Delta S_{ij}$ pri zjemňovaní delenia. Pre $f\\ge 0$ je to objem telesa pod grafom $f$ nad $D$; $\\iint_D 1\\,dS$ je obsah množiny $D$. Spojité funkcie sú integrovateľné.</p>`,
      `<p><strong>Fubiniho veta.</strong> Ak je $f$ spojitá na $D=\\langle a;b\\rangle\\times\\langle c;d\\rangle$, tak</p>
       <p style="text-align:center">$\\displaystyle\\iint_D f(x,y)\\,dx\\,dy=\\int_a^b\\left(\\int_c^d f(x,y)\\,dy\\right)dx=\\int_c^d\\left(\\int_a^b f(x,y)\\,dx\\right)dy .$</p>
       <p>Pre <em>elementárnu oblasť</em> $D=\\{(x,y): a\\le x\\le b,\\ \\varphi_1(x)\\le y\\le\\varphi_2(x)\\}$ je $\\iint_D f\\,dS=\\int_a^b\\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x,y)\\,dy\\,dx$ – vnútorné hranice závisia od vonkajšej premennej.
       Ak je $f(x,y)=g(x)h(y)$ a $D$ obdĺžnik, integrál sa rozpadne na súčin $\\int_a^b g\\,dx\\cdot\\int_c^d h\\,dy$.</p>`,
      { fig: 'v2-oblast', caption: 'Oblasť $D$ medzi parabolou $y=x^2$ a priamkou $y=x$ pre $x\\in\\langle 0;1\\rangle$. Pri pevnom $x$ prebieha $y$ od $x^2$ po $x$ (zelená úsečka).' },
      `<p><strong>Polárne súradnice</strong> $x=r\\cos\\varphi$, $y=r\\sin\\varphi$ ($r\\ge 0$, $\\varphi\\in\\langle 0;2\\pi)$) sa hodia pre kruhové oblasti. Jakobián transformácie je $r$, preto $dx\\,dy=r\\,dr\\,d\\varphi$ a</p>
       <p style="text-align:center">$\\displaystyle\\iint_D f(x,y)\\,dx\\,dy=\\iint_{D'} f(r\\cos\\varphi,\\,r\\sin\\varphi)\\,r\\,dr\\,d\\varphi .$</p>
       <p>Kruh $x^2+y^2\\le R^2$ sa zobrazí na obdĺžnik $\\langle 0;R\\rangle\\times\\langle 0;2\\pi\\rangle$. Napr. obsah kruhu: $\\int_0^{2\\pi}\\int_0^R r\\,dr\\,d\\varphi=\\pi R^2$.</p>`,
      { fig: 'v2-polarne', caption: 'Element plochy v polárnych súradniciach má približne rozmery $dr$ a $r\\,d\\varphi$, preto $dS=r\\,dr\\,d\\varphi$.' }
    ],
    examples: [
      { task: 'Vypočítaj $\\iint_D xy\\,dx\\,dy$, kde $D$ je oblasť ohraničená krivkami $y=x^2$ a $y=x$.',
        steps: ['Krivky sa pretínajú v $x=0$ a $x=1$; pre $x\\in\\langle 0;1\\rangle$ je $x^2\\le y\\le x$.',
          '$\\displaystyle\\int_0^1\\int_{x^2}^{x} xy\\,dy\\,dx=\\int_0^1 x\\left[\\frac{y^2}{2}\\right]_{x^2}^{x}dx=\\int_0^1\\frac{x^3-x^5}{2}\\,dx$.',
          '$=\\frac{1}{2}\\left(\\frac{1}{4}-\\frac{1}{6}\\right)=\\frac{1}{24}$.', '<strong>Výsledok: $\\frac{1}{24}$</strong>'] },
      { task: 'Vypočítaj $\\iint_D \\mathrm{e}^{-(x^2+y^2)}\\,dx\\,dy$, kde $D$ je kruh $x^2+y^2\\le 4$.',
        steps: ['V polárnych súradniciach: $\\displaystyle\\int_0^{2\\pi}\\int_0^2 \\mathrm{e}^{-r^2}\\,r\\,dr\\,d\\varphi$.',
          'Vnútorný integrál substitúciou $t=r^2$: $\\int_0^2 \\mathrm{e}^{-r^2}r\\,dr=\\frac{1}{2}\\left(1-\\mathrm{e}^{-4}\\right)$.',
          'Vonkajší integrál dá násobok $2\\pi$.', '<strong>Výsledok: $\\pi\\left(1-\\mathrm{e}^{-4}\\right)\\approx 3{,}084$</strong>'] }
    ]
  });

  gen('v2-dvojny', () => {
    const t = Math.random();
    if (t < 0.28) {
      const c = rnd(1, 6), a = rnd(1, 3), b = rnd(1, 3);
      let m, n;
      do { m = rnd(0, 2); n = rnd(0, 2); } while (m + n === 0);
      const mono = `${c === 1 ? '' : c}${m === 0 ? '' : m === 1 ? 'x' : 'x^2'}${n === 0 ? '' : n === 1 ? 'y' : 'y^2'}`;
      const P = c * Math.pow(a, m + 1) * Math.pow(b, n + 1), Q = (m + 1) * (n + 1);
      return {
        answer: P / Q, show: fTxt(P, Q),
        q: `Vypočítaj $\\displaystyle\\iint_D ${mono}\\,dx\\,dy$, kde $D=\\langle 0;${a}\\rangle\\times\\langle 0;${b}\\rangle$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Integrand je súčinom funkcie $x$ a funkcie $y$, podľa Fubiniho vety:
          $${c === 1 ? '' : c}\\displaystyle\\int_0^{${a}} ${['1', 'x', 'x^2'][m]}\\,dx\\cdot\\int_0^{${b}} ${['1', 'y', 'y^2'][n]}\\,dy=${c === 1 ? '' : c + '\\cdot'}\\frac{${a}^{${m + 1}}}{${m + 1}}\\cdot\\frac{${b}^{${n + 1}}}{${n + 1}}=${fTex(P, Q)}$.`,
        hint: 'Na obdĺžniku a pre súčin $g(x)h(y)$ sa dvojný integrál rovná súčinu dvoch jednoduchých integrálov.'
      };
    }
    if (t < 0.55) {
      if (Math.random() < 0.5) {
        const a = rnd(1, 3);
        let p, q;
        do { p = rnd(0, 4); q = rnd(0, 4); } while (p + q === 0);
        const P = Math.pow(a, 3) * (2 * p + q), Q = 6;
        return {
          answer: P / Q, show: fTxt(P, Q),
          q: `Vypočítaj $\\displaystyle\\iint_D (${lin([[p, 'x'], [q, 'y']])})\\,dx\\,dy$, kde $D$ je trojuholník s vrcholmi $[0;0]$, $[${a};0]$ a $[${a};${a}]$. Výsledok zadaj ako celé číslo alebo zlomok.`,
          solution: `$D=\\{0\\le x\\le ${a},\\ 0\\le y\\le x\\}$. $\\displaystyle\\int_0^{${a}}\\int_0^{x}(${lin([[p, 'x'], [q, 'y']])})\\,dy\\,dx=\\int_0^{${a}}\\left(${rsum([[p, 1, 'x^2'], [q, 2, 'x^2']])}\\right)dx=${fTex((2 * p + q), 2)}\\cdot\\frac{${a}^3}{3}=${fTex(P, Q)}$.`,
          hint: 'Zapíš trojuholník ako elementárnu oblasť: pre pevné $x$ je $0\\le y\\le x$.'
        };
      }
      const k = rnd(1, 6);
      const [f, P0, Q0, inner] = pick([['1', 1, 6, 'x-x^2'], ['x', 1, 12, 'x^2-x^3'], ['y', 1, 15, '\\frac{x^2-x^4}{2}'], ['xy', 1, 24, '\\frac{x^3-x^5}{2}']]);
      const fT = k === 1 ? f : f === '1' ? String(k) : `${k}${f}`;
      return {
        answer: k * P0 / Q0, show: fTxt(k * P0, Q0),
        q: `Vypočítaj $\\displaystyle\\iint_D ${fT}\\,dx\\,dy$, kde $D$ je ohraničená krivkami $y=x^2$ a $y=x$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `$D=\\{0\\le x\\le 1,\\ x^2\\le y\\le x\\}$. Vnútorný integrál podľa $y$ dá $${k === 1 ? '' : k + '\\cdot '}\\left(${inner}\\right)$, potom
          $\\displaystyle${k === 1 ? '' : k}\\int_0^1\\left(${inner}\\right)dx=${k === 1 ? '' : `${k}\\cdot `}\\frac{1}{${Q0}}=${fTex(k * P0, Q0)}$.`,
        hint: 'Krivky sa pretínajú v bodoch $x=0$ a $x=1$; pre pevné $x$ je $x^2\\le y\\le x$.'
      };
    }
    if (t < 0.82) {
      const R = rnd(1, 4), fam = rnd(0, 3);
      if (fam === 3) {
        const R2 = rnd(2, 4), val = 2 * Math.log(R2);
        return {
          answer: round(val, 3), tol: TOL3, show: dt(val),
          q: `Vypočítaj $\\displaystyle\\iint_D\\frac{dx\\,dy}{x^2+y^2}$, kde $D$ je medzikružie $1\\le x^2+y^2\\le ${R2 * R2}$. Výsledok má tvar $k\\pi$; zadaj $k$ zaokrúhlené na 3 desatinné miesta.`,
          solution: `V polárnych súradniciach: $\\displaystyle\\int_0^{2\\pi}\\int_1^{${R2}}\\frac{1}{r^2}\\,r\\,dr\\,d\\varphi=2\\pi\\,[\\ln r]_1^{${R2}}=2\\pi\\ln ${R2}$, teda $k=2\\ln ${R2}\\approx ${dd(val)}$.`,
          hint: 'Prejdi do polárnych súradníc, nezabudni na jakobián $r$.'
        };
      }
      const half = Math.random() < 0.35;
      const [f, fr, P, Q] = fam === 0 ? ['(x^2+y^2)', 'r^2', Math.pow(R, 4), 2] : fam === 1 ? ['\\sqrt{x^2+y^2}', 'r', 2 * Math.pow(R, 3), 3] : ['1', '1', Math.pow(R, 2), 1];
      const P2 = half ? P : P, Q2 = half ? 2 * Q : Q;
      const inner = fam === 0 ? `\\frac{R^4}{4}` : fam === 1 ? `\\frac{R^3}{3}` : `\\frac{R^2}{2}`;
      return {
        answer: P2 / Q2, show: fTxt(P2, Q2),
        q: `Vypočítaj $\\displaystyle\\iint_D ${f === '1' ? '1' : f}\\,dx\\,dy$, kde $D$ je ${half ? 'polkruh' : 'kruh'} $x^2+y^2\\le ${R * R}${half ? ',\\ y\\ge 0' : ''}$. Výsledok má tvar $k\\pi$; zadaj $k$ (celé číslo alebo zlomok).`,
        solution: `Polárne súradnice: $${half ? '0\\le\\varphi\\le\\pi' : '0\\le\\varphi\\le 2\\pi'}$, $0\\le r\\le ${R}$, $dx\\,dy=r\\,dr\\,d\\varphi$.
          $\\displaystyle\\int_0^{${half ? '\\pi' : '2\\pi'}}\\int_0^{${R}} ${fr === '1' ? '' : fr + '\\cdot '}r\\,dr\\,d\\varphi=${half ? '\\pi' : '2\\pi'}\\cdot ${inner.replace('R', String(R))}=${fTex(P2, Q2)}\\,\\pi$, teda $k=${fTex(P2, Q2)}$.`,
        hint: 'V polárnych súradniciach je $x^2+y^2=r^2$ a $dx\\,dy=r\\,dr\\,d\\varphi$.'
      };
    }
    const fam = rnd(0, 2), a = rnd(2, 4), F = 'f(x,y)';
    let given, ok, wrong;
    if (fam === 0) {
      given = `\\int_0^{${a}}\\int_0^{x} ${F}\\,dy\\,dx`;
      ok = `\\int_0^{${a}}\\int_{y}^{${a}} ${F}\\,dx\\,dy`;
      wrong = [`\\int_0^{${a}}\\int_0^{y} ${F}\\,dx\\,dy`, `\\int_0^{${a}}\\int_0^{${a}} ${F}\\,dx\\,dy`, `\\int_0^{${a}}\\int_{${a}-y}^{${a}} ${F}\\,dx\\,dy`];
    } else if (fam === 1) {
      given = `\\int_0^{1}\\int_{x^2}^{x} ${F}\\,dy\\,dx`;
      ok = `\\int_0^{1}\\int_{y}^{\\sqrt{y}} ${F}\\,dx\\,dy`;
      wrong = [`\\int_0^{1}\\int_{\\sqrt{y}}^{y} ${F}\\,dx\\,dy`, `\\int_0^{1}\\int_{y^2}^{y} ${F}\\,dx\\,dy`, `\\int_0^{1}\\int_{y}^{y^2} ${F}\\,dx\\,dy`];
    } else {
      given = `\\int_0^{${a}}\\int_0^{x^2} ${F}\\,dy\\,dx`;
      ok = `\\int_0^{${a * a}}\\int_{\\sqrt{y}}^{${a}} ${F}\\,dx\\,dy`;
      wrong = [`\\int_0^{${a * a}}\\int_0^{\\sqrt{y}} ${F}\\,dx\\,dy`, `\\int_0^{${a}}\\int_{\\sqrt{y}}^{${a}} ${F}\\,dx\\,dy`, `\\int_0^{${a * a}}\\int_{y^2}^{${a}} ${F}\\,dx\\,dy`];
    }
    const desc = fam === 0 ? `trojuholník $0\\le y\\le x\\le ${a}$; pri pevnom $y\\in\\langle 0;${a}\\rangle$ je $y\\le x\\le ${a}$`
      : fam === 1 ? 'oblasť medzi $y=x^2$ a $y=x$; pri pevnom $y\\in\\langle 0;1\\rangle$ je $y\\le x\\le\\sqrt{y}$ (priamka je vľavo, parabola vpravo)'
        : `oblasť pod parabolou $y=x^2$ pre $0\\le x\\le ${a}$; $y$ prebieha $\\langle 0;${a * a}\\rangle$ a pri pevnom $y$ je $\\sqrt{y}\\le x\\le ${a}$`;
    return {
      type: 'choice', options: shuffle([ok, ...wrong].map((s) => `$${s}$`)), answer: `$${ok}$`,
      q: `Zameň poradie integrovania: $\\displaystyle ${given}=\\;?$`,
      solution: `Oblasť integrovania je ${desc}. Preto $\\displaystyle ${given}=${ok}$.`,
      hint: 'Nakresli si oblasť. Potom urči rozsah $y$ a pre pevné $y$ zisti, medzi ktorými krivkami leží $x$.'
    };
  });

  /* ---------- polynómy viac premenných (pre viacnásobné integrály a vektorovú analýzu) ----------
     polynóm = pole jednočlenov { c: koeficient, e: [mocnina x, mocnina y, mocnina z] } */
  const VARS = ['x', 'y', 'z'];
  const mStr = (e) => e.map((k, i) => (k === 0 ? '' : k === 1 ? VARS[i] : `${VARS[i]}^{${k}}`)).join('');
  const pNorm = (ms) => {
    const m = new Map();
    ms.forEach(({ c, e }) => { const k = e.join(','); m.set(k, (m.get(k) || 0) + c); });
    return [...m].filter(([, c]) => c !== 0).map(([k, c]) => ({ c, e: k.split(',').map(Number) }));
  };
  const pTex = (ms) => lin(pNorm(ms).map(({ c, e }) => [c, mStr(e)]));
  const pKey = (ms) => pNorm(ms).map(({ c, e }) => e.join(',') + ':' + c).sort().join('|');
  const pD = (ms, q) => pNorm(ms.filter((m) => m.e[q] > 0).map(({ c, e }) => ({ c: c * e[q], e: e.map((k, i) => (i === q ? k - 1 : k)) })));
  const pEval = (ms, pt) => ms.reduce((s, { c, e }) => s + c * e.reduce((p, k, i) => p * Math.pow(pt[i], k), 1), 0);
  const rMono = (dim, maxDeg, minDeg = 0) => {
    let e, s;
    do { e = [0, 1, 2].map((i) => (i < dim ? rnd(0, 2) : 0)); s = e[0] + e[1] + e[2]; } while (s > maxDeg || s < minDeg);
    return { c: nz(-4, 4), e };
  };
  const rPoly = (dim, maxDeg, minDeg = 0, kmax = 2) => {
    let r;
    do { r = pNorm(Array.from({ length: rnd(1, kmax) }, () => rMono(dim, maxDeg, minDeg))); } while (!r.length);
    return r;
  };
  // polynómy jednej premennej t (pole koeficientov od absolútneho člena)
  const tAdd = (p, q) => Array.from({ length: Math.max(p.length, q.length) }, (_, i) => (p[i] || 0) + (q[i] || 0));
  const tMul = (p, q) => { const r = new Array(p.length + q.length - 1).fill(0); p.forEach((a, i) => q.forEach((b, j) => { r[i + j] += a * b; })); return r; };
  const tPow = (p, k) => { let r = [1]; for (let i = 0; i < k; i++) r = tMul(r, p); return r; };
  const tSub = (ms, xs) => ms.reduce((acc, { c, e }) => tAdd(acc, tMul([c], e.reduce((r, k, i) => tMul(r, tPow(xs[i], k)), [1]))), [0]);
  const tTex = (p) => lin(p.map((c, k) => [c, k === 0 ? '' : k === 1 ? 't' : `t^{${k}}`]).reverse());
  const tInt60 = (p) => p.reduce((s, c, k) => s + c * 60 / (k + 1), 0); // 60·∫₀¹ p(t) dt, presne pre stupeň ≤ 5
  const TRI = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 6, 10], [4, 3, 5]];

  /* ======================= 10. VIACNÁSOBNÉ INTEGRÁLY ======================= */

  fig('v2-kardioida', {
    controls: [{ id: 'phi', label: 'φ (°)', min: 0, max: 360, step: 5, value: 50 }],
    draw: (v) => {
      const p = plane(-0.7, 2.4, -1.55, 1.55, 340, 340);
      const rf = (f) => 1 + Math.cos(f);
      let d = '';
      for (let i = 0; i <= 120; i++) {
        const f = 2 * Math.PI * i / 120, r = rf(f);
        d += `${i ? 'L' : 'M'}${n1(p.X(r * Math.cos(f)))} ${n1(p.Y(r * Math.sin(f)))}`;
      }
      const f = v.phi * Math.PI / 180, r = rf(f), ex = r * Math.cos(f), ey = r * Math.sin(f);
      const far = 2.6;
      const clipped = `<path class="f-fill f-outline" d="${d}Z"/>
        <line class="f-dash" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(far * Math.cos(f)))}" y2="${n1(p.Y(far * Math.sin(f)))}"/>
        <line class="f-ok" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(ex))}" y2="${n1(p.Y(ey))}"/>
        <circle class="f-dot" cx="${n1(p.X(ex))}" cy="${n1(p.Y(ey))}" r="4"/>`;
      const front = `<text class="f-small" x="${n1(p.X(2.3))}" y="${n1(p.Y(1.35))}" text-anchor="end">r = 1 + cos φ</text>`;
      return {
        svg: svg(p, axes(p), clipped, front, 'Kardioida v polárnych súradniciach a polpriamka s pevným uhlom'),
        readout: `φ = ${v.phi}° · <span class="c-ok">r prebieha od 0 po 1 + cos φ ≈ ${sk(r)}</span> · S = ½∫(1 + cos φ)² dφ = 3π/2 ≈ ${sk(1.5 * Math.PI)}`
      };
    }
  });

  lesson({
    id: 'v2-viacnasobne', order: 150, title: 'Viacnásobné integrály',
    summary: 'Transformácia dvojného integrálu a jakobián, trojný integrál a Fubiniho veta, cylindrické a sférické súradnice, objem a hmotnosť telesa.',
    theory: [
      `<p><strong>Transformácia dvojného integrálu.</strong> Nech zobrazenie $x=x(u,v)$, $y=y(u,v)$ so spojitými parciálnymi deriváciami prevádza oblasť $D'$ vzájomne jednoznačne na $D$. Potom</p>
       <p style="text-align:center">$\\displaystyle\\iint_D f(x,y)\\,dx\\,dy=\\iint_{D'} f\\bigl(x(u,v),y(u,v)\\bigr)\\,|J(u,v)|\\,du\\,dv,\\qquad J=\\det\\begin{pmatrix}x_u & x_v\\\\ y_u & y_v\\end{pmatrix} .$</p>
       <p>Pre polárne súradnice je $J=\\cos\\varphi\\cdot r\\cos\\varphi-(-r\\sin\\varphi)\\cdot\\sin\\varphi=r$. Z lekcie o dvojnom integráli poznáme kruh a medzikružie; všeobecnejšia oblasť $D'=\\{\\alpha\\le\\varphi\\le\\beta,\\ r_1(\\varphi)\\le r\\le r_2(\\varphi)\\}$ dáva</p>
       <p style="text-align:center">$\\displaystyle\\iint_D f\\,dS=\\int_\\alpha^\\beta\\int_{r_1(\\varphi)}^{r_2(\\varphi)} f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr\\,d\\varphi,\\qquad S=\\frac{1}{2}\\int_\\alpha^\\beta r_2(\\varphi)^2\\,d\\varphi\\ \\text{ pre } r_1=0 .$</p>
       <p>Pre elipsu $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}\\le 1$ sa hodia <em>zovšeobecnené polárne súradnice</em> $x=ar\\cos\\varphi$, $y=br\\sin\\varphi$ s jakobiánom $abr$; obsah elipsy vyjde $\\pi ab$.</p>`,
      { fig: 'v2-kardioida', caption: 'Kardioida $r=1+\\cos\\varphi$. Pri pevnom uhle $\\varphi$ prebieha $r$ od $0$ po $1+\\cos\\varphi$ (zelená úsečka), uhol prebieha $\\langle 0;2\\pi\\rangle$. Obsah: $S=\\frac{1}{2}\\int_0^{2\\pi}(1+\\cos\\varphi)^2\\,d\\varphi=\\frac{3\\pi}{2}$.' },
      `<p><strong>Trojný integrál</strong> funkcie $f(x,y,z)$ cez ohraničenú oblasť $V\\subset\\mathbb{R}^3$ zavedieme rovnako ako dvojný – rozdelíme $V$ na malé kvádre s objemami $\\Delta V$ a urobíme limitu súčtov $\\sum f(\\xi)\\,\\Delta V$. Integrál $\\iiint_V 1\\,dV$ je objem telesa, a ak $f$ je hustota, $\\iiint_V f\\,dV$ je jeho hmotnosť.</p>
       <p><strong>Fubiniho veta.</strong> Na kvádri $\\langle a_1;b_1\\rangle\\times\\langle a_2;b_2\\rangle\\times\\langle a_3;b_3\\rangle$ je $\\iiint_V f\\,dV=\\int_{a_1}^{b_1}\\int_{a_2}^{b_2}\\int_{a_3}^{b_3} f\\,dz\\,dy\\,dx$ a poradie integrovania môžeme ľubovoľne meniť. Pre teleso „medzi dvoma plochami“ $V=\\{(x,y)\\in D,\\ \\psi_1(x,y)\\le z\\le\\psi_2(x,y)\\}$ platí</p>
       <p style="text-align:center">$\\displaystyle\\iiint_V f\\,dV=\\iint_D\\left(\\int_{\\psi_1(x,y)}^{\\psi_2(x,y)} f(x,y,z)\\,dz\\right)dx\\,dy ,$</p>
       <p>najprv teda integrujeme pozdĺž zvislej úsečky a potom cez priemet $D$ telesa do roviny $xy$. Objem takého telesa je $\\iint_D(\\psi_2-\\psi_1)\\,dx\\,dy$.</p>`,
      `<p><strong>Cylindrické súradnice</strong> $x=r\\cos\\varphi$, $y=r\\sin\\varphi$, $z=z$ sú polárne súradnice v rovine $xy$ doplnené výškou. Jakobián je $r$, teda $dV=r\\,dr\\,d\\varphi\\,dz$. Hodia sa pre valce, kužele a rotačné paraboloidy s osou $z$.</p>
       <p><strong>Sférické súradnice</strong> $x=\\rho\\sin\\theta\\cos\\varphi$, $y=\\rho\\sin\\theta\\sin\\varphi$, $z=\\rho\\cos\\theta$, kde $\\rho\\ge 0$ je vzdialenosť od počiatku, $\\theta\\in\\langle 0;\\pi\\rangle$ uhol od kladnej osi $z$ a $\\varphi\\in\\langle 0;2\\pi)$ je uhol ako v polárnych súradniciach. Jakobián je $\\rho^2\\sin\\theta$, takže</p>
       <p style="text-align:center">$dV=\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi,\\qquad V_{\\text{guľa}}=\\int_0^{2\\pi}\\int_0^{\\pi}\\int_0^{R}\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi=2\\pi\\cdot 2\\cdot\\frac{R^3}{3}=\\frac{4}{3}\\pi R^3 .$</p>`,
      `<p><strong>Hmotnosť, ťažisko, moment zotrvačnosti.</strong> Teleso $V$ s hustotou $\\mu(x,y,z)$ má hmotnosť $m=\\iiint_V\\mu\\,dV$ a ťažisko $T=[x_T;y_T;z_T]$, kde $x_T=\\frac{1}{m}\\iiint_V x\\,\\mu\\,dV$ (podobne $y_T$ a $z_T$).
       Moment zotrvačnosti vzhľadom na os $z$ je $I_z=\\iiint_V (x^2+y^2)\\,\\mu\\,dV$. V rovine analogicky: doska $D$ s plošnou hustotou $\\sigma$ má hmotnosť $\\iint_D\\sigma\\,dS$.</p>
       <ul><li>Súradnice volíme podľa tvaru oblasti, nie integrandu: guľa → sférické, valec a paraboloid → cylindrické, kváder → kartézske.</li>
       <li>Ak je oblasť v nových súradniciach „kváder“ a integrand súčinom funkcií jednotlivých premenných, integrál sa rozpadne na súčin jednoduchých integrálov.</li></ul>`
    ],
    examples: [
      { task: 'Vypočítaj objem telesa ohraničeného paraboloidom $z=4-x^2-y^2$ a rovinou $z=0$.',
        steps: ['Paraboloid pretína rovinu $z=0$ v kružnici $x^2+y^2=4$; priemet telesa do roviny $xy$ je kruh s polomerom $2$ a nad bodom priemetu je $0\\le z\\le 4-r^2$.',
          'V cylindrických súradniciach: $\\displaystyle V=\\int_0^{2\\pi}\\int_0^{2}\\int_0^{4-r^2} r\\,dz\\,dr\\,d\\varphi=\\int_0^{2\\pi}\\int_0^{2}(4r-r^3)\\,dr\\,d\\varphi$.',
          '$\\int_0^2(4r-r^3)\\,dr=\\left[2r^2-\\frac{r^4}{4}\\right]_0^2=8-4=4$ a vonkajší integrál pridá násobok $2\\pi$.',
          '<strong>Výsledok: $V=8\\pi\\approx 25{,}13$</strong>'] },
      { task: 'Vypočítaj hmotnosť gule $x^2+y^2+z^2\\le 4$ s hustotou $\\mu(x,y,z)=x^2+y^2+z^2$.',
        steps: ['V sférických súradniciach je hustota $\\mu=\\rho^2$ a guľa je $0\\le\\rho\\le 2$, $0\\le\\theta\\le\\pi$, $0\\le\\varphi\\le 2\\pi$.',
          '$\\displaystyle m=\\int_0^{2\\pi}\\int_0^{\\pi}\\int_0^{2}\\rho^2\\cdot\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$ – integrand je súčinom funkcií jednotlivých premenných.',
          '$\\int_0^{2\\pi}d\\varphi=2\\pi$, $\\int_0^{\\pi}\\sin\\theta\\,d\\theta=2$ a $\\int_0^2\\rho^4\\,d\\rho=\\frac{32}{5}$.',
          '<strong>Výsledok: $m=\\frac{128}{5}\\pi\\approx 80{,}42$</strong>'] }
    ]
  });

  gen('v2-viacnasobne', () => {
    const t = Math.random();
    const KPI = 'Výsledok má tvar $k\\pi$; zadaj $k$ (celé číslo alebo zlomok).';
    if (t < 0.18) {
      const c = rnd(1, 4), A = [rnd(1, 3), rnd(1, 3), rnd(1, 3)];
      let e;
      do { e = [rnd(0, 2), rnd(0, 2), rnd(0, 2)]; } while (e[0] + e[1] + e[2] === 0);
      const P = c * A.reduce((s, a, i) => s * Math.pow(a, e[i] + 1), 1), Q = e.reduce((s, k) => s * (k + 1), 1);
      const ints = VARS.map((v, i) => `\\int_0^{${A[i]}} ${e[i] === 0 ? '1' : e[i] === 1 ? v : v + '^2'}\\,d${v}`).join('\\cdot ');
      const vals = VARS.map((v, i) => `\\frac{${A[i]}^{${e[i] + 1}}}{${e[i] + 1}}`).join('\\cdot ');
      return {
        answer: P / Q, show: fTxt(P, Q),
        q: `Vypočítaj $\\displaystyle\\iiint_V ${c === 1 ? '' : c}${mStr(e)}\\,dx\\,dy\\,dz$, kde $V=\\langle 0;${A[0]}\\rangle\\times\\langle 0;${A[1]}\\rangle\\times\\langle 0;${A[2]}\\rangle$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Oblasť je kváder a integrand je súčinom funkcií jednotlivých premenných, podľa Fubiniho vety sa integrál rozpadne na súčin:
          $\\displaystyle ${c === 1 ? '' : c + '\\cdot '}${ints}=${c === 1 ? '' : c + '\\cdot '}${vals}=${fTex(P, Q)}$.`,
        hint: 'Na kvádri a pre integrand $g(x)h(y)k(z)$ je trojný integrál súčinom troch jednoduchých integrálov.'
      };
    }
    if (t < 0.4) {
      const u = Math.random();
      if (u < 0.5) {
        const [bp, bq, where, bT] = pick([[1, 2, ' v prvom kvadrante ($x\\ge 0$, $y\\ge 0$)', '\\frac{\\pi}{2}'], [1, 1, ' v hornej polrovine ($y\\ge 0$)', '\\pi'], [2, 1, '', '2\\pi']]);
        const R1 = rnd(1, 2), R2 = rnd(R1 + 1, 4);
        const [f, fr, ex] = pick([['1', '', 2], ['(x^2+y^2)', 'r^2\\cdot ', 4], ['\\sqrt{x^2+y^2}', 'r\\cdot ', 3]]);
        const num = bp * (Math.pow(R2, ex) - Math.pow(R1, ex)), den = bq * ex;
        return {
          answer: num / den, show: fTxt(num, den),
          q: `Vypočítaj $\\displaystyle\\iint_D ${f}\\,dx\\,dy$, kde $D$ je ${where ? 'časť medzikružia' : 'medzikružie'} $${R1 * R1}\\le x^2+y^2\\le ${R2 * R2}$${where}. ${KPI}`,
          solution: `V polárnych súradniciach je $D'=\\{${R1}\\le r\\le ${R2},\\ 0\\le\\varphi\\le ${bT}\\}$ a $dx\\,dy=r\\,dr\\,d\\varphi$:
            $\\displaystyle\\int_0^{${bT}}\\int_{${R1}}^{${R2}} ${fr}r\\,dr\\,d\\varphi=${bT}\\cdot\\left[\\frac{r^{${ex}}}{${ex}}\\right]_{${R1}}^{${R2}}=${bT}\\cdot\\frac{${R2}^{${ex}}-${R1}^{${ex}}}{${ex}}=${fTex(num, den)}\\,\\pi$, teda $k=${fTex(num, den)}$.`,
          hint: 'Medzikružie je v polárnych súradniciach obdĺžnik $r_1\\le r\\le r_2$, $\\alpha\\le\\varphi\\le\\beta$. Nezabudni na jakobián $r$.'
        };
      }
      if (u < 0.75) {
        const a = rnd(1, 4);
        return {
          answer: 3 * a * a / 2, show: fTxt(3 * a * a, 2),
          q: `Vypočítaj obsah oblasti ohraničenej kardioidou $r=${a === 1 ? '' : a}(1+\\cos\\varphi)$, $\\varphi\\in\\langle 0;2\\pi\\rangle$ (polárne súradnice). ${KPI}`,
          solution: `$\\displaystyle S=\\int_0^{2\\pi}\\int_0^{${a === 1 ? '' : a}(1+\\cos\\varphi)} r\\,dr\\,d\\varphi=\\frac{${a * a}}{2}\\int_0^{2\\pi}\\left(1+2\\cos\\varphi+\\cos^2\\varphi\\right)d\\varphi$.
            Keďže $\\int_0^{2\\pi}\\cos\\varphi\\,d\\varphi=0$ a $\\int_0^{2\\pi}\\cos^2\\varphi\\,d\\varphi=\\pi$, je $S=\\frac{${a * a}}{2}(2\\pi+\\pi)=${fTex(3 * a * a, 2)}\\,\\pi$, teda $k=${fTex(3 * a * a, 2)}$.`,
          hint: 'Obsah oblasti $0\\le r\\le r(\\varphi)$ je $\\frac{1}{2}\\int r(\\varphi)^2\\,d\\varphi$; použi $\\cos^2\\varphi=\\frac{1+\\cos 2\\varphi}{2}$.'
        };
      }
      const R = rnd(1, 4), kind = rnd(0, 2);
      const [f, where, P, Q, sol] = [
        ['y', 'polkruh $x^2+y^2\\le ' + R * R + '$, $y\\ge 0$', 2 * Math.pow(R, 3), 3, `\\int_0^{\\pi}\\sin\\varphi\\,d\\varphi\\cdot\\int_0^{${R}} r^2\\,dr=2\\cdot\\frac{${R}^3}{3}`],
        ['x', 'štvrťkruh $x^2+y^2\\le ' + R * R + '$, $x\\ge 0$, $y\\ge 0$', Math.pow(R, 3), 3, `\\int_0^{\\pi/2}\\cos\\varphi\\,d\\varphi\\cdot\\int_0^{${R}} r^2\\,dr=1\\cdot\\frac{${R}^3}{3}`],
        ['xy', 'štvrťkruh $x^2+y^2\\le ' + R * R + '$, $x\\ge 0$, $y\\ge 0$', Math.pow(R, 4), 8, `\\int_0^{\\pi/2}\\sin\\varphi\\cos\\varphi\\,d\\varphi\\cdot\\int_0^{${R}} r^3\\,dr=\\frac{1}{2}\\cdot\\frac{${R}^4}{4}`]
      ][kind];
      return {
        answer: P / Q, show: fTxt(P, Q),
        q: `Vypočítaj $\\displaystyle\\iint_D ${f}\\,dx\\,dy$, kde $D$ je ${where}. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `V polárnych súradniciach je $x=r\\cos\\varphi$, $y=r\\sin\\varphi$, $dx\\,dy=r\\,dr\\,d\\varphi$ a oblasť je obdĺžnik v premenných $r$, $\\varphi$; integrál sa rozpadne na súčin:
          $\\displaystyle ${sol}=${fTex(P, Q)}$.`,
        hint: 'Prejdi do polárnych súradníc; integrand aj s jakobiánom $r$ je súčinom funkcie $r$ a funkcie $\\varphi$.'
      };
    }
    if (t < 0.6) {
      const u = Math.random();
      if (u < 0.4) {
        const h = rnd(1, 6);
        return {
          answer: h * h / 2, show: fTxt(h * h, 2),
          q: `Vypočítaj objem telesa ohraničeného paraboloidom $z=x^2+y^2$ a rovinou $z=${h}$. ${KPI}`,
          solution: `Priemet telesa do roviny $xy$ je kruh $x^2+y^2\\le ${h}$. V cylindrických súradniciach $0\\le\\varphi\\le 2\\pi$, $0\\le r\\le\\sqrt{${h}}$, $r^2\\le z\\le ${h}$ a $dV=r\\,dz\\,dr\\,d\\varphi$:
            $\\displaystyle V=\\int_0^{2\\pi}\\int_0^{\\sqrt{${h}}}(${h}-r^2)\\,r\\,dr\\,d\\varphi=2\\pi\\left[\\frac{${h}r^2}{2}-\\frac{r^4}{4}\\right]_0^{\\sqrt{${h}}}=2\\pi\\cdot\\frac{${h * h}}{4}=${fTex(h * h, 2)}\\,\\pi$, teda $k=${fTex(h * h, 2)}$.`,
          hint: 'Použi cylindrické súradnice: pri pevnom $r$ prebieha $z$ od paraboloidu $r^2$ po rovinu.'
        };
      }
      if (u < 0.7) {
        const k = rnd(1, 3), R = rnd(1, 3), h = k * R;
        return {
          answer: k * Math.pow(R, 3) / 3, show: fTxt(k * Math.pow(R, 3), 3),
          q: `Vypočítaj objem telesa ohraničeného kužeľovou plochou $z=${k === 1 ? '' : k}\\sqrt{x^2+y^2}$ a rovinou $z=${h}$. ${KPI}`,
          solution: `V cylindrických súradniciach je kužeľová plocha $z=${cx(k, 'r')}$, ktorá pretína rovinu $z=${h}$ pre $r=${R}$. Teda $0\\le r\\le ${R}$, $${cx(k, 'r')}\\le z\\le ${h}$:
            $\\displaystyle V=\\int_0^{2\\pi}\\int_0^{${R}}(${h}-${cx(k, 'r')})\\,r\\,dr\\,d\\varphi=2\\pi\\left(\\frac{${h}\\cdot ${R}^2}{2}-\\frac{${k}\\cdot ${R}^3}{3}\\right)=${fTex(k * Math.pow(R, 3), 3)}\\,\\pi$, teda $k=${fTex(k * Math.pow(R, 3), 3)}$
            (súhlasí so vzorcom $\\frac{1}{3}\\pi R^2 v$ pre kužeľ).`,
          hint: 'V cylindrických súradniciach je $\\sqrt{x^2+y^2}=r$; zisti, pre aké $r$ sa plochy pretínajú.'
        };
      }
      const R = rnd(1, 3), H = rnd(1, 4), P = Math.pow(R, 4) * H;
      return {
        answer: P / 2, show: fTxt(P, 2),
        q: `Vypočítaj hmotnosť valca $x^2+y^2\\le ${R * R}$, $0\\le z\\le ${H}$ s hustotou $\\mu(x,y,z)=x^2+y^2$. ${KPI}`,
        solution: `V cylindrických súradniciach je $\\mu=r^2$, $dV=r\\,dr\\,d\\varphi\\,dz$ a valec je „kváder“ $0\\le r\\le ${R}$, $0\\le\\varphi\\le 2\\pi$, $0\\le z\\le ${H}$:
          $\\displaystyle m=\\int_0^{2\\pi}d\\varphi\\int_0^{${H}}dz\\int_0^{${R}} r^3\\,dr=2\\pi\\cdot ${H}\\cdot\\frac{${R}^4}{4}=${fTex(P, 2)}\\,\\pi$, teda $k=${fTex(P, 2)}$.`,
        hint: 'Hmotnosť je $\\iiint_V\\mu\\,dV$; v cylindrických súradniciach je $x^2+y^2=r^2$ a $dV=r\\,dr\\,d\\varphi\\,dz$.'
      };
    }
    if (t < 0.8) {
      if (Math.random() < 0.3) {
        const R1 = rnd(1, 3), R2 = rnd(R1 + 1, 4), P = 4 * (Math.pow(R2, 3) - Math.pow(R1, 3));
        return {
          answer: P / 3, show: fTxt(P, 3),
          q: `Vypočítaj objem guľovej vrstvy $${R1 * R1}\\le x^2+y^2+z^2\\le ${R2 * R2}$. ${KPI}`,
          solution: `Sférické súradnice: $${R1}\\le\\rho\\le ${R2}$, $0\\le\\theta\\le\\pi$, $0\\le\\varphi\\le 2\\pi$, $dV=\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$:
            $\\displaystyle V=2\\pi\\cdot 2\\cdot\\int_{${R1}}^{${R2}}\\rho^2\\,d\\rho=4\\pi\\cdot\\frac{${R2}^3-${R1}^3}{3}=${fTex(P, 3)}\\,\\pi$, teda $k=${fTex(P, 3)}$.`,
          hint: 'V sférických súradniciach je guľová vrstva „kváder“ v premenných $\\rho$, $\\theta$, $\\varphi$.'
        };
      }
      const s = rnd(0, 2), R = rnd(1, 3), c = s === 0 ? rnd(1, 3) : 1;
      const P = 4 * c * Math.pow(R, s + 3), Q = s + 3;
      const dens = ['$\\mu=' + c + '$ (konštantná)', '$\\mu(x,y,z)=\\sqrt{x^2+y^2+z^2}$', '$\\mu(x,y,z)=x^2+y^2+z^2$'][s];
      const mu = [String(c), '\\rho', '\\rho^2'][s];
      return {
        answer: P / Q, show: fTxt(P, Q),
        q: `Vypočítaj hmotnosť gule $x^2+y^2+z^2\\le ${R * R}$ s hustotou ${dens}. ${KPI}`,
        solution: `V sférických súradniciach je $\\mu=${mu}$, $dV=\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$ a guľa je $0\\le\\rho\\le ${R}$, $0\\le\\theta\\le\\pi$, $0\\le\\varphi\\le 2\\pi$:
          $\\displaystyle m=\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi}\\sin\\theta\\,d\\theta\\int_0^{${R}} ${s === 0 ? c + '\\rho^2' : s === 1 ? '\\rho^3' : '\\rho^4'}\\,d\\rho=2\\pi\\cdot 2\\cdot\\frac{${c === 1 ? '' : c + '\\cdot '}${R}^{${s + 3}}}{${s + 3}}=${fTex(P, Q)}\\,\\pi$, teda $k=${fTex(P, Q)}$.`,
        hint: 'Prejdi do sférických súradníc: $x^2+y^2+z^2=\\rho^2$, jakobián $\\rho^2\\sin\\theta$.'
      };
    }
    if (t < 0.9) {
      const A = [rnd(1, 3), rnd(1, 3), rnd(1, 3)];
      let w;
      do { w = [rnd(0, 3), rnd(0, 3), rnd(0, 3)]; } while (w[0] + w[1] + w[2] === 0);
      const vol = A[0] * A[1] * A[2], S = w[0] * A[0] + w[1] * A[1] + w[2] * A[2];
      const dens = lin(w.map((c, i) => [c, VARS[i]]));
      return {
        answer: vol * S / 2, show: fTxt(vol * S, 2),
        q: `Kváder $V=\\langle 0;${A[0]}\\rangle\\times\\langle 0;${A[1]}\\rangle\\times\\langle 0;${A[2]}\\rangle$ má hustotu $\\mu(x,y,z)=${dens}$. Vypočítaj jeho hmotnosť (celé číslo alebo zlomok).`,
        solution: `$m=\\iiint_V (${dens})\\,dV$. Pre každý člen použijeme Fubiniho vetu, napr. $\\iiint_V x\\,dV=\\frac{${A[0]}^2}{2}\\cdot ${A[1]}\\cdot ${A[2]}$; spolu
          $m=\\dfrac{${A[0]}\\cdot ${A[1]}\\cdot ${A[2]}}{2}\\,(${w.map((c, i) => (c ? `${c}\\cdot ${A[i]}` : '')).filter(Boolean).join('+')})=\\frac{${vol}\\cdot ${S}}{2}=${fTex(vol * S, 2)}$.`,
        hint: 'Integrál súčtu je súčet integrálov; $\\iiint_V x\\,dV$ na kvádri je $\\frac{a^2}{2}\\cdot b\\cdot c$.'
      };
    }
    const a = rnd(2, 4);
    let b;
    do { b = rnd(2, 5); } while (b === a);
    const items = [
      ['polárnych súradníc $x=r\\cos\\varphi$, $y=r\\sin\\varphi$', 'r', '$J=\\det\\begin{pmatrix}\\cos\\varphi & -r\\sin\\varphi\\\\ \\sin\\varphi & r\\cos\\varphi\\end{pmatrix}=r\\cos^2\\varphi+r\\sin^2\\varphi=r$'],
      ['cylindrických súradníc $x=r\\cos\\varphi$, $y=r\\sin\\varphi$, $z=z$', 'r', 'súradnica $z$ sa nemení, determinant sa zredukuje na polárny prípad, teda $J=r$'],
      ['sférických súradníc $x=\\rho\\sin\\theta\\cos\\varphi$, $y=\\rho\\sin\\theta\\sin\\varphi$, $z=\\rho\\cos\\theta$', '\\rho^2\\sin\\theta', 'výpočtom determinantu $3\\times 3$ dostaneme $|J|=\\rho^2\\sin\\theta$ (na $\\theta\\in\\langle 0;\\pi\\rangle$ je $\\sin\\theta\\ge 0$)'],
      [`zovšeobecnených polárnych súradníc $x=${a}r\\cos\\varphi$, $y=${b}r\\sin\\varphi$`, `${a * b}r`, `$J=\\det\\begin{pmatrix}${a}\\cos\\varphi & -${a}r\\sin\\varphi\\\\ ${b}\\sin\\varphi & ${b}r\\cos\\varphi\\end{pmatrix}=${a * b}r$`],
      [`posunutia $x=u+${a}$, $y=v-${b}$`, '1', 'parciálne derivácie tvoria jednotkovú maticu, $J=1$ – posunutie nemení obsah'],
      [`zmeny mierky $x=${a}u$, $y=${b}v$`, String(a * b), `$J=\\det\\begin{pmatrix}${a} & 0\\\\ 0 & ${b}\\end{pmatrix}=${a * b}$`]
    ];
    const [what, ok, why] = pick(items);
    const pool = ['r', 'r^2', '\\rho^2\\sin\\theta', '\\rho\\sin\\theta', '1', `${a * b}r`, `${a + b}r`, String(a * b)].filter((x) => x !== ok);
    const opts = shuffle([ok, ...shuffle(pool).slice(0, 3)]).map((x) => `$${x}$`);
    return {
      type: 'choice', options: opts, answer: `$${ok}$`,
      q: `Aká je absolútna hodnota jakobiánu $|J|$ transformácie ${what}?`,
      solution: `Jakobián je determinant matice parciálnych derivácií starých premenných podľa nových: ${why}. Preto $|J|=${ok}$.`,
      hint: 'Zostav maticu parciálnych derivácií $x$, $y$ (prípadne $z$) podľa nových premenných a vypočítaj jej determinant.'
    };
  });

  /* ======================= 11. VEKTOROVÁ ANALÝZA ======================= */

  fig('v2-pole', {
    controls: [{ id: 'k', label: 'k', min: 0, max: 1, step: 0.05, value: 0.3 }],
    draw: (v) => {
      const p = plane(-2.4, 2.4, -2.4, 2.4, 340, 340);
      const k = v.k, F = (x, y) => [k * x - (1 - k) * y, k * y + (1 - k) * x];
      let s = '';
      for (let i = -4; i <= 4; i++) {
        for (let j = -4; j <= 4; j++) {
          const x = i / 2, y = j / 2, [u, w] = F(x, y), L = Math.hypot(u, w);
          if (L < 1e-9) continue;
          const len = 0.36 * Math.min(1, 0.35 + L / 2.5), ex = x + len * u / L, ey = y + len * w / L;
          const X1 = p.X(x), Y1 = p.Y(y), X2 = p.X(ex), Y2 = p.Y(ey), dx = X2 - X1, dy = Y2 - Y1, l = Math.hypot(dx, dy) || 1, ux = dx / l, uy = dy / l;
          const bx = X2 - 5 * ux, by = Y2 - 5 * uy;
          s += `<line class="f-thin" x1="${n1(X1)}" y1="${n1(Y1)}" x2="${n1(bx)}" y2="${n1(by)}"/>
            <polygon class="c-accent" points="${n1(X2)},${n1(Y2)} ${n1(bx - 3 * uy)},${n1(by + 3 * ux)} ${n1(bx + 3 * uy)},${n1(by - 3 * ux)}"/>`;
        }
      }
      const c = (x) => sk(x, 2);
      return {
        svg: svg(p, axes(p), s, '', 'Šípkový graf vektorového poľa – kombinácia zdroja a víru'),
        readout: `F(x, y) = (${c(k)}x − ${c(1 - k)}y; ${c(1 - k)}x + ${c(k)}y) · <span class="c-accent">div F = ${c(2 * k)}</span> · <span class="c-ok">rot F = (0; 0; ${c(2 * (1 - k))})</span>`
      };
    }
  });

  lesson({
    id: 'v2-vektorova', order: 160, title: 'Vektorová analýza',
    summary: 'Vektorové pole, gradient, divergencia a rotácia, krivkové integrály 1. a 2. druhu, potenciálové pole, Greenova veta a prehľad Gaussovej a Stokesovej vety.',
    theory: [
      `<p><strong>Vektorové pole</strong> na oblasti $\\Omega\\subset\\mathbb{R}^3$ priraďuje každému bodu vektor $\\mathbf{F}(x,y,z)=(P;\\,Q;\\,R)$ – napríklad rýchlosť prúdiacej kvapaliny alebo silu. Pomocou operátora $\\nabla=\\left(\\frac{\\partial}{\\partial x};\\ \\frac{\\partial}{\\partial y};\\ \\frac{\\partial}{\\partial z}\\right)$ zapíšeme tri základné operácie:</p>
       <ul><li><strong>gradient</strong> skalárneho poľa: $\\operatorname{grad} U=\\nabla U=(U_x;\\,U_y;\\,U_z)$ – smer najrýchlejšieho rastu $U$;</li>
       <li><strong>divergencia</strong>: $\\operatorname{div}\\mathbf{F}=\\nabla\\cdot\\mathbf{F}=\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}$ – skalár, výdatnosť zdrojov (kladná: pole z okolia bodu vyteká, záporná: vteká);</li>
       <li><strong>rotácia</strong>: $\\operatorname{rot}\\mathbf{F}=\\nabla\\times\\mathbf{F}=\\left(\\frac{\\partial R}{\\partial y}-\\frac{\\partial Q}{\\partial z};\\ \\frac{\\partial P}{\\partial z}-\\frac{\\partial R}{\\partial x};\\ \\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)$ – vektor, ktorého smer je os a veľkosť intenzita víru.</li></ul>
       <p>Pre dostatočne hladké polia platí $\\operatorname{rot}\\operatorname{grad} U=\\mathbf{0}$ a $\\operatorname{div}\\operatorname{rot}\\mathbf{F}=0$. Rovinné pole $(P;\\,Q)$ chápeme ako $(P;\\,Q;\\,0)$ nezávislé od $z$; jeho rotácia má jedinú nenulovú zložku $Q_x-P_y$.</p>`,
      { fig: 'v2-pole', caption: 'Pole $\\mathbf{F}=(kx-(1-k)y;\\ (1-k)x+ky)$. Pre $k=1$ je to čistý zdroj ($\\operatorname{div}\\mathbf{F}=2$, rotácia nulová), pre $k=0$ čistý vír okolo počiatku (divergencia nulová, $\\operatorname{rot}\\mathbf{F}=(0;0;2)$). Medzi tým sa šípky stáčajú do špirál.' },
      `<p><strong>Krivkový integrál 1. druhu</strong> (zo skalárnej funkcie). Nech má krivka $k$ parametrizáciu $\\mathbf{r}(t)=(x(t);\\,y(t);\\,z(t))$, $t\\in\\langle a;b\\rangle$, so spojitou nenulovou deriváciou. Potom</p>
       <p style="text-align:center">$\\displaystyle\\int_k f\\,ds=\\int_a^b f\\bigl(\\mathbf{r}(t)\\bigr)\\,|\\mathbf{r}'(t)|\\,dt,\\qquad |\\mathbf{r}'(t)|=\\sqrt{x'(t)^2+y'(t)^2+z'(t)^2} .$</p>
       <p>Pre $f=1$ dostaneme dĺžku krivky, pre dĺžkovú hustotu $f$ hmotnosť drôtu. Výsledok nezávisí od orientácie krivky.</p>
       <p><strong>Krivkový integrál 2. druhu</strong> (z vektorového poľa) vyjadruje prácu sily $\\mathbf{F}$ pozdĺž orientovanej krivky:</p>
       <p style="text-align:center">$\\displaystyle\\int_k \\mathbf{F}\\cdot d\\mathbf{r}=\\int_k P\\,dx+Q\\,dy+R\\,dz=\\int_a^b \\mathbf{F}\\bigl(\\mathbf{r}(t)\\bigr)\\cdot\\mathbf{r}'(t)\\,dt .$</p>
       <p>Zmenou orientácie sa zmení znamienko. Integrál po uzavretej krivke označujeme $\\oint_k$ a nazývame cirkulácia.</p>`,
      `<p><strong>Potenciálové pole.</strong> Pole $\\mathbf{F}$ je potenciálové, ak existuje funkcia $U$ (potenciál) taká, že $\\mathbf{F}=\\nabla U$. Vtedy pre každú krivku z bodu $A$ do bodu $B$</p>
       <p style="text-align:center">$\\displaystyle\\int_k \\mathbf{F}\\cdot d\\mathbf{r}=U(B)-U(A) ,$</p>
       <p>integrál teda nezávisí od cesty a po každej uzavretej krivke je nulový. Na jednoducho súvislej oblasti (napr. v celom $\\mathbb{R}^2$ alebo $\\mathbb{R}^3$) je pole potenciálové práve vtedy, keď $\\operatorname{rot}\\mathbf{F}=\\mathbf{0}$; v rovine stačí overiť $\\frac{\\partial P}{\\partial y}=\\frac{\\partial Q}{\\partial x}$.
       Potenciál nájdeme integrovaním: $U=\\int P\\,dx+C(y)$ a funkciu $C(y)$ určíme z podmienky $U_y=Q$.</p>`,
      `<p><strong>Greenova veta.</strong> Nech je rovinná oblasť $D$ ohraničená po častiach hladkou jednoduchou uzavretou krivkou $\\partial D$ orientovanou kladne (oblasť ostáva vľavo, t. j. proti smeru hodinových ručičiek) a $P$, $Q$ majú spojité parciálne derivácie. Potom</p>
       <p style="text-align:center">$\\displaystyle\\oint_{\\partial D} P\\,dx+Q\\,dy=\\iint_D\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dx\\,dy .$</p>
       <p>Pre $P=-\\frac{y}{2}$, $Q=\\frac{x}{2}$ je integrand $1$, preto obsah $S(D)=\\frac{1}{2}\\oint_{\\partial D}x\\,dy-y\\,dx$.</p>
       <p><strong>Prehľad viet v priestore.</strong> <em>Gaussova (Gaussova–Ostrogradského) veta:</em> tok poľa uzavretou plochou $\\partial V$ s vonkajšou normálou $\\mathbf{n}$ sa rovná integrálu divergencie cez teleso, $\\iint_{\\partial V}\\mathbf{F}\\cdot\\mathbf{n}\\,dS=\\iiint_V\\operatorname{div}\\mathbf{F}\\,dV$.
       <em>Stokesova veta:</em> cirkulácia poľa po okraji plochy $\\Sigma$ sa rovná toku rotácie touto plochou, $\\oint_{\\partial\\Sigma}\\mathbf{F}\\cdot d\\mathbf{r}=\\iint_\\Sigma\\operatorname{rot}\\mathbf{F}\\cdot\\mathbf{n}\\,dS$ (orientácia okraja a normály podľa pravidla pravej ruky). Greenova veta je Stokesova veta pre rovinnú plochu.</p>`
    ],
    examples: [
      { task: 'Pre pole $\\mathbf{F}=(x^2y;\\ yz^2;\\ xyz)$ vypočítaj $\\operatorname{div}\\mathbf{F}$ a $\\operatorname{rot}\\mathbf{F}$ v bode $A=[1;2;-1]$.',
        steps: ['$P=x^2y$, $Q=yz^2$, $R=xyz$. Divergencia: $P_x+Q_y+R_z=2xy+z^2+xy$, v bode $A$: $4+1+2=7$.',
          'Prvá zložka rotácie: $R_y-Q_z=xz-2yz$, v bode $A$: $-1+4=3$.',
          'Druhá zložka: $P_z-R_x=0-yz$, v bode $A$: $2$. Tretia zložka: $Q_x-P_y=0-x^2$, v bode $A$: $-1$.',
          '<strong>Výsledok: $\\operatorname{div}\\mathbf{F}(A)=7$, $\\operatorname{rot}\\mathbf{F}(A)=(3;\\ 2;\\ -1)$</strong>'] },
      { task: 'Pomocou Greenovej vety vypočítaj $\\oint_k (x-y)\\,dx+(x+y)\\,dy$, kde $k$ je kladne orientovaná kružnica $x^2+y^2=4$.',
        steps: ['$P=x-y$, $Q=x+y$, teda $\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=1-(-1)=2$.',
          'Podľa Greenovej vety je integrál rovný $\\iint_D 2\\,dx\\,dy=2\\cdot S(D)=2\\cdot 4\\pi$.',
          'Kontrola priamym výpočtom: pre $x=2\\cos t$, $y=2\\sin t$ je integrand $(x-y)(-2\\sin t)+(x+y)\\,2\\cos t=4\\sin^2 t+4\\cos^2 t=4$ a $\\int_0^{2\\pi}4\\,dt=8\\pi$.',
          '<strong>Výsledok: $8\\pi\\approx 25{,}13$</strong>'] }
    ]
  });

  gen('v2-vektorova', () => {
    const t = Math.random();
    const vec = (cs) => `\\left(${cs.join(';\\ ')}\\right)`;
    const NAMES = ['P', 'Q', 'R'];
    const VPI = 'Výsledok je násobkom čísla $\\pi$; zadaj len koeficient pri $\\pi$ (celé číslo).';
    const dName = (i, q) => `\\frac{\\partial ${NAMES[i]}}{\\partial ${VARS[q]}}`;
    if (t < 0.14) {
      const F = [0, 1, 2].map(() => rPoly(3, 3, 1));
      const pt = [rnd(-2, 2), rnd(-2, 2), rnd(-2, 2)];
      const D = [0, 1, 2].map((i) => pD(F[i], i)), vals = D.map((d) => pEval(d, pt)), div = vals[0] + vals[1] + vals[2];
      return {
        signed: true, answer: div,
        q: `Vypočítaj divergenciu poľa $\\mathbf{F}=${vec(F.map(pTex))}$ v bode $A=[${pt.join(';')}]$.`,
        solution: `$\\operatorname{div}\\mathbf{F}=${dName(0, 0)}+${dName(1, 1)}+${dName(2, 2)}=(${pTex(D[0])})+(${pTex(D[1])})+(${pTex(D[2])})$. V bode $A$: $${vals.map(par).join('+')}=${div}$.`,
        hint: 'Prvú zložku derivuj podľa $x$, druhú podľa $y$, tretiu podľa $z$ a výsledky sčítaj.'
      };
    }
    if (t < 0.27) {
      const F = [0, 1, 2].map(() => rPoly(3, 3, 1));
      const pt = [rnd(-2, 2), rnd(-2, 2), rnd(-2, 2)];
      const parts = [[2, 1, 1, 2], [0, 2, 2, 0], [1, 0, 0, 1]].map(([i, q, j, s]) => {
        const A = pD(F[i], q), B = pD(F[j], s), val = pEval(A, pt) - pEval(B, pt);
        return { val, tex: `${dName(i, q)}-${dName(j, s)}=(${pTex(A)})-(${pTex(B)})`, };
      });
      const r = parts.map((x) => x.val);
      return {
        type: 'tuple', signed: true, answer: r,
        q: `Vypočítaj rotáciu poľa $\\mathbf{F}=${vec(F.map(pTex))}$ v bode $A=[${pt.join(';')}]$. Zadaj tri zložky oddelené bodkočiarkou.`,
        solution: `Zložky rotácie: $${parts[0].tex}$, $${parts[1].tex}$, $${parts[2].tex}$. Po dosadení bodu $A$: $\\operatorname{rot}\\mathbf{F}(A)=(${r.join(';\\ ')})$.`,
        hint: 'Použi $\\operatorname{rot}\\mathbf{F}=(R_y-Q_z;\\ P_z-R_x;\\ Q_x-P_y)$, napr. ako symbolický determinant s riadkom $\\nabla$.'
      };
    }
    if (t < 0.44) {
      const P = rPoly(2, 2), Q = rPoly(2, 2);
      let xs, dx, dy, desc, prm;
      if (Math.random() < 0.55) {
        const A = [rnd(-2, 2), rnd(-2, 2)];
        let B;
        do { B = [rnd(-2, 3), rnd(-2, 3)]; } while (B[0] === A[0] && B[1] === A[1]);
        const d = [B[0] - A[0], B[1] - A[1]];
        xs = [[A[0], d[0]], [A[1], d[1]]]; dx = [d[0]]; dy = [d[1]];
        desc = `orientovaná úsečka z bodu $[${A[0]};${A[1]}]$ do bodu $[${B[0]};${B[1]}]$`;
        prm = `$x=${lin([[A[0], ''], [d[0], 't']])}$, $y=${lin([[A[1], ''], [d[1], 't']])}$`;
      } else {
        xs = [[0, 1], [0, 0, 1]]; dx = [1]; dy = [0, 2];
        desc = 'oblúk paraboly $y=x^2$ z bodu $[0;0]$ do bodu $[1;1]$';
        prm = '$x=t$, $y=t^2$';
      }
      const g = tAdd(tMul(tSub(P, xs), dx), tMul(tSub(Q, xs), dy)), N = tInt60(g);
      return {
        signed: true, answer: N / 60, show: fTxt(N, 60),
        q: `Vypočítaj krivkový integrál $\\displaystyle\\int_k (${pTex(P)})\\,dx+(${pTex(Q)})\\,dy$, kde $k$ je ${desc}. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Parametrizácia: ${prm}, $t\\in\\langle 0;1\\rangle$, teda $dx=${tTex(dx)}\\,dt$ a $dy=${tTex(dy)}\\,dt$. Po dosadení
          $\\displaystyle\\int_k P\\,dx+Q\\,dy=\\int_0^1\\left(${tTex(g)}\\right)dt=${fTex(N, 60)}$.`,
        hint: 'Parametrizuj krivku, dosaď $x(t)$, $y(t)$ do $P$ a $Q$, vynásob deriváciami $x\'(t)$, $y\'(t)$ a integruj podľa $t$.'
      };
    }
    if (t < 0.54) {
      const a = nz(-4, 4), b = nz(-4, 4), R = rnd(1, 3), k = (b - a) * R * R;
      return {
        signed: true, answer: k,
        q: `Vypočítaj $\\displaystyle\\oint_k ${cx(a, 'y')}\\,dx${b > 0 ? '+' : '-'}${cx(Math.abs(b), 'x')}\\,dy$, kde $k$ je kružnica $x^2+y^2=${R * R}$ orientovaná proti smeru hodinových ručičiek. ${VPI}`,
        solution: `Parametrizácia $x=${R === 1 ? '' : R}\\cos t$, $y=${R === 1 ? '' : R}\\sin t$, $t\\in\\langle 0;2\\pi\\rangle$, $dx=-${R === 1 ? '' : R}\\sin t\\,dt$, $dy=${R === 1 ? '' : R}\\cos t\\,dt$. Integrand je
          $${par(a)}\\cdot ${R * R}\\cdot(-\\sin^2 t)+${par(b)}\\cdot ${R * R}\\cos^2 t$ a keďže $\\int_0^{2\\pi}\\sin^2 t\\,dt=\\int_0^{2\\pi}\\cos^2 t\\,dt=\\pi$, výsledok je $(${b}-${par(a)})\\cdot ${R * R}\\,\\pi=${k}\\pi$
          (rovnako podľa Greenovej vety: $(Q_x-P_y)\\cdot S=(${b}-${par(a)})\\cdot ${R * R}\\pi$). Koeficient pri $\\pi$ je $${k}$.`,
        hint: 'Parametrizuj kružnicu $x=R\\cos t$, $y=R\\sin t$ alebo použi Greenovu vetu.'
      };
    }
    if (t < 0.7) {
      let U, P, Q;
      do { U = rPoly(2, 3, 1, 3); P = pD(U, 0); Q = pD(U, 1); } while (!P.length || !Q.length);
      const bad = Math.random() < 0.45;
      if (bad && Math.random() < 0.55) {
        P = pNorm([...P, { c: nz(-3, 3), e: [rnd(0, 1), rnd(1, 2), 0] }]);
        const same = pKey(pD(P, 1)) === pKey(pD(Q, 0));
        const ans = same ? 'áno, je potenciálové' : 'nie, nie je potenciálové';
        return {
          type: 'choice', options: ['áno, je potenciálové', 'nie, nie je potenciálové'], answer: ans,
          q: `Je pole $\\mathbf{F}=${vec([pTex(P), pTex(Q)])}$ potenciálové v $\\mathbb{R}^2$?`,
          solution: `$\\mathbb{R}^2$ je jednoducho súvislá oblasť, stačí porovnať $\\frac{\\partial P}{\\partial y}=${pTex(pD(P, 1))}$ a $\\frac{\\partial Q}{\\partial x}=${pTex(pD(Q, 0))}$. ${same ? 'Derivácie sa rovnajú, pole <strong>je</strong> potenciálové.' : 'Derivácie sa líšia, pole <strong>nie je</strong> potenciálové (rot F ≠ 0).'}`,
          hint: 'Rovinné pole $(P;\\,Q)$ na $\\mathbb{R}^2$ je potenciálové práve vtedy, keď $P_y=Q_x$.'
        };
      }
      if (bad) {
        return {
          type: 'choice', options: ['áno, je potenciálové', 'nie, nie je potenciálové'], answer: 'áno, je potenciálové',
          q: `Je pole $\\mathbf{F}=${vec([pTex(P), pTex(Q)])}$ potenciálové v $\\mathbb{R}^2$?`,
          solution: `$\\frac{\\partial P}{\\partial y}=${pTex(pD(P, 1))}=\\frac{\\partial Q}{\\partial x}$, takže pole <strong>je</strong> potenciálové; potenciál je napr. $U=${pTex(U)}$.`,
          hint: 'Rovinné pole $(P;\\,Q)$ na $\\mathbb{R}^2$ je potenciálové práve vtedy, keď $P_y=Q_x$.'
        };
      }
      const A = [rnd(-2, 2), rnd(-2, 2)];
      let B;
      do { B = [rnd(-2, 2), rnd(-2, 2)]; } while (B[0] === A[0] && B[1] === A[1]);
      const uA = pEval(U, A), uB = pEval(U, B);
      return {
        signed: true, answer: uB - uA,
        q: `Pole $\\mathbf{F}=${vec([pTex(P), pTex(Q)])}$ je potenciálové. Vypočítaj $\\displaystyle\\int_k \\mathbf{F}\\cdot d\\mathbf{r}$ pozdĺž ľubovoľnej krivky $k$ z bodu $A=[${A.join(';')}]$ do bodu $B=[${B.join(';')}]$.`,
        solution: `Overenie: $\\frac{\\partial P}{\\partial y}=${pTex(pD(P, 1))}=\\frac{\\partial Q}{\\partial x}$. Integrovaním $P$ podľa $x$ a doplnením členov závislých len od $y$ dostaneme potenciál $U(x,y)=${pTex(U)}$ (platí $U_x=P$, $U_y=Q$).
          Integrál nezávisí od cesty: $U(B)-U(A)=${uB}-${par(uA)}=${uB - uA}$.`,
        hint: 'Nájdi potenciál $U$ s $\\nabla U=\\mathbf{F}$; integrál sa rovná $U(B)-U(A)$.'
      };
    }
    if (t < 0.86) {
      if (Math.random() < 0.3) {
        const a = rnd(1, 5), b = rnd(1, 5);
        return {
          answer: a * b,
          q: `Pomocou vzorca $S=\\frac{1}{2}\\oint_k x\\,dy-y\\,dx$ vypočítaj obsah elipsy $\\dfrac{x^2}{${a * a}}+\\dfrac{y^2}{${b * b}}=1$. ${VPI}`,
          solution: `Parametrizácia $x=${a === 1 ? '' : a}\\cos t$, $y=${b === 1 ? '' : b}\\sin t$, $t\\in\\langle 0;2\\pi\\rangle$ (kladná orientácia): $x\\,dy-y\\,dx=${a * b}(\\cos^2 t+\\sin^2 t)\\,dt=${a * b}\\,dt$.
            Preto $S=\\frac{1}{2}\\int_0^{2\\pi}${a * b}\\,dt=${a * b}\\pi$, koeficient pri $\\pi$ je $${a * b}$ (všeobecne $S=\\pi ab$).`,
          hint: 'Elipsu parametrizuj $x=a\\cos t$, $y=b\\sin t$.'
        };
      }
      const c1 = rnd(-4, 4);
      let c2;
      do { c2 = rnd(-4, 4); } while (c2 === c1);
      const gx = pick(['x^2', 'x^3', '\\sin x', '\\mathrm{e}^{x}']), hy = pick(['y^2', 'y^3', '\\cos y', '\\mathrm{e}^{y}']);
      const Pt = c1 === 0 ? gx : `${cx(c1, 'y')}+${gx}`, Qt = c2 === 0 ? hy : `${cx(c2, 'x')}+${hy}`;
      const reg = rnd(0, 2), a = rnd(1, 4), b = rnd(1, 4), R = rnd(1, 3);
      const [desc, Sn, Sd, Stex, isPi] = [
        [`obdĺžnika s vrcholmi $[0;0]$, $[${a};0]$, $[${a};${b}]$, $[0;${b}]$`, a * b, 1, `${a}\\cdot ${b}`, false],
        [`trojuholníka s vrcholmi $[0;0]$, $[${a};0]$, $[0;${b}]$`, a * b, 2, `\\frac{${a}\\cdot ${b}}{2}`, false],
        [`kruhu $x^2+y^2\\le ${R * R}$`, R * R, 1, `${R * R}\\pi`, true]
      ][reg];
      const d = c2 - c1;
      return {
        signed: true, answer: d * Sn / Sd, show: fTxt(d * Sn, Sd),
        q: `Pomocou Greenovej vety vypočítaj $\\displaystyle\\oint_k (${Pt})\\,dx+(${Qt})\\,dy$, kde $k$ je kladne orientovaná hranica ${desc}. ${isPi ? VPI : 'Výsledok zadaj ako celé číslo alebo zlomok.'}`,
        solution: `$\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=${c2}-${par(c1)}=${d}$ (členy $${gx}$ a $${hy}$ k rozdielu neprispejú). Podľa Greenovej vety je integrál rovný $${d}\\cdot S(D)=${d}\\cdot ${Stex}=${isPi ? (d * Sn) + '\\pi' : fTex(d * Sn, Sd)}$${isPi ? `, koeficient pri $\\pi$ je $${d * Sn}$` : ''}.`,
        hint: 'Vypočítaj $Q_x-P_y$ – vyjde konštanta, takže dvojný integrál je jej násobok obsahu oblasti.'
      };
    }
    if (Math.random() < 0.6) {
      const [p, q, L] = pick(TRI);
      const A = [rnd(-2, 2), rnd(-2, 2)], B = [A[0] + p * pick([1, -1]), A[1] + q * pick([1, -1])];
      const al = nz(-3, 3), be = nz(-3, 3), ga = rnd(-3, 3);
      const f = lin([[al, 'x'], [be, 'y'], [ga, '']]), fv = (P) => al * P[0] + be * P[1] + ga;
      const fA = fv(A), fB = fv(B);
      return {
        signed: true, answer: L * (fA + fB) / 2, show: fTxt(L * (fA + fB), 2),
        q: `Vypočítaj krivkový integrál 1. druhu $\\displaystyle\\int_k (${f})\\,ds$, kde $k$ je úsečka s krajnými bodmi $A=[${A.join(';')}]$ a $B=[${B.join(';')}]$. Výsledok zadaj ako celé číslo alebo zlomok.`,
        solution: `Parametrizácia $\\mathbf{r}(t)=A+t(B-A)$, $t\\in\\langle 0;1\\rangle$, má $|\\mathbf{r}'(t)|=|B-A|=\\sqrt{${(B[0] - A[0]) ** 2}+${(B[1] - A[1]) ** 2}}=${L}$. Funkcia je lineárna, preto $\\int_0^1 f(\\mathbf{r}(t))\\,dt$ je aritmetický priemer hodnôt v krajných bodoch:
          $\\displaystyle\\int_k f\\,ds=${L}\\cdot\\frac{f(A)+f(B)}{2}=${L}\\cdot\\frac{${fA}+${par(fB)}}{2}=${fTex(L * (fA + fB), 2)}$.`,
        hint: 'Pri parametrizácii úsečky je $ds=|B-A|\\,dt$.'
      };
    }
    const [R, c, L] = pick(TRI);
    return {
      answer: 2 * L,
      q: `Vypočítaj dĺžku jedného závitu skrutkovice $x=${R}\\cos t$, $y=${R}\\sin t$, $z=${c}t$, $t\\in\\langle 0;2\\pi\\rangle$. ${VPI}`,
      solution: `$\\mathbf{r}'(t)=(-${R}\\sin t;\\ ${R}\\cos t;\\ ${c})$, teda $|\\mathbf{r}'(t)|=\\sqrt{${R * R}\\sin^2 t+${R * R}\\cos^2 t+${c * c}}=\\sqrt{${R * R + c * c}}=${L}$.
        Dĺžka je $\\int_0^{2\\pi}${L}\\,dt=${2 * L}\\pi$, koeficient pri $\\pi$ je $${2 * L}$.`,
      hint: 'Dĺžka krivky je $\\int_a^b|\\mathbf{r}\'(t)|\\,dt$; využi $\\sin^2 t+\\cos^2 t=1$.'
    };
  });
})();
