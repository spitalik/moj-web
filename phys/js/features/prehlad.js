/* Prehľad pre rodiča (aj pre žiaka): aktivita za posledných 14 dní, úspešnosť, čas, séria dní,
   lekcie tohto týždňa, kde treba pomôcť, nedávno zvládnuté lekcie a testy. Súhrn sa dá skopírovať
   (napr. poslať správou) alebo vytlačiť. Údaje sú len v tomto zariadení. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const DAYS = 14;

  const fmtMin = (ms) => Math.round(ms / 60000);
  const pct = (a, b) => (b ? Math.round(100 * a / b) : 0);
  const dayLabel = (d) => { const [y, m, dd] = d.split('-').map(Number); return new Date(y, m - 1, dd).toLocaleDateString(I18N.info(I18N.getLang()).htmlLang, { weekday: 'short', day: 'numeric' }); };

  function data() {
    const act = STORE.activity(), today = STORE.day();
    const days = [];
    for (let k = DAYS - 1; k >= 0; k--) {
      const d = STORE.addDays(today, -k);
      days.push({ d, a: act[d] || { n: 0, r: 0, ms: 0, ls: {} } });
    }
    const week = days.slice(-7);
    const sumOf = (list, f) => list.reduce((s, x) => s + f(x.a), 0);
    // lekcie tohto týždňa
    const weekLessons = {};
    week.forEach(({ a }) => Object.entries(a.ls || {}).forEach(([id, [n, r]]) => {
      const x = weekLessons[id] || (weekLessons[id] = [0, 0]);
      x[0] += n;
      x[1] += r;
    }));
    // treba pomôcť: za 14 dní aspoň 4 pokusy a úspešnosť pod 60 %
    const recent = {};
    days.forEach(({ a }) => Object.entries(a.ls || {}).forEach(([id, [n, r]]) => {
      const x = recent[id] || (recent[id] = [0, 0]);
      x[0] += n;
      x[1] += r;
    }));
    const help = Object.entries(recent).filter(([id, [n, r]]) => n >= 4 && r / n < 0.6 && APP.lessonById(id)).sort((a, b) => a[1][1] / a[1][0] - b[1][1] / b[1][0]);
    const pr = STORE.progress();
    const masteredRecent = Object.entries(pr).filter(([id, p]) => p.mastered && p.last && STORE.daysBetween(p.last, today) <= DAYS && APP.lessonById(id));
    return {
      days, week, weekN: sumOf(week, (a) => a.n), weekR: sumOf(week, (a) => a.r), weekMs: sumOf(week, (a) => a.ms || 0),
      activeDays: week.filter((x) => x.a.n > 0).length, weekLessons, help, masteredRecent,
      masteredTotal: Object.values(pr).filter((p) => p.mastered).length, streak: STORE.dayStreak(), tests: STORE.tests().slice(-5).reverse()
    };
  }

  // stĺpcový graf: počet úloh za deň, správne plnou farbou
  function chart(days) {
    const max = Math.max(5, ...days.map((x) => x.a.n));
    const W = 560, H = 180, pad = 26, bw = (W - 2 * pad) / days.length;
    const y = (v) => H - pad - (v / max) * (H - 2 * pad);
    const bars = days.map((x, k) => {
      const X = pad + k * bw + 3, w = bw - 6;
      const all = x.a.n, ok = x.a.r;
      return `<g><title>${esc(dayLabel(x.d))}: ${all} / ${ok} ✓</title>
        ${all ? `<rect class="f-fill2" x="${X}" y="${y(all)}" width="${w}" height="${y(0) - y(all)}" rx="3"/>` : ''}
        ${ok ? `<rect class="chart-ok" x="${X}" y="${y(ok)}" width="${w}" height="${y(0) - y(ok)}" rx="3"/>` : ''}
        <text class="f-small" x="${X + w / 2}" y="${H - 8}" text-anchor="middle">${esc(dayLabel(x.d).replace(/\.$/, ''))}</text></g>`;
    }).join('');
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t('parentChart'))}">
      <line class="f-axis" x1="${pad}" y1="${y(0)}" x2="${W - pad}" y2="${y(0)}"/>
      <text class="f-small" x="${pad - 4}" y="${y(max) + 4}" text-anchor="end">${max}</text>${bars}</svg>
      <p class="muted small chart-legend"><span class="legend ok"></span> ${esc(t('parentLegendOk'))} <span class="legend all"></span> ${esc(t('parentLegendAll'))}</p>`;
  }

  function summaryText(x, name) {
    const lines = [
      `${t('appName')} – ${t('parentTitle')}${name ? ` (${name})` : ''}, ${STORE.day()}`,
      t('parentWeekLine', { n: x.weekN, p: pct(x.weekR, x.weekN), m: fmtMin(x.weekMs), d: x.activeDays }),
      t('parentStreakLine', { n: x.streak, m: x.masteredTotal })
    ];
    if (x.help.length) lines.push(`${t('parentHelp')}: ${x.help.slice(0, 5).map(([id]) => APP.tr(APP.lessonById(id)).title).join(', ')}`);
    if (x.masteredRecent.length) lines.push(`${t('parentMastered')}: ${x.masteredRecent.slice(0, 5).map(([id]) => APP.tr(APP.lessonById(id)).title).join(', ')}`);
    return lines.join('\n');
  }

  function page() {
    const s = STORE.settings();
    const x = data();
    const lessonRow = ([id, [n, r]]) => `<li><a href="#/lekcia/${id}">${APP.lessonTitle(APP.lessonById(id))}</a> ${APP.stateBadge(id)}
      <span class="muted small">${r} / ${n} (${pct(r, n)} %)</span></li>`;
    const weekList = Object.entries(x.weekLessons).sort((a, b) => b[1][0] - a[1][0]);
    APP.setPage(`<nav class="crumbs no-print"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>📊 ${esc(t('parentTitle'))}</h1>
      <p class="muted">${esc(t('parentIntro'))}</p>
      <label class="field no-print">${esc(t('parentName'))} <input id="cn" type="text" value="${esc(s.childName || '')}" maxlength="40"></label>
      <div class="stats">
        <div class="stat"><span class="stat-n">${x.weekN}</span><span class="stat-l">${esc(t('parentWeekTasks'))}</span></div>
        <div class="stat"><span class="stat-n">${pct(x.weekR, x.weekN)} %</span><span class="stat-l">${esc(t('parentWeekRate'))}</span></div>
        <div class="stat"><span class="stat-n">${fmtMin(x.weekMs)} min</span><span class="stat-l">${esc(t('parentWeekTime'))}</span></div>
        <div class="stat"><span class="stat-n">${x.activeDays} / 7</span><span class="stat-l">${esc(t('parentActiveDays'))}</span></div>
        <div class="stat"><span class="stat-n">🔥 ${x.streak}</span><span class="stat-l">${esc(t('streakTitle'))}</span></div>
        <div class="stat"><span class="stat-n">● ${x.masteredTotal}</span><span class="stat-l">${esc(t('parentMasteredTotal'))}</span></div>
      </div>
      <h2>${esc(t('parentChart'))}</h2>
      ${chart(x.days)}
      <div class="two-col">
        <section class="block"><h2>⚠️ ${esc(t('parentHelp'))}</h2>
          ${x.help.length ? `<ul class="lesson-list">${x.help.slice(0, 10).map(lessonRow).join('')}</ul><p class="muted small">${esc(t('parentHelpHint'))}</p>` : `<p class="muted">${esc(t('parentHelpNone'))}</p>`}</section>
        <section class="block"><h2>🌟 ${esc(t('parentMastered'))}</h2>
          ${x.masteredRecent.length ? `<ul class="lesson-list">${x.masteredRecent.slice(0, 10).map(([id]) => `<li><a href="#/lekcia/${id}">${APP.lessonTitle(APP.lessonById(id))}</a> ${APP.stateBadge(id)}</li>`).join('')}</ul>` : `<p class="muted">${esc(t('parentMasteredNone'))}</p>`}</section>
      </div>
      <section class="block"><h2>${esc(t('parentWeekLessons'))}</h2>
        ${weekList.length ? `<ul class="lesson-list">${weekList.slice(0, 20).map(lessonRow).join('')}</ul>` : `<p class="muted">${esc(t('parentNothing'))}</p>`}</section>
      ${x.tests.length ? `<section class="block"><h2>📝 ${esc(t('testHistory'))}</h2><ul>${x.tests.map((h) => `<li>${esc(h.date)} · ${esc(h.title || h.kind)} · ${h.score} / ${h.total} (${pct(h.score, h.total)} %)</li>`).join('')}</ul></section>` : ''}
      <div class="actions no-print">
        <button class="btn btn-primary" type="button" id="cp">📋 ${esc(t('parentCopy'))}</button>
        ${navigator.share ? `<button class="btn" type="button" id="sh">📤 ${esc(t('share'))}</button>` : ''}
        <button class="btn" type="button" id="pr">🖨️ ${esc(t('print'))}</button>
      </div>
      <p class="muted small">${esc(t('parentPrivacy'))}</p>`);
    document.getElementById('cn').addEventListener('change', (e) => STORE.setSetting('childName', e.target.value.trim()));
    document.getElementById('pr').addEventListener('click', () => window.print());
    document.getElementById('cp').addEventListener('click', async () => {
      const text = summaryText(data(), STORE.settings().childName);
      try { await navigator.clipboard.writeText(text); APP.toast(`✓ ${esc(t('copied'))}`); } catch (e) { window.prompt(t('parentCopy'), text); }
    });
    const sh = document.getElementById('sh');
    if (sh) sh.addEventListener('click', () => navigator.share({ title: t('parentTitle'), text: summaryText(data(), STORE.settings().childName) }).catch(() => {}));
  }

  APP.route('prehlad', page);
  APP.addMenu({ href: '#/prehlad', icon: '📊', key: 'menuParent' });
})();
