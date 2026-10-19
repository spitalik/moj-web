/* Testy nanečisto: Testovanie 9, maturita a vlastný test. Časový limit, bez spätnej väzby počas testu,
   na konci skóre, rozbor podľa tém, prehľad úloh so správnymi odpoveďami a riešením. História v STORE.
   Formát (počet úloh, čas) je inšpirovaný skutočnými skúškami, ale nie je to oficiálny test. */
(function () {
  'use strict';
  const { t, esc } = APP;

  // váhy úrovní: koľko úloh približne pripadne na ktorú úroveň
  const PRESETS = {
    t9: { icon: '🏫', key: 'testT9', count: 20, minutes: 60, levels: { r5: 1, r6: 2, r7: 3, r8: 3, r9: 3 } },
    maturita: { icon: '🎓', key: 'testMat', count: 30, minutes: 120, levels: { s1: 3, s2: 3, s3: 3, s4: 2 } }
  };
  // lekcie, ktoré len preberajú úlohy iných lekcií (opakovanie na maturitu), do testu nedávame
  const usable = (l) => EXERCISES.has(l.id) && !(/^s4-mat-/.test(l.id) && l.id !== 's4-mat-komplex');

  // výber lekcií podľa váh úrovní, bez opakovania, kým sa dá
  function pickLessons(levels, count) {
    const pool = [];
    Object.entries(levels).forEach(([lv, w]) => APP.lessonsOf(lv).filter(usable).forEach((l) => pool.push({ l, w })));
    if (!pool.length) return [];
    const out = [];
    let avail = pool.slice();
    while (out.length < count) {
      if (!avail.length) avail = pool.slice();
      const total = avail.reduce((s, x) => s + x.w, 0);
      let r = Math.random() * total, k = 0;
      while (r > avail[k].w) { r -= avail[k].w; k += 1; }
      out.push(avail[k].l);
      avail.splice(k, 1);
    }
    // poradie: od nižších úrovní a lekcií k vyšším, ako v skutočnom teste
    const order = APP.allOrdered().map((l) => l.id);
    return out.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  }

  const fmtTime = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
  const pct = (a, b) => (b ? Math.round(100 * a / b) : 0);

  function overview() {
    const hist = STORE.tests().slice().reverse().slice(0, 15);
    const card = (id, p) => `<a class="card test-card" href="#/testy/${id}">
      <div class="today-icon" aria-hidden="true">${p.icon}</div>
      <h3>${esc(t(p.key))}</h3><p>${esc(t(p.key + 'Desc', { n: p.count, m: p.minutes }))}</p></a>`;
    const groups = GROUPS.map((g) => `<fieldset class="lv-group"><legend>${esc(APP.grName(g))}</legend>${LEVELS.filter((lv) => lv.group === g.id).map((lv) =>
      `<label class="check"><input type="checkbox" name="lv" value="${lv.id}"> ${esc(APP.lvName(lv).title)}</label>`).join('')}</fieldset>`).join('');
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>📝 ${esc(t('testsTitle'))}</h1>
      <p class="muted">${esc(t('testsIntro'))}</p>
      <div class="grid">${Object.entries(PRESETS).map(([id, p]) => card(id, p)).join('')}</div>
      <h2>${esc(t('testCustom'))}</h2>
      <form class="block custom-test" id="ct">
        <div class="lv-groups">${groups}</div>
        <div class="row">
          <label class="field">${esc(t('testCount'))} <select name="n">${[5, 10, 15, 20, 30].map((n) => `<option${n === 10 ? ' selected' : ''}>${n}</option>`).join('')}</select></label>
          <label class="field">${esc(t('testTime'))} <select name="m"><option value="0">${esc(t('testNoLimit'))}</option>${[10, 20, 30, 45, 60, 90, 120].map((m) => `<option value="${m}"${m === 20 ? ' selected' : ''}>${m} min</option>`).join('')}</select></label>
        </div>
        <p class="feedback warn" id="ct-err" hidden>${esc(t('testPickLevel'))}</p>
        <button class="btn btn-primary" type="submit">${esc(t('testStart'))}</button>
      </form>
      <h2>${esc(t('testHistory'))}</h2>
      ${hist.length ? `<table class="tbl tbl-auto"><tr><th>${esc(t('date'))}</th><th>${esc(t('testName'))}</th><th>${esc(t('testScore'))}</th><th>${esc(t('testDuration'))}</th></tr>
        ${hist.map((h) => `<tr><td>${esc(h.date)}</td><td>${esc(h.title || h.kind)}</td><td>${h.score} / ${h.total} (${pct(h.score, h.total)} %)</td><td>${fmtTime(h.sec || 0)}</td></tr>`).join('')}</table>`
        : `<p class="muted">${esc(t('testNoHistory'))}</p>`}`);
    document.getElementById('ct').addEventListener('submit', (e) => {
      e.preventDefault();
      const f = e.target;
      const lv = [...f.querySelectorAll('input[name=lv]:checked')].map((x) => x.value);
      if (!lv.length) { document.getElementById('ct-err').hidden = false; return; }
      location.hash = `#/testy/vlastny/${lv.join(',')}/${f.n.value}/${f.m.value}`;
    });
  }

  function run(kind, params) {
    let levels, count, minutes, title;
    if (PRESETS[kind]) {
      ({ levels, count, minutes } = PRESETS[kind]);
      title = t(PRESETS[kind].key);
    } else {
      const lv = (params[0] || '').split(',').filter((x) => APP.levelById(x));
      if (!lv.length) { overview(); return; }
      levels = Object.fromEntries(lv.map((x) => [x, 1]));
      count = Math.max(1, Math.min(50, Number(params[1]) || 10));
      minutes = Number(params[2]) || 0;
      title = t('testCustom');
    }
    const lessons = pickLessons(levels, count);
    if (!lessons.length) { overview(); return; }
    // intro: pravidlá a štart (časomiera beží až po stlačení)
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/testy">${esc(t('testsTitle'))}</a></nav>
      <h1>📝 ${esc(title)}</h1>
      <div class="block"><ul>
        <li>${esc(t('testRuleCount', { n: lessons.length }))}</li>
        <li>${esc(minutes ? t('testRuleTime', { m: minutes }) : t('testRuleNoTime'))}</li>
        <li>${esc(t('testRuleNoFeedback'))}</li>
        <li>${esc(t('testRuleTools'))}</li>
      </ul>
      <button class="btn btn-primary" id="go" type="button">${esc(t('testStart'))}</button></div>`);
    document.getElementById('go').addEventListener('click', () => start(kind, title, lessons, minutes));
  }

  function start(kind, title, lessons, minutes) {
    const t0 = Date.now();
    APP.setPage(`<nav class="crumbs"><a href="#/testy">${esc(t('testsTitle'))}</a></nav>
      <h1>📝 ${esc(title)}</h1><div id="pw"></div>`);
    PROBLEM.mount(document.getElementById('pw'), {
      mode: 'exam',
      total: lessons.length,
      timeLimit: minutes ? minutes * 60 : null,
      next: (i) => (i < lessons.length ? { id: lessons[i].id, ex: EXERCISES.make(lessons[i].id, APP.contentLang(lessons[i].id)) } : null),
      record: () => { /* výsledky sa uložia naraz na konci */ },
      onDone: (results) => finish(kind, title, results, (Date.now() - t0) / 1000)
    });
  }

  function finish(kind, title, results, sec) {
    const right = results.filter((r) => r.correct).length;
    // do postupu v lekciách sa test započíta tiež (bez vplyvu na sériu nápovedí)
    results.forEach((r) => STORE.record(r.id, r.correct, { mode: 'test', ms: r.ms }));
    const byTopic = {};
    results.forEach((r) => {
      const th = APP.themeOf(r.id);
      const k = th ? th.id : '?';
      const x = byTopic[k] || (byTopic[k] = [0, 0]);
      x[1] += 1;
      if (r.correct) x[0] += 1;
    });
    STORE.addTest({ kind, title, score: right, total: results.length, sec: Math.round(sec), topics: byTopic });
    const topics = Object.entries(byTopic).sort((a, b) => a[1][0] / a[1][1] - b[1][0] / b[1][1]);
    const p = pct(right, results.length);
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/testy">${esc(t('testsTitle'))}</a></nav>
      <h1>📝 ${esc(title)}</h1>
      <p class="big-score">${right} / ${results.length} <span class="muted">(${p} %)</span></p>
      <p class="muted">${esc(t('testDuration'))}: ${fmtTime(sec)}</p>
      <h2>${esc(t('testByTopic'))}</h2>
      <table class="tbl tbl-auto">${topics.map(([id, [a, b]]) => {
        const th = APP.themeById(id);
        return `<tr><td>${th ? `<a href="#/tema/${id}">${th.icon} ${esc(APP.thName(th).title)}</a>` : '–'}</td><td>${a} / ${b}</td>
          <td><div class="bar small-bar"><span style="width:${pct(a, b)}%"></span></div></td></tr>`;
      }).join('')}</table>
      <h2>${esc(t('testReview'))}</h2>
      <ol class="test-review">${results.map((r) => {
        const L = APP.lessonById(r.id), lang = APP.htmlLang(r.ex.lang || 'sk');
        return `<li class="${r.correct ? 'ok' : 'bad'}">
          <div class="tr-head">${r.correct ? '✓' : '✗'} <a href="#/lekcia/${r.id}">${APP.lessonTitle(L)}</a></div>
          <div class="q-text" lang="${lang}">${r.ex.q}</div>
          <p><strong>${esc(t('yourAnswerWas'))}</strong> ${r.input ? esc(r.input) : `<em>${esc(t('noAnswer'))}</em>`}
             · <strong>${esc(t('correctAnswer'))}</strong> <span lang="${lang}">${esc(EXERCISES.formatAnswer(r.ex))}</span></p>
          <details><summary>${esc(t('showSolution'))}</summary><p lang="${lang}">${r.ex.solution}</p></details>
        </li>`;
      }).join('')}</ol>
      <div class="actions"><a class="btn btn-primary" href="#/testy">${esc(t('testsTitle'))}</a></div>`);
    APP.applyStatic();
  }

  APP.route('testy', (p) => {
    if (!p[0]) return overview();
    if (PRESETS[p[0]] || p[0] === 'vlastny') return run(p[0], p.slice(1));
    return overview();
  });
  APP.addMenu({ href: '#/testy', icon: '📝', key: 'menuTests' });
})();
