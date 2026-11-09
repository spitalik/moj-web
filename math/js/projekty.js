/* Projekty z praxe (stránka #/projekty, js/features/projekty.js): slovné úlohy z reálneho života od ZŠ po SŠ.
   Projekt: id, icon, level ('zs' | 'ss'), grades [od, do] (ročník v rámci úrovne), lessons (1–3 naviazané lekcie),
   title (názov, slovensky) a make() → { story, steps, wrap }:
     story – úvodný príbeh (2–4 vety s číslami zadania),
     steps – 3–6 nadväzujúcich krokov v tvare úlohy z generátorov (q, answer, type, tol, hint, solution, show, options),
     wrap  – záverečné zhrnutie (čo si z projektu odniesť).
   Čísla sa žrebujú cez Math.random, ktoré PROJECTS_API.make dočasne nahradí deterministickým generátorom
   (rovnaké semienko = rovnaké zadanie). Správne odpovede ďalších krokov sa počítajú z presných hodnôt, nie zo žiakových odpovedí.
   Texty sú označené značkou T (js/content-i18n.js) – preklad je v balíku js/content-i18n/<jazyk>/projekty.js,
   podklady vytvorí node tools/i18n_extract.js projekty. Desatinné čísla idú cez D (KaTeX) a tx/eur (text). */
(function () {
  'use strict';
  const CI = CONTENT_I18N;
  const { T } = CI;
  // čistá matematika (bez slov mimo $…$, len € či %) sa neprekladá – rovnaký zápis ako T v slovenčine
  const M = (s, ...v) => String.raw({ raw: s }, ...v);

  /* ---------- pomocné funkcie ---------- */
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const nice = (x) => +(+x).toFixed(6);
  // náhodné číslo z rozsahu s krokom (napr. 3 až 5,5 po 0,5)
  const rstep = (a, b, s) => nice(a + s * rnd(0, Math.round((b - a) / s)));
  const r2 = (x) => Math.round(nice(x) * 100) / 100;              // zaokrúhlenie na stotiny (centy)
  const r1 = (x) => Math.round(nice(x) * 10) / 10;
  const r3 = (x) => Math.round(x * 1000) / 1000;
  const dec = () => CI.decimal();
  const group = (s, sep) => s.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  const numIn = (s, th, d) => { const [i, f] = s.split('.'); return group(i, th) + (f ? d + f : ''); };
  const kd = () => (dec() === ',' ? '{,}' : '.');
  const D = (x) => numIn(String(nice(x)), '\\,', kd());                      // do KaTeX: 1\,250{,}5
  const tx = (x) => numIn(String(nice(x)), ' ', dec());                  // do textu: 1 250,5
  const eur = (x) => (Number.isInteger(nice(x)) ? tx(x) : numIn(nice(x).toFixed(2), ' ', dec()));
  const eurD = (x) => (Number.isInteger(nice(x)) ? D(x) : numIn(nice(x).toFixed(2), '\\,', kd()));
  const money = (x) => `${numIn(r2(x).toFixed(2), ' ', dec())} €`;        // zobrazená správna odpoveď
  const deg = (x) => (x * 180) / Math.PI;

  window.PROJECTS = [
    /* ---------- ZŠ ---------- */
    {
      id: 'vylet', icon: '🚌', level: 'zs', grades: [5, 6], lessons: ['r5-slovne', 'r6-desatinne', 'percenta'],
      title: 'Rozpočet na školský výlet',
      make() {
        const n = rnd(18, 28), b = rnd(8, 15), B = b * n;
        const e = rstep(3, 7.5, 0.5), l = rstep(4, 7, 0.5), f = rnd(3, 6), F = f * n;
        const per = nice(b + e + l), tot = nice(per * n), rest = nice(per - f), pct = r1((f / per) * 100);
        return {
          story: T`Trieda s ${n} žiakmi ide na celodenný výlet. Autobus stojí spolu ${eur(B)} €, vstupenka do múzea ${eur(e)} € na žiaka a obed ${eur(l)} € na žiaka. Časť nákladov zaplatí triedny fond, zvyšok žiaci doplatia rovnakým dielom.`,
          steps: [
            { q: T`Koľko eur pripadá na jedného žiaka za autobus?`, answer: b, tol: 0.01, show: money(b),
              hint: T`Celkovú cenu autobusu vydeľ počtom žiakov.`,
              solution: T`$${D(B)} : ${n} = ${b}$, za autobus zaplatí každý žiak ${eur(b)} €.` },
            { q: T`Koľko stojí výlet jedného žiaka spolu (autobus, vstupenka aj obed)?`, answer: per, tol: 0.01, show: money(per),
              hint: T`Sčítaj všetky tri položky na jedného žiaka.`,
              solution: T`$${D(b)} + ${D(e)} + ${D(l)} = ${eurD(per)}$, jeden žiak stojí ${eur(per)} €.` },
            { q: T`Koľko stojí výlet celú triedu?`, answer: tot, tol: 0.01, show: money(tot),
              hint: T`Cenu na jedného žiaka vynásob počtom žiakov.`,
              solution: T`$${n} \\cdot ${eurD(per)} = ${eurD(tot)}$, výlet celej triedy stojí ${eur(tot)} €.` },
            { q: T`Triedny fond prispeje sumou ${eur(F)} €. Koľko eur doplatí každý žiak?`, answer: rest, tol: 0.01, show: money(rest),
              hint: T`Zisti, koľko z fondu pripadá na jedného žiaka, a odčítaj to od ceny na žiaka.`,
              solution: T`Z fondu pripadá na žiaka $${D(F)} : ${n} = ${f}$ €. Doplatok: $${eurD(per)} - ${f} = ${eurD(rest)}$ €.` },
            { q: T`Koľko percent ceny výletu na žiaka pokryje fond? Zaokrúhli na desatiny.`, answer: pct, tol: 0.051, show: `${tx(pct)} %`,
              hint: T`Podiel fondu na žiaka a ceny na žiaka vynásob číslom 100.`,
              solution: T`$\\dfrac{${f}}{${eurD(per)}} \\cdot 100 \\doteq ${D(pct)}$, fond pokryje približne ${tx(pct)} % ceny.` }
          ],
          wrap: T`Náklady najprv rozpíš na jedného žiaka a až potom násob počtom žiakov. Percentom potom ľahko porovnáš, akú veľkú časť pokryje fond.`
        };
      }
    },
    {
      id: 'malovanie', icon: '🎨', level: 'zs', grades: [6, 7], lessons: ['r6-obvod-obsah', 'r6-desatinne'],
      title: 'Maľovanie izby',
      make() {
        const a = rstep(3, 5.5, 0.5), b = rstep(2.5, a, 0.5), h = pick([2.5, 2.6, 2.7, 2.8]);
        const [w1, w2] = pick([[1.2, 1.5], [1.5, 1.5], [2, 1.5], [1, 1.2]]);
        const c = pick([20, 25, 30]), pc = pick([14.9, 17.5, 19.9, 22.4]);
        const door = nice(0.8 * 2), win = nice(w1 * w2);
        const o = nice(2 * (a + b)), gross = nice(o * h), paint = nice(gross - door - win);
        const cans = Math.ceil(nice((2 * paint) / c));
        const cost = nice(cans * pc);
        return {
          story: T`Chceš vymaľovať svoju izbu. Podlaha má rozmery ${tx(a)} m × ${tx(b)} m a izba je vysoká ${tx(h)} m. Dvere merajú ${tx(0.8)} m × 2 m, okno ${tx(w1)} m × ${tx(w2)} m. Jedna plechovka farby vystačí na ${c} m² jednej vrstvy a stojí ${eur(pc)} €.`,
          steps: [
            { q: T`Aký je obvod podlahy izby v metroch?`, answer: o, tol: 0.01,
              hint: T`Obvod obdĺžnika je dvojnásobok súčtu jeho strán.`,
              solution: T`$o = 2 \\cdot (${D(a)} + ${D(b)}) = ${D(o)}$ m.` },
            { q: T`Aký veľký je povrch všetkých štyroch stien v m² (zatiaľ bez odpočítania dverí a okna)?`, answer: gross, tol: 0.01,
              hint: T`Steny po rozvinutí tvoria obdĺžnik, ktorého dĺžka je obvod podlahy a šírka výška izby.`,
              solution: T`$${D(o)} \\cdot ${D(h)} = ${eurD(gross)}$ m².` },
            { q: T`Koľko m² treba natrieť po odpočítaní dverí a okna?`, answer: paint, tol: 0.01,
              hint: T`Vypočítaj obsah dverí aj okna a odčítaj ich od povrchu stien.`,
              solution: T`Dvere: $${D(0.8)} \\cdot 2 = ${D(door)}$ m², okno: $${D(w1)} \\cdot ${D(w2)} = ${D(win)}$ m². Natiera sa $${eurD(gross)} - ${D(door)} - ${D(win)} = ${D(paint)}$ m².` },
            { q: T`Natiera sa na dve vrstvy. Koľko plechoviek farby treba kúpiť?`, answer: cans,
              hint: T`Plochu vynásob dvomi, vydeľ výdatnosťou jednej plechovky a zaokrúhli nahor – časť plechovky sa kúpiť nedá.`,
              solution: T`$2 \\cdot ${D(paint)} = ${D(2 * paint)}$ m², $${D(2 * paint)} : ${c} \\doteq ${D(r2((2 * paint) / c))}$. Zaokrúhlime nahor, počet plechoviek: ${cans}.` },
            { q: T`Koľko eur zaplatíš za farbu?`, answer: cost, tol: 0.01, show: money(cost),
              hint: T`Počet plechoviek vynásob cenou jednej plechovky.`,
              solution: T`$${cans} \\cdot ${eurD(pc)} = ${eurD(cost)}$, za farbu zaplatíš ${eur(cost)} €.` }
          ],
          wrap: T`Plocha stien je obvod podlahy krát výška miestnosti. Pri nákupe materiálu sa vždy zaokrúhľuje nahor, aby farba neskončila v polovici steny.`
        };
      }
    },
    {
      id: 'podlaha', icon: '📐', level: 'zs', grades: [7, 8], lessons: ['r7-pomer', 'r6-obvod-obsah', 'r7-slovne-percenta'],
      title: 'Pôdorys a nová podlaha',
      make() {
        const s = pick([50, 100]);
        const x = s === 50 ? rstep(8, 12, 0.2) : rstep(4, 6.5, 0.1);
        const y = s === 50 ? rstep(6, x - 0.2, 0.2) : rstep(3, x - 0.1, 0.1);
        const X = nice((x * s) / 100), Y = nice((y * s) / 100), A = nice(X * Y), need = nice(A * 1.1);
        const p = pick([1.8, 2, 2.2, 2.4]), pp = pick([15.9, 18.5, 21.9, 24.9]);
        const packs = Math.ceil(nice(need / p)), cost = nice(packs * pp);
        return {
          story: T`Na pôdoryse bytu v mierke 1 : ${s} má obývačka tvar obdĺžnika s rozmermi ${tx(x)} cm × ${tx(y)} cm. Chceš do nej položiť laminátovú podlahu. Jedno balenie pokryje ${tx(p)} m² a stojí ${eur(pp)} €. Na odrezky sa pripočítava 10 % plochy.`,
          steps: [
            { q: T`Aká dlhá je obývačka v skutočnosti (v metroch)?`, answer: X, tol: 0.001,
              hint: T`Mierka 1 : ${s} znamená, že 1 cm na pláne je ${s} cm v skutočnosti. Potom preveď centimetre na metre.`,
              solution: T`$${D(x)} \\cdot ${s} = ${D(x * s)}$ cm $= ${D(X)}$ m.` },
            { q: T`Aká široká je obývačka v skutočnosti (v metroch)?`, answer: Y, tol: 0.001,
              hint: T`Postupuj rovnako ako pri dĺžke.`,
              solution: T`$${D(y)} \\cdot ${s} = ${D(y * s)}$ cm $= ${D(Y)}$ m.` },
            { q: T`Aký je obsah podlahy obývačky v m²?`, answer: A, tol: 0.01,
              hint: T`Obsah obdĺžnika je súčin jeho dĺžky a šírky v skutočných rozmeroch.`,
              solution: T`$S = ${D(X)} \\cdot ${D(Y)} = ${D(A)}$ m².` },
            { q: T`Koľko m² podlahy treba kúpiť aj s 10 % na odrezky?`, answer: need, tol: 0.01,
              hint: T`Plochu zväčšenú o 10 % dostaneš vynásobením číslom ${tx(1.1)}.`,
              solution: T`$${D(A)} \\cdot ${D(1.1)} = ${D(need)}$ m².` },
            { q: T`Koľko balení laminátu treba kúpiť?`, answer: packs,
              hint: T`Potrebnú plochu vydeľ plochou jedného balenia a zaokrúhli nahor.`,
              solution: T`$${D(need)} : ${D(p)} \\doteq ${D(r2(need / p))}$. Zaokrúhlime nahor, počet balení: ${packs}.` },
            { q: T`Koľko eur zaplatíš za laminát?`, answer: cost, tol: 0.01, show: money(cost),
              hint: T`Počet balení vynásob cenou jedného balenia.`,
              solution: T`$${packs} \\cdot ${eurD(pp)} = ${eurD(cost)}$, za laminát zaplatíš ${eur(cost)} €.` }
          ],
          wrap: T`Rozmery z plánu najprv preveď mierkou na skutočné a až potom počítaj obsah. Obsah sa nemení podľa mierky, ale podľa jej druhej mocniny – pri mierke 1 : 50 je skutočná plocha 2 500-krát väčšia.`
        };
      }
    },
    {
      id: 'cesta', icon: '🚗', level: 'zs', grades: [7, 8], lessons: ['r7-umernost', 'r5-jednotky', 'r6-desatinne'],
      title: 'Cesta autom na dovolenku',
      make() {
        const v = pick([60, 70, 80, 90, 100]), t = pick([1.5, 2, 2.5, 3, 3.5, 4]), s = nice(v * t);
        const z = pick([15, 20, 25, 30]), c = rstep(4.8, 7.6, 0.1), p = rstep(1.49, 1.79, 0.01), k = rnd(2, 5);
        const min = nice(t * 60 + z), fuel = nice((s * c) / 100), cost = r2(fuel * p), each = r2(cost / k);
        return {
          story: T`Rodina ide autom na dovolenku vzdialenú ${s} km. Auto pôjde priemernou rýchlosťou ${v} km/h a cestou si dajú jednu prestávku na ${z} minút. Auto spotrebuje ${tx(c)} litra benzínu na 100 km, liter stojí ${eur(p)} €. Náklady na palivo si cestujúci rozdelia rovnakým dielom – v aute ich je ${k}.`,
          steps: [
            { q: T`Koľko hodín trvá samotná jazda (bez prestávky)?`, answer: t, tol: 0.01,
              hint: T`Čas = dráha : rýchlosť.`,
              solution: T`$t = ${s} : ${v} = ${D(t)}$ h.` },
            { q: T`Koľko minút trvá celá cesta aj s prestávkou?`, answer: min,
              hint: T`Hodiny preveď na minúty (1 h = 60 min) a pripočítaj prestávku.`,
              solution: T`$${D(t)} \\cdot 60 + ${z} = ${D(t * 60)} + ${z} = ${D(min)}$ min.` },
            { q: T`Koľko litrov benzínu auto na celú cestu spotrebuje?`, answer: fuel, tol: 0.01,
              hint: T`Spotreba je na 100 km – zisti, koľkokrát 100 km je v celej trase.`,
              solution: T`$${s} : 100 \\cdot ${D(c)} = ${D(fuel)}$ l.` },
            { q: T`Koľko eur stojí palivo? Zaokrúhli na centy.`, answer: cost, tol: 0.011, show: money(cost),
              hint: T`Počet litrov vynásob cenou jedného litra.`,
              solution: T`$${D(fuel)} \\cdot ${eurD(p)} \\doteq ${eurD(cost)}$, palivo stojí približne ${eur(cost)} €.` },
            { q: T`Koľko eur zaplatí za palivo každý cestujúci? Zaokrúhli na centy.`, answer: each, tol: 0.011, show: money(each),
              hint: T`Cenu paliva vydeľ počtom cestujúcich.`,
              solution: M`$${eurD(cost)} : ${k} \\doteq ${eurD(each)}$ €.` }
          ],
          wrap: T`Čas jazdy aj spotreba sú priamo úmerné dĺžke cesty: pri rovnakej rýchlosti znamená dvakrát dlhšia cesta dvakrát viac času za volantom aj dvakrát viac paliva.`
        };
      }
    },
    {
      id: 'statistika', icon: '📱', level: 'zs', grades: [8, 9], lessons: ['r8-statistika', 'r9-statistika', 's4-charakteristiky'],
      title: 'Štatistika z vlastného merania',
      make() {
        const median = (arr) => { const s = [...arr].sort((u, w) => u - w), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
        let data, X, mean, med, mean2, med2;
        // medián sa extrémnou hodnotou zmení zreteľne menej ako priemer (pri náhodných dátach takmer vždy)
        for (let g = 0; g < 50; g++) {
          data = Array.from({ length: 10 }, () => rnd(35, 120));
          X = rnd(200, 260);
          mean = nice(data.reduce((u, w) => u + w, 0) / 10);
          med = median(data);
          mean2 = (mean * 10 + X) / 11;
          med2 = median([...data, X]);
          if (Math.abs(med2 - med) < Math.abs(mean2 - mean) - 0.5) break;
        }
        const sum = data.reduce((u, w) => u + w, 0), sorted = [...data].sort((u, w) => u - w);
        const range = sorted[9] - sorted[0], m2 = r2(mean2);
        const optMean = T.s('priemer'), optMed = T.s('medián');
        const which = Math.abs(med2 - med) < Math.abs(mean2 - mean) ? optMean : optMed;
        return {
          story: T`Desať dní si zapisuješ, koľko minút denne strávíš na mobile. Namerané hodnoty v minútach: ${data.join(', ')}. Chceš zistiť, ako vyzerá tvoj „typický“ deň.`,
          steps: [
            { q: T`Aký je aritmetický priemer nameraných hodnôt (v minútach)?`, answer: mean, tol: 0.01,
              hint: T`Sčítaj všetkých 10 hodnôt a súčet vydeľ počtom hodnôt.`,
              solution: T`Súčet je $${sum}$, priemer $${sum} : 10 = ${D(mean)}$ min.` },
            { q: T`Aký je medián nameraných hodnôt?`, answer: med, tol: 0.01,
              hint: T`Usporiadaj hodnoty podľa veľkosti. Pri párnom počte je medián priemer dvoch prostredných hodnôt.`,
              solution: T`Usporiadané hodnoty: ${sorted.join(', ')}. Medián je $(${sorted[4]} + ${sorted[5]}) : 2 = ${D(med)}$ min.` },
            { q: T`Aké je variačné rozpätie (rozdiel najväčšej a najmenšej hodnoty)?`, answer: range,
              hint: T`Od najväčšej hodnoty odčítaj najmenšiu.`,
              solution: T`$${sorted[9]} - ${sorted[0]} = ${range}$ min.` },
            { q: T`Na jedenásty deň, počas choroby, pribudne hodnota ${X} minút. Aký je nový priemer všetkých 11 hodnôt? Zaokrúhli na stotiny.`, answer: m2, tol: 0.011,
              hint: T`Nový súčet je pôvodný súčet zväčšený o ${X}. Vydeľ ho číslom 11.`,
              solution: T`$(${sum} + ${X}) : 11 = ${sum + X} : 11 \\doteq ${D(m2)}$ min.` },
            { q: T`Aký je nový medián všetkých 11 hodnôt?`, answer: med2, tol: 0.01,
              hint: T`Pri nepárnom počte hodnôt je medián prostredná, teda šiesta hodnota v usporiadanom poradí.`,
              solution: T`Hodnota ${X} je najväčšia, prostrednou (šiestou) hodnotou je teraz $${D(med2)}$ min.` },
            { q: T`Ktorá charakteristika sa jedným extrémnym dňom zmenila viac?`, type: 'choice', options: [optMean, optMed], answer: which,
              hint: T`Porovnaj, o koľko sa zmenil priemer a o koľko medián.`,
              solution: T`Priemer sa zmenil približne o $${D(r2(Math.abs(mean2 - mean)))}$ min, medián len o $${D(Math.abs(med2 - med))}$ min. Medián je voči extrémnym hodnotám odolnejší.` }
          ],
          wrap: T`Priemer citlivo reaguje na jednu výnimočnú hodnotu, medián takmer vôbec. Keď sú v dátach extrémy, „typický“ deň lepšie opíše medián.`
        };
      }
    },
    {
      id: 'krabica', icon: '📦', level: 'zs', grades: [8, 9], lessons: ['r8-hranoly', 'r5-jednotky'],
      title: 'Krabica z kartónu',
      make() {
        const a = pick([30, 36, 40, 42, 48]), b = a - pick([0, 6, 10, 12]), x = rnd(3, 7);
        const L = a - 2 * x, W = b - 2 * x, V = x * L * W, lit = nice(V / 1000);
        const vol = (c) => c * (a - 2 * c) * (b - 2 * c);
        // ponuka rezov s jednoznačným najväčším objemom
        let cand = [2, 4, 6, 8];
        for (const set of [[2, 4, 6, 8], [3, 5, 7, 9], [2, 5, 8, 11], [4, 6, 8, 10]]) {
          const vs = set.map(vol), best = Math.max(...vs);
          if (vs.filter((u) => u === best).length === 1) { cand = set; break; }
        }
        const vs = cand.map(vol), bestX = cand[vs.indexOf(Math.max(...vs))];
        return {
          story: T`Z obdĺžnikového kartónu s rozmermi ${a} cm × ${b} cm chceš zložiť krabicu bez veka. V každom rohu vystrihneš štvorec so stranou ${x} cm a okraje ohneš nahor.`,
          steps: [
            { q: T`Aká dlhá bude podstava krabice (v cm)?`, answer: L,
              hint: T`Z dlhšej strany kartónu ubudnú dva vystrihnuté štvorce – na každom konci jeden.`,
              solution: T`$${a} - 2 \\cdot ${x} = ${L}$ cm.` },
            { q: T`Aká široká bude podstava krabice (v cm)?`, answer: W,
              hint: T`Aj z kratšej strany ubudne dvakrát strana štvorca.`,
              solution: T`$${b} - 2 \\cdot ${x} = ${W}$ cm.` },
            { q: T`Aký objem bude mať krabica v cm³?`, answer: V,
              hint: T`Krabica je kváder: dĺžka · šírka · výška. Výška je strana vystrihnutého štvorca.`,
              solution: T`$V = ${L} \\cdot ${W} \\cdot ${x} = ${D(V)}$ cm³.` },
            { q: T`Koľko litrov sa zmestí do krabice?`, answer: lit, tol: 0.001,
              hint: T`1 liter = 1 dm³ = 1 000 cm³.`,
              solution: T`$${D(V)} : 1000 = ${D(lit)}$ l.` },
            { q: T`Pri ktorom z týchto rezov bude mať krabica najväčší objem?`, type: 'choice', options: cand.map((c) => `${c} cm`), answer: `${bestX} cm`,
              hint: T`Pre každú možnosť vypočítaj objem rovnako ako v predchádzajúcich krokoch.`,
              solution: T`Objemy v cm³: ${cand.map((c, i) => `$${c} \\to ${D(vs[i])}$`).join(', ')}. Najväčší objem dáva rez ${bestX} cm.` }
          ],
          wrap: T`Malý rez dá plytkú krabicu, veľký rez úzku. Najväčší objem je niekde medzi – presne ho na strednej škole nájdeš deriváciou.`
        };
      }
    },
    /* ---------- SŠ ---------- */
    {
      id: 'pausal', icon: '📞', level: 'ss', grades: [1, 2], lessons: ['r9-funkcie', 's2-linearna', 'r8-rovnice'],
      title: 'Mobilný paušál: ktorý je výhodnejší?',
      make() {
        const d = rnd(2, 6), x0 = rnd(6, 30) * 10, diff = nice((d * x0) / 100);
        const a = rstep(3, 8, 0.5), p = rnd(d + 3, 12), b = nice(a + diff), q = p - d;
        let m = rnd(5, 25) * 10;
        if (m === x0) m += 10;
        const cA = (u) => nice(a + (p * u) / 100), cB = (u) => nice(b + (q * u) / 100);
        const fm = Math.max(10, x0 + pick([-1, 1]) * rnd(3, 10) * 10);
        const optA = T.s('Paušál A'), optB = T.s('Paušál B');
        const cheaper = cA(fm) < cB(fm) ? optA : optB;
        const year = nice(Math.abs(cA(fm) - cB(fm)) * 12);
        return {
          story: T`Vyberáš si mobilný paušál. Paušál A stojí ${eur(a)} € mesačne a každá prevolaná minúta ${p} centov. Paušál B stojí ${eur(b)} € mesačne a minúta ${q} centov. Cena za mesiac je lineárna funkcia počtu minút.`,
          steps: [
            { q: T`Koľko eur zaplatíš za mesiac pri paušále A, ak prevoláš ${m} minút?`, answer: cA(m), tol: 0.01, show: money(cA(m)),
              hint: T`Cena = mesačný poplatok + počet minút · cena minúty (centy preveď na eurá).`,
              solution: M`$${eurD(a)} + ${m} \\cdot ${D(p / 100)} = ${eurD(cA(m))}$ €.` },
            { q: T`Koľko eur zaplatíš za mesiac pri paušále B, ak prevoláš ${m} minút?`, answer: cB(m), tol: 0.01, show: money(cB(m)),
              hint: T`Postupuj rovnako ako pri paušále A.`,
              solution: M`$${eurD(b)} + ${m} \\cdot ${D(q / 100)} = ${eurD(cB(m))}$ €.` },
            { q: T`Pri koľkých minútach mesačne stoja oba paušály rovnako?`, answer: x0, tol: 0.01,
              hint: T`Polož $f_A(x) = f_B(x)$ a vyrieš lineárnu rovnicu.`,
              solution: T`$${eurD(a)} + ${D(p / 100)}x = ${eurD(b)} + ${D(q / 100)}x \\Rightarrow ${D(d / 100)}x = ${D(diff)} \\Rightarrow x = ${x0}$ minút.` },
            { q: T`Tvoja kamarátka prevolá mesačne ${fm} minút. Ktorý paušál je pre ňu lacnejší?`, type: 'choice', options: [optA, optB], answer: cheaper,
              hint: T`Porovnaj ${fm} s bodom zlomu. Za ním je výhodnejší paušál s lacnejšou minútou.`,
              solution: T`Paušál A: $${eurD(cA(fm))}$ €, paušál B: $${eurD(cB(fm))}$ €. Lacnejší je ${cheaper}.` },
            { q: T`Koľko eur ušetrí kamarátka za rok, ak si vyberie lacnejší paušál?`, answer: year, tol: 0.01, show: money(year),
              hint: T`Mesačný rozdiel cien vynásob dvanástimi.`,
              solution: M`$|${eurD(cA(fm))} - ${eurD(cB(fm))}| \\cdot 12 = ${eurD(year)}$ €.` }
          ],
          wrap: T`Grafy oboch paušálov sú priamky, ktoré sa pretínajú v bode zlomu. Pod ním je výhodnejší nižší mesačný poplatok, nad ním lacnejšia minúta.`
        };
      }
    },
    {
      id: 'zahradka', icon: '🌱', level: 'ss', grades: [2, 4], lessons: ['s2-kvadraticka-funkcia', 's4-extremy'],
      title: 'Záhradka pri múre',
      make() {
        const L = 4 * rnd(6, 20);
        let x1 = rnd(2, L / 2 - 2);
        if (x1 === L / 4) x1 += 1;
        const y1 = L - 2 * x1, S1 = x1 * y1, xm = L / 4, Smax = (L * L) / 8;
        // možnosti sú čistá matematika (bez slov) – neprekladajú sa
        const right = `$S(x) = x\\,(${L} - 2x)$`;
        const opts = [right, `$S(x) = x\\,(${L} - x)$`, `$S(x) = 2x\\,(${L} - x)$`, `$S(x) = x\\,(${L / 2} - x)$`];
        return {
          story: T`Pri múre záhrady chceš ohradiť obdĺžnikovú záhradku. Múr tvorí jednu stranu, na zvyšné tri strany máš ${L} m pletiva. Dĺžku strán kolmých na múr označíme $x$.`,
          steps: [
            { q: T`Ak sú strany kolmé na múr dlhé ${x1} m, aká dlhá je strana rovnobežná s múrom?`, answer: y1,
              hint: T`Pletivo pokryje dve kolmé strany a jednu rovnobežnú.`,
              solution: T`$${L} - 2 \\cdot ${x1} = ${y1}$ m.` },
            { q: T`Aký obsah má záhradka v tomto prípade (v m²)?`, answer: S1,
              hint: T`Obsah obdĺžnika je súčin jeho strán.`,
              solution: T`$S = ${x1} \\cdot ${y1} = ${S1}$ m².` },
            { q: T`Ktorá funkcia vyjadruje obsah záhradky v závislosti od $x$?`, type: 'choice', options: opts, answer: right,
              hint: T`Strana rovnobežná s múrom je to, čo zostane z pletiva po dvoch stranách dĺžky $x$.`,
              solution: T`Rovnobežná strana má dĺžku $${L} - 2x$, preto $S(x) = x\\,(${L} - 2x) = -2x^2 + ${L}x$.` },
            { q: T`Pri akom $x$ (v metroch) je obsah záhradky najväčší?`, answer: xm,
              hint: T`Graf je parabola otvorená nadol. Maximum je vo vrchole: $x = -\\dfrac{b}{2a}$.`,
              solution: T`$x = -\\dfrac{${L}}{2 \\cdot (-2)} = ${xm}$ m.` },
            { q: T`Aký je najväčší možný obsah záhradky (v m²)?`, answer: Smax,
              hint: T`Dosaď nájdené $x$ do funkcie $S(x)$.`,
              solution: T`$S(${xm}) = ${xm} \\cdot (${L} - ${2 * xm}) = ${xm} \\cdot ${L / 2} = ${Smax}$ m².` }
          ],
          wrap: T`Najväčšiu záhradku dostaneš, keď je strana pri múre dvakrát dlhšia ako strany kolmé na múr. Maximum kvadratickej funkcie nájdeš vo vrchole paraboly.`
        };
      }
    },
    {
      id: 'strom', icon: '🌳', level: 'ss', grades: [1, 3], lessons: ['r9-podobnost', 's2-podobnost', 'goniometria'],
      title: 'Ako vysoký je strom?',
      make() {
        let k = 0.8, t = 2, h = 1.6;
        for (let g = 0; g < 200; g++) {
          const k1 = pick([0.5, 0.6, 0.75, 0.8, 1.25]), t1 = rstep(1.2, 3.6, 0.1), h1 = nice(k1 * t1);
          if (h1 >= 1.45 && h1 <= 1.95 && Number.isInteger(nice(h1 * 100))) { k = k1; t = t1; h = h1; break; }
        }
        const S = rstep(6, 20, 0.5), H = nice(k * S), alpha = r1(deg(Math.atan(k)));
        const beta = pick([25, 30, 35, 40]), sh = r2(H / Math.tan((beta * Math.PI) / 180));
        return {
          story: T`Chceš zistiť výšku stromu bez lezenia. Meriaš ${tx(h)} m a tvoj tieň je v rovnakom čase dlhý ${tx(t)} m. Tieň stromu meria ${tx(S)} m. Slnečné lúče sú rovnobežné, preto ty, strom a vaše tiene tvoríte podobné pravouhlé trojuholníky.`,
          steps: [
            { q: T`Aký je pomer tvojej výšky k dĺžke tvojho tieňa (výška : tieň) ako desatinné číslo?`, answer: k, tol: 0.001,
              hint: T`Vydeľ svoju výšku dĺžkou svojho tieňa.`,
              solution: M`$${D(h)} : ${D(t)} = ${D(k)}$.` },
            { q: T`Aký vysoký je strom (v metroch)?`, answer: H, tol: 0.01,
              hint: T`V podobných trojuholníkoch je pomer výška : tieň rovnaký. Tieň stromu vynásob pomerom z predchádzajúceho kroku.`,
              solution: T`$v = ${D(k)} \\cdot ${D(S)} = ${D(H)}$ m.` },
            { q: T`Pod akým uhlom dopadajú slnečné lúče na zem? Výsledok v stupňoch zaokrúhli na desatiny.`, answer: alpha, tol: 0.11,
              hint: T`V pravouhlom trojuholníku platí $\\operatorname{tg}\\alpha = \\dfrac{\\text{výška}}{\\text{tieň}}$.`,
              solution: T`$\\operatorname{tg}\\alpha = ${D(k)}$, takže $\\alpha \\doteq ${D(alpha)}^\\circ$.` },
            { q: T`Neskôr popoludní dopadajú lúče pod uhlom ${beta}°. Aký dlhý bude vtedy tieň stromu v metroch? Zaokrúhli na stotiny.`, answer: sh, tol: 0.011,
              hint: T`Tieň = výška stromu : $\\operatorname{tg} ${beta}^\\circ$.`,
              solution: T`$${D(H)} : \\operatorname{tg} ${beta}^\\circ \\doteq ${D(sh)}$ m.` }
          ],
          wrap: T`Podobnosť trojuholníkov a tangens uhla sú dva pohľady na to isté: pomer výšky a tieňa je v danom okamihu rovnaký pre všetky predmety.`
        };
      }
    },
    {
      id: 'kocky', icon: '🎲', level: 'ss', grades: [2, 3], lessons: ['r7-kombinatorika', 's3-pravdepodobnost'],
      title: 'Hra s dvoma kockami',
      make() {
        const s = rnd(4, 10), K = rnd(8, 11), V = rnd(2, 6);
        const ways = (u) => 6 - Math.abs(u - 7);
        const c = ways(s);
        let cK = 0;
        for (let u = K; u <= 12; u++) cK += ways(u);
        const P = c / 36, PK = cK / 36, E = r2(PK * V - 1);
        const fair = cK * V - 36;
        const oWin = T.s('výhodná pre hráča'), oLose = T.s('nevýhodná pre hráča'), oFair = T.s('spravodlivá');
        const verdict = fair > 0 ? oWin : fair < 0 ? oLose : oFair;
        const fr = (u) => `\\dfrac{${u}}{36}`;
        const one = Math.max(1, s - 6);
        return {
          story: T`Na školskom jarmoku vymyslíš hru: hráč zaplatí 1 € a hodí naraz dvoma kockami. Ak je súčet bodov aspoň ${K}, dostane výhru ${V} €, inak nedostane nič. Chceš vedieť, či hra nebude pre stánok stratová.`,
          steps: [
            { q: T`Koľko rôznych výsledkov (usporiadaných dvojíc čísel) môže padnúť na dvoch kockách?`, answer: 36,
              hint: T`Každé číslo na prvej kocke sa môže spojiť s každým číslom na druhej kocke.`,
              solution: M`$6 \\cdot 6 = 36$.` },
            { q: T`Pri koľkých z nich je súčet presne ${s}?`, answer: c,
              hint: T`Vypíš dvojice (prvá kocka, druhá kocka) so súčtom ${s}.`,
              solution: T`Dvojice začínajú od $${one} + ${s - one}$, ich počet je ${c}.` },
            { q: T`Aká je pravdepodobnosť, že súčet bude presne ${s}? Môžeš ju napísať aj ako zlomok.`, answer: P, tol: 0.001, show: `$${fr(c)} \\doteq ${D(r3(P))}$`,
              hint: T`Pravdepodobnosť = počet priaznivých výsledkov : počet všetkých výsledkov.`,
              solution: M`$P = ${fr(c)} \\doteq ${D(r3(P))}$.` },
            { q: T`Aká je pravdepodobnosť výhry, teda že súčet bude aspoň ${K}?`, answer: PK, tol: 0.001, show: `$${fr(cK)} \\doteq ${D(r3(PK))}$`,
              hint: T`Sčítaj počty dvojíc pre všetky súčty od ${K} po 12.`,
              solution: T`Počet priaznivých dvojíc: ${cK}, preto $P = ${fr(cK)} \\doteq ${D(r3(PK))}$.` },
            { q: T`Aký je stredný (priemerný) zisk hráča v eurách na jednu hru? Zaokrúhli na centy, strata je záporné číslo.`, answer: E, tol: 0.011, signed: true, show: money(E),
              hint: T`Priemerná výhra je pravdepodobnosť výhry · ${V} €, od nej odčítaj vklad 1 €.`,
              solution: M`$${fr(cK)} \\cdot ${V} - 1 \\doteq ${eurD(E)}$ €.` },
            { q: T`Aká je táto hra?`, type: 'choice', options: [oWin, oLose, oFair], answer: verdict,
              hint: T`Rozhoduje znamienko stredného zisku hráča.`,
              solution: T`Stredný zisk hráča je $${eurD(E)}$ €, hra je teda ${verdict}.` }
          ],
          wrap: T`Pri hre s náhodou rozhoduje stredná hodnota zisku: ak je pre hráča záporná, z dlhodobého hľadiska vyhráva ten, kto hru organizuje.`
        };
      }
    },
    {
      id: 'sporenie', icon: '🐷', level: 'ss', grades: [3, 4], lessons: ['s3-financna', 's2-exponencialne', 's2-logaritmy'],
      title: 'Sporenie a zložené úročenie',
      make() {
        const P = rnd(2, 10) * 500, r = rstep(1.5, 4.5, 0.5), n = rnd(4, 10);
        const gross = nice((P * r) / 100), net = nice(gross * 0.81), bal = nice(P + net);
        const q = nice(1 + (0.81 * r) / 100), Bn = r2(P * q ** n);
        const goal = pick([1.2, 1.25, 1.3]), years = Math.ceil(Math.log(goal) / Math.log(q) - 1e-9);
        return {
          story: T`Uložíš si ${eur(P)} € na termínovaný účet s ročnou úrokovou mierou ${tx(r)} %. Úroky sa pripisujú raz ročne a z každého úroku banka odvedie daň 19 %. Peniaze z účtu nevyberáš, úroky sa ďalej úročia.`,
          steps: [
            { q: T`Aký úrok (pred zdanením) ti banka pripíše za prvý rok?`, answer: gross, tol: 0.01, show: money(gross),
              hint: T`Vypočítaj ${tx(r)} % z vkladu.`,
              solution: M`$${D(P)} \\cdot ${D(r / 100)} = ${eurD(gross)}$ €.` },
            { q: T`Koľko z úroku ti zostane po zaplatení dane 19 %?`, answer: net, tol: 0.01, show: money(net),
              hint: T`Po odvedení dane zostane 81 % úroku.`,
              solution: M`$${eurD(gross)} \\cdot ${D(0.81)} = ${eurD(net)}$ €.` },
            { q: T`Koľko eur bude na účte po prvom roku?`, answer: bal, tol: 0.01, show: money(bal),
              hint: T`K vkladu pripočítaj čistý úrok.`,
              solution: M`$${D(P)} + ${eurD(net)} = ${eurD(bal)}$ €.` },
            { q: T`Koľko eur bude na účte po ${n} rokoch? Zaokrúhli na centy.`, answer: Bn, tol: 0.03, show: money(Bn),
              hint: T`Každý rok sa suma vynásobí rovnakým koeficientom $q = 1 + ${D((0.81 * r) / 100)}$. Po $n$ rokoch je na účte $P \\cdot q^n$.`,
              solution: M`$q = 1 + ${D(0.81)} \\cdot ${D(r / 100)} = ${D(q)}$, $${D(P)} \\cdot ${D(q)}^{${n}} \\doteq ${eurD(Bn)}$ €.` },
            { q: T`Po koľkých celých rokoch bude na účte prvýkrát aspoň o ${tx(Math.round((goal - 1) * 100))} % viac, ako bol pôvodný vklad?`, answer: years,
              hint: T`Rieš nerovnicu $q^n \\ge ${D(goal)}$ logaritmovaním a výsledok zaokrúhli nahor na celé roky.`,
              solution: T`$n \\ge \\dfrac{\\log ${D(goal)}}{\\log ${D(q)}} \\doteq ${D(r2(Math.log(goal) / Math.log(q)))}$, teda po ${years} rokoch.` }
          ],
          wrap: T`Pri zloženom úročení rastie suma geometricky – každý rok sa násobí rovnakým koeficientom. Daň z úrokov tento koeficient zmenšuje, preto počítaj s čistou úrokovou mierou.`
        };
      }
    },
    {
      id: 'uver', icon: '🏦', level: 'ss', grades: [3, 4], lessons: ['s3-financna', 's3-geometricka'],
      title: 'Úver a mesačná splátka',
      make() {
        const U = rnd(5, 15) * 1000, i = pick([3.6, 4.8, 6, 7.2, 8.4, 9.6]), n = pick([24, 36, 48, 60]);
        const m = nice(i / 12), q = nice(1 + m / 100);
        const first = r2((U * m) / 100);
        const a = r2((U * q ** n * (q - 1)) / (q ** n - 1));
        const total = r2(a * n), over = r2(total - U);
        return {
          story: T`Na kúpu ojazdeného auta si berieš úver ${eur(U)} € s ročnou úrokovou mierou ${tx(i)} %. Úrok sa počíta mesačne (mesačná miera je dvanástina ročnej) a úver splatíš rovnakými mesačnými splátkami počas ${n} mesiacov.`,
          steps: [
            { q: T`Aká je mesačná úroková miera v percentách?`, answer: m, tol: 0.001,
              hint: T`Ročnú mieru vydeľ dvanástimi.`,
              solution: M`$${D(i)} : 12 = ${D(m)}$ %.` },
            { q: T`Aký úrok (v eurách) sa naúčtuje za prvý mesiac?`, answer: first, tol: 0.01, show: money(first),
              hint: T`Vypočítaj ${tx(m)} % z dlžnej sumy.`,
              solution: M`$${D(U)} \\cdot ${D(m / 100)} = ${eurD(first)}$ €.` },
            { q: T`Aká je mesačná splátka? Zaokrúhli na centy.`, answer: a, tol: 0.011, show: money(a),
              hint: T`Použi vzorec $a = U \\cdot \\dfrac{q^n (q - 1)}{q^n - 1}$, kde $q = ${D(q)}$ a $n = ${n}$.`,
              solution: M`$a = ${D(U)} \\cdot \\dfrac{${D(q)}^{${n}} \\cdot ${D(nice(q - 1))}}{${D(q)}^{${n}} - 1} \\doteq ${eurD(a)}$ €.` },
            { q: T`Koľko eur spolu zaplatíš za celý úver (splátka zaokrúhlená na centy)?`, answer: total, tol: 0.011, show: money(total),
              hint: T`Mesačnú splátku vynásob počtom mesiacov.`,
              solution: M`$${n} \\cdot ${eurD(a)} = ${eurD(total)}$ €.` },
            { q: T`Koľko eur preplatíš oproti požičanej sume?`, answer: over, tol: 0.011, show: money(over),
              hint: T`Od celkovej zaplatenej sumy odčítaj výšku úveru.`,
              solution: M`$${eurD(total)} - ${D(U)} = ${eurD(over)}$ €.` }
          ],
          wrap: T`Splátka úveru vychádza zo súčtu geometrickej postupnosti. Čím dlhšie splácaš, tým je splátka nižšia, no tým viac spolu preplatíš na úrokoch.`
        };
      }
    }
  ];

  /* Vytvorenie zadania projektu v jazyku obsahu: rovnaké semienko = rovnaké čísla aj texty.
     Kroky dostanú tvar úlohy pre PROBLEM.mount (type, lang, project). */
  function make(id, lang, seed) {
    const p = window.PROJECTS.find((x) => x.id === id);
    if (!p) throw new Error('Neznámy projekt: ' + id);
    if (seed === undefined || seed === null) seed = Math.floor(Math.random() * 2147483647);
    return EXERCISES.withSeed(seed, () => CI.run(lang, null, () => {
      const r = p.make();
      const steps = r.steps.map((s) => Object.assign({ type: 'num' }, s, { lang: CI.lang(), project: id }));
      return { id, seed, lang: CI.lang(), title: T.s(p.title), story: r.story, wrap: r.wrap, steps };
    }));
  }

  window.PROJECTS_API = { make };
})();
