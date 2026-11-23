// Skopíruje webové súbory appky do www/ (webDir pre Capacitor). Spúšťa sa pred npx cap sync.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
const ITEMS = ['index.html', 'logic.js', 'securebox.js', 'store.js', 'manifest.webmanifest', 'i18n', 'icons'];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
ITEMS.forEach(item => fs.cpSync(path.join(root, item), path.join(out, item), { recursive: true }));
console.log('www/ pripravené');
