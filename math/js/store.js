/* Úložisko na zariadení (bez účtu): výsledky lekcií, stav zvládnutia, opakovanie v rozostupoch,
   denná aktivita, odznaky, testy, denná výzva, vstupné testy a nastavenia. Všetko v localStorage;
   prenos medzi zariadeniami rieši js/features/prenos.js cez exportAll / importAll.

   Lekcia (progress[id]):
     right, total   – počet správnych a všetkých odpovedí
     hist           – posledných 10 odpovedí ako '1'/'0'
     streak         – počet správnych po sebe
     mastered       – zvládnutá (MASTER_STREAK správnych po sebe; dve chyby po sebe ju vrátia do precvičovania)
     box, boxDay    – priečinok opakovania (Leitner) a deň posledného posunu
     due            – deň, kedy treba lekciu zopakovať ('YYYY-MM-DD')
     last           – deň posledného precvičovania */
(function () {
  'use strict';

  const KEYS = {
    progress: 'matika.progress.v1',
    activity: 'matika.activity.v1',
    badges: 'matika.badges.v1',
    tests: 'matika.tests.v1',
    daily: 'matika.daily.v1',
    placement: 'matika.placement.v1',
    settings: 'matika.settings.v1'
  };
  // Ďalšie kľúče, ktoré patria k používateľovi a prenášajú sa pri exporte.
  const EXTRA_KEYS = ['matika.view', 'matika.theme', 'matika.lang'];

  const read = (k, def) => {
    try {
      const v = JSON.parse(localStorage.getItem(k));
      return v == null ? def : v;
    } catch (e) { return def; }
  };
  const write = (k, v) => {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* súkromný režim: platí len do zatvorenia */ }
  };

  // dni ako 'YYYY-MM-DD' v miestnom čase
  const pad = (n) => String(n).padStart(2, '0');
  const day = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseDay = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (s, n) => { const d = parseDay(s); d.setDate(d.getDate() + n); return day(d); };
  const daysBetween = (a, b) => Math.round((parseDay(b) - parseDay(a)) / 86400000);

  const INTERVALS = [1, 3, 7, 16, 30, 60];
  const MASTER_STREAK = 5;
  const KEEP_DAYS = 120;

  /* ---------- udalosti (odznaky, notifikácie) ---------- */
  const listeners = {};
  const on = (ev, fn) => { (listeners[ev] = listeners[ev] || []).push(fn); };
  const emit = (ev, data) => (listeners[ev] || []).forEach((fn) => {
    try { fn(data); } catch (e) { console.error(e); }
  });

  /* ---------- lekcie ---------- */
  const progress = () => read(KEYS.progress, {});
  const lesson = (id) => progress()[id] || null;

  // none = ešte neprecvičovaná, learning = precvičuje, mastered = zvládnutá
  function state(id, p) {
    const x = p === undefined ? lesson(id) : p;
    if (!x || !x.total) return 'none';
    return x.mastered ? 'mastered' : 'learning';
  }
  const isDue = (p, today = day()) => !!(p && p.total && p.due && p.due <= today);
  function dueList() {
    const pr = progress(), td = day();
    return Object.keys(pr).filter((id) => isDue(pr[id], td)).sort((a, b) => pr[a].due.localeCompare(pr[b].due));
  }

  function record(id, correct, opts = {}) {
    const pr = progress(), td = day();
    const p = pr[id] || { right: 0, total: 0 };
    p.total += 1;
    if (correct) p.right += 1;
    p.hist = ((p.hist || '') + (correct ? '1' : '0')).slice(-10);
    p.streak = correct ? (p.streak || 0) + 1 : 0;
    const wasMastered = !!p.mastered;
    if (p.streak >= MASTER_STREAK) p.mastered = true;
    if (p.mastered && p.hist.endsWith('00')) p.mastered = false;
    // Leitner: správne (aspoň 2 po sebe) posunie priečinok najviac raz za deň, chyba vráti na začiatok
    if (p.box === undefined) p.box = 0;
    if (correct) {
      if (p.boxDay !== td && p.streak >= 2) { p.box = Math.min(p.box + 1, INTERVALS.length - 1); p.boxDay = td; }
    } else {
      p.box = 0;
      p.boxDay = td;
    }
    p.due = addDays(td, INTERVALS[p.box]);
    p.last = td;
    pr[id] = p;
    write(KEYS.progress, pr);

    // denná aktivita (pre prehľad pre rodiča, sériu dní a odznaky)
    const act = read(KEYS.activity, {});
    const a = act[td] || (act[td] = { n: 0, r: 0, ms: 0, ls: {} });
    a.n += 1;
    if (correct) a.r += 1;
    a.ms += Math.max(0, Math.min(opts.ms || 0, 5 * 60 * 1000));
    const la = a.ls[id] || (a.ls[id] = [0, 0]);
    la[0] += 1;
    if (correct) la[1] += 1;
    const days = Object.keys(act).sort();
    while (days.length > KEEP_DAYS) delete act[days.shift()];
    write(KEYS.activity, act);

    const ev = { id, correct, mode: opts.mode || 'practice', steps: !!opts.steps, p, newlyMastered: !wasMastered && p.mastered, lostMastery: wasMastered && !p.mastered };
    emit('answer', ev);
    if (ev.newlyMastered) emit('mastered', ev);
    return ev;
  }

  /* ---------- aktivita a séria dní ---------- */
  const activity = () => read(KEYS.activity, {});
  function dayStreak() {
    const act = activity();
    let d = day();
    if (!(act[d] && act[d].n)) d = addDays(d, -1); // séria trvá, kým sa nevynechá celý deň
    let n = 0;
    while (act[d] && act[d].n > 0) { n += 1; d = addDays(d, -1); }
    return n;
  }

  /* ---------- odznaky, testy, denná výzva, vstupné testy ---------- */
  const badges = () => read(KEYS.badges, {});
  function award(id) {
    const b = badges();
    if (b[id]) return false;
    b[id] = day();
    write(KEYS.badges, b);
    emit('badge', { id });
    return true;
  }
  const tests = () => read(KEYS.tests, []);
  function addTest(rec) {
    const list = tests();
    list.push(Object.assign({ date: day(), at: Date.now() }, rec));
    while (list.length > 100) list.shift();
    write(KEYS.tests, list);
    emit('test', rec);
  }
  const daily = (d = day()) => read(KEYS.daily, {})[d] || null;
  function setDaily(data, d = day()) {
    const all = read(KEYS.daily, {});
    all[d] = data;
    const keys = Object.keys(all).sort();
    while (keys.length > KEEP_DAYS) delete all[keys.shift()];
    write(KEYS.daily, all);
    emit('daily', { date: d, data });
  }
  const dailyAll = () => read(KEYS.daily, {});
  const placement = (key) => read(KEYS.placement, {})[key] || null;
  function setPlacement(key, lessonId) {
    const all = read(KEYS.placement, {});
    all[key] = { lesson: lessonId, date: day() };
    write(KEYS.placement, all);
  }

  /* ---------- nastavenia ---------- */
  const DEFAULT_SETTINGS = { keypad: 'auto', font: 'normal', spacing: false, ttsRate: 1, stepMode: false, myLevel: null, childName: '' };
  const settings = () => Object.assign({}, DEFAULT_SETTINGS, read(KEYS.settings, {}));
  function setSetting(k, v) {
    const s = read(KEYS.settings, {});
    s[k] = v;
    write(KEYS.settings, s);
    emit('settings', { key: k, value: v });
  }

  /* ---------- export / import (prenos medzi zariadeniami) ---------- */
  function exportAll() {
    const out = { app: 'matematika-krok-za-krokom', version: 1, exported: new Date().toISOString(), data: {} };
    [...Object.values(KEYS), ...EXTRA_KEYS].forEach((k) => {
      try {
        const v = localStorage.getItem(k);
        if (v !== null) out.data[k] = v;
      } catch (e) { /* bez úložiska nie je čo exportovať */ }
    });
    return out;
  }

  // mode: 'replace' prepíše, 'merge' zlúči (lekcia: novší záznam, aktivita: väčší deň, odznaky: zjednotenie)
  function importAll(obj, mode = 'merge') {
    if (!obj || obj.app !== 'matematika-krok-za-krokom' || !obj.data) throw new Error('bad-file');
    const parse = (k) => { try { return JSON.parse(obj.data[k]); } catch (e) { return null; } };
    if (mode === 'replace') {
      Object.entries(obj.data).forEach(([k, v]) => { try { localStorage.setItem(k, v); } catch (e) { /* plné úložisko */ } });
      emit('import', { mode });
      return;
    }
    const pin = parse(KEYS.progress) || {}, pr = progress();
    Object.entries(pin).forEach(([id, p]) => {
      const cur = pr[id];
      if (!cur || (p.last || '') > (cur.last || '') || ((p.last || '') === (cur.last || '') && p.total > cur.total)) pr[id] = p;
    });
    write(KEYS.progress, pr);
    const ain = parse(KEYS.activity) || {}, act = activity();
    Object.entries(ain).forEach(([d, a]) => { if (!act[d] || a.n > act[d].n) act[d] = a; });
    write(KEYS.activity, act);
    const bin = parse(KEYS.badges) || {}, b = badges();
    Object.entries(bin).forEach(([id, d]) => { if (!b[id] || d < b[id]) b[id] = d; });
    write(KEYS.badges, b);
    const tin = parse(KEYS.tests) || [], tl = tests();
    tin.forEach((x) => { if (!tl.some((y) => y.at === x.at)) tl.push(x); });
    tl.sort((x, y) => x.at - y.at);
    write(KEYS.tests, tl);
    const din = parse(KEYS.daily) || {}, dl = dailyAll();
    Object.entries(din).forEach(([d, v]) => { if (!dl[d]) dl[d] = v; });
    write(KEYS.daily, dl);
    const plin = parse(KEYS.placement) || {}, pl = read(KEYS.placement, {});
    Object.entries(plin).forEach(([k, v]) => { if (!pl[k]) pl[k] = v; });
    write(KEYS.placement, pl);
    emit('import', { mode });
  }

  window.STORE = {
    KEYS, INTERVALS, MASTER_STREAK, day, addDays, daysBetween,
    on, emit,
    progress, lesson, state, isDue, dueList, record,
    activity, dayStreak,
    badges, award, tests, addTest, daily, setDaily, dailyAll, placement, setPlacement,
    settings, setSetting,
    exportAll, importAll
  };
})();
