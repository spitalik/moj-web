/* Statické obrázky k teórii lekcií pre úrovne v5–v8 (VŠ kvantová mechanika, relativita, atómová a jadrová fyzika, časticová fyzika).
   Každý obrázok je FIGURES.register bez posuvníkov; ATTACH určuje lekcie, pripojí sa na koniec ich teórie. */
(function () {
  'use strict';

  const { plane, svg, n1 } = FIGURES.util;

  // šípka z (x1,y1) do (x2,y2) v pixeloch SVG
  const arr = (x1, y1, x2, y2, cls = 'f-accent') => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 9;
    const back = (k) => `${n1(x2 - h * Math.cos(a + k))},${n1(y2 - h * Math.sin(a + k))}`;
    return `<line class="${cls}" x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}"/>
      <polygon class="f-solid" points="${n1(x2)},${n1(y2)} ${back(0.45)} ${back(-0.45)}"/>`;
  };

  // osi grafu s popiskami hodnôt (xs, ys sú dvojice [hodnota, text])
  const frame = (p, xs, ys, xl, yl) => `<line class="f-line" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(p.ymin))}" x2="${n1(p.X(p.xmax))}" y2="${n1(p.Y(p.ymin))}"/>
    <line class="f-line" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(p.ymin))}" x2="${n1(p.X(p.xmin))}" y2="${n1(p.Y(p.ymax))}"/>
    ${xs.map(([v, t]) => `<text class="f-small" x="${n1(p.X(v))}" y="${n1(p.Y(p.ymin)) + 14}" text-anchor="middle">${t}</text>`).join('')}
    ${ys.map(([v, t]) => `<text class="f-small" x="${n1(p.X(p.xmin)) - 5}" y="${n1(p.Y(v)) + 4}" text-anchor="end">${t}</text>`).join('')}
    <text class="f-math" x="${p.W - p.pad}" y="${n1(p.Y(p.ymin)) - 6}" text-anchor="end">${xl}</text>
    <text class="f-math" x="${n1(p.X(p.xmin)) + 6}" y="${p.pad - 8}">${yl}</text>`;

  /* ---------- kvantová mechanika (v5) ---------- */

  FIGURES.register('v5v8-dualizmus', {
    draw: () => {
      // vlna s danou periódou (v px) od začiatku x = 30
      const wave = (y0, amp, per) => {
        let d = '';
        for (let x = 30; x <= 390; x += 2) d += `${x === 30 ? 'M' : 'L'}${x} ${n1(y0 - amp * Math.sin(2 * Math.PI * (x - 30) / per))}`;
        return d;
      };
      return `<svg viewBox="0 0 420 220" role="img" aria-label="De Broglieho vlny pre rôzne hybnosti">
        <path class="f-accent" fill="none" d="${wave(62, 22, 45)}"/>
        <path class="f-ok" fill="none" d="${wave(160, 22, 120)}"/>
        <text class="f-small" x="30" y="24">väčšia hybnosť p: kratšia vlnová dĺžka λ</text>
        <text class="f-small" x="30" y="116">menšia hybnosť p: dlhšia vlnová dĺžka λ</text>
        <text class="f-math" x="210" y="212" text-anchor="middle">λ = h / p</text></svg>`;
    }
  });

  FIGURES.register('v5v8-pravdepodobnost', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Rovnomerná hustota pravdepodobnosti na úsečke">
      <rect class="f-fill2 f-outline2" x="40" y="70" width="340" height="90"/>
      <rect class="f-fill3 f-outline3" x="40" y="70" width="85" height="90"/>
      <line class="f-line" x1="40" y1="160" x2="380" y2="160"/>
      <text class="f-math" x="30" y="66" text-anchor="end">|ψ|²</text>
      <text class="f-small" x="40" y="176" text-anchor="middle">0</text>
      <text class="f-small" x="125" y="176" text-anchor="middle">a</text>
      <text class="f-small" x="380" y="176" text-anchor="middle">L</text>
      <text class="f-math" x="82" y="118" text-anchor="middle">P = a/L</text>
      <text class="f-small" x="210" y="40" text-anchor="middle">hustota je na celej úsečke rovnaká</text></svg>`
  });

  FIGURES.register('v5v8-jama', {
    draw: () => {
      // hladina E_n je úmerná n²; y-súradnica v px, vyššia energia = vyššie
      const lev = (n) => 205 - 14 * n * n;
      const levels = [1, 2, 3].map((n) => `<line class="f-accent" x1="124" y1="${lev(n)}" x2="316" y2="${lev(n)}"/>
        <text class="f-small" x="108" y="${lev(n) + 4}" text-anchor="end">n = ${n}</text>
        <text class="f-math" x="332" y="${lev(n) + 4}">${n === 1 ? 'E₁' : `${n * n}·E₁`}</text>`).join('');
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Hladiny častice v nekonečne hlbokej jame">
        <line class="f-solid" x1="120" y1="40" x2="120" y2="210" stroke-width="4"/>
        <line class="f-solid" x1="320" y1="40" x2="320" y2="210" stroke-width="4"/>
        <line class="f-line" x1="120" y1="210" x2="320" y2="210"/>
        ${levels}
        <text class="f-small" x="220" y="232" text-anchor="middle">E_n ∝ n²</text></svg>`;
    }
  });

  FIGURES.register('v5v8-oscilator', {
    draw: () => {
      // parabolický potenciál U = c·x² a hladiny (n + ½)·ħω s rovnakým rozostupom
      const c = 0.0125, X = (x) => 210 + x, Yp = (u) => 220 - u;
      let d = '';
      for (let x = -120; x <= 120; x += 2) d += `${x === -120 ? 'M' : 'L'}${X(x)} ${n1(Yp(c * x * x))}`;
      const labels = ['E₀ = ½ ħω', 'E₁ = 1,5 ħω', 'E₂ = 2,5 ħω', 'E₃ = 3,5 ħω'];
      const levels = labels.map((t, n) => {
        const u = (n + 0.5) * 40, w = Math.sqrt(u / c);
        return `<line class="f-accent" x1="${n1(210 - w)}" y1="${n1(Yp(u))}" x2="${n1(210 + w)}" y2="${n1(Yp(u))}"/>
          <text class="f-small" x="340" y="${n1(Yp(u)) + 4}">${t}</text>`;
      }).join('');
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Hladiny kvantového harmonického oscilátora">
        <line class="f-line" x1="90" y1="220" x2="330" y2="220"/>
        <path class="f-line" fill="none" d="${d}"/>
        <text class="f-math" x="60" y="44" text-anchor="end">U(x)</text>
        ${levels}
        <text class="f-small" x="210" y="236" text-anchor="middle">hladiny sú rovnako od seba vzdialené o ħω</text></svg>`;
    }
  });

  FIGURES.register('v5v8-moment', {
    draw: () => {
      // stĺpec stavov pre dané l: každý stav je vodorovná čiara s hodnotou m_l
      const col = (cx, l) => {
        let s = `<text class="f-text" x="${cx}" y="40" text-anchor="middle">l = ${l}: ${2 * l + 1} stavov</text>`;
        for (let m = -l; m <= l; m++) {
          const y = 130 - 30 * m;
          s += `<line class="f-solid" x1="${cx - 30}" y1="${y}" x2="${cx + 30}" y2="${y}" stroke-width="3"/>
            <text class="f-small" x="${cx - 38}" y="${y + 4}" text-anchor="end">m_l = ${m < 0 ? '−' + -m : m}</text>`;
        }
        return s;
      };
      return `<svg viewBox="0 0 420 220" role="img" aria-label="Stavy orbitálneho momentu hybnosti pre l = 1 a l = 2">
        ${col(120, 1)}
        ${col(300, 2)}
        <text class="f-small" x="210" y="214" text-anchor="middle">počet stavov je 2l + 1</text></svg>`;
    }
  });

  FIGURES.register('v5v8-vodik', {
    draw: () => `<svg viewBox="0 0 420 230" role="img" aria-label="Energetické hladiny vodíka a prechody medzi nimi">
      <line class="f-solid" x1="130" y1="210" x2="330" y2="210" stroke-width="2"/>
      <line class="f-solid" x1="130" y1="68" x2="330" y2="68" stroke-width="2"/>
      <line class="f-solid" x1="130" y1="41" x2="330" y2="41" stroke-width="2"/>
      <line class="f-dash" x1="130" y1="20" x2="330" y2="20"/>
      <text class="f-small" x="122" y="214" text-anchor="end">n = 1: −13,6 eV</text>
      <text class="f-small" x="122" y="72" text-anchor="end">n = 2: −3,4 eV</text>
      <text class="f-small" x="122" y="45" text-anchor="end">n = 3: −1,51 eV</text>
      <text class="f-small" x="122" y="24" text-anchor="end">n = ∞: 0</text>
      ${arr(230, 41, 230, 66, 'f-warn')}
      <text class="f-small" x="240" y="56">1,89 eV</text>
      ${arr(300, 68, 300, 207, 'f-warn')}
      <text class="f-small" x="308" y="140">10,2 eV</text>
      <text class="f-small" x="210" y="226" text-anchor="middle">šípky: prechody s vyžiarením fotónu</text></svg>`
  });

  FIGURES.register('v5v8-tunel', {
    draw: () => {
      // vlnová funkcia: vľavo kmitá, v bariére exponenciálne klesá, vpravo je malá prenikajúca vlna
      const left = [], mid = [], right = [];
      for (let x = 20; x <= 170; x += 2) left.push(`${x === 20 ? 'M' : 'L'}${x} ${n1(160 - 25 * Math.sin(2 * Math.PI * (x - 20) / 60))}`);
      for (let x = 170; x <= 250; x += 2) mid.push(`${x === 170 ? 'M' : 'L'}${x} ${n1(190 - 30 * Math.exp(-(x - 170) / 22))}`);
      for (let x = 250; x <= 390; x += 2) right.push(`${x === 250 ? 'M' : 'L'}${x} ${n1(190 - 10 * Math.sin(2 * Math.PI * (x - 250) / 60))}`);
      return `<svg viewBox="0 0 420 220" role="img" aria-label="Tunelový jav cez potenciálovú bariéru">
        <rect class="f-fill3 f-outline3" x="170" y="60" width="80" height="130"/>
        <line class="f-dash" x1="20" y1="100" x2="400" y2="100"/>
        <line class="f-line" x1="20" y1="190" x2="400" y2="190"/>
        <path class="f-accent" fill="none" d="${left.join('')}"/>
        <path class="f-accent" fill="none" d="${mid.join('')}"/>
        <path class="f-accent" fill="none" d="${right.join('')}"/>
        <text class="f-math" x="24" y="94">E</text>
        <text class="f-math" x="210" y="52" text-anchor="middle">V₀</text>
        <text class="f-small" x="262" y="150">časť vlny preniká</text>
        <text class="f-small" x="210" y="214" text-anchor="middle">v bariére vlnová funkcia exponenciálne klesá</text></svg>`;
    }
  });

  /* ---------- relativita (v6) ---------- */

  FIGURES.register('v5v8-gama', {
    draw: () => {
      const p = plane(0, 1, 0, 4, 420, 260);
      let d = '';
      for (let i = 0; i <= 95; i++) {
        const b = i / 100;
        d += `${i ? 'L' : 'M'}${n1(p.X(b))} ${n1(p.Y(Math.min(1 / Math.sqrt(1 - b * b), 4)))}`;
      }
      const back = frame(p, [[0.5, '0,5'], [1, '1']], [[1, '1'], [2, '2'], [3, '3'], [4, '4']], 'v / c', 'γ')
        + `<line class="f-dash" x1="${n1(p.X(0))}" y1="${n1(p.Y(1))}" x2="${n1(p.X(1))}" y2="${n1(p.Y(1))}"/>`;
      const clipped = `<path class="f-accent" fill="none" d="${d}"/>
        <circle class="f-dot" cx="${n1(p.X(0.6))}" cy="${n1(p.Y(1.25))}" r="4"/>`;
      const front = `<text class="f-small" x="${n1(p.X(0.05))}" y="${n1(p.Y(1)) - 6}">γ = 1 pri v ≪ c</text>
        <text class="f-small" x="${n1(p.X(0.6)) + 10}" y="${n1(p.Y(1.25)) + 18}">v = 0,6 c: γ = 1,25</text>`;
      return svg(p, back, clipped, front, 'Lorentzov faktor v závislosti od rýchlosti');
    }
  });

  FIGURES.register('v5v8-lorentz', {
    draw: () => {
      // priestoročasový diagram: x vodorovne, ct zvislo; osi S′ sú naklonené podľa β = 0,6
      const X = (x) => 60 + 30 * x, Y = (t) => 210 - 22 * t;
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Priestoročasový diagram so sústavami S a S′">
        <line class="f-line" x1="60" y1="210" x2="380" y2="210"/>
        <line class="f-line" x1="60" y1="210" x2="60" y2="20"/>
        <line class="f-ok" x1="60" y1="210" x2="${X(10)}" y2="${Y(6)}"/>
        <line class="f-accent" x1="60" y1="210" x2="${X(4.8)}" y2="${Y(8)}"/>
        <line class="f-dash" x1="60" y1="${Y(4)}" x2="${X(8)}" y2="${Y(4)}"/>
        <line class="f-dash" x1="${X(8)}" y1="${Y(4)}" x2="${X(8)}" y2="210"/>
        <circle class="f-dot" cx="${X(8)}" cy="${Y(4)}" r="5"/>
        <text class="f-small" x="${X(8) + 8}" y="${Y(4) - 6}">udalosť</text>
        <text class="f-math" x="388" y="226">x</text>
        <text class="f-math" x="66" y="22">ct</text>
        <text class="f-math" x="${X(10) + 6}" y="${Y(6) - 4}">x′</text>
        <text class="f-math" x="${X(4.8) + 6}" y="${Y(8) + 4}">ct′</text>
        <text class="f-small" x="210" y="236" text-anchor="middle">osi S′ sú naklonené; súradnice udalosti sa prepočítajú Lorentzovou transformáciou</text></svg>`;
    }
  });

  FIGURES.register('v5v8-energia', {
    draw: () => `<svg viewBox="0 0 420 240" role="img" aria-label="Pokojová a kinetická časť celkovej energie">
      <rect class="f-fill2 f-outline2" x="80" y="110" width="110" height="100"/>
      <text class="f-math" x="135" y="164" text-anchor="middle">E₀ = mc²</text>
      <text class="f-small" x="135" y="228" text-anchor="middle">v ≈ 0</text>
      <rect class="f-fill2 f-outline2" x="230" y="110" width="110" height="100"/>
      <rect class="f-fill3 f-outline3" x="230" y="43" width="110" height="67"/>
      <text class="f-math" x="285" y="164" text-anchor="middle">E₀</text>
      <text class="f-math" x="285" y="82" text-anchor="middle">E_k</text>
      <text class="f-math" x="285" y="30" text-anchor="middle">E = γ·E₀</text>
      <text class="f-small" x="285" y="228" text-anchor="middle">v = 0,8 c, γ = 5/3</text>
      <line class="f-line" x1="60" y1="210" x2="370" y2="210"/></svg>`
  });

  FIGURES.register('v5v8-interval', {
    draw: () => {
      // jednotky s c = 1: os ct v sekundách, x v svetelných sekundách; 1 s = 20 px, 1 ls = 30 px
      const X = (x) => 60 + 30 * x, Y = (t) => 210 - 20 * t;
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Časupodobný interval medzi dvoma udalosťami">
        <line class="f-line" x1="60" y1="210" x2="380" y2="210"/>
        <line class="f-line" x1="60" y1="210" x2="60" y2="20"/>
        <line class="f-ok" x1="60" y1="210" x2="${X(10)}" y2="${Y(10)}"/>
        <line class="f-dash" x1="60" y1="210" x2="${X(3)}" y2="210"/>
        <line class="f-dash" x1="${X(3)}" y1="210" x2="${X(3)}" y2="${Y(5)}"/>
        <line class="f-accent" stroke-width="3" x1="60" y1="210" x2="${X(3)}" y2="${Y(5)}"/>
        <circle class="f-dot" cx="60" cy="210" r="4"/>
        <circle class="f-dot" cx="${X(3)}" cy="${Y(5)}" r="4"/>
        <text class="f-math" x="46" y="214">A</text>
        <text class="f-math" x="${X(3) + 6}" y="${Y(5) - 4}">B</text>
        <text class="f-small" x="${X(3) / 2 + 30}" y="230" text-anchor="middle">Δx = 3 ls</text>
        <text class="f-small" x="${X(3) + 8}" y="${Y(2.5)}">Δt = 5 s</text>
        <text class="f-math" x="88" y="150" text-anchor="end">Δτ = 4 s</text>
        <text class="f-small" x="250" y="46">svetelný kužeľ (ct = x)</text>
        <text class="f-math" x="66" y="20">ct</text>
        <text class="f-math" x="388" y="226">x</text></svg>`;
    }
  });

  FIGURES.register('v5v8-zakrivenie', {
    draw: () => {
      // body mriežky sa posúvajú k hmote v strede; čím bližšie, tým viac
      const warp = (x, y) => {
        const dx = x - 210, dy = y - 120;
        const k = 0.4 * Math.exp(-(dx * dx + dy * dy) / (2 * 80 * 80));
        return [x - dx * k, y - dy * k];
      };
      let dv = '', dh = '';
      for (let x = 30; x <= 390; x += 40) {
        for (let y = 20; y <= 220; y += 4) {
          const [wx, wy] = warp(x, y);
          dv += `${y === 20 ? 'M' : 'L'}${n1(wx)} ${n1(wy)}`;
        }
      }
      for (let y = 20; y <= 220; y += 40) {
        for (let x = 30; x <= 390; x += 4) {
          const [wx, wy] = warp(x, y);
          dh += `${x === 30 ? 'M' : 'L'}${n1(wx)} ${n1(wy)}`;
        }
      }
      return `<svg viewBox="0 0 420 240" role="img" aria-label="Zakrivenie časopriestoru okolo hmoty">
        <path class="f-line" fill="none" d="${dv}"/>
        <path class="f-line" fill="none" d="${dh}"/>
        <circle class="f-fill3 f-outline3" cx="210" cy="120" r="12"/>
        <text class="f-small" x="210" y="236" text-anchor="middle">zakrivenie časopriestoru okolo hmoty (názorná analógia)</text></svg>`;
    }
  });

  FIGURES.register('v5v8-horizont', {
    draw: () => `<svg viewBox="0 0 420 220" role="img" aria-label="Horizont udalostí čiernej diery">
      <circle class="f-solid" cx="130" cy="110" r="45"/>
      <circle class="f-dash" cx="130" cy="110" r="45" fill="none"/>
      <line class="f-accent" x1="130" y1="110" x2="175" y2="110"/>
      <text class="f-math" x="152" y="104" text-anchor="middle">r_s</text>
      <text class="f-small" x="130" y="176" text-anchor="middle">horizont udalostí</text>
      <text class="f-math" x="230" y="70">r_s = 2GM / c²</text>
      <text class="f-small" x="230" y="100">svetlo zvnútra horizontu sa nevráti</text>
      <text class="f-small" x="230" y="130">Slnko: r_s ≈ 3 km</text>
      <text class="f-small" x="230" y="150">10-násobok Slnka: r_s ≈ 30 km</text></svg>`
  });

  /* ---------- jadrová fyzika (v7) ---------- */

  FIGURES.register('v5v8-nuklidy', {
    draw: () => {
      const p = plane(0, 100, 0, 150, 420, 260);
      const pts = [['C-12', 6, 6], ['Ca-40', 20, 20], ['Fe-56', 26, 30], ['Pb-208', 82, 126], ['U-238', 92, 146]];
      const dots = pts.map(([s, Z, N]) => `<circle class="f-fill3 f-outline3" cx="${n1(p.X(Z))}" cy="${n1(p.Y(N))}" r="4"/>
        <text class="f-small" x="${n1(p.X(Z)) - 7}" y="${n1(p.Y(N)) - 5}" text-anchor="end">${s}</text>`).join('');
      const back = frame(p, [[20, '20'], [40, '40'], [60, '60'], [80, '80'], [100, '100']], [[50, '50'], [100, '100'], [150, '150']], 'Z (protóny)', 'N (neutróny)')
        + `<line class="f-dash" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(100))}" y2="${n1(p.Y(100))}"/>`;
      const front = `<text class="f-small" x="${n1(p.X(68)) + 8}" y="${n1(p.Y(68)) + 14}">N = Z</text>
        <text class="f-small" x="150" y="44">N > Z u ťažších jadier</text>`;
      return svg(p, back, dots, front, 'Stabilné nuklidy v rovine N a Z');
    }
  });

  FIGURES.register('v5v8-rozpad', {
    draw: () => {
      const p = plane(0, 4, 0, 100, 420, 260);
      let d = '';
      for (let i = 0; i <= 80; i++) {
        const t = i / 20;
        d += `${i ? 'L' : 'M'}${n1(p.X(t))} ${n1(p.Y(100 * Math.pow(2, -t)))}`;
      }
      const pts = [[1, '50 %'], [2, '25 %'], [3, '12,5 %']];
      const guides = pts.map(([t, s]) => `<line class="f-dash" x1="${n1(p.X(t))}" y1="${n1(p.Y(100 * Math.pow(2, -t)))}" x2="${n1(p.X(t))}" y2="${n1(p.Y(0))}"/>
        <circle class="f-dot" cx="${n1(p.X(t))}" cy="${n1(p.Y(100 * Math.pow(2, -t)))}" r="4"/>`).join('');
      const back = frame(p, [[1, 'T'], [2, '2T'], [3, '3T'], [4, '4T']], [[25, '25'], [50, '50'], [75, '75'], [100, '100']], 't / T', 'N / N₀ (%)');
      const clipped = `<path class="f-accent" fill="none" d="${d}"/>${guides}`;
      const front = pts.map(([t, s]) => `<text class="f-small" x="${n1(p.X(t)) + 8}" y="${n1(p.Y(100 * Math.pow(2, -t))) - 8}">${s}</text>`).join('');
      return svg(p, back, clipped, front, 'Exponenciálny pokles počtu jadier s polčasom rozpadu');
    }
  });

  FIGURES.register('v5v8-zoslabenie', {
    draw: () => {
      const p = plane(0, 6, 0, 100, 420, 260);
      let d = '';
      for (let i = 0; i <= 120; i++) {
        const x = i / 20;
        d += `${i ? 'L' : 'M'}${n1(p.X(x))} ${n1(p.Y(100 * Math.pow(2, -x)))}`;
      }
      const pts = [[1, '50 %'], [2, '25 %'], [3, '12,5 %']];
      const dots = pts.map(([x]) => `<circle class="f-dot" cx="${n1(p.X(x))}" cy="${n1(p.Y(100 * Math.pow(2, -x)))}" r="4"/>`).join('');
      const back = frame(p, [[1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5'], [6, '6']], [[25, '25'], [50, '50'], [75, '75'], [100, '100']], 'x / d½', 'I / I₀ (%)');
      const clipped = `<path class="f-accent" fill="none" d="${d}"/>${dots}`;
      const front = pts.map(([x, s]) => `<text class="f-small" x="${n1(p.X(x)) + 8}" y="${n1(p.Y(100 * Math.pow(2, -x))) - 8}">${s}</text>`).join('');
      return svg(p, back, clipped, front, 'Exponenciálny útlm žiarenia vo vrstve');
    }
  });

  FIGURES.register('v5v8-vazba', {
    draw: () => {
      const p = plane(0, 240, 6, 9.2, 420, 260);
      // približné väzbové energie na nukleón (MeV) pre vybrané jadrá, v poradí podľa A
      const pts = [[4, 7.07, 'He-4'], [12, 7.68, 'C-12'], [16, 7.98, 'O-16'], [40, 8.55, 'Ca-40'],
        [56, 8.79, 'Fe-56'], [208, 7.87, 'Pb-208'], [238, 7.57, 'U-238']];
      const line = pts.map(([A, e], i) => `${i ? 'L' : 'M'}${n1(p.X(A))} ${n1(p.Y(e))}`).join('');
      const dots = pts.map(([A, e]) => `<circle class="f-dot" cx="${n1(p.X(A))}" cy="${n1(p.Y(e))}" r="3"/>`).join('');
      const back = frame(p, [[40, '40'], [80, '80'], [120, '120'], [160, '160'], [200, '200'], [240, '240']], [[7, '7'], [8, '8'], [9, '9']], 'A (nukleónové číslo)', 'MeV / nukleón')
        + `<line class="f-ok" x1="${n1(p.X(8))}" y1="${n1(p.Y(6.45))}" x2="${n1(p.X(44))}" y2="${n1(p.Y(6.45))}" stroke-width="2"/>`
        + arr(p.X(230), p.Y(6.45), p.X(110), p.Y(6.45), 'f-warn');
      const clipped = `<path class="f-accent" fill="none" d="${line}"/>${dots}`;
      const front = `<text class="f-small" x="${n1(p.X(4)) + 6}" y="${n1(p.Y(7.07)) - 6}">He-4</text>
        <text class="f-small" x="${n1(p.X(56)) + 6}" y="${n1(p.Y(8.79)) - 6}">Fe-56</text>
        <text class="f-small" x="${n1(p.X(238)) - 6}" y="${n1(p.Y(7.57)) - 8}" text-anchor="end">U-238</text>
        <text class="f-small" x="${n1(p.X(26))}" y="${n1(p.Y(6.45)) - 8}" text-anchor="middle">fúzia</text>
        <text class="f-small" x="${n1(p.X(170))}" y="${n1(p.Y(6.45)) - 8}" text-anchor="middle">štiepenie</text>`;
      return svg(p, back, clipped, front, 'Väzbová energia na nukleón v závislosti od nukleónového čísla');
    }
  });

  FIGURES.register('v5v8-reaktor', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Tok energie v jadrovej elektrárni">
      <rect class="f-fill f-outline" x="10" y="60" width="110" height="60" rx="6"/>
      <text class="f-text" x="65" y="85" text-anchor="middle">reaktor</text>
      <text class="f-math" x="65" y="106" text-anchor="middle">P_t = 100 %</text>
      ${arr(120, 90, 160, 90, 'f-accent')}
      <text class="f-small" x="140" y="80" text-anchor="middle">para</text>
      <rect class="f-fill2 f-outline2" x="160" y="60" width="110" height="60" rx="6"/>
      <text class="f-text" x="215" y="85" text-anchor="middle">turbína</text>
      <text class="f-text" x="215" y="106" text-anchor="middle">generátor</text>
      ${arr(270, 90, 310, 90, 'f-ok')}
      <text class="f-small" x="290" y="80" text-anchor="middle">elektrina</text>
      <rect class="f-fill3 f-outline3" x="310" y="60" width="100" height="60" rx="6"/>
      <text class="f-math" x="360" y="96" text-anchor="middle">P_el ≈ 33 %</text>
      ${arr(215, 122, 215, 160, 'f-warn')}
      <text class="f-small" x="215" y="180" text-anchor="middle">odpadové teplo odchádza do chladiacej vody</text></svg>`
  });

  /* ---------- časticová fyzika (v8) ---------- */

  FIGURES.register('v5v8-kvarky', {
    draw: () => {
      // trojica kvarkov: horný a dva spodné; u má náboj +2/3 e, d má −1/3 e
      const group = (cx, name, qs, sumText) => {
        const pos = [[cx, 70], [cx - 36, 126], [cx + 36, 126]];
        const circles = qs.map((q, i) => {
          const cls = q === 'u' ? 'f-fill2 f-outline2' : 'f-fill3 f-outline3';
          return `<circle class="${cls}" cx="${pos[i][0]}" cy="${pos[i][1]}" r="20"/>
            <text class="f-math" x="${pos[i][0]}" y="${pos[i][1] + 5}" text-anchor="middle">${q}</text>`;
        }).join('');
        return `<text class="f-text" x="${cx}" y="28" text-anchor="middle">${name}</text>${circles}
          <text class="f-small" x="${cx}" y="178" text-anchor="middle">${sumText}</text>`;
      };
      return `<svg viewBox="0 0 420 220" role="img" aria-label="Zloženie protónu a neutrónu z kvarkov">
        ${group(110, 'proton (uud)', ['u', 'u', 'd'], 'náboj: +2/3 + 2/3 − 1/3 = +1')}
        ${group(310, 'neutrón (udd)', ['u', 'd', 'd'], 'náboj: +2/3 − 1/3 − 1/3 = 0')}
        <text class="f-small" x="210" y="206" text-anchor="middle">u: +2/3 e,  d: −1/3 e</text></svg>`;
    }
  });

  FIGURES.register('v5v8-generacie', {
    draw: () => {
      const cols = [150, 250, 350];
      const rows = [
        { y: 46, cls: 'f-fill2 f-outline2', items: [['u', '+2/3'], ['c', '+2/3'], ['t', '+2/3']] },
        { y: 92, cls: 'f-fill3 f-outline3', items: [['d', '−1/3'], ['s', '−1/3'], ['b', '−1/3']] },
        { y: 138, cls: 'f-fill f-outline', items: [['e', '−1'], ['μ', '−1'], ['τ', '−1']] },
        { y: 184, cls: 'f-fill f-outline', items: [['νe', '0'], ['νμ', '0'], ['ντ', '0']] }
      ];
      const cells = rows.map((r) => r.items.map(([sym, ch], i) => `<rect class="${r.cls}" x="${cols[i] - 40}" y="${r.y}" width="80" height="38" rx="6"/>
        <text class="f-math" x="${cols[i]}" y="${r.y + 17}" text-anchor="middle">${sym}</text>
        <text class="f-small" x="${cols[i]}" y="${r.y + 31}" text-anchor="middle">${ch}</text>`).join('')).join('');
      return `<svg viewBox="0 0 420 230" role="img" aria-label="Tri generácie fermiónov">
        ${cols.map((cx, i) => `<text class="f-small" x="${cx}" y="34" text-anchor="middle">${i + 1}. generácia</text>`).join('')}
        <text class="f-small" x="10" y="70">kvarky</text>
        <text class="f-small" x="10" y="116">kvarky</text>
        <text class="f-small" x="10" y="162">leptóny</text>
        <text class="f-small" x="10" y="208">neutrína</text>
        ${cells}</svg>`;
    }
  });

  FIGURES.register('v5v8-interakcie', {
    draw: () => {
      const rows = [
        ['silná', 'gluón g', '≈ 10⁻¹⁵ m'],
        ['elektromagnetická', 'fotón γ', 'nekonečný'],
        ['slabá', 'bozóny W±, Z⁰', '≈ 10⁻¹⁸ m'],
        ['gravitačná', 'gravitón (hyp.)', 'nekonečný']
      ];
      const body = rows.map(([a, b, c], i) => `<text class="f-text" x="20" y="${70 + 40 * i}">${a}</text>
        <text class="f-text" x="170" y="${70 + 40 * i}">${b}</text>
        <text class="f-text" x="320" y="${70 + 40 * i}">${c}</text>`).join('');
      const seps = [50, 90, 130, 170].map((y) => `<line class="f-thin" x1="10" y1="${y}" x2="410" y2="${y}"/>`).join('');
      return `<svg viewBox="0 0 420 200" role="img" aria-label="Základné interakcie, ich sprostredkovatele a dosah">
        <text class="f-small" x="20" y="34">interakcia</text>
        <text class="f-small" x="170" y="34">sprostredkovateľ</text>
        <text class="f-small" x="320" y="34">dosah</text>
        ${seps}
        ${body}</svg>`;
    }
  });

  FIGURES.register('v5v8-urychlovac', {
    draw: () => `<svg viewBox="0 0 420 200" role="img" aria-label="Urýchľovanie nabitej častice elektrickým poľom">
      <rect class="f-fill2 f-outline2" x="80" y="50" width="8" height="110"/>
      <rect class="f-fill3 f-outline3" x="300" y="50" width="8" height="110"/>
      <text class="f-math" x="84" y="42" text-anchor="middle">+</text>
      <text class="f-math" x="304" y="42" text-anchor="middle">−</text>
      ${arr(96, 70, 296, 70, 'f-accent')}
      <text class="f-small" x="196" y="62" text-anchor="middle">elektrické pole E</text>
      <circle class="f-fill f-outline" cx="150" cy="120" r="9"/>
      <text class="f-small" x="150" y="146" text-anchor="middle">+ze</text>
      ${arr(166, 120, 236, 120, 'f-ok')}
      <text class="f-small" x="200" y="112" text-anchor="middle">v</text>
      <text class="f-math" x="210" y="186" text-anchor="middle">E_k = z·e·U</text></svg>`
  });

  /* ---------- pripojenie k lekciám ---------- */

  // lekcia → id obrázka; obrázok sa doplní na koniec teórie lekcie
  const ATTACH = {
    'v5-dualizmus': 'v5v8-dualizmus',
    'v5-vlnova-funkcia': 'v5v8-pravdepodobnost',
    'v5-schrodinger': 'v5v8-jama',
    'v5-kvantovanie': 'v5v8-oscilator',
    'v5-spin': 'v5v8-moment',
    'v5-vodik': 'v5v8-vodik',
    'v5-neurcitost': 'v5v8-tunel',
    'v6-specialna': 'v5v8-gama',
    'v6-lorentz': 'v5v8-lorentz',
    'v6-energia': 'v5v8-energia',
    'v6-interval': 'v5v8-interval',
    'v6-zakrivenie': 'v5v8-zakrivenie',
    'v6-gravvlny': 'v5v8-horizont',
    'v7-spektra': 'v5v8-vodik',
    'v7-jadro': 'v5v8-nuklidy',
    'v7-radioaktivita': 'v5v8-rozpad',
    'v7-ziarenie-latka': 'v5v8-zoslabenie',
    'v7-stiepenie-fuzia': 'v5v8-vazba',
    'v7-jadrova-energetika': 'v5v8-reaktor',
    'v8-castice': 'v5v8-kvarky',
    'v8-kvarky-leptony': 'v5v8-generacie',
    'v8-standardny-model': 'v5v8-generacie',
    'v8-fotony': 'v5v8-interakcie',
    'v8-interakcie': 'v5v8-interakcie',
    'v8-urychlovace': 'v5v8-urychlovac'
  };

  // popisky pod obrázkami
  const CAPTIONS = {
    'v5v8-dualizmus': 'De Broglieho vlnová dĺžka λ = h/p: čím väčšia hybnosť, tým kratšia vlna.',
    'v5v8-pravdepodobnost': 'Pri rovnomernej hustote |ψ|² je pravdepodobnosť úmerná dĺžke úseku: P = a/L.',
    'v5v8-jama': 'Častica v nekonečne hlbokej jame má len diskrétne hladiny; energia rastie s n².',
    'v5v8-oscilator': 'Hladiny oscilátora sú rovnako rozostupné a najnižšia nie je nulová, ale ½ħω.',
    'v5v8-moment': 'Magnetické kvantové číslo m_l nadobúda 2l + 1 hodnôt od −l po +l.',
    'v5v8-vodik': 'Pri prechode na nižšiu hladinu atóm vyžiari fotón s energiou rovnou rozdielu hladín.',
    'v5v8-tunel': 'Častica s energiou nižšou než výška bariéry má v bariére exponenciálne klesajúcu vlnu a môže ju preniknúť.',
    'v5v8-gama': 'Lorentzov faktor γ je blízko 1 pri malých rýchlostiach a pri blížení k c prudko rastie.',
    'v5v8-lorentz': 'Osi x′ a ct′ sústavy S′ sú naklonené; Lorentzova transformácia prepočíta súradnice udalosti.',
    'v5v8-energia': 'Celková energia γmc² je pokojová energia mc² plus kinetická energia (γ − 1)mc².',
    'v5v8-interval': 'Vlastný čas Δτ = √(Δt² − Δx²) je pre časupodobný interval kratší než Δt.',
    'v5v8-zakrivenie': 'Hmota zakrivuje časopriestor a telesá sa pohybujú po zakrivených dráhach. Mriežka je len názorná analógia.',
    'v5v8-horizont': 'Polomer horizontu udalostí je r_s = 2GM/c²; svetlo zvnútra horizontu sa von nedostane.',
    'v5v8-nuklidy': 'Ľahké stabilné jadrá majú N ≈ Z, ťažšie stabilné jadrá majú neutrónov viac než protónov.',
    'v5v8-rozpad': 'Počet nerozpadnutých jadier klesá exponenciálne: po každom polčase zostane polovica.',
    'v5v8-zoslabenie': 'Každá polovičná hrúbka zníži intenzitu žiarenia na polovicu.',
    'v5v8-vazba': 'Väzbová energia na nukleón má maximum pri železe: ľahké jadrá sa zlučujú, ťažké štiepia.',
    'v5v8-reaktor': 'Elektráreň premieňa teplo reaktora na prácu; zvyšok tepla odchádza do chladiacej vody.',
    'v5v8-kvarky': 'Proton (uud) a neutrón (udd) sú zložené z troch kvarkov; súčet ich nábojov je náboj častice.',
    'v5v8-generacie': 'Fermióny sú v troch generáciách; vyššie generácie sú ťažšie a nestabilnejšie.',
    'v5v8-interakcie': 'Štyri základné interakcie: každá sa prenáša výmenou svojho bozónu a má iný dosah.',
    'v5v8-urychlovac': 'Častica s nábojom ze prejde napätím U a získa energiu zeU; urýchľuje ju elektrické pole.'
  };

  LESSONS.forEach((l) => {
    const fig = ATTACH[l.id];
    if (fig) l.theory.push({ fig, caption: CAPTIONS[fig] });
  });
})();
