/* Projekty z praxe (#/projekty, #/projekty/<id>): fyzikálne úlohy z bežného života s nadväzujúcimi krokmi.
   Dáta a generovanie zadaní sú v js/projekty.js (window.PROJECTS, PROJECTS_API.make), preklad obsahu v balíku
   js/content-i18n/<jazyk>/projekty.js. Kroky rieši spoločný komponent PROBLEM.mount; výsledky sa nezapisujú
   do štatistík lekcií (projekt nie je lekcia), postup projektov (semienko, počet dokončení, najlepšie skóre)
   je v localStorage pod kľúčom fyzika.projects. V naviazaných lekciách je odkaz na projekt. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const CI = CONTENT_I18N;
  const KEY = 'fyzika.projects';
  const LEVELS = ['zs', 'ss', 'vs'];
  const GRADE_KEY = { zs: 'projectsGradeZs', ss: 'projectsGradeSs', vs: 'projectsGradeVs' };

  /* ---------- uložený postup ---------- */
  const readAll = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  const writeAll = (d) => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* súkromný režim: platí len do zatvorenia */ } };
  const stateOf = (id) => readAll()[id] || {};
  function update(id, fn) {
    const all = readAll();
    all[id] = fn(Object.assign({}, all[id] || {}));
    writeAll(all);
    return all[id];
  }
  const newSeed = () => Math.floor(Math.random() * 2147483647);
  // semienko zadania: ostáva rovnaké, kým žiak nepožiada o nové čísla
  function seedOf(id) {
    const s = stateOf(id).seed;
    return Number.isInteger(s) ? s : update(id, (st) => Object.assign(st, { seed: newSeed() })).seed;
  }

  /* ---------- jazyk obsahu: preklad projektov je v balíku „projekty“, inak slovenčina s upozornením ---------- */
  const contentLang = () => {
    const ui = I18N.getLang();
    return ((window.CONTENT_I18N_FILES || {})[ui] || []).includes('projekty') ? ui : I18N.DEFAULT;
  };
  const notice = (lang) => (I18N.getLang() === lang ? '' : `<p class="notice">${esc(t('contentNotice'))}</p>`);
  const list = () => window.PROJECTS || [];
  const byId = (id) => list().find((p) => p.id === id);
  const titleOf = (p, lang) => CI.tr(p.title, lang);
  const range = (p) => (p.grades[0] === p.grades[1] ? String(p.grades[0]) : `${p.grades[0]}–${p.grades[1]}`);
  const gradeText = (p) => t(GRADE_KEY[p.level] || 'projectsGradeZs', { range: range(p) });
  const lessonsOf = (p) => p.lessons.map((id) => APP.lessonById(id)).filter(Boolean);
  const groupName = (level) => { const g = APP.groupById(level); return g ? APP.grName(g) : level; };

  // stav na karte: dokončený projekt s najlepším skóre, inak „zatiaľ neriešený“
  function status(p) {
    const st = stateOf(p.id);
    if (st.done) return `<span class="proj-done">✓ ${esc(t('projectsDone', { k: st.best, n: st.total }))}</span>`;
    return `<span class="muted">${esc(t('projectsNotDone'))}</span>`;
  }

  /* ---------- zoznam projektov ---------- */
  function listPage() {
    const lang = contentLang();
    const card = (p) => `<a class="card proj-card" href="#/projekty/${p.id}">
        <div class="theme-icon" aria-hidden="true">${p.icon}</div>
        <h3 lang="${APP.htmlLang(lang)}">${esc(titleOf(p, lang))}</h3>
        <div class="meta">${esc(gradeText(p))} · ${lessonsOf(p).map((L) => APP.lessonTitle(L)).join(', ')}</div>
        <div class="meta">${status(p)}</div></a>`;
    const section = (level) => {
      const ps = list().filter((p) => p.level === level);
      return ps.length ? `<section class="proj-level"><h2>${esc(groupName(level))}</h2><div class="grid">${ps.map(card).join('')}</div></section>` : '';
    };
    const doneN = list().filter((p) => stateOf(p.id).done).length;
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🛠️ ${esc(t('projectsTitle'))}</h1>
      <p class="muted">${esc(t('projectsIntro'))}</p>
      ${notice(lang)}
      <p class="small">${esc(t('projectsProgress', { k: doneN, n: list().length }))}</p>
      ${LEVELS.map(section).join('')}`);
  }

  /* ---------- jeden projekt ---------- */
  function projectPage(id) {
    const p = byId(id);
    if (!p) { listPage(); return; }
    const lang = contentLang();
    const hl = APP.htmlLang(lang);
    let pr;
    try { pr = PROJECTS_API.make(p.id, lang, seedOf(p.id)); } catch (e) { console.error(e); listPage(); return; }
    const n = pr.steps.length;
    const lessons = lessonsOf(p);
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/projekty">${esc(t('projectsTitle'))}</a></nav>
      <h1 lang="${hl}">${p.icon} ${esc(pr.title)}</h1>
      <p class="muted small">${esc(gradeText(p))} · ${esc(t('projectsSteps', { n }))}</p>
      ${notice(lang)}
      <div class="block proj-story" lang="${hl}"><p>${pr.story}</p></div>
      ${lessons.length ? `<p class="small">${esc(t('projectsLessons'))} ${lessons.map((L) => `<a href="#/lekcia/${L.id}">${APP.lessonTitle(L)}</a>`).join(', ')}</p>` : ''}
      <div class="actions"><button class="btn btn-small" type="button" id="proj-new">🎲 ${esc(t('projectsNewNumbers'))}</button></div>
      <section class="proj-log" aria-label="${esc(t('projectsSolved'))}" hidden>
        <h2 class="proj-log-title">${esc(t('projectsSolved'))}</h2>
        <ol class="proj-log-list" lang="${hl}"></ol>
      </section>
      <div id="proj-widget"></div>
      <div id="proj-summary" class="block proj-summary" aria-live="polite" hidden></div>`);

    const logBox = APP.el.querySelector('.proj-log');
    const logList = APP.el.querySelector('.proj-log-list');
    let logged = 0;
    // vyriešený krok sa zapíše do prehľadu až pri prechode na ďalší (dovtedy by prezradil správnu odpoveď)
    const logUpTo = (k) => {
      let html = '';
      for (; logged < k && logged < n; logged++) {
        const s = pr.steps[logged];
        html += `<li><span class="proj-log-q">${s.q}</span> <strong class="proj-log-a">${EXERCISES.formatAnswer(s)}</strong></li>`;
      }
      if (!html) return;
      logList.insertAdjacentHTML('beforeend', html);
      logBox.hidden = false;
      APP.renderMath(logList);
    };

    const renew = () => { update(p.id, (st) => Object.assign(st, { seed: newSeed() })); projectPage(p.id); };
    document.getElementById('proj-new').addEventListener('click', renew);

    PROBLEM.mount(document.getElementById('proj-widget'), {
      mode: 'practice',
      total: n,
      next: (i) => { logUpTo(i); return i < n ? { id: p.id, ex: pr.steps[i] } : null; },
      record: () => { /* projekt nie je lekcia: do štatistík lekcií sa nezapisuje */ },
      onDone: (results) => {
        logUpTo(n);
        const k = results.filter((r) => r.correct).length;
        const st = update(p.id, (s) => Object.assign(s, { done: (s.done || 0) + 1, best: Math.max(s.best || 0, k), total: n, last: k }));
        const box = document.getElementById('proj-summary');
        document.getElementById('proj-widget').hidden = true;
        box.hidden = false;
        box.innerHTML = `<h2>🏁 ${esc(t('projectsFinished'))}</h2>
          <p>${esc(t('projectsScore', { k, n }))}${st.best > k ? ` <span class="muted small">(${esc(t('projectsBest', { k: st.best, n }))})</span>` : ''}</p>
          <p class="proj-wrap" lang="${hl}"><strong>${esc(t('projectsTakeaway'))}</strong> ${pr.wrap}</p>
          <div class="actions"><button class="btn btn-primary" type="button" id="proj-again">🎲 ${esc(t('projectsNewNumbers'))}</button>
            <a class="btn" href="#/projekty">${esc(t('projectsBack'))}</a></div>`;
        APP.renderMath(box);
        document.getElementById('proj-again').addEventListener('click', renew);
        box.querySelector('h2').setAttribute('tabindex', '-1');
        box.querySelector('h2').focus({ preventScroll: false });
      }
    });
  }

  APP.route('projekty', (parts) => (parts[0] ? projectPage(parts[0]) : listPage()));
  APP.addMenu({ href: '#/projekty', icon: '🛠️', key: 'projectsMenu' });

  // v naviazanej lekcii odkaz na projekt
  APP.addLessonPanel((L) => {
    const ps = list().filter((p) => p.lessons.includes(L.id));
    if (!ps.length) return '';
    const lang = contentLang();
    return ps.map((p) => `<p class="lesson-link proj-link"><a href="#/projekty/${p.id}">🛠️ ${esc(t('projectsPanel'))} <span lang="${APP.htmlLang(lang)}">${esc(titleOf(p, lang))}</span></a></p>`).join('');
  });
})();
