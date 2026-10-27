/* Odznaky (motivácia): pravidlá sa vyhodnocujú po každej odpovedi, zvládnutí lekcie, teste, dennej výzve
   a opakovaní. Získaný odznak ukáže oznámenie; prehľad je na stránke #/odznaky. */
(function () {
  'use strict';
  const { t, esc } = APP;

  const sum = (f) => Object.values(STORE.progress()).reduce((s, p) => s + f(p), 0);
  const rights = () => sum((p) => p.right || 0);
  const mastered = () => Object.values(STORE.progress()).filter((p) => p.mastered).length;
  const allMastered = (ls) => ls.length > 0 && ls.every((l) => STORE.state(l.id) === 'mastered');

  // id → { icon, test(kontext) }; názvy a opisy sú v slovníku (badge_<id>, badge_<id>_d)
  const BADGES = [
    { id: 'first', icon: '🌱', test: () => rights() >= 1 },
    { id: 'ten', icon: '🔟', test: () => rights() >= 10 },
    { id: 'hundred', icon: '💯', test: () => rights() >= 100 },
    { id: 'thousand', icon: '🏔️', test: () => rights() >= 1000 },
    { id: 'row10', icon: '🎯', test: (c) => c.ev && c.ev.p && c.ev.p.streak >= 10 },
    { id: 'steps', icon: '🪜', test: (c) => c.ev && c.ev.steps && c.ev.correct },
    { id: 'master1', icon: '⭐', test: () => mastered() >= 1 },
    { id: 'master10', icon: '🌟', test: () => mastered() >= 10 },
    { id: 'master50', icon: '🏆', test: () => mastered() >= 50 },
    { id: 'level', icon: '🎓', test: () => LEVELS.some((lv) => allMastered(APP.lessonsOf(lv.id))) },
    { id: 'topic', icon: '🧩', test: () => APP.THEMES.some((th) => allMastered(APP.themeLessons(th))) },
    { id: 'streak3', icon: '🔥', test: () => STORE.dayStreak() >= 3 },
    { id: 'streak7', icon: '📅', test: () => STORE.dayStreak() >= 7 },
    { id: 'streak30', icon: '🗓️', test: () => STORE.dayStreak() >= 30 },
    { id: 'daily1', icon: '☀️', test: () => Object.values(STORE.dailyAll()).some((d) => d && d.done) },
    { id: 'daily7', icon: '🌈', test: () => Object.values(STORE.dailyAll()).filter((d) => d && d.done).length >= 7 },
    { id: 'review', icon: '🔁', test: (c) => c.type === 'review' },
    { id: 'test90', icon: '📝', test: () => STORE.tests().some((x) => x.total && x.score / x.total >= 0.9) },
    { id: 'placement', icon: '🧭', test: (c) => c.type === 'placement' }
  ];

  function check(ctx) {
    BADGES.forEach((b) => {
      if (STORE.badges()[b.id]) return;
      let ok = false;
      try { ok = b.test(ctx || {}); } catch (e) { ok = false; }
      if (ok) STORE.award(b.id);
    });
  }

  STORE.on('answer', (ev) => check({ type: 'answer', ev }));
  STORE.on('test', () => check({ type: 'test' }));
  STORE.on('daily', () => check({ type: 'daily' }));
  STORE.on('reviewDone', () => check({ type: 'review' }));
  STORE.on('placementDone', () => check({ type: 'placement' }));
  STORE.on('badge', (e) => {
    const b = BADGES.find((x) => x.id === e.id);
    if (b) APP.toast(`<span class="toast-icon">${b.icon}</span> <strong>${esc(t('badgeNew'))}</strong> ${esc(t('badge_' + b.id))}`);
  });

  function page() {
    const got = STORE.badges();
    const n = Object.keys(got).length;
    const item = (b) => {
      const d = got[b.id];
      return `<li class="badge${d ? ' earned' : ''}">
        <span class="badge-icon" aria-hidden="true">${d ? b.icon : '🔒'}</span>
        <strong>${esc(t('badge_' + b.id))}</strong>
        <span class="muted small">${esc(t('badge_' + b.id + '_d'))}</span>
        ${d ? `<span class="small badge-date">${esc(t('badgeEarned', { d: new Date(d).toLocaleDateString(I18N.info(I18N.getLang()).htmlLang) }))}</span>` : ''}
      </li>`;
    };
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🏅 ${esc(t('badgesTitle'))}</h1>
      <p class="muted">${esc(t('badgesIntro', { k: n, n: BADGES.length }))}</p>
      <ul class="badges">${BADGES.map(item).join('')}</ul>`);
  }

  APP.route('odznaky', () => { check({}); page(); });
  APP.addMenu({ href: '#/odznaky', icon: '🏅', key: 'menuBadges', badge: () => `${Object.keys(STORE.badges()).length}/${BADGES.length}` });
  window.BADGES = BADGES;
})();
