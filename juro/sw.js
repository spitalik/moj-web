/* Service worker: offline režim a inštalovateľnosť.
   Pri zmene súborov (aj právnych údajov v js/pravo.js) zvýš verziu CACHE, inak si používatelia načítajú starú verziu. */
const CACHE = 'juro-v2';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/pravo.js',
  './js/vypocty.js',
  './js/zaradenia.js',
  './js/app.js',
  './js/aplikacie/kalkulacka-vsu.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/logo.svg',
  './vendor/fonts/fonts.css',
  './vendor/fonts/lexend-latin-400-normal.woff2',
  './vendor/fonts/lexend-latin-600-normal.woff2',
  './vendor/fonts/lexend-latin-ext-400-normal.woff2',
  './vendor/fonts/lexend-latin-ext-600-normal.woff2'
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
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('juro-') && k !== CACHE).map((k) => caches.delete(k))))
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
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return res;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
