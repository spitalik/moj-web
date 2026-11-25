/* Scenárový test appky Universal Tuner (index.html) s minimálnou náhradou DOM, času, mikrofónu a reproduktora.
   Spustenie (z priečinka universal-tuner):  node tools/test-app.js   (spúšťa ho aj node tools/test.js) */
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

// ---- falošný čas a časovače (spúšťame ich ručne) ----
const RealDate = Date;
let fakeNow = new RealDate(2026, 10, 19, 18, 0, 0).getTime();
class FakeDate extends RealDate {
  constructor(...a) { if (a.length) super(...a); else super(fakeNow); }
  static now() { return fakeNow; }
}
global.Date = FakeDate;
const intervals = new Map(); let iid = 0;
global.setInterval = (fn, ms) => { intervals.set(++iid, { fn, ms }); return iid; };
global.clearInterval = id => intervals.delete(id);
const timeouts = new Map(); let tid = 0;
global.setTimeout = (fn, ms) => { timeouts.set(++tid, { fn, at: fakeNow + ms }); return tid; };
global.clearTimeout = id => timeouts.delete(id);
function advance(ms) {
  const end = fakeNow + ms;
  while (fakeNow < end) {
    fakeNow = Math.min(end, fakeNow + 70);
    [...intervals.values()].forEach(i => i.fn());
    [...timeouts.entries()].forEach(([id, t]) => { if (t.at <= fakeNow) { timeouts.delete(id); t.fn(); } });
  }
}

// ---- falošný DOM ----
function el(name) {
  return { name, innerHTML: '', hidden: true, textContent: '', scrollTop: 0, attrs: {}, style: {}, dataset: {},
    setAttribute(k, v) { this.attrs[k] = String(v); }, getAttribute(k) { return this.attrs[k]; },
    addEventListener(t, f) { this['on' + t] = f; },
    querySelector(q) { return /button|data-act/.test(q) ? { focus() {} } : null; } };
}
const els = {};
['#view', '#sheet', '#modal', '#toast', '#theme-color', '#t-gauge', '#t-level', '#t-needle', '#t-note', '#t-cents', '#t-hz',
  '#t-status', '#t-heard', '#t-strings'].forEach(s => { els[s] = el(s); });
let importClicked = 0;
els['#import-file'] = Object.assign(el('import'), { value: '', click() { importClicked++; } });
const listeners = {};
const store = {};
// Scenáre kontrolujú slovenské texty: bez zvoleného jazyka appka dostane slovenčinu.
// Test predvoleného jazyka (angličtina po inštalácii) to vypne cez forceSk = false.
let forceSk = true;
global.localStorage = {
  getItem: k => {
    if (k === 'universalTuner.settings.v1' && forceSk) { const v = JSON.parse(store[k] || '{}') || {}; if (!v.lang) return JSON.stringify(Object.assign(v, { lang: 'sk' })); }
    return k in store ? store[k] : null;
  }, setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; }
};
const downloads = [];
global.document = {
  documentElement: el('html'), visibilityState: 'visible',
  querySelector: s => els[s] || null, querySelectorAll: () => [],
  addEventListener: (t, f) => { listeners[t] = f; },
  createElement: () => { const a = { click() { downloads.push({ name: a.download, blob: blobs[a.href] }); }, remove() {} }; return a; },
  body: { appendChild() {} }
};
const blobs = {}; let bid = 0;
global.URL.createObjectURL = b => { const u = 'blob:' + (++bid); blobs[u] = b; return u; };
global.URL.revokeObjectURL = () => {};
const winListeners = {};
global.window = { addEventListener(t, f) { winListeners[t] = f; } };
global.matchMedia = () => ({ matches: false, addEventListener() {} });
Object.defineProperty(global, 'navigator', { value: { userAgent: 'node', platform: '', maxTouchPoints: 0 }, writable: true, configurable: true });
global.location = { protocol: 'file:' };

// ---- mikrofón: tón s harmonickými, frekvenciu a hlasitosť nastavuje test ----
const mic = { hz: 0, amp: 0.2, deny: false };
let tracksStopped = 0, micOpened = 0;
navigator.mediaDevices = { getUserMedia: async () => {
  if (mic.deny) throw new Error('NotAllowedError');
  micOpened++;
  return { getTracks: () => [{ stop() { tracksStopped++; } }] };
} };
let phase = 0;
const oscillators = [];
global.AudioContext = function () {
  this.sampleRate = 48000; this.state = 'running'; this.currentTime = 0; this.destination = {};
  this.resume = () => Promise.resolve();
  this.close = () => Promise.resolve();
  this.createMediaStreamSource = () => ({ connect() {}, disconnect() {} });
  this.createAnalyser = () => ({ fftSize: 2048, smoothingTimeConstant: 0,
    getFloatTimeDomainData(a) {
      for (let i = 0; i < a.length; i++) {
        let v = 0;
        if (mic.hz) [1, 0.6, 0.4, 0.25, 0.15].forEach((h, k) => { v += h * Math.sin(2 * Math.PI * mic.hz * (k + 1) * (phase + i) / 48000 + k); });
        a[i] = mic.amp * v / 2.4 + 0.0005 * Math.sin(i * 1.3);
      }
      phase += a.length;
    } });
  const param = () => ({ value: 0, setValueAtTime(v) { this.value = v; }, linearRampToValueAtTime(v) { this.value = v; }, cancelScheduledValues() {} });
  this.createGain = () => ({ gain: param(), connect() {} });
  this.createPeriodicWave = () => ({});
  this.createOscillator = () => {
    const o = { frequency: { value: 0 }, started: false, stopped: false, setPeriodicWave() {}, connect() {}, start() { o.started = true; }, stop() { o.stopped = true; } };
    oscillators.push(o); return o;
  };
};
global.window.AudioContext = global.AudioContext;

const pitch = fs.readFileSync(path.join(__dirname, '..', 'pitch.js'), 'utf8');
new Function(pitch).call(global);
window.TunerPitch = global.TunerPitch;
const P = global.TunerPitch;
// preklady: jadro a všetky slovníky (v prehliadači ich načítajú <script src="i18n/…">)
global.self = global;
['core'].concat(LANGS).forEach(f => new Function(fs.readFileSync(path.join(__dirname, '..', 'i18n', f + '.js'), 'utf8')).call(global));
window.UTI18N = global.UTI18N;
new Function(script)();

// ---- pomocníci ----
const view = () => els['#view'].innerHTML, sheet = () => els['#sheet'].innerHTML, modal = () => els['#modal'];
const settings = () => JSON.parse(store['universalTuner.settings.v1'] || 'null');
const flush = () => new Promise(r => setImmediate(r));
function click(ds) {
  const btn = { dataset: ds };
  listeners.click({ target: { closest: () => btn } });
}
const live = () => ({ note: els['#t-note'].innerHTML, status: els['#t-status'].textContent, cents: els['#t-cents'].textContent,
  hz: els['#t-hz'].textContent, heard: els['#t-heard'].textContent, state: els['#t-gauge'].attrs['data-state'], strings: els['#t-strings'].innerHTML });
const play = (midi, centsOff, ms) => { mic.hz = P.midiToHz(midi, settings() ? settings().a4 : 440) * Math.pow(2, (centsOff || 0) / 1200); advance(ms || 700); };

let ok = 0;
const tests = [];
function t(name, fn) { tests.push([name, fn]); }

t('úvodná obrazovka: gitara v štandardnom ladení so slovenskými názvami', () => {
  assert.ok(view().includes('Gitara'));
  assert.ok(view().includes('Štandardné'));
  assert.ok(view().includes('E2 A2 D3 G3 H3 E4'), 'slovenské H');
  assert.ok(view().includes('Spustiť ladenie'));
  assert.ok(view().includes('data-str="5"'));
});

t('zamietnutý mikrofón ukáže vysvetlenie', async () => {
  mic.deny = true;
  click({ act: 'listen' }); await flush();
  assert.ok(!modal().hidden && modal().innerHTML.includes('Mikrofón nie je povolený'));
  click({ act: 'modalCancel' });
  mic.deny = false;
});

t('spustenie ladenia, ticho = „Zahraj strunu“', async () => {
  click({ act: 'listen' }); await flush();
  assert.strictEqual(micOpened, 1);
  assert.ok(view().includes('Zastaviť'));
  mic.hz = 0; advance(500);
  assert.strictEqual(live().status, 'Zahraj strunu');
  assert.strictEqual(live().state, 'listen');
});

t('naladená struna A2 sa označí ✓', () => {
  play(45, 1, 1500);
  const l = live();
  assert.strictEqual(l.status, 'Naladené');
  assert.strictEqual(l.state, 'ok');
  assert.ok(l.note.startsWith('A<sub>2'), l.note);
  assert.ok(/110,\d Hz/.test(l.hz), l.hz);
  assert.ok(/class="str on ok" data-str="1"/.test(l.strings), 'A struna označená');
  assert.ok(!/data-str="0"[^>]*naladená/.test(l.strings));
});

t('nízka struna D3 (−20 ¢): pritiahni', () => {
  play(50, -20);
  const l = live();
  assert.strictEqual(l.state, 'low');
  assert.strictEqual(l.status, 'Nízko – pritiahni strunu');
  assert.ok(/^−(19|20|21) ¢$/.test(l.cents), l.cents);
  assert.ok(l.note.startsWith('D<sub>3'));
  assert.ok(els['#t-needle'].style.transform.startsWith('rotate(-2'), els['#t-needle'].style.transform);
});

t('vysoká struna H3 (+15 ¢): povoľ', () => {
  play(59, 15);
  assert.strictEqual(live().status, 'Vysoko – povoľ strunu');
  assert.ok(live().note.startsWith('H<sub>3'));
});

t('po stíchnutí tón chvíľu dozneje a potom zmizne', () => {
  mic.hz = 0; advance(300);
  assert.ok(live().heard.includes('oznelo'), live().heard);
  advance(P.HOLD_MS + 200);
  assert.strictEqual(live().status, 'Zahraj strunu');
  assert.strictEqual(live().note, '–');
});

t('tichý zvuk pod citlivosťou mikrofónu sa ignoruje', () => {
  mic.amp = 0.0008; play(45, 0);
  assert.strictEqual(live().status, 'Zahraj strunu');
  mic.amp = 0.2;
});

t('ručný výber struny: A2 hrané na 6. strune (E2) je o 5 poltónov vysoko', () => {
  click({ str: '0' });
  assert.ok(view().includes('Ladíš ručne 6. strunu'));
  play(45, 0);
  const l = live();
  assert.ok(l.note.startsWith('E<sub>2'), l.note);
  assert.strictEqual(l.cents, '+5,0 poltóna');
  assert.strictEqual(l.status, 'Vysoko – povoľ strunu');
  assert.ok(els['#t-needle'].style.transform === 'rotate(60.0deg)');
  click({ str: '0' });
  assert.ok(view().includes('rozpozná strunu sama'));
});

t('všetky struny naladené = oznámenie', () => {
  [40, 45, 50, 55, 59, 64].forEach(m => play(m, 0, 1200));
  assert.ok(els['#toast'].textContent.includes('Všetky struny sú naladené'), els['#toast'].textContent);
});

t('výber huslí zmení struny, zruší ✓ a zapamätá sa', () => {
  click({ tab: 'inst' });
  assert.ok(view().includes('Čo ladíš?'));
  click({ open: 'violin' });
  assert.ok(view().includes('data-inst="violin"'));
  click({ inst: 'violin', tuning: 'std' });
  assert.strictEqual(settings().inst, 'violin');
  assert.ok(view().includes('G3 D4 A4 E5'));
  assert.ok(!view().includes('naladená'));
  play(76, 0, 1200);                                 // E5
  assert.strictEqual(live().status, 'Naladené');
  assert.ok(live().note.startsWith('E<sub>5'));
});

t('cimbal: 51 tónov D2–E6 v mriežke, ladenie tón po tóne', () => {
  click({ tab: 'inst' }); click({ open: 'cimbal' });
  assert.ok(view().includes('Koncertný') && view().includes('D2 – E6 · 51 tónov'));
  click({ inst: 'cimbal', tuning: 'concert' });
  assert.ok(view().includes('class="strings grid"'));
  assert.ok(!view().includes('class="num"'), 'bez čísel strún');
  assert.ok(view().includes('naladených je 0 z 51'));
  play(66, 2, 1500);                                 // F#4
  assert.ok(live().note.startsWith('F♯<sub>4'), live().note);
  assert.strictEqual(live().status, 'Naladené');
  assert.ok(/aria-label="Tón F♯4, naladený"/.test(live().strings));
  play(38, -30, 1500);                               // D2 nízko
  assert.ok(live().note.startsWith('D<sub>2') && live().state === 'low', live().note);
});

t('basgitara 5 strún: najnižšia struna H0 (30,9 Hz)', () => {
  click({ tab: 'inst' }); click({ open: 'bass' }); click({ inst: 'bass', tuning: 'std5' });
  play(23, -10, 1500);
  assert.ok(live().note.startsWith('H<sub>0'), live().note);
  assert.strictEqual(live().state, 'low');
});

t('chromatická ladička s transpozíciou B♭: koncertné A4 je zapísané H4', () => {
  click({ tab: 'inst' }); click({ open: 'chromatic' }); click({ chroma: 'bb' });
  assert.strictEqual(settings().inst, 'chromatic');
  assert.strictEqual(settings().transpose, 'bb');
  assert.ok(!view().includes('data-str='), 'bez strún');
  play(69, 0);
  assert.ok(live().note.startsWith('H<sub>4'), live().note);
  assert.ok(live().heard.includes('Znie A4'));
  assert.strictEqual(live().status, 'Naladené');
  click({ tab: 'inst' }); click({ open: 'chromatic' }); click({ chroma: 'c' });
  play(69, 0);
  assert.ok(live().note.startsWith('A<sub>4'));
});

t('ladenie A4 = 442 Hz', () => {
  click({ act: 'settings' });
  click({ act: 'a4', d: '1' }); click({ act: 'a4', d: '1' });
  assert.strictEqual(settings().a4, 442);
  assert.ok(sheet().includes('442 Hz') && sheet().includes('Späť na 440 Hz'));
  click({ act: 'closeSheet' });
  mic.hz = 442; advance(700);
  assert.strictEqual(live().status, 'Naladené');
  mic.hz = 440; advance(700);
  assert.ok(/^−(7|8) ¢$/.test(live().cents), live().cents);   // 440 Hz je pri A4 = 442 o ~8 centov nízko
  click({ act: 'settings' }); click({ act: 'a4reset' });
  assert.strictEqual(settings().a4, 440);
  click({ act: 'closeSheet' });
});

t('anglické názvy a béčka', () => {
  click({ tab: 'inst' }); click({ open: 'guitar' }); click({ inst: 'guitar', tuning: 'half' });
  assert.ok(view().includes('D♯2 G♯2 C♯3 F♯3 B3 D♯4'), 'slovenské: B = A♯');
  click({ act: 'settings' });
  click({ set: 'notation', v: 'en' }); click({ set: 'accidental', v: 'flat' });
  click({ act: 'closeSheet' });
  assert.ok(view().includes('E♭2 A♭2 D♭3 G♭3 B♭3 E♭4'), view().slice(0, 600));
  click({ act: 'settings' });
  click({ set: 'notation', v: 'sk' }); click({ set: 'accidental', v: 'sharp' });
  click({ set: 'notation', v: 'zle' });              // neplatná hodnota sa neuloží
  assert.strictEqual(settings().notation, 'sk');
  assert.ok(sheet().includes('data-set="tol" data-v="20"'), 'päť možností tolerancie');
  click({ set: 'tol', v: '20' });
  assert.strictEqual(settings().tol, 20);
  click({ set: 'tol', v: '7' });                     // neplatná hodnota sa neuloží
  assert.strictEqual(settings().tol, 20);
  click({ set: 'tol', v: '10' });
  assert.strictEqual(settings().tol, 10);
  click({ set: 'theme', v: 'light' });
  assert.strictEqual(document.documentElement.attrs['data-theme'], 'light');
  click({ act: 'closeSheet' });
});

t('tolerancia ±10 ¢: odchýlka 8 ¢ je ešte naladená', () => {
  click({ tab: 'inst' }); click({ open: 'guitar' }); click({ inst: 'guitar', tuning: 'std' });
  play(55, 8);
  assert.strictEqual(live().status, 'Naladené');
});

t('vlastné ladenie: vytvorenie, úprava strún, uloženie a ladenie', () => {
  click({ tab: 'inst' }); click({ open: 'custom' });
  assert.ok(view().includes('Vytvor si vlastné struny'));
  click({ act: 'newCustom' });
  assert.ok(sheet().includes('Nové ladenie'));
  listeners.input({ target: { id: 'ed-name', value: 'Citera <b>' } });
  click({ act: 'edDel', i: '0' }); click({ act: 'edDel', i: '0' });          // 6 -> 4 struny
  listeners.change({ target: { id: 'ed-n0', value: '48', dataset: { ed: '0' } } });   // C3
  listeners.change({ target: { id: 'ed-n1', value: '999', dataset: { ed: '1' } } });  // neplatné
  click({ act: 'edAdd' });
  click({ act: 'edSave' });
  const c = settings().custom;
  assert.strictEqual(c.length, 1);
  assert.strictEqual(c[0].name, 'Citera b');
  assert.deepStrictEqual(c[0].notes, [48, 55, 59, 64, 64]);
  assert.strictEqual(settings().inst, 'custom');
  assert.ok(view().includes('Citera b') && view().includes('C3 G3 H3 E4 E4'));
  assert.ok(sheet() === '');
  play(48, 0, 1200);
  assert.strictEqual(live().status, 'Naladené');
  // úprava
  click({ tab: 'inst' }); click({ act: 'editCustom', id: c[0].id });
  assert.ok(sheet().includes('Upraviť ladenie') && sheet().includes('value="Citera b"'));
  click({ act: 'edDel', i: '4' }); click({ act: 'edSave' });
  assert.deepStrictEqual(settings().custom[0].notes, [48, 55, 59, 64]);
  assert.strictEqual(settings().custom.length, 1);
});

t('referenčné tóny: zahrá, prepne a vypne', () => {
  click({ tab: 'tones' });
  assert.ok(view().includes('Referenčné tóny') && view().includes('Citera b'));
  click({ tone: '48' });
  assert.strictEqual(oscillators.length, 1);
  assert.ok(oscillators[0].started && Math.abs(oscillators[0].frequency.value - 130.81) < 0.01);
  assert.ok(view().includes('data-tone="48" type="button" aria-pressed="true"'));
  click({ tone: '69' });
  assert.ok(oscillators[0].stopped && oscillators[1].started);
  click({ tone: '69' });                              // druhé ťuknutie vypne
  assert.ok(oscillators[1].stopped);
  assert.ok(!view().includes('aria-pressed="true" aria-label="Tón'));
  click({ oct: '2' });
  assert.ok(view().includes('data-tone="36"'));
  click({ tone: '36' });
  advance(61000);                                     // po minúte sa vypne sám
  assert.ok(oscillators[2].stopped);
});

t('odstránenie vlastného ladenia vráti gitaru', () => {
  const id = settings().custom[0].id;
  click({ tab: 'inst' }); click({ open: 'custom' });
  click({ act: 'askDelCustom', id });
  assert.ok(modal().innerHTML.includes('Odstrániť'));
  click({ act: 'modalOk' });
  assert.strictEqual(settings().custom.length, 0);
  assert.strictEqual(settings().inst, 'guitar');
});

t('záloha a obnovenie', async () => {
  // vytvoríme ladenie, stiahneme zálohu, vymažeme všetko a obnovíme
  click({ tab: 'inst' }); click({ open: 'custom' }); click({ act: 'newCustom' });
  listeners.input({ target: { id: 'ed-name', value: 'Moje' } });
  click({ act: 'edSave' });
  click({ act: 'settings' }); click({ act: 'export' });
  const d = downloads[downloads.length - 1];
  assert.ok(/^universal-tuner-zaloha-2026-11-19\.json$/.test(d.name), d.name);
  const backup = await d.blob.text();
  assert.ok(JSON.parse(backup).settings.custom[0].name === 'Moje');
  click({ act: 'askReset' }); click({ act: 'modalOk' });
  assert.ok(!('universalTuner.settings.v1' in store));
  assert.ok(view().includes('Gitara'));
  click({ act: 'settings' }); click({ act: 'import' });
  assert.strictEqual(importClicked, 1);
  await listeners.change({ target: { id: 'import-file', files: [new Blob([backup])], dataset: {} } }); await flush();
  assert.strictEqual(settings().custom[0].name, 'Moje');
  assert.strictEqual(settings().theme, 'light');
  // chybný súbor
  await listeners.change({ target: { id: 'import-file', files: [new Blob(['{"app":"iny"}'])], dataset: {} } }); await flush();
  assert.ok(modal().innerHTML.includes('Toto nie je záloha'));
  click({ act: 'modalCancel' }); click({ act: 'closeSheet' });
});

t('poškodené nastavenia sa opravia na predvolené', () => {
  store['universalTuner.settings.v1'] = JSON.stringify({ inst: 'nic', a4: 9999, tol: 7, custom: [{ id: 'x', notes: [1] }, { id: 'cok', name: 'OK', notes: [40, 45] }], theme: 'ruzova' });
  winListeners.storage({ key: 'universalTuner.settings.v1' });
  // storage udalosť načíta a opraví nastavenia
  click({ act: 'settings' });
  assert.ok(sheet().includes('data-v="10" type="button" aria-pressed="true"'), 'neplatná tolerancia → predvolených ±10 ¢');
  click({ act: 'closeSheet' });
  click({ tab: 'tune' });
  assert.ok(view().includes('Gitara'));
  click({ tab: 'inst' }); click({ open: 'custom' });
  assert.ok(view().includes('OK') && !view().includes('data-tuning="x"'));
});

t('odchod z appky vypne mikrofón', () => {
  click({ tab: 'tune' });
  const before = tracksStopped;
  document.visibilityState = 'hidden';
  listeners.visibilitychange();
  assert.strictEqual(tracksStopped, before + 1);
  assert.strictEqual(intervals.size, 0, 'žiadne počúvanie na pozadí');
  document.visibilityState = 'visible';
  assert.ok(view().includes('Spustiť ladenie'));
});

t('jazyky: úplné slovníky, po inštalácii angličtina, výber jazyka v nastaveniach', () => {
  const I = global.UTI18N, sk = I.dict('sk');
  const ph = x => [...new Set(JSON.stringify(x).match(/\{\w+\}/g) || [])].sort().join();
  assert.strictEqual(I.languages().length, 12, 'má byť 12 jazykov');
  I.languages().forEach(({ code }) => {
    const d = I.dict(code);
    assert.ok(d._dec && d._name && d._htmlLang && d._flag, code + ': chýba _dec/_name/_htmlLang/_flag');
    Object.keys(d).forEach(k => assert.ok(k in sk, code + ': kľúč navyše ' + k));
    Object.keys(sk).filter(k => k[0] !== '_').forEach(k => {
      assert.ok(k in d, code + ': chýba ' + k);
      if (typeof sk[k] === 'object') assert.ok(d[k].other && Object.values(d[k]).every(v => v.includes('{n}')), code + ': množné číslo ' + k);
      else assert.strictEqual(ph(d[k]), ph(sk[k]), code + ': premenné v ' + k);
    });
    assert.ok(/^[a-z0-9-]+$/.test(d.backupFile), code + ': názov súboru zálohy');
  });
  // čistá inštalácia: angličtina a anglické názvy tónov
  forceSk = false;
  Object.keys(store).forEach(k => delete store[k]);
  winListeners.storage({ key: null });
  click({ tab: 'tune' });
  const en = I.dict('en'), de = I.dict('de');
  assert.strictEqual(I.lang(), 'en');
  assert.strictEqual(document.documentElement.attrs.lang, 'en');
  assert.ok(view().includes(en['inst.guitar']) && view().includes(en.startTuning), 'úvod nie je po anglicky');
  assert.ok(view().includes('E2 A2 D3 G3 B3 E4'), 'v angličtine sú anglické názvy tónov');
  // výber jazyka v nastaveniach
  click({ act: 'settings' });
  assert.ok(sheet().includes('id="set-lang"') && sheet().includes('Slovenčina') && sheet().includes('Deutsch') && sheet().includes('日本語'), 'chýba výber jazyka');
  listeners.change({ target: { id: 'set-lang', value: 'de', dataset: {} } });
  assert.strictEqual(settings().lang, 'de', 'jazyk sa neuložil');
  assert.ok(sheet().includes(de.appearance), 'nastavenia sa neprepli');
  click({ act: 'closeSheet' });
  assert.ok(view().includes(de['inst.guitar']) && view().includes(de.startTuning), 'Ladiť nie je po nemecky');
  click({ tab: 'inst' });
  assert.ok(view().includes(de.whatTune));
  // neplatný jazyk (aj zo zálohy či úložiska) = angličtina, nič sa nerozbije
  store['universalTuner.settings.v1'] = JSON.stringify({ lang: '__proto__', theme: 'dark' });
  winListeners.storage({ key: 'universalTuner.settings.v1' });
  assert.strictEqual(I.lang(), 'en');
  // staré nastavenia bez jazyka (verzia len po slovensky) = slovenčina
  store['universalTuner.settings.v1'] = JSON.stringify({ theme: 'dark', notation: 'sk' });
  winListeners.storage({ key: 'universalTuner.settings.v1' });
  assert.strictEqual(I.lang(), 'sk');
  click({ tab: 'tune' });
  assert.ok(view().includes('Spustiť ladenie') && view().includes('H3'));
  forceSk = true;
});

(async () => {
  for (const [name, fn] of tests) {
    try { await fn(); ok++; console.log('✓', name); } catch (e) { console.error('✗', name, '\n ', e.message); process.exitCode = 1; }
  }
  console.log(`Appka: ${ok} z ${tests.length} scenárov prešlo`);
})();
