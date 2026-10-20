/* Deutsch: preklad js/rocniky/v1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/v1/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "v1-vektory": {
   "title": "Vektoren im Rⁿ und lineare Abhängigkeit",
   "summary": "Rechnen mit Vektoren, Linearkombination, lineare Hülle, lineare Abhängigkeit und Unabhängigkeit.",
   "theory": [
    "<p>Ein <strong>Vektor</strong> im $\\mathbb{R}^n$ ist ein geordnetes $n$-Tupel reeller Zahlen $u=(u_1, u_2, \\dots, u_n)$. Vektoren werden komponentenweise addiert und mit einer reellen Zahl (einem Skalar) multipliziert: $u+v=(u_1+v_1, \\dots, u_n+v_n)$ und $c\\,u=(c\\,u_1, \\dots, c\\,u_n)$. Den Nullvektor bezeichnen wir mit $o=(0, \\dots, 0)$.</p>",
    "<p>Eine <strong>Linearkombination</strong> der Vektoren $u_1, \\dots, u_k$ ist jeder Vektor der Form $c_1u_1+c_2u_2+\\dots+c_ku_k$, wobei $c_1, \\dots, c_k\\in\\mathbb{R}$ die Koeffizienten sind. Die Menge aller Linearkombinationen heißt <strong>lineare Hülle</strong> (Spann) und wird mit $\\mathcal{L}(u_1, \\dots, u_k)$ bezeichnet.</p>",
    {
     "fig": "v1-linkomb",
     "caption": "Die Vektoren $u=(2, 1)$ und $v=(-1, 2)$ sind nicht parallel, deshalb lässt sich jeder Vektor der Ebene als $\\alpha u+\\beta v$ schreiben. Verschiebe die Koeffizienten $\\alpha$ und $\\beta$ und beobachte, wie sich der resultierende (orange) Vektor verändert."
    },
    "<p>Die Vektoren $u_1, \\dots, u_k$ sind <strong>linear unabhängig</strong>, wenn aus der Gleichung $c_1u_1+\\dots+c_ku_k=o$ folgt, dass $c_1=\\dots=c_k=0$. Andernfalls sind sie <strong>linear abhängig</strong>; das ist genau dann der Fall, wenn sich mindestens einer von ihnen als Linearkombination der übrigen darstellen lässt.</p>\n       <p>In der Praxis schreiben wir die Vektoren als Zeilen einer Matrix $A$: Sie sind genau dann unabhängig, wenn $h(A)=k$ (zum Rang siehe die folgenden Lektionen). Für $n$ Vektoren im $\\mathbb{R}^n$ genügt es zu prüfen, ob $\\det A\\neq 0$. Mehr als $n$ Vektoren im $\\mathbb{R}^n$ sind immer linear abhängig, und jede Menge, die den Nullvektor enthält, ist abhängig.</p>"
   ],
   "examples": [
    {
     "task": "Untersuche, ob die Vektoren $u=(1, 2, 0)$, $v=(0, 1, 1)$ und $w=(2, 5, 1)$ linear abhängig sind.",
     "steps": [
      "Wir schreiben die Vektoren als Zeilen einer Matrix und berechnen die Determinante durch Entwicklung nach der 1. Zeile:",
      "$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.",
      "Die Determinante ist null, also sind die Vektoren <strong>linear abhängig</strong>. Tatsächlich gilt $w=2u+v$."
     ]
    },
    {
     "task": "Stelle den Vektor $w=(4, 7)$ als Linearkombination der Vektoren $u=(2, 1)$ und $v=(-1, 2)$ dar.",
     "steps": [
      "Wir suchen $\\alpha, \\beta$ mit $\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$, d. h. das Gleichungssystem $2\\alpha-\\beta=4$, $\\alpha+2\\beta=7$.",
      "Aus der zweiten Gleichung folgt $\\alpha=7-2\\beta$; Einsetzen ergibt $14-4\\beta-\\beta=4$, also $\\beta=2$ und $\\alpha=3$.",
      "<strong>Ergebnis:</strong> $w=3u+2v$."
     ]
    }
   ]
  },
  "v1-operacie": {
   "title": "Matrizen und Matrizenoperationen",
   "summary": "Typ einer Matrix, spezielle Matrizen, Addition, Multiplikation mit einem Skalar, Transposition und Spur.",
   "theory": [
    "<p>Eine <strong>Matrix</strong> vom Typ $m\\times n$ ist ein rechteckiges Schema $A=(a_{ij})$ reeller Zahlen mit $m$ Zeilen und $n$ Spalten. Zwei Matrizen sind gleich, wenn sie denselben Typ und an denselben Stellen dieselben Einträge haben. Eine Matrix vom Typ $n\\times n$ ist <strong>quadratisch</strong> der Ordnung $n$; die Einträge $a_{11}, a_{22}, \\dots, a_{nn}$ bilden ihre <strong>Hauptdiagonale</strong>. Wichtig sind die <strong>Einheitsmatrix</strong> $I$ (Einsen auf der Diagonale, sonst Nullen), die <strong>Nullmatrix</strong> $O$, die <strong>Diagonalmatrix</strong> sowie die <strong>obere (untere) Dreiecksmatrix</strong> (Nullen unterhalb (oberhalb) der Diagonale).</p>",
    "<p>Die <strong>Summe</strong> von Matrizen desselben Typs und das <strong>Vielfache</strong> einer Matrix berechnen wir eintragsweise: $(A+B)_{ij}=a_{ij}+b_{ij}$, $(cA)_{ij}=c\\,a_{ij}$. Es gilt $A+B=B+A$, $(A+B)+C=A+(B+C)$, $c(A+B)=cA+cB$, $(c+d)A=cA+dA$. Die Matrizen vom Typ $m\\times n$ bilden mit diesen Operationen einen Vektorraum.</p>",
    "<p>Die <strong>transponierte</strong> Matrix $A^{T}$ zu einer Matrix vom Typ $m\\times n$ ist vom Typ $n\\times m$, und es gilt $(A^{T})_{ij}=a_{ji}$ – die Zeilen werden zu Spalten. Es gilt $(A^{T})^{T}=A$, $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$ und $(AB)^{T}=B^{T}A^{T}$ (die Reihenfolge kehrt sich um).</p>\n       <p>Eine quadratische Matrix ist <strong>symmetrisch</strong>, wenn $A^{T}=A$, und <strong>schiefsymmetrisch</strong>, wenn $A^{T}=-A$ (dann stehen auf der Diagonale Nullen). Jede quadratische Matrix lässt sich eindeutig als Summe $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$ aus einem symmetrischen und einem schiefsymmetrischen Anteil zerlegen. Die <strong>Spur</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$ ist die Summe der Diagonaleinträge; für jede Matrix ist $\\operatorname{tr}(A^{T}A)$ die Summe der Quadrate aller ihrer Einträge.</p>"
   ],
   "examples": [
    {
     "task": "Berechne für $A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$ und $B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$ den Ausdruck $2A-B^{T}$.",
     "steps": [
      "$B$ ist vom Typ $3\\times 2$, also ist $B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$ vom Typ $2\\times 3$ wie $A$.",
      "$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.",
      "<strong>Ergebnis:</strong> $2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$."
     ]
    },
    {
     "task": "Zerlege die Matrix $A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$ in die Summe einer symmetrischen und einer schiefsymmetrischen Matrix.",
     "steps": [
      "$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.",
      "Symmetrischer Anteil: $S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$.",
      "Schiefsymmetrischer Anteil: $K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$. Probe: $S+K=A$."
     ]
    }
   ]
  },
  "v1-hodnost": {
   "title": "Rang einer Matrix und Zeilenumformungen",
   "summary": "Elementare Zeilenumformungen, Zeilenstufenform, gaußsches Eliminationsverfahren und Rang einer Matrix.",
   "theory": [
    "<p><strong>Elementare Zeilenumformungen</strong> sind: (1) Vertauschen zweier Zeilen, (2) Multiplizieren einer Zeile mit einer von null verschiedenen Zahl, (3) Addieren eines Vielfachen einer anderen Zeile zu einer Zeile. Entsteht $B$ aus $A$ durch endlich viele solcher Umformungen, schreiben wir $A\\sim B$ (die Matrizen sind zeilenäquivalent). Die Schreibweise $R_2-3R_1$ bedeutet, dass wir die zweite Zeile durch die Differenz aus der zweiten Zeile und dem Dreifachen der ersten ersetzen.</p>",
    "<p>Eine Matrix ist in <strong>Zeilenstufenform</strong>, wenn jede von null verschiedene Zeile mit mehr Nullen beginnt als die Zeile darüber und die Nullzeilen am Ende stehen. Der erste von null verschiedene Eintrag einer Zeile ist ihr <strong>Pivotelement</strong>. Das <strong>gaußsche Eliminationsverfahren</strong> bringt jede Matrix auf Zeilenstufenform: In der aktuellen Spalte wählen wir ein Pivotelement und eliminieren mit Umformung (3) alle Einträge darunter. Bringen wir zusätzlich die Pivotelemente auf 1 und eliminieren auch die Einträge darüber, erhalten wir die reduzierte Form (Gauß-Jordan-Verfahren).</p>",
    {
     "fig": "v1-stupne",
     "caption": "Zeilenstufenform: Die Pivotelemente rücken nach unten hin nach rechts. Die Matrix hat drei von null verschiedene Zeilen, deshalb ist $h(A)=3$."
    },
    "<p>Der <strong>Rang</strong> $h(A)$ ist die maximale Anzahl linear unabhängiger Zeilen der Matrix $A$. Zeilenumformungen ändern den Rang nicht, deshalb ist $h(A)$ die Anzahl der von null verschiedenen Zeilen der Zeilenstufenform. Es gilt $h(A)=h(A^{T})$ (Zeilenrang gleich Spaltenrang) und $h(A)\\le\\min(m, n)$. Für eine quadratische Matrix der Ordnung $n$ gilt: $h(A)=n\\iff\\det A\\neq 0\\iff A$ ist regulär.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme den Rang der Matrix $A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$.",
     "steps": [
      "$R_2-2R_1$, $R_3-3R_1$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.",
      "Die Zeilenstufenform hat zwei von null verschiedene Zeilen, also ist $h(A)=2$."
     ]
    },
    {
     "task": "Für welche $a$ hat die Matrix $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$ den Rang 2?",
     "steps": [
      "$R_2-R_1$, $R_3-2R_1$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.",
      "Für $a=4$ ist die letzte Zeile eine Nullzeile und $h(A)=2$; für $a\\neq 4$ ist $h(A)=3$."
     ]
    }
   ]
  },
  "v1-determinant": {
   "title": "Determinante 3×3 und laplacescher Entwicklungssatz",
   "summary": "Regel von Sarrus, Minoren und Kofaktoren, laplacescher Entwicklungssatz, Eigenschaften der Determinante.",
   "theory": [
    "<p>Die <strong>Determinante</strong> einer quadratischen Matrix der Ordnung $n$ ist die Zahl $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$, wobei über alle $n!$ Permutationen $\\pi$ der Menge $\\{1, \\dots, n\\}$ summiert wird. Für $n=3$ erhalten wir die <strong>Regel von Sarrus</strong>:</p>\n       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>",
    {
     "fig": "v1-sarrus",
     "caption": "Regel von Sarrus: Wir schreiben die ersten beiden Spalten noch einmal rechts neben die Matrix. Die Produkte entlang der Diagonalen nach rechts unten nehmen wir mit Pluszeichen, die nach links unten mit Minuszeichen. Die Regel gilt <strong>nur</strong> für Matrizen der Ordnung 3."
    },
    "<p>Der <strong>Minor</strong> $M_{ij}$ ist die Determinante der Matrix, die durch Streichen der $i$-ten Zeile und der $j$-ten Spalte entsteht, und der <strong>Kofaktor</strong> (das algebraische Komplement) ist $A_{ij}=(-1)^{i+j}M_{ij}$. <strong>Laplacescher Entwicklungssatz</strong> nach der $i$-ten Zeile: $\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$ (analog nach einer Spalte). Am günstigsten entwickelt man nach einer Zeile oder Spalte mit möglichst vielen Nullen.</p>",
    "<p><strong>Eigenschaften:</strong> $\\det A^{T}=\\det A$; das Vertauschen zweier Zeilen ändert das Vorzeichen; das Multiplizieren einer Zeile mit der Zahl $c$ multipliziert die Determinante mit $c$, deshalb gilt $\\det(cA)=c^{n}\\det A$; das Addieren eines Vielfachen einer anderen Zeile ändert die Determinante nicht; eine Matrix mit einer Nullzeile oder mit zwei proportionalen Zeilen hat die Determinante 0; die Determinante einer Dreiecksmatrix ist das Produkt der Diagonaleinträge. Für Matrizen gleicher Ordnung gilt $\\det(AB)=\\det A\\cdot\\det B$, und ist $A$ regulär, so gilt $\\det A^{-1}=\\frac{1}{\\det A}$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "Positive Terme: $2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$.",
      "Negative Terme: $3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$.",
      "<strong>Ergebnis:</strong> $\\det A=2-13=-11$."
     ]
    },
    {
     "task": "Berechne $\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$.",
     "steps": [
      "In der 3. Zeile steht als einziger von null verschiedener Eintrag $a_{32}=3$. Entwicklung nach der 3. Zeile: $\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$.",
      "$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$ (Regel von Sarrus).",
      "<strong>Ergebnis:</strong> $\\det A=-3\\cdot 6=-18$."
     ]
    }
   ]
  },
  "v1-inverzna": {
   "title": "Inverse Matrix: Gauß-Jordan und adjungierte Matrix",
   "summary": "Existenz der inversen Matrix, Berechnung mit dem Gauß-Jordan-Verfahren und über die adjungierte Matrix, Matrizengleichungen.",
   "theory": [
    "<p>Zu einer quadratischen Matrix $A$ der Ordnung $n$ ist die <strong>inverse</strong> Matrix $A^{-1}$ diejenige Matrix mit $AA^{-1}=A^{-1}A=I$. Sie existiert genau dann, wenn $\\det A\\neq 0$ (die Matrix ist <strong>regulär</strong>); eine Matrix mit Determinante null ist <strong>singulär</strong>. Es gilt $(A^{-1})^{-1}=A$, $(A^{T})^{-1}=(A^{-1})^{T}$ und $(AB)^{-1}=B^{-1}A^{-1}$.</p>",
    "<p><strong>Gauß-Jordan-Verfahren:</strong> Die erweiterte Matrix $(A\\mid I)$ bringen wir durch Zeilenumformungen auf die Form $(I\\mid B)$; dann ist $B=A^{-1}$. Entsteht dabei links eine Nullzeile, so ist die Matrix $A$ singulär.</p>",
    "<p>Die <strong>adjungierte Matrix</strong> (Adjunkte) $\\operatorname{adj}A$ ist die transponierte Matrix der Kofaktoren: $(\\operatorname{adj}A)_{ij}=A_{ji}$. Es gilt $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$, also $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ – Achtung, die Indizes werden vertauscht. Für $n=2$ erhalten wir die bekannte Formel $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    "<p><strong>Matrizengleichungen:</strong> Ist $A$ regulär, so hat die Gleichung $AX=B$ die eindeutige Lösung $X=A^{-1}B$ und die Gleichung $XA=B$ die Lösung $X=BA^{-1}$. Da die Matrizenmultiplikation nicht kommutativ ist, kommt es darauf an, von welcher Seite wir multiplizieren.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme mit dem Gauß-Jordan-Verfahren die inverse Matrix zu $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$; $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "$R_2-R_3$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$; $R_1-2R_2$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "<strong>Ergebnis:</strong> $A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$ (Probe: $AA^{-1}=I$)."
     ]
    },
    {
     "task": "Berechne für $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$ den Eintrag $(A^{-1})_{13}$.",
     "steps": [
      "$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.",
      "$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$, wobei $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$.",
      "<strong>Ergebnis:</strong> $(A^{-1})_{13}=\\frac{1}{8}$."
     ]
    }
   ]
  },
  "v1-sustavy": {
   "title": "Lineare Gleichungssysteme",
   "summary": "Gaußsches Eliminationsverfahren, Satz von Frobenius (Kronecker-Capelli), cramersche Regel und homogene Systeme.",
   "theory": [
    "<p>Ein System aus $m$ linearen Gleichungen mit $n$ Unbekannten schreiben wir in Matrixform als $Ax=b$, wobei $A$ die <strong>Koeffizientenmatrix</strong> ist, $x=(x_1, \\dots, x_n)^{T}$ und $b$ die Spalte der rechten Seiten; $(A\\mid b)$ ist die <strong>erweiterte Matrix</strong>. Das System ist <strong>homogen</strong>, wenn $b=o$.</p>",
    "<p><strong>Satz von Frobenius (Kronecker-Capelli):</strong> Das System $Ax=b$ ist genau dann lösbar, wenn $h(A)=h(A\\mid b)$. Ist $h(A)=h(A\\mid b)=n$, so gibt es genau eine Lösung; ist $h(A)=h(A\\mid b)=h\\lt n$, so gibt es unendlich viele Lösungen, die von $n-h$ Parametern abhängen.</p>",
    {
     "fig": "v1-priamky",
     "caption": "Zwei Gleichungen mit zwei Unbekannten sind zwei Geraden in der Ebene: Sie schneiden sich, sind echt parallel oder fallen zusammen."
    },
    "<p><strong>Gaußsches Eliminationsverfahren:</strong> Wir bringen die erweiterte Matrix auf Zeilenstufenform und berechnen die Unbekannten durch Rückwärtseinsetzen von unten; Unbekannte ohne Pivotelement sind freie Parameter. <strong>Cramersche Regel:</strong> Ist $A$ quadratisch und $D=\\det A\\neq 0$, so gilt $x_i=\\frac{D_i}{D}$, wobei $D_i$ die Determinante der Matrix ist, die aus $A$ entsteht, wenn man die $i$-te Spalte durch die Spalte $b$ ersetzt.</p>\n       <p>Ein <strong>homogenes System</strong> hat immer die triviale Lösung $x=o$. Eine nichttriviale Lösung existiert genau dann, wenn $h(A)\\lt n$ (für eine quadratische Matrix genau dann, wenn $\\det A=0$). Die Menge aller Lösungen ist ein Untervektorraum des $\\mathbb{R}^n$ der Dimension $n-h(A)$.</p>"
   ],
   "examples": [
    {
     "task": "Löse das Gleichungssystem $x_1+x_2+x_3=6$, $2x_1-x_2+x_3=3$, $x_1+2x_2-x_3=2$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$; $R_2-2R_1$, $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.",
      "$R_2\\leftrightarrow R_3$, danach $R_3+3R_2$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$.",
      "Rückwärts: $x_3=3$, $x_2=-4+2\\cdot 3=2$, $x_1=6-2-3=1$. <strong>Lösung:</strong> $(1, 2, 3)$."
     ]
    },
    {
     "task": "Löse das Gleichungssystem $x_1+2x_2-x_3=1$, $2x_1+4x_2+x_3=5$.",
     "steps": [
      "$R_2-2R_1$: $\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$, also $h(A)=h(A\\mid b)=2\\lt 3$ – unendlich viele Lösungen mit einem Parameter.",
      "Aus der 2. Zeile folgt $x_3=1$. Die Unbekannte $x_2$ hat kein Pivotelement, wir wählen $x_2=t$; aus der 1. Zeile folgt $x_1=1-2t+1=2-2t$.",
      "<strong>Lösung:</strong> $(2-2t, t, 1)$, $t\\in\\mathbb{R}$."
     ]
    }
   ]
  },
  "v1-priestory": {
   "title": "Vektorraum, Basis und Dimension",
   "summary": "Vektorraum und Untervektorraum, Basis, Dimension und Koordinaten eines Vektors bezüglich einer Basis.",
   "theory": [
    "<p>Ein <strong>Vektorraum</strong> über $\\mathbb{R}$ ist eine Menge $V$ mit einer Addition und einer Multiplikation mit reellen Zahlen, die nicht aus $V$ herausführen und die üblichen Regeln erfüllen: Kommutativität und Assoziativität der Addition, Existenz des Nullvektors und des Gegenvektors, Distributivgesetze, $(cd)u=c(du)$ und $1\\cdot u=u$. Beispiele: $\\mathbb{R}^n$, Matrizen vom Typ $m\\times n$, Polynome vom Grad höchstens $n$ ($P_n$), reelle Funktionen auf einem Intervall.</p>",
    "<p>Ein <strong>Untervektorraum</strong> ist eine nichtleere Teilmenge $W\\subseteq V$, die abgeschlossen bezüglich Addition und Multiplikation mit einer Zahl ist; dann gilt notwendig $o\\in W$. Untervektorräume des $\\mathbb{R}^3$ sind zum Beispiel Geraden und Ebenen durch den Ursprung, die Lösungsmenge eines homogenen Systems und jede lineare Hülle. Eine Ebene, die nicht durch den Ursprung geht, ist kein Untervektorraum.</p>",
    "<p>Eine <strong>Basis</strong> des Raums $V$ ist eine linear unabhängige Menge von Vektoren, deren lineare Hülle ganz $V$ ist. Alle Basen haben gleich viele Elemente – die <strong>Dimension</strong> $\\dim V$. Zum Beispiel ist $\\dim\\mathbb{R}^n=n$ (Standardbasis $e_1, \\dots, e_n$), $\\dim P_n=n+1$, und der Raum der $m\\times n$-Matrizen hat die Dimension $mn$. In einem Raum der Dimension $n$ bilden je $n$ linear unabhängige Vektoren eine Basis, und $\\dim\\mathcal{L}(u_1, \\dots, u_k)$ ist der Rang der Matrix mit den Zeilen $u_1, \\dots, u_k$.</p>",
    {
     "fig": "v1-baza",
     "caption": "Die Basis $b_1=(2, 1)$, $b_2=(-1, 2)$ erzeugt ein „schiefes“ Gitter. Die Koordinaten $(c_1, c_2)$ eines Vektors bezüglich der Basis $B$ geben an, wie viele Schritte man in Richtung $b_1$ und wie viele in Richtung $b_2$ gehen muss."
    },
    "<p>Ist $B=(b_1, \\dots, b_n)$ eine Basis, so lässt sich jeder Vektor <strong>eindeutig</strong> als $v=c_1b_1+\\dots+c_nb_n$ schreiben; die Zahlen $(c_1, \\dots, c_n)$ sind die <strong>Koordinaten</strong> des Vektors $v$ bezüglich der Basis $B$. Wir finden sie, indem wir das Gleichungssystem lösen, dessen Matrix die Basisvektoren als Spalten hat und dessen rechte Seite $v$ ist.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme die Koordinaten des Vektors $v=(3, 0, 1)$ bezüglich der Basis $b_1=(1, 0, 1)$, $b_2=(0, 1, 1)$, $b_3=(1, 1, 0)$.",
     "steps": [
      "Aus $v=c_1b_1+c_2b_2+c_3b_3$ erhalten wir das System $c_1+c_3=3$, $c_2+c_3=0$, $c_1+c_2=1$.",
      "Subtrahieren der ersten beiden Gleichungen ergibt $c_1-c_2=3$; zusammen mit $c_1+c_2=1$ folgt $c_1=2$, $c_2=-1$ und $c_3=1$.",
      "<strong>Ergebnis:</strong> $(v)_B=(2, -1, 1)$. Probe: $2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$."
     ]
    },
    {
     "task": "Bestimme eine Basis und die Dimension des Untervektorraums $W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$.",
     "steps": [
      "Die Koeffizientenmatrix $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$ ist in Zeilenstufenform und hat den Rang 2, deshalb ist $\\dim W=4-2=2$.",
      "Freie Unbekannte: $x_3=s$, $x_4=t$. Dann ist $x_2=-t$ und $x_1=x_3-x_2=s+t$, also $x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$.",
      "<strong>Ergebnis:</strong> Basis $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$, $\\dim W=2$."
     ]
    }
   ]
  },
  "v1-zobrazenia": {
   "title": "Lineare Abbildungen und ihre Matrizen",
   "summary": "Lineare Abbildung, ihre Abbildungsmatrix, Verkettung von Abbildungen, geometrische Abbildungen in der Ebene, Kern und Bild.",
   "theory": [
    "<p>Eine Abbildung $f:V\\to W$ zwischen Vektorräumen ist <strong>linear</strong>, wenn $f(u+v)=f(u)+f(v)$ und $f(cu)=c\\,f(u)$ für alle Vektoren $u, v$ und Zahlen $c$ gilt; dann ist $f(o)=o$. Jede lineare Abbildung $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ hat die Form $f(x)=Ax$ mit einer eindeutigen Matrix $A$ vom Typ $m\\times n$, deren Spalten die Bilder der Standardbasisvektoren sind: $A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$. Der Verkettung $g\\circ f$ (zuerst $f$, dann $g$) entspricht das Matrizenprodukt $A_gA_f$.</p>",
    "<table class=\"tbl tbl-auto\"><tr><th>Abbildung im $\\mathbb{R}^2$</th><th>Matrix</th></tr>\n       <tr><td>Drehung um den Winkel $\\varphi$</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>\n       <tr><td>Spiegelung an der $x$-Achse</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>\n       <tr><td>Spiegelung an der Geraden $y=x$</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>Orthogonalprojektion auf die $x$-Achse</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>zentrische Streckung mit Faktor $k$</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>",
    {
     "fig": "v1-rotacia",
     "caption": "Drehung um den Winkel $\\varphi$: Die Bilder der Vektoren $e_1$ (blau) und $e_2$ (grün) sind genau die Spalten der Drehmatrix. Die gestrichelte Figur ist das Urbild, die durchgezogene ihr Bild."
    },
    "<p>Der <strong>Kern</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$ ist die Lösungsmenge des homogenen Systems $Ax=o$; das <strong>Bild</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$ ist die lineare Hülle der Spalten der Matrix $A$. Beide sind Untervektorräume, und es gilt $\\dim\\operatorname{Im}f=h(A)$. <strong>Dimensionssatz (Rangsatz):</strong> $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$. Die Abbildung ist genau dann injektiv, wenn $\\operatorname{Ker}f=\\{o\\}$.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme die Matrix der Abbildung, die einen Vektor zuerst um $90^\\circ$ gegen den Uhrzeigersinn dreht und ihn dann an der $x$-Achse spiegelt. Was ist das Bild des Vektors $(2, 1)$?",
     "steps": [
      "Drehung: $R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$, Spiegelung: $S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$. Die Verkettung (zuerst $R$, dann $S$) hat die Matrix $SR$.",
      "$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$ – das ist die Spiegelung an der Geraden $y=-x$.",
      "<strong>Bild:</strong> $SR\\,(2, 1)^{T}=(-1, -2)^{T}$."
     ]
    },
    {
     "task": "Bestimme den Kern und die Dimension des Bildes der Abbildung $f(x)=Ax$ mit $A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "Die dritte Zeile ist die Summe der ersten beiden, deshalb ist $h(A)=2$ und $\\dim\\operatorname{Im}f=2$.",
      "Kern: $x_1+x_2=0$, $x_2+x_3=0$. Für $x_3=t$ ist $x_2=-t$, $x_1=t$, also $\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$.",
      "Probe mit dem Dimensionssatz: $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$."
     ]
    }
   ]
  },
  "v1-vlastne": {
   "title": "Eigenwerte und Eigenvektoren",
   "summary": "Charakteristisches Polynom, Eigenwerte und Eigenvektoren von 2×2- und 3×3-Matrizen, Diagonalisierung und Potenzen einer Matrix.",
   "theory": [
    "<p>Eine Zahl $\\lambda$ ist ein <strong>Eigenwert</strong> der quadratischen Matrix $A$, wenn es einen vom Nullvektor verschiedenen Vektor $v$ mit $Av=\\lambda v$ gibt; der Vektor $v$ ist dann ein <strong>Eigenvektor</strong> zum Eigenwert $\\lambda$. Geometrisch: Die Abbildung $x\\mapsto Ax$ erhält die Richtung des Vektors $v$ und streckt ihn nur um den Faktor $\\lambda$ (bei $\\lambda\\lt 0$ kehrt sie ihn zusätzlich um).</p>",
    "<p>Die Eigenwerte sind die Nullstellen des <strong>charakteristischen Polynoms</strong> $p(\\lambda)=\\det(A-\\lambda I)$. Für eine $2\\times 2$-Matrix ist $p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$. Allgemein ist die Summe der Eigenwerte gleich $\\operatorname{tr}A$ und ihr Produkt gleich $\\det A$; eine Dreiecksmatrix hat ihre Eigenwerte auf der Diagonale. Die Eigenvektoren zu $\\lambda$ sind die vom Nullvektor verschiedenen Lösungen des homogenen Systems $(A-\\lambda I)v=o$.</p>",
    {
     "fig": "v1-matica",
     "caption": "Die Matrix $A$ bildet das Einheitsquadrat auf ein Parallelogramm mit den Seiten $Ae_1$ und $Ae_2$ (den Spalten der Matrix) ab; sein Flächeninhalt ist $|\\det A|$. Die orangen Geraden sind die Eigenrichtungen – Vektoren auf ihnen werden auf Vielfache von sich selbst abgebildet."
    },
    "<p><strong>Diagonalisierung:</strong> Eine Matrix $A$ der Ordnung $n$ ist diagonalisierbar, wenn $A=PDP^{-1}$ mit einer Diagonalmatrix $D$ gilt. Das ist genau dann der Fall, wenn $A$ $n$ linear unabhängige Eigenvektoren besitzt; diese bilden die Spalten der Matrix $P$, und auf der Diagonale von $D$ stehen die zugehörigen Eigenwerte in derselben Reihenfolge. Es genügt, dass $A$ $n$ verschiedene Eigenwerte hat; jede reelle symmetrische Matrix ist diagonalisierbar. Anwendung: $A^k=PD^kP^{-1}$.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme die Eigenwerte und Eigenvektoren der Matrix $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "$\\operatorname{tr}A=7$, $\\det A=10$, also $\\lambda^2-7\\lambda+10=0$ und $\\lambda_1=2$, $\\lambda_2=5$.",
      "$\\lambda=5$: $A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$, Gleichung $-v_1+v_2=0$, Eigenvektor $(1, 1)$.",
      "$\\lambda=2$: $A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$, Gleichung $2v_1+v_2=0$, Eigenvektor $(1, -2)$."
     ]
    },
    {
     "task": "Berechne mithilfe der Diagonalisierung $A^3$ für $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "Aus dem vorigen Beispiel: $P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$, $D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$ und $P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$.",
      "$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.",
      "<strong>Ergebnis:</strong> $A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$."
     ]
    }
   ]
  },
  "v1-skalarny": {
   "title": "Skalarprodukt, Orthogonalität und Projektion",
   "summary": "Skalarprodukt und Norm, Winkel zwischen Vektoren, Orthogonalprojektion und Gram-Schmidt-Verfahren.",
   "theory": [
    "<p>Das <strong>Standardskalarprodukt</strong> im $\\mathbb{R}^n$ ist $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$. Es ist symmetrisch, linear in jedem Argument, und es gilt $\\langle u, u\\rangle\\gt 0$ für $u\\neq o$. Die <strong>Norm</strong> (Länge) ist $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$, der Abstand zweier Vektoren ist $\\|u-v\\|$. Es gilt die <strong>Cauchy-Schwarz-Ungleichung</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$, deshalb ist der Winkel $\\varphi$ zwischen zwei vom Nullvektor verschiedenen Vektoren wohldefiniert: $\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$.</p>",
    "<p>Vektoren sind <strong>orthogonal</strong> ($u\\perp v$), wenn $\\langle u, v\\rangle=0$. Ein System von paarweise orthogonalen, vom Nullvektor verschiedenen Vektoren ist linear unabhängig; haben sie zusätzlich die Norm 1, so ist es <strong>orthonormal</strong>. Die <strong>Orthogonalprojektion</strong> des Vektors $v$ auf die Richtung $u\\neq o$ ist $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$; der Vektor $v-\\operatorname{proj}_u v$ steht senkrecht auf $u$, und seine Norm ist der Abstand des Punktes $v$ von der Geraden $\\mathcal{L}(u)$.</p>",
    {
     "fig": "v1-projekcia",
     "caption": "Projektion des Vektors $v$ (blau) auf die Gerade mit der Richtung $u=(\\cos\\theta, \\sin\\theta)$: Der grüne Vektor ist $\\operatorname{proj}_u v$, die gestrichelte Strecke steht senkrecht auf der Geraden."
    },
    "<p>Das <strong>Gram-Schmidt-Verfahren</strong> erzeugt aus linear unabhängigen Vektoren $u_1, \\dots, u_k$ orthogonale Vektoren mit derselben linearen Hülle: $w_1=u_1$ und $w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$, d. h. von jedem Vektor ziehen wir seine Projektionen auf die bereits gewonnenen Vektoren ab. Durch Division durch die Normen $e_j=w_j/\\|w_j\\|$ erhalten wir eine Orthonormalbasis.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme die Orthogonalprojektion des Vektors $v=(3, 1, 2)$ auf die Richtung $u=(1, 1, 0)$ und den Abstand des Punktes $v$ von der Geraden $\\mathcal{L}(u)$.",
     "steps": [
      "$\\langle v, u\\rangle=3+1+0=4$, $\\langle u, u\\rangle=2$, also $\\operatorname{proj}_u v=2u=(2, 2, 0)$.",
      "$v-\\operatorname{proj}_u v=(1, -1, 2)$; Probe auf Orthogonalität: $\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$.",
      "<strong>Abstand:</strong> $\\|(1, -1, 2)\\|=\\sqrt{6}$."
     ]
    },
    {
     "task": "Orthogonalisiere die Vektoren $u_1=(1, 1, 1)$ und $u_2=(1, 2, 3)$ mit dem Gram-Schmidt-Verfahren.",
     "steps": [
      "$w_1=u_1=(1, 1, 1)$.",
      "$\\langle u_2, w_1\\rangle=6$, $\\langle w_1, w_1\\rangle=3$, also $w_2=u_2-2w_1=(-1, 0, 1)$; tatsächlich ist $\\langle w_1, w_2\\rangle=0$.",
      "Orthonormalbasis: $e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$, $e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$."
     ]
    }
   ]
  },
  "v1-kvadraticke": {
   "title": "Quadratische Formen und Definitheit",
   "summary": "Matrix einer quadratischen Form, Definitheit, Sylvester-Kriterium (Hauptminorenkriterium).",
   "theory": [
    "<p>Eine <strong>quadratische Form</strong> auf dem $\\mathbb{R}^n$ ist eine Funktion $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$, wobei $A$ eine symmetrische Matrix ist – die <strong>Matrix der Form</strong>. Der Koeffizient bei $x_i^2$ ist $a_{ii}$, der Koeffizient bei $x_ix_j$ ($i\\neq j$) ist $2a_{ij}$. Zum Beispiel hat $Q=x_1^2+4x_1x_2-3x_2^2$ die Matrix $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$.</p>",
    "<p>Die Form (und ihre Matrix) ist <strong>positiv definit</strong>, wenn $Q(x)\\gt 0$ für jedes $x\\neq o$; <strong>positiv semidefinit</strong>, wenn $Q(x)\\ge 0$ für alle $x$; analog <strong>negativ (semi)definit</strong>; und <strong>indefinit</strong>, wenn sie sowohl positive als auch negative Werte annimmt. Mithilfe der Eigenwerte: alle positiv $\\iff$ positiv definit, alle nichtnegativ $\\iff$ positiv semidefinit, unterschiedliche Vorzeichen $\\iff$ indefinit.</p>",
    "<p><strong>Sylvester-Kriterium:</strong> Seien $D_1=a_{11}$, $D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$, …, $D_n=\\det A$ die führenden Hauptminoren. Die Form ist positiv definit $\\iff D_k\\gt 0$ für alle $k$; negativ definit $\\iff$ die Vorzeichen wechseln sich ab: $D_1\\lt 0$, $D_2\\gt 0$, $D_3\\lt 0$, … Ist $\\det A\\neq 0$ und tritt keiner der beiden Fälle ein, so ist die Form indefinit. Bei $\\det A=0$ reichen die führenden Hauptminoren für eine Entscheidung über Semidefinitheit nicht aus – man braucht die Eigenwerte oder alle Hauptminoren.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme die Definitheit der Form $Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$.",
     "steps": [
      "Matrix der Form: $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$.",
      "$D_1=2$, $D_2=2\\cdot 1-1\\cdot 1=1$, $D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$.",
      "Alle führenden Hauptminoren sind positiv, die Form ist <strong>positiv definit</strong>."
     ]
    },
    {
     "task": "Für welche $a$ ist die Form $Q=x^2+4xy+ay^2$ positiv definit?",
     "steps": [
      "$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$, $D_1=1\\gt 0$, $D_2=a-4$.",
      "<strong>Ergebnis:</strong> Die Form ist genau für $a\\gt 4$ positiv definit."
     ]
    }
   ]
  }
 },
 "strings": {
  "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.": "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: Die $i$-te Zeile der inversen Matrix bilden die Kofaktoren der $i$-ten <em>Spalte</em> der Matrix $A$.",
  "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Teda $c={@5}$.": "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Also ist $c={@5}$.",
  "$A^{T}={@0}$. Porovnaním s $A$ vidíme, že {@1}.": "$A^{T}={@0}$. Durch Vergleich mit $A$ sehen wir: {@1}.",
  "$B^{T}={@0}$, takže ${@1}={@2}={@3}$.": "$B^{T}={@0}$, also ${@1}={@2}={@3}$.",
  "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Teda $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.": "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Also $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.",
  "$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>{@0}<br>$h(A)={@1}$, teda $\\dim W={@2}-{@3}={@4}$.": "$W$ ist die Lösungsmenge eines homogenen Systems, deshalb $\\dim W=n-h(A)$. Rang der Koeffizientenmatrix:<br>{@0}<br>$h(A)={@1}$, also $\\dim W={@2}-{@3}={@4}$.",
  "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.": "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; die Normen dieser Vektoren sind ganzzahlig.",
  "$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A={@0}$; obe sú teda {@1} a jedno je nulové": "$\\det A=0$, ein Eigenwert ist $0$ und der andere ist gleich $\\operatorname{tr}A={@0}$; beide sind also {@1} und einer ist null",
  "$\\det A={@0}$, teda $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.": "$\\det A={@0}$, also $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.",
  "$\\det A={@0}$. Podľa vzorca $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ potrebujeme algebraické doplnky {@3}. stĺpca: ${@4}$.": "$\\det A={@0}$. Nach der Formel $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ brauchen wir die Kofaktoren der {@3}. Spalte: ${@4}$.",
  "$\\det A={@0}$. Ďalej $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ a ${@5}$. Teda $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.": "$\\det A={@0}$. Weiter ist $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ und ${@5}$. Also $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.",
  "$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov": "$\\det A\\neq 0$ und keiner der vorherigen Fälle ist eingetreten",
  "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ a transponovaním sa determinant nemení. Súčin teda obsahuje $\\det A$ dvakrát.": "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$, und durch Transponieren ändert sich die Determinante nicht. Das Produkt enthält $\\det A$ also zweimal.",
  "$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).": "$\\dim\\operatorname{Im}f=h(A)$, und $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ ist die Anzahl der Spalten der Matrix (Dimension des Urbildraums).",
  "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, teda $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.": "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, also $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.",
  "$\\langle u, v\\rangle={@0}={@1}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t={@2}$.": "$\\langle u, v\\rangle={@0}={@1}$. Die Bedingung $\\langle u, v\\rangle=0$ ergibt $t={@2}$.",
  "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.": "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.",
  "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.": "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.",
  "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, charakteristická rovnica je ${@2}{@3}=0$.": "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, die charakteristische Gleichung ist ${@2}{@3}=0$.",
  "$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno": "$h(A)=h(A\\mid b)=3=n$, es gibt genau eine Lösung",
  "$h(A)=h(A\\mid b)={@0}\\lt 3$, riešení je nekonečne veľa ({@1})": "$h(A)=h(A\\mid b)={@0}\\lt 3$, es gibt unendlich viele Lösungen ({@1})",
  "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sústava nemá riešenie": "$h(A)={@0}\\neq h(A\\mid b)={@1}$, das System hat keine Lösung",
  "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.": "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.",
  "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, koeficient $\\frac{{@2}}{{@3}}={@4}$.": "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, Koeffizient $\\frac{{@2}}{{@3}}={@4}$.",
  "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.": "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; das Ergebnis muss senkrecht auf $w_1$ stehen.",
  "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Skúška: $\\langle w_1, w_2\\rangle={@6}$.": "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Probe: $\\langle w_1, w_2\\rangle={@6}$.",
  "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, kde v $D_{{@2}}$ nahradíš {@3}. stĺpec matice sústavy stĺpcom pravých strán.": "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, wobei du in $D_{{@2}}$ die {@3}. Spalte der Koeffizientenmatrix durch die Spalte der rechten Seiten ersetzt.",
  "(mení orientáciu)": "(ändert die Orientierung)",
  "(naozaj ${@0}={@1}{@2} {@3} {@4}{@5}$)": "(tatsächlich ${@0}={@1}{@2} {@3} {@4}{@5}$)",
  "+ súčiny na zelených diagonálach": "+ Produkte auf den grünen Diagonalen",
  ", teda ${@0}{@1} {@2} = {@3}$": ", also ${@0}{@1} {@2} = {@3}$",
  "<strong>Je</strong> podpriestor: {@0}.": "<strong>Ist</strong> ein Unterraum: {@0}.",
  "<strong>Nie je</strong> podpriestor: {@0}.": "<strong>Ist kein</strong> Unterraum: {@0}.",
  "Aká je definitnosť formy?": "Welche Definitheit hat die Form?",
  "Aká je dimenzia $W$?": "Welche Dimension hat $W$?",
  "Aká je dimenzia jadra $\\operatorname{Ker}f$?": "Welche Dimension hat der Kern $\\operatorname{Ker}f$?",
  "Aká je hodnosť matice $A$?": "Welchen Rang hat die Matrix $A$?",
  "Aká je hodnosť matice sústavy $h(A)$?": "Welchen Rang hat die Koeffizientenmatrix $h(A)$?",
  "Aká je hodnosť matice sústavy?": "Welchen Rang hat die Koeffizientenmatrix?",
  "Aká je hodnosť rozšírenej matice $h(A\\mid b)$?": "Welchen Rang hat die erweiterte Matrix $h(A\\mid b)$?",
  "Aké je znamienko $(-1)^{{@0}+{@1}}$? Zadaj $1$ alebo $-1$.": "Welches Vorzeichen hat $(-1)^{{@0}+{@1}}$? Gib $1$ oder $-1$ ein.",
  "Aký je absolútny člen $D_0$?": "Wie lautet das Absolutglied $D_0$?",
  "Aký je absolútny člen $b$?": "Wie lautet das Absolutglied $b$?",
  "Aký je determinant tejto podmatice?": "Wie groß ist die Determinante dieser Untermatrix?",
  "Algebraický doplnok treba ešte vydeliť determinantom matice $A$.": "Den Kofaktor musst du noch durch die Determinante der Matrix $A$ dividieren.",
  "Antisymetrická matica má na diagonále nuly a spĺňa $a_{ij}=-a_{ji}$. Over to pre všetky dvojice.": "Eine antisymmetrische Matrix hat auf der Diagonale Nullen und erfüllt $a_{ij}=-a_{ji}$. Prüfe das für alle Paare.",
  "Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).": "Die ganze inverse Matrix musst du nicht berechnen: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (die Indizes des Kofaktors sind vertauscht).",
  "Cramerovým pravidlom vypočítaj neznámu $x_{{@0}}$ zo sústavy ${@1}$. Neceločíselný výsledok zadaj ako zlomok.": "Berechne mit der cramerschen Regel die Unbekannte $x_{{@0}}$ aus dem System ${@1}$. Ein nicht ganzzahliges Ergebnis gib als Bruch ein.",
  "Cramerovým pravidlom: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,": "Mit der cramerschen Regel: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,",
  "Dané sú vektory $u={@0}$ a $v={@1}$ v $\\mathbb{R}^{{@2}}$. Vypočítaj vektor ${@3}$. Zložky oddeľ bodkočiarkou.": "Gegeben sind die Vektoren $u={@0}$ und $v={@1}$ im $\\mathbb{R}^{{@2}}$. Berechne den Vektor ${@3}$. Trenne die Komponenten durch Semikolons.",
  "Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.": "Die Determinante ist ungleich null, die Vektoren sind <strong>linear unabhängig</strong>.",
  "Determinant je nulový, vektory sú <strong>lineárne závislé</strong>{@0}.": "Die Determinante ist null, die Vektoren sind <strong>linear abhängig</strong>{@0}.",
  "Determinant je síce nulový, ale pozri sa na znamienko nenulového vlastného čísla: pri matici $2\\times 2$ sa rovná stope.": "Die Determinante ist zwar null, aber sieh dir das Vorzeichen des von null verschiedenen Eigenwerts an: Bei einer $2\\times 2$-Matrix ist er gleich der Spur.",
  "Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.": "Die Determinante der Matrix mit den Zeilen $u, v, w$ ist eine lineare Funktion des Parameters $t$ – entwickle sie nach der Zeile mit dem Parameter und setze sie gleich null.",
  "Diagonálne prvky matice $D^{{@0}}$?": "Diagonalelemente der Matrix $D^{{@0}}$?",
  "Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: ${@0}={@1}={@2}$.": "Das Diagonalelement $(A^{T}A)_{jj}$ ist die Summe der Quadrate der Elemente der $j$-ten Spalte von $A$, deshalb ist $\\operatorname{tr}(A^{T}A)$ die Summe der Quadrate aller Elemente: ${@0}={@1}={@2}$.",
  "Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $\\dim W={@3}$.": "Die Dimension der linearen Hülle ist der Rang der Matrix, deren Zeilen die gegebenen Vektoren sind:<br>{@0}<br>Die Zeilenstufenform hat {@1} {@2}, also $\\dim W={@3}$.",
  "Diskriminant ${@0}{@1}$, teda $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, t. j. $\\lambda_1={@4}$ a $\\lambda_2={@5}$.": "Diskriminante ${@0}{@1}$, also $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, d. h. $\\lambda_1={@4}$ und $\\lambda_2={@5}$.",
  "Do matice formy patrí mimo diagonály polovica koeficientu pri $xy$, teda ${@0}$, nie ${@1}$.": "Außerhalb der Diagonale gehört in die Matrix der Form die Hälfte des Koeffizienten bei $xy$, also ${@0}$, nicht ${@1}$.",
  "Dosaď $x_3$ do predposledného riadku a vypočítaj $x_2$.": "Setze $x_3$ in die vorletzte Zeile ein und berechne $x_2$.",
  "Forma $Q={@0}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "Die Form $Q={@0}$ ist genau dann positiv definit, wenn $a\\gt c$. Bestimme die Zahl $c$ (gegebenenfalls als Bruch).",
  "Forma $Q={@0}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "Die Form $Q={@0}+ay^2$ ist genau dann positiv definit, wenn $a\\gt c$. Bestimme die Zahl $c$ (gegebenenfalls als Bruch).",
  "Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $h(A)={@3}$.": "Mit dem gaußschen Eliminationsverfahren bringen wir die Matrix auf Zeilenstufenform:<br>{@0}<br>Die Zeilenstufenform hat {@1} {@2}, also $h(A)={@3}$.",
  "Gaussovou elimináciou vyrieš sústavu ${@0}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.": "Löse das System ${@0}$ mit dem gaußschen Eliminationsverfahren. Gib die Lösung in der Form „x₁; x₂; x₃“ ein.",
  "Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1={@0}$ a $u_2={@1}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.": "Orthogonalisiere die Vektoren $u_1={@0}$ und $u_2={@1}$ mit dem Gram-Schmidt-Verfahren (in dieser Reihenfolge, ohne Normierung). Gib den Vektor $w_2$ ein.",
  "Hľadaj protipríklad: patrí nulový vektor do $W$? Je súčet dvoch prvkov $W$ opäť v $W$? A ich násobok?": "Suche ein Gegenbeispiel: Gehört der Nullvektor zu $W$? Liegt die Summe zweier Elemente von $W$ wieder in $W$? Und ihr Vielfaches?",
  "Indefinitná forma nadobúda kladné aj záporné hodnoty. Over znamienka rohových minorov podľa Sylvestrovho kritéria.": "Eine indefinite Form nimmt positive und negative Werte an. Prüfe die Vorzeichen der führenden Hauptminoren nach dem Sylvester-Kriterium.",
  "Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.": "Der Kern ist die Lösungsmenge des homogenen Systems $Ax=o$. Forme die Matrix um und wähle die freie Unbekannte als Parameter.",
  "Jadro je množina riešení sústavy $Ax=o$:<br>{@0}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom ${@1}\\times{@2}={@3}${@4}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.": "Der Kern ist die Lösungsmenge des Systems $Ax=o$:<br>{@0}<br>$h(A)=2$, also $\\dim\\operatorname{Ker}f=3-2=1$. Die Lösung steht senkrecht auf beiden von null verschiedenen Zeilen und ist deshalb ein Vielfaches von ${@1}\\times{@2}={@3}${@4}. Also $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.",
  "Je množina $W={@0}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?": "Ist die Menge $W={@0}$ ein Unterraum des Vektorraums $\\mathbb{R}^3$?",
  "Ker": "Ker",
  "Kladne definitná je forma len vtedy, keď sú všetky hlavné rohové minory kladné.": "Positiv definit ist die Form nur dann, wenn alle führenden Hauptminoren positiv sind.",
  "Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A={@0}$.": "Der Koeffizient bei $x_ix_j$ ($i\\neq j$) wird zu gleichen Teilen auf $a_{ij}$ und $a_{ji}$ aufgeteilt, also ist $a_{ij}$ die Hälfte des Koeffizienten. Matrix der Form: $A={@0}$.",
  "Koeficient pri $x_ix_j$ sa v symetrickej matici rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, každý dostane polovicu.": "Der Koeffizient bei $x_ix_j$ wird in der symmetrischen Matrix zu gleichen Teilen auf $a_{ij}$ und $a_{ji}$ aufgeteilt, jedes erhält die Hälfte.",
  "Koľko riešení má sústava ${@0}$?": "Wie viele Lösungen hat das System ${@0}$?",
  "Koľko riešení má sústava?": "Wie viele Lösungen hat das System?",
  "Kvadratická forma je $Q={@0}$. Urči prvky $a_{12}, a_{13}, a_{23}$ jej symetrickej matice (oddelené bodkočiarkou) (zlomky v tvare $p/q$).": "Die quadratische Form ist $Q={@0}$. Bestimme die Elemente $a_{12}, a_{13}, a_{23}$ ihrer symmetrischen Matrix (durch Semikolons getrennt) (Brüche in der Form $p/q$).",
  "Kvadratická forma je $Q={@0}$. Urči prvok $a_{12}$ jej symetrickej matice (zlomky v tvare $p/q$).": "Die quadratische Form ist $Q={@0}$. Bestimme das Element $a_{12}$ ihrer symmetrischen Matrix (Brüche in der Form $p/q$).",
  "Kvadratický činiteľ má $\\operatorname{tr}={@0}$, $\\det={@1}$ a korene ${@2}$ a ${@3}$. Vlastné čísla sú ${@4}$.": "Der quadratische Faktor hat $\\operatorname{tr}={@0}$, $\\det={@1}$ und die Nullstellen ${@2}$ und ${@3}$. Die Eigenwerte sind ${@4}$.",
  "Lineárna kombinácia dvoch vektorov": "Linearkombination zweier Vektoren",
  "Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f{@0}={@1}$ a $f{@2}={@3}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.": "Die lineare Abbildung $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ erfüllt $f{@0}={@1}$ und $f{@2}={@3}$. Finde die Matrix $A$ der Abbildung $f$ (in der Standardbasis). Gib die Elemente zeilenweise ein.",
  "Matica $-A^{3}$ je $(-1)\\cdot A^{3}$, a $\\det(-M)=(-1)^{{@0}}\\det M$.": "Die Matrix $-A^{3}$ ist $(-1)\\cdot A^{3}$, und $\\det(-M)=(-1)^{{@0}}\\det M$.",
  "Matica $A={@0}$ má vlastné čísla ${@1}$ a ${@2}$. Pomocou diagonalizácie vypočítaj $A^{{@3}}$. Prvky zadaj po riadkoch.": "Die Matrix $A={@0}$ hat die Eigenwerte ${@1}$ und ${@2}$. Berechne mithilfe der Diagonalisierung $A^{{@3}}$. Gib die Elemente zeilenweise ein.",
  "Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom ${@0}$.": "Die Matrix $B$ entsteht aus $A$ durch Vertauschen der ersten beiden Zeilen und Multiplizieren der letzten Zeile mit ${@0}$.",
  "Matica formy $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A={@3}$.": "Matrix der Form $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ hängen nicht von $a$ ab. Durch Entwicklung nach der 3. Zeile (oder mit der Regel von Sarrus) ist $D_3=\\det A={@3}$.",
  "Matica formy: $A={@0}$. Hlavné rohové minory: ${@1}$. Keďže {@2}, forma je <strong>{@3}</strong>.": "Matrix der Form: $A={@0}$. Führende Hauptminoren: ${@1}$. Es gilt: {@2}; die Form ist also <strong>{@3}</strong>.",
  "Matica nie je trojuholníková, vlastné čísla preto nie sú jej diagonálne prvky. Rozviň $\\det(A-\\lambda I)$ podľa 3. riadka.": "Die Matrix ist keine Dreiecksmatrix, deshalb sind die Eigenwerte nicht ihre Diagonalelemente. Entwickle $\\det(A-\\lambda I)$ nach der 3. Zeile.",
  "Matica v stupňovitom tvare": "Matrix in Zeilenstufenform",
  "Matice: $A_f={@0}$, $A_g={@1}$. Zloženie má maticu $A_gA_f={@2}$, teda $(g\\circ f)(v)={@3}{@4}={@5}$.": "Matrizen: $A_f={@0}$, $A_g={@1}$. Die Verkettung hat die Matrix $A_gA_f={@2}$, also $(g\\circ f)(v)={@3}{@4}={@5}$.",
  "Minor $D_3=\\det A$ má tvar $D_2\\,a+K$. Aké je číslo $K$?": "Der Minor $D_3=\\det A$ hat die Form $D_2\\,a+K$. Wie lautet die Zahl $K$?",
  "Minor treba ešte vynásobiť samotným prvkom $a_{{@0}{@1}}={@2}$, podľa ktorého rozvíjaš.": "Den Minor musst du noch mit dem Element $a_{{@0}{@1}}={@2}$ selbst multiplizieren, nach dem du entwickelst.",
  "Minor: $M_{{@0}{@1}}={@2}={@3}$. Teda $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.": "Minor: $M_{{@0}{@1}}={@2}={@3}$. Also $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.",
  "Mocnina matice sa nepočíta po prvkoch, to platí len pre diagonálnu maticu $D$. Použi $A^k=PD^kP^{-1}$.": "Die Potenz einer Matrix berechnet man nicht elementweise, das gilt nur für die Diagonalmatrix $D$. Verwende $A^k=PD^kP^{-1}$.",
  "Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.": "Transponiere zuerst $B$ (Zeilen ↔ Spalten), dann rechne elementweise.",
  "Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.": "Multipliziere zuerst jeden Vektor mit seinem Koeffizienten (jede Komponente), dann addiere die entsprechenden Komponenten.",
  "Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.": "Schreibe $v=c_1b_1+c_2b_2+c_3b_3$ komponentenweise: Du erhältst ein System aus drei Gleichungen, in dem die Basisvektoren die Spalten der Matrix sind.",
  "Napíš maticu $A-{@0}I$ (prvky po riadkoch).": "Schreibe die Matrix $A-{@0}I$ auf (Elemente zeilenweise).",
  "Napíš maticu $B^{T}$ (prvky po riadkoch).": "Schreibe die Matrix $B^{T}$ auf (Elemente zeilenweise).",
  "Nekonečne veľa riešení je len pri $h(A)=h(A\\mid b)\\lt 3$. Pozri sa aj na pravú stranu riadku, ktorý je v matici sústavy nulový.": "Unendlich viele Lösungen gibt es nur bei $h(A)=h(A\\mid b)\\lt 3$. Sieh dir auch die rechte Seite der Zeile an, die in der Koeffizientenmatrix null ist.",
  "Nájdi jedno netriviálne riešenie homogénnej sústavy ${@0}$. (Uznáme ľubovoľný nenulový násobok.)": "Finde eine nichttriviale Lösung des homogenen Systems ${@0}$. (Jedes von null verschiedene Vielfache wird akzeptiert.)",
  "Nájdi maticu $X$, pre ktorú platí ${@0}X-A=B^{T}$, ak $A={@1}$ a $B={@2}$. Prvky zadaj po riadkoch.": "Finde die Matrix $X$, für die ${@0}X-A=B^{T}$ gilt, wenn $A={@1}$ und $B={@2}$. Gib die Elemente zeilenweise ein.",
  "Nájdi nenulové riešenie sústavy $(A-\\lambda I)v=o$ (ľubovoľný nenulový násobok je správne).": "Finde eine von null verschiedene Lösung des Systems $(A-\\lambda I)v=o$ (jedes von null verschiedene Vielfache ist richtig).",
  "Nájdi súradnice vektora $v={@0}$ v báze $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.": "Finde die Koordinaten des Vektors $v={@0}$ in der Basis $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ des Raums $\\mathbb{R}^3$. Gib sie in der Form „c₁; c₂; c₃“ ein.",
  "Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.": "Finde die Eigenvektoren, stelle $P$ und $D$ auf und verwende $A^k=PD^kP^{-1}$; die Potenz einer Diagonalmatrix berechnet man elementweise auf der Diagonale.",
  "Nájdi vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou.": "Finde die Eigenwerte der Matrix $A={@0}$. Gib sie durch Semikolons getrennt ein.",
  "Nájdi všetky vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).": "Finde alle Eigenwerte der Matrix $A={@0}$. Gib sie durch Semikolons getrennt ein (einen mehrfachen Eigenwert gib mehrmals ein).",
  "Nájdi {@0}. riadok inverznej matice k matici $A={@1}$. Zadaj tri čísla oddelené bodkočiarkou.": "Finde die {@0}. Zeile der inversen Matrix zur Matrix $A={@1}$. Gib drei durch Semikolons getrennte Zahlen ein.",
  "Nájdi čísla $\\alpha, \\beta$ také, že ${@0}=\\alpha{@1}+\\beta{@2}$. Zadaj ich v tvare „α; β“.": "Finde Zahlen $\\alpha, \\beta$ so, dass ${@0}=\\alpha{@1}+\\beta{@2}$. Gib sie in der Form „α; β“ ein.",
  "Násobenie matíc nie je komutatívne. Z rovnice ${@0}$ treba násobiť maticou $A^{-1}$ {@1}.": "Die Matrizenmultiplikation ist nicht kommutativ. Die Gleichung ${@0}$ musst du mit der Matrix $A^{-1}$ {@1} multiplizieren.",
  "Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.": "Beide Bedingungen auf einmal: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Invertiere die Matrix $(u\\mid v)$ und multipliziere von rechts.",
  "Obraz jednotkového štvorca pri zobrazení danom maticou 2×2": "Bild des Einheitsquadrats unter der durch eine 2×2-Matrix gegebenen Abbildung",
  "Od počtu neznámych sa neodčíta počet rovníc, ale hodnosť matice sústavy: niektoré rovnice môžu byť závislé.": "Von der Anzahl der Unbekannten zieht man nicht die Anzahl der Gleichungen ab, sondern den Rang der Koeffizientenmatrix: Manche Gleichungen können abhängig sein.",
  "Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.": "Subtrahiere die Vektoren komponentenweise und verwende $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.",
  "Ortogonálna projekcia vektora na priamku": "Orthogonale Projektion eines Vektors auf eine Gerade",
  "Over všetky tri podmienky: nulový vektor, uzavretosť na sčítanie a na násobenie číslom. Ak platia všetky, ide o podpriestor.": "Prüfe alle drei Bedingungen: Nullvektor, Abgeschlossenheit bezüglich Addition und bezüglich Multiplikation mit einer Zahl. Gelten alle, ist es ein Unterraum.",
  "Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.": "Prüfe, ob $W$ den Nullvektor enthält und ob sie bezüglich Addition und Multiplikation mit einer reellen Zahl abgeschlossen ist. Zum Widerlegen genügt ein Gegenbeispiel.",
  "Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).": "Nach der Umformung bleiben zwei unabhängige Gleichungen. Wähle eine Unbekannte als Parameter (oder verwende das Vektorprodukt zweier Zeilen).",
  "Podmienka $D = 0$ dáva ${@0}{@1} = {@2}$, teda ${@3} = {@4}$.": "Die Bedingung $D = 0$ ergibt ${@0}{@1} = {@2}$, also ${@3} = {@4}$.",
  "Podmienka $D_3\\gt 0$ dáva $a\\gt {@0}$, teda $c={@1}$.": "Die Bedingung $D_3\\gt 0$ ergibt $a\\gt {@0}$, also $c={@1}$.",
  "Porovnaj $A^{T}$ s $A$ aj s $-A$ prvok po prvku. Možno platí jedna z rovností.": "Vergleiche $A^{T}$ elementweise mit $A$ und mit $-A$. Vielleicht gilt eine der Gleichungen.",
  "Porovnaním zložiek dostaneme sústavu ${@0}={@1}$, ${@2}={@3}$.": "Durch Komponentenvergleich erhalten wir das System ${@0}={@1}$, ${@2}={@3}$.",
  "Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.": "Verwende $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ und $\\det A^{-1}=1/\\det A$.",
  "Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.": "Verwende die Regel von Sarrus: drei Produkte „nach rechts unten“ mit Pluszeichen, drei „nach links unten“ mit Minuszeichen.",
  "Použil si algebraické doplnky {@0}. riadka. Adjungovaná matica je transponovaná: {@1}. riadok inverznej matice tvoria doplnky {@2}. stĺpca.": "Du hast die Kofaktoren der {@0}. Zeile verwendet. Die adjungierte Matrix ist transponiert: Die {@1}. Zeile der inversen Matrix bilden die Kofaktoren der {@2}. Spalte.",
  "Použil si doplnok $A_{{@0}{@1}}$. Pre prvok $(A^{-1})_{{@2}{@3}}$ treba doplnok s vymenenými indexmi, $A_{{@4}{@5}}$.": "Du hast den Kofaktor $A_{{@0}{@1}}$ verwendet. Für das Element $(A^{-1})_{{@2}{@3}}$ brauchst du den Kofaktor mit vertauschten Indizes, $A_{{@4}{@5}}$.",
  "Počítame po zložkách: ${@0}=({@1})={@2}$.": "Wir rechnen komponentenweise: ${@0}=({@1})={@2}$.",
  "Pre $A={@0}$ a $B={@1}$ vypočítaj maticu ${@2}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).": "Berechne für $A={@0}$ und $B={@1}$ die Matrix ${@2}$. Gib die Elemente zeilenweise ein (4 durch Semikolons getrennte Zahlen).",
  "Pre ktoré $a$ je $D=0$?": "Für welches $a$ ist $D=0$?",
  "Pre ktoré $t$ je $D=0$?": "Für welches $t$ ist $D=0$?",
  "Pre ktoré $t$ je skalárny súčin nulový? Neceločíselný výsledok zadaj ako zlomok.": "Für welches $t$ ist das Skalarprodukt null? Ein nicht ganzzahliges Ergebnis gib als Bruch ein.",
  "Pre ktoré $t$ sú vektory $u={@0}$ a $v={@1}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.": "Für welches $t$ sind die Vektoren $u={@0}$ und $v={@1}$ orthogonal? Ein nicht ganzzahliges Ergebnis gib als Bruch ein.",
  "Pre ktorú hodnotu parametra $a$ má matica $A={@0}$ hodnosť 2?": "Für welchen Wert des Parameters $a$ hat die Matrix $A={@0}$ den Rang 2?",
  "Pre ktorú hodnotu parametra $t$ sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé?": "Für welchen Wert des Parameters $t$ sind die Vektoren $u={@0}$, $v={@1}$ und $w={@2}$ linear abhängig?",
  "Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.": "Löse für eine $2\\times 2$-Matrix $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.",
  "Pre maticu $A={@0}$ vypočítaj prvok $(A^{-1})_{{@1}{@2}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.": "Berechne für die Matrix $A={@0}$ das Element $(A^{-1})_{{@1}{@2}}$ der inversen Matrix. Ein nicht ganzzahliges Ergebnis gib als Bruch ein.",
  "Pre maticu $A={@0}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Berechne für die Matrix $A={@0}$ die Spur $\\operatorname{tr}(A^{T}A)$.",
  "Prepočítaj determinant Sarrusovým pravidlom: tri súčiny sa sčítajú a tri odčítajú. Nezávislé sú vektory len pri nenulovom determinante.": "Berechne die Determinante mit der Regel von Sarrus nach: Drei Produkte werden addiert und drei subtrahiert. Unabhängig sind die Vektoren nur bei einer von null verschiedenen Determinante.",
  "Pri matici rádu 3 nestačia dve diagonály ako pri $2\\times 2$. Sarrusovo pravidlo má šesť súčinov: tri kladné a tri záporné.": "Bei einer Matrix der Ordnung 3 reichen zwei Diagonalen nicht wie bei $2\\times 2$. Die Regel von Sarrus hat sechs Produkte: drei positive und drei negative.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa determinant násobí číslom $c^{n}$, nie len $c$.": "Multipliziert man eine Matrix der Ordnung ${@0}$ mit einer Zahl $c$, wird die Determinante mit $c^{n}$ multipliziert, nicht nur mit $c$.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa číslom $c$ násobí každý z ${@1}$ riadkov: $\\det(cA)=c^{n}\\det A$.": "Multipliziert man eine Matrix der Ordnung ${@0}$ mit einer Zahl $c$, wird jede der ${@1}$ Zeilen mit $c$ multipliziert: $\\det(cA)=c^{n}\\det A$.",
  "Pri prenesení $A$ na druhú stranu sa mení znamienko: ${@0}X=A+B^{T}$.": "Beim Bringen von $A$ auf die andere Seite ändert sich das Vorzeichen: ${@0}X=A+B^{T}$.",
  "Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.": "Beim gemischten Glied $c\\,x_ix_j$ ist $a_{ij}=a_{ji}=c/2$.",
  "Projekciu na $w_1$ treba od $u_2$ odčítať, nie pripočítať. Over, či je výsledok kolmý na $w_1$.": "Die Projektion auf $w_1$ muss von $u_2$ subtrahiert werden, nicht addiert. Prüfe, ob das Ergebnis senkrecht auf $w_1$ steht.",
  "Prvky sa neumocnili. Diagonálny prvok $(A^{T}A)_{jj}$ je skalárny súčin $j$-tého stĺpca so sebou samým, teda súčet druhých mocnín.": "Die Elemente wurden nicht quadriert. Das Diagonalelement $(A^{T}A)_{jj}$ ist das Skalarprodukt der $j$-ten Spalte mit sich selbst, also die Summe der Quadrate.",
  "Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.": "Das Element $(A^{T}A)_{jj}$ entsteht als Skalarprodukt der $j$-ten Spalte der Matrix $A$ mit sich selbst.",
  "Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. {@0}": "Die ersten beiden Zeilen sind nicht zueinander proportional, deshalb ist $h(A)\\ge 2$. Der Rang ist genau dann kleiner als 3, wenn $D=\\det A=0$. {@0}",
  "Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.": "Die ersten beiden führenden Hauptminoren hängen nicht von $a$ ab; $D_3=\\det A$ ist eine lineare Funktion von $a$ mit dem Koeffizienten $D_2$.",
  "Práve jedno riešenie má sústava len pri $h(A)=h(A\\mid b)=3$. Over, či po eliminácii nevznikne v matici sústavy nulový riadok.": "Genau eine Lösung hat das System nur bei $h(A)=h(A\\mid b)=3$. Prüfe, ob nach der Elimination in der Koeffizientenmatrix keine Nullzeile entsteht.",
  "Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.": "Bringe mit Zeilenumformungen die Elemente unter den Pivotelementen auf null und zähle die von null verschiedenen Zeilen.",
  "Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.": "Die Lösungen eines homogenen Systems mit $n$ Unbekannten bilden einen Unterraum der Dimension $n-h(A)$.",
  "Riešenie je $X={@0}={@1}={@2}$.": "Die Lösung ist $X={@0}={@1}={@2}$.",
  "Riešime $(A-\\lambda I)v=o$, kde $A-{@0}I={@1}$. {@2} Skúška: $A{@3}={@4}={@5}\\cdot{@6}$.": "Wir lösen $(A-\\lambda I)v=o$, wobei $A-{@0}I={@1}$. {@2} Probe: $A{@3}={@4}={@5}\\cdot{@6}$.",
  "Rotácia útvaru okolo počiatku": "Drehung einer Figur um den Ursprung",
  "Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>{@0}<br>Spätné dosadzovanie – {@1}": "Die Gleichung $c_1b_1+c_2b_2+c_3b_3=v$ ist ein System mit einer Matrix, die die Basisvektoren in den Spalten hat:<br>{@0}<br>Rückwärtseinsetzen – {@1}",
  "Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.": "Multipliziere die Gleichung von rechts mit der Matrix $A^{-1}$: $X=BA^{-1}$.",
  "Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.": "Multipliziere die Gleichung von links mit der Matrix $A^{-1}$: $X=A^{-1}B$.",
  "Rozhodni, aká je matica $A={@0}$.": "Entscheide, was für eine Matrix $A={@0}$ ist.",
  "Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.": "Entwickle die Determinante nach einer Zeile oder Spalte, in der nur ein von null verschiedenes Element steht. Vergiss das Vorzeichen $(-1)^{i+j}$ nicht.",
  "Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.": "Entwicklung von $\\det(A-\\lambda I)$ nach der 3. Zeile: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.",
  "Rozvoj determinantu podľa 3. riadka dáva $D=Ca+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "Die Entwicklung der Determinante nach der 3. Zeile ergibt $D=Ca+D_0$. Wie lautet der Koeffizient $C$ (der Kofaktor des Elements mit dem Parameter)?",
  "Rozvoj podľa 3. riadka dáva $D=Ct+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "Die Entwicklung nach der 3. Zeile ergibt $D=Ct+D_0$. Wie lautet der Koeffizient $C$ (der Kofaktor des Elements mit dem Parameter)?",
  "Rozvoj podľa 3. riadka: $D = {@0}$, kde ${@1}$. Teda $D = {@2}$.": "Entwicklung nach der 3. Zeile: $D = {@0}$, wobei ${@1}$. Also $D = {@2}$.",
  "Rozvojom podľa 3. riadka dostaneš činiteľ $(c-\\lambda)$. Aké je $c$?": "Durch Entwicklung nach der 3. Zeile erhältst du den Faktor $(c-\\lambda)$. Wie lautet $c$?",
  "Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.": "Bringe die erweiterte Matrix auf Zeilenstufenform und berechne die Unbekannten von unten.",
  "S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.": "Gehe mit der Matrizengleichung wie mit einer gewöhnlichen Gleichung um: Stelle nach $X$ um und rechne dann elementweise.",
  "Sarrusovo pravidlo pre determinant 3×3": "Regel von Sarrus für die 3×3-Determinante",
  "Sarrusovo pravidlo: $\\det A={@0}$.": "Regel von Sarrus: $\\det A={@0}$.",
  "Sarrusovo pravidlo: tri súčiny na diagonálach doprava dole so znamienkom plus, tri doľava dole so znamienkom mínus.": "Regel von Sarrus: drei Produkte auf den Diagonalen nach rechts unten mit Pluszeichen, drei nach links unten mit Minuszeichen.",
  "Semidefinitná forma má $\\det A=0$, teda aspoň jedno vlastné číslo nulové. Skontroluj determinant.": "Eine semidefinite Form hat $\\det A=0$, also ist mindestens ein Eigenwert null. Überprüfe die Determinante.",
  "Skalárny súčin $\\langle u, v\\rangle$ má tvar $at+b$. Aký je koeficient $a$?": "Das Skalarprodukt $\\langle u, v\\rangle$ hat die Form $at+b$. Wie lautet der Koeffizient $a$?",
  "Skalárny súčin treba ešte vydeliť číslom $\\langle u, u\\rangle=\\|u\\|^2$.": "Das Skalarprodukt musst du noch durch $\\langle u, u\\rangle=\\|u\\|^2$ dividieren.",
  "Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.": "Die Spalten der Abbildungsmatrix sind die Bilder der Vektoren $e_1=(1, 0)$ und $e_2=(0, 1)$. Der Verkettung „zuerst $f$, dann $g$“ entspricht das Produkt $A_gA_f$.",
  "Stĺpec pravých strán patrí do {@0}. <em>stĺpca</em> determinantu, nie do {@1}. riadka.": "Die Spalte der rechten Seiten gehört in die {@0}. <em>Spalte</em> der Determinante, nicht in die {@1}. Zeile.",
  "Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.": "Sylvester-Kriterium: $D_1\\gt 0$ gilt immer, die Bedingung liefert $D_2=\\det A\\gt 0$.",
  "Symetrická matica spĺňa $a_{ij}=a_{ji}$ pre všetky dvojice prvkov súmerných podľa hlavnej diagonály. Porovnaj ich jednu po druhej.": "Eine symmetrische Matrix erfüllt $a_{ij}=a_{ji}$ für alle Paare von Elementen, die bezüglich der Hauptdiagonale symmetrisch liegen. Vergleiche sie eins nach dem anderen.",
  "Sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé, alebo nezávislé?": "Sind die Vektoren $u={@0}$, $v={@1}$ und $w={@2}$ linear abhängig oder unabhängig?",
  "Sú vektory lineárne závislé, alebo nezávislé?": "Sind die Vektoren linear abhängig oder unabhängig?",
  "Súradnice vektora v báze b₁, b₂": "Koordinaten eines Vektors in der Basis b₁, b₂",
  "Sústava je ${@0}={@1}$, ${@2}={@3}$. Vypočítaj jej determinant $D$.": "Das System ist ${@0}={@1}$, ${@2}={@3}$. Berechne seine Determinante $D$.",
  "Sústava nemá riešenie, len keď vznikne riadok $(0\\ 0\\ 0\\mid c)$ s $c\\neq 0$, teda $h(A)\\neq h(A\\mid b)$.": "Das System hat nur dann keine Lösung, wenn eine Zeile $(0\\ 0\\ 0\\mid c)$ mit $c\\neq 0$ entsteht, also $h(A)\\neq h(A\\mid b)$.",
  "Súčiny na diagonálach smerom doľava dole sa od kladných členov odčítajú, nie pripočítajú.": "Die Produkte auf den Diagonalen nach links unten werden von den positiven Gliedern subtrahiert, nicht addiert.",
  "Sčítaj ich: aký je vektor ${@0}$?": "Addiere sie: Wie lautet der Vektor ${@0}$?",
  "Teda {@0}. riadok matice $A^{-1}$ je $\\frac{1}{{@1}}({@2})={@3}$.": "Also ist die {@0}. Zeile der Matrix $A^{-1}$ gleich $\\frac{1}{{@1}}({@2})={@3}$.",
  "To je $\\dim\\operatorname{Im}f=h(A)$. Dimenzia jadra je počet stĺpcov mínus hodnosť.": "Das ist $\\dim\\operatorname{Im}f=h(A)$. Die Dimension des Kerns ist die Anzahl der Spalten minus der Rang.",
  "To je dimenzia celého priestoru $\\mathbb{R}^{{@0}}$. Podpriestor môže mať menšiu dimenziu, rozhoduje hodnosť.": "Das ist die Dimension des ganzen Raums $\\mathbb{R}^{{@0}}$. Ein Unterraum kann eine kleinere Dimension haben, entscheidend ist der Rang.",
  "To je dimenzia jadra. Dimenzia obrazu sa rovná hodnosti matice.": "Das ist die Dimension des Kerns. Die Dimension des Bildes ist gleich dem Rang der Matrix.",
  "To je hodnosť matice sústavy. Dimenzia priestoru riešení je počet voľných neznámych, $n-h(A)$.": "Das ist der Rang der Koeffizientenmatrix. Die Dimension des Lösungsraums ist die Anzahl der freien Unbekannten, $n-h(A)$.",
  "To je počet riadkov pôvodnej matice. Hodnosť je počet nenulových riadkov až po prevedení do stupňovitého tvaru.": "Das ist die Anzahl der Zeilen der ursprünglichen Matrix. Der Rang ist die Anzahl der von null verschiedenen Zeilen erst nach der Umformung auf Zeilenstufenform.",
  "To je počet stĺpcov. Hodnosť je počet nenulových riadkov stupňovitého tvaru.": "Das ist die Anzahl der Spalten. Der Rang ist die Anzahl der von null verschiedenen Zeilen der Zeilenstufenform.",
  "To je počet vektorov. Niektoré z nich môžu byť lineárnou kombináciou ostatných; dimenzia je hodnosť matice z nich zostavenej.": "Das ist die Anzahl der Vektoren. Manche von ihnen können Linearkombinationen der übrigen sein; die Dimension ist der Rang der aus ihnen gebildeten Matrix.",
  "Toto je projekcia vektora $u$ na smer $v$. Premietame $v$ na smer $u$, výsledok je preto násobkom vektora $u$.": "Das ist die Projektion des Vektors $u$ auf die Richtung von $v$. Wir projizieren $v$ auf die Richtung von $u$, das Ergebnis ist deshalb ein Vielfaches des Vektors $u$.",
  "Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.": "Transponiere die Matrix und vergleiche sie mit $A$ und mit $-A$. Sieh dir auch die Diagonale an.",
  "Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi": "Drei Möglichkeiten für ein System aus zwei Gleichungen mit zwei Unbekannten",
  "Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.": "Drei Vektoren im $\\mathbb{R}^3$ sind genau dann linear unabhängig, wenn die Determinante der aus ihnen gebildeten Matrix ungleich null ist.",
  "Uhol priamky θ (°)": "Winkel der Geraden θ (°)",
  "Uhol φ (°)": "Winkel φ (°)",
  "Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.": "Bringe die erweiterte Matrix auf Zeilenstufenform und vergleiche $h(A)$ mit $h(A\\mid b)$ und mit der Anzahl der Unbekannten.",
  "Uprav rozšírenú maticu na stupňovitý tvar. Aká je hodnosť matice sústavy $h(A)$?": "Bringe die erweiterte Matrix auf Zeilenstufenform. Welchen Rang hat die Koeffizientenmatrix $h(A)$?",
  "Uprav rozšírenú maticu na stupňovitý tvar. Z posledného riadku vypočítaj $x_3$.": "Bringe die erweiterte Matrix auf Zeilenstufenform. Berechne aus der letzten Zeile $x_3$.",
  "Urči definitnosť kvadratickej formy $Q={@0}$ (vyber najpresnejšiu možnosť).": "Bestimme die Definitheit der quadratischen Form $Q={@0}$ (wähle die genaueste Möglichkeit).",
  "Urči dimenziu podpriestoru $W=\\mathcal{L}({@0})$ priestoru $\\mathbb{R}^{{@1}}$.": "Bestimme die Dimension des Unterraums $W=\\mathcal{L}({@0})$ des Raums $\\mathbb{R}^{{@1}}$.",
  "Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.": "Bestimme die Dimension des Unterraums $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.",
  "Urči hodnosť matice $A={@0}$.": "Bestimme den Rang der Matrix $A={@0}$.",
  "Urči číslo $c$ (prípadne ako zlomok).": "Bestimme die Zahl $c$ (gegebenenfalls als Bruch).",
  "V menovateli sú normy $\\|u\\|$ a $\\|v\\|$, nie ich druhé mocniny.": "Im Nenner stehen die Normen $\\|u\\|$ und $\\|v\\|$, nicht ihre Quadrate.",
  "V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.": "In der dritten Zeile stehen zwei Nullen – entwickle $\\det(A-\\lambda I)$ nach ihr und löse die verbleibende $2\\times 2$-Determinante als quadratische Gleichung.",
  "V {@0}. riadku je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto riadka dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "In der {@0}. Zeile steht das einzige von null verschiedene Element $a_{{@1}{@2}}={@3}$, deshalb ergibt die Laplace-Entwicklung nach dieser Zeile $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "V {@0}. stĺpci je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto stĺpca dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "In der {@0}. Spalte steht das einzige von null verschiedene Element $a_{{@1}{@2}}={@3}$, deshalb ergibt die Laplace-Entwicklung nach dieser Spalte $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "Vektor $v={@0}$ najprv zobrazíme zobrazením $f$: {@1}, a výsledok potom zobrazením $g$: {@2}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.": "Den Vektor $v={@0}$ bilden wir zuerst mit der Abbildung $f$ ab: {@1}, und das Ergebnis dann mit der Abbildung $g$: {@2}. Bestimme das Bild $(g\\circ f)(v)$ in der Form „x; y“.",
  "Vektory bázy patria do <em>stĺpcov</em> matice sústavy, nie do riadkov: $i$-ta rovnica porovnáva $i$-te zložky.": "Die Basisvektoren gehören in die <em>Spalten</em> der Koeffizientenmatrix, nicht in die Zeilen: Die $i$-te Gleichung vergleicht die $i$-ten Komponenten.",
  "Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.": "Vektoren sind genau dann orthogonal, wenn ihr Skalarprodukt null ist.",
  "Vektory sú závislé práve vtedy, keď $D={@0}=0$. {@1} Pre $t={@2}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.": "Die Vektoren sind genau dann abhängig, wenn $D={@0}=0$. {@1} Für $t={@2}$ ist $w$ eine Linearkombination der Vektoren $u$ und $v$.",
  "Vektory zapíš do riadkov matice a urči jej hodnosť.": "Schreibe die Vektoren in die Zeilen einer Matrix und bestimme ihren Rang.",
  "Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: ${@0}={@1}$.": "Wir schreiben die Vektoren in die Zeilen einer Matrix und berechnen die Determinante mit der Regel von Sarrus: ${@0}={@1}$.",
  "Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U={@0}$ a $P={@1}$. Keďže $\\det U={@2}$, je $U^{-1}={@3}$ a $A=PU^{-1}={@4}{@5}={@6}$.": "Wir schreiben die Vektoren in die Spalten: $A\\,U=P$, wobei $U={@0}$ und $P={@1}$. Da $\\det U={@2}$, ist $U^{-1}={@3}$ und $A=PU^{-1}={@4}{@5}={@6}$.",
  "Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.": "Eigenvektoren sind die von null verschiedenen Lösungen des homogenen Systems $(A-\\lambda I)v=o$.",
  "Vlastné vektory: ${@0}$ pre $\\lambda={@1}$ a ${@2}$ pre $\\lambda={@3}$. Teda $P={@4}$, $D={@5}$, $\\det P={@6}$ a $P^{-1}={@7}$.": "Eigenvektoren: ${@0}$ für $\\lambda={@1}$ und ${@2}$ für $\\lambda={@3}$. Also $P={@4}$, $D={@5}$, $\\det P={@6}$ und $P^{-1}={@7}$.",
  "Vlastné čísla sú prvky diagonály len pri trojuholníkovej matici. Tu rieš charakteristickú rovnicu $\\det(A-\\lambda I)=0$.": "Die Eigenwerte sind nur bei einer Dreiecksmatrix die Diagonalelemente. Löse hier die charakteristische Gleichung $\\det(A-\\lambda I)=0$.",
  "Vo vete o dimenzii je dimenzia vzoru, teda počet stĺpcov ${@0}$, nie počet riadkov.": "Im Dimensionssatz steht die Dimension des Urbildraums, also die Anzahl der Spalten ${@0}$, nicht die Anzahl der Zeilen.",
  "Vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$.": "Multipliziert man eine Zeile mit ${@0}$, wird die Determinante mit ${@1}$ multipliziert.",
  "Vypočítaj $(A^{-1})_{{@0}{@1}}$. Neceločíselný výsledok zadaj ako zlomok.": "Berechne $(A^{-1})_{{@0}{@1}}$. Ein nicht ganzzahliges Ergebnis gib als Bruch ein.",
  "Vypočítaj $A=PU^{-1}$ (prvky po riadkoch).": "Berechne $A=PU^{-1}$ (Elemente zeilenweise).",
  "Vypočítaj $A^{-1}$ (prvky po riadkoch).": "Berechne $A^{-1}$ (Elemente zeilenweise).",
  "Vypočítaj $A^{{@0}}=PD^{{@1}}P^{-1}$ (prvky po riadkoch).": "Berechne $A^{{@0}}=PD^{{@1}}P^{-1}$ (Elemente zeilenweise).",
  "Vypočítaj $X={@0}$ (prvky po riadkoch).": "Berechne $X={@0}$ (Elemente zeilenweise).",
  "Vypočítaj $\\cos\\varphi$ (ako zlomok).": "Berechne $\\cos\\varphi$ (als Bruch).",
  "Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u={@0}$ a $v={@1}$. Výsledok zadaj ako zlomok.": "Berechne $\\cos\\varphi$, wobei $\\varphi$ der Winkel der Vektoren $u={@0}$ und $v={@1}$ ist. Gib das Ergebnis als Bruch ein.",
  "Vypočítaj $\\det A$.": "Berechne $\\det A$.",
  "Vypočítaj $\\langle u, u\\rangle$.": "Berechne $\\langle u, u\\rangle$.",
  "Vypočítaj $\\langle u, v\\rangle$.": "Berechne $\\langle u, v\\rangle$.",
  "Vypočítaj $\\langle u_2, w_1\\rangle$, kde $w_1=u_1$.": "Berechne $\\langle u_2, w_1\\rangle$, wobei $w_1=u_1$.",
  "Vypočítaj $\\langle v, u\\rangle$.": "Berechne $\\langle v, u\\rangle$.",
  "Vypočítaj $\\langle w_1, w_1\\rangle$.": "Berechne $\\langle w_1, w_1\\rangle$.",
  "Vypočítaj $\\|u\\|$.": "Berechne $\\|u\\|$.",
  "Vypočítaj $\\|v\\|$.": "Berechne $\\|v\\|$.",
  "Vypočítaj $c_1$ a zadaj všetky súradnice.": "Berechne $c_1$ und gib alle Koordinaten ein.",
  "Vypočítaj $c_2$.": "Berechne $c_2$.",
  "Vypočítaj $f(v)$.": "Berechne $f(v)$.",
  "Vypočítaj $g\\bigl(f(v)\\bigr)$.": "Berechne $g\\bigl(f(v)\\bigr)$.",
  "Vypočítaj $x_{{@0}}$. Neceločíselný výsledok zadaj ako zlomok.": "Berechne $x_{{@0}}$. Ein nicht ganzzahliges Ergebnis gib als Bruch ein.",
  "Vypočítaj algebraické doplnky {@0}. stĺpca: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.": "Berechne die Kofaktoren der {@0}. Spalte: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.",
  "Vypočítaj algebraický doplnok $A_{{@0}{@1}}$.": "Berechne den Kofaktor $A_{{@0}{@1}}$.",
  "Vypočítaj determinant $D$ matice sústavy.": "Berechne die Determinante $D$ der Koeffizientenmatrix.",
  "Vypočítaj determinant $D_\\alpha$ (prvý stĺpec nahradíš pravými stranami).": "Berechne die Determinante $D_\\alpha$ (die erste Spalte ersetzt du durch die rechten Seiten).",
  "Vypočítaj determinant $D_\\beta$ (druhý stĺpec nahradíš pravými stranami).": "Berechne die Determinante $D_\\beta$ (die zweite Spalte ersetzt du durch die rechten Seiten).",
  "Vypočítaj determinant $D_{{@0}}$.": "Berechne die Determinante $D_{{@0}}$.",
  "Vypočítaj determinant ${@0}$.": "Berechne die Determinante ${@0}$.",
  "Vypočítaj determinant matice $A={@0}$.": "Berechne die Determinante der Matrix $A={@0}$.",
  "Vypočítaj diagonálny prvok $(A^{T}A)_{{@0}{@1}}$.": "Berechne das Diagonalelement $(A^{T}A)_{{@0}{@1}}$.",
  "Vypočítaj hlavný rohový minor $D_{@0}$.": "Berechne den führenden Hauptminor $D_{@0}$.",
  "Vypočítaj inverznú maticu k $U={@0}$ (prvky po riadkoch).": "Berechne die inverse Matrix zu $U={@0}$ (Elemente zeilenweise).",
  "Vypočítaj maticu $A+B^{T}$ (prvky po riadkoch).": "Berechne die Matrix $A+B^{T}$ (Elemente zeilenweise).",
  "Vypočítaj maticu $X$ (prvky po riadkoch).": "Berechne die Matrix $X$ (Elemente zeilenweise).",
  "Vypočítaj maticu ${@0}$ (prvky po riadkoch).": "Berechne die Matrix ${@0}$ (Elemente zeilenweise).",
  "Vypočítaj minor $M_{{@0}{@1}}$ (determinant po vynechaní {@2}. riadka a {@3}. stĺpca).": "Berechne den Minor $M_{{@0}{@1}}$ (die Determinante nach Streichen der {@2}. Zeile und der {@3}. Spalte).",
  "Vypočítaj ortogonálnu projekciu vektora $v={@0}$ na smer vektora $u={@1}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).": "Berechne die orthogonale Projektion des Vektors $v={@0}$ auf die Richtung des Vektors $u={@1}$. Gib die Komponenten durch Semikolons getrennt ein (Brüche in der Form $p/q$).",
  "Vypočítaj rohový minor $D_2$.": "Berechne den Hauptminor $D_2$.",
  "Vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Berechne die Spur $\\operatorname{tr}(A^{T}A)$.",
  "Vypočítaj stopu $\\operatorname{tr}A$.": "Berechne die Spur $\\operatorname{tr}A$.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doprava dole.": "Berechne die Summe der drei Produkte auf den Diagonalen nach rechts unten.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doľava dole.": "Berechne die Summe der drei Produkte auf den Diagonalen nach links unten.",
  "Vypočítaj vektor ${@0}u$.": "Berechne den Vektor ${@0}u$.",
  "Vypočítaj vektor ${@0}{@1}v$.": "Berechne den Vektor ${@0}{@1}v$.",
  "Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u={@0}$ a $v={@1}$.": "Berechne den Abstand $\\|u-v\\|$ der Vektoren $u={@0}$ und $v={@1}$.",
  "Vyrieš charakteristickú rovnicu $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Zadaj vlastné čísla.": "Löse die charakteristische Gleichung $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Gib die Eigenwerte ein.",
  "Vyrieš maticovú rovnicu ${@0}$, kde $A={@1}$ a $B={@2}$. Prvky matice $X$ zadaj po riadkoch.": "Löse die Matrizengleichung ${@0}$, wobei $A={@1}$ und $B={@2}$. Gib die Elemente der Matrix $X$ zeilenweise ein.",
  "Výmena riadkov mení znamienko a vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$": "Das Vertauschen von Zeilen ändert das Vorzeichen, und das Multiplizieren einer Zeile mit ${@0}$ multipliziert die Determinante mit ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$",
  "Z prvého riadku vypočítaj $x_1$ a zadaj celé riešenie.": "Berechne aus der ersten Zeile $x_1$ und gib die ganze Lösung ein.",
  "Z rovnice $AU=P$ treba násobiť maticou $U^{-1}$ sprava: $A=PU^{-1}$. Násobenie matíc nie je komutatívne.": "Die Gleichung $AU=P$ musst du von rechts mit der Matrix $U^{-1}$ multiplizieren: $A=PU^{-1}$. Die Matrizenmultiplikation ist nicht kommutativ.",
  "Z rovnice $X=\\tfrac{1}{{@0}}(A+B^{T})$. Máme $B^{T}={@1}$, $A+B^{T}={@2}$, teda $X={@3}$.": "Aus der Gleichung folgt $X=\\tfrac{1}{{@0}}(A+B^{T})$. Wir haben $B^{T}={@1}$, $A+B^{T}={@2}$, also $X={@3}$.",
  "Z {@0}. riadku: ${@1}=0$, preto je vlastný vektor násobkom ${@2}$.": "Aus der {@0}. Zeile: ${@1}=0$, deshalb ist der Eigenvektor ein Vielfaches von ${@2}$.",
  "Zabudol si transponovať maticu $B$: v $B^{T}$ sú riadky matice $B$ zapísané ako stĺpce.": "Du hast vergessen, die Matrix $B$ zu transponieren: In $B^{T}$ sind die Zeilen der Matrix $B$ als Spalten geschrieben.",
  "Zabudol si transponovať maticu $B$: v rovnici je $B^{T}$.": "Du hast vergessen, die Matrix $B$ zu transponieren: In der Gleichung steht $B^{T}$.",
  "Zabudol si vektory vynásobiť ich koeficientmi. Každú zložku vektora $u$ aj $v$ najprv vynásob príslušným číslom.": "Du hast vergessen, die Vektoren mit ihren Koeffizienten zu multiplizieren. Multipliziere zuerst jede Komponente der Vektoren $u$ und $v$ mit der zugehörigen Zahl.",
  "Zadaj $\\alpha$ a $\\beta$.": "Gib $\\alpha$ und $\\beta$ ein.",
  "Zadaj jedno netriviálne riešenie (uznáme ľubovoľný nenulový násobok).": "Gib eine nichttriviale Lösung ein (jedes von null verschiedene Vielfache wird akzeptiert).",
  "Zadaj projekciu $\\operatorname{proj}_u v$ (zlomky v tvare $p/q$).": "Gib die Projektion $\\operatorname{proj}_u v$ ein (Brüche in der Form $p/q$).",
  "Zadaj smerový vektor jadra (ľubovoľný nenulový násobok je správne).": "Gib den Richtungsvektor des Kerns ein (jedes von null verschiedene Vielfache ist richtig).",
  "Zadaj vektor $w_2$.": "Gib den Vektor $w_2$ ein.",
  "Zadaj vlastný vektor k $\\lambda={@0}$ (ľubovoľný nenulový násobok).": "Gib einen Eigenvektor zu $\\lambda={@0}$ ein (jedes von null verschiedene Vielfache).",
  "Zadaj všetky vlastné čísla matice $A$.": "Gib alle Eigenwerte der Matrix $A$ ein.",
  "Zadaj {@0}. riadok matice $A^{-1}$.": "Gib die {@0}. Zeile der Matrix $A^{-1}$ ein.",
  "Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.": "Schreibe die Gleichheit komponentenweise auf – du erhältst ein System aus zwei Gleichungen für $\\alpha$ und $\\beta$.",
  "Zobrazenia si použil v opačnom poradí. Najprv sa na $v$ použije $f$, preto je matica zloženia $A_gA_f$ (matica $A_f$ stojí pri vektore).": "Du hast die Abbildungen in umgekehrter Reihenfolge verwendet. Zuerst wird auf $v$ die Abbildung $f$ angewendet, deshalb ist die Matrix der Verkettung $A_gA_f$ (die Matrix $A_f$ steht beim Vektor).",
  "Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A={@0}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).": "Die Abbildung $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ ist durch die Vorschrift $f(x)=Ax$ gegeben, wobei $A={@0}$. Der Kern $\\operatorname{Ker}f$ ist eine Gerade. Finde ihren Richtungsvektor (jedes von null verschiedene Vielfache ist richtig).",
  "Zobrazenie $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ je dané maticou $A={@2}$. Urči $\\dim\\operatorname{{@3}}f$.": "Die Abbildung $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ ist durch die Matrix $A={@2}$ gegeben. Bestimme $\\dim\\operatorname{{@3}}f$.",
  "Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.": "Stelle die symmetrische Matrix der Form auf (bei gemischten Gliedern die Hälfte des Koeffizienten) und berechne die führenden Hauptminoren.",
  "Zostav sústavu (vektory bázy v stĺpcoch) a uprav ju na stupňovitý tvar. Z posledného riadku vypočítaj $c_3$.": "Stelle das System auf (Basisvektoren in den Spalten) und bringe es auf Zeilenstufenform. Berechne aus der letzten Zeile $c_3$.",
  "Zvyšný činiteľ je charakteristický polynóm ľavej hornej podmatice $2\\times 2$. Aká je jej stopa?": "Der restliche Faktor ist das charakteristische Polynom der linken oberen $2\\times 2$-Untermatrix. Wie groß ist ihre Spur?",
  "Záporne definitná je forma len vtedy, keď sa znamienka rohových minorov striedajú a $D_1\\lt 0$.": "Negativ definit ist die Form nur dann, wenn sich die Vorzeichen der führenden Hauptminoren abwechseln und $D_1\\lt 0$.",
  "Závislé sú vektory len vtedy, keď je determinant nulový. Prepočítaj ho Sarrusovým pravidlom a pozor na znamienka.": "Abhängig sind die Vektoren nur dann, wenn die Determinante null ist. Berechne sie mit der Regel von Sarrus nach und achte auf die Vorzeichen.",
  "ani symetrická, ani antisymetrická": "weder symmetrisch noch antisymmetrisch",
  "antisymetrická": "antisymmetrisch",
  "indefinitná": "indefinit",
  "je podpriestor": "ist ein Unterraum",
  "je to lineárny obal vektorov $(1, {@0}, 0)$ a $({@1}, 0, 1)$": "es ist die lineare Hülle der Vektoren $(1, {@0}, 0)$ und $({@1}, 0, 1)$",
  "je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia": "es ist die Lösungsmenge einer homogenen linearen Gleichung – die Summe von Lösungen und das Vielfache einer Lösung sind wieder Lösungen",
  "je to množina riešení homogénnej sústavy (priamka cez počiatok)": "es ist die Lösungsmenge eines homogenen Systems (Gerade durch den Ursprung)",
  "jeden parameter": "ein Parameter",
  "kladne definitná": "positiv definit",
  "kladne semidefinitná": "positiv semidefinit",
  "kolmá projekcia na os $x$": "senkrechte Projektion auf die $x$-Achse",
  "kolmá projekcia na os $y$": "senkrechte Projektion auf die $y$-Achse",
  "komplexné vlastné čísla – žiadny reálny vlastný smer": "komplexe Eigenwerte – keine reelle Eigenrichtung",
  "lineárne nezávislé": "linear unabhängig",
  "lineárne závislé": "linear abhängig",
  "napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie": "z. B. gehören $(1, 0, 0)$ und $(0, 1, 0)$ dazu, aber ihre Summe $(1, 1, 0)$ nicht – sie ist nicht abgeschlossen bezüglich der Addition",
  "napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom": "z. B. gehört $(1, 0, 0)$ dazu, aber $(-1)\\cdot(1, 0, 0)$ nicht – sie ist nicht abgeschlossen bezüglich der Multiplikation mit einer Zahl",
  "napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$": "z. B. gehört $(1, 1, 0)$ dazu, aber $2\\cdot(1, 1, 0)=(2, 2, 0)$ nicht, weil $2\\neq 4$",
  "nekladné": "nichtpositiv",
  "nenulové riadky": "von null verschiedene Zeilen",
  "nenulový riadok": "von null verschiedene Zeile",
  "neobsahuje nulový vektor ($0\\neq {@0}$)": "enthält nicht den Nullvektor ($0\\neq {@0}$)",
  "neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka ${@0}\\neq 0$": "enthält nicht den Nullvektor: Die erste Komponente ist nur für $s=0$ gleich 0, dann ist aber die zweite Komponente ${@0}\\neq 0$",
  "neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická": "es gilt weder $A^{T}=A$ noch $A^{T}=-A$, also ist die Matrix weder symmetrisch noch antisymmetrisch",
  "nezáporné": "nichtnegativ",
  "nie je podpriestor": "ist kein Unterraum",
  "osová súmernosť podľa osi $x$": "Achsenspiegelung an der $x$-Achse",
  "osová súmernosť podľa osi $y$": "Achsenspiegelung an der $y$-Achse",
  "osová súmernosť podľa priamky $y=-x$": "Spiegelung an der Geraden $y=-x$",
  "osová súmernosť podľa priamky $y=x$": "Spiegelung an der Geraden $y=x$",
  "platí $A^{T}=-A$, teda matica je antisymetrická": "es gilt $A^{T}=-A$, also ist die Matrix antisymmetrisch",
  "platí $A^{T}=A$, teda matica je symetrická": "es gilt $A^{T}=A$, also ist die Matrix symmetrisch",
  "práve jedno riešenie": "genau eine Lösung",
  "rotácia o $180^\\circ$": "Drehung um $180^\\circ$",
  "rotácia o $90^\\circ$ proti smeru hodinových ručičiek": "Drehung um $90^\\circ$ gegen den Uhrzeigersinn",
  "rotácia o $90^\\circ$ v smere hodinových ručičiek": "Drehung um $90^\\circ$ im Uhrzeigersinn",
  "rovnoľahlosť so stredom v počiatku a koeficientom $2$": "zentrische Streckung mit Zentrum im Ursprung und Faktor $2$",
  "skosenie $(x, y)\\mapsto(x+y, y)$": "Scherung $(x, y)\\mapsto(x+y, y)$",
  "sprava": "von rechts",
  "symetrická": "symmetrisch",
  "súradnice v báze B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) v štandardnej báze": "Koordinaten in der Basis B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) in der Standardbasis",
  "teda $\\alpha=\\frac{{@0}}{{@1}}={@2}$ a $\\beta=\\frac{{@3}}{{@4}}={@5}$.": "also $\\alpha=\\frac{{@0}}{{@1}}={@2}$ und $\\beta=\\frac{{@3}}{{@4}}={@5}$.",
  "vedúce prvky sú zvýraznené, pod schodmi sú len nuly": "Die Pivotelemente sind hervorgehoben, unter den Stufen stehen nur Nullen",
  "všetky rohové minory sú kladné": "alle führenden Hauptminoren sind positiv",
  "z {@0}. riadku: ${@1} = {@2}$": "aus der {@0}. Zeile: ${@1} = {@2}$",
  "znamienka rohových minorov sa striedajú ({@0})": "die Vorzeichen der führenden Hauptminoren wechseln sich ab ({@0})",
  "záporne definitná": "negativ definit",
  "záporne semidefinitná": "negativ semidefinit",
  "zľava": "von links",
  "{@0}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: ${@1}\\times{@2}={@3}${@4}. Všetky riešenia sú $t\\cdot{@5}$, $t\\in\\mathbb{R}$.": "{@0}<br>$h(A)=2\\lt 3$, die Lösungen bilden eine Gerade (ein Parameter). Die Lösung steht senkrecht auf beiden von null verschiedenen Zeilen der Zeilenstufenform, deshalb erhalten wir sie als ihr Vektorprodukt: ${@1}\\times{@2}={@3}${@4}. Alle Lösungen sind $t\\cdot{@5}$, $t\\in\\mathbb{R}$.",
  "{@0}<br>$h(A)={@1}$, teda $\\dim\\operatorname{Im}f={@2}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.": "{@0}<br>$h(A)={@1}$, also $\\dim\\operatorname{Im}f={@2}$ und nach dem Dimensionssatz $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.",
  "{@0}<br>Podľa Frobeniovej vety: {@1}.": "{@0}<br>Nach dem Satz von Frobenius: {@1}.",
  "{@0}<br>Spätné dosadzovanie – {@1}": "{@0}<br>Rückwärtseinsetzen – {@1}",
  "Úpravou: {@0}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom ${@1}\\times{@2}={@3}${@4}.": "Durch Umformung: {@0}<br>Der Rang ist 2, die Lösung steht senkrecht auf beiden von null verschiedenen Zeilen, ist also ein Vielfaches von ${@1}\\times{@2}={@3}${@4}.",
  "Číslo $\\lambda={@0}$ je vlastným číslom matice $A={@1}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).": "Die Zahl $\\lambda={@0}$ ist ein Eigenwert der Matrix $A={@1}$. Finde einen zugehörigen Eigenvektor (jedes von null verschiedene Vielfache ist richtig).",
  "Štvorcová matica $A$ rádu ${@0}$ má $\\det A={@1}$.{@2} Vypočítaj ${@3}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.": "Die quadratische Matrix $A$ der Ordnung ${@0}$ hat $\\det A={@1}$.{@2} Berechne ${@3}$. Ein nicht ganzzahliges Ergebnis gib als Bruch ein, z. B. $-3/4$.",
  "Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.": "Eine quadratische Matrix der Ordnung 3 hat genau dann den Rang 3, wenn ihre Determinante ungleich null ist.",
  "− súčiny na oranžových diagonálach": "− Produkte auf den orangen Diagonalen",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "Das ist das Quadrat des Abstands. Ziehe aus dem Ergebnis noch die Wurzel.",
  ", po úprave ${@0}$": ", nach Umformung ${@0}$"
 }
});
