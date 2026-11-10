/* Virtuálne laboratórium (#/laboratorium, #/laboratorium/<id>, #/laboratorium/<id>/protokol): laboratórne
   práce s interaktívnou SVG aparatúrou. Meradlá dávajú údaje so šumom (dielik stupnice, trieda presnosti,
   reakčný čas, Poissonov šum), skutočné hodnoty sa losujú deterministicky podľa semienka práce.
   Žiak zapisuje merania do tabuľky, zadá výsledok s neistotou a vyhodnotenie ho porovná s hodnotou
   z jeho vlastných údajov aj s tabuľkovou hodnotou. Protokol sa dá vytlačiť, dáta otvoriť v #/graf.
   Výpočtové jadro je v window.LAB_LOGIC (overiteľné v node), postup v localStorage pod kľúčom fyzika.lab. */
(function () {
  'use strict';

  /* ---------- výpočtové jadro ---------- */
  const fin = Number.isFinite;
  const PI = Math.PI;
  const G0 = 9.81;
  const deg = (x) => x * PI / 180;
  const rad2deg = (x) => x * 180 / PI;
  const roundTo = (v, s) => Math.round(v / s) * s;
  const clean = (v, d) => +v.toFixed(d);

  // pseudonáhodný generátor (mulberry32) a zmiešanie čísel a reťazcov do semienka
  function rng(seed) {
    return () => {
      seed = (seed + 0x6D2B79F5) | 0;
      let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }
  function mix() {
    let h = 2166136261;
    for (const a of arguments) {
      const v = typeof a === 'string' ? [...a].reduce((s, c) => Math.imul(s ^ c.charCodeAt(0), 31) | 0, 7) : Math.round(a * 1000) | 0;
      h = Math.imul(h ^ v, 16777619);
      h ^= h >>> 13;
    }
    return h | 0;
  }
  // generátor pre konkrétnu situáciu: semienko práce + značky (napr. dĺžka kyvadla, poradie merania)
  const R = function () { return rng(mix.apply(null, arguments)); };
  // normálne rozdelenie N(0, 1) (Boxova-Mullerova metóda)
  function gauss(r) {
    const u = Math.max(r(), 1e-12), v = r();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * PI * v);
  }
  // Poissonovo rozdelenie: pri malej strednej hodnote Knuthov algoritmus, inak normálne priblíženie
  function poisson(r, lam) {
    if (!(lam > 0)) return 0;
    if (lam < 30) {
      const L = Math.exp(-lam);
      let k = 0, p = 1;
      do { k++; p *= r(); } while (p > L);
      return k - 1;
    }
    return Math.max(0, Math.round(lam + Math.sqrt(lam) * gauss(r)));
  }
  const pick = (r, arr) => arr[Math.floor(r() * arr.length) % arr.length];

  // Číslo z bunky tabuľky (desatinná čiarka aj bodka); prázdne → null, chyba → NaN
  function parseNum(s) {
    if (typeof s === 'number') return s;
    if (window.GRAF_LOGIC) return GRAF_LOGIC.parseNum(s);
    const v = String(s == null ? '' : s).trim().replace(/[−–]/g, '-').replace(/\s+/g, '').replace(',', '.');
    if (!v) return null;
    return /^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(v) ? parseFloat(v) : NaN;
  }

  /* Preloženie závislosti s neistotou parametrov. Hodnoty parametrov dáva GRAF_LOGIC.fit (ak je načítaný),
     neistoty (smerodajné odchýlky parametrov) sa počítajú z rezíduí. */
  function fitU(model, pts) {
    pts = pts.filter((p) => fin(p[0]) && fin(p[1]));
    const n = pts.length;
    const xs = pts.map((p) => p[0]);
    if (model === 'exp') {
      if (pts.some((p) => !(p[1] > 0))) return null;
      const L = fitU('lin', pts.map((p) => [p[0], Math.log(p[1])]));
      return L && { p: { A: Math.exp(L.p.q), b: L.p.k }, u: { b: L.u.k }, n };
    }
    if (model === 'prop') {
      if (n < 1) return null;
      const sxx = xs.reduce((s, x) => s + x * x, 0);
      if (!(sxx > 0)) return null;
      let k = pts.reduce((s, p) => s + p[0] * p[1], 0) / sxx;
      if (window.GRAF_LOGIC && n >= 2) { const F = GRAF_LOGIC.fit('prop', pts); if (F && F.p) k = F.p.k; }
      const res = pts.reduce((s, p) => s + (p[1] - k * p[0]) ** 2, 0);
      return { p: { k }, u: { k: n > 1 ? Math.sqrt(res / (n - 1) / sxx) : 0 }, n };
    }
    // lineárna y = k·x + q
    if (n < 2) return null;
    const mx = xs.reduce((s, x) => s + x, 0) / n, my = pts.reduce((s, p) => s + p[1], 0) / n;
    let sxx = 0, sxy = 0;
    pts.forEach(([x, y]) => { sxx += (x - mx) ** 2; sxy += (x - mx) * (y - my); });
    if (!(sxx > 0)) return null;
    let k = sxy / sxx, q = my - k * mx;
    if (window.GRAF_LOGIC && n >= 3) { const F = GRAF_LOGIC.fit('lin', pts); if (F && F.p) { k = F.p.k; q = F.p.q; } }
    const res = pts.reduce((s, p) => s + (p[1] - k * p[0] - q) ** 2, 0);
    const s2 = n > 2 ? res / (n - 2) : 0;
    return { p: { k, q }, u: { k: Math.sqrt(s2 / sxx), q: Math.sqrt(s2 * (1 / n + mx * mx / sxx)) }, n };
  }

  /* ---------- tabuľkové hodnoty ---------- */
  const DENS = { al: 2700, zn: 7140, fe: 7850, brass: 8500, cu: 8960, pb: 11340 };   // kg/m³
  const NIDX = { plexi: 1.49, crown: 1.52, pc: 1.585, flint: 1.62 };                  // index lomu (žltá čiara Na)
  const ISO = [['²³⁴ᵐPa', 69.5], ['²⁸Al', 134.7], ['¹⁰⁸Ag', 142.9], ['¹³⁷ᵐBa', 153.1]]; // polčas v s
  const E12 = [100, 120, 150, 180, 220, 270, 330, 390, 470];                          // Ω
  const LENS_D = [8, 10, 12.5];                                                        // optická mohutnosť v D
  const C_WATER = 4180;                                                                // J/(kg·K)
  // rozsahy a dieliky analógových meradiel (trieda presnosti 1,5)
  const U_RANGES = [3, 10, 30], I_RANGES = [10, 30, 100, 300];
  const U_DIV = { 3: 0.1, 10: 0.2, 30: 1 }, I_DIV = { 10: 0.2, 30: 1, 100: 2, 300: 10 };
  const CLS = 1.5;
  const DT_HEAT = 30, HEAT_STEPS = 10, P_HEAT = 300;     // ohrev: krok 30 s, najviac 10 krokov, príkon 300 W
  const DT_COUNT = 20, COUNT_MAX = 20, T_BG = 100;       // rozpad: interval 20 s, najviac 20 intervalov, pozadie 100 s
  const BENCH = 150;                                     // dĺžka optickej lavice v cm

  /* ---------- definície prác ----------
     cols: stĺpce tabuľky [značka, jednotka, desatinné miesta]; derived: odvodené stĺpce; level: zs/ss/vs;
     lessons: lekcie s odkazom; q/unit: výsledná veličina; minRel: najmenšia tolerovaná relatívna odchýlka
     výsledku (zaokrúhľovanie); sysRel: očakávaná systematická odchýlka od tabuľkovej hodnoty (tolerancia
     výrobku, zliatina…); minRows: najmenší počet platných meraní na vyhodnotenie; ctrl: počiatočné nastavenie. */
  const LABS = {
    hustota: {
      icon: '⚖️', level: 'zs', lessons: ['r5-hustota', 'r6-hustota', 'r5-merania', 'r6-vztlak'],
      cols: [['m', 'g', 1], ['V₁', 'ml', 1], ['V₂', 'ml', 1]], derived: [['V', 'cm³', 1], ['ρ', 'g/cm³', 3]],
      q: 'ρ', unit: 'kg/m³', minRel: 0.02, sysRel: 0.02, minRows: 2, ctrl: { piece: 1 },
      tex: '\\rho = \\dfrac{m}{V}, \\quad V = V_2 - V_1'
    },
    pruzina: {
      icon: '🪝', level: 'zs', lessons: ['r7-sila', 'r7-tiaz', 's1-newton', 'v1-newton'],
      cols: [['m', 'g', 0], ['Δl', 'mm', 0]], derived: [['F', 'N', 3], ['F/Δl', 'N/m', 1]],
      q: 'k', unit: 'N/m', minRel: 0.02, sysRel: 0.1, minRows: 3, ctrl: { n: 0 },
      tex: 'F = m\\,g = k\\,\\Delta l, \\quad g = 9{,}81\\,\\text{m/s}^2'
    },
    ohm: {
      icon: '🔌', level: 'zs', lessons: ['r8-odpor', 'r9-ohmov-zakon', 'r9-vypocty', 's3-ohm', 's3-prud-napatie', 'v3-elektricky-prud'],
      cols: [['U', 'V', 2], ['I', 'mA', 1]], derived: [['U/I', 'Ω', 1]],
      q: 'R', unit: 'Ω', minRel: 0.02, sysRel: 0.07, minRows: 3, ctrl: { U: 2, rU: 10, rI: 100 },
      tex: 'U = R\\,I, \\quad \\Delta U = \\dfrac{1{,}5}{100}\\,U_{\\max}'
    },
    teplo: {
      icon: '♨️', level: 'zs', lessons: ['r6-teplo', 'r8-vnutorna-energia', 's2-teplo', 'v2-teplota-tlak'],
      cols: [['t', 's', 0], ['T', '°C', 1]], derived: [['ΔT', '°C', 1]],
      q: 'c', unit: 'J/(kg·K)', minRel: 0.03, sysRel: 0.03, minRows: 3, ctrl: { m: 0.4, step: 0 },
      tex: 'P\\,t = m\\,c\\,\\Delta T \\;\\Rightarrow\\; c = \\dfrac{P}{m\\,b}, \\quad b = \\dfrac{\\Delta T}{t}'
    },
    kyvadlo: {
      icon: '⏱️', level: 'ss', lessons: ['s2-kmitanie', 's1-gravitacia', 'r7-tiaz', 'v1-gravitacne-pole'],
      cols: [['l', 'm', 2], ['t₁₀', 's', 2]], derived: [['T', 's', 3], ['T²', 's²', 3]],
      q: 'g', unit: 'm/s²', minRel: 0.015, sysRel: 0.006, minRows: 3, ctrl: { l: 0.5, k: 0, on: false },
      tex: 'T = 2\\pi\\sqrt{\\dfrac{l}{g}} \\;\\Rightarrow\\; T^2 = \\dfrac{4\\pi^2}{g}\\,l'
    },
    lom: {
      icon: '🔦', level: 'ss', lessons: ['r7-odraz', 's3-odraz-lom', 'v4-geometricka-optika'],
      cols: [['α', '°', 1], ['β', '°', 1]], derived: [['sin α', '', 3], ['sin β', '', 3], ['n', '', 3]],
      q: 'n', unit: '', minRel: 0.015, sysRel: 0.01, minRows: 3, ctrl: { a: 30 },
      tex: 'n = \\dfrac{\\sin\\alpha}{\\sin\\beta}'
    },
    sosovka: {
      icon: '🔍', level: 'ss', lessons: ['r7-zrkadla', 's3-sosovky', 'v4-zobrazovanie'],
      cols: [['a', 'cm', 1], ['a′', 'cm', 1]], derived: [['f', 'cm', 2]],
      q: 'f', unit: 'cm', minRel: 0.02, sysRel: 0.04, minRows: 2, ctrl: { a: 30, s: 60, k: 0 },
      tex: '\\dfrac{1}{f} = \\dfrac{1}{a} + \\dfrac{1}{a\'} \\;\\Rightarrow\\; f = \\dfrac{a\\,a\'}{a + a\'}'
    },
    rozpad: {
      icon: '☢️', level: 'vs', lessons: ['s4-radioaktivita', 'v7-radioaktivita', 'v7-jadrova-energetika'],
      cols: [['t', 's', 0], ['N', '', 0]], derived: [['N − N_b', '', 1], ['ln(N − N_b)', '', 3]],
      q: 'T½', unit: 's', minRel: 0.03, sysRel: 0, minRows: 4, ctrl: { i: -1, bg: false },
      tex: 'N - N_b = N_0\\,e^{-\\lambda t}, \\quad T_{1/2} = \\dfrac{\\ln 2}{\\lambda}'
    }
  };
  const IDS = Object.keys(LABS);

  /* Skutočné (skryté) hodnoty práce pre semienko: ref = čo dá ideálne spracovanie dokonalých údajov,
     tab = tabuľková/nominálna hodnota, src = údaje pre text zdroja tabuľkovej hodnoty. */
  function truth(id, seed) {
    const r = R(seed, id, 'truth'), g = () => gauss(r), u = () => r();
    switch (id) {
      case 'hustota': {
        const mat = pick(r, Object.keys(DENS));
        const rho = DENS[mat] * (1 + 0.008 * g());
        const pieces = [0, 1, 2, 3, 4, 5].map(() => clean(8 + 30 * u(), 3));
        return { mat, rho, pieces, V1: clean(45 + 10 * u(), 2), ref: rho, tab: DENS[mat], src: { mat } };
      }
      case 'pruzina': {
        const nom = 20 + 5 * Math.floor(u() * 9);
        const k = nom * (1 + 0.08 * (2 * u() - 1));
        const w = Array.from({ length: 8 }, () => 50 * (1 + 0.004 * g()));   // skutočné hmotnosti závaží v g
        return { k, w, ref: k, tab: nom, src: { nom } };
      }
      case 'ohm': {
        const nom = pick(r, E12);
        const Rr = nom * (1 + 0.04 * (2 * u() - 1));
        // kalibračná chyba rozsahu: zosilnenie v rámci triedy presnosti
        const gU = {}, gI = {};
        U_RANGES.forEach((x) => { gU[x] = 1 + 0.006 * (2 * u() - 1); });
        I_RANGES.forEach((x) => { gI[x] = 1 + 0.006 * (2 * u() - 1); });
        return { R: Rr, gU, gI, ref: Rr, tab: nom, src: { nom } };
      }
      case 'teplo': {
        const eta = 0.86 + 0.1 * u(), C = 60 + 80 * u(), T0 = clean(18 + 5 * u(), 2);
        // efektívna hodnota, ktorú dá ideálne spracovanie: časť tepla ide do nádoby a do okolia
        return { eta, C, T0, P: P_HEAT, refFor: (m) => (m * C_WATER + C) / (eta * m), tab: C_WATER, src: {} };
      }
      case 'kyvadlo': {
        const gg = 9.78 + 0.05 * u();
        return { g: gg, ref: gg, tab: G0, src: {} };
      }
      case 'lom': {
        const mat = pick(r, Object.keys(NIDX));
        const n = NIDX[mat] * (1 + 0.003 * g());
        return { mat, n, ref: n, tab: NIDX[mat], src: { mat } };
      }
      case 'sosovka': {
        const D = pick(r, LENS_D), nom = 100 / D;
        const f = nom * (1 + 0.03 * (2 * u() - 1));
        return { D, f, ref: f, tab: nom, src: { d: D } };
      }
      case 'rozpad': {
        const [iso, h] = pick(r, ISO);
        const A0 = 200 + 200 * u(), b = 0.4 + 0.5 * u();
        return { iso, h, A0, b, ref: h, tab: h, src: { iso } };
      }
    }
    return null;
  }

  /* Údaj meradiel pri nastavení ctrl. k = poradie opakovaného merania (stopky).
     Vracia { vals: {veličina: číslo} | null, show: skutočné hodnoty pre kreslenie, over…: prekročený rozsah,
     setup: podmienky merania (hmotnosť vody, príkon, pozadie) }. */
  function read(id, seed, ctrl, k = 0) {
    const T = truth(id, seed);
    switch (id) {
      case 'hustota': {
        const p = Math.min(6, Math.max(1, ctrl.piece | 0)), V = T.pieces[p - 1];
        const r = R(seed, id, 'piece', p);
        const m = T.rho / 1000 * V;
        const V2 = T.V1 + V;
        // váhy s rozlíšením 0,1 g; hladina sa odčíta na pol dielika (dielik 1 ml), oko sa mýli o ~0,2 ml
        return {
          vals: { m: clean(roundTo(m + 0.03 * gauss(r), 0.1), 1), V1: clean(roundTo(T.V1 + 0.2 * gauss(r), 0.5), 1), V2: clean(roundTo(V2 + 0.2 * gauss(r), 0.5), 1) },
          show: { V1: T.V1, V2, V, m, p }
        };
      }
      case 'pruzina': {
        const n = Math.min(8, Math.max(0, ctrl.n | 0));
        const mt = T.w.slice(0, n).reduce((s, x) => s + x, 0);
        const dl = mt / 1000 * G0 / T.k * 1000;       // mm
        const r = R(seed, id, 'n', n);
        const rd = n ? Math.max(0, roundTo(dl + 0.3 * gauss(r), 1)) : 0;
        return { vals: dl > 300 ? null : { m: 50 * n, dl: rd }, show: { dl, n }, over: dl > 300 };
      }
      case 'ohm': {
        const U = Math.max(0, +ctrl.U || 0), rU = U_RANGES.includes(+ctrl.rU) ? +ctrl.rU : 10, rI = I_RANGES.includes(+ctrl.rI) ? +ctrl.rI : 100;
        const I = U / T.R * 1000;                       // mA
        const r = R(seed, id, 'm', U, rU, rI);
        const su = U * T.gU[rU], si = I * T.gI[rI];
        const overU = su > rU * 1.02, overI = si > rI * 1.02;
        const vU = clean(roundTo(su + 0.1 * U_DIV[rU] * gauss(r), U_DIV[rU] / 2), 2);
        const vI = clean(roundTo(si + 0.1 * I_DIV[rI] * gauss(r), I_DIV[rI] / 2), 1);
        return { vals: overU || overI ? null : { U: Math.max(0, vU), I: Math.max(0, vI) }, show: { U: su, I: si, rU, rI }, overU, overI };
      }
      case 'teplo': {
        const step = Math.min(HEAT_STEPS, Math.max(0, ctrl.step | 0)), t = step * DT_HEAT;
        const m = Math.min(0.6, Math.max(0.3, +ctrl.m || 0.4));
        const Tt = T.T0 + T.eta * T.P * t / (m * C_WATER + T.C);
        const r = R(seed, id, 'heat', m, step), rm = R(seed, id, 'mass', m);
        const mr = clean(roundTo(m * 1000 + 0.4 * gauss(rm), 1), 0) / 1000;   // váhy s rozlíšením 1 g
        return { vals: { t, T: clean(roundTo(Tt + 0.08 * gauss(r), 0.1), 1) }, show: { T: Tt, t, m, step }, setup: { m: mr, P: T.P } };
      }
      case 'kyvadlo': {
        const l = Math.min(1.5, Math.max(0.2, +ctrl.l || 0.5));
        const lt = l + 0.0015 * gauss(R(seed, id, 'l', l));            // stred guľky nie je presne na značke
        const Tp = 2 * PI * Math.sqrt(lt / T.g) * (1 + deg(5) ** 2 / 16);  // amplitúda 5°
        const r = R(seed, id, 't', l, k);
        // štart a stop stopiek: reakčný čas sa mení o ~0,06 s, stopky ukazujú stotiny
        const t10 = clean(roundTo(10 * Tp + 0.06 * gauss(r) - 0.06 * gauss(r), 0.01), 2);
        return { vals: ctrl.on ? { l: clean(l, 2), t10 } : null, show: { l, T: Tp, t10 } };
      }
      case 'lom': {
        const a = Math.min(80, Math.max(0, +ctrl.a || 0));
        const b = rad2deg(Math.asin(Math.sin(deg(a)) / T.n));
        const r = R(seed, id, 'a', a);
        // uhlomer s dielikom 1°, odčíta sa na pol dielika; šírka lúča ~0,3°
        return { vals: { a: clean(a, 1), b: clean(Math.max(0, roundTo(b + 0.3 * gauss(r), 0.5)), 1) }, show: { a, b } };
      }
      case 'sosovka': {
        const a = Math.min(60, Math.max(15, +ctrl.a || 30));
        const s = Math.min(BENCH, Math.max(a + 2, +ctrl.s || 60));
        const aT = a * T.f / (a - T.f);
        const a2 = s - a;
        const blur = 4 * Math.abs(a2 - aT) / aT * 10;  // priemer rozmazania v mm (clona šošovky 4 cm)
        return { vals: { a: clean(a, 1), a2: clean(roundTo(a2, 0.1), 1) }, show: { a, s, aT, blur, M: aT / a, inRange: a + aT <= BENCH } };
      }
      case 'rozpad': {
        const i = Math.min(COUNT_MAX - 1, ctrl.i | 0), tau = T.h / Math.LN2;
        const Nb = poisson(R(seed, id, 'bg'), T.b * T_BG);
        const setup = ctrl.bg ? { Nb } : null;
        if (i < 0) return { vals: null, show: { i, Nb }, setup };
        const t = i * DT_COUNT;
        const lam = T.A0 * tau * (Math.exp(-t / tau) - Math.exp(-(t + DT_COUNT) / tau)) + T.b * DT_COUNT;
        const N = poisson(R(seed, id, 'i', i), lam);
        return { vals: { t, N }, show: { i, Nb, lam }, setup };
      }
    }
    return null;
  }

  // poradie hodnôt v riadku tabuľky (podľa cols)
  const ROWKEYS = { hustota: ['m', 'V1', 'V2'], pruzina: ['m', 'dl'], ohm: ['U', 'I'], teplo: ['t', 'T'], kyvadlo: ['l', 't10'], lom: ['a', 'b'], sosovka: ['a', 'a2'], rozpad: ['t', 'N'] };
  const toRow = (id, vals) => ROWKEYS[id].map((k) => vals[k]);
  const numRows = (rows) => (rows || []).map((r) => r.map(parseNum)).filter((r) => r.every(fin));

  // odvodené stĺpce riadku (na zobrazenie v tabuľke); setup = podmienky merania; first = prvý platný riadok
  function derived(id, row, setup, first) {
    const [x, y, z] = row;
    switch (id) {
      case 'hustota': return [z - y, z - y > 0 ? x / (z - y) : NaN];
      case 'pruzina': { const F = x / 1000 * G0; return [F, y > 0 ? F / (y / 1000) : NaN]; }
      case 'ohm': return [y > 0 ? x / (y / 1000) : NaN];
      case 'teplo': return [first ? y - first[1] : NaN];
      case 'kyvadlo': { const Tp = y / 10; return [Tp, Tp * Tp]; }
      case 'lom': { const sa = Math.sin(deg(x)), sb = Math.sin(deg(y)); return [sa, sb, sb > 0 ? sa / sb : NaN]; }
      case 'sosovka': return [x + y > 0 ? x * y / (x + y) : NaN];
      case 'rozpad': {
        const nb = setup && fin(setup.Nb) ? setup.Nb * DT_COUNT / T_BG : NaN;
        const c = y - nb;
        return [c, c > 0 ? Math.log(c) : NaN];
      }
    }
    return [];
  }

  /* Body do grafu: { x: {q, u}, y: {q, u}, pts, model } – rovnaké, aké sa použijú pri spracovaní. */
  function graphData(id, rows, setup) {
    const rs = numRows(rows);
    setup = setup || {};
    switch (id) {
      case 'hustota': return { x: { q: 'V', u: 'cm³' }, y: { q: 'm', u: 'g' }, model: 'prop', pts: rs.map(([m, a, b]) => [b - a, m]).filter((p) => p[0] > 0) };
      case 'pruzina': return { x: { q: 'Δl', u: 'm' }, y: { q: 'F', u: 'N' }, model: 'prop', pts: rs.filter((r) => r[0] > 0 && r[1] > 0).map(([m, dl]) => [dl / 1000, m / 1000 * G0]) };
      case 'ohm': return { x: { q: 'I', u: 'A' }, y: { q: 'U', u: 'V' }, model: 'prop', pts: rs.map(([U, I]) => [I / 1000, U]) };
      case 'teplo': return { x: { q: 't', u: 's' }, y: { q: 'T', u: '°C' }, model: 'lin', pts: rs.map(([t, Tc]) => [t, Tc]) };
      case 'kyvadlo': return { x: { q: 'l', u: 'm' }, y: { q: 'T²', u: 's²' }, model: 'prop', pts: rs.filter((r) => r[0] > 0).map(([l, t]) => [l, (t / 10) ** 2]) };
      case 'lom': return { x: { q: 'sin β', u: '' }, y: { q: 'sin α', u: '' }, model: 'prop', pts: rs.filter((r) => r[0] > 0 && r[1] > 0).map(([a, b]) => [Math.sin(deg(b)), Math.sin(deg(a))]) };
      case 'sosovka': return { x: { q: '1/a', u: '1/m' }, y: { q: '1/a′', u: '1/m' }, model: 'lin', pts: rs.filter((r) => r[0] > 0 && r[1] > 0).map(([a, b]) => [100 / a, 100 / b]) };
      case 'rozpad': {
        const nb = fin(setup.Nb) ? setup.Nb * DT_COUNT / T_BG : null;
        return { x: { q: 't', u: 's' }, y: { q: 'N − N_b', u: '' }, model: 'exp', pts: nb == null ? [] : rs.map(([t, N]) => [t + DT_COUNT / 2, N - nb]).filter((p) => p[1] > 0) };
      }
    }
    return null;
  }

  /* Spracovanie údajov ideálnym postupom: { v, u (neistota typu A z rozptylu), uB (z presnosti meradiel),
     uc (kombinovaná), n, how } alebo { error: kľúč, n }. */
  function processData(id, rows, setup) {
    const L = LABS[id];
    setup = setup || {};
    const G = graphData(id, rows, setup);
    const n = G.pts.length;
    if (id === 'teplo' && !(setup.m > 0 && setup.P > 0)) return { error: 'labNeedSetup', n };
    if (id === 'rozpad' && !fin(setup.Nb)) return { error: 'labBgNeed', n };
    if (n < L.minRows) return { error: 'labNeedRows', n: L.minRows };
    const mean = (a) => a.reduce((s, x) => s + x, 0) / a.length;
    const sd = (a) => { const m = mean(a); return a.length > 1 ? Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1)) : 0; };
    const fail = { error: 'labNeedRows', n: L.minRows };
    let v, u, uB, how = 'labHowFit';
    switch (id) {
      case 'hustota': {
        const F = fitU('prop', G.pts); if (!F) return fail;
        v = F.p.k * 1000; u = F.u.k * 1000;
        uB = v * Math.hypot(0.35 / mean(G.pts.map((p) => p[0])), 0.05 / mean(G.pts.map((p) => p[1]))) / Math.sqrt(n);
        break;
      }
      case 'pruzina': case 'ohm': case 'lom': {
        const F = fitU('prop', G.pts); if (!F) return fail;
        v = F.p.k; u = F.u.k;
        uB = v * { pruzina: 0.5 / (mean(G.pts.map((p) => p[0])) * 1000), ohm: 0.012, lom: 0.012 }[id] / Math.sqrt(n);
        break;
      }
      case 'kyvadlo': {
        const F = fitU('prop', G.pts); if (!F || !(F.p.k > 0)) return fail;
        v = 4 * PI * PI / F.p.k; u = v * F.u.k / F.p.k;
        uB = v * 2 * (0.085 / (10 * mean(G.pts.map((p) => Math.sqrt(p[1]))))) / Math.sqrt(n);
        break;
      }
      case 'teplo': {
        const F = fitU('lin', G.pts); if (!F || !(F.p.k > 0)) return fail;
        v = setup.P / (setup.m * F.p.k); u = v * F.u.k / F.p.k;
        uB = v * 0.01;
        break;
      }
      case 'sosovka': {
        const fs = G.pts.map(([x, y]) => 100 / (x + y));
        v = mean(fs); u = sd(fs) / Math.sqrt(n); how = 'labHowMean';
        uB = v * 0.01 / Math.sqrt(n);
        break;
      }
      case 'rozpad': {
        const F = fitU('exp', G.pts); if (!F || !(F.p.b < 0)) return fail;
        v = -Math.LN2 / F.p.b; u = v * F.u.b / Math.abs(F.p.b);
        uB = 0;
        break;
      }
    }
    if (!fin(v) || !(v > 0)) return fail;
    return { v, u: u || 0, uB: uB || 0, uc: Math.hypot(u || 0, uB || 0), n, how };
  }

  /* Vyhodnotenie výsledku žiaka. Porovnáva sa s hodnotou z jeho vlastných údajov (férovo) a tá potom
     s tabuľkovou hodnotou. cls: good | close | bad | nodata | noanswer.
     hint: kľúč typickej chyby (rád jednotiek, prevrátená hodnota, znamienko, stredná doba života). */
  function evaluate(id, rows, setup, answer, unc, seed) {
    const L = LABS[id];
    const P = processData(id, rows, setup);
    if (P.error) return { cls: 'nodata', error: P.error, n: P.n };
    const a = parseNum(answer), du = parseNum(unc);
    const v = P.v, av = Math.abs(v);
    const tol = Math.min(0.1 * av, Math.max(L.minRel * av, 2 * P.uc));
    const T = truth(id, seed);
    const tab = T.tab;
    const tabDev = (v - tab) / tab;
    const tabTol = Math.max(L.minRel, Math.hypot(2 * P.uc / av, L.sysRel));
    const out = { v, u: P.uc, uA: P.u, uB: P.uB, n: P.n, how: P.how, tol, tab, tabDev, tabOk: Math.abs(tabDev) <= tabTol, src: T.src };
    if (!fin(a)) return Object.assign(out, { cls: 'noanswer' });
    const dev = a - v;
    out.answer = a;
    out.rel = dev / v;
    out.cls = Math.abs(dev) <= tol ? 'good' : Math.abs(dev) <= 3 * tol ? 'close' : 'bad';
    if (out.cls !== 'good') {
      const r = a / v;
      const near = (x) => Math.abs(x - Math.round(x)) < 0.03;
      if (r <= 0) out.hint = 'labHintSign';
      else if (id === 'rozpad' && Math.abs(r * Math.LN2 - 1) < 0.03) out.hint = 'labHintTau';
      else if (near(Math.log10(r)) && Math.round(Math.log10(r)) !== 0) { out.hint = 'labHintPow'; out.pow = Math.round(Math.log10(r)); }
      else if (near(Math.log10(a * v))) out.hint = 'labHintInv';   // a ≈ 10^k / v
    }
    if (fin(du) && du > 0) {
      out.unc = du;
      out.uncCls = du < Math.abs(dev) * 0.999 || du < 0.3 * P.uc ? 'small' : du > 5 * Math.max(P.uc, L.minRel * av / 2) ? 'large' : 'ok';
    }
    return out;
  }

  // poloha tienidla, ktorú žiak „okom“ odhadne ako ostrý obraz (hĺbka ostrosti rastie s a′)
  function focus(seed, a, k) {
    const T = truth('sosovka', seed);
    const aT = a * T.f / (a - T.f);
    const s = a + aT + (0.006 * aT + 0.1) * gauss(R(seed, 'sosovka', 'focus', a, k));
    return clean(Math.min(BENCH, roundTo(s, 0.1)), 1);
  }

  /* Ideálne meranie (rovnomerne rozložené nastavenia, každé raz) – na testy a kontrolu kalibrácie. */
  function simulate(id, seed) {
    const rows = [];
    let setup = {};
    const add = (ctrl, k) => {
      const rd = read(id, seed, ctrl, k);
      if (rd && rd.vals) rows.push(toRow(id, rd.vals));
      if (rd && rd.setup) setup = rd.setup;
    };
    switch (id) {
      case 'hustota': for (let p = 1; p <= 6; p++) add({ piece: p }); break;
      case 'pruzina': for (let n = 1; n <= 8; n++) add({ n }); break;
      case 'ohm': {
        const T = truth(id, seed);
        for (let U = 1; U <= 12; U++) {
          const I = U / T.R * 1000;
          add({ U, rU: U_RANGES.find((x) => x >= U * 1.05), rI: I_RANGES.find((x) => x >= I * 1.05) });
        }
        break;
      }
      case 'teplo': for (let s = 0; s <= HEAT_STEPS; s++) add({ m: 0.4, step: s }); break;
      case 'kyvadlo': for (let l = 0.3; l <= 1.31; l += 0.2) add({ l: clean(l, 2), on: true }, 1); break;
      case 'lom': for (let a = 10; a <= 70; a += 10) add({ a }); break;
      case 'sosovka': for (let a = 15; a <= 50; a += 5) add({ a, s: focus(seed, a, 1) }); break;
      case 'rozpad': for (let i = 0; i < 16; i++) add({ i, bg: true }); break;
    }
    return { rows, setup };
  }

  window.LAB_LOGIC = {
    LABS, IDS, DENS, NIDX, ISO, U_RANGES, I_RANGES, U_DIV, I_DIV, CLS, DT_HEAT, HEAT_STEPS, DT_COUNT, COUNT_MAX, T_BG, BENCH,
    rng, mix, gauss, poisson, parseNum, fitU, truth, read, toRow, numRows, derived, graphData, process: processData, evaluate, simulate, focus
  };

  if (!window.APP) return; // v node len jadro

  /* ---------- rozhranie ---------- */
  const { t, esc } = APP;
  const $ = (id) => document.getElementById(id);
  const KEY = 'fyzika.lab';
  const GRAF_KEY = 'fyzika.graf';
  const GROUP_IDS = ['zs', 'ss', 'vs'];
  const reduced = () => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };

  /* uložený postup: { <id>: { seed, rows: [[reťazce]], ctrl, k, setup: {reťazce}, ans, unc, done, ev } } */
  const readAll = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  const writeAll = (d) => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* súkromný režim: platí len do zatvorenia */ } };
  const newSeed = () => Math.floor(Math.random() * 2147483646) + 1;
  const fresh = (id) => ({ seed: newSeed(), rows: [], ctrl: Object.assign({}, LABS[id].ctrl), k: 0, setup: {}, ans: '', unc: '' });
  function load(id) {
    const all = readAll(), s = all[id];
    if (s && Number.isInteger(s.seed) && Array.isArray(s.rows)) {
      return Object.assign(fresh(id), s, { ctrl: Object.assign({}, LABS[id].ctrl, s.ctrl), setup: Object.assign({}, s.setup) });
    }
    const st = fresh(id);
    all[id] = st;
    writeAll(all);
    return st;
  }
  function save(id, st) { const all = readAll(); all[id] = st; writeAll(all); }

  /* čísla: desatinný oddeľovač jazyka rozhrania (ako v grafe) */
  function dec() {
    const l = I18N.getLang();
    let d = '.';
    try { d = CONTENT_I18N.run(l, null, () => CONTENT_I18N.decimal()); } catch (e) { /* bez balíka */ }
    if (d === '.') { try { d = (1.5).toLocaleString(APP.htmlLang ? APP.htmlLang(l) : l).includes(',') ? ',' : '.'; } catch (e) { /* bez Intl */ } }
    return d;
  }
  const fixd = (v, d) => (fin(v) ? (+v).toFixed(d).replace('-', '−').replace('.', dec()) : '—');
  const sig = (v, s = 4) => (!fin(v) ? '—' : window.GRAF_LOGIC ? GRAF_LOGIC.fmtNum(v, s, dec(), false) : String(+v.toPrecision(s)).replace('.', dec()));
  const texDec = (s) => (dec() === ',' ? s : s.replace(/\{,\}/g, '.'));
  // neistota na 2 platné cifry a hodnota zaokrúhlená na rovnaký rád
  function withU(v, u) {
    if (!(u > 0)) return sig(v, 4);
    const e = Math.floor(Math.log10(u)) - 1, d = Math.max(0, -e);
    const r = (x) => fixd(roundTo(x, Math.pow(10, e)), d);
    return `${r(v)} ± ${r(u)}`;
  }
  // s jednotkou v zátvorke: (9,81 ± 0,05) m/s²
  const withUP = (v, u, unit) => (u > 0 && unit ? `(${withU(v, u)})` : withU(v, u));
  const unitSp = (u) => (u ? ' ' + u : '');
  const title = (id) => t('labT_' + id);
  const listOf = (key) => t(key).split(/\s*;\s*/).filter(Boolean);
  const stepsOf = (id) => t('labSteps_' + id).split('\n').filter(Boolean);
  const groupName = (g) => { const G = APP.groupById(g); return G ? APP.grName(G) : g; };
  const lessonsOf = (id) => LABS[id].lessons.map((x) => APP.lessonById(x)).filter(Boolean);
  const setupNum = (st) => ({ m: parseNum(st.setup.m), P: parseNum(st.setup.P), Nb: parseNum(st.setup.Nb) });
  const rowsCount = (st) => numRows(st.rows).length;

  /* ---------- kreslenie aparatúr ---------- */
  const n1 = (x) => Math.round(x * 10) / 10;
  const txt = (x, y, s, cls = 'f-small', anchor = 'middle') => `<text class="${cls}" x="${n1(x)}" y="${n1(y)}" text-anchor="${anchor}">${esc(s)}</text>`;
  const ln = (x1, y1, x2, y2, cls = 'f-line') => `<line class="${cls}" x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}"/>`;
  const rect = (x, y, w, h, cls, rx = 0) => `<rect class="${cls}" x="${n1(x)}" y="${n1(y)}" width="${n1(w)}" height="${n1(h)}" rx="${rx}"/>`;
  const svgWrap = (id, h, body) => `<svg class="lab-fig" viewBox="0 0 360 ${h}" role="img" aria-label="${esc(title(id))}" aria-describedby="lab-readout">${body}</svg>`;

  /* Zväčšená stupnica (lupa) okolo hodnoty val: zvislá (cylinder, pravítko) alebo vodorovná (uhlomer).
     ppu = pixelov na jednotku, tick = dielik, major = každý koľký dielik je dlhý s popisom.
     liquid: vyplniť pod hladinou (zvislá); mark: značka ukazovateľa na skutočnej hodnote. */
  function zoom(o) {
    const { x, y, w, h, val, ppu, tick, major, clip, label, vertical = true, liquid = false, fmt = (v) => fixd(v, 0) } = o;
    const half = (vertical ? h : w) / 2 / ppu;
    let s = `<defs><clipPath id="${clip}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath></defs>`;
    s += rect(x, y, w, h, 'lab-zoom-bg');
    s += `<g clip-path="url(#${clip})">`;
    if (liquid) {
      const ly = y + h / 2;
      s += `<path class="f-fill" d="M${x} ${ly - 4} Q${x + w / 2} ${ly + 5} ${x + w} ${ly - 4} L${x + w} ${y + h} L${x} ${y + h} Z"/>`;
      s += `<path class="f-outline" fill="none" d="M${x} ${ly - 4} Q${x + w / 2} ${ly + 5} ${x + w} ${ly - 4}"/>`;
    }
    const k0 = Math.ceil((val - half) / tick - 1e-9), k1 = Math.floor((val + half) / tick + 1e-9);
    for (let k = k0; k <= k1; k++) {
      const v = k * tick, big = k % major === 0;
      const p = (v - val) * ppu;
      const len = big ? 16 : 8;
      if (vertical) {
        const yy = y + h / 2 - p;
        s += ln(x, yy, x + len, yy, 'f-thin');
        if (big) s += txt(x + len + 4, yy + 4, fmt(v), 'f-small', 'start');
      } else {
        const xx = x + w / 2 + p;
        s += ln(xx, y, xx, y + len, 'f-thin');
        if (big) s += txt(xx, y + len + 13, fmt(v), 'f-small');
      }
    }
    if (o.mark) {
      s += vertical ? ln(x, y + h / 2, x + w, y + h / 2, 'f-accent') : ln(x + w / 2, y, x + w / 2, y + h, 'f-accent');
    }
    s += '</g>' + rect(x, y, w, h, 'f-cell');
    if (label) s += txt(x + w / 2, y - 6, label);
    return s;
  }

  // analógový ručičkový merací prístroj (stred cx, cy; polomer r)
  function gauge(cx, cy, r, val, range, div, unit, over) {
    const nd = Math.round(range / div), maj = nd % 10 === 0 && nd >= 50 ? 10 : 5;
    const a0 = deg(150), a1 = deg(30);
    const ang = (f) => a0 + (a1 - a0) * f;
    const P = (a, rr) => [cx + rr * Math.cos(a), cy - rr * Math.sin(a)];
    let s = `<path class="lab-gauge" d="M${n1(cx - r - 12)} ${n1(cy + 14)} L${n1(cx - r - 12)} ${n1(cy - r - 14)} L${n1(cx + r + 12)} ${n1(cy - r - 14)} L${n1(cx + r + 12)} ${n1(cy + 14)} Z"/>`;
    for (let k = 0; k <= nd; k++) {
      const a = ang(k / nd), big = k % maj === 0;
      const [x1, y1] = P(a, r), [x2, y2] = P(a, r - (big ? 12 : 6));
      s += ln(x1, y1, x2, y2, 'f-thin');
      if (big) { const [lx, ly] = P(a, r - 22); s += txt(lx, ly + 4, fixd(k * div, Math.abs(k * div - Math.round(k * div)) > 1e-9 ? 1 : 0)); }
    }
    const f = Math.max(-0.02, Math.min(1.06, val / range));
    const [nx, ny] = P(ang(f), r - 4);
    s += `<line class="${over ? 'f-warn' : 'f-accent'}" x1="${n1(cx)}" y1="${n1(cy)}" x2="${n1(nx)}" y2="${n1(ny)}"/>`;
    s += `<circle class="f-solid" cx="${cx}" cy="${cy}" r="4"/>`;
    s += txt(cx, cy - r * 0.35, unit, 'f-text');
    s += txt(cx, cy + 12, `${fixd(range, 0)} ${unit} · ${t('labClass')} ${fixd(CLS, 1)}`);
    return s;
  }

  // časť ručne kreslenej pružiny (cik-cak) od y1 po y2
  function spring(x, y1, y2, n = 14, w = 10) {
    let d = `M${x} ${n1(y1)} L${x} ${n1(y1 + 6)}`;
    const h = (y2 - y1 - 12) / n;
    for (let i = 0; i < n; i++) d += ` L${x + (i % 2 ? -w : w)} ${n1(y1 + 6 + h * (i + 0.5))}`;
    d += ` L${x} ${n1(y2 - 6)} L${x} ${n1(y2)}`;
    return `<path class="f-line" d="${d}"/>`;
  }

  const DRAW = {
    hustota(rd) {
      const S = rd.show, v = rd.vals;
      const side = 12 + Math.cbrt(S.V) * 6;
      let s = '';
      // váhy s telesom
      s += rect(10, 170, 100, 34, 'f-tri', 4) + rect(28, 178, 64, 20, 'lab-display', 3) + txt(60, 193, `${fixd(v.m, 1)} g`, 'lab-dtext');
      s += ln(20, 168, 100, 168, 'f-line');
      s += rect(60 - side / 2, 168 - side, side, side, 'f-fill3') + rect(60 - side / 2, 168 - side, side, side, 'f-outline3');
      s += txt(60, 160 - side, t('labPieceN', { n: S.p }));
      // odmerný valec (100 ml) s ponoreným telesom
      const cy0 = 200, ppm = 1.6, cx = 125, cw = 38;
      const yl = (ml) => cy0 - ml * ppm;
      s += `<path class="f-fill" d="M${cx} ${n1(yl(S.V2))} L${cx + cw} ${n1(yl(S.V2))} L${cx + cw} ${cy0} L${cx} ${cy0} Z"/>`;
      const bs = Math.min(cw - 10, side * 0.8);
      s += rect(cx + cw / 2 - bs / 2, cy0 - bs - 1, bs, bs, 'f-fill3');
      s += ln(cx, yl(S.V1), cx + cw, yl(S.V1), 'f-dash');
      s += `<path class="f-line" d="M${cx} ${yl(100) - 6} L${cx} ${cy0} L${cx + cw} ${cy0} L${cx + cw} ${yl(100) - 6}"/>`;
      for (let ml = 10; ml <= 100; ml += 10) { s += ln(cx, yl(ml), cx + 8, yl(ml), 'f-thin'); if (ml % 50 === 0) s += txt(cx + cw + 4, yl(ml) + 4, String(ml), 'f-small', 'start'); }
      s += txt(cx + cw / 2, 16, 'ml');
      // lupy na hladinu pred a po ponorení
      s += zoom({ x: 192, y: 30, w: 70, h: 170, val: S.V1, ppu: 12, tick: 1, major: 5, clip: 'lab-c1', label: 'V₁ (ml)', liquid: true });
      s += zoom({ x: 282, y: 30, w: 70, h: 170, val: S.V2, ppu: 12, tick: 1, major: 5, clip: 'lab-c2', label: 'V₂ (ml)', liquid: true });
      return svgWrap('hustota', 212, s);
    },
    pruzina(rd) {
      const S = rd.show, ppm = 0.5, y0 = 40;
      const yp = y0 + Math.min(320, S.dl) * ppm;
      let s = ln(20, 14, 170, 14, 'f-plate') + ln(150, 14, 150, y0 - 4, 'f-thin');
      s += spring(90, 14, yp);
      s += ln(90, yp, 145, yp, 'f-accent');
      for (let i = 0; i < S.n; i++) s += rect(76, yp + 4 + i * 9, 28, 8, 'f-fill3', 2) + rect(76, yp + 4 + i * 9, 28, 8, 'f-outline3', 2);
      s += txt(118, yp + 4 + S.n * 9 + 12, S.n ? `${S.n * 50} g` : '');
      // pravítko: nula pri nezaťaženej pružine
      s += rect(145, y0, 14, 150, 'lab-ruler');
      for (let mm = 0; mm <= 300; mm += 10) { const y = y0 + mm * ppm; s += ln(145, y, mm % 50 ? 151 : 157, y, 'f-thin'); if (mm % 100 === 0) s += txt(163, y + 4, String(mm), 'f-small', 'start'); }
      s += txt(152, y0 + 166, 'mm');
      s += zoom({ x: 222, y: 26, w: 110, h: 180, val: Math.min(S.dl, 300), ppu: 11, tick: 1, major: 5, clip: 'lab-c1', label: 'Δl (mm)', mark: true });
      return svgWrap('pruzina', 216, s);
    },
    ohm(rd) {
      const S = rd.show;
      let s = '';
      // schéma: zdroj, rezistor, ampérmeter v sérii, voltmeter paralelne k rezistoru
      s += `<path class="f-line" d="M30 40 L140 40 M200 40 L262 40 M288 40 L330 40 L330 104 L30 104 L30 78 M30 66 L30 40"/>`;
      s += ln(18, 66, 42, 66, 'f-line') + ln(24, 78, 36, 78, 'f-plate');
      s += txt(52, 76, 'U', 'f-math', 'start');
      s += rect(140, 32, 60, 16, 'f-tri') + txt(170, 64, 'R');
      s += `<path class="f-line" d="M120 40 L120 14 L158 14 M182 14 L220 14 L220 40"/>`;
      s += `<circle class="f-tri" cx="170" cy="14" r="11"/>` + txt(170, 19, 'V', 'f-text');
      s += `<circle class="f-tri" cx="275" cy="40" r="13"/>` + txt(275, 45, 'A', 'f-text');
      s += `<circle class="f-node" cx="120" cy="40" r="3"/><circle class="f-node" cx="220" cy="40" r="3"/>`;
      s += gauge(90, 225, 72, S.U, S.rU, U_DIV[S.rU], 'V', rd.overU);
      s += gauge(270, 225, 72, S.I, S.rI, I_DIV[S.rI], 'mA', rd.overI);
      return svgWrap('ohm', 252, s);
    },
    teplo(rd, st) {
      const S = rd.show, su = rd.setup;
      const lvl = 200 - S.m * 1000 * 0.22;   // výška hladiny podľa hmotnosti vody
      let s = '';
      s += `<path class="f-fill" d="M42 ${n1(lvl)} L158 ${n1(lvl)} L158 198 L42 198 Z"/>`;
      s += `<path class="f-line" d="M40 50 L40 200 L160 200 L160 50"/>`;
      // ponorný ohrievač
      s += `<path class="${S.step > 0 ? 'f-warn' : 'f-line'}" d="M80 30 L80 150 ${[0, 1, 2, 3, 4].map((i) => `L${i % 2 ? 80 : 110} ${160 + i * 8}`).join(' ')} L110 30"/>`;
      s += rect(70, 18, 50, 14, 'f-tri', 3) + txt(95, 29, `${su.P} W`);
      // teplomer
      s += ln(140, 70, 140, 185, 'f-line') + `<circle class="f-solid" cx="140" cy="186" r="4"/>` + ln(140, 70, 200, 50, 'f-thin');
      s += rect(200, 30, 140, 40, 'lab-display', 4) + txt(270, 58, `${fixd(rd.vals.T, 1)} °C`, 'lab-dtext');
      s += rect(200, 90, 140, 40, 'lab-display', 4) + txt(270, 118, `${S.t} s`, 'lab-dtext');
      s += txt(270, 146, `${t('labHeatTime')}`);
      s += rect(30, 204, 140, 14, 'f-tri', 3) + txt(100, 215, `${fixd(su.m * 1000, 0)} g`);
      return svgWrap('teplo', 222, s);
    },
    kyvadlo(rd, st) {
      const S = rd.show, px = 140, L = S.l * px;
      let s = ln(40, 12, 200, 12, 'f-plate');
      s += `<g id="lab-pend" transform="rotate(${st.ctrl.on ? 5 : 0} 120 14)">${ln(120, 14, 120, 14 + L, 'f-thin')}<circle class="f-dot" cx="120" cy="${n1(14 + L)}" r="9"/></g>`;
      // meracie pásmo
      s += rect(26, 14, 10, 1.5 * px + 6, 'lab-ruler');
      for (let k = 0; k <= 15; k++) { const y = 14 + k * 0.1 * px; s += ln(26, y, k % 5 ? 31 : 36, y, 'f-thin'); if (k % 5 === 0) s += txt(22, y + 4, fixd(k / 10, 1), 'f-small', 'end'); }
      s += ln(36, 14 + L, 108, 14 + L, 'f-dash');
      // stopky
      s += `<circle class="f-tri" cx="290" cy="90" r="50"/>` + rect(281, 30, 18, 10, 'f-tri', 2);
      s += txt(290, 96, st.ctrl.on ? `${fixd(S.t10, 2)} s` : '—', 'lab-dtext');
      s += txt(290, 160, t('labTenSwings'));
      return svgWrap('kyvadlo', 236, s);
    },
    lom(rd) {
      const S = rd.show, cx = 180, cy = 118, r = 100;
      const a = deg(S.a), b = deg(S.b);
      let s = `<circle class="f-cell" cx="${cx}" cy="${cy}" r="${r}"/>`;
      s += `<path class="f-fill" d="M${cx - 80} ${cy} A80 80 0 0 0 ${cx + 80} ${cy} Z"/>`;
      s += ln(cx - r - 6, cy, cx + r + 6, cy, 'f-thin') + ln(cx, cy - r - 6, cx, cy + r + 6, 'f-dash');
      for (let d = 0; d < 360; d += 5) {
        const q = deg(d), big = d % 10 === 0;
        s += ln(cx + r * Math.sin(q), cy - r * Math.cos(q), cx + (r - (big ? 8 : 4)) * Math.sin(q), cy - (r - (big ? 8 : 4)) * Math.cos(q), 'f-thin');
        if (d % 30 === 0) { const lab = d <= 90 ? d : d <= 180 ? 180 - d : d <= 270 ? d - 180 : 360 - d; s += txt(cx + (r + 12) * Math.sin(q), cy - (r + 12) * Math.cos(q) + 4, String(lab)); }
      }
      s += ln(cx - r * Math.sin(a), cy - r * Math.cos(a), cx, cy, 'f-accent');
      s += ln(cx, cy, cx + r * Math.sin(a), cy - r * Math.cos(a), 'lab-weak');
      s += ln(cx, cy, cx + r * Math.sin(b), cy + r * Math.cos(b), 'f-accent');
      s += txt(cx - 26, cy - 46, 'α', 'f-math') + txt(cx + 18, cy + 56, 'β', 'f-math');
      s += zoom({ x: 30, y: 236, w: 300, h: 40, val: S.b, ppu: 26, tick: 1, major: 1, clip: 'lab-c1', label: `β (°)`, vertical: false, mark: true });
      return svgWrap('lom', 296, s);
    },
    sosovka(rd) {
      const S = rd.show, ppc = 340 / BENCH, X = (c) => 10 + c * ppc, yb = 170;
      let s = ln(10, yb, 350, yb, 'f-line');
      for (let c = 0; c <= BENCH; c += 10) { s += ln(X(c), yb, X(c), yb + (c % 50 ? 5 : 9), 'f-thin'); if (c % 50 === 0) s += txt(X(c), yb + 21, String(c)); }
      // predmet (svietiaca šípka), šošovka, tienidlo
      s += `<path class="f-ok" d="M${X(0)} ${yb - 4} L${X(0)} ${yb - 40} M${X(0) - 5} ${yb - 32} L${X(0)} ${yb - 40} L${X(0) + 5} ${yb - 32}"/>`;
      s += `<ellipse class="f-fill" cx="${n1(X(S.a))}" cy="${yb - 40}" rx="5" ry="34"/><ellipse class="f-outline" fill="none" cx="${n1(X(S.a))}" cy="${yb - 40}" rx="5" ry="34"/>`;
      s += rect(X(S.s) - 2, yb - 80, 4, 76, 'f-tri');
      // pohľad na tienidlo: obraz je prevrátený, rozmazanie podľa vzdialenosti od ostrej polohy
      const sd = Math.min(9, S.blur * 0.7), hgt = Math.max(4, Math.min(44, 14 * S.M));
      s += `<defs><filter id="lab-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${n1(sd)}"/></filter></defs>`;
      s += rect(230, 8, 118, 92, 'lab-screen', 4) + txt(289, 114, t('labScreen'));
      s += `<g filter="url(#lab-blur)"><path class="f-ok" d="M289 ${n1(54 - hgt / 2)} L289 ${n1(54 + hgt / 2)} M${284} ${n1(54 + hgt / 2 - 7)} L289 ${n1(54 + hgt / 2)} L294 ${n1(54 + hgt / 2 - 7)}"/></g>`;
      s += txt(X(0), yb - 46, t('labObject'));
      return svgWrap('sosovka', 200, s);
    },
    rozpad(rd, st) {
      const S = rd.show, v = rd.vals;
      let s = '';
      s += rect(20, 40, 120, 26, 'f-tri', 13) + rect(130, 44, 14, 18, 'f-fill', 3) + txt(80, 32, 'GM');
      s += `<path class="f-thin" d="M20 53 C 0 53 0 90 30 100 L180 100 L180 70 L196 70"/>`;
      s += rect(196, 20, 150, 74, 'lab-display', 6);
      s += txt(271, 52, v ? String(v.N) : '—', 'lab-dtext');
      s += txt(271, 80, v ? `${v.t}–${v.t + DT_COUNT} s` : '', 'f-small');
      s += rect(150, 46, 22, 14, 'f-fill3', 3) + txt(161, 80, truth('rozpad', st.seed).iso);
      // stĺpcový graf zapísaných meraní
      const rs = numRows(st.rows), max = Math.max(1, ...rs.map((r) => r[1]));
      const x0 = 30, y0 = 220, w = Math.min(16, 300 / Math.max(rs.length, 1));
      s += ln(x0, y0, 340, y0, 'f-axis') + ln(x0, 120, x0, y0, 'f-axis');
      rs.forEach((r, i) => { const h = Math.max(0, r[1]) / max * 90; s += rect(x0 + 2 + i * w, y0 - h, w - 2, h, 'f-fill'); });
      s += txt(x0 + 4, 116, 'N', 'f-small', 'start') + txt(336, 234, 't', 'f-small', 'end');
      return svgWrap('rozpad', 238, s);
    }
  };

  /* text pre čítačky a súhrn údajov meradiel */
  function readoutText(id, rd, st) {
    const v = rd.vals;
    switch (id) {
      case 'hustota': return t('labRead_hustota', { p: rd.show.p, m: fixd(v.m, 1), v1: fixd(v.V1, 1), v2: fixd(v.V2, 1) });
      case 'pruzina': return rd.over ? t('labOver') : t('labRead_pruzina', { m: v.m, dl: fixd(v.dl, 0) });
      case 'ohm': return t('labRead_ohm', {
        ru: rd.show.rU, ri: rd.show.rI,
        u: rd.overU ? t('labOverShort') : `${fixd(roundTo(rd.show.U, U_DIV[rd.show.rU] / 2), 2)} V`,
        i: rd.overI ? t('labOverShort') : `${fixd(roundTo(rd.show.I, I_DIV[rd.show.rI] / 2), 1)} mA`
      });
      case 'teplo': return t('labRead_teplo', { m: fixd(rd.setup.m * 1000, 0), p: rd.setup.P, t: v.t, T: fixd(v.T, 1) });
      case 'kyvadlo': return t('labRead_kyvadlo', { l: fixd(rd.show.l, 2), t: st.ctrl.on ? `${fixd(rd.show.t10, 2)} s` : t('labNotMeasured') });
      case 'lom': return t('labRead_lom', { a: fixd(v.a, 0), b: fixd(v.b, 1) });
      case 'sosovka': {
        const S = rd.show;
        const sharp = !S.inRange && S.blur > 4 ? 'labNoImage' : S.blur < 1 ? 'labSharp' : S.blur < 4 ? 'labBlurSlight' : 'labBlurred';
        return t('labRead_sosovka', { a: fixd(S.a, 1), s: fixd(S.s, 1), a2: fixd(v.a2, 1), sharp: t(sharp) });
      }
      case 'rozpad': return t('labRead_rozpad', {
        nb: st.ctrl.bg ? t('labBgCount', { n: rd.show.Nb, t: T_BG }) : t('labNotMeasured'),
        t1: v ? v.t : '—', t2: v ? v.t + DT_COUNT : '—', n: v ? v.N : '—'
      });
    }
    return '';
  }

  /* ---------- ovládanie aparatúry ----------
     range: posuvník (id do ctrl, popis, min, max, krok, formát); select; btn: tlačidlo s akciou. */
  const CONTROLS = {
    hustota: [{ type: 'range', c: 'piece', key: 'labCtlPiece', min: 1, max: 6, step: 1, fmt: (v) => String(v) }],
    pruzina: [{ type: 'range', c: 'n', key: 'labCtlWeights', min: 0, max: 8, step: 1, fmt: (v) => `${v} × 50 g` }],
    ohm: [
      { type: 'range', c: 'U', key: 'labCtlU', min: 0, max: 12, step: 0.5, fmt: (v) => `${fixd(v, 1)} V` },
      { type: 'select', c: 'rU', key: 'labCtlRangeU', opts: U_RANGES.map((x) => [x, `${x} V`]) },
      { type: 'select', c: 'rI', key: 'labCtlRangeI', opts: I_RANGES.map((x) => [x, `${x} mA`]) }
    ],
    teplo: [
      { type: 'range', c: 'm', key: 'labCtlMass', min: 0.3, max: 0.6, step: 0.05, fmt: (v) => `${fixd(v * 1000, 0)} g`, disabled: (st) => st.ctrl.step > 0 },
      { type: 'btn', key: 'labHeat', icon: '🔥', act: (st) => { st.ctrl.step = Math.min(HEAT_STEPS, st.ctrl.step + 1); }, disabled: (st) => st.ctrl.step >= HEAT_STEPS },
      { type: 'btn', key: 'labRestart', icon: '↺', act: (st) => { st.ctrl.step = 0; } }
    ],
    kyvadlo: [
      { type: 'range', c: 'l', key: 'labCtlLength', min: 0.2, max: 1.5, step: 0.05, fmt: (v) => `${fixd(v, 2)} m`, change: (st) => { st.ctrl.on = false; } },
      { type: 'btn', key: 'labMeasure10', icon: '⏱️', act: (st) => { st.k++; st.ctrl.k = st.k; st.ctrl.on = true; } }
    ],
    lom: [{ type: 'range', c: 'a', key: 'labCtlAlpha', min: 0, max: 80, step: 1, fmt: (v) => `${v}°` }],
    sosovka: [
      { type: 'range', c: 'a', key: 'labCtlLens', min: 15, max: 60, step: 0.5, fmt: (v) => `${fixd(v, 1)} cm`, change: (st) => { st.ctrl.s = Math.max(st.ctrl.s, st.ctrl.a + 2); } },
      { type: 'range', c: 's', key: 'labCtlScreen', min: 20, max: BENCH, step: 0.1, fmt: (v) => `${fixd(v, 1)} cm`, change: (st) => { st.ctrl.s = Math.max(st.ctrl.s, st.ctrl.a + 2); } },
      { type: 'btn', key: 'labFocus', icon: '👁️', act: (st, seed) => { st.k++; st.ctrl.s = focus(seed, st.ctrl.a, st.k); } }
    ],
    rozpad: [
      { type: 'btn', key: 'labBg', icon: '📉', act: (st, seed) => { st.ctrl.bg = true; st.setup.Nb = String(read('rozpad', seed, { i: -1, bg: true }).show.Nb); }, disabled: (st) => st.ctrl.bg },
      { type: 'btn', key: 'labCount', icon: '☢️', act: (st) => { st.ctrl.i = Math.min(COUNT_MAX - 1, st.ctrl.i + 1); }, disabled: (st) => st.ctrl.i >= COUNT_MAX - 1 },
      { type: 'btn', key: 'labRestart', icon: '↺', act: (st) => { st.ctrl.i = -1; } }
    ]
  };

  /* ---------- export do grafu ---------- */
  // graf.js si dáta drží v pamäti, kým sa stránka neobnoví: ak už bol #/graf otvorený, po zápise sa stránka obnoví
  let grafSeen = /^#\/graf/.test(location.hash);
  window.addEventListener('hashchange', () => { if (/^#\/graf/.test(location.hash)) grafSeen = true; });
  function toGraph(G) {
    const d = { x: G.pts.map((p) => p[0]), y: G.pts.map((p) => p[1]), xName: G.x.q, xUnit: G.x.u, yName: G.y.q, yUnit: G.y.u, model: G.model };
    if (window.GRAF_LOGIC && typeof GRAF_LOGIC.importData === 'function') { GRAF_LOGIC.importData(d); return; }
    const cell = (v) => String(+v.toPrecision(6)).replace('.', dec());
    try {
      localStorage.setItem(GRAF_KEY, JSON.stringify({ x: G.x, y: G.y, rows: G.pts.map(([x, y]) => [cell(x), cell(y)]), model: G.model, sample: null }));
    } catch (e) { APP.toast(esc(t('labGraphFail'))); return; }
    location.hash = '#/graf/meranie';
    if (grafSeen) location.reload();
  }

  /* ---------- zoznam prác ---------- */
  function status(id) {
    const st = readAll()[id];
    if (st && st.done) return `<span class="lab-done">✓ ${esc(t('labDone'))}</span>`;
    const n = st ? rowsCount(st) : 0;
    return n ? `<span class="muted">${esc(t('labStarted', { rows: t('labRows', { n }) }))}</span>` : `<span class="muted">${esc(t('labNotDone'))}</span>`;
  }
  function listPage() {
    const all = readAll();
    const doneN = IDS.filter((id) => all[id] && all[id].done).length;
    const card = (id) => `<a class="card lab-card" href="#/laboratorium/${id}">
        <div class="theme-icon" aria-hidden="true">${LABS[id].icon}</div>
        <h3>${esc(title(id))}</h3><p>${esc(t('labGoal_' + id))}</p>
        <div class="meta">${status(id)}</div></a>`;
    const section = (g) => {
      const ids = IDS.filter((id) => LABS[id].level === g);
      return ids.length ? `<section class="lab-level"><h2>${esc(groupName(g))}</h2><div class="grid">${ids.map(card).join('')}</div></section>` : '';
    };
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🔬 ${esc(t('labTitle'))}</h1>
      <p class="muted">${esc(t('labIntro'))}</p>
      <p class="small">${esc(t('labProgress', { k: doneN, n: IDS.length }))}</p>
      ${GROUP_IDS.map(section).join('')}`);
  }

  /* ---------- tabuľka nameraných hodnôt ---------- */
  const head = (q, u) => esc(q) + (u ? ` <span class="muted">(${esc(u)})</span>` : '');
  function tableHtml(id, st, editable) {
    const L = LABS[id], su = setupNum(st);
    const nr = numRows(st.rows), first = nr[0];
    let h = `<thead><tr><th scope="col">${esc(t('labNo'))}</th>${L.cols.map(([q, u]) => `<th scope="col">${head(q, u)}</th>`).join('')}${L.derived.map(([q, u]) => `<th scope="col" class="lab-der">${head(q, u)}</th>`).join('')}${editable ? `<th scope="col"><span class="lab-vh">${esc(t('labDelCol'))}</span></th>` : ''}</tr></thead><tbody>`;
    st.rows.forEach((r, i) => {
      const nums = r.map(parseNum), ok = nums.every(fin);
      const dv = ok ? derived(id, nums, su, first) : [];
      h += `<tr><th scope="row">${i + 1}</th>`;
      h += L.cols.map(([q], j) => editable
        ? `<td><input class="lab-cell" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" data-i="${i}" data-j="${j}" value="${esc(r[j] == null ? '' : r[j])}" aria-label="${esc(t('labCell', { col: q, n: i + 1 }))}"></td>`
        : `<td>${esc(r[j] == null ? '' : r[j])}</td>`).join('');
      h += L.derived.map((d, j) => `<td class="lab-der" data-d="${i}-${j}">${fin(dv[j]) ? fixd(dv[j], d[2]) : '—'}</td>`).join('');
      if (editable) h += `<td><button type="button" class="btn btn-small lab-del" data-del="${i}" aria-label="${esc(t('labDelRow', { n: i + 1 }))}">✕</button></td>`;
      h += '</tr>';
    });
    if (!st.rows.length) h += `<tr><td colspan="${1 + L.cols.length + L.derived.length + (editable ? 1 : 0)}" class="muted">${esc(t('labEmpty'))}</td></tr>`;
    return h + '</tbody>';
  }
  // podmienky merania (hmotnosť vody a príkon, pozadie)
  const SETUP = { teplo: [['m', 'labSetupMass', 'kg'], ['P', 'labSetupPower', 'W']], rozpad: [['Nb', 'labSetupBg', '']] };

  /* ---------- vyhodnotenie (text) ---------- */
  function srcText(id, src) {
    const v = Object.assign({}, src);
    if (src.mat) v.mat = t('labMat_' + src.mat);
    if (src.nom) v.nom = sig(src.nom, 3);
    if (src.d) v.d = sig(src.d, 3);
    return t('labSrc_' + id, v);
  }
  function evalHtml(id, E) {
    const L = LABS[id], u = L.unit;
    if (E.cls === 'nodata') return `<p class="lab-ev lab-ev-bad">${esc(t(E.error, { n: E.n }))}</p>`;
    if (E.cls === 'noanswer') return `<p class="lab-ev lab-ev-bad">${esc(t('labNoAnswer'))}</p>`;
    const icon = { good: '✓', close: '≈', bad: '✗' }[E.cls];
    const key = { good: 'labGood', close: 'labClose', bad: 'labBad' }[E.cls];
    let h = `<p class="lab-ev lab-ev-${E.cls}"><strong>${icon} ${esc(t(key))}</strong></p>`;
    h += `<p>${esc(t('labFromData', { q: L.q, v: withUP(E.v, E.u, u), unit: unitSp(u), rows: t('labRows', { n: E.n }), how: t(E.how) }))}</p>`;
    if (E.cls !== 'good') h += `<p>${esc(t('labYourDev', { p: fixd(Math.abs(E.rel) * 100, 1) }))}</p>`;
    if (E.hint) h += `<p class="lab-hint">💡 ${esc(t(E.hint, { f: E.pow != null ? '10' + (E.pow < 0 ? '⁻' : '') + String(Math.abs(E.pow)).split('').map((c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[c]).join('') : '' }))}</p>`;
    if (E.uncCls) h += `<p>${esc(t({ ok: 'labUncOk', small: 'labUncSmall', large: 'labUncLarge' }[E.uncCls], { u: sig(E.u, 2), unit: unitSp(u) }))}</p>`;
    h += `<p>${esc(t('labTab', { q: L.q, v: sig(E.tab, 4), unit: unitSp(u), src: srcText(id, E.src) }))}</p>`;
    h += E.tabOk ? `<p>${esc(t('labTabOk', { p: fixd(Math.abs(E.tabDev) * 100, 1) }))}</p>`
      : `<p>${esc(t('labTabOff', { p: fixd(Math.abs(E.tabDev) * 100, 1) }))} ${esc(t('labWhy_' + id))}</p>`;
    return h;
  }

  /* ---------- stránka práce ---------- */
  let anim = 0;
  function labPage(id) {
    const L = LABS[id];
    const st = load(id);
    const lessons = lessonsOf(id);
    const setupHtml = (SETUP[id] || []).map(([k, key, u]) => `<label class="lab-setup-f">${esc(t(key))}${u ? ` (${u})` : ''}
        <input type="text" inputmode="decimal" autocomplete="off" data-setup="${k}" value="${esc(st.setup[k] == null ? '' : st.setup[k])}"></label>`).join('');
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/laboratorium">${esc(t('labTitle'))}</a></nav>
      <h1>${L.icon} ${esc(title(id))}</h1>
      <p class="muted small">${esc(groupName(L.level))}${lessons.length ? ` · ${esc(t('labLessons'))} ${lessons.map((x) => `<a href="#/lekcia/${x.id}">${APP.lessonTitle(x)}</a>`).join(', ')}` : ''}</p>
      <div class="block lab-intro">
        <h2 class="lab-h">${esc(t('labGoal'))}</h2><p>${esc(t('labGoal_' + id))}</p>
        <h2 class="lab-h">${esc(t('labTools'))}</h2><ul class="lab-tools">${listOf('labTools_' + id).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        <details class="lab-steps" open><summary class="lab-h">${esc(t('labSteps'))}</summary><ol>${stepsOf(id).map((x) => `<li>${esc(x)}</li>`).join('')}</ol></details>
        <h2 class="lab-h">${esc(t('labTheory'))}</h2><p class="lab-tex">$${texDec(L.tex)}$</p>
      </div>
      <section class="block lab-app" aria-labelledby="lab-app-h">
        <h2 id="lab-app-h" class="lab-h">🔬 ${esc(t('labApparatus'))}</h2>
        <div class="lab-svg" id="lab-svg"></div>
        <p class="lab-readout" id="lab-readout" aria-live="polite"></p>
        <div class="lab-controls" id="lab-controls"></div>
        <div class="lab-rec"><button type="button" class="btn btn-primary" id="lab-record">✍️ ${esc(t('labRecord'))}</button>
          <span class="lab-msg" id="lab-msg" role="status"></span></div>
      </section>
      <section class="block lab-data" aria-labelledby="lab-data-h">
        <h2 id="lab-data-h" class="lab-h">📋 ${esc(t('labTable'))}</h2>
        ${setupHtml ? `<div class="lab-setup">${setupHtml}</div>` : ''}
        <p class="muted small">${esc(t('labTableHint'))}</p>
        <div class="lab-twrap"><table class="lab-table" id="lab-table"></table></div>
        <div class="lab-tactions">
          <button type="button" class="btn btn-small" id="lab-addrow">＋ ${esc(t('labAddRow'))}</button>
          <button type="button" class="btn btn-small" id="lab-clear">✕ ${esc(t('labClearTable'))}</button>
        </div>
      </section>
      <section class="block lab-proc" aria-labelledby="lab-proc-h">
        <h2 id="lab-proc-h" class="lab-h">🧮 ${esc(t('labProcessing'))}</h2>
        <p class="muted small">${esc(t('labProcHint_' + id))}</p>
        <div class="lab-answer">
          <label>${esc(t('labResultLabel', { q: L.q }))}${L.unit ? ` (${esc(L.unit)})` : ''}
            <input type="text" inputmode="decimal" autocomplete="off" id="lab-ans" value="${esc(st.ans || '')}"></label>
          <label>${esc(t('labUncLabel'))}${L.unit ? ` (${esc(L.unit)})` : ''}
            <input type="text" inputmode="decimal" autocomplete="off" id="lab-unc" value="${esc(st.unc || '')}"></label>
        </div>
        <div class="lab-tactions">
          <button type="button" class="btn btn-primary" id="lab-eval">${esc(t('labEvaluate'))}</button>
          <button type="button" class="btn" id="lab-graph">📈 ${esc(t('labToGraph'))}</button>
        </div>
        <div class="lab-evalbox" id="lab-evalbox" aria-live="polite"></div>
      </section>
      <div class="lab-tactions lab-foot">
        <a class="btn" href="#/laboratorium/${id}/protokol">🖨️ ${esc(t('labProtocol'))}</a>
        <button type="button" class="btn" id="lab-new">🎲 ${esc(t('labNewSample'))}</button>
        <a class="btn" href="#/laboratorium">${esc(t('labAll'))}</a>
      </div>`);

    const persist = () => save(id, st);
    const msg = (s) => { const m = $('lab-msg'); m.textContent = ''; setTimeout(() => { m.textContent = s; }, 30); };

    // aparatúra
    function renderApp() {
      const rd = read(id, st.seed, st.ctrl, st.ctrl.k || st.k);
      $('lab-svg').innerHTML = DRAW[id](rd, st);
      $('lab-readout').textContent = readoutText(id, rd, st);
      CONTROLS[id].forEach((c, i) => { if (c.disabled) $('lab-c' + i).disabled = !!c.disabled(st); });
      if (id === 'kyvadlo') startPendulum(rd.show.T, st.ctrl.on);
      return rd;
    }
    const ctrlHtml = CONTROLS[id].map((c, i) => {
      if (c.type === 'range') {
        return `<label class="lab-range">${esc(t(c.key))} <output id="lab-o${i}" for="lab-c${i}">${esc(c.fmt(st.ctrl[c.c]))}</output>
          <input type="range" id="lab-c${i}" min="${c.min}" max="${c.max}" step="${c.step}" value="${st.ctrl[c.c]}"></label>`;
      }
      if (c.type === 'select') {
        return `<label class="lab-select">${esc(t(c.key))} <select id="lab-c${i}">${c.opts.map(([v, s]) => `<option value="${v}"${+st.ctrl[c.c] === v ? ' selected' : ''}>${esc(s)}</option>`).join('')}</select></label>`;
      }
      return `<button type="button" class="btn" id="lab-c${i}">${c.icon} ${esc(t(c.key))}</button>`;
    }).join('');
    $('lab-controls').innerHTML = ctrlHtml;
    CONTROLS[id].forEach((c, i) => {
      const el = $('lab-c' + i);
      if (c.type === 'range' || c.type === 'select') {
        el.addEventListener('input', () => {
          st.ctrl[c.c] = +el.value;
          if (c.change) c.change(st);
          if (c.type === 'range') $('lab-o' + i).textContent = c.fmt(st.ctrl[c.c]);
          // spoločné obmedzenie polôh na lavici (tienidlo za šošovkou)
          CONTROLS[id].forEach((o, j) => { if (o.type === 'range' && j !== i && +$('lab-c' + j).value !== st.ctrl[o.c]) { $('lab-c' + j).value = st.ctrl[o.c]; $('lab-o' + j).textContent = o.fmt(st.ctrl[o.c]); } });
          persist();
          renderApp();
        });
      } else {
        el.addEventListener('click', () => {
          if (id === 'teplo' && c.key === 'labRestart' && st.rows.length && !confirm(t('labRestartConfirm'))) return;
          if (id === 'teplo' && c.key === 'labRestart') { st.rows = []; renderTable(); }
          c.act(st, st.seed);
          CONTROLS[id].forEach((o, j) => { if (o.type === 'range') { $('lab-c' + j).value = st.ctrl[o.c]; $('lab-o' + j).textContent = o.fmt(st.ctrl[o.c]); } });
          persist();
          renderApp();
          if (id === 'rozpad') renderTable();
        });
      }
    });

    // tabuľka
    function renderTable() {
      $('lab-table').innerHTML = tableHtml(id, st, true);
      document.querySelectorAll('[data-setup]').forEach((el) => { el.value = st.setup[el.dataset.setup] == null ? '' : st.setup[el.dataset.setup]; });
    }
    function updateDerived() {
      const su = setupNum(st), first = numRows(st.rows)[0];
      st.rows.forEach((r, i) => {
        const nums = r.map(parseNum), ok = nums.every(fin);
        const dv = ok ? derived(id, nums, su, first) : [];
        L.derived.forEach((d, j) => { const td = document.querySelector(`[data-d="${i}-${j}"]`); if (td) td.textContent = fin(dv[j]) ? fixd(dv[j], d[2]) : '—'; });
      });
    }
    $('lab-table').addEventListener('input', (e) => {
      const el = e.target;
      if (!el.classList.contains('lab-cell')) return;
      st.rows[+el.dataset.i][+el.dataset.j] = el.value;
      el.classList.toggle('lab-badcell', Number.isNaN(parseNum(el.value)));
      persist();
      updateDerived();
    });
    $('lab-table').addEventListener('click', (e) => {
      const b = e.target.closest('[data-del]');
      if (!b) return;
      const i = +b.dataset.del;
      st.rows.splice(i, 1);
      persist();
      renderTable();
      const next = document.querySelector(`[data-del="${Math.min(i, st.rows.length - 1)}"]`) || $('lab-addrow');
      next.focus();
      if (id === 'rozpad') renderApp();
    });
    document.querySelectorAll('[data-setup]').forEach((el) => el.addEventListener('input', () => {
      st.setup[el.dataset.setup] = el.value;
      persist();
      updateDerived();
    }));
    $('lab-addrow').addEventListener('click', () => {
      st.rows.push(L.cols.map(() => ''));
      persist();
      renderTable();
      const cells = document.querySelectorAll('.lab-cell');
      if (cells.length) cells[cells.length - L.cols.length].focus();
    });
    $('lab-clear').addEventListener('click', () => {
      if (!st.rows.length || !confirm(t('labClearConfirm'))) return;
      st.rows = [];
      persist();
      renderTable();
      if (id === 'rozpad') renderApp();
    });

    // zápis merania
    $('lab-record').addEventListener('click', () => {
      const rd = read(id, st.seed, st.ctrl, st.ctrl.k || st.k);
      if (!rd.vals) {
        msg(t(rd.over || rd.overU || rd.overI ? 'labOver' : id === 'kyvadlo' ? 'labMeasureFirst' : id === 'rozpad' ? 'labCountFirst' : 'labOver'));
        return;
      }
      if (rd.setup) {
        if (id === 'teplo') { st.setup.m = fixd(rd.setup.m, 3); st.setup.P = String(rd.setup.P); }
        if (id === 'rozpad' && rd.setup.Nb != null && !st.setup.Nb) st.setup.Nb = String(rd.setup.Nb);
      }
      st.rows.push(toRow(id, rd.vals).map((v, j) => fixd(v, L.cols[j][2]).replace('−', '-')));
      persist();
      renderTable();
      if (id === 'rozpad') renderApp();
      msg(t('labRecorded', { n: st.rows.length }));
    });

    // spracovanie
    const keepAns = () => { st.ans = $('lab-ans').value; st.unc = $('lab-unc').value; persist(); };
    $('lab-ans').addEventListener('input', keepAns);
    $('lab-unc').addEventListener('input', keepAns);
    $('lab-ans').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('lab-eval').click(); });
    $('lab-unc').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('lab-eval').click(); });
    $('lab-eval').addEventListener('click', () => {
      keepAns();
      const E = evaluate(id, st.rows, setupNum(st), st.ans, st.unc, st.seed);
      const box = $('lab-evalbox');
      box.innerHTML = evalHtml(id, E);
      if (E.cls === 'good' || E.cls === 'close' || E.cls === 'bad') {
        st.ev = { cls: E.cls, v: E.v, u: E.u, n: E.n, answer: E.answer, unc: E.unc, tab: E.tab, tabDev: E.tabDev, tabOk: E.tabOk, rel: E.rel, src: E.src };
        if (E.cls === 'good' && !st.done) { st.done = true; APP.toast(`🔬 ${esc(t('labDoneToast'))} ${esc(title(id))}`); }
        persist();
      }
    });
    $('lab-graph').addEventListener('click', () => {
      const G = graphData(id, st.rows, setupNum(st));
      if (!G || G.pts.length < 2) { msg(''); $('lab-evalbox').innerHTML = `<p class="lab-ev lab-ev-bad">${esc(t(id === 'rozpad' && !fin(setupNum(st).Nb) ? 'labBgNeed' : 'labGraphNeed'))}</p>`; return; }
      toGraph(G);
    });
    $('lab-new').addEventListener('click', () => {
      if (st.rows.length && !confirm(t('labNewConfirm'))) return;
      const all = readAll();
      all[id] = Object.assign(fresh(id), { done: st.done });
      writeAll(all);
      labPage(id);
    });

    renderApp();
    renderTable();
    if (st.ev && st.ans) $('lab-evalbox').innerHTML = evalHtml(id, evaluate(id, st.rows, setupNum(st), st.ans, st.unc, st.seed));
  }

  // kývanie kyvadla so skutočnou periódou (bez animácie pri obmedzení pohybu)
  function startPendulum(T, on) {
    cancelAnimationFrame(anim);
    if (!on || reduced()) return;
    const t0 = performance.now();
    const step = (now) => {
      const g = $('lab-pend');
      if (!g) return;
      const a = 5 * Math.cos(2 * PI * (now - t0) / 1000 / T);
      g.setAttribute('transform', `rotate(${a.toFixed(2)} 120 14)`);
      anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
  }

  /* ---------- protokol na tlač ---------- */
  function protocolPage(id) {
    const L = LABS[id], st = load(id);
    const su = setupNum(st);
    const P = processData(id, st.rows, su);
    const E = st.ev && st.ans ? evaluate(id, st.rows, su, st.ans, st.unc, st.seed) : null;
    const setup = (SETUP[id] || []).map(([k, key, u]) => `<li>${esc(t(key))}: ${esc(st.setup[k] == null || st.setup[k] === '' ? '—' : st.setup[k])}${u ? ' ' + u : ''}</li>`).join('');
    let res = '';
    if (P.error) res = `<p>${esc(t(P.error, { n: P.n }))}</p>`;
    else {
      res = `<p>${esc(t('labFromData', { q: L.q, v: withUP(P.v, P.uc, L.unit), unit: unitSp(L.unit), rows: t('labRows', { n: P.n }), how: t(P.how) }))}</p>`;
      if (E && E.answer != null) res += `<p><strong>${esc(t('labProtoStudent', { q: L.q, v: (fin(E.unc) ? `${sig(E.answer, 4)} ± ${sig(E.unc, 2)}` : sig(E.answer, 4)), unit: unitSp(L.unit) }))}</strong></p>`;
    }
    APP.setPage(`<div class="no-print">
        <nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/laboratorium">${esc(t('labTitle'))}</a> / <a href="#/laboratorium/${id}">${esc(title(id))}</a></nav>
        <div class="actions"><button type="button" class="btn btn-primary" id="lab-print">🖨️ ${esc(t('print'))}</button>
          <a class="btn" href="#/laboratorium/${id}">${esc(t('labBack'))}</a></div>
      </div>
      <article class="lab-proto">
        <header class="lab-proto-head">
          <p class="muted small">${esc(t('labProtoTitle'))}</p>
          <h1>${L.icon} ${esc(title(id))}</h1>
          <div class="ws-fields">${esc(t('worksheetStudent'))} <span class="ws-line"></span> ${esc(t('date'))} <span class="ws-line short"></span></div>
        </header>
        <h2 class="lab-h">${esc(t('labGoal'))}</h2><p>${esc(t('labGoal_' + id))}</p>
        <h2 class="lab-h">${esc(t('labTools'))}</h2><p>${listOf('labTools_' + id).map(esc).join(', ')}</p>
        <h2 class="lab-h">${esc(t('labTheory'))}</h2><p class="lab-tex">$${texDec(L.tex)}$</p>
        ${setup ? `<h2 class="lab-h">${esc(t('labSetup'))}</h2><ul>${setup}</ul>` : ''}
        <h2 class="lab-h">${esc(t('labTable'))}</h2>
        <div class="lab-twrap"><table class="lab-table">${tableHtml(id, st, false)}</table></div>
        <h2 class="lab-h">${esc(t('labProtoResult'))}</h2>${res}
        <h2 class="lab-h">${esc(t('labProtoConcl'))}</h2>
        ${E && E.cls !== 'nodata' && E.cls !== 'noanswer' ? `<div class="lab-proto-ev">${evalHtml(id, E)}</div>` : `<p class="muted">${esc(t('labProtoNoEval'))}</p>`}
        <div class="lab-proto-lines" aria-hidden="true"><span></span><span></span><span></span></div>
      </article>`);
    $('lab-print').addEventListener('click', () => window.print());
  }

  /* ---------- registrácia ---------- */
  APP.route('laboratorium', (parts) => {
    cancelAnimationFrame(anim);
    if (parts[0] && LABS[parts[0]]) return parts[1] === 'protokol' ? protocolPage(parts[0]) : labPage(parts[0]);
    return listPage();
  });
  APP.addMenu({ href: '#/laboratorium', icon: '🔬', key: 'labMenu' });

  // v súvisiacich lekciách odkaz na laboratórne práce (lekcie o neistotách merania → zoznam prác)
  const NEIST = ['s1-platne-cislice', 's1-chyby-merania', 's1-opakovane-meranie', 's1-sirenie-neistot'];
  APP.addLessonPanel((Ls) => {
    const ids = IDS.filter((id) => LABS[id].lessons.includes(Ls.id));
    const neist = NEIST.includes(Ls.id) || /^s1-neist/.test(Ls.id);
    if (!ids.length && !neist) return '';
    const links = ids.length
      ? ids.map((id) => `<a class="btn btn-small" href="#/laboratorium/${id}">${LABS[id].icon} ${esc(title(id))}</a>`).join(' ')
      : `<a class="btn btn-small" href="#/laboratorium">🔬 ${esc(t('labTitle'))}</a>`;
    return `<aside class="lab-panel" aria-label="${esc(t('labPanel'))}">
      <h3 class="lab-panel-h">🔬 ${esc(t('labPanel'))}</h3>
      <p class="muted small">${esc(t('labPanelDesc'))}</p>
      <p class="lab-panel-links">${links}</p>
    </aside>`;
  });
})();
