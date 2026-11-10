/* Knižnica jednotiek: rozparsovanie zápisu jednotky a čísla s jednotkou, prevody a rozmery (window.JEDNOTKY).
   Bez závislostí (žiadne I18N ani DOM), v node: global.window = global; require('js/jednotky.js').
   Rozmer = vektor exponentov základných veličín SI v poradí [m, kg, s, A, K, mol, cd].

   JEDNOTKY.parse('km/h')            → { ok: true, factor, offset, dim, text, tex, parts } | { ok: false, error, pos, u? }
   JEDNOTKY.parseQuantity('72 km/h') → { ok: true, value, unit (výsledok parse | null), si } | { ok: false, error, pos, u? }
   JEDNOTKY.convert(x, from, to, delta?) → číslo; pri rôznom rozmere alebo zlom zápise vyhodí JEDNOTKY.Error (key, pos);
                                         delta = true: prevod rozdielu (teplotný rozdiel 10 °C = 10 K, bez posunu)
   JEDNOTKY.sameDim(a, b), dimText(dim), named(dim), tex(text), common(dim)

   Zápis: násobenie · ⋅ * × . alebo medzera (aj bez oddeľovača: Nm = N·m, kgm = kg·m), delenie /; všetko za lomkou až po
   ďalšiu lomku alebo zátvorku je v menovateli (J/kg·K = J/(kg·K), m/s/s = m/s²). Mocnina ^2, ^-1, ², ⁻¹ alebo číslica hneď
   za jednotkou (m2, cm3, s-2). Predpony y z a f p n µ/μ/u m c d da h k M G T P E (celé slovo má prednosť: min, Pa, cd, ha).
   °C a °F majú posun (offset): hodnota v SI = (x + offset) · factor. Pri rozdieloch teplôt použi convert(…, true). */
(function () {
  'use strict';

  class UnitError extends Error {
    constructor(key, pos, u) { super(key); this.key = key; this.pos = pos; this.u = u; }
  }

  const D = (m = 0, kg = 0, s = 0, A = 0, K = 0, mol = 0, cd = 0) => [m, kg, s, A, K, mol, cd];
  const ZERO = D();

  const PREFIX = {
    y: 1e-24, z: 1e-21, a: 1e-18, f: 1e-15, p: 1e-12, n: 1e-9, 'µ': 1e-6, 'μ': 1e-6, u: 1e-6, m: 1e-3, c: 1e-2, d: 1e-1,
    da: 1e1, h: 1e2, k: 1e3, M: 1e6, G: 1e9, T: 1e12, P: 1e15, E: 1e18
  };
  const PREFIX_KEYS = Object.keys(PREFIX).sort((a, b) => b.length - a.length);
  const ALL = Object.keys(PREFIX);
  const BIG = ['k', 'M', 'G'];

  // symbol → [násobok do SI, rozmer, povolené predpony, posun]
  const YEAR = 365.25 * 86400;
  const U = {
    m: [1, D(1), ALL], g: [1e-3, D(0, 1), ALL], s: [1, D(0, 0, 1), ALL], A: [1, D(0, 0, 0, 1), ALL], K: [1, D(0, 0, 0, 0, 1), ALL],
    mol: [1, D(0, 0, 0, 0, 0, 1), ALL], cd: [1, D(0, 0, 0, 0, 0, 0, 1), ALL],
    N: [1, D(1, 1, -2), ALL], J: [1, D(2, 1, -2), ALL], W: [1, D(2, 1, -3), ALL], Pa: [1, D(-1, 1, -2), ALL],
    C: [1, D(0, 0, 1, 1), ALL], V: [1, D(2, 1, -3, -1), ALL], 'Ω': [1, D(2, 1, -3, -2), ALL], ohm: [1, D(2, 1, -3, -2), ALL],
    S: [1, D(-2, -1, 3, 2), ALL], F: [1, D(-2, -1, 4, 2), ALL], T: [1, D(0, 1, -2, -1), ALL], Wb: [1, D(2, 1, -2, -1), ALL],
    H: [1, D(2, 1, -2, -2), ALL], Hz: [1, D(0, 0, -1), ALL], Bq: [1, D(0, 0, -1), ALL], Gy: [1, D(2, 0, -2), ALL],
    Sv: [1, D(2, 0, -2), ALL], lm: [1, D(0, 0, 0, 0, 0, 0, 1), ALL], lx: [1, D(-2, 0, 0, 0, 0, 0, 1), ALL],
    kat: [1, D(0, 0, -1, 0, 0, 1), ALL],
    // mimo SI
    min: [60, D(0, 0, 1), []], h: [3600, D(0, 0, 1), []], d: [86400, D(0, 0, 1), []],
    rok: [YEAR, D(0, 0, 1), BIG], a: [YEAR, D(0, 0, 1), BIG],
    l: [1e-3, D(3), ALL], L: [1e-3, D(3), ALL], t: [1000, D(0, 1), []], ha: [1e4, D(2), []], 'Å': [1e-10, D(1), []],
    bar: [1e5, D(-1, 1, -2), ALL], atm: [101325, D(-1, 1, -2), []], mmHg: [133.322387415, D(-1, 1, -2), []],
    cal: [4.184, D(2, 1, -2), ALL], Wh: [3600, D(2, 1, -2), ALL], Ah: [3600, D(0, 0, 1, 1), ALL],
    eV: [1.602176634e-19, D(2, 1, -2), ALL], u: [1.66053906660e-27, D(0, 1), []], Da: [1.66053906660e-27, D(0, 1), BIG],
    ly: [9.4607304725808e15, D(1), BIG], AU: [1.495978707e11, D(1), []], au: [1.495978707e11, D(1), []],
    pc: [3.0856775814913673e16, D(1), ALL],
    D: [1, D(-1), []], dpt: [1, D(-1), []],
    // bezrozmerné (dB len ako bezrozmerné číslo, logaritmická stupnica sa neprevádza)
    rad: [1, ZERO, ['m', 'µ', 'μ', 'u']], sr: [1, ZERO, []], '°': [Math.PI / 180, ZERO, []], '%': [0.01, ZERO, []],
    '‰': [0.001, ZERO, []], ppm: [1e-6, ZERO, []], dB: [1, ZERO, []],
    // teploty s posunom
    '°C': [1, D(0, 0, 0, 0, 1), [], 273.15], '°F': [5 / 9, D(0, 0, 0, 0, 1), [], 459.67]
  };
  const ALIAS = { '℃': '°C', '℉': '°F', 'º': '°', 'μ': 'µ' };

  // TeX zápis symbolov, ktoré nie sú obyčajný text
  const TEXSYM = { 'Ω': '\\Omega', ohm: '\\Omega', '°': '{}^\\circ', '%': '\\%', '°C': '{}^\\circ\\text{C}', '°F': '{}^\\circ\\text{F}' };
  const SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', '⁺': '+' };
  const TO_SUP = Object.fromEntries(Object.entries(SUP).map(([k, v]) => [v, k]));
  const sup = (n) => String(n).split('').map((c) => TO_SUP[c] || c).join('');

  const isLetter = (c) => /[A-Za-zµμΩÅ°º℃℉%‰]/.test(c);

  // jedno slovo: celá jednotka, alebo predpona + jednotka
  function single(w) {
    if (U[w]) return { prefix: '', unit: w };
    for (const p of PREFIX_KEYS) {
      if (w.startsWith(p) && w.length > p.length) {
        const rest = w.slice(p.length);
        if (U[rest] && U[rest][2].includes(p)) return { prefix: p, unit: rest };
      }
    }
    return null;
  }
  // slovo bez oddeľovačov → zoznam jednotiek; ak nie je jednou jednotkou, skúsi súčin (Nm, kgm) s najmenej kúskami
  function word(w0) {
    const w = w0.split('').map((c) => ALIAS[c] || c).join('');
    const one = single(w);
    if (one) return [one];
    const best = new Array(w.length + 1).fill(null);
    best[0] = [];
    for (let i = 0; i < w.length; i++) {
      if (!best[i]) continue;
      for (let j = w.length; j > i; j--) {
        const s = single(w.slice(i, j));
        if (s && (!best[j] || best[j].length > best[i].length + 1)) best[j] = [...best[i], s];
      }
    }
    return best[w.length] && best[w.length].length <= 3 ? best[w.length] : null;
  }

  /* ---------- lexer ---------- */
  function lex(src) {
    const out = [];
    let i = 0;
    while (i < src.length) {
      const c = src[i];
      if (/\s/.test(c)) { out.push({ t: 'sp', pos: i }); i++; continue; }
      if ('·⋅*×∙'.includes(c)) { out.push({ t: 'mul', pos: i }); i++; continue; }
      if (c === '.' && !/[0-9]/.test(src[i + 1] || '')) { out.push({ t: 'mul', pos: i }); i++; continue; }
      if (c === '/' || c === '÷') { out.push({ t: 'div', pos: i }); i++; continue; }
      if (c === '(' || c === '[') { out.push({ t: 'lp', pos: i }); i++; continue; }
      if (c === ')' || c === ']') { out.push({ t: 'rp', pos: i }); i++; continue; }
      if (c === '^') {
        // ^2, ^-1, ^(-2), ^0,5
        const m = src.slice(i + 1).match(/^\s*(\(\s*[-+−]?\d+(?:[.,]\d+)?\s*\)|[-+−]?\d+(?:[.,]\d+)?)/);
        if (!m) throw new UnitError('unitSyntax', i);
        out.push({ t: 'exp', v: Number(m[1].replace(/[()\s+]/g, '').replace('−', '-').replace(',', '.')), pos: i });
        i += 1 + m[0].length;
        continue;
      }
      if (SUP[c]) {
        let j = i, s = '';
        while (j < src.length && SUP[src[j]]) { s += SUP[src[j]]; j++; }
        if (!/^[-+]?\d+$/.test(s)) throw new UnitError('unitSyntax', i);
        out.push({ t: 'exp', v: Number(s), pos: i });
        i = j;
        continue;
      }
      if (/[0-9]/.test(c) || c === '-' || c === '−') {
        // celé číslo hneď za jednotkou = mocnina (m2, s-2); inak číselný činiteľ (1/min)
        const prev = out[out.length - 1];
        const m = src.slice(i).match(/^[-−]?\d+(?:[.,]\d+)?/);
        if (!m) throw new UnitError('unitSyntax', i);
        const v = Number(m[0].replace('−', '-').replace(',', '.'));
        if (prev && (prev.t === 'word' || prev.t === 'rp') && /^[-−]?\d+$/.test(m[0])) out.push({ t: 'exp', v, pos: i });
        else if (/^[-−]/.test(m[0])) throw new UnitError('unitSyntax', i);
        else out.push({ t: 'num', v, pos: i });
        i += m[0].length;
        continue;
      }
      if (isLetter(c)) {
        let j = i;
        if (c === '°' || c === 'º') { j++; if (/[CF]/.test(src[j] || '') && !isLetter(src[j + 1] || '')) j++; }
        else while (j < src.length && isLetter(src[j]) && !'°º%‰'.includes(src[j])) j++;
        if (j === i) j = i + 1;
        out.push({ t: 'word', v: src.slice(i, j), pos: i });
        i = j;
        continue;
      }
      throw new UnitError('unitSyntax', i);
    }
    // medzera je násobenie len medzi dvoma činiteľmi; okolo / ( ) ^ sa ignoruje
    const res = [];
    for (let k = 0; k < out.length; k++) {
      const tk = out[k];
      if (tk.t !== 'sp') { res.push(tk); continue; }
      const p = res[res.length - 1];
      let n = k + 1;
      while (out[n] && out[n].t === 'sp') n++;
      const nx = out[n];
      if (p && nx && ['word', 'num', 'rp'].includes(p.t) && ['word', 'num', 'lp'].includes(nx.t)) res.push({ t: 'mul', pos: tk.pos });
    }
    return res;
  }

  /* ---------- parser ----------
     expr   := group ('/' group)*      (každá skupina za lomkou je celá v menovateli)
     group  := factor (('·')? factor)*
     factor := (word | num | '(' expr ')') exp* */
  function parseTokens(toks) {
    let p = 0;
    const peek = () => toks[p];
    const next = () => toks[p++];
    const mk = (factor, dim, parts) => ({ factor, dim, parts });
    const scaleParts = (parts, e) => parts.map((q) => Object.assign({}, q, { exp: q.exp * e }));
    const mul = (a, b, sgn) => mk(a.factor * Math.pow(b.factor, sgn), a.dim.map((x, i) => x + sgn * b.dim[i]), [...a.parts, ...scaleParts(b.parts, sgn)]);
    const pow = (a, e) => mk(Math.pow(a.factor, e), a.dim.map((x) => x * e), scaleParts(a.parts, e));
    const starts = (tk) => tk && ['word', 'num', 'lp'].includes(tk.t);

    function expr() {
      let left = group();
      while (peek() && peek().t === 'div') {
        const d = next();
        if (!starts(peek())) throw new UnitError('unitSyntax', peek() ? peek().pos : d.pos);
        left = mul(left, group(), -1);
      }
      return left;
    }
    function group() {
      let left = factor();
      while (peek() && (peek().t === 'mul' || starts(peek()))) {
        if (peek().t === 'mul') {
          const m = next();
          if (!starts(peek())) throw new UnitError('unitSyntax', m.pos);
        }
        left = mul(left, factor(), 1);
      }
      return left;
    }
    function factor() {
      const tk = next();
      if (!tk) throw new UnitError('unitSyntax', -1);
      let r;
      if (tk.t === 'word') {
        const list = word(tk.v);
        if (!list) throw new UnitError('unitUnknown', tk.pos, tk.v);
        r = mk(1, ZERO.slice(), []);
        for (const q of list) {
          const def = U[q.unit];
          const pre = q.prefix === 'u' || q.prefix === 'μ' ? 'µ' : q.prefix;
          r = mul(r, mk(def[0] * (q.prefix ? PREFIX[q.prefix] : 1), def[1].slice(), [{ sym: pre + q.unit, unit: q.unit, exp: 1, offset: def[3] || 0 }]), 1);
        }
      } else if (tk.t === 'num') {
        r = mk(tk.v, ZERO.slice(), tk.v === 1 ? [] : [{ num: tk.v, exp: 1 }]);
      } else if (tk.t === 'lp') {
        r = expr();
        const c = next();
        if (!c || c.t !== 'rp') throw new UnitError('unitSyntax', c ? c.pos : tk.pos);
      } else throw new UnitError('unitSyntax', tk.pos);
      while (peek() && peek().t === 'exp') r = pow(r, next().v);
      return r;
    }
    if (!toks.length) return mk(1, ZERO.slice(), []);
    const r = expr();
    if (p < toks.length) throw new UnitError('unitSyntax', toks[p].pos);
    return r;
  }

  const clean = (x) => (Math.abs(x - Math.round(x)) < 1e-9 ? Math.round(x) : x);

  // spojí rovnaké symboly (m·m = m²) a zostaví normalizovaný text a TeX
  function present(parts) {
    const map = new Map();
    for (const q of parts) {
      const key = q.num !== undefined ? '#' + q.num : q.sym;
      const prev = map.get(key);
      if (prev) prev.exp += q.exp; else map.set(key, Object.assign({}, q));
    }
    const list = [...map.values()].map((q) => Object.assign(q, { exp: clean(q.exp) })).filter((q) => q.exp !== 0);
    const num = list.filter((q) => q.exp > 0), den = list.filter((q) => q.exp < 0);
    const txt = (q, e) => (q.num !== undefined ? String(q.num) : q.sym) + (e === 1 ? '' : Number.isInteger(e) ? sup(e) : '^' + e);
    const texOne = (q, e) => {
      let s;
      if (q.num !== undefined) s = String(q.num);
      else if (TEXSYM[q.sym]) s = TEXSYM[q.sym];
      else {
        const pre = q.sym.slice(0, q.sym.length - q.unit.length);
        if (TEXSYM[q.unit]) s = (pre === 'µ' ? '\\mu' : pre ? `\\text{${pre}}` : '') + TEXSYM[q.unit];
        else s = pre === 'µ' ? `\\mu\\text{${q.unit}}` : `\\text{${q.sym}}`;
      }
      return e === 1 ? s : `${s}^{${String(e)}}`;
    };
    let text = num.map((q) => txt(q, q.exp)).join('·');
    let tex = num.map((q) => texOne(q, q.exp)).join('\\cdot ');
    if (den.length) {
      if (!num.length) { text = '1'; tex = '1'; }
      const dt = den.map((q) => txt(q, -q.exp)).join('·'), dx = den.map((q) => texOne(q, -q.exp)).join('\\cdot ');
      text += '/' + (den.length > 1 ? `(${dt})` : dt);
      tex += '/' + (den.length > 1 ? `(${dx})` : dx);
    }
    return { text, tex };
  }

  function parse(text) {
    const src = String(text == null ? '' : text).trim();
    try {
      const r = parseTokens(lex(src));
      // posun °C/°F len pri samostatnej jednotke (°C/s je rýchlosť zmeny teploty – posun sa tam neuplatní)
      const offset = r.parts.length === 1 && r.parts[0].exp === 1 ? r.parts[0].offset || 0 : 0;
      const pr = present(r.parts);
      return { ok: true, factor: r.factor, offset, dim: r.dim.map(clean), text: pr.text, tex: pr.tex, parts: r.parts };
    } catch (e) {
      if (e instanceof UnitError) return Object.assign({ ok: false, error: e.key, pos: e.pos }, e.u ? { u: e.u } : {});
      throw e;
    }
  }

  /* ---------- číslo s jednotkou ---------- */
  const NUM_RE = /^([-+]?)(\d{1,3}(?:[   ]\d{3})+(?![0-9])|\d+)?([.,]\d+)?/;
  function parseQuantity(text) {
    const src = String(text == null ? '' : text).replace(/[−–]/g, '-');
    let i = 0;
    while (/\s/.test(src[i] || '')) i++;
    const m = src.slice(i).match(NUM_RE);
    if (!m || (!m[2] && !m[3])) return { ok: false, error: 'unitNumber', pos: i };
    let value = Number(m[1] + (m[2] || '0').replace(/[   ]/g, '') + (m[3] || '').replace(',', '.'));
    i += m[0].length;
    // exponent: 2e3, 2E-3
    let e = src.slice(i).match(/^[eE]([-+]?\d+)(?![A-Za-z])/);
    if (e) { value *= Math.pow(10, Number(e[1])); i += e[0].length; }
    else {
      // ·10^3, × 10⁻³, *10^(-3), x10^3
      e = src.slice(i).match(/^\s*[·⋅*×xX∙]\s*10\s*(?:\^\s*\(?\s*([-+]?\d+)\s*\)?|([⁻⁺]?[⁰¹²³⁴⁵⁶⁷⁸⁹]+))/);
      if (e) {
        const ex = e[1] !== undefined ? Number(e[1]) : Number(e[2].split('').map((c) => SUP[c]).join(''));
        value *= Math.pow(10, ex);
        i += e[0].length;
      }
    }
    const rest = src.slice(i);
    if (!rest.trim()) return { ok: true, value, unit: null, si: value };
    const u = parse(rest);
    const lead = rest.length - rest.replace(/^\s+/, '').length;
    if (!u.ok) return Object.assign({}, u, { pos: u.pos < 0 ? src.length : u.pos + i + lead });
    if (!u.parts.length && u.factor === 1) return { ok: true, value, unit: null, si: value };
    return { ok: true, value, unit: u, si: (value + u.offset) * u.factor };
  }

  /* ---------- prevody a rozmery ---------- */
  const asUnit = (u) => {
    if (u && typeof u === 'object' && u.ok) return u;
    const r = parse(u);
    if (!r.ok) throw new UnitError(r.error, r.pos, r.u);
    return r;
  };
  const eqDim = (a, b) => a.every((x, i) => Math.abs(x - b[i]) < 1e-9);
  function sameDim(a, b) {
    try { return eqDim(asUnit(a).dim, asUnit(b).dim); } catch (e) { return false; }
  }
  function convert(value, from, to, delta) {
    const f = asUnit(from), t = asUnit(to);
    if (!eqDim(f.dim, t.dim)) throw new UnitError('unitDim', -1);
    if (delta) return value * f.factor / t.factor;
    return (value + f.offset) * f.factor / t.factor - t.offset;
  }

  const BASE = ['m', 'kg', 's', 'A', 'K', 'mol', 'cd'];
  const SHOW = [1, 0, 2, 3, 4, 5, 6]; // poradie zobrazenia: kg, m, s, A, K, mol, cd
  // exponent ako text: celé číslo, alebo zlomok s malým menovateľom (1/2)
  function expText(x) {
    x = clean(x);
    if (Number.isInteger(x)) return String(x);
    for (let q = 2; q <= 12; q++) { const p = x * q; if (Math.abs(p - Math.round(p)) < 1e-9) return `${Math.round(p)}/${q}`; }
    return String(+x.toFixed(4));
  }
  function dimText(dim) {
    const out = SHOW.filter((i) => Math.abs(dim[i]) > 1e-9).map((i) => {
      const e = expText(dim[i]);
      return `\\text{${BASE[i]}}${e === '1' ? '' : `^{${e}}`}`;
    });
    return out.length ? out.join('\\,') : '1';
  }
  const NAMED = [
    ['m', D(1)], ['kg', D(0, 1)], ['s', D(0, 0, 1)], ['A', D(0, 0, 0, 1)], ['K', D(0, 0, 0, 0, 1)], ['mol', D(0, 0, 0, 0, 0, 1)],
    ['cd', D(0, 0, 0, 0, 0, 0, 1)], ['N', U.N[1]], ['J', U.J[1]], ['W', U.W[1]], ['Pa', U.Pa[1]], ['C', U.C[1]], ['V', U.V[1]],
    ['Ω', U['Ω'][1]], ['S', U.S[1]], ['F', U.F[1]], ['T', U.T[1]], ['Wb', U.Wb[1]], ['H', U.H[1]], ['Hz', U.Hz[1]], ['lx', U.lx[1]],
    ['kat', U.kat[1]]
  ];
  function named(dim) {
    const hit = NAMED.find(([, d]) => eqDim(d, dim));
    return hit ? hit[0] : null;
  }
  function tex(text) {
    const r = text && typeof text === 'object' && text.ok ? text : parse(text);
    if (!r.ok) return `\\text{${String(text).replace(/[\\{}$&#^_%~]/g, '')}}`;
    return r.tex;
  }

  // bežné jednotky danej veličiny (diagnóza „zabudnutý prevod“, nápoveda pri vstupe)
  const COMMON = ['m', 'km', 'cm', 'mm', 'dm', 'µm', 'nm', 'g', 'kg', 't', 'mg', 's', 'min', 'h', 'ms', 'm/s', 'km/h', 'km/s',
    'm/s²', 'N', 'kN', 'mN', 'MN', 'J', 'kJ', 'MJ', 'Wh', 'kWh', 'eV', 'keV', 'MeV', 'cal', 'kcal', 'W', 'kW', 'MW', 'mW',
    'Pa', 'kPa', 'hPa', 'MPa', 'bar', 'V', 'kV', 'mV', 'A', 'mA', 'µA', 'kA', 'Ω', 'kΩ', 'MΩ', 'C', 'mC', 'µC', 'nC', 'mAh', 'Ah',
    'F', 'µF', 'nF', 'pF', 'mF', 'T', 'mT', 'µT', 'Hz', 'kHz', 'MHz', 'l', 'ml', 'm³', 'dm³', 'cm³', 'm²', 'cm²', 'dm²', 'mm²', 'km²',
    'ha', 'kg/m³', 'g/cm³', 'g/l', 'K', '°C', '°', 'rad', '%', 'N/m', 'J/kg', 'kJ/kg', 'J/(kg·K)', 'kJ/(kg·K)', 'N·m', 'kg·m/s',
    'g/mol', 'kg/mol', 'mol', 'mmol', 'H', 'mH', 'Wb', 'Bq', 'kBq', 'Gy', 'mGy', 'Sv', 'mSv', 'ly', 'AU', 'pc', 'kpc', 'Mpc', 'u'];
  let commonParsed = null;
  function common(dim) {
    const d = Array.isArray(dim) ? dim : asUnit(dim).dim;
    if (!commonParsed) commonParsed = COMMON.map((u) => [u, parse(u)]);
    return commonParsed.filter(([, r]) => eqDim(r.dim, d)).map(([u]) => u);
  }

  window.JEDNOTKY = { parse, parseQuantity, convert, sameDim, dimText, named, tex, common, Error: UnitError, BASE };
})();
