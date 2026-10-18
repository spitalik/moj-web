/* Tematické členenie: každá lekcia patrí práve do jednej témy. Poradie lekcií v téme sa neurčuje tu,
   ale automaticky podľa ročníka (LEVELS) a poľa order – tak vznikne cesta od základov po zložitejšie.
   Novú lekciu treba zaradiť do niektorej témy (kontroluje tools/validate.js). */
window.THEMES = [
  {
    id: 'cisla', icon: '🔢', title: 'Čísla a počtové operácie',
    desc: 'Od počítania do 20 cez veľké čísla, celé a racionálne čísla až po číselné obory a množiny.',
    lessons: ['r1-cisla20', 'r1-scitanie', 'r1-rozklad', 'r2-cisla100', 'r2-scitanie', 'r2-nasobenie', 'r2-nasobilka',
      'r3-cisla1000', 'r3-scitanie', 'r3-nasobilka', 'r3-zatvorky', 'r4-cisla10000', 'r4-scitanie', 'r4-nasobenie', 'cisla',
      'r4-rimske', 'r5-prirodzene', 'r5-zaokruhlovanie', 'r5-rimske', 'r5-operacie', 'r6-cele', 'r7-racionalne', 'r8-cisla',
      'r9-cisla', 'mnoziny', 's1-obory', 's1-absolutna']
  },
  {
    id: 'delitelnost', icon: '🧩', title: 'Deliteľnosť a prvočísla',
    desc: 'Násobky a delitele, znaky deliteľnosti, prvočísla, NSD a nsn.',
    lessons: ['r5-delitelnost', 'r6-delitelnost', 'r6-nsd-nsn', 's1-delitelnost']
  },
  {
    id: 'zlomky', icon: '🍕', title: 'Zlomky a desatinné čísla',
    desc: 'Časti celku, počítanie so zlomkami a desatinnými číslami.',
    lessons: ['r5-zlomky', 'r6-desatinne', 'r6-zlomky', 'zlomky']
  },
  {
    id: 'pomer', icon: '💶', title: 'Pomer, úmernosť, percentá a financie',
    desc: 'Mierka mapy, priama a nepriama úmernosť, percentá, zľavy, úroky a úvery.',
    lessons: ['r7-pomer', 'r7-umernost', 'percenta', 'r7-slovne-percenta', 'r9-percenta', 's1-umernost', 's1-percenta', 's3-financna']
  },
  {
    id: 'slovne', icon: '📝', title: 'Slovné úlohy',
    desc: 'Ako z textu urobiť príklad: od jednoduchých príbehov po úlohy riešené rovnicami.',
    lessons: ['r1-slovne', 'r2-slovne', 'r3-slovne', 'r4-slovne', 'r5-slovne', 'r8-slovne', 's1-slovne']
  },
  {
    id: 'jednotky', icon: '📏', title: 'Meranie a jednotky',
    desc: 'Orientácia, dĺžka, hmotnosť, objem, čas a peniaze; premeny jednotiek.',
    lessons: ['r1-meranie', 'r2-jednotky', 'r3-jednotky', 'r4-jednotky', 'r5-jednotky']
  },
  {
    id: 'vyrazy', icon: '✏️', title: 'Výrazy, mocniny a mnohočleny',
    desc: 'Premenné, úpravy výrazov, vzorce, rozklad na súčin, mocniny a odmocniny, lomené výrazy.',
    lessons: ['r8-mocniny', 'r8-vyrazy', 'r8-upravy', 'r9-rozklad', 'mocniny', 's1-vyrazy', 's1-mnohoclen', 's2-lomene']
  },
  {
    id: 'rovnice', icon: '⚖️', title: 'Rovnice, nerovnice a sústavy',
    desc: 'Lineárne, kvadratické, s absolútnou hodnotou, s parametrom; nerovnice a sústavy rovníc.',
    lessons: ['r8-rovnice', 'r9-rovnice', 'linearne', 's1-menovatel', 's1-nerovnice', 'kvadraticke', 's2-nerovnice',
      's2-sustavy', 's2-absolutna', 's4-sustavy', 's4-parametre', 's4-exp-log-rovnice']
  },
  {
    id: 'funkcie', icon: '📈', title: 'Funkcie a grafy',
    desc: 'Súradnicová sústava, lineárna, kvadratická, mocninová, exponenciálna a logaritmická funkcia.',
    lessons: ['r9-suradnice', 'r9-funkcie', 's2-funkcia', 's2-linearna', 's2-kvadraticka-funkcia', 's2-transformacie',
      's2-mocninove', 's2-exponencialne', 's2-logaritmy', 's4-zlozene-inverzne']
  },
  {
    id: 'planimetria', icon: '📐', title: 'Geometria v rovine',
    desc: 'Útvary, uhly, trojuholníky, obvod a obsah, kruh, Pytagorova veta, zhodnosť a podobnosť.',
    lessons: ['r1-utvary', 'r2-ciary', 'r3-obvod', 'r4-utvary', 'r4-obvod', 'r5-utvary', 'r5-obvod', 'r6-uhly',
      'r6-trojuholniky', 'r6-obvod-obsah', 'r6-osova', 'obsah', 'r7-rovnobezniky', 'r7-kruznica', 'pytagoras', 'r8-kruh',
      'r9-podobnost', 'r9-pytagoras', 's1-uhly', 's1-obsahy', 's1-zhodnost', 's2-podobnost', 's2-kruh']
  },
  {
    id: 'stereometria', icon: '🧊', title: 'Telesá a priestor',
    desc: 'Hranoly, valce, ihlany, kužele a gule; povrch, objem, uhly a vzdialenosti v priestore.',
    lessons: ['r8-hranoly', 'r9-telesa', 'r9-objem', 's2-telesa', 's4-polohy', 's4-uhly-vzdialenosti', 's4-telesa', 's4-povrch-objem']
  },
  {
    id: 'goniometria', icon: '🔺', title: 'Goniometria a trigonometria',
    desc: 'Stupne a radiány, sínus a kosínus, jednotková kružnica, grafy, rovnice, sínusová a kosínusová veta.',
    lessons: ['s3-uhly', 'goniometria', 's3-jednotkova', 's3-grafy', 's3-vztahy', 's3-rovnice', 's3-trojuholnik', 's4-gonio-rovnice']
  },
  {
    id: 'analyticka', icon: '🧭', title: 'Analytická geometria a vektory',
    desc: 'Súradnice a vektory, rovnice priamky a kružnice, ich vzájomná poloha.',
    lessons: ['s3-vektory', 's3-priamka', 's3-kruznica', 's4-priamka-kruznica']
  },
  {
    id: 'postupnosti', icon: '🔁', title: 'Postupnosti a rady',
    desc: 'Aritmetická a geometrická postupnosť, limita postupnosti, nekonečné, mocninové a Taylorove rady.',
    lessons: ['s3-postupnosti', 's3-geometricka', 'v2-postupnosti', 'v2-rady', 'v2-kriteria', 'v2-alternujuce', 'v2-mocninove', 'v2-taylor']
  },
  {
    id: 'statistika', icon: '🎲', title: 'Kombinatorika, pravdepodobnosť a štatistika',
    desc: 'Tabuľky a grafy, počítanie možností, pravdepodobnosť, rozdelenia, odhady a testy hypotéz.',
    lessons: ['r3-tabulky', 'r7-kombinatorika', 'r8-statistika', 'r9-statistika', 's3-kombinatorika', 's3-kombinacie',
      's3-pravdepodobnost', 's4-statisticky-subor', 's4-charakteristiky', 's4-kombinatorika', 's4-pravdepodobnost',
      's4-binomicke', 'v4-priestor', 'v4-podmienena', 'v4-diskretna', 'v4-diskretne-rozdelenia', 'v4-spojita',
      'v4-rovnomerne-exponencialne', 'v4-normalne', 'v4-vektory', 'v4-clv', 'v4-popisna', 'v4-odhady', 'v4-testy', 'v4-regresia']
  },
  {
    id: 'analyza', icon: '∫', title: 'Diferenciálny a integrálny počet',
    desc: 'Limity, derivácie, extrémy, integrály a funkcie viac premenných.',
    lessons: ['s4-limita', 'derivacie', 's4-derivacie-funkcii', 's4-extremy', 's4-priebeh', 'integraly', 's4-plocha',
      'v2-limita-funkcie', 'v2-per-partes', 'v2-racionalne', 'v2-urcity', 'v2-viac-premennych', 'v2-parcialne', 'v2-extremy', 'v2-dvojny']
  },
  {
    id: 'linalg', icon: '🔲', title: 'Lineárna algebra',
    desc: 'Vektory, matice, determinanty, sústavy lineárnych rovníc, vlastné čísla.',
    lessons: ['v1-vektory', 'v1-operacie', 'sucin', 'matice', 'v1-hodnost', 'v1-determinant', 'v1-inverzna', 'v1-sustavy',
      'v1-priestory', 'v1-zobrazenia', 'v1-vlastne', 'v1-skalarny', 'v1-kvadraticke']
  },
  {
    id: 'difrovnice', icon: '〰️', title: 'Diferenciálne rovnice',
    desc: 'Rovnice 1. a 2. rádu, aplikácie, kmitanie, sústavy a Laplaceova transformácia.',
    lessons: ['v3-pojem', 'v3-separovatelne', 'v3-homogenne', 'v3-linearne', 'v3-exaktne', 'v3-aplikacie',
      'v3-charakteristicka', 'v3-nehomogenne', 'v3-kmitanie', 'v3-sustavy', 'v3-laplace']
  },
  {
    id: 'maturita', icon: '🎓', title: 'Opakovanie na maturitu',
    desc: 'Zmiešané úlohy zo všetkých oblastí stredoškolskej matematiky a typové maturitné príklady.',
    lessons: ['s4-mat-cisla', 's4-mat-nerovnice', 's4-mat-funkcie', 's4-mat-geometria', 's4-mat-goniometria',
      's4-mat-postupnosti', 's4-mat-komplex']
  }
];
