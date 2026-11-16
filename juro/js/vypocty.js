/* Výpočty Kalkulačky VSÚ: lehoty, úroky z omeškania a súdne poplatky.
   Čisté funkcie bez práce s DOM – dajú sa overiť aj v Node (tools/test.js).
   Dátumy sú reťazce 'RRRR-MM-DD', interne sa počíta v UTC, aby nevadil letný čas.
   Každý výpočet vracia aj kroky (pole viet), ktoré sa dajú vložiť do odôvodnenia. */
(function (root) {
  'use strict';

  const PRAVO = root.PRAVO || (typeof require === 'function' ? require('./pravo.js') : null);

  /* ---------- dátumy ---------- */
  const DEN = 86400000;
  const DNI_TYZDNA = ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'];

  function parse(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
    if (!m) return null;
    const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    // odmietne neexistujúce dátumy (napr. 31. 2.)
    return d.getUTCMonth() === +m[2] - 1 ? d : null;
  }
  const iso = (d) => d.toISOString().slice(0, 10);
  const plusDni = (d, n) => new Date(d.getTime() + n * DEN);
  const rozdielDni = (a, b) => Math.round((b - a) / DEN);
  const posledny = (rok, mesiac) => new Date(Date.UTC(rok, mesiac + 1, 0)).getUTCDate();
  // posun o mesiace: deň s rovnakým číslom, ak v cieľovom mesiaci nie je, posledný deň mesiaca
  function plusMesiace(d, n) {
    const r = d.getUTCFullYear(), m = d.getUTCMonth() + n;
    const cielR = r + Math.floor(m / 12), cielM = ((m % 12) + 12) % 12;
    return new Date(Date.UTC(cielR, cielM, Math.min(d.getUTCDate(), posledny(cielR, cielM))));
  }
  function sk(d) {
    return `${d.getUTCDate()}. ${d.getUTCMonth() + 1}. ${d.getUTCFullYear()}`;
  }
  const skDen = (d) => `${DNI_TYZDNA[d.getUTCDay()]} ${sk(d)}`;

  /* ---------- sviatky ---------- */
  // Veľkonočná nedeľa (gregoriánsky kalendár, anonymný algoritmus Meeus/Jones/Butcher)
  function velkaNoc(rok) {
    const a = rok % 19, b = Math.floor(rok / 100), c = rok % 100, d = Math.floor(b / 4), e = b % 4;
    const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
    const mesiac = Math.floor((h + l - 7 * m + 114) / 31), den = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(Date.UTC(rok, mesiac - 1, den));
  }
  const cacheSviatkov = {};
  function sviatkyRoka(rok) {
    if (cacheSviatkov[rok]) return cacheSviatkov[rok];
    const out = {};
    const pevne = PRAVO.dniPokoja(rok);
    Object.keys(pevne).forEach((md) => { out[`${rok}-${md}`] = pevne[md]; });
    const vn = velkaNoc(rok);
    out[iso(plusDni(vn, -2))] = 'Veľký piatok';
    out[iso(plusDni(vn, 1))] = 'Veľkonočný pondelok';
    return (cacheSviatkov[rok] = out);
  }
  // názov dňa pracovného pokoja (sviatku), inak null
  const sviatok = (d) => sviatkyRoka(d.getUTCFullYear())[iso(d)] || null;
  const vikend = (d) => d.getUTCDay() === 0 || d.getUTCDay() === 6;
  const pracovny = (d) => !vikend(d) && !sviatok(d);
  // štátny sviatok, ktorý nie je dňom pracovného pokoja (na upozornenie)
  function sviatokBezPokoja(d) {
    const md = iso(d).slice(5);
    return PRAVO.sviatkyBezPokoja(d.getUTCFullYear())[md] || null;
  }
  function popisDna(d) {
    if (d.getUTCDay() === 6) return 'sobotu';
    if (d.getUTCDay() === 0) return 'nedeľu';
    const s = sviatok(d);
    return s ? `deň pracovného pokoja (${s})` : null;
  }

  /* ---------- lehoty (§ 121 CSP, § 122 OZ) ---------- */
  const JEDNOTKY = {
    dni: ['deň', 'dni', 'dní'],
    tyzdne: ['týždeň', 'týždne', 'týždňov'],
    mesiace: ['mesiac', 'mesiace', 'mesiacov'],
    roky: ['rok', 'roky', 'rokov']
  };
  const PRACOVNE_DNI = ['pracovný deň', 'pracovné dni', 'pracovných dní'];
  function prvyPracovny(d) {
    while (!pracovny(d)) d = plusDni(d, 1);
    return d;
  }
  function sklon(n, tvary) {
    if (n === 1) return tvary[0];
    if (n >= 2 && n <= 4) return tvary[1];
    return tvary[2];
  }

  /**
   * Koniec lehoty.
   * @param {object} p { udalost: 'RRRR-MM-DD', n: číslo, jednotka: 'dni'|'tyzdne'|'mesiace'|'roky', druh: 'procesna'|'hmotnopravna',
   *                     dniTyp: 'kalendarne'|'pracovne' (len pri jednotke 'dni'; predvolené kalendárne) }
   */
  function lehota(p) {
    const ud = parse(p.udalost);
    const n = Number(p.n);
    if (!ud) return { chyba: 'Zadajte dátum udalosti, od ktorej sa lehota počíta.' };
    if (!Number.isInteger(n) || n < 1 || n > 1000) return { chyba: 'Dĺžka lehoty musí byť celé číslo od 1 do 1000.' };
    if (!JEDNOTKY[p.jednotka]) return { chyba: 'Neznáma jednotka lehoty.' };
    const procesna = p.druh !== 'hmotnopravna';
    const predpis = procesna ? '§ 121 CSP' : '§ 122 Občianskeho zákonníka';
    const kroky = [];
    const pracovne = p.jednotka === 'dni' && p.dniTyp === 'pracovne';
    const dlzka = `${n} ${sklon(n, pracovne ? PRACOVNE_DNI : JEDNOTKY[p.jednotka])}`;
    kroky.push(`Deň udalosti rozhodujúcej pre začiatok lehoty: ${skDen(ud)}.`);
    const upozornenia = [];

    let koniec;
    if (pracovne) {
      // počítajú sa len pracovné dni: nie soboty, nedele ani dni pracovného pokoja
      let d = ud, pocet = 0, vikendy = 0;
      const sviatky = [], bezPokoja = [];
      while (pocet < n) {
        d = plusDni(d, 1);
        if (vikend(d)) { vikendy++; continue; }
        const s = sviatok(d);
        if (s) { sviatky.push(`${sk(d)} (${s})`); continue; }
        const b = sviatokBezPokoja(d);
        if (b) bezPokoja.push(`${sk(d)} (${b})`);
        pocet++;
      }
      koniec = d;
      kroky.push(`Lehota sa počíta v pracovných dňoch; deň udalosti sa nezapočítava. Prvý pracovný deň lehoty je ${skDen(prvyPracovny(plusDni(ud, 1)))}.`);
      const vynechane = [];
      if (vikendy) vynechane.push(`${vikendy} ${sklon(vikendy, ['deň', 'dni', 'dní'])} pracovného voľna (soboty a nedele)`);
      if (sviatky.length) vynechane.push(`${sviatky.length} ${sklon(sviatky.length, ['deň', 'dni', 'dní'])} pracovného pokoja: ${sviatky.join(', ')}`);
      if (vynechane.length) kroky.push(`Nezapočítané: ${vynechane.join('; ')}.`);
      kroky.push(`${n}. pracovný deň lehoty je ${skDen(koniec)} (spolu ${rozdielDni(ud, koniec)} kalendárnych dní od udalosti).`);
      if (bezPokoja.length) upozornenia.push(`Ako pracovné dni sa započítali štátne sviatky, ktoré v danom roku nie sú dňami pracovného pokoja: ${bezPokoja.join(', ')}.`);
      upozornenia.push('Lehoty podľa CSP a Občianskeho zákonníka sa počítajú v kalendárnych dňoch. Pracovné dni použite, len ak to predpis alebo rozhodnutie výslovne ustanovuje.');
    } else if (p.jednotka === 'dni') {
      koniec = plusDni(ud, n);
      kroky.push(`Do lehoty určenej podľa dní sa nezapočítava deň udalosti (${predpis}). Lehota začala plynúť ${sk(plusDni(ud, 1))}; ${n}. deň lehoty je ${skDen(koniec)}.`);
    } else if (p.jednotka === 'tyzdne') {
      koniec = plusDni(ud, 7 * n);
      kroky.push(`Lehota určená podľa týždňov končí uplynutím dňa, ktorý sa pomenovaním zhoduje s dňom udalosti (${predpis}): ${skDen(koniec)}.`);
    } else {
      const mes = p.jednotka === 'roky' ? 12 * n : n;
      koniec = plusMesiace(ud, mes);
      const kratsi = koniec.getUTCDate() !== ud.getUTCDate();
      kroky.push(`Lehota určená podľa ${p.jednotka === 'roky' ? 'rokov' : 'mesiacov'} končí uplynutím dňa, ktorý sa číslom zhoduje s dňom udalosti (${predpis})`
        + (kratsi ? `; taký deň v mesiaci nie je, preto je koncom lehoty posledný deň mesiaca: ${skDen(koniec)}.` : `: ${skDen(koniec)}.`));
    }

    const povodny = koniec;
    let posuny = 0;
    while (!pracovny(koniec)) {
      if (++posuny > 30) break;
      koniec = plusDni(koniec, 1);
    }
    if (posuny) {
      kroky.push(`Koniec lehoty pripadol na ${popisDna(povodny)}, preto je posledným dňom lehoty najbližší nasledujúci pracovný deň: ${skDen(koniec)}.`);
    }

    const bez = !pracovne && sviatokBezPokoja(koniec);
    if (bez) upozornenia.push(`Posledný deň lehoty (${sk(koniec)}) je štátny sviatok ${bez}, ktorý v tomto roku nie je dňom pracovného pokoja – lehota sa preto neposúva. Overte, či súd nepostupuje inak.`);
    // sviatok bez pracovného pokoja pred posunom (napr. 17. 11. 2025 v pondelok) – len informácia
    if (koniec.getUTCFullYear() > 2027) upozornenia.push('Sviatky po roku 2027 sú určené podľa práva platného k dátumu overenia údajov; budúce zmeny zákona nie sú zahrnuté.');
    if (ud.getUTCFullYear() < 2013) upozornenia.push('Kalendár sviatkov je overený od roku 2013; pri starších dátumoch výsledok skontrolujte.');
    upozornenia.push(procesna
      ? 'Procesná lehota je zachovaná, ak sa v posledný deň lehoty urobí úkon na súde alebo sa podanie odovzdá orgánu, ktorý ho má povinnosť doručiť (napr. pošte) – § 121 ods. 4 CSP.'
      : 'Hmotnoprávna lehota je zachovaná, len ak prejav vôle dôjde adresátovi najneskôr v posledný deň lehoty; odovzdanie na pošte nestačí.');

    return {
      koniec: iso(koniec),
      koniecText: skDen(koniec),
      zaciatok: iso(plusDni(ud, 1)),
      dlzka,
      predpis,
      pracovne,
      dniSpolu: rozdielDni(ud, koniec),
      posunute: posuny > 0,
      kroky,
      upozornenia
    };
  }

  /* ---------- úroky z omeškania ---------- */
  function ecbKDnu(d) {
    const den = iso(d);
    let sadzba = null, od = null;
    PRAVO.ECB.forEach(([datum, s]) => { if (datum <= den) { sadzba = s; od = datum; } });
    return sadzba === null ? null : { sadzba, od };
  }
  const centy = (x) => Math.round((x + Number.EPSILON) * 100) / 100;
  const cislo = (x) => (typeof x === 'number' ? x : Number(String(x).replace(/\s/g, '').replace(',', '.')));

  /**
   * Úrok z omeškania pre jednu položku.
   * @param {object} p { istina, splatnost, doDna, vztah: 'obciansky'|'obchodny'|'zmluvny', zmluvnaSadzba }
   * Omeškanie začína dňom nasledujúcim po dni splatnosti; počítajú sa dni do dňa doDna vrátane, základ 365 dní.
   */
  function urok(p) {
    const istina = cislo(p.istina);
    const spl = parse(p.splatnost), doD = parse(p.doDna);
    if (!(istina > 0)) return { chyba: 'Zadajte istinu väčšiu ako 0.' };
    if (!spl) return { chyba: 'Zadajte deň splatnosti.' };
    if (!doD) return { chyba: 'Zadajte deň, do ktorého sa úrok počíta.' };
    const prvy = plusDni(spl, 1);
    if (doD < prvy) return { chyba: 'Deň, do ktorého sa úrok počíta, musí byť neskôr ako deň splatnosti.' };
    const dni = rozdielDni(prvy, doD) + 1;
    const kroky = [];
    let sadzba, popisSadzby;

    if (p.vztah === 'zmluvny') {
      sadzba = cislo(p.zmluvnaSadzba);
      if (!(sadzba > 0) || sadzba > 1000) return { chyba: 'Zadajte zmluvnú sadzbu v % ročne.' };
      popisSadzby = `dohodnutá sadzba ${fmtP(sadzba)} % ročne`;
    } else {
      const typ = PRAVO.UROK[p.vztah];
      if (!typ) return { chyba: 'Vyberte druh právneho vzťahu.' };
      if (iso(prvy) < PRAVO.UROK.odDna) {
        return { chyba: 'Omeškanie začalo pred 1. 2. 2013. Pre záväzky vzniknuté pred týmto dňom sa výška úrokov riadi predpismi účinnými k 31. 1. 2013 (§ 10c NV č. 87/1995 Z. z.) – kalkulačka ich nepočíta.' };
      }
      const ecb = ecbKDnu(prvy);
      sadzba = centy(ecb.sadzba + typ.body);
      popisSadzby = `${fmtP(sadzba)} % ročne (základná úroková sadzba ECB ${fmtP(ecb.sadzba)} % platná od ${sk(parse(ecb.od))} + ${typ.body} percentuálnych bodov; ${typ.predpis})`;
    }

    const suma = centy(istina * sadzba / 100 * dni / 365);
    kroky.push(`Splatnosť ${sk(spl)}, dlžník je v omeškaní od ${sk(prvy)}.`);
    kroky.push(`Sadzba úroku z omeškania k prvému dňu omeškania: ${popisSadzby}.`);
    kroky.push(`Obdobie od ${sk(prvy)} do ${sk(doD)}: ${dni} ${sklon(dni, JEDNOTKY.dni)}.`);
    kroky.push(`Úrok = ${eur(istina)} × ${fmtP(sadzba)} % × ${dni} / 365 = ${eur(suma)}.`);
    return { istina, prvyDen: iso(prvy), dni, sadzba, suma, kroky };
  }

  // Poplatok z omeškania (§ 4 NV č. 87/1995 Z. z.): 0,5 promile denne, najmenej 0,83 € za každý i začatý mesiac.
  function poplatokZOmeskania(p) {
    const istina = cislo(p.istina);
    const spl = parse(p.splatnost), doD = parse(p.doDna);
    if (!(istina > 0) || !spl || !doD) return { chyba: 'Zadajte istinu, splatnosť a deň výpočtu.' };
    const prvy = plusDni(spl, 1);
    if (doD < prvy) return { chyba: 'Deň výpočtu musí byť neskôr ako deň splatnosti.' };
    const dni = rozdielDni(prvy, doD) + 1;
    let mesiace = 0;
    while (plusMesiace(prvy, mesiace) <= doD) mesiace++;
    const P = PRAVO.UROK.poplatok;
    const podlaDni = centy(istina * P.promile / 1000 * dni);
    const minimum = centy(P.minMesacne * mesiace);
    const suma = Math.max(podlaDni, minimum);
    return {
      dni, mesiace, suma,
      kroky: [
        `Poplatok z omeškania (${P.predpis}): ${eur(istina)} × 0,5 ‰ × ${dni} ${sklon(dni, JEDNOTKY.dni)} = ${eur(podlaDni)}.`,
        `Najmenej 0,83 € za každý i začatý mesiac omeškania: ${mesiace} × 0,83 € = ${eur(minimum)}.`,
        `Poplatok z omeškania je ${eur(suma)}.`
      ]
    };
  }

  /* ---------- súdny poplatok ---------- */
  /**
   * @param {object} p { druh: 'hodnota'|'neocenitelny', hodnota, obchodna: bool, upominacie: bool, elektronicky: bool }
   */
  function sudnyPoplatok(p) {
    const P = PRAVO.POPLATKY;
    const kroky = [];
    const upozornenia = [];
    let zaklad;

    if (p.druh === 'neocenitelny') {
      zaklad = P.p1b.suma;
      kroky.push(`Predmet konania nemožno oceniť peniazmi: ${eur(zaklad)} (${P.p1b.predpis}).`);
      if (p.upominacie) upozornenia.push('Upomínacie konanie sa týka peňažných nárokov; pri neoceniteľnom predmete sa § 11c neuplatní.');
    } else {
      const h = cislo(p.hodnota);
      if (!(h > 0)) return { chyba: 'Zadajte hodnotu predmetu sporu väčšiu ako 0.' };
      const max = p.obchodna ? P.p1a.maxObchodne : P.p1a.max;
      let percento = P.p1a.percento;
      if (p.upominacie) {
        percento = percento * P.upominacie.percento / 100;
        kroky.push(`V upomínacom konaní je poplatok ${P.upominacie.percento} % z percentnej sadzby (${P.upominacie.predpis}): ${fmtP(P.p1a.percento)} % × ${P.upominacie.percento} % = ${fmtP(percento)} %.`);
      }
      const vypocet = centy(h * percento / 100);
      zaklad = Math.min(Math.max(vypocet, P.p1a.min), max);
      kroky.push(`${fmtP(percento)} % z ${eur(h)} = ${eur(vypocet)} (${P.p1a.predpis}: najmenej ${eur(P.p1a.min)}, najviac ${eur(max)}${p.obchodna ? ' v obchodných veciach' : ''}).`);
      if (zaklad !== vypocet) kroky.push(`Uplatní sa ${zaklad === P.p1a.min ? 'minimálna' : 'maximálna'} suma: ${eur(zaklad)}.`);
      if (p.upominacie) upozornenia.push('Pri upomínacom konaní kalkulačka ponecháva hranice položky 1 písm. a) (najmenej 25 €, najviac 25 000 € / 50 000 €). Ak súd postupuje inak, výsledok upravte.');
    }

    let suma = zaklad;
    if (p.elektronicky) {
      if (p.upominacie && p.druh !== 'neocenitelny') {
        kroky.push(`Zníženie za elektronické podanie sa v upomínacom konaní neuplatní (${P.upominacie.predpis}).`);
      } else {
        const znizenie = Math.min(centy(zaklad * (100 - P.elektronicky.percento) / 100), P.elektronicky.maxZnizenie);
        suma = centy(zaklad - znizenie);
        kroky.push(`Podanie elektronickými prostriedkami do elektronickej schránky: sadzba ${P.elektronicky.percento} %, zníženie najviac o ${eur(P.elektronicky.maxZnizenie)} (${P.elektronicky.predpis}). Zníženie o ${eur(znizenie)}.`);
      }
    }
    kroky.push(`Súdny poplatok je ${eur(suma)}.`);
    upozornenia.push('Rovnakou sadzbou sa spoplatňuje aj odvolanie vo veci samej (poznámka 3 k položke 1 Sadzobníka).');
    return { suma, zaklad, kroky, upozornenia };
  }

  /**
   * Vrátenie súdneho poplatku (§ 11 zákona č. 71/1992 Zb.).
   * @param {object} p { zaplateny, dovod: 'spatvzatie'|'zmierPred'|'zmierPo', kratit: bool }
   */
  function vratenie(p) {
    const V = PRAVO.POPLATKY.vratenie;
    const z = cislo(p.zaplateny);
    if (!(z > 0)) return { chyba: 'Zadajte zaplatený poplatok.' };
    const d = V[p.dovod];
    if (!d) return { chyba: 'Vyberte dôvod vrátenia.' };
    const kroky = [];
    let suma = centy(z * d.percento / 100);
    kroky.push(`Vracia sa ${d.percento} % zo zaplateného poplatku ${eur(z)} = ${eur(suma)} (${d.predpis}).`);
    if (p.kratit) {
      const k = Math.max(centy(suma * V.kratenie.percento / 100), V.kratenie.min);
      const nove = Math.max(centy(suma - k), 0);
      kroky.push(`Krátenie o ${V.kratenie.percento} %, najmenej o ${eur(V.kratenie.min)} (${V.kratenie.predpis}): − ${eur(Math.min(k, suma))}.`);
      suma = nove;
    }
    kroky.push(`Vráti sa ${eur(suma)}.`);
    return { suma, kroky };
  }

  /* ---------- formátovanie ---------- */
  function eur(x) {
    return `${Number(x).toLocaleString('sk-SK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`.replace(/ /g, ' ');
  }
  function fmtP(x) {
    return String(Math.round(x * 1000) / 1000).replace('.', ',');
  }

  const VYPOCTY = {
    parse, iso, sk, skDen, plusDni, plusMesiace, velkaNoc, sviatok, sviatokBezPokoja, pracovny, sviatkyRoka,
    lehota, urok, poplatokZOmeskania, sudnyPoplatok, vratenie, ecbKDnu, eur, fmtP, cislo, centy, sklon, JEDNOTKY
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = VYPOCTY;
  else root.VYPOCTY = VYPOCTY;
})(this);
