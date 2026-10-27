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
    const p = packs[lang] || (packs[lang] = { decimal: '.', lessons: {}, strings: {}, lessonStrings: {} });
    if (pack.decimal) p.decimal = pack.decimal;
    Object.entries(pack.strings || {}).forEach(([k, v]) => { p.strings[norm(k)] = v; });
    // preklady platné len v jednej lekcii (rovnaké slovenské slovo potrebuje inde iný preklad)
    Object.entries(pack.lessonStrings || {}).forEach(([id, d]) => {
      const own = p.lessonStrings[id] || (p.lessonStrings[id] = {});
      Object.entries(d).forEach(([k, v]) => { own[norm(k)] = v; });
    });
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
    // poradie: preklady len pre lekciu (lessonStrings – opravy kolízií), slovník v preklade lekcie, spoločný slovník
    const extra = ctx.lesson && p.lessonStrings[ctx.lesson];
    if (extra && extra[key] !== undefined) return extra[key];
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
  // (tools/i18n_extract.js zapne harvest a zbiera aj diery so slovami bez prekladu – kandidáti na slovník)
  // harvest.uses: kde sa ktorá diera so slovom použila (kľúč šablóny a lekcia) – tools/i18n_collisions.js
  const harvest = { on: false, values: new Set(), uses: [] };
  function value(v) {
    if (typeof v !== 'string') return v;
    const e = entry(norm(v));
    if (e === undefined && harvest.on && /[A-Za-zÀ-ž]{3,}/.test(v) && !/[$\\<\d]/.test(v) && !/^[IVXLCDM ,]+$/.test(v)) harvest.values.add(norm(v));
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
    if (harvest.on) vals.forEach((v, i) => { if (typeof v === 'string' && /[A-Za-zÀ-ž]{2,}/.test(v) && !/[$\\<\d]/.test(v)) harvest.uses.push({ value: norm(v), template: key, hole: i, lesson: ctx.lesson }); });
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
    // text, ktorý už je prekladom (popis v SVG zložený cez T`…` sa v markup hľadá druhýkrát), nie je chýbajúci
    if (e === undefined) { if (WORDY.test(k) && !translated(k)) miss(k); return s; }
    return typeof e === 'function' ? e([]) : e;
  }
  // množina preložených textov jazyka (hodnoty slovníka), vytvorená až pri prvom použití
  const done = {};
  function translated(k) {
    const p = packs[ctx.lang];
    if (!p) return false;
    if (!done[ctx.lang] || done[ctx.lang].n !== Object.keys(p.strings).length) {
      const set = new Set();
      const addAll = (d) => Object.values(d).forEach((v) => { if (typeof v === 'string') set.add(norm(v)); });
      addAll(p.strings);
      Object.values(p.lessons).forEach((l) => addAll(l.strings || {}));
      done[ctx.lang] = { n: Object.keys(p.strings).length, set };
    }
    return done[ctx.lang].set.has(k);
  }
  function markup(html) {
    if (ctx.lang === SOURCE || typeof html !== 'string') return html;
    const tr = text;
    return html
      .replace(/(<text\b[^>]*>)([^<]+)(<\/text>)/g, (m, a, txt, b) => a + tr(txt) + b)
      .replace(/aria-label="([^"]*)"/g, (m, txt) => `aria-label="${tr(txt)}"`);
  }

  // preklad pevného textu do jazyka bez hlásenia chýbajúceho prekladu (vzorce)
  function tr(s, lang) {
    if (!s || lang === SOURCE || !packs[lang]) return s;
    const e = packs[lang].strings[norm(s)];
    return typeof e === 'string' ? e : typeof e === 'function' ? e([]) : s;
  }

  // Balíky prekladov sa načítajú len pre zvolený jazyk: pri štarte cez document.write v index.html,
  // pri zmene jazyka dynamicky (load). Zoznam súborov je v js/content-i18n/files.js (generuje tools/i18n_build.js).
  const loaded = {};
  const files = (lang) => ((window.CONTENT_I18N_FILES || {})[lang] || []).map((f) => `js/content-i18n/${lang}/${f}.js`);
  function load(lang) {
    if (lang === SOURCE) return Promise.resolve();
    if (!loaded[lang]) {
      loaded[lang] = Promise.all(files(lang).map((src) => (document.querySelector(`script[src="${src}"]`) ? null : new Promise((resolve) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = resolve; // bez balíka (offline) zostane slovenčina
        document.head.appendChild(s);
      }))));
    }
    return loaded[lang];
  }

  /* ---------- zápis intervalov, bodov a zoznamov podľa jazyka ----------
     Generátory píšu slovenský zápis: uzavretý interval ⟨a; b⟩ (\langle a; b\rangle), otvorený (a; b),
     bod [x; y], zoznam/súradnice/množina s bodkočiarkou. V iných jazykoch sa zápis prevedie:
       iso – [a, b], [a, b), (a, b), bod (x, y)          (en, ja, ko, zh: desatinná bodka → oddeľovač čiarka)
       iso – [a; b], [a; b), (a; b), bod (x; y)          (es, pt, it, ru, tr: desatinná čiarka → bodkočiarka ostáva)
       de  – ako iso s bodkočiarkou, bod (x | y)
       fr  – [a ; b], ]a ; b], ]a ; b[, bod (x ; y)
     Prevádza sa len obsah bez vnorených zátvoriek (zložitejší zápis ostane slovenský, je stále zrozumiteľný).
     Statický obsah lekcií upravili prekladatelia, týka sa to len výstupov generátorov (EXERCISES.make). */
  const NOTATION = { de: { point: 'bar' }, fr: { iv: 'fr' } };
  const INNER = '[^()\\[\\]⟨⟩{}]*?;[^()\\[\\]⟨⟩{}]*?';
  const IV = new RegExp(`(\\\\left\\s*\\\\langle\\s*|\\\\langle\\s*|⟨|\\\\left\\s*\\(|\\()(${INNER})(\\s*\\\\right\\s*\\\\rangle|\\s*\\\\rangle|⟩|\\\\right\\s*\\)|\\))`, 'g');
  const PT = new RegExp(`(?<!\\\\)(?:\\\\left\\s*)?\\[(${INNER})(?:\\\\right\\s*)?\\]`, 'g');
  const PAREN = new RegExp(`\\((${INNER})\\)`, 'g');
  const SET = new RegExp(`\\\\\\{(${INNER})\\\\\\}`, 'g');
  function notation(s) {
    if (typeof s !== 'string' || ctx.lang === SOURCE || s.indexOf(';') < 0) return s;
    // obrázky (SVG) sa nemenia – bodkočiarky v ich atribútoch nie sú matematický zápis
    if (s.indexOf('<svg') >= 0) return s.split(/(<svg[\s\S]*?<\/svg>)/).map((p, i) => (i % 2 ? p : notation(p))).join('');
    const n = NOTATION[ctx.lang] || {};
    const comma = ((packs[ctx.lang] && packs[ctx.lang].decimal) || '.') === '.';
    const sep = (x) => (comma ? x.replace(/;/g, ',') : x);
    const angle = (x) => /langle|rangle|⟨|⟩/.test(x);
    // najprv body [x; y] (v slovenčine hranatá zátvorka s bodkočiarkou je vždy bod), potom intervaly s ⟨ ⟩
    let out = s.replace(PT, (m, inner) => (n.point === 'bar' ? `(${inner.replace(/;/g, ' |')})` : `(${sep(inner)})`));
    out = out.replace(IV, (m, l, inner, r) => {
      if (!angle(l) && !angle(r)) return m; // (a; b) bez lomených zátvoriek: interval aj vektor, rieši PAREN
      const lc = angle(l), rc = angle(r);
      const L = n.iv === 'fr' ? (lc ? '[' : ']') : (lc ? '[' : '(');
      const R = n.iv === 'fr' ? (rc ? ']' : '[') : (rc ? ']' : ')');
      return L + sep(inner) + R;
    });
    if (comma) out = out.replace(PAREN, (m, inner) => `(${sep(inner)})`).replace(SET, (m, inner) => `\\{${sep(inner)}\\}`);
    return out;
  }
  // oddeľovač čísel v zozname odpovede (správna odpoveď, zápis viacerých čísel)
  const listSep = () => (ctx.lang !== SOURCE && ((packs[ctx.lang] && packs[ctx.lang].decimal) || '.') === '.' ? ', ' : '; ');

  window.CONTENT_I18N = {
    SOURCE, add, has, langFor, lesson, run, T, text, markup, misses, harvest, tr, load, files, notation, listSep,
    lang: () => ctx.lang,
    decimal: () => (ctx.lang === SOURCE ? ',' : (packs[ctx.lang] && packs[ctx.lang].decimal) || '.'),
    languages: () => Object.keys(packs),
    pack: (lang) => packs[lang]
  };
})();
