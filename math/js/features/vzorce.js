/* Prehľad vzorcov (ťahák) ku každej téme: dáta v js/vzorce.js (window.FORMULAS). Stránka #/vzorce
   so zoznamom tém a #/vzorce/<téma> s ťahákom, ktorý sa dá vytlačiť. V lekcii odkaz na vzorce jej témy. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const has = (id) => !!(window.FORMULAS && FORMULAS[id] && FORMULAS[id].length);
  const count = (id) => (has(id) ? FORMULAS[id].reduce((s, g) => s + g.items.length, 0) : 0);

  function list() {
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>📐 ${esc(t('formulasTitle'))}</h1>
      <p class="muted">${esc(t('formulasIntro'))}</p>
      <div class="grid">${APP.THEMES.filter((th) => has(th.id)).map((th) => `<a class="card" href="#/vzorce/${th.id}">
        <div class="theme-icon" aria-hidden="true">${th.icon}</div><h3>${esc(APP.thName(th).title)}</h3>
        <div class="meta">${esc(t('formulasCount', { n: count(th.id) }))}</div></a>`).join('')}</div>`);
  }

  function sheet(id) {
    const th = APP.themeById(id);
    if (!th || !has(id)) { list(); return; }
    const notice = I18N.getLang() === I18N.DEFAULT ? '' : `<p class="notice">${esc(t('contentNotice'))}</p>`;
    APP.setPage(`<nav class="crumbs no-print"><a href="#/">${esc(t('home'))}</a> / <a href="#/vzorce">${esc(t('formulasTitle'))}</a></nav>
      <h1>${th.icon} ${esc(APP.thName(th).title)} <span class="muted">· ${esc(t('formulasTitle'))}</span></h1>
      ${notice}
      <div class="actions no-print"><button class="btn" type="button" id="pr">🖨️ ${esc(t('print'))}</button>
        <a class="btn" href="#/tema/${id}">${esc(t('formulasToTopic'))}</a></div>
      <div class="formula-sheet" lang="sk">${FORMULAS[id].map((g) => {
        const lv = APP.levelById(g.level);
        return `<section class="formula-group"><h2>${esc(g.title)} ${lv ? `<span class="muted small">· ${esc(APP.lvName(lv).title)}</span>` : ''}</h2>
          <dl>${g.items.map((it) => `<div class="formula"><dt>${esc(it.name)}</dt><dd>$$${it.tex}$$${it.note ? `<span class="muted small">${it.note}</span>` : ''}</dd></div>`).join('')}</dl>
        </section>`;
      }).join('')}</div>`);
    document.getElementById('pr').addEventListener('click', () => window.print());
  }

  APP.route('vzorce', (p) => (p[0] ? sheet(p[0]) : list()));
  APP.addMenu({ href: '#/vzorce', icon: '📐', key: 'menuFormulas' });
  APP.addLessonPanel((L) => {
    const th = APP.themeOf(L.id);
    return th && has(th.id) ? `<p class="lesson-link"><a href="#/vzorce/${th.id}">📐 ${esc(t('formulasForTopic', { topic: APP.thName(th).title }))}</a></p>` : '';
  });
})();
