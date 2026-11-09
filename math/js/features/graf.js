/* Graf funkcií (grafická kalkulačka): stránka #/graf a #/graf/<funkcie oddelené ;> (stav sa dá zdieľať odkazom).
   Až 5 funkcií naraz, parametre (každé písmeno okrem x) s posuvníkmi, zoom a posun myšou, prstom aj klávesnicou,
   stopovanie bodu na krivke, významné body (nulové body, priesečník s osou y, lokálne extrémy, priesečníky funkcií)
   a tabuľka hodnôt. V lekciách o funkciách, goniometrii a analýze box „Vyskúšaj v grafe“ s funkciami k lekcii.
   Výpočtové jadro (vzorkovanie, nespojitosti, korene, extrémy) je v GRAF_CORE – dá sa overiť aj v node. */
(function () {
  'use strict';

  /* ---------- výpočtové jadro ---------- */
  const fin = Number.isFinite;

  // Je medzi (x0,y0) a (x1,y1) skok alebo pól? Pri spojitej funkcii sa zmena pri pólení intervalu zmenšuje
  // pod prah lim (pár pixelov), pri skoku (floor, sgn) ani pri póle (tan, 1/x) nie.
  function jump(f, x0, y0, x1, y1, lim) {
    if (Math.abs(y1 - y0) < lim) return false;
    for (let d = 0; d < 48; d++) {
      const xm = (x0 + x1) / 2, ym = f(xm);
      if (!fin(ym)) return true;
      const lo = Math.min(y0, y1), hi = Math.max(y0, y1);
      if (ym < lo - (hi - lo) || ym > hi + (hi - lo)) return true; // stred ďaleko mimo – pól
      // pokračujeme v polovici s väčšou zmenou
      if (Math.abs(ym - y0) > Math.abs(y1 - ym)) { x1 = xm; y1 = ym; } else { x0 = xm; y0 = ym; }
      if (Math.abs(y1 - y0) < lim) return false;
      if (x1 - x0 < 1e-12 * (1 + Math.abs(x0))) break;
    }
    return true;
  }

  // Okraj definičného oboru medzi a (definované) a b (nedefinované) – bisekciou.
  function edge(f, a, b) {
    let ya = f(a);
    for (let k = 0; k < 40; k++) {
      const m = (a + b) / 2, ym = f(m);
      if (fin(ym)) { a = m; ya = ym; } else b = m;
    }
    return fin(ya) ? [a, ya] : null;
  }

  // Vzorkovanie krivky na úseky (lomené čiary) bez zvislých čiar cez asymptoty a bez bodov mimo D(f).
  function segments(f, x0, x1, n, y0, y1) {
    const yr = y1 - y0, lo = y0 - yr, hi = y1 + yr;
    const clamp = (y) => Math.max(lo, Math.min(hi, y));
    const out = [];
    let cur = null, px = NaN, py = NaN;
    const push = (x, y) => { if (!cur) { cur = []; out.push(cur); } cur.push([x, clamp(y)]); };
    for (let i = 0; i <= n; i++) {
      const x = x0 + (x1 - x0) * i / n;
      let y;
      try { y = f(x); } catch (e) { y = NaN; }
      if (!fin(y)) {
        if (fin(py)) { const e = edge(f, px, x); if (e && e[0] > px) push(e[0], e[1]); }
        cur = null;
      } else {
        if (i > 0 && !fin(py)) { const e = edge(f, x, px); if (e && e[0] < x) push(e[0], e[1]); }
        else if (i > 0 && jump(f, px, py, x, y, yr / 200)) cur = null;
        push(x, y);
      }
      px = x; py = y;
    }
    return out;
  }

  function sampleArr(f, x0, x1, n) {
    const xs = [], ys = [];
    for (let i = 0; i <= n; i++) {
      const x = x0 + (x1 - x0) * i / n;
      let y;
      try { y = f(x); } catch (e) { y = NaN; }
      xs.push(x); ys.push(y);
    }
    return { xs, ys };
  }

  function bisect(f, a, b, fa) {
    for (let k = 0; k < 80; k++) {
      const m = (a + b) / 2, fm = f(m);
      if (fm === 0) return m;
      if ((fm < 0) === (fa < 0)) { a = m; fa = fm; } else b = m;
    }
    return (a + b) / 2;
  }

  // Nulové body (zmena znamienka + bisekcia; póly s „preskočením“ znamienka vyradí kontrola |f(r)|).
  function zeros(f, x0, x1, n = 800) {
    const { xs, ys } = sampleArr(f, x0, x1, n);
    const out = [];
    for (let i = 0; i <= n; i++) {
      const y = ys[i];
      if (!fin(y)) continue;
      if (y === 0) {
        // presná nula na vzorke – nie súvislý nulový úsek (identické funkcie)
        if (ys[i - 1] !== 0 && ys[i + 1] !== 0) out.push(xs[i]);
        continue;
      }
      if (i < n && fin(ys[i + 1]) && ys[i + 1] !== 0 && (y < 0) !== (ys[i + 1] < 0)) {
        const r = bisect(f, xs[i], xs[i + 1], y), fr = f(r);
        if (fin(fr) && Math.abs(fr) < 1e-6) out.push(r);
      }
    }
    // dotykové nuly (x², |x|): extrém s hodnotou 0
    extrema(f, x0, x1, n).forEach((e) => { if (Math.abs(e.y) < 1e-9) out.push(e.x); });
    return dedupe(out.sort((a, b) => a - b), (x1 - x0) * 1e-6);
  }

  // Lokálne extrémy: zmena smeru rastu medzi vzorkami, spresnené metódou zlatého rezu.
  function extrema(f, x0, x1, n = 800) {
    const { xs, ys } = sampleArr(f, x0, x1, n);
    const out = [];
    const G = (Math.sqrt(5) - 1) / 2;
    for (let i = 1; i < n; i++) {
      const a = ys[i - 1], b = ys[i], c = ys[i + 1];
      if (!fin(a) || !fin(b) || !fin(c)) continue;
      const d1 = b - a, d2 = c - b;
      let kind = null;
      if (d1 > 0 && d2 < 0) kind = 'max';
      else if (d1 < 0 && d2 > 0) kind = 'min';
      if (!kind) continue;
      const s = kind === 'max' ? -1 : 1; // hľadáme minimum s·f
      let l = xs[i - 1], r = xs[i + 1];
      let m1 = r - G * (r - l), m2 = l + G * (r - l), f1 = s * f(m1), f2 = s * f(m2);
      for (let k = 0; k < 80; k++) {
        if (f1 < f2) { r = m2; m2 = m1; f2 = f1; m1 = r - G * (r - l); f1 = s * f(m1); } else { l = m1; m1 = m2; f1 = f2; m2 = l + G * (r - l); f2 = s * f(m2); }
      }
      const x = (l + r) / 2, y = f(x);
      // pól (1/x²) alebo skok: hodnota ďaleko za susednými vzorkami
      if (!fin(y) || Math.abs(y - b) > 4 * Math.max(Math.abs(d1), Math.abs(d2)) + 1e-9) continue;
      out.push({ x, y, kind });
    }
    return out;
  }

  function dedupe(arr, eps) {
    const out = [];
    arr.forEach((x) => { if (!out.length || Math.abs(x - out[out.length - 1]) > eps) out.push(x); });
    return out;
  }

  // Priesečníky dvoch funkcií = nulové body rozdielu.
  const intersections = (f, g, x0, x1, n) => zeros((x) => f(x) - g(x), x0, x1, n);

  // „Pekný“ krok mriežky: 1, 2, 5 · 10^k, aspoň raw
  function niceStep(raw) {
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    for (const m of [1, 2, 5, 10]) if (m * p >= raw - 1e-12) return m * p;
    return 10 * p;
  }

  window.GRAF_CORE = { segments, zeros, extrema, intersections, jump, niceStep };
  if (!window.APP) return; // v node len jadro

  /* ---------- rozhranie ---------- */
  const { t, esc } = APP;
  const MAX = 5;
  // rozmer plochy (jednotky viewBoxu) sa pri otvorení stránky prispôsobí šírke, aby popisy osí ostali čitateľné aj na mobile
  let W = 640, H = 440;
  let VIEW0 = { cx: 0, cy: 0, s: 20 / W };
  const SUB = ['₁', '₂', '₃', '₄', '₅'];

  // desatinný oddeľovač jazyka rozhrania
  function dec() {
    const l = I18N.getLang();
    let d = '.';
    try { d = CONTENT_I18N.run(l, null, () => CONTENT_I18N.decimal()); } catch (e) { /* bez balíka */ }
    if (d === '.') { try { d = (1.5).toLocaleString(APP.htmlLang ? APP.htmlLang(l) : l).includes(',') ? ',' : '.'; } catch (e) { /* bez Intl */ } }
    return d;
  }
  function fmt(v, d = 2) {
    if (!fin(v)) return '—';
    let r = +v.toFixed(d);
    if (Math.abs(r) < Math.pow(10, -d) / 2) r = 0;
    let s = Math.abs(r) >= 1e15 ? r.toExponential(3) : String(r);
    return s.replace('-', '−').replace('.', dec());
  }
  const pt = (x, y) => t('graphPointFmt', { x: fmt(x), y: fmt(y) });
  const n1 = (v) => Math.round(v * 10) / 10;

  // žiak môže napísať aj „y = …“ alebo „f(x) = …“
  const clean = (src) => String(src || '').replace(/;/g, ',').replace(/^\s*(?:y|f\s*\(\s*x\s*\))\s*=\s*/i, '').trim();

  function parseOne(src) {
    const s = clean(src);
    if (!s) return { src, p: null, err: null };
    try { return { src, p: MATHEXPR.parse(s), err: null }; } catch (e) { return { src, p: null, err: e.key || 'exprUnexpected', pos: (e.pos || 0) + 1 }; }
  }

  /* ---------- prednastavené príklady a funkcie k lekciám ---------- */
  const PRESETS = [
    { key: 'graphPresetLinear', f: ['a*x+b'] },
    { key: 'graphPresetQuadratic', f: ['a(x-m)^2+n'] },
    { key: 'graphPresetSine', f: ['a*sin(b*x+c)', 'sin x'] },
    { key: 'graphPresetExp', f: ['2^x', '(1/2)^x'] },
    { key: 'graphPresetLog', f: ['ln x', 'log x'] },
    { key: 'graphPresetAbs', f: ['|x|', 'a|x-c|+d'] },
    { key: 'graphPresetRecip', f: ['1/x', 'k/(x-c)'] }
  ];

  const LESSON_FUNCS = {
    // funkcie
    'r9-suradnice': ['a*x+b'],
    'r9-funkcie': ['a*x+b', 'k/x'],
    's2-funkcia': ['sqrt(x)', '1/(x-1)'],
    's2-linearna': ['a*x+b', 'k/x'],
    's2-kvadraticka-funkcia': ['a(x-m)^2+n', 'x^2'],
    's2-transformacie': ['|x|', 'a|x-c|+d'],
    's2-mocninove': ['x^n', 'x^2', 'x^3'],
    's2-exponencialne': ['2^x', '(1/2)^x', 'a^x'],
    's2-logaritmy': ['log2(x)', 'ln x', 'log x'],
    's4-zlozene-inverzne': ['2^x', 'log2(x)', 'x'],
    's4-exp-log-rovnice': ['2^x', 'a'],
    's4-mat-funkcie': ['a(x-m)^2+n', 'k*x+q'],
    // goniometria
    'goniometria': ['sin x', 'cos x'],
    's3-jednotkova': ['sin x', 'cos x'],
    's3-grafy': ['a*sin(b*x+c)', 'sin x'],
    's3-vztahy': ['sin(x)^2+cos(x)^2', 'tan x'],
    's3-rovnice': ['sin x', 'a'],
    's4-gonio-rovnice': ['sin(2x)', 'cos x'],
    's4-mat-goniometria': ['a*sin(b*x+c)', 'cos x'],
    // analýza (SŠ aj VŠ)
    's4-limita': ['sin(x)/x', '(x^2-1)/(x-1)'],
    'derivacie': ['x^2', '2a*x-a^2'],
    's4-derivacie-funkcii': ['sin x', 'cos x'],
    's4-extremy': ['x^3-3x', '3x^2-3'],
    's4-priebeh': ['(x^2+1)/(x-1)', 'x+1'],
    'integraly': ['x^2', 'x^3/3'],
    's4-plocha': ['4-x^2', 'x+2'],
    'v2-limita-funkcie': ['sin(x)/x', '(1+1/x)^x'],
    'v2-per-partes': ['x*e^x', '(x-1)e^x'],
    'v2-racionalne': ['1/(x^2+1)', 'atan x'],
    'v2-urcity': ['1/x^2', 'e^(-x^2)'],
    'v2-mocninove': ['1/(1-x)', '1+x+x^2+x^3'],
    'v2-taylor': ['sin x', 'x-x^3/6+x^5/120'],
    'v3-aplikacie': ['5e^(-k*x)'],
    'v3-kmitanie': ['e^(-x/5)cos(2x)', 'e^(-x/5)', '-e^(-x/5)'],
    'v4-normalne': ['e^(-x^2/2)/sqrt(2pi)'],
    'v7-rovnice': ['x^3-2x-5'],
    'v7-interpolacia': ['1/(1+25x^2)']
  };
  const THEME_FUNCS = { funkcie: ['a*x+b', 'x^2'], goniometria: ['sin x', 'cos x'] };

  const link = (list) => '#/graf' + (list.length ? '/' + encodeURIComponent(list.join(';')) : '');

  /* ---------- stav stránky ---------- */
  let S = null;

  function page(parts) {
    let list = [];
    if (parts.length && parts[0]) {
      let raw = parts.join('/');
      try { raw = decodeURIComponent(raw); } catch (e) { /* ponecháme */ }
      list = raw.split(';').map((s) => s.trim()).filter(Boolean).slice(0, MAX);
    }
    if (!list.length) list = ['x^2-2', 'sin x'];
    const oldParams = S ? S.params : {};
    S = {
      funcs: list.map(parseOne), params: oldParams, paramKeys: '',
      view: Object.assign({}, VIEW0), showPts: false, trace: null, raf: 0
    };

    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>📈 ${esc(t('graphTitle'))}</h1>
      <p class="muted">${esc(t('graphIntro'))}</p>
      <div class="chips graf-presets" role="group" aria-label="${esc(t('graphPresets'))}">${PRESETS.map((p, k) =>
        `<button type="button" class="chip graf-chip" data-preset="${k}">${esc(t(p.key))}</button>`).join('')}</div>
      <div id="graf-rows" class="graf-rows"></div>
      <div class="actions graf-actions">
        <button type="button" class="btn btn-small" id="graf-add">＋ ${esc(t('graphAdd'))}</button>
        <button type="button" class="btn btn-small" id="graf-copy">🔗 ${esc(t('graphCopy'))}</button>
      </div>
      <fieldset id="graf-params" class="graf-params" hidden><legend>${esc(t('graphParams'))}</legend><div class="graf-sliders"></div></fieldset>
      <div class="graf-box">
        <div class="graf-toolbar" role="toolbar" aria-label="${esc(t('graphTitle'))}">
          <button type="button" class="btn btn-small" id="graf-zin" aria-label="${esc(t('graphZoomIn'))}" title="${esc(t('graphZoomIn'))}">＋</button>
          <button type="button" class="btn btn-small" id="graf-zout" aria-label="${esc(t('graphZoomOut'))}" title="${esc(t('graphZoomOut'))}">−</button>
          <button type="button" class="btn btn-small" id="graf-reset">⟲ ${esc(t('graphReset'))}</button>
          <label class="graf-toggle"><input type="checkbox" id="graf-pts"> ${esc(t('graphPoints'))}</label>
        </div>
        <svg id="graf-svg" class="graf-svg" viewBox="0 0 ${W} ${H}" role="img" tabindex="0" aria-describedby="graf-keys"></svg>
        <p class="graf-readout" id="graf-readout" aria-live="polite">${esc(t('graphTraceHint'))}</p>
        <p class="muted small" id="graf-keys">${esc(t('graphKeys'))}</p>
      </div>
      <section id="graf-points" class="graf-points" hidden aria-live="polite"></section>
      <details id="graf-tbl" class="graf-tbl"><summary>${esc(t('graphTable'))}</summary>
        <div class="graf-tbl-ctl">
          <label>${esc(t('graphFrom'))} <input type="text" inputmode="decimal" id="graf-tf" value="-5" size="5"></label>
          <label>${esc(t('graphTo'))} <input type="text" inputmode="decimal" id="graf-tt" value="5" size="5"></label>
          <label>${esc(t('graphStep'))} <select id="graf-ts">${[0.1, 0.25, 0.5, 1, 2, 5].map((v) =>
            `<option value="${v}"${v === 1 ? ' selected' : ''}>${fmt(v)}</option>`).join('')}</select></label>
        </div>
        <div class="table-wrap" id="graf-tbody"></div>
      </details>`);

    // šírka plochy podľa obrazovky: na mobile vyššia (skoro štvorcová) plocha
    const box = document.querySelector('.graf-box');
    const w = (box && box.clientWidth) || 640;
    W = Math.round(Math.min(Math.max(w, 300), 760));
    H = Math.round(W < 520 ? W * 0.9 : W * 0.66);
    VIEW0 = { cx: 0, cy: 0, s: 20 / W };
    S.view = Object.assign({}, VIEW0);
    $('graf-svg').setAttribute('viewBox', `0 0 ${W} ${H}`);

    bindPage();
    renderRows();
    update(false);
  }

  const $ = (id) => document.getElementById(id);
  const valid = () => S.funcs.map((F, i) => ({ F, i })).filter((o) => o.F.p);
  const scope = (x) => Object.assign({}, S.params, { x });
  const fnOf = (F) => (x) => F.p.fn(scope(x));

  /* ---------- riadky funkcií ---------- */
  function renderRows() {
    const box = $('graf-rows');
    box.innerHTML = S.funcs.map((F, i) => `<div class="graf-row graf-c${i + 1}">
        <svg class="graf-swatch" viewBox="0 0 28 12" aria-hidden="true"><line class="graf-curve graf-c${i + 1}" x1="2" y1="6" x2="26" y2="6"/></svg>
        <label class="graf-lbl" for="graf-in${i}">f${SUB[i]}(x) =</label>
        <input type="text" id="graf-in${i}" class="graf-in" value="${esc(F.src)}" spellcheck="false" autocomplete="off"
          autocapitalize="off" aria-label="${esc(t('graphFuncLabel', { n: i + 1 }))}" aria-describedby="graf-prev${i}">
        <button type="button" class="btn btn-small graf-del" data-del="${i}" aria-label="${esc(t('graphRemove', { n: i + 1 }))}"
          title="${esc(t('graphRemove', { n: i + 1 }))}"${S.funcs.length < 2 ? ' disabled' : ''}>✕</button>
        <div class="graf-prev" id="graf-prev${i}"></div>
      </div>`).join('');
    S.funcs.forEach((F, i) => renderPrev(i));
    box.querySelectorAll('.graf-in').forEach((inp, i) => inp.addEventListener('input', () => {
      S.funcs[i] = parseOne(inp.value);
      renderPrev(i);
      update(true);
    }));
    box.querySelectorAll('.graf-del').forEach((b) => b.addEventListener('click', () => {
      const i = +b.dataset.del;
      S.funcs.splice(i, 1);
      renderRows();
      update(true);
      const next = $('graf-in' + Math.min(i, S.funcs.length - 1));
      if (next) next.focus();
    }));
    $('graf-add').disabled = S.funcs.length >= MAX;
  }

  function renderPrev(i) {
    const F = S.funcs[i], el = $('graf-prev' + i), inp = $('graf-in' + i);
    if (!el) return;
    inp.setAttribute('aria-invalid', F.err ? 'true' : 'false');
    if (F.err) { el.innerHTML = `<span class="graf-err">⚠ ${esc(t(F.err, { pos: F.pos }))}</span>`; return; }
    el.innerHTML = F.p ? `$f_{${i + 1}}(x) = ${esc(F.p.tex(dec()))}$` : '';
    APP.renderMath(el);
  }

  /* ---------- parametre ---------- */
  function renderParams() {
    const keys = [...new Set(valid().flatMap((o) => o.F.p.vars))].filter((v) => v !== 'x').sort();
    keys.forEach((k) => { if (!(k in S.params)) S.params[k] = 1; });
    const sig = keys.join(',');
    if (sig === S.paramKeys) return;
    S.paramKeys = sig;
    const fs = $('graf-params');
    fs.hidden = !keys.length;
    const box = fs.querySelector('.graf-sliders');
    box.innerHTML = keys.map((k) => `<label class="graf-slider"><span><i class="graf-pname">${esc(k)}</i> = <output id="graf-po-${esc(k)}">${fmt(S.params[k], 1)}</output></span>
        <input type="range" min="-10" max="10" step="0.1" value="${S.params[k]}" data-p="${esc(k)}"
          aria-label="${esc(t('graphParamLabel', { p: k }))}" aria-valuetext="${esc(k)} = ${fmt(S.params[k], 1)}"></label>`).join('');
    box.querySelectorAll('input[type=range]').forEach((r) => r.addEventListener('input', () => {
      const k = r.dataset.p, v = Math.round(parseFloat(r.value) * 10) / 10;
      S.params[k] = v;
      $('graf-po-' + k).textContent = fmt(v, 1);
      r.setAttribute('aria-valuetext', `${k} = ${fmt(v, 1)}`);
      schedule();
    }));
  }

  /* ---------- aktualizácia ---------- */
  function update(hash) {
    renderParams();
    if (hash) {
      const list = S.funcs.map((F) => clean(F.src)).filter(Boolean);
      try { history.replaceState(null, '', link(list)); } catch (e) { /* napr. file:// */ }
    }
    $('graf-add').disabled = S.funcs.length >= MAX;
    schedule();
  }
  function schedule() {
    if (S.raf) return;
    S.raf = requestAnimationFrame(() => { S.raf = 0; draw(); });
  }

  const bounds = () => {
    const v = S.view;
    return { xmin: v.cx - W / 2 * v.s, xmax: v.cx + W / 2 * v.s, ymin: v.cy - H / 2 * v.s, ymax: v.cy + H / 2 * v.s };
  };
  const X = (x) => (x - S.view.cx) / S.view.s + W / 2;
  const Y = (y) => H / 2 - (y - S.view.cy) / S.view.s;

  /* ---------- kreslenie ---------- */
  function draw() {
    const svg = $('graf-svg');
    if (!svg || !S) return;
    const b = bounds();
    const step = niceStep(S.view.s * 55);
    const dd = Math.max(0, -Math.floor(Math.log10(step) + 1e-9));
    let back = '', labels = '';
    const ax = X(0), ay = Y(0);
    for (let k = Math.ceil(b.xmin / step); k * step <= b.xmax; k++) {
      const x = k * step, px = n1(X(x));
      back += `<line class="f-grid" x1="${px}" y1="0" x2="${px}" y2="${H}"/>`;
      if (k !== 0) {
        const ly = Math.min(Math.max(ay + 15, 14), H - 5);
        labels += `<text class="f-small graf-lab" x="${px}" y="${n1(ly)}" text-anchor="middle">${fmt(x, dd)}</text>`;
      }
    }
    for (let k = Math.ceil(b.ymin / step); k * step <= b.ymax; k++) {
      const y = k * step, py = n1(Y(y));
      back += `<line class="f-grid" x1="0" y1="${py}" x2="${W}" y2="${py}"/>`;
      if (k !== 0) {
        const left = ax < 40;
        const lx = left ? Math.max(ax, 0) + 5 : Math.min(ax, W) - 5;
        labels += `<text class="f-small graf-lab" x="${n1(lx)}" y="${n1(py + 4)}" text-anchor="${left ? 'start' : 'end'}">${fmt(y, dd)}</text>`;
      }
    }
    if (ay >= 0 && ay <= H) back += `<line class="f-axis" x1="0" y1="${n1(ay)}" x2="${W}" y2="${n1(ay)}"/><text class="f-math" x="${W - 8}" y="${n1(ay - 7)}" text-anchor="end">x</text>`;
    if (ax >= 0 && ax <= W) back += `<line class="f-axis" x1="${n1(ax)}" y1="0" x2="${n1(ax)}" y2="${H}"/><text class="f-math" x="${n1(ax + 7)}" y="18">y</text>`;
    if (ax >= 0 && ax <= W && ay >= 0 && ay <= H) labels += `<text class="f-small graf-lab" x="${n1(ax - 5)}" y="${n1(ay + 15)}" text-anchor="end">0</text>`;

    let curves = '';
    valid().forEach(({ F, i }) => {
      const segs = segments(fnOf(F), b.xmin, b.xmax, 1000, b.ymin, b.ymax);
      const d = segs.filter((s) => s.length > 0).map((s) => s.map(([x, y], k) => `${k ? 'L' : 'M'}${n1(X(x))} ${n1(Y(y))}`).join('')
        + (s.length === 1 ? 'h0.1' : '')).join('');
      if (d) curves += `<path class="graf-curve graf-c${i + 1}" d="${d}"/>`;
    });

    const pts = S.showPts ? points(b) : [];
    const dots = pts.map((p) => `<circle class="graf-pt graf-pt-${p.type}${p.i !== undefined ? ' graf-c' + (p.i + 1) : ''}" cx="${n1(X(p.x))}" cy="${n1(Y(p.y))}" r="4.5"/>`).join('');

    svg.innerHTML = `<defs><clipPath id="graf-clip"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath></defs>
      <rect class="graf-bg" x="0" y="0" width="${W}" height="${H}"/>${back}
      <g clip-path="url(#graf-clip)">${curves}${dots}</g>${labels}<g id="graf-trace"></g>`;

    const names = valid().map(({ F, i }) => `f${SUB[i]}(x) = ${clean(F.src)}`);
    svg.setAttribute('aria-label', t('graphAria', {
      list: names.length ? names.join('; ') : t('graphNone'),
      x1: fmt(b.xmin, 1), x2: fmt(b.xmax, 1), y1: fmt(b.ymin, 1), y2: fmt(b.ymax, 1)
    }));
    renderPoints(pts);
    if ($('graf-tbl').open) renderTable();
    drawTrace();
  }

  /* ---------- významné body ---------- */
  function points(b) {
    const out = [];
    const inY = (y) => fin(y) && y >= b.ymin && y <= b.ymax;
    const V = valid();
    V.forEach(({ F, i }) => {
      const f = fnOf(F);
      zeros(f, b.xmin, b.xmax).forEach((x) => out.push({ type: 'zero', i, x, y: 0 }));
      if (b.xmin <= 0 && b.xmax >= 0) { const y = f(0); if (inY(y)) out.push({ type: 'yint', i, x: 0, y }); }
      extrema(f, b.xmin, b.xmax).forEach((e) => { if (inY(e.y)) out.push({ type: e.kind, i, x: e.x, y: e.y }); });
    });
    for (let a = 0; a < V.length; a++) {
      for (let c = a + 1; c < V.length; c++) {
        const f = fnOf(V[a].F), g = fnOf(V[c].F);
        intersections(f, g, b.xmin, b.xmax, 600).forEach((x) => {
          const y = f(x);
          if (inY(y)) out.push({ type: 'cross', i: undefined, pair: [V[a].i, V[c].i], x, y });
        });
      }
    }
    return out.slice(0, 80);
  }

  function renderPoints(pts) {
    const sec = $('graf-points');
    sec.hidden = !S.showPts;
    if (!S.showPts) { sec.innerHTML = ''; return; }
    const name = (i) => `f${SUB[i]}`;
    const groups = [
      ['graphZeros', pts.filter((p) => p.type === 'zero')],
      ['graphYInt', pts.filter((p) => p.type === 'yint')],
      ['graphExtrema', pts.filter((p) => p.type === 'min' || p.type === 'max')],
      ['graphIntersections', pts.filter((p) => p.type === 'cross')]
    ].filter((g) => g[1].length);
    sec.innerHTML = `<h2>${esc(t('graphPoints'))}</h2>` + (groups.length
      ? groups.map(([key, list]) => `<h3>${esc(t(key))}</h3><ul class="graf-plist">${list.map((p) => {
        const who = p.type === 'cross' ? `${name(p.pair[0])} ∩ ${name(p.pair[1])}` : name(p.i);
        const kind = p.type === 'min' ? ` – ${t('graphMin')}` : p.type === 'max' ? ` – ${t('graphMax')}` : '';
        const cls = p.type === 'cross' ? '' : ` graf-c${p.i + 1}`;
        return `<li><span class="graf-pmark${cls}" aria-hidden="true"></span>${esc(who)}${esc(kind)}: ${esc(pt(p.x, p.y))}</li>`;
      }).join('')}</ul>`).join('') + `<p class="muted small">${esc(t('graphPointsNote'))}</p>`
      : `<p class="muted">${esc(t('graphNoPoints'))}</p>`);
  }

  /* ---------- tabuľka hodnôt ---------- */
  function renderTable() {
    const num = (id, d) => { const v = parseFloat(String($(id).value).replace(',', '.').replace('−', '-')); return fin(v) ? v : d; };
    let a = num('graf-tf', -5), z = num('graf-tt', 5);
    if (z < a) [a, z] = [z, a];
    const st = parseFloat($('graf-ts').value) || 1;
    const V = valid();
    const LIMIT = 201;
    const count = Math.floor((z - a) / st + 1e-9) + 1;
    const rows = [];
    for (let k = 0; k < Math.min(count, LIMIT); k++) {
      const x = +(a + k * st).toFixed(10);
      rows.push(`<tr><th scope="row">${fmt(x, 4)}</th>${V.map(({ F }) => { const y = fnOf(F)(x); return `<td>${fmt(y, 4)}</td>`; }).join('')}</tr>`);
    }
    $('graf-tbody').innerHTML = V.length ? `<table class="graf-table"><thead><tr><th scope="col">x</th>${V.map(({ i }) =>
      `<th scope="col" class="graf-c${i + 1}"><span class="graf-pmark graf-c${i + 1}" aria-hidden="true"></span>f${SUB[i]}(x)</th>`).join('')}</tr></thead>
      <tbody>${rows.join('')}</tbody></table>${count > LIMIT ? `<p class="muted small">${esc(t('graphTableLimit', { n: LIMIT }))}</p>` : ''}`
      : `<p class="muted">${esc(t('graphNone'))}</p>`;
  }

  /* ---------- stopovanie bodu na krivke ---------- */
  function traceAt(x, py) {
    // funkcia najbližšie k ukazovateľu (v pixeloch)
    let best = null;
    valid().forEach(({ F, i }) => {
      const y = fnOf(F)(x);
      if (!fin(y)) return;
      const d = py === undefined ? 0 : Math.abs(Y(y) - py);
      if (!best || d < best.d) best = { i, d };
    });
    S.trace = { x, i: best ? best.i : (valid()[0] || {}).i };
    drawTrace();
  }

  function drawTrace() {
    const g = $('graf-trace'), out = $('graf-readout');
    if (!g) return;
    const T = S.trace;
    if (!T || T.i === undefined || !S.funcs[T.i] || !S.funcs[T.i].p) { g.innerHTML = ''; return; }
    const F = S.funcs[T.i], y = fnOf(F)(T.x), who = `f${SUB[T.i]}`;
    if (!fin(y)) {
      g.innerHTML = '';
      out.textContent = t('graphUndefined', { f: who, x: fmt(T.x) });
      return;
    }
    const px = n1(X(T.x)), py = n1(Y(y));
    const ax = n1(Math.min(Math.max(X(0), 0), W)), ay = n1(Math.min(Math.max(Y(0), 0), H));
    g.innerHTML = `<line class="graf-guide" x1="${px}" y1="${py}" x2="${px}" y2="${ay}"/><line class="graf-guide" x1="${px}" y1="${py}" x2="${ax}" y2="${py}"/>
      <circle class="graf-tdot graf-c${T.i + 1}" cx="${px}" cy="${py}" r="6"/>`;
    out.textContent = `${who}: ${pt(T.x, y)}`;
  }

  /* ---------- zoom a posun ---------- */
  function zoom(factor, vx = W / 2, vy = H / 2) {
    const v = S.view;
    const gx = v.cx + (vx - W / 2) * v.s, gy = v.cy - (vy - H / 2) * v.s;
    const s = Math.min(Math.max(v.s * factor, 1e-5), 1e3);
    v.cx = gx - (vx - W / 2) * s;
    v.cy = gy + (vy - H / 2) * s;
    v.s = s;
    schedule();
  }

  function bindPage() {
    const svg = $('graf-svg');
    document.querySelectorAll('.graf-chip').forEach((b) => b.addEventListener('click', () => {
      S.funcs = PRESETS[+b.dataset.preset].f.map(parseOne);
      S.view = Object.assign({}, VIEW0);
      S.trace = null;
      renderRows();
      update(true);
    }));
    $('graf-add').addEventListener('click', () => {
      if (S.funcs.length >= MAX) return;
      S.funcs.push(parseOne(''));
      renderRows();
      update(false);
      $('graf-in' + (S.funcs.length - 1)).focus();
    });
    $('graf-copy').addEventListener('click', () => {
      const done = () => APP.toast(esc(t('graphCopied')));
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(location.href).then(done, () => {});
    });
    $('graf-zin').addEventListener('click', () => zoom(1 / 1.5));
    $('graf-zout').addEventListener('click', () => zoom(1.5));
    $('graf-reset').addEventListener('click', () => { S.view = Object.assign({}, VIEW0); schedule(); });
    $('graf-pts').addEventListener('change', (e) => { S.showPts = e.target.checked; schedule(); });
    $('graf-tbl').addEventListener('toggle', () => { if ($('graf-tbl').open) renderTable(); });
    ['graf-tf', 'graf-tt', 'graf-ts'].forEach((id) => $(id).addEventListener('change', renderTable));

    // súradnice ukazovateľa v jednotkách viewBoxu
    const local = (e) => {
      const r = svg.getBoundingClientRect();
      return { x: (e.clientX - r.left) / r.width * W, y: (e.clientY - r.top) / r.height * H };
    };
    const ptrs = new Map();
    let drag = null, pinch = null;

    svg.addEventListener('pointerdown', (e) => {
      svg.setPointerCapture(e.pointerId);
      const p = local(e);
      ptrs.set(e.pointerId, p);
      if (ptrs.size === 1) drag = { p, cx: S.view.cx, cy: S.view.cy, moved: false };
      if (ptrs.size === 2) {
        const [a, b] = [...ptrs.values()];
        const m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) || 1, s: S.view.s, gx: S.view.cx + (m.x - W / 2) * S.view.s, gy: S.view.cy - (m.y - H / 2) * S.view.s };
        drag = null;
      }
    });
    svg.addEventListener('pointermove', (e) => {
      const p = local(e);
      if (!ptrs.has(e.pointerId)) {
        // myš bez stlačeného tlačidla: stopovanie
        if (e.pointerType === 'mouse') traceAt(S.view.cx + (p.x - W / 2) * S.view.s, p.y);
        return;
      }
      ptrs.set(e.pointerId, p);
      if (pinch && ptrs.size === 2) {
        const [a, b] = [...ptrs.values()];
        const m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        const s = Math.min(Math.max(pinch.s * pinch.d / (Math.hypot(a.x - b.x, a.y - b.y) || 1), 1e-5), 1e3);
        S.view.s = s;
        S.view.cx = pinch.gx - (m.x - W / 2) * s;
        S.view.cy = pinch.gy + (m.y - H / 2) * s;
        schedule();
      } else if (drag) {
        const dx = p.x - drag.p.x, dy = p.y - drag.p.y;
        if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
        if (drag.moved) {
          S.view.cx = drag.cx - dx * S.view.s;
          S.view.cy = drag.cy + dy * S.view.s;
          schedule();
        }
      }
    });
    const end = (e) => {
      if (!ptrs.has(e.pointerId)) return;
      const p = local(e);
      // ťuknutie bez posunu: stopovanie (dotyk)
      if (drag && !drag.moved && e.type === 'pointerup') traceAt(S.view.cx + (p.x - W / 2) * S.view.s, p.y);
      ptrs.delete(e.pointerId);
      if (ptrs.size < 2) pinch = null;
      if (!ptrs.size) drag = null;
      else { const q = [...ptrs.values()][0]; drag = { p: q, cx: S.view.cx, cy: S.view.cy, moved: true }; }
    };
    svg.addEventListener('pointerup', end);
    svg.addEventListener('pointercancel', end);
    svg.addEventListener('pointerleave', (e) => {
      if (e.pointerType === 'mouse' && !ptrs.size) { S.trace = null; drawTrace(); }
    });
    svg.addEventListener('wheel', (e) => {
      e.preventDefault();
      const p = local(e);
      zoom(Math.exp(Math.max(-1, Math.min(1, e.deltaY * 0.0015))), p.x, p.y);
    }, { passive: false });

    // klávesnica: šípky posun, +/− zoom, 0/Home pôvodné zobrazenie, Shift+šípky stopovanie
    svg.addEventListener('keydown', (e) => {
      const v = S.view, k = e.key;
      const DIR = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] };
      if (DIR[k] && e.shiftKey) {
        const V = valid();
        if (!V.length) return;
        e.preventDefault();
        if (!S.trace || S.trace.i === undefined || !S.funcs[S.trace.i] || !S.funcs[S.trace.i].p) S.trace = { x: v.cx, i: V[0].i };
        if (DIR[k][0]) {
          const st = niceStep(v.s * 55) / 10;
          S.trace.x = Math.round((S.trace.x + DIR[k][0] * st) / st) * st;
          if (S.trace.x < bounds().xmin || S.trace.x > bounds().xmax) { v.cx += DIR[k][0] * W / 4 * v.s; schedule(); }
        } else {
          const j = V.findIndex((o) => o.i === S.trace.i);
          S.trace.i = V[(j + (DIR[k][1] > 0 ? V.length - 1 : 1)) % V.length].i;
        }
        drawTrace();
        return;
      }
      if (DIR[k]) { e.preventDefault(); v.cx += DIR[k][0] * 40 * v.s; v.cy += DIR[k][1] * 40 * v.s; schedule(); return; }
      if (k === '+' || k === '=') { e.preventDefault(); zoom(1 / 1.25); return; }
      if (k === '-' || k === '_') { e.preventDefault(); zoom(1.25); return; }
      if (k === '0' || k === 'Home') { e.preventDefault(); S.view = Object.assign({}, VIEW0); schedule(); return; }
      if (k === 'Escape') { S.trace = null; drawTrace(); }
    });
  }

  /* ---------- registrácia ---------- */
  APP.route('graf', (parts) => page(parts));
  APP.addMenu({ href: '#/graf', icon: '📈', key: 'graphMenu' });

  APP.addLessonPanel((L) => {
    const th = APP.themeOf(L.id);
    const list = LESSON_FUNCS[L.id] || (th && THEME_FUNCS[th.id]);
    if (!list) return '';
    const d = dec();
    const shown = list.map((s, i) => { try { return `$f_{${i + 1}}(x) = ${esc(MATHEXPR.parse(s).tex(d))}$`; } catch (e) { return ''; } }).filter(Boolean);
    return `<aside class="graf-panel" aria-label="${esc(t('graphTry'))}">
      <h3 class="graf-panel-h">📈 ${esc(t('graphTry'))}</h3>
      <p class="muted small">${esc(t('graphTryDesc'))}</p>
      <p class="graf-panel-f">${shown.join(', ')}</p>
      <a class="btn btn-small" href="${link(list)}">${esc(t('graphOpen'))}</a>
    </aside>`;
  });
})();
