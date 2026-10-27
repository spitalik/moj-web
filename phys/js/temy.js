/* Tematické členenie: každá lekcia má pole theme s jedným z id nižšie. Zoznam lekcií v téme sa
   doplní automaticky po načítaní všetkých ročníkov. Poradie v téme sa určí podľa ročníka a poľa order,
   takže vznikne cesta od základov po zložitejšie. Novú lekciu zaraď do niektorej témy (kontroluje tools/validate.js). */
window.THEMES = [
  { id: 'latky', icon: '🧱', title: 'Látky a ich vlastnosti',
    desc: 'Pevné látky, kvapaliny a plyny, hustota, hmotnosť, objem a rozpúšťanie látok.' },
  { id: 'pohyb', icon: '🏃', title: 'Pohyb a rýchlosť',
    desc: 'Dráha, čas, rýchlosť, zrýchlenie, rovnomerný a nerovnomerný pohyb, kinematika.' },
  { id: 'sily', icon: '💪', title: 'Sily a pohybové zákony',
    desc: 'Sila a jej účinky, tiaž, trenie, Newtonove zákony, hybnosť a rotácia.' },
  { id: 'energia', icon: '🔋', title: 'Práca, energia a výkon',
    desc: 'Mechanická práca, výkon, energia a jej premeny, zákony zachovania, jednoduché stroje.' },
  { id: 'tekutiny', icon: '💧', title: 'Tekutiny a tlak',
    desc: 'Tlak v kvapalinách a plynoch, atmosférický tlak, vztlak, plávanie, prúdenie a viskozita.' },
  { id: 'teplo', icon: '🌡️', title: 'Teplo a skupenstvá',
    desc: 'Teplota, tepelná výmena, zmeny skupenstva, ideálny plyn a termodynamika.' },
  { id: 'elektrina', icon: '🔌', title: 'Elektrina a obvody',
    desc: 'Elektrický náboj, prúd, napätie, odpor, Ohmov zákon, zapojenie obvodov a elektrická práca.' },
  { id: 'magnetizmus', icon: '🧲', title: 'Magnetizmus a elektromagnetizmus',
    desc: 'Magnetické pole, magnetické účinky prúdu, elektromagnetická indukcia a striedavý prúd.' },
  { id: 'svetlo', icon: '💡', title: 'Svetlo a optika',
    desc: 'Svetlo a tieň, odraz, lom, zrkadlá, šošovky, interferencia a difrakcia.' },
  { id: 'vlny', icon: '🔊', title: 'Kmitanie, vlnenie a zvuk',
    desc: 'Vznik zvuku, kmitanie, frekvencia, vlnová dĺžka, mechanické a elektromagnetické vlnenie.' },
  { id: 'moderna', icon: '⚛️', title: 'Atóm, jadro a kvantová fyzika',
    desc: 'Modely atómu, spektrá, kvantové javy, rádioaktivita, jadrové reakcie a elementárne častice.' },
  { id: 'relativita', icon: '🌀', title: 'Relativita, priestor a čas',
    desc: 'Špeciálna a všeobecná teória relativity, relativistická energia a zakrivenie časopriestoru.' },
  { id: 'pevne', icon: '💎', title: 'Pevné látky a materiály',
    desc: 'Kryštály, väzby, vodiče a izolanty, polovodiče, supravodivosť a nanomateriály.' },
  { id: 'vesmir', icon: '🪐', title: 'Vesmír a astrofyzika',
    desc: 'Hviezdy, galaxie, planéty, čierne diery, rozpínanie vesmíru a kozmologické modely.' },
  { id: 'matematika', icon: '∑', title: 'Matematika vo fyzike',
    desc: 'Vektory, diferenciálne rovnice, Fourierova analýza, modelovanie a numerické výpočty.' },
  { id: 'opakovanie', icon: '🎓', title: 'Opakovanie a maturita',
    desc: 'Súhrn najdôležitejších vzťahov, typové úlohy a príprava na maturitu z fyziky.' }
];

// Doplnenie zoznamu lekcií každej témy z poľa theme (spúšťa sa až po načítaní všetkých ročníkov).
THEMES.forEach(function (th) {
  th.lessons = LESSONS.filter(function (l) { return l.theme === th.id; }).map(function (l) { return l.id; });
});
