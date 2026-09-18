/* Arkádium · zvuk
 * ---------------------------------------------------------------------------
 * Každý zvuk v zbierke sa počíta za behu z oscilátorov a šumu — nie je tu
 * jediný zvukový súbor, takže niet čo licencovať. Je to tá istá zásada, akou
 * sú kreslené aj obrázky: ak potrebuješ tvar, napíš funkciu, ktorá ho nakreslí.
 *
 * Použitie v hre:
 *     <script src="../../sfx.js"></script>     (za i18n.js)
 *     SFX.play('pop');  SFX.play('win');
 *
 * Tlačidlo na stlmenie si modul pridá sám vedľa tlačidla Späť; hra nemusí
 * spraviť nič. Nastavenie je spoločné pre celú zbierku (localStorage) a platí
 * aj pre hry, ktoré si zvuky robia po svojom — tie sa pýtajú SFX.on.
 *
 * Prehliadače nepustia zvuk, kým používateľ na stránku neklikne; modul si
 * prvý dotyk odchytí sám a zvukový kontext prebudí.
 */
(function (global) {
  'use strict';

  var KEY = 'gamepad_sound';          // rovnaká predpona ako ostatné dáta hráča
  var ctx = null, master = null, listeners = [];

  function load() {
    try { return localStorage.getItem(KEY) !== '0'; } catch (e) { return true; }
  }
  var on = load();

  // ── zvukový kontext ───────────────────────────────────────────────────
  function ac() {
    if (ctx) return ctx;
    try {
      var C = global.AudioContext || global.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);
    } catch (e) { ctx = null; }
    return ctx;
  }

  function wake() {
    var c = ac();
    if (c && c.state === 'suspended') { try { c.resume(); } catch (e) {} }
  }

  ['pointerdown', 'touchstart', 'keydown'].forEach(function (ev) {
    global.addEventListener(ev, wake, { passive: true });
  });

  // ── stavebné kamene ───────────────────────────────────────────────────
  // t = odklad v sekundách, aby sa dali skladať krátke melódie.
  function tone(o) {
    if (!on) return;
    var c = ac(); if (!c) return;
    try {
      var t0 = c.currentTime + (o.t || 0);
      var dur = o.dur || 0.12, vol = o.vol == null ? 0.14 : o.vol;
      var osc = c.createOscillator(), g = c.createGain();
      osc.type = o.type || 'sine';
      osc.frequency.setValueAtTime(o.f, t0);
      if (o.f2) osc.frequency.exponentialRampToValueAtTime(Math.max(1, o.f2), t0 + dur);
      // Krátky nábeh miesto tvrdého začiatku — inak každý tón lupne.
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol, t0 + Math.min(0.012, dur * 0.3));
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(g); g.connect(master);
      osc.start(t0); osc.stop(t0 + dur + 0.03);
    } catch (e) {}
  }

  function noise(o) {
    if (!on) return;
    var c = ac(); if (!c) return;
    try {
      var t0 = c.currentTime + (o.t || 0);
      var dur = o.dur || 0.1, vol = o.vol == null ? 0.1 : o.vol;
      var n = Math.max(1, Math.floor(c.sampleRate * dur));
      var buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
      for (var i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      var src = c.createBufferSource(); src.buffer = buf;
      var g = c.createGain();
      g.gain.setValueAtTime(vol, t0);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      var last = g;
      if (o.filter !== false) {
        var f = c.createBiquadFilter();
        f.type = o.filter || 'lowpass';
        f.frequency.setValueAtTime(o.freq || 2000, t0);
        if (o.freq2) f.frequency.exponentialRampToValueAtTime(Math.max(20, o.freq2), t0 + dur);
        if (o.q) f.Q.value = o.q;
        src.connect(f); f.connect(g); last = g;
      } else {
        src.connect(g);
      }
      last.connect(master);
      src.start(t0); src.stop(t0 + dur + 0.02);
    } catch (e) {}
  }

  function seq(notes, o) {
    o = o || {};
    for (var i = 0; i < notes.length; i++) {
      tone({ f: notes[i], type: o.type || 'triangle', dur: o.dur || 0.12,
             vol: o.vol == null ? 0.12 : o.vol, t: (o.t || 0) + i * (o.gap || 0.075) });
    }
  }

  // ── paleta ────────────────────────────────────────────────────────────
  // Mená sú opisné, nie hrové: hra si vyberie, čo sa k jej udalosti hodí.
  var P = {
    click:   function () { tone({ f: 880, f2: 660, type: 'square', dur: 0.03, vol: 0.05 }); },
    select:  function () { tone({ f: 620, type: 'triangle', dur: 0.06, vol: 0.1 });
                           tone({ f: 930, type: 'triangle', dur: 0.05, vol: 0.06, t: 0.045 }); },
    move:    function () { tone({ f: 330, type: 'triangle', dur: 0.05, vol: 0.08 }); },
    place:   function () { tone({ f: 240, f2: 180, type: 'sine', dur: 0.09, vol: 0.13 });
                           noise({ dur: 0.05, vol: 0.05, freq: 1400 }); },
    swap:    function () { tone({ f: 420, f2: 600, type: 'sine', dur: 0.09, vol: 0.11 }); },
    rotate:  function () { tone({ f: 520, f2: 720, type: 'square', dur: 0.06, vol: 0.06 }); },
    drop:    function () { tone({ f: 300, f2: 110, type: 'sine', dur: 0.16, vol: 0.14 }); },
    pop:     function () { tone({ f: 700, f2: 1250, type: 'sine', dur: 0.07, vol: 0.13 }); },
    coin:    function () { tone({ f: 988, type: 'square', dur: 0.05, vol: 0.08 });
                           tone({ f: 1319, type: 'square', dur: 0.1, vol: 0.08, t: 0.05 }); },
    chime:   function () { seq([784, 1047, 1319], { type: 'sine', dur: 0.18, gap: 0.06, vol: 0.09 }); },
    jump:    function () { tone({ f: 300, f2: 760, type: 'square', dur: 0.11, vol: 0.09 }); },
    bounce:  function () { tone({ f: 520, f2: 300, type: 'triangle', dur: 0.08, vol: 0.1 }); },
    hit:     function () { noise({ dur: 0.07, vol: 0.1, freq: 1600, freq2: 400 });
                           tone({ f: 170, f2: 90, type: 'square', dur: 0.08, vol: 0.09 }); },
    hurt:    function () { tone({ f: 320, f2: 90, type: 'sawtooth', dur: 0.22, vol: 0.11 }); },
    explode: function () { noise({ dur: 0.36, vol: 0.16, freq: 900, freq2: 70 });
                           tone({ f: 90, f2: 32, type: 'sine', dur: 0.32, vol: 0.14 }); },
    shoot:   function () { tone({ f: 900, f2: 220, type: 'sawtooth', dur: 0.09, vol: 0.07 }); },
    whoosh:  function () { noise({ dur: 0.26, vol: 0.09, filter: 'bandpass', freq: 400, freq2: 2400, q: 1.2 }); },
    tick:    function () { tone({ f: 1250, type: 'square', dur: 0.02, vol: 0.045 }); },
    type:    function () { noise({ dur: 0.022, vol: 0.05, filter: 'highpass', freq: 2600 }); },
    flip:    function () { noise({ dur: 0.05, vol: 0.05, filter: 'highpass', freq: 1800 });
                           tone({ f: 640, type: 'triangle', dur: 0.04, vol: 0.07 }); },
    shuffle: function () { for (var i = 0; i < 5; i++)
                             noise({ dur: 0.05, vol: 0.05, filter: 'highpass', freq: 1500, t: i * 0.06 }); },
    correct: function () { tone({ f: 659, type: 'triangle', dur: 0.09, vol: 0.11 });
                           tone({ f: 988, type: 'triangle', dur: 0.14, vol: 0.1, t: 0.08 }); },
    // Malá sekunda — neladí schválne, aby bola chyba počuť ako chyba.
    error:   function () { tone({ f: 220, type: 'sawtooth', dur: 0.2, vol: 0.09 });
                           tone({ f: 233, type: 'sawtooth', dur: 0.2, vol: 0.09 }); },
    warn:    function () { tone({ f: 440, type: 'square', dur: 0.08, vol: 0.07 });
                           tone({ f: 440, type: 'square', dur: 0.08, vol: 0.07, t: 0.14 }); },
    levelup: function () { seq([523, 659, 784], { type: 'triangle', dur: 0.14, gap: 0.07, vol: 0.11 }); },
    win:     function () { seq([523, 659, 784, 1047], { type: 'triangle', dur: 0.22, gap: 0.085, vol: 0.12 });
                           tone({ f: 1568, type: 'sine', dur: 0.4, vol: 0.07, t: 0.34 }); },
    lose:    function () { seq([392, 330, 262], { type: 'sawtooth', dur: 0.2, gap: 0.13, vol: 0.09 });
                           tone({ f: 196, f2: 130, type: 'sine', dur: 0.4, vol: 0.1, t: 0.4 }); },
    start:   function () { tone({ f: 440, f2: 880, type: 'triangle', dur: 0.14, vol: 0.1 }); }
  };

  // ── prepínanie ────────────────────────────────────────────────────────
  function set(v) {
    on = !!v;
    API.on = on;
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
    if (master) { try { master.gain.value = on ? 0.9 : 0; } catch (e) {} }
    paint();
    listeners.forEach(function (fn) { try { fn(on); } catch (e) {} });
  }

  // Zmena v inej karte alebo v inej hre otvorenej vedľa.
  global.addEventListener('storage', function (e) {
    if (e.key === KEY) { on = load(); API.on = on; paint(); }
  });

  // ── tlačidlo ──────────────────────────────────────────────────────────
  var btn = null;

  var ICON_ON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
  var ICON_OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>';

  function label() {
    if (typeof global.t === 'function') {
      try { return global.t(on ? 'uiSoundOn' : 'uiSoundOff'); } catch (e) {}
    }
    return on ? 'Sound on' : 'Sound off';
  }

  function paint() {
    if (!btn) return;
    btn.innerHTML = on ? ICON_ON : ICON_OFF;
    btn.classList.toggle('sfx-off', !on);
    btn.setAttribute('aria-label', label());
    btn.setAttribute('title', label());
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  function style() {
    if (document.getElementById('sfx-style')) return;
    var s = document.createElement('style');
    s.id = 'sfx-style';
    s.textContent =
      '#sfx-btn{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;' +
      'padding:0;border-radius:100px;background:rgba(17,17,22,.88);border:1px solid rgba(255,255,255,.08);' +
      'color:rgba(255,255,255,.5);cursor:pointer;transition:color .18s,border-color .18s,transform .12s;' +
      '-webkit-tap-highlight-color:transparent;}' +
      '#sfx-btn svg{width:14px;height:14px;}' +
      '#sfx-btn:hover{color:rgba(255,255,255,.92);border-color:rgba(255,255,255,.2);}' +
      '#sfx-btn:active{transform:scale(.92);}' +
      '#sfx-btn.sfx-off{color:rgba(255,255,255,.28);}';
    (document.head || document.documentElement).appendChild(s);
  }

  function make() {
    var b = document.createElement('button');
    b.id = 'sfx-btn';
    b.type = 'button';
    b.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      set(!on);
      if (on) { wake(); P.click(); }
    };
    return b;
  }

  // Tlačidlo Späť má každá hra a nič iné vedľa neho nestojí, takže je to
  // jediné miesto, ktoré je voľné vo všetkých stoderiatich hrách naraz.
  function place(back) {
    var cs = getComputedStyle(back);
    if (cs.position === 'fixed' || cs.position === 'absolute') {
      // Späť je vytrhnuté z toku — tlačidlo ho nasleduje na vypočítanom mieste.
      btn.style.position = cs.position;
      btn.style.zIndex = cs.zIndex === 'auto' ? '10' : cs.zIndex;
      (back.offsetParent || document.body).appendChild(btn);
      follow(back);
      ['resize', 'orientationchange'].forEach(function (ev) {
        global.addEventListener(ev, function () { follow(back); });
      });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { follow(back); });
      setTimeout(function () { follow(back); }, 350);
    } else {
      // Späť je v toku (napr. v hornej lište) — stačí ho pripojiť vedľa.
      btn.style.marginLeft = '8px';
      btn.style.verticalAlign = 'middle';
      back.parentNode.insertBefore(btn, back.nextSibling);
    }
  }

  function follow(back) {
    var r = back.getBoundingClientRect();
    if (!r.width) return;
    btn.style.top = Math.round(r.top + (r.height - 28) / 2) + 'px';
    btn.style.left = Math.round(r.right + 8) + 'px';
    btn.style.right = 'auto';
  }

  function mount(target) {
    if (btn) return btn;
    style();
    btn = make();
    paint();
    if (target) { target.appendChild(btn); return btn; }
    var back = document.getElementById('back-btn');
    if (back) place(back);
    else (document.body || document.documentElement).appendChild(btn);
    return btn;
  }

  function auto() {
    if (global.SFX_NO_AUTOMOUNT) return;
    var slot = document.getElementById('sfx-slot');
    mount(slot || null);
    paint();  // popis vie až po i18n
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', auto);
  } else {
    auto();
  }

  // ── rozhranie ─────────────────────────────────────────────────────────
  var API = {
    on: on,
    play: function (name, opts) {
      if (!on) return;
      var f = P[name];
      if (!f) return;
      try { f(opts || {}); } catch (e) {}
    },
    tone: tone,
    noise: noise,
    seq: seq,
    set: set,
    toggle: function () { set(!on); },
    wake: wake,
    mount: mount,
    relabel: paint,
    onChange: function (fn) { if (typeof fn === 'function') listeners.push(fn); },
    names: Object.keys(P)
  };
  global.SFX = API;
})(window);
