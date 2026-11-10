/* Parser matematických výrazov, ktoré píše žiak (graf funkcií, kontrola postupu).

   MATHEXPR.parse('2x^2 - 3sin x') → { ast, vars: ['x'], fn(scope) → číslo, tex }
   MATHEXPR.relation('2(x+1) = 6')  → { op: '=', left, right, tex } (left/right ako z parse), alebo
                                      { op: null, expr } pre výraz bez znamienka vzťahu
   MATHEXPR.fromAst(ast)               → rovnaký objekt ako z parse pre časť stromu (napr. jeden člen súčtu)
   Chyba zápisu vyhodí MATHEXPR.Error s pos (index v reťazci) a key (kľúč prekladu rozhrania).

   Zápis:
   - desatinná čiarka aj bodka (2,5 = 2.5), medzery sa ignorujú,
   - + − - * · × / : ^ ** a √, faktoriál n!, absolútna hodnota |x|, zátvorky () [] {},
   - implicitné násobenie: 2x, 3(x+1), (x+1)(x−1), xy = x·y, 2sin x,
   - funkcie: sin cos tan/tg cot/cotg asin/arcsin acos/arccos atan/arctg/arctan sqrt cbrt abs ln log (desiatkový)
     log2 exp sinh cosh tanh sgn floor ceil; argument môže byť aj bez zátvoriek (sin x, sin 2x = sin(2x)),
   - konštanty pi/π, e; ostatné písmená sú premenné (jednopísmenové, aj s indexom: x1, a_2).
   Vzťahy: = < > <= >= ≤ ≥ ≠ != (najviac jeden na najvyššej úrovni). */
(function () {
  'use strict';

  class MathError extends Error {
    constructor(key, pos) { super(key); this.key = key; this.pos = pos; }
  }

  const FUNCS = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan, tg: Math.tan,
    cot: (x) => 1 / Math.tan(x), cotg: (x) => 1 / Math.tan(x),
    asin: Math.asin, arcsin: Math.asin, acos: Math.acos, arccos: Math.acos,
    atan: Math.atan, arctg: Math.atan, arctan: Math.atan,
    sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs, ln: Math.log, log: Math.log10, log2: Math.log2,
    exp: Math.exp, sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh, sgn: Math.sign, floor: Math.floor, ceil: Math.ceil
  };
  const FUNC_TEX = {
    sin: '\\sin', cos: '\\cos', tan: '\\tan', tg: '\\operatorname{tg}', cot: '\\cot', cotg: '\\operatorname{cotg}',
    asin: '\\arcsin', arcsin: '\\arcsin', acos: '\\arccos', arccos: '\\arccos', atan: '\\arctan', arctg: '\\operatorname{arctg}',
    arctan: '\\arctan', ln: '\\ln', log: '\\log', log2: '\\log_2', exp: '\\exp', sinh: '\\sinh', cosh: '\\cosh', tanh: '\\tanh',
    sgn: '\\operatorname{sgn}', floor: '\\operatorname{floor}', ceil: '\\operatorname{ceil}'
  };
  // dlhšie názvy skôr (arcsin pred asin, cotg pred cot, log2 pred log)
  const NAMES = Object.keys(FUNCS).sort((a, b) => b.length - a.length);
  const REL = ['<=', '>=', '!=', '≤', '≥', '≠', '=', '<', '>'];
  const REL_NORM = { '<=': '≤', '>=': '≥', '!=': '≠' };

  /* ---------- lexer ---------- */
  function lex(src) {
    const out = [];
    let i = 0;
    while (i < src.length) {
      const c = src[i];
      if (/\s/.test(c)) { i++; continue; }
      if (/[0-9]/.test(c) || ((c === '.' || c === ',') && /[0-9]/.test(src[i + 1] || ''))) {
        let j = i, dot = false;
        while (j < src.length && (/[0-9]/.test(src[j]) || (!dot && (src[j] === '.' || src[j] === ',') && /[0-9]/.test(src[j + 1] || '')))) {
          if (src[j] === '.' || src[j] === ',') dot = true;
          j++;
        }
        out.push({ t: 'num', v: parseFloat(src.slice(i, j).replace(',', '.')), pos: i });
        i = j;
        continue;
      }
      if (/[a-zA-Zα-ωΑ-Ω]/.test(c)) {
        // celé slovo; rozdelí sa na funkcie, konštanty a jednopísmenové premenné
        let j = i;
        while (j < src.length && /[a-zA-Zα-ωΑ-Ω0-9_]/.test(src[j])) j++;
        splitWord(src.slice(i, j), i, out);
        i = j;
        continue;
      }
      if (c === '*' && src[i + 1] === '*') { out.push({ t: 'op', v: '^', pos: i }); i += 2; continue; }
      const two = src.slice(i, i + 2);
      if (REL.includes(two)) { out.push({ t: 'rel', v: REL_NORM[two] || two, pos: i }); i += 2; continue; }
      if (REL.includes(c)) { out.push({ t: 'rel', v: c, pos: i }); i++; continue; }
      if ('+-−–'.includes(c)) { out.push({ t: 'op', v: c === '+' ? '+' : '-', pos: i }); i++; continue; }
      if ('*·×⋅'.includes(c)) { out.push({ t: 'op', v: '*', pos: i }); i++; continue; }
      if ('/:÷'.includes(c)) { out.push({ t: 'op', v: '/', pos: i }); i++; continue; }
      if (c === '^') { out.push({ t: 'op', v: '^', pos: i }); i++; continue; }
      if ('²³'.includes(c)) { out.push({ t: 'op', v: '^', pos: i }, { t: 'num', v: c === '²' ? 2 : 3, pos: i }); i++; continue; }
      if (c === '!') { out.push({ t: 'fact', pos: i }); i++; continue; }
      if (c === '√') { out.push({ t: 'fn', v: 'sqrt', pos: i }); i++; continue; }
      if (c === 'π') { out.push({ t: 'const', v: 'pi', pos: i }); i++; continue; }
      if ('([{'.includes(c)) { out.push({ t: 'lp', pos: i }); i++; continue; }
      if (')]}'.includes(c)) { out.push({ t: 'rp', pos: i }); i++; continue; }
      if (c === '|') { out.push({ t: 'bar', pos: i }); i++; continue; }
      throw new MathError('exprBadChar', i);
    }
    out.push({ t: 'end', pos: src.length });
    return out;
  }

  function splitWord(w, pos, out) {
    let k = 0;
    while (k < w.length) {
      const rest = w.slice(k);
      const f = NAMES.find((n) => rest.toLowerCase().startsWith(n) && !(n === 'log' && /^log2/i.test(rest)));
      if (f) { out.push({ t: 'fn', v: f, pos: pos + k }); k += f.length; continue; }
      if (/^pi/i.test(rest)) { out.push({ t: 'const', v: 'pi', pos: pos + k }); k += 2; continue; }
      if (/^[0-9]/.test(rest)) {
        // číslo za slovom (napr. 2x3 by sa sem nedostalo; x2 je premenná s indexom – rieši sa nižšie)
        const m = rest.match(/^[0-9]+/)[0];
        out.push({ t: 'num', v: parseFloat(m), pos: pos + k });
        k += m.length;
        continue;
      }
      if (rest[0] === '_') { k++; continue; }
      // premenná: písmeno, voliteľne s indexom (x1, a_2)
      const m = rest.match(/^[a-zA-Zα-ωΑ-Ω](?:_?[0-9]+)?/)[0];
      const name = m.replace('_', '');
      out.push(name === 'e' ? { t: 'const', v: 'e', pos: pos + k } : { t: 'var', v: name, pos: pos + k });
      k += m.length;
    }
  }

  /* ---------- parser (rekurzívny zostup) ---------- */
  function parseTokens(toks, stopRel) {
    let p = 0;
    const peek = () => toks[p];
    const next = () => toks[p++];
    const startsFactor = (tk) => ['num', 'var', 'const', 'fn', 'lp'].includes(tk.t);

    function expr() {
      let left = term();
      while (peek().t === 'op' && (peek().v === '+' || peek().v === '-')) {
        const op = next().v;
        left = { k: op === '+' ? 'add' : 'sub', a: left, b: term() };
      }
      return left;
    }
    function term() {
      let left = unary();
      for (;;) {
        const tk = peek();
        if (tk.t === 'op' && (tk.v === '*' || tk.v === '/')) {
          next();
          left = { k: tk.v === '*' ? 'mul' : 'div', a: left, b: unary() };
        } else if (startsFactor(tk) || (tk.t === 'bar' && inBar === 0)) {
          left = { k: 'mul', a: left, b: power(), implicit: true };
        } else return left;
      }
    }
    function unary() {
      const tk = peek();
      if (tk.t === 'op' && (tk.v === '-' || tk.v === '+')) {
        next();
        const a = unary();
        return tk.v === '-' ? { k: 'neg', a } : a;
      }
      return power();
    }
    function power() {
      const base = postfix();
      if (peek().t === 'op' && peek().v === '^') {
        next();
        return { k: 'pow', a: base, b: unary() }; // pravá asociativita, 2^-1 je povolené
      }
      return base;
    }
    function postfix() {
      let a = primary();
      while (peek().t === 'fact') { next(); a = { k: 'fact', a }; }
      return a;
    }
    let inBar = 0;
    function primary() {
      const tk = next();
      if (tk.t === 'num') return { k: 'num', v: tk.v };
      if (tk.t === 'var') return { k: 'var', v: tk.v };
      if (tk.t === 'const') return { k: 'const', v: tk.v };
      if (tk.t === 'lp') {
        const a = expr();
        if (next().t !== 'rp') throw new MathError('exprParen', tk.pos);
        return { k: 'group', a };
      }
      if (tk.t === 'bar') {
        inBar++;
        const a = expr();
        inBar--;
        if (next().t !== 'bar') throw new MathError('exprBar', tk.pos);
        return { k: 'fn', f: 'abs', a };
      }
      if (tk.t === 'fn') {
        // mocnina hneď za názvom: sin^2 x = (sin x)^2
        let exp = null;
        if (peek().t === 'op' && peek().v === '^') { next(); exp = postfix(); }
        let a;
        if (peek().t === 'lp') a = postfix();
        else {
          // bez zátvoriek: sin x, sin 2x, √2x → argument je súčin bez + a −
          if (!startsFactor(peek()) && peek().t !== 'bar') throw new MathError('exprArg', tk.pos);
          a = power();
          while (startsFactor(peek()) && peek().t !== 'fn') a = { k: 'mul', a, b: power(), implicit: true };
        }
        const node = { k: 'fn', f: tk.v, a: a.k === 'group' ? a.a : a };
        return exp ? { k: 'pow', a: node, b: exp } : node;
      }
      if (tk.t === 'end') throw new MathError('exprEnd', tk.pos);
      if (tk.t === 'rel' && !stopRel) throw new MathError('exprRel', tk.pos);
      throw new MathError('exprUnexpected', tk.pos);
    }

    const ast = expr();
    if (peek().t === 'rp') throw new MathError('exprParen', peek().pos);
    return { ast, rest: toks.slice(p) };
  }

  /* ---------- vyhodnotenie ---------- */
  function fact(n) {
    if (n < 0 || !Number.isInteger(n)) return NaN;
    let r = 1;
    for (let i = 2; i <= n && r < Infinity; i++) r *= i;
    return r;
  }
  function evaluate(n, s) {
    switch (n.k) {
      case 'num': return n.v;
      case 'const': return n.v === 'pi' ? Math.PI : Math.E;
      case 'var': return n.v in s ? s[n.v] : NaN;
      case 'group': return evaluate(n.a, s);
      case 'neg': return -evaluate(n.a, s);
      case 'add': return evaluate(n.a, s) + evaluate(n.b, s);
      case 'sub': return evaluate(n.a, s) - evaluate(n.b, s);
      case 'mul': return evaluate(n.a, s) * evaluate(n.b, s);
      case 'div': return evaluate(n.a, s) / evaluate(n.b, s);
      case 'pow': {
        const a = evaluate(n.a, s), b = evaluate(n.b, s);
        // záporný základ s nepárnou odmocninou: (−8)^(1/3) = −2
        if (a < 0 && !Number.isInteger(b)) {
          const q = 1 / b;
          if (Number.isInteger(Math.round(q)) && Math.abs(q - Math.round(q)) < 1e-9 && Math.round(q) % 2) return -Math.pow(-a, b);
        }
        return Math.pow(a, b);
      }
      case 'fact': return fact(evaluate(n.a, s));
      case 'fn': return FUNCS[n.f](evaluate(n.a, s));
      default: return NaN;
    }
  }

  function collectVars(n, set) {
    if (!n) return set;
    if (n.k === 'var') set.add(n.v);
    collectVars(n.a, set);
    collectVars(n.b, set);
    return set;
  }

  /* ---------- TeX (na zobrazenie toho, ako aplikácia zápis pochopila) ---------- */
  const PREC = { add: 1, sub: 1, neg: 2, mul: 3, div: 3, pow: 4, fact: 5 };
  const fmtNum = (v) => String(+v.toFixed(10)).replace('.', '{,}');
  function tex(n, dec) {
    const num = (v) => (dec === '.' ? String(+v.toFixed(10)) : fmtNum(v));
    const wrap = (child, minPrec) => {
      const s = tex(child, dec);
      const p = PREC[child.k];
      return p !== undefined && p < minPrec ? `\\left(${s}\\right)` : s;
    };
    switch (n.k) {
      case 'num': return num(n.v);
      case 'const': return n.v === 'pi' ? '\\pi' : 'e';
      case 'var': return n.v.length > 1 && /\d/.test(n.v) ? `${n.v[0]}_{${n.v.slice(1)}}` : n.v;
      case 'group': return `\\left(${tex(n.a, dec)}\\right)`;
      case 'neg': return `-${wrap(n.a, 3)}`;
      case 'add': return `${tex(n.a, dec)} + ${wrap(n.b, 1)}`;
      case 'sub': return `${tex(n.a, dec)} - ${wrap(n.b, 2)}`;
      case 'mul': {
        // −2x sa parsuje ako (−2)·x; zobrazíme −2x namiesto (−2)·x (hodnota je rovnaká)
        if (n.a.k === 'neg') return `-${tex(Object.assign({}, n, { a: n.a.a }), dec)}`;
        const a = wrap(n.a, 3), b = wrap(n.b, 3);
        // 2x, 3\sin x bez bodky; číslo za číslom s bodkou
        const dot = !n.implicit || (n.b.k === 'num') || /^-/.test(b);
        return dot ? `${a} \\cdot ${b}` : `${a}\\,${b}`;
      }
      case 'div': return `\\frac{${tex(strip(n.a), dec)}}{${tex(strip(n.b), dec)}}`;
      case 'pow': {
        const base = ['num', 'var', 'const', 'group'].includes(n.a.k) && !(n.a.k === 'num' && n.a.v < 0) ? tex(n.a, dec) : `\\left(${tex(n.a, dec)}\\right)`;
        return `${base}^{${tex(strip(n.b), dec)}}`;
      }
      case 'fact': return `${wrap(n.a, 5)}!`;
      case 'fn':
        if (n.f === 'sqrt') return `\\sqrt{${tex(n.a, dec)}}`;
        if (n.f === 'cbrt') return `\\sqrt[3]{${tex(n.a, dec)}}`;
        if (n.f === 'abs') return `\\left|${tex(n.a, dec)}\\right|`;
        return `${FUNC_TEX[n.f]}\\left(${tex(n.a, dec)}\\right)`;
      default: return '';
    }
  }
  const strip = (n) => (n.k === 'group' ? n.a : n);

  function build(ast) {
    const vars = [...collectVars(ast, new Set())].sort();
    return {
      ast, vars,
      fn: (scope) => evaluate(ast, scope || {}),
      tex: (dec) => tex(ast, dec || ',')
    };
  }

  function parse(src) {
    const toks = lex(String(src));
    if (toks.length === 1) throw new MathError('exprEmpty', 0);
    const { ast, rest } = parseTokens(toks, false);
    if (rest[0].t !== 'end') throw new MathError(rest[0].t === 'rel' ? 'exprRel' : 'exprUnexpected', rest[0].pos);
    return build(ast);
  }

  function relation(src) {
    const toks = lex(String(src));
    if (toks.length === 1) throw new MathError('exprEmpty', 0);
    const first = parseTokens(toks, true);
    const r = first.rest[0];
    if (r.t === 'end') return { op: null, expr: build(first.ast) };
    if (r.t !== 'rel') throw new MathError('exprUnexpected', r.pos);
    if (first.rest[1].t === 'end') throw new MathError('exprEnd', r.pos + 1);
    const second = parseTokens(first.rest.slice(1), true);
    if (second.rest[0].t !== 'end') throw new MathError(second.rest[0].t === 'rel' ? 'exprTwoRel' : 'exprUnexpected', second.rest[0].pos);
    const left = build(first.ast), right = build(second.ast);
    return {
      op: r.v, left, right,
      vars: [...new Set([...left.vars, ...right.vars])].sort(),
      tex: (dec) => `${left.tex(dec)} ${{ '=': '=', '<': '<', '>': '>', '≤': '\\le', '≥': '\\ge', '≠': '\\ne' }[r.v]} ${right.tex(dec)}`
    };
  }

  window.MATHEXPR = { parse, relation, fromAst: build, Error: MathError, FUNCS: Object.keys(FUNCS) };
})();
