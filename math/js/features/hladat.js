/* Vyhľadávanie naprieč učivom: názvy a opisy lekcií, teória, vyriešené príklady, témy a vzorce.
   Bez ohľadu na diakritiku a veľkosť písmen; všetky slová musia byť nájdené. Index sa stavia pri prvom
   hľadaní v jazyku obsahu (preklad lekcie, ak existuje). */
(function () {
  'use strict';
  const { t, esc } = APP;
  let index = null, indexLang = null;

  const fold = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  // HTML a TeX → čitateľný text (príkazy TeXu preč, zátvorky preč)
  const plain = (html) => String(html)
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}$\\^_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  function build() {
    const lang = I18N.getLang();
    if (index && indexLang === lang) return index;
    index = [];
    APP.allOrdered().forEach((L0) => {
      const L = APP.tr(L0);
      const body = [
        ...L.theory.map((x) => (typeof x === 'string' ? x : x.caption || '')),
        ...L.examples.flatMap((e) => [e.task, ...e.steps])
      ].map(plain).join(' ');
      index.push({ kind: 'lesson', id: L0.id, title: L.title, summary: L.summary, body, f: { title: fold(L.title), summary: fold(L.summary), body: fold(body) } });
    });
    APP.THEMES.forEach((th) => {
      const n = APP.thName(th);
      index.push({ kind: 'topic', id: th.id, title: `${th.icon} ${n.title}`, summary: n.desc, body: '', f: { title: fold(n.title), summary: fold(n.desc), body: '' } });
    });
    if (window.FORMULAS) {
      Object.entries(FORMULAS).forEach(([thId, groups]) => groups.forEach((g) => g.items.forEach((it) => {
        index.push({ kind: 'formula', id: thId, title: it.name, summary: g.title, tex: it.tex, body: '', f: { title: fold(it.name), summary: fold(g.title), body: fold(it.note || '') } });
      })));
    }
    indexLang = lang;
    return index;
  }

  function search(q) {
    const words = fold(q).split(/\s+/).filter((w) => w.length >= 2);
    if (!words.length) return [];
    return build().map((e) => {
      let score = 0;
      for (const w of words) {
        const s = (e.f.title.includes(w) ? 10 : 0) + (e.f.summary.includes(w) ? 4 : 0) + (e.f.body.includes(w) ? 1 : 0);
        if (!s) return null; // každé slovo musí byť niekde
        score += s;
      }
      if (e.kind === 'topic') score += 3;
      // presná zhoda názvu a názov začínajúci hľadaným textom idú dopredu
      const fq = words.join(' ');
      if (e.f.title === fq) score += 40;
      else if (e.f.title.startsWith(fq)) score += 15;
      return { e, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 40);
  }

  // úryvok okolo prvého výskytu a zvýraznenie slov
  function snippet(text, q) {
    const words = fold(q).split(/\s+/).filter((w) => w.length >= 2);
    const ft = fold(text);
    let at = -1;
    for (const w of words) { const k = ft.indexOf(w); if (k >= 0 && (at < 0 || k < at)) at = k; }
    if (at < 0) return '';
    const from = Math.max(0, at - 60), to = Math.min(text.length, at + 120);
    return (from ? '…' : '') + highlight(text.slice(from, to), words) + (to < text.length ? '…' : '');
  }
  function highlight(text, words) {
    // pozície vo fold texte zodpovedajú pôvodnému (NFD odstráni len diakritiku jednotlivých znakov)
    const f = fold(text);
    const marks = new Array(text.length).fill(false);
    words.forEach((w) => { let k = f.indexOf(w); while (k >= 0) { for (let j = k; j < k + w.length; j++) marks[j] = true; k = f.indexOf(w, k + 1); } });
    let out = '', open = false;
    for (let j = 0; j < text.length; j++) {
      if (marks[j] && !open) { out += '<mark>'; open = true; }
      if (!marks[j] && open) { out += '</mark>'; open = false; }
      out += esc(text[j]);
    }
    return out + (open ? '</mark>' : '');
  }

  function page(q) {
    const res = q ? search(q) : [];
    const words = fold(q || '').split(/\s+/).filter((w) => w.length >= 2);
    const item = ({ e }) => {
      if (e.kind === 'lesson') {
        const L = APP.lessonById(e.id), lv = APP.levelById(L.level);
        return `<li><a href="#/lekcia/${e.id}"><strong lang="${APP.langOf(L)}">${highlight(e.title, words)}</strong></a> ${APP.stateBadge(e.id)}
          <span class="muted small">· ${esc(APP.lvName(lv).title)}</span>
          <div class="small" lang="${APP.langOf(L)}">${snippet(e.summary + ' — ' + e.body, q)}</div></li>`;
      }
      if (e.kind === 'topic') return `<li><a href="#/tema/${e.id}"><strong>${highlight(e.title, words)}</strong></a> <span class="muted small">· ${esc(t('topicsCrumb'))}</span><div class="small">${esc(e.summary)}</div></li>`;
      return `<li><a href="#/vzorce/${e.id}"><strong lang="sk">${highlight(e.title, words)}</strong></a> <span class="muted small">· ${esc(t('formulasTitle'))}</span>
        <div class="formula-inline">$${e.tex}$</div></li>`;
    };
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🔎 ${esc(t('searchTitle'))}</h1>
      <form id="sf" class="answer-row search-row" role="search">
        <input id="sq" type="search" value="${esc(q || '')}" placeholder="${esc(t('searchPlaceholder'))}" aria-label="${esc(t('searchTitle'))}">
        <button class="btn btn-primary" type="submit">${esc(t('searchBtn'))}</button>
      </form>
      ${q ? `<p class="muted">${esc(t('searchCount', { n: res.length }))}</p>` : ''}
      <ul class="search-results">${res.map(item).join('')}</ul>`);
    const input = document.getElementById('sq');
    document.getElementById('sf').addEventListener('submit', (e) => {
      e.preventDefault();
      location.hash = `#/hladat/${encodeURIComponent(input.value.trim())}`;
    });
    if (!q) input.focus();
  }

  APP.route('hladat', (p) => {
    const q = decodeURIComponent(p.join('/') || '');
    topQ.value = q;
    page(q);
  });
  APP.addMenu({ href: '#/hladat', icon: '🔎', key: 'menuSearch' });

  // vyhľadávacie pole v hlavičke; na úzkom displeji je pole skryté a tlačidlo otvorí stránku hľadania
  const topQ = document.getElementById('top-q');
  document.getElementById('top-search').addEventListener('submit', (e) => {
    e.preventDefault();
    const q = topQ.offsetParent ? topQ.value.trim() : '';
    location.hash = q ? `#/hladat/${encodeURIComponent(q)}` : '#/hladat';
  });
  // mimo stránky hľadania pole nedrží starý dopyt
  window.addEventListener('hashchange', () => { if (!location.hash.startsWith('#/hladat')) topQ.value = ''; });
})();
