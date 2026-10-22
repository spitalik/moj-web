/* Režim pre učiteľa – bez servera, všetko je zakódované v odkaze:
   1) Pracovný list: vybrané lekcie a počty úloh → tlačová verzia v N variantoch (A, B, C…) s kľúčom odpovedí.
   2) Zadanie cez odkaz: žiaci otvoria #/zadanie/<kód>, vyriešia rovnaké úlohy (alebo každý svoj variant podľa mena)
      a na konci dostanú kód výsledku, ktorý pošlú učiteľovi.
   3) Výsledky: učiteľ vloží kódy výsledkov → tabuľka žiakov a úloh, export CSV.
   Úlohy sú deterministické (semienko z kódu), preto rovnaký kód = rovnaké zadanie. Kontrolný súčet
   v kóde výsledku chráni pred náhodnou zmenou, nie pred zámerným podvodom. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  /* ---------- kódovanie do odkazu ---------- */
  const enc = (obj) => btoa(unescape(encodeURIComponent(JSON.stringify(obj)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  function dec(code) {
    try {
      const b = code.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(decodeURIComponent(escape(atob(b + '==='.slice((b.length + 3) % 4)))));
    } catch (e) { return null; }
  }
  const sum6 = (s) => String(EXERCISES.hashSeed(s) % 1000000).padStart(6, '0');
  const appUrl = () => location.href.split('#')[0];

  // zoznam úloh zadania: [{ id, seed }]
  function tasks(cfg, variantKey) {
    const out = [];
    cfg.l.forEach(([id, c]) => {
      for (let j = 0; j < c; j++) out.push({ id, seed: `${cfg.s}|${variantKey}|${id}|${j}` });
    });
    return out.filter((x) => APP.lessonById(x.id) && EXERCISES.has(x.id));
  }

  /* ---------- výber lekcií (spoločný pre list aj zadanie) ---------- */
  const sel = new Map(); // id → počet úloh

  function picker() {
    const opts = [
      `<optgroup label="${esc(t('viewLevels'))}">${LEVELS.map((lv) => `<option value="u:${lv.id}">${esc(APP.lvName(lv).title)}</option>`).join('')}</optgroup>`,
      `<optgroup label="${esc(t('viewThemes'))}">${APP.THEMES.map((th) => `<option value="t:${th.id}">${th.icon} ${esc(APP.thName(th).title)}</option>`).join('')}</optgroup>`
    ].join('');
    return `<label class="field">${esc(t('teacherSource'))} <select id="src">${opts}</select></label>
      <ul class="pick-list" id="pl"></ul>
      <p class="muted" id="sel-sum"></p>`;
  }
  function renderPick() {
    const v = document.getElementById('src').value;
    const ls = v.startsWith('u:') ? APP.lessonsOf(v.slice(2)) : APP.themeLessons(APP.themeById(v.slice(2)));
    document.getElementById('pl').innerHTML = ls.filter((l) => EXERCISES.has(l.id)).map((l) => `<li>
      <label class="check"><input type="checkbox" data-id="${l.id}"${sel.has(l.id) ? ' checked' : ''}> ${APP.lessonTitle(l)}</label>
      <input class="cnt" type="number" min="1" max="10" value="${sel.get(l.id) || 2}" data-id="${l.id}" aria-label="${esc(t('teacherCount'))}"></li>`).join('');
    APP.renderMath(document.getElementById('pl'));
    updateSum();
  }
  function updateSum() {
    const n = [...sel.values()].reduce((a, b) => a + b, 0);
    document.getElementById('sel-sum').innerHTML = n
      ? `${esc(t('teacherSelected', { n, m: sel.size }))} <button type="button" class="btn btn-small" id="clr">${esc(t('teacherClear'))}</button>`
      : esc(t('teacherNothing'));
    const c = document.getElementById('clr');
    if (c) c.addEventListener('click', () => { sel.clear(); renderPick(); });
  }
  function bindPick() {
    document.getElementById('src').addEventListener('change', renderPick);
    document.getElementById('pl').addEventListener('change', (e) => {
      const id = e.target.dataset.id;
      if (!id) return;
      const li = e.target.closest('li');
      const cb = li.querySelector('input[type=checkbox]'), cnt = li.querySelector('.cnt');
      const c = Math.max(1, Math.min(10, Number(cnt.value) || 1));
      if (e.target === cnt && !cb.checked) cb.checked = true;
      if (cb.checked) sel.set(id, c); else sel.delete(id);
      updateSum();
    });
    renderPick();
  }
  const cfgFrom = (extra) => Object.assign({ v: 1, s: Math.floor(Math.random() * 1e9), l: [...sel.entries()] }, extra);

  /* ---------- hlavná stránka učiteľa ---------- */
  function home() {
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>👩‍🏫 ${esc(t('teacherTitle'))}</h1>
      <p class="muted">${esc(t('teacherIntro'))}</p>
      <section class="block"><h2>1. ${esc(t('teacherPick'))}</h2>${picker()}</section>
      <div class="two-col">
        <section class="block"><h2>2a. 🖨️ ${esc(t('worksheetTitle'))}</h2>
          <label class="field">${esc(t('worksheetName'))} <input id="ti" type="text" maxlength="80" value="${esc(t('worksheetDefault'))}"></label>
          <label class="field">${esc(t('worksheetVariants'))} <input id="va" type="number" min="1" max="26" value="2"></label>
          <label class="check"><input id="key" type="checkbox" checked> ${esc(t('worksheetKey'))}</label>
          <div class="actions"><button class="btn btn-primary" id="mk-ws" type="button">${esc(t('worksheetMake'))}</button></div>
        </section>
        <section class="block"><h2>2b. 🔗 ${esc(t('assignTitle'))}</h2>
          <label class="field">${esc(t('worksheetName'))} <input id="ati" type="text" maxlength="80" value="${esc(t('assignDefault'))}"></label>
          <label class="field">${esc(t('assignMode'))} <select id="am">
            <option value="p">${esc(t('assignPractice'))}</option><option value="t">${esc(t('assignTest'))}</option></select></label>
          <label class="field">${esc(t('testTime'))} <select id="atm"><option value="0">${esc(t('testNoLimit'))}</option>${[10, 15, 20, 30, 45, 60, 90].map((m) => `<option value="${m}">${m} min</option>`).join('')}</select></label>
          <label class="check"><input id="pv" type="checkbox"> ${esc(t('assignPerStudent'))}</label>
          <div class="actions"><button class="btn btn-primary" id="mk-as" type="button">${esc(t('assignMake'))}</button></div>
          <div id="as-out"></div>
        </section>
      </div>
      <section class="block"><h2>3. 📥 ${esc(t('resultsTitle'))}</h2><p>${esc(t('resultsIntro'))}</p>
        <a class="btn" href="#/ucitel/vysledky">${esc(t('resultsOpen'))}</a></section>`);
    bindPick();
    const need = () => { if (!sel.size) { APP.toast(`⚠️ ${esc(t('teacherNothing'))}`); return false; } return true; };
    document.getElementById('mk-ws').addEventListener('click', () => {
      if (!need()) return;
      const cfg = cfgFrom({ ti: document.getElementById('ti').value.trim(), va: Math.max(1, Math.min(26, Number(document.getElementById('va').value) || 1)), k: document.getElementById('key').checked ? 1 : 0, lg: I18N.getLang() });
      location.hash = `#/ucitel/list/${enc(cfg)}`;
    });
    document.getElementById('mk-as').addEventListener('click', () => {
      if (!need()) return;
      const cfg = cfgFrom({ ti: document.getElementById('ati').value.trim(), m: document.getElementById('am').value, tm: Number(document.getElementById('atm').value) || 0, pv: document.getElementById('pv').checked ? 1 : 0 });
      const url = `${appUrl()}#/zadanie/${enc(cfg)}`;
      const out = document.getElementById('as-out');
      out.innerHTML = `<label class="field">${esc(t('assignLink'))}<input type="text" readonly value="${esc(url)}" id="lnk"></label>
        <div class="actions"><button class="btn btn-primary" type="button" id="cpl">📋 ${esc(t('copyLink'))}</button>
        ${navigator.share ? `<button class="btn" type="button" id="shl">📤 ${esc(t('share'))}</button>` : ''}
        <a class="btn" href="${esc(url)}" target="_blank" rel="noopener">${esc(t('assignTry'))}</a></div>
        <div class="qr" id="qr"></div>`;
      document.getElementById('cpl').addEventListener('click', () => copy(url));
      const sh = document.getElementById('shl');
      if (sh) sh.addEventListener('click', () => navigator.share({ title: cfg.ti, url }).catch(() => {}));
      if (window.QR) QR.render(document.getElementById('qr'), url);
    });
  }

  async function copy(text) {
    try { await navigator.clipboard.writeText(text); APP.toast(`✓ ${esc(t('copied'))}`); } catch (e) { window.prompt(t('copyLink'), text); }
  }

  /* ---------- pracovný list na tlač ---------- */
  function worksheet(code) {
    const cfg = dec(code);
    if (!cfg || !cfg.l) { home(); return; }
    const lang = cfg.lg || I18N.getLang();
    const keyRows = [];
    let pages = '';
    for (let v = 0; v < (cfg.va || 1); v++) {
      const list = tasks(cfg, LETTERS[v]);
      const answers = [];
      const items = list.map((x, k) => {
        const cl = CONTENT_I18N.langFor(x.id, lang);
        const ex = EXERCISES.make(x.id, cl, x.seed);
        const L = APP.htmlLang(cl);
        let ans = EXERCISES.formatAnswer(ex);
        let body = `<div class="q-text" lang="${L}">${ex.q}</div>`;
        if (ex.type === 'choice') {
          body += `<ol class="ws-options" type="A">${ex.options.map((o) => `<li>${o}</li>`).join('')}</ol>`;
          ans = `${LETTERS[ex.options.indexOf(String(ex.answer))]}) ${ans}`;
        } else {
          body += `<div class="ws-answer">${esc(t('worksheetAnswer'))} <span class="ws-line"></span>${ex.placeholder ? ` <span class="muted small">(${esc(ex.placeholder)})</span>` : ''}</div>`;
        }
        answers.push(ans);
        return `<li class="ws-task">${body}</li>`;
      }).join('');
      keyRows.push({ v: LETTERS[v], answers });
      pages += `<section class="ws-page">
        <header class="ws-head"><div><strong>${esc(cfg.ti || t('worksheetDefault'))}</strong>${cfg.va > 1 ? ` · ${esc(t('worksheetVariant'))} ${LETTERS[v]}` : ''}</div>
          <div class="ws-fields">${esc(t('worksheetStudent'))} <span class="ws-line"></span> ${esc(t('date'))} <span class="ws-line short"></span></div></header>
        <ol class="ws-tasks">${items}</ol></section>`;
    }
    const key = cfg.k ? `<section class="ws-page ws-key"><h2>${esc(t('worksheetKeyTitle'))} – ${esc(cfg.ti || '')}</h2>
      ${keyRows.map((r) => `<h3>${cfg.va > 1 ? `${esc(t('worksheetVariant'))} ${r.v}` : ''}</h3><ol>${r.answers.map((a) => `<li>${a}</li>`).join('')}</ol>`).join('')}</section>` : '';
    APP.setPage(`<div class="no-print"><nav class="crumbs"><a href="#/ucitel">${esc(t('teacherTitle'))}</a></nav>
      <div class="actions"><button class="btn btn-primary" id="pr" type="button">🖨️ ${esc(t('worksheetPrint'))}</button>
        <button class="btn" id="cpw" type="button">🔗 ${esc(t('worksheetLink'))}</button></div>
      <p class="muted small">${esc(t('worksheetPrintHint'))}</p></div>
      <div class="worksheet">${pages}${key}</div>`);
    document.getElementById('pr').addEventListener('click', () => window.print());
    document.getElementById('cpw').addEventListener('click', () => copy(location.href));
  }

  /* ---------- žiak: zadanie ---------- */
  function assignment(code) {
    const cfg = dec(code);
    if (!cfg || !cfg.l) {
      APP.setPage(`<h1>${esc(t('assignTitle'))}</h1><p class="feedback bad">${esc(t('assignBad'))}</p>`);
      return;
    }
    const n = tasks(cfg, 'x').length;
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🔗 ${esc(cfg.ti || t('assignDefault'))}</h1>
      <div class="block"><ul>
        <li>${esc(t('testRuleCount', { n }))}</li>
        <li>${esc(cfg.m === 't' ? t('testRuleNoFeedback') : t('assignRulePractice'))}</li>
        ${cfg.tm ? `<li>${esc(t('testRuleTime', { m: cfg.tm }))}</li>` : ''}
      </ul>
      <label class="field">${esc(t('worksheetStudent'))} <input id="nm" type="text" maxlength="60" value="${esc(STORE.settings().childName || '')}" autocomplete="name"></label>
      <p class="muted small">${esc(t('studentNameHint'))}</p>
      <p class="feedback warn" id="nm-err" hidden>${esc(t('assignNeedName'))}</p>
      <button class="btn btn-primary" type="button" id="go">${esc(t('testStart'))}</button></div>`);
    document.getElementById('go').addEventListener('click', () => {
      const name = document.getElementById('nm').value.trim();
      if (!name) { document.getElementById('nm-err').hidden = false; return; }
      solve(cfg, code, name);
    });
  }

  function solve(cfg, code, name) {
    const list = tasks(cfg, cfg.pv ? `n:${name.toLowerCase()}` : 'all');
    const t0 = Date.now();
    APP.setPage(`<h1>🔗 ${esc(cfg.ti || t('assignDefault'))}</h1><p class="muted">${esc(name)}</p><div id="pw"></div>`);
    PROBLEM.mount(document.getElementById('pw'), {
      mode: cfg.m === 't' ? 'exam' : 'practice',
      total: list.length,
      timeLimit: cfg.tm ? cfg.tm * 60 : null,
      showFrom: false,
      next: (i) => (i < list.length ? { id: list[i].id, ex: EXERCISES.make(list[i].id, APP.contentLang(list[i].id), list[i].seed) } : null),
      record: (r) => STORE.record(r.id, r.correct, { mode: 'assignment', ms: r.ms }),
      onDone: (results) => {
        const k = results.filter((r) => r.correct).length;
        const res = { a: sum6(code), n: name, k, t: results.length, r: results.map((r) => (r.correct ? '1' : '0')).join(''), d: STORE.day(), s: Math.round((Date.now() - t0) / 1000) };
        res.x = sum6(JSON.stringify([res.a, res.n, res.k, res.t, res.r, res.d]));
        const rc = enc(res);
        APP.setPage(`<h1>🔗 ${esc(cfg.ti || t('assignDefault'))}</h1>
          <p class="big-score">${k} / ${results.length}</p>
          <div class="block"><p>${esc(t('assignSendCode'))}</p>
            <textarea class="result-code" readonly rows="3" id="rc">${esc(rc)}</textarea>
            <div class="actions"><button class="btn btn-primary" type="button" id="cpr">📋 ${esc(t('copyCode'))}</button>
            ${navigator.share ? `<button class="btn" type="button" id="shr">📤 ${esc(t('share'))}</button>` : ''}</div></div>
          ${cfg.m === 't' ? `<details class="block"><summary>${esc(t('testReview'))}</summary><ol class="test-review">${results.map((r) => `<li class="${r.correct ? 'ok' : 'bad'}">
              <div class="q-text">${r.ex.q}</div><p><strong>${esc(t('yourAnswerWas'))}</strong> ${r.input ? esc(r.input) : `<em>${esc(t('noAnswer'))}</em>`} · <strong>${esc(t('correctAnswer'))}</strong> ${EXERCISES.formatAnswer(r.ex)}</p></li>`).join('')}</ol></details>` : ''}`);
        document.getElementById('cpr').addEventListener('click', () => copy(rc));
        const sh = document.getElementById('shr');
        if (sh) sh.addEventListener('click', () => navigator.share({ title: cfg.ti, text: `${name}: ${k}/${results.length}\n${rc}` }).catch(() => {}));
      }
    });
  }

  /* ---------- učiteľ: vyhodnotenie kódov výsledkov ---------- */
  function results() {
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/ucitel">${esc(t('teacherTitle'))}</a></nav>
      <h1>📥 ${esc(t('resultsTitle'))}</h1>
      <p class="muted">${esc(t('resultsPaste'))}</p>
      <textarea id="codes" rows="8" class="result-code" placeholder="${esc(t('resultsPlaceholder'))}"></textarea>
      <div class="actions"><button class="btn btn-primary" type="button" id="ev">${esc(t('resultsEvaluate'))}</button></div>
      <div id="out"></div>`);
    document.getElementById('ev').addEventListener('click', () => {
      const raw = document.getElementById('codes').value;
      // každý dlhý reťazec bez medzier je kandidát na kód; poškodený alebo upravený sa ohlási
      const candidates = raw.match(/[A-Za-z0-9_-]{24,}/g) || [];
      const valid = candidates.map(dec).filter((r) => r && r.a && r.r !== undefined && r.x === sum6(JSON.stringify([r.a, r.n, r.k, r.t, r.r, r.d])));
      const bad = candidates.length - valid.length;
      // zoskupiť podľa zadania (rôzne zadania v jednom vložení)
      const groups = {};
      valid.forEach((r) => { (groups[r.a] = groups[r.a] || []).push(r); });
      const out = document.getElementById('out');
      if (!valid.length) { out.innerHTML = `<p class="feedback warn">${esc(t('resultsNone'))}</p>`; return; }
      out.innerHTML = (bad ? `<p class="feedback warn">${esc(t('resultsInvalid', { n: bad }))}</p>` : '') + Object.entries(groups).map(([a, rs]) => {
        const n = Math.max(...rs.map((r) => r.t));
        const avg = (k) => Math.round(100 * rs.filter((r) => r.r[k] === '1').length / rs.length);
        return `<h2>${esc(t('resultsAssignment'))} ${esc(a)} · ${rs.length} ${esc(t('resultsStudents'))}</h2>
          <div class="table-wrap"><table class="tbl results-table">
          <tr><th>${esc(t('worksheetStudent'))}</th><th>${esc(t('testScore'))}</th>${Array.from({ length: n }, (_, k) => `<th>${k + 1}</th>`).join('')}<th>${esc(t('date'))}</th></tr>
          ${rs.sort((x, y) => y.k - x.k).map((r) => `<tr><td>${esc(r.n)}</td><td>${r.k} / ${r.t}</td>${Array.from({ length: n }, (_, k) => `<td class="${r.r[k] === '1' ? 'ok' : 'bad'}">${r.r[k] === '1' ? '✓' : '✗'}</td>`).join('')}<td>${esc(r.d)}</td></tr>`).join('')}
          <tr class="avg"><td>${esc(t('resultsAverage'))}</td><td>${Math.round(100 * rs.reduce((s, r) => s + r.k / r.t, 0) / rs.length)} %</td>${Array.from({ length: n }, (_, k) => `<td>${avg(k)} %</td>`).join('')}<td></td></tr>
          </table></div>
          <div class="actions"><button class="btn" type="button" data-csv="${esc(a)}">⬇️ ${esc(t('resultsCsv'))}</button></div>`;
      }).join('');
      out.querySelectorAll('[data-csv]').forEach((b) => b.addEventListener('click', () => {
        const rs = groups[b.dataset.csv];
        const n = Math.max(...rs.map((r) => r.t));
        const rows = [[t('worksheetStudent'), t('testScore'), t('date'), ...Array.from({ length: n }, (_, k) => String(k + 1))]]
          .concat(rs.map((r) => [r.n, `${r.k}/${r.t}`, r.d, ...Array.from({ length: n }, (_, k) => r.r[k] || '')]));
        const csv = rows.map((row) => row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(';')).join('\r\n');
        const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
        const aEl = document.createElement('a');
        aEl.href = URL.createObjectURL(blob);
        aEl.download = `vysledky-${b.dataset.csv}.csv`;
        aEl.click();
        setTimeout(() => URL.revokeObjectURL(aEl.href), 2000);
      }));
    });
  }

  APP.route('ucitel', (p) => {
    if (p[0] === 'list' && p[1]) return worksheet(p[1]);
    if (p[0] === 'vysledky') return results();
    return home();
  });
  APP.route('zadanie', (p) => assignment(p[0] || ''));
  APP.addMenu({ href: '#/ucitel', icon: '👩‍🏫', key: 'menuTeacher' });
})();
