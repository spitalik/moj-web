/* Súkromie a licencia (#/sukromie): čo aplikácia ukladá (len lokálne), kam sa pripája (len hosting),
   čítanie nahlas, zdieľanie kódov a QR, vymazanie údajov, licencie (kód MIT, obsah CC BY 4.0) a súčasti
   tretích strán (všetky uložené v aplikácii, priečinok vendor/). Odkaz je v menu aj v pätičke. */
(function () {
  'use strict';
  const { t, esc } = APP;

  // súčasti iných autorov (vlastné mená, neprekladajú sa)
  const THIRD = [
    ['KaTeX 0.16.11', 'Khan Academy', 'MIT'],
    ['QR Code Generator 1.4.4', 'Kazuhiko Arase', 'MIT'],
    ['Atkinson Hyperlegible', 'Braille Institute of America', 'SIL Open Font License 1.1'],
    ['Lexend', 'The Lexend Project Authors', 'SIL Open Font License 1.1']
  ];
  const SECTIONS = [
    ['👤', 'privacyOperatorH', 'privacyOperator'],
    ['🔒', 'privacyLocalH', 'privacyLocal'],
    ['🌐', 'privacyServersH', 'privacyServers'],
    ['🔊', 'privacyTtsH', 'privacyTts'],
    ['🔗', 'privacyShareH', 'privacyShare'],
    ['🧒', 'privacyChildH', 'privacyChild'],
    ['🗑️', 'privacyDeleteH', 'privacyDelete']
  ];

  function page() {
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🛡️ ${esc(t('privacyTitle'))}</h1>
      ${SECTIONS.map(([icon, h, p]) => `<section class="block legal">
        <h2>${icon} ${esc(t(h))}</h2><p>${esc(t(p))}</p>
        ${p === 'privacyDelete' ? `<p><a class="btn btn-small" href="#/nastavenia">⚙️ ${esc(t('menuSettings'))}</a></p>` : ''}
      </section>`).join('')}
      <section class="block legal">
        <h2>📄 ${esc(t('licenseH'))}</h2>
        <p>${esc(t('licenseText'))}</p>
        <p class="muted">${esc(t('licenseThird'))}</p>
        <ul>${THIRD.map(([name, by, lic]) => `<li><strong>${esc(name)}</strong> – ${esc(by)} · ${esc(lic)}</li>`).join('')}</ul>
      </section>`);
  }

  APP.route('sukromie', page);
  APP.addMenu({ href: '#/sukromie', icon: '🛡️', key: 'menuPrivacy' });
})();
