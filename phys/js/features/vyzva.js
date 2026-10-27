/* Denná výzva (5 úloh, pre všetkých v ten deň rovnaké pre daný ročník – semienko z dátumu), séria dní
   a „pokračovať tam, kde som skončil“ na hlavnej stránke. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const COUNT = 5;

  // ročník pre výzvu: nastavenie, inak úroveň naposledy precvičovanej lekcie
  function lastLesson() {
    const pr = STORE.progress();
    let best = null;
    Object.entries(pr).forEach(([id, p]) => {
      if (APP.lessonById(id) && p.last && (!best || p.last > best.last || (p.last === best.last && p.total > best.total))) best = { id, last: p.last, total: p.total };
    });
    return best ? APP.lessonById(best.id) : null;
  }
  function myLevel() {
    const s = STORE.settings().myLevel;
    if (s && APP.levelById(s)) return s;
    const L = lastLesson();
    return L ? L.level : null;
  }

  function plan(level, date) {
    const ls = APP.lessonsOf(level).filter((l) => EXERCISES.has(l.id));
    const seed = `${date}|${level}`;
    const picked = EXERCISES.withSeed(seed, () => EXERCISES.util.shuffle(ls)).slice(0, COUNT);
    while (picked.length < COUNT && ls.length) picked.push(ls[picked.length % ls.length]);
    return picked.map((l, i) => ({ id: l.id, seed: `${seed}|${i}` }));
  }

  APP.addHomePanel(() => {
    const n = STORE.dayStreak();
    const today = STORE.activity()[STORE.day()];
    return `<div class="card today-card">
      <div class="today-icon" aria-hidden="true">🔥</div>
      <h3>${esc(t('streakTitle'))}</h3>
      <p>${esc(n ? t('streakDays', { n }) : t('streakNone'))}</p>
      <p class="muted small">${esc(today ? t('todaySolved', { n: today.n }) : t('todayNothing'))}</p>
    </div>`;
  });
  APP.addHomePanel(() => {
    const d = STORE.daily();
    return `<a class="card today-card${d && d.done ? ' done' : ' attention'}" href="#/vyzva">
      <div class="today-icon" aria-hidden="true">🎯</div>
      <h3>${esc(t('dailyTitle'))}</h3>
      <p>${esc(d && d.done ? t('dailyDone', { k: d.right, n: d.total }) : t('dailyTodo', { n: COUNT }))}</p>
    </a>`;
  });
  APP.addHomePanel(() => {
    const L = lastLesson();
    if (!L) return '';
    return `<a class="card today-card" href="#/precvicuj/${L.id}">
      <div class="today-icon" aria-hidden="true">▶️</div>
      <h3>${esc(t('continueTitle'))}</h3>
      <p>${APP.lessonTitle(L)} ${APP.stateBadge(L.id)}</p>
    </a>`;
  });

  function levelPicker(cur) {
    return `<label class="field">${esc(t('myLevel'))}
      <select id="lvl">${!cur ? `<option value="">${esc(t('chooseLevel'))}</option>` : ''}${LEVELS.map((lv) =>
        `<option value="${lv.id}"${lv.id === cur ? ' selected' : ''}>${esc(APP.lvName(lv).title)}</option>`).join('')}</select></label>`;
  }

  function page() {
    const level = myLevel();
    const d = STORE.daily();
    const head = `<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav><h1>🎯 ${esc(t('dailyTitle'))}</h1>
      <p class="muted">${esc(t('dailyIntro', { n: COUNT }))}</p>`;
    if (!level) {
      APP.setPage(`${head}<div class="block">${levelPicker(null)}</div>`);
      document.getElementById('lvl').addEventListener('change', (e) => {
        if (e.target.value) { STORE.setSetting('myLevel', e.target.value); page(); }
      });
      return;
    }
    APP.setPage(`${head}
      <div class="block daily-head">${levelPicker(level)}
        ${d && d.done ? `<p><strong>${esc(t('dailyDone', { k: d.right, n: d.total }))}</strong> ${esc(t('dailyAgain'))}</p>` : ''}</div>
      <div id="pw"></div>`);
    document.getElementById('lvl').addEventListener('change', (e) => { STORE.setSetting('myLevel', e.target.value); page(); });
    const items = plan(level, STORE.day());
    const already = d && d.done;
    PROBLEM.mount(document.getElementById('pw'), {
      mode: 'practice',
      total: COUNT,
      showFrom: true,
      next: (i) => (i < items.length ? { id: items[i].id, ex: EXERCISES.make(items[i].id, APP.contentLang(items[i].id), items[i].seed) } : null),
      record: (r) => STORE.record(r.id, r.correct, { mode: 'daily', ms: r.ms, steps: r.steps }),
      onDone: (results) => {
        const right = results.filter((r) => r.correct).length;
        if (!already) STORE.setDaily({ done: true, level, right, total: results.length });
        APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
          <h1>🎯 ${esc(t('dailyTitle'))}</h1>
          <p class="big-score">${right} / ${results.length}</p>
          <p>${esc(right === results.length ? t('dailyPerfect') : t('dailyFinished'))}</p>
          <p class="muted">${esc(t('streakDays', { n: STORE.dayStreak() }))}</p>
          <div class="actions"><a class="btn btn-primary" href="#/">${esc(t('home'))}</a></div>`);
        APP.applyStatic();
      }
    });
  }

  APP.route('vyzva', page);
  APP.addMenu({ href: '#/vyzva', icon: '🎯', key: 'menuDaily', badge: () => (STORE.daily() && STORE.daily().done ? '✓' : '') });
})();
