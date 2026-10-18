/* Hlavná logika: smerovanie (hash), zobrazenie úrovní, tém, lekcií a precvičovania, uloženie postupu,
   vzhľad, jazyk rozhrania a inštalácia PWA. Texty rozhrania idú cez I18N.t (js/i18n.js, js/lang/*.js).
   Obsah lekcie sa zobrazí v jazyku rozhrania, ak má preklad (js/content-i18n.js), inak po slovensky
   s upozornením; atribút lang zodpovedá jazyku, ktorý sa naozaj zobrazuje. */
(function () {
  'use strict';

  const app = document.getElementById('app');
  const PROGRESS_KEY = 'matika.progress.v1';
  const t = I18N.t;

  // Úložisko je len pre pohodlie (postup na zariadení). Výnimka (súkromný režim, blokované dáta) sa ignoruje.
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) { /* ignorujeme */ }
  }

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const levelById = (id) => LEVELS.find((x) => x.id === id);
  const lessonById = (id) => LESSONS.find((l) => l.id === id);
  const groupById = (id) => GROUPS.find((g) => g.id === id);

  // Lekcie úrovne zoradené podľa order (stabilné triedenie zachová poradie zápisu pri rovnosti).
  const lessonsOf = (levelId) => LESSONS
    .filter((l) => l.level === levelId)
    .sort((a, b) => (a.order ?? 1000) - (b.order ?? 1000));
  // Celé učivo v poradí: úrovne podľa LEVELS, v nich lekcie podľa order.
  const allOrdered = () => LEVELS.flatMap((lv) => lessonsOf(lv.id));

  // Témy (js/temy.js): lekcie témy v poradí od základov – podľa poradia v celom učive.
  const THEME_LIST = window.THEMES || [];
  const themeById = (id) => THEME_LIST.find((x) => x.id === id);
  const themeOf = (lessonId) => THEME_LIST.find((x) => x.lessons.includes(lessonId));
  const themeLessons = (th) => allOrdered().filter((l) => th.lessons.includes(l.id));

  // Preložené názvy a opisy (pri slovenčine zdrojové hodnoty).
  const lvName = (lv) => I18N.named('levels', lv.id, { title: lv.title, desc: lv.desc });
  const thName = (th) => I18N.named('topics', th.id, { title: th.title, desc: th.desc });
  const grName = (g) => I18N.named('groups', g.id, { title: g.title }).title;
  // krátky názov úrovne do rozsahu „od → po“: pri VŠ stačí názov skupiny
  const shortLevel = (lv) => (lv.group === 'vs' ? grName(groupById('vs')) : lvName(lv).title);
  // Jazyk obsahu lekcie: jazyk rozhrania, ak má lekcia preklad, inak slovenčina.
  const CI = window.CONTENT_I18N;
  const contentLang = (id) => CI.langFor(id, I18N.getLang());
  const htmlLang = (code) => (I18N.dict(code) ? I18N.info(code).htmlLang : code);
  const langOf = (l) => htmlLang(contentLang(l.id));
  const tr = (l) => CI.lesson(l, contentLang(l.id));
  const lessonTitle = (l) => `<span lang="${langOf(l)}">${esc(tr(l).title)}</span>`;
  // upozornenie, ak niektorá z lekcií nemá preklad do jazyka rozhrania (všetky / len niektoré)
  const contentNotice = (ls) => {
    if (I18N.getLang() === I18N.DEFAULT) return '';
    const missing = ls.filter((l) => contentLang(l.id) === CI.SOURCE).length;
    if (!missing) return '';
    return `<p class="notice">${esc(t(missing === ls.length ? 'contentNotice' : 'contentNoticeSome'))}</p>`;
  };

  // Zvolené zobrazenie hlavnej stránky (len pohodlie, predvolené sú témy).
  const VIEW_KEY = 'matika.view';
  function loadView() {
    try { return localStorage.getItem(VIEW_KEY) === 'rocniky' ? 'rocniky' : 'temy'; } catch (e) { return 'temy'; }
  }
  function saveView(v) {
    try { localStorage.setItem(VIEW_KEY, v); } catch (e) { /* ignorujeme */ }
  }

  // KaTeX sa načítava z CDN; ak nie je dostupný (offline bez cache), text zostane bez úpravy.
  function renderMath(el) {
    if (typeof renderMathInElement !== 'function') return;
    renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false
    });
  }

  function setPage(html) {
    app.innerHTML = html;
    if (window.FIGURES) app.querySelectorAll('[data-fig]').forEach((el) => FIGURES.mount(el));
    renderMath(app);
    window.scrollTo(0, 0);
  }

  function lessonStat(p) {
    return p && p.total
      ? t('statRate', { p: Math.round(100 * p.right / p.total), tasks: t('tasks', { n: p.total }) })
      : t('statNone');
  }

  const practiced = (prog, ls) => ls.filter((l) => prog[l.id] && prog[l.id].total).length;
  const progressBar = (done, total) =>
    `<div class="bar"><span style="width:${total ? Math.round(100 * done / total) : 0}%"></span></div>`;

  function homeByThemes(prog) {
    let html = `<p class="muted view-intro">${esc(t('viewIntro'))}</p><div class="grid">`;
    THEME_LIST.forEach((th) => {
      const ls = themeLessons(th);
      const done = practiced(prog, ls);
      const name = thName(th);
      const from = shortLevel(levelById(ls[0].level)), to = shortLevel(levelById(ls[ls.length - 1].level));
      html += `<a class="card theme-card" href="#/tema/${th.id}">
                 <div class="theme-icon" aria-hidden="true">${th.icon}</div>
                 <h3>${esc(name.title)}</h3><p>${esc(name.desc)}</p>
                 <div class="meta">${esc(t('lessons', { n: ls.length }))} · ${esc(from === to ? from : `${from} → ${to}`)} · ${esc(t('practicedCount', { n: done }))}</div>
                 ${progressBar(done, ls.length)}
               </a>`;
    });
    return html + '</div>';
  }

  function homeByLevels(prog) {
    let html = '';
    GROUPS.forEach((g) => {
      const levels = LEVELS.filter((lv) => lv.group === g.id);
      html += `<section class="level"><h2>${esc(grName(g))}</h2><div class="grid">`;
      levels.forEach((lv) => {
        const ls = lessonsOf(lv.id);
        const done = practiced(prog, ls);
        const name = lvName(lv);
        html += `<a class="card level-card" href="#/uroven/${lv.id}">
                   <h3>${esc(name.title)}</h3><p>${esc(name.desc)}</p>
                   <div class="meta">${esc(t('lessons', { n: ls.length }))} · ${esc(t('practicedCount', { n: done }))}</div>
                   ${progressBar(done, ls.length)}
                 </a>`;
      });
      html += '</div></section>';
    });
    return html;
  }

  function showHome() {
    const prog = loadProgress();
    const view = loadView();
    const tab = (v, label) =>
      `<button type="button" role="tab" class="seg${view === v ? ' active' : ''}" aria-selected="${view === v}" data-view="${v}">${esc(label)}</button>`;
    let html = `
      <section class="hero">
        <h1>${esc(t('appName'))}</h1>
        <p>${esc(t('heroText'))}</p>
      </section>
      <div class="view-switch" role="tablist" aria-label="${esc(t('viewLabel'))}">
        ${tab('temy', t('viewThemes'))}${tab('rocniky', t('viewLevels'))}
      </div>`;
    html += view === 'temy' ? homeByThemes(prog) : homeByLevels(prog);
    html += `<section class="install-note"><p>${t('installNote')}</p></section>`;
    setPage(html);
    app.querySelectorAll('.view-switch .seg').forEach((b) => b.addEventListener('click', () => {
      saveView(b.dataset.view);
      const y = window.scrollY;
      showHome();
      window.scrollTo(0, y);
    }));
  }

  function showTheme(themeId) {
    const th = themeById(themeId);
    const prog = loadProgress();
    const ls = themeLessons(th);
    const next = ls.find((l) => !(prog[l.id] && prog[l.id].total)) || ls[0];
    const done = practiced(prog, ls);
    const name = thName(th);
    let html = `<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / ${esc(t('topicsCrumb'))}</nav>
      <h1><span class="theme-icon inline" aria-hidden="true">${th.icon}</span> ${esc(name.title)}</h1>
      <p class="muted">${esc(name.desc)}</p>
      ${contentNotice(ls)}
      <div class="theme-head">
        <div class="meta">${esc(t('topicMeta', { lessons: t('lessons', { n: ls.length }), n: done }))}</div>
        ${progressBar(done, ls.length)}
        <div class="actions"><a class="btn btn-primary" href="#/lekcia/${next.id}">${esc(done ? t('continue') : t('start'))}: ${lessonTitle(next)}</a></div>
      </div>
      <ol class="path">`;
    let lastLevel = null;
    ls.forEach((l, k) => {
      if (l.level !== lastLevel) {
        const lv = levelById(l.level);
        html += `<li class="path-level">${esc(lv.group === 'zs' ? lvName(lv).title : `${grName(groupById(lv.group))} · ${lvName(lv).title}`)}</li>`;
        lastLevel = l.level;
      }
      const isDone = prog[l.id] && prog[l.id].total;
      html += `<li class="path-step${isDone ? ' done' : ''}">
          <a href="#/lekcia/${l.id}">
            <span class="step" aria-hidden="true">${isDone ? '✓' : k + 1}</span>
            <span class="step-body" lang="${langOf(l)}"><strong>${esc(tr(l).title)}</strong><span class="muted">${esc(tr(l).summary)}</span>
              <span class="meta">${esc(lessonStat(prog[l.id]))}</span></span>
          </a>
        </li>`;
    });
    html += `</ol>
      <h2>${esc(t('otherTopics'))}</h2>
      <nav class="chips">${THEME_LIST.filter((x) => x.id !== th.id).map((x) =>
        `<a class="chip" href="#/tema/${x.id}">${x.icon} ${esc(thName(x).title)}</a>`).join('')}</nav>`;
    setPage(html);
  }

  function showLevel(levelId) {
    const lv = levelById(levelId);
    const prog = loadProgress();
    const ls = lessonsOf(levelId);
    const name = lvName(lv);
    let html = `<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / ${esc(grName(groupById(lv.group)))}</nav>
      <h1>${esc(name.title)}</h1><p class="muted">${esc(name.desc)}</p>${contentNotice(ls)}`;
    // rýchle prepínanie medzi úrovňami tej istej skupiny (ročníky)
    const siblings = LEVELS.filter((x) => x.group === lv.group);
    if (siblings.length > 1) {
      html += `<nav class="chips">${siblings.map((x) =>
        `<a class="chip${x.id === lv.id ? ' active' : ''}" href="#/uroven/${x.id}">${esc(lvName(x).title)}</a>`).join('')}</nav>`;
    }
    html += '<div class="grid">';
    ls.forEach((l, k) => {
      html += `<a class="card" href="#/lekcia/${l.id}">
                 <div class="num">${k + 1}</div>
                 <h3 lang="${langOf(l)}">${esc(tr(l).title)}</h3><p lang="${langOf(l)}">${esc(tr(l).summary)}</p><div class="meta">${esc(lessonStat(prog[l.id]))}</div>
               </a>`;
    });
    html += '</div>';
    setPage(html);
  }

  function showLesson(id) {
    const all = allOrdered();
    const i = all.findIndex((l) => l.id === id);
    const L = tr(all[i]);
    const lang = langOf(L);
    const level = levelById(L.level);
    let html = `<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/uroven/${level.id}">${esc(lvName(level).title)}</a></nav>
      <h1 lang="${lang}">${esc(L.title)}</h1>${contentNotice([L])}<div lang="${lang}">`;
    html += L.theory.map((x) => (typeof x === 'string'
      ? `<div class="block theory">${x}</div>`
      : `<figure class="figure" data-fig="${x.fig}"><div class="fig-body"></div>${x.caption ? `<figcaption>${x.caption}</figcaption>` : ''}</figure>`
    )).join('');
    html += `</div><h2>${esc(t('solvedExamples'))}</h2>`;
    L.examples.forEach((ex, k) => {
      html += `<div class="block example">
        <div class="label">${esc(t('example', { n: k + 1 }))}</div>
        <p lang="${lang}">${ex.task}</p>
        <details><summary>${esc(t('showSteps'))}</summary>
          <ol class="steps" lang="${lang}">${ex.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
        </details>
      </div>`;
    });
    html += `<div class="actions"><a class="btn btn-primary" href="#/precvicuj/${L.id}">${esc(t('practiceLesson'))}</a></div>`;
    const pager = (label, prev, next) => `<nav class="pager-box"><div class="pager-label">${label}</div><div class="pager">
      ${prev ? `<a href="#/lekcia/${prev.id}">← ${lessonTitle(prev)}</a>` : '<span></span>'}
      ${next ? `<a href="#/lekcia/${next.id}">${lessonTitle(next)} →</a>` : '<span></span>'}
    </div></nav>`;
    // navigácia v rámci témy (od základov po zložitejšie) aj v rámci ročníka
    const th = themeOf(L.id);
    if (th) {
      const tl = themeLessons(th), j = tl.findIndex((l) => l.id === L.id);
      const link = `<a href="#/tema/${th.id}">${th.icon} ${esc(thName(th).title)}</a>`;
      html += pager(esc(t('navTopic', { topic: '\u0000', k: j + 1, n: tl.length })).replace('\u0000', link), tl[j - 1], tl[j + 1]);
    }
    const levelLink = `<a href="#/uroven/${level.id}">${esc(lvName(level).title)}</a>`;
    html += pager(esc(t(level.group === 'vs' ? 'navArea' : 'navGrade', { level: '\u0000' })).replace('\u0000', levelLink), all[i - 1], all[i + 1]);
    setPage(html);
  }

  function showPractice(id) {
    const L = lessonById(id);
    const cLang = contentLang(id), lang = htmlLang(cLang);
    const level = levelById(L.level);
    setPage(`
      <nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/uroven/${level.id}">${esc(lvName(level).title)}</a>
        / <a href="#/lekcia/${L.id}">${lessonTitle(L)}</a> / ${esc(t('practice'))}</nav>
      <h1>${esc(t('practice'))}</h1>
      ${contentNotice([L])}
      <div class="practice card-box">
        <div class="score">${esc(t('sessionScore'))} <span id="s-right">0</span> / <span id="s-total">0</span></div>
        <div class="question" id="q" aria-live="polite" lang="${lang}"></div>
        <div id="choices" class="choices" lang="${lang}" hidden></div>
        <form id="f" class="answer-row" autocomplete="off">
          <input id="ans" type="text" inputmode="decimal" placeholder="${esc(t('yourAnswer'))}" aria-label="${esc(t('yourAnswer'))}">
          <button class="btn btn-primary" type="submit">${esc(t('check'))}</button>
        </form>
        <div id="fb" class="feedback" aria-live="polite"></div>
        <div class="actions">
          <button class="btn" id="hint" type="button">${esc(t('hint'))}</button>
          <button class="btn" id="show" type="button">${esc(t('showSolution'))}</button>
          <button class="btn btn-primary" id="nxt" type="button" hidden>${esc(t('next'))}</button>
        </div>
        <div id="sol" class="solution" hidden></div>
        <p class="muted small" id="tip">${esc(t('inputTip'))}</p>
      </div>`);

    const el = {
      q: document.getElementById('q'), form: document.getElementById('f'), ans: document.getElementById('ans'),
      choices: document.getElementById('choices'), tip: document.getElementById('tip'),
      fb: document.getElementById('fb'), sol: document.getElementById('sol'), hint: document.getElementById('hint'),
      show: document.getElementById('show'), nxt: document.getElementById('nxt'),
      right: document.getElementById('s-right'), total: document.getElementById('s-total')
    };
    const session = { right: 0, total: 0 };
    let ex = null;
    let answered = false;

    function record(correct) {
      const prog = loadProgress();
      const p = prog[id] || { right: 0, total: 0 };
      p.total += 1;
      if (correct) p.right += 1;
      prog[id] = p;
      saveProgress(prog);
    }

    function newProblem() {
      ex = EXERCISES.make(id, cLang);
      answered = false;
      el.q.innerHTML = `<div class="q-text">${ex.q}</div>`;
      el.fb.textContent = '';
      el.fb.className = 'feedback';
      el.sol.hidden = true;
      el.sol.innerHTML = '';
      el.nxt.hidden = true;
      el.show.disabled = false;

      const isChoice = ex.type === 'choice';
      el.form.hidden = isChoice;
      el.choices.hidden = !isChoice;
      el.tip.hidden = isChoice || ex.type === 'text';
      el.choices.innerHTML = '';
      if (isChoice) {
        el.choices.innerHTML = ex.options.map((o, k) =>
          `<button type="button" class="btn choice" data-k="${k}">${esc(o)}</button>`).join('');
        renderMath(el.choices);
      } else {
        // číselná klávesnica len tam, kde nie je potrebné mínus ani oddeľovač viacerých čísel
        el.ans.inputMode = (ex.type === 'num' && !ex.signed) ? 'decimal' : 'text';
        el.ans.placeholder = ex.placeholder || t('yourAnswer');
        el.ans.value = '';
        el.ans.disabled = false;
      }
      renderMath(el.q);
      if (!isChoice) el.ans.focus();
    }

    function reveal() {
      el.sol.hidden = false;
      el.sol.innerHTML = `<p><strong>${esc(t('correctAnswer'))}</strong> <span lang="${lang}">${esc(EXERCISES.formatAnswer(ex))}</span></p><p lang="${lang}">${ex.solution}</p>`;
      renderMath(el.sol);
      el.nxt.hidden = false;
      el.show.disabled = true;
      el.ans.disabled = true;
      el.choices.querySelectorAll('.choice').forEach((b) => {
        b.disabled = true;
        if (ex.options[b.dataset.k] === String(ex.answer)) b.classList.add('correct');
      });
    }

    function evaluate(input, chosenBtn) {
      if (answered) return;
      const res = EXERCISES.check(ex, input);
      if (res === null) {
        el.fb.className = 'feedback warn';
        el.fb.textContent = ex.type === 'text' ? t('enterText') : t('enterNumber');
        return;
      }
      answered = true;
      session.total += 1;
      if (res) session.right += 1;
      record(res);
      el.fb.className = 'feedback ' + (res ? 'ok' : 'bad');
      el.fb.textContent = res ? t('correct') : t('wrong');
      el.right.textContent = session.right;
      el.total.textContent = session.total;
      if (chosenBtn && !res) chosenBtn.classList.add('wrong');
      reveal();
    }

    el.form.addEventListener('submit', (e) => {
      e.preventDefault();
      evaluate(el.ans.value);
    });

    el.choices.addEventListener('click', (e) => {
      const b = e.target.closest('.choice');
      if (b) evaluate(ex.options[b.dataset.k], b);
    });

    el.hint.addEventListener('click', () => {
      if (answered) return;
      el.fb.className = 'feedback';
      el.fb.innerHTML = `${esc(t('hintPrefix'))} <span lang="${lang}">${ex.hint}</span>`;
      renderMath(el.fb);
    });

    el.show.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      session.total += 1;
      el.total.textContent = session.total;
      record(false);
      el.fb.className = 'feedback';
      el.fb.textContent = t('seeSolution');
      reveal();
    });

    el.nxt.addEventListener('click', newProblem);
    newProblem();
  }

  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    if (parts[0] === 'uroven' && levelById(parts[1])) return showLevel(parts[1]);
    if (parts[0] === 'tema' && themeById(parts[1])) return showTheme(parts[1]);
    if (parts[0] === 'lekcia' && lessonById(parts[1])) return showLesson(parts[1]);
    if (parts[0] === 'precvicuj' && lessonById(parts[1])) return showPractice(parts[1]);
    return showHome();
  }

  /* ---------- vzhľad: 4 témy; bez voľby platí svetlá/tmavá podľa systému (bez atribútu data-theme) ---------- */
  const THEME_KEY = 'matika.theme';
  const THEME_COLORS = { light: '#2563eb', dark: '#0b1220', sepia: '#9a4f12', contrast: '#000000' };
  const themeSelect = document.getElementById('theme-select');
  const darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  const currentTheme = () => document.documentElement.getAttribute('data-theme') || (darkQuery && darkQuery.matches ? 'dark' : 'light');
  function syncTheme() {
    const v = currentTheme();
    themeSelect.value = v;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLORS[v]);
  }
  themeSelect.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', themeSelect.value);
    try { localStorage.setItem(THEME_KEY, themeSelect.value); } catch (e) { /* vzhľad platí aspoň do zatvorenia */ }
    syncTheme();
  });
  if (darkQuery && darkQuery.addEventListener) darkQuery.addEventListener('change', syncTheme);

  /* ---------- jazyk rozhrania (ako v Jocadiu): tlačidlo s vlajkou a rozbaľovací zoznam ---------- */
  const langWrap = document.getElementById('lang-wrap');
  const langBtn = document.getElementById('lang-btn');
  const langList = document.getElementById('lang-dropdown');

  // statické texty mimo #app (hlavička, päta, titulok)
  function applyStatic() {
    const info = I18N.info(I18N.getLang());
    document.documentElement.lang = info.htmlLang;
    document.title = t('appName');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('appDescription'));
    document.getElementById('brand-name').textContent = t('appName');
    document.getElementById('footer').textContent = t('footer');
    const install = document.getElementById('install-btn');
    install.setAttribute('aria-label', t('installAria'));
    install.querySelector('.hide-narrow').textContent = ' ' + t('install');
    themeSelect.setAttribute('aria-label', t('themeLabel'));
    themeSelect.title = t('themeLabel');
    const labels = { light: '☀️ ' + t('themeLight'), dark: '🌙 ' + t('themeDark'), sepia: '📜 ' + t('themeSepia'), contrast: '◐ ' + t('themeContrast') };
    [...themeSelect.options].forEach((o) => { o.textContent = labels[o.value]; });
    document.getElementById('lang-flag').textContent = info.flag;
    document.getElementById('lang-name').textContent = info.name;
    langBtn.setAttribute('aria-label', `${t('langLabel')}: ${info.name}`);
    langList.setAttribute('aria-label', t('langLabel'));
  }

  function buildLangList() {
    const cur = I18N.getLang();
    langList.innerHTML = I18N.languages().map((code) => {
      const info = I18N.info(code);
      return `<button type="button" role="option" class="lang-option${code === cur ? ' active' : ''}" aria-selected="${code === cur}" data-code="${code}" lang="${info.htmlLang}">
        <span class="flag" aria-hidden="true">${info.flag}</span><span>${esc(info.name)}</span>${code === cur ? '<span class="check" aria-hidden="true">✓</span>' : ''}
      </button>`;
    }).join('');
  }

  function setLangOpen(open) {
    langWrap.classList.toggle('open', open);
    langList.hidden = !open;
    langBtn.setAttribute('aria-expanded', String(open));
    if (open) {
      buildLangList();
      const active = langList.querySelector('.active') || langList.querySelector('.lang-option');
      if (active) active.focus();
    }
  }

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setLangOpen(langList.hidden);
  });
  langList.addEventListener('click', (e) => {
    const opt = e.target.closest('.lang-option');
    if (!opt) return;
    I18N.setLang(opt.dataset.code);
    setLangOpen(false);
    applyStatic();
    const y = window.scrollY;
    route();
    window.scrollTo(0, y);
    langBtn.focus();
  });
  // klávesnica: šípky v zozname, Escape zavrie
  langList.addEventListener('keydown', (e) => {
    const opts = [...langList.querySelectorAll('.lang-option')];
    const i = opts.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      opts[(i + (e.key === 'ArrowDown' ? 1 : opts.length - 1)) % opts.length].focus();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !langList.hidden) { setLangOpen(false); langBtn.focus(); }
  });
  document.addEventListener('click', (e) => {
    if (!langWrap.contains(e.target)) setLangOpen(false);
  });

  applyStatic();
  syncTheme();
  window.addEventListener('hashchange', route);
  route();

  /* ---------- inštalácia PWA: Chrome/Edge na desktope a Androide posielajú beforeinstallprompt ---------- */
  const installBtn = document.getElementById('install-btn');
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
  });
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.hidden = true;
  });
  window.addEventListener('appinstalled', () => { installBtn.hidden = true; });

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* offline režim nie je dostupný */ });
  }
})();
