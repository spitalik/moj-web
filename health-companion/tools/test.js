// Testy logiky Health Companion: node tools/test.js
'use strict';
const assert = require('assert');
const path = require('path');
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
  assert.strictEqual(t1['2026-11-20']['a|08:00'], true);
  const doses = HC.medDosesOn(meds, t1, '2026-11-20');
  assert.strictEqual(doses[0].taken, true);
  const t2 = HC.setDoseTaken(t1, '2026-11-20', 'a|08:00', false);
  assert.strictEqual(t2['2026-11-20'], undefined);
  assert.strictEqual(t1['2026-11-20']['a|08:00'], true);
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
