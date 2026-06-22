const CACHE = 'gamepad-v54';

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
  './games/nonogram/index.html',
  './games/blackjack/index.html',
  './games/frogger/index.html',
  './games/endless-runner/index.html',
  './games/space-invaders/index.html',
  './games/sliding-puzzle/index.html',
  './games/chess/index.html',
  './games/rhythm/index.html',
  './games/sand/index.html',
  './games/orbit-escape/index.html',
  './games/orbital-courier/index.html',
  './games/circuit-bloom/index.html',
  './games/echo-vault/index.html',
  './games/tiny-alchemist/index.html',
  './games/signal-garden/index.html',
  './games/dead-grid/index.html',
  './games/neon-lane/index.html',
  './games/sokoban/index.html',
  './games/ricochet/index.html',
  './games/flow/index.html',
  './games/stars/index.html',
  './games/gear-puzzle/index.html',
  './games/hill-racer/index.html',
  './games/top-racer/index.html',
  './games/nebula-strike/index.html',
  './games/gravity-shift/index.html',
  './games/cesty/index.html',
  './games/cosmic-voyager/index.html',
  './games/number-flash/index.html',
  './games/fluxgall/index.html',
  './games/threadcatch/index.html',
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
