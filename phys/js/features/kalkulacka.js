/* Kalkulačka vzorcov: stránka #/kalkulacka (výber vzorca s hľadaním a filtrom tém) a #/kalkulacka/<vzorec>[/<neznáma>].
   Žiak vyberie neznámu, ostatné veličiny zapíše aj s jednotkou („72 km/h“, „2,5 t“ – JEDNOTKY.parseQuantity;
   bez jednotky platí predvolená), výsledok dostane v zvolenej jednotke rovnakého rozmeru a s postupom v KaTeX:
   vzorec → vyjadrenie neznámej → dosadenie v SI → výsledok. Upozorní na nezhodu rozmeru a nefyzikálny výsledok.
   Vzťahy sú strojovo čitateľné: súčinové (mono – neznáma sa vyjadrí symbolicky pre každú veličinu) alebo všeobecné
   (eq – ľavá a pravá strana, sol – ručne vyjadrené neznáme, ostatné sa riešia numericky bisekciou). Každý výsledok
   sa overí dosadením späť. V lekcii box s odkazmi na vzorce jej témy, v ťaháku vzorcov odkaz „Vypočítať“.
   Výpočtové jadro (bez DOM) je window.KALKULACKA – dá sa overiť v node. */
(function () {
  'use strict';

  /* ---------- konštanty ---------- */
  const PI = Math.PI;
  const CONST = {
    G: { tex: 'G', v: 6.674e-11, u: 'N·m^2/kg^2' },
    k: { tex: 'k', v: 8.988e9, u: 'N·m^2/C^2' },
    h: { tex: 'h', v: 6.626e-34, u: 'J·s' },
    c: { tex: 'c', v: 2.998e8, u: 'm/s' },
    R: { tex: 'R', v: 8.314, u: 'J/(mol·K)' },
    kB: { tex: 'k', v: 1.381e-23, u: 'J/K' },
    mu0: { tex: '\\mu_0', v: 4 * PI * 1e-7, u: 'T·m/A' }
  };

  /* ---------- veličiny ----------
     tex – symbol, n – slovenský názov (preklad z balíkov obsahu, inak kľúč calcQ_<id> v js/lang), si – jednotka SI
     ('' = bezrozmerná), u – predvolená jednotka vstupu (inak si), ex – typická veľkosť v SI (testy),
     pos – kladná, nn – nezáporná, min/max – rozsah, sg – môže mať znamienko, diff – rozdiel teplôt (°C bez posunu),
     angle – uhol (jednotky ° a rad), units – ďalšie jednotky do výberu výsledku, def – predvolená hodnota vstupu. */
  const q = (tex, n, si, ex, o) => Object.assign({ tex, n, si, ex }, o || {});
  const Q = {
    m: q('m', 'Hmotnosť', 'kg', 10, { pos: 1 }),
    V: q('V', 'Objem', 'm^3', 0.01, { pos: 1 }),
    rho: q('\\rho', 'Hustota', 'kg/m^3', 1000, { pos: 1 }),
    s: q('s', 'Dráha', 'm', 100, { pos: 1 }),
    t: q('t', 'Čas', 's', 10, { pos: 1 }),
    v: q('v', 'Rýchlosť', 'm/s', 10, { pos: 1 }),
    v0: q('v_0', 'Začiatočná rýchlosť', 'm/s', 10, { nn: 1 }),
    a: q('a', 'Zrýchlenie', 'm/s^2', 2, { sg: 1 }),
    dv: q('\\Delta v', 'Zmena rýchlosti', 'm/s', 10, { sg: 1 }),
    dt: q('\\Delta t', 'Čas', 's', 10, { pos: 1 }),
    g: q('g', 'Tiažové zrýchlenie', 'm/s^2', 9.81, { pos: 1, def: 9.81 }),
    h: q('h', 'Výška', 'm', 10, { pos: 1 }),
    hd: q('h', 'Hĺbka', 'm', 10, { pos: 1 }),
    r: q('r', 'Polomer', 'm', 1, { pos: 1 }),
    ad: q('a_d', 'Dostredivé zrýchlenie', 'm/s^2', 5, { pos: 1 }),
    F: q('F', 'Sila', 'N', 100, { pos: 1 }),
    Fg: q('F_g', 'Tiaž', 'N', 100, { pos: 1 }),
    Ftr: q('F_{tr}', 'Trecia sila', 'N', 50, { pos: 1 }),
    Fn: q('F_n', 'Kolmá tlaková sila', 'N', 100, { pos: 1 }),
    Fd: q('F_d', 'Dostredivá sila', 'N', 100, { pos: 1 }),
    mu: q('\\mu', 'Súčiniteľ trenia', '', 0.3, { pos: 1 }),
    pm: q('p', 'Hybnosť', 'kg·m/s', 10, { sg: 1, units: ['N·s'] }),
    k: q('k', 'Tuhosť pružiny', 'N/m', 100, { pos: 1 }),
    dl: q('\\Delta l', 'Predĺženie', 'm', 0.05, { pos: 1 }),
    M: q('M', 'Moment sily', 'N·m', 10, { pos: 1, units: ['N·m', 'kN·m'] }),
    ra: q('r', 'Rameno sily', 'm', 0.5, { pos: 1 }),
    W: q('W', 'Práca', 'J', 1000, { pos: 1 }),
    P: q('P', 'Výkon', 'W', 1000, { pos: 1 }),
    Ek: q('E_k', 'Kinetická energia', 'J', 1000, { nn: 1 }),
    Ep: q('E_p', 'Potenciálna energia', 'J', 1000, { pos: 1 }),
    Epp: q('E_p', 'Energia pružnosti', 'J', 10, { nn: 1 }),
    eta: q('\\eta', 'Účinnosť', '', 0.7, { pos: 1, max: 1, u: '%' }),
    Wu: q('W_u', 'Užitočná práca', 'J', 700, { pos: 1 }),
    Wv: q('W_v', 'Dodaná práca', 'J', 1000, { pos: 1 }),
    p: q('p', 'Tlak', 'Pa', 1e5, { pos: 1 }),
    S: q('S', 'Obsah plochy', 'm^2', 0.1, { pos: 1 }),
    rhok: q('\\rho_k', 'Hustota kvapaliny', 'kg/m^3', 1000, { pos: 1 }),
    Vp: q('V_{pon}', 'Objem ponorenej časti telesa', 'm^3', 0.001, { pos: 1 }),
    Fvz: q('F_{vz}', 'Vztlaková sila', 'N', 10, { pos: 1 }),
    S1: q('S_1', 'Obsah prierezu v mieste 1', 'm^2', 0.01, { pos: 1 }),
    S2: q('S_2', 'Obsah prierezu v mieste 2', 'm^2', 0.01, { pos: 1 }),
    v1: q('v_1', 'Rýchlosť v mieste 1', 'm/s', 2, { pos: 1 }),
    v2: q('v_2', 'Rýchlosť v mieste 2', 'm/s', 2, { pos: 1 }),
    Q: q('Q', 'Teplo', 'J', 1e4, { sg: 1, units: ['kJ', 'MJ', 'kcal', 'cal'] }),
    c: q('c', 'Merná tepelná kapacita', 'J/(kg·K)', 1000, { pos: 1 }),
    dT: q('\\Delta t', 'Zmena teploty', 'K', 20, { sg: 1, diff: 1, u: '°C' }),
    Lt: q('L', 'Merné skupenské teplo', 'J/kg', 3e5, { pos: 1 }),
    n: q('n', 'Látkové množstvo', 'mol', 1, { pos: 1 }),
    T: q('T', 'Termodynamická teplota', 'K', 300, { pos: 1, units: ['°C'] }),
    dU: q('\\Delta U', 'Zmena vnútornej energie', 'J', 1000, { sg: 1 }),
    Qd: q('Q', 'Teplo dodané plynu', 'J', 1000, { sg: 1 }),
    Wd: q('W', 'Práca dodaná plynu', 'J', 1000, { sg: 1 }),
    al: q('\\alpha', 'Súčiniteľ teplotnej dĺžkovej rozťažnosti', '1/K', 1e-5, { pos: 1 }),
    l0: q('l_0', 'Pôvodná dĺžka', 'm', 1, { pos: 1 }),
    dlt: q('\\Delta l', 'Predĺženie', 'm', 0.001, { sg: 1 }),
    Es: q('\\overline{E}_k', 'Stredná kinetická energia molekuly', 'J', 6e-21, { pos: 1, units: ['eV', 'meV'] }),
    I: q('I', 'Elektrický prúd', 'A', 1, { pos: 1 }),
    Qe: q('Q', 'Elektrický náboj', 'C', 1, { pos: 1 }),
    U: q('U', 'Elektrické napätie', 'V', 10, { pos: 1 }),
    R: q('R', 'Elektrický odpor', 'Ω', 100, { pos: 1 }),
    R1: q('R_1', 'Odpor prvého rezistora', 'Ω', 100, { pos: 1 }),
    R2: q('R_2', 'Odpor druhého rezistora', 'Ω', 100, { pos: 1 }),
    rhor: q('\\rho', 'Merný elektrický odpor', 'Ω·m', 1e-7, { pos: 1, units: ['Ω·mm^2/m'] }),
    l: q('l', 'Dĺžka vodiča', 'm', 10, { pos: 1 }),
    Sv: q('S', 'Obsah prierezu vodiča', 'm^2', 1e-6, { pos: 1 }),
    C: q('C', 'Kapacita kondenzátora', 'F', 1e-6, { pos: 1 }),
    EC: q('E', 'Energia kondenzátora', 'J', 0.01, { nn: 1 }),
    FC: q('F_e', 'Elektrická sila', 'N', 0.1, { sg: 1 }),
    Q1: q('Q_1', 'Náboj prvého telesa', 'C', 1e-6, { sg: 1 }),
    Q2: q('Q_2', 'Náboj druhého telesa', 'C', 1e-6, { sg: 1 }),
    rr: q('r', 'Vzdialenosť', 'm', 0.1, { pos: 1 }),
    B: q('B', 'Magnetická indukcia', 'T', 0.1, { pos: 1 }),
    Fm: q('F_m', 'Magnetická sila', 'N', 0.1, { nn: 1 }),
    alpha: q('\\alpha', 'Uhol', 'rad', 0.8, { angle: 1, u: '°', nn: 1, max: PI }),
    Ui: q('U_i', 'Indukované napätie', 'V', 1, { sg: 1 }),
    dPhi: q('\\Delta\\Phi', 'Zmena magnetického toku', 'Wb', 0.01, { sg: 1 }),
    nI: q('n', 'Index lomu', '', 1.5, { min: 1 }),
    vm: q('v', 'Rýchlosť svetla v prostredí', 'm/s', 2e8, { pos: 1, max: 2.998e8 }),
    n1: q('n_1', 'Index lomu prvého prostredia', '', 1.2, { min: 1 }),
    n2: q('n_2', 'Index lomu druhého prostredia', '', 1.5, { min: 1 }),
    a1: q('\\alpha', 'Uhol dopadu', 'rad', 0.5, { angle: 1, u: '°', nn: 1, max: PI / 2 }),
    b1: q('\\beta', 'Uhol lomu', 'rad', 0.4, { angle: 1, u: '°', nn: 1, max: PI / 2 }),
    f: q('f', 'Ohnisková vzdialenosť', 'm', 0.1, { sg: 1 }),
    ao: q('a', 'Vzdialenosť predmetu', 'm', 0.3, { pos: 1 }),
    ai: q("a'", 'Vzdialenosť obrazu', 'm', 0.3, { sg: 1 }),
    Z: q('Z', 'Zväčšenie', '', 2, { sg: 1 }),
    lam: q('\\lambda', 'Vlnová dĺžka', 'm', 1, { pos: 1 }),
    fr: q('f', 'Frekvencia', 'Hz', 100, { pos: 1 }),
    Tp: q('T', 'Perióda', 's', 1, { pos: 1 }),
    Lk: q('L', 'Dĺžka závesu', 'm', 1, { pos: 1 }),
    om: q('\\omega', 'Uhlová frekvencia', 'rad/s', 10, { pos: 1, units: ['rad/s', '1/s'] }),
    Ef: q('E', 'Energia fotónu', 'J', 3e-19, { pos: 1, units: ['eV', 'keV', 'MeV'] }),
    Wvy: q('W_v', 'Výstupná práca', 'J', 3e-19, { pos: 1, units: ['eV'] }),
    Eke: q('E_k', 'Kinetická energia elektrónu', 'J', 1e-19, { nn: 1, units: ['eV'] }),
    N: q('N', 'Počet nerozpadnutých jadier', '', 1000, { pos: 1 }),
    N0: q('N_0', 'Začiatočný počet jadier', '', 4000, { pos: 1 }),
    T12: q('T_{1/2}', 'Polčas rozpadu', 's', 1000, { pos: 1 }),
    E: q('E', 'Energia', 'J', 1e13, { pos: 1, units: ['MeV', 'GeV', 'kWh', 'TJ'] }),
    gam: q('\\gamma', 'Lorentzov faktor', '', 2, { min: 1 }),
    vr: q('v', 'Rýchlosť', 'm/s', 2e8, { pos: 1, max: 2.998e8, units: ['km/s'] }),
    dt0: q('\\Delta t_0', 'Vlastný čas', 's', 1, { pos: 1 }),
    dtr: q('\\Delta t', 'Čas nameraný pozorovateľom', 's', 2, { pos: 1 }),
    L0: q('L_0', 'Vlastná dĺžka', 'm', 10, { pos: 1 }),
    Lr: q('L', 'Dĺžka nameraná pozorovateľom', 'm', 5, { pos: 1 }),
    Ekr: q('E_k', 'Kinetická energia', 'J', 1e-13, { pos: 1, units: ['eV', 'keV', 'MeV', 'GeV'] }),
    m1: q('m_1', 'Hmotnosť prvého telesa', 'kg', 1e3, { pos: 1 }),
    m2: q('m_2', 'Hmotnosť druhého telesa', 'kg', 1e3, { pos: 1 }),
    Fgr: q('F_g', 'Gravitačná sila', 'N', 1e-3, { pos: 1 }),
    Mz: q('M', 'Hmotnosť centrálneho telesa', 'kg', 6e24, { pos: 1 }),
    rg: q('r', 'Vzdialenosť stredov', 'm', 1e7, { pos: 1, units: ['km'] }),
    vo: q('v', 'Obežná rýchlosť', 'm/s', 7000, { pos: 1, units: ['km/s'] }),
    H0: q('H_0', 'Hubbleova konštanta', '1/s', 2.3e-18, { pos: 1, u: 'km/s/Mpc', units: ['km/s/Mpc', '1/s'] }),
    dg: q('d', 'Vzdialenosť galaxie', 'm', 3e24, { pos: 1, u: 'Mpc', units: ['Mpc', 'ly'] }),
    vg: q('v', 'Rýchlosť vzďaľovania galaxie', 'm/s', 7e6, { pos: 1, units: ['km/s'] }),
    Rp: q('R', 'Polomer planéty', 'm', 6.4e6, { pos: 1, units: ['km'] }),
    ak: q('a', 'Hlavná polos dráhy', 'm', 1.5e11, { pos: 1, units: ['km', 'AU'] }),
    To: q('T', 'Obežná doba', 's', 3e7, { pos: 1, units: ['d', 'rok'] })
  };
  Object.keys(Q).forEach((id) => { Q[id].id = id; });

  /* ---------- vzorce ----------
     id, th – téma (alebo pole tém), lv – ročník, n – slovenský názov (preklad z balíka vzorcov, inak kľúč calcF<Id>),
     src – tex z js/vzorce.js → neznáma, ktorú tento zápis počíta (odkaz „Vypočítať“ v ťaháku),
     vars – [kľúč, veličina, úpravy] (kľúč je symbol v zápise), mono – súčinový tvar „ľavá = súčin“ (2^-1 m v^2, pi,
     #G konštanta, -1 znamienko), tex – zápis vzorca ako funkcia S (S(k) symbol alebo dosadená hodnota, S.p(k) základ
     mocniny, S.x násobenie), eq – [ľavá, pravá] strana, sol – vyjadrené neznáme
     { kľúč: [tex(S), hodnota(x), ďalšie korene (hodnota, x)?] }; neznáma bez sol sa rieši numericky. */
  const F = [];
  const def = (o) => { F.push(o); return o; };
  const vars = (s) => s.split(' ').map((p) => { const [k, qid] = p.split(':'); return [k, qid || k]; });

  // látky
  def({ id: 'hustota', th: 'latky', lv: 'r6', n: 'Hustota', vars: vars('rho m V'), mono: ['rho', 'm V^-1'],
    src: { '\\rho = \\frac{m}{V}': 'rho', 'm = \\rho\\,V': 'm', 'V = \\frac{m}{\\rho}': 'V' } });
  // pohyb
  def({ id: 'rychlost', th: 'pohyb', lv: 'r7', n: 'Rýchlosť', vars: vars('v s t'), mono: ['v', 's t^-1'],
    src: { 'v = \\frac{s}{t}': 'v', 's = v\\,t': 's', 't = \\frac{s}{v}': 't' } });
  def({ id: 'zrychlenie', th: 'pohyb', lv: 's1', n: 'Zrýchlenie', vars: vars('a dv dt'), mono: ['a', 'dv dt^-1'] });
  def({ id: 'zrychleny-v', th: 'pohyb', lv: 's1', n: 'Rýchlosť rovnomerne zrýchleného pohybu',
    vars: [['v', 'v', { sg: 1 }], ['v0', 'v0', { sg: 1 }], ['a', 'a'], ['t', 't']],
    src: { 'v = v_0 + a\\,t': 'v' },
    tex: (S) => `${S('v')} = ${S('v0')} + ${S('a')}${S.x}${S('t')}`,
    eq: (x) => [x.v, x.v0 + x.a * x.t],
    sol: {
      v: [(S) => `${S('v0')} + ${S('a')}${S.x}${S('t')}`, (x) => x.v0 + x.a * x.t],
      v0: [(S) => `${S('v')} - ${S('a')}${S.x}${S('t')}`, (x) => x.v - x.a * x.t],
      a: [(S) => `\\frac{${S('v')} - ${S('v0')}}{${S('t')}}`, (x) => (x.v - x.v0) / x.t],
      t: [(S) => `\\frac{${S('v')} - ${S('v0')}}{${S('a')}}`, (x) => (x.v - x.v0) / x.a]
    } });
  def({ id: 'zrychleny-s', th: 'pohyb', lv: 's1', n: 'Dráha rovnomerne zrýchleného pohybu',
    vars: [['s', 's', { sg: 1 }], ['v0', 'v0', { sg: 1 }], ['a', 'a'], ['t', 't']],
    src: { 's = v_0\\,t + \\tfrac{1}{2}\\,a\\,t^{2}': 's' },
    tex: (S) => `${S('s')} = ${S('v0')}${S.x}${S('t')} + \\tfrac{1}{2}${S.x}${S('a')}${S.x}${S.p('t')}^{2}`,
    eq: (x) => [x.s, x.v0 * x.t + 0.5 * x.a * x.t * x.t],
    sol: {
      s: [(S) => `${S('v0')}${S.x}${S('t')} + \\tfrac{1}{2}${S.x}${S('a')}${S.x}${S.p('t')}^{2}`, (x) => x.v0 * x.t + 0.5 * x.a * x.t * x.t],
      v0: [(S) => `\\frac{${S('s')} - \\tfrac{1}{2}${S.x}${S('a')}${S.x}${S.p('t')}^{2}}{${S('t')}}`, (x) => (x.s - 0.5 * x.a * x.t * x.t) / x.t],
      a: [(S) => `\\frac{2${S.x}\\left(${S('s')} - ${S('v0')}${S.x}${S('t')}\\right)}{${S.p('t')}^{2}}`, (x) => 2 * (x.s - x.v0 * x.t) / (x.t * x.t)]
      // t: kvadratická rovnica – rieši sa numericky (môže mať dva kladné korene)
    } });
  def({ id: 'bez-casu', th: 'pohyb', lv: 's1', n: 'Rýchlosť bez času', vars: [['v', 'v', { nn: 1, pos: 0 }], ['v0', 'v0'], ['a', 'a'], ['s', 's', { sg: 1 }]],
    src: { 'v^{2} - v_0^{2} = 2\\,a\\,s': 'v' },
    tex: (S) => `${S.p('v')}^{2} - ${S.p('v0')}^{2} = 2${S.x}${S('a')}${S.x}${S('s')}`,
    eq: (x) => [x.v * x.v - x.v0 * x.v0, 2 * x.a * x.s],
    sol: {
      v: [(S) => `\\sqrt{${S.p('v0')}^{2} + 2${S.x}${S('a')}${S.x}${S('s')}}`, (x) => Math.sqrt(x.v0 * x.v0 + 2 * x.a * x.s)],
      v0: [(S) => `\\sqrt{${S.p('v')}^{2} - 2${S.x}${S('a')}${S.x}${S('s')}}`, (x) => Math.sqrt(x.v * x.v - 2 * x.a * x.s)],
      a: [(S) => `\\frac{${S.p('v')}^{2} - ${S.p('v0')}^{2}}{2${S.x}${S('s')}}`, (x) => (x.v * x.v - x.v0 * x.v0) / (2 * x.s)],
      s: [(S) => `\\frac{${S.p('v')}^{2} - ${S.p('v0')}^{2}}{2${S.x}${S('a')}}`, (x) => (x.v * x.v - x.v0 * x.v0) / (2 * x.a)]
    } });
  def({ id: 'pad-h', th: 'pohyb', lv: 's1', n: 'Dráha pádu', vars: vars('h g t'), mono: ['h', '2^-1 g t^2'], src: { 'h = \\tfrac{1}{2}\\,g\\,t^{2}': 'h' } });
  def({ id: 'pad-v', th: 'pohyb', lv: 's1', n: 'Rýchlosť pádu', vars: vars('v g t'), mono: ['v', 'g t'], src: { 'v = g\\,t': 'v' } });
  def({ id: 'pad-vh', th: 'pohyb', lv: 's1', n: 'Rýchlosť dopadu z výšky', vars: vars('v g h'), mono: ['v', '2^0.5 g^0.5 h^0.5'] });
  def({ id: 'dostr-a', th: 'pohyb', lv: 's1', n: 'Dostredivé zrýchlenie', vars: vars('ad v r'), mono: ['ad', 'v^2 r^-1'] });
  // sily
  def({ id: 'tiaz', th: 'sily', lv: 'r7', n: 'Tiaž', vars: vars('Fg m g'), mono: ['Fg', 'm g'], src: { 'F_g = m\\,g': 'Fg' } });
  def({ id: 'trenie', th: 'sily', lv: 'r7', n: 'Trenie', vars: vars('Ftr mu Fn'), mono: ['Ftr', 'mu Fn'], src: { 'F_{tr} = \\mu\\,F_n': 'Ftr' } });
  def({ id: 'newton', th: 'sily', lv: 's1', n: 'Druhý Newtonov zákon', vars: [['F', 'F', { sg: 1 }], ['m', 'm'], ['a', 'a']], mono: ['F', 'm a'],
    src: { '\\vec F = m\\,\\vec a': 'F', 'F = m\\,a': 'F' } });
  def({ id: 'hybnost', th: 'sily', lv: 's1', n: 'Hybnosť', vars: [['p', 'pm'], ['m', 'm'], ['v', 'v', { sg: 1 }]], mono: ['p', 'm v'], src: { '\\vec p = m\\,\\vec v': 'p' } });
  def({ id: 'hooke', th: 'sily', lv: 's1', n: 'Hookov zákon', vars: vars('F k dl'), mono: ['F', 'k dl'] });
  def({ id: 'moment', th: 'sily', lv: 'r7', n: 'Moment sily', vars: vars('M F r:ra'), mono: ['M', 'F r'] });
  def({ id: 'dostr-f', th: 'sily', lv: 's1', n: 'Dostredivá sila', vars: vars('Fd m v r'), mono: ['Fd', 'm v^2 r^-1'] });
  def({ id: 'gravitacia', th: ['vesmir', 'sily'], lv: 's1', n: 'Newtonov gravitačný zákon', vars: vars('F:Fgr m1 m2 r:rg'), mono: ['F', '#G m1 m2 r^-2'],
    src: { 'F = G\\,\\frac{m_1\\,m_2}{r^{2}}': 'F' } });
  // energia
  def({ id: 'praca', th: 'energia', lv: 'r8', n: 'Mechanická práca', vars: vars('W F s'), mono: ['W', 'F s'], src: { 'W = F\\,s': 'W' } });
  def({ id: 'vykon', th: 'energia', lv: 'r8', n: 'Výkon', vars: vars('P W t'), mono: ['P', 'W t^-1'], src: { 'P = \\frac{W}{t}': 'P' } });
  def({ id: 'vykon-v', th: 'energia', lv: 's1', n: 'Výkon pri stálej rýchlosti', vars: vars('P F v'), mono: ['P', 'F v'] });
  def({ id: 'ek', th: 'energia', lv: 'r8', n: 'Kinetická energia', vars: [['Ek', 'Ek', { pos: 1 }], ['m', 'm'], ['v', 'v']], mono: ['Ek', '2^-1 m v^2'],
    src: { 'E_k = \\tfrac{1}{2}\\,m\\,v^{2}': 'Ek' } });
  def({ id: 'ep', th: 'energia', lv: 'r8', n: 'Potenciálna energia', vars: vars('Ep m g h'), mono: ['Ep', 'm g h'], src: { 'E_p = m\\,g\\,h': 'Ep' } });
  def({ id: 'ep-pruz', th: 'energia', lv: 's1', n: 'Energia pružnosti', vars: [['Ep', 'Epp', { pos: 1 }], ['k', 'k'], ['dl', 'dl']], mono: ['Ep', '2^-1 k dl^2'] });
  def({ id: 'ucinnost', th: 'energia', lv: 's1', n: 'Účinnosť', vars: vars('eta Wu Wv'), mono: ['eta', 'Wu Wv^-1'], src: { '\\eta = \\frac{W_u}{W_v}\\cdot 100\\,\\%': 'eta' } });
  // tekutiny
  def({ id: 'tlak', th: 'tekutiny', lv: 'r6', n: 'Tlak', vars: vars('p F S'), mono: ['p', 'F S^-1'], src: { 'p = \\frac{F}{S}': 'p' } });
  def({ id: 'hydro', th: 'tekutiny', lv: 'r6', n: 'Hydrostatický tlak', vars: vars('p rho:rhok g h:hd'), mono: ['p', 'rho g h'], src: { 'p = \\rho\\,g\\,h': 'p' } });
  def({ id: 'vztlak', th: 'tekutiny', lv: 'r6', n: 'Vztlaková sila', vars: vars('Fvz rho:rhok g Vp'), mono: ['Fvz', 'rho g Vp'], src: { 'F_{vz} = \\rho_k\\,g\\,V_{pon}': 'Fvz' } });
  def({ id: 'spojitost', th: 'tekutiny', lv: 's2', n: 'Rovnica spojitosti', vars: vars('S1 v1 S2 v2'), mono: ['v2', 'S1 v1 S2^-1'],
    tex: (S) => `${S('S1')}${S.x}${S('v1')} = ${S('S2')}${S.x}${S('v2')}` });
  // teplo
  def({ id: 'teplo', th: 'teplo', lv: 'r6', n: 'Teplo pri ohreve', vars: vars('Q m c dt:dT'), mono: ['Q', 'm c dt'], src: { 'Q = m\\,c\\,\\Delta t': 'Q' } });
  def({ id: 'skupenske', th: 'teplo', lv: 'r6', n: 'Teplo pri skupenskej premene', vars: [['Q', 'Q', { pos: 1, sg: 0 }], ['m', 'm'], ['L', 'Lt']], mono: ['Q', 'm L'], src: { 'Q = m\\,L': 'Q' } });
  def({ id: 'stavova', th: 'teplo', lv: 's2', n: 'Stavová rovnica', vars: vars('p V n T'), mono: ['p', 'n #R T V^-1'],
    tex: (S) => `${S('p')}${S.x}${S('V')} = ${S('n')}${S.x}${S('#R')}${S.x}${S('T')}`, src: { 'p\\,V = n\\,R\\,T': 'p' } });
  def({ id: 'prva-veta', th: 'teplo', lv: 's2', n: 'Prvá veta termodynamiky', vars: vars('dU Q:Qd W:Wd'), src: { '\\Delta U = Q + W': 'dU' },
    tex: (S) => `${S('dU')} = ${S('Q')} + ${S('W')}`,
    eq: (x) => [x.dU, x.Q + x.W],
    sol: {
      dU: [(S) => `${S('Q')} + ${S('W')}`, (x) => x.Q + x.W],
      Q: [(S) => `${S('dU')} - ${S('W')}`, (x) => x.dU - x.W],
      W: [(S) => `${S('dU')} - ${S('Q')}`, (x) => x.dU - x.Q]
    } });
  def({ id: 'roztaznost', th: 'teplo', lv: 's2', n: 'Teplotná dĺžková rozťažnosť', vars: vars('dl:dlt al l0 dt:dT'), mono: ['dl', 'al l0 dt'] });
  def({ id: 'stredna-ek', th: 'teplo', lv: 's2', n: 'Stredná kinetická energia molekuly', vars: vars('E:Es T'), mono: ['E', '3 2^-1 #kB T'] });
  // elektrina
  def({ id: 'prud', th: 'elektrina', lv: 'r8', n: 'Elektrický prúd', vars: vars('I Q:Qe t'), mono: ['I', 'Q t^-1'], src: { 'I = \\frac{Q}{t}': 'I' } });
  def({ id: 'napatie', th: 'elektrina', lv: 'r8', n: 'Napätie', vars: vars('U W Q:Qe'), mono: ['U', 'W Q^-1'], src: { 'U = \\frac{W}{Q}': 'U' } });
  def({ id: 'ohm', th: 'elektrina', lv: 'r9', n: 'Ohmov zákon', vars: vars('U R I'), mono: ['U', 'R I'], src: { 'U = R\\,I': 'U' } });
  def({ id: 'el-vykon', th: 'elektrina', lv: 'r9', n: 'Elektrický výkon', vars: vars('P U I'), mono: ['P', 'U I'], src: { 'P = U\\,I': 'P' } });
  def({ id: 'el-praca', th: 'elektrina', lv: 'r9', n: 'Elektrická práca', vars: vars('W U I t'), mono: ['W', 'U I t'], src: { 'W = U\\,I\\,t': 'W' } });
  def({ id: 'vykon-odpor', th: 'elektrina', lv: 'r9', n: 'Výkon na rezistore', vars: vars('P R I'), mono: ['P', 'R I^2'] });
  def({ id: 'seriove', th: 'elektrina', lv: 's3', n: 'Sériové zapojenie', vars: vars('R R1 R2'), src: { 'R = R_1 + R_2': 'R' },
    tex: (S) => `${S('R')} = ${S('R1')} + ${S('R2')}`,
    eq: (x) => [x.R, x.R1 + x.R2],
    sol: {
      R: [(S) => `${S('R1')} + ${S('R2')}`, (x) => x.R1 + x.R2],
      R1: [(S) => `${S('R')} - ${S('R2')}`, (x) => x.R - x.R2],
      R2: [(S) => `${S('R')} - ${S('R1')}`, (x) => x.R - x.R1]
    } });
  def({ id: 'paralelne', th: 'elektrina', lv: 's3', n: 'Paralelné zapojenie', vars: vars('R R1 R2'), src: { '\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}': 'R' },
    tex: (S) => `\\frac{1}{${S('R')}} = \\frac{1}{${S('R1')}} + \\frac{1}{${S('R2')}}`,
    eq: (x) => [1 / x.R, 1 / x.R1 + 1 / x.R2],
    sol: {
      R: [(S) => `\\frac{${S('R1')}${S.x}${S('R2')}}{${S('R1')} + ${S('R2')}}`, (x) => x.R1 * x.R2 / (x.R1 + x.R2)],
      R1: [(S) => `\\frac{${S('R')}${S.x}${S('R2')}}{${S('R2')} - ${S('R')}}`, (x) => x.R * x.R2 / (x.R2 - x.R)],
      R2: [(S) => `\\frac{${S('R')}${S.x}${S('R1')}}{${S('R1')} - ${S('R')}}`, (x) => x.R * x.R1 / (x.R1 - x.R)]
    } });
  def({ id: 'odpor-vodica', th: ['elektrina', 'pevne'], lv: 'r9', n: 'Odpor vodiča', vars: vars('R rho:rhor l S:Sv'), mono: ['R', 'rho l S^-1'],
    src: { 'R = \\rho_r\\,\\frac{l}{S}': 'R' } });
  def({ id: 'kapacita', th: 'elektrina', lv: 's3', n: 'Kapacita kondenzátora', vars: vars('C Q:Qe U'), mono: ['C', 'Q U^-1'] });
  def({ id: 'en-kond', th: 'elektrina', lv: 's3', n: 'Energia kondenzátora', vars: vars('E:EC C U'), mono: ['E', '2^-1 C U^2'] });
  def({ id: 'coulomb', th: 'elektrina', lv: 's3', n: 'Coulombov zákon', vars: vars('F:FC Q1 Q2 r:rr'), mono: ['F', '#k Q1 Q2 r^-2'] });
  // magnetizmus
  def({ id: 'sila-vodic', th: 'magnetizmus', lv: 's3', n: 'Sila na vodič s prúdom', vars: vars('F:Fm B I l alpha'), src: { 'F = B\\,I\\,l\\,\\sin\\alpha': 'F' },
    tex: (S) => `${S('F')} = ${S('B')}${S.x}${S('I')}${S.x}${S('l')}${S.x}\\sin ${S('alpha')}`,
    eq: (x) => [x.F, x.B * x.I * x.l * Math.sin(x.alpha)],
    sol: {
      F: [(S) => `${S('B')}${S.x}${S('I')}${S.x}${S('l')}${S.x}\\sin ${S('alpha')}`, (x) => x.B * x.I * x.l * Math.sin(x.alpha)],
      B: [(S) => `\\frac{${S('F')}}{${S('I')}${S.x}${S('l')}${S.x}\\sin ${S('alpha')}}`, (x) => x.F / (x.I * x.l * Math.sin(x.alpha))],
      I: [(S) => `\\frac{${S('F')}}{${S('B')}${S.x}${S('l')}${S.x}\\sin ${S('alpha')}}`, (x) => x.F / (x.B * x.l * Math.sin(x.alpha))],
      l: [(S) => `\\frac{${S('F')}}{${S('B')}${S.x}${S('I')}${S.x}\\sin ${S('alpha')}}`, (x) => x.F / (x.B * x.I * Math.sin(x.alpha))],
      alpha: [(S) => `\\arcsin\\frac{${S('F')}}{${S('B')}${S.x}${S('I')}${S.x}${S('l')}}`, (x) => Math.asin(x.F / (x.B * x.I * x.l)), (a) => [PI - a]]
    } });
  def({ id: 'pole-vodica', th: 'magnetizmus', lv: 's3', n: 'Magnetické pole priameho vodiča', vars: vars('B I r:rr'), mono: ['B', '#mu0 I 2^-1 pi^-1 r^-1'],
    src: { 'B = \\frac{\\mu_0\\,I}{2\\pi\\,r}': 'B' } });
  def({ id: 'indukcia', th: 'magnetizmus', lv: 's3', n: 'Indukované napätie', vars: vars('U:Ui dPhi dt'), mono: ['U', '-1 dPhi dt^-1'],
    src: { 'U_i = -\\frac{\\Delta\\Phi}{\\Delta t}': 'U' } });
  // svetlo
  def({ id: 'index-lomu', th: 'svetlo', lv: 'r7', n: 'Index lomu', vars: vars('n:nI v:vm'), mono: ['n', '#c v^-1'], src: { 'n = \\frac{c}{v}': 'n' } });
  def({ id: 'snell', th: 'svetlo', lv: 's3', n: 'Zákon lomu', vars: vars('n1 a:a1 n2 b:b1'),
    tex: (S) => `${S('n1')}${S.x}\\sin ${S('a')} = ${S('n2')}${S.x}\\sin ${S('b')}`,
    eq: (x) => [x.n1 * Math.sin(x.a), x.n2 * Math.sin(x.b)],
    sol: {
      n1: [(S) => `\\frac{${S('n2')}${S.x}\\sin ${S('b')}}{\\sin ${S('a')}}`, (x) => x.n2 * Math.sin(x.b) / Math.sin(x.a)],
      a: [(S) => `\\arcsin\\frac{${S('n2')}${S.x}\\sin ${S('b')}}{${S('n1')}}`, (x) => Math.asin(x.n2 * Math.sin(x.b) / x.n1)],
      n2: [(S) => `\\frac{${S('n1')}${S.x}\\sin ${S('a')}}{\\sin ${S('b')}}`, (x) => x.n1 * Math.sin(x.a) / Math.sin(x.b)],
      b: [(S) => `\\arcsin\\frac{${S('n1')}${S.x}\\sin ${S('a')}}{${S('n2')}}`, (x) => Math.asin(x.n1 * Math.sin(x.a) / x.n2)]
    } });
  def({ id: 'sosovka', th: 'svetlo', lv: 's3', n: 'Zobrazovacia rovnica', vars: vars('f a:ao ai'), src: { "\\frac{1}{f} = \\frac{1}{a} + \\frac{1}{a'}": 'f' },
    tex: (S) => `\\frac{1}{${S('f')}} = \\frac{1}{${S('a')}} + \\frac{1}{${S('ai')}}`,
    eq: (x) => [1 / x.f, 1 / x.a + 1 / x.ai],
    sol: {
      f: [(S) => `\\frac{${S('a')}${S.x}${S('ai')}}{${S('a')} + ${S('ai')}}`, (x) => x.a * x.ai / (x.a + x.ai)],
      a: [(S) => `\\frac{${S('f')}${S.x}${S('ai')}}{${S('ai')} - ${S('f')}}`, (x) => x.f * x.ai / (x.ai - x.f)],
      ai: [(S) => `\\frac{${S('a')}${S.x}${S('f')}}{${S('a')} - ${S('f')}}`, (x) => x.a * x.f / (x.a - x.f)]
    } });
  def({ id: 'zvacsenie', th: 'svetlo', lv: 's3', n: 'Zväčšenie', vars: vars('Z ai a:ao'), mono: ['Z', 'ai a^-1'], src: { "Z = \\frac{a'}{a}": 'Z' } });
  // vlny
  def({ id: 'vlna', th: 'vlny', lv: 's2', n: 'Vlnová rýchlosť', vars: vars('v lam f:fr'), mono: ['v', 'lam f'], src: { 'v = \\lambda\\,f': 'v' } });
  def({ id: 'perioda', th: 'vlny', lv: 's2', n: 'Perióda a frekvencia', vars: vars('f:fr T:Tp'), mono: ['f', 'T^-1'], src: { 'f = \\frac{1}{T}': 'f' } });
  def({ id: 'kyvadlo', th: 'vlny', lv: 's2', n: 'Perióda kyvadla', vars: vars('T:Tp L:Lk g'), mono: ['T', '2 pi L^0.5 g^-0.5'], src: { 'T = 2\\pi\\sqrt{\\frac{L}{g}}': 'T' } });
  def({ id: 'pruzina', th: 'vlny', lv: 's2', n: 'Perióda pružiny', vars: vars('T:Tp m k'), mono: ['T', '2 pi m^0.5 k^-0.5'], src: { 'T = 2\\pi\\sqrt{\\frac{m}{k}}': 'T' } });
  def({ id: 'omega', th: 'vlny', lv: 's2', n: 'Uhlová frekvencia', vars: vars('w:om f:fr'), mono: ['w', '2 pi f'] });
  // moderná fyzika
  def({ id: 'foton', th: 'moderna', lv: 's4', n: 'Energia fotónu', vars: vars('E:Ef f:fr'), mono: ['E', '#h f'], src: { 'E = h\\,f': 'E' } });
  def({ id: 'foton-lambda', th: 'moderna', lv: 's4', n: 'Energia fotónu z vlnovej dĺžky', vars: vars('E:Ef lam'), mono: ['E', '#h #c lam^-1'] });
  def({ id: 'debroglie', th: 'moderna', lv: 's4', n: 'De Broglieho vlnová dĺžka', vars: vars('lam m v'), mono: ['lam', '#h m^-1 v^-1'] });
  def({ id: 'fotoefekt', th: 'moderna', lv: 's4', n: 'Einsteinova rovnica fotoefektu', vars: vars('f:fr W:Wvy E:Eke'),
    tex: (S) => `${S('#h')}${S.x}${S('f')} = ${S('W')} + ${S('E')}`,
    eq: (x) => [CONST.h.v * x.f, x.W + x.E],
    sol: {
      f: [(S) => `\\frac{${S('W')} + ${S('E')}}{${S('#h')}}`, (x) => (x.W + x.E) / CONST.h.v],
      W: [(S) => `${S('#h')}${S.x}${S('f')} - ${S('E')}`, (x) => CONST.h.v * x.f - x.E],
      E: [(S) => `${S('#h')}${S.x}${S('f')} - ${S('W')}`, (x) => CONST.h.v * x.f - x.W]
    } });
  def({ id: 'rozpad', th: 'moderna', lv: 's4', n: 'Rádioaktívny rozpad', vars: vars('N N0 t T:T12'), src: { 'N = N_0\\cdot 2^{-t/T_{1/2}}': 'N' },
    tex: (S) => `${S('N')} = ${S('N0')}${S.x}2^{-${S('t')}/${S('T')}}`,
    eq: (x) => [x.N, x.N0 * Math.pow(2, -x.t / x.T)],
    sol: {
      N: [(S) => `${S('N0')}${S.x}2^{-${S('t')}/${S('T')}}`, (x) => x.N0 * Math.pow(2, -x.t / x.T)],
      N0: [(S) => `${S('N')}${S.x}2^{${S('t')}/${S('T')}}`, (x) => x.N * Math.pow(2, x.t / x.T)],
      t: [(S) => `${S('T')}${S.x}\\log_2 \\frac{${S('N0')}}{${S('N')}}`, (x) => x.T * Math.log2(x.N0 / x.N)],
      T: [(S) => `\\frac{${S('t')}}{\\log_2 \\frac{${S('N0')}}{${S('N')}}}`, (x) => x.t / Math.log2(x.N0 / x.N)]
    } });
  def({ id: 'emc2', th: 'moderna', lv: 's4', n: 'Ekvivalencia hmoty a energie', vars: vars('E m'), mono: ['E', 'm #c^2'], src: { 'E = m\\,c^{2}': 'E' } });
  // relativita
  def({ id: 'lorentz', th: 'relativita', lv: 'v6', n: 'Lorentzov faktor', vars: vars('g:gam v:vr'), src: { '\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^{2}}{c^{2}}}}': 'g' },
    tex: (S) => `${S('g')} = \\frac{1}{\\sqrt{1 - \\frac{${S.p('v')}^{2}}{${S.p('#c')}^{2}}}}`,
    eq: (x) => [x.g, 1 / Math.sqrt(1 - x.v * x.v / (CONST.c.v * CONST.c.v))],
    sol: {
      g: [(S) => `\\frac{1}{\\sqrt{1 - \\frac{${S.p('v')}^{2}}{${S.p('#c')}^{2}}}}`, (x) => 1 / Math.sqrt(1 - x.v * x.v / (CONST.c.v * CONST.c.v))],
      v: [(S) => `${S('#c')}${S.x}\\sqrt{1 - \\frac{1}{${S.p('g')}^{2}}}`, (x) => CONST.c.v * Math.sqrt(1 - 1 / (x.g * x.g))]
    } });
  def({ id: 'dilatacia', th: 'relativita', lv: 'v6', n: 'Dilatácia času', vars: vars('dt:dtr g:gam dt0'), mono: ['dt', 'g dt0'], src: { '\\Delta t = \\gamma\\,\\Delta t_0': 'dt' } });
  def({ id: 'kontrakcia', th: 'relativita', lv: 'v6', n: 'Kontrakcia dĺžky', vars: vars('L:Lr L0 g:gam'), mono: ['L', 'L0 g^-1'], src: { 'L = \\frac{L_0}{\\gamma}': 'L' } });
  def({ id: 'rel-energia', th: 'relativita', lv: 'v6', n: 'Relativistická energia', vars: vars('E g:gam m'), mono: ['E', 'g m #c^2'], src: { 'E = \\gamma\\,m\\,c^{2}': 'E' } });
  const relGamma = (S) => `\\frac{1}{\\sqrt{1 - \\frac{${S.p('v')}^{2}}{${S.p('#c')}^{2}}}}`;
  const relEk = (x) => { const c2 = CONST.c.v * CONST.c.v; return (1 / Math.sqrt(1 - x.v * x.v / c2) - 1) * x.m * c2; };
  def({ id: 'rel-ek', th: 'relativita', lv: 'v6', n: 'Relativistická kinetická energia', vars: vars('E:Ekr m v:vr'),
    tex: (S) => `${S('E')} = \\left(${relGamma(S)} - 1\\right)${S.x}${S('m')}${S.x}${S.p('#c')}^{2}`,
    eq: (x) => [x.E, relEk(x)],
    sol: {
      E: [(S) => `\\left(${relGamma(S)} - 1\\right)${S.x}${S('m')}${S.x}${S.p('#c')}^{2}`, relEk],
      m: [(S) => `\\frac{${S('E')}}{\\left(${relGamma(S)} - 1\\right)${S.x}${S.p('#c')}^{2}}`, (x) => x.E / relEk(Object.assign({}, x, { m: 1 }))]
      // v: numericky
    } });
  // vesmír
  def({ id: 'obezna', th: 'vesmir', lv: 's1', n: 'Obežná rýchlosť', vars: vars('v:vo M:Mz r:rg'), mono: ['v', '#G^0.5 M^0.5 r^-0.5'], src: { 'v = \\sqrt{\\frac{G\\,M}{r}}': 'v' } });
  def({ id: 'g-povrch', th: ['vesmir', 'sily'], lv: 's1', n: 'Gravitačné zrýchlenie na povrchu', vars: vars('g M:Mz R:Rp'), mono: ['g', '#G M R^-2'] });
  def({ id: 'kepler', th: 'vesmir', lv: 's1', n: 'Tretí Keplerov zákon', vars: vars('T:To a:ak M:Mz'), mono: ['T', '2 pi a^1.5 #G^-0.5 M^-0.5'] });
  def({ id: 'hubble', th: 'vesmir', lv: 'v10', n: 'Hubbleov zákon', vars: vars('v:vg H:H0 d:dg'), mono: ['v', 'H d'], src: { 'v = H_0\\,d': 'v' } });

  const byId = (id) => F.find((f) => f.id === id);
  const themes = (f) => (Array.isArray(f.th) ? f.th : [f.th]);

  /* ---------- súčinový tvar: rozbor, vyjadrenie, zápis ---------- */
  // racionálne číslo → [čitateľ, menovateľ] (menovateľ do 12 stačí: ½, ⅓, 3/2 …)
  function frac(x) {
    for (let d = 1; d <= 12; d++) if (Math.abs(x * d - Math.round(x * d)) < 1e-9) return [Math.round(x * d), d];
    return [x, 1];
  }
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; };
  const lcm = (a, b) => a / gcd(a, b) * b;

  // premenné vzorca: kľúč → veličina s úpravami (pos/sg … podľa vzorca)
  function varsOf(f) {
    if (!f._v) {
      f._v = f.vars.map(([k, qid, o]) => {
        if (!Q[qid]) throw new Error(`${f.id}: neznáma veličina ${qid}`);
        const v = Object.assign({}, Q[qid], o || {}, { key: k, qid });
        if (v.sg) { v.pos = 0; v.nn = 0; }
        return v;
      });
    }
    return f._v;
  }
  const varOf = (f, k) => varsOf(f).find((v) => v.key === k);

  // „2^-1 m v^2“ → faktory { kind: num|pi|const|var, key, base, e }; ľavá strana má exponent −1 (vzťah Π f^e = znamienko)
  function monoFactors(f) {
    if (f._m) return f._m;
    const [lhs, spec] = f.mono;
    let sign = 1;
    const fs = [{ kind: 'var', key: lhs, e: -1 }];
    spec.split(' ').forEach((tok) => {
      if (tok === '-1') { sign = -sign; return; }
      const [b, ex] = tok.split('^');
      const e = ex === undefined ? 1 : parseFloat(ex);
      if (/^\d+$/.test(b)) fs.push({ kind: 'num', base: +b, e });
      else if (b === 'pi') fs.push({ kind: 'pi', e });
      else if (b[0] === '#') fs.push({ kind: 'const', key: b.slice(1), e });
      else fs.push({ kind: 'var', key: b, e });
    });
    f._m = { sign, fs };
    return f._m;
  }

  // vyjadrenie neznámej u: u = znamienko · Π f^a, a = −e_i / e_u
  function monoSolve(f, u) {
    const { sign, fs } = monoFactors(f);
    const me = fs.find((x) => x.kind === 'var' && x.key === u);
    const out = fs.filter((x) => x !== me).map((x) => Object.assign({}, x, { e: -x.e / me.e }));
    // znamienko (−1)^(1/e_u): pri zápornom znamienku sa používa len s |e_u| = 1
    return { sign: sign < 0 && Math.round(1 / me.e) % 2 !== 0 ? -1 : 1, fs: out };
  }

  // hodnota súčinu s racionálnymi exponentmi (spoločná odmocnina, aby záporné činitele v súčine nevadili)
  function prodValue(p, val) {
    const D = p.fs.reduce((d, x) => lcm(d, frac(x.e)[1]), 1);
    let inner = 1;
    p.fs.forEach((x) => {
      const b = x.kind === 'num' ? x.base : x.kind === 'pi' ? PI : x.kind === 'const' ? CONST[x.key].v : val[x.key];
      inner *= Math.pow(b, Math.round(x.e * D));
    });
    if (D === 1) return p.sign * inner;
    if (inner < 0 && D % 2 === 0) return NaN;
    return p.sign * Math.sign(inner) * Math.pow(Math.abs(inner), 1 / D);
  }

  // zápis súčinu: zlomok čitateľ/menovateľ, pri necelých exponentoch spoločná odmocnina
  function prodTex(p, S) {
    // činitele s celým exponentom idú pred odmocninu, s necelým pod spoločnú odmocninu (2\pi\sqrt{L/g})
    const isInt = (e) => frac(e)[1] === 1;
    const inner = p.fs.filter((x) => !isInt(x.e)), outer = p.fs.filter((x) => isInt(x.e));
    const D = inner.reduce((d, x) => lcm(d, frac(x.e)[1]), 1);
    // číslo hneď pred \pi bez znaku násobenia (2\pi)
    const join = (arr) => arr.reduce((s, part, i) => s + (i && !(/^\d+$/.test(arr[i - 1]) && part.startsWith('\\pi')) ? S.x : '') + part, '');
    function split(fs, mult) {
      let nn = 1, nd = 1;
      const num = [], den = [];
      // poradie: čísla, π, potom konštanty a veličiny v poradí zápisu (2\pi\,B, nie 2\,B\,\pi)
      const rank = { num: 0, pi: 1, const: 2, var: 2 };
      fs.slice().sort((a, b) => rank[a.kind] - rank[b.kind]).forEach((x) => {
        const k = Math.round(x.e * mult);
        if (!k) return;
        if (x.kind === 'num') { if (k > 0) nn *= Math.pow(x.base, k); else nd *= Math.pow(x.base, -k); return; }
        const key = x.kind === 'pi' ? '#pi' : x.kind === 'const' ? '#' + x.key : x.key;
        const a = Math.abs(k);
        (k > 0 ? num : den).push(a === 1 ? S(key) : `${S.p(key)}^{${a}}`);
      });
      if (nn !== 1) num.unshift(String(nn));
      if (nd !== 1) den.unshift(String(nd));
      return [num, den];
    }
    const fracTex = (num, den) => { const n = num.length ? join(num) : '1'; return den.length ? `\\frac{${n}}{${join(den)}}` : n; };
    const [on, od] = split(outer, 1);
    if (inner.length) {
      const [inn, ind] = split(inner, D);
      on.push(`${D === 2 ? '\\sqrt' : `\\sqrt[${D}]`}{${fracTex(inn, ind)}}`);
    }
    return (p.sign < 0 ? '-' : '') + fracTex(on, od);
  }

  // ľavá a pravá strana súčinového vzťahu
  function monoEq(f) {
    const lhs = f.mono[0];
    const p = monoSolve(f, lhs);
    return (x) => [x[lhs], prodValue(p, x)];
  }
  const eqOf = (f) => (f.mono ? (f._eq || (f._eq = monoEq(f))) : f.eq);
  const texOf = (f, S) => (f.tex ? f.tex(S) : `${S(f.mono[0])} = ${prodTex(monoSolve(f, f.mono[0]), S)}`);
  // symbolické vyjadrenie neznámej [tex(S), hodnota(x)] alebo null → numericky
  function solver(f, u) {
    if (f.mono) { const p = monoSolve(f, u); return [(S) => prodTex(p, S), (x) => prodValue(p, x)]; }
    return (f.sol && f.sol[u]) || null;
  }
  const unknowns = (f) => varsOf(f).map((v) => v.key);
  // konštanty, ktoré vzorec používa (pre riadok „Konštanty“)
  function constsOf(f) {
    const probe = texOf(f, symMapper(f, { probe: true }));
    return Object.keys(CONST).filter((k) => probe.includes(`\u0001${k}\u0001`));
  }

  /* ---------- čísla ---------- */
  const SUPS = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  // číslo na sig platných číslic; veľké a malé s mocninou desiatky; dec – desatinný oddeľovač; tex – zápis pre KaTeX
  function fmt(x, dec = ',', tex = false, sig = 4) {
    if (!Number.isFinite(x)) return '?';
    if (x === 0) return '0';
    const minus = x < 0 ? (tex ? '-' : '−') : '';
    const a = Math.abs(x);
    let e = Math.floor(Math.log10(a));
    let m = +(a / Math.pow(10, e)).toPrecision(sig);
    if (m >= 10) { m /= 10; e++; }
    const d = (s) => (tex && dec === ',' ? s.replace('.', '{,}') : s.replace('.', dec));
    if (e >= 6 || e <= -4) {
      const ms = d(String(+m.toPrecision(sig)));
      return minus + (ms === '1' ? '' : ms + (tex ? '\\cdot ' : '·')) + (tex ? `10^{${e}}` : '10' + String(e).split('').map((c) => SUPS[c]).join(''));
    }
    return minus + d(String(+a.toPrecision(sig)));
  }

  /* ---------- jednotky (window.JEDNOTKY, js/jednotky.js) ---------- */
  const J = () => window.JEDNOTKY;
  const UNITS = ['m', 'km', 'dm', 'cm', 'mm', 'µm', 'nm', 'pm', 'AU', 'ly', 'kg', 'g', 'mg', 't', 'u',
    's', 'ms', 'µs', 'ns', 'min', 'h', 'd', 'rok', 'm/s', 'km/h', 'km/s', 'cm/s', 'm/s^2', 'cm/s^2',
    'N', 'kN', 'MN', 'mN', 'µN', 'Pa', 'hPa', 'kPa', 'MPa', 'GPa', 'bar', 'atm', 'mmHg',
    'J', 'mJ', 'kJ', 'MJ', 'GJ', 'eV', 'keV', 'MeV', 'GeV', 'Wh', 'kWh', 'W', 'mW', 'kW', 'MW', 'GW',
    'A', 'mA', 'µA', 'kA', 'V', 'mV', 'µV', 'kV', 'MV', 'Ω', 'mΩ', 'kΩ', 'MΩ', 'C', 'mC', 'µC', 'nC', 'pC', 'mAh', 'Ah',
    'F', 'mF', 'µF', 'nF', 'pF', 'T', 'mT', 'µT', 'nT', 'Wb', 'mWb', 'Hz', 'kHz', 'MHz', 'GHz', '1/min',
    'K', 'mol', 'mmol', 'kmol', 'm^2', 'dm^2', 'cm^2', 'mm^2', 'km^2', 'm^3', 'dm^3', 'cm^3', 'mm^3', 'l', 'ml', 'hl',
    'kg/m^3', 'g/cm^3', 'kg/dm^3', 'g/l', 'J/(kg·K)', 'kJ/(kg·K)', 'J/kg', 'kJ/kg', 'MJ/kg', 'N/m', 'kN/m', 'N/cm',
    'kg·m/s', 'Ω·m', '1/K', '1/s'];
  const P = (u) => J().parse(u);
  // Jednotky N·m a J majú rovnaký rozmer – N·m len pri momente sily (units), Hz len pri frekvencii.
  const ONLY = { 'N·m': 0, 'kN·m': 0, '1/s': 0, Hz: 'fr', kHz: 'fr', MHz: 'fr', GHz: 'fr', '1/min': 'fr' };
  // jednotky výsledku pre veličinu: rovnaký rozmer ako jednotka SI; uhly len ° a rad, bezrozmerné '' a %
  function unitsFor(v) {
    if (v.angle) return ['°', 'rad'];
    if (!v.si) return v.u === '%' ? ['%', ''] : ['', '%'];
    const si = P(v.si);
    if (!si.ok) return [v.si];
    const extra = v.diff ? ['°C', 'K', '°F'] : UNITS.filter((u) => {
      if (u in ONLY && ONLY[u] !== v.qid) return false;
      const r = P(u);
      return r.ok && J().sameDim(r, si);
    });
    return [...new Set([v.u || v.si, v.si].concat(v.units || [], extra))].filter((u) => P(u).ok);
  }
  // hodnota zo SI do jednotky u (rozdiel teplôt bez posunu)
  function fromSI(x, u, diff) {
    const r = P(u);
    return x / r.factor - (diff ? 0 : r.offset || 0);
  }

  // Vstup žiaka → { ok, si, value, unit } | { ok: false, error (kľúč I18N), vars }
  function parseInput(text, v) {
    const s = String(text == null ? '' : text).trim();
    if (!s) return { ok: false, error: 'calcErrEmpty' };
    const r = J().parseQuantity(s);
    if (!r.ok) return { ok: false, error: r.error || 'calcErrUnit', vars: { u: r.u || s } };
    const unit = r.unit || P(v.u || v.si);
    const unitText = r.unit ? (r.unit.text || s.replace(/^[^A-Za-zµμΩ°%‰(]*/, '')) : (v.u || v.si);
    if (!unit || !unit.ok) return { ok: false, error: 'calcErrUnit', vars: { u: s } };
    if (!J().sameDim(unit, P(v.si))) return { ok: false, error: 'calcErrDim', vars: { u: unitText || '1', exp: v.u || v.si || '1' } };
    const si = (r.value + (v.diff ? 0 : unit.offset || 0)) * unit.factor;
    return { ok: true, value: r.value, unit: unitText, si };
  }

  // symbol ako obyčajný text (ρ, v₀, Δt) do upozornení
  const plain = (tex) => String(tex).replace(/\\overline\{E\}/, 'Ē').replace(/\\Delta\s?/g, 'Δ').replace(/\\Phi/g, 'Φ')
    .replace(/\\(rho|mu|eta|alpha|beta|gamma|lambda|omega)/g, (m, g) => ({ rho: 'ρ', mu: 'μ', eta: 'η', alpha: 'α', beta: 'β', gamma: 'γ', lambda: 'λ', omega: 'ω' }[g]))
    .replace(/_\{?([^{}]+)\}?/, (m, s) => (/^\d$/.test(s) ? '₀₁₂₃₄₅₆₇₈₉'[+s] : '_' + s));
  // podmienka fyzikálnej zmysluplnosti, ktorú hodnota x (SI) porušuje → text („m > 0“), inak null
  function badValue(v, x, dec = ',') {
    const sym = plain(v.tex);
    if (v.pos && !(x > 0)) return `${sym} > 0`;
    if (v.nn && !(x >= 0)) return `${sym} ≥ 0`;
    if (v.min !== undefined && x < v.min * (1 - 1e-12)) return `${sym} ≥ ${fmt(v.min, dec)}`;
    if (v.max !== undefined && x > v.max * (1 + 1e-12) && v.u === '%') return `${sym} ≤ ${fmt(v.max * 100, dec)} %`;
    if (v.max !== undefined && x > v.max * (1 + 1e-12)) return v.angle ? `${sym} ≤ ${fmt(v.max * 180 / PI, dec)}°` : `${sym} ≤ ${fmt(v.max, dec)}${v.si ? ' ' + v.si.replace('^2', '²') : ''}`;
    return null;
  }

  /* ---------- numerické riešenie ---------- */
  // skúška dosadením: relatívny rozdiel strán
  function residual(f, x) {
    const [l, r] = eqOf(f)(x);
    if (!Number.isFinite(l) || !Number.isFinite(r)) return Infinity;
    const s = Math.max(Math.abs(l), Math.abs(r));
    return s === 0 ? 0 : Math.abs(l - r) / s;
  }
  const check = (f, x) => residual(f, x) < 1e-7;

  // Korene rovnice pre neznámu u na logaritmickej mriežke 10^-40 … 10^40 (aj záporné, ak veličina môže byť záporná):
  // zmena znamienka rozdielu strán → bisekcia → skúška dosadením (vylúči póly).
  function numeric(f, u, x) {
    const v = varOf(f, u), eq = eqOf(f);
    const g = (z) => { const [l, r] = eq(Object.assign({}, x, { [u]: z })); return l - r; };
    const pts = [];
    for (let k = -400; k <= 400; k++) pts.push(Math.pow(10, k / 10));
    const grid = v.pos ? pts : v.nn ? [0].concat(pts) : pts.map((p) => -p).reverse().concat([0], pts);
    const roots = [];
    const add = (z) => {
      if (check(f, Object.assign({}, x, { [u]: z })) && !roots.some((r) => Math.abs(r - z) <= 1e-9 * Math.max(Math.abs(r), Math.abs(z)))) roots.push(z);
    };
    // bisekcia na intervale so zmenou znamienka
    const bisect = (a, b, fa) => {
      for (let it = 0; it < 200; it++) {
        const m = (a + b) / 2, fm = g(m);
        if (!Number.isFinite(fm)) break;
        if (fm === 0 || m === a || m === b) return m;
        if (fa * fm < 0) b = m; else { a = m; fa = fm; }
      }
      return (a + b) / 2;
    };
    const G = grid.map(g);
    for (let i = 1; i < grid.length; i++) {
      const ga = G[i - 1], gb = G[i];
      // okraj definičného oboru v bunke (napr. v → c): hranica bisekciou, potom koreň medzi hranicou a mriežkou
      if (Number.isFinite(ga) !== Number.isFinite(gb)) {
        let a = grid[i - 1], b = grid[i];
        const inA = Number.isFinite(ga);
        for (let it = 0; it < 200; it++) {
          const m = (a + b) / 2;
          if (m === a || m === b) break;
          if (Number.isFinite(g(m)) === inA) a = m; else b = m;
        }
        const e = inA ? a : b, ge = g(e), g0 = inA ? ga : gb;
        if (Number.isFinite(ge) && ge * g0 < 0) add(inA ? bisect(grid[i - 1], e, ga) : bisect(e, grid[i], ge));
        else if (ge === 0) add(e);
        continue;
      }
      if (!Number.isFinite(ga) || !Number.isFinite(gb)) continue;
      if (ga === 0) add(grid[i - 1]);
      else if (ga * gb < 0) add(bisect(grid[i - 1], grid[i], ga));
      // dva blízke korene v jednej bunke mriežky: |g| má lokálne minimum bez zmeny znamienka → zlatý rez,
      // v minime sa znamienko zmení (dva korene) alebo je g ≈ 0 (dvojnásobný koreň)
      if (i + 1 < grid.length && Number.isFinite(G[i + 1]) && ga * gb > 0 && gb * G[i + 1] > 0 && Math.abs(gb) < Math.abs(ga) && Math.abs(gb) < Math.abs(G[i + 1])) {
        const sg = Math.sign(gb), h = (z) => sg * g(z);
        let a = grid[i - 1], b = grid[i + 1];
        const R = (Math.sqrt(5) - 1) / 2;
        let c = b - R * (b - a), d = a + R * (b - a);
        for (let it = 0; it < 120; it++) {
          if (h(c) < h(d)) { b = d; d = c; c = b - R * (b - a); } else { a = c; c = d; d = a + R * (b - a); }
        }
        const zm = (a + b) / 2, gm = g(zm);
        if (Number.isFinite(gm) && gm * gb < 0) { add(bisect(grid[i - 1], zm, ga)); add(bisect(zm, grid[i + 1], gm)); } else add(zm);
      }
    }
    return roots.sort((p, q) => p - q);
  }

  // Vyrieši vzorec pre neznámu u pri známych hodnotách x (SI).
  // → { ok, value, roots, method: 'sym'|'num', residual } | { ok: false, error, method }
  function solve(fid, u, x) {
    const f = typeof fid === 'string' ? byId(fid) : fid;
    const s = solver(f, u);
    let value, roots;
    const method = s ? 'sym' : 'num';
    if (s) {
      value = s[1](x);
      if (!Number.isFinite(value)) return { ok: false, error: Number.isNaN(value) ? 'calcErrNoSol' : 'calcErrDiv0', method };
      roots = [value];
      // ďalšie riešenia (napr. uhol 180° − α pri arcsin), ak sú fyzikálne zmysluplné a sedia po dosadení
      if (s[2]) s[2](value, x).forEach((z) => { if (Number.isFinite(z) && !badValue(varOf(f, u), z) && Math.abs(z - value) > 1e-9 * Math.abs(value) && check(f, Object.assign({}, x, { [u]: z }))) roots.push(z); });
    } else {
      roots = numeric(f, u, x);
      if (!roots.length) return { ok: false, error: 'calcErrNoSol', method };
      // prednosť má fyzikálne zmysluplný koreň, potom menší v absolútnej hodnote
      const v = varOf(f, u);
      roots.sort((a, b) => (!!badValue(v, a) - !!badValue(v, b)) || (Math.abs(a) - Math.abs(b)));
      value = roots[0];
    }
    const y = Object.assign({}, x, { [u]: value });
    if (!check(f, y)) return { ok: false, error: 'calcErrCheck', method, value };
    return { ok: true, value, roots, method, residual: residual(f, y) };
  }

  /* ---------- zápis so symbolmi a s dosadením ---------- */
  // S(k): symbol veličiny alebo konštanty (#c, #pi); S.p(k) – základ mocniny (zátvorky pri Δt, a′); S.x – násobenie
  function symMapper(f, opt = {}) {
    const S = (k) => {
      if (k === '#pi') return '\\pi';
      if (k[0] === '#') return opt.probe ? `\u0001${k.slice(1)}\u0001` : CONST[k.slice(1)].tex;
      const v = varOf(f, k);
      return v ? v.tex : k;
    };
    S.p = (k) => { const s = S(k); return /\\Delta|\s|'/.test(s) ? `\\left(${s}\\right)` : s; };
    S.x = '\\,';
    return S;
  }
  // tex jednotky (JEDNOTKY.tex, inak \text{})
  function unitTex(u) {
    if (!u) return '';
    try { const s = J().tex(u); if (s) return s; } catch (e) { /* bez knižnice */ }
    return `\\text{${u}}`;
  }
  // dosadenie: hodnoty v SI s jednotkou; neznáma u ostáva symbolom (numerické riešenie)
  function valMapper(f, x, dec, u) {
    const one = (k) => {
      if (k === '#pi') return { t: '\\pi' };
      if (k[0] === '#') { const c = CONST[k.slice(1)]; return { t: `${fmt(c.v, dec, true)}\\,${unitTex(c.u)}`, wrap: true }; }
      const v = varOf(f, k);
      if (k === u) return { t: v.tex, wrap: /\\Delta|'/.test(v.tex) };
      const val = x[k];
      return { t: fmt(val, dec, true, 6) + (v.si ? `\\,${unitTex(v.si)}` : ''), wrap: val < 0 || !!v.si || /\\cdot/.test(fmt(val, dec, true, 6)), neg: val < 0 };
    };
    const S = (k) => { const o = one(k); return o.neg ? `\\left(${o.t}\\right)` : o.t; };
    S.p = (k) => { const o = one(k); return o.wrap ? `\\left(${o.t}\\right)` : o.t; };
    S.x = '\\cdot ';
    return S;
  }

  /* ---------- celý výpočet ----------
     compute(id, u, texts {kľúč: text}, outUnit, dec) → { ok, u, fields: {kľúč: {code, vars}}, error, warns: [{code, vars}],
       value (SI), out (v jednotke outUnit), outUnit, text, method, roots, steps: [{ label, tex | text }] } */
  function compute(fid, u, texts, outUnit, dec = ',') {
    const f = byId(fid);
    if (!f) return { ok: false, error: 'calcErrFormula', fields: {}, warns: [], steps: [] };
    const vs = varsOf(f), uv = varOf(f, u) || vs[0];
    u = uv.key;
    const fields = {}, x = {}, warns = [];
    vs.forEach((v) => {
      if (v.key === u) return;
      const r = parseInput((texts || {})[v.key], v);
      if (!r.ok) { fields[v.key] = { code: r.error, vars: r.vars || {} }; return; }
      x[v.key] = r.si;
      const bad = badValue(v, r.si, dec);
      if (bad) warns.push({ code: 'calcWarnIn', vars: { q: v.key, cond: bad } });
    });
    const out = { ok: false, u, fields, warns, steps: [] };
    if (Object.keys(fields).length) { out.error = 'calcErrFix'; return out; }
    const res = solve(f, u, x);
    const symS = symMapper(f), valS = valMapper(f, x, dec, u);
    const s = solver(f, u);
    out.steps.push({ label: 'calcStepFormula', tex: texOf(f, symS) });
    const solved = s && `${uv.tex} = ${s[0](symS)}`;
    // vyjadrenie len vtedy, keď sa líši od zápisu vzorca (neznáma nie je priamo ľavá strana)
    if (!s) out.steps.push({ label: 'calcStepSolve', text: 'calcNumericNote' });
    else if (solved !== out.steps[0].tex) out.steps.push({ label: 'calcStepSolve', tex: solved });
    out.steps.push({ label: 'calcStepSubst', tex: s ? `${uv.tex} = ${s[0](valS)}` : texOf(f, valS) });
    if (!res.ok) { out.error = res.error; return out; }
    const unit = outUnit != null && unitsFor(uv).includes(outUnit) ? outUnit : (uv.u || uv.si);
    const conv = fromSI(res.value, unit, uv.diff);
    const rel = s ? '\\doteq' : '\\approx';
    let rt = `${uv.tex} ${rel} ${fmt(res.value, dec, true)}${uv.si ? '\\,' + unitTex(uv.si) : ''}`;
    if (unit !== uv.si) rt += ` ${rel} ${fmt(conv, dec, true)}${unit ? '\\,' + unitTex(unit) : ''}`;
    out.steps.push({ label: 'calcStepResult', tex: rt });
    const bad = badValue(uv, res.value, dec);
    if (bad) warns.push({ code: 'calcWarnOut', vars: { cond: bad } });
    const withUnit = (v) => fmt(v, dec) + (!unit ? '' : unit === '°' ? '°' : ' ' + ((P(unit).text) || unit));
    if (res.roots.length > 1) warns.push({ code: 'calcWarnRoots', vars: { x: res.roots.slice(1).map((r) => withUnit(fromSI(r, unit, uv.diff))).join('; ') } });
    return Object.assign(out, { ok: true, value: res.value, out: conv, outUnit: unit, method: res.method, roots: res.roots, text: withUnit(conv) });
  }

  // položka ťaháka (téma, položka FORMULAS) → { id, u } alebo null
  function forFormula(themeId, item) {
    const tex = item && item.tex;
    const hit = F.find((f) => f.src && f.src[tex] && themes(f).includes(themeId)) || F.find((f) => f.src && f.src[tex]);
    return hit ? { id: hit.id, u: hit.src[tex] } : null;
  }

  // vzorce k lekcii: téma lekcie, ročník vzorca najviac ročník lekcie
  function forLesson(L, themeOf, levelIds) {
    const th = themeOf(L.id);
    if (!th) return [];
    const all = F.filter((f) => themes(f).includes(th.id));
    const li = levelIds.indexOf(L.level);
    return li < 0 ? all : all.filter((f) => levelIds.indexOf(f.lv) <= li);
  }

  window.KALKULACKA = {
    FORMULAS: F, Q, CONST, byId, themes, varsOf, varOf, unknowns, constsOf, solve, solver, numeric, residual, check,
    eqOf, texOf, symMapper, valMapper, monoSolve, prodTex, prodValue, fmt, parseInput, unitsFor, fromSI, badValue, plain,
    compute, forFormula, forLesson
  };

  if (!window.APP) return; // v node len jadro

  /* ---------- rozhranie ---------- */
  const { t, esc } = APP;
  const $ = (id) => document.getElementById(id);
  const memo = {}; // zapísané hodnoty, neznáma a jednotka výsledku podľa vzorca (do zatvorenia stránky)

  // desatinný oddeľovač jazyka rozhrania
  function dec() {
    let d = '.';
    try { d = CONTENT_I18N.run(I18N.getLang(), null, () => CONTENT_I18N.decimal()); } catch (e) { /* bez balíka */ }
    return d;
  }
  // názvy: preklad z balíkov obsahu (vzorce, symboly – CONTENT_I18N.tr), inak kľúče calcF…/calcQ… v js/lang
  const lang = () => I18N.getLang();
  const camel = (id) => id.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join('');
  const trName = (sk, key) => {
    if (lang() === 'sk') return sk;
    if ((I18N.dict('sk') || {})[key] !== undefined) return t(key);
    return CONTENT_I18N.tr(sk, lang());
  };
  const fName = (f) => trName(f.n, 'calcF' + camel(f.id));
  const qName = (v) => trName(v.n, 'calcQ_' + v.qid);
  const unitLabel = (u) => { if (!u) return t('calcNoUnit'); const r = JEDNOTKY.parse(u); return r.ok && r.text ? r.text : u; };
  const thTitle = (id) => { const th = APP.themeById(id); return th ? APP.thName(th).title : id; };
  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  // chyba vstupu: kľúč knižnice jednotiek (unitUnknown …) alebo vlastný; neznámy kľúč → všeobecný text
  const OWN = { unitUnknown: 'calcErrUnitUnknown', unitNumber: 'calcErrNumber' };
  const msg = (code, vars) => {
    const s = t(code, vars);
    return s !== code ? s : t(OWN[code] || 'calcErrUnit', vars);
  };

  /* zoznam vzorcov */
  const listState = { q: '', th: '' };
  function searchText(f) {
    return norm([fName(f), f.n, ...themes(f).map(thTitle), ...varsOf(f).map((v) => `${plain(v.tex)} ${qName(v)} ${v.n}`)].join(' '));
  }
  function listHtml() {
    const words = norm(listState.q).split(/\s+/).filter(Boolean);
    const shown = F.filter((f) => (!listState.th || themes(f).includes(listState.th)) && words.every((w) => searchText(f).includes(w)));
    if (!shown.length) return `<p class="muted">${esc(t('calcNone'))}</p>`;
    const home = (f) => (listState.th && themes(f).includes(listState.th) ? listState.th : themes(f)[0]);
    const groups = APP.THEMES.map((th) => [th, shown.filter((f) => home(f) === th.id)]).filter((g) => g[1].length);
    return `<p class="muted small">${esc(t('formulasCount', { n: shown.length }))}</p>` + groups.map(([th, fs]) => `<section class="calc-group">
      <h2>${th.icon} ${esc(APP.thName(th).title)}</h2>
      <ul class="calc-list">${fs.map((f) => `<li><a class="calc-item" href="#/kalkulacka/${f.id}">
        <span class="calc-item-name">${esc(fName(f))}</span><span class="calc-item-tex">$${texOf(f, symMapper(f))}$</span></a></li>`).join('')}</ul></section>`).join('');
  }
  function list() {
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a></nav>
      <h1>🧮 ${esc(t('calcTitle'))}</h1>
      <p class="muted">${esc(t('calcIntro'))}</p>
      <div class="calc-filter" role="search">
        <label class="calc-field"><span>${esc(t('calcSearch'))}</span>
          <input type="search" id="calc-q" value="${esc(listState.q)}" placeholder="${esc(t('calcSearchPh'))}" autocomplete="off"></label>
        <label class="calc-field"><span>${esc(t('calcTheme'))}</span>
          <select id="calc-th"><option value="">${esc(t('calcAllThemes'))}</option>${APP.THEMES.filter((th) => F.some((f) => themes(f).includes(th.id)))
            .map((th) => `<option value="${th.id}"${listState.th === th.id ? ' selected' : ''}>${esc(APP.thName(th).title)}</option>`).join('')}</select></label>
      </div>
      <div id="calc-list" aria-live="polite">${listHtml()}</div>`);
    const upd = () => { const el = $('calc-list'); el.innerHTML = listHtml(); APP.renderMath(el); };
    $('calc-q').addEventListener('input', (e) => { listState.q = e.target.value; upd(); });
    $('calc-th').addEventListener('change', (e) => { listState.th = e.target.value; upd(); });
  }

  /* stránka vzorca */
  function page(f, uWanted) {
    const vs = varsOf(f);
    const m = memo[f.id] || (memo[f.id] = { texts: {}, u: (f.src && Object.values(f.src)[0]) || vs[0].key, out: {} });
    if (uWanted && varOf(f, uWanted)) m.u = uWanted;
    const d = dec();
    vs.forEach((v) => { if (m.texts[v.key] === undefined && v.def !== undefined) m.texts[v.key] = fmt(v.def, d, false, 6) + ' ' + unitLabel(v.u || v.si); });
    const th = themes(f)[0], lv = APP.levelById(f.lv), consts = constsOf(f);
    APP.setPage(`<nav class="crumbs"><a href="#/">${esc(t('home'))}</a> / <a href="#/kalkulacka">${esc(t('calcTitle'))}</a></nav>
      <h1>🧮 ${esc(fName(f))}</h1>
      <p class="muted small">${esc(thTitle(th))}${lv ? ' · ' + esc(APP.lvName(lv).title) : ''}</p>
      <div class="calc-formula">$$${texOf(f, symMapper(f))}$$</div>
      ${consts.length ? `<p class="small muted">${esc(t('calcConst'))}: ${consts.map((k) => `$${CONST[k].tex} \\doteq ${fmt(CONST[k].v, d, true)}\\,${unitTex(CONST[k].u)}$`).join(', ')}</p>` : ''}
      <form id="calc-form" class="calc-form" novalidate>
        <fieldset class="calc-unknown"><legend>${esc(t('calcUnknown'))}</legend>
          ${vs.map((v) => `<label class="calc-radio"><input type="radio" name="calc-u" value="${v.key}"${v.key === m.u ? ' checked' : ''}>
            <span>$${v.tex}$ – ${esc(qName(v))}</span></label>`).join('')}
        </fieldset>
        <fieldset class="calc-known"><legend>${esc(t('calcKnown'))}</legend><div id="calc-inputs"></div></fieldset>
        <div class="calc-actions">
          <label class="calc-field"><span>${esc(t('calcOutUnit'))}</span><select id="calc-unit"></select></label>
          <button class="btn btn-primary" type="submit">${esc(t('calcCompute'))}</button>
        </div>
      </form>
      <section class="calc-out" id="calc-out" aria-live="polite" aria-atomic="true"></section>
      <p class="calc-links"><a href="#/kalkulacka">${esc(t('calcAllFormulas'))}</a>${window.FORMULAS && FORMULAS[th] ? ` · <a href="#/vzorce/${th}">${esc(t('formulasForTopic', { topic: thTitle(th) }))}</a>` : ''}</p>`);

    function inputs() {
      const box = $('calc-inputs');
      box.innerHTML = vs.filter((v) => v.key !== m.u).map((v) => {
        const id = `calc-in-${v.key}`, du = v.u || v.si;
        return `<div class="calc-input">
          <label for="${id}">$${v.tex}$ – ${esc(qName(v))}</label>
          <input type="text" id="${id}" data-k="${v.key}" value="${esc(m.texts[v.key] || '')}" placeholder="${esc(du ? unitLabel(du) : '')}"
            autocomplete="off" spellcheck="false" aria-describedby="${id}-h ${id}-e">
          <span class="calc-hint small muted" id="${id}-h">${esc(du ? t('calcDefUnit', { u: unitLabel(du) }) : t('calcDefUnitNone'))}</span>
          <span class="calc-err" id="${id}-e"></span></div>`;
      }).join('');
      APP.renderMath(box);
      box.querySelectorAll('input').forEach((el) => el.addEventListener('input', () => { m.texts[el.dataset.k] = el.value; }));
      const uv = varOf(f, m.u), opts = unitsFor(uv);
      if (!opts.includes(m.out[m.u])) m.out[m.u] = uv.u || uv.si;
      $('calc-unit').innerHTML = opts.map((u) => `<option value="${esc(u)}"${u === m.out[m.u] ? ' selected' : ''}>${esc(unitLabel(u))}</option>`).join('');
    }
    function run(show) {
      const r = compute(f.id, m.u, m.texts, m.out[m.u], dec());
      vs.forEach((v) => {
        const inp = $(`calc-in-${v.key}`), er = $(`calc-in-${v.key}-e`);
        if (!inp) return;
        const e = r.fields[v.key];
        inp.setAttribute('aria-invalid', e && show ? 'true' : 'false');
        er.textContent = e && show ? msg(e.code, Object.assign({ ex: '72 km/h', u: '' }, e.vars, e.vars.exp ? { exp: unitLabel(e.vars.exp) } : {})) : '';
      });
      const out = $('calc-out');
      if (!show) { out.innerHTML = ''; return; }
      const name = (k) => { const v = varOf(f, k); return v ? `${plain(v.tex)} (${qName(v)})` : k; };
      const warn = r.warns.map((w) => `<p class="calc-warn">⚠️ ${esc(t(w.code, Object.assign({}, w.vars, w.vars.q ? { q: name(w.vars.q) } : {})))}</p>`).join('');
      const uv = varOf(f, m.u);
      const steps = r.steps.length ? `<ol class="calc-steps">${r.steps.map((s) => `<li><span class="calc-step-l">${esc(t(s.label))}</span>
        ${s.tex ? `<div class="calc-step-m">$$${s.tex}$$</div>` : `<p>${esc(t(s.text))}</p>`}</li>`).join('')}</ol>` : '';
      out.innerHTML = r.ok
        ? `<h2>${esc(t('calcResult'))}</h2>
           <p class="calc-result"><span class="calc-sr">${esc(qName(uv))}: ${esc(r.text)}</span><span aria-hidden="true">$${uv.tex} ${r.method === 'num' ? '\\approx' : '\\doteq'} ${fmt(r.out, dec(), true)}${r.outUnit ? '\\,' + unitTex(r.outUnit) : ''}$</span></p>
           ${warn}${steps}<p class="small muted">✔ ${esc(t('calcCheck'))}</p>`
        : `<p class="calc-error" role="alert">${esc(t(r.error))}</p>${warn}${r.error === 'calcErrFix' ? '' : steps}`;
      APP.renderMath(out);
    }
    inputs();
    const form = $('calc-form');
    form.addEventListener('change', (e) => {
      if (e.target.name === 'calc-u') {
        m.u = e.target.value;
        history.replaceState(null, '', `#/kalkulacka/${f.id}/${m.u}`);
        inputs();
        run(false);
      } else if (e.target.id === 'calc-unit') {
        m.out[m.u] = e.target.value;
        if ($('calc-out').innerHTML) run(true);
      }
    });
    form.addEventListener('submit', (e) => { e.preventDefault(); run(true); });
    if (vs.every((v) => v.key === m.u || (m.texts[v.key] || '').trim())) run(true);
  }

  APP.route('kalkulacka', (p) => {
    const f = p[0] && byId(p[0]);
    if (f) page(f, p[1]); else list();
  });
  APP.addMenu({ href: '#/kalkulacka', icon: '🧮', key: 'calcMenu' });
  // box v lekcii: vzorce témy lekcie do jej ročníka
  APP.addLessonPanel((L) => {
    const fs = forLesson(L, APP.themeOf, (window.LEVELS || []).map((l) => l.id));
    if (!fs.length) return '';
    return `<aside class="calc-panel" aria-label="${esc(t('calcPanelTitle'))}">
      <h3 class="calc-panel-h">🧮 ${esc(t('calcPanelTitle'))}</h3>
      <p class="muted small">${esc(t('calcPanelDesc'))}</p>
      <p class="calc-panel-links">${fs.slice(0, 12).map((f) => `<a class="btn btn-small" href="#/kalkulacka/${f.id}">${esc(fName(f))}</a>`).join(' ')}</p>
    </aside>`;
  });
  // odkaz z ťaháka vzorcov (js/features/vzorce.js)
  window.KALKULACKA.link = (themeId, item) => {
    const r = forFormula(themeId, item);
    if (!r) return '';
    return `<a class="calc-link no-print" lang="${APP.htmlLang(I18N.getLang())}" href="#/kalkulacka/${r.id}/${r.u}" aria-label="${esc(t('calcCalcAria', { name: fName(byId(r.id)) }))}">🧮 ${esc(t('calcCompute'))}</a>`;
  };
})();
