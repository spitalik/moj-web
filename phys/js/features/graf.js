/* Graf meraní: stránka #/graf s dvoma režimami.
   - Merania (#/graf, #/graf/meranie/<ukážka>): tabuľka nameraných hodnôt (x, y) s názvami veličín a jednotkami,
     vloženie z tabuľkového procesora, bodový graf a preloženie závislosti metódou najmenších štvorcov
     (priama a nepriama úmernosť, lineárna, kvadratická, exponenciálna) s parametrami v jednotkách a R².
     Ukážkové merania majú aj fyzikálny výklad (rýchlosť, g, odpor, tuhosť, p·V, časová konštanta, polčas).
   - Funkcia (#/graf/funkcia/<výrazy oddelené ;>): kreslenie funkcií zapísaných cez MATHEXPR s parametrami.
   V lekciách box s odkazom na ukážku k lekcii. Výpočtové jadro je v GRAF_LOGIC – dá sa overiť aj v node. */
(function () {
  'use strict';

  /* ---------- výpočtové jadro ---------- */
  const fin = Number.isFinite;

  // Číslo z bunky: desatinná čiarka aj bodka, znamienko − aj -, exponent 1,5e-3. Prázdna bunka → null, chyba → NaN.
  function parseNum(s) {
    const v = String(s == null ? '' : s).trim().replace(/[−–]/g, '-').replace(/\s+/g, '').replace(',', '.');
    if (!v) return null;
    return /^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(v) ? parseFloat(v) : NaN;
  }

  // „t (s)“, „t [s]“, „t / s“ → { q: 't', u: 's' }
  function splitQty(s) {
    const v = String(s || '').trim();
    let m = v.match(/^(.*?)\s*[([]\s*(.*?)\s*[)\]]\s*$/);
    if (m && m[1]) return { q: m[1], u: m[2] };
    m = v.match(/^(.+?)\s+\/\s+(.+)$/);
    if (m) return { q: m[1], u: m[2] };
    return { q: v, u: '' };
  }

  // Riadok skopírovaný z tabuľkového procesora rozdelí na bunky: tabulátor alebo bodkočiarka, inak medzery,
  // inak čiarka (CSV s desatinnou bodkou, napr. „1.5,2.3“).
  function splitLine(line) {
    let f = line.split(/\t|;/).map((s) => s.trim());
    if (f.filter(Boolean).length >= 2) return f.filter(Boolean);
    f = line.trim().split(/\s+/);
    if (f.length >= 2) return f;
    f = line.split(',').map((s) => s.trim());
    if (f.length >= 2 && f.every((s) => fin(parseNum(s)))) return f;
    return [line.trim()];
  }

  // Text so stĺpcami → { rows: [[x, y]], head: { x: {q,u}, y: {q,u} } | null, bad: počet vynechaných riadkov }.
  // Pri viac ako dvoch stĺpcoch sa berú prvé dva.
  function parseData(text) {
    const lines = String(text || '').replace(/\r/g, '').split('\n').filter((l) => l.trim());
    const rows = [];
    let head = null, bad = 0;
    lines.forEach((line, i) => {
      const f = splitLine(line);
      const a = parseNum(f[0]), b = parseNum(f[1]);
      if (fin(a) && fin(b)) { rows.push([a, b]); return; }
      if (i === 0 && f.length >= 2 && !fin(a) && !fin(b)) { head = { x: splitQty(f[0]), y: splitQty(f[1]) }; return; }
      bad++;
    });
    return { rows, head, bad };
  }

  // Lineárna regresia y = k·x + q
  function linreg(xs, ys) {
    const n = xs.length;
    const mx = xs.reduce((s, v) => s + v, 0) / n, my = ys.reduce((s, v) => s + v, 0) / n;
    let sxx = 0, sxy = 0;
    for (let i = 0; i < n; i++) { sxx += (xs[i] - mx) ** 2; sxy += (xs[i] - mx) * (ys[i] - my); }
    if (!(sxx > 0)) return null;
    const k = sxy / sxx;
    return { k, q: my - k * mx };
  }

  // Koeficient determinácie v pôvodných hodnotách y: R² = 1 − SS_res / SS_tot
  function rsq(pts, f) {
    const my = pts.reduce((s, p) => s + p[1], 0) / pts.length;
    let res = 0, tot = 0;
    pts.forEach(([x, y]) => { res += (y - f(x)) ** 2; tot += (y - my) ** 2; });
    return tot > 0 ? 1 - res / tot : (res === 0 ? 1 : 0);
  }

  // Závislosti: zápis a najmenší počet bodov
  const MODELS = {
    prop: { eq: 'y = k·x', min: 2 },
    lin: { eq: 'y = k·x + q', min: 3 },
    quad: { eq: 'y = a·x²', min: 2 },
    inv: { eq: 'y = k/x', min: 2 },
    exp: { eq: 'y = A·eᵇˣ', min: 3 }
  };
  const MODEL_IDS = Object.keys(MODELS);

  // fit('prop', [[x, y], …]) → { model, p: {parametre}, f(x), r2, n } alebo { error: kľúč, n }
  function fit(model, pts) {
    pts = pts.filter((p) => fin(p[0]) && fin(p[1]));
    const n = pts.length, M = MODELS[model];
    if (!M) return { error: 'graphFitFail', n };
    if (n < M.min) return { error: 'graphNeedPts', n: M.min };
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    let p, f;
    if (model === 'prop') {
      const sxx = xs.reduce((s, x) => s + x * x, 0);
      if (!(sxx > 0)) return { error: 'graphFitFail', n };
      p = { k: xs.reduce((s, x, i) => s + x * ys[i], 0) / sxx };
      f = (x) => p.k * x;
    } else if (model === 'lin') {
      const r = linreg(xs, ys);
      if (!r) return { error: 'graphFitFail', n };
      p = r;
      f = (x) => p.k * x + p.q;
    } else if (model === 'quad') {
      const s4 = xs.reduce((s, x) => s + x ** 4, 0);
      if (!(s4 > 0)) return { error: 'graphFitFail', n };
      p = { a: xs.reduce((s, x, i) => s + x * x * ys[i], 0) / s4 };
      f = (x) => p.a * x * x;
    } else if (model === 'inv') {
      if (xs.some((x) => x === 0)) return { error: 'graphInvZero', n };
      const s = xs.reduce((a, x) => a + 1 / (x * x), 0);
      p = { k: xs.reduce((a, x, i) => a + ys[i] / x, 0) / s };
      f = (x) => p.k / x;
    } else {
      // exponenciála cez logaritmus: ln y = ln A + b·x
      if (ys.some((y) => !(y > 0))) return { error: 'graphExpPos', n };
      const r = linreg(xs, ys.map(Math.log));
      if (!r) return { error: 'graphFitFail', n };
      p = { A: Math.exp(r.q), b: r.k };
      f = (x) => p.A * Math.exp(p.b * x);
    }
    return { model, p, f, r2: rsq(pts, f), n };
  }

  // „Pekný“ krok: 1, 2, 5 · 10^k, aspoň raw
  function niceStep(raw) {
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    for (const m of [1, 2, 5, 10]) if (m * p >= raw * (1 - 1e-9)) return m * p;
    return 10 * p;
  }

  // Rozsah osi pre hodnoty: s nulou, ak nie sú od nuly priďaleko; zarovnaný na pekné dieliky (asi n dielikov).
  function axisRange(vals, n = 6) {
    vals = vals.filter(fin);
    let lo = vals.length ? Math.min(...vals) : 0, hi = vals.length ? Math.max(...vals) : 1;
    if (lo > 0 && lo < 1.5 * (hi - lo)) lo = 0;
    if (hi < 0 && -hi < 1.5 * (hi - lo)) hi = 0;
    if (hi === lo) { const d = Math.abs(lo) * 0.1 || 1; lo -= d; hi += d; }
    const step = niceStep((hi - lo) / n);
    const a = Math.floor(lo / step + 1e-9) * step, b = Math.ceil(hi / step - 1e-9) * step;
    const ticks = [];
    for (let k = Math.round(a / step); k <= Math.round(b / step); k++) ticks.push(+(k * step).toPrecision(12));
    const dd = Math.max(0, -Math.floor(Math.log10(step) + 1e-9));
    return { min: a, max: b, step, ticks, dd };
  }

  /* jednotky parametrov z jednotiek osí */
  // zložená jednotka do zátvorky (časti už v zátvorkách sa nerátajú)
  const wrap = (u) => (/[/·*\s]/.test(u.replace(/\([^()]*\)/g, '')) ? `(${u})` : u);
  const U = {
    div: (a, b) => (!b ? a || '' : !a ? '1/' + wrap(b) : a === b ? '' : wrap(a) + '/' + wrap(b)),
    mul: (a, b) => (a && b ? `${wrap(a)}·${wrap(b)}` : a || b || ''),
    sq: (u) => (!u ? '' : /[²³⁻/·\s]/.test(u) ? `(${u})²` : u + '²'),
    inv: (u) => (u ? '1/' + wrap(u) : '')
  };
  // známe zložené jednotky → jednoduchšie (prevodný faktor 1)
  const SIMPLE = { 'V/A': 'Ω', 'A/V': 'S', 'J/s': 'W', 'W·s': 'J', 'N·m': 'J', 'Pa·m³': 'J', 'kPa·dm³': 'J', 'kPa·l': 'J', 'C/s': 'A', 'V·A': 'W', 'A·V': 'W' };
  const simplify = (u) => SIMPLE[u] || u;

  // Jednotky parametrov závislosti y(x) pri jednotkách osí xu, yu
  function paramUnits(model, xu, yu) {
    if (model === 'prop') return { k: simplify(U.div(yu, xu)) };
    if (model === 'lin') return { k: simplify(U.div(yu, xu)), q: yu };
    if (model === 'quad') return { a: simplify(U.div(yu, U.sq(xu))) };
    if (model === 'inv') return { k: simplify(U.mul(yu, xu)) };
    return { A: yu, b: U.inv(xu) };
  }

  // Číslo na sig platných cifier; veľmi veľké a malé s mocninou 10. tex = zápis pre KaTeX.
  const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  function fmtNum(v, sig, dec, tex) {
    if (!fin(v)) return '—';
    const d = (s) => s.replace('.', tex && dec === ',' ? '{,}' : dec);
    const neg = (s) => (tex ? s : s.replace('-', '−'));
    let p = Number(v.toPrecision(sig));
    if (Object.is(p, -0)) p = 0;
    const a = Math.abs(p);
    if (a !== 0 && (a >= 1e6 || a < 1e-3)) {
      const e = Math.floor(Math.log10(a));
      const m = Number((p / Math.pow(10, e)).toPrecision(sig));
      return neg(tex ? `${d(String(m))} \\cdot 10^{${e}}` : `${d(String(m))}·10${String(e).split('').map((c) => SUP[c]).join('')}`);
    }
    return neg(d(String(p)));
  }

  /* ---------- ukážkové merania (deterministický šum) ---------- */
  function rng(seed) {
    return () => {
      seed = (seed + 0x6D2B79F5) | 0;
      let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }
  const steps = (a, b, s) => { const o = []; for (let k = 0; a + k * s <= b + s / 2; k++) o.push(+(a + k * s).toFixed(6)); return o; };

  // x, y: [veličina, jednotka]; abs/rel: absolútny a relatívny šum; d: počet desatinných miest y; lessons: lekcie s boxom
  const SAMPLES = {
    uniform: { model: 'lin', x: ['t', 's'], y: ['s', 'm'], xs: steps(0, 10, 1), f: (t) => 2 + 1.5 * t, abs: 0.15, d: 2,
      lessons: ['r7-rovnomerny', 'r7-draha', 'r7-pohyb', 's1-pohyb', 'v1-kinematika'] },
    freefall: { model: 'quad', x: ['t', 's'], y: ['s', 'm'], xs: steps(0.1, 0.6, 0.05), f: (t) => 9.81 / 2 * t * t, rel: 0.015, d: 3,
      lessons: ['s1-zrychlenie', 's1-gravitacia', 'r7-tiaz', 'v1-kinematika'] },
    ohm: { model: 'prop', x: ['I', 'A'], y: ['U', 'V'], xs: steps(0.1, 0.8, 0.1), f: (i) => 12 * i, abs: 0.08, d: 2,
      lessons: ['r8-odpor', 'r9-ohmov-zakon', 'r9-vypocty', 's3-prud-napatie', 's3-ohm', 'v3-elektricky-prud'] },
    hooke: { model: 'prop', x: ['Δl', 'm'], y: ['F', 'N'], xs: steps(0.01, 0.08, 0.01), f: (l) => 25 * l, abs: 0.025, d: 2,
      lessons: ['r7-sila', 's1-newton', 'v12-modelovanie'] },
    boyle: { model: 'inv', x: ['V', 'dm³'], y: ['p', 'kPa'], xs: steps(1, 6, 0.5), f: (v) => 200 / v, rel: 0.012, d: 1,
      lessons: ['s1-tlak', 's2-ideal', 'v2-stavove-rovnice', 'v2-kinetika-plynov'] },
    cooling: { model: 'exp', x: ['t', 'min'], y: ['ΔT', '°C'], xs: steps(0, 30, 3), f: (t) => 60 * Math.exp(-0.05 * t), abs: 0.3, d: 1,
      lessons: ['r6-teplo', 'r8-vnutorna-energia', 's2-teplo', 'v12-diferencialne-rovnice'] },
    decay: { model: 'exp', x: ['t', 'h'], y: ['A', 'kBq'], xs: steps(0, 24, 2), f: (t) => 80 * Math.exp(-Math.LN2 / 6 * t), rel: 0.02, d: 1,
      lessons: ['s4-radioaktivita', 'v7-radioaktivita', 'v7-jadro'] }
  };
  const SAMPLE_IDS = Object.keys(SAMPLES);

  function sampleRows(id) {
    const S = SAMPLES[id], r = rng(SAMPLE_IDS.indexOf(id) * 7919 + 17);
    // šum ≈ normálne rozdelenie so smerodajnou odchýlkou 1 (súčet troch rovnomerných)
    const g = () => (r() + r() + r() - 1.5) / 0.5;
    return S.xs.map((x) => {
      const y0 = S.f(x);
      const y = y0 + (S.abs || 0) * g() + (S.rel || 0) * y0 * g();
      return [x, +y.toFixed(S.d)];
    });
  }

  window.GRAF_LOGIC = { parseNum, splitQty, parseData, fit, niceStep, axisRange, units: U, simplify, paramUnits, fmtNum, MODELS, SAMPLES, sampleRows };
  if (!window.APP) return; // v node len jadro

  /* ---------- rozhranie ---------- */
  const { t, esc } = APP;
  const $ = (id) => document.getElementById(id);
  const n1 = (v) => Math.round(v * 10) / 10;
  const STORE_KEY = 'fyzika.graf';

  // desatinný oddeľovač jazyka rozhrania (ako v matematike)
  function dec() {
    const l = I18N.getLang();
    let d = '.';
    try { d = CONTENT_I18N.run(l, null, () => CONTENT_I18N.decimal()); } catch (e) { /* bez balíka */ }
    if (d === '.') { try { d = (1.5).toLocaleString(APP.htmlLang ? APP.htmlLang(l) : l).includes(',') ? ',' : '.'; } catch (e) { /* bez Intl */ } }
    return d;
  }
  const num = (v, sig = 4) => fmtNum(v, sig, dec(), false);
  const texNum = (v, sig = 4) => fmtNum(v, sig, dec(), true);
  const qty = (v, u, sig) => num(v, sig) + (u ? ' ' + u : '');
  // pevný počet desatinných miest (popisy osí, posuvníky)
  function fix(v, d) {
    let r = +v.toFixed(d);
    if (Object.is(r, -0) || Math.abs(r) < Math.pow(10, -d) / 2) r = 0;
    if (Math.abs(r) >= 1e6) return fmtNum(r, 3, dec(), false);
    return String(r).replace('-', '−').replace('.', dec());
  }
  const cell = (v) => (v == null || !fin(v) ? '' : String(v).replace('.', dec()));
  // text pre KaTeX \text{…}
  const texText = (s) => String(s).replace(/[\\{}$&#%_^~]/g, (c) => ({ '\\': '\\backslash ', '~': '\\sim ', '^': '\\hat{}' }[c] || '\\' + c));
  // jednotka v KaTeX: ² a ³ ako exponenty (v \text{} ich KaTeX nemá v písme)
  const texUnit = (u) => (u ? `\\,\\text{${texText(u).replace(/[²³]/g, (c) => `}^{${c === '²' ? 2 : 3}}\\text{`)}}` : '');
  const axisName = (a) => (a.q || '?') + (a.u ? ` (${a.u})` : '');

  /* ---------- režim Merania: stav ---------- */
  let M = null;

  function loadSaved() {
    try {
      const v = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
      if (v && Array.isArray(v.rows) && v.rows.length && v.x && v.y) return v;
    } catch (e) { /* bez úložiska */ }
    return null;
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify({ x: M.x, y: M.y, rows: M.rows, model: M.model, sample: M.sample })); } catch (e) { /* ignorujeme */ }
  }
  function fromSample(id) {
    const S = SAMPLES[id];
    return { x: { q: S.x[0], u: S.x[1] }, y: { q: S.y[0], u: S.y[1] }, rows: sampleRows(id).map(([x, y]) => [cell(x), cell(y)]), model: S.model, sample: id };
  }
  const points = () => M.rows.map((r) => [parseNum(r[0]), parseNum(r[1])]).filter((p) => fin(p[0]) && fin(p[1]));
  const badCells = () => M.rows.reduce((s, r) => s + r.filter((c) => Number.isNaN(parseNum(c))).length, 0);

  function setHash(h) { try { history.replaceState(null, '', h); } catch (e) { /* napr. file:// */ } }

  /* ---------- stránka ---------- */
  function page(parts) {
    const mode = parts[0] === 'funkcia' ? 'fn' : 'data';
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>📈 ${esc(t('graphTitle'))}</h1>
      <div class="view-switch graf-tabs" role="tablist" aria-label="${esc(t('graphTabs'))}">
        ${[['data', 'graphTabData', '#/graf/meranie'], ['fn', 'graphTabFunc', '#/graf/funkcia']].map(([m, key, href]) =>
          `<button type="button" role="tab" id="graf-tab-${m}" class="seg${m === mode ? ' active' : ''}" aria-selected="${m === mode}"
            aria-controls="graf-pane" tabindex="${m === mode ? 0 : -1}" data-href="${href}">${esc(t(key))}</button>`).join('')}
      </div>
      <div id="graf-pane" role="tabpanel" aria-labelledby="graf-tab-${mode}"></div>`);
    const tabs = [...document.querySelectorAll('.graf-tabs .seg')];
    tabs.forEach((b, i) => {
      b.addEventListener('click', () => { if (!b.classList.contains('active')) go(b.dataset.href, b.id); });
      b.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        const o = tabs[(i + 1) % 2];
        go(o.dataset.href, o.id);
      });
    });
    if (mode === 'fn') fnPage(parts.slice(1));
    else dataPage(parts[0] === 'meranie' ? parts[1] : null);
  }
  // prepnutie karty (nová route) a návrat zamerania na kartu
  function go(href, focusId) {
    location.hash = href;
    setTimeout(() => { const el = $(focusId); if (el) el.focus(); }, 0);
  }

  function dataPage(sampleId) {
    if (sampleId && SAMPLES[sampleId]) M = fromSample(sampleId);
    else M = M || loadSaved() || fromSample('uniform');
    if (!sampleId || !SAMPLES[sampleId]) setHash(M.sample ? '#/graf/meranie/' + M.sample : '#/graf/meranie');
    const pane = $('graf-pane');
    pane.innerHTML = `<p class="muted">${esc(t('graphIntro'))}</p>
      <div class="chips graf-samples" role="group" aria-label="${esc(t('graphSamples'))}">${SAMPLE_IDS.map((id) =>
        `<button type="button" class="chip graf-chip" data-sample="${id}" aria-pressed="false">${esc(t('graphSample_' + id))}</button>`).join('')}</div>
      <p class="graf-sdesc" id="graf-sdesc"></p>
      <div class="graf-m">
        <div class="graf-m-data">
          <div class="graf-twrap"><table class="graf-dtable" id="graf-dtable"></table></div>
          <div class="actions graf-actions">
            <button type="button" class="btn btn-small" id="graf-addrow">＋ ${esc(t('graphAddRow'))}</button>
            <button type="button" class="btn btn-small" id="graf-clear">✕ ${esc(t('graphClear'))}</button>
          </div>
          <p class="graf-warn" id="graf-bad" aria-live="polite" hidden></p>
          <details class="graf-paste"><summary>📋 ${esc(t('graphPaste'))}</summary>
            <p class="muted small" id="graf-paste-hint">${esc(t('graphPasteHint'))}</p>
            <textarea id="graf-paste-in" rows="5" spellcheck="false" aria-describedby="graf-paste-hint" aria-label="${esc(t('graphPaste'))}"></textarea>
            <button type="button" class="btn btn-small" id="graf-paste-go">${esc(t('graphPasteBtn'))}</button>
          </details>
        </div>
        <div class="graf-m-plot">
          <label class="graf-model">${esc(t('graphModel'))}
            <select id="graf-model">${MODEL_IDS.map((m) => `<option value="${m}">${esc(t('graphModel_' + m))}: ${MODELS[m].eq}</option>`).join('')}
              <option value="none">${esc(t('graphModel_none'))}</option></select></label>
          <svg id="graf-msvg" class="graf-svg graf-msvg" role="img"></svg>
          <section class="graf-fit" id="graf-fit" aria-live="polite"></section>
        </div>
      </div>`;
    pane.querySelectorAll('.graf-chip').forEach((b) => b.addEventListener('click', () => {
      M = fromSample(b.dataset.sample);
      setHash('#/graf/meranie/' + M.sample);
      renderTable();
      refresh();
    }));
    $('graf-model').addEventListener('change', (e) => { M.model = e.target.value; refresh(); });
    $('graf-addrow').addEventListener('click', () => {
      M.rows.push(['', '']);
      renderTable();
      refresh();
      focusCell(M.rows.length - 1, 0);
    });
    $('graf-clear').addEventListener('click', () => {
      M.rows = [['', ''], ['', ''], ['', '']];
      unSample();
      renderTable();
      refresh();
      focusCell(0, 0);
    });
    $('graf-paste-go').addEventListener('click', () => {
      if (pasteText($('graf-paste-in').value)) $('graf-paste-in').value = '';
    });
    renderTable();
    refresh();
  }

  function unSample() {
    if (!M.sample) return;
    M.sample = null;
    setHash('#/graf/meranie');
  }

  // Vložené dáta nahradia tabuľku; prvý riadok s textom nastaví názvy veličín.
  function pasteText(text) {
    const r = parseData(text);
    if (!r.rows.length) { APP.toast(esc(t('graphPasteNone'))); return false; }
    M.rows = r.rows.map(([x, y]) => [cell(x), cell(y)]);
    if (r.head) { M.x = r.head.x; M.y = r.head.y; }
    unSample();
    renderTable();
    refresh();
    APP.toast(esc(t('graphPasteDone', { n: r.rows.length })));
    return true;
  }

  function focusCell(r, c) {
    const el = document.querySelector(`#graf-dtable input[data-r="${r}"][data-c="${c}"]`);
    if (el) el.focus();
  }

  /* ---------- tabuľka ---------- */
  function renderTable() {
    const tb = $('graf-dtable');
    const head = (ax, key) => `<th scope="col"><span class="graf-axis">${esc(t(key))}</span>
        <span class="graf-qu"><input type="text" class="graf-hin graf-q" data-ax="${ax}" data-f="q" value="${esc(M[ax].q)}" spellcheck="false" autocomplete="off"
          aria-label="${esc(t('graphQtyLabel', { axis: ax }))}"><span aria-hidden="true">(</span><input type="text" class="graf-hin graf-u" data-ax="${ax}" data-f="u"
          value="${esc(M[ax].u)}" spellcheck="false" autocomplete="off" aria-label="${esc(t('graphUnitLabel', { axis: ax }))}"><span aria-hidden="true">)</span></span></th>`;
    tb.innerHTML = `<caption>${esc(t('graphDataTable'))}</caption>
      <thead><tr><th scope="col" class="graf-no">${esc(t('graphRowNo'))}</th>${head('x', 'graphXAxis')}${head('y', 'graphYAxis')}<th scope="col" class="graf-no"><span class="graf-sr">${esc(t('graphDelRowCol'))}</span></th></tr></thead>
      <tbody>${M.rows.map((r, i) => `<tr><th scope="row" class="graf-no">${i + 1}</th>${[0, 1].map((c) =>
        `<td><input type="text" inputmode="decimal" class="graf-cin" data-r="${i}" data-c="${c}" value="${esc(r[c])}" autocomplete="off" spellcheck="false"
          aria-label="${esc(t('graphCellLabel', { q: (c ? M.y.q : M.x.q) || (c ? 'y' : 'x'), n: i + 1 }))}"${Number.isNaN(parseNum(r[c])) ? ' aria-invalid="true"' : ''}></td>`).join('')}
        <td><button type="button" class="btn btn-small graf-del" data-del="${i}" aria-label="${esc(t('graphDelRow', { n: i + 1 }))}"
          title="${esc(t('graphDelRow', { n: i + 1 }))}"${M.rows.length < 2 ? ' disabled' : ''}>✕</button></td></tr>`).join('')}</tbody>`;
    tb.querySelectorAll('.graf-hin').forEach((inp) => inp.addEventListener('input', () => {
      M[inp.dataset.ax][inp.dataset.f] = inp.value.trim();
      unSample();
      refresh();
    }));
    tb.querySelectorAll('.graf-cin').forEach((inp) => {
      inp.addEventListener('input', () => {
        M.rows[+inp.dataset.r][+inp.dataset.c] = inp.value;
        inp.setAttribute('aria-invalid', Number.isNaN(parseNum(inp.value)) ? 'true' : 'false');
        refresh();
      });
      // viac riadkov alebo stĺpcov zo schránky → celá tabuľka
      inp.addEventListener('paste', (e) => {
        const text = (e.clipboardData || window.clipboardData).getData('text');
        if (!/[\n\t;]/.test(text.trim())) return;
        e.preventDefault();
        pasteText(text);
      });
      // Enter → bunka o riadok nižšie (na konci pridá riadok)
      inp.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        const r = +inp.dataset.r, c = +inp.dataset.c;
        if (r === M.rows.length - 1) { M.rows.push(['', '']); renderTable(); refresh(); }
        focusCell(r + 1, c);
      });
    });
    tb.querySelectorAll('.graf-del').forEach((b) => b.addEventListener('click', () => {
      const i = +b.dataset.del;
      M.rows.splice(i, 1);
      renderTable();
      refresh();
      focusCell(Math.min(i, M.rows.length - 1), 0);
    }));
  }

  /* ---------- preloženie, výsledok a graf ---------- */
  function refresh() {
    save();
    document.querySelectorAll('.graf-chip').forEach((b) => {
      const on = b.dataset.sample === M.sample;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    $('graf-sdesc').textContent = M.sample ? t('graphSampleDesc_' + M.sample) : '';
    $('graf-model').value = M.model;
    const bad = badCells();
    $('graf-bad').hidden = !bad;
    $('graf-bad').textContent = bad ? '⚠ ' + t('graphBadCells', { n: bad }) : '';
    const pts = points();
    const F = M.model === 'none' ? null : fit(M.model, pts);
    renderFit(F);
    drawData(F, pts);
  }

  // rovnica s dosadenými parametrami (KaTeX)
  function eqTex(F) {
    const p = F.p, X = `\\text{${texText(M.x.q || 'x')}}`, Y = `\\text{${texText(M.y.q || 'y')}}`;
    if (F.model === 'prop') return `${Y} = ${texNum(p.k)} \\cdot ${X}`;
    if (F.model === 'lin') return `${Y} = ${texNum(p.k)} \\cdot ${X} ${p.q < 0 ? '-' : '+'} ${texNum(Math.abs(p.q))}`;
    if (F.model === 'quad') return `${Y} = ${texNum(p.a)} \\cdot ${X}^2`;
    if (F.model === 'inv') return `${Y} = \\dfrac{${texNum(p.k)}}{${X}}`;
    return `${Y} = ${texNum(p.A)} \\cdot \\mathrm{e}^{${texNum(p.b)} \\cdot ${X}}`;
  }
  // rovnica ako text pre čítačky
  function eqText(F) {
    const p = F.p, y = M.y.q || 'y', x = M.x.q || 'x';
    if (F.model === 'prop') return `${y} = ${num(p.k)} · ${x}`;
    if (F.model === 'lin') return `${y} = ${num(p.k)} · ${x} ${p.q < 0 ? '−' : '+'} ${num(Math.abs(p.q))}`;
    if (F.model === 'quad') return `${y} = ${num(p.a)} · ${x}²`;
    if (F.model === 'inv') return `${y} = ${num(p.k)} / ${x}`;
    return `${y} = ${num(p.A)} · e^(${num(p.b)} · ${x})`;
  }

  // fyzikálny výklad k ukážke (len pri závislosti, ktorú ukážka predpokladá)
  function physText(F) {
    if (!M.sample) return '';
    const S = SAMPLES[M.sample];
    if (!F || F.error || F.model !== S.model) {
      return `<p class="muted small">${esc(t('graphPhysModel', { m: t('graphModel_' + S.model) }))}</p>`;
    }
    const pu = paramUnits(F.model, M.x.u, M.y.u), p = F.p;
    const v = {};
    if (M.sample === 'uniform') { v.k = qty(p.k, pu.k, 3); v.q = qty(p.q, pu.q, 2); }
    if (M.sample === 'freefall') v.g = qty(2 * p.a, pu.a, 3);
    if (M.sample === 'ohm' || M.sample === 'hooke' || M.sample === 'boyle') v.k = qty(p.k, pu.k, 3);
    if (M.sample === 'cooling' || M.sample === 'decay') {
      v.tau = qty(-1 / p.b, M.x.u, 3);
      v.half = qty(Math.LN2 / Math.abs(p.b), M.x.u, 3);
      v.lambda = qty(-p.b, pu.b, 3);
    }
    return `<h3>${esc(t('graphPhys'))}</h3><p>${esc(t('graphPhys_' + M.sample, v))}</p>`;
  }

  function renderFit(F) {
    const box = $('graf-fit');
    if (!F) { box.innerHTML = physText(null); return; }
    if (F.error) { box.innerHTML = `<p class="graf-warn">⚠ ${esc(t(F.error, { n: F.n }))}</p>` + physText(F); return; }
    const pu = paramUnits(F.model, M.x.u, M.y.u);
    const rows = Object.keys(F.p).map((k) => `<li>$${k} = ${texNum(F.p[k])}${texUnit(pu[k])}$</li>`).join('');
    box.innerHTML = `<h2>${esc(t('graphFit'))}</h2>
      <p class="graf-eq">$${eqTex(F)}$</p>
      <ul class="graf-plist">${rows}<li>${esc(t('graphR2'))}: $R^2 = ${texNum(F.r2, 5)}$</li></ul>
      <p class="muted small">${esc(t('graphR2Note'))}</p>${physText(F)}`;
    APP.renderMath(box);
  }

  /* ---------- SVG: bodový graf ---------- */
  function svgSize(svg) {
    const w = (svg.parentNode && svg.parentNode.clientWidth) || 560;
    const W = Math.round(Math.min(Math.max(w, 300), 720));
    return { W, H: Math.round(W < 480 ? W * 0.85 : W * 0.62) };
  }

  function drawData(F, pts) {
    const svg = $('graf-msvg');
    if (!svg) return;
    const { W, H } = svgSize(svg);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const L = 58, R = 16, T = 30, B = 44;
    const ax = axisRange(pts.map((p) => p[0])), ay = axisRange(pts.map((p) => p[1]));
    const X = (x) => L + (x - ax.min) / (ax.max - ax.min) * (W - L - R);
    const Y = (y) => H - B - (y - ay.min) / (ay.max - ay.min) * (H - T - B);
    let g = '';
    ax.ticks.forEach((v) => {
      const px = n1(X(v));
      g += `<line class="${v === 0 ? 'f-axis' : 'f-grid'}" x1="${px}" y1="${T}" x2="${px}" y2="${H - B}"/>
        <text class="f-small" x="${px}" y="${H - B + 16}" text-anchor="middle">${fix(v, ax.dd)}</text>`;
    });
    ay.ticks.forEach((v) => {
      const py = n1(Y(v));
      g += `<line class="${v === 0 ? 'f-axis' : 'f-grid'}" x1="${L}" y1="${py}" x2="${W - R}" y2="${py}"/>
        <text class="f-small" x="${L - 6}" y="${n1(py + 4)}" text-anchor="end">${fix(v, ay.dd)}</text>`;
    });
    g += `<rect class="graf-frame" x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}"/>
      <text class="graf-axlab" x="${W - R}" y="${H - 6}" text-anchor="end">${esc(axisName(M.x))}</text>
      <text class="graf-axlab" x="${L}" y="${T - 10}" text-anchor="middle">${esc(axisName(M.y))}</text>`;
    // preložená krivka (mimo plochy orezaná)
    let curve = '';
    if (F && !F.error) {
      const span = ay.max - ay.min, N = 300;
      let d = '', pen = false;
      for (let i = 0; i <= N; i++) {
        const x = ax.min + (ax.max - ax.min) * i / N, y = F.f(x);
        if (!fin(y)) { pen = false; continue; }
        const yc = Math.max(ay.min - span, Math.min(ay.max + span, y));
        d += `${pen ? 'L' : 'M'}${n1(X(x))} ${n1(Y(yc))}`;
        pen = true;
      }
      curve = `<path class="graf-curve graf-fitline" d="${d}"/>`;
    }
    const dots = pts.map(([x, y]) => `<circle class="graf-dot" cx="${n1(X(x))}" cy="${n1(Y(y))}" r="4.5"/>`).join('');
    svg.innerHTML = `<defs><clipPath id="graf-mclip"><rect x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}"/></clipPath></defs>
      <rect class="graf-bg" x="0" y="0" width="${W}" height="${H}"/>${g}<g clip-path="url(#graf-mclip)">${curve}${dots}</g>`;
    const fitTxt = F && !F.error ? ' ' + t('graphAriaFit', { eq: eqText(F), r2: num(F.r2, 5) }) : '';
    svg.setAttribute('aria-label', t('graphAriaData', { y: axisName(M.y), x: axisName(M.x), n: pts.length }) + fitTxt);
  }

  /* ---------- režim Funkcia (zjednodušený graf z matematiky) ---------- */
  const MAX = 4;
  const SUB = ['₁', '₂', '₃', '₄'];
  const FN_PRESETS = ['v*x+s', 'g/2*x^2', 'k/x', 'A*e^(-b*x)', 'A*sin(w*x)'];
  let FS = null, FW = 640, FH = 440;

  // jump/segments: kreslenie bez zvislých čiar cez póly a skoky (ako GRAF_CORE v matematike)
  function jump(f, x0, y0, x1, y1, lim) {
    if (Math.abs(y1 - y0) < lim) return false;
    for (let d = 0; d < 48; d++) {
      const xm = (x0 + x1) / 2, ym = f(xm);
      if (!fin(ym)) return true;
      const lo = Math.min(y0, y1), hi = Math.max(y0, y1);
      if (ym < lo - (hi - lo) || ym > hi + (hi - lo)) return true;
      if (Math.abs(ym - y0) > Math.abs(y1 - ym)) { x1 = xm; y1 = ym; } else { x0 = xm; y0 = ym; }
      if (Math.abs(y1 - y0) < lim) return false;
      if (x1 - x0 < 1e-12 * (1 + Math.abs(x0))) break;
    }
    return true;
  }
  function segments(f, x0, x1, n, y0, y1) {
    const yr = y1 - y0, lo = y0 - yr, hi = y1 + yr;
    const out = [];
    let cur = null, px = NaN, py = NaN;
    for (let i = 0; i <= n; i++) {
      const x = x0 + (x1 - x0) * i / n;
      let y;
      try { y = f(x); } catch (e) { y = NaN; }
      if (!fin(y)) cur = null;
      else {
        if (i > 0 && fin(py) && jump(f, px, py, x, y, yr / 200)) cur = null;
        if (!cur) { cur = []; out.push(cur); }
        cur.push([x, Math.max(lo, Math.min(hi, y))]);
      }
      px = x; py = y;
    }
    return out;
  }

  const clean = (src) => String(src || '').replace(/;/g, ',').replace(/^\s*(?:y|f\s*\(\s*x\s*\))\s*=\s*/i, '').trim();
  function parseOne(src) {
    const s = clean(src);
    if (!s) return { src, p: null, err: null };
    try { return { src, p: MATHEXPR.parse(s), err: null }; } catch (e) { return { src, p: null, err: e.key || 'exprUnexpected', pos: (e.pos || 0) + 1 }; }
  }
  const fnLink = (list) => '#/graf/funkcia' + (list.length ? '/' + encodeURIComponent(list.join(';')) : '');

  function fnPage(parts) {
    let list = [];
    if (parts.length && parts[0]) {
      let raw = parts.join('/');
      try { raw = decodeURIComponent(raw); } catch (e) { /* ponecháme */ }
      list = raw.split(';').map((s) => s.trim()).filter(Boolean).slice(0, MAX);
    }
    if (!list.length) list = ['v*x+s', 'g/2*x^2'];
    const old = FS ? FS.params : { v: 2, s: 1, g: 9.8, k: 4, A: 5, b: 0.5, w: 2 };
    FS = { funcs: list.map(parseOne), params: old, keys: '', view: null, raf: 0 };
    const pane = $('graf-pane');
    pane.innerHTML = `<p class="muted">${esc(t('graphFnIntro'))}</p>
      <div class="chips graf-presets" role="group" aria-label="${esc(t('graphPresets'))}">${FN_PRESETS.map((f, k) =>
        `<button type="button" class="chip graf-chip graf-fchip" data-preset="${k}">${esc(f)}</button>`).join('')}</div>
      <div id="graf-rows" class="graf-rows"></div>
      <div class="actions graf-actions">
        <button type="button" class="btn btn-small" id="graf-add">＋ ${esc(t('graphAdd'))}</button>
        <button type="button" class="btn btn-small" id="graf-copy">🔗 ${esc(t('graphCopy'))}</button>
      </div>
      <fieldset id="graf-params" class="graf-params" hidden><legend>${esc(t('graphParams'))}</legend><div class="graf-sliders"></div></fieldset>
      <div class="graf-box">
        <div class="graf-toolbar" role="toolbar" aria-label="${esc(t('graphTabFunc'))}">
          <button type="button" class="btn btn-small" id="graf-zin" aria-label="${esc(t('graphZoomIn'))}" title="${esc(t('graphZoomIn'))}">＋</button>
          <button type="button" class="btn btn-small" id="graf-zout" aria-label="${esc(t('graphZoomOut'))}" title="${esc(t('graphZoomOut'))}">−</button>
          <button type="button" class="btn btn-small" id="graf-reset">⟲ ${esc(t('graphReset'))}</button>
        </div>
        <svg id="graf-svg" class="graf-svg graf-fsvg" role="img" tabindex="0" aria-describedby="graf-keys"></svg>
        <p class="graf-readout" id="graf-readout" aria-live="polite">${esc(t('graphTraceHint'))}</p>
        <p class="muted small" id="graf-keys">${esc(t('graphFnKeys'))}</p>
      </div>`;
    const svg = $('graf-svg');
    FW = svgSize(svg).W;
    FH = Math.round(FW < 480 ? FW * 0.9 : FW * 0.66);
    svg.setAttribute('viewBox', `0 0 ${FW} ${FH}`);
    FS.view = view0();
    bindFn();
    renderRows();
    fnUpdate(false);
  }
  const view0 = () => ({ cx: 0, cy: 0, s: 20 / FW });
  const valid = () => FS.funcs.map((F, i) => ({ F, i })).filter((o) => o.F.p);
  const fnOf = (F) => (x) => F.p.fn(Object.assign({}, FS.params, { x }));

  function renderRows() {
    const box = $('graf-rows');
    box.innerHTML = FS.funcs.map((F, i) => `<div class="graf-row graf-c${i + 1}">
        <svg class="graf-swatch" viewBox="0 0 28 12" aria-hidden="true"><line class="graf-curve graf-c${i + 1}" x1="2" y1="6" x2="26" y2="6"/></svg>
        <label class="graf-lbl" for="graf-in${i}">f${SUB[i]}(x) =</label>
        <input type="text" id="graf-in${i}" class="graf-in" value="${esc(F.src)}" spellcheck="false" autocomplete="off"
          autocapitalize="off" aria-label="${esc(t('graphFuncLabel', { n: i + 1 }))}" aria-describedby="graf-prev${i}">
        <button type="button" class="btn btn-small graf-del" data-del="${i}" aria-label="${esc(t('graphRemove', { n: i + 1 }))}"
          title="${esc(t('graphRemove', { n: i + 1 }))}"${FS.funcs.length < 2 ? ' disabled' : ''}>✕</button>
        <div class="graf-prev" id="graf-prev${i}"></div>
      </div>`).join('');
    FS.funcs.forEach((F, i) => renderPrev(i));
    box.querySelectorAll('.graf-in').forEach((inp, i) => inp.addEventListener('input', () => {
      FS.funcs[i] = parseOne(inp.value);
      renderPrev(i);
      fnUpdate(true);
    }));
    box.querySelectorAll('.graf-del').forEach((b) => b.addEventListener('click', () => {
      const i = +b.dataset.del;
      FS.funcs.splice(i, 1);
      renderRows();
      fnUpdate(true);
      const next = $('graf-in' + Math.min(i, FS.funcs.length - 1));
      if (next) next.focus();
    }));
  }

  function renderPrev(i) {
    const F = FS.funcs[i], el = $('graf-prev' + i), inp = $('graf-in' + i);
    if (!el) return;
    inp.setAttribute('aria-invalid', F.err ? 'true' : 'false');
    if (F.err) { el.innerHTML = `<span class="graf-err">⚠ ${esc(t(F.err, { pos: F.pos }))}</span>`; return; }
    el.innerHTML = F.p ? `$f_{${i + 1}}(x) = ${esc(F.p.tex(dec()))}$` : '';
    APP.renderMath(el);
  }

  function renderParams() {
    const keys = [...new Set(valid().flatMap((o) => o.F.p.vars))].filter((v) => v !== 'x').sort();
    keys.forEach((k) => { if (!(k in FS.params)) FS.params[k] = 1; });
    const sig = keys.join(',');
    if (sig === FS.keys) return;
    FS.keys = sig;
    const fs = $('graf-params');
    fs.hidden = !keys.length;
    const box = fs.querySelector('.graf-sliders');
    box.innerHTML = keys.map((k) => `<label class="graf-slider"><span><i class="graf-pname">${esc(k)}</i> = <output id="graf-po-${esc(k)}">${fix(FS.params[k], 1)}</output></span>
        <input type="range" min="-10" max="10" step="0.1" value="${FS.params[k]}" data-p="${esc(k)}"
          aria-label="${esc(t('graphParamLabel', { p: k }))}" aria-valuetext="${esc(k)} = ${fix(FS.params[k], 1)}"></label>`).join('');
    box.querySelectorAll('input[type=range]').forEach((r) => r.addEventListener('input', () => {
      const k = r.dataset.p, v = Math.round(parseFloat(r.value) * 10) / 10;
      FS.params[k] = v;
      $('graf-po-' + k).textContent = fix(v, 1);
      r.setAttribute('aria-valuetext', `${k} = ${fix(v, 1)}`);
      schedule();
    }));
  }

  function fnUpdate(hash) {
    renderParams();
    if (hash) setHash(fnLink(FS.funcs.map((F) => clean(F.src)).filter(Boolean)));
    $('graf-add').disabled = FS.funcs.length >= MAX;
    schedule();
  }
  function schedule() {
    if (FS.raf) return;
    FS.raf = requestAnimationFrame(() => { FS.raf = 0; drawFn(); });
  }

  const bounds = () => {
    const v = FS.view;
    return { xmin: v.cx - FW / 2 * v.s, xmax: v.cx + FW / 2 * v.s, ymin: v.cy - FH / 2 * v.s, ymax: v.cy + FH / 2 * v.s };
  };
  const FX = (x) => (x - FS.view.cx) / FS.view.s + FW / 2;
  const FY = (y) => FH / 2 - (y - FS.view.cy) / FS.view.s;

  function drawFn() {
    const svg = $('graf-svg');
    if (!svg || !FS) return;
    const b = bounds();
    const step = niceStep(FS.view.s * 55);
    const dd = Math.max(0, -Math.floor(Math.log10(step) + 1e-9));
    let back = '', labels = '';
    const ax = FX(0), ay = FY(0);
    for (let k = Math.ceil(b.xmin / step); k * step <= b.xmax; k++) {
      const px = n1(FX(k * step));
      back += `<line class="f-grid" x1="${px}" y1="0" x2="${px}" y2="${FH}"/>`;
      if (k) labels += `<text class="f-small graf-lab" x="${px}" y="${n1(Math.min(Math.max(ay + 15, 14), FH - 5))}" text-anchor="middle">${fix(k * step, dd)}</text>`;
    }
    for (let k = Math.ceil(b.ymin / step); k * step <= b.ymax; k++) {
      const py = n1(FY(k * step));
      back += `<line class="f-grid" x1="0" y1="${py}" x2="${FW}" y2="${py}"/>`;
      if (k) {
        const left = ax < 40;
        labels += `<text class="f-small graf-lab" x="${n1(left ? Math.max(ax, 0) + 5 : Math.min(ax, FW) - 5)}" y="${n1(py + 4)}" text-anchor="${left ? 'start' : 'end'}">${fix(k * step, dd)}</text>`;
      }
    }
    if (ay >= 0 && ay <= FH) back += `<line class="f-axis" x1="0" y1="${n1(ay)}" x2="${FW}" y2="${n1(ay)}"/><text class="f-math" x="${FW - 8}" y="${n1(ay - 7)}" text-anchor="end">x</text>`;
    if (ax >= 0 && ax <= FW) back += `<line class="f-axis" x1="${n1(ax)}" y1="0" x2="${n1(ax)}" y2="${FH}"/><text class="f-math" x="${n1(ax + 7)}" y="18">y</text>`;
    let curves = '';
    valid().forEach(({ F, i }) => {
      const d = segments(fnOf(F), b.xmin, b.xmax, 800, b.ymin, b.ymax)
        .map((s) => s.map(([x, y], k) => `${k ? 'L' : 'M'}${n1(FX(x))} ${n1(FY(y))}`).join('') + (s.length === 1 ? 'h0.1' : '')).join('');
      if (d) curves += `<path class="graf-curve graf-c${i + 1}" d="${d}"/>`;
    });
    svg.innerHTML = `<defs><clipPath id="graf-clip"><rect x="0" y="0" width="${FW}" height="${FH}"/></clipPath></defs>
      <rect class="graf-bg" x="0" y="0" width="${FW}" height="${FH}"/>${back}<g clip-path="url(#graf-clip)">${curves}</g>${labels}<g id="graf-trace"></g>`;
    const names = valid().map(({ F, i }) => `f${SUB[i]}(x) = ${clean(F.src)}`);
    svg.setAttribute('aria-label', t('graphAria', {
      list: names.length ? names.join('; ') : t('graphNone'),
      x1: fix(b.xmin, 1), x2: fix(b.xmax, 1), y1: fix(b.ymin, 1), y2: fix(b.ymax, 1)
    }));
  }

  // stopovanie: bod na krivke najbližšej k ukazovateľu
  function traceAt(x, py) {
    let best = null;
    valid().forEach(({ F, i }) => {
      const y = fnOf(F)(x);
      if (fin(y) && (!best || Math.abs(FY(y) - py) < best.d)) best = { i, y, d: Math.abs(FY(y) - py) };
    });
    const g = $('graf-trace'), out = $('graf-readout');
    if (!g) return;
    if (!best) {
      g.innerHTML = '';
      const V = valid();
      if (V.length) out.textContent = t('graphUndefined', { f: 'f' + SUB[V[0].i], x: fix(x, 2) });
      return;
    }
    g.innerHTML = `<circle class="graf-tdot graf-c${best.i + 1}" cx="${n1(FX(x))}" cy="${n1(FY(best.y))}" r="6"/>`;
    out.textContent = `f${SUB[best.i]}: ${t('graphPointFmt', { x: fix(x, 2), y: fix(best.y, 2) })}`;
  }

  function zoom(factor, vx = FW / 2, vy = FH / 2) {
    const v = FS.view;
    const gx = v.cx + (vx - FW / 2) * v.s, gy = v.cy - (vy - FH / 2) * v.s;
    const s = Math.min(Math.max(v.s * factor, 1e-5), 1e3);
    v.cx = gx - (vx - FW / 2) * s;
    v.cy = gy + (vy - FH / 2) * s;
    v.s = s;
    schedule();
  }

  function bindFn() {
    const svg = $('graf-svg');
    document.querySelectorAll('.graf-fchip').forEach((b) => b.addEventListener('click', () => {
      FS.funcs = [parseOne(FN_PRESETS[+b.dataset.preset])];
      FS.view = view0();
      renderRows();
      fnUpdate(true);
    }));
    $('graf-add').addEventListener('click', () => {
      if (FS.funcs.length >= MAX) return;
      FS.funcs.push(parseOne(''));
      renderRows();
      fnUpdate(false);
      $('graf-in' + (FS.funcs.length - 1)).focus();
    });
    $('graf-copy').addEventListener('click', () => {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(location.href).then(() => APP.toast(esc(t('graphCopied'))), () => {});
    });
    $('graf-zin').addEventListener('click', () => zoom(1 / 1.5));
    $('graf-zout').addEventListener('click', () => zoom(1.5));
    $('graf-reset').addEventListener('click', () => { FS.view = view0(); schedule(); });

    const local = (e) => { const r = svg.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width * FW, y: (e.clientY - r.top) / r.height * FH }; };
    let drag = null;
    svg.addEventListener('pointerdown', (e) => {
      svg.setPointerCapture(e.pointerId);
      drag = { p: local(e), cx: FS.view.cx, cy: FS.view.cy, moved: false };
    });
    svg.addEventListener('pointermove', (e) => {
      const p = local(e);
      if (!drag) { if (e.pointerType === 'mouse') traceAt(FS.view.cx + (p.x - FW / 2) * FS.view.s, p.y); return; }
      const dx = p.x - drag.p.x, dy = p.y - drag.p.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
      if (drag.moved) { FS.view.cx = drag.cx - dx * FS.view.s; FS.view.cy = drag.cy + dy * FS.view.s; schedule(); }
    });
    const end = (e) => {
      if (drag && !drag.moved && e.type === 'pointerup') { const p = local(e); traceAt(FS.view.cx + (p.x - FW / 2) * FS.view.s, p.y); }
      drag = null;
    };
    svg.addEventListener('pointerup', end);
    svg.addEventListener('pointercancel', end);
    svg.addEventListener('wheel', (e) => {
      e.preventDefault();
      const p = local(e);
      zoom(Math.exp(Math.max(-1, Math.min(1, e.deltaY * 0.0015))), p.x, p.y);
    }, { passive: false });
    // klávesnica: šípky posun, +/− zoom, 0/Home pôvodné zobrazenie
    svg.addEventListener('keydown', (e) => {
      const v = FS.view, k = e.key;
      const DIR = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] };
      if (DIR[k]) { e.preventDefault(); v.cx += DIR[k][0] * 40 * v.s; v.cy += DIR[k][1] * 40 * v.s; schedule(); return; }
      if (k === '+' || k === '=') { e.preventDefault(); zoom(1 / 1.25); return; }
      if (k === '-' || k === '_') { e.preventDefault(); zoom(1.25); return; }
      if (k === '0' || k === 'Home') { e.preventDefault(); FS.view = view0(); schedule(); }
    });
  }

  /* ---------- registrácia ---------- */
  APP.route('graf', (parts) => page(parts));
  APP.addMenu({ href: '#/graf', icon: '📈', key: 'graphMenu' });

  // box v lekcii: ukážkové merania k lekcii (podľa SAMPLES[…].lessons)
  APP.addLessonPanel((L) => {
    const ids = SAMPLE_IDS.filter((id) => SAMPLES[id].lessons.includes(L.id));
    if (!ids.length) return '';
    return `<aside class="graf-panel" aria-label="${esc(t('graphTry'))}">
      <h3 class="graf-panel-h">📈 ${esc(t('graphTry'))}</h3>
      <p class="muted small">${esc(t('graphTryDesc'))}</p>
      <p class="graf-panel-links">${ids.map((id) => `<a class="btn btn-small" href="#/graf/meranie/${id}">${esc(t('graphSample_' + id))}</a>`).join(' ')}</p>
    </aside>`;
  });
})();
