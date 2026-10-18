/* Preklady obsahu lekcií (teória, príklady, úlohy, obrázky). Slovenčina je zdroj; preklad jazyka je v
   js/content-i18n/<jazyk>/<súbor>.js a registruje sa cez CONTENT_I18N.add(jazyk, balík).

   Rozhodnutie o štruktúre:
   - Teória a vyriešené príklady sú statické, preto sa prekladajú celé: balík má pre každú lekciu
     { title, summary, theory, examples } s rovnakou štruktúrou ako zdroj (rovnaký počet blokov, obrázky
     na rovnakých miestach s rovnakým fig, rovnaký počet krokov). Chýbajúca lekcia = zobrazí sa slovenčina.
   - Generátory úloh (r1.js, s4.js, …) skladajú text priamo v template literáloch, kde sa prelína
     s matematikou: `Vypočítaj obsah útvaru ohraničeného parabolou $y=${lead(k, 'x')}$…`, často s vetvením
     a slovenským skloňovaním (pl(n, ['jablko', 'jablká', 'jabĺk']), mal/mala). Kopírovať generátor do
     každého jazyka by zdvojilo logiku, prepis na kľúče a premenné by zmenil všetkých ~200 generátorov.
     Preto platí prístup ako v gettexte: kľúčom prekladu je samotný slovenský text. Generátor len označí
     text značkou T: T`Vypočítaj $${a} + ${b}$.` Kľúč je statická časť s očíslovanými dierami
     ('Vypočítaj ${@0} + {@1}$.'), preklad je text s tými istými dierami (poradie sa môže zmeniť) alebo
     funkcia (hodnoty) => text. Hodnota diery, ktorá je sama celým slovenským textom zo slovníka
     (napr. tvar 'jabĺk' alebo 'mala'), sa preloží tiež – tým sa rieši skloňovanie bez zásahu do logiky.
     T.s(text) preloží hotový reťazec (texty z konštánt, možnosti výberu).
   - Obrázky (SVG) sa neoznačujú: po vykreslení sa preložia obsahy <text> a aria-label podľa slovníka
     (presná zhoda). Dynamické popisy (readout) používajú T.
   - Slovník strings je spoločný pre jazyk (zlúčený zo všetkých súborov), lekcia môže mať vlastný
     strings s prednosťou. Chýbajúci preklad vráti slovenský text a zapíše sa do misses (kontroluje
     tools/validate.js). decimal je desatinný oddeľovač jazyka pre čísla z generátorov (fmt). */
(function () {
  'use strict';

  const SOURCE = 'sk';
  const packs = {};       // jazyk → { decimal, lessons: {id: …}, strings: {kľúč: preklad} }
  const misses = [];      // { lang, lesson, key } – chýbajúce preklady (pre validátor)
  let ctx = { lang: SOURCE, lesson: null };

  const norm = (s) => String(s).replace(/\s+/g, ' ').trim();

  function add(lang, pack) {
    const p = packs[lang] || (packs[lang] = { decimal: '.', lessons: {}, strings: {} });
    if (pack.decimal) p.decimal = pack.decimal;
    Object.entries(pack.strings || {}).forEach(([k, v]) => { p.strings[norm(k)] = v; });
    Object.entries(pack.lessons || {}).forEach(([id, l]) => {
      const strings = {};
      Object.entries(l.strings || {}).forEach(([k, v]) => { strings[norm(k)] = v; });
      p.lessons[id] = Object.assign({}, l, { strings });
    });
  }

  const has = (id, lang) => !!(packs[lang] && packs[lang].lessons[id]);
  // jazyk, v ktorom sa lekcia naozaj zobrazí: jazyk rozhrania, ak má preklad, inak slovenčina
  const langFor = (id, uiLang) => (uiLang !== SOURCE && has(id, uiLang) ? uiLang : SOURCE);

  // Lekcia v danom jazyku (pri slovenčine alebo bez prekladu zdroj).
  function lesson(L, lang) {
    if (lang === SOURCE || !has(L.id, lang)) return L;
    const t = packs[lang].lessons[L.id];
    return Object.assign({}, L, { title: t.title, summary: t.summary, theory: t.theory, examples: t.examples });
  }

  // Spustí fn v kontexte jazyka (a lekcie) – generátory aj obrázky bežia synchrónne.
  function run(lang, lessonId, fn) {
    const prev = ctx;
    ctx = { lang: lang || SOURCE, lesson: lessonId || null };
    try { return fn(); } finally { ctx = prev; }
  }

  function entry(key) {
    const p = packs[ctx.lang];
    if (!p) return undefined;
    const own = ctx.lesson && p.lessons[ctx.lesson];
    if (own && own.strings[key] !== undefined) return own.strings[key];
    return p.strings[key];
  }

  function miss(key) {
    if (!misses.some((m) => m.lang === ctx.lang && m.lesson === ctx.lesson && m.key === key)) {
      misses.push({ lang: ctx.lang, lesson: ctx.lesson, key });
    }
  }

  // hodnota diery: celý slovenský text zo slovníka sa preloží, inak zostane
  function value(v) {
    if (typeof v !== 'string') return v;
    const e = entry(norm(v));
    return typeof e === 'string' ? e : v;
  }

  const fill = (tpl, vals) => tpl.replace(/\{@(\d+)\}/g, (m, i) => (i < vals.length ? vals[i] : m));

  // kľúč je bez okrajových medzier; medzera na začiatku/konci zdroja (spájané časti vety) sa zachová
  const edges = (src, out) => (/^\s/.test(src) && !/^\s/.test(out) ? ' ' : '') + out + (/\s$/.test(src) && !/\s$/.test(out) ? ' ' : '');

  // značka pre template literal: T`text ${x} text`
  function T(strings, ...vals) {
    if (ctx.lang === SOURCE) return String.raw({ raw: strings }, ...vals);
    const key = norm(strings.reduce((s, part, i) => s + (i ? `{@${i - 1}}` : '') + part, ''));
    const tv = vals.map(value);
    const e = entry(key);
    const src = String.raw({ raw: strings }, ...vals);
    if (e === undefined) { miss(key); return src; }
    return edges(src, typeof e === 'function' ? e(tv) : fill(e, tv));
  }

  // preklad hotového reťazca (presná zhoda)
  T.s = (s) => {
    if (ctx.lang === SOURCE) return s;
    const e = entry(norm(s));
    if (e === undefined) { miss(norm(s)); return s; }
    return edges(s, typeof e === 'function' ? e([]) : e);
  };

  // SVG obrázka: preloží obsah <text> a aria-label (presná zhoda). Slovo s 3+ písmenami bez prekladu je chyba.
  const WORDY = /[A-Za-zÀ-ž]{3,}/;
  // krátky popis (text v SVG, názov posuvníka): preloží sa pri zhode; chýbajúci preklad sa hlási
  // len pri slove s 3+ písmenami (a, x₀, A ∩ B či −0,75 bez prekladu zostanú)
  function text(s) {
    if (ctx.lang === SOURCE) return s;
    const k = norm(s);
    if (!k) return s;
    const e = entry(k);
    if (e === undefined) { if (WORDY.test(k)) miss(k); return s; }
    return typeof e === 'function' ? e([]) : e;
  }
  function markup(html) {
    if (ctx.lang === SOURCE || typeof html !== 'string') return html;
    const tr = text;
    return html
      .replace(/(<text\b[^>]*>)([^<]+)(<\/text>)/g, (m, a, txt, b) => a + tr(txt) + b)
      .replace(/aria-label="([^"]*)"/g, (m, txt) => `aria-label="${tr(txt)}"`);
  }

  window.CONTENT_I18N = {
    SOURCE, add, has, langFor, lesson, run, T, text, markup, misses,
    lang: () => ctx.lang,
    decimal: () => (ctx.lang === SOURCE ? ',' : (packs[ctx.lang] && packs[ctx.lang].decimal) || '.'),
    languages: () => Object.keys(packs),
    pack: (lang) => packs[lang]
  };
})();
