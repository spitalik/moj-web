/* Kontrola rozpoznávania výšky tónu (pitch.js) na umelých zvukoch.
   Spustenie (z priečinka universal-tuner):  node tools/test.js
   Na konci spustí aj scenárový test appky (tools/test-app.js). */
'use strict';
const assert = require('assert');
const P = require('../pitch.js');

let ok = 0;
function t(nazov, fn) {
  try { fn(); ok++; } catch (e) { console.error(`✗ ${nazov}\n  ${e.message}`); process.exitCode = 1; }
}

/* Tón ako zo struny: harmonické s klesajúcou silou. harm: pole amplitúd 1., 2., 3. … harmonickej. */
function tone(hz, opts) {
  opts = opts || {};
  const sr = opts.sr || 48000, n = opts.n || 8192, harm = opts.harm || [1, 0.6, 0.4, 0.25, 0.15, 0.1];
  const noise = opts.noise || 0, amp = opts.amp || 0.3;
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 - 0.5; };
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    let v = 0;
    for (let h = 0; h < harm.length; h++) v += harm[h] * Math.sin(2 * Math.PI * hz * (h + 1) * i / sr + h);
    out[i] = amp * v / harm.length + noise * rnd();
  }
  return out;
}
const near = (hz, want, maxCents) => Math.abs(P.cents(hz, want)) <= maxCents;

t('názvy tónov: anglické, slovenské, s béčkami', () => {
  assert.strictEqual(P.label(69), 'A4');
  assert.strictEqual(P.label(40), 'E2');
  assert.strictEqual(P.label(59), 'B3');
  assert.strictEqual(P.label(59, { notation: 'sk' }), 'H3');
  assert.strictEqual(P.label(58), 'A♯3');
  assert.strictEqual(P.label(58, { notation: 'sk' }), 'B3');
  assert.strictEqual(P.label(58, { accidental: 'flat' }), 'B♭3');
  assert.strictEqual(P.label(61, { accidental: 'flat' }), 'D♭4');
  assert.strictEqual(P.label(23), 'B0');
});

t('zápis tónov a frekvencie', () => {
  assert.strictEqual(P.parseNote('A4'), 69);
  assert.strictEqual(P.parseNote('F#3'), 54);
  assert.strictEqual(P.parseNote('Bb1'), 34);
  assert.strictEqual(P.parseNote('B0'), 23);
  assert.strictEqual(P.parseNote('H4'), null);
  assert.ok(Math.abs(P.midiToHz(40) - 82.4069) < 0.001);
  assert.ok(Math.abs(P.midiToHz(69, 442) - 442) < 1e-9);
  const n = P.noteOf(445);
  assert.strictEqual(n.midi, 69);
  assert.ok(Math.abs(n.cents - 19.56) < 0.05, 'centy ' + n.cents);
});

t('každý nástroj má platné struny', () => {
  P.INSTRUMENTS.forEach(i => i.tunings.forEach(tu => {
    assert.ok(tu.notes.length >= 3, i.id + '/' + tu.id);
    tu.notes.forEach(m => assert.ok(Number.isInteger(m) && m >= 20 && m <= 90, i.id + '/' + tu.id + ' ' + m));
  }));
  const g = P.INSTRUMENTS.find(i => i.id === 'guitar').tunings[0].notes;
  assert.deepStrictEqual(g, [40, 45, 50, 55, 59, 64]);
});

t('čistý sínus 440 Hz', () => {
  const r = P.detect(tone(440, { harm: [1] }), 48000, P.rangeFor([69]));
  assert.ok(r && near(r.hz, 440, 0.5), JSON.stringify(r));
  assert.ok(r.clarity > 0.9);
});

t('všetky struny gitary, basy, huslí a ukulele do 1 centu (48 aj 44,1 kHz)', () => {
  [48000, 44100].forEach(sr => {
    ['guitar', 'bass', 'violin', 'ukulele', 'cello', 'banjo'].forEach(id => {
      const ins = P.INSTRUMENTS.find(i => i.id === id);
      ins.tunings.forEach(tu => {
        const range = P.rangeFor(tu.notes);
        tu.notes.forEach(m => {
          const hz = P.midiToHz(m);
          const r = P.detect(tone(hz, { sr }), sr, range);
          assert.ok(r && near(r.hz, hz, 1), `${id}/${tu.id} ${P.label(m)} ${sr}: ${r && r.hz} namiesto ${hz}`);
        });
      });
    });
  });
});

t('rozladená struna (o 30 centov nižšie) sa zmeria presne', () => {
  const hz = P.midiToHz(45) * Math.pow(2, -30 / 1200);
  const r = P.detect(tone(hz), 48000, P.rangeFor([40, 64]));
  const c = P.nearestString(r.hz, [40, 45, 50, 55, 59, 64]);
  assert.strictEqual(c.index, 1);
  assert.ok(Math.abs(c.cents + 30) < 1, 'centy ' + c.cents);
});

t('chýbajúci základný tón (malý mikrofón) – stále správna výška, nie oktáva', () => {
  const hz = P.midiToHz(28);                    // E1 basgitary, 41,2 Hz
  const r = P.detect(tone(hz, { harm: [0, 1, 0.8, 0.6, 0.4, 0.3] }), 48000, P.rangeFor([28, 43]));
  assert.ok(r && near(r.hz, hz, 2), 'namerané ' + (r && r.hz));
});

t('tón so šumom', () => {
  const r = P.detect(tone(196, { noise: 0.05 }), 48000, P.rangeFor([55, 76]));
  assert.ok(r && near(r.hz, 196, 3), 'namerané ' + (r && r.hz));
});

t('šum a ticho nie sú tón', () => {
  const noise = tone(100, { harm: [0], noise: 0.5 });
  assert.strictEqual(P.detect(noise, 48000, P.rangeFor([40, 64])), null);
  assert.strictEqual(P.detect(new Float32Array(8192), 48000, P.rangeFor([40, 64])), null);
  assert.strictEqual(P.levelDb(new Float32Array(10)), -100);
  assert.ok(Math.abs(P.levelDb(new Float32Array(100).fill(0.1)) + 20) < 0.01);
});

t('chromatický rozsah: od 30 Hz po 2000 Hz', () => {
  [30.87, 55, 261.63, 1046.5, 1975.5].forEach(hz => {
    const r = P.detect(tone(hz, { n: 8192 }), 48000, P.rangeFor(null));
    assert.ok(r && near(r.hz, hz, 2), hz + ': ' + (r && r.hz));
  });
});

t('najbližšia struna a rovnaké struny', () => {
  assert.strictEqual(P.nearestString(84, [40, 45, 50, 55, 59, 64].map(m => m)).index, 0);
  assert.strictEqual(P.nearestString(P.midiToHz(64), [64, 64, 69]).index, 0);
  assert.strictEqual(P.nearestString(100, []), null);
});

t('vyhladenie: medián, osamotený skok, podržanie po stíchnutí', () => {
  const tr = new P.Tracker();
  assert.strictEqual(tr.feed(0, { hz: 110 }), null);            // prvé odčítanie ešte nestačí
  assert.ok(near(tr.feed(50, { hz: 110.2 }).hz, 110.1, 0.5));
  tr.feed(100, { hz: 110.1 });
  const glitch = tr.feed(150, { hz: 220 });                     // oktávový skok raz = chyba
  assert.ok(near(glitch.hz, 110.1, 2) && !glitch.live);
  const back = tr.feed(200, { hz: 110 });
  assert.ok(back.live && near(back.hz, 110.1, 2));
  tr.feed(250, null);
  assert.ok(tr.feed(800, null) && !tr.feed(800, null).live);    // podržané
  assert.strictEqual(tr.feed(200 + P.HOLD_MS + 10, null), null); // po chvíli zmizne
  // nový tón po dvoch zhodných odčítaniach
  tr.feed(3000, { hz: 147 }); const r = tr.feed(3050, { hz: 147.1 });
  assert.ok(r.live && near(r.hz, 147.05, 1));
  tr.feed(3100, { hz: 196 }); const s = tr.feed(3150, { hz: 196.2 });
  assert.ok(s.live && near(s.hz, 196.1, 1), 'prepnutie na nový tón');
});

console.log(`Detektor tónu: ${ok} testov prešlo`);

console.log('Appka:');
require('./test-app.js');
