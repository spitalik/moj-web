/* Kontrola výpočtov Kalkulačky VSÚ.  Spustenie (z priečinka juro):  node tools/test.js */
'use strict';
const assert = require('assert');
const V = require('../js/vypocty.js');

let ok = 0;
function t(nazov, fn) {
  try { fn(); ok++; } catch (e) { console.error(`✗ ${nazov}\n  ${e.message}`); process.exitCode = 1; }
}

/* ---------- sviatky ---------- */
t('Veľká noc', () => {
  assert.strictEqual(V.iso(V.velkaNoc(2024)), '2024-03-31');
  assert.strictEqual(V.iso(V.velkaNoc(2025)), '2025-04-20');
  assert.strictEqual(V.iso(V.velkaNoc(2026)), '2026-04-05');
  assert.strictEqual(V.iso(V.velkaNoc(2027)), '2027-03-28');
});
t('dni pracovného pokoja podľa rokov', () => {
  const s = (d) => V.sviatok(V.parse(d));
  assert.ok(s('2023-09-01'), '1. 9. 2023 je deň pokoja');
  assert.ok(!s('2024-09-01'), '1. 9. 2024 nie je');
  assert.ok(s('2024-11-17'), '17. 11. 2024 je');
  assert.ok(!s('2025-11-17'), '17. 11. 2025 nie je');
  assert.ok(s('2025-05-08') && s('2025-09-15'));
  assert.ok(!s('2026-05-08') && !s('2026-09-15'), '8. 5. a 15. 9. 2026 nie sú');
  assert.ok(s('2027-05-08') && s('2027-09-15'));
  assert.ok(!s('2026-10-28'));
  assert.ok(s('2026-04-03') && s('2026-04-06'), 'Veľký piatok a pondelok 2026');
  assert.ok(s('2026-12-24') && s('2026-01-06'));
});

/* ---------- lehoty ---------- */
t('15 dní bez posunu', () => {
  const r = V.lehota({ udalost: '2026-11-02', n: 15, jednotka: 'dni', druh: 'procesna' });
  assert.strictEqual(r.koniec, '2026-11-17'); // utorok, 17. 11. 2026 nie je deň pokoja
  assert.ok(r.upozornenia.some((u) => u.includes('nie je dňom pracovného pokoja')));
});
t('15 dní s posunom cez víkend', () => {
  const r = V.lehota({ udalost: '2026-11-06', n: 15, jednotka: 'dni', druh: 'procesna' });
  assert.strictEqual(r.koniec, '2026-11-23'); // 21. 11. sobota -> pondelok 23. 11.
  assert.ok(r.posunute);
});
t('posun cez Vianoce', () => {
  const r = V.lehota({ udalost: '2026-12-09', n: 15, jednotka: 'dni', druh: 'procesna' });
  // 24. 12. štvrtok (pokoj), 25. pia, 26. so, 27. ne -> 28. 12.
  assert.strictEqual(r.koniec, '2026-12-28');
});
t('mesiace – posledný deň mesiaca', () => {
  const r = V.lehota({ udalost: '2026-12-31', n: 2, jednotka: 'mesiace', druh: 'procesna' });
  assert.strictEqual(r.koniec, '2027-03-01'); // 28. 2. 2027 nedeľa -> 1. 3.
  const r2 = V.lehota({ udalost: '2027-01-31', n: 1, jednotka: 'mesiace', druh: 'procesna' });
  assert.strictEqual(r2.koniec, '2027-03-01'); // 28. 2. nedeľa -> pondelok
});
t('týždne a roky', () => {
  assert.strictEqual(V.lehota({ udalost: '2026-11-12', n: 2, jednotka: 'tyzdne' }).koniec, '2026-11-26');
  assert.strictEqual(V.lehota({ udalost: '2024-02-29', n: 1, jednotka: 'roky' }).koniec, '2025-02-28');
});
t('pracovné dni', () => {
  // 12. 11. 2026 (štvrtok) + 15 pracovných dní; 17. 11. 2026 nie je dňom pokoja, započíta sa
  const r = V.lehota({ udalost: '2026-11-12', n: 15, jednotka: 'dni', dniTyp: 'pracovne' });
  assert.strictEqual(r.koniec, '2026-12-03');
  assert.ok(r.pracovne);
  assert.ok(r.upozornenia.some((u) => u.includes('17. 11. 2026')));
  // cez Vianoce: 24., 25. 12. (št, pi) a 1. 1., 6. 1. 2027 sa nepočítajú
  const v = V.lehota({ udalost: '2026-12-18', n: 5, jednotka: 'dni', dniTyp: 'pracovne' });
  // 21, 22, 23, 28, 29 -> 29. 12.
  assert.strictEqual(v.koniec, '2026-12-29');
  // udalosť v piatok, 1 pracovný deň -> pondelok
  assert.strictEqual(V.lehota({ udalost: '2026-11-13', n: 1, jednotka: 'dni', dniTyp: 'pracovne' }).koniec, '2026-11-16');
  // pri mesiacoch sa výber pracovných dní ignoruje
  assert.strictEqual(V.lehota({ udalost: '2026-12-09', n: 2, jednotka: 'mesiace', dniTyp: 'pracovne' }).koniec, '2027-02-09');
  assert.strictEqual(V.lehota({ udalost: '2026-11-12', n: 15, jednotka: 'dni', dniTyp: 'pracovne' }).dlzka, '15 pracovných dní');
});
t('chybné vstupy', () => {
  assert.ok(V.lehota({ udalost: '', n: 15, jednotka: 'dni' }).chyba);
  assert.ok(V.lehota({ udalost: '2026-02-30', n: 15, jednotka: 'dni' }).chyba);
  assert.ok(V.lehota({ udalost: '2026-02-03', n: 0, jednotka: 'dni' }).chyba);
});

/* ---------- úroky ---------- */
t('ECB k dátumu', () => {
  assert.strictEqual(V.ecbKDnu(V.parse('2016-03-16')).sadzba, 0);
  assert.strictEqual(V.ecbKDnu(V.parse('2023-10-01')).sadzba, 4.5);
  assert.strictEqual(V.ecbKDnu(V.parse('2026-09-15')).sadzba, 2.4);
  assert.strictEqual(V.ecbKDnu(V.parse('2026-09-16')).sadzba, 2.65);
});
t('úrok občianskoprávny', () => {
  // omeškanie od 1. 1. 2024 (ECB 4,5 %) -> 9,5 %; 1000 € za 366 dní (do 31. 12. 2024)
  const r = V.urok({ istina: 1000, splatnost: '2023-12-31', doDna: '2024-12-31', vztah: 'obciansky' });
  assert.strictEqual(r.sadzba, 9.5);
  assert.strictEqual(r.dni, 366);
  assert.strictEqual(r.suma, 95.26);
});
t('úrok obchodný a zmluvný', () => {
  const r = V.urok({ istina: '2 500,50', splatnost: '2026-06-30', doDna: '2026-07-29', vztah: 'obchodny' });
  assert.strictEqual(r.sadzba, 11.4); // ECB 2,40 + 9
  assert.strictEqual(r.dni, 29);
  assert.strictEqual(r.suma, 22.65); // 2500,50 × 11,4 % × 29 / 365 = 22,648
  const z = V.urok({ istina: 100, splatnost: '2026-01-01', doDna: '2026-01-11', vztah: 'zmluvny', zmluvnaSadzba: '36,5' });
  assert.strictEqual(z.suma, 1);
});
t('úrok pred 1. 2. 2013 sa nepočíta', () => {
  assert.ok(V.urok({ istina: 100, splatnost: '2013-01-15', doDna: '2014-01-01', vztah: 'obciansky' }).chyba);
});
t('poplatok z omeškania', () => {
  const r = V.poplatokZOmeskania({ istina: 100, splatnost: '2026-01-31', doDna: '2026-03-02' });
  // 30 dní × 0,05 € = 1,50; mesiace: od 1. 2. -> 1. 3. začatý druhý -> 2 × 0,83 = 1,66
  assert.strictEqual(r.dni, 30);
  assert.strictEqual(r.mesiace, 2);
  assert.strictEqual(r.suma, 1.66);
});

/* ---------- súdny poplatok ---------- */
t('poplatok 6 % a hranice', () => {
  assert.strictEqual(V.sudnyPoplatok({ druh: 'hodnota', hodnota: 1000 }).suma, 60);
  assert.strictEqual(V.sudnyPoplatok({ druh: 'hodnota', hodnota: 100 }).suma, 25);
  assert.strictEqual(V.sudnyPoplatok({ druh: 'hodnota', hodnota: 1000000 }).suma, 25000);
  assert.strictEqual(V.sudnyPoplatok({ druh: 'hodnota', hodnota: 1000000, obchodna: true }).suma, 50000);
});
t('elektronické podanie', () => {
  assert.strictEqual(V.sudnyPoplatok({ druh: 'hodnota', hodnota: 1000, elektronicky: true }).suma, 30);
  assert.strictEqual(V.sudnyPoplatok({ druh: 'hodnota', hodnota: 10000, elektronicky: true }).suma, 550); // 600 - 50
  assert.strictEqual(V.sudnyPoplatok({ druh: 'neocenitelny', elektronicky: true }).suma, 90);
});
t('upomínacie konanie', () => {
  const r = V.sudnyPoplatok({ druh: 'hodnota', hodnota: 2000, upominacie: true, elektronicky: true });
  assert.strictEqual(r.suma, 60); // 3 % bez zníženia
});
t('vrátenie poplatku', () => {
  assert.strictEqual(V.vratenie({ zaplateny: 600, dovod: 'spatvzatie', kratit: true }).suma, 590);
  assert.strictEqual(V.vratenie({ zaplateny: 2000, dovod: 'spatvzatie', kratit: true }).suma, 1980);
  assert.strictEqual(V.vratenie({ zaplateny: 100, dovod: 'zmierPred', kratit: false }).suma, 90);
  assert.strictEqual(V.vratenie({ zaplateny: 100, dovod: 'zmierPo', kratit: false }).suma, 50);
});

console.log(`${ok} testov prešlo${process.exitCode ? ', niektoré zlyhali' : ''}.`);
