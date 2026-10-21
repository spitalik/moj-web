/* Nahlásenie chyby v úlohe alebo v lekcii: odkaz na nový issue v repozitári na GitHube s predvyplneným
   názvom a popisom (lekcia, jazyk, semienko úlohy, zadanie, odpoveď aplikácie, adresa stránky).
   Úlohu z hlásenia zopakuje EXERCISES.make(lekcia, jazyk, semienko). Na odoslanie treba účet na GitHube. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const REPO = 'https://github.com/spitalik/moj-web';
  const MAX = 700; // dĺžka citovaného zadania v hlásení (adresa nesmie byť príliš dlhá)

  // HTML a TeX zadania → čitateľný text (TeX ostane medzi $…$, obrázky sa vynechajú)
  const plain = (html) => {
    const d = document.createElement('div');
    d.innerHTML = String(html).replace(/<svg[\s\S]*?<\/svg>/g, ' [obrázok] ');
    return d.textContent.replace(/\s+/g, ' ').trim();
  };
  const cut = (s) => (s.length > MAX ? s.slice(0, MAX) + '…' : s);
  const skTitle = (id) => { const L = APP.lessonById(id); return L ? L.title : id; };

  function issueUrl(title, lines) {
    const body = [...lines, '', '**Čo je zle:**', '', ''].join('\n');
    return `${REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  }

  // odkaz na nahlásenie chyby v úlohe (ex z EXERCISES.make)
  function exerciseUrl(ex, lessonId) {
    const id = ex.lesson || lessonId;
    const lang = ex.lang || 'sk';
    return issueUrl(`[matika] Chyba v úlohe: ${id} (${lang})`, [
      `**Lekcia:** ${id} – ${skTitle(id)}`,
      `**Jazyk obsahu / rozhrania:** ${lang} / ${I18N.getLang()}`,
      `**Semienko úlohy:** ${ex.seed !== undefined ? ex.seed : '–'}`,
      `**Zadanie:** ${cut(plain(ex.q))}`,
      `**Správna odpoveď podľa aplikácie:** ${plain(EXERCISES.formatAnswer(ex))}`,
      `**Stránka:** ${location.href}`,
      '',
      ex.seed !== undefined ? `Zopakovanie: \`EXERCISES.make('${id}', '${lang}', ${ex.seed})\`` : ''
    ]);
  }

  function lessonUrl(L) {
    const lang = APP.contentLang(L.id);
    return issueUrl(`[matika] Chyba v lekcii: ${L.id} (${lang})`, [
      `**Lekcia:** ${L.id} – ${L.title}`,
      `**Jazyk obsahu / rozhrania:** ${lang} / ${I18N.getLang()}`,
      `**Stránka:** ${location.href}`,
      '',
      '**Kde je chyba (teória, obrázok, príklad č. …):**'
    ]);
  }

  // odkaz s ikonou; href sa dopĺňa až pri kliknutí (adresa stránky a jazyk sú aktuálne)
  const link = (cls, attrs = '') => `<a class="report-link ${cls}" href="${REPO}/issues/new" target="_blank" rel="noopener" title="${esc(t('reportErrorTitle'))}"${attrs}>⚑ ${esc(t('reportError'))}</a>`;

  window.REPORT = { exerciseUrl, lessonUrl, link };

  // v lekcii: odkaz pod obsahom lekcie
  APP.addLessonPanel((L) => `<p class="report-row small">${link('report-lesson', ` data-lesson="${esc(L.id)}"`)}</p>`);
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a.report-lesson');
    if (!a) return;
    const L = APP.lessonById(a.dataset.lesson);
    if (L) a.href = lessonUrl(L);
  });
})();
