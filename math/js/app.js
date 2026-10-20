/* Hlavná logika: smerovanie (hash), zobrazenie úrovní, tém, lekcií a precvičovania, vzhľad, jazyk
   rozhrania, menu a inštalácia PWA. Texty rozhrania idú cez I18N.t (js/i18n.js, js/lang/*.js).
   Obsah lekcie sa zobrazí v jazyku rozhrania, ak má preklad (js/content-i18n.js), inak po slovensky
   s upozornením; atribút lang zodpovedá jazyku, ktorý sa naozaj zobrazuje.

   Rozšírenia (js/features/*.js) sa registrujú cez window.APP: vlastné stránky (APP.route), položky menu
   (APP.addMenu), panely na hlavnej stránke (APP.addHomePanel) a v lekcii (APP.addLessonPanel).
   Úlohy rieši spoločný komponent PROBLEM (js/widget.js), postup ukladá STORE (js/store.js).
   Prvé vykreslenie počká na DOMContentLoaded, aby sa rozšírenia stihli zaregistrovať. */
(function () {
  'use strict';

  const app = document.getElementById('app');
  const t = I18N.t;

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

  /* ---------- stav zvládnutia (STORE) ---------- */
  const STATE_ICON = { none: '○', learning: '◐', mastered: '●' };
  const STATE_KEY = { none: 'stateNone', learning: 'stateLearning', mastered: 'stateMastered' };
  // ikonka stavu lekcie (+ hodinky, ak ju treba zopakovať)
  function stateBadge(id) {
    const p = STORE.lesson(id), st = STORE.state(id, p);
    const due = STORE.isDue(p);
    return `<span class="mstate m-${st}" title="${esc(t(STATE_KEY[st]))}" aria-label="${esc(t(STATE_KEY[st]))}">${STATE_ICON[st]}</span>${due ? `<span class="due" title="${esc(t('dueTitle'))}" aria-label="${esc(t('dueTitle'))}">⏰</span>` : ''}`;
  }
  function lessonStat(id) {
    const p = STORE.lesson(id);
    if (!p || !p.total) return t('statNone');
    const rate = t('statRate', { p: Math.round(100 * p.right / p.total), tasks: t('tasks', { n: p.total }) });
    return `${t(STATE_KEY[STORE.state(id, p)])} · ${rate}`;
  }
  const masteredCount = (ls) => ls.filter((l) => STORE.state(l.id) === 'mastered').length;
  const practicedCount = (ls) => ls.filter((l) => STORE.state(l.id) !== 'none').length;
  // pruh: zvládnuté (plná farba) a rozpracované (svetlejšia)
  const progressBar = (ls) => {
    const n = ls.length || 1, m = masteredCount(ls), p = practicedCount(ls) - m;
    return `<div class="bar" role="img" aria-label="${esc(t('barLabel', { m, p, n: ls.length }))}"><span style="width:${100 * m / n}%"></span><span class="bar-learning" style="width:${100 * p / n}%"></span></div>`;
  };
  const progressMeta = (ls) => t('progressMeta', { m: masteredCount(ls), p: practicedCount(ls) });

  // Predpoklady lekcie: explicitné pole prereq, inak predchádzajúca lekcia v tej istej téme.
  function prereqs(id) {
    const L = lessonById(id);
    if (L && Array.isArray(L.prereq)) return L.prereq.map(lessonById).filter(Boolean);
    const th = themeOf(id);
    if (!th) return [];
    const tl = themeLessons(th), j = tl.findIndex((l) => l.id === id);
    return j > 0 ? [tl[j - 1]] : [];
  }

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

  /* ---------- rozšírenia ---------- */
  const routes = {};
  const menu = [];
  const homePanels = [];
  const lessonPanels = [];

  // krátka správa v rohu (odznaky, uloženie…)
  function toast(html, ms = 4500) {
    let box = document.getElementById('toasts');
    if (!box) {
      box = document.createElement('div');
      box.id = 'toasts';
      box.setAttribute('aria-live', 'polite');
      document.body.appendChild(box);
    }
    const d = document.createElement('div');
    d.className = 'toast';
    d.innerHTML = html;
    box.appendChild(d);
    setTimeout(() => { d.classList.add('out'); setTimeout(() => d.remove(), 400); }, ms);
  }

  /* ---------- hlavná stránka ---------- */
  function homeByThemes() {
    let html = `<p class="muted view-intro">${esc(t('viewIntro'))}</p><div class="grid">`;
    THEME_LIST.forEach((th) => {
      const ls = themeLessons(th);
      const name = thName(th);
      const from = shortLevel(levelById(ls[0].level)), to = shortLevel(levelById(ls[ls.length - 1].level));
      html += `<a class="card theme-card" href="#/tema/${th.id}">
                 <div class="theme-icon" aria-hidden="true">${th.icon}</div>
                 <h3>${esc(name.title)}</h3><p>${esc(name.desc)}</p>
                 <div class="meta">${esc(t('lessons', { n: ls.length }))} · ${esc(from === to ? from : `${from} → ${to}`)} · ${esc(progressMeta(ls))}</div>
                 ${progressBar(ls)}
               </a>`;
    });
    return html + '</div>';
  }

  function homeByLevels() {
    let html = '';
    GROUPS.forEach((g) => {
      const levels = LEVELS.filter((lv) => lv.group === g.id);
      html += `<section class="level"><h2>${esc(grName(g))}</h2><div class="grid">`;
      levels.forEach((lv) => {
        const ls = lessonsOf(lv.id);
        const name = lvName(lv);
        html += `<a class="card level-card" href="#/uroven/${lv.id}">
                   <h3>${esc(name.title)}</h3><p>${esc(name.desc)}</p>
                   <div class="meta">${esc(t('lessons', { n: ls.length }))} · ${esc(progressMeta(ls))}</div>
                   ${progressBar(ls)}
                 </a>`;
      });
      html += '</div></section>';
    });
    return html;
  }

  function showHome() {
    const view = loadView();
    const tab = (v, label) =>
      `<button type="button" role="tab" class="seg${view === v ? ' active' : ''}" aria-selected="${view === v}" data-view="${v}">${esc(label)}</button>`;
    const panels = homePanels.map((fn) => { try { return fn() || ''; } catch (e) { console.error(e); return ''; } }).join('');
    let html = `
      <section class="hero">
        <h1>${esc(t('appName'))}</h1>
        <p>${esc(t('heroText'))}</p>
      </section>
      ${panels ? `<section class="today" aria-label="${esc(t('todayTitle'))}"><h2>${esc(t('todayTitle'))}</h2><div class="today-grid">${panels}</div></section>` : ''}
      <div class="view-switch" role="tablist" aria-label="${esc(t('viewLabel'))}">
        ${tab('temy', t('viewThemes'))}${tab('rocniky', t('viewLevels'))}
      </div>`;
    html += view === 'temy' ? homeByThemes() : homeByLevels();
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
    const ls = themeLessons(th);
    const started = practicedCount(ls) > 0;
    const placed = STORE.placement(`tema:${th.id}`);
    // ešte nezačatá téma s vstupným testom začína odporúčanou lekciou
    const next = (!started && placed && lessonById(placed.lesson)) || ls.find((l) => STORE.state(l.id) !== 'mastered') || ls[0];
    const name = thName(th);
    let html = `<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / ${esc(t('topicsCrumb'))}</nav>
      <h1><span class="theme-icon inline" aria-hidden="true">${th.icon}</span> ${esc(name.title)}</h1>
      <p class="muted">${esc(name.desc)}</p>
      ${contentNotice(ls)}
      <div class="theme-head">
        <div class="meta">${esc(t('topicMeta', { lessons: t('lessons', { n: ls.length }), n: masteredCount(ls) }))}</div>
        ${progressBar(ls)}
        <div class="actions">
          <a class="btn btn-primary" href="#/lekcia/${next.id}">${esc(started ? t('continue') : t('start'))}: ${lessonTitle(next)}</a>
          ${routes.vstupny ? `<a class="btn" href="#/vstupny/tema/${th.id}">🧭 ${esc(t('placementBtn'))}</a>` : ''}
          ${routes.vzorce && window.FORMULAS && FORMULAS[th.id] ? `<a class="btn" href="#/vzorce/${th.id}">📐 ${esc(t('formulasBtn'))}</a>` : ''}
        </div>
        ${placed && lessonById(placed.lesson) ? `<p class="muted small">${esc(t('placementResult'))} ${lessonTitle(lessonById(placed.lesson))}</p>` : ''}
      </div>
      <ol class="path">`;
    let lastLevel = null;
    ls.forEach((l, k) => {
      if (l.level !== lastLevel) {
        const lv = levelById(l.level);
        html += `<li class="path-level">${esc(lv.group === 'zs' ? lvName(lv).title : `${grName(groupById(lv.group))} · ${lvName(lv).title}`)}</li>`;
        lastLevel = l.level;
      }
      const st = STORE.state(l.id);
      html += `<li class="path-step s-${st}">
          <a href="#/lekcia/${l.id}">
            <span class="step" aria-hidden="true">${st === 'mastered' ? '✓' : k + 1}</span>
            <span class="step-body" lang="${langOf(l)}"><strong>${esc(tr(l).title)} ${stateBadge(l.id)}</strong><span class="muted">${esc(tr(l).summary)}</span>
              <span class="meta">${esc(lessonStat(l.id))}</span></span>
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
    html += `<div class="level-head"><div class="meta">${esc(progressMeta(ls))}</div>${progressBar(ls)}
      ${routes.vstupny ? `<div class="actions"><a class="btn" href="#/vstupny/uroven/${lv.id}">🧭 ${esc(t('placementBtn'))}</a></div>` : ''}</div>`;
    html += '<div class="grid">';
    ls.forEach((l, k) => {
      html += `<a class="card" href="#/lekcia/${l.id}">
                 <div class="num">${k + 1}</div>
                 <h3 lang="${langOf(l)}">${esc(tr(l).title)} ${stateBadge(l.id)}</h3><p lang="${langOf(l)}">${esc(tr(l).summary)}</p><div class="meta">${esc(lessonStat(l.id))}</div>
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
    const pre = prereqs(id);
    let html = `<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/uroven/${level.id}">${esc(lvName(level).title)}</a></nav>
      <h1 lang="${lang}">${esc(L.title)} ${stateBadge(id)}</h1>${contentNotice([L])}
      <div class="lesson-tools"><span class="muted small">${esc(lessonStat(id))}</span><span class="tts-slot"></span></div>`;
    // predpoklady: predchádzajúca lekcia v téme (ak ešte nie je zvládnutá, upozorníme)
    if (pre.length) {
      const weak = pre.filter((p) => STORE.state(p.id) !== 'mastered');
      html += `<div class="prereq${weak.length ? ' weak' : ''}"><strong>${esc(t('prereqTitle'))}</strong>
        ${pre.map((p) => `<a href="#/lekcia/${p.id}">${lessonTitle(p)}</a> ${stateBadge(p.id)}`).join(', ')}
        ${weak.length ? `<span class="muted small">${esc(t('prereqHint'))}</span>` : ''}</div>`;
    }
    html += `<div class="lesson-body" lang="${lang}">`;
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
    html += lessonPanels.map((fn) => { try { return fn(all[i]) || ''; } catch (e) { console.error(e); return ''; } }).join('');
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
    // čítanie lekcie nahlas (teória a príklady)
    if (window.TTS) {
      const b = TTS.button(() => app.querySelector('.lesson-body'), contentLang(id));
      if (b) app.querySelector('.tts-slot').appendChild(b);
    }
  }

  function showPractice(id) {
    const L = lessonById(id);
    const cLang = contentLang(id);
    const level = levelById(L.level);
    const pre = prereqs(id);
    setPage(`
      <nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/uroven/${level.id}">${esc(lvName(level).title)}</a>
        / <a href="#/lekcia/${L.id}">${lessonTitle(L)}</a> / ${esc(t('practice'))}</nav>
      <h1>${esc(t('practice'))} ${stateBadge(id)}</h1>
      ${contentNotice([L])}
      <div class="pw-mastery muted small">${esc(lessonStat(id))}</div>
      <div class="pw-suggest" hidden></div>
      <div id="pw"></div>`);
    const mastery = app.querySelector('.pw-mastery'), suggest = app.querySelector('.pw-suggest');
    let suggested = false;
    PROBLEM.mount(document.getElementById('pw'), {
      mode: 'practice',
      next: () => ({ id, ex: EXERCISES.make(id, cLang) }),
      onAnswer: () => {
        mastery.textContent = lessonStat(id);
        // keď to opakovane nejde (3 chyby z posledných 4), odporučíme predpoklad – raz za reláciu
        const p = STORE.lesson(id);
        const recent = ((p && p.hist) || '').slice(-4);
        const weakPre = pre.filter((x) => STORE.state(x.id) !== 'mastered');
        if (!suggested && weakPre.length && (recent.match(/0/g) || []).length >= 3) {
          suggested = true;
          suggest.hidden = false;
          suggest.innerHTML = `💡 ${esc(t('prereqSuggest'))} ${weakPre.map((x) => `<a href="#/lekcia/${x.id}">${lessonTitle(x)}</a>`).join(', ')}`;
        }
      }
    });
  }

  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    if (window.TTS) TTS.stop();
    if (routes[parts[0]]) {
      try { if (routes[parts[0]](parts.slice(1)) !== false) return; } catch (e) { console.error(e); }
    }
    if (parts[0] === 'uroven' && levelById(parts[1])) return showLevel(parts[1]);
    if (parts[0] === 'tema' && themeById(parts[1])) return showTheme(parts[1]);
    if (parts[0] === 'lekcia' && lessonById(parts[1])) return showLesson(parts[1]);
    if (parts[0] === 'precvicuj' && lessonById(parts[1])) return showPractice(parts[1]);
    return showHome();
  }

  /* ---------- vzhľad: 4 témy, predvolená tmavá; voľba je v Nastaveniach ---------- */
  const THEME_KEY = 'matika.theme';
  const THEME_DEFAULT = 'dark';
  const THEME_COLORS = { light: '#2563eb', dark: '#0b1220', sepia: '#9a4f12', contrast: '#000000' };
  const THEME_ICONS = { light: '☀️', dark: '🌙', sepia: '📜', contrast: '◐' };
  const THEME_KEYS = { light: 'themeLight', dark: 'themeDark', sepia: 'themeSepia', contrast: 'themeContrast' };
  function storedTheme() {
    try { const v = localStorage.getItem(THEME_KEY); return THEME_COLORS[v] ? v : THEME_DEFAULT; } catch (e) { return THEME_DEFAULT; }
  }
  const currentTheme = () => document.documentElement.getAttribute('data-theme') || THEME_DEFAULT;
  function applyTheme(v) {
    document.documentElement.setAttribute('data-theme', v);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLORS[v]);
  }
  function setTheme(v) {
    if (!THEME_COLORS[v]) return;
    try { localStorage.setItem(THEME_KEY, v); } catch (e) { /* vzhľad platí aspoň do zatvorenia */ }
    applyTheme(v);
  }
  const themeOptions = () => Object.keys(THEME_COLORS).map((id) => ({ id, icon: THEME_ICONS[id], label: t(THEME_KEYS[id]) }));

  /* ---------- písmo pre ľahšie čítanie (nastavenie) ---------- */
  const FONT_URLS = {
    readable: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap',
    lexend: 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;600&display=swap'
  };
  function applyReading() {
    const s = STORE.settings();
    const root = document.documentElement;
    root.classList.toggle('font-readable', s.font === 'readable');
    root.classList.toggle('font-lexend', s.font === 'lexend');
    root.classList.toggle('wide-spacing', !!s.spacing);
    if (FONT_URLS[s.font] && !document.querySelector(`link[data-font="${s.font}"]`)) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = FONT_URLS[s.font];
      l.dataset.font = s.font;
      document.head.appendChild(l);
    }
  }
  STORE.on('settings', (e) => { if (e.key === 'font' || e.key === 'spacing') applyReading(); });

  /* ---------- rozbaľovacie ponuky v hlavičke (jazyk, menu) ---------- */
  function dropdown(wrap, btn, list, build) {
    function setOpen(open) {
      wrap.classList.toggle('open', open);
      list.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      if (open) {
        build();
        const first = list.querySelector('.active') || list.querySelector('a, button');
        if (first) first.focus();
      }
    }
    btn.addEventListener('click', (e) => { e.stopPropagation(); setOpen(list.hidden); });
    list.addEventListener('keydown', (e) => {
      const opts = [...list.querySelectorAll('a, button')];
      const i = opts.indexOf(document.activeElement);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        opts[(i + (e.key === 'ArrowDown' ? 1 : opts.length - 1)) % opts.length].focus();
      }
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !list.hidden) { setOpen(false); btn.focus(); } });
    document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) setOpen(false); });
    return setOpen;
  }

  // jazyk rozhrania (ako v Jocadiu): tlačidlo s vlajkou a rozbaľovací zoznam
  const langWrap = document.getElementById('lang-wrap');
  const langBtn = document.getElementById('lang-btn');
  const langList = document.getElementById('lang-dropdown');
  const setLangOpen = dropdown(langWrap, langBtn, langList, () => {
    const cur = I18N.getLang();
    langList.innerHTML = I18N.languages().map((code) => {
      const info = I18N.info(code);
      return `<button type="button" role="option" class="lang-option${code === cur ? ' active' : ''}" aria-selected="${code === cur}" data-code="${code}" lang="${info.htmlLang}">
        <span class="flag" aria-hidden="true">${info.flag}</span><span>${esc(info.name)}</span>${code === cur ? '<span class="check" aria-hidden="true">✓</span>' : ''}
      </button>`;
    }).join('');
  });
  langList.addEventListener('click', (e) => {
    const opt = e.target.closest('.lang-option');
    if (!opt) return;
    I18N.setLang(opt.dataset.code);
    setLangOpen(false);
    langBtn.focus();
    // preklady obsahu sa pre nový jazyk najprv načítajú, potom sa stránka prekreslí
    CONTENT_I18N.load(opt.dataset.code).then(() => {
      applyStatic();
      const y = window.scrollY;
      route();
      window.scrollTo(0, y);
    });
  });

  // menu s ďalšími stránkami (opakovanie, testy, vzorce, nastavenia…)
  const menuWrap = document.getElementById('menu-wrap');
  const menuBtn = document.getElementById('menu-btn');
  const menuList = document.getElementById('menu-dropdown');
  const setMenuOpen = dropdown(menuWrap, menuBtn, menuList, () => {
    const cur = location.hash;
    menuList.innerHTML = menu.map((m) => {
      const badge = m.badge ? m.badge() : '';
      return `<a class="lang-option menu-item${cur.startsWith(m.href) ? ' active' : ''}" href="${m.href}" role="menuitem">
        <span class="flag" aria-hidden="true">${m.icon}</span><span>${esc(t(m.key))}</span>${badge ? `<span class="menu-badge">${esc(badge)}</span>` : ''}
      </a>`;
    }).join('');
  });
  menuList.addEventListener('click', (e) => { if (e.target.closest('a')) setMenuOpen(false); });

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
    const topQ = document.getElementById('top-q'), topBtn = document.getElementById('top-search-btn');
    topQ.placeholder = t('searchPlaceholder');
    topQ.setAttribute('aria-label', t('searchTitle'));
    topBtn.setAttribute('aria-label', t('searchBtn'));
    topBtn.title = t('searchTitle');
    document.getElementById('lang-flag').textContent = info.flag;
    document.getElementById('lang-name').textContent = info.name;
    langBtn.setAttribute('aria-label', `${t('langLabel')}: ${info.name}`);
    langList.setAttribute('aria-label', t('langLabel'));
    menuBtn.setAttribute('aria-label', t('menuLabel'));
    menuBtn.title = t('menuLabel');
    menuList.setAttribute('aria-label', t('menuLabel'));
    // počet lekcií na zopakovanie pri ikonke menu
    const due = STORE.dueList().length;
    const dot = document.getElementById('menu-dot');
    dot.hidden = !due;
    dot.textContent = due > 99 ? '99+' : String(due);
  }

  /* ---------- API pre rozšírenia ---------- */
  window.APP = {
    t, esc, renderMath, setPage, toast, el: app,
    levelById, lessonById, groupById, lessonsOf, allOrdered,
    themeById, themeOf, themeLessons, THEMES: THEME_LIST,
    lvName, thName, grName, shortLevel, tr, lessonTitle, langOf, contentLang, htmlLang, contentNotice,
    stateBadge, lessonStat, progressBar, progressMeta, prereqs,
    route: (name, fn) => { routes[name] = fn; },
    addMenu: (item) => { menu.push(item); },
    addHomePanel: (fn) => { homePanels.push(fn); },
    addLessonPanel: (fn) => { lessonPanels.push(fn); },
    refresh: () => { applyStatic(); route(); },
    applyStatic,
    getTheme: currentTheme, setTheme, themeOptions
  };

  function start() {
    applyReading();
    applyStatic();
    applyTheme(storedTheme());
    window.addEventListener('hashchange', () => { route(); applyStatic(); });
    STORE.on('import', () => { applyReading(); applyTheme(storedTheme()); APP.refresh(); });
    STORE.on('mastered', (ev) => {
      const L = lessonById(ev.id);
      if (L) toast(`🎉 ${esc(t('masteredToast'))} ${lessonTitle(L)}`);
    });
    route();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else setTimeout(start);

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
