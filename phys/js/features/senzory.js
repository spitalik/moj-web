/* Meranie senzormi mobilu (#/senzory, #/senzory/<pokus>): akcelerometer (voľný pád, kyvadlo, výťah)
   a mikrofón (spektrum, dominantná frekvencia, tón a hladina). Všetko beží len v zariadení, nič sa neodosiela;
   voliteľne sa uloží posledné meranie (localStorage fyzika.senzory). Bez senzora sa ukáže ukážkový záznam.
   Namerané dáta sa dajú otvoriť v grafe meraní (#/graf). Spracovanie je v SENZORY_LOGIC – dá sa overiť aj v node. */
(function () {
  'use strict';

  /* ---------- výpočtové jadro ---------- */
  const G = 9.81;
  const fin = Number.isFinite;
  const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
  function median(a) {
    if (!a.length) return NaN;
    const s = a.slice().sort((p, q) => p - q), m = s.length >> 1;
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
  }

  // deterministický generátor (ukážkové záznamy) a šum ≈ normálne rozdelenie so smerodajnou odchýlkou 1
  function rng(seed) {
    return () => {
      seed = (seed + 0x6D2B79F5) | 0;
      let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }
  const gauss = (r) => (r() + r() + r() - 1.5) / 0.5;

  // typický krok vzorkovania (medián rozdielov časov)
  function sampleDt(ts) {
    const d = [];
    for (let i = 1; i < ts.length; i++) if (ts[i] > ts[i - 1]) d.push(ts[i] - ts[i - 1]);
    return Math.max(median(d) || 0.01, 0.001);
  }

  // rovnomerné prevzorkovanie s krokom dt (lineárna interpolácia) – udalosti senzora neprichádzajú presne pravidelne
  function resample(ts, vs, dt) {
    const n = Math.floor((ts[ts.length - 1] - ts[0]) / dt + 1e-9) + 1, out = new Array(n);
    let j = 0;
    for (let i = 0; i < n; i++) {
      const tt = ts[0] + i * dt;
      while (j < ts.length - 2 && ts[j + 1] < tt) j++;
      const t0 = ts[j], t1 = ts[j + 1];
      out[i] = t1 > t0 ? vs[j] + (vs[j + 1] - vs[j]) * Math.min(1, Math.max(0, (tt - t0) / (t1 - t0))) : vs[j];
    }
    return out;
  }

  // kĺzavý priemer cez 2k + 1 hodnôt
  function smooth(vs, k) {
    if (!(k > 0)) return vs.slice();
    return vs.map((_, i) => {
      let s = 0, n = 0;
      for (let j = Math.max(0, i - k); j <= Math.min(vs.length - 1, i + k); j++) { s += vs[j]; n++; }
      return s / n;
    });
  }

  // riedenie: najviac max položiek s rovnomerným krokom (vždy aj prvá a posledná)
  function decimate(arr, max) {
    if (arr.length <= max) return arr.slice();
    const out = [], step = (arr.length - 1) / (max - 1);
    for (let i = 0; i < max; i++) out.push(arr[Math.round(i * step)]);
    return out;
  }

  /* Voľný pád: ts (s), as = veľkosť zrýchlenia |a| vrátane tiaže (m/s²). Pri voľnom páde akcelerometer
     ukazuje |a| ≈ 0 (beztiažový stav). Nájde najdlhší úsek pod prahom (krátke výkyvy do gap sa zlúčia).
     → { t0, t1, T, h = ½gT², v = gT, aMean } alebo null */
  function freeFall(ts, as, opt) {
    opt = opt || {};
    const thr = opt.thr || 0.35 * G, minDur = opt.minDur || 0.06, gap = opt.gap || 0.04;
    const runs = [];
    let cur = null;
    for (let i = 0; i < as.length; i++) {
      if (!(as[i] < thr)) continue;
      if (cur && ts[i] - ts[cur.e] <= gap + 1e-9) cur.e = i;
      else { cur = { s: i, e: i }; runs.push(cur); }
    }
    if (!runs.length) return null;
    // okraj = stred medzi poslednou vzorkou nad prahom a prvou pod ním (pri skokovej zmene nestranný odhad)
    const cross = (i, j) => (ts[i] + ts[j]) / 2;
    let best = null;
    runs.forEach((r) => {
      const t0 = r.s > 0 ? cross(r.s - 1, r.s) : ts[r.s];
      const t1 = r.e < as.length - 1 ? cross(r.e, r.e + 1) : ts[r.e];
      if (!best || t1 - t0 > best.T) best = { t0, t1, T: t1 - t0, s: r.s, e: r.e };
    });
    if (best.T < minDur) return null;
    return { t0: best.t0, t1: best.t1, T: best.T, h: G * best.T * best.T / 2, v: G * best.T, aMean: mean(as.slice(best.s, best.e + 1)) };
  }

  /* Perióda signálu z autokorelácie: prvý výrazný vrchol (r > 0,3) po prvom poklese pod nulu, spresnený
     parabolou. Signál sa najprv prevzorkuje rovnomerne. → { T, f, cycles, q (sila periodicity 0–1) } alebo null */
  function period(ts, vs, opt) {
    opt = opt || {};
    if (ts.length < 16) return null;
    const dt = opt.dt || sampleDt(ts);
    let x = resample(ts, vs, dt);
    const m = mean(x);
    x = x.map((v) => v - m);
    const N = x.length;
    const minLag = Math.max(2, Math.round((opt.minT || 0.2) / dt));
    const maxLag = Math.min(Math.floor(N / 2), Math.round((opt.maxT || 5) / dt));
    if (maxLag <= minLag + 2) return null;
    let r0 = 0;
    for (let i = 0; i < N; i++) r0 += x[i] * x[i];
    if (!(r0 > 0)) return null;
    const r = new Float64Array(maxLag + 2);
    for (let k = 0; k <= maxLag + 1; k++) {
      let s = 0;
      for (let i = 0; i + k < N; i++) s += x[i] * x[i + k];
      r[k] = s / r0 * N / (N - k);
    }
    let k0 = 1;
    while (k0 <= maxLag && r[k0] > 0) k0++;
    let best = -1;
    for (let k = Math.max(k0, minLag); k <= maxLag; k++) {
      if (r[k] > r[k - 1] && r[k] >= r[k + 1] && r[k] > 0.3) { best = k; break; }
    }
    if (best < 0) return null;
    const a = r[best - 1], b = r[best], c = r[best + 1], den = a - 2 * b + c;
    const p = den ? 0.5 * (a - c) / den : 0;
    const T = (best + p) * dt;
    return { T, f: 1 / T, cycles: (N - 1) * dt / T, q: Math.min(1, b) };
  }

  // os uhlovej rýchlosti s najväčším rozptylom → { ax, va }
  function gyroAxis(S) {
    let ax = 0, va = -1;
    for (let k = 0; k < 3; k++) {
      const v = S.map((s) => s.r[k]), m = mean(v);
      const q = mean(v.map((x) => (x - m) * (x - m)));
      if (q > va) { va = q; ax = k; }
    }
    return { ax, va };
  }

  /* Kyvadlo: S = [{ t, a, r: [α, β, γ] uhlová rýchlosť v °/s alebo null }], l = dĺžka (m).
     Gyroskop kmitá s periódou kyvadla (os s najväčším rozptylom). Bez neho sa použije |a|: akcelerometer
     meria len silu v závese (g·cos φ + l·ω²), ktorá kmitá dvakrát rýchlejšie → T = 2 · perióda |a|.
     → { T, f, cycles, q, src: 'gyro' | 'acc', ax, g = 4π²l/T² } alebo null */
  function pendulum(S, l) {
    const ts = S.map((s) => s.t);
    let res = null, src = 'acc', axis = -1;
    if (S.length && S.every((s) => s.r)) {
      const A = gyroAxis(S);
      if (A.va > 4) { res = period(ts, S.map((s) => s.r[A.ax]), { minT: 0.3, maxT: 6 }); src = 'gyro'; axis = A.ax; }
    }
    if (!res) {
      const p = period(ts, S.map((s) => s.a), { minT: 0.15, maxT: 3 });
      if (p) { res = { T: 2 * p.T, f: p.f / 2, cycles: p.cycles / 2, q: p.q }; src = 'acc'; axis = -1; }
    }
    if (!res) return null;
    res.src = src;
    res.ax = axis;
    res.g = l > 0 ? 4 * Math.PI * Math.PI * l / (res.T * res.T) : null;
    return res;
  }

  /* Výťah / jazda: telefón leží naplocho, na začiatku aj na konci v pokoji. a = |a| − g₀ (g₀ = pokoj na začiatku),
     rýchlosť a dráha lichobežníkovou metódou; rýchlosť sa opraví o lineárny posun, aby na konci bola nulová.
     → { g0, up, tUp, down, tDown, v (najväčšia podľa veľkosti, so znamienkom), s (prejdená dráha), a[], vs[] } */
  function lift(ts, as) {
    const n = ts.length;
    if (n < 10) return null;
    const dur = ts[n - 1] - ts[0];
    const rest = Math.min(1, dur / 5);
    const g0 = median(as.filter((_, i) => ts[i] - ts[0] <= rest));
    const k = Math.max(0, Math.round(0.1 / sampleDt(ts)));
    const a = smooth(as, k).map((v) => v - g0);
    const v = [0];
    for (let i = 1; i < n; i++) v.push(v[i - 1] + (a[i] + a[i - 1]) / 2 * (ts[i] - ts[i - 1]));
    const drift = v[n - 1];
    for (let i = 0; i < n; i++) v[i] -= dur > 0 ? drift * (ts[i] - ts[0]) / dur : 0;
    let s = 0, iu = 0, id = 0, iv = 0;
    for (let i = 1; i < n; i++) s += (v[i] + v[i - 1]) / 2 * (ts[i] - ts[i - 1]);
    for (let i = 0; i < n; i++) {
      if (a[i] > a[iu]) iu = i;
      if (a[i] < a[id]) id = i;
      if (Math.abs(v[i]) > Math.abs(v[iv])) iv = i;
    }
    return { g0, up: a[iu], tUp: ts[iu], down: a[id], tDown: ts[id], v: v[iv], s, a, vs: v };
  }

  /* ---------- zvuk ---------- */
  // FFT (radix 2, na mieste); dĺžka = mocnina 2
  function fft(re, im) {
    const n = re.length;
    for (let i = 1, j = 0; i < n; i++) {
      let bit = n >> 1;
      for (; j & bit; bit >>= 1) j ^= bit;
      j ^= bit;
      if (i < j) { let q = re[i]; re[i] = re[j]; re[j] = q; q = im[i]; im[i] = im[j]; im[j] = q; }
    }
    for (let len = 2; len <= n; len <<= 1) {
      const ang = -2 * Math.PI / len, wr = Math.cos(ang), wi = Math.sin(ang);
      for (let i = 0; i < n; i += len) {
        let cr = 1, ci = 0;
        for (let k = 0; k < len / 2; k++) {
          const a = i + k, b = a + len / 2;
          const tr = re[b] * cr - im[b] * ci, ti = re[b] * ci + im[b] * cr;
          re[b] = re[a] - tr; im[b] = im[a] - ti;
          re[a] += tr; im[a] += ti;
          const nr = cr * wr - ci * wi;
          ci = cr * wi + ci * wr; cr = nr;
        }
      }
    }
  }

  // Spektrum v dB (Hannovo okno; sínus s amplitúdou 1 má 0 dB) – N/2 hodnôt ako z AnalyserNode
  function spectrumDb(x) {
    let N = 1;
    while (N * 2 <= x.length) N *= 2;
    const re = new Float64Array(N), im = new Float64Array(N);
    let sw = 0;
    for (let i = 0; i < N; i++) { const w = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / N); re[i] = x[i] * w; sw += w; }
    fft(re, im);
    const db = new Float64Array(N / 2);
    for (let k = 0; k < N / 2; k++) db[k] = 20 * Math.log10(2 * Math.hypot(re[k], im[k]) / sw + 1e-12);
    return db;
  }

  // vrchol v bine k spresnený parabolou cez susedné biny (presnosť zlomku binu)
  function refine(db, k) {
    const a = db[k - 1], b = db[k], c = db[k + 1], den = a - 2 * b + c;
    const p = den < 0 && fin(a) && fin(c) ? Math.max(-0.5, Math.min(0.5, 0.5 * (a - c) / den)) : 0;
    return { k: k + p, db: b - 0.25 * (a - c) * p };
  }
  const binRange = (n, sr, fmin, fmax) => [Math.max(1, Math.ceil(fmin * 2 * n / sr)), Math.min(n - 2, Math.floor(fmax * 2 * n / sr))];

  /* Dominantná frekvencia: db = spektrum (N/2 binov, bin k ↔ k·sr/N), sr = vzorkovacia frekvencia.
     → { f, db, floor (medián spektra v rozsahu), clear (vrchol aspoň 20 dB nad pozadím) } alebo null */
  function dominant(db, sr, opt) {
    opt = opt || {};
    const n = db.length, [k1, k2] = binRange(n, sr, opt.fmin || 50, opt.fmax || 5000);
    if (k2 <= k1) return null;
    let kb = k1;
    for (let k = k1; k <= k2; k++) if (db[k] > db[kb]) kb = k;
    if (!fin(db[kb])) return null;
    const p = refine(db, kb);
    const floor = median(Array.prototype.slice.call(db, k1, k2 + 1).filter(fin));
    return { f: p.k * sr / (2 * n), db: p.db, floor, clear: p.db - floor >= 20 };
  }

  // Výrazné vrcholy spektra (lokálne maximá v okolí ±w binov, najviac 30 dB pod najvyšším), najviac max, podľa f
  function peaks(db, sr, opt) {
    opt = opt || {};
    const n = db.length, [k1, k2] = binRange(n, sr, opt.fmin || 50, opt.fmax || 5000);
    const w = opt.w || 3, max = opt.max || 6;
    const D = dominant(db, sr, opt);
    if (!D || !D.clear) return [];
    const out = [];
    for (let k = k1; k <= k2; k++) {
      if (!(db[k] > D.db - (opt.range || 30)) || db[k] - D.floor < 15) continue;
      let top = true;
      for (let j = Math.max(1, k - w); j <= Math.min(n - 2, k + w); j++) if (j !== k && db[j] > db[k]) { top = false; break; }
      if (top) { const p = refine(db, k); out.push({ f: p.k * sr / (2 * n), db: p.db }); }
    }
    return out.sort((a, b) => b.db - a.db).slice(0, max).sort((a, b) => a.f - b.f);
  }

  // Vrcholy ako harmonické: k-tý násobok najnižšieho vrcholu (odchýlka do 3 %) → [[k, f], …]; f = k·f₁
  function harmonicRows(pk) {
    if (!pk.length) return [];
    const f0 = pk[0].f, rows = [], used = {};
    pk.forEach((p) => {
      const k = Math.round(p.f / f0);
      if (k >= 1 && !used[k] && Math.abs(p.f / f0 - k) <= 0.03 * k) { used[k] = 1; rows.push([k, p.f]); }
    });
    return rows;
  }

  // Najbližší tón rovnomerne temperovaného ladenia (A4 = 440 Hz) a odchýlka v centoch
  const NOTES = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
  function note(f) {
    if (!(f > 0)) return null;
    const x = 12 * Math.log2(f / 440), m = Math.round(x), midi = 69 + m;
    return { name: NOTES[((midi % 12) + 12) % 12] + (Math.floor(midi / 12) - 1), midi, cents: Math.round(100 * (x - m)), f: 440 * Math.pow(2, m / 12) };
  }

  // hladina v dB vzhľadom na maximum mikrofónu (efektívna hodnota; ticho → −120)
  function rmsDb(x) {
    let s = 0;
    for (let i = 0; i < x.length; i++) s += x[i] * x[i];
    const r = Math.sqrt(s / (x.length || 1));
    return r > 1e-6 ? 20 * Math.log10(r) : -120;
  }

  /* ---------- ukážkové záznamy (deterministické) ---------- */
  // pohyb: { samples: [{ t, x, y, z, a, r }] (m/s², °/s), meta = parametre, z ktorých záznam vznikol }
  function demoMotion(id) {
    const r = rng({ 'volny-pad': 11, kyvadlo: 23, vytah: 37 }[id] || 5), out = [];
    const push = (tt, x, y, z, rr) => out.push({ t: +tt.toFixed(4), x, y, z, a: Math.sqrt(x * x + y * y + z * z), r: rr || null });
    let meta = {};
    if (id === 'volny-pad') {
      // telefón v ruke, pustený z výšky 0,45 m na vankúš; uvoľnenie a dopad trvajú pár milisekúnd
      const h = 0.45, Tf = Math.sqrt(2 * h / G), t1 = 1.204, t2 = t1 + Tf, dt = 0.01;
      meta = { h, T: Tf };
      for (let i = 0; i * dt <= 3; i++) {
        const tt = i * dt;
        let x, y, z;
        if (tt < t1) {
          x = 0.4 + 0.25 * Math.sin(9 * tt) + 0.1 * gauss(r); y = 0.6 + 0.1 * gauss(r);
          z = Math.sqrt(G * G - x * x - y * y) + 0.08 * gauss(r);
        } else if (tt < t2) {
          const u = Math.min(1, (tt - t1) / 0.012); // dozvuk uvoľnenia
          x = 0.4 * (1 - u) + 0.12 * gauss(r); y = 0.6 * (1 - u) + 0.12 * gauss(r); z = G * (1 - u) + 0.15 + 0.12 * gauss(r);
        } else {
          const u = tt - t2;
          x = 1.5 * Math.exp(-u / 0.05) * Math.sin(40 * u) + 0.1 * gauss(r); y = 0.1 * gauss(r);
          z = G + 28 * Math.exp(-u / 0.035) * Math.cos(2 * Math.PI * u / 0.16) * Math.min(1, u / 0.012) + 0.08 * gauss(r);
        }
        push(tt, x, y, z);
      }
    } else if (id === 'kyvadlo') {
      // telefón na šnúrke dĺžky 0,5 m, rozkývaný na 0,3 rad, mierne tlmený; os y mieri pozdĺž šnúrky, gyroskop okolo osi z
      const l = 0.5, w = Math.sqrt(G / l), th0 = 0.3, gam = 0.03, dt = 0.02;
      meta = { l, T: 2 * Math.PI / w };
      for (let i = 0; i * dt <= 14; i++) {
        const tt = i * dt, e = th0 * Math.exp(-gam * tt);
        const th = e * Math.cos(w * tt), om = -e * (w * Math.sin(w * tt) + gam * Math.cos(w * tt));
        push(tt, 0.08 * gauss(r), G * Math.cos(th) + l * om * om + 0.08 * gauss(r), 0.08 * gauss(r),
          [1.5 * gauss(r), 1.5 * gauss(r), om * 180 / Math.PI + 1.5 * gauss(r)]);
      }
    } else {
      // výťah ide hore: rozbeh 1,2 m/s² (asi 2 s), jazda stálou rýchlosťou, brzdenie (asi 2 s); prechody plynulé
      const dt = 0.02, A = 1.2;
      const ramp = (u) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
      const acc = (tt) => A * (ramp((tt - 2) / 0.3) - ramp((tt - 3.85) / 0.3)) - A * (ramp((tt - 8.85) / 0.3) - ramp((tt - 10.7) / 0.3));
      meta = { a: A, v: A * 1.85, s: A * 1.85 * (8.85 - 2) };
      for (let i = 0; i * dt <= 14; i++) {
        const tt = i * dt;
        push(tt, 0.15 + 0.05 * gauss(r), -0.2 + 0.05 * gauss(r), G + acc(tt) + 0.06 * gauss(r));
      }
    }
    return { samples: out, meta };
  }

  // zvuk: ladička A4 (440 Hz) so slabými vyššími harmonickými a šumom → { sr, x (8192 vzoriek), f }
  function demoSound() {
    const r = rng(41), sr = 44100, N = 8192, f = 440, x = new Float64Array(N);
    for (let i = 0; i < N; i++) {
      const tt = i / sr;
      x[i] = 0.3 * Math.sin(2 * Math.PI * f * tt) + 0.04 * Math.sin(2 * Math.PI * 2 * f * tt + 1) +
        0.015 * Math.sin(2 * Math.PI * 3 * f * tt + 2) + 0.002 * gauss(r);
    }
    return { sr, x, f };
  }

  window.SENZORY_LOGIC = { G, rng, sampleDt, resample, smooth, decimate, median, freeFall, period, gyroAxis, pendulum, lift,
    fft, spectrumDb, dominant, peaks, harmonicRows, note, rmsDb, demoMotion, demoSound };
  if (!window.APP) return; // v node len jadro

  /* ---------- rozhranie ---------- */
  const { t, esc } = APP;
  const $ = (id) => document.getElementById(id);
  const n1 = (v) => Math.round(v * 10) / 10;
  const STORE_KEY = 'fyzika.senzory';
  const MAX_S = 60;       // najdlhšie meranie pohybu (s)
  const MAX_SAVE = 3000;  // najviac uložených vzoriek
  const LIVE_WIN = 10;    // okno živého grafu (s)

  // pokusy: kind = senzor, key = predpona textov, tex = vzťah v návode, lessons = lekcie s panelom
  const EXP = {
    'volny-pad': { icon: '🪂', kind: 'motion', key: 'sensFall', tex: 'h = \\tfrac{1}{2}\\,g\\,t^2',
      lessons: ['r7-tiaz', 's1-zrychlenie', 's1-gravitacia', 'v1-kinematika', 'v1-gravitacne-pole'] },
    kyvadlo: { icon: '🪀', kind: 'motion', key: 'sensPend', tex: 'T = 2\\pi\\sqrt{\\dfrac{l}{g}} \\;\\Rightarrow\\; g = \\dfrac{4\\pi^2 l}{T^2}',
      lessons: ['s2-kmitanie', 's1-gravitacia', 'v1-lagrange'] },
    vytah: { icon: '🛗', kind: 'motion', key: 'sensLift', tex: 'a = |\\vec{a}| - g, \\quad v = \\textstyle\\int a\\,\\mathrm{d}t',
      lessons: ['s1-newton', 's1-zrychlenie', 'v1-newton'] },
    zvuk: { icon: '🎵', kind: 'sound', key: 'sensSound', tex: 'f = \\dfrac{1}{T}, \\quad f_k = k \\cdot f_1',
      lessons: ['r4-zvuk', 's2-vlnenie', 'v4-vlnenie', 'v4-frekvencia', 'v12-fourier'] }
  };
  const IDS = Object.keys(EXP);

  // desatinný oddeľovač jazyka rozhrania (ako graf meraní)
  function dec() {
    const l = I18N.getLang();
    let d = '.';
    try { d = CONTENT_I18N.run(l, null, () => CONTENT_I18N.decimal()); } catch (e) { /* bez balíka */ }
    if (d === '.') { try { d = (1.5).toLocaleString(APP.htmlLang ? APP.htmlLang(l) : l).includes(',') ? ',' : '.'; } catch (e) { /* bez Intl */ } }
    return d;
  }
  function fmt(v, d) {
    if (!fin(v)) return '—';
    let r = +v.toFixed(d);
    if (Object.is(r, -0)) r = 0;
    return r.toFixed(d).replace('-', '−').replace('.', dec());
  }
  const signed = (v, d) => (+v.toFixed(d) > 0 ? '+' : '') + fmt(v, d);
  const cents = (c) => (c > 0 ? '+' : c < 0 ? '−' : '±') + Math.abs(c);

  /* ---------- posledné meranie (len v tomto zariadení) ---------- */
  function loadAll() {
    try { const v = JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); return v && typeof v === 'object' ? v : {}; } catch (e) { return {}; }
  }
  function saveLast(id, rec) {
    try { const all = loadAll(); all[id] = rec; localStorage.setItem(STORE_KEY, JSON.stringify(all)); } catch (e) { /* bez úložiska */ }
  }
  function forget(id) {
    try { const all = loadAll(); delete all[id]; localStorage.setItem(STORE_KEY, JSON.stringify(all)); } catch (e) { /* ignorujeme */ }
  }
  const r3 = (v) => Math.round(v * 1000) / 1000;
  const packMotion = (data) => decimate(data, MAX_SAVE).map((s) => [r3(s.t), r3(s.x), r3(s.y), r3(s.z)].concat(s.r ? s.r.map(r3) : []));
  const unpackMotion = (rows) => rows.map((q) => ({ t: q[0], x: q[1], y: q[2], z: q[3], a: Math.hypot(q[1], q[2], q[3]), r: q.length >= 7 ? q.slice(4, 7) : null }));
  function loadLast(id) {
    const v = loadAll()[id];
    if (!v || !v.d) return null;
    if (EXP[id].kind === 'motion' && Array.isArray(v.s) && v.s.length >= 10) return { d: v.d, data: unpackMotion(v.s) };
    if (EXP[id].kind === 'sound' && v.res && fin(v.res.f)) return { d: v.d, res: v.res };
    return null;
  }

  /* ---------- stav stránky pokusu ---------- */
  let S = null;

  function closeAudio() {
    if (!S) return;
    if (S.stream) S.stream.getTracks().forEach((tr) => tr.stop());
    if (S.ctx && S.ctx.close) S.ctx.close().catch(() => {});
    S.stream = null; S.ctx = null; S.an = null;
  }
  function stopAll() {
    if (!S) return;
    if (S.listener) window.removeEventListener('devicemotion', S.listener);
    S.listener = null;
    clearTimeout(S.watch);
    if (S.raf) cancelAnimationFrame(S.raf);
    S.raf = 0;
    closeAudio();
    S.rec = false;
  }
  // mikrofón a senzory sa vypnú pri odchode zo stránky a pri skrytí aplikácie
  window.addEventListener('hashchange', () => { if (S && S.hash !== location.hash) stopAll(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden && S && S.rec) stop(); });

  /* ---------- stránky ---------- */
  function overview() {
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>📱 ${esc(t('sensorsTitle'))}</h1>
      <p class="muted">${esc(t('sensorsIntro'))}</p>
      <p class="notice sens-local">🔒 ${esc(t('sensorsLocal'))}</p>
      <div class="grid sens-cards">${IDS.map((id) => {
        const E = EXP[id];
        return `<a class="card sens-card" href="#/senzory/${id}">
          <h2 class="sens-card-h">${E.icon} ${esc(t(E.key))}</h2>
          <p>${esc(t(E.key + 'Desc'))}</p>
          <span class="meta">${E.kind === 'sound' ? '🎤 ' + esc(t('sensMic')) : '📳 ' + esc(t('sensAcc'))}</span></a>`;
      }).join('')}</div>`);
  }

  function page(id) {
    const E = EXP[id];
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> › <a href="#/senzory">${esc(t('sensorsTitle'))}</a></nav>
      <h1>${E.icon} ${esc(t(E.key))}</h1>
      <p class="muted">${esc(t(E.key + 'Desc'))}</p>
      <section class="block sens-how"><h2>${esc(t('sensHowTo'))}</h2>
        <ol>${[1, 2, 3].map((k) => `<li>${esc(t(E.key + 'Step' + k))}</li>`).join('')}</ol>
        <p class="sens-formula">$${E.tex}$</p></section>
      <div class="notice sens-safety" role="note"><strong>⚠️ ${esc(t('sensSafetyH'))}:</strong> ${esc(t(E.key + 'Safety'))}</div>
      ${id === 'kyvadlo' ? `<p class="sens-len"><label for="sens-len">${esc(t('sensPendLen'))}</label>
        <input type="text" id="sens-len" inputmode="decimal" value="${fmt(0.5, 2)}" autocomplete="off" spellcheck="false"></p>` : ''}
      <div class="actions sens-actions">
        <button type="button" class="btn btn-primary" id="sens-start">▶ ${esc(t('sensStart'))}</button>
        <button type="button" class="btn" id="sens-stop" disabled>■ ${esc(t('sensStop'))}</button>
        <button type="button" class="btn" id="sens-demo">🧪 ${esc(t('sensDemo'))}</button>
        <button type="button" class="btn" id="sens-graph">📈 ${esc(t('sensToGraph'))}</button>
        <button type="button" class="btn btn-small" id="sens-forget" hidden>✕ ${esc(t('sensForget'))}</button>
      </div>
      <p class="sens-status" id="sens-status" role="status"></p>
      <p class="notice sens-warn" id="sens-warn" role="alert" hidden></p>
      <figure class="sens-chart">
        <svg id="sens-svg" class="sens-svg" role="img"></svg>
        <figcaption class="sens-legend" aria-hidden="true">${E.kind === 'sound'
          ? `<span class="sens-key sens-k-spec">${esc(t('sensLegendSpec'))}</span><span class="sens-key sens-k-mark">${esc(t('sensLegendPeak'))}</span>`
          : '<span class="sens-key sens-k-x">a<sub>x</sub></span><span class="sens-key sens-k-y">a<sub>y</sub></span><span class="sens-key sens-k-z">a<sub>z</sub></span><span class="sens-key sens-k-a">|a|</span>'}</figcaption>
      </figure>
      <p class="sens-live" id="sens-live" aria-live="polite" aria-atomic="true"></p>
      <section class="block sens-result" id="sens-result" aria-live="polite"></section>
      <p class="muted small">🔒 ${esc(t('sensorsLocal'))}</p>`);
    S = { id, E, hash: location.hash, rec: false, data: null, snd: null, res: null, src: null, hl: null, last: 0 };
    $('sens-start').addEventListener('click', () => (E.kind === 'sound' ? startSound() : startMotion()));
    $('sens-stop').addEventListener('click', stop);
    $('sens-demo').addEventListener('click', () => { stopAll(); hideWarn(); showDemo(); });
    $('sens-graph').addEventListener('click', toGraph);
    $('sens-forget').addEventListener('click', () => {
      forget(id);
      $('sens-forget').hidden = true;
      stopAll();
      showDemo();
      $('sens-demo').focus();
    });
    if (id === 'kyvadlo') $('sens-len').addEventListener('input', () => { if (!S.rec) analyze(); });
    // na začiatku posledné meranie, inak ukážka; nedostupný senzor sa vysvetlí hneď
    const why = E.kind === 'sound' ? micProblem() : motionProblem();
    if (why) warn(why);
    const last = loadLast(id);
    if (last) {
      if (last.data) S.data = last.data;
      else S.res = last.res;
      S.src = 'last';
      $('sens-forget').hidden = false;
      let date = '';
      try { date = new Date(last.d).toLocaleString(APP.htmlLang(I18N.getLang())); } catch (e) { date = new Date(last.d).toISOString().slice(0, 16); }
      setStatus(t('sensStatusLast', { date }));
      redraw();
    } else showDemo();
  }

  function setButtons() {
    $('sens-start').disabled = S.rec;
    $('sens-stop').disabled = !S.rec;
    $('sens-demo').disabled = S.rec;
    $('sens-graph').disabled = S.rec;
  }
  const setStatus = (s) => { const el = $('sens-status'); if (el) el.textContent = s; };
  function warn(key) { const el = $('sens-warn'); if (!el) return; el.textContent = '⚠️ ' + t(key); el.hidden = false; }
  function hideWarn() { const el = $('sens-warn'); if (el) el.hidden = true; }

  function showDemo() {
    if (S.E.kind === 'sound') {
      const D = demoSound();
      S.snd = { db: spectrumDb(D.x), sr: D.sr, level: rmsDb(D.x) };
      S.res = soundResult(S.snd);
    } else S.data = demoMotion(S.id).samples;
    S.src = 'demo';
    setStatus(t('sensStatusDemo'));
    redraw();
  }

  // senzor nie je k dispozícii: vysvetlenie a ukážkový záznam, aby sa pokus dal prejsť aj bez telefónu
  function unavailable(key) {
    stopAll();
    if (!S || !$('sens-status')) return;
    setButtons();
    warn(key);
    showDemo();
  }

  function motionProblem() {
    if (window.isSecureContext === false) return 'sensNoInsecure';
    if (!('DeviceMotionEvent' in window)) return 'sensNoMotion';
    return null;
  }
  function micProblem() {
    if (window.isSecureContext === false) return 'sensNoInsecure';
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !(window.AudioContext || window.webkitAudioContext)) return 'sensNoMic';
    return null;
  }

  /* ---------- akcelerometer ---------- */
  function startMotion() {
    const why = motionProblem();
    if (why) return unavailable(why);
    hideWarn();
    // iOS: povolenie sa musí vyžiadať priamo po kliknutí
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      const me = S;
      DeviceMotionEvent.requestPermission().then((st) => {
        if (S !== me) return;
        if (st === 'granted') listen(); else unavailable('sensDenied');
      }, () => { if (S === me) unavailable('sensDenied'); });
    } else listen();
  }

  function listen() {
    if (!S || S.rec) return;
    const me = S;
    Object.assign(S, { data: [], src: 'live', rec: true, hl: null, t0: performance.now(), last: 0 });
    S.listener = (e) => {
      const g = e.accelerationIncludingGravity;
      if (!g || g.x == null || !me.rec) return;
      const rr = e.rotationRate && e.rotationRate.alpha != null ? [e.rotationRate.alpha, e.rotationRate.beta, e.rotationRate.gamma] : null;
      const x = +g.x || 0, y = +g.y || 0, z = +g.z || 0;
      me.data.push({ t: (performance.now() - me.t0) / 1000, x, y, z, a: Math.sqrt(x * x + y * y + z * z), r: rr });
    };
    window.addEventListener('devicemotion', S.listener);
    // počítač má často DeviceMotionEvent, ale žiadne údaje neposiela
    S.watch = setTimeout(() => { if (S === me && me.rec && !me.data.length) unavailable('sensNoSilent'); }, 2000);
    $('sens-result').innerHTML = '';
    setButtons();
    setStatus(t('sensStatusRec', { s: fmt(0, 0) }));
    S.raf = requestAnimationFrame(loop);
  }

  function loop() {
    if (!S || !S.rec) return;
    if (!$('sens-svg')) { stopAll(); return; }
    const el = (performance.now() - S.t0) / 1000;
    const now = performance.now(), tick = now - S.last > 1000;
    if (tick) S.last = now;
    if (S.E.kind === 'motion') {
      drawMotion(true);
      if (tick) {
        setStatus(t('sensStatusRec', { s: fmt(el, 0) }));
        const s = S.data[S.data.length - 1];
        if (s) $('sens-live').textContent = `x: ${fmt(s.x, 2)} · y: ${fmt(s.y, 2)} · z: ${fmt(s.z, 2)} · |a| = ${fmt(s.a, 2)} m/s²`;
      }
      if (el > MAX_S) { stop(); return; }
    } else soundFrame(tick);
    S.raf = requestAnimationFrame(loop);
  }

  function stop() {
    if (!S) return;
    const was = S.rec;
    if (S.E.kind === 'sound' && S.an && S.fbuf) {
      S.snd = { db: Float64Array.from(S.fbuf), sr: S.sr, level: S.level };
      S.res = soundResult(S.snd);
    }
    stopAll();
    if (!$('sens-status')) return;
    setButtons();
    if (!was) return;
    $('sens-live').textContent = '';
    if (S.E.kind === 'motion') {
      const n = S.data.length;
      if (n < 10) { showDemo(); return; }
      setStatus(t('sensStatusDone', { n, s: fmt(S.data[n - 1].t - S.data[0].t, 1) }));
      saveLast(S.id, { d: Date.now(), s: packMotion(S.data) });
    } else {
      setStatus(t('sensStatusSoundDone'));
      if (S.res && S.res.dom) {
        saveLast(S.id, { d: Date.now(), res: { f: r3(S.res.dom.f), db: n1(S.res.dom.db), level: n1(S.res.level), peaks: S.res.peaks.map((p) => [r3(p.f), n1(p.db)]) } });
      }
    }
    S.src = 'live';
    $('sens-forget').hidden = false;
    redraw();
  }

  /* ---------- mikrofón ---------- */
  function startSound() {
    const why = micProblem();
    if (why) return unavailable(why);
    hideWarn();
    // AudioContext treba vytvoriť priamo po kliknutí (iOS)
    const AC = window.AudioContext || window.webkitAudioContext;
    let ctx;
    try { ctx = new AC(); } catch (e) { return unavailable('sensNoMic'); }
    const me = S;
    S.ctx = ctx;
    navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } }).then((stream) => {
      // medzitým sa odišlo zo stránky alebo zastavilo → mikrofón hneď vypnúť
      if (S !== me || me.ctx !== ctx) { stream.getTracks().forEach((tr) => tr.stop()); if (ctx.close) ctx.close().catch(() => {}); return; }
      me.stream = stream;
      if (ctx.resume) ctx.resume().catch(() => {});
      const an = ctx.createAnalyser();
      an.fftSize = 8192;
      an.smoothingTimeConstant = 0.4;
      an.minDecibels = -120;
      an.maxDecibels = 0;
      ctx.createMediaStreamSource(stream).connect(an);
      Object.assign(me, { an, sr: ctx.sampleRate, fbuf: new Float32Array(an.frequencyBinCount), tbuf: new Float32Array(an.fftSize),
        rec: true, src: 'live', t0: performance.now(), last: 0, level: -120, res: null, snd: null });
      $('sens-result').innerHTML = '';
      setButtons();
      setStatus(t('sensStatusListen'));
      me.raf = requestAnimationFrame(loop);
    }, (err) => {
      if (S !== me) return;
      unavailable(err && (err.name === 'NotAllowedError' || err.name === 'SecurityError') ? 'sensMicDenied' : 'sensNoMic');
    });
  }

  function soundFrame(tick) {
    const an = S.an;
    an.getFloatFrequencyData(S.fbuf);
    if (an.getFloatTimeDomainData) an.getFloatTimeDomainData(S.tbuf);
    else {
      const b = new Uint8Array(an.fftSize);
      an.getByteTimeDomainData(b);
      for (let i = 0; i < b.length; i++) S.tbuf[i] = (b[i] - 128) / 128;
    }
    S.level = rmsDb(S.tbuf);
    let D = dominant(S.fbuf, S.sr);
    if (D && !D.clear) D = null;
    drawSpectrum(S.fbuf, S.sr, D, null);
    if (tick) $('sens-live').textContent = soundText(D, S.level);
  }

  function soundResult(snd) {
    const D = dominant(snd.db, snd.sr);
    return { dom: D && D.clear ? D : null, peaks: peaks(snd.db, snd.sr), level: snd.level };
  }
  function soundText(D, level) {
    if (!D) return t('sensSoundQuiet', { db: fmt(level, 0) });
    const N = note(D.f);
    return t('sensSoundLive', { f: fmt(D.f, 1), note: N.name, c: cents(N.cents), db: fmt(level, 0) });
  }

  /* ---------- vyhodnotenie ---------- */
  function lenValue() {
    const el = $('sens-len');
    const v = el ? parseFloat(String(el.value).replace(',', '.')) : NaN;
    const ok = v > 0 && v < 100;
    if (el) el.setAttribute('aria-invalid', ok ? 'false' : 'true');
    return ok ? v : null;
  }

  function analyze() {
    const box = $('sens-result');
    if (!box) return;
    let html = '';
    S.hl = null;
    if (S.E.kind === 'motion') {
      const D = S.data || [];
      if (D.length < 10) { box.innerHTML = ''; return; }
      const ts = D.map((s) => s.t), as = D.map((s) => s.a);
      if (S.id === 'volny-pad') {
        const F = freeFall(ts, as);
        S.hl = F;
        html = F ? `<p>${esc(t('sensFallResult', { t: fmt(F.T, 3), h: fmt(F.h, 2), v: fmt(F.v, 1) }))}</p><p class="muted small">${esc(t('sensFallNote'))}</p>`
          : `<p>${esc(t('sensFallNone'))}</p>`;
      } else if (S.id === 'kyvadlo') {
        const l = lenValue(), P = pendulum(D, l);
        html = P ? `<p>${esc(t('sensPendResult', { T: fmt(P.T, 3), f: fmt(P.f, 3), n: fmt(P.cycles, 0) }))}</p>
          <p>${esc(l ? t('sensPendG', { l: fmt(l, 2), g: fmt(P.g, 2) }) : t('sensPendNoLen'))}</p>
          <p class="muted small">${esc(t(P.src === 'gyro' ? 'sensPendSrcGyro' : 'sensPendSrcAcc'))}</p>`
          : `<p>${esc(t('sensPendNone'))}</p>`;
      } else {
        const L = lift(ts, as);
        html = L ? `<p>${esc(t('sensLiftResult', { g0: fmt(L.g0, 2), up: fmt(Math.max(0, L.up), 2), down: fmt(Math.max(0, -L.down), 2), v: fmt(Math.abs(L.v), 1), s: signed(L.s, 1) }))}</p>
          <p class="muted small">${esc(t('sensLiftNote'))}</p>` : '';
      }
    } else {
      const R = S.res;
      if (S.src === 'last' && R && fin(R.f)) html = soundResHtml({ f: R.f }, (R.peaks || []).map((p) => ({ f: p[0], db: p[1] })), R.level);
      else if (R && R.dom) html = soundResHtml(R.dom, R.peaks, R.level);
      else if (R) html = `<p>${esc(t('sensSoundNone'))}</p>`;
    }
    box.innerHTML = html ? `<h2>${esc(t('sensResultH'))}</h2>${html}` : '';
  }
  function soundResHtml(D, pk, level) {
    const N = note(D.f);
    return `<p>${esc(t('sensSoundResult', { f: fmt(D.f, 1), note: N.name, c: cents(N.cents), db: fmt(level, 0) }))}</p>
      ${pk.length > 1 ? `<p>${esc(t('sensSoundPeaks', { list: pk.map((p) => fmt(p.f, 1)).join('; ') }))}</p>` : ''}
      <p class="muted small">${esc(t('sensSoundNote'))}</p>`;
  }

  function redraw() {
    analyze();
    if (S.E.kind === 'motion') drawMotion(false);
    else if (S.src === 'last' && S.res && fin(S.res.f)) drawSpectrum(null, 44100, { f: S.res.f }, (S.res.peaks || []).map((p) => ({ f: p[0], db: p[1] })));
    else if (S.snd) drawSpectrum(S.snd.db, S.snd.sr, S.res && S.res.dom, null);
  }

  /* ---------- grafy (SVG) ---------- */
  function niceStep(raw) {
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    for (const m of [1, 2, 5, 10]) if (m * p >= raw * (1 - 1e-9)) return m * p;
    return 10 * p;
  }
  function svgBox(svg) {
    const w = (svg.parentNode && svg.parentNode.clientWidth) || 560;
    const W = Math.round(Math.min(Math.max(w, 300), 760));
    return { W, H: Math.round(W < 480 ? W * 0.72 : W * 0.46) };
  }
  const pathOf = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${n1(x)} ${n1(y)}`).join('');
  const decs = (s) => Math.max(0, -Math.floor(Math.log10(s) + 1e-9));

  function drawMotion(live) {
    const svg = $('sens-svg');
    if (!svg) return;
    const { W, H } = svgBox(svg);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const L = 44, R = 10, T = 12, B = 30;
    const D = S.data || [];
    const tEnd = D.length ? D[D.length - 1].t : 0;
    const t1 = live ? Math.max(LIVE_WIN, tEnd) : Math.max(tEnd, 1), t0 = live ? t1 - LIVE_WIN : (D.length ? D[0].t : 0);
    const vis = D.filter((s) => s.t >= t0 && s.t <= t1);
    let lo = -2, hi = 12;
    vis.forEach((s) => { lo = Math.min(lo, s.x, s.y, s.z); hi = Math.max(hi, s.a); });
    const sy = niceStep((hi - lo) / 5);
    lo = Math.floor(lo / sy) * sy; hi = Math.ceil(hi / sy) * sy;
    const sx = niceStep((t1 - t0) / 6);
    const X = (v) => L + (v - t0) / (t1 - t0 || 1) * (W - L - R);
    const Y = (v) => H - B - (v - lo) / (hi - lo) * (H - T - B);
    let g = '';
    for (let k = Math.ceil(t0 / sx - 1e-9); k * sx <= t1 + 1e-9; k++) {
      const px = n1(X(k * sx));
      g += `<line class="f-grid" x1="${px}" y1="${T}" x2="${px}" y2="${H - B}"/><text class="f-small" x="${px}" y="${H - B + 15}" text-anchor="middle">${fmt(k * sx, decs(sx))}</text>`;
    }
    for (let k = Math.round(lo / sy); k * sy <= hi + 1e-9; k++) {
      const v = k * sy, py = n1(Y(v));
      g += `<line class="${k === 0 ? 'f-axis' : 'f-grid'}" x1="${L}" y1="${py}" x2="${W - R}" y2="${py}"/><text class="f-small" x="${L - 5}" y="${n1(py + 4)}" text-anchor="end">${fmt(v, decs(sy))}</text>`;
    }
    g += `<text class="f-small sens-axlab" x="${W - R}" y="${H - 3}" text-anchor="end">t (s)</text><text class="f-small sens-axlab" x="${L + 4}" y="${T + 10}">a (m/s²)</text>`;
    const hl = !live && S.hl ? `<rect class="sens-hl" x="${n1(X(S.hl.t0))}" y="${T}" width="${n1(Math.max(1, X(S.hl.t1) - X(S.hl.t0)))}" height="${H - T - B}"/>` : '';
    const pts = decimate(vis, Math.round((W - L - R) * 1.5));
    const line = (k, cls) => `<path class="sens-line ${cls}" d="${pathOf(pts.map((s) => [X(s.t), Y(s[k])]))}"/>`;
    svg.innerHTML = `<defs><clipPath id="sens-clip"><rect x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}"/></clipPath></defs>
      <rect class="sens-bg" x="0" y="0" width="${W}" height="${H}"/>${hl}${g}
      <g clip-path="url(#sens-clip)">${pts.length > 1 ? line('x', 'sens-lx') + line('y', 'sens-ly') + line('z', 'sens-lz') + line('a', 'sens-la') : ''}</g>`;
    const amax = vis.reduce((m, s) => Math.max(m, s.a), 0);
    svg.setAttribute('aria-label', t('sensChartAcc', { n: vis.length, s: fmt(vis.length ? vis[vis.length - 1].t - vis[0].t : 0, 1), max: fmt(amax, 1) }));
  }

  // spektrum: vodorovná os logaritmická 50 Hz – 5 kHz, zvislá −120 až 0 dB; sticks = len vrcholy (uložené meranie)
  function drawSpectrum(db, sr, mark, sticks) {
    const svg = $('sens-svg');
    if (!svg) return;
    const { W, H } = svgBox(svg);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const L = 44, R = 10, T = 12, B = 30, F1 = 50, F2 = Math.min(5000, sr / 2), D1 = -120, D2 = 0;
    const X = (f) => L + Math.log(f / F1) / Math.log(F2 / F1) * (W - L - R);
    const Y = (d) => H - B - (Math.max(D1, Math.min(D2, d)) - D1) / (D2 - D1) * (H - T - B);
    let g = '';
    [50, 100, 200, 500, 1000, 2000, 5000].filter((f) => f <= F2).forEach((f) => {
      const px = n1(X(f));
      g += `<line class="f-grid" x1="${px}" y1="${T}" x2="${px}" y2="${H - B}"/><text class="f-small" x="${px}" y="${H - B + 15}" text-anchor="middle">${f >= 1000 ? f / 1000 + 'k' : f}</text>`;
    });
    for (let d = D1; d <= D2; d += 20) {
      const py = n1(Y(d));
      g += `<line class="f-grid" x1="${L}" y1="${py}" x2="${W - R}" y2="${py}"/><text class="f-small" x="${L - 5}" y="${n1(py + 4)}" text-anchor="end">${fmt(d, 0)}</text>`;
    }
    g += `<text class="f-small sens-axlab" x="${W - R}" y="${H - 3}" text-anchor="end">f (Hz)</text><text class="f-small sens-axlab" x="${L + 4}" y="${T + 10}">dB</text>`;
    let curve = '';
    if (db) {
      // každé 2 px obrazu: najvyššia hodnota z binov, ktoré naň pripadnú
      const n = db.length, bin = sr / (2 * n), pts = [];
      for (let px = L; px <= W - R; px += 2) {
        const fa = F1 * Math.pow(F2 / F1, (px - L) / (W - L - R)), fb = F1 * Math.pow(F2 / F1, (px + 2 - L) / (W - L - R));
        const k1 = Math.max(1, Math.round(fa / bin)), k2 = Math.min(n - 1, Math.max(k1, Math.round(fb / bin) - 1));
        let m = -Infinity;
        for (let k = k1; k <= k2; k++) if (db[k] > m) m = db[k];
        if (fin(m)) pts.push([px, Y(m)]);
      }
      curve = `<path class="sens-spec" d="${pathOf(pts)}"/>`;
    }
    if (sticks) curve += sticks.filter((p) => p.f >= F1 && p.f <= F2).map((p) => `<line class="sens-stick" x1="${n1(X(p.f))}" y1="${H - B}" x2="${n1(X(p.f))}" y2="${n1(Y(p.db))}"/>`).join('');
    if (mark && mark.f >= F1 && mark.f <= F2) {
      const px = n1(X(mark.f)), right = px > W - 90;
      curve += `<line class="sens-mark" x1="${px}" y1="${T}" x2="${px}" y2="${H - B}"/>
        <text class="f-small sens-mark-t" x="${right ? px - 5 : px + 5}" y="${T + 24}" text-anchor="${right ? 'end' : 'start'}">${fmt(mark.f, 1)} Hz</text>`;
    }
    svg.innerHTML = `<rect class="sens-bg" x="0" y="0" width="${W}" height="${H}"/>${g}${curve}`;
    svg.setAttribute('aria-label', t('sensChartSpec', { f1: F1, f2: Math.round(F2), f: mark ? fmt(mark.f, 1) : '—' }));
  }

  /* ---------- export do grafu meraní ---------- */
  // { x: {q, u}, y: {q, u}, rows: [[číslo, číslo]], model } – formát, ktorý prijíma GRAF_LOGIC.importData
  function graphData() {
    if (S.E.kind === 'sound') {
      const R = S.res;
      const last = S.src === 'last' && R && fin(R.f);
      const pk = last ? (R.peaks || []).map((p) => ({ f: p[0], db: p[1] })) : (R && R.peaks) || [];
      const rows = harmonicRows(pk);
      if (!rows.length && last) rows.push([1, R.f]);
      if (!rows.length && R && R.dom) rows.push([1, R.dom.f]);
      return rows.length ? { x: { q: 'k', u: '' }, y: { q: 'f', u: 'Hz' }, rows: rows.map(([k, f]) => [k, +f.toFixed(1)]), model: 'prop' } : null;
    }
    const D = S.data || [];
    if (D.length < 10) return null;
    const t0 = D[0].t, ts = D.map((s) => s.t), as = D.map((s) => s.a);
    const row = (s, v, d) => [+(s.t - t0).toFixed(3), +v.toFixed(d)];
    if (S.id === 'volny-pad') {
      const F = freeFall(ts, as);
      const part = F ? D.filter((s) => s.t >= F.t0 - 0.3 && s.t <= F.t1 + 0.3) : D;
      return { x: { q: 't', u: 's' }, y: { q: '|a|', u: 'm/s²' }, rows: decimate(part, 150).map((s) => row(s, s.a, 2)), model: 'none' };
    }
    if (S.id === 'kyvadlo') {
      const P = pendulum(D, lenValue());
      if (P && P.src === 'gyro') return { x: { q: 't', u: 's' }, y: { q: 'ω', u: '°/s' }, rows: decimate(D, 200).map((s) => row(s, s.r[P.ax], 1)), model: 'none' };
      return { x: { q: 't', u: 's' }, y: { q: '|a|', u: 'm/s²' }, rows: decimate(D, 200).map((s) => row(s, s.a, 2)), model: 'none' };
    }
    const Lf = lift(ts, as);
    return { x: { q: 't', u: 's' }, y: { q: 'a', u: 'm/s²' }, rows: decimate(D.map((s, i) => row(s, Lf.a[i], 2)), 150), model: 'none' };
  }

  function toGraph() {
    const d = graphData();
    if (!d) { APP.toast(esc(t('sensNoData'))); return; }
    stopAll();
    if (window.GRAF_LOGIC && typeof GRAF_LOGIC.importData === 'function') {
      GRAF_LOGIC.importData(d);
      location.hash = '#/graf/meranie';
      return;
    }
    // náhradná cesta: stav grafu cez localStorage (fyzika.graf) a nové načítanie stránky,
    // lebo graf.js si stav, ktorý už má v pamäti, z úložiska znova nenačíta
    const cell = (v) => String(v).replace('.', dec());
    try {
      localStorage.setItem('fyzika.graf', JSON.stringify({ x: d.x, y: d.y, rows: d.rows.map((r) => r.map(cell)), model: d.model, sample: null }));
    } catch (e) { APP.toast(esc(t('sensNoData'))); return; }
    try { history.pushState(null, '', '#/graf/meranie'); location.reload(); } catch (e) { location.hash = '#/graf/meranie'; }
  }

  /* ---------- registrácia ---------- */
  APP.route('senzory', (parts) => {
    stopAll();
    S = null;
    if (parts[0] && EXP[parts[0]]) page(parts[0]);
    else overview();
  });
  APP.addMenu({ href: '#/senzory', icon: '📱', key: 'sensorsMenu' });

  // panel v lekcii: pokusy s mobilom k lekcii
  APP.addLessonPanel((L) => {
    const ids = IDS.filter((id) => EXP[id].lessons.includes(L.id));
    if (!ids.length) return '';
    return `<aside class="sens-panel" aria-label="${esc(t('sensorsTry'))}">
      <h3 class="sens-panel-h">📱 ${esc(t('sensorsTry'))}</h3>
      <p class="muted small">${esc(t('sensorsTryDesc'))}</p>
      <p class="sens-panel-links">${ids.map((id) => `<a class="btn btn-small" href="#/senzory/${id}">${EXP[id].icon} ${esc(t(EXP[id].key))}</a>`).join(' ')}</p>
    </aside>`;
  });
})();
