/* Čítanie nahlas (Web Speech API). Vzorce sa čítajú slovami: z KaTeXu sa vezme pôvodný TeX
   (<annotation encoding="application/x-tex">) a prevedie sa na vetu („a lomeno b“, „x na druhú“).
   Hlas sa vyberá podľa jazyka obsahu; ak zariadenie nemá hlas daného jazyka, použije sa predvolený. */
(function () {
  'use strict';

  const supported = () => 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

  // slová pre vzorce podľa jazyka obsahu (všetkých 12 jazykov rozhrania; neznámy jazyk: angličtina)
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
    },
    es: {
      frac: (a, b) => `${a} entre ${b}`, sqrt: (x) => `raíz cuadrada de ${x}`, root: (n, x) => `raíz ${n} de ${x}`,
      sq: 'al cuadrado', cube: 'al cubo', pow: (e) => `elevado a ${e}`, sub: (x) => ` ${x}`,
      '+': 'más', '-': 'menos', '=': 'igual a', '<': 'es menor que', '>': 'es mayor que', times: 'por', div: 'entre',
      le: 'es menor o igual que', ge: 'es mayor o igual que', ne: 'es distinto de', approx: 'aproximadamente', pm: 'más menos',
      pi: 'pi', infty: 'infinito', deg: 'grados', percent: 'por ciento', box: 'casilla vacía', dots: 'etcétera',
      sin: 'seno', cos: 'coseno', tg: 'tangente', cotg: 'cotangente', log: 'logaritmo', ln: 'logaritmo natural',
      lim: 'límite', int: 'integral', sum: 'suma', from: 'de', upto: 'a', to: 'tiende a', in: 'pertenece a', cup: 'unión', cap: 'intersección',
      alpha: 'alfa', beta: 'beta', gamma: 'gamma', delta: 'delta', lambda: 'lambda', mu: 'mu', sigma: 'sigma', varphi: 'fi'
    },
    pt: {
      frac: (a, b) => `${a} sobre ${b}`, sqrt: (x) => `raiz quadrada de ${x}`, root: (n, x) => `raiz ${n} de ${x}`,
      sq: 'ao quadrado', cube: 'ao cubo', pow: (e) => `elevado a ${e}`, sub: (x) => ` ${x}`,
      '+': 'mais', '-': 'menos', '=': 'é igual a', '<': 'é menor que', '>': 'é maior que', times: 'vezes', div: 'dividido por',
      le: 'é menor ou igual a', ge: 'é maior ou igual a', ne: 'é diferente de', approx: 'aproximadamente', pm: 'mais ou menos',
      pi: 'pi', infty: 'infinito', deg: 'graus', percent: 'por cento', box: 'quadradinho vazio', dots: 'e assim por diante',
      sin: 'seno', cos: 'cosseno', tg: 'tangente', cotg: 'cotangente', log: 'logaritmo', ln: 'logaritmo natural',
      lim: 'limite', int: 'integral', sum: 'somatório', from: 'de', upto: 'a', to: 'tende a', in: 'pertence a', cup: 'união', cap: 'interseção',
      alpha: 'alfa', beta: 'beta', gamma: 'gama', delta: 'delta', lambda: 'lambda', mu: 'mi', sigma: 'sigma', varphi: 'fi'
    },
    de: {
      frac: (a, b) => `${a} durch ${b}`, sqrt: (x) => `Wurzel aus ${x}`, root: (n, x) => `${n}-te Wurzel aus ${x}`,
      sq: 'hoch zwei', cube: 'hoch drei', pow: (e) => `hoch ${e}`, sub: (x) => ` ${x}`,
      '+': 'plus', '-': 'minus', '=': 'gleich', '<': 'ist kleiner als', '>': 'ist größer als', times: 'mal', div: 'geteilt durch',
      le: 'ist kleiner oder gleich', ge: 'ist größer oder gleich', ne: 'ist ungleich', approx: 'ungefähr', pm: 'plus minus',
      pi: 'Pi', infty: 'unendlich', deg: 'Grad', percent: 'Prozent', box: 'leeres Kästchen', dots: 'und so weiter',
      sin: 'Sinus', cos: 'Kosinus', tg: 'Tangens', cotg: 'Kotangens', log: 'Logarithmus', ln: 'natürlicher Logarithmus',
      lim: 'Limes', int: 'Integral', sum: 'Summe', from: 'von', upto: 'bis', to: 'gegen', in: 'Element von', cup: 'vereinigt mit', cap: 'geschnitten mit',
      alpha: 'Alpha', beta: 'Beta', gamma: 'Gamma', delta: 'Delta', lambda: 'Lambda', mu: 'My', sigma: 'Sigma', varphi: 'Phi'
    },
    fr: {
      frac: (a, b) => `${a} sur ${b}`, sqrt: (x) => `racine carrée de ${x}`, root: (n, x) => `racine ${n}-ième de ${x}`,
      sq: 'au carré', cube: 'au cube', pow: (e) => `puissance ${e}`, sub: (x) => ` ${x}`,
      '+': 'plus', '-': 'moins', '=': 'égale', '<': 'est inférieur à', '>': 'est supérieur à', times: 'fois', div: 'divisé par',
      le: 'est inférieur ou égal à', ge: 'est supérieur ou égal à', ne: 'est différent de', approx: 'environ', pm: 'plus ou moins',
      pi: 'pi', infty: 'l’infini', deg: 'degrés', percent: 'pour cent', box: 'case vide', dots: 'et ainsi de suite',
      sin: 'sinus', cos: 'cosinus', tg: 'tangente', cotg: 'cotangente', log: 'logarithme', ln: 'logarithme népérien',
      lim: 'limite', int: 'intégrale', sum: 'somme', from: 'de', upto: 'à', to: 'tend vers', in: 'appartient à', cup: 'union', cap: 'inter',
      alpha: 'alpha', beta: 'bêta', gamma: 'gamma', delta: 'delta', lambda: 'lambda', mu: 'mu', sigma: 'sigma', varphi: 'phi'
    },
    it: {
      frac: (a, b) => `${a} fratto ${b}`, sqrt: (x) => `radice quadrata di ${x}`, root: (n, x) => `radice ${n}-esima di ${x}`,
      sq: 'al quadrato', cube: 'al cubo', pow: (e) => `elevato a ${e}`, sub: (x) => ` ${x}`,
      '+': 'più', '-': 'meno', '=': 'uguale', '<': 'è minore di', '>': 'è maggiore di', times: 'per', div: 'diviso',
      le: 'è minore o uguale a', ge: 'è maggiore o uguale a', ne: 'è diverso da', approx: 'circa', pm: 'più o meno',
      pi: 'pi greco', infty: 'infinito', deg: 'gradi', percent: 'per cento', box: 'casella vuota', dots: 'e così via',
      sin: 'seno', cos: 'coseno', tg: 'tangente', cotg: 'cotangente', log: 'logaritmo', ln: 'logaritmo naturale',
      lim: 'limite', int: 'integrale', sum: 'sommatoria', from: 'da', upto: 'a', to: 'tende a', in: 'appartiene a', cup: 'unione', cap: 'intersezione',
      alpha: 'alfa', beta: 'beta', gamma: 'gamma', delta: 'delta', lambda: 'lambda', mu: 'mu', sigma: 'sigma', varphi: 'fi'
    },
    ru: {
      frac: (a, b) => `${a} делить на ${b}`, sqrt: (x) => `квадратный корень из ${x}`, root: (n, x) => `корень степени ${n} из ${x}`,
      sq: 'в квадрате', cube: 'в кубе', pow: (e) => `в степени ${e}`, sub: (x) => ` ${x}`,
      '+': 'плюс', '-': 'минус', '=': 'равно', '<': 'меньше', '>': 'больше', times: 'умножить на', div: 'делить на',
      le: 'меньше или равно', ge: 'больше или равно', ne: 'не равно', approx: 'приблизительно', pm: 'плюс минус',
      pi: 'пи', infty: 'бесконечность', deg: 'градусов', percent: 'процентов', box: 'пустая клетка', dots: 'и так далее',
      sin: 'синус', cos: 'косинус', tg: 'тангенс', cotg: 'котангенс', log: 'логарифм', ln: 'натуральный логарифм',
      lim: 'предел', int: 'интеграл', sum: 'сумма', from: 'от', upto: 'до', to: 'стремится к', in: 'принадлежит', cup: 'объединение', cap: 'пересечение',
      alpha: 'альфа', beta: 'бета', gamma: 'гамма', delta: 'дельта', lambda: 'лямбда', mu: 'мю', sigma: 'сигма', varphi: 'фи'
    },
    tr: {
      frac: (a, b) => `${a} bölü ${b}`, sqrt: (x) => `karekök ${x}`, root: (n, x) => `${n}. dereceden kök ${x}`,
      sq: 'kare', cube: 'küp', pow: (e) => `üssü ${e}`, sub: (x) => ` ${x}`,
      '+': 'artı', '-': 'eksi', '=': 'eşittir', '<': 'küçüktür', '>': 'büyüktür', times: 'çarpı', div: 'bölü',
      le: 'küçük eşittir', ge: 'büyük eşittir', ne: 'eşit değildir', approx: 'yaklaşık', pm: 'artı eksi',
      pi: 'pi', infty: 'sonsuz', deg: 'derece', percent: 'yüzde', box: 'boş kutu', dots: 've böyle devam eder',
      sin: 'sinüs', cos: 'kosinüs', tg: 'tanjant', cotg: 'kotanjant', log: 'logaritma', ln: 'doğal logaritma',
      lim: 'limit', int: 'integral', sum: 'toplam', from: 'alt sınır', upto: 'üst sınır', to: 'yaklaşır', in: 'elemanıdır', cup: 'birleşim', cap: 'kesişim',
      alpha: 'alfa', beta: 'beta', gamma: 'gama', delta: 'delta', lambda: 'lambda', mu: 'mü', sigma: 'sigma', varphi: 'fi'
    },
    ja: {
      frac: (a, b) => `${b} 分の ${a}`, sqrt: (x) => `ルート ${x}`, root: (n, x) => `${n} 乗根 ${x}`,
      sq: 'の 2 乗', cube: 'の 3 乗', pow: (e) => `の ${e} 乗`, sub: (x) => ` ${x}`,
      '+': 'たす', '-': 'ひく', '=': 'イコール', '<': '小なり', '>': '大なり', times: 'かける', div: 'わる',
      le: '小なりイコール', ge: '大なりイコール', ne: 'ノットイコール', approx: '約', pm: 'プラスマイナス',
      pi: 'パイ', infty: '無限大', deg: '度', percent: 'パーセント', box: '空欄', dots: 'など',
      sin: 'サイン', cos: 'コサイン', tg: 'タンジェント', cotg: 'コタンジェント', log: 'ログ', ln: '自然対数',
      lim: 'リミット', int: 'インテグラル', sum: 'シグマ', from: '下端', upto: '上端', to: 'を近づける', in: '属する', cup: 'カップ', cap: 'キャップ',
      alpha: 'アルファ', beta: 'ベータ', gamma: 'ガンマ', delta: 'デルタ', lambda: 'ラムダ', mu: 'ミュー', sigma: 'シグマ', varphi: 'ファイ'
    },
    ko: {
      frac: (a, b) => `${b} 분의 ${a}`, sqrt: (x) => `루트 ${x}`, root: (n, x) => `${n} 제곱근 ${x}`,
      sq: '의 제곱', cube: '의 세제곱', pow: (e) => `의 ${e} 제곱`, sub: (x) => ` ${x}`,
      '+': '더하기', '-': '빼기', '=': '같다', '<': '작다', '>': '크다', times: '곱하기', div: '나누기',
      le: '이하', ge: '이상', ne: '같지 않다', approx: '약', pm: '플러스 마이너스',
      pi: '파이', infty: '무한대', deg: '도', percent: '퍼센트', box: '빈칸', dots: '등',
      sin: '사인', cos: '코사인', tg: '탄젠트', cotg: '코탄젠트', log: '로그', ln: '자연로그',
      lim: '극한', int: '적분', sum: '시그마', from: '부터', upto: '까지', to: '로 갈 때', in: '에 속한다', cup: '합집합', cap: '교집합',
      alpha: '알파', beta: '베타', gamma: '감마', delta: '델타', lambda: '람다', mu: '뮤', sigma: '시그마', varphi: '파이'
    },
    zh: {
      frac: (a, b) => `${b} 分之 ${a}`, sqrt: (x) => `根号 ${x}`, root: (n, x) => `${n} 次根号 ${x}`,
      sq: '的平方', cube: '的立方', pow: (e) => `的 ${e} 次方`, sub: (x) => ` ${x}`,
      '+': '加', '-': '减', '=': '等于', '<': '小于', '>': '大于', times: '乘', div: '除以',
      le: '小于等于', ge: '大于等于', ne: '不等于', approx: '约等于', pm: '正负',
      pi: '派', infty: '无穷大', deg: '度', percent: '百分之', box: '空格', dots: '等等',
      sin: '正弦', cos: '余弦', tg: '正切', cotg: '余切', log: '对数', ln: '自然对数',
      lim: '极限', int: '积分', sum: '求和', from: '从', upto: '到', to: '趋于', in: '属于', cup: '并', cap: '交',
      alpha: '阿尔法', beta: '贝塔', gamma: '伽马', delta: '德尔塔', lambda: '兰姆达', mu: '缪', sigma: '西格玛', varphi: '斐'
    }
  };
  // kód jazyka bez regiónu ('pt-BR' → 'pt')
  const base = (lang) => String(lang || 'sk').toLowerCase().split(/[-_]/)[0];

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
    const W = WORDS[base(lang)] || WORDS.en;
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

  // hlas pre jazyk: najprv presná zhoda regiónu (pt-BR), potom predvolený a nakoniec ľubovoľný hlas jazyka
  function voiceFor(lang) {
    const vs = speechSynthesis.getVoices();
    const full = String(lang || '').toLowerCase().replace('_', '-'), b = base(lang);
    const tag = (v) => v.lang.toLowerCase().replace('_', '-');
    const same = vs.filter((v) => base(tag(v)) === b);
    return same.find((v) => tag(v) === full && v.default) || same.find((v) => tag(v) === full)
      || same.find((v) => v.default) || same[0] || null;
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
