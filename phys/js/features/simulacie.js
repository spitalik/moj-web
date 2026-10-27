/* Simulácie (#/simulacie): interaktívne obrázky a grafy, ktoré sa dajú prestavovať posuvníkmi.
   Rovnaké simulácie sa ukazujú aj v lekciách, ku ktorým patria (panel pod teóriou). Definície sú v js/simulacie.js. */
(function () {
  'use strict';
  const { esc } = APP;

  const SIMS = [
    { id: 'sim-pohyb', title: 'Rýchlosť a dráha pri zrýchlenom pohybe', icon: '🏃',
      lessons: ['r3-pohyb', 'r7-pohyb', 'r7-draha', 'r7-rovnomerny', 's1-pohyb', 's1-zrychlenie', 'v1-kinematika'] },
    { id: 'sim-vrh', title: 'Šikmý vrh', icon: '🎯', lessons: ['s1-zrychlenie', 'v1-kinematika'] },
    { id: 'sim-zrychlenie', title: 'Zrýchlenie: sila a hmotnosť', icon: '🚀',
      lessons: ['r7-sila', 's1-newton', 's1-zrychlenie', 'v1-newton'] },
    { id: 'sim-sklon', title: 'Teleso na naklonenej rovine', icon: '⛰️',
      lessons: ['r7-sila', 'r7-tiaz', 'r7-trenie', 's1-newton', 'v1-newton'] },
    { id: 'sim-kyvadlo', title: 'Kyvadlo', icon: '🪀', lessons: ['s2-kmitanie', 'v1-lagrange'] },
    { id: 'sim-plavanie', title: 'Plávanie a vztlak', icon: '🛟',
      lessons: ['r5-hustota', 'r6-hustota', 'r6-vztlak', 'v11-tlak-vztlak'] },
    { id: 'sim-plyn', title: 'Ideálny plyn: izoterma', icon: '🫧',
      lessons: ['r6-tlak', 's1-tlak', 's2-ideal', 'v2-stavove-rovnice', 'v2-kinetika-plynov'] },
    { id: 'sim-ohrev', title: 'Ohrievanie vody', icon: '♨️',
      lessons: ['r3-teplo', 'r6-teplo', 'r8-vnutorna-energia', 's2-teplo', 'v2-prvy-zakon'] },
    { id: 'sim-vlny', title: 'Skladanie kmitov a rázy', icon: '🌊',
      lessons: ['r4-zvuk', 's2-vlnenie', 'v4-vlnenie', 'v4-interferencia', 's4-interferencia'] },
    { id: 'sim-lom', title: 'Lom svetla', icon: '🔦',
      lessons: ['r7-svetlo', 'r7-odraz', 's3-odraz-lom', 'v4-geometricka-optika'] },
    { id: 'sim-sosocka', title: 'Spojná šošovka', icon: '🔍',
      lessons: ['r7-zrkadla', 's3-sosovky', 'v4-zobrazovanie'] }
  ];

  const card = (s) => `<section class="block sim-card" id="sim-${esc(s.id.slice(4))}">
    <h2>${s.icon} ${esc(s.title)}</h2>
    <figure class="figure" data-fig="${esc(s.id)}"><div class="fig-body"></div></figure>
  </section>`;

  function page() {
    APP.setPage(`<nav class="crumbs"><a href="#/">Domov</a></nav>
      <h1>🎮 Simulácie</h1>
      <p class="muted">Posúvaj jednotlivými veličinami a sleduj, ako sa mení obrázok aj graf. Výsledky sa počítajú podľa vzorcov z lekcií.</p>
      ${SIMS.map(card).join('')}`);
    document.querySelectorAll('[data-fig]').forEach((el) => FIGURES.mount(el));
  }

  APP.route('simulacie', page);
  APP.addMenu({ href: '#/simulacie', icon: '🎮', key: 'menuSims' });

  // panel pod teóriou lekcie: simulácie, ktoré sa jej týkajú
  APP.addLessonPanel((L) => {
    const sims = SIMS.filter((s) => s.lessons.includes(L.id));
    if (!sims.length) return '';
    return `<section class="block sim-block"><h2>🎮 Vyskúšaj simuláciu</h2>
      ${sims.map((s) => `<h3>${s.icon} ${esc(s.title)}</h3>
        <figure class="figure" data-fig="${esc(s.id)}"><div class="fig-body"></div></figure>`).join('')}
      <p class="muted"><a href="#/simulacie">Všetky simulácie →</a></p></section>`;
  });
})();
