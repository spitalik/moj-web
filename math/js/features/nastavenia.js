/* Nastavenia a prenos postupu bez účtu:
   - vzhľad (4 témy, predvolená tmavá), môj ročník (denná výzva), klávesnica na obrazovke, riešenie po krokoch,
   - čítanie: písmo pre ľahšie čítanie (Atkinson Hyperlegible, Lexend), väčšie rozostupy, rýchlosť čítania nahlas,
   - prenos: export do súboru / import zo súboru (zlúčiť alebo nahradiť), textový kód (komprimovaný) a QR kód
     s odkazom #/prenos/<kód> – po naskenovaní sa postup zlúči na druhom zariadení (aplikácia musí byť na internete).
   QR kódy kreslí knižnica qrcode-generator (načíta sa až pri použití). */
(function () {
  'use strict';
  const { t, esc } = APP;
  const QR_LIB = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js';

  /* ---------- QR kód (zdieľané s režimom pre učiteľa) ---------- */
  let qrLoading = null;
  function loadQr() {
    if (window.qrcode) return Promise.resolve();
    if (!qrLoading) {
      qrLoading = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = QR_LIB;
        s.onload = resolve;
        s.onerror = () => { qrLoading = null; reject(new Error('qr')); };
        document.head.appendChild(s);
      });
    }
    return qrLoading;
  }
  window.QR = {
    render(el, text) {
      el.innerHTML = `<p class="muted small">${esc(t('qrLoading'))}</p>`;
      loadQr().then(() => {
        try {
          const qr = window.qrcode(0, 'L');
          qr.addData(text);
          qr.make();
          el.innerHTML = `<div class="qr-img" role="img" aria-label="${esc(t('qrLabel'))}">${qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true })}</div>`;
        } catch (e) {
          el.innerHTML = `<p class="muted small">${esc(t('qrTooLong'))}</p>`;
        }
      }).catch(() => { el.innerHTML = `<p class="muted small">${esc(t('qrOffline'))}</p>`; });
    }
  };

  /* ---------- kód na prenos: JSON → deflate → base64url ('z…'), bez kompresie 'j…' ---------- */
  const b64url = (bytes) => { let s = ''; bytes.forEach((b) => { s += String.fromCharCode(b); }); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  const fromB64url = (str) => { const b = str.replace(/-/g, '+').replace(/_/g, '/'); const bin = atob(b + '==='.slice((b.length + 3) % 4)); return Uint8Array.from(bin, (c) => c.charCodeAt(0)); };
  async function packCode(obj) {
    const json = JSON.stringify(obj);
    if (window.CompressionStream) {
      const stream = new Blob([json]).stream().pipeThrough(new CompressionStream('deflate-raw'));
      return 'z' + b64url(new Uint8Array(await new Response(stream).arrayBuffer()));
    }
    return 'j' + b64url(new TextEncoder().encode(json));
  }
  async function unpackCode(code) {
    const c = code.trim();
    const bytes = fromB64url(c.slice(1));
    if (c[0] === 'z') {
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
      return JSON.parse(await new Response(stream).text());
    }
    return JSON.parse(new TextDecoder().decode(bytes));
  }

  const lessonCount = (obj) => { try { return Object.keys(JSON.parse(obj.data['matika.progress.v1'] || '{}')).length; } catch (e) { return 0; } };

  function download(obj) {
    const blob = new Blob([JSON.stringify(obj, null, 1)], { type: 'application/json' });
    const name = `matematika-postup-${STORE.day()}.json`;
    const file = new File([blob], name, { type: 'application/json' });
    // na mobile radšej zdieľanie súboru (poslať sebe, uložiť do súborov)
    if (navigator.canShare && navigator.canShare({ files: [file] }) && KEYPAD.touch()) {
      navigator.share({ files: [file], title: t('transferTitle') }).catch(() => {});
      return;
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  function importObj(obj, mode) {
    try {
      STORE.importAll(obj, mode);
      APP.toast(`✓ ${esc(t('transferDone'))}`);
      return true;
    } catch (e) {
      APP.toast(`⚠️ ${esc(t('transferBad'))}`);
      return false;
    }
  }

  // vzhľad: dlaždice s malou ukážkou farieb (pozadie, text, zvýraznenie) každej témy
  const SWATCH = {
    light: ['#f8fafc', '#0f172a', '#2563eb'],
    dark: ['#0b1220', '#e2e8f0', '#60a5fa'],
    sepia: ['#f3ead7', '#3b2e1e', '#9a4f12'],
    contrast: ['#000000', '#ffffff', '#ffd60a']
  };
  function themeTiles() {
    const cur = APP.getTheme();
    return APP.themeOptions().map((o) => {
      const [bg, fg, ac] = SWATCH[o.id];
      return `<label class="theme-opt"><input type="radio" name="theme" value="${o.id}"${o.id === cur ? ' checked' : ''}>
        <span class="theme-swatch" style="background:${bg}" aria-hidden="true"><i style="background:${fg}"></i><i style="background:${fg}"></i><i style="background:${ac}"></i></span>
        <span class="theme-opt-name">${o.icon} ${esc(o.label)}</span></label>`;
    }).join('');
  }

  function page() {
    const s = STORE.settings();
    const radio = (name, value, label) => `<label class="check"><input type="radio" name="${name}" value="${value}"${String(s[name]) === String(value) ? ' checked' : ''}> ${label}</label>`;
    const ttsOk = window.TTS && TTS.supported();
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>⚙️ ${esc(t('settingsTitle'))}</h1>
      <section class="block settings" id="vzhlad">
        <h2>🎨 ${esc(t('themeLabel'))}</h2>
        <div class="theme-pick" role="radiogroup" aria-label="${esc(t('themeLabel'))}">${themeTiles()}</div>
      </section>
      <section class="block settings">
        <h2>${esc(t('settingsLearning'))}</h2>
        <label class="field">${esc(t('myLevel'))} <select name="myLevel"><option value="">${esc(t('myLevelAuto'))}</option>${LEVELS.map((lv) => `<option value="${lv.id}"${s.myLevel === lv.id ? ' selected' : ''}>${esc(APP.lvName(lv).title)}</option>`).join('')}</select></label>
        <label class="check"><input type="checkbox" name="stepMode"${s.stepMode ? ' checked' : ''}> ${esc(t('settingsStepMode'))}</label>
        <fieldset><legend>⌨️ ${esc(t('keypadToggle'))}</legend>
          ${radio('keypad', 'auto', esc(t('keypadAuto')))}${radio('keypad', 'on', esc(t('keypadOn')))}${radio('keypad', 'off', esc(t('keypadOff')))}</fieldset>
      </section>
      <section class="block settings">
        <h2>${esc(t('settingsReading'))}</h2>
        <fieldset><legend>${esc(t('settingsFont'))}</legend>
          ${radio('font', 'normal', esc(t('fontNormal')))}${radio('font', 'readable', `<span style="font-family:'Atkinson Hyperlegible',sans-serif">${esc(t('fontReadable'))}</span>`)}${radio('font', 'lexend', `<span style="font-family:'Lexend',sans-serif">${esc(t('fontLexend'))}</span>`)}</fieldset>
        <label class="check"><input type="checkbox" name="spacing"${s.spacing ? ' checked' : ''}> ${esc(t('settingsSpacing'))}</label>
        <p class="font-preview">${esc(t('fontPreview'))} $\\frac{3}{4} + \\frac{1}{8} = \\frac{7}{8}$</p>
        <label class="field">🔊 ${esc(t('ttsRate'))} <input type="range" name="ttsRate" min="0.6" max="1.4" step="0.1" value="${s.ttsRate}"${ttsOk ? '' : ' disabled'}></label>
        ${ttsOk ? `<button class="btn btn-small" type="button" id="tts-try">🔊 ${esc(t('ttsTry'))}</button>
          ${window.TTS && !TTS.hasVoice(I18N.getLang()) ? `<p class="muted small">${esc(t('ttsNoVoice'))}</p>` : ''}` : `<p class="muted small">${esc(t('ttsUnsupported'))}</p>`}
      </section>
      <section class="block settings" id="transfer">
        <h2>🔄 ${esc(t('transferTitle'))}</h2>
        <p class="muted">${esc(t('transferIntro'))}</p>
        <div class="actions">
          <button class="btn btn-primary" type="button" id="exp">⬇️ ${esc(t('transferExport'))}</button>
          <label class="btn" for="imp-file">⬆️ ${esc(t('transferImport'))}</label>
          <input type="file" id="imp-file" accept=".json,application/json" hidden>
        </div>
        <label class="check"><input type="checkbox" id="replace"> ${esc(t('transferReplace'))}</label>
        <h3>${esc(t('transferCodeTitle'))}</h3>
        <p class="muted small">${esc(t('transferCodeIntro'))}</p>
        <div class="actions"><button class="btn" type="button" id="mk-code">🔑 ${esc(t('transferMakeCode'))}</button></div>
        <div id="code-out"></div>
        <label class="field">${esc(t('transferPaste'))}<textarea id="code-in" rows="3" class="result-code"></textarea></label>
        <div class="actions"><button class="btn" type="button" id="use-code">${esc(t('transferUseCode'))}</button></div>
      </section>
      <section class="block settings danger">
        <h2>${esc(t('settingsDanger'))}</h2>
        <button class="btn" type="button" id="wipe">🗑️ ${esc(t('settingsWipe'))}</button>
      </section>`);

    // vzhľad sa ukladá osobitne (číta ho už skript v hlavičke stránky, pred načítaním STORE)
    APP.el.querySelectorAll('input[name=theme]').forEach((inp) => inp.addEventListener('change', () => APP.setTheme(inp.value)));
    // jednoduché nastavenia: uloženie hneď pri zmene
    APP.el.querySelectorAll('.settings select[name], .settings input[name]:not([name=theme])').forEach((inp) => {
      inp.addEventListener('change', () => {
        const v = inp.type === 'checkbox' ? inp.checked : inp.type === 'range' ? Number(inp.value) : inp.value || null;
        STORE.setSetting(inp.name, v);
        APP.toast(`✓ ${esc(t('saved'))}`, 1500);
      });
    });
    const tryBtn = document.getElementById('tts-try');
    if (tryBtn) tryBtn.addEventListener('click', () => TTS.speak(t('ttsSample'), I18N.getLang()));

    document.getElementById('exp').addEventListener('click', () => download(STORE.exportAll()));
    document.getElementById('imp-file').addEventListener('change', (e) => {
      const f = e.target.files[0];
      if (!f) return;
      f.text().then((txt) => {
        let obj = null;
        try { obj = JSON.parse(txt); } catch (err) { obj = null; }
        if (obj) importObj(obj, document.getElementById('replace').checked ? 'replace' : 'merge');
        else APP.toast(`⚠️ ${esc(t('transferBad'))}`);
      });
    });
    document.getElementById('mk-code').addEventListener('click', async () => {
      const code = await packCode(STORE.exportAll());
      const url = `${location.href.split('#')[0]}#/prenos/${code}`;
      const out = document.getElementById('code-out');
      out.innerHTML = `<textarea readonly rows="3" class="result-code">${esc(code)}</textarea>
        <div class="actions"><button class="btn btn-small" type="button" id="cp-code">📋 ${esc(t('copyCode'))}</button></div>
        <p class="muted small">${esc(t('transferQrHint'))}</p><div class="qr" id="qr"></div>`;
      document.getElementById('cp-code').addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(code); APP.toast(`✓ ${esc(t('copied'))}`); } catch (err) { window.prompt(t('copyCode'), code); }
      });
      if (url.length < 2900) QR.render(document.getElementById('qr'), url);
      else document.getElementById('qr').innerHTML = `<p class="muted small">${esc(t('qrTooLong'))}</p>`;
    });
    document.getElementById('use-code').addEventListener('click', async () => {
      const raw = document.getElementById('code-in').value.trim().replace(/^.*#\/prenos\//, '');
      try { importObj(await unpackCode(raw), document.getElementById('replace').checked ? 'replace' : 'merge'); } catch (err) { APP.toast(`⚠️ ${esc(t('transferBad'))}`); }
    });
    document.getElementById('wipe').addEventListener('click', () => {
      if (!window.confirm(t('settingsWipeConfirm'))) return;
      Object.values(STORE.KEYS).forEach((k) => { try { localStorage.removeItem(k); } catch (err) { /* nič */ } });
      APP.toast(`✓ ${esc(t('settingsWiped'))}`);
      APP.refresh();
    });
  }

  // otvorenie odkazu z QR kódu / kódu na prenos
  async function incoming(code) {
    let obj = null;
    try { obj = await unpackCode(code); } catch (e) { obj = null; }
    if (!obj || obj.app !== 'matematika-krok-za-krokom') {
      APP.setPage(`<h1>🔄 ${esc(t('transferTitle'))}</h1><p class="feedback bad">${esc(t('transferBad'))}</p>`);
      return;
    }
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🔄 ${esc(t('transferTitle'))}</h1>
      <div class="block"><p>${esc(t('transferIncoming', { n: lessonCount(obj), d: (obj.exported || '').slice(0, 10) }))}</p>
        <div class="actions"><button class="btn btn-primary" type="button" id="merge">${esc(t('transferMerge'))}</button>
        <button class="btn" type="button" id="repl">${esc(t('transferReplaceBtn'))}</button>
        <a class="btn" href="#/">${esc(t('cancel'))}</a></div></div>`);
    document.getElementById('merge').addEventListener('click', () => { if (importObj(obj, 'merge')) location.hash = '#/'; });
    document.getElementById('repl').addEventListener('click', () => {
      if (window.confirm(t('transferReplaceConfirm')) && importObj(obj, 'replace')) location.hash = '#/';
    });
  }

  APP.route('nastavenia', page);
  APP.route('prenos', (p) => incoming(p.join('/')));
  APP.addMenu({ href: '#/nastavenia', icon: '⚙️', key: 'menuSettings' });
})();
