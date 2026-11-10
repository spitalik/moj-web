/* Index lekcií pre lenivé načítanie ročníkov: node tools/index_build.js [--check]
   Pri štarte aplikácie sa nenačítavajú súbory js/rocniky/*.js ani preklady ich teórie (balíky lekcie-*).
   Stačí malý index:
     js/index-lekcii.js                – LESSON_INDEX: lekcie po súboroch (id, úroveň, poradie, téma, názov, opis),
                                         skupiny balíkov prekladu (lekcie-r1r3 → r1, r2, r3) a lekcie s generátorom
     js/content-i18n/<jazyk>/nazvy.js  – preložené názvy a opisy lekcií (z balíkov lekcie-*)
   Texty generátorov (balíky generatory-*) sa načítajú hneď ako doteraz – slovník je spoločný.
   Plný súbor ročníka a balík lekcie-* jeho skupiny načíta js/nacitanie.js až pri otvorení lekcie alebo precvičovania.
   Zapíše aj zoznam balíkov js/content-i18n/files.js (pridá nové súbory, poradie existujúcich zachová).
   Spúšťa sa po každej zmene lekcií (id, názov, opis, poradie, téma) alebo prekladov teórie; validate.js kontroluje,
   či je index aktuálny. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
// poradie súborov = pôvodné poradie načítania (určuje poradie lekcií s rovnakým order)
const FILES = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 's1', 's2', 's3', 's4',
  'v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9', 'v10', 'v11', 'v12'];
// balíky prekladu teórie podľa skupín ročníkov
const PACKS = {
  'lekcie-r1r3': ['r1', 'r2', 'r3'], 'lekcie-r4r6': ['r4', 'r5', 'r6'], 'lekcie-r7r9': ['r7', 'r8', 'r9'],
  'lekcie-s1s4': ['s1', 's2', 's3', 's4'], 'lekcie-v1v4': ['v1', 'v2', 'v3', 'v4'],
  'lekcie-v5v8': ['v5', 'v6', 'v7', 'v8'], 'lekcie-v9v12': ['v9', 'v10', 'v11', 'v12']
};
const BASE = ['js/content-i18n.js', 'js/content.js', 'js/exercises.js', 'js/figures.js'];
const CI_DIR = path.join(root, 'js', 'content-i18n');
const langDirs = () => fs.readdirSync(CI_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();

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
      const e = { id: l.id, level: l.level, order: l.order, theme: l.theme, title: l.title, summary: l.summary };
      if (Array.isArray(l.topics)) e.topics = l.topics;
      if (Array.isArray(l.prereq)) e.prereq = l.prereq;
      lessons.push(e);
    });
  }
  const ex = lessons.filter((l) => vm.runInContext(`EXERCISES.has(${JSON.stringify(l.id)})`, ctx)).map((l) => l.id);
  out['js/index-lekcii.js'] = '/* Index lekcií js/rocniky/*.js pre lenivé načítanie (js/nacitanie.js).\n'
    + '   Vygenerované nástrojom tools/index_build.js – nemeniť ručne. */\n'
    + `window.LESSON_INDEX = {\n  files: ${JSON.stringify(files)},\n  packs: ${JSON.stringify(PACKS)},\n  ex: ${JSON.stringify(ex)},\n  lessons: [\n`
    + lessons.map((l) => '    ' + JSON.stringify(l)).join(',\n') + '\n  ]\n};\n';

  // 2) pre každý jazyk: preložené názvy a opisy lekcií z balíkov lekcie-*
  const order = lessons.map((l) => l.id);
  for (const lang of langDirs()) {
    const names = {};
    for (const p of Object.keys(PACKS)) {
      const rel = `js/content-i18n/${lang}/${p}.js`;
      if (!fs.existsSync(path.join(root, rel))) continue;
      const c = {};
      c.window = c;
      c.CONTENT_I18N = { add: (lg, pack) => { c.pack = pack; } };
      vm.createContext(c);
      vm.runInContext(fs.readFileSync(path.join(root, rel), 'utf8'), c, { filename: rel });
      Object.entries((c.pack && c.pack.lessons) || {}).forEach(([id, l]) => {
        if (l.title) names[id] = { title: l.title, summary: l.summary, stub: 1 };
      });
    }
    const sorted = {};
    order.forEach((id) => { if (names[id]) sorted[id] = names[id]; });
    out[`js/content-i18n/${lang}/nazvy.js`] = `/* ${lang}: názvy a opisy lekcií ročníkov (načítajú sa hneď, teória v balíkoch lekcie-* až podľa potreby).\n`
      + `   Vygenerované nástrojom tools/index_build.js z balíkov js/content-i18n/${lang}/lekcie-*.js – nemeniť ručne. */\n`
      + `CONTENT_I18N.add('${lang}', { lessons: {\n${Object.entries(sorted).map(([id, x]) => `  ${JSON.stringify(id)}: ${JSON.stringify(x)}`).join(',\n')}\n} });\n`;
  }

  // 3) zoznam balíkov (poradie existujúcich zachová, nové pridá na koniec)
  const prev = (() => {
    const c = {};
    c.window = c;
    vm.createContext(c);
    const f = path.join(CI_DIR, 'files.js');
    if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), c);
    return c.CONTENT_I18N_FILES || {};
  })();
  const list = {};
  for (const lang of langDirs()) {
    const have = new Set(fs.readdirSync(path.join(CI_DIR, lang)).filter((x) => x.endsWith('.js')).map((x) => x.slice(0, -3)));
    if (out[`js/content-i18n/${lang}/nazvy.js`]) have.add('nazvy');
    const keep = (prev[lang] || []).filter((x) => have.has(x));
    list[lang] = [...keep, ...[...have].filter((x) => !keep.includes(x)).sort()];
  }
  out['js/content-i18n/files.js'] = '/* Balíky prekladov obsahu podľa jazyka. Obnovuje tools/index_build.js (nové súbory v priečinku jazyka pridá). */\n'
    + `window.CONTENT_I18N_FILES = ${JSON.stringify(list)};\n`;
  return out;
}

// vráti zoznam zastaraných súborov (prázdny = index sedí); CRLF po checkoute na Windows nevadí
function check() {
  return Object.entries(build()).filter(([rel, s]) => {
    const f = path.join(root, rel);
    return !fs.existsSync(f) || fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n') !== s;
  }).map(([rel]) => rel);
}

function write() {
  const out = build();
  Object.entries(out).forEach(([rel, s]) => fs.writeFileSync(path.join(root, rel), s));
  console.log(`index-lekcii.js: ${(out['js/index-lekcii.js'].length / 1024).toFixed(0)} kB; nazvy.js: ${Object.keys(out).filter((k) => k.endsWith('nazvy.js')).length} jazykov`);
}

module.exports = { build, check, write, FILES, PACKS };
if (require.main === module) {
  if (process.argv.includes('--check')) {
    const bad = check();
    console.log(bad.length ? 'Zastarané: ' + bad.join(', ') + ' → spusti node tools/index_build.js' : 'Index lekcií je aktuálny.');
    process.exit(bad.length ? 1 : 0);
  } else write();
}
