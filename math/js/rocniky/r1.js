/* 1. ročník: čísla do 20, sčítanie a odčítanie, rozklad, slovné úlohy, útvary, orientácia a meranie.
   Vzorový súbor ročníka: lekcie (LESSONS.push), generátory úloh (EXERCISES.register) a obrázky (FIGURES.register). */
(function () {
  'use strict';

  const { rnd, pick, shuffle } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'r1' }, l));
  const gen = EXERCISES.register;
  const fig = FIGURES.register;

  // Tvar podstatného mena podľa počtu (akuzatív): 1 jablko, 2 jablká, 5 jabĺk; 1 pastelku, 3 pastelky, 7 pasteliek.
  const pl = (n, f) => (n === 1 ? f[0] : n >= 2 && n <= 4 ? f[1] : f[2]);

  /* ---------- kreslenie útvarov (použité v obrázkoch aj v úlohách) ---------- */

  const PLANE = {
    'kruh': (x, y) => `<circle class="f-fill f-outline" cx="${x}" cy="${y}" r="42"/>`,
    'trojuholník': (x, y) => `<polygon class="f-fill2 f-outline2" points="${x},${y - 42} ${x + 50},${y + 38} ${x - 50},${y + 38}"/>`,
    'štvorec': (x, y) => `<rect class="f-fill3 f-outline3" x="${x - 40}" y="${y - 40}" width="80" height="80"/>`,
    'obdĺžnik': (x, y) => `<rect class="f-fill f-outline" x="${x - 58}" y="${y - 32}" width="116" height="64"/>`
  };

  // kváder v jednoduchej perspektíve: predná stena w×h, hĺbka d
  const box = (x, y, w, h, d) => {
    const fx = x - w / 2 - d / 2, fy = y - h / 2 + d / 2;
    return `<polygon class="f-fill3 f-outline3" points="${fx},${fy} ${fx + d},${fy - d} ${fx + w + d},${fy - d} ${fx + w},${fy}"/>
      <polygon class="f-fill2 f-outline2" points="${fx + w},${fy} ${fx + w + d},${fy - d} ${fx + w + d},${fy + h - d} ${fx + w},${fy + h}"/>
      <rect class="f-fill f-outline" x="${fx}" y="${fy}" width="${w}" height="${h}"/>`;
  };

  const SOLIDS = {
    'kocka': (x, y) => box(x, y, 60, 60, 20),
    'kváder': (x, y) => box(x, y, 84, 46, 18),
    'guľa': (x, y) => `<circle class="f-fill f-outline" cx="${x}" cy="${y}" r="42"/>
      <ellipse class="f-dash" fill="none" cx="${x}" cy="${y}" rx="42" ry="11"/>`,
    'valec': (x, y) => `<path class="f-fill2 f-outline2" d="M${x - 36} ${y - 34} V${y + 34} A36 11 0 0 0 ${x + 36} ${y + 34} V${y - 34} Z"/>
      <ellipse class="f-fill2 f-outline2" cx="${x}" cy="${y - 34}" rx="36" ry="11"/>`,
    'kužeľ': (x, y) => `<path class="f-fill3 f-outline3" d="M${x} ${y - 46} L${x - 38} ${y + 34} A38 11 0 0 0 ${x + 38} ${y + 34} Z"/>
      <path class="f-dash" fill="none" d="M${x + 38} ${y + 34} A38 11 0 0 0 ${x - 38} ${y + 34}"/>`
  };

  const cubes = (n, y, fill, outline) => {
    let s = '';
    for (let i = 0; i < n; i++) s += `<rect class="${fill} ${outline}" x="${90 + i * 26}" y="${y}" width="24" height="24" rx="3"/>`;
    return s;
  };

  /* ---------- obrázky ---------- */

  fig('r1-rad20', {
    draw: () => {
      const X = (k) => 20 + k * 20;
      let s = '<svg viewBox="0 0 440 66" role="img" aria-label="Číselný rad od 0 do 20"><line class="f-line" x1="10" y1="26" x2="432" y2="26"/>';
      for (let k = 0; k <= 20; k++) {
        const big = k % 5 === 0;
        s += `<line class="${big ? 'f-line' : 'f-thin'}" x1="${X(k)}" y1="${big ? 16 : 21}" x2="${X(k)}" y2="${big ? 36 : 31}"/>
          <text class="f-small${k % 10 === 0 ? ' c-accent' : ''}" x="${X(k)}" y="54" text-anchor="middle">${k}</text>`;
      }
      return s + '</svg>';
    }
  });

  fig('r1-desiatka', {
    draw: () => {
      const frame = (x0, blue, green) => {
        let s = '';
        for (let i = 0; i < 10; i++) {
          const cx = x0 + (i % 5) * 34 + 17, cy = 20 + Math.floor(i / 5) * 34 + 17;
          s += `<rect class="f-cell" x="${cx - 17}" y="${cy - 17}" width="34" height="34"/>`;
          if (i < blue) s += `<circle class="f-dot" cx="${cx}" cy="${cy}" r="12"/>`;
          else if (i < blue + green) s += `<circle class="f-dot f-dot-ok" cx="${cx}" cy="${cy}" r="12"/>`;
        }
        return s;
      };
      return `<svg viewBox="0 0 410 120" role="img" aria-label="Desiatkové rámčeky: 8 plus 5">
        ${frame(20, 8, 2)}${frame(220, 0, 3)}
        <text class="f-text" x="105" y="112" text-anchor="middle">10</text>
        <text class="f-text" x="305" y="112" text-anchor="middle">3</text></svg>`;
    }
  });

  fig('r1-domcek', {
    draw: () => {
      let s = `<svg viewBox="0 0 220 252" role="img" aria-label="Domček rozkladu čísla 6">
        <polygon class="f-fill f-outline" points="20,70 110,12 200,70"/>
        <text class="f-text" x="110" y="58" text-anchor="middle" font-weight="700">6</text>`;
      for (let k = 1; k <= 5; k++) {
        const y = 70 + (k - 1) * 34;
        s += `<rect class="f-cell" x="20" y="${y}" width="180" height="34"/>
          <line class="f-thin" x1="110" y1="${y}" x2="110" y2="${y + 34}"/>
          <text class="f-text" x="65" y="${y + 23}" text-anchor="middle">${k}</text>
          <text class="f-text" x="155" y="${y + 23}" text-anchor="middle">${6 - k}</text>`;
      }
      return s + '</svg>';
    }
  });

  fig('r1-rovinne', {
    draw: () => `<svg viewBox="0 0 520 150" role="img" aria-label="Rovinné útvary">${Object.keys(PLANE).map((n, i) =>
      PLANE[n](65 + i * 130, 62) + `<text class="f-small" x="${65 + i * 130}" y="140" text-anchor="middle">${n}</text>`).join('')}</svg>`
  });

  fig('r1-telesa', {
    draw: () => `<svg viewBox="0 0 600 155" role="img" aria-label="Priestorové útvary">${Object.keys(SOLIDS).map((n, i) =>
      SOLIDS[n](60 + i * 120, 75) + `<text class="f-small" x="${60 + i * 120}" y="146" text-anchor="middle">${n}</text>`).join('')}</svg>`
  });

  fig('r1-meranie', {
    draw: () => `<svg viewBox="0 0 360 90" role="img" aria-label="Meranie kockami">
      <text class="f-text" x="10" y="30">ceruzka</text>${cubes(7, 12, 'f-fill', 'f-outline')}
      <text class="f-text" x="10" y="72">guma</text>${cubes(3, 54, 'f-fill2', 'f-outline2')}</svg>`
  });

  /* ---------- lekcie a generátory ---------- */

  lesson({
    id: 'r1-cisla20', order: 10, title: 'Čísla do 20',
    summary: 'Čítanie, písanie a porovnávanie čísel od 0 do 20.',
    theory: [
      `<p>Čísla od 0 do 20 vieme prečítať aj zapísať číslicami: 0 (nula), 1 (jeden), 2 (dva) … 10 (desať) … 20 (dvadsať).
       Čísla od 11 do 19 majú <strong>1 desiatku</strong> a niekoľko <strong>jednotiek</strong>: napríklad $14 = 10 + 4$.</p>`,
      { fig: 'r1-rad20', caption: 'Číselný rad od 0 do 20. Čím ďalej vpravo, tým je číslo väčšie.' },
      `<p><strong>Porovnávanie:</strong> znak $&lt;$ znamená „je menšie ako“, znak $&gt;$ „je väčšie ako“ a $=$ „sa rovná“.
       Otvorená strana znaku smeruje vždy k väčšiemu číslu: $7 &lt; 12$, $15 &gt; 9$.</p>`
    ],
    examples: [
      { task: 'Porovnaj čísla 13 a 8.',
        steps: ['Na číselnom rade leží 13 ďalej vpravo ako 8.', 'Preto $13 &gt; 8$.'] },
      { task: 'Koľko desiatok a jednotiek má číslo 17?',
        steps: ['$17 = 10 + 7$.', '<strong>1 desiatka a 7 jednotiek.</strong>'] }
    ]
  });

  gen('r1-cisla20', () => {
    const t = Math.random();
    if (t < 0.6) {
      const a = rnd(0, 20), b = Math.random() < 0.15 ? a : rnd(0, 20);
      const ans = a < b ? '<' : a > b ? '>' : '=';
      return {
        type: 'choice', options: ['<', '=', '>'], answer: ans,
        q: T`Doplň správny znak: $${a} \\;\\square\\; ${b}$`,
        solution: a === b
          ? T`Čísla sú rovnaké, preto $${a} = ${b}$.`
          : T`Číslo ${Math.max(a, b)} leží na číselnom rade ďalej vpravo, je väčšie. Preto $${a} ${ans === '<' ? '&lt;' : '&gt;'} ${b}$.`,
        hint: T`Väčšie číslo leží na číselnom rade viac vpravo. Otvorená strana znaku smeruje k väčšiemu číslu.`
      };
    }
    if (t < 0.8) {
      const n = rnd(11, 20), tens = Math.floor(n / 10), ones = n % 10;
      const askOnes = Math.random() < 0.5;
      return {
        answer: askOnes ? ones : tens,
        q: T`Koľko ${askOnes ? T`jednotiek` : T`desiatok`} má číslo ${n}?`,
        solution: T`$${n} = ${tens * 10} + ${ones}$, teda ${tens} ${pl(tens, [T`desiatka`, T`desiatky`, T`desiatok`])} a ${ones} ${pl(ones, [T`jednotka`, T`jednotky`, T`jednotiek`])}.`,
        hint: T`Číslo rozdeľ na desiatky a jednotky, napríklad $14 = 10 + 4$.`
      };
    }
    const n = rnd(1, 19), up = Math.random() < 0.5;
    return {
      answer: up ? n + 1 : n - 1,
      q: T`Ktoré číslo je o 1 ${up ? T`väčšie` : T`menšie`} ako ${n}?`,
      solution: T`${up ? T`Hneď za` : T`Hneď pred`} číslom ${n} je v číselnom rade číslo ${up ? n + 1 : n - 1}.`,
      hint: up ? T`Na číselnom rade sa posuň o jedno miesto doprava.` : T`Na číselnom rade sa posuň o jedno miesto doľava.`
    };
  });

  lesson({
    id: 'r1-scitanie', order: 20, title: 'Sčítanie a odčítanie do 20',
    summary: 'Pridávanie a uberanie, prechod cez desiatku.',
    theory: [
      `<p><strong>Sčítanie</strong> znamená pridávanie: $5 + 3 = 8$. Čísla, ktoré sčítavame, sú <em>sčítance</em>, výsledok je <em>súčet</em>.
       Na poradí sčítancov nezáleží: $3 + 5 = 5 + 3$.</p>`,
      `<p><strong>Odčítanie</strong> znamená uberanie: $8 - 3 = 5$. Odčítanie je opačné k sčítaniu: ak $5 + 3 = 8$, potom $8 - 3 = 5$ aj $8 - 5 = 3$.</p>`,
      `<p><strong>Prechod cez desiatku:</strong> pri $8 + 5$ najprv doplníme do desiatky ($8 + 2 = 10$) a potom pridáme zvyšok ($10 + 3 = 13$).</p>`,
      { fig: 'r1-desiatka', caption: 'Dva desiatkové rámčeky: 8 modrých a 5 zelených. Dva zelené doplnia prvú desiatku, zvyšné 3 sú v druhej: $8 + 5 = 13$.' }
    ],
    examples: [
      { task: 'Vypočítaj $8 + 5$.',
        steps: ['Doplníme do desiatky: $8 + 2 = 10$.', 'Z čísla 5 ostali 3: $10 + 3 = 13$.', '<strong>Výsledok: 13</strong>'] },
      { task: 'Vypočítaj $14 - 6$.',
        steps: ['Najprv uberieme 4, aby sme sa dostali na desiatku: $14 - 4 = 10$.', 'Zo 6 ostáva ubrať 2: $10 - 2 = 8$.', '<strong>Výsledok: 8</strong>'] }
    ]
  });

  gen('r1-scitanie', () => {
    const t = Math.random();
    if (t < 0.4) {
      const a = rnd(2, 15), b = rnd(1, 20 - a), s = a + b;
      const via = a < 10 && s > 10 ? T` Doplň do desiatky: $${a} + ${10 - a} = 10$, potom $10 + ${s - 10} = ${s}$.` : '';
      return {
        answer: s, q: T`Vypočítaj $${a} + ${b}$.`,
        solution: `$${a} + ${b} = ${s}$.${via}`,
        hint: T`Ak prejdeš cez 10, najprv doplň do desiatky a potom pridaj zvyšok.`
      };
    }
    if (t < 0.8) {
      const a = rnd(5, 20), b = rnd(1, a), d = a - b;
      const via = a > 10 && d < 10 ? T` Najprv uber do desiatky: $${a} - ${a - 10} = 10$, potom $10 - ${b - (a - 10)} = ${d}$.` : '';
      return {
        answer: d, q: T`Vypočítaj $${a} - ${b}$.`,
        solution: `$${a} - ${b} = ${d}$.${via}`,
        hint: T`Odčítanie je opak sčítania: koľko musíš pridať k ${b}, aby si dostal ${a}?`
      };
    }
    const a = rnd(1, 15), x = rnd(1, 20 - a), s = a + x;
    return {
      answer: x, q: T`Doplň chýbajúce číslo: $${a} + \\square = ${s}$`,
      solution: T`Hľadáme, koľko chýba od ${a} do ${s}: $${s} - ${a} = ${x}$.`,
      hint: T`Chýbajúce číslo zistíš odčítaním.`
    };
  });

  lesson({
    id: 'r1-rozklad', order: 30, title: 'Číselný rad a rozklad čísel',
    summary: 'Ktoré číslo je pred a za, rozklad čísla na dve časti.',
    theory: [
      `<p><strong>Číselný rad</strong> je usporiadanie čísel za sebou: 0, 1, 2, 3, … Číslo hneď pred daným číslom je o 1 menšie,
       číslo hneď za ním je o 1 väčšie.</p>`,
      `<p><strong>Rozklad čísla</strong> znamená zapísať ho ako súčet dvoch menších čísel. Číslo 6 vieme rozložiť napríklad
       ako $1 + 5$, $2 + 4$ alebo $3 + 3$.</p>`,
      { fig: 'r1-domcek', caption: 'Domček rozkladu čísla 6: na každom poschodí sú dve čísla, ktoré dajú spolu 6.' }
    ],
    examples: [
      { task: 'Ktoré číslo nasleduje v číselnom rade za číslom 15?',
        steps: ['Za číslom je vždy číslo o 1 väčšie.', '$15 + 1 = 16$.', '<strong>Výsledok: 16</strong>'] },
      { task: 'Doplň rozklad: $9 = 4 + \\square$.',
        steps: ['Hľadáme, koľko chýba od 4 do 9.', '$9 - 4 = 5$.', '<strong>$9 = 4 + 5$</strong>'] }
    ]
  });

  gen('r1-rozklad', () => {
    const t = Math.random();
    if (t < 0.4) {
      const n = rnd(3, 20), a = rnd(0, n);
      return {
        answer: n - a, q: T`Rozlož číslo ${n}: $${n} = ${a} + \\square$`,
        solution: T`$${n} - ${a} = ${n - a}$, teda $${n} = ${a} + ${n - a}$.`,
        hint: T`Koľko chýba od ${a} do ${n}?`
      };
    }
    if (t < 0.7) {
      const up = Math.random() < 0.6, start = up ? rnd(0, 16) : rnd(4, 20), miss = rnd(1, 2);
      const seq = [0, 1, 2, 3].map((i) => (up ? start + i : start - i));
      return {
        answer: seq[miss],
        q: T`Doplň číslo, ktoré chýba v číselnom rade: ${seq.map((v, i) => (i === miss ? '□' : v)).join(', ')}`,
        solution: T`Čísla ${up ? T`rastú` : T`klesajú`} vždy o 1: ${seq.join(', ')}.`,
        hint: T`Zisti, či čísla rastú alebo klesajú, a o koľko.`
      };
    }
    const a = rnd(0, 18);
    return {
      answer: a + 1, q: T`Ktoré číslo leží v číselnom rade medzi číslami ${a} a ${a + 2}?`,
      solution: T`Za číslom ${a} nasleduje ${a + 1} a za ním ${a + 2}.`,
      hint: T`Hľadaj číslo, ktoré je o 1 väčšie ako prvé.`
    };
  });

  lesson({
    id: 'r1-slovne', order: 40, title: 'Jednoduché slovné úlohy',
    summary: 'Ako z príbehu urobiť príklad a napísať odpoveď.',
    theory: [
      `<p>Pri slovnej úlohe postupujeme v krokoch:</p>
       <ol><li>prečítame si úlohu,</li><li>zistíme, čo vieme a čo hľadáme,</li><li>zapíšeme príklad,</li>
       <li>vypočítame,</li><li>napíšeme odpoveď celou vetou.</li></ol>`,
      `<p>Slová ako <em>pridal, dostal, spolu, o … viac</em> zvyčajne znamenajú <strong>sčítanie</strong>.
       Slová ako <em>zjedol, dal preč, zostalo, o koľko viac</em> zvyčajne znamenajú <strong>odčítanie</strong>.</p>`
    ],
    examples: [
      { task: 'Ema mala 7 cukríkov a dostala ešte 5. Koľko cukríkov má teraz?',
        steps: ['Vieme: mala 7 cukríkov, dostala 5. Hľadáme, koľko má spolu.', 'Príklad: $7 + 5 = 12$.', '<strong>Odpoveď: Ema má 12 cukríkov.</strong>'] },
      { task: 'Jano má 9 guličiek, Miro má 4 guličky. O koľko guličiek má Jano viac?',
        steps: ['Porovnávame, preto odčítame menšie číslo od väčšieho.', 'Príklad: $9 - 4 = 5$.', '<strong>Odpoveď: Jano má o 5 guličiek viac.</strong>'] }
    ]
  });

  const KIDS = [
    { n: 'Ema', f: true }, { n: 'Jano', f: false }, { n: 'Sofia', f: true }, { n: 'Miro', f: false },
    { n: 'Lea', f: true }, { n: 'Adam', f: false }, { n: 'Nina', f: true }, { n: 'Tomáš', f: false }
  ];
  // tvary v akuzatíve: koho/čo mám — 1 pastelku, 2 pastelky, 5 pasteliek
  const THINGS = [
    ['jablko', 'jablká', 'jabĺk'], ['cukrík', 'cukríky', 'cukríkov'], ['pastelku', 'pastelky', 'pasteliek'],
    ['guličku', 'guličky', 'guličiek'], ['nálepku', 'nálepky', 'nálepiek']
  ];
  const verb = (kid, m, f) => (kid.f ? f : m);

  gen('r1-slovne', () => {
    const TH = pick(THINGS);
    const k1 = pick(KIDS), k2 = pick(KIDS.filter((k) => k !== k1));
    const kind = rnd(0, 3);
    if (kind === 0) {
      const a = rnd(2, 15), b = rnd(1, 20 - a);
      return {
        answer: a + b,
        q: T`${k1.n} ${verb(k1, T`mal`, T`mala`)} ${a} ${pl(a, TH)} a ${verb(k1, T`dostal`, T`dostala`)} ešte ${b}. Koľko ${TH[2]} má teraz?`,
        solution: T`Pridávame, preto sčítame: $${a} + ${b} = ${a + b}$. ${k1.n} má ${a + b} ${pl(a + b, TH)}.`,
        hint: T`Keď niečo pribudne, sčítavame.`
      };
    }
    if (kind === 1) {
      const a = rnd(5, 20), b = rnd(2, a - 1);
      return {
        answer: a - b,
        q: T`${k1.n} ${verb(k1, T`mal`, T`mala`)} ${a} ${pl(a, TH)}. Kamarátom ${verb(k1, T`dal`, T`dala`)} ${b} ${pl(b, TH)}. Koľko ${TH[2]} ${verb(k1, T`mu`, T`jej`)} zostalo?`,
        solution: T`Uberáme, preto odčítame: $${a} - ${b} = ${a - b}$. Zostalo ${verb(k1, T`mu`, T`jej`)} ${a - b} ${pl(a - b, TH)}.`,
        hint: T`Keď niečo ubudne, odčítavame.`
      };
    }
    if (kind === 2) {
      const a = rnd(3, 20), b = rnd(1, a - 1);
      return {
        answer: a - b,
        q: T`${k1.n} má ${a} ${pl(a, TH)}, ${k2.n} má ${b} ${pl(b, TH)}. O koľko ${TH[2]} má ${k1.n} viac?`,
        solution: T`Porovnávame: $${a} - ${b} = ${a - b}$. ${k1.n} má o ${a - b} ${pl(a - b, TH)} viac.`,
        hint: T`Otázka „o koľko viac“ sa rieši odčítaním.`
      };
    }
    const a = rnd(1, 15), b = rnd(2, 20 - a);
    return {
      answer: a + b,
      q: T`${k1.n} má ${a} ${pl(a, TH)}. ${k2.n} má o ${b} ${pl(b, TH)} viac. Koľko ${TH[2]} má ${k2.n}?`,
      solution: T`„O ${b} viac“ znamená pridať ${b}: $${a} + ${b} = ${a + b}$. ${k2.n} má ${a + b} ${pl(a + b, TH)}.`,
      hint: T`„O … viac“ znamená k číslu pripočítať.`
    };
  });

  lesson({
    id: 'r1-utvary', order: 50, title: 'Rovinné a priestorové útvary',
    summary: 'Kruh, trojuholník, štvorec, obdĺžnik a telesá okolo nás.',
    theory: [
      `<p><strong>Rovinné útvary</strong> sú ploché, nakreslíme ich na papier: <strong>kruh</strong>, <strong>trojuholník</strong>
       (3 strany, 3 vrcholy), <strong>štvorec</strong> (4 rovnako dlhé strany) a <strong>obdĺžnik</strong> (4 strany, protiľahlé sú rovnako dlhé).</p>`,
      { fig: 'r1-rovinne', caption: 'Rovinné útvary.' },
      `<p><strong>Priestorové útvary (telesá)</strong> môžeme chytiť do ruky: <strong>kocka</strong> (hracia kocka), <strong>kváder</strong> (krabica),
       <strong>guľa</strong> (lopta), <strong>valec</strong> (plechovka) a <strong>kužeľ</strong> (kornútok na zmrzlinu).</p>`,
      { fig: 'r1-telesa', caption: 'Priestorové útvary. Prerušovaná čiara ukazuje hranu, ktorá je vzadu.' }
    ],
    examples: [
      { task: 'Koľko vrcholov má trojuholník a koľko štvorec?',
        steps: ['Vrchol je roh útvaru.', 'Trojuholník má 3 vrcholy, štvorec má 4 vrcholy.'] },
      { task: 'Akému telesu sa podobá lopta?',
        steps: ['Lopta je zo všetkých strán okrúhla.', '<strong>Lopta má tvar gule.</strong>'] }
    ]
  });

  const FACTS = [
    ['Koľko vrcholov má trojuholník?', 3, 'Trojuholník má 3 vrcholy a 3 strany.'],
    ['Koľko strán má trojuholník?', 3, 'Trojuholník má 3 strany.'],
    ['Koľko strán má štvorec?', 4, 'Štvorec má 4 rovnako dlhé strany.'],
    ['Koľko vrcholov má obdĺžnik?', 4, 'Obdĺžnik má 4 vrcholy.'],
    ['Koľko stien má kocka?', 6, 'Kocka má 6 stien a každá stena je štvorec.'],
    ['Koľko vrcholov má kocka?', 8, 'Kocka má 8 vrcholov: 4 hore a 4 dole.'],
    ['Koľko vrcholov má kruh?', 0, 'Kruh nemá žiadne vrcholy, jeho okraj je oblý.']
  ];

  gen('r1-utvary', () => {
    if (Math.random() < 0.65) {
      const solid = Math.random() < 0.5;
      const shapes = solid ? SOLIDS : PLANE;
      const name = pick(Object.keys(shapes));
      return {
        type: 'choice', options: shuffle(Object.keys(shapes)).map(T.s), answer: T.s(name),
        q: `${T`Ako sa volá ${solid ? T`toto teleso` : T`tento útvar`}?`}
            <svg viewBox="0 0 180 150" width="180" role="img" aria-label="obrázok útvaru">${shapes[name](90, 75)}</svg>`,
        solution: T`Na obrázku je ${name}.`,
        hint: solid ? T`Predstav si loptu, plechovku, krabicu, hraciu kocku alebo kornútok.` : T`Spočítaj strany a vrcholy útvaru.`
      };
    }
    const [q, a, why] = pick(FACTS);
    return { answer: a, q: T.s(q), solution: T.s(why), hint: T`Vrchol je roh útvaru, strana je čiara medzi dvoma vrcholmi.` };
  });

  lesson({
    id: 'r1-meranie', order: 60, title: 'Orientácia v priestore a meranie',
    summary: 'Vľavo, vpravo, medzi; porovnávanie a meranie dĺžky.',
    theory: [
      `<p><strong>Orientácia:</strong> používame slová vľavo – vpravo, hore – dole, pred – za, vedľa a medzi.
       V rade 🐶 🐱 🐰 je mačka <em>medzi</em> psom a zajacom a pes je <em>vľavo</em> od mačky.</p>`,
      `<p><strong>Meranie dĺžky:</strong> dĺžku môžeme merať krokmi, dlaňami alebo kockami. Presnejšie meriame pravítkom
       v centimetroch (cm). Pri porovnávaní hovoríme dlhší – kratší, vyšší – nižší.</p>`,
      { fig: 'r1-meranie', caption: 'Ceruzka meria 7 kociek, guma 3 kocky. Ceruzka je o 4 kocky dlhšia.' }
    ],
    examples: [
      { task: 'V rade 🍎 🍐 🍌 🍇 ktoré ovocie je hneď vpravo od hrušky?',
        steps: ['Hruška 🍐 je druhá zľava.', 'Hneď vpravo od nej je banán 🍌.'] },
      { task: 'Jedna stuha má 9 cm, druhá 5 cm. O koľko je prvá stuha dlhšia?',
        steps: ['Porovnávame, preto odčítame: $9 - 5 = 4$.', '<strong>Prvá stuha je o 4 cm dlhšia.</strong>'] }
    ]
  });

  // [obrázok, nominatív, genitív (od koho), inštrumentál (medzi kým)]
  const ANIMALS = [
    ['🐶', 'pes', 'psa', 'psom'], ['🐱', 'mačka', 'mačky', 'mačkou'], ['🐰', 'zajac', 'zajaca', 'zajacom'],
    ['🐻', 'medveď', 'medveďa', 'medveďom'], ['🦊', 'líška', 'líšky', 'líškou'], ['🐸', 'žaba', 'žaby', 'žabou'],
    ['🐭', 'myš', 'myši', 'myšou']
  ];
  const KOCKA = ['kocku', 'kocky', 'kociek'];

  gen('r1-meranie', () => {
    if (Math.random() < 0.55) {
      const row = shuffle(ANIMALS).slice(0, 5);
      const label = (x) => `${x[0]} ${T.s(x[1])}`;
      const show = `<span class="emoji-row">${row.map((x) => x[0]).join(' ')}</span>`;
      const base = { type: 'choice', options: row.map(label), hint: T`Vľavo je začiatok radu, vpravo jeho koniec.` };
      const kind = rnd(0, 2);
      if (kind === 0) {
        const i = rnd(0, 3);
        return Object.assign(base, {
          answer: label(row[i + 1]), q: T`Zvieratká stoja v rade: ${show} Kto stojí hneď vpravo od ${row[i][2]}?`,
          solution: T`Hneď vpravo od ${row[i][2]} stojí ${row[i + 1][1]}.`
        });
      }
      if (kind === 1) {
        const i = rnd(1, 4);
        return Object.assign(base, {
          answer: label(row[i - 1]), q: T`Zvieratká stoja v rade: ${show} Kto stojí hneď vľavo od ${row[i][2]}?`,
          solution: T`Hneď vľavo od ${row[i][2]} stojí ${row[i - 1][1]}.`
        });
      }
      const i = rnd(1, 3);
      return Object.assign(base, {
        answer: label(row[i]), q: T`Zvieratká stoja v rade: ${show} Kto stojí medzi ${row[i - 1][3]} a ${row[i + 1][3]}?`,
        solution: T`Medzi ${row[i - 1][3]} a ${row[i + 1][3]} stojí ${row[i][1]}.`
      });
    }
    if (Math.random() < 0.5) {
      const a = rnd(3, 10), b = rnd(1, a - 1);
      const pic = `<svg viewBox="0 0 360 90" role="img" aria-label="dva pásy z kociek">
        <text class="f-text" x="10" y="30">modrý</text>${cubes(a, 12, 'f-fill', 'f-outline')}
        <text class="f-text" x="10" y="72">zelený</text>${cubes(b, 54, 'f-fill2', 'f-outline2')}</svg>`;
      return {
        answer: a - b, q: T`O koľko kociek je modrý pás dlhší ako zelený? ${pic}`,
        solution: T`Modrý pás má ${a} ${pl(a, KOCKA)}, zelený ${b}. $${a} - ${b} = ${a - b}$.`,
        hint: T`Spočítaj kocky v oboch pásoch a odčítaj.`
      };
    }
    const x = rnd(5, 18), y = rnd(2, x - 1);
    return {
      answer: x - y, q: T`Červená stuha meria ${x} cm, modrá ${y} cm. O koľko centimetrov je červená stuha dlhšia?`,
      solution: T`$${x} - ${y} = ${x - y}$, červená stuha je o ${x - y} cm dlhšia.`,
      hint: T`Rozdiel dĺžok zistíš odčítaním.`
    };
  });
})();
