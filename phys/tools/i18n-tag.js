/* Pomocník pri preklade obsahu: označí slovenské texty v generátoroch súboru js/rocniky/<súbor>.js značkou T
   (pozri js/content-i18n.js). Použitie: node tools/i18n-tag.js js/rocniky/r2.js [--dry]
   --dry len vypíše, čo by označil. Heuristika – výsledok treba prejsť ručne:
   - preskakuje lesson(...) a fig(...) (teória sa prekladá celá, SVG cez slovník popisov),
   - preskakuje konštanty na najvyššej úrovni (polia slov, mená) – tie preloží hodnota diery alebo T.s(...),
   - neoznačí texty v porovnaní (=== 'x'), kľúče objektov, typ úlohy ani id generátora,
   - lokálnu premennú s menom T treba vopred premenovať, inak ju značka prekryje,
   - spájanie reťazcov cez + rozdelí vetu na viac kľúčov – radšej ich spoj do jedného template literalu,
   - logika, ktorá porovnáva preložiteľný text (napr. type === 'sss'), musí porovnávať nepreložené id.
   Potom: node tools/validate.js --missing en vypíše chýbajúce kľúče pre slovník. */
'use strict';
const fs = require('fs');
const file = process.argv[2];
const dry = process.argv.includes('--dry');
const src = fs.readFileSync(file, 'utf8');

// --- tokenizácia literálov ---
const lits = []; // { start, end, kind: "'"|'"'|'`', parts: [static…], depth }
let i = 0;
const stack = []; // pre ${ v template: počet { v kóde
let lastSig = ''; // posledný významný znak kódu (pre regex)
function isRegexStart() {
  return lastSig === '' || '(,=:[!&|?{};+-*%<>~^'.includes(lastSig) || /\b(return|typeof|case)$/.test(src.slice(Math.max(0, i - 8), i).trimEnd());
}
function readTemplate(start) {
  // i ukazuje za `
  const parts = [];
  let cur = '';
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { cur += src[i] + src[i + 1]; i += 2; continue; }
    if (c === '`') { i++; parts.push(cur); return parts; }
    if (c === '$' && src[i + 1] === '{') {
      parts.push(cur); cur = '';
      i += 2;
      readCode(true);
      continue;
    }
    cur += c; i++;
  }
  throw new Error('neukončený template');
}
function readCode(inHole) {
  let depth = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === '/' && src[i + 1] === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
    if (c === '/' && src[i + 1] === '*') { i = src.indexOf('*/', i + 2) + 2; continue; }
    if (c === "'" || c === '"') {
      const start = i; i++;
      let cur = '';
      while (src[i] !== c) { if (src[i] === '\\') { cur += src[i] + src[i + 1]; i += 2; } else { cur += src[i]; i++; } }
      i++;
      lits.push({ start, end: i, kind: c, parts: [cur] });
      lastSig = 'a';
      continue;
    }
    if (c === '`') {
      const start = i; i++;
      const rec = { start, kind: '`' };
      lits.push(rec);
      rec.parts = readTemplate(start);
      rec.end = i;
      lastSig = 'a';
      continue;
    }
    if (c === '/' && isRegexStart()) {
      i++;
      let inClass = false;
      while (i < src.length) {
        if (src[i] === '\\') { i += 2; continue; }
        if (src[i] === '[') inClass = true;
        else if (src[i] === ']') inClass = false;
        else if (src[i] === '/' && !inClass) break;
        i++;
      }
      i++;
      while (/[a-z]/.test(src[i])) i++;
      lastSig = 'a';
      continue;
    }
    if (inHole) {
      if (c === '{') depth++;
      if (c === '}') { if (depth === 0) { i++; lastSig = 'a'; return; } depth--; }
    }
    if (!/\s/.test(c)) lastSig = /[\w$)\].]/.test(c) ? 'a' : c;
    i++;
  }
}
readCode(false);

// --- oblasti lesson(...) a fig(...) sa preskakujú ---
function callRegions(name) {
  const out = [];
  const re = new RegExp(`\\n  ${name}\\(`, 'g');
  let m;
  while ((m = re.exec(src))) {
    // koniec: riadok "  });" po začiatku
    const end = src.indexOf('\n  });', m.index);
    out.push([m.index, end]);
  }
  return out;
}
const skipRegions = [...callRegions('lesson'), ...callRegions('fig')];
const inSkip = (pos) => skipRegions.some(([a, b]) => pos > a && pos < b);

// top-level príkaz "  const X = [..." bez => → konštanta, nevyhodnocuje sa v generátore
function inConstData(pos) {
  const lineStart = src.lastIndexOf('\n  const ', pos);
  const lastStmtEnd = Math.max(src.lastIndexOf('\n  gen(', pos), src.lastIndexOf('\n  });', pos), src.lastIndexOf('\n  }', pos));
  if (lineStart < 0 || lineStart < lastStmtEnd) return false;
  const seg = src.slice(lineStart, pos);
  return !/=>|function/.test(seg.replace(/^\n  const [^=]*=/, ''));
}

const SLOVAK = /[A-Za-zÀ-ž]{2,}/;
function hasText(rec) {
  const st = rec.parts.join(' X ');
  if (/<(svg|text|line|path|circle|rect|polygon|ellipse|g)\b/.test(st)) return false;
  if (rec.parts.length === 1 && /^[a-z]{1,2}$/.test(st)) return false;
  if (!/\s/.test(st) && /[\^_{}+=\\]/.test(st) && !/[À-ž]/.test(st)) return false;
  let t = st.replace(/[\w-]+="[^"]*"/g, ' ').replace(/\\{1,2}text\{[a-z]{1,3}\d?\}/g, ' ').replace(/\\\$/g, '').replace(/\$[^$]*\$/g, ' ').replace(/<[^>]*>/g, ' ').replace(/&\w+;/g, ' ').replace(/\\\\[a-zA-Z]+/g, ' ').replace(/\\[a-zA-Z]+/g, ' ');
  if (/^\s*([fc]-[\w-]+\s*)+$/.test(t)) return false;
  t = t.replace(/\bX\b/g, ' ').replace(/\b(cm|mm|km|kg)\b/g, ' ');
  return SLOVAK.test(t);
}

const edits = [];
for (const r of lits) {
  if (inSkip(r.start)) continue;
  if (!hasText(r)) continue;
  const before = src.slice(Math.max(0, r.start - 12), r.start);
  const after = src.slice(r.end, r.end + 6);
  if (/[\w)]\s*$/.test(before) && r.kind === '`' && /T\s*$/.test(before)) continue; // už označené
  if (/(===|!==|==|!=|case)\s*$/.test(before) || /^\s*(===|!==)/.test(after)) continue;
  if (/[{,]\s*$/.test(before) && /^\s*:/.test(after) && r.kind !== '`') continue; // kľúč objektu
  if (/Error\($/.test(before) || /T\.s\($/.test(before) || /gen\($/.test(before) || /type:\s*$/.test(before)) continue;
  if (r.parts.join('') === 'use strict') continue;
  if (inConstData(r.start)) continue;
  let text = src.slice(r.start, r.end);
  if (r.kind !== '`') {
    let body = text.slice(1, -1);
    body = body.replace(/`/g, '\\`').replace(/\$\{/g, '\\${').replace(/\\'/g, "'").replace(/\\"/g, '"');
    text = '`' + body + '`';
  }
  edits.push({ start: r.start, end: r.end, text: 'T' + text, line: src.slice(0, r.start).split('\n').length });
}
// vnorené literály: upravujeme od konca, vnútorné pred vonkajšími nevadí, lebo vnútorné sú v rozsahu vonkajších
// → aplikujeme len najvonkajšie a vnútorné spracujeme rekurzívne cez opakované spustenie
const outer = edits.filter((e) => !edits.some((o) => o !== e && o.start < e.start && o.end > e.end));
const inner = edits.filter((e) => !outer.includes(e));
let out = src;
// najprv vnútorné (od konca), potom vonkajšie s posunom – jednoduchšie: aplikovať všetky od konca podľa start, vnútorné majú väčší start
const all = [...edits].sort((a, b) => b.start - a.start);
for (const e of all) {
  // pri vonkajšom treba vziať aktuálny text (už s upravenými vnútornými)
  const isOuter = outer.includes(e);
  if (isOuter) {
    const shift = all.filter((x) => !outer.includes(x) && x.start > e.start && x.end < e.end)
      .reduce((s, x) => s + (x.text.length - (x.end - x.start)), 0);
    const cur = out.slice(e.start, e.end + shift);
    const src0 = src.slice(e.start, e.end);
    if (src0[0] === '`') out = out.slice(0, e.start) + 'T' + cur + out.slice(e.end + shift);
    else out = out.slice(0, e.start) + e.text + out.slice(e.end + shift);
  } else {
    out = out.slice(0, e.start) + (src[e.start] === '`' ? 'T' + out.slice(e.start, e.end) : e.text) + out.slice(e.end);
  }
}
console.log(`${edits.length} literálov (${outer.length} vonkajších, ${inner.length} vnorených)`);
if (dry) edits.forEach((e) => console.log(e.line + ': ' + e.text.slice(0, 110).replace(/\n/g, ' ')));
else fs.writeFileSync(file, out);
