/* Opakovanie v rozostupoch: lekcie, ktoré podľa STORE treba dnes zopakovať (interval 1, 3, 7, 16, 30, 60 dní),
   a „slabé miesta“ (nízka úspešnosť). Relácia: z každej lekcie 2 úlohy, výsledky posunú interval. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const PER_LESSON = 2;
  const MAX_LESSONS = 10;

  const existing = (ids) => ids.filter((id) => APP.lessonById(id) && EXERCISES.has(id));
  const due = () => existing(STORE.dueList());
  // slabé miesta: aspoň 4 pokusy a úspešnosť pod 60 %, najslabšie prvé
  function weak() {
    const pr = STORE.progress();
    return existing(Object.keys(pr).filter((id) => pr[id].total >= 4 && pr[id].right / pr[id].total < 0.6))
      .sort((a, b) => pr[a].right / pr[a].total - pr[b].right / pr[b].total);
  }

  APP.addHomePanel(() => {
    const anything = Object.keys(STORE.progress()).length > 0;
    if (!anything) return '';
    const n = due().length;
    return `<a class="card today-card${n ? ' attention' : ''}" href="#/opakovanie">
      <div class="today-icon" aria-hidden="true">🔁</div>
      <h3>${esc(t('reviewTitle'))}</h3>
      <p>${esc(n ? t('reviewDue', { n }) : t('reviewNone'))}</p>
    </a>`;
  });

  function list(ids) {
    return `<ul class="lesson-list">${ids.map((id) => {
      const L = APP.lessonById(id), p = STORE.lesson(id);
      return `<li><a href="#/lekcia/${id}">${APP.lessonTitle(L)}</a> ${APP.stateBadge(id)}
        <span class="muted small">${p && p.total ? esc(t('statRate', { p: Math.round(100 * p.right / p.total), tasks: t('tasks', { n: p.total }) })) : ''}</span></li>`;
    }).join('')}</ul>`;
  }

  function overview() {
    const d = due(), w = weak().filter((id) => !d.includes(id));
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🔁 ${esc(t('reviewTitle'))}</h1>
      <p class="muted">${esc(t('reviewIntro'))}</p>
      <section class="block">
        <h2>${esc(t('reviewDueTitle', { n: d.length }))}</h2>
        ${d.length ? `${list(d.slice(0, 30))}<div class="actions"><a class="btn btn-primary" href="#/opakovanie/start/due">${esc(t('reviewStart', { n: Math.min(d.length, MAX_LESSONS) }))}</a></div>`
                   : `<p>${esc(t('reviewNone'))}</p>`}
      </section>
      <section class="block">
        <h2>${esc(t('weakTitle'))}</h2>
        ${w.length ? `${list(w.slice(0, 15))}<div class="actions"><a class="btn" href="#/opakovanie/start/weak">${esc(t('weakStart'))}</a></div>`
                   : `<p class="muted">${esc(t('weakNone'))}</p>`}
      </section>`);
  }

  function session(kind) {
    const ids = (kind === 'weak' ? weak() : due()).slice(0, MAX_LESSONS);
    if (!ids.length) { overview(); return; }
    const total = ids.length * PER_LESSON;
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/opakovanie">${esc(t('reviewTitle'))}</a></nav>
      <h1>🔁 ${esc(kind === 'weak' ? t('weakTitle') : t('reviewTitle'))}</h1>
      <div id="pw"></div>`);
    PROBLEM.mount(document.getElementById('pw'), {
      mode: 'practice',
      total,
      showFrom: true,
      next: (i) => {
        if (i >= total) return null;
        const id = ids[Math.floor(i / PER_LESSON)];
        return { id, ex: EXERCISES.make(id, APP.contentLang(id)) };
      },
      record: (r) => STORE.record(r.id, r.correct, { mode: 'review', ms: r.ms, steps: r.steps }),
      onDone: (results) => {
        STORE.emit('reviewDone', { n: results.length });
        const right = results.filter((r) => r.correct).length;
        APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/opakovanie">${esc(t('reviewTitle'))}</a></nav>
          <h1>🔁 ${esc(t('reviewDoneTitle'))}</h1>
          <p class="big-score">${right} / ${results.length}</p>
          <p class="muted">${esc(t('reviewDoneText'))}</p>
          ${list(ids)}
          <div class="actions"><a class="btn btn-primary" href="#/">${esc(t('home'))}</a><a class="btn" href="#/opakovanie">${esc(t('reviewTitle'))}</a></div>`);
        APP.applyStatic();
      }
    });
  }

  APP.route('opakovanie', (p) => { if (p[0] === 'start') session(p[1]); else overview(); });
  APP.addMenu({ href: '#/opakovanie', icon: '🔁', key: 'menuReview', badge: () => { const n = due().length; return n ? String(n) : ''; } });
})();
