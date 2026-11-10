/* Projekty z praxe (stránka #/projekty, js/features/projekty.js): fyzika v bežnom živote od ZŠ po VŠ.
   Projekt: id, icon, level ('zs' | 'ss' | 'vs'), grades [od, do] (ročník v rámci úrovne), lessons (1–3 naviazané lekcie),
   title (názov, slovensky) a make() → { story, steps, wrap }:
     story – úvodný príbeh (2–5 viet so zadanými hodnotami),
     steps – 3–6 nadväzujúcich krokov v tvare úlohy z generátorov (q, answer, type, tol, hint, solution, show, options, mistakes),
     wrap  – záverečné zhrnutie (čo si z projektu odniesť).
   Čísla sa žrebujú cez Math.random, ktoré PROJECTS_API.make dočasne nahradí deterministickým generátorom
   (rovnaké semienko = rovnaké zadanie). Ak krok používa výsledok zaokrúhlený v predchádzajúcom kroku, počíta sa
   s tou istou zaokrúhlenou hodnotou (je v riešení) a tolerancia pokryje aj výpočet s presnou hodnotou.
   Texty sú označené značkou T (js/content-i18n.js), čistá matematika s jednotkami (M) sa neprekladá – jednotky SI
   sú v KaTeX (\text{m/s}) vo všetkých jazykoch rovnaké. Preklad je v balíku js/content-i18n/<jazyk>/projekty.js.
   Desatinné čísla idú cez D (KaTeX) a tx/eur (text), číslo s jednotkou cez u (KaTeX bez $) a U (zobrazená odpoveď). */
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
  // náhodné číslo z rozsahu s krokom (napr. 0,08 až 0,2 po 0,01)
  const rstep = (a, b, s) => nice(a + s * rnd(0, Math.round((b - a) / s)));
  const rd = (x, n) => { const k = 10 ** n; return Math.round(nice(x) * k) / k; };
  const r1 = (x) => rd(x, 1), r2 = (x) => rd(x, 2), r3 = (x) => rd(x, 3);
  const dec = () => CI.decimal();
  const group = (s, sep) => s.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  const numIn = (s, th, d) => { const [i, f] = s.split('.'); return group(i, th) + (f ? d + f : ''); };
  const kd = () => (dec() === ',' ? '{,}' : '.');
  const D = (x) => numIn(String(nice(x)), '\\,', kd());                      // do KaTeX: 1\,250{,}5
  const tx = (x) => numIn(String(nice(x)), ' ', dec());                  // do textu: 1 250,5
  const eur = (x) => (Number.isInteger(nice(x)) ? tx(x) : numIn(nice(x).toFixed(2), ' ', dec()));
  const eurD = (x) => (Number.isInteger(nice(x)) ? D(x) : numIn(nice(x).toFixed(2), '\\,', kd()));
  const money = (x) => `${numIn(r2(x).toFixed(2), ' ', dec())} €`;        // zobrazená správna odpoveď
  // číslo s jednotkou do KaTeX (bez $); jednotka je text (m/s) alebo hotový TeX začínajúci \ alebo {
  const unit = (s) => (/^[\\{]/.test(s) ? s : `\\text{${s}}`);
  const u = (x, s) => `${D(x)}\\,${unit(s)}`;
  const U = (x, s) => `$${u(x, s)}$`;
  const PCT = (x) => `$${D(x)}\\,\\%$`;
  const DEG = '{}^\\circ\\text{C}';
  const M2 = '\\text{m}^2', CM2 = '\\text{cm}^2', MS2 = '\\text{m/s}^2';
  const UW = '\\text{W/(m}^2\\cdot\\text{K)}';
  const G = 9.81;
  // tolerancia: aspoň abs, inak podiel rel z odpovede
  const tolOf = (x, abs, rel) => Math.max(abs, Math.abs(x) * rel);

  window.PROJECTS = [
    /* ---------- ZŠ ---------- */
    {
      id: 'potapanie', icon: '🤿', level: 'zs', grades: [6, 7], lessons: ['r6-tlak', 'r6-vztlak', 'r6-atmosfera'],
      title: 'Potápanie a tlak vody',
      make() {
        const h = rnd(3, 25), S = rnd(8, 15) * 10, m = rnd(75, 100), V = m + rnd(3, 9);
        const ph = 10 * h, p = 100 + ph, ratio = r2(p / 100), F = h * S, Fvz = V * 10, lead = V - m;
        return {
          story: T`Potápač sa v jazere ponorí do hĺbky $${u(h, 'm')}$. Hustota vody je $1000\\,\\text{kg/m}^3$ a na hladinu tlačí vzduch atmosférickým tlakom $100\\,\\text{kPa}$. Počítaj s $g = 10\\,\\text{N/kg}$.`,
          steps: [
            { q: T`Aký je hydrostatický tlak vody v tejto hĺbke (v kPa)?`, answer: ph, show: U(ph, 'kPa'),
              hint: T`Hydrostatický tlak je $p = h \\cdot \\rho \\cdot g$. Výsledok v pascaloch preveď na kilopascaly.`,
              solution: M`$p_h = ${u(h, 'm')} \\cdot 1000\\,\\text{kg/m}^3 \\cdot 10\\,\\text{N/kg} = ${u(ph * 1000, 'Pa')} = ${u(ph, 'kPa')}$.` },
            { q: T`Aký celkový tlak pôsobí na potápača (v kPa)?`, answer: p, show: U(p, 'kPa'),
              hint: T`K hydrostatickému tlaku vody pripočítaj atmosférický tlak, ktorý tlačí na hladinu.`,
              solution: M`$p = ${u(ph, 'kPa')} + 100\\,\\text{kPa} = ${u(p, 'kPa')}$.`,
              mistakes: [{ value: ph, msg: T`To je len tlak vody. Na hladinu ešte tlačí vzduch – pripočítaj atmosférický tlak.` }] },
            { q: T`Koľkokrát je celkový tlak väčší ako tlak na hladine? Zaokrúhli na stotiny.`, answer: ratio, tol: 0.011,
              hint: T`Celkový tlak vydeľ atmosférickým tlakom.`,
              solution: M`$${u(p, 'kPa')} : 100\\,\\text{kPa} = ${D(ratio)}$.` },
            { q: T`Sklo potápačskej masky má obsah $${u(S, CM2)}$. Akou silou naň tlačí voda (bez atmosférického tlaku)?`, answer: F, tol: 0.5, show: U(F, 'N'),
              hint: T`Tlaková sila je $F = p \\cdot S$. Tlak dosaď v pascaloch a obsah v m² ($1\\,\\text{cm}^2 = ${D(0.0001)}\\,\\text{m}^2$).`,
              solution: M`$F = ${u(ph * 1000, 'Pa')} \\cdot ${D(S / 10000)}\\,\\text{m}^2 = ${u(F, 'N')}$.` },
            { q: T`Potápač aj s výstrojom má hmotnosť $${u(m, 'kg')}$ a objem $${u(V, 'l')}$. Aká veľká vztlaková sila naň pôsobí?`, answer: Fvz, show: U(Fvz, 'N'),
              hint: T`Vztlaková sila sa rovná tiaži vytlačenej vody: $F_{vz} = V \\cdot \\rho \\cdot g$, pričom $1\\,\\text{l} = ${D(0.001)}\\,\\text{m}^3$.`,
              solution: M`$F_{vz} = ${D(V / 1000)}\\,\\text{m}^3 \\cdot 1000\\,\\text{kg/m}^3 \\cdot 10\\,\\text{N/kg} = ${u(Fvz, 'N')}$.`,
              mistakes: [{ value: m * 10, msg: T`To je tiaž potápača. Vztlaková sila nezávisí od hmotnosti, ale od objemu ponoreného telesa.` }] },
            { q: T`Koľko kilogramov olova si musí potápač pripnúť, aby sa vo vode vznášal? Objem olova zanedbaj.`, answer: lead, show: U(lead, 'kg'),
              hint: T`Pri vznášaní sa tiaž rovná vztlakovej sile. Porovnaj hmotnosť potápača s hmotnosťou vytlačenej vody.`,
              solution: T`Vytlačená voda má hmotnosť $${u(V, 'kg')}$, potápač $${u(m, 'kg')}$. Treba pridať $${V} - ${m} = ${u(lead, 'kg')}$ olova.` }
          ],
          wrap: T`Tlak vo vode rastie s hĺbkou: každých 10 m vody pridá približne toľko, koľko je celý atmosférický tlak. Či teleso vo vode klesá, stúpa alebo sa vznáša, rozhoduje porovnanie jeho tiaže so vztlakovou silou.`
        };
      }
    },
    {
      id: 'elektrina', icon: '💡', level: 'zs', grades: [8, 9], lessons: ['r9-praca-vykon', 'r8-prud-napatie'],
      title: 'Spotreba elektriny v domácnosti',
      make() {
        const PT = pick([80, 100, 120, 150]), tT = pick([2, 3, 4, 5]);
        const nL = rnd(5, 12), PL = pick([5, 7, 9, 10]), tL = pick([3, 4, 5, 6]);
        const EF = pick([0.6, 0.8, 1, 1.2]), c = rstep(0.15, 0.25, 0.01);
        const ET = nice((PT * tT) / 1000), EL = nice((nL * PL * tL) / 1000), day = nice(ET + EL + EF), Em = nice(30 * day);
        const cost = r2(Em * c), I = r2(PT / 230);
        return {
          story: T`Chceš zistiť, koľko elektriny mesačne minie vaša domácnosť. Televízor s príkonom $${u(PT, 'W')}$ hrá denne $${u(tT, 'h')}$. V byte svieti ${nL} LED žiaroviek s príkonom $${u(PL, 'W')}$, každá priemerne $${u(tL, 'h')}$ denne. Chladnička spotrebuje $${u(EF, 'kWh')}$ za deň. Za $1\\,\\text{kWh}$ sa platí ${eur(c)} € a v zásuvke je napätie $230\\,\\text{V}$.`,
          steps: [
            { q: T`Koľko kWh energie spotrebuje televízor za jeden deň?`, answer: ET, tol: 0.001, show: U(ET, 'kWh'),
              hint: T`Energia = príkon · čas. Príkon najprv preveď na kilowatty: $1\\,\\text{kW} = 1000\\,\\text{W}$.`,
              solution: M`$E = ${u(PT / 1000, 'kW')} \\cdot ${u(tT, 'h')} = ${u(ET, 'kWh')}$.`,
              mistakes: [{ value: PT * tT, msg: T`Toto je energia vo watthodinách. Na kilowatthodiny ju prevedieš delením číslom 1000.` }] },
            { q: T`Koľko kWh spotrebujú za deň všetky LED žiarovky spolu?`, answer: EL, tol: 0.001, show: U(EL, 'kWh'),
              hint: T`Spotrebu jednej žiarovky vynásob počtom žiaroviek.`,
              solution: M`$E = ${nL} \\cdot ${u(PL / 1000, 'kW')} \\cdot ${u(tL, 'h')} = ${u(EL, 'kWh')}$.`,
              mistakes: [{ value: nice((PL * tL) / 1000), msg: T`To je spotreba jedinej žiarovky. Svieti ich ${nL}.` }] },
            { q: T`Koľko kWh spotrebujú televízor, žiarovky a chladnička spolu za 30 dní?`, answer: Em, tol: 0.01, show: U(Em, 'kWh'),
              hint: T`Sčítaj dennú spotrebu všetkých troch spotrebičov a vynásob ju počtom dní.`,
              solution: M`$E = 30 \\cdot (${D(ET)} + ${D(EL)} + ${D(EF)})\\,\\text{kWh} = ${u(Em, 'kWh')}$.`,
              mistakes: [{ value: day, msg: T`To je spotreba za jeden deň. Treba ju ešte vynásobiť počtom dní.` }] },
            { q: T`Koľko eur sa za túto energiu zaplatí za mesiac? Zaokrúhli na centy.`, answer: cost, tol: 0.011, show: money(cost),
              hint: T`Počet kWh vynásob cenou jednej kWh.`,
              solution: M`$${D(Em)} \\cdot ${eurD(c)} \\doteq ${eurD(cost)}$ €.` },
            { q: T`Aký prúd tečie televízorom počas prevádzky? Výsledok v ampéroch zaokrúhli na stotiny.`, answer: I, tol: 0.011, show: U(I, 'A'),
              hint: T`Zo vzťahu $P = U \\cdot I$ vyjadri prúd: $I = P : U$.`,
              solution: M`$I = \\dfrac{P}{U} = \\dfrac{${u(PT, 'W')}}{230\\,\\text{V}} \\doteq ${u(I, 'A')}$.`,
              mistakes: [{ value: r2(230 / PT), msg: T`Delí sa tu opačne: prúd je príkon delený napätím, $I = P : U$.` }] }
          ],
          wrap: T`Energia je príkon krát čas. Kilowatthodina je energia, ktorú spotrebič s príkonom 1 kW minie za 1 hodinu – preto watty najprv preveď na kilowatty. Na účte sa najviac prejavia spotrebiče, ktoré bežia dlho, nielen tie s veľkým príkonom.`
        };
      }
    },
    {
      id: 'kanvica', icon: '☕', level: 'zs', grades: [8, 9], lessons: ['r8-vnutorna-energia', 'r6-teplo', 'r9-praca-vykon'],
      title: 'Varenie vody v rýchlovarnej kanvici',
      make() {
        const vols = [0.5, 0.8, 1, 1.2, 1.5, 1.7];
        const V = pick(vols), t1 = rnd(10, 20), P = pick([1800, 2000, 2200, 2400]), eta = pick([0.8, 0.84, 0.88, 0.9]);
        const dT = 100 - t1, Q = nice(V * 4200 * dT), Qk = nice(Q / 1000);
        const ti = Math.round(Q / P), tm = Math.ceil(Q / (P * eta)), mm = Math.floor(tm / 60), ss = tm % 60;
        const E = nice((P * tm) / 1000), ef = r1((Q / (P * tm)) * 100);
        const V2 = pick(vols.filter((x) => x !== V)), t2 = Math.round((tm * V2) / V);
        return {
          story: T`Ráno si varíš čaj. Do rýchlovarnej kanvice s príkonom $${u(P, 'W')}$ sa naleje $${u(V, 'l')}$ vody s teplotou $${u(t1, DEG)}$ a voda sa zohreje až na var ($100\\,{}^\\circ\\text{C}$). Merná tepelná kapacita vody je $4200\\,\\text{J/(kg}\\cdot\\text{K)}$ a $1\\,\\text{l}$ vody má hmotnosť $1\\,\\text{kg}$.`,
          steps: [
            { q: T`Koľko tepla (v kJ) treba vode dodať, aby zovrela?`, answer: Qk, tol: 0.5, show: U(Qk, 'kJ'),
              hint: T`Teplo je $Q = m \\cdot c \\cdot \\Delta t$, kde $\\Delta t$ je rozdiel konečnej a začiatočnej teploty.`,
              solution: M`$Q = ${u(V, 'kg')} \\cdot 4200\\,\\text{J/(kg}\\cdot\\text{K)} \\cdot ${u(dT, 'K')} = ${u(Q, 'J')} = ${u(Qk, 'kJ')}$.`,
              mistakes: [{ value: nice(V * 420), msg: T`Voda sa neohrieva od $0\\,{}^\\circ\\text{C}$, ale od $${u(t1, DEG)}$. Rozdiel teplôt je $${u(dT, 'K')}$.` }] },
            { q: T`Za koľko sekúnd by voda zovrela, keby sa všetka elektrická energia zmenila na teplo vody? Zaokrúhli na celé sekundy.`, answer: ti, tol: 1, show: U(ti, 's'),
              hint: T`Zo vzťahu $P = \\dfrac{Q}{t}$ vyjadri čas: $t = \\dfrac{Q}{P}$. Teplo dosaď v jouloch.`,
              solution: M`$t = \\dfrac{${u(Q, 'J')}}{${u(P, 'W')}} \\doteq ${u(ti, 's')}$.` },
            { q: T`Kanvica v skutočnosti zovrela vodu za ${mm} min ${ss} s. Koľko elektrickej energie (v kJ) pritom odobrala zo siete?`, answer: E, tol: 0.5, show: U(E, 'kJ'),
              hint: T`Čas preveď na sekundy a vynásob ho príkonom: $E = P \\cdot t$.`,
              solution: M`$t = ${mm} \\cdot 60\\,\\text{s} + ${ss}\\,\\text{s} = ${u(tm, 's')}$, $E = ${u(P, 'W')} \\cdot ${u(tm, 's')} = ${u(P * tm, 'J')} = ${u(E, 'kJ')}$.` },
            { q: T`Aká je účinnosť kanvice v percentách? Zaokrúhli na desatiny.`, answer: ef, tol: 0.15, show: PCT(ef),
              hint: T`Účinnosť je podiel užitočnej energie (tepla, ktoré prijala voda) a energie odobratej zo siete.`,
              solution: M`$\\eta = \\dfrac{${u(Qk, 'kJ')}}{${u(E, 'kJ')}} \\cdot 100\\,\\% \\doteq ${D(ef)}\\,\\%$.` },
            { q: T`Za koľko sekúnd by pri rovnakej účinnosti zovrelo v tej istej kanvici $${u(V2, 'l')}$ vody s rovnakou začiatočnou teplotou? Zaokrúhli na celé sekundy.`, answer: t2, tol: 2, show: U(t2, 's'),
              hint: T`Teplo potrebné na zovretie je priamo úmerné hmotnosti vody, a teda aj čas ohrevu.`,
              solution: M`$t = ${u(tm, 's')} \\cdot \\dfrac{${D(V2)}}{${D(V)}} \\doteq ${u(t2, 's')}$.` }
          ],
          wrap: T`Teplo na ohriatie vody vypočítaš ako $Q = m \\cdot c \\cdot \\Delta t$. Kanvica nikdy nepremení všetku energiu na teplo vody – časť ohreje samotnú kanvicu a okolitý vzduch. Najviac sa ušetrí, keď sa varí len toľko vody, koľko treba.`
        };
      }
    },
    {
      id: 'bicykel', icon: '🚲', level: 'zs', grades: [8, 9], lessons: ['r8-praca', 'r8-polohova-pohybova', 'r8-mechanicka-energia'],
      title: 'Na bicykli do kopca',
      make() {
        const mc = rnd(45, 75), mb = rnd(10, 15), Mt = mc + mb, h = rnd(6, 20) * 10, tmin = rnd(8, 20);
        const Gf = Mt * 10, W = Gf * h, Ep = nice(W / 1000), Pw = Math.round(W / (tmin * 60));
        const food = nice(Ep * 4), choc = Math.round(food / 22);
        return {
          story: T`Cyklista s hmotnosťou $${u(mc, 'kg')}$ ide na bicykli s hmotnosťou $${u(mb, 'kg')}$ do kopca. Cesta stúpne o $${u(h, 'm')}$ a výstup trvá ${tmin} minút. Počítaj s $g = 10\\,\\text{N/kg}$.`,
          steps: [
            { q: T`Aká veľká je tiažová sila cyklistu aj s bicyklom?`, answer: Gf, show: U(Gf, 'N'),
              hint: T`Sčítaj hmotnosti a vynásob ich číslom $g$: $F_G = m \\cdot g$.`,
              solution: M`$F_G = (${mc} + ${mb})\\,\\text{kg} \\cdot 10\\,\\text{N/kg} = ${u(Gf, 'N')}$.`,
              mistakes: [{ value: mc * 10, msg: T`Zabudlo sa na bicykel. Do kopca treba vyviezť aj jeho hmotnosť.` }] },
            { q: T`O koľko kJ sa zväčší polohová energia cyklistu aj s bicyklom na vrchole kopca?`, answer: Ep, tol: 0.01, show: U(Ep, 'kJ'),
              hint: T`Polohová energia je $E_p = m \\cdot g \\cdot h = F_G \\cdot h$. Výsledok v jouloch preveď na kilojouly.`,
              solution: M`$E_p = ${u(Gf, 'N')} \\cdot ${u(h, 'm')} = ${u(W, 'J')} = ${u(Ep, 'kJ')}$.` },
            { q: T`Aký priemerný výkon treba vyvíjať len na samotné stúpanie? Zaokrúhli na celé watty.`, answer: Pw, tol: 1, show: U(Pw, 'W'),
              hint: T`Výkon je práca vykonaná za jednotku času: $P = \\dfrac{W}{t}$. Čas preveď na sekundy.`,
              solution: M`$P = \\dfrac{${u(W, 'J')}}{${tmin} \\cdot 60\\,\\text{s}} \\doteq ${u(Pw, 'W')}$.`,
              mistakes: [{ value: Math.round(W / tmin), msg: T`Čas treba dosadiť v sekundách, nie v minútach.` }] },
            { q: T`Svaly premenia na mechanickú prácu asi 25 % energie z potravy. Koľko kJ energie z potravy spotrebuje cyklista na výstup?`, answer: food, tol: 0.05, show: U(food, 'kJ'),
              hint: T`Užitočná práca je len štvrtina spotrebovanej energie, energia z potravy je teda štyrikrát väčšia.`,
              solution: M`$E = \\dfrac{${u(Ep, 'kJ')}}{${D(0.25)}} = ${u(food, 'kJ')}$.`,
              mistakes: [{ value: nice(Ep / 4), msg: T`Energia z potravy musí byť väčšia ako vykonaná práca – číslom $${D(0.25)}$ treba deliť, nie násobiť.` }] },
            { q: T`Čokoláda má energetickú hodnotu asi 2 200 kJ na 100 g. Koľko gramov čokolády pokryje energiu na výstup? Zaokrúhli na celé gramy.`, answer: choc, tol: 1, show: U(choc, 'g'),
              hint: T`Na 1 g čokolády pripadá 22 kJ.`,
              solution: M`$${u(food, 'kJ')} : 22\\,\\text{kJ/g} \\doteq ${u(choc, 'g')}$.` }
          ],
          wrap: T`Pri jazde do kopca sa práca svalov mení na polohovú energiu. Rýchlejší výstup znamená rovnakú prácu, ale väčší výkon. Telo väčšinu energie z potravy premení na teplo – preto sa pri jazde do kopca tak zahrejeme.`
        };
      }
    },
    {
      id: 'nabijanie', icon: '🔋', level: 'zs', grades: [9, 9], lessons: ['r9-praca-vykon', 'r8-prud-napatie'],
      title: 'Nabíjanie mobilu',
      make() {
        const Qm = rnd(6, 10) * 500, Ub = 3.85, P = pick([10, 15, 18, 25]), eta = pick([80, 85, 90]), c = rstep(0.15, 0.25, 0.01);
        const QC = nice(Qm * 3.6), E = r2((Qm * Ub) / 1000), En = r2((0.8 * E) / (eta / 100));
        const tm = Math.round((En / P) * 60), Ey = r2((En * 365) / 1000), cost = r2(Ey * c);
        return {
          story: T`Batéria mobilu má kapacitu $${u(Qm, 'mAh')}$ a menovité napätie $${u(Ub, 'V')}$. Každý večer sa mobil nabíja z 20 % na 100 % nabíjačkou s výkonom $${u(P, 'W')}$. Do batérie sa uloží ${eta} % energie odobratej zo zásuvky, zvyšok sa premení na teplo. Za 1 kWh sa platí ${eur(c)} €.`,
          steps: [
            { q: T`Aký náboj (v coulomboch) sa zmestí do plne nabitej batérie?`, answer: QC, tol: 0.5, show: U(QC, 'C'),
              hint: T`$1\\,\\text{mAh}$ je náboj, ktorý pri prúde $1\\,\\text{mA}$ pretečie za 1 hodinu: $Q = I \\cdot t$.`,
              solution: M`$Q = ${D(Qm / 1000)}\\,\\text{A} \\cdot 3600\\,\\text{s} = ${u(QC, 'C')}$.`,
              mistakes: [{ value: Qm * 3600, msg: T`Miliampéry treba najprv previesť na ampéry.` }] },
            { q: T`Koľko energie (vo watthodinách) uloží plne nabitá batéria? Zaokrúhli na stotiny.`, answer: E, tol: 0.011, show: U(E, 'Wh'),
              hint: T`Energia batérie je $E = Q \\cdot U$, kde kapacitu dosadíš v ampérhodinách.`,
              solution: M`$E = ${D(Qm / 1000)}\\,\\text{Ah} \\cdot ${u(Ub, 'V')} \\doteq ${u(E, 'Wh')}$.` },
            { q: T`Koľko energie (vo watthodinách) odoberie nabíjačka zo zásuvky pri jednom nabití z 20 % na 100 %? Zaokrúhli na stotiny.`, answer: En, tol: 0.03, show: U(En, 'Wh'),
              hint: T`Do batérie treba doplniť 80 % jej energie. Zo zásuvky sa však odoberie viac, lebo sa uloží len ${eta} %.`,
              solution: M`$E_z = \\dfrac{${D(0.8)} \\cdot ${u(E, 'Wh')}}{${D(eta / 100)}} \\doteq ${u(En, 'Wh')}$.`,
              mistakes: [{ value: r2((0.8 * E * eta) / 100), msg: T`Zo zásuvky sa odoberá viac energie, ako sa uloží – účinnosťou treba deliť, nie násobiť.` }] },
            { q: T`Ako dlho trvá nabíjanie, ak nabíjačka stále dodáva plný výkon? Zaokrúhli na celé minúty.`, answer: tm, tol: 1, show: U(tm, 'min'),
              hint: T`Čas $t = \\dfrac{E}{P}$ vyjde v hodinách, keď energiu dosadíš vo Wh a výkon vo W. Hodiny potom preveď na minúty.`,
              solution: M`$t = \\dfrac{${u(En, 'Wh')}}{${u(P, 'W')}} \\cdot 60\\,\\text{min/h} \\doteq ${u(tm, 'min')}$.` },
            { q: T`Koľko kWh odoberie nabíjanie zo siete za rok (365 dní)? Zaokrúhli na stotiny.`, answer: Ey, tol: 0.011, show: U(Ey, 'kWh'),
              hint: T`Energiu na jedno nabitie vynásob počtom dní a preveď na kWh ($1\\,\\text{kWh} = 1000\\,\\text{Wh}$).`,
              solution: M`$${D(En)}\\,\\text{Wh} \\cdot 365 = ${u(nice(En * 365), 'Wh')} \\doteq ${u(Ey, 'kWh')}$.` },
            { q: T`Koľko eur stojí nabíjanie mobilu za rok? Zaokrúhli na centy.`, answer: cost, tol: 0.011, show: money(cost),
              hint: T`Ročnú spotrebu v kWh vynásob cenou jednej kWh.`,
              solution: M`$${D(Ey)} \\cdot ${eurD(c)} \\doteq ${eurD(cost)}$ €.` }
          ],
          wrap: T`Kapacita v mAh udáva náboj – energiu batérie dostaneš, až keď ju vynásobíš napätím. Nabíjanie mobilu stojí ročne len okolo jedného až dvoch eur; oveľa viac energie minú spotrebiče, ktoré hrejú alebo bežia nepretržite. Skutočné nabíjačky ku koncu nabíjania spomaľujú, preto nabíjanie trvá o niečo dlhšie.`
        };
      }
    },
    {
      id: 'solar', icon: '☀️', level: 'zs', grades: [8, 9], lessons: ['r9-premeny-zdroje', 'r9-energia-priroda', 'r8-praca'],
      title: 'Solárne panely na streche',
      make() {
        const [a, b] = pick([[1.7, 1], [1.75, 1.1], [1.8, 1.1], [2, 1]]);
        const n = rnd(8, 16), eta = pick([18, 19, 20, 21, 22]), H = pick([1000, 1050, 1100, 1150, 1200]);
        const c = rstep(0.15, 0.25, 0.01), K = rnd(9, 14) * 100;
        const A = nice(n * a * b), Pk = r2((A * eta) / 100), E = Math.round(Pk * H), S0 = Math.round(E * c);
        const C = Math.round((Pk * K) / 100) * 100, yrs = r1(C / S0);
        return {
          story: T`Na južnú strechu rodinného domu sa má namontovať ${n} solárnych panelov s rozmermi $${u(a, 'm')} \\times ${u(b, 'm')}$. Panely majú účinnosť ${eta} %. Pri plnom slnku dopadá na každý štvorcový meter výkon $1000\\,\\text{W}$. Za rok panely vyrobia toľko energie, ako keby pri plnom slnku pracovali ${H} hodín. Elektrina zo siete stojí ${eur(c)} € za kWh a celá inštalácia ${tx(C)} €.`,
          steps: [
            { q: T`Akú plochu (v m²) zaberú všetky panely spolu?`, answer: A, tol: 0.01, show: U(A, M2),
              hint: T`Obsah jedného panelu vynásob počtom panelov.`,
              solution: M`$S = ${n} \\cdot ${u(a, 'm')} \\cdot ${u(b, 'm')} = ${u(A, M2)}$.` },
            { q: T`Aký elektrický výkon (v kW) dodávajú panely pri plnom slnku? Zaokrúhli na stotiny.`, answer: Pk, tol: 0.011, show: U(Pk, 'kW'),
              hint: T`Na panely dopadá $1000\\,\\text{W}$ na každý m². Elektrický výkon je ${eta} % z dopadajúceho výkonu.`,
              solution: M`$P = ${u(A, M2)} \\cdot 1000\\,\\text{W/m}^2 \\cdot ${D(eta / 100)} = ${u(nice(A * eta * 10), 'W')} \\doteq ${u(Pk, 'kW')}$.`,
              mistakes: [{ value: r2(A), msg: T`Taký výkon by dodávali panely so 100 % účinnosťou. Vynásob ho ešte účinnosťou.` }] },
            { q: T`Koľko kWh elektriny vyrobia panely za rok? Zaokrúhli na celé kWh.`, answer: E, tol: 7, show: U(E, 'kWh'),
              hint: T`Výkon v kW vynásob počtom hodín práce pri plnom slnku.`,
              solution: M`$E = ${u(Pk, 'kW')} \\cdot ${u(H, 'h')} \\doteq ${u(E, 'kWh')}$.` },
            { q: T`Koľko eur sa ušetrí za rok, ak sa všetka vyrobená elektrina spotrebuje doma? Zaokrúhli na celé eurá.`, answer: S0, tol: 2, show: `${tx(S0)} €`,
              hint: T`Vyrobené kWh vynásob cenou jednej kWh.`,
              solution: M`$${D(E)} \\cdot ${eurD(c)} \\doteq ${D(S0)}$ €.` },
            { q: T`Za koľko rokov sa inštalácia zaplatí z ušetrených peňazí? Zaokrúhli na desatiny.`, answer: yrs, tol: 0.15,
              hint: T`Cenu inštalácie vydeľ ročnou úsporou.`,
              solution: M`$${D(C)} : ${D(S0)} \\doteq ${D(yrs)}$.` }
          ],
          wrap: T`Panel premení na elektrinu len asi pätinu dopadajúceho slnečného žiarenia. Skutočná ročná výroba závisí od počasia, sklonu strechy a ročného obdobia – preto sa počíta s ekvivalentom hodín plného slnka.`
        };
      }
    },
    /* ---------- SŠ ---------- */
    {
      id: 'brzdenie', icon: '🚗', level: 'ss', grades: [1, 1], lessons: ['s1-zrychlenie', 's1-pohyb', 'r7-trenie'],
      title: 'Brzdná dráha auta',
      make() {
        const vk = pick([36, 54, 72, 90, 108]), v = nice(vk / 3.6), tr = pick([0.7, 0.8, 0.9, 1, 1.2]), a = pick([5, 6, 7, 8]);
        const sr = nice(v * tr), sbx = (v * v) / (2 * a), sb = r1(sbx), tot = r1(sr + sbx), tb = r2(v / a);
        return {
          story: T`Auto ide rýchlosťou $${u(vk, 'km/h')}$. Vodič zbadá na ceste prekážku a začne brzdiť až po reakčnom čase $${u(tr, 's')}$. Pri brzdení sa auto pohybuje rovnomerne spomalene so spomalením $${u(a, MS2)}$.`,
          steps: [
            { q: T`Aká je rýchlosť auta v m/s?`, answer: v, tol: 0.01, show: U(v, 'm/s'),
              hint: T`Rýchlosť v km/h vydeľ číslom ${tx(3.6)}.`,
              solution: M`$v = ${vk} : ${D(3.6)} = ${u(v, 'm/s')}$.`,
              mistakes: [{ value: nice(vk * 3.6), msg: T`Pri prevode z km/h na m/s sa číslom ${tx(3.6)} delí, nie násobí.` }] },
            { q: T`Akú dráhu (v metroch) prejde auto počas reakčného času?`, answer: sr, tol: 0.01, show: U(sr, 'm'),
              hint: T`Počas reakčného času auto ešte nebrzdí a ide rovnomerne: $s = v \\cdot t$.`,
              solution: M`$s_r = ${u(v, 'm/s')} \\cdot ${u(tr, 's')} = ${u(sr, 'm')}$.` },
            { q: T`Aká je brzdná dráha auta (od začiatku brzdenia po zastavenie)? Zaokrúhli na desatiny metra.`, answer: sb, tol: 0.06, show: U(sb, 'm'),
              hint: T`Pri rovnomerne spomalenom pohybe až do zastavenia platí $s = \\dfrac{v^2}{2a}$.`,
              solution: M`$s_b = \\dfrac{(${u(v, 'm/s')})^2}{2 \\cdot ${u(a, MS2)}} \\doteq ${u(sb, 'm')}$.`,
              mistakes: [{ value: r1((v * v) / a), msg: T`Vo vzťahu $s = \\dfrac{v^2}{2a}$ je v menovateli dvojnásobok spomalenia.` }] },
            { q: T`Aká dlhá je celá dráha od zbadania prekážky po zastavenie? Zaokrúhli na desatiny metra.`, answer: tot, tol: 0.11, show: U(tot, 'm'),
              hint: T`Sčítaj dráhu prejdenú počas reakčného času a brzdnú dráhu.`,
              solution: M`$s = ${u(sr, 'm')} + ${u(sb, 'm')} \\doteq ${u(tot, 'm')}$.`,
              mistakes: [{ value: sb, msg: T`Nezabudni na dráhu, ktorú auto prejde ešte pred začiatkom brzdenia.` }] },
            { q: T`Ako dlho (v sekundách) trvá samotné brzdenie? Zaokrúhli na stotiny.`, answer: tb, tol: 0.011, show: U(tb, 's'),
              hint: T`Rýchlosť klesá rovnomerne až na nulu: $t = \\dfrac{v}{a}$.`,
              solution: M`$t_b = \\dfrac{${u(v, 'm/s')}}{${u(a, MS2)}} \\doteq ${u(tb, 's')}$.` },
            { q: T`Koľkokrát dlhšia by bola brzdná dráha, keby auto išlo dvojnásobnou rýchlosťou (pri rovnakom spomalení)?`, answer: 4,
              hint: T`Brzdná dráha závisí od druhej mocniny rýchlosti.`,
              solution: T`$s_b = \\dfrac{(2v)^2}{2a} = 4 \\cdot \\dfrac{v^2}{2a}$, brzdná dráha je štyrikrát dlhšia.`,
              mistakes: [{ value: 2, msg: T`Brzdná dráha nie je priamo úmerná rýchlosti – rastie s druhou mocninou rýchlosti.` }] }
          ],
          wrap: T`Dráha zastavenia má dve časti: reakčnú, ktorá rastie priamo úmerne s rýchlosťou, a brzdnú, ktorá rastie s druhou mocninou rýchlosti. Preto aj o trochu vyššia rýchlosť výrazne predĺži dráhu potrebnú na zastavenie.`
        };
      }
    },
    {
      id: 'trampolina', icon: '🤸', level: 'ss', grades: [1, 2], lessons: ['s1-praca-energia', 's1-zakony-zachovania', 's2-kmitanie'],
      title: 'Skákanie na trampolíne',
      make() {
        const m = rnd(40, 80), x0 = rstep(0.08, 0.2, 0.01), h = rstep(0.8, 2, 0.1), x0c = nice(x0 * 100);
        const k = Math.round((m * G) / x0), v = r2(Math.sqrt(2 * G * h));
        const x = x0 + Math.sqrt(x0 * x0 + 2 * x0 * h), xcm = r1(x * 100), ratio = r1(xcm / x0c);
        const Tp = r2(2 * Math.PI * Math.sqrt(m / k));
        return {
          story: T`Na záhradnej trampolíne skáče človek s hmotnosťou $${u(m, 'kg')}$. Keď na trampolíne len pokojne stojí, sieť sa prehne o $${u(x0c, 'cm')}$. Pri skákaní dopadá na sieť z výšky $${u(h, 'm')}$ nad úrovňou nenapnutej siete. Sieť považuj za ideálnu pružinu, odpor vzduchu a straty energie zanedbaj a počítaj s $g = ${u(G, MS2)}$.`,
          steps: [
            { q: T`Aká je tuhosť siete trampolíny? Zaokrúhli na celé N/m.`, answer: k, tol: 1, show: U(k, 'N/m'),
              hint: T`Pri pokojnom státí je pružná sila siete v rovnováhe s tiažou: $k \\cdot x_0 = m \\cdot g$.`,
              solution: M`$k = \\dfrac{${u(m, 'kg')} \\cdot ${u(G, MS2)}}{${u(x0, 'm')}} \\doteq ${u(k, 'N/m')}$.`,
              mistakes: [{ value: Math.round((m * G) / x0c), msg: T`Prehnutie treba dosadiť v metroch, nie v centimetroch.` }] },
            { q: T`Akou rýchlosťou dopadá človek na sieť? Zaokrúhli na stotiny m/s.`, answer: v, tol: 0.011, show: U(v, 'm/s'),
              hint: T`Polohová energia sa mení na pohybovú: $m g h = \\frac{1}{2} m v^2$, teda $v = \\sqrt{2 g h}$.`,
              solution: M`$v = \\sqrt{2 \\cdot ${D(G)} \\cdot ${D(h)}}\\,\\text{m/s} \\doteq ${u(v, 'm/s')}$.` },
            { q: T`O koľko centimetrov sa sieť najviac prehne? Zaokrúhli na desatiny centimetra.`, answer: xcm, tol: 0.3, show: U(xcm, 'cm'),
              hint: T`V najnižšom bode je všetka energia v napätej sieti: $m g (h + x) = \\frac{1}{2} k x^2$. Vyrieš kvadratickú rovnicu pre $x$ (kladný koreň).`,
              solution: M`$\\frac{1}{2} \\cdot ${D(k)}\\,x^2 - ${D(r2(m * G))}\\,x - ${D(r2(m * G * h))} = 0 \\;\\Rightarrow\\; x \\doteq ${u(r3(x), 'm')} = ${u(xcm, 'cm')}$.` },
            { q: T`Koľkokrát väčšou silou tlačí sieť na človeka v najnižšom bode, ako keď na trampolíne len stojí? Zaokrúhli na desatiny.`, answer: ratio, tol: 0.11,
              hint: T`Pružná sila je priamo úmerná prehnutiu: $F = k \\cdot x$. Porovnaj najväčšie prehnutie s prehnutím pri státí.`,
              solution: M`$\\dfrac{F_{max}}{F_0} = \\dfrac{${u(xcm, 'cm')}}{${u(x0c, 'cm')}} \\doteq ${D(ratio)}$.` },
            { q: T`Ak by sa človek na sieti len jemne pohupoval a nevyskakoval, s akou periódou by kmital? Zaokrúhli na stotiny sekundy.`, answer: Tp, tol: 0.011, show: U(Tp, 's'),
              hint: T`Človek na sieti je ako závažie na pružine: $T = 2\\pi\\sqrt{\\dfrac{m}{k}}$.`,
              solution: M`$T = 2\\pi\\sqrt{\\dfrac{${u(m, 'kg')}}{${u(k, 'N/m')}}} \\doteq ${u(Tp, 's')}$.` }
          ],
          wrap: T`Pri skoku sa polohová energia mení na pohybovú a tá na energiu napätej siete. Sieť sa pri dopade prehne niekoľkokrát viac ako pri státí, a preto na telo pôsobí niekoľkonásobok tiaže. Rovnaký princíp tlmí nárazy aj v podrážkach topánok či v nárazníkoch áut.`
        };
      }
    },
    {
      id: 'zateplenie', icon: '🏠', level: 'ss', grades: [2, 2], lessons: ['s2-teplo', 'r8-vnutorna-energia'],
      title: 'Zateplenie domu',
      make() {
        const a = rnd(8, 12), b = rnd(7, a), h = pick([2.6, 2.8, 3]), Aw = rnd(12, 24);
        const U1 = pick([1.2, 1.4, 1.6]), U2 = pick([0.2, 0.25, 0.3]), tout = pick([-2, 0, 2, 4]), dT = 21 - tout;
        const days = pick([200, 210, 220]), c = rstep(0.08, 0.14, 0.01), k = rnd(4, 7) * 10;
        const A = nice(2 * (a + b) * h - Aw), P1 = Math.round(U1 * A * dT), P2 = Math.round(U2 * A * dT);
        const Es = Math.round(((P1 - P2) * 24 * days) / 1000), S0 = Math.round(Es * c);
        const cost = Math.round(k * A), yrs = r1(cost / S0);
        return {
          story: T`Prízemný rodinný dom má pôdorys $${u(a, 'm')} \\times ${u(b, 'm')}$ a steny vysoké $${u(h, 'm')}$. Okná a dvere zaberajú spolu $${u(Aw, M2)}$. Súčiniteľ prechodu tepla nezateplenej steny je $U = ${u(U1, UW)}$, po zateplení polystyrénom klesne na $${u(U2, UW)}$. Vnútri sa udržiava $21\\,{}^\\circ\\text{C}$. Vykurovacia sezóna trvá ${days} dní a priemerná vonkajšia teplota je počas nej $${u(tout, DEG)}$. Teplo z kotla stojí ${eur(c)} € za kWh.`,
          steps: [
            { q: T`Aký veľký je povrch stien (v m²), cez ktorý uniká teplo? Okná a dvere nezarátavaj.`, answer: A, tol: 0.01, show: U(A, M2),
              hint: T`Plocha stien je obvod pôdorysu krát výška. Odpočítaj plochu okien a dverí.`,
              solution: M`$S = 2 \\cdot (${a} + ${b})\\,\\text{m} \\cdot ${u(h, 'm')} - ${u(Aw, M2)} = ${u(A, M2)}$.` },
            { q: T`Aký tepelný výkon uniká stenami pred zateplením? Zaokrúhli na celé watty.`, answer: P1, tol: 1, show: U(P1, 'W'),
              hint: T`Tepelný tok stenou je $P = U \\cdot S \\cdot \\Delta t$, kde $\\Delta t$ je rozdiel vnútornej a vonkajšej teploty.`,
              solution: M`$P_1 = ${D(U1)} \\cdot ${D(A)} \\cdot ${dT}\\,\\text{W} \\doteq ${u(P1, 'W')}$.`,
              mistakes: tout === 0 ? [] : [{ value: Math.round(U1 * A * (21 + tout)), msg: T`Rozdiel teplôt je vnútorná mínus vonkajšia teplota: $21 - (${D(tout)}) = ${dT}$.` }] },
            { q: T`Aký tepelný výkon uniká stenami po zateplení? Zaokrúhli na celé watty.`, answer: P2, tol: 1, show: U(P2, 'W'),
              hint: T`Použi rovnaký vzťah s novým súčiniteľom prechodu tepla.`,
              solution: M`$P_2 = ${D(U2)} \\cdot ${D(A)} \\cdot ${dT}\\,\\text{W} \\doteq ${u(P2, 'W')}$.` },
            { q: T`Koľko kWh tepla ušetrí zateplenie stien za celú vykurovaciu sezónu? Zaokrúhli na celé kWh.`, answer: Es, tol: tolOf(Es, 2, 0.003), show: U(Es, 'kWh'),
              hint: T`Rozdiel výkonov vynásob počtom hodín sezóny (24 hodín denne) a preveď na kWh.`,
              solution: M`$E = (${D(P1)} - ${D(P2)})\\,\\text{W} \\cdot ${D(days * 24)}\\,\\text{h} \\doteq ${u(Es, 'kWh')}$.`,
              mistakes: [{ value: Math.round(((P1 - P2) * days) / 1000), msg: T`Výkon treba násobiť časom v hodinách – deň má 24 hodín.` }] },
            { q: T`Koľko eur sa vďaka zatepleniu ušetrí za jednu sezónu? Zaokrúhli na celé eurá.`, answer: S0, tol: tolOf(S0, 1, 0.003), show: `${tx(S0)} €`,
              hint: T`Ušetrené kWh vynásob cenou tepla.`,
              solution: M`$${D(Es)} \\cdot ${eurD(c)} \\doteq ${D(S0)}$ €.` },
            { q: T`Zateplenie stojí ${k} € za m² steny. Za koľko sezón sa investícia vráti? Zaokrúhli na desatiny.`, answer: yrs, tol: 0.15,
              hint: T`Cenu zateplenia celej plochy stien vydeľ úsporou za jednu sezónu.`,
              solution: M`$${k} \\cdot ${D(A)} \\doteq ${D(cost)}$ €, $${D(cost)} : ${D(S0)} \\doteq ${D(yrs)}$.` }
          ],
          wrap: T`Tepelné straty stenou sú úmerné jej ploche, rozdielu teplôt a súčiniteľu prechodu tepla. Izolácia zníži súčiniteľ niekoľkonásobne, a preto sa zateplenie obvykle vráti za niekoľko rokov. V skutočnosti uniká teplo aj oknami, strechou a vetraním.`
        };
      }
    },
    {
      id: 'kyvadlo', icon: '🕰️', level: 'ss', grades: [2, 2], lessons: ['s2-kmitanie', 's1-gravitacia'],
      title: 'Kyvadlové hodiny',
      make() {
        const l = rstep(0.25, 1.5, 0.05), T1 = r2(2 * Math.PI * Math.sqrt(l / G)), f = r3(1 / T1);
        const T0 = pick([1, 1.5, 2]), l0 = (G * T0 * T0) / (4 * Math.PI * Math.PI), l0cm = r1(l0 * 100);
        const summer = Math.random() < 0.5, d = pick([0.2, 0.3, 0.5, 0.8, 1]);
        const l1 = l0 + (summer ? 1 : -1) * (d / 1000), lag = Math.round(86400 * Math.abs(1 - Math.sqrt(l0 / l1)));
        const oSlow = T.s('meškajú'), oFast = T.s('predbiehajú sa');
        return {
          story: T`Starožitné kyvadlové hodiny merajú čas kmitmi kyvadla. Kyvadlo považuj za matematické kyvadlo (celá hmotnosť je v závaží na konci tyče) a počítaj s $g = ${u(G, MS2)}$.`,
          steps: [
            { q: T`Aká je perióda kyvadla s dĺžkou $${u(l, 'm')}$? Zaokrúhli na stotiny sekundy.`, answer: T1, tol: 0.011, show: U(T1, 's'),
              hint: T`Perióda matematického kyvadla je $T = 2\\pi\\sqrt{\\dfrac{l}{g}}$.`,
              solution: M`$T = 2\\pi\\sqrt{\\dfrac{${D(l)}}{${D(G)}}}\\,\\text{s} \\doteq ${u(T1, 's')}$.`,
              mistakes: [{ value: r2((2 * Math.PI * l) / G), msg: T`Nezabudni na odmocninu: perióda rastie s odmocninou dĺžky.` }] },
            { q: T`Aká je frekvencia kmitov tohto kyvadla? Zaokrúhli na tisíciny hertza.`, answer: f, tol: 0.004, show: U(f, 'Hz'),
              hint: T`Frekvencia je prevrátená hodnota periódy: $f = \\dfrac{1}{T}$.`,
              solution: M`$f = \\dfrac{1}{${u(T1, 's')}} \\doteq ${u(f, 'Hz')}$.` },
            { q: T`Hodinový stroj iných hodín počíta s periódou presne $${u(T0, 's')}$. Aké dlhé (v cm) musí byť ich kyvadlo? Zaokrúhli na desatiny centimetra.`, answer: l0cm, tol: 0.11, show: U(l0cm, 'cm'),
              hint: T`Zo vzťahu pre periódu vyjadri dĺžku: $l = \\dfrac{g\\,T^2}{4\\pi^2}$.`,
              solution: M`$l = \\dfrac{${D(G)} \\cdot ${D(T0)}^2}{4\\pi^2}\\,\\text{m} \\doteq ${u(r3(l0), 'm')} = ${u(l0cm, 'cm')}$.` },
            { q: summer ? T`Cez leto sa tyč tohto kyvadla teplom predĺži o $${u(d, 'mm')}$. Čo sa stane s hodinami?` : T`V zime sa tyč tohto kyvadla chladom skráti o $${u(d, 'mm')}$. Čo sa stane s hodinami?`,
              type: 'choice', options: [oSlow, oFast], answer: summer ? oSlow : oFast,
              hint: T`Dlhšie kyvadlo kmitá pomalšie, kratšie rýchlejšie.`,
              solution: summer ? T`Dlhšie kyvadlo má dlhšiu periódu. Za deň vykoná menej kmitov, a preto hodiny meškajú.` : T`Kratšie kyvadlo má kratšiu periódu. Za deň vykoná viac kmitov, a preto sa hodiny predbiehajú.` },
            { q: T`O koľko sekúnd za deň sa hodiny odchýlia od presného času? Zaokrúhli na celé sekundy.`, answer: lag, tol: 1, show: U(lag, 's'),
              hint: T`Pri malej zmene dĺžky platí $\\dfrac{\\Delta T}{T} \\approx \\dfrac{\\Delta l}{2\\,l}$. Deň má $86\\,400\\,\\text{s}$.`,
              solution: M`$\\Delta t \\approx 86\\,400\\,\\text{s} \\cdot \\dfrac{${u(d / 1000, 'm')}}{2 \\cdot ${u(r3(l0), 'm')}} \\doteq ${u(lag, 's')}$.` }
          ],
          wrap: T`Perióda kyvadla závisí len od jeho dĺžky a od tiažového zrýchlenia, nie od hmotnosti závažia. Už zmena dĺžky o zlomok milimetra spôsobí odchýlku desiatok sekúnd za deň – preto majú presné kyvadlové hodiny skrutku na doladenie dĺžky a tyče z materiálov, ktoré sa teplom takmer nerozťahujú.`
        };
      }
    },
    /* ---------- VŠ ---------- */
    {
      id: 'wifi', icon: '📶', level: 'vs', grades: [1, 2], lessons: ['v3-em-vlny', 'v4-frekvencia', 'v3-sirenie'],
      title: 'Dosah Wi-Fi signálu',
      make() {
        const f = pick([2.4, 5]), lam = nice(0.3 / f), lcm = r2(30 / f), Pt = pick([20, 50, 100]), Gd = 2;
        const d = rnd(5, 20), n = rnd(1, 3), Lw = pick([3, 4, 5, 6]), S = pick([-70, -75, -80]);
        const PdBm = r2(10 * Math.log10(Pt)), FSPL = r1(20 * Math.log10((4 * Math.PI * d) / lam));
        const Pr = r1(PdBm + 2 * Gd - FSPL - n * Lw);
        const Lmax = r2(PdBm + 2 * Gd - n * Lw - S), dmax = Math.round((lam / (4 * Math.PI)) * 10 ** (Lmax / 20));
        return {
          story: T`Domáci smerovač Wi-Fi vysiela na frekvencii $${u(f, 'GHz')}$ s výkonom $${u(Pt, 'mW')}$. Antény smerovača aj notebooku majú zisk $${u(Gd, 'dBi')}$. Notebook je vo vzdialenosti $${u(d, 'm')}$. Cestou signál prenikne stenami – je ich ${n} a každá ho zoslabí o $${u(Lw, 'dB')}$. Notebook spoľahlivo pracuje so signálom so silou aspoň $${u(S, 'dBm')}$. Rýchlosť svetla je $c = 3 \\cdot 10^8\\,\\text{m/s}$.`,
          steps: [
            { q: T`Aká je vlnová dĺžka signálu v centimetroch?`, answer: lcm, tol: 0.011, show: U(lcm, 'cm'),
              hint: T`Vlnová dĺžka je $\\lambda = \\dfrac{c}{f}$.`,
              solution: M`$\\lambda = \\dfrac{3 \\cdot 10^8\\,\\text{m/s}}{${D(f)} \\cdot 10^9\\,\\text{Hz}} = ${u(lam, 'm')} = ${u(lcm, 'cm')}$.` },
            { q: T`Aký je výkon vysielača v dBm? Zaokrúhli na stotiny.`, answer: PdBm, tol: 0.011, show: U(PdBm, 'dBm'),
              hint: T`Výkon v dBm je $10 \\log_{10} \\dfrac{P}{1\\,\\text{mW}}$.`,
              solution: M`$P_t = 10 \\log_{10} ${D(Pt)} \\doteq ${u(PdBm, 'dBm')}$.`,
              mistakes: [{ value: r2(20 * Math.log10(Pt)), msg: T`Pri výkone sa používa $10 \\log_{10}$, nie $20 \\log_{10}$ – to platí pre amplitúdy (napätie, intenzitu poľa).` }] },
            { q: T`Aký je útlm šírením vo voľnom priestore na vzdialenosť $${u(d, 'm')}$? Zaokrúhli na desatiny dB.`, answer: FSPL, tol: 0.11, show: U(FSPL, 'dB'),
              hint: T`Útlm šírením vo voľnom priestore je $L = 20 \\log_{10} \\dfrac{4\\pi d}{\\lambda}$.`,
              solution: M`$L = 20 \\log_{10} \\dfrac{4\\pi \\cdot ${D(d)}}{${D(lam)}} \\doteq ${u(FSPL, 'dB')}$.` },
            { q: T`Akú silu signálu (v dBm) zachytí notebook? Zaokrúhli na desatiny.`, answer: Pr, tol: 0.15, signed: true, show: U(Pr, 'dBm'),
              hint: T`V decibeloch sa zisky pripočítavajú a straty odčítavajú: $P_r = P_t + G_t + G_r - L - n \\cdot L_s$.`,
              solution: M`$P_r = ${D(PdBm)} + ${Gd} + ${Gd} - ${D(FSPL)} - ${n} \\cdot ${Lw} \\doteq ${u(Pr, 'dBm')}$.`,
              mistakes: [{ value: r1(Pr + n * Lw), msg: T`Nezabudni odčítať útlm stien.` }] },
            { q: T`Do akej najväčšej vzdialenosti (v metroch) by notebook za rovnakými stenami ešte zachytil spoľahlivý signál? Zaokrúhli na celé metre.`, answer: dmax, tol: tolOf(dmax, 1, 0.01), show: U(dmax, 'm'),
              hint: T`Polož $P_r = ${u(S, 'dBm')}$, vyjadri najväčší prípustný útlm $L$ a z neho vzdialenosť $d = \\dfrac{\\lambda}{4\\pi} \\cdot 10^{L/20}$.`,
              solution: M`$L = ${D(PdBm)} + ${2 * Gd} - ${n * Lw} - (${S}) = ${u(Lmax, 'dB')}$, $d = \\dfrac{${D(lam)}}{4\\pi} \\cdot 10^{${D(Lmax)}/20}\\,\\text{m} \\doteq ${u(dmax, 'm')}$.` }
          ],
          wrap: T`Decibely menia násobenie na sčítanie: zisky antén sa pripočítajú, útlm šírením a stenami sa odčíta. Útlm vo voľnom priestore rastie s logaritmom vzdialenosti a pri rovnakých anténach je väčší pri vyššej frekvencii – preto má Wi-Fi v pásme 5 GHz kratší dosah ako v pásme 2,4 GHz.`
        };
      }
    },
    {
      id: 'datovanie', icon: '🦴', level: 'vs', grades: [1, 2], lessons: ['v7-radioaktivita', 's4-radioaktivita'],
      title: 'Rádiouhlíkové datovanie',
      make() {
        const Th = 5730, lam = Math.LN2 / Th, l4 = r3(lam * 1e4);
        const r = rnd(15, 80), age = Math.round(Math.log(100 / r) / lam), m = rstep(1, 5, 0.5);
        const A = r3((0.23 * m * r) / 100), th = pick([2, 5, 10, 24]), N = Math.round(A * 3600 * th);
        const rel = r2(100 / Math.sqrt(N)), dt = Math.round(rel / 100 / lam);
        const ageTol = tolOf(age, 2, 0.002);
        return {
          story: T`Pri archeologickom výskume sa našiel kúsok dreveného uhlia, ktorý obsahuje $${u(m, 'g')}$ uhlíka. V živom dreve pripadá na každý gram uhlíka aktivita izotopu $^{14}\\text{C}$ asi $${u(0.23, 'Bq')}$. Meranie ukázalo, že v náleze zostalo už len ${r} % pôvodného množstva $^{14}\\text{C}$. Polčas rozpadu $^{14}\\text{C}$ je 5730 rokov.`,
          steps: [
            { q: T`Aká je rozpadová konštanta $^{14}\\text{C}$ v jednotkách $10^{-4}$ za rok? Zaokrúhli na tisíciny.`, answer: l4, tol: 0.002,
              hint: T`Rozpadová konštanta a polčas rozpadu súvisia vzťahom $\\lambda = \\dfrac{\\ln 2}{T_{1/2}}$.`,
              solution: T`$\\lambda = \\dfrac{\\ln 2}{5730} \\doteq ${D(l4)} \\cdot 10^{-4}$ za rok.`,
              mistakes: [{ value: r3(1e4 / Th), msg: T`Chýba $\\ln 2$: rozpadová konštanta nie je len prevrátená hodnota polčasu rozpadu.` }] },
            { q: T`Aký starý je nález (v rokoch)? Zaokrúhli na celé roky.`, answer: age, tol: ageTol,
              hint: T`Z rozpadového zákona $N = N_0\\,e^{-\\lambda t}$ vyjadri čas: $t = \\dfrac{1}{\\lambda} \\ln \\dfrac{N_0}{N}$.`,
              solution: M`$t = \\dfrac{5730}{\\ln 2} \\cdot \\ln \\dfrac{100}{${r}} \\doteq ${D(age)}$.`,
              mistakes: [{ value: Math.round((Th * (100 - r)) / 50), msg: T`Rozpad nie je lineárny: za každý polčas rozpadu ubudne polovica toho, čo ešte zostalo. Použi logaritmus.` }]
                .filter((x) => Math.abs(x.value - age) > 3 * ageTol) },
            { q: T`Akú aktivitu (v Bq) má teraz celá vzorka? Zaokrúhli na tisíciny.`, answer: A, tol: 0.002, show: U(A, 'Bq'),
              hint: T`Aktivita je úmerná počtu nerozpadnutých jadier: z aktivity živého dreva zostalo ${r} %.`,
              solution: M`$A = ${D(m)} \\cdot ${u(0.23, 'Bq')} \\cdot ${D(r / 100)} \\doteq ${u(A, 'Bq')}$.` },
            { q: T`Detektor zaznamená každý rozpad vo vzorke a meria $${u(th, 'h')}$. Koľko rozpadov približne napočíta?`, answer: N, tol: tolOf(N, 2, 0.015),
              hint: T`Aktivita $1\\,\\text{Bq}$ znamená jeden rozpad za sekundu. Čas merania preveď na sekundy.`,
              solution: M`$N = ${u(A, 'Bq')} \\cdot ${th} \\cdot 3600\\,\\text{s} \\doteq ${D(N)}$.` },
            { q: T`Počet rozpadov sa riadi Poissonovým rozdelením, takže jeho štatistická neistota je $\\sqrt{N}$. Aká je relatívna neistota merania v percentách? Zaokrúhli na stotiny.`, answer: rel, tol: tolOf(rel, 0.011, 0.01), show: PCT(rel),
              hint: T`Relatívna neistota je $\\dfrac{\\sqrt{N}}{N} = \\dfrac{1}{\\sqrt{N}}$.`,
              solution: M`$\\dfrac{1}{\\sqrt{${D(N)}}} \\cdot 100\\,\\% \\doteq ${D(rel)}\\,\\%$.` },
            { q: T`O koľko rokov sa pre túto neistotu môže mýliť odhad veku nálezu? Zaokrúhli na celé roky.`, answer: dt, tol: tolOf(dt, 1, 0.02),
              hint: T`Z $t = \\dfrac{1}{\\lambda} \\ln \\dfrac{N_0}{N}$ vyplýva $\\Delta t = \\dfrac{1}{\\lambda} \\cdot \\dfrac{\\Delta N}{N}$.`,
              solution: M`$\\Delta t = \\dfrac{5730}{\\ln 2} \\cdot ${D(rel / 100)} \\doteq ${D(dt)}$.` }
          ],
          wrap: T`Rádioaktívny rozpad jedného jadra je náhodný, no veľké množstvo jadier sa rozpadá presne podľa exponenciálneho zákona. Vek nálezu určíme z podielu zostávajúceho a pôvodného množstva $^{14}\\text{C}$. Presnosť však obmedzuje počet napočítaných rozpadov – dlhšie meranie alebo väčšia vzorka dajú presnejší vek.`
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
