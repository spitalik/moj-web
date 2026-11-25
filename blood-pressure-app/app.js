/* Blood Pressure – hlavný skript appky (merania, prehľad, 7-dňové meranie, zálohy).
   Je v samostatnom súbore, lebo Content-Security-Policy v index.html nedovoľuje skripty vložené priamo do stránky.
   Texty sú v i18n/*.js (zdroj i18n/sk.js). */
(function () {
  "use strict";

  // ---------- Jazyk ----------
  // L(kľúč, premenné) = text; Ln(kľúč, počet, premenné) = text v správnom tvare množného čísla.
  const I18 = window.BPI18N;
  const L = (k, v) => I18.t(k, v);
  const Ln = (k, n, v) => I18.t(k, Object.assign({ n }, v));
  const LOC = () => I18.htmlLang();   // jazyk pre formát dátumu
  const decSep = () => { const d = I18.dict(I18.lang()); return (d && d._dec) || ","; };

  // ---------- Číselníky ----------
  // Kategórie jedného merania podľa ESH 2023 (hranice „menej ako“). Rozhoduje horšia z dvoch hodnôt.
  // Texty kategórií sú v slovníku: cat.<k> (krátky názov), cat.<k>.long, cat.<k>.desc (gettery = vždy v zvolenom jazyku).
  const catObj = (k, s, d) => ({ k, s, d, get label() { return L("cat." + k); }, get long() { return L("cat." + k + ".long"); }, get desc() { return L("cat." + k + ".desc"); } });
  const CATS = [catObj("opt", 120, 80), catObj("norm", 130, 85), catObj("hn", 140, 90), catObj("g1", 160, 100), catObj("g2", 180, 110), catObj("g3", 1e9, 1e9)];
  const LOW = catObj("low", 0, 0);
  // Okolnosti merania: názov je v slovníku tag.<k>
  const TAGS = [["meds", "💊"], ["noMeds", "⏰"], ["coffee", "☕"], ["sport", "🏃"], ["stress", "😣"], ["badSleep", "😴"], ["alcohol", "🍷"], ["headache", "🤕"], ["dizzy", "💫"]]
    .map(([k, icon]) => ({ k, icon, get name() { return L("tag." + k); } }));
  const TMAP = Object.fromEntries(TAGS.map(t => [t.k, t]));
  const ARM_K = { L: "armL", R: "armR" }, POS_K = { sit: "posSit", lie: "posLie", stand: "posStand" };
  const ARMS = () => Object.keys(ARM_K).map(k => [k, L(ARM_K[k])]);
  const POS = () => Object.keys(POS_K).map(k => [k, L(POS_K[k])]);
  const armName = k => ARM_K[k] ? L(ARM_K[k]) : "", posName = k => POS_K[k] ? L(POS_K[k]) : "";
  const WEEK_DAYS = 7;       // dĺžka domáceho merania podľa ESH

  // ---------- Pomocné funkcie ----------
  const $ = s => document.querySelector(s);

  // ---------- Natívna appka (Capacitor: Android, iOS) ----------
  // V prehliadači window.Capacitor nie je a appka beží ako PWA. V natívnej appke sa súbory namiesto
  // sťahovania zdieľajú (Filesystem + Share) a tlačidlo Späť v Androide rieši plugin App.
  const NATIVE = !!(window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform());
  const plugin = name => NATIVE && window.Capacitor.Plugins ? window.Capacitor.Plugins[name] || null : null;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const mean = a => a.length ? a.reduce((s, x) => s + x, 0) / a.length : 0;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const toD = s => new Date(s + "T12:00:00");
  const iso = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const today = () => iso(new Date());
  const nowHm = () => { const d = new Date(); return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0"); };
  const addDays = (s, n) => { const d = toD(s); d.setDate(d.getDate() + n); return iso(d); };
  const daysBetween = (a, b) => Math.round((toD(b) - toD(a)) / 864e5);
  // dátumy podľa jazyka (Intl): krátky „16. 11.“, dlhý „Pondelok 16. novembra“, celý „16. 11. 2026“
  const short = s => toD(s).toLocaleDateString(LOC(), { day: "numeric", month: "numeric" });
  const long = s => { const w = toD(s).toLocaleDateString(LOC(), { weekday: "long", day: "numeric", month: "long" }); return w.charAt(0).toUpperCase() + w.slice(1); };
  const fullDate = s => toD(s).toLocaleDateString(LOC());
  const hmMin = s => { const m = /^(\d{1,2}):(\d{2})$/.exec(String(s || "")); return m && +m[1] < 24 && +m[2] < 60 ? +m[1] * 60 + +m[2] : null; };
  const readingsN = n => Ln("readings", n);
  const isDate = s => /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(toD(s)) && iso(toD(s)) === s;

  // ---------- Stav ----------
  // D = dáta, ktoré zadal používateľ. SET = nastavenia. UI = stav obrazovky (neukladá sa).
  const DATA_KEY = "bloodPressure.data.v1";
  const SET_KEY = "bloodPressure.settings.v1";
  const emptyData = () => ({
    readings: [],   // merania: { id, date, time, sys, dia, pulse, arm, pos, tags: {k: true}, note }
    week: null,     // bežiace 7-dňové meranie: { start }
    weeks: []       // uzavreté 7-dňové merania: { start, end, sys, dia, pulse, n }
  });
  let D = emptyData();
  const defaultSet = () => ({ theme: "dark", lang: I18.DEFAULT, name: "", goalSys: 135, goalDia: 85, arm: "L", installDismissed: false,
    lastBackup: null, backupSnooze: null });   // dátum poslednej stiahnutej zálohy a odloženia pripomienky
  let SET = defaultSet();
  const UI = { tab: "today", period: 30, histN: 40, f: null, lastId: null, repDays: 30 };

  // Meranie z neznámeho zdroja (záloha, poškodené úložisko) prepustíme len so správnymi hodnotami.
  function cleanReading(r) {
    if (!r || typeof r !== "object") return null;
    const sys = Number(r.sys), dia = Number(r.dia), pulse = r.pulse == null || r.pulse === "" ? null : Number(r.pulse);
    if (!isDate(r.date) || hmMin(r.time) === null) return null;
    if (!Number.isInteger(sys) || !Number.isInteger(dia) || sys < 60 || sys > 300 || dia < 30 || dia > 200 || dia >= sys) return null;
    if (pulse !== null && (!Number.isInteger(pulse) || pulse < 25 || pulse > 250)) return null;
    const tags = {};
    if (r.tags && typeof r.tags === "object") Object.keys(r.tags).forEach(k => { if (TMAP[k] && r.tags[k]) tags[k] = true; });
    return {
      id: /^r[a-z0-9]{1,24}$/.test(r.id) ? r.id : newId(),
      date: r.date, time: fmtHm(hmMin(r.time)), sys, dia, pulse,
      arm: ARM_K[r.arm] ? r.arm : null, pos: POS_K[r.pos] ? r.pos : "sit", tags,
      note: cleanNote(r.note)
    };
  }
  const fmtHm = m => String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
  const cleanNote = v => String(v == null ? "" : v).replace(/[<>`\\]/g, "").replace(/\s+/g, " ").trim().slice(0, 120);
  let idSeq = 0;
  const newId = () => "r" + Date.now().toString(36) + (idSeq++).toString(36);
  const byTime = (a, b) => (a.date + a.time) < (b.date + b.time) ? -1 : (a.date + a.time) > (b.date + b.time) ? 1 : 0;
  function tidy(d) {
    const out = emptyData();
    const ids = new Set();
    (Array.isArray(d.readings) ? d.readings : []).forEach(r => {
      const c = cleanReading(r);
      if (!c) return;
      while (ids.has(c.id)) c.id = newId();
      ids.add(c.id); out.readings.push(c);
    });
    out.readings.sort(byTime);
    if (d.week && isDate(d.week.start)) out.week = { start: d.week.start };
    if (Array.isArray(d.weeks)) out.weeks = d.weeks.filter(w => w && isDate(w.start) && isDate(w.end) && Number.isFinite(w.sys) && Number.isFinite(w.dia))
      .map(w => ({ start: w.start, end: w.end, sys: Math.round(w.sys), dia: Math.round(w.dia), pulse: Number.isFinite(w.pulse) ? Math.round(w.pulse) : null, n: Number.isInteger(w.n) ? w.n : 0 }));
    return out;
  }

  function save() {
    try { localStorage.setItem(DATA_KEY, JSON.stringify(D)); } catch (e) { /* bez úložiska appka beží len do zatvorenia */ }
  }
  function saveSet() {
    try { localStorage.setItem(SET_KEY, JSON.stringify(SET)); } catch (e) { /* nastavenie sa len nezapamätá */ }
  }
  function load() {
    try {
      const d = JSON.parse(localStorage.getItem(DATA_KEY));
      if (d && Array.isArray(d.readings)) D = tidy(d);
    } catch (e) { /* poškodené dáta ignorujeme */ }
    try {
      SET = defaultSet();   // nastavenia vždy od predvolených (aj po zmene z druhej kópie appky)
      const s = JSON.parse(localStorage.getItem(SET_KEY));
      if (s && typeof s === "object" && !Array.isArray(s)) {
        // nastavenia z verzie bez výberu jazyka: appka bola len po slovensky, slovenčina ostane
        if (s.lang === undefined) s.lang = "sk";
        SET = Object.assign(SET, cleanSettings(s));
      }
    } catch (e) { /* predvolené nastavenia */ }
    if (!goalOk(SET.goalSys, SET.goalDia)) { SET.goalSys = 135; SET.goalDia = 85; }
    if (!I18.has(SET.lang)) SET.lang = I18.DEFAULT;
    I18.setLang(SET.lang);
  }
  // Nastavenia z úložiska alebo zo zálohy: len známe kľúče so správnym typom.
  function cleanSettings(s) {
    const c = {};
    if (/^(dark|light|system)$/.test(s.theme)) c.theme = s.theme;
    if (typeof s.lang === "string" && /^[a-z]{2}$/.test(s.lang) && I18.has(s.lang)) c.lang = s.lang;
    if (typeof s.name === "string") c.name = s.name.trim().slice(0, 30);
    if (Number.isInteger(s.goalSys)) c.goalSys = s.goalSys;
    if (Number.isInteger(s.goalDia)) c.goalDia = s.goalDia;
    if (ARM_K[s.arm]) c.arm = s.arm;
    if (typeof s.installDismissed === "boolean") c.installDismissed = s.installDismissed;
    if (s.lastBackup === null || isDate(s.lastBackup)) c.lastBackup = s.lastBackup;
    if (s.backupSnooze === null || isDate(s.backupSnooze)) c.backupSnooze = s.backupSnooze;
    return c;
  }
  // Jazyk: statická časť stránky (data-i18n), atribút lang a popis.
  function applyLang() {
    I18.setLang(SET.lang);
    document.documentElement.setAttribute("lang", LOC());
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = L(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", L(el.dataset.i18nAria)); el.setAttribute("title", L(el.dataset.i18nAria)); });
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", L("metaDesc"));
  }
  function setLanguage(code) {
    if (!I18.has(code)) return;
    SET.lang = code; saveSet();
    applyLang();
    render();
    openSettings();
  }
  const goalOk = (s, d) => Number.isInteger(s) && Number.isInteger(d) && s >= 100 && s <= 180 && d >= 60 && d <= 110 && d < s;

  // ---------- Vzhľad ----------
  const lightQuery = matchMedia("(prefers-color-scheme: light)");
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", SET.theme);
    const light = SET.theme === "light" || (SET.theme === "system" && lightQuery.matches);
    $("#theme-color").setAttribute("content", light ? "#f3f5fa" : "#141a2d");
  }
  lightQuery.addEventListener("change", applyTheme);

  // ---------- Výpočty ----------
  function cat(sys, dia) {
    const i = Math.max(CATS.findIndex(c => sys < c.s), CATS.findIndex(c => dia < c.d));
    if (i <= 1 && (sys < 90 || dia < 60)) return LOW;
    return CATS[i];
  }
  const isCrisis = r => r.sys >= 180 || r.dia >= 110;
  const partOf = r => hmMin(r.time) < 12 * 60 ? "am" : "pm";
  const inRange = (from, to) => D.readings.filter(r => r.date >= from && r.date <= to);
  function avgOf(list) {
    const p = list.filter(r => r.pulse != null).map(r => r.pulse);
    return { n: list.length, sys: Math.round(mean(list.map(r => r.sys))), dia: Math.round(mean(list.map(r => r.dia))), pulse: p.length ? Math.round(mean(p)) : null };
  }
  const overGoal = a => a.sys >= SET.goalSys || a.dia >= SET.goalDia;
  const goalText = () => SET.goalSys + "/" + SET.goalDia;
  function goalSentence(a) {
    return '<p class="small">' + L(overGoal(a) ? "goalOver" : "goalUnder", { goal: goalText() }) + "</p>";
  }

  // ---------- Kúsky obrazoviek ----------
  function greeting() {
    const h = new Date().getHours();
    const g = L(h < 11 ? "goodMorning" : h < 18 ? "goodDay" : "goodEvening");
    return SET.name ? L("greetName", { greet: g, name: esc(SET.name) }) : g;
  }
  function stat(v, l) { return '<div class="stat"><b>' + v + "</b><span>" + l + "</span></div>"; }
  function pill(c) { return '<span class="pill k-' + c.k + '">' + c.label + "</span>"; }
  function bpBig(sys, dia, pulse, cls) {
    return '<div class="bp' + (cls ? " " + cls : "") + '"><b>' + sys + '</b><span class="sl">/</span><b>' + dia + "</b><small>mmHg</small></div>" +
      (pulse != null ? '<span class="small muted">' + L("pulseUnit", { n: pulse }) + "</span>" : "");
  }
  const when = r => (r.date === today() ? L("today") : r.date === addDays(today(), -1) ? L("yesterday") : short(r.date)) + " " + r.time;
  const tagIcons = r => TAGS.filter(t => r.tags[t.k]).map(t => '<span title="' + esc(t.name) + '">' + t.icon + "</span>").join(" ");
  function crisisCard() {
    return '<div class="card warn" role="alert"><h3>' + L("crisisTitle") + '</h3><p class="small">' + L("crisisText") + "</p></div>";
  }
  function howCard() {
    return '<div class="card"><div class="eyebrow">' + L("howTitle") + '</div><ul class="small plain">' +
      ["how1", "how2", "how3", "how4"].map(k => "<li>" + L(k) + "</li>").join("") + "</ul></div>";
  }

  // ---------- Graf ----------
  // Každé meranie je zvislá palička od diastolického po systolický tlak, farba podľa kategórie.
  function stickChart(list, from, to) {
    const W = 340, H = 160, pl = 30, pr = 6, pt = 8, pb = 20, ih = H - pt - pb, iw = W - pl - pr;
    const days = daysBetween(from, to) + 1;
    const lo = Math.min(50, Math.floor((Math.min(...list.map(r => r.dia)) - 5) / 10) * 10);
    const hi = Math.max(180, Math.ceil((Math.max(...list.map(r => r.sys)) + 5) / 20) * 20);
    const y = v => pt + ih - (v - lo) / (hi - lo) * ih;
    const x = r => pl + (daysBetween(from, r.date) + (hmMin(r.time) / 1440)) / days * iw;
    let s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(L("chartAria", { from: short(from), to: short(to) })) + '">';
    for (let t = Math.ceil(lo / 40) * 40; t <= hi; t += 40) {
      s += '<line class="grid" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y(t).toFixed(1) + '" y2="' + y(t).toFixed(1) + '"/>';
      s += '<text x="' + (pl - 5) + '" y="' + (y(t) + 3).toFixed(1) + '" text-anchor="end">' + t + "</text>";
    }
    [SET.goalSys, SET.goalDia].forEach(g => {
      s += '<line class="goal" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y(g).toFixed(1) + '" y2="' + y(g).toFixed(1) + '"/>';
    });
    const sw = clamp(iw / Math.max(list.length, 1) * 0.5, 1.6, 4);
    list.forEach(r => {
      const c = cat(r.sys, r.dia), cx = x(r).toFixed(1);
      s += '<line class="stick k-' + c.k + '" style="stroke-width:' + sw.toFixed(1) + '" x1="' + cx + '" x2="' + cx + '" y1="' + y(r.sys).toFixed(1) + '" y2="' + y(r.dia).toFixed(1) + '"><title>' +
        short(r.date) + " " + r.time + ": " + r.sys + "/" + r.dia + "</title></line>";
    });
    s += '<text x="' + pl + '" y="' + (H - 4) + '">' + short(from) + "</text>";
    s += '<text x="' + (W - pr) + '" y="' + (H - 4) + '" text-anchor="end">' + short(to) + "</text>";
    return '<div class="chart">' + s + "</svg></div>";
  }
  function pulseChart(list, from, to) {
    const P = list.filter(r => r.pulse != null);
    const W = 340, H = 90, pl = 30, pr = 6, pt = 8, pb = 18, ih = H - pt - pb, iw = W - pl - pr;
    const days = daysBetween(from, to) + 1;
    const lo = Math.min(50, Math.floor(Math.min(...P.map(r => r.pulse)) / 10) * 10), hi = Math.max(100, Math.ceil(Math.max(...P.map(r => r.pulse)) / 10) * 10);
    const y = v => pt + ih - (v - lo) / (hi - lo) * ih;
    const x = r => pl + (daysBetween(from, r.date) + (hmMin(r.time) / 1440)) / days * iw;
    let s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(L("pulse")) + '">';
    [lo, hi].forEach(t => {
      s += '<line class="grid" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y(t) + '" y2="' + y(t) + '"/><text x="' + (pl - 5) + '" y="' + (y(t) + 3) + '" text-anchor="end">' + t + "</text>";
    });
    s += '<polyline class="pl" points="' + P.map(r => x(r).toFixed(1) + "," + y(r.pulse).toFixed(1)).join(" ") + '"/>';
    P.forEach(r => { s += '<circle class="pd" r="2.2" cx="' + x(r).toFixed(1) + '" cy="' + y(r.pulse).toFixed(1) + '"><title>' + short(r.date) + " " + r.time + ": " + r.pulse + " /min</title></circle>"; });
    return '<div class="chart">' + s + "</svg></div>";
  }

  // ---------- Obrazovka Dnes ----------
  function viewToday() {
    const t = today(), R = D.readings;
    let h = '<div class="head"><div class="eyebrow">' + long(t) + "</div><h2>" + greeting() + "</h2></div>";
    h += installCard();
    h += backupCard();
    const last = R[R.length - 1];
    if (last && last.date === t && isCrisis(last)) h += crisisCard();

    const part = new Date().getHours() < 12 ? "am" : "pm";
    const doneNow = R.some(r => r.date === t && partOf(r) === part);
    if (D.week) h += weekTodayCard();
    else if (!doneNow) {
      h += '<div class="card lamp"><div class="eyebrow">' + L(part === "am" ? "amReading" : "pmReading") + "</div><h3>" + L("measureNow") + "</h3>" +
        '<p class="small">' + L(part === "am" ? "amHint" : "pmHint") + " " + L("measureHint") + "</p>" +
        '<button class="btn dark" data-act="add" type="button">' + L("logReading") + "</button></div>";
    }

    if (!R.length) {
      h += '<div class="card"><div class="eyebrow">' + L("howWorks") + '</div><ol class="steps">' +
        ["step1", "step2", "step3", "step4"].map(k => "<li>" + L(k) + "</li>").join("") + "</ol>" +
        '<p class="small muted">' + L("onDevice") + '</p><button class="link" data-act="privacy" type="button">' + L("privacyArrow") + "</button></div>";
      h += howCard();
      return h;
    }

    const c = cat(last.sys, last.dia);
    h += '<div class="card"><div class="row"><div class="eyebrow">' + L("lastReading", { when: when(last) }) + "</div>" + pill(c) + "</div>" +
      '<div class="bp-line">' + bpBig(last.sys, last.dia, last.pulse) + "</div>" +
      (tagIcons(last) ? '<p class="small">' + tagIcons(last) + "</p>" : "") +
      '<button class="link" data-goto="hist" type="button">' + L("allRecords") + "</button></div>";

    const from = addDays(t, -6), week = inRange(from, t);
    if (week.length >= 2) {
      const a = avgOf(week), am = avgOf(week.filter(r => partOf(r) === "am")), pm = avgOf(week.filter(r => partOf(r) === "pm"));
      h += '<div class="card"><div class="row"><div class="eyebrow">' + L("avg7") + '</div><span class="small muted">' + readingsN(a.n) + "</span></div>" +
        '<div class="stats">' + stat(a.sys + "/" + a.dia, L("statAvg")) + stat(am.n ? am.sys + "/" + am.dia : "–", L("statAm")) + stat(pm.n ? pm.sys + "/" + pm.dia : "–", L("statPm")) + stat(a.pulse != null ? a.pulse : "–", L("statPulse")) + "</div>" +
        goalSentence(a) + stickChart(week, from, t) +
        '<button class="link" data-goto="stats" type="button">' + L("fullOverview") + "</button></div>";
    }
    return h;
  }

  // ---------- Záznamy ----------
  function viewHist() {
    const R = D.readings;
    let h = '<div class="head"><div class="eyebrow">' + readingsN(R.length) + "</div><h2>" + L("records") + "</h2></div>";
    h += '<button class="btn" data-act="add" type="button">' + L("addReading") + "</button>";
    if (!R.length) return h + '<div class="card"><p class="small muted">' + L("noRecords") + "</p></div>";
    const shown = R.slice(-UI.histN).reverse();
    const byDate = [];
    shown.forEach(r => { const g = byDate[byDate.length - 1]; if (g && g.date === r.date) g.list.push(r); else byDate.push({ date: r.date, list: [r] }); });
    byDate.forEach(g => {
      const a = avgOf(g.list);
      h += '<div class="card"><div class="row"><div class="eyebrow">' + long(g.date) + "</div>" + (g.list.length > 1 ? '<span class="small muted">Ø ' + a.sys + "/" + a.dia + "</span>" : "") + "</div><div>";
      g.list.forEach(r => {
        const c = cat(r.sys, r.dia);
        h += '<button class="rd" type="button" data-act="open" data-id="' + r.id + '"><span class="muted">' + r.time + "</span>" +
          '<span><span class="v">' + r.sys + "/" + r.dia + "</span>" + (r.pulse != null ? ' <span class="small muted">· ' + r.pulse + " /min</span>" : "") +
          ((tagIcons(r) || r.note) ? '<span class="sub">' + tagIcons(r) + (r.note ? " " + esc(r.note) : "") + "</span>" : "") + "</span>" +
          '<span class="k k-' + c.k + '"><i class="dot"></i></span></button>';
      });
      h += "</div></div>";
    });
    if (R.length > UI.histN) h += '<button class="btn ghost" data-act="more" type="button">' + L("showOlder") + "</button>";
    return h;
  }

  // ---------- Prehľad ----------
  function viewStats() {
    const t = today(), days = UI.period, from = addDays(t, -days + 1);
    const list = inRange(from, t);
    let h = '<div class="head"><div class="eyebrow">' + L("overviewEyebrow", { days: Ln("daysN", days) }) + "</div><h2>" + L("howDoing") + "</h2></div>";
    h += '<div class="seg" role="group" aria-label="' + esc(L("period")) + '" style="--n:3">' + [7, 30, 90].map(d => '<button type="button" data-period="' + d + '" aria-pressed="' + (d === days) + '">' + Ln("daysN", d) + "</button>").join("") + "</div>";
    if (list.length < 2) {
      h += '<div class="card"><h3>' + L("fewTitle") + '</h3><p class="small muted">' + L(list.length === 1 ? "fewOne" : "fewNone", { days: Ln("daysN", days) }) + "</p></div>";
      return h + disclaimer();
    }
    const a = avgOf(list), over = list.filter(r => r.sys >= SET.goalSys || r.dia >= SET.goalDia).length;
    const sysV = list.map(r => r.sys), diaV = list.map(r => r.dia);
    h += '<div class="card"><div class="row"><div class="eyebrow">' + L("avgEyebrow", { readings: readingsN(a.n) }) + "</div>" + pill(cat(a.sys, a.dia)) + "</div>" +
      '<div class="bp-line">' + bpBig(a.sys, a.dia, a.pulse) + "</div>" + goalSentence(a) +
      '<div class="stats s3">' + stat(Math.min(...sysV) + "–" + Math.max(...sysV), L("sysMinMax")) + stat(Math.min(...diaV) + "–" + Math.max(...diaV), L("diaMinMax")) +
      stat(Math.round(over / list.length * 100) + " %", L("overGoalPct")) + "</div></div>";

    h += '<div class="card"><div class="eyebrow">' + L("byReading") + "</div>" + stickChart(list, from, t) +
      '<div class="legend"><span><i style="background:var(--c-opt)"></i>' + L("legNormal") + '</span><span><i style="background:var(--c-hn)"></i>' + L("legHighNormal") + '</span><span><i style="background:var(--c-g2)"></i>' + L("legHyper") +
      '</span><span><i style="background:none;border-top:2px dashed var(--lamp);border-radius:0;height:0"></i>' + L("legGoal", { goal: goalText() }) + "</span></div></div>";

    const am = avgOf(list.filter(r => partOf(r) === "am")), pm = avgOf(list.filter(r => partOf(r) === "pm"));
    if (am.n && pm.n) {
      const row = (l, v, n, max, muted) => '<div class="cmp-row"><span' + (muted ? ' class="muted"' : "") + ">" + l + '</span><span class="track ' + (muted ? "t-few" : "t-lamp") + '"><i style="width:' + clamp(v / max * 100, 0, 100) + '%"></i></span><b' + (muted ? ' class="muted"' : "") + ">" + v + "</b></div>";
      h += '<div class="card"><div class="eyebrow">' + L("amPm") + "</div>" +
        '<div class="cmp"><span class="small muted">' + L("sysMmHg") + "</span>" + row(L("amN", { n: am.n }), am.sys, am.n, 200) + row(L("pmN", { n: pm.n }), pm.sys, pm.n, 200, true) + "</div>" +
        '<div class="cmp"><span class="small muted">' + L("diaMmHg") + "</span>" + row(L("amLabel"), am.dia, am.n, 130) + row(L("pmLabel"), pm.dia, pm.n, 130, true) + "</div>" +
        '<p class="small muted">' + (Math.abs(am.sys - pm.sys) >= 10 ? L("amPmDiff", { n: Math.abs(am.sys - pm.sys) }) : L("amPmSame")) + "</p></div>";
    }

    const counts = CATS.concat(LOW).map(c => ({ c, n: list.filter(r => cat(r.sys, r.dia).k === c.k).length })).filter(x => x.n);
    h += '<div class="card"><div class="eyebrow">' + L("byCategory") + '</div><div class="cmp">' +
      counts.map(x => '<div class="cmp-row"><span class="k-' + x.c.k + '">' + x.c.label + '</span><span class="track k-' + x.c.k + '"><i style="width:' + (x.n / list.length * 100) + '%"></i></span><b>' + x.n + "×</b></div>").join("") +
      '</div><p class="small muted">' + L("catSource") + "</p></div>";

    // Okolnosti: priemer meraní s označením a bez neho (aspoň 2 a 2)
    const tagRows = TAGS.map(T => {
      const w = list.filter(r => r.tags[T.k]), wo = list.filter(r => !r.tags[T.k]);
      if (w.length < 2 || wo.length < 2) return "";
      const A = avgOf(w), B = avgOf(wo), diff = A.sys - B.sys;
      return "<p class=\"small\">" + T.icon + " <b>" + esc(T.name) + "</b>: " + L("tagCompare", { with: A.sys + "/" + A.dia, n: w.length, without: B.sys + "/" + B.dia }) +
        (Math.abs(diff) >= 5 ? ' <span class="' + (diff > 0 ? "t-bad" : "t-good") + '">· ' + (diff > 0 ? "+" : "−") + Math.abs(diff) + " mmHg</span>" : "") + "</p>";
    }).join("");
    if (tagRows) h += '<div class="card"><div class="eyebrow">' + L("circumstances") + "</div>" + tagRows + '<p class="small muted">' + L("tagNote") + "</p></div>";

    if (list.filter(r => r.pulse != null).length >= 2) h += '<div class="card"><div class="row"><div class="eyebrow">' + L("pulse") + '</div><span class="small muted">Ø ' + a.pulse + " /min</span></div>" + pulseChart(list, from, t) + "</div>";
    h += '<button class="btn ghost" data-act="report" type="button">' + L("doctorReport") + "</button>";
    return h + disclaimer();
  }
  const disclaimer = () => '<p class="small muted">' + L("disclaimer") + "</p>";

  // ---------- 7-dňové meranie ----------
  // Podľa ESH: 7 dní ráno aj večer po 2 merania, prvý deň sa do priemeru nepočíta.
  const weekEnd = () => addDays(D.week.start, WEEK_DAYS - 1);
  function dayState(d) {
    const l = D.readings.filter(r => r.date === d);
    return { am: l.filter(r => partOf(r) === "am").length, pm: l.filter(r => partOf(r) === "pm").length };
  }
  function weekGrid() {
    const t = today();
    let h = '<div class="days">';
    for (let i = 0; i < WEEK_DAYS; i++) {
      const d = addDays(D.week.start, i), st = dayState(d);
      const cls = (st.am && st.pm ? "done" : st.am || st.pm ? "half" : "") + (d === t ? " now" : "") + (i === 0 ? " skip" : "");
      h += '<div class="day ' + cls + '" title="' + esc(L(i === 0 ? "dayTitleSkip" : "dayTitle", { date: short(d), am: st.am, pm: st.pm })) + '">' + (i + 1) + "</div>";
    }
    return h + "</div>";
  }
  function weekTodayCard() {
    const t = today(), n = daysBetween(D.week.start, t) + 1, st = dayState(t);
    const part = new Date().getHours() < 12 ? "am" : "pm";
    const need = part === "am" ? st.am < 2 : st.pm < 2;
    return '<div class="card lamp"><div class="row"><div class="eyebrow">' + L("weekReading") + '</div><span class="small">' + L("dayOf", { n: Math.min(n, WEEK_DAYS), total: WEEK_DAYS }) + "</span></div>" +
      "<h3>" + (need ? L("twiceNow", { part: L(part === "am" ? "amReading" : "pmReading") }) : L("doneForNow")) + "</h3>" +
      weekGrid() + '<p class="small">' + L("todayAmPm", { am: st.am, pm: st.pm }) + "</p>" +
      (need ? '<button class="btn dark" data-act="add" type="button">' + L("logReading") + "</button>" : "") +
      '<button class="link" data-goto="week" type="button">' + L("weekProgress") + "</button></div>";
  }
  function canConclude() {
    if (!D.week) return false;
    const end = weekEnd();
    return today() > end || (today() === end && dayState(end).pm > 0);
  }
  function concludeWeek() {
    const start = D.week.start, end = weekEnd();
    const list = inRange(addDays(start, 1), end);   // prvý deň sa vynecháva
    D.week = null;
    if (!list.length) { save(); return null; }
    const a = avgOf(list);
    const res = { start, end, sys: a.sys, dia: a.dia, pulse: a.pulse, n: a.n };
    D.weeks.unshift(res);
    D.weeks = D.weeks.slice(0, 20);
    save();
    return res;
  }
  function weekResultHtml(w) {
    const over = w.sys >= SET.goalSys || w.dia >= SET.goalDia;
    return '<div class="wk-item"><div><b>' + fullDate(w.start) + " – " + fullDate(w.end) + '</b><div class="small muted">' + readingsN(w.n) + (w.pulse != null ? " · " + L("pulseUnit", { n: w.pulse }) : "") +
      (w.n < 12 ? " · " + L("fewerThan12") : "") + "</div></div>" +
      '<div style="text-align:right"><div class="v" style="font-family:var(--f-display);font-weight:700;font-size:20px">' + w.sys + "/" + w.dia + '</div><span class="pill ' + (over ? "t-bad" : "t-good") + '">' + L(over ? "overGoal" : "underGoal") + "</span></div></div>";
  }
  function viewWeek() {
    let h = '<div class="head"><div class="eyebrow">' + L("homeMeasuring") + "</div><h2>" + L("weekTitle") + "</h2></div>";
    if (D.week) {
      const n = daysBetween(D.week.start, today()) + 1;
      h += '<div class="card lamp"><div class="row"><div class="eyebrow">' + L("runningSince", { date: short(D.week.start) }) + '</div><span class="small">' + L("dayOf", { n: Math.min(n, WEEK_DAYS), total: WEEK_DAYS }) + "</span></div>" +
        "<h3>" + L("amPm2") + "</h3>" + weekGrid() +
        '<p class="small">' + L("gridHint") + "</p>" +
        '<button class="btn dark" data-act="add" type="button">' + L("logReading") + "</button>" +
        (canConclude() ? '<button class="btn ghost" data-act="concludeWeek" type="button">' + L("evaluate") + "</button>" : "") +
        '<button class="link" data-act="cancelWeek" type="button">' + L("cancelWeek") + "</button></div>";
      const sofar = inRange(addDays(D.week.start, 1), today());
      if (sofar.length >= 2) {
        const a = avgOf(sofar);
        h += '<div class="card"><div class="eyebrow">' + L("runningAvg", { readings: readingsN(a.n) }) + "</div>" + bpBig(a.sys, a.dia, a.pulse) + "</div>";
      }
    } else {
      h += '<div class="card"><h3>' + L("howGoes") + '</h3><ol class="steps">' +
        ["wstep1", "wstep2", "wstep3", "wstep4"].map(k => "<li>" + L(k) + "</li>").join("") + "</ol>" +
        '<p class="small muted">' + L("weekGoalHint", { goal: goalText() }) + "</p>" +
        '<button class="btn" data-act="startWeek" type="button">' + L("startWeek") + "</button></div>";
      h += howCard();
    }
    if (D.weeks.length) h += '<div class="card"><div class="eyebrow">' + L("results") + "</div>" + D.weeks.map(weekResultHtml).join("") + "</div>";
    return h + disclaimer();
  }

  // ---------- Formulár merania ----------
  function sheetTop(label, closeIcon) {
    return '<div class="sheet-top"><button class="icon-btn" data-act="close" type="button" aria-label="' + esc(L(closeIcon === "×" ? "close" : "back")) + '">' + (closeIcon || "←") + '</button><span class="eyebrow">' + label + '</span><span style="width:38px"></span></div>';
  }
  function openForm(r, copy) {
    UI.f = r
      ? { id: r.id, sys: String(r.sys), dia: String(r.dia), pulse: r.pulse != null ? String(r.pulse) : "", date: r.date, time: r.time, arm: r.arm, pos: r.pos, tags: Object.assign({}, r.tags), note: r.note, err: null }
      : { id: null, sys: "", dia: "", pulse: "", date: today(), time: nowHm(), arm: copy ? copy.arm : SET.arm, pos: copy ? copy.pos : "sit", tags: copy ? Object.assign({}, copy.tags) : {}, note: "", err: null, second: !!copy };
    renderForm();
  }
  function renderForm() {
    const f = UI.f;
    const seg = (attr, cur, items) => '<div class="seg" role="group" style="--n:' + items.length + '">' +
      items.map(([v, l]) => '<button type="button" ' + attr + '="' + v + '" aria-pressed="' + (cur === v) + '">' + l + "</button>").join("") + "</div>";
    const big = (id, label, val, unit, ph) => '<label for="' + id + '"><span class="eyebrow">' + label + "</span>" +
      '<input id="' + id + '" type="text" inputmode="numeric" autocomplete="off" maxlength="3" placeholder="' + ph + '" value="' + esc(val) + '"' + (f.bad && f.bad.includes(id) ? ' aria-invalid="true"' : "") + '><span class="u">' + unit + "</span></label>";
    let h = sheetTop(L(f.id ? "editEyebrow" : "newReading"), "×") + '<div class="scroll">';
    h += '<div class="head"><h2>' + L(f.id ? "editReading" : f.second ? "secondReading" : "newReading") + "</h2>" +
      (f.second ? '<p class="small muted">' + L("secondHint") + "</p>" : "") + "</div>";
    h += '<div class="card"><div class="bp-in">' + big("f-sys", L("upper"), f.sys, "SYS mmHg", "120") + big("f-dia", L("lower"), f.dia, "DIA mmHg", "80") + big("f-pulse", L("pulse"), f.pulse, "/min", "70") + "</div>" +
      (f.err ? '<p class="small num-err" role="alert">' + f.err + "</p>" : "") + "</div>";
    h += '<div class="card"><div class="num-row"><label class="small" for="f-date">' + L("date") + '<input id="f-date" type="date" max="' + today() + '" value="' + esc(f.date) + '"></label>' +
      '<label class="small" for="f-time">' + L("time") + '<input id="f-time" type="time" value="' + esc(f.time) + '"></label></div>' +
      '<span class="small">' + L("arm") + "</span>" + seg("data-farm", f.arm, ARMS()) + '<span class="small">' + L("position") + "</span>" + seg("data-fpos", f.pos, POS()) + "</div>";
    h += '<div class="card"><span class="set-label">' + L("circumstances") + '</span><div class="chips">' +
      TAGS.map(T => '<button type="button" class="chip" data-ftag="' + T.k + '" aria-pressed="' + !!f.tags[T.k] + '"><span aria-hidden="true">' + T.icon + "</span>" + esc(T.name) + "</button>").join("") + "</div>" +
      '<label class="small" for="f-note">' + L("note") + '<input id="f-note" type="text" maxlength="120" autocomplete="off" placeholder="' + esc(L("notePh")) + '" value="' + esc(f.note) + '"></label></div>';
    h += '<button class="btn" data-act="saveForm" type="button">' + L(f.id ? "saveChanges" : "saveReading") + "</button>";
    if (f.id) h += '<button class="btn danger" data-act="askDelReading" type="button">' + L("deleteReading") + "</button>";
    if (!f.id) h += howCard();
    h += "</div>";
    showSheet(h);
  }
  function validate(f) {
    const n = v => /^\d{2,3}$/.test(String(v).trim()) ? Number(String(v).trim()) : null;
    const sys = n(f.sys), dia = n(f.dia), pulse = String(f.pulse).trim() === "" ? null : n(f.pulse);
    const bad = [], msg = [];
    if (sys === null || sys < 60 || sys > 300) { bad.push("f-sys"); msg.push(L("errSys")); }
    if (dia === null || dia < 30 || dia > 200) { bad.push("f-dia"); msg.push(L("errDia")); }
    if (!bad.length && dia >= sys) { bad.push("f-sys", "f-dia"); msg.push(L("errOrder")); }
    if (String(f.pulse).trim() !== "" && (pulse === null || pulse < 25 || pulse > 250)) { bad.push("f-pulse"); msg.push(L("errPulse")); }
    if (!isDate(f.date)) msg.push(L("errDate"));
    else if (f.date > today()) msg.push(L("errFuture"));
    if (hmMin(f.time) === null) msg.push(L("errTime"));
    return { bad, msg, sys, dia, pulse };
  }
  function saveForm() {
    const f = UI.f;
    if (!f) return;
    const v = validate(f);
    if (v.msg.length) { f.err = v.msg.join(" "); f.bad = v.bad; renderForm(); return; }
    const r = { id: f.id || newId(), date: f.date, time: fmtHm(hmMin(f.time)), sys: v.sys, dia: v.dia, pulse: v.pulse, arm: f.arm || null, pos: f.pos || "sit", tags: f.tags, note: cleanNote(f.note) };
    D.readings = D.readings.filter(x => x.id !== r.id).concat(r).sort(byTime);
    save();
    UI.lastId = r.id;
    const fixed = !!f.id;
    UI.f = null;
    if (fixed) { closeSheet(); toast(L("readingEdited")); return; }
    finishSheet(r);
  }
  function finishSheet(r) {
    const c = cat(r.sys, r.dia);
    // merania z toho istého sedenia (do 15 minút) spriemerujeme
    const m = hmMin(r.time);
    const sess = D.readings.filter(x => x.date === r.date && Math.abs(hmMin(x.time) - m) <= 15);
    let extra = "";
    if (sess.length > 1) { const a = avgOf(sess); extra += '<div class="card"><div class="eyebrow">' + L("sessionAvg", { n: sess.length }) + "</div>" + bpBig(a.sys, a.dia, a.pulse) + "</div>"; }
    if (D.week) {
      const st = dayState(today());
      extra += '<div class="card"><div class="eyebrow">' + L("weekReading") + '</div><p class="small">' + L("weekToday", { am: st.am, pm: st.pm }) + "</p></div>";
    }
    let h = sheetTop(L("done"), "×") + '<div class="q"><div class="eyebrow">' + L("saved", { when: short(r.date) + " " + r.time }) + "</div>" +
      '<div class="bp-line">' + bpBig(r.sys, r.dia, r.pulse, "xl") + "</div>" +
      '<div class="row" style="justify-content:flex-start">' + pill(c) + '<span class="small muted">' + c.long + "</span></div>" +
      '<p class="small">' + c.desc + "</p>" + (isCrisis(r) ? crisisCard() : "") + extra +
      '<button class="btn ghost" data-act="addSecond" type="button">' + L("addAnother") + "</button>" +
      '<button class="btn" data-act="close" type="button">' + L("done") + "</button></div>";
    showSheet(h);
  }

  // ---------- Nastavenia ----------
  function openSettings() {
    const seg = (attr, cur, items) => '<div class="seg" role="group" style="--n:' + items.length + '">' +
      items.map(([v, l]) => '<button type="button" ' + attr + '="' + v + '" aria-pressed="' + (String(cur) === String(v)) + '">' + l + "</button>").join("") + "</div>";
    let h = sheetTop(L("settings")) + '<div class="scroll">';
    h += '<div class="head"><h2>' + L("settings") + "</h2></div>";
    // jazyk: názvy jazykov sú vždy v danom jazyku, aby sa dali nájsť aj v cudzom prostredí
    h += '<div class="card"><label class="set-label" for="set-lang">' + L("language") + (I18.lang() !== "en" ? " · Language" : "") + '</label><select id="set-lang">' +
      I18.languages().map(l => '<option value="' + l.code + '"' + (l.code === I18.lang() ? " selected" : "") + ">" + esc(l.flag + " " + l.name) + "</option>").join("") + "</select></div>";
    h += '<div class="card"><span class="set-label">' + L("appearance") + "</span>" + seg("data-theme-set", SET.theme, [["dark", L("themeDark")], ["light", L("themeLight")], ["system", L("themeSystem")]]) + "</div>";
    h += '<div class="card"><label class="set-label" for="set-name">' + L("nameLabel") + '</label><input id="set-name" type="text" maxlength="30" autocomplete="given-name" placeholder="' + esc(L("namePh")) + '" value="' + esc(SET.name) + '"><p class="small muted">' + L("nameHint") + "</p></div>";
    h += '<div class="card"><span class="set-label">' + L("goalLabel") + '</span><div class="num-row">' +
      '<label class="small" for="set-gsys">' + L("goalSys") + '<input id="set-gsys" type="text" inputmode="numeric" autocomplete="off" maxlength="3" value="' + SET.goalSys + '"></label>' +
      '<label class="small" for="set-gdia">' + L("goalDia") + '<input id="set-gdia" type="text" inputmode="numeric" autocomplete="off" maxlength="3" value="' + SET.goalDia + '"></label></div>' +
      '<p class="small num-err" id="err-goal" role="alert" hidden></p>' +
      '<p class="small muted">' + L("goalHint") + "</p></div>";
    h += '<div class="card"><span class="set-label">' + L("armLabel") + "</span>" + seg("data-armset", SET.arm, ARMS()) + '<p class="small muted">' + L("armHint") + "</p></div>";
    h += '<div class="card"><span class="set-label">' + L("myData") + '</span><p class="small muted">' +
      L("dataSummary", { readings: readingsN(D.readings.length), weeks: Ln("closedWeeks", D.weeks.length), backup: lastBackupText() }) + "</p>" +
      '<button class="btn ghost" data-act="export" type="button">' + L("downloadJson") + "</button>" +
      '<button class="btn ghost" data-act="exportCsv" type="button">' + L("downloadCsv") + "</button>" +
      '<button class="btn ghost" data-act="report" type="button">' + L("doctorReport") + "</button>" +
      '<button class="btn ghost" data-act="import" type="button">' + L("restoreBackup") + "</button>" +
      '<input id="import-file" type="file" accept=".json,application/json" hidden>' +
      '<button class="btn danger" data-act="askReset" type="button">' + L("deleteAllData") + "</button>" +
      '<button class="link" data-act="privacy" type="button">' + L("privacyLicArrow") + "</button></div>";
    h += '<p class="small muted" style="text-align:center">' + L("footer") + "</p>";
    h += "</div>";
    const sc = $("#sheet").innerHTML.includes('data-act="askReset"') ? $("#sheet").querySelector(".scroll") : null;
    const keep = sc ? sc.scrollTop : 0;
    showSheet(h, !!sc);
    const sc2 = $("#sheet").querySelector(".scroll");
    if (sc2) sc2.scrollTop = keep;
  }

  // ---------- Súkromie ----------
  function openPrivacy() {
    let h = '<div class="sheet-top"><button class="icon-btn" data-act="settings" type="button" aria-label="' + esc(L("back")) + '">←</button><span class="eyebrow">' + L("privacyEyebrow") + '</span><span style="width:38px"></span></div><div class="scroll">';
    h += '<div class="head"><h2>' + L("privacyTitle") + "</h2></div>";
    h += '<div class="card"><h3>' + L("privWhoTitle") + '</h3><p class="small">' + L("privWho") + "</p></div>";
    h += '<div class="card"><h3>' + L("privStoredTitle") + '</h3><ul class="small plain">' +
      ["privStored1", "privStored2", "privStored3", "privStored4"].map(k => "<li>" + L(k) + "</li>").join("") + "</ul></div>";
    h += '<div class="card"><h3>' + L("privHealthTitle") + '</h3><p class="small">' + L("privHealth") + "</p></div>";
    h += '<div class="card"><h3>' + L("privHowLongTitle") + '</h3><p class="small">' + L("privHowLong") + "</p></div>";
    h += '<div class="card"><h3>' + L("privOptionsTitle") + '</h3><p class="small">' + L("privOptions") + "</p></div>";
    h += '<div class="card"><h3>' + L("privLicTitle") + '</h3><p class="small">' + L("privLic") + "</p></div>";
    h += '<p class="small muted" style="text-align:center">' + L("notMedical") + "</p></div>";
    showSheet(h);
  }

  // ---------- Záloha, CSV, prehľad pre lekára ----------
  const lastBackupText = () => SET.lastBackup ? L("lastBackup", { date: fullDate(SET.lastBackup) }) : L("noBackup");
  function backupDue() {
    if (D.readings.length < 6) return false;
    if (SET.lastBackup && daysBetween(SET.lastBackup, today()) < 14) return false;
    if (SET.backupSnooze && daysBetween(SET.backupSnooze, today()) < 7) return false;
    return true;
  }
  function backupCard() {
    if (!backupDue()) return "";
    return '<div class="card"><div class="eyebrow">' + L("backupEyebrow") + "</div><h3>" + L("backupTitle") + '</h3><p class="small muted">' + lastBackupText() +
      " " + L("backupWhy") + "</p>" +
      '<div class="row"><button class="btn" data-act="export" type="button" style="flex:1">' + L("downloadBackup") + '</button><button class="btn ghost" data-act="backupLater" type="button">' + L("later") + "</button></div></div>";
  }
  function download(blob, name) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  // V natívnej appke sa <a download> nedá použiť: súbor sa zapíše do súkromnej cache appky
  // a otvorí sa systémové Zdieľať (uložiť do Súborov, poslať lekárovi...). Cache sa maže pri štarte.
  const EXPORT_DIR = "export";
  // Filesystem chce base64; po kúskoch, aby veľký súbor nepretiekol zásobník
  function toB64(bytes) {
    let bin = "";
    for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  }
  // Vráti true, keď sa súbor stiahol alebo zdieľal (zrušené zdieľanie = false).
  async function saveFile(blob, name) {
    const FS = plugin("Filesystem"), SH = plugin("Share");
    if (!FS || !SH) { download(blob, name); return true; }
    try {
      const data = toB64(new Uint8Array(await blob.arrayBuffer()));
      const f = await FS.writeFile({ path: EXPORT_DIR + "/" + name, data, directory: "CACHE", recursive: true });
      await SH.share({ title: name, files: [f.uri] });
      return true;
    } catch (e) {
      if (!/cancel/i.test(String(e && (e.message || e)))) toast(L("saveFail"));
      return false;
    }
  }
  function clearExports() {
    const FS = plugin("Filesystem");
    if (FS) FS.rmdir({ path: EXPORT_DIR, directory: "CACHE", recursive: true }).catch(() => { /* priečinok nie je */ });
  }

  // Tabuľka pre Excel: jeden riadok na meranie. Oddeľovač podľa jazyka: „;“ pri desatinnej čiarke (ako Excel v SK, DE…), inak „,“.
  function csvText() {
    const sep = decSep() === "," ? ";" : ",";
    const cell = v => { v = String(v == null ? "" : v); return /[;,"\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    const rows = [L("csvHead").slice()];
    D.readings.forEach(r => {
      rows.push([r.date, r.time, L(partOf(r) === "am" ? "csvAm" : "csvPm"), r.sys, r.dia, r.pulse, cat(r.sys, r.dia).long, armName(r.arm), posName(r.pos),
        TAGS.filter(T => r.tags[T.k]).map(T => T.name).join(", "), r.note]);
    });
    return String.fromCharCode(0xfeff) + rows.map(r => r.map(cell).join(sep)).join("\r\n") + "\r\n";
  }
  function exportCsv() {
    saveFile(new Blob([csvText()], { type: "text/csv;charset=utf-8" }), "blood-pressure-" + today() + ".csv")
      .then(ok => { if (ok && !NATIVE) toast(L("csvDone")); });
  }

  const repDays = () => [14, 30, 90].includes(UI.repDays) ? UI.repDays : 30;
  function reportHtml(days) {
    const to = today(), from = addDays(to, -days + 1);
    const list = inRange(from, to);
    let h = '<div class="rep"><h1>' + L("repTitle") + "</h1>" +
      "<p>" + L("repPeriod", { from: fullDate(from), to: fullDate(to), days: Ln("daysN", days), today: fullDate(to) }) + "</p>";
    if (!list.length) return h + "<p>" + L("repNone") + "</p></div>";
    const a = avgOf(list), am = avgOf(list.filter(r => partOf(r) === "am")), pm = avgOf(list.filter(r => partOf(r) === "pm"));
    const over = list.filter(r => r.sys >= SET.goalSys || r.dia >= SET.goalDia).length;
    const fmtA = x => x.n ? x.sys + "/" + x.dia + " mmHg" + (x.pulse != null ? ", " + L("repPulse", { n: x.pulse }) : "") + " (" + x.n + "×)" : "–";
    const tr = (k, v) => "<tr><th>" + k + "</th><td>" + v + "</td></tr>";
    h += "<h2>" + L("repSummary") + "</h2><table><tbody>" +
      tr(L("repCount"), L("repCountVal", { n: a.n, days: Ln("daysN", new Set(list.map(r => r.date)).size) })) +
      tr(L("repAvgAll"), fmtA(a)) + tr(L("repAvgAm"), fmtA(am)) + tr(L("repAvgPm"), fmtA(pm)) +
      tr(L("repSysRange"), Math.min(...list.map(r => r.sys)) + " – " + Math.max(...list.map(r => r.sys)) + " mmHg") +
      tr(L("repDiaRange"), Math.min(...list.map(r => r.dia)) + " – " + Math.max(...list.map(r => r.dia)) + " mmHg") +
      tr(L("repOver", { goal: goalText() }), L("repOverVal", { n: over, total: a.n })) + "</tbody></table>";
    const wk = D.weeks.filter(w => w.end >= from);
    if (wk.length) h += "<h2>" + L("repWeek") + "</h2><ul>" + wk.map(w => "<li>" + fullDate(w.start) + " – " + fullDate(w.end) + ": " + w.sys + "/" + w.dia + " mmHg" + (w.pulse != null ? ", " + L("repPulse", { n: w.pulse }) : "") + " (" + readingsN(w.n) + ")</li>").join("") + "</ul>";
    h += "<h2>" + L("repByReading") + '</h2><div class="rep-wide"><table><thead><tr><th>' + L("date") + "</th><th>" + L("time") + "</th><th>" + L("repBp") + "</th><th>" + L("pulse") + "</th><th>" + L("arm") + "</th><th>" + L("repNoteCol") + "</th></tr></thead><tbody>" +
      list.slice().reverse().map(r => "<tr><td>" + short(r.date) + "</td><td>" + r.time + "</td><td>" + r.sys + "/" + r.dia + "</td><td>" + (r.pulse != null ? r.pulse : "") + "</td><td>" + armName(r.arm) +
        (r.pos !== "sit" ? ", " + posName(r.pos).toLowerCase() : "") + "</td><td>" + esc(TAGS.filter(T => r.tags[T.k]).map(T => T.name).concat(r.note ? [r.note] : []).join(", ")) + "</td></tr>").join("") +
      "</tbody></table></div>";
    return h + '<p class="rep-note">' + L("repFoot", { goal: goalText() }) + "</p></div>";
  }
  function openReport() {
    const days = repDays();
    let h = sheetTop(L("forDoctor"), "×") + '<div class="scroll">';
    h += '<div class="head"><h2>' + L("doctorReport") + '</h2><p class="small muted">' + L("repIntro") + "</p></div>";
    h += '<div class="seg" role="group" aria-label="' + esc(L("period")) + '" style="--n:3">' + [14, 30, 90].map(d => '<button type="button" data-repdays="' + d + '" aria-pressed="' + (d === days) + '">' + Ln("daysN", d) + "</button>").join("") + "</div>";
    h += '<div class="card">' + reportHtml(days) + "</div>";
    h += '<button class="btn" data-act="printReport" type="button">' + L(NATIVE ? "shareReport" : "print") + "</button>";
    if (NATIVE) h += '<p class="small muted">' + L("reportNativeNote") + "</p>";
    h += '<button class="btn ghost" data-act="exportCsv" type="button">' + L("downloadCsv") + "</button></div>";
    showSheet(h);
  }
  // Samostatná stránka s prehľadom pre natívnu appku (WebView nevie tlačiť): otvorí sa v prehliadači, odkiaľ sa dá vytlačiť.
  function reportDoc() {
    return '<!doctype html><html lang="' + esc(LOC()) + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
      "<title>" + esc(L("repTitle")) + "</title><style>" +
      "body{font:15px/1.45 system-ui,sans-serif;color:#000;background:#fff;margin:0 auto;max-width:760px;padding:16px}" +
      "h1{font-size:22px;margin:0 0 6px}h2{font-size:17px;margin:18px 0 6px}p{margin:4px 0}ul{margin:4px 0;padding-left:20px}" +
      "table{border-collapse:collapse;width:100%;font-variant-numeric:tabular-nums}th,td{text-align:left;padding:4px 6px;border-bottom:1px solid #999;vertical-align:top}" +
      "th{font-weight:500;color:#333}.rep-wide{overflow-x:auto}.rep-wide td,.rep-wide th{white-space:nowrap}.rep-note{color:#333;font-size:13px;margin-top:14px}" +
      "@media print{@page{margin:14mm}body{padding:0}}</style></head><body>" + reportHtml(repDays()) + "</body></html>";
  }
  function printReport() {
    if (NATIVE) { saveFile(new Blob([reportDoc()], { type: "text/html" }), "blood-pressure-report-" + today() + ".html"); return; }
    const el = $("#print");
    if (!el) return;
    el.innerHTML = reportHtml(repDays());
    if (typeof window.print === "function") window.print();
  }

  function exportData() {
    const blob = new Blob([JSON.stringify({ app: "blood-pressure", exported: new Date().toISOString(), data: D, settings: SET }, null, 2)], { type: "application/json" });
    const done = () => {
      SET.lastBackup = today(); SET.backupSnooze = null; saveSet();
      if (!$("#sheet").hidden && $("#sheet").innerHTML.includes('data-act="askReset"')) openSettings(); else if ($("#sheet").hidden) render();
    };
    // natívna appka: dátum zálohy sa zapamätá, až keď používateľ súbor naozaj zdieľal alebo uložil
    if (NATIVE) { saveFile(blob, "blood-pressure-" + today() + ".json").then(ok => { if (ok) done(); }); return; }
    download(blob, "blood-pressure-" + today() + ".json");
    done();
    toast(L("backupDone"));
  }
  // Obnovenie zo zálohy nahradí všetky dáta.
  function importFile(file) {
    if (!file) return;
    const fail = () => infoModal(L("importFail"), L("importFailText"));
    file.text().then(txt => {
      let b;
      try { b = JSON.parse(txt); } catch (e) { fail(); return; }
      if (!b || b.app !== "blood-pressure" || !b.data || !Array.isArray(b.data.readings)) { fail(); return; }
      const nd = tidy(b.data);
      const w = b.exported ? new Date(b.exported) : null;
      const date = w && !isNaN(w) ? w.toLocaleDateString(LOC()) : L("unknownDate");
      confirmModal({
        title: L("restoreQ"),
        text: L("restoreText", { date: esc(date), readings: readingsN(nd.readings.length) }),
        ok: L("restoreBtn"), danger: true
      }, () => {
        D = nd;
        if (b.settings && typeof b.settings === "object") {
          // jazyk a stav zálohy zostanú z tohto zariadenia
          const keep = { installDismissed: SET.installDismissed, lastBackup: SET.lastBackup, backupSnooze: SET.backupSnooze, lang: SET.lang };
          try { localStorage.setItem(SET_KEY, JSON.stringify(b.settings)); } catch (e) { /* nič */ }
          load();   // rovnaká kontrola nastavení ako pri spustení
          D = nd;
          Object.assign(SET, keep);
          saveSet(); applyTheme();
        }
        save();
        UI.tab = "today";
        closeModal(); closeSheet();
        toast(L("restored"));
      });
    }).catch(fail);
  }
  function resetAll() {
    D = emptyData();
    try { localStorage.removeItem(DATA_KEY); } catch (e) { /* nič */ }
    UI.tab = "today";
    closeModal();
    closeSheet();
    toast(L("deletedAll"));
  }

  // ---------- Sheet, okná, toast ----------
  function showSheet(h, keepFocus) {
    const el = $("#sheet");
    el.innerHTML = h; el.hidden = false;
    if (!keepFocus) { const f = el.querySelector("button"); if (f) f.focus({ preventScroll: true }); }
  }
  function closeSheet() { $("#sheet").hidden = true; $("#sheet").innerHTML = ""; UI.f = null; render(); }

  let modalOk = null;
  function confirmModal(o, onOk) {
    const m = $("#modal");
    m.innerHTML = '<div class="modal-card" role="alertdialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-text">' +
      '<h3 id="modal-title">' + o.title + '</h3><p id="modal-text" class="small">' + o.text + "</p>" +
      '<div class="row"><button class="btn ghost" data-act="modalCancel" type="button">' + L("cancel") + "</button>" +
      '<button class="btn ' + (o.danger ? "danger-fill" : "") + '" data-act="modalOk" type="button">' + o.ok + "</button></div></div>";
    m.hidden = false;
    modalOk = onOk;
    const c = m.querySelector('[data-act="modalCancel"]'); if (c) c.focus();
  }
  function infoModal(title, text) {
    const m = $("#modal");
    m.innerHTML = '<div class="modal-card" role="alertdialog" aria-modal="true" aria-labelledby="modal-title"><h3 id="modal-title">' + title + '</h3><p class="small">' + text + "</p>" +
      '<button class="btn" data-act="modalCancel" type="button">' + L("understood") + "</button></div>";
    m.hidden = false; modalOk = null;
  }
  function closeModal() { $("#modal").hidden = true; $("#modal").innerHTML = ""; modalOk = null; }

  let toastT;
  function toast(t) { const el = $("#toast"); el.textContent = t; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { el.hidden = true; }, 2800); }

  // ---------- Vykreslenie a udalosti ----------
  function render() {
    if (D.week && today() > weekEnd()) {
      const res = concludeWeek();
      toast(res ? L("weekEvaluated", { bp: res.sys + "/" + res.dia }) : L("weekEmpty"));
    }
    const v = { today: viewToday, hist: viewHist, stats: viewStats, week: viewWeek }[UI.tab];
    $("#view").innerHTML = v();
    $("#view").scrollTop = 0;
    document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-current", t.dataset.tab === UI.tab ? "page" : "false"));
  }

  document.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.tab) { UI.tab = b.dataset.tab; render(); return; }
    if (b.dataset.goto) { UI.tab = b.dataset.goto; render(); return; }
    if (b.dataset.period) { UI.period = Number(b.dataset.period); render(); return; }
    if (b.dataset.farm && UI.f) { UI.f.arm = b.dataset.farm; renderSegs("farm", UI.f.arm); return; }
    if (b.dataset.fpos && UI.f) { UI.f.pos = b.dataset.fpos; renderSegs("fpos", UI.f.pos); return; }
    if (b.dataset.ftag && UI.f) { const k = b.dataset.ftag; UI.f.tags[k] = !UI.f.tags[k]; if (!UI.f.tags[k]) delete UI.f.tags[k]; b.setAttribute("aria-pressed", String(!!UI.f.tags[k])); return; }
    if (b.dataset.themeSet) { SET.theme = b.dataset.themeSet; saveSet(); applyTheme(); openSettings(); return; }
    if (b.dataset.armset) { SET.arm = b.dataset.armset; saveSet(); openSettings(); return; }
    if (b.dataset.repdays) { UI.repDays = Number(b.dataset.repdays); openReport(); return; }
    switch (b.dataset.act) {
      case "settings": openSettings(); break;
      case "add": openForm(); break;
      case "addSecond": { const r = D.readings.find(x => x.id === UI.lastId); openForm(null, r || null); break; }
      case "open": { const r = D.readings.find(x => x.id === b.dataset.id); if (r) openForm(r); break; }
      case "saveForm": saveForm(); break;
      case "askDelReading": {
        const r = UI.f && D.readings.find(x => x.id === UI.f.id);
        if (!r) break;
        confirmModal({ title: L("deleteReadingQ"), text: L("deleteReadingText", { bp: r.sys + "/" + r.dia, when: short(r.date) + " " + r.time }), ok: L("deleteBtn"), danger: true }, () => {
          D.readings = D.readings.filter(x => x.id !== r.id); save(); closeModal(); closeSheet(); toast(L("readingDeleted"));
        });
        break;
      }
      case "more": UI.histN += 40; render(); break;
      case "close": closeSheet(); break;
      case "startWeek": D.week = { start: today() }; save(); toast(L("weekStarted")); render(); break;
      case "concludeWeek": {
        if (!canConclude()) break;
        const res = concludeWeek();
        toast(res ? L("weekDone", { bp: res.sys + "/" + res.dia }) : L("weekEmpty"));
        render(); break;
      }
      case "cancelWeek":
        confirmModal({ title: L("cancelWeekQ"), text: L("cancelWeekText"), ok: L("cancelWeekBtn"), danger: true }, () => {
          D.week = null; save(); closeModal(); render(); toast(L("weekCancelled"));
        });
        break;
      case "export": exportData(); break;
      case "exportCsv": exportCsv(); break;
      case "backupLater": SET.backupSnooze = today(); saveSet(); render(); break;
      case "privacy": openPrivacy(); break;
      case "report": openReport(); break;
      case "printReport": printReport(); break;
      case "import": { const f = $("#import-file"); if (f) { f.value = ""; f.click(); } break; }
      case "askReset":
        confirmModal({
          title: L("deleteAllQ"),
          text: L("deleteAllText", { backup: lastBackupText() }),
          ok: L("deleteAllBtn"), danger: true
        }, resetAll);
        break;
      case "modalOk": if (modalOk) modalOk(); break;
      case "modalCancel": closeModal(); break;
      case "install":
        if (installPrompt) {
          installPrompt.prompt();
          installPrompt.userChoice.finally(() => { installPrompt = null; render(); });
        }
        break;
      case "installLater": SET.installDismissed = true; saveSet(); render(); break;
    }
  });
  function renderSegs(attr, cur) {
    document.querySelectorAll("[data-" + attr + "]").forEach(x => x.setAttribute("aria-pressed", String(x.dataset[attr] === cur)));
  }
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
  const FORM_FIELDS = { "f-sys": "sys", "f-dia": "dia", "f-pulse": "pulse", "f-date": "date", "f-time": "time", "f-note": "note" };
  document.addEventListener("input", e => {
    const id = e.target.id;
    if (FORM_FIELDS[id] && UI.f) {
      UI.f[FORM_FIELDS[id]] = e.target.value;
      if (id === "f-sys" || id === "f-dia" || id === "f-pulse") e.target.removeAttribute && e.target.removeAttribute("aria-invalid");
      // po 3 číslach horného tlaku skoč na dolný (na mobile ušetrí ťuknutie)
      if (id === "f-sys" && /^\d{3}$/.test(e.target.value)) { const n = $("#f-dia"); if (n && n.focus) n.focus(); }
      return;
    }
    if (id === "set-name") { SET.name = e.target.value.trim().slice(0, 30); saveSet(); }
    if (id === "set-gsys" || id === "set-gdia") {
      const gs = $("#set-gsys"), gd = $("#set-gdia");
      const s = /^\d{2,3}$/.test(gs.value.trim()) ? +gs.value.trim() : null, d = /^\d{2,3}$/.test(gd.value.trim()) ? +gd.value.trim() : null;
      const ok = goalOk(s, d);
      gs.setAttribute("aria-invalid", ok ? "false" : "true"); gd.setAttribute("aria-invalid", ok ? "false" : "true");
      if (ok) { SET.goalSys = s; SET.goalDia = d; saveSet(); }
      const err = $("#err-goal");
      if (err) { err.textContent = ok ? "" : L("goalErr"); err.hidden = ok; }
    }
  });
  document.addEventListener("change", e => {
    if (e.target.id === "import-file") importFile(e.target.files && e.target.files[0]);
    if (e.target.id === "set-lang") setLanguage(e.target.value);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Enter" && UI.f && /^f-/.test(e.target.id || "")) { e.preventDefault && e.preventDefault(); saveForm(); return; }
    if (e.key !== "Escape") return;
    if (!$("#modal").hidden) closeModal();
    else if (!$("#sheet").hidden) closeSheet();
  });

  // ---------- Inštalácia ----------
  // Chrome a Edge pošlú beforeinstallprompt, keď sa appka dá nainštalovať. Na iPhone len ručne cez Zdieľať → Pridať na plochu.
  let installPrompt = null;
  const isStandalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  function installCard() {
    if (NATIVE || isStandalone() || SET.installDismissed) return "";
    if (installPrompt) {
      return '<div class="card"><h3>' + L("installTitle") + '</h3><p class="small muted">' + L("installText") + "</p>" +
        '<div class="row"><button class="btn" data-act="install" type="button" style="flex:1">' + L("installBtn") + '</button><button class="btn ghost" data-act="installLater" type="button">' + L("later") + "</button></div></div>";
    }
    if (isIOS) {
      return '<div class="card"><h3>' + L("iosTitle") + '</h3><p class="small muted">' + L("iosText") + "</p>" +
        '<button class="btn ghost" data-act="installLater" type="button">' + L("understood") + "</button></div>";
    }
    return "";
  }
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    installPrompt = e;
    if (UI.tab === "today" && $("#sheet").hidden) render();
  });
  window.addEventListener("appinstalled", () => { installPrompt = null; toast(L("installed")); render(); });

  // keď sa appka otvorí na druhý deň, obrazovka sa obnoví na aktuálny dátum
  let shownDay = today();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    if (today() !== shownDay && $("#sheet").hidden) { shownDay = today(); render(); }
  });
  // Appka môže byť otvorená dvakrát (nainštalovaná + karta v Chrome): zmeny z druhej kópie načítame.
  window.addEventListener("storage", e => {
    if (e.key !== DATA_KEY && e.key !== SET_KEY && e.key !== null) return;
    if (e.key !== SET_KEY) D = emptyData();
    load();
    applyLang();
    applyTheme();
    if ($("#sheet").hidden) render();
  });

  load();
  applyLang();
  applyTheme();
  render();

  // Tlačidlo Späť v Androide: zavrie okno alebo obrazovku, na úvodnej obrazovke appku len odloží do pozadia.
  const APP = plugin("App");
  if (APP) APP.addListener("backButton", () => {
    if (!$("#modal").hidden) closeModal();
    else if (!$("#sheet").hidden) closeSheet();
    else if (UI.tab !== "today") { UI.tab = "today"; render(); }
    else if (APP.minimizeApp) APP.minimizeApp().catch(() => {});
  });
  clearExports();

  // v natívnej appke sú súbory priamo v balíku, service worker netreba
  if (!NATIVE && "serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => { /* offline režim nie je dostupný */ });
  }
})();
