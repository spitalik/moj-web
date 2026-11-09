/* Lenivé načítanie ročníkov. Pri štarte sú v LESSONS len záznamy z indexu (js/index-lekcii.js: id, úroveň,
   poradie, názov, opis, témy) – stačia na zoznamy, mapu, prehľad a hľadanie podľa názvu. Celý súbor ročníka
   (teória, príklady, generátory úloh, obrázky) a jeho balík prekladu sa načíta až vtedy, keď ho treba:
     ROCNIKY.ready(ids)       – sú lekcie načítané? (synchrónne)
     ROCNIKY.need(ids)        – Promise, ktorý počká na načítanie súborov s danými lekciami (aj ich závislostí)
     ROCNIKY.needAll()        – všetko (hľadanie v teórii)
     ROCNIKY.switchLang(lang) – po zmene jazyka: balíky prekladu pre už načítané súbory
   Súbor ročníka volá LESSONS.push ako doteraz: záznam z indexu sa doplní na mieste (ten istý objekt),
   takže odkazy, poradie aj APP.lessonById ostanú platné. EXERCISES.has vie o generátoroch z indexu vopred.
   Index obnovuje tools/index_build.js. */
(function () {
  'use strict';

  const IDX = window.LESSON_INDEX;
  if (!IDX) return;
  const CI = window.CONTENT_I18N;
  const fileOf = {};
  Object.entries(IDX.files).forEach(([f, ids]) => ids.forEach((id) => { fileOf[id] = f; }));

  // záznamy z indexu (ak súbor už bol načítaný inak, napr. vo validátore, nechajú sa tak)
  const stubs = {};
  const present = new Set(LESSONS.map((l) => l.id));
  IDX.lessons.forEach((l) => {
    if (present.has(l.id)) return;
    const s = Object.assign({ stub: true }, l);
    stubs[l.id] = s;
    LESSONS.push(s);
  });
  const push0 = Array.prototype.push;
  Object.defineProperty(LESSONS, 'push', {
    value: function (...items) {
      items.forEach((l) => {
        const s = stubs[l.id];
        if (s && s.stub) { delete s.stub; Object.assign(s, l); } else push0.call(this, l);
      });
      return this.length;
    }
  });

  const hasEx = new Set(IDX.ex);
  const has0 = EXERCISES.has;
  EXERCISES.has = (id) => has0(id) || hasEx.has(id);

  // načítanie skriptu (poradie vykonania zachová async = false)
  function script(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve();
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = () => resolve();
      s.onerror = () => { s.remove(); reject(new Error('Nepodarilo sa načítať ' + src)); };
      document.head.appendChild(s);
    });
  }

  const loaded = new Set();      // súbory ročníkov, ktoré sú celé načítané
  const pending = {};            // súbor → Promise
  const curLang = () => I18N.getLang();

  function loadFile(f) {
    if (loaded.has(f)) return Promise.resolve();
    if (!pending[f]) {
      const lang = curLang();
      pending[f] = Promise.all((IDX.deps[f] || []).map(loadFile))
        // balík prekladu a súbor ročníka paralelne; bez prekladu (offline) zostane slovenčina
        .then(() => Promise.all([script(`js/rocniky/${f}.js`), CI.load(lang, f)]))
        .then(() => { loaded.add(f); delete pending[f]; }, (e) => { delete pending[f]; throw e; });
    }
    return pending[f];
  }

  const filesFor = (ids) => [...new Set([].concat(ids || []).map((id) => fileOf[id]).filter(Boolean))];
  const withDeps = (fs) => { const out = new Set(); const add = (f) => { if (out.has(f)) return; out.add(f); (IDX.deps[f] || []).forEach(add); }; fs.forEach(add); return [...out]; };
  const ready = (ids) => withDeps(filesFor(ids)).every((f) => loaded.has(f));
  const need = (ids) => Promise.all(filesFor(ids).map(loadFile));
  const needAll = () => Promise.all(Object.keys(IDX.files).map(loadFile));
  const switchLang = (lang) => {
    setTimeout(prefetch, 3000);
    return Promise.all([CI.load(lang), ...[...loaded].map((f) => CI.load(lang, f))]);
  };

  // Súbory ročníkov má service worker vopred (sw.js ASSETS). Balíky prekladu nie (sú len pre jeden
  // jazyk): keď je prehliadač nečinný, stiahnu sa pre zvolený jazyk cez service worker do jeho vyrovnávacej
  // pamäte (bez spustenia), aby po inštalácii fungovali aj offline. Pri prvej návšteve service worker stránku
  // ešte neovláda – sťahovanie začne, až keď ju prevezme (controllerchange).
  const fetched = new Set();
  let running = false;
  function prefetch() {
    const sw = navigator.serviceWorker;
    if (running || curLang() === CI.SOURCE || !sw) return;
    if (!sw.controller) { sw.addEventListener('controllerchange', () => setTimeout(prefetch, 3000), { once: true }); return; }
    // aj balíky, ktoré stránka načítala hneď (pri prvej návšteve ešte mimo service workera)
    const urls = [...CI.files(curLang()), ...Object.keys(IDX.files).flatMap((f) => CI.files(curLang(), f))].filter((u) => !fetched.has(u));
    if (!urls.length) return;
    running = true;
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 500));
    const next = () => {
      const u = urls.shift();
      if (!u) { running = false; return; }
      fetch(u).then((r) => { if (r.ok) fetched.add(u); }, () => {}).then(() => idle(next));
    };
    idle(next);
  }
  window.addEventListener('load', () => setTimeout(prefetch, 3000));

  window.ROCNIKY = { ready, need, needAll, switchLang, fileOf: (id) => fileOf[id] || null, loaded: () => [...loaded] };
})();
