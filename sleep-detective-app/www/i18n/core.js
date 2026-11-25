/* Sleep Detective – jadro prekladov. Slovníky sú v i18n/<kód>.js a registrujú sa cez SDI18N.add().
   Zdrojový jazyk je slovenčina: chýbajúci kľúč sa doplní zo slovenčiny, inak sa vráti samotný kľúč.
   Hodnota môže byť:
     - text s premennými {name} → nahradia sa hodnotami z vars,
     - pole (napr. možnosti otázky) → vráti sa celé,
     - objekt pre množné číslo { one, few, many, other } → vyberie sa podľa vars.n
       (Intl.PluralRules jazyka; chýbajúca kategória = other). */
(function (root) {
  'use strict';

  var dicts = {};
  var ORDER = ['sk', 'en', 'es', 'pt', 'de', 'fr', 'it', 'ru', 'tr', 'ja', 'ko', 'zh'];   // ako v Health Companion
  var DEFAULT = 'en';   // po inštalácii je appka v angličtine
  var active = DEFAULT;
  var rules = {};

  function add(code, dict) { dicts[code] = dict; }
  function has(code) { return !!dicts[code]; }
  function setLang(code) { if (dicts[code]) active = code; return active; }
  function lang() { return active; }
  function htmlLang(code) { var d = dicts[code || active] || {}; return d._htmlLang || code || active; }

  function plural(n) {
    var l = htmlLang();
    try {
      if (!rules[l]) rules[l] = new Intl.PluralRules(l);
      return rules[l].select(n);
    } catch (e) { return n === 1 ? 'one' : 'other'; }
  }

  function lookup(key) {
    var d = dicts[active];
    if (d && d[key] != null) return d[key];
    if (dicts.sk && dicts.sk[key] != null) return dicts.sk[key];
    return null;
  }

  function t(key, vars) {
    var s = lookup(key);
    if (s == null) return key;
    if (Array.isArray(s)) return s;
    if (typeof s === 'object') {
      var n = vars && typeof vars.n === 'number' ? vars.n : 0;
      var c = plural(n);
      s = s[c] != null ? s[c] : s.other;
    }
    s = String(s);
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return s;
  }

  function info(code) {
    var d = dicts[code] || {};
    return { code: code, flag: d._flag || '', name: d._name || code, htmlLang: d._htmlLang || code };
  }
  function languages() { return ORDER.filter(function (c) { return !!dicts[c]; }).map(info); }
  function dict(code) { return dicts[code] || null; }

  root.SDI18N = { add: add, has: has, setLang: setLang, lang: lang, htmlLang: htmlLang, t: t, info: info,
    languages: languages, dict: dict, ORDER: ORDER, DEFAULT: DEFAULT };
})(typeof self !== 'undefined' ? self : this);
