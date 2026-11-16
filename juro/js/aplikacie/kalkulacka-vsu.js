/* Kalkulačka VSÚ: tri záložky – Lehoty, Úroky z omeškania, Súdny poplatok.
   Počíta VYPOCTY (js/vypocty.js) z údajov PRAVO (js/pravo.js); tu je len formulár a zobrazenie výsledku.
   Výsledok sa prepočíta pri každej zmene vstupu. Vstupy si pamätá localStorage (len pohodlie). */
(function () {
  'use strict';

  const V = window.VYPOCTY;
  const esc = APP.esc;
  const ZALOZKY = [
    { id: 'lehoty', nazov: 'Lehoty', ikona: '📅' },
    { id: 'urok', nazov: 'Úroky z omeškania', ikona: '💶' },
    { id: 'poplatok', nazov: 'Súdny poplatok', ikona: '🏛️' }
  ];
  const KLUC = 'juro.vsu.kalkulacka';
  const dnes = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  function nacitaj() {
    try { return JSON.parse(localStorage.getItem(KLUC)) || {}; } catch (e) { return {}; }
  }
  function uloz(stav) {
    try { localStorage.setItem(KLUC, JSON.stringify(stav)); } catch (e) { /* bez úložiska sa vstupy nezapamätajú */ }
  }
  const stav = Object.assign({
    lehoty: { predvolba: 'odvolanie', udalost: dnes(), n: 15, jednotka: 'dni', druh: 'procesna', dniTyp: 'kalendarne' },
    urok: { vztah: 'obciansky', zmluvnaSadzba: '', doDna: dnes(), druh: 'urok', pausal: false, polozky: [{ istina: '', splatnost: '' }] },
    poplatok: { druh: 'hodnota', hodnota: '', obchodna: false, upominacie: false, elektronicky: false, zaplateny: '', dovod: 'spatvzatie', kratit: true }
  }, nacitaj());
  // dátumy „dnes“ sa nepamätajú – pri novom otvorení sa nastavia na aktuálny deň, aby výpočet nebol k starému dňu
  stav.lehoty.udalost = dnes();
  stav.urok.doDna = dnes();

  /* ---------- spoločné časti výsledku ---------- */
  function vysledok(hlavny, popis, kroky, upozornenia) {
    const text = kroky.join('\n');
    return `
      <div class="result" role="status" aria-live="polite">
        <div class="result-main">${hlavny}</div>
        ${popis ? `<p class="result-desc">${popis}</p>` : ''}
        <details class="steps" open>
          <summary>Postup výpočtu</summary>
          <ol>${kroky.map((k) => `<li>${esc(k)}</li>`).join('')}</ol>
          <button type="button" class="btn btn-small" data-kopiruj="${esc(text)}">📋 Kopírovať postup</button>
        </details>
        ${(upozornenia || []).map((u) => `<p class="notice">${esc(u)}</p>`).join('')}
      </div>`;
  }
  const chyba = (msg) => `<div class="result result-empty" role="status" aria-live="polite"><p>${esc(msg)}</p></div>`;

  /* ---------- Lehoty ---------- */
  function formLehoty() {
    const s = stav.lehoty;
    const predvolby = PRAVO.LEHOTY.map((l) => `<option value="${l.id}"${l.id === s.predvolba ? ' selected' : ''}>${esc(l.nazov)}${l.predpis ? ` (${l.n} ${V.sklon(l.n, V.JEDNOTKY[l.jednotka])}, ${esc(l.predpis)})` : ''}</option>`).join('');
    const jednotky = [['dni', 'dni'], ['tyzdne', 'týždne'], ['mesiace', 'mesiace'], ['roky', 'roky']]
      .map(([v, t]) => `<option value="${v}"${v === s.jednotka ? ' selected' : ''}>${t}</option>`).join('');
    return `
      <form class="form" data-tab="lehoty" novalidate>
        <label class="field field-wide"><span>Druh lehoty</span><select name="predvolba">${predvolby}</select></label>
        <label class="field"><span>Deň udalosti (napr. doručenie)</span><input type="date" name="udalost" value="${esc(s.udalost)}" required></label>
        <div class="field field-row">
          <label class="field"><span>Dĺžka</span><input type="number" name="n" min="1" max="1000" step="1" inputmode="numeric" value="${esc(s.n)}"></label>
          <label class="field"><span>Jednotka</span><select name="jednotka">${jednotky}</select></label>
        </div>
        <fieldset class="field field-wide radios" data-len-dni>
          <legend>Počítanie dní</legend>
          <label><input type="radio" name="dniTyp" value="kalendarne"${s.dniTyp !== 'pracovne' ? ' checked' : ''}> kalendárne dni (každý deň vrátane víkendov a sviatkov)</label>
          <label><input type="radio" name="dniTyp" value="pracovne"${s.dniTyp === 'pracovne' ? ' checked' : ''}> pracovné dni (bez sobôt, nedieľ a dní pracovného pokoja)</label>
        </fieldset>
        <fieldset class="field field-wide radios">
          <legend>Povaha lehoty</legend>
          <label><input type="radio" name="druh" value="procesna"${s.druh !== 'hmotnopravna' ? ' checked' : ''}> procesná (§ 121 CSP)</label>
          <label><input type="radio" name="druh" value="hmotnopravna"${s.druh === 'hmotnopravna' ? ' checked' : ''}> hmotnoprávna (§ 122 OZ)</label>
        </fieldset>
      </form>
      <div data-vysledok></div>`;
  }
  function pocitajLehoty(el) {
    const r = V.lehota(stav.lehoty);
    el.innerHTML = r.chyba ? chyba(r.chyba) : vysledok(
      `<span class="result-label">Posledný deň lehoty</span><strong>${esc(r.koniecText)}</strong>`,
      `Lehota ${esc(r.dlzka)} · začala plynúť ${esc(V.sk(V.parse(r.zaciatok)))}${r.pracovne ? ' · <span class="tag">pracovné dni</span>' : ''}${r.posunute ? ' · <span class="tag tag-warn">posunutá na pracovný deň</span>' : ''}`,
      r.kroky, r.upozornenia);
  }
  // výber kalendárne/pracovné dni má zmysel len pri lehote určenej podľa dní
  function viditelnostLehoty(form) {
    form.querySelector('[data-len-dni]').hidden = stav.lehoty.jednotka !== 'dni';
  }
  function zmenaLehoty(form, e) {
    const s = stav.lehoty;
    const f = new FormData(form);
    if (e && e.target.name === 'predvolba') {
      const p = PRAVO.LEHOTY.find((x) => x.id === f.get('predvolba'));
      s.predvolba = p.id; s.n = p.n; s.jednotka = p.jednotka; s.druh = p.druh; s.dniTyp = p.dniTyp || 'kalendarne';
      form.elements.n.value = p.n; form.elements.jednotka.value = p.jednotka;
      form.querySelector(`[name="druh"][value="${p.druh}"]`).checked = true;
      form.querySelector(`[name="dniTyp"][value="${s.dniTyp}"]`).checked = true;
    } else {
      s.udalost = f.get('udalost'); s.n = f.get('n'); s.jednotka = f.get('jednotka'); s.druh = f.get('druh'); s.dniTyp = f.get('dniTyp');
      // ručná zmena dĺžky, jednotky alebo spôsobu počítania dní = vlastná lehota
      const p = PRAVO.LEHOTY.find((x) => x.id === s.predvolba);
      const iny = p && (String(p.n) !== String(s.n) || p.jednotka !== s.jednotka || (s.jednotka === 'dni' && (p.dniTyp || 'kalendarne') !== s.dniTyp));
      if (e && /^(n|jednotka|dniTyp)$/.test(e.target.name) && iny) {
        s.predvolba = 'vlastna'; form.elements.predvolba.value = 'vlastna';
      }
    }
    viditelnostLehoty(form);
  }

  /* ---------- Úroky z omeškania ---------- */
  function riadokPolozky(p, i, n) {
    return `
      <div class="polozka" data-i="${i}">
        <label class="field"><span>Istina (€)</span><input type="text" inputmode="decimal" name="istina" value="${esc(p.istina)}" placeholder="napr. 1 250,00" autocomplete="off"></label>
        <label class="field"><span>Deň splatnosti</span><input type="date" name="splatnost" value="${esc(p.splatnost)}"></label>
        ${n > 1 ? `<button type="button" class="icon-btn" data-odober="${i}" aria-label="Odobrať položku ${i + 1}" title="Odobrať položku">✕</button>` : ''}
      </div>`;
  }
  function formUrok() {
    const s = stav.urok;
    const vztahy = [['obciansky', 'Občianskoprávny (ECB + 5 p. b.)'], ['obchodny', 'Obchodnoprávny (ECB + 9 p. b.)'], ['zmluvny', 'Dohodnutá sadzba']]
      .map(([v, t]) => `<option value="${v}"${v === s.vztah ? ' selected' : ''}>${t}</option>`).join('');
    return `
      <form class="form" data-tab="urok" novalidate>
        <fieldset class="field field-wide radios">
          <legend>Čo počítať</legend>
          <label><input type="radio" name="druh" value="urok"${s.druh !== 'poplatok' ? ' checked' : ''}> úrok z omeškania</label>
          <label><input type="radio" name="druh" value="poplatok"${s.druh === 'poplatok' ? ' checked' : ''}> poplatok z omeškania (§ 4 NV č. 87/1995 Z. z., napr. nájom bytu)</label>
        </fieldset>
        <label class="field" data-len-urok><span>Právny vzťah</span><select name="vztah">${vztahy}</select></label>
        <label class="field" data-len-zmluvny><span>Dohodnutá sadzba (% ročne)</span><input type="text" inputmode="decimal" name="zmluvnaSadzba" value="${esc(s.zmluvnaSadzba)}" placeholder="napr. 8,5"></label>
        <label class="field"><span>Počítať do dňa (vrátane)</span><input type="date" name="doDna" value="${esc(s.doDna)}"></label>
        <label class="check field-wide" data-len-obchodny><input type="checkbox" name="pausal"${s.pausal ? ' checked' : ''}> pripočítať paušálnu náhradu nákladov ${V.eur(PRAVO.UROK.pausal)} (nie pri spotrebiteľskej zmluve)</label>
        <div class="field-wide polozky">
          <div class="polozky-head"><strong>Pohľadávky</strong><button type="button" class="btn btn-small" data-pridaj>＋ Pridať pohľadávku</button></div>
          ${s.polozky.map((p, i) => riadokPolozky(p, i, s.polozky.length)).join('')}
        </div>
      </form>
      <div data-vysledok></div>`;
  }
  function viditelnostUrok(form) {
    const s = stav.urok;
    const urok = s.druh !== 'poplatok';
    form.querySelector('[data-len-urok]').hidden = !urok;
    form.querySelector('[data-len-zmluvny]').hidden = !(urok && s.vztah === 'zmluvny');
    form.querySelector('[data-len-obchodny]').hidden = !(urok && s.vztah === 'obchodny');
  }
  function pocitajUrok(el) {
    const s = stav.urok;
    const vyplnene = s.polozky.filter((p) => String(p.istina).trim() || p.splatnost);
    if (!vyplnene.length) { el.innerHTML = chyba('Zadajte istinu a deň splatnosti aspoň jednej pohľadávky.'); return; }
    const poplatok = s.druh === 'poplatok';
    const vysl = vyplnene.map((p) => (poplatok
      ? V.poplatokZOmeskania({ istina: p.istina, splatnost: p.splatnost, doDna: s.doDna })
      : V.urok({ istina: p.istina, splatnost: p.splatnost, doDna: s.doDna, vztah: s.vztah, zmluvnaSadzba: s.zmluvnaSadzba })));
    const zla = vysl.findIndex((r) => r.chyba);
    if (zla >= 0) { el.innerHTML = chyba(vyplnene.length > 1 ? `Pohľadávka ${s.polozky.indexOf(vyplnene[zla]) + 1}: ${vysl[zla].chyba}` : vysl[zla].chyba); return; }

    const spolu = V.centy(vysl.reduce((a, r) => a + r.suma, 0));
    const istiny = V.centy(vyplnene.reduce((a, p) => a + V.cislo(p.istina), 0));
    const pausal = !poplatok && s.vztah === 'obchodny' && s.pausal ? PRAVO.UROK.pausal : 0;
    const kroky = [];
    vysl.forEach((r, i) => {
      if (vysl.length > 1) kroky.push(`Pohľadávka ${i + 1}:`);
      r.kroky.forEach((k) => kroky.push(vysl.length > 1 ? `  ${k}` : k));
    });
    if (vysl.length > 1) kroky.push(`${poplatok ? 'Poplatok' : 'Úrok'} spolu: ${V.eur(spolu)}.`);
    if (pausal) kroky.push(`Paušálna náhrada nákladov spojených s uplatnením pohľadávky: ${V.eur(pausal)} (${PRAVO.UROK.pausalPredpis}).`);

    const tabulka = vysl.length > 1 ? `
      <div class="table-wrap"><table>
        <thead><tr><th>#</th><th class="num">Istina</th><th>Omeškanie od</th><th class="num">Dni</th>${poplatok ? '' : '<th class="num">Sadzba</th>'}<th class="num">${poplatok ? 'Poplatok' : 'Úrok'}</th></tr></thead>
        <tbody>${vysl.map((r, i) => `<tr><td>${i + 1}</td><td class="num">${V.eur(V.cislo(vyplnene[i].istina))}</td><td>${V.sk(V.plusDni(V.parse(vyplnene[i].splatnost), 1))}</td><td class="num">${r.dni}</td>${poplatok ? '' : `<td class="num">${V.fmtP(r.sadzba)} %</td>`}<td class="num">${V.eur(r.suma)}</td></tr>`).join('')}</tbody>
        <tfoot><tr><th colspan="${poplatok ? 4 : 5}">Spolu</th><th class="num">${V.eur(spolu)}</th></tr></tfoot>
      </table></div>` : '';

    const upoz = [];
    if (!poplatok && s.vztah !== 'zmluvny') upoz.push('Sadzba sa určuje podľa sadzby ECB platnej k prvému dňu omeškania a počas omeškania sa nemení. Úrok sa počíta z 365 dní v roku.');
    if (!poplatok && s.vztah === 'zmluvny') upoz.push('Pri spotrebiteľskej zmluve nesmie dohodnutý úrok prekročiť limit podľa § 3a NV č. 87/1995 Z. z. – overte.');
    if (V.parse(s.doDna) && V.iso(V.parse(s.doDna)) > V.iso(V.parse(PRAVO.OVERENE))) upoz.push('Deň výpočtu je po dni, ku ktorému boli overené sadzby ECB. Ak ECB medzitým zmenila sadzby a omeškanie začalo neskôr, skontrolujte údaje.');

    el.innerHTML = vysledok(
      `<span class="result-label">${poplatok ? 'Poplatok z omeškania' : 'Úrok z omeškania'}</span><strong>${V.eur(spolu + pausal)}</strong>`,
      `Istina ${vysl.length > 1 ? 'spolu ' : ''}${V.eur(istiny)}${pausal ? ` · vrátane paušálnej náhrady ${V.eur(pausal)}` : ''}`,
      kroky, upoz) + tabulka;
    // tabuľku vložíme dovnútra výsledku pred postup
    const t = el.querySelector('.table-wrap');
    if (t) el.querySelector('.result').insertBefore(t, el.querySelector('.steps'));
  }
  function zmenaUrok(form, e) {
    const s = stav.urok;
    const t = e && e.target;
    if (t && t.closest('.polozka')) {
      const i = +t.closest('.polozka').dataset.i;
      s.polozky[i][t.name] = t.value;
      return;
    }
    const f = new FormData(form);
    s.druh = f.get('druh'); s.vztah = f.get('vztah'); s.zmluvnaSadzba = f.get('zmluvnaSadzba');
    s.doDna = f.get('doDna'); s.pausal = f.get('pausal') === 'on';
    viditelnostUrok(form);
  }

  /* ---------- Súdny poplatok ---------- */
  function formPoplatok() {
    const s = stav.poplatok;
    const dovody = [['spatvzatie', 'späťvzatie / zastavenie pred prvým pojednávaním (100 %)'], ['zmierPred', 'zmier pred prvým pojednávaním (90 %)'], ['zmierPo', 'zmier po začatí prvého pojednávania (50 %)']]
      .map(([v, t]) => `<option value="${v}"${v === s.dovod ? ' selected' : ''}>${t}</option>`).join('');
    return `
      <form class="form" data-tab="poplatok" novalidate>
        <fieldset class="field field-wide radios">
          <legend>Predmet konania</legend>
          <label><input type="radio" name="druh" value="hodnota"${s.druh !== 'neocenitelny' ? ' checked' : ''}> peňažné plnenie / ocenený predmet – položka 1 písm. a)</label>
          <label><input type="radio" name="druh" value="neocenitelny"${s.druh === 'neocenitelny' ? ' checked' : ''}> predmet nemožno oceniť peniazmi – položka 1 písm. b)</label>
        </fieldset>
        <label class="field" data-len-hodnota><span>Hodnota predmetu sporu (€)</span><input type="text" inputmode="decimal" name="hodnota" value="${esc(s.hodnota)}" placeholder="napr. 3 500" autocomplete="off"></label>
        <div class="field checks">
          <label class="check" data-len-hodnota><input type="checkbox" name="obchodna"${s.obchodna ? ' checked' : ''}> obchodná vec (maximum 50 000 €)</label>
          <label class="check" data-len-hodnota><input type="checkbox" name="upominacie"${s.upominacie ? ' checked' : ''}> upomínacie konanie (§ 11c)</label>
          <label class="check"><input type="checkbox" name="elektronicky"${s.elektronicky ? ' checked' : ''}> podané elektronicky do e-schránky (§ 6 ods. 3)</label>
        </div>
      </form>
      <div data-vysledok></div>
      <h2 class="subhead">Vrátenie poplatku</h2>
      <form class="form" data-tab="vratenie" novalidate>
        <label class="field"><span>Zaplatený poplatok (€)</span><input type="text" inputmode="decimal" name="zaplateny" value="${esc(s.zaplateny)}" placeholder="napr. 210" autocomplete="off"></label>
        <label class="field"><span>Dôvod vrátenia</span><select name="dovod">${dovody}</select></label>
        <label class="check field-wide"><input type="checkbox" name="kratit"${s.kratit ? ' checked' : ''}> krátiť o 1 %, najmenej 10 € (§ 11 ods. 4)</label>
      </form>
      <div data-vysledok-vratenie></div>`;
  }
  function pocitajPoplatok(el, root) {
    const s = stav.poplatok;
    root.querySelectorAll('[data-len-hodnota]').forEach((x) => { x.hidden = s.druh === 'neocenitelny'; });
    if (s.druh !== 'neocenitelny' && !String(s.hodnota).trim()) {
      el.innerHTML = chyba('Zadajte hodnotu predmetu sporu.');
    } else {
      const r = V.sudnyPoplatok(s);
      el.innerHTML = r.chyba ? chyba(r.chyba) : vysledok(`<span class="result-label">Súdny poplatok</span><strong>${V.eur(r.suma)}</strong>`,
        r.suma !== r.zaklad ? `Pred znížením ${V.eur(r.zaklad)}` : '', r.kroky, r.upozornenia);
    }
    const ev = root.querySelector('[data-vysledok-vratenie]');
    if (!String(s.zaplateny).trim()) { ev.innerHTML = ''; return; }
    const v = V.vratenie(s);
    ev.innerHTML = v.chyba ? chyba(v.chyba) : vysledok(`<span class="result-label">Vráti sa</span><strong>${V.eur(v.suma)}</strong>`, '', v.kroky,
      s.kratit ? ['Či sa krátenie podľa § 11 ods. 4 uplatní aj v tomto prípade, posúďte podľa aktuálneho znenia zákona a praxe súdu.'] : []);
  }
  function zmenaPoplatok(form) {
    const s = stav.poplatok;
    const f = new FormData(form);
    if (form.dataset.tab === 'vratenie') {
      s.zaplateny = f.get('zaplateny'); s.dovod = f.get('dovod'); s.kratit = f.get('kratit') === 'on';
    } else {
      s.druh = f.get('druh'); s.hodnota = f.get('hodnota') ?? s.hodnota;
      s.obchodna = f.get('obchodna') === 'on'; s.upominacie = f.get('upominacie') === 'on'; s.elektronicky = f.get('elektronicky') === 'on';
    }
  }

  /* ---------- vykreslenie ---------- */
  const TABS = {
    lehoty: { form: formLehoty, pocitaj: (el) => pocitajLehoty(el), zmena: zmenaLehoty, init: viditelnostLehoty },
    urok: { form: formUrok, pocitaj: (el) => pocitajUrok(el), zmena: zmenaUrok, init: viditelnostUrok },
    poplatok: { form: formPoplatok, pocitaj: pocitajPoplatok, zmena: zmenaPoplatok }
  };

  function render(root, cesta) {
    const aktivna = ZALOZKY.some((z) => z.id === cesta[0]) ? cesta[0] : 'lehoty';
    const tab = TABS[aktivna];
    root.innerHTML = `
      <h1>🧮 Kalkulačka VSÚ</h1>
      <nav class="tabs" aria-label="Časti kalkulačky">
        ${ZALOZKY.map((z) => `<a class="tab${z.id === aktivna ? ' active' : ''}" href="#/vsu/kalkulacka/${z.id}"${z.id === aktivna ? ' aria-current="page"' : ''}><span aria-hidden="true">${z.ikona}</span> ${z.nazov}</a>`).join('')}
      </nav>
      <div class="panel">${tab.form()}</div>
      ${aktivna === 'urok' ? tabulkaEcb() : ''}`;
    const panel = root.querySelector('.panel');
    const prepocitaj = () => { tab.pocitaj(panel.querySelector('[data-vysledok]'), panel); uloz(stav); };
    panel.querySelectorAll('form').forEach((form) => {
      if (tab.init) tab.init(form);
      const h = (e) => { tab.zmena(form, e); prepocitaj(); };
      form.addEventListener('input', h);
      form.addEventListener('change', h);
      form.addEventListener('submit', (e) => e.preventDefault());
    });
    panel.addEventListener('click', (e) => {
      const kop = e.target.closest('[data-kopiruj]');
      if (kop) return kopiruj(kop);
      if (e.target.closest('[data-pridaj]')) {
        stav.urok.polozky.push({ istina: '', splatnost: '' });
        render(root, [aktivna]);
        const posl = root.querySelectorAll('.polozka input[name="istina"]');
        posl[posl.length - 1].focus();
        return;
      }
      const odober = e.target.closest('[data-odober]');
      if (odober) {
        stav.urok.polozky.splice(+odober.dataset.odober, 1);
        render(root, [aktivna]);
      }
    });
    prepocitaj();
  }

  function kopiruj(btn) {
    const text = btn.getAttribute('data-kopiruj');
    const hotovo = () => { const p = btn.textContent; btn.textContent = '✓ Skopírované'; setTimeout(() => { btn.textContent = p; }, 1500); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(hotovo, () => {});
    } else {
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); hotovo(); } catch (e) { /* kopírovanie nie je dostupné */ }
      ta.remove();
    }
  }

  function tabulkaEcb() {
    const riadky = PRAVO.ECB.slice().reverse().map(([d, s]) => {
      const civ = V.fmtP(s + PRAVO.UROK.obciansky.body), obch = V.fmtP(s + PRAVO.UROK.obchodny.body);
      return `<tr><td>${V.sk(V.parse(d))}</td><td class="num">${V.fmtP(s)} %</td><td class="num">${civ} %</td><td class="num">${obch} %</td></tr>`;
    }).join('');
    return `
      <details class="ecb">
        <summary>Sadzby ECB a úroky z omeškania podľa prvého dňa omeškania</summary>
        <div class="table-wrap"><table>
          <thead><tr><th>Platí od</th><th class="num">ECB</th><th class="num">Občianske (+5)</th><th class="num">Obchodné (+9)</th></tr></thead>
          <tbody>${riadky}</tbody>
        </table></div>
        <p class="muted small">Základná úroková sadzba ECB (hlavné refinančné operácie). Pre záväzky vzniknuté pred 1. 2. 2013 platia predpisy účinné k 31. 1. 2013.</p>
      </details>`;
  }

  APP.registruj('vsu', 'kalkulacka', (root, cesta) => render(root, cesta));
})();
