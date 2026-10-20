/* Snímka slovenských úloh súboru obsahu: node tools/i18n_snapshot.js <súbor> <výstup.json>
   (súbor = content, r2, s3, v1, …). Pre každú jeho lekciu vygeneruje úlohy pre semienka 1–300 a zapíše ich
   (zadanie, odpoveď, riešenie, nápovedy, kroky, chyby) do JSON. Pri označovaní textov na preklad (T`…`, T.s)
   sa slovenský výstup nesmie zmeniť: snímka pred úpravou a po nej musí byť zhodná (porovnaj napr. cez fc / diff). */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const [base, out] = process.argv.slice(2);
if (!base || !out) { console.log('použitie: node tools/i18n_snapshot.js <súbor> <výstup.json>'); process.exit(2); }
const root = path.join(__dirname, '..');
global.window = global;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const UI = ['js/app.js', 'js/store.js', 'js/keypad.js', 'js/scratchpad.js', 'js/tts.js', 'js/widget.js'];
const scripts = [...html.matchAll(/<script src="(js\/[^"]+)"/g)].map((m) => m[1])
  .filter((s) => !UI.includes(s) && !s.startsWith('js/features/') && !s.startsWith('js/content-i18n/'));
const owner = {};
for (const rel of scripts) {
  const before = new Set((global.LESSONS || []).map((l) => l.id));
  vm.runInThisContext(fs.readFileSync(path.join(root, rel), 'utf8'), { filename: rel });
  (global.LESSONS || []).filter((l) => !before.has(l.id)).forEach((l) => { owner[l.id] = path.basename(rel, '.js'); });
}
const { LESSONS, EXERCISES, FIGURES } = global;
const strip = (s) => (typeof s === 'string' ? s.replace(/\b([a-z]+)\d{3,}\b/gi, '$1ID') : s);
const snap = {};
// obrázok: statický, alebo interaktívny pri krajných a predvolených hodnotách posuvníkov
function drawFig(def) {
  if (!def.controls) return strip(def.draw());
  const vals = {};
  def.controls.forEach((c) => { vals[c.id] = c.value; });
  const outs = [def.controls.map((c) => c.label)];
  for (const c of def.controls) for (const v of [c.min, c.max, c.value]) outs.push(def.draw(Object.assign({}, vals, { [c.id]: v })));
  return strip(JSON.stringify(outs));
}
// figures: všetky obrázky použité v lekciách (spoločné obrázky z js/figures.js)
if (base === 'figures') {
  for (const L of LESSONS) {
    L.theory.filter((x) => typeof x !== 'string' && FIGURES.get(x.fig)).forEach((x) => {
      snap[x.fig] = drawFig(FIGURES.get(x.fig));
    });
  }
  fs.writeFileSync(out, JSON.stringify(snap, null, 1));
  console.log(`figures: ${Object.keys(snap).length} obrázkov, snímka v ${out}`);
  process.exit(0);
}
for (const L of LESSONS.filter((l) => owner[l.id] === base)) {
  const runs = [];
  if (EXERCISES.has(L.id)) {
    for (let s = 1; s <= 300; s++) {
      try {
        const ex = EXERCISES.make(L.id, 'sk', s * 7919);
        runs.push(JSON.parse(JSON.stringify(ex, (k, v) => strip(v))));
      } catch (e) { runs.push({ error: e.message }); }
    }
  }
  // obrázky lekcie (popisy v SVG)
  const figs = L.theory.filter((x) => typeof x !== 'string').map((x) => (FIGURES.get(x.fig) ? drawFig(FIGURES.get(x.fig)) : null));
  snap[L.id] = { runs, figs };
}
fs.writeFileSync(out, JSON.stringify(snap, null, 1));
console.log(`${base}: ${Object.keys(snap).length} lekcií, snímka v ${out}`);
