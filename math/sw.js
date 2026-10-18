/* Service worker: offline režim a inštalovateľnosť.
   Pri zmene súborov zvýš verziu CACHE, inak si používatelia načítajú starú verziu. */
const CACHE = 'matika-v8';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
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
  './js/app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
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
