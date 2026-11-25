/* Scenárový test appky Blood Pressure (index.html) s minimálnou náhradou DOM, času a úložiska.
   Spustenie (z priečinka blood-pressure-app):  node tools/test.js */
'use strict';
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
// hlavný skript appky je v app.js (index.html ho načíta cez <script src>, Content-Security-Policy nepovolí vložený skript)
const script = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
assert.ok(!/<script>/.test(html) && !/\son[a-z]+=/.test(html), 'index.html obsahuje skript vložený priamo do stránky – CSP ho zablokuje');
assert.ok(/http-equiv="Content-Security-Policy"/.test(html), 'index.html nemá Content-Security-Policy');
const LANGS = ['sk', 'en', 'es', 'pt', 'de', 'fr', 'it', 'ru', 'tr', 'ja', 'ko', 'zh'];
LANGS.forEach(l => assert.ok(html.includes('<script src="i18n/' + l + '.js"></script>'), 'index.html nenačíta i18n/' + l + '.js'));

// ---- falošný čas: 16. 11. 2026, hodina a posun dní nastavuje test ----
const RealDate = Date;
let offsetDays = 0, hour = 8;
const clockNow = () => { const d = new RealDate(2026, 10, 16, hour, 5, 0); d.setDate(d.getDate() + offsetDays); return d.getTime(); };
class FakeDate extends RealDate {
  constructor(...a) { if (a.length) super(...a); else super(clockNow()); }
  static now() { return clockNow(); }
}
global.Date = FakeDate;

// ---- falošný DOM ----
function el(name) {
  return { name, id: name, value: '', innerHTML: '', hidden: true, textContent: '', scrollTop: 0, attrs: {},
    setAttribute(k, v) { this.attrs[k] = v; }, getAttribute(k) { return this.attrs[k]; }, removeAttribute(k) { delete this.attrs[k]; },
    addEventListener(t, f) { this['on' + t] = f; }, focus() {}, click() {},
    querySelector() { return { focus() {}, scrollTop: 0 }; } };
}
const els = {};
['view', 'sheet', 'modal', 'toast', 'theme-color', 'print', 'set-gsys', 'set-gdia', 'err-goal', 'import-file', 'f-dia'].forEach(id => { els['#' + id] = el(id); });
const listeners = {};
const store = {};
// Scenáre kontrolujú slovenské texty: bez zvoleného jazyka appka dostane slovenčinu.
// Test predvoleného jazyka (angličtina po inštalácii) to vypne cez forceSk = false.
let forceSk = true;
global.localStorage = { getItem: k => {
    if (k === 'bloodPressure.settings.v1' && forceSk) { const v = JSON.parse(store[k] || '{}') || {}; if (!v.lang) return JSON.stringify(Object.assign(v, { lang: 'sk' })); }
    return k in store ? store[k] : null;
  }, setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } };
const downloads = [];
global.URL.createObjectURL = b => { downloads.push(b); return 'blob:x'; };
global.URL.revokeObjectURL = () => {};
global.document = {
  documentElement: el('html'), visibilityState: 'visible',
  querySelector: s => els[s] || null, querySelectorAll: () => [],
  addEventListener: (t, f) => { listeners[t] = f; },
  createElement: () => ({ click() {}, remove() {} }), body: { appendChild() {} }
};
const winListeners = {};
global.window = { addEventListener(t, f) { winListeners[t] = f; } };
global.matchMedia = () => ({ matches: false, addEventListener() {} });
Object.defineProperty(global, 'navigator', { value: { userAgent: 'node', platform: '', maxTouchPoints: 0 }, writable: true, configurable: true });
global.location = { protocol: 'file:' };

// preklady: jadro a všetky slovníky (v prehliadači ich načítajú <script src="i18n/…">)
global.self = global;
['core'].concat(LANGS).forEach(f => new Function(fs.readFileSync(path.join(__dirname, '..', 'i18n', f + '.js'), 'utf8')).call(global));
window.BPI18N = global.BPI18N;
new Function(script)();

const view = () => els['#view'].innerHTML, sheet = () => els['#sheet'].innerHTML, modal = () => els['#modal'];
const toastText = () => els['#toast'].textContent;
const data = () => JSON.parse(store['bloodPressure.data.v1'] || 'null');
const settings = () => JSON.parse(store['bloodPressure.settings.v1'] || '{}');
function input(id, value) { const e = els['#' + id] || { id }; e.id = id; e.value = value; listeners.input({ target: e }); }
function click(ds) { listeners.click({ target: { closest: () => ({ dataset: ds, setAttribute() {} }) } }); }
// zapíše meranie cez formulár (čas = aktuálna falošná hodina, ak nie je zadaný)
function add(sys, dia, pulse, o = {}) {
  click({ act: 'add' });
  input('f-sys', String(sys)); input('f-dia', String(dia)); input('f-pulse', pulse == null ? '' : String(pulse));
  if (o.time) input('f-time', o.time);
  if (o.date) input('f-date', o.date);
  (o.tags || []).forEach(k => click({ ftag: k }));
  click({ act: 'saveForm' });
}
let ok = 0;
const pending = [];
function t(name, fn) {
  const fail = e => { console.error('✗', name, '\n ', e.message); process.exitCode = 1; };
  const pass = () => { ok++; console.log('✓', name); };
  try {
    const r = fn();
    if (r && typeof r.then === 'function') pending.push(r.then(pass, fail)); else pass();
  } catch (e) { fail(e); }
}

t('prázdna appka ukáže, ako to funguje', () => {
  assert.ok(view().includes('Ako to funguje'));
  assert.ok(view().includes('Ranné meranie'));
  click({ tab: 'stats' });
  assert.ok(view().includes('Zatiaľ málo meraní'));
  click({ tab: 'hist' });
  assert.ok(view().includes('Zatiaľ žiadne merania'));
  click({ tab: 'week' });
  assert.ok(view().includes('Začať 7-dňové meranie'));
  click({ tab: 'today' });
});

t('zlé hodnoty sa neuložia a ukáže sa chyba', () => {
  click({ act: 'add' });
  input('f-sys', '80'); input('f-dia', '120');
  click({ act: 'saveForm' });
  assert.ok(sheet().includes('Horný tlak musí byť vyšší ako dolný'));
  assert.ok(sheet().includes('aria-invalid="true"'));
  input('f-sys', 'abc');
  click({ act: 'saveForm' });
  assert.ok(sheet().includes('od 60 do 300'));
  input('f-sys', '128'); input('f-dia', '82'); input('f-pulse', '400');
  click({ act: 'saveForm' });
  assert.ok(sheet().includes('Pulz zadaj'));
  input('f-pulse', ''); input('f-date', '2026-11-20');
  click({ act: 'saveForm' });
  assert.ok(sheet().includes('v budúcnosti'));
  assert.strictEqual(data(), null, 'nič sa nemalo uložiť');
  click({ act: 'close' });
});

t('meranie sa uloží, dostane kategóriu a ukáže sa na obrazovke Dnes', () => {
  add(128, 82, 71, { tags: ['coffee'] });
  assert.ok(sheet().includes('Zapísané') && sheet().includes('Normálny'));
  const r = data().readings;
  assert.strictEqual(r.length, 1);
  assert.deepStrictEqual([r[0].sys, r[0].dia, r[0].pulse, r[0].date, r[0].time, r[0].arm], [128, 82, 71, '2026-11-16', '08:05', 'L']);
  assert.ok(r[0].tags.coffee);
  click({ act: 'close' });
  assert.ok(view().includes('Posledné meranie') && view().includes('128'));
  assert.ok(!view().includes('Zmeraj si tlak'), 'ranné meranie je už hotové');
});

t('druhé meranie prevezme okolnosti a ukáže priemer sedenia', () => {
  add(128, 82, 71);   // pomocná funkcia zavrie predchádzajúci formulár až po uložení
  click({ act: 'close' });
  add(140, 90, 70);
  click({ act: 'addSecond' });
  assert.ok(sheet().includes('Druhé meranie'));
  input('f-sys', '132'); input('f-dia', '86');
  click({ act: 'saveForm' });
  assert.ok(sheet().includes('Priemer'), 'chýba priemer sedenia');
  click({ act: 'close' });
  assert.strictEqual(data().readings.length, 4);
});

t('kategórie podľa ESH vrátane nízkeho a veľmi vysokého tlaku', () => {
  const cases = [[115, 75, 'Optimálny'], [135, 80, 'Vysoký normálny'], [150, 85, '1. stupeň'], [125, 102, '2. stupeň'], [85, 55, 'Nízky']];
  cases.forEach(([s, d, label]) => { add(s, d, null); assert.ok(sheet().includes(label), s + '/' + d + ' má byť ' + label); click({ act: 'close' }); });
  add(185, 100, 90);
  assert.ok(sheet().includes('3. stupeň') && sheet().includes('112'), 'chýba varovanie pri veľmi vysokom tlaku');
  click({ act: 'close' });
  assert.ok(view().includes('Veľmi vysoký tlak'));
});

t('úprava a vymazanie merania', () => {
  const r = data().readings.find(x => x.sys === 185);
  click({ act: 'open', id: r.id });
  assert.ok(sheet().includes('Upraviť meranie'));
  input('f-sys', '165'); input('f-note', 'zle <b>nasadená</b> manžeta');
  click({ act: 'saveForm' });
  const e = data().readings.find(x => x.id === r.id);
  assert.strictEqual(e.sys, 165);
  assert.ok(!e.note.includes('<'), 'poznámka nesmie obsahovať HTML');
  click({ act: 'open', id: r.id });
  click({ act: 'askDelReading' });
  assert.ok(!modal().hidden);
  click({ act: 'modalOk' });
  assert.ok(!data().readings.some(x => x.id === r.id));
  assert.ok(toastText().includes('vymazané'));
});

t('prehľad: priemer, ráno a večer, okolnosti', () => {
  hour = 19; add(138, 88, 75); click({ act: 'close' });
  click({ tab: 'stats' });
  const v = view();
  assert.ok(v.includes('Priemer ·') && v.includes('Ráno a večer') && v.includes('Podľa kategórie'));
  assert.ok(v.includes('<svg'), 'chýba graf');
  click({ period: '7' });
  assert.ok(view().includes('Prehľad · 7 dní'));
  click({ tab: 'hist' });
  assert.ok(view().includes('Pondelok 16. novembra'));
});

t('7-dňové meranie: prvý deň sa nepočíta a po týždni sa vyhodnotí', () => {
  resetData();
  click({ tab: 'week' });
  click({ act: 'startWeek' });
  assert.strictEqual(data().week.start, '2026-11-16');
  hour = 7; add(170, 100, 80); click({ act: 'close' });   // 1. deň (nezapočíta sa)
  for (let d = 1; d < 7; d++) {
    offsetDays = d;
    hour = 7; add(130, 80, 70); click({ act: 'close' }); add(132, 82, 70); click({ act: 'close' });
    hour = 19; add(134, 84, 70); click({ act: 'close' }); add(136, 86, 70); click({ act: 'close' });
  }
  click({ tab: 'week' });
  assert.ok(view().includes('Vyhodnotiť'), 'v 7. deň večer sa dá vyhodnotiť');
  offsetDays = 7; hour = 8;
  click({ tab: 'today' });
  const w = data().weeks[0];
  assert.strictEqual(data().week, null);
  assert.deepStrictEqual([w.sys, w.dia, w.n], [133, 83, 24]);
  click({ tab: 'week' });
  assert.ok(view().includes('133/83') && view().includes('Pod hranicou'));
});

t('nastavenia: vzhľad, oslovenie, hranica, ruka', () => {
  click({ act: 'settings' });
  assert.ok(sheet().includes('Hranica pre domáce meranie'));
  click({ themeSet: 'light' });
  assert.strictEqual(document.documentElement.attrs['data-theme'], 'light');
  input('set-name', ' Jana ');
  els['#set-gsys'].value = '130'; els['#set-gdia'].value = '140'; input('set-gdia', '140');
  assert.strictEqual(els['#err-goal'].hidden, false, 'zlá hranica má ukázať chybu');
  els['#set-gsys'].value = '130'; input('set-gdia', '80');
  click({ armset: 'R' });
  const s = settings();
  assert.deepStrictEqual([s.theme, s.name, s.goalSys, s.goalDia, s.arm], ['light', 'Jana', 130, 80, 'R']);
  click({ act: 'close' });
  click({ tab: 'week' });
  assert.ok(view().includes('Nad hranicou'), '133/83 je nad hranicou 130/80');
  click({ tab: 'today' });
  assert.ok(view().includes('Jana'));
});

t('tabuľka CSV', () => {
  click({ act: 'exportCsv' });
  const b = downloads[downloads.length - 1];
  return b.text().then(txt => {
    // Blob.text() pri dekódovaní BOM zahodí, preto ho neoverujeme
    assert.ok(txt.replace(/^﻿/, '').startsWith('Dátum;Čas;'));
    assert.ok(txt.includes('2026-11-17;07:05;ráno;130;80;70;'));
  });
});

t('prehľad pre lekára obsahuje súhrn a merania', () => {
  click({ act: 'report' });
  const s = sheet();
  assert.ok(s.includes('Priemer ráno') && s.includes('7-dňové domáce meranie') && s.includes('130/80'));
  click({ repdays: '14' });
  assert.ok(sheet().includes('14 dní'));
  click({ act: 'close' });
});

let backup;
t('záloha sa stiahne a zapamätá si dátum', () => {
  click({ act: 'export' });
  backup = downloads[downloads.length - 1];
  assert.strictEqual(settings().lastBackup, '2026-11-23');
});

t('vymazanie všetkých dát', () => {
  click({ act: 'settings' });
  click({ act: 'askReset' });
  click({ act: 'modalOk' });
  assert.strictEqual(store['bloodPressure.data.v1'], undefined);
  assert.ok(view().includes('Ako to funguje'));
});

async function asyncTests() {
  // obnovenie zo zálohy
  const txt = await backup.text();
  listeners.change({ target: { id: 'import-file', files: [{ text: async () => txt }] } });
  await new Promise(r => setTimeout(r, 10));
  t('obnovenie zo zálohy vráti merania', () => {
    assert.ok(!modal().hidden && modal().innerHTML.includes('Obnoviť zo zálohy'));
    click({ act: 'modalOk' });
    assert.strictEqual(data().readings.length, 25);
    assert.strictEqual(data().weeks.length, 1);
  });
  listeners.change({ target: { id: 'import-file', files: [{ text: async () => '{"app":"iná","data":{}}' }] } });
  await new Promise(r => setTimeout(r, 10));
  t('cudzí súbor sa neobnoví', () => {
    assert.ok(modal().innerHTML.includes('nepodarilo načítať'));
    click({ act: 'modalCancel' });
    assert.strictEqual(data().readings.length, 25);
  });
  const bad = JSON.stringify({ app: 'blood-pressure', data: { readings: [{ date: '2026-11-01', time: '08:00', sys: 120, dia: 80 }, { date: 'x', time: '1', sys: '<img>', dia: 1 }, { date: '2026-11-02', time: '25:00', sys: 120, dia: 80 }] } });
  listeners.change({ target: { id: 'import-file', files: [{ text: async () => bad }] } });
  await new Promise(r => setTimeout(r, 10));
  t('poškodené merania v zálohe sa vynechajú', () => {
    click({ act: 'modalOk' });
    assert.strictEqual(data().readings.length, 1);
  });

  t('jazyky: úplné slovníky, po inštalácii angličtina, výber jazyka v nastaveniach', () => {
    const I = global.BPI18N, sk = I.dict('sk');
    const ph = x => [...new Set(JSON.stringify(x).match(/\{\w+\}/g) || [])].sort().join();
    assert.strictEqual(I.languages().length, 12, 'má byť 12 jazykov');
    I.languages().forEach(({ code }) => {
      const d = I.dict(code);
      assert.ok(d._dec && d._name && d._htmlLang && d._flag, code + ': chýba _dec/_name/_htmlLang/_flag');
      Object.keys(d).forEach(k => assert.ok(k in sk, code + ': kľúč navyše ' + k));
      Object.keys(sk).filter(k => k[0] !== '_').forEach(k => {
        assert.ok(k in d, code + ': chýba ' + k);
        if (Array.isArray(sk[k])) assert.strictEqual(d[k].length, sk[k].length, code + ': dĺžka ' + k);
        else if (typeof sk[k] === 'object') assert.ok(d[k].other && Object.values(d[k]).every(v => v.includes('{n}')), code + ': množné číslo ' + k);
        else assert.strictEqual(ph(d[k]), ph(sk[k]), code + ': premenné v ' + k);
      });
    });
    const en = I.dict('en'), de = I.dict('de');
    // čistá inštalácia: angličtina, dátumy po anglicky
    forceSk = false;
    const saved = Object.assign({}, store);
    Object.keys(store).forEach(k => delete store[k]);
    winListeners.storage({ key: null });
    click({ tab: 'today' });
    assert.strictEqual(I.lang(), 'en');
    assert.strictEqual(document.documentElement.attrs.lang, 'en');
    assert.ok(view().includes(en.howWorks) && view().includes('Monday'), 'úvod nie je po anglicky');
    // výber jazyka v nastaveniach
    click({ act: 'settings' });
    assert.ok(sheet().includes('id="set-lang"') && sheet().includes('Slovenčina') && sheet().includes('Deutsch') && sheet().includes('中文'), 'chýba výber jazyka');
    listeners.change({ target: { id: 'set-lang', value: 'de' } });
    assert.strictEqual(settings().lang, 'de', 'jazyk sa neuložil');
    assert.ok(sheet().includes(de.appearance), 'nastavenia sa neprepli');
    click({ act: 'close' });
    add(150, 85, 70);
    assert.ok(sheet().includes(de['cat.g1']), 'kategória nie je po nemecky');
    click({ act: 'close' });
    assert.ok(view().includes('Montag'), 'dátum nie je po nemecky');
    click({ act: 'exportCsv' });
    // neplatný jazyk a podvrhnuté nastavenia (napr. zo zálohy) = angličtina, nič navyše
    store['bloodPressure.settings.v1'] = JSON.stringify({ lang: '__proto__', theme: '<b>', arm: 'X', name: 5, goalSys: '<i>' });
    winListeners.storage({ key: 'bloodPressure.settings.v1' });
    assert.strictEqual(I.lang(), 'en');
    click({ act: 'settings' });
    assert.ok(!sheet().includes('<b>') && !sheet().includes('<i>'), 'podvrhnuté nastavenia sa dostali do stránky');
    click({ act: 'close' });
    // staré nastavenia bez jazyka (verzia len po slovensky) = slovenčina
    Object.keys(store).forEach(k => delete store[k]);
    Object.assign(store, saved);
    store['bloodPressure.settings.v1'] = JSON.stringify(Object.assign(JSON.parse(saved['bloodPressure.settings.v1'] || '{}'), { lang: undefined }));
    winListeners.storage({ key: null });
    assert.strictEqual(I.lang(), 'sk');
    forceSk = true;
  });
  const csv = downloads[downloads.length - 1];
  const csvTxt = await csv.text();
  t('CSV v nemčine má nemecké hlavičky a oddeľovač ;', () => {
    assert.ok(csvTxt.replace(/^﻿/, '').startsWith(BPI18N.dict('de').csvHead[0] + ';'), csvTxt.slice(0, 40));
  });

  // natívna appka (Capacitor): appku spustíme znova s falošnými pluginmi
  const writes = [], shares = [], rmdirs = [], appL = {};
  let minimized = 0, shareErr = null;
  window.Capacitor = { isNativePlatform: () => true, getPlatform: () => 'android', Plugins: {
    Filesystem: { writeFile: async o => { writes.push(o); return { uri: 'file:///cache/' + o.path }; }, rmdir: async o => { rmdirs.push(o); } },
    Share: { share: async o => { if (shareErr) throw new Error(shareErr); shares.push(o); } },
    App: { addListener: (ev, f) => { appL[ev] = f; }, minimizeApp: async () => { minimized++; } }
  } };
  const dl0 = downloads.length;
  new Function(script)();
  const tick = () => new Promise(r => setTimeout(r, 10));
  const lastFile = () => Buffer.from(writes[writes.length - 1].data, 'base64').toString('utf8');
  click({ act: 'export' }); await tick();
  const bak = lastFile();
  click({ act: 'report' });
  const repSheet = sheet();
  click({ act: 'printReport' }); await tick();
  const rep = lastFile();
  click({ act: 'close' });
  shareErr = 'Share canceled'; els['#toast'].textContent = '';
  click({ act: 'exportCsv' }); await tick();
  const toastCancel = toastText();
  shareErr = 'disk full';
  click({ act: 'exportCsv' }); await tick();
  const toastFail = toastText();
  shareErr = null;
  t('natívna appka: zálohu, CSV a prehľad zdieľa, nesťahuje; tlačidlo Späť', () => {
    assert.strictEqual(rmdirs.length, 1, 'pri štarte sa vymaže priečinok s exportmi');
    assert.strictEqual(downloads.length, dl0, 'v natívnej appke sa nič nesťahuje cez <a download>');
    assert.ok(/^export\/blood-pressure-\d{4}-\d\d-\d\d\.json$/.test(writes[0].path) && writes[0].directory === 'CACHE', writes[0].path);
    assert.strictEqual(JSON.parse(bak).app, 'blood-pressure');
    assert.deepStrictEqual(shares[0].files, ['file:///cache/' + writes[0].path]);
    assert.ok(settings().lastBackup, 'po zdieľaní sa dátum zálohy zapamätá');
    assert.ok(repSheet.includes('Zdieľať prehľad') && !repSheet.includes('Vytlačiť'), 'namiesto tlače sa prehľad zdieľa');
    assert.ok(/\.html$/.test(writes[1].path) && rep.startsWith('<!doctype html>') && rep.includes('Priemer ráno') && !/<script/i.test(rep));
    assert.strictEqual(toastCancel, '', 'zrušené zdieľanie nie je chyba');
    assert.ok(toastFail.includes('nepodarilo uložiť'), toastFail);
    // Späť: zavrie okno, potom vráti na Dnes, na Dnes appku odloží
    click({ act: 'settings' });
    assert.ok(!els['#sheet'].hidden);
    appL.backButton();
    assert.ok(els['#sheet'].hidden);
    click({ tab: 'hist' });
    appL.backButton();
    assert.strictEqual(minimized, 0);
    assert.ok(view().includes('Ranné meranie') || view().includes('Dnes'), 'späť na Dnes');
    appL.backButton();
    assert.strictEqual(minimized, 1);
  });
  delete window.Capacitor;
}

function resetData() {
  click({ act: 'settings' }); click({ act: 'askReset' }); click({ act: 'modalOk' });
  offsetDays = 0; hour = 8;
}

// CSV test vracia Promise – počkáme naň a potom spustíme zvyšok
Promise.all(pending).then(asyncTests).then(() => {
  console.log(`Blood Pressure: ${ok} testov prešlo`);
});
