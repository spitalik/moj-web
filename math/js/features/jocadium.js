/* Prepojenie s Jocadiom (zbierka hier v ../jocadium): pre 1.–4. ročník hry, ktoré precvičujú čísla,
   logiku a priestorovú predstavivosť – ako prestávka v lekcii a odmena za zvládnutú lekciu.
   Panel sa ukáže, len ak je Jocadium dostupné vedľa aplikácie (napr. moj-web/jocadium a moj-web/math). */
(function () {
  'use strict';
  const { t, esc } = APP;
  const BASE = '../jocadium/';
  const LEVELS_WITH_GAMES = ['r1', 'r2', 'r3', 'r4'];

  const GAMES = {
    'sliding-puzzle': { icon: '🧩', key: 'gameSliding' },
    '2048': { icon: '🔢', key: 'game2048' },
    sudoku: { icon: '🔢', key: 'gameSudoku' },
    nonogram: { icon: '🖼️', key: 'gameNonogram' },
    flow: { icon: '🔗', key: 'gameFlow' },
    'hanoi-towers': { icon: '🗼', key: 'gameHanoi' },
    maze: { icon: '🌀', key: 'gameMaze' },
    pexeso: { icon: '🃏', key: 'gamePexeso' }
  };
  // ktoré hry sa hodia k téme lekcie
  const BY_TOPIC = {
    cisla: ['sliding-puzzle', '2048'],
    planimetria: ['nonogram', 'flow'],
    slovne: ['hanoi-towers', 'sudoku'],
    jednotky: ['maze', 'pexeso']
  };
  const DEFAULT = ['sudoku', 'pexeso'];

  let available = false;
  const url = (id) => `${BASE}games/${id}/index.html`;
  const gamesFor = (L) => {
    const th = APP.themeOf(L.id);
    return (th && BY_TOPIC[th.id]) || DEFAULT;
  };
  const link = (id) => `<a class="btn btn-small" href="${url(id)}" target="_blank" rel="noopener">${GAMES[id].icon} ${esc(t(GAMES[id].key))}</a>`;

  APP.addLessonPanel((L) => {
    if (!available || !LEVELS_WITH_GAMES.includes(L.level)) return '';
    return `<aside class="game-break"><strong>🎮 ${esc(t('gameBreak'))}</strong>
      <span class="muted small">${esc(t('gameBreakText'))}</span>
      <div class="actions">${gamesFor(L).map(link).join('')}</div></aside>`;
  });

  STORE.on('mastered', (ev) => {
    const L = APP.lessonById(ev.id);
    if (!available || !L || !LEVELS_WITH_GAMES.includes(L.level)) return;
    const g = gamesFor(L)[0];
    APP.toast(`🎮 ${esc(t('gameReward'))} <a href="${url(g)}" target="_blank" rel="noopener">${GAMES[g].icon} ${esc(t(GAMES[g].key))}</a>`, 8000);
  });

  // je Jocadium vedľa aplikácie? (offline/iné nasadenie → panel sa neukáže)
  if (location.protocol.startsWith('http')) {
    fetch(`${BASE}index.html`, { method: 'HEAD', cache: 'no-store' })
      .then((r) => {
        available = r.ok;
        if (available && /^#\/lekcia\//.test(location.hash)) APP.refresh();
      })
      .catch(() => { available = false; });
  }
})();
