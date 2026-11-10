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
const UI_SCRIPTS = ['js/app.js', 'js/store.js', 'js/keypad.js', 'js/scratchpad.js', 'js/tts.js', 'js/widget.js', 'js/nacitanie.js'];
const scripts = [...html.matchAll(/<script src="(js\/[^"]+)"/g)].map((m) => m[1]).filter((s) => !UI_SCRIPTS.includes(s) && !s.startsWith('js/features/'));
// ročníky sa v prehliadači načítajú lenivo (js/nacitanie.js); validátor ich načíta všetky na pôvodnom mieste (za js/simulacie.js)
const INDEX_TOOL = require('./index_build.js');
scripts.splice(scripts.indexOf('js/simulacie.js') + 1, 0, ...INDEX_TOOL.FILES.map((f) => `js/rocniky/${f}.js`));
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
  // jednotka odpovede (ex.unit): dá sa rozparsovať; správna odpoveď zapísaná s jednotkou aj prevedená do inej
  // zameniteľnej jednotky prejde kontrolou; číslo s jednotkou iného rozmeru neprejde; hodnota typickej chyby
  // zapísaná s jednotkou nie je správna
  if (ex.unit !== undefined) {
    const U = typeof ex.unit === 'string' && global.JEDNOTKY ? JEDNOTKY.parse(ex.unit) : null;
    if (!U || !U.ok) err(gw, `jednotka „${ex.unit}“ sa nedá rozparsovať`);
    else if (ex.type === 'num' && Number.isFinite(ex.answer)) {
      const own = `${ex.answer} ${ex.unit}`;
      if (EXERCISES.check(ex, own) !== true) err(gw, `správna odpoveď s jednotkou „${own}“ neprejde kontrolou`);
      const alt = (EXERCISES.unitInfo(ex) || { alts: [] }).alts[0];
      if (alt) {
        const conv = `${JEDNOTKY.convert(ex.answer, U, alt, !!ex.unitDelta)} ${alt}`;
        if (EXERCISES.check(ex, conv) !== true) err(gw, `správna odpoveď prevedená do inej jednotky „${conv}“ neprejde kontrolou`);
      }
      const wrong = JEDNOTKY.sameDim(U, 's') ? 'm' : 's';
      if (EXERCISES.check(ex, `${ex.answer} ${wrong}`) !== false) err(gw, `odpoveď s jednotkou iného rozmeru („${ex.answer} ${wrong}“) prejde kontrolou`);
      (ex.mistakes || []).forEach((m, i) => {
        if (typeof m.value === 'number' && EXERCISES.check(ex, `${m.value} ${ex.unit}`) === true) err(gw, `typická chyba ${i + 1} zapísaná s jednotkou je správna odpoveď`);
      });
    }
    if (stats.withUnit) stats.withUnit.add(ex.lesson);
  }
}

// Typické chyby a kroky riešenia (nepovinné polia generátora).
const stats = { withMistakes: new Set(), withSteps: new Set(), withUnit: new Set() };
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
      // vysvetlenia nesprávnych možností sú typické chyby úloh s výberom
      if (ex.choiceHints && Object.keys(ex.choiceHints).length) stats.withMistakes.add(ex.lesson);
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
const seen = new Set();
for (const L of LESSONS) {
  const w = `lekcia ${L.id}`;
  if (seen.has(L.id)) err(w, 'duplicitné id');
  seen.add(L.id);
  if (!levelIds.has(L.level)) err(w, `neznáma úroveň ${L.level}`);
  for (const k of ['title', 'summary']) if (!L[k]) err(w, `chýba ${k}`);
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

// Symboly (js/symboly.js): existujúca lekcia, texty a príklady s platnou matematikou.
if (global.SYMBOLS) {
  for (const g of SYMBOLS) {
    for (const it of g.items) {
      const w = `symbol ${g.id} „${it.name}“`;
      if (!seen.has(it.lesson)) err(w, `neexistujúca lekcia ${it.lesson}`);
      for (const k of ['name', 'note']) if (!it[k]) err(w, `chýba ${k}`); else checkText(`${w} ${k}`, it[k]);
      checkText(`${w} príklad`, `$${it.ex}$`);
      checkText(`${w} symbol`, `$${it.tex}$`);
    }
  }
}

// Projekty z praxe (js/projekty.js): 200 semienok na projekt – 3–6 krokov, konečné odpovede, ktoré prejdú kontrolou,
// párne $, existujúce lekcie, rovnaké semienko = rovnaké zadanie, typické chyby nie sú správnou odpoveďou.
// V jazykoch, ktoré majú balík projekty.js, aj chýbajúce preklady textov (T`…`, T.s) a slovenčina vo výstupe.
if (global.PROJECTS && global.PROJECTS_API) {
  const PCI = global.CONTENT_I18N;
  const RUNS = 200;
  const pids = new Set();
  const langs = ['sk', ...(PCI ? PCI.languages().filter((l) => fs.existsSync(path.join(ciDir, l, 'projekty.js'))) : [])];
  for (const p of PROJECTS) {
    const w = `projekt ${p.id}`;
    if (pids.has(p.id)) err(w, 'duplicitné id');
    pids.add(p.id);
    if (!['zs', 'ss', 'vs'].includes(p.level)) err(w, `neznáma úroveň ${p.level}`);
    if (!Array.isArray(p.grades) || p.grades.length !== 2 || !(p.grades[0] <= p.grades[1])) err(w, 'grades musí byť [od, do]');
    if (!p.title || !p.icon) err(w, 'chýba title alebo icon');
    if (!Array.isArray(p.lessons) || p.lessons.length < 1 || p.lessons.length > 3) err(w, 'lessons musí mať 1–3 lekcie');
    (p.lessons || []).forEach((id) => { if (!seen.has(id)) err(w, `neexistujúca lekcia ${id}`); });
    for (const lang of langs) {
      const lw = `${w} (${lang})`;
      const m0 = PCI ? PCI.misses.length : 0;
      const LEAK = lang === 'en' ? /[áäčďíĺľňôŕšťúýž]/i : /[čďĺľňŕšťž]/i;
      const leak = (where, s) => {
        if (lang === 'sk') return;
        const m = String(s).replace(/<[^>]*>/g, ' ').match(LEAK);
        if (m) err(where, `slovenský text v preklade („${m[0]}“): ${String(s).slice(0, 120)}`);
      };
      for (let r = 1; r <= RUNS; r++) {
        const before = errors.length;
        let pr;
        try { pr = PROJECTS_API.make(p.id, lang, r * 7919); } catch (e) { err(lw, `generovanie spadlo (semienko ${r * 7919}): ${e.message}`); break; }
        const gw = `${lw} semienko ${r * 7919}`;
        ['title', 'story', 'wrap'].forEach((k) => { checkText(`${gw} ${k}`, pr[k]); leak(`${gw} ${k}`, pr[k]); });
        if (!Array.isArray(pr.steps) || pr.steps.length < 3 || pr.steps.length > 6) { err(gw, `projekt má mať 3–6 krokov, má ${(pr.steps || []).length}`); break; }
        pr.steps.forEach((s, i) => {
          const sw = `${gw} krok ${i + 1}`;
          for (const k of ['q', 'hint', 'solution']) {
            if (!s[k]) err(sw, `chýba ${k}`);
            else { checkText(`${sw} ${k}`, s[k]); leak(`${sw} ${k}`, s[k]); }
          }
          if (s.show !== undefined) checkText(`${sw} show`, String(s.show));
          if (s.type === 'choice') (s.options || []).forEach((o) => leak(`${sw} možnosť`, o));
          if (s.type === 'num' && s.answer < 0 && !s.signed) err(sw, 'záporná odpoveď bez signed: true');
          if (s.lang !== lang) err(sw, `krok nebeží v jazyku ${lang}`);
          checkAnswer(s, sw);
          (s.mistakes || []).forEach((m, j) => {
            const c = EXERCISES.canonical(Object.assign({}, s, { answer: m.value }));
            if (EXERCISES.check(s, c) === true) err(sw, `typická chyba ${j + 1} („${c}“) je zároveň správna odpoveď`);
            checkText(`${sw} chyba ${j + 1}`, m.msg); leak(`${sw} chyba ${j + 1}`, m.msg);
          });
        });
        if (errors.length > before) break; // jedna chyba na projekt a jazyk stačí
      }
      try {
        const a = PROJECTS_API.make(p.id, lang, 4242), b = PROJECTS_API.make(p.id, lang, 4242);
        if (JSON.stringify(a) !== JSON.stringify(b)) err(lw, 'zadanie nie je deterministické pri rovnakom semienku');
      } catch (e) { /* hlásené vyššie */ }
      const miss = PCI ? PCI.misses.slice(m0).filter((m) => m.lang === lang) : [];
      if (lang !== 'sk' && miss.length) {
        err(lw, `${new Set(miss.map((m) => m.key)).size} textov bez prekladu, napr.: ${miss.slice(0, 3).map((m) => `„${m.key.slice(0, 70)}“`).join(', ')}`);
      }
    }
  }
  console.log(`Projekty z praxe: ${PROJECTS.length} (jazyky: ${langs.join(', ')})`);
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

// Nadväznosti (js/nadvaznosti.js): existujúce id, predpoklad je v učive skôr, graf tém aj lekcií bez cyklov.
if (global.NADVAZNOSTI && global.THEMES) {
  const N = NADVAZNOSTI, w = 'nadväznosti';
  const ordLv = (lv) => LESSONS.filter((l) => l.level === lv).sort((a, b) => (a.order ?? 1000) - (b.order ?? 1000));
  const pos = new Map(LEVELS.flatMap((lv) => ordLv(lv.id)).map((l, i) => [l.id, i]));
  const thById = new Map(THEMES.map((th) => [th.id, th]));
  const span = (th) => { const p = th.lessons.map((id) => pos.get(id)).filter((x) => x !== undefined); return [Math.min(...p), Math.max(...p)]; };
  // cyklus v orientovanom grafe (uzol → predpoklady); vráti cestu cyklu alebo null
  const findCycle = (nodes, edges) => {
    const st = new Map(), stack = [];
    const dfs = (v) => {
      st.set(v, 1); stack.push(v);
      for (const u of edges(v)) {
        if (st.get(u) === 1) return [...stack.slice(stack.indexOf(u)), u];
        if (!st.get(u)) { const c = dfs(u); if (c) return c; }
      }
      st.set(v, 2); stack.pop();
      return null;
    };
    for (const v of nodes) if (!st.get(v)) { const c = dfs(v); if (c) return c; }
    return null;
  };
  const themes = N.themes || {}, lessons = N.lessons || {};
  for (const [tid, deps] of Object.entries(themes)) {
    if (!thById.has(tid)) { err(w, `neexistujúca téma ${tid}`); continue; }
    if (!Array.isArray(deps)) { err(w, `téma ${tid}: predpoklady nie sú pole`); continue; }
    if (new Set(deps).size !== deps.length) err(w, `téma ${tid}: opakovaný predpoklad`);
    for (const d of deps) {
      if (!thById.has(d)) err(w, `téma ${tid}: neexistujúca téma ${d}`);
      else if (d === tid) err(w, `téma ${tid} stavia sama na sebe`);
      // téma-predpoklad musí začínať skôr, než téma skončí
      else if (span(thById.get(d))[0] >= span(thById.get(tid))[1]) err(w, `téma ${tid}: predpoklad ${d} začína až po jej konci`);
    }
  }
  for (const th of THEMES) if (!themes[th.id]) warnings.push(`nadväznosti: téma ${th.id} nemá uvedené predpoklady`);
  const cT = findCycle(Object.keys(themes).filter((x) => thById.has(x)), (v) => (themes[v] || []).filter((x) => thById.has(x)));
  if (cT) err(w, `cyklus tém: ${cT.join(' → ')}`);
  const thOf = new Map(THEMES.flatMap((th) => th.lessons.map((id) => [id, th])));
  for (const [id, deps] of Object.entries(lessons)) {
    if (!pos.has(id)) { err(w, `neexistujúca lekcia ${id}`); continue; }
    if (!Array.isArray(deps)) { err(w, `lekcia ${id}: predpoklady nie sú pole`); continue; }
    if (new Set(deps).size !== deps.length) err(w, `lekcia ${id}: opakovaný predpoklad`);
    for (const d of deps) {
      if (!pos.has(d)) err(w, `lekcia ${id}: neexistujúci predpoklad ${d}`);
      else if (pos.get(d) >= pos.get(id)) err(w, `lekcia ${id}: predpoklad ${d} nie je v učive skôr`);
    }
  }
  // celý graf predpokladov tak, ako ho skladá APP.prereqs (L.prereq, inak predchádzajúca v téme + nadväznosti)
  const pre = (id) => {
    const L = LESSONS.find((l) => l.id === id);
    if (L && Array.isArray(L.prereq)) return L.prereq.filter((x) => pos.has(x));
    const th = thOf.get(id), out = [];
    if (th) {
      const tl = th.lessons.filter((x) => pos.has(x)).sort((a, b) => pos.get(a) - pos.get(b)), j = tl.indexOf(id);
      if (j > 0) out.push(tl[j - 1]);
    }
    return out.concat((lessons[id] || []).filter((x) => pos.has(x)));
  };
  const cL = findCycle([...pos.keys()], pre);
  if (cL) err(w, `cyklus predpokladov lekcií: ${cL.join(' → ')}`);
} else if (!global.NADVAZNOSTI) {
  warnings.push('chýba js/nadvaznosti.js');
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
    Object.entries(pack.lessonStrings || {}).forEach(([id, d]) => {
      if (!lessonIds.has(id)) err(`preklad ${lang} lessonStrings`, `neexistujúca lekcia ${id}`);
      checkDict(`preklad ${lang} ${id} lessonStrings`, d);
    });
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
    for (const g of GROUPS) if (!(d.groups && d.groups[g.id])) warnings.push(`${w}: chýba preklad skupiny ${g.id}`);
    for (const lv of LEVELS) if (!(d.levels && Array.isArray(d.levels[lv.id]) && d.levels[lv.id].length === 2)) warnings.push(`${w}: chýba preklad úrovne ${lv.id} [názov, opis]`);
    for (const th of (global.THEMES || [])) if (!(d.topics && Array.isArray(d.topics[th.id]) && d.topics[th.id].length === 2)) warnings.push(`${w}: chýba preklad témy ${th.id} [názov, opis]`);
  }
}

// index pre lenivé načítanie ročníkov (js/index-lekcii.js, js/content-i18n/<jazyk>/nazvy.js, files.js)
{
  const stale = INDEX_TOOL.check();
  if (stale.length) err('index lekcií', `zastarané ${stale.join(', ')} → spusti node tools/index_build.js`);
}

const perLevel = LEVELS.map((lv) => `${lv.id}: ${LESSONS.filter((l) => l.level === lv.id).length}`).join(', ');
console.log(`Lekcie: ${LESSONS.length} (${perLevel})`);
console.log(`Typické chyby: ${stats.withMistakes.size} lekcií · kroky riešenia: ${stats.withSteps.size} lekcií · odpovede s jednotkou: ${stats.withUnit.size} lekcií`);
warnings.forEach((w) => console.log('UPOZORNENIE ' + w));
if (errors.length) {
  errors.forEach((e) => console.log('CHYBA ' + e));
  console.log(`\n${errors.length} chýb.`);
  process.exit(1);
}
console.log('Všetko v poriadku.');
