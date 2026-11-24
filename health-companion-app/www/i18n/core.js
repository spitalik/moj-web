/* Health Companion – jadro prekladov. Slovníky sú v i18n/<kód>.js a registrujú sa cez add().
   Chýbajúci kľúč sa dopĺňa zo slovenčiny (zdrojový jazyk), inak sa vráti samotný kľúč. */
(function (root) {
  'use strict';

  var dicts = {};
  var ORDER = ['sk', 'en', 'es', 'pt', 'de', 'fr', 'it', 'ru', 'tr', 'ja', 'ko', 'zh']; // rovnaké ako v appke math
  var active = 'sk';

  function add(code, dict) { dicts[code] = dict; }

  function setLang(code) {
    if (dicts[code]) active = code;
    return active;
  }

  function lang() { return active; }

  // {name} v texte sa nahradí hodnotou z vars.name
  function t(key, vars) {
    var dict = dicts[active] || {};
    var s = dict[key];
    if (s == null && dicts.sk) s = dicts.sk[key];
    if (s == null) s = key;
    if (vars) {
      s = String(s).replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    }
    return s;
  }

  function info(code) {
    var d = dicts[code] || {};
    return { code: code, flag: d._flag || '', name: d._name || code, htmlLang: d._htmlLang || code };
  }

  function languages() {
    return ORDER.filter(function (c) { return !!dicts[c]; }).map(info);
  }

  var api = { add: add, setLang: setLang, lang: lang, t: t, info: info, languages: languages, ORDER: ORDER };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.HCI18N = api;
})(typeof self !== 'undefined' ? self : this);
