/* Preklady rozhrania. Každý jazyk je v js/lang/<kód>.js a registruje sa cez I18N.add(kód, slovník).
   Slovenčina je zdrojový a predvolený jazyk; chýbajúci kľúč sa doplní zo slovenčiny.
   Obsah lekcií (teória, príklady, úlohy) sa prekladá zvlášť: js/content-i18n.js a js/content-i18n/<jazyk>/*.js.

   Slovník:
   - _flag, _name, _htmlLang: vlajka, názov jazyka v danom jazyku, hodnota atribútu lang
   - bežné kľúče: text, môže obsahovať {premenné}
   - množné číslo: objekt podľa Intl.PluralRules ({ one, few, many, other, … }), {n} je počet
   - groups / levels / topics: preklady názvov skupín, úrovní a tém (pri slovenčine sa berú priamo z content.js a temy.js) */
(function () {
  'use strict';

  const LANG_KEY = 'fyzika.lang';
  const DEFAULT = 'sk';
  const dicts = {};
  const order = [];

  function add(code, dict) {
    if (!dicts[code]) order.push(code);
    dicts[code] = dict;
  }

  function getLang() {
    try {
      const v = localStorage.getItem(LANG_KEY);
      if (v && dicts[v]) return v;
    } catch (e) { /* bez úložiska platí predvolený jazyk */ }
    return DEFAULT;
  }

  function setLang(code) {
    if (!dicts[code]) return;
    try { localStorage.setItem(LANG_KEY, code); } catch (e) { /* platí aspoň do zatvorenia */ }
  }

  const fill = (s, vars) => String(s).replace(/\{(\w+)\}/g, (m, k) => (vars && k in vars ? vars[k] : m));

  // t('kľúč', { premenné }) – s fallbackom na slovenčinu a nakoniec na samotný kľúč
  function t(key, vars) {
    const lang = getLang();
    let v = dicts[lang] && dicts[lang][key];
    if (v === undefined) v = dicts[DEFAULT] && dicts[DEFAULT][key];
    if (v === undefined) return key;
    if (typeof v === 'object') {
      const n = vars && vars.n !== undefined ? vars.n : 0;
      let cat = 'other';
      try { cat = new Intl.PluralRules(dicts[lang] ? dicts[lang]._htmlLang || lang : lang).select(n); } catch (e) { /* bez Intl */ }
      v = v[cat] !== undefined ? v[cat] : v.other;
    }
    return fill(v, vars);
  }

  // Preklad názvu a opisu úrovne, skupiny alebo témy; inak zdrojové (slovenské) hodnoty.
  function named(kind, id, fallback) {
    const d = dicts[getLang()];
    const v = d && d[kind] && d[kind][id];
    if (!v) return fallback;
    return Array.isArray(v) ? { title: v[0] || fallback.title, desc: v[1] || fallback.desc } : { title: v, desc: fallback.desc };
  }

  window.I18N = {
    add, t, getLang, setLang, named,
    languages: () => order.slice(),
    info: (code) => ({ flag: dicts[code]._flag, name: dicts[code]._name, htmlLang: dicts[code]._htmlLang || code }),
    dict: (code) => dicts[code],
    DEFAULT
  };
})();
