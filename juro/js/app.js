/* Hlavná logika: smerovanie (hash), úvodná stránka so zaradeniami, zoznam aplikácií zaradenia,
   vzhľad a inštalácia PWA.

   Cesty:  #/                    zaradenia
           #/<zaradenie>          aplikácie zaradenia
           #/<zaradenie>/<app>    aplikácia (registruje sa cez APP.registruj v js/aplikacie/*.js)
   Prvé vykreslenie počká na DOMContentLoaded, aby sa aplikácie stihli zaregistrovať. */
(function () {
  'use strict';

  const main = document.getElementById('app');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const registrovane = {};

  window.APP = {
    esc,
    // aplikácia: render(el, cesta) vykreslí obsah do el; cesta = zvyšok hashu za názvom aplikácie
    registruj(zaradenie, id, render) { registrovane[`${zaradenie}/${id}`] = render; }
  };

  const zaradenie = (id) => ZARADENIA.find((z) => z.id === id);
  const pocetHotovych = (z) => z.aplikacie.filter((a) => a.stav === 'hotova').length;

  function nastavStranku(html, nazov) {
    main.innerHTML = html;
    document.title = nazov ? `${nazov} – Juro` : 'Juro – nástroje pre právnikov';
    window.scrollTo(0, 0);
    const h1 = main.querySelector('h1');
    if (h1) { h1.tabIndex = -1; h1.focus({ preventScroll: true }); }
  }

  function crumbs(polozky) {
    return `<nav class="crumbs" aria-label="Navigácia">${polozky.map(([text, href]) => (href ? `<a href="${href}">${esc(text)}</a>` : `<span aria-current="page">${esc(text)}</span>`)).join('<span aria-hidden="true"> › </span>')}</nav>`;
  }

  /* ---------- úvod: výber zaradenia ---------- */
  function uvod() {
    const karty = ZARADENIA.map((z) => {
      const n = pocetHotovych(z);
      const stav = n ? `<span class="tag tag-ok">${n === 1 ? '1 aplikácia' : `${n} aplikácie`}</span>` : '<span class="tag">pripravujeme</span>';
      const obsah = `<span class="card-icon" aria-hidden="true">${z.ikona}</span>
        <span class="card-body"><span class="card-title">${esc(z.nazov)}</span><span class="card-desc">${esc(z.popis)}</span>${stav}</span>`;
      return n
        ? `<a class="card" href="#/${z.id}">${obsah}</a>`
        : `<div class="card card-off" aria-disabled="true">${obsah}</div>`;
    }).join('');
    nastavStranku(`
      <section class="hero">
        <h1>Nástroje pre právnikov</h1>
        <p>Vyberte svoje zaradenie a zobrazia sa aplikácie, ktoré vám uľahčia každodennú agendu.</p>
      </section>
      <h2>Zaradenie</h2>
      <div class="grid">${karty}</div>`);
  }

  /* ---------- zoznam aplikácií zaradenia ---------- */
  function zoznam(z) {
    const karty = z.aplikacie.map((a) => {
      const obsah = `<span class="card-icon" aria-hidden="true">${a.ikona}</span>
        <span class="card-body"><span class="card-title">${esc(a.nazov)}</span><span class="card-desc">${esc(a.popis)}</span>${a.stav === 'hotova' ? '' : '<span class="tag">pripravujeme</span>'}</span>`;
      return a.stav === 'hotova'
        ? `<a class="card" href="#/${z.id}/${a.id}">${obsah}</a>`
        : `<div class="card card-off" aria-disabled="true">${obsah}</div>`;
    }).join('');
    nastavStranku(`
      ${crumbs([['Zaradenia', '#/'], [z.nazov]])}
      <h1><span aria-hidden="true">${z.ikona}</span> ${esc(z.nazov)}</h1>
      <p class="muted">${esc(z.popis)}</p>
      <div class="grid">${karty || '<p class="muted">Aplikácie pre toto zaradenie pripravujeme.</p>'}</div>`, z.nazov);
  }

  function nenajdene() {
    nastavStranku(`<h1>Stránka sa nenašla</h1><p><a href="#/">Späť na zaradenia</a></p>`, 'Stránka sa nenašla');
  }

  /* ---------- smerovanie ---------- */
  let poslednaApp = null;
  function route() {
    const casti = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
    if (!casti.length) { poslednaApp = null; return uvod(); }
    const z = zaradenie(casti[0]);
    if (!z || !pocetHotovych(z)) return nenajdene();
    if (casti.length === 1) { poslednaApp = null; return zoznam(z); }
    const a = z.aplikacie.find((x) => x.id === casti[1] && x.stav === 'hotova');
    const render = a && registrovane[`${z.id}/${a.id}`];
    if (!render) return nenajdene();
    const kluc = `${z.id}/${a.id}`;
    const zvysok = casti.slice(2);
    // v rámci tej istej aplikácie (napr. prepnutie záložky) stránku neprekresľujeme celú
    if (poslednaApp === kluc && main.firstElementChild && main.querySelector('[data-app]')) {
      return render(main.querySelector('[data-app]'), zvysok, { zmenaZalozky: true });
    }
    poslednaApp = kluc;
    nastavStranku(`${crumbs([['Zaradenia', '#/'], [z.nazov, `#/${z.id}`], [a.nazov]])}<div data-app="${kluc}"></div>`, a.nazov);
    render(main.querySelector('[data-app]'), zvysok, { zmenaZalozky: false });
    const h1 = main.querySelector('h1');
    if (h1) { h1.tabIndex = -1; h1.focus({ preventScroll: true }); }
  }
  window.addEventListener('hashchange', route);
  document.addEventListener('DOMContentLoaded', route);

  /* ---------- vzhľad ---------- */
  document.getElementById('theme-btn').addEventListener('click', () => {
    const novy = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', novy);
    try { localStorage.setItem('juro.theme', novy); } catch (e) { /* vzhľad sa len nezapamätá */ }
  });

  document.getElementById('overene').textContent = VYPOCTY.sk(VYPOCTY.parse(PRAVO.OVERENE));

  /* ---------- inštalácia PWA ---------- */
  const installBtn = document.getElementById('install-btn');
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
  });
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.hidden = true;
  });
  window.addEventListener('appinstalled', () => { installBtn.hidden = true; });

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* offline režim nie je dostupný */ });
  }
})();
