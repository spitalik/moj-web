/* Jocadium – správanie v natívnej appke (Capacitor: Android, iOS). V prehliadači nerobí nič.
   Načítava ho úvodná stránka (native.js) aj každá hra (../../native.js).

   Systémové tlačidlo Späť v Androide:
   - v hre: návrat na úvodnú stránku knižnice (bez hromadenia histórie),
   - na úvodnej stránke: najprv zavrie otvorené okno (Nastavenia), inak appku odloží do pozadia.
   Úvodná stránka môže zaregistrovať window.jocadiumBack = () => true/false; true = Späť už vybavila. */
(function () {
  'use strict';
  var C = window.Capacitor;
  if (!C || typeof C.isNativePlatform !== 'function' || !C.isNativePlatform()) return;
  var APP = C.Plugins && C.Plugins.App;
  if (!APP || typeof APP.addListener !== 'function') return;

  var inGame = /\/games\/[^/]+\/(index\.html)?$/.test(location.pathname);

  APP.addListener('backButton', function () {
    if (inGame) {
      // replace: zo hry sa nedá vrátiť „späť“ do hry, ďalšie Späť na úvodnej stránke appku odloží
      location.replace('../../index.html');
      return;
    }
    try { if (typeof window.jocadiumBack === 'function' && window.jocadiumBack()) return; } catch (e) { /* pokračujeme */ }
    if (typeof APP.minimizeApp === 'function') APP.minimizeApp().catch(function () { if (APP.exitApp) APP.exitApp(); });
    else if (APP.exitApp) APP.exitApp();
  });
})();
