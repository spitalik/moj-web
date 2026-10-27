/* Statické obrázky k teórii lekcií vysokoškolských oblastí v1–v4 (inline SVG). Rovnaký vzor ako obrazky.js. */
(function () {
  'use strict';

  const { plane, axes, svg, n1 } = FIGURES.util;

  // šípka z (x1,y1) do (x2,y2) v pixeloch SVG
  const arr = (x1, y1, x2, y2, cls = 'f-accent') => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 9;
    const back = (k) => `${n1(x2 - h * Math.cos(a + k))},${n1(y2 - h * Math.sin(a + k))}`;
    return `<line class="${cls}" x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}"/>
      <polygon class="f-solid" points="${n1(x2)},${n1(y2)} ${back(0.45)} ${back(-0.45)}"/>`;
  };

  // krivka y = fn(x) ako cesta SVG
  const curve = (fn, x0, x1, step = 2) => {
    let d = '';
    for (let x = x0; x <= x1 + 1e-9; x += step) {
      const [px, py] = fn(x);
      d += `${d ? 'L' : 'M'}${n1(px)} ${n1(py)}`;
    }
    return d;
  };

  /* ---------- v1: klasická mechanika ---------- */

  FIGURES.register('v1v4-kinematika-vt', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Graf rýchlosti v čase pri rovnomerne zrýchlenom pohybe">
      <line class="f-line" x1="50" y1="190" x2="390" y2="190"/>
      <line class="f-line" x1="50" y1="190" x2="50" y2="20"/>
      <line class="f-accent" x1="50" y1="170" x2="350" y2="50"/>
      <line class="f-dash" x1="50" y1="110" x2="200" y2="110"/>
      <line class="f-dash" x1="200" y1="110" x2="200" y2="190"/>
      <circle class="f-dot" cx="200" cy="110" r="5"/>
      <text class="f-small" x="40" y="174" text-anchor="end">v₀</text>
      <text class="f-small" x="56" y="30">v (m/s)</text>
      <text class="f-small" x="388" y="208" text-anchor="end">t (s)</text>
      <text class="f-math" x="250" y="40">v = v₀ + a·t</text>
      <text class="f-small" x="300" y="140">sklon = a</text></svg>`
  });

  FIGURES.register('v1v4-sily-dve', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Dve sily v opačných smeroch pôsobiace na teleso">
      <line class="f-line" x1="40" y1="150" x2="380" y2="150"/>
      <rect class="f-fill f-outline" x="170" y="100" width="80" height="50"/>
      <text class="f-math" x="210" y="130" text-anchor="middle">m</text>
      ${arr(250, 125, 345, 125, 'f-ok')}
      ${arr(170, 125, 75, 125, 'f-warn')}
      <text class="f-math" x="300" y="115" text-anchor="middle">F₁</text>
      <text class="f-math" x="110" y="115" text-anchor="middle">F₂</text>
      <text class="f-text" x="210" y="185" text-anchor="middle">výslednica F₁ − F₂ smeruje v smere väčšej sily</text></svg>`
  });

  FIGURES.register('v1v4-praca-uhol', {
    draw: () => `<svg viewBox="0 0 420 215" role="img" aria-label="Rozklad sily na zložky pri práci pod uhlom">
      <line class="f-line" x1="40" y1="165" x2="380" y2="165"/>
      <circle class="f-fill2 f-outline2" cx="150" cy="151" r="14"/>
      ${arr(150, 151, 195, 73, 'f-accent')}
      <line class="f-dash" x1="195" y1="73" x2="195" y2="151"/>
      ${arr(164, 151, 195, 151, 'f-ok')}
      <path class="f-thin" fill="none" d="M180 151 A30 30 0 0 0 165 125"/>
      <text class="f-math" x="186" y="134">α</text>
      <text class="f-math" x="208" y="70">F</text>
      <text class="f-small" x="205" y="118">F·sin α</text>
      <text class="f-small" x="180" y="182" text-anchor="middle">F·cos α</text>
      ${arr(150, 200, 330, 200, 'f-accent')}
      <text class="f-math" x="340" y="205">s</text>
      <text class="f-math" x="20" y="30">W = F·s·cos α</text></svg>`
  });

  FIGURES.register('v1v4-gravitacia-r', {
    draw: () => {
      const g = (x) => [60 + 80 * x, 210 - 147.15 / (x * x)];
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Gravitačné zrýchlenie klesá s druhou mocninou vzdialenosti">
      <path class="f-line" d="M60 20 V210 H400"/>
      <path class="f-accent" fill="none" d="${curve(g, 1, 4, 0.05)}"/>
      <line class="f-dash" x1="140" y1="63" x2="140" y2="210"/>
      <line class="f-dash" x1="220" y1="173" x2="220" y2="210"/>
      <line class="f-dash" x1="300" y1="194" x2="300" y2="210"/>
      <circle class="f-dot" cx="140" cy="63" r="5"/>
      <circle class="f-dot" cx="220" cy="173" r="5"/>
      <circle class="f-dot" cx="300" cy="194" r="5"/>
      <text class="f-small" x="140" y="226" text-anchor="middle">R</text>
      <text class="f-small" x="220" y="226" text-anchor="middle">2R</text>
      <text class="f-small" x="300" y="226" text-anchor="middle">3R</text>
      <text class="f-small" x="392" y="206" text-anchor="end">r</text>
      <text class="f-small" x="66" y="30">g (m/s²)</text>
      <text class="f-small" x="150" y="52">g(R) ≈ 9,81 m/s²</text>
      <text class="f-small" x="232" y="158">g(2R) = g/4</text>
      <text class="f-small" x="320" y="182">g(3R) = g/9</text>
      <text class="f-math" x="250" y="40">g ~ 1/r²</text></svg>`;
    }
  });

  FIGURES.register('v1v4-rotacia', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Obvodová rýchlosť bodu na rotujúcom kotúči">
      <circle class="f-fill2 f-outline2" cx="170" cy="120" r="90"/>
      <circle class="f-dot" cx="170" cy="120" r="4"/>
      <line class="f-thin" x1="170" y1="120" x2="230.6" y2="85"/>
      <circle class="f-dot" cx="230.6" cy="85" r="4"/>
      ${arr(230.6, 85, 205.6, 41.7, 'f-ok')}
      <path class="f-accent" fill="none" d="M202.9 108 A35 35 0 0 0 182 87.1"/>
      <text class="f-math" x="160" y="88">ω</text>
      <text class="f-math" x="190" y="118">r</text>
      <text class="f-math" x="200" y="30">v</text>
      <text class="f-small" x="162" y="142">O</text>
      <text class="f-math" x="280" y="40">v = ω·r</text>
      <text class="f-math" x="280" y="66">ω = 2π·f</text></svg>`
  });

  FIGURES.register('v1v4-sustava-tazisko', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Dve častice na osi a ich ťažisko">
      <line class="f-line" x1="40" y1="130" x2="390" y2="130"/>
      <line class="f-thin" x1="60" y1="126" x2="60" y2="134"/>
      <line class="f-thin" x1="120" y1="126" x2="120" y2="134"/>
      <line class="f-thin" x1="180" y1="126" x2="180" y2="134"/>
      <line class="f-thin" x1="240" y1="126" x2="240" y2="134"/>
      <line class="f-thin" x1="300" y1="126" x2="300" y2="134"/>
      <text class="f-small" x="60" y="150" text-anchor="middle">0</text>
      <text class="f-small" x="120" y="150" text-anchor="middle">1</text>
      <text class="f-small" x="180" y="150" text-anchor="middle">2</text>
      <text class="f-small" x="240" y="150" text-anchor="middle">3</text>
      <text class="f-small" x="300" y="150" text-anchor="middle">4 m</text>
      <circle class="f-fill f-outline" cx="60" cy="110" r="10"/>
      <circle class="f-fill2 f-outline2" cx="300" cy="110" r="16"/>
      <text class="f-small" x="60" y="82" text-anchor="middle">m₁ = 1 kg</text>
      <text class="f-small" x="300" y="80" text-anchor="middle">m₂ = 3 kg</text>
      <line class="f-warn" x1="240" y1="92" x2="240" y2="122"/>
      <circle class="f-dot" cx="240" cy="130" r="4"/>
      <text class="f-math" x="240" y="88" text-anchor="middle">T</text>
      <text class="f-small" x="240" y="174" text-anchor="middle">x_T = 3 m (bližšie k ťažšej častici)</text></svg>`
  });

  /* ---------- v2: termodynamika a štatistická fyzika ---------- */

  FIGURES.register('v1v4-teplota-stupnice', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Porovnanie stupnice Celzia a kelvinov">
      <text class="f-math" x="210" y="22" text-anchor="middle">T = t + 273,15</text>
      <text class="f-text" x="40" y="60">stav</text>
      <text class="f-text" x="210" y="60" text-anchor="middle">t (°C)</text>
      <text class="f-text" x="340" y="60" text-anchor="middle">T (K)</text>
      <line class="f-line" x1="30" y1="72" x2="390" y2="72"/>
      <text class="f-text" x="40" y="102">absolútna nula</text>
      <text class="f-math" x="210" y="102" text-anchor="middle">−273,15</text>
      <text class="f-math" x="340" y="102" text-anchor="middle">0</text>
      <line class="f-thin" x1="30" y1="116" x2="390" y2="116"/>
      <text class="f-text" x="40" y="142">tuhnutie vody</text>
      <text class="f-math" x="210" y="142" text-anchor="middle">0</text>
      <text class="f-math" x="340" y="142" text-anchor="middle">273,15</text>
      <line class="f-thin" x1="30" y1="156" x2="390" y2="156"/>
      <text class="f-text" x="40" y="182">var vody</text>
      <text class="f-math" x="210" y="182" text-anchor="middle">100</text>
      <text class="f-math" x="340" y="182" text-anchor="middle">373,15</text></svg>`
  });

  FIGURES.register('v1v4-izoterma', {
    draw: () => {
      const p = (V) => [60 + 80 * V, 210 - 160 / V];
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Izoterma ideálneho plynu: tlak klesá s objemom">
      <path class="f-line" d="M60 20 V210 H400"/>
      <path class="f-accent" fill="none" d="${curve(p, 1, 4, 0.05)}"/>
      <line class="f-dash" x1="60" y1="130" x2="220" y2="130"/>
      <line class="f-dash" x1="220" y1="130" x2="220" y2="210"/>
      <circle class="f-dot" cx="140" cy="50" r="5"/>
      <circle class="f-dot" cx="220" cy="130" r="5"/>
      <circle class="f-dot" cx="380" cy="170" r="5"/>
      <text class="f-math" x="46" y="54" text-anchor="end">p₁</text>
      <text class="f-math" x="46" y="134" text-anchor="end">p₂</text>
      <text class="f-math" x="396" y="228" text-anchor="end">V</text>
      <text class="f-small" x="40" y="18">p</text>
      <text class="f-small" x="220" y="228" text-anchor="middle">V₂ = 2V₁</text>
      <text class="f-math" x="230" y="70">pV = nRT = konšt.</text>
      <text class="f-small" x="250" y="90">izoterma, T = konšt.</text></svg>`;
    }
  });

  FIGURES.register('v1v4-prvy-zakon', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Plyn vo valci: dodané teplo a vykonaná práca">
      <path class="f-line" fill="none" d="M130 60 V200 H290 V60"/>
      <rect class="f-fill2" x="131" y="120" width="158" height="79"/>
      <rect class="f-fill3 f-outline3" x="130" y="110" width="160" height="10"/>
      <text class="f-small" x="210" y="164" text-anchor="middle">plyn</text>
      ${arr(40, 160, 128, 160, 'f-warn')}
      <text class="f-math" x="60" y="150">Q</text>
      <text class="f-small" x="40" y="182">dodané teplo</text>
      ${arr(210, 105, 210, 50, 'f-ok')}
      <text class="f-math" x="222" y="70">W</text>
      <text class="f-small" x="222" y="84">práca plynu</text>
      <text class="f-math" x="210" y="228" text-anchor="middle">ΔU = Q − W</text></svg>`
  });

  FIGURES.register('v1v4-tepelny-motor', {
    draw: () => `<svg viewBox="0 0 420 260" role="img" aria-label="Schéma tepelného motora medzi ohrievačom a chladičom">
      <rect class="f-fill2 f-outline2" x="120" y="16" width="180" height="46" rx="6"/>
      <text class="f-text" x="210" y="44" text-anchor="middle">ohrievač, T_h</text>
      <rect class="f-fill f-outline" x="160" y="110" width="100" height="46" rx="6"/>
      <text class="f-text" x="210" y="138" text-anchor="middle">motor</text>
      <rect class="f-fill3 f-outline3" x="120" y="200" width="180" height="46" rx="6"/>
      <text class="f-text" x="210" y="228" text-anchor="middle">chladič, T_c</text>
      ${arr(210, 62, 210, 108, 'f-warn')}
      <text class="f-math" x="222" y="88">Q_h</text>
      ${arr(210, 156, 210, 198, 'f-warn')}
      <text class="f-math" x="222" y="180">Q_c</text>
      ${arr(262, 133, 360, 133, 'f-ok')}
      <text class="f-math" x="310" y="124" text-anchor="middle">W</text>
      <text class="f-math" x="20" y="130">η = W / Q_h</text></svg>`
  });

  FIGURES.register('v1v4-boltzmann', {
    draw: () => `<svg viewBox="0 0 420 230" role="img" aria-label="Obsadenie dvoch energetických hladín pri teplote T">
      <line class="f-line" x1="130" y1="180" x2="300" y2="180"/>
      <line class="f-accent" x1="130" y1="90" x2="300" y2="90"/>
      ${arr(330, 180, 330, 90, 'f-warn')}
      <text class="f-math" x="345" y="140">ΔE = k·T</text>
      <text class="f-math" x="118" y="94" text-anchor="end">E₂</text>
      <text class="f-math" x="118" y="184" text-anchor="end">E₁</text>
      <circle class="f-dot" cx="150" cy="170" r="5"/>
      <circle class="f-dot" cx="180" cy="170" r="5"/>
      <circle class="f-dot" cx="210" cy="170" r="5"/>
      <circle class="f-dot" cx="240" cy="170" r="5"/>
      <circle class="f-dot" cx="270" cy="170" r="5"/>
      <circle class="f-dot" cx="195" cy="80" r="5"/>
      <circle class="f-dot" cx="255" cy="80" r="5"/>
      <text class="f-math" x="20" y="222">N₂/N₁ = e^(−ΔE/kT)</text></svg>`
  });

  /* ---------- v3: elektromagnetizmus ---------- */

  FIGURES.register('v1v4-elektricke-pole', {
    draw: () => {
      const rays = [0, 45, 90, 135, 180, 225, 270, 315].map((d) => {
        const a = d * Math.PI / 180;
        return arr(210 + 22 * Math.cos(a), 120 - 22 * Math.sin(a), 210 + 100 * Math.cos(a), 120 - 100 * Math.sin(a), 'f-accent');
      }).join('');
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Radiálne siločiary kladného bodového náboja">
      ${rays}
      <circle class="f-fill2 f-outline2" cx="210" cy="120" r="14"/>
      <text class="f-math" x="210" y="125" text-anchor="middle">+Q</text>
      <text class="f-small" x="20" y="26">siločiary vychádzajú z kladného náboja</text>
      <text class="f-math" x="210" y="232" text-anchor="middle">E = k·Q / r²</text></svg>`;
    }
  });

  FIGURES.register('v1v4-gauss', {
    draw: () => {
      const rays = [0, 45, 90, 135, 180, 225, 270, 315].map((d) => {
        const a = d * Math.PI / 180;
        return arr(210 + 18 * Math.cos(a), 120 - 18 * Math.sin(a), 210 + 118 * Math.cos(a), 120 - 118 * Math.sin(a), 'f-accent');
      }).join('');
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Tok uzavretou plochou obklopujúcou náboj">
      <circle class="f-dash" fill="none" cx="210" cy="120" r="95"/>
      ${rays}
      <circle class="f-fill3 f-outline3" cx="210" cy="120" r="10"/>
      <text class="f-small" x="300" y="70">uzavretá plocha S</text>
      <text class="f-math" x="20" y="30">Φ_E = Q / ε₀</text>
      <text class="f-small" x="210" y="232" text-anchor="middle">tok závisí len od náboja vnútri plochy</text></svg>`;
    }
  });

  FIGURES.register('v1v4-paralelne', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Dva rezistory zapojené paralelne na zdroj">
      <path class="f-line" fill="none" d="M60 40 H360 M60 40 V180 M60 180 H360 M360 40 V180"/>
      <path class="f-line" fill="none" d="M160 40 V85 M160 135 V180 M280 40 V85 M280 135 V180"/>
      <rect class="f-fill f-outline" x="145" y="85" width="30" height="50"/>
      <rect class="f-fill f-outline" x="265" y="85" width="30" height="50"/>
      <line class="f-accent" x1="46" y1="100" x2="74" y2="100" stroke-width="3"/>
      <line class="f-accent" x1="54" y1="112" x2="66" y2="112"/>
      <text class="f-math" x="28" y="110">U</text>
      <text class="f-math" x="190" y="115">R₁</text>
      <text class="f-math" x="310" y="115">R₂</text>
      ${arr(90, 40, 130, 40, 'f-ok')}
      <text class="f-math" x="110" y="30" text-anchor="middle">I</text>
      <text class="f-small" x="210" y="206" text-anchor="middle">paralelne: napätie U je na oboch vetvách rovnaké</text></svg>`
  });

  FIGURES.register('v1v4-lorentz', {
    draw: () => {
      const pts = [[60, 50], [140, 50], [220, 50], [300, 50], [380, 50],
        [60, 190], [140, 190], [220, 190], [300, 190], [380, 190]];
      const dots = pts.map(([x, y]) => `<circle class="f-dot" cx="${x}" cy="${y}" r="4"/>`).join('');
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Sila na kladný náboj letiaci v magnetickom poli kolmo na nákresňu">
      ${dots}
      <text class="f-small" x="20" y="28">B: kolmo von z nákresne (bodky)</text>
      ${arr(150, 120, 190, 120, 'f-accent')}
      <text class="f-math" x="168" y="108" text-anchor="middle">v</text>
      <circle class="f-fill3 f-outline3" cx="200" cy="120" r="10"/>
      <text class="f-math" x="200" y="125" text-anchor="middle">+</text>
      ${arr(200, 132, 200, 200, 'f-warn')}
      <text class="f-math" x="214" y="186">F</text>
      <text class="f-math" x="210" y="232" text-anchor="middle">F = q·v×B</text></svg>`;
    }
  });

  FIGURES.register('v1v4-tok-indukcia', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Magnetický tok plochou pri uhle medzi poľom a normálou">
      ${arr(30, 50, 395, 50, 'f-ok')}
      ${arr(30, 200, 395, 200, 'f-ok')}
      <text class="f-math" x="375" y="40">B</text>
      <line class="f-accent" x1="141" y1="90" x2="279" y2="170"/>
      <text class="f-small" x="290" y="186">plocha S</text>
      ${arr(210, 130, 240, 78, 'f-ok')}
      <text class="f-math" x="250" y="72">n</text>
      <path class="f-thin" fill="none" d="M240 130 A30 30 0 0 0 225 104"/>
      <text class="f-math" x="252" y="118">α</text>
      <text class="f-math" x="20" y="230">Φ = B·S·cos α</text></svg>`
  });

  FIGURES.register('v1v4-ampere', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Magnetické pole okolo priameho vodiča s prúdom">
      <circle class="f-dash" fill="none" cx="180" cy="120" r="70"/>
      <circle class="f-solid" cx="180" cy="120" r="5"/>
      <text class="f-math" x="192" y="142">I</text>
      <line class="f-thin" x1="180" y1="120" x2="180" y2="50"/>
      <circle class="f-dot" cx="180" cy="50" r="4"/>
      <text class="f-math" x="188" y="90">r</text>
      ${arr(180, 50, 140, 50, 'f-ok')}
      <text class="f-math" x="150" y="38" text-anchor="middle">B</text>
      ${arr(110, 120, 110, 160, 'f-ok')}
      ${arr(180, 190, 220, 190, 'f-ok')}
      <text class="f-math" x="270" y="112">B = μ₀·I / (2π·r)</text>
      <text class="f-small" x="270" y="134">kružnice okolo vodiča</text></svg>`
  });

  FIGURES.register('v1v4-em-vlna', {
    draw: () => {
      const E = (x) => [x, 70 - 36 * Math.sin(2 * Math.PI * (x - 30) / 120)];
      const B = (x) => [x, 180 - 36 * Math.sin(2 * Math.PI * (x - 30) / 120)];
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Elektrická a magnetická zložka elektromagnetickej vlny">
      <path class="f-dash" d="M30 70 H350"/>
      <path class="f-dash" d="M30 180 H350"/>
      <path class="f-accent" fill="none" d="${curve(E, 30, 350)}"/>
      <path class="f-ok" fill="none" d="${curve(B, 30, 350)}"/>
      <text class="f-math" x="362" y="74">E</text>
      <text class="f-math" x="362" y="184">B</text>
      ${arr(30, 125, 340, 125, 'f-warn')}
      <text class="f-math" x="350" y="118">c</text>
      <text class="f-small" x="30" y="232">E a B kmitajú vo fáze, sú navzájom kolmé a kolmé na smer šírenia</text></svg>`;
    }
  });

  FIGURES.register('v1v4-prechod-prostredie', {
    draw: () => {
      const vac = (x) => [x, 110 - 36 * Math.sin(2 * Math.PI * (x - 20) / 90)];
      const med = (x) => [x, 110 - 36 * Math.sin(2 * Math.PI * (x - 220) / 60)];
      return `<svg viewBox="0 0 420 220" role="img" aria-label="Vlna s rovnakou frekvenciou má v látke kratšiu vlnovú dĺžku">
      <line class="f-dash" x1="210" y1="30" x2="210" y2="190"/>
      <path class="f-accent" fill="none" d="${curve(vac, 20, 200)}"/>
      <path class="f-ok" fill="none" d="${curve(med, 220, 400)}"/>
      <text class="f-small" x="110" y="40" text-anchor="middle">vákuum: v = c</text>
      <text class="f-small" x="310" y="40" text-anchor="middle">látka: v = c/n</text>
      <text class="f-small" x="210" y="210" text-anchor="middle">frekvencia f je v oboch prostrediach rovnaká, λ sa v látke skráti</text></svg>`;
    }
  });

  /* ---------- v4: optika a vlny ---------- */

  FIGURES.register('v1v4-interferencia', {
    draw: () => {
      const w1 = (x) => [x, 70 - 18 * Math.sin(2 * Math.PI * (x - 30) / 90)];
      const sum1 = (x) => [x, 70 - 36 * Math.sin(2 * Math.PI * (x - 30) / 90)];
      const w2 = (x) => [x, 190 + 18 * Math.sin(2 * Math.PI * (x - 30) / 90)];
      const w3 = (x) => [x, 190 - 18 * Math.sin(2 * Math.PI * (x - 30) / 90)];
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Zosilnenie a zoslabenie skladaním dvoch vĺn">
      <text class="f-small" x="20" y="16">Δd = m·λ: zosilnenie, amplitúdy sa sčítajú</text>
      <path class="f-dash" fill="none" d="${curve(w1, 30, 390)}"/>
      <path class="f-accent" fill="none" d="${curve(sum1, 30, 390)}"/>
      <text class="f-small" x="20" y="132">Δd = (m + ½)·λ: zoslabenie, vlny sú v protifáze</text>
      <path class="f-dash" fill="none" d="${curve(w3, 30, 390)}"/>
      <path class="f-warn" fill="none" d="${curve(w2, 30, 390)}"/>
      <line class="f-ok" x1="30" y1="190" x2="390" y2="190"/></svg>`;
    }
  });

  FIGURES.register('v1v4-polarizacia', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Priemet polarizácie na os analyzátora">
      <line class="f-dash" x1="40" y1="210" x2="220" y2="30"/>
      <text class="f-small" x="230" y="26">os analyzátora</text>
      ${arr(120, 130, 240, 130, 'f-ok')}
      <text class="f-math" x="250" y="134">E</text>
      <line class="f-dash" x1="240" y1="130" x2="180" y2="70"/>
      ${arr(120, 130, 180, 70, 'f-accent')}
      <text class="f-small" x="30" y="60">E∥ = E·cos φ</text>
      <path class="f-thin" fill="none" d="M160 130 A40 40 0 0 0 148.3 101.7"/>
      <text class="f-math" x="168" y="112">φ</text>
      <text class="f-math" x="280" y="60">I = I₀·cos²φ</text></svg>`
  });

  FIGURES.register('v1v4-lom', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Lom svetla na rozhraní vzduchu a skla">
      <rect class="f-fill2" x="20" y="120" width="380" height="110"/>
      <line class="f-line" x1="20" y1="120" x2="400" y2="120"/>
      <line class="f-dash" x1="210" y1="30" x2="210" y2="210"/>
      <text class="f-small" x="216" y="30">normála</text>
      ${arr(130, 40, 210, 120, 'f-accent')}
      ${arr(210, 120, 257, 208, 'f-ok')}
      <path class="f-thin" fill="none" d="M210 90 A30 30 0 0 0 188.8 98.8"/>
      <text class="f-math" x="172" y="90">α</text>
      <path class="f-thin" fill="none" d="M210 150 A30 30 0 0 0 224.1 146.5"/>
      <text class="f-math" x="234" y="160">β</text>
      <text class="f-small" x="40" y="80">dopadajúci lúč</text>
      <text class="f-small" x="270" y="140">lomený lúč</text>
      <text class="f-small" x="300" y="40">vzduch, n₁</text>
      <text class="f-small" x="300" y="190">sklo, n₂ &gt; n₁</text></svg>`
  });

  FIGURES.register('v1v4-zobrazenie', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Konštrukcia obrazu spojnou šošovkou pri predmete v dvojnásobnej ohniskovej vzdialenosti">
      <line class="f-dash" x1="20" y1="120" x2="400" y2="120"/>
      <line class="f-line" x1="210" y1="50" x2="210" y2="190"/>
      <circle class="f-dot" cx="150" cy="120" r="3"/>
      <circle class="f-dot" cx="270" cy="120" r="3"/>
      <circle class="f-dot" cx="90" cy="120" r="3"/>
      <circle class="f-dot" cx="330" cy="120" r="3"/>
      <text class="f-math" x="150" y="140" text-anchor="middle">F</text>
      <text class="f-math" x="270" y="140" text-anchor="middle">F′</text>
      <text class="f-math" x="90" y="140" text-anchor="middle">2F</text>
      <text class="f-math" x="330" y="108" text-anchor="middle">2F′</text>
      ${arr(90, 120, 90, 60, 'f-ok')}
      <text class="f-small" x="90" y="48" text-anchor="middle">predmet</text>
      <path class="f-warn" fill="none" d="M90 60 H210 L330 180"/>
      <line class="f-accent" x1="90" y1="60" x2="330" y2="180"/>
      ${arr(330, 120, 330, 180, 'f-accent')}
      <text class="f-small" x="330" y="200" text-anchor="middle">obraz</text>
      <text class="f-math" x="210" y="230" text-anchor="middle">a = 2f, b = 2f</text></svg>`
  });

  FIGURES.register('v1v4-vlakno', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Svetlo vedené jadrom optického vlákna úplným odrazom">
      <text class="f-small" x="200" y="20" text-anchor="middle">úplný odraz na rozhraní jadro–plášť</text>
      <rect class="f-fill2 f-outline2" x="20" y="30" width="380" height="140"/>
      <rect class="f-fill f-outline" x="20" y="70" width="380" height="60"/>
      <path class="f-accent" fill="none" d="M40 100 L120 70 L200 130 L280 70 L360 130"/>
      <text class="f-small" x="60" y="125">jadro, n₁</text>
      <text class="f-small" x="380" y="50" text-anchor="end">plášť, n₂ &lt; n₁</text></svg>`
  });

  /* ---------- pripojenie k lekciám ---------- */

  // lekcia → id obrázka; obrázok sa doplní na koniec teórie lekcie (pred príklady)
  const ATTACH = {
    'v1-kinematika': 'v1v4-kinematika-vt',
    'v1-newton': 'v1v4-sily-dve',
    'v1-praca-energia': 'v1v4-praca-uhol',
    'v1-gravitacne-pole': 'v1v4-gravitacia-r',
    'v1-rotacia': 'v1v4-rotacia',
    'v1-sustavy': 'v1v4-sustava-tazisko',
    'v2-teplota-tlak': 'v1v4-teplota-stupnice',
    'v2-stavove-rovnice': 'v1v4-izoterma',
    'v2-prvy-zakon': 'v1v4-prvy-zakon',
    'v2-tepelne-motory': 'v1v4-tepelny-motor',
    'v2-boltzmann': 'v1v4-boltzmann',
    'v3-elektricke-pole': 'v1v4-elektricke-pole',
    'v3-gauss': 'v1v4-gauss',
    'v3-elektricky-prud': 'v1v4-paralelne',
    'v3-magneticke-pole': 'v1v4-lorentz',
    'v3-indukcia': 'v1v4-tok-indukcia',
    'v3-maxwell': 'v1v4-ampere',
    'v3-em-vlny': 'v1v4-em-vlna',
    'v3-sirenie': 'v1v4-prechod-prostredie',
    'v4-frekvencia': 'v1v4-prechod-prostredie',
    'v4-interferencia': 'v1v4-interferencia',
    'v4-polarizacia': 'v1v4-polarizacia',
    'v4-geometricka-optika': 'v1v4-lom',
    'v4-zobrazovanie': 'v1v4-zobrazenie',
    'v4-vlakna': 'v1v4-vlakno'
  };

  // popisky pod obrázkami
  const CAPTIONS = {
    'v1v4-kinematika-vt': 'Pri rovnomerne zrýchlenom pohybe je graf rýchlosti priamka: jej sklon je zrýchlenie a, začiatok je počiatočná rýchlosť v₀.',
    'v1v4-sily-dve': 'Sily v opačných smeroch sa odčítajú. Výslednica F₁ − F₂ udeľuje telesu zrýchlenie a = (F₁ − F₂)/m.',
    'v1v4-praca-uhol': 'Prácu koná len zložka sily rovnobežná s posunutím, F·cos α. Zložka kolmá na posunutie prácu nekoná.',
    'v1v4-gravitacia-r': 'Gravitačné zrýchlenie klesá s druhou mocninou vzdialenosti od stredu: vo vzdialenosti 2R je štvrtinové.',
    'v1v4-rotacia': 'Bod na tuhom telese vo vzdialenosti r od osi sa pohybuje po kružnici obvodovou rýchlosťou v = ω·r.',
    'v1v4-sustava-tazisko': 'Ťažisko T leží bližšie k ťažšej častici. Jeho súradnica je vážený priemer súradníc častíc.',
    'v1v4-teplota-stupnice': 'Prepočet teplôt je T = t + 273,15. Absolútna nula zodpovedá 0 K, teda −273,15 °C.',
    'v1v4-izoterma': 'Pri stálej teplote je súčin pV konštantný, takže tlak v závislosti od objemu tvorí hyperbolu: dvojnásobný objem znamená polovičný tlak.',
    'v1v4-prvy-zakon': 'Dodané teplo Q zvyšuje vnútornú energiu plynu, práca W, ktorú plyn vykoná, energiu odnáša: ΔU = Q − W.',
    'v1v4-tepelny-motor': 'Motor odoberie z ohrievača teplo Q_h, časť premení na prácu W a zvyšok Q_c odovzdá chladiču.',
    'v1v4-boltzmann': 'Hladina o ΔE = k·T nad základnou je pri teplote T obsadená približne e⁻¹ ≈ 0,37-krát oproti základnej hladine.',
    'v1v4-elektricke-pole': 'Siločiary kladného bodového náboja vychádzajú radiálne von. Intenzita klesá so štvorcom vzdialenosti.',
    'v1v4-gauss': 'Celkový tok uzavretou plochou závisí len od náboja vnútri plochy, Φ = Q/ε₀, bez ohľadu na tvar plochy.',
    'v1v4-paralelne': 'Pri paralelnom zapojení je napätie na oboch vetvách rovnaké a celkový prúd I je súčet prúdov vetiev.',
    'v1v4-lorentz': 'Lorentzova sila na kladný náboj letiaci kolmo na pole je kolmá na rýchlosť aj na pole. Mení smer pohybu, nie jeho rýchlosť.',
    'v1v4-tok-indukcia': 'Magnetický tok plochou je Φ = B·S·cos α, kde α je uhol medzi poľom B a normálou n plochy.',
    'v1v4-ampere': 'Okolo priameho vodiča s prúdom sú siločiary magnetickej indukcie kružnice. Indukcia B klesá so vzdialenosťou r.',
    'v1v4-em-vlna': 'Elektrická a magnetická zložka vlny kmitajú vo fáze, sú navzájom kolmé a obe sú kolmé na smer šírenia c.',
    'v1v4-prechod-prostredie': 'Pri vstupe do látky sa rýchlosť vlny zmenší, a teda sa skráti jej vlnová dĺžka. Frekvencia zostáva rovnaká.',
    'v1v4-interferencia': 'Vlny v zhode sa zosilnia pri dráhovom rozdiele m·λ, v protifáze sa zoslabia pri (m + ½)·λ.',
    'v1v4-polarizacia': 'Analyzátor prepúšťa len zložku kmitov v svojom smere, E·cos φ. Intenzita je úmerná cos²φ.',
    'v1v4-lom': 'Pri prechode do opticky hustejšieho prostredia sa lúč láme k normále, takže β je menší než α (n₂ > n₁).',
    'v1v4-zobrazenie': 'Predmet vo dvojnásobnej ohniskovej vzdialenosti dá skutočný, prevrátený a rovnako veľký obraz vo vzdialenosti 2f.',
    'v1v4-vlakno': 'Svetlo sa v jadre udržuje úplným odrazom, lebo dopadá pod uhlom väčším než kritický uhol, kde sin α_c = n₂/n₁.'
  };

  LESSONS.forEach((l) => {
    const fig = ATTACH[l.id];
    if (fig) l.theory.push({ fig, caption: CAPTIONS[fig] });
  });
})();
