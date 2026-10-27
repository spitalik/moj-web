/* Poznámkový zošit: plocha so štvorčekmi na písanie prstom, perom alebo myšou (Pointer Events,
   tlak pera mení hrúbku). Pero / guma / vymazať. Farba čiary je farba textu aktuálneho vzhľadu. */
(function () {
  'use strict';

  function mount(container) {
    const t = I18N.t;
    container.classList.add('scratch');
    container.innerHTML = `
      <div class="scratch-bar" role="toolbar" aria-label="${t('scratchLabel')}">
        <button type="button" class="btn btn-small active" data-tool="pen" aria-pressed="true">✏️ ${t('scratchPen')}</button>
        <button type="button" class="btn btn-small" data-tool="eraser" aria-pressed="false">🧽 ${t('scratchEraser')}</button>
        <button type="button" class="btn btn-small" data-act="clear">🗑️ ${t('scratchClear')}</button>
      </div>
      <canvas class="scratch-canvas" aria-label="${t('scratchLabel')}"></canvas>`;
    const canvas = container.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    let tool = 'pen', drawing = false, last = null, strokes = [];

    // rozlíšenie podľa displeja; pri zmene veľkosti sa ťahy prekreslia
    function resize() {
      const r = canvas.getBoundingClientRect();
      if (!r.width) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      redraw();
    }
    const color = () => getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#000';
    function seg(s) {
      ctx.globalCompositeOperation = s.eraser ? 'destination-out' : 'source-over';
      ctx.strokeStyle = color();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = s.w;
      ctx.beginPath();
      ctx.moveTo(s.x0, s.y0);
      ctx.lineTo(s.x1, s.y1);
      ctx.stroke();
    }
    function redraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      strokes.forEach(seg);
    }
    const pos = (e) => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };

    canvas.addEventListener('pointerdown', (e) => {
      drawing = true;
      last = pos(e);
      canvas.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    canvas.addEventListener('pointermove', (e) => {
      if (!drawing) return;
      const p = pos(e);
      const pressure = e.pointerType === 'pen' && e.pressure ? e.pressure : 0.5;
      const s = { x0: last.x, y0: last.y, x1: p.x, y1: p.y, eraser: tool === 'eraser', w: tool === 'eraser' ? 22 : 1.5 + 3 * pressure };
      strokes.push(s);
      seg(s);
      last = p;
      e.preventDefault();
    });
    const stop = () => { drawing = false; };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);

    container.querySelector('.scratch-bar').addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      if (b.dataset.act === 'clear') { strokes = []; redraw(); return; }
      tool = b.dataset.tool;
      container.querySelectorAll('[data-tool]').forEach((x) => {
        x.classList.toggle('active', x === b);
        x.setAttribute('aria-pressed', String(x === b));
      });
    });
    if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas);
    resize();

    return { clear() { strokes = []; redraw(); }, resize };
  }

  window.SCRATCH = { mount };
})();
