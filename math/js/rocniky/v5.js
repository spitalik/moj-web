/* Vysoká škola: Matematická logika a teória množín (úroveň v5).
   Výroková a predikátová logika, metódy dôkazov, množiny, relácie a zobrazenia, ekvivalencie a usporiadania,
   matematická indukcia a rekurencie, základy formálnych systémov. Výrokové formuly sa v generátoroch
   reprezentujú ako stromy, ich pravdivostné hodnoty a vlastnosti počíta kód (nikdy nie sú zadané ručne). */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const { n1 } = FIGURES.util;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v5' }, l));
  const gen = (id, fn) => EXERCISES.register(id, fn);
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu: 1 prvok, 2 prvky, 5 prvkov.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);
  const setTex = (a) => (a.length ? `\\{${a.join(', ')}\\}` : '\\emptyset');
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const C = (n, k) => { if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
  const isPrime = (n) => { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
  const mod = (a, m) => ((a % m) + m) % m;
  // lineárna kombinácia pre KaTeX: [[3, 'a_{n-1}'], [-2, 'a_{n-2}']] -> "3a_{n-1} - 2a_{n-2}"
  const lin = (terms) => {
    let s = '';
    for (const [c, v] of terms) {
      if (c === 0) continue;
      const a = Math.abs(c), coef = a === 1 && v ? '' : String(a);
      s += s ? ` ${c > 0 ? '+' : '-'} ${coef}${v}` : `${c < 0 ? '-' : ''}${coef}${v}`;
    }
    return s || '0';
  };
  // pokračovanie výrazu: "+3x-2", prázdne pri nule
  const tail = (terms) => { const t = lin(terms); return t === '0' ? '' : t.startsWith('-') ? t : '+' + t; };
  const par = (x) => (x < 0 ? `(${x})` : String(x));
  const YN = ['áno', 'nie'];
  const TF = ['pravdivý', 'nepravdivý'];

  /* ---------- výrokové formuly ako stromy ---------- */

  const V = (v) => ({ v });
  const N = (a) => ({ op: 'not', a });
  const B = (op, a, b) => ({ op, a, b });
  const neg = (f) => (f.op === 'not' ? f.a : N(f)); // negácia so zjednodušením ¬¬X = X
  const OPS = { and: '\\land', or: '\\lor', imp: '\\Rightarrow', eq: '\\Leftrightarrow' };
  const SYM = { and: '∧', or: '∨', imp: '⇒', eq: '⇔' };
  const ev = (f, s) => {
    if (f.v) return s[f.v];
    if (f.op === 'not') return !ev(f.a, s);
    const a = ev(f.a, s), b = ev(f.b, s);
    return f.op === 'and' ? a && b : f.op === 'or' ? a || b : f.op === 'imp' ? !a || b : a === b;
  };
  const tex = (f, top = true) => {
    if (f.v) return f.v;
    if (f.op === 'not') return `\\neg ${tex(f.a, false)}`;
    const s = `${tex(f.a, false)} ${OPS[f.op]} ${tex(f.b, false)}`;
    return top ? s : `(${s})`;
  };
  const varsOf = (f, acc = new Set()) => { if (f.v) acc.add(f.v); else { varsOf(f.a, acc); if (f.b) varsOf(f.b, acc); } return acc; };
  // všetky ohodnotenia premenných (v poradí pravdivostnej tabuľky: 1…1 až 0…0)
  const assignments = (vars) => {
    const out = [];
    for (let m = (1 << vars.length) - 1; m >= 0; m--) {
      const s = {};
      vars.forEach((v, i) => { s[v] = !!(m & (1 << (vars.length - 1 - i))); });
      out.push(s);
    }
    return out;
  };
  const sortedVars = (fs) => [...fs.reduce((acc, f) => varsOf(f, acc), new Set())].sort();
  const trueRows = (f, vars = sortedVars([f])) => assignments(vars).filter((s) => ev(f, s)).length;
  const equiv = (f, g) => assignments(sortedVars([f, g])).every((s) => ev(f, s) === ev(g, s));
  const randForm = (vars, depth) => {
    if (depth === 0 || Math.random() < 0.2) return V(pick(vars));
    if (Math.random() < 0.2) return N(randForm(vars, depth - 1));
    let a, b;
    do { a = randForm(vars, depth - 1); b = randForm(vars, depth - 1); } while (tex(a) === tex(b)); // bez p ∨ p
    return B(pick(['and', 'or', 'imp', 'imp', 'eq']), a, b);
  };
  const KIND = ['tautológia', 'kontradikcia', 'splniteľná, ale nie tautológia'];
  const kindOf = (f) => {
    const vars = sortedVars([f]), t = trueRows(f, vars);
    return t === 1 << vars.length ? KIND[0] : t === 0 ? KIND[1] : KIND[2];
  };
  const b01 = (x) => (x ? 1 : 0);
  // typická chyba: implikácia s nepravdivým predpokladom vyhodnotená ako nepravdivá (⇒ počítaná ako ∧)
  const evImpAnd = (f, s) => {
    if (f.v) return s[f.v];
    if (f.op === 'not') return !evImpAnd(f.a, s);
    const a = evImpAnd(f.a, s), b = evImpAnd(f.b, s);
    return f.op === 'and' || f.op === 'imp' ? a && b : f.op === 'or' ? a || b : a === b;
  };

  /* ---------- pomôcky na kreslenie ---------- */

  // šípka z (x1, y1) do (x2, y2), skrátená o r na oboch koncoch
  const arrow = (x1, y1, x2, y2, r = 6, cls = 'f-thin') => {
    const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
    const ax = x1 + ux * r, ay = y1 + uy * r, bx = x2 - ux * r, by = y2 - uy * r;
    const cx = bx - ux * 9, cy = by - uy * 9;
    return `<line class="${cls}" x1="${n1(ax)}" y1="${n1(ay)}" x2="${n1(cx)}" y2="${n1(cy)}"/>
      <polygon class="f-solid" points="${n1(bx)},${n1(by)} ${n1(cx - uy * 4)},${n1(cy + ux * 4)} ${n1(cx + uy * 4)},${n1(cy - ux * 4)}"/>`;
  };

  /* ======================= 1. VÝROKOVÁ LOGIKA ======================= */

  fig('v5-tabulka', {
    draw: () => {
      const cols = [['p', (p) => p], ['q', (p, q) => q], ['¬p', (p) => !p], ['p ∧ q', (p, q) => p && q],
        ['p ∨ q', (p, q) => p || q], ['p ⇒ q', (p, q) => !p || q], ['p ⇔ q', (p, q) => p === q]];
      const rows = [[true, true], [true, false], [false, true], [false, false]];
      const W = 62, H = 30, ox = 6, oy = 6;
      let s = `<svg viewBox="0 0 ${ox * 2 + cols.length * W} ${oy * 2 + 5 * H}" role="img" aria-label="Pravdivostná tabuľka základných logických spojok">`;
      cols.forEach(([h], j) => {
        s += `<rect class="f-cell ${j < 2 ? 'f-fill' : ''}" x="${ox + j * W}" y="${oy}" width="${W}" height="${H}"/>
          <text class="f-text" x="${ox + j * W + W / 2}" y="${oy + 20}" text-anchor="middle">${h}</text>`;
      });
      rows.forEach(([p, q], i) => {
        cols.forEach(([, fn], j) => {
          const v = fn(p, q), y = oy + (i + 1) * H;
          s += `<rect class="f-cell ${j < 2 ? 'f-fill' : ''}" x="${ox + j * W}" y="${y}" width="${W}" height="${H}"/>
            <text class="f-text ${v && j >= 2 ? 'c-accent' : ''}" x="${ox + j * W + W / 2}" y="${y + 20}" text-anchor="middle">${v ? 1 : 0}</text>`;
        });
      });
      return s + '</svg>';
    }
  });

  lesson({
    id: 'v5-vyrokova', order: 10, title: 'Výroková logika a logické spojky',
    summary: 'Výroky a ich pravdivostné hodnoty, logické spojky, pravdivostné tabuľky, tautológie a De Morganove zákony.',
    theory: [
      `<p><strong>Výrok</strong> je tvrdenie, o ktorom má zmysel povedať, či je pravdivé, alebo nepravdivé (pravdivostná hodnota 1 alebo 0).
       „Číslo 7 je prvočíslo“ je pravdivý výrok, „$2+2=5$“ je nepravdivý výrok, ale „Zatvor okno!“ či „$x&gt;3$“ výrokmi nie sú
       (prvé nie je tvrdenie, druhé závisí od $x$). Z jednoduchých výrokov skladáme zložené pomocou <strong>logických spojok</strong>:
       negácia $\\neg p$ („nie je pravda, že $p$“), konjunkcia $p\\land q$ („$p$ a $q$“), disjunkcia $p\\lor q$ („$p$ alebo $q$“, nevylučovacie),
       implikácia $p\\Rightarrow q$ („ak $p$, tak $q$“) a ekvivalencia $p\\Leftrightarrow q$ („$p$ práve vtedy, keď $q$“).</p>`,
      `<p><strong>Pravdivostná tabuľka</strong> udáva hodnotu zloženého výroku pre všetky kombinácie hodnôt premenných; pri $n$ premenných má $2^n$ riadkov.
       Konjunkcia je pravdivá len vtedy, keď sú pravdivé obe zložky, disjunkcia je nepravdivá len vtedy, keď sú nepravdivé obe.
       Implikácia $p\\Rightarrow q$ je nepravdivá <em>jedine</em> v prípade $p=1$, $q=0$ – z nepravdivého predpokladu teda „vyplýva čokoľvek“.
       Ekvivalencia je pravdivá, keď majú obe strany rovnakú hodnotu. Pri vyhodnocovaní platí priorita $\\neg$, potom $\\land$, $\\lor$, $\\Rightarrow$, $\\Leftrightarrow$;
       v pochybnostiach píšeme zátvorky.</p>`,
      { fig: 'v5-tabulka', caption: 'Pravdivostná tabuľka základných spojok. Implikácia má nulu len v riadku $p=1$, $q=0$, ekvivalencia tam, kde sa hodnoty $p$ a $q$ líšia.' },
      `<p>Formula, ktorá je pravdivá pri každom ohodnotení premenných, je <strong>tautológia</strong> (napr. $p\\lor\\neg p$, $(p\\land(p\\Rightarrow q))\\Rightarrow q$);
       formula vždy nepravdivá je <strong>kontradikcia</strong> (napr. $p\\land\\neg p$). Formula je <strong>splniteľná</strong>, ak je pravdivá aspoň pri jednom ohodnotení.
       Formuly $A$, $B$ sú <strong>logicky ekvivalentné</strong> ($A\\equiv B$), ak majú rovnaké pravdivostné tabuľky, t. j. ak je $A\\Leftrightarrow B$ tautológia.</p>`,
      `<p><strong>Dôležité ekvivalencie.</strong> De Morganove zákony $\\neg(p\\land q)\\equiv\\neg p\\lor\\neg q$ a $\\neg(p\\lor q)\\equiv\\neg p\\land\\neg q$;
       dvojitá negácia $\\neg\\neg p\\equiv p$; vyjadrenie implikácie $p\\Rightarrow q\\equiv\\neg p\\lor q$, preto $\\neg(p\\Rightarrow q)\\equiv p\\land\\neg q$;
       obmena $p\\Rightarrow q\\equiv\\neg q\\Rightarrow\\neg p$; ekvivalencia $p\\Leftrightarrow q\\equiv(p\\Rightarrow q)\\land(q\\Rightarrow p)$ a $\\neg(p\\Leftrightarrow q)\\equiv p\\Leftrightarrow\\neg q$;
       distributívnosť $p\\land(q\\lor r)\\equiv(p\\land q)\\lor(p\\land r)$ a $p\\lor(q\\land r)\\equiv(p\\lor q)\\land(p\\lor r)$.</p>`
    ],
    examples: [
      { task: 'Rozhodnite, či je formula $(p\\Rightarrow q)\\land(q\\Rightarrow r)\\Rightarrow(p\\Rightarrow r)$ tautológia.',
        steps: ['Formula je implikácia, môže byť nepravdivá len vtedy, keď je ľavá strana pravdivá a pravá nepravdivá.',
          'Pravá strana $p\\Rightarrow r$ je nepravdivá len pre $p=1$, $r=0$.',
          'Potom $p\\Rightarrow q$ vyžaduje $q=1$, ale $q\\Rightarrow r$ pri $q=1$, $r=0$ je nepravdivá – ľavá strana nemôže byť pravdivá.',
          'Prípad „pravdivý predpoklad, nepravdivý záver“ teda nenastane, formula je tautológia (pravidlo hypotetického sylogizmu).'] },
      { task: 'Znegujte výrok „Prší a nemám dáždnik“ a výrok „Ak je pondelok, idem do práce“.',
        steps: ['Prvý výrok má tvar $p\\land\\neg q$. Podľa De Morganovho zákona $\\neg(p\\land\\neg q)\\equiv\\neg p\\lor q$: „Neprší alebo mám dáždnik.“',
          'Druhý výrok je implikácia $p\\Rightarrow q$. Jej negácia je $p\\land\\neg q$: „Je pondelok a nejdem do práce.“',
          'Pozor: negáciou implikácie <em>nie je</em> implikácia „ak nie je pondelok, nejdem do práce“ – tá je s pôvodným výrokom súčasne pravdivá napríklad v nedeľu, keď nejdem do práce.'] }
    ]
  });

  gen('v5-vyrokova', () => {
    const t = Math.random();
    if (t < 0.3) {
      const vars = Math.random() < 0.5 ? ['p', 'q'] : ['p', 'q', 'r'];
      let f;
      do { f = randForm(vars, vars.length === 2 ? 3 : 2); } while (sortedVars([f]).length !== vars.length || f.v);
      const rows = assignments(vars), cnt = rows.filter((s) => ev(f, s)).length;
      const list = rows.filter((s) => ev(f, s)).map((s) => '(' + vars.map((v) => b01(s[v])).join(', ') + ')');
      const wImp = rows.filter((s) => evImpAnd(f, s)).length;
      return {
        mistakes: [
          ...(wImp !== cnt ? [{ value: wImp, msg: 'Implikácia s nepravdivým predpokladom je pravdivá: $0\\Rightarrow 0$ aj $0\\Rightarrow 1$ majú hodnotu 1. Nepravdivá je len $1\\Rightarrow 0$.' }] : []),
          ...(rows.length - cnt !== cnt && rows.length - cnt !== wImp ? [{ value: rows.length - cnt, msg: 'Spočítal si riadky, v ktorých je formula nepravdivá. Otázka sa pýta na riadky s hodnotou 1.' }] : [])
        ],
        q: `V koľkých riadkoch pravdivostnej tabuľky je formula $${tex(f)}$ pravdivá?`,
        answer: cnt,
        solution: `Tabuľka má $2^{${vars.length}}=${rows.length}$ riadkov. Formula je pravdivá pre ohodnotenia $(${vars.join(', ')})$:
          ${cnt ? list.join(', ') : 'žiadne'}. Spolu ${cnt} ${pl(cnt, ['riadok', 'riadky', 'riadkov'])}.`,
        hint: 'Vyhodnocuj formulu zvnútra von – najprv zátvorky a negácie, potom spojku, ktorá spája celok. Implikácia je nepravdivá len pre 1 ⇒ 0.'
      };
    }
    if (t < 0.55) {
      const lits = shuffle(['p', 'q', 'r']).map((v) => (Math.random() < 0.25 ? N(V(v)) : V(v)));
      const [X, Y, Z] = lits;
      const T = [
        () => B('imp', X, B('imp', Y, X)), () => B('imp', B('and', X, B('imp', X, Y)), Y),
        () => B('eq', N(B('and', X, Y)), B('or', neg(X), neg(Y))), () => B('eq', B('imp', X, Y), B('imp', neg(Y), neg(X))),
        () => B('imp', B('and', B('imp', X, Y), B('imp', Y, Z)), B('imp', X, Z)), () => B('or', X, neg(X)),
        () => B('imp', B('imp', X, Y), B('imp', Y, X)), () => B('and', B('imp', X, Y), B('and', X, neg(Y))),
        () => B('eq', B('imp', X, Y), B('imp', neg(X), neg(Y))), () => B('and', X, N(B('or', X, Y))),
        () => B('imp', B('or', X, Y), B('and', X, Y)), () => B('eq', B('imp', X, Y), B('or', neg(X), Y)),
        () => B('imp', B('and', B('imp', X, Y), neg(Y)), neg(X)), () => B('eq', X, neg(X)),
        () => randForm(['p', 'q'], 3)
      ];
      let f;
      do { f = pick(T)(); } while (f.v);
      const vars = sortedVars([f]), k = kindOf(f), cnt = trueRows(f, vars), all = 1 << vars.length;
      const KH = [
        'Tautológia musí byť pravdivá v každom riadku tabuľky. Skús nájsť ohodnotenie, pri ktorom je formula nepravdivá.',
        'Kontradikcia nesmie byť pravdivá v žiadnom riadku. Skús nájsť ohodnotenie, pri ktorom je formula pravdivá.',
        'Táto možnosť vyžaduje riadok s hodnotou 1 aj riadok s hodnotou 0. Over oba; pozor, implikácia s nepravdivým predpokladom je pravdivá.'
      ];
      const choiceHints = {};
      KIND.forEach((o, i) => { if (o !== k) choiceHints[o] = KH[i]; });
      return {
        choiceHints,
        type: 'choice', options: KIND,
        q: `Rozhodni, akou formulou je $${tex(f)}$.`,
        answer: k,
        solution: `Formula má ${vars.length} ${pl(vars.length, ['premennú', 'premenné', 'premenných'])}, tabuľka teda $${all}$ riadkov. Formula je pravdivá v ${cnt} z nich,
          preto je to ${k === KIND[0] ? 'tautológia (pravdivá vždy)' : k === KIND[1] ? 'kontradikcia (nikdy nie je pravdivá)' : 'formula splniteľná, ale nie tautológia'}.`,
        hint: 'Pri implikácii skús nájsť ohodnotenie, pri ktorom je predpoklad pravdivý a záver nepravdivý. Ak neexistuje, ide o tautológiu.'
      };
    }
    if (t < 0.75) {
      const vars = ['p', 'q', 'r'];
      let f;
      do { f = randForm(vars, 3); } while (f.v || sortedVars([f]).length < 2);
      const s = { p: Math.random() < 0.5, q: Math.random() < 0.5, r: Math.random() < 0.5 };
      const val = ev(f, s), used = sortedVars([f]);
      const choiceHints = {};
      if (evImpAnd(f, s) !== val) choiceHints[val ? TF[1] : TF[0]] = 'Skontroluj implikácie: s nepravdivým predpokladom je implikácia vždy pravdivá, nepravdivá je len $1\\Rightarrow 0$.';
      const o = {
        choiceHints,
        type: 'choice', options: TF,
        q: `Výroky $p$, $q$, $r$ majú pravdivostné hodnoty $p=${b01(s.p)}$, $q=${b01(s.q)}$, $r=${b01(s.r)}$. Je výrok $${tex(f)}$ pravdivý, alebo nepravdivý?`,
        answer: val ? TF[0] : TF[1],
        solution: `Dosadíme ${used.map((v) => `$${v}=${b01(s[v])}$`).join(', ')}. ${f.op === 'not' ? 'Negovaná' : 'Ľavá'} časť $${tex(f.a, false)}$ má hodnotu ${b01(ev(f.a, s))}${f.b ? `, pravá časť $${tex(f.b, false)}$ hodnotu ${b01(ev(f.b, s))}` : ''}.
          Celý výrok má hodnotu ${b01(val)}, je teda ${val ? 'pravdivý' : 'nepravdivý'}.`,
        hint: 'Vyhodnoť najprv vnútorné zátvorky a potom hlavnú spojku. Pripomeň si: $1\\Rightarrow 0$ je jediná nepravdivá implikácia.'
      };
      o.steps = f.op === 'not'
        ? [{ q: `Akú hodnotu (0 alebo 1) má negovaná časť $${tex(f.a, false)}$?`, answer: b01(ev(f.a, s)) }]
        : [{ q: `Akú hodnotu (0 alebo 1) má ľavá časť $${tex(f.a, false)}$?`, answer: b01(ev(f.a, s)) },
          { q: `Akú hodnotu (0 alebo 1) má pravá časť $${tex(f.b, false)}$?`, answer: b01(ev(f.b, s)) }];
      o.steps.push({ q: 'Je teda celý výrok pravdivý, alebo nepravdivý?', type: 'choice', options: TF, answer: o.answer });
      return o;
    }
    // ekvivalentný tvar negácie (De Morgan, negácia implikácie a ekvivalencie)
    const X = V('p'), Y = V('q');
    const targets = [N(B('and', X, Y)), N(B('or', X, Y)), N(B('imp', X, Y)), B('imp', X, Y), N(B('eq', X, Y)),
      N(B('and', X, N(Y))), N(B('or', N(X), Y)), N(B('imp', N(X), Y))];
    const g = pick(targets);
    const pool = [];
    for (const op of ['and', 'or', 'imp', 'eq']) for (const a of [X, N(X)]) for (const b of [Y, N(Y)]) pool.push(B(op, a, b));
    const good = shuffle(pool.filter((f) => equiv(f, g) && tex(f) !== tex(g)));
    const bad = shuffle(pool.filter((f) => !equiv(f, g))).slice(0, 3);
    const ans = good[0];
    const choiceHints = {};
    const vs = assignments(['p', 'q']);
    bad.forEach((f) => {
      const naive = g.op === 'not' && (g.a.op === 'and' || g.a.op === 'or') && f.op === g.a.op
        && tex(f.a) === tex(neg(g.a.a)) && tex(f.b) === tex(neg(g.a.b));
      const naiveImp = g.op === 'not' && g.a.op === 'imp' && f.op === 'imp' && tex(f.a) === tex(neg(g.a.a)) && tex(f.b) === tex(neg(g.a.b));
      const s = vs.find((x) => ev(f, x) !== ev(g, x));
      choiceHints[`$${tex(f)}$`] = naive ? 'De Morganove zákony: pri negácii sa zložky znegujú a zároveň sa spojka $\\land$ zmení na $\\lor$ (a naopak).'
        : naiveImp ? 'Negácia implikácie nie je implikácia negácií. Implikáciu najprv prepíš ako $\\neg p\\lor q$ a až potom neguj.'
          : `Formuly nie sú ekvivalentné: líšia sa napríklad pri ohodnotení $p=${b01(s.p)}$, $q=${b01(s.q)}$.`;
    });
    return {
      choiceHints,
      type: 'choice',
      options: shuffle([ans, ...bad].map((f) => `$${tex(f)}$`)),
      q: `Ktorá formula je logicky ekvivalentná s formulou $${tex(g)}$?`,
      answer: `$${tex(ans)}$`,
      solution: `Porovnaj pravdivostné tabuľky alebo použi známe ekvivalencie: $\\neg(p\\land q)\\equiv\\neg p\\lor\\neg q$, $\\neg(p\\lor q)\\equiv\\neg p\\land\\neg q$,
        $p\\Rightarrow q\\equiv\\neg p\\lor q$, $\\neg(p\\Rightarrow q)\\equiv p\\land\\neg q$, $\\neg(p\\Leftrightarrow q)\\equiv p\\Leftrightarrow\\neg q$.
        Formula $${tex(g)}$ má rovnakú tabuľku ako $${tex(ans)}$ (pravdivá v ${trueRows(g, ['p', 'q'])} zo 4 riadkov pri rovnakých ohodnoteniach).`,
      hint: 'Negácia „preklopí“ konjunkciu na disjunkciu a naopak a zneguje obe zložky. Implikáciu prepíš ako $\\neg p\\lor q$.'
    };
  });

  /* ======================= 2. PREDIKÁTOVÁ LOGIKA ======================= */

  lesson({
    id: 'v5-predikatova', order: 20, title: 'Predikátová logika a kvantifikátory',
    summary: 'Výrokové formy, obor premenných a obor pravdivosti, všeobecný a existenčný kvantifikátor, negácia kvantifikovaných výrokov.',
    theory: [
      `<p><strong>Výroková forma</strong> (predikát) je výraz s premennou, ktorý sa stane výrokom po dosadení konkrétnej hodnoty, napr. $P(x)$: „$x^2&gt;4$“.
       Množina, z ktorej premenná nadobúda hodnoty, je <strong>obor premennej</strong> $M$; tie prvky $x\\in M$, pre ktoré je $P(x)$ pravdivý výrok,
       tvoria <strong>obor pravdivosti</strong> $\\{x\\in M : P(x)\\}$. Pre $M=\\{-3, -2, \\dots, 3\\}$ je obor pravdivosti formy $x^2&gt;4$ množina $\\{-3, 3\\}$.</p>`,
      `<p>Výrok z formy vznikne aj <strong>kvantifikáciou</strong>. <strong>Všeobecný kvantifikátor</strong> $\\forall x\\in M: P(x)$ („pre každé $x$ z $M$ platí $P(x)$“)
       je pravdivý, ak obor pravdivosti je celé $M$. <strong>Existenčný kvantifikátor</strong> $\\exists x\\in M: P(x)$ („existuje $x$ z $M$, pre ktoré platí $P(x)$“)
       je pravdivý, ak obor pravdivosti je neprázdny. Zápis $\\exists! x$ znamená „existuje práve jedno $x$“.
       Na konečnej množine $M=\\{a_1, \\dots, a_n\\}$ je $\\forall x: P(x)$ vlastne konjunkcia $P(a_1)\\land\\dots\\land P(a_n)$ a $\\exists x: P(x)$ disjunkcia.</p>`,
      `<p><strong>Negácia kvantifikovaných výrokov</strong> vymení kvantifikátor a zneguje formu:
       $$\\neg\\,\\forall x\\in M: P(x)\\;\\equiv\\;\\exists x\\in M: \\neg P(x),\\qquad \\neg\\,\\exists x\\in M: P(x)\\;\\equiv\\;\\forall x\\in M: \\neg P(x).$$
       Aby všeobecné tvrdenie neplatilo, stačí jediný <em>protipríklad</em>. Pri viacerých kvantifikátoroch postupujeme zľava:
       $\\neg\\,\\forall x\\,\\exists y: P(x,y)\\equiv\\exists x\\,\\forall y: \\neg P(x,y)$. Negácia nerovnosti $a&gt;b$ je $a\\le b$, nie $a&lt;b$.</p>`,
      `<p><strong>Poradie kvantifikátorov</strong> je podstatné. Výrok $\\forall x\\in\\mathbb{N}\\;\\exists y\\in\\mathbb{N}: y&gt;x$ („ku každému číslu existuje väčšie“) je pravdivý,
       ale $\\exists y\\in\\mathbb{N}\\;\\forall x\\in\\mathbb{N}: y&gt;x$ („existuje číslo väčšie ako všetky“) je nepravdivý. Vo $\\forall x\\,\\exists y$ môže $y$ závisieť od $x$,
       vo $\\exists y\\,\\forall x$ musí jedno $y$ fungovať pre všetky $x$. Rovnaké kvantifikátory vedľa seba zamieňať môžeme.
       Premenná viazaná kvantifikátorom je <em>viazaná</em>, ostatné sú <em>voľné</em>; výrok vznikne, až keď sú všetky premenné viazané alebo dosadené.</p>`
    ],
    examples: [
      { task: 'Znegujte výrok $\\forall \\varepsilon&gt;0\\;\\exists n_0\\in\\mathbb{N}\\;\\forall n\\ge n_0: |a_n-a|&lt;\\varepsilon$ (definícia limity postupnosti).',
        steps: ['Negáciu prenášame zľava doprava: každý kvantifikátor sa vymení, $\\forall\\leftrightarrow\\exists$.',
          'Dostaneme $\\exists\\varepsilon&gt;0\\;\\forall n_0\\in\\mathbb{N}\\;\\exists n\\ge n_0: \\neg(|a_n-a|&lt;\\varepsilon)$.',
          'Negácia nerovnosti: $|a_n-a|\\ge\\varepsilon$. Teda: existuje $\\varepsilon&gt;0$ také, že za každým indexom $n_0$ nájdeme člen vzdialený od $a$ aspoň o $\\varepsilon$.'] },
      { task: 'Na množine $M=\\{1, 2, 3, 4, 5, 6\\}$ rozhodnite o pravdivosti výrokov $\\forall x\\in M\\;\\exists y\\in M: x+y=7$ a $\\exists y\\in M\\;\\forall x\\in M: x\\mid y$.',
        steps: ['Pre prvý výrok ku každému $x$ zvolíme $y=7-x$; pre $x\\in\\{1, \\dots, 6\\}$ je $7-x\\in\\{6, \\dots, 1\\}\\subseteq M$. Výrok je pravdivý.',
          'Druhý výrok žiada jedno $y\\in M$ deliteľné všetkými číslami $1$ až $6$, teda násobok čísla $\\mathrm{nsn}(1, \\dots, 6)=60$.',
          'Žiadny prvok $M$ nie je násobkom 60, druhý výrok je nepravdivý.'] }
    ]
  });

  gen('v5-predikatova', () => {
    const t = Math.random();
    // [zápis, forma, forma pri typickej chybe, vysvetlenie chyby]
    const STRICT = 'Nerovnosť je ostrá: prvky, pre ktoré nastane rovnosť, do oboru pravdivosti nepatria.';
    const PRED = () => pick([
      () => { const k = rnd(1, 12); return [`x^2&gt;${k}`, (x) => x * x > k, (x) => x * x >= k, STRICT]; },
      () => { const d = rnd(2, 4); return [`${d}\\mid x`, (x) => x % d === 0, (x) => x % d === 0 && x !== 0, `Nula je deliteľná každým číslom ($0 = ${d}\\cdot 0$), do oboru pravdivosti patrí.`]; },
      () => { const a = rnd(-3, 3), b = rnd(-2, 6); return [`${lin([[1, 'x'], [a, '']])}&lt;${b}`, (x) => x + a < b, (x) => x + a <= b, STRICT]; },
      () => { const k = rnd(1, 3); return [`|x|\\le ${k}`, (x) => Math.abs(x) <= k, (x) => Math.abs(x) < k, `Nerovnosť je neostrá: prvky s $|x| = ${k}$ do oboru pravdivosti patria.`]; },
      () => { const r = rnd(-3, 3), s = rnd(-3, 3); return [`x^2${tail([[-(r + s), 'x'], [r * s, '']])}=0`, (x) => (x - r) * (x - s) === 0, null, '']; },
      () => { const k = rnd(-2, 4); return [`x^2\\ge ${k}x`, (x) => x * x >= k * x, (x) => x >= k, 'Nerovnosť nemôžeš vydeliť číslom $x$ bez ohľadu na jeho znamienko (pri zápornom $x$ sa znak otočí a pri $x = 0$ sa deliť nedá).']; }
    ])();
    const lo = rnd(-4, 0), hi = rnd(2, 5), M = range(lo, hi), Mtex = setTex(M);
    if (t < 0.3) {
      const [pt, pf] = PRED(), all = Math.random() < 0.5;
      const truth = M.filter(pf), val = all ? truth.length === M.length : truth.length > 0;
      const bad = M.filter((x) => !pf(x));
      const choiceHints = {
        [val ? TF[1] : TF[0]]: all
          ? (val ? 'Protipríklad musí byť prvok množiny $M$, ktorý formu nespĺňa. Over dosadením, či tvoj protipríklad naozaj vyhovuje.'
            : 'Všeobecný výrok musí platiť pre každý prvok $M$. Dosaď postupne všetky prvky, aj záporné a nulu.')
          : (val ? 'Existenčnému výroku stačí jediný prvok $M$, ktorý formu spĺňa. Prejdi všetky prvky vrátane záporných a nuly.'
            : 'Over dosadením, či tvoj kandidát patrí do $M$ a naozaj spĺňa formu.')
      };
      return {
        choiceHints,
        type: 'choice', options: TF,
        q: `Nech $M=${Mtex}$. Je výrok $${all ? '\\forall' : '\\exists'} x\\in M: ${pt}$ pravdivý, alebo nepravdivý?`,
        answer: val ? TF[0] : TF[1],
        solution: `Obor pravdivosti formy $${pt}$ na $M$ je $${setTex(truth)}$. ${all
          ? (val ? 'Obsahuje všetky prvky $M$, výrok je pravdivý.' : `Napríklad $x=${bad[0]}$ je protipríklad, výrok je nepravdivý.`)
          : (val ? `Je neprázdny (napr. $x=${truth[0]}$), výrok je pravdivý.` : 'Je prázdny, výrok je nepravdivý.')}`,
        hint: all ? 'Všeobecný výrok vyvrátiš jediným protipríkladom.' : 'Existenčný výrok potvrdíš jediným vhodným príkladom.'
      };
    }
    if (t < 0.5) {
      const [pt, pf, alt, why] = PRED(), truth = M.filter(pf), wc = alt ? M.filter(alt).length : truth.length;
      return {
        mistakes: wc !== truth.length ? [{ value: wc, msg: why }] : [],
        q: `Nech $M=${Mtex}$. Koľko prvkov má obor pravdivosti výrokovej formy $${pt}$ na množine $M$?`,
        answer: truth.length,
        solution: `Dosadíme postupne všetky prvky $M$. Formu spĺňajú práve prvky $${setTex(truth)}$, obor pravdivosti má ${truth.length} ${pl(truth.length, ['prvok', 'prvky', 'prvkov'])}.`,
        hint: 'Obor pravdivosti je množina tých prvkov oboru premennej, pre ktoré sa forma stane pravdivým výrokom.'
      };
    }
    if (t < 0.75) {
      // negácia výroku s jedným alebo dvoma kvantifikátormi
      const REL = { '&gt;': '\\le', '&lt;': '\\ge', '\\ge': '&lt;', '\\le': '&gt;', '=': '\\neq' };
      const WRONG = { '&gt;': '&lt;', '&lt;': '&gt;', '\\ge': '\\le', '\\le': '\\ge', '=': '&lt;' };
      const r = pick(Object.keys(REL)), c = rnd(-5, 9), D = pick(['\\mathbb{N}', '\\mathbb{Z}', '\\mathbb{R}']);
      const Q1 = pick(['\\forall', '\\exists']), d1 = Q1 === '\\forall' ? '\\exists' : '\\forall';
      const two = Math.random() < 0.5, Q2 = pick(['\\forall', '\\exists']), d2 = Q2 === '\\forall' ? '\\exists' : '\\forall';
      const expr = two ? pick(['x+y', 'xy', 'x-y', 'x^2+y']) : pick(['x^2', '2x+1', 'x^3', 'x-3']);
      const pre = (a, b) => (two ? `${a} x\\in ${D}\\;${b} y\\in ${D}: ` : `${a} x\\in ${D}: `);
      const st = (a, b, rel) => `$${pre(a, b)}${expr} ${rel} ${c}$`;
      const ans = st(d1, d2, REL[r]);
      const opts = [ans, st(Q1, Q2, REL[r]), st(d1, d2, WRONG[r]), two ? st(d1, Q2, REL[r]) : st(d1, d2, r)];
      const OH = ['', 'Negácia mení aj kvantifikátory: $\\forall$ sa zmení na $\\exists$ a naopak.',
        `Negácia vzťahu $${r}$ musí platiť presne vtedy, keď $${r}$ neplatí. Over to na hraničnom prípade rovnosti.`,
        two ? 'Pri negácii treba vymeniť všetky kvantifikátory, nie iba prvý.' : 'Nestačí vymeniť kvantifikátor, treba znegovať aj samotnú formu.'];
      const choiceHints = {};
      opts.forEach((o, i) => { if (i && o !== ans) choiceHints[o] = OH[i]; });
      return {
        choiceHints,
        type: 'choice', options: shuffle([...new Set(opts)]),
        q: `Ktorý výrok je negáciou výroku ${st(Q1, Q2, r)}?`,
        answer: ans,
        solution: `Pri negácii sa každý kvantifikátor vymení ($\\forall\\leftrightarrow\\exists$) a zneguje sa forma: negácia vzťahu $${r}$ je $${REL[r]}$.
          Negácia je ${ans}.`,
        hint: 'Negácia vymení všetky kvantifikátory a vzťah nahradí opačným (napr. $&gt;$ za $\\le$, nie za $&lt;$).'
      };
    }
    // poradie kvantifikátorov na konečných množinách
    const A = shuffle(range(1, 6)).slice(0, rnd(2, 4)).sort((a, b) => a - b);
    const Bs = shuffle(range(1, 12)).slice(0, rnd(2, 4)).sort((a, b) => a - b);
    const R = pick([
      ['x&lt;y', (x, y) => x < y, 'menšie'], ['x\\mid y', (x, y) => y % x === 0, 'deliteľ'], ['2\\mid x+y', (x, y) => (x + y) % 2 === 0, 'parita'],
      ['y\\ge 2x', (x, y) => y >= 2 * x, 'dvojnásobok']
    ]);
    const forFirst = Math.random() < 0.5;
    const val = forFirst ? A.every((x) => Bs.some((y) => R[1](x, y))) : Bs.some((y) => A.every((x) => R[1](x, y)));
    const st = forFirst ? `\\forall x\\in A\\;\\exists y\\in B: ${R[0]}` : `\\exists y\\in B\\;\\forall x\\in A: ${R[0]}`;
    let why;
    if (forFirst) {
      const badX = A.find((x) => !Bs.some((y) => R[1](x, y)));
      why = val ? 'Ku každému $x\\in A$ existuje vhodné $y$: ' + A.map((x) => `$x=${x}$, $y=${Bs.find((y) => R[1](x, y))}$`).join('; ') + '.'
        : `Pre $x=${badX}$ nevyhovuje žiadne $y\\in B$.`;
    } else {
      const goodY = Bs.find((y) => A.every((x) => R[1](x, y)));
      why = val ? `Prvok $y=${goodY}$ vyhovuje pre všetky $x\\in A$.` : 'Pre každé $y\\in B$ existuje $x\\in A$, pre ktoré vzťah neplatí: ' +
        Bs.map((y) => `$y=${y}$ zlyhá pre $x=${A.find((x) => !R[1](x, y))}$`).join('; ') + '.';
    }
    const wh = forFirst
      ? (val ? 'Pri $\\forall x\\,\\exists y$ môže byť $y$ pre rôzne $x$ rôzne; nepotrebuješ jedno $y$ pre všetky $x$.'
        : 'Pre každé $x\\in A$ zvlášť over, či existuje vhodné $y\\in B$. Stačí jediné $x$ bez vhodného $y$.')
      : (val ? 'Vyskúšaj každé $y\\in B$; stačí jedno, ktoré vyhovuje pre všetky $x\\in A$.'
        : 'Pri $\\exists y\\,\\forall x$ musí jedno a to isté $y$ vyhovovať pre všetky $x$ naraz; nestačí, že ku každému $x$ nájdeš nejaké $y$.');
    return {
      choiceHints: { [val ? TF[1] : TF[0]]: wh },
      type: 'choice', options: TF,
      q: `Nech $A=${setTex(A)}$ a $B=${setTex(Bs)}$. Je výrok $${st}$ pravdivý?`,
      answer: val ? TF[0] : TF[1],
      solution: `${why} Výrok je ${val ? 'pravdivý' : 'nepravdivý'}.`,
      hint: forFirst ? 'Pri $\\forall x\\,\\exists y$ môžeš pre každé $x$ voliť iné $y$.' : 'Pri $\\exists y\\,\\forall x$ hľadáš jedno $y$, ktoré vyhovuje pre všetky $x$ naraz.'
    };
  });

  /* ======================= 3. METÓDY DÔKAZOV ======================= */

  lesson({
    id: 'v5-dokazy', order: 30, title: 'Metódy matematických dôkazov',
    summary: 'Priamy dôkaz, nepriamy dôkaz obmenou, dôkaz sporom, vyvrátenie protipríkladom a dôkaz rozborom prípadov.',
    theory: [
      `<p>Väčšina matematických viet má tvar implikácie $A\\Rightarrow B$ (predpoklad $\\Rightarrow$ tvrdenie), často so všeobecným kvantifikátorom.
       <strong>Priamy dôkaz</strong> je reťazec $A\\Rightarrow C_1\\Rightarrow C_2\\Rightarrow\\dots\\Rightarrow B$, v ktorom každý krok vyplýva z predchádzajúcich,
       z definícií alebo z už dokázaných viet. Príklad: ak $a$, $b$ sú nepárne, tak $a=2k+1$, $b=2l+1$ a $ab=4kl+2k+2l+1=2(2kl+k+l)+1$ je nepárne.</p>`,
      `<p><strong>Nepriamy dôkaz</strong> využíva ekvivalenciu $A\\Rightarrow B\\equiv\\neg B\\Rightarrow\\neg A$: namiesto vety dokážeme priamo jej <em>obmenu</em>.
       Výhodný je vtedy, keď je s negáciou záveru ľahšie pracovať. Napríklad „ak $n^2$ je párne, tak $n$ je párne“ dokážeme obmenou
       „ak $n$ je nepárne, tak $n^2$ je nepárne“: $n=2k+1\\Rightarrow n^2=2(2k^2+2k)+1$. Pozor na zámenu s <em>obrátenou</em> implikáciou $B\\Rightarrow A$
       a s <em>opačnou</em> implikáciou $\\neg A\\Rightarrow\\neg B$ – tie s pôvodnou vetou ekvivalentné nie sú.</p>`,
      `<p><strong>Dôkaz sporom</strong>: predpokladáme, že tvrdenie neplatí (pri implikácii $A\\land\\neg B$), a odvodíme spor – výrok aj jeho negáciu, alebo zjavne nepravdivé tvrdenie.
       Klasickým príkladom je iracionalita $\\sqrt{2}$: ak $\\sqrt{2}=\\frac{p}{q}$ v základnom tvare, tak $p^2=2q^2$, teda $p$ je párne, $p=2r$, odkiaľ $q^2=2r^2$ a aj $q$ je párne –
       spor so základným tvarom zlomku. Rovnako Euklides dokázal, že prvočísel je nekonečne veľa.</p>`,
      `<p><strong>Protipríklad.</strong> Všeobecné tvrdenie $\\forall x: P(x)$ vyvrátime jediným $x$, pre ktoré $P(x)$ neplatí (negácia je $\\exists x: \\neg P(x)$).
       Napríklad $n^2+n+41$ je prvočíslo pre $n=0, 1, \\dots, 39$, no pre $n=40$ dostaneme $41^2$ – overenie mnohých prípadov nie je dôkaz.
       <strong>Rozbor prípadov</strong>: obor rozdelíme na konečne veľa prípadov, ktoré pokrývajú všetky možnosti (napr. podľa zvyšku po delení), a vetu dokážeme v každom zvlášť.
       Takto zistíme, že $n^2$ dáva po delení 3 zvyšok 0 alebo 1: pre $n=3k$, $3k+1$, $3k+2$ je $n^2$ postupne $9k^2$, $3(3k^2+2k)+1$, $3(3k^2+4k+1)+1$.</p>`
    ],
    examples: [
      { task: 'Dokážte, že pre každé celé číslo $n$ je číslo $n^3-n$ deliteľné šiestimi.',
        steps: ['Rozložíme $n^3-n=(n-1)n(n+1)$ – je to súčin troch po sebe idúcich celých čísel (priamy dôkaz).',
          'Z dvoch po sebe idúcich čísel je jedno párne, preto $2\\mid n^3-n$.',
          'Rozbor prípadov podľa zvyšku po delení 3: ak $n=3k$, deliteľom je $n$; ak $n=3k+1$, tak $3\\mid n-1$; ak $n=3k+2$, tak $3\\mid n+1$. Vždy $3\\mid n^3-n$.',
          'Keďže 2 a 3 sú nesúdeliteľné, $6\\mid n^3-n$.'] },
      { task: 'Dokážte, že ak je súčet dvoch celých čísel $a+b$ nepárny, tak aspoň jedno z čísel $a$, $b$ je nepárne.',
        steps: ['Priamy postup je nepohodlný, preto dokážeme obmenu: ak sú obe čísla $a$, $b$ párne, tak $a+b$ je párne.',
          'Nech $a=2k$, $b=2l$. Potom $a+b=2(k+l)$ je párne.',
          'Obmena platí, preto platí aj pôvodná implikácia (sú logicky ekvivalentné).'] }
    ]
  });

  gen('v5-dokazy', () => {
    const t = Math.random();
    const METHODS = ['priamy dôkaz', 'nepriamy dôkaz (obmenou)', 'dôkaz sporom', 'vyvrátenie protipríkladom', 'rozbor prípadov'];
    if (t < 0.22) {
      const S = [
        ['Na dôkaz, že súčet dvoch párnych čísel je párny, zapíšeme $a=2k$, $b=2l$ a upravíme $a+b=2(k+l)$.', 0],
        ['Tvrdenie „ak $n^2$ je nepárne, tak $n$ je nepárne“ dokazujeme tak, že z párnosti $n$ odvodíme párnosť $n^2$.', 1],
        ['Predpokladáme, že najväčšie prvočíslo existuje, vynásobíme všetky prvočísla, pripočítame 1 a ukážeme, že vznikne číslo bez prvočíselného deliteľa zo zoznamu.', 2],
        ['Tvrdenie „každé nepárne číslo väčšie ako 1 je prvočíslo“ odmietneme poukázaním na číslo 9.', 3],
        ['Nerovnosť $|a+b|\\le|a|+|b|$ overujeme zvlášť pre $a, b\\ge 0$, pre $a, b&lt;0$ a pre čísla s rôznymi znamienkami.', 4],
        ['Predpokladáme, že $\\sqrt{3}=\\frac{p}{q}$ je zlomok v základnom tvare, a ukážeme, že $p$ aj $q$ by boli deliteľné tromi.', 2],
        ['Aby sme ukázali, že $2^n+1$ nie je vždy prvočíslo, stačí vypočítať $2^3+1=9$.', 3],
        ['Dokazujeme „ak $3\\nmid ab$, tak $3\\nmid a$“ – namiesto toho ukážeme, že z $3\\mid a$ vyplýva $3\\mid ab$.', 1],
        ['Tvrdenie o deliteľnosti $n^2+n$ dvomi dokazujeme samostatne pre párne a pre nepárne $n$.', 4],
        ['Z rovnosti $a^2+b^2=(a+b)^2-2ab$ a predpokladov $a+b=5$, $ab=6$ priamo vypočítame $a^2+b^2=13$.', 0],
        ['Predpokladáme, že rovnica $x^2=4y+2$ má celočíselné riešenie, a dospejeme k tomu, že nepárne číslo je párne.', 2],
        ['Ukážeme, že ak priamky $p$, $q$ nie sú rovnobežné, tak ich priesečník vylučuje platnosť predpokladu – teda z predpokladu vyplýva rovnobežnosť (z negácie záveru odvodzujeme negáciu predpokladu).', 1]
      ];
      const [s, k] = pick(S);
      const MH = [
        'Pri priamom dôkaze vychádzame z predpokladu vety a priamo odvodíme záver; nič sa neneguje a nehľadá sa spor.',
        'Obmena začína negáciou záveru a končí negáciou predpokladu; nehľadá sa pri nej spor.',
        'Pri dôkaze sporom predpokladáme neplatnosť celého tvrdenia a odvodíme spor.',
        'Protipríkladom sa tvrdenie len vyvracia, a to jediným konkrétnym prípadom.',
        'Rozbor prípadov rozdelí všetky možnosti na niekoľko skupín a každú overí zvlášť.'
      ];
      const choiceHints = {};
      METHODS.forEach((mm, i) => { if (i !== k) choiceHints[mm] = MH[i]; });
      return {
        choiceHints,
        type: 'choice', options: shuffle(METHODS),
        q: `Akú metódu dôkazu opisuje postup? ${s}`,
        answer: METHODS[k],
        solution: `Ide o metódu <strong>${METHODS[k]}</strong>. ${[
          'Z predpokladov postupne priamo odvodzujeme záver.',
          'Namiesto $A\\Rightarrow B$ dokazujeme ekvivalentnú obmenu $\\neg B\\Rightarrow\\neg A$.',
          'Predpokladáme negáciu tvrdenia a odvodíme spor.',
          'Všeobecné tvrdenie vyvrátime jediným prípadom, v ktorom neplatí.',
          'Možnosti rozdelíme na prípady, ktoré pokrývajú všetko, a každý overíme zvlášť.'][k]}`,
        hint: 'Všimni si, čo sa predpokladá na začiatku: predpoklad vety, negácia záveru (obmena), negácia celého tvrdenia (spor), alebo sa len hľadá jeden príklad?'
      };
    }
    if (t < 0.44) {
      const p = pick([2, 3, 5, 7]), k = rnd(2, 9), m = rnd(2, 6);
      const T = [
        [`${p}\\mid n^2`, `${p}\\nmid n^2`], [`${p}\\mid n`, `${p}\\nmid n`], [`n&gt;${k}`, `n\\le ${k}`], [`n^2&gt;${k * k}`, `n^2\\le ${k * k}`],
        [`n\\equiv 1 \\pmod{${m}}`, `n\\not\\equiv 1 \\pmod{${m}}`], [`n^2\\ge ${k}`, `n^2&lt;${k}`]
      ];
      const [i, j] = shuffle(range(0, T.length - 1)).slice(0, 2);
      const [A, nA] = T[i], [Bp, nB] = T[j];
      const kinds = [
        ['obmena', `$${nB}\\Rightarrow ${nA}$`], ['obrátená implikácia', `$${Bp}\\Rightarrow ${A}$`],
        ['opačná implikácia', `$${nA}\\Rightarrow ${nB}$`], ['negácia', `$${A}\\land ${nB}$`]
      ];
      const ask = pick([0, 0, 1, 3]);
      const KH = [
        'Toto je obmena $\\neg B\\Rightarrow\\neg A$: strany sú vymenené aj znegované.',
        'Toto je obrátená implikácia $B\\Rightarrow A$: strany sú vymenené, ale nie znegované.',
        'Toto je opačná implikácia $\\neg A\\Rightarrow\\neg B$: strany sú znegované, ale nie vymenené.',
        'Toto je negácia $A\\land\\neg B$; implikáciou už nie je.'
      ];
      const choiceHints = {};
      kinds.forEach((x, i) => { if (i !== ask) choiceHints[x[1]] = KH[i]; });
      return {
        choiceHints,
        type: 'choice', options: shuffle(kinds.map((x) => x[1])),
        q: `Daná je implikácia $${A}\\Rightarrow ${Bp}$ (pre celé číslo $n$). Ktorý výrok je jej ${['obmenou', 'obrátenou implikáciou', 'opačnou implikáciou', 'negáciou'][ask]}?`,
        answer: kinds[ask][1],
        solution: `Pre implikáciu $A\\Rightarrow B$ je obmena $\\neg B\\Rightarrow\\neg A$, obrátená implikácia $B\\Rightarrow A$, opačná $\\neg A\\Rightarrow\\neg B$ a negácia $A\\land\\neg B$.
          Tu $A$: $${A}$, $B$: $${Bp}$, preto hľadaný výrok je ${kinds[ask][1]}. S pôvodnou implikáciou je ekvivalentná len obmena.`,
        hint: 'Obmena vymení strany a obe zneguje. Negácia implikácie už implikáciou nie je: $\\neg(A\\Rightarrow B)\\equiv A\\land\\neg B$.'
      };
    }
    if (t < 0.7) {
      if (Math.random() < 0.5) {
        const c = pick([5, 11, 17, 41]);
        let n = 0;
        while (isPrime(n * n + n + c)) n++;
        const v = n * n + n + c;
        let d = 2;
        while (v % d) d++;
        return {
          q: `Tvrdenie: „Pre každé $n\\in\\mathbb{N}_0$ je číslo $n^2+n+${c}$ prvočíslo.“ Nájdi najmenšie $n$, ktoré je protipríkladom.`,
          answer: n,
          solution: `Postupne dosadzujeme $n=0, 1, 2, \\dots$ Pre $n&lt;${n}$ vychádzajú prvočísla, ale pre $n=${n}$ je $${n}^2+${n}+${c}=${v}=${d}\\cdot ${v / d}$, čo je zložené číslo.`,
          hint: 'Dosadzuj postupne malé čísla. Zaujímavé je dosadiť $n=c-1$, vtedy $n^2+n+c=c^2$.'
        };
      }
      const k = rnd(2, 5);
      let n = 1;
      while (fact(n) < Math.pow(k, n)) n++;
      return {
        q: `Tvrdenie: „Pre každé $n\\in\\mathbb{N}$ platí $n!&lt;${k}^n$.“ Nájdi najmenšie $n$, ktoré tvrdenie vyvracia.`,
        answer: n,
        solution: `Pre $n=1, 2, \\dots, ${n - 1}$ nerovnosť platí, no pre $n=${n}$ je $${n}!=${fact(n)}$ a $${k}^{${n}}=${Math.pow(k, n)}$, teda $n!\\ge ${k}^n$.
          Faktoriál rastie nakoniec rýchlejšie ako každá exponenciála.`,
        hint: 'Pri prechode z $n$ na $n+1$ sa $n!$ násobí číslom $n+1$, kým $k^n$ len číslom $k$.'
      };
    }
    const m = rnd(3, 10), e = Math.random() < 0.65 ? 2 : 3;
    const res = [...new Set(range(0, m - 1).map((r) => Math.pow(r, e) % m))].sort((a, b) => a - b);
    return {
      steps: [
        { q: `Aký zvyšok dáva $2^{${e}}$ po delení číslom ${m}?`, answer: Math.pow(2, e) % m },
        { q: `Aký zvyšok dáva $${m - 1}^{${e}}$ po delení číslom ${m}?`, answer: Math.pow(m - 1, e) % m, hint: `$${m - 1}\\equiv -1 \\pmod{${m}}$.` },
        { q: `Prejdi všetky zvyšky $r = 0, 1, \\dots, ${m - 1}$ a zadaj všetky možné zvyšky $n^{${e}}$ (oddelené bodkočiarkou).`, type: 'set', answer: res }
      ],
      type: 'set',
      q: `Rozborom prípadov podľa zvyšku čísla $n$ po delení číslom ${m} zisti, aké zvyšky môže dávať $n^{${e}}$ po delení číslom ${m}. Zadaj všetky možné zvyšky oddelené bodkočiarkou.`,
      answer: res,
      solution: `Ak $n\\equiv r \\pmod{${m}}$, tak $n^{${e}}\\equiv r^{${e}} \\pmod{${m}}$. Stačí preto prejsť $r=0, 1, \\dots, ${m - 1}$:
        ${range(0, m - 1).map((r) => `$${r}^{${e}}\\equiv ${Math.pow(r, e) % m}$`).join(', ')}. Možné zvyšky: $${setTex(res)}$.`,
      hint: 'Zvyšok mocniny závisí len od zvyšku základu. Prejdi všetky zvyšky $0$ až $m-1$.'
    };
  });

  /* ======================= 4. MNOŽINY, RELÁCIE A ZOBRAZENIA ======================= */

  fig('v5-venn', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Vennov diagram dvoch množín v univerze U">
      <rect class="f-cell" x="10" y="10" width="400" height="200" rx="8"/>
      <circle class="f-fill f-outline" cx="160" cy="110" r="78"/>
      <circle class="f-fill2 f-outline2" cx="260" cy="110" r="78"/>
      <text class="f-math" x="26" y="36">U</text>
      <text class="f-math" x="98" y="44">A</text><text class="f-math" x="314" y="44">B</text>
      <text class="f-text" x="128" y="115" text-anchor="middle">A ∖ B</text>
      <text class="f-text c-accent" x="210" y="115" text-anchor="middle">A ∩ B</text>
      <text class="f-text" x="292" y="115" text-anchor="middle">B ∖ A</text>
      <text class="f-small" x="370" y="200" text-anchor="end">mimo kruhov: (A ∪ B)′ = A′ ∩ B′</text></svg>`
  });

  fig('v5-zobrazenia', {
    draw: () => {
      const panel = (ox, title, nA, nB, map) => {
        const ya = (i, n) => 70 + (i + 0.5) * (130 / n), xa = ox + 40, xb = ox + 130;
        let s = `<ellipse class="f-fill f-outline" cx="${xa}" cy="135" rx="24" ry="72"/>
          <ellipse class="f-fill2 f-outline2" cx="${xb}" cy="135" rx="24" ry="72"/>
          <text class="f-text" x="${ox + 85}" y="30" text-anchor="middle">${title}</text>
          <text class="f-math" x="${xa}" y="56" text-anchor="middle">A</text><text class="f-math" x="${xb}" y="56" text-anchor="middle">B</text>`;
        for (let i = 0; i < nA; i++) s += `<circle class="f-dot" cx="${xa}" cy="${n1(ya(i, nA))}" r="4.5"/>`;
        for (let j = 0; j < nB; j++) s += `<circle class="f-dot" cx="${xb}" cy="${n1(ya(j, nB))}" r="4.5"/>`;
        map.forEach((j, i) => { s += arrow(xa, ya(i, nA), xb, ya(j, nB)); });
        return s;
      };
      return `<svg viewBox="0 0 520 225" role="img" aria-label="Šípkové diagramy injekcie, surjekcie a bijekcie">
        ${panel(0, 'injekcia', 3, 4, [0, 2, 3])}${panel(175, 'surjekcia', 4, 3, [0, 0, 1, 2])}${panel(350, 'bijekcia', 3, 3, [1, 2, 0])}</svg>`;
    }
  });

  lesson({
    id: 'v5-mnoziny', order: 40, title: 'Množiny, relácie a zobrazenia',
    summary: 'Množinové operácie, potenčná množina, karteziánsky súčin, binárna relácia, zobrazenie, injekcia, surjekcia, bijekcia a mohutnosť.',
    theory: [
      `<p><strong>Množina</strong> je určená svojimi prvkami: $A=B$ práve vtedy, keď $\\forall x: (x\\in A\\Leftrightarrow x\\in B)$. $A\\subseteq B$ znamená $\\forall x: (x\\in A\\Rightarrow x\\in B)$.
       Základné operácie zodpovedajú logickým spojkám: <strong>zjednotenie</strong> $A\\cup B=\\{x: x\\in A\\lor x\\in B\\}$, <strong>prienik</strong> $A\\cap B=\\{x: x\\in A\\land x\\in B\\}$,
       <strong>rozdiel</strong> $A\\setminus B=\\{x: x\\in A\\land x\\notin B\\}$, <strong>doplnok</strong> $A'=U\\setminus A$ v univerze $U$ a <strong>symetrický rozdiel</strong>
       $A\\triangle B=(A\\setminus B)\\cup(B\\setminus A)$. Preto platia aj množinové De Morganove zákony $(A\\cup B)'=A'\\cap B'$, $(A\\cap B)'=A'\\cup B'$.
       Pre konečné množiny $|A\\cup B|=|A|+|B|-|A\\cap B|$.</p>`,
      { fig: 'v5-venn', caption: 'Vennov diagram: tri disjunktné časti $A\\setminus B$, $A\\cap B$, $B\\setminus A$ a zvyšok univerza, ktorý je doplnkom zjednotenia.' },
      `<p><strong>Potenčná množina</strong> $\\mathcal{P}(A)$ je množina všetkých podmnožín $A$; ak $|A|=n$, tak $|\\mathcal{P}(A)|=2^n$ (každý prvok v podmnožine buď je, alebo nie je)
       a $k$-prvkových podmnožín je $\\binom{n}{k}$. <strong>Karteziánsky súčin</strong> $A\\times B=\\{(a, b): a\\in A, b\\in B\\}$ obsahuje usporiadané dvojice, $|A\\times B|=|A|\\cdot|B|$.
       <strong>Binárna relácia</strong> z $A$ do $B$ je ľubovoľná podmnožina $R\\subseteq A\\times B$; píšeme $aRb$ namiesto $(a, b)\\in R$. Relácií z $A$ do $B$ je teda $2^{|A|\\cdot|B|}$.</p>`,
      `<p><strong>Zobrazenie</strong> (funkcia) $f: A\\to B$ je relácia, v ktorej má každé $a\\in A$ <em>práve jeden</em> obraz $f(a)\\in B$; zobrazení $A\\to B$ je $|B|^{|A|}$.
       Zobrazenie je <strong>injektívne</strong> (prosté), ak rôzne prvky majú rôzne obrazy: $f(a_1)=f(a_2)\\Rightarrow a_1=a_2$;
       <strong>surjektívne</strong> (na), ak každý prvok $B$ má vzor: $\\forall b\\in B\\;\\exists a\\in A: f(a)=b$; <strong>bijektívne</strong>, ak je injektívne aj surjektívne.
       Iba bijekcia má inverzné zobrazenie $f^{-1}: B\\to A$. Injekcií z $n$-prvkovej do $m$-prvkovej množiny je $m(m-1)\\cdots(m-n+1)$, bijekcií $n$-prvkovej množiny na seba $n!$.</p>`,
      { fig: 'v5-zobrazenia', caption: 'Injekcia nezlepí dva prvky do jedného obrazu, surjekcia zasiahne každý prvok $B$, bijekcia robí oboje – páruje prvky jeden k jednému.' },
      `<p><strong>Mohutnosť.</strong> Množiny $A$, $B$ majú rovnakú mohutnosť ($|A|=|B|$), ak existuje bijekcia $A\\to B$. Množina rovnako mohutná s $\\mathbb{N}$ je <strong>spočítateľná</strong>:
       spočítateľné sú $\\mathbb{Z}$ (poradie $0, 1, -1, 2, -2, \\dots$) aj $\\mathbb{Q}$. <strong>Cantorova veta</strong> hovorí, že $|A|&lt;|\\mathcal{P}(A)|$ pre každú množinu $A$;
       dôkaz sporom: pre $f: A\\to\\mathcal{P}(A)$ množina $D=\\{a\\in A: a\\notin f(a)\\}$ nemôže byť obrazom žiadneho prvku. Diagonálnou metódou sa dokazuje aj nespočítateľnosť $\\mathbb{R}$.</p>`
    ],
    examples: [
      { task: 'Nech $A=\\{1, 2, 3\\}$ a $B=\\{a, b\\}$. Koľko je relácií z $A$ do $B$, koľko zobrazení $A\\to B$ a koľko z nich je surjektívnych?',
        steps: ['$|A\\times B|=3\\cdot 2=6$, relácia je ľubovoľná podmnožina, takže relácií je $2^6=64$.',
          'Zobrazenie priradí každému z 3 prvkov jeden z 2 obrazov: $2^3=8$ zobrazení.',
          'Nesurjektívne sú len dve konštantné zobrazenia (všetko do $a$ alebo všetko do $b$), surjektívnych je $8-2=6$.'] },
      { task: 'Je zobrazenie $f: \\mathbb{Z}\\to\\mathbb{Z}$, $f(x)=2x+1$ injektívne, surjektívne, bijektívne?',
        steps: ['Injektívnosť: z $2x_1+1=2x_2+1$ vyplýva $x_1=x_2$, zobrazenie je injektívne.',
          'Surjektívnosť: obrazom je vždy nepárne číslo, napríklad $0$ nemá vzor ($2x+1=0$ nemá celé riešenie). Zobrazenie nie je surjektívne.',
          'Nie je teda ani bijektívne. Ako zobrazenie $\\mathbb{R}\\to\\mathbb{R}$ by však bijekciou bolo, s inverzným zobrazením $f^{-1}(y)=\\frac{y-1}{2}$ – vlastnosti závisia od definičného oboru aj od cieľovej množiny.'] }
    ]
  });

  gen('v5-mnoziny', () => {
    const t = Math.random();
    if (t < 0.25) {
      let A, Bs, op, res;
      const OPS4 = [['A\\cup B', (x, a, b) => a || b], ['A\\cap B', (x, a, b) => a && b], ['A\\setminus B', (x, a, b) => a && !b],
        ['B\\setminus A', (x, a, b) => b && !a], ['A\\triangle B', (x, a, b) => a !== b]];
      do {
        A = shuffle(range(1, 10)).slice(0, rnd(3, 6)).sort((a, b) => a - b);
        Bs = shuffle(range(1, 10)).slice(0, rnd(3, 6)).sort((a, b) => a - b);
        op = pick(OPS4);
        res = range(1, 10).filter((x) => op[1](x, A.includes(x), Bs.includes(x)));
      } while (!res.length);
      const inter = A.filter((x) => Bs.includes(x)), bMinusA = Bs.filter((x) => !A.includes(x)), aMinusB = A.filter((x) => !Bs.includes(x));
      const same = (u, v) => u.length === v.length && u.every((x, i) => x === v[i]);
      const mis = [];
      if (op[0] === 'A\\setminus B' && bMinusA.length && !same(bMinusA, res)) mis.push({ value: bMinusA, msg: 'Rozdiel nie je komutatívny: $A\\setminus B$ obsahuje prvky z $A$, ktoré nie sú v $B$.' });
      if (op[0] === 'B\\setminus A' && aMinusB.length && !same(aMinusB, res)) mis.push({ value: aMinusB, msg: 'Rozdiel nie je komutatívny: $B\\setminus A$ obsahuje prvky z $B$, ktoré nie sú v $A$.' });
      if (op[0] === 'A\\triangle B' && inter.length) mis.push({ value: range(1, 10).filter((x) => A.includes(x) || Bs.includes(x)), msg: 'Symetrický rozdiel neobsahuje spoločné prvky: $A\\triangle B = (A\\setminus B)\\cup(B\\setminus A)$.' });
      return {
        mistakes: mis,
        type: 'set',
        q: `Nech $A=${setTex(A)}$ a $B=${setTex(Bs)}$. Urči množinu $${op[0]}$ (prvky oddeľ bodkočiarkou).`,
        answer: res,
        solution: `$A\\cap B=${setTex(range(1, 10).filter((x) => A.includes(x) && Bs.includes(x)))}$, $A\\setminus B=${setTex(A.filter((x) => !Bs.includes(x)))}$,
          $B\\setminus A=${setTex(Bs.filter((x) => !A.includes(x)))}$. Preto $${op[0]}=${setTex(res)}$.`,
        hint: 'Rozdeľ prvky na tie, čo sú len v $A$, v oboch a len v $B$ (Vennov diagram).'
      };
    }
    if (t < 0.55) {
      const n = rnd(2, 4), m = rnd(2, 4);
      const lo2 = Math.min(n, m), hi2 = Math.max(n, m) + 1;
      const AXB = { value: n * m, msg: 'Toto je počet prvkov $A\\times B$. Pýtame sa na počet jeho podmnožín.' };
      const Q = [
        [`Koľko prvkov má potenčná množina $\\mathcal{P}(A)$, ak $|A|=${n + 2}$?`, Math.pow(2, n + 2), `$|\\mathcal{P}(A)|=2^{${n + 2}}=${Math.pow(2, n + 2)}$.`,
          n === 2 ? [] : [{ value: (n + 2) * (n + 2), msg: 'Počet podmnožín je $2^{n}$ (každý prvok v podmnožine buď je, alebo nie je), nie $n^{2}$.' }]],
        [`Koľko ${m}-prvkových podmnožín má množina s ${n + 3} prvkami?`, C(n + 3, m), `Počet $k$-prvkových podmnožín je $\\binom{${n + 3}}{${m}}=${C(n + 3, m)}$.`,
          [{ value: C(n + 3, m) * fact(m), msg: 'Pri podmnožinách nezáleží na poradí prvkov. Počítal si usporiadané výbery (variácie), treba ešte vydeliť $k!$.' }]],
        [`Nech $|A|=${n}$ a $|B|=${m}$. Koľko je binárnych relácií z $A$ do $B$?`, Math.pow(2, n * m), `Relácia je podmnožina $A\\times B$, $|A\\times B|=${n * m}$, preto relácií je $2^{${n * m}}=${Math.pow(2, n * m)}$.`,
          [AXB, ...(n !== m ? [{ value: Math.pow(m, n), msg: 'Toto je počet zobrazení $A\\to B$. Relácia je ľubovoľná podmnožina $A\\times B$, prvok môže mať viac obrazov alebo žiadny.' }] : [])]],
        [`Nech $|A|=${n}$ a $|B|=${m}$. Koľko je zobrazení $f: A\\to B$?`, Math.pow(m, n), `Každý z ${n} prvkov $A$ má ${m} možností pre obraz: $${m}^{${n}}=${Math.pow(m, n)}$.`,
          Math.pow(n, m) !== Math.pow(m, n) ? [{ value: Math.pow(n, m), msg: 'Zamenil si základ a exponent: každý prvok definičného oboru $A$ si vyberá obraz z $B$, teda $|B|^{|A|}$.' }] : []],
        [`Nech $|A|=${lo2}$ a $|B|=${hi2}$. Koľko je injektívnych zobrazení $A\\to B$?`,
          fact(hi2) / fact(hi2 - lo2),
          `Obrazy musia byť rôzne: $${range(hi2 + 1 - lo2, hi2).reverse().join('\\cdot ')}=${fact(hi2) / fact(hi2 - lo2)}$.`,
          [{ value: Math.pow(hi2, lo2), msg: 'Toto je počet všetkých zobrazení. Pri injekcii musia byť obrazy rôzne, takže počet možností pre každý ďalší prvok klesá o 1.' }]],
        [`Koľko je bijekcií množiny s ${n + 2} prvkami na seba?`, fact(n + 2), `Bijekcie konečnej množiny na seba sú permutácie: $${n + 2}!=${fact(n + 2)}$.`,
          [{ value: Math.pow(n + 2, n + 2), msg: 'Toto je počet všetkých zobrazení množiny do seba. Bijekcia nesmie opakovať obrazy, ide o permutácie.' }]],
        [`Nech $|A|=${n}$, $|B|=${m}$. Koľko prvkov má $\\mathcal{P}(A\\times B)$?`, Math.pow(2, n * m), `$|A\\times B|=${n}\\cdot ${m}=${n * m}$, preto $|\\mathcal{P}(A\\times B)|=2^{${n * m}}=${Math.pow(2, n * m)}$.`,
          [AXB, ...(n + m === n * m ? [] : [{ value: Math.pow(2, n) * Math.pow(2, m), msg: 'Potenčná množina súčinu nie je súčin potenčných množín: počet prvkov $A\\times B$ je $|A|\\cdot|B|$ a ten patrí do exponentu.' }])]]
      ];
      const [q, a, s, mistakes] = pick(Q);
      return { q, answer: a, solution: s, mistakes, hint: 'Podmnožín $n$-prvkovej množiny je $2^n$, zobrazení $A\\to B$ je $|B|^{|A|}$, relácií $2^{|A|\\cdot|B|}$.' };
    }
    if (t < 0.8) {
      const OPT = ['bijektívne', 'injektívne, ale nie surjektívne', 'surjektívne, ale nie injektívne', 'ani injektívne, ani surjektívne'];
      const m = rnd(3, 4), n = rnd(3, 4), letters = ['a', 'b', 'c', 'd'].slice(0, n);
      let f;
      if (m === n && Math.random() < 0.4) f = shuffle(range(0, n - 1));
      else if (m < n && Math.random() < 0.5) f = shuffle(range(0, n - 1)).slice(0, m);
      else if (m > n && Math.random() < 0.5) { f = shuffle([...range(0, n - 1), ...Array.from({ length: m - n }, () => rnd(0, n - 1))]); }
      else f = Array.from({ length: m }, () => rnd(0, n - 1));
      const inj = new Set(f).size === m, sur = new Set(f).size === n;
      const ans = inj && sur ? OPT[0] : inj ? OPT[1] : sur ? OPT[2] : OPT[3];
      const dup = f.findIndex((v, i) => f.indexOf(v) !== i), miss = range(0, n - 1).find((j) => !f.includes(j));
      const CL = [[true, true], [true, false], [false, true], [false, false]];
      const choiceHints = {};
      OPT.forEach((o, i) => {
        if (o === ans) return;
        const [ci, cs] = CL[i], w = [];
        if (ci !== inj) w.push('Over injektívnosť: majú niektoré dva prvky rovnaký obraz?');
        if (cs !== sur) w.push('Over surjektívnosť: má každý prvok cieľovej množiny aspoň jeden vzor?');
        choiceHints[o] = w.join(' ');
      });
      return {
        choiceHints,
        type: 'choice', options: OPT,
        q: `Zobrazenie $f: \\{${range(1, m).join(', ')}\\}\\to\\{${letters.join(', ')}\\}$ je dané predpisom ${f.map((v, i) => `$f(${i + 1})=${letters[v]}$`).join(', ')}. Aké je?`,
        answer: ans,
        solution: `${inj ? 'Všetky obrazy sú rôzne, $f$ je injektívne.' : `$f(${f.indexOf(f[dup]) + 1})=f(${dup + 1})=${letters[f[dup]]}$, preto $f$ nie je injektívne.`}
          ${sur ? 'Každý prvok cieľovej množiny má vzor, $f$ je surjektívne.' : `Prvok $${letters[miss]}$ nemá vzor, $f$ nie je surjektívne.`} Zobrazenie je ${ans}.`,
        hint: 'Injekcia: žiadne dva prvky nemajú rovnaký obraz. Surjekcia: do každého prvku cieľovej množiny vedie aspoň jedna šípka.'
      };
    }
    const a = rnd(10, 40), b = rnd(10, 40), c = rnd(2, Math.min(a, b) - 2), u = a + b - c + rnd(0, 15);
    const askOut = Math.random() < 0.5;
    const uni = a + b - c;
    const o = {
      mistakes: askOut
        ? [{ value: u - (a + b), msg: 'Pri sčítaní počtov oboch jazykov si študentov s oboma jazykmi započítal dvakrát; prienik treba raz odčítať.' },
          ...(uni !== u - uni ? [{ value: uni, msg: 'Toto je počet študentov, ktorí ovládajú aspoň jeden jazyk. Pýtame sa na zvyšok skupiny (doplnok).' }] : [])]
        : [{ value: a + b, msg: 'Študentov s oboma jazykmi si započítal dvakrát; prienik treba raz odčítať.' }],
      q: `V skupine ${u} študentov ${a} ovláda angličtinu, ${b} nemčinu a ${c} oba jazyky. Koľko študentov ${askOut ? 'neovláda ani jeden z týchto jazykov' : 'ovláda aspoň jeden z týchto jazykov'}?`,
      answer: askOut ? u - (a + b - c) : a + b - c,
      solution: `$|A\\cup N|=|A|+|N|-|A\\cap N|=${a}+${b}-${c}=${a + b - c}$.${askOut ? ` Ani jeden jazyk neovláda $${u}-${a + b - c}=${u - (a + b - c)}$ študentov (doplnok zjednotenia).` : ''}`,
      hint: 'Pri sčítaní $|A|+|B|$ sa prienik započíta dvakrát, preto ho raz odčítaj.'
    };
    if (askOut) {
      o.steps = [
        { q: 'Koľko študentov ovláda aspoň jeden z jazykov?', answer: uni, hint: 'Použi $|A\\cup N| = |A| + |N| - |A\\cap N|$.' },
        { q: 'Koľko študentov neovláda ani jeden jazyk?', answer: u - uni }
      ];
    }
    return o;
  });

  /* ======================= 5. EKVIVALENCIA A USPORIADANIE ======================= */

  fig('v5-hasse', {
    draw: () => {
      const D = [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]]; // 12 = 2^a·3^b
      const val = ([a, b]) => Math.pow(2, a) * Math.pow(3, b);
      const X = ([a, b]) => 200 + 70 * (a - b), Y = ([a, b]) => 215 - 58 * (a + b);
      let s = '<svg viewBox="0 0 440 240" role="img" aria-label="Hasseho diagram deliteľnosti na množine deliteľov čísla 12">';
      D.forEach((d) => {
        const up = [[d[0] + 1, d[1]], [d[0], d[1] + 1]].filter((e) => D.some((x) => x[0] === e[0] && x[1] === e[1]));
        up.forEach((e) => { s += `<line class="f-line" x1="${X(d)}" y1="${Y(d)}" x2="${X(e)}" y2="${Y(e)}"/>`; });
      });
      D.forEach((d) => {
        s += `<circle class="f-dot" cx="${X(d)}" cy="${Y(d)}" r="6"/>
          <text class="f-text" x="${X(d) + 12}" y="${Y(d) + 5}">${val(d)}</text>`;
      });
      return s + `<text class="f-small" x="20" y="30">(D(12), |)</text>
        <text class="f-small" x="20" y="50">najmenší prvok: 1</text><text class="f-small" x="20" y="68">najväčší prvok: 12</text>
        <text class="f-small" x="300" y="215">2 a 3 sú neporovnateľné</text></svg>`;
    }
  });

  // relácia ako pole dvojíc na {1, …, n}
  const relProps = (R, n) => {
    const has = (a, b) => R.some(([x, y]) => x === a && y === b);
    const refl = range(1, n).every((i) => has(i, i));
    const sym = R.every(([a, b]) => has(b, a));
    const anti = R.every(([a, b]) => a === b || !has(b, a));
    const trans = R.every(([a, b]) => R.every(([c, d]) => c !== b || has(a, d)));
    return { refl, sym, anti, trans, has };
  };
  const relTex = (R) => `\\{${R.map(([a, b]) => `(${a}, ${b})`).join(', ')}\\}`;
  const randRel = (n) => {
    const s = Math.random(), R = [];
    if (s < 0.3) { // ekvivalencia z rozkladu, prípadne narušená
      const cls = range(1, n).map(() => rnd(0, 2));
      for (let a = 1; a <= n; a++) for (let b = 1; b <= n; b++) if (cls[a - 1] === cls[b - 1]) R.push([a, b]);
    } else if (s < 0.6) { // usporiadanie (≤ alebo deliteľnosť), prípadne narušené
      const div = Math.random() < 0.5;
      for (let a = 1; a <= n; a++) for (let b = 1; b <= n; b++) if (div ? b % a === 0 : a <= b) R.push([a, b]);
    } else {
      for (let a = 1; a <= n; a++) for (let b = 1; b <= n; b++) if (Math.random() < (a === b ? 0.7 : 0.3)) R.push([a, b]);
    }
    if (Math.random() < 0.35 && R.length > 1) R.splice(rnd(0, R.length - 1), 1);
    if (!R.length) R.push([1, 1]);
    return R.sort((x, y) => x[0] - y[0] || x[1] - y[1]);
  };

  lesson({
    id: 'v5-relacie', order: 50, title: 'Ekvivalencia a usporiadanie',
    summary: 'Vlastnosti relácií na množine, relácia ekvivalencie, triedy ekvivalencie a rozklad, čiastočné usporiadanie a Hasseho diagram.',
    theory: [
      `<p>Relácia $R$ <em>na</em> množine $A$ je podmnožina $A\\times A$. Hovoríme, že je
       <strong>reflexívna</strong>, ak $\\forall a: aRa$; <strong>symetrická</strong>, ak $aRb\\Rightarrow bRa$; <strong>antisymetrická</strong>, ak $aRb\\land bRa\\Rightarrow a=b$;
       <strong>tranzitívna</strong>, ak $aRb\\land bRc\\Rightarrow aRc$. Napríklad „$\\le$“ na $\\mathbb{R}$ je reflexívna, antisymetrická a tranzitívna,
       „$&lt;$“ nie je reflexívna, „byť súrodencom“ je symetrická, ale nie tranzitívna ani reflexívna. Antisymetria nie je opakom symetrie – identita $\\{(a, a)\\}$ je obe naraz.</p>`,
      `<p><strong>Relácia ekvivalencie</strong> je reflexívna, symetrická a tranzitívna. <strong>Trieda ekvivalencie</strong> prvku $a$ je $[a]=\\{x\\in A: xRa\\}$.
       Dve triedy sú buď totožné, alebo disjunktné, a ich zjednotením je celé $A$ – triedy tvoria <strong>rozklad</strong> množiny $A$ (systém neprázdnych po dvoch disjunktných podmnožín pokrývajúcich $A$).
       Naopak, každý rozklad určuje ekvivalenciu „patriť do tej istej časti“. Príklad: kongruencia $x\\equiv y \\pmod{m}$ ($m\\mid x-y$) má na $\\mathbb{Z}$ práve $m$ tried $[0], [1], \\dots, [m-1]$.
       Ekvivalencie na $n$-prvkovej množine počítajú Bellove čísla $1, 2, 5, 15, 52, \\dots$</p>`,
      `<p><strong>Čiastočné usporiadanie</strong> je relácia reflexívna, antisymetrická a tranzitívna (zvyčajne ju značíme $\\preceq$); dvojica $(A, \\preceq)$ je čiastočne usporiadaná množina.
       Ak sú každé dva prvky porovnateľné ($a\\preceq b$ alebo $b\\preceq a$), ide o <strong>lineárne</strong> usporiadanie. Deliteľnosť na $\\mathbb{N}$ je čiastočné, nie lineárne usporiadanie: 2 a 3 sú neporovnateľné.
       Prvok $m$ je <strong>minimálny</strong>, ak pod ním nie je iný prvok, a <strong>najmenší</strong>, ak je pod všetkými; maximálny a najväčší analogicky. Minimálnych prvkov môže byť viac, najmenší je najviac jeden.</p>`,
      `<p><strong>Hasseho diagram</strong> konečnej čiastočne usporiadanej množiny kreslí prvky ako body a spojnicu vedie len od $a$ nahor k $b$, ak $b$ <em>bezprostredne pokrýva</em> $a$
       ($a\\prec b$ a neexistuje $c$ s $a\\prec c\\prec b$). Reflexívne slučky a dôsledky tranzitívnosti sa nekreslia, $a\\preceq b$ platí práve vtedy, keď z $a$ vedie cesta nahor do $b$.</p>`,
      { fig: 'v5-hasse', caption: 'Hasseho diagram deliteľnosti na $D(12)=\\{1, 2, 3, 4, 6, 12\\}$. Spojnice zodpovedajú vynásobeniu prvočíslom; napríklad $2\\mid 12$ vyčítame z cesty $2\\to 4\\to 12$.' }
    ],
    examples: [
      { task: 'Na množine $A=\\{1, 2, \\dots, 10\\}$ je daná relácia $xRy\\Leftrightarrow 3\\mid x-y$. Dokážte, že je to ekvivalencia, a určte jej triedy.',
        steps: ['Reflexívnosť: $x-x=0$ je deliteľné tromi. Symetria: ak $3\\mid x-y$, tak $3\\mid -(x-y)=y-x$.',
          'Tranzitívnosť: ak $3\\mid x-y$ a $3\\mid y-z$, tak $3$ delí aj súčet $(x-y)+(y-z)=x-z$.',
          'Triedy podľa zvyšku po delení 3: $[3]=\\{3, 6, 9\\}$, $[1]=\\{1, 4, 7, 10\\}$, $[2]=\\{2, 5, 8\\}$ – rozklad $A$ na tri časti.'] },
      { task: 'Nájdite minimálne, maximálne, najmenší a najväčší prvok množiny $M=\\{2, 3, 4, 6, 8, 9\\}$ usporiadanej deliteľnosťou.',
        steps: ['Minimálne prvky nemajú v $M$ vlastného deliteľa: $2$ a $3$ (4, 6, 8 sú deliteľné dvomi, 9 tromi).',
          'Maximálne prvky nie sú vlastným deliteľom iného prvku $M$: $6$, $8$, $9$ (2 delí 4, 3 delí 6, 4 delí 8).',
          'Minimálne prvky sú dva, preto najmenší prvok neexistuje; maximálne sú tri, najväčší prvok tiež neexistuje.'] }
    ]
  });

  gen('v5-relacie', () => {
    const t = Math.random();
    if (t < 0.3) {
      const n = rnd(3, 4), R = randRel(n), P = relProps(R, n);
      const OPT = ['ekvivalencia aj čiastočné usporiadanie', 'ekvivalencia, nie usporiadanie', 'čiastočné usporiadanie, nie ekvivalencia', 'ani ekvivalencia, ani čiastočné usporiadanie'];
      if (Math.random() < 0.5) {
        const k = pick(['refl', 'sym', 'anti', 'trans']);
        const NAME = { refl: 'reflexívna', sym: 'symetrická', anti: 'antisymetrická', trans: 'tranzitívna' };
        let why = '';
        if (k === 'refl') { const i = range(1, n).find((x) => !P.has(x, x)); why = P.refl ? 'Obsahuje všetky dvojice $(a, a)$.' : `Chýba dvojica $(${i}, ${i})$.`; }
        if (k === 'sym') { const e = R.find(([a, b]) => !P.has(b, a)); why = P.sym ? 'Ku každej dvojici $(a, b)$ obsahuje aj $(b, a)$.' : `Obsahuje $(${e[0]}, ${e[1]})$, ale nie $(${e[1]}, ${e[0]})$.`; }
        if (k === 'anti') { const e = R.find(([a, b]) => a !== b && P.has(b, a)); why = P.anti ? 'Nikdy neobsahuje obe dvojice $(a, b)$, $(b, a)$ pre $a\\neq b$.' : `Obsahuje $(${e[0]}, ${e[1]})$ aj $(${e[1]}, ${e[0]})$.`; }
        if (k === 'trans') {
          let w = null;
          for (const [a, b] of R) for (const [c, d] of R) if (!w && c === b && !P.has(a, d)) w = [a, b, d];
          why = P.trans ? 'Kedykoľvek obsahuje $(a, b)$ a $(b, c)$, obsahuje aj $(a, c)$.' : `Obsahuje $(${w[0]}, ${w[1]})$ a $(${w[1]}, ${w[2]})$, ale nie $(${w[0]}, ${w[2]})$.`;
        }
        const PH = {
          refl: 'Reflexívnosť vyžaduje dvojicu $(a, a)$ pre každý prvok množiny. Skontroluj ich jednu po druhej.',
          sym: 'Symetria: ku každej dvojici $(a, b)$ musí relácia obsahovať aj $(b, a)$. Prejdi všetky dvojice.',
          anti: 'Antisymetria nie je opak symetrie: zakazuje len to, aby pre $a\\neq b$ boli v relácii obe dvojice $(a, b)$ aj $(b, a)$; dvojice $(a, a)$ jej neprekážajú.',
          trans: 'Tranzitívnosť: pre každé $(a, b)$ a $(b, c)$ v relácii musí byť aj $(a, c)$, a to aj v prípadoch $a = c$ alebo $b = c$.'
        };
        return {
          choiceHints: { [P[k] ? YN[1] : YN[0]]: PH[k] },
          type: 'choice', options: YN,
          q: `Na množine $\\{${range(1, n).join(', ')}\\}$ je daná relácia $R=${relTex(R)}$. Je relácia $R$ ${NAME[k]}?`,
          answer: P[k] ? YN[0] : YN[1],
          solution: `${why} Relácia ${P[k] ? 'je' : 'nie je'} ${NAME[k]}.`,
          hint: 'Prejdi dvojice relácie a hľadaj protipríklad k požadovanej vlastnosti.'
        };
      }
      const eq = P.refl && P.sym && P.trans, po = P.refl && P.anti && P.trans;
      const ans = eq && po ? OPT[0] : eq ? OPT[1] : po ? OPT[2] : OPT[3];
      const yn = (b) => (b ? 'áno' : 'nie');
      const CL = [[true, true], [true, false], [false, true], [false, false]];
      const choiceHints = {};
      OPT.forEach((o, i) => {
        if (o === ans) return;
        const w = [];
        if (CL[i][0] !== eq) w.push('Over, či ide o ekvivalenciu: potrebuje reflexívnosť, symetriu a tranzitívnosť.');
        if (CL[i][1] !== po) w.push('Over, či ide o čiastočné usporiadanie: potrebuje reflexívnosť, antisymetriu a tranzitívnosť.');
        choiceHints[o] = w.join(' ');
      });
      return {
        choiceHints,
        type: 'choice', options: OPT,
        q: `Na množine $\\{${range(1, n).join(', ')}\\}$ je daná relácia $R=${relTex(R)}$. Čím je relácia $R$?`,
        answer: ans,
        solution: `Reflexívna: ${yn(P.refl)}, symetrická: ${yn(P.sym)}, antisymetrická: ${yn(P.anti)}, tranzitívna: ${yn(P.trans)}.
          Ekvivalencia potrebuje reflexívnosť, symetriu a tranzitívnosť, čiastočné usporiadanie reflexívnosť, antisymetriu a tranzitívnosť. Preto: ${ans}.`,
        hint: 'Over postupne štyri vlastnosti. Obe štruktúry naraz má len identická relácia $\\{(a, a)\\}$.'
      };
    }
    if (t < 0.5) {
      const n = rnd(3, 5);
      const Q = [
        ['reflexívnych', Math.pow(2, n * n - n), `Dvojice $(a, a)$ musia byť v relácii (${n} dvojíc), o zvyšných $${n}^2-${n}=${n * n - n}$ rozhodujeme ľubovoľne: $2^{${n * n - n}}=${Math.pow(2, n * n - n)}$.`],
        ['symetrických', Math.pow(2, n * (n + 1) / 2), `Rozhodujeme o ${n} dvojiciach $(a, a)$ a o $\\binom{${n}}{2}=${n * (n - 1) / 2}$ dvojiciach $\\{(a, b), (b, a)\\}$ naraz: $2^{${n * (n + 1) / 2}}=${Math.pow(2, n * (n + 1) / 2)}$.`],
        ['antisymetrických', Math.pow(2, n) * Math.pow(3, n * (n - 1) / 2), `Pre každé $(a, a)$ 2 možnosti, pre každú dvojicu $a\\neq b$ 3 možnosti (žiadna, len $(a, b)$, len $(b, a)$): $2^{${n}}\\cdot 3^{${n * (n - 1) / 2}}=${Math.pow(2, n) * Math.pow(3, n * (n - 1) / 2)}$.`],
        ['všetkých', Math.pow(2, n * n), `Relácia je ľubovoľná podmnožina $A\\times A$ s $${n * n}$ prvkami: $2^{${n * n}}=${Math.pow(2, n * n)}$.`],
        ['ekvivalencií', [1, 1, 2, 5, 15, 52][n], `Ekvivalencie zodpovedajú rozkladom množiny; ich počet je Bellovo číslo $B_{${n}}=${[1, 1, 2, 5, 15, 52][n]}$.`]
      ];
      const [w, a, s] = n === 5 ? pick([Q[4], Q[1]]) : pick(Q);
      const h = n * (n - 1) / 2;
      const MIS = {
        reflexívnych: [{ value: Math.pow(2, n * n), msg: 'Toto je počet všetkých relácií. Dvojice $(a, a)$ sú pri reflexívnej relácii povinné, voľne rozhoduješ len o ostatných.' }],
        symetrických: [{ value: Math.pow(2, h), msg: 'Zabudol si na dvojice $(a, a)$: aj o každej z nich rozhoduješ voľne, symetriu neporušia.' }],
        antisymetrických: [{ value: Math.pow(3, h), msg: 'Zabudol si na dvojice $(a, a)$: každá môže v relácii byť alebo nebyť (2 možnosti), antisymetriu neporušia.' }],
        všetkých: [{ value: n * n, msg: 'Toto je počet prvkov $A\\times A$. Relácia je jeho ľubovoľná podmnožina, pýtame sa na počet podmnožín.' }],
        ekvivalencií: []
      };
      return {
        mistakes: MIS[w],
        q: `Koľko je ${w} relácií na ${n}-prvkovej množine $A$?`.replace('ekvivalencií relácií', 'relácií ekvivalencie'),
        answer: a, solution: s,
        hint: 'Relácia na $A$ je podmnožina $A\\times A$. Rozmysli si, o ktorých dvojiciach rozhoduješ voľne a ktoré sú viazané vlastnosťou.'
      };
    }
    if (t < 0.72) {
      const m = rnd(2, 6), n = rnd(m + 3, 20), a = rnd(1, n);
      const cls = range(1, n).filter((y) => (y - a) % m === 0);
      const k = rnd(0, 2);
      if (k === 0) {
        const up = cls.filter((y) => y >= a).length;
        return {
          mistakes: up !== cls.length ? [{ value: up, msg: `Trieda $[${a}]$ obsahuje aj čísla menšie ako ${a}: líšia sa od neho o záporný násobok čísla ${m}.` }] : [],
          q: `Na množine $\\{1, 2, \\dots, ${n}\\}$ je relácia $xRy\\Leftrightarrow ${m}\\mid x-y$. Koľko prvkov má trieda ekvivalencie $[${a}]$?`,
          answer: cls.length,
          solution: `$[${a}]$ tvoria čísla s rovnakým zvyškom po delení ${m} ako ${a}: $${setTex(cls)}$, spolu ${cls.length}.`,
          hint: 'Trieda prvku $a$ obsahuje všetky čísla, ktoré sa od $a$ líšia o násobok modulu.'
        };
      }
      if (k === 1) {
        return {
          mistakes: Math.floor(n / m) !== m ? [{ value: Math.floor(n / m), msg: 'Toto je približne počet prvkov v jednej triede. Tried je toľko, koľko je rôznych zvyškov po delení modulom.' }] : [],
          q: `Na množine $\\{1, 2, \\dots, ${n}\\}$ je relácia $xRy\\Leftrightarrow ${m}\\mid x-y$. Koľko tried ekvivalencie má?`,
          answer: m,
          solution: `Triedy zodpovedajú zvyškom $0, 1, \\dots, ${m - 1}$ po delení ${m}; keďže $${n}\\ge ${m}$, každý zvyšok sa vyskytne. Tried je ${m}.`,
          hint: 'Dva prvky sú v jednej triede práve vtedy, keď dávajú rovnaký zvyšok.'
        };
      }
      const sizes = range(0, m - 1).map((r) => range(1, n).filter((y) => y % m === r).length);
      const pairs = sizes.reduce((s, v) => s + v * v, 0);
      return {
        mistakes: [{ value: pairs - n, msg: 'Relácia je reflexívna, takže obsahuje aj všetky dvojice $(x, x)$.' }],
        steps: [
          { q: `Koľko tried ekvivalencie má relácia $R$?`, answer: m },
          { q: 'Koľko prvkov má trieda $[1]$?', answer: sizes[1 % m] },
          { q: 'Koľko usporiadaných dvojíc obsahuje relácia $R$?', answer: pairs, hint: 'V triede s $k$ prvkami je $k^{2}$ dvojíc.' }
        ],
        q: `Na množine $\\{1, 2, \\dots, ${n}\\}$ je relácia $xRy\\Leftrightarrow ${m}\\mid x-y$. Koľko usporiadaných dvojíc $(x, y)$ obsahuje relácia $R$?`,
        answer: pairs,
        solution: `Triedy majú veľkosti ${sizes.join(', ')}. V rámci triedy s $k$ prvkami je v relácii $k^2$ dvojíc, spolu $${sizes.map((v) => v + '^2').join('+')}=${pairs}$.`,
        hint: 'Rozlož množinu na triedy ekvivalencie; dvojica je v relácii práve vtedy, keď sú oba prvky v tej istej triede.'
      };
    }
    // deliteľnosť na deliteľoch čísla N
    const Nn = pick([12, 18, 20, 24, 28, 30, 36, 40, 42, 48, 60, 72]);
    const D = range(1, Nn).filter((d) => Nn % d === 0);
    const primes = D.filter(isPrime);
    const k = rnd(0, 2);
    if (k === 0) {
      const edges = D.reduce((s, d) => s + primes.filter((p) => Nn % (d * p) === 0).length, 0);
      const comp = D.reduce((s, d) => s + D.filter((e) => e !== d && e % d === 0).length, 0);
      return {
        mistakes: [{ value: comp, msg: 'Hasseho diagram nekreslí všetky porovnateľné dvojice, len bezprostredné pokrytia; dôsledky tranzitívnosti sa vynechávajú.' }],
        steps: [
          { q: `Koľko deliteľov má číslo ${Nn}?`, answer: D.length },
          { q: `Koľko rôznych prvočíselných deliteľov má číslo ${Nn}?`, answer: primes.length },
          { q: 'Koľko hrán má Hasseho diagram?', answer: edges, hint: 'Hrana vedie od $d$ k $dp$, kde $p$ je prvočíslo a $dp$ je tiež deliteľ.' }
        ],
        q: `Koľko hrán (spojníc) má Hasseho diagram množiny všetkých deliteľov čísla ${Nn} usporiadanej deliteľnosťou?`,
        answer: edges,
        solution: `$D(${Nn})=${setTex(D)}$. Prvok $b$ bezprostredne pokrýva $a$ práve vtedy, keď $b=a\\cdot p$ pre prvočíslo $p$. Pre každý deliteľ $d$ spočítame prvočísla $p\\in${setTex(primes)}$ s $dp\\mid ${Nn}$ –
          spolu ${edges} ${pl(edges, ['hrana', 'hrany', 'hrán'])}.`,
        hint: 'V Hasseho diagrame deliteľnosti vedie hrana od $d$ k $dp$, kde $p$ je prvočíslo.'
      };
    }
    let S;
    do { S = shuffle(D.filter((d) => d !== 1)).slice(0, rnd(4, 6)).sort((a, b) => a - b); } while (S.length < 3);
    const minimal = S.filter((x) => !S.some((y) => y !== x && x % y === 0));
    const maximal = S.filter((x) => !S.some((y) => y !== x && y % x === 0));
    const isMin = k === 1, res = isMin ? minimal : maximal, other = isMin ? maximal : minimal;
    return {
      mistakes: other.length !== res.length ? [{ value: other.length, msg: isMin
        ? 'Spočítal si maximálne prvky. Minimálny prvok je ten, ktorý nemá v $M$ vlastného deliteľa.'
        : 'Spočítal si minimálne prvky. Maximálny prvok je ten, ktorý nedelí žiadny iný prvok $M$.' }] : [],
      q: `Množina $M=${setTex(S)}$ je usporiadaná deliteľnosťou. Koľko má ${isMin ? 'minimálnych' : 'maximálnych'} prvkov?`,
      answer: res.length,
      solution: `${isMin ? 'Minimálny prvok nemá v $M$ vlastného deliteľa' : 'Maximálny prvok nedelí žiadny iný prvok $M$'}: $${setTex(res)}$, spolu ${res.length}.
        ${res.length === 1 ? `Prvok ${res[0]} je zároveň ${isMin ? 'najmenší' : 'najväčší'}.` : `${isMin ? 'Najmenší' : 'Najväčší'} prvok preto neexistuje.`}`,
      hint: isMin ? 'Pre každý prvok over, či ho nedelí iný prvok množiny.' : 'Pre každý prvok over, či nie je deliteľom iného prvku množiny.'
    };
  });

  /* ======================= 6. INDUKCIA A REKURZIA ======================= */

  lesson({
    id: 'v5-indukcia', order: 60, title: 'Matematická indukcia a rekurzia',
    summary: 'Princíp matematickej indukcie, silná indukcia, rekurentne zadané postupnosti a riešenie lineárnych rekurencií charakteristickou rovnicou.',
    theory: [
      `<p><strong>Princíp matematickej indukcie.</strong> Nech $V(n)$ je výroková forma na $\\mathbb{N}$. Ak platí
       (1) <em>báza</em> $V(1)$ a (2) <em>indukčný krok</em> $\\forall n\\ge 1: V(n)\\Rightarrow V(n+1)$, tak $V(n)$ platí pre všetky $n\\in\\mathbb{N}$.
       Predpoklad $V(n)$ v kroku je <strong>indukčný predpoklad</strong>. Báza môže začínať aj inde ($n_0$), tvrdenie potom platí pre $n\\ge n_0$.
       Princíp je ekvivalentný s tým, že každá neprázdna podmnožina $\\mathbb{N}$ má najmenší prvok (dobré usporiadanie).</p>`,
      `<p><strong>Príklad.</strong> $1+2+\\dots+n=\\frac{n(n+1)}{2}$. Báza: $1=\\frac{1\\cdot 2}{2}$. Krok: ak platí pre $n$, tak
       $1+\\dots+n+(n+1)=\\frac{n(n+1)}{2}+(n+1)=\\frac{(n+1)(n+2)}{2}$, čo je tvrdenie pre $n+1$. Podobne $\\sum_{k=1}^{n}(2k-1)=n^2$, $\\sum_{k=1}^{n}k^2=\\frac{n(n+1)(2n+1)}{6}$
       a $\\sum_{k=0}^{n-1}2^k=2^n-1$. Obe časti sú nutné: „$n=n+1$“ spĺňa indukčný krok, no báza zlyhá.</p>`,
      `<p><strong>Silná (úplná) indukcia</strong> v kroku predpokladá platnosť $V(1), \\dots, V(n)$ a dokazuje $V(n+1)$. Je vhodná, keď $V(n+1)$ závisí od skorších prípadov,
       napr. pri dôkaze, že každé $n\\ge 2$ je súčinom prvočísel: buď je $n+1$ prvočíslo, alebo $n+1=ab$ s $2\\le a, b\\le n$ a pre $a$, $b$ už tvrdenie platí.
       <strong>Rekurentne zadaná postupnosť</strong> je daná začiatočnými členmi a predpisom pre ďalší člen, napr. Fibonacciho $F_0=0$, $F_1=1$, $F_{n}=F_{n-1}+F_{n-2}$;
       vlastnosti takých postupností sa prirodzene dokazujú indukciou.</p>`,
      `<p><strong>Lineárna rekurencia 2. rádu</strong> $a_n=s\\,a_{n-1}+t\\,a_{n-2}$ sa rieši pomocou <em>charakteristickej rovnice</em> $\\lambda^2=s\\lambda+t$.
       Ak má dva rôzne korene $\\lambda_1$, $\\lambda_2$, všeobecné riešenie je $a_n=A\\lambda_1^n+B\\lambda_2^n$; pri dvojnásobnom koreni $\\lambda$ je to $a_n=(A+Bn)\\lambda^n$.
       Konštanty $A$, $B$ určíme zo začiatočných podmienok. Rekurencia 1. rádu $a_n=q\\,a_{n-1}+d$ s $q\\neq 1$ má riešenie $a_n=q^n(a_0-c)+c$, kde $c=\\frac{d}{1-q}$ je pevný bod;
       napríklad Hanojské veže $T_n=2T_{n-1}+1$, $T_0=0$ dávajú $T_n=2^n-1$.</p>`
    ],
    examples: [
      { task: 'Dokážte indukciou, že $6\\mid 7^n-1$ pre každé $n\\in\\mathbb{N}$.',
        steps: ['Báza $n=1$: $7^1-1=6$ je deliteľné šiestimi.',
          'Indukčný predpoklad: $7^n-1=6k$ pre nejaké celé $k$.',
          'Krok: $7^{n+1}-1=7\\cdot 7^n-1=7(6k+1)-1=42k+6=6(7k+1)$, teda $6\\mid 7^{n+1}-1$.',
          'Podľa princípu matematickej indukcie tvrdenie platí pre všetky $n\\in\\mathbb{N}$.'] },
      { task: 'Vyriešte rekurenciu $a_n=a_{n-1}+6a_{n-2}$, $a_0=3$, $a_1=4$.',
        steps: ['Charakteristická rovnica $\\lambda^2=\\lambda+6$, teda $\\lambda^2-\\lambda-6=(\\lambda-3)(\\lambda+2)=0$, korene $3$ a $-2$.',
          'Všeobecné riešenie $a_n=A\\cdot 3^n+B\\cdot(-2)^n$.',
          'Z podmienok: $A+B=3$ a $3A-2B=4$, odkiaľ $5A=10$, $A=2$, $B=1$.',
          'Riešenie $a_n=2\\cdot 3^n+(-2)^n$; kontrola: $a_2=a_1+6a_0=22=2\\cdot 9+4$.'] }
    ]
  });

  gen('v5-indukcia', () => {
    const t = Math.random();
    const rec2 = (s, tt) => `a_n=${lin([[s, 'a_{n-1}'], [tt, 'a_{n-2}']])}`;
    if (t < 0.25) {
      let s, tt;
      do { s = rnd(-2, 3); tt = rnd(-2, 3); } while (s === 0 || tt === 0);
      const a0 = rnd(-2, 3), a1 = rnd(-2, 4), n = rnd(4, 7), a = [a0, a1];
      for (let i = 2; i <= n; i++) a.push(s * a[i - 1] + tt * a[i - 2]);
      const w = [a0, a1];
      for (let i = 2; i <= n; i++) w.push(tt * w[i - 1] + s * w[i - 2]);
      return {
        mistakes: w[n] !== a[n] ? [{ value: w[n], msg: `Zamenil si koeficienty: $${s}$ patrí k predchádzajúcemu členu $a_{n-1}$ a $${tt}$ k členu $a_{n-2}$.` }] : [],
        steps: [
          { q: 'Vypočítaj $a_2$.', answer: a[2], signed: true },
          { q: 'Vypočítaj $a_3$.', answer: a[3], signed: true },
          { q: `Pokračuj až po $a_{${n}}$.`, answer: a[n], signed: true }
        ],
        signed: true,
        q: `Postupnosť je daná rekurentne: $a_0=${a0}$, $a_1=${a1}$, $${rec2(s, tt)}$ pre $n\\ge 2$. Vypočítaj $a_{${n}}$.`,
        answer: a[n],
        solution: `Postupne: ${a.map((v, i) => `$a_{${i}}=${v}$`).join(', ')}. Teda $a_{${n}}=${a[n]}$.`,
        hint: 'Počítaj člen po člene, každý nový člen dostaneš z dvoch predchádzajúcich.'
      };
    }
    if (t < 0.55) {
      let r1, r2;
      do { r1 = rnd(-3, 4); r2 = rnd(-3, 4); } while (r1 === r2 || r1 === 0 || r2 === 0 || r1 + r2 === 0);
      if (r1 < r2) [r1, r2] = [r2, r1];
      const s = r1 + r2, tt = -r1 * r2;
      if (Math.random() < 0.4) {
        return {
          steps: [
            { q: 'Charakteristická rovnica má tvar $\\lambda^2 - s\\lambda - t = 0$. Aký je súčet jej koreňov?', answer: s, signed: true },
            { q: 'Aký je súčin jej koreňov?', answer: -tt, signed: true },
            { q: 'Zadaj oba korene (oddelené bodkočiarkou).', type: 'set', answer: [r1, r2], signed: true }
          ],
          type: 'set', signed: true,
          q: `Urči korene charakteristickej rovnice rekurencie $${rec2(s, tt)}$ (zadaj ich oddelené bodkočiarkou).`,
          answer: [r1, r2],
          solution: `Dosadením $a_n=\\lambda^n$ dostaneme $\\lambda^2=${lin([[s, '\\lambda'], [tt, '']])}$, teda $\\lambda^2${tail([[-s, '\\lambda'], [-tt, '']])}=0$.
            Podľa Vietových vzťahov je súčet koreňov ${s} a súčin ${-tt}: $\\lambda_1=${r1}$, $\\lambda_2=${r2}$.`,
          hint: 'Charakteristická rovnica rekurencie $a_n=s\\,a_{n-1}+t\\,a_{n-2}$ je $\\lambda^2-s\\lambda-t=0$.'
        };
      }
      let A, Bc;
      do { A = rnd(-3, 4); Bc = rnd(-3, 4); } while (A === 0 || Bc === 0);
      const a0 = A + Bc, a1 = A * r1 + Bc * r2;
      return {
        steps: [
          { q: 'Dosaď $n = 0$ a $n = 1$ do všeobecného riešenia a z vzniknutej sústavy urči $A$.', answer: A, signed: true },
          { q: 'Urči $B$.', answer: Bc, signed: true }
        ],
        type: 'tuple', signed: true,
        q: `Rekurencia $${rec2(s, tt)}$ s podmienkami $a_0=${a0}$, $a_1=${a1}$ má charakteristické korene $${r1}$ a $${r2}$.
          Riešenie má tvar $a_n=A\\cdot ${par(r1)}^n+B\\cdot ${par(r2)}^n$. Urči $A$ a $B$ (zadaj v tvare A; B).`,
        answer: [A, Bc],
        solution: `Z $n=0$: $A+B=${a0}$. Z $n=1$: $${r1}A${tail([[r2, 'B']])}=${a1}$.
          Odčítaním $${par(r2)}$-násobku prvej rovnice: $${r1 - r2}A=${a1 - r2 * a0}$, teda $A=${A}$ a $B=${a0}-${par(A)}=${Bc}$.`,
        hint: 'Dosaď $n=0$ a $n=1$ do všeobecného riešenia a vyrieš sústavu dvoch rovníc pre $A$, $B$.'
      };
    }
    if (t < 0.78) {
      const n = rnd(5, 15);
      const S = [
        ['k', n * (n + 1) / 2, `\\frac{n(n+1)}{2}=\\frac{${n}\\cdot ${n + 1}}{2}`,
          [{ value: n * (n + 1), msg: 'Vo vzorci $\\frac{n(n+1)}{2}$ si zabudol deliť dvoma.' }]],
        ['(2k-1)', n * n, `n^2=${n}^2`,
          [{ value: n * (n + 1), msg: 'Sčítal si len $2k$. Od každého člena treba odčítať 1, spolu teda ešte $-n$.' }]],
        ['k^2', n * (n + 1) * (2 * n + 1) / 6, `\\frac{n(n+1)(2n+1)}{6}=\\frac{${n}\\cdot ${n + 1}\\cdot ${2 * n + 1}}{6}`,
          [{ value: Math.pow(n * (n + 1) / 2, 2), msg: 'Toto je súčet tretích mocnín $\\left(\\frac{n(n+1)}{2}\\right)^2$. Pre druhé mocniny platí iný vzorec.' }]],
        ['k(k+1)', n * (n + 1) * (n + 2) / 3, `\\frac{n(n+1)(n+2)}{3}=\\frac{${n}\\cdot ${n + 1}\\cdot ${n + 2}}{3}`,
          [{ value: n * (n + 1) * (2 * n + 1) / 6, msg: 'Po rozpísaní $k(k+1) = k^2 + k$ treba sčítať oba súčty; zabudol si pripočítať $\\sum k$.' }]],
        ['2^{k-1}', Math.pow(2, n) - 1, `2^n-1=2^{${n}}-1`,
          [{ value: Math.pow(2, n + 1) - 1, msg: 'Súčet začína členom $2^0$ a končí $2^{n-1}$, takže výsledok je $2^n - 1$, nie $2^{n+1} - 1$.' }]]
      ];
      const [e, v, f, mistakes] = pick(S);
      return {
        mistakes,
        q: `Vypočítaj $\\displaystyle\\sum_{k=1}^{${n}} ${e}$ (vzorec, ktorý sa dokazuje matematickou indukciou).`,
        answer: v,
        solution: `Indukciou sa dokáže $\\sum_{k=1}^{n} ${e}=${f.split('=')[0]}$. Pre $n=${n}$: $${f}=${v}$.`,
        hint: 'Známe súčty: $\\sum k=\\frac{n(n+1)}{2}$, $\\sum(2k-1)=n^2$, $\\sum k^2=\\frac{n(n+1)(2n+1)}{6}$, $\\sum k(k+1)=\\frac{n(n+1)(n+2)}{3}$, $\\sum 2^{k-1}=2^n-1$.'
      };
    }
    const q = rnd(2, 3), d = rnd(-3, 4), a0 = rnd(0, 4), n = rnd(4, 7), a = [a0];
    for (let i = 1; i <= n; i++) a.push(q * a[i - 1] + d);
    const kind = Math.random() < 0.5;
    if (kind) {
      const wr = Math.pow(q, n) * a0 + n * d;
      return {
        mistakes: wr !== a[n] ? [{ value: wr, msg: `Konštanta $${d}$ sa v ďalších krokoch tiež násobí číslom $${q}$; nestačí ju pripočítať $n$-krát.` }] : [],
        steps: [
          { q: 'Vypočítaj $a_1$.', answer: a[1], signed: true },
          { q: 'Vypočítaj $a_2$.', answer: a[2], signed: true },
          { q: `Pokračuj až po $a_{${n}}$.`, answer: a[n], signed: true }
        ],
        signed: true,
        q: `Postupnosť je daná rekurentne: $a_0=${a0}$, $a_n=${lin([[q, 'a_{n-1}'], [d, '']])}$ pre $n\\ge 1$. Vypočítaj $a_{${n}}$.`,
        answer: a[n],
        solution: `Postupne ${a.map((v, i) => `$a_{${i}}=${v}$`).join(', ')}. Kontrola vzorcom: pevný bod $c=\\frac{${d}}{1-${q}}$, $a_n=${q}^n(a_0-c)+c$ dáva $a_{${n}}=${a[n]}$.`,
        hint: 'Počítaj člen po člene, alebo použi vzorec $a_n=q^n(a_0-c)+c$ s $c=\\frac{d}{1-q}$.'
      };
    }
    const m = rnd(3, 9), T = [0];
    for (let i = 1; i <= m; i++) T.push(T[i - 1] + i);
    return {
      mistakes: [{ value: m * (m + 1), msg: 'Každú úsečku si započítal dvakrát (raz z každého konca). Pri rozvinutí rekurencie sčítavaš $1 + 2 + \\dots + (n-1)$.' }],
      q: `Počet úsečiek spájajúcich $n$ bodov v rovine (žiadne tri na priamke) spĺňa $T_1=0$ a $T_n=T_{n-1}+(n-1)$. Vypočítaj $T_{${m + 1}}$.`,
      answer: m * (m + 1) / 2,
      solution: `Nový bod sa spojí so všetkými $n-1$ predchádzajúcimi. Rozvinutím $T_n=0+1+2+\\dots+(n-1)=\\frac{n(n-1)}{2}$, teda $T_{${m + 1}}=\\frac{${m + 1}\\cdot ${m}}{2}=${m * (m + 1) / 2}$.`,
      hint: 'Rozviň rekurenciu: $T_n=T_1+1+2+\\dots+(n-1)$.'
    };
  });

  /* ======================= 7. FORMÁLNE SYSTÉMY ======================= */

  lesson({
    id: 'v5-formalne', order: 70, title: 'Základy formálnych systémov',
    summary: 'Jazyk, axiómy a odvodzovacie pravidlá, modus ponens, formálny dôkaz, korektnosť, bezospornosť a úplnosť – prehľad pojmov.',
    theory: [
      `<p><strong>Formálny systém</strong> tvorí (1) <em>jazyk</em> – abeceda a pravidlá tvorby správne utvorených formúl, (2) <em>axiómy</em> – vybrané formuly prijaté bez dôkazu,
       a (3) <em>odvodzovacie pravidlá</em>, ktoré z formúl vytvárajú nové. Odvodzovanie je čisto syntaktické – pracuje s tvarom formúl, nie s ich významom,
       a dá sa preto overovať mechanicky (počítačom). Vo výrokovom počte sú typické axiómy (schémy) napríklad
       $A\\Rightarrow(B\\Rightarrow A)$, $(A\\Rightarrow(B\\Rightarrow C))\\Rightarrow((A\\Rightarrow B)\\Rightarrow(A\\Rightarrow C))$ a $(\\neg B\\Rightarrow\\neg A)\\Rightarrow(A\\Rightarrow B)$.</p>`,
      `<p><strong>Modus ponens</strong> je pravidlo $\\dfrac{A\\qquad A\\Rightarrow B}{B}$: z formúl $A$ a $A\\Rightarrow B$ odvodíme $B$. Ďalšie odvodené pravidlá:
       modus tollens ($A\\Rightarrow B$, $\\neg B$ $\\vdash$ $\\neg A$), hypotetický sylogizmus ($A\\Rightarrow B$, $B\\Rightarrow C$ $\\vdash$ $A\\Rightarrow C$) a disjunktívny sylogizmus ($A\\lor B$, $\\neg A$ $\\vdash$ $B$).
       Nesprávne sú úsudky „potvrdenie dôsledku“ ($A\\Rightarrow B$, $B$, teda $A$) a „popretie predpokladu“ ($A\\Rightarrow B$, $\\neg A$, teda $\\neg B$).</p>`,
      `<p><strong>Dôkaz</strong> formuly $F$ z množiny predpokladov $\\Gamma$ je konečná postupnosť formúl $F_1, \\dots, F_k=F$, v ktorej je každá formula axiómou, prvkom $\\Gamma$
       alebo vznikla pravidlom z predchádzajúcich. Píšeme $\\Gamma\\vdash F$ (syntaktické odvodenie), na rozdiel od $\\Gamma\\models F$ (sémantické vyplývanie: $F$ je pravdivá pri každom ohodnotení, pri ktorom sú pravdivé všetky formuly z $\\Gamma$).
       Napríklad z $\\Gamma=\\{p, p\\Rightarrow q, q\\Rightarrow r\\}$ je dôkaz $r$: $p$ ($\\Gamma$), $p\\Rightarrow q$ ($\\Gamma$), $q$ (MP), $q\\Rightarrow r$ ($\\Gamma$), $r$ (MP).</p>`,
      `<p><strong>Vlastnosti systémov.</strong> Systém je <strong>korektný</strong>, ak sa dajú dokázať len pravdivé (pri výrokovom počte len tautologické) formuly: $\\vdash F\\Rightarrow\\;\\models F$.
       Je <strong>úplný</strong>, ak sa dá dokázať každá pravdivá formula: $\\models F\\Rightarrow\\;\\vdash F$. Množina formúl je <strong>bezosporná</strong>, ak z nej nemožno odvodiť $F$ aj $\\neg F$ –
       zo spornej množiny sa dá odvodiť úplne všetko. Axiómy sú <strong>nezávislé</strong>, ak žiadnu nemožno odvodiť z ostatných. Výrokový aj predikátový počet sú korektné a úplné (Gödelova veta o úplnosti),
       no podľa Gödelových viet o neúplnosti žiadny bezosporný, efektívne zadaný systém obsahujúci aritmetiku prirodzených čísel nedokáže všetky pravdivé aritmetické tvrdenia ani vlastnú bezospornosť.</p>`
    ],
    examples: [
      { task: 'Z predpokladov $\\Gamma=\\{p\\Rightarrow q,\\; q\\Rightarrow r,\\; \\neg r\\}$ odvoďte $\\neg p$.',
        steps: ['Z $q\\Rightarrow r$ a $\\neg r$ modus tollens dáva $\\neg q$.',
          'Z $p\\Rightarrow q$ a $\\neg q$ opäť modus tollens dáva $\\neg p$.',
          'Iná cesta: hypotetický sylogizmus z $p\\Rightarrow q$ a $q\\Rightarrow r$ dá $p\\Rightarrow r$, potom modus tollens s $\\neg r$ dá $\\neg p$. Teda $\\Gamma\\vdash\\neg p$.'] },
      { task: 'Je množina formúl $\\{p\\lor q,\\; p\\Rightarrow r,\\; q\\Rightarrow r,\\; \\neg r\\}$ bezosporná?',
        steps: ['Z $\\neg r$ a $p\\Rightarrow r$ dostaneme $\\neg p$, z $\\neg r$ a $q\\Rightarrow r$ dostaneme $\\neg q$.',
          'Disjunktívny sylogizmus z $p\\lor q$ a $\\neg p$ dá $q$; spolu s $\\neg q$ máme odvodené $q$ aj $\\neg q$.',
          'Množina je sporná. Sémanticky: neexistuje ohodnotenie, pri ktorom by boli všetky štyri formuly pravdivé (vďaka korektnosti a úplnosti sú tieto pohľady rovnocenné).'] }
    ]
  });

  gen('v5-formalne', () => {
    const t = Math.random();
    if (t < 0.3) {
      const n = 6, facts = shuffle(range(1, n)).slice(0, rnd(1, 2));
      const rules = [];
      while (rules.length < rnd(4, 6)) {
        const a = rnd(1, n), b = rnd(1, n);
        if (a !== b && !rules.some(([x, y]) => x === a && y === b)) rules.push([a, b]);
      }
      const known = new Set(facts), order = [...facts];
      let changed = true;
      while (changed) {
        changed = false;
        for (const [a, b] of rules) if (known.has(a) && !known.has(b)) { known.add(b); order.push(b); changed = true; }
      }
      const P = (i) => `p_{${i}}`;
      const sys = `axiómy ${facts.map((i) => `$${P(i)}$`).join(', ')} a ${rules.map(([a, b]) => `$${P(a)}\\Rightarrow ${P(b)}$`).join(', ')}`;
      const naive = new Set([...facts, ...rules.map(([, b]) => b)]).size;
      if (Math.random() < 0.5) {
        return {
          mistakes: naive !== known.size ? [{ value: naive, msg: 'Z implikácie $p_i\\Rightarrow p_j$ dostaneš $p_j$ modus ponens len vtedy, keď už máš dokázané $p_i$. Nie každý záver implikácie je dokázateľný.' }] : [],
          q: `Formálny systém má ${sys}; jediným odvodzovacím pravidlom je modus ponens. Koľko z premenných $p_1, \\dots, p_6$ (ako samostatných formúl) je v systéme dokázateľných?`,
          answer: known.size,
          solution: `Začneme axiómami ${facts.map((i) => `$${P(i)}$`).join(', ')} a opakovane používame modus ponens. Postupne dostaneme ${order.map((i) => `$${P(i)}$`).join(', ')}.
            Ďalšie pravidlo už nič nové nedá, dokázateľných premenných je ${known.size}.`,
          hint: 'Ak už máš $p_i$ a v systéme je $p_i\\Rightarrow p_j$, môžeš pridať $p_j$. Opakuj, kým pribúdajú nové formuly.'
        };
      }
      const target = pick(range(1, n).filter((i) => !facts.includes(i)));
      const ok = known.has(target);
      return {
        choiceHints: { [ok ? YN[1] : YN[0]]: ok
          ? 'Modus ponens môžeš použiť opakovane: z axiómy cez niekoľko implikácií za sebou. Skús nájsť takú reťaz.'
          : 'Implikácia $p_i\\Rightarrow p_j$ ti $p_j$ nedá, kým nemáš dokázané $p_i$. Over, či k hľadanej formule vedie reťaz už od axióm.' },
        type: 'choice', options: YN,
        q: `Formálny systém má ${sys}; jediným odvodzovacím pravidlom je modus ponens. Je formula $${P(target)}$ v systéme dokázateľná?`,
        answer: ok ? YN[0] : YN[1],
        solution: `Dokázateľné premenné získame opakovaným modus ponens z axióm: ${order.map((i) => `$${P(i)}$`).join(', ')}.
          ${ok ? `Formula $${P(target)}$ medzi nimi je.` : `Formula $${P(target)}$ medzi nimi nie je – nevedie k nej žiadna reťaz implikácií od axióm.`}`,
        hint: 'Hľadaj reťaz implikácií, ktorá začína axiómou a končí hľadanou premennou.'
      };
    }
    if (t < 0.52) {
      const RULES = ['modus ponens', 'modus tollens', 'hypotetický sylogizmus', 'disjunktívny sylogizmus', 'neplatný úsudok'];
      const [x, y, z] = shuffle(['p', 'q', 'r', 's']).map((v) => (Math.random() < 0.2 ? N(V(v)) : V(v)));
      const I = (a, b) => tex(B('imp', a, b));
      const S = [
        [[I(x, y), tex(x)], tex(y), 0], [[I(x, y), tex(neg(y))], tex(neg(x)), 1], [[I(x, y), I(y, z)], I(x, z), 2],
        [[tex(B('or', x, y)), tex(neg(x))], tex(y), 3], [[I(x, y), tex(y)], tex(x), 4], [[I(x, y), tex(neg(x))], tex(neg(y)), 4]
      ];
      const [prem, concl, k] = pick(S);
      const RH = [
        'Modus ponens má tvar $A$, $A\\Rightarrow B$ $\\vdash$ $B$: daný musí byť predpoklad implikácie, nie jej záver.',
        'Modus tollens má tvar $A\\Rightarrow B$, $\\neg B$ $\\vdash$ $\\neg A$: daná musí byť negácia záveru, nie negácia predpokladu.',
        'Hypotetický sylogizmus spája dve implikácie: $A\\Rightarrow B$, $B\\Rightarrow C$ $\\vdash$ $A\\Rightarrow C$.',
        'Disjunktívny sylogizmus vychádza z disjunkcie: $A\\lor B$, $\\neg A$ $\\vdash$ $B$.',
        'Tento úsudok je platný: záver je pravdivý pri každom ohodnotení, pri ktorom sú pravdivé predpoklady.'
      ];
      const choiceHints = {};
      RULES.forEach((r, i) => { if (i !== k) choiceHints[r] = RH[i]; });
      return {
        choiceHints,
        type: 'choice', options: RULES,
        q: `Z predpokladov ${prem.map((f) => `$${f}$`).join(' a ')} sa odvodzuje $${concl}$. O aké odvodenie ide?`,
        answer: RULES[k],
        solution: k === 4
          ? `Úsudok nie je platný: ak je predpoklad implikácie nepravdivý a jej záver pravdivý (alebo naopak podľa tvaru), predpoklady sú pravdivé, no záver nie. Ide o ${concl === tex(x) ? 'potvrdenie dôsledku' : 'popretie predpokladu'}.`
          : `Ide o ${RULES[k]}: ${['z $A$ a $A\\Rightarrow B$ plynie $B$', 'z $A\\Rightarrow B$ a $\\neg B$ plynie $\\neg A$', 'z $A\\Rightarrow B$ a $B\\Rightarrow C$ plynie $A\\Rightarrow C$', 'z $A\\lor B$ a $\\neg A$ plynie $B$'][k]}.`,
        hint: 'Urči, aký tvar majú predpoklady (implikácia, disjunkcia, negácia) a či záver naozaj platí pri každom ohodnotení, pri ktorom platia predpoklady.'
      };
    }
    if (t < 0.7) {
      const TERMS = ['korektnosť', 'úplnosť', 'bezospornosť', 'nezávislosť axióm', 'rozhodnuteľnosť'];
      const S = [
        ['Každá formula dokázateľná v systéme je pravdivá (tautológia).', 0],
        ['Z $\\vdash F$ vyplýva $\\models F$.', 0],
        ['Každá tautológia je v systéme dokázateľná.', 1],
        ['Z $\\models F$ vyplýva $\\vdash F$.', 1],
        ['V systéme nemožno dokázať formulu $F$ a zároveň jej negáciu $\\neg F$.', 2],
        ['Existuje formula, ktorá v systéme nie je dokázateľná.', 2],
        ['Žiadnu z axióm nemožno odvodiť zo zvyšných axióm.', 3],
        ['Existuje algoritmus, ktorý o každej formule po konečnom počte krokov rozhodne, či je v systéme dokázateľná.', 4],
        ['Ak axiómu vynecháme, zmenší sa množina dokázateľných formúl.', 3],
        ['O pravdivosti formuly výrokovej logiky sa dá vždy rozhodnúť pravdivostnou tabuľkou.', 4]
      ];
      const [s, k] = pick(S);
      const TH = [
        'Korektnosť hovorí, že dokázateľné formuly sú pravdivé ($\\vdash F\\Rightarrow\\models F$).',
        'Úplnosť hovorí, že pravdivé formuly sú dokázateľné ($\\models F\\Rightarrow\\vdash F$).',
        'Bezospornosť hovorí, že nemožno odvodiť $F$ aj $\\neg F$.',
        'Nezávislosť axióm hovorí, že žiadna axióma sa nedá odvodiť z ostatných.',
        'Rozhodnuteľnosť hovorí o existencii algoritmu, ktorý o dokázateľnosti rozhodne.'
      ];
      const choiceHints = {};
      TERMS.forEach((x, i) => { if (i !== k) choiceHints[x] = TH[i]; });
      return {
        choiceHints,
        type: 'choice', options: shuffle(TERMS),
        q: `Ktorú vlastnosť formálneho systému opisuje tvrdenie? „${s}“`,
        answer: TERMS[k],
        solution: `Ide o <strong>${TERMS[k]}</strong>. ${[
          'Korektnosť: dokázateľné ⇒ pravdivé.', 'Úplnosť: pravdivé ⇒ dokázateľné.',
          'Bezospornosť: nedá sa odvodiť $F$ aj $\\neg F$; ekvivalentne existuje nedokázateľná formula, lebo zo sporu plynie všetko.',
          'Nezávislosť: žiadna axióma nie je nadbytočná.', 'Rozhodnuteľnosť: existuje mechanický postup na rozhodnutie dokázateľnosti.'][k]}`,
        hint: 'Korektnosť a úplnosť porovnávajú $\\vdash$ a $\\models$ (v opačných smeroch), bezospornosť hovorí o $F$ a $\\neg F$.'
      };
    }
    // splniteľnosť (sémantická bezospornosť) množiny formúl
    const vars = ['p', 'q', 'r'];
    const k = rnd(2, 4), fs = [];
    while (fs.length < k) {
      const f = Math.random() < 0.3 ? (Math.random() < 0.5 ? V(pick(vars)) : N(V(pick(vars)))) : randForm(vars, 2);
      if (!fs.some((g) => tex(g) === tex(f))) fs.push(f);
    }
    if (Math.random() < 0.3) { const g = N(B('and', fs[0], fs[1])); if (!fs.some((h) => tex(h) === tex(g))) fs.push(g); }
    const rows = assignments(vars), sat = rows.filter((s) => fs.every((f) => ev(f, s)));
    const listTex = `\\{${fs.map((f) => tex(f)).join(',\\; ')}\\}`;
    const desc = sat.map((s) => `$(${vars.map((v) => b01(s[v])).join(', ')})$`).join(', ');
    const some = rows.filter((s) => fs.some((f) => ev(f, s))).length;
    if (Math.random() < 0.5) {
      return {
        mistakes: some !== sat.length ? [{ value: some, msg: 'Spočítal si ohodnotenia, pri ktorých platí aspoň jedna formula. Treba, aby boli pravdivé všetky formuly naraz.' }] : [],
        q: `Koľko ohodnotení premenných $(p, q, r)$ spĺňa súčasne všetky formuly množiny $${listTex}$?`,
        answer: sat.length,
        solution: `Prejdeme všetkých 8 ohodnotení. Všetky formuly sú pravdivé pre ${sat.length ? desc : 'žiadne ohodnotenie'}, spolu ${sat.length}.
          ${sat.length ? 'Množina je splniteľná, a teda bezosporná.' : 'Množina je nesplniteľná, teda sporná.'}`,
        hint: 'Najprv využi formuly tvaru $p$ alebo $\\neg p$ – priamo určujú hodnotu premennej. Potom over zvyšné formuly.'
      };
    }
    const OPT = ['splniteľná (bezosporná)', 'nesplniteľná (sporná)'];
    return {
      choiceHints: { [sat.length ? OPT[1] : OPT[0]]: sat.length
        ? 'Na splniteľnosť stačí jediné ohodnotenie, pri ktorom sú pravdivé všetky formuly. Prejdi systematicky všetkých 8 ohodnotení.'
        : 'Nestačí, že je každá formula splniteľná zvlášť: potrebuješ jedno ohodnotenie, pri ktorom sú pravdivé všetky naraz.' },
      type: 'choice', options: OPT,
      q: `Je množina formúl $${listTex}$ splniteľná?`,
      answer: sat.length ? OPT[0] : OPT[1],
      solution: sat.length ? `Áno, napríklad ohodnotenie $(p, q, r)=(${vars.map((v) => b01(sat[0][v])).join(', ')})$ spĺňa všetky formuly (vyhovujúcich ohodnotení je ${sat.length}).`
        : 'Žiadne z 8 ohodnotení nespĺňa všetky formuly naraz, množina je nesplniteľná. Podľa vety o úplnosti je teda aj syntakticky sporná.',
      hint: 'Množina je splniteľná, ak existuje aspoň jedno ohodnotenie, pri ktorom sú pravdivé všetky jej formuly.'
    };
  });
})();
