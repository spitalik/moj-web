/* Sleep Detective – rozpoznávanie chrápania a hluku zo zvuku v noci.
   Čistá logika bez prehliadačových API, aby sa dala testovať v Node (tools/test.js).

   Vstup: snímky približne každých 100 ms – čas (ms), hlasitosť v dBFS a podiel energie
   v nízkych frekvenciách (60–500 Hz z pásma 60–4000 Hz).
   Postup:
   1. Hladina ticha (floor) sa priebežne prispôsobuje miestnosti: rýchlo klesá, pomaly stúpa.
   2. Zvuk = hlasitosť nad floor + citlivosť aspoň 150 ms; koniec po 400 ms ticha.
   3. Kandidát na chrápanie = hlboký zvuk (nízke frekvencie ≥ 55 %) dlhý 0,3–3,5 s.
   4. Chrápanie = aspoň 3 kandidáti po sebe v rytme dychu (začiatky 1,5–10 s od seba).
   Ostatné zvuky sú hluk. Výsledok je odhad, nie meranie zdravotníckym prístrojom. */
(function (root) {
  'use strict';

  const SENSITIVITY = { low: 15, medium: 10, high: 6 };   // o koľko dB nad tichom je už zvuk
  const BUCKET_MS = 5 * 60 * 1000;                         // časová os po 5 minútach
  const MIN_START_MS = 150, END_QUIET_MS = 400;
  const SNORE_MIN_DUR = 300, SNORE_MAX_DUR = 3500, SNORE_LOW = 0.55;
  const BREATH_MIN = 1500, BREATH_MAX = 10000, CHAIN = 3;
  const EPISODE_GAP = 15000;                               // chrápanie s pauzou do 15 s je jedna epizóda
  const GAP_MS = 5000;                                     // dlhšia pauza medzi snímkami = prerušený záznam
  const MAX_EVENT_MS = 60000;                              // dlhší „zvuk“ je zmena pozadia

  function Detector(opts) {
    opts = opts || {};
    this.delta = SENSITIVITY[opts.sensitivity] || SENSITIVITY.medium;
    this.start = null;
    this.lastT = null;
    this.floor = null;
    this.ev = null;            // práve prebiehajúci zvuk
    this.aboveSince = null;
    this.belowSince = null;
    this.chain = [];           // posledná séria kandidátov na chrápanie
    this.events = [];          // všetky ukončené zvuky
    this.peaks = {};           // index 5-min úseku -> najhlasnejší zvuk nad tichom (dB)
    this.gaps = [];            // prerušenia záznamu { from, to }
  }

  // Vráti { type: 'start', t } pri začiatku zvuku alebo { type: 'end', event } pri jeho konci, inak null.
  Detector.prototype.feed = function (t, db, low) {
    if (!isFinite(db)) db = -100;
    if (this.start === null) { this.start = t; this.floor = db; }
    if (this.lastT !== null && t - this.lastT > GAP_MS) {
      this.gaps.push({ from: this.lastT, to: t });
      // zvuk rozbehnutý pred prerušením ukončíme v čase prerušenia
      if (this.ev) { const e = this.finish(this.lastT); this.lastT = t; return { type: 'end', event: e }; }
    }
    this.lastT = t;

    if (!this.ev) {
      // hladina ticha: rýchlo dole, pomaly hore (časová konštanta ~30 s pri 10 snímkach/s)
      const k = db < this.floor ? 0.05 : 0.003;
      this.floor += (db - this.floor) * k;
    } else if (t - this.ev.start > MAX_EVENT_MS) {
      // zvuk dlhší ako minúta je nové pozadie (ventilátor, dážď) – zvuk ukončíme a ticho posunieme
      const e = this.finish(t);
      this.floor = db;
      return { type: 'end', event: e };
    }
    const thr = this.floor + this.delta;
    const b = Math.floor((t - this.start) / BUCKET_MS);
    const over = Math.max(0, db - this.floor);
    if (!(b in this.peaks) || over > this.peaks[b]) this.peaks[b] = over;

    if (!this.ev) {
      if (db > thr) {
        if (this.aboveSince === null) this.aboveSince = t;
        if (t - this.aboveSince >= MIN_START_MS) {
          this.ev = { start: this.aboveSince, peak: db, lowSum: low || 0, n: 1, floor: this.floor };
          this.aboveSince = null; this.belowSince = null;
          return { type: 'start', t: this.ev.start };
        }
      } else {
        this.aboveSince = null;
      }
      return null;
    }

    const ev = this.ev;
    ev.peak = Math.max(ev.peak, db);
    ev.lowSum += low || 0; ev.n++;
    if (db > thr) this.belowSince = null;
    else {
      if (this.belowSince === null) this.belowSince = t;
      if (t - this.belowSince >= END_QUIET_MS) return { type: 'end', event: this.finish(this.belowSince) };
    }
    return null;
  };

  Detector.prototype.finish = function (end) {
    const ev = this.ev;
    this.ev = null; this.belowSince = null;
    const e = {
      start: ev.start, end: Math.max(end, ev.start), peak: Math.round((ev.peak - ev.floor) * 10) / 10,
      low: ev.lowSum / ev.n, kind: 'noise'
    };
    e.dur = e.end - e.start;
    if (e.dur >= SNORE_MIN_DUR && e.dur <= SNORE_MAX_DUR && e.low >= SNORE_LOW) {
      e.kind = 'cand';
      const last = this.chain[this.chain.length - 1];
      const step = last ? e.start - last.start : -1;
      if (last && step >= BREATH_MIN && step <= BREATH_MAX) this.chain.push(e);
      else this.chain = [e];
      if (this.chain.length >= CHAIN) this.chain.forEach(c => { c.kind = 'snore'; });
    } else {
      this.chain = [];
    }
    this.events.push(e);
    return e;
  };

  // Ukončí prípadný rozbehnutý zvuk (pri zastavení záznamu).
  Detector.prototype.flush = function (t) {
    if (this.ev) return this.finish(t);
    return null;
  };

  Detector.prototype.summary = function (endT) {
    const end = endT || this.lastT || this.start;
    const snores = this.events.filter(e => e.kind === 'snore');
    // osamotený kandidát, z ktorého nebolo chrápanie, je obyčajný hluk
    const noises = this.events.filter(e => e.kind !== 'snore' && (e.dur >= 250 || e.peak >= 20));
    const episodes = [];
    snores.forEach(e => {
      const ep = episodes[episodes.length - 1];
      if (ep && e.start - ep.end <= EPISODE_GAP) { ep.end = e.end; ep.n++; }
      else episodes.push({ start: e.start, end: e.end, n: 1 });
    });
    const snoreMs = episodes.reduce((s, ep) => s + (ep.end - ep.start), 0);
    const nb = Math.max(1, Math.ceil((end - this.start) / BUCKET_MS));
    const timeline = [];
    for (let i = 0; i < nb; i++) timeline.push({ peak: Math.round((this.peaks[i] || 0) * 10) / 10, snore: 0, noise: 0 });
    const bucket = t => Math.min(nb - 1, Math.max(0, Math.floor((t - this.start) / BUCKET_MS)));
    episodes.forEach(ep => {
      // sekundy chrápania rozdelíme do 5-min úsekov
      for (let t = ep.start; t < ep.end; t += 1000) timeline[bucket(t)].snore += 1;
    });
    noises.forEach(e => { timeline[bucket(e.start)].noise += 1; });
    const loud = noises.concat(snores).sort((a, b) => b.peak - a.peak)[0] || null;
    const gapMs = this.gaps.reduce((s, g) => s + (g.to - g.from), 0);
    return {
      start: this.start, end,
      snoreMin: Math.round(snoreMs / 60000),
      episodes: episodes.length,
      noise: noises.length,
      loudest: loud ? { t: loud.start, peak: loud.peak, kind: loud.kind === 'snore' ? 'snore' : 'noise' } : null,
      gapMin: Math.round(gapMs / 60000),
      timeline
    };
  };

  // Druh zvuku, ktorý začal v čase t (na označenie uložených ukážok).
  Detector.prototype.kindAt = function (t) {
    const e = this.events.find(x => x.start === t);
    if (!e) return null;
    return e.kind === 'snore' ? 'snore' : 'noise';
  };
  Detector.prototype.peakAt = function (t) {
    const e = this.events.find(x => x.start === t);
    return e ? e.peak : 0;
  };

  // Podiel energie v nízkych frekvenciách z frekvenčného spektra v dB (AnalyserNode.getFloatFrequencyData).
  function lowRatio(spectrumDb, sampleRate, fftSize) {
    const hz = sampleRate / fftSize;
    let lo = 0, all = 0;
    for (let i = Math.ceil(60 / hz); i < spectrumDb.length && i * hz <= 4000; i++) {
      const p = Math.pow(10, spectrumDb[i] / 10);
      all += p;
      if (i * hz <= 500) lo += p;
    }
    return all > 0 ? lo / all : 0;
  }

  // Hlasitosť v dBFS z časového priebehu (AnalyserNode.getFloatTimeDomainData).
  function levelDb(samples) {
    let s = 0;
    for (let i = 0; i < samples.length; i++) s += samples[i] * samples[i];
    const rms = Math.sqrt(s / samples.length);
    return rms > 0 ? 20 * Math.log10(rms) : -100;
  }

  const api = { Detector, lowRatio, levelDb, BUCKET_MS, SENSITIVITY };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SleepSound = api;
})(this);
