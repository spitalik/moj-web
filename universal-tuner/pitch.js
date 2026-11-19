/* Universal Tuner – rozpoznanie výšky tónu, názvy tónov a ladenia nástrojov.
   Čistá logika bez prehliadačových API, aby sa dala testovať v Node (tools/test.js).

   Postup:
   1. detect(): algoritmus YIN na časovom priebehu z mikrofónu (AnalyserNode.getFloatTimeDomainData).
      Nájde periódu, ktorej posunutý signál sa najviac podobá sám sebe, a spresní ju parabolou.
      Funguje aj pri slabom základnom tóne (malé mikrofóny v telefóne basy takmer nezachytia).
   2. Tracker: vyhladí odčítania (medián), ignoruje osamotené skoky a chvíľu podrží posledný tón.
   3. noteOf() / nearestString(): tón, odchýlka v centoch (100 centov = poltón) a najbližšia struna. */
(function (root) {
  'use strict';

  // ---------- Tóny ----------
  // Interné názvy sú anglické (H = B). Zobrazenie podľa nastavenia: slovenské (B = B♭, H) alebo anglické.
  const SHARP = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
  const FLAT = ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B'];
  const PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

  // midi 69 = A4. Výsledok: { letter: 'A♯', octave: 3 }
  function noteName(midi, opts) {
    opts = opts || {};
    const pc = ((midi % 12) + 12) % 12, octave = Math.floor(midi / 12) - 1;
    let letter = (opts.accidental === 'flat' ? FLAT : SHARP)[pc];
    if (opts.notation === 'sk') {
      if (pc === 11) letter = 'H';
      else if (pc === 10) letter = 'B';      // v slovenskom názvosloví je B to, čo je v anglickom B♭ (A♯)
    }
    return { letter, octave };
  }
  const label = (midi, opts) => { const n = noteName(midi, opts); return n.letter + n.octave; };

  // 'E2', 'F#3', 'Bb1' (anglické názvy) -> midi
  function parseNote(s) {
    const m = /^([A-G])([#b]?)(-?\d)$/.exec(String(s).trim());
    if (!m) return null;
    return PC[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0) + (Number(m[3]) + 1) * 12;
  }
  const midiToHz = (midi, a4) => (a4 || 440) * Math.pow(2, (midi - 69) / 12);
  const hzToMidi = (hz, a4) => 69 + 12 * Math.log2(hz / (a4 || 440));
  const cents = (hz, ref) => 1200 * Math.log2(hz / ref);

  // Najbližší tón: { midi, cents, hz (presná frekvencia tónu) }
  function noteOf(hz, a4) {
    const m = hzToMidi(hz, a4), midi = Math.round(m);
    return { midi, cents: (m - midi) * 100, hz: midiToHz(midi, a4) };
  }

  // Najbližšia struna podľa vzdialenosti v centoch. notes: midi čísla strún. Vráti { index, cents }.
  function nearestString(hz, notes, a4) {
    let best = -1, bestC = Infinity;
    notes.forEach((n, i) => {
      const c = cents(hz, midiToHz(n, a4));
      if (Math.abs(c) < Math.abs(bestC) - 1e-9) { best = i; bestC = c; }
    });
    return best < 0 ? null : { index: best, cents: bestC };
  }

  // ---------- Hlasitosť ----------
  function levelDb(samples) {
    let s = 0;
    for (let i = 0; i < samples.length; i++) s += samples[i] * samples[i];
    const rms = Math.sqrt(s / samples.length);
    return rms > 0 ? 20 * Math.log10(rms) : -100;
  }

  // ---------- Výška tónu (YIN) ----------
  // buf: Float32Array, sr: vzorkovacia frekvencia. opts: { minHz, maxHz, threshold }.
  // Vráti { hz, clarity } (clarity 0–1, čím vyššie, tým čistejší periodický tón) alebo null.
  function detect(buf, sr, opts) {
    opts = opts || {};
    const minHz = opts.minHz || 30, maxHz = opts.maxHz || 2500, thr = opts.threshold || 0.15;
    let x = buf, rate = sr;
    // nízke tóny: polovičná vzorkovacia frekvencia = štvrtinový výpočet, presnosť stačí
    // (pred zahodením každej druhej vzorky jednoduchý dolnopriepustný filter 1-3-3-1)
    if (sr / minHz > 400 && maxHz < sr / 8) {
      const h = Math.floor((buf.length - 3) / 2);
      x = new Float32Array(h);
      for (let i = 0; i < h; i++) x[i] = (buf[2 * i] + 3 * buf[2 * i + 1] + 3 * buf[2 * i + 2] + buf[2 * i + 3]) / 8;
      rate = sr / 2;
    }
    const n = x.length;
    const maxTau = Math.min(Math.floor(rate / minHz), Math.floor(n * 2 / 3));
    const minTau = Math.max(2, Math.floor(rate / maxHz));
    if (maxTau <= minTau + 2) return null;
    const W = n - maxTau;
    // odstránime jednosmernú zložku
    let mean = 0;
    for (let i = 0; i < n; i++) mean += x[i];
    mean /= n;
    if (mean !== 0) { const y = new Float32Array(n); for (let i = 0; i < n; i++) y[i] = x[i] - mean; x = y; }

    const d = new Float32Array(maxTau + 2);
    for (let tau = 1; tau <= maxTau + 1; tau++) {
      let s = 0;
      for (let i = 0; i < W; i++) { const v = x[i] - x[i + tau]; s += v * v; }
      d[tau] = s;
    }
    // kumulatívne normalizovaný rozdiel
    const c = new Float32Array(maxTau + 2);
    c[0] = 1;
    let run = 0;
    for (let tau = 1; tau <= maxTau + 1; tau++) {
      run += d[tau];
      c[tau] = run > 0 ? d[tau] * tau / run : 1;
    }
    let tau = -1;
    for (let t = minTau; t <= maxTau; t++) {
      if (c[t] < thr) {
        // najhlbšie miesto celej jamy pod prahom (šum robí na dne drobné falošné minimá)
        let best = t;
        while (t + 1 <= maxTau && c[t + 1] < thr) { t++; if (c[t] < c[best]) best = t; }
        tau = best;
        break;
      }
    }
    if (tau < 0) {
      // žiadne miesto pod prahom: vezmeme najhlbšie, ak je aspoň trochu periodické
      let best = minTau;
      for (let t = minTau + 1; t <= maxTau; t++) if (c[t] < c[best]) best = t;
      if (c[best] > 0.3 || best === maxTau) return null;
      tau = best;
    }
    if (tau >= maxTau) return null;
    // spresnenie polohy minima parabolou (na pôvodnom rozdiele, normalizovaný je pri krátkych periódach skreslený)
    const b = c[tau];
    const a = d[tau - 1], m = d[tau], e = d[tau + 1];
    const den = a - 2 * m + e;
    const shift = den > 0 ? Math.max(-0.5, Math.min(0.5, (a - e) / (2 * den))) : 0;
    const hz = rate / refine(x, W, maxTau, tau + shift);
    if (hz < minHz * 0.97 || hz > maxHz * 1.03) return null;
    return { hz, clarity: Math.max(0, Math.min(1, 1 - b)) };
  }

  // Spresnenie periódy: minimum hľadáme pri k-násobku periódy (čo najďalej), chyba paraboly sa vydelí k.
  function refine(x, W, maxTau, t0) {
    const k = Math.floor((maxTau - 3) / t0);
    if (k < 2) return t0;
    const dAt = L => { let s = 0; for (let i = 0; i < W; i++) { const v = x[i] - x[i + L]; s += v * v; } return s; };
    const c = Math.round(k * t0), w = Math.max(2, Math.ceil(k * 0.1));   // odhad t0 môže byť mimo o desatinu vzorky
    let best = c, vals = {};
    for (let L = c - w; L <= c + w; L++) { vals[L] = dAt(L); if (vals[L] < vals[best]) best = L; }
    if (best === c - w || best === c + w) return t0;          // minimum na okraji – necháme pôvodný odhad
    const a = vals[best - 1], m = vals[best], e = vals[best + 1], den = a - 2 * m + e;
    const shift = den > 0 ? Math.max(-0.5, Math.min(0.5, (a - e) / (2 * den))) : 0;
    return (best + shift) / k;
  }

  // ---------- Vyhladenie ----------
  const HOLD_MS = 1200;      // po stíchnutí ešte chvíľu ukazujeme posledný tón
  const JUMP_CENTS = 70;     // väčší skok = iný tón (alebo chybné odčítanie)
  const HIST = 5;

  function median(a) {
    const s = a.slice().sort((p, q) => p - q), m = s.length >> 1;
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
  }

  function Tracker() { this.reset(); }
  Tracker.prototype.reset = function () { this.hist = []; this.pending = []; this.hz = null; this.lastT = null; };
  // r: { hz } alebo null (ticho / šum). Vráti { hz, live } alebo null.
  //   live = true, keď tón práve znie; false počas krátkeho podržania po stíchnutí.
  Tracker.prototype.feed = function (t, r) {
    if (r && r.hz > 0) {
      const ref = this.hz;
      if (ref !== null && Math.abs(cents(r.hz, ref)) <= JUMP_CENTS) {
        this.hist.push(r.hz);
        if (this.hist.length > HIST) this.hist.shift();
        this.pending = [];
      } else {
        // nový tón prijmeme až po dvoch zhodných odčítaniach po sebe (osamotený skok je chyba)
        const p = this.pending[this.pending.length - 1];
        if (p && Math.abs(cents(r.hz, p)) <= JUMP_CENTS / 2) this.pending.push(r.hz);
        else this.pending = [r.hz];
        if (this.pending.length >= 2) { this.hist = this.pending.slice(); this.pending = []; }
        else if (ref === null) return null;
        else return { hz: this.hz, live: false };
      }
      this.hz = median(this.hist);
      this.lastT = t;
      return { hz: this.hz, live: true };
    }
    this.pending = [];
    if (this.hz === null) return null;
    if (t - this.lastT > HOLD_MS) { this.hist = []; this.hz = null; return null; }
    return { hz: this.hz, live: false };
  };

  // ---------- Nástroje a ladenia ----------
  // Struny v poradí, v akom sú na nástroji (u gitary od najhrubšej 6. struny). Názvy tónov anglické.
  const RAW = [
    { id: 'guitar', name: 'Gitara', icon: '🎸', tunings: [
      ['std', 'Štandardné', 'E2 A2 D3 G3 B3 E4'],
      ['dropd', 'Drop D', 'D2 A2 D3 G3 B3 E4'],
      ['half', 'O poltón nižšie', 'Eb2 Ab2 Db3 Gb3 Bb3 Eb4'],
      ['dstd', 'O celý tón nižšie', 'D2 G2 C3 F3 A3 D4'],
      ['dropc', 'Drop C', 'C2 G2 C3 F3 A3 D4'],
      ['dadgad', 'DADGAD', 'D2 A2 D3 G3 A3 D4'],
      ['opend', 'Open D', 'D2 A2 D3 F#3 A3 D4'],
      ['openg', 'Open G', 'D2 G2 D3 G3 B3 D4'],
      ['opene', 'Open E', 'E2 B2 E3 G#3 B3 E4'],
      ['openc', 'Open C', 'C2 G2 C3 G3 C4 E4']
    ] },
    { id: 'guitar7', name: 'Gitara 7-strunová', icon: '🎸', tunings: [
      ['std', 'Štandardné', 'B1 E2 A2 D3 G3 B3 E4'],
      ['dropa', 'Drop A', 'A1 E2 A2 D3 G3 B3 E4']
    ] },
    { id: 'bass', name: 'Basgitara', icon: '🎸', tunings: [
      ['std4', '4 struny', 'E1 A1 D2 G2'],
      ['dropd4', '4 struny – Drop D', 'D1 A1 D2 G2'],
      ['std5', '5 strún', 'B0 E1 A1 D2 G2'],
      ['std6', '6 strún', 'B0 E1 A1 D2 G2 C3']
    ] },
    { id: 'ukulele', name: 'Ukulele', icon: '🪕', tunings: [
      ['std', 'Štandardné (vysoké G)', 'G4 C4 E4 A4'],
      ['lowg', 'Nízke G', 'G3 C4 E4 A4'],
      ['d', 'D ladenie', 'A4 D4 F#4 B4'],
      ['bari', 'Barytónové', 'D3 G3 B3 E4']
    ] },
    { id: 'violin', name: 'Husle', icon: '🎻', tunings: [['std', 'Štandardné', 'G3 D4 A4 E5']] },
    { id: 'viola', name: 'Viola', icon: '🎻', tunings: [['std', 'Štandardné', 'C3 G3 D4 A4']] },
    { id: 'cello', name: 'Violončelo', icon: '🎻', tunings: [['std', 'Štandardné', 'C2 G2 D3 A3']] },
    { id: 'dbass', name: 'Kontrabas', icon: '🎻', tunings: [
      ['std', 'Orchestrálne', 'E1 A1 D2 G2'],
      ['solo', 'Sólové', 'F#1 B1 E2 A2']
    ] },
    { id: 'mandolin', name: 'Mandolína', icon: '🪕', tunings: [['std', 'Štandardné', 'G3 D4 A4 E5']] },
    { id: 'banjo', name: 'Bendžo 5-strunové', icon: '🪕', tunings: [
      ['openg', 'Open G', 'G4 D3 G3 B3 D4'],
      ['dblc', 'Double C', 'G4 C3 G3 C4 D4'],
      ['gmod', 'G modálne (Sawmill)', 'G4 D3 G3 C4 D4']
    ] },
    { id: 'balalaika', name: 'Balalajka', icon: '🪕', tunings: [['prima', 'Prímová', 'E4 E4 A4']] },
    { id: 'bouzouki', name: 'Buzuki (írske)', icon: '🪕', tunings: [['gdad', 'GDAD', 'G2 D3 A3 D4']] }
  ];
  const INSTRUMENTS = RAW.map(i => ({
    id: i.id, name: i.name, icon: i.icon,
    tunings: i.tunings.map(([id, name, notes]) => ({ id, name, notes: notes.split(' ').map(parseNote) }))
  }));

  // Transpozícia chromatickej ladičky: koľko poltónov pripočítať k znejúcemu tónu, aby vyšiel zapísaný.
  const TRANSPOSE = [
    { id: 'c', name: 'C – klavír, flauta, spev', shift: 0 },
    { id: 'bb', name: 'B♭ – klarinet, trúbka, tenor saxofón', shift: 2 },
    { id: 'eb', name: 'E♭ – alt a barytón saxofón', shift: 9 },
    { id: 'f', name: 'F – lesný roh', shift: 7 }
  ];

  // Rozsah, v ktorom hľadáme tón: pod najnižšou strunou (povolená struna) aj nad najvyššou.
  function rangeFor(notes, a4) {
    if (!notes || !notes.length) return { minHz: 27, maxHz: 2100 };
    const lo = Math.min.apply(null, notes), hi = Math.max.apply(null, notes);
    return { minHz: midiToHz(lo - 7, a4), maxHz: midiToHz(hi + 7, a4) };
  }

  const api = {
    detect, levelDb, Tracker, noteName, label, parseNote, midiToHz, hzToMidi, cents, noteOf, nearestString,
    rangeFor, INSTRUMENTS, TRANSPOSE, HOLD_MS
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.TunerPitch = api;
})(this);
