/* Právne údaje, z ktorých počíta Kalkulačka VSÚ: sviatky, sadzby ECB, úroky z omeškania a súdne poplatky.
   Pri zmene predpisu uprav údaje TU (nie v kóde výpočtov), aktualizuj OVERENE a zvýš verziu CACHE v sw.js.
   Každá sadzba má odkaz na predpis, aby sa dala skontrolovať. */
(function (root) {
  'use strict';

  const PRAVO = {
    // Dátum, ku ktorému boli údaje naposledy overené v konsolidovaných zneniach predpisov.
    OVERENE: '2026-11-12',

    /* Základná úroková sadzba ECB (sadzba hlavných refinančných operácií) v % p. a.
       Dátum = deň účinnosti zmeny. Stačí história od roku 2012: kalkulačka počíta len záväzky
       vzniknuté od 1. 2. 2013 (§ 10c NV č. 87/1995 Z. z.). Novú zmenu pridaj na koniec zoznamu. */
    ECB: [
      ['2012-07-11', 0.75],
      ['2013-05-08', 0.50],
      ['2013-11-13', 0.25],
      ['2014-06-11', 0.15],
      ['2014-09-10', 0.05],
      ['2016-03-16', 0.00],
      ['2022-07-27', 0.50],
      ['2022-09-14', 1.25],
      ['2022-11-02', 2.00],
      ['2022-12-21', 2.50],
      ['2023-02-08', 3.00],
      ['2023-03-22', 3.50],
      ['2023-05-10', 3.75],
      ['2023-06-21', 4.00],
      ['2023-08-02', 4.25],
      ['2023-09-20', 4.50],
      ['2024-06-12', 4.25],
      ['2024-09-18', 3.65],
      ['2024-10-23', 3.40],
      ['2024-12-18', 3.15],
      ['2025-02-05', 2.90],
      ['2025-03-12', 2.65],
      ['2025-04-23', 2.40],
      ['2025-06-11', 2.15],
      ['2026-06-17', 2.40],
      ['2026-09-16', 2.65]
    ],

    /* Úroky z omeškania: o koľko percentuálnych bodov je sadzba vyššia ako sadzba ECB
       platná k prvému dňu omeškania (sadzba sa počas omeškania nemení). */
    UROK: {
      obciansky: {
        nazov: 'Občianskoprávny vzťah',
        body: 5,
        predpis: '§ 517 ods. 2 Občianskeho zákonníka v spojení s § 3 NV č. 87/1995 Z. z.'
      },
      obchodny: {
        nazov: 'Obchodnoprávny vzťah',
        body: 9,
        predpis: '§ 369 ods. 2 Obchodného zákonníka v spojení s § 1 NV č. 21/2013 Z. z.'
      },
      // § 369c Obchodného zákonníka v spojení s § 2 NV č. 21/2013 Z. z.; nepoužije sa pri spotrebiteľskej zmluve
      pausal: 40,
      pausalPredpis: '§ 369c Obchodného zákonníka v spojení s § 2 NV č. 21/2013 Z. z.',
      // pre záväzky vzniknuté pred týmto dňom platia predpisy účinné k 31. 1. 2013 (§ 10c NV č. 87/1995 Z. z.)
      odDna: '2013-02-01',
      // § 4 NV č. 87/1995 Z. z. – poplatok z omeškania (napr. nájom bytu, § 697 OZ)
      poplatok: { promile: 0.5, minMesacne: 0.83, predpis: '§ 4 NV č. 87/1995 Z. z.' }
    },

    /* Súdne poplatky – zákon č. 71/1992 Zb., Sadzobník súdnych poplatkov.
       Overené podľa znenia účinného od 12. 6. 2026. */
    POPLATKY: {
      // Položka 1 písm. a): z ceny predmetu konania alebo hodnoty predmetu sporu
      p1a: { percento: 6, min: 25, max: 25000, maxObchodne: 50000, predpis: 'položka 1 písm. a) Sadzobníka súdnych poplatkov' },
      // Položka 1 písm. b): ak nemožno predmet konania oceniť peniazmi
      p1b: { suma: 140, predpis: 'položka 1 písm. b) Sadzobníka súdnych poplatkov' },
      // § 6 ods. 3: podanie elektronickými prostriedkami do elektronickej schránky – 50 % sadzby, zníženie najviac o 50 eur
      elektronicky: { percento: 50, maxZnizenie: 50, predpis: '§ 6 ods. 3 zákona č. 71/1992 Zb.' },
      // § 11c ods. 1: upomínacie konanie – 50 % z percentnej sadzby; § 6 ods. 3 sa neuplatní
      upominacie: { percento: 50, predpis: '§ 11c ods. 1 zákona č. 71/1992 Zb.' },
      // § 11: vrátenie poplatku
      vratenie: {
        kratenie: { percento: 1, min: 10, predpis: '§ 11 ods. 4 zákona č. 71/1992 Zb.' },
        zmierPred: { percento: 90, predpis: '§ 11 ods. 7 zákona č. 71/1992 Zb.' },
        zmierPo: { percento: 50, predpis: '§ 11 ods. 7 zákona č. 71/1992 Zb.' },
        spatvzatie: { percento: 100, predpis: '§ 11 ods. 3 zákona č. 71/1992 Zb.' }
      }
    },

    /* Lehoty – predvoľby (dĺžka a jednotka). */
    LEHOTY: [
      { id: 'odvolanie', nazov: 'Odvolanie', n: 15, jednotka: 'dni', druh: 'procesna', predpis: '§ 362 ods. 1 CSP' },
      { id: 'odpor', nazov: 'Odpor proti platobnému rozkazu', n: 15, jednotka: 'dni', druh: 'procesna', predpis: '§ 267 ods. 1 CSP' },
      { id: 'staznost', nazov: 'Sťažnosť proti rozhodnutiu VSÚ', n: 15, jednotka: 'dni', druh: 'procesna', predpis: '§ 239 a nasl. CSP' },
      { id: 'dovolanie', nazov: 'Dovolanie', n: 2, jednotka: 'mesiace', druh: 'procesna', predpis: '§ 427 ods. 1 CSP' },
      { id: 'vlastna', nazov: 'Vlastná lehota', n: 15, jednotka: 'dni', druh: 'procesna', predpis: '' }
    ]
  };

  /* Dni pracovného pokoja podľa zákona č. 241/1993 Z. z. v znení platnom v danom roku.
     Vracia mapu 'MM-DD' -> názov (bez pohyblivých veľkonočných sviatkov, tie dopĺňa vypocty.js).
     Zmeny: 1. 9. nie je dňom pracovného pokoja od 1. 1. 2024 (530/2023 Z. z.),
     17. 11. od 1. 11. 2025 (261/2025 Z. z.), 8. 5. a 15. 9. nie sú dňami pracovného pokoja len v roku 2026 (§ 4b).
     28. 10. je štátny sviatok, ale nikdy nebol dňom pracovného pokoja. */
  PRAVO.dniPokoja = function (rok) {
    const d = {
      '01-01': 'Deň vzniku Slovenskej republiky',
      '01-06': 'Zjavenie Pána (Traja králi)',
      '05-01': 'Sviatok práce',
      '07-05': 'Sviatok svätého Cyrila a svätého Metoda',
      '08-29': 'Výročie Slovenského národného povstania',
      '11-01': 'Sviatok Všetkých svätých',
      '12-24': 'Štedrý deň',
      '12-25': 'Prvý sviatok vianočný',
      '12-26': 'Druhý sviatok vianočný'
    };
    if (rok !== 2026) {
      d['05-08'] = 'Deň víťazstva nad fašizmom';
      d['09-15'] = 'Sedembolestná Panna Mária';
    }
    if (rok <= 2023) d['09-01'] = 'Deň Ústavy Slovenskej republiky';
    if (rok <= 2024) d['11-17'] = 'Deň boja za slobodu a demokraciu';
    return d;
  };

  /* Sviatky, ktoré v danom roku NIE SÚ dňom pracovného pokoja (len na upozornenie používateľa). */
  PRAVO.sviatkyBezPokoja = function (rok) {
    const d = { '10-28': 'Deň vzniku samostatného česko-slovenského štátu' };
    if (rok === 2026) {
      d['05-08'] = 'Deň víťazstva nad fašizmom';
      d['09-15'] = 'Sedembolestná Panna Mária';
    }
    if (rok >= 2024) d['09-01'] = 'Deň Ústavy Slovenskej republiky';
    if (rok >= 2025) d['11-17'] = 'Deň boja za slobodu a demokraciu';
    return d;
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = PRAVO;
  else root.PRAVO = PRAVO;
})(this);
