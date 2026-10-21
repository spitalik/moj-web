/* Kolízie spoločného slovníka: node tools/i18n_collisions.js <jazyk> [--all]
   Generátory dosadzujú do viet slovenské tvary slov (diery). Slovník jazyka je spoločný, takže jedno slovo
   (napr. „pravý“, „rok“, „nahor“) má jeden preklad, hoci ho rôzne lekcie používajú v inom význame alebo páde.
   Nástroj spustí generátory všetkých lekcií v pomocnom jazyku, zistí, ktoré slovo sa dosadzuje do ktorej vety
   v ktorej lekcii, a pre slová použité vo viacerých lekciách vypíše preložené vety s dosadeným prekladom slova.
   Výstup: .i18n/kolizie/<jazyk>.json – podklad na kontrolu. Opravy sa zapisujú ako preklady len pre lekciu do
   .i18n/out/<jazyk>/kolizie/K01.json v tvare { "lessonStrings": { "<id lekcie>": { "<slovenský kľúč>": "preklad" } } }
   a zostavia sa nástrojom tools/i18n_build.js. --all vypíše aj slová použité len v jednej lekcii. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const lang = process.argv[2];
const all = process.argv.includes('--all');
if (!lang || lang.startsWith('--')) { console.log('použitie: node tools/i18n_collisions.js <jazyk> [--all]'); process.exit(2); }
const root = path.join(__dirname, '..');
global.window = global;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const UI = ['js/app.js', 'js/store.js', 'js/keypad.js', 'js/scratchpad.js', 'js/tts.js', 'js/widget.js'];
const scripts = [...html.matchAll(/<script src="(js\/[^"]+)"/g)].map((m) => m[1])
  .filter((s) => !UI.includes(s) && !s.startsWith('js/features/') && !s.startsWith('js/content-i18n/'));
for (const rel of scripts) vm.runInThisContext(fs.readFileSync(path.join(root, rel), 'utf8'), { filename: rel });
// preklady cieľového jazyka
const dir = path.join(root, 'js', 'content-i18n', lang);
fs.readdirSync(dir).filter((f) => f.endsWith('.js')).sort()
  .forEach((f) => vm.runInThisContext(fs.readFileSync(path.join(dir, f), 'utf8'), { filename: f }));
const { LESSONS, EXERCISES, CONTENT_I18N: CI } = global;
const pack = CI.pack(lang);

// 1. kde sa ktoré slovo dosadzuje (pomocný jazyk bez prekladov → diery ostanú slovenské)
CI.add('xx', { lessons: Object.fromEntries(LESSONS.map((L) => [L.id, { title: L.title, summary: L.summary, theory: L.theory, examples: L.examples }])) });
CI.harvest.on = true;
for (const L of LESSONS) {
  if (!EXERCISES.has(L.id)) continue;
  for (let s = 1; s <= 400; s++) { try { EXERCISES.make(L.id, 'xx', s * 7919); } catch (e) { /* hlási validátor */ } }
}
CI.harvest.on = false;
const uses = new Map(); // slovo → lekcia → Map(šablóna → diera)
for (const u of CI.harvest.uses) {
  if (!u.lesson || u.value.length > 60 || /^&[a-z]+;$/.test(u.value)) continue;
  if (!uses.has(u.value)) uses.set(u.value, new Map());
  const byL = uses.get(u.value);
  if (!byL.has(u.lesson)) byL.set(u.lesson, new Map());
  byL.get(u.lesson).set(u.template, u.hole);
}

// 2. preložená veta s dosadeným prekladom slova (ostatné diery ako …) v kontexte lekcie
const tr = (key, lesson) => {
  const ls = lesson && pack.lessonStrings && pack.lessonStrings[lesson];
  if (ls && ls[key] !== undefined) return ls[key];
  const own = lesson && pack.lessons[lesson];
  if (own && own.strings && own.strings[key] !== undefined) return own.strings[key];
  return pack.strings[key];
};
const out = [];
for (const [value, byL] of uses) {
  if (!all && byL.size < 2) continue;
  const item = { key: value, translation: tr(value, null) ?? null, lessons: {} };
  for (const [lesson, templates] of byL) {
    const word = tr(value, lesson) ?? value;
    item.lessons[lesson] = [...templates].slice(0, 2).map(([tpl, hole]) => {
      const t = tr(tpl, lesson);
      const fill = (x) => String(x).replace(/\{@(\d+)\}/g, (m, i) => (+i === hole ? `«${word}»` : '…'));
      return { template: tpl, hole, sk: fill(tpl).replace(`«${word}»`, `«${value}»`), [lang]: typeof t === 'string' ? fill(t) : null };
    });
    if (word !== item.translation) item.lessons[lesson].override = word;
  }
  out.push(item);
}
out.sort((a, b) => Object.keys(b.lessons).length - Object.keys(a.lessons).length);
fs.mkdirSync(path.join(root, '.i18n', 'kolizie'), { recursive: true });
const file = path.join(root, '.i18n', 'kolizie', `${lang}.json`);
fs.writeFileSync(file, JSON.stringify(out, null, 1));
console.log(`${lang}: ${out.length} slov použitých vo viacerých lekciách → ${path.relative(root, file)}`);
