/* Interaktívne simulácie fyziky (inline SVG). Posuvníky menia veličiny a obrázok aj graf sa hneď prekreslia.
   Zoznam, kde sa simulácie zobrazujú, je v js/features/simulacie.js. Používa FIGURES z js/figures.js. */
(function () {
  'use strict';

  const { T } = CONTENT_I18N;
  const { plane, axes, curvePath, svg, n1, sk } = FIGURES.util;
  const G = 9.81;
  const PI = Math.PI;
  const deg = (x) => x * PI / 180;

  // lomená čiara v súradniciach grafu
  const line = (p, pts) => pts.map((q, k) => `${k ? 'L' : 'M'}${n1(p.X(q[0]))} ${n1(p.Y(q[1]))}`).join(' ');

  // šípka z (x1,y1) do (x2,y2) v pixeloch SVG
  const arrow = (x1, y1, x2, y2, cls = 'f-line') => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    const back = (k) => `${n1(x2 - h * Math.cos(a + k))},${n1(y2 - h * Math.sin(a + k))}`;
    return `<line class="${cls}" x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}"/>
      <polygon class="f-solid" points="${n1(x2)},${n1(y2)} ${back(0.45)} ${back(-0.45)}"/>`;
  };

  /* ---------- kinematika ---------- */

  FIGURES.register('sim-pohyb', {
    controls: [
      { id: 'v0', label: 'v₀ (m/s)', min: -5, max: 10, step: 0.5, value: 2 },
      { id: 'a', label: 'a (m/s²)', min: -2, max: 2, step: 0.25, value: 1 }
    ],
    draw: ({ v0, a }) => {
      const v10 = v0 + 10 * a;
      const lo = Math.min(0, v0, v10) - 2, hi = Math.max(0, v0, v10) + 2;
      const p = plane(0, 10, lo, hi);
      const area = `M${n1(p.X(0))} ${n1(p.Y(0))} L${n1(p.X(0))} ${n1(p.Y(v0))} L${n1(p.X(10))} ${n1(p.Y(v10))} L${n1(p.X(10))} ${n1(p.Y(0))} Z`;
      const s10 = v0 * 10 + a * 50;
      return {
        svg: svg(p, axes(p, 1, 2), `<path class="f-fill2" d="${area}"/><path class="f-accent" d="${line(p, [[0, v0], [10, v10]])}"/>`, '', 'Graf rýchlosti v čase'),
        readout: T`Graf v(t) od 0 do 10 s, plocha pod ním je dráha. Rýchlosť v(10 s) = ${sk(v10)} m/s, dráha s = ${sk(s10)} m.`
      };
    }
  });

  FIGURES.register('sim-vrh', {
    controls: [
      { id: 'v', label: 'v₀ (m/s)', min: 5, max: 30, step: 1, value: 20 },
      { id: 'al', label: 'α (°)', min: 5, max: 85, step: 1, value: 45 }
    ],
    draw: ({ v, al }) => {
      const r = deg(al), vx = v * Math.cos(r), vy = v * Math.sin(r);
      const tf = 2 * vy / G, R = vx * tf, H = vy * vy / (2 * G);
      const p = plane(0, Math.max(R, 1) * 1.1, 0, Math.max(H, 1) * 1.3);
      const pts = [];
      for (let k = 0; k <= 60; k++) { const q = tf * k / 60; pts.push([vx * q, vy * q - G * q * q / 2]); }
      return {
        svg: svg(p, axes(p, 5, 5), `<path class="f-accent" d="${line(p, pts)}"/>`, '', 'Trajektória šikmého vrhu'),
        readout: T`Dolet ${sk(R)} m · najvyšší bod ${sk(H)} m · čas letu ${sk(tf)} s. Odpor vzduchu sa zanedbáva.`
      };
    }
  });

  FIGURES.register('sim-zrychlenie', {
    controls: [
      { id: 'm', label: 'hmotnosť m (kg)', min: 1, max: 10, step: 0.5, value: 2 },
      { id: 'F', label: 'sila F (N)', min: 1, max: 40, step: 1, value: 10 }
    ],
    draw: ({ m, F }) => {
      const acc = F / m, t = 4;
      const p = plane(0, t, 0, Math.max(acc * t, 1) * 1.2);
      return {
        svg: svg(p, axes(p, 1, 1), `<path class="f-accent" d="${curvePath(p, (x) => acc * x, 0, t)}"/><circle class="f-dot" cx="${n1(p.X(t))}" cy="${n1(p.Y(acc * t))}" r="5"/>`, '', 'Rýchlosť pri stálom zrýchlení'),
        readout: T`Zrýchlenie a = F / m = ${sk(acc)} m/s². Rýchlosť po ${t} s je ${sk(acc * t)} m/s (zo sily ${sk(F, 0)} N, pri hmotnosti ${sk(m, 1)} kg).`
      };
    }
  });

  /* ---------- sily ---------- */

  FIGURES.register('sim-sklon', {
    controls: [
      { id: 'al', label: 'α (°)', min: 0, max: 60, step: 1, value: 25 },
      { id: 'mu', label: 'μ (súčiniteľ trenia)', min: 0, max: 1, step: 0.05, value: 0.3 }
    ],
    draw: ({ al, mu }) => {
      const r = deg(al), c = Math.cos(r), s = Math.sin(r);
      const A = [40, 250], C = [340, 250], B = [340, 250 - 300 * Math.tan(r)];
      const M = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
      const u = [c, -s], nrm = [-s, -c];
      const bx = M[0] + 12 * nrm[0], by = M[1] + 12 * nrm[1];
      const slides = Math.tan(r) > mu;
      let forces = arrow(bx, by, bx, by + 55, 'f-line');
      forces += arrow(bx, by, bx + 55 * nrm[0], by + 55 * nrm[1], 'f-accent');
      if (slides) forces += arrow(bx, by, bx - 50 * u[0], by - 50 * u[1], 'f-dash');
      else forces += arrow(bx, by, bx + 45 * u[0], by - 45 * u[1], 'f-accent');
      return {
        svg: `<svg viewBox="0 0 420 300" role="img" aria-label="Teleso na naklonenej rovine">
          <polygon class="f-fill2 f-outline2" points="${A} ${C} ${B}"/>
          <text class="f-small" x="${A[0] + 26}" y="${A[1] - 6}">α</text>
          <g transform="translate(${n1(bx)} ${n1(by)}) rotate(${-al})"><rect class="f-fill f-outline" x="-18" y="-22" width="36" height="22" rx="3"/></g>
          ${forces}</svg>`,
        readout: slides
          ? T`tan α = ${sk(Math.tan(r))} je väčší ako μ = ${sk(mu)}: teleso sa šmýka. Na 1 kg pôsobí zložka tiaže ${sk(G * s)} N po svahu.`
          : T`tan α = ${sk(Math.tan(r))} je menší alebo rovný μ = ${sk(mu)}: teleso zostáva v pokoji. Trenie na 1 kg môže byť najviac ${sk(mu * G * c)} N.`
      };
    }
  });

  FIGURES.register('sim-kyvadlo', {
    controls: [
      { id: 'L', label: 'dĺžka L (m)', min: 0.2, max: 2, step: 0.05, value: 1 },
      { id: 'phi', label: 'výchylka (°)', min: 5, max: 60, step: 1, value: 20 }
    ],
    draw: ({ L, phi }) => {
      const k = 110, px = 210, py = 30, r = deg(phi);
      const bx = px + L * k * Math.sin(r), by = py + L * k * Math.cos(r);
      const per = 2 * PI * Math.sqrt(L / G);
      return {
        svg: `<svg viewBox="0 0 420 270" role="img" aria-label="Kyvadlo">
          <line class="f-thin" x1="${px}" y1="${py}" x2="${px}" y2="${py + L * k + 10}" stroke-dasharray="4 4"/>
          <line class="f-line" x1="${px}" y1="${py}" x2="${n1(bx)}" y2="${n1(by)}"/>
          <circle class="f-dot" cx="${px}" cy="${py}" r="4"/>
          <circle class="f-fill2 f-outline2" cx="${n1(bx)}" cy="${n1(by)}" r="14"/></svg>`,
        readout: T`Perióda T = 2π·√(L/g) = ${sk(per)} s. Pri malej výchylke nezávisí perióda od amplitúdy ani od hmotnosti závažia.`
      };
    }
  });

  /* ---------- energia, teplo, tekutiny ---------- */

  FIGURES.register('sim-plavanie', {
    controls: [
      { id: 'rho', label: 'hustota telesa (kg/m³)', min: 100, max: 2000, step: 50, value: 800 },
      { id: 'V', label: 'objem (dm³)', min: 0.5, max: 10, step: 0.5, value: 2 }
    ],
    draw: ({ rho, V }) => {
      const surf = 80, bottom = 280, h = 60;
      const floats = rho < 1000;
      const frac = floats ? rho / 1000 : 1;
      const yBot = floats ? surf + frac * h : bottom;
      const yTop = yBot - h;
      const weight = G * rho * V / 1000, buoy = floats ? weight : G * V;
      return {
        svg: `<svg viewBox="0 0 420 300" role="img" aria-label="Teleso vo vode">
          <rect class="f-fill2" x="60" y="${surf}" width="300" height="${bottom - surf}" opacity="0.5"/>
          <line class="f-axis" x1="60" y1="${surf}" x2="360" y2="${surf}"/>
          <rect class="f-fill3 f-outline3" x="190" y="${n1(yTop)}" width="60" height="${h}" rx="4"/>
          <text class="f-small" x="70" y="${surf - 8}">hladina vody</text></svg>`,
        readout: floats
          ? T`Pláva. Ponorená časť: ${sk(frac * 100, 0)} %. Vztlak aj tiaž sú ${sk(buoy)} N.`
          : T`Potopí sa. Vztlak ${sk(buoy)} N je menší ako tiaž ${sk(weight)} N.`
      };
    }
  });

  FIGURES.register('sim-plyn', {
    controls: [
      { id: 'Tk', label: 'teplota T (K)', min: 200, max: 400, step: 10, value: 300 },
      { id: 'n', label: 'látkové množstvo n (mol)', min: 0.5, max: 3, step: 0.1, value: 1 },
      { id: 'Vl', label: 'objem V (l)', min: 1, max: 10, step: 0.5, value: 4 }
    ],
    draw: ({ Tk, n, Vl }) => {
      const K = n * 8.314 * Tk;
      const p = plane(0, 10, 0, K * 1.1);
      const pr = K / Vl;
      return {
        svg: svg(p, axes(p, 1, Math.ceil(K / 4 / 100) * 100), `<path class="f-accent" d="${curvePath(p, (v) => K / v, 1, 10)}"/><circle class="f-dot" cx="${n1(p.X(Vl))}" cy="${n1(p.Y(pr))}" r="5"/>`, '', 'Izoterma ideálneho plynu'),
        readout: T`p = ${sk(pr, 0)} kPa pri V = ${sk(Vl, 1)} l. Izoterma platí, keď pV = nRT = ${sk(K, 0)} J.`
      };
    }
  });

  FIGURES.register('sim-ohrev', {
    controls: [
      { id: 'P', label: 'výkon ohrievača (W)', min: 100, max: 2000, step: 100, value: 1000 },
      { id: 'm', label: 'hmotnosť vody (kg)', min: 0.5, max: 3, step: 0.5, value: 1 }
    ],
    draw: ({ P, m }) => {
      const c = 4186, t0 = 20, tBoil = m * c * (100 - t0) / P, tEnd = tBoil * 1.5;
      const p = plane(0, tEnd, 0, 110);
      return {
        svg: svg(p, axes(p, Math.ceil(tEnd / 6 / 10) * 10, 20), `<line class="f-dash" x1="${n1(p.X(0))}" y1="${n1(p.Y(100))}" x2="${n1(p.X(tEnd))}" y2="${n1(p.Y(100))}"/><path class="f-accent" d="${curvePath(p, (t) => Math.min(100, t0 + P * t / (m * c)), 0, tEnd)}"/>`, '', 'Ohrievanie vody'),
        readout: T`Voda zovrie za ${sk(tBoil, 0)} s (približne ${sk(tBoil / 60, 1)} min). Teplo Q = m·c·Δt, c = 4 186 J/(kg·K).`
      };
    }
  });

  /* ---------- vlny, svetlo, optika ---------- */

  FIGURES.register('sim-vlny', {
    controls: [
      { id: 'f1', label: 'f₁ (Hz)', min: 1, max: 5, step: 0.5, value: 2 },
      { id: 'f2', label: 'f₂ (Hz)', min: 1, max: 5, step: 0.5, value: 2.5 }
    ],
    draw: ({ f1, f2 }) => {
      const p = plane(0, 4, -2.2, 2.2);
      const y1 = (t) => Math.sin(2 * PI * f1 * t), y2 = (t) => Math.sin(2 * PI * f2 * t);
      return {
        svg: svg(p, axes(p, 1, 1), `<path class="f-thin" d="${curvePath(p, y1, 0, 4)}"/><path class="f-thin" d="${curvePath(p, y2, 0, 4)}"/><path class="f-accent" d="${curvePath(p, (t) => y1(t) + y2(t), 0, 4, 400)}"/>`, '', 'Skladanie dvoch kmitov'),
        readout: T`Dva kmity s frekvenciami ${sk(f1, 1)} Hz a ${sk(f2, 1)} Hz sa skladajú. Rázová frekvencia je |f₁ − f₂| = ${sk(Math.abs(f1 - f2), 1)} Hz.`
      };
    }
  });

  FIGURES.register('sim-lom', {
    controls: [
      { id: 'na', label: 'n₁ (prvé prostredie)', min: 1, max: 2.5, step: 0.1, value: 1 },
      { id: 'nb', label: 'n₂ (druhé prostredie)', min: 1, max: 2.5, step: 0.1, value: 1.5 },
      { id: 'al', label: 'uhol dopadu α (°)', min: 0, max: 89, step: 1, value: 40 }
    ],
    draw: ({ na, nb, al }) => {
      const r = deg(al), cx = 210, cy = 150, L = 120;
      const s = na * Math.sin(r) / nb;
      let ray, readout;
      if (s > 1) {
        ray = arrow(cx, cy, cx + L * Math.sin(r), cy - L * Math.cos(r), 'f-accent');
        readout = T`Úplný odraz: sin α = ${sk(Math.sin(r))} > n₂/n₁ = ${sk(nb / na)}, svetlo sa do druhého prostredia nedostane.`;
      } else {
        const b = Math.asin(s);
        ray = arrow(cx, cy, cx + L * Math.sin(b), cy + L * Math.cos(b), 'f-accent');
        readout = T`Snellov zákon: n₁·sin α = n₂·sin β, teda sin β = ${sk(s)} a β = ${sk(b * 180 / PI, 1)}°.`;
      }
      return {
        svg: `<svg viewBox="0 0 420 300" role="img" aria-label="Lom svetla na rozhraní">
          <rect class="f-fill" x="0" y="0" width="420" height="${cy}" opacity="0.4"/>
          <rect class="f-fill2" x="0" y="${cy}" width="420" height="${300 - cy}" opacity="0.4"/>
          <line class="f-dash" x1="${cx}" y1="20" x2="${cx}" y2="280"/>
          <line class="f-axis" x1="0" y1="${cy}" x2="420" y2="${cy}"/>
          ${arrow(cx - L * Math.sin(r), cy - L * Math.cos(r), cx, cy, 'f-line')}
          ${ray}</svg>`,
        readout
      };
    }
  });

  FIGURES.register('sim-sosocka', {
    controls: [
      { id: 'f', label: 'ohnisková vzdialenosť f (cm)', min: 1, max: 10, step: 0.5, value: 5 },
      { id: 'd', label: 'vzdialenosť predmetu a (cm)', min: 1, max: 30, step: 1, value: 12 }
    ],
    draw: ({ f, d }) => {
      const s = 5, cx = 210, cy = 150, h = 50;
      const near = Math.abs(d - f) < 0.05;
      const dp = near ? null : f * d / (d - f);
      const mag = near ? null : -dp / d;
      let img = '', readout;
      if (near) {
        readout = T`Predmet je v ohniskovej vzdialenosti: lúče sa vychádzajú rovnobežne a obraz vzniká v nekonečne.`;
      } else {
        const xi = cx + dp * s, hi = mag * h;
        img = Math.abs(dp * s) < 200 ? arrow(xi, cy, xi, cy - hi, 'f-accent') : '';
        const kind = dp > 0 ? T`skutočný, ${mag < 0 ? 'prevrátený' : 'vzpriamený'}` : T`zdanlivý, vzpriamený`;
        readout = T`Obraz: a′ = ${sk(dp)} cm, zväčšenie |β| = ${sk(Math.abs(mag))}; obraz je ${kind}.`;
      }
      return {
        svg: `<svg viewBox="0 0 420 300" role="img" aria-label="Spojná šošovka a zobrazenie predmetu">
          <line class="f-axis" x1="0" y1="${cy}" x2="420" y2="${cy}"/>
          <line class="f-fill" x1="${cx}" y1="${cy - 80}" x2="${cx}" y2="${cy + 80}" stroke-width="4"/>
          <circle class="f-dot" cx="${cx - f * s}" cy="${cy}" r="3"/><circle class="f-dot" cx="${cx + f * s}" cy="${cy}" r="3"/>
          ${arrow(cx - d * s, cy, cx - d * s, cy - h, 'f-line')}
          ${img}</svg>`,
        readout
      };
    }
  });
})();
