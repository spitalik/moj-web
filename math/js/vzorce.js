/* Prehľad vzorcov (ťahák) ku každej téme z js/temy.js. Zobrazuje js/features/vzorce.js; texty sú obsah (slovensky). */
window.FORMULAS = {
  /* ---------- Čísla a počtové operácie ---------- */
  cisla: [
    { title: 'Sčítanie, odčítanie, násobenie a delenie', level: 'r1', items: [
      { name: 'Zámena sčítancov', tex: 'a + b = b + a', note: 'Súčet sa nezmení, keď sčítance vymeníme.' },
      { name: 'Sčítanie a odčítanie', tex: 'a + b = c \\quad\\Rightarrow\\quad c - b = a', note: 'Odčítanie je opačná operácia k sčítaniu – slúži aj na skúšku.' },
      { name: 'Násobenie ako opakované sčítanie', tex: '3\\cdot 4 = 4 + 4 + 4 = 12' },
      { name: 'Zámena činiteľov', tex: 'a\\cdot b = b\\cdot a' },
      { name: 'Násobenie jednotkou a nulou', tex: 'a\\cdot 1 = a \\quad\\quad a\\cdot 0 = 0' },
      { name: 'Delenie a násobenie', tex: 'a : b = c \\quad\\Leftrightarrow\\quad c\\cdot b = a', note: 'Nulou deliť nemožno.' }
    ] },
    { title: 'Zápis čísel, zvyšok a poradie operácií', level: 'r3', items: [
      { name: 'Rozvinutý zápis čísla', tex: '472 = 4\\cdot 100 + 7\\cdot 10 + 2' },
      { name: 'Poradie operácií', tex: '(\\ )\\ \\to\\ \\cdot\\,,\\ :\\ \\to\\ +,\\ -', note: 'Najprv zátvorky, potom násobenie a delenie, nakoniec sčítanie a odčítanie (zľava doprava).' },
      { name: 'Delenie so zvyškom', tex: '\\text{delenec} = \\text{podiel}\\cdot\\text{deliteľ} + \\text{zvyšok}', note: 'Zvyšok je vždy menší ako deliteľ, napr. $17 = 3\\cdot 5 + 2$.' }
    ] },
    { title: 'Rímske číslice', level: 'r4', items: [
      { name: 'Základné znaky', tex: '\\text{I} = 1,\\ \\text{V} = 5,\\ \\text{X} = 10,\\ \\text{L} = 50' },
      { name: 'Väčšie znaky', tex: '\\text{C} = 100,\\ \\text{D} = 500,\\ \\text{M} = 1\\,000' },
      { name: 'Odčítacie dvojice', tex: '\\text{IV} = 4,\\ \\text{IX} = 9,\\ \\text{XL} = 40,\\ \\text{XC} = 90,\\ \\text{CD} = 400,\\ \\text{CM} = 900', note: 'Menší znak pred väčším sa odčíta.' }
    ] },
    { title: 'Výhodné počítanie a zaokrúhľovanie', level: 'r5', items: [
      { name: 'Združovanie činiteľov', tex: '(a\\cdot b)\\cdot c = a\\cdot (b\\cdot c)', note: 'Napr. $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 1\\,700$.' },
      { name: 'Roznásobenie zátvorky', tex: 'a\\cdot (b + c) = a\\cdot b + a\\cdot c', note: 'Napr. $36\\cdot 99 = 36\\cdot 100 - 36$.' },
      { name: 'Zaokrúhľovanie', tex: '3\\,467 \\doteq 3\\,470', note: 'Rozhoduje prvá vynechaná číslica: 0–4 nadol, 5–9 nahor.' }
    ] },
    { title: 'Celé a racionálne čísla', level: 'r6', items: [
      { name: 'Opačné číslo', tex: 'a \\ \\leftrightarrow\\ -a \\quad\\quad -(-a) = a' },
      { name: 'Odčítanie záporného čísla', tex: 'a - (-b) = a + b', note: 'Odčítať číslo znamená pripočítať opačné číslo.' },
      { name: 'Pripočítanie záporného čísla', tex: 'a + (-b) = a - b' },
      { name: 'Absolútna hodnota', tex: '|-6| = |6| = 6', note: 'Vzdialenosť čísla od nuly na číselnej osi, nikdy nie je záporná.' },
      { name: 'Znamienka pri násobení', tex: '(-a)\\cdot(-b) = a\\cdot b \\quad\\quad (-a)\\cdot b = -(a\\cdot b)', note: 'Rovnaké znamienka dajú kladný výsledok, rôzne záporný; pri delení rovnako.' }
    ] },
    { title: 'Číselné obory a intervaly', level: 'r9', items: [
      { name: 'Číselné obory', tex: '\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}', note: 'Prirodzené, celé, racionálne a reálne čísla.' },
      { name: 'Racionálne čísla', tex: '\\mathbb{Q} = \\left\\{\\frac{p}{q} : p\\in\\mathbb{Z},\\ q\\in\\mathbb{N}\\right\\}' },
      { name: 'Periodické číslo', tex: '\\frac{1}{3} = 0{,}333\\ldots = 0{,}\\overline{3} \\quad\\quad \\frac{4}{11} = 0{,}\\overline{36}' },
      { name: 'Uzavretý a otvorený interval', tex: '\\langle a; b\\rangle:\\ a\\le x\\le b \\quad\\quad (a; b):\\ a < x < b' },
      { name: 'Polouzavreté a neohraničené intervaly', tex: '\\langle a; b):\\ a\\le x < b \\quad\\quad (a; \\infty):\\ x > a', note: 'Pri nekonečne je zátvorka vždy okrúhla.' }
    ] },
    { title: 'Množiny', level: 's1', items: [
      { name: 'Zjednotenie a prienik', tex: 'A\\cup B \\quad\\quad A\\cap B', note: 'Zjednotenie: prvky aspoň jednej z množín; prienik: prvky oboch množín.' },
      { name: 'Rozdiel množín', tex: 'A\\setminus B = \\{x : x\\in A \\text{ a } x\\notin B\\}' },
      { name: 'Počet prvkov zjednotenia', tex: '|A\\cup B| = |A| + |B| - |A\\cap B|' }
    ] },
    { title: 'Absolútna hodnota', level: 's1', items: [
      { name: 'Definícia', tex: '|a| = \\begin{cases} a, & a\\ge 0\\\\ -a, & a < 0\\end{cases}' },
      { name: 'Súčin a trojuholníková nerovnosť', tex: '|a\\cdot b| = |a|\\cdot|b| \\quad\\quad |a + b|\\le|a| + |b|' },
      { name: 'Vzdialenosť na osi', tex: '|x - a| \\le r \\iff x\\in\\langle a - r; a + r\\rangle', note: '$|x - a|$ je vzdialenosť čísel $x$ a $a$ na číselnej osi.' }
    ] },
    { title: 'Komplexné čísla', level: 'v2', items: [
      { name: 'Algebraický tvar', tex: 'z = a + b\\mathrm{i}, \\quad \\mathrm{i}^2 = -1', note: '$a = \\operatorname{Re} z$, $b = \\operatorname{Im} z$.' },
      { name: 'Násobenie', tex: '(a + b\\mathrm{i})(c + d\\mathrm{i}) = (ac - bd) + (ad + bc)\\mathrm{i}' },
      { name: 'Združené číslo a absolútna hodnota', tex: '\\bar z = a - b\\mathrm{i} \\quad\\quad |z| = \\sqrt{a^2 + b^2} \\quad\\quad z\\bar z = |z|^2' },
      { name: 'Delenie', tex: '\\frac{z}{w} = \\frac{z\\,\\bar w}{|w|^2}' },
      { name: 'Goniometrický a exponenciálny tvar', tex: 'z = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi) = r\\,\\mathrm{e}^{\\mathrm{i}\\varphi}', note: '$r = |z|$, $\\cos\\varphi = \\frac{a}{r}$, $\\sin\\varphi = \\frac{b}{r}$.' },
      { name: 'Súčin v goniometrickom tvare', tex: 'r_1\\mathrm{e}^{\\mathrm{i}\\varphi_1}\\cdot r_2\\mathrm{e}^{\\mathrm{i}\\varphi_2} = r_1 r_2\\,\\mathrm{e}^{\\mathrm{i}(\\varphi_1 + \\varphi_2)}', note: 'Absolútne hodnoty sa násobia, argumenty sčítajú.' },
      { name: 'Moivreova veta', tex: '\\left[r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi)\\right]^n = r^n(\\cos n\\varphi + \\mathrm{i}\\sin n\\varphi)' },
      { name: 'n-té odmocniny', tex: 'z_k = \\sqrt[n]{R}\\;\\mathrm{e}^{\\mathrm{i}\\frac{\\psi + 2k\\pi}{n}}, \\quad k = 0, 1, \\dots, n - 1', note: 'Odmocniny čísla $w = R\\,\\mathrm{e}^{\\mathrm{i}\\psi}$ tvoria vrcholy pravidelného $n$-uholníka.' }
    ] }
  ],

  /* ---------- Deliteľnosť ---------- */
  delitelnost: [
    { title: 'Násobky a delitele', level: 'r5', items: [
      { name: 'Deliteľ a násobok', tex: 'a = k\\cdot b \\quad\\Rightarrow\\quad b \\mid a', note: 'Ak $a$ vydelíme $b$ bez zvyšku, je $b$ deliteľ čísla $a$ a $a$ je násobok čísla $b$.' },
      { name: 'Príklad', tex: '12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4', note: 'Delitele čísla 12 sú 1, 2, 3, 4, 6, 12.' },
      { name: 'Deliteľnosť 2, 5 a 10', tex: '2 \\mid n,\\ 5 \\mid n,\\ 10 \\mid n', note: 'Podľa poslednej číslice: 2 – párna; 5 – 0 alebo 5; 10 – 0.' },
      { name: 'Deliteľnosť 3', tex: '3 \\mid n \\iff 3 \\mid \\text{ciferný súčet}' }
    ] },
    { title: 'Ďalšie znaky deliteľnosti', level: 'r6', items: [
      { name: 'Deliteľnosť 9', tex: '9 \\mid n \\iff 9 \\mid \\text{ciferný súčet}' },
      { name: 'Deliteľnosť 4', tex: '4 \\mid n \\iff 4 \\mid \\text{posledné dvojčíslie}' },
      { name: 'Deliteľnosť 6', tex: '6 \\mid n \\iff 2 \\mid n \\ \\text{a}\\ 3 \\mid n' },
      { name: 'Deliteľnosť 8', tex: '8 \\mid n \\iff 8 \\mid \\text{posledné trojčíslie}', note: 'Preberá sa v 1. ročníku SŠ.' },
      { name: 'Deliteľnosť 11', tex: '\\overline{abc} = (99a + 11b) + (a - b + c)', note: 'Číslo je deliteľné 11, ak je 11 deliteľný striedavý súčet cifier (1. ročník SŠ).' }
    ] },
    { title: 'Prvočísla, NSD a nsn', level: 'r6', items: [
      { name: 'Prvočíslo', tex: 'p \\text{ má práve dva delitele: } 1 \\text{ a } p', note: '1 nie je prvočíslo ani zložené číslo.' },
      { name: 'Rozklad na prvočinitele', tex: '60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5' },
      { name: 'NSD a nsn z rozkladov', tex: '\\mathrm{NSD}: \\text{spoločné s menším exponentom} \\quad \\mathrm{nsn}: \\text{všetky s väčším}' },
      { name: 'Vzťah NSD a nsn', tex: '\\mathrm{NSD}(a, b)\\cdot\\mathrm{nsn}(a, b) = a\\cdot b' },
      { name: 'Nesúdeliteľné čísla', tex: '\\mathrm{NSD}(a, b) = 1' }
    ] },
    { title: 'Deliteľnosť na strednej škole', level: 's1', items: [
      { name: 'Definícia deliteľnosti', tex: 'a \\mid b \\iff b = k\\cdot a \\text{ pre nejaké } k\\in\\mathbb{Z}' },
      { name: 'Zdôvodnenie znaku pre 3 a 9', tex: '\\overline{abc} = 100a + 10b + c = (99a + 9b) + (a + b + c)' },
      { name: 'Počet deliteľov', tex: 'n = p_1^{e_1}\\cdots p_k^{e_k} \\ \\Rightarrow\\ (e_1 + 1)\\cdots(e_k + 1)', note: 'Napr. $72 = 2^3\\cdot 3^2$ má $4\\cdot 3 = 12$ deliteľov.' }
    ] }
  ],

  /* ---------- Zlomky a desatinné čísla ---------- */
  zlomky: [
    { title: 'Zlomok ako časť celku', level: 'r5', items: [
      { name: 'Čitateľ a menovateľ', tex: '\\frac{a}{b} = a : b', note: 'Celok rozdelíme na $b$ rovnakých dielov a vezmeme $a$ z nich; zlomková čiara znamená delenie.' },
      { name: 'Zlomok z čísla', tex: '\\frac{3}{4} \\text{ z } 20 = 20 : 4\\cdot 3 = 15' },
      { name: 'Porovnávanie', tex: '\\frac{5}{7} > \\frac{3}{7} \\quad\\quad \\frac{1}{3} > \\frac{1}{5}', note: 'Pri rovnakom menovateli rozhoduje čitateľ, pri rovnakom čitateli je väčší zlomok s menším menovateľom.' }
    ] },
    { title: 'Desatinné čísla', level: 'r6', items: [
      { name: 'Rády desatinného čísla', tex: '2{,}75 = 2 + \\frac{7}{10} + \\frac{5}{100}' },
      { name: 'Pridanie núl na konci', tex: '2{,}4 = 2{,}40 = 2{,}400' },
      { name: 'Násobenie', tex: '1{,}2\\cdot 0{,}3 = 0{,}36', note: 'Výsledok má toľko desatinných miest, koľko majú činitele spolu.' },
      { name: 'Násobenie a delenie mocninou 10', tex: '3{,}7\\cdot 100 = 370 \\quad\\quad 3{,}7 : 100 = 0{,}037', note: 'Desatinnú čiarku posúvame o toľko miest, koľko núl má násobiteľ či deliteľ.' }
    ] },
    { title: 'Úpravy zlomkov', level: 'r6', items: [
      { name: 'Rozširovanie a krátenie', tex: '\\frac{a}{b} = \\frac{a\\cdot k}{b\\cdot k} \\quad (k\\neq 0)', note: 'Napr. $\\frac{12}{18} = \\frac{2}{3}$ (krátime šiestimi = NSD).' },
      { name: 'Prevod na desatinné číslo', tex: '\\frac{3}{4} = 3 : 4 = 0{,}75' },
      { name: 'Zmiešané číslo', tex: '2\\frac{1}{3} = 2 + \\frac{1}{3} = \\frac{7}{3}' }
    ] },
    { title: 'Počítanie so zlomkami', level: 'r7', items: [
      { name: 'Sčítanie (rovnaký menovateľ)', tex: '\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}' },
      { name: 'Sčítanie a odčítanie', tex: '\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm bc}{bd}', note: 'Výhodnejšie je rozšíriť na najmenší spoločný menovateľ (nsn menovateľov).' },
      { name: 'Násobenie', tex: '\\frac{a}{b}\\cdot\\frac{c}{d} = \\frac{a\\cdot c}{b\\cdot d}' },
      { name: 'Delenie', tex: '\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b}\\cdot\\frac{d}{c}', note: 'Delíme zlomkom tak, že násobíme jeho prevrátenou hodnotou.' },
      { name: 'Prevrátená hodnota', tex: '\\frac{a}{b} \\ \\to\\ \\frac{b}{a} \\quad\\quad \\frac{a}{b}\\cdot\\frac{b}{a} = 1' },
      { name: 'Zložený zlomok', tex: '\\frac{\\ \\frac{a}{b}\\ }{\\frac{c}{d}} = \\frac{a\\cdot d}{b\\cdot c}' }
    ] }
  ],

  /* ---------- Pomer, úmernosť, percentá, financie ---------- */
  pomer: [
    { title: 'Pomer a mierka', level: 'r7', items: [
      { name: 'Krátenie pomeru', tex: '12 : 16 = 3 : 4', note: 'Pomer krátime a rozširujeme ako zlomok.' },
      { name: 'Rozdelenie v pomere', tex: 'a : b \\ \\Rightarrow\\ \\text{1 diel} = \\frac{\\text{celok}}{a + b}', note: 'Časti sú $a$ dielov a $b$ dielov; napr. 35 € v pomere $2 : 3$ je 14 € a 21 €.' },
      { name: 'Zmena v pomere', tex: 'x \\ \\to\\ x\\cdot\\frac{p}{q}', note: 'Zmeniť číslo v pomere $p : q$; pre $p > q$ ide o zväčšenie, pre $p < q$ o zmenšenie.' },
      { name: 'Mierka mapy', tex: '1 : n \\quad\\Rightarrow\\quad \\text{skutočnosť} = \\text{mapa}\\cdot n', note: '1 cm na mape je $n$ cm v teréne; pomôže $100\\,000\\,\\text{cm} = 1\\,\\text{km}$.' }
    ] },
    { title: 'Priama a nepriama úmernosť', level: 'r7', items: [
      { name: 'Priama úmernosť', tex: 'y = k\\cdot x \\quad\\quad \\frac{y}{x} = k', note: 'Koľkokrát sa zväčší $x$, toľkokrát sa zväčší $y$; graf je priamka cez počiatok.' },
      { name: 'Nepriama úmernosť', tex: 'y = \\frac{k}{x} \\quad\\quad x\\cdot y = k', note: 'Koľkokrát sa zväčší $x$, toľkokrát sa zmenší $y$; graf je hyperbola.' },
      { name: 'Trojčlenka (priama)', tex: '\\frac{x}{x_1} = \\frac{y}{y_1} \\ \\Rightarrow\\ y = y_1\\cdot\\frac{x}{x_1}' },
      { name: 'Trojčlenka (nepriama)', tex: 'x\\cdot y = x_1\\cdot y_1 \\ \\Rightarrow\\ y = y_1\\cdot\\frac{x_1}{x}' }
    ] },
    { title: 'Percentá', level: 'r7', items: [
      { name: 'Jedno percento', tex: '1\\,\\% = \\frac{1}{100} = 0{,}01', note: 'Celok (základ) je 100 %.' },
      { name: 'Percentová časť', tex: 'c = \\frac{p}{100}\\cdot z', note: '$z$ – základ, $p$ – počet percent, $c$ – percentová časť.' },
      { name: 'Základ', tex: 'z = \\frac{c\\cdot 100}{p}' },
      { name: 'Počet percent', tex: 'p = \\frac{c}{z}\\cdot 100' },
      { name: 'Zvýšenie a zníženie o p %', tex: 'z\\cdot\\left(1 + \\frac{p}{100}\\right) \\quad\\quad z\\cdot\\left(1 - \\frac{p}{100}\\right)', note: 'Napr. cena 80 € po zľave 25 %: $80\\cdot 0{,}75 = 60$ €.' },
      { name: 'Pôvodná hodnota', tex: '60 : 0{,}75 = 80', note: 'Z novej hodnoty sa k pôvodnej vrátime delením tým istým koeficientom.' },
      { name: 'Postupné zmeny', tex: '1{,}2\\cdot 0{,}8 = 0{,}96', note: 'Zmeny sa násobia, nesčítajú: +20 % a potom −20 % je spolu −4 % (1. ročník SŠ).' }
    ] },
    { title: 'Úrokovanie', level: 's3', items: [
      { name: 'Jednoduché úrokovanie', tex: 'K_n = K_0\\left(1 + n\\cdot\\frac{p}{100}\\right)', note: '$K_0$ – istina, $p\\,\\%$ – ročná úroková miera, $n$ – počet rokov.' },
      { name: 'Úrok za m mesiacov', tex: 'u = K_0\\cdot\\frac{p}{100}\\cdot\\frac{m}{12}' },
      { name: 'Zložené úrokovanie', tex: 'K_n = K_0\\left(1 + \\frac{p}{100}\\right)^n' },
      { name: 'Pripisovanie m-krát ročne', tex: 'K_n = K_0\\left(1 + \\frac{p}{100m}\\right)^{mn}' },
      { name: 'Daň z úrokov', tex: 'p\\,\\% \\ \\to\\ 0{,}81\\cdot p\\,\\%', note: 'Pri dani 19 % sa pripisuje len 81 % úroku.' }
    ] },
    { title: 'Sporenie a úver', level: 's3', items: [
      { name: 'Pravidelné vklady na konci roka', tex: 'S_n = a\\cdot\\frac{q^n - 1}{q - 1}, \\quad q = 1 + \\frac{p}{100}', note: 'Súčet geometrickej postupnosti; pri vkladoch na začiatku roka navyše krát $q$.' },
      { name: 'Anuitná splátka', tex: 'a = D\\cdot\\frac{q^n(q - 1)}{q^n - 1}, \\quad q = 1 + \\frac{p}{1200}', note: '$D$ – výška úveru, $n$ – počet mesačných splátok; spolu zaplatíme $n\\cdot a$.' }
    ] }
  ],

  /* ---------- Slovné úlohy ---------- */
  slovne: [
    { title: 'Z textu do príkladu', level: 'r1', items: [
      { name: '„o n viac“, „o n menej“', tex: 'x + n \\quad\\quad x - n' },
      { name: '„o koľko viac?“', tex: 'a - b', note: 'Rozdiel väčšieho a menšieho čísla.' },
      { name: '„n-krát viac“, „n-krát menej“', tex: 'n\\cdot x \\quad\\quad x : n', note: 'Od 2. ročníka.' },
      { name: '„koľkokrát viac?“', tex: 'a : b' },
      { name: 'Úloha na viac krokov', tex: '20 - 3\\cdot 4 = 20 - 12 = 8', note: 'Najprv medzivýsledok, potom ďalší krok; pozor na poradie operácií.' }
    ] },
    { title: 'Úlohy riešené rovnicou', level: 'r8', items: [
      { name: 'Postup', tex: '\\text{neznáma} \\to \\text{rovnica} \\to \\text{riešenie} \\to \\text{skúška} \\to \\text{odpoveď}', note: 'Skúšku robíme podľa textu úlohy, nie dosadením do vlastnej rovnice.' },
      { name: 'Po sebe idúce čísla', tex: 'x,\\ x + 1,\\ x + 2', note: 'Po sebe idúce párne (nepárne) čísla: $x,\\ x + 2,\\ x + 4$.' },
      { name: 'Obvod obdĺžnika', tex: 'o = 2a + 2b' },
      { name: 'Vek', tex: 'x \\ \\to\\ x + n', note: 'O $n$ rokov sú všetci o $n$ rokov starší, rozdiel vekov sa nemení.' }
    ] },
    { title: 'Pohyb', level: 'r9', items: [
      { name: 'Dráha, rýchlosť, čas', tex: 's = v\\cdot t \\quad\\quad v = \\frac{s}{t} \\quad\\quad t = \\frac{s}{v}' },
      { name: 'Pohyb oproti sebe', tex: 't = \\frac{s}{v_1 + v_2}', note: 'Vzdialenosť sa každú hodinu zmenší o súčet rýchlostí.' },
      { name: 'Dobiehanie', tex: 't = \\frac{s}{v_2 - v_1}', note: '$s$ je náskok pomalšieho, $v_2 > v_1$.' },
      { name: 'Po prúde a proti prúdu', tex: 'v + w \\quad\\quad v - w', note: '$v$ – rýchlosť lode v stojatej vode, $w$ – rýchlosť prúdu (1. ročník SŠ).' }
    ] },
    { title: 'Spoločná práca a zmesi', level: 'r9', items: [
      { name: 'Výkon za hodinu', tex: '\\frac{1}{a}', note: 'Kto urobí celú prácu za $a$ hodín, urobí za hodinu $\\frac{1}{a}$ práce.' },
      { name: 'Spoločná práca', tex: '\\frac{t}{a} + \\frac{t}{b} = 1', note: '$t$ – čas, za ktorý prácu urobia spolu.' },
      { name: 'Zmiešavanie', tex: 'p_1 m_1 + p_2 m_2 = p\\,(m_1 + m_2)', note: 'Množstvo čistej látky sa zachová; $p$ – koncentrácia, $m$ – množstvo (1. ročník SŠ).' }
    ] },
    { title: 'Percentá a pomer v úlohách', level: 'r7', items: [
      { name: 'Cena po zľave', tex: '\\text{nová cena} = \\left(1 - \\frac{p}{100}\\right)\\cdot\\text{pôvodná cena}' },
      { name: 'Cena po zdražení', tex: '\\text{nová cena} = \\left(1 + \\frac{p}{100}\\right)\\cdot\\text{pôvodná cena}' },
      { name: 'Rozdelenie v pomere', tex: 'a : b \\ \\Rightarrow\\ \\frac{a}{a + b}\\cdot\\text{celok} \\ \\text{a}\\ \\frac{b}{a + b}\\cdot\\text{celok}' }
    ] }
  ],

  /* ---------- Meranie a jednotky ---------- */
  jednotky: [
    { title: 'Dĺžka', level: 'r2', items: [
      { name: 'Meter a centimeter', tex: '1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}' },
      { name: 'Decimeter', tex: '1\\,\\text{dm} = 10\\,\\text{cm}' },
      { name: 'Centimeter a milimeter', tex: '1\\,\\text{cm} = 10\\,\\text{mm}', note: 'Od 3. ročníka.' },
      { name: 'Kilometer', tex: '1\\,\\text{km} = 1\\,000\\,\\text{m}', note: 'Od 3. ročníka.' }
    ] },
    { title: 'Peniaze a čas', level: 'r2', items: [
      { name: 'Euro', tex: '1\\,\\text{euro} = 100\\,\\text{centov}' },
      { name: 'Hodina a minúta', tex: '1\\,\\text{h} = 60\\,\\text{min} \\quad\\quad 1\\,\\text{min} = 60\\,\\text{s}' },
      { name: 'Hodina v sekundách', tex: '1\\,\\text{h} = 3\\,600\\,\\text{s}' },
      { name: 'Deň', tex: '1\\,\\text{deň} = 24\\,\\text{h}', note: 'Pri čase neplatí prevod „po desiatkach“, ale po 60 (resp. 24).' }
    ] },
    { title: 'Hmotnosť a objem', level: 'r3', items: [
      { name: 'Kilogram a gram', tex: '1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}', note: 'Dekagram od 4. ročníka.' },
      { name: 'Tona', tex: '1\\,\\text{t} = 1\\,000\\,\\text{kg}' },
      { name: 'Liter', tex: '1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}', note: '$1\\,\\text{dl} = 100\\,\\text{ml}$.' },
      { name: 'Hektoliter', tex: '1\\,\\text{hl} = 100\\,\\text{l}', note: 'Od 4. ročníka.' }
    ] },
    { title: 'Premieňanie jednotiek', level: 'r5', items: [
      { name: 'Na menšiu jednotku násobíme', tex: '3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}' },
      { name: 'Na väčšiu jednotku delíme', tex: '4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}' },
      { name: 'Zložený údaj', tex: '2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}' }
    ] },
    { title: 'Obsah a objem v kubických jednotkách', level: 'r6', items: [
      { name: 'Jednotky obsahu', tex: '1\\,\\text{cm}^2 = 100\\,\\text{mm}^2 \\quad 1\\,\\text{dm}^2 = 100\\,\\text{cm}^2', note: 'Pri obsahu je prevodový krok 100.' },
      { name: 'Štvorcový meter', tex: '1\\,\\text{m}^2 = 100\\,\\text{dm}^2 = 10\\,000\\,\\text{cm}^2' },
      { name: 'Liter a decimeter kubický', tex: '1\\,\\text{dm}^3 = 1\\,\\text{l} \\quad\\quad 1\\,\\text{cm}^3 = 1\\,\\text{ml}', note: 'Od 8. ročníka.' },
      { name: 'Meter kubický', tex: '1\\,\\text{m}^3 = 1\\,000\\,\\text{dm}^3 = 1\\,000\\,\\text{l}', note: 'Pri objeme je prevodový krok 1 000.' }
    ] }
  ],

  /* ---------- Výrazy, mocniny, mnohočleny ---------- */
  vyrazy: [
    { title: 'Mocniny a odmocniny', level: 'r8', items: [
      { name: 'Mocnina', tex: 'a^n = \\underbrace{a\\cdot a\\cdot\\ldots\\cdot a}_{n}', note: '$a$ – základ, $n$ – exponent (mocniteľ).' },
      { name: 'Pozor na znamienko', tex: '(-3)^2 = 9 \\quad\\quad -3^2 = -9' },
      { name: 'Druhá odmocnina', tex: '\\sqrt{a} = b \\iff b^2 = a,\\ b\\ge 0', note: 'Pre $a\\ge 0$, napr. $\\sqrt{0{,}09} = 0{,}3$.' },
      { name: 'Zápis veľkých čísel', tex: 'a\\cdot 10^n, \\quad 1\\le a < 10', note: 'Napr. $45\\,000 = 4{,}5\\cdot 10^4$.' }
    ] },
    { title: 'Úpravy výrazov', level: 'r8', items: [
      { name: 'Roznásobenie', tex: 'a(b + c) = ab + ac \\quad\\quad -(x - 5) = -x + 5' },
      { name: 'Súčin dvojčlenov', tex: '(a + b)(c + d) = ac + ad + bc + bd' },
      { name: 'Druhá mocnina súčtu', tex: '(a + b)^2 = a^2 + 2ab + b^2' },
      { name: 'Druhá mocnina rozdielu', tex: '(a - b)^2 = a^2 - 2ab + b^2' },
      { name: 'Rozdiel štvorcov', tex: 'a^2 - b^2 = (a + b)(a - b)' },
      { name: 'Vyňatie pred zátvorku', tex: '12a^2 - 8a = 4a(3a - 2)', note: 'Rozklad na súčin v 9. ročníku.' }
    ] },
    { title: 'Pravidlá pre mocniny', level: 's1', items: [
      { name: 'Súčin a podiel mocnín', tex: 'a^m\\cdot a^n = a^{m + n} \\quad\\quad \\frac{a^m}{a^n} = a^{m - n}' },
      { name: 'Mocnina mocniny', tex: '(a^m)^n = a^{m\\cdot n}' },
      { name: 'Mocnina súčinu a podielu', tex: '(ab)^n = a^n b^n \\quad\\quad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}' },
      { name: 'Nultý a záporný exponent', tex: 'a^0 = 1 \\quad\\quad a^{-n} = \\frac{1}{a^n}', note: 'Pre $a\\neq 0$.' },
      { name: 'Odmocnina ako mocnina', tex: '\\sqrt{a} = a^{\\frac{1}{2}} \\quad\\quad \\sqrt[n]{a^m} = a^{\\frac{m}{n}}' },
      { name: 'Súčin a podiel odmocnín', tex: '\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b} \\quad\\quad \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}', note: 'Pre $a\\ge 0$, $b > 0$.' }
    ] },
    { title: 'Vzorce a rozklad mnohočlenov', level: 's1', items: [
      { name: 'Tretia mocnina dvojčlena', tex: '(a\\pm b)^3 = a^3 \\pm 3a^2b + 3ab^2 \\pm b^3' },
      { name: 'Súčet tretích mocnín', tex: 'a^3 + b^3 = (a + b)(a^2 - ab + b^2)' },
      { name: 'Rozdiel tretích mocnín', tex: 'a^3 - b^3 = (a - b)(a^2 + ab + b^2)' },
      { name: 'Rozklad kvadratického trojčlena', tex: 'x^2 + px + q = (x - x_1)(x - x_2)', note: '$x_1 + x_2 = -p$, $x_1 x_2 = q$.' },
      { name: 'Zoskupovanie', tex: 'x^3 + 2x^2 - 9x - 18 = (x + 2)(x - 3)(x + 3)' },
      { name: 'Veta o koreni (o zvyšku)', tex: 'p(c) = 0 \\ \\Rightarrow\\ p(x) = (x - c)\\cdot q(x)', note: 'Zvyšok po delení $p(x)$ dvojčlenom $(x - c)$ je $p(c)$; hodnotu rýchlo dá Hornerova schéma.' }
    ] },
    { title: 'Lomené výrazy', level: 's2', items: [
      { name: 'Podmienky', tex: '\\frac{x + 1}{x^2 - 4}: \\quad x\\neq 2,\\ x\\neq -2', note: 'Menovateľ nesmie byť nulový; podmienky určujeme pred úpravami.' },
      { name: 'Krátenie po rozklade', tex: '\\frac{x^2 - 9}{x^2 + 3x} = \\frac{(x - 3)(x + 3)}{x(x + 3)} = \\frac{x - 3}{x}' },
      { name: 'Spoločný menovateľ', tex: '\\frac{A}{B} + \\frac{C}{D} = \\frac{A\\cdot D + C\\cdot B}{B\\cdot D}', note: 'Výhodne rozširujeme na nsn menovateľov; pri delení pribudne podmienka nenulového deliteľa.' }
    ] }
  ],

  /* ---------- Rovnice, nerovnice, sústavy ---------- */
  rovnice: [
    { title: 'Lineárne rovnice', level: 'r8', items: [
      { name: 'Ekvivalentné úpravy', tex: 'A = B \\iff A + c = B + c \\iff k\\cdot A = k\\cdot B \\ (k\\neq 0)', note: 'K obom stranám pripočítame to isté, obe strany vynásobíme tým istým nenulovým číslom.' },
      { name: 'Riešenie ax + b = c', tex: 'x = \\frac{c - b}{a}, \\quad a\\neq 0' },
      { name: 'Rovnica so zlomkami', tex: '\\frac{x}{2} + \\frac{x}{3} = 10 \\ \\big|\\cdot 6 \\ \\Rightarrow\\ 3x + 2x = 60', note: 'Násobíme spoločným násobkom menovateľov.' }
    ] },
    { title: 'Sústavy lineárnych rovníc', level: 'r9', items: [
      { name: 'Sústava dvoch rovníc', tex: '\\begin{aligned} a_1x + b_1y &= c_1\\\\ a_2x + b_2y &= c_2 \\end{aligned}', note: 'Dosadzovacia metóda alebo sčítacia metóda; riešenie je dvojica $[x; y]$.' },
      { name: 'Počet riešení', tex: 'a_1b_2 - a_2b_1 \\neq 0 \\ \\Rightarrow\\ \\text{práve jedno riešenie}', note: 'Ak je výraz 0, sústava má nekonečne veľa riešení alebo žiadne (2. ročník SŠ).' }
    ] },
    { title: 'Nerovnice a menovateľ', level: 's1', items: [
      { name: 'Násobenie záporným číslom', tex: 'a < b,\\ c < 0 \\ \\Rightarrow\\ ac > bc', note: 'Pri násobení alebo delení záporným číslom sa znak nerovnosti otočí.' },
      { name: 'Súčinový tvar', tex: '(x + 2)(x - 3)\\le 0 \\iff x\\in\\langle -2; 3\\rangle', note: 'Metóda nulových bodov: určíme znamienko v každom intervale.' },
      { name: 'Podielový tvar', tex: '\\frac{x + 2}{x - 3}\\le 0 \\iff x\\in\\langle -2; 3)', note: 'Nulový bod menovateľa do riešenia nikdy nepatrí.' },
      { name: 'Neznáma v menovateli', tex: '\\frac{3}{x - 2} = \\frac{1}{x + 1}: \\quad x\\neq 2,\\ x\\neq -1', note: 'Najprv podmienky, na konci kontrola koreňov.' }
    ] },
    { title: 'Kvadratické rovnice a nerovnice', level: 's2', items: [
      { name: 'Diskriminant', tex: 'ax^2 + bx + c = 0, \\quad D = b^2 - 4ac' },
      { name: 'Koreňový vzorec', tex: 'x_{1,2} = \\frac{-b\\pm\\sqrt{D}}{2a}', note: '$D > 0$ – dva korene, $D = 0$ – jeden dvojnásobný, $D < 0$ – žiadny reálny koreň.' },
      { name: 'Vietove vzťahy', tex: 'x_1 + x_2 = -\\frac{b}{a} \\quad\\quad x_1\\cdot x_2 = \\frac{c}{a}', note: 'Pre $x^2 + px + q = 0$: $x_1 + x_2 = -p$, $x_1x_2 = q$.' },
      { name: 'Neúplné rovnice', tex: 'ax^2 + bx = 0 \\Rightarrow x(ax + b) = 0 \\quad\\quad x^2 = k \\Rightarrow x = \\pm\\sqrt{k}' },
      { name: 'Kvadratická nerovnica (a > 0)', tex: 'a(x - x_1)(x - x_2)\\le 0 \\iff x\\in\\langle x_1; x_2\\rangle', note: 'Pre $\\ge 0$ je riešením $(-\\infty; x_1\\rangle\\cup\\langle x_2; \\infty)$.' }
    ] },
    { title: 'Absolútna hodnota', level: 's2', items: [
      { name: 'Rovnica', tex: '|x - a| = b \\iff x = a\\pm b \\quad (b\\ge 0)' },
      { name: 'Nerovnica „menšie“', tex: '|x - a| < b \\iff a - b < x < a + b' },
      { name: 'Nerovnica „väčšie“', tex: '|x - a| > b \\iff x < a - b \\ \\lor\\ x > a + b' },
      { name: 'Metóda nulových bodov', tex: '|x - 1| + |x + 2| = \\dots', note: 'Číselnú os rozdelíme nulovými bodmi a v každom intervale odstránime absolútne hodnoty podľa znamienka.' }
    ] },
    { title: 'Exponenciálne a logaritmické rovnice', level: 's4', items: [
      { name: 'Rovnaký základ', tex: 'a^{f(x)} = a^{g(x)} \\iff f(x) = g(x)' },
      { name: 'Logaritmovanie', tex: 'a^x = b \\ \\Rightarrow\\ x = \\log_a b = \\frac{\\ln b}{\\ln a}' },
      { name: 'Substitúcia', tex: '4^x - 6\\cdot 2^x + 8 = 0, \\quad t = 2^x', note: 'Vznikne kvadratická rovnica $t^2 - 6t + 8 = 0$, pričom $t > 0$.' },
      { name: 'Logaritmická rovnica', tex: '\\log_a f(x) = c \\iff f(x) = a^c', note: 'Podmienka $f(x) > 0$; pozor: $\\log x^2 = 2\\log|x|$.' }
    ] },
    { title: 'Rovnice s parametrom', level: 's4', items: [
      { name: 'Lineárna rovnica s parametrom', tex: 'ax = b: \\ a\\neq 0 \\Rightarrow x = \\frac{b}{a}', note: 'Pre $a = 0$: pri $b = 0$ každé $x$, pri $b\\neq 0$ žiadne riešenie.' },
      { name: 'Kvadratická rovnica s parametrom', tex: 'D > 0,\\ D = 0,\\ D < 0', note: 'Počet koreňov rozhoduje znamienko diskriminantu; pri koeficiente $a = 0$ je rovnica lineárna.' }
    ] }
  ],

  /* ---------- Funkcie ---------- */
  funkcie: [
    { title: 'Súradnice a lineárna funkcia', level: 'r9', items: [
      { name: 'Stred úsečky', tex: 'S\\left[\\frac{x_A + x_B}{2};\\ \\frac{y_A + y_B}{2}\\right]' },
      { name: 'Lineárna funkcia', tex: 'y = kx + q', note: '$k > 0$ rastúca, $k < 0$ klesajúca, $k = 0$ konštantná; priesečník s osou $y$ je $[0; q]$.' },
      { name: 'Priama úmernosť', tex: 'y = kx' },
      { name: 'Nepriama úmernosť', tex: 'y = \\frac{k}{x}, \\quad D(f) = H(f) = \\mathbb{R}\\setminus\\{0\\}', note: 'Grafom je hyperbola s asymptotami v osiach.' },
      { name: 'Smernica', tex: 'k = \\frac{y_2 - y_1}{x_2 - x_1}', note: 'Priamka cez body $[x_1; y_1]$, $[x_2; y_2]$; rovnobežné priamky majú rovnakú smernicu (2. ročník SŠ).' }
    ] },
    { title: 'Lineárna lomená a kvadratická funkcia', level: 's2', items: [
      { name: 'Lineárna lomená funkcia', tex: 'f(x) = \\frac{k}{x - m} + n', note: 'Stred $[m; n]$, asymptoty $x = m$ a $y = n$; $D(f) = \\mathbb{R}\\setminus\\{m\\}$, $H(f) = \\mathbb{R}\\setminus\\{n\\}$.' },
      { name: 'Úprava na stredový tvar', tex: '\\frac{2x + 1}{x - 1} = 2 + \\frac{3}{x - 1}' },
      { name: 'Kvadratická funkcia', tex: 'f(x) = ax^2 + bx + c, \\quad a\\neq 0' },
      { name: 'Vrchol paraboly', tex: 'V[m; n], \\quad m = -\\frac{b}{2a},\\ n = f(m)' },
      { name: 'Vrcholový tvar', tex: 'f(x) = a(x - m)^2 + n', note: 'Doplnenie na štvorec: $x^2 - 6x + 5 = (x - 3)^2 - 4$.' },
      { name: 'Obor hodnôt', tex: 'a > 0:\\ H(f) = \\langle n; \\infty) \\quad\\quad a < 0:\\ H(f) = (-\\infty; n\\rangle' }
    ] },
    { title: 'Transformácie grafov', level: 's2', items: [
      { name: 'Posun v smere osi y', tex: 'g(x) = f(x) + n', note: 'Pre $n > 0$ nahor.' },
      { name: 'Posun v smere osi x', tex: 'g(x) = f(x - m)', note: 'Pre $m > 0$ doprava.' },
      { name: 'Súmernosť podľa osí', tex: 'g(x) = -f(x) \\quad\\quad g(x) = f(-x)', note: 'Prvá podľa osi $x$, druhá podľa osi $y$.' },
      { name: 'Natiahnutie a absolútna hodnota', tex: 'g(x) = a\\cdot f(x) \\quad\\quad g(x) = |f(x)|' },
      { name: 'Všetko naraz', tex: 'g(x) = a\\cdot f(x - m) + n' }
    ] },
    { title: 'Mocninové a exponenciálne funkcie', level: 's2', items: [
      { name: 'Mocnina so záporným exponentom', tex: 'x^{-n} = \\frac{1}{x^n}, \\quad D = \\mathbb{R}\\setminus\\{0\\}' },
      { name: 'Rovnica x^n = a', tex: 'n \\text{ nepárne: } x = \\sqrt[n]{a} \\quad\\quad n \\text{ párne},\\ a > 0: x = \\pm\\sqrt[n]{a}' },
      { name: 'Exponenciálna funkcia', tex: 'f(x) = a^x, \\quad D(f) = \\mathbb{R},\\ H(f) = (0; \\infty)', note: '$a > 0$, $a\\neq 1$; pre $a > 1$ rastúca, pre $0 < a < 1$ klesajúca.' },
      { name: 'Prostá funkcia', tex: 'a^u = a^v \\iff u = v' }
    ] },
    { title: 'Logaritmus', level: 's2', items: [
      { name: 'Definícia', tex: '\\log_a x = y \\iff a^y = x', note: '$a > 0$, $a\\neq 1$, $x > 0$; $\\log x = \\log_{10} x$, $\\ln x = \\log_{\\mathrm{e}} x$.' },
      { name: 'Základné hodnoty', tex: '\\log_a 1 = 0 \\quad \\log_a a = 1 \\quad a^{\\log_a x} = x' },
      { name: 'Súčin a podiel', tex: '\\log_a(xy) = \\log_a x + \\log_a y \\quad\\quad \\log_a\\frac{x}{y} = \\log_a x - \\log_a y' },
      { name: 'Mocnina', tex: '\\log_a x^r = r\\log_a x' },
      { name: 'Zmena základu', tex: '\\log_a x = \\frac{\\log_b x}{\\log_b a}', note: 'Dôsledok: $\\log_a b\\cdot\\log_b a = 1$.' },
      { name: 'Logaritmická funkcia', tex: 'f(x) = \\log_a x, \\quad D(f) = (0; \\infty),\\ H(f) = \\mathbb{R}', note: 'Je inverzná k funkcii $a^x$.' }
    ] },
    { title: 'Zložená a inverzná funkcia', level: 's4', items: [
      { name: 'Zložená funkcia', tex: '(f\\circ g)(x) = f(g(x))', note: 'Najprv vnútorná $g$, potom vonkajšia $f$; vo všeobecnosti $f\\circ g\\neq g\\circ f$.' },
      { name: 'Inverzná funkcia', tex: 'f^{-1}(y) = x \\iff f(x) = y', note: 'Existuje len k prostej funkcii.' },
      { name: 'Obory inverznej funkcie', tex: 'D(f^{-1}) = H(f) \\quad\\quad H(f^{-1}) = D(f)', note: 'Grafy $f$ a $f^{-1}$ sú súmerné podľa priamky $y = x$.' },
      { name: 'Exponenciála a logaritmus', tex: 'a^{\\log_a x} = x \\quad\\quad \\log_a a^x = x' }
    ] }
  ],

  /* ---------- Geometria v rovine ---------- */
  planimetria: [
    { title: 'Obvod', level: 'r3', items: [
      { name: 'Obvod trojuholníka', tex: 'o = a + b + c', note: 'Rovnostranný: $o = 3\\cdot a$.' },
      { name: 'Obvod štvorca', tex: 'o = 4\\cdot a' },
      { name: 'Obvod obdĺžnika', tex: 'o = 2\\cdot a + 2\\cdot b = 2\\cdot(a + b)' },
      { name: 'Priemer a polomer', tex: 'd = 2\\cdot r', note: 'Od 5. ročníka.' }
    ] },
    { title: 'Uhly a trojuholník', level: 'r6', items: [
      { name: 'Stupne a minúty', tex: "1^\\circ = 60'" },
      { name: 'Druhy uhlov', tex: '\\text{ostrý} < 90^\\circ < \\text{tupý} < 180^\\circ', note: 'Pravý uhol má $90^\\circ$, priamy $180^\\circ$.' },
      { name: 'Vedľajšie a vrcholové uhly', tex: '\\alpha + \\beta = 180^\\circ \\quad\\quad \\alpha = \\alpha\'', note: 'Vedľajšie uhly majú súčet $180^\\circ$, vrcholové sú zhodné.' },
      { name: 'Súčet uhlov v trojuholníku', tex: '\\alpha + \\beta + \\gamma = 180^\\circ' },
      { name: 'Trojuholníková nerovnosť', tex: 'a + b > c,\\quad a + c > b,\\quad b + c > a' },
      { name: 'Súčet uhlov n-uholníka', tex: '(n - 2)\\cdot 180^\\circ', note: '1. ročník SŠ.' }
    ] },
    { title: 'Obsah štvoruholníkov a trojuholníka', level: 'r6', items: [
      { name: 'Obsah obdĺžnika', tex: 'S = a\\cdot b', note: '$a$, $b$ sú dĺžky strán.' },
      { name: 'Obsah štvorca', tex: 'S = a\\cdot a = a^2' },
      { name: 'Obsah trojuholníka', tex: 'S = \\frac{a\\cdot v_a}{2}', note: 'Strana krát výška na ňu, delené dvomi (7. ročník).' },
      { name: 'Obsah rovnobežníka', tex: 'S = a\\cdot v_a', note: '7. ročník.' },
      { name: 'Obsah lichobežníka', tex: 'S = \\frac{(a + c)\\cdot v}{2}', note: '$a$, $c$ – základne, $v$ – výška (7. ročník).' },
      { name: 'Obsah kosoštvorca a deltoidu', tex: 'S = \\frac{u_1\\cdot u_2}{2}', note: '$u_1$, $u_2$ – uhlopriečky (1. ročník SŠ).' },
      { name: 'Herónov vzorec', tex: 'S = \\sqrt{s(s - a)(s - b)(s - c)}, \\quad s = \\frac{a + b + c}{2}', note: '1. ročník SŠ.' }
    ] },
    { title: 'Kružnica a kruh', level: 'r7', items: [
      { name: 'Ludolfovo číslo', tex: '\\pi = \\frac{o}{d} \\doteq 3{,}14' },
      { name: 'Obvod kruhu (dĺžka kružnice)', tex: 'o = 2\\pi r = \\pi d' },
      { name: 'Obsah kruhu', tex: 'S = \\pi r^2' },
      { name: 'Kružnice s dotykom', tex: 's = r_1 + r_2 \\quad\\quad s = r_1 - r_2', note: 'Vzdialenosť stredov pri vonkajšom a vnútornom dotyku.' },
      { name: 'Kruhový výsek', tex: 'S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}', note: '8. ročník.' },
      { name: 'Dĺžka oblúka', tex: 'l = 2\\pi r\\cdot\\frac{\\alpha}{360^\\circ}', note: '1. ročník SŠ.' },
      { name: 'Medzikružie', tex: 'S = \\pi(R^2 - r^2)', note: '8. ročník.' }
    ] },
    { title: 'Pytagorova veta', level: 'r8', items: [
      { name: 'Pytagorova veta', tex: 'a^2 + b^2 = c^2', note: '$c$ – prepona, $a$, $b$ – odvesny pravouhlého trojuholníka.' },
      { name: 'Odvesna', tex: 'a = \\sqrt{c^2 - b^2}' },
      { name: 'Uhlopriečka obdĺžnika a štvorca', tex: 'u = \\sqrt{a^2 + b^2} \\quad\\quad u = a\\sqrt{2}' },
      { name: 'Výška rovnostranného trojuholníka', tex: 'v = \\frac{a\\sqrt{3}}{2} \\quad\\quad S = \\frac{\\sqrt{3}}{4}a^2' },
      { name: 'Vzdialenosť tetivy od stredu', tex: 'v = \\sqrt{r^2 - \\left(\\frac{z}{2}\\right)^2}', note: '$z$ – dĺžka tetivy (9. ročník).' },
      { name: 'Vzdialenosť bodov v rovine', tex: '|AB| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}', note: '9. ročník.' }
    ] },
    { title: 'Podobnosť a Euklidove vety', level: 'r9', items: [
      { name: 'Pomer podobnosti', tex: "\\frac{a'}{a} = \\frac{b'}{b} = \\frac{c'}{c} = k", note: '$k > 1$ zväčšenie, $k < 1$ zmenšenie.' },
      { name: 'Obsahy podobných útvarov', tex: "S' = k^2\\cdot S", note: 'Obsahy sa menia s druhou mocninou pomeru podobnosti.' },
      { name: 'Vety o podobnosti', tex: '\\text{sss},\\ \\text{sus},\\ \\text{uu}', note: 'Trojuholníky sú podobné, ak súhlasia pomery strán alebo dva uhly.' },
      { name: 'Euklidova veta o výške', tex: 'v^2 = c_a\\cdot c_b', note: '$c_a$, $c_b$ – úseky prepony (2. ročník SŠ).' },
      { name: 'Euklidova veta o odvesne', tex: 'a^2 = c\\cdot c_a \\quad\\quad b^2 = c\\cdot c_b', note: '2. ročník SŠ.' },
      { name: 'Výška na preponu', tex: 'v = \\frac{ab}{c}' }
    ] },
    { title: 'Zhodnosť a uhly v kružnici', level: 's1', items: [
      { name: 'Vety o zhodnosti', tex: '\\text{sss},\\ \\text{sus},\\ \\text{usu},\\ \\text{Ssu}', note: '$\\triangle ABC\\cong\\triangle KLM$ – poradie vrcholov určuje, ktoré si zodpovedajú.' },
      { name: 'Stredový a obvodový uhol', tex: '\\text{stredový uhol} = 2\\cdot\\text{obvodový uhol}', note: 'Nad tým istým oblúkom; obvodové uhly nad rovnakým oblúkom sú zhodné (2. ročník SŠ).' },
      { name: 'Talesova veta', tex: '\\text{obvodový uhol nad priemerom} = 90^\\circ' },
      { name: 'Tetivový štvoruholník', tex: '\\alpha + \\gamma = \\beta + \\delta = 180^\\circ' },
      { name: 'Dotyčnicová úsečka', tex: 't = \\sqrt{d^2 - r^2}', note: '$d$ – vzdialenosť bodu od stredu kružnice.' }
    ] }
  ],

  /* ---------- Telesá ---------- */
  stereometria: [
    { title: 'Kocka, kváder, hranol', level: 'r8', items: [
      { name: 'Objem kocky a kvádra', tex: 'V = a^3 \\quad\\quad V = a\\cdot b\\cdot c' },
      { name: 'Povrch kocky a kvádra', tex: 'S = 6a^2 \\quad\\quad S = 2(ab + bc + ac)' },
      { name: 'Objem hranola', tex: 'V = S_p\\cdot v', note: '$S_p$ – obsah podstavy, $v$ – výška.' },
      { name: 'Povrch hranola', tex: 'S = 2\\cdot S_p + S_{pl}, \\quad S_{pl} = o_p\\cdot v', note: '$o_p$ – obvod podstavy.' },
      { name: 'Telesová uhlopriečka kvádra', tex: 'u = \\sqrt{a^2 + b^2 + c^2}', note: '9. ročník.' }
    ] },
    { title: 'Valec, ihlan, kužeľ, guľa', level: 'r9', items: [
      { name: 'Objem valca', tex: 'V = \\pi r^2 v' },
      { name: 'Povrch valca', tex: 'S = 2\\pi r^2 + 2\\pi r v = 2\\pi r(r + v)' },
      { name: 'Objem ihlana', tex: 'V = \\frac{1}{3}S_p\\cdot v' },
      { name: 'Povrch pravidelného štvorbokého ihlana', tex: 'S = a^2 + 4\\cdot\\frac{a\\cdot v_s}{2}', note: '$v_s$ – výška bočnej steny.' },
      { name: 'Objem kužeľa', tex: 'V = \\frac{1}{3}\\pi r^2 v' },
      { name: 'Povrch kužeľa', tex: 'S = \\pi r^2 + \\pi r s = \\pi r(r + s)', note: '$s$ – strana kužeľa, $s^2 = r^2 + v^2$.' },
      { name: 'Objem gule', tex: 'V = \\frac{4}{3}\\pi r^3' },
      { name: 'Povrch gule', tex: 'S = 4\\pi r^2' }
    ] },
    { title: 'Výpočty v ihlane', level: 's2', items: [
      { name: 'Výška bočnej steny', tex: 'v_s^2 = v^2 + \\left(\\frac{a}{2}\\right)^2', note: 'Pravidelný štvorboký ihlan s podstavnou hranou $a$ a výškou $v$.' },
      { name: 'Bočná hrana', tex: 'h^2 = v^2 + \\left(\\frac{a\\sqrt{2}}{2}\\right)^2 = v_s^2 + \\left(\\frac{a}{2}\\right)^2' }
    ] },
    { title: 'Zložitejšie telesá', level: 's4', items: [
      { name: 'Rez gule rovinou', tex: '\\rho = \\sqrt{r^2 - d^2}', note: '$d$ – vzdialenosť roviny od stredu, $\\rho$ – polomer rezu.' },
      { name: 'Objem zrezaného kužeľa', tex: 'V = \\frac{\\pi v}{3}(R^2 + Rr + r^2)' },
      { name: 'Plášť zrezaného kužeľa', tex: 'S_{pl} = \\pi s(R + r), \\quad s^2 = v^2 + (R - r)^2' },
      { name: 'Objem zrezaného ihlana', tex: 'V = \\frac{v}{3}\\left(S_1 + \\sqrt{S_1S_2} + S_2\\right)' }
    ] },
    { title: 'Poloha, uhly a vzdialenosti v priestore', level: 's4', items: [
      { name: 'Vzdialenosť bodov', tex: '|AB| = \\sqrt{(b_1 - a_1)^2 + (b_2 - a_2)^2 + (b_3 - a_3)^2}' },
      { name: 'Priamka', tex: 'X = A + t\\vec{u}, \\quad t\\in\\mathbb{R}' },
      { name: 'Rovina', tex: 'ax + by + cz + d = 0, \\quad \\vec{n} = (a; b; c)' },
      { name: 'Priamka rovnobežná s rovinou', tex: '\\vec{u}\\cdot\\vec{n} = 0' },
      { name: 'Vzdialenosť bodu od roviny', tex: 'd = \\frac{|ap_1 + bp_2 + cp_3 + d|}{\\sqrt{a^2 + b^2 + c^2}}' },
      { name: 'Odchýlka dvoch priamok', tex: '\\cos\\varphi = \\frac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}, \\quad \\varphi\\in\\langle 0^\\circ; 90^\\circ\\rangle' },
      { name: 'Odchýlka priamky a roviny', tex: '\\sin\\varphi = \\frac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}' },
      { name: 'Vektorový súčin', tex: '\\vec{u}\\times\\vec{v} = (u_2v_3 - u_3v_2;\\ u_3v_1 - u_1v_3;\\ u_1v_2 - u_2v_1)', note: 'Je kolmý na oba vektory.' },
      { name: 'Vzdialenosť bodu od priamky', tex: 'd = \\frac{|\\overrightarrow{QP}\\times\\vec{u}|}{|\\vec{u}|}', note: 'Priamka $X = Q + t\\vec{u}$, bod $P$.' }
    ] }
  ],

  /* ---------- Goniometria ---------- */
  goniometria: [
    { title: 'Miera uhla', level: 's3', items: [
      { name: 'Stupne, minúty, sekundy', tex: "1^\\circ = 60' \\quad\\quad 1' = 60''" },
      { name: 'Oblúková miera', tex: '\\alpha = \\frac{l}{r} \\quad\\quad 180^\\circ = \\pi\\,\\mathrm{rad}' },
      { name: 'Prevod stupne ↔ radiány', tex: '\\alpha_{\\mathrm{rad}} = \\alpha^\\circ\\cdot\\frac{\\pi}{180} \\quad\\quad \\alpha^\\circ = \\alpha_{\\mathrm{rad}}\\cdot\\frac{180}{\\pi}' },
      { name: 'Dĺžka oblúka', tex: 'l = r\\cdot\\alpha', note: '$\\alpha$ v radiánoch.' }
    ] },
    { title: 'Pravouhlý trojuholník', level: 's3', items: [
      { name: 'Sínus a kosínus', tex: '\\sin\\alpha = \\frac{\\text{protiľahlá odvesna}}{\\text{prepona}} \\quad \\cos\\alpha = \\frac{\\text{priľahlá odvesna}}{\\text{prepona}}' },
      { name: 'Tangens a kotangens', tex: '\\mathrm{tg}\\,\\alpha = \\frac{\\text{protiľahlá}}{\\text{priľahlá}} \\quad \\mathrm{cotg}\\,\\alpha = \\frac{\\text{priľahlá}}{\\text{protiľahlá}}' },
      { name: 'Hodnoty pre 30°, 45°, 60°', tex: '\\sin 30^\\circ = \\tfrac{1}{2},\\ \\sin 45^\\circ = \\tfrac{\\sqrt{2}}{2},\\ \\sin 60^\\circ = \\tfrac{\\sqrt{3}}{2}', note: 'Kosínus má tie isté hodnoty v opačnom poradí: $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$.' }
    ] },
    { title: 'Funkcie ľubovoľného uhla', level: 's3', items: [
      { name: 'Tangens a kotangens', tex: '\\mathrm{tg}\\,x = \\frac{\\sin x}{\\cos x} \\quad\\quad \\mathrm{cotg}\\,x = \\frac{\\cos x}{\\sin x}' },
      { name: 'Periodicita', tex: '\\sin(x + 2k\\pi) = \\sin x \\quad\\quad \\mathrm{tg}(x + k\\pi) = \\mathrm{tg}\\,x', note: 'Sínus a kosínus majú periódu $2\\pi$, tangens a kotangens $\\pi$.' },
      { name: 'Párnosť a nepárnosť', tex: '\\cos(-x) = \\cos x \\quad\\quad \\sin(-x) = -\\sin x' },
      { name: 'Prevod do I. kvadrantu', tex: '\\sin(180^\\circ - \\alpha) = \\sin\\alpha \\quad\\quad \\cos(180^\\circ + \\alpha) = -\\cos\\alpha', note: 'Napr. $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$, $\\cos 240^\\circ = -\\cos 60^\\circ$.' },
      { name: 'Posunutý sínus', tex: 'f(x) = a\\cdot\\sin(bx + c) + d', note: 'Obor hodnôt $\\langle d - |a|; d + |a|\\rangle$, perióda $\\frac{2\\pi}{|b|}$.' }
    ] },
    { title: 'Goniometrické vzťahy', level: 's3', items: [
      { name: 'Základný vzťah', tex: '\\sin^2 x + \\cos^2 x = 1' },
      { name: 'Tangens krát kotangens', tex: '\\mathrm{tg}\\,x\\cdot\\mathrm{cotg}\\,x = 1 \\quad\\quad 1 + \\mathrm{tg}^2 x = \\frac{1}{\\cos^2 x}' },
      { name: 'Súčtové vzorce', tex: '\\sin(x \\pm y) = \\sin x\\cos y \\pm \\cos x\\sin y' },
      { name: 'Súčtové vzorce pre kosínus', tex: '\\cos(x \\pm y) = \\cos x\\cos y \\mp \\sin x\\sin y' },
      { name: 'Dvojnásobný uhol', tex: '\\sin 2x = 2\\sin x\\cos x' },
      { name: 'Kosínus dvojnásobného uhla', tex: '\\cos 2x = \\cos^2 x - \\sin^2 x = 1 - 2\\sin^2 x = 2\\cos^2 x - 1' }
    ] },
    { title: 'Goniometrické rovnice', level: 's3', items: [
      { name: 'sin x = a', tex: 'x = x_0 + 2k\\pi \\ \\lor\\ x = \\pi - x_0 + 2k\\pi', note: 'Riešenie existuje len pre $|a|\\le 1$; $k\\in\\mathbb{Z}$.' },
      { name: 'cos x = a', tex: 'x = \\pm x_0 + 2k\\pi' },
      { name: 'tg x = a', tex: 'x = x_0 + k\\pi' },
      { name: 'Substitúcia', tex: '2\\sin^2 x - \\sin x - 1 = 0, \\quad t = \\sin x', note: 'Riešime kvadratickú rovnicu a zahodíme $t$ mimo $\\langle -1; 1\\rangle$.' }
    ] },
    { title: 'Všeobecný trojuholník', level: 's3', items: [
      { name: 'Sínusová veta', tex: '\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma} = 2r', note: '$r$ – polomer kružnice opísanej.' },
      { name: 'Kosínusová veta', tex: 'c^2 = a^2 + b^2 - 2ab\\cos\\gamma', note: 'Pre $\\gamma = 90^\\circ$ prejde na Pytagorovu vetu.' },
      { name: 'Obsah trojuholníka', tex: 'S = \\frac{1}{2}ab\\sin\\gamma' }
    ] }
  ],

  /* ---------- Analytická geometria ---------- */
  analyticka: [
    { title: 'Body a vektory', level: 's3', items: [
      { name: 'Vzdialenosť bodov', tex: '|AB| = \\sqrt{(b_1 - a_1)^2 + (b_2 - a_2)^2}' },
      { name: 'Stred úsečky', tex: 'S\\left[\\frac{a_1 + b_1}{2};\\ \\frac{a_2 + b_2}{2}\\right]' },
      { name: 'Súradnice vektora', tex: '\\vec{u} = \\overrightarrow{AB} = B - A = (b_1 - a_1;\\ b_2 - a_2)' },
      { name: 'Veľkosť vektora', tex: '|\\vec{u}| = \\sqrt{u_1^2 + u_2^2}' },
      { name: 'Súčet a násobok', tex: '\\vec{u} + \\vec{v} = (u_1 + v_1;\\ u_2 + v_2) \\quad\\quad k\\vec{u} = (ku_1;\\ ku_2)' },
      { name: 'Skalárny súčin', tex: '\\vec{u}\\cdot\\vec{v} = u_1v_1 + u_2v_2 = |\\vec{u}|\\,|\\vec{v}|\\cos\\varphi' },
      { name: 'Uhol vektorov', tex: '\\cos\\varphi = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}|\\,|\\vec{v}|}, \\quad \\varphi\\in\\langle 0^\\circ; 180^\\circ\\rangle' },
      { name: 'Kolmosť vektorov', tex: '\\vec{u}\\perp\\vec{v} \\iff \\vec{u}\\cdot\\vec{v} = 0' }
    ] },
    { title: 'Priamka', level: 's3', items: [
      { name: 'Parametrické vyjadrenie', tex: 'X = A + t\\vec{u}: \\quad x = a_1 + tu_1,\\ y = a_2 + tu_2' },
      { name: 'Všeobecná rovnica', tex: 'ax + by + c = 0, \\quad \\vec{n} = (a; b)', note: 'Normálový vektor je kolmý na smerový: $\\vec{n} = (u_2; -u_1)$.' },
      { name: 'Smernicový tvar', tex: 'y = kx + q, \\quad k = \\frac{u_2}{u_1} = -\\frac{a}{b} = \\mathrm{tg}\\,\\varphi' },
      { name: 'Rovnobežné a kolmé priamky', tex: 'k_1 = k_2 \\quad\\quad k_1\\cdot k_2 = -1', note: 'Kolmosť aj cez normálové vektory: $\\vec{n}_p\\cdot\\vec{n}_q = 0$.' },
      { name: 'Vzdialenosť bodu od priamky', tex: 'd = \\frac{|am + bn + c|}{\\sqrt{a^2 + b^2}}', note: 'Bod $[m; n]$, priamka $ax + by + c = 0$.' }
    ] },
    { title: 'Kružnica', level: 's3', items: [
      { name: 'Stredová rovnica', tex: '(x - m)^2 + (y - n)^2 = r^2', note: 'Stred $S[m; n]$, polomer $r$.' },
      { name: 'Všeobecná rovnica', tex: 'x^2 + y^2 + ax + by + c = 0', note: 'Na stredový tvar ju upravíme doplnením na štvorec, napr. $x^2 - 6x = (x - 3)^2 - 9$.' },
      { name: 'Poloha priamky a kružnice', tex: 'd < r:\\ \\text{sečnica} \\quad d = r:\\ \\text{dotyčnica} \\quad d > r:\\ \\text{nesečnica}', note: '$d$ – vzdialenosť stredu od priamky (4. ročník SŠ).' },
      { name: 'Dotyčnica v bode kružnice', tex: 'x_0x + y_0y = r^2', note: 'Kružnica $x^2 + y^2 = r^2$, bod dotyku $[x_0; y_0]$ (4. ročník SŠ).' }
    ] }
  ],

  /* ---------- Postupnosti a rady ---------- */
  postupnosti: [
    { title: 'Aritmetická postupnosť', level: 's3', items: [
      { name: 'Rekurentný vzťah', tex: 'a_{n + 1} = a_n + d', note: '$d$ – diferencia.' },
      { name: 'n-tý člen', tex: 'a_n = a_1 + (n - 1)d \\quad\\quad a_r = a_s + (r - s)d' },
      { name: 'Súčet prvých n členov', tex: 's_n = \\frac{n}{2}(a_1 + a_n)' }
    ] },
    { title: 'Geometrická postupnosť', level: 's3', items: [
      { name: 'Rekurentný vzťah', tex: 'a_{n + 1} = a_n\\cdot q', note: '$q$ – kvocient.' },
      { name: 'n-tý člen', tex: 'a_n = a_1\\cdot q^{n - 1} \\quad\\quad a_r = a_s\\cdot q^{r - s}' },
      { name: 'Súčet prvých n členov', tex: 's_n = a_1\\cdot\\frac{q^n - 1}{q - 1} \\quad (q\\neq 1)', note: 'Pre $q = 1$ je $s_n = n\\cdot a_1$.' },
      { name: 'Rast a pokles o p %', tex: 'q = 1 + \\frac{p}{100} \\quad\\quad q = 1 - \\frac{p}{100}' }
    ] },
    { title: 'Limita postupnosti', level: 'v2', items: [
      { name: 'Definícia limity', tex: '\\lim_{n\\to\\infty} a_n = a \\iff \\forall\\varepsilon > 0\\ \\exists N\\ \\forall n\\ge N:\\ |a_n - a| < \\varepsilon' },
      { name: 'Veta o zovretí', tex: 'a_n\\le c_n\\le b_n,\\ a_n\\to L,\\ b_n\\to L \\ \\Rightarrow\\ c_n\\to L' },
      { name: 'Dôležité limity', tex: '\\sqrt[n]{a}\\to 1 \\quad \\sqrt[n]{n}\\to 1 \\quad \\frac{n^k}{a^n}\\to 0\\ (a > 1) \\quad \\frac{a^n}{n!}\\to 0' },
      { name: 'Eulerovo číslo', tex: '\\mathrm{e} = \\lim_{n\\to\\infty}\\left(1 + \\frac{1}{n}\\right)^n \\approx 2{,}71828', note: 'Všeobecnejšie $\\left(1 + \\frac{a}{n}\\right)^n\\to\\mathrm{e}^a$.' }
    ] },
    { title: 'Nekonečné rady', level: 'v2', items: [
      { name: 'Súčet radu', tex: '\\sum_{n=1}^{\\infty} a_n = \\lim_{n\\to\\infty} s_n, \\quad s_n = a_1 + \\dots + a_n' },
      { name: 'Geometrický rad', tex: '\\sum_{n=0}^{\\infty} aq^n = \\frac{a}{1 - q}, \\quad |q| < 1' },
      { name: 'Nutná podmienka konvergencie', tex: '\\sum a_n \\text{ konverguje} \\ \\Rightarrow\\ \\lim_{n\\to\\infty} a_n = 0', note: 'Opačne to neplatí: harmonický rad $\\sum\\frac{1}{n}$ diverguje.' },
      { name: 'Teleskopický rad', tex: '\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1} \\ \\Rightarrow\\ \\sum_{n=1}^{\\infty}\\frac{1}{n(n + 1)} = 1' },
      { name: 'Rad 1/n^p', tex: '\\sum_{n=1}^{\\infty}\\frac{1}{n^p} \\text{ konverguje} \\iff p > 1' }
    ] },
    { title: 'Kritériá konvergencie', level: 'v2', items: [
      { name: 'Porovnávacie kritérium', tex: '0\\le a_n\\le b_n:\\ \\sum b_n \\text{ konv.} \\Rightarrow \\sum a_n \\text{ konv.}' },
      { name: 'Limitné porovnávacie', tex: '\\lim_{n\\to\\infty}\\frac{a_n}{b_n} = L\\in(0; \\infty)', note: 'Rady $\\sum a_n$ a $\\sum b_n$ potom konvergujú alebo divergujú súčasne.' },
      { name: 'Podielové (d’Alembertovo)', tex: 'q = \\lim_{n\\to\\infty}\\frac{a_{n + 1}}{a_n}', note: '$q < 1$ – konverguje, $q > 1$ – diverguje, $q = 1$ – nerozhodne.' },
      { name: 'Odmocninové (Cauchyho)', tex: 'q = \\lim_{n\\to\\infty}\\sqrt[n]{a_n}', note: 'Rozhoduje rovnako ako podielové kritérium.' },
      { name: 'Integrálne kritérium', tex: '\\sum_{n=1}^{\\infty} f(n) \\ \\sim\\ \\int_1^{\\infty} f(x)\\,dx', note: 'Pre kladnú nerastúcu $f$ rad a integrál konvergujú súčasne.' },
      { name: 'Leibnizovo kritérium', tex: '\\sum (-1)^{n + 1}a_n, \\quad a_n \\searrow 0', note: 'Alternujúci rad konverguje a $|s - s_n|\\le a_{n + 1}$.' },
      { name: 'Absolútna konvergencia', tex: '\\sum|a_n| \\text{ konv.} \\ \\Rightarrow\\ \\sum a_n \\text{ konv.}' }
    ] },
    { title: 'Mocninové a Taylorove rady', level: 'v2', items: [
      { name: 'Polomer konvergencie', tex: 'R = \\lim_{n\\to\\infty}\\left|\\frac{a_n}{a_{n + 1}}\\right| \\quad\\quad \\frac{1}{R} = \\lim_{n\\to\\infty}\\sqrt[n]{|a_n|}', note: 'Rad $\\sum a_n(x - x_0)^n$ konverguje pre $|x - x_0| < R$; krajné body treba overiť zvlášť.' },
      { name: 'Taylorov polynóm', tex: "T_n(x) = \\sum_{k=0}^{n}\\frac{f^{(k)}(a)}{k!}(x - a)^k" },
      { name: 'Zvyšok (Lagrangeov tvar)', tex: 'R_n(x) = \\frac{f^{(n + 1)}(\\xi)}{(n + 1)!}(x - a)^{n + 1}' },
      { name: 'Exponenciála', tex: '\\mathrm{e}^x = \\sum_{n=0}^{\\infty}\\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\cdots' },
      { name: 'Sínus a kosínus', tex: '\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots \\quad \\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots' },
      { name: 'Logaritmus', tex: '\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots, \\quad x\\in(-1; 1\\rangle' },
      { name: 'Geometrický rad ako funkcia', tex: '\\frac{1}{1 - x} = \\sum_{n=0}^{\\infty} x^n, \\quad |x| < 1' }
    ] }
  ],

  /* ---------- Kombinatorika, pravdepodobnosť, štatistika ---------- */
  statistika: [
    { title: 'Počítanie možností a prvá pravdepodobnosť', level: 'r7', items: [
      { name: 'Pravidlo súčinu', tex: 'm\\cdot n', note: 'Prvú voľbu urobíme $m$ spôsobmi, druhú $n$ spôsobmi.' },
      { name: 'Počet dvojíc bez ohľadu na poradie', tex: '\\frac{n\\cdot(n - 1)}{2}' },
      { name: 'Klasická pravdepodobnosť', tex: 'P = \\frac{\\text{počet priaznivých výsledkov}}{\\text{počet všetkých výsledkov}}', note: '$0\\le P\\le 1$; nemožný jav má 0, istý jav 1.' }
    ] },
    { title: 'Priemer, medián, modus', level: 'r8', items: [
      { name: 'Aritmetický priemer', tex: '\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n}' },
      { name: 'Vážený priemer', tex: '\\bar{x} = \\frac{n_1x_1 + n_2x_2 + \\dots + n_kx_k}{n}', note: '$n_i$ – početnosť hodnoty $x_i$ (9. ročník).' },
      { name: 'Medián (n nepárne / párne)', tex: 'x_{\\left(\\frac{n + 1}{2}\\right)} \\quad\\quad \\frac{x_{\\left(\\frac{n}{2}\\right)} + x_{\\left(\\frac{n}{2} + 1\\right)}}{2}', note: '$x_{(i)}$ je $i$-ta hodnota údajov usporiadaných podľa veľkosti. Modus je najčastejšia hodnota.' },
      { name: 'Počet poradí', tex: 'n! = n\\cdot(n - 1)\\cdot\\ldots\\cdot 2\\cdot 1', note: 'Napr. 4 veci zoradíme $4! = 24$ spôsobmi (9. ročník).' }
    ] },
    { title: 'Kombinatorika', level: 's3', items: [
      { name: 'Pravidlo súčtu', tex: '|A\\cup B| = |A| + |B| - |A\\cap B|', note: 'Pre disjunktné množiny $|A\\cup B| = |A| + |B|$.' },
      { name: 'Faktoriál', tex: 'n! = n\\cdot(n - 1)!, \\quad 0! = 1' },
      { name: 'Variácie k-tej triedy', tex: 'V_k(n) = \\frac{n!}{(n - k)!}', note: 'Usporiadané výbery $k$ prvkov z $n$ bez opakovania.' },
      { name: 'Permutácie', tex: 'P(n) = n!' },
      { name: 'Kombinácie', tex: 'C_k(n) = \\binom{n}{k} = \\frac{n!}{k!\\,(n - k)!}', note: 'Neusporiadané výbery $k$ prvkov z $n$.' },
      { name: 'Vlastnosti kombinačných čísel', tex: '\\binom{n}{k} = \\binom{n}{n - k} \\quad\\quad \\binom{n}{k} + \\binom{n}{k + 1} = \\binom{n + 1}{k + 1}', note: 'Druhý vzťah tvorí Pascalov trojuholník.' },
      { name: 'Permutácie s opakovaním', tex: "P'(k_1, \\dots, k_m) = \\frac{n!}{k_1!\\cdots k_m!}" },
      { name: 'Variácie s opakovaním', tex: "V'_k(n) = n^k", note: '4. ročník SŠ.' },
      { name: 'Kombinácie s opakovaním', tex: "C'_k(n) = \\binom{n + k - 1}{k}", note: '4. ročník SŠ.' }
    ] },
    { title: 'Pravdepodobnosť', level: 's3', items: [
      { name: 'Klasická definícia', tex: 'P(A) = \\frac{|A|}{|\\Omega|}' },
      { name: 'Opačný jav', tex: "P(A') = 1 - P(A)" },
      { name: 'Zjednotenie javov', tex: 'P(A\\cup B) = P(A) + P(B) - P(A\\cap B)', note: 'Pre nezlučiteľné javy $P(A\\cap B) = 0$.' },
      { name: 'Výber s danou vlastnosťou', tex: 'P = \\frac{\\binom{r}{j}\\binom{n - r}{k - j}}{\\binom{n}{k}}', note: 'Z $n$ prvkov ($r$ označených) vyberieme $k$, z toho práve $j$ označených.' },
      { name: 'Nezávislé javy', tex: 'P(A\\cap B) = P(A)\\cdot P(B)', note: '4. ročník SŠ.' }
    ] },
    { title: 'Štatistický súbor', level: 's4', items: [
      { name: 'Relatívna početnosť', tex: 'f_i = \\frac{n_i}{n}', note: 'V kruhovom diagrame zodpovedá výseku $f_i\\cdot 360^\\circ$.' },
      { name: 'Variačné rozpätie', tex: 'R = x_{\\max} - x_{\\min}' },
      { name: 'Rozptyl', tex: 's^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2 = \\overline{x^2} - \\bar{x}^2' },
      { name: 'Smerodajná odchýlka', tex: 's = \\sqrt{s^2}' },
      { name: 'Medzikvartilové rozpätie', tex: 'Q_3 - Q_1', note: 'Krabicový graf: min, $Q_1$, medián, $Q_3$, max.' }
    ] },
    { title: 'Binomické rozdelenie', level: 's4', items: [
      { name: 'Pravdepodobnosť k úspechov', tex: 'P(X = k) = \\binom{n}{k}p^k(1 - p)^{n - k}', note: '$n$ nezávislých pokusov, úspech s pravdepodobnosťou $p$.' },
      { name: 'Stredná hodnota a rozptyl', tex: 'E(X) = np \\quad\\quad D(X) = np(1 - p)' },
      { name: 'Aspoň jeden úspech', tex: 'P(X\\ge 1) = 1 - (1 - p)^n' }
    ] },
    { title: 'Podmienená pravdepodobnosť', level: 'v4', items: [
      { name: 'Podmienená pravdepodobnosť', tex: 'P(A\\mid B) = \\frac{P(A\\cap B)}{P(B)}' },
      { name: 'Zjednotenie troch javov', tex: 'P(A\\cup B\\cup C) = P(A) + P(B) + P(C) - P(A\\cap B) - P(A\\cap C) - P(B\\cap C) + P(A\\cap B\\cap C)' },
      { name: 'Úplná pravdepodobnosť', tex: 'P(A) = \\sum_{i=1}^{n}P(H_i)\\,P(A\\mid H_i)', note: '$H_1, \\dots, H_n$ je úplný systém disjunktných javov.' },
      { name: 'Bayesova veta', tex: 'P(H_k\\mid A) = \\frac{P(H_k)\\,P(A\\mid H_k)}{\\sum_i P(H_i)\\,P(A\\mid H_i)}' }
    ] },
    { title: 'Náhodná veličina', level: 'v4', items: [
      { name: 'Distribučná funkcia', tex: 'F(x) = P(X\\le x), \\quad P(a < X\\le b) = F(b) - F(a)' },
      { name: 'Stredná hodnota', tex: 'E(X) = \\sum_i x_ip_i \\quad\\quad E(X) = \\int_{-\\infty}^{\\infty}x f(x)\\,\\mathrm{d}x' },
      { name: 'Rozptyl', tex: 'D(X) = E(X^2) - \\big(E(X)\\big)^2, \\quad \\sigma = \\sqrt{D(X)}' },
      { name: 'Lineárna transformácia', tex: 'E(aX + b) = aE(X) + b \\quad\\quad D(aX + b) = a^2D(X)' },
      { name: 'Hustota a distribučná funkcia', tex: "F'(x) = f(x), \\quad \\int_{-\\infty}^{\\infty}f(x)\\,\\mathrm{d}x = 1" }
    ] },
    { title: 'Rozdelenia', level: 'v4', items: [
      { name: 'Geometrické', tex: 'P(X = k) = (1 - p)^{k - 1}p, \\quad E(X) = \\frac{1}{p}' },
      { name: 'Hypergeometrické', tex: 'P(X = k) = \\frac{\\binom{M}{k}\\binom{N - M}{n - k}}{\\binom{N}{n}}' },
      { name: 'Poissonovo', tex: 'P(X = k) = \\mathrm{e}^{-\\lambda}\\frac{\\lambda^k}{k!}, \\quad E(X) = D(X) = \\lambda' },
      { name: 'Rovnomerné na ⟨a; b⟩', tex: 'f(x) = \\frac{1}{b - a}, \\quad E(X) = \\frac{a + b}{2},\\ D(X) = \\frac{(b - a)^2}{12}' },
      { name: 'Exponenciálne', tex: 'f(x) = \\lambda\\mathrm{e}^{-\\lambda x}, \\quad F(x) = 1 - \\mathrm{e}^{-\\lambda x}, \\quad E(X) = \\frac{1}{\\lambda}' },
      { name: 'Normálne', tex: 'f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,\\mathrm{e}^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}, \\quad E(X) = \\mu,\\ D(X) = \\sigma^2' },
      { name: 'Normovanie', tex: 'Z = \\frac{X - \\mu}{\\sigma}\\sim N(0, 1), \\quad \\Phi(-z) = 1 - \\Phi(z)' },
      { name: 'Pravidlo k sigma', tex: 'P(|X - \\mu| < k\\sigma) = 2\\Phi(k) - 1', note: 'Pre $k = 1, 2, 3$ približne 68 %, 95 %, 99,7 %.' }
    ] },
    { title: 'Náhodný vektor a limitné vety', level: 'v4', items: [
      { name: 'Kovariancia', tex: '\\operatorname{cov}(X, Y) = E(XY) - E(X)E(Y)' },
      { name: 'Koeficient korelácie', tex: '\\rho(X, Y) = \\frac{\\operatorname{cov}(X, Y)}{\\sqrt{D(X)D(Y)}}, \\quad -1\\le\\rho\\le 1' },
      { name: 'Rozptyl súčtu', tex: 'D(aX + bY) = a^2D(X) + b^2D(Y) + 2ab\\operatorname{cov}(X, Y)' },
      { name: 'Čebyševova nerovnosť', tex: 'P\\big(|X - E(X)|\\ge\\varepsilon\\big)\\le\\frac{D(X)}{\\varepsilon^2}' },
      { name: 'Výberový priemer', tex: 'E(\\bar{X}_n) = \\mu \\quad\\quad D(\\bar{X}_n) = \\frac{\\sigma^2}{n}' },
      { name: 'Centrálna limitná veta', tex: '\\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma\\sqrt{n}} \\ \\to\\ N(0, 1)', note: 'Pre veľké $n$ je $\\bar{X}_n\\approx N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$.' }
    ] },
    { title: 'Štatistická indukcia', level: 'v4', items: [
      { name: 'Výberový rozptyl', tex: 's^2 = \\frac{1}{n - 1}\\sum_{i=1}^n(x_i - \\bar{x})^2', note: 'Delíme $n - 1$, aby bol odhad nevychýlený.' },
      { name: 'Interval spoľahlivosti pre μ (σ známe)', tex: '\\bar{x}\\pm z_{1 - \\alpha/2}\\frac{\\sigma}{\\sqrt{n}}' },
      { name: 'Interval spoľahlivosti pre μ (σ neznáme)', tex: '\\bar{x}\\pm t_{1 - \\alpha/2}(n - 1)\\frac{s}{\\sqrt{n}}' },
      { name: 'Interval pre podiel', tex: '\\hat{p}\\pm z_{1 - \\alpha/2}\\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}' },
      { name: 'Z-test strednej hodnoty', tex: 'Z = \\frac{\\bar{X} - \\mu_0}{\\sigma}\\sqrt{n}', note: 'Obojstranný test zamietne $H_0$, ak $|Z|\\ge z_{1 - \\alpha/2}$; pri neznámom $\\sigma$ t-test s $S$ a $t(n - 1)$.' },
      { name: 'Test dobrej zhody', tex: '\\chi^2 = \\sum_{i=1}^k\\frac{(N_i - np_i)^2}{np_i}', note: 'Zamietame, ak $\\chi^2\\ge\\chi^2_{1 - \\alpha}(k - 1)$; potrebné $np_i\\ge 5$.' }
    ] },
    { title: 'Regresia', level: 'v4', items: [
      { name: 'Súčty štvorcov', tex: 'S_{xx} = \\sum x_i^2 - n\\bar{x}^2 \\quad\\quad S_{xy} = \\sum x_iy_i - n\\bar{x}\\bar{y}' },
      { name: 'Výberový koeficient korelácie', tex: 'r = \\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}' },
      { name: 'Regresná priamka', tex: '\\hat{y} = a + bx, \\quad b = \\frac{S_{xy}}{S_{xx}},\\ a = \\bar{y} - b\\bar{x}' },
      { name: 'Koeficient determinácie', tex: 'R^2 = \\frac{SSR}{SST} = 1 - \\frac{SSE}{SST}' }
    ] }
  ],

  /* ---------- Diferenciálny a integrálny počet ---------- */
  analyza: [
    { title: 'Limita funkcie', level: 's4', items: [
      { name: 'Spojitosť', tex: '\\lim_{x\\to a} f(x) = f(a)' },
      { name: 'Dôležitá limita', tex: '\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1 \\quad\\quad \\lim_{x\\to 0}\\frac{\\sin kx}{x} = k' },
      { name: 'Limita v nekonečne', tex: '\\lim_{x\\to\\infty}\\frac{3x^2 + 1}{2x^2 - x} = \\frac{3}{2}', note: 'Pri podiele mnohočlenov delíme najvyššou mocninou menovateľa.' },
      { name: 'Ďalšie dôležité limity', tex: '\\lim_{x\\to 0}\\frac{\\mathrm{e}^x - 1}{x} = 1 \\quad \\lim_{x\\to 0}\\frac{\\ln(1 + x)}{x} = 1', note: 'Vysoká škola.' },
      { name: 'L’Hospitalovo pravidlo', tex: "\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\lim_{x\\to a}\\frac{f'(x)}{g'(x)}", note: 'Pre typ $\\frac{0}{0}$ alebo $\\frac{\\infty}{\\infty}$ (vysoká škola).' }
    ] },
    { title: 'Derivácia', level: 's4', items: [
      { name: 'Definícia', tex: "f'(x_0) = \\lim_{h\\to 0}\\frac{f(x_0 + h) - f(x_0)}{h}" },
      { name: 'Mocnina a konštanta', tex: "(c)' = 0 \\quad\\quad (x^n)' = n\\,x^{n - 1}" },
      { name: 'Exponenciála a logaritmus', tex: "(\\mathrm{e}^x)' = \\mathrm{e}^x \\quad (a^x)' = a^x\\ln a \\quad (\\ln x)' = \\frac{1}{x}" },
      { name: 'Goniometrické funkcie', tex: "(\\sin x)' = \\cos x \\quad (\\cos x)' = -\\sin x \\quad (\\mathrm{tg}\\,x)' = \\frac{1}{\\cos^2 x}" },
      { name: 'Odmocnina a log so základom a', tex: "(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}} \\quad\\quad (\\log_a x)' = \\frac{1}{x\\ln a}" },
      { name: 'Súčet a násobok', tex: "(f + g)' = f' + g' \\quad\\quad (c\\,f)' = c\\,f'" },
      { name: 'Súčin', tex: "(u\\cdot v)' = u'v + uv'" },
      { name: 'Podiel', tex: "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}" },
      { name: 'Zložená funkcia', tex: "\\big(f(g(x))\\big)' = f'(g(x))\\cdot g'(x)", note: 'Napr. $(\\sin 3x)\' = 3\\cos 3x$.' },
      { name: 'Dotyčnica ku grafu', tex: "y = f(x_0) + f'(x_0)(x - x_0)" }
    ] },
    { title: 'Priebeh funkcie', level: 's4', items: [
      { name: 'Monotónnosť', tex: "f' > 0 \\Rightarrow \\text{rastúca} \\quad\\quad f' < 0 \\Rightarrow \\text{klesajúca}" },
      { name: 'Stacionárny bod', tex: "f'(x_0) = 0" },
      { name: 'Druhá derivácia a extrém', tex: "f'(x_0) = 0,\\ f''(x_0) < 0 \\Rightarrow \\max \\quad f''(x_0) > 0 \\Rightarrow \\min" },
      { name: 'Párna a nepárna funkcia', tex: 'f(-x) = f(x) \\quad\\quad f(-x) = -f(x)' },
      { name: 'Šikmá asymptota', tex: 'y = kx + q, \\quad k = \\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x},\\ q = \\lim_{x\\to\\pm\\infty}(f(x) - kx)' }
    ] },
    { title: 'Integrál', level: 's4', items: [
      { name: 'Primitívna funkcia', tex: "\\int f(x)\\,dx = F(x) + C, \\quad F'(x) = f(x)" },
      { name: 'Mocnina', tex: '\\int x^n\\,dx = \\frac{x^{n + 1}}{n + 1} + C \\quad (n\\neq -1)' },
      { name: 'Základné integrály', tex: '\\int\\frac{1}{x}\\,dx = \\ln|x| + C \\quad \\int\\mathrm{e}^x\\,dx = \\mathrm{e}^x + C' },
      { name: 'Sínus a kosínus', tex: '\\int\\sin x\\,dx = -\\cos x + C \\quad\\quad \\int\\cos x\\,dx = \\sin x + C' },
      { name: 'Linearita', tex: '\\int(c\\,f + g)\\,dx = c\\int f\\,dx + \\int g\\,dx' },
      { name: 'Lineárna substitúcia', tex: '\\int f(ax + b)\\,dx = \\frac{1}{a}F(ax + b) + C' },
      { name: 'Newtonov–Leibnizov vzorec', tex: '\\int_a^b f(x)\\,dx = \\big[F(x)\\big]_a^b = F(b) - F(a)' },
      { name: 'Obsah medzi grafmi', tex: 'S = \\int_a^b\\big(g(x) - f(x)\\big)\\,dx, \\quad f\\le g' }
    ] },
    { title: 'Metódy integrovania', level: 'v2', items: [
      { name: 'Per partes', tex: "\\int u\\,v'\\,dx = u\\,v - \\int u'\\,v\\,dx" },
      { name: 'Substitúcia', tex: "\\int f(\\varphi(x))\\,\\varphi'(x)\\,dx = \\int f(t)\\,dt, \\quad t = \\varphi(x)" },
      { name: 'Logaritmická derivácia', tex: "\\int\\frac{f'(x)}{f(x)}\\,dx = \\ln|f(x)| + C" },
      { name: 'Racionálne funkcie', tex: '\\int\\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\,\\mathrm{arctg}\\frac{x}{a} + C', note: 'Racionálnu funkciu najprv rozložíme na parciálne zlomky.' },
      { name: 'Rozdiel štvorcov v menovateli', tex: '\\int\\frac{dx}{x^2 - a^2} = \\frac{1}{2a}\\ln\\left|\\frac{x - a}{x + a}\\right| + C' }
    ] },
    { title: 'Aplikácie určitého integrálu', level: 'v2', items: [
      { name: 'Objem rotačného telesa', tex: 'V = \\pi\\int_a^b f^2(x)\\,dx' },
      { name: 'Dĺžka krivky', tex: "\\ell = \\int_a^b\\sqrt{1 + f'^2(x)}\\,dx" },
      { name: 'Nevlastný integrál', tex: '\\int_a^{\\infty}f(x)\\,dx = \\lim_{b\\to\\infty}\\int_a^b f(x)\\,dx' },
      { name: 'Integrál 1/x^p', tex: '\\int_1^{\\infty}\\frac{dx}{x^p} = \\frac{1}{p - 1} \\quad (p > 1)', note: 'Na $\\langle 0; 1\\rangle$ konverguje naopak pre $p < 1$ s hodnotou $\\frac{1}{1 - p}$.' }
    ] },
    { title: 'Funkcie viac premenných', level: 'v2', items: [
      { name: 'Parciálna derivácia', tex: '\\frac{\\partial f}{\\partial x}(a, b) = \\lim_{h\\to 0}\\frac{f(a + h, b) - f(a, b)}{h}' },
      { name: 'Gradient', tex: '\\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\right)', note: 'Smerová derivácia: $\\frac{\\partial f}{\\partial\\vec{u}} = \\nabla f\\cdot\\vec{u}$.' },
      { name: 'Dotyková rovina', tex: "z - z_0 = f'_x(x_0, y_0)(x - x_0) + f'_y(x_0, y_0)(y - y_0)" },
      { name: 'Lokálny extrém', tex: "D = f''_{xx}f''_{yy} - \\left(f''_{xy}\\right)^2", note: 'V stacionárnom bode: $D > 0$ – extrém (minimum pri $f\'\'_{xx} > 0$), $D < 0$ – sedlo.' },
      { name: 'Viazaný extrém (Lagrange)', tex: 'L = f - \\lambda g, \\quad L\'_x = L\'_y = 0,\\ g = 0' }
    ] },
    { title: 'Viacnásobné integrály', level: 'v2', items: [
      { name: 'Fubiniho veta', tex: '\\iint_D f\\,dx\\,dy = \\int_a^b\\left(\\int_c^d f(x, y)\\,dy\\right)dx' },
      { name: 'Polárne súradnice', tex: 'x = r\\cos\\varphi,\\ y = r\\sin\\varphi, \\quad dx\\,dy = r\\,dr\\,d\\varphi' },
      { name: 'Jakobián', tex: '\\iint_D f\\,dx\\,dy = \\iint_{D\'} f\\,|J|\\,du\\,dv, \\quad J = \\det\\begin{pmatrix}x_u & x_v\\\\ y_u & y_v\\end{pmatrix}' },
      { name: 'Cylindrické súradnice', tex: 'dV = r\\,dr\\,d\\varphi\\,dz' },
      { name: 'Sférické súradnice', tex: 'dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi', note: '$x = \\rho\\sin\\theta\\cos\\varphi$, $y = \\rho\\sin\\theta\\sin\\varphi$, $z = \\rho\\cos\\theta$.' }
    ] },
    { title: 'Vektorová analýza', level: 'v2', items: [
      { name: 'Divergencia', tex: '\\operatorname{div}\\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}' },
      { name: 'Rotácia', tex: '\\operatorname{rot}\\mathbf{F} = \\nabla\\times\\mathbf{F}', note: 'Platí $\\operatorname{rot}\\operatorname{grad}U = \\mathbf{0}$ a $\\operatorname{div}\\operatorname{rot}\\mathbf{F} = 0$.' },
      { name: 'Krivkový integrál 2. druhu', tex: "\\int_k\\mathbf{F}\\cdot d\\mathbf{r} = \\int_a^b\\mathbf{F}\\big(\\mathbf{r}(t)\\big)\\cdot\\mathbf{r}'(t)\\,dt" },
      { name: 'Potenciálové pole', tex: '\\mathbf{F} = \\nabla U \\ \\Rightarrow\\ \\int_k\\mathbf{F}\\cdot d\\mathbf{r} = U(B) - U(A)' },
      { name: 'Greenova veta', tex: '\\oint_{\\partial D}P\\,dx + Q\\,dy = \\iint_D\\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)dx\\,dy' },
      { name: 'Gaussova veta', tex: '\\iint_{\\partial V}\\mathbf{F}\\cdot\\mathbf{n}\\,dS = \\iiint_V\\operatorname{div}\\mathbf{F}\\,dV' },
      { name: 'Stokesova veta', tex: '\\oint_{\\partial\\Sigma}\\mathbf{F}\\cdot d\\mathbf{r} = \\iint_\\Sigma\\operatorname{rot}\\mathbf{F}\\cdot\\mathbf{n}\\,dS' }
    ] }
  ],

  /* ---------- Lineárna algebra ---------- */
  linalg: [
    { title: 'Vektory a matice', level: 'v1', items: [
      { name: 'Operácie s vektormi', tex: 'u + v = (u_1 + v_1, \\dots, u_n + v_n) \\quad c\\,u = (cu_1, \\dots, cu_n)' },
      { name: 'Lineárna nezávislosť', tex: 'c_1u_1 + \\dots + c_ku_k = o \\ \\Rightarrow\\ c_1 = \\dots = c_k = 0' },
      { name: 'Transponovaná matica', tex: '(A^{T})_{ij} = a_{ji} \\quad\\quad (AB)^{T} = B^{T}A^{T}' },
      { name: 'Súčin matíc', tex: 'c_{ij} = \\sum_k a_{ik}b_{kj}', note: 'Riadok krát stĺpec; vo všeobecnosti $AB\\neq BA$.' },
      { name: 'Stopa matice', tex: '\\operatorname{tr}A = a_{11} + a_{22} + \\dots + a_{nn}' }
    ] },
    { title: 'Determinant a inverzná matica', level: 'v1', items: [
      { name: 'Determinant 2×2', tex: '\\det\\begin{pmatrix}a & b\\\\ c & d\\end{pmatrix} = ad - bc' },
      { name: 'Inverzná matica 2×2', tex: '\\begin{pmatrix}a & b\\\\ c & d\\end{pmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix}d & -b\\\\ -c & a\\end{pmatrix}' },
      { name: 'Sarrusovo pravidlo (3×3)', tex: '\\det A = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}' },
      { name: 'Laplaceov rozvoj podľa i-teho riadka', tex: '\\det A = \\sum_{j=1}^{n}a_{ij}A_{ij}, \\quad A_{ij} = (-1)^{i + j}M_{ij}' },
      { name: 'Vlastnosti determinantu', tex: '\\det A^{T} = \\det A \\quad \\det(AB) = \\det A\\cdot\\det B \\quad \\det(cA) = c^n\\det A' },
      { name: 'Inverzná cez adjungovanú maticu', tex: 'A^{-1} = \\frac{1}{\\det A}\\operatorname{adj}A, \\quad (\\operatorname{adj}A)_{ij} = A_{ji}' },
      { name: 'Inverzia súčinu', tex: '(AB)^{-1} = B^{-1}A^{-1} \\quad\\quad \\det A^{-1} = \\frac{1}{\\det A}' }
    ] },
    { title: 'Hodnosť a sústavy', level: 'v1', items: [
      { name: 'Hodnosť', tex: 'h(A) = h(A^{T}) \\le \\min(m, n)' },
      { name: 'Regulárna matica', tex: 'h(A) = n \\iff \\det A\\neq 0 \\iff A^{-1} \\text{ existuje}' },
      { name: 'Frobeniova veta', tex: 'Ax = b \\text{ má riešenie} \\iff h(A) = h(A\\mid b)', note: 'Pri $h = n$ je riešenie jediné, pri $h < n$ ich je nekonečne veľa ($n - h$ parametrov).' },
      { name: 'Cramerovo pravidlo', tex: 'x_i = \\frac{D_i}{D}, \\quad D = \\det A\\neq 0', note: '$D_i$ vznikne nahradením $i$-teho stĺpca pravou stranou $b$.' },
      { name: 'Riešenie pomocou inverznej matice', tex: 'x = A^{-1}b' }
    ] },
    { title: 'Priestory a zobrazenia', level: 'v1', items: [
      { name: 'Súradnice v báze', tex: 'v = c_1b_1 + \\dots + c_nb_n', note: '$\\dim\\mathbb{R}^n = n$, $\\dim P_n = n + 1$.' },
      { name: 'Lineárne zobrazenie', tex: 'f(u + v) = f(u) + f(v) \\quad\\quad f(cu) = c\\,f(u)' },
      { name: 'Matica zobrazenia', tex: 'A = \\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)' },
      { name: 'Veta o dimenzii', tex: '\\dim\\operatorname{Ker}f + \\dim\\operatorname{Im}f = n', note: '$\\dim\\operatorname{Im}f = h(A)$; $f$ je prosté práve vtedy, keď $\\operatorname{Ker}f = \\{o\\}$.' }
    ] },
    { title: 'Vlastné čísla', level: 'v1', items: [
      { name: 'Vlastné číslo a vektor', tex: 'Av = \\lambda v, \\quad v\\neq o' },
      { name: 'Charakteristický polynóm', tex: 'p(\\lambda) = \\det(A - \\lambda I) = 0' },
      { name: 'Prípad 2×2', tex: 'p(\\lambda) = \\lambda^2 - \\operatorname{tr}A\\cdot\\lambda + \\det A' },
      { name: 'Diagonalizácia', tex: 'A = PDP^{-1} \\quad\\Rightarrow\\quad A^k = PD^kP^{-1}', note: 'Stĺpce $P$ sú vlastné vektory, na diagonále $D$ vlastné čísla.' }
    ] },
    { title: 'Skalárny súčin a kvadratické formy', level: 'v1', items: [
      { name: 'Skalárny súčin a norma', tex: '\\langle u, v\\rangle = u_1v_1 + \\dots + u_nv_n \\quad\\quad \\|u\\| = \\sqrt{\\langle u, u\\rangle}' },
      { name: 'Cauchyho–Schwarzova nerovnosť', tex: '|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|' },
      { name: 'Uhol vektorov', tex: '\\cos\\varphi = \\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}' },
      { name: 'Projekcia', tex: '\\operatorname{proj}_u v = \\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u' },
      { name: 'Gramova–Schmidtova ortogonalizácia', tex: 'w_j = u_j - \\sum_{i < j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i' },
      { name: 'Kvadratická forma', tex: 'Q(x) = x^{T}Ax = \\sum_{i,j}a_{ij}x_ix_j' },
      { name: 'Sylvestrovo kritérium', tex: 'D_1 > 0,\\ D_2 > 0,\\ \\dots,\\ D_n > 0 \\iff Q \\text{ je kladne definitná}', note: '$D_k$ – hlavné rohové minory matice $A$.' }
    ] }
  ],

  /* ---------- Diferenciálne rovnice ---------- */
  difrovnice: [
    { title: 'Rovnice 1. rádu', level: 'v2', items: [
      { name: 'Cauchyho úloha', tex: "y' = f(x, y), \\quad y(x_0) = y_0" },
      { name: 'Separovateľná rovnica', tex: "y' = g(x)\\,h(y) \\ \\Rightarrow\\ \\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C", note: 'Nezabudnúť na konštantné riešenia $y = c$, kde $h(c) = 0$.' },
      { name: 'Homogénna rovnica', tex: "y' = \\varphi\\left(\\frac{y}{x}\\right), \\quad u = \\frac{y}{x},\\ y' = u + xu'" },
      { name: 'Lineárna rovnica', tex: "y' + p(x)\\,y = q(x)" },
      { name: 'Riešenie lineárnej rovnice', tex: 'y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right), \\quad P = \\int p\\,dx', note: 'Alebo variácia konštanty $y = C(x)\\,\\mathrm{e}^{-P(x)}$.' },
      { name: 'Bernoulliho rovnica', tex: "y' + p(x)\\,y = q(x)\\,y^n, \\quad z = y^{1 - n}" },
      { name: 'Exaktná rovnica', tex: 'M\\,dx + N\\,dy = 0, \\quad \\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}', note: 'Riešenie $F(x, y) = C$, kde $F_x = M$, $F_y = N$.' }
    ] },
    { title: 'Aplikácie', level: 'v2', items: [
      { name: 'Exponenciálny rast a rozpad', tex: 'y(t) = y_0\\,\\mathrm{e}^{kt}, \\quad T = \\frac{\\ln 2}{|k|}', note: '$T$ – doba zdvojenia, resp. polčas rozpadu.' },
      { name: 'Newtonov zákon ochladzovania', tex: 'T(t) = T_o + (T_0 - T_o)\\,\\mathrm{e}^{-kt}', note: '$T_o$ – teplota okolia.' },
      { name: 'Logistický rast', tex: "P' = rP\\left(1 - \\frac{P}{K}\\right), \\quad P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}" }
    ] },
    { title: 'Lineárne rovnice 2. rádu', level: 'v2', items: [
      { name: 'Charakteristická rovnica', tex: "y'' + py' + qy = 0 \\ \\Rightarrow\\ \\lambda^2 + p\\lambda + q = 0" },
      { name: 'Dva rôzne reálne korene', tex: 'y = C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}' },
      { name: 'Dvojnásobný koreň', tex: 'y = (C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}' },
      { name: 'Komplexné korene α ± βi', tex: 'y = \\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)' },
      { name: 'Wronskián', tex: "W = \\begin{vmatrix} y_1 & y_2\\\\ y_1' & y_2'\\end{vmatrix} = y_1y_2' - y_1'y_2" },
      { name: 'Nehomogénna rovnica', tex: 'y = y_h + y_p', note: '$y_p$ odhadom podľa pravej strany (pri rezonancii násobíme $x^k$) alebo variáciou konštánt.' }
    ] },
    { title: 'Kmitanie', level: 'v2', items: [
      { name: 'Pohybová rovnica', tex: "x'' + 2\\delta x' + \\omega_0^2x = \\frac{F(t)}{m}, \\quad \\omega_0 = \\sqrt{\\frac{k}{m}},\\ \\delta = \\frac{c}{2m}" },
      { name: 'Netlmené kmitanie', tex: 'x = A\\cos(\\omega_0t - \\varphi), \\quad T = \\frac{2\\pi}{\\omega_0}' },
      { name: 'Slabo tlmené kmitanie', tex: 'x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt), \\quad \\omega_d = \\sqrt{\\omega_0^2 - \\delta^2}' },
      { name: 'Amplitúda vynútených kmitov', tex: 'A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4\\delta^2\\omega^2}}' }
    ] },
    { title: 'Sústavy a Laplaceova transformácia', level: 'v2', items: [
      { name: 'Sústava x′ = Ax', tex: '\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}', note: '$\\lambda_i$, $\\mathbf{v}_i$ – vlastné čísla a vektory matice $A$.' },
      { name: 'Laplaceova transformácia', tex: '\\mathcal{L}\\{f\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt' },
      { name: 'Základné obrazy', tex: '\\mathcal{L}\\{1\\} = \\frac{1}{s} \\quad \\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n + 1}} \\quad \\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}' },
      { name: 'Sínus a kosínus', tex: '\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^2 + \\omega^2} \\quad\\quad \\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^2 + \\omega^2}' },
      { name: 'Obraz derivácie', tex: "\\mathcal{L}\\{y'\\} = sY - y(0) \\quad\\quad \\mathcal{L}\\{y''\\} = s^2Y - sy(0) - y'(0)" },
      { name: 'Konvolúcia', tex: '(f * g)(t) = \\int_0^t f(\\tau)g(t - \\tau)\\,d\\tau, \\quad \\mathcal{L}\\{f * g\\} = F\\cdot G' }
    ] }
  ],

  /* ---------- Logika, dôkazy, množiny ---------- */
  logika: [
    { title: 'Výroková logika', level: 'v5', items: [
      { name: 'Logické spojky', tex: '\\neg p,\\quad p\\land q,\\quad p\\lor q,\\quad p\\Rightarrow q,\\quad p\\Leftrightarrow q', note: 'Implikácia je nepravdivá jedine pre $p = 1$, $q = 0$; tabuľka s $n$ premennými má $2^n$ riadkov.' },
      { name: 'De Morganove zákony', tex: '\\neg(p\\land q)\\equiv\\neg p\\lor\\neg q \\quad\\quad \\neg(p\\lor q)\\equiv\\neg p\\land\\neg q' },
      { name: 'Implikácia a jej negácia', tex: 'p\\Rightarrow q\\equiv\\neg p\\lor q \\quad\\quad \\neg(p\\Rightarrow q)\\equiv p\\land\\neg q' },
      { name: 'Obmena', tex: 'p\\Rightarrow q\\equiv\\neg q\\Rightarrow\\neg p' },
      { name: 'Ekvivalencia', tex: 'p\\Leftrightarrow q\\equiv(p\\Rightarrow q)\\land(q\\Rightarrow p)', note: 'Negácia: $\\neg(p\\Leftrightarrow q)\\equiv p\\Leftrightarrow\\neg q$.' },
      { name: 'Tautológie', tex: 'p\\lor\\neg p \\quad\\quad (p\\land(p\\Rightarrow q))\\Rightarrow q' }
    ] },
    { title: 'Kvantifikátory', level: 'v5', items: [
      { name: 'Negácia všeobecného výroku', tex: '\\neg\\,\\forall x: P(x)\\ \\equiv\\ \\exists x: \\neg P(x)' },
      { name: 'Negácia existenčného výroku', tex: '\\neg\\,\\exists x: P(x)\\ \\equiv\\ \\forall x: \\neg P(x)' },
      { name: 'Negácia nerovnosti', tex: '\\neg(a > b)\\equiv a\\le b' }
    ] },
    { title: 'Dôkazy a indukcia', level: 'v5', items: [
      { name: 'Párne a nepárne čísla', tex: 'n = 2k \\quad\\quad n = 2k + 1' },
      { name: 'Matematická indukcia', tex: 'V(1)\\ \\land\\ \\forall n\\ge 1: V(n)\\Rightarrow V(n + 1)', note: 'Potom $V(n)$ platí pre všetky $n\\in\\mathbb{N}$.' },
      { name: 'Súčet prvých n čísel', tex: '1 + 2 + \\dots + n = \\frac{n(n + 1)}{2}' },
      { name: 'Súčet štvorcov', tex: '\\sum_{k=1}^{n}k^2 = \\frac{n(n + 1)(2n + 1)}{6}' },
      { name: 'Nepárne čísla a mocniny 2', tex: '\\sum_{k=1}^{n}(2k - 1) = n^2 \\quad\\quad \\sum_{k=0}^{n - 1}2^k = 2^n - 1' },
      { name: 'Lineárna rekurencia 2. rádu', tex: 'a_n = s\\,a_{n - 1} + t\\,a_{n - 2} \\ \\to\\ \\lambda^2 = s\\lambda + t', note: 'Pre rôzne korene $a_n = A\\lambda_1^n + B\\lambda_2^n$, pre dvojnásobný $a_n = (A + Bn)\\lambda^n$.' }
    ] },
    { title: 'Množiny a relácie', level: 'v5', items: [
      { name: 'Doplnok a De Morgan', tex: "(A\\cup B)' = A'\\cap B' \\quad\\quad (A\\cap B)' = A'\\cup B'" },
      { name: 'Symetrický rozdiel', tex: 'A\\triangle B = (A\\setminus B)\\cup(B\\setminus A)' },
      { name: 'Potenčná množina a súčin', tex: '|\\mathcal{P}(A)| = 2^{|A|} \\quad\\quad |A\\times B| = |A|\\cdot|B|' },
      { name: 'Vlastnosti relácie', tex: 'aRa \\quad aRb\\Rightarrow bRa \\quad aRb\\land bRc\\Rightarrow aRc', note: 'Reflexívna, symetrická, tranzitívna = ekvivalencia; s antisymetriou namiesto symetrie = čiastočné usporiadanie.' },
      { name: 'Trieda ekvivalencie', tex: '[a] = \\{x\\in A : xRa\\}', note: 'Triedy tvoria rozklad množiny $A$.' }
    ] },
    { title: 'Formálne systémy', level: 'v5', items: [
      { name: 'Modus ponens', tex: '\\dfrac{A\\qquad A\\Rightarrow B}{B}' }
    ] }
  ],

  /* ---------- Abstraktná algebra a teória čísel ---------- */
  algebra: [
    { title: 'Grupy', level: 'v6', items: [
      { name: 'Asociatívnosť', tex: '(a\\ast b)\\ast c = a\\ast(b\\ast c)' },
      { name: 'Neutrálny a inverzný prvok', tex: 'e\\ast a = a\\ast e = a \\quad\\quad a\\ast a^{-1} = a^{-1}\\ast a = e' },
      { name: 'Inverz súčinu', tex: '(ab)^{-1} = b^{-1}a^{-1}' },
      { name: 'Cyklická podgrupa', tex: '\\langle a\\rangle = \\{a^k : k\\in\\mathbb{Z}\\}', note: 'Rád prvku $a$ v $\\mathbb{Z}_n$ je $\\frac{n}{\\operatorname{NSD}(a, n)}$.' },
      { name: 'Lagrangeova veta', tex: 'H\\le G \\ \\Rightarrow\\ |H| \\text{ delí } |G|' }
    ] },
    { title: 'Okruhy, telesá, homomorfizmy', level: 'v6', items: [
      { name: 'Distributívnosť', tex: 'a(b + c) = ab + ac \\quad\\quad (a + b)c = ac + bc' },
      { name: 'Inverz v Z_n', tex: '\\operatorname{NSD}(a, n) = 1 \\iff \\exists\\,a^{-1} \\bmod n', note: 'Z Bézoutovej rovnosti $ax + ny = 1$ je $a^{-1}\\equiv x$.' },
      { name: 'Homomorfizmus', tex: 'f(a\\ast b) = f(a)\\circ f(b)', note: 'Platí $f(e_G) = e_H$ a $f(a^{-1}) = f(a)^{-1}$.' },
      { name: 'Jadro', tex: '\\ker f = \\{a\\in G : f(a) = e_H\\}', note: '$f$ je prostý práve vtedy, keď $\\ker f = \\{e_G\\}$.' },
      { name: 'Veta o izomorfizme (počet prvkov)', tex: '|G| = |\\ker f|\\cdot|\\operatorname{Im} f|' }
    ] },
    { title: 'Polynómy', level: 'v6', items: [
      { name: 'Stupeň súčinu', tex: '\\deg(fg) = \\deg f + \\deg g' },
      { name: 'Delenie so zvyškom', tex: 'f = q\\cdot g + r, \\quad \\deg r < \\deg g' },
      { name: 'Euklidov algoritmus a Bézout', tex: '\\operatorname{NSD}(f, g) = \\operatorname{NSD}(g, r) = uf + vg' }
    ] },
    { title: 'Kongruencie a teória čísel', level: 'v6', items: [
      { name: 'Kongruencia', tex: 'a\\equiv b \\pmod n \\iff n \\mid a - b' },
      { name: 'Počítanie modulo n', tex: "a\\equiv a',\\ b\\equiv b' \\ \\Rightarrow\\ a + b\\equiv a' + b',\\ ab\\equiv a'b'", note: 'Krátiť smieme len číslom nesúdeliteľným s modulom.' },
      { name: 'Lineárna kongruencia', tex: 'ax\\equiv b \\pmod n \\text{ má riešenie} \\iff d \\mid b', note: '$d = \\operatorname{NSD}(a, n)$; riešení je vtedy $d$.' },
      { name: 'Euklidov algoritmus', tex: 'a = qb + r \\ \\Rightarrow\\ \\operatorname{NSD}(a, b) = \\operatorname{NSD}(b, r)' },
      { name: 'Bézoutova rovnosť', tex: 'ax + by = \\operatorname{NSD}(a, b)', note: 'Rovnica $ax + by = c$ má celé riešenia práve vtedy, keď $\\operatorname{NSD}(a, b)\\mid c$.' },
      { name: 'Eulerova funkcia', tex: '\\varphi(n) = n\\left(1 - \\frac{1}{p_1}\\right)\\cdots\\left(1 - \\frac{1}{p_r}\\right)', note: '$\\varphi(p) = p - 1$, $\\varphi(mn) = \\varphi(m)\\varphi(n)$ pre nesúdeliteľné $m$, $n$.' },
      { name: 'Eulerova veta', tex: '\\operatorname{NSD}(a, n) = 1 \\ \\Rightarrow\\ a^{\\varphi(n)}\\equiv 1 \\pmod n' },
      { name: 'Malá Fermatova veta', tex: 'a^{p - 1}\\equiv 1 \\pmod p, \\quad p\\nmid a' },
      { name: 'Čínska zvyšková veta', tex: 'x\\equiv a_i \\pmod{m_i} \\ \\Rightarrow\\ x \\text{ jednoznačne mod } m_1m_2\\cdots m_k', note: 'Moduly musia byť po dvoch nesúdeliteľné.' }
    ] },
    { title: 'Rozšírenia polí', level: 'v6', items: [
      { name: 'Veta o stupni', tex: '[K:F] = [K:L]\\cdot[L:F]' },
      { name: 'Príklad rozšírenia', tex: '\\mathbb{Q}(\\sqrt{2}) = \\{a + b\\sqrt{2} : a, b\\in\\mathbb{Q}\\}, \\quad [\\mathbb{Q}(\\sqrt{2}):\\mathbb{Q}] = 2' },
      { name: 'Rád Galoisovej grupy', tex: '|\\operatorname{Gal}(K/\\mathbb{Q})| = [K:\\mathbb{Q}]', note: 'Pre koreňové (Galoisovo) rozšírenie.' }
    ] }
  ],

  /* ---------- Numerická matematika ---------- */
  numerika: [
    { title: 'Chyby', level: 'v7', items: [
      { name: 'Absolútna a relatívna chyba', tex: '\\Delta = |x - \\tilde{x}| \\quad\\quad \\delta = \\frac{|x - \\tilde{x}|}{|x|}' },
      { name: 'Platné desatinné miesta', tex: '|x - \\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}' },
      { name: 'Strojová presnosť', tex: '\\mathrm{fl}(x) = x(1 + \\eta), \\quad |\\eta|\\le\\frac{\\varepsilon_M}{2}', note: 'Pre dvojitú presnosť $\\varepsilon_M = 2^{-52}\\approx 2{,}22\\cdot 10^{-16}$.' },
      { name: 'Šírenie chýb', tex: '\\Delta(x\\pm y)\\le\\Delta x + \\Delta y \\quad\\quad \\delta(xy)\\approx\\delta x + \\delta y' },
      { name: 'Číslo podmienenosti', tex: "\\kappa(x) = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|" }
    ] },
    { title: 'Riešenie rovníc f(x) = 0', level: 'v7', items: [
      { name: 'Bisekcia', tex: 'c = \\frac{a + b}{2}, \\quad n\\ge\\log_2\\frac{b - a}{\\varepsilon}' },
      { name: 'Prostá iterácia', tex: 'x_{k + 1} = g(x_k), \\quad |g\'(x)|\\le q < 1', note: 'Odhad: $|x_k - \\xi|\\le\\frac{q}{1 - q}|x_k - x_{k - 1}|$.' },
      { name: 'Newtonova metóda', tex: "x_{k + 1} = x_k - \\frac{f(x_k)}{f'(x_k)}", note: 'Konverguje kvadraticky (blízko jednoduchého koreňa).' },
      { name: 'Metóda sečníc', tex: 'x_{k + 1} = x_k - f(x_k)\\,\\frac{x_k - x_{k - 1}}{f(x_k) - f(x_{k - 1})}', note: 'Rád konvergencie $\\frac{1 + \\sqrt{5}}{2}\\approx 1{,}618$.' }
    ] },
    { title: 'Interpolácia a aproximácia', level: 'v7', items: [
      { name: 'Lagrangeov polynóm', tex: 'P_n(x) = \\sum_{i=0}^{n}y_i\\,\\ell_i(x), \\quad \\ell_i(x) = \\prod_{j\\neq i}\\frac{x - x_j}{x_i - x_j}' },
      { name: 'Pomerné diferencie', tex: 'f[x_i, x_{i + 1}] = \\frac{f[x_{i + 1}] - f[x_i]}{x_{i + 1} - x_i}', note: 'Newtonov tvar: $P_n(x) = f[x_0] + f[x_0, x_1](x - x_0) + \\dots$' },
      { name: 'Chyba interpolácie', tex: 'f(x) - P_n(x) = \\frac{f^{(n + 1)}(\\xi)}{(n + 1)!}\\,\\omega(x), \\quad \\omega(x) = \\prod_{i=0}^{n}(x - x_i)' },
      { name: 'Metóda najmenších štvorcov', tex: 'a = \\frac{n\\sum x_iy_i - \\sum x_i\\sum y_i}{n\\sum x_i^2 - \\left(\\sum x_i\\right)^2}, \\quad b = \\frac{\\sum y_i - a\\sum x_i}{n}', note: 'Priamka $y = ax + b$.' }
    ] },
    { title: 'Numerické derivovanie a integrovanie', level: 'v7', items: [
      { name: 'Dopredná diferencia', tex: "f'(x)\\approx\\frac{f(x + h) - f(x)}{h}", note: 'Chyba rádu $h$.' },
      { name: 'Centrálna diferencia', tex: "f'(x)\\approx\\frac{f(x + h) - f(x - h)}{2h}", note: 'Chyba rádu $h^2$.' },
      { name: 'Druhá derivácia', tex: "f''(x)\\approx\\frac{f(x + h) - 2f(x) + f(x - h)}{h^2}" },
      { name: 'Obdĺžniková (stredová) metóda', tex: 'M_n = h\\sum_{i=1}^{n}f\\!\\left(x_{i - 1} + \\frac{h}{2}\\right), \\quad h = \\frac{b - a}{n}' },
      { name: 'Lichobežníková metóda', tex: 'T_n = \\frac{h}{2}\\left(f_0 + 2f_1 + \\dots + 2f_{n - 1} + f_n\\right)', note: 'Chyba $-\\frac{(b - a)h^2}{12}f\'\'(\\xi)$.' },
      { name: 'Simpsonova metóda', tex: 'S_n = \\frac{h}{3}\\left(f_0 + 4f_1 + 2f_2 + 4f_3 + \\dots + 4f_{n - 1} + f_n\\right)', note: '$n$ párne; chyba $-\\frac{(b - a)h^4}{180}f^{(4)}(\\xi)$.' },
      { name: 'Richardsonova extrapolácia', tex: 'I\\approx\\frac{4T_{2n} - T_n}{3}' }
    ] },
    { title: 'Diferenciálne rovnice', level: 'v7', items: [
      { name: 'Eulerova metóda', tex: 'y_{k + 1} = y_k + h\\,f(x_k, y_k)' },
      { name: 'Heunova metóda', tex: 'y_{k + 1} = y_k + \\frac{h}{2}\\left(f(x_k, y_k) + f(x_{k + 1}, \\tilde{y}_{k + 1})\\right)', note: '$\\tilde{y}_{k + 1}$ je predikcia Eulerovou metódou.' },
      { name: 'Runge–Kutta 4. rádu', tex: 'y_{k + 1} = y_k + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)', note: '$k_1 = f(x_k, y_k)$, $k_2 = f(x_k + \\frac{h}{2}, y_k + \\frac{h}{2}k_1)$, $k_3$ podobne s $k_2$, $k_4 = f(x_k + h, y_k + hk_3)$.' },
      { name: 'Stabilita Eulerovej metódy', tex: "y' = \\lambda y: \\quad h < \\frac{2}{|\\lambda|}" }
    ] },
    { title: 'Matice', level: 'v7', items: [
      { name: 'LU rozklad', tex: 'A = LU: \\quad Ly = b,\\ Ux = y', note: 'Dopredná a spätná substitúcia; $\\det A = \\pm u_{11}\\cdots u_{nn}$.' },
      { name: 'Jacobiho metóda', tex: 'x_i^{(k + 1)} = \\frac{1}{a_{ii}}\\Big(b_i - \\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big)', note: 'Gaussova–Seidelova metóda používa už vypočítané nové zložky.' },
      { name: 'Mocninová metóda', tex: 'x^{(k + 1)} = \\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}', note: 'Konverguje k vlastnému vektoru dominantného vlastného čísla rýchlosťou $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$.' }
    ] }
  ]
};
