/* Statické obrázky k teórii lekcií 6.–9. ročníka (inline SVG). Každý obrázok je FIGURES.register bez posuvníkov;
   ATTACH určuje, v ktorých lekciách sa zobrazí, a pripojí sa na koniec ich teórie. */
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

  /* ---------- látky a tekutiny (6. ročník) ---------- */

  FIGURES.register('r6r9-hustota', {
    draw: () => `<svg viewBox="0 0 460 190" role="img" aria-label="Hustota vybraných látok v g/cm³">
      <text class="f-text" x="230" y="24" text-anchor="middle">Hustota vybraných látok</text>
      <text class="f-small" x="110" y="70" text-anchor="end">voda</text>
      <text class="f-small" x="110" y="120" text-anchor="end">hliník</text>
      <text class="f-small" x="110" y="170" text-anchor="end">železo</text>
      <rect class="f-fill3 f-outline3" x="125" y="50" width="30" height="30"/>
      <rect class="f-fill f-outline" x="125" y="100" width="81" height="30"/>
      <rect class="f-fill2 f-outline2" x="125" y="150" width="234" height="30"/>
      <text class="f-math" x="165" y="70">1 g/cm³</text>
      <text class="f-math" x="216" y="120">2,7 g/cm³</text>
      <text class="f-math" x="369" y="170">7,8 g/cm³</text></svg>`
  });

  // častice: pevná látka (mriežka), kvapalina (blízko, neusporiadane), plyn (rozptýlené)
  const dots = (pts, x0, cls) => pts.map(([a, b]) => `<circle class="${cls}" cx="${x0 + a}" cy="${50 + b}" r="5"/>`).join('');
  const SOLID = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) SOLID.push([30 + c * 20, 30 + r * 20]);
  const LIQ = [[30, 40], [52, 36], [74, 44], [96, 38], [40, 62], [62, 70], [84, 64], [104, 72], [30, 88], [52, 94], [76, 96], [98, 100]];
  const GAS = [[18, 22], [92, 20], [55, 48], [22, 80], [98, 76], [64, 96], [36, 44], [82, 60]];

  FIGURES.register('r6r9-castice', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Usporiadanie častíc v pevnej látke, kvapaline a plyne">
      <rect class="f-line" fill="none" x="20" y="50" width="120" height="110" rx="6"/>
      <rect class="f-line" fill="none" x="150" y="50" width="120" height="110" rx="6"/>
      <rect class="f-line" fill="none" x="280" y="50" width="120" height="110" rx="6"/>
      ${dots(SOLID, 20, 'f-dot')}
      ${dots(LIQ, 150, 'f-dot')}
      ${dots(GAS, 280, 'f-dot')}
      <text class="f-text" x="80" y="182" text-anchor="middle">pevné</text>
      <text class="f-text" x="210" y="182" text-anchor="middle">kvapalné</text>
      <text class="f-text" x="340" y="182" text-anchor="middle">plynné</text></svg>`
  });

  FIGURES.register('r6r9-atmosfera', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Stĺpec vzduchu nad hladinou mora a nad horou">
      <line class="f-line" x1="20" y1="190" x2="400" y2="190"/>
      <rect class="f-fill2 f-outline2" x="60" y="40" width="60" height="150"/>
      <rect class="f-fill2 f-outline2" x="280" y="40" width="40" height="100"/>
      <polygon class="f-fill3 f-outline3" points="230,190 300,120 370,190"/>
      ${arr(90, 16, 90, 34, 'f-warn')}
      ${arr(300, 16, 300, 34, 'f-warn')}
      <text class="f-small" x="104" y="26">tlak</text>
      <text class="f-small" x="314" y="26">tlak</text>
      <text class="f-small" x="90" y="208" text-anchor="middle">hladina mora: veľa vzduchu</text>
      <text class="f-small" x="300" y="208" text-anchor="middle">hora: menej vzduchu</text></svg>`
  });

  FIGURES.register('r6r9-var', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Vyparovanie na hladine a var v celom objeme kvapaliny">
      <rect class="f-line" fill="none" x="40" y="70" width="130" height="120"/>
      <rect class="f-fill2" x="40" y="100" width="130" height="90"/>
      ${arr(70, 96, 70, 72, 'f-ok')}
      ${arr(105, 96, 105, 72, 'f-ok')}
      ${arr(140, 96, 140, 72, 'f-ok')}
      <text class="f-small" x="105" y="212" text-anchor="middle">vyparovanie na hladine</text>
      <rect class="f-line" fill="none" x="250" y="70" width="130" height="120"/>
      <rect class="f-fill2" x="250" y="100" width="130" height="90"/>
      <circle class="f-line" fill="none" cx="280" cy="170" r="6"/>
      <circle class="f-line" fill="none" cx="305" cy="150" r="6"/>
      <circle class="f-line" fill="none" cx="335" cy="172" r="6"/>
      <circle class="f-line" fill="none" cx="352" cy="130" r="6"/>
      <circle class="f-line" fill="none" cx="292" cy="132" r="6"/>
      <text class="f-small" x="315" y="212" text-anchor="middle">var: v celom objeme</text></svg>`
  });

  // prenos tepla: rozdiel teplôt a tri spôsoby prenosu
  FIGURES.register('r6r9-prenos-tepla', {
    draw: () => `<svg viewBox="0 0 420 215" role="img" aria-label="Prenos tepla z teplejšieho telesa do chladnejšieho">
      <rect class="f-fill3 f-outline3" x="30" y="30" width="110" height="50" rx="6"/>
      <rect class="f-fill f-outline" x="280" y="30" width="110" height="50" rx="6"/>
      <text class="f-math" x="85" y="60" text-anchor="middle">80 °C</text>
      <text class="f-math" x="335" y="60" text-anchor="middle">20 °C</text>
      <text class="f-small" x="85" y="100" text-anchor="middle">teplejšie</text>
      <text class="f-small" x="335" y="100" text-anchor="middle">chladnejšie</text>
      ${arr(150, 55, 270, 55, 'f-accent')}
      <text class="f-small" x="210" y="46" text-anchor="middle">teplo</text>
      <line class="f-solid" x1="40" y1="150" x2="110" y2="150" stroke-width="4"/>
      ${arr(45, 132, 105, 132, 'f-warn')}
      <text class="f-small" x="75" y="205" text-anchor="middle">vedením</text>
      ${arr(200, 160, 200, 128, 'f-warn')}
      ${arr(230, 128, 230, 160, 'f-ok')}
      <text class="f-small" x="215" y="205" text-anchor="middle">prúdením</text>
      <circle class="f-fill2 f-outline2" cx="350" cy="150" r="10"/>
      ${arr(366, 150, 392, 150, 'f-warn')}
      ${arr(364, 138, 378, 124, 'f-warn')}
      <text class="f-small" x="350" y="205" text-anchor="middle">sálaním</text></svg>`
  });

  /* ---------- pohyb a sily (7. ročník) ---------- */

  // graf dráhy od času: rovnomerný pohyb (priamka) a zrýchlený pohyb (krivka)
  FIGURES.register('r6r9-rovnomerny', {
    draw: () => `<svg viewBox="0 0 420 230" role="img" aria-label="Graf dráhy od času pri rovnomernom a zrýchlenom pohybe">
      <line class="f-line" x1="60" y1="200" x2="390" y2="200"/>
      <line class="f-line" x1="60" y1="200" x2="60" y2="20"/>
      <line class="f-accent" x1="60" y1="200" x2="340" y2="80"/>
      <path class="f-ok" fill="none" d="M60 200 Q250 200 340 40"/>
      <text class="f-small" x="95" y="120">rovnomerný pohyb</text>
      <text class="f-small" x="250" y="168">zrýchlený pohyb</text>
      <text class="f-small" x="66" y="22">s (m)</text>
      <text class="f-small" x="372" y="218">t (s)</text></svg>`
  });

  // tiaž rovnakej hmotnosti na Zemi a na Mesiaci (dĺžka šípky je úmerná tiaži)
  FIGURES.register('r6r9-tiaz', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Tiaž telesa s hmotnosťou 5 kg na Zemi a na Mesiaci">
      <text class="f-text" x="120" y="24" text-anchor="middle">Zem: g ≈ 10 N/kg</text>
      <rect class="f-fill3 f-outline3" x="100" y="40" width="40" height="40" rx="4"/>
      <text class="f-small" x="120" y="64" text-anchor="middle">5 kg</text>
      ${arr(120, 86, 120, 186, 'f-warn')}
      <text class="f-math" x="134" y="140">F_G = 50 N</text>
      <text class="f-text" x="300" y="24" text-anchor="middle">Mesiac: g ≈ 1,6 N/kg</text>
      <rect class="f-fill2 f-outline2" x="280" y="40" width="40" height="40" rx="4"/>
      <text class="f-small" x="300" y="64" text-anchor="middle">5 kg</text>
      ${arr(300, 86, 300, 102, 'f-warn')}
      <text class="f-math" x="314" y="98">F_G = 8 N</text></svg>`
  });

  // zatmenie Slnka: Mesiac medzi Slnkom a Zemou (nie v mierke)
  FIGURES.register('r6r9-zatmenie', {
    draw: () => `<svg viewBox="0 0 420 225" role="img" aria-label="Zatmenie Slnka: Mesiac medzi Slnkom a Zemou">
      <line class="f-dash" x1="50" y1="80" x2="350" y2="116"/>
      <line class="f-dash" x1="50" y1="140" x2="350" y2="104"/>
      <circle class="f-fill2 f-outline2" cx="50" cy="110" r="30"/>
      <circle class="f-fill f-outline" cx="200" cy="110" r="12"/>
      <circle class="f-fill3 f-outline3" cx="350" cy="110" r="22"/>
      <text class="f-small" x="50" y="162" text-anchor="middle">Slnko</text>
      <text class="f-small" x="200" y="146" text-anchor="middle">Mesiac</text>
      <text class="f-small" x="350" y="152" text-anchor="middle">Zem</text>
      <text class="f-small" x="330" y="60" text-anchor="middle">tieň na Zemi</text>
      <text class="f-small" x="210" y="214" text-anchor="middle">obrázok nie je v mierke</text></svg>`
  });

  // obraz v rovinnom zrkadle: rovnaká vzdialenosť za zrkadlom
  FIGURES.register('r6r9-zrkadlo', {
    draw: () => `<svg viewBox="0 0 420 215" role="img" aria-label="Obraz predmetu v rovinnom zrkadle">
      <line class="f-solid" x1="210" y1="40" x2="210" y2="170" stroke-width="3"/>
      <text class="f-small" x="222" y="52">zrkadlo</text>
      <line class="f-line" x1="40" y1="170" x2="380" y2="170"/>
      <line class="f-dash" x1="110" y1="100" x2="310" y2="100"/>
      ${arr(110, 170, 110, 100, 'f-ok')}
      ${arr(310, 170, 310, 100, 'f-dash')}
      <text class="f-small" x="110" y="88" text-anchor="middle">predmet</text>
      <text class="f-small" x="310" y="88" text-anchor="middle">obraz</text>
      <text class="f-math" x="160" y="120" text-anchor="middle">2 m</text>
      <text class="f-math" x="260" y="120" text-anchor="middle">2 m</text>
      <text class="f-small" x="210" y="200" text-anchor="middle">obraz je za zrkadlom rovnako vzdialený</text></svg>`
  });

  /* ---------- práca a energia (8. ročník) ---------- */

  // práca: sila v smere posunu koná prácu, sila na múr bez posunu nie
  FIGURES.register('r6r9-praca', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Práca pri posune v smere sily a bez posunu">
      <text class="f-text" x="100" y="40" text-anchor="middle">posun v smere sily: W = F·s</text>
      <line class="f-line" x1="10" y1="160" x2="200" y2="160"/>
      <rect class="f-dash" fill="none" x="30" y="120" width="40" height="40"/>
      <rect class="f-fill f-outline" x="110" y="120" width="40" height="40"/>
      ${arr(74, 140, 106, 140, 'f-accent')}
      <text class="f-math" x="84" y="132" text-anchor="middle">F</text>
      ${arr(30, 182, 110, 182, 'f-ok')}
      <text class="f-math" x="70" y="200" text-anchor="middle">s</text>
      <text class="f-text" x="320" y="40" text-anchor="middle">bez posunu: W = 0</text>
      <line class="f-line" x1="230" y1="160" x2="410" y2="160"/>
      <rect class="f-fill2 f-outline2" x="220" y="60" width="16" height="100"/>
      ${arr(300, 110, 242, 110, 'f-accent')}
      <text class="f-math" x="270" y="102" text-anchor="middle">F</text>
      <text class="f-math" x="320" y="150" text-anchor="middle">s = 0</text></svg>`
  });

  // pohybová energia: dvojnásobná rýchlosť znamená štvornásobnú energiu
  FIGURES.register('r6r9-kinetika', {
    draw: () => `<svg viewBox="0 0 420 215" role="img" aria-label="Pohybová energia pri rýchlosti v a 2v">
      <text class="f-small" x="20" y="22">pohybová energia pri rovnakej hmotnosti</text>
      <line class="f-line" x1="80" y1="190" x2="380" y2="190"/>
      <rect class="f-fill f-outline" x="120" y="150" width="70" height="40"/>
      <rect class="f-fill3 f-outline3" x="240" y="30" width="70" height="160"/>
      <text class="f-math" x="155" y="176" text-anchor="middle">1×</text>
      <text class="f-math" x="275" y="112" text-anchor="middle">4×</text>
      <text class="f-small" x="155" y="208" text-anchor="middle">rýchlosť v</text>
      <text class="f-small" x="275" y="208" text-anchor="middle">rýchlosť 2v</text></svg>`
  });

  // elektrický náboj: dvojica rovnakých a dvojica opačných nábojov
  FIGURES.register('r6r9-naboj', {
    draw: () => `<svg viewBox="0 0 420 190" role="img" aria-label="Odpudzovanie rovnakých a priťahovanie opačných nábojov">
      <text class="f-small" x="110" y="28" text-anchor="middle">rovnaké náboje</text>
      <text class="f-small" x="310" y="28" text-anchor="middle">opačné náboje</text>
      <circle class="f-fill2 f-outline2" cx="80" cy="105" r="20"/>
      <circle class="f-fill2 f-outline2" cx="140" cy="105" r="20"/>
      <text class="f-math" x="80" y="111" text-anchor="middle">+</text>
      <text class="f-math" x="140" y="111" text-anchor="middle">+</text>
      ${arr(60, 105, 28, 105, 'f-ok')}
      ${arr(160, 105, 192, 105, 'f-ok')}
      <text class="f-small" x="110" y="165" text-anchor="middle">odpudzujú sa</text>
      <circle class="f-fill2 f-outline2" cx="280" cy="105" r="20"/>
      <circle class="f-fill3 f-outline3" cx="340" cy="105" r="20"/>
      <text class="f-math" x="280" y="111" text-anchor="middle">+</text>
      <text class="f-math" x="340" y="111" text-anchor="middle">−</text>
      ${arr(236, 105, 256, 105, 'f-accent')}
      ${arr(384, 105, 364, 105, 'f-accent')}
      <text class="f-small" x="310" y="165" text-anchor="middle">priťahujú sa</text></svg>`
  });

  /* ---------- elektrina (8. a 9. ročník) ---------- */

  // ampérmeter v sérii, voltmeter paralelne k žiarovke
  FIGURES.register('r6r9-merania', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Zapojenie ampérmetra v sérii a voltmetra paralelne so žiarovkou">
      <path class="f-line" fill="none" d="M60 50 H360 V160 H60 V118 M60 92 V50"/>
      <line class="f-solid" x1="48" y1="98" x2="72" y2="98" stroke-width="4"/>
      <line class="f-line" x1="54" y1="112" x2="66" y2="112"/>
      <text class="f-small" x="36" y="108" text-anchor="end">zdroj</text>
      <circle class="f-fill" cx="210" cy="50" r="12"/>
      <text class="f-math" x="210" y="55" text-anchor="middle">A</text>
      <text class="f-small" x="210" y="30" text-anchor="middle">ampérmeter v sérii</text>
      <circle class="f-fill3 f-outline3" cx="290" cy="160" r="12"/>
      <text class="f-small" x="290" y="140" text-anchor="middle">žiarovka</text>
      <path class="f-line" fill="none" d="M250 160 V200 H278 M302 200 H330 V160"/>
      <circle class="f-fill" cx="290" cy="200" r="12"/>
      <text class="f-math" x="290" y="205" text-anchor="middle">V</text>
      <text class="f-small" x="290" y="232" text-anchor="middle">voltmeter paralelne</text></svg>`
  });

  // Ohmov zákon: pri rovnakom napätí väčší odpor znamená menší prúd
  FIGURES.register('r6r9-odpor', {
    draw: () => `<svg viewBox="0 0 420 215" role="img" aria-label="Prúd pri rovnakom napätí a dvoch odporoch">
      <text class="f-text" x="210" y="24" text-anchor="middle">Napätie U = 12 V je pri oboch rovnaké</text>
      <line class="f-line" x1="80" y1="180" x2="340" y2="180"/>
      <rect class="f-fill3 f-outline3" x="110" y="60" width="60" height="120"/>
      <rect class="f-fill2 f-outline2" x="250" y="140" width="60" height="40"/>
      <text class="f-math" x="140" y="50" text-anchor="middle">I = 6 A</text>
      <text class="f-math" x="280" y="130" text-anchor="middle">I = 2 A</text>
      <text class="f-math" x="140" y="200" text-anchor="middle">R = 2 Ω</text>
      <text class="f-math" x="280" y="200" text-anchor="middle">R = 6 Ω</text></svg>`
  });

  // vodiče a izolanty: voľné a viazané elektróny
  FIGURES.register('r6r9-vodice', {
    draw: () => `<svg viewBox="0 0 420 210" role="img" aria-label="Vodiče a izolanty">
      <rect class="f-fill3 f-outline3" x="30" y="30" width="170" height="160" rx="8"/>
      <rect class="f-fill2 f-outline2" x="220" y="30" width="170" height="160" rx="8"/>
      <text class="f-text" x="115" y="58" text-anchor="middle">vodiče</text>
      <text class="f-small" x="115" y="78" text-anchor="middle">voľné elektróny</text>
      <text class="f-text" x="115" y="108" text-anchor="middle">meď</text>
      <text class="f-text" x="115" y="130" text-anchor="middle">hliník</text>
      <text class="f-text" x="115" y="152" text-anchor="middle">železo</text>
      <text class="f-text" x="115" y="174" text-anchor="middle">grafit</text>
      <text class="f-text" x="305" y="58" text-anchor="middle">izolanty</text>
      <text class="f-small" x="305" y="78" text-anchor="middle">elektróny pevne viazané</text>
      <text class="f-text" x="305" y="108" text-anchor="middle">plast</text>
      <text class="f-text" x="305" y="130" text-anchor="middle">guma</text>
      <text class="f-text" x="305" y="152" text-anchor="middle">sklo</text>
      <text class="f-text" x="305" y="174" text-anchor="middle">suché drevo</text></svg>`
  });

  // Ohmov trojuholník: zakrytím hľadanej veličiny vidíme vzorec
  FIGURES.register('r6r9-trojuholnik', {
    draw: () => `<svg viewBox="0 0 420 190" role="img" aria-label="Trojuholník pre Ohmov zákon">
      <polygon class="f-line" fill="none" points="200,30 120,160 280,160"/>
      <line class="f-line" x1="155" y1="104" x2="245" y2="104"/>
      <line class="f-line" x1="200" y1="104" x2="200" y2="160"/>
      <text class="f-math" x="200" y="84" text-anchor="middle">U</text>
      <text class="f-math" x="165" y="140" text-anchor="middle">I</text>
      <text class="f-math" x="235" y="140" text-anchor="middle">R</text>
      <text class="f-math" x="320" y="70">U = I · R</text>
      <text class="f-math" x="320" y="110">I = U : R</text>
      <text class="f-math" x="320" y="150">R = U : I</text></svg>`
  });

  // elektromagnet: cievka okolo železného jadra, napájaná batériou
  FIGURES.register('r6r9-elektromagnet', {
    draw: () => {
      let loops = '';
      for (let x = 150; x <= 262; x += 16) loops += `<ellipse class="f-line" fill="none" cx="${x}" cy="110" rx="5" ry="24"/>`;
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Elektromagnet: cievka s železným jadrom">
        <rect class="f-fill2 f-outline2" x="130" y="100" width="160" height="20"/>
        ${loops}
        <path class="f-line" fill="none" d="M144 110 H96 V200 H168 M184 200 H276 V110 H268"/>
        <line class="f-solid" x1="172" y1="190" x2="172" y2="210" stroke-width="4"/>
        <line class="f-line" x1="180" y1="196" x2="180" y2="204"/>
        <text class="f-small" x="176" y="228" text-anchor="middle">zdroj</text>
        <text class="f-small" x="210" y="68" text-anchor="middle">cievka s jadrom z železa</text></svg>`;
    }
  });

  /* ---------- energia a zdroje (9. ročník) ---------- */

  // uhoľná elektráreň: postupná premena energie
  FIGURES.register('r6r9-elektrarna', {
    draw: () => `<svg viewBox="0 0 420 170" role="img" aria-label="Premeny energie v uhoľnej elektrárni">
      <text class="f-text" x="210" y="30" text-anchor="middle">Uhoľná elektráreň: premeny energie</text>
      <rect class="f-fill3 f-outline3" x="8" y="60" width="80" height="50" rx="6"/>
      <rect class="f-fill2 f-outline2" x="114" y="60" width="80" height="50" rx="6"/>
      <rect class="f-fill f-outline" x="220" y="60" width="80" height="50" rx="6"/>
      <rect class="f-fill3 f-outline3" x="326" y="60" width="80" height="50" rx="6"/>
      <text class="f-small" x="48" y="90" text-anchor="middle">chemická</text>
      <text class="f-small" x="154" y="90" text-anchor="middle">tepelná</text>
      <text class="f-small" x="260" y="90" text-anchor="middle">mechanická</text>
      <text class="f-small" x="366" y="90" text-anchor="middle">elektrická</text>
      ${arr(90, 85, 112, 85, 'f-accent')}
      ${arr(196, 85, 218, 85, 'f-accent')}
      ${arr(302, 85, 324, 85, 'f-accent')}
      <text class="f-small" x="210" y="150" text-anchor="middle">časť energie odchádza ako teplo do okolia</text></svg>`
  });

  // účinnosť: dodaná energia 400 J, užitočná 100 J, zvyšok 300 J sa stráca ako teplo
  FIGURES.register('r6r9-ucinnost', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Účinnosť: dodaná, užitočná a stratená energia">
      <text class="f-small" x="210" y="22" text-anchor="middle">účinnosť = 100 J : 400 J = 25 %</text>
      <line class="f-line" x1="40" y1="200" x2="380" y2="200"/>
      <rect class="f-fill f-outline" x="60" y="40" width="80" height="160"/>
      <rect class="f-fill3 f-outline3" x="180" y="160" width="80" height="40"/>
      <rect class="f-fill2 f-outline2" x="300" y="80" width="80" height="120"/>
      <text class="f-math" x="100" y="120" text-anchor="middle">400 J</text>
      <text class="f-math" x="220" y="184" text-anchor="middle">100 J</text>
      <text class="f-math" x="340" y="145" text-anchor="middle">300 J</text>
      <text class="f-small" x="100" y="222" text-anchor="middle">dodaná</text>
      <text class="f-small" x="220" y="222" text-anchor="middle">užitočná</text>
      <text class="f-small" x="340" y="222" text-anchor="middle">strata (teplo)</text></svg>`
  });

  /* ---------- pripojenie k lekciám ---------- */

  // lekcia → id obrázka; obrázok sa doplní na koniec teórie lekcie
  const ATTACH = {
    'r6-hustota': 'r6r9-hustota',
    'r6-vlastnosti': 'r6r9-castice',
    'r6-atmosfera': 'r6r9-atmosfera',
    'r6-teplo': 'r6r9-prenos-tepla', 'r8-vnutorna-energia': 'r6r9-prenos-tepla',
    'r6-var': 'r6r9-var',
    'r7-rovnomerny': 'r6r9-rovnomerny',
    'r7-tiaz': 'r6r9-tiaz',
    'r7-svetlo': 'r6r9-zatmenie',
    'r7-zrkadla': 'r6r9-zrkadlo',
    'r8-praca': 'r6r9-praca',
    'r8-polohova-pohybova': 'r6r9-kinetika',
    'r8-naboj': 'r6r9-naboj',
    'r8-prud-napatie': 'r6r9-merania',
    'r8-odpor': 'r6r9-odpor',
    'r8-vodice': 'r6r9-vodice',
    'r9-vypocty': 'r6r9-trojuholnik',
    'r9-elektromagnet': 'r6r9-elektromagnet',
    'r9-premeny-zdroje': 'r6r9-elektrarna',
    'r9-energia-priroda': 'r6r9-ucinnost'
  };

  // popisky pod obrázkami
  const CAPTIONS = {
    'r6r9-hustota': 'Hustota ukazuje, akú hmotnosť má jednotka objemu látky. Pri rovnakom objeme je železo oveľa ťažšie ako voda.',
    'r6r9-castice': 'Častice pevnej látky sú na svojich miestach, kvapaliny sa k sebe držia a posúvajú, plyny sa pohybujú voľne.',
    'r6r9-atmosfera': 'Čím vyššie sme, tým menej vzduchu je nad nami, a preto atmosférický tlak klesá.',
    'r6r9-prenos-tepla': 'Teplo prúdi z teplejšieho telesa do chladnejšieho. Prenáša sa vedením, prúdením alebo sálaním.',
    'r6r9-var': 'Vyparovanie prebieha len na hladine, var prebieha v celom objeme kvapaliny a vznikajú v ňom bubliny pary.',
    'r6r9-rovnomerny': 'Pri rovnomernom pohybe je graf dráhy od času priamka a jej sklon je rýchlosť. Pri zrýchľovaní je to krivka.',
    'r6r9-tiaz': 'Ta istá hmotnosť má na Mesiaci menšiu tiaž, lebo gravitačné zrýchlenie je tam menšie.',
    'r6r9-zatmenie': 'Pri zatmení Slnka leží Mesiac medzi Slnkom a Zemou a vrhá tieň na Zem.',
    'r6r9-zrkadlo': 'Obraz v rovinnom zrkadle je zdanlivý a rovnako vzdialený za zrkadlom ako predmet pred ním.',
    'r6r9-praca': 'Práca sa koná len pri posune v smere sily. Tlačenie na múr, ktorý sa nehýbe, prácu nevykoná.',
    'r6r9-kinetika': 'Pohybová energia rastie s druhou mocninou rýchlosti: dvojnásobná rýchlosť znamená štvornásobnú energiu.',
    'r6r9-naboj': 'Rovnaké náboje sa odpudzujú, opačné sa priťahujú.',
    'r6r9-merania': 'Ampérmeter zapájame do série so spotrebičom, voltmeter paralelne k nemu.',
    'r6r9-odpor': 'Pri rovnakom napätí väčší odpor prepúšťa menší prúd: pri 12 V je prúd 6 A pri 2 Ω a 2 A pri 6 Ω.',
    'r6r9-vodice': 'Vodiče majú voľné elektróny a vedú prúd. Izolanty majú elektróny pevne viazané a prúd nevedú.',
    'r6r9-trojuholnik': 'Zakryte hľadanú veličinu a zvyšok ukáže vzorec, napríklad U = I · R.',
    'r6r9-elektromagnet': 'Cievka s jadrom z železa je magnetická len vtedy, keď cez ňu preteká prúd.',
    'r6r9-elektrarna': 'Uhoľná elektráreň mení chemickú energiu paliva postupne na tepelnú, mechanickú a elektrickú.',
    'r6r9-ucinnost': 'Účinnosť je pomer užitočnej energie k dodanej. Zvyšok energie sa stráca ako teplo.'
  };

  LESSONS.forEach((l) => {
    const fig = ATTACH[l.id];
    if (fig) l.theory.push({ fig, caption: CAPTIONS[fig] });
  });
})();
