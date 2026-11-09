/* Interaktívne pomôcky (manipulatíva) hlavne pre ZŠ: #/pomocky (prehľad ako karty) a #/pomocky/<id>.
   Zlomky (koláč a pás, porovnanie, rozšírenie a krátenie, súčet), číselná os so skokmi, násobenie ako
   obdĺžnik (rozklad na desiatky a jednotky), uhly v trojuholníku, Pytagorova veta, obvod a obsah obdĺžnika
   a kruh s rozvinutím obvodu. Všetko je SVG ovládateľné myšou, prstom aj klávesnicou: ťahateľné body majú
   tabindex a posúvajú sa šípkami, k tomu sú posuvníky (input range). Pri každej pomôcke je krátky návod,
   živý popis pre čítačky (aria-live) a zápis v KaTeX s desatinným oddeľovačom jazyka.
   V súvisiacich lekciách je odkaz na pomôcku (mapa LESSON_TOOLS). Výpočty bez DOM sú v POMOCKY.logic. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const NS = 'http://www.w3.org/2000/svg';

  /* ---------- výpočty (bez DOM, overiteľné v node) ---------- */
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; };
  const lcm = (a, b) => (a / gcd(a, b)) * b;

  // porovnanie zlomkov n1/d1 a n2/d2 krížovým súčinom
  const fracCompare = (n1, d1, n2, d2) => { const x = n1 * d2, y = n2 * d1; return x < y ? '<' : x > y ? '>' : '='; };
  // súčet na spoločnom menovateli L: a/L + b/L = n/L, v základnom tvare rn/rd, zmiešané číslo whole + rem/rd
  function fracSum(n1, d1, n2, d2) {
    const L = lcm(d1, d2), a = n1 * (L / d1), b = n2 * (L / d2), n = a + b, g = gcd(n, L);
    const rn = n / g, rd = L / g;
    return { L, a, b, n, rn, rd, whole: Math.floor(rn / rd), rem: rn % rd };
  }

  // veľkosti uhlov trojuholníka (v stupňoch) pri vrcholoch P[0], P[1], P[2]
  function triAngles(P) {
    const ang = (o, p, q) => {
      const ux = p[0] - o[0], uy = p[1] - o[1], vx = q[0] - o[0], vy = q[1] - o[1];
      return (Math.atan2(Math.abs(ux * vy - uy * vx), ux * vx + uy * vy) * 180) / Math.PI;
    };
    return [ang(P[0], P[1], P[2]), ang(P[1], P[2], P[0]), ang(P[2], P[0], P[1])];
  }
  // Druh trojuholníka z celočíselných súradníc (presne): podľa uhlov a podľa strán.
  // Na celočíselnej mriežke nemôže byť presne rovnostranný – stačí, keď sa strany líšia najviac o 4 %.
  function triKind(P) {
    const [A, B, C] = P;
    const cross = (B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]);
    if (cross === 0) return { angle: 'degenerate', side: null, at: -1 };
    const dot = (o, p, q) => (p[0] - o[0]) * (q[0] - o[0]) + (p[1] - o[1]) * (q[1] - o[1]);
    const dots = [dot(A, B, C), dot(B, C, A), dot(C, A, B)];
    let angle = 'acute', at = -1;
    dots.forEach((d, i) => { if (d === 0) { angle = 'right'; at = i; } else if (d < 0) { angle = 'obtuse'; at = i; } });
    const d2 = (p, q) => (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2;
    const s = [d2(B, C), d2(C, A), d2(A, B)];
    const max = Math.max(...s), min = Math.min(...s);
    let side = 'scalene';
    if (Math.sqrt(max / min) <= 1.04) side = 'equilateral';
    else if (s[0] === s[1] || s[1] === s[2] || s[0] === s[2]) side = 'isosceles';
    return { angle, side, at };
  }
  // Zaokrúhlenie hodnôt nadol a zvyšok do súčtu total rozdelíme po jednotkách (posledného rádu).
  // Rovnaké hodnoty dostanú jednotku len spolu (aby rovnaké uhly nevyzerali rozdielne); z možností
  // vyberieme tú s najmenšou najväčšou odchýlkou. Ak sa to nedá, rozdelí sa podľa najväčších zvyškov.
  function roundSum(vals, total, prec) {
    const k = 10 ** prec;
    const sc = vals.map((v) => { const x = v * k; return Math.abs(x - Math.round(x)) < 1e-6 ? Math.round(x) : x; });
    const fl = sc.map(Math.floor);
    const rest = Math.round(total * k) - fl.reduce((a, b) => a + b, 0);
    const groups = [];
    sc.forEach((v, i) => {
      const g = groups.find((x) => Math.abs(x.v - v) < 1e-6);
      if (g) g.idx.push(i); else groups.push({ v, idx: [i] });
    });
    let best = null, bestErr = Infinity;
    for (let mask = 0; mask < 1 << groups.length; mask++) {
      const pick = groups.filter((g, j) => mask & (1 << j));
      if (pick.reduce((s, g) => s + g.idx.length, 0) !== rest) continue;
      const r = fl.slice();
      pick.forEach((g) => g.idx.forEach((i) => { r[i] += 1; }));
      const err = Math.max(...r.map((v, i) => Math.abs(v - sc[i])));
      if (err < bestErr) { bestErr = err; best = r; }
    }
    if (!best) {
      best = fl.slice();
      sc.map((v, i) => [v - fl[i], i]).sort((a, b) => b[0] - a[0]).slice(0, Math.max(0, rest)).forEach(([, i]) => { best[i] += 1; });
    }
    return best.map((v) => v / k);
  }
  // Uhly na zobrazenie: celé stupne, a ak by zaokrúhlenie zavádzalo (90° pri nie pravom uhle,
  // odchýlka 0,6° a viac, rovnaké uhly s rôznou hodnotou), tak na desatiny. Súčet je vždy 180°.
  function triDisplay(P) {
    const exact = triAngles(P), kind = triKind(P);
    const bad = (r) => r.some((v, i) => Math.abs(v - exact[i]) >= 0.6 || (v === 90 && !(kind.angle === 'right' && kind.at === i))
      || r.some((w, j) => j !== i && Math.abs(exact[i] - exact[j]) < 1e-9 && w !== v));
    let prec = 0, shown = roundSum(exact, 180, 0);
    if (bad(shown)) { prec = 1; shown = roundSum(exact, 180, 1); }
    return { exact, shown, prec, kind };
  }

  // číselná os: výsledok a rozsah druhého čísla, aby výsledok zostal na osi (všetko v krokoch)
  const lineResult = (k0, op, m) => (op === '+' ? k0 + m : k0 - m);
  const lineBounds = (loK, hiK, k0, op) => (op === '+' ? [loK - k0, hiK - k0] : [k0 - hiK, k0 - loK]);

  // Rozklad činiteľov: čísla nad 10 na desiatku a jednotky (13 · 7 = 10 · 7 + 3 · 7);
  // ak sú oba činitele najviac 10, rozloží sa len prvý na 5 + zvyšok (pomôže pri násobilke: 7 · 6 = 5 · 6 + 2 · 6).
  const splitN = (n) => (n > 10 ? [10, n - 10] : n > 5 ? [5, n - 5] : [n]);
  function mulParts(a, b) {
    const big = a > 10 || b > 10;
    const A = !big || a > 10 ? splitN(a) : [a], B = big && b > 10 ? splitN(b) : [b], parts = [];
    let y = 0;
    B.forEach((h, j) => {
      let x = 0;
      A.forEach((w, i) => { parts.push({ x, y, w, h, i, j, p: w * h }); x += w; });
      y += h;
    });
    return { A, B, parts };
  }

  const pyth = (a, b) => { const c2 = a * a + b * b, c = Math.sqrt(c2); return { c2, c, exact: Number.isInteger(c) }; };
  const circle = (r) => ({ d: 2 * r, o: 2 * Math.PI * r, S: Math.PI * r * r });
  const rect = (a, b) => ({ o: 2 * (a + b), S: a * b, square: a === b });

  // čísla podľa jazyka: text (pomlčka → mínus) a TeX (desatinná čiarka ako {,})
  function decSep() {
    const lang = I18N.getLang();
    if (lang === I18N.DEFAULT) return ',';
    const files = (window.CONTENT_I18N_FILES || {})[lang];
    if (files && files.length && window.CONTENT_I18N) return CONTENT_I18N.run(lang, null, () => CONTENT_I18N.decimal());
    try { return (1.5).toLocaleString(I18N.info(lang).htmlLang).indexOf(',') >= 0 ? ',' : '.'; } catch (e) { return '.'; }
  }
  function numStr(x, d, fixed) {
    const k = 10 ** d;
    let s = (Math.round(x * k) / k).toFixed(d);
    if (!fixed && s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
    if (/^-0(\.0*)?$/.test(s)) s = s.slice(1);
    return s;
  }
  const fmt = (x, d = 2, fixed = false, sep = decSep()) => numStr(x, d, fixed).replace('.', sep).replace('-', '−');
  const tex = (x, d = 2, fixed = false, sep = decSep()) => numStr(x, d, fixed).replace('.', sep === ',' ? '{,}' : '.');

  const logic = { gcd, lcm, fracCompare, fracSum, triAngles, triKind, roundSum, triDisplay, lineResult, lineBounds, splitN, mulParts, pyth, circle, rect, numStr, fmt, tex };

  /* ---------- pomôcky a súvisiace lekcie ---------- */
  const TOOLS = [
    { id: 'zlomky', icon: '🍕', key: 'Frac', run: fractions },
    { id: 'os', icon: '↔️', key: 'Line', run: numberLine },
    { id: 'nasobenie', icon: '▦', key: 'Mul', run: multiply },
    { id: 'uhly', icon: '📐', key: 'Tri', run: triangle },
    { id: 'pytagoras', icon: '📏', key: 'Pyth', run: pythagoras },
    { id: 'obvod', icon: '⬛', key: 'Rect', run: perimeter },
    { id: 'kruh', icon: '⭕', key: 'Circ', run: circleTool }
  ];
  const toolById = (id) => TOOLS.find((x) => x.id === id);
  const title = (tool) => t(`manip${tool.key}Title`);

  // lekcia → pomôcky (id overené v js/content.js a js/rocniky/*.js)
  const LESSON_TOOLS = {
    'r5-zlomky': ['zlomky'], 'r6-zlomky': ['zlomky'], zlomky: ['zlomky'], 'r9-cisla': ['zlomky'],
    'r1-cisla20': ['os'], 'r1-scitanie': ['os'], 'r1-rozklad': ['os'], 'r2-scitanie': ['os'], 'r6-desatinne': ['os'],
    'r6-cele': ['os'], 'r7-racionalne': ['os'], 'r8-cisla': ['os'], 's1-absolutna': ['os'],
    'r2-nasobenie': ['nasobenie'], 'r2-nasobilka': ['nasobenie'], 'r3-nasobilka': ['nasobenie'], 'r4-nasobenie': ['nasobenie'],
    'r4-utvary': ['uhly'], 'r6-uhly': ['uhly'], 'r6-trojuholniky': ['uhly'], 's1-uhly': ['uhly'],
    pytagoras: ['pytagoras'], 'r9-pytagoras': ['pytagoras'], 's2-podobnost': ['pytagoras'],
    'r3-obvod': ['obvod'], 'r4-obvod': ['obvod'], 'r5-obvod': ['obvod'], 'r6-obvod-obsah': ['obvod'],
    obsah: ['obvod', 'kruh'], 's1-obsahy': ['obvod', 'pytagoras'],
    'r7-kruznica': ['kruh'], 'r8-kruh': ['kruh'], 's2-kruh': ['kruh']
  };
  const lessonsFor = (id) => APP.allOrdered().filter((L) => (LESSON_TOOLS[L.id] || []).includes(id));

  /* ---------- spoločné stavebné prvky ---------- */
  // posuvník s popisom a aktuálnou hodnotou
  const range = (id, label, min, max, step, val) => `<label class="pom-range" for="${id}">
      <span>${esc(label)}: <output id="${id}-o" for="${id}">${esc(String(val))}</output></span>
      <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}"></label>`;
  // nastaví posuvník aj jeho výstup (text) a aria-valuetext
  function setRange(root, id, val, text) {
    const inp = root.querySelector(`#${id}`), out = root.querySelector(`#${id}-o`);
    if (inp && String(inp.value) !== String(val)) inp.value = val;
    const s = text === undefined ? String(val) : text;
    if (out) out.textContent = s;
    if (inp) inp.setAttribute('aria-valuetext', s);
  }
  const onRange = (root, id, fn) => root.querySelector(`#${id}`).addEventListener('input', (e) => fn(Number(e.target.value)));

  // zápis v KaTeX: riadky (reťazec = TeX, {txt} = obyčajný text); vykreslí sa s malým oneskorením
  function mathSetter(el) {
    let last = null, timer = 0;
    return (lines) => {
      const html = lines.filter(Boolean).map((l) => (typeof l === 'string' ? `<div>$\\displaystyle ${esc(l)}$</div>` : `<div class="pom-txt">${esc(l.txt)}</div>`)).join('');
      if (html === last) return;
      last = html;
      clearTimeout(timer);
      timer = setTimeout(() => { el.innerHTML = html; APP.renderMath(el); }, 40);
    };
  }
  // živý popis pre čítačky – až po krátkej pauze, aby ich ťahanie nezahlcovalo
  function liveSetter(el) {
    let last = '', timer = 0;
    return (text) => {
      if (text === last) return;
      last = text;
      clearTimeout(timer);
      timer = setTimeout(() => { el.textContent = text; }, 350);
    };
  }

  // súradnice ukazovateľa v súradniciach SVG (viewBox)
  function svgPoint(svg, e) {
    const m = svg.getScreenCTM();
    if (!m) return null;
    const p = svg.createSVGPoint();
    p.x = e.clientX; p.y = e.clientY;
    return p.matrixTransform(m.inverse());
  }
  const ARROWS = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };

  // Ťahateľný bod: myš, prst (pointer events) aj klávesnica (o.key vráti true, ak kláves spracoval).
  function makeHandle(svg, o) {
    const g = document.createElementNS(NS, 'g');
    g.setAttribute('class', 'pom-handle');
    g.setAttribute('tabindex', '0');
    Object.entries(o.attrs || {}).forEach(([k, v]) => g.setAttribute(k, v));
    g.innerHTML = `<circle class="pom-hit" r="22"></circle><circle class="pom-ring" r="13"></circle><circle class="pom-dot" r="8"></circle>`;
    svg.appendChild(g);
    let drag = false;
    g.addEventListener('pointerdown', (e) => {
      if (e.button > 0) return;
      e.preventDefault();
      drag = true;
      g.classList.add('pom-drag');
      try { g.setPointerCapture(e.pointerId); } catch (x) { /* staršie prehliadače */ }
      try { g.focus({ preventScroll: true }); } catch (x) { g.focus(); }
    });
    g.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const p = svgPoint(svg, e);
      if (p) o.drag(p.x, p.y);
    });
    const end = () => { drag = false; g.classList.remove('pom-drag'); };
    ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((ev) => g.addEventListener(ev, end));
    // na dotykových zariadeniach nech ťahanie bodu neposúva stránku
    g.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    g.addEventListener('keydown', (e) => { if (o.key && o.key(e.key, e.shiftKey)) e.preventDefault(); });
    return {
      el: g,
      place(x, y) { g.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`); },
      set(k, v) { g.setAttribute(k, v); }
    };
  }
  const svgOpen = (w, h, label, group) => `<svg class="pom-svg" viewBox="0 0 ${w} ${h}" role="${group ? 'group' : 'img'}" aria-label="${esc(label)}">`;
  const txt = (x, y, s, cls = 'f-text', extra = '') => `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" class="${cls}" ${extra}>${esc(s)}</text>`;
  const pt = (x, y) => `${x.toFixed(1)} ${y.toFixed(1)}`;

  /* ======================= 1. Zlomky ======================= */
  // koláč: D dielov, fill vyfarbených, hrubé deliace čiary každých f dielov (rozšírený zlomok)
  function pie(cx, cy, r, D, fill, f, cls) {
    let s = '';
    if (D === 1) s += `<circle cx="${cx}" cy="${cy}" r="${r}" class="${fill ? cls : 'pom-empty'}"></circle>`;
    else {
      for (let j = 0; j < D; j++) {
        const a0 = -Math.PI / 2 + (2 * Math.PI * j) / D, a1 = a0 + (2 * Math.PI) / D;
        s += `<path class="pom-seg ${j < fill ? cls : 'pom-empty'}" d="M${pt(cx, cy)} L${pt(cx + r * Math.cos(a0), cy + r * Math.sin(a0))} A${r} ${r} 0 0 1 ${pt(cx + r * Math.cos(a1), cy + r * Math.sin(a1))} Z"></path>`;
      }
      for (let j = 0; j < D; j += f) {
        const a = -Math.PI / 2 + (2 * Math.PI * j) / D;
        s += `<line class="pom-div" x1="${cx}" y1="${cy}" x2="${(cx + r * Math.cos(a)).toFixed(1)}" y2="${(cy + r * Math.sin(a)).toFixed(1)}"></line>`;
      }
    }
    return s + `<circle cx="${cx}" cy="${cy}" r="${r}" class="pom-outline"></circle>`;
  }
  // pás: obdĺžnik rozdelený na D dielov; clsAt(j) určí farbu dielu, hrubé čiary každých f dielov
  function bar(x, y, w, h, D, clsAt, f) {
    let s = '';
    const sw = w / D;
    for (let j = 0; j < D; j++) s += `<rect class="pom-seg ${clsAt(j)}" x="${(x + j * sw).toFixed(2)}" y="${y}" width="${sw.toFixed(2)}" height="${h}"></rect>`;
    for (let j = f; j < D; j += f) s += `<line class="pom-div" x1="${(x + j * sw).toFixed(2)}" y1="${y}" x2="${(x + j * sw).toFixed(2)}" y2="${y + h}"></line>`;
    return s + `<rect class="pom-outline" x="${x}" y="${y}" width="${w}" height="${h}"></rect>`;
  }
  // zlomok N/D ako koláče a pásy (pri nepravom zlomku viac celkov)
  function fracSvg(N, D, f, cls, label) {
    const k = Math.max(1, Math.ceil(N / D));
    const W = 200, cols = Math.min(k, 3), cell = W / cols, r = Math.min(56, cell / 2 - 6), rowH = 2 * r + 10;
    let s = '';
    for (let u = 0; u < k; u++) {
      const cx = cell * (u % cols) + cell / 2, cy = Math.floor(u / cols) * rowH + r + 5;
      s += pie(cx, cy, r, D, Math.max(0, Math.min(D, N - u * D)), f, cls);
    }
    const top = Math.ceil(k / cols) * rowH + 6, bh = 20;
    for (let u = 0; u < k; u++) {
      const fill = Math.max(0, Math.min(D, N - u * D));
      s += bar(1, top + u * (bh + 6), W - 2, bh, D, (j) => (j < fill ? cls : 'pom-empty'), f);
    }
    return `${svgOpen(W, top + k * (bh + 6), label)}${s}</svg>`;
  }

  function fractions(root, out) {
    const F = [{ n: 3, d: 4, f: 1 }, { n: 2, d: 3, f: 1 }];
    const CLS = ['pom-fa', 'pom-fb'];
    const fr = (n, d) => `\\frac{${n}}{${d}}`;
    const plain = (n, d) => `${n}/${d}`;
    const div = t('manipDivTex');
    root.innerHTML = `<div class="pom-pair">${F.map((x, i) => `<section class="pom-panel" aria-labelledby="pf-h${i}">
        <h2 class="pom-h" id="pf-h${i}"><span class="pom-swatch ${CLS[i]}" aria-hidden="true"></span>${esc(t('manipFracNth', { n: i + 1 }))}</h2>
        <div class="pom-fig" id="pf-fig${i}"></div>
        <div class="pom-math" id="pf-m${i}"></div>
        ${range(`pf-n${i}`, t('manipFracNum'), 1, 12, 1, x.n)}
        ${range(`pf-d${i}`, t('manipFracDen'), 1, 12, 1, x.d)}
        <div class="pom-btns"><button type="button" class="btn btn-small" id="pf-e${i}">${esc(t('manipFracExpand'))}</button>
          <button type="button" class="btn btn-small" id="pf-r${i}">${esc(t('manipFracReduce'))}</button></div>
        <div class="pom-math pom-note" id="pf-note${i}"></div>
      </section>`).join('')}</div>
      <section class="pom-panel"><h2 class="pom-h">${esc(t('manipFracCompare'))}</h2><div class="pom-math pom-big" id="pf-cmp"></div></section>
      <section class="pom-panel"><h2 class="pom-h">${esc(t('manipFracSum'))}</h2><div class="pom-fig" id="pf-sumfig"></div><div class="pom-math" id="pf-sum"></div></section>`;
    const m = [0, 1].map((i) => mathSetter(root.querySelector(`#pf-m${i}`)));
    const note = [0, 1].map((i) => mathSetter(root.querySelector(`#pf-note${i}`)));
    const cmp = mathSetter(root.querySelector('#pf-cmp')), sum = mathSetter(root.querySelector('#pf-sum'));

    function draw() {
      F.forEach((x, i) => {
        const N = x.n * x.f, D = x.d * x.f;
        root.querySelector(`#pf-fig${i}`).innerHTML = fracSvg(N, D, x.f, CLS[i], t('manipFracFigLabel', { f: plain(N, D) }));
        m[i]([fr(N, D)]);
        setRange(root, `pf-n${i}`, x.n);
        setRange(root, `pf-d${i}`, x.d);
      });
      const [a, b] = F;
      const rel = fracCompare(a.n, a.d, b.n, b.d);
      const L = lcm(a.d, b.d);
      cmp([`${fr(a.n, a.d)} ${rel} ${fr(b.n, b.d)}`,
        a.d !== b.d ? `${fr(a.n * (L / a.d), L)} ${rel} ${fr(b.n * (L / b.d), L)}` : '',
        { txt: a.d !== b.d ? t('manipFracCommonNote', { L }) : t('manipFracSameDen') }]);
      const S = fracSum(a.n, a.d, b.n, b.d);
      let line = `${fr(a.n, a.d)} + ${fr(b.n, b.d)}`;
      if (a.d !== S.L || b.d !== S.L) line += ` = ${fr(S.a, S.L)} + ${fr(S.b, S.L)}`;
      line += ` = ${fr(S.n, S.L)}`;
      if (S.rd !== S.L) line += ` = ${S.rd === 1 ? S.rn : fr(S.rn, S.rd)}`;
      if (S.rd !== 1 && S.whole > 0) line += ` = ${S.whole}${fr(S.rem, S.rd)}`;
      sum([line]);
      // pás súčtu: diely prvého zlomku, za nimi diely druhého, na spoločnom menovateli
      const k = Math.max(1, Math.ceil(S.n / S.L)), W = 300, bh = 22;
      let s = '';
      for (let u = 0; u < k; u++) {
        s += bar(1, 4 + u * (bh + 8), W - 2, bh, S.L, (j) => { const g = u * S.L + j; return g < S.a ? CLS[0] : g < S.n ? CLS[1] : 'pom-empty'; }, 1);
      }
      root.querySelector('#pf-sumfig').innerHTML = `${svgOpen(W, 8 + k * (bh + 8), t('manipFracSumFig', { a: plain(S.a, S.L), b: plain(S.b, S.L) }))}${s}</svg>`;
      const relText = t(rel === '<' ? 'manipFracLt' : rel === '>' ? 'manipFracGt' : 'manipFracEq', { a: plain(a.n, a.d), b: plain(b.n, b.d) });
      out.live(`${relText} ${t('manipFracSumLive', { s: S.rd === 1 ? String(S.rn) : plain(S.rn, S.rd) })}`);
    }
    [0, 1].forEach((i) => {
      onRange(root, `pf-n${i}`, (v) => { F[i].n = v; F[i].f = 1; note[i]([]); draw(); });
      onRange(root, `pf-d${i}`, (v) => { F[i].d = v; F[i].f = 1; note[i]([]); draw(); });
      // rozšírenie: ukáže ekvivalentný zlomok (jemnejšie delenie), cyklicky 2×, 3×, … kým menovateľ ≤ 24
      root.querySelector(`#pf-e${i}`).addEventListener('click', () => {
        const x = F[i];
        x.f = x.d * (x.f + 1) <= 24 ? x.f + 1 : 1;
        note[i](x.f === 1 ? [{ txt: t('manipFracBack') }]
          : [`${fr(x.n, x.d)} = ${fr(`${x.n}\\cdot ${x.f}`, `${x.d}\\cdot ${x.f}`)} = ${fr(x.n * x.f, x.d * x.f)}`]);
        draw();
        out.live(t('manipFracExpandedLive', { a: plain(x.n, x.d), b: plain(x.n * x.f, x.d * x.f) }));
      });
      // krátenie: zobrazený zlomok vydelíme najväčším spoločným deliteľom
      root.querySelector(`#pf-r${i}`).addEventListener('click', () => {
        const x = F[i], N = x.n * x.f, D = x.d * x.f, g = gcd(N, D);
        if (g === 1) { note[i]([{ txt: t('manipFracIrreducible', { f: plain(N, D) }) }]); out.live(t('manipFracIrreducible', { f: plain(N, D) })); return; }
        x.n = N / g; x.d = D / g; x.f = 1;
        note[i]([`${fr(N, D)} = ${fr(`${N}${div}${g}`, `${D}${div}${g}`)} = ${fr(x.n, x.d)}`]);
        draw();
        out.live(t('manipFracReducedLive', { a: plain(N, D), b: plain(x.n, x.d) }));
      });
    });
    draw();
  }

  /* ======================= 2. Číselná os ======================= */
  const LINE_PRESETS = {
    p20: { lo: 0, hi: 20, h: 1, d: 0, every: 1, k0: 5, m: 3 },
    p10: { lo: -10, hi: 10, h: 1, d: 0, every: 2, k0: 3, m: -5 },
    p40: { lo: -20, hi: 20, h: 1, d: 0, every: 5, k0: -4, m: 7 },
    dec: { lo: -2, hi: 2, h: 0.1, d: 1, every: 5, k0: 3, m: 5 }
  };
  function numberLine(root, out) {
    const st = { p: 'p20', op: '+', k0: 5, m: 3 };
    const W = 360, H = 140, X0 = 20, AW = 320, Y = 90;
    root.innerHTML = `<div class="pom-controls">
        <label class="pom-sel">${esc(t('manipLineRange'))}
          <select id="pl-p">${Object.keys(LINE_PRESETS).map((k) => `<option value="${k}">${esc(t(`manipLineP_${k}`))}</option>`).join('')}</select></label>
        <div class="pom-ops" role="group" aria-label="${esc(t('manipLineOp'))}">
          <button type="button" class="btn btn-small" id="pl-plus" aria-label="${esc(t('manipLineAdd'))}">+</button>
          <button type="button" class="btn btn-small" id="pl-minus" aria-label="${esc(t('manipLineSub'))}">−</button></div>
      </div>
      <div class="pom-fig">${svgOpen(W, H, t('manipLineTitle'), true)}<defs><marker id="pom-ah" viewBox="0 0 8 8" refX="7" refY="4" markerUnits="userSpaceOnUse" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" class="pom-ah"></path></marker></defs><g class="pom-layer"></g></svg></div>
      <div class="pom-math pom-big" id="pl-m"></div>
      <div class="pom-controls">${range('pl-a', t('manipLineStart'), 0, 20, 1, 5)}${range('pl-b', t('manipLineSecond'), -10, 10, 1, 3)}</div>`;
    const svg = root.querySelector('svg'), layer = svg.querySelector('.pom-layer');
    const math = mathSetter(root.querySelector('#pl-m'));
    const P = () => LINE_PRESETS[st.p];
    const K = (v) => Math.round(v / P().h);
    const val = (k) => k * P().h;
    const X = (k) => X0 + ((k - K(P().lo)) * AW) / (K(P().hi) - K(P().lo));
    const handle = makeHandle(svg, {
      attrs: { role: 'slider', 'aria-label': t('manipLineHandle') },
      drag: (x) => { st.k0 = K(P().lo) + Math.round(((x - X0) * (K(P().hi) - K(P().lo))) / AW); draw(); },
      key: (key) => {
        const step = { ArrowLeft: -1, ArrowDown: -1, ArrowRight: 1, ArrowUp: 1, PageDown: -5, PageUp: 5 }[key];
        if (step) st.k0 += step;
        else if (key === 'Home') st.k0 = K(P().lo);
        else if (key === 'End') st.k0 = K(P().hi);
        else return false;
        draw();
        return true;
      }
    });
    // udrží štart aj výsledok na osi
    function clamp() {
      const lo = K(P().lo), hi = K(P().hi);
      st.k0 = Math.max(lo, Math.min(hi, st.k0));
      const [mn, mx] = lineBounds(lo, hi, st.k0, st.op);
      st.m = Math.max(mn, Math.min(mx, st.m));
      return [mn, mx];
    }
    function draw() {
      const [mn, mx] = clamp();
      const p = P(), lo = K(p.lo), hi = K(p.hi), span = hi - lo, unit = AW / span;
      const res = lineResult(st.k0, st.op, st.m), dir = Math.sign(res - st.k0);
      let s = `<line class="f-axis" x1="${X0 - 8}" y1="${Y}" x2="${X0 + AW + 10}" y2="${Y}"></line>`;
      for (let k = lo; k <= hi; k++) {
        const major = (k - lo) % p.every === 0, x = X(k);
        s += `<line class="${k === 0 ? 'pom-zero' : 'f-axis'}" x1="${x.toFixed(1)}" y1="${Y - (major || k === 0 ? 6 : 3)}" x2="${x.toFixed(1)}" y2="${Y + (major || k === 0 ? 6 : 3)}"></line>`;
        if (major) s += txt(x, Y + 20, fmt(val(k), p.d), 'f-small', 'text-anchor="middle"');
      }
      // skoky: jeden oblúk za každý krok (doprava farbou primary, doľava warn)
      const ah = Math.min(24, Math.max(14, unit * 1.4));
      for (let i = 0; i < Math.abs(res - st.k0); i++) {
        const a = X(st.k0 + dir * i), b = X(st.k0 + dir * (i + 1));
        s += `<path class="${dir > 0 ? 'pom-arc-r' : 'pom-arc-l'}" marker-end="url(#pom-ah)" d="M${pt(a, Y - 2)} Q${pt((a + b) / 2, Y - 2 - ah * 1.6)} ${pt(b, Y - 2)}"></path>`;
      }
      if (dir) {
        const shift = val(res - st.k0);
        s += txt((X(st.k0) + X(res)) / 2, Y - 2 - ah - 14, (shift > 0 ? '+' : '') + fmt(shift, p.d), 'pom-lbl', 'text-anchor="middle"');
      }
      s += `<circle class="pom-res" cx="${X(res).toFixed(1)}" cy="${Y}" r="6"></circle>`;
      s += txt(X(res), Y + 40, fmt(val(res), p.d), 'pom-lbl', 'text-anchor="middle"');
      layer.innerHTML = s;
      handle.place(X(st.k0), Y);
      handle.set('aria-valuemin', String(p.lo));
      handle.set('aria-valuemax', String(p.hi));
      handle.set('aria-valuenow', numStr(val(st.k0), p.d));
      handle.set('aria-valuetext', fmt(val(st.k0), p.d));
      // posuvníky (rozsah druhého čísla sa prispôsobí, aby výsledok zostal na osi)
      const ia = root.querySelector('#pl-a'), ib = root.querySelector('#pl-b');
      ia.min = lo; ia.max = hi; ib.min = mn; ib.max = mx;
      setRange(root, 'pl-a', st.k0, fmt(val(st.k0), p.d));
      setRange(root, 'pl-b', st.m, fmt(val(st.m), p.d));
      root.querySelector('#pl-plus').setAttribute('aria-pressed', String(st.op === '+'));
      root.querySelector('#pl-minus').setAttribute('aria-pressed', String(st.op === '-'));
      // zápis
      const tm = (k) => (k < 0 ? `\\left(${tex(val(k), p.d)}\\right)` : tex(val(k), p.d));
      const pm = (k) => (k < 0 ? `(${fmt(val(k), p.d)})` : fmt(val(k), p.d));
      const opT = st.op === '+' ? '+' : '-', opP = st.op === '+' ? '+' : '−';
      const hint = st.m < 0 ? t(st.op === '+' ? 'manipLinePlusNeg' : 'manipLineMinusNeg') : '';
      math([`${tex(val(st.k0), p.d)} ${opT} ${tm(st.m)} = ${tex(val(res), p.d)}`, hint ? { txt: hint } : '']);
      out.live(`${fmt(val(st.k0), p.d)} ${opP} ${pm(st.m)} = ${fmt(val(res), p.d)}. ${dir ? t(dir > 0 ? 'manipLineRight' : 'manipLineLeft', { n: Math.abs(res - st.k0), step: fmt(p.h, p.d) }) : ''}`.trim());
    }
    root.querySelector('#pl-p').addEventListener('change', (e) => {
      st.p = e.target.value;
      st.k0 = LINE_PRESETS[st.p].k0; st.m = LINE_PRESETS[st.p].m;
      draw();
    });
    root.querySelector('#pl-plus').addEventListener('click', () => { st.op = '+'; draw(); });
    root.querySelector('#pl-minus').addEventListener('click', () => { st.op = '-'; draw(); });
    onRange(root, 'pl-a', (v) => { st.k0 = v; draw(); });
    onRange(root, 'pl-b', (v) => { st.m = v; draw(); });
    draw();
  }

  /* ======================= 3. Násobenie ako obdĺžnik ======================= */
  function multiply(root, out) {
    const st = { a: 13, b: 7, split: true };
    const MA = 20, MB = 12, C = 16, OX = 34, OY = 30, W = OX + MA * C + 8, H = OY + MB * C + 8;
    const PART = ['pom-p1', 'pom-p2', 'pom-p3', 'pom-p4'];
    root.innerHTML = `<div class="pom-fig">${svgOpen(W, H, t('manipMulTitle'), true)}<g class="pom-layer"></g></svg></div>
      <div class="pom-math pom-big" id="pm-m"></div>
      <div class="pom-controls">${range('pm-a', t('manipMulCols'), 1, MA, 1, st.a)}${range('pm-b', t('manipMulRows'), 1, MB, 1, st.b)}
        <label class="pom-check"><input type="checkbox" id="pm-s" checked> ${esc(t('manipMulSplit'))}</label></div>`;
    const svg = root.querySelector('svg'), layer = svg.querySelector('.pom-layer');
    const math = mathSetter(root.querySelector('#pm-m'));
    const handle = makeHandle(svg, {
      attrs: { role: 'button', 'aria-label': t('manipMulCorner') },
      drag: (x, y) => { st.a = Math.round((x - OX) / C); st.b = Math.round((y - OY) / C); draw(); },
      key: (key) => { const d = ARROWS[key]; if (!d) return false; st.a += d[0]; st.b += d[1]; draw(); return true; }
    });
    function draw() {
      st.a = Math.max(1, Math.min(MA, st.a)); st.b = Math.max(1, Math.min(MB, st.b));
      const { a, b } = st, p = a * b;
      let s = '';
      // celá mriežka (svetlo), aby bolo vidieť, kam sa dá roh potiahnuť
      for (let i = 0; i <= MA; i++) s += `<line class="f-grid" x1="${OX + i * C}" y1="${OY}" x2="${OX + i * C}" y2="${OY + MB * C}"></line>`;
      for (let j = 0; j <= MB; j++) s += `<line class="f-grid" x1="${OX}" y1="${OY + j * C}" x2="${OX + MA * C}" y2="${OY + j * C}"></line>`;
      const mp = st.split ? mulParts(a, b) : { A: [a], B: [b], parts: [{ x: 0, y: 0, w: a, h: b, i: 0, j: 0, p }] };
      mp.parts.forEach((q) => {
        s += `<rect class="${PART[q.j * 2 + q.i] || PART[0]}" x="${OX + q.x * C}" y="${OY + q.y * C}" width="${q.w * C}" height="${q.h * C}"></rect>`;
      });
      for (let i = 1; i < a; i++) s += `<line class="pom-cell" x1="${OX + i * C}" y1="${OY}" x2="${OX + i * C}" y2="${OY + b * C}"></line>`;
      for (let j = 1; j < b; j++) s += `<line class="pom-cell" x1="${OX}" y1="${OY + j * C}" x2="${OX + a * C}" y2="${OY + j * C}"></line>`;
      // hranice častí rozkladu a súčiny v nich
      if (mp.parts.length > 1) {
        let x = 0;
        mp.A.slice(0, -1).forEach((w) => { x += w; s += `<line class="pom-cut" x1="${OX + x * C}" y1="${OY - 4}" x2="${OX + x * C}" y2="${OY + b * C + 4}"></line>`; });
        let y = 0;
        mp.B.slice(0, -1).forEach((h) => { y += h; s += `<line class="pom-cut" x1="${OX - 4}" y1="${OY + y * C}" x2="${OX + a * C + 4}" y2="${OY + y * C}"></line>`; });
        mp.parts.forEach((q) => {
          if (q.w * C >= 30 && q.h * C >= 16) s += txt(OX + (q.x + q.w / 2) * C, OY + (q.y + q.h / 2) * C + 5, `${q.w}·${q.h}`, 'pom-lbl pom-halo', 'text-anchor="middle"');
        });
      }
      s += `<rect class="pom-outline" x="${OX}" y="${OY}" width="${a * C}" height="${b * C}"></rect>`;
      // popisy strán (pri rozklade po častiach)
      let x = 0;
      mp.A.forEach((w) => { s += txt(OX + (x + w / 2) * C, OY - 10, String(w), 'pom-lbl', 'text-anchor="middle"'); x += w; });
      let y = 0;
      mp.B.forEach((h) => { s += txt(OX - 8, OY + (y + h / 2) * C + 5, String(h), 'pom-lbl', 'text-anchor="end"'); y += h; });
      layer.innerHTML = s;
      handle.place(OX + a * C, OY + b * C);
      setRange(root, 'pm-a', a); setRange(root, 'pm-b', b);
      // zápis: rozklad podľa častí, súčet čiastkových súčinov
      const lines = [], A = mp.A, B = mp.B;
      if (A.length > 1 || B.length > 1) {
        const sumT = (arr) => (arr.length > 1 ? `(${arr.join('+')})` : String(arr[0]));
        let l = `${a}\\cdot ${b}`;
        if (A.length > 1 && B.length > 1) l += ` = ${sumT(A)}\\cdot ${sumT(B)}`;
        l += ` = ${mp.parts.map((q) => `${q.w}\\cdot ${q.h}`).join(' + ')}`;
        l += ` = ${mp.parts.map((q) => q.p).join(' + ')} = ${p}`;
        lines.push(l);
      } else lines.push(`${a}\\cdot ${b} = ${p}`);
      if (b <= 6 && b > 1) lines.push(`${Array(b).fill(a).join(' + ')} = ${p}`);
      math(lines);
      out.live(t('manipMulLive', { a, b, p }) + (mp.parts.length > 1 ? ` ${t('manipMulPartsLive', { parts: mp.parts.map((q) => `${q.w}·${q.h} = ${q.p}`).join(', ') })}` : ''));
    }
    onRange(root, 'pm-a', (v) => { st.a = v; draw(); });
    onRange(root, 'pm-b', (v) => { st.b = v; draw(); });
    root.querySelector('#pm-s').addEventListener('change', (e) => { st.split = e.target.checked; draw(); });
    draw();
  }

  /* ======================= 4. Uhly v trojuholníku ======================= */
  function triangle(root, out) {
    const GX = 16, GY = 12, C = 20, M = 10, W = M * 2 + GX * C, H = M * 2 + GY * C;
    const V = [[2, 10], [14, 10], [6, 2]];
    const NAMES = ['A', 'B', 'C'], GREEK = ['α', 'β', 'γ'], GREEK_TEX = ['\\alpha', '\\beta', '\\gamma'];
    const sx = (i) => M + i * C;
    root.innerHTML = `<div class="pom-fig">${svgOpen(W, H, t('manipTriTitle'), true)}<g class="pom-layer"></g></svg></div>
      <div class="pom-kinds" id="pt-k"></div>
      <div class="pom-math pom-big" id="pt-m"></div>`;
    const svg = root.querySelector('svg'), layer = svg.querySelector('.pom-layer');
    const math = mathSetter(root.querySelector('#pt-m'));
    const handles = V.map((v, n) => makeHandle(svg, {
      attrs: { role: 'button', 'aria-label': t('manipTriVertex', { v: NAMES[n] }) },
      drag: (x, y) => { V[n] = [Math.round((x - M) / C), Math.round((y - M) / C)]; draw(); },
      key: (key) => { const d = ARROWS[key]; if (!d) return false; V[n] = [V[n][0] + d[0], V[n][1] + d[1]]; draw(); return true; }
    }));
    const unit = (x, y) => { const l = Math.hypot(x, y) || 1; return [x / l, y / l]; };
    function draw() {
      V.forEach((v) => { v[0] = Math.max(0, Math.min(GX, v[0])); v[1] = Math.max(0, Math.min(GY, v[1])); });
      const S = V.map((v) => [sx(v[0]), sx(v[1])]);
      let s = '';
      for (let i = 0; i <= GX; i++) for (let j = 0; j <= GY; j++) s += `<circle class="pom-gridpt" cx="${sx(i)}" cy="${sx(j)}" r="1.3"></circle>`;
      const D = triDisplay(V), kind = D.kind;
      s += `<polygon class="pom-tri" points="${S.map((p) => p.join(',')).join(' ')}"></polygon>`;
      const cx = (S[0][0] + S[1][0] + S[2][0]) / 3, cy = (S[0][1] + S[1][1] + S[2][1]) / 3;
      S.forEach((p, n) => {
        const q = S[(n + 1) % 3], r = S[(n + 2) % 3];
        // písmeno vrcholu von z trojuholníka
        const [ox, oy] = unit(p[0] - cx, p[1] - cy);
        const lx = Math.max(10, Math.min(W - 10, p[0] + ox * 20)), ly = Math.max(14, Math.min(H - 4, p[1] + oy * 20 + 5));
        s += txt(lx, ly, NAMES[n], 'pom-vlbl', 'text-anchor="middle"');
        if (kind.angle === 'degenerate') return;
        const u = unit(q[0] - p[0], q[1] - p[1]), w = unit(r[0] - p[0], r[1] - p[1]);
        const rad = Math.max(10, Math.min(26, 0.35 * Math.min(Math.hypot(q[0] - p[0], q[1] - p[1]), Math.hypot(r[0] - p[0], r[1] - p[1]))));
        if (kind.angle === 'right' && kind.at === n) {
          const k = rad * 0.6;
          s += `<path class="pom-angle" d="M${pt(p[0] + u[0] * k, p[1] + u[1] * k)} L${pt(p[0] + (u[0] + w[0]) * k, p[1] + (u[1] + w[1]) * k)} L${pt(p[0] + w[0] * k, p[1] + w[1] * k)}"></path>`;
        } else {
          const sweep = u[0] * w[1] - u[1] * w[0] > 0 ? 1 : 0;
          s += `<path class="pom-angle" d="M${pt(p[0] + u[0] * rad, p[1] + u[1] * rad)} A${rad.toFixed(1)} ${rad.toFixed(1)} 0 0 ${sweep} ${pt(p[0] + w[0] * rad, p[1] + w[1] * rad)}"></path>`;
        }
        const bis = unit(u[0] + w[0], u[1] + w[1]);
        s += txt(p[0] + bis[0] * (rad + 14), p[1] + bis[1] * (rad + 14) + 4, `${fmt(D.shown[n], D.prec)}°`, 'pom-albl pom-halo', 'text-anchor="middle"');
      });
      layer.innerHTML = s;
      handles.forEach((h, n) => h.place(S[n][0], S[n][1]));
      const kinds = root.querySelector('#pt-k');
      if (kind.angle === 'degenerate') {
        kinds.innerHTML = `<span class="pom-chip pom-chip-bad">${esc(t('manipTriDegenerate'))}</span>`;
        math([]);
        out.live(t('manipTriDegenerate'));
        return;
      }
      const ak = t({ acute: 'manipTriAcute', right: 'manipTriRight', obtuse: 'manipTriObtuse' }[kind.angle]);
      const sk = t({ scalene: 'manipTriScalene', isosceles: 'manipTriIsosceles', equilateral: 'manipTriEquilateral' }[kind.side]);
      kinds.innerHTML = `<span class="pom-chip">${esc(ak)}</span><span class="pom-chip">${esc(sk)}</span>`;
      const deg = (v) => `${tex(v, D.prec)}^\\circ`;
      math([`${GREEK_TEX.join(' + ')} = ${D.shown.map(deg).join(' + ')} = 180^\\circ`,
        D.prec ? { txt: t('manipTriRounded') } : '']);
      out.live(`${D.shown.map((v, n) => t('manipTriAngleLive', { g: GREEK[n], v: NAMES[n], deg: fmt(v, D.prec) })).join(', ')}. ${t('manipTriSumLive')} ${t('manipTriKindLive', { a: ak, s: sk })}`);
    }
    draw();
  }

  /* ======================= 5. Pytagorova veta ======================= */
  function pythagoras(root, out) {
    const st = { a: 3, b: 4 };
    const W = 340, H = 340, MG = 14;
    root.innerHTML = `<div class="pom-fig">${svgOpen(W, H, t('manipPythTitle'))}<g class="pom-layer"></g></svg></div>
      <div class="pom-math pom-big" id="pp-m"></div>
      <div class="pom-controls">${range('pp-a', t('manipPythA'), 1, 12, 1, st.a)}${range('pp-b', t('manipPythB'), 1, 12, 1, st.b)}</div>`;
    const layer = root.querySelector('.pom-layer');
    const math = mathSetter(root.querySelector('#pp-m'));
    function draw() {
      const { a, b } = st, R = pyth(a, b);
      // trojuholník s pravým uhlom v C = (0, 0), B = (b, 0), A = (0, a); štvorce von z trojuholníka
      const s = Math.min((W - 2 * MG) / (2 * a + b), (H - 2 * MG) / (a + 2 * b));
      const ox = MG + s * a + ((W - 2 * MG) - s * (2 * a + b)) / 2, oy = MG + s * (a + b) + ((H - 2 * MG) - s * (a + 2 * b)) / 2;
      const P = (x, y) => [ox + s * x, oy - s * y];
      const poly = (pts, cls) => `<polygon class="${cls}" points="${pts.map(([x, y]) => P(x, y).map((v) => v.toFixed(1)).join(',')).join(' ')}"></polygon>`;
      const ln = (p, q, cls) => { const [x1, y1] = P(...p), [x2, y2] = P(...q); return `<line class="${cls}" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"></line>`; };
      let g = '';
      g += poly([[0, 0], [-a, 0], [-a, a], [0, a]], 'pom-p1');
      g += poly([[0, 0], [b, 0], [b, -b], [0, -b]], 'pom-p2');
      g += poly([[b, 0], [0, a], [a, a + b], [a + b, b]], 'pom-p3');
      // jednotkové štvorčeky v štvorcoch nad odvesnami (a nad preponou, ak má celočíselnú dĺžku)
      if (s >= 6) {
        for (let i = 1; i < a; i++) { g += ln([-i, 0], [-i, a], 'pom-cell'); g += ln([0, i], [-a, i], 'pom-cell'); }
        for (let i = 1; i < b; i++) { g += ln([i, 0], [i, -b], 'pom-cell'); g += ln([0, -i], [b, -i], 'pom-cell'); }
        if (R.exact) {
          const c = R.c, u = [-b / c, a / c], n = [a / c, b / c];
          for (let i = 1; i < c; i++) {
            g += ln([b + u[0] * i, u[1] * i], [b + u[0] * i + a, u[1] * i + b], 'pom-cell');
            g += ln([b + n[0] * i, n[1] * i], [n[0] * i, a + n[1] * i], 'pom-cell');
          }
        }
      }
      g += poly([[0, 0], [b, 0], [0, a]], 'pom-tri');
      const k = Math.min(12, s * 0.8);
      const [rx, ry] = P(0, 0);
      g += `<path class="pom-angle" d="M${pt(rx + k, ry)} L${pt(rx + k, ry - k)} L${pt(rx, ry - k)}"></path>`;
      const lab = (x, y, str) => { const [X, Y] = P(x, y); return txt(X, Y + 5, str, 'pom-lbl pom-halo', 'text-anchor="middle"'); };
      g += lab(-a / 2, a / 2, `a² = ${a * a}`);
      g += lab(b / 2, -b / 2, `b² = ${b * b}`);
      g += lab((a + b) / 2, (a + b) / 2, `c² = ${R.c2}`);
      // písmená strán pri stranách trojuholníka
      { const [X, Y] = P(0, a / 2); g += txt(X + 10, Y + 5, 'a', 'f-math'); }
      { const [X, Y] = P(b / 2, 0); g += txt(X, Y - 8, 'b', 'f-math', 'text-anchor="middle"'); }
      { const [X, Y] = P(b / 2, a / 2), [cx, cy] = P(0, 0), l = Math.hypot(X - cx, Y - cy) || 1; g += txt(X - ((X - cx) / l) * 14, Y - ((Y - cy) / l) * 14 + 5, 'c', 'f-math', 'text-anchor="middle"'); }
      layer.innerHTML = g;
      setRange(root, 'pp-a', a); setRange(root, 'pp-b', b);
      const cT = R.exact ? `c = \\sqrt{${R.c2}} = ${R.c}` : `c = \\sqrt{${R.c2}} \\approx ${tex(R.c, 2, true)}`;
      math(['a^2 + b^2 = c^2', `${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${R.c2}`, cT]);
      out.live(t('manipPythLive', { a, b, a2: a * a, b2: b * b, c2: R.c2, c: (R.exact ? '= ' : '≈ ') + fmt(R.c, 2, !R.exact) }));
    }
    onRange(root, 'pp-a', (v) => { st.a = v; draw(); });
    onRange(root, 'pp-b', (v) => { st.b = v; draw(); });
    draw();
  }

  /* ======================= 6. Obvod a obsah obdĺžnika ======================= */
  function perimeter(root, out) {
    const st = { a: 5, b: 3, nums: true };
    const MA = 12, MB = 8, C = 24, OX = 30, OY = 28, W = OX + MA * C + 10, H = OY + MB * C + 10;
    root.innerHTML = `<div class="pom-fig">${svgOpen(W, H, t('manipRectTitle'), true)}<g class="pom-layer"></g></svg></div>
      <p class="muted small">${esc(t('manipRectUnit'))}</p>
      <div class="pom-math pom-big" id="pr-m"></div>
      <div class="pom-controls">${range('pr-a', t('manipRectA'), 1, MA, 1, st.a)}${range('pr-b', t('manipRectB'), 1, MB, 1, st.b)}
        <label class="pom-check"><input type="checkbox" id="pr-n" checked> ${esc(t('manipRectNumbers'))}</label></div>`;
    const svg = root.querySelector('svg'), layer = svg.querySelector('.pom-layer');
    const math = mathSetter(root.querySelector('#pr-m'));
    const handle = makeHandle(svg, {
      attrs: { role: 'button', 'aria-label': t('manipRectCorner') },
      drag: (x, y) => { st.a = Math.round((x - OX) / C); st.b = Math.round((y - OY) / C); draw(); },
      key: (key) => { const d = ARROWS[key]; if (!d) return false; st.a += d[0]; st.b += d[1]; draw(); return true; }
    });
    const oS = t('manipPerimSym'), sS = t('manipAreaSym');
    function draw() {
      st.a = Math.max(1, Math.min(MA, st.a)); st.b = Math.max(1, Math.min(MB, st.b));
      const { a, b } = st, R = rect(a, b);
      let s = '';
      for (let i = 0; i <= MA; i++) s += `<line class="f-grid" x1="${OX + i * C}" y1="${OY}" x2="${OX + i * C}" y2="${OY + MB * C}"></line>`;
      for (let j = 0; j <= MB; j++) s += `<line class="f-grid" x1="${OX}" y1="${OY + j * C}" x2="${OX + MA * C}" y2="${OY + j * C}"></line>`;
      s += `<rect class="pom-p1" x="${OX}" y="${OY}" width="${a * C}" height="${b * C}"></rect>`;
      for (let i = 1; i < a; i++) s += `<line class="pom-cell" x1="${OX + i * C}" y1="${OY}" x2="${OX + i * C}" y2="${OY + b * C}"></line>`;
      for (let j = 1; j < b; j++) s += `<line class="pom-cell" x1="${OX}" y1="${OY + j * C}" x2="${OX + a * C}" y2="${OY + j * C}"></line>`;
      if (st.nums) for (let j = 0; j < b; j++) for (let i = 0; i < a; i++) s += txt(OX + i * C + C / 2, OY + j * C + C / 2 + 4, String(j * a + i + 1), 'pom-num', 'text-anchor="middle"');
      s += `<rect class="pom-perim" x="${OX}" y="${OY}" width="${a * C}" height="${b * C}"></rect>`;
      s += txt(OX + (a * C) / 2, OY - 9, `a = ${a} cm`, 'pom-lbl', 'text-anchor="middle"');
      s += txt(OX - 9, OY + (b * C) / 2, `b = ${b} cm`, 'pom-lbl', `text-anchor="middle" transform="rotate(-90 ${OX - 9} ${OY + (b * C) / 2})"`);
      layer.innerHTML = s;
      handle.place(OX + a * C, OY + b * C);
      setRange(root, 'pr-a', a); setRange(root, 'pr-b', b);
      math([`${oS} = 2\\cdot(a + b) = 2\\cdot(${a} + ${b}) = ${R.o}\\,\\text{cm}`,
        `${sS} = a\\cdot b = ${a}\\cdot ${b} = ${R.S}\\,\\text{cm}^2`,
        R.square ? { txt: t('manipRectSquare') } : '']);
      out.live(`${t('manipRectLive', { a, b, o: R.o, S: R.S })}${R.square ? ` ${t('manipRectSquare')}` : ''}`);
    }
    onRange(root, 'pr-a', (v) => { st.a = v; draw(); });
    onRange(root, 'pr-b', (v) => { st.b = v; draw(); });
    root.querySelector('#pr-n').addEventListener('change', (e) => { st.nums = e.target.checked; draw(); });
    draw();
  }

  /* ======================= 7. Kruh a rozvinutie obvodu ======================= */
  function circleTool(root, out) {
    const st = { r2: 6, u: 0 }; // polomer v polcentimetroch (r = r2 / 2), rozvinutie u v percentách
    const W = 360, H = 170, MG = 14, GY = 96;
    root.innerHTML = `<div class="pom-fig">${svgOpen(W, H, t('manipCircTitle'))}<g class="pom-layer"></g></svg></div>
      <p class="muted small">${esc(t('manipCircPiNote'))}</p>
      <div class="pom-math pom-big" id="pc-m"></div>
      <div class="pom-controls">${range('pc-r', t('manipCircR'), 2, 20, 1, st.r2)}${range('pc-u', t('manipCircUnroll'), 0, 100, 1, 0)}
        <button type="button" class="btn btn-small" id="pc-play">${esc(t('manipCircPlay'))}</button></div>`;
    const layer = root.querySelector('.pom-layer');
    const math = mathSetter(root.querySelector('#pc-m'));
    const oS = t('manipCircumSym'), sS = t('manipAreaSym');
    let anim = 0;
    function draw() {
      const r = st.r2 / 2, R0 = circle(r), u = st.u / 100;
      // mierka: malý kruh v pevnej mierke, väčší sa zmenší, aby sa celý obvod zmestil na šírku
      const s = Math.min(28, (W - 2 * MG) / ((2 * Math.PI + 2) * r)), Rp = r * s;
      const x0 = MG + Rp, L = 2 * Math.PI * Rp, roll = u * L, th = roll / Rp;
      const cx = x0 + roll, cy = GY - Rp;
      let g = `<line class="pom-ground" x1="${x0.toFixed(1)}" y1="${GY}" x2="${(x0 + L).toFixed(1)}" y2="${GY}"></line>`;
      // centimetre na podložke
      const every = s >= 8 ? 1 : 5;
      for (let k = 0; k * s <= L + 0.01; k += every) g += `<line class="f-axis" x1="${(x0 + k * s).toFixed(1)}" y1="${GY}" x2="${(x0 + k * s).toFixed(1)}" y2="${GY + 4}"></line>`;
      // tri priemery pod podložkou: obvod je o niečo viac ako 3 priemery
      for (let i = 0; i < 3; i++) {
        const a = x0 + i * 2 * Rp, b = a + 2 * Rp;
        g += `<path class="${i % 2 ? 'pom-dia2' : 'pom-dia'}" d="M${pt(a + 1, GY + 12)} L${pt(a + 1, GY + 18)} L${pt(b - 1, GY + 18)} L${pt(b - 1, GY + 12)}"></path>`;
        g += txt((a + b) / 2, GY + 32, 'd', 'f-math', 'text-anchor="middle"');
      }
      g += txt(x0 + L, GY + 54, `${oS} ≈ ${fmt(R0.o, 2, true)} cm`, 'pom-lbl', 'text-anchor="end"');
      if (roll > 0) g += `<line class="pom-unrolled" x1="${x0.toFixed(1)}" y1="${GY}" x2="${(x0 + roll).toFixed(1)}" y2="${GY}"></line>`;
      g += `<circle class="pom-disc" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${Rp.toFixed(1)}"></circle>`;
      // zvyšok obvodu, ktorý sa ešte neodvinul (od označeného bodu po bod dotyku)
      if (u <= 0) g += `<circle class="pom-unrolled" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${Rp.toFixed(1)}"></circle>`;
      else if (u < 1) {
        const a1 = Math.PI / 2 + th, a2 = Math.PI / 2 + 2 * Math.PI;
        const large = 2 * Math.PI - th > Math.PI ? 1 : 0;
        g += `<path class="pom-unrolled" d="M${pt(cx + Rp * Math.cos(a1), cy + Rp * Math.sin(a1))} A${Rp.toFixed(1)} ${Rp.toFixed(1)} 0 ${large} 1 ${pt(cx + Rp * Math.cos(a2), cy + Rp * Math.sin(a2))}"></path>`;
      }
      const ma = Math.PI / 2 + th;
      g += `<circle class="pom-res" cx="${(cx + Rp * Math.cos(ma)).toFixed(1)}" cy="${(cy + Rp * Math.sin(ma)).toFixed(1)}" r="4"></circle>`;
      // polomer (otáča sa spolu s kruhom)
      g += `<line class="f-line" x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${(cx + Rp * Math.cos(th)).toFixed(1)}" y2="${(cy + Rp * Math.sin(th)).toFixed(1)}"></line>`;
      g += `<circle class="f-solid" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="2.5"></circle>`;
      g += txt(cx + (Rp / 2) * Math.cos(th) + 7 * Math.sin(th), cy + (Rp / 2) * Math.sin(th) - 7 * Math.cos(th), 'r', 'f-math', 'text-anchor="middle"');
      layer.innerHTML = g;
      setRange(root, 'pc-r', st.r2, `${fmt(r, 1)} cm`);
      setRange(root, 'pc-u', st.u, `${st.u} %`);
      root.querySelector('#pc-play').textContent = t(st.u >= 100 ? 'manipCircRewind' : 'manipCircPlay');
      const rt = tex(r, 1);
      math([`d = 2r = 2\\cdot ${rt} = ${tex(R0.d, 1)}\\,\\text{cm}`,
        `${oS} = 2\\pi r = 2\\cdot\\pi\\cdot ${rt} \\approx ${tex(R0.o, 2, true)}\\,\\text{cm}`,
        `${sS} = \\pi r^2 = \\pi\\cdot ${Number.isInteger(r) ? rt : `\\left(${rt}\\right)`}^2 \\approx ${tex(R0.S, 2, true)}\\,\\text{cm}^2`]);
      out.live(t('manipCircLive', { r: fmt(r, 1), d: fmt(R0.d, 1), o: fmt(R0.o, 2, true), S: fmt(R0.S, 2, true) }));
    }
    const stop = () => { cancelAnimationFrame(anim); anim = 0; };
    onRange(root, 'pc-r', (v) => { st.r2 = v; draw(); });
    onRange(root, 'pc-u', (v) => { stop(); st.u = v; draw(); });
    root.querySelector('#pc-play').addEventListener('click', () => {
      stop();
      if (st.u >= 100) { st.u = 0; draw(); return; }
      const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) { st.u = 100; draw(); return; }
      const from = st.u, t0 = performance.now(), dur = 2500 * (1 - from / 100);
      const step = (now) => {
        if (!document.body.contains(layer)) { anim = 0; return; } // stránka sa medzitým zmenila
        st.u = Math.min(100, Math.round(from + ((now - t0) / dur) * (100 - from)));
        draw();
        anim = st.u < 100 ? requestAnimationFrame(step) : 0;
      };
      anim = requestAnimationFrame(step);
    });
    draw();
  }

  /* ---------- stránky ---------- */
  // rozsah ročníkov, pre ktoré je pomôcka (podľa súvisiacich lekcií)
  function levelsMeta(id) {
    const ls = lessonsFor(id);
    if (!ls.length) return '';
    const first = APP.levelById(ls[0].level), last = APP.levelById(ls[ls.length - 1].level);
    return first === last ? APP.shortLevel(first) : `${APP.shortLevel(first)} – ${APP.shortLevel(last)}`;
  }

  function list() {
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🧮 ${esc(t('manipTitle'))}</h1>
      <p class="muted">${esc(t('manipIntro'))}</p>
      <div class="grid">${TOOLS.map((x) => `<a class="card" href="#/pomocky/${x.id}">
        <div class="theme-icon" aria-hidden="true">${x.icon}</div><h3>${esc(title(x))}</h3>
        <p>${esc(t(`manip${x.key}Desc`))}</p><div class="meta">${esc(levelsMeta(x.id))}</div></a>`).join('')}</div>`);
  }

  function page(id) {
    const tool = toolById(id);
    if (!tool) { list(); return; }
    const ls = lessonsFor(id);
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/pomocky">${esc(t('manipTitle'))}</a></nav>
      <h1>${tool.icon} ${esc(title(tool))}</h1>
      <p class="pom-help">${esc(t(`manip${tool.key}Help`))}</p>
      <div class="pom-tool" id="pom-tool"></div>
      <p class="pom-live" id="pom-live" aria-live="polite" aria-atomic="true"></p>
      ${ls.length ? `<h2>${esc(t('manipRelated'))}</h2><ul class="pom-related">${ls.map((L) => `<li><a href="#/lekcia/${L.id}">${APP.lessonTitle(L)}</a> ${APP.stateBadge(L.id)}</li>`).join('')}</ul>` : ''}
      <nav class="chips pom-others" aria-label="${esc(t('manipOthers'))}">${TOOLS.filter((x) => x !== tool).map((x) => `<a class="btn btn-small" href="#/pomocky/${x.id}">${x.icon} ${esc(title(x))}</a>`).join('')}</nav>`);
    tool.run(document.getElementById('pom-tool'), { live: liveSetter(document.getElementById('pom-live')) });
  }

  window.POMOCKY = { logic, TOOLS, LESSON_TOOLS };
  APP.route('pomocky', (p) => (p[0] ? page(p[0]) : list()));
  APP.addMenu({ href: '#/pomocky', icon: '🧮', key: 'toolsMenu' });
  APP.addLessonPanel((L) => (LESSON_TOOLS[L.id] || []).map(toolById).filter(Boolean)
    .map((x) => `<p class="lesson-link pom-lesson-link"><a href="#/pomocky/${x.id}">🧮 ${esc(t('manipLessonLink', { tool: title(x) }))}</a></p>`).join(''));
})();
