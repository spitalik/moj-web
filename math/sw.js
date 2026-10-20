/* Service worker: offline režim a inštalovateľnosť.
   Pri zmene súborov zvýš verziu CACHE, inak si používatelia načítajú starú verziu.
   Preklady obsahu (js/content-i18n/<jazyk>/*.js) sa neukladajú vopred: uložia sa pri prvom načítaní jazyka. */
const CACHE = 'matika-v28';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/content-i18n.js',
  './js/content.js',
  './js/exercises.js',
  './js/figures.js',
  './js/rocniky/r1.js',
  './js/rocniky/r2.js',
  './js/rocniky/r3.js',
  './js/rocniky/r4.js',
  './js/rocniky/r5.js',
  './js/rocniky/r6.js',
  './js/rocniky/r7.js',
  './js/rocniky/r8.js',
  './js/rocniky/r9.js',
  './js/rocniky/s1.js',
  './js/rocniky/s2.js',
  './js/rocniky/s3.js',
  './js/rocniky/s4.js',
  './js/rocniky/v1.js',
  './js/rocniky/v2.js',
  './js/rocniky/v3.js',
  './js/rocniky/v4.js',
  './js/rocniky/v5.js',
  './js/rocniky/v6.js',
  './js/rocniky/v7.js',
  './js/temy.js',
  './js/i18n.js',
  './js/lang/sk.js',
  './js/lang/en.js',
  './js/lang/es.js',
  './js/lang/pt.js',
  './js/lang/de.js',
  './js/lang/fr.js',
  './js/lang/it.js',
  './js/lang/ru.js',
  './js/lang/tr.js',
  './js/lang/ja.js',
  './js/lang/ko.js',
  './js/lang/zh.js',
  './js/content-i18n/files.js',
  './js/vzorce.js',
  './js/store.js',
  './js/keypad.js',
  './js/scratchpad.js',
  './js/tts.js',
  './js/widget.js',
  './js/app.js',
  './css/features.css',
  './js/features/odznaky.js',
  './js/features/opakovanie.js',
  './js/features/vyzva.js',
  './js/features/testy.js',
  './js/features/vstupny.js',
  './js/features/hladat.js',
  './js/features/vzorce.js',
  './js/features/prehlad.js',
  './js/features/ucitel.js',
  './js/features/jocadium.js',
  './js/features/nastavenia.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/logo.svg',
  'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
  'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js',
  'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((hit) => {
      if (hit) return hit;
      return fetch(event.request)
        .then((res) => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return res;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
