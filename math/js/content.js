/* Obsah lekcií. Všetky texty a príklady sú pôvodné (napísané pre túto aplikáciu),
   nekopírujú žiadnu licencovanú učebnicu. Matematika je všeobecne známa a voľne použiteľná. */
window.GROUPS = [
  { id: 'zs', title: 'Základná škola' },
  { id: 'ss', title: 'Stredná škola' },
  { id: 'vs', title: 'Vysoká škola' }
];

// Lekcie sa v rámci úrovne radia podľa poľa order (10, 20, 30…).
window.LEVELS = [
  { id: 'r1', group: 'zs', title: '1. ročník', desc: 'Čísla do 20, sčítanie a odčítanie, tvary a orientácia.' },
  { id: 'r2', group: 'zs', title: '2. ročník', desc: 'Čísla do 100, násobilka, úsečka, jednotky.' },
  { id: 'r3', group: 'zs', title: '3. ročník', desc: 'Čísla do 1 000, zátvorky, obvod, tabuľky.' },
  { id: 'r4', group: 'zs', title: '4. ročník', desc: 'Čísla do 10 000, písomné počítanie, rímske číslice.' },
  { id: 'r5', group: 'zs', title: '5. ročník', desc: 'Zaokrúhľovanie, násobky a delitele, prvé zlomky.' },
  { id: 'r6', group: 'zs', title: '6. ročník', desc: 'Desatinné čísla, deliteľnosť, uhly, osová súmernosť.' },
  { id: 'r7', group: 'zs', title: '7. ročník', desc: 'Zlomky, pomer, úmernosť, percentá, kruh, kombinatorika.' },
  { id: 'r8', group: 'zs', title: '8. ročník', desc: 'Mocniny, výrazy, rovnice, Pytagorova veta, hranoly.' },
  { id: 'r9', group: 'zs', title: '9. ročník', desc: 'Funkcie, podobnosť, telesá, štatistika a pravdepodobnosť.' },
  { id: 's1', group: 'ss', title: '1. ročník SŠ', desc: 'Množiny, číselné obory, výrazy, rovnice a nerovnice, základy geometrie.' },
  { id: 's2', group: 'ss', title: '2. ročník SŠ', desc: 'Kvadratické rovnice, funkcie, planimetria, stereometria, logaritmy.' },
  { id: 's3', group: 'ss', title: '3. ročník SŠ', desc: 'Goniometria, analytická geometria, postupnosti, kombinatorika.' },
  { id: 's4', group: 'ss', title: '4. ročník SŠ', desc: 'Derivácie a integrály, štatistika, opakovanie na maturitu.' },
  { id: 'v2', group: 'vs', title: 'Matematická analýza', desc: 'Komplexné čísla, limity, derivácie a integrály, rady, viacnásobné integrály, vektorová analýza, diferenciálne rovnice.' },
  { id: 'v1', group: 'vs', title: 'Lineárna algebra', desc: 'Vektorové priestory, matice a determinanty, sústavy, lineárne zobrazenia, vlastné čísla, ortogonalita.' },
  { id: 'v5', group: 'vs', title: 'Matematická logika a teória množín', desc: 'Výroky a kvantifikátory, dôkazy, množiny, relácie, indukcia a formálne systémy.' },
  { id: 'v6', group: 'vs', title: 'Abstraktná algebra', desc: 'Grupy, okruhy a polia, homomorfizmy, polynómy, kongruencie, teória čísel a Galoisova teória.' },
  { id: 'v4', group: 'vs', title: 'Pravdepodobnosť a štatistika', desc: 'Náhodné veličiny, rozdelenia, zákon veľkých čísel, CLV, odhady, testy hypotéz, regresia.' },
  { id: 'v7', group: 'vs', title: 'Numerická matematika', desc: 'Chyby výpočtov, riešenie rovníc, interpolácia, numerické derivovanie a integrovanie, diferenciálne rovnice, matice.' }
];

window.LESSONS = [
  /* ---------- ZÁKLADY ---------- */
  {
    id: 'cisla', level: 'r4', order: 40, title: 'Číselné výrazy a poradie operácií',
    summary: 'Čísla, zátvorky a správne poradie výpočtov.',
    theory: [
      `<p>Prirodzené čísla sú $1, 2, 3, 4, \\dots$. Ich množinu označujeme $\\mathbb{N}$. Ak k nim pridáme nulu, dostaneme celé nezáporné čísla; s pridaním záporných čísel vznikne množina celých čísel $\\mathbb{Z}$.</p>`,
      { fig: 'numberline', caption: 'Číselná os: modré body sú prirodzené čísla, naľavo od nuly ležia záporné celé čísla.' },
      `<p><strong>Poradie operácií:</strong></p>
       <ol><li>výrazy v zátvorkách,</li><li>mocniny a odmocniny,</li>
       <li>násobenie a delenie zľava doprava,</li><li>sčítanie a odčítanie zľava doprava.</li></ol>`
    ],
    examples: [
      { task: 'Vypočítaj $2 + 3\\cdot 4 - 6 : 2$.',
        steps: ['Najprv násobenie a delenie: $3\\cdot 4 = 12$, $6 : 2 = 3$.',
                'Výraz sa zmení na $2 + 12 - 3$.',
                'Zľava doprava: $2 + 12 = 14$, potom $14 - 3 = 11$.',
                '<strong>Výsledok: 11</strong>'] }
    ]
  },
  {
    id: 'zlomky', level: 'r7', order: 10, title: 'Zlomky a operácie so zlomkami',
    summary: 'Krátenie, rozširovanie a počítanie so zlomkami.',
    theory: [
      `<p>Zlomok $\\frac{a}{b}$ má čitateľ $a$ a menovateľ $b \\neq 0$. Hodnota zlomku sa nezmení, ak čitateľ aj menovateľ vynásobíme tým istým nenulovým číslom (<strong>rozširovanie</strong>). Opačný postup je <strong>krátenie</strong>.</p>`,
      { fig: 'fractions', caption: 'Rozširovanie nemení hodnotu: $\\frac{1}{2}=\\frac{3}{6}$ a $\\frac{2}{3}=\\frac{4}{6}$ majú rovnako dlhé vyfarbené časti.' },
      `<p><strong>Sčítanie a odčítanie</strong> vyžaduje spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.</p>`,
      `<p><strong>Násobenie</strong>: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$. <strong>Delenie</strong> vynásobíme prevrátenou hodnotou: $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\frac{1}{2}+\\frac{2}{3}$.',
        steps: ['Spoločný menovateľ je $2\\cdot 3 = 6$.',
                '$\\frac{1}{2}=\\frac{3}{6}$ a $\\frac{2}{3}=\\frac{4}{6}$.',
                '$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$.',
                '<strong>Výsledok: $\\frac{7}{6}=1\\frac{1}{6}$</strong>'] }
    ]
  },
  {
    id: 'percenta', level: 'r7', order: 40, title: 'Percentá a percentový počet',
    summary: 'Výpočet percent, zvýšenie a zníženie o percentá.',
    theory: [
      `<p>$p\\,\\%$ znamená $\\frac{p}{100}$. Percento z čísla $x$ je $\\frac{p}{100}\\cdot x$.</p>`,
      { fig: 'percent', caption: 'Celok je 100 dielov. $25\\,\\%$ znamená 25 z nich.' },
      `<p><strong>Zvýšenie</strong> o $p\\,\\%$ je násobenie číslom $1+\\frac{p}{100}$, <strong>zníženie</strong> násobenie číslom $1-\\frac{p}{100}$.</p>`,
      `<p>Desatinné číslo $0{,}25$ je zlomok $\\frac{1}{4}$ a zároveň $25\\,\\%$. V slovenčine sa desatinná čiarka píše čiarkou.</p>`
    ],
    examples: [
      { task: 'Cena tovaru je $80\\,€$. Koľko stojí po zvýšení o $15\\,\\%$?',
        steps: ['Násobiteľ je $1+\\frac{15}{100}=1{,}15$.',
                '$80\\cdot 1{,}15 = 92$.',
                '<strong>Výsledok: 92 €</strong>'] }
    ]
  },
  {
    id: 'mnoziny', level: 's1', order: 10, topics: ['cisla'], title: 'Množiny a množinové operácie',
    summary: 'Prvky, zjednotenie, prienik, rozdiel a počet prvkov.',
    theory: [
      `<p>Množina je súbor navzájom rozlíšiteľných prvkov. Zápis $a\\in A$ znamená, že prvok $a$ patrí do množiny $A$. Prázdna množina je $\\varnothing$.</p>`,
      `<p>Operácie: <strong>zjednotenie</strong> $A\\cup B$ (prvky aspoň z jednej množiny), <strong>prienik</strong> $A\\cap B$ (prvky z oboch množín), <strong>rozdiel</strong> $A\\setminus B$ (prvky z $A$, ktoré nie sú v $B$).</p>`,
      { fig: 'venn', caption: 'Vennov diagram pre $A=\\{1,2,3,4\\}$ a $B=\\{3,4,5\\}$. Prienik leží v prekryve kruhov.' },
      `<p>Počet prvkov označujeme $|A|$. Platí $|A\\cup B| = |A|+|B|-|A\\cap B|$: prvky prieniku sme započítali dvakrát, preto ich odčítame.</p>`
    ],
    examples: [
      { task: 'Dané sú $A=\\{1,2,3,4\\}$ a $B=\\{3,4,5\\}$. Nájdi $A\\cup B$, $A\\cap B$ a $A\\setminus B$.',
        steps: ['$A\\cup B=\\{1,2,3,4,5\\}$',
                '$A\\cap B=\\{3,4\\}$',
                '$A\\setminus B=\\{1,2\\}$'] }
    ]
  },
  {
    id: 'obsah', level: 'r7', order: 70, title: 'Obvod a obsah rovinných útvarov',
    summary: 'Obvod a obsah obdĺžnika, trojuholníka a kruhu.',
    theory: [
      `<p>Obdĺžnik so stranami $a$ a $b$ má obvod $o=2(a+b)$ a obsah $S=a\\cdot b$.</p>`,
      `<p>Trojuholník so základňou $z$ a výškou $v$ na túto základňu má obsah $S=\\frac{z\\cdot v}{2}$.</p>`,
      `<p>Kruh s polomerom $r$ má obvod $o=2\\pi r$ a obsah $S=\\pi r^2$, kde $\\pi\\approx 3{,}14159$.</p>`,
      { fig: 'shapes', caption: 'Strany $a$, $b$ obdĺžnika, základňa $z$ a výška $v$ trojuholníka, polomer $r$ kruhu.' }
    ],
    examples: [
      { task: 'Kruh má polomer $r=3\\,\\text{cm}$. Vypočítaj jeho obsah.',
        steps: ['$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$.',
                '$9\\pi\\approx 28{,}27\\,\\text{cm}^2$.'] }
    ]
  },
  {
    id: 'pytagoras', level: 'r8', order: 70, title: 'Pytagorova veta',
    summary: 'Výpočet strán v pravouhlom trojuholníku.',
    theory: [
      `<p>V pravouhlom trojuholníku s odvesnami $a$, $b$ a preponou $c$ platí $a^2+b^2=c^2$. Prepona leží oproti pravému uhlu a je vždy najdlhšou stranou.</p>`,
      { fig: 'pythagoras', caption: 'Trojuholník so stranami $3, 4, 5$: obsahy štvorcov nad odvesnami $9+16$ dávajú spolu obsah štvorca nad preponou $25$.' },
      `<p>Osvedčené celočíselné trojice: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ a ich násobky.</p>`
    ],
    examples: [
      { task: 'Odvesny majú dĺžky $6$ a $8$. Aká je dĺžka prepony?',
        steps: ['$c^2=6^2+8^2=36+64=100$.',
                '$c=\\sqrt{100}=10$.'] }
    ]
  },

  /* ---------- STREDNÁ ŠKOLA ---------- */
  {
    id: 'linearne', level: 's1', order: 110, topics: ['rovnice'], title: 'Lineárne rovnice',
    summary: 'Ekvivalentné úpravy a rovnice prvého stupňa.',
    theory: [
      `<p>Rovnice riešime <strong>ekvivalentnými úpravami</strong>: k obom stranám pripočítame alebo od oboch odčítame rovnaké číslo, obe strany vynásobíme alebo vydelíme nenulovým číslom.</p>`,
      `<p>Rovnicu $ax+b=c$ s $a\\neq 0$ riešime: $ax=c-b$, teda $x=\\frac{c-b}{a}$.</p>`,
      `<p>Skúšku urobíme dosadením výsledku do pôvodnej rovnice.</p>`
    ],
    examples: [
      { task: 'Vyrieš $3x+5=20$.',
        steps: ['Odčítame $5$: $3x=15$.',
                'Vydelíme $3$: $x=5$.',
                'Skúška: $3\\cdot 5+5=20$ ✓'] }
    ]
  },
  {
    id: 'kvadraticke', level: 's2', order: 10, topics: ['rovnice'], title: 'Kvadratické rovnice',
    summary: 'Diskriminant, koreňový vzorec a Vietove vzťahy.',
    theory: [
      `<p>Kvadratická rovnica $ax^2+bx+c=0$ ($a\\neq 0$) má korene $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$, kde $D=b^2-4ac$ je <strong>diskriminant</strong>.</p>`,
      `<p>Ak $D&gt;0$, rovnica má dva rôzne reálne korene. Ak $D=0$, má jeden dvojnásobný koreň. Ak $D&lt;0$, reálne korene nemá.</p>`,
      { fig: 'parabola', caption: 'Graf $y=x^2+px+q$ (teda $b=p$, $c=q$). Korene sú priesečníky paraboly s osou $x$. Zmeň $p$ a $q$ a sleduj diskriminant.' },
      `<p><strong>Vietove vzťahy</strong> (pre $a=1$): $x_1+x_2=-b$ a $x_1\\cdot x_2=c$.</p>`
    ],
    examples: [
      { task: 'Vyrieš $x^2-5x+6=0$.',
        steps: ['$a=1$, $b=-5$, $c=6$, $D=25-24=1$.',
                '$x_{1,2}=\\frac{5\\pm 1}{2}$, teda $x_1=3$, $x_2=2$.',
                'Kontrola: $3+2=5$ a $3\\cdot 2=6$ ✓'] }
    ]
  },
  {
    id: 'mocniny', level: 's1', order: 70, topics: ['cisla', 'vyrazy'], title: 'Mocniny a odmocniny',
    summary: 'Pravidlá pre počítanie s mocninami a odmocninami.',
    theory: [
      `<p>Pre $a&gt;0$ a celé $m,n$ platí: $a^m\\cdot a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{m\\cdot n}$.</p>`,
      `<p>Záporný exponent: $a^{-n}=\\frac{1}{a^n}$. Nultý exponent: $a^0=1$ pre $a\\neq 0$.</p>`,
      `<p>Odmocnina je opačná operácia k mocnine: $\\sqrt{a}=a^{1/2}$, $\\sqrt[n]{a}=a^{1/n}$. Platí $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$.</p>`
    ],
    examples: [
      { task: 'Zjednoduš $\\frac{2^5\\cdot 2^{-2}}{2}$.',
        steps: ['Čitateľ: $2^5\\cdot 2^{-2}=2^{3}$.',
                '$\\frac{2^3}{2}=2^{2}$.',
                '<strong>Výsledok: $4$</strong>'] }
    ]
  },
  {
    id: 'goniometria', level: 's3', order: 20, topics: ['goniometria'], title: 'Goniometrické funkcie v pravouhlom trojuholníku',
    summary: 'Sínus, kosínus a tangens v pravouhlom trojuholníku.',
    theory: [
      `<p>V pravouhlom trojuholníku s ostrým uhlom $\\alpha$: $\\sin\\alpha=\\frac{\\text{protiľahlá odvesna}}{\\text{prepona}}$, $\\cos\\alpha=\\frac{\\text{priľahlá odvesna}}{\\text{prepona}}$, $\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$.</p>`,
      { fig: 'trigtriangle', caption: 'Pomenovanie strán pravouhlého trojuholníka vzhľadom na uhol $\\alpha$.' },
      `<p>Základná identita: $\\sin^2\\alpha+\\cos^2\\alpha=1$.</p>`,
      { fig: 'unitcircle', caption: 'Jednotková kružnica: bod na nej má súradnice $(\\cos\\alpha, \\sin\\alpha)$. Posúvaj uhol a sleduj, ako sa menia znamienka.' },
      `<p>Hodnoty pre štandardné uhly:</p>
       <table class="tbl">
         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>
         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>
       </table>`
    ],
    examples: [
      { task: 'Ak $\\sin\\alpha=0{,}6$ a $\\alpha$ je ostrý uhol, vypočítaj $\\cos\\alpha$.',
        steps: ['$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0{,}36=0{,}64$.',
                '$\\cos\\alpha=\\sqrt{0{,}64}=0{,}8$ (ostrý uhol, kosínus je kladný).'] }
    ]
  },

  /* ---------- VYSOKÁ ŠKOLA ---------- */
  {
    id: 'matice', level: 'v1', order: 30, title: 'Determinant a inverzná matica 2×2',
    summary: 'Maticový zápis, determinant 2×2 a inverzná matica.',
    theory: [
      `<p>Matica typu $m\\times n$ je tabuľka čísel s $m$ riadkami a $n$ stĺpcami. Prvok v $i$-tom riadku a $j$-tom stĺpci označujeme $a_{ij}$.</p>`,
      `<p>Determinant matice $A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$ je $\\det A=ad-bc$. Ak $\\det A\\neq 0$, existuje inverzná matica $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>`,
      { fig: 'parallelogram', caption: 'Stĺpce matice $\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ sú vektory $u=(2,1)$ a $v=(3,4)$. Absolútna hodnota determinantu je obsah rovnobežníka, ktorý vytvárajú: $|\\det|=5$.' },
      `<p>Sústavu lineárnych rovníc možno zapísať ako $Ax=b$ a riešiť ju pomocou inverznej matice $x=A^{-1}b$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\det\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$.',
        steps: ['$\\det = 2\\cdot 4-3\\cdot 1 = 8-3 = 5$.'] }
    ]
  },
  {
    id: 'sucin', level: 'v1', order: 20, title: 'Súčin matíc',
    summary: 'Ako sa násobia matice a prečo záleží na poradí.',
    theory: [
      `<p>Súčin $C=AB$ existuje, ak počet stĺpcov $A$ je rovný počtu riadkov $B$. Prvok v $i$-tom riadku a $j$-tom stĺpci je $c_{ij}=\\sum_k a_{ik}b_{kj}$: riadok matice $A$ vynásobíme so stĺpcom matice $B$ a sčítame.</p>`,
      { fig: 'matmul', caption: 'Prvok $c_{11}$ vznikne z 1. riadku $A$ a 1. stĺpca $B$: $1\\cdot 0+2\\cdot 1=2$.' },
      `<p>Násobenie matíc <strong>nie je komutatívne</strong>: vo všeobecnosti $AB\\neq BA$.</p>`
    ],
    examples: [
      { task: '$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$, $B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$. Vypočítaj $AB$.',
        steps: ['$c_{11}=1\\cdot 0+2\\cdot 1=2$, $c_{12}=1\\cdot 1+2\\cdot 0=1$.',
                '$c_{21}=3\\cdot 0+4\\cdot 1=4$, $c_{22}=3\\cdot 1+4\\cdot 0=3$.',
                '<strong>Výsledok:</strong> $AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$'] }
    ]
  },
  {
    id: 'derivacie', level: 's4', order: 20, topics: ['analyza'], title: 'Derivácia funkcie',
    summary: 'Okamžitá zmena, pravidlá derivovania a dotyčnica.',
    theory: [
      `<p>Derivácia $f'(x_0)$ je limita $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$, ak existuje. Geometricky ide o smernicu dotyčnice ku grafu $f$ v bode $x_0$.</p>`,
      { fig: 'tangent', caption: `Graf $f(x)=x^3-2x$ a dotyčnica v bode $x_0$. Jej smernica je $f'(x_0)=3x_0^2-2$. Kde je dotyčnica vodorovná, je derivácia nulová.` },
      `<p>Pravidlá: $(x^n)'=n\\,x^{n-1}$, $(c)'=0$, $(c\\,f)'=c\\,f'$, $(f+g)'=f'+g'$, $(f\\cdot g)'=f'g+fg'$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$.</p>`
    ],
    examples: [
      { task: '$f(x)=x^3-2x$. Vypočítaj $f\'(2)$.',
        steps: ['$f\'(x)=3x^2-2$.',
                '$f\'(2)=3\\cdot 2^2-2=12-2=10$.'] }
    ]
  },
  {
    id: 'integraly', level: 's4', order: 60, topics: ['analyza'], title: 'Základy integrálneho počtu',
    summary: 'Neurčitý a určitý integrál, Newton-Leibnizova formula.',
    theory: [
      `<p>Primitívna funkcia $F$ k funkcii $f$ spĺňa $F'(x)=f(x)$. Neurčitý integrál: $\\int f(x)\\,dx=F(x)+C$. Pre $n\\neq -1$ platí $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$.</p>`,
      `<p>Určitý integrál počítame <strong>Newton-Leibnizovou formulou</strong>: $\\int_a^b f(x)\\,dx=F(b)-F(a)$. Geometricky je to obsah plochy pod grafom $f$ od $a$ po $b$ (pre kladné $f$).</p>`,
      { fig: 'area', caption: 'Plocha pod grafom $f(x)=x^2$ od $0$ po $b$ je $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$.' },
      `<p>Linearita: $\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$.</p>`
    ],
    examples: [
      { task: 'Vypočítaj $\\int_0^2 3x^2\\,dx$.',
        steps: ['Primitívna funkcia: $F(x)=x^3$.',
                '$F(2)-F(0)=8-0=8$.',
                '<strong>Výsledok: 8</strong>'] }
    ]
  }
];
