const CACHE = 'gamepad-v16';
const ASSETS = [
  './',
  './index.html',
  './i18n.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './games/snake/index.html',
  './games/breakout/index.html',
  './games/2048/index.html',
  './games/minesweeper/index.html',
  './games/asteroids/index.html',
  './games/flappydot/index.html',
  './games/pong/index.html',
  './games/simon/index.html',
  './games/tower-defense/index.html',
  './games/platformer/index.html',
  './games/pexeso/index.html',
  './games/piskvory/index.html',
  './games/clickrush/index.html',
  './games/sudoku/index.html',
  './games/maze/index.html',
  './games/solitaire/index.html',
  './games/pipes/index.html',
  './games/starfall-squadron/index.html',
  './games/box-shift/index.html',
  './games/color-rails/index.html',
  './games/starfall-squadron/styles.css',
  './games/starfall-squadron/game.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});

