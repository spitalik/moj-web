/* Obrázky a grafy k lekciám (inline SVG, farby z CSS premenných, takže fungujú v svetlom aj tmavom režime).
   Statický obrázok: draw() vráti SVG. Interaktívny: controls + draw(hodnoty) vráti { svg, readout }. */
(function () {
  'use strict';

  const n1 = (v) => Math.round(v * 10) / 10;
  // číslo s desatinným oddeľovačom jazyka obsahu (slovenčina čiarka)
  const sk = (v, d = 2) => (Math.abs(v) < 1e-9 ? 0 : v).toFixed(d).replace('.', CONTENT_I18N.decimal());
  const decimals = (step) => (String(step).split('.')[1] || '').length;
  // člen polynómu pre popis: " + 3x", " − x", " + 5"
  const term = (c, v) => (c === 0 ? '' : ` ${c > 0 ? '+' : '−'} ${Math.abs(c) === 1 && v ? '' : Math.abs(c)}${v}`);
  let uid = 0;

  // Súradnicová rovina: prepočet [xmin,xmax]×[ymin,ymax] na plochu SVG.
  function plane(xmin, xmax, ymin, ymax, W = 420, H = 300, pad = 24) {
    const X = (x) => pad + (x - xmin) / (xmax - xmin) * (W - 2 * pad);
    const Y = (y) => H - pad - (y - ymin) / (ymax - ymin) * (H - 2 * pad);
    return { xmin, xmax, ymin, ymax, W, H, pad, X, Y };
  }

  function axes(p, lx = 1, ly = lx) {
    let s = '';
    for (let x = Math.ceil(p.xmin); x <= p.xmax; x++) {
      s += `<line class="f-grid" x1="${n1(p.X(x))}" y1="${n1(p.Y(p.ymax))}" x2="${n1(p.X(x))}" y2="${n1(p.Y(p.ymin))}"/>`;
    }
    for (let y = Math.ceil(p.ymin); y <= p.ymax; y++) {
      s += `<line class="f-grid" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(y))}" x2="${n1(p.X(p.xmax))}" y2="${n1(p.Y(y))}"/>`;
    }
    s += `<line class="f-axis" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(p.xmax))}" y2="${n1(p.Y(0))}"/>`;
    s += `<line class="f-axis" x1="${n1(p.X(0))}" y1="${n1(p.Y(p.ymin))}" x2="${n1(p.X(0))}" y2="${n1(p.Y(p.ymax))}"/>`;
    for (let x = Math.ceil(p.xmin); x <= p.xmax; x++) {
      if (x !== 0 && x % lx === 0) s += `<text class="f-small" x="${n1(p.X(x))}" y="${n1(p.Y(0) + 14)}" text-anchor="middle">${x}</text>`;
    }
    for (let y = Math.ceil(p.ymin); y <= p.ymax; y++) {
      if (y !== 0 && y % ly === 0) s += `<text class="f-small" x="${n1(p.X(0) - 5)}" y="${n1(p.Y(y) + 4)}" text-anchor="end">${y}</text>`;
    }
    return s;
  }

  function curvePath(p, fn, a = p.xmin, b = p.xmax, steps = 240) {
    let d = '';
    for (let i = 0; i <= steps; i++) {
      const x = a + (b - a) * i / steps;
      const y = Math.max(Math.min(fn(x), p.ymax + 50), p.ymin - 50);
      d += `${i ? 'L' : 'M'}${n1(p.X(x))} ${n1(p.Y(y))}`;
    }
    return d;
  }

  // back = mriežka a osi, clipped = krivky orezané na plochu grafu, front = popisy navrchu
  function svg(p, back, clipped, front, label) {
    const id = 'fc' + (++uid);
    return `<svg viewBox="0 0 ${p.W} ${p.H}" role="img" aria-label="${label}">
      <defs><clipPath id="${id}"><rect x="${p.pad}" y="${p.pad}" width="${p.W - 2 * p.pad}" height="${p.H - 2 * p.pad}"/></clipPath></defs>
      ${back}<g clip-path="url(#${id})">${clipped}</g>${front}</svg>`;
  }

  const DEFS = {
    numberline: {
      draw: () => {
        const X = (k) => 30 + (k + 5) * 38;
        let s = `<svg viewBox="0 0 440 90" role="img" aria-label="Číselná os">
          <line class="f-line" x1="10" y1="45" x2="426" y2="45"/><path class="f-solid" d="M434 45 l-10 -5 v10 z"/>`;
        for (let k = -5; k <= 5; k++) {
          s += `<line class="f-line" x1="${X(k)}" y1="39" x2="${X(k)}" y2="51"/>
                <text class="f-small" x="${X(k)}" y="72" text-anchor="middle">${k}</text>`;
          if (k >= 1) s += `<circle class="f-dot" cx="${X(k)}" cy="45" r="6"/>`;
        }
        return s + `<text class="f-text c-accent" x="${X(3)}" y="22" text-anchor="middle">prirodzené čísla ℕ</text>
          <text class="f-text" x="${X(-3)}" y="22" text-anchor="middle">záporné celé čísla</text></svg>`;
      }
    },

    fractions: {
      draw: () => {
        const bar = (y, n, k, cls) => {
          let s = '';
          const w = 320 / n;
          for (let i = 0; i < n; i++) s += `<rect class="f-cell ${i < k ? cls : ''}" x="${n1(70 + i * w)}" y="${y}" width="${n1(w)}" height="26"/>`;
          return s;
        };
        const lab = (y, t) => `<text class="f-text" x="35" y="${y + 18}" text-anchor="middle">${t}</text>`;
        return `<svg viewBox="0 0 400 172" role="img" aria-label="Zlomky ako pruhy">
          ${lab(8, '1/2')}${bar(8, 2, 1, 'f-fill')}${lab(40, '3/6')}${bar(40, 6, 3, 'f-fill')}
          ${lab(104, '2/3')}${bar(104, 3, 2, 'f-fill2')}${lab(136, '4/6')}${bar(136, 6, 4, 'f-fill2')}</svg>`;
      }
    },

    percent: {
      draw: () => {
        let s = '<svg viewBox="0 0 400 200" role="img" aria-label="Štvorec rozdelený na 100 dielov, 25 je vyfarbených">';
        for (let i = 0; i < 100; i++) {
          s += `<rect class="f-cell ${i < 25 ? 'f-fill' : ''}" x="${10 + (i % 10) * 18}" y="${10 + Math.floor(i / 10) * 18}" width="18" height="18"/>`;
        }
        return s + `<text class="f-text" x="215" y="90">25 štvorčekov zo 100</text>
          <text class="f-text c-accent" x="215" y="118">= 25 % = 0,25 = 1/4</text></svg>`;
      }
    },

    venn: {
      draw: () => `<svg viewBox="0 0 400 222" role="img" aria-label="Vennov diagram dvoch množín">
        <circle class="f-fill f-outline" cx="150" cy="112" r="85"/>
        <circle class="f-fill2 f-outline2" cx="250" cy="112" r="85"/>
        <text class="f-math" x="76" y="36">A</text><text class="f-math" x="314" y="36">B</text>
        <text class="f-text" x="105" y="104" text-anchor="middle">1</text>
        <text class="f-text" x="118" y="140" text-anchor="middle">2</text>
        <text class="f-text" x="200" y="104" text-anchor="middle">3</text>
        <text class="f-text" x="200" y="140" text-anchor="middle">4</text>
        <text class="f-text" x="290" y="122" text-anchor="middle">5</text>
        <text class="f-small" x="200" y="216" text-anchor="middle">A ∩ B = {3, 4}</text></svg>`
    },

    shapes: {
      draw: () => `<svg viewBox="0 0 460 175" role="img" aria-label="Obdĺžnik, trojuholník a kruh">
        <rect class="f-fill f-outline" x="20" y="40" width="120" height="80"/>
        <text class="f-math" x="80" y="140" text-anchor="middle">a</text>
        <text class="f-math" x="148" y="86">b</text>
        <polygon class="f-fill2 f-outline2" points="180,120 300,120 230,40"/>
        <line class="f-dash" x1="230" y1="40" x2="230" y2="120"/>
        <path class="f-thin" d="M230 112 h8 v8"/>
        <text class="f-math" x="240" y="140" text-anchor="middle">z</text>
        <text class="f-math" x="222" y="88" text-anchor="end">v</text>
        <circle class="f-fill3 f-outline3" cx="390" cy="80" r="50"/>
        <line class="f-line" x1="390" y1="80" x2="440" y2="80"/><circle class="f-solid" cx="390" cy="80" r="3"/>
        <text class="f-math" x="415" y="72" text-anchor="middle">r</text>
        <text class="f-small" x="80" y="166" text-anchor="middle">obdĺžnik</text>
        <text class="f-small" x="240" y="166" text-anchor="middle">trojuholník</text>
        <text class="f-small" x="390" y="166" text-anchor="middle">kruh</text></svg>`
    },

    pythagoras: {
      // trojuholník (3, 4, 5) v mierke 30 px, štvorce nad každou stranou
      draw: () => `<svg viewBox="0 0 380 350" role="img" aria-label="Pytagorova veta: štvorce nad stranami">
        <polygon class="f-fill f-outline" points="140,130 140,220 50,220 50,130"/>
        <polygon class="f-fill2 f-outline2" points="140,220 260,220 260,340 140,340"/>
        <polygon class="f-fill3 f-outline3" points="140,130 260,220 350,100 230,10"/>
        <polygon class="f-tri" points="140,130 140,220 260,220"/>
        <path class="f-thin" d="M140 210 h10 v10"/>
        <text class="f-text" x="95" y="180" text-anchor="middle">a² = 9</text>
        <text class="f-text" x="200" y="285" text-anchor="middle">b² = 16</text>
        <text class="f-text" x="245" y="120" text-anchor="middle">c² = 25</text>
        <text class="f-math" x="146" y="180">a</text>
        <text class="f-math" x="196" y="214">b</text>
        <text class="f-math" x="210" y="166">c</text></svg>`
    },

    trigtriangle: {
      draw: () => `<svg viewBox="0 0 480 240" role="img" aria-label="Pravouhlý trojuholník s popisom strán">
        <polygon class="f-tri" points="40,200 340,200 340,50"/>
        <line class="f-accent" x1="40" y1="200" x2="340" y2="200"/>
        <line class="f-ok" x1="340" y1="200" x2="340" y2="50"/>
        <path class="f-thin" d="M328 200 v-12 h12"/>
        <path class="f-warn" d="M80 200 A40 40 0 0 0 75.8 182.1"/>
        <text class="f-math" x="88" y="194">α</text>
        <text class="f-text c-accent" x="190" y="224" text-anchor="middle">priľahlá odvesna</text>
        <text class="f-text c-ok" x="352" y="120">protiľahlá</text>
        <text class="f-text c-ok" x="352" y="138">odvesna</text>
        <text class="f-text" x="180" y="112" text-anchor="middle" transform="rotate(-26.57 180 112)">prepona</text></svg>`
    },

    unitcircle: {
      controls: [{ id: 'deg', label: 'Uhol α (°)', min: 0, max: 360, step: 1, value: 30 }],
      draw: (v) => {
        const p = plane(-1.3, 1.3, -1.3, 1.3, 320, 320, 16);
        const a = v.deg * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
        const r = p.X(1) - p.X(0), rr = 0.22;
        const arc = (v.deg > 0 && v.deg < 360)
          ? `<path class="f-warn" d="M${n1(p.X(rr))} ${n1(p.Y(0))} A${n1(rr * r)} ${n1(rr * r)} 0 ${v.deg > 180 ? 1 : 0} 0 ${n1(p.X(rr * c))} ${n1(p.Y(rr * s))}"/>`
          : '';
        const front = `<circle class="f-line" cx="${n1(p.X(0))}" cy="${n1(p.Y(0))}" r="${n1(r)}"/>${arc}
          <line class="f-accent" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(c))}" y2="${n1(p.Y(0))}"/>
          <line class="f-ok" x1="${n1(p.X(c))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(c))}" y2="${n1(p.Y(s))}"/>
          <line class="f-line" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(c))}" y2="${n1(p.Y(s))}"/>
          <circle class="f-dot" cx="${n1(p.X(c))}" cy="${n1(p.Y(s))}" r="5"/>`;
        return {
          svg: svg(p, axes(p), '', front, 'Jednotková kružnica'),
          readout: `α = ${v.deg}° · <span class="c-ok">sin α = ${sk(s, 3)}</span> · <span class="c-accent">cos α = ${sk(c, 3)}</span>`
        };
      }
    },

    parabola: {
      controls: [
        { id: 'p', label: 'p', min: -6, max: 6, step: 1, value: -5 },
        { id: 'q', label: 'q', min: -9, max: 9, step: 1, value: 6 }
      ],
      draw: (v) => {
        const p = plane(-8, 8, -10, 10, 420, 320);
        const P = v.p, Q = v.q, D = P * P - 4 * Q;
        let dots = '', roots;
        if (D >= 0) {
          const r1 = (-P - Math.sqrt(D)) / 2, r2 = (-P + Math.sqrt(D)) / 2;
          [r1, r2].forEach((x) => { dots += `<circle class="f-dot" cx="${n1(p.X(x))}" cy="${n1(p.Y(0))}" r="5"/>`; });
          roots = D === 0 ? `dvojnásobný koreň x = ${sk(r1)}` : `korene x₁ = ${sk(r1)}, x₂ = ${sk(r2)}`;
        } else {
          roots = 'nemá reálne korene (D &lt; 0)';
        }
        const vx = -P / 2, vy = Q - P * P / 4;
        const clipped = `<path class="f-accent" d="${curvePath(p, (x) => x * x + P * x + Q)}"/>${dots}
          <circle class="f-vertex" cx="${n1(p.X(vx))}" cy="${n1(p.Y(vy))}" r="4"/>`;
        return {
          svg: svg(p, axes(p, 2, 2), clipped, '', 'Graf kvadratickej funkcie'),
          readout: `y = x²${term(P, 'x')}${term(Q, '')} · D = ${D} · ${roots}`
        };
      }
    },

    parallelogram: {
      draw: () => {
        const p = plane(-1, 6, -1, 6, 320, 320);
        const P = (x, y) => `${n1(p.X(x))},${n1(p.Y(y))}`;
        const front = `<polygon class="f-fill f-outline" points="${P(0, 0)} ${P(2, 1)} ${P(5, 5)} ${P(3, 4)}"/>
          <line class="f-accent" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(2))}" y2="${n1(p.Y(1))}"/>
          <line class="f-ok" x1="${n1(p.X(0))}" y1="${n1(p.Y(0))}" x2="${n1(p.X(3))}" y2="${n1(p.Y(4))}"/>
          <circle class="f-dot" cx="${n1(p.X(2))}" cy="${n1(p.Y(1))}" r="4"/>
          <circle class="f-dot f-dot-ok" cx="${n1(p.X(3))}" cy="${n1(p.Y(4))}" r="4"/>
          <text class="f-math c-accent" x="${n1(p.X(2) + 8)}" y="${n1(p.Y(1) + 16)}">u = (2, 1)</text>
          <text class="f-math c-ok" x="${n1(p.X(3) - 8)}" y="${n1(p.Y(4) - 8)}" text-anchor="end">v = (3, 4)</text>
          <text class="f-text" x="${n1(p.X(2.5))}" y="${n1(p.Y(2.5) + 5)}" text-anchor="middle">S = 5</text>`;
        return svg(p, axes(p), '', front, 'Determinant ako obsah rovnobežníka');
      }
    },

    matmul: {
      draw: () => {
        const br = (xl, xr) => `<path class="f-thin" d="M${xl + 6} 24 h-6 v80 h6"/><path class="f-thin" d="M${xr - 6} 24 h6 v80 h-6"/>`;
        const cell = (x, y, t) => `<text class="f-text" x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle">${t}</text>`;
        return `<svg viewBox="0 0 390 135" role="img" aria-label="Súčin matíc: riadok krát stĺpec">
          <rect class="f-fill" x="22" y="30" width="76" height="28" rx="6"/>
          <rect class="f-fill2" x="164" y="30" width="32" height="68" rx="6"/>
          <rect class="f-fill3" x="294" y="30" width="32" height="28" rx="6"/>
          ${br(22, 98)}${cell(40, 44, 1)}${cell(80, 44, 2)}${cell(40, 84, 3)}${cell(80, 84, 4)}
          ${cell(130, 64, '·')}
          ${br(162, 238)}${cell(180, 44, 0)}${cell(220, 44, 1)}${cell(180, 84, 1)}${cell(220, 84, 0)}
          ${cell(265, 64, '=')}
          ${br(292, 368)}${cell(310, 44, 2)}${cell(350, 44, 1)}${cell(310, 84, 4)}${cell(350, 84, 3)}
          <text class="f-math" x="60" y="126" text-anchor="middle">A</text>
          <text class="f-math" x="200" y="126" text-anchor="middle">B</text>
          <text class="f-math" x="330" y="126" text-anchor="middle">AB</text></svg>`;
      }
    },

    tangent: {
      controls: [{ id: 'x0', label: 'x₀', min: -2, max: 2, step: 0.1, value: 1 }],
      draw: (v) => {
        const p = plane(-2.5, 2.5, -5, 5, 420, 320);
        const fn = (x) => x * x * x - 2 * x;
        const x0 = v.x0, y0 = fn(x0), k = 3 * x0 * x0 - 2;
        const line = (x) => y0 + k * (x - x0);
        const clipped = `<path class="f-line" d="${curvePath(p, fn)}"/>
          <line class="f-accent" x1="${n1(p.X(p.xmin))}" y1="${n1(p.Y(line(p.xmin)))}" x2="${n1(p.X(p.xmax))}" y2="${n1(p.Y(line(p.xmax)))}"/>
          <circle class="f-dot" cx="${n1(p.X(x0))}" cy="${n1(p.Y(y0))}" r="5"/>`;
        return {
          svg: svg(p, axes(p), clipped, '', 'Graf funkcie s dotyčnicou'),
          readout: `x₀ = ${sk(x0, 1)} · f(x₀) = ${sk(y0)} · <span class="c-accent">f′(x₀) = ${sk(k)}</span> (smernica dotyčnice)`
        };
      }
    },

    area: {
      controls: [{ id: 'b', label: 'Horná hranica b', min: 0, max: 3, step: 0.1, value: 2 }],
      draw: (v) => {
        const p = plane(-0.5, 3.5, -1, 10, 420, 300);
        const b = v.b;
        let d = `M${n1(p.X(0))} ${n1(p.Y(0))}`;
        for (let i = 0; i <= 60; i++) {
          const x = b * i / 60;
          d += `L${n1(p.X(x))} ${n1(p.Y(x * x))}`;
        }
        d += `L${n1(p.X(b))} ${n1(p.Y(0))}Z`;
        const clipped = `<path class="f-fill f-outline" d="${d}"/><path class="f-line" d="${curvePath(p, (x) => x * x)}"/>`;
        return {
          svg: svg(p, axes(p, 1, 2), clipped, '', 'Plocha pod grafom funkcie'),
          readout: `b = ${sk(b, 1)} · <span class="c-accent">obsah = b³/3 = ${sk(b * b * b / 3, 3)}</span>`
        };
      }
    }
  };

  // Jazyk obrázka je lang najbližšieho predka (obsah lekcie); popisy v SVG sa preložia (CONTENT_I18N.markup).
  function mount(el) {
    const def = DEFS[el.dataset.fig];
    const body = el.querySelector('.fig-body');
    if (!def || !body) return;
    const holder = el.closest('[lang]');
    const lang = holder ? holder.getAttribute('lang') : CONTENT_I18N.SOURCE;
    const inLang = (fn) => CONTENT_I18N.run(lang, null, fn);
    if (!def.controls) {
      body.innerHTML = inLang(() => CONTENT_I18N.markup(def.draw()));
      return;
    }
    const vals = {};
    let html = '<div class="fig-svg"></div><div class="fig-readout" aria-live="polite"></div><div class="fig-controls">';
    def.controls.forEach((c) => {
      vals[c.id] = c.value;
      html += `<label><span>${inLang(() => CONTENT_I18N.text(c.label))} = <output data-out="${c.id}">${inLang(() => sk(c.value, decimals(c.step)))}</output></span>
        <input type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}" data-ctl="${c.id}"></label>`;
    });
    body.innerHTML = html + '</div>';

    const update = () => inLang(() => {
      const r = def.draw(vals);
      body.querySelector('.fig-svg').innerHTML = CONTENT_I18N.markup(r.svg);
      body.querySelector('.fig-readout').innerHTML = r.readout;
    });
    def.controls.forEach((c) => {
      const input = body.querySelector(`[data-ctl="${c.id}"]`);
      input.addEventListener('input', () => {
        vals[c.id] = Number(input.value);
        body.querySelector(`[data-out="${c.id}"]`).textContent = inLang(() => sk(vals[c.id], decimals(c.step)));
        update();
      });
    });
    update();
  }

  // Ďalšie súbory (js/rocniky/*.js) pridávajú obrázky cez register(id, def).
  function register(id, def) {
    if (DEFS[id]) throw new Error('Obrázok už existuje: ' + id);
    DEFS[id] = def;
  }

  window.FIGURES = {
    mount, register,
    get: (id) => DEFS[id],
    util: { plane, axes, curvePath, svg, n1, sk, term }
  };
})();
