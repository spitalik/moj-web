/* Vstupný test: zistí, kde v téme alebo ročníku začať. Binárne vyhľadávanie na usporiadanom zozname lekcií:
   z prostrednej lekcie 2 úlohy; obe správne → ideme vyššie, inak nižšie. Stačí ~2·log₂(n) úloh.
   Výsledok (prvá lekcia, ktorú žiak ešte nezvláda) sa uloží ako odporúčaný začiatok; postup v lekciách
   sa testom nemení. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const PER_PROBE = 2;

  function target(kind, id) {
    if (kind === 'tema') {
      const th = APP.themeById(id);
      return th && { key: `tema:${id}`, title: `${th.icon} ${APP.thName(th).title}`, back: `#/tema/${id}`, lessons: APP.themeLessons(th) };
    }
    const lv = APP.levelById(id);
    return lv && { key: `uroven:${id}`, title: APP.lvName(lv).title, back: `#/uroven/${id}`, lessons: APP.lessonsOf(id) };
  }

  function intro(kind, id) {
    const tg = target(kind, id);
    if (!tg) { location.hash = '#/'; return; }
    const ls = tg.lessons.filter((l) => EXERCISES.has(l.id) && !/^s4-mat-/.test(l.id));
    const maxQ = PER_PROBE * Math.ceil(Math.log2(ls.length + 1));
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="${tg.back}">${esc(tg.title)}</a></nav>
      <h1>🧭 ${esc(t('placementTitle'))}</h1>
      <p><strong>${esc(tg.title)}</strong></p>
      <div class="block"><p>${esc(t('placementIntro', { n: maxQ }))}</p>
        <button class="btn btn-primary" id="go" type="button">${esc(t('testStart'))}</button></div>`);
    document.getElementById('go').addEventListener('click', () => run(tg, ls));
  }

  function run(tg, ls) {
    let lo = 0, hi = ls.length - 1, probe = null;
    APP.setPage(`<nav class="crumbs"><a href="${tg.back}">${esc(tg.title)}</a></nav>
      <h1>🧭 ${esc(t('placementTitle'))}</h1><div id="pw"></div>`);
    PROBLEM.mount(document.getElementById('pw'), {
      mode: 'exam',
      total: null,
      record: () => { /* diagnostika – do postupu sa nezapisuje */ },
      next: (i, results) => {
        if (probe) {
          const res = results.slice(probe.start);
          if (res.length < PER_PROBE && res.every((r) => r.correct)) {
            return { id: ls[probe.mid].id, ex: EXERCISES.make(ls[probe.mid].id, APP.contentLang(ls[probe.mid].id)) };
          }
          if (res.length >= PER_PROBE && res.every((r) => r.correct)) lo = probe.mid + 1;
          else hi = probe.mid - 1;
          probe = null;
        }
        if (lo > hi) return null;
        const mid = Math.floor((lo + hi) / 2);
        probe = { mid, start: results.length };
        return { id: ls[mid].id, ex: EXERCISES.make(ls[mid].id, APP.contentLang(ls[mid].id)) };
      },
      onDone: (results) => {
        // nedokončená sonda: rozhodne to, čo už vieme
        if (probe) {
          const res = results.slice(probe.start);
          if (res.length && !res.every((r) => r.correct)) hi = probe.mid - 1;
        }
        const startAt = Math.min(lo, ls.length);
        const right = results.filter((r) => r.correct).length;
        const L = ls[startAt];
        if (L) STORE.setPlacement(tg.key, L.id);
        STORE.emit('placementDone', { key: tg.key });
        APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="${tg.back}">${esc(tg.title)}</a></nav>
          <h1>🧭 ${esc(t('placementTitle'))}</h1>
          <p class="muted">${esc(t('placementScore', { k: right, n: results.length }))}</p>
          ${L ? `<div class="block"><p>${esc(t('placementStartHere'))}</p>
                   <p class="big-lesson"><a href="#/lekcia/${L.id}">${APP.lessonTitle(L)}</a></p>
                   <p class="muted small">${esc(t('placementKnown', { n: startAt, m: ls.length }))}</p>
                   <div class="actions"><a class="btn btn-primary" href="#/lekcia/${L.id}">${esc(t('start'))}</a>
                   <a class="btn" href="${tg.back}">${esc(t('placementBack'))}</a></div></div>`
              : `<div class="block"><p>${esc(t('placementAll'))}</p><div class="actions"><a class="btn btn-primary" href="${tg.back}">${esc(t('placementBack'))}</a></div></div>`}`);
        APP.applyStatic();
      }
    });
  }

  APP.route('vstupny', (p) => {
    if ((p[0] === 'tema' || p[0] === 'uroven') && p[1]) return intro(p[0], p[1]);
    // prehľad: výber témy alebo ročníka
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🧭 ${esc(t('placementTitle'))}</h1><p class="muted">${esc(t('placementChoose'))}</p>
      <h2>${esc(t('viewThemes'))}</h2>
      <nav class="chips">${APP.THEMES.filter((th) => th.id !== 'maturita').map((th) => `<a class="chip" href="#/vstupny/tema/${th.id}">${th.icon} ${esc(APP.thName(th).title)}</a>`).join('')}</nav>
      <h2>${esc(t('viewLevels'))}</h2>
      <nav class="chips">${LEVELS.map((lv) => `<a class="chip" href="#/vstupny/uroven/${lv.id}">${esc(APP.lvName(lv).title)}</a>`).join('')}</nav>`);
    return true;
  });
  APP.addMenu({ href: '#/vstupny', icon: '🧭', key: 'menuPlacement' });
})();
