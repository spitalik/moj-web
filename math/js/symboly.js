/* Prehľad matematických symbolov (stránka #/symboly, js/features/symboly.js). Texty sú obsah (slovensky),
   preklady sú v js/content-i18n/<jazyk>/symboly.js (slovník ako pri vzorcoch, tools/i18n_extract.js).
   Položka: tex – symbol (TeX), name – názov, note – význam, ex – príklad (TeX), lesson – lekcia, kde sa zavádza. */
window.SYMBOLS = [
  { id: 'cisla', icon: '🔢', title: 'Čísla a počtové operácie', items: [
    { tex: String.raw`+ \quad - \quad \cdot \quad :`, name: 'Sčítanie, odčítanie, násobenie, delenie', note: 'Znaky základných počtových operácií. Násobenie sa píše bodkou, delenie dvojbodkou alebo zlomkovou čiarou.', ex: String.raw`6\cdot 4 = 24,\quad 24 : 6 = 4`, lesson: 'r2-nasobenie' },
    { tex: String.raw`=\quad \neq`, name: 'Rovná sa, nerovná sa', note: 'Obe strany majú rovnakú hodnotu, resp. rôznu hodnotu.', ex: String.raw`3 + 4 = 7,\quad 3 + 4 \neq 8`, lesson: 'r1-cisla20' },
    { tex: String.raw`<\quad >`, name: 'Menšie, väčšie', note: 'Porovnanie čísel. Otvorená strana znaku smeruje k väčšiemu číslu.', ex: String.raw`7 < 12,\quad 15 > 9`, lesson: 'r1-cisla20' },
    { tex: String.raw`\le\quad \ge`, name: 'Menšie alebo rovné, väčšie alebo rovné', note: 'Nerovnosť, ktorá pripúšťa aj rovnosť.', ex: String.raw`x \le 3 \text{ platí pre } x = 3`, lesson: 'r8-mocniny' },
    { tex: String.raw`\doteq\quad \approx`, name: 'Približne sa rovná', note: 'Výsledok zaokrúhlenia alebo odhadu, nie presná hodnota.', ex: String.raw`\pi \doteq 3{,}14`, lesson: 'r5-zaokruhlovanie' },
    { tex: String.raw`\square`, name: 'Prázdne políčko', note: 'Miesto, kam treba doplniť chýbajúce číslo.', ex: String.raw`9 = 4 + \square`, lesson: 'r1-cisla20' },
    { tex: String.raw`\pm`, name: 'Plus mínus', note: 'Dve možnosti naraz: so znamienkom plus aj so znamienkom mínus.', ex: String.raw`x = \pm 3 \;\Leftrightarrow\; x = 3 \text{ alebo } x = -3`, lesson: 's1-vyrazy' },
    { tex: String.raw`|x|`, name: 'Absolútna hodnota', note: 'Vzdialenosť čísla od nuly na číselnej osi – vždy nezáporná.', ex: String.raw`|-5| = 5,\quad |3| = 3`, lesson: 'r6-cele' },
    { tex: String.raw`a^{n}`, name: 'Mocnina', note: 'Súčin n rovnakých činiteľov a; a je základ, n exponent.', ex: String.raw`2^{3} = 2\cdot 2\cdot 2 = 8`, lesson: 'r8-mocniny' },
    { tex: String.raw`\sqrt{a}\quad \sqrt[n]{a}`, name: 'Druhá a n-tá odmocnina', note: 'Nezáporné číslo, ktorého druhá (n-tá) mocnina je a.', ex: String.raw`\sqrt{49} = 7,\quad \sqrt[3]{8} = 2`, lesson: 'r8-mocniny' },
    { tex: String.raw`\%`, name: 'Percento', note: 'Stotina celku: 1 % = 1/100.', ex: String.raw`20\,\% \text{ z } 50 = 10`, lesson: 'percenta' },
    { tex: String.raw`\pi`, name: 'Ludolfovo číslo pí', note: 'Pomer obvodu kruhu k jeho priemeru, približne 3,14.', ex: String.raw`o = 2\pi r`, lesson: 'obsah' },
    { tex: String.raw`\infty`, name: 'Nekonečno', note: 'Nie je to číslo; označuje neohraničený rast (napr. pri intervaloch a limitách).', ex: String.raw`(2; \infty)`, lesson: 's1-obory' },
    { tex: String.raw`n!`, name: 'Faktoriál', note: 'Súčin všetkých prirodzených čísel od 1 po n; 0! = 1.', ex: String.raw`4! = 4\cdot 3\cdot 2\cdot 1 = 24`, lesson: 's3-kombinatorika' },
    { tex: String.raw`a \mid b\quad a \nmid b`, name: 'Delí, nedelí', note: 'a je (nie je) deliteľom čísla b – b sa dá (nedá) vydeliť a bezo zvyšku.', ex: String.raw`3 \mid 12,\quad 5 \nmid 12`, lesson: 's1-delitelnost' },
    { tex: String.raw`D(a, b)\quad n(a, b)`, name: 'Najväčší spoločný deliteľ, najmenší spoločný násobok', note: 'Označenie NSD a nsn dvoch čísel (vo VŠ aj NSD(a, b)).', ex: String.raw`D(12, 18) = 6,\quad n(12, 18) = 36`, lesson: 'r6-nsd-nsn' },
    { tex: String.raw`a \equiv b \pmod{n}`, name: 'Kongruencia (zvyšky)', note: 'a a b dávajú po delení číslom n rovnaký zvyšok.', ex: String.raw`17 \equiv 2 \pmod{5}`, lesson: 'v5-dokazy' }
  ] },
  { id: 'mnoziny', icon: '🧩', title: 'Množiny a logika', items: [
    { tex: String.raw`\in\quad \notin`, name: 'Patrí, nepatrí', note: 'Prvok je (nie je) prvkom množiny.', ex: String.raw`3 \in \{1; 2; 3\},\quad 5 \notin \{1; 2; 3\}`, lesson: 'mnoziny' },
    { tex: String.raw`\subset\quad \subseteq`, name: 'Podmnožina', note: 'Každý prvok prvej množiny patrí aj do druhej.', ex: String.raw`\mathbb{N} \subset \mathbb{Z}`, lesson: 'mnoziny' },
    { tex: String.raw`\cup`, name: 'Zjednotenie', note: 'Všetky prvky, ktoré patria aspoň do jednej z množín.', ex: String.raw`\{1; 2\} \cup \{2; 3\} = \{1; 2; 3\}`, lesson: 'mnoziny' },
    { tex: String.raw`\cap`, name: 'Prienik', note: 'Prvky, ktoré patria do oboch množín.', ex: String.raw`\{1; 2\} \cap \{2; 3\} = \{2\}`, lesson: 'mnoziny' },
    { tex: String.raw`A \setminus B`, name: 'Rozdiel množín', note: 'Prvky množiny A, ktoré nepatria do B.', ex: String.raw`\{1; 2; 3\} \setminus \{2\} = \{1; 3\}`, lesson: 'mnoziny' },
    { tex: String.raw`\emptyset`, name: 'Prázdna množina', note: 'Množina bez jediného prvku.', ex: String.raw`\{1\} \cap \{2\} = \emptyset`, lesson: 'mnoziny' },
    { tex: String.raw`\mathbb{N}\;\; \mathbb{Z}\;\; \mathbb{Q}\;\; \mathbb{R}\;\; \mathbb{C}`, name: 'Číselné obory', note: 'Prirodzené, celé, racionálne, reálne a komplexné čísla.', ex: String.raw`\tfrac{1}{2} \in \mathbb{Q},\quad \sqrt{2} \in \mathbb{R}`, lesson: 's1-obory' },
    { tex: String.raw`\langle a; b\rangle\quad (a; b)`, name: 'Uzavretý a otvorený interval', note: 'Všetky reálne čísla medzi a a b. Lomená zátvorka krajný bod zahŕňa, okrúhla nie.', ex: String.raw`x \in \langle 1; 3) \Leftrightarrow 1 \le x < 3`, lesson: 's1-obory' },
    { tex: String.raw`\neg A`, name: 'Negácia', note: 'Opak výroku A: „nie je pravda, že A“. Pravdivá práve vtedy, keď A je nepravdivý.', ex: String.raw`\neg(3 > 5) \text{ je pravdivý výrok}`, lesson: 'v5-vyrokova' },
    { tex: String.raw`A \land B`, name: 'Konjunkcia (a)', note: 'Pravdivá, len ak sú pravdivé oba výroky.', ex: String.raw`(2 < 3) \land (3 < 4)`, lesson: 'v5-vyrokova' },
    { tex: String.raw`A \lor B`, name: 'Disjunkcia (alebo)', note: 'Pravdivá, ak je pravdivý aspoň jeden z výrokov.', ex: String.raw`(x < 0) \lor (x \ge 0)`, lesson: 'v5-vyrokova' },
    { tex: String.raw`A \Rightarrow B`, name: 'Implikácia (ak…, tak…)', note: 'Nepravdivá len vtedy, keď A je pravdivý a B nepravdivý.', ex: String.raw`x = 2 \Rightarrow x^{2} = 4`, lesson: 'v5-vyrokova' },
    { tex: String.raw`A \Leftrightarrow B`, name: 'Ekvivalencia (práve vtedy, keď)', note: 'Oba výroky majú rovnakú pravdivostnú hodnotu. Pri úpravách rovníc znamená, že rovnice majú rovnaké riešenia.', ex: String.raw`2x = 6 \Leftrightarrow x = 3`, lesson: 'v5-vyrokova' },
    { tex: String.raw`\forall`, name: 'Pre všetky', note: 'Všeobecný kvantifikátor: tvrdenie platí pre každý prvok.', ex: String.raw`\forall x \in \mathbb{R}: x^{2} \ge 0`, lesson: 'v2-postupnosti' },
    { tex: String.raw`\exists`, name: 'Existuje', note: 'Existenčný kvantifikátor: aspoň jeden prvok má danú vlastnosť.', ex: String.raw`\exists x \in \mathbb{Z}: x^{2} = 4`, lesson: 'v2-postupnosti' }
  ] },
  { id: 'funkcie', icon: '📈', title: 'Funkcie', items: [
    { tex: String.raw`f(x)`, name: 'Hodnota funkcie', note: 'Hodnota funkcie f v bode x.', ex: String.raw`f(x) = 2x + 1,\; f(3) = 7`, lesson: 'r9-funkcie' },
    { tex: String.raw`D(f)\quad H(f)`, name: 'Definičný obor a obor hodnôt', note: 'Čísla, ktoré môžeme do funkcie dosadiť, a hodnoty, ktoré funkcia nadobúda.', ex: String.raw`f(x) = \sqrt{x}:\; D(f) = \langle 0; \infty)`, lesson: 's2-funkcia' },
    { tex: String.raw`x \mapsto f(x)`, name: 'Priradenie', note: 'Funkcia (zobrazenie) priradí číslu x hodnotu f(x).', ex: String.raw`x \mapsto x^{2}`, lesson: 'v2-postupnosti' },
    { tex: String.raw`f^{-1}`, name: 'Inverzná funkcia', note: 'Funkcia, ktorá „vráti“ pôvodnú hodnotu: ak f(a) = b, tak f⁻¹(b) = a.', ex: String.raw`f(x) = 2x \Rightarrow f^{-1}(x) = \tfrac{x}{2}`, lesson: 's4-zlozene-inverzne' },
    { tex: String.raw`g \circ f`, name: 'Zložená funkcia', note: 'Najprv sa použije f, potom g: (g ∘ f)(x) = g(f(x)).', ex: String.raw`f(x) = x + 1,\; g(x) = x^{2}:\; (g\circ f)(x) = (x+1)^{2}`, lesson: 's4-zlozene-inverzne' },
    { tex: String.raw`\sin\;\; \cos\;\; \mathrm{tg}\;\; \mathrm{cotg}`, name: 'Goniometrické funkcie', note: 'Sínus, kosínus, tangens a kotangens uhla (tangens sa inde píše aj tan).', ex: String.raw`\sin 30^\circ = \tfrac{1}{2}`, lesson: 'goniometria' },
    { tex: String.raw`\log_{a} x\quad \ln x`, name: 'Logaritmus', note: 'Exponent, na ktorý treba umocniť základ a, aby vyšlo x; ln je logaritmus so základom e.', ex: String.raw`\log_{2} 8 = 3`, lesson: 's2-logaritmy' },
    { tex: String.raw`e`, name: 'Eulerovo číslo', note: 'Základ prirodzeného logaritmu, približne 2,718.', ex: String.raw`\ln e = 1`, lesson: 's2-exponencialne' },
    { tex: String.raw`\mathrm{sgn}\, x`, name: 'Znamienko čísla (signum)', note: '1 pre kladné, −1 pre záporné čísla a 0 pre nulu.', ex: String.raw`\mathrm{sgn}(-4) = -1`, lesson: 'v1-determinant' }
  ] },
  { id: 'geometria', icon: '📐', title: 'Geometria a vektory', items: [
    { tex: String.raw`^\circ`, name: 'Stupeň', note: 'Jednotka veľkosti uhla; plný uhol má 360°.', ex: String.raw`\alpha = 90^\circ`, lesson: 'r6-uhly' },
    { tex: String.raw`\angle ABC`, name: 'Uhol', note: 'Uhol s vrcholom B a ramenami BA a BC. Uhly sa často označujú aj gréckymi písmenami α, β, γ.', ex: String.raw`|\angle ABC| = 60^\circ`, lesson: 'r6-uhly' },
    { tex: String.raw`\triangle ABC`, name: 'Trojuholník', note: 'Trojuholník s vrcholmi A, B, C.', ex: String.raw`\triangle ABC \sim \triangle KLM`, lesson: 'r9-podobnost' },
    { tex: String.raw`|AB|`, name: 'Dĺžka úsečky', note: 'Vzdialenosť bodov A a B.', ex: String.raw`|AB| = 5\,\text{cm}`, lesson: 'r6-osova' },
    { tex: String.raw`\perp\quad \parallel`, name: 'Kolmé, rovnobežné', note: 'Priamky zvierajú pravý uhol, resp. sa nepretínajú a majú rovnaký smer.', ex: String.raw`p \perp q,\quad p \parallel r`, lesson: 's4-mat-geometria' },
    { tex: String.raw`\cong\quad \sim`, name: 'Zhodné, podobné', note: 'Útvary sa dajú presne prekryť, resp. jeden je zväčšeninou alebo zmenšeninou druhého.', ex: String.raw`\triangle ABC \cong \triangle DEF`, lesson: 's1-zhodnost' },
    { tex: String.raw`A[x; y]`, name: 'Bod a jeho súradnice', note: 'Bod A so súradnicami x a y v súradnicovej sústave (inde aj A(x, y)).', ex: String.raw`A[3; -2]`, lesson: 'r9-cisla' },
    { tex: String.raw`\vec{u}\quad \overrightarrow{AB}`, name: 'Vektor', note: 'Orientovaná úsečka – má veľkosť aj smer.', ex: String.raw`\vec{u} = (3; 4),\; |\vec{u}| = 5`, lesson: 's3-vektory' },
    { tex: String.raw`\vec{u}\cdot\vec{v}\quad \vec{u}\times\vec{v}`, name: 'Skalárny a vektorový súčin', note: 'Skalárny súčin je číslo, vektorový súčin je vektor kolmý na oba vektory.', ex: String.raw`(1; 2)\cdot(3; 4) = 11`, lesson: 's3-vektory' }
  ] },
  { id: 'analyza', icon: '∫', title: 'Postupnosti a matematická analýza', items: [
    { tex: String.raw`a_{n}`, name: 'Člen postupnosti', note: 'n-tý člen postupnosti; index n hovorí, o ktorý člen ide.', ex: String.raw`a_{n} = 2n:\; a_{3} = 6`, lesson: 's3-postupnosti' },
    { tex: String.raw`\sum`, name: 'Súčet (suma)', note: 'Súčet členov od dolnej po hornú hranicu.', ex: String.raw`\sum_{k=1}^{4} k = 1 + 2 + 3 + 4 = 10`, lesson: 's4-charakteristiky' },
    { tex: String.raw`\prod`, name: 'Súčin', note: 'Súčin členov od dolnej po hornú hranicu.', ex: String.raw`\prod_{k=1}^{4} k = 24`, lesson: 'v6-cisla' },
    { tex: String.raw`\lim\quad \to`, name: 'Limita, blíži sa k', note: 'Hodnota, ku ktorej sa výraz blíži, keď sa premenná blíži k danému číslu alebo do nekonečna.', ex: String.raw`\lim_{n\to\infty} \tfrac{1}{n} = 0`, lesson: 's4-limita' },
    { tex: String.raw`f'(x)\quad \frac{\mathrm{d}y}{\mathrm{d}x}`, name: 'Derivácia', note: 'Okamžitá rýchlosť zmeny funkcie – smernica dotyčnice ku grafu.', ex: String.raw`(x^{2})' = 2x`, lesson: 'derivacie' },
    { tex: String.raw`\int`, name: 'Integrál', note: 'Neurčitý integrál je primitívna funkcia, určitý integrál obsah plochy pod grafom.', ex: String.raw`\int_{0}^{1} x\,\mathrm{d}x = \tfrac{1}{2}`, lesson: 'integraly' },
    { tex: String.raw`\frac{\partial f}{\partial x}`, name: 'Parciálna derivácia', note: 'Derivácia funkcie viacerých premenných podľa jednej premennej, ostatné sa berú ako konštanty.', ex: String.raw`\frac{\partial}{\partial x}(x^{2}y) = 2xy`, lesson: 'v2-parcialne' },
    { tex: String.raw`\nabla f`, name: 'Gradient', note: 'Vektor parciálnych derivácií – smer najrýchlejšieho rastu funkcie.', ex: String.raw`\nabla(x^{2} + y^{2}) = (2x; 2y)`, lesson: 'v2-parcialne' },
    { tex: String.raw`\iint\quad \oint`, name: 'Dvojný a krivkový integrál', note: 'Integrál cez rovinnú oblasť, resp. po uzavretej krivke.', ex: String.raw`\iint_{D} 1\,\mathrm{d}x\,\mathrm{d}y = \text{obsah } D`, lesson: 'v2-dvojny' }
  ] },
  { id: 'statistika', icon: '🎲', title: 'Kombinatorika, pravdepodobnosť a štatistika', items: [
    { tex: String.raw`\binom{n}{k}`, name: 'Kombinačné číslo', note: 'Počet spôsobov, ako vybrať k prvkov z n bez ohľadu na poradie.', ex: String.raw`\binom{5}{2} = 10`, lesson: 's3-kombinacie' },
    { tex: String.raw`\Omega`, name: 'Množina všetkých výsledkov', note: 'Všetky možné výsledky náhodného pokusu.', ex: String.raw`\Omega = \{1; 2; 3; 4; 5; 6\}`, lesson: 's3-pravdepodobnost' },
    { tex: String.raw`P(A)`, name: 'Pravdepodobnosť javu', note: 'Číslo od 0 do 1, ktoré vyjadruje, ako často jav A nastane.', ex: String.raw`P(\text{šestka}) = \tfrac{1}{6}`, lesson: 's3-pravdepodobnost' },
    { tex: String.raw`P(A \mid B)`, name: 'Podmienená pravdepodobnosť', note: 'Pravdepodobnosť javu A, ak vieme, že nastal jav B.', ex: String.raw`P(A\mid B) = \frac{P(A\cap B)}{P(B)}`, lesson: 'v4-podmienena' },
    { tex: String.raw`\bar{x}`, name: 'Aritmetický priemer', note: 'Súčet hodnôt vydelený ich počtom.', ex: String.raw`\bar{x} = \frac{2 + 4 + 9}{3} = 5`, lesson: 's4-statisticky-subor' },
    { tex: String.raw`E(X)\quad \mu`, name: 'Stredná hodnota', note: 'Priemerná hodnota náhodnej veličiny X v dlhom horizonte.', ex: String.raw`E(X) = \sum x_i\,p_i`, lesson: 'v4-diskretna' },
    { tex: String.raw`D(X)\quad \sigma`, name: 'Rozptyl a smerodajná odchýlka', note: 'Ako veľmi sú hodnoty rozptýlené okolo strednej hodnoty; σ je odmocnina z rozptylu.', ex: String.raw`\sigma = \sqrt{D(X)}`, lesson: 'v4-diskretna' },
    { tex: String.raw`X \sim N(\mu; \sigma^{2})`, name: 'Má rozdelenie', note: 'Náhodná veličina X má dané rozdelenie pravdepodobnosti (tu normálne).', ex: String.raw`X \sim N(100; 15^{2})`, lesson: 'v4-normalne' }
  ] },
  { id: 'algebra', icon: '🔲', title: 'Matice a komplexné čísla', items: [
    { tex: String.raw`A^{T}`, name: 'Transponovaná matica', note: 'Matica, ktorej riadky sú stĺpcami pôvodnej matice.', ex: String.raw`\begin{pmatrix}1&2\\3&4\end{pmatrix}^{T} = \begin{pmatrix}1&3\\2&4\end{pmatrix}`, lesson: 'matice' },
    { tex: String.raw`A^{-1}`, name: 'Inverzná matica', note: 'Matica, pre ktorú platí A·A⁻¹ = E (jednotková matica).', ex: String.raw`A\cdot A^{-1} = E`, lesson: 'v1-inverzna' },
    { tex: String.raw`\det A`, name: 'Determinant', note: 'Číslo priradené štvorcovej matici; matica je regulárna, ak det A ≠ 0.', ex: String.raw`\det\begin{pmatrix}1&2\\3&4\end{pmatrix} = -2`, lesson: 'v1-determinant' },
    { tex: String.raw`h(A)`, name: 'Hodnosť matice', note: 'Maximálny počet lineárne nezávislých riadkov matice.', ex: String.raw`h\begin{pmatrix}1&2\\2&4\end{pmatrix} = 1`, lesson: 'v1-hodnost' },
    { tex: String.raw`\dim V`, name: 'Dimenzia priestoru', note: 'Počet vektorov bázy vektorového priestoru.', ex: String.raw`\dim \mathbb{R}^{3} = 3`, lesson: 'v1-priestory' },
    { tex: String.raw`i`, name: 'Imaginárna jednotka', note: 'Číslo, ktorého druhá mocnina je −1.', ex: String.raw`i^{2} = -1`, lesson: 'v2-komplexne' },
    { tex: String.raw`\overline{z}`, name: 'Komplexne združené číslo', note: 'Číslo s opačnou imaginárnou časťou.', ex: String.raw`\overline{3 + 2i} = 3 - 2i`, lesson: 'v2-komplexne' },
    { tex: String.raw`\mathrm{Re}\, z\quad \mathrm{Im}\, z`, name: 'Reálna a imaginárna časť', note: 'Pre z = a + bi je Re z = a a Im z = b.', ex: String.raw`\mathrm{Im}(3 + 2i) = 2`, lesson: 'v2-komplexne' }
  ] }
];
