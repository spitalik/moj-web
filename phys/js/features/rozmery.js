/* Rozmerová analýza: stránka #/rozmery (#/rozmery/<príklad>).
   1. Vzťah s veličinami (napr. E = m*c^2): výraz parsuje MATHEXPR, žiak priradí veličinám jednotky (m → kg, c → m/s),
      stránka ukáže rozmer oboch strán v základných jednotkách SI, odvodenú jednotku s menom a či sa rozmery zhodujú;
      pri nezhode tabuľku rozdielu exponentov. Sčítanie veličín rôzneho rozmeru a funkcia s rozmerným argumentom sú chyby.
   2. Porovnanie jednotiek (napr. kg·m²/s² = J) priamo cez JEDNOTKY.parse.
   Čistá logika je vo window.ROZMERY_LOGIC (testy v node). Box v lekciách o jednotkách a vybraných vzťahoch. */
(function () {
  'use strict';

  const ZERO = [0, 0, 0, 0, 0, 0, 0];
  const add = (a, b, k = 1) => a.map((x, i) => x + k * b[i]);
  const scale = (a, k) => a.map((x) => x * k);
  const isZero = (a) => a.every((x) => Math.abs(x) < 1e-9);
  const same = (a, b) => isZero(add(a, b, -1));

  // rozmer ako obyčajný text pre hlášky: kg·m²·s⁻²
  const SUPC = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  function dimPlain(d) {
    const out = [1, 0, 2, 3, 4, 5, 6].filter((i) => Math.abs(d[i]) > 1e-9).map((i) => {
      const e = Math.round(d[i] * 1000) / 1000;
      return JEDNOTKY.BASE[i] + (e === 1 ? '' : Number.isInteger(e) ? String(e).split('').map((c) => SUPC[c]).join('') : '^' + e);
    });
    return out.length ? out.join('·') : '1';
  }

  class DimError extends Error {
    constructor(key, vars) { super(key); this.key = key; this.vars = vars || {}; }
  }

  /* ---------- logika ---------- */
  // rozmer uzla stromu MATHEXPR; dims: názov veličiny → rozmer (pole 7 čísel)
  function dimOf(n, dims) {
    switch (n.k) {
      case 'num': case 'const': return ZERO.slice();
      case 'var':
        if (!dims[n.v]) throw new DimError('dimNoUnit', { v: n.v });
        return dims[n.v];
      case 'group': return dimOf(n.a, dims);
      case 'neg': return dimOf(n.a, dims);
      case 'add': case 'sub': {
        const a = dimOf(n.a, dims), b = dimOf(n.b, dims);
        if (!same(a, b)) throw new DimError('dimAddMismatch', { a: dimPlain(a), b: dimPlain(b) });
        return a;
      }
      case 'mul': return add(dimOf(n.a, dims), dimOf(n.b, dims));
      case 'div': return add(dimOf(n.a, dims), dimOf(n.b, dims), -1);
      case 'pow': {
        const base = dimOf(n.a, dims), e = dimOf(n.b, dims);
        if (!isZero(e)) throw new DimError('dimPowUnit');
        if (isZero(base)) return ZERO.slice();
        // exponent rozmernej veličiny musí byť číslo (x^2, x^(1/2)), nie premenná
        const k = MATHEXPR.fromAst(n.b).fn({});
        if (!Number.isFinite(k)) throw new DimError('dimPowVar');
        return scale(base, k);
      }
      case 'fact': {
        if (!isZero(dimOf(n.a, dims))) throw new DimError('dimFnArg', { f: '!' });
        return ZERO.slice();
      }
      case 'fn': {
        const a = dimOf(n.a, dims);
        if (n.f === 'sqrt') return scale(a, 1 / 2);
        if (n.f === 'cbrt') return scale(a, 1 / 3);
        if (n.f === 'abs') return a;
        if (!isZero(a)) throw new DimError('dimFnArg', { f: n.f });
        return ZERO.slice();
      }
      default: return ZERO.slice();
    }
  }

  // vzťah s jednotkami veličín: src = 'E = m*c^2', units = { E: 'J', m: 'kg', c: 'm/s' }
  // → { ok, vars, sides: [{ dim, tex, named }], match, diff } | { ok: false, error: { key, vars }, vars }
  function analyze(src, units) {
    let rel;
    try { rel = MATHEXPR.relation(src); } catch (e) {
      if (e instanceof MATHEXPR.Error) return { ok: false, error: { key: e.key, vars: { pos: e.pos + 1 } }, vars: [] };
      throw e;
    }
    const vars = rel.op ? rel.vars : rel.expr.vars;
    const dims = {};
    for (const v of vars) {
      const u = units[v];
      if (u === undefined || String(u).trim() === '') continue;
      const r = JEDNOTKY.parse(u);
      if (!r.ok) return { ok: false, error: { key: r.error, vars: { u: r.u || u, v } }, vars, bad: v };
      dims[v] = r.dim;
    }
    const parts = rel.op ? [rel.left, rel.right] : [rel.expr];
    try {
      const sides = parts.map((p) => {
        const dim = dimOf(p.ast, dims);
        return { dim, dimTex: JEDNOTKY.dimText(dim), named: JEDNOTKY.named(dim), tex: p.tex(',') };
      });
      const res = { ok: true, vars, sides, op: rel.op };
      if (sides.length === 2) {
        res.match = same(sides[0].dim, sides[1].dim);
        res.diff = diffRows(sides[0].dim, sides[1].dim);
      }
      return res;
    } catch (e) {
      if (e instanceof DimError) return { ok: false, error: { key: e.key, vars: e.vars }, vars };
      throw e;
    }
  }

  // porovnanie dvoch zápisov jednotiek: 'kg·m²/s² = J'
  function compareUnits(src) {
    const s = String(src || '');
    const k = s.indexOf('=');
    const texts = k < 0 ? [s] : [s.slice(0, k), s.slice(k + 1)];
    if (k >= 0 && texts[1].includes('=')) return { ok: false, error: { key: 'exprTwoRel', vars: { pos: k + 2 + texts[1].indexOf('=') } } };
    const sides = [];
    for (let i = 0; i < texts.length; i++) {
      const txt = texts[i].replace(/\?/g, '').trim();
      if (!txt) return { ok: false, error: { key: 'exprEmpty', vars: {} } };
      const r = JEDNOTKY.parse(txt);
      if (!r.ok) return { ok: false, error: { key: r.error, vars: { u: r.u || txt } } };
      // násobok mimo SI (km/h, kWh): rozmer sedí, ale jednotky sa líšia číslom
      sides.push({ dim: r.dim, dimTex: JEDNOTKY.dimText(r.dim), named: JEDNOTKY.named(r.dim), tex: r.tex, factor: r.factor });
    }
    const res = { ok: true, sides };
    if (sides.length === 2) {
      res.match = same(sides[0].dim, sides[1].dim);
      res.diff = diffRows(sides[0].dim, sides[1].dim);
      res.ratio = sides[0].factor / sides[1].factor;
    }
    return res;
  }

  // riadky tabuľky rozdielu: základné jednotky, v ktorých sa exponenty líšia
  function diffRows(a, b) {
    return [1, 0, 2, 3, 4, 5, 6].filter((i) => Math.abs(a[i] - b[i]) > 1e-9)
      .map((i) => ({ base: JEDNOTKY.BASE[i], left: a[i], right: b[i], diff: a[i] - b[i] }));
  }

  // predvolená jednotka podľa značky veličiny (žiak ju môže prepísať)
  const GUESS = {
    m: 'kg', M: 'kg', v: 'm/s', c: 'm/s', u: 'm/s', a: 'm/s²', g: 'm/s²', F: 'N', G: 'N·m²/kg²', p: 'Pa', S: 'm²', V: 'm³',
    P: 'W', U: 'V', I: 'A', R: 'Ω', t: 's', T: 's', s: 'm', l: 'm', r: 'm', h: 'm', d: 'm', x: 'm', y: 'm', f: 'Hz', k: 'N/m',
    q: 'C', Q: 'C', C: 'F', B: 'T', L: 'H', E: 'J', W: 'J', A: 'J', ρ: 'kg/m³', ω: 'rad/s', λ: 'm', n: 'mol', N: '1'
  };
  const guess = (v) => (GUESS[v] !== undefined ? GUESS[v] : GUESS[v[0]] !== undefined ? GUESS[v[0]] : '');

  // hotové príklady (id → vzťah a jednotky); posledný je zámerne chybný
  const EXAMPLES = [
    { id: 'einstein', expr: 'E = m*c^2', units: { E: 'J', m: 'kg', c: 'm/s' }, lessons: ['v6-energia', 'v6-ekvivalencia'] },
    { id: 'tlak', expr: 'p = F/S', units: { p: 'Pa', F: 'N', S: 'm²' }, lessons: ['r6-tlak', 's1-tlak'] },
    { id: 'vykon', expr: 'P = U*I', units: { P: 'W', U: 'V', I: 'A' }, lessons: ['r9-praca-vykon', 's3-praca-vykon'] },
    { id: 'gravitacia', expr: 'F = G*m1*m2/r^2', units: { F: 'N', G: 'N·m²/kg²', m1: 'kg', m2: 'kg', r: 'm' }, lessons: ['s1-gravitacia', 'v1-gravitacne-pole'] },
    { id: 'kyvadlo', expr: 'T = 2*pi*sqrt(l/g)', units: { T: 's', l: 'm', g: 'm/s²' }, lessons: ['s2-kmitanie'] },
    { id: 'kineticka', expr: 'E = 1/2*m*v^2', units: { E: 'J', m: 'kg', v: 'm/s' }, lessons: ['r8-polohova-pohybova', 's1-praca-energia'] },
    { id: 'ohm', expr: 'U = R*I', units: { U: 'V', R: 'Ω', I: 'A' }, lessons: ['r9-ohmov-zakon', 's3-ohm'] },
    { id: 'chybny', expr: 's = v*t^2', units: { s: 'm', v: 'm/s', t: 's' }, wrong: true, lessons: ['s1-pohyb'] }
  ];
  const UNIT_EXAMPLES = ['kg·m²/s² = J', 'V·A = W', 'N/m² = Pa', 'J/s = W', 'C/s = A', 'Wb/m² = T', 'km/h = m/s', 'kg·m/s = N'];
  // lekcie o jednotkách a veličinách – box so všeobecným odkazom
  const GENERAL_LESSONS = ['r5-jednotky', 's1-veliciny', 's4-opakovanie', 's4-maturita', 'v12-modelovanie'];

  window.ROZMERY_LOGIC = { dimOf, analyze, compareUnits, guess, EXAMPLES, UNIT_EXAMPLES, GENERAL_LESSONS };

  if (!window.APP) return; // node: len logika

  /* ---------- stránka ---------- */
  const { t, esc } = APP;
  const fmtE = (x) => {
    const r = Math.round(x * 1000) / 1000;
    for (let q = 2; q <= 6; q++) if (!Number.isInteger(r) && Math.abs(r * q - Math.round(r * q)) < 1e-6) return `${Math.round(r * q)}/${q}`;
    return String(r).replace('-', '−');
  };
  const varTex = (v) => (v.length > 1 && /\d/.test(v) ? `${v[0]}_{${v.slice(1)}}` : v);
  const errText = (e) => esc(t(e.key, e.vars || {}));
  const state = { expr: '', units: {} };

  function sideHtml(label, s) {
    return `<div class="rozm-side">
      <div class="muted small">${esc(label)}</div>
      <div>$${s.tex}$</div>
      <div>$\\to\\ ${s.dimTex}$${s.named ? ` <span class="rozm-named">= $${JEDNOTKY.tex(s.named)}$</span>` : ''}</div>
    </div>`;
  }
  function verdictHtml(res, extra) {
    if (res.sides.length < 2) return '';
    const head = res.match
      ? `<p class="feedback ok rozm-verdict">✓ ${esc(t('dimMatch'))}${extra || ''}</p>`
      : `<p class="feedback bad rozm-verdict">✗ ${esc(t('dimMismatch'))}</p>`;
    if (res.match) return head;
    const rows = res.diff.map((d) => `<tr><th scope="row">$\\text{${d.base}}$</th><td>${fmtE(d.left)}</td><td>${fmtE(d.right)}</td><td><strong>${d.diff > 0 ? '+' : ''}${fmtE(d.diff)}</strong></td></tr>`).join('');
    return `${head}<div class="rozm-table-wrap"><table class="rozm-table">
      <caption class="muted small">${esc(t('dimDiffCaption'))}</caption>
      <thead><tr><th scope="col">${esc(t('dimBase'))}</th><th scope="col">${esc(t('dimLeft'))}</th><th scope="col">${esc(t('dimRight'))}</th><th scope="col">${esc(t('dimDiff'))}</th></tr></thead>
      <tbody>${rows}</tbody></table></div>`;
  }

  // polia jednotiek pre veličiny vo vzťahu (zachovajú, čo už žiak napísal)
  function renderVars(vars) {
    const box = document.getElementById('rozm-vars');
    const have = [...box.querySelectorAll('input')].map((i) => i.dataset.v).join('|');
    if (have === vars.join('|')) return;
    box.innerHTML = vars.length ? vars.map((v, i) => {
      if (state.units[v] === undefined) state.units[v] = guess(v);
      return `<label class="rozm-var"><span class="rozm-var-name">$${varTex(v)}$</span>
        <input type="text" id="rozm-v${i}" data-v="${esc(v)}" value="${esc(state.units[v])}" autocomplete="off" spellcheck="false"
          aria-label="${esc(t('dimVarUnit', { v }))}" placeholder="${esc(t('dimUnitPh'))}"></label>`;
    }).join('') : '';
    APP.renderMath(box);
  }

  function updateExpr() {
    const out = document.getElementById('rozm-out');
    if (!state.expr.trim()) { out.innerHTML = ''; document.getElementById('rozm-vars').innerHTML = ''; return; }
    const res = analyze(state.expr, state.units);
    renderVars(res.vars || []);
    document.querySelectorAll('#rozm-vars input').forEach((inp) => inp.classList.toggle('rozm-bad', res.bad === inp.dataset.v));
    if (!res.ok) { out.innerHTML = `<p class="feedback warn">${errText(res.error)}</p>`; return; }
    const labels = res.sides.length === 2 ? [t('dimLeft'), t('dimRight')] : [t('dimExprSide')];
    out.innerHTML = `<div class="rozm-sides">${res.sides.map((s, i) => sideHtml(labels[i], s)).join('')}</div>${verdictHtml(res)}`;
    APP.renderMath(out);
  }

  function updateUnits() {
    const src = document.getElementById('rozm-units').value;
    const out = document.getElementById('rozm-uout');
    if (!src.trim()) { out.innerHTML = ''; return; }
    const res = compareUnits(src);
    if (!res.ok) { out.innerHTML = `<p class="feedback warn">${errText(res.error)}</p>`; return; }
    const labels = res.sides.length === 2 ? [t('dimLeft'), t('dimRight')] : [t('dimExprSide')];
    // rovnaký rozmer, ale iná veľkosť jednotky (km/h a m/s)
    const extra = res.match && Math.abs(res.ratio - 1) > 1e-9
      ? ` <span class="rozm-ratio">${esc(t('dimFactor', { k: res.ratio.toLocaleString(document.documentElement.lang || undefined, { maximumSignificantDigits: 6 }) }))}</span>` : '';
    out.innerHTML = `<div class="rozm-sides">${res.sides.map((s, i) => sideHtml(labels[i], s)).join('')}</div>${verdictHtml(res, extra)}`;
    APP.renderMath(out);
  }

  function setExample(ex) {
    state.expr = ex.expr;
    state.units = Object.assign({}, ex.units);
    document.getElementById('rozm-expr').value = ex.expr;
    document.getElementById('rozm-vars').innerHTML = '';
    updateExpr();
  }

  function page(parts) {
    const pre = EXAMPLES.find((e) => e.id === parts[1]);
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>📐 ${esc(t('dimTitle'))}</h1>
      <p class="muted">${esc(t('dimIntro'))}</p>
      <section class="card-box rozm-box" aria-labelledby="rozm-h1">
        <h2 id="rozm-h1">${esc(t('dimExprTitle'))}</h2>
        <label for="rozm-expr" class="small">${esc(t('dimExprLabel'))}</label>
        <input type="text" id="rozm-expr" class="rozm-input" autocomplete="off" spellcheck="false" placeholder="E = m*c^2" aria-describedby="rozm-help">
        <p id="rozm-help" class="muted small">${esc(t('dimExprHelp'))}</p>
        <div id="rozm-vars" class="rozm-vars" role="group" aria-label="${esc(t('dimVarsLabel'))}"></div>
        <div id="rozm-out" class="rozm-out" aria-live="polite"></div>
        <h3 class="small">${esc(t('dimExamples'))}</h3>
        <div class="rozm-examples">${EXAMPLES.map((e) => `<button type="button" class="btn btn-small${e.wrong ? ' rozm-wrong' : ''}" data-ex="${e.id}">${e.wrong ? '⚠️ ' : ''}${esc(e.expr)}</button>`).join('')}</div>
      </section>
      <section class="card-box rozm-box" aria-labelledby="rozm-h2">
        <h2 id="rozm-h2">${esc(t('dimUnitsTitle'))}</h2>
        <label for="rozm-units" class="small">${esc(t('dimUnitsLabel'))}</label>
        <input type="text" id="rozm-units" class="rozm-input" autocomplete="off" spellcheck="false" placeholder="kg·m²/s² = J">
        <div id="rozm-uout" class="rozm-out" aria-live="polite"></div>
        <div class="rozm-examples">${UNIT_EXAMPLES.map((u) => `<button type="button" class="btn btn-small" data-u="${esc(u)}">${esc(u)}</button>`).join('')}</div>
      </section>`);
    let timer = null;
    const later = (fn) => { clearTimeout(timer); timer = setTimeout(fn, 150); };
    const exprIn = document.getElementById('rozm-expr');
    exprIn.addEventListener('input', () => { state.expr = exprIn.value; later(updateExpr); });
    document.getElementById('rozm-vars').addEventListener('input', (e) => {
      if (e.target.dataset.v === undefined) return;
      state.units[e.target.dataset.v] = e.target.value;
      later(updateExpr);
    });
    const unitsIn = document.getElementById('rozm-units');
    unitsIn.addEventListener('input', () => later(updateUnits));
    document.querySelectorAll('.rozm-examples button').forEach((b) => b.addEventListener('click', () => {
      if (b.dataset.ex) setExample(EXAMPLES.find((e) => e.id === b.dataset.ex));
      else { unitsIn.value = b.dataset.u; updateUnits(); }
    }));
    setExample(pre || (state.expr ? { expr: state.expr, units: state.units } : EXAMPLES[0]));
  }

  /* ---------- registrácia ---------- */
  APP.route('rozmery', (parts) => page(parts));
  APP.addMenu({ href: '#/rozmery', icon: '📐', key: 'dimMenu' });

  // box v lekcii: konkrétny vzťah z lekcie alebo všeobecný odkaz v lekciách o jednotkách
  APP.addLessonPanel((L) => {
    const exs = EXAMPLES.filter((e) => e.lessons.includes(L.id));
    if (!exs.length && !GENERAL_LESSONS.includes(L.id)) return '';
    const links = exs.length
      ? exs.map((e) => `<a class="btn btn-small" href="#/rozmery/${e.id}">${esc(e.expr)}</a>`).join(' ')
      : `<a class="btn btn-small" href="#/rozmery">📐 ${esc(t('dimOpen'))}</a>`;
    return `<aside class="rozm-panel" aria-label="${esc(t('dimPanelTitle'))}">
      <h3 class="rozm-panel-h">📐 ${esc(t('dimPanelTitle'))}</h3>
      <p class="muted small">${esc(t('dimPanelDesc'))}</p>
      <p class="rozm-panel-links">${links}</p>
    </aside>`;
  });
})();
