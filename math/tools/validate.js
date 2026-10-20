/* Kontrola obsahu bez prehliadača: node tools/validate.js
   Načíta skripty v poradí z index.html (okrem app.js), skontroluje lekcie, obrázky, generátory úloh a preklady.
   Chýbajúci súbor ročníka je len upozornenie (súbory môžu vznikať postupne). Návratový kód 1 = chyby.
   node tools/validate.js --missing en  vypíše texty bez anglického prekladu (kostra slovníka).
   node tools/validate.js --lang it  skontroluje z prekladov len taliančinu (--no-strings: bez textov generátorov a obrázkov). */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
global.window = global;

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
// --missing <jazyk>: vypíše chýbajúce preklady textov (generátory bežia všetkých 400 behov)
const missingFor = (() => { const k = process.argv.indexOf('--missing'); return k > 0 ? process.argv[k + 1] : null; })();

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
// skripty rozhrania (potrebujú prehliadač) – validátor načíta len obsah a logiku úloh
const UI_SCRIPTS = ['js/app.js', 'js/store.js', 'js/keypad.js', 'js/scratchpad.js', 'js/tts.js', 'js/widget.js'];
const scripts = [...html.matchAll(/<script src="(js\/[^"]+)"/g)].map((m) => m[1]).filter((s) => !UI_SCRIPTS.includes(s) && !s.startsWith('js/features/'));
// preklady obsahu sa v prehliadači načítajú len pre zvolený jazyk; validátor načíta všetky (--lang <kód> = len jeden)
const noStrings = process.argv.includes('--no-strings');
const onlyLang = (() => { const k = process.argv.indexOf('--lang'); return k > 0 ? process.argv[k + 1] : missingFor; })();
const ciDir = path.join(root, 'js', 'content-i18n');
const packFiles = fs.readdirSync(ciDir, { withFileTypes: true }).filter((d) => d.isDirectory() && (!onlyLang || d.name === onlyLang || d.name === missingFor))
  .flatMap((d) => fs.readdirSync(path.join(ciDir, d.name)).filter((f) => f.endsWith('.js')).sort().map((f) => `js/content-i18n/${d.name}/${f}`));
scripts.splice(scripts.indexOf('js/content-i18n/files.js') + 1, 0, ...packFiles);
for (const rel of scripts) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) { warnings.push(`chýba súbor ${rel}`); continue; }
  try {
    vm.runInThisContext(fs.readFileSync(file, 'utf8'), { filename: rel });
  } catch (e) {
    err(rel, 'chyba pri načítaní: ' + (e.stack || e).toString().split('\n').slice(0, 3).join(' | '));
  }
}

const { LEVELS, LESSONS, EXERCISES, FIGURES } = global;

// Text s matematikou: párny počet $, žiadne '<' začínajúce HTML značku vnútri $…$, žiadne undefined/NaN.
function checkText(where, s) {
  if (typeof s !== 'string') { err(where, 'nie je text'); return; }
  if (/undefined|NaN|\[object Object\]/.test(s)) err(where, `obsahuje undefined/NaN: ${s.slice(0, 120)}`);
  const plain = s.replace(/\\\$/g, '');
  const dollars = (plain.match(/\$/g) || []).length;
  if (dollars % 2) err(where, `nepárny počet $: ${s.slice(0, 120)}`);
  for (const m of plain.matchAll(/\$([^$]*)\$/g)) {
    if (/<[a-zA-Z\/!]/.test(m[1])) err(where, `HTML značka alebo '<' pred písmenom v matematike (použi &lt;): $${m[1].slice(0, 80)}$`);
    // KaTeX nevie dať exponent na medzeru: \,^\circ spadne, správne je \,{}^\circ
    if (/\\[,;:! ]\s*[\^_]/.test(m[1])) err(where, `exponent/index za medzerou (použi {}^): $${m[1].slice(0, 80)}$`);
  }
}

// Tvar odpovede a to, že správna odpoveď prejde kontrolou (úloha aj jej krok).
function checkAnswer(ex, gw) {
  let canonical;
  switch (ex.type) {
    case 'num':
      if (typeof ex.answer !== 'number' || !Number.isFinite(ex.answer)) err(gw, `odpoveď nie je konečné číslo: ${ex.answer}`);
      canonical = String(ex.answer);
      break;
    case 'set': case 'tuple':
      if (!Array.isArray(ex.answer) || ex.answer.some((v) => !Number.isFinite(v))) err(gw, `odpoveď nie je pole čísel: ${ex.answer}`);
      canonical = (ex.answer || []).join('; ');
      break;
    case 'text':
      if (typeof ex.answer !== 'string' || !ex.answer.trim()) err(gw, 'textová odpoveď je prázdna');
      canonical = ex.answer;
      break;
    case 'choice':
      if (!Array.isArray(ex.options) || ex.options.length < 2) err(gw, 'výber potrebuje aspoň 2 možnosti');
      else if (new Set(ex.options).size !== ex.options.length) err(gw, `duplicitné možnosti: ${ex.options.join(' | ')}`);
      if (!(ex.options || []).includes(ex.answer)) err(gw, `odpoveď „${ex.answer}“ nie je medzi možnosťami`);
      (ex.options || []).forEach((o) => checkText(`${gw} možnosť`, String(o)));
      canonical = ex.answer;
      break;
    default:
      err(gw, `neznámy typ ${ex.type}`);
  }
  if (canonical !== undefined && EXERCISES.check(ex, canonical) !== true) {
    err(gw, `správna odpoveď „${canonical}“ neprejde kontrolou (zadanie: ${String(ex.q).slice(0, 100)})`);
  }
}

// Typické chyby a kroky riešenia (nepovinné polia generátora).
const stats = { withMistakes: new Set(), withSteps: new Set() };
function checkExtras(ex, gw) {
  if (ex.mistakes !== undefined) {
    if (!Array.isArray(ex.mistakes)) err(gw, 'mistakes musí byť pole');
    else {
      if (ex.mistakes.length) stats.withMistakes.add(ex.lesson);
      ex.mistakes.forEach((m, i) => {
        const mw = `${gw} chyba ${i + 1}`;
        if (!m || m.value === undefined) { err(mw, 'chýba value'); return; }
        checkText(`${mw} text`, m.msg);
        const fake = Object.assign({}, ex, { answer: m.value });
        const c = EXERCISES.canonical(fake);
        // hodnota chyby nesmie byť zároveň správna odpoveď
        if (EXERCISES.check(ex, c) === true) err(mw, `hodnota chyby „${c}“ je zároveň správna odpoveď`);
        if (EXERCISES.check(fake, c) !== true) err(mw, `hodnota chyby „${c}“ nemá tvar odpovede (typ ${ex.type})`);
      });
    }
  }
  if (ex.choiceHints !== undefined) {
    Object.entries(ex.choiceHints).forEach(([opt, msg]) => {
      if (!(ex.options || []).includes(opt)) err(gw, `choiceHints: možnosť „${opt}“ neexistuje`);
      if (opt === ex.answer) err(gw, 'choiceHints nemá vysvetľovať správnu možnosť');
      checkText(`${gw} choiceHints`, msg);
    });
  }
  if (ex.steps !== undefined) {
    if (!Array.isArray(ex.steps) || ex.steps.length < 2) { err(gw, 'steps musí byť pole s aspoň 2 krokmi'); return; }
    stats.withSteps.add(ex.lesson);
    ex.steps.forEach((s, i) => {
      const sw = `${gw} krok ${i + 1}`;
      checkText(`${sw} zadanie`, s.q);
      if (s.hint !== undefined) checkText(`${sw} nápoveda`, s.hint);
      checkAnswer(EXERCISES.stepEx(ex, s), sw);
    });
    // posledný krok vedie k výsledku úlohy (ak má rovnaký typ odpovede)
    const last = EXERCISES.stepEx(ex, ex.steps[ex.steps.length - 1]);
    if (last.type === ex.type && ex.type !== 'choice' && EXERCISES.check(ex, EXERCISES.canonical(last)) !== true) {
      err(gw, `posledný krok (${EXERCISES.canonical(last)}) nedáva výsledok úlohy (${EXERCISES.canonical(ex)})`);
    }
  }
}

// Generátor: 400 behov, každá správna odpoveď musí prejsť kontrolou. lang = jazyk obsahu,
// extra(ex, gw) = ďalšia kontrola výstupu (napr. úniky slovenčiny v preklade).
function checkGenerator(L, lang, w, extra) {
  const RUNS = 400;
  for (let r = 0; r < RUNS; r++) {
    let ex;
    try { ex = EXERCISES.make(L.id, lang); } catch (e) { err(w, `generátor spadol: ${e.message}`); break; }
    const gw = `${w} generátor`;
    const before = errors.length;
    checkText(`${gw} zadanie`, ex.q);
    checkText(`${gw} riešenie`, ex.solution);
    checkText(`${gw} nápoveda`, ex.hint);
    checkAnswer(ex, gw);
    checkExtras(ex, gw);
    if (extra) extra(ex, gw);
    if (errors.length > before && !missingFor) break; // jedna chyba na generátor stačí
  }
  // rovnaké semienko → rovnaká úloha (zadania od učiteľa, denná výzva)
  try {
    const a = EXERCISES.make(L.id, lang, 12345), b = EXERCISES.make(L.id, lang, 12345);
    // interné id prvkov SVG (clipPath a pod.) sa líšia medzi vykresleniami, obsah úlohy nie
    const strip = (q) => String(q).replace(/\b[a-z]+\d+\b/gi, 'ID');
    if (strip(a.q) !== strip(b.q) || JSON.stringify(a.answer) !== JSON.stringify(b.answer)) err(w, 'generátor nie je deterministický pri rovnakom semienku (používa niečo iné ako Math.random?)');
  } catch (e) { err(w, `generátor so semienkom spadol: ${e.message}`); }
}

const levelIds = new Set(LEVELS.map((l) => l.id));
const SS_TOPICS = ['cisla', 'vyrazy', 'rovnice', 'nerovnice', 'sustavy', 'funkcie', 'planimetria', 'stereometria',
  'analyticka', 'goniometria', 'postupnosti', 'financna', 'kombinatorika', 'statistika', 'analyza', 'prakticke', 'maturita'];
const seen = new Set();
for (const L of LESSONS) {
  const w = `lekcia ${L.id}`;
  if (seen.has(L.id)) err(w, 'duplicitné id');
  seen.add(L.id);
  if (!levelIds.has(L.level)) err(w, `neznáma úroveň ${L.level}`);
  for (const k of ['title', 'summary']) if (!L[k]) err(w, `chýba ${k}`);
  // stredná škola: témy pre maturitné opakovanie (náhodný výber úloh podľa tém)
  if (/^s\d$/.test(L.level)) {
    if (!Array.isArray(L.topics) || !L.topics.length) err(w, 'chýba pole topics');
    else L.topics.forEach((t) => { if (!SS_TOPICS.includes(t)) err(w, `neznáma téma ${t}`); });
  }
  if (!Array.isArray(L.theory) || !L.theory.length) err(w, 'chýba teória');
  (L.theory || []).forEach((t, i) => {
    if (typeof t === 'string') return checkText(`${w} teória[${i}]`, t);
    const def = FIGURES.get(t.fig);
    if (!def) return err(w, `neznámy obrázok ${t.fig}`);
    if (t.caption) checkText(`${w} popis obrázka ${t.fig}`, t.caption);
    try {
      if (def.controls) {
        const vals = {};
        def.controls.forEach((c) => { vals[c.id] = c.value; });
        for (const c of def.controls) {
          for (const v of [c.min, c.max, c.value]) {
            const r = def.draw(Object.assign({}, vals, { [c.id]: v }));
            if (!/<svg/.test(r.svg) || /NaN|undefined/.test(r.svg + r.readout)) err(w, `obrázok ${t.fig} (${c.id}=${v}) obsahuje NaN/undefined`);
          }
        }
      } else {
        const s = def.draw();
        if (!/<svg/.test(s) || /NaN|undefined/.test(s)) err(w, `obrázok ${t.fig} obsahuje NaN/undefined alebo chýba <svg>`);
      }
    } catch (e) { err(w, `obrázok ${t.fig} spadol: ${e.message}`); }
  });
  if (!Array.isArray(L.examples) || !L.examples.length) err(w, 'chýbajú príklady');
  (L.examples || []).forEach((ex, i) => {
    checkText(`${w} príklad ${i + 1}`, ex.task);
    if (!Array.isArray(ex.steps) || !ex.steps.length) err(w, `príklad ${i + 1} nemá postup`);
    (ex.steps || []).forEach((s, j) => checkText(`${w} príklad ${i + 1} krok ${j + 1}`, s));
  });

  if (!EXERCISES.has(L.id)) { err(w, 'chýba generátor úloh'); continue; }
  checkGenerator(L, 'sk', w);
}

// Témy: každá lekcia práve v jednej téme, žiadne neexistujúce id.
if (global.THEMES) {
  const owner = new Map();
  for (const th of THEMES) {
    for (const id of th.lessons) {
      if (!seen.has(id)) err(`téma ${th.id}`, `neexistujúca lekcia ${id}`);
      if (owner.has(id)) err(`téma ${th.id}`, `lekcia ${id} je už v téme ${owner.get(id)}`);
      owner.set(id, th.id);
    }
  }
  for (const L of LESSONS) if (!owner.has(L.id)) err(`lekcia ${L.id}`, 'nie je zaradená do žiadnej témy (js/temy.js)');
} else {
  warnings.push('chýba js/temy.js');
}

// Preklady obsahu (js/content-i18n/<jazyk>/*.js): rovnaká štruktúra ako zdroj (bloky teórie, obrázky s rovnakým fig
// na rovnakých miestach, počet príkladov a krokov), parita $, žiadna slovenčina vo výstupe a generátory v preklade
// opäť 400 behov s kontrolou odpovede. Chýbajúce preklady textov (T`…`, T.s, popisy v SVG) sú chyby.
// node tools/validate.js --missing en  vypíše chýbajúce kľúče ako kostru slovníka.
const CI = global.CONTENT_I18N;
if (CI) console.log('Preklady obsahu: ' + (CI.languages().map((l) => `${l} (${Object.keys(CI.pack(l).lessons).length} lekcií)`).join(', ') || 'žiadne'));
const missingDump = new Map(); // lekcia → Set kľúčov
if (CI) {
  const lessonIds = new Set(LESSONS.map((l) => l.id));
  for (const lang of CI.languages()) {
    const pack = CI.pack(lang);
    // angličtina nesmie obsahovať slovenské písmená s diakritikou (okrem é, ó – mená ako Lévy, Bézout), iné jazyky aspoň mäkčene
    const LEAK = lang === 'en' ? /[áäčďíĺľňôŕšťúýž]/i : /[čďĺľňŕšťž]/i;
    const leak = (where, s) => {
      const m = String(s).replace(/<[^>]*>/g, ' ').match(LEAK);
      if (m) err(where, `slovenský text v preklade („${m[0]}“): ${String(s).replace(/<svg[\s\S]*?<\/svg>/g, '[svg]').slice(0, 120)}`);
    };
    const txt = (where, s) => { checkText(where, s); leak(where, s); };
    for (const [id, t] of Object.entries(pack.lessons)) {
      const w = `preklad ${lang} ${id}`;
      if (!lessonIds.has(id)) { err(w, 'neexistujúca lekcia'); continue; }
      const L = LESSONS.find((l) => l.id === id);
      for (const k of ['title', 'summary']) { if (!t[k]) err(w, `chýba ${k}`); else txt(`${w} ${k}`, t[k]); }
      if (!Array.isArray(t.theory) || t.theory.length !== L.theory.length) {
        err(w, `teória má ${(t.theory || []).length} blokov, zdroj ${L.theory.length}`);
      } else {
        t.theory.forEach((x, i) => {
          const s = L.theory[i];
          if (typeof s === 'string') {
            if (typeof x !== 'string') err(w, `teória[${i}] má byť text`); else txt(`${w} teória[${i}]`, x);
          } else if (!x || typeof x !== 'object' || x.fig !== s.fig) {
            err(w, `teória[${i}] má byť obrázok ${s.fig}`);
          } else if (!!x.caption !== !!s.caption) {
            err(w, `obrázok ${s.fig}: popis ${s.caption ? 'chýba' : 'je navyše'}`);
          } else if (x.caption) txt(`${w} popis obrázka ${s.fig}`, x.caption);
        });
      }
      if (!Array.isArray(t.examples) || t.examples.length !== L.examples.length) {
        err(w, `príkladov je ${(t.examples || []).length}, zdroj ${L.examples.length}`);
      } else {
        t.examples.forEach((ex, i) => {
          const src = L.examples[i];
          txt(`${w} príklad ${i + 1}`, ex.task);
          if (!Array.isArray(ex.steps) || ex.steps.length !== src.steps.length) err(w, `príklad ${i + 1} má ${(ex.steps || []).length} krokov, zdroj ${src.steps.length}`);
          else ex.steps.forEach((s, j) => txt(`${w} príklad ${i + 1} krok ${j + 1}`, s));
        });
      }
      // --no-strings: kontrola len statického obsahu (texty generátorov a obrázkov sa prekladajú zvlášť)
      if (noStrings) continue;
      const m0 = CI.misses.length;
      // obrázky v preklade: popisy v SVG a dynamické texty (readout) pri krajných hodnotách posuvníkov
      L.theory.filter((x) => typeof x !== 'string').forEach((x) => {
        const def = FIGURES.get(x.fig);
        if (!def) return;
        CI.run(lang, null, () => {
          const outs = [];
          if (def.controls) {
            const vals = {};
            def.controls.forEach((c) => { vals[c.id] = c.value; outs.push(CI.text(c.label)); });
            for (const c of def.controls) {
              for (const v of [c.min, c.max, c.value]) {
                const r = def.draw(Object.assign({}, vals, { [c.id]: v }));
                outs.push(CI.markup(r.svg), r.readout);
              }
            }
          } else outs.push(CI.markup(def.draw()));
          outs.forEach((o) => leak(`${w} obrázok ${x.fig}`, o));
        });
      });
      if (EXERCISES.has(id)) {
        checkGenerator(L, lang, w, (ex, gw) => {
          for (const k of ['q', 'solution', 'hint', 'placeholder', 'show']) if (ex[k] !== undefined) leak(`${gw} ${k}`, ex[k]);
          if (ex.type === 'choice') ex.options.forEach((o) => leak(`${gw} možnosť`, o));
          if (ex.lang !== lang) err(gw, `generátor nebeží v jazyku ${lang}`);
        });
      }
      const miss = CI.misses.slice(m0);
      if (miss.length) {
        if (lang === missingFor) {
          if (!missingDump.has(id)) missingDump.set(id, new Set());
          miss.forEach((m) => missingDump.get(id).add(m.key));
        } else {
          err(w, `${miss.length} textov bez prekladu, napr.: ${miss.slice(0, 3).map((m) => `„${m.key.slice(0, 70)}“`).join(', ')} (vypíš: --missing ${lang})`);
        }
      }
    }
    // preklad nesmie odkazovať na dieru, ktorú kľúč nemá
    const holes = (s) => [...String(s).matchAll(/\{@(\d+)\}/g)].map((m) => +m[1]);
    const checkDict = (where, dict) => Object.entries(dict).forEach(([k, v]) => {
      if (typeof v === 'function') return;
      if (typeof v !== 'string') return err(where, `preklad „${k.slice(0, 60)}“ nie je text ani funkcia`);
      const n = holes(k).length ? Math.max(...holes(k)) + 1 : 0;
      if (holes(v).some((h) => h >= n)) err(where, `preklad „${v.slice(0, 60)}“ používa dieru, ktorú kľúč nemá`);
    });
    checkDict(`preklad ${lang} strings`, pack.strings);
    Object.entries(pack.lessons).forEach(([id, t]) => checkDict(`preklad ${lang} ${id} strings`, t.strings || {}));
  }
}
if (missingFor) {
  if (!missingDump.size) console.log(`// ${missingFor}: všetky texty majú preklad`);
  for (const [id, keys] of missingDump) {
    console.log(`  // ${id}`);
    for (const k of keys) console.log(`  ${JSON.stringify(k)}: '',`);
  }
}

// Preklady rozhrania: každý jazyk má všetky kľúče zo slovenčiny, rovnaké {premenné},
// a (okrem slovenčiny) preklad všetkých skupín, úrovní a tém.
if (global.I18N) {
  const src = I18N.dict('sk');
  const vars = (s) => (String(s).match(/\{\w+\}/g) || []).sort().join(',');
  const textOf = (v) => (typeof v === 'object' ? Object.values(v).join(' ') : v);
  for (const code of I18N.languages()) {
    const d = I18N.dict(code), w = `jazyk ${code}`;
    for (const k of ['_flag', '_name', '_htmlLang']) if (!d[k]) err(w, `chýba ${k}`);
    for (const [k, v] of Object.entries(src)) {
      if (k.startsWith('_')) continue;
      if (d[k] === undefined) { err(w, `chýba kľúč ${k}`); continue; }
      if (typeof v === 'object') {
        if (typeof d[k] !== 'object' || d[k].other === undefined) err(w, `kľúč ${k} musí mať tvary množného čísla s „other“`);
        else Object.values(d[k]).forEach((f) => { if (!/\{n\}/.test(f)) err(w, `tvar ${k} nemá {n}`); });
      } else if (vars(textOf(d[k])) !== vars(v)) err(w, `kľúč ${k}: iné premenné (${vars(textOf(d[k]))} ≠ ${vars(v)})`);
    }
    if (code === 'sk') continue;
    for (const g of GROUPS) if (!(d.groups && d.groups[g.id])) err(w, `chýba preklad skupiny ${g.id}`);
    for (const lv of LEVELS) if (!(d.levels && Array.isArray(d.levels[lv.id]) && d.levels[lv.id].length === 2)) err(w, `chýba preklad úrovne ${lv.id} [názov, opis]`);
    for (const th of (global.THEMES || [])) if (!(d.topics && Array.isArray(d.topics[th.id]) && d.topics[th.id].length === 2)) err(w, `chýba preklad témy ${th.id} [názov, opis]`);
  }
}

const perLevel = LEVELS.map((lv) => `${lv.id}: ${LESSONS.filter((l) => l.level === lv.id).length}`).join(', ');
console.log(`Lekcie: ${LESSONS.length} (${perLevel})`);
console.log(`Typické chyby: ${stats.withMistakes.size} lekcií · kroky riešenia: ${stats.withSteps.size} lekcií`);
warnings.forEach((w) => console.log('UPOZORNENIE ' + w));
if (errors.length) {
  errors.forEach((e) => console.log('CHYBA ' + e));
  console.log(`\n${errors.length} chýb.`);
  process.exit(1);
}
console.log('Všetko v poriadku.');
