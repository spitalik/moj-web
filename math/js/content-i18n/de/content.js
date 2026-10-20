/* Deutsch: preklad js/content.js, js/exercises.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/content/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "cisla": {
   "title": "Zahlenterme und Rechenreihenfolge",
   "summary": "Zahlen, Klammern und die richtige Reihenfolge beim Rechnen.",
   "theory": [
    "<p>Die natürlichen Zahlen sind $1, 2, 3, 4, \\dots$. Ihre Menge bezeichnen wir mit $\\mathbb{N}$. Nehmen wir die Null hinzu, erhalten wir die nichtnegativen ganzen Zahlen; mit den negativen Zahlen entsteht die Menge der ganzen Zahlen $\\mathbb{Z}$.</p>",
    {
     "fig": "numberline",
     "caption": "Zahlenstrahl: Die blauen Punkte sind natürliche Zahlen, links von der Null liegen die negativen ganzen Zahlen."
    },
    "<p><strong>Rechenreihenfolge:</strong></p>\n       <ol><li>Ausdrücke in Klammern,</li><li>Potenzen und Wurzeln,</li>\n       <li>Multiplikation und Division von links nach rechts,</li><li>Addition und Subtraktion von links nach rechts.</li></ol>"
   ],
   "examples": [
    {
     "task": "Berechne $2 + 3\\cdot 4 - 6 : 2$.",
     "steps": [
      "Zuerst Multiplikation und Division: $3\\cdot 4 = 12$, $6 : 2 = 3$.",
      "Der Term wird zu $2 + 12 - 3$.",
      "Von links nach rechts: $2 + 12 = 14$, dann $14 - 3 = 11$.",
      "<strong>Ergebnis: 11</strong>"
     ]
    }
   ]
  },
  "zlomky": {
   "title": "Brüche und Bruchrechnung",
   "summary": "Kürzen, Erweitern und Rechnen mit Brüchen.",
   "theory": [
    "<p>Der Bruch $\\frac{a}{b}$ hat den Zähler $a$ und den Nenner $b \\neq 0$. Der Wert des Bruchs ändert sich nicht, wenn wir Zähler und Nenner mit derselben Zahl ungleich null multiplizieren (<strong>Erweitern</strong>). Der umgekehrte Vorgang heißt <strong>Kürzen</strong>.</p>",
    {
     "fig": "fractions",
     "caption": "Erweitern ändert den Wert nicht: $\\frac{1}{2}=\\frac{3}{6}$ und $\\frac{2}{3}=\\frac{4}{6}$ haben gleich lange gefärbte Teile."
    },
    "<p><strong>Addition und Subtraktion</strong> erfordern einen gemeinsamen Nenner: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.</p>",
    "<p><strong>Multiplikation</strong>: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$. Bei der <strong>Division</strong> multiplizieren wir mit dem Kehrwert: $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $\\frac{1}{2}+\\frac{2}{3}$.",
     "steps": [
      "Der gemeinsame Nenner ist $2\\cdot 3 = 6$.",
      "$\\frac{1}{2}=\\frac{3}{6}$ und $\\frac{2}{3}=\\frac{4}{6}$.",
      "$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$.",
      "<strong>Ergebnis: $\\frac{7}{6}=1\\frac{1}{6}$</strong>"
     ]
    }
   ]
  },
  "percenta": {
   "title": "Prozente und Prozentrechnung",
   "summary": "Prozente berechnen, Erhöhung und Senkung um Prozente.",
   "theory": [
    "<p>$p\\,\\%$ bedeutet $\\frac{p}{100}$. Der Prozentwert von der Zahl $x$ ist $\\frac{p}{100}\\cdot x$.</p>",
    {
     "fig": "percent",
     "caption": "Das Ganze besteht aus 100 Teilen. $25\\,\\%$ bedeutet 25 davon."
    },
    "<p>Eine <strong>Erhöhung</strong> um $p\\,\\%$ ist die Multiplikation mit $1+\\frac{p}{100}$, eine <strong>Senkung</strong> die Multiplikation mit $1-\\frac{p}{100}$.</p>",
    "<p>Die Dezimalzahl $0{,}25$ ist der Bruch $\\frac{1}{4}$ und zugleich $25\\,\\%$. Im Deutschen schreibt man das Dezimaltrennzeichen als Komma.</p>"
   ],
   "examples": [
    {
     "task": "Eine Ware kostet $80\\,€$. Wie viel kostet sie nach einer Erhöhung um $15\\,\\%$?",
     "steps": [
      "Der Wachstumsfaktor ist $1+\\frac{15}{100}=1{,}15$.",
      "$80\\cdot 1{,}15 = 92$.",
      "<strong>Ergebnis: 92 €</strong>"
     ]
    }
   ]
  },
  "mnoziny": {
   "title": "Mengen und Mengenoperationen",
   "summary": "Elemente, Vereinigung, Schnitt, Differenz und Anzahl der Elemente.",
   "theory": [
    "<p>Eine Menge ist eine Zusammenfassung voneinander unterscheidbarer Elemente. Die Schreibweise $a\\in A$ bedeutet, dass das Element $a$ zur Menge $A$ gehört. Die leere Menge ist $\\varnothing$.</p>",
    "<p>Operationen: <strong>Vereinigung</strong> $A\\cup B$ (Elemente aus mindestens einer der Mengen), <strong>Schnittmenge</strong> $A\\cap B$ (Elemente aus beiden Mengen), <strong>Differenz</strong> $A\\setminus B$ (Elemente aus $A$, die nicht in $B$ liegen).</p>",
    {
     "fig": "venn",
     "caption": "Venn-Diagramm für $A=\\{1,2,3,4\\}$ und $B=\\{3,4,5\\}$. Die Schnittmenge liegt im Überlappungsbereich der Kreise."
    },
    "<p>Die Anzahl der Elemente bezeichnen wir mit $|A|$. Es gilt $|A\\cup B| = |A|+|B|-|A\\cap B|$: Die Elemente der Schnittmenge haben wir doppelt gezählt, deshalb ziehen wir sie ab.</p>"
   ],
   "examples": [
    {
     "task": "Gegeben sind $A=\\{1,2,3,4\\}$ und $B=\\{3,4,5\\}$. Bestimme $A\\cup B$, $A\\cap B$ und $A\\setminus B$.",
     "steps": [
      "$A\\cup B=\\{1,2,3,4,5\\}$",
      "$A\\cap B=\\{3,4\\}$",
      "$A\\setminus B=\\{1,2\\}$"
     ]
    }
   ]
  },
  "obsah": {
   "title": "Umfang und Flächeninhalt ebener Figuren",
   "summary": "Umfang und Flächeninhalt von Rechteck, Dreieck und Kreis.",
   "theory": [
    "<p>Ein Rechteck mit den Seiten $a$ und $b$ hat den Umfang $o=2(a+b)$ und den Flächeninhalt $S=a\\cdot b$.</p>",
    "<p>Ein Dreieck mit der Grundseite $z$ und der zugehörigen Höhe $v$ hat den Flächeninhalt $S=\\frac{z\\cdot v}{2}$.</p>",
    "<p>Ein Kreis mit dem Radius $r$ hat den Umfang $o=2\\pi r$ und den Flächeninhalt $S=\\pi r^2$, wobei $\\pi\\approx 3{,}14159$.</p>",
    {
     "fig": "shapes",
     "caption": "Die Seiten $a$, $b$ des Rechtecks, die Grundseite $z$ und die Höhe $v$ des Dreiecks, der Radius $r$ des Kreises."
    }
   ],
   "examples": [
    {
     "task": "Ein Kreis hat den Radius $r=3\\,\\text{cm}$. Berechne seinen Flächeninhalt.",
     "steps": [
      "$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$.",
      "$9\\pi\\approx 28{,}27\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "pytagoras": {
   "title": "Satz des Pythagoras",
   "summary": "Seitenlängen im rechtwinkligen Dreieck berechnen.",
   "theory": [
    "<p>In einem rechtwinkligen Dreieck mit den Katheten $a$, $b$ und der Hypotenuse $c$ gilt $a^2+b^2=c^2$. Die Hypotenuse liegt dem rechten Winkel gegenüber und ist immer die längste Seite.</p>",
    {
     "fig": "pythagoras",
     "caption": "Dreieck mit den Seiten $3, 4, 5$: Die Flächen der Quadrate über den Katheten $9+16$ ergeben zusammen die Fläche des Quadrats über der Hypotenuse $25$."
    },
    "<p>Bewährte ganzzahlige Tripel: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ und ihre Vielfachen.</p>"
   ],
   "examples": [
    {
     "task": "Die Katheten sind $6$ und $8$ lang. Wie lang ist die Hypotenuse?",
     "steps": [
      "$c^2=6^2+8^2=36+64=100$.",
      "$c=\\sqrt{100}=10$."
     ]
    }
   ]
  },
  "linearne": {
   "title": "Lineare Gleichungen",
   "summary": "Äquivalenzumformungen und Gleichungen ersten Grades.",
   "theory": [
    "<p>Gleichungen lösen wir mit <strong>Äquivalenzumformungen</strong>: Wir addieren auf beiden Seiten dieselbe Zahl oder subtrahieren sie, oder wir multiplizieren bzw. dividieren beide Seiten durch eine Zahl ungleich null.</p>",
    "<p>Die Gleichung $ax+b=c$ mit $a\\neq 0$ lösen wir so: $ax=c-b$, also $x=\\frac{c-b}{a}$.</p>",
    "<p>Die Probe machen wir, indem wir das Ergebnis in die ursprüngliche Gleichung einsetzen.</p>"
   ],
   "examples": [
    {
     "task": "Löse $3x+5=20$.",
     "steps": [
      "Wir subtrahieren $5$: $3x=15$.",
      "Wir dividieren durch $3$: $x=5$.",
      "Probe: $3\\cdot 5+5=20$ ✓"
     ]
    }
   ]
  },
  "kvadraticke": {
   "title": "Quadratische Gleichungen",
   "summary": "Diskriminante, Lösungsformel und der Satz von Vieta.",
   "theory": [
    "<p>Die quadratische Gleichung $ax^2+bx+c=0$ ($a\\neq 0$) hat die Lösungen $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$, wobei $D=b^2-4ac$ die <strong>Diskriminante</strong> ist.</p>",
    "<p>Ist $D&gt;0$, hat die Gleichung zwei verschiedene reelle Lösungen. Ist $D=0$, hat sie eine doppelte Lösung. Ist $D&lt;0$, hat sie keine reellen Lösungen.</p>",
    {
     "fig": "parabola",
     "caption": "Graph von $y=x^2+px+q$ (also $b=p$, $c=q$). Die Lösungen sind die Schnittpunkte der Parabel mit der $x$-Achse. Verändere $p$ und $q$ und beobachte die Diskriminante."
    },
    "<p><strong>Satz von Vieta</strong> (für $a=1$): $x_1+x_2=-b$ und $x_1\\cdot x_2=c$.</p>"
   ],
   "examples": [
    {
     "task": "Löse $x^2-5x+6=0$.",
     "steps": [
      "$a=1$, $b=-5$, $c=6$, $D=25-24=1$.",
      "$x_{1,2}=\\frac{5\\pm 1}{2}$, also $x_1=3$, $x_2=2$.",
      "Kontrolle: $3+2=5$ und $3\\cdot 2=6$ ✓"
     ]
    }
   ]
  },
  "mocniny": {
   "title": "Potenzen und Wurzeln",
   "summary": "Regeln für das Rechnen mit Potenzen und Wurzeln.",
   "theory": [
    "<p>Für $a&gt;0$ und ganze $m,n$ gilt: $a^m\\cdot a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{m\\cdot n}$.</p>",
    "<p>Negativer Exponent: $a^{-n}=\\frac{1}{a^n}$. Exponent null: $a^0=1$ für $a\\neq 0$.</p>",
    "<p>Das Wurzelziehen ist die Umkehrung des Potenzierens: $\\sqrt{a}=a^{1/2}$, $\\sqrt[n]{a}=a^{1/n}$. Es gilt $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$.</p>"
   ],
   "examples": [
    {
     "task": "Vereinfache $\\frac{2^5\\cdot 2^{-2}}{2}$.",
     "steps": [
      "Zähler: $2^5\\cdot 2^{-2}=2^{3}$.",
      "$\\frac{2^3}{2}=2^{2}$.",
      "<strong>Ergebnis: $4$</strong>"
     ]
    }
   ]
  },
  "goniometria": {
   "title": "Winkelfunktionen im rechtwinkligen Dreieck",
   "summary": "Sinus, Kosinus und Tangens im rechtwinkligen Dreieck.",
   "theory": [
    "<p>Im rechtwinkligen Dreieck mit dem spitzen Winkel $\\alpha$ gilt: $\\sin\\alpha=\\frac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$, $\\cos\\alpha=\\frac{\\text{Ankathete}}{\\text{Hypotenuse}}$, $\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$.</p>",
    {
     "fig": "trigtriangle",
     "caption": "Bezeichnung der Seiten eines rechtwinkligen Dreiecks bezüglich des Winkels $\\alpha$."
    },
    "<p>Grundbeziehung: $\\sin^2\\alpha+\\cos^2\\alpha=1$.</p>",
    {
     "fig": "unitcircle",
     "caption": "Einheitskreis: Ein Punkt darauf hat die Koordinaten $(\\cos\\alpha, \\sin\\alpha)$. Verschiebe den Winkel und beobachte, wie sich die Vorzeichen ändern."
    },
    "<p>Werte für die Standardwinkel:</p>\n       <table class=\"tbl\">\n         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>\n         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>\n         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>\n       </table>"
   ],
   "examples": [
    {
     "task": "Es sei $\\sin\\alpha=0{,}6$ und $\\alpha$ ein spitzer Winkel. Berechne $\\cos\\alpha$.",
     "steps": [
      "$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0{,}36=0{,}64$.",
      "$\\cos\\alpha=\\sqrt{0{,}64}=0{,}8$ (spitzer Winkel, der Kosinus ist positiv)."
     ]
    }
   ]
  },
  "matice": {
   "title": "Determinante und inverse 2×2-Matrix",
   "summary": "Matrixschreibweise, 2×2-Determinante und inverse Matrix.",
   "theory": [
    "<p>Eine $m\\times n$-Matrix ist eine Zahlentabelle mit $m$ Zeilen und $n$ Spalten. Das Element in der $i$-ten Zeile und $j$-ten Spalte bezeichnen wir mit $a_{ij}$.</p>",
    "<p>Die Determinante der Matrix $A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$ ist $\\det A=ad-bc$. Ist $\\det A\\neq 0$, existiert die inverse Matrix $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    {
     "fig": "parallelogram",
     "caption": "Die Spalten der Matrix $\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ sind die Vektoren $u=(2,1)$ und $v=(3,4)$. Der Betrag der Determinante ist der Flächeninhalt des Parallelogramms, das sie aufspannen: $|\\det|=5$."
    },
    "<p>Ein lineares Gleichungssystem lässt sich als $Ax=b$ schreiben und mithilfe der inversen Matrix lösen: $x=A^{-1}b$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $\\det\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$.",
     "steps": [
      "$\\det = 2\\cdot 4-3\\cdot 1 = 8-3 = 5$."
     ]
    }
   ]
  },
  "sucin": {
   "title": "Matrizenmultiplikation",
   "summary": "Wie man Matrizen multipliziert und warum die Reihenfolge wichtig ist.",
   "theory": [
    "<p>Das Produkt $C=AB$ existiert, wenn die Spaltenanzahl von $A$ gleich der Zeilenanzahl von $B$ ist. Das Element in der $i$-ten Zeile und $j$-ten Spalte ist $c_{ij}=\\sum_k a_{ik}b_{kj}$: Wir multiplizieren eine Zeile von $A$ mit einer Spalte von $B$ und addieren.</p>",
    {
     "fig": "matmul",
     "caption": "Das Element $c_{11}$ entsteht aus der 1. Zeile von $A$ und der 1. Spalte von $B$: $1\\cdot 0+2\\cdot 1=2$."
    },
    "<p>Die Matrizenmultiplikation ist <strong>nicht kommutativ</strong>: Im Allgemeinen gilt $AB\\neq BA$.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$, $B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$. Berechne $AB$.",
     "steps": [
      "$c_{11}=1\\cdot 0+2\\cdot 1=2$, $c_{12}=1\\cdot 1+2\\cdot 0=1$.",
      "$c_{21}=3\\cdot 0+4\\cdot 1=4$, $c_{22}=3\\cdot 1+4\\cdot 0=3$.",
      "<strong>Ergebnis:</strong> $AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$"
     ]
    }
   ]
  },
  "derivacie": {
   "title": "Ableitung einer Funktion",
   "summary": "Momentane Änderung, Ableitungsregeln und Tangente.",
   "theory": [
    "<p>Die Ableitung $f'(x_0)$ ist der Grenzwert $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$, falls er existiert. Geometrisch ist sie die Steigung der Tangente an den Graphen von $f$ im Punkt $x_0$.</p>",
    {
     "fig": "tangent",
     "caption": "Graph von $f(x)=x^3-2x$ und die Tangente im Punkt $x_0$. Ihre Steigung ist $f'(x_0)=3x_0^2-2$. Wo die Tangente waagerecht ist, ist die Ableitung null."
    },
    "<p>Regeln: $(x^n)'=n\\,x^{n-1}$, $(c)'=0$, $(c\\,f)'=c\\,f'$, $(f+g)'=f'+g'$, $(f\\cdot g)'=f'g+fg'$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$.</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-2x$. Berechne $f'(2)$.",
     "steps": [
      "$f'(x)=3x^2-2$.",
      "$f'(2)=3\\cdot 2^2-2=12-2=10$."
     ]
    }
   ]
  },
  "integraly": {
   "title": "Grundlagen der Integralrechnung",
   "summary": "Unbestimmtes und bestimmtes Integral, Hauptsatz der Differential- und Integralrechnung.",
   "theory": [
    "<p>Eine Stammfunktion $F$ der Funktion $f$ erfüllt $F'(x)=f(x)$. Unbestimmtes Integral: $\\int f(x)\\,dx=F(x)+C$. Für $n\\neq -1$ gilt $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$.</p>",
    "<p>Das bestimmte Integral berechnen wir mit dem <strong>Hauptsatz der Differential- und Integralrechnung</strong> (Newton-Leibniz-Formel): $\\int_a^b f(x)\\,dx=F(b)-F(a)$. Geometrisch ist es der Flächeninhalt unter dem Graphen von $f$ von $a$ bis $b$ (für positives $f$).</p>",
    {
     "fig": "area",
     "caption": "Die Fläche unter dem Graphen von $f(x)=x^2$ von $0$ bis $b$ ist $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$."
    },
    "<p>Linearität: $\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $\\int_0^2 3x^2\\,dx$.",
     "steps": [
      "Stammfunktion: $F(x)=x^3$.",
      "$F(2)-F(0)=8-0=8$.",
      "<strong>Ergebnis: 8</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A={@0}$, $B={@1}$. Aký prvok má súčin $AB$ v riadku {@2} a stĺpci {@3}?": "$A={@0}$, $B={@1}$. Welches Element hat das Produkt $AB$ in Zeile {@2} und Spalte {@3}?",
  "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, teda $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.": "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, also $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.",
  "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).": "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — gib das Ergebnis als Bruch in der Form $p/q$ ein (z. B. 5/6).",
  "$b^2=c^2-a^2={@0}-{@1}={@2}$, teda $b={@3}$.": "$b^2=c^2-a^2={@0}-{@1}={@2}$, also $b={@3}$.",
  "$c^2=a^2+b^2={@0}+{@1}={@2}$, teda $c={@3}$.": "$c^2=a^2+b^2={@0}+{@1}={@2}$, also $c={@3}$.",
  "$f'(x)={@0}x^{{@1}}{@2}$, teda $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.": "$f'(x)={@0}x^{{@1}}{@2}$, also $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.",
  "$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.": "$p\\,\\%$ von $x$ ist $\\frac{p}{100}\\cdot x$.",
  "${@0}\\,\\%=\\frac{{@1}}{100}$, teda $\\frac{{@2}}{100}\\cdot {@3}={@4}$.": "${@0}\\,\\%=\\frac{{@1}}{100}$, also $\\frac{{@2}}{100}\\cdot {@3}={@4}$.",
  "${@0}x={@1}{@2}={@3}$, teda $x={@4}$.": "${@0}x={@1}{@2}={@3}$, also $x={@4}$.",
  "25 štvorčekov zo 100": "25 Kästchen von 100",
  "Aký exponent bude mať výsledok ${@0}^{\\square}$?": "Welchen Exponenten hat das Ergebnis ${@0}^{\\square}$?",
  "Aký je spoločný menovateľ (súčin menovateľov ${@0}\\cdot {@1}$)?": "Wie lautet der gemeinsame Nenner (Produkt der Nenner ${@0}\\cdot {@1}$)?",
  "Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?": "Wie groß ist die Summe der Lösungen $x_1 + x_2$ (nach dem Satz von Vieta)?",
  "Aký je súčin koreňov $x_1 \\cdot x_2$?": "Wie groß ist das Produkt der Lösungen $x_1 \\cdot x_2$?",
  "Derivácia je $f'(x)=k\\,x^{{@0}}{@1}$. Aký je koeficient $k$?": "Die Ableitung ist $f'(x)=k\\,x^{{@0}}{@1}$. Wie groß ist der Koeffizient $k$?",
  "Determinant ako obsah rovnobežníka": "Determinante als Flächeninhalt eines Parallelogramms",
  "Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.": "Du hast in die ursprüngliche Funktion $f$ eingesetzt. Leite die Funktion zuerst ab und setze erst dann ein.",
  "Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.": "Du hast in die ursprüngliche Funktion eingesetzt. Bestimme zuerst die Stammfunktion $F$ und setze in sie ein.",
  "Dosadil si len hornú hranicu. Od $F({@0})$ ešte odčítaj $F({@1})$.": "Du hast nur die obere Grenze eingesetzt. Von $F({@0})$ musst du noch $F({@1})$ abziehen.",
  "Dosadil si priemer ${@0}$. Vo vzorci $\\pi r^2$ je polomer $r={@1}$.": "Du hast den Durchmesser ${@0}$ eingesetzt. In der Formel $\\pi r^2$ ist der Radius $r={@1}$.",
  "Druhý súčin: koľko je ${@0}\\cdot {@1}$?": "Zweites Produkt: Wie viel ist ${@0}\\cdot {@1}$?",
  "Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.": "Du hast die Längen nur subtrahiert. Der Satz des Pythagoras gilt für die Quadrate: $b^2=c^2-a^2$.",
  "Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.": "Du hast die Exponenten addiert. Beim Potenzieren einer Potenz werden die Exponenten multipliziert.",
  "Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.": "Du hast die Exponenten multipliziert. Beim Multiplizieren von Potenzen mit gleicher Basis werden die Exponenten addiert.",
  "Graf funkcie s dotyčnicou": "Graph einer Funktion mit Tangente",
  "Graf kvadratickej funkcie": "Graph einer quadratischen Funktion",
  "Horná hranica b": "Obere Grenze b",
  "Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.": "Suche zwei Zahlen, deren Produkt $q$ und deren Summe $-p$ ist.",
  "Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.": "Die Identität gilt für die Quadrate: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nicht $\\cos\\alpha = 1 - \\sin\\alpha$.",
  "Jednotková kružnica": "Einheitskreis",
  "Koeficient {@0} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom {@1}.": "Du hast den Koeffizienten {@0} subtrahiert. Bei $x$ steht eine Multiplikation, deshalb dividiere beide Seiten durch {@1}.",
  "Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.": "Die Lösungen sind doppelt so groß. Vergiss in der Formel $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nicht, durch zwei zu teilen.",
  "Koľko je $1\\,\\%$ z čísla {@0}?": "Wie viel ist $1\\,\\%$ von {@0}?",
  "Koľko je $F({@0}) - F({@1})$?": "Wie viel ist $F({@0}) - F({@1})$?",
  "Koľko je $F({@0})$?": "Wie viel ist $F({@0})$?",
  "Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?": "Wie viel ist $\\cos\\alpha$ (spitzer Winkel, positive Wurzel) auf 3 Dezimalstellen?",
  "Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.": "Wie viel ist $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Gib es als Bruch ein.",
  "Koľko je $\\pi\\cdot {@0}$ (použi $\\pi\\approx 3{{@1}}14$)?": "Wie viel ist $\\pi\\cdot {@0}$ (verwende $\\pi\\approx 3{{@1}}14$)?",
  "Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).": "Wie viel ist $\\sin^2\\alpha$? Gib es als Bruch ein (z. B. 9/25).",
  "Koľko je $a^2 = {@0}^2$?": "Wie viel ist $a^2 = {@0}^2$?",
  "Koľko je $b = \\sqrt{{@0}}$?": "Wie viel ist $b = \\sqrt{{@0}}$?",
  "Koľko je $b^2 = {@0} - {@1}$?": "Wie viel ist $b^2 = {@0} - {@1}$?",
  "Koľko je $b^2 = {@0}^2$?": "Wie viel ist $b^2 = {@0}^2$?",
  "Koľko je $c = \\sqrt{{@0}}$?": "Wie viel ist $c = \\sqrt{{@0}}$?",
  "Koľko je $c^2 = {@0} + {@1}$?": "Wie viel ist $c^2 = {@0} + {@1}$?",
  "Koľko je $c^2 = {@0}^2$?": "Wie viel ist $c^2 = {@0}^2$?",
  "Koľko je $f'({@0})$?": "Wie viel ist $f'({@0})$?",
  "Koľko je $r^2 = {@0}^2$?": "Wie viel ist $r^2 = {@0}^2$?",
  "Koľko je $z\\cdot v = {@0}\\cdot {@1}$?": "Wie viel ist $z\\cdot v ={@0}\\cdot {@1}$?",
  "Koľko je ${@0} + {@1} - {@2}$?": "Wie viel ist ${@0} + {@1} - {@2}$?",
  "Koľko je ${@0} - ({@1})$?": "Wie viel ist ${@0} - ({@1})$?",
  "Koľko je ${@0} : {@1}$?": "Wie viel ist ${@0} : {@1}$?",
  "Koľko je ${@0}\\,\\%$ z čísla ${@1}$?": "Wie viel sind ${@0}\\,\\%$ von ${@1}$?",
  "Koľko je ${@0}\\cdot {@1}$?": "Wie viel ist ${@0}\\cdot {@1}$?",
  "Koľko je ${@0}^{{@1}}$?": "Wie viel ist ${@0}^{{@1}}$?",
  "Koľko je $|A| + |B|$?": "Wie viel ist $|A| + |B|$?",
  "Koľko je teda ${@0}\\,\\%$ z čísla {@1}?": "Wie viel sind also ${@0}\\,\\%$ von {@1}?",
  "Kruh má polomer $r={@0}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{{@1}}14$).": "Ein Kreis hat den Radius $r={@0}$. Berechne seinen Flächeninhalt $S$ (verwende $\\pi\\approx 3{{@1}}14$).",
  "Ktoré dve čísla majú súčet {@0} a súčin {@1}? Zadaj ich oddelené bodkočiarkou.": "Welche zwei Zahlen haben die Summe {@0} und das Produkt {@1}? Gib sie durch ein Semikolon getrennt ein.",
  "Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.": "Matrizen werden nicht elementweise an gleicher Stelle multipliziert. Multipliziere die Zeile der Matrix $A$ mit der Spalte der Matrix $B$ und addiere die Produkte.",
  "Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.": "Du hast den Nenner auf den gemeinsamen gebracht, aber die Zähler nicht erweitert. Multipliziere den Zähler mit derselben Zahl wie den Nenner.",
  "Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?": "Die Menge $A$ hat ${@0}$ Elemente, die Menge $B$ hat ${@1}$ Elemente und ihre Schnittmenge hat ${@2}$ Elemente. Wie viele Elemente hat $A\\cup B$?",
  "Najprv násobenie a delenie: ${@0}\\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} + {@7} - {@8} = {@9}$.": "Zuerst Multiplikation und Division: ${@0}\\cdot {@1} = {@2}$ und ${@3} : {@4} = {@5}$. Dann ${@6} + {@7} - {@8} = {@9}$.",
  "Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.": "Subtrahiere zuerst die Konstante auf beiden Seiten, dann dividiere durch den Koeffizienten von $x$.",
  "Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.": "Rechne zuerst Multiplikation und Division, erst danach Addition und Subtraktion.",
  "Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.": "Du hast die Elemente in den Spalten multipliziert. Multipliziere entlang der Diagonalen: $a\\cdot d$ und $b\\cdot c$.",
  "Obdĺžnik má strany $a={@0}$ a $b={@1}$. Aký je jeho obsah $S$?": "Ein Rechteck hat die Seiten $a={@0}$ und $b={@1}$. Wie groß ist sein Flächeninhalt $S$?",
  "Obdĺžnik, trojuholník a kruh": "Rechteck, Dreieck und Kreis",
  "Obsah kruhu je $\\pi r^2$.": "Der Flächeninhalt des Kreises ist $\\pi r^2$.",
  "Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.": "Der Flächeninhalt des Rechtecks ist das Produkt der Längen zweier benachbarter Seiten.",
  "Obsah trojuholníka je polovica súčinu základne a výšky.": "Der Flächeninhalt des Dreiecks ist die Hälfte des Produkts aus Grundseite und Höhe.",
  "Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.": "Du hast die Katheten nur addiert. Der Satz des Pythagoras gilt für die Quadrate: $c^2=a^2+b^2$.",
  "Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).": "Der spitze Winkel $\\alpha$ erfüllt $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Berechne $\\cos\\alpha$ (auf 3 Dezimalstellen).",
  "Plocha pod grafom funkcie": "Fläche unter dem Graphen einer Funktion",
  "Použi $(x^n)'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.": "Verwende $(x^n)'=n\\,x^{n-1}$ und leite jeden Summanden einzeln ab.",
  "Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.": "Verwende $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ und dann den Hauptsatz (Newton-Leibniz).",
  "Použi Pytagorovu vetu $c^2=a^2+b^2$.": "Verwende den Satz des Pythagoras $c^2=a^2+b^2$.",
  "Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.": "Verwende die Identität $\\sin^2\\alpha+\\cos^2\\alpha=1$.",
  "Pozri si tabuľku hodnôt v teórii.": "Schau dir die Wertetabelle in der Theorie an.",
  "Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.": "Du hast von links nach rechts gerechnet. Punktrechnung geht vor Strichrechnung.",
  "Pravouhlý trojuholník má odvesny $a={@0}$ a $b={@1}$. Aká je dĺžka prepony $c$?": "Ein rechtwinkliges Dreieck hat die Katheten $a={@0}$ und $b={@1}$. Wie lang ist die Hypotenuse $c$?",
  "Pravouhlý trojuholník má preponu $c={@0}$ a odvesnu $a={@1}$. Aká je dĺžka druhej odvesny $b$?": "Ein rechtwinkliges Dreieck hat die Hypotenuse $c={@0}$ und die Kathete $a={@1}$. Wie lang ist die zweite Kathete $b$?",
  "Pravouhlý trojuholník s popisom strán": "Rechtwinkliges Dreieck mit Seitenbezeichnungen",
  "Pre $2\\times 2$ matica je $\\det=ad-bc$.": "Für eine $2\\times 2$-Matrix gilt $\\det=ad-bc$.",
  "Pre funkciu $f(x)={@0}x^{{@1}}{@2}$ vypočítaj $f'({@3})$.": "Berechne für die Funktion $f(x)={@0}x^{{@1}}{@2}$ den Wert $f'({@3})$.",
  "Prenes konštantu na pravú stranu. Koľko je ${@0}x$?": "Bringe die Konstante auf die rechte Seite. Wie viel ist ${@0}x$?",
  "Pri násobení mocnín rovnakého základu sa exponenty sčítajú.": "Beim Multiplizieren von Potenzen mit gleicher Basis werden die Exponenten addiert.",
  "Pri prenesení čísla {@0} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.": "Beim Bringen der Zahl {@0} auf die andere Seite hast du das Vorzeichen nicht geändert. Führe auf beiden Seiten dieselbe Umkehroperation aus.",
  "Pri umocňovaní mocniny sa exponenty násobia.": "Beim Potenzieren einer Potenz werden die Exponenten multipliziert.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, teda $F({@3})-F({@4})={@5}$.": "Die Stammfunktion ist $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, also $F({@3})-F({@4})={@5}$.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Koľko je $F({@3})$?": "Die Stammfunktion ist $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Wie viel ist $F({@3})$?",
  "Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.": "Die Elemente der Schnittmenge werden doppelt gezählt, deshalb ziehe sie ab.",
  "Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.": "Du hast die Elemente der Schnittmenge zweimal abgezogen. Sie gehören zur Vereinigung – ziehe sie nur einmal ab.",
  "Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.": "Du hast die Elemente der Schnittmenge doppelt gezählt – sie sind in $A$ und in $B$. Ziehe sie einmal ab.",
  "Prvky prieniku sú v tomto súčte dvakrát. Koľko je ${@0} - {@1}$?": "Die Elemente der Schnittmenge sind in dieser Summe doppelt. Wie viel ist ${@0} - {@1}$?",
  "Prvý súčin: koľko je ${@0}\\cdot {@1}$?": "Erstes Produkt: Wie viel ist ${@0}\\cdot {@1}$?",
  "Pytagorova veta: štvorce nad stranami": "Satz des Pythagoras: Quadrate über den Seiten",
  "Rozšír druhý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Erweitere den zweiten Bruch auf den Nenner {@0}. Wie lautet sein Zähler?",
  "Rozšír prvý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Erweitere den ersten Bruch auf den Nenner {@0}. Wie lautet sein Zähler?",
  "Spoločný menovateľ je ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.": "Der gemeinsame Nenner ist ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.",
  "Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.": "Du hast die Seiten addiert. Den Flächeninhalt des Rechtecks erhältst du, indem du sie multiplizierst.",
  "Súčet: koľko je ${@0} + {@1}$?": "Summe: Wie viel ist ${@0} + {@1}$?",
  "Súčin matíc: riadok krát stĺpec": "Matrizenprodukt: Zeile mal Spalte",
  "Súčin na hlavnej diagonále: koľko je $({@0})\\cdot({@1})$?": "Produkt auf der Hauptdiagonale: Wie viel ist $({@0})\\cdot({@1})$?",
  "Súčin na vedľajšej diagonále: koľko je $({@0})\\cdot({@1})$?": "Produkt auf der Nebendiagonale: Wie viel ist $({@0})\\cdot({@1})$?",
  "Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.": "Du hast die Produkte addiert. Die Determinante ist eine Differenz: Produkt auf der Hauptdiagonale minus Produkt auf der Nebendiagonale.",
  "Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.": "Addiere die Zähler und schreibe das Ergebnis als Bruch $p/q$.",
  "Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.": "Du hast Zähler und Nenner addiert. Brüche werden erst nach dem Bringen auf einen gemeinsamen Nenner addiert – der Nenner wird nicht addiert.",
  "To je $\\cos^2\\alpha$. Na konci ešte odmocni.": "Das ist $\\cos^2\\alpha$. Am Ende musst du noch die Wurzel ziehen.",
  "To je $b^2$. Na konci ešte odmocni.": "Das ist $b^2$. Am Ende musst du noch die Wurzel ziehen.",
  "To je $c^2$. Na konci ešte odmocni.": "Das ist $c^2$. Am Ende musst du noch die Wurzel ziehen.",
  "To je hodnota {@0} uhla ${@1}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.": "Das ist der Wert des {@0} für den Winkel ${@1}^\\circ$. Der Sinus wächst mit steigendem Winkel von 0 bis 1, der Kosinus fällt von 1 bis 0.",
  "To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.": "Das ist der Umfang (Summe aller Seiten). Der Flächeninhalt ist das Produkt zweier benachbarter Seiten.",
  "To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.": "Das ist der Umfang des Kreises $2\\pi r$. Der Flächeninhalt ist $\\pi r^2$.",
  "To je zvyšok do 100 %. Pýtame sa na samotných ${@0}\\,\\%$ z čísla {@1}.": "Das ist der Rest bis 100 %. Gefragt sind genau die ${@0}\\,\\%$ von {@1}.",
  "Trojuholník je polovica obdĺžnika. Koľko je ${@0} : 2$?": "Das Dreieck ist die Hälfte eines Rechtecks. Wie viel ist ${@0} : 2$?",
  "Trojuholník má základňu $z={@0}$ a výšku $v={@1}$. Aký je jeho obsah $S$?": "Ein Dreieck hat die Grundseite $z={@0}$ und die Höhe $v={@1}$. Wie groß ist sein Flächeninhalt $S$?",
  "Uhol α (°)": "Winkel α (°)",
  "Vennov diagram dvoch množín": "Venn-Diagramm zweier Mengen",
  "Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.": "Nimm die $i$-te Zeile der Matrix $A$ und die $j$-te Spalte der Matrix $B$ und multipliziere sie komponentenweise.",
  "Vietove vzťahy: $x_1+x_2={@0}$ a $x_1\\cdot x_2={@1}$. Korene sú $x_1={@2}$ a $x_2={@3}$.": "Satz von Vieta: $x_1+x_2={@0}$ und $x_1\\cdot x_2={@1}$. Die Lösungen sind $x_1={@2}$ und $x_2={@3}$.",
  "Vydeľ obe strany číslom {@0}. Koľko je $x$?": "Dividiere beide Seiten durch {@0}. Wie viel ist $x$?",
  "Vypočítaj $({@0}^{{@1}})^{{@2}}$.": "Berechne $({@0}^{{@1}})^{{@2}}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.": "Berechne $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.",
  "Vypočítaj ${@0}\\,{@1}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).": "Berechne ${@0}\\,{@1}^\\circ$ als Dezimalzahl (auf 3 Dezimalstellen).",
  "Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.": "Berechne ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.",
  "Vypočítaj determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.": "Berechne die Determinante $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.",
  "Vyrieš rovnicu $x^2{@0}{@1} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).": "Löse die Gleichung $x^2{@0}{@1} = 0$. Gib beide Lösungen durch ein Semikolon getrennt ein (z. B. 2; 3).",
  "Vyrieš rovnicu ${@0}x{@1} = {@2}$.": "Löse die Gleichung ${@0}x{@1} = {@2}$.",
  "Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.": "Drücke aus dem Satz des Pythagoras $b^2=c^2-a^2$ aus.",
  "Z matice $B$ si vzal riadok. Prvok súčinu je {@0}. riadok matice $A$ krát {@1}. stĺpec matice $B$.": "Du hast aus der Matrix $B$ eine Zeile genommen. Das Element des Produkts ist die {@0}. Zeile der Matrix $A$ mal die {@1}. Spalte der Matrix $B$.",
  "Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.": "Du hast vergessen, durch zwei zu teilen. Das Dreieck ist die Hälfte eines Rechtecks mit den Seiten $z$ und $v$.",
  "Zabudol si deliť číslom {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.": "Du hast vergessen, durch {@0} zu teilen: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.",
  "Zabudol si exponent {@0} dať pred $x$: $(x^{{@1}})'={@2}x^{{@3}}$.": "Du hast vergessen, den Exponenten {@0} vor das $x$ zu schreiben: $(x^{{@1}})'={@2}x^{{@3}}$.",
  "Zabudol si na delenie. Neodčítavaš {@0}, ale až výsledok ${@1} : {@2}$.": "Du hast die Division vergessen. Du ziehst nicht {@0} ab, sondern erst das Ergebnis ${@1} : {@2}$.",
  "Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.": "Du hast vergessen, den Radius zu quadrieren: Der Flächeninhalt ist $\\pi\\cdot r\\cdot r$.",
  "Zlomky ako pruhy": "Brüche als Streifen",
  "Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.": "Bringe die Brüche auf einen gemeinsamen Nenner: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.",
  "Základy si vynásobil. Základ {@0} ostáva, sčítajú sa len exponenty.": "Du hast die Basen multipliziert. Die Basis {@0} bleibt, nur die Exponenten werden addiert.",
  "b = {@0} · <span class=\"c-accent\">obsah = b³/3 = {@1}</span>": "b = {@0} · <span class=\"c-accent\">Fläche = b³/3 = {@1}</span>",
  "korene x₁ = {@0}, x₂ = {@1}": "Lösungen x₁ = {@0}, x₂ = {@1}",
  "kosínusu": "Kosinus",
  "kruh": "Kreis",
  "napr. 5/6": "z. B. 5/6",
  "nemá reálne korene (D &lt; 0)": "keine reellen Lösungen (D &lt; 0)",
  "obdĺžnik": "Rechteck",
  "odvesna": "Kathete",
  "prepona": "Hypotenuse",
  "prirodzené čísla ℕ": "natürliche Zahlen ℕ",
  "priľahlá odvesna": "Ankathete",
  "protiľahlá": "Gegenkathete",
  "sínusu": "Sinus",
  "trojuholník": "Dreieck",
  "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (smernica dotyčnice)": "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (Steigung der Tangente)",
  "y = x²{@0}{@1} · D = {@2} · {@3}": "y = x²{@0}{@1} · D = {@2} · {@3}",
  "záporné celé čísla": "negative ganze Zahlen",
  "Člen ${@0}x$ si nezderivoval. Jeho derivácia je {@1}.": "Du hast den Summanden ${@0}x$ nicht abgeleitet. Seine Ableitung ist {@1}.",
  "Číselná os": "Zahlengerade",
  "Číslo si vydelil počtom percent. ${@0}\\,\\%$ znamená {@1} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob {@2}.": "Du hast die Zahl durch die Prozentzahl geteilt. ${@0}\\,\\%$ bedeutet {@1} Hundertstel, deshalb bestimme zuerst 1 % (durch 100 teilen) und multipliziere dann mit {@2}.",
  "Štvorec rozdelený na 100 dielov, 25 je vyfarbených": "Quadrat in 100 Teile geteilt, 25 sind eingefärbt",
  "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>": "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>"
 }
});
