/*!
 * endcard.js — karta s výsledkom príde až po tom, čo si hráč stihne pozrieť,
 * ako to dopadlo.
 *
 * Prečo to existuje: hry v tejto zbierke končili tak, že prekryv s výsledkom
 * zakryl plochu v tom istom snímku, v ktorom hra padla. Výbuch, ktorý sa pri
 * zániku vykreslil, nikto nikdy nevidel, a na doskách, kde je v konečnej
 * pozícii odpoveď (ktorá mína to bola, kade viedla víťazná päťka, aké bolo
 * tajné slovo), zostalo hráčovi len číslo.
 *
 * Použitie:
 *     EndCard.after(1200, function () { overlay.classList.remove('hide'); });
 *
 * Čakanie preskočí ťuknutie alebo klávesa — kto sa pozerať nechce, nečaká.
 * Hra, ktorá sa z konca vie vrátiť (krok späť), zavolá EndCard.cancel().
 */
(function (global) {
  'use strict';

  var timer = null;
  var skip = null;

  function detach() {
    if (!skip) return;
    document.removeEventListener('pointerdown', skip, true);
    document.removeEventListener('keydown', skip, true);
    skip = null;
  }

  var API = {
    after: function (ms, show) {
      API.cancel();
      var done = function () {
        if (timer) { clearTimeout(timer); timer = null; }
        detach();
        try { show(); } catch (e) {}
        // Ťuknutie, ktoré čakanie preskočilo, by inak prešlo rovno na tlačidlo
        // pod prstom a hru by to reštartovalo skôr, než si ju hráč pozrie.
        var b = document.body;
        if (!b) return;
        var prev = b.style.pointerEvents;
        b.style.pointerEvents = 'none';
        setTimeout(function () { b.style.pointerEvents = prev || ''; }, 380);
      };
      skip = done;
      document.addEventListener('pointerdown', done, true);
      document.addEventListener('keydown', done, true);
      timer = setTimeout(done, ms == null ? 1200 : ms);
    },

    cancel: function () {
      if (timer) { clearTimeout(timer); timer = null; }
      detach();
    },

    pending: function () { return !!timer; }
  };

  global.EndCard = API;
})(window);
