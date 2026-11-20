/* Health Companion – čistá logika (bez DOM), testovateľná v Node.js.
   Dátumy sú reťazce YYYY-MM-DD v lokálnom čase, časy HH:MM.
   Texty (chyby, popisky) idú cez prekladové jadro i18n/core.js (HCI18N). */
(function (root) {
  'use strict';

  var SCHEMA = 'health-companion';
  var VERSION = 1;
  var LOW_STOCK_DAYS = 7;
  var BACKUP_EVERY_DAYS = 30;

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
          skipped: status === 'skipped'
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

  // ---- Validácia ----

  function requireText(value, label) {
    if (!value || !String(value).trim()) return T('errRequired', { label: label });
    return null;
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
    return { meds: [], taken: {}, symptoms: [], problems: [], visits: [], checkups: [], questions: [], settings: {} };
  }

  function normalizeState(raw) {
    var s = emptyState();
    if (!raw || typeof raw !== 'object') return s;
    ['meds', 'symptoms', 'problems', 'visits', 'checkups', 'questions'].forEach(function (k) {
      if (Array.isArray(raw[k])) s[k] = raw[k].filter(function (x) { return x && typeof x === 'object'; });
    });
    if (raw.taken && typeof raw.taken === 'object') s.taken = raw.taken;
    if (raw.settings && typeof raw.settings === 'object') s.settings = raw.settings;
    return s;
  }

  function dataCount(state) {
    return ['meds', 'symptoms', 'problems', 'visits', 'checkups', 'questions'].reduce(function (n, k) {
      return n + (state[k] ? state[k].length : 0);
    }, 0);
  }

  // Zlúči dve stavy: záznamy s rovnakým id nahradí záznam z incoming, ostatné sa pridajú.
  function mergeState(current, incoming) {
    var a = normalizeState(current), b = normalizeState(incoming);
    var out = emptyState();
    ['meds', 'symptoms', 'problems', 'visits', 'checkups', 'questions'].forEach(function (k) {
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
    out.settings = Object.assign({}, b.settings, a.settings);
    return out;
  }

  // Záloha je potrebná, ak existujú údaje a posledný export bol pred aspoň 30 dňami (alebo nikdy).
  function backupDue(state, lastExportIso, todayIso) {
    if (dataCount(state) === 0) return false;
    if (!lastExportIso) return true;
    return daysBetween(lastExportIso, todayIso) >= BACKUP_EVERY_DAYS;
  }

  function exportJSON(state) {
    return JSON.stringify({ schema: SCHEMA, version: VERSION, exportedAt: new Date().toISOString(), data: normalizeState(state) }, null, 2);
  }

  // Vyhodí chybu, ak súbor nie je zálohou tejto appky.
  function importJSON(text) {
    var obj;
    try { obj = JSON.parse(text); } catch (e) { throw new Error(T('errImportJson')); }
    if (!obj || obj.schema !== SCHEMA || !obj.data) throw new Error(T('errImportNotBackup'));
    if (obj.version !== VERSION) throw new Error(T('errImportVersion', { v: obj.version }));
    return normalizeState(obj.data);
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
    isoDate: isoDate, parseISO: parseISO, isValidTime: isValidTime, addMonths: addMonths, addDays: addDays, daysBetween: daysBetween,
    medActiveOn: medActiveOn, medDosesOn: medDosesOn, doseStatus: doseStatus, setDoseStatus: setDoseStatus, setDoseTaken: setDoseTaken, missedDoses: missedDoses,
    daysOfSupply: daysOfSupply, lowStock: lowStock, medsTakenBetween: medsTakenBetween, medsBeforeSymptom: medsBeforeSymptom,
    severityByDay: severityByDay,
    checkupStatus: checkupStatus, missingStandardCheckups: missingStandardCheckups, STANDARD_CHECKUPS: STANDARD_CHECKUPS,
    validateMed: validateMed, validateSymptom: validateSymptom, validateVisit: validateVisit, validateCheckup: validateCheckup,
    openQuestionsFor: openQuestionsFor, questionsText: questionsText, prepSummary: prepSummary,
    emptyState: emptyState, normalizeState: normalizeState, dataCount: dataCount, mergeState: mergeState, backupDue: backupDue,
    exportJSON: exportJSON, importJSON: importJSON,
    newId: newId
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.HC = api;
})(typeof self !== 'undefined' ? self : this);
