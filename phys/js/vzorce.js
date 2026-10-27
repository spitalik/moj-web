/* Vzorce fyziky (ťahák) ku každej téme. Položka: name – názov, tex – vzorec (TeX), note – poznámka (jednotky, význam).
   Skupina: level – ročník (r…, s…, v…), title – názov skupiny. Stránka a odkazy sú v js/features/vzorce.js.
   Používa sa aj v hľadaní (js/features/hladat.js). Desatinná čiarka sa píše ako {,}. */
window.FORMULAS = {
  latky: [
    { level: 'r5', title: 'Hustota a hmotnosť', items: [
      { name: 'Hustota', tex: String.raw`\rho = \frac{m}{V}`, note: 'm je hmotnosť, V objem; jednotka kg/m³ alebo g/cm³.' },
      { name: 'Hmotnosť z hustoty', tex: String.raw`m = \rho\,V` },
      { name: 'Objem z hustoty', tex: String.raw`V = \frac{m}{\rho}` }
    ] }
  ],
  pohyb: [
    { level: 'r7', title: 'Rovnomerný pohyb', items: [
      { name: 'Rýchlosť', tex: String.raw`v = \frac{s}{t}`, note: 'Dráha za čas; jednotka m/s.' },
      { name: 'Dráha', tex: String.raw`s = v\,t` },
      { name: 'Čas', tex: String.raw`t = \frac{s}{v}` }
    ] },
    { level: 's1', title: 'Rovnomerne zrýchlený pohyb', items: [
      { name: 'Rýchlosť', tex: String.raw`v = v_0 + a\,t`, note: 'a je zrýchlenie, v₀ začiatočná rýchlosť.' },
      { name: 'Dráha', tex: String.raw`s = v_0\,t + \tfrac{1}{2}\,a\,t^{2}` },
      { name: 'Rýchlosť bez času', tex: String.raw`v^{2} - v_0^{2} = 2\,a\,s` }
    ] },
    { level: 's1', title: 'Voľný pád', items: [
      { name: 'Dráha pádu', tex: String.raw`h = \tfrac{1}{2}\,g\,t^{2}`, note: 'g ≈ 9{,}81 m/s² na Zemi.' },
      { name: 'Rýchlosť pádu', tex: String.raw`v = g\,t` }
    ] }
  ],
  sily: [
    { level: 'r7', title: 'Sila a tiaž', items: [
      { name: 'Tiaž', tex: String.raw`F_g = m\,g`, note: 'Tiaž smeruje k stredu Zeme.' },
      { name: 'Trenie', tex: String.raw`F_{tr} = \mu\,F_n`, note: 'μ je súčiniteľ trenia, F_n sila kolmá na podložku.' }
    ] },
    { level: 's1', title: 'Newtonove zákony', items: [
      { name: 'Druhý Newtonov zákon', tex: String.raw`\vec F = m\,\vec a`, note: 'Výslednica síl je rovná súčinu hmotnosti a zrýchlenia.' },
      { name: 'Hybnosť', tex: String.raw`\vec p = m\,\vec v` },
      { name: 'Zákon zachovania hybnosti', tex: String.raw`\sum \vec p = \text{konšt.}`, note: 'Pre sústavu bez vonkajších síl.' }
    ] }
  ],
  energia: [
    { level: 'r8', title: 'Práca, výkon a energia', items: [
      { name: 'Mechanická práca', tex: String.raw`W = F\,s`, note: 'Pri sile rovnobežnej s dráhou; jednotka J.' },
      { name: 'Výkon', tex: String.raw`P = \frac{W}{t}`, note: 'Jednotka W (watt).' },
      { name: 'Kinetická energia', tex: String.raw`E_k = \tfrac{1}{2}\,m\,v^{2}` },
      { name: 'Potenciálna energia', tex: String.raw`E_p = m\,g\,h` }
    ] },
    { level: 's1', title: 'Zákon zachovania energie', items: [
      { name: 'Zachovanie mechanickej energie', tex: String.raw`E_{k1} + E_{p1} = E_{k2} + E_{p2}`, note: 'Platí bez trenia a odporu prostredia.' },
      { name: 'Účinnosť', tex: String.raw`\eta = \frac{W_u}{W_v}\cdot 100\,\%`, note: 'Pomer užitočnej a dodanej práce.' }
    ] }
  ],
  tekutiny: [
    { level: 'r6', title: 'Tlak a vztlak', items: [
      { name: 'Tlak', tex: String.raw`p = \frac{F}{S}`, note: 'Jednotka Pa (pascal).' },
      { name: 'Hydrostatický tlak', tex: String.raw`p = \rho\,g\,h`, note: 'h je hĺbka pod hladinou.' },
      { name: 'Vztlaková sila', tex: String.raw`F_{vz} = \rho_k\,g\,V_{pon}`, note: 'Tiaž vytlačenej kvapaliny (Archimedov zákon).' }
    ] }
  ],
  teplo: [
    { level: 'r6', title: 'Teplo a zmeny skupenstva', items: [
      { name: 'Teplo pri ohreve', tex: String.raw`Q = m\,c\,\Delta t`, note: 'c je merná tepelná kapacita; jednotka J.' },
      { name: 'Teplo pri skupenskej premene', tex: String.raw`Q = m\,L`, note: 'L je skupenské teplo.' }
    ] },
    { level: 's2', title: 'Ideálny plyn a termodynamika', items: [
      { name: 'Stavová rovnica', tex: String.raw`p\,V = n\,R\,T`, note: 'T je termodynamická teplota v kelvinoch.' },
      { name: 'Prvá veta termodynamiky', tex: String.raw`\Delta U = Q + W`, note: 'W je práca dodaná plynu.' }
    ] }
  ],
  elektrina: [
    { level: 'r8', title: 'Prúd a napätie', items: [
      { name: 'Elektrický prúd', tex: String.raw`I = \frac{Q}{t}`, note: 'Jednotka A (ampér).' },
      { name: 'Napätie', tex: String.raw`U = \frac{W}{Q}`, note: 'Jednotka V (volt).' }
    ] },
    { level: 'r9', title: 'Ohmov zákon a výkon', items: [
      { name: 'Ohmov zákon', tex: String.raw`U = R\,I`, note: 'R je odpor vodiča; jednotka Ω.' },
      { name: 'Elektrický výkon', tex: String.raw`P = U\,I` },
      { name: 'Elektrická práca', tex: String.raw`W = U\,I\,t` }
    ] },
    { level: 's3', title: 'Zapojenie odporov', items: [
      { name: 'Sériové zapojenie', tex: String.raw`R = R_1 + R_2` },
      { name: 'Paralelné zapojenie', tex: String.raw`\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2}` }
    ] }
  ],
  magnetizmus: [
    { level: 's3', title: 'Magnetické pole a sila', items: [
      { name: 'Sila na vodič s prúdom', tex: String.raw`F = B\,I\,l\,\sin\alpha`, note: 'B je magnetická indukcia; jednotka T (tesla).' },
      { name: 'Magnetické pole priameho vodiča', tex: String.raw`B = \frac{\mu_0\,I}{2\pi\,r}` }
    ] },
    { level: 's3', title: 'Elektromagnetická indukcia', items: [
      { name: 'Indukované napätie', tex: String.raw`U_i = -\frac{\Delta\Phi}{\Delta t}`, note: 'Φ je magnetický tok.' }
    ] }
  ],
  svetlo: [
    { level: 'r7', title: 'Odraz a lom', items: [
      { name: 'Zákon odrazu', tex: String.raw`\alpha = \alpha'`, note: 'Uhol dopadu sa rovná uhlu odrazu.' },
      { name: 'Index lomu', tex: String.raw`n = \frac{c}{v}`, note: 'c je rýchlosť svetla vo vákuu, v rýchlosť v prostredí.' }
    ] },
    { level: 's3', title: 'Šošovky a zrkadlá', items: [
      { name: 'Zobrazovacia rovnica', tex: String.raw`\frac{1}{f} = \frac{1}{a} + \frac{1}{a'}`, note: 'f ohnisková vzdialenosť, a predmetová, a′ obrazová.' },
      { name: 'Zväčšenie', tex: String.raw`Z = \frac{a'}{a}` }
    ] }
  ],
  vlny: [
    { level: 's2', title: 'Vlnenie a kmitanie', items: [
      { name: 'Vlnová rýchlosť', tex: String.raw`v = \lambda\,f`, note: 'λ je vlnová dĺžka, f frekvencia.' },
      { name: 'Perióda a frekvencia', tex: String.raw`f = \frac{1}{T}` },
      { name: 'Perióda kyvadla', tex: String.raw`T = 2\pi\sqrt{\frac{L}{g}}`, note: 'L je dĺžka závesu.' },
      { name: 'Perióda pružiny', tex: String.raw`T = 2\pi\sqrt{\frac{m}{k}}`, note: 'k je tuhosť pružiny.' }
    ] }
  ],
  moderna: [
    { level: 's4', title: 'Žiarenie a rádioaktivita', items: [
      { name: 'Energia fotónu', tex: String.raw`E = h\,f`, note: 'h je Planckova konštanta.' },
      { name: 'Rádioaktívny rozpad', tex: String.raw`N = N_0\cdot 2^{-t/T_{1/2}}`, note: 'T_{1/2} je polčas rozpadu.' },
      { name: 'Ekvivalencia hmoty a energie', tex: String.raw`E = m\,c^{2}` }
    ] }
  ],
  relativita: [
    { level: 'v6', title: 'Špeciálna teória relativity', items: [
      { name: 'Lorentzov faktor', tex: String.raw`\gamma = \frac{1}{\sqrt{1 - \frac{v^{2}}{c^{2}}}}` },
      { name: 'Dilatácia času', tex: String.raw`\Delta t = \gamma\,\Delta t_0`, note: 'Pohybujúce sa hodiny idú pomalšie.' },
      { name: 'Kontrakcia dĺžky', tex: String.raw`L = \frac{L_0}{\gamma}` },
      { name: 'Relativistická energia', tex: String.raw`E = \gamma\,m\,c^{2}` }
    ] }
  ],
  pevne: [
    { level: 'v9', title: 'Vodiče a odpor', items: [
      { name: 'Odpor vodiča', tex: String.raw`R = \rho_r\,\frac{l}{S}`, note: 'ρ_r je merný odpor, l dĺžka, S prierez vodiča.' }
    ] }
  ],
  vesmir: [
    { level: 'v10', title: 'Gravitácia a obeh', items: [
      { name: 'Newtonov gravitačný zákon', tex: String.raw`F = G\,\frac{m_1\,m_2}{r^{2}}` },
      { name: 'Obežná rýchlosť', tex: String.raw`v = \sqrt{\frac{G\,M}{r}}` },
      { name: 'Hubbleov zákon', tex: String.raw`v = H_0\,d`, note: 'Vzďaľovacia rýchlosť galaxie a jej vzdialenosť.' }
    ] }
  ],
  matematika: [
    { level: 'v12', title: 'Vektory a deriváty', items: [
      { name: 'Veľkosť vektora', tex: String.raw`|\vec a| = \sqrt{a_x^{2} + a_y^{2}}` },
      { name: 'Skalárny súčin', tex: String.raw`\vec a\cdot\vec b = |\vec a|\,|\vec b|\cos\varphi` },
      { name: 'Rýchlosť ako derivácia', tex: String.raw`v = \frac{ds}{dt}` },
      { name: 'Dráha ako integrál', tex: String.raw`s = \int v\,dt` }
    ] }
  ],
  opakovanie: [
    { level: 's4', title: 'Najdôležitejšie vzťahy', items: [
      { name: 'Rýchlosť', tex: String.raw`v = \frac{s}{t}` },
      { name: 'Druhý Newtonov zákon', tex: String.raw`F = m\,a` },
      { name: 'Kinetická energia', tex: String.raw`E_k = \tfrac{1}{2}\,m\,v^{2}` },
      { name: 'Ohmov zákon', tex: String.raw`U = R\,I` },
      { name: 'Tlak', tex: String.raw`p = \frac{F}{S}` }
    ] }
  ]
};
