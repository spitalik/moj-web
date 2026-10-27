/* Obsah lekcií fyziky. Všetky texty a príklady sú pôvodné (napísané pre túto aplikáciu),
   nekopírujú žiadnu licencovanú učebnicu. Fyzikálne zákony sú všeobecne známe a voľne použiteľné. */
window.GROUPS = [
  { id: 'zs', title: 'Základná škola' },
  { id: 'ss', title: 'Stredná škola' },
  { id: 'vs', title: 'Vysoká škola' }
];

// Lekcie sa v rámci úrovne radia podľa poľa order (10, 20, 30…).
window.LEVELS = [
  { id: 'r1', group: 'zs', title: '1. ročník', desc: 'Pozorovanie predmetov a javov okolo nás, vlastnosti materiálov, voda, vzduch, svetlo a teplo.' },
  { id: 'r2', group: 'zs', title: '2. ročník', desc: 'Vlastnosti látok, skupenstvá, voda a vzduch, magnety a jednoduché pokusy.' },
  { id: 'r3', group: 'zs', title: '3. ročník', desc: 'Látky, meranie dĺžky, času a teploty, zahrievanie, rozpúšťanie a pohyb predmetov.' },
  { id: 'r4', group: 'zs', title: '4. ročník', desc: 'Svetlo a tieň, zvuk, magnety, jednoduché elektrické zariadenia a energia.' },
  { id: 'r5', group: 'zs', title: '5. ročník', desc: 'Vlastnosti látok a telies, hmotnosť, objem, hustota, jednotky a teplota.' },
  { id: 'r6', group: 'zs', title: '6. ročník', desc: 'Hustota, kvapaliny a plyny, tlak, vztlak, teplo a zmeny skupenstva.' },
  { id: 'r7', group: 'zs', title: '7. ročník', desc: 'Pohyb, dráha, rýchlosť, sila, tiaž, trenie a svetlo: odraz, lom a zrkadlá.' },
  { id: 'r8', group: 'zs', title: '8. ročník', desc: 'Práca, výkon, energia, jednoduché stroje, elektrický náboj, prúd, napätie a odpor.' },
  { id: 'r9', group: 'zs', title: '9. ročník', desc: 'Elektrické obvody, Ohmov zákon, výkon, magnetické pole, elektromotor a energia.' },
  { id: 's1', group: 'ss', title: '1. ročník SŠ', desc: 'Veličiny a jednotky, pohyb, Newtonove zákony, gravitácia, práca, energia a tlak.' },
  { id: 's2', group: 'ss', title: '2. ročník SŠ', desc: 'Molekulová fyzika, teplo, ideálny plyn, termodynamika, kmitanie a vlnenie.' },
  { id: 's3', group: 'ss', title: '3. ročník SŠ', desc: 'Elektrický náboj, prúd, Ohmov zákon, magnetické pole, striedavý prúd a optika.' },
  { id: 's4', group: 'ss', title: '4. ročník SŠ', desc: 'Vlnové vlastnosti svetla, žiarenie, atóm, rádioaktivita, astrofyzika a maturita.' },
  { id: 'v1', group: 'vs', title: 'Klasická mechanika', desc: 'Kinematika, Newtonove zákony, hybnosť, rotácia tuhého telesa, Lagrangeova a Hamiltonova mechanika.' },
  { id: 'v2', group: 'vs', title: 'Termodynamika a štatistická fyzika', desc: 'Stavové rovnice, termodynamické zákony, entropia, kinetická teória a Boltzmannovo rozdelenie.' },
  { id: 'v3', group: 'vs', title: 'Elektromagnetizmus', desc: 'Elektrické pole, Gaussov zákon, magnetické pole, indukcia, Maxwellove rovnice a elektromagnetické vlny.' },
  { id: 'v4', group: 'vs', title: 'Optika a fyzika vĺn', desc: 'Vlnenie, interferencia, difrakcia, polarizácia, geometrická a vlnová optika, lasery a optické vlákna.' },
  { id: 'v5', group: 'vs', title: 'Kvantová mechanika', desc: 'Vlnovo-časticový dualizmus, Schrödingerova rovnica, kvantovanie energie, spin a atóm vodíka.' },
  { id: 'v6', group: 'vs', title: 'Teória relativity', desc: 'Špeciálna a všeobecná teória relativity, Lorentzove transformácie, zakrivenie časopriestoru.' },
  { id: 'v7', group: 'vs', title: 'Atómová a jadrová fyzika', desc: 'Štruktúra atómu, spektrá, jadro, rádioaktivita, štiepenie a fúzia, interakcia žiarenia s látkou.' },
  { id: 'v8', group: 'vs', title: 'Fyzika elementárnych častíc', desc: 'Kvarky, leptóny, interakcie, štandardný model, urýchľovače a detektory častíc.' },
  { id: 'v9', group: 'vs', title: 'Fyzika kondenzovaných látok', desc: 'Kryštály, väzby v pevných látkach, pásová teória, polovodiče, supravodivosť a magnetické materiály.' },
  { id: 'v10', group: 'vs', title: 'Astrofyzika a kozmológia', desc: 'Hviezdy, galaxie, čierne diery, exoplanéty, rozpínanie vesmíru a temná hmota.' },
  { id: 'v11', group: 'vs', title: 'Mechanika tekutín', desc: 'Hydrostatika, hydrodynamika, Bernoulliho rovnica, viskozita, turbulencia a aerodynamika.' },
  { id: 'v12', group: 'vs', title: 'Matematická a výpočtová fyzika', desc: 'Modelovanie javov, diferenciálne rovnice, vektorová analýza, Fourierova analýza a numerické metódy.' }
];

// Lekcie pridávajú súbory js/rocniky/*.js cez LESSONS.push (pozri r1.js).
window.LESSONS = [];
