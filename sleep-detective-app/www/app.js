/* Sleep Detective – hlavný skript appky (obrazovky, záznamy, nočný zvuk, zálohy).
   Je v samostatnom súbore, lebo Content-Security-Policy v index.html nedovoľuje skripty vložené priamo do stránky.
   Texty sú v i18n/*.js, detektor zvuku v sound.js. */
(function () {
  "use strict";

  // ---------- Jazyk ----------
  // Všetky texty sú v slovníkoch i18n/<kód>.js (zdroj i18n/sk.js, kľúče rovnaké vo všetkých jazykoch).
  // L(kľúč, premenné) = text; Ln(kľúč, počet, premenné) = text v správnom tvare množného čísla.
  const I18 = SDI18N;
  const L = (k, v) => I18.t(k, v);
  const Ln = (k, n, v) => I18.t(k, Object.assign({ n }, v));
  const LOC = () => I18.htmlLang();   // jazyk pre formát dátumu a čísel
  const decSep = () => { const d = I18.dict(I18.lang()); return (d && d._dec) || ","; };
  // názov faktora uprostred vety malým písmenom (v nemčine sa podstatné mená píšu veľkým)
  const lc = s => I18.lang() === "de" ? s : s.toLowerCase();

  // ---------- Číselníky ----------
  // Názvy faktorov sú v slovníku: fac.<k> (názov), fac.<k>.exp (experiment), fac.<k>.short (do vety).
  const BASE_FACTORS = [
    { k: "coffee", icon: "☕" }, { k: "phone", icon: "📱" }, { k: "alcohol", icon: "🍷" }, { k: "lateMeal", icon: "🍝" },
    { k: "stress", icon: "😣" }, { k: "sportEve", icon: "🏃" }, { k: "nap", icon: "💤" }
  ];
  // Vlastné faktory si používateľ pridá v nastaveniach (D.custom). Zoznam FACTORS sa skladá znova po každej zmene.
  const MAX_CUSTOM = 8;
  const CUSTOM_ICONS = ["🔹", "🌡️", "🖥️", "🍫", "🍺", "🚬", "💊", "🧘", "🌙", "🩸", "🧳", "🐶"];
  const cleanName = v => String(v == null ? "" : v).replace(/[<>&"'`\\]/g, "").replace(/\s+/g, " ").trim().slice(0, 30);
  let FACTORS = BASE_FACTORS, FMAP = {};
  // Dáta z úložiska alebo zo zálohy – súbor so zálohou môže byť podvrhnutý. Ponecháme len očakávaný tvar
  // a z textov a kľúčov odstránime znaky, ktorými by sa dal do stránky vložiť HTML kód. Pri obnove zo zálohy
  // a pri spustení tak cudzí kód neprejde, ani keby sa niekde zabudlo na esc().
  const UNSAFE = /[<>&"'`\\]/g, UNSAFE1 = /[<>&"'`\\]/;
  const isObj = v => !!v && typeof v === "object" && !Array.isArray(v);
  const okDate = v => typeof v === "string" && /^\d{4}-\d\d-\d\d$/.test(v);
  function cleanDeep(v, depth) {
    if (typeof v === "string") return v.replace(UNSAFE, "");
    if (typeof v === "number") return isFinite(v) ? v : null;
    if (typeof v === "boolean" || v === null) return v;
    if (depth > 8 || typeof v !== "object") return null;
    if (Array.isArray(v)) return v.map(x => cleanDeep(x, depth + 1));
    const o = {};
    Object.keys(v).forEach(k => { if (!UNSAFE1.test(k) && k !== "__proto__") o[k] = cleanDeep(v[k], depth + 1); });
    return o;
  }
  function cleanData(d) {
    const x = Object.assign(emptyData(), cleanDeep(isObj(d) ? d : {}, 0));
    x.nights = (Array.isArray(x.nights) ? x.nights : []).filter(n => isObj(n) && okDate(n.date));
    ["evenings", "verdicts", "sounds"].forEach(k => { if (!isObj(x[k])) x[k] = {}; });
    Object.keys(x.evenings).forEach(k => {
      const e = x.evenings[k];
      if (!okDate(k) || !isObj(e)) delete x.evenings[k]; else if (!isObj(e.f)) e.f = {};
    });
    Object.keys(x.sounds).forEach(k => { if (!okDate(k) || !isObj(x.sounds[k])) delete x.sounds[k]; });
    Object.keys(x.verdicts).forEach(k => { if (!isObj(x.verdicts[k])) delete x.verdicts[k]; });
    x.closed = (Array.isArray(x.closed) ? x.closed : []).filter(isObj).map(c => {
      if (!okDate(c.from) || !okDate(c.to)) { delete c.from; delete c.to; }
      return c;
    });
    if (!isObj(x.exp) || typeof x.exp.k !== "string" || !okDate(x.exp.start) || !Number.isInteger(x.exp.length)) x.exp = null;
    if (!Array.isArray(x.custom)) x.custom = [];
    return x;
  }
  function refreshFactors() {
    const custom = Array.isArray(D.custom) ? D.custom.filter(c => c && /^c[a-z0-9]{1,20}$/.test(c.k) && cleanName(c.name)) : [];
    D.custom = custom.map(c => ({ k: c.k, name: cleanName(c.name), icon: CUSTOM_ICONS.includes(c.icon) ? c.icon : CUSTOM_ICONS[0] }));
    FACTORS = BASE_FACTORS.map(f => ({ k: f.k, icon: f.icon, name: L("fac." + f.k), exp: L("fac." + f.k + ".exp"), expShort: L("fac." + f.k + ".short") }))
      .concat(D.custom.map(c => ({ k: c.k, name: c.name, icon: c.icon, custom: true,
        exp: L("customExp", { name: c.name }), expShort: L("customExpShort", { name: lc(c.name) }) })));
    FMAP = Object.fromEntries(FACTORS.map(f => [f.k, f]));
    if (D.exp && !Object.prototype.hasOwnProperty.call(FMAP, D.exp.k)) D.exp = null;   // experiment s neznámym faktorom
    D.body = cleanBody(D.body);   // aj telesné údaje z úložiska či zálohy skontrolujeme
  }
  const METRICS = [
    { k: "latency", get label() { return L("m.latency"); }, better: "low",  thr: 10,   fmt: v => L("unitMin", { n: Math.round(v) }) },
    { k: "wakes",   get label() { return L("m.wakes"); },   better: "low",  thr: 0.5,  fmt: v => dec(v) + "×" },
    { k: "quality", get label() { return L("m.quality"); }, better: "high", thr: 0.45, fmt: v => dec(v) + " / 5" }
  ];
  const STATUS = {};
  [["confirmed", "t-bad"], ["prime", "t-bad"], ["suspect", "t-mid"], ["clear", "t-good"], ["acquitted", "t-good"], ["maybe", "t-mid"], ["few", "t-few"]]
    .forEach(([k, cls]) => { STATUS[k] = { cls, get label() { return L("st." + k); } }; });
  const MIN_NIGHTS = 7;     // od koľkých nocí so záznamom večera aj rána sa ukáže spis
  const GOOD_NIGHTS = 14;   // od koľkých nocí sú výsledky spoľahlivejšie

  // ---------- Pomocné funkcie ----------
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const dec = v => (Math.round(v * 10) / 10).toFixed(1).replace(".", decSep());
  const dec0 = v => dec(v).replace(/[.,]0$/, "");   // bez ",0" na konci
  const mean = a => a.length ? a.reduce((s, x) => s + x, 0) / a.length : 0;
  const variance = a => { if (a.length < 2) return 0; const m = mean(a); return a.reduce((s, x) => s + (x - m) * (x - m), 0) / (a.length - 1); };
  // Približná neistota rozdielu dvoch priemerov (2 smerodajné chyby ≈ 95 % interval).
  const diffErr = (a, b) => 2 * Math.sqrt(variance(a) / Math.max(1, a.length) + variance(b) / Math.max(1, b.length));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const toD = s => new Date(s + "T12:00:00");
  const iso = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const today = () => iso(new Date());
  const addDays = (s, n) => { const d = toD(s); d.setDate(d.getDate() + n); return iso(d); };
  // dátumy vo formáte zvoleného jazyka (Intl)
  const dtfCache = {};
  const dtf = (id, o) => { const k = LOC() + "|" + id; return dtfCache[k] || (dtfCache[k] = new Intl.DateTimeFormat(LOC(), o)); };
  const short = s => dtf("s", { day: "numeric", month: "numeric" }).format(toD(s));
  const longRaw = s => dtf("l", { weekday: "long", day: "numeric", month: "long" }).format(toD(s));
  const long = s => { const w = longRaw(s); return w.charAt(0).toUpperCase() + w.slice(1); };
  const hmShort = h => { const m = Math.round(h * 60); return Math.floor(m / 60) + ":" + String(m % 60).padStart(2, "0"); };
  const clock = ms => { const d = new Date(ms); return d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0"); };
  const nightsN = n => Ln("pl.nights", n);   // „3 noci“

  // ---------- Natívna appka (Capacitor: Android, iOS) ----------
  // V prehliadači window.Capacitor nie je a appka beží ako PWA. V natívnej appke sa súbory namiesto
  // sťahovania zdieľajú (Filesystem + Share), obrazovku drží zapnutú KeepAwake a tlačidlo Späť rieši App.
  const NATIVE = !!(window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform());
  const plugin = name => NATIVE && window.Capacitor.Plugins ? window.Capacitor.Plugins[name] || null : null;
  // Záznam na pozadí (Android): natívna služba na popredí so stálym upozornením v lište. Kým beží,
  // obrazovka môže zhasnúť a appka môže byť na pozadí – ako diktafón. Na iOS a v prehliadači nie je.
  const bgPlugin = () => plugin("BackgroundRecording");

  // ---------- Stav ----------
  // D = dáta, ktoré zadal používateľ. SET = nastavenia. UI = stav obrazovky (neukladá sa).
  const DATA_KEY = "sleepDetective.data.v2";
  const SET_KEY = "sleepDetective.settings.v1";
  const LEGACY_KEY = "sleepDetective.state.v1";   // staré ukážkové dáta z prototypu
  const emptyData = () => ({
    nights: [],      // ranné check-iny: { date, quality, duration, latency, wakes, energy }
    evenings: {},    // večerné záznamy podľa dátumu: { f: {faktor: true}, temp }
    exp: null,       // bežiaci experiment: { k, start, length }
    verdicts: {},    // výsledky experimentov podľa faktora
    closed: [],      // uzavreté experimenty
    sounds: {},      // nočné záznamy zvuku podľa dátumu rána (súhrn; ukážky sú v IndexedDB)
    custom: [],      // vlastné faktory: { k, name, icon }
    body: { height: null, weights: [], birthYear: null, sex: null }   // nepovinné: výška (cm), história hmotnosti [{ date, kg }], rok narodenia, pohlavie "f"/"m"
  });
  let D = emptyData();
  let SET = { theme: "dark", lang: I18.DEFAULT, name: "", expLength: 7, installDismissed: false, soundSensitivity: "medium",
    clipSnoreN: 4, clipSnoreSec: 10, clipNoiseN: 8, clipNoiseSec: 10, clipKbps: 32,
    soundAudio: true, soundFull: false, fullKeepDays: 14,
    autoOn: false, autoFrom: "22:30", autoTo: "07:00",
    recNotice: false,       // používateľ videl upozornenie o ľuďoch v izbe pred prvým nahrávaním
    powerAsked: false,      // Android: pred prvým záznamom sme ponúkli nastavenie batérie (beh na pozadí)
    lastBackup: null, backupSnooze: null };   // dátum poslednej stiahnutej zálohy a odloženia pripomienky   // automatické spustenie a ukončenie nočného záznamu   // fullKeepDays: koľko dní uchovávať nahrávky celej noci (1–14)   // soundAudio: ukladať nahrávky vôbec; soundFull: aj celú noc, nielen ukážky   // ukážky: počet za noc a dĺžka v s pre každý druh zvuku
  const UI = { tab: "today", logMode: new Date().getHours() >= 15 ? "evening" : "morning", msg: null, evDate: null };   // evDate: doplňovaný včerajší večer

  function save() {
    try { localStorage.setItem(DATA_KEY, JSON.stringify(D)); } catch (e) { /* bez úložiska appka beží len do zatvorenia */ }
  }
  function saveSet() {
    try { localStorage.setItem(SET_KEY, JSON.stringify(SET)); } catch (e) { /* nastavenie sa len nezapamätá */ }
  }
  function load() {
    try { localStorage.removeItem(LEGACY_KEY); } catch (e) { /* nič */ }
    try {
      const d = JSON.parse(localStorage.getItem(DATA_KEY));
      if (d && Array.isArray(d.nights)) D = cleanData(d);
    } catch (e) { /* poškodené dáta ignorujeme */ }
    D.nights.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
    refreshFactors();
    try {
      const s = JSON.parse(localStorage.getItem(SET_KEY));
      if (s) {
        // staršie nastavenie „ukladať ukážky: nie“ = žiadne ukážky
        if (s.soundClips === false && s.clipSnoreN === undefined) { s.clipSnoreN = 0; s.clipNoiseN = 0; }
        delete s.soundClips;
        // aj nastavenia môžu pochádzať zo zálohy: texty bez znakov HTML (meno sa pri zobrazení ošetruje esc())
        const c = cleanDeep(isObj(s) ? s : {}, 0);
        if (typeof s.name === "string") c.name = s.name.slice(0, 30);
        SET = Object.assign(SET, c);
      }
    } catch (e) { /* predvolené nastavenia */ }
    if (!I18.has(SET.lang)) SET.lang = I18.DEFAULT;
    I18.setLang(SET.lang);
    refreshFactors();   // názvy faktorov v zvolenom jazyku
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

  // ---------- Vzhľad ----------
  const lightQuery = matchMedia("(prefers-color-scheme: light)");
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", SET.theme);
    const light = SET.theme === "light" || (SET.theme === "system" && lightQuery.matches);
    $("#theme-color").setAttribute("content", light ? "#f3f5fa" : "#141a2d");
  }
  lightQuery.addEventListener("change", applyTheme);

  // ---------- Dáta pre analýzu ----------
  // Ranný záznam z dňa D patrí k večeru dňa D-1. Faktory sa berú z večerného záznamu.
  function nightsF() {
    return D.nights.map(n => {
      const ev = D.evenings[addDays(n.date, -1)];
      return Object.assign({}, n, { f: ev ? ev.f : null });
    });
  }
  const analyzable = () => nightsF().filter(n => n.f);

  function analyze(list) {
    return FACTORS.map(F => {
      const w = list.filter(n => n.f[F.k]), wo = list.filter(n => !n.f[F.k]);
      const r = { F, nWith: w.length, nWithout: wo.length, m: {} };
      let best = null;
      for (const M of METRICS) {
        const av = w.map(n => n[M.k]), bv = wo.map(n => n[M.k]);
        const a = mean(av), b = mean(bv);
        const harm = (M.better === "low" ? a - b : b - a) / M.thr;
        r.m[M.k] = { a, b, harm, err: diffErr(av, bv) };
        if (!best || harm > best.harm) best = { M, a, b, harm, err: r.m[M.k].err };
      }
      r.best = best;
      const v = D.verdicts[F.k];
      if (v) r.status = v.confirmed ? "confirmed" : "acquitted";
      else if (w.length < 3 || wo.length < 3) r.status = "few";
      else if (best.harm >= 2.2) r.status = "prime";
      else if (best.harm >= 1.1) r.status = "suspect";
      else r.status = "clear";
      // rozdiel menší ako jeho neistota môže byť náhoda (rozptyl nocí je veľký, nocí málo)
      if ((r.status === "prime" || r.status === "suspect") && Math.abs(best.a - best.b) <= best.err) r.status = "maybe";
      r.with = companions(F, list);
      const order = { confirmed: 5, prime: 4, suspect: 3, maybe: 2, clear: 1, acquitted: 0, few: -1 };
      r.rank = order[r.status] * 10 + Math.max(0, best.harm);
      return r;
    }).sort((x, y) => y.rank - x.rank);
  }

  // Faktory, ktoré prišli väčšinou spolu s F: ich vplyv sa z porovnania nedá oddeliť.
  function companions(F, list) {
    const w = list.filter(n => n.f[F.k]);
    if (w.length < 3) return [];
    return FACTORS.filter(G => G.k !== F.k).map(G => {
      const both = w.filter(n => n.f[G.k]).length, g = list.filter(n => n.f[G.k]).length;
      return { G, both, nF: w.length, nG: g };
    }).filter(c => c.both / c.nF >= 0.7 && c.both / c.nG >= 0.6);
  }

  function sentence(r) {
    const v = verdictText(r.F.k);
    if (v) return v.text;
    if (r.status === "few") {
      if (r.nWith < 3) return L("sFewWith", { nights: nightsN(r.nWith) });
      return L("sFewWithout", { nights: nightsN(r.nWithout) });
    }
    if (r.status === "clear") return L("sClear");
    if (r.status === "maybe") {
      const { M, a, b } = r.best;
      return L("sMaybe", { metric: M.label, a: M.fmt(a), b: M.fmt(b) });
    }
    const { M, a, b } = r.best;
    if (M.k === "latency") return L("sLatency", { d: Math.round(a - b), a: Math.round(a), b: Math.round(b) });
    if (M.k === "wakes") return L("sWakes", { a: dec(a), b: dec(b) });
    return L("sQuality", { a: dec(a), b: dec(b) });
  }

  // ---------- Graf ----------
  function nightChart(F, M, list, opts) {
    opts = opts || {};
    const nights = list.slice(-30);
    const W = 340, H = 132, pl = 30, pr = 4, pt = 10, pb = 22;
    const vals = nights.map(n => n[M.k]);
    const max = M.k === "quality" ? 5 : M.k === "wakes" ? Math.max(3, Math.ceil(Math.max(...vals))) : Math.max(10, Math.ceil(Math.max(...vals) / 10) * 10);
    const bw = (W - pl - pr) / Math.max(nights.length, 7), ih = H - pt - pb;
    const y = v => pt + ih - (v / max) * ih;
    let s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + L("chartAria", { metric: M.label }) + '">';
    [0, max / 2, max].forEach(t => {
      s += '<line class="grid" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y(t) + '" y2="' + y(t) + '"/>';
      s += '<text x="' + (pl - 5) + '" y="' + (y(t) + 3) + '" text-anchor="end">' + (M.k === "latency" ? Math.round(t) : dec0(t)) + "</text>";
    });
    nights.forEach((n, i) => {
      const v = n[M.k], h = Math.max(1.5, (v / max) * ih);
      const x = pl + i * bw + 1.2, w = Math.max(2, bw - 2.4);
      s += '<rect class="' + (n.f[F.k] ? "b-on" : "b-off") + '" x="' + x.toFixed(1) + '" y="' + (pt + ih - h).toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) + '" rx="1.5"><title>' + short(n.date) + ": " + M.fmt(v) + (n.f[F.k] ? " · " + F.name : "") + "</title></rect>";
      if (opts.expMark && D.exp && D.exp.k === F.k && n.date >= D.exp.start) {
        s += '<rect class="b-exp" x="' + x.toFixed(1) + '" y="' + (pt + ih + 3) + '" width="' + w.toFixed(1) + '" height="3" rx="1"/>';
      }
    });
    s += '<text x="' + pl + '" y="' + (H - 4) + '">' + short(nights[0].date) + "</text>";
    if (nights.length > 1) s += '<text x="' + (pl + nights.length * bw) + '" y="' + (H - 4) + '" text-anchor="end">' + short(nights[nights.length - 1].date) + "</text>";
    return '<div class="chart">' + s + "</svg></div>";
  }

  // ---------- Experiment ----------
  function expNights() {
    if (!D.exp) return [];
    return nightsF().filter(n => n.date >= D.exp.start).slice(0, D.exp.length);
  }
  const brokeRule = (n, k) => !!(n.f && n.f[k]);

  function concludeExp() {
    const k = D.exp.k, F = FMAP[k];
    const all = nightsF();
    const en = expNights();
    const kept = en.filter(n => !brokeRule(n, k));
    const pre = all.filter(n => n.date < D.exp.start && n.f);
    const preW = pre.filter(n => n.f[k]), preWo = pre.filter(n => !n.f[k]);
    // porovnávame tú vec, v ktorej bol faktor podozrivý (pri nedostatku dát zaspávanie)
    let M = METRICS[0];
    if (preW.length && preWo.length) {
      let bestH = -Infinity;
      METRICS.forEach(m => {
        const a = mean(preW.map(n => n[m.k])), b = mean(preWo.map(n => n[m.k]));
        const hh = (m.better === "low" ? a - b : b - a) / m.thr;
        if (hh > bestH) { bestH = hh; M = m; }
      });
    }
    // Výsledok sa ukladá ako čísla (r), text sa skladá až pri zobrazení – v jazyku, ktorý je práve zvolený.
    const from = D.exp.start, to = en.length ? en[en.length - 1].date : today();
    const base = { k, icon: F.icon, name: F.exp, from, to };
    let msg;
    if (preW.length < 2 || kept.length < 3) {
      const r = preW.length < 2 ? { c: "noBase", n: preW.length } : { c: "fewKept", kept: kept.length, total: en.length };
      D.closed.unshift(Object.assign(base, { tone: "t-few", lab: "none", r }));
      msg = L("msgExpNoVerdict");
    } else {
      const before = mean(preW.map(n => n[M.k])), during = mean(kept.map(n => n[M.k]));
      const gain = (M.better === "low" ? before - during : during - before) / M.thr;
      const confirmed = gain >= 1;
      const r = { c: "res", m: M.k, before, during };
      D.verdicts[k] = { confirmed, r };
      D.closed.unshift(Object.assign(base, { tone: confirmed ? "t-bad" : "t-good", lab: confirmed ? "guilty" : "notConfirmed", r }));
      msg = L(confirmed ? "msgGuilty" : "msgInnocent", { name: F.name });
    }
    D.exp = null;
    return msg;
  }
  // Text výsledku experimentu z uložených čísel. Staršie záznamy (pred prekladmi) majú hotový text.
  function resText(r) {
    if (!r) return "";
    if (r.c === "noBase") return L(r.n === 1 ? "expNoBase1" : "expNoBase0");
    if (r.c === "fewKept") return L("expFewKept", { kept: nightsN(r.kept), total: r.total });
    const M = METRICS.find(m => m.k === r.m) || METRICS[0];
    return M.k === "latency" ? L("expResLatency", { during: Math.round(r.during), before: Math.round(r.before) })
      : L("expResOther", { metric: M.label, during: M.fmt(r.during), before: M.fmt(r.before) });
  }
  function verdictText(k) {
    const v = D.verdicts[k];
    if (!v) return null;
    if (!v.r) return { text: esc(v.text || ""), advice: esc(v.advice || "") };
    const F = FMAP[k];
    return { text: L(v.confirmed ? "verdictYes" : "verdictNo") + " " + resText(v.r),
      advice: v.confirmed ? L("adviceYes", { short: F ? F.expShort : "" }) : L("adviceNo") };
  }
  const LAB = { none: "labelNoVerdict", guilty: "labelGuilty", notConfirmed: "labelNotConfirmed" };
  function closedView(c) {
    // c pochádza z úložiska alebo zo zálohy: texty ošetríme, tón a štítok len zo známych hodnôt
    const own = (o, k) => typeof k === "string" && Object.prototype.hasOwnProperty.call(o, k);
    const F = own(FMAP, c.k) ? FMAP[c.k] : null;
    return { icon: esc(c.icon || ""), name: F ? F.exp : esc(c.name || ""),
      tone: /^t-(bad|good|few|mid)$/.test(c.tone) ? c.tone : "t-few",
      when: c.from ? short(c.from) + " – " + short(c.to) : esc(c.when || ""),
      label: own(LAB, c.lab) ? L(LAB[c.lab]) : esc(c.label || ""), text: isObj(c.r) ? resText(c.r) : esc(c.text || "") };
  }

  // ---------- Obrazovky ----------
  function greeting() {
    const h = new Date().getHours();
    const g = L(h < 11 ? "greetMorning" : h < 18 ? "greetDay" : "greetEvening");
    return g + (SET.name ? ", " + esc(SET.name) : "");
  }
  function stat(v, l) { return '<div class="stat"><b>' + v + "</b><span>" + l + "</span></div>"; }
  function nightCard() {
    const intro = SET.soundAudio ? (SET.soundFull ? "nightIntroFull" : "nightIntroClips") : "nightIntroNone";
    let h = '<div class="card"><div class="eyebrow">' + L("soundTitle") + "</div><h3>" + L("nightQ") + "</h3>" +
      '<p class="small muted">' + L(intro) + "</p>";
    if (SET.autoOn) h += '<p class="small">' + L("nightAuto", { from: esc(SET.autoFrom), to: esc(SET.autoTo) }) + "</p>";
    h += '<button class="btn ghost" data-act="startNight" type="button">' + L("btnStartNight") + "</button>";
    if (SET.autoOn && !autoWindow(Date.now())) h += '<button class="btn ghost" data-act="standby" type="button">' + L("btnStandby", { time: esc(SET.autoFrom) }) + "</button>";
    return h + "</div>";
  }

  function viewToday() {
    const t = today();
    const checked = D.nights.some(n => n.date === t);
    const list = analyzable();
    let h = '<div class="head"><div class="eyebrow">' + long(t) + "</div><h2>" + greeting() + "</h2></div>";
    h += installCard();
    h += backupCard();

    if (!checked) {
      h += '<div class="card lamp"><div class="eyebrow">' + L("ciEyebrow") + "</div><h3>" + L("ciQ") + '</h3><p class="small">' + L("ciHint") + '</p><button class="btn dark" data-act="checkin" type="button">' + L("btnCheckin") + "</button></div>";
    }
    const hr = new Date().getHours();
    if (hr >= 17 && !D.evenings[t]) {
      h += '<div class="card"><div class="eyebrow">' + L("evEyebrow") + "</div><h3>" + L("evQ") + '</h3><p class="small muted">' + L("evHint") + '</p><button class="btn" data-act="gotoEvening" type="button">' + L("btnEvening") + "</button></div>";
    }
    if (hr >= 18 || hr < 4 || (SET.autoOn && hr >= 15)) h += nightCard();
    if (D.sounds[t]) {
      const s = D.sounds[t];
      h += '<div class="card"><div class="eyebrow">' + L("soundToday") + "</div><p>" + soundLine(s).replace(/^./, c => c.toUpperCase()) + "</p>" +
        '<button class="link" data-act="soundReport" data-key="' + t + '" type="button">' + L("soundTrackLink") + "</button></div>";
    }

    if (!D.nights.length) {
      h += '<div class="card"><div class="eyebrow">' + L("howEyebrow") + '</div><ol class="steps">' +
        "<li>" + L("how1") + "</li><li>" + L("how2") + "</li><li>" + L("how3", { min: MIN_NIGHTS, good: GOOD_NIGHTS }) + "</li><li>" + L("how4") + "</li></ol>" +
        '<p class="small muted">' + L("localOnly") + '</p><button class="link" data-act="privacy" type="button">' + L("privacyLink") + "</button></div>";
      return h;
    }

    const last = D.nights[D.nights.length - 1];
    h += '<div class="card"><div class="eyebrow">' + L("lastNight", { date: short(last.date) }) + "</div>" +
      '<div class="stats">' + stat(hmShort(last.duration), L("statSleep")) + stat(L("unitMin", { n: last.latency }), L("statLatency")) +
      stat(last.wakes + "×", L("statWakes")) + stat(last.energy + "/5", L("statEnergyMorning")) + "</div></div>";

    if (list.length < MIN_NIGHTS) {
      h += '<div class="card"><div class="row"><div class="eyebrow">' + L("collecting") + '</div><span class="small muted">' + list.length + " / " + MIN_NIGHTS + "</span></div>" +
        '<span class="meter t-lamp"><i style="width:' + (list.length / MIN_NIGHTS * 100) + '%"></i></span>' +
        '<p class="small muted">' + L("collectingHint") + "</p></div>";
    } else {
      const top = analyze(list).find(r => r.status === "confirmed" || r.status === "prime" || r.status === "suspect");
      if (top) {
        const st = STATUS[top.status];
        h += '<div class="card"><div class="row"><div class="eyebrow">' + L("fromCase") + '</div><span class="pill ' + st.cls + '">' + st.label + "</span></div>" +
          "<h3>" + top.F.icon + " " + top.F.name + '</h3><p class="small">' + sentence(top) + "</p>" +
          nightChart(top.F, top.best.M, list) +
          '<div class="legend"><span><i style="background:var(--lamp)"></i>' + L("legendNightAfter", { name: lc(top.F.name) }) + '</span><span><i style="background:var(--bar)"></i>' + L("legendOther") + "</span></div>" +
          '<button class="link" data-act="detail" data-k="' + top.F.k + '" type="button">' + L("openEvidence") + "</button></div>";
      } else {
        h += '<div class="card"><div class="eyebrow">' + L("fromCase") + '</div><p class="small">' + L("noSuspect") + '</p><button class="link" data-goto="case" type="button">' + L("openCase") + "</button></div>";
      }
    }

    if (D.exp) {
      const n = expNights().length;
      h += '<div class="card"><div class="row"><div class="eyebrow">' + L("expRunning") + '</div><span class="small muted">' + L("expNightOf", { n, total: D.exp.length }) + "</span></div>" +
        "<h3>" + FMAP[D.exp.k].icon + " " + FMAP[D.exp.k].exp + "</h3>" +
        '<span class="meter t-lamp"><i style="width:' + (n / D.exp.length * 100) + '%"></i></span>' +
        '<button class="link" data-goto="exp" type="button">' + L("seeProgress") + "</button></div>";
    }
    return h;
  }

  function viewLog() {
    const t = today();
    let h = '<div class="head"><div class="eyebrow">' + L("logEyebrow") + "</div><h2>" + L("tabLog") + "</h2></div>";
    h += '<div class="seg" role="group" aria-label="' + L("logTypeAria") + '">' +
      '<button type="button" data-mode="evening" aria-pressed="' + (UI.logMode === "evening") + '">' + L("modeEvening") + "</button>" +
      '<button type="button" data-mode="morning" aria-pressed="' + (UI.logMode === "morning") + '">' + L("modeMorning") + "</button></div>";

    const y = addDays(t, -1);
    if (UI.logMode === "evening") {
      const day = UI.evDate || t;
      const ev = D.evenings[day];
      const f = ev ? ev.f : {};
      const temp = ev && ev.temp ? ev.temp : 20;
      h += '<div class="card"><h3>' + (day === t ? L("evQ") : L("evQYesterday", { date: short(day) })) + '</h3><p class="small muted">' + L("evTapHint") + '</p><div class="chips">';
      FACTORS.forEach(F => {
        h += '<button type="button" class="chip" data-chip="' + F.k + '" aria-pressed="' + !!f[F.k] + '"><span aria-hidden="true">' + F.icon + "</span>" + F.name + "</button>";
      });
      h += '</div><label class="small" for="temp">' + L("tempLabel") + ' <b id="tempv">' + temp + ' °C</b></label>' +
        '<input id="temp" type="range" min="16" max="26" step="1" value="' + temp + '">' +
        '<button class="btn" data-act="saveEvening" type="button"' + (ev && ev.saved ? " disabled" : "") + ">" + L(ev && ev.saved ? "evSaved" : "evSave") + "</button>";
      if (day !== t) h += '<button class="link" data-act="evDay" data-date="" type="button">' + L("evBack") + "</button>";
      else if (!(D.evenings[y] && D.evenings[y].saved)) h += '<button class="link" data-act="evDay" data-date="' + y + '" type="button">' + L("evAddYesterday", { date: short(y) }) + "</button>";
      h += "</div>";
      if (day === t) h += nightCard();
    } else {
      const checked = D.nights.some(n => n.date === t), yChecked = D.nights.some(n => n.date === y);
      h += '<div class="card"><h3>' + L("ciEyebrow") + '</h3><p class="small muted">' + L(checked ? "ciDoneToday" : "ciWhat") + "</p>" +
        '<button class="btn" data-act="checkin" type="button"' + (checked ? " disabled" : "") + ">" + L(checked ? "done" : "btnCheckin") + "</button>" +
        (checked ? '<button class="link" data-act="checkinFor" data-date="' + t + '" type="button">' + L("fixToday") + "</button>" : "") +
        '<button class="link" data-act="checkinFor" data-date="' + y + '" type="button">' + L(yChecked ? "fixYesterday" : "addYesterday", { date: short(y) }) + "</button></div>";
    }

    h += '<div class="card"><div class="eyebrow">' + L("recentNights") + "</div>";
    const recent = nightsF().slice(-7).reverse();
    if (!recent.length) {
      h += '<p class="small muted">' + L("noRecords") + "</p>";
    } else {
      h += '<div class="hist">';
      recent.forEach(n => {
        const icons = n.f ? FACTORS.filter(F => n.f[F.k]).map(F => '<span title="' + F.name + '">' + F.icon + "</span>").join(" ") : "";
        const what = !n.f ? '<span class="muted">' + L("noEvening") + "</span>" : (icons || '<span class="muted">' + L("nothingSpecial") + "</span>");
        h += '<div class="hist-row"><span class="muted">' + short(n.date) + "</span><span>" + what + "</span>" +
          '<span class="small" style="text-align:right">' + L("unitMin", { n: n.latency }) + " · " + n.quality + "/5</span></div>";
      });
      h += "</div>";
    }
    h += "</div>";

    const soundKeys = Object.keys(D.sounds).sort().reverse().slice(0, 7);
    if (soundKeys.length) {
      h += '<div class="card"><div class="eyebrow">' + L("soundNight") + "</div>";
      soundKeys.forEach(k => {
        const s = D.sounds[k];
        h += '<button class="sound-row" data-act="soundReport" data-key="' + k + '" type="button"><span class="muted">' + short(k) + "</span><span>" + soundLine(s) + '</span><span class="t-lamp">→</span></button>';
      });
      h += "</div>";
    }
    return h;
  }

  function viewCase() {
    const list = analyzable();
    const n = list.length;
    let h = '<div class="head"><div class="eyebrow">' + L("caseEyebrow", { nights: nightsN(n) }) + "</div><h2>" + L("caseTitle") + "</h2></div>";
    if (n < MIN_NIGHTS) {
      h += '<div class="card"><div class="row"><h3>' + L("fewClues") + '</h3><span class="small muted">' + n + " / " + MIN_NIGHTS + "</span></div>" +
        '<span class="meter t-lamp"><i style="width:' + (n / MIN_NIGHTS * 100) + '%"></i></span>' +
        '<p class="small muted">' + L("fewCluesHint", { min: MIN_NIGHTS, good: GOOD_NIGHTS }) + "</p></div>";
    } else {
      h += '<p class="small muted">' + L("caseIntro") + (n < GOOD_NIGHTS ? " " + L("casePrelim") : "") + "</p>";
      analyze(list).forEach(r => {
        const st = STATUS[r.status];
        const strength = r.status === "few" ? 0 : clamp(r.best.harm / 3.5, 0, 1);
        h += '<button class="suspect" type="button" data-act="detail" data-k="' + r.F.k + '">' +
          '<span class="ico" aria-hidden="true">' + r.F.icon + "</span>" +
          '<span class="name">' + r.F.name + ' <span class="pill ' + st.cls + '">' + st.label + "</span></span>" +
          '<span class="small muted">' + sentence(r) + (r.with.length && r.status !== "few" ? " " + L("oftenWith", { list: r.with.map(c => c.G.icon + " " + lc(c.G.name)).join(", ") }) : "") + "</span>" +
          '<span class="meter ' + st.cls + '"><i style="width:' + (strength * 100) + '%"></i></span></button>';
      });
    }
    h += trendCard();
    h += rhythmCard();
    h += snoreCard();
    h += weightCard();
    h += '<button class="btn ghost" data-act="report" type="button">' + L("btnReport") + "</button>";
    h += '<p class="small muted">' + L("disclaimerCase") + "</p>";
    return h;
  }

  // Celkový trend: posledných 30 rán bez ohľadu na faktory.
  function trendChart(nights, key, max, fmt, label) {
    const W = 340, H = 104, pl = 30, pr = 4, pt = 8, pb = 20, ih = H - pt - pb;
    const bw = (W - pl - pr) / Math.max(nights.length, 7);
    const y = v => pt + ih - (v / max) * ih;
    let s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + L("trendAria", { label }) + '">';
    [0, max / 2, max].forEach(t => {
      s += '<line class="grid" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y(t) + '" y2="' + y(t) + '"/>';
      s += '<text x="' + (pl - 5) + '" y="' + (y(t) + 3) + '" text-anchor="end">' + fmt(t) + "</text>";
    });
    nights.forEach((n, i) => {
      const v = n[key], h = Math.max(1.5, (Math.min(v, max) / max) * ih);
      s += '<rect class="b-off" x="' + (pl + i * bw + 1.2).toFixed(1) + '" y="' + (pt + ih - h).toFixed(1) + '" width="' + Math.max(2, bw - 2.4).toFixed(1) + '" height="' + h.toFixed(1) + '" rx="1.5"><title>' + short(n.date) + ": " + fmt(v) + "</title></rect>";
    });
    s += '<text x="' + pl + '" y="' + (H - 4) + '">' + short(nights[0].date) + "</text>";
    if (nights.length > 1) s += '<text x="' + (pl + nights.length * bw) + '" y="' + (H - 4) + '" text-anchor="end">' + short(nights[nights.length - 1].date) + "</text>";
    return '<div class="chart">' + s + "</svg></div>";
  }
  function trendCard() {
    const n = D.nights.slice(-30);
    if (n.length < 3) return "";
    const last7 = n.slice(-7), prev7 = n.slice(-14, -7);
    const cmp = (key, f) => f(mean(last7.map(x => x[key]))) + (prev7.length >= 3 ? ' <span class="muted">' + L("trendBefore", { v: f(mean(prev7.map(x => x[key]))) }) + "</span>" : "");
    return '<div class="card"><div class="eyebrow">' + L("trendEyebrow", { nights: nightsN(n.length) }) + "</div>" +
      '<p class="small">' + L("trendLine", { nights: nightsN(last7.length), q: cmp("quality", v => dec(v)), d: cmp("duration", hmShort) }) + "</p>" +
      '<span class="small muted">' + L("qualityScale") + "</span>" + trendChart(n, "quality", 5, dec0, L("qualityLabel")) +
      '<span class="small muted">' + L("durationScale") + "</span>" + trendChart(n, "duration", 10, dec0, L("durationLabel")) + "</div>";
  }

  // Pravidelnosť: kedy sa začína a končí nočný záznam (len noci so zvukom, posledných 30 dní).
  const dayMin = ms => { const d = new Date(ms); return (d.getHours() * 60 + d.getMinutes() + 720) % 1440; };   // minúty od poludnia
  const minClock = m => { const t = Math.round(m + 720) % 1440; return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0"); };
  const sd = a => Math.sqrt(variance(a));
  function rhythmCard() {
    const from = addDays(today(), -30);
    const rows = Object.keys(D.sounds).filter(k => k >= from && !D.sounds[k].partial && D.sounds[k].rec && D.sounds[k].end - D.sounds[k].rec >= 3 * 3600000)
      .map(k => ({ k, bed: dayMin(D.sounds[k].rec), up: dayMin(D.sounds[k].end), wk: [0, 6].includes(toD(k).getDay()) }));
    if (rows.length < 5) return "";
    const bed = rows.map(r => r.bed), up = rows.map(r => r.up);
    let h = '<div class="card"><div class="eyebrow">' + L("rhythmEyebrow", { nights: nightsN(rows.length) }) + "</div>" +
      "<p>" + L("rhythmLine", { bed: minClock(mean(bed)), bsd: Math.round(sd(bed)), up: minClock(mean(up)), usd: Math.round(sd(up)) }) + "</p>";
    const we = rows.filter(r => r.wk), wd = rows.filter(r => !r.wk);
    if (we.length >= 2 && wd.length >= 3) {
      const shift = mean(we.map(r => (r.bed + r.up) / 2)) - mean(wd.map(r => (r.bed + r.up) / 2));
      if (Math.abs(shift) >= 30) h += '<p class="small">' + L(shift > 0 ? "rhythmLater" : "rhythmEarlier", { h: hmShort(Math.abs(shift) / 60) }) + "</p>";
      else h += '<p class="small">' + L("rhythmSame") + "</p>";
    }
    if (sd(bed) > 60) h += '<p class="small muted">' + L("rhythmVar") + "</p>";
    return h + '<p class="small muted">' + L("rhythmNote") + "</p></div>";
  }

  // Chrápanie a ráno: porovnanie nocí so zvukovým záznamom aj check-inom.
  const SNORE_NIGHT = 15;   // od koľkých minút chrápania je noc „s chrápaním“
  function snoreCard() {
    const rows = D.nights.filter(n => D.sounds[n.date] && !D.sounds[n.date].partial).map(n => Object.assign({ snore: D.sounds[n.date].snoreMin }, n));
    if (rows.length < 3) return "";
    const yes = rows.filter(n => n.snore >= SNORE_NIGHT), no = rows.filter(n => n.snore < SNORE_NIGHT);
    let h = '<div class="card"><div class="eyebrow">' + L("snoreEyebrow", { nights: nightsN(rows.length) }) + "</div>";
    if (yes.length >= 2 && no.length >= 2) {
      h += "<p>" + L("snoreCmp", { min: SNORE_NIGHT, a: dec(mean(yes.map(n => n.energy))), b: dec(mean(no.map(n => n.energy))) }) + "</p>" +
        '<p class="small muted">' + L("snoreCmpQ", { a: dec(mean(yes.map(n => n.quality))), b: dec(mean(no.map(n => n.quality))) }) + "</p>";
    } else if (!yes.length) {
      h += "<p>" + L("snoreNone") + "</p>";
    } else {
      h += '<p class="small muted">' + L("snoreNeed") + "</p>";
    }
    const recent = Object.keys(D.sounds).sort().slice(-7).map(k => D.sounds[k]);
    if (recent.filter(s => s.snoreMin >= 30).length >= 3) {
      const bi = bodyInfo();
      h += '<p class="small t-lamp">' + L("snoreRegular") + (bi && bi.heavy ? " " + L("snoreWeight", { bmi: dec(bi.bmi) }) : "") + "</p>";
    }
    return h + "</div>";
  }

  function viewExp() {
    let h = '<div class="head"><div class="eyebrow">' + L("expEyebrow") + "</div><h2>" + L("tabExp") + "</h2></div>";
    if (D.exp) {
      const F = FMAP[D.exp.k], en = expNights(), done = en.length;
      h += '<div class="card lamp"><div class="eyebrow">' + L("expRunningOf", { n: done, total: D.exp.length }) + "</div>" +
        "<h3>" + F.icon + " " + F.exp + '</h3><div class="days" style="grid-template-columns:repeat(' + Math.min(D.exp.length, 7) + ',1fr)">';
      for (let i = 0; i < D.exp.length; i++) {
        const n = en[i];
        const cls = n ? (brokeRule(n, D.exp.k) ? " broke" : " done") : "";
        h += '<div class="day' + cls + '" title="' + (n ? short(n.date) + (brokeRule(n, D.exp.k) ? " · " + L("ruleBroken") : "") : "") + '">' + (n ? short(n.date).replace(/\s/g, "") : i + 1) + "</div>";
      }
      h += "</div>";
      if (!done) h += '<p class="small">' + L("expStarts", { date: short(addDays(D.exp.start, -1)) }) + "</p>";
      else h += '<p class="small">' + L("expContinue") + "</p>";
      h += '<button class="btn ghost" data-act="cancelExp" type="button">' + L("btnEndExp") + "</button></div>";
    }

    if (UI.msg) h += '<p class="inline-msg">' + UI.msg + "</p>";

    const list = analyzable();
    const ranked = list.length >= MIN_NIGHTS ? analyze(list) : FACTORS.map(F => ({ F, status: null }));
    h += '<div class="card"><div class="eyebrow">' + L(D.exp ? "moreExp" : "pickExp") + "</div>";
    if (list.length < MIN_NIGHTS) h += '<p class="small muted">' + L("pickHint", { min: MIN_NIGHTS }) + "</p>";
    ranked.filter(r => !D.verdicts[r.F.k] && !(D.exp && D.exp.k === r.F.k)).forEach(r => {
      const st = r.status ? STATUS[r.status] : null;
      h += '<div class="exp-item"><span class="ico" aria-hidden="true">' + r.F.icon + "</span><div><div>" + r.F.exp + "</div>" +
        (st ? '<span class="small ' + st.cls + '">' + st.label + "</span>" : "") + "</div>" +
        '<button class="btn ghost" data-act="startExp" data-k="' + r.F.k + '" type="button">' + L("start") + "</button></div>";
    });
    h += "</div>";

    if (D.closed.length) {
      h += '<div class="card"><div class="eyebrow">' + L("closedCases") + "</div>";
      D.closed.map(closedView).forEach(c => {
        h += '<div class="exp-item"><span class="ico" aria-hidden="true">' + c.icon + "</span><div><div>" + c.name + ' <span class="small muted">· ' + c.when + '</span></div><span class="small muted">' + c.text + '</span></div><span class="pill ' + c.tone + '">' + c.label + "</span></div>";
      });
      h += "</div>";
    }
    return h;
  }

  // ---------- Vysúvacie obrazovky ----------
  function sheetTop(label, closeIcon) {
    return '<div class="sheet-top"><button class="icon-btn" data-act="close" type="button" aria-label="' + L(closeIcon === "×" ? "close" : "back") + '">' + (closeIcon || "←") + '</button><span class="eyebrow">' + label + '</span><span style="width:38px"></span></div>';
  }

  function openDetail(k) {
    const list = analyzable();
    const r = analyze(list).find(x => x.F.k === k);
    const F = r.F, st = STATUS[r.status];
    let h = sheetTop(L("suspectTitle")) + '<div class="scroll">';
    h += '<div class="head"><span class="pill ' + st.cls + '" style="align-self:flex-start">' + st.label + "</span><h2>" + F.icon + " " + F.name + '</h2><p class="small muted">' + L("withWithout", { with: nightsN(r.nWith), without: nightsN(r.nWithout) }) + "</p></div>";
    h += '<div class="card"><h3>' + sentence(r) + "</h3>";
    if (r.status !== "few" && !D.verdicts[k]) {
      const B = r.best, diff = Math.abs(B.a - B.b);
      h += '<p class="small muted">' + L("diffLine", { metric: B.M.label, diff: B.M.fmt(diff), err: B.M.fmt(B.err) }) + " " + L(diff > B.err ? "diffReal" : "diffChance") + "</p>";
    }
    METRICS.forEach(M => {
      const m = r.m[M.k];
      const scale = M.k === "quality" ? 5 : Math.max(m.a, m.b, 0.01) * 1.15;
      const bad = m.harm >= 1.1 && r.nWith >= 3 && r.nWithout >= 3;
      h += '<div class="cmp"><div class="eyebrow" style="margin-top:6px">' + M.label + (bad ? ' <span class="t-bad">· ' + L("worse") + "</span>" : "") + "</div>" +
        '<div class="cmp-row"><span>' + L("withFactor") + "</span>" + '<span class="track"><i style="width:' + (m.a / scale * 100) + '%;background:var(--lamp)"></i></span><b>' + (r.nWith ? M.fmt(m.a) : "–") + "</b></div>" +
        '<div class="cmp-row"><span class="muted">' + L("withoutIt") + "</span>" + '<span class="track"><i style="width:' + (m.b / scale * 100) + '%;background:var(--bar)"></i></span><b class="muted">' + (r.nWithout ? M.fmt(m.b) : "–") + "</b></div></div>";
    });
    h += "</div>";
    if (r.with.length) {
      h += '<div class="card"><div class="eyebrow">' + L("accomplices") + "</div>" +
        r.with.map(c => "<p>" + L("accompLine", { icon: c.G.icon, name: c.G.name, both: c.both, nights: nightsN(c.nF), factor: lc(F.name) }) + "</p>").join("") +
        '<p class="small muted">' + L("accompHint") + "</p></div>";
    }
    h += '<div class="card"><div class="eyebrow">' + L("evidence", { metric: lc(r.best.M.label) }) + "</div>" + nightChart(F, r.best.M, list, { expMark: true }) +
      '<div class="legend"><span><i style="background:var(--lamp)"></i>' + L("legendWith") + '</span><span><i style="background:var(--bar)"></i>' + L("legendWithout") + "</span>" +
      (D.exp && D.exp.k === F.k ? '<span><i style="background:var(--good)"></i>' + L("legendDuring") + "</span>" : "") + "</div></div>";

    const v = verdictText(k);
    if (v) {
      h += '<div class="card"><div class="eyebrow">' + L("verdictEyebrow") + "</div><p>" + v.text + "</p>" + (v.advice ? '<p class="small muted">' + v.advice + "</p>" : "") + "</div>";
    } else if (D.exp && D.exp.k === k) {
      h += '<div class="card lamp"><div class="eyebrow">' + L("verifying") + "</div><p>" + L("verifyingLine", { exp: F.exp, n: expNights().length, total: D.exp.length }) + '</p><button class="btn dark" data-act="gotoExp" type="button">' + L("btnSeeExp") + "</button></div>";
    } else {
      h += '<div class="card"><div class="eyebrow">' + L("howVerify") + "</div><p>" + L("howVerifyLine", { exp: F.exp, nights: nightsN(SET.expLength) }) + "</p>" +
        '<button class="btn" data-act="startExp" data-k="' + k + '" type="button">' + L("btnStartExp") + "</button></div>";
    }
    h += "</div>";
    showSheet(h);
  }

  // Ranný check-in
  // Otázka: q<Key> v slovníku, popisy možností o<Key> (pole v rovnakom poradí ako vals).
  const QUESTIONS = [
    { key: "quality",  vals: [1, 2, 3, 4, 5], num: true },
    { key: "duration", vals: [4.5, 5.5, 6.5, 7.5, 8.5] },
    { key: "latency",  vals: [10, 22, 45, 75] },
    { key: "wakes",    vals: [0, 1, 2, 3] },
    { key: "energy",   vals: [1, 2, 3, 4, 5], num: true }
  ].map(q => {
    const K = q.key.charAt(0).toUpperCase() + q.key.slice(1);
    // texty sa čítajú až pri zobrazení (getter), aby platil aktuálny jazyk; Object.assign by getter zavolal
    // hneď pri načítaní a otázky by ostali v jazyku spustenia
    return Object.defineProperties(q, {
      title: { get() { return L("q" + K); } },
      opts: { get() { const l = L("o" + K); return q.vals.map((v, i) => [v, Array.isArray(l) ? l[i] : String(v)]); } }
    });
  });
  let ci = null;
  // date: ráno, ku ktorému check-in patrí (dnes, alebo včera pri doplnení). Oprava prepíše starý záznam.
  function openCheckin(date) {
    const d = date || today(), y = addDays(d, -1);
    const old = D.nights.find(n => n.date === d);
    ci = { step: 0, a: {}, needF: !D.evenings[y], f: {}, date: d, fix: !!old, sug: sleepGuess(d) };
    renderCheckin();
  }
  // Odhad dĺžky spánku z nočného záznamu (čas záznamu bez zaspávania): navrhne najbližšiu možnosť.
  function sleepGuess(d) {
    const s = D.sounds[d];
    if (!s || s.partial || !s.rec || !s.end) return null;
    const h = (s.end - s.rec) / 3600000;
    if (h < 3 || h > 14) return null;
    const opts = QUESTIONS[1].vals;
    const pick = opts.reduce((best, v) => Math.abs(v - (h - 0.25)) < Math.abs(best - (h - 0.25)) ? v : best, opts[0]);
    return { h, pick };
  }
  function renderCheckin() {
    const total = QUESTIONS.length + (ci.needF ? 1 : 0);
    const top = '<div class="sheet-top"><button class="icon-btn" data-act="close" type="button" aria-label="' + L("close") + '">×</button><div class="progress">' +
      Array.from({ length: total }, (_, i) => '<i class="' + (i <= ci.step ? "on" : "") + '"></i>').join("") + '</div><span style="width:38px"></span></div>';
    if (ci.step < QUESTIONS.length) {
      const q = QUESTIONS[ci.step];
      const when = ci.date !== today() ? " · " + L("ciMorningOf", { date: short(ci.date) }) : "";
      let h = top + '<div class="q"><div class="eyebrow">' + L("qOf", { n: ci.step + 1, total }) + when + "</div><h2>" + q.title + "</h2>";
      const sug = q.key === "duration" && ci.sug ? ci.sug.pick : null;
      if (sug !== null) h += '<p class="small muted">' + L("ciSuggest", { h: hmShort(ci.sug.h) }) + "</p>";
      h += '<div class="opts">';
      q.opts.forEach(([v, l], i) => { h += '<button class="opt' + (v === sug ? " sug" : "") + '" type="button" data-ans="' + v + '"><span class="n">' + (q.num ? v : i + 1) + "</span>" + l + (v === sug ? ' <span class="small t-lamp">· ' + L("byRecord") + "</span>" : "") + "</button>"; });
      showSheet(h + "</div></div>");
    } else if (ci.needF && ci.step === QUESTIONS.length) {
      let h = top + '<div class="q"><div class="eyebrow">' + L("qOf", { n: total, total }) + "</div><h2>" + (ci.date === today() ? L("ciFactorsQYesterday") : L("ciFactorsQOn", { date: short(addDays(ci.date, -1)) })) +
        '</h2><p class="small muted">' + L("ciFactorsHint") + '</p><div class="chips">';
      FACTORS.forEach(F => { h += '<button type="button" class="chip" data-cichip="' + F.k + '" aria-pressed="' + !!ci.f[F.k] + '"><span aria-hidden="true">' + F.icon + "</span>" + F.name + "</button>"; });
      h += '</div><button class="btn" data-act="ciFactorsDone" type="button">' + L("save") + "</button></div>";
      showSheet(h);
    } else {
      finishCheckin();
    }
  }
  function finishCheckin() {
    const t = ci.date, y = addDays(t, -1);
    if (ci.needF) D.evenings[y] = { f: ci.f, temp: null, saved: true };
    const night = { date: t, quality: ci.a.quality, duration: ci.a.duration, latency: ci.a.latency, wakes: ci.a.wakes, energy: ci.a.energy };
    const prev = D.nights.filter(n => n.date !== t).slice(-7);
    D.nights = D.nights.filter(n => n.date !== t).concat(night).sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
    let extra = "";
    if (D.exp) {
      const k = D.exp.k, n = expNights().length;
      if (n >= D.exp.length) {
        extra = '<div class="card"><div class="eyebrow">' + L("expEnded") + "</div><p>" + concludeExp() + "</p></div>";
      } else {
        extra = '<div class="card"><div class="eyebrow">' + L("expWord") + "</div><p>" + L("expProgress", { n, total: D.exp.length, short: FMAP[k].expShort, left: nightsN(D.exp.length - n) }) + "</p></div>";
      }
    }
    save();
    if (D.sounds[t]) extra += '<div class="card"><div class="eyebrow">' + L("soundNight") + "</div><p>" + soundLine(D.sounds[t]).replace(/^./, c => c.toUpperCase()) + "</p></div>";
    const m = Math.round(mean(prev.map(n => n.latency)));
    const note = !prev.length ? L("noteFirst") : prev.length === 1 ? L("noteAvg1", { m }) : L("noteAvg", { records: Ln("pl.records", prev.length), m });
    const h = sheetTop(L("done"), "×") +
      '<div class="q"><div class="eyebrow">' + L(ci.fix ? "fixed" : "written") + " · " + short(t) + "</div><h2>" + L("thanks") + "</h2>" +
      '<div class="card"><div class="stats">' + stat(hmShort(night.duration), L("statSleep")) + stat(L("unitMin", { n: night.latency }), L("statLatency")) + stat(night.wakes + "×", L("statWakes")) + stat(night.energy + "/5", L("statEnergy")) + "</div>" +
      '<p class="small muted">' + note + "</p></div>" + extra + '<button class="btn" data-act="close" type="button">' + L("done") + "</button></div>";
    ci = null;
    showSheet(h);
  }

  // Nastavenia
  function openSettings() {
    const evCount = Object.keys(D.evenings).length;
    const seg = (attr, cur, items) => '<div class="seg" role="group" style="--n:' + items.length + '">' +
      items.map(([v, l]) => '<button type="button" ' + attr + '="' + v + '" aria-pressed="' + (String(cur) === String(v)) + '">' + l + "</button>").join("") + "</div>";
    const num = (id, label, val) => '<label class="small" for="' + id + '">' + label +
      '<input id="' + id + '" type="text" inputmode="numeric" autocomplete="off" maxlength="4" value="' + esc(String(val)) + '"></label>';
    const check = (id, on, label, hint) => '<label class="check" for="' + id + '"><input id="' + id + '" type="checkbox"' + (on ? " checked" : "") + "><span>" + label + "<small>" + hint + "</small></span></label>";
    const clipSet = (title, kind, n, sec) => '<span class="small">' + title + "</span>" +
      '<div class="num-row">' + num("set-clipn-" + kind, L("countPerNight"), n) + num("set-clips-" + kind, L("lengthSec"), sec) + "</div>" +
      '<p class="small num-err" id="err-' + kind + '" role="alert" hidden></p>';
    let h = sheetTop(L("settings")) + '<div class="scroll">';
    h += '<div class="head"><h2>' + L("settings") + "</h2></div>";
    // jazyk: názvy jazykov sú vždy v danom jazyku, aby sa dali nájsť aj v cudzom prostredí
    h += '<div class="card"><label class="set-label" for="set-lang">' + L("language") + (I18.lang() !== "en" ? " · Language" : "") + '</label><select id="set-lang">' +
      I18.languages().map(l => '<option value="' + l.code + '"' + (l.code === I18.lang() ? " selected" : "") + ">" + esc(l.flag + " " + l.name) + "</option>").join("") + "</select></div>";
    h += '<div class="card"><span class="set-label">' + L("appearance") + "</span>" + seg("data-theme-set", SET.theme, [["dark", L("themeDark")], ["light", L("themeLight")], ["system", L("themeSystem")]]) + "</div>";
    h += '<div class="card"><label class="set-label" for="set-name">' + L("nameLabel") + '</label><input id="set-name" type="text" maxlength="30" autocomplete="given-name" placeholder="' + esc(L("namePh")) + '" value="' + esc(SET.name) + '"><p class="small muted">' + L("nameHint") + "</p></div>";
    h += bodyCard();
    h += '<div class="card"><span class="set-label">' + L("expLen") + "</span>" + seg("data-explen", SET.expLength, [7, 10, 14].map(n => [n, nightsN(n)])) +
      '<p class="small muted">' + L("expLenHint") + "</p></div>";
    h += customCard();
    h += '<div class="card"><span class="set-label">' + L("soundTitle") + "</span>" +
      '<span class="small">' + L("sensitivity") + "</span>" + seg("data-sens", SET.soundSensitivity, [["low", L("sensLow")], ["medium", L("sensMed")], ["high", L("sensHigh")]]) +
      '<p class="small muted">' + L("sensHint") + "</p>" +
      check("set-auto", SET.autoOn, L("autoLabel"), L("autoHint")) +
      (SET.autoOn ? '<div class="num-row">' +
        '<label class="small" for="set-auto-from">' + L("autoFrom") + '<input id="set-auto-from" type="text" inputmode="numeric" autocomplete="off" maxlength="5" value="' + esc(SET.autoFrom) + '"></label>' +
        '<label class="small" for="set-auto-to">' + L("autoTo") + '<input id="set-auto-to" type="text" inputmode="numeric" autocomplete="off" maxlength="5" value="' + esc(SET.autoTo) + '"></label></div>' +
        '<p class="small num-err" id="err-auto" role="alert" hidden></p>' +
        '<p class="small muted">' + L("autoNote") + (bgPlugin() ? " " + L("autoNoteBg") : "") + "</p>" : "") +
      (powerApi() ? '<p class="small muted">' + L("powerSetHint") + '</p><button class="btn ghost" data-act="fixPower" type="button">' + L("powerFix") + "</button>" : "") +
      check("set-audio", SET.soundAudio, L("audioLabel"), L("audioHint"));
    if (SET.soundAudio) {
      const kb = SET.clipKbps || 128;
      h += check("set-full", SET.soundFull, L("fullLabel"), L("fullHint", { seg: SEG_MS / 60000, kb, mb: Math.round(kb * 3.6) })) +
        (SET.soundFull ? '<label class="small" for="set-keep">' + L("keepLabel", { max: KEEP_CLIP_DAYS }) +
          '<input id="set-keep" type="text" inputmode="numeric" autocomplete="off" maxlength="2" value="' + esc(String(SET.fullKeepDays)) + '"></label>' +
          '<p class="small num-err" id="err-keep" role="alert" hidden></p>' +
          '<p class="small muted">' + L("keepHint") + "</p>" : "") +
        clipSet(L("clipsSnore"), "snore", SET.clipSnoreN, SET.clipSnoreSec) +
        clipSet(L("clipsNoise"), "noise", SET.clipNoiseN, SET.clipNoiseSec) +
        '<label class="small" for="set-kbps">' + L("recQuality") +
        '<select id="set-kbps">' + CLIP_KBPS.map(([v, l]) => '<option value="' + v + '"' + (v === SET.clipKbps ? " selected" : "") + ">" + L(v ? l : NATIVE ? "kbpsDefDevice" : "kbpsDefBrowser") +
          (v ? " · 10 s ≈ " + Math.round(v * 10 / 8) + " kB" : "") + "</option>").join("") + "</select></label>" +
        '<p class="small muted">' + L("clipsNote", { after: Ln("pl.afterDays", KEEP_CLIP_DAYS) }) + "</p>";
    }
    h += "</div>";
    h += '<div class="card"><span class="set-label">' + L("myData") + '</span><p class="small muted">' +
      L("dataSummary", { mornings: Ln("pl.mornings", D.nights.length), evenings: Ln("pl.evenings", evCount), sounds: nightsN(Object.keys(D.sounds).length), closed: Ln("pl.closed", D.closed.length) }) +
      '<span id="store-use"></span> ' + lastBackupText() + "</p>" +
      '<button class="btn ghost" data-act="export" type="button">' + L("btnExport") + "</button>" +
      '<button class="btn ghost" data-act="exportCsv" type="button">' + L("btnCsv") + "</button>" +
      '<button class="btn ghost" data-act="report" type="button">' + L("btnReport") + "</button>" +
      '<button class="btn ghost" data-act="import" type="button">' + L("btnImport") + "</button>" +
      '<input id="import-file" type="file" accept=".zip,.json,application/zip,application/json" hidden>' +
      '<p class="small muted">' + L("backupNote") + (plugin("Filesystem") ? " " + L("backupNoteDir", { dir: esc(backupPlace()) }) : "") + "</p>" +
      '<button class="btn danger" data-act="askReset" type="button">' + L("btnReset") + "</button>" +
      '<button class="link" data-act="privacy" type="button">' + L("privacyLicLink") + "</button></div>";
    h += '<p class="small muted" style="text-align:center">' + L("footer") + "</p>";
    h += "</div>";
    // pri prekreslení nastavení zostane posunutie; z inej obrazovky (Súkromie) začneme hore
    const sc = $("#sheet").innerHTML.includes('data-act="askReset"') ? $("#sheet").querySelector(".scroll") : null;
    const keep = sc ? sc.scrollTop : 0;
    showSheet(h, !!sc);
    if (SET.soundAudio && SET.soundFull) UI.pruneOnClose = true;   // zmena „Uchovávať nahrávky celej noci“ sa uplatní pri odchode
    const sc2 = $("#sheet").querySelector(".scroll");
    if (sc2) sc2.scrollTop = keep;
    // koľko miesta zaberá appka (hlavne nahrávky)
    try {
      if (navigator.storage && navigator.storage.estimate) navigator.storage.estimate().then(e => {
        const el = $("#store-use");
        if (el && e && e.usage != null) el.textContent = " " + L("storeUse", { mb: e.usage / 1e6 < 10 ? dec(e.usage / 1e6) : Math.round(e.usage / 1e6) });
      }).catch(() => {});
    } catch (e) { /* nič */ }
  }

  // ---------- Súkromie ----------
  function openPrivacy() {
    const keep = Number.isInteger(SET.fullKeepDays) ? SET.fullKeepDays : KEEP_CLIP_DAYS;
    let h = '<div class="sheet-top"><button class="icon-btn" data-act="settings" type="button" aria-label="' + L("back") + '">←</button><span class="eyebrow">' + L("privacyEyebrow") + '</span><span style="width:38px"></span></div><div class="scroll">';
    h += '<div class="head"><h2>' + L("privacyTitle") + "</h2></div>";
    h += '<div class="card"><h3>' + L("pWhoTitle") + '</h3><p class="small">' + L("pWho") + "</p>" +
      (NATIVE ? '<p class="small">' + L("pBackups", { dir: esc(backupPlace()), others: isIOSApp() ? "" : L("pBackupsOthers") }) + "</p>" : "") +
      (NATIVE ? '<p class="small">' + L("pGoogle") + "</p>" : "") + "</div>";
    h += '<div class="card"><h3>' + L("pStoredTitle") + '</h3><ul class="small plain">' +
      ["pStored1", "pStored2", "pStored3", "pStored4", "pStored5", "pStored6"].map(k => "<li>" + L(k, { state: L(SET.soundAudio ? "pOn" : "pOff") }) + "</li>").join("") + "</ul></div>";
    h += '<div class="card"><h3>' + L("pHealthTitle") + '</h3><p class="small">' + L("pHealth") + "</p></div>";
    h += '<div class="card"><h3>' + L("pMicTitle") + '</h3><p class="small">' + L("pMic", { bg: bgPlugin() ? L("pMicBg") : "" }) + "</p></div>";
    h += '<div class="card"><h3>' + L("pHowLongTitle") + '</h3><ul class="small plain">' +
      "<li>" + L("pHowLong1", { after: Ln("pl.afterDays", KEEP_CLIP_DAYS) }) + "</li>" +
      "<li>" + L("pHowLong2", { after: Ln("pl.afterDays", keep) }) + "</li>" +
      "<li>" + L("pHowLong3") + "</li></ul></div>";
    h += '<div class="card"><h3>' + L("pOptionsTitle") + '</h3><p class="small">' + L("pOptions") + "</p></div>";
    h += '<div class="card"><h3>' + L("pLicTitle") + '</h3><p class="small">' + L("pLic") + "</p></div>";
    h += '<p class="small muted" style="text-align:center">' + L("notMedical") + "</p></div>";
    showSheet(h);
  }

  // ---------- Záloha, CSV, prehľad pre lekára ----------
  const daysBetween = (a, b) => Math.round((toD(b) - toD(a)) / 864e5);
  const fullDate = s => toD(s).toLocaleDateString(LOC());
  const lastBackupText = () => SET.lastBackup ? L("lastBackup", { date: fullDate(SET.lastBackup) }) : L("noBackup");
  function backupDue() {
    if (D.nights.length < 3) return false;
    if (SET.lastBackup && daysBetween(SET.lastBackup, today()) < 14) return false;
    if (SET.backupSnooze && daysBetween(SET.backupSnooze, today()) < 7) return false;
    return true;
  }
  function backupCard() {
    if (!backupDue()) return "";
    return '<div class="card"><div class="eyebrow">' + L("backupEyebrow") + "</div><h3>" + L("backupTitle") + '</h3><p class="small muted">' + lastBackupText() + " " + L("backupWhy") + "</p>" +
      '<div class="row"><button class="btn" data-act="export" type="button" style="flex:1">' + L("btnExport") + '</button><button class="btn ghost" data-act="backupLater" type="button">' + L("later") + "</button></div></div>";
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
  function fromB64(b64, type) {
    const bin = atob(b64), bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new Blob([bytes], { type: type || "" });
  }
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

  // Tabuľka pre Excel: jeden riadok na ráno. Pri desatinnej čiarke je oddeľovač „;“, pri bodke „,“ (ako Excel v danom jazyku).
  function csvText() {
    const wt = Object.fromEntries(D.body.weights.map(w => [w.date, w.kg]));
    const dates = new Set(D.nights.map(n => n.date).concat(Object.keys(D.sounds), Object.keys(D.evenings).map(d => addDays(d, 1)), Object.keys(wt)));
    const ds = decSep(), sep = ds === "," ? ";" : ",";
    const num = v => v == null || v === "" ? "" : String(v).replace(".", ds);
    const cell = v => { v = String(v); return v.includes(sep) || /["\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    const rows = [L("csvHead").slice()];
    [...dates].sort().forEach(d => {
      const n = D.nights.find(x => x.date === d) || {}, ev = D.evenings[addDays(d, -1)], s = D.sounds[d];
      rows.push([d, num(n.quality), num(n.duration), num(n.latency), num(n.wakes), num(n.energy),
        ev ? FACTORS.filter(F => ev.f[F.k]).map(F => F.name).join(", ") || L("nothingSpecial") : "",
        ev && ev.temp ? num(ev.temp) : "", s ? num(s.snoreMin) : "", s ? num(s.noise) : "", wt[d] != null ? num(wt[d]) : ""]);
    });
    return String.fromCharCode(0xfeff) + rows.map(r => r.map(cell).join(sep)).join("\r\n") + "\r\n";
  }
  function exportCsv() {
    saveFile(new Blob([csvText()], { type: "text/csv;charset=utf-8" }), "sleep-detective-" + today() + ".csv")
      .then(ok => { if (ok && !NATIVE) toast(L("csvDone")); });
  }

  const repDays = () => [14, 30, 90].includes(UI.repDays) ? UI.repDays : 30;
  function reportHtml(days) {
    const to = today(), from = addDays(to, -days + 1);
    const nights = D.nights.filter(n => n.date >= from && n.date <= to);
    const sk = Object.keys(D.sounds).filter(k => k >= from && k <= to && !D.sounds[k].partial).sort();
    const evs = Object.keys(D.evenings).filter(d => d >= addDays(from, -1) && d < to && D.evenings[d].saved);
    const avg = (key, f) => nights.length ? f(mean(nights.map(n => n[key]))) : "–";
    const row = (th, td) => "<tr><th>" + th + "</th><td>" + td + "</td></tr>";
    const min = v => L("unitMin", { n: v });
    let h = '<div class="rep"><h1>' + L("repTitle") + "</h1>" +
      "<p>" + L("repPeriod", { from: fullDate(from), to: fullDate(to), days: Ln("pl.days", days) }) + "</p>";
    if (!nights.length && !sk.length) return h + "<p>" + L("repEmpty") + "</p></div>";
    h += "<h2>" + L("repSleep") + "</h2><table><tbody>" +
      row(L("repMornings"), nights.length) +
      row(L("qualityScale"), avg("quality", dec)) +
      row(L("durationLabel"), avg("duration", v => hmShort(v) + " h")) +
      row(L("m.latency"), avg("latency", v => min(Math.round(v)))) +
      row(L("repWakes"), avg("wakes", dec)) +
      row(L("repEnergy"), avg("energy", dec)) + "</tbody></table>";
    if (sk.length) {
      const sn = sk.map(k => D.sounds[k].snoreMin || 0);
      h += "<h2>" + L("repSnore") + "</h2><table><tbody>" +
        row(L("repSoundNights"), sk.length) +
        row(L("repSnoreAvg"), min(Math.round(mean(sn)))) +
        row(L("repSnore30"), sn.filter(v => v >= 30).length) +
        row(L("repSnoreMax"), min(Math.max(...sn))) +
        row(L("repNoiseAvg"), dec(mean(sk.map(k => D.sounds[k].noise || 0)))) + "</tbody></table>";
    }
    const bi = bodyInfo();
    if (bi) {
      h += "<h2>" + L("bodyTitle") + "</h2><table><tbody>" +
        (bi.age !== null ? row(L("repAge"), Ln("pl.years", bi.age)) : "") +
        (bi.sex ? row(L("sexLabel"), L(SEX_LABEL[bi.sex])) : "") +
        row(L("heightRow"), bi.height + " cm") +
        row(L("repWeight", { date: fullDate(bi.date) }), kg(bi.kg)) +
        row("BMI", dec(bi.bmi) + " (" + (bi.child ? L("repBmiChild") : L(CAT[bi.cat])) + ")") +
        (bi.child ? "" : row(L("repOptimal", { range: bmiRange(bi) }), Math.round(bi.lo) + "–" + Math.round(bi.hi) + " kg")) +
        (bi.risks && bi.risks.length ? row(L("repRisks"), bi.risks.map(r => L(RISK[r])).join(", ")) : "");
      const W = D.body.weights.filter(w => w.date >= from);
      if (W.length >= 2) h += "<tr><th>" + L("repChange") + "</th><td>" + (W[W.length - 1].kg - W[0].kg > 0 ? "+" : "") + kg(W[W.length - 1].kg - W[0].kg) + "</td></tr>";
      h += "</tbody></table>";
    }
    if (evs.length) {
      const counts = FACTORS.map(F => ({ F, n: evs.filter(d => D.evenings[d].f[F.k]).length })).filter(c => c.n);
      h += "<h2>" + L("repEvenings", { evenings: Ln("pl.eveningsN", evs.length) }) + "</h2>" +
        (counts.length ? "<p>" + counts.map(c => c.F.name + ": " + c.n + "×").join(", ") + ".</p>" : "<p>" + L("repNoFactor") + "</p>");
    }
    if (D.closed.length) h += "<h2>" + L("repClosed") + "</h2><ul>" + D.closed.slice(0, 8).map(closedView).map(c => "<li>" + c.name + " (" + c.when + "): " + c.label + ".</li>").join("") + "</ul>";
    const dates = [...new Set(nights.map(n => n.date).concat(sk))].sort();
    h += "<h2>" + L("repByNight") + '</h2><div class="rep-wide"><table><thead><tr>' + L("repCols").map(c => "<th>" + c + "</th>").join("") + "</tr></thead><tbody>" +
      dates.map(d => {
        const n = D.nights.find(x => x.date === d), s = D.sounds[d];
        return "<tr><td>" + short(d) + "</td><td>" + (n ? n.quality : "") + "</td><td>" + (n ? hmShort(n.duration) : "") + "</td><td>" + (n ? min(n.latency) : "") +
          "</td><td>" + (n ? n.wakes : "") + "</td><td>" + (n ? n.energy : "") + "</td><td>" + (s ? min(s.snoreMin) : "") + "</td><td>" + (s ? s.noise : "") + "</td></tr>";
      }).join("") + "</tbody></table></div>";
    return h + '<p class="rep-note">' + L("repNote") + "</p></div>";
  }
  function openReport() {
    const days = repDays();
    let h = sheetTop(L("forDoctor"), "×") + '<div class="scroll">';
    h += '<div class="head"><h2>' + L("btnReport") + '</h2><p class="small muted">' + L("reportIntro") + "</p></div>";
    h += '<div class="seg" role="group" aria-label="' + L("periodAria") + '" style="--n:3">' + [14, 30, 90].map(d => '<button type="button" data-repdays="' + d + '" aria-pressed="' + (d === days) + '">' + Ln("pl.days", d) + "</button>").join("") + "</div>";
    h += '<div class="card">' + reportHtml(days) + "</div>";
    h += '<button class="btn" data-act="printReport" type="button">' + L(NATIVE ? "shareReport" : "printPdf") + "</button>";
    if (NATIVE) h += '<p class="small muted">' + L("reportNativeNote") + "</p>";
    h += '<button class="btn ghost" data-act="exportCsv" type="button">' + L("btnCsv") + "</button></div>";
    showSheet(h);
  }
  // Samostatná stránka s prehľadom (natívna appka nemá window.print): biely papier, systémové písmo.
  function reportDoc() {
    return '<!doctype html><html lang="' + LOC() + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
      "<title>" + esc(L("repTitle")) + "</title><style>" +
      "body{font:15px/1.45 system-ui,sans-serif;color:#000;background:#fff;margin:0 auto;max-width:760px;padding:16px}" +
      "h1{font-size:22px;margin:0 0 6px}h2{font-size:17px;margin:18px 0 6px}p{margin:4px 0}" +
      "table{border-collapse:collapse;width:100%;font-variant-numeric:tabular-nums}th,td{text-align:left;padding:4px 6px;border-bottom:1px solid #999;vertical-align:top}" +
      "th{font-weight:500;color:#333}.rep-wide{overflow-x:auto}.rep-wide td,.rep-wide th{white-space:nowrap}.rep-note{color:#333;font-size:13px;margin-top:14px}" +
      "@media print{@page{margin:14mm}body{padding:0}}</style></head><body>" + reportHtml(repDays()) + "</body></html>";
  }
  function printReport() {
    if (NATIVE) { saveFile(new Blob([reportDoc()], { type: "text/html" }), "sleep-detective-" + L("fileReport") + "-" + today() + ".html"); return; }
    const el = $("#print");
    if (!el) return;
    el.innerHTML = reportHtml(repDays());
    if (typeof window.print === "function") window.print();
  }

  // ---------- Hmotnosť ----------
  // Telesné údaje (nepovinné): výška, história hmotnosti, rok narodenia a pohlavie.
  // Optimálne rozmedzie: dospelí BMI 18,5–24,9 (WHO); od 65 rokov BMI 22–27, pri ktorom majú starší ľudia
  // najlepšie výsledky. Do 18 rokov sa BMI dospelých nepoužíva (rastové grafy podľa veku a pohlavia).
  // Pohlavie: orientačný cieľ v rámci rozmedzia (vzorec ideálnej hmotnosti podľa Devina pre mužov a ženy)
  // a rizikové faktory spánkového apnoe (mužské pohlavie, vek nad 50, BMI nad 35 – ako v dotazníku STOP-BANG).
  const numIn = v => { const s = String(v).trim().replace(",", "."); return /^\d+(\.\d+)?$/.test(s) ? Number(s) : null; };
  const okHeight = v => v !== null && v >= 120 && v <= 230;
  const okWeight = v => v !== null && v >= 30 && v <= 300;
  const thisYear = () => new Date().getFullYear();
  const okBirth = v => v !== null && Number.isInteger(v) && v >= 1900 && v <= thisYear();
  const SEX_LABEL = { f: "sexF", m: "sexM" };   // kľúče v slovníku
  const CAT = { under: "catUnder", low: "catLow", ok: "catOk", over: "catOver", obese: "catObese" };
  const RISK = { male: "riskMale", age: "riskAge", bmi35: "riskBmi" };
  function cleanBody(b) {
    b = b && typeof b === "object" ? b : {};
    const height = okHeight(Number(b.height)) ? Math.round(Number(b.height)) : null;
    const weights = (Array.isArray(b.weights) ? b.weights : [])
      .filter(w => w && /^\d{4}-\d\d-\d\d$/.test(w.date) && okWeight(Number(w.kg)))
      .map(w => ({ date: w.date, kg: Math.round(Number(w.kg) * 10) / 10 }))
      .sort((a, c) => a.date < c.date ? -1 : a.date > c.date ? 1 : 0)
      .filter((w, i, a) => i === a.length - 1 || a[i + 1].date !== w.date);
    const birthYear = okBirth(Number(b.birthYear)) ? Number(b.birthYear) : null;
    const sex = b.sex === "f" || b.sex === "m" ? b.sex : null;
    return { height, weights, birthYear, sex };
  }
  const bodyAge = () => D.body && D.body.birthYear ? thisYear() - D.body.birthYear : null;   // ±1 rok, stačí
  function bodyInfo() {
    const b = D.body, w = b && b.weights[b.weights.length - 1];
    if (!b || !b.height || !w) return null;
    const age = bodyAge(), sex = b.sex;
    const m2 = (b.height / 100) * (b.height / 100);
    const bmi = w.kg / m2;
    const base = { height: b.height, kg: w.kg, date: w.date, bmi, age, sex };
    if (age !== null && age < 18) return Object.assign(base, { child: true });
    const senior = age !== null && age >= 65;
    const bLo = senior ? 22 : 18.5, bHi = senior ? 27 : 24.9;
    const lo = bLo * m2, hi = bHi * m2;
    const cat = bmi < bLo ? (senior ? "low" : "under") : bmi <= bHi || (!senior && bmi < 25) ? "ok" : bmi < 30 ? "over" : "obese";
    // orientačný cieľ: ideálna hmotnosť pre pohlavie a výšku, ale vždy v optimálnom rozmedzí
    const ibw = sex && b.height > 152.4 ? (sex === "m" ? 50 : 45.5) + 0.906 * (b.height - 152.4) : null;
    const target = ibw === null ? null : clamp(ibw, lo, hi);
    const risks = [];
    if (sex === "m") risks.push("male");
    if (age !== null && age > 50) risks.push("age");
    if (bmi > 35) risks.push("bmi35");
    return Object.assign(base, { senior, bLo, bHi, lo, hi, cat, target, risks,
      over: w.kg > hi ? w.kg - hi : 0, under: w.kg < lo ? lo - w.kg : 0, heavy: senior ? bmi > 27 : bmi >= 25 });
  }
  const kg = v => dec0(v) + " kg";
  const bmiRange = i => "BMI " + dec0(i.bLo) + "–" + dec0(i.bHi);
  function bodyLine() {
    const i = bodyInfo();
    if (!i) return L("bodyNone");
    if (i.child) return L("bodyChild");
    const who = (i.sex ? L(SEX_LABEL[i.sex]) : "") + (i.age !== null ? (i.sex ? ", " : "") + L("ageShort", { n: i.age }) : "");
    return L("bodyLineMain", { bmi: dec(i.bmi), cat: L(CAT[i.cat]), h: i.height, who: who ? " (" + who + ")" : "", lo: Math.round(i.lo), hi: Math.round(i.hi) }) +
      (i.over ? L("bodyOver", { kg: kg(i.over) }) : i.under ? L("bodyUnder", { kg: kg(i.under) }) : fullStop()) +
      (i.target !== null ? " " + L("bodyTarget", { kg: Math.round(i.target) }) : "");
  }
  // koniec vety: v japončine a čínštine „。“
  const fullStop = () => /^(ja|zh)$/.test(I18.lang()) ? "。" : ".";
  function bodyNote(i) {
    const parts = [];
    if (i.senior) parts.push(L("bodyNoteSenior"));
    if (i.target !== null) parts.push(L(i.sex === "m" ? "bodyNoteTargetM" : "bodyNoteTargetF"));
    if (i.age === null || !i.sex) parts.push(L("bodyNoteMissing", { what: L(i.age === null && !i.sex ? "missBoth" : i.age === null ? "missYear" : "missSex") }));
    parts.push(L("bodyNoteBmi"));
    return parts.join(" ");
  }
  function bodyCard() {
    const b = D.body, w = b.weights[b.weights.length - 1];
    const field = (id, label, val, mode, max) => '<label class="small" for="' + id + '">' + label +
      '<input id="' + id + '" type="text" inputmode="' + mode + '" autocomplete="off" maxlength="' + max + '" value="' + esc(val == null ? "" : String(val).replace(".", decSep())) + '"></label>';
    const sexBtn = (v, l) => '<button type="button" data-sex="' + v + '" aria-pressed="' + ((b.sex || "") === v) + '">' + l + "</button>";
    return '<div class="card"><span class="set-label">' + L("bodyTitle") + "</span>" +
      '<p class="small muted">' + L("bodyIntro") + "</p>" +
      '<div class="num-row">' + field("set-height", L("heightLabel"), b.height, "decimal", 5) + field("set-weight", L("weightLabel"), w ? w.kg : null, "decimal", 5) + "</div>" +
      '<div class="num-row">' + field("set-birth", L("birthLabel"), b.birthYear, "numeric", 4) + "<span></span></div>" +
      '<span class="small">' + L("sexLabel") + '</span><div class="seg" role="group" aria-label="' + L("sexLabel") + '" style="--n:3">' + sexBtn("f", L("sexBtnF")) + sexBtn("m", L("sexBtnM")) + sexBtn("", L("sexBtnNone")) + "</div>" +
      '<p class="small num-err" id="err-body" role="alert" hidden></p>' +
      '<p class="small" id="body-sum">' + bodyLine() + "</p>" +
      (w ? '<p class="small muted">' + L(b.weights.length > 1 ? "weightWrittenN" : "weightWritten", { date: fullDate(w.date), n: b.weights.length }) + "</p>" : "") +
      (b.height || w || b.birthYear || b.sex ? '<button class="btn ghost" data-act="askDelBody" type="button">' + L("btnDelBody") + "</button>" : "") + "</div>";
  }
  const BODY_ERR = { "set-height": "errHeight", "set-weight": "errWeight", "set-birth": "errBirth" };
  function setBody(input) {
    const v = numIn(input.value), id = input.id, empty = input.value.trim() === "";
    const ok = empty || (id === "set-height" ? okHeight(v) : id === "set-weight" ? okWeight(v) : okBirth(v));
    input.setAttribute("aria-invalid", ok ? "false" : "true");
    const err = $("#err-body");
    if (err) { err.textContent = ok ? "" : L(BODY_ERR[id]); err.hidden = ok; }
    if (!ok) return;
    if (id === "set-birth") D.body.birthYear = empty ? null : v;   // rok narodenia sa dá aj zmazať
    else if (empty) return;
    else if (id === "set-height") D.body.height = Math.round(v);
    else {
      const t = today();
      D.body.weights = D.body.weights.filter(w => w.date !== t).concat({ date: t, kg: Math.round(v * 10) / 10 });
    }
    D.body = cleanBody(D.body);
    save();
    const sum = $("#body-sum");
    if (sum) sum.textContent = bodyLine();
  }

  // Hodnotenie hmotnosti v spise: súvis s chrápaním a odporúčania.
  function snoreStats(from, to) {
    const ks = Object.keys(D.sounds).filter(k => k >= from && (!to || k < to) && !D.sounds[k].partial);
    return { n: ks.length, avg: mean(ks.map(k => D.sounds[k].snoreMin || 0)), heavy: ks.filter(k => D.sounds[k].snoreMin >= 30).length };
  }
  function weightCard() {
    const i = bodyInfo();
    let h = '<div class="card"><div class="eyebrow">' + L("weightEyebrow") + "</div>";
    if (!i) {
      return h + '<p class="small muted">' + L("weightEmpty") + "</p>" +
        '<button class="link" data-act="settingsBody" type="button">' + L("enterBody") + "</button></div>";
    }
    h += "<p>" + bodyLine() + "</p>";
    if (i.child) return h + "</div>";
    const s = snoreStats(addDays(today(), -30));
    const regular = s.heavy >= 3, nights = D.nights.slice(-14);
    const tired = nights.length >= 5 && mean(nights.map(n => n.energy)) <= 2.5;
    const tips = [];
    if (i.heavy) {
      const a = Math.max(1, Math.round(i.kg * 0.05)), b = Math.round(i.kg * 0.1);
      const loss = i.target !== null ? L("tipLossT", { a, b, kg: Math.round(i.target) }) : L("tipLoss", { a, b });
      if (regular) tips.push(L("tipRegular", { nights: nightsN(s.heavy), loss }));
      else if (s.n >= 3 && s.avg >= SNORE_NIGHT) tips.push(L("tipAvg", { m: Math.round(s.avg), loss }));
      else if (s.n >= 3) tips.push(L("tipLow", { m: Math.round(s.avg) }));
      else tips.push(L("tipNoData"));
      const list = analyzable(), ranked = list.length >= MIN_NIGHTS ? analyze(list) : [];
      const flagged = ["alcohol", "lateMeal"].filter(k => (D.verdicts[k] && D.verdicts[k].confirmed) ||
        ranked.some(r => r.F.k === k && (r.status === "prime" || r.status === "suspect")));
      tips.push(flagged.length
        ? L("tipFlagged", { list: FACTORS.filter(F => flagged.includes(F.k)).map(F => lc(F.name)).join(L("and")).replace(/^./, c => c.toUpperCase()) })
        : L("tipGeneric"));
    } else if (i.under) {
      tips.push(L(i.senior ? "tipUnderSenior" : "tipUnder"));
    } else {
      tips.push(L("tipOk"));
    }
    // ženy po 50: po menopauze sa chrápanie a apnoe objavujú častejšie aj pri bežnej hmotnosti
    if (i.sex === "f" && i.age !== null && i.age >= 50 && (regular || s.avg >= SNORE_NIGHT)) {
      tips.push(L("tipWomen50"));
    }
    // spánkové apnoe: chrápanie alebo únava + obezita, alebo nadváha s ďalšími rizikovými faktormi
    const apnea = (regular || tired) && (i.bmi >= 30 || (i.heavy && i.risks.length >= 2));
    if (apnea) {
      const why = [L(i.bmi >= 30 ? "catObese" : "catOver")].concat(i.risks.filter(r => r !== "bmi35").map(r => L(RISK[r])), regular ? [L("apneaSnore")] : [], tired ? [L("apneaTired")] : []);
      tips.push('<span class="t-lamp">' + L("tipApnea", { why: why.join(", ") }) + "</span>");
    }
    h += '<ul class="small plain">' + tips.map(t => "<li>" + t + "</li>").join("") + "</ul>";
    // vývoj hmotnosti a chrápania: porovnanie nocí pred posledným zápisom hmotnosti a po ňom
    const W = D.body.weights;
    if (W.length >= 2) {
      const first = W[0], last = W[W.length - 1], ch = last.kg - first.kg;
      if (Math.abs(ch) >= 2) {
        const before = snoreStats(addDays(first.date, -30), last.date), after = snoreStats(last.date);
        h += '<p class="small">' + L(ch < 0 ? "weightLess" : "weightMore", { date: short(first.date), kg: kg(Math.abs(ch)) });
        if (before.n >= 3 && after.n >= 3) h += " " + L("weightSnore", { a: Math.round(before.avg), b: Math.round(after.avg) });
        h += "</p>";
      }
    }
    return h + '<p class="small muted">' + bodyNote(i) + "</p></div>";
  }

  // ---------- Vlastné faktory ----------
  function customCard() {
    let h = '<div class="card"><span class="set-label">' + L("customTitle") + '</span><p class="small muted">' + L("customIntro") + "</p>";
    D.custom.forEach(c => {
      h += '<div class="exp-item"><span class="ico" aria-hidden="true">' + c.icon + "</span><div>" + c.name + "</div>" +
        '<button class="btn ghost" data-act="askDelFactor" data-k="' + c.k + '" type="button">' + L("remove") + "</button></div>";
    });
    if (D.custom.length < MAX_CUSTOM) {
      const icon = CUSTOM_ICONS.includes(UI.cfIcon) ? UI.cfIcon : CUSTOM_ICONS[0];
      h += '<label class="small" for="cf-name">' + L("cfNameLabel") + '<input id="cf-name" type="text" maxlength="30" autocomplete="off" placeholder="' + esc(L("cfPh")) + '" value="' + esc(UI.cfName || "") + '"></label>' +
        '<div class="chips" role="group" aria-label="' + L("iconAria") + '">' + CUSTOM_ICONS.map(i => '<button type="button" class="chip" data-cficon="' + i + '" aria-pressed="' + (i === icon) + '" aria-label="' + L("iconN", { i }) + '">' + i + "</button>").join("") + "</div>" +
        '<button class="btn ghost" data-act="addFactor" type="button">' + L("addFactor") + "</button>";
    } else {
      h += '<p class="small muted">' + L("customMax", { n: MAX_CUSTOM }) + "</p>";
    }
    return h + "</div>";
  }
  function addFactor() {
    const name = cleanName(UI.cfName);
    if (!name) { toast(L("toastNameMissing")); return; }
    if (FACTORS.some(F => F.name.toLowerCase() === name.toLowerCase())) { toast(L("toastFactorExists")); return; }
    if (D.custom.length >= MAX_CUSTOM) return;
    let k = "c" + Date.now().toString(36);
    while (FMAP[k]) k += "x";
    D.custom.push({ k, name, icon: CUSTOM_ICONS.includes(UI.cfIcon) ? UI.cfIcon : CUSTOM_ICONS[0] });
    refreshFactors(); save();
    UI.cfName = ""; UI.cfIcon = null;
    openSettings();
    toast(L("toastFactorAdded", { name }));
  }
  function delFactor(k) {
    D.custom = D.custom.filter(c => c.k !== k);
    Object.keys(D.evenings).forEach(d => { if (D.evenings[d].f) delete D.evenings[d].f[k]; });
    delete D.verdicts[k];
    if (D.exp && D.exp.k === k) D.exp = null;
    refreshFactors(); save();
  }

  function showSheet(h, keepFocus) {
    const el = $("#sheet");
    el.innerHTML = h; el.hidden = false;
    if (!keepFocus) { const f = el.querySelector("button"); if (f) f.focus({ preventScroll: true }); }
  }
  function closeSheet() { stopPlaying(); if (UI.pruneOnClose || $("#sheet").innerHTML.includes('id="set-keep"')) { UI.pruneOnClose = false; pruneFiles(); } $("#sheet").hidden = true; $("#sheet").innerHTML = ""; ci = null; render(); }

  // Potvrdzovacie okno
  let modalOk = null, modalCancel = null;
  function confirmModal(o, onOk) {
    const m = $("#modal");
    m.innerHTML = '<div class="modal-card" role="alertdialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-text">' +
      '<h3 id="modal-title">' + o.title + '</h3><p id="modal-text" class="small">' + o.text + "</p>" +
      '<div class="row"><button class="btn ghost" data-act="modalCancel" type="button">' + (o.cancel || L("cancel")) + "</button>" +
      '<button class="btn ' + (o.danger ? "danger-fill" : "") + '" data-act="modalOk" type="button">' + o.ok + "</button></div></div>";
    m.hidden = false;
    modalOk = onOk;
    modalCancel = o.onCancel || null;
    m.querySelector('[data-act="modalCancel"]').focus();
  }
  function closeModal() { $("#modal").hidden = true; $("#modal").innerHTML = ""; modalOk = null; modalCancel = null; }

  let toastT;
  function toast(t) { const el = $("#toast"); el.textContent = t; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { el.hidden = true; }, 2800); }

  // ---------- Zvuk v noci ----------
  // Ukážky zvuku sú v IndexedDB, v localStorage je len súhrn noci.
  // Ukladáme ich ako ArrayBuffer + typ, nie ako Blob: Safari Blob v IndexedDB nie vždy spoľahlivo načíta.
  // Spojenie s databázou sa môže cez noc zavrieť (systém, prepnutie appky) – vtedy ho otvoríme znova.
  const IDB = (() => {
    let p = null;
    const open = () => p || (p = new Promise((res, rej) => {
      const r = indexedDB.open("sleep-detective", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("clips");
      r.onsuccess = () => {
        const db = r.result;
        db.onclose = () => { p = null; };
        db.onversionchange = () => { db.close(); p = null; };
        res(db);
      };
      r.onerror = () => { p = null; rej(r.error); };
      r.onblocked = () => { p = null; rej(new Error("blocked")); };
    }));
    const once = (mode, fn) => open().then(db => new Promise((res, rej) => {
      const t = db.transaction("clips", mode);
      const req = fn(t.objectStore("clips"));
      t.oncomplete = () => res(req ? req.result : undefined);
      t.onerror = () => rej(t.error);
      t.onabort = () => rej(t.error || new Error("abort"));
    }));
    // pri chybe (zavreté spojenie) ešte raz s novým spojením
    const tx = (mode, fn) => once(mode, fn).catch(() => { p = null; return once(mode, fn); });
    return {
      put: (id, blob) => blob.arrayBuffer().then(buf => tx("readwrite", s => s.put({ type: blob.type, buf }, id))),
      get: id => tx("readonly", s => s.get(id)).then(v => !v ? null : v instanceof Blob ? v : new Blob([v.buf], { type: v.type })),
      has: ids => tx("readonly", s => s.getAllKeys()).then(keys => ids.filter(id => keys.includes(id))),
      keys: () => tx("readonly", s => s.getAllKeys()),
      del: id => tx("readwrite", s => s.delete(id)),
      clear: () => tx("readwrite", s => s.clear())
    };
  })();
  const dropClips = clips => (clips || []).forEach(c => IDB.del(c.id).catch(() => {}));
  const nightFiles = s => (s && s.clips || []).concat(s && s.segs || []);   // ukážky + časti celej noci

  const CLIP_SPACING = 60000, KEEP_CLIP_DAYS = 14, MIN_REC_MS = 60000;
  const SEG_MS = 10 * 60000;   // celá noc sa ukladá po 10-minútových častiach (každá sa dá prehrať samostatne)
  // Kvalita ukážok (kbit/s); 0 = predvolená prehliadača (zvyčajne ~128 kbit/s)
  const CLIP_KBPS = [[16, "kbps16"], [32, "kbps32"], [64, "kbps64"], [128, "kbps128"], [0, "kbpsDefBrowser"]];   // kľúče v slovníku
  // Počet a dĺžka ukážok podľa druhu zvuku (z nastavení; neplatná hodnota = predvolená).
  function clipConf(kind) {
    const n = kind === "snore" ? SET.clipSnoreN : SET.clipNoiseN, sec = kind === "snore" ? SET.clipSnoreSec : SET.clipNoiseSec;
    return { n: !SET.soundAudio ? 0 : Number.isInteger(n) && n >= 0 ? n : 4, ms: (Number.isInteger(sec) && sec > 0 ? sec : 10) * 1000 };
  }
  let rec = null;      // prebiehajúci nočný záznam
  let wake = null;     // zámok obrazovky (Screen Wake Lock)

  // Noc patrí k rannému dátumu: záznam ukončený po 15:00 patrí k nasledujúcemu ránu.
  const nightKey = ms => { const d = new Date(ms); return d.getHours() >= 15 ? addDays(iso(d), 1) : iso(d); };

  async function requestWake() {
    if (rec && rec.bg !== false && bgPlugin()) {
      // záznam beží na pozadí: obrazovka smie zhasnúť (zámok mohol zostať z pohotovosti)
      if (wake) { wake.release().catch(() => {}); wake = null; }
      updateNight(); updateStandby();
      return;
    }
    try {
      const KA = plugin("KeepAwake");
      if (KA) {
        await KA.keepAwake();
        wake = { release: () => KA.allowSleep() };   // natívny príznak obrazovky, pri prepnutí appky sa nestratí
      } else if ("wakeLock" in navigator) {
        wake = await navigator.wakeLock.request("screen");
        wake.addEventListener("release", () => { wake = null; updateNight(); updateStandby(); });
      }
    } catch (e) { wake = null; }
    updateNight();
    updateStandby();
  }

  let startingRec = false;
  async function startRecording(auto) {
    if (rec) { showNight(); return; }
    if (startingRec) return;
    startingRec = true;
    try { await openRecording(auto); } finally { startingRec = false; }
  }
  async function openRecording(auto) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.SleepSound) {
      infoModal(L("recUnavTitle"), L(NATIVE ? "recUnavNative" : "recUnavWeb"));
      return;
    }
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
    } catch (e) {
      infoModal(L("micDeniedTitle"), L("micDeniedText") + " " + L(NATIVE ? "micDeniedNative" : "micDeniedWeb"));
      return;
    }
    const now = Date.now();
    const w = autoWindow(now);
    if (w) markAuto(w.key);   // v tomto okne sa už automaticky znova nespustí
    standby = false;
    rec = {
      stream, ctx: null, an: null, src: null, sr: 48000, start: now, auto: !!auto, autoEnd: SET.autoOn ? nextAutoEnd(now) : Infinity,
      td: new Float32Array(FFT_N), fd: new Float32Array(FFT_N / 2),
      det: new SleepSound.Detector({ sensitivity: SET.soundSensitivity }),
      clips: [], clipRec: null, clipDone: null, lastClipT: 0, db: -100, n: 0, live: { snoreMin: 0, noise: 0 },
      full: !!(SET.soundAudio && SET.soundFull), segs: [], segRec: null, segFrom: 0, segDones: []
    };
    if (rec.full) startSeg(rec);
    // požiadame, aby prehliadač ukážky nemazal pri nedostatku miesta
    try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {}); } catch (e) { /* nič */ }
    const r = rec;
    const BG = bgPlugin();
    if (BG) {
      r.bg = "starting";
      // texty upozornenia v lište v jazyku appky
      BG.start({ title: L("notifTitle"), text: L("notifText"), stop: L("btnStopRec"), channel: L("notifChannel") }).then(() => { if (rec === r) { r.bg = true; updateNight(); } else BG.stop().catch(() => {}); })
        .catch(() => { r.bg = false; if (rec === r) requestWake(); });   // bez služby aspoň držíme obrazovku
    }
    showNight();
    requestWake();
    if (!startDirect(r)) await startWebAudio(r);
  }

  // Zvuk čítame priamo z mikrofónu (MediaStreamTrackProcessor), kde to prehliadač vie. Web Audio totiž
  // spracúva zvuk len vtedy, keď beží aj (tichý) výstup do reproduktora – a ten niektoré telefóny pri
  // zhasnutej obrazovke zastavia (Xiaomi PowerKeeper: „pause zero data process“), čím sa zastaví celý záznam.
  // Priame čítanie od výstupu nezávisí: snímky poháňa samotný mikrofón, spektrum počítame sami (sound.js).
  const FFT_N = 2048;
  function startDirect(r) {
    const tr = r.stream.getAudioTracks ? r.stream.getAudioTracks()[0] : null;
    if (!tr || typeof window.MediaStreamTrackProcessor !== "function") return false;
    let reader;
    try { reader = new window.MediaStreamTrackProcessor({ track: tr }).readable.getReader(); } catch (e) { return false; }
    r.reader = reader;
    r.ring = new Float32Array(FFT_N); r.ringPos = 0; r.since = 0;
    (async () => {
      let buf = new Float32Array(0), got = 0;
      try {
        while (rec === r) {
          const { value: f, done } = await reader.read();
          if (done || !f) break;
          try {
            const n = f.numberOfFrames;
            if (buf.length < n) buf = new Float32Array(n);
            f.copyTo(buf, { planeIndex: 0, format: "f32-planar" });
            r.sr = f.sampleRate || r.sr;
            got++;
            for (let i = 0; i < n; i++) { r.ring[r.ringPos] = buf[i]; r.ringPos = (r.ringPos + 1) % FFT_N; }
            r.since += n;
            const step = Math.round(r.sr / 10);   // snímka každých 100 ms zvuku
            while (r.since >= step && rec === r) { r.since -= step; tick(); }
          } finally { f.close(); }
        }
      } catch (e) {
        // prehliadač priame čítanie nezvládol hneď na začiatku: použijeme Web Audio
        if (!got && rec === r) { r.ring = null; r.reader = null; startWebAudio(r); }
      }
    })();
    return true;
  }

  async function startWebAudio(r) {
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    r.ctx = ctx; r.sr = ctx.sampleRate;
    try { await ctx.resume(); } catch (e) { /* nič */ }
    const an = ctx.createAnalyser();
    an.fftSize = FFT_N; an.smoothingTimeConstant = 0;
    const src = ctx.createMediaStreamSource(r.stream);
    src.connect(an);
    r.an = an; r.src = src;
    // Systém môže zvuk pozastaviť (zhasnutá obrazovka, hovor, iná appka) – hneď ho znova spustíme,
    // inak by sa do rána nič nenahralo. V prehliadači bez dotyku resume() zlyhá, vtedy pomôže ťuknutie.
    ctx.onstatechange = () => {
      if (rec !== r) return;
      if (ctx.state === "suspended" || ctx.state === "interrupted") ctx.resume().catch(() => {});
      updateNight();
    };
    if (rec !== r) { ctx.close().catch(() => {}); return; }
    updateNight();
    // Snímky zvuku poháňa zvukové vlákno (AudioWorklet), nie časovač – časovače Chrome pri zamknutej
    // obrazovke spomalí, zvuk z mikrofónu beží ďalej. Bez AudioWorklet použijeme časovač.
    if (!(await startWorklet(r)) && rec === r) r.timer = setInterval(tick, 100);
  }

  const WORKLET_SRC = 'class SdTick extends AudioWorkletProcessor{constructor(){super();this.n=0;this.every=Math.max(1,Math.round(sampleRate/1280))}' +
    'process(){if(++this.n>=this.every){this.n=0;this.port.postMessage(0)}return true}}registerProcessor("sd-tick",SdTick)';
  async function startWorklet(r) {
    try {
      if (!r.ctx.audioWorklet || !window.AudioWorkletNode) return false;
      const url = URL.createObjectURL(new Blob([WORKLET_SRC], { type: "application/javascript" }));
      try { await r.ctx.audioWorklet.addModule(url); } finally { URL.revokeObjectURL(url); }
      if (rec !== r) return true;   // medzitým zastavené
      const node = new AudioWorkletNode(r.ctx, "sd-tick");
      const mute = r.ctx.createGain();
      mute.gain.value = 0;
      r.src.connect(node); node.connect(mute); mute.connect(r.ctx.destination);
      node.port.onmessage = () => { if (rec === r) tick(); };
      r.worklet = node;
      return true;
    } catch (e) { return false; }
  }

  function tick() {
    const r = rec; if (!r) return;
    if (r.ring) {
      // posledných FFT_N vzoriek z mikrofónu v správnom poradí, spektrum ako AnalyserNode
      r.td.set(r.ring.subarray(r.ringPos), 0); r.td.set(r.ring.subarray(0, r.ringPos), FFT_N - r.ringPos);
      SleepSound.spectrumDb(r.td, r.fd);
    } else if (r.an) {
      r.an.getFloatTimeDomainData(r.td);
      r.an.getFloatFrequencyData(r.fd);
    } else return;
    const db = SleepSound.levelDb(r.td);
    const low = SleepSound.lowRatio(r.fd, r.sr, FFT_N);
    r.db = db;
    const ev = r.det.feed(Date.now(), db, low);
    if (ev && ev.type === "start") maybeClip(r, ev.t);
    if (ev && ev.type === "end" && r.clipRec && ev.event.start === r.clipT) clipKnown(r, ev.event.kind);
    if (r.clipRec && Date.now() - r.clipFrom >= r.clipLen) stopClip(r);
    if (r.segRec && Date.now() - r.segFrom >= SEG_MS) { r.segRec.stop(); startSeg(r); }
    if (r.n > 0 && r.n % 600 === 0) storeNight(r, Date.now(), true);   // každú minútu
    if (++r.n % 10 === 0) {
      if (r.n % 100 === 0) { const s = r.det.summary(Date.now()); r.live = { snoreMin: s.snoreMin, noise: s.noise }; }
      updateNight();
    }
  }

  function clipMime() {
    if (!window.MediaRecorder) return null;
    return ["audio/webm;codecs=opus", "audio/mp4", "audio/webm", "audio/ogg;codecs=opus"].find(m => MediaRecorder.isTypeSupported(m)) || "";
  }
  // Ukážka sa začne nahrávať so začiatkom zvuku. Druh zvuku ešte nepoznáme, preto beží
  // najdlhšiu povolenú dĺžku a skráti sa, keď zvuk skončí a vieme, či je to hluk alebo chrápanie.
  function recOpts(mime) {
    const opts = {};
    if (mime) opts.mimeType = mime;
    if (SET.clipKbps > 0) opts.audioBitsPerSecond = SET.clipKbps * 1000;
    return opts;
  }
  // Celá noc: samostatný MediaRecorder, ktorý sa každých 10 minút uzavrie a uloží ako jedna časť.
  function startSeg(r) {
    const mime = clipMime();
    if (mime === null) return;
    let mr;
    try { mr = new MediaRecorder(r.stream, recOpts(mime)); } catch (e) { return; }
    const t = Date.now(), chunks = [];
    r.segRec = mr; r.segFrom = t;
    mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    r.segDones.push(new Promise(done => {
      mr.onstop = () => {
        const end = Date.now();
        if (r.segRec === mr) r.segRec = null;
        if (!chunks.length || end - t < 1000) { done(); return; }   // prázdna časť (stop hneď po začatí novej)
        const id = "full-" + t;
        IDB.put(id, new Blob(chunks, { type: mr.mimeType || mime || "audio/webm" }))
          .then(() => { r.segs.push({ id, t, end }); r.segs.sort((a, b) => a.t - b.t); }).catch(() => {}).then(done);
      };
    }));
    mr.start();
  }
  function maybeClip(r, t) {
    const mime = clipMime(), sn = clipConf("snore"), no = clipConf("noise");
    if (mime === null || (!sn.n && !no.n) || r.clipRec || t - r.lastClipT < CLIP_SPACING) return;
    let mr;
    try { mr = new MediaRecorder(r.stream, recOpts(mime)); } catch (e) { return; }
    r.lastClipT = t;
    r.clipRec = mr; r.clipT = t; r.clipFrom = Date.now(); r.clipDrop = false;
    r.clipLen = Math.max(sn.n ? sn.ms : 0, no.n ? no.ms : 0);
    // počas chrápania (už rozpoznaná séria) bude aj ďalší zvuk pravdepodobne chrápanie
    const last = r.det.events[r.det.events.length - 1];
    if (last && last.kind === "snore" && t - last.end < 15000 && sn.n) r.clipLen = sn.ms;
    const chunks = [];
    mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    r.clipDone = new Promise(done => {
      mr.onstop = () => {
        r.clipRec = null;
        if (r.clipDrop || !chunks.length) { done(); return; }
        const blob = new Blob(chunks, { type: mr.mimeType || mime || "audio/webm" });
        const id = "clip-" + t;
        IDB.put(id, blob).then(() => { r.clips.push({ id, t }); trimClips(r); }).catch(() => {}).then(done);
      };
    });
    mr.start();
  }
  // Zvuk s ukážkou skončil: dĺžku ukážky nastavíme podľa jeho druhu.
  // Kandidát na chrápanie ('cand') sa ešte môže stať chrápaním, preto beží ďalej.
  function clipKnown(r, kind) {
    const sn = clipConf("snore"), no = clipConf("noise");
    if (kind === "snore") r.clipLen = sn.n ? sn.ms : 0;
    else if (kind === "noise") r.clipLen = no.n ? no.ms : 0;
    if (!r.clipLen) { r.clipDrop = true; stopClip(r); }
  }
  function stopClip(r) {
    if (r.clipRec && r.clipRec.state !== "inactive") r.clipRec.stop();
  }
  // Počet ukážok podľa nastavení; pri prebytku zahodíme najtichšiu.
  function trimClips(r) {
    const info = c => ({ c, kind: r.det.kindAt(c.t) || "noise", peak: r.det.peakAt(c.t) });
    const drop = c => { r.clips = r.clips.filter(x => x !== c); IDB.del(c.id).catch(() => {}); };
    ["snore", "noise"].forEach(kind => {
      const list = r.clips.map(info).filter(x => x.kind === kind).sort((a, b) => b.peak - a.peak);
      list.slice(clipConf(kind).n).forEach(x => drop(x.c));
    });
  }

  // Uloží súhrn noci do D.sounds (počas noci každú minútu ako rozpracovaný).
  function storeNight(r, end, partial) {
    if (!r) return null;
    const s = r.det.summary(end);
    const key = nightKey(end);
    trimClips(r);   // druh zvuku sa mohol medzitým zmeniť (z kandidáta je chrápanie)
    const old = D.sounds[key];
    // Nový záznam tej istej noci nahradí starý. Porovnávame čas spustenia záznamu (rec), nie s.start –
    // to je čas prvej snímky zvuku a líši sa. Pre istotu nikdy nemažeme ukážky, ktoré má aktuálny záznam.
    const mine = r.clips.concat(r.segs);
    if (old && old.rec !== r.start) dropClips(nightFiles(old).filter(c => !mine.some(x => x.id === c.id)));
    D.sounds[key] = Object.assign(s, {
      rec: r.start, partial: !!partial, sensitivity: SET.soundSensitivity,
      clips: r.clips.map(c => ({ id: c.id, t: c.t, kind: r.det.kindAt(c.t) || "noise", peak: r.det.peakAt(c.t) })),
      segs: r.segs.map(g => ({ id: g.id, t: g.t, end: g.end }))
    });
    save();
    return key;
  }

  function closeAudio(r) {
    clearInterval(r.timer);
    if (r.worklet) { r.worklet.port.onmessage = null; try { r.worklet.disconnect(); } catch (e) { /* nič */ } }
    if (r.reader) { r.reader.cancel().catch(() => {}); r.reader = null; }
    r.stream.getTracks().forEach(tr => tr.stop());
    if (r.ctx) r.ctx.close().catch(() => {});
    if (wake) { wake.release().catch(() => {}); wake = null; }
    const BG = bgPlugin();
    if (BG && r.bg !== false) BG.stop().catch(() => {});
  }

  async function stopRecording() {
    const r = rec; if (!r) return;
    standby = false;
    rec = null;
    const end = Date.now();
    r.det.flush(end);
    if (r.clipRec && r.clipRec.state !== "inactive") r.clipRec.stop();
    if (r.segRec && r.segRec.state !== "inactive") r.segRec.stop();
    if (r.clipDone) await r.clipDone;
    await Promise.all(r.segDones);
    closeAudio(r);
    hideNight();
    if (end - r.start < MIN_REC_MS) {
      dropClips(r.clips.concat(r.segs));
      const old = D.sounds[nightKey(end)];
      if (old && old.rec === r.start) { delete D.sounds[nightKey(end)]; save(); }
      render();
      toast(L("shortRec"));
      return;
    }
    const key = storeNight(r, end, false);
    pruneFiles();
    render();
    openSoundReport(key);
  }

  // Pri vymazaní všetkých dát: záznam zastavíme bez uloženia.
  function abortRecording() {
    const r = rec; if (!r) return;
    rec = null;
    if (r.clipRec && r.clipRec.state !== "inactive") { r.clipRec.onstop = null; r.clipRec.stop(); }
    if (r.segRec && r.segRec.state !== "inactive") { r.segRec.onstop = null; r.segRec.stop(); }
    closeAudio(r);
    hideNight();
  }

  function showNight() {
    $("#night").innerHTML =
      '<div class="night-top"><i></i>' + L("nightTop") + "</div>" +
      '<div class="night-main"><div class="night-clock" id="n-clock"></div><div id="n-sub" class="small"></div>' +
      '<div class="night-lvl" aria-hidden="true"><i id="n-lvl"></i></div>' +
      '<div class="night-stats"><div><b id="n-snore">0</b><span>' + L("minSnoring") + '</span></div><div><b id="n-noise">0</b><span>' + L("soundsLabel") + "</span></div></div>" +
      '<p class="night-tip" id="n-tip"></p></div>' +
      '<button class="night-stop" data-act="askStopNight" type="button">' + L("btnStopRec") + "</button>";
    $("#night").hidden = false;
    updateNight();
  }

  // ---------- Automatické spustenie (funguje, len keď je appka otvorená) ----------
  const AUTO_KEY = "sleepDetective.auto.v1";   // okno (dátum večera), v ktorom už záznam bežal
  const AUTO_MIN_LEFT = 60 * 60000;            // v poslednej hodine okna sa už automaticky nespúšťa
  let standby = false;
  function hmMin(v) {
    const m = /^(\d{1,2})[:.](\d{2})$/.exec(String(v || "").trim());
    if (!m || +m[1] > 23 || +m[2] > 59) return null;
    return +m[1] * 60 + +m[2];
  }
  const fmtHm = m => String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
  const atMin = (y, mo, d, min) => new Date(y, mo, d, Math.floor(min / 60), min % 60).getTime();
  // Okno automatického záznamu, do ktorého patrí čas ms: { key, start, end }, inak null.
  function autoWindow(ms) {
    const f = hmMin(SET.autoFrom), t = hmMin(SET.autoTo);
    if (!SET.autoOn || f === null || t === null || f === t) return null;
    const d = new Date(ms), m = d.getHours() * 60 + d.getMinutes();
    let back;   // o koľko dní dozadu sa okno začalo
    if (f < t) { if (m < f || m >= t) return null; back = 0; }
    else if (m >= f) back = 0;
    else if (m < t) back = 1;
    else return null;
    const s0 = new Date(d.getFullYear(), d.getMonth(), d.getDate() - back);
    const start = atMin(s0.getFullYear(), s0.getMonth(), s0.getDate(), f);
    const end = atMin(s0.getFullYear(), s0.getMonth(), s0.getDate() + (f < t ? 0 : 1), t);
    return { key: iso(s0), start, end };
  }
  // Najbližší čas „Do“ po ms (vtedy sa záznam automaticky ukončí).
  function nextAutoEnd(ms) {
    const t = hmMin(SET.autoTo);
    if (t === null) return Infinity;
    const d = new Date(ms);
    let e = atMin(d.getFullYear(), d.getMonth(), d.getDate(), t);
    if (e <= ms) e = atMin(d.getFullYear(), d.getMonth(), d.getDate() + 1, t);
    return e;
  }
  function autoDone() { try { return localStorage.getItem(AUTO_KEY); } catch (e) { return null; } }
  function markAuto(key) { try { localStorage.setItem(AUTO_KEY, key); } catch (e) { /* nič */ } }

  function autoCheck() {
    const now = Date.now();
    if (rec) {
      if (SET.autoOn && now >= rec.autoEnd) { rec.autoEnd = Infinity; stopRecording(); }
      return;
    }
    if (standby) updateStandby();
    if (!SET.autoOn || startingRec || document.visibilityState !== "visible") return;
    const w = autoWindow(now);
    if (!w || autoDone() === w.key || w.end - now < AUTO_MIN_LEFT) return;
    markAuto(w.key);
    startRecording(true);
  }

  // Pohotovosť: tmavá obrazovka, ktorá drží telefón zapnutý a v čase „Od“ spustí záznam.
  function showStandby() {
    standby = true;
    $("#night").innerHTML =
      '<div class="night-top"><i></i>' + L("standbyTop") + "</div>" +
      '<div class="night-main"><div class="night-clock" id="n-clock"></div><div id="n-sub" class="small"></div>' +
      '<p class="night-tip" id="n-tip"></p></div>' +
      '<button class="night-stop" data-act="startNight" type="button">' + L("startNow") + "</button>" +
      '<button class="night-stop" data-act="cancelStandby" type="button" style="margin-top:10px">' + L("cancelStandby") + "</button>";
    $("#night").hidden = false;
    requestWake();
    updateStandby();
  }
  function updateStandby() {
    if (!standby || rec || $("#night").hidden) return;
    $("#n-clock").textContent = clock(Date.now());
    $("#n-sub").textContent = L("standbySub", { time: SET.autoFrom });
    const tip = $("#n-tip");
    tip.className = wake ? "night-tip" : "night-tip warn";
    tip.textContent = L(wake ? "standbyTipOk" : "standbyTipWarn");
  }
  function cancelStandby() {
    standby = false;
    hideNight();
    if (wake && !rec) { wake.release().catch(() => {}); wake = null; }
    render();
  }
  function hideNight() { $("#night").hidden = true; $("#night").innerHTML = ""; }
  function updateNight() {
    const r = rec;
    if (!r || $("#night").hidden) return;
    const now = Date.now();
    $("#n-clock").textContent = clock(now);
    $("#n-sub").textContent = L("listeningSince", { time: clock(r.start), h: hmShort((now - r.start) / 3600000) }) + (r.full ? " · " + L("recordingFull") : "");
    $("#n-lvl").style.width = clamp((r.db - r.det.floor) / 40, 0, 1) * 100 + "%";
    $("#n-snore").textContent = r.live.snoreMin;
    $("#n-noise").textContent = r.live.noise;
    const tip = $("#n-tip");
    const st = r.ctx ? r.ctx.state : "running";
    if (r.bg === true && st !== "suspended") {
      tip.className = "night-tip";
      tip.textContent = L("tipBg");
    } else if (st === "suspended") {
      tip.className = "night-tip warn";
      tip.textContent = L("tipSuspended");
    } else if (!wake && (r.worklet || r.ring)) {
      tip.className = "night-tip warn";
      tip.textContent = L("tipWorklet");
    } else if (!wake) {
      tip.className = "night-tip warn";
      tip.textContent = L("tipNoWake");
    } else {
      tip.className = "night-tip";
      tip.textContent = L("tipNightOk");
    }
  }

  // Graf noci: sivá = najhlasnejší zvuk v 5-min úseku, žltá = koľko z úseku bolo chrápanie.
  function soundChart(s) {
    const tl = s.timeline, W = 340, H = 120, pl = 6, pr = 6, pt = 8, pb = 20, ih = H - pt - pb;
    const bw = (W - pl - pr) / Math.max(tl.length, 12);
    const top = Math.max(30, ...tl.map(b => b.peak));
    let svg = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + L("soundChartAria") + '">';
    svg += '<line class="grid" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + (pt + ih) + '" y2="' + (pt + ih) + '"/>';
    tl.forEach((b, i) => {
      const x = (pl + i * bw + 0.6).toFixed(1), w = Math.max(1.5, bw - 1.2).toFixed(1);
      const t0 = s.start + i * SleepSound.BUCKET_MS;
      if (b.peak > 0) {
        const h = Math.max(1, b.peak / top * ih);
        svg += '<rect class="b-off" x="' + x + '" y="' + (pt + ih - h).toFixed(1) + '" width="' + w + '" height="' + h.toFixed(1) + '" rx="1"><title>' + clock(t0) + ": " + L("barLoud", { db: Math.round(b.peak), sounds: Ln("pl.sounds", b.noise) }) + "</title></rect>";
      }
      if (b.snore > 0) {
        const h = Math.max(1.5, Math.min(1, b.snore / 300) * ih);
        svg += '<rect class="b-on" x="' + x + '" y="' + (pt + ih - h).toFixed(1) + '" width="' + w + '" height="' + h.toFixed(1) + '" rx="1"><title>' + clock(t0) + ": " + L("snoreMinLine", { m: Math.round(b.snore / 60) }) + "</title></rect>";
      }
    });
    svg += '<text x="' + pl + '" y="' + (H - 4) + '">' + clock(s.start) + "</text>";
    svg += '<text x="' + (pl + tl.length * bw) + '" y="' + (H - 4) + '" text-anchor="end">' + clock(s.end) + "</text>";
    return '<div class="chart">' + svg + "</svg></div>";
  }

  function soundLine(s) {
    return (s.snoreMin ? L("snoreMinLine", { m: s.snoreMin }) : L("noSnore")) + " · " + Ln("pl.sounds", s.noise);
  }

  function openSoundReport(key) {
    const s = D.sounds[key];
    if (!s) return;
    let h = sheetTop(L("soundNight")) + '<div class="scroll">';
    h += '<div class="head"><div class="eyebrow">' + L("nightOf", { date: longRaw(key) }) + "</div><h2>" + L("soundTrack") + "</h2></div>";
    h += '<div class="card"><div class="stats">' +
      stat(hmShort((s.end - s.start) / 3600000), L("statRec")) + stat(L("unitMin", { n: s.snoreMin }), L("statSnore")) +
      stat(s.noise, L("soundsLabel")) + stat(s.loudest ? clock(s.loudest.t) : "–", L("statLoudest")) + "</div>";
    if (s.gapMin > 0) h += '<p class="small t-lamp">' + L("gapLine", { m: s.gapMin }) + "</p>";
    if (s.interrupted) h += '<p class="small t-lamp">' + L("interruptedLine", { time: clock(s.end) }) + "</p>";
    if ((s.gapMin > 0 || s.interrupted) && powerApi()) h += '<p class="small">' + L("powerHint") + '</p><button class="btn ghost" data-act="fixPower" type="button">' + L("powerFix") + "</button>";
    h += soundChart(s) +
      '<div class="legend"><span><i style="background:var(--lamp)"></i>' + L("legendSnore") + '</span><span><i style="background:var(--bar)"></i>' + L("legendLoud") + "</span></div>" +
      // vymazanie hneď pod súhrnom noci, nie na konci okna, kde ho na Androide prekrývajú systémové tlačidlá
      '<button class="btn danger del-night" data-act="askDelSound" data-key="' + key + '" type="button">' + L("btnDelSound") + "</button></div>";
    h += '<div class="card"><div class="eyebrow">' + L("clipsEyebrow") + "</div>";
    if (s.clips && s.clips.length) {
      s.clips.slice().sort((a, b) => a.t - b.t).forEach(c => {
        h += '<div class="clip"><button class="icon-btn" data-act="playClip" data-id="' + esc(c.id) + '" type="button" aria-label="' + L("playClipAria", { time: clock(c.t) }) + '">▶</button>' +
          "<span>" + clock(c.t) + ' · <span class="' + (c.kind === "snore" ? "t-lamp" : "muted") + '">' + L(c.kind === "snore" ? "kindSnore" : "kindNoise") + "</span></span>" +
          '<span class="small muted">+' + Math.round(c.peak) + " dB</span></div>";
      });
    } else {
      h += '<p class="small muted">' + L(SET.soundAudio && (SET.clipSnoreN || SET.clipNoiseN) ? "noClips" : "clipsOff") + "</p>";
    }
    h += "</div>";
    if (s.segs && s.segs.length) {
      h += '<div class="card"><div class="eyebrow">' + L("fullNight", { m: SEG_MS / 60000 }) + "</div>";
      s.segs.forEach(g => {
        // chrápanie v tejto časti podľa 5-minútových úsekov časovej osi
        let sn = 0;
        s.timeline.forEach((b, i) => { const b0 = s.start + i * SleepSound.BUCKET_MS; if (b0 >= g.t - SleepSound.BUCKET_MS / 2 && b0 < g.end) sn += b.snore; });
        const name = "sleep-detective-" + key + "-" + clock(g.t).replace(":", "");
        h += '<div class="clip"><button class="icon-btn" data-act="playClip" data-id="' + esc(g.id) + '" type="button" aria-label="' + L("playSegAria", { from: clock(g.t), to: clock(g.end) }) + '">▶</button>' +
          "<span>" + clock(g.t) + "–" + clock(g.end) + (sn >= 30 ? ' · <span class="t-lamp">' + L("snoreMinLine", { m: Math.max(1, Math.round(sn / 60)) }) + "</span>" : "") + "</span>" +
          '<span class="acts"><button class="icon-btn" data-act="dlFile" data-id="' + esc(g.id) + '" data-name="' + esc(name) + '" type="button" aria-label="' + L("dlSegAria", { time: clock(g.t) }) + '">⤓</button></span></div>';
      });
      h += '<p class="small muted">' + L("segHint") + "</p></div>";
    }
    h += '<p class="small muted">' + L("soundDisclaimer") + "</p>";
    h += "</div>";
    showSheet(h);
    markMissingClips(nightFiles(s));
  }
  // Ukážky, ktoré v úložisku chýbajú, označíme hneď, nie až po ťuknutí.
  function markMissingClips(clips) {
    if (!clips.length) return;
    IDB.has(clips.map(c => c.id)).then(found => {
      clips.filter(c => !found.includes(c.id)).forEach(c => {
        $("#sheet").querySelectorAll('[data-id="' + c.id + '"]').forEach(b => {
          b.disabled = true; b.textContent = "–"; b.setAttribute("aria-label", L("missingAria")); b.title = L("missingTitle");
        });
      });
    }).catch(() => {});
  }

  let playing = null;
  function stopPlaying() {
    if (!playing) return;
    playing.audio.pause();
    URL.revokeObjectURL(playing.url);
    if (playing.btn) playing.btn.textContent = "▶";
    playing = null;
  }
  async function playClip(btn) {
    const id = btn.dataset.id;
    const same = playing && playing.id === id;
    stopPlaying();
    if (same) return;
    let blob;
    try { blob = await IDB.get(id); } catch (e) {
      toast(L("clipLoadFail", { err: (e && (e.name || e.message)) || L("errWord") })); return;
    }
    if (!blob) { toast(L("clipMissing")); return; }
    if (!blob.size) { toast(L("clipEmpty")); return; }
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    playing = { id, audio, url, btn };
    btn.textContent = "■";
    audio.onended = stopPlaying;
    audio.play().catch(() => { stopPlaying(); toast(L("clipPlayFail")); });
  }

  // Stiahnutie časti celej noci ako zvukového súboru.
  async function downloadFile(btn) {
    let blob = null;
    try { blob = await IDB.get(btn.dataset.id); } catch (e) { /* nižšie */ }
    if (!blob) { toast(L("missingTitle")); return; }
    const ext = /mp4/.test(blob.type) ? "m4a" : /ogg/.test(blob.type) ? "ogg" : "webm";
    saveFile(blob, btn.dataset.name + "." + ext);
  }

  // Po štarte: rozpracovaný záznam bez bežiaceho nahrávania = appka bola zatvorená; staré ukážky mažeme.
  function tidySounds() {
    let changed = false;
    Object.keys(D.sounds).forEach(k => {
      const s = D.sounds[k];
      if (s.partial) { s.partial = false; s.interrupted = true; changed = true; }
    });
    if (changed) save();
    pruneFiles();
  }
  // Ukážky mažeme po KEEP_CLIP_DAYS dňoch, časti celej noci podľa nastavenia (najviac KEEP_CLIP_DAYS).
  function pruneFiles() {
    const keep = Number.isInteger(SET.fullKeepDays) ? Math.min(KEEP_CLIP_DAYS, Math.max(1, SET.fullKeepDays)) : KEEP_CLIP_DAYS;
    const clipLimit = addDays(today(), -KEEP_CLIP_DAYS), segLimit = addDays(today(), -keep);
    let changed = false;
    Object.keys(D.sounds).forEach(k => {
      const s = D.sounds[k];
      if (k < clipLimit && s.clips && s.clips.length) { dropClips(s.clips); s.clips = []; changed = true; }
      if (k < segLimit && s.segs && s.segs.length) { dropClips(s.segs); s.segs = []; changed = true; }
    });
    if (changed) save();
    dropOrphans();
  }
  // Nahrávky, ku ktorým nepatrí žiadna noc (appku zabil systém počas záznamu, zlyhalo uloženie...).
  // Počas záznamu nemažeme nič a čerstvé súbory (do 15 min) necháme – môže ich práve zapisovať iná karta.
  const ORPHAN_AGE = 15 * 60000;
  let restoring = false;   // počas obnovy zo zálohy sa ešte zapisujú nahrávky
  function dropOrphans() {
    if (rec || startingRec || restoring) return;
    const used = new Set();
    Object.keys(D.sounds).forEach(k => nightFiles(D.sounds[k]).forEach(c => used.add(c.id)));
    return IDB.keys().then(keys => {
      if (rec || startingRec || restoring) return;
      keys.forEach(id => {
        const t = Number(String(id).split("-")[1]);
        if (!used.has(id) && !(t > Date.now() - ORPHAN_AGE)) IDB.del(id).catch(() => {});
      });
    }).catch(() => {});
  }

  // Pred prvým nahrávaním: v izbe môžu byť aj iní ľudia a ich hlas je tiež osobný údaj.
  const REC_NOTICE = { get title() { return L("recNoticeTitle"); }, get text() { return L("recNoticeText"); } };
  function withRecNotice(go) {
    if (SET.recNotice) { go(); return; }
    confirmModal({ title: REC_NOTICE.title, text: REC_NOTICE.text, ok: L("recNoticeOk") }, () => { SET.recNotice = true; saveSet(); closeModal(); go(); });
  }

  // Šetrenie batérie: niektoré telefóny (najmä Xiaomi, Huawei, Oppo, Vivo, Samsung) uspia appku pri zhasnutej
  // obrazovke aj so službou na popredí. Zakázať im to nevieme, len pred prvým záznamom zavedieme používateľa
  // do systémového okna „beh na pozadí“ a do nastavení batérie výrobcu. Neskôr cez Nastavenia alebo ranný prehľad.
  const STRICT_VENDORS = /xiaomi|redmi|poco|huawei|honor|oppo|realme|oneplus|vivo|iqoo|samsung|meizu|asus|tecno|infinix|itel|hmd|nokia|lenovo|motorola|zte|nubia/;
  const powerApi = () => { const BG = bgPlugin(); return BG && typeof BG.power === "function" ? BG : null; };
  async function powerState() {
    const BG = powerApi();
    if (!BG) return null;
    try { const p = await BG.power(); return { ignoring: !!(p && p.ignoring), strict: STRICT_VENDORS.test(String(p && p.vendor || "").toLowerCase()) }; } catch (e) { return null; }
  }
  async function withPower(go) {
    if (SET.powerAsked || !powerApi()) { go(); return; }
    const p = await powerState();
    if (!p || (p.ignoring && !p.strict)) { go(); return; }
    const done = () => { SET.powerAsked = true; saveSet(); };
    confirmModal({ title: L("powerTitle"), text: L("powerText") + (p.strict ? " " + L("powerVendor") : ""), ok: L("powerOk"), cancel: L("powerLater"),
      onCancel: () => { done(); go(); } }, async () => { done(); closeModal(); await fixPower(p); go(); });
  }
  async function fixPower(known) {
    const BG = powerApi();
    if (!BG) return;
    const p = known || await powerState();
    if (!p) return;
    try {
      if (!p.ignoring && typeof BG.askBattery === "function") await BG.askBattery();
      if (p.strict && typeof BG.vendorSettings === "function") await BG.vendorSettings();
    } catch (e) { /* nastavenia sa neotvorili */ }
  }

  function infoModal(title, text) {
    confirmModal({ title, text, ok: L("understood") }, closeModal);
    $("#modal").querySelector('[data-act="modalCancel"]').hidden = true;
    $("#modal").querySelector('[data-act="modalOk"]').focus();
  }

  // ---------- Akcie ----------
  function startExp(k) {
    if (D.exp) {
      UI.msg = L("oneExp", { exp: FMAP[D.exp.k].exp });
      UI.tab = "exp"; closeSheet(); return;
    }
    D.exp = { k, start: addDays(today(), 1), length: SET.expLength };
    save();
    UI.msg = null;
    toast(L("expStarted", { exp: FMAP[k].exp }));
    UI.tab = "exp"; closeSheet();
  }

  // Natívna appka: zálohy sa ukladajú do jedného priečinka a „Obnoviť zo zálohy“ ponúkne zálohy práve
  // z neho. Android: verejné Dokumenty/SleepDetective (súbor prežije odinštalovanie appky).
  // iOS: Súbory → Na mojom iPhone → Sleep Detective → SleepDetective.
  const BACKUP_DIR = "SleepDetective";
  const isIOSApp = () => NATIVE && typeof window.Capacitor.getPlatform === "function" && window.Capacitor.getPlatform() === "ios";
  const backupPlace = () => L(isIOSApp() ? "backupPlaceIOS" : "backupPlaceAndroid", { dir: BACKUP_DIR });
  async function fsReady(FS) {
    // Android 10 a starší pýtajú povolenie na úložisko; novšie verzie ho na vlastné súbory nepotrebujú
    try { if (FS.requestPermissions) await FS.requestPermissions(); } catch (e) { /* skúsime aj tak */ }
  }

  // ---------- ZIP bez kompresie ----------
  // Záloha je ZIP: sleep-detective.json (záznamy a nastavenia) + nahrávky v priečinku nahravky/<ráno>/.
  // Zvuk je už skomprimovaný, preto stačí metóda „store“ a nepotrebujeme knižnicu. Súbor otvorí každý
  // program na ZIP a nahrávky sa dajú prehrať aj mimo appky. Staršie zálohy (.json) sa dajú obnoviť ďalej.
  const BACKUP_JSON = "sleep-detective.json", AUDIO_DIR = "nahravky", ZIP_MAX = 0xfff00000;
  const CRC_T = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    return t;
  })();
  function crc32(b) { let c = 0xffffffff; for (let i = 0; i < b.length; i++) c = CRC_T[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }
  // files: [{ name, blob }] → časti ZIP súboru (Uint8Array a Blob), ktoré stačí zapísať za sebou
  async function zipParts(files) {
    const enc = new TextEncoder(), now = new Date();
    const time = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
    const date = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
    const parts = [], cd = [];
    let off = 0;
    for (const f of files) {
      const name = enc.encode(f.name), size = f.blob.size;
      const crc = crc32(new Uint8Array(await f.blob.arrayBuffer()));
      const h = new DataView(new ArrayBuffer(30));
      h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true);   // 0x0800 = názvy v UTF-8
      h.setUint16(10, time, true); h.setUint16(12, date, true); h.setUint32(14, crc, true);
      h.setUint32(18, size, true); h.setUint32(22, size, true); h.setUint16(26, name.length, true);
      parts.push(new Uint8Array(h.buffer), name, f.blob);
      const c = new DataView(new ArrayBuffer(46));
      c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true);
      c.setUint16(12, time, true); c.setUint16(14, date, true); c.setUint32(16, crc, true);
      c.setUint32(20, size, true); c.setUint32(24, size, true); c.setUint16(28, name.length, true); c.setUint32(42, off, true);
      cd.push(new Uint8Array(c.buffer), name);
      off += 30 + name.length + size;
      if (off > ZIP_MAX) throw new Error("too-big");
    }
    const cdSize = cd.reduce((n, x) => n + x.length, 0);
    const e = new DataView(new ArrayBuffer(22));
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true);
    e.setUint32(12, cdSize, true); e.setUint32(16, off, true);
    return parts.concat(cd, [new Uint8Array(e.buffer)]);
  }
  // ZIP → { názov: { blob } }; číta len hlavičky, dáta zostanú ako výrezy súboru (nič veľké v pamäti)
  async function unzip(blob) {
    const tailLen = Math.min(blob.size, 22 + 65535);
    const tail = new DataView(await blob.slice(blob.size - tailLen).arrayBuffer());
    let e = -1;
    for (let i = tail.byteLength - 22; i >= 0; i--) if (tail.getUint32(i, true) === 0x06054b50) { e = i; break; }
    if (e < 0) throw new Error("zip");
    const n = tail.getUint16(e + 10, true), cdSize = tail.getUint32(e + 12, true), cdOff = tail.getUint32(e + 16, true);
    const cdBuf = await blob.slice(cdOff, cdOff + cdSize).arrayBuffer(), cd = new DataView(cdBuf), dec = new TextDecoder();
    const out = {};
    for (let i = 0, p = 0; i < n; i++) {
      if (p + 46 > cdSize || cd.getUint32(p, true) !== 0x02014b50) throw new Error("zip");
      const method = cd.getUint16(p + 10, true), size = cd.getUint32(p + 20, true);
      const nl = cd.getUint16(p + 28, true), xl = cd.getUint16(p + 30, true), cl = cd.getUint16(p + 32, true), lo = cd.getUint32(p + 42, true);
      const name = dec.decode(new Uint8Array(cdBuf, p + 46, nl));
      const lh = new DataView(await blob.slice(lo, lo + 30).arrayBuffer());
      if (method !== 0 || lh.byteLength < 30 || lh.getUint32(0, true) !== 0x04034b50) throw new Error("zip");
      const start = lo + 30 + lh.getUint16(26, true) + lh.getUint16(28, true);
      out[name] = { blob: blob.slice(start, start + size) };
      p += 46 + nl + xl + cl;
    }
    return out;
  }
  const mb = bytes => bytes < 1e6 ? Math.max(1, Math.round(bytes / 1e3)) + " kB" : dec0(bytes / 1e6) + " MB";

  // Obsah zálohy: JSON so záznamami a všetky nahrávky, ktoré sú v zariadení (ukážky aj celé noci).
  async function backupFiles() {
    const files = [], audio = [];
    for (const k of Object.keys(D.sounds).sort()) {
      for (const c of nightFiles(D.sounds[k])) {
        let blob = null;
        try { blob = await IDB.get(c.id); } catch (e) { /* nahrávka chýba */ }
        if (!blob || !blob.size) continue;
        const ext = /mp4/.test(blob.type) ? "m4a" : /ogg/.test(blob.type) ? "ogg" : "webm";
        const file = AUDIO_DIR + "/" + k + "/" + c.id + "." + ext;
        audio.push({ id: c.id, file, type: blob.type, night: k });
        files.push({ name: file, blob });
      }
    }
    const json = JSON.stringify({ app: "sleep-detective", exported: new Date().toISOString(),
      note: L("backupJsonNote", { dir: AUDIO_DIR }), data: D, settings: SET, audio }, null, 2);
    files.unshift({ name: BACKUP_JSON, blob: new Blob([json], { type: "application/json" }) });
    return { files, count: audio.length, bytes: files.reduce((n, f) => n + f.blob.size, 0) };
  }
  // Zápis veľkého súboru v natívnej appke po 3 MB (násobok 3 → kúsky base64 sa dajú spájať)
  async function writeParts(FS, path, parts) {
    const CH = 3 * 1024 * 1024;
    let first = true, pend = [], pendLen = 0;
    const flush = async () => {
      const buf = new Uint8Array(pendLen);
      let o = 0;
      pend.forEach(x => { buf.set(x, o); o += x.length; });
      pend = []; pendLen = 0;
      const data = toB64(buf);
      if (first) { await FS.writeFile({ path, data, directory: "DOCUMENTS", recursive: true }); first = false; }
      else await FS.appendFile({ path, data, directory: "DOCUMENTS" });
    };
    for (const part of parts) {
      const blob = part instanceof Blob ? part : null;
      const size = blob ? blob.size : part.length;
      for (let o = 0; o < size; ) {
        const take = Math.min(CH - pendLen, size - o);
        const bytes = blob ? new Uint8Array(await blob.slice(o, o + take).arrayBuffer()) : part.subarray(o, o + take);
        pend.push(bytes); pendLen += bytes.length; o += take;
        if (pendLen >= CH) await flush();
      }
    }
    if (pendLen || first) await flush();
  }

  let backupBusy = false;
  async function exportData() {
    if (backupBusy) return;
    backupBusy = true;
    try {
      toast(L("preparing"));
      const { files, count, bytes } = await backupFiles();
      const parts = await zipParts(files);
      const name = "sleep-detective-" + today() + ".zip";
      const what = count ? " " + L("backupContains", { recs: Ln("pl.recs", count), size: mb(bytes) }) : "";
      const FS = plugin("Filesystem");
      let ok = true;
      if (FS) {
        try {
          await fsReady(FS);
          await writeParts(FS, BACKUP_DIR + "/" + name, parts);
          toast(L("backupSaved", { path: backupPlace() + "/" + name }) + what);
        } catch (e) {
          // priečinok nie je dostupný (napr. zakázané povolenie): ponúkneme aspoň zdieľanie
          ok = await saveFile(new Blob(parts, { type: "application/zip" }), name);
        }
      } else {
        download(new Blob(parts, { type: "application/zip" }), name);
        toast(L("backupDownloaded") + what);
      }
      if (!ok) return;
      SET.lastBackup = today(); SET.backupSnooze = null; saveSet();
      if (!$("#sheet").hidden && $("#sheet").innerHTML.includes('data-act="askReset"')) openSettings(); else if ($("#sheet").hidden) render();
    } catch (e) {
      infoModal(L("backupFailTitle"), L(e && e.message === "too-big" ? "backupTooBig" : "backupErr"));
    } finally {
      backupBusy = false;
    }
  }

  // Zoznam záloh v priečinku BACKUP_DIR (najnovšie hore). Zálohu z iného miesta otvorí systémový výber súboru.
  async function openBackups() {
    const FS = plugin("Filesystem");
    let files = [];
    try {
      await fsReady(FS);
      const r = await FS.readdir({ path: BACKUP_DIR, directory: "DOCUMENTS" });
      files = (r.files || []).map(f => typeof f === "string" ? { name: f } : f)
        .filter(f => /\.(zip|json)$/i.test(f.name) && f.type !== "directory")
        .sort((a, b) => (b.mtime || 0) - (a.mtime || 0) || (a.name < b.name ? 1 : -1));
    } catch (e) { /* priečinok ešte neexistuje */ }
    let h = '<div class="sheet-top"><button class="icon-btn" data-act="settings" type="button" aria-label="' + L("back") + '">←</button><span class="eyebrow">' + L("backupEyebrow") + '</span><span style="width:38px"></span></div><div class="scroll">';
    h += '<div class="head"><h2>' + L("btnImport") + '</h2><p class="small muted">' + L("restoreFrom", { dir: esc(backupPlace()) }) + "</p></div>";
    h += '<div class="card">';
    if (!files.length) h += '<p class="small muted">' + L("noBackups") + "</p>";
    files.forEach(f => {
      const when = f.mtime ? new Date(Number(f.mtime)).toLocaleString(LOC(), { day: "numeric", month: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "";
      h += '<button class="sound-row" data-act="importNative" data-name="' + esc(f.name) + '" type="button"><span class="muted">' + esc(when) + "</span><span>" + esc(f.name) +
        (f.size ? ' <span class="muted">· ' + mb(f.size) + (/\.json$/i.test(f.name) ? ", " + L("noRecsSuffix") : "") + "</span>" : "") + '</span><span class="t-lamp">→</span></button>';
    });
    h += "</div>";
    h += '<button class="btn ghost" data-act="importPick" type="button">' + L("pickOther") + "</button>" +
      '<input id="import-file" type="file" accept=".zip,.json,application/zip,application/json" hidden>' +
      '<p class="small muted">' + L("pickOtherHint") + (isIOSApp() ? "" : " " + L("pickOtherAndroid")) + "</p></div>";
    showSheet(h);
  }
  // Veľký ZIP sa číta cez lokálnu adresu súboru (po častiach); keď to nejde, celý cez readFile (base64).
  async function nativeBlob(FS, path) {
    try {
      const { uri } = await FS.getUri({ path, directory: "DOCUMENTS" });
      const r = await fetch(window.Capacitor.convertFileSrc(uri));
      if (r.ok) return await r.blob();
    } catch (e) { /* skúsime readFile */ }
    const r = await FS.readFile({ path, directory: "DOCUMENTS" });
    return typeof r.data === "string" ? fromB64(r.data) : r.data;
  }
  async function importNative(name) {
    const FS = plugin("Filesystem");
    if (!FS || !/^[\w.\-]+\.(zip|json)$/i.test(name)) return;
    let blob;
    try { blob = await nativeBlob(FS, BACKUP_DIR + "/" + name); } catch (e) {
      infoModal(L("openFailTitle"), L("openFailText"));
      return;
    }
    importBlob(blob).catch(importFail);
  }

  // Obnovenie zo zálohy: nahradí všetky dáta. Nahrávky zo ZIP zálohy sa vrátia do zariadenia; z nahrávok,
  // ktoré v zálohe nie sú (staršia záloha .json), ponecháme tie, ktoré tu ešte sú a záloha ich pozná.
  // Ostatné sa zmažú ako osirelé.
  const importFail = () => infoModal(L("importFailTitle"), L("importFailText"));
  function importFile(file) {
    if (!file) return;
    if (rec || startingRec) { toast(L("stopFirst")); return; }
    importBlob(file).catch(importFail);
  }
  async function importBlob(blob) {
    let head = "";
    try { if (blob.slice) head = await blob.slice(0, 2).text(); } catch (e) { /* nie je Blob */ }
    if (head !== "PK") { importText(await blob.text()); return; }   // staršia záloha .json
    let z;
    try { z = await unzip(blob); } catch (e) { importFail(); return; }
    if (!z[BACKUP_JSON]) { importFail(); return; }
    importText(await z[BACKUP_JSON].blob.text(), z);
  }
  function importText(txt, zip) {
    if (rec || startingRec) { toast(L("stopFirst")); return; }
    const fail = importFail;
    {
      let b;
      try { b = JSON.parse(txt); } catch (e) { fail(); return; }
      const d = b && b.data;
      if (!b || b.app !== "sleep-detective" || !d || !Array.isArray(d.nights) || (d.sounds && typeof d.sounds !== "object")) { fail(); return; }
      const nd = cleanData(d);   // podvrhnutá záloha: len očakávaný tvar, texty bez HTML
      const aud = zip && Array.isArray(b.audio) ? b.audio.filter(a => a && /^(clip|full)-\d+$/.test(a.id) && typeof a.file === "string" && zip[a.file]) : [];
      const audBytes = aud.reduce((n, a) => n + zip[a.file].blob.size, 0);
      // nahrávky staršie ako doba uchovávania by pruneFiles po obnove hneď zmazal – povieme to vopred
      const keepFull = Number.isInteger(SET.fullKeepDays) ? Math.min(KEEP_CLIP_DAYS, Math.max(1, SET.fullKeepDays)) : KEEP_CLIP_DAYS;
      const expired = aud.filter(a => String(a.night || "") < addDays(today(), /^full-/.test(a.id) ? -keepFull : -KEEP_CLIP_DAYS)).length;
      const when = b.exported ? new Date(b.exported) : null;
      const date = when && !isNaN(when) ? when.toLocaleDateString(LOC()) : L("unknownDate");
      confirmModal({
        title: L("restoreQ"),
        text: L("restoreText", { date, mornings: Ln("pl.mornings", nd.nights.length), evenings: Ln("pl.evenings", Object.keys(nd.evenings || {}).length),
          sounds: nightsN(Object.keys(nd.sounds || {}).length), recs: aud.length ? Ln("pl.recsNom", aud.length) + " (" + mb(audBytes) + ")" : L("noRecs") }) +
          (expired ? " " + Ln("pl.expired", expired) : ""),
        ok: L("restoreOk"), danger: true
      }, () => {
        if (rec || startingRec) { closeModal(); toast(L("stopFirst")); return; }
        stopPlaying();
        if (standby) cancelStandby();
        D = nd;
        D.nights.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
        if (b.settings && typeof b.settings === "object") {
          const keep = { installDismissed: SET.installDismissed, recNotice: SET.recNotice, powerAsked: SET.powerAsked, lastBackup: SET.lastBackup, backupSnooze: SET.backupSnooze };
          try { localStorage.setItem(SET_KEY, JSON.stringify(b.settings)); } catch (e) { /* nič */ }
          load();   // rovnaká kontrola a prevod starších nastavení ako pri spustení
          D = nd;
          Object.assign(SET, keep, { recNotice: keep.recNotice || SET.recNotice });
          saveSet(); applyTheme();
        }
        refreshFactors();   // load() v bloku nastavení pracoval so starými dátami
        save();
        // nahrávky zo zálohy vrátime do zariadenia (po jednej, aby sa veľké noci nenačítali naraz),
        // potom odkazy na nahrávky, ktoré v tomto zariadení nie sú, odstránime
        const ids = [];
        Object.keys(D.sounds).forEach(k => nightFiles(D.sounds[k]).forEach(c => ids.push(c.id)));
        restoring = true;
        (async () => {
          let put = 0;
          for (const a of aud) {
            try { await IDB.put(a.id, new Blob([zip[a.file].blob], { type: a.type || "audio/webm" })); put++; } catch (e) { /* ďalšia */ }
          }
          return put;
        })().then(put => {
          restoring = false;
          if (aud.length) toast(put === aud.length ? L("restoredRecs", { n: put }) : L("restoredPartial", { n: put, total: aud.length }));
          return IDB.has(ids).catch(() => null);
        }).then(have => {
          if (have) {
            const ok = new Set(have);
            Object.keys(D.sounds).forEach(k => {
              const s = D.sounds[k];
              if (s.clips) s.clips = s.clips.filter(c => ok.has(c.id));
              if (s.segs) s.segs = s.segs.filter(c => ok.has(c.id));
            });
            save();
          }
          tidySounds();
        });
        UI.tab = "today"; UI.msg = null;
        closeModal(); closeSheet();
        toast(L(aud.length ? "restoringRecs" : "restored"));
      });
    }
  }

  function resetAll() {
    abortRecording();
    stopPlaying();
    D = emptyData();
    refreshFactors();
    try { localStorage.removeItem(DATA_KEY); } catch (e) { /* nič */ }
    IDB.clear().catch(() => {});
    UI.tab = "today"; UI.msg = null;
    closeModal();
    closeSheet();
    toast(L("resetDone"));
  }

  function setLanguage(code) {
    if (!I18.has(code)) return;
    SET.lang = code; saveSet();
    applyLang();
    refreshFactors();
    if (rec || standby) { if (rec) showNight(); else showStandby(); }
    openSettings();
  }

  // ---------- Vykreslenie a udalosti ----------
  function render() {
    const v = { today: viewToday, log: viewLog, case: viewCase, exp: viewExp }[UI.tab];
    $("#view").innerHTML = v();
    $("#view").scrollTop = 0;
    document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-current", t.dataset.tab === UI.tab ? "page" : "false"));
  }

  function eveningRecord() {
    const t = UI.evDate || today();
    if (!D.evenings[t]) D.evenings[t] = { f: {}, temp: 20, saved: false };
    return D.evenings[t];
  }
  function markEveningDirty() {
    const ev = eveningRecord(); ev.saved = false; save();
    const sv = document.querySelector('[data-act="saveEvening"]');
    if (sv) { sv.disabled = false; sv.textContent = L("evSave"); }
  }

  document.addEventListener("click", e => {
    // prehliadač mohol pri automatickom spustení zvuk pozastaviť – dotyk ho spustí
    if (rec && rec.ctx && rec.ctx.state === "suspended") rec.ctx.resume().then(updateNight).catch(() => {});
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.tab) { UI.tab = b.dataset.tab; UI.msg = null; UI.evDate = null; render(); return; }
    if (b.dataset.goto) { UI.tab = b.dataset.goto; render(); return; }
    if (b.dataset.mode) { UI.logMode = b.dataset.mode; UI.evDate = null; render(); return; }
    if (b.dataset.chip) {
      const ev = eveningRecord(), k = b.dataset.chip;
      ev.f[k] = !ev.f[k]; if (!ev.f[k]) delete ev.f[k];
      b.setAttribute("aria-pressed", String(!!ev.f[k]));
      markEveningDirty(); return;
    }
    if (b.dataset.cichip && ci) { const k = b.dataset.cichip; ci.f[k] = !ci.f[k]; if (!ci.f[k]) delete ci.f[k]; b.setAttribute("aria-pressed", String(!!ci.f[k])); return; }
    if (b.dataset.ans !== undefined && ci) { ci.a[QUESTIONS[ci.step].key] = Number(b.dataset.ans); ci.step++; renderCheckin(); return; }
    if (b.dataset.themeSet) { SET.theme = b.dataset.themeSet; saveSet(); applyTheme(); openSettings(); return; }
    if (b.dataset.explen) { SET.expLength = Number(b.dataset.explen); saveSet(); openSettings(); return; }
    if (b.dataset.sens) { SET.soundSensitivity = b.dataset.sens; saveSet(); openSettings(); return; }
    if (b.dataset.sex !== undefined) { D.body.sex = b.dataset.sex || null; D.body = cleanBody(D.body); save(); openSettings(); return; }
    if (b.dataset.cficon) { UI.cfIcon = b.dataset.cficon; document.querySelectorAll("[data-cficon]").forEach(x => x.setAttribute("aria-pressed", String(x === b))); return; }
    if (b.dataset.repdays) { UI.repDays = Number(b.dataset.repdays); openReport(); return; }
    switch (b.dataset.act) {
      case "settings": openSettings(); break;
      case "startNight": withRecNotice(() => withPower(() => startRecording())); break;
      case "fixPower": fixPower(); break;
      case "standby": withRecNotice(() => withPower(showStandby)); break;
      case "cancelStandby": cancelStandby(); break;
      case "askStopNight":
        confirmModal({ title: L("stopQ"), text: L("stopText"), ok: L("btnStopRec") }, () => { closeModal(); stopRecording(); });
        break;
      case "soundReport": openSoundReport(b.dataset.key); break;
      case "playClip": playClip(b); break;
      case "dlFile": downloadFile(b); break;
      case "askDelSound": {
        const key = b.dataset.key;
        confirmModal({ title: L("delSoundQ"), text: L("delSoundText", { date: short(key) }), ok: L("delete"), danger: true }, () => {
          stopPlaying();
          if (D.sounds[key]) { dropClips(nightFiles(D.sounds[key])); delete D.sounds[key]; save(); }
          closeModal(); closeSheet(); toast(L("soundDeleted"));
        });
        break;
      }
      case "checkin": if (!D.nights.some(n => n.date === today())) openCheckin(); break;
      case "checkinFor": {
        const d = b.dataset.date;
        if (d === today() || d === addDays(today(), -1)) openCheckin(d);
        break;
      }
      case "evDay": {
        const d = b.dataset.date;
        UI.evDate = d === addDays(today(), -1) ? d : null;
        render(); break;
      }
      case "ciFactorsDone": if (ci) { ci.step++; renderCheckin(); } break;
      case "gotoEvening": UI.tab = "log"; UI.logMode = "evening"; UI.evDate = null; render(); break;
      case "detail": openDetail(b.dataset.k); break;
      case "close": closeSheet(); break;
      case "gotoExp": UI.tab = "exp"; closeSheet(); break;
      case "startExp": startExp(b.dataset.k); break;
      case "cancelExp":
        confirmModal({ title: L("cancelExpQ"), text: L("cancelExpText", { exp: FMAP[D.exp.k].exp }), ok: L("end"), danger: true }, () => {
          D.exp = null; save(); closeModal(); render(); toast(L("expCancelled"));
        });
        break;
      case "export": exportData(); break;
      case "exportCsv": exportCsv(); break;
      case "backupLater": SET.backupSnooze = today(); saveSet(); render(); break;
      case "privacy": openPrivacy(); break;
      case "settingsBody": {
        openSettings();
        const f = $("#set-height");
        if (f && f.scrollIntoView) f.scrollIntoView({ block: "center" });
        break;
      }
      case "askDelBody":
        confirmModal({ title: L("delBodyQ"), text: L("delBodyText"), ok: L("delete"), danger: true }, () => {
          D.body = cleanBody(null); save(); closeModal(); openSettings(); toast(L("bodyDeleted"));
        });
        break;
      case "report": openReport(); break;
      case "printReport": printReport(); break;
      case "addFactor": addFactor(); break;
      case "askDelFactor": {
        const k = b.dataset.k, F = FMAP[k];
        if (!F || !F.custom) break;
        confirmModal({ title: L("delFactorQ", { name: F.name }), text: L("delFactorText", { exp: D.exp && D.exp.k === k ? L("delFactorExp") : "" }), ok: L("remove"), danger: true }, () => {
          delFactor(k); closeModal(); openSettings(); toast(L("factorRemoved"));
        });
        break;
      }
      case "import":
        if (plugin("Filesystem")) { openBackups(); break; }
        // falls through
      case "importPick": { const f = $("#import-file"); if (f) { f.value = ""; f.click(); } break; }
      case "importNative": importNative(b.dataset.name); break;
      case "askReset":
        confirmModal({
          title: L("resetQ"),
          text: L("resetText", { last: lastBackupText() }),
          ok: L("resetOk"), danger: true
        }, resetAll);
        break;
      case "modalOk": if (modalOk) modalOk(); break;
      case "modalCancel": { const c = modalCancel; closeModal(); if (c) c(); break; }
      case "install":
        if (installPrompt) {
          installPrompt.prompt();
          installPrompt.userChoice.finally(() => { installPrompt = null; render(); });
        }
        break;
      case "installLater": SET.installDismissed = true; saveSet(); render(); break;
      case "saveEvening": {
        const ev = eveningRecord(); ev.saved = true; save();
        const n = Object.keys(ev.f).length;
        if (UI.evDate) { UI.evDate = null; toast(L("eveningYesterdayDone")); render(); break; }
        toast(n ? L("eveningSavedN", { clues: Ln("pl.clues", n) }) : L("eveningSaved0"));
        render(); break;
      }
    }
  });
  // klik na tmavé pozadie okna = Zrušiť
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
  // Počet a dĺžka ukážok z textových polí: uloží sa len celé číslo (počet od 0, dĺžka od 1 s).
  const CLIP_FIELDS = {
    "set-clipn-snore": ["clipSnoreN", 0], "set-clips-snore": ["clipSnoreSec", 1],
    "set-clipn-noise": ["clipNoiseN", 0], "set-clips-noise": ["clipNoiseSec", 1]
  };
  function setClipNum(input) {
    const [key, min] = CLIP_FIELDS[input.id];
    const v = input.value.trim();
    const ok = /^\d+$/.test(v) && +v >= min;
    input.setAttribute("aria-invalid", ok ? "false" : "true");
    if (ok) { SET[key] = +v; saveSet(); }
    const kind = input.id.slice(-5), err = $("#err-" + kind);
    const bad = ["n", "s"].filter(x => $("#set-clip" + x + "-" + kind).getAttribute("aria-invalid") === "true");
    err.textContent = [bad.includes("n") ? L("errCount") : "", bad.includes("s") ? L("errLen") : ""].filter(Boolean).join(" ");
    err.hidden = !bad.length;
  }
  document.addEventListener("change", e => {
    if (e.target.id === "set-audio") { SET.soundAudio = e.target.checked; saveSet(); openSettings(); }
    if (e.target.id === "set-lang") { setLanguage(e.target.value); return; }
    if (e.target.id === "set-height" || e.target.id === "set-weight" || e.target.id === "set-birth") { setBody(e.target); return; }
    if (e.target.id === "import-file") { importFile(e.target.files && e.target.files[0]); return; }
    if (e.target.id === "set-full") { SET.soundFull = e.target.checked; saveSet(); openSettings(); }
    if (e.target.id === "set-auto") {
      SET.autoOn = e.target.checked; saveSet(); openSettings(); render();
      if (SET.autoOn && !SET.recNotice) { SET.recNotice = true; saveSet(); infoModal(REC_NOTICE.title, REC_NOTICE.text); }
    }
  });
  document.addEventListener("input", e => {
    if (e.target.id === "temp") { const ev = eveningRecord(); ev.temp = Number(e.target.value); $("#tempv").textContent = ev.temp + " °C"; markEveningDirty(); }
    if (e.target.id === "set-name") { SET.name = e.target.value.trim(); saveSet(); }
    if (e.target.id === "cf-name") UI.cfName = e.target.value;
    if (/^set-clip[ns]-(snore|noise)$/.test(e.target.id)) setClipNum(e.target);
    if (e.target.id === "set-kbps") { SET.clipKbps = Number(e.target.value); saveSet(); }
    if (e.target.id === "set-auto-from" || e.target.id === "set-auto-to") {
      const from = $("#set-auto-from"), to = $("#set-auto-to");
      const f = hmMin(from.value), t = hmMin(to.value);
      from.setAttribute("aria-invalid", f === null ? "true" : "false");
      to.setAttribute("aria-invalid", t === null ? "true" : "false");
      const same = f !== null && f === t;
      if (f !== null && !same) SET.autoFrom = fmtHm(f);
      if (t !== null && !same) SET.autoTo = fmtHm(t);
      saveSet();
      const err = $("#err-auto");
      err.textContent = f === null || t === null ? L("errTime") : same ? L("errSame") : "";
      err.hidden = !err.textContent;
    }
    if (e.target.id === "set-keep") {
      const v = e.target.value.trim(), ok = /^\d+$/.test(v) && +v >= 1 && +v <= KEEP_CLIP_DAYS;
      e.target.setAttribute("aria-invalid", ok ? "false" : "true");
      if (ok) { SET.fullKeepDays = +v; saveSet(); }
      const err = $("#err-keep");
      err.textContent = ok ? "" : L("errKeep", { max: KEEP_CLIP_DAYS });
      err.hidden = ok;
    }
  });
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (!$("#modal").hidden) closeModal();
    else if (!$("#night").hidden) return;
    else if (!$("#sheet").hidden) closeSheet();
  });

  // ---------- Inštalácia ----------
  // Chrome a Edge (desktop aj Android) pošlú beforeinstallprompt, keď sa appka dá nainštalovať.
  // Safari na iPhone takú udalosť nemá, tam sa dá appka pridať len ručne cez Zdieľať → Pridať na plochu.
  let installPrompt = null;
  const isStandalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  function installCard() {
    if (NATIVE || isStandalone() || SET.installDismissed) return "";
    if (installPrompt) {
      return '<div class="card"><h3>' + L("installTitle") + '</h3><p class="small muted">' + L("installText") + "</p>" +
        '<div class="row"><button class="btn" data-act="install" type="button" style="flex:1">' + L("install") + '</button><button class="btn ghost" data-act="installLater" type="button">' + L("later") + "</button></div></div>";
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
    if ((rec || standby) && !wake) requestWake();   // zámok obrazovky sa po prepnutí appky stratí
    autoCheck();
    if (today() !== shownDay && $("#sheet").hidden && !rec) { shownDay = today(); render(); }
  });
  // pri zatváraní appky počas záznamu uložíme aspoň rozpracovaný súhrn
  window.addEventListener("pagehide", () => { if (rec) storeNight(rec, Date.now(), true); });

  // Appka môže byť otvorená dvakrát (nainštalovaná + karta v Chrome). Keď druhá kópia zmení dáta,
  // načítame ich znova, aby sme neukazovali staré ukážky ani neprepísali novšie dáta starými.
  window.addEventListener("storage", e => {
    if (e.key !== DATA_KEY && e.key !== SET_KEY && e.key !== null) return;
    if (e.key !== SET_KEY) D = emptyData();   // druhá kópia mohla dáta vymazať
    load();
    applyTheme();
    applyLang();
    if ($("#sheet").hidden) render();
  });

  load();
  tidySounds();
  applyTheme();
  applyLang();
  render();
  setInterval(autoCheck, 10000);
  autoCheck();

  // Tlačidlo Späť v Androide: zavrie okno alebo obrazovku; počas nočného záznamu appku nezavrie,
  // inak by sa záznam zastavil. Na úvodnej obrazovke appku len odloží do pozadia.
  const BGR = bgPlugin();
  if (BGR) BGR.addListener("stop", () => { if (rec) stopRecording(); });
  const APP = plugin("App");
  if (APP) APP.addListener("backButton", () => {
    if (!$("#modal").hidden) closeModal();
    else if (!$("#night").hidden) { if (standby && !rec) cancelStandby(); else toast(L("backStopHint")); }
    else if (!$("#sheet").hidden) closeSheet();
    else if (UI.tab !== "today") { UI.tab = "today"; UI.msg = null; render(); }
    else if (APP.minimizeApp) APP.minimizeApp().catch(() => {});
  });
  clearExports();

  if (!NATIVE && "serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => { /* offline režim nie je dostupný */ });
  }
})();
