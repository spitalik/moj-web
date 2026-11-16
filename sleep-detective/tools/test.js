/* Kontrola rozpoznávania chrápania a hluku (sound.js) na umelých zvukoch.
   Spustenie (z priečinka sleep-detective):  node tools/test.js */
'use strict';
const assert = require('assert');
const S = require('../sound.js');

let ok = 0;
function t(nazov, fn) {
  try { fn(); ok++; } catch (e) { console.error(`✗ ${nazov}\n  ${e.message}`); process.exitCode = 1; }
}

/* Vyrobí noc: snímky každých 100 ms, ticho -60 dB. sounds: [{ at, dur, db, low }] v ms. */
function night(lengthMs, sounds, opts) {
  opts = opts || {};
  const d = new S.Detector({ sensitivity: opts.sensitivity });
  const out = [];
  for (let t = 0; t <= lengthMs; t += 100) {
    if (opts.skip && t > opts.skip[0] && t < opts.skip[1]) continue;
    let db = typeof opts.base === 'function' ? opts.base(t) : -60, low = 0.3;
    for (const s of sounds) if (t >= s.at && t < s.at + s.dur) { db = s.db; low = s.low; }
    const r = d.feed(t, db, low);
    if (r) out.push(r);
  }
  d.flush(lengthMs);
  return { d, out, sum: d.summary(lengthMs) };
}
const breaths = (from, count, every, dur, db, low) => Array.from({ length: count }, (_, i) => ({ at: from + i * every, dur, db, low }));

t('ticho nevytvorí žiadny zvuk', () => {
  const { sum } = night(10 * 60000, []);
  assert.strictEqual(sum.noise, 0);
  assert.strictEqual(sum.snoreMin, 0);
  assert.strictEqual(sum.loudest, null);
});

t('hlboké zvuky v rytme dychu sú chrápanie', () => {
  const { d, sum } = night(5 * 60000, breaths(60000, 30, 4000, 1200, -35, 0.8));
  assert.ok(d.events.length === 30, 'počet zvukov ' + d.events.length);
  assert.ok(d.events.every(e => e.kind === 'snore'), 'nie všetko je chrápanie');
  assert.strictEqual(sum.episodes, 1);
  assert.strictEqual(sum.snoreMin, 2);          // 29 × 4 s + 1,2 s ≈ 1,95 min
  assert.strictEqual(sum.noise, 0);
});

t('dve ojedinelé hlboké zvuky nie sú chrápanie', () => {
  const { sum } = night(3 * 60000, [{ at: 20000, dur: 1000, db: -35, low: 0.8 }, { at: 80000, dur: 1000, db: -35, low: 0.8 }]);
  assert.strictEqual(sum.snoreMin, 0);
  assert.strictEqual(sum.noise, 2);
});

t('vysoké zvuky v rytme (napr. kvapkanie) nie sú chrápanie', () => {
  const { sum } = night(3 * 60000, breaths(10000, 20, 4000, 800, -35, 0.2));
  assert.strictEqual(sum.snoreMin, 0);
  assert.strictEqual(sum.noise, 20);
});

t('buchnutie dverí je hluk a najhlasnejší moment', () => {
  const { sum } = night(10 * 60000, breaths(60000, 10, 4000, 1000, -38, 0.8).concat([{ at: 400000, dur: 300, db: -15, low: 0.4 }]));
  assert.strictEqual(sum.noise, 1);
  assert.strictEqual(sum.loudest.kind, 'noise');
  assert.strictEqual(sum.loudest.t, 400000);
  assert.ok(sum.loudest.peak > 40);
});

t('zapnutý ventilátor sa po chvíli stane novým tichom', () => {
  // od 2. minúty trvalý šum o 20 dB hlasnejší
  const { sum, d } = night(15 * 60000, [], { base: t => (t < 120000 ? -60 : -40) });
  assert.ok(sum.noise <= 1, 'ventilátor vytvoril ' + sum.noise + ' zvukov');
  assert.ok(d.floor > -45, 'hladina ticha sa neprispôsobila: ' + d.floor);
  // a chrápanie nad ventilátorom sa stále rozpozná
  const r = night(15 * 60000, breaths(400000, 20, 4000, 1200, -25, 0.8), { base: t => (t < 120000 ? -60 : -40) });
  assert.ok(r.sum.snoreMin >= 1, 'chrápanie nad ventilátorom: ' + r.sum.snoreMin);
});

t('citlivosť: tichý zvuk zachytí len vysoká citlivosť', () => {
  const s = [{ at: 30000, dur: 1000, db: -52, low: 0.4 }];
  assert.strictEqual(night(60000, s, { sensitivity: 'low' }).sum.noise, 0);
  assert.strictEqual(night(60000, s, { sensitivity: 'medium' }).sum.noise, 0);
  assert.strictEqual(night(60000, s, { sensitivity: 'high' }).sum.noise, 1);
});

t('prerušený záznam (zamknutý telefón) sa zaznamená', () => {
  const { sum } = night(10 * 60000, [], { skip: [120000, 240000] });
  assert.strictEqual(sum.gapMin, 2);
});

t('časová os po 5 minútach', () => {
  const { sum } = night(20 * 60000, breaths(6 * 60000, 30, 4000, 1200, -35, 0.8).concat([{ at: 16 * 60000, dur: 500, db: -20, low: 0.3 }]));
  assert.strictEqual(sum.timeline.length, 4);
  assert.ok(sum.timeline[1].snore > 100, 'chrápanie v 2. úseku');
  assert.strictEqual(sum.timeline[3].noise, 1);
  assert.strictEqual(sum.timeline[0].snore + sum.timeline[0].noise, 0);
});

t('podiel nízkych frekvencií a hlasitosť', () => {
  const fft = 2048, rate = 48000, bins = new Float32Array(fft / 2).fill(-120);
  bins[Math.round(200 / (rate / fft))] = -20;        // energia len pri 200 Hz
  assert.ok(S.lowRatio(bins, rate, fft) > 0.99);
  bins.fill(-120); bins[Math.round(2000 / (rate / fft))] = -20;
  assert.ok(S.lowRatio(bins, rate, fft) < 0.01);
  assert.ok(Math.abs(S.levelDb(new Float32Array(1000).fill(0.1)) - -20) < 0.01);
  assert.strictEqual(S.levelDb(new Float32Array(10)), -100);
});

console.log(`${ok} testov prešlo`);
