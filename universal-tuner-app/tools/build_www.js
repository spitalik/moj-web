// Skopíruje webové súbory appky do www/ (webDir pre Capacitor). Spúšťa sa pred npx cap sync.
// sw.js sa nekopíruje: v natívnej appke sú súbory priamo v balíku a service worker netreba.
'use strict';
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
const ITEMS = ['index.html', 'boot.js', 'app.js', 'pitch.js', 'i18n', 'manifest.webmanifest', 'icons', 'fonts', 'LICENSE'];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
ITEMS.forEach(item => fs.cpSync(path.join(root, item), path.join(out, item), { recursive: true }));
console.log('www/ pripravené');
