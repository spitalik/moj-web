/* Mapa učiva: témy zoradené do vrstiev podľa nadväzností (js/nadvaznosti.js) so šípkami v SVG,
   cesta lekcií témy s medzitémovými predpokladmi, strom predpokladov lekcie (#/mapa/<lekcia>)
   a odporúčanie „Čo sa učiť ďalej“ (lekcie, ktorých predpoklady sú zvládnuté, ale ony samy nie).
   Na úzkom displeji sa šípky skryjú a nadväznosti sa vypíšu textom „Stavia na: …“.
   Čistá logika (vrstvy, frontier, strom) je aj vo window.MAPA kvôli testom v node. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const N = window.NADVAZNOSTI || {};
  const TH_DEPS = N.themes || {};
  const NARROW = 640; // pod touto šírkou mapy (px) sa šípky nekreslia
  const TREE_DEPTH = 6; // hlbšie vetvy stromu sa otvoria ako strom danej lekcie
  // stav lekcie zo snímky postupu (STORE.progress číta úložisko; snímka sa obnoví pri každom vykreslení)
  let snap = {};
  const fresh = () => { snap = STORE.progress() || {}; };
  const st = (id) => STORE.state(id, snap[id] || null);

  /* ---------- logika ---------- */
  // poradie lekcií v učive: id → index
  function orderIndex() {
    const m = new Map();
    APP.allOrdered().forEach((l, i) => m.set(l.id, i));
    return m;
  }
  // predpoklady s pamäťou počas jedného výpočtu (APP.prereqs triedi učivo pri každom volaní)
  function memoPrereqs() {
    const m = new Map();
    return (id) => { if (!m.has(id)) m.set(id, APP.prereqs(id)); return m.get(id); };
  }
  const themeDeps = (th) => (TH_DEPS[th.id] || []).filter((d) => d !== th.id && APP.themeById(d));

  // Vrstvy tém: vrstva = dĺžka najdlhšej cesty k základnej téme (topologické poradie);
  // v rámci vrstvy podľa toho, kde téma v učive začína.
  function themeLayers() {
    const pos = orderIndex();
    const start = (th) => Math.min(...th.lessons.map((id) => (pos.has(id) ? pos.get(id) : Infinity)));
    const layer = new Map(), visiting = new Set();
    const lv = (th) => {
      if (layer.has(th.id)) return layer.get(th.id);
      if (visiting.has(th.id)) return 0; // cyklus (validátor ho nahlási) – nezacyklíme sa
      visiting.add(th.id);
      const v = themeDeps(th).reduce((m, d) => Math.max(m, lv(APP.themeById(d)) + 1), 0);
      visiting.delete(th.id);
      layer.set(th.id, v);
      return v;
    };
    APP.THEMES.forEach(lv);
    const rows = [];
    APP.THEMES.forEach((th) => { (rows[layer.get(th.id)] = rows[layer.get(th.id)] || []).push(th); });
    return rows.filter(Boolean).map((r) => r.sort((a, b) => start(a) - start(b)));
  }

  // Čo sa učiť ďalej: nezvládnuté lekcie so všetkými predpokladmi zvládnutými, v poradí učiva.
  // Najprv tie, ktoré žiak „odomkol“ (majú predpoklady), potom začiatky tém bez predpokladov.
  // Kým žiak nič nerobil, ostanú len začiatky tém.
  function frontier() {
    fresh();
    const pre = memoPrereqs();
    const all = APP.allOrdered();
    const started = all.some((l) => st(l.id) !== 'none');
    const earned = [], starts = [];
    all.forEach((l) => {
      if (st(l.id) === 'mastered') return;
      const p = pre(l.id);
      if (!p.length) starts.push(l);
      else if (started && p.every((x) => st(x.id) === 'mastered')) earned.push(l);
    });
    return earned.concat(starts);
  }

  // Strom predpokladov: prehľadávanie do šírky, každá lekcia raz – pod prvou lekciou, ktorá ju potrebuje
  // na najmenšej hĺbke. Vráti hĺbky, deti (v poradí učiva) a zoznam všetkých predpokladov v poradí učiva.
  function prereqTree(id) {
    const pre = memoPrereqs(), pos = orderIndex();
    const depth = new Map([[id, 0]]), kids = new Map(), queue = [id];
    while (queue.length) {
      const v = queue.shift(), ch = [];
      pre(v).forEach((p) => {
        if (depth.has(p.id)) return;
        depth.set(p.id, depth.get(v) + 1);
        ch.push(p.id);
        queue.push(p.id);
      });
      kids.set(v, ch.sort((a, b) => pos.get(a) - pos.get(b)));
    }
    const all = [...depth.keys()].filter((x) => x !== id).sort((a, b) => pos.get(a) - pos.get(b));
    const maxDepth = Math.max(0, ...depth.values());
    return { depth, kids, all, maxDepth };
  }
  // najslabšie miesto: prvý nezvládnutý predpoklad v poradí učiva
  const weakest = (tree) => fresh() || tree.all.find((x) => st(x) !== 'mastered') || null;

  // odkaz v lekcii len pri aspoň 2 úrovniach predpokladov a priamom predpoklade z inej témy
  function hasDeepMap(id) {
    const th = APP.themeOf(id);
    if (!APP.prereqs(id).some((p) => APP.themeOf(p.id) !== th)) return false;
    return APP.prereqs(id).some((p) => APP.prereqs(p.id).length > 0);
  }

  window.MAPA = { themeLayers, frontier, prereqTree, weakest, hasDeepMap };

  /* ---------- spoločné kúsky ---------- */
  const thLabel = (th) => `${th.icon} ${esc(APP.thName(th).title)}`;
  const crumbs = (tail) => `<nav class="crumbs"><a href="#/">${esc(t('home'))}</a>${tail ? ` / <a href="#/mapa">${esc(t('mapaTitle'))}</a> / ${tail}` : ''}</nav>`;
  // lekcia v zozname: názov, stav a téma
  function lessonItem(l) {
    const th = APP.themeOf(l.id);
    return `<li class="mapa-li s-${st(l.id)}"><a href="#/lekcia/${l.id}">${APP.lessonTitle(l)}</a> ${APP.stateBadge(l.id)}
      ${th ? `<span class="muted small">· ${thLabel(th)}</span>` : ''}</li>`;
  }

  /* ---------- panel na hlavnej stránke ---------- */
  APP.addHomePanel(() => {
    const f = frontier().slice(0, 3);
    if (!f.length) return '';
    return `<div class="card today-card mapa-panel">
      <div class="today-icon" aria-hidden="true">🗺️</div>
      <h3>${esc(t('mapaNextTitle'))}</h3>
      <ul class="mapa-panel-list">${f.map((l) => `<li><a href="#/lekcia/${l.id}">${APP.lessonTitle(l)}</a> ${APP.stateBadge(l.id)}</li>`).join('')}</ul>
      <p class="small"><a href="#/mapa">${esc(t('mapaOpen'))} →</a></p>
    </div>`;
  });

  /* ---------- odkaz v lekcii ---------- */
  APP.addLessonPanel((L) => (hasDeepMap(L.id)
    ? `<p class="lesson-link"><a href="#/mapa/${L.id}">🗺️ ${esc(t('mapaLessonLink'))}</a></p>` : ''));

  /* ---------- stránka mapy ---------- */
  let selected = null; // rozbalená téma (zostane pri prekreslení, napr. po zmene jazyka)

  function nextSection() {
    const f = frontier();
    const started = APP.allOrdered().some((l) => st(l.id) !== 'none');
    let body;
    if (!f.length) body = `<p>${esc(t('mapaNextNone'))}</p>`;
    else body = `<p class="muted small">${esc(t(started ? 'mapaNextIntro' : 'mapaNextStart'))}</p>
      <ul class="mapa-list">${f.slice(0, 8).map(lessonItem).join('')}</ul>`;
    return `<section class="block mapa-next" aria-labelledby="mapa-next-h"><h2 id="mapa-next-h">🧭 ${esc(t('mapaNextTitle'))}</h2>${body}</section>`;
  }

  // pruh zvládnutia ako <span> (tlačidlo smie obsahovať len frázový obsah)
  const spanBar = (ls) => APP.progressBar(ls).replace(/^<div/, '<span').replace(/<\/div>$/, '</span>');

  function themeNode(th) {
    const ls = APP.themeLessons(th), deps = themeDeps(th).map(APP.themeById);
    const m = ls.filter((l) => st(l.id) === 'mastered').length;
    return `<button type="button" class="mapa-theme${selected === th.id ? ' active' : ''}" data-theme="${th.id}"
        aria-expanded="${selected === th.id}" aria-controls="mapa-detail">
      <span class="mapa-theme-head"><span class="mapa-theme-icon" aria-hidden="true">${th.icon}</span>
        <span class="mapa-theme-name">${esc(APP.thName(th).title)}</span></span>
      <span class="mapa-theme-meta muted small">${m} / ${ls.length}</span>
      ${spanBar(ls)}
      <span class="mapa-deps small">${deps.length
        ? `${esc(t('mapaBuildsOn'))} ${deps.map((d) => `${d.icon} ${esc(APP.thName(d).title)}`).join(', ')}`
        : esc(t('mapaBase'))}</span>
    </button>`;
  }

  // rozbalená téma: cesta lekcií so stavom a predpokladmi z iných tém
  function themeDetail(th) {
    const ls = APP.themeLessons(th);
    const deps = themeDeps(th).map(APP.themeById);
    let html = `<h3>${thLabel(th)}</h3>
      <p class="mapa-detail-links"><a class="btn btn-small" href="#/tema/${th.id}">${esc(t('mapaOpenTopic'))}</a></p>`;
    if (deps.length) html += `<p class="small">${esc(t('mapaBuildsOn'))} ${deps.map((d) => `<button type="button" class="chip mapa-chip" data-theme="${d.id}">${thLabel(d)}</button>`).join(' ')}</p>`;
    html += '<ol class="path mapa-path">';
    ls.forEach((l, k) => {
      const s = st(l.id);
      const cross = APP.prereqs(l.id).filter((p) => APP.themeOf(p.id) !== th);
      html += `<li class="path-step s-${s}">
        <a href="#/lekcia/${l.id}"><span class="step" aria-hidden="true">${s === 'mastered' ? '✓' : k + 1}</span>
          <span class="step-body"><strong>${APP.lessonTitle(l)} ${APP.stateBadge(l.id)}</strong></span></a>
        ${cross.length ? `<div class="mapa-cross small">${esc(t('mapaCrossPre'))} ${cross.map((p) => {
          const pt = APP.themeOf(p.id);
          return `<a href="#/lekcia/${p.id}">${pt ? `<span aria-hidden="true">${pt.icon}</span> ` : ''}${APP.lessonTitle(p)}</a> ${APP.stateBadge(p.id)}`;
        }).join(', ')} · <a href="#/mapa/${l.id}">🌳 ${esc(t('mapaTreeLink'))}</a></div>` : ''}
      </li>`;
    });
    return html + '</ol>';
  }

  function mapPage() {
    fresh();
    const layers = themeLayers();
    let html = `${crumbs(false)}<h1>🗺️ ${esc(t('mapaTitle'))}</h1>
      <p class="muted">${esc(t('mapaIntro'))}</p>
      ${nextSection()}
      <h2>${esc(t('mapaThemesTitle'))}</h2>
      <div class="mapa-graph" role="group" aria-label="${esc(t('mapaGraphLabel'))}">
        <svg class="mapa-arrows" aria-hidden="true" focusable="false"></svg>
        <ol class="mapa-layers">`;
    layers.forEach((row, k) => {
      html += `<li class="mapa-layer" data-layer="${k}"><div class="mapa-layer-title">${esc(t('mapaLayer', { n: k + 1 }))}</div>
        <div class="mapa-row">${row.map(themeNode).join('')}</div></li>`;
    });
    html += `</ol></div>
      <section id="mapa-detail" class="block mapa-detail" aria-live="polite" ${selected ? '' : 'hidden'}></section>`;
    APP.setPage(html);
    const root = APP.el;
    const graph = root.querySelector('.mapa-graph'), detail = root.querySelector('#mapa-detail');

    function select(id, focusDetail) {
      selected = selected === id && !focusDetail ? null : id;
      root.querySelectorAll('.mapa-theme').forEach((b) => {
        const on = b.dataset.theme === selected;
        b.classList.toggle('active', on);
        b.setAttribute('aria-expanded', String(on));
      });
      if (!selected) { detail.hidden = true; detail.innerHTML = ''; layout(); return; }
      detail.innerHTML = themeDetail(APP.themeById(selected));
      detail.hidden = false;
      APP.renderMath(detail);
      layout();
      if (focusDetail) root.querySelector(`.mapa-theme[data-theme="${selected}"]`).focus();
    }
    // úzky displej: zoznam vrstiev bez šípok a detail hneď za vrstvou so zvolenou témou
    // (netreba ďaleko posúvať); široký: detail pod celou mapou, aby cez neho nešli šípky
    function layout() {
      const narrow = graph.getBoundingClientRect().width < NARROW;
      graph.classList.toggle('mapa-narrow', narrow);
      const btn = selected && root.querySelector(`.mapa-theme[data-theme="${selected}"]`);
      if (narrow && btn) btn.closest('.mapa-layer').appendChild(detail);
      else if (detail.previousElementSibling !== graph) graph.after(detail);
      draw(narrow);
    }
    root.querySelectorAll('.mapa-theme').forEach((b) => b.addEventListener('click', () => select(b.dataset.theme)));
    // čip predpokladu v detaile prepne na danú tému
    detail.addEventListener('click', (e) => {
      const c = e.target.closest('.mapa-chip');
      if (c) select(c.dataset.theme, true);
    });

    // šípky od témy-predpokladu k téme, ktorá na nej stavia
    function draw(narrow) {
      const svg = graph.querySelector('.mapa-arrows');
      if (narrow) { svg.innerHTML = ''; return; }
      const box = graph.getBoundingClientRect();
      svg.setAttribute('width', box.width);
      svg.setAttribute('height', box.height);
      svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
      const rect = (id) => {
        const el = graph.querySelector(`.mapa-theme[data-theme="${id}"]`);
        const r = el.getBoundingClientRect();
        return { x: r.left - box.left + r.width / 2, top: r.top - box.top, bottom: r.bottom - box.top };
      };
      let out = `<defs><marker id="mapa-head" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" class="mapa-head"/></marker>
        <marker id="mapa-head-on" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" class="mapa-head on"/></marker></defs>`;
      const on = [];
      APP.THEMES.forEach((th) => themeDeps(th).forEach((d) => {
        const a = rect(d), b = rect(th.id);
        if (b.top <= a.bottom) return;
        const dy = (b.top - a.bottom) / 2;
        const path = `<path class="mapa-edge${selected && (selected === th.id || selected === d) ? ' on' : ''}" d="M${a.x} ${a.bottom} C${a.x} ${a.bottom + dy} ${b.x} ${b.top - dy} ${b.x} ${b.top - 2}"
          marker-end="url(#mapa-head${selected && (selected === th.id || selected === d) ? '-on' : ''})"/>`;
        if (selected && (selected === th.id || selected === d)) on.push(path); else out += path;
      }));
      svg.innerHTML = out + on.join(''); // zvýraznené šípky navrch
    }
    if (selected && APP.themeById(selected)) { const s = selected; selected = null; select(s); } else { selected = null; layout(); }

    // prekreslenie pri zmene šírky; poslucháč sa odpojí, keď mapa zmizne zo stránky
    let timer = null;
    const onResize = () => {
      if (!document.body.contains(graph)) { window.removeEventListener('resize', onResize); return; }
      clearTimeout(timer);
      timer = setTimeout(layout, 120);
    };
    window.addEventListener('resize', onResize);
    // písma a KaTeX môžu po načítaní zmeniť rozmery uzlov
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (document.body.contains(graph)) layout(); });
  }

  /* ---------- strom predpokladov lekcie ---------- */
  function treePage(id) {
    fresh();
    const L = APP.lessonById(id);
    const tree = prereqTree(id);
    const weak = weakest(tree);
    const unm = tree.all.filter((x) => st(x) !== 'mastered').length;
    // počet lekcií v podstrome a či v ňom je niečo nezvládnuté
    const size = new Map(), hasWeak = new Map();
    const walk = (v) => {
      let n = 0, w = false;
      tree.kids.get(v).forEach((c) => { walk(c); n += 1 + size.get(c); w = w || hasWeak.get(c) || st(c) !== 'mastered'; });
      size.set(v, n); hasWeak.set(v, w);
    };
    walk(id);
    const node = (v, d) => {
      const l = APP.lessonById(v), th = APP.themeOf(v), s = st(v), ch = tree.kids.get(v);
      let html = `<li class="mapa-tnode s-${s}${s !== 'mastered' ? ' mapa-un' : ''}">
        <div class="mapa-trow"><a href="#/lekcia/${v}">${APP.lessonTitle(l)}</a> ${APP.stateBadge(v)}
          ${th ? `<span class="muted small">· ${thLabel(th)}</span>` : ''}</div>`;
      if (ch.length) {
        if (d >= TREE_DEPTH) {
          html += `<a class="small mapa-more" href="#/mapa/${v}">🌳 ${esc(t('mapaMore', { n: size.get(v) }))}</a>`;
        } else {
          html += `<details${hasWeak.get(v) && d < 3 ? ' open' : ''}><summary class="small">${esc(t('mapaShowPre', { n: size.get(v) }))}</summary>
            <ul class="mapa-tree">${ch.map((c) => node(c, d + 1)).join('')}</ul></details>`;
        }
      }
      return html + '</li>';
    };
    const pos = orderIndex();
    const deps = APP.dependents(id).sort((a, b) => pos.get(a.id) - pos.get(b.id));
    let html = `${crumbs(esc(t('mapaTreeTitle')))}
      <h1>🌳 ${APP.lessonTitle(L)} ${APP.stateBadge(id)}</h1>
      <p class="muted">${esc(t('mapaTreeIntro'))}</p>`;
    if (!tree.all.length) html += `<p class="block">${esc(t('mapaNoPre'))}</p>`;
    else {
      html += `<div class="block mapa-tree-head">
        <p>${esc(t('mapaTreeStats', { k: unm, n: tree.all.length }))}</p>
        ${weak ? `<div class="actions"><a class="btn btn-primary" href="#/lekcia/${weak}">🎯 ${esc(t('mapaWeakest'))}: ${APP.lessonTitle(APP.lessonById(weak))}</a></div>`
               : `<p>${esc(t('mapaAllDone'))}</p>`}
      </div>
      <ul class="mapa-tree mapa-tree-root">${tree.kids.get(id).map((c) => node(c, 1)).join('')}</ul>`;
    }
    html += `<div class="actions"><a class="btn" href="#/lekcia/${id}">${esc(t('mapaToLesson'))}</a>
      <a class="btn" href="#/mapa">🗺️ ${esc(t('mapaTitle'))}</a></div>`;
    if (deps.length) {
      html += `<h2>${esc(t('mapaDependents'))}</h2><ul class="mapa-list">${deps.map(lessonItem).join('')}</ul>`;
    }
    APP.setPage(html);
  }

  APP.route('mapa', (p) => {
    if (p[0] && APP.lessonById(p[0])) treePage(p[0]);
    else mapPage();
  });
  APP.addMenu({ href: '#/mapa', icon: '🗺️', key: 'mapMenu' });
})();
