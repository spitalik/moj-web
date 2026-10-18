/* Kontrola obsahu bez prehliadača: node tools/validate.js
   Načíta skripty v poradí z index.html (okrem app.js), skontroluje lekcie, obrázky a generátory úloh.
   Chýbajúci súbor ročníka je len upozornenie (súbory môžu vznikať postupne). Návratový kód 1 = chyby. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
global.window = global;

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="(js\/[^"]+)"/g)].map((m) => m[1]).filter((s) => s !== 'js/app.js');
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
  const RUNS = 400;
  for (let r = 0; r < RUNS; r++) {
    let ex;
    try { ex = EXERCISES.make(L.id); } catch (e) { err(w, `generátor spadol: ${e.message}`); break; }
    const gw = `${w} generátor`;
    const before = errors.length;
    checkText(`${gw} zadanie`, ex.q);
    checkText(`${gw} riešenie`, ex.solution);
    checkText(`${gw} nápoveda`, ex.hint);
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
    if (errors.length > before) break; // jedna chyba na generátor stačí
  }
}

const perLevel = LEVELS.map((lv) => `${lv.id}: ${LESSONS.filter((l) => l.level === lv.id).length}`).join(', ');
console.log(`Lekcie: ${LESSONS.length} (${perLevel})`);
warnings.forEach((w) => console.log('UPOZORNENIE ' + w));
if (errors.length) {
  errors.forEach((e) => console.log('CHYBA ' + e));
  console.log(`\n${errors.length} chýb.`);
  process.exit(1);
}
console.log('Všetko v poriadku.');
