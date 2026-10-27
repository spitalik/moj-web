/* Statické obrázky k teórii lekcií ročníkov 9–12 (inline SVG). Prefix id je "v9v12-".
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

  // lineárne prepočítanie hodnoty z rozsahu [a,b] do [p,q]
  const lin = (v, a, b, p, q) => p + ((v - a) * (q - p)) / (b - a);

  // kváder v perspektíve: predná stena s hranou s, zadná posunutá o (d,-d)
  const cube = (x, y, s, d) => `<path class="f-line" fill="none" d="M${x} ${y} H${x + s} V${y + s} H${x} Z
      M${x + d} ${y - d} H${x + s + d} V${y + s - d} H${x + d} Z
      M${x} ${y} L${x + d} ${y - d} M${x + s} ${y} L${x + s + d} ${y - d}
      M${x + s} ${y + s} L${x + s + d} ${y + s - d} M${x} ${y + s} L${x + d} ${y + s - d}"/>`;

  // atóm (guľka) v pixeloch
  const atom = (x, y) => `<circle class="f-fill3 f-outline3" cx="${n1(x)}" cy="${n1(y)}" r="5"/>`;

  // lomená čiara z bodov
  const poly = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${n1(p[0])} ${n1(p[1])}`).join(' ');

  // pružina: zubatá čiara medzi x1 a x2 v osi y
  const spring = (x1, x2, y, n = 8, a = 7) => {
    const s = 12, seg = (x2 - x1 - 2 * s) / n;
    let d = `M${x1} ${y} H${x1 + s}`;
    for (let i = 0; i < n; i++) d += ` L${n1(x1 + s + seg * (i + 0.5))} ${n1(y + (i % 2 ? a : -a))}`;
    return `<path class="f-line" fill="none" d="${d} L${x2 - s} ${y} H${x2}"/>`;
  };

  /* ---------- pevné látky ---------- */

  // elementárna bunka: jednoduchá, telesne a plošne centrovaná
  FIGURES.register('v9v12-bunka', {
    draw: () => {
      const y = 70, s = 60, d = 22;
      const bunka = (x, kind) => {
        const rohy = [[x, y], [x + s, y], [x, y + s], [x + s, y + s],
          [x + d, y - d], [x + s + d, y - d], [x + d, y + s - d], [x + s + d, y + s - d]];
        let at = rohy;
        if (kind === 'telesne') at = at.concat([[x + (s + d) / 2, y + (s - d) / 2]]);
        if (kind === 'plosne') at = at.concat([
          [x + s / 2, y + s / 2], [x + d + s / 2, y - d + s / 2],
          [x + (s + d) / 2, y - d / 2], [x + (s + d) / 2, y + s - d / 2],
          [x + d / 2, y + (s - d) / 2], [x + s + d / 2, y + (s - d) / 2]
        ]);
        return cube(x, y, s, d) + at.map((p) => atom(p[0], p[1])).join('');
      };
      return `<svg viewBox="0 0 380 200" role="img" aria-label="Tri kubické elementárne bunky">
        ${bunka(40, 'jednoduchá')}${bunka(160, 'telesne')}${bunka(280, 'plosne')}
        <text class="f-small" x="81" y="162" text-anchor="middle">jednoduchá kubická</text>
        <text class="f-text" x="81" y="184" text-anchor="middle">1 atóm</text>
        <text class="f-small" x="201" y="162" text-anchor="middle">telesne centrovaná</text>
        <text class="f-text" x="201" y="184" text-anchor="middle">2 atómy</text>
        <text class="f-small" x="321" y="162" text-anchor="middle">plošne centrovaná</text>
        <text class="f-text" x="321" y="184" text-anchor="middle">4 atómy</text></svg>`;
    }
  });

  // pásová teória: vodič, polovodič, izolant
  FIGURES.register('v9v12-pasy', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Pásy energie vo vodiči, polovodiči a izolante">
      ${arr(40, 210, 40, 25, 'f-line')}
      <text class="f-math" x="30" y="22">E</text>
      <rect class="f-fill2 f-outline2" x="70" y="90" width="90" height="40"/>
      <rect class="f-fill3 f-outline3" x="70" y="120" width="90" height="80"/>
      <rect class="f-fill2 f-outline2" x="180" y="80" width="90" height="30"/>
      <rect class="f-fill3 f-outline3" x="180" y="130" width="90" height="70"/>
      <rect class="f-fill2 f-outline2" x="290" y="50" width="90" height="30"/>
      <rect class="f-fill3 f-outline3" x="290" y="150" width="90" height="50"/>
      <text class="f-math" x="276" y="124">E_g</text>
      <text class="f-math" x="335" y="118" text-anchor="middle">E_g</text>
      <text class="f-text" x="115" y="228" text-anchor="middle">kov</text>
      <text class="f-text" x="225" y="228" text-anchor="middle">polovodič</text>
      <text class="f-text" x="335" y="228" text-anchor="middle">izolant</text></svg>`
  });

  // p-n prechod: diery v p-oblasti, elektróny v n-oblasti
  FIGURES.register('v9v12-pn', {
    draw: () => `<svg viewBox="0 0 420 180" role="img" aria-label="PN prechod s dierami a elektrónmi">
      <rect class="f-fill2 f-outline2" x="40" y="50" width="160" height="80"/>
      <rect class="f-fill3 f-outline3" x="220" y="50" width="160" height="80"/>
      <line class="f-dash" x1="210" y1="40" x2="210" y2="140"/>
      <text class="f-text" x="120" y="42" text-anchor="middle">p (diery)</text>
      <text class="f-text" x="300" y="42" text-anchor="middle">n (elektróny)</text>
      <text class="f-math" x="70" y="72">+</text><text class="f-math" x="110" y="92">+</text>
      <text class="f-math" x="150" y="72">+</text><text class="f-math" x="90" y="112">+</text>
      <text class="f-math" x="170" y="112">+</text>
      <text class="f-math" x="250" y="72">−</text><text class="f-math" x="290" y="95">−</text>
      <text class="f-math" x="330" y="72">−</text><text class="f-math" x="370" y="112">−</text>
      <text class="f-math" x="300" y="118">−</text>
      <text class="f-small" x="210" y="164" text-anchor="middle">rozhranie PN prechodu</text></svg>`
  });

  // supravodivosť: odpor v závislosti od teploty
  FIGURES.register('v9v12-supra', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Odpor supravodiča klesá na nulu pod kritickou teplotou">
      ${arr(60, 200, 395, 200, 'f-line')}
      ${arr(60, 200, 60, 25, 'f-line')}
      <line class="f-dash" x1="170" y1="40" x2="170" y2="200"/>
      <line class="f-line" x1="170" y1="160" x2="170" y2="200"/>
      <path class="f-line" fill="none" d="M170 160 L380 75"/>
      <line class="f-ok" x1="60" y1="200" x2="170" y2="200" stroke-width="3"/>
      <text class="f-math" x="48" y="22" text-anchor="middle">R</text>
      <text class="f-math" x="388" y="222" text-anchor="middle">T</text>
      <text class="f-math" x="170" y="226" text-anchor="middle">T_c</text>
      <text class="f-small" x="95" y="188" text-anchor="middle">R = 0</text>
      <text class="f-small" x="230" y="100">normálny kov: R s teplotou rastie</text></svg>`
  });

  // domény vo feromagnetiku: bez poľa a v poli
  FIGURES.register('v9v12-domeny', {
    draw: () => {
      const uhly = [0.3, 2.4, -1.2, 1.0, 3.5, -0.4, 2.0, 0.9, -2.2, 1.8, 0.1, -1.6];
      let l = '', r = '', k = 0;
      for (let row = 0; row < 3; row++) {
        for (let c = 0; c < 4; c++, k++) {
          const cx = 50 + c * 40, cy = 60 + row * 40;
          const a = uhly[k], dx = 11 * Math.cos(a), dy = 11 * Math.sin(a);
          l += arr(cx - dx, cy - dy, cx + dx, cy + dy, 'f-accent');
          r += arr(cx + 210 - 11, cy, cx + 210 + 11, cy, 'f-ok');
        }
      }
      return `<svg viewBox="0 0 420 210" role="img" aria-label="Magnetické domény bez poľa a v poli">
        <rect class="f-line" fill="none" x="20" y="30" width="180" height="130"/>
        <rect class="f-line" fill="none" x="230" y="30" width="180" height="130"/>
        ${l}${r}
        <text class="f-small" x="110" y="190" text-anchor="middle">bez poľa: domény nahodené</text>
        <text class="f-small" x="320" y="190" text-anchor="middle">v poli: domény zoradené</text></svg>`;
    }
  });

  // nanomateriál: rovnaký objem, väčší povrch po rozdelení
  FIGURES.register('v9v12-nano', {
    draw: () => `<svg viewBox="0 0 420 250" role="img" aria-label="Rozdelenie kocky na menšie kocky zväčší povrch">
      ${cube(40, 110, 110, 40)}
      ${arr(180, 130, 215, 130, 'f-accent')}
      ${cube(240, 90, 50, 18)}${cube(320, 90, 50, 18)}
      ${cube(240, 160, 50, 18)}${cube(320, 160, 50, 18)}
      <text class="f-small" x="95" y="236" text-anchor="middle">jedna kocka s hranou a: S = 6a²</text>
      <text class="f-small" x="320" y="236" text-anchor="middle">menšie kocky: S spolu = 12a²</text></svg>`
  });

  /* ---------- astrofyzika ---------- */

  // Hertzsprungov–Russellov diagram (schematicky)
  FIGURES.register('v9v12-hr', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Hertzsprungov–Russellov diagram">
      ${arr(60, 210, 400, 210, 'f-line')}
      ${arr(60, 210, 60, 20, 'f-line')}
      <polygon class="f-fill3 f-outline3" points="90,44 370,184 370,196 90,56"/>
      <text class="f-small" x="190" y="92">hlavná postupnosť</text>
      <ellipse class="f-fill2 f-outline2" cx="330" cy="60" rx="35" ry="18"/>
      <text class="f-small" x="330" y="34" text-anchor="middle">obri</text>
      <ellipse class="f-fill f-outline" cx="110" cy="175" rx="30" ry="12"/>
      <text class="f-small" x="110" y="202" text-anchor="middle">bieli trpaslíci</text>
      <circle class="f-solid" cx="230" cy="120" r="5"/>
      <text class="f-small" x="240" y="118">Slnko</text>
      <text class="f-small" x="390" y="226" text-anchor="end">teplota (vyššia vľavo)</text>
      <text class="f-small" x="66" y="18">svietivosť</text></svg>`
  });

  // čierna diera: horizont úmerný hmotnosti, porovnanie s neutrónovou hviezdou
  FIGURES.register('v9v12-cierna-diera', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Polomery neutrónovej hviezdy a čiernej diery v rovnakej mierke">
      <circle class="f-fill2 f-outline2" cx="140" cy="130" r="100"/>
      <circle class="f-dash" cx="140" cy="130" r="60"/>
      <circle class="f-solid" cx="140" cy="130" r="30"/>
      <line class="f-thin" x1="210" y1="90" x2="250" y2="52"/>
      <line class="f-thin" x1="168" y1="130" x2="250" y2="108"/>
      <line class="f-thin" x1="200" y1="130" x2="250" y2="162"/>
      <text class="f-small" x="256" y="56">neutrónová hviezda: 10 km</text>
      <text class="f-small" x="256" y="112">Slnko ako diera: 3 km</text>
      <text class="f-small" x="256" y="166">2 × hmotnosť: 6 km</text></svg>`
  });

  // tranzit: pokles jasu pri prechode planéty
  FIGURES.register('v9v12-tranzit', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Krivka jasu hviezdy počas tranzitu planéty">
      ${arr(50, 170, 50, 25, 'f-line')}
      ${arr(50, 170, 395, 170, 'f-line')}
      <path class="f-accent" fill="none" d="M55 60 H175 L185 100 H235 L245 60 H380"/>
      <line class="f-thin" x1="262" y1="60" x2="262" y2="100"/>
      <line class="f-thin" x1="256" y1="60" x2="268" y2="60"/>
      <line class="f-thin" x1="256" y1="100" x2="268" y2="100"/>
      <text class="f-math" x="272" y="84">Δjas</text>
      <text class="f-small" x="215" y="132" text-anchor="middle">planéta prechádza pred hviezdou</text>
      <text class="f-math" x="36" y="22" text-anchor="end">jas</text>
      <text class="f-math" x="380" y="190" text-anchor="middle">čas</text></svg>`
  });

  // Hubbleov zákon: rýchlosť úmerná vzdialenosti
  FIGURES.register('v9v12-hubble', {
    draw: () => {
      const Y = (x) => 200 - ((x - 60) * 160) / 310;
      return `<svg viewBox="0 0 420 230" role="img" aria-label="Rýchlosť vzďaľovania galaxií rastie so vzdialenosťou">
        ${arr(60, 200, 395, 200, 'f-line')}
        ${arr(60, 200, 60, 25, 'f-line')}
        <line class="f-accent" x1="60" y1="200" x2="370" y2="${n1(Y(370))}"/>
        <circle class="f-dot" cx="150" cy="${n1(Y(150))}" r="4"/>
        <circle class="f-dot" cx="250" cy="${n1(Y(250))}" r="4"/>
        <circle class="f-dot" cx="340" cy="${n1(Y(340))}" r="4"/>
        <text class="f-math" x="290" y="62">v = H₀ · d</text>
        <text class="f-math" x="46" y="26" text-anchor="end">v</text>
        <text class="f-math" x="392" y="222" text-anchor="middle">d</text></svg>`;
    }
  });

  // vlnová dĺžka sa rozpínaním zväčšuje
  FIGURES.register('v9v12-natiahnutie', {
    draw: () => {
      const vlna = (y0, per) => {
        let d = '';
        for (let x = 40; x <= 380; x += 2) {
          const y = y0 - 25 * Math.sin((2 * Math.PI * (x - 40)) / per);
          d += `${x === 40 ? 'M' : 'L'}${x} ${n1(y)}`;
        }
        return d;
      };
      return `<svg viewBox="0 0 420 200" role="img" aria-label="Kozmické žiarenie: vlnová dĺžka sa rozpínaním zväčšuje">
        <text class="f-small" x="40" y="22">žiarenie pri vzniku: krátka vlnová dĺžka</text>
        <path class="f-accent" fill="none" d="${vlna(75, 60)}"/>
        <text class="f-small" x="40" y="112">dnes: vlnová dĺžka väčšia, teplota nižšia</text>
        <path class="f-ok" fill="none" d="${vlna(150, 120)}"/></svg>`;
    }
  });

  // zloženie vesmíru: obyčajná hmota, temná hmota, temná energia
  FIGURES.register('v9v12-zlozenie', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Zloženie vesmíru: obyčajná hmota, temná hmota a temná energia">
      <rect class="f-fill3 f-outline3" x="40" y="50" width="17" height="50"/>
      <rect class="f-fill2 f-outline2" x="57" y="50" width="92" height="50"/>
      <rect class="f-fill f-outline" x="149" y="50" width="231" height="50"/>
      <text class="f-text" x="105" y="80" text-anchor="middle">27 %</text>
      <text class="f-text" x="264" y="80" text-anchor="middle">68 %</text>
      <rect class="f-fill3 f-outline3" x="40" y="130" width="12" height="12"/>
      <text class="f-small" x="60" y="141">obyčajná hmota ≈ 5 %</text>
      <rect class="f-fill2 f-outline2" x="40" y="155" width="12" height="12"/>
      <text class="f-small" x="60" y="166">temná hmota ≈ 27 %</text>
      <rect class="f-fill f-outline" x="40" y="180" width="12" height="12"/>
      <text class="f-small" x="60" y="191">temná energia ≈ 68 %</text></svg>`
  });

  /* ---------- tekutiny ---------- */

  // hydrostatický tlak závisí od hĺbky, nie od tvaru nádoby
  FIGURES.register('v9v12-nadoba', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Dve nádoby s rovnakou hĺbkou kvapaliny a rovnakým tlakom na dne">
      <rect class="f-fill2" x="61" y="100" width="178" height="99"/>
      <path class="f-line" fill="none" d="M60 60 V200 H240 V60"/>
      <rect class="f-fill2" x="291" y="100" width="38" height="99"/>
      <path class="f-line" fill="none" d="M290 40 V200 H330 V40"/>
      <line class="f-dash" x1="40" y1="100" x2="350" y2="100"/>
      <line class="f-thin" x1="370" y1="100" x2="370" y2="200"/>
      <line class="f-thin" x1="364" y1="100" x2="376" y2="100"/>
      <line class="f-thin" x1="364" y1="200" x2="376" y2="200"/>
      <text class="f-math" x="382" y="155">h</text>
      <text class="f-small" x="150" y="222" text-anchor="middle">široká nádoba</text>
      <text class="f-small" x="310" y="222" text-anchor="middle">úzka nádoba</text>
      <text class="f-text" x="210" y="22" text-anchor="middle">rovnaký tlak na dne: p = p₀ + ρgh</text></svg>`
  });

  // rovnica kontinuity: užšie potrubie, vyššia rýchlosť
  FIGURES.register('v9v12-kontinuita', {
    draw: () => `<svg viewBox="0 0 380 220" role="img" aria-label="Zúžené potrubie: menší prierez, väčšia rýchlosť">
      <path class="f-line" fill="none" d="M40 70 H170 L240 105 H340 V135 H240 L170 170 H40 Z"/>
      <line class="f-dash" x1="100" y1="70" x2="100" y2="170"/>
      <line class="f-dash" x1="290" y1="105" x2="290" y2="135"/>
      ${arr(60, 120, 140, 120, 'f-ok')}
      ${arr(250, 120, 330, 120, 'f-warn')}
      <text class="f-math" x="100" y="60" text-anchor="middle">S₁, v₁</text>
      <text class="f-math" x="290" y="95" text-anchor="middle">S₂, v₂</text>
      <text class="f-math" x="190" y="205" text-anchor="middle">S₁ · v₁ = S₂ · v₂</text></svg>`
  });

  // Venturiho efekt: tlak v zúženom mieste
  FIGURES.register('v9v12-venturi', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Venturiho trubica: v zúženom mieste je nižší tlak">
      <polygon class="f-line" fill="none" points="40,60 150,60 200,90 240,90 290,60 390,60 390,160 290,160 240,130 200,130 150,160 40,160"/>
      <path class="f-thin" fill="none" d="M90 20 V60 M100 20 V60 M215 20 V90 M225 20 V90"/>
      <rect class="f-fill2" x="91" y="30" width="8" height="30"/>
      <rect class="f-fill2" x="216" y="75" width="8" height="15"/>
      ${arr(60, 110, 120, 110, 'f-ok')}
      ${arr(250, 110, 350, 110, 'f-warn')}
      <text class="f-math" x="110" y="24">p₁</text>
      <text class="f-math" x="232" y="50">p₂</text>
      <text class="f-small" x="95" y="190" text-anchor="middle">v₁</text>
      <text class="f-small" x="215" y="190" text-anchor="middle">v₂ &gt; v₁</text>
      <text class="f-small" x="215" y="206" text-anchor="middle">p₂ &lt; p₁</text></svg>`
  });

  // laminárne prúdenie: vrstvy kĺžu jedna po druhej
  FIGURES.register('v9v12-vrstvy', {
    draw: () => {
      let s = '';
      [70, 100, 130, 160].forEach((y) => {
        const len = 260 * (180 - y) / 140;
        s += `<line class="f-thin" x1="50" y1="${y}" x2="370" y2="${y}"/>`;
        s += arr(80, y, 80 + len, y, 'f-accent');
      });
      return `<svg viewBox="0 0 420 230" role="img" aria-label="Laminárne prúdenie medzi dvoma doskami">
        <rect class="f-fill3 f-outline3" x="50" y="40" width="320" height="10"/>
        <rect class="f-fill f-outline" x="50" y="180" width="320" height="10"/>
        ${s}
        <text class="f-small" x="380" y="34" text-anchor="end">pohyblivá doska</text>
        <text class="f-small" x="380" y="206" text-anchor="end">pevná doska</text>
        <text class="f-text" x="210" y="226" text-anchor="middle">vnútorné trenie medzi vrstvami</text></svg>`;
    }
  });

  // profil rýchlosti v potrubí: laminárny vs. turbulentný
  FIGURES.register('v9v12-profil', {
    draw: () => {
      const profil = (x0, laminarny) => [-0.8, -0.5, -0.2, 0.2, 0.5, 0.8].map((q) => {
        const y = 110 + q * 60;
        const u = laminarny ? 1 - q * q : Math.pow(1 - Math.abs(q), 1 / 7);
        return arr(x0, y, x0 + 130 * u, y, 'f-accent');
      }).join('');
      return `<svg viewBox="0 0 420 220" role="img" aria-label="Profil rýchlosti v potrubí pri laminárnom a turbulentnom prúdení">
        <line class="f-line" x1="30" y1="50" x2="190" y2="50"/>
        <line class="f-line" x1="30" y1="170" x2="190" y2="170"/>
        <line class="f-line" x1="230" y1="50" x2="390" y2="50"/>
        <line class="f-line" x1="230" y1="170" x2="390" y2="170"/>
        ${profil(40, true)}
        ${profil(240, false)}
        <text class="f-small" x="110" y="205" text-anchor="middle">laminárny: parabolický profil</text>
        <text class="f-small" x="310" y="205" text-anchor="middle">turbulentný: plochší profil</text></svg>`;
    }
  });

  // krídlo: nad ním väčšia rýchlosť a menší tlak
  FIGURES.register('v9v12-krido', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Prúdenie okolo krídla: nad krídlom menší tlak">
      <path class="f-fill2 f-outline2" d="M60 125 Q150 85 260 105 Q320 112 345 125 Q250 140 150 140 Q90 138 60 125 Z"/>
      <path class="f-ok" fill="none" d="M20 80 Q200 30 380 80"/>
      <path class="f-ok" fill="none" d="M20 100 Q200 60 380 100"/>
      <path class="f-warn" fill="none" d="M20 160 Q200 210 380 160"/>
      <text class="f-small" x="200" y="22" text-anchor="middle">nad krídlom: menší tlak, väčšia rýchlosť</text>
      <text class="f-small" x="200" y="230" text-anchor="middle">pod krídlom: väčší tlak</text></svg>`
  });

  /* ---------- matematická fyzika ---------- */

  // exponenciálny model rádioaktívneho rozpadu
  FIGURES.register('v9v12-rozpad', {
    draw: () => {
      const X = (t) => 60 + 120 * t, Y = (f) => 200 - 160 * f;
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const t = i * 0.065;
        pts.push([X(t), Y(Math.pow(0.5, t))]);
      }
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Exponenciálny pokles počtu nerozpadnutých jadier">
        ${arr(60, 200, 395, 200, 'f-line')}
        ${arr(60, 200, 60, 20, 'f-line')}
        <path class="f-accent" fill="none" d="${poly(pts)}"/>
        <path class="f-dash" fill="none" d="M60 120 H180 V200"/>
        <circle class="f-dot" cx="180" cy="120" r="4"/>
        <text class="f-math" x="52" y="44" text-anchor="end">N₀</text>
        <text class="f-math" x="52" y="124" text-anchor="end">N₀/2</text>
        <text class="f-math" x="180" y="220" text-anchor="middle">T½</text>
        <text class="f-math" x="392" y="222" text-anchor="middle">t</text></svg>`;
    }
  });

  // diferenciálna rovnica: rodina riešení, počiatočná podmienka vyberie jedno
  FIGURES.register('v9v12-rovnice', {
    draw: () => {
      const Y = (t, c) => 200 - 25 * (0.5 * t + c);
      const X = (t) => 60 + 50 * t;
      const cara = (c, cls) => `<path class="${cls}" fill="none" d="M${X(0)} ${n1(Y(0, c))} L${X(6)} ${n1(Y(6, c))}"/>`;
      return `<svg viewBox="0 0 420 220" role="img" aria-label="Rodina riešení diferenciálnej rovnice v(t) = at + C">
        ${arr(60, 200, 395, 200, 'f-line')}
        ${arr(60, 200, 60, 20, 'f-line')}
        ${cara(0, 'f-thin f-dash')}
        ${cara(1, 'f-thin f-dash')}
        ${cara(3, 'f-thin f-dash')}
        ${cara(2, 'f-accent')}
        <circle class="f-dot" cx="60" cy="${n1(Y(0, 2))}" r="4"/>
        <text class="f-small" x="70" y="${n1(Y(0, 2)) - 10}">v(0) = v₀</text>
        <text class="f-small" x="290" y="60">iná C, iné riešenie</text>
        <text class="f-math" x="392" y="222" text-anchor="middle">t</text>
        <text class="f-math" x="46" y="26" text-anchor="end">v</text></svg>`;
    }
  });

  // moment sily: M = r × F kolmý na rovinu obrázka
  FIGURES.register('v9v12-moment', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Moment sily ako vektorový súčin polohového vektora a sily">
      ${arr(80, 180, 260, 110, 'f-accent')}
      ${arr(260, 110, 330, 50, 'f-ok')}
      <circle class="f-thin" cx="80" cy="180" r="12"/>
      <circle class="f-solid" cx="80" cy="180" r="3"/>
      <text class="f-math" x="160" y="132">r</text>
      <text class="f-math" x="345" y="50">F</text>
      <text class="f-small" x="40" y="222">M = r × F: os kolmo na nákresňu</text></svg>`
  });

  // Fourierov rozvoj: štvorcový signál a jeho prvá harmonická
  FIGURES.register('v9v12-fourier', {
    draw: () => {
      const T = 170, A = 60, H = (4 / Math.PI) * A;
      const h = [];
      for (let x = 40; x <= 380; x += 2) {
        h.push([x, 120 - H * Math.cos((2 * Math.PI * (x - 40)) / T)]);
      }
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Štvorcový signál a jeho prvá harmonická">
        <path class="f-dash" fill="none" d="M40 120 H380"/>
        <path class="f-line" fill="none" d="M40 60 H125 V180 H210 V60 H295 V180 H380"/>
        <path class="f-accent" fill="none" d="${poly(h)}"/>
        <text class="f-small" x="40" y="22">tenká čiara: štvorcový signál</text>
        <text class="f-small" x="40" y="228">zvýraznená: 1. harmonická, amplitúda 4A/π</text></svg>`;
    }
  });

  // Eulerova metóda: lomená čiara pod presným riešením
  FIGURES.register('v9v12-euler', {
    draw: () => {
      const X = (t) => 60 + 120 * t, Y = (v) => 200 - 20 * v;
      const presne = [];
      for (let i = 0; i <= 40; i++) {
        const t = i * 0.05;
        presne.push([X(t), Y(Math.exp(t))]);
      }
      const uzly = [[0, 1], [0.5, 1.5], [1, 2.25], [1.5, 3.375], [2, 5.0625]].map(([t, v]) => [X(t), Y(v)]);
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Eulerova metóda pri numerickom riešení rovnice">
        ${arr(60, 200, 345, 200, 'f-line')}
        ${arr(60, 200, 60, 20, 'f-line')}
        <path class="f-line" fill="none" d="${poly(presne)}"/>
        <path class="f-accent" fill="none" d="${poly(uzly)}"/>
        ${uzly.map((p) => `<circle class="f-dot" cx="${n1(p[0])}" cy="${n1(p[1])}" r="3.5"/>`).join('')}
        <text class="f-text" x="80" y="36">presné riešenie: y = eᵗ</text>
        <text class="f-small" x="80" y="58">lomená čiara: Eulerova metóda, h = 0,5</text>
        <text class="f-math" x="352" y="204">t</text>
        <text class="f-math" x="50" y="24" text-anchor="end">y</text>
        <text class="f-small" x="210" y="228" text-anchor="middle">Eulerova čiara leží pod presnou krivkou</text></svg>`;
    }
  });

  // konečné prvky: sériové a paralelné pružiny
  FIGURES.register('v9v12-pruziny', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Sériové a paralelné zapojenie pružín">
      <text class="f-text" x="150" y="22" text-anchor="middle">sériovo: 1/k = 1/k₁ + 1/k₂</text>
      <rect class="f-fill3 f-outline3" x="20" y="40" width="10" height="40"/>
      ${spring(30, 150, 60)}
      ${spring(150, 250, 60)}
      <rect class="f-fill2 f-outline2" x="250" y="40" width="30" height="40"/>
      <text class="f-math" x="90" y="48" text-anchor="middle">k₁</text>
      <text class="f-math" x="200" y="48" text-anchor="middle">k₂</text>
      <text class="f-text" x="150" y="125" text-anchor="middle">paralelne: k = k₁ + k₂</text>
      <rect class="f-fill3 f-outline3" x="20" y="130" width="10" height="70"/>
      ${spring(30, 250, 150)}
      ${spring(30, 250, 185)}
      <rect class="f-fill2 f-outline2" x="250" y="130" width="30" height="70"/>
      <text class="f-math" x="292" y="156">k₁</text>
      <text class="f-math" x="292" y="190">k₂</text></svg>`
  });

  /* ---------- pripojenie k lekciám ---------- */

  // lekcia → id obrázka; obrázok sa doplní na koniec teórie lekcie
  const ATTACH = {
    'v9-kryst-struktury': 'v9v12-bunka',
    'v9-pasova-teoria': 'v9v12-pasy',
    'v9-polovodice': 'v9v12-pn',
    'v9-supravodivost': 'v9v12-supra',
    'v9-magneticke': 'v9v12-domeny',
    'v9-nanomaterialy': 'v9v12-nano',
    'v10-hviezdy': 'v9v12-hr',
    'v10-cierne-diery': 'v9v12-cierna-diera',
    'v10-exoplanety': 'v9v12-tranzit',
    'v10-rozpinanie': 'v9v12-hubble',
    'v10-velky-tresk': 'v9v12-natiahnutie',
    'v10-temna-hmota': 'v9v12-zlozenie',
    'v11-hydrostatika': 'v9v12-nadoba',
    'v11-kontinuita': 'v9v12-kontinuita',
    'v11-bernoulli': 'v9v12-venturi',
    'v11-viskozita': 'v9v12-vrstvy',
    'v11-turbulencia': 'v9v12-profil',
    'v11-aerodynamika': 'v9v12-krido',
    'v12-modelovanie': 'v9v12-rozpad',
    'v12-diferencialne-rovnice': 'v9v12-rovnice',
    'v12-vektory': 'v9v12-moment',
    'v12-fourier': 'v9v12-fourier',
    'v12-numericke-metody': 'v9v12-euler',
    'v12-konecne-prvky': 'v9v12-pruziny'
  };

  // popisky pod obrázkami
  const CAPTIONS = {
    'v9v12-bunka': 'Elementárna bunka: jednoduchá, telesne centrovaná a plošne centrovaná kubická mriežka a počet atómov, ktoré do nej patria.',
    'v9v12-pasy': 'Vo vodiči sa pásy prekrývajú, v polovodiči je úzky zakázaný pás E_g, v izolante široký.',
    'v9v12-pn': 'Na PN prechode sa stretávajú diery z p-oblasti a elektróny z n-oblasti.',
    'v9v12-supra': 'Pod kritickou teplotou Tc odpor supravodiča klesne na nulu, kým normálny kov má odpor, ktorý s teplotou rastie.',
    'v9v12-domeny': 'Vo feromagnetiku sú domény bez poľa nahodené, vo vonkajšom poli sa zoradia a materiál sa zmagnetizuje.',
    'v9v12-nano': 'Rozdelenie kocky na menšie kocky zachová objem, ale povrch sa zväčší. Pomer S/V rastie so zmenšovaním.',
    'v9v12-hr': 'Hertzsprungov–Russellov diagram: hviezdy hlavnej postupnosti spaľujú vodík, obri sú svetlejší a bieli trpaslíci slabší pri vysokej teplote.',
    'v9v12-cierna-diera': 'Schwarzschildov polomer je úmerný hmotnosti. Dvojnásobne ťažká čierna diera má dvojnásobný horizont.',
    'v9v12-tranzit': 'Pri tranzite planéty jas hviezdy krátko poklesne o pomer plôch, teda o (r_p/R)².',
    'v9v12-hubble': 'Hubbleov zákon: rýchlosť vzďaľovania galaxií je úmerná ich vzdialenosti.',
    'v9v12-natiahnutie': 'Rozpínanie vesmíru natiahne vlnovú dĺžku žiarenia, preto dnešné mikrovlnné pozadie má nižšiu teplotu.',
    'v9v12-zlozenie': 'Podiely súčasného vesmíru: obyčajná hmota približne 5 %, temná hmota 27 %, temná energia 68 %.',
    'v9v12-nadoba': 'Tlak v kvapaline závisí od hĺbky h, nie od tvaru nádoby. Na dne oboch nádob je rovnaký tlak.',
    'v9v12-kontinuita': 'Pri nestlačiteľnej kvapaline platí S₁v₁ = S₂v₂. Kde je prierez menší, tam tečie rýchlejšie.',
    'v9v12-venturi': 'V zúženom mieste rastie rýchlosť a klesá tlak. Hladiny v manometrických trubiciach to ukazujú.',
    'v9v12-vrstvy': 'Pri laminárnom prúdení sa vrstvy kvapaliny posúvajú voči sebe, pričom vnútorné trenie spôsobuje odpor.',
    'v9v12-profil': 'Pri laminárnom prúdení je rýchlosť v priereze parabolická, pri turbulentnom je profil plochší.',
    'v9v12-krido': 'Nad krídlom je prúdenie rýchlejšie a tlak nižší, pod krídlom vyšší. Rozdiel tlakov vytvára vztlak.',
    'v9v12-rozpad': 'Pri polčase rozpadu T½ klesne počet nerozpadnutých jadier na polovicu, exponenciálny zákon N = N₀(1/2)^(t/T½).',
    'v9v12-rovnice': 'Rovnica dv/dt = a má nekonečne veľa riešení v = at + C. Počiatočná podmienka vyberie jedno z nich.',
    'v9v12-moment': 'Moment sily M = r × F je vektor kolmý na polohový vektor r aj na silu F.',
    'v9v12-fourier': 'Štvorcový signál sa dá zložiť zo sínusov. Prvá harmonická má amplitúdu 4A/π.',
    'v9v12-euler': 'Eulerova metóda s krokom h = 0,5 aproximuje rovnicu dy/dt = y lomenou čiarou, ktorá leží pod presnou krivkou.',
    'v9v12-pruziny': 'Sériovo zapojené pružiny majú menšiu tuhosť, paralelne zapojené pružiny sa tuhosti sčítavajú.'
  };

  LESSONS.forEach((l) => {
    const fig = ATTACH[l.id];
    if (fig) l.theory.push({ fig, caption: CAPTIONS[fig] });
  });
})();
