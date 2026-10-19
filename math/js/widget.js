/* Riešenie úloh – spoločný komponent pre precvičovanie, opakovanie, dennú výzvu, vstupný test,
   testy (T9, maturita) a zadanie od učiteľa.

   PROBLEM.mount(root, opts)
     opts.next(i, results) → { id, ex } alebo null (koniec); i = poradie úlohy od 0
     opts.mode      'practice' (spätná väzba, nápoveda, riešenie, kroky) | 'exam' (bez spätnej väzby, výsledky na konci)
     opts.total     počet úloh (zobrazí „Úloha 3 z 10“), null = neobmedzene
     opts.timeLimit sekundy na celý test (len exam), null = bez limitu
     opts.showFrom  zobraziť, z ktorej lekcie úloha je (opakovanie, výzva, testy)
     opts.record    (r) => void – uloženie výsledku; predvolene STORE.record. r = { id, ex, input, correct, ms, viaSolution, steps }
     opts.onAnswer  (r) => void – po každej vyhodnotenej úlohe (napr. odporúčanie predpokladov)
     opts.onDone    (results) => void – po poslednej úlohe / uplynutí času / ukončení
   Vracia { finish() }.

   V režime 'practice':
   - Pri prvej nesprávnej odpovedi, ktorú vie diagnose() vysvetliť (typická chyba), sa ukáže vysvetlenie
     a žiak má ešte jeden pokus; do štatistiky sa počíta prvý pokus.
   - Úlohy so steps sa dajú riešiť po krokoch (prepínač si aplikácia pamätá). Po krokoch je úloha správna,
     ak žiak nespravil chybu a žiadny krok si nedal ukázať. */
(function () {
  'use strict';

  const t = (k, v) => I18N.t(k, v);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const htmlLang = (code) => (I18N.dict(code) ? I18N.info(code).htmlLang : code);

  function renderMath(el) {
    if (typeof renderMathInElement !== 'function') return;
    renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false
    });
  }

  // text diagnózy: konkrétna chyba z generátora (obsah) alebo všeobecná (preklad rozhrania)
  const diagText = (d) => (d.msg !== undefined ? d.msg : esc(t(d.key, d.vars || {})));

  function mount(root, opts) {
    const mode = opts.mode || 'practice';
    const exam = mode === 'exam';
    const results = [];
    let i = -1, cur = null, ex = null, lang = 'sk';
    let attempts = 0, recorded = false, finalized = false, done = false, shownAt = 0;
    let stepState = null; // { k, wrong, revealed }
    let timer = null, deadline = null, scratch = null;

    root.innerHTML = `
      <div class="practice card-box pw">
        <div class="pw-head">
          <span class="pw-count"></span>
          <span class="pw-score"></span>
          <span class="pw-timer" hidden></span>
          <span class="pw-tools"></span>
        </div>
        <div class="pw-from muted small" hidden></div>
        <div class="question" aria-live="polite"></div>
        <div class="pw-steps" hidden></div>
        <div class="choices" hidden></div>
        <form class="answer-row" autocomplete="off">
          <input class="pw-input" type="text" inputmode="decimal" aria-label="${esc(t('yourAnswer'))}">
          <button class="btn btn-primary pw-submit" type="submit">${esc(exam ? t('examSave') : t('check'))}</button>
        </form>
        <div class="pw-keypad" hidden></div>
        <div class="feedback" aria-live="polite"></div>
        <div class="actions">
          ${exam ? `<button class="btn pw-skip" type="button">${esc(t('examSkip'))}</button>
                    <button class="btn pw-finish" type="button">${esc(t('examFinish'))}</button>`
                 : `<button class="btn pw-hint" type="button">${esc(t('hint'))}</button>
                    <button class="btn pw-stepbtn" type="button" hidden>🪜 ${esc(t('stepMode'))}</button>
                    <button class="btn pw-show" type="button">${esc(t('showSolution'))}</button>
                    <button class="btn btn-primary pw-next" type="button" hidden>${esc(t('next'))}</button>`}
        </div>
        <div class="solution" hidden></div>
        <div class="pw-scratch" hidden></div>
        <p class="muted small pw-tip">${esc(t('inputTip'))}</p>
      </div>`;

    const $ = (s) => root.querySelector(s);
    const el = {
      count: $('.pw-count'), score: $('.pw-score'), timer: $('.pw-timer'), tools: $('.pw-tools'), from: $('.pw-from'),
      q: $('.question'), steps: $('.pw-steps'), choices: $('.choices'), form: $('.answer-row'), input: $('.pw-input'),
      submit: $('.pw-submit'), keypad: $('.pw-keypad'), fb: $('.feedback'), sol: $('.solution'), scratch: $('.pw-scratch'),
      tip: $('.pw-tip'), hint: $('.pw-hint'), stepBtn: $('.pw-stepbtn'), show: $('.pw-show'), next: $('.pw-next'),
      skip: $('.pw-skip'), finishBtn: $('.pw-finish')
    };
    let activeInput = el.input; // pole, do ktorého píše klávesnica (hlavné alebo pole kroku)

    /* ---------- nástroje: čítanie nahlas, zošit, klávesnica ---------- */
    const tts = window.TTS && TTS.button(() => (stepState ? el.steps.querySelector('.step-current') || el.q : el.q), () => lang);
    if (tts) el.tools.appendChild(tts);
    const tool = (icon, label, onClick) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'btn btn-small';
      b.textContent = icon;
      b.title = label;
      b.setAttribute('aria-label', label);
      b.addEventListener('click', () => onClick(b));
      el.tools.appendChild(b);
      return b;
    };
    const scratchBtn = tool('✏️', t('scratchLabel'), (b) => {
      el.scratch.hidden = !el.scratch.hidden;
      b.classList.toggle('active', !el.scratch.hidden);
      b.setAttribute('aria-pressed', String(!el.scratch.hidden));
      if (!el.scratch.hidden) {
        if (!scratch) scratch = SCRATCH.mount(el.scratch);
        else scratch.resize();
      }
    });
    scratchBtn.setAttribute('aria-pressed', 'false');
    let keypadOn = window.KEYPAD ? KEYPAD.wanted() : false;
    const keypadBtn = tool('⌨️', t('keypadToggle'), () => {
      keypadOn = !keypadOn;
      if (window.STORE) STORE.setSetting('keypad', keypadOn ? 'on' : 'off');
      syncKeypad();
    });
    if (window.KEYPAD) KEYPAD.mount(el.keypad, () => activeInput, () => {
      const f = activeInput.closest('form');
      if (f) f.requestSubmit();
    });
    function syncKeypad() {
      const numeric = ex && !(stepState ? stepType() === 'text' || stepType() === 'choice' : ex.type === 'text' || ex.type === 'choice');
      const show = keypadOn && numeric && !!window.KEYPAD;
      el.keypad.hidden = !show;
      keypadBtn.hidden = !numeric || !window.KEYPAD;
      keypadBtn.classList.toggle('active', show);
      keypadBtn.setAttribute('aria-pressed', String(show));
      root.querySelectorAll('.pw-input, .step-input').forEach((inp) => {
        inp.inputMode = show ? 'none' : (inp.dataset.mode || 'decimal');
      });
    }

    /* ---------- časový limit (testy) ---------- */
    if (exam && opts.timeLimit) {
      deadline = Date.now() + opts.timeLimit * 1000;
      el.timer.hidden = false;
      const tick = () => {
        const left = Math.max(0, Math.round((deadline - Date.now()) / 1000));
        el.timer.textContent = `⏱ ${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
        el.timer.classList.toggle('low', left <= 60);
        if (!left) finish();
      };
      tick();
      timer = setInterval(tick, 1000);
    }

    function updateHead() {
      el.count.textContent = opts.total ? t('taskOf', { k: Math.min(i + 1, opts.total), n: opts.total }) : '';
      if (!exam) {
        const right = results.filter((r) => r.correct).length;
        el.score.textContent = `${t('sessionScore')} ${right} / ${results.length}`;
      }
    }

    function record(correct, viaSolution, input) {
      if (recorded) return;
      recorded = true;
      const r = { id: cur.id, ex, input, correct, viaSolution: !!viaSolution, ms: Date.now() - shownAt, steps: !!stepState };
      results.push(r);
      if (opts.record) opts.record(r);
      else if (window.STORE) STORE.record(r.id, r.correct, { mode, ms: r.ms, steps: r.steps });
      if (opts.onAnswer) opts.onAnswer(r);
      updateHead();
    }

    /* ---------- nová úloha ---------- */
    function load() {
      i += 1;
      cur = opts.next(i, results);
      if (!cur) { finish(); return; }
      ex = cur.ex;
      lang = htmlLang(ex.lang || 'sk');
      attempts = 0;
      recorded = false;
      finalized = false;
      stepState = null;
      shownAt = Date.now();
      if (window.TTS) TTS.stop();
      el.q.setAttribute('lang', lang);
      el.choices.setAttribute('lang', lang);
      el.q.innerHTML = `<div class="q-text">${ex.q}</div>`;
      if (opts.showFrom && window.APP) {
        const L = APP.lessonById(cur.id);
        el.from.hidden = !L;
        if (L) el.from.innerHTML = `${esc(t('fromLesson'))} <a href="#/lekcia/${L.id}">${APP.lessonTitle(L)}</a>`;
      }
      el.fb.textContent = '';
      el.fb.className = 'feedback';
      el.sol.hidden = true;
      el.sol.innerHTML = '';
      el.steps.hidden = true;
      el.steps.innerHTML = '';
      if (el.next) el.next.hidden = true;
      if (el.show) el.show.disabled = false;
      if (el.hint) el.hint.disabled = false;
      if (scratch) scratch.clear();
      if (el.stepBtn) {
        el.stepBtn.hidden = !(Array.isArray(ex.steps) && ex.steps.length);
        el.stepBtn.disabled = false;
      }
      showAnswerArea(ex, el.input, el.choices, el.form);
      el.tip.hidden = ex.type === 'choice' || ex.type === 'text';
      renderMath(el.q);
      updateHead();
      if (exam && opts.total && i === opts.total - 1) el.submit.textContent = t('examSaveLast');
      // po krokoch, ak to má žiak zapnuté
      if (!exam && el.stepBtn && !el.stepBtn.hidden && window.STORE && STORE.settings().stepMode) startSteps();
      else syncKeypad();
      if (ex.type !== 'choice' && !stepState) focusSoft(el.input);
    }

    // na mobile s klávesnicou na obrazovke nechceme systémovú klávesnicu, inak fokus do poľa
    function focusSoft(inp) {
      activeInput = inp;
      if (!keypadOn) inp.focus({ preventScroll: true });
    }

    // pole alebo možnosti pre úlohu / krok
    function showAnswerArea(task, input, choicesEl, form) {
      const isChoice = task.type === 'choice';
      form.hidden = isChoice;
      choicesEl.hidden = !isChoice;
      choicesEl.innerHTML = '';
      if (isChoice) {
        choicesEl.innerHTML = task.options.map((o, k) =>
          `<button type="button" class="btn choice" data-k="${k}">${o}</button>`).join('');
        renderMath(choicesEl);
      } else {
        input.dataset.mode = (task.type === 'num' && !task.signed) ? 'decimal' : 'text';
        input.inputMode = input.dataset.mode;
        input.placeholder = task.placeholder || t('yourAnswer');
        input.value = '';
        input.disabled = false;
      }
    }

    /* ---------- vyhodnotenie celej úlohy ---------- */
    function evaluate(input, chosenBtn) {
      if (done || finalized) return;
      if (exam) {
        const res = input === '' ? false : EXERCISES.check(ex, input);
        if (res === null) { warn(); return; }
        record(res === true, false, input);
        load();
        return;
      }
      const res = EXERCISES.check(ex, input);
      if (res === null) { warn(); return; }
      attempts += 1;
      if (res) {
        if (attempts === 1) record(true, false, input);
        el.fb.className = 'feedback ok';
        el.fb.textContent = attempts === 1 ? t('correct') : t('correctSecond');
        reveal();
        return;
      }
      if (attempts === 1) record(false, false, input);
      const d = attempts === 1 ? EXERCISES.diagnose(ex, input) : null;
      if (chosenBtn) chosenBtn.classList.add('wrong');
      if (d) {
        // typická chyba: vysvetlenie a ešte jeden pokus
        el.fb.className = 'feedback bad';
        el.fb.innerHTML = `${esc(t('wrong'))} <span class="diag" lang="${d.msg !== undefined ? lang : ''}">${diagText(d)}</span> <em>${esc(t('tryAgain'))}</em>`;
        renderMath(el.fb);
        if (chosenBtn) chosenBtn.disabled = true;
        else { el.input.select(); }
        return;
      }
      el.fb.className = 'feedback bad';
      el.fb.textContent = t('wrong');
      reveal();
    }

    function warn() {
      el.fb.className = 'feedback warn';
      el.fb.textContent = (stepState ? stepType() : ex.type) === 'text' ? t('enterText') : t('enterNumber');
    }

    function reveal() {
      finalized = true;
      el.sol.hidden = false;
      el.sol.innerHTML = `<p><strong>${esc(t('correctAnswer'))}</strong> <span lang="${lang}">${EXERCISES.formatAnswer(ex)}</span></p><p lang="${lang}">${ex.solution}</p>`;
      renderMath(el.sol);
      if (el.next) {
        el.next.hidden = false;
        el.next.textContent = opts.total && i >= opts.total - 1 ? t('finishSet') : t('next');
      }
      if (el.show) el.show.disabled = true;
      if (el.hint) el.hint.disabled = true;
      if (el.stepBtn) el.stepBtn.disabled = true;
      el.input.disabled = true;
      el.choices.querySelectorAll('.choice').forEach((b) => {
        b.disabled = true;
        if (ex.options[b.dataset.k] === String(ex.answer)) b.classList.add('correct');
      });
      el.keypad.hidden = true;
      if (el.next) el.next.focus({ preventScroll: true });
    }

    /* ---------- riešenie po krokoch ---------- */
    const stepTask = () => EXERCISES.stepEx(ex, ex.steps[stepState.k]);
    const stepType = () => (stepState ? stepTask().type : ex.type);

    function startSteps() {
      if (recorded || !ex.steps) return;
      stepState = { k: 0, wrong: 0, revealed: 0, tries: 0 };
      el.form.hidden = true;
      el.choices.hidden = true;
      el.steps.hidden = false;
      el.tip.hidden = true;
      if (el.stepBtn) el.stepBtn.disabled = true;
      if (el.hint) el.hint.disabled = true;
      el.steps.innerHTML = `<div class="steps-title">🪜 ${esc(t('stepsTitle', { n: ex.steps.length }))}</div><ol class="step-list" lang="${lang}"></ol>`;
      renderStep();
    }

    function renderStep() {
      const list = el.steps.querySelector('.step-list');
      const s = stepTask();
      const li = document.createElement('li');
      li.className = 'step-current';
      li.innerHTML = `<div class="step-q">${s.q}</div>
        <div class="choices step-choices" hidden></div>
        <form class="answer-row step-form" autocomplete="off">
          <input class="step-input" type="text" aria-label="${esc(t('yourAnswer'))}">
          <button class="btn btn-primary" type="submit">${esc(t('check'))}</button>
        </form>
        <div class="step-fb feedback" aria-live="polite"></div>
        <div class="actions step-actions">
          ${s.hint ? `<button class="btn btn-small step-hint" type="button">${esc(t('hint'))}</button>` : ''}
          <button class="btn btn-small step-show" type="button">${esc(t('stepShow'))}</button>
        </div>`;
      list.appendChild(li);
      const input = li.querySelector('.step-input'), form = li.querySelector('.step-form'), choices = li.querySelector('.step-choices');
      showAnswerArea(s, input, choices, form);
      renderMath(li);
      stepState.tries = 0;
      form.addEventListener('submit', (e) => { e.preventDefault(); stepAnswer(input.value); });
      choices.addEventListener('click', (e) => {
        const b = e.target.closest('.choice');
        if (b && !b.disabled) stepAnswer(s.options[b.dataset.k], b);
      });
      const hb = li.querySelector('.step-hint');
      if (hb) hb.addEventListener('click', () => {
        const fb = li.querySelector('.step-fb');
        fb.className = 'step-fb feedback';
        fb.innerHTML = `${esc(t('hintPrefix'))} <span>${s.hint}</span>`;
        renderMath(fb);
      });
      li.querySelector('.step-show').addEventListener('click', () => { stepState.revealed += 1; completeStep(true); });
      syncKeypad();
      if (s.type !== 'choice') focusSoft(input);
    }

    function stepAnswer(input, btn) {
      const s = stepTask();
      const li = el.steps.querySelector('.step-current');
      const fb = li.querySelector('.step-fb');
      const res = EXERCISES.check(s, input);
      if (res === null) { fb.className = 'step-fb feedback warn'; fb.textContent = s.type === 'text' ? t('enterText') : t('enterNumber'); return; }
      if (res) { completeStep(false); return; }
      stepState.wrong += 1;
      stepState.tries += 1;
      if (btn) { btn.classList.add('wrong'); btn.disabled = true; }
      const d = EXERCISES.diagnose(s, input);
      fb.className = 'step-fb feedback bad';
      fb.innerHTML = `${esc(t('wrong'))} ${d ? `<span class="diag">${diagText(d)}</span>` : ''} <em>${esc(t('tryAgain'))}</em>`;
      renderMath(fb);
      // po dvoch neúspešných pokusoch ponúkneme ukázať krok výraznejšie
      if (stepState.tries >= 2) li.querySelector('.step-show').classList.add('btn-primary');
    }

    function completeStep(shown) {
      const s = stepTask();
      const li = el.steps.querySelector('.step-current');
      li.className = shown ? 'step-done shown' : 'step-done';
      li.innerHTML = `<div class="step-q">${s.q}</div><div class="step-ans">${shown ? '👁' : '✓'} <strong>${EXERCISES.formatAnswer(s)}</strong></div>`;
      renderMath(li);
      stepState.k += 1;
      if (stepState.k < ex.steps.length) { renderStep(); return; }
      // všetky kroky hotové
      const correct = !stepState.wrong && !stepState.revealed;
      record(correct, stepState.revealed > 0, '');
      el.fb.className = 'feedback ' + (correct ? 'ok' : 'warn');
      el.fb.textContent = correct ? t('stepsPerfect') : t('stepsDone', { w: stepState.wrong, r: stepState.revealed });
      reveal();
    }

    /* ---------- tlačidlá ---------- */
    el.form.addEventListener('submit', (e) => { e.preventDefault(); evaluate(el.input.value); });
    el.choices.addEventListener('click', (e) => {
      const b = e.target.closest('.choice');
      if (b && !b.disabled) evaluate(ex.options[b.dataset.k], b);
    });
    if (el.hint) el.hint.addEventListener('click', () => {
      if (finalized) return;
      el.fb.className = 'feedback';
      el.fb.innerHTML = `${esc(t('hintPrefix'))} <span lang="${lang}">${ex.hint}</span>`;
      renderMath(el.fb);
    });
    if (el.show) el.show.addEventListener('click', () => {
      if (!recorded) record(false, true, '');
      el.fb.className = 'feedback';
      el.fb.textContent = t('seeSolution');
      reveal();
    });
    if (el.stepBtn) el.stepBtn.addEventListener('click', () => {
      if (window.STORE) STORE.setSetting('stepMode', true);
      startSteps();
    });
    if (el.next) el.next.addEventListener('click', load);
    if (el.skip) el.skip.addEventListener('click', () => { record(false, false, ''); load(); });
    if (el.finishBtn) el.finishBtn.addEventListener('click', () => {
      if (window.confirm(t('examFinishConfirm'))) finish();
    });
    el.input.addEventListener('focus', () => { activeInput = el.input; });
    root.addEventListener('focusin', (e) => { if (e.target.classList && e.target.classList.contains('step-input')) activeInput = e.target; });

    function finish() {
      if (done) return;
      done = true;
      if (timer) clearInterval(timer);
      if (window.TTS) TTS.stop();
      // v teste sa nevyriešené úlohy počítajú ako nesprávne
      if (exam && opts.total) {
        while (results.length < opts.total) {
          if (!cur || recorded) { i += 1; cur = opts.next(i, results); if (!cur) break; ex = cur.ex; recorded = false; }
          record(false, false, '');
        }
      }
      if (opts.onDone) opts.onDone(results);
    }

    load();
    return { finish, results };
  }

  window.PROBLEM = { mount };
})();
