/* Zostavenie prekladov obsahu: node tools/i18n_build.js [jazyk …]
   Z preložených častí .i18n/out/<jazyk>/<súbor>/L*.json (lekcie) a S*.json (slovník { kľúč: preklad })
   zapíše js/content-i18n/<jazyk>/<súbor>.js a obnoví zoznam js/content-i18n/files.js.
   Podklady na preklad (.i18n/src) vytvára tools/i18n_extract.js. Ručne písané balíky (napr. en/r1.js, en/s1.js)
   sa neprepíšu: preklady k nim sa zapíšu do <súbor>-doplnky.js. */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const OUT = path.join(root, '.i18n', 'out');
const CI_DIR = path.join(root, 'js', 'content-i18n');
// desatinný oddeľovač čísel z generátorov podľa jazyka
const DECIMAL = { en: '.', ja: '.', ko: '.', zh: '.' };
const NAMES = { en: 'English', es: 'Español', pt: 'Português', de: 'Deutsch', fr: 'Français', it: 'Italiano', ru: 'Русский', tr: 'Türkçe', ja: '日本語', ko: '한국어', zh: '中文' };

const readJson = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));
const dirs = (d) => (fs.existsSync(d) ? fs.readdirSync(d, { withFileTypes: true }).filter((x) => x.isDirectory()).map((x) => x.name) : []);

const langs = process.argv.slice(2).length ? process.argv.slice(2) : dirs(OUT);
for (const lang of langs) {
  for (const base of dirs(path.join(OUT, lang)).sort()) {
    const dir = path.join(OUT, lang, base);
    const pack = { decimal: DECIMAL[lang] || ',', lessons: {}, strings: {} };
    for (const f of fs.readdirSync(dir).filter((x) => /^[LS]\d+\.json$/.test(x)).sort()) {
      let part;
      try { part = readJson(path.join(dir, f)); } catch (e) { console.log(`CHYBA ${lang}/${base}/${f}: neplatný JSON (${e.message})`); continue; }
      Object.assign(pack.lessons, part.lessons || {});
      // jedno malé písmeno (napr. „a“) je aj popis v obrázkoch (strana a) – také kľúče do slovníka nepatria
      Object.entries(part.strings || {}).forEach(([k, v]) => { if (typeof v === 'string' && v.trim() && !/^[a-z]$/.test(k)) pack.strings[k] = v; });
    }
    if (!Object.keys(pack.lessons).length) delete pack.lessons;
    if (!Object.keys(pack.strings).length) delete pack.strings;
    if (!pack.lessons && !pack.strings) continue;
    const src = base === 'vzorce' ? 'js/vzorce.js' : base === 'content' ? 'js/content.js, js/exercises.js' : base === 'figures' ? 'js/figures.js' : `js/rocniky/${base}.js`;
    const body = `/* ${NAMES[lang] || lang}: preklad ${src}. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/${lang}/${base}/ – needitovať ručne. */\n`
      + `CONTENT_I18N.add('${lang}', ${JSON.stringify(pack, null, 1)});\n`;
    fs.mkdirSync(path.join(CI_DIR, lang), { recursive: true });
    // ručne písaný balík (bez značky nástroja) sa neprepisuje: preklady idú do doplnkového súboru <súbor>-doplnky.js
    const own = path.join(CI_DIR, lang, `${base}.js`);
    const manual = fs.existsSync(own) && !fs.readFileSync(own, 'utf8').includes('tools/i18n_build.js');
    const name = manual ? `${base}-doplnky` : base;
    fs.writeFileSync(path.join(CI_DIR, lang, `${name}.js`), body);
    console.log(`${lang}/${name}.js: ${Object.keys(pack.lessons || {}).length} lekcií, ${Object.keys(pack.strings || {}).length} textov`);
  }
}

// zoznam balíkov podľa jazyka (načítava index.html a CONTENT_I18N.load)
const files = {};
for (const lang of dirs(CI_DIR).sort()) {
  files[lang] = fs.readdirSync(path.join(CI_DIR, lang)).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3)).sort();
}
fs.writeFileSync(path.join(CI_DIR, 'files.js'), `/* Balíky prekladov obsahu podľa jazyka. Vygenerované nástrojom tools/i18n_build.js. */\nwindow.CONTENT_I18N_FILES = ${JSON.stringify(files)};\n`);
console.log('files.js:', Object.entries(files).map(([l, f]) => `${l} (${f.length})`).join(', '));
