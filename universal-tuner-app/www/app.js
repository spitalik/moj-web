/* Universal Tuner – hlavný skript appky (ladenie, nástroje, referenčné tóny, nastavenia).
   Je v samostatnom súbore, lebo Content-Security-Policy v index.html nedovoľuje skripty vložené priamo do stránky.
   Texty sú v i18n/*.js (zdroj i18n/sk.js), detektor tónu v pitch.js. */
(function () {
  "use strict";
  const P = window.TunerPitch;

  // ---------- Jazyk ----------
  // T(kľúč, premenné) = text; Ln(kľúč, počet, premenné) = text v správnom tvare množného čísla.
  const I18 = window.UTI18N;
  const T = (k, v) => I18.t(k, v);
  const Tn = (k, n, v) => I18.t(k, Object.assign({ n }, v));
  const hasKey = k => { const d = I18.dict("sk"); return !!d && d[k] != null; };
  const decSep = () => { const d = I18.dict(I18.lang()); return (d && d._dec) || ","; };
  const dec = (v, digits) => v.toFixed(digits).replace(".", decSep());
  const $ = s => document.querySelector(s);

  // ---------- Natívna appka (Capacitor: Android, iOS) ----------
  // V prehliadači window.Capacitor nie je a appka beží ako PWA. V natívnej appke sa záloha namiesto
  // sťahovania zdieľa (Filesystem + Share), obrazovku drží zapnutú KeepAwake a tlačidlo Späť rieši App.
  const NATIVE = !!(window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform());
  const plugin = name => NATIVE && window.Capacitor.Plugins ? window.Capacitor.Plugins[name] || null : null;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const cleanName = v => String(v == null ? "" : v).replace(/[<>&"'`\\]/g, "").replace(/\s+/g, " ").trim().slice(0, 30);

  // ---------- Nastavenia ----------
  // Appka si pamätá len nastavenia a vlastné ladenia (localStorage). Zvuk z mikrofónu sa nikde neukladá.
  const SET_KEY = "universalTuner.settings.v1";
  const MAX_CUSTOM = 12, MAX_STRINGS = 12, MIN_NOTE = 21, MAX_NOTE = 96;   // A0 až C7
  const TOLS = [3, 5, 10, 15, 20];
  const GATE = { low: -42, medium: -52, high: -62 };   // od akej hlasitosti (dBFS) appka tón hľadá
  // notation "sk" = stredoeurópske názvy (H a B), "en" = anglické (B a B♭)
  const defaults = () => ({ theme: "dark", lang: I18.DEFAULT, inst: "guitar", tuning: "std", a4: 440, notation: "sk", accidental: "sharp",
    tol: 10, gate: "medium", transpose: "c", custom: [], installDismissed: false });
  let SET = defaults();

  // Každé nastavenie (z úložiska aj zo zálohy) prejde touto kontrolou: neplatná hodnota = predvolená.
  function cleanSettings(s) {
    const d = defaults();
    if (!s || typeof s !== "object") return d;
    const pick = (k, ok) => { if (ok(s[k])) d[k] = s[k]; };
    pick("theme", v => /^(dark|light|system)$/.test(v));
    pick("lang", v => typeof v === "string" && /^[a-z]{2}$/.test(v) && I18.has(v));
    pick("a4", v => Number.isInteger(v) && v >= 415 && v <= 466);
    pick("notation", v => v === "sk" || v === "en");
    pick("accidental", v => v === "sharp" || v === "flat");
    pick("tol", v => TOLS.includes(v));
    pick("gate", v => v in GATE);
    pick("transpose", v => P.TRANSPOSE.some(t => t.id === v));
    pick("installDismissed", v => typeof v === "boolean");
    if (Array.isArray(s.custom)) {
      const ids = {};
      d.custom = s.custom.filter(c => c && /^c[a-z0-9]{1,12}$/.test(c.id) && !ids[c.id] && (ids[c.id] = true) &&
        Array.isArray(c.notes) && c.notes.length >= 1 && c.notes.length <= MAX_STRINGS &&
        c.notes.every(n => Number.isInteger(n) && n >= MIN_NOTE && n <= MAX_NOTE))
        .slice(0, MAX_CUSTOM)
        .map(c => ({ id: c.id, name: cleanName(c.name) || T("customDefault"), notes: c.notes.slice() }));
    }
    d.inst = s.inst; d.tuning = s.tuning;
    if (!instById(d.inst, d)) { d.inst = "guitar"; d.tuning = "std"; }
    const ins = instById(d.inst, d);
    if (ins.tunings.length && !ins.tunings.some(t => t.id === d.tuning)) d.tuning = ins.tunings[0].id;
    if (d.inst === "custom" && !d.custom.length) { d.inst = "guitar"; d.tuning = "std"; }
    return d;
  }
  function saveSet() {
    try { localStorage.setItem(SET_KEY, JSON.stringify(SET)); } catch (e) { /* nastavenie sa len nezapamätá */ }
  }
  function load() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(SET_KEY)); } catch (e) { /* poškodené = predvolené */ }
    const fresh = !s || typeof s !== "object";
    // nastavenia z verzie bez výberu jazyka: appka bola len po slovensky, slovenčina ostane
    if (!fresh && s.lang === undefined) s.lang = "sk";
    SET = cleanSettings(s);
    // nová inštalácia: názvy tónov podľa jazyka (H v strednej Európe, B inde)
    if (fresh) SET.notation = /^(sk|de)$/.test(SET.lang) ? "sk" : "en";
    I18.setLang(SET.lang);
  }
  // Jazyk: statická časť stránky (data-i18n), atribút lang a popis.
  function applyLang() {
    I18.setLang(SET.lang);
    document.documentElement.setAttribute("lang", I18.htmlLang());
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = T(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", T(el.dataset.i18nAria)); el.setAttribute("title", T(el.dataset.i18nAria)); });
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", T("metaDesc"));
  }
  function setLanguage(code) {
    if (!I18.has(code)) return;
    SET.lang = code; saveSet();
    applyLang();
    render();
    openSettings();
  }

  // ---------- Nástroje ----------
  // Názvy nástrojov a ladení sú v slovníku (inst.<id>, tun.<…>); ladenia ako „Drop D“ sa neprekladajú a berú sa z pitch.js.
  function instruments(set) {
    set = set || SET;
    return P.INSTRUMENTS.map(i => Object.assign({}, i, { name: T("inst." + i.id), tunings: i.tunings.map(t => Object.assign({}, t, { name: tuningName(i.id, t) })) }))
      .concat([
        { id: "custom", name: T("inst.custom"), icon: "✏️", tunings: set.custom },
        { id: "chromatic", name: T("inst.chromatic"), icon: "🎼", tunings: [] }
      ]);
  }
  function tuningName(instId, t) {
    const k = instId === "ukulele" && t.id === "std" ? "tun.ukeStd" : instId === "dbass" && t.id === "std" ? "tun.orch" : "tun." + t.id;
    return hasKey(k) ? T(k) : t.name;
  }
  function instById(id, set) { return instruments(set).find(i => i.id === id) || null; }
  const curInst = () => instById(SET.inst) || P.INSTRUMENTS[0];
  function curTuning() {
    const ins = curInst();
    return ins.tunings.find(t => t.id === SET.tuning) || ins.tunings[0] || null;   // null = chromatická
  }
  const nopts = () => ({ notation: SET.notation, accidental: SET.accidental });
  function noteHtml(midi, tag) {
    const n = P.noteName(midi, nopts());
    return esc(n.letter) + "<" + (tag || "sub") + ">" + n.octave + "</" + (tag || "sub") + ">";
  }
  const noteText = midi => P.label(midi, nopts());
  // dlhé ladenie (cimbal) skrátene: „D2 – E6 · 51 tónov“
  const notesText = notes => notes.length > MAX_STRINGS ? noteText(notes[0]) + " – " + noteText(notes[notes.length - 1]) + " · " + Tn("notesCount", notes.length) : notes.map(noteText).join(" ");
  const transpose = () => P.TRANSPOSE.find(t => t.id === SET.transpose) || P.TRANSPOSE[0];
  // transpozícia: písmeno (C, B♭, E♭, F) z pitch.js, nástroje zo slovníka
  const transLetter = t => t.name.split(" – ")[0];
  const transName = t => transLetter(t) + " – " + T("trans." + t.id);
  const fmtHz = hz => dec(hz, 1) + " Hz";
  const fmtCents = c => { const r = Math.round(c); return (r > 0 ? "+" : r < 0 ? "−" : "±") + Math.abs(r) + " ¢"; };

  // ---------- Vzhľad ----------
  const lightQuery = matchMedia("(prefers-color-scheme: light)");
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", SET.theme);
    const light = SET.theme === "light" || (SET.theme === "system" && lightQuery.matches);
    $("#theme-color").setAttribute("content", light ? "#f3f5fa" : "#141a2d");
  }
  lightQuery.addEventListener("change", applyTheme);

  // ---------- Stav obrazovky ----------
  const UI = { tab: "tune", lock: null, tuned: {}, open: null, octave: 4, edit: null };
  //   lock: index struny zvolenej ručne (null = rozpozná sa sama), tuned: struny naladené v tejto relácii,
  //   open: rozbalený nástroj v zozname, octave: oktáva klávesov v Tónoch, edit: rozpracované vlastné ladenie
  function resetTuned() { UI.tuned = {}; UI.lock = null; if (L) { L.tracker.reset(); L.inTune = null; } }

  // ---------- Ladiť ----------
  // Ručička: ±50 centov = ±60°. Stred kruhu (160, 170), polomer 140.
  const CX = 160, CY = 170, R = 140, DEG = 1.2;
  const pt = (deg, r) => { const a = deg * Math.PI / 180; return [(CX + r * Math.sin(a)).toFixed(1), (CY - r * Math.cos(a)).toFixed(1)]; };
  function gaugeSvg() {
    let h = '<svg viewBox="0 0 320 180" aria-hidden="true">';
    const z = SET.tol * DEG, [x1, y1] = pt(-z, R), [x2, y2] = pt(z, R);
    h += '<path class="zone" d="M' + x1 + " " + y1 + " A" + R + " " + R + " 0 0 1 " + x2 + " " + y2 + '"/>';
    for (let c = -50; c <= 50; c += 5) {
      const major = c % 25 === 0, [a, b] = pt(c * DEG, R - (major ? 22 : 12)), [e, f] = pt(c * DEG, R - 4);
      h += '<line class="tick' + (major ? " major" : "") + '" x1="' + a + '" y1="' + b + '" x2="' + e + '" y2="' + f + '"/>';
      if (major) { const [lx, ly] = pt(c * DEG, R + 14); h += '<text class="lbl" x="' + lx + '" y="' + ly + '">' + (c > 0 ? "+" + c : c < 0 ? "−" + -c : "0") + "</text>"; }
    }
    // ručička je len pri stupnici, stred ostáva pre veľký názov tónu
    h += '<g class="needle" id="t-needle"><line x1="' + CX + '" y1="' + (CY - R + 48) + '" x2="' + CX + '" y2="' + (CY - R - 4) + '"/><circle cx="' + CX + '" cy="' + (CY - R - 4) + '" r="5"/></g>';
    return h + "</svg>";
  }
  function stringsHtml(active) {
    const tu = curTuning();
    if (!tu) return "";
    // veľa strún (cimbal): mriežka po 6 tónoch, bez čísel strún (tóny sú zoradené od najnižšieho)
    const n = tu.notes.length, many = n > 7, grid = n > MAX_STRINGS;
    let h = '<div class="strings' + (grid ? " grid" : many ? " many" : "") + '" style="--n:' + n + ";--n2:" + Math.ceil(n / 2) + '">';
    tu.notes.forEach((m, i) => {
      const cls = ["str"];
      if (i === active) cls.push("on");
      if (UI.lock === i) cls.push("lock");
      if (UI.tuned[i]) cls.push("ok");
      const aria = T((grid ? "noteAria" : "stringAria") + (UI.tuned[i] ? "Tuned" : ""), { n: n - i, note: noteText(m) });
      h += '<button class="' + cls.join(" ") + '" data-str="' + i + '" type="button" aria-pressed="' + (UI.lock === i) + '" aria-label="' + esc(aria) + '">' +
        (grid ? "" : '<span class="num">' + (n - i) + ".</span>") + "<b>" + noteHtml(m) + "</b></button>";
    });
    return h + "</div>";
  }
  function stringsHint() {
    const tu = curTuning();
    if (!tu) return "";
    if (tu.notes.length > MAX_STRINGS) {
      const done = tu.notes.filter((m, i) => UI.tuned[i]).length;
      if (UI.lock !== null) return T("hintGridLock", { note: noteText(tu.notes[UI.lock]) });
      return T("hintGrid", { done, n: tu.notes.length });
    }
    if (UI.lock !== null) return T("hintLock", { n: tu.notes.length - UI.lock });
    return T("hintAuto");
  }
  function viewTune() {
    const ins = curInst(), tu = curTuning();
    let h = '<button class="inst-btn" data-goto="inst" type="button"><span class="ico">' + ins.icon + '</span><span class="txt"><span class="eyebrow">' + T("instrument") + '</span><b>' +
      esc(ins.name) + '</b><span class="small muted">' + (tu ? esc(tu.name) + " · " + esc(notesText(tu.notes)) : esc(T("transposeSummary", { t: transLetter(transpose()), hz: SET.a4 }))) +
      '</span></span><span class="chev">›</span></button>';
    h += '<div class="card gauge" id="t-gauge" data-state="' + (L ? "listen" : "idle") + '">' + gaugeSvg() +
      '<div class="note" id="t-note">–</div>' +
      '<div class="readout"><span id="t-cents"></span><span id="t-hz"></span></div>' +
      '<p class="status" id="t-status" aria-live="polite">' + T(L ? (tu ? "playString" : "playNote") : "tapStart") + "</p>" +
      '<p class="heard" id="t-heard"></p>' +
      '<div class="level" aria-hidden="true"><i id="t-level"></i></div></div>';
    if (tu) h += '<div id="t-strings">' + stringsHtml(-1) + '</div><p class="small muted" id="t-hint">' + stringsHint() + "</p>";
    h += '<button class="btn big" data-act="listen" type="button" id="t-listen">' + T(L ? "stop" : "startTuning") + "</button>";
    if (!L) h += installCard();
    return h;
  }

  // ---------- Mikrofón ----------
  let L = null;          // bežiace počúvanie: { ctx, stream, an, buf, tracker, range, timer, inTune }
  let starting = false;
  let wake = null;
  // Počas ladenia obrazovka nezhasne: v natívnej appke cez KeepAwake (WebView nepozná Wake Lock), inak cez Wake Lock API.
  async function requestWake() {
    const KA = plugin("KeepAwake");
    if (KA) { try { await KA.keepAwake(); wake = { release: () => KA.allowSleep() }; } catch (e) { wake = null; } return; }
    try { if ("wakeLock" in navigator) { wake = await navigator.wakeLock.request("screen"); wake.addEventListener("release", () => { wake = null; }); } } catch (e) { wake = null; }
  }
  function analysisRange() {
    const tu = curTuning();
    return P.rangeFor(tu ? tu.notes : null, SET.a4);
  }
  async function startListening() {
    if (L || starting) return;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !P) {
      infoModal(T("micNoTitle"), T(NATIVE ? "micNoNative" : "micNoText"));
      return;
    }
    starting = true;
    let stream;
    try {
      // bez potlačenia šumu a automatickej hlasitosti: tie by tón struny skresľovali
      stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
    } catch (e) {
      starting = false;
      infoModal(T("micDeniedTitle"), T(NATIVE ? "micDeniedNative" : "micDeniedText"));
      return;
    }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      const ctx = new AC();
      try { await ctx.resume(); } catch (e) { /* nič */ }
      const an = ctx.createAnalyser();
      const range = analysisRange();
      an.fftSize = range.minHz < 45 ? 8192 : 4096;   // basy potrebujú dlhší úsek zvuku
      an.smoothingTimeConstant = 0;
      const src = ctx.createMediaStreamSource(stream);
      src.connect(an);
      L = { ctx, stream, an, src, buf: new Float32Array(an.fftSize), tracker: new P.Tracker(), range, inTune: null, timer: null };
      L.timer = setInterval(tick, 70);
      requestWake();
    } catch (e) {
      stream.getTracks().forEach(t => t.stop());
      infoModal(T("startFailTitle"), T("startFailText"));
    } finally {
      starting = false;
    }
    if (UI.tab === "tune" && $("#sheet").hidden) render();
  }
  function stopListening() {
    if (!L) return;
    clearInterval(L.timer);
    try { L.src.disconnect(); } catch (e) { /* nič */ }
    L.stream.getTracks().forEach(t => t.stop());   // mikrofón sa hneď vypne (zhasne aj indikátor v systéme)
    L.ctx.close().catch(() => {});
    L = null;
    if (wake) { const w = wake; wake = null; Promise.resolve().then(() => w.release()).catch(() => {}); }
    if (UI.tab === "tune" && $("#sheet").hidden) render();
  }
  // Po zmene nástroja treba iný rozsah a dĺžku úseku – počúvanie reštartujeme.
  function restartListening() {
    if (!L) return;
    const range = analysisRange();
    L.range = range;
    const size = range.minHz < 45 ? 8192 : 4096;
    if (L.an.fftSize !== size) { L.an.fftSize = size; L.buf = new Float32Array(size); }
    L.tracker.reset(); L.inTune = null;
  }

  const IN_TUNE_MS = 800;   // tak dlho musí struna znieť naladená, kým ju označíme ✓
  function tick() {
    if (!L) return;
    const now = Date.now();
    L.an.getFloatTimeDomainData(L.buf);
    const db = P.levelDb(L.buf);
    let r = null;
    if (db > GATE[SET.gate]) {
      r = P.detect(L.buf, L.ctx.sampleRate, L.range);
      if (r && r.clarity < 0.6) r = null;      // šum, viac tónov naraz
    }
    const s = L.tracker.feed(now, r);
    show(s, db, now);
  }

  const setTxt = (sel, t) => { const e = $(sel); if (e && e.textContent !== t) e.textContent = t; };
  let lastStrKey = "";
  function show(s, db, now) {
    const g = $("#t-gauge");
    if (!g || !L) return;
    const lvl = $("#t-level");
    if (lvl) lvl.style.width = Math.max(0, Math.min(100, (db + 70) * 2)) + "%";
    const tu = curTuning();
    let state = "listen", note = "–", centsTxt = "", hzTxt = "", status = T(tu ? "playString" : "playNote"), heard = "", active = -1, c = 0;
    if (s) {
      const n = P.noteOf(s.hz, SET.a4);
      hzTxt = fmtHz(s.hz);
      if (tu) {
        active = UI.lock !== null ? UI.lock : P.nearestString(s.hz, tu.notes, SET.a4).index;
        c = P.cents(s.hz, P.midiToHz(tu.notes[active], SET.a4));
        note = noteHtml(tu.notes[active]);
        heard = T("heard", { note: noteText(n.midi) });
      } else {
        c = n.cents;
        note = noteHtml(n.midi + transpose().shift);
        if (transpose().shift) heard = T("sounding", { note: noteText(n.midi) });
      }
      centsTxt = Math.abs(c) >= 100 ? T("semitones", { v: (c > 0 ? "+" : "−") + dec(Math.abs(c) / 100, 1) }) : fmtCents(c);
      const ok = Math.abs(c) <= SET.tol;
      state = ok ? "ok" : c < 0 ? "low" : "high";
      status = T(ok ? "inTune" : tu ? (c < 0 ? "lowString" : "highString") : (c < 0 ? "low" : "high"));
      if (!s.live) heard = heard ? heard + " · " + T("fadingAfter") : T("fading");
      // struna naladená dostatočne dlho
      if (tu && ok && s.live) {
        if (!L.inTune || L.inTune.idx !== active) L.inTune = { idx: active, since: now };
        else if (now - L.inTune.since >= IN_TUNE_MS && !UI.tuned[active]) markTuned(active, tu);
      } else if (s.live) L.inTune = null;
    } else L.inTune = null;
    g.setAttribute("data-state", state);
    const nd = $("#t-needle");
    if (nd) nd.style.transform = "rotate(" + (s ? Math.max(-50, Math.min(50, c)) * DEG : 0).toFixed(1) + "deg)";
    const ne = $("#t-note");
    if (ne && ne.innerHTML !== note) ne.innerHTML = note;
    setTxt("#t-cents", centsTxt); setTxt("#t-hz", hzTxt); setTxt("#t-status", status); setTxt("#t-heard", heard);
    const key = active + "|" + UI.lock + "|" + Object.keys(UI.tuned).join(",");
    if (tu && key !== lastStrKey) {
      lastStrKey = key;
      const st = $("#t-strings");
      if (st) {
        const old = st.querySelector(".strings"), top = old ? old.scrollTop : 0;
        st.innerHTML = stringsHtml(active);
        // cimbal: mriežka tónov sa posúva, posun zachováme a znejúci tón ukážeme
        const g = st.querySelector(".strings.grid"), on = g && g.querySelector(".str.on");
        if (g) {
          g.scrollTop = top;
          if (on && (on.offsetTop < g.scrollTop || on.offsetTop + on.offsetHeight > g.scrollTop + g.clientHeight)) g.scrollTop = on.offsetTop - g.clientHeight / 2;
        }
      }
      setTxt("#t-hint", stringsHint());
    }
  }
  function markTuned(i, tu) {
    UI.tuned[i] = true;
    try { if (navigator.vibrate) navigator.vibrate(40); } catch (e) { /* nič */ }
    const same = tu.notes.map((m, j) => m === tu.notes[i] ? j : -1).filter(j => j >= 0);
    same.forEach(j => { UI.tuned[j] = true; });   // rovnaké struny (napr. balalajka) naraz
    if (tu.notes.every((m, j) => UI.tuned[j])) toast(T("allTuned"));
  }

  // ---------- Nástroj ----------
  function viewInst() {
    let h = '<div class="head"><span class="eyebrow">' + T("choose") + "</span><h2>" + T("whatTune") + "</h2></div>";
    instruments().forEach(ins => {
      const sel = SET.inst === ins.id, open = UI.open === ins.id || (UI.open === null && sel);
      h += '<div class="card"><button class="inst-btn" style="padding:0;background:none;border:0" data-open="' + ins.id + '" type="button" aria-expanded="' + open + '">' +
        '<span class="ico">' + ins.icon + '</span><span class="txt"><b>' + esc(ins.name) + "</b>" +
        '<span class="small muted">' + instSummary(ins) + "</span></span>" + (sel ? '<span class="pick">' + T("selected") + "</span>" : '<span class="chev">' + (open ? "⌄" : "›") + "</span>") + "</button>";
      if (open) h += instBody(ins);
      h += "</div>";
    });
    h += '<p class="small muted">' + T("instFoot") + "</p>";
    return h;
  }
  function instSummary(ins) {
    if (ins.id === "chromatic") return esc(T("anyNote", { t: transLetter(transpose()) }));
    if (ins.id === "custom") return esc(ins.tunings.length ? Tn("tuningsCount", ins.tunings.length) : T("createOwn"));
    const t = ins.tunings.length;
    return esc(t === 1 ? notesText(ins.tunings[0].notes) : Tn("tuningsCount", t));
  }
  function instBody(ins) {
    let h = "";
    if (ins.id === "chromatic") {
      h += '<p class="small">' + T("chromaInfo") + '</p><div class="opts">';
      P.TRANSPOSE.forEach(t => {
        const on = SET.inst === "chromatic" && SET.transpose === t.id;
        h += '<button class="opt" data-chroma="' + t.id + '" type="button" aria-pressed="' + on + '"><span class="nm">' + esc(transName(t)) + "</span></button>";
      });
      return h + "</div>";
    }
    h += '<div class="opts">';
    ins.tunings.forEach(t => {
      const on = SET.inst === ins.id && SET.tuning === t.id;
      h += '<button class="opt" data-inst="' + ins.id + '" data-tuning="' + esc(t.id) + '" type="button" aria-pressed="' + on + '"><span class="nm">' + esc(t.name) +
        (on ? '<span class="pick">' + T("tuningNow") + "</span>" : "") + '</span><span class="nt">' + esc(notesText(t.notes)) + "</span></button>";
      if (ins.id === "custom") h += '<div class="row small" style="justify-content:flex-start;gap:18px;margin:-2px 0 4px 4px"><button class="link" data-act="editCustom" data-id="' + t.id + '" type="button">' + T("edit") + '</button><button class="link" style="color:var(--bad)" data-act="askDelCustom" data-id="' + t.id + '" type="button">' + T("remove") + "</button></div>";
    });
    h += "</div>";
    if (ins.id === "custom") {
      h += SET.custom.length < MAX_CUSTOM ? '<button class="btn ghost" data-act="newCustom" type="button">' + T("newCustom") + "</button>" : '<p class="small muted">' + T("maxCustom", { n: MAX_CUSTOM }) + "</p>";
    }
    return h;
  }
  function selectTuning(instId, tuningId) {
    const ins = instById(instId);
    if (!ins || !ins.tunings.some(t => t.id === tuningId)) return;
    const changed = SET.inst !== instId || SET.tuning !== tuningId;
    SET.inst = instId; SET.tuning = tuningId; saveSet();
    if (changed) { resetTuned(); restartListening(); }
    UI.tab = "tune"; UI.open = null; render();
  }

  // Vlastné ladenie: editor v samostatnom okne
  function openEditor(id) {
    const c = SET.custom.find(x => x.id === id);
    UI.edit = c ? { id: c.id, name: c.name, notes: c.notes.slice() } : { id: null, name: "", notes: curTuning() ? curTuning().notes.slice() : [40, 45, 50, 55, 59, 64] };
    renderEditor();
  }
  function noteSelect(i, val) {
    let h = '<select id="ed-n' + i + '" data-ed="' + i + '" aria-label="' + esc(T("stringNoteAria", { n: UI.edit.notes.length - i })) + '">';
    for (let m = MAX_NOTE; m >= MIN_NOTE; m--) h += '<option value="' + m + '"' + (m === val ? " selected" : "") + ">" + esc(noteText(m)) + " · " + fmtHz(P.midiToHz(m, SET.a4)) + "</option>";
    return h + "</select>";
  }
  function renderEditor() {
    const e = UI.edit, n = e.notes.length;
    let h = '<div class="sheet-top"><button class="icon-btn" data-act="closeEditor" type="button" aria-label="' + esc(T("close")) + '">✕</button><span class="eyebrow">' + T(e.id ? "editTuning" : "newTuning") + '</span><span style="width:38px"></span></div><div class="scroll">';
    h += '<div class="card"><label class="set-label" for="ed-name">' + T("nameLabel") + '</label><input id="ed-name" type="text" maxlength="30" autocomplete="off" placeholder="' + esc(T("namePh")) + '" value="' + esc(e.name) + '"></div>';
    h += '<div class="card"><h3>' + T("strings") + '</h3><p class="small muted">' + T("stringsHint") + "</p>";
    e.notes.forEach((m, i) => {
      h += '<div class="edit-row"><span class="small">' + T("stringN", { n: n - i }) + "</span>" + noteSelect(i, m) +
        '<button class="icon-btn" data-act="edDel" data-i="' + i + '" type="button" aria-label="' + esc(T("removeString", { n: n - i })) + '"' + (n <= 1 ? " disabled" : "") + ">✕</button></div>";
    });
    h += n < MAX_STRINGS ? '<button class="btn ghost" data-act="edAdd" type="button">' + T("addString") + "</button>" : "";
    h += "</div>";
    h += '<button class="btn big" data-act="edSave" type="button">' + T("saveAndTune") + "</button></div>";
    showSheet(h, true);
  }
  function saveEditor() {
    const e = UI.edit;
    const name = cleanName(e.name) || T("customN", { n: SET.custom.length + (e.id ? 0 : 1) });
    let id = e.id;
    if (id) { const c = SET.custom.find(x => x.id === id); if (c) { c.name = name; c.notes = e.notes.slice(); } }
    else {
      if (SET.custom.length >= MAX_CUSTOM) return;
      do { id = "c" + Math.random().toString(36).slice(2, 10); } while (SET.custom.some(x => x.id === id));
      SET.custom.push({ id, name, notes: e.notes.slice() });
    }
    UI.edit = null;
    closeSheet();
    if (SET.inst === "custom" && SET.tuning === id) { resetTuned(); restartListening(); }
    selectTuning("custom", id);
    toast(T("tuningSaved", { name }));
  }
  function deleteCustom(id) {
    SET.custom = SET.custom.filter(c => c.id !== id);
    if (SET.inst === "custom" && SET.tuning === id) {
      if (SET.custom.length) SET.tuning = SET.custom[0].id; else { SET.inst = "guitar"; SET.tuning = "std"; }
      resetTuned(); restartListening();
    }
    saveSet();
  }

  // ---------- Tóny (referenčný tón z reproduktora) ----------
  let toneCtx = null, playing = null;   // playing: { midi, osc, gain, timer }
  const TONE_MAX_MS = 60000;            // tón sa sám vypne po minúte
  function playTone(midi) {
    const was = playing && playing.midi;
    stopTone();
    if (was === midi) { renderTones(); return; }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!toneCtx) toneCtx = new AC();
      if (toneCtx.state === "suspended") toneCtx.resume().catch(() => {});
      const osc = toneCtx.createOscillator(), gain = toneCtx.createGain(), t0 = toneCtx.currentTime;
      // vyššie harmonické, aby bolo počuť aj nízke tóny v malom reproduktore telefónu
      const real = new Float32Array([0, 0, 0, 0, 0, 0, 0]), imag = new Float32Array([0, 1, 0.55, 0.35, 0.22, 0.12, 0.07]);
      osc.setPeriodicWave(toneCtx.createPeriodicWave(real, imag));
      osc.frequency.value = P.midiToHz(midi, SET.a4);
      gain.gain.setValueAtTime(0, t0);
      gain.gain.linearRampToValueAtTime(0.28, t0 + 0.04);
      osc.connect(gain); gain.connect(toneCtx.destination);
      osc.start();
      playing = { midi, osc, gain, timer: setTimeout(() => { stopTone(); renderTones(); }, TONE_MAX_MS) };
    } catch (e) { playing = null; toast(T("toneFail")); }
    renderTones();
  }
  function stopTone() {
    if (!playing) return;
    const p = playing;
    playing = null;
    clearTimeout(p.timer);
    try {
      const t = toneCtx.currentTime;
      p.gain.gain.cancelScheduledValues(t);
      p.gain.gain.setValueAtTime(p.gain.gain.value, t);
      p.gain.gain.linearRampToValueAtTime(0, t + 0.08);
      p.osc.stop(t + 0.1);
    } catch (e) { /* nič */ }
  }
  function toneBtn(midi) {
    return '<button class="tone" data-tone="' + midi + '" type="button" aria-pressed="' + (playing && playing.midi === midi ? "true" : "false") + '" aria-label="' + esc(T("noteAria", { note: noteText(midi) })) + '">' + noteHtml(midi) + "</button>";
  }
  function viewTones() {
    const tu = curTuning(), ins = curInst();
    let h = '<div class="head"><span class="eyebrow">' + T("byEar") + "</span><h2>" + T("refTones") + "</h2></div>";
    if (tu) {
      h += '<div class="card"><h3>' + esc(ins.name) + " · " + esc(tu.name) + '</h3><div class="tone-grid" style="--n:' + Math.min(tu.notes.length, 6) + '">' +
        tu.notes.map(toneBtn).join("") + '</div><p class="small muted">' + T("tonesHint") + "</p></div>";
    }
    h += '<div class="card"><h3>' + T("allNotes") + '</h3><span class="small muted">' + T("octave") + '</span><div class="seg" style="--n:6">';
    for (let o = 1; o <= 6; o++) h += '<button data-oct="' + o + '" type="button" aria-pressed="' + (UI.octave === o) + '" aria-label="' + esc(T("octaveN", { n: o })) + '">' + o + "</button>";
    h += '</div><div class="tone-grid keys">';
    for (let p = 0; p < 12; p++) h += toneBtn((UI.octave + 1) * 12 + p);
    h += '</div><p class="small muted">' + T("tonesFoot", { hz: SET.a4 }) + "</p></div>";
    if (playing) h += '<button class="btn ghost" data-act="stopTone" type="button">' + T("stopTone") + "</button>";
    return h;
  }
  function renderTones() { if (UI.tab === "tones" && $("#sheet").hidden) render(); }

  // ---------- Nastavenia ----------
  function seg(act, list, cur) {
    return '<div class="seg" style="--n:' + list.length + '">' + list.map(([v, l]) => '<button data-set="' + act + '" data-v="' + v + '" type="button" aria-pressed="' + (String(cur) === String(v)) + '">' + l + "</button>").join("") + "</div>";
  }
  function openSettings() {
    let h = '<div class="sheet-top"><button class="icon-btn" data-act="closeSheet" type="button" aria-label="' + esc(T("close")) + '">✕</button><span class="eyebrow">' + T("settings") + '</span><span style="width:38px"></span></div><div class="scroll">';
    // jazyk: názvy jazykov sú vždy v danom jazyku, aby sa dali nájsť aj v cudzom prostredí
    h += '<div class="card"><label class="set-label" for="set-lang">' + T("language") + (I18.lang() !== "en" ? " · Language" : "") + '</label><select id="set-lang">' +
      I18.languages().map(l => '<option value="' + l.code + '"' + (l.code === I18.lang() ? " selected" : "") + ">" + esc(l.flag + " " + l.name) + "</option>").join("") + "</select></div>";
    h += '<div class="card"><span class="set-label">' + T("appearance") + "</span>" + seg("theme", [["dark", T("themeDark")], ["light", T("themeLight")], ["system", T("themeSystem")]], SET.theme) + "</div>";
    h += '<div class="card"><span class="set-label">' + T("a4Label") + '</span><div class="a4"><button class="btn ghost" data-act="a4" data-d="-1" type="button" aria-label="' + esc(T("a4Down")) + '">−</button><b id="a4v">' + SET.a4 +
      ' Hz</b><button class="btn ghost" data-act="a4" data-d="1" type="button" aria-label="' + esc(T("a4Up")) + '">+</button></div>' +
      '<p class="small muted">' + T("a4Hint") + (SET.a4 !== 440 ? ' <button class="link" data-act="a4reset" type="button">' + T("a4Reset") + "</button>" : "") + "</p></div>";
    h += '<div class="card"><span class="set-label">' + T("noteNames") + "</span>" + seg("notation", [["sk", "C D E F G A H"], ["en", "C D E F G A B"]], SET.notation) +
      '<p class="small muted">' + T("noteNamesHint") + "</p>" +
      '<span class="set-label">' + T("accidentals") + "</span>" + seg("accidental", [["sharp", T("sharps")], ["flat", T("flats")]], SET.accidental) + "</div>";
    h += '<div class="card"><span class="set-label">' + T("tolLabel") + "</span>" + seg("tol", TOLS.map(t => [t, "±" + t + " ¢"]), SET.tol) +
      '<p class="small muted">' + T("tolHint") + "</p></div>";
    h += '<div class="card"><span class="set-label">' + T("gateLabel") + "</span>" + seg("gate", [["low", T("gateLow")], ["medium", T("gateMedium")], ["high", T("gateHigh")]], SET.gate) +
      '<p class="small muted">' + T("gateHint") + "</p></div>";
    h += '<div class="card"><h3>' + T("dataTitle") + '</h3><p class="small muted">' + T("dataHint") + "</p>" +
      '<div class="row"><button class="btn ghost" data-act="export" type="button" style="flex:1">' + T("downloadBackup") + '</button><button class="btn ghost" data-act="import" type="button" style="flex:1">' + T("restore") + "</button></div>" +
      '<input id="import-file" type="file" accept=".json,application/json" hidden>' +
      '<button class="btn danger" data-act="askReset" type="button">' + T("deleteAll") + "</button>" +
      '<button class="link" data-act="privacy" type="button">' + T("privacyLink") + "</button></div>";
    h += '<p class="small muted" style="text-align:center">' + T("footer") + "</p></div>";
    showSheet(h);
  }
  function openPrivacy() {
    let h = '<div class="sheet-top"><button class="icon-btn" data-act="settings" type="button" aria-label="' + esc(T("back")) + '">←</button><span class="eyebrow">' + T("privacyEyebrow") + '</span><span style="width:38px"></span></div><div class="scroll">';
    h += '<div class="head"><h2>' + T("privacyTitle") + "</h2></div>";
    h += '<div class="card"><h3>' + T("privMicTitle") + '</h3><p class="small">' + T("privMic") + "</p></div>";
    h += '<div class="card"><h3>' + T("privStoredTitle") + '</h3><ul class="small plain"><li>' + T("privStored1") + "</li><li>" + T("privStored2") + "</li></ul>" +
      '<p class="small">' + T("privStoredText") + "</p></div>";
    h += '<div class="card"><h3>' + T("privOptionsTitle") + '</h3><p class="small">' + T("privOptions") + "</p></div>";
    h += '<div class="card"><h3>' + T("privLicTitle") + '</h3><p class="small">' + T("privLic") + "</p></div></div>";
    showSheet(h);
  }

  // Záloha: len nastavenia a vlastné ladenia
  function download(blob, name) {
    const url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  // V natívnej appke sa <a download> nedá použiť: súbor sa zapíše do súkromnej cache appky
  // a otvorí sa systémové Zdieľať (uložiť do Súborov, poslať…). Cache sa maže pri štarte.
  const EXPORT_DIR = "export";
  const toB64 = text => { const b = new TextEncoder().encode(text); let bin = ""; for (let i = 0; i < b.length; i += 0x8000) bin += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000)); return btoa(bin); };
  async function shareText(text, name) {
    const FS = plugin("Filesystem"), SH = plugin("Share");
    try {
      const f = await FS.writeFile({ path: EXPORT_DIR + "/" + name, data: toB64(text), directory: "CACHE", recursive: true });
      await SH.share({ title: name, files: [f.uri] });
    } catch (e) {
      if (!/cancel/i.test(String(e && (e.message || e)))) toast(T("saveFail"));
    }
  }
  function clearExports() {
    const FS = plugin("Filesystem");
    if (FS) FS.rmdir({ path: EXPORT_DIR, directory: "CACHE", recursive: true }).catch(() => { /* priečinok nie je */ });
  }
  function exportData() {
    const d = new Date(), iso = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    const out = Object.assign({}, SET); delete out.installDismissed;
    const text = JSON.stringify({ app: "universal-tuner", version: 1, exported: iso, settings: out }, null, 2), name = T("backupFile") + "-" + iso + ".json";
    if (plugin("Filesystem") && plugin("Share")) { shareText(text, name); return; }
    download(new Blob([text], { type: "application/json" }), name);
    toast(T("backupDone"));
  }
  async function importFile(file) {
    if (!file) return;
    let j = null;
    try { j = JSON.parse(await file.text()); } catch (e) { j = null; }
    if (!j || j.app !== "universal-tuner" || !j.settings || typeof j.settings !== "object") {
      infoModal(T("notBackupTitle"), esc(T("notBackupText", { file: T("backupFile") })));
      return;
    }
    // jazyk a karta inštalácie zostanú z tohto zariadenia
    const keep = { installDismissed: SET.installDismissed, lang: SET.lang };
    SET = Object.assign(cleanSettings(j.settings), keep);
    saveSet(); applyTheme(); resetTuned(); restartListening();
    openSettings();
    toast(T("restored"));
  }
  function resetAll() {
    try { localStorage.removeItem(SET_KEY); } catch (e) { /* nič */ }
    // zvolený jazyk ostane do zatvorenia appky (uloží sa až pri ďalšej zmene nastavení)
    const lang = SET.lang;
    SET = defaults(); SET.lang = lang;
    if (!/^(sk|de)$/.test(lang)) SET.notation = "en";
    applyTheme(); resetTuned(); restartListening();
    closeModal(); closeSheet();
    toast(T("deletedAll"));
  }

  // ---------- Okná ----------
  function showSheet(h, keepFocus) {
    const el = $("#sheet");
    el.innerHTML = h; el.hidden = false;
    if (!keepFocus) { const f = el.querySelector("button"); if (f) f.focus({ preventScroll: true }); }
  }
  function closeSheet() { $("#sheet").hidden = true; $("#sheet").innerHTML = ""; UI.edit = null; render(); }
  let modalOk = null;
  function confirmModal(o, onOk) {
    const m = $("#modal");
    m.innerHTML = '<div class="modal-card" role="alertdialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-text">' +
      '<h3 id="modal-title">' + o.title + '</h3><p id="modal-text" class="small">' + o.text + "</p>" +
      '<div class="row">' + (o.ok ? '<button class="btn ghost" data-act="modalCancel" type="button">' + T("cancel") + "</button>" : "") +
      '<button class="btn ' + (o.danger ? "danger-fill" : "") + '" data-act="' + (o.ok ? "modalOk" : "modalCancel") + '" type="button">' + (o.ok || T("understood")) + "</button></div></div>";
    m.hidden = false;
    modalOk = onOk || null;
    m.querySelector('[data-act="modalCancel"]').focus();
  }
  const infoModal = (title, text) => confirmModal({ title, text });
  function closeModal() { $("#modal").hidden = true; $("#modal").innerHTML = ""; modalOk = null; }
  let toastT;
  function toast(t) { const el = $("#toast"); el.textContent = t; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { el.hidden = true; }, 2800); }

  // ---------- Vykreslenie a udalosti ----------
  function render() {
    const v = { tune: viewTune, inst: viewInst, tones: viewTones }[UI.tab];
    $("#view").innerHTML = v();
    lastStrKey = "";
    document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-current", t.dataset.tab === UI.tab ? "page" : "false"));
  }
  function goTab(tab) {
    if (tab !== UI.tab) $("#view").scrollTop = 0;
    UI.tab = tab;
    if (tab !== "tones") stopTone();
    render();
  }

  document.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    const ds = b.dataset;
    if (ds.tab) { goTab(ds.tab); return; }
    if (ds.goto) { UI.open = null; goTab(ds.goto); return; }
    if (ds.str !== undefined) {
      const i = Number(ds.str);
      UI.lock = UI.lock === i ? null : i;
      if (L) { L.tracker.reset(); L.inTune = null; }
      render(); return;
    }
    if (ds.open) { UI.open = UI.open === ds.open ? "" : ds.open; render(); return; }
    if (ds.tuning !== undefined && ds.inst) { selectTuning(ds.inst, ds.tuning); return; }
    if (ds.chroma) {
      SET.transpose = ds.chroma;
      if (SET.inst !== "chromatic") { SET.inst = "chromatic"; SET.tuning = ""; resetTuned(); restartListening(); }
      saveSet(); UI.tab = "tune"; UI.open = null; render(); return;
    }
    if (ds.tone) { playTone(Number(ds.tone)); return; }
    if (ds.oct) { UI.octave = Number(ds.oct); render(); return; }
    if (ds.set) {
      const k = ds.set, v = k === "tol" ? Number(ds.v) : ds.v;
      const next = cleanSettings(Object.assign({}, SET, { [k]: v }));
      if (next[k] !== v) return;
      SET[k] = v; saveSet();
      if (k === "theme") applyTheme();
      openSettings(); return;
    }
    switch (ds.act) {
      case "listen": if (L) stopListening(); else startListening(); break;
      case "settings": openSettings(); break;
      case "closeSheet": closeSheet(); break;
      case "privacy": openPrivacy(); break;
      case "a4": {
        const v = SET.a4 + Number(ds.d);
        if (v < 415 || v > 466) break;
        SET.a4 = v; saveSet(); restartListening(); openSettings(); break;
      }
      case "a4reset": SET.a4 = 440; saveSet(); restartListening(); openSettings(); break;
      case "export": exportData(); break;
      case "import": { const f = $("#import-file"); if (f) { f.value = ""; f.click(); } break; }
      case "askReset":
        confirmModal({ title: T("deleteAllQ"), text: T("deleteAllText"), ok: T("deleteBtn"), danger: true }, resetAll);
        break;
      case "newCustom": openEditor(null); break;
      case "editCustom": openEditor(ds.id); break;
      case "askDelCustom": {
        const c = SET.custom.find(x => x.id === ds.id);
        if (!c) break;
        confirmModal({ title: T("removeQ", { name: esc(c.name) }), text: T("removeText"), ok: T("remove"), danger: true }, () => {
          deleteCustom(c.id); closeModal(); render(); toast(T("tuningRemoved"));
        });
        break;
      }
      case "closeEditor": UI.edit = null; closeSheet(); break;
      case "edAdd": if (UI.edit && UI.edit.notes.length < MAX_STRINGS) { UI.edit.notes.push(UI.edit.notes[UI.edit.notes.length - 1] || 64); renderEditor(); } break;
      case "edDel": if (UI.edit && UI.edit.notes.length > 1) { UI.edit.notes.splice(Number(ds.i), 1); renderEditor(); } break;
      case "edSave": if (UI.edit) saveEditor(); break;
      case "stopTone": stopTone(); renderTones(); break;
      case "modalOk": if (modalOk) modalOk(); break;
      case "modalCancel": closeModal(); break;
      case "install":
        if (installPrompt) { installPrompt.prompt(); installPrompt.userChoice.finally(() => { installPrompt = null; render(); }); }
        break;
      case "installLater": SET.installDismissed = true; saveSet(); render(); break;
    }
  });
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
  document.addEventListener("change", e => {
    const t = e.target;
    if (t.id === "import-file") { importFile(t.files && t.files[0]); return; }
    if (t.id === "set-lang") { setLanguage(t.value); return; }
    if (t.dataset && t.dataset.ed !== undefined && UI.edit) {
      const v = Number(t.value), i = Number(t.dataset.ed);
      if (Number.isInteger(v) && v >= MIN_NOTE && v <= MAX_NOTE && i >= 0 && i < UI.edit.notes.length) UI.edit.notes[i] = v;
    }
  });
  document.addEventListener("input", e => {
    if (e.target.id === "ed-name" && UI.edit) UI.edit.name = e.target.value;
  });
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (!$("#modal").hidden) closeModal();
    else if (!$("#sheet").hidden) closeSheet();
  });

  // ---------- Inštalácia ----------
  let installPrompt = null;
  const isStandalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  function installCard() {
    if (NATIVE || isStandalone() || SET.installDismissed) return "";
    if (installPrompt) {
      return '<div class="card"><h3>' + T("installTitle") + '</h3><p class="small muted">' + T("installText") + "</p>" +
        '<div class="row"><button class="btn" data-act="install" type="button" style="flex:1">' + T("installBtn") + '</button><button class="btn ghost" data-act="installLater" type="button">' + T("later") + "</button></div></div>";
    }
    if (isIOS) {
      return '<div class="card"><h3>' + T("iosTitle") + '</h3><p class="small muted">' + T("iosText") + "</p>" +
        '<button class="btn ghost" data-act="installLater" type="button">' + T("understood") + "</button></div>";
    }
    return "";
  }
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    installPrompt = e;
    if (UI.tab === "tune" && !L && $("#sheet").hidden) render();
  });
  window.addEventListener("appinstalled", () => { installPrompt = null; toast(T("installed")); render(); });

  // Keď používateľ odíde z appky, mikrofón a tón hneď vypneme (súkromie aj batéria).
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") return;
    stopListening();
    stopTone();
    if (UI.tab === "tones") render();
  });
  window.addEventListener("pagehide", () => { stopListening(); stopTone(); });
  // Appka môže byť otvorená dvakrát (nainštalovaná + karta) – nastavenia z druhej kópie načítame.
  window.addEventListener("storage", e => {
    if (e.key !== SET_KEY && e.key !== null) return;
    load(); applyLang(); applyTheme(); restartListening();
    if ($("#sheet").hidden) render();
  });

  load();
  applyLang();
  applyTheme();
  render();

  // Tlačidlo Späť v Androide: zavrie okno, vráti sa na Ladiť, tam appku odloží do pozadia (mikrofón a tón sa vypnú).
  const APP = plugin("App");
  if (APP) APP.addListener("backButton", () => {
    if (!$("#modal").hidden) closeModal();
    else if (!$("#sheet").hidden) closeSheet();
    else if (UI.tab !== "tune") { stopTone(); UI.tab = "tune"; render(); }
    else { stopListening(); stopTone(); if (APP.minimizeApp) APP.minimizeApp().catch(() => {}); }
  });
  clearExports();

  // v natívnej appke sú súbory priamo v balíku, service worker netreba
  if (!NATIVE && "serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => { /* offline režim nie je dostupný */ });
  }
})();
