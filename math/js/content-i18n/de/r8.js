/* Deutsch: preklad js/rocniky/r8.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/r8/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "r8-cisla": {
   "title": "Ganze und rationale Zahlen",
   "summary": "Negative Zahlen, Gegenzahl, Betrag und Rechnen mit Brüchen mit Vorzeichen.",
   "theory": [
    "<p>Die <strong>natürlichen Zahlen</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ verwenden wir beim Zählen von Gegenständen. Nehmen wir die Null\n       und die Gegenzahlen ($-1, -2, -3, \\dots$) hinzu, erhalten wir die <strong>ganzen Zahlen</strong> $\\mathbb{Z}$. Die <strong>rationalen Zahlen</strong> $\\mathbb{Q}$\n       sind alle Zahlen, die sich als Bruch $\\frac{p}{q}$ schreiben lassen ($p$ ganz, $q$ natürlich), zum Beispiel $\\frac{3}{4}$,\n       $-2{,}5 = -\\frac{5}{2}$ oder $7 = \\frac{7}{1}$.</p>",
    {
     "fig": "r8-obory",
     "caption": "Jede natürliche Zahl ist ganz, und jede ganze Zahl ist rational: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$."
    },
    "<p>Die <strong>Gegenzahl</strong> zur Zahl $a$ ist $-a$: Zur Zahl $5$ ist es $-5$, zur Zahl $-3$ ist es $3$. Der <strong>Betrag</strong> $|a|$\n       ist der Abstand der Zahl von der Null auf dem Zahlenstrahl, deshalb ist er nie negativ: $|-7| = 7$, $|7| = 7$.</p>",
    "<p><strong>Rechnen mit Vorzeichen:</strong> Eine Zahl subtrahieren heißt, ihre Gegenzahl addieren: $4 - (-6) = 4 + 6 = 10$.\n       Beim Multiplizieren und Dividieren ergeben gleiche Vorzeichen ein positives Ergebnis und verschiedene Vorzeichen ein negatives: $(-3)\\cdot(-4) = 12$, $(-20) : 5 = -4$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $-8 - (-5) + 2\\cdot(-3)$.",
     "steps": [
      "Zuerst die Multiplikation: $2\\cdot(-3) = -6$ (verschiedene Vorzeichen, das Ergebnis ist negativ).",
      "Die Subtraktion einer negativen Zahl ersetzen wir durch eine Addition: $-8 - (-5) = -8 + 5 = -3$.",
      "Zum Schluss $-3 + (-6) = -9$.",
      "<strong>Ergebnis: $-9$</strong>"
     ]
    },
    {
     "task": "Vergleiche die Zahlen $-\\frac{3}{4}$ und $-0{,}7$.",
     "steps": [
      "Wir wandeln den Bruch in eine Dezimalzahl um: $-\\frac{3}{4} = -0{,}75$.",
      "Die Zahl $-0{,}75$ ist auf der negativen Seite weiter von der Null entfernt, sie liegt also auf dem Zahlenstrahl weiter links.",
      "<strong>$-\\frac{3}{4} &lt; -0{,}7$</strong>"
     ]
    }
   ]
  },
  "r8-mocniny": {
   "title": "Potenzen und Wurzeln",
   "summary": "Quadrat- und Kubikzahlen, Quadratwurzel, Wurzeln abschätzen und große Zahlen schreiben.",
   "theory": [
    "<p>Die <strong>Potenz</strong> $a^n$ ist eine Kurzschreibweise für ein Produkt aus $n$ gleichen Faktoren: $a^n = a\\cdot a\\cdot\\ldots\\cdot a$.\n       Die Zahl $a$ ist die <em>Basis</em> und $n$ der <em>Exponent</em> (Hochzahl). Zum Beispiel ist $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$.</p>",
    {
     "fig": "r8-mocniny",
     "caption": "Die zweite Potenz ist der Flächeninhalt eines Quadrats: Ein Quadrat mit der Seite 3 hat $3^2 = 9$ Kästchen. Die dritte Potenz ist das Volumen eines Würfels: Ein Würfel mit der Kante 2 besteht aus $2^3 = 8$ Würfelchen."
    },
    "<p><strong>Achtung beim Vorzeichen:</strong> $(-3)^2 = (-3)\\cdot(-3) = 9$, aber $-3^2 = -(3\\cdot 3) = -9$.\n       Eine gerade Potenz einer negativen Zahl ist positiv, eine ungerade negativ: $(-2)^3 = -8$.</p>",
    "<p>Die <strong>Quadratwurzel</strong> aus einer nichtnegativen Zahl $a$ ist die nichtnegative Zahl $b$, für die $b^2 = a$ gilt. Wir schreiben $\\sqrt{a} = b$,\n       zum Beispiel $\\sqrt{49} = 7$ und $\\sqrt{0{,}09} = 0{,}3$. Große Zahlen schreiben wir in der Form $a\\cdot 10^n$ mit $1 \\le a &lt; 10$:\n       $45\\,000 = 4{,}5\\cdot 10^4$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $(-2)^3 + 3^2 - \\sqrt{64}$.",
     "steps": [
      "$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$.",
      "$3^2 = 9$ und $\\sqrt{64} = 8$, weil $8^2 = 64$.",
      "$-8 + 9 - 8 = -7$.",
      "<strong>Ergebnis: $-7$</strong>"
     ]
    },
    {
     "task": "Zwischen welchen zwei aufeinanderfolgenden natürlichen Zahlen liegt $\\sqrt{50}$?",
     "steps": [
      "Wir suchen Quadratzahlen in der Nähe von 50: $7^2 = 49$ und $8^2 = 64$.",
      "Da $49 &lt; 50 &lt; 64$, gilt $7 &lt; \\sqrt{50} &lt; 8$.",
      "<strong>$\\sqrt{50}$ liegt zwischen den Zahlen 7 und 8</strong> (sehr nah bei 7)."
     ]
    }
   ]
  },
  "r8-vyrazy": {
   "title": "Terme mit Variablen",
   "summary": "Was eine Variable ist, Einsetzen in einen Term und das Übersetzen einer Beschreibung in einen Term.",
   "theory": [
    "<p>Eine <strong>Variable</strong> ist ein Buchstabe (zum Beispiel $x$, $a$, $n$), der für eine beliebige Zahl steht. Ein <strong>Term mit Variablen</strong>\n       verbindet Zahlen und Variablen durch Rechenzeichen, zum Beispiel $3x + 5$ oder $2(a - 1)$. Zwischen einer Zahl und einer Variablen schreiben wir\n       den Malpunkt nicht: $3x$ bedeutet $3\\cdot x$.</p>",
    "<p>Den <strong>Wert eines Terms</strong> berechnen wir, indem wir für die Variable eine Zahl einsetzen. Negative Zahlen setzen wir in Klammern ein:\n       Für $x = -2$ ist $x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$.</p>",
    {
     "fig": "r8-obdlznik",
     "caption": "Ein Rechteck mit den Seiten $a$ und $a + 3$ hat den Umfang $o = 2a + 2(a + 3)$ und den Flächeninhalt $S = a(a + 3)$. Für $a = 4$ ist $o = 22$ und $S = 28$."
    },
    "<p><strong>In Worten:</strong> „das Doppelte der Zahl $x$“ ist $2x$, „die Zahl, die um 5 größer ist als $x$“ ist $x + 5$, „ein Drittel der Zahl $x$“ ist $\\frac{x}{3}$,\n       „das Quadrat der Summe der Zahlen $a$ und $b$“ ist $(a + b)^2$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne den Wert des Terms $2x^2 - 5x + 1$ für $x = -3$.",
     "steps": [
      "Wir setzen $-3$ in Klammern ein: $2\\cdot(-3)^2 - 5\\cdot(-3) + 1$.",
      "$(-3)^2 = 9$, also $2\\cdot 9 = 18$; außerdem $-5\\cdot(-3) = 15$.",
      "$18 + 15 + 1 = 34$.",
      "<strong>Der Wert des Terms ist 34.</strong>"
     ]
    },
    {
     "task": "Schreibe als Term: „die Zahl, die um 4 kleiner ist als das Dreifache der Zahl $n$“.",
     "steps": [
      "Das Dreifache der Zahl $n$ ist $3n$.",
      "„Um 4 kleiner“ bedeutet, 4 zu subtrahieren.",
      "<strong>$3n - 4$</strong>"
     ]
    }
   ]
  },
  "r8-upravy": {
   "title": "Umformen algebraischer Terme",
   "summary": "Gleichartige Terme, Ausmultiplizieren von Klammern und binomische Formeln.",
   "theory": [
    "<p><strong>Gleichartige Terme</strong> haben dieselbe Variable mit demselben Exponenten, zum Beispiel $3x$ und $-5x$ oder $2x^2$ und $x^2$.\n       Wir fassen sie zusammen, indem wir die Koeffizienten addieren: $3x - 5x + 2 = -2x + 2$. Ungleichartige Terme (zum Beispiel $x^2$ und $x$) können wir nicht zusammenfassen.</p>",
    "<p><strong>Ausmultiplizieren einer Klammer:</strong> Mit der Zahl vor der Klammer multiplizieren wir jedes Glied in der Klammer: $3(2x - 4) = 6x - 12$.\n       Ein Minus vor der Klammer ändert die Vorzeichen aller Glieder: $-(x - 5) = -x + 5$. Zwei Binome multiplizieren wir „jedes Glied mit jedem“:\n       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.</p>",
    {
     "fig": "r8-dlazdice",
     "caption": "Ein Quadrat mit der Seite $a + b$ besteht aus dem Quadrat $a^2$, dem Quadrat $b^2$ und zwei Rechtecken $ab$. Deshalb ist $(a + b)^2 = a^2 + 2ab + b^2$."
    },
    "<p>Die <strong>binomischen Formeln</strong>, die man auswendig kennen sollte: $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$\n       und $(a + b)(a - b) = a^2 - b^2$.</p>"
   ],
   "examples": [
    {
     "task": "Vereinfache den Term $4(x - 3) - 2(x - 5)$.",
     "steps": [
      "Wir multiplizieren aus: $4x - 12 - 2x + 10$ (das Minus vor der zweiten Klammer macht aus $-5$ ein $+10$).",
      "Wir fassen gleichartige Terme zusammen: $4x - 2x = 2x$ und $-12 + 10 = -2$.",
      "<strong>$2x - 2$</strong>"
     ]
    },
    {
     "task": "Berechne $(x - 4)^2$.",
     "steps": [
      "Wir verwenden die Formel $(a - b)^2 = a^2 - 2ab + b^2$ mit $a = x$ und $b = 4$.",
      "$x^2 - 2\\cdot x\\cdot 4 + 4^2$.",
      "<strong>$x^2 - 8x + 16$</strong>"
     ]
    }
   ]
  },
  "r8-rovnice": {
   "title": "Lineare Gleichungen",
   "summary": "Äquivalenzumformungen, Gleichungen mit Klammern und die Probe.",
   "theory": [
    "<p>Eine <strong>Gleichung</strong> ist eine Gleichheit zweier Terme, in der eine Unbekannte vorkommt, zum Beispiel $2x + 3 = 9$. Eine <strong>Gleichung lösen</strong>\n       heißt, die Zahl (Lösung) zu finden, für die nach dem Einsetzen die Gleichheit gilt. Die Lösung dieser Gleichung ist $x = 3$, weil $2\\cdot 3 + 3 = 9$.</p>",
    {
     "fig": "r8-vahy",
     "caption": "Eine Gleichung ist wie eine Waage im Gleichgewicht: Links liegen zwei Säckchen mit der unbekannten Masse $x$ und drei Gewichte, rechts neun Gewichte. Nehmen wir von beiden Waagschalen 3 Gewichte weg, bleibt die Waage im Gleichgewicht: $2x = 6$, also $x = 3$."
    },
    "<p><strong>Äquivalenzumformungen</strong> ändern die Lösung einer Gleichung nicht: Wir dürfen auf beiden Seiten dieselbe Zahl oder denselben Term addieren (oder subtrahieren)\n       und beide Seiten mit derselben Zahl ungleich null multiplizieren oder durch sie dividieren. Ziel ist es, die Unbekannte allein auf eine Seite zu bringen.</p>",
    "<p><strong>Vorgehen:</strong> 1. Klammern auflösen, 2. Glieder mit der Unbekannten auf eine Seite bringen und Zahlen auf die andere,\n       3. beide Seiten durch den Koeffizienten der Unbekannten dividieren, 4. die <strong>Probe</strong> durch Einsetzen in die ursprüngliche Gleichung machen.</p>"
   ],
   "examples": [
    {
     "task": "Löse die Gleichung $5x - 7 = 2x + 8$.",
     "steps": [
      "Wir subtrahieren auf beiden Seiten $2x$: $3x - 7 = 8$.",
      "Wir addieren auf beiden Seiten 7: $3x = 15$.",
      "Wir dividieren beide Seiten durch 3: $x = 5$.",
      "Probe: linke Seite $5\\cdot 5 - 7 = 18$, rechte Seite $2\\cdot 5 + 8 = 18$ ✓"
     ]
    },
    {
     "task": "Löse die Gleichung $3(x + 2) = x - 4$.",
     "steps": [
      "Wir lösen die Klammer auf: $3x + 6 = x - 4$.",
      "Wir subtrahieren $x$ und dann 6: $2x = -10$.",
      "Wir dividieren durch 2: $x = -5$.",
      "Probe: $3\\cdot(-5 + 2) = -9$ und $-5 - 4 = -9$ ✓"
     ]
    }
   ]
  },
  "r8-slovne": {
   "title": "Sachaufgaben mit Gleichungen lösen",
   "summary": "Wie man aus einem Text eine Gleichung aufstellt: Zahlen, Alter, Umfang und Aufteilen von Geld.",
   "theory": [
    "<p>Eine Sachaufgabe lösen wir mit einer Gleichung in fünf Schritten:</p>\n       <ol><li>Die unbekannte Größe bezeichnen wir mit einem Buchstaben (zum Beispiel $x$) und schreiben auf, was sie bedeutet.</li>\n       <li>Die übrigen Größen drücken wir mithilfe von $x$ aus.</li><li>Wir stellen die Gleichung danach auf, was in der Aufgabe gleich ist.</li>\n       <li>Wir lösen die Gleichung.</li><li>Wir machen die Probe <em>am Aufgabentext</em> und schreiben die Antwort.</li></ol>",
    "<p>Nützliche Schreibweisen: „um 5 mehr“ ist $x + 5$, „dreimal so viel“ ist $3x$, „drei aufeinanderfolgende Zahlen“ sind $x$, $x + 1$, $x + 2$,\n       „Umfang eines Rechtecks“ ist $2a + 2b$.</p>",
    "<p>Die Probe machen wir am Aufgabentext, nicht durch Einsetzen in die eigene Gleichung. Hätten wir die Gleichung falsch aufgestellt, würde die Probe in der Gleichung den Fehler nicht aufdecken.</p>"
   ],
   "examples": [
    {
     "task": "Die Summe dreier aufeinanderfolgender natürlicher Zahlen ist 48. Welche Zahlen sind es?",
     "steps": [
      "Die kleinste Zahl bezeichnen wir mit $x$, die nächsten sind $x + 1$ und $x + 2$.",
      "Gleichung: $x + (x + 1) + (x + 2) = 48$, also $3x + 3 = 48$.",
      "$3x = 45$, $x = 15$.",
      "Probe: $15 + 16 + 17 = 48$ ✓",
      "<strong>Antwort: Es sind die Zahlen 15, 16 und 17.</strong>"
     ]
    },
    {
     "task": "Eine Mutter ist 26 Jahre älter als ihre Tochter. Zusammen sind sie 50 Jahre alt. Wie alt ist die Tochter?",
     "steps": [
      "Das Alter der Tochter ist $x$, das Alter der Mutter $x + 26$.",
      "Gleichung: $x + (x + 26) = 50$, also $2x + 26 = 50$.",
      "$2x = 24$, $x = 12$.",
      "Probe: Die Mutter ist $12 + 26 = 38$ Jahre alt und $12 + 38 = 50$ ✓",
      "<strong>Antwort: Die Tochter ist 12 Jahre alt.</strong>"
     ]
    }
   ]
  },
  "r8-kruh": {
   "title": "Kreis und Kreislinie",
   "summary": "Radius und Durchmesser, Kreisumfang, Flächeninhalt des Kreises, Kreisausschnitt und Kreisring.",
   "theory": [
    "<p>Die <strong>Kreislinie</strong> $k$ mit dem Mittelpunkt $S$ und dem Radius $r$ ist die Menge aller Punkte der Ebene, die vom Punkt $S$ den Abstand $r$ haben –\n       sie ist nur eine „Linie“. Der <strong>Kreis</strong> besteht aus der Kreislinie zusammen mit der ganzen Fläche im Inneren. Der <strong>Durchmesser</strong> ist eine Strecke, die durch den\n       Mittelpunkt geht und zwei Punkte der Kreislinie verbindet; seine Länge ist $d = 2r$.</p>",
    {
     "fig": "r8-kruh",
     "caption": "Mittelpunkt $S$, Radius $r$, Durchmesser $d = 2r$ und ein Kreisausschnitt mit dem Winkel $\\alpha$."
    },
    "<p>Der <strong>Kreisumfang</strong> ist $o = 2\\pi r = \\pi d$, der <strong>Flächeninhalt des Kreises</strong> ist $S = \\pi r^2$.\n       Die Zahl $\\pi$ ist das Verhältnis von Umfang und Durchmesser eines beliebigen Kreises, $\\pi \\approx 3{,}14$.</p>",
    "<p>Ein <strong>Kreisausschnitt</strong> (Kreissektor) mit dem Winkel $\\alpha$ ist der Teil des Kreises zwischen zwei Radien, sein Flächeninhalt ist $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$.\n       Ein <strong>Kreisring</strong> ist die Fläche zwischen zwei konzentrischen Kreisen mit den Radien $R &gt; r$: $S = \\pi (R^2 - r^2)$.</p>"
   ],
   "examples": [
    {
     "task": "Ein Fahrradrad hat den Durchmesser $70\\,\\text{cm}$. Welche Strecke legt es bei einer Umdrehung zurück? Verwende $\\pi \\approx 3{,}14$.",
     "steps": [
      "Bei einer Umdrehung legt das Rad die Länge seines Umfangs zurück: $o = \\pi d$.",
      "$o \\approx 3{,}14\\cdot 70 = 219{,}8\\,\\text{cm}$.",
      "<strong>Das Rad legt etwa $219{,}8\\,\\text{cm}$ zurück, also ungefähr $2{,}2\\,\\text{m}$.</strong>"
     ]
    },
    {
     "task": "Berechne den Flächeninhalt eines Viertelkreises mit dem Radius $10\\,\\text{cm}$ ($\\pi \\approx 3{,}14$).",
     "steps": [
      "Ein Viertelkreis ist ein Ausschnitt mit dem Winkel $90^\\circ$, also $\\frac{90}{360} = \\frac{1}{4}$ des Kreises.",
      "Flächeninhalt des ganzen Kreises: $S = \\pi r^2 \\approx 3{,}14\\cdot 100 = 314\\,\\text{cm}^2$.",
      "<strong>Ein Viertel: $314 : 4 = 78{,}5\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "r8-hranoly": {
   "title": "Prismen – Oberfläche und Volumen",
   "summary": "Grundfläche und Mantel eines Prismas, Netz eines Quaders, Oberfläche und Volumen von Quader, Würfel und dreiseitigem Prisma.",
   "theory": [
    "<p>Ein <strong>Prisma</strong> ist ein Körper mit zwei deckungsgleichen und parallelen <strong>Grundflächen</strong> (Vielecken) und einem <strong>Mantel</strong>\n       aus Rechtecken – den Seitenflächen. Je nach Form der Grundfläche sprechen wir von einem dreiseitigen, vierseitigen, sechsseitigen … Prisma.\n       Quader und Würfel sind vierseitige Prismen.</p>",
    {
     "fig": "r8-siet",
     "caption": "Netz eines Quaders mit den Maßen $a$, $b$, $c$: zwei Grundflächen $a\\times b$ (blau) und vier Seitenflächen des Mantels (grün)."
    },
    "<p><strong>Volumen</strong> eines Prismas: $V = S_p\\cdot v$ (Grundfläche mal Höhe). Für den Quader gilt $V = a\\cdot b\\cdot c$, für den Würfel $V = a^3$.\n       Das Volumen messen wir in Kubikeinheiten; $1\\,\\text{dm}^3 = 1\\,\\text{l}$ und $1\\,\\text{cm}^3 = 1\\,\\text{ml}$.</p>",
    "<p>Die <strong>Oberfläche</strong> ist die Summe der Flächeninhalte aller Flächen: $S = 2\\cdot S_p + S_{pl}$, wobei die Mantelfläche $S_{pl} = o_p\\cdot v$ ist\n       (Umfang der Grundfläche mal Höhe). Für den Quader gilt $S = 2(ab + bc + ac)$, für den Würfel $S = 6a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Ein Quader hat die Maße $a = 5\\,\\text{cm}$, $b = 3\\,\\text{cm}$, $c = 4\\,\\text{cm}$. Berechne seine Oberfläche und sein Volumen.",
     "steps": [
      "$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$.",
      "$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Ein dreiseitiges Prisma hat als Grundfläche ein rechtwinkliges Dreieck mit den Katheten $3\\,\\text{cm}$ und $4\\,\\text{cm}$ (die Hypotenuse ist $5\\,\\text{cm}$ lang) und die Höhe $10\\,\\text{cm}$. Berechne seine Oberfläche und sein Volumen.",
     "steps": [
      "Grundfläche: $S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$.",
      "Volumen: $V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$.",
      "Mantel: $S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$.",
      "Oberfläche: $S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r8-statistika": {
   "title": "Diagramme, Tabellen und Statistik",
   "summary": "Säulen- und Kreisdiagramm, arithmetisches Mittel, Modus und Median.",
   "theory": [
    "<p>Daten sammeln wir in <strong>Tabellen</strong> und stellen sie in <strong>Diagrammen</strong> dar. Ein Säulendiagramm eignet sich gut zum Vergleichen von Anzahlen,\n       ein Kreisdiagramm zeigt, welchen Anteil am Ganzen jede Gruppe hat.</p>",
    {
     "fig": "r8-stlpce",
     "caption": "Säulendiagramm: Noten einer Klassenarbeit in einer Klasse mit 23 Schülerinnen und Schülern. Die meisten bekamen eine Zwei."
    },
    {
     "fig": "r8-kolac",
     "caption": "Kreisdiagramm: wie die Schülerinnen und Schüler zur Schule kommen. Die Hälfte geht zu Fuß, 30 % fahren mit dem Bus und 20 % mit dem Fahrrad."
    },
    "<p>Das <strong>arithmetische Mittel</strong> ist die Summe aller Werte geteilt durch ihre Anzahl. Der <strong>Modus</strong> ist der Wert, der am häufigsten\n       vorkommt. Der <strong>Median</strong> ist der mittlere Wert, wenn wir die Daten der Größe nach ordnen; bei einer geraden Anzahl von Daten ist er\n       der Mittelwert der beiden mittleren Werte.</p>"
   ],
   "examples": [
    {
     "task": "Die Temperaturen an fünf Tagen waren $12$, $15$, $9$, $15$ und $14\\,{}^\\circ\\text{C}$. Bestimme Mittelwert, Modus und Median.",
     "steps": [
      "Mittelwert: $\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$.",
      "Modus: Am häufigsten kommt $15\\,{}^\\circ\\text{C}$ vor.",
      "Median: Wir ordnen $9, 12, 14, 15, 15$; der mittlere Wert ist $14\\,{}^\\circ\\text{C}$."
     ]
    },
    {
     "task": "Berechne aus dem Notendiagramm die Durchschnittsnote der Klasse.",
     "steps": [
      "Summe aller Noten: $1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$.",
      "Anzahl der Schülerinnen und Schüler: $5 + 8 + 6 + 3 + 1 = 23$.",
      "<strong>Durchschnitt: $56 : 23 \\approx 2{,}43$.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, teda $p = {@6}$ a $q = {@7}$.": "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, also $p = {@6}$ und $q = {@7}$.",
  "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Plášť: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, povrch $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.": "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Mantel: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, Oberfläche $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.",
  "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Obe strany vynásobíme {@4}: $x = {@5}$.": "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Beide Seiten multiplizieren wir mit {@4}: $x = {@5}$.",
  "$\\sqrt{{@0}} = {@1}$ a $\\sqrt{{@2}} = {@3}$, teda ${@4} - {@5} = {@6}$.": "$\\sqrt{{@0}} = {@1}$ und $\\sqrt{{@2}} = {@3}$, also ${@4} - {@5} = {@6}$.",
  "$\\sqrt{{@0}} = {@1}$, lebo ${@2}^2 = {@3}$.": "$\\sqrt{{@0}} = {@1}$, weil ${@2}^2 = {@3}$.",
  "$a^3$ znamená $a\\cdot a\\cdot a$, nie $3\\cdot a$.": "$a^3$ bedeutet $a\\cdot a\\cdot a$, nicht $3\\cdot a$.",
  "${@0} : {@1} = {@2}$ a znamienka sú {@3}: ${@4} : {@5} = {@6}$.": "${@0} : {@1} = {@2}$ und die Vorzeichen sind {@3}: ${@4} : {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}$ a znamienka sú {@3}: ${@4}\\cdot {@5} = {@6}$.": "${@0}\\cdot {@1} = {@2}$ und die Vorzeichen sind {@3}: ${@4}\\cdot {@5} = {@6}$.",
  "${@0}^2 = {@1}$ a ${@2}^2 = {@3}$. Keďže ${@4} &lt; {@5} &lt; {@6}$, platí ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.": "${@0}^2 = {@1}$ und ${@2}^2 = {@3}$. Da ${@4} &lt; {@5} &lt; {@6}$, gilt ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda ${@4} - {@5} = {@6}$.": "$|{@0}| = {@1}$ und $|{@2}| = {@3}$, also ${@4} - {@5} = {@6}$.",
  "(a + b)^2 = a^2 + 2ab + b^2": "(a + b)^2 = a^2 + 2ab + b^2",
  "(a - b)^2 = a^2 - 2ab + b^2": "(a - b)^2 = a^2 - 2ab + b^2",
  ", $x + 2$ a $x + 3$": ", $x + 2$ und $x + 3$",
  "Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.": "Der Betrag ist der Abstand von null, er ist nie negativ.",
  "Ak rovnicu násobíš číslom {@0}, vynásob každý člen na oboch stranách, aj číslo ${@1}$. Jednoduchšie je najprv osamostatniť zlomok.": "Wenn du die Gleichung mit {@0} multiplizierst, multipliziere jedes Glied auf beiden Seiten, auch die Zahl ${@1}$. Einfacher ist es, zuerst den Bruch allein auf eine Seite zu bringen.",
  "Akvárium tvaru kvádra má vnútorné rozmery {@0} cm, {@1} cm a {@2} cm. Koľko litrov vody sa doň zmestí?": "Ein quaderförmiges Aquarium hat die Innenmaße {@0} cm, {@1} cm und {@2} cm. Wie viele Liter Wasser passen hinein?",
  "Aká dlhá je dlhšia strana (v cm)?": "Wie lang ist die längere Seite (in cm)?",
  "Aká dlhá je druhá strana $a + {@0}$ pre $a = {@1}$ (v cm)?": "Wie lang ist die zweite Seite $a + {@0}$ für $a = {@1}$ (in cm)?",
  "Aká dlhá je kratšia strana (v cm)?": "Wie lang ist die kürzere Seite (in cm)?",
  "Aké je najväčšie z čísel?": "Wie heißt die größte der Zahlen?",
  "Aké je {@0}. číslo v poradí?": "Wie heißt die {@0}. Zahl der Reihe nach?",
  "Aké je číslo $a$? Pred desatinnou čiarkou má mať jedinú nenulovú číslicu.": "Wie lautet die Zahl $a$? Vor dem Dezimalkomma soll genau eine von null verschiedene Ziffer stehen.",
  "Akú časť plného uhla tvorí uhol ${@0}^\\circ$? Zadaj ju ako zlomok.": "Welchen Teil des Vollwinkels bildet der Winkel ${@0}^\\circ$? Gib ihn als Bruch ein.",
  "Aký je najmenší spoločný menovateľ zlomkov ${@0}$ a ${@1}$?": "Was ist der kleinste gemeinsame Nenner der Brüche ${@0}$ und ${@1}$?",
  "Aký je objem hranola $V = S_p\\cdot v$ (v cm³)?": "Wie groß ist das Volumen des Prismas $V = S_p\\cdot v$ (in cm³)?",
  "Aký je objem kvádra (v cm³)?": "Wie groß ist das Volumen des Quaders (in cm³)?",
  "Aký je obsah celého kruhu (v cm²)?": "Wie groß ist der Flächeninhalt des ganzen Kreises (in cm²)?",
  "Aký je obsah plášťa – obvod podstavy krát výška (v cm²)?": "Wie groß ist der Mantelflächeninhalt – Umfang der Grundfläche mal Höhe (in cm²)?",
  "Aký je obsah podstavy $S_p$ (v cm²)?": "Wie groß ist der Flächeninhalt der Grundfläche $S_p$ (in cm²)?",
  "Aký je polomer kruhu (v cm)?": "Wie groß ist der Radius des Kreises (in cm)?",
  "Aký je povrch hranola – dve podstavy a plášť (v cm²)?": "Wie groß ist die Oberfläche des Prismas – zwei Grundflächen und der Mantel (in cm²)?",
  "Aký je súčet všetkých čísel?": "Wie groß ist die Summe aller Zahlen?",
  "Aký obsah má jedna stena kocky (v cm²)?": "Welchen Flächeninhalt hat eine Seitenfläche des Würfels (in cm²)?",
  "Babka": "Oma",
  "Bez zátvorky sa umocňuje len číslo {@0}, mínus ostáva pred výsledkom: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.": "Ohne Klammer wird nur die Zahl {@0} potenziert, das Minus bleibt vor dem Ergebnis: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.",
  "Chýbajú ti členy s $x$: každý člen prvej zátvorky treba vynásobiť každým členom druhej, nielen prvý s prvým a posledný s posledným.": "Dir fehlen die Glieder mit $x$: Jedes Glied der ersten Klammer muss mit jedem Glied der zweiten multipliziert werden, nicht nur das erste mit dem ersten und das letzte mit dem letzten.",
  "Dcéra": "Die Tochter",
  "Dedko": "Opa",
  "Delil si len číslom $\\pi$, takto dostaneš priemer. Polomer je jeho polovica.": "Du hast nur durch $\\pi$ dividiert, so erhältst du den Durchmesser. Der Radius ist seine Hälfte.",
  "Desatinnú čiarku posunieme o {@0} {@1} doľava, aby pred ňou ostala jediná nenulová číslica: ${@2} = {@3}\\cdot 10^{{@4}}$.": "Wir verschieben das Dezimalkomma um {@0} {@1} nach links, damit davor genau eine von null verschiedene Ziffer bleibt: ${@2} = {@3}\\cdot 10^{{@4}}$.",
  "Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.": "Das Diagramm zeigt, wie viele Bücher die Leser an den einzelnen Tagen in der Bibliothek ausgeliehen haben.",
  "Dlhšia strana má ${@0} + {@1} = {@2}\\,\\text{cm}$.": "Die längere Seite ist ${@0} + {@1} = {@2}\\,\\text{cm}$ lang.",
  "Do vzorca $S = \\pi r^2$ si dosadil priemer. Najprv vypočítaj polomer, polovicu priemeru.": "Du hast in die Formel $S = \\pi r^2$ den Durchmesser eingesetzt. Berechne zuerst den Radius, die Hälfte des Durchmessers.",
  "Dosaď $x = {@0}$ do člena ${@1}$. Koľko je ${@2}$?": "Setze $x = {@0}$ in das Glied ${@1}$ ein. Wie viel ist ${@2}$?",
  "Dosaď za obe premenné naraz, záporné čísla do zátvoriek.": "Setze für beide Variablen gleichzeitig ein, negative Zahlen in Klammern.",
  "Druhá mocnina $x^2$ znamená $x\\cdot x$, nie $2\\cdot x$.": "Das Quadrat $x^2$ bedeutet $x\\cdot x$, nicht $2\\cdot x$.",
  "Druhá mocnina ako štvorec, tretia mocnina ako kocka": "Die zweite Potenz als Quadrat, die dritte Potenz als Würfel",
  "Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.": "Das Quadrat ist ein Produkt zweier gleicher Faktoren. Minus mal Minus ergibt Plus.",
  "Druhá mocnina nie je dvojnásobok: umocniť na druhú znamená vynásobiť číslo samým sebou.": "Das Quadrat ist nicht das Doppelte: Quadrieren bedeutet, die Zahl mit sich selbst zu multiplizieren.",
  "Druhá mocnina nie je dvojnásobok: umocniť znamená vynásobiť samým sebou.": "Das Quadrat ist nicht das Doppelte: Potenzieren bedeutet, mit sich selbst zu multiplizieren.",
  "Druhá strana je celý výraz $a + {@0}$, daj ju do zátvorky: násobí sa $a\\cdot(a + {@1})$.": "Die zweite Seite ist der ganze Ausdruck $a + {@0}$, setze ihn in eine Klammer: Man multipliziert $a\\cdot(a + {@1})$.",
  "Dvojnásobok": "Das Doppelte",
  "Exponent nie je počet číslic čísla, ale počet miest, o ktoré posunieš desatinnú čiarku.": "Der Exponent ist nicht die Anzahl der Ziffern der Zahl, sondern die Anzahl der Stellen, um die du das Dezimalkomma verschiebst.",
  "Filip": "Philipp",
  "Hranol má dve podstavy (hornú a dolnú), obe treba započítať do povrchu.": "Ein Prisma hat zwei Grundflächen (oben und unten), beide müssen in die Oberfläche eingerechnet werden.",
  "Hľadaj najvyšší stĺpec.": "Suche die höchste Säule.",
  "Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.": "Suche die nichtnegative Zahl, deren Quadrat die Zahl unter der Wurzel ist.",
  "Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.": "Suche die Zahl, die dreimal mit sich selbst multipliziert das Volumen ergibt.",
  "Hľadáme číslo, ktorého tretia mocnina je {@0}: ${@1}^3 = {@2}$, teda $a = {@3}\\,\\text{cm}$.": "Wir suchen die Zahl, deren dritte Potenz {@0} ist: ${@1}^3 = {@2}$, also $a = {@3}\\,\\text{cm}$.",
  "Jedna stena má obsah ${@0} : 6 = {@1}\\,\\text{cm}^2$, teda $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.": "Eine Seitenfläche hat den Flächeninhalt ${@0} : 6 = {@1}\\,\\text{cm}^2$, also $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.",
  "Jedna strana obdĺžnika je o {@0} cm dlhšia ako druhá. Obvod obdĺžnika je {@1} cm. Aká dlhá je {@2} strana (v cm)?": "Eine Seite eines Rechtecks ist um {@0} cm länger als die andere. Der Umfang des Rechtecks ist {@1} cm. Wie lang ist die {@2} Seite (in cm)?",
  "K obom stranám pripočítame {@0}": "Zu beiden Seiten addieren wir {@0}",
  "Každá stena je na kvádri dvakrát. Aký je povrch kvádra (v cm²)?": "Jede Fläche kommt beim Quader zweimal vor. Wie groß ist die Oberfläche des Quaders (in cm²)?",
  "Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.": "Multipliziere jedes Glied der ersten Klammer mit jedem Glied der zweiten. Dann fasse die Glieder mit $x$ zusammen.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko.": "Wenn du eine Zahl auf die andere Seite der Gleichung bringst, ändere ihr Vorzeichen.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko. Na oboch stranách urob tú istú operáciu.": "Wenn du eine Zahl auf die andere Seite der Gleichung bringst, ändere ihr Vorzeichen. Führe auf beiden Seiten dieselbe Operation aus.",
  "Kocka má 6 stien, každá je štvorec so stranou $a$.": "Ein Würfel hat 6 Seitenflächen, jede ist ein Quadrat mit der Seite $a$.",
  "Kocka má 6 stien, nie 4. Nezabudni na hornú a dolnú stenu.": "Ein Würfel hat 6 Seitenflächen, nicht 4. Vergiss die obere und die untere Fläche nicht.",
  "Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.": "Ein Würfel hat 6 gleiche quadratische Seitenflächen: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.",
  "Kocka má objem ${@0}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?": "Ein Würfel hat das Volumen ${@0}\\,\\text{cm}^3$. Wie lang ist seine Kante (in cm)?",
  "Kocka má povrch ${@0}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?": "Ein Würfel hat die Oberfläche ${@0}\\,\\text{cm}^2$. Wie lang ist seine Kante (in cm)?",
  "Koeficient ${@0}$ pri $x$ odstrániš delením, nie odčítaním: ${@1}x$ znamená ${@2}\\cdot x$.": "Den Koeffizienten ${@0}$ bei $x$ entfernst du durch Dividieren, nicht durch Subtrahieren: ${@1}x$ bedeutet ${@2}\\cdot x$.",
  "Koľko je $R^2 - r^2$?": "Wie viel ist $R^2 - r^2$?",
  "Koľko je $\\sqrt{{@0}}$?": "Wie viel ist $\\sqrt{{@0}}$?",
  "Koľko je $r^2$?": "Wie viel ist $r^2$?",
  "Koľko je ${@0}$?": "Wie viel ist ${@0}$?",
  "Koľko je ${@0}^2$?": "Wie viel ist ${@0}^2$?",
  "Koľko je ${@0}{@1}$?": "Wie viel ist ${@0}{@1}$?",
  "Koľko je $|{@0}|$?": "Wie viel ist $|{@0}|$?",
  "Koľko je v zátvorke: ${@0}{@1}$?": "Was ergibt die Klammer: ${@0}{@1}$?",
  "Koľko je čísel?": "Wie viele Zahlen sind es?",
  "Koľko kníh si požičali za celý týždeň?": "Wie viele Bücher wurden in der ganzen Woche ausgeliehen?",
  "Koľko rokov má {@0}?": "Wie alt ist {@0}?",
  "Koľko žiakov hlasovalo spolu?": "Wie viele Schüler haben insgesamt abgestimmt?",
  "Koľko žiakov odpovedalo spolu?": "Wie viele Schüler haben insgesamt geantwortet?",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Rovnica: $2x + 2(x + {@1}) = {@2}$, teda $4x + {@3} = {@4}$, $4x = {@5}$ a $x = {@6}$. {@7}": "Die kürzere Seite ist $x$, die längere $x + {@0}$. Gleichung: $2x + 2(x + {@1}) = {@2}$, also $4x + {@3} = {@4}$, $4x = {@5}$ und $x = {@6}$. {@7}",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Z rovnice $2x + 2(x + {@1}) = {@2}$ vypočítaj, koľko je $4x$.": "Die kürzere Seite ist $x$, die längere $x + {@0}$. Berechne aus der Gleichung $2x + 2(x + {@1}) = {@2}$, wie viel $4x$ ist.",
  "Kratšia strana má ${@0}\\,\\text{cm}$.": "Die kürzere Seite ist ${@0}\\,\\text{cm}$ lang.",
  "Kruh má {@0}. Vypočítaj jeho obsah v cm². {@1}": "Ein Kreis hat {@0}. Berechne seinen Flächeninhalt in cm². {@1}",
  "Kruh má {@0}. Vypočítaj jeho obvod v cm. {@1}": "Ein Kreis hat {@0}. Berechne seinen Umfang in cm. {@1}",
  "Kruh so stredom, polomerom, priemerom a výsekom": "Kreis mit Mittelpunkt, Radius, Durchmesser und Kreisausschnitt",
  "Kruhový diagram dopravy do školy": "Kreisdiagramm zum Schulweg",
  "Ktoré ovocie dostalo najviac hlasov?": "Welches Obst hat die meisten Stimmen bekommen?",
  "Ktorý výraz sa rovná ${@0}$?": "Welcher Ausdruck ist gleich ${@0}$?",
  "Ktorý výraz zodpovedá opisu: <em>{@0}</em>?": "Welcher Ausdruck entspricht der Beschreibung: <em>{@0}</em>?",
  "Ktorý šport je medzi žiakmi najobľúbenejší?": "Welche Sportart ist bei den Schülern am beliebtesten?",
  "Kváder má každú stenu dvakrát (hornú a dolnú, prednú a zadnú, ľavú a pravú). Súčet $ab + bc + ac$ ešte zdvojnásob.": "Ein Quader hat jede Fläche zweimal (oben und unten, vorne und hinten, links und rechts). Verdopple die Summe $ab + bc + ac$ noch.",
  "Kváder má rozmery $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.": "Ein Quader hat die Maße $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Berechne seine Oberfläche (in cm²) und sein Volumen (in cm³). Gib sie getrennt durch ein Semikolon ein.",
  "Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.": "Ein Quader hat drei Paare gleicher Flächen: $ab$, $bc$ und $ac$. Das Volumen ist das Produkt aller drei Maße.",
  "Medián hľadaj až v usporiadanom zozname. Čísla najprv zoraď od najmenšieho po najväčšie.": "Den Median suchst du erst in der geordneten Liste. Ordne die Zahlen zuerst von der kleinsten zur größten.",
  "Medián je priemer týchto dvoch čísel. Koľko je?": "Der Median ist der Mittelwert dieser beiden Zahlen. Wie viel ist das?",
  "Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{{@0}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.": "Zwischen welchen zwei aufeinanderfolgenden natürlichen Zahlen liegt $\\sqrt{{@0}}$? Gib die kleinere und die größere Zahl getrennt durch ein Semikolon ein.",
  "Množiny prirodzených, celých a racionálnych čísel": "Mengen der natürlichen, ganzen und rationalen Zahlen",
  "Modus je hodnota, ktorá sa opakuje najčastejšie.": "Der Modus ist der Wert, der am häufigsten vorkommt.",
  "Modus nie je najväčšie číslo, ale hodnota, ktorá sa vyskytuje najčastejšie.": "Der Modus ist nicht die größte Zahl, sondern der Wert, der am häufigsten vorkommt.",
  "Na polovicu sa delí len $x$, číslo {@0} sa odčíta až od polovice.": "Halbiert wird nur $x$, die Zahl {@0} wird erst von der Hälfte abgezogen.",
  "Na číselnej osi ležia čísla ${@0}$ a ${@1}$. Aká je ich vzdialenosť?": "Auf dem Zahlenstrahl liegen die Zahlen ${@0}$ und ${@1}$. Wie groß ist ihr Abstand?",
  "Najmenšie číslo je {@0}.": "Die kleinste Zahl ist {@0}.",
  "Najmenšie číslo označ $x$ a sčítaj všetky čísla. Rovnica má tvar ${@0}x + \\square = {@1}$. Aké číslo patrí do štvorčeka?": "Bezeichne die kleinste Zahl mit $x$ und addiere alle Zahlen. Die Gleichung hat die Form ${@0}x + \\square = {@1}$. Welche Zahl gehört in das Kästchen?",
  "Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.": "Bezeichne die kleinste Zahl mit $x$, die nächsten sind $x + 1$, $x + 2$, … Addiere sie und setze sie gleich der Summe.",
  "Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.": "Bringe zuerst den Bruch allein auf eine Seite, dann multipliziere beide Seiten mit dem Nenner.",
  "Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.": "Multipliziere zuerst die Klammer aus, dann löse wie eine gewöhnliche Gleichung.",
  "Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.": "Potenziere zuerst, dann multipliziere und zuletzt addiere. Setze negative Zahlen in Klammern.",
  "Najprv urči absolútne hodnoty oboch čísel (vzdialenosti od nuly, tie nie sú záporné) a až potom odčítaj.": "Bestimme zuerst die Beträge beider Zahlen (Abstände von null, die sind nicht negativ) und subtrahiere erst dann.",
  "Najprv vypočítaj každú odmocninu zvlášť.": "Berechne zuerst jede Wurzel einzeln.",
  "Najprv vypočítaj, čo je v zátvorke, potom násob.": "Berechne zuerst, was in der Klammer steht, dann multipliziere.",
  "Najvyšší stĺpec má hodnotu {@0} a patrí k možnosti „{@1}“. Táto hodnota je modus údajov.": "Die höchste Säule hat den Wert {@0} und gehört zur Möglichkeit „{@1}“. Diese Möglichkeit ist der Modus der Daten.",
  "Najväčšie číslo je $x + {@0} = {@1}$.": "Die größte Zahl ist $x + {@0} = {@1}$.",
  "Natália": "Natalie",
  "Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.": "Finde zwei Quadratzahlen, zwischen die die Zahl unter der Wurzel fällt.",
  "Násobiť treba číslo $x$, nie číslo {@0}.": "Multiplizieren muss man die Zahl $x$, nicht die Zahl {@0}.",
  "Násobí sa celý súčet, preto ho treba dať do zátvorky. Bez zátvorky by sa násobilo len $x$.": "Multipliziert wird die ganze Summe, deshalb muss sie in eine Klammer. Ohne Klammer würde nur $x$ multipliziert.",
  "Násobí sa celý súčet, teda aj $x$, nielen číslo {@0}.": "Multipliziert wird die ganze Summe, also auch $x$, nicht nur die Zahl {@0}.",
  "Násobí sa len $x$, číslo {@0} sa odčíta až od {@1}. Zátvorka by znamenala {@2} celého rozdielu.": "Multipliziert wird nur $x$, die Zahl {@0} wird erst von {@1} abgezogen. Eine Klammer würde {@2} der ganzen Differenz bedeuten.",
  "O koľko miest doľava treba posunúť desatinnú čiarku? To je exponent $n$.": "Um wie viele Stellen nach links muss man das Dezimalkomma verschieben? Das ist der Exponent $n$.",
  "Obdĺžnik má strany dlhé $a$ a $a + {@0}$ centimetrov. Vypočítaj jeho {@1} pre $a = {@2}$.": "Ein Rechteck hat die Seitenlängen $a$ und $a + {@0}$ Zentimeter. Berechne {@1} für $a = {@2}$.",
  "Obdĺžnik so stranami a a a plus 3": "Rechteck mit den Seiten a und a plus 3",
  "Obe strany vydeľ číslom ${@0}$. Aké je $x$?": "Dividiere beide Seiten durch ${@0}$. Wie groß ist $x$?",
  "Obe strany vynásob číslom {@0}. Aké je $x$?": "Multipliziere beide Seiten mit {@0}. Wie groß ist $x$?",
  "Obe čísla ležia na tej istej strane nuly, preto ich vzdialenosti od nuly odčítaj, nesčítavaj.": "Beide Zahlen liegen auf derselben Seite von null, deshalb subtrahiere ihre Abstände von null, addiere sie nicht.",
  "Objem kocky je $a^3$.": "Das Volumen des Würfels ist $a^3$.",
  "Objem nedelíš tromi. Hľadáš číslo, ktoré trikrát vynásobené samým sebou dá objem.": "Das Volumen teilst du nicht durch drei. Du suchst die Zahl, die dreimal mit sich selbst multipliziert das Volumen ergibt.",
  "Obsah jednej steny je $a^2$, nie $a$. Stena je štvorec.": "Der Flächeninhalt einer Seitenfläche ist $a^2$, nicht $a$. Die Seitenfläche ist ein Quadrat.",
  "Obsah kruhu je $S = \\pi r^2$.": "Der Flächeninhalt des Kreises ist $S = \\pi r^2$.",
  "Obsah medzikružia nie je $\\pi(R - r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého: $\\pi R^2 - \\pi r^2$.": "Der Flächeninhalt des Kreisrings ist nicht $\\pi(R - r)^2$. Ziehe vom Flächeninhalt des großen Kreises den des kleinen ab: $\\pi R^2 - \\pi r^2$.",
  "Obsah obdĺžnika je súčin jeho strán.": "Der Flächeninhalt des Rechtecks ist das Produkt seiner Seiten.",
  "Obsah pravouhlého trojuholníka je polovica súčinu odvesien, nezabudni deliť dvoma.": "Der Flächeninhalt eines rechtwinkligen Dreiecks ist die Hälfte des Produkts der Katheten, vergiss nicht, durch zwei zu teilen.",
  "Obsahy kruhov treba odčítať, nie sčítať: malý kruh v strede chýba.": "Die Flächeninhalte der Kreise muss man subtrahieren, nicht addieren: Der kleine Kreis in der Mitte fehlt.",
  "Obvod je $2\\pi r$, zabudol si na dvojku (alebo si dosadil polomer namiesto priemeru do $\\pi d$).": "Der Umfang ist $2\\pi r$, du hast die Zwei vergessen (oder den Radius statt des Durchmessers in $\\pi d$ eingesetzt).",
  "Obvod kruhu je $o = 2\\pi r = \\pi d$.": "Der Umfang des Kreises ist $o = 2\\pi r = \\pi d$.",
  "Obvod kruhu je ${@0}\\,\\text{cm}$. Aký je jeho polomer v cm? {@1}": "Der Umfang eines Kreises ist ${@0}\\,\\text{cm}$. Wie groß ist sein Radius in cm? {@1}",
  "Obvod nemôžeš len vydeliť štyrmi, strany obdĺžnika nie sú rovnako dlhé.": "Den Umfang kannst du nicht einfach durch vier teilen, die Seiten des Rechtecks sind nicht gleich lang.",
  "Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + {@0}$.": "Der Umfang des Rechtecks ist $2a + 2b$, für die zweite Seite setze $a + {@0}$ ein.",
  "Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.": "Der Umfang des Rechtecks ist $2a + 2b$. Bezeichne die kürzere Seite mit $x$.",
  "Od oboch strán odčítame {@0}": "Von beiden Seiten subtrahieren wir {@0}",
  "Od obsahu veľkého kruhu odčítaj obsah malého kruhu.": "Ziehe vom Flächeninhalt des großen Kreises den Flächeninhalt des kleinen Kreises ab.",
  "Od záporného čísla odčítavaš, posúvaš sa teda po číselnej osi ešte ďalej doľava od nuly.": "Du subtrahierst von einer negativen Zahl, gehst also auf dem Zahlenstrahl noch weiter nach links von null weg.",
  "Odmocnina nie je polovica čísla. Hľadaj číslo, ktoré vynásobené samým sebou dá {@0}.": "Die Wurzel ist nicht die Hälfte der Zahl. Suche die Zahl, die mit sich selbst multipliziert {@0} ergibt.",
  "Odčítaj hodnoty dvoch stĺpcov.": "Subtrahiere die Werte der beiden Säulen.",
  "Odčítaj získané absolútne hodnoty. Aký je výsledok?": "Subtrahiere die erhaltenen Beträge. Was ist das Ergebnis?",
  "Odčítaj získané čísla. Aký je výsledok?": "Subtrahiere die erhaltenen Zahlen. Was ist das Ergebnis?",
  "Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.": "Subtrahiere die Zahlen und nimm das Ergebnis ohne Vorzeichen. Liegen sie auf verschiedenen Seiten von null, werden die Abstände von null addiert.",
  "Odčítanie nahraď pripočítaním opačného čísla.": "Ersetze das Subtrahieren durch das Addieren der Gegenzahl.",
  "Odčítať záporné číslo znamená pripočítať opačné, kladné číslo: $-{@0} = +{@1}$.": "Eine negative Zahl subtrahieren bedeutet, die Gegenzahl, eine positive Zahl, zu addieren: $-{@0} = +{@1}$.",
  "Odčítať číslo znamená pripočítať opačné číslo: ${@0} - {@1} = {@2} + {@3} = {@4}$.": "Eine Zahl subtrahieren bedeutet, die Gegenzahl zu addieren: ${@0} - {@1} = {@2} + {@3} = {@4}$.",
  "Opis zodpovedá výrazu ${@0}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.": "Die Beschreibung entspricht dem Ausdruck ${@0}$. Gehe beim Aufschreiben vom Satzende aus: Bestimme zuerst die „Hauptoperation“ (Summe, Differenz, Potenz …), dann ihre Teile.",
  "Osamostatni zlomok. Koľko je $\\frac{x}{{@0}}$?": "Bringe den Bruch allein auf eine Seite. Wie viel ist $\\frac{x}{{@0}}$?",
  "Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.": "Die Grundfläche ist ein rechtwinkliges Dreieck, ihr Flächeninhalt ist die Hälfte des Produkts der Katheten. Der Mantel ist Umfang der Grundfläche mal Höhe.",
  "Podľa vzorca ${@0}$ pre $a = x$, $b = {@1}$: ${@2} = {@3}$.": "Nach der Formel ${@0}$ für $a = x$, $b = {@1}$: ${@2} = {@3}$.",
  "Polomer je polovica priemeru: $r = {@0}\\,\\text{cm}$.": "Der Radius ist die Hälfte des Durchmessers: $r = {@0}\\,\\text{cm}$.",
  "Polovica čísla $x$ je $x$ delené dvoma, nie $2x$.": "Die Hälfte der Zahl $x$ ist $x$ geteilt durch zwei, nicht $2x$.",
  "Posledný člen $b^2$ je druhá mocnina, a tá je vždy kladná.": "Das letzte Glied $b^2$ ist ein Quadrat, und das ist immer positiv.",
  "Posledný člen je druhá mocnina čísla {@0}, nie samotné číslo.": "Das letzte Glied ist das Quadrat der Zahl {@0}, nicht die Zahl selbst.",
  "Posledný člen je súčin ${@0}\\cdot {@1}$, nie samotné číslo {@2}.": "Das letzte Glied ist das Produkt ${@0}\\cdot {@1}$, nicht die Zahl {@2} selbst.",
  "Použi $\\pi \\approx 3{,}14$.": "Verwende $\\pi \\approx 3{,}14$.",
  "Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.": "Teile die Oberfläche durch sechs, so erhältst du den Flächeninhalt einer Seitenfläche. Dann ziehe die Wurzel.",
  "Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.": "Achtung, in der Formel $S = \\pi r^2$ steht der Radius, nicht der Durchmesser.",
  "Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.": "Achtung: $(x + a)^2$ ist nicht $x^2 + a^2$, es fehlt das doppelte Produkt $2ax$.",
  "Počet čísel je nepárny ({@0}), medián je prostredné, {@1}. číslo: {@2}.": "Die Anzahl der Zahlen ist ungerade ({@0}), der Median ist die mittlere, {@1}. Zahl: {@2}.",
  "Počet čísel je párny ({@0}), medián je priemer {@1}. a {@2}. čísla: $\\frac{{@3} + {@4}}{2} = {@5}$.": "Die Anzahl der Zahlen ist gerade ({@0}), der Median ist der Mittelwert der {@1}. und {@2}. Zahl: $\\frac{{@3} + {@4}}{2} = {@5}$.",
  "Počítaš obsah kruhu ($\\pi r^2$), úloha sa pýta na obvod.": "Du berechnest den Flächeninhalt des Kreises ($\\pi r^2$), die Aufgabe fragt nach dem Umfang.",
  "Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.": "Stell dir eine Verschiebung auf dem Zahlenstrahl vor: Eine positive Zahl verschiebt nach rechts, eine negative nach links.",
  "Presuň členy s $x$ na ľavú stranu a spoj ich. Aký koeficient bude pri $x$?": "Bringe die Glieder mit $x$ auf die linke Seite und fasse sie zusammen. Welcher Koeffizient steht bei $x$?",
  "Presuň členy s $x$ naľavo a čísla napravo. Na tvar $ax = b$: aké je $a$ a $b$? Zadaj ich oddelené bodkočiarkou.": "Bringe die Glieder mit $x$ nach links und die Zahlen nach rechts. Auf die Form $ax = b$: Wie groß sind $a$ und $b$? Gib sie getrennt durch ein Semikolon ein.",
  "Presuň čísla na pravú stranu a spoj ich. Aké číslo bude na pravej strane?": "Bringe die Zahlen auf die rechte Seite und fasse sie zusammen. Welche Zahl steht auf der rechten Seite?",
  "Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.": "Wandle den Bruch in eine Dezimalzahl um. Von zwei negativen Zahlen ist die größer, die näher an null liegt.",
  "Pri delení platí rovnaké pravidlo znamienok ako pri násobení.": "Beim Dividieren gilt dieselbe Vorzeichenregel wie beim Multiplizieren.",
  "Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.": "Beim Multiplizieren von Brüchen braucht man keinen gemeinsamen Nenner: Zähler mal Zähler und Nenner mal Nenner.",
  "Pri presune člena s $x$ na druhú stranu rovnice mu treba zmeniť znamienko.": "Wenn du ein Glied mit $x$ auf die andere Seite der Gleichung bringst, musst du sein Vorzeichen ändern.",
  "Pri presune čísla na druhú stranu rovnice mu treba zmeniť znamienko.": "Wenn du eine Zahl auf die andere Seite der Gleichung bringst, musst du ihr Vorzeichen ändern.",
  "Pri párnom počte čísel sú v strede dve čísla. Medián je ich priemer.": "Bei einer geraden Anzahl von Zahlen stehen in der Mitte zwei Zahlen. Der Median ist ihr Mittelwert.",
  "Pri rozdiele záleží na poradí: najprv píšeš to, od čoho odčítavaš.": "Bei einer Differenz kommt es auf die Reihenfolge an: Zuerst schreibst du das, wovon du abziehst.",
  "Pri roznásobení vzniknú dva členy s $x$: $x$ krát číslo z druhej zátvorky a číslo z prvej zátvorky krát $x$. Spoj ich. Aký je koeficient $p$ pri $x$?": "Beim Ausmultiplizieren entstehen zwei Glieder mit $x$: $x$ mal die Zahl aus der zweiten Klammer und die Zahl aus der ersten Klammer mal $x$. Fasse sie zusammen. Wie groß ist der Koeffizient $p$ bei $x$?",
  "Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.": "Beim Addieren und Subtrahieren von Brüchen brauchst du einen gemeinsamen Nenner. Vergiss die Vorzeichen nicht.",
  "Pri umocnení rozdielu nestačí umocniť každý člen zvlášť, chýba stredný člen $-2ab$.": "Beim Quadrieren einer Differenz reicht es nicht, jedes Glied einzeln zu quadrieren, es fehlt das mittlere Glied $-2ab$.",
  "Pri umocnení súčtu nestačí umocniť každý člen zvlášť, chýba stredný člen $2ab$.": "Beim Quadrieren einer Summe reicht es nicht, jedes Glied einzeln zu quadrieren, es fehlt das mittlere Glied $2ab$.",
  "Pri záporných číslach nerozhoduje, ktoré má väčšiu absolútnu hodnotu: väčšie je to, ktoré je bližšie k nule.": "Bei negativen Zahlen entscheidet nicht, welche den größeren Betrag hat: Größer ist die, die näher an null liegt.",
  "Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: ${@0} + {@1} = {@2} - {@3} = {@4}$.": "Eine negative Zahl addieren ist dasselbe, wie ihren Betrag zu subtrahieren: ${@0} + {@1} = {@2} - {@3} = {@4}$.",
  "Päťkrát": "Fünfmal",
  "Päťnásobok": "Das Fünffache",
  "Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.": "Gleiche Vorzeichen ergeben ein positives Produkt, verschiedene ein negatives.",
  "Rozdiel odmocnín nie je odmocnina z rozdielu. Najprv vypočítaj každú odmocninu zvlášť a až potom odčítaj.": "Die Differenz von Wurzeln ist nicht die Wurzel aus der Differenz. Berechne zuerst jede Wurzel einzeln und subtrahiere erst dann.",
  "Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.": "Entscheide, welche Operation zuletzt ausgeführt wird. Wenn die ganze Summe oder Differenz multipliziert oder potenziert wird, braucht man eine Klammer.",
  "Rozmery prevedieme na decimetre: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.": "Wir rechnen die Maße in Dezimeter um: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.",
  "Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.": "Rechne die Maße in Dezimeter um, denn $1\\,\\text{dm}^3 = 1$ Liter.",
  "Roznásob $(x{@0})(x{@1})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.": "Multipliziere $(x{@0})(x{@1})$ aus und schreibe das Ergebnis in der Form $x^2 + px + q$. Gib $p$ und $q$ getrennt durch ein Semikolon ein.",
  "Roznásob ${@0}({@1})$ (aj so znamienkom pred zátvorkou). Zadaj koeficient pri $x$ a samotné číslo.": "Multipliziere ${@0}({@1})$ aus (auch mit dem Vorzeichen vor der Klammer). Gib den Koeffizienten bei $x$ und die Zahl allein ein.",
  "Roznásob ${@0}({@1})$. Zadaj koeficient pri $x$ a samotné číslo oddelené bodkočiarkou.": "Multipliziere ${@0}({@1})$ aus. Gib den Koeffizienten bei $x$ und die Zahl allein getrennt durch ein Semikolon ein.",
  "Roznásob a zjednoduš ${@0}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Multipliziere aus und vereinfache ${@0}$ auf die Form $ax + b$. Gib $a$ und $b$ getrennt durch ein Semikolon ein.",
  "Roznásob zátvorku ${@0}(x{@1})$. Aké číslo (bez $x$) vznikne?": "Multipliziere die Klammer ${@0}(x{@1})$ aus. Welche Zahl (ohne $x$) entsteht?",
  "Roznásobíme: ${@0}{@1} = {@2}{@3}$. Členy s $x$ naľavo, čísla napravo: ${@4} = {@5}$, teda $x = {@6}$.": "Wir multiplizieren aus: ${@0}{@1} = {@2}{@3}$. Glieder mit $x$ nach links, Zahlen nach rechts: ${@4} = {@5}$, also $x = {@6}$.",
  "Roznásobíme: ${@0}{@1}{@2}$. Spojíme podobné členy: ${@3}$, teda $a = {@4}$, $b = {@5}$.": "Wir multiplizieren aus: ${@0}{@1}{@2}$. Wir fassen gleichartige Glieder zusammen: ${@3}$, also $a = {@4}$, $b = {@5}$.",
  "Rozšír oba zlomky na menovateľ {@0} a {@1} ich čitatele. Aký čitateľ dostaneš?": "Erweitere beide Brüche auf den Nenner {@0} und {@1} ihre Zähler. Welchen Zähler erhältst du?",
  "S – stred": "S – Mittelpunkt",
  "Sieť kvádra": "Netz eines Quaders",
  "Spoj podobné členy. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Fasse gleichartige Glieder zusammen. Gib $a$ und $b$ getrennt durch ein Semikolon ein.",
  "Spoločný menovateľ je {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.": "Der gemeinsame Nenner ist {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.",
  "Spolu je to {@0} rovnakých dielov: {@1} má jeden diel a {@2} {@3}. Súčet preto deľ číslom {@4}.": "Zusammen sind das {@0} gleiche Teile: {@1} hat einen Teil und {@2} {@3}. Teile die Summe deshalb durch {@4}.",
  "Spolu majú {@0} {@1}, ale nie sú rovnako starí, preto súčet nemôžeš len rozdeliť na polovicu. Zohľadni rozdiel {@2} {@3}.": "Zusammen sind sie {@0} {@1} alt, aber nicht gleich alt, deshalb kannst du die Summe nicht einfach halbieren. Berücksichtige den Unterschied von {@2} {@3}.",
  "Stena je štvorec. Aká dlhá je jeho strana, teda hrana kocky (v cm)?": "Die Seitenfläche ist ein Quadrat. Wie lang ist seine Seite, also die Kante des Würfels (in cm)?",
  "Stredný člen je dvojnásobok súčinu, $2ab$, nie len $ab$.": "Das mittlere Glied ist das doppelte Produkt, $2ab$, nicht nur $ab$.",
  "Stĺpcový diagram známok z písomky": "Säulendiagramm der Noten einer Klassenarbeit",
  "Sumu, ktorú {@0} {@1}, označ $x$. „{@2} viac“ znamená {@3}-násobok.": "Bezeichne den Betrag, den {@1} {@0}, mit $x$. „{@2} so viel“ bedeutet das {@3}-Fache.",
  "Syn": "Der Sohn",
  "Súčet je ${@0} = {@1}$, počet čísel je {@2}. Priemer: ${@3} : {@4} = {@5}$.": "Die Summe ist ${@0} = {@1}$, die Anzahl der Zahlen ist {@2}. Mittelwert: ${@3} : {@4} = {@5}$.",
  "Súčet treba deliť počtom všetkých čísel. Spočítaj ich ešte raz.": "Die Summe muss man durch die Anzahl aller Zahlen teilen. Zähle sie noch einmal.",
  "Súčet vydelený počtom čísel je ich priemer, nie hľadané číslo. Zostav rovnicu so všetkými číslami $x$, $x + 1$, …": "Die Summe geteilt durch die Anzahl der Zahlen ist ihr Mittelwert, nicht die gesuchte Zahl. Stelle eine Gleichung mit allen Zahlen $x$, $x + 1$, … auf.",
  "Súčet {@0} po sebe idúcich prirodzených čísel je {@1}. Ktoré z nich je {@2}?": "Die Summe von {@0} aufeinanderfolgenden natürlichen Zahlen ist {@1}. Welche davon ist die {@2}?",
  "Súčin $(+b)\\cdot(-b)$ je záporný, preto je pred $b^2$ mínus.": "Das Produkt $(+b)\\cdot(-b)$ ist negativ, deshalb steht vor $b^2$ ein Minus.",
  "Sčítaj hodnoty všetkých stĺpcov.": "Addiere die Werte aller Säulen.",
  "Sčítaj koeficienty všetkých členov s $x$. Aké je $a$?": "Addiere die Koeffizienten aller Glieder mit $x$. Wie groß ist $a$?",
  "Sčítaj oba výsledky. Akú hodnotu má výraz?": "Addiere beide Ergebnisse. Welchen Wert hat der Ausdruck?",
  "Sčítaj samotné čísla (bez $x$). Aké je $b$?": "Addiere die Zahlen allein (ohne $x$). Wie groß ist $b$?",
  "Sčítaj všetky členy. Akú hodnotu má výraz?": "Addiere alle Glieder. Welchen Wert hat der Ausdruck?",
  "Sčítaj všetky čísla a súčet vydeľ ich počtom.": "Addiere alle Zahlen und teile die Summe durch ihre Anzahl.",
  "Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.": "Addiere getrennt die Koeffizienten bei $x$ und die Zahlen allein. Das Vorzeichen vor einem Glied gehört zu ihm.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, každú dĺžku teda započítaj dvakrát.": "Du hast nur zwei Seiten addiert. Ein Rechteck hat vier Seiten, zähle also jede Länge zweimal.",
  "Sčítame hodnoty všetkých stĺpcov: ${@0} = {@1}$.": "Wir addieren die Werte aller Säulen: ${@0} = {@1}$.",
  "To by bol výsledok $(x - b)^2$. Pri súčine súčtu a rozdielu sa stredné členy navzájom vyrušia.": "Das wäre das Ergebnis von $(x - b)^2$. Beim Produkt aus Summe und Differenz heben sich die mittleren Glieder gegenseitig auf.",
  "To je výsledok súčinu $(a + b)(a - b)$. Pri druhej mocnine rozdielu je navyše stredný člen $-2ab$ a posledný člen je kladný.": "Das ist das Ergebnis des Produkts $(a + b)(a - b)$. Beim Quadrat einer Differenz gibt es zusätzlich das mittlere Glied $-2ab$, und das letzte Glied ist positiv.",
  "Toto je aritmetický priemer. Medián je prostredná hodnota usporiadaných čísel.": "Das ist der arithmetische Mittelwert. Der Median ist der mittlere Wert der geordneten Zahlen.",
  "Toto je dĺžka druhej strany. Úloha sa pýta na {@0} stranu.": "Das ist die Länge der anderen Seite. Die Aufgabe fragt nach der {@0} Seite.",
  "Toto je len plášť. K povrchu patria aj obe podstavy.": "Das ist nur der Mantel. Zur Oberfläche gehören auch beide Grundflächen.",
  "Toto je najmenšie z čísel, úloha sa pýta na najväčšie. Pripočítaj k nemu, o koľko je najväčšie číslo väčšie.": "Das ist die kleinste der Zahlen, die Aufgabe fragt nach der größten. Addiere dazu, um wie viel die größte Zahl größer ist.",
  "Toto je najväčšie z čísel, úloha sa pýta na najmenšie.": "Das ist die größte der Zahlen, die Aufgabe fragt nach der kleinsten.",
  "Toto je objem kocky ($a^3$). Povrch je súčet obsahov všetkých stien.": "Das ist das Volumen des Würfels ($a^3$). Die Oberfläche ist die Summe der Flächeninhalte aller Seitenflächen.",
  "Toto je obsah celého kruhu. Výsek je len jeho časť podľa veľkosti stredového uhla.": "Das ist der Flächeninhalt des ganzen Kreises. Der Kreisausschnitt ist nur ein Teil davon, je nach Größe des Mittelpunktswinkels.",
  "Toto je obsah jednej steny. Hranu dostaneš, keď ho ešte odmocníš.": "Das ist der Flächeninhalt einer Seitenfläche. Die Kante erhältst du, wenn du noch die Wurzel ziehst.",
  "Toto je obvod ($2\\pi r$), alebo si $r^2$ počítal ako $2r$. Obsah je $\\pi r^2 = \\pi\\cdot r\\cdot r$.": "Das ist der Umfang ($2\\pi r$), oder du hast $r^2$ als $2r$ berechnet. Der Flächeninhalt ist $\\pi r^2 = \\pi\\cdot r\\cdot r$.",
  "Toto je povrch kocky ($6a^2$). Objem je $a^3$.": "Das ist die Oberfläche des Würfels ($6a^2$). Das Volumen ist $a^3$.",
  "Toto je počet, koľkokrát sa najčastejšia hodnota opakuje. Modus je samotná hodnota.": "Das ist die Anzahl, wie oft sich der häufigste Wert wiederholt. Der Modus ist der Wert selbst.",
  "Toto je suma, ktorú {@0} {@1}. Úloha sa pýta, koľko {@2} {@3}.": "Das ist der Betrag, den {@1} {@0}. Die Aufgabe fragt, wie viel {@3} {@2}.",
  "Toto je súčet čísel. Priemer dostaneš, keď súčet vydelíš počtom čísel.": "Das ist die Summe der Zahlen. Den Mittelwert erhältst du, wenn du die Summe durch die Anzahl der Zahlen teilst.",
  "Toto je vek {@0}, úloha sa pýta na vek {@1}.": "Das ist das Alter {@0}, die Aufgabe fragt nach dem Alter {@1}.",
  "Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.": "Die dritte Potenz ist ein Produkt dreier gleicher Faktoren. Eine ungerade Potenz einer negativen Zahl ist negativ.",
  "Tretia mocnina nie je trojnásobok: číslo treba napísať trikrát ako činiteľ a vynásobiť.": "Die dritte Potenz ist nicht das Dreifache: Die Zahl muss man dreimal als Faktor schreiben und multiplizieren.",
  "Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami ${@0}\\,\\text{cm}$ a ${@1}\\,\\text{cm}$ (prepona má ${@2}\\,\\text{cm}$) a výšku ${@3}\\,\\text{cm}$.": "Ein dreiseitiges Prisma hat als Grundfläche ein rechtwinkliges Dreieck mit den Katheten ${@0}\\,\\text{cm}$ und ${@1}\\,\\text{cm}$ (die Hypotenuse ist ${@2}\\,\\text{cm}$ lang) und die Höhe ${@3}\\,\\text{cm}$.",
  "Trojnásobok": "Das Dreifache",
  "Uhol ${@0}^\\circ$ je $\\frac{{@1}}{360}$ plného uhla, teda výsek je {@2} kruhu: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.": "Der Winkel ${@0}^\\circ$ ist $\\frac{{@1}}{360}$ des Vollwinkels, also ist der Kreisausschnitt {@2} des Kreises: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.",
  "Umocniť treba celý rozdiel, nielen číslo $x$.": "Quadrieren muss man die ganze Differenz, nicht nur die Zahl $x$.",
  "Umocňuje sa celý rozdiel, nie každé číslo zvlášť. Rozdiel daj do zátvorky.": "Potenziert wird die ganze Differenz, nicht jede Zahl einzeln. Setze die Differenz in eine Klammer.",
  "Umocňujeme celé číslo $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.": "Wir potenzieren die ganze Zahl $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.",
  "Urči medián čísel {@0}.": "Bestimme den Median der Zahlen {@0}.",
  "Urči modus súboru údajov {@0}.": "Bestimme den Modus der Daten {@0}.",
  "Usporiadame: {@0}. {@1}": "Wir ordnen: {@0}. {@1}",
  "V ktorý deň si požičali najviac kníh?": "An welchem Tag wurden die meisten Bücher ausgeliehen?",
  "V obvode je dlhšia strana dvakrát, preto aj rozdiel {@0} cm treba započítať dvakrát.": "Im Umfang kommt die längere Seite zweimal vor, deshalb muss man auch den Unterschied von {@0} cm zweimal zählen.",
  "Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.": "Bezeichne das Alter des Jüngeren mit $x$, das Alter des Älteren ist $x$ plus der Unterschied. Die Summe beider Alter ist gleich der gegebenen Zahl.",
  "Vek {@0} označ $x$. Z rovnice $x + (x + {@1}) = {@2}$ vypočítaj, koľko je $2x$.": "Bezeichne das Alter {@0} mit $x$. Berechne aus der Gleichung $x + (x + {@1}) = {@2}$, wie viel $2x$ ist.",
  "Vek {@0} označíme $x$, vek {@1} je potom $x + {@2}$. Rovnica: $x + (x + {@3}) = {@4}$, teda $2x = {@5}$ a $x = {@6}$. {@7}": "Das Alter {@0} bezeichnen wir mit $x$, das Alter {@1} ist dann $x + {@2}$. Gleichung: $x + (x + {@3}) = {@4}$, also $2x = {@5}$ und $x = {@6}$. {@7}",
  "Vezmi túto časť z obsahu celého kruhu. Aký je obsah výseku (v cm²)?": "Nimm diesen Teil vom Flächeninhalt des ganzen Kreises. Wie groß ist der Flächeninhalt des Kreisausschnitts (in cm²)?",
  "Vnuk": "Der Enkel",
  "Vnučka": "Die Enkelin",
  "Vo vzorci $o = 2\\pi r$ je polomer. Ak poznáš priemer, stačí $o = \\pi d$, priemer už nezdvojnásobuj.": "In der Formel $o = 2\\pi r$ steht der Radius. Wenn du den Durchmesser kennst, reicht $o = \\pi d$, verdopple den Durchmesser nicht mehr.",
  "Vydeľ pravú stranu koeficientom pri $x$. Aké je $x$?": "Dividiere die rechte Seite durch den Koeffizienten bei $x$. Wie groß ist $x$?",
  "Vydeľ súčet počtom čísel. Aký je priemer?": "Dividiere die Summe durch die Anzahl der Zahlen. Wie groß ist der Mittelwert?",
  "Vydeľ. Aké je $x$?": "Dividiere. Wie groß ist $x$?",
  "Vynásob menovatele. Aký menovateľ dostaneš?": "Multipliziere die Nenner. Welchen Nenner erhältst du?",
  "Vynásob samotné čísla z oboch zátvoriek. Aké je $q$?": "Multipliziere die Zahlen allein aus beiden Klammern. Wie groß ist $q$?",
  "Vynásob čitatele. Aký čitateľ dostaneš (pred krátením)?": "Multipliziere die Zähler. Welchen Zähler erhältst du (vor dem Kürzen)?",
  "Vynásob číslom $3{,}14$. Aký je obsah kruhu (v cm²)?": "Multipliziere mit $3{,}14$. Wie groß ist der Flächeninhalt des Kreises (in cm²)?",
  "Vynásob číslom $3{,}14$. Aký je obsah medzikružia (v cm²)?": "Multipliziere mit $3{,}14$. Wie groß ist der Flächeninhalt des Kreisrings (in cm²)?",
  "Vypočítaj $\\sqrt{{@0}} - \\sqrt{{@1}}$.": "Berechne $\\sqrt{{@0}} - \\sqrt{{@1}}$.",
  "Vypočítaj $\\sqrt{{@0}}$.": "Berechne $\\sqrt{{@0}}$.",
  "Vypočítaj ${@0}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.": "Berechne ${@0}$. Gib das Ergebnis als vollständig gekürzten Bruch (z. B. -5/6) oder als ganze Zahl ein.",
  "Vypočítaj ${@0}^2$.": "Berechne ${@0}^2$.",
  "Vypočítaj ${@0}^3$.": "Berechne ${@0}^3$.",
  "Vypočítaj $|{@0}| - |{@1}|$.": "Berechne $|{@0}| - |{@1}|$.",
  "Vypočítaj aritmetický priemer čísel {@0}.": "Berechne den arithmetischen Mittelwert der Zahlen {@0}.",
  "Vypočítaj hodnotu výrazu ${@0}$ pre $x = {@1}$.": "Berechne den Wert des Ausdrucks ${@0}$ für $x = {@1}$.",
  "Vypočítaj hodnotu výrazu ${@0}(x{@1})$ pre $x = {@2}$.": "Berechne den Wert des Ausdrucks ${@0}(x{@1})$ für $x = {@2}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$ a $y = {@3}$.": "Berechne den Wert des Ausdrucks ${@0}{@1}$ für $x = {@2}$ und $y = {@3}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$.": "Berechne den Wert des Ausdrucks ${@0}{@1}$ für $x = {@2}$.",
  "Vypočítaj objem kocky s hranou ${@0}\\,\\text{cm}$ (v cm³).": "Berechne das Volumen eines Würfels mit der Kante ${@0}\\,\\text{cm}$ (in cm³).",
  "Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.": "Berechne den Flächeninhalt des ganzen Kreises und nimm davon den Teil, den der Winkel des Kreisausschnitts von $360^\\circ$ bildet.",
  "Vypočítaj obsah kruhového výseku s polomerom $r = {@0}\\,\\text{cm}$ a stredovým uhlom ${@1}^\\circ$ (v cm²). {@2}": "Berechne den Flächeninhalt eines Kreisausschnitts mit dem Radius $r = {@0}\\,\\text{cm}$ und dem Mittelpunktswinkel ${@1}^\\circ$ (in cm²). {@2}",
  "Vypočítaj obsah medzikružia s polomermi $R = {@0}\\,\\text{cm}$ a $r = {@1}\\,\\text{cm}$ (v cm²). {@2}": "Berechne den Flächeninhalt eines Kreisrings mit den Radien $R = {@0}\\,\\text{cm}$ und $r = {@1}\\,\\text{cm}$ (in cm²). {@2}",
  "Vypočítaj obsah obdĺžnika $a\\cdot b$ (v cm²).": "Berechne den Flächeninhalt des Rechtecks $a\\cdot b$ (in cm²).",
  "Vypočítaj obsahy troch rôznych stien $ab$, $bc$ a $ac$ a sčítaj ich (v cm²).": "Berechne die Flächeninhalte der drei verschiedenen Flächen $ab$, $bc$ und $ac$ und addiere sie (in cm²).",
  "Vypočítaj obvod obdĺžnika $2a + 2b$ (v cm).": "Berechne den Umfang des Rechtecks $2a + 2b$ (in cm).",
  "Vypočítaj povrch kocky s hranou ${@0}\\,\\text{cm}$ (v cm²).": "Berechne die Oberfläche eines Würfels mit der Kante ${@0}\\,\\text{cm}$ (in cm²).",
  "Vypočítal si $2x$, teda dvojnásobok hľadaného veku. Ešte vydeľ dvoma.": "Du hast $2x$ berechnet, also das Doppelte des gesuchten Alters. Teile noch durch zwei.",
  "Vypočítal si obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Du hast den Flächeninhalt berechnet. Der Umfang ist die Summe der Längen aller vier Seiten.",
  "Vypočítal si obvod. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Du hast den Umfang berechnet. Der Flächeninhalt des Rechtecks ist das Produkt seiner Seitenlängen.",
  "Vyrieš rovnicu $\\frac{x}{{@0}}{@1} = {@2}$.": "Löse die Gleichung $\\frac{x}{{@0}}{@1} = {@2}$.",
  "Vyrieš rovnicu ${@0}(x{@1}) = {@2}{@3}$.": "Löse die Gleichung ${@0}(x{@1}) = {@2}{@3}$.",
  "Vyrieš rovnicu ${@0}{@1} = {@2}{@3}$.": "Löse die Gleichung ${@0}{@1} = {@2}{@3}$.",
  "Vyrieš rovnicu. Aké je $x$ (najmenšie číslo)?": "Löse die Gleichung. Wie groß ist $x$ (die kleinste Zahl)?",
  "Vyrieš rovnicu. Koľko eur {@0} {@1}?": "Löse die Gleichung. Wie viele Euro {@0} {@1}?",
  "Vzal si časť z obvodu ($2\\pi r$), to je dĺžka oblúka. Pri obsahu výseku vychádzaj z obsahu kruhu $\\pi r^2$.": "Du hast einen Teil des Umfangs ($2\\pi r$) genommen, das ist die Bogenlänge. Beim Flächeninhalt des Kreisausschnitts gehe vom Flächeninhalt des Kreises $\\pi r^2$ aus.",
  "Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|{@0} - {@1}| = |{@2}| = {@3}$.": "Der Abstand zweier Zahlen ist der Betrag ihrer Differenz: $|{@0} - {@1}| = |{@2}| = {@3}$.",
  "Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.": "Dividiere die Formel $o = 2\\pi r$ durch $2\\pi \\approx 6{,}28$.",
  "Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo": "Waage im Gleichgewicht: zwei Säckchen x und drei Gewichte links, neun Gewichte rechts",
  "Výsledok zo zátvorky vynásob číslom ${@0}$. Akú hodnotu má výraz?": "Multipliziere das Ergebnis der Klammer mit ${@0}$. Welchen Wert hat der Ausdruck?",
  "Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.": "Achte darauf, ob das Minus in der Klammer steht. Potenziert wird nur das, was direkt unter dem Exponenten steht.",
  "Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.": "Aus $o = 2\\pi r$ erhalten wir $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.",
  "Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.": "Setze für $x$ die Zahl ein; ist sie negativ, setze sie in Klammern.",
  "Zamenil si čísla: násobí sa číslom {@0}, pripočítava sa {@1}.": "Du hast die Zahlen vertauscht: Multipliziert wird mit {@0}, addiert wird {@1}.",
  "Zapíš výsledok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Schreibe das Ergebnis $\\frac{{@0}}{{@1}}$ vollständig gekürzt (oder als ganze Zahl).",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Schreibe den Bruch $\\frac{{@0}}{{@1}}$ vollständig gekürzt (oder als ganze Zahl).",
  "Zapíš číslo ${@0}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.": "Schreibe die Zahl ${@0}$ in der Form $a\\cdot 10^n$, wobei $1 \\le a &lt; 10$. Gib $a$ und $n$ getrennt durch ein Semikolon ein.",
  "Zbav sa čísla ${@0}$ na ľavej strane, aby ostalo len ${@1}x$. Aké číslo bude na pravej strane?": "Beseitige die Zahl ${@0}$ auf der linken Seite, damit nur ${@1}x$ übrig bleibt. Welche Zahl steht dann auf der rechten Seite?",
  "Zjednoduš výraz ${@0}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.": "Vereinfache den Ausdruck ${@0}$ auf die Form $ax + b$. Gib die Zahlen $a$ und $b$ getrennt durch ein Semikolon ein.",
  "Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Subtrahiere Brüche nicht, indem du die Zähler und die Nenner getrennt subtrahierst. Bringe sie zuerst auf einen gemeinsamen Nenner.",
  "Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Addiere Brüche nicht, indem du die Zähler und die Nenner getrennt addierst. Bringe sie zuerst auf einen gemeinsamen Nenner.",
  "Zlomok $\\frac{x}{{@0}}$ odstrániš násobením číslom {@1}, nie delením.": "Den Bruch $\\frac{x}{{@0}}$ beseitigst du durch Multiplizieren mit {@1}, nicht durch Dividieren.",
  "Zlomok prevedieme na desatinné číslo: ${@0} = {@1}$. Porovnávame ${@2}$ a ${@3}$, preto ${@4} {@5} {@6}$.": "Wir wandeln den Bruch in eine Dezimalzahl um: ${@0} = {@1}$. Wir vergleichen ${@2}$ und ${@3}$, deshalb ${@4} {@5} {@6}$.",
  "Zápis ${@0}$ znamená súčin čísla ${@1}$ a premennej $x$, nie súčet. Dosadené číslo daj do zátvorky a vynásob.": "Die Schreibweise ${@0}$ bedeutet das Produkt der Zahl ${@1}$ und der Variablen $x$, nicht die Summe. Setze die eingesetzte Zahl in Klammern und multipliziere.",
  "Záporné číslo pred zátvorkou mení znamienko každého člena v zátvorke, aj čísla na konci.": "Eine negative Zahl vor der Klammer ändert das Vorzeichen jedes Glieds in der Klammer, auch der Zahl am Ende.",
  "Záporné číslo pri umocňovaní daj do zátvorky: $({@0})^2$ je kladné číslo.": "Setze eine negative Zahl beim Potenzieren in Klammern: $({@0})^2$ ist eine positive Zahl.",
  "Zátvorka by znamenala, že {@0}-krát berieš celý súčet. Tu sa najprv vezme {@1} čísla $x$ a až k nemu sa pripočíta {@2}.": "Eine Klammer würde bedeuten, dass du die ganze Summe {@0}-mal nimmst. Hier nimmt man zuerst das {@1} der Zahl $x$ und addiert erst dazu {@2}.",
  "a $x + 2$": "und $x + 2$",
  "autobusom 30 %": "mit dem Bus 30 %",
  "babka": "Oma",
  "babky": "von Oma",
  "banán": "Banane",
  "beh": "Laufen",
  "d = 2r – priemer": "d = 2r – Durchmesser",
  "dedka": "von Opa",
  "dedko": "Opa",
  "dlhšia": "längere",
  "dlhšiu": "längeren",
  "druhá mocnina rozdielu čísla $x$ a čísla {@0}": "das Quadrat der Differenz der Zahl $x$ und der Zahl {@0}",
  "dvojnásobku": "Doppelten",
  "dvojnásobok": "Doppelte",
  "futbal": "Fußball",
  "hokej": "Eishockey",
  "hruška": "Birne",
  "jahoda": "Erdbeere",
  "k – kružnica": "k – Kreislinie",
  "kratšia": "kürzere",
  "kratšiu": "kürzeren",
  "mama": "Mama",
  "mamy": "von Mama",
  "miest": "Stellen",
  "na bicykli 20 %": "mit dem Fahrrad 20 %",
  "napr. -2; 8": "z. B. -2; 8",
  "napr. 4; 5": "z. B. 4; 5",
  "napr. 6; -9": "z. B. 6; -9",
  "objem (v cm³)": "das Volumen (in cm³)",
  "obsah (v cm²)": "den Flächeninhalt (in cm²)",
  "obvod (v cm)": "den Umfang (in cm)",
  "otca": "von Papa",
  "otec": "Papa",
  "pešo 50 %": "zu Fuß 50 %",
  "plávanie": "Schwimmen",
  "podstava": "Grundfläche",
  "polomer $r = {@0}\\,\\text{cm}$": "den Radius $r = {@0}\\,\\text{cm}$",
  "povrch (v cm²)": "die Oberfläche (in cm²)",
  "povrch; objem": "Oberfläche; Volumen",
  "priemer $d = {@0}\\,\\text{cm}$": "den Durchmesser $d = {@0}\\,\\text{cm}$",
  "päťnásobku": "Fünffachen",
  "päťnásobok": "Fünffache",
  "r – polomer": "r – Radius",
  "rovnaké, výsledok je kladný": "gleich, das Ergebnis ist positiv",
  "rozdiel {@0} čísla $x$ a čísla {@1}": "die Differenz aus dem {@0} der Zahl $x$ und der Zahl {@1}",
  "rôzne, výsledok je záporný": "verschieden, das Ergebnis ist negativ",
  "slivka": "Pflaume",
  "stĺpcový diagram": "Säulendiagramm",
  "sčítaj": "addiere",
  "tenis": "Tennis",
  "tri štvrtiny": "drei Viertel",
  "troch": "drei",
  "trojnásobku": "Dreifachen",
  "trojnásobok": "Dreifache",
  "ušetril": "sparte",
  "ušetrila": "sparte",
  "vnuk": "der Enkel",
  "vnuka": "des Enkels",
  "vnučka": "die Enkelin",
  "vnučky": "der Enkelin",
  "výsek s uhlom α": "Kreisausschnitt mit dem Winkel α",
  "{@0} O koľko je stĺpec „{@1}“ vyšší ako stĺpec „{@2}“? {@3}": "{@0} Um wie viel ist die Säule „{@1}“ höher als die Säule „{@2}“? {@3}",
  "{@0} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.": "{@0} Berechne seine Oberfläche (in cm²) und sein Volumen (in cm³), trenne sie durch ein Semikolon.",
  "{@0} Vypočítaj jeho {@1}.": "{@0} Berechne {@1}.",
  "{@0} a {@1} ušetrili spolu {@2} €. {@3} {@4} {@5} viac ako {@6}. Koľko eur {@7} {@8}?": "{@0} und {@1} haben zusammen {@2} € gespart. {@3} {@4} {@5} so viel wie {@6}. Wie viele Euro {@7} {@8}?",
  "{@0} je o {@1} {@2} {@3} ako {@4}. Spolu majú {@5} {@6}. Koľko rokov má {@7}?": "{@0} ist {@1} {@2} älter als {@4}. Zusammen sind sie {@5} {@6} alt. Wie alt ist {@7}?",
  "{@0} má $x$ eur, {@1} ${@2}x$ eur. Koľko $x$ je to spolu, teda aké číslo patrí do rovnice $\\square\\, x = {@3}$?": "{@0} hat $x$ Euro, {@1} ${@2}x$ Euro. Wie viele $x$ sind das zusammen, welche Zahl gehört also in die Gleichung $\\square\\, x = {@3}$?",
  "{@0} má ${@1} + {@2} = {@3}$ {@4}.": "{@0} ist ${@1} + {@2} = {@3}$ {@4} alt.",
  "{@0} má {@1} {@2}.": "{@0} ist {@1} {@2} alt.",
  "{@0} súčtu čísla $x$ a čísla {@1}": "{@0} der Summe der Zahl $x$ und der Zahl {@1}",
  "{@0} znamená násobiť číslom {@1}, nie {@2} pripočítať.": "{@0} bedeutet, mit {@1} zu multiplizieren, nicht {@2} zu addieren.",
  "{@0}: $x$, {@1}: ${@2}x$. Rovnica: $x + {@3}x = {@4}$, teda ${@5}x = {@6}$ a $x = {@7}$. {@8} {@9} {@10} €.": "{@0}: $x$, {@1}: ${@2}x$. Gleichung: $x + {@3}x = {@4}$, also ${@5}x = {@6}$ und $x = {@7}$. {@8} {@9} {@10} €.",
  "{@0}: ${@1}x = {@2}$. Obe strany vydelíme číslom ${@3}$: $x = {@4}$.": "{@0}: ${@1}x = {@2}$. Beide Seiten dividieren wir durch ${@3}$: $x = {@4}$.",
  "Čitateľ násobíme čitateľom a menovateľ menovateľom: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.": "Zähler mal Zähler und Nenner mal Nenner: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.",
  "Člen ${@0}$ má koeficient ${@1}$, nezabudni ho započítať.": "Das Glied ${@0}$ hat den Koeffizienten ${@1}$, vergiss nicht, ihn mitzuzählen.",
  "Členy s $x$ dáme naľavo, čísla napravo: ${@0}{@1} = {@2}{@3}$, teda ${@4} = {@5}$ a $x = {@6}$.": "Glieder mit $x$ bringen wir nach links, Zahlen nach rechts: ${@0}{@1} = {@2}{@3}$, also ${@4} = {@5}$ und $x = {@6}$.",
  "Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.": "Bringe die Glieder mit $x$ auf eine Seite, die Zahlen auf die andere. Zum Schluss dividiere durch den Koeffizienten bei $x$.",
  "Členy s $x$: ${@0}{@1}{@2} = {@3}$. Čísla: ${@4}{@5} = {@6}$. Výsledok: ${@7}$, teda $a = {@8}$, $b = {@9}$.": "Glieder mit $x$: ${@0}{@1}{@2} = {@3}$. Zahlen: ${@4}{@5} = {@6}$. Ergebnis: ${@7}$, also $a = {@8}$, $b = {@9}$.",
  "Čísel je {@0}. Koľké v poradí je prostredné číslo?": "Es sind {@0} Zahlen. An welcher Stelle der Reihe steht die mittlere Zahl?",
  "Čísla ležia na opačných stranách nuly, preto sa ich vzdialenosti od nuly sčítajú, neodčítajú.": "Die Zahlen liegen auf verschiedenen Seiten von null, deshalb werden ihre Abstände von null addiert, nicht subtrahiert.",
  "Čísla majú rôzne znamienka, preto ich absolútne hodnoty nesčítavaj, ale menšiu odčítaj od väčšej. Znamienko výsledku určí číslo s väčšou absolútnou hodnotou.": "Die Zahlen haben verschiedene Vorzeichen, deshalb addiere ihre Beträge nicht, sondern ziehe den kleineren vom größeren ab. Das Vorzeichen des Ergebnisses bestimmt die Zahl mit dem größeren Betrag.",
  "Čísla najprv usporiadaj od najmenšieho po najväčšie.": "Ordne die Zahlen zuerst von der kleinsten zur größten.",
  "Čísla označíme $x$, $x + 1${@0}. Rovnica: ${@1}x + {@2} = {@3}$, teda ${@4}x = {@5}$ a $x = {@6}$. {@7}": "Wir bezeichnen die Zahlen mit $x$, $x + 1${@0}. Gleichung: ${@1}x + {@2} = {@3}$, also ${@4}x = {@5}$ und $x = {@6}$. {@7}",
  "Čísla usporiadaj od najmenšieho. Aké je {@0}. číslo v poradí?": "Ordne die Zahlen von der kleinsten an. Wie heißt die {@0}. Zahl der Reihe nach?",
  "Čísla usporiadaj od najmenšieho. Aké číslo stojí na tomto mieste? To je medián.": "Ordne die Zahlen von der kleinsten an. Welche Zahl steht an dieser Stelle? Das ist der Median.",
  "Číslo $a$ musí spĺňať $1 \\le a &lt; 10$, pred desatinnou čiarkou má teda jedinú číslicu.": "Die Zahl $a$ muss $1 \\le a &lt; 10$ erfüllen, vor dem Dezimalkomma hat sie also genau eine Ziffer.",
  "Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.": "Die Zahl $a$ hat vor dem Dezimalkomma genau eine Ziffer. Der Exponent $n$ gibt an, um wie viele Stellen du das Komma verschiebst.",
  "Číslo $q$ vznikne vynásobením samotných čísel zo zátvoriek, nie ich sčítaním.": "Die Zahl $q$ entsteht durch Multiplizieren der Zahlen allein aus den Klammern, nicht durch Addieren.",
  "Číslo ${@0}$ násobí celý obsah zátvorky, nielen $x$.": "Die Zahl ${@0}$ multipliziert den ganzen Inhalt der Klammer, nicht nur $x$.",
  "Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{{@0}}$ a vydeľ 10.": "Die Zahl unter der Wurzel hat zwei Dezimalstellen, das Ergebnis wird eine haben: Versuche $\\sqrt{{@0}}$ und teile durch 10.",
  "Číslo pred zátvorkou násobí oba členy v zátvorke, nielen $x$, ale aj samotné číslo.": "Die Zahl vor der Klammer multipliziert beide Glieder in der Klammer, nicht nur $x$, sondern auch die Zahl allein.",
  "Číslo {@0} sa vyskytuje trikrát, ostatné čísla len raz. Modus je {@1}.": "Die Zahl {@0} kommt dreimal vor, die anderen Zahlen nur einmal. Der Modus ist {@1}.",
  "Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.": "Multipliziere mit der Zahl vor der Klammer jedes Glied darin, samt Vorzeichen. Dann fasse gleichartige Glieder zusammen.",
  "Číslom pred zátvorkou vynásob každý člen v zátvorke, aj samotné číslo na konci.": "Multipliziere mit der Zahl vor der Klammer jedes Glied in der Klammer, auch die Zahl allein am Ende.",
  "číslo o {@0} menšie ako polovica čísla $x$": "die Zahl, die um {@0} kleiner ist als die Hälfte der Zahl $x$",
  "číslo o {@0} väčšie ako {@1} čísla $x$": "die Zahl, die um {@0} größer ist als das {@1} der Zahl $x$",
  "Štvorec so stranou a plus b rozdelený na štyri časti": "Quadrat mit der Seite a plus b, in vier Teile geteilt",
  "Štvornásobok": "Das Vierfache",
  "štvornásobku": "Vierfachen",
  "štvornásobok": "Vierfache",
  "štyroch": "vier",
  "Žiaci hlasovali o obľúbenom ovocí.": "Die Schüler haben über ihr Lieblingsobst abgestimmt.",
  "Žiaci uviedli svoj obľúbený šport.": "Die Schüler haben ihre Lieblingssportart angegeben.",
  "„O {@0} menšie“ znamená od polovice odčítať {@1}, poradie je opačné.": "„Um {@0} kleiner“ bedeutet, von der Hälfte {@1} abzuziehen, die Reihenfolge ist umgekehrt.",
  "„O {@0} väčšie“ znamená {@1} pripočítať, nie odčítať.": "„Um {@0} größer“ bedeutet, {@1} zu addieren, nicht zu subtrahieren.",
  "ℕ – prirodzené": "ℕ – natürliche",
  "ℚ – racionálne čísla": "ℚ – rationale Zahlen",
  "ℤ – celé čísla": "ℤ – ganze Zahlen",
  "Apfel": "Apfel",
  "Birne": "Birne",
  "Banane": "Banane",
  "Pflaume": "Pflaume",
  "Erdbeere": "Erdbeere",
  "Säulendiagramm": "Säulendiagramm",
  "Fußball": "Fußball",
  "Eishockey": "Eishockey",
  "Tennis": "Tennis",
  "Schwimmen": "Schwimmen",
  "Laufen": "Laufen"
 }
});
