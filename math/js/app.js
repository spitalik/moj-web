/* Hlavná logika: smerovanie (hash), zobrazenie úrovní, lekcií a precvičovania, uloženie postupu, inštalácia PWA. */
(function () {
  'use strict';

  const app = document.getElementById('app');
  const PROGRESS_KEY = 'matika.progress.v1';

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

  // Lekcie úrovne zoradené podľa order (stabilné triedenie zachová poradie zápisu pri rovnosti).
  const lessonsOf = (levelId) => LESSONS
    .filter((l) => l.level === levelId)
    .sort((a, b) => (a.order ?? 1000) - (b.order ?? 1000));
  // Celé učivo v poradí: úrovne podľa LEVELS, v nich lekcie podľa order.
  const allOrdered = () => LEVELS.flatMap((lv) => lessonsOf(lv.id));

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
    return p && p.total ? `Úspešnosť: ${Math.round(100 * p.right / p.total)} % (${p.total} úloh)` : 'Zatiaľ bez precvičovania';
  }

  function showHome() {
    const prog = loadProgress();
    let html = `
      <section class="hero">
        <h1>Matika krok za krokom</h1>
        <p>Od prvých čísel v 1. ročníku cez strednú školu až po integrály. Každá téma má teóriu, obrázky,
           vyriešené príklady a generátor úloh na precvičovanie.</p>
      </section>`;
    GROUPS.forEach((g) => {
      const levels = LEVELS.filter((lv) => lv.group === g.id);
      html += `<section class="level"><h2>${esc(g.title)}</h2><div class="grid">`;
      levels.forEach((lv) => {
        const ls = lessonsOf(lv.id);
        const done = ls.filter((l) => prog[l.id] && prog[l.id].total).length;
        html += `<a class="card level-card" href="#/uroven/${lv.id}">
                   <h3>${esc(lv.title)}</h3><p>${esc(lv.desc)}</p>
                   <div class="meta">${ls.length} tém · precvičené ${done}</div>
                   <div class="bar"><span style="width:${ls.length ? Math.round(100 * done / ls.length) : 0}%"></span></div>
                 </a>`;
      });
      html += '</div></section>';
    });
    html += `<section class="install-note">
      <p><strong>Chceš mať aplikáciu po ruke?</strong> Na počítači v Chrome alebo Edge klikni na ikonu inštalácie
      v adresnom riadku (alebo tlačidlo „Nainštalovať“ hore). Na iPhone v Safari: Zdieľať → Pridať na plochu.
      Na Androide v Chrome: menu ⋮ → Nainštalovať aplikáciu.</p></section>`;
    setPage(html);
  }

  function showLevel(levelId) {
    const lv = levelById(levelId);
    const prog = loadProgress();
    const group = GROUPS.find((g) => g.id === lv.group);
    const ls = lessonsOf(levelId);
    let html = `<nav class="crumbs"><a href="#/">Domov</a> / ${esc(group.title)}</nav>
      <h1>${esc(lv.title)}</h1><p class="muted">${esc(lv.desc)}</p>`;
    // rýchle prepínanie medzi úrovňami tej istej skupiny (ročníky)
    const siblings = LEVELS.filter((x) => x.group === lv.group);
    if (siblings.length > 1) {
      html += `<nav class="chips">${siblings.map((x) =>
        `<a class="chip${x.id === lv.id ? ' active' : ''}" href="#/uroven/${x.id}">${esc(x.title)}</a>`).join('')}</nav>`;
    }
    html += '<div class="grid">';
    ls.forEach((l, k) => {
      html += `<a class="card" href="#/lekcia/${l.id}">
                 <div class="num">${k + 1}</div>
                 <h3>${esc(l.title)}</h3><p>${esc(l.summary)}</p><div class="meta">${lessonStat(prog[l.id])}</div>
               </a>`;
    });
    html += '</div>';
    setPage(html);
  }

  function showLesson(id) {
    const all = allOrdered();
    const i = all.findIndex((l) => l.id === id);
    const L = all[i];
    const level = levelById(L.level);
    let html = `<nav class="crumbs"><a href="#/">Domov</a> / <a href="#/uroven/${level.id}">${esc(level.title)}</a></nav>
      <h1>${esc(L.title)}</h1>`;
    html += L.theory.map((t) => (typeof t === 'string'
      ? `<div class="block theory">${t}</div>`
      : `<figure class="figure" data-fig="${t.fig}"><div class="fig-body"></div>${t.caption ? `<figcaption>${t.caption}</figcaption>` : ''}</figure>`
    )).join('');
    html += '<h2>Vyriešené príklady</h2>';
    L.examples.forEach((ex, k) => {
      html += `<div class="block example">
        <div class="label">Príklad ${k + 1}</div>
        <p>${ex.task}</p>
        <details><summary>Ukáž postup</summary>
          <ol class="steps">${ex.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
        </details>
      </div>`;
    });
    html += `<div class="actions"><a class="btn btn-primary" href="#/precvicuj/${L.id}">Precvičiť túto tému</a></div>`;
    const prev = all[i - 1], next = all[i + 1];
    html += `<nav class="pager">
      ${prev ? `<a href="#/lekcia/${prev.id}">← ${esc(prev.title)}</a>` : '<span></span>'}
      ${next ? `<a href="#/lekcia/${next.id}">${esc(next.title)} →</a>` : '<span></span>'}
    </nav>`;
    setPage(html);
  }

  function showPractice(id) {
    const L = lessonById(id);
    const level = levelById(L.level);
    setPage(`
      <nav class="crumbs"><a href="#/">Domov</a> / <a href="#/uroven/${level.id}">${esc(level.title)}</a>
        / <a href="#/lekcia/${L.id}">${esc(L.title)}</a> / Precvičovanie</nav>
      <h1>Precvičovanie</h1>
      <div class="practice card-box">
        <div class="score">Správne v tejto relácii: <span id="s-right">0</span> / <span id="s-total">0</span></div>
        <div class="question" id="q" aria-live="polite"></div>
        <div id="choices" class="choices" hidden></div>
        <form id="f" class="answer-row" autocomplete="off">
          <input id="ans" type="text" inputmode="decimal" placeholder="Tvoja odpoveď" aria-label="Tvoja odpoveď">
          <button class="btn btn-primary" type="submit">Skontrolovať</button>
        </form>
        <div id="fb" class="feedback" aria-live="polite"></div>
        <div class="actions">
          <button class="btn" id="hint" type="button">Nápoveda</button>
          <button class="btn" id="show" type="button">Ukáž riešenie</button>
          <button class="btn btn-primary" id="nxt" type="button" hidden>Ďalší príklad →</button>
        </div>
        <div id="sol" class="solution" hidden></div>
        <p class="muted small" id="tip">Desatinné čísla píš s bodkou alebo čiarkou, zlomky ako p/q (napr. 5/6).</p>
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
      ex = EXERCISES.make(id);
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
        el.ans.placeholder = ex.placeholder || 'Tvoja odpoveď';
        el.ans.value = '';
        el.ans.disabled = false;
      }
      renderMath(el.q);
      if (!isChoice) el.ans.focus();
    }

    function reveal() {
      el.sol.hidden = false;
      el.sol.innerHTML = `<p><strong>Správna odpoveď:</strong> ${esc(EXERCISES.formatAnswer(ex))}</p><p>${ex.solution}</p>`;
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
        el.fb.textContent = ex.type === 'text' ? 'Napíš odpoveď.' : 'Zadaj číslo (napr. 2,5, 0.5 alebo 3/4).';
        return;
      }
      answered = true;
      session.total += 1;
      if (res) session.right += 1;
      record(res);
      el.fb.className = 'feedback ' + (res ? 'ok' : 'bad');
      el.fb.textContent = res ? '✓ Správne!' : '✗ Nesprávne.';
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
      el.fb.innerHTML = 'Nápoveda: ' + ex.hint;
      renderMath(el.fb);
    });

    el.show.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      session.total += 1;
      el.total.textContent = session.total;
      record(false);
      el.fb.className = 'feedback';
      el.fb.textContent = 'Riešenie si pozri nižšie a skús ďalší príklad.';
      reveal();
    });

    el.nxt.addEventListener('click', newProblem);
    newProblem();
  }

  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    if (parts[0] === 'uroven' && levelById(parts[1])) return showLevel(parts[1]);
    if (parts[0] === 'lekcia' && lessonById(parts[1])) return showLesson(parts[1]);
    if (parts[0] === 'precvicuj' && lessonById(parts[1])) return showPractice(parts[1]);
    return showHome();
  }

  window.addEventListener('hashchange', route);
  route();

  // Inštalácia PWA: Chrome/Edge na desktope a Androide posielajú beforeinstallprompt.
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
