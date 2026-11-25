// Skopíruje webové súbory appky do www/ (webDir pre Capacitor). Spúšťa sa pred npx cap sync.
// Nekopíruje sa sw.js (v natívnej appke sú súbory priamo v balíku), tools/, CLAUDE.md ani promo video.
'use strict';
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
const ITEMS = ['index.html', 'i18n.js', 'sfx.js', 'native.js', 'endcard.js', 'games', 'fonts', 'icons', 'manifest.json', 'LICENSE', 'NOTICE'];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
ITEMS.forEach(item => fs.cpSync(path.join(root, item), path.join(out, item), { recursive: true }));
console.log('www/ pripravené');
