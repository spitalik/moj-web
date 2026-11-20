// Testy logiky Health Companion: node tools/test.js
'use strict';
const assert = require('assert');
const path = require('path');
// Prekladové jadro a všetky jazykové slovníky (logic.js číta texty cez globálne HCI18N)
global.HCI18N = require(path.join(__dirname, '..', 'i18n', 'core.js'));
const LANGS = ['sk', 'en', 'es', 'pt', 'de', 'fr', 'it', 'ru', 'tr', 'ja', 'ko', 'zh'];
LANGS.forEach(c => require(path.join(__dirname, '..', 'i18n', c + '.js')));
const HC = require(path.join(__dirname, '..', 'logic.js'));

let passed = 0;
function test(name, fn) {
  try { fn(); passed++; console.log('ok   ' + name); }
  catch (e) { console.error('FAIL ' + name + '\n  ' + e.message); process.exitCode = 1; }
}

test('addMonths ošetrí koniec mesiaca', () => {
  assert.strictEqual(HC.addMonths('2026-01-31', 1), '2026-02-28');
  assert.strictEqual(HC.addMonths('2024-01-31', 1), '2024-02-29');
  assert.strictEqual(HC.addMonths('2026-11-20', 12), '2027-11-20');
});

test('parseISO odmietne neexistujúci dátum', () => {
  assert.strictEqual(HC.parseISO('2026-02-31'), null);
  assert.strictEqual(HC.parseISO('nie'), null);
  assert.ok(HC.parseISO('2026-02-28'));
});

test('checkupStatus: nikdy neevidované, po termíne, blízko, v poriadku', () => {
  const today = '2026-11-20';
  assert.strictEqual(HC.checkupStatus({ intervalMonths: 12, lastDate: null }, today).status, 'unknown');
  assert.strictEqual(HC.checkupStatus({ intervalMonths: 12, lastDate: '2025-06-01' }, today).status, 'overdue');
  assert.strictEqual(HC.checkupStatus({ intervalMonths: 12, lastDate: '2025-12-10' }, today).status, 'soon');
  assert.strictEqual(HC.checkupStatus({ intervalMonths: 12, lastDate: '2026-06-01' }, today).status, 'ok');
});

const meds = [
  { id: 'a', name: 'Metformín', dose: '500 mg', times: ['20:00', '08:00'], startDate: '2026-11-01', endDate: null, active: true },
  { id: 'b', name: 'Vitamín D', dose: '1000 IU', times: ['08:00'], startDate: '2026-11-25', endDate: null, active: true },
  { id: 'c', name: 'Ukončený', dose: '', times: ['09:00'], startDate: '2026-10-01', endDate: '2026-11-10', active: true },
  { id: 'd', name: 'Pozastavený', dose: '', times: ['09:00'], startDate: '2026-10-01', endDate: null, active: false }
];

test('medDosesOn vracia len aktívne dávky v daný deň, zoradené podľa času', () => {
  const doses = HC.medDosesOn(meds, {}, '2026-11-20');
  assert.deepStrictEqual(doses.map(d => d.name + ' ' + d.time), ['Metformín 08:00', 'Metformín 20:00']);
  assert.ok(HC.medDosesOn(meds, {}, '2026-11-26').some(d => d.name === 'Vitamín D'));
  assert.ok(!HC.medDosesOn(meds, {}, '2026-11-12').some(d => d.name === 'Ukončený'));
});

test('setDoseTaken nemení pôvodný objekt a čistí prázdne dni', () => {
  const t1 = HC.setDoseTaken({}, '2026-11-20', 'a|08:00', true);
  assert.strictEqual(t1['2026-11-20']['a|08:00'], 'taken');
  const doses = HC.medDosesOn(meds, t1, '2026-11-20');
  assert.strictEqual(doses[0].taken, true);
  const t2 = HC.setDoseTaken(t1, '2026-11-20', 'a|08:00', false);
  assert.strictEqual(t2['2026-11-20'], undefined);
  assert.strictEqual(t1['2026-11-20']['a|08:00'], 'taken');
});

test('missedDoses: včerajšie nesplnené a dnešné po čase', () => {
  const doses = HC.medDosesOn(meds, {}, '2026-11-20');
  assert.deepStrictEqual(HC.missedDoses(doses, '2026-11-20', '2026-11-20', '10:00').map(d => d.time), ['08:00']);
  assert.strictEqual(HC.missedDoses(doses, '2026-11-20', '2026-11-20', '07:00').length, 0);
  assert.strictEqual(HC.missedDoses(doses, '2026-11-19', '2026-11-20', '07:00').length, 2);
});

test('validácie vrátia chybu pre zlé vstupy', () => {
  assert.ok(HC.validateMed({ name: '', times: ['08:00'] }));
  assert.ok(HC.validateMed({ name: 'X', times: ['25:00'] }));
  assert.ok(HC.validateMed({ name: 'X', times: ['08:00'], startDate: '2026-05-10', endDate: '2026-05-01' }));
  assert.strictEqual(HC.validateMed({ name: 'X', times: ['08:00'] }), null);
  assert.ok(HC.validateSymptom({ name: 'Bolesť', date: '2026-11-20', severity: 11 }));
  assert.strictEqual(HC.validateSymptom({ name: 'Bolesť', date: '2026-11-20', severity: 7 }), null);
  assert.ok(HC.validateCheckup({ name: 'Zubár', intervalMonths: 0 }));
  assert.ok(HC.validateVisit({ date: '2026-11-20', doctor: '' }));
});

test('export a import sa zhodujú; cudzí súbor sa odmietne', () => {
  const state = HC.emptyState();
  state.meds = meds;
  state.taken = { '2026-11-20': { 'a|08:00': true } };
  const back = HC.importJSON(HC.exportJSON(state));
  assert.deepStrictEqual(back.meds, meds);
  assert.deepStrictEqual(back.taken, state.taken);
  assert.throws(() => HC.importJSON('{"foo":1}'), /nie je zálohou/);
  assert.throws(() => HC.importJSON('nie json'), /platný JSON/);
  assert.throws(() => HC.importJSON(JSON.stringify({ schema: 'health-companion', version: 9, data: {} })), /verzia/);
});

test('stavy dávok: užité, vynechané a zrušenie', () => {
  let t = HC.setDoseStatus({}, '2026-11-20', 'a|08:00', 'skipped');
  let d = HC.medDosesOn(meds, t, '2026-11-20')[0];
  assert.strictEqual(d.status, 'skipped');
  assert.strictEqual(d.taken, false);
  t = HC.setDoseStatus(t, '2026-11-20', 'a|08:00', 'taken');
  assert.strictEqual(HC.medDosesOn(meds, t, '2026-11-20')[0].status, 'taken');
  // stará hodnota true sa berie ako užité
  assert.strictEqual(HC.medDosesOn(meds, { '2026-11-20': { 'a|08:00': true } }, '2026-11-20')[0].status, 'taken');
  t = HC.setDoseStatus(t, '2026-11-20', 'a|08:00', null);
  assert.strictEqual(t['2026-11-20'], undefined);
});

test('vynechaná dávka sa nepovažuje za nesplnenú', () => {
  const doses = HC.medDosesOn(meds, { '2026-11-19': { 'a|08:00': 'skipped' } }, '2026-11-19');
  assert.strictEqual(HC.missedDoses(doses, '2026-11-19', '2026-11-20', '10:00').length, 1); // len 20:00
});

test('zásoby: dni a nízky stav', () => {
  assert.strictEqual(HC.daysOfSupply({ times: ['08:00', '20:00'], stock: 20 }), 10);
  assert.strictEqual(HC.daysOfSupply({ times: ['08:00'] }), null);
  assert.strictEqual(HC.lowStock({ times: ['08:00'], stock: 5 }), true);
  assert.strictEqual(HC.lowStock({ times: ['08:00'], stock: 30 }), false);
  assert.ok(HC.validateMed({ name: 'X', times: ['08:00'], stock: -1 }));
});

test('lieky užité pred príznakom (3 dni)', () => {
  const state = HC.normalizeState({
    meds: [{ id: 'a', name: 'Metformín', times: ['08:00'] }, { id: 'b', name: 'Ibuprofén', times: ['08:00'] }],
    taken: { '2026-11-17': { 'a|08:00': 'taken' }, '2026-11-19': { 'b|08:00': 'taken', 'a|08:00': 'skipped' }, '2026-11-10': { 'a|08:00': 'taken' } }
  });
  const names = HC.medsBeforeSymptom(state, { date: '2026-11-20' }, 3);
  assert.deepStrictEqual(names.sort(), ['Ibuprofén', 'Metformín']);
  assert.deepStrictEqual(HC.medsBeforeSymptom(state, { date: '2026-11-25' }, 3), []);
});

test('severityByDay berie najvyššiu hodnotu za deň', () => {
  const s = HC.severityByDay([{ date: '2026-11-01', severity: 3 }, { date: '2026-11-01', severity: 7 }, { date: '2026-12-01', severity: 9 }], '2026-11-01', '2026-11-30');
  assert.deepStrictEqual(s, [{ date: '2026-11-01', max: 7 }]);
});

test('otázky: patria k návšteve alebo sú nepriradené, vyriešené sa vynechajú', () => {
  const qs = [
    { id: '1', text: 'A', visitId: 'v1' },
    { id: '2', text: 'B', visitId: 'v2' },
    { id: '3', text: 'C', visitId: null },
    { id: '4', text: 'D', visitId: 'v1', done: true }
  ];
  assert.deepStrictEqual(HC.openQuestionsFor(qs, 'v1').map(q => q.id), ['1', '3']);
  assert.strictEqual(HC.openQuestionsFor(qs, null).length, 3);
});

test('prepSummary obsahuje lieky, problémy, príznaky a otázky', () => {
  const state = HC.normalizeState({
    meds: [{ id: 'a', name: 'Metformín', dose: '500 mg', times: ['08:00'] }],
    problems: [{ name: 'Astma', status: 'aktívny' }],
    symptoms: [{ date: '2026-11-18', name: 'Kašeľ', severity: 4 }],
    questions: [{ id: 'q', text: 'Môžem športovať?', visitId: 'v1' }]
  });
  const txt = HC.prepSummary(state, { id: 'v1' }, '2026-11-20');
  assert.ok(txt.includes('Metformín (500 mg)') && txt.includes('Astma') && txt.includes('Kašeľ (4/10)') && txt.includes('1. Môžem športovať?'));
});

test('štandardné prehliadky sa nepridajú dvakrát', () => {
  const missing = HC.missingStandardCheckups([{ name: 'kontrola zubov' }, { name: 'Očný lekár' }]);
  assert.ok(!missing.some(s => s.name === 'Očný lekár'));
  assert.strictEqual(HC.missingStandardCheckups(HC.STANDARD_CHECKUPS.map(s => ({ stdKey: s.key }))).length, 0);
});

test('zlúčenie záloh: rovnaké id sa nahradí, nové sa pridajú', () => {
  const a = HC.normalizeState({ meds: [{ id: 'x', name: 'Starý' }], taken: { '2026-11-20': { 'x|08:00': 'taken' } } });
  const b = HC.normalizeState({ meds: [{ id: 'x', name: 'Nový' }, { id: 'y', name: 'Iný' }], taken: { '2026-11-20': { 'y|09:00': 'skipped' } } });
  const m = HC.mergeState(a, b);
  assert.deepStrictEqual(m.meds.map(x => x.name), ['Nový', 'Iný']);
  assert.deepStrictEqual(m.taken['2026-11-20'], { 'x|08:00': 'taken', 'y|09:00': 'skipped' });
});

test('pripomienka zálohy: bez údajov nie, nikdy exportované áno, po 30 dňoch áno', () => {
  const full = HC.normalizeState({ meds: [{ id: 'x', name: 'L' }] });
  assert.strictEqual(HC.backupDue(HC.emptyState(), null, '2026-11-20'), false);
  assert.strictEqual(HC.backupDue(full, null, '2026-11-20'), true);
  assert.strictEqual(HC.backupDue(full, '2026-11-01', '2026-11-20'), false);
  assert.strictEqual(HC.backupDue(full, '2026-10-01', '2026-11-20'), true);
});

test('všetkých 12 jazykov má rovnaké kľúče ako slovenčina', () => {
  // každý jazyk musí vrátiť preklad (nie samotný kľúč) pre reprezentatívne kľúče
  const probe = ['appName', 'tabToday', 'errNameRequired', 'reminderTitle', 'dateUnknown', 'iosSteps', 'rptDisclaimer', 'stockLeft'];
  LANGS.forEach(lang => {
    global.HCI18N.setLang(lang);
    probe.forEach(k => assert.notStrictEqual(global.HCI18N.t(k), k, lang + ': chýba ' + k));
  });
  global.HCI18N.setLang('sk');
});

test('prepínanie jazyka mení texty a neznáme kľúče sa vracajú so zálohou v slovenčine', () => {
  const I = global.HCI18N;
  I.setLang('en');
  assert.strictEqual(I.t('tabMeds'), 'Medications');
  assert.strictEqual(I.t('neexistujuci'), 'neexistujuci');
  assert.strictEqual(I.t('stockLeft', { n: 5, days: 2 }), 'Remaining: 5 pcs (~2 days)');
  I.setLang('sk');
  assert.strictEqual(I.t('tabMeds'), 'Lieky');
});

test('chybové hlášky logiky idú v zvolenom jazyku', () => {
  global.HCI18N.setLang('en');
  assert.ok(HC.validateMed({ name: '', times: ['08:00'] }).includes('required'));
  global.HCI18N.setLang('sk');
  assert.ok(HC.validateMed({ name: '', times: ['08:00'] }).includes('povinné'));
});

test('cache verzia v sw.js zodpovedá obsahu appky (inak spustiť node tools/bump_cache.js)', () => {
  const cache = require(path.join(__dirname, 'bump_cache.js'));
  assert.strictEqual(cache.currentCache(), cache.expectedCache());
});

test('normalizeState zahodí neplatné polia', () => {
  const s = HC.normalizeState({ meds: 'x', symptoms: [null, { name: 'ok' }] });
  assert.deepStrictEqual(s.meds, []);
  assert.strictEqual(s.symptoms.length, 1);
});

test('questionsText vypíše očíslované otázky', () => {
  const txt = HC.questionsText([{ text: 'Môžem športovať?' }, { text: 'Aký liek?' }], '20. 11.');
  assert.ok(txt.includes('1. Môžem športovať?') && txt.includes('2. Aký liek?'));
});

console.log('\n' + passed + ' testov prešlo' + (process.exitCode ? ' (niektoré zlyhali)' : ''));
