/* Health Companion – čistá logika (bez DOM), testovateľná v Node.js.
   Dátumy sú reťazce YYYY-MM-DD v lokálnom čase, časy HH:MM.
   Texty (chyby, popisky) idú cez prekladové jadro i18n/core.js (HCI18N). */
(function (root) {
  'use strict';

  var SCHEMA = 'health-companion';
  var VERSION = 1;
  var LOW_STOCK_DAYS = 7;
  var BACKUP_EVERY_DAYS = 30;
  var SNOOZE_MINUTES = 10;
  var MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
  // Všetky zoznamy záznamov v stave (poradie nie je dôležité).
  var COLLECTIONS = ['meds', 'symptoms', 'problems', 'visits', 'checkups', 'questions', 'measurements', 'labs', 'vaccinations', 'contacts', 'attachments'];

  var I18N = (typeof HCI18N !== 'undefined') ? HCI18N
    : (typeof require === 'function' ? require('./i18n/core.js') : null);
  function T(key, vars) { return I18N ? I18N.t(key, vars) : key; }

  // Orientačné štandardné prehliadky. Intervaly musí potvrdiť lekár.
  var STANDARD_CHECKUPS = [
    { key: 'std1', intervalMonths: 12 },
    { key: 'std2', intervalMonths: 6 },
    { key: 'std3', intervalMonths: 12 },
    { key: 'std4', intervalMonths: 6 },
    { key: 'std5', intervalMonths: 24 }
  ];
  // Názvy z predchádzajúcich verzií (bez stdKey), aby sa štandardné prehliadky nepridali dvakrát.
  var LEGACY_STD_NAMES = {
    std1: 'Preventívna prehliadka u všeobecného lekára',
    std2: 'Kontrola krvného tlaku',
    std3: 'Krvné testy (glukóza, cholesterol)',
    std4: 'Zubár – kontrola a čistenie',
    std5: 'Očný lekár'
  };

  // Typy meraní: jednotka, rozsah platných hodnôt; krvný tlak má aj druhú hodnotu (diastolický).
  var MEASURE_TYPES = {
    bp: { unit: 'mmHg', min: 40, max: 300, two: true },
    pulse: { unit: '/min', min: 20, max: 250 },
    weight: { unit: 'kg', min: 1, max: 500 },
    glucose: { unit: 'mmol/L', min: 0.5, max: 50 },
    temp: { unit: '°C', min: 30, max: 45 }
  };

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function isoDate(d) {
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  function parseISO(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
    if (!m) return null;
    var d = new Date(+m[1], +m[2] - 1, +m[3]);
    return d.getMonth() === +m[2] - 1 ? d : null; // odmietni 2026-02-31
  }

  function isValidTime(s) {
    return /^([01]\d|2[0-3]):[0-5]\d$/.test(s || '');
  }

  function addMonths(iso, months) {
    var d = parseISO(iso);
    if (!d) return null;
    var day = d.getDate();
    d.setDate(1);
    d.setMonth(d.getMonth() + months);
    var last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    d.setDate(Math.min(day, last));
    return isoDate(d);
  }

  function addDays(iso, n) {
    var d = parseISO(iso);
    if (!d) return null;
    d.setDate(d.getDate() + n);
    return isoDate(d);
  }

  function daysBetween(fromIso, toIso) {
    var a = parseISO(fromIso), b = parseISO(toIso);
    return Math.round((b - a) / 86400000);
  }

  // Pripočíta minúty k času HH:MM (cez polnoc sa obalí).
  function addMinutes(time, mins) {
    var p = time.split(':');
    var tot = ((+p[0] * 60 + +p[1] + mins) % 1440 + 1440) % 1440;
    return pad(Math.floor(tot / 60)) + ':' + pad(tot % 60);
  }

  // ---- Lieky ----

  function medActiveOn(med, dateIso) {
    if (!med || med.active === false) return false;
    if (med.startDate && dateIso < med.startDate) return false;
    if (med.endDate && dateIso > med.endDate) return false;
    return true;
  }

  // Stav dávky z uloženej hodnoty: true (stará verzia) alebo 'taken' = užité, 'skipped' = vynechané.
  function doseStatus(value) {
    if (value === true || value === 'taken') return 'taken';
    if (value === 'skipped') return 'skipped';
    return null;
  }

  // taken = { "YYYY-MM-DD": { "medId|HH:MM": 'taken' | 'skipped' } }
  function medDosesOn(meds, taken, dateIso) {
    var doses = [];
    (meds || []).forEach(function (med) {
      if (!medActiveOn(med, dateIso)) return;
      (med.times || []).forEach(function (time) {
        var key = med.id + '|' + time;
        var status = doseStatus(taken && taken[dateIso] ? taken[dateIso][key] : null);
        doses.push({
          key: key,
          medId: med.id,
          name: med.name,
          dose: med.dose || '',
          time: time,
          status: status,
          taken: status === 'taken',
          skipped: status === 'skipped',
          remindersOff: med.remindersOff === true
        });
      });
    });
    doses.sort(function (x, y) {
      return x.time < y.time ? -1 : x.time > y.time ? 1 : (x.name < y.name ? -1 : 1);
    });
    return doses;
  }

  // status: 'taken', 'skipped' alebo null (zrušenie označenia)
  function setDoseStatus(taken, dateIso, key, status) {
    var next = JSON.parse(JSON.stringify(taken || {}));
    if (!next[dateIso]) next[dateIso] = {};
    if (status) next[dateIso][key] = status;
    else delete next[dateIso][key];
    if (Object.keys(next[dateIso]).length === 0) delete next[dateIso];
    return next;
  }

  function setDoseTaken(taken, dateIso, key, value) {
    return setDoseStatus(taken, dateIso, key, value ? 'taken' : null);
  }

  // Dávky, ktoré mali byť užité alebo vynechané (označené) pred "nowTime" a nemajú stav.
  function missedDoses(doses, dateIso, todayIso, nowTime) {
    return doses.filter(function (dose) {
      if (dose.status) return false;
      if (dateIso < todayIso) return true;
      return dateIso === todayIso && dose.time < nowTime;
    });
  }

  // Odloženie pripomienky: snoozes = { "YYYY-MM-DD": { "medId|HH:MM": "HH:MM" } }
  function setSnooze(snoozes, dateIso, key, time) {
    var next = JSON.parse(JSON.stringify(snoozes || {}));
    if (!next[dateIso]) next[dateIso] = {};
    if (time) next[dateIso][key] = time;
    else delete next[dateIso][key];
    if (Object.keys(next[dateIso]).length === 0) delete next[dateIso];
    return next;
  }

  // Čas, kedy sa má dávka pripomenúť (pôvodný alebo odložený).
  function reminderTime(dose, snoozes, dateIso) {
    var s = snoozes && snoozes[dateIso] && snoozes[dateIso][dose.key];
    return s || dose.time;
  }

  // Zásoby: koľko dní vystačí, ak je zadaný počet kusov (stock).
  function daysOfSupply(med) {
    if (!med || typeof med.stock !== 'number') return null;
    var perDay = (med.times || []).length || 1;
    return Math.floor(med.stock / perDay);
  }

  function lowStock(med, thresholdDays) {
    var days = daysOfSupply(med);
    return days !== null && days <= (thresholdDays == null ? LOW_STOCK_DAYS : thresholdDays);
  }

  // Adherencia: z dávok, ktoré už mali byť (dátum < dnes, alebo dnes a čas <= teraz),
  // koľko je užitých, vynechaných a nesplnených. Voliteľne len pre jeden liek (medId).
  function adherence(state, fromIso, toIso, todayIso, nowTime, medId) {
    var r = { due: 0, taken: 0, skipped: 0, missed: 0, percent: null };
    var day = fromIso, guard = 0;
    while (day && day <= toIso && guard++ < 400) {
      medDosesOn(state.meds, state.taken, day).forEach(function (d) {
        if (medId && d.medId !== medId) return;
        if (day > todayIso || (day === todayIso && d.time > nowTime)) return;
        r.due++;
        if (d.status === 'taken') r.taken++;
        else if (d.status === 'skipped') r.skipped++;
        else r.missed++;
      });
      day = addDays(day, 1);
    }
    if (r.due) r.percent = Math.round(r.taken / r.due * 100);
    return r;
  }

  // Zoznam dávok označených ako užité v intervale [fromIso, toIso] (vrátane).
  function medsTakenBetween(state, fromIso, toIso) {
    var out = [];
    var byId = {};
    (state.meds || []).forEach(function (m) { byId[m.id] = m; });
    Object.keys(state.taken || {}).forEach(function (date) {
      if (date < fromIso || date > toIso) return;
      Object.keys(state.taken[date]).forEach(function (key) {
        if (doseStatus(state.taken[date][key]) !== 'taken') return;
        var medId = key.split('|')[0];
        if (byId[medId]) out.push({ date: date, name: byId[medId].name });
      });
    });
    return out.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
  }

  // Lieky užité v dňoch pred príznakom (vrátane dňa príznaku). Vráti unikátne názvy.
  function medsBeforeSymptom(state, symptom, days) {
    var from = addDays(symptom.date, -(days == null ? 3 : days));
    var names = [];
    medsTakenBetween(state, from, symptom.date).forEach(function (x) {
      if (names.indexOf(x.name) === -1) names.push(x.name);
    });
    return names;
  }

  // Najvyššia intenzita pre každý deň, v intervale.
  function severityByDay(symptoms, fromIso, toIso) {
    var byDay = {};
    (symptoms || []).forEach(function (s) {
      if (s.date < fromIso || s.date > toIso) return;
      byDay[s.date] = Math.max(byDay[s.date] || 0, Number(s.severity) || 0);
    });
    return Object.keys(byDay).sort().map(function (d) { return { date: d, max: byDay[d] }; });
  }

  // ---- Preventívne prehliadky ----

  // status: 'unknown' (nikdy evidované), 'overdue', 'soon' (do 30 dní), 'ok'
  function checkupStatus(checkup, todayIso) {
    if (!checkup.lastDate) return { status: 'unknown', dueDate: null, days: null };
    var due = addMonths(checkup.lastDate, checkup.intervalMonths);
    var days = daysBetween(todayIso, due);
    var status = days < 0 ? 'overdue' : days <= 30 ? 'soon' : 'ok';
    return { status: status, dueDate: due, days: days };
  }

  // Štandardné prehliadky, ktoré ešte používateľ nemá. Vracia názov v aktuálnom jazyku.
  function missingStandardCheckups(checkups) {
    var list = checkups || [];
    return STANDARD_CHECKUPS.filter(function (s) {
      return !list.some(function (c) {
        return c.stdKey === s.key || (!c.stdKey && c.name === LEGACY_STD_NAMES[s.key]);
      });
    }).map(function (s) {
      return { key: s.key, name: T(s.key), intervalMonths: s.intervalMonths };
    });
  }

  // Očkovanie: stav podľa termínu ďalšej dávky. Bez termínu -> status null.
  function vaccinationStatus(vacc, todayIso) {
    if (!vacc.nextDate) return { status: null, days: null };
    var days = daysBetween(todayIso, vacc.nextDate);
    return { status: days < 0 ? 'overdue' : days <= 30 ? 'soon' : 'ok', days: days };
  }

  // ---- Merania a výsledky ----

  // Merania daného typu v intervale, zoradené podľa dátumu a času.
  function measurementSeries(list, type, fromIso, toIso) {
    return (list || []).filter(function (m) {
      return m.type === type && m.date >= fromIso && m.date <= toIso;
    }).map(function (m) {
      return { id: m.id, date: m.date, time: m.time || '', value: Number(m.value), value2: m.value2 == null ? null : Number(m.value2), notes: m.notes || '' };
    }).sort(function (a, b) {
      return a.date + a.time < b.date + b.time ? -1 : a.date + a.time > b.date + b.time ? 1 : 0;
    });
  }

  // Stav výsledku voči referenčnému rozsahu: 'low', 'high', 'ok' alebo null (bez rozsahu).
  function labStatus(lab) {
    var hasLow = lab.refLow != null && lab.refLow !== '';
    var hasHigh = lab.refHigh != null && lab.refHigh !== '';
    if (!hasLow && !hasHigh) return null;
    var v = Number(lab.value);
    if (hasLow && v < Number(lab.refLow)) return 'low';
    if (hasHigh && v > Number(lab.refHigh)) return 'high';
    return 'ok';
  }

  // Názvy vyšetrení (bez duplicít, bez ohľadu na veľkosť písmen), so zachovaním prvého zápisu.
  function labNames(labs) {
    var seen = {}, out = [];
    (labs || []).forEach(function (l) {
      var k = String(l.name || '').trim().toLowerCase();
      if (k && !seen[k]) { seen[k] = true; out.push(String(l.name).trim()); }
    });
    return out;
  }

  // Výsledky jedného vyšetrenia, zoradené podľa dátumu.
  function labSeries(labs, name) {
    var key = String(name || '').trim().toLowerCase();
    return (labs || []).filter(function (l) {
      return String(l.name || '').trim().toLowerCase() === key;
    }).sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
  }

  // CSV: hodnoty v úvodzovkách, dvojité úvodzovky sa zdvojujú.
  function csvCell(v) {
    return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
  }

  // CSV meraní. Hodnoty sú v základných jednotkách (mmHg, /min, kg, mmol/L, °C).
  function measurementsCSV(list) {
    var lines = ['date,time,type,value,value2,pulse,unit,notes'];
    (list || []).slice().sort(function (a, b) { return a.date + (a.time || '') < b.date + (b.time || '') ? -1 : 1; }).forEach(function (m) {
      var unit = MEASURE_TYPES[m.type] ? MEASURE_TYPES[m.type].unit : '';
      lines.push([m.date, m.time || '', m.type, m.value, m.value2 == null ? '' : m.value2, hasPulse(m) ? m.pulse : '', unit, m.notes || ''].map(csvCell).join(','));
    });
    return lines.join('\n');
  }

  // ---- Grafy a štatistika meraní ----

  function hasPulse(m) { return m && m.pulse != null && m.pulse !== '' && isFinite(Number(m.pulse)); }
  function timeKey(p) { return p.date + ' ' + (p.time || ''); }
  function byTime(a, b) { var x = timeKey(a), y = timeKey(b); return x < y ? -1 : x > y ? 1 : 0; }

  // Merania s rovnakým dátumom a časom sa spoja do jedného bodu s priemernou hodnotou. Výsledok je zoradený.
  function averageSameTime(list) {
    var groups = {}, order = [];
    (list || []).forEach(function (p) {
      var k = timeKey(p);
      if (!groups[k]) { groups[k] = { date: p.date, time: p.time || '', sum: 0, n: 0, sum2: 0, n2: 0 }; order.push(k); }
      var g = groups[k];
      g.sum += Number(p.value); g.n++;
      if (p.value2 != null && p.value2 !== '' && !isNaN(p.value2)) { g.sum2 += Number(p.value2); g.n2++; }
    });
    return order.map(function (k) {
      var g = groups[k];
      return { date: g.date, time: g.time, value: g.sum / g.n, value2: g.n2 ? g.sum2 / g.n2 : null };
    }).sort(byTime);
  }

  // Pulz z oboch zdrojov: samostatné meranie tepu aj pulz zapísaný pri krvnom tlaku.
  function pulseSeries(list, fromIso, toIso) {
    return (list || []).filter(function (m) {
      return m.date >= fromIso && m.date <= toIso && (m.type === 'pulse' || (m.type === 'bp' && hasPulse(m)));
    }).map(function (m) {
      return { date: m.date, time: m.time || '', value: Number(m.type === 'pulse' ? m.value : m.pulse), value2: null };
    }).sort(byTime);
  }

  // Dátumy, ktoré patria do grafu daného typu (pri tepe aj pulz z merania tlaku).
  function measureDates(list, type) {
    return (list || []).filter(function (m) {
      return m.type === type || (type === 'pulse' && m.type === 'bp' && hasPulse(m));
    }).map(function (m) { return m.date; }).sort();
  }

  // Rozsah grafu. period: 'auto' (podľa meraní, max. 365 dní), '7', '30', '90' (dní do dnes), 'all'. Vždy aspoň 7 dní.
  function chartRange(dates, todayIso, period) {
    var from, to;
    if (period === '7' || period === '30' || period === '90') {
      to = todayIso; from = addDays(todayIso, -(Number(period) - 1));
      return { from: from, to: to };
    }
    to = dates.length ? dates[dates.length - 1] : todayIso;
    from = dates.length ? dates[0] : addDays(todayIso, -6);
    if (period !== 'all' && from < addDays(to, -365)) from = addDays(to, -365);
    if (daysBetween(from, to) < 6) to = addDays(from, 6);
    return { from: from, to: to };
  }

  // Priemer, minimum a maximum (pri tlaku aj pre dolnú hodnotu).
  function measureStats(points) {
    var v = [], v2 = [];
    (points || []).forEach(function (p) {
      if (isNumber(p.value)) v.push(Number(p.value));
      if (p.value2 != null && isNumber(p.value2)) v2.push(Number(p.value2));
    });
    function agg(a) {
      if (!a.length) return null;
      var s = 0; a.forEach(function (x) { s += x; });
      return { avg: s / a.length, min: Math.min.apply(null, a), max: Math.max.apply(null, a) };
    }
    return { n: v.length, main: agg(v), second: agg(v2) };
  }

  // Kategória tlaku podľa ESC (ambulantné hranice). Rozhoduje vyššia z kategórií horného a dolného tlaku.
  var BP_CLASSES = ['optimal', 'normal', 'highNormal', 'h1', 'h2', 'h3'];
  function bpClass(sys, dia) {
    sys = Number(sys); dia = Number(dia);
    if (!isFinite(sys) || !isFinite(dia)) return null;
    function lvl(v, limits) { var i = 0; while (i < limits.length && v >= limits[i]) i++; return i; }
    var a = lvl(sys, [120, 130, 140, 160, 180]), b = lvl(dia, [80, 85, 90, 100, 110]);
    return BP_CLASSES[Math.max(a, b)];
  }

  // Počet meraní tlaku od hranice vyššie (doma podľa ESC 135/85).
  function bpHighCount(points, sysLimit, diaLimit) {
    return (points || []).filter(function (p) { return Number(p.value) >= sysLimit || (p.value2 != null && Number(p.value2) >= diaLimit); }).length;
  }
  // Počet hodnôt mimo rozsahu (napr. tep mimo 60–100).
  function outsideCount(points, lo, hi) {
    return (points || []).filter(function (p) { return Number(p.value) < lo || Number(p.value) > hi; }).length;
  }

  // ---- Jednotky (údaje sa ukladajú v základných jednotkách mmol/L a °C) ----
  var GLUCOSE_MGDL = 18.016;
  function displayUnit(type, units) {
    units = units || {};
    if (type === 'glucose' && units.glucose === 'mgdl') return 'mg/dL';
    if (type === 'temp' && units.temp === 'f') return '°F';
    return MEASURE_TYPES[type] ? MEASURE_TYPES[type].unit : '';
  }
  function toDisplay(type, v, units) {
    if (v == null || v === '' || !isFinite(Number(v))) return v;
    v = Number(v); units = units || {};
    if (type === 'glucose' && units.glucose === 'mgdl') return v * GLUCOSE_MGDL;
    if (type === 'temp' && units.temp === 'f') return v * 9 / 5 + 32;
    return v;
  }
  function fromDisplay(type, v, units) {
    if (v == null || v === '' || !isFinite(Number(v))) return v;
    v = Number(v); units = units || {};
    if (type === 'glucose' && units.glucose === 'mgdl') return Math.round(v / GLUCOSE_MGDL * 1000) / 1000;
    if (type === 'temp' && units.temp === 'f') return Math.round((v - 32) * 5 / 9 * 100) / 100;
    return v;
  }

  // BMI z hmotnosti (kg) a výšky (cm), zaokrúhlené na desatiny; bez výšky null.
  function bmi(weightKg, heightCm) {
    var w = Number(weightKg), h = Number(heightCm) / 100;
    if (!(w > 0) || !(h > 0)) return null;
    return Math.round(w / (h * h) * 10) / 10;
  }

  // Pripomienka merania: časy, ktoré v daný deň ešte čakajú.
  // Čas sa vynechá, ak už existuje meranie daného typu do 2 hodín pred ním.
  function measureRemindersFor(cfg, list, day) {
    if (!cfg || !cfg.on || !MEASURE_TYPES[cfg.type]) return [];
    var done = (list || []).filter(function (m) {
      return m.date === day && m.time && (m.type === cfg.type || (cfg.type === 'pulse' && m.type === 'bp' && hasPulse(m)));
    }).map(function (m) { return toMinutes(m.time); });
    return (cfg.times || []).filter(isValidTime).slice().sort().filter(function (rt) {
      var r = toMinutes(rt);
      return !done.some(function (x) { return x >= r - 120 && x <= r; });
    });
  }
  function toMinutes(tm) { var p = String(tm).split(':'); return Number(p[0]) * 60 + Number(p[1]); }

  // ---- Validácia ----

  function requireText(value, label) {
    if (!value || !String(value).trim()) return T('errRequired', { label: label });
    return null;
  }

  function isNumber(v) {
    return v !== '' && v != null && isFinite(Number(v));
  }

  function validateMed(m) {
    return requireText(m.name, T('labelMedName')) ||
      (m.times && m.times.length ? (m.times.every(isValidTime) ? null : T('errTimeFormat')) : T('errNeedTime')) ||
      (m.startDate && !parseISO(m.startDate) ? T('errStartDate') : null) ||
      (m.endDate && !parseISO(m.endDate) ? T('errEndDate') : null) ||
      (m.startDate && m.endDate && m.endDate < m.startDate ? T('errEndBeforeStart') : null) ||
      (m.stock != null && !(Number.isInteger(m.stock) && m.stock >= 0) ? T('errStock') : null);
  }

  function validateSymptom(s) {
    return requireText(s.name, T('labelSymptomName')) ||
      (parseISO(s.date) ? null : T('errDate')) ||
      (s.time && !isValidTime(s.time) ? T('errTime') : null) ||
      (s.severity >= 1 && s.severity <= 10 ? null : T('errSeverity'));
  }

  function validateVisit(v) {
    return (parseISO(v.date) ? null : T('errVisitDate')) ||
      (v.nextVisit && !parseISO(v.nextVisit) ? T('errNextVisit') : null) ||
      (requireText(v.doctor || v.specialty, T('labelDoctorOrSpecialty')));
  }

  function validateCheckup(c) {
    return requireText(c.name, T('labelCheckupName')) ||
      (c.intervalMonths >= 1 && c.intervalMonths <= 120 ? null : T('errInterval')) ||
      (c.lastDate && !parseISO(c.lastDate) ? T('errLastCheckup') : null);
  }

  function validateMeasurement(m) {
    var type = MEASURE_TYPES[m.type];
    if (!type) return T('errMeasureType');
    if (!parseISO(m.date)) return T('errDate');
    if (m.time && !isValidTime(m.time)) return T('errTime');
    if (!isNumber(m.value) || Number(m.value) < type.min || Number(m.value) > type.max) return T('errMeasureValue');
    if (type.two && (!isNumber(m.value2) || Number(m.value2) < 20 || Number(m.value2) > 200)) return T('errMeasureValue2');
    if (type.two && m.pulse != null && m.pulse !== '' && (!isNumber(m.pulse) || Number(m.pulse) < 20 || Number(m.pulse) > 250)) return T('errMeasurePulse');
    return null;
  }

  function validateLab(l) {
    return requireText(l.name, T('labelLabName')) ||
      (parseISO(l.date) ? null : T('errDate')) ||
      (isNumber(l.value) ? null : T('errLabValue')) ||
      (l.refLow !== '' && l.refLow != null && !isNumber(l.refLow) ? T('errLabValue') : null) ||
      (l.refHigh !== '' && l.refHigh != null && !isNumber(l.refHigh) ? T('errLabValue') : null) ||
      (isNumber(l.refLow) && isNumber(l.refHigh) && Number(l.refLow) > Number(l.refHigh) ? T('errLabValue') : null);
  }

  function validateVaccination(v) {
    return requireText(v.name, T('labelVaccName')) ||
      (parseISO(v.date) ? null : T('errVaccDate')) ||
      (v.nextDate && !parseISO(v.nextDate) ? T('errVaccNext') : null);
  }

  function validateContact(c) {
    return requireText(c.name, T('labelContactName'));
  }

  // Príloha: len fotky a PDF, najviac 5 MB.
  function validateFile(mime, size) {
    if (!size) return T('errAttFile');
    if (!(String(mime || '').indexOf('image/') === 0 || mime === 'application/pdf')) return T('errAttType');
    if (size > MAX_ATTACHMENT_BYTES) return T('errAttSize');
    return null;
  }

  // ---- Otázky a príprava na návštevu ----

  // Otázky, ktoré patria k návšteve (alebo nie sú priradené k žiadnej) a nie sú vyriešené.
  function openQuestionsFor(questions, visitId) {
    return (questions || []).filter(function (q) {
      if (q.done) return false;
      return !visitId || !q.visitId || q.visitId === visitId;
    });
  }

  function questionsText(questions, visitLabel) {
    var lines = [T('questionsHeader') + (visitLabel ? ' (' + visitLabel + ')' : '') + ':', ''];
    (questions || []).forEach(function (q, i) {
      lines.push((i + 1) + '. ' + q.text);
    });
    if (!questions || !questions.length) lines.push(T('noQuestionsYet'));
    return lines.join('\n');
  }

  // Zhrnutie pre lekára pred návštevou: lieky, problémy, príznaky za 28 dní a otázky.
  // Stav problému sa ukladá ako 'aktívny' (filter je podľa uloženej hodnoty, nie podľa jazyka).
  function prepSummary(state, visit, todayIso) {
    var lines = [];
    var from = addDays(todayIso, -28);
    var meds = (state.meds || []).filter(function (m) { return medActiveOn(m, todayIso); });
    lines.push(T('prepCurrentMeds'));
    lines.push(meds.length ? meds.map(function (m) {
      return '- ' + m.name + (m.dose ? ' (' + m.dose + ')' : '') + ', ' + (m.times || []).join(', ');
    }).join('\n') : '- ' + T('none'));
    var problems = (state.problems || []).filter(function (p) { return p.status === 'aktívny'; });
    lines.push('', T('prepProblems'));
    lines.push(problems.length ? problems.map(function (p) { return '- ' + p.name; }).join('\n') : '- ' + T('none'));
    var symptoms = (state.symptoms || []).filter(function (s) { return s.date >= from && s.date <= todayIso; });
    lines.push('', T('prepSymptoms'));
    lines.push(symptoms.length ? symptoms.sort(function (a, b) { return a.date < b.date ? -1 : 1; }).map(function (s) {
      return '- ' + s.date + ' ' + s.name + ' (' + s.severity + '/10)';
    }).join('\n') : '- ' + T('none'));
    var questions = openQuestionsFor(state.questions, visit ? visit.id : null);
    lines.push('', T('prepQuestions'));
    lines.push(questions.length ? questions.map(function (q, i) { return (i + 1) + '. ' + q.text; }).join('\n') : '- ' + T('none'));
    return lines.join('\n');
  }

  // ---- Údaje: export / import / zlúčenie / zálohovanie ----

  function emptyState() {
    var s = { taken: {}, snoozes: {}, settings: {} };
    COLLECTIONS.forEach(function (k) { s[k] = []; });
    return s;
  }

  function normalizeState(raw) {
    var s = emptyState();
    if (!raw || typeof raw !== 'object') return s;
    COLLECTIONS.forEach(function (k) {
      if (Array.isArray(raw[k])) s[k] = raw[k].filter(function (x) { return x && typeof x === 'object'; });
    });
    if (raw.taken && typeof raw.taken === 'object') s.taken = raw.taken;
    if (raw.snoozes && typeof raw.snoozes === 'object') s.snoozes = raw.snoozes;
    if (raw.settings && typeof raw.settings === 'object') s.settings = raw.settings;
    return s;
  }

  function dataCount(state) {
    return COLLECTIONS.reduce(function (n, k) {
      return n + (state[k] ? state[k].length : 0);
    }, 0);
  }

  // Zlúči dve stavy: záznamy s rovnakým id nahradí záznam z incoming, ostatné sa pridajú.
  function mergeState(current, incoming) {
    var a = normalizeState(current), b = normalizeState(incoming);
    var out = emptyState();
    COLLECTIONS.forEach(function (k) {
      var byId = {}, order = [];
      a[k].concat(b[k]).forEach(function (item) {
        if (!(item.id in byId)) order.push(item.id);
        byId[item.id] = item;
      });
      out[k] = order.map(function (id) { return byId[id]; });
    });
    Object.keys(a.taken).concat(Object.keys(b.taken)).forEach(function (date) {
      out.taken[date] = Object.assign({}, a.taken[date], b.taken[date]);
    });
    Object.keys(a.snoozes).concat(Object.keys(b.snoozes)).forEach(function (date) {
      out.snoozes[date] = Object.assign({}, a.snoozes[date], b.snoozes[date]);
    });
    out.settings = Object.assign({}, b.settings, a.settings);
    return out;
  }

  // Záloha je potrebná, ak existujú údaje a posledný export bol pred aspoň 30 dňami (alebo nikdy).
  function backupDue(state, lastExportIso, todayIso) {
    if (dataCount(state) === 0) return false;
    if (!lastExportIso) return true;
    return daysBetween(lastExportIso, todayIso) >= BACKUP_EVERY_DAYS;
  }

  // attachmentData: { idPrílohy: base64 } – obsah príloh (voliteľné).
  function exportJSON(state, attachmentData) {
    var out = { schema: SCHEMA, version: VERSION, exportedAt: new Date().toISOString(), data: normalizeState(state) };
    if (attachmentData && Object.keys(attachmentData).length) out.attachmentData = attachmentData;
    return JSON.stringify(out, null, 2);
  }

  // Zašifrovaná záloha (obálka z securebox.js) sa najprv musí rozšifrovať.
  function isEncryptedBackup(text) {
    try { var o = JSON.parse(text); return !!(o && o.encrypted === true); } catch (e) { return false; }
  }

  // Vyhodí chybu, ak súbor nie je zálohou tejto appky. Vracia { state, attachmentData }.
  function importJSON(text) {
    var obj;
    try { obj = JSON.parse(text); } catch (e) { throw new Error(T('errImportJson')); }
    if (!obj || obj.schema !== SCHEMA || !obj.data) throw new Error(T('errImportNotBackup'));
    if (obj.version !== VERSION) throw new Error(T('errImportVersion', { v: obj.version }));
    return { state: normalizeState(obj.data), attachmentData: obj.attachmentData || {} };
  }

  function newId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  // ---- Tiesňové čísla podľa krajiny (ISO kód). Predvolené je 112 (EÚ). ----
  // Overte pred vydaním; ide o všeobecné tiesňové číslo krajiny.
  var EMERGENCY_DEFAULT = '112';
  var EMERGENCY_NUMBERS = {
    AT: '112', BE: '112', BG: '112', CH: '112', CY: '112', CZ: '112', DE: '112', DK: '112', EE: '112',
    ES: '112', FI: '112', FR: '112', GR: '112', HR: '112', HU: '112', IE: '112', IT: '112', LT: '112',
    LU: '112', LV: '112', MT: '112', NL: '112', NO: '112', PL: '112', PT: '112', RO: '112', SE: '112',
    SI: '112', SK: '112', IN: '112', RU: '112', UA: '112', TR: '112',
    GB: '999', AU: '000', NZ: '111', US: '911', CA: '911', MX: '911', JP: '119', KR: '119', CN: '120', BR: '192'
  };

  // Číslo pre zvolenú krajinu; bez voľby alebo neznámy kód -> 112.
  function emergencyNumber(code) {
    return (code && EMERGENCY_NUMBERS[code]) || EMERGENCY_DEFAULT;
  }

  var api = {
    emergencyNumber: emergencyNumber, EMERGENCY_NUMBERS: EMERGENCY_NUMBERS, EMERGENCY_DEFAULT: EMERGENCY_DEFAULT,
    isoDate: isoDate, parseISO: parseISO, isValidTime: isValidTime, addMonths: addMonths, addDays: addDays, daysBetween: daysBetween, addMinutes: addMinutes,
    medActiveOn: medActiveOn, medDosesOn: medDosesOn, doseStatus: doseStatus, setDoseStatus: setDoseStatus, setDoseTaken: setDoseTaken, missedDoses: missedDoses,
    setSnooze: setSnooze, reminderTime: reminderTime, SNOOZE_MINUTES: SNOOZE_MINUTES,
    daysOfSupply: daysOfSupply, lowStock: lowStock, adherence: adherence,
    medsTakenBetween: medsTakenBetween, medsBeforeSymptom: medsBeforeSymptom,
    severityByDay: severityByDay,
    checkupStatus: checkupStatus, missingStandardCheckups: missingStandardCheckups, STANDARD_CHECKUPS: STANDARD_CHECKUPS,
    vaccinationStatus: vaccinationStatus,
    MEASURE_TYPES: MEASURE_TYPES, measurementSeries: measurementSeries, measurementsCSV: measurementsCSV,
    averageSameTime: averageSameTime, pulseSeries: pulseSeries, measureDates: measureDates, chartRange: chartRange,
    measureStats: measureStats, BP_CLASSES: BP_CLASSES, bpClass: bpClass, bpHighCount: bpHighCount, outsideCount: outsideCount,
    displayUnit: displayUnit, toDisplay: toDisplay, fromDisplay: fromDisplay, bmi: bmi, measureRemindersFor: measureRemindersFor,
    labStatus: labStatus, labNames: labNames, labSeries: labSeries,
    validateMed: validateMed, validateSymptom: validateSymptom, validateVisit: validateVisit, validateCheckup: validateCheckup,
    validateMeasurement: validateMeasurement, validateLab: validateLab, validateVaccination: validateVaccination,
    validateContact: validateContact, validateFile: validateFile, MAX_ATTACHMENT_BYTES: MAX_ATTACHMENT_BYTES,
    openQuestionsFor: openQuestionsFor, questionsText: questionsText, prepSummary: prepSummary,
    emptyState: emptyState, normalizeState: normalizeState, dataCount: dataCount, mergeState: mergeState, backupDue: backupDue,
    exportJSON: exportJSON, importJSON: importJSON, isEncryptedBackup: isEncryptedBackup,
    COLLECTIONS: COLLECTIONS,
    newId: newId
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.HC = api;
})(typeof self !== 'undefined' ? self : this);
