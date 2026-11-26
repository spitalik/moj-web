/* Service worker Sleep Detective: offline režim a inštalovateľnosť.
   Pri zmene súborov zvýš verziu CACHE, inak si používatelia načítajú starú verziu. */
const CACHE = 'sleep-detective-v34';
const ASSETS = [
  './',
  './index.html',
  './boot.js',
  './app.js',
  './sound.js',
  // preklady (jadro + 12 jazykov)
  './i18n/core.js',
  './i18n/sk.js',
  './i18n/en.js',
  './i18n/es.js',
  './i18n/pt.js',
  './i18n/de.js',
  './i18n/fr.js',
  './i18n/it.js',
  './i18n/ru.js',
  './i18n/tr.js',
  './i18n/ja.js',
  './i18n/ko.js',
  './i18n/zh.js',
  './manifest.webmanifest',
  './icons/logo.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  // písma sú v appke (bez Google Fonts), aby sa nič neposielalo tretím stranám
  './fonts/fonts.css',
  './fonts/bricolage-grotesque-500-latin.woff2',
  './fonts/bricolage-grotesque-500-latin-ext.woff2',
  './fonts/ibm-plex-mono-400-latin.woff2',
  './fonts/ibm-plex-mono-400-latin-ext.woff2',
  './fonts/ibm-plex-mono-500-latin.woff2',
  './fonts/ibm-plex-mono-500-latin-ext.woff2',
  './fonts/instrument-sans-400-latin.woff2',
  './fonts/instrument-sans-400-latin-ext.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('sleep-detective-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin !== location.origin) return;

  // HTML: najprv sieť (nová verzia sa ukáže hneď), bez signálu z cache
  if (req.mode === 'navigate' || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  // Ostatné (ikony, písma, manifest): najprv cache
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
