/* Prehľad matematických symbolov (#/symboly, #/symboly/<skupina>): symbol, názov, význam, príklad a lekcia,
   kde sa zavádza. Dáta sú v js/symboly.js (window.SYMBOLS), preklady v balíku js/content-i18n/<jazyk>/symboly.js.
   Zápis v symboloch a príkladoch (intervaly, body, množiny) sa prevedie podľa jazyka (CONTENT_I18N.notation).
   Filter na stránke hľadá v symbole, názve aj význame; symboly nájde aj vyhľadávanie v učive. */
(function () {
  'use strict';
  const { t, esc } = APP;
  const CI = CONTENT_I18N;

  // jazyk obsahu: preklad symbolov je v balíku „symboly“, inak slovenčina s upozornením
  const contentLang = () => {
    const ui = I18N.getLang();
    return ((window.CONTENT_I18N_FILES || {})[ui] || []).includes('symboly') ? ui : I18N.DEFAULT;
  };
  const tr = (s, lang) => CI.tr(s, lang);
  // zápis podľa jazyka; desatinná čiarka 3{,}14 → 3.14 v jazykoch s desatinnou bodkou
  const texIn = (s, lang) => CI.run(lang, null, () => {
    const out = CI.notation(CI.tr(s, lang));
    return CI.decimal() === '.' ? out.replace(/(\d)\{,\}(\d)/g, '$1.$2') : out;
  });
  const fold = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  // znaky, ktoré používateľ môže napísať do hľadania (¬, ⇒, ∈…), k príkazom TeXu v symbole
  const GLYPH = {
    neg: '¬', land: '∧', lor: '∨', Rightarrow: '⇒', Leftrightarrow: '⇔', forall: '∀', exists: '∃', in: '∈', notin: '∉',
    subset: '⊂', subseteq: '⊆', cup: '∪', cap: '∩', setminus: '∖ \\', emptyset: '∅ ø', infty: '∞', pm: '±', le: '≤ <=', ge: '≥ >=',
    neq: '≠ !=', doteq: '≐', approx: '≈', sqrt: '√', sum: '∑ Σ', prod: '∏', int: '∫', partial: '∂', nabla: '∇', perp: '⊥',
    parallel: '∥ ||', cong: '≅', sim: '∼ ~', angle: '∠', triangle: '△', circ: '° ∘', pi: 'π', Omega: 'Ω', mu: 'μ', sigma: 'σ',
    mid: '|', nmid: '∤', equiv: '≡', mapsto: '↦', to: '→', iint: '∬', oint: '∮', langle: '⟨', rangle: '⟩', square: '□', times: '×'
  };
  const glyphs = (tex) => (String(tex).match(/\\[a-zA-Z]+/g) || []).map((c) => GLYPH[c.slice(1)] || '').join(' ');

  // položky v jazyku obsahu (pre stránku aj pre vyhľadávanie)
  function entries(lang) {
    return (window.SYMBOLS || []).flatMap((g) => g.items.map((it) => ({
      group: g, it, tex: texIn(it.tex, lang), ex: texIn(it.ex, lang), name: tr(it.name, lang), note: tr(it.note, lang),
      glyphs: glyphs(it.tex)
    })));
  }

  function page(groupId) {
    const lang = contentLang();
    const notice = I18N.getLang() === lang ? '' : `<p class="notice">${esc(t('contentNotice'))}</p>`;
    const all = entries(lang);
    const row = (e) => {
      const L = APP.lessonById(e.it.lesson);
      return `<tr data-q="${esc(fold(`${e.glyphs} ${e.it.tex} ${e.name} ${e.note}`))}">
        <td class="sym-tex">$${e.tex}$</td>
        <td><strong>${esc(e.name)}</strong><div class="muted small">${esc(e.note)}</div></td>
        <td class="sym-ex">$${e.ex}$</td>
        <td class="small">${L ? `<a href="#/lekcia/${L.id}">${APP.lessonTitle(L)}</a>` : ''}</td>
      </tr>`;
    };
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>∑ ${esc(t('symbolsTitle'))}</h1>
      <p class="muted">${esc(t('symbolsIntro'))}</p>
      ${notice}
      <div class="answer-row search-row"><input id="sym-filter" type="search" placeholder="${esc(t('symbolsFilter'))}" aria-label="${esc(t('symbolsFilter'))}"></div>
      <nav class="sym-toc">${(window.SYMBOLS || []).map((g) => `<a class="btn btn-small" href="#/symboly/${g.id}">${g.icon} ${esc(tr(g.title, lang))}</a>`).join('')}</nav>
      <div lang="${APP.htmlLang(lang)}">${(window.SYMBOLS || []).map((g) => `<section class="block sym-group" id="sym-${g.id}">
        <h2>${g.icon} ${esc(tr(g.title, lang))}</h2>
        <div class="table-wrap"><table class="tbl sym-table">
          <tr><th>${esc(t('symbolsSymbol'))}</th><th>${esc(t('symbolsMeaning'))}</th><th>${esc(t('symbolsExample'))}</th><th>${esc(t('symbolsLesson'))}</th></tr>
          ${all.filter((e) => e.group === g).map(row).join('')}
        </table></div></section>`).join('')}</div>
      <p class="muted small" id="sym-none" hidden>${esc(t('symbolsNone'))}</p>`);
    const input = document.getElementById('sym-filter');
    input.addEventListener('input', () => {
      const q = fold(input.value.trim());
      let shown = 0;
      APP.el.querySelectorAll('.sym-group').forEach((sec) => {
        let n = 0;
        sec.querySelectorAll('tr[data-q]').forEach((tr_) => { const ok = !q || tr_.dataset.q.includes(q); tr_.hidden = !ok; if (ok) n += 1; });
        sec.hidden = n === 0;
        shown += n;
      });
      document.getElementById('sym-none').hidden = shown > 0;
    });
    if (groupId) { const sec = document.getElementById(`sym-${groupId}`); if (sec) sec.scrollIntoView(); }
  }

  window.SYMBOLS_I18N = { entries, contentLang, fold };
  APP.route('symboly', (p) => page(p[0]));
  APP.addMenu({ href: '#/symboly', icon: '∑', key: 'menuSymbols' });
})();
