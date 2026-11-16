/* Zaradenia právnikov a ich aplikácie. Jediné miesto, kde sa určuje, čo sa zobrazí na úvodnej stránke
   a v zozname aplikácií. Novú aplikáciu pridaj do poľa aplikacie (stav 'hotova' a cesta),
   jej kód do js/aplikacie/ a súbor do index.html a sw.js. */
window.ZARADENIA = [
  {
    id: 'vsu',
    ikona: '⚖️',
    nazov: 'Vyšší súdny úradník',
    popis: 'Platobné rozkazy, trovy, súdne poplatky, lehoty a právoplatnosť.',
    aplikacie: [
      {
        id: 'kalkulacka',
        ikona: '🧮',
        nazov: 'Kalkulačka VSÚ',
        popis: 'Lehoty so sviatkami SR, úroky z omeškania podľa sadzieb ECB, súdne poplatky a ich vrátenie.',
        stav: 'hotova'
      },
      { id: 'uznesenia', ikona: '📄', nazov: 'Generátor uznesení', popis: 'Uznesenia o trovách, odmene znalca či vrátení poplatku zo šablón.', stav: 'pripravujeme' },
      { id: 'platobny-rozkaz', ikona: '🔍', nazov: 'Kontrola návrhu na platobný rozkaz', popis: 'Náležitosti návrhu a upozornenia pri spotrebiteľských zmluvách.', stav: 'pripravujeme' },
      { id: 'anonymizacia', ikona: '🕶️', nazov: 'Anonymizácia rozhodnutí', popis: 'Vyhľadanie osobných údajov pred zverejnením rozhodnutia.', stav: 'pripravujeme' }
    ]
  },
  { id: 'sudca', ikona: '👩‍⚖️', nazov: 'Sudca', popis: 'Nástroje pre rozhodovaciu činnosť.', aplikacie: [] },
  { id: 'advokat', ikona: '💼', nazov: 'Advokát', popis: 'Tarifná odmena, trovy právneho zastúpenia, lehoty.', aplikacie: [] },
  { id: 'notar', ikona: '🖋️', nazov: 'Notár', popis: 'Dedičské konanie a notárske úkony.', aplikacie: [] },
  { id: 'exekutor', ikona: '📬', nazov: 'Súdny exekútor', popis: 'Trovy exekúcie a výpočty pohľadávok.', aplikacie: [] },
  { id: 'podnikovy', ikona: '🏢', nazov: 'Podnikový právnik', popis: 'Zmluvy, obchodný register a lehoty.', aplikacie: [] }
];
