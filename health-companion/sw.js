/* Service worker Health Companion: offline režim a inštalovateľnosť.
   Pri zmene súborov zvýš verziu CACHE, inak si používatelia načítajú starú verziu. */
const CACHE = 'health-companion-487e9ed1';
const ASSETS = [
  './',
  './index.html',
  './logic.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('health-companion-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // HTML a skripty: najprv sieť, cache ako záloha (nová verzia sa ukáže hneď)
  if (req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('.js')) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  // Ostatné (ikony, manifest): najprv cache
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
