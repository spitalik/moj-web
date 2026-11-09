/* Index lekcií pre lenivé načítanie ročníkov: node tools/index_build.js [--check]
   Pri štarte aplikácie sa nenačítavajú súbory js/rocniky/*.js ani ich preklady (teória, príklady, generátory).
   Stačí malý index:
     js/index-lekcii.js                  – LESSON_INDEX: lekcie po súboroch (id, úroveň, poradie, názov, opis, témy),
                                           závislosti súborov a zoznam lekcií s generátorom úloh
     js/content-i18n/<jazyk>/zaklad.js   – preložené názvy a opisy lekcií a celý slovník textov úloh (strings)
                                           zo všetkých balíkov ročníkov; slovník je spoločný (text úlohy z r5 môže
                                           mať preklad v balíku r3), preto sa načíta hneď
   Plný súbor ročníka a jeho balík prekladu načíta js/nacitanie.js až pri otvorení lekcie alebo precvičovania.
   Zapíše aj zoznam balíkov js/content-i18n/files.js.
   Spúšťa sa po každej zmene lekcií alebo prekladov (tools/i18n_build.js ho volá sám); validate.js kontroluje,
   či je index aktuálny (--check). */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
// poradie súborov = pôvodné poradie načítania (určuje poradie lekcií s rovnakým order)
const FILES = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 's1', 's2', 's3', 's4', 'v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7'];
// generátory opakovania na maturitu v s4 berú úlohy z lekcií s1–s3
const DEPS = { s4: ['s1', 's2', 's3'] };
const BASE = ['js/content-i18n.js', 'js/content.js', 'js/exercises.js', 'js/figures.js'];
const CI_DIR = path.join(root, 'js', 'content-i18n');
const isLazy = (pack) => FILES.some((f) => pack === f || pack.startsWith(f + '-'));

// zápis hodnoty ako JS (funkcie v ručne písaných balíkoch sa zachovajú zdrojovým textom)
function lit(v, ind = '') {
  if (typeof v === 'function') return v.toString();
  if (Array.isArray(v)) return `[${v.map((x) => lit(x, ind)).join(', ')}]`;
  if (v && typeof v === 'object') {
    const e = Object.entries(v);
    if (!e.length) return '{}';
    const i2 = ind + ' ';
    return `{\n${e.map(([k, x]) => `${i2}${JSON.stringify(k)}: ${lit(x, i2)}`).join(',\n')}\n${ind}}`;
  }
  return JSON.stringify(v);
}

function build() {
  const out = {};
  // 1) lekcie ročníkov (slovenský zdroj)
  const ctx = { console };
  ctx.window = ctx;
  vm.createContext(ctx);
  const run = (rel) => vm.runInContext(fs.readFileSync(path.join(root, rel), 'utf8'), ctx, { filename: rel });
  BASE.forEach(run);
  const files = {}, lessons = [];
  const seen = new Set(vm.runInContext('LESSONS.map((l) => l.id)', ctx));
  for (const f of FILES) {
    run(`js/rocniky/${f}.js`);
    const now = vm.runInContext('LESSONS', ctx).filter((l) => !seen.has(l.id));
    now.forEach((l) => seen.add(l.id));
    files[f] = now.map((l) => l.id);
    now.forEach((l) => {
      const e = { id: l.id, level: l.level, order: l.order, title: l.title, summary: l.summary };
      if (Array.isArray(l.topics)) e.topics = l.topics;
      if (Array.isArray(l.prereq)) e.prereq = l.prereq;
      lessons.push(e);
    });
  }
  const ex = lessons.filter((l) => vm.runInContext(`EXERCISES.has(${JSON.stringify(l.id)})`, ctx)).map((l) => l.id);
  out['js/index-lekcii.js'] = '/* Index lekcií js/rocniky/*.js pre lenivé načítanie (js/nacitanie.js).\n'
    + '   Vygenerované nástrojom tools/index_build.js – nemeniť ručne. */\n'
    + `window.LESSON_INDEX = {\n  files: ${JSON.stringify(files)},\n  deps: ${JSON.stringify(DEPS)},\n  ex: ${JSON.stringify(ex)},\n  lessons: [\n`
    + lessons.map((l) => '    ' + JSON.stringify(l)).join(',\n') + '\n  ]\n};\n';

  // 2) pre každý jazyk: názvy a opisy lekcií + spoločný slovník zo všetkých balíkov ročníkov
  const ids = new Set(lessons.map((l) => l.id));
  for (const lang of fs.readdirSync(CI_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort()) {
    const packs = fs.readdirSync(path.join(CI_DIR, lang)).filter((x) => x.endsWith('.js')).map((x) => x.slice(0, -3)).filter(isLazy).sort();
    const z = { decimal: undefined, strings: {}, lessonStrings: {}, lessons: {} };
    for (const p of packs) {
      const c = { };
      c.window = c;
      c.CONTENT_I18N = { add: (lg, pack) => { c.pack = pack; } };
      vm.createContext(c);
      const rel = `js/content-i18n/${lang}/${p}.js`;
      vm.runInContext(fs.readFileSync(path.join(root, rel), 'utf8'), c, { filename: rel });
      const pk = c.pack || {};
      if (pk.decimal && !z.decimal) z.decimal = pk.decimal;
      Object.assign(z.strings, pk.strings || {});
      Object.entries(pk.lessonStrings || {}).forEach(([id, d]) => { z.lessonStrings[id] = Object.assign(z.lessonStrings[id] || {}, d); });
      Object.entries(pk.lessons || {}).forEach(([id, l]) => {
        if (ids.has(id) && l.title) z.lessons[id] = { title: l.title, summary: l.summary, stub: 1 };
      });
    }
    if (!z.decimal) delete z.decimal;
    // poradie lekcií podľa indexu (stabilný výstup)
    const ordered = {};
    lessons.forEach((l) => { if (z.lessons[l.id]) ordered[l.id] = z.lessons[l.id]; });
    z.lessons = ordered;
    out[`js/content-i18n/${lang}/zaklad.js`] = `/* ${lang}: názvy a opisy lekcií ročníkov a spoločný slovník textov úloh (načíta sa hneď, plné balíky ročníkov až podľa potreby).\n`
      + '   Vygenerované nástrojom tools/index_build.js z balíkov js/content-i18n/' + lang + '/{r,s,v}*.js – nemeniť ručne. */\n'
      + `CONTENT_I18N.add('${lang}', ${lit(z)});\n`;
  }
  // zoznam balíkov podľa jazyka (index.html a CONTENT_I18N.load), vrátane práve vytvorených zaklad.js
  const list = {};
  for (const lang of fs.readdirSync(CI_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort()) {
    const names = new Set(fs.readdirSync(path.join(CI_DIR, lang)).filter((x) => x.endsWith('.js')).map((x) => x.slice(0, -3)));
    if (out[`js/content-i18n/${lang}/zaklad.js`]) names.add('zaklad');
    list[lang] = [...names].sort();
  }
  out['js/content-i18n/files.js'] = '/* Balíky prekladov obsahu podľa jazyka. Vygenerované nástrojom tools/index_build.js (volá ho tools/i18n_build.js). */\n'
    + `window.CONTENT_I18N_FILES = ${JSON.stringify(list)};\n`;
  return out;
}

// vráti zoznam zastaraných súborov (prázdny = index sedí)
function check() {
  return Object.entries(build()).filter(([rel, s]) => {
    const f = path.join(root, rel);
    // CRLF po checkoute na Windows (git autocrlf) nevadí
    return !fs.existsSync(f) || fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n') !== s;
  }).map(([rel]) => rel);
}

function write() {
  const out = build();
  Object.entries(out).forEach(([rel, s]) => fs.writeFileSync(path.join(root, rel), s));
  const idx = out['js/index-lekcii.js'].length;
  console.log(`index-lekcii.js: ${(idx / 1024).toFixed(0)} kB; zaklad.js: ${Object.keys(out).filter((k) => k.endsWith("zaklad.js")).length} jazykov`);
}

module.exports = { build, check, write, FILES, DEPS };
if (require.main === module) {
  if (process.argv.includes('--check')) {
    const bad = check();
    console.log(bad.length ? 'Zastarané: ' + bad.join(', ') + ' → spusti node tools/index_build.js' : 'Index lekcií je aktuálny.');
    process.exit(bad.length ? 1 : 0);
  } else write();
}
