/* Schematické značky elektrických obvodov (podľa IEC 60617): zdroj (článok), rezistor, žiarovka, meracie prístroje,
   spínač a uzol. SCHEMA.seg(x1, y1, x2, y2, druh, voľby) nakreslí vodorovný alebo zvislý vodič a do jeho stredu vloží
   súčiastku; vodič sa pri súčiastke preruší, takže značka nesedí na súvislej čiare. Používajú ich obrázky v js/obrazky*.js. */
(function () {
  'use strict';

  // polovičná dĺžka súčiastky pozdĺž vodiča (o toľko sa vodič preruší na každú stranu od stredu)
  const HALF = { cell: 5, resistor: 22, bulb: 13, meter: 13, switch: 20 };
  const line = (x1, y1, x2, y2, cls = 'f-line') => `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  const text = (x, y, s, cls, anchor = 'middle') => `<text class="${cls}" x="${x}" y="${y}" text-anchor="${anchor}">${s}</text>`;

  // popis súčiastky: a – nad, b – pod, l – vľavo, r – vpravo
  function label(x, y, hor, o) {
    if (!o.label) return '';
    const cls = o.cls || 'f-math';
    const at = o.at || (hor ? 'a' : 'l');
    const off = o.off || 24;
    if (at === 'a') return text(x, y - off, o.label, cls);
    if (at === 'b') return text(x, y + off + 12, o.label, cls);
    if (at === 'l') return text(x - off, y + 5, o.label, cls, 'end');
    return text(x + off, y + 5, o.label, cls, 'start');
  }

  function part(kind, x, y, hor, o) {
    if (kind === 'cell') {
      // dlhá tenká doska je kladný pól, krátka hrubá záporný; flip prehodí poradie
      const s = o.flip ? 1 : -1;
      if (hor) {
        return line(x + 5 * s, y - 16, x + 5 * s, y + 16) + line(x - 5 * s, y - 8, x - 5 * s, y + 8, 'f-plate')
          + (o.signs === false ? '' : text(x + 13 * s, y - 14, '+', 'f-small') + text(x - 13 * s, y - 14, '−', 'f-small'));
      }
      return line(x - 16, y + 5 * s, x + 16, y + 5 * s) + line(x - 8, y - 5 * s, x + 8, y - 5 * s, 'f-plate')
        + (o.signs === false ? '' : text(x + 22, y + 5 * s + 4, '+', 'f-small', 'start') + text(x + 22, y - 5 * s + 8, '−', 'f-small', 'start'));
    }
    if (kind === 'resistor') {
      return hor
        ? `<rect class="f-line" x="${x - 22}" y="${y - 8}" width="44" height="16"/>`
        : `<rect class="f-line" x="${x - 8}" y="${y - 22}" width="16" height="44"/>`;
    }
    if (kind === 'bulb') {
      const d = 9.2;
      return `<circle class="f-line" cx="${x}" cy="${y}" r="13"/>`
        + line(x - d, y - d, x + d, y + d) + line(x - d, y + d, x + d, y - d);
    }
    if (kind === 'meter') {
      return `<circle class="f-line" cx="${x}" cy="${y}" r="13"/>` + text(x, y + 5, o.letter || 'A', 'f-text');
    }
    if (kind === 'switch') {
      const dots = hor
        ? `<circle class="f-dot" cx="${x - 20}" cy="${y}" r="3"/><circle class="f-dot" cx="${x + 20}" cy="${y}" r="3"/>`
        : `<circle class="f-dot" cx="${x}" cy="${y - 20}" r="3"/><circle class="f-dot" cx="${x}" cy="${y + 20}" r="3"/>`;
      const lever = hor
        ? (o.closed ? line(x - 20, y, x + 20, y) : line(x - 20, y, x + 15, y - 17))
        : (o.closed ? line(x, y - 20, x, y + 20) : line(x, y + 20, x + 17, y - 15));
      return lever + dots;
    }
    return '';
  }

  // vodič medzi dvoma bodmi (vodorovne alebo zvisle) so súčiastkou v strede
  function seg(x1, y1, x2, y2, kind, o = {}) {
    const hor = y1 === y2;
    const d = HALF[kind] || 0;
    if (!d) return line(x1, y1, x2, y2);
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const wire = hor
      ? line(Math.min(x1, x2), y1, mx - d, y1) + line(mx + d, y1, Math.max(x1, x2), y1)
      : line(x1, Math.min(y1, y2), x1, my - d) + line(x1, my + d, x1, Math.max(y1, y2));
    return wire + part(kind, mx, my, hor, o) + label(mx, my, hor, o);
  }

  // uzol (spoj vodičov) a lomený vodič bez súčiastok
  const node = (x, y) => `<circle class="f-node" cx="${x}" cy="${y}" r="4"/>`;
  const wire = (...pts) => `<path class="f-line" d="${pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]} ${p[1]}`).join(' ')}"/>`;

  window.SCHEMA = { seg, node, wire };
})();
