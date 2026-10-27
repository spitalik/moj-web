/* Statické obrázky k teórii lekcií 1.–4. ročníka SŠ (inline SVG). Každý obrázok je FIGURES.register bez posuvníkov;
   ATTACH určuje, v ktorých lekciách sa zobrazí, a pripojí sa na koniec ich teórie. */
(function () {
  'use strict';

  const { n1 } = FIGURES.util;

  // šípka z (x1,y1) do (x2,y2) v pixeloch SVG
  const arr = (x1, y1, x2, y2, cls = 'f-accent') => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 9;
    const back = (k) => `${n1(x2 - h * Math.cos(a + k))},${n1(y2 - h * Math.sin(a + k))}`;
    return `<line class="${cls}" x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}"/>
      <polygon class="f-solid" points="${n1(x2)},${n1(y2)} ${back(0.45)} ${back(-0.45)}"/>`;
  };

  // lomená čiara y = fy(x) pre x od x0 do x1
  const curve = (x0, x1, step, fy) => {
    let d = '';
    for (let x = x0; x <= x1; x += step) d += `${x === x0 ? 'M' : 'L'}${x} ${n1(fy(x))}`;
    return d;
  };

  /* ---------- pohyb ---------- */

  FIGURES.register('s1s4-priemerna-rychlost', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Priemerná rýchlosť v grafe v–t">
      <path class="f-line" d="M60 20 V200 H360"/>
      <rect class="f-fill f-outline" x="60" y="72" width="140" height="128"/>
      <rect class="f-fill2 f-outline2" x="200" y="136" width="140" height="64"/>
      <line class="f-dash" x1="60" y1="104" x2="350" y2="104"/>
      <text class="f-text" x="110" y="130">20 km/h</text>
      <text class="f-text" x="250" y="170">10 km/h</text>
      <text class="f-small" x="250" y="96">v priem. = 15 km/h</text>
      <text class="f-small" x="200" y="28" text-anchor="middle">plocha = dráha 60 km za 4 h</text>
      <text class="f-small" x="48" y="76" text-anchor="end">20</text>
      <text class="f-small" x="48" y="140" text-anchor="end">10</text>
      <text class="f-small" x="60" y="218" text-anchor="middle">0</text>
      <text class="f-small" x="200" y="218" text-anchor="middle">2</text>
      <text class="f-small" x="340" y="218" text-anchor="middle">4</text>
      <text class="f-small" x="352" y="216">t (h)</text>
      <text class="f-small" x="66" y="16">v (km/h)</text></svg>`
  });

  FIGURES.register('s1s4-v-t-zrychlenie', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Rovnomerne zrýchlený pohyb v grafe v–t">
      <path class="f-line" d="M60 30 V200 H370"/>
      <path class="f-fill f-outline" d="M60 200 L60 184 L340 88 L340 200 Z"/>
      <path class="f-accent" fill="none" d="M60 184 L340 88"/>
      <text class="f-math" x="46" y="188" text-anchor="end">v₀</text>
      <text class="f-math" x="350" y="82">v</text>
      <text class="f-text" x="110" y="184">plocha = dráha s</text>
      <text class="f-small" x="200" y="150">sklon = zrýchlenie a</text>
      <text class="f-small" x="352" y="216">t (s)</text>
      <text class="f-small" x="66" y="20">v (m/s)</text></svg>`
  });

  /* ---------- sily ---------- */

  FIGURES.register('s1s4-akcia-reakcia', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Sily akcie a reakcie medzi dvoma telesami">
      <rect class="f-fill f-outline" x="40" y="80" width="100" height="60" rx="6"/>
      <rect class="f-fill2 f-outline2" x="280" y="80" width="100" height="60" rx="6"/>
      <text class="f-text" x="90" y="115" text-anchor="middle">A</text>
      <text class="f-text" x="330" y="115" text-anchor="middle">B</text>
      ${arr(200, 102, 276, 102, 'f-ok')}
      ${arr(220, 128, 144, 128, 'f-warn')}
      <text class="f-math" x="238" y="94" text-anchor="middle">F_AB</text>
      <text class="f-math" x="182" y="146" text-anchor="middle">F_BA</text>
      <text class="f-small" x="210" y="200" text-anchor="middle">rovnaká veľkosť, opačný smer, rôzne telesá</text></svg>`
  });

  FIGURES.register('s1s4-tiaz-zem-mesiac', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Tiaž telesa rovnakej hmotnosti na Zemi a na Mesiaci">
      <text class="f-text" x="110" y="24" text-anchor="middle">Zem</text>
      <text class="f-text" x="310" y="24" text-anchor="middle">Mesiac</text>
      <rect class="f-fill f-outline" x="80" y="36" width="60" height="40"/>
      <rect class="f-fill2 f-outline2" x="280" y="36" width="60" height="40"/>
      <text class="f-math" x="110" y="60" text-anchor="middle">m</text>
      <text class="f-math" x="310" y="60" text-anchor="middle">m</text>
      ${arr(110, 80, 110, 174, 'f-accent')}
      ${arr(310, 80, 310, 96, 'f-accent')}
      <text class="f-math" x="124" y="130">F_g</text>
      <text class="f-math" x="324" y="92">F_g</text>
      <text class="f-small" x="110" y="200" text-anchor="middle">g ≈ 9,81 m/s²</text>
      <text class="f-small" x="310" y="200" text-anchor="middle">g ≈ 1,62 m/s²</text></svg>`
  });

  FIGURES.register('s1s4-hybnost', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Hybnosti dvoch telies po odtlačení sú opačné">
      <text class="f-math" x="210" y="36" text-anchor="middle">p₁ + p₂ = 0</text>
      <rect class="f-fill f-outline" x="110" y="120" width="40" height="40" rx="4"/>
      <rect class="f-fill2 f-outline2" x="230" y="110" width="80" height="60" rx="6"/>
      <text class="f-math" x="130" y="145" text-anchor="middle">m₁</text>
      <text class="f-math" x="270" y="145" text-anchor="middle">m₂</text>
      ${arr(110, 140, 30, 140, 'f-warn')}
      ${arr(310, 140, 350, 140, 'f-ok')}
      <text class="f-math" x="70" y="128" text-anchor="middle">v₁</text>
      <text class="f-math" x="330" y="128" text-anchor="middle">v₂</text>
      <text class="f-small" x="210" y="200" text-anchor="middle">ľahší sa rozbehne rýchlejšie, ťažší pomalšie</text></svg>`
  });

  /* ---------- teplo a látky ---------- */

  FIGURES.register('s1s4-brownov-pohyb', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Brownov pohyb: nepravidelná dráha zrnka">
      <g class="f-dot">
        <circle cx="60" cy="60" r="4"/><circle cx="90" cy="40" r="4"/><circle cx="230" cy="30" r="4"/>
        <circle cx="330" cy="30" r="4"/><circle cx="160" cy="40" r="4"/><circle cx="20" cy="200" r="4"/>
        <circle cx="120" cy="200" r="4"/><circle cx="190" cy="200" r="4"/><circle cx="260" cy="210" r="4"/>
        <circle cx="300" cy="190" r="4"/><circle cx="360" cy="160" r="4"/><circle cx="400" cy="120" r="4"/>
      </g>
      <path class="f-accent" fill="none" d="M40 150 L70 110 L95 160 L125 90 L150 140 L175 70 L205 120 L230 160 L255 100 L280 130 L310 60 L340 110 L370 80"/>
      <circle class="f-fill2 f-outline2" cx="370" cy="80" r="7"/>
      <text class="f-small" x="370" y="64" text-anchor="middle">zrnko</text>
      <text class="f-small" x="210" y="232" text-anchor="middle">molekuly kvapaliny narážajú zo všetkých strán</text></svg>`
  });

  FIGURES.register('s1s4-merna-kapacita', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Merná tepelná kapacita vody a hliníka">
      <path class="f-line" d="M60 200 H380"/>
      <rect class="f-fill2 f-outline2" x="110" y="32" width="80" height="168"/>
      <rect class="f-fill3 f-outline3" x="250" y="164" width="80" height="36"/>
      <text class="f-small" x="150" y="24" text-anchor="middle">c = 4200 J/(kg·K)</text>
      <text class="f-small" x="290" y="158" text-anchor="middle">c = 900 J/(kg·K)</text>
      <text class="f-text" x="150" y="222" text-anchor="middle">voda</text>
      <text class="f-text" x="290" y="222" text-anchor="middle">hliník</text></svg>`
  });

  FIGURES.register('s1s4-ohrev-latky', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Ohrev látky od ľadu po paru: teplota v závislosti od dodaného tepla">
      <path class="f-line" d="M50 30 V200 H390"/>
      <path class="f-accent" fill="none" d="M60 190 L100 170 L170 170 L240 70 L330 70 L370 40"/>
      <text class="f-small" x="44" y="174" text-anchor="end">0</text>
      <text class="f-small" x="44" y="74" text-anchor="end">100</text>
      <text class="f-small" x="56" y="22">T (°C)</text>
      <text class="f-small" x="390" y="218" text-anchor="end">Q (dodané teplo)</text>
      <text class="f-small" x="135" y="160" text-anchor="middle">topenie</text>
      <text class="f-small" x="190" y="120" text-anchor="end">voda</text>
      <text class="f-small" x="285" y="58" text-anchor="middle">vyparovanie</text>
      <text class="f-small" x="355" y="100" text-anchor="middle">para</text></svg>`
  });

  FIGURES.register('s1s4-izoterma', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Izotermický dej v diagrame p–V">
      <path class="f-line" d="M60 30 V200 H370"/>
      <path class="f-accent" fill="none" d="${curve(120, 360, 4, (x) => 200 - 160 / ((x - 60) / 60))}"/>
      <line class="f-dash" x1="60" y1="160" x2="300" y2="160"/>
      <line class="f-dash" x1="300" y1="160" x2="300" y2="200"/>
      <line class="f-dash" x1="60" y1="120" x2="180" y2="120"/>
      <line class="f-dash" x1="180" y1="120" x2="180" y2="200"/>
      <circle class="f-dot" cx="300" cy="160" r="4"/>
      <circle class="f-dot" cx="180" cy="120" r="4"/>
      <text class="f-math" x="52" y="164" text-anchor="end">p₁</text>
      <text class="f-math" x="52" y="124" text-anchor="end">p₂</text>
      <text class="f-math" x="300" y="218" text-anchor="middle">V₁</text>
      <text class="f-math" x="180" y="218" text-anchor="middle">V₂</text>
      <text class="f-math" x="368" y="216">V</text>
      <text class="f-math" x="66" y="20">p</text>
      <text class="f-text" x="230" y="60">p·V = konšt.</text></svg>`
  });

  FIGURES.register('s1s4-tepelny-motor', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Schéma tepelného motora">
      <rect class="f-fill f-outline" x="150" y="16" width="120" height="44" rx="6"/>
      <text class="f-text" x="210" y="43" text-anchor="middle">ohrievač T₁</text>
      <circle class="f-fill3 f-outline3" cx="210" cy="120" r="30"/>
      <text class="f-small" x="210" y="124" text-anchor="middle">motor</text>
      <rect class="f-fill2 f-outline2" x="150" y="190" width="120" height="40" rx="6"/>
      <text class="f-text" x="210" y="215" text-anchor="middle">chladič T₂</text>
      ${arr(210, 62, 210, 88, 'f-warn')}
      ${arr(210, 152, 210, 188, 'f-ok')}
      ${arr(242, 120, 360, 120, 'f-accent')}
      <text class="f-math" x="222" y="80">Q₁</text>
      <text class="f-math" x="222" y="176">Q₂</text>
      <text class="f-math" x="300" y="110" text-anchor="middle">A</text></svg>`
  });

  /* ---------- kmitanie ---------- */

  FIGURES.register('s1s4-kmitanie', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Harmonický kmit: výchylka v čase">
      <path class="f-line" d="M40 20 V220 M40 120 H400"/>
      <line class="f-dash" x1="40" y1="60" x2="400" y2="60"/>
      <line class="f-dash" x1="40" y1="180" x2="400" y2="180"/>
      <path class="f-accent" fill="none" d="${curve(40, 400, 2, (x) => 120 - 60 * Math.sin(2 * Math.PI * (x - 40) / 180))}"/>
      <circle class="f-dot" cx="85" cy="60" r="4"/>
      <text class="f-math" x="50" y="54">A</text>
      <line class="f-thin" x1="40" y1="200" x2="220" y2="200"/>
      <line class="f-thin" x1="40" y1="194" x2="40" y2="206"/>
      <line class="f-thin" x1="220" y1="194" x2="220" y2="206"/>
      <text class="f-math" x="130" y="216" text-anchor="middle">T</text>
      <text class="f-math" x="48" y="30">y</text>
      <text class="f-math" x="392" y="112">t</text></svg>`
  });

  /* ---------- elektrina ---------- */

  FIGURES.register('s1s4-pole-naboja', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Intenzita elektrického poľa bodového náboja">
      <circle class="f-dash" cx="150" cy="120" r="50" fill="none"/>
      <circle class="f-dash" cx="150" cy="120" r="100" fill="none"/>
      <circle class="f-fill2 f-outline2" cx="150" cy="120" r="18"/>
      <text class="f-math" x="150" y="125" text-anchor="middle">+Q</text>
      ${arr(150, 70, 150, 30)}
      ${arr(150, 20, 150, 10)}
      ${arr(150, 170, 150, 210)}
      ${arr(150, 220, 150, 230)}
      ${arr(200, 120, 240, 120)}
      ${arr(250, 120, 260, 120)}
      ${arr(100, 120, 60, 120)}
      ${arr(50, 120, 40, 120)}
      <text class="f-small" x="220" y="108" text-anchor="middle">E</text>
      <text class="f-small" x="255" y="108" text-anchor="middle">E/4</text>
      <text class="f-small" x="300" y="30" text-anchor="middle">r → 2r: E klesne na štvrtinu</text></svg>`
  });

  FIGURES.register('s1s4-jednoduchy-obvod', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Jednoduchý elektrický obvod so zdrojom a rezistorom">
      <path class="f-line" d="M60 50 H230 M290 50 H360 V190 H60 V118 M60 106 V50"/>
      <line class="f-solid" x1="44" y1="106" x2="76" y2="106" stroke-width="3"/>
      <line class="f-solid" x1="52" y1="118" x2="68" y2="118" stroke-width="3"/>
      <rect class="f-fill f-outline" x="230" y="38" width="60" height="24"/>
      <text class="f-math" x="32" y="112" text-anchor="end">U</text>
      <text class="f-math" x="84" y="110">+</text>
      <text class="f-math" x="84" y="124">−</text>
      <text class="f-math" x="260" y="30" text-anchor="middle">R</text>
      ${arr(100, 50, 170, 50, 'f-ok')}
      <text class="f-math" x="135" y="40" text-anchor="middle">I</text>
      <text class="f-small" x="210" y="222" text-anchor="middle">prúd tečie od + k −</text></svg>`
  });

  FIGURES.register('s1s4-transformator', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Schéma transformátora so železným jadrom a dvoma vinutiami">
      <rect class="f-line" fill="none" x="120" y="40" width="180" height="160"/>
      <rect class="f-fill f-outline" x="100" y="70" width="20" height="100"/>
      <rect class="f-fill2 f-outline2" x="300" y="70" width="20" height="100"/>
      <text class="f-small" x="110" y="60" text-anchor="middle">N₁ závitov</text>
      <text class="f-small" x="310" y="60" text-anchor="middle">N₂ závitov</text>
      <text class="f-small" x="210" y="120" text-anchor="middle">železné jadro</text>
      ${arr(30, 120, 96, 120, 'f-ok')}
      ${arr(324, 120, 392, 120, 'f-ok')}
      <text class="f-math" x="30" y="110">U₁</text>
      <text class="f-math" x="340" y="110">U₂</text></svg>`
  });

  FIGURES.register('s1s4-striedavy-prud', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Sínusové striedavé napätie v čase">
      <path class="f-line" d="M40 20 V200 M40 120 H400"/>
      <line class="f-dash" x1="40" y1="40" x2="400" y2="40"/>
      <line class="f-thin" x1="40" y1="63" x2="400" y2="63"/>
      <path class="f-accent" fill="none" d="${curve(40, 400, 2, (x) => 120 - 80 * Math.sin(2 * Math.PI * (x - 40) / 200))}"/>
      <text class="f-math" x="48" y="34">U_max</text>
      <text class="f-math" x="380" y="58">U_ef</text>
      <line class="f-thin" x1="40" y1="220" x2="240" y2="220"/>
      <line class="f-thin" x1="40" y1="214" x2="40" y2="226"/>
      <line class="f-thin" x1="240" y1="214" x2="240" y2="226"/>
      <text class="f-math" x="140" y="236" text-anchor="middle">T</text>
      <text class="f-math" x="392" y="112">t</text></svg>`
  });

  /* ---------- svetlo ---------- */

  FIGURES.register('s1s4-sosovka-2f', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Zobrazenie spojnou šošovkou, predmet v dvojnásobnej ohniskovej vzdialenosti">
      <line class="f-dash" x1="20" y1="130" x2="400" y2="130"/>
      <path class="f-fill2 f-outline2" d="M210 40 Q232 130 210 220 Q188 130 210 40 Z"/>
      <circle class="f-dot" cx="140" cy="130" r="3"/>
      <circle class="f-dot" cx="280" cy="130" r="3"/>
      <text class="f-math" x="140" y="148" text-anchor="middle">F</text>
      <text class="f-math" x="280" y="148" text-anchor="middle">F′</text>
      <text class="f-math" x="70" y="148" text-anchor="middle">2F</text>
      <text class="f-math" x="350" y="118" text-anchor="middle">2F′</text>
      ${arr(70, 130, 70, 70, 'f-ok')}
      ${arr(350, 130, 350, 190, 'f-warn')}
      <path class="f-accent" fill="none" d="M70 70 L210 70 L350 190"/>
      <path class="f-accent" fill="none" d="M70 70 L350 190"/>
      <text class="f-small" x="70" y="58" text-anchor="middle">predmet</text>
      <text class="f-small" x="350" y="210" text-anchor="middle">obraz</text>
      <text class="f-small" x="210" y="20" text-anchor="middle">predmet v dvojnásobnej ohniskovej vzdialenosti</text></svg>`
  });

  FIGURES.register('s1s4-interferencia', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Interferencia svetla na dvojitej štrbine">
      <circle class="f-fill3 f-outline3" cx="40" cy="120" r="6"/>
      <text class="f-small" x="40" y="144" text-anchor="middle">zdroj</text>
      <rect class="f-fill f-outline" x="116" y="30" width="8" height="78"/>
      <rect class="f-fill f-outline" x="116" y="132" width="8" height="78"/>
      <line class="f-thin" x1="124" y1="108" x2="340" y2="120"/>
      <line class="f-thin" x1="124" y1="132" x2="340" y2="120"/>
      <line class="f-thin" x1="124" y1="108" x2="340" y2="64"/>
      <line class="f-thin" x1="124" y1="132" x2="340" y2="64"/>
      <rect class="f-fill2 f-outline2" x="340" y="30" width="8" height="180"/>
      <rect class="f-fill3" x="352" y="31" width="20" height="10"/>
      <rect class="f-fill3" x="352" y="59" width="20" height="10"/>
      <rect class="f-fill3" x="352" y="87" width="20" height="10"/>
      <rect class="f-fill3" x="352" y="115" width="20" height="10"/>
      <rect class="f-fill3" x="352" y="143" width="20" height="10"/>
      <rect class="f-fill3" x="352" y="171" width="20" height="10"/>
      <rect class="f-fill3" x="352" y="199" width="20" height="10"/>
      <text class="f-small" x="100" y="120" text-anchor="end">d</text>
      <line class="f-thin" x1="124" y1="222" x2="340" y2="222"/>
      <text class="f-math" x="232" y="236" text-anchor="middle">L</text>
      <text class="f-small" x="120" y="22" text-anchor="middle">dvojitá štrbina</text>
      <text class="f-small" x="344" y="22" text-anchor="middle">tienidlo</text></svg>`
  });

  FIGURES.register('s1s4-spektrum', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Spektrum elektromagnetického žiarenia">
      <text class="f-small" x="20" y="78">dlhšie vlny</text>
      <text class="f-small" x="398" y="78" text-anchor="end">kratšie vlny</text>
      <rect class="f-fill f-outline" x="20" y="90" width="54" height="30"/>
      <rect class="f-fill2 f-outline2" x="74" y="90" width="54" height="30"/>
      <rect class="f-fill3 f-outline3" x="128" y="90" width="54" height="30"/>
      <rect class="f-fill f-outline" x="182" y="90" width="54" height="30"/>
      <rect class="f-fill2 f-outline2" x="236" y="90" width="54" height="30"/>
      <rect class="f-fill3 f-outline3" x="290" y="90" width="54" height="30"/>
      <rect class="f-fill f-outline" x="344" y="90" width="54" height="30"/>
      <text class="f-small" x="47" y="109" text-anchor="middle">rádio</text>
      <text class="f-small" x="101" y="109" text-anchor="middle">mikrov.</text>
      <text class="f-small" x="155" y="109" text-anchor="middle">IR</text>
      <text class="f-small" x="209" y="109" text-anchor="middle">VIS</text>
      <text class="f-small" x="263" y="109" text-anchor="middle">UV</text>
      <text class="f-small" x="317" y="109" text-anchor="middle">RTG</text>
      <text class="f-small" x="371" y="109" text-anchor="middle">gama</text>
      <text class="f-small" x="74" y="140" text-anchor="middle">1 m</text>
      <text class="f-small" x="128" y="140" text-anchor="middle">1 mm</text>
      <text class="f-small" x="182" y="140" text-anchor="middle">750 nm</text>
      <text class="f-small" x="236" y="140" text-anchor="middle">380 nm</text>
      <text class="f-small" x="290" y="140" text-anchor="middle">10 nm</text>
      <text class="f-small" x="344" y="140" text-anchor="middle">0,01 nm</text>
      ${arr(40, 180, 380, 180, 'f-ok')}
      <text class="f-small" x="210" y="204" text-anchor="middle">rastie frekvencia a energia fotónu</text></svg>`
  });

  /* ---------- rádioaktivita a jadro ---------- */

  FIGURES.register('s1s4-polcas-rozpadu', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Pokles počtu nerozpadnutých jadier s polčasom rozpadu">
      <path class="f-line" d="M60 30 V200 H360"/>
      <path class="f-accent" fill="none" d="${curve(60, 340, 2, (x) => 200 - 160 * Math.pow(2, -(x - 60) / 70))}"/>
      <line class="f-dash" x1="60" y1="120" x2="130" y2="120"/>
      <line class="f-dash" x1="130" y1="120" x2="130" y2="200"/>
      <line class="f-dash" x1="60" y1="160" x2="200" y2="160"/>
      <line class="f-dash" x1="200" y1="160" x2="200" y2="200"/>
      <circle class="f-dot" cx="130" cy="120" r="4"/>
      <circle class="f-dot" cx="200" cy="160" r="4"/>
      <text class="f-math" x="52" y="44" text-anchor="end">N₀</text>
      <text class="f-math" x="52" y="124" text-anchor="end">N₀/2</text>
      <text class="f-math" x="52" y="164" text-anchor="end">N₀/4</text>
      <text class="f-small" x="130" y="218" text-anchor="middle">T½</text>
      <text class="f-small" x="200" y="218" text-anchor="middle">2T½</text>
      <text class="f-small" x="270" y="218" text-anchor="middle">3T½</text>
      <text class="f-math" x="352" y="216">t</text>
      <text class="f-math" x="66" y="22">N</text></svg>`
  });

  FIGURES.register('s1s4-vazbova-energia', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Väzbová energia na nukleón v závislosti od nukleónového čísla">
      <path class="f-line" d="M40 20 V200 H400"/>
      <path class="f-accent" fill="none" d="M40 170 C 80 60, 120 40, 170 40 C 230 40, 300 100, 380 150"/>
      <circle class="f-dot" cx="170" cy="40" r="4"/>
      <text class="f-small" x="170" y="28" text-anchor="middle">najpevnejšie (okolo Fe)</text>
      <text class="f-math" x="48" y="14">E_v/A</text>
      <text class="f-small" x="390" y="218" text-anchor="end">A (nukleónové číslo)</text>
      ${arr(70, 186, 150, 186, 'f-ok')}
      ${arr(370, 186, 192, 186, 'f-warn')}
      <text class="f-small" x="110" y="178" text-anchor="middle">fúzia ľahkých</text>
      <text class="f-small" x="290" y="178" text-anchor="middle">štiepenie ťažkých</text></svg>`
  });

  /* ---------- astrofyzika ---------- */

  FIGURES.register('s1s4-paralaxa', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Paralaxa hviezdy pri pohybe Zeme okolo Slnka">
      <line class="f-dash" x1="60" y1="40" x2="60" y2="200"/>
      <circle class="f-fill3 f-outline3" cx="60" cy="120" r="10"/>
      <text class="f-small" x="76" y="110">Slnko</text>
      <text class="f-small" x="30" y="124" text-anchor="end">2 AU</text>
      <circle class="f-fill2 f-outline2" cx="60" cy="40" r="8"/>
      <text class="f-small" x="76" y="36">Zem v januári</text>
      <circle class="f-fill2 f-outline2" cx="60" cy="200" r="8"/>
      <text class="f-small" x="76" y="224">Zem v júli</text>
      <line class="f-accent" x1="60" y1="40" x2="360" y2="120"/>
      <line class="f-ok" x1="60" y1="200" x2="360" y2="120"/>
      <circle class="f-solid" cx="360" cy="120" r="6"/>
      <text class="f-small" x="360" y="104" text-anchor="middle">hviezda</text></svg>`
  });

  /* ---------- pripojenie k lekciám ---------- */

  // lekcia → id obrázka; obrázok sa doplní na koniec teórie lekcie
  const ATTACH = {
    's1-pohyb': 's1s4-priemerna-rychlost',
    's1-zrychlenie': 's1s4-v-t-zrychlenie',
    's1-newton': 's1s4-akcia-reakcia',
    's1-gravitacia': 's1s4-tiaz-zem-mesiac',
    's1-zakony-zachovania': 's1s4-hybnost',
    's2-molekuly': 's1s4-brownov-pohyb',
    's2-teplo': 's1s4-merna-kapacita',
    's2-skupenstva': 's1s4-ohrev-latky',
    's2-ideal': 's1s4-izoterma',
    's2-termo': 's1s4-tepelny-motor',
    's2-kmitanie': 's1s4-kmitanie',
    's3-naboj': 's1s4-pole-naboja',
    's3-prud-napatie': 's1s4-jednoduchy-obvod',
    's3-transformator': 's1s4-transformator',
    's3-striedavy': 's1s4-striedavy-prud',
    's3-sosovky': 's1s4-sosovka-2f',
    's4-interferencia': 's1s4-interferencia',
    's4-ziarenie': 's1s4-spektrum',
    's4-radioaktivita': 's1s4-polcas-rozpadu',
    's4-jadro': 's1s4-vazbova-energia',
    's4-astrofyzika': 's1s4-paralaxa'
  };

  // popisky pod obrázkami
  const CAPTIONS = {
    's1s4-priemerna-rychlost': 'Plocha pod grafom v–t je dráha. Priemerná rýchlosť je celková dráha delená celkovým časom, nie priemer rýchlostí.',
    's1s4-v-t-zrychlenie': 'Sklon grafu v–t je zrýchlenie a plocha pod grafom je dráha. Pri rovnomerne zrýchlenom pohybe je graf priamka.',
    's1s4-akcia-reakcia': 'Sily akcie a reakcie majú rovnakú veľkosť a opačný smer, ale pôsobia na rôzne telesá, preto sa neodčítavajú.',
    's1s4-tiaz-zem-mesiac': 'Rovnaká hmotnosť má na Mesiaci asi šesťkrát menšiu tiaž, lebo tiažové zrýchlenie je tam menšie.',
    's1s4-hybnost': 'Súčet hybností sústavy zostáva nulový: ľahšie teleso sa pohybuje rýchlejšie, ťažšie pomalšie.',
    's1s4-brownov-pohyb': 'Brownov pohyb: zrnko sa trasie nepravidelne, lebo ho zo všetkých strán narážajú molekuly kvapaliny.',
    's1s4-merna-kapacita': 'Pri rovnakej hmotnosti a rovnakej zmene teploty potrebuje voda takmer päťkrát viac tepla než hliník.',
    's1s4-ohrev-latky': 'Pri topení a vyparovaní teplota stojí: dodané teplo sa spotrebuje na premenu skupenstva, nie na ohrev.',
    's1s4-izoterma': 'Pri stálej teplote je súčin p·V stály: keď objem klesne na polovicu, tlak sa zdvojnásobí.',
    's1s4-tepelny-motor': 'Motor prijme teplo Q₁ z ohrievača, časť premení na prácu A a zvyšok Q₂ odovzdá chladiču. Účinnosť A/Q₁ je menšia než 1.',
    's1s4-kmitanie': 'Harmonický kmit: amplitúda A je najväčšia výchylka, perióda T je čas jedného kmitu.',
    's1s4-pole-naboja': 'Intenzita poľa bodového náboja klesá s druhou mocninou vzdialenosti: pri dvojnásobnej vzdialenosti je štvrtinová.',
    's1s4-jednoduchy-obvod': 'Prúd tečie z kladného pólu zdroja cez rezistor späť do záporného pólu. Napätie U je na svorkách zdroja.',
    's1s4-transformator': 'Ideálny transformátor: napätia sa menia v pomere počtu závitov, U₁/U₂ = N₁/N₂.',
    's1s4-striedavy-prud': 'Sínusové napätie: efektívna hodnota je amplitúda delená √2. Perióda je T = 1/f, pri 50 Hz je 0,02 s.',
    's1s4-sosovka-2f': 'Predmet v dvojnásobnej ohniskovej vzdialenosti dá skutočný, prevrátený a rovnako veľký obraz na druhej strane šošovky.',
    's1s4-interferencia': 'Svetlé pruhy vznikajú v smeroch, kde je dráhový rozdiel celočíselným násobkom λ: yk = k·λL/d.',
    's1s4-spektrum': 'Elektromagnetické žiarenie je jeden jav s rôznou vlnovou dĺžkou. Viditeľné svetlo je len úzky pás.',
    's1s4-polcas-rozpadu': 'Po každom polčase klesne počet nerozpadnutých jadier na polovicu: úbytok je geometrický, nie lineárny.',
    's1s4-vazbova-energia': 'Väzbová energia na nukleón je najväčšia okolo železa, preto štiepenie ťažkých aj fúzia ľahkých jadier uvoľňujú energiu.',
    's1s4-paralaxa': 'Paralaxa: hviezda sa z dvoch miest dráhy Zeme javí posunutá voči vzdialenejším hviezdam. Vzdialenosť v parsekoch je d = 1/p.'
  };

  LESSONS.forEach((l) => {
    const fig = ATTACH[l.id];
    if (fig) l.theory.push({ fig, caption: CAPTIONS[fig] });
  });
})();
