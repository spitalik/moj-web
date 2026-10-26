/* Podklady na preklad obsahu: node tools/i18n_extract.js
   Pre každý zdrojový súbor obsahu (js/content.js, js/rocniky/*.js) a pre vzorce (js/vzorce.js) zapíše do
   .i18n/src/<súbor>/NN.json časti s textami na preklad (jazykovo nezávislé – rovnaké podklady pre všetky jazyky):
     { "lessons": { id: { title, summary, theory: [text | {fig, caption}], examples: [{task, steps}] } },
       "strings": [ slovenské kľúče slovníka ] }
   Kľúče slovníka sa zbierajú tak, že generátory úloh a obrázky bežia v pomocnom jazyku 'xx' (1000 semienok
   na lekciu) a zaznamená sa každý text bez prekladu (T`…`, T.s, popisy v SVG) aj diera so slovom (tvar slova
   dosadený do vety). Preklady zostaví tools/i18n_build.js. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const OUT = path.join(root, '.i18n', 'src');
const CHUNK = 18000; // približná veľkosť jednej časti (znaky JSON)
const RUNS = 1000;
global.window = global;

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const UI = ['js/app.js', 'js/store.js', 'js/keypad.js', 'js/scratchpad.js', 'js/tts.js', 'js/widget.js'];
const scripts = [...html.matchAll(/<script src="(js\/[^"]+)"/g)].map((m) => m[1])
  .filter((s) => !UI.includes(s) && !s.startsWith('js/features/') && !s.startsWith('js/content-i18n/'));

// lekcie podľa súboru, v ktorom vznikli
const owner = {};
for (const rel of scripts) {
  const before = new Set((global.LESSONS || []).map((l) => l.id));
  vm.runInThisContext(fs.readFileSync(path.join(root, rel), 'utf8'), { filename: rel });
  const base = path.basename(rel, '.js');
  (global.LESSONS || []).filter((l) => !before.has(l.id)).forEach((l) => { owner[l.id] = base; });
}
const { LESSONS, EXERCISES, FIGURES, CONTENT_I18N: CI } = global;

const H = 'xx';
CI.add(H, { lessons: Object.fromEntries(LESSONS.map((L) => [L.id, { title: L.title, summary: L.summary, theory: L.theory, examples: L.examples }])) });
CI.harvest.on = true;
const TITLES = new Set(LESSONS.map((L) => L.title.replace(/\s+/g, ' ').trim()));

function harvestLesson(L) {
  const keys = new Set();
  const m0 = CI.misses.length;
  CI.harvest.values.clear();
  L.theory.filter((x) => typeof x !== 'string').forEach((x) => {
    const def = FIGURES.get(x.fig);
    if (!def) return;
    CI.run(H, null, () => {
      if (def.controls) {
        const vals = {};
        def.controls.forEach((c) => { vals[c.id] = c.value; CI.text(c.label); });
        for (const c of def.controls) {
          const steps = c.step ? Math.min(40, Math.round((c.max - c.min) / c.step)) : 10;
          for (let k = 0; k <= steps; k++) {
            const v = c.min + (c.max - c.min) * k / steps;
            const r = def.draw(Object.assign({}, vals, { [c.id]: v }));
            CI.markup(r.svg);
          }
        }
      } else CI.markup(def.draw());
    });
  });
  if (EXERCISES.has(L.id)) {
    for (let s = 1; s <= RUNS; s++) {
      try { EXERCISES.make(L.id, H, s * 7919); } catch (e) { /* chyby hlási validátor */ }
    }
  }
  CI.misses.slice(m0).forEach((m) => keys.add(m.key));
  // názvy lekcií sa prekladajú s lekciou (opakovanie na maturitu ich dosadzuje už preložené)
  CI.harvest.values.forEach((v) => { if (!TITLES.has(v)) keys.add(v); });
  return keys;
}

function writeChunks(base, lessons, strings) {
  const dir = path.join(OUT, base);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  // L01.json… = lekcie (statický obsah), S01.json… = kľúče slovníka (texty generátorov a obrázkov)
  const write = (prefix, items, add, empty) => {
    let cur = empty(), size = 0, n = 0;
    const flush = () => {
      if (!size) return;
      n += 1;
      fs.writeFileSync(path.join(dir, `${prefix}${String(n).padStart(2, '0')}.json`), JSON.stringify(cur, null, 1));
      cur = empty(); size = 0;
    };
    items.forEach((it) => {
      const s = JSON.stringify(it).length;
      if (size && size + s > CHUNK) flush();
      add(cur, it); size += s;
    });
    flush();
    return n;
  };
  return write('L', Object.entries(lessons), (c, [id, l]) => { c.lessons[id] = l; }, () => ({ lessons: {} }))
    + write('S', strings, (c, k) => { c.strings.push(k); }, () => ({ strings: [] }));
}

const leakMode = process.argv.includes('--leak');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));

/* --leak <súbor>: kontrola označenia textov. Každý zozbieraný kľúč sa „preloží“ na značku § (diery ostanú),
   úlohy a obrázky sa vygenerujú znova a vypíšu sa zvyšky textu mimo matematiky ($…$) a HTML značiek,
   ktoré ešte vyzerajú ako slová – to sú texty, ktoré generátor neoznačil cez T`…` / T.s. */
if (leakMode) {
  const ids = LESSONS.filter((l) => only.includes(owner[l.id]) || (only.includes('figures') && l.theory.some((x) => typeof x !== 'string')));
  const all = new Set();
  ids.forEach((L) => harvestLesson(L).forEach((k) => all.add(k)));
  CI.harvest.on = false;
  const strings = {};
  all.forEach((k) => { const holes = [...k.matchAll(/\{@\d+\}/g)].map((m) => m[0]).join(' '); strings[k] = `§ ${holes} §`; });
  CI.add('yy', { strings, lessons: Object.fromEntries(LESSONS.map((L) => [L.id, { title: '§', summary: '§', theory: L.theory, examples: L.examples }])) });
  const rest = (s) => String(s).replace(/<svg[\s\S]*?<\/svg>/g, (m) => (m.match(/<text\b[^>]*>[^<]*<\/text>|aria-label="[^"]*"/g) || []).join(' '))
    .replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, ' ').replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/g, ' ')
    // matematika z dier stojí po náhrade § mimo $…$: príkazy TeXu aj s argumentom (\text{min}, \mathbb{Z}) vynecháme
    .replace(/\\[a-zA-Z]+(\{[^{}]*\})?/g, ' ');
  // slovo s 3+ písmenami (okrem matematických skratiek a rímskych čísel) alebo krátke slovenské slovo
  const WORD = /[A-Za-zÀ-ž]{3,}|\b(?:a|je|na|pre|ak|kde|so|zo|do|od|po|sa|si|to)\b/g;
  const MATHY = new Set(['aria', 'label', 'sin', 'cos', 'tan', 'tg', 'cotg', 'cot', 'log', 'det', 'max', 'min', 'lim', 'mod', 'gcd', 'lcm',
    'rank', 'span', 'tr', 'arcsin', 'arccos', 'arctg', 'sgn', 'Var', 'cov', 'exp', 'Re', 'Im', 'ker', 'dim', 'nsd', 'nsn']);
  const found = new Map();
  const note = (id, where, s) => {
    const m = (rest(s).match(WORD) || []).filter((w) => !MATHY.has(w) && !/^[IVXLCDM]+$/.test(w));
    if (!m.length) return;
    const key = `${id} ${where}`;
    if (!found.has(key)) found.set(key, new Set());
    found.get(key).add(rest(s).replace(/\s+/g, ' ').trim().slice(0, 160));
  };
  for (const L of ids) {
    if (only.includes(owner[L.id]) && EXERCISES.has(L.id)) {
      for (let s = 1; s <= 300; s++) {
        let ex;
        try { ex = EXERCISES.make(L.id, 'yy', s * 7919); } catch (e) { continue; }
        ['q', 'solution', 'hint', 'placeholder', 'show'].forEach((k) => ex[k] !== undefined && note(L.id, k, ex[k]));
        (ex.options || []).forEach((o) => note(L.id, 'možnosť', o));
        (ex.mistakes || []).forEach((m) => note(L.id, 'chyba', m.msg));
        Object.values(ex.choiceHints || {}).forEach((m) => note(L.id, 'choiceHints', m));
        (ex.steps || []).forEach((st) => { note(L.id, 'krok', st.q); if (st.hint) note(L.id, 'krok nápoveda', st.hint); });
      }
    }
    L.theory.filter((x) => typeof x !== 'string').forEach((x) => {
      const def = FIGURES.get(x.fig);
      if (!def) return;
      CI.run('yy', null, () => {
        if (!def.controls) return note(L.id, `obrázok ${x.fig}`, CI.markup(def.draw()));
        const vals = {};
        def.controls.forEach((c) => { vals[c.id] = c.value; note(L.id, `obrázok ${x.fig} posuvník`, CI.text(c.label)); });
        for (const c of def.controls) for (const v of [c.min, c.max, c.value]) {
          const r = def.draw(Object.assign({}, vals, { [c.id]: v }));
          note(L.id, `obrázok ${x.fig}`, CI.markup(r.svg));
          note(L.id, `obrázok ${x.fig} readout`, r.readout);
        }
      });
    });
  }
  if (!found.size) console.log('Bez neoznačených textov.');
  for (const [k, set] of found) { console.log(`== ${k}`); [...set].slice(0, 6).forEach((s) => console.log('   ' + s)); }
  process.exit(0);
}
const bases = [...new Set(Object.values(owner))];
const summary = [];
const seenKeys = new Set();
for (const base of bases) {
  if (only.length && !only.includes(base)) continue;
  const ls = LESSONS.filter((l) => owner[l.id] === base);
  const lessons = {};
  const keys = new Set();
  for (const L of ls) {
    lessons[L.id] = {
      title: L.title, summary: L.summary,
      theory: L.theory.map((x) => (typeof x === 'string' ? x : Object.assign({ fig: x.fig }, x.caption ? { caption: x.caption } : {}))),
      examples: L.examples.map((e) => ({ task: e.task, steps: e.steps }))
    };
    harvestLesson(L).forEach((k) => keys.add(k));
  }
  // kľúč stačí preložiť raz (slovník je spoločný pre jazyk) – ponecháme ho v prvom súbore, kde sa objaví
  const own = [...keys].filter((k) => !seenKeys.has(k)).sort();
  own.forEach((k) => seenKeys.add(k));
  const n = writeChunks(base, lessons, own);
  summary.push(`${base}: ${ls.length} lekcií, ${own.length} kľúčov, ${n} častí`);
}

// vzorce: nadpisy skupín, názvy, poznámky a vzorce s textom (\text{…})
if (!only.length || only.includes('vzorce')) {
  const keys = new Set();
  Object.values(global.FORMULAS || {}).forEach((groups) => groups.forEach((g) => {
    keys.add(g.title);
    g.items.forEach((it) => {
      keys.add(it.name);
      if (it.note) keys.add(it.note);
      if (/\\text\{[^}]*[A-Za-zÀ-ž]{2,}/.test(it.tex)) keys.add(it.tex);
    });
  }));
  const n = writeChunks('vzorce', {}, [...keys].map((k) => k.replace(/\s+/g, ' ').trim()));
  summary.push(`vzorce: ${keys.size} kľúčov, ${n} častí`);
}

// symboly: nadpisy skupín, názvy, významy a symboly/príklady s textom (\text{…})
if (!only.length || only.includes('symboly')) {
  const keys = new Set();
  (global.SYMBOLS || []).forEach((g) => {
    keys.add(g.title);
    g.items.forEach((it) => {
      keys.add(it.name);
      keys.add(it.note);
      [it.tex, it.ex].forEach((x) => { if (/\\text\{[^}]*[A-Za-zÀ-ž]{2,}/.test(x)) keys.add(x); });
    });
  });
  const n = writeChunks('symboly', {}, [...keys].map((k) => k.replace(/\s+/g, ' ').trim()));
  summary.push(`symboly: ${keys.size} kľúčov, ${n} častí`);
}
console.log(summary.join('\n'));
