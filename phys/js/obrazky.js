/* Statické obrázky k teórii lekcií (inline SVG). Každý obrázok je FIGURES.register bez posuvníkov;
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

  /* ---------- pohyb a sily ---------- */

  FIGURES.register('obr-draha', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Dráha a vzdialenosť">
      <path class="f-dash" d="M40 170 L145 30"/>
      <path class="f-accent" d="M40 170 H145 V30"/>
      <circle class="f-dot" cx="40" cy="170" r="5"/><circle class="f-dot" cx="145" cy="30" r="5"/>
      <text class="f-text" x="92" y="190" text-anchor="middle">3 m</text>
      <text class="f-text" x="158" y="100">4 m</text>
      <text class="f-text" x="62" y="95" text-anchor="end">vzdialenosť 5 m</text>
      <text class="f-text" x="200" y="40">plná čiara = dráha (7 m)</text>
      <text class="f-text" x="200" y="62">čiarkovaná = vzdialenosť (5 m)</text></svg>`
  });

  FIGURES.register('obr-sily', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Sily pôsobiace na teleso na podložke">
      <line class="f-line" x1="50" y1="150" x2="370" y2="150"/>
      <rect class="f-fill f-outline" x="170" y="100" width="80" height="50"/>
      ${arr(250, 125, 345, 125, 'f-ok')}
      ${arr(170, 125, 70, 125, 'f-warn')}
      ${arr(210, 100, 210, 30, 'f-accent')}
      <text class="f-math" x="355" y="118">F</text>
      <text class="f-math" x="60" y="112" text-anchor="middle">F_tr</text>
      <text class="f-math" x="222" y="40">N</text></svg>`
  });

  FIGURES.register('obr-vztlak', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Vztlak pôsobiaci na ponorené teleso">
      <rect class="f-fill2" x="90" y="90" width="240" height="130"/>
      <line class="f-line" x1="90" y1="90" x2="330" y2="90"/>
      <rect class="f-fill f-outline" x="190" y="120" width="60" height="50"/>
      ${arr(220, 118, 220, 62, 'f-ok')}
      ${arr(220, 172, 220, 208, 'f-warn')}
      <text class="f-math" x="240" y="70">F_vz</text>
      <text class="f-math" x="240" y="212">F_g</text>
      <text class="f-small" x="345" y="140">ponorená časť</text></svg>`
  });

  FIGURES.register('obr-tlak', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Tlak v kvapaline rastie s hĺbkou">
      <rect class="f-fill2" x="60" y="60" width="270" height="160"/>
      <path class="f-line" d="M60 40 V220 H330 V40"/>
      ${arr(60, 90, 120, 90)}
      ${arr(60, 140, 180, 140)}
      ${arr(60, 190, 240, 190, 'f-warn')}
      <text class="f-small" x="128" y="84">malý tlak</text>
      <text class="f-small" x="188" y="134">väčší</text>
      <text class="f-small" x="248" y="184">najväčší</text></svg>`
  });

  /* ---------- elektrina ---------- */

  FIGURES.register('obr-obvod', {
    draw: () => `<svg viewBox="0 0 460 200" role="img" aria-label="Sériové a paralelné zapojenie">
      <path class="f-line" d="M40 40 H200 V160 H40 Z"/>
      <line class="f-accent" x1="28" y1="96" x2="52" y2="96"/><line class="f-line" x1="36" y1="106" x2="44" y2="106"/>
      <circle class="f-fill3 f-outline3" cx="90" cy="40" r="10"/>
      <circle class="f-fill3 f-outline3" cx="150" cy="40" r="10"/>
      <text class="f-text" x="120" y="190" text-anchor="middle">sériovo</text>
      <text class="f-small" x="120" y="30" text-anchor="middle">prúd všade rovnaký</text>
      <path class="f-line" d="M260 40 H420 V160 H260 Z"/>
      <line class="f-accent" x1="248" y1="96" x2="272" y2="96"/><line class="f-line" x1="256" y1="106" x2="264" y2="106"/>
      <path class="f-line" d="M300 90 H380 M300 130 H380"/>
      <circle class="f-fill3 f-outline3" cx="340" cy="90" r="10"/>
      <circle class="f-fill3 f-outline3" cx="340" cy="130" r="10"/>
      <text class="f-text" x="340" y="190" text-anchor="middle">paralelne</text>
      <text class="f-small" x="340" y="30" text-anchor="middle">napätie na vetvách rovnaké</text></svg>`
  });

  FIGURES.register('obr-ohm', {
    draw: () => {
      const p = plane(0, 6, 0, 12, 420, 260);
      const clipped = `<path class="f-accent" d="M${n1(p.X(0))} ${n1(p.Y(0))} L${n1(p.X(6))} ${n1(p.Y(12))}"/>
        <circle class="f-dot" cx="${n1(p.X(2))}" cy="${n1(p.Y(4))}" r="5"/>
        <circle class="f-dot" cx="${n1(p.X(4))}" cy="${n1(p.Y(8))}" r="5"/>`;
      const front = `<text class="f-text c-accent" x="${n1(p.X(3.2))}" y="${n1(p.Y(10.5))}">U = R · I, R = 2 Ω</text>
        <text class="f-small" x="${p.W - 20}" y="${n1(p.Y(0)) - 6}">I (A)</text>
        <text class="f-small" x="${n1(p.X(0)) + 6}" y="${p.pad + 4}">U (V)</text>`;
      return svg(p, axes(p, 1, 2), clipped, front, 'Graf závislosti napätia od prúdu');
    }
  });

  FIGURES.register('obr-magnet-vodic', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Magnetické pole okolo priameho vodiča">
      <circle cx="210" cy="120" r="40" fill="none" class="f-dash"/>
      <circle cx="210" cy="120" r="80" fill="none" class="f-dash"/>
      <circle cx="210" cy="120" r="110" fill="none" class="f-dash"/>
      ${arr(290, 130, 290, 110, 'f-ok')}
      <circle class="f-solid" cx="210" cy="120" r="7"/>
      <text class="f-text" x="226" y="116">I</text>
      <text class="f-small" x="210" y="236" text-anchor="middle">prúd vystupuje z nákresne, siločiary sú kružnice</text></svg>`
  });

  /* ---------- magnetizmus ---------- */

  FIGURES.register('obr-magnet', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Siločiary tyčového magnetu">
      <path class="f-line" fill="none" d="M150 120 C 60 0, 360 0, 270 120"/>
      <path class="f-line" fill="none" d="M150 120 C 100 50, 320 50, 270 120"/>
      <path class="f-line" fill="none" d="M150 120 C 100 190, 320 190, 270 120"/>
      <path class="f-line" fill="none" d="M150 120 C 60 240, 360 240, 270 120"/>
      <rect class="f-fill3 f-outline3" x="150" y="105" width="60" height="30"/>
      <rect class="f-fill2 f-outline2" x="210" y="105" width="60" height="30"/>
      <text class="f-math" x="180" y="126" text-anchor="middle">N</text>
      <text class="f-math" x="240" y="126" text-anchor="middle">S</text></svg>`
  });

  /* ---------- svetlo ---------- */

  FIGURES.register('obr-odraz', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Zákon odrazu svetla">
      <line class="f-solid" x1="40" y1="160" x2="380" y2="160" stroke-width="3"/>
      <line class="f-dash" x1="210" y1="30" x2="210" y2="160"/>
      ${arr(152, 91, 210, 160, 'f-accent')}
      ${arr(210, 160, 268, 91, 'f-ok')}
      <text class="f-small" x="110" y="78" text-anchor="end">dopadajúci lúč</text>
      <text class="f-small" x="310" y="78">odrazený lúč</text>
      <text class="f-small" x="216" y="40">normála</text>
      <text class="f-math" x="188" y="128">α</text>
      <text class="f-math" x="232" y="128">α′</text>
      <text class="f-text" x="210" y="185" text-anchor="middle">uhol dopadu α sa rovná uhlu odrazu α′</text></svg>`
  });

  FIGURES.register('obr-tien', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Vznik tieňa">
      <line class="f-dash" x1="40" y1="110" x2="340" y2="50"/>
      <line class="f-dash" x1="40" y1="110" x2="340" y2="170"/>
      <circle class="f-fill3 f-outline3" cx="40" cy="110" r="8"/>
      <rect class="f-fill f-outline" x="170" y="80" width="20" height="60"/>
      <rect class="f-fill2 f-outline2" x="340" y="30" width="10" height="160"/>
      <rect class="f-solid" x="340" y="50" width="10" height="120"/>
      <text class="f-small" x="40" y="132" text-anchor="middle">zdroj</text>
      <text class="f-small" x="300" y="210" text-anchor="middle">tieň na tienidle</text></svg>`
  });

  /* ---------- vlnenie ---------- */

  FIGURES.register('obr-vlna', {
    draw: () => {
      let d = '';
      for (let x = 20; x <= 400; x += 2) {
        const y = 110 - 50 * Math.sin(2 * Math.PI * x / 140);
        d += `${x === 20 ? 'M' : 'L'}${x} ${n1(y)}`;
      }
      return `<svg viewBox="0 0 420 220" role="img" aria-label="Priečna vlna s vlnovou dĺžkou">
        <line class="f-dash" x1="20" y1="110" x2="400" y2="110"/>
        <path class="f-accent" fill="none" d="${d}"/>
        <line class="f-thin" x1="35" y1="190" x2="175" y2="190"/>
        <line class="f-thin" x1="35" y1="184" x2="35" y2="196"/>
        <line class="f-thin" x1="175" y1="184" x2="175" y2="196"/>
        <text class="f-math" x="105" y="208" text-anchor="middle">λ</text>
        <text class="f-small" x="20" y="28">amplitúda A = výchylka od rovnovážnej polohy</text></svg>`;
    }
  });

  /* ---------- skupenstvá ---------- */

  FIGURES.register('obr-skupenstva', {
    draw: () => `<svg viewBox="0 0 480 170" role="img" aria-label="Skupenstvá látky a ich premeny">
      <rect class="f-fill f-outline" x="10" y="70" width="100" height="50" rx="8"/>
      <rect class="f-fill2 f-outline2" x="190" y="70" width="100" height="50" rx="8"/>
      <rect class="f-fill3 f-outline3" x="370" y="70" width="100" height="50" rx="8"/>
      <text class="f-text" x="60" y="100" text-anchor="middle">pevné</text>
      <text class="f-text" x="240" y="100" text-anchor="middle">kvapalné</text>
      <text class="f-text" x="420" y="100" text-anchor="middle">plynné</text>
      ${arr(112, 56, 188, 56, 'f-ok')}
      ${arr(288, 56, 368, 56, 'f-ok')}
      ${arr(188, 140, 112, 140, 'f-warn')}
      ${arr(368, 140, 292, 140, 'f-warn')}
      <text class="f-small" x="150" y="46" text-anchor="middle">topenie</text>
      <text class="f-small" x="330" y="46" text-anchor="middle">vyparovanie</text>
      <text class="f-small" x="150" y="162" text-anchor="middle">tuhnutie</text>
      <text class="f-small" x="330" y="162" text-anchor="middle">kondenzácia</text></svg>`
  });

  /* ---------- mechanika a energia ---------- */

  FIGURES.register('obr-paka', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Páka v rovnováhe">
      <line class="f-accent" x1="50" y1="100" x2="370" y2="100" stroke-width="4"/>
      <polygon class="f-fill f-outline" points="210,100 190,140 230,140"/>
      <rect class="f-fill2 f-outline2" x="30" y="60" width="40" height="40"/>
      ${arr(370, 40, 370, 96, 'f-ok')}
      <text class="f-math" x="50" y="52" text-anchor="middle">F₁</text>
      <text class="f-math" x="388" y="36">F₂</text>
      <line class="f-thin" x1="50" y1="165" x2="210" y2="165"/>
      <line class="f-thin" x1="210" y1="165" x2="370" y2="165"/>
      <text class="f-math" x="130" y="182" text-anchor="middle">r₁</text>
      <text class="f-math" x="290" y="182" text-anchor="middle">r₂</text>
      <text class="f-text" x="210" y="20" text-anchor="middle">rovnováha: F₁ · r₁ = F₂ · r₂</text></svg>`
  });

  FIGURES.register('obr-energia', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Premena potenciálnej a kinetickej energie">
      <path class="f-line" fill="none" d="M40 50 C 120 50, 150 190, 210 190 C 270 190, 300 50, 380 50"/>
      <circle class="f-fill3 f-outline3" cx="40" cy="50" r="10"/>
      <circle class="f-fill2 f-outline2" cx="210" cy="190" r="10"/>
      <circle class="f-fill3 f-outline3" cx="380" cy="50" r="10"/>
      <text class="f-small" x="40" y="80" text-anchor="middle">Ep max, Ek = 0</text>
      <text class="f-small" x="210" y="214" text-anchor="middle">Ek max, Ep min</text>
      <text class="f-small" x="380" y="80" text-anchor="middle">Ep max, Ek = 0</text></svg>`
  });

  /* ---------- pripojenie k lekciám ---------- */

  // lekcia → id obrázka; obrázok sa doplní na koniec teórie lekcie (pred príklady)
  const ATTACH = {
    'r7-draha': 'obr-draha', 'r7-pohyb': 'obr-draha',
    'r7-sila': 'obr-sily', 'r7-trenie': 'obr-sily',
    'r6-vztlak': 'obr-vztlak', 'v11-tlak-vztlak': 'obr-vztlak',
    'r6-tlak': 'obr-tlak', 's1-tlak': 'obr-tlak',
    'r9-zapojenie': 'obr-obvod', 'r9-obvody': 'obr-obvod',
    'r9-ohmov-zakon': 'obr-ohm', 's3-ohm': 'obr-ohm',
    'r7-odraz': 'obr-odraz', 's3-odraz-lom': 'obr-odraz',
    'r4-svetlo-tien': 'obr-tien', 'r1-svetlo-tien-teplo': 'obr-tien',
    'r9-magnetizmus': 'obr-magnet-vodic', 's3-magnetizmus': 'obr-magnet-vodic',
    'v4-vlnenie': 'obr-vlna', 's2-vlnenie': 'obr-vlna',
    'r2-skupenstva': 'obr-skupenstva', 'r6-skupenstva': 'obr-skupenstva',
    'r8-jednoduche-stroje': 'obr-paka',
    'r8-mechanicka-energia': 'obr-energia', 's1-praca-energia': 'obr-energia',
    's4-atom': 'obr-atom', 'v7-atom': 'obr-atom',
    'r2-magnety': 'obr-magnet', 'r4-magnety': 'obr-magnet'
  };

  // popisky pod obrázkami
  const CAPTIONS = {
    'obr-draha': 'Dráha je celá trasa, vzdialenosť je priama spojnica začiatku a konca.',
    'obr-sily': 'Sily na teleso na vodorovnej podložke: ťah F, trenie Ftr a reakcia podložky N.',
    'obr-vztlak': 'Vztlak Fvz smeruje nahor, tiaž Fg nadol. Ponorené teleso je nadľahčené o tiaž vytlačenej kvapaliny.',
    'obr-tlak': 'Tlak v kvapaline rastie s hĺbkou: čím hlbšie, tým väčšia sila pôsobí na stenu.',
    'obr-obvod': 'Sériové a paralelné zapojenie spotrebičov na jednom zdroji.',
    'obr-ohm': 'Pri stálom odpore je graf závislosti napätia od prúdu priamka prechádzajúca počiatkom.',
    'obr-odraz': 'Pri odraze svetla od rovinného zrkadla platí zákon odrazu.',
    'obr-tien': 'Tieň vzniká tam, kam svetlo neprejde, lebo ho zastiera nepriehľadné teleso.',
    'obr-magnet-vodic': 'Okolo vodiča s prúdom je magnetické pole v podobe kružníc okolo vodiča.',
    'obr-vlna': 'Priečna vlna: vlnová dĺžka λ je vzdialenosť dvoch susedných bodov v rovnakej fáze.',
    'obr-skupenstva': 'Premeny skupenstiev: topenie, tuhnutie, vyparovanie a kondenzácia.',
    'obr-paka': 'Páka je v rovnováhe, keď súčin sily a ramena na jednej strane rovná súčinu na druhej.',
    'obr-energia': 'Pri kĺzaní bez trenia sa potenciálna energia mení na kinetickú a späť.',
    'obr-atom': 'Zjednodušený model atómu: kladné jadro a elektróny na obežných dráhach.',
    'obr-magnet': 'Siločiary tyčového magnetu vychádzajú zo severného pólu N a vstupujú do južného pólu S.'
  };

  LESSONS.forEach((l) => {
    const fig = ATTACH[l.id];
    if (fig) l.theory.push({ fig, caption: CAPTIONS[fig] });
  });

  /* ---------- atóm ---------- */

  FIGURES.register('obr-atom', {
    draw: () => `<svg viewBox="0 0 320 300" role="img" aria-label="Model atómu s jadrom a obežnými dráhami elektrónov">
      <ellipse class="f-line" fill="none" cx="160" cy="150" rx="130" ry="45"/>
      <ellipse class="f-line" fill="none" cx="160" cy="150" rx="130" ry="45" transform="rotate(60 160 150)"/>
      <ellipse class="f-line" fill="none" cx="160" cy="150" rx="130" ry="45" transform="rotate(-60 160 150)"/>
      <circle class="f-solid" cx="290" cy="150" r="6"/>
      <circle class="f-solid" cx="290" cy="150" r="6" transform="rotate(60 160 150)"/>
      <circle class="f-solid" cx="290" cy="150" r="6" transform="rotate(-60 160 150)"/>
      <circle class="f-fill3 f-outline3" cx="160" cy="150" r="20"/>
      <text class="f-small" x="160" y="154" text-anchor="middle">jadro</text>
      <text class="f-small" x="160" y="290" text-anchor="middle">elektróny obiehajú po dráhach</text></svg>`
  });
})();
