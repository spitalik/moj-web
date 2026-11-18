/* Scenárový test appky Sleep Detective (index.html) s minimálnou náhradou DOM, času, mikrofónu a IndexedDB.
   Spustenie (z priečinka sleep-detective):  node tools/test-app.js   (spúšťa ho aj node tools/test.js) */
'use strict';
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const INDEX = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(INDEX, 'utf8');
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1])[1];

// ---- falošný čas ----
const RealDate = Date;
let offsetDays = 0, hour = 8;
let fakeNow = null;
const clockNow = () => { if (fakeNow !== null) return fakeNow; const d = new RealDate(2026, 10, 16, hour, 0, 0); d.setDate(d.getDate() + offsetDays); return d.getTime(); };
class FakeDate extends RealDate {
  constructor(...a) { if (a.length) super(...a); else super(clockNow()); }
  static now() { return clockNow(); }
}
global.Date = FakeDate;
// intervaly spúšťame ručne
const intervals = new Map(); let iid = 0;
global.setInterval = (fn, ms) => { intervals.set(++iid, { fn, ms }); return iid; };
global.clearInterval = id => intervals.delete(id);

// ---- falošný DOM ----
function el(name) {
  return { name, innerHTML: '', hidden: true, textContent: '', scrollTop: 0, attrs: {},
    setAttribute(k, v) { this.attrs[k] = v; }, getAttribute(k) { return this.attrs[k]; },
    addEventListener(t, f) { this['on' + t] = f; },
    querySelector() { return { focus() {}, scrollTop: 0, disabled: false, textContent: '' }; } };
}
const els = { '#night': el('night'), '#n-clock': el('nc'), '#n-sub': el('ns'), '#n-lvl': Object.assign(el('nl'), { style: {} }), '#n-snore': el('nsn'), '#n-noise': el('nno'), '#n-tip': el('nt'), '#view': el('view'), '#sheet': el('sheet'), '#modal': el('modal'), '#toast': el('toast'), '#theme-color': el('tc'), '#tempv': el('tempv') };
['set-auto-from', 'set-auto-to', 'err-auto', 'set-clipn-snore', 'set-clips-snore', 'set-clipn-noise', 'set-clips-noise', 'err-snore', 'err-noise'].forEach(id => { els['#' + id] = Object.assign(el(id), { id, value: '' }); });
const listeners = {};
const store = {};
global.localStorage = {
  getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; }
};
global.document = {
  documentElement: el('html'), visibilityState: 'visible',
  querySelector: s => els[s] || null, querySelectorAll: () => [],
  addEventListener: (t, f) => { listeners[t] = f; },
  createElement: () => ({ click() {}, remove() {} }), body: { appendChild() {} }
};
const winListeners = {};
global.window = { addEventListener(t, f) { winListeners[t] = f; } };
global.matchMedia = () => ({ matches: false, addEventListener() {} });
// Node 21+ má vlastný navigator len na čítanie – nahradíme ho
Object.defineProperty(global, 'navigator', { value: { userAgent: 'node', platform: '', maxTouchPoints: 0 }, writable: true, configurable: true });
global.location = { protocol: 'file:' };
// mikrofón a Web Audio: hlasitosť a podiel nízkych frekvencií nastavuje test
const mic = { amp: 0.001, low: false };
const tracksStopped = [];
navigator.mediaDevices = { getUserMedia: async () => ({ getTracks: () => [{ stop() { tracksStopped.push(1); } }] }) };
global.AudioContext = function () {
  this.sampleRate = 48000;
  this.resume = () => Promise.resolve();
  this.close = () => Promise.resolve();
  this.createMediaStreamSource = () => ({ connect() {} });
  this.state = 'running';
  this.destination = {};
  this.createGain = () => ({ gain: { value: 1 }, connect() {} });
  if (global.workletOn) { this.audioWorklet = { addModule: async () => {} }; }
  this.createAnalyser = () => ({ fftSize: 2048, frequencyBinCount: 1024, smoothingTimeConstant: 0,
    getFloatTimeDomainData(a) { a.fill(mic.amp); },
    getFloatFrequencyData(a) { a.fill(-120); a[mic.low ? 9 : 60] = -20; } });
};
global.window.AudioContext = global.AudioContext;
// skutočný Blob z Node
global.Audio = function (url) { this.url = url; this.play = () => Promise.resolve(); this.pause = () => {}; };
let idbBreak = 0;   // koľkokrát má transaction zlyhať (zavreté spojenie)
// IndexedDB a MediaRecorder: ukážky sa ukladajú do mapy, nahrávky si pamätajú dĺžku
const idbStore = new Map();
global.indexedDB = { open() {
  const r = {};
  const db = { transaction() {
    if (idbBreak > 0) { idbBreak--; const e = new Error('closing'); e.name = 'InvalidStateError'; throw e; }
    const t = {};
    const st = { put(v, k) { idbStore.set(k, v); return {}; }, delete(k) { idbStore.delete(k); return {}; }, clear() { idbStore.clear(); return {}; }, get(k) { return { result: idbStore.get(k) }; }, getAllKeys() { return { result: [...idbStore.keys()] }; } };
    t.objectStore = () => st;
    queueMicrotask(() => t.oncomplete && t.oncomplete());
    return t;
  } };
  queueMicrotask(() => { r.result = db; r.onsuccess(); });
  return r;
} };
const recorded = [];
let mediaRecorderOn = false;
const mrOpts = [];
function FakeMR(stream, o) { mrOpts.push(o); this.state = 'inactive'; this.mimeType = 'audio/webm'; }
FakeMR.isTypeSupported = m => m === 'audio/webm;codecs=opus';
FakeMR.prototype.start = function () { this.state = 'recording'; this.from = Date.now(); };
FakeMR.prototype.stop = function () {
  if (this.state === 'inactive') return;
  this.state = 'inactive'; recorded.push(Date.now() - this.from);
  this.ondataavailable && this.ondataavailable({ data: new Blob(['zvuk']) });
  this.onstop && this.onstop();
};
const sound = fs.readFileSync(path.join(__dirname, '..', 'sound.js'), 'utf8');
new Function(sound).call(global);
window.SleepSound = global.SleepSound;

store['sleepDetective.state.v1'] = JSON.stringify({ nights: [{ date: '2026-10-26' }] }); // staré demo
new Function(script)();

const view = () => els['#view'].innerHTML, sheet = () => els['#sheet'].innerHTML, modal = () => els['#modal'];
const data = () => JSON.parse(store['sleepDetective.data.v2'] || 'null');
function type(id, value) { const e = els['#' + id]; e.value = value; listeners.input({ target: e }); }
function click(ds) {
  const btn = { dataset: ds, id: '', setAttribute() {} };
  listeners.click({ target: { closest: () => btn } });
}
let ok = 0;
function t(name, fn) { try { fn(); ok++; console.log('✓', name); } catch (e) { console.error('✗', name, '\n ', e.message); process.exitCode = 1; } }

t('staré demo dáta sú zmazané a appka je prázdna', () => {
  assert.ok(!('sleepDetective.state.v1' in store));
  assert.ok(view().includes('Ako to funguje'));
  assert.ok(!view().includes('Posledná noc'));
  click({ tab: 'case' });
  assert.ok(view().includes('Zatiaľ málo stôp'));
  click({ tab: 'exp' });
  assert.ok(!view().includes('Uzavreté prípady'));
  assert.ok(view().includes('Vyber experiment'));
});

function evening(coffee) {
  hour = 21;
  click({ tab: 'log' }); click({ mode: 'evening' });
  if (coffee) click({ chip: 'coffee' });
  click({ act: 'saveEvening' });
}
function morning(lat) {
  hour = 8;
  click({ act: 'checkin' });
  [4, 7.5, lat, 0, 4].forEach(v => click({ ans: String(v) }));
  assert.ok(sheet().includes('stopa je v spise'), 'check-in sa nedokončil');
  click({ act: 'close' });
}

t('prvý check-in bez večerného záznamu sa pýta na včerajšok', () => {
  hour = 8;
  click({ act: 'checkin' });
  [3, 6.5, 22, 1, 3].forEach(v => click({ ans: String(v) }));
  assert.ok(sheet().includes('Čo platilo včera?'));
  click({ act: 'ciFactorsDone' });
  assert.ok(sheet().includes('stopa je v spise'));
  click({ act: 'close' });
  assert.strictEqual(data().nights.length, 1);
  assert.ok(data().evenings['2026-11-15']);
  click({ tab: 'today' });
  assert.ok(view().includes('Posledná noc'));
  assert.ok(view().includes('1 / 7'));
});

t('druhý check-in v ten istý deň nie je možný', () => {
  click({ act: 'checkin' });
  assert.ok(!sheet().includes('Otázka 1'));
});

t('po 10 nociach je káva hlavný podozrivý', () => {
  for (let d = 0; d < 10; d++) {
    offsetDays = d; evening(d % 2 === 0);
    offsetDays = d + 1; morning(d % 2 === 0 ? 45 : 10);
  }
  click({ tab: 'case' });
  const v = view();
  assert.ok(!v.includes('Zatiaľ málo stôp'), 'spis by mal byť odomknutý');
  const i = v.indexOf('Káva po 14:00');
  assert.ok(i > 0 && v.slice(i, i + 200).includes('Hlavný podozrivý'), 'káva nie je hlavný podozrivý');
  click({ tab: 'today' });
  assert.ok(view().includes('Zo spisu'));
});

t('experiment s kávou dá verdikt po 7 nociach', () => {
  click({ act: 'startExp', k: 'coffee' });
  assert.strictEqual(data().exp.k, 'coffee');
  assert.strictEqual(data().exp.length, 7);
  for (let d = 0; d < 7; d++) {
    evening(false);
    offsetDays++; morning(10);
  }
  assert.strictEqual(data().exp, null);
  assert.ok(data().verdicts.coffee && data().verdicts.coffee.confirmed, 'verdikt nie je potvrdený');
  click({ tab: 'exp' });
  assert.ok(view().includes('Uzavreté prípady') && view().includes('Vina potvrdená'));
});

t('nastavenia: vzhľad, oslovenie, dĺžka experimentu', () => {
  click({ act: 'settings' });
  assert.ok(sheet().includes('Vzhľad') && sheet().includes('Vymazať všetky dáta'));
  click({ themeSet: 'light' });
  assert.strictEqual(document.documentElement.attrs['data-theme'], 'light');
  click({ explen: '14' });
  listeners.input({ target: { id: 'set-name', value: '  Jana ' } });
  const s = JSON.parse(store['sleepDetective.settings.v1']);
  assert.strictEqual(s.theme, 'light'); assert.strictEqual(s.expLength, 14); assert.strictEqual(s.name, 'Jana');
  click({ act: 'close' });
  click({ tab: 'today' });
  assert.ok(view().includes(', Jana'));
});

t('reset: Zrušiť nič nezmaže, potvrdenie zmaže dáta a nechá nastavenia', () => {
  const before = data().nights.length;
  click({ act: 'settings' });
  click({ act: 'askReset' });
  assert.strictEqual(modal().hidden, false);
  assert.ok(modal().innerHTML.includes('Vymazať všetky dáta?') && modal().innerHTML.includes('nie je možné vrátiť'));
  click({ act: 'modalCancel' });
  assert.strictEqual(modal().hidden, true);
  assert.strictEqual(data().nights.length, before);
  click({ act: 'askReset' });
  click({ act: 'modalOk' });
  assert.ok(!('sleepDetective.data.v2' in store), 'dáta zostali v úložisku');
  assert.strictEqual(els['#sheet'].hidden, true);
  assert.ok(view().includes('Ako to funguje'));
  assert.strictEqual(JSON.parse(store['sleepDetective.settings.v1']).theme, 'light');
});

t('ukončenie experimentu vyžaduje potvrdenie', () => {
  click({ act: 'startExp', k: 'phone' });
  click({ act: 'cancelExp' });
  assert.ok(data().exp, 'experiment zmizol pred potvrdením');
  click({ act: 'modalOk' });
  assert.strictEqual(data().exp, null);
});

t('meno sa vypisuje bezpečne', () => {
  listeners.input({ target: { id: 'set-name', value: '<img src=x>' } });
  click({ tab: 'today' });
  assert.ok(!view().includes('<img') && view().includes('&lt;img'));
});

const flush = () => new Promise(r => setImmediate(r));
async function asyncTests() {
  async function at(name, fn) { try { await fn(); ok++; console.log('✓', name); } catch (e) { console.error('✗', name, e.message); process.exitCode = 1; } }
  // 100 ms časovač každé volanie, minútový (priebežné ukladanie) každých 600 volaní
  let ticks = 0;
  const tickAll = () => { ticks++; intervals.forEach(v => { if (v.ms === 100 || (v.ms === 60000 && ticks % 600 === 0)) v.fn(); }); };

  await at('nočný záznam: chrápanie sa rozpozná a súhrn sa uloží k rannému dátumu', async () => {
    fakeNow = new RealDate(2026, 11, 1, 23, 0, 0).getTime();   // 1. 12. 23:00
    click({ act: 'startNight' });
    // pred prvým nahrávaním upozornenie na ďalších ľudí v izbe; bez potvrdenia sa nenahráva
    assert.ok(modal().innerHTML.includes('súhlasom'), 'chýba upozornenie pred prvým nahrávaním');
    assert.strictEqual(els['#night'].hidden, true, 'nahrávanie začalo pred potvrdením');
    click({ act: 'modalOk' });
    await flush(); await flush();
    assert.strictEqual(els['#night'].hidden, false, 'nočná obrazovka sa neotvorila');
    assert.ok(els['#n-tip'].textContent.includes('zamknúť'), 'chýba upozornenie bez zámku obrazovky');
    // 20 min: 5 min ticho, 5 min chrápanie (1,2 s každé 4 s), 10 min ticho, jedno buchnutie
    for (let i = 0; i < 12000; i++) {
      fakeNow += 100;
      const sec = i / 10;
      const snoring = sec >= 300 && sec < 600 && (sec % 4) < 1.2;
      const slam = sec >= 900 && sec < 900.4;
      mic.amp = slam ? 0.2 : snoring ? 0.02 : 0.001;
      mic.low = snoring;
      tickAll();
    }
    click({ act: 'askStopNight' });
    assert.strictEqual(modal().hidden, false);
    click({ act: 'modalOk' });
    await flush(); await flush();
    const s = data().sounds['2026-12-02'];
    assert.ok(s, 'súhrn noci chýba pod dátumom rána');
    assert.ok(s.snoreMin >= 4 && s.snoreMin <= 6, 'chrápanie ' + s.snoreMin + ' min');
    assert.strictEqual(s.noise, 1);
    assert.strictEqual(s.partial, false);
    assert.ok(tracksStopped.length > 0, 'mikrofón sa nevypol');
    assert.strictEqual(els['#night'].hidden, true);
    assert.ok(sheet().includes('Zvuková stopa') && sheet().includes('chrápanie'));
    click({ act: 'close' });
  });

  await at('krátky záznam (pod minútu) sa neuloží', async () => {
    const before = Object.keys(data().sounds).length;
    click({ act: 'startNight' }); await flush(); await flush();
    for (let i = 0; i < 300; i++) { fakeNow += 100; tickAll(); }
    click({ act: 'askStopNight' }); click({ act: 'modalOk' }); await flush(); await flush();
    assert.strictEqual(Object.keys(data().sounds).length, before);
  });

  await at('ranný check-in ukáže zvuk noci a Záznam zoznam nocí', async () => {
    fakeNow = new RealDate(2026, 11, 2, 7, 30, 0).getTime();
    click({ act: 'checkin' });
    [4, 7.5, 10, 0, 4].forEach(v => click({ ans: String(v) }));
    if (sheet().includes('Čo platilo včera?')) click({ act: 'ciFactorsDone' });
    assert.ok(sheet().includes('Zvuk v noci'), 'check-in neukazuje zvuk');
    click({ act: 'close' });
    click({ tab: 'log' });
    assert.ok(view().includes('data-act="soundReport"'));
  });

  await at('vymazanie jednej noci vyžaduje potvrdenie', async () => {
    click({ act: 'soundReport', key: '2026-12-02' });
    click({ act: 'askDelSound', key: '2026-12-02' });
    assert.ok(data().sounds['2026-12-02'], 'zmazané pred potvrdením');
    click({ act: 'modalOk' });
    assert.ok(!data().sounds['2026-12-02']);
  });

  await at('reset počas nahrávania zastaví mikrofón a nič neuloží', async () => {
    tracksStopped.length = 0;
    click({ act: 'startNight' }); await flush(); await flush();
    for (let i = 0; i < 1000; i++) { fakeNow += 100; tickAll(); }
    click({ act: 'askReset' }); click({ act: 'modalOk' });
    assert.ok(tracksStopped.length > 0);
    assert.strictEqual(els['#night'].hidden, true);
    assert.strictEqual([...intervals.values()].filter(v => v.ms !== 10000).length, 0, 'zostali bežať časovače');
    assert.ok(!('sleepDetective.data.v2' in store));
  });

  await at('nastavenia citlivosti a ukážok', async () => {
    click({ act: 'settings' });
    assert.ok(sheet().includes('Nočný záznam zvuku'));
    assert.ok(sheet().includes('Ukážky chrápania') && sheet().includes('Ukážky hluku'));
    assert.ok(sheet().includes('id="set-clipn-snore"') && sheet().includes('inputmode="numeric"'));
    click({ sens: 'high' }); type('set-clipn-snore', '2'); type('set-clips-snore', '5'); type('set-clipn-noise', '0');
    // neplatné hodnoty sa neuložia a ukáže sa chyba
    type('set-clips-noise', 'abc');
    assert.strictEqual(els['#err-noise'].hidden, false); assert.ok(els['#err-noise'].textContent.includes('Dĺžka'));
    type('set-clipn-snore', '-1'); type('set-clipn-snore', '2.5'); type('set-clips-snore', '0');
    assert.strictEqual(els['#err-snore'].hidden, false);
    type('set-clipn-snore', ' 2 '); type('set-clips-snore', '5'); type('set-clips-noise', '10');
    assert.strictEqual(els['#err-snore'].hidden, true); assert.strictEqual(els['#err-noise'].hidden, true);
    const st = JSON.parse(store['sleepDetective.settings.v1']);
    assert.strictEqual(st.soundSensitivity, 'high');
    assert.deepStrictEqual([st.clipSnoreN, st.clipSnoreSec, st.clipNoiseN, st.clipNoiseSec], [2, 5, 0, 10]);
    click({ sens: 'medium' });
    click({ act: 'close' });
  });

  // 20 min: chrápanie od 5. do 10. minúty, buchnutie v 15. minúte
  async function clipNight(day) {
    fakeNow = new RealDate(2026, 11, day, 23, 0, 0).getTime();
    recorded.length = 0;
    click({ act: 'startNight' }); await flush(); await flush();
    for (let i = 0; i < 12000; i++) {
      fakeNow += 100;
      const sec = i / 10;
      const snoring = sec >= 300 && sec < 600 && (sec % 4) < 1.2;
      const slam = sec >= 900 && sec < 900.4;
      mic.amp = slam ? 0.2 : snoring ? 0.02 : 0.001; mic.low = snoring;
      tickAll();
      if (i % 50 === 0) await flush();
    }
    click({ act: 'askStopNight' }); click({ act: 'modalOk' });
    for (let i = 0; i < 5; i++) await flush();
    click({ act: 'close' });
    return data().sounds[Object.keys(data().sounds).sort().pop()];
  }

  await at('ukážky: len chrápanie, najviac 2 po 5 s', async () => {
    global.MediaRecorder = window.MediaRecorder = FakeMR;
    const s = await clipNight(5);
    assert.ok(recorded.length >= 2, 'nahrávok ' + recorded.length);
    assert.ok(recorded.every(ms => ms <= 5100), 'dĺžky ' + recorded.join(','));
    assert.strictEqual(s.clips.length, 2);
    assert.ok(s.clips.every(c => c.kind === 'snore'));
    assert.strictEqual(mrOpts[0].audioBitsPerSecond, 32000, 'predvolená kvalita 32 kbit/s');
    assert.deepStrictEqual([...idbStore.keys()].sort(), s.clips.map(c => c.id).sort());
  });

  await at('ukážka sa prehrá aj po zavretí spojenia s databázou', async () => {
    const key = Object.keys(data().sounds).sort().pop();
    const id = data().sounds[key].clips[0].id;
    assert.ok(!(idbStore.get(id) instanceof Blob) && idbStore.get(id).buf, 'ukážka nie je uložená ako ArrayBuffer');
    click({ act: 'soundReport', key }); await flush(); await flush();
    idbBreak = 1;
    const btn = { dataset: { act: 'playClip', id }, id: '', textContent: '▶', setAttribute() {} };
    listeners.click({ target: { closest: () => btn } });
    for (let i = 0; i < 5; i++) await flush();
    assert.strictEqual(btn.textContent, '■', 'neprehráva sa: ' + els['#toast'].textContent);
    listeners.click({ target: { closest: () => btn } });   // zastaví
    // chýbajúca ukážka hlási presnú príčinu
    idbStore.delete(id);
    listeners.click({ target: { closest: () => btn } });
    for (let i = 0; i < 5; i++) await flush();
    assert.strictEqual(els['#toast'].textContent, 'Ukážka v úložisku chýba.');
    click({ act: 'close' });
  });

  await at('ukážky: len hluk, 30 s', async () => {
    click({ act: 'settings' }); type('set-clipn-snore', '0'); type('set-clipn-noise', '4'); type('set-clips-noise', '30');
    assert.ok(sheet().includes('<option value="32" selected>'), 'v zozname nie je vybraná 32 kbit/s');
    click({ act: 'close' });
    listeners.input({ target: { id: 'set-kbps', value: '0' } });
    assert.strictEqual(JSON.parse(store['sleepDetective.settings.v1']).clipKbps, 0);
    mrOpts.length = 0;
    idbStore.clear();
    const s = await clipNight(8);
    assert.ok(!('audioBitsPerSecond' in mrOpts[0]), 'pri predvolenej kvalite sa nemá posielať bitrate');
    assert.strictEqual(s.clips.length, 1, 'ukážky ' + JSON.stringify(s.clips));
    assert.strictEqual(s.clips[0].kind, 'noise');
    assert.strictEqual(idbStore.size, 1);
    assert.ok(Math.max(...recorded) >= 29900 && Math.max(...recorded) <= 30100, 'dĺžky ' + recorded.join(','));
  });

  await at('zmena dát v druhej kópii appky sa načíta', async () => {
    click({ tab: 'today' });
    const d = data(); d.sounds = {}; d.nights = [];
    store['sleepDetective.data.v2'] = JSON.stringify(d);
    winListeners.storage({ key: 'sleepDetective.data.v2' });
    click({ act: 'settings' });
    assert.ok(sheet().includes('0 ranných záznamov') && sheet().includes('0 nocí so zvukom'), 'staré dáta zostali v pamäti');
    click({ act: 'close' });
    // druhá kópia všetko vymazala
    delete store['sleepDetective.data.v2'];
    winListeners.storage({ key: null });
    click({ act: 'settings' });
    assert.ok(sheet().includes('0 ranných záznamov'));
    click({ act: 'close' });
  });

  const check = (id, on) => listeners.change({ target: { id, checked: on } });

  await at('bez zaškrtnutia „Ukladať zvukové nahrávky“ sa nič nenahráva', async () => {
    click({ act: 'settings' });
    assert.ok(sheet().includes('id="set-audio" type="checkbox" checked'));
    check('set-audio', false);
    assert.ok(!sheet().includes('set-full') && !sheet().includes('set-clipn-snore'), 'pri vypnutom nahrávaní sa ukazujú ďalšie voľby');
    click({ act: 'close' });
    idbStore.clear();
    const s = await clipNight(10);
    assert.strictEqual(recorded.length, 0, 'nahrávalo sa: ' + recorded.length);
    assert.strictEqual(s.clips.length + s.segs.length, 0);
    assert.ok(s.snoreMin >= 4, 'chrápanie sa má stále rozpoznať');
    assert.strictEqual(idbStore.size, 0);
  });

  await at('„Nahrávať celú noc“ uloží časti po 10 minútach a dajú sa stiahnuť', async () => {
    click({ act: 'settings' });
    check('set-audio', true);
    assert.ok(sheet().includes('id="set-full" type="checkbox">'), 'celá noc má byť predvolene vypnutá');
    check('set-full', true);
    type('set-clipn-snore', '2'); type('set-clipn-noise', '2');
    click({ act: 'close' });
    const st = JSON.parse(store['sleepDetective.settings.v1']);
    assert.strictEqual(st.soundAudio, true); assert.strictEqual(st.soundFull, true);
    idbStore.clear();
    const s = await clipNight(12);   // 20 min
    assert.strictEqual(s.segs.length, 2, 'časti ' + JSON.stringify(s.segs));
    assert.ok(s.segs.every(g => idbStore.has(g.id)), 'časti chýbajú v úložisku');
    assert.ok(Math.abs(s.segs[0].end - s.segs[0].t - 600000) <= 200, 'prvá časť nemá 10 min');
    assert.ok(s.clips.length >= 1 && s.clips.every(c => idbStore.has(c.id)), 'ukážky popri celej noci chýbajú');
    const key = Object.keys(data().sounds).sort().pop();
    click({ act: 'soundReport', key });
    assert.ok(sheet().includes('Celá noc') && sheet().includes('data-act="dlFile"'));
    assert.ok(/23:0\d–23:1\d · <span class="t-lamp">chrápanie [45] min/.test(sheet()), 'chrápanie v prvej časti nie je označené');
    let downloaded = null;
    const origCreate = document.createElement;
    document.createElement = () => ({ click() { downloaded = this.download; }, remove() {} });
    const id = s.segs[0].id;
    listeners.click({ target: { closest: () => ({ dataset: { act: 'dlFile', id, name: 'sleep-detective-' + key + '-2300' }, id: '' }) } });
    for (let i = 0; i < 5; i++) await flush();
    document.createElement = origCreate;
    assert.strictEqual(downloaded, 'sleep-detective-' + key + '-2300.webm');
    // vymazanie noci zmaže aj časti
    click({ act: 'askDelSound', key }); click({ act: 'modalOk' });
    for (let i = 0; i < 5; i++) await flush();
    assert.strictEqual(idbStore.size, 0, 'po vymazaní noci zostali súbory: ' + [...idbStore.keys()]);
  });

  await at('uchovávanie nahrávok celej noci: 1–14 dní, staršie časti sa zmažú', async () => {
    const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    const daysAgo = n => { const d = new RealDate(Date.now()); d.setDate(d.getDate() - n); return iso(d); };
    click({ act: 'settings' });
    assert.ok(sheet().includes('id="set-keep"') && sheet().includes('value="14"'), 'chýba pole s predvolenými 14 dňami');
    els['#err-keep'] = Object.assign(el('err-keep'), { id: 'err-keep' });
    const keep = Object.assign(el('set-keep'), { id: 'set-keep', value: '' });
    const typeKeep = v => { keep.value = v; listeners.input({ target: keep }); };
    ['0', '15', 'abc', '2.5', ''].forEach(v => {
      typeKeep(v);
      assert.strictEqual(els['#err-keep'].hidden, false, 'hodnota ' + JSON.stringify(v) + ' prešla');
    });
    assert.strictEqual(JSON.parse(store['sleepDetective.settings.v1']).fullKeepDays, 14);
    typeKeep(' 3 ');
    assert.strictEqual(els['#err-keep'].hidden, true);
    assert.strictEqual(JSON.parse(store['sleepDetective.settings.v1']).fullKeepDays, 3);
    // noci staré 2 a 5 dní s časťami celej noci a ukážkami
    const d = data();
    const night = (k, n) => ({ start: 0, end: 1, snoreMin: 0, episodes: 0, noise: 0, loudest: null, gapMin: 0, timeline: [], rec: n,
      clips: [{ id: 'clip-' + n, t: n, kind: 'noise', peak: 20 }], segs: [{ id: 'full-' + n, t: n, end: n + 1 }] });
    d.sounds[daysAgo(2)] = night(daysAgo(2), 2); d.sounds[daysAgo(5)] = night(daysAgo(5), 5);
    ['clip-2', 'full-2', 'clip-5', 'full-5'].forEach(k => idbStore.set(k, { type: 'audio/webm', buf: new ArrayBuffer(1) }));
    store['sleepDetective.data.v2'] = JSON.stringify(d);
    winListeners.storage({ key: 'sleepDetective.data.v2' });
    click({ act: 'close' });   // zatvorenie nastavení uplatní nové uchovávanie
    for (let i = 0; i < 5; i++) await flush();
    assert.ok(!idbStore.has('full-5'), 'časť celej noci spred 5 dní nebola zmazaná');
    assert.ok(idbStore.has('full-2'), 'časť spred 2 dní sa nemala zmazať');
    assert.ok(idbStore.has('clip-5'), 'ukážka spred 5 dní sa nemala zmazať');
    assert.strictEqual(data().sounds[daysAgo(5)].segs.length, 0);
    assert.strictEqual(data().sounds[daysAgo(5)].clips.length, 1);
  });

  const runIv = ms => [...intervals.values()].filter(v => v.ms === ms).forEach(v => v.fn());
  const at2 = (d, h, m) => new RealDate(2026, 11, d, h, m, 0).getTime();
  const settle = async () => { for (let i = 0; i < 6; i++) await flush(); };

  await at('automatické spustenie: nastavenie času Od–Do s kontrolou', async () => {
    click({ act: 'settings' });
    assert.ok(!sheet().includes('set-auto-from'), 'polia času sa ukazujú aj pri vypnutej automatike');
    check('set-auto', true);
    assert.ok(sheet().includes('id="set-auto-from"') && sheet().includes('value="22:30"') && sheet().includes('value="07:00"'));
    for (const [f, t, msg] of [['25:00', '07:00', 'HH:MM'], ['abc', '07:00', 'HH:MM'], ['22:30', '7:60', 'HH:MM'], ['07:00', '07:00', 'rovnaký']]) {
      type('set-auto-from', f); type('set-auto-to', t);
      assert.strictEqual(els['#err-auto'].hidden, false, f + '–' + t + ' prešlo');
      assert.ok(els['#err-auto'].textContent.includes(msg), els['#err-auto'].textContent);
    }
    type('set-auto-from', '22.30'); type('set-auto-to', '6:45');
    assert.strictEqual(els['#err-auto'].hidden, true);
    let st = JSON.parse(store['sleepDetective.settings.v1']);
    assert.deepStrictEqual([st.autoOn, st.autoFrom, st.autoTo], [true, '22:30', '06:45']);
    type('set-auto-to', '07:00');
    click({ act: 'close' });
  });

  await at('automatické spustenie o 22:30 a ukončenie o 07:00', async () => {
    store['sleepDetective.auto.v1'] = '';
    fakeNow = at2(14, 22, 29); runIv(10000); await settle();
    assert.strictEqual(els['#night'].hidden, true, 'spustilo sa pred 22:30');
    fakeNow = at2(14, 22, 31); runIv(10000); await settle();
    assert.strictEqual(els['#night'].hidden, false, 'o 22:31 sa nespustilo');
    assert.ok(els['#night'].innerHTML.includes('Ukončiť záznam'));
    for (let i = 0; i < 700; i++) { fakeNow += 100; tickAll(); }
    assert.strictEqual(data().sounds['2026-12-15'].partial, true, 'priebežné ukladanie z tick nefunguje');
    fakeNow = at2(15, 7, 0); tickAll(); runIv(10000); await settle();
    assert.strictEqual(els['#night'].hidden, true, 'o 07:00 sa záznam neukončil');
    const s = data().sounds['2026-12-15'];
    assert.strictEqual(s.partial, false);
    assert.ok(sheet().includes('Zvuková stopa'), 'po ukončení sa neukázal súhrn');
    click({ act: 'close' });
    fakeNow = at2(15, 7, 5); runIv(10000); await settle();
    assert.strictEqual(els['#night'].hidden, true, 'po 07:00 sa znova spustilo');
  });

  await at('po ručnom ukončení sa v tú istú noc znova nespustí; v poslednej hodine nespúšťa', async () => {
    fakeNow = at2(16, 23, 0); runIv(10000); await settle();
    assert.strictEqual(els['#night'].hidden, false, 'o 23:00 sa nespustilo (appka otvorená neskôr)');
    for (let i = 0; i < 700; i++) { fakeNow += 100; tickAll(); }
    click({ act: 'askStopNight' }); click({ act: 'modalOk' }); await settle(); click({ act: 'close' });
    fakeNow = at2(16, 23, 30); runIv(10000); await settle();
    assert.strictEqual(els['#night'].hidden, true, 'po ručnom ukončení sa znova spustilo');
    fakeNow = at2(18, 6, 30); runIv(10000); await settle();
    assert.strictEqual(els['#night'].hidden, true, 'spustilo sa v poslednej hodine okna');
  });

  await at('pohotovosť: tmavá obrazovka do 22:30, potom sa spustí záznam', async () => {
    fakeNow = at2(19, 21, 0);
    click({ tab: 'today' });
    assert.ok(view().includes('data-act="standby"'), 'na Dnes chýba pohotovosť');
    click({ act: 'standby' });
    assert.strictEqual(els['#night'].hidden, false);
    assert.ok(els['#night'].innerHTML.includes('Pohotovosť') && els['#n-sub'].textContent.includes('22:30'));
    fakeNow = at2(19, 22, 30); runIv(10000); await settle();
    assert.ok(els['#night'].innerHTML.includes('Ukončiť záznam'), 'z pohotovosti sa záznam nespustil');
    for (let i = 0; i < 700; i++) { fakeNow += 100; tickAll(); }
    click({ act: 'askStopNight' }); click({ act: 'modalOk' }); await settle(); click({ act: 'close' });
    click({ act: 'settings' }); check('set-auto', false); click({ act: 'close' });
  });

  await at('so zvukovým vláknom (AudioWorklet) beží záznam bez časovača', async () => {
    global.workletOn = true;
    let node = null;
    global.AudioWorkletNode = window.AudioWorkletNode = function () { node = this; this.port = {}; this.connect = () => {}; this.disconnect = () => {}; };
    global.URL.createObjectURL = global.URL.createObjectURL || (() => 'blob:x');
    fakeNow = at2(20, 23, 0);
    click({ act: 'startNight' }); await settle();
    assert.ok(node && typeof node.port.onmessage === 'function', 'AudioWorklet sa nepoužil');
    assert.strictEqual([...intervals.values()].filter(v => v.ms === 100).length, 0, 'beží aj 100 ms časovač');
    for (let i = 0; i < 3000; i++) {
      fakeNow += 100;
      const sec = i / 10, snoring = sec >= 30 && sec < 270 && (sec % 4) < 1.2;
      mic.amp = snoring ? 0.02 : 0.001; mic.low = snoring;
      node.port.onmessage({ data: 0 });
    }
    click({ act: 'askStopNight' }); click({ act: 'modalOk' }); await settle();
    const s = data().sounds['2026-12-21'];
    assert.ok(s && s.snoreMin >= 3, 'chrápanie cez AudioWorklet ' + (s && s.snoreMin));
    assert.strictEqual(node.port.onmessage, null, 'po ukončení zostal AudioWorklet pripojený');
    click({ act: 'close' });
    global.workletOn = false; delete global.AudioWorkletNode; delete window.AudioWorkletNode;
  });

  await at('obnovenie zo zálohy: zlý súbor nič nezmení, dobrý nahradí dáta a nastavenia', async () => {
    let picked = 0;
    els['#import-file'] = Object.assign(el('import-file'), { id: 'import-file', value: 'x', click() { picked++; } });
    click({ act: 'settings' });
    assert.ok(sheet().includes('data-act="import"') && sheet().includes('id="import-file"'), 'chýba tlačidlo obnovenia');
    click({ act: 'import' });
    assert.strictEqual(picked, 1, 'neotvoril sa výber súboru');
    const before = store['sleepDetective.data.v2'];
    const pick = async txt => { listeners.change({ target: { id: 'import-file', files: [{ text: async () => txt }] } }); for (let i = 0; i < 6; i++) await flush(); };
    for (const bad of ['nie je json', JSON.stringify({ app: 'iná appka', data: { nights: [] } }), JSON.stringify({ app: 'sleep-detective', data: {} })]) {
      await pick(bad);
      assert.ok(modal().innerHTML.includes('nepodarilo načítať'), 'zlý súbor bez hlásenia: ' + bad);
      click({ act: 'modalOk' });
      assert.strictEqual(store['sleepDetective.data.v2'], before, 'zlý súbor zmenil dáta');
    }
    // v zariadení: nahrávka známa zo zálohy, osirelá stará a osirelá čerstvá
    const now = Date.now(), old = now - 3 * 3600000;
    const dd = new RealDate(now); dd.setDate(dd.getDate() - 1);
    const K = dd.getFullYear() + '-' + String(dd.getMonth() + 1).padStart(2, '0') + '-' + String(dd.getDate()).padStart(2, '0');
    idbStore.clear();
    ['clip-' + old, 'clip-' + (old + 1), 'clip-' + now].forEach(k => idbStore.set(k, { type: 'audio/webm', buf: new ArrayBuffer(1) }));
    const night = { start: old, end: old + 1, snoreMin: 5, episodes: 1, noise: 0, loudest: null, gapMin: 0, timeline: [], rec: old, partial: true,
      clips: [{ id: 'clip-' + old, t: old, kind: 'snore', peak: 20 }, { id: 'clip-999', t: 999, kind: 'noise', peak: 9 }], segs: [] };
    const backup = { app: 'sleep-detective', exported: '2026-12-01T08:00:00Z', data: { nights: [{ date: '2026-11-30', quality: 4 }], evenings: {}, exp: null, verdicts: {}, closed: [], sounds: { [K]: night } },
      settings: { theme: 'light', clipSnoreN: 2, soundClips: false, installDismissed: false } };
    await pick(JSON.stringify(backup));
    assert.ok(modal().innerHTML.includes('Obnoviť zo zálohy?') && modal().innerHTML.includes('1 ranných'), 'chýba potvrdenie');
    assert.strictEqual(store['sleepDetective.data.v2'], before, 'dáta sa zmenili pred potvrdením');
    click({ act: 'modalOk' });
    for (let i = 0; i < 8; i++) await flush();
    const d = data(), st = JSON.parse(store['sleepDetective.settings.v1']);
    assert.deepStrictEqual(d.nights.map(n => n.date), ['2026-11-30']);
    assert.deepStrictEqual(d.sounds[K].clips.map(c => c.id), ['clip-' + old], 'odkaz na chýbajúcu nahrávku ostal');
    assert.strictEqual(d.sounds[K].interrupted, true, 'rozpracovaná noc nie je označená ako prerušená');
    assert.strictEqual(st.theme, 'light'); assert.strictEqual(st.clipSnoreN, 2); assert.ok(!('soundClips' in st));
    assert.ok(idbStore.has('clip-' + old), 'zmazala sa nahrávka, ktorú záloha pozná');
    assert.ok(!idbStore.has('clip-' + (old + 1)), 'osirelá nahrávka ostala v zariadení');
    assert.ok(idbStore.has('clip-' + now), 'čerstvá nahrávka (iná karta) sa nemala zmazať');
  });

  await at('vymazať všetky dáta zmaže aj všetky nahrávky', async () => {
    idbStore.set('full-1', { type: 'audio/webm', buf: new ArrayBuffer(1) });
    click({ act: 'settings' }); click({ act: 'askReset' });
    assert.ok(modal().innerHTML.includes('celé noci'));
    click({ act: 'modalOk' });
    for (let i = 0; i < 6; i++) await flush();
    assert.strictEqual(idbStore.size, 0, 'zostali nahrávky: ' + [...idbStore.keys()]);
    assert.deepStrictEqual(data() ? data().nights : [], []);
  });

  await at('staré nastavenie „ukážky: nie“ znamená žiadne ukážky', async () => {
    store['sleepDetective.settings.v1'] = JSON.stringify({ soundClips: false });
    new Function(script)();
    click({ act: 'settings' });
    assert.ok(/id="set-clipn-snore"[^>]*value="0"/.test(sheet()), 'chrápanie nie je na 0');
    assert.ok(/id="set-clipn-noise"[^>]*value="0"/.test(sheet()), 'hluk nie je na 0');
  });

  // ---------- Doplnenie, vlastné faktory, záloha, analýza, výstupy ----------
  const day = (d, h, m) => new RealDate(2027, 0, d, h, m || 0, 0).getTime();   // január 2027
  const setData = d => { store['sleepDetective.data.v2'] = JSON.stringify(Object.assign({ nights: [], evenings: {}, exp: null, verdicts: {}, closed: [], sounds: {}, custom: [] }, d)); winListeners.storage({ key: 'sleepDetective.data.v2' }); };
  const iso2 = d => '2027-01-' + String(d).padStart(2, '0');
  let blobs = [];
  const realCreate = URL.createObjectURL;
  URL.createObjectURL = b => { blobs.push(b); return 'blob:x'; };

  await at('doplnenie včerajšieho rána a oprava dnešného', async () => {
    setData({});
    fakeNow = day(10, 8);
    click({ act: 'checkin' }); [4, 7.5, 10, 0, 4].forEach(v => click({ ans: String(v) })); click({ act: 'ciFactorsDone' }); click({ act: 'close' });
    click({ tab: 'log' }); click({ mode: 'morning' });
    assert.ok(view().includes('Doplniť včerajšie ráno'), 'chýba doplnenie včerajška');
    assert.ok(view().includes('Opraviť dnešný záznam'));
    click({ act: 'checkinFor', date: iso2(9) });
    assert.ok(sheet().includes('ráno 9. 1.'), 'otázka neukazuje dátum doplňovaného rána');
    [2, 5.5, 45, 2, 2].forEach(v => click({ ans: String(v) })); click({ act: 'ciFactorsDone' });
    assert.ok(sheet().includes('Zapísané · 9. 1.'));
    click({ act: 'close' });
    assert.deepStrictEqual(data().nights.map(n => n.date), [iso2(9), iso2(10)], 'noci nie sú zoradené');
    click({ act: 'checkinFor', date: iso2(10) });
    [5, 8.5, 10, 0, 5].forEach(v => click({ ans: String(v) }));
    assert.ok(sheet().includes('Opravené'));
    click({ act: 'close' });
    assert.strictEqual(data().nights.length, 2);
    assert.strictEqual(data().nights[1].quality, 5, 'oprava neprepísala záznam');
    click({ act: 'checkinFor', date: iso2(1) });
    assert.ok(!sheet().includes('Otázka'), 'staršie dni sa nemajú dať doplniť');
  });

  await at('doplnenie včerajšieho večera', async () => {
    setData({});
    fakeNow = day(10, 20);
    click({ tab: 'log' }); click({ mode: 'evening' });
    click({ act: 'evDay', date: iso2(9) });
    assert.ok(view().includes('Čo sa dialo včera (9. 1.)'));
    click({ chip: 'alcohol' }); click({ act: 'saveEvening' });
    assert.ok(data().evenings[iso2(9)].f.alcohol, 'včerajší večer sa neuložil');
    assert.ok(!data().evenings[iso2(10)], 'uložil sa dnešný večer namiesto včerajška');
    assert.ok(view().includes('Čo sa dnes dialo?'), 'po uložení sa nevrátil dnešný večer');
  });

  await at('dĺžka spánku sa navrhne z nočného záznamu', async () => {
    setData({ sounds: { [iso2(10)]: { rec: day(9, 23), start: day(9, 23), end: day(10, 6, 45), snoreMin: 0, noise: 2, partial: false, clips: [], segs: [], timeline: [] } } });
    fakeNow = day(10, 8);
    click({ act: 'checkin' }); click({ ans: '4' });
    assert.ok(sheet().includes('Nočný záznam bežal 7:45 h'), 'chýba info o dĺžke záznamu');
    assert.ok(/opt sug" type="button" data-ans="7.5"/.test(sheet()), 'navrhnutá nie je možnosť 7 až 8 h');
    click({ act: 'close' });
  });

  await at('vlastný faktor: pridanie, bezpečný názov, večer a odstránenie', async () => {
    setData({});
    fakeNow = day(10, 20);
    click({ act: 'settings' });
    click({ act: 'addFactor' });
    assert.ok(els['#toast'].textContent.includes('Napíš názov'));
    listeners.input({ target: { id: 'cf-name', value: 'Obrazovka <img src=x onerror=alert(1)>' } });
    click({ cficon: '🖥️' });
    click({ act: 'addFactor' });
    const c = data().custom[0];
    assert.ok(c && c.icon === '🖥️', 'faktor sa nepridal');
    assert.ok(!/[<>"']/.test(c.name), 'názov nie je očistený: ' + c.name);
    assert.ok(sheet().includes('Odstrániť'));
    listeners.input({ target: { id: 'cf-name', value: 'obrazovka img src=x onerror=alert(1)' } });
    click({ act: 'addFactor' });
    assert.strictEqual(data().custom.length, 1, 'duplicitný faktor sa pridal');
    click({ act: 'close' });
    click({ tab: 'log' }); click({ mode: 'evening' });
    assert.ok(view().includes('data-chip="' + c.k + '"'), 'vlastný faktor chýba vo večernom zázname');
    click({ chip: c.k }); click({ act: 'saveEvening' });
    assert.ok(data().evenings[iso2(10)].f[c.k]);
    click({ tab: 'exp' });
    assert.ok(view().includes('Bez: ' + c.name), 'vlastný faktor chýba v experimentoch');
    click({ act: 'settings' }); click({ act: 'askDelFactor', k: c.k });
    assert.strictEqual(modal().hidden, false, 'odstránenie bez potvrdenia');
    click({ act: 'modalOk' });
    assert.strictEqual(data().custom.length, 0);
    assert.ok(!(c.k in data().evenings[iso2(10)].f), 'faktor zostal vo večernom zázname');
    click({ act: 'close' });
  });

  await at('pripomienka zálohy, dátum poslednej zálohy a CSV', async () => {
    const nights = [5, 6, 7].map(d => ({ date: iso2(d), quality: 3, duration: 6.5, latency: 22, wakes: 1, energy: 3 }));
    setData({ nights, evenings: { [iso2(5)]: { f: { coffee: true }, temp: 21, saved: true } }, sounds: { [iso2(7)]: { rec: day(6, 23), end: day(7, 6), snoreMin: 12, noise: 3, partial: false } } });
    fakeNow = day(10, 9);
    click({ tab: 'today' });
    assert.ok(view().includes('Stiahni si zálohu'), 'chýba pripomienka zálohy');
    click({ act: 'backupLater' });
    assert.ok(!view().includes('Stiahni si zálohu'), 'Neskôr pripomienku neodložilo');
    fakeNow = day(18, 9); click({ tab: 'today' });
    assert.ok(view().includes('Stiahni si zálohu'), 'po 7 dňoch sa pripomienka nevrátila');
    blobs = [];
    click({ act: 'export' });
    assert.ok(!view().includes('Stiahni si zálohu'), 'po stiahnutí zálohy pripomienka zostala');
    click({ act: 'settings' });
    assert.ok(sheet().includes('Posledná záloha: 18. 1. 2027'), 'nastavenia neukazujú poslednú zálohu');
    click({ act: 'askReset' });
    assert.ok(modal().innerHTML.includes('Posledná záloha: 18. 1. 2027'), 'potvrdenie mazania neukazuje zálohu');
    click({ act: 'modalCancel' });
    blobs = [];
    click({ act: 'exportCsv' });
    const bytes = new Uint8Array(await blobs[0].arrayBuffer());
    assert.deepStrictEqual([...bytes.slice(0, 3)], [0xef, 0xbb, 0xbf], 'CSV bez BOM (Excel zle zobrazí diakritiku)');
    const lines = (await blobs[0].text()).trim().split(/\r\n/);
    assert.ok(lines[0].startsWith('Ráno;Kvalita'));
    assert.ok(lines.includes('2027-01-06;3;6,5;22;1;3;Káva po 14:00;21;;;'), 'riadok s faktorom: ' + lines.join(' | '));
    assert.ok(lines.includes('2027-01-07;3;6,5;22;1;3;;;12;3;'), 'riadok so zvukom');
    click({ act: 'close' });
  });

  await at('prehľad pre lekára a tlač', async () => {
    els['#print'] = el('print');
    let printed = 0;
    window.print = () => { printed++; };
    click({ tab: 'case' });
    click({ act: 'report' });
    assert.ok(sheet().includes('Prehľad pre lekára') && sheet().includes('Noc po noci'));
    assert.ok(sheet().includes('Nocí so záznamom zvuku'), 'chýba chrápanie');
    click({ repdays: '14' });
    assert.ok(sheet().includes('(14 dní)'));
    click({ act: 'printReport' });
    assert.strictEqual(printed, 1, 'tlač sa nespustila');
    assert.ok(els['#print'].innerHTML.includes('nie je zdravotnícka pomôcka'));
    click({ act: 'close' });
  });

  await at('ochrana súkromia', async () => {
    click({ act: 'settings' }); click({ act: 'privacy' });
    assert.ok(sheet().includes('Ochrana súkromia') && sheet().includes('MIT') && sheet().includes('súhlasom'));
    click({ act: 'settings' });
    assert.ok(sheet().includes('Vlastné faktory'), 'Späť nevedie do nastavení');
    click({ act: 'close' });
  });

  await at('spis: neistota, spolupáchatelia, trend a pravidelnosť', async () => {
    const nights = [], evenings = {}, sounds = {};
    for (let d = 1; d <= 16; d++) {
      const both = d % 2 === 0;                     // káva a alkohol vždy spolu
      const lat = both ? (d % 4 === 0 ? 75 : 10) : (d % 3 === 0 ? 45 : 10);   // veľký rozptyl
      nights.push({ date: iso2(d + 1), quality: 3, duration: 7.5, latency: lat, wakes: 1, energy: 3 });
      evenings[iso2(d)] = { f: both ? { coffee: true, alcohol: true } : {}, temp: 20, saved: true };
      const wk = [0, 6].includes(new RealDate(2027, 0, d + 1).getDay());
      sounds[iso2(d + 1)] = { rec: day(d, wk ? 23 : 22, 30) + (wk ? 3600000 : 0), end: day(d + 1, wk ? 9 : 6, 30), snoreMin: 0, noise: 1, partial: false };
    }
    setData({ nights, evenings, sounds });
    fakeNow = day(17, 21);
    click({ tab: 'case' });
    assert.ok(view().includes('Možno náhoda'), 'veľký rozptyl nedal stav Možno náhoda');
    assert.ok(view().includes('Často spolu s'), 'chýba upozornenie na faktory, ktoré prišli spolu');
    assert.ok(view().includes('Trend'), 'chýba trend');
    assert.ok(view().includes('Pravidelnosť'), 'chýba pravidelnosť');
    assert.ok(view().includes('neskôr'), 'chýba posun cez víkend');
    click({ act: 'detail', k: 'coffee' });
    assert.ok(sheet().includes('Spolupáchatelia?') && sheet().includes('Alkohol'));
    assert.ok(sheet().includes('približný 95 % interval'));
    click({ act: 'close' });
  });

  await at('výška a hmotnosť: optimálna hmotnosť, hodnotenie a odporúčania', async () => {
    const field = (id, value) => listeners.change({ target: { id, value, setAttribute() {} } });
    const sounds = {};
    [5, 6, 7, 8].forEach(d => { sounds[iso2(d)] = { rec: day(d - 1, 23), end: day(d, 7), snoreMin: 45, noise: 2, partial: false }; });
    setData({ sounds, nights: [5, 6, 7, 8].map(d => ({ date: iso2(d), quality: 3, duration: 7.5, latency: 22, wakes: 1, energy: 3 })) });
    fakeNow = day(10, 9);
    click({ tab: 'case' });
    assert.ok(view().includes('Zadať výšku a hmotnosť'), 'bez údajov chýba výzva na zadanie');
    click({ act: 'settings' });
    assert.ok(sheet().includes('Výška a hmotnosť'));
    field('set-height', '180');
    field('set-weight', '20');
    assert.strictEqual(data().body.weights.length, 0, 'neplatná hmotnosť sa uložila');
    field('set-weight', '95,5');
    assert.deepStrictEqual(data().body, { height: 180, weights: [{ date: iso2(10), kg: 95.5 }] });
    click({ act: 'settings' });
    assert.ok(sheet().includes('BMI 29,5 – nadváha. Optimálna hmotnosť pre výšku 180 cm je 60–81 kg, teraz máš o 14,8 kg viac.'), 'zlý výpočet: ' + sheet().match(/BMI[^<]*/));
    click({ act: 'close' });
    click({ tab: 'case' });
    assert.ok(view().includes('Hmotnosť a spánok') && view().includes('Chrápeš pravidelne (4 noci'), 'chýba hodnotenie chrápania pri nadváhe');
    assert.ok(view().includes('(5–10 kg)'), 'chýba odporúčaný úbytok');
    assert.ok(view().includes('môže pomôcť aj jej zníženie'), 'karta chrápania nespomína hmotnosť');
    assert.ok(!view().includes('spánkové apnoe. Ukáž'), 'pri BMI pod 30 netreba posielať k lekárovi');
    // ďalší deň vyššia hmotnosť: obezita + chrápanie = odporúčanie lekára, história hmotnosti
    fakeNow = day(11, 9);
    click({ act: 'settings' }); field('set-weight', '100'); click({ act: 'close' });
    assert.strictEqual(data().body.weights.length, 2);
    click({ tab: 'case' });
    assert.ok(view().includes('obezita') && view().includes('spánkové apnoe'), 'chýba odporúčanie lekára pri obezite');
    click({ act: 'report' });
    assert.ok(sheet().includes('Optimálna hmotnosť (BMI 18,5–24,9)') && sheet().includes('+4,5 kg'), 'prehľad pre lekára bez hmotnosti');
    click({ act: 'close' });
    blobs = [];
    click({ act: 'exportCsv' });
    assert.ok((await blobs[0].text()).includes('2027-01-11;;;;;;;;;;100'), 'CSV bez hmotnosti');
    click({ act: 'settings' }); click({ act: 'privacy' });
    assert.ok(sheet().includes('výška a vývoj hmotnosti'));
    click({ act: 'settings' }); click({ act: 'askDelBody' }); click({ act: 'modalOk' });
    assert.deepStrictEqual(data().body, { height: null, weights: [] });
    click({ act: 'close' });
  });

  await at('vývoj hmotnosti a chrápania; optimálna hmotnosť', async () => {
    const sounds = {};
    [2, 3, 4].forEach(d => { sounds[iso2(d)] = { rec: day(d - 1, 23), end: day(d, 7), snoreMin: 50, noise: 1, partial: false }; });
    [11, 12, 13].forEach(d => { sounds[iso2(d)] = { rec: day(d - 1, 23), end: day(d, 7), snoreMin: 10, noise: 1, partial: false }; });
    setData({ sounds, body: { height: 175, weights: [{ date: iso2(1), kg: 80 }, { date: iso2(10), kg: 75 }, { date: 'zlý', kg: 5 }] } });
    fakeNow = day(14, 9);
    click({ tab: 'case' });
    assert.ok(view().includes('Od 1. 1. máš o 5 kg menej. Chrápanie predtým 50 min za noc, odvtedy 10 min.'), 'chýba vývoj: ' + (view().match(/Od 1\. 1\.[^<]*/) || [''])[0]);
    assert.ok(view().includes('v optimálnom rozmedzí'), '75 kg pri 175 cm je optimálna hmotnosť');
  });
  URL.createObjectURL = realCreate;
  console.log(ok + ' testov prešlo');
}
asyncTests();
