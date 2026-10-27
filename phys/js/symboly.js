/* Prehľad fyzikálnych symbolov (stránka #/symboly, js/features/symboly.js). Texty sú obsah (slovensky).
   Položka: tex – symbol (TeX), name – názov, note – význam, ex – príklad (TeX), lesson – lekcia, kde sa zavádza. */
window.SYMBOLS = [
  { id: 'veliciny', icon: '📏', title: 'Fyzikálne veličiny', items: [
    { tex: String.raw`s`, name: 'Dráha', note: 'Dĺžka trajektórie; jednotka m.', ex: String.raw`s = 70\,\text{m}`, lesson: 'r7-draha' },
    { tex: String.raw`t`, name: 'Čas', note: 'Jednotka s (sekunda).', ex: String.raw`t = 10\,\text{s}`, lesson: 'r7-rovnomerny' },
    { tex: String.raw`v`, name: 'Rýchlosť', note: 'Dráha za jednotku času; jednotka m/s.', ex: String.raw`v = \frac{s}{t}`, lesson: 'r7-rovnomerny' },
    { tex: String.raw`a`, name: 'Zrýchlenie', note: 'Zmena rýchlosti za jednotku času; jednotka m/s².', ex: String.raw`a = \frac{\Delta v}{\Delta t}`, lesson: 's1-zrychlenie' },
    { tex: String.raw`m`, name: 'Hmotnosť', note: 'Množstvo látky v telese; jednotka kg.', ex: String.raw`m = 2\,\text{kg}`, lesson: 'r5-hustota' },
    { tex: String.raw`F`, name: 'Sila', note: 'Vplyv na teleso, ktorý mení jeho pohyb; jednotka N.', ex: String.raw`F = m\,a`, lesson: 'r7-sila' },
    { tex: String.raw`p`, name: 'Tlak', note: 'Sila na jednotku plochy; jednotka Pa.', ex: String.raw`p = \frac{F}{S}`, lesson: 'r6-tlak' },
    { tex: String.raw`V`, name: 'Objem', note: 'Priestor, ktorý teleso zaberá; jednotka m³.', ex: String.raw`V = 1\,\text{dm}^{3}`, lesson: 'r5-hustota' },
    { tex: String.raw`W`, name: 'Práca', note: 'Energia prenesená silou pri posunutí; jednotka J.', ex: String.raw`W = F\,s`, lesson: 'r8-praca' },
    { tex: String.raw`E`, name: 'Energia', note: 'Schopnosť konať prácu; jednotka J.', ex: String.raw`E_k = \tfrac{1}{2}\,m\,v^{2}`, lesson: 'r8-mechanicka-energia' },
    { tex: String.raw`P`, name: 'Výkon', note: 'Práca za jednotku času; jednotka W.', ex: String.raw`P = \frac{W}{t}`, lesson: 'r9-praca-vykon' },
    { tex: String.raw`T`, name: 'Teplota (termodynamická)', note: 'Jednotka K (kelvin).', ex: String.raw`T = 273{,}15\,\text{K}`, lesson: 'r5-teplota' },
    { tex: String.raw`I`, name: 'Elektrický prúd', note: 'Náboj prenesený za jednotku času; jednotka A.', ex: String.raw`I = \frac{Q}{t}`, lesson: 'r8-prud-napatie' },
    { tex: String.raw`U`, name: 'Elektrické napätie', note: 'Jednotka V (volt).', ex: String.raw`U = R\,I`, lesson: 'r8-prud-napatie' },
    { tex: String.raw`R`, name: 'Elektrický odpor', note: 'Jednotka Ω (ohm).', ex: String.raw`R = \frac{U}{I}`, lesson: 'r8-odpor' },
    { tex: String.raw`f`, name: 'Frekvencia', note: 'Počet kmitov za sekundu; jednotka Hz.', ex: String.raw`f = \frac{1}{T}`, lesson: 'v4-frekvencia' },
    { tex: String.raw`T_{\text{per}}`, name: 'Perióda', note: 'Čas jedného kmitu; jednotka s.', ex: String.raw`T = \frac{1}{f}`, lesson: 's2-kmitanie' }
  ] },
  { id: 'grecke', icon: '🔤', title: 'Grécke písmená', items: [
    { tex: String.raw`\rho`, name: 'Ró – hustota', note: 'Pomer hmotnosti a objemu.', ex: String.raw`\rho = \frac{m}{V}`, lesson: 'r6-hustota' },
    { tex: String.raw`\mu`, name: 'Mí – súčiniteľ trenia', note: 'Bezrozmerná veličina pri trení.', ex: String.raw`F_{tr} = \mu\,F_n`, lesson: 'r7-trenie' },
    { tex: String.raw`\alpha`, name: 'Alfa – uhol', note: 'Uhol dopadu, uhol sklonu roviny a podobne.', ex: String.raw`\alpha = \alpha'`, lesson: 'r7-odraz' },
    { tex: String.raw`\omega`, name: 'Ómega – uhlová frekvencia', note: 'Uhlová frekvencia kmitania; jednotka rad/s.', ex: String.raw`\omega = 2\pi f`, lesson: 's2-kmitanie' },
    { tex: String.raw`\lambda`, name: 'Lambda – vlnová dĺžka', note: 'Vzdialenosť dvoch susedných bodov v rovnakej fáze.', ex: String.raw`v = \lambda\,f`, lesson: 'v4-vlnenie' },
    { tex: String.raw`\eta`, name: 'Éta – účinnosť', note: 'Pomer užitočnej a dodanej práce.', ex: String.raw`\eta = \frac{W_u}{W_v}`, lesson: 's1-praca-energia' },
    { tex: String.raw`\Delta`, name: 'Delta – zmena veličiny', note: 'Rozdiel konečnej a začiatočnej hodnoty.', ex: String.raw`\Delta t = t_2 - t_1`, lesson: 'r7-rovnomerny' },
    { tex: String.raw`\Phi`, name: 'Fí – magnetický tok', note: 'Jednotka Wb (weber).', ex: String.raw`U_i = -\frac{\Delta\Phi}{\Delta t}`, lesson: 's3-magnetizmus' }
  ] },
  { id: 'konstanty', icon: '🧮', title: 'Konštanty', items: [
    { tex: String.raw`g \approx 9{,}81\,\text{m/s}^{2}`, name: 'Tiažové zrýchlenie', note: 'Na povrchu Zeme.', ex: String.raw`F_g = m\,g`, lesson: 's1-gravitacia' },
    { tex: String.raw`c \approx 3\cdot 10^{8}\,\text{m/s}`, name: 'Rýchlosť svetla vo vákuu', note: 'Najvyššia rýchlosť prenosu informácie.', ex: String.raw`E = m\,c^{2}`, lesson: 'v6-specialna' },
    { tex: String.raw`G`, name: 'Gravitačná konštanta', note: 'G ≈ 6{,}67·10⁻¹¹ N·m²/kg².', ex: String.raw`F = G\,\frac{m_1\,m_2}{r^{2}}`, lesson: 'v10-hviezdy' },
    { tex: String.raw`R`, name: 'Molová plynová konštanta', note: 'R ≈ 8{,}31 J/(mol·K).', ex: String.raw`p\,V = n\,R\,T`, lesson: 's2-ideal' },
    { tex: String.raw`h`, name: 'Planckova konštanta', note: 'h ≈ 6{,}63·10⁻³⁴ J·s.', ex: String.raw`E = h\,f`, lesson: 's4-atom' },
    { tex: String.raw`e`, name: 'Elementárny náboj', note: 'e ≈ 1{,}60·10⁻¹⁹ C.', ex: String.raw`Q = N\,e`, lesson: 's3-naboj' }
  ] },
  { id: 'jednotky', icon: '📐', title: 'Jednotky SI', items: [
    { tex: String.raw`\text{m}`, name: 'Meter – dĺžka', note: 'Základná jednotka dĺžky.', ex: String.raw`1\,\text{km} = 1000\,\text{m}`, lesson: 'r5-jednotky' },
    { tex: String.raw`\text{kg}`, name: 'Kilogram – hmotnosť', note: 'Základná jednotka hmotnosti.', ex: String.raw`1\,\text{t} = 1000\,\text{kg}`, lesson: 'r5-jednotky' },
    { tex: String.raw`\text{s}`, name: 'Sekunda – čas', note: 'Základná jednotka času.', ex: String.raw`1\,\text{min} = 60\,\text{s}`, lesson: 'r5-jednotky' },
    { tex: String.raw`\text{A}`, name: 'Ampér – elektrický prúd', note: 'Základná jednotka prúdu.', ex: String.raw`1\,\text{mA} = 0{,}001\,\text{A}`, lesson: 'r8-prud-napatie' },
    { tex: String.raw`\text{K}`, name: 'Kelvin – termodynamická teplota', note: 'Základná jednotka teploty.', ex: String.raw`0\,\text{°C} = 273{,}15\,\text{K}`, lesson: 'r5-teplota' },
    { tex: String.raw`\text{N}`, name: 'Newton – sila', note: '1 N = 1 kg·m/s².', ex: String.raw`1\,\text{N} = 1\,\text{kg}\,\text{m/s}^{2}`, lesson: 'r7-sila' },
    { tex: String.raw`\text{J}`, name: 'Joule – energia, práca', note: '1 J = 1 N·m.', ex: String.raw`1\,\text{J} = 1\,\text{N}\,\text{m}`, lesson: 'r8-praca' },
    { tex: String.raw`\text{Pa}`, name: 'Pascal – tlak', note: '1 Pa = 1 N/m².', ex: String.raw`1\,\text{Pa} = 1\,\frac{\text{N}}{\text{m}^{2}}`, lesson: 'r6-tlak' }
  ] },
  { id: 'zapisy', icon: '∑', title: 'Ďalšie zápisy', items: [
    { tex: String.raw`\vec F`, name: 'Vektor', note: 'Veličina so smerom, napríklad sila, rýchlosť alebo zrýchlenie.', ex: String.raw`\vec F = m\,\vec a`, lesson: 's1-newton' },
    { tex: String.raw`\sum`, name: 'Súčet', note: 'Súčet všetkých členov.', ex: String.raw`\sum \vec F = \vec 0`, lesson: 'v12-fourier' },
    { tex: String.raw`\int`, name: 'Integrál', note: 'Súčet nekonečne malých príspevkov; používa sa na dráhu z rýchlosti.', ex: String.raw`s = \int v\,dt`, lesson: 'v12-vektory' },
    { tex: String.raw`\frac{d}{dt}`, name: 'Derivácia podľa času', note: 'Okamžitá zmena veličiny.', ex: String.raw`v = \frac{ds}{dt}`, lesson: 'v1-kinematika' },
    { tex: String.raw`\propto`, name: 'Úmerné', note: 'Veličiny rastú alebo klesajú spolu v stálom pomere.', ex: String.raw`F \propto m`, lesson: 'r7-sila' },
    { tex: String.raw`\approx`, name: 'Približne rovné', note: 'Zaokrúhlená hodnota alebo odhad.', ex: String.raw`g \approx 9{,}81\,\text{m/s}^{2}`, lesson: 's1-gravitacia' }
  ] }
];
