/* Matematická klávesnica na obrazovke (hlavne pre mobil): číslice, desatinná čiarka, mínus, zlomok,
   bodkočiarka na oddelenie viacerých čísel, mazanie a odoslanie. Systémová klávesnica sa pri nej
   potlačí cez inputmode="none". Viditeľnosť: nastavenie keypad = 'auto' (dotykové zariadenie) | 'on' | 'off'. */
(function () {
  'use strict';

  const KEYS = [
    ['7', '8', '9', '⌫'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '/'],
    ['0', ',', ';', '✓']
  ];
  const INSERT = { '−': '-' };

  const touch = () => !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  // má sa klávesnica ukázať? (podľa nastavenia)
  function wanted() {
    const v = window.STORE ? STORE.settings().keypad : 'auto';
    return v === 'on' || (v === 'auto' && touch());
  }

  function insert(input, text) {
    const s = input.selectionStart ?? input.value.length, e = input.selectionEnd ?? input.value.length;
    input.value = input.value.slice(0, s) + text + input.value.slice(e);
    const p = s + text.length;
    try { input.setSelectionRange(p, p); } catch (err) { /* niektoré typy polí výber nepodporujú */ }
  }
  function backspace(input) {
    const s = input.selectionStart ?? input.value.length, e = input.selectionEnd ?? input.value.length;
    if (s !== e) input.value = input.value.slice(0, s) + input.value.slice(e);
    else if (s > 0) input.value = input.value.slice(0, s - 1) + input.value.slice(s);
    const p = s !== e ? s : Math.max(0, s - 1);
    try { input.setSelectionRange(p, p); } catch (err) { /* bez výberu */ }
  }

  // container: kam vložiť klávesnicu; getInput(): aktuálne pole; onSubmit(): odoslanie (✓)
  function mount(container, getInput, onSubmit) {
    const t = I18N.t;
    container.classList.add('keypad');
    container.setAttribute('role', 'group');
    container.setAttribute('aria-label', t('keypadLabel'));
    container.innerHTML = KEYS.map((row) => row.map((k) => {
      const cls = k === '✓' ? ' key-ok' : k === '⌫' ? ' key-del' : '';
      const label = k === '⌫' ? t('keypadDelete') : k === '✓' ? t('check') : k === '−' ? t('keypadMinus') : k === '/' ? t('keypadFraction') : k === ';' ? t('keypadSeparator') : k;
      return `<button type="button" class="key${cls}" data-k="${k}" aria-label="${label}">${k}</button>`;
    }).join('')).join('');
    // pointerdown, aby pole nestratilo kurzor (a na mobile sa neotvorila systémová klávesnica)
    container.addEventListener('pointerdown', (e) => { if (e.target.closest('.key')) e.preventDefault(); });
    container.addEventListener('click', (e) => {
      const b = e.target.closest('.key');
      const input = getInput();
      if (!b || !input || input.disabled) return;
      const k = b.dataset.k;
      if (k === '✓') { onSubmit(); return; }
      if (k === '⌫') backspace(input);
      else insert(input, INSERT[k] || k);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }

  window.KEYPAD = { mount, wanted, touch };
})();
