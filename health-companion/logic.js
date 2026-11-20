/* Health Companion – čistá logika (bez DOM), testovateľná v Node.js.
   Dátumy sú reťazce YYYY-MM-DD v lokálnom čase, časy HH:MM. */
(function (root) {
  'use strict';

  var SCHEMA = 'health-companion';
  var VERSION = 1;

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

  // Vráti zoznam dávok na daný deň, zoradený podľa času.
  // taken = { "YYYY-MM-DD": { "medId|HH:MM": true } }
  function medDosesOn(meds, taken, dateIso) {
    var doses = [];
    (meds || []).forEach(function (med) {
      if (!medActiveOn(med, dateIso)) return;
      (med.times || []).forEach(function (time) {
        var key = med.id + '|' + time;
        doses.push({
          key: key,
          medId: med.id,
          name: med.name,
          dose: med.dose || '',
          time: time,
          taken: !!(taken && taken[dateIso] && taken[dateIso][key])
        });
      });
    });
    doses.sort(function (x, y) {
      return x.time < y.time ? -1 : x.time > y.time ? 1 : (x.name < y.name ? -1 : 1);
    });
    return doses;
  }

  function setDoseTaken(taken, dateIso, key, value) {
    var next = JSON.parse(JSON.stringify(taken || {}));
    if (!next[dateIso]) next[dateIso] = {};
    if (value) next[dateIso][key] = true;
    else delete next[dateIso][key];
    if (Object.keys(next[dateIso]).length === 0) delete next[dateIso];
    return next;
  }

  // Dávky, ktoré mali byť užité pred "nowTime" dnes a nie sú označené.
  function missedDoses(doses, dateIso, todayIso, nowTime) {
    return doses.filter(function (dose) {
      if (dose.taken) return false;
      if (dateIso < todayIso) return true;
      return dateIso === todayIso && dose.time < nowTime;
    });
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

  // ---- Validácia ----

  function requireText(value, label) {
    if (!value || !String(value).trim()) return label + ' je povinné.';
    return null;
  }

  function validateMed(m) {
    return requireText(m.name, 'Názov lieku') ||
      (m.times && m.times.length ? (m.times.every(isValidTime) ? null : 'Čas užitia musí byť vo formáte HH:MM.') : 'Zadajte aspoň jeden čas užitia.') ||
      (m.startDate && !parseISO(m.startDate) ? 'Neplatný dátum začiatku.' : null) ||
      (m.endDate && !parseISO(m.endDate) ? 'Neplatný dátum konca.' : null) ||
      (m.startDate && m.endDate && m.endDate < m.startDate ? 'Koniec liečby nemôže byť pred začiatkom.' : null);
  }

  function validateSymptom(s) {
    return requireText(s.name, 'Názov príznaku') ||
      (parseISO(s.date) ? null : 'Neplatný dátum.') ||
      (s.time && !isValidTime(s.time) ? 'Neplatný čas.' : null) ||
      (s.severity >= 1 && s.severity <= 10 ? null : 'Intenzita musí byť od 1 do 10.');
  }

  function validateVisit(v) {
    return (parseISO(v.date) ? null : 'Zadajte dátum návštevy.') ||
      (v.nextVisit && !parseISO(v.nextVisit) ? 'Neplatný dátum ďalšej návštevy.' : null) ||
      (requireText(v.doctor || v.specialty, 'Lekár alebo odbor'));
  }

  function validateCheckup(c) {
    return requireText(c.name, 'Názov prehliadky') ||
      (c.intervalMonths >= 1 && c.intervalMonths <= 120 ? null : 'Interval musí byť 1 až 120 mesiacov.') ||
      (c.lastDate && !parseISO(c.lastDate) ? 'Neplatný dátum poslednej prehliadky.' : null);
  }

  // ---- Otázky pre lekára ----

  function questionsText(questions, visitLabel) {
    var lines = ['Otázky pre lekára' + (visitLabel ? ' (' + visitLabel + ')' : '') + ':', ''];
    (questions || []).forEach(function (q, i) {
      lines.push((i + 1) + '. ' + q.text);
    });
    if (!questions || !questions.length) lines.push('(zatiaľ žiadne otázky)');
    return lines.join('\n');
  }

  // ---- Údaje: export / import ----

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

  function exportJSON(state) {
    return JSON.stringify({ schema: SCHEMA, version: VERSION, exportedAt: new Date().toISOString(), data: normalizeState(state) }, null, 2);
  }

  // Vyhodí chybu, ak súbor nie je zálohou tejto appky.
  function importJSON(text) {
    var obj;
    try { obj = JSON.parse(text); } catch (e) { throw new Error('Súbor nie je platný JSON.'); }
    if (!obj || obj.schema !== SCHEMA || !obj.data) throw new Error('Súbor nie je zálohou Health Companion.');
    if (obj.version !== VERSION) throw new Error('Nepodporovaná verzia zálohy: ' + obj.version + '.');
    return normalizeState(obj.data);
  }

  function newId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  var api = {
    isoDate: isoDate, parseISO: parseISO, isValidTime: isValidTime, addMonths: addMonths, daysBetween: daysBetween,
    medActiveOn: medActiveOn, medDosesOn: medDosesOn, setDoseTaken: setDoseTaken, missedDoses: missedDoses,
    checkupStatus: checkupStatus,
    validateMed: validateMed, validateSymptom: validateSymptom, validateVisit: validateVisit, validateCheckup: validateCheckup,
    questionsText: questionsText,
    emptyState: emptyState, normalizeState: normalizeState, exportJSON: exportJSON, importJSON: importJSON,
    newId: newId
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.HC = api;
})(typeof self !== 'undefined' ? self : this);
