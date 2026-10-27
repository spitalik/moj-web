/* Service worker: offline režim a inštalovateľnosť.
   Pri zmene súborov zvýš verziu CACHE, inak si používatelia načítajú starú verziu.
   Preklady obsahu (js/content-i18n/<jazyk>/*.js) sa neukladajú vopred: uložia sa pri prvom načítaní jazyka. */
const CACHE = 'fyzika-v21';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/content-i18n.js',
  './js/content.js',
  './js/exercises.js',
  './js/figures.js',
  './js/simulacie.js',
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
  './js/rocniky/v8.js',
  './js/rocniky/v9.js',
  './js/rocniky/v10.js',
  './js/rocniky/v11.js',
  './js/rocniky/v12.js',
  './js/obrazky.js',
  './js/obrazky-r1r5.js',
  './js/obrazky-r6r9.js',
  './js/obrazky-s1s4.js',
  './js/obrazky-v1v4.js',
  './js/obrazky-v5v8.js',
  './js/obrazky-v9v12.js',
  './js/vzorce.js',
  './js/symboly.js',
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
  './js/store.js',
  './js/keypad.js',
  './js/scratchpad.js',
  './js/tts.js',
  './js/widget.js',
  './js/app.js',
  './css/features.css',
  './js/features/odznaky.js',
  './js/features/simulacie.js',
  './js/features/vzorce.js',
  './js/features/symboly.js',
  './js/features/opakovanie.js',
  './js/features/vyzva.js',
  './js/features/testy.js',
  './js/features/vstupny.js',
  './js/features/hladat.js',
  './js/features/prehlad.js',
  './js/features/ucitel.js',
  './js/features/nastavenia.js',
  './js/features/sukromie.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/logo.png',
  './vendor/katex/katex.min.css',
  './vendor/katex/katex.min.js',
  './vendor/katex/contrib/auto-render.min.js',
  './vendor/katex/fonts/KaTeX_AMS-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Caligraphic-Bold.woff2',
  './vendor/katex/fonts/KaTeX_Caligraphic-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Fraktur-Bold.woff2',
  './vendor/katex/fonts/KaTeX_Fraktur-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Main-Bold.woff2',
  './vendor/katex/fonts/KaTeX_Main-BoldItalic.woff2',
  './vendor/katex/fonts/KaTeX_Main-Italic.woff2',
  './vendor/katex/fonts/KaTeX_Main-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Math-BoldItalic.woff2',
  './vendor/katex/fonts/KaTeX_Math-Italic.woff2',
  './vendor/katex/fonts/KaTeX_SansSerif-Bold.woff2',
  './vendor/katex/fonts/KaTeX_SansSerif-Italic.woff2',
  './vendor/katex/fonts/KaTeX_SansSerif-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Script-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Size1-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Size2-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Size3-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Size4-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Typewriter-Regular.woff2',
  './vendor/fonts/fonts.css',
  './vendor/fonts/atkinson-hyperlegible-latin-400-normal.woff2',
  './vendor/fonts/atkinson-hyperlegible-latin-700-normal.woff2',
  './vendor/fonts/atkinson-hyperlegible-latin-ext-400-normal.woff2',
  './vendor/fonts/atkinson-hyperlegible-latin-ext-700-normal.woff2',
  './vendor/fonts/lexend-latin-400-normal.woff2',
  './vendor/fonts/lexend-latin-600-normal.woff2',
  './vendor/fonts/lexend-latin-ext-400-normal.woff2',
  './vendor/fonts/lexend-latin-ext-600-normal.woff2',
  './vendor/qrcode/qrcode.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    // cache: 'reload' – nová verzia sa stiahne zo siete, nie zo (starej) HTTP cache prehliadača
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS.map((u) => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
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
