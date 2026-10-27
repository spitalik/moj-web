/* Statické obrázky k teórii lekcií 1.–5. ročníka ZŠ (inline SVG). Id obrázkov má prefix r1r5-.
   ATTACH určuje, v ktorých lekciách sa obrázok zobrazí, a pripojí sa na koniec ich teórie. */
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

  /* ---------- vzduch, voda, príroda ---------- */

  FIGURES.register('r1r5-vzduch-pohar', {
    draw: () => `<svg viewBox="0 0 360 220" role="img" aria-label="Pohár otočený dnom nahor ponorený do vody">
      <rect class="f-fill2" x="30" y="40" width="300" height="170"/>
      <line class="f-line" x1="30" y1="40" x2="330" y2="40"/>
      <rect class="f-fill3" x="150" y="70" width="60" height="80"/>
      <path class="f-line" fill="none" d="M150 150 V70 H210 V150"/>
      <text class="f-small" x="180" y="115" text-anchor="middle">vzduch</text>
      <text class="f-small" x="40" y="30">hladina vody</text></svg>`
  });

  FIGURES.register('r1r5-zem-den-noc', {
    draw: () => `<svg viewBox="0 0 380 220" role="img" aria-label="Striedanie dňa a noci otáčaním Zeme">
      ${arr(20, 60, 160, 60, 'f-warn')}
      ${arr(20, 120, 160, 120, 'f-warn')}
      ${arr(20, 180, 160, 180, 'f-warn')}
      <path class="f-fill3" d="M240 50 A70 70 0 0 0 240 190 Z"/>
      <path class="f-fill" d="M240 50 A70 70 0 0 1 240 190 Z"/>
      <circle class="f-line" fill="none" cx="240" cy="120" r="70"/>
      <line class="f-dash" x1="240" y1="34" x2="240" y2="206"/>
      <text class="f-small" x="20" y="40">Slnko</text>
      <text class="f-small" x="205" y="124" text-anchor="middle">deň</text>
      <text class="f-small" x="290" y="124" text-anchor="middle">noc</text>
      <text class="f-small" x="252" y="30">os</text></svg>`
  });

  FIGURES.register('r1r5-pruznost', {
    draw: () => `<svg viewBox="0 0 380 220" role="img" aria-label="Pružný a nepružný materiál po stlačení">
      <text class="f-small" x="30" y="30">guma: vráti sa do pôvodného tvaru</text>
      <rect class="f-fill3 f-outline3" x="40" y="45" width="60" height="60" rx="8"/>
      ${arr(108, 75, 142, 75, 'f-ok')}
      <text class="f-small" x="125" y="66" text-anchor="middle">stlač</text>
      <rect class="f-fill3 f-outline3" x="150" y="60" width="80" height="30" rx="8"/>
      ${arr(238, 75, 282, 75, 'f-ok')}
      <text class="f-small" x="260" y="66" text-anchor="middle">pustíme</text>
      <rect class="f-fill3 f-outline3" x="290" y="45" width="60" height="60" rx="8"/>
      <text class="f-small" x="30" y="130">plastelína: zostane stlačená</text>
      <rect class="f-fill2 f-outline2" x="40" y="140" width="60" height="60" rx="8"/>
      ${arr(108, 170, 142, 170, 'f-warn')}
      <text class="f-small" x="125" y="161" text-anchor="middle">stlač</text>
      <rect class="f-fill2 f-outline2" x="150" y="155" width="80" height="30" rx="8"/>
      ${arr(238, 170, 282, 170, 'f-warn')}
      <text class="f-small" x="260" y="161" text-anchor="middle">pustíme</text>
      <rect class="f-fill2 f-outline2" x="290" y="155" width="80" height="30" rx="8"/></svg>`
  });

  FIGURES.register('r1r5-priehladnost', {
    draw: () => `<svg viewBox="0 0 440 200" role="img" aria-label="Priehľadné, nepriehľadné a lesklé látky pri svetle">
      <rect class="f-dash" fill="none" x="150" y="28" width="24" height="44"/>
      <rect class="f-fill" x="150" y="83" width="24" height="44"/>
      <rect class="f-fill3" x="150" y="138" width="24" height="44"/>
      ${arr(40, 50, 280, 50, 'f-ok')}
      ${arr(40, 105, 146, 105, 'f-warn')}
      ${arr(40, 160, 146, 160, 'f-accent')}
      ${arr(146, 160, 116, 132, 'f-accent')}
      <text class="f-small" x="300" y="54">sklo: svetlo prejde</text>
      <text class="f-small" x="300" y="109">drevo: svetlo neprejde</text>
      <text class="f-small" x="300" y="164">kov: svetlo sa odráža</text></svg>`
  });

  FIGURES.register('r1r5-zmeny-voda', {
    draw: () => `<svg viewBox="0 0 440 215" role="img" aria-label="Topenie, mrznutie, vyparovanie a kondenzácia vody">
      <rect class="f-fill f-outline" x="10" y="80" width="90" height="44" rx="8"/>
      <rect class="f-fill2 f-outline2" x="170" y="80" width="90" height="44" rx="8"/>
      <rect class="f-fill3 f-outline3" x="330" y="80" width="90" height="44" rx="8"/>
      <text class="f-text" x="55" y="107" text-anchor="middle">ľad</text>
      <text class="f-text" x="215" y="107" text-anchor="middle">voda</text>
      <text class="f-text" x="375" y="107" text-anchor="middle">para</text>
      ${arr(100, 70, 170, 70, 'f-warn')}
      <text class="f-small" x="135" y="62" text-anchor="middle">topenie</text>
      ${arr(260, 70, 330, 70, 'f-warn')}
      <text class="f-small" x="295" y="62" text-anchor="middle">vyparovanie</text>
      ${arr(170, 150, 100, 150, 'f-ok')}
      <text class="f-small" x="135" y="168" text-anchor="middle">mrznutie</text>
      ${arr(330, 150, 260, 150, 'f-ok')}
      <text class="f-small" x="295" y="168" text-anchor="middle">kondenzácia</text>
      <text class="f-small" x="220" y="200" text-anchor="middle">šípky hore: teplo prijímame, šípky dole: teplo odovzdávame</text></svg>`
  });

  /* ---------- meranie ---------- */

  FIGURES.register('r1r5-pravitko', {
    draw: () => {
      let ticks = '';
      for (let k = 0; k <= 10; k++) {
        const x = 30 + 30 * k;
        ticks += `<line class="f-thin" x1="${x}" y1="100" x2="${x}" y2="112"/>
          <text class="f-small" x="${x}" y="126" text-anchor="middle">${k}</text>`;
      }
      return `<svg viewBox="0 0 360 170" role="img" aria-label="Meranie dĺžky predmetu pravítkom od nuly">
        <rect class="f-fill2 f-outline2" x="30" y="50" width="210" height="28"/>
        <text class="f-small" x="135" y="68" text-anchor="middle">predmet</text>
        <rect class="f-line" fill="none" x="30" y="100" width="300" height="26"/>
        ${ticks}
        <line class="f-accent" x1="30" y1="84" x2="30" y2="100"/>
        <text class="f-text" x="30" y="158">dĺžka predmetu = 7 cm</text></svg>`;
    }
  });

  FIGURES.register('r1r5-hladina', {
    draw: () => `<svg viewBox="0 0 380 240" role="img" aria-label="Objem telesa z rozdielu hladín vody">
      <path class="f-line" fill="none" d="M50 40 V200 H150 V40"/>
      <rect class="f-fill2" x="50" y="160" width="100" height="40"/>
      <line class="f-dash" x1="50" y1="160" x2="150" y2="160"/>
      <path class="f-line" fill="none" d="M210 40 V200 H310 V40"/>
      <rect class="f-fill2" x="210" y="120" width="100" height="80"/>
      <line class="f-dash" x1="210" y1="160" x2="310" y2="160"/>
      <line class="f-accent" x1="210" y1="120" x2="310" y2="120"/>
      <rect class="f-fill3 f-outline3" x="245" y="170" width="30" height="24"/>
      ${arr(330, 160, 330, 120, 'f-ok')}
      <text class="f-small" x="318" y="100">objem telesa</text>
      <text class="f-small" x="100" y="224" text-anchor="middle">pred ponorením</text>
      <text class="f-small" x="260" y="224" text-anchor="middle">po ponorení</text></svg>`
  });

  /* ---------- teplo ---------- */

  FIGURES.register('r1r5-teplo-tok', {
    draw: () => `<svg viewBox="0 0 400 180" role="img" aria-label="Teplo prechádza z teplejšieho telesa na chladnejšie">
      <rect class="f-fill3 f-outline3" x="40" y="60" width="110" height="70" rx="8"/>
      <text class="f-text" x="95" y="100" text-anchor="middle">teplejšie</text>
      <rect class="f-fill2 f-outline2" x="250" y="60" width="110" height="70" rx="8"/>
      <text class="f-text" x="305" y="100" text-anchor="middle">chladnejšie</text>
      ${arr(160, 95, 240, 95, 'f-warn')}
      <text class="f-small" x="200" y="84" text-anchor="middle">teplo</text>
      <text class="f-small" x="200" y="158" text-anchor="middle">teplo sa prenáša len smerom k chladnejšiemu telesu</text></svg>`
  });

  FIGURES.register('r1r5-castice-teplota', {
    draw: () => {
      const pts = [[50, 90], [92, 72], [125, 100], [62, 130], [110, 138], [84, 106]];
      const ang = [0.4, 2.2, -0.9, 1.6, 3.6, -2.4];
      const part = (dx, len, cls) => pts.map((p, i) => {
        const x = p[0] + dx, y = p[1];
        return `<circle class="f-dot" cx="${x}" cy="${y}" r="3"/>${arr(x, y, x + len * Math.cos(ang[i]), y + len * Math.sin(ang[i]), cls)}`;
      }).join('');
      return `<svg viewBox="0 0 400 230" role="img" aria-label="Častice vody v studenej a teplej vode">
        <path class="f-line" fill="none" d="M30 50 V190 H160 V50"/>
        <path class="f-line" fill="none" d="M240 50 V190 H370 V50"/>
        ${part(0, 16, 'f-accent')}
        ${part(210, 26, 'f-warn')}
        <rect class="f-fill3 f-outline3" x="84" y="168" width="16" height="12"/>
        <rect class="f-fill3 f-outline3" x="294" y="168" width="16" height="12"/>
        <text class="f-small" x="95" y="215" text-anchor="middle">studená voda: pomalé častice</text>
        <text class="f-small" x="305" y="215" text-anchor="middle">teplá voda: rýchle častice</text></svg>`;
    }
  });

  FIGURES.register('r1r5-teplomer', {
    draw: () => `<svg viewBox="0 0 320 250" role="img" aria-label="Stupnica Celzia s bodmi 0 a 100 stupňov">
      <rect class="f-line" fill="none" x="170" y="30" width="20" height="170"/>
      <rect class="f-fill2" x="174" y="160" width="12" height="62"/>
      <circle class="f-fill3 f-outline3" cx="180" cy="222" r="14"/>
      <line class="f-thin" x1="190" y1="40" x2="202" y2="40"/>
      <line class="f-thin" x1="190" y1="190" x2="202" y2="190"/>
      <line class="f-thin" x1="190" y1="197.5" x2="202" y2="197.5"/>
      <text class="f-small" x="208" y="44">100 °C</text>
      <text class="f-small" x="208" y="194">0 °C</text>
      <text class="f-small" x="208" y="207">−5 °C</text></svg>`
  });

  /* ---------- sily, energia, elektrina ---------- */

  FIGURES.register('r1r5-sily-stol', {
    draw: () => `<svg viewBox="0 0 400 210" role="img" aria-label="Kniha na stole: tiaž a sila podložky sú v rovnováhe">
      <line class="f-line" x1="90" y1="134" x2="310" y2="134"/>
      <line class="f-line" x1="100" y1="134" x2="100" y2="186"/>
      <line class="f-line" x1="300" y1="134" x2="300" y2="186"/>
      <rect class="f-fill2 f-outline2" x="160" y="100" width="80" height="34"/>
      ${arr(200, 117, 200, 52, 'f-ok')}
      ${arr(200, 117, 200, 182, 'f-warn')}
      <text class="f-math" x="214" y="62">N</text>
      <text class="f-math" x="214" y="176">Fg</text></svg>`
  });

  FIGURES.register('r1r5-zvuk-vlna', {
    draw: () => {
      const wave = (y0, A, per) => {
        let d = '';
        for (let x = 20; x <= 300; x += 2) {
          const y = y0 - A * Math.sin(2 * Math.PI * (x - 20) / per);
          d += `${x === 20 ? 'M' : 'L'}${x} ${n1(y)}`;
        }
        return d;
      };
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Tri zvukové vlny: pôvodný tón, vyšší tón a hlasnejší tón">
        <line class="f-dash" x1="20" y1="50" x2="300" y2="50"/>
        <path class="f-accent" fill="none" d="${wave(50, 18, 100)}"/>
        <text class="f-small" x="318" y="54">pôvodný</text>
        <line class="f-dash" x1="20" y1="120" x2="300" y2="120"/>
        <path class="f-ok" fill="none" d="${wave(120, 18, 50)}"/>
        <text class="f-small" x="318" y="124">vyšší tón</text>
        <line class="f-dash" x1="20" y1="190" x2="300" y2="190"/>
        <path class="f-warn" fill="none" d="${wave(190, 32, 100)}"/>
        <text class="f-small" x="318" y="194">hlasnejší</text></svg>`;
    }
  });

  FIGURES.register('r1r5-obvod-spinac', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Jednoduchý obvod s rozpojeným spínačom">
      <path class="f-line" fill="none" d="M60 160 V122 M60 78 V40 H190 M240 40 H360 V86 M360 114 V160 H60"/>
      <rect class="f-fill3 f-outline3" x="48" y="78" width="24" height="44"/>
      <text class="f-small" x="38" y="104" text-anchor="end">zdroj</text>
      <line class="f-accent" x1="190" y1="40" x2="222" y2="22"/>
      <circle class="f-dot" cx="190" cy="40" r="3"/>
      <circle class="f-dot" cx="240" cy="40" r="3"/>
      <text class="f-small" x="215" y="14" text-anchor="middle">spínač rozpojený</text>
      <text class="f-small" x="215" y="62" text-anchor="middle">prúd netečie</text>
      <circle class="f-fill2 f-outline2" cx="360" cy="100" r="14"/>
      <text class="f-small" x="336" y="104" text-anchor="end">žiarovka</text></svg>`
  });

  FIGURES.register('r1r5-premeny-energie', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Premena elektrickej energie na pohybovú, svetelnú a tepelnú">
      <rect class="f-fill3 f-outline3" x="20" y="38" width="110" height="44" rx="8"/>
      <text class="f-text" x="75" y="65" text-anchor="middle">elektrická</text>
      <rect class="f-fill3 f-outline3" x="20" y="140" width="110" height="40" rx="8"/>
      <text class="f-text" x="75" y="165" text-anchor="middle">elektrická</text>
      <rect class="f-fill2 f-outline2" x="250" y="38" width="150" height="44" rx="8"/>
      <text class="f-text" x="325" y="56" text-anchor="middle">pohybová</text>
      <text class="f-small" x="325" y="72" text-anchor="middle">ventilátor</text>
      <rect class="f-fill2 f-outline2" x="250" y="120" width="150" height="34" rx="8"/>
      <text class="f-text" x="325" y="142" text-anchor="middle">svetelná</text>
      <rect class="f-fill2 f-outline2" x="250" y="166" width="150" height="34" rx="8"/>
      <text class="f-text" x="325" y="188" text-anchor="middle">tepelná</text>
      ${arr(130, 60, 250, 60, 'f-ok')}
      ${arr(130, 160, 250, 137, 'f-ok')}
      ${arr(130, 160, 250, 183, 'f-ok')}
      <text class="f-small" x="150" y="122" text-anchor="middle">žiarovka</text></svg>`
  });

  /* ---------- látky, hustota, skupenstvá ---------- */

  FIGURES.register('r1r5-castice-skupenstva', {
    draw: () => {
      const grid = (x0) => {
        let s = '';
        for (let i = 0; i < 5; i++) for (let j = 0; j < 4; j++) {
          s += `<circle class="f-dot" cx="${x0 + 20 + i * 20}" cy="${45 + j * 25}" r="4"/>`;
        }
        return s;
      };
      const jitter = (x0) => {
        let s = '';
        for (let i = 0; i < 5; i++) for (let j = 0; j < 4; j++) {
          const dx = (i * 7 + j * 5) % 5 - 2, dy = (i * 3 + j * 7) % 5 - 2;
          s += `<circle class="f-dot" cx="${x0 + 20 + i * 20 + dx}" cy="${45 + j * 25 + dy}" r="4"/>`;
        }
        return s;
      };
      const gas = [[305, 45], [350, 60], [392, 40], [320, 95], [370, 100], [340, 125], [398, 122]]
        .map((p) => `<circle class="f-dot" cx="${p[0]}" cy="${p[1]}" r="4"/>`).join('');
      return `<svg viewBox="0 0 420 210" role="img" aria-label="Usporiadanie častíc v pevnej, kvapalnej a plynnej látke">
        <rect class="f-fill f-outline" x="10" y="20" width="120" height="120" rx="8"/>
        <rect class="f-fill2 f-outline2" x="150" y="20" width="120" height="120" rx="8"/>
        <rect class="f-fill3 f-outline3" x="290" y="20" width="120" height="120" rx="8"/>
        ${grid(10)}
        ${jitter(150)}
        ${gas}
        <text class="f-text" x="70" y="164" text-anchor="middle">pevné</text>
        <text class="f-text" x="210" y="164" text-anchor="middle">kvapalné</text>
        <text class="f-text" x="350" y="164" text-anchor="middle">plynné</text>
        <text class="f-small" x="70" y="184" text-anchor="middle">pevne usporiadané</text>
        <text class="f-small" x="210" y="184" text-anchor="middle">blízko, neusporiadané</text>
        <text class="f-small" x="350" y="184" text-anchor="middle">ďaleko od seba</text></svg>`;
    }
  });

  FIGURES.register('r1r5-hustota-voda', {
    draw: () => `<svg viewBox="0 0 380 240" role="img" aria-label="Kameň sa potopí, drevo pláva na vode">
      <path class="f-line" fill="none" d="M30 60 V210 H170 V60"/>
      <rect class="f-fill2" x="30" y="100" width="140" height="110"/>
      <rect class="f-fill3 f-outline3" x="80" y="176" width="40" height="24"/>
      <text class="f-small" x="100" y="140" text-anchor="middle">voda</text>
      <text class="f-small" x="100" y="228" text-anchor="middle">kameň sa potopí</text>
      <path class="f-line" fill="none" d="M210 60 V210 H350 V60"/>
      <rect class="f-fill2" x="210" y="100" width="140" height="110"/>
      <rect class="f-fill" x="245" y="86" width="70" height="30"/>
      <text class="f-small" x="280" y="140" text-anchor="middle">voda</text>
      <text class="f-small" x="280" y="228" text-anchor="middle">drevo pláva</text></svg>`
  });

  /* ---------- pripojenie k lekciám ---------- */

  // lekcia → id obrázka; obrázok sa doplní na koniec teórie lekcie
  const ATTACH = {
    'r1-zmeny-prirody': 'r1r5-zem-den-noc',
    'r1-vlastnosti-materialov': 'r1r5-pruznost',
    'r1-voda-vzduch': 'r1r5-vzduch-pohar',
    'r2-voda-vzduch': 'r1r5-vzduch-pohar',
    'r2-vlastnosti-latok': 'r1r5-priehladnost',
    'r2-zmeny-skupenstva': 'r1r5-zmeny-voda',
    'r3-merania': 'r1r5-pravitko',
    'r3-teplo': 'r1r5-teplo-tok',
    'r3-rozpustanie': 'r1r5-castice-teplota',
    'r3-pohyb': 'r1r5-sily-stol',
    'r4-zvuk': 'r1r5-zvuk-vlna',
    'r4-elektricke-zariadenia': 'r1r5-obvod-spinac',
    'r4-energia': 'r1r5-premeny-energie',
    'r5-skupenstva': 'r1r5-castice-skupenstva',
    'r5-hustota': 'r1r5-hustota-voda',
    'r5-merania': 'r1r5-hladina',
    'r5-teplota': 'r1r5-teplomer'
  };

  // popisky pod obrázkami
  const CAPTIONS = {
    'r1r5-vzduch-pohar': 'Pohár otočený dnom nahor a ponorený do vody zostane suchý, lebo vzduch v ňom zaberá priestor a vodu nepustí dnu.',
    'r1r5-zem-den-noc': 'Zem sa otáča okolo svojej osi. Strana obrátená k Slnku má deň, odvrátená strana má noc.',
    'r1r5-pruznost': 'Pružná guma sa po stlačení vráti do pôvodného tvaru, plastelína si nový tvar zachová.',
    'r1r5-priehladnost': 'Sklo prepúšťa svetlo, drevo ho zastaví a kov svetlo odráža.',
    'r1r5-zmeny-voda': 'Topenie a vyparovanie vyžadujú prijatie tepla, mrznutie a kondenzácia ho odovzdávajú.',
    'r1r5-pravitko': 'Pravítko priložíme nulou k začiatku predmetu a odčítame koniec. Predmet má dĺžku 7 cm.',
    'r1r5-teplo-tok': 'Teplo prechádza z teplejšieho telesa na chladnejšie, nie naopak.',
    'r1r5-castice-teplota': 'V teplejšej vode sa častice pohybujú rýchlejšie, preto sa cukor rozpúšťa rýchlejšie.',
    'r1r5-sily-stol': 'Kniha leží na stole: podložka tlačí nahor silou N, gravitácia ťahá dolu silou Fg. Sily sa vyrovnajú.',
    'r1r5-zvuk-vlna': 'Vyšší tón má rýchlejšie kmitanie (kratšiu periódu). Hlasnejší zvuk má väčší výkyv, teda väčšiu amplitúdu.',
    'r1r5-obvod-spinac': 'Keď je spínač rozpojený, obvod je prerušený, prúd netečie a žiarovka nesvieti.',
    'r1r5-premeny-energie': 'Ventilátor mení elektrickú energiu na pohybovú, žiarovka na svetelnú a tepelnú.',
    'r1r5-castice-skupenstva': 'Pevné látky majú častice pevne usporiadané, kvapaliny sú blízko a neusporiadané, plyny sú ďaleko od seba.',
    'r1r5-hustota-voda': 'Teleso s väčšou hustotou než voda sa potopí (kameň), teleso s menšou hustotou pláva (drevo).',
    'r1r5-hladina': 'Objem ponoreného telesa je rozdiel hladín vody po ponorení a pred ponorením.',
    'r1r5-teplomer': 'Stupnica Celzia má dva pevné body: topiaci sa ľad 0 °C a vriaca voda 100 °C. Záporné teploty sú pod nulou.'
  };

  LESSONS.forEach((l) => {
    const fig = ATTACH[l.id];
    if (fig) l.theory.push({ fig, caption: CAPTIONS[fig] });
  });
})();
