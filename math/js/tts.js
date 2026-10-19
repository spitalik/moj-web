/* Čítanie nahlas (Web Speech API). Vzorce sa čítajú slovami: z KaTeXu sa vezme pôvodný TeX
   (<annotation encoding="application/x-tex">) a prevedie sa na vetu („a lomeno b“, „x na druhú“).
   Hlas sa vyberá podľa jazyka obsahu; ak zariadenie nemá hlas daného jazyka, použije sa predvolený. */
(function () {
  'use strict';

  const supported = () => 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

  // slová pre vzorce podľa jazyka (ostatné jazyky: angličtina)
  const WORDS = {
    sk: {
      frac: (a, b) => `${a} lomeno ${b}`, sqrt: (x) => `odmocnina z ${x}`, root: (n, x) => `${n}. odmocnina z ${x}`,
      sq: 'na druhú', cube: 'na tretiu', pow: (e) => `na ${e}`, sub: (x) => ` ${x}`,
      '+': 'plus', '-': 'mínus', '=': 'sa rovná', '<': 'je menšie ako', '>': 'je väčšie ako', times: 'krát', div: 'deleno',
      le: 'je menšie alebo rovné', ge: 'je väčšie alebo rovné', ne: 'sa nerovná', approx: 'približne', pm: 'plus mínus',
      pi: 'pí', infty: 'nekonečno', deg: 'stupňov', percent: 'percent', box: 'prázdne políčko', dots: 'a tak ďalej',
      sin: 'sínus', cos: 'kosínus', tg: 'tangens', cotg: 'kotangens', log: 'logaritmus', ln: 'prirodzený logaritmus',
      lim: 'limita', int: 'integrál', sum: 'suma', from: 'od', upto: 'po', to: 'ide k', in: 'patrí do', cup: 'zjednotenie', cap: 'prienik',
      alpha: 'alfa', beta: 'beta', gamma: 'gama', delta: 'delta', lambda: 'lambda', mu: 'mí', sigma: 'sigma', varphi: 'fí'
    },
    en: {
      frac: (a, b) => `${a} over ${b}`, sqrt: (x) => `square root of ${x}`, root: (n, x) => `root ${n} of ${x}`,
      sq: 'squared', cube: 'cubed', pow: (e) => `to the power ${e}`, sub: (x) => ` ${x}`,
      '+': 'plus', '-': 'minus', '=': 'equals', '<': 'is less than', '>': 'is greater than', times: 'times', div: 'divided by',
      le: 'is less than or equal to', ge: 'is greater than or equal to', ne: 'is not equal to', approx: 'approximately', pm: 'plus or minus',
      pi: 'pi', infty: 'infinity', deg: 'degrees', percent: 'percent', box: 'blank', dots: 'and so on',
      sin: 'sine', cos: 'cosine', tg: 'tangent', cotg: 'cotangent', log: 'log', ln: 'natural log',
      lim: 'limit', int: 'integral', sum: 'sum', from: 'from', upto: 'to', to: 'tends to', in: 'in', cup: 'union', cap: 'intersection',
      alpha: 'alpha', beta: 'beta', gamma: 'gamma', delta: 'delta', lambda: 'lambda', mu: 'mu', sigma: 'sigma', varphi: 'phi'
    }
  };

  // obsah zložených zátvoriek od pozície i (s vnorením)
  function group(s, i) {
    if (s[i] !== '{') { const m = s.slice(i).match(/^\\[a-zA-Z]+|^./); return [m ? m[0] : '', i + (m ? m[0].length : 0)]; }
    let d = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] === '{') d++;
      else if (s[j] === '}') { d--; if (!d) return [s.slice(i + 1, j), j + 1]; }
    }
    return [s.slice(i + 1), s.length];
  }

  // TeX → hovorená veta
  function speakTex(tex, lang) {
    const W = WORDS[lang] || WORDS.en;
    let s = tex;
    // štruktúry s argumentmi (opakovane, kvôli vnoreniu)
    // vonkajší zlomok/odmocnina sa nahradí prvý, vnorené prídu na rad v ďalšom kole
    for (let guard = 0; guard < 30; guard++) {
      const mf = /\\[dt]?frac\s*/.exec(s);
      if (mf) {
        const [a, i1] = group(s, mf.index + mf[0].length), [b, i2] = group(s, i1);
        s = s.slice(0, mf.index) + ` ${W.frac(a, b)} ` + s.slice(i2);
        continue;
      }
      const k = s.indexOf('\\sqrt');
      if (k < 0) break;
      let i = k + 5, n = null;
      if (s[i] === '[') { const e = s.indexOf(']', i); n = s.slice(i + 1, e); i = e + 1; }
      const [x, i2] = group(s, i);
      s = s.slice(0, k) + ` ${n ? W.root(n, x) : W.sqrt(x)} ` + s.slice(i2);
    }
    // hranice integrálu a sumy: „integrál od a po b“
    const bound = (x) => x.replace(/^\{|\}$/g, '');
    s = s.replace(/\\(int|sum)\s*_\s*(\{[^{}]*\}|\S)\s*\^\s*(\{[^{}]*\}|\S)/g,
      (m, op, a, b) => ` ${W[op]} ${W.from} ${bound(a)} ${W.upto} ${bound(b)} `);
    // mocniny a indexy
    s = s.replace(/\^\s*\{?\\circ\}?/g, ` ${W.deg} `)
      .replace(/\^\s*(\{2\}|2)/g, ` ${W.sq} `).replace(/\^\s*(\{3\}|3)/g, ` ${W.cube} `)
      .replace(/\^\s*\{([^{}]*)\}/g, (m, e) => ` ${W.pow(e)} `).replace(/\^\s*(\S)/g, (m, e) => ` ${W.pow(e)} `)
      .replace(/_\s*\{([^{}]*)\}/g, (m, x) => W.sub(x)).replace(/_\s*(\S)/g, (m, x) => W.sub(x));
    const cmd = {
      cdot: W.times, times: W.times, div: W.div, le: W.le, leq: W.le, ge: W.ge, geq: W.ge, neq: W.ne, ne: W.ne,
      approx: W.approx, doteq: W.approx, pm: W.pm, pi: W.pi, infty: W.infty, square: W.box, dots: W.dots, ldots: W.dots, cdots: W.dots,
      sin: W.sin, cos: W.cos, tan: W.tg, tg: W.tg, cotg: W.cotg, cot: W.cotg, log: W.log, ln: W.ln, lim: W.lim, int: W.int, sum: W.sum,
      to: W.to, rightarrow: W.to, in: W.in, cup: W.cup, cap: W.cap, lt: W['<'], gt: W['>'], circ: W.deg,
      alpha: W.alpha, beta: W.beta, gamma: W.gamma, delta: W.delta, lambda: W.lambda, mu: W.mu, sigma: W.sigma, varphi: W.varphi, phi: W.varphi
    };
    s = s.replace(/\\mathrm\{([^{}]*)\}/g, (m, x) => (cmd[x] ? ` ${cmd[x]} ` : ` ${x} `))
      .replace(/\\text\{([^{}]*)\}/g, ' $1 ')
      .replace(/\\%/g, ` ${W.percent} `)
      .replace(/\\([a-zA-Z]+)/g, (m, c) => (cmd[c] ? ` ${cmd[c]} ` : ' '))
      .replace(/\{,\}/g, ',')
      .replace(/(\d),(\d)/g, '$1,$2')
      .replace(/\\[,;:! ]/g, ' ')
      .replace(/[{}]/g, ' ')
      .replace(/\s*\+\s*/g, ` ${W['+']} `)
      .replace(/\s*-\s*/g, ` ${W['-']} `)
      .replace(/\s*=\s*/g, ` ${W['=']} `)
      .replace(/\s*<\s*/g, ` ${W['<']} `)
      .replace(/\s*>\s*/g, ` ${W['>']} `)
      .replace(/\s*:\s*/g, ` ${W.div} `)
      .replace(/&/g, ' ');
    return s.replace(/\s+/g, ' ').trim();
  }

  // text prvku na čítanie: vzorce slovami, obrázky podľa aria-label, skryté časti vynechať
  function textOf(el, lang) {
    const clone = el.cloneNode(true);
    clone.querySelectorAll('.katex').forEach((k) => {
      const ann = k.querySelector('annotation');
      k.replaceWith(document.createTextNode(` ${ann ? speakTex(ann.textContent, lang) : k.textContent} `));
    });
    clone.querySelectorAll('svg').forEach((svg) => svg.replaceWith(document.createTextNode(` ${svg.getAttribute('aria-label') || ''} `)));
    clone.querySelectorAll('[hidden], button, .scratch, .keypad').forEach((x) => x.remove());
    return clone.textContent.replace(/\s+/g, ' ').trim();
  }

  function voiceFor(lang) {
    const vs = speechSynthesis.getVoices();
    return vs.find((v) => v.lang.toLowerCase().startsWith(lang)) || null;
  }
  const hasVoice = (lang) => supported() && !!voiceFor(lang);

  let current = null;
  function stop() {
    if (supported()) speechSynthesis.cancel();
    if (current && current.onEnd) current.onEnd();
    current = null;
  }
  // prečíta text (alebo prvok); lang = kód jazyka obsahu ('sk', 'en'…); onEnd po dočítaní alebo zastavení
  function speak(source, lang, onEnd) {
    if (!supported()) return false;
    stop();
    const text = typeof source === 'string' ? source : textOf(source, lang);
    if (!text) return false;
    const u = new SpeechSynthesisUtterance(text);
    const v = voiceFor(lang);
    if (v) u.voice = v;
    u.lang = v ? v.lang : lang;
    u.rate = window.STORE ? Number(STORE.settings().ttsRate) || 1 : 1;
    current = { u, onEnd };
    u.onend = u.onerror = () => { if (current && current.u === u) { current = null; if (onEnd) onEnd(); } };
    speechSynthesis.speak(u);
    return true;
  }
  const speaking = () => !!current;

  // tlačidlo 🔊, ktoré číta prvok getEl() v jazyku lang (druhé stlačenie zastaví)
  function button(getEl, lang) {
    if (!supported()) return null;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn btn-small tts-btn';
    const idle = () => { b.textContent = '🔊'; b.setAttribute('aria-label', I18N.t('readAloud')); b.title = I18N.t('readAloud'); b.classList.remove('active'); };
    idle();
    b.addEventListener('click', () => {
      if (b.classList.contains('active')) { stop(); return; }
      if (speak(getEl(), typeof lang === 'function' ? lang() : lang, idle)) {
        b.textContent = '⏹';
        b.setAttribute('aria-label', I18N.t('readStop'));
        b.classList.add('active');
      }
    });
    return b;
  }

  // hlasy sa v Chrome načítavajú asynchrónne
  if (supported()) speechSynthesis.getVoices();
  window.addEventListener('hashchange', stop);

  window.TTS = { supported, speak, stop, speaking, button, speakTex, textOf, hasVoice };
})();
