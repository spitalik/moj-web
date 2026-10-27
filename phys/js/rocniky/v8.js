(function () {
  'use strict';

  const { rnd, pick, shuffle, fmt } = EXERCISES.util;
  const { T } = CONTENT_I18N;
  const lesson = (l) => LESSONS.push(Object.assign({ level: 'v8' }, l));
  const gen = EXERCISES.register;
  // desatinné číslo v matematike (čiarka sa v $...$ zapisuje ako {,})
  const mn = (x) => fmt(x).replace(',', '{,}');
  // typické chyby, ktoré sa rovnajú správnej odpovedi, vynecháme
  const dropAns = (list, ans) => list.filter((m) => m.value !== ans);
  // nápovedy len k nesprávnym možnostiam výberu
  const hintsFor = (options, ans, map) => {
    const h = {};
    options.forEach((o) => { if (o !== ans) h[o] = map[o]; });
    return h;
  };

  /* ---------- 1. Elementárne častice ---------- */

  lesson({
    id: 'v8-castice', order: 10, theme: 'moderna', title: 'Elementárne častice a ich vlastnosti',
    summary: 'Charakteristiky častíc, fermióny a bozóny, barióny a mezóny.',
    theory: [
      `<p>Elementárne častice nemajú podľa súčasných poznatkov vnútornú stavbu. Charakterizujú ich <strong>hmotnosť</strong>, <strong>elektrický náboj</strong>, <strong>spin</strong> (vlastný moment hybnosti) a pri kvarkoch a gluónoch aj <strong>farba</strong>.</p>`,
      `<p>Podľa spinu delíme častice na <em>fermióny</em> (spin $\\tfrac{1}{2}$, tvoria hmotu a riadia sa Pauliho princípom) a <em>bozóny</em> (celočíselný spin, sprostredkujú interakcie, napr. fotón so spinom 1).</p>`,
      `<p>Hadróny sú zložené z kvarkov. <strong>Barióny</strong> obsahujú tri kvarky (proton $uud$, neutrón $udd$). <strong>Mezóny</strong> obsahujú dvojicu kvark–antikvark (napr. $\\pi^{+}=u\\bar{d}$). Leptóny (elektrón, mión, tau a neutrína) sa silnej interakcie nezúčastňujú.</p>`,
      `<ul><li>Proton: hmotnosť približne 938 MeV/$c^2$, náboj $+e$.</li><li>Neutrón: hmotnosť približne 940 MeV/$c^2$, náboj $0$.</li><li>Elektrón: hmotnosť približne 0{,}511 MeV/$c^2$, náboj $-e$.</li></ul>`
    ],
    examples: [
      { task: 'Z akých kvarkov je zložený neutrón?',
        steps: ['Neutrón je barión, teda obsahuje tri kvarky.', 'Náboj musí byť 0: dva kvarky $d$ a jeden $u$ dajú $-\\tfrac{1}{3}-\\tfrac{1}{3}+\\tfrac{2}{3}=0$.', '<strong>Výsledok: $udd$</strong>'] },
      { task: 'Je elektrón barión?',
        steps: ['Barión je zložený z troch kvarkov.', 'Elektrón je lepton a kvarky neobsahuje.', '<strong>Výsledok: nie</strong>'] }
    ]
  });

  gen('v8-castice', () => {
    const [name, quarks] = pick([[T`proton`, 'uud'], [T`neutrón`, 'udd']]);
    const options = shuffle(['uud', 'udd', 'uuu', 'ddd']);
    const HINT = {
      uud: T.s('Toto zloženie patrí protónu, nie neutrónu.'),
      udd: T.s('Toto zloženie patrí neutrónu, nie protónu.'),
      uuu: T.s('Tri kvarky $u$ tvoria inú časticu (Δ++), nie nukleón.'),
      ddd: T.s('Tri kvarky $d$ tvoria inú časticu (Δ−), nie nukleón.')
    };
    return {
      type: 'choice',
      q: T`Z akých kvarkov je zložený ${name}?`,
      options,
      answer: quarks,
      choiceHints: hintsFor(options, quarks, HINT),
      solution: quarks === 'uud'
        ? T`Proton má náboj $+e$: $\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3}=1$, teda zloženie je $uud$.`
        : T`Neutrón nemá náboj: $-\\tfrac{1}{3}-\\tfrac{1}{3}+\\tfrac{2}{3}=0$, teda zloženie je $udd$.`,
      hint: T`Súčet nábojov kvarkov musí dať náboj častice: proton $+e$, neutrón $0$.`
    };
  });

  /* ---------- 2. Kvarky a leptóny ---------- */

  lesson({
    id: 'v8-kvarky-leptony', order: 20, theme: 'moderna', title: 'Kvarky a leptóny',
    summary: 'Generácie fermiónov a frakčné náboje kvarkov.',
    theory: [
      `<p>Šesť kvarkov je rozdelených do troch generácií: $(u,d)$, $(c,s)$ a $(t,b)$. Kvarky $u$, $c$, $t$ nesú náboj $+\\tfrac{2}{3}e$ a kvarky $d$, $s$, $b$ náboj $-\\tfrac{1}{3}e$. Sú to jediné častice s nenulovým frakčným nábojom.</p>`,
      `<p>Leptóny tvoria tiež tri generácie dvojíc: $(e,\\nu_e)$, $(\\mu,\\nu_\\mu)$ a $(\\tau,\\nu_\\tau)$. Nabité leptóny majú náboj $-e$. Neutrína sú neutrálne a s látkou interagujú veľmi slabo.</p>`,
      `<p>Voľné hadróny majú celkový náboj celočíselný násobok $e$. Preto sa kvarky spájajú v trojiciach (barióny) alebo v pároch kvark–antikvark (mezóny). Tento súčet je užitočná kontrola pri zápise reakcií.</p>`,
      `<ol><li>Zisti náboj každého kvarku v jednotkách $e$.</li><li>Sčítaj ich.</li><li>Výsledok musí byť celé číslo.</li></ol>`
    ],
    examples: [
      { task: 'Aký je náboj častice $uud$?',
        steps: ['$u$ má $+\\tfrac{2}{3}$, $d$ má $-\\tfrac{1}{3}$.', '$\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3}=1$.', '<strong>Výsledok: $+e$ (proton)</strong>'] },
      { task: 'Aký náboj má barión $uds$ (častica Λ)?',
        steps: ['$\\tfrac{2}{3}-\\tfrac{1}{3}-\\tfrac{1}{3}=0$.', '<strong>Výsledok: náboj 0</strong>'] }
    ]
  });

  gen('v8-kvarky-leptony', () => {
    // náboje kvarkov v tretinách elementárneho náboja e (u, c: +2; d, s, b: -1)
    const CH = { u: 2, c: 2, d: -1, s: -1, b: -1 };
    const LET = Object.keys(CH);
    const qs = [pick(LET), pick(LET), pick(LET)];
    const sum = qs.reduce((a, k) => a + CH[k], 0);  // vždy násobok 3, lebo každý člen je ≡ 2 (mod 3)
    const label = qs.join(''), ans = sum / 3;
    return {
      q: T`Aký je celkový elektrický náboj častice zloženej z kvarkov $\\text{${label}}$? Výsledok zadaj v jednotkách $e$.`,
      answer: ans,
      mistakes: dropAns([
        { value: sum, msg: T`Vyšiel ti náboj v tretinách elementárneho náboja. Výsledok vydeľ tromi, aby bol v jednotkách $e$.` },
        { value: -ans, msg: T`Pozor na znamienka: kvarky $u$, $c$ majú kladný náboj a $d$, $s$, $b$ záporný.` }
      ], ans),
      solution: T`Náboje v tretinách $e$ sčítaj: $${sum}\\cdot\\tfrac{1}{3}=${ans}$, teda celkový náboj je $${ans}\\,e$.`,
      hint: T`Kvark $u$ alebo $c$ má $+\\tfrac{2}{3}e$, kvark $d$, $s$ alebo $b$ má $-\\tfrac{1}{3}e$. Sčítaj tri kvarky.`
    };
  });

  /* ---------- 3. Interakcie a bozóny ---------- */

  lesson({
    id: 'v8-fotony', order: 30, theme: 'moderna', title: 'Fotóny a ďalšie sprostredkujúce častice',
    summary: 'Kalibračné bozóny ako nositelia interakcií a ich vlastnosti.',
    theory: [
      `<p>Interakcie medzi časticami prebiehajú výmenou <strong>kalibračných bozónov</strong>. Fotón $\\gamma$ prenáša elektromagnetickú silu, gluóny $g$ silnú silu a bozóny $W^{\\pm}$ a $Z^{0}$ slabú silu.</p>`,
      `<p>Fotón nemá hmotnosť ani náboj a jeho spin je 1. Gluón je tiež bez hmotnosti, ale nesie <em>farebný</em> náboj, takže sa viaže aj sám na seba. Toto je dôvod, prečo kvarky nevieme izolovať a sú uväznené v hadrónoch.</p>`,
      `<p>Bozóny $W$ a $Z$ sú veľmi ťažké (hmotnosti približne 80 a 91 GeV/$c^2$), preto je dosah slabej interakcie krátky, rádovo $10^{-18}\\,\\text{m}$. Dosah je nepriamo úmerný hmotnosti sprostredkujúcej častice.</p>`,
      `<p>Gravitón je hypotetický bozón gravitácie. Zatiaľ nebol experimentálne potvrdený a v štandardnom modeli nie je zahrnutý.</p>`
    ],
    examples: [
      { task: 'Ktorá častica sprostredkuje silnú interakciu?',
        steps: ['Silnú interakciu sprostredkúvajú gluóny.', '<strong>Výsledok: gluón</strong>'] },
      { task: 'Prečo má slabá interakcia tak krátky dosah?',
        steps: ['Sprostredkujúce bozóny $W$ a $Z$ majú veľkú hmotnosť.', 'Dosah je nepriamo úmerný hmotnosti, takže veľká hmotnosť dosah skracuje.', '<strong>Výsledok: veľká hmotnosť bozónov skracuje dosah</strong>'] }
    ]
  });

  gen('v8-fotony', () => {
    const CASES = [[T`elektromagnetickú`, 'fotón'], [T`silnú`, 'gluón'], [T`gravitačnú`, 'gravitón']];
    const [inter, ans] = pick(CASES);
    const options = shuffle([ans, ...shuffle(['fotón', 'gluón', 'W bozón', 'Z bozón', 'gravitón'].filter((x) => x !== ans)).slice(0, 3)]);
    const HINT = {
      'fotón': T.s('Fotón sprostredkuje elektromagnetickú interakciu.'),
      'gluón': T.s('Gluóny sprostredkujú silnú interakciu medzi kvarkmi.'),
      'W bozón': T.s('Bozóny $W$ sprostredkujú slabú interakciu.'),
      'Z bozón': T.s('Bozón $Z^{0}$ sprostredkuje slabú interakciu.'),
      'gravitón': T.s('Gravitón je hypotetický bozón gravitácie, nie sprostredkovateľ tejto interakcie.')
    };
    return {
      type: 'choice',
      q: T`Ktorý bozón sprostredkuje ${inter} interakciu?`,
      options,
      answer: ans,
      choiceHints: hintsFor(options, ans, HINT),
      solution: T`${inter} interakciu sprostredkuje ${ans}.`,
      hint: T`Každú interakciu sprostredkuje iný bozón. Pozri si tabuľku v teórii.`
    };
  });

  /* ---------- 4. Štandardný model ---------- */

  lesson({
    id: 'v8-standardny-model', order: 40, theme: 'moderna', title: 'Štandardný model časticovej fyziky',
    summary: 'Prehľad častíc a interakcií v štandardnom modeli a ich počty.',
    theory: [
      `<p>Štandardný model popisuje tri zo štyroch základných interakcií (elektromagnetickú, slabú a silnú) a všetky doteraz známe elementárne častice. Gravitáciu zatiaľ nezahŕňa.</p>`,
      `<p>Hmotu tvorí 12 fermiónov: 6 kvarkov a 6 leptónov v troch generáciách. Každá ďalšia generácia je ťažšia a nestabilnejšia. Stabilná hmota je tvorená len časticami prvej generácie.</p>`,
      `<p>Častice získavajú hmotnosť <em>Higgsovým mechanizmom</em>. Zákony zachovania (náboj, farba, leptónové čísla) a symetrie určujú, ktoré procesy sú povolené.</p>`,
      `<ul><li>Kalibračné bozóny: fotón $\\gamma$, osem gluónov $g$, bozóny $W^{\\pm}$ a $Z^{0}$.</li><li>Higgsov bozón $H^{0}$.</li></ul>`
    ],
    examples: [
      { task: 'Koľko fermiónov má štandardný model v prvých dvoch generáciách?',
        steps: ['Každá generácia obsahuje 2 kvarky a 2 leptóny, teda 4 fermióny.', '$2\\cdot 4 = 8$.', '<strong>Výsledok: 8</strong>'] },
      { task: 'Koľko kalibračných bozónov je v štandardnom modeli?',
        steps: ['Fotón (1), gluóny (8) a bozóny $W^{+}$, $W^{-}$, $Z^{0}$ (3).', '$1+8+3=12$.', '<strong>Výsledok: 12</strong>'] }
    ]
  });

  gen('v8-standardny-model', () => {
    const N = rnd(1, 3), ans = 4 * N;
    return {
      q: T`Koľko fermiónov (kvarkov a leptónov spolu) je v ${N} ${N === 1 ? T`generácii` : T`generáciách`} štandardného modelu?`,
      answer: ans,
      mistakes: dropAns([
        { value: 2 * N, msg: T`Počítaš len kvarky. Leptóny sú tiež fermióny a každá generácia ich má dva.` },
        { value: N, msg: T`Počítaš generácie, nie častice. Každá generácia má štyri fermióny.` }
      ], ans),
      solution: T`Každá generácia má 2 kvarky a 2 leptóny, teda 4 fermióny. Spolu $4\\cdot ${N} = ${ans}$.`,
      hint: T`Spočítaj kvarky a leptóny jednej generácie a výsledok vynásob počtom generácií.`
    };
  });

  /* ---------- 5. Silná, slabá a elektromagnetická interakcia ---------- */

  lesson({
    id: 'v8-interakcie', order: 50, theme: 'moderna', title: 'Silná, slabá a elektromagnetická interakcia',
    summary: 'Dosah, pôsobenie a relatívna sila troch interakcií.',
    theory: [
      `<p><strong>Silná interakcia</strong> drží kvarky pohromade v protónoch a neutrónoch a nukleóny v jadre. Má najkratší dosah, rádovo $10^{-15}\\,\\text{m}$, a je najsilnejšia zo štyroch interakcií.</p>`,
      `<p><strong>Elektromagnetická interakcia</strong> pôsobí medzi nábojmi. Spôsobuje elektrické a magnetické sily a väzbu elektrónov v atómoch. Dosah je nekonečný a sila klesá s druhou mocninou vzdialenosti.</p>`,
      `<p><strong>Slabá interakcia</strong> je zodpovedná za beta rozpad, pri ktorom sa kvark $d$ mení na $u$ a vyžiari sa bozón $W^{-}$. Dosah je veľmi krátky, rádovo $10^{-18}\\,\\text{m}$. Mení príchuť kvarkov, čo ostatné interakcie nedokážu.</p>`,
      `<p>Relatívne sily (pre dve častice v jadre) sú približne 1 : $10^{-2}$ : $10^{-6}$ : $10^{-39}$ v poradí silná, elektromagnetická, slabá a gravitačná. Gravitácia je najslabšia, v mikrosvete zanedbateľná.</p>`
    ],
    examples: [
      { task: 'Ktorá interakcia zodpovedá za beta rozpad?',
        steps: ['Pri beta rozpade sa mení kvark $d$ na $u$.', 'Zmena príchuti kvarku je doménou slabej interakcie.', '<strong>Výsledok: slabá interakcia</strong>'] },
      { task: 'Ktorá interakcia drží elektróny v atóme?',
        steps: ['Elektróny majú záporný náboj a jadro kladný.', '<strong>Výsledok: elektromagnetická interakcia</strong>'] }
    ]
  });

  gen('v8-interakcie', () => {
    const strongest = Math.random() < 0.5;
    const ans = strongest ? 'silná' : 'gravitačná';
    const options = shuffle(['silná', 'elektromagnetická', 'slabá', 'gravitačná']);
    const HINT = {
      'silná': T.s('Silná interakcia je najsilnejšia, nie najslabšia. Dosah má však veľmi krátky.'),
      'elektromagnetická': T.s('Elektromagnetická je približne stonásobne slabšia než silná interakcia.'),
      'slabá': T.s('Slabá interakcia je slabšia než elektromagnetická, ale silnejšia než gravitačná.'),
      'gravitačná': T.s('Gravitačná interakcia je najslabšia zo štyroch.')
    };
    return {
      type: 'choice',
      q: strongest
        ? T`Ktorá zo štyroch základných interakcií je najsilnejšia?`
        : T`Ktorá zo štyroch základných interakcií je najslabšia?`,
      options,
      answer: ans,
      choiceHints: hintsFor(options, ans, HINT),
      solution: strongest
        ? T`Najsilnejšia je silná interakcia, relatívna sila približne 1.`
        : T`Najslabšia je gravitačná interakcia, relatívna sila približne $10^{-39}$.`,
      hint: T`Porovnaj relatívne sily: silná, elektromagnetická, slabá a gravitačná.`
    };
  });

  /* ---------- 6. Urýchľovače a detektory ---------- */

  lesson({
    id: 'v8-urychlovace', order: 60, theme: 'moderna', title: 'Urýchľovače častíc a detektory',
    summary: 'Urýchľovanie nabitých častíc, zrážky a rekonštrukcia udalostí v detektore.',
    theory: [
      `<p>Urýchľovač zrýchľuje nabité častice elektrickým poľom. Častica s nábojom $q = z\\,e$ prejde napätím $U$ a získa kinetickú energiu $E_k = z\\,e\\,U$. Ak je napätie v megavoltoch, energia vychádza v MeV.</p>`,
      `<p>Veľké urýchľovače, napríklad LHC v CERNe s obvodom 27 km, udržujú zväzky na kružnici silnými magnetmi a častice v nich zrýchľujú v radoch. Protón–protónové zrážky dosahujú energie rádovo TeV.</p>`,
      `<p>Detektory zaznamenávajú stopy častíc. Stopový detektor v magnetickom poli ukazuje zakrivenie dráhy, z ktorého sa určí hybnosť. Kalorimetre merajú energiu a mionové komory sledujú mióny. Z takých údajov rekonštruujeme, aká častica vznikla.</p>`,
      `<p>Podľa vzťahu $E = m\\,c^2$ sa kinetická energia zrážky môže premeniť na hmotnosť nových častíc. Preto v zrážkach s veľkou energiou vznikajú aj veľmi ťažké častice.</p>`
    ],
    examples: [
      { task: 'Protón urýchlený napätím 5 MV. Akú kinetickú energiu má?',
        steps: ['Pre protón je $z=1$, teda $E_k = e\\,U$.', '$E_k = 5\\,\\text{MeV}$.', '<strong>Výsledok: 5 MeV</strong>'] },
      { task: 'Častica s nábojom $+2e$ prejde napätím 3 MV. Akú energiu získa?',
        steps: ['$z=2$, teda $E_k = 2\\cdot 3\\,\\text{MeV}$.', '<strong>Výsledok: 6 MeV</strong>'] }
    ]
  });

  gen('v8-urychlovace', () => {
    const z = pick([1, 2, 3]), U = pick([1, 2, 5, 10, 20]), ans = z * U;
    return {
      q: T`Častica s nábojom $+${z}e$ prejde urýchľovacím napätím $U=${U}\\,\\text{MV}$. Akú kinetickú energiu získa v MeV?`,
      answer: ans,
      mistakes: dropAns([
        { value: U, msg: T`Nezohľadnil si náboj častice. Energia je $z\\,e\\,U$, nie len $e\\,U$.` },
        { value: ans * 1000, msg: T`Výsledok je v MeV, nie v keV. Pozor: $1\\,\\text{MeV}=10^{6}\\,\\text{eV}$.` }
      ], ans),
      solution: T`$E_k = z\\,e\\,U = ${z}\\cdot ${U}\\,\\text{MeV} = ${ans}\\,\\text{MeV}$.`,
      hint: T`Energia v elektrónvoltoch sa rovná nábojovému číslu $z$ krát napätiu v voltoch.`
    };
  });

  /* ---------- 7. Higgsov bozón a otvorené otázky ---------- */

  lesson({
    id: 'v8-higgs', order: 70, theme: 'moderna', title: 'Higgsov bozón a otvorené otázky',
    summary: 'Higgsovo pole, objav Higgsovho bozónu a nevyriešené problémy modernej fyziky.',
    theory: [
      `<p>Higgsov bozón bol objavený v roku 2012 na LHC. Je kvantom Higgsovho poľa, ktoré je prítomné v celom vesmíre. Častice interagujúce s týmto poľom získavajú hmotnosť; čím silnejšie interagujú, tým sú ťažšie.</p>`,
      `<p>Hmotnosť Higgsovho bozónu je približne 125 GeV/$c^2$, čo je asi 133-násobok hmotnosti protónu. Bozón sa potvrdil cez rozpady na dva fotóny alebo na bozóny $Z$.</p>`,
      `<p>Otvorené otázky: <strong>temná hmota</strong> tvorí približne 27 % energetického obsahu vesmíru a štandardný model ju nepopisuje. <strong>Hmotnosti neutrín</strong> sú malé, ale nenulové, čo pôvodný model nepredpovedal. Štandardný model tiež nezahŕňa <strong>gravitáciu</strong> a nevysvetľuje, prečo je vo vesmíre viac hmoty než antihmoty.</p>`
    ],
    examples: [
      { task: 'Koľkokrát je Higgsov bozón ťažší ako proton (hmotnosť protónu je približne 0,94 GeV/$c^2$)?',
        steps: ['$125/0{,}94\\approx 133$.', '<strong>Výsledok: asi 133-krát</strong>'] },
      { task: 'Aký podiel energie vesmíru tvorí temná hmota, približne?',
        steps: ['Temná hmota tvorí približne 27 % a bežná hmota len asi 5 %.', '<strong>Výsledok: asi 27 %</strong>'] }
    ]
  });

  gen('v8-higgs', () => {
    const [name, m] = pick([[T`proton`, 0.938], [T`pión`, 0.140]]);
    const ans = Math.round(125 / m);
    return {
      q: T`Higgsov bozón má hmotnosť približne 125 GeV/$c^2$. Koľkokrát je ťažší ako ${name}, ak hmotnosť tejto častice je $${mn(m)}\\,\\text{GeV}/c^2$? Zaokrúhli na celé číslo.`,
      answer: ans,
      tol: 1,
      mistakes: dropAns([
        { value: Math.round(125 * m), msg: T`Hmotnosti sa nenásobia. Podiel dostaneš delením: $m_H / m$.` },
        { value: 125, msg: T`To je hmotnosť Higgsovho bozónu v GeV/$c^2$, nie podiel. Podiel dostaneš delením hmotností.` }
      ], ans),
      solution: T`$m_H / m = 125 / ${mn(m)} \\approx ${ans}$, teda približne ${ans}-krát.`,
      hint: T`Koľkokrát je jedna hmotnosť väčšia než druhá? Vydel väčšiu hmotnosť menšou.`
    };
  });
})();
