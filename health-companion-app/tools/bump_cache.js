// Nastaví CACHE v sw.js podľa obsahu appky: node tools/bump_cache.js
// Test (tools/test.js) zlyhá, ak je verzia cache neaktuálna, takže nikdy nezostane stará verzia pre používateľov.
'use strict';
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..');
const LANGS = ['sk', 'en', 'es', 'pt', 'de', 'fr', 'it', 'ru', 'tr', 'ja', 'ko', 'zh'];
const FILES = ['index.html', 'logic.js', 'securebox.js', 'store.js', 'manifest.webmanifest', 'i18n/core.js']
  .concat(LANGS.map(c => 'i18n/' + c + '.js'));
const CACHE_LINE = /const CACHE = '[^']*';/;

function contentHash() {
  const h = crypto.createHash('sha256');
  FILES.forEach(f => h.update(f + '\n').update(fs.readFileSync(path.join(APP_DIR, f))));
  return h.digest('hex').slice(0, 8);
}

function expectedCache() {
  return 'health-companion-' + contentHash();
}

function currentCache() {
  const sw = fs.readFileSync(path.join(APP_DIR, 'sw.js'), 'utf8');
  const m = /const CACHE = '([^']*)';/.exec(sw);
  return m ? m[1] : null;
}

function bump() {
  const swPath = path.join(APP_DIR, 'sw.js');
  const sw = fs.readFileSync(swPath, 'utf8');
  const next = "const CACHE = '" + expectedCache() + "';";
  if (!CACHE_LINE.test(sw)) throw new Error('V sw.js chýba riadok const CACHE = ...');
  fs.writeFileSync(swPath, sw.replace(CACHE_LINE, next));
  return expectedCache();
}

module.exports = { expectedCache, currentCache };

if (require.main === module) {
  console.log('CACHE nastavená na ' + bump());
}
