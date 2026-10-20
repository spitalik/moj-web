/* Deutsch: preklad js/rocniky/r6.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/r6/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "r6-desatinne": {
   "title": "Dezimalzahlen und Rechnen mit ihnen",
   "summary": "Dezimalzahlen schreiben, vergleichen und runden; addieren, subtrahieren, multiplizieren und dividieren.",
   "theory": [
    "<p>In einer <strong>Dezimalzahl</strong> trennt das Komma den ganzzahligen Teil von den Nachkommastellen. In der Zahl $2{,}75$ stecken 2 Ganze, 7 Zehntel und 5 Hundertstel,\n       also $2{,}75 = 2 + \\frac{7}{10} + \\frac{5}{100}$. Nullen am Ende der Nachkommastellen dürfen wir anhängen oder weglassen: $2{,}4 = 2{,}40$.</p>",
    {
     "fig": "r6-desatinna-os",
     "caption": "Ausschnitt des Zahlenstrahls von 2 bis 3. Zwischen zwei ganzen Zahlen liegen 10 Zehntel und 100 Hundertstel."
    },
    "<p><strong>Addition und Subtraktion:</strong> Wir schreiben die Zahlen so untereinander, dass <em>Komma unter Komma</em> steht, fehlende Stellen füllen wir mit Nullen auf.\n       <strong>Multiplikation:</strong> Wir multiplizieren wie mit ganzen Zahlen, und das Ergebnis hat so viele Nachkommastellen wie beide Faktoren zusammen: $1{,}2\\cdot 0{,}3 = 0{,}36$.\n       Multiplizieren mit 10, 100, 1 000 verschiebt das Komma um 1, 2, 3 Stellen nach rechts, Dividieren nach links.</p>",
    "<p><strong>Division durch eine natürliche Zahl:</strong> Wir dividieren wie gewohnt und setzen das Komma im Ergebnis in dem Moment, in dem wir es im Dividenden überschreiten: $7{,}5 : 3 = 2{,}5$.\n       <strong>Runden:</strong> Wir schauen auf die Ziffer direkt hinter der Stelle, auf die wir runden. Ist sie 0 bis 4, runden wir ab, ist sie 5 bis 9, runden wir auf: $3{,}462 \\doteq 3{,}5$ (auf Zehntel).</p>"
   ],
   "examples": [
    {
     "task": "Berechne $12{,}5 + 3{,}78$.",
     "steps": [
      "Wir richten die Kommas aus: $12{,}50 + 3{,}78$.",
      "Wir addieren stellenweise: $12{,}50 + 3{,}78 = 16{,}28$.",
      "<strong>Ergebnis: 16,28</strong>"
     ]
    },
    {
     "task": "Berechne $2{,}4\\cdot 1{,}5$.",
     "steps": [
      "Ohne Kommas: $24\\cdot 15 = 360$.",
      "Die Faktoren haben zusammen 2 Nachkommastellen, deshalb ist das Ergebnis $3{,}60 = 3{,}6$.",
      "<strong>Ergebnis: 3,6</strong>"
     ]
    }
   ]
  },
  "r6-zlomky": {
   "title": "Brüche und ihre grundlegende Anwendung",
   "summary": "Was ein Bruch ist, Teil eines Ganzen, Kürzen und Erweitern, Umwandeln in eine Dezimalzahl, Vergleichen.",
   "theory": [
    "<p>Ein <strong>Bruch</strong> $\\frac{a}{b}$ beschreibt einen Teil eines Ganzen: Wir teilen das Ganze in $b$ gleiche Teile (<em>Nenner</em>) und nehmen $a$ davon (<em>Zähler</em>).\n       Der Bruchstrich bedeutet Division: $\\frac{3}{4} = 3 : 4 = 0{,}75$.</p>",
    {
     "fig": "r6-zlomky-kruhy",
     "caption": "Gefärbte Teile von Kreisen: eine Hälfte, drei Viertel und drei Achtel."
    },
    "<p><strong>Bruchteil einer Zahl:</strong> $\\frac{3}{4}$ von 20 berechnen wir, indem wir 20 durch den Nenner dividieren und mit dem Zähler multiplizieren: $20 : 4 = 5$, $5\\cdot 3 = 15$.</p>",
    "<p><strong>Erweitern und Kürzen:</strong> Wenn wir Zähler und Nenner mit derselben Zahl (außer null) multiplizieren oder durch sie dividieren, ändert sich der Wert des Bruchs nicht:\n       $\\frac{12}{18} = \\frac{2}{3}$ (wir kürzen mit sechs). Ein Bruch ist <em>vollständig gekürzt</em>, wenn man ihn nicht mehr kürzen kann.\n       Zwei Brüche vergleichen wir am einfachsten, wenn wir sie auf einen gemeinsamen Nenner bringen.</p>"
   ],
   "examples": [
    {
     "task": "Wie viel sind $\\frac{2}{5}$ von 35?",
     "steps": [
      "Ein Fünftel: $35 : 5 = 7$.",
      "Zwei Fünftel: $7\\cdot 2 = 14$.",
      "<strong>Ergebnis: 14</strong>"
     ]
    },
    {
     "task": "Vergleiche die Brüche $\\frac{3}{4}$ und $\\frac{5}{6}$.",
     "steps": [
      "Der gemeinsame Nenner ist 12: $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{5}{6} = \\frac{10}{12}$.",
      "$9 &lt; 10$, deshalb $\\frac{3}{4} &lt; \\frac{5}{6}$."
     ]
    }
   ]
  },
  "r6-delitelnost": {
   "title": "Teilbarkeit, Primzahlen und zusammengesetzte Zahlen",
   "summary": "Teiler und Vielfache, Teilbarkeitsregeln, Primzahlen, zusammengesetzte Zahlen und Primfaktorzerlegung.",
   "theory": [
    "<p>Die Zahl $a$ ist <strong>teilbar</strong> durch die Zahl $b$, wenn bei der Division $a : b$ kein Rest bleibt. Dann ist $b$ ein <em>Teiler</em> von $a$ und $a$ ein <em>Vielfaches</em> von $b$.\n       Zum Beispiel sind die Teiler der Zahl 12: 1, 2, 3, 4, 6 und 12.</p>",
    "<p><strong>Teilbarkeitsregeln.</strong> Eine Zahl ist teilbar durch</p>\n       <ul><li><strong>2</strong>, wenn ihre letzte Ziffer gerade ist (0, 2, 4, 6, 8),</li>\n       <li><strong>3</strong>, wenn ihre Quersumme durch 3 teilbar ist; <strong>9</strong>, wenn die Quersumme durch 9 teilbar ist,</li>\n       <li><strong>4</strong>, wenn die Zahl aus den letzten beiden Ziffern durch 4 teilbar ist,</li>\n       <li><strong>5</strong>, wenn sie auf 0 oder 5 endet; <strong>10</strong>, wenn sie auf 0 endet,</li>\n       <li><strong>6</strong>, wenn sie zugleich durch 2 und durch 3 teilbar ist.</li></ul>",
    "<p>Eine <strong>Primzahl</strong> ist eine natürliche Zahl mit genau zwei Teilern: 1 und sich selbst (2, 3, 5, 7, 11, …).\n       Eine <strong>zusammengesetzte Zahl</strong> hat mehr als zwei Teiler (4, 6, 8, 9, …). Die Zahl 1 ist weder Primzahl noch zusammengesetzte Zahl.\n       Jede zusammengesetzte Zahl lässt sich als Produkt von Primzahlen (<em>Primfaktoren</em>) schreiben: $60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$.</p>",
    {
     "fig": "r6-eratosten",
     "caption": "Sieb des Eratosthenes: Von den Zahlen 1 bis 60 streichen wir die Vielfachen von 2, 3, 5 und 7 (außer diesen Zahlen selbst). Übrig bleiben die Primzahlen, sie sind gefärbt."
    }
   ],
   "examples": [
    {
     "task": "Ist die Zahl 4 716 durch 3 teilbar? Und durch 4?",
     "steps": [
      "Quersumme: $4 + 7 + 1 + 6 = 18$, und 18 ist durch 3 teilbar, also <strong>ja</strong>.",
      "Die letzten beiden Ziffern bilden 16 und $16 : 4 = 4$, deshalb ist die Zahl auch durch 4 teilbar: <strong>ja</strong>."
     ]
    },
    {
     "task": "Zerlege die Zahl 90 in Primfaktoren.",
     "steps": [
      "$90 : 2 = 45$, $45 : 3 = 15$, $15 : 3 = 5$, 5 ist eine Primzahl.",
      "<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>"
     ]
    }
   ]
  },
  "r6-nsd-nsn": {
   "title": "Größter gemeinsamer Teiler und kleinstes gemeinsames Vielfaches",
   "summary": "ggT und kgV mithilfe der Primfaktorzerlegung, teilerfremde Zahlen und Sachaufgaben.",
   "theory": [
    "<p>Der <strong>größte gemeinsame Teiler</strong> der Zahlen $a$, $b$ – wir schreiben $D(a, b)$ oder ggT – ist die größte Zahl, durch die beide Zahlen teilbar sind.\n       Das <strong>kleinste gemeinsame Vielfache</strong> – $n(a, b)$ oder kgV – ist die kleinste von null verschiedene Zahl, die ein Vielfaches beider Zahlen ist.</p>",
    {
     "fig": "r6-strom",
     "caption": "Primfaktorzerlegung der Zahlen 60 und 84. Gemeinsam sind 2, 2 und 3, deshalb ist D(60, 84) = 12; n(60, 84) = 2 · 2 · 3 · 5 · 7 = 420."
    },
    "<p><strong>Vorgehen über die Zerlegung:</strong> Wir zerlegen beide Zahlen in Primfaktoren. Der ggT ist das Produkt der <em>gemeinsamen</em> Primfaktoren (jeder so oft, wie er in beiden vorkommt).\n       Das kgV ist das Produkt <em>aller</em> Primfaktoren, die in mindestens einer Zahl vorkommen (jeder so oft, wie er in der Zahl vorkommt, in der er häufiger ist).\n       Nützliche Kontrolle: $D(a, b)\\cdot n(a, b) = a\\cdot b$.</p>",
    "<p>Zahlen, deren ggT 1 ist, heißen <strong>teilerfremd</strong> (z. B. 8 und 15). Haben sie einen gemeinsamen Teiler größer als 1, sind sie <strong>nicht teilerfremd</strong>.\n       Den ggT verwenden wir, wenn wir etwas in möglichst große gleiche Teile aufteilen; das kgV, wenn wir suchen, wann sich etwas Wiederkehrendes wieder trifft.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme $D(24, 36)$ und $n(24, 36)$.",
     "steps": [
      "$24 = 2^3\\cdot 3$, $36 = 2^2\\cdot 3^2$.",
      "ggT: $2^2\\cdot 3 = 12$.",
      "kgV: $2^3\\cdot 3^2 = 72$.",
      "Kontrolle: $12\\cdot 72 = 864 = 24\\cdot 36$."
     ]
    },
    {
     "task": "Zwei Ampeln schalten gleichzeitig auf Grün. Die erste wechselt ihre Farben in einem Zyklus von 40 Sekunden, die zweite von 60 Sekunden. Nach wie vielen Sekunden sind beide wieder gleichzeitig am Anfang ihres Zyklus?",
     "steps": [
      "Wir suchen das kleinste gemeinsame Vielfache: $n(40, 60)$.",
      "$40 = 2^3\\cdot 5$, $60 = 2^2\\cdot 3\\cdot 5$, also $n = 2^3\\cdot 3\\cdot 5 = 120$.",
      "<strong>Nach 120 Sekunden (2 Minuten).</strong>"
     ]
    }
   ]
  },
  "r6-cele": {
   "title": "Ganze Zahlen und negative Zahlen",
   "summary": "Positive und negative Zahlen auf dem Zahlenstrahl, Gegenzahl, Betrag, Vergleichen, Addieren und Subtrahieren.",
   "theory": [
    "<p><strong>Ganze Zahlen</strong> sind $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ Negative Zahlen verwenden wir zum Beispiel bei Temperaturen unter null ($-5\\,{}^\\circ\\mathrm{C}$),\n       bei Schulden oder bei Höhen unter dem Meeresspiegel. Null ist weder positiv noch negativ.</p>",
    {
     "fig": "r6-os-cele",
     "caption": "Die Zahlen 4 und −4 sind Gegenzahlen: Sie liegen gleich weit von der Null entfernt, auf entgegengesetzten Seiten. Beide haben den Betrag 4."
    },
    "<p>Die <strong>Gegenzahl</strong> zur Zahl $a$ ist $-a$ (zu 4 ist es $-4$, zu $-7$ ist es 7). Der <strong>Betrag</strong> $|a|$ ist der Abstand der Zahl von der Null: $|-6| = 6$, $|6| = 6$.\n       <strong>Vergleichen:</strong> Auf dem Zahlenstrahl ist die Zahl größer, die weiter rechts liegt. Deshalb ist $-2 &gt; -5$, und jede negative Zahl ist kleiner als 0.</p>",
    "<p><strong>Addieren und Subtrahieren:</strong> Eine positive Zahl addieren heißt, auf dem Zahlenstrahl nach rechts zu gehen, eine negative nach links.\n       Eine Zahl subtrahieren ist dasselbe wie ihre Gegenzahl addieren: $3 - (-4) = 3 + 4 = 7$, $-2 - 5 = -2 + (-5) = -7$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $-8 + 3$.",
     "steps": [
      "Wir beginnen bei $-8$ und gehen 3 nach rechts.",
      "<strong>$-8 + 3 = -5$</strong>"
     ]
    },
    {
     "task": "Am Morgen waren es $-6\\,{}^\\circ\\mathrm{C}$, am Mittag $2\\,{}^\\circ\\mathrm{C}$. Um wie viel Grad ist es wärmer geworden?",
     "steps": [
      "Differenz: $2 - (-6) = 2 + 6 = 8$.",
      "<strong>Es ist um 8 °C wärmer geworden.</strong>"
     ]
    }
   ]
  },
  "r6-uhly": {
   "title": "Winkel und Winkelmessung",
   "summary": "Winkelarten, Geodreieck, Grad und Minuten, Nebenwinkel und Scheitelwinkel, Rechnen mit Winkeln.",
   "theory": [
    "<p>Ein <strong>Winkel</strong> wird von zwei Halbgeraden (<em>Schenkeln</em>) mit gemeinsamem Anfangspunkt (<em>Scheitelpunkt</em>) gebildet. Die Größe eines Winkels messen wir in <strong>Grad</strong>;\n       ein Grad hat 60 Minuten: $1^\\circ = 60'$. Winkel bezeichnen wir mit griechischen Buchstaben $\\alpha, \\beta, \\gamma$ oder mit der Schreibweise $\\angle AVB$.</p>",
    {
     "fig": "r6-uhly-druhy",
     "caption": "Ein spitzer Winkel ist kleiner als 90°, ein rechter hat 90°, ein stumpfer liegt zwischen 90° und 180°, ein gestreckter hat 180°."
    },
    "<p><strong>Messen mit dem Winkelmesser:</strong> Den Mittelpunkt des Winkelmessers legen wir auf den Scheitelpunkt, die Null auf einen Schenkel und lesen auf der Skala ab, wo der zweite Schenkel verläuft.</p>",
    {
     "fig": "r6-uhlomer",
     "caption": "Winkelmesser, angelegt an einen Winkel von 50°."
    },
    "<p><strong>Nebenwinkel</strong> haben einen Schenkel gemeinsam, und die übrigen Schenkel bilden eine Gerade; ihre Summe ist $180^\\circ$.\n       <strong>Scheitelwinkel</strong> liegen sich beim Schnitt zweier Geraden gegenüber und sind gleich groß.\n       Beim Addieren von Winkeln addieren wir Grad und Minuten getrennt; 60 Minuten tauschen wir gegen 1 Grad.</p>"
   ],
   "examples": [
    {
     "task": "Der Winkel $\\alpha$ hat $48^\\circ$. Wie groß ist sein Nebenwinkel?",
     "steps": [
      "Nebenwinkel ergeben zusammen $180^\\circ$.",
      "$180^\\circ - 48^\\circ = 132^\\circ$.",
      "<strong>Der Nebenwinkel hat 132°.</strong>"
     ]
    },
    {
     "task": "Addiere $35^\\circ\\,40' + 27^\\circ\\,35'$.",
     "steps": [
      "Grad: $35 + 27 = 62$, Minuten: $40 + 35 = 75$.",
      "$75' = 1^\\circ\\,15'$, also zusammen $63^\\circ\\,15'$."
     ]
    }
   ]
  },
  "r6-trojuholniky": {
   "title": "Dreiecke und ihre Eigenschaften",
   "summary": "Winkelsumme im Dreieck, Dreiecksarten nach Seiten und Winkeln, Dreiecksungleichung.",
   "theory": [
    "<p>Ein <strong>Dreieck</strong> $ABC$ hat drei Ecken, drei Seiten $a = |BC|$, $b = |AC|$, $c = |AB|$ und drei Innenwinkel $\\alpha, \\beta, \\gamma$.\n       Die <strong>Summe der Innenwinkel</strong> jedes Dreiecks ist $\\alpha + \\beta + \\gamma = 180^\\circ$.</p>",
    {
     "fig": "r6-trojuholniky",
     "caption": "Oben die Einteilung nach Seiten (Striche markieren gleich lange Seiten), unten nach Winkeln."
    },
    "<p><strong>Nach Seiten:</strong> unregelmäßig (alle Seiten verschieden), gleichschenklig (zwei Seiten – die Schenkel – gleich lang, die Basiswinkel sind gleich groß),\n       gleichseitig (alle Seiten gleich lang, jeder Winkel hat $60^\\circ$).\n       <strong>Nach Winkeln:</strong> spitzwinklig (alle Winkel spitz), rechtwinklig (ein Winkel ist ein rechter), stumpfwinklig (ein Winkel ist stumpf).</p>",
    "<p><strong>Dreiecksungleichung:</strong> Die Summe der Längen zweier beliebiger Seiten ist immer größer als die Länge der dritten Seite.\n       Es genügt zu prüfen, dass die beiden kürzeren Seiten zusammen länger sind als die längste. Zum Beispiel lässt sich aus den Seiten 3 cm, 4 cm und 8 cm kein Dreieck konstruieren, weil $3 + 4 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "In einem Dreieck ist $\\alpha = 52^\\circ$ und $\\beta = 71^\\circ$. Berechne $\\gamma$.",
     "steps": [
      "$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$.",
      "<strong>$\\gamma = 57^\\circ$</strong>"
     ]
    },
    {
     "task": "Lässt sich ein Dreieck mit den Seiten 5 cm, 6 cm und 10 cm konstruieren?",
     "steps": [
      "Die beiden kürzeren Seiten: $5 + 6 = 11$.",
      "$11 &gt; 10$, die Ungleichung ist erfüllt.",
      "<strong>Ja, das geht.</strong>"
     ]
    }
   ]
  },
  "r6-obvod-obsah": {
   "title": "Umfang und Flächeninhalt von Quadrat und Rechteck",
   "summary": "Formeln für Umfang und Flächeninhalt, fehlende Seite berechnen, Flächeneinheiten und ihre Umrechnung.",
   "theory": [
    "<p>Der <strong>Umfang</strong> ist die Länge des Randes einer Figur, wir messen ihn in Längeneinheiten (mm, cm, m). Der <strong>Flächeninhalt</strong> gibt an, wie viele Quadrate\n       mit der Seitenlänge 1 Einheit in die Figur passen; wir messen ihn in Flächeneinheiten ($\\text{mm}^2$, $\\text{cm}^2$, $\\text{m}^2$).</p>",
    {
     "fig": "r6-obdlznik-siet",
     "caption": "In ein Rechteck 5 cm × 3 cm passen 3 Reihen zu je 5 Quadraten mit dem Flächeninhalt 1 cm², zusammen 15 cm²."
    },
    "<p><strong>Rechteck</strong> mit den Seiten $a$, $b$: $o = 2\\cdot(a + b)$, $S = a\\cdot b$.\n       <strong>Quadrat</strong> mit der Seite $a$: $o = 4\\cdot a$, $S = a\\cdot a = a^2$.\n       Kennen wir den Flächeninhalt und eine Seite eines Rechtecks, erhalten wir die andere durch Dividieren: $b = S : a$.</p>",
    "<p><strong>Flächeneinheiten:</strong> $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$, $1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$, $1\\,\\text{m}^2 = 100\\,\\text{dm}^2$.\n       Bei Flächeneinheiten ist die Umrechnungszahl 100, nicht 10, weil ein Quadrat mit der Seite 1 cm $10\\cdot 10$ Quadrate mit der Seite 1 mm enthält.</p>"
   ],
   "examples": [
    {
     "task": "Ein Garten hat die Form eines Rechtecks 14 m × 9 m. Wie viele Meter Maschendraht braucht man für den Zaun, und wie groß ist sein Flächeninhalt?",
     "steps": [
      "Umfang: $o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$.",
      "Flächeninhalt: $S = 14\\cdot 9 = 126\\,\\text{m}^2$.",
      "<strong>Man braucht 46 m Maschendraht, der Garten hat 126 m².</strong>"
     ]
    },
    {
     "task": "Ein Quadrat hat den Umfang 36 cm. Wie groß ist sein Flächeninhalt?",
     "steps": [
      "Seite: $a = 36 : 4 = 9\\,\\text{cm}$.",
      "$S = 9\\cdot 9 = 81\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r6-osova": {
   "title": "Achsenspiegelung",
   "summary": "Bild eines Punktes und einer Figur bei der Achsenspiegelung, achsensymmetrische Figuren und ihre Achsen.",
   "theory": [
    "<p>Die <strong>Achsenspiegelung</strong> an der Achse $o$ ordnet jedem Punkt $A$ sein <em>Bild</em> $A'$ so zu, dass die Strecke $AA'$ senkrecht zur Achse ist\n       und von der Achse halbiert wird. Der Punkt $A$ und sein Bild sind also gleich weit von der Achse entfernt, jeder auf einer anderen Seite. Punkte auf der Achse werden auf sich selbst abgebildet.</p>",
    {
     "fig": "r6-osova",
     "caption": "Die blaue Figur und ihr Bild (grün) bei der Spiegelung an der Achse o. Der Punkt A liegt 4 Kästchen links von der Achse, sein Bild A′ 4 Kästchen rechts."
    },
    "<p>Das Bild einer Figur konstruieren wir, indem wir ihre Ecken spiegeln und verbinden. Das Bild hat dieselbe Form und Größe wie das Original, es ist nur „umgeklappt“ wie im Spiegel.</p>",
    "<p>Eine Figur ist <strong>achsensymmetrisch</strong>, wenn es eine Gerade gibt, an der gespiegelt sie auf sich selbst abgebildet wird (faltet man das Papier entlang dieser Geraden, decken sich beide Hälften).\n       Eine solche Gerade nennen wir <em>Symmetrieachse</em>. Ein Quadrat hat 4 Achsen, ein Rechteck 2, ein gleichseitiges Dreieck 3, ein gleichschenkliges 1 und ein Kreis unendlich viele.</p>"
   ],
   "examples": [
    {
     "task": "Die Achse $o$ ist eine senkrechte Gerade in Spalte 6. Der Punkt $A$ liegt in Spalte 2. In welcher Spalte liegt sein Bild?",
     "steps": [
      "Der Punkt $A$ ist $6 - 2 = 4$ Spalten von der Achse entfernt.",
      "Das Bild liegt 4 Spalten auf der anderen Seite: $6 + 4 = 10$.",
      "<strong>Das Bild liegt in Spalte 10.</strong>"
     ]
    },
    {
     "task": "Wie viele Symmetrieachsen hat ein Rechteck, das kein Quadrat ist?",
     "steps": [
      "Eine Achse verläuft durch die Mittelpunkte zweier gegenüberliegender Seiten – davon gibt es zwei.",
      "Eine Diagonale ist keine Achse: Nach dem Falten decken sich die Hälften nicht.",
      "<strong>2 Achsen.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, preto delíme stom: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.": "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, deshalb dividieren wir durch hundert: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.",
  "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, preto ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.": "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, deshalb ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.",
  "$1^\\circ = 60'$, preto ${@0}^\\circ = {@1}'$ a spolu ${@2}' + {@3}' = {@4}'$.": "$1^\\circ = 60'$, deshalb ${@0}^\\circ = {@1}'$ und zusammen ${@2}' + {@3}' = {@4}'$.",
  "$S = a\\cdot b$, preto $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.": "$S = a\\cdot b$, deshalb $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.",
  "${@0} &gt; {@1}$, trojuholník sa zostrojiť dá.": "${@0} &gt; {@1}$, das Dreieck lässt sich konstruieren.",
  "${@0} &lt; {@1}$, trojuholník sa zostrojiť nedá.": "${@0} &lt; {@1}$, das Dreieck lässt sich nicht konstruieren.",
  "${@0} + {@1} = {@2}$ (posun o {@3} doprava).": "${@0} + {@1} = {@2}$ (Verschiebung um {@3} nach rechts).",
  "${@0} - {@1} = {@2}$ (posun o {@3} doľava).": "${@0} - {@1} = {@2}$ (Verschiebung um {@3} nach links).",
  "${@0} : 60 = {@1}$, zvyšok {@2}. Teda ${@3}' = {@4}$.": "${@0} : 60 = {@1}$, Rest {@2}. Also ${@3}' = {@4}$.",
  "${@0} = {@1}$ a ${@2} = {@3}$ nemajú spoločný prvočiniteľ, $D({@4}, {@5}) = 1$. Sú nesúdeliteľné.": "${@0} = {@1}$ und ${@2} = {@3}$ haben keinen gemeinsamen Primfaktor, $D({@4}, {@5}) = 1$. Sie sind teilerfremd.",
  "${@0} = {@1}$, ${@2} = {@3}$. NSD je súčin spoločných prvočiniteľov: $D({@4}, {@5}) = {@6}{@7}$.": "${@0} = {@1}$, ${@2} = {@3}$. Der ggT ist das Produkt der gemeinsamen Primfaktoren: $D({@4}, {@5}) = {@6}{@7}$.",
  "${@0} = {@1}\\cdot {@2}$, teda okrem 1 a {@3} má aj deliteľ {@4}. Je to zložené číslo.": "${@0} = {@1}\\cdot {@2}$, also hat sie außer 1 und {@3} auch den Teiler {@4}. Sie ist eine zusammengesetzte Zahl.",
  "${@0} {@1} {@2} = {@3}$. Večer bolo {@4} °C.": "${@0} {@1} {@2} = {@3}$. Am Abend waren es {@4} °C.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda súčet je ${@4} + {@5} = {@6}$.": "$|{@0}| = {@1}$ und $|{@2}| = {@3}$, also ist die Summe ${@4} + {@5} = {@6}$.",
  "4 dieliky": "4 Teilstriche",
  "Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.": "Der Betrag ist der Abstand von null, deshalb ist er nie negativ.",
  "Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.": "Der Betrag ist nie negativ. Bestimme zuerst den Abstand jeder Zahl von null, erst dann addiere.",
  "Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.": "Wenn es 60 Minuten oder mehr sind, tausche 60 Minuten gegen 1 Grad.",
  "Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.": "Wenn die Summe der zwei kürzeren Seiten gleich der längsten Seite ist, lägen die Seiten auf einer Geraden und es entsteht kein Dreieck.",
  "Aká dlhá je strana štvorca (v cm)?": "Wie lang ist die Seite des Quadrats (in cm)?",
  "Aké je číslo opačné k číslu {@0}?": "Was ist die Gegenzahl von {@0}?",
  "Aké je číslo {@0}?": "Was für eine Zahl ist {@0}?",
  "Aký bude čitateľ rozšíreného zlomku?": "Wie lautet der Zähler des erweiterten Bruchs?",
  "Aký je najmenší spoločný násobok čísel {@0} a {@1}?": "Was ist das kleinste gemeinsame Vielfache von {@0} und {@1}?",
  "Aký je najväčší spoločný deliteľ čísel {@0} a {@1}?": "Was ist der größte gemeinsame Teiler von {@0} und {@1}?",
  "Aký je obsah štvorca (v cm²)?": "Wie groß ist der Flächeninhalt des Quadrats (in cm²)?",
  "Aký je obvod (v {@0})?": "Wie groß ist der Umfang (in {@0})?",
  "Aký je obvod štvorca (v cm)?": "Wie groß ist der Umfang des Quadrats (in cm)?",
  "Aký je súčet dvoch susedných strán?": "Wie groß ist die Summe zweier benachbarter Seiten?",
  "Aký je súčet známych číslic?": "Wie groß ist die Summe der bekannten Ziffern?",
  "Aký je uhol s veľkosťou ${@0}^\\circ$?": "Was für ein Winkel ist ein Winkel der Größe ${@0}^\\circ$?",
  "Aký veľký je jeden uhol pri základni?": "Wie groß ist ein Basiswinkel?",
  "Akým číslom treba rozšíriť zlomok $\\frac{{@0}}{{@1}}$, aby bol v menovateli {@2}?": "Mit welcher Zahl muss man den Bruch $\\frac{{@0}}{{@1}}$ erweitern, damit im Nenner {@2} steht?",
  "Bod $A$ je od osi vzdialený $|{@0} - {@1}| = {@2}$ {@3}. Obraz je rovnako ďaleko na druhej strane osi: ${@4} {@5} {@6} = {@7}$.": "Der Punkt $A$ ist von der Achse $|{@0} - {@1}| = {@2}$ {@3} entfernt. Das Bild ist genauso weit auf der anderen Seite der Achse: ${@4} {@5} {@6} = {@7}$.",
  "Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.": "Ganzen und Dezimalteil kannst du nicht getrennt multiplizieren – die Zehntel gehen in die Ganzen über. Multipliziere die Zahlen ohne Komma und setze dann das Komma.",
  "Ciferný súčet je {@0}, je deliteľný 3.": "Die Quersumme ist {@0}, sie ist durch 3 teilbar.",
  "Ciferný súčet je {@0}, je deliteľný 9.": "Die Quersumme ist {@0}, sie ist durch 9 teilbar.",
  "Ciferný súčet je {@0}, nie je deliteľný 3.": "Die Quersumme ist {@0}, sie ist nicht durch 3 teilbar.",
  "Ciferný súčet je {@0}, nie je deliteľný 9.": "Die Quersumme ist {@0}, sie ist nicht durch 9 teilbar.",
  "Delitele čísla {@0} sú {@1}. Je ich {@2}.": "Die Teiler der Zahl {@0} sind {@1}. Es sind {@2}.",
  "Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.": "Den Teiler 1 haben alle Zahlen. Nicht teilerfremd sind Zahlen, die einen gemeinsamen Teiler größer als 1 haben.",
  "Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: ${@0} : {@1} = {@2}$. Skúška: ${@3}\\cdot {@4} = {@5}$.": "Wir dividieren wie bei ganzen Zahlen und setzen das Komma im Ergebnis, sobald wir es im Dividenden überschreiten: ${@0} : {@1} = {@2}$. Probe: ${@3}\\cdot {@4} = {@5}$.",
  "Delíme postupne prvočíslami: ${@0}$. Teda ${@1} = {@2}{@3}$.": "Wir dividieren nacheinander durch Primzahlen: ${@0}$. Also ${@1} = {@2}{@3}$.",
  "Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.": "Die Dezimalkommas müssen untereinander stehen. Fehlende Stellen ergänze mit Nullen.",
  "Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.": "Dividiere nacheinander von der höchsten Stelle an. Wenn du das Komma des Dividenden überschreitest, setze das Komma auch im Ergebnis.",
  "Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.": "Dividiere die Zahl durch die kleinste Primzahl, durch die es geht (2, 3, 5, 7, …), und mach mit dem Ergebnis weiter, bis du 1 erhältst.",
  "Doplň správny znak: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$": "Setze das richtige Zeichen ein: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$",
  "Dopočítaj tretí uhol a pozri sa na najväčší z nich.": "Berechne den dritten Winkel und schau auf den größten von ihnen.",
  "Druhy trojuholníkov podľa strán a podľa uhlov": "Arten von Dreiecken nach Seiten und nach Winkeln",
  "Dve kratšie strany: ${@0} + {@1} = {@2}$, najdlhšia je {@3}.": "Die zwei kürzeren Seiten: ${@0} + {@1} = {@2}$, die längste ist {@3}.",
  "Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.": "Zwei Seiten sind gleich lang, das Dreieck ist gleichschenklig.",
  "Dve stuhy merajú {@0} cm a {@1} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?": "Zwei Bänder sind {@0} cm und {@1} cm lang. Wir wollen sie ohne Rest in gleich lange Stücke schneiden, die möglichst lang sind (in ganzen Zentimetern). Wie viele Zentimeter wird ein Stück lang sein?",
  "Dá sa zostrojiť trojuholník so stranami {@0} cm, {@1} cm a {@2} cm?": "Lässt sich ein Dreieck mit den Seiten {@0} cm, {@1} cm und {@2} cm konstruieren?",
  "Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?": "Die Länge eines Stücks muss ein Teiler beider Längen sein. Welcher gemeinsame Teiler ist der größte?",
  "Dĺžka kúska musí deliť {@0} aj {@1} a má byť čo najväčšia, hľadáme $D({@2}, {@3})$.": "Die Länge eines Stücks muss {@0} und {@1} teilen und möglichst groß sein, wir suchen $D({@2}, {@3})$.",
  "Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …": "Suche Zahlenpaare, deren Produkt die gegebene Zahl ist: 1 und die Zahl selbst, dann 2 und …",
  "Hľadáme najmenší spoločný násobok: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Linky odídu znova naraz o {@8} minút, teda o {@9}:{@10}.": "Wir suchen das kleinste gemeinsame Vielfache: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Die Linien fahren nach {@8} Minuten wieder gleichzeitig ab, also um {@9}:{@10}.",
  "Hľadáme číslo, ktoré vynásobené samo sebou dá {@0}: $a = {@1}\\,\\text{cm}$. Obvod: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.": "Wir suchen die Zahl, die mit sich selbst multipliziert {@0} ergibt: $a = {@1}\\,\\text{cm}$. Umfang: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.",
  "Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.": "Nur ein gleichseitiges Dreieck hat 3 Achsen. Ein gleichschenkliges hat nur zwei gleiche Seiten.",
  "Je menší ako 90°, preto je ostrý.": "Er ist kleiner als 90°, deshalb ist er spitz.",
  "Je párne a ciferný súčet {@0} je deliteľný 3.": "Sie ist gerade und die Quersumme {@0} ist durch 3 teilbar.",
  "Je párne a ciferný súčet {@0} nie je deliteľný 3.": "Sie ist gerade und die Quersumme {@0} ist nicht durch 3 teilbar.",
  "Je veľké tlačené písmeno <strong style=\"font-size:1.6em\">{@0}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?": "Ist der Großbuchstabe <strong style=\"font-size:1.6em\">{@0}</strong> (in einfacher Form ohne Serifen) achsensymmetrisch?",
  "Je väčší ako 90° a menší ako 180°, preto je tupý.": "Er ist größer als 90° und kleiner als 180°, deshalb ist er stumpf.",
  "Je číslo {@0} deliteľné číslom {@1}?": "Ist die Zahl {@0} durch {@1} teilbar?",
  "Jeden kúsok bude merať {@0} cm.": "Ein Stück wird {@0} cm lang sein.",
  "Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.": "Ein Grad hat 60 Minuten, nicht 100 – dividiere die Anzahl der Minuten durch sechzig.",
  "Jeden stupeň má 60 minút, nie 100.": "Ein Grad hat 60 Minuten, nicht 100.",
  "Jeden stupeň má 60 minút.": "Ein Grad hat 60 Minuten.",
  "Kontrola: NSD · nsn = {@0} · {@1}.": "Kontrolle: ggT · kgV = {@0} · {@1}.",
  "Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.": "Ein Parallelogramm hat keine Symmetrieachse. Beim Falten entlang einer beliebigen Geraden deckt es sich nicht mit sich selbst.",
  "Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.": "Eine Raute hat 2 Symmetrieachsen: ihre beiden Diagonalen.",
  "Koľko celých stupňov je v ${@0}'$?": "Wie viele ganze Grad sind in ${@0}'$?",
  "Koľko deliteľov má číslo {@0}?": "Wie viele Teiler hat die Zahl {@0}?",
  "Koľko desatinných miest majú činitele ${@0}$ a ${@1}$ spolu?": "Wie viele Dezimalstellen haben die Faktoren ${@0}$ und ${@1}$ zusammen?",
  "Koľko je $\\frac{1}{{@0}}$ z čísla {@1}?": "Wie viel ist $\\frac{1}{{@0}}$ von {@1}?",
  "Koľko je $\\frac{{@0}}{{@1}}$ z čísla {@2}?": "Wie viel ist $\\frac{{@0}}{{@1}}$ von {@2}?",
  "Koľko je polovica obvodu, teda $a + b$ (v cm)?": "Wie viel ist der halbe Umfang, also $a + b$ (in cm)?",
  "Koľko minút je ${@0}$?": "Wie viele Minuten sind ${@0}$?",
  "Koľko minút je ${@0}^\\circ$?": "Wie viele Minuten sind ${@0}^\\circ$?",
  "Koľko minút zostane?": "Wie viele Minuten bleiben übrig?",
  "Koľko osí súmernosti má {@0}?": "Wie viele Symmetrieachsen hat diese Figur: {@0}?",
  "Koľko riadkov je bod A vzdialený od osi?": "Wie viele Zeilen ist der Punkt A von der Achse entfernt?",
  "Koľko stupňov majú spolu oba uhly pri základni?": "Wie viele Grad haben beide Basiswinkel zusammen?",
  "Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?": "Wie viele Grad haben die Winkel $\\alpha$ und $\\beta$ zusammen?",
  "Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?": "Wie viele Grad bleiben nach dem Subtrahieren (vergiss das geborgte Grad nicht)?",
  "Koľko stupňov zostáva do súčtu uhlov v trojuholníku?": "Wie viele Grad fehlen bis zur Winkelsumme im Dreieck?",
  "Koľko stĺpcov je bod A vzdialený od osi?": "Wie viele Spalten ist der Punkt A von der Achse entfernt?",
  "Koľkokrát sa 60 zmestí do počtu minút?": "Wie oft passt 60 in die Anzahl der Minuten?",
  "Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.": "Ein Kreis hat unendlich viele Symmetrieachsen: jede Gerade, die durch seinen Mittelpunkt geht.",
  "Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy": "Kreise in Teile geteilt: eine Hälfte, drei Viertel, drei Achtel",
  "Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.": "Du hast richtig gekürzt, aber der Bruch ist noch nicht vollständig gekürzt – Zähler und Nenner lassen sich noch gemeinsam teilen.",
  "Ktorá číslica stojí v čísle ${@0}$ hneď za miestom {@1}?": "Welche Ziffer steht in der Zahl ${@0}$ direkt nach der Stelle der {@1}?",
  "Ktoré číslo krát samo sebou dá obsah? To je strana.": "Welche Zahl mal sich selbst ergibt den Flächeninhalt? Das ist die Seite.",
  "Ktoré číslo vynásobené samo sebou dá {@0}?": "Welche Zahl mit sich selbst multipliziert ergibt {@0}?",
  "Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo ${@0}$ bolo deliteľné {@1}?": "Welche kleinste Ziffer muss man statt $\\square$ schreiben, damit die Zahl ${@0}$ durch {@1} teilbar ist?",
  "Ktorú najmenšiu číslicu treba pripočítať k {@0}, aby bol súčet deliteľný {@1}?": "Welche kleinste Ziffer muss man zu {@0} addieren, damit die Summe durch {@1} teilbar ist?",
  "Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.": "Stücke dieser Länge ließen sich zwar ohne Rest schneiden, aber sie sind nicht die längstmöglichen.",
  "Medzi susednými plošnými jednotkami je prevodový vzťah 100.": "Zwischen benachbarten Flächeneinheiten ist die Umrechnungszahl 100.",
  "Meranie uhla uhlomerom: uhol 50 stupňov": "Messen eines Winkels mit dem Geodreieck: Winkel von 50 Grad",
  "Minút je málo, preto zameníme 1 stupeň: ${@0} = {@1}$. Potom ${@2} - {@3} = {@4}$ a ${@5} - {@6} = {@7}$, výsledok je ${@8}$.": "Es sind zu wenige Minuten, deshalb tauschen wir 1 Grad um: ${@0} = {@1}$. Dann ${@2} - {@3} = {@4}$ und ${@5} - {@6} = {@7}$, das Ergebnis ist ${@8}$.",
  "Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?": "Es sind zu wenige Minuten, tausche 1 Grad gegen 60 Minuten. Wie viele Minuten hat der erste Winkel dann?",
  "Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.": "Es dürfen nicht 60 oder mehr Minuten sein. Tausche 60 Minuten gegen 1 Grad.",
  "Má 180°, ramená tvoria priamku, je priamy.": "Er hat 180°, die Schenkel bilden eine Gerade, er ist gestreckt.",
  "Má presne 90°, je pravý.": "Er hat genau 90°, er ist ein rechter Winkel.",
  "NSD; nsn": "ggT; kgV",
  "Na deliteľnosť 6 treba oboje.": "Für die Teilbarkeit durch 6 braucht man beides.",
  "Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.": "Auf dem Zahlenstrahl ist die größere Zahl rechts. Jede negative Zahl ist kleiner als null und als jede positive Zahl.",
  "Na číselnej osi leží číslo {@0} viac vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "Auf dem Zahlenstrahl liegt die Zahl {@0} weiter rechts, sie ist größer. Deshalb ${@1} {@2} {@3}$.",
  "Najnižšia nočná teplota bola {@0} °C, najvyššia denná {@1} °C. O koľko stupňov bolo cez deň teplejšie?": "Die niedrigste Nachttemperatur war {@0} °C, die höchste Tagestemperatur {@1} °C. Um wie viel Grad war es am Tag wärmer?",
  "Najprv jedna časť: ${@0} : {@1} = {@2}$. Potom {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.": "Zuerst ein Teil: ${@0} : {@1} = {@2}$. Dann {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.",
  "Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).": "Berechne zuerst aus dem Umfang die Seite (ein Quadrat hat 4 gleiche Seiten).",
  "Najväčší spoločný deliteľ čísel {@0} a {@1} je {@2}. Krátime ním: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.": "Der größte gemeinsame Teiler von {@0} und {@1} ist {@2}. Wir kürzen damit: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.",
  "Nezabudni, že deliteľom je vždy aj 1 a samotné číslo {@0}.": "Vergiss nicht, dass auch 1 und die Zahl {@0} selbst immer Teiler sind.",
  "Nie je párne a ciferný súčet {@0} je deliteľný 3.": "Sie ist nicht gerade und die Quersumme {@0} ist durch 3 teilbar.",
  "Nie je párne a ciferný súčet {@0} nie je deliteľný 3.": "Sie ist nicht gerade und die Quersumme {@0} ist nicht durch 3 teilbar.",
  "Nie. Písmeno {@0} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.": "Nein. Der Buchstabe {@0} hat weder eine senkrechte noch eine waagerechte Symmetrieachse, nach dem Falten decken sich die Hälften nicht.",
  "Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.": "Finde die größte Zahl, durch die sich Zähler und Nenner teilen lassen.",
  "Násobíme bez čiarok: ${@0}\\cdot {@1} = {@2}$. Činitele majú spolu {@3} {@4}, preto ${@5}\\cdot {@6} = {@7}$.": "Wir multiplizieren ohne Kommas: ${@0}\\cdot {@1} = {@2}$. Die Faktoren haben zusammen {@3} {@4}, deshalb ${@5}\\cdot {@6} = {@7}$.",
  "O koľko stupňov bolo cez deň teplejšie?": "Um wie viel Grad war es am Tag wärmer?",
  "O koľko stupňov stúpne teplota z 0 °C na {@0} °C?": "Um wie viel Grad steigt die Temperatur von 0 °C auf {@0} °C?",
  "O koľko stupňov stúpne teplota z {@0} °C na 0 °C?": "Um wie viel Grad steigt die Temperatur von {@0} °C auf 0 °C?",
  "Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.": "Ein Rechteck (das kein Quadrat ist) hat 2 Symmetrieachsen, die die Mittelpunkte gegenüberliegender Seiten verbinden. Die Diagonalen sind keine Achsen.",
  "Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²": "Rechteck 5 cm mal 3 cm, aufgeteilt in Quadrate von 1 cm²",
  "Obdĺžnik má obsah ${@0}\\,\\text{cm}^2$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Ein Rechteck hat den Flächeninhalt ${@0}\\,\\text{cm}^2$ und eine Seite ${@1}\\,\\text{cm}$. Wie lang ist die andere Seite (in cm)?",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².": "Ein Rechteck hat die Seiten $a = {@0}\\,\\text{cm}$ und $b = {@1}\\,\\text{cm}$. Berechne seinen Flächeninhalt in cm².",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.": "Ein Rechteck hat die Seiten $a = {@0}\\,\\text{cm}$ und $b = {@1}\\,\\text{cm}$. Berechne seinen Umfang in cm.",
  "Obe čísla sú deliteľné {@0}, teda $D({@1}, {@2}) = {@3} &gt; 1$. Sú súdeliteľné.": "Beide Zahlen sind durch {@0} teilbar, also $D({@1}, {@2}) = {@3} &gt; 1$. Sie sind nicht teilerfremd.",
  "Obsah je súčin strán, druhú stranu teda dostaneš delením.": "Der Flächeninhalt ist das Produkt der Seiten, die andere Seite erhältst du also durch Dividieren.",
  "Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.": "Der Flächeninhalt ist das Produkt der Seiten, deshalb erhältst du die andere Seite durch Dividieren, nicht durch Subtrahieren.",
  "Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.": "Den Flächeninhalt teilst du nicht durch vier wie den Umfang. Die Seite ist die Zahl, die mit sich selbst multipliziert den Flächeninhalt ergibt.",
  "Obsah obdĺžnika: S = a · b.": "Flächeninhalt des Rechtecks: S = a · b.",
  "Obsah štvorca je strana krát strana.": "Der Flächeninhalt des Quadrats ist Seite mal Seite.",
  "Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.": "Der Umfang ist nicht die Seite des Quadrats. Teile ihn zuerst durch vier – so erhältst du die Seite.",
  "Obvod obdĺžnika: o = 2 · (a + b).": "Umfang des Rechtecks: o = 2 · (a + b).",
  "Ochladenie znamená odčítať.": "Abkühlen bedeutet subtrahieren.",
  "Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.": "Du hast vom Umfang beide Seiten der Länge a abgezogen. Übrig sind zwei Seiten b – teile das Ergebnis noch durch zwei.",
  "Od teploty {@0} °C odčítavaš zápornú teplotu {@1} °C. Odčítať záporné číslo znamená pripočítať opačné.": "Von der Temperatur {@0} °C ziehst du die negative Temperatur {@1} °C ab. Eine negative Zahl subtrahieren bedeutet, die Gegenzahl zu addieren.",
  "Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.": "Ziehe von der höheren Temperatur die niedrigere ab. Eine negative Zahl subtrahieren bedeutet, die Gegenzahl zu addieren.",
  "Odčítaj minúty.": "Subtrahiere die Minuten.",
  "Odčítaj stupne.": "Subtrahiere die Grad.",
  "Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.": "Du subtrahierst eine positive Zahl – auf dem Zahlenstrahl gehst du nach links.",
  "Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.": "Eine negative Zahl subtrahieren bedeutet, die Gegenzahl zu addieren: Minus und Minus ergibt Plus.",
  "Odčítať záporné číslo znamená pripočítať opačné: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.": "Eine negative Zahl subtrahieren bedeutet, die Gegenzahl zu addieren: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.",
  "Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.": "Eine Zahl subtrahieren ist dasselbe, wie ihre Gegenzahl zu addieren. Hilf dir mit dem Zahlenstrahl.",
  "Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.": "Außer den Geraden durch die Mittelpunkte gegenüberliegender Seiten sind auch die Diagonalen Symmetrieachsen des Quadrats.",
  "Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k {@0} je to {@1}.": "Die Gegenzahl liegt auf dem Zahlenstrahl genauso weit von null entfernt, aber auf der anderen Seite: Zu {@0} ist es {@1}.",
  "Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.": "Die Gegenzahl hat denselben Abstand von null, aber das entgegengesetzte Vorzeichen.",
  "Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku {@0}. Bod $A$ leží v riadku {@1}. V ktorom riadku leží jeho obraz $A'$?": "Die Symmetrieachse $o$ (gestrichelte Linie) ist eine waagerechte Gerade in Zeile {@0}. Der Punkt $A$ liegt in Zeile {@1}. In welcher Zeile liegt sein Bildpunkt $A'$?",
  "Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci {@0}. Bod $A$ leží v stĺpci {@1}. V ktorom stĺpci leží jeho obraz $A'$?": "Die Symmetrieachse $o$ (gestrichelte Linie) ist eine senkrechte Gerade in Spalte {@0}. Der Punkt $A$ liegt in Spalte {@1}. In welcher Spalte liegt sein Bildpunkt $A'$?",
  "Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.": "Eine Symmetrieachse geht durch jede Ecke des gleichseitigen Dreiecks, nicht nur durch eine.",
  "Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.": "Ein spitzwinkliges Dreieck hat alle drei Winkel kleiner als 90°. Vergiss nicht, auch den dritten Winkel auszurechnen.",
  "Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.": "Ein spitzer Winkel ist kleiner als ein rechter Winkel, also kleiner als 90°.",
  "Ostrý, pravý, tupý a priamy uhol": "Spitzer, rechter, stumpfer und gestreckter Winkel",
  "Oteplenie znamená pripočítať.": "Erwärmen bedeutet addieren.",
  "Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.": "Prüfe die Dreiecksungleichung: Die Summe der zwei kürzeren Seiten muss größer sein als die längste Seite.",
  "Polovica obvodu je $a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}\\,\\text{cm}$.": "Der halbe Umfang ist $a + b = {@0} : 2 = {@1}$, deshalb $b = {@2} - {@3} = {@4}\\,\\text{cm}$.",
  "Polovica obvodu je súčet dvoch susedných strán.": "Der halbe Umfang ist die Summe zweier benachbarter Seiten.",
  "Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).": "Vergleiche den Winkel mit einem rechten Winkel (90°, Ecke eines Heftes) und mit einem gestreckten Winkel (180°).",
  "Posledná číslica je {@0}, je to 0 alebo 5.": "Die letzte Ziffer ist {@0}, sie ist 0 oder 5.",
  "Posledná číslica je {@0}, je to 0.": "Die letzte Ziffer ist {@0}, sie ist 0.",
  "Posledná číslica je {@0}, nie je to 0 ani 5.": "Die letzte Ziffer ist {@0}, sie ist weder 0 noch 5.",
  "Posledná číslica je {@0}, nie je to 0.": "Die letzte Ziffer ist {@0}, sie ist nicht 0.",
  "Posunul si čiarku opačným smerom. Pri delení číslom {@0} sa číslo zmenší.": "Du hast das Komma in die falsche Richtung verschoben. Beim Dividieren durch {@0} wird die Zahl kleiner.",
  "Posunul si čiarku opačným smerom. Pri násobení číslom {@0} sa číslo zväčší.": "Du hast das Komma in die falsche Richtung verschoben. Beim Multiplizieren mit {@0} wird die Zahl größer.",
  "Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).": "Verwende die Teilbarkeitsregel für die gegebene Zahl (letzte Ziffer, Quersumme oder die letzten zwei Ziffern).",
  "Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Schau auf die erste Ziffer nach der Stelle, auf die du rundest: 0 – 4 abrunden, 5 – 9 aufrunden.",
  "Pozri sa pozorne – obe čísla sú rovnaké.": "Schau genau hin – beide Zahlen sind gleich.",
  "Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.": "Schau, ob nicht alle drei Seiten gleich lang sind – ein solches Dreieck hat einen genaueren Namen.",
  "Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.": "Die Anzahl der Nullen in 10, 100 oder 1 000 gibt an, um wie viele Stellen sich das Dezimalkomma verschiebt.",
  "Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.": "Rechne Grad und Minuten getrennt. 60 Minuten sind 1 Grad.",
  "Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.": "Du hast dir 1 Grad für die Minuten geborgt, aber die Anzahl der Grad nicht um eins verringert.",
  "Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.": "Ein rechtwinkliges Dreieck hat einen Winkel von genau 90°. Berechne den dritten Winkel und prüfe es.",
  "Pravý uhol má presne 90° – ako roh zošita.": "Ein rechter Winkel hat genau 90° – wie die Ecke eines Heftes.",
  "Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.": "Stell dir einen Spiegel vor, der senkrecht oder waagerecht durch die Mitte des Buchstabens gestellt ist.",
  "Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?": "Stell dir vor, du faltest die Figur entlang einer Geraden. Auf wie viele Arten decken sich beide Hälften genau?",
  "Premeň: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$": "Rechne um: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$",
  "Preto nie, číslo {@0} nie je deliteľné {@1}.": "Deshalb nein, die Zahl {@0} ist nicht durch {@1} teilbar.",
  "Preto áno, číslo {@0} je deliteľné {@1}.": "Deshalb ja, die Zahl {@0} ist durch {@1} teilbar.",
  "Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.": "Bringe beide Brüche auf einen gemeinsamen Nenner und vergleiche die Zähler.",
  "Pri delení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doľava: {@3}.": "Beim Dividieren durch {@0} verschieben wir das Dezimalkomma um {@1} {@2} nach links: {@3}.",
  "Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.": "Bei der Teilbarkeit durch 10 entscheidet die letzte Ziffer – sie muss 0 sein.",
  "Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.": "Bei der Teilbarkeit durch 2 entscheidet nur die letzte Ziffer – sie muss gerade sein.",
  "Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.": "Bei der Teilbarkeit durch 3 entscheidet nicht die letzte Ziffer, sondern die Quersumme. Addiere alle Ziffern.",
  "Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.": "Bei der Teilbarkeit durch 4 reicht es nicht, dass die Zahl gerade ist. Entscheidend ist die Zahl aus den letzten zwei Ziffern.",
  "Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.": "Bei der Teilbarkeit durch 5 entscheidet die letzte Ziffer – sie muss 0 oder 5 sein.",
  "Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.": "Bei der Teilbarkeit durch 9 entscheidet die Quersumme – sie muss durch 9 teilbar sein, Teilbarkeit durch 3 reicht nicht.",
  "Pri násobení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doprava: {@3}.": "Beim Multiplizieren mit {@0} verschieben wir das Dezimalkomma um {@1} {@2} nach rechts: {@3}.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.": "Bei Flächeneinheiten ist die Umrechnungszahl nicht 10, sondern $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.": "Bei Flächeneinheiten ist die Umrechnungszahl nicht 10, sondern $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.",
  "Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.": "Beim Borgen tauschst du 1 Grad gegen 60 Minuten, nicht gegen 100.",
  "Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.": "Bei negativen Zahlen ist diejenige größer, die näher an null liegt. Es entscheidet nicht, welche die größere Ziffer hat.",
  "Priamy uhol má 180°, jeho ramená ležia na jednej priamke.": "Ein gestreckter Winkel hat 180°, seine Schenkel liegen auf einer Geraden.",
  "Pripočítaj ešte ${@0}'$.": "Addiere noch ${@0}'$.",
  "Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.": "Du addierst eine positive Zahl – auf dem Zahlenstrahl gehst du nach rechts.",
  "Pripočítať záporné číslo znamená odčítať: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.": "Eine negative Zahl addieren bedeutet subtrahieren: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.",
  "Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.": "Eine negative Zahl addieren bedeutet, auf dem Zahlenstrahl nach links zu gehen, also zu subtrahieren.",
  "Prvočíslo má iba dva delitele. Skús, či sa {@0} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.": "Eine Primzahl hat nur zwei Teiler. Probiere, ob sich {@0} ohne Rest durch eine der Zahlen 2, 3, 5, 7 teilen lässt.",
  "Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?": "Eine Primzahl hat genau zwei Teiler und eine zusammengesetzte Zahl mehr als zwei. Wie viele Teiler hat die Zahl 1?",
  "Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.": "Ein gleichschenkliges Dreieck (nicht gleichseitig) hat 1 Symmetrieachse: Sie geht durch die Spitze und den Mittelpunkt der Basis.",
  "Rovnoramenný trojuholník má dve strany rovnako dlhé.": "Ein gleichschenkliges Dreieck hat zwei gleich lange Seiten.",
  "Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.": "Ein gleichseitiges Dreieck hat 3 Symmetrieachsen, jede geht durch eine Ecke und den Mittelpunkt der gegenüberliegenden Seite.",
  "Rovnostranný trojuholník má všetky tri strany rovnako dlhé.": "Ein gleichseitiges Dreieck hat alle drei Seiten gleich lang.",
  "Rozdiel teplôt: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Cez deň bolo o {@5} °C teplejšie.": "Temperaturunterschied: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Am Tag war es um {@5} °C wärmer.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je 5 alebo viac, zaokrúhlime nahor: ${@1} \\doteq {@2}$.": "Es entscheidet die Ziffer direkt nach dieser Stelle, sie ist {@0}. Sie ist 5 oder mehr, wir runden auf: ${@1} \\doteq {@2}$.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je menšia ako 5, zaokrúhlime nadol: ${@1} \\doteq {@2}$.": "Es entscheidet die Ziffer direkt nach dieser Stelle, sie ist {@0}. Sie ist kleiner als 5, wir runden ab: ${@1} \\doteq {@2}$.",
  "Rozklad nie je dokončený: {@0} nie je prvočíslo. Pokračuj v delení prvočíslami.": "Die Zerlegung ist nicht fertig: {@0} ist keine Primzahl. Dividiere weiter durch Primzahlen.",
  "Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).": "Zerlege beide Zahlen in Primfaktoren. Den ggT bilden die gemeinsamen Primfaktoren, das kgV alle (mit der größten Anzahl an Vorkommen).",
  "Rozlož čísla {@0} a {@1} na prvočinitele. Aký je ich najväčší spoločný deliteľ?": "Zerlege die Zahlen {@0} und {@1} in Primfaktoren. Was ist ihr größter gemeinsamer Teiler?",
  "Rozlož číslo {@0} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).": "Zerlege die Zahl {@0} in ein Produkt von Primzahlen. Schreibe die Primfaktoren vom kleinsten an, getrennt durch Semikolons (auch die sich wiederholenden).",
  "Rozšírime na menovateľ {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Alebo vydelíme ${@6} : {@7}$.)": "Wir erweitern auf den Nenner {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Oder wir dividieren ${@6} : {@7}$.)",
  "Ráno bolo {@0} °C. Do večera sa ochladilo o {@1} °C. Aká teplota bola večer (v °C)?": "Am Morgen waren es {@0} °C. Bis zum Abend kühlte es um {@1} °C ab. Welche Temperatur war am Abend (in °C)?",
  "Ráno bolo {@0} °C. Do večera sa oteplilo o {@1} °C. Aká teplota bola večer (v °C)?": "Am Morgen waren es {@0} °C. Bis zum Abend wurde es um {@1} °C wärmer. Welche Temperatur war am Abend (in °C)?",
  "Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.": "Ein unregelmäßiges Dreieck hat alle drei Seiten verschieden lang. Vergleiche die Längen noch einmal.",
  "Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.": "Ein unregelmäßiges Dreieck hat keine Symmetrieachse, keine zwei Seiten sind gleich lang.",
  "S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.": "Mit dieser Ziffer wird die Zahl zwar teilbar, aber du suchst die kleinste solche Ziffer.",
  "Skráť zlomok $\\frac{{@0}}{{@1}}$ na základný tvar. Odpoveď zapíš ako a/b.": "Kürze den Bruch $\\frac{{@0}}{{@1}}$ vollständig. Schreibe die Antwort als a/b.",
  "Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.": "Versuche, einen gemeinsamen Teiler größer als 1 zu finden – schau zum Beispiel, ob beide Zahlen durch 2, 3, 5 oder 7 teilbar sind.",
  "Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.": "Probiere, ob sich die Zahl ohne Rest durch 2, 3, 5 oder 7 teilen lässt.",
  "Spoločný menovateľ je {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ a $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Keďže ${@9} {@10} {@11}$, platí $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.": "Der gemeinsame Nenner ist {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ und $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Da ${@9} {@10} {@11}$, gilt $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.",
  "Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Zähle, wie viele Zeilen der Punkt A von der Achse entfernt ist, und zähle dieselbe Anzahl auf der anderen Seite ab.",
  "Spočítaj, koľko strán má rovnakú dĺžku.": "Zähle, wie viele Seiten gleich lang sind.",
  "Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Zähle, wie viele Spalten der Punkt A von der Achse entfernt ist, und zähle dieselbe Anzahl auf der anderen Seite ab.",
  "Strana: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Obsah: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.": "Seite: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Flächeninhalt: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.",
  "Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.": "Du hast die Seite mit zwei multipliziert. Der Flächeninhalt des Quadrats ist Seite mal Seite, nicht Seite mal 2.",
  "Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Du hast die Seiten addiert. Der Flächeninhalt des Rechtecks ist das Produkt seiner Seitenlängen.",
  "Stromy rozkladu čísel 60 a 84 na prvočinitele": "Bäume der Primfaktorzerlegung der Zahlen 60 und 84",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Keďže ${@6}' = 1^\\circ\\,{@7}'$, výsledok je ${@8}$.": "Grad: ${@0} + {@1} = {@2}$, Minuten: ${@3} + {@4} = {@5}$. Da ${@6}' = 1^\\circ\\,{@7}'$, ist das Ergebnis ${@8}$.",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Výsledok je ${@6}$.": "Grad: ${@0} + {@1} = {@2}$, Minuten: ${@3} + {@4} = {@5}$. Das Ergebnis ist ${@6}$.",
  "Stupne: ${@0} - {@1} = {@2}$, minúty: ${@3} - {@4} = {@5}$. Výsledok je ${@6}$.": "Grad: ${@0} - {@1} = {@2}$, Minuten: ${@3} - {@4} = {@5}$. Das Ergebnis ist ${@6}$.",
  "Sú čísla {@0} a {@1} súdeliteľné, alebo nesúdeliteľné?": "Sind die Zahlen {@0} und {@1} teilerfremd oder nicht teilerfremd?",
  "Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.": "Die Summe ist gleich der längsten Seite, die Seiten lägen auf einer Geraden. Das Dreieck lässt sich nicht konstruieren.",
  "Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.": "Die Winkelsumme ist $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.",
  "Súčet uhlov v trojuholníku je 180°, nie 360°.": "Die Winkelsumme im Dreieck ist 180°, nicht 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.": "Die Summe der Innenwinkel eines Dreiecks ist 180°, nicht 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°.": "Die Summe der Innenwinkel eines Dreiecks ist 180°.",
  "Súčet známych číslic je {@0}. Ciferný súčet musí byť deliteľný {@1}: najmenšia vhodná číslica je {@2}, lebo ${@3} + {@4} = {@5}$.": "Die Summe der bekannten Ziffern ist {@0}. Die Quersumme muss durch {@1} teilbar sein: Die kleinste passende Ziffer ist {@2}, weil ${@3} + {@4} = {@5}$.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.": "Das Produkt {@0}·{@1} ist ein gemeinsames Vielfaches, aber nicht das kleinste. Die Linien treffen sich früher.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.": "Das Produkt {@0}·{@1} ist ein gemeinsames Vielfaches, aber nicht das kleinste. Beim kgV nimm jeden Primfaktor nur so oft, wie er in der Zahl vorkommt, in der er am häufigsten ist.",
  "Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.": "Addiere die zwei kürzeren Seiten und vergleiche ihre Summe mit der längsten Seite. Es reicht, wenn die Summe größer ist.",
  "Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.": "Addiere die zwei kürzeren Seiten und vergleiche mit der längsten Seite. Die Summe muss größer sein.",
  "Sčítaj minúty.": "Addiere die Minuten.",
  "Sčítaj stupne.": "Addiere die Grad.",
  "Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný {@0}.": "Addiere die bekannten Ziffern. Füge zur Summe eine möglichst kleine Ziffer hinzu, sodass die Summe durch {@0} teilbar ist.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.": "Du hast nur zwei Seiten addiert. Ein Rechteck hat vier Seiten, multipliziere die Summe benachbarter Seiten noch mit zwei.",
  "Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.": "So wird die Quersumme durch 3 teilbar, aber für die Teilbarkeit durch 9 muss sie durch 9 teilbar sein.",
  "Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.": "Diese Größe hat der Nebenwinkel. Scheitelwinkel liegen einander gegenüber und sind gleich groß.",
  "Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.": "Das ist das kleinste gemeinsame Vielfache. Ein Stück muss kürzer sein als die Bänder – du suchst den größten gemeinsamen Teiler.",
  "Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.": "Das ist der größte gemeinsame Teiler. Der Zeitpunkt der gemeinsamen Abfahrt muss ein Vielfaches beider Intervalle sein – du suchst das kleinste gemeinsame Vielfache.",
  "Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.": "Das ist der Umfang des Quadrats. Den Flächeninhalt berechnest du als Seite mal Seite.",
  "Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.": "Das ist der Umfang. Den Flächeninhalt des Rechtecks berechnest du als Produkt seiner Seitenlängen.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obsah.": "Das ist die Seite des Quadrats. Berechne daraus noch den Flächeninhalt.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obvod.": "Das ist die Seite des Quadrats. Berechne daraus noch den Umfang.",
  "Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.": "Das ist der Abstand des Punktes A von der Achse. Der Bildpunkt liegt genauso weit auf der anderen Seite der Achse – finde seine Nummer.",
  "Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.": "So viele Grad haben beide Basiswinkel zusammen. Sie sind gleich groß, deshalb halbiere das Ergebnis noch.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je pravý, trojuholník je pravouhlý.": "Dritter Winkel: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Der größte Winkel hat ${@3}^\\circ$, er ist ein rechter, das Dreieck ist rechtwinklig.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je tupý, trojuholník je tupouhlý.": "Dritter Winkel: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Der größte Winkel hat ${@3}^\\circ$, er ist stumpf, das Dreieck ist stumpfwinklig.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.": "Dritter Winkel: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Der größte Winkel hat ${@3}^\\circ$, alle Winkel sind spitz, das Dreieck ist spitzwinklig.",
  "Trojuholník má dva vnútorné uhly s veľkosťou ${@0}^\\circ$ a ${@1}^\\circ$. Aký je to trojuholník podľa uhlov?": "Ein Dreieck hat zwei Innenwinkel der Größe ${@0}^\\circ$ und ${@1}^\\circ$. Was für ein Dreieck ist es nach den Winkeln?",
  "Trojuholník má strany {@0} cm, {@1} cm a {@2} cm. Aký je podľa strán?": "Ein Dreieck hat die Seiten {@0} cm, {@1} cm und {@2} cm. Was für ein Dreieck ist es nach den Seiten?",
  "Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.": "Ein stumpfwinkliges Dreieck hat einen Winkel, der größer als 90° ist. Berechne den dritten Winkel und prüfe es.",
  "Tupý uhol je väčší ako 90° a zároveň menší ako 180°.": "Ein stumpfer Winkel ist größer als 90° und zugleich kleiner als 180°.",
  "Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.": "Diese Eigenschaft hat nur die Zahl 1. Jede größere natürliche Zahl ist entweder eine Primzahl oder eine zusammengesetzte Zahl.",
  "Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.": "Die Diagonalen eines Rechtecks sind keine Symmetrieachsen – nach dem Falten entlang einer Diagonale decken sich die Hälften nicht.",
  "Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.": "Die Basiswinkel eines gleichschenkligen Dreiecks sind gleich groß und alle drei Winkel haben zusammen 180°.",
  "Uhly pri základni sú zhodné: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.": "Die Basiswinkel sind gleich groß: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?": "Der Winkel $\\alpha$ hat die Größe ${@0}^\\circ$. Wie groß ist sein Nebenwinkel (in Grad)?",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?": "Der Winkel $\\alpha$ hat die Größe ${@0}^\\circ$. Wie groß ist sein Scheitelwinkel (in Grad)?",
  "Uhol má {@0}°.": "Der Winkel hat {@0}°.",
  "Umiestni desatinnú čiarku: koľko je ${@0}\\cdot {@1}$?": "Setze das Dezimalkomma: Wie viel ist ${@0}\\cdot {@1}$?",
  "Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel {@0} a {@1}. Zapíš ich v poradí NSD; nsn.": "Bestimme den größten gemeinsamen Teiler und das kleinste gemeinsame Vielfache der Zahlen {@0} und {@1}. Schreibe sie in der Reihenfolge ggT; kgV.",
  "V ktorom riadku leží obraz $A'$?": "In welcher Zeile liegt der Bildpunkt $A'$?",
  "V ktorom stĺpci leží obraz $A'$?": "In welcher Spalte liegt der Bildpunkt $A'$?",
  "V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť ${@0}^\\circ$. Aký veľký je každý z uhlov pri základni?": "In einem gleichschenkligen Dreieck hat der Winkel gegenüber der Basis (an der Spitze) die Größe ${@0}^\\circ$. Wie groß ist jeder der Basiswinkel?",
  "V trojuholníku $ABC$ je $\\alpha = {@0}^\\circ$ a $\\beta = {@1}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?": "Im Dreieck $ABC$ ist $\\alpha = {@0}^\\circ$ und $\\beta = {@1}^\\circ$. Wie groß ist der Winkel $\\gamma$ (in Grad)?",
  "Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.": "Nebenwinkel ergeben zusammen einen gestreckten Winkel, Scheitelwinkel sind gleich groß.",
  "Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.": "Nebenwinkel haben zusammen $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.",
  "Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).": "Nebenwinkel ergänzen sich nicht zu einem rechten Winkel, sondern zu einem gestreckten Winkel (180°).",
  "Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.": "Nebenwinkel bilden zusammen einen gestreckten Winkel, also 180°, nicht 360°.",
  "Vrcholové uhly sú rovnako veľké, preto má tiež ${@0}^\\circ$.": "Scheitelwinkel sind gleich groß, deshalb hat er auch ${@0}^\\circ$.",
  "Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.": "Dividiere die Anzahl der Minuten durch 60. Der Quotient sind die Grad, der Rest die Minuten.",
  "Vydeľ čitateľa aj menovateľa číslom {@0}. Aký zlomok dostaneš (a/b)?": "Dividiere Zähler und Nenner durch {@0}. Welchen Bruch erhältst du (a/b)?",
  "Vyjadri ${@0}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.": "Drücke ${@0}'$ in Grad und Minuten aus. Schreibe in der Form Grad; Minuten.",
  "Vynásob prvočinitele, ktoré sú v oboch rozkladoch.": "Multipliziere die Primfaktoren, die in beiden Zerlegungen vorkommen.",
  "Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.": "Multipliziere die Zahlen ohne Dezimalkommas und zähle dann die Dezimalstellen beider Faktoren zusammen.",
  "Vynásob čísla bez desatinných čiarok: ${@0}\\cdot {@1}$.": "Multipliziere die Zahlen ohne Dezimalkommas: ${@0}\\cdot {@1}$.",
  "Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Du hast die Seiten multipliziert – das ist der Flächeninhalt. Der Umfang ist die Summe der Längen aller vier Seiten.",
  "Vypočítaj ${@0} {@1} {@2}$. Výsledok zapíš v tvare stupne; minúty.": "Berechne ${@0} {@1} {@2}$. Schreibe das Ergebnis in der Form Grad; Minuten.",
  "Vypočítaj ${@0}\\cdot {@1}$.": "Berechne ${@0}\\cdot {@1}$.",
  "Vypočítaj $|{@0}| + |{@1}|$.": "Berechne $|{@0}| + |{@1}|$.",
  "Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom {@0}.": "Du hast nur einen Teil berechnet. Multipliziere ihn noch mit dem Zähler {@0}.",
  "Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.": "Größer ist die Zahl, die auf dem Zahlenstrahl weiter rechts liegt. Achtung: −2 ist größer als −9.",
  "Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.": "Alle Seiten sind gleich lang, das Dreieck ist gleichseitig.",
  "Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.": "Alle drei Seiten sind verschieden lang, das Dreieck ist unregelmäßig.",
  "Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?": "Vom Busbahnhof fährt die Linie A alle {@0} Minuten ab und die Linie B alle {@1} Minuten. Um 7:00 sind beide Linien gleichzeitig abgefahren. Nach wie vielen Minuten fahren sie wieder gleichzeitig ab?",
  "Z menšej jednotky na väčšiu delíme číslom 100.": "Von der kleineren Einheit zur größeren dividieren wir durch 100.",
  "Za týmto miestom je číslica {@0}. Zaokrúhli ${@1}$ na {@2}.": "Nach dieser Stelle steht die Ziffer {@0}. Runde ${@1}$ auf {@2}.",
  "Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Du hast Zähler und Nenner vertauscht: Dividiere die Zahl durch den Nenner und multipliziere das Ergebnis mit dem Zähler.",
  "Zaokrúhlil si na iné miesto. Na {@0} znamená, že posledná ponechaná číslica stojí na mieste {@1}.": "Du hast auf eine andere Stelle gerundet. Auf {@0} bedeutet, dass die letzte behaltene Ziffer an der Stelle der {@1} steht.",
  "Zapíš $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Schreibe $\\frac{{@0}}{{@1}}$ als Dezimalzahl.",
  "Zapíš výsledok v poradí NSD; nsn.": "Schreibe das Ergebnis in der Reihenfolge ggT; kgV.",
  "Zapíš výsledok v tvare stupne; minúty.": "Schreibe das Ergebnis in der Form Grad; Minuten.",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Schreibe den Bruch $\\frac{{@0}}{{@1}}$ als Dezimalzahl.",
  "Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo {@0} si dopíš ako {@1}0.": "Du hast die Zahlen wie ganze Zahlen rechtsbündig untereinander geschrieben. Untereinander müssen die Dezimalkommas stehen – schreibe die Zahl {@0} als {@1}0.",
  "Zarovnáme desatinné čiarky pod seba a doplníme nuly: ${@0} {@1} {@2} = {@3}$.": "Wir schreiben die Dezimalkommas untereinander und ergänzen Nullen: ${@0} {@1} {@2} = {@3}$.",
  "Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.": "Finde heraus, ob es eine Zahl größer als 1 gibt, durch die sich beide Zahlen teilen lassen.",
  "Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.": "Der Bruchstrich ist kein Dezimalkomma. Ein Bruch bedeutet Division: Dividiere den Zähler durch den Nenner.",
  "Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.": "Die Brüche sind nicht gleich. Bringe sie auf einen gemeinsamen Nenner und vergleiche die Zähler.",
  "Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.": "Brüche mit verschiedenen Nennern kannst du nicht nur nach den Zählern oder nur nach den Nennern vergleichen. Bringe sie auf einen gemeinsamen Nenner.",
  "Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.": "Erweitere den Bruch so, dass im Nenner 10, 100 oder 1 000 steht, oder dividiere den Zähler durch den Nenner.",
  "Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla {@0} – ak žiadny nie je, číslo nie je zložené.": "Eine zusammengesetzte Zahl hat noch einen anderen Teiler als 1 und sich selbst. Versuche, einen solchen Teiler von {@0} zu finden – gibt es keinen, ist die Zahl nicht zusammengesetzt.",
  "Zrkadlil si bod podľa stredu siete, nie podľa osi o.": "Du hast den Punkt an der Mitte des Gitters gespiegelt, nicht an der Achse o.",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Aký je obsah záhrady v m²?": "Ein Garten hat die Form eines Rechtecks mit den Maßen {@0} m und {@1} m. Wie groß ist der Flächeninhalt des Gartens in m²?",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Koľko metrov pletiva treba na jej oplotenie?": "Ein Garten hat die Form eines Rechtecks mit den Maßen {@0} m und {@1} m. Wie viele Meter Zaun braucht man, um ihn einzuzäunen?",
  "ani prvočíslo, ani zložené": "weder Primzahl noch zusammengesetzt",
  "desatinné miesta": "Dezimalstellen",
  "desatinné miesto": "Dezimalstelle",
  "desatinných miest": "Dezimalstellen",
  "desatín": "Zehntel",
  "jednotky (celé čísla)": "Einer (ganze Zahlen)",
  "kladné": "positiv",
  "kosodĺžnik (rovnobežník)": "Parallelogramm",
  "kosoštvorec": "Raute",
  "malé dieliky sú stotiny (0,01), veľké desatiny (0,1)": "kleine Teilstriche sind Hundertstel (0,01), große Zehntel (0,1)",
  "miesta": "Stellen",
  "miesto": "Stelle",
  "napr. 2/3": "z. B. 2/3",
  "napr. 2; 2; 3": "z. B. 2; 2; 3",
  "nekonečne veľa": "unendlich viele",
  "nesúdeliteľné": "teilerfremd",
  "nsn obsahuje všetky prvočinitele: $n({@0}, {@1}) = {@2} = {@3}$.": "Das kgV enthält alle Primfaktoren: $n({@0}, {@1}) = {@2} = {@3}$.",
  "ostrouhlý": "spitzwinklig",
  "ostrý (30°)": "spitz (30°)",
  "podľa strán": "nach Seiten",
  "podľa uhlov": "nach Winkeln",
  "pravouhlý": "rechtwinklig",
  "pravý (90°)": "recht (90°)",
  "priamy": "gestreckt",
  "priamy (180°)": "gestreckt (180°)",
  "prvočíslo": "Primzahl",
  "riadkov": "Zeilen",
  "rovnoramenný": "gleichschenklig",
  "rovnoramenný trojuholník": "gleichschenkliges Dreieck",
  "rovnostranný": "gleichseitig",
  "rovnostranný trojuholník": "gleichseitiges Dreieck",
  "rôznostranný": "unregelmäßig",
  "rôznostranný trojuholník": "unregelmäßiges Dreieck",
  "stotiny": "Hundertstel",
  "stotín": "Hundertstel",
  "stred uhlomera = vrchol uhla": "Mittelpunkt des Geodreiecks = Scheitel des Winkels",
  "stupne; minúty": "Grad; Minuten",
  "stĺpce": "Spalten",
  "stĺpcov": "Spalten",
  "stĺpec": "Spalte",
  "súdeliteľné": "nicht teilerfremd",
  "tupouhlý": "stumpfwinklig",
  "tupý (135°)": "stumpf (135°)",
  "zložené číslo": "zusammengesetzte Zahl",
  "záporné": "negativ",
  "Áno. Písmeno {@0} má vodorovnú os súmernosti.": "Ja. Der Buchstabe {@0} hat eine waagerechte Symmetrieachse.",
  "Áno. Písmeno {@0} má zvislú aj vodorovnú os súmernosti.": "Ja. Der Buchstabe {@0} hat eine senkrechte und eine waagerechte Symmetrieachse.",
  "Áno. Písmeno {@0} má zvislú os súmernosti.": "Ja. Der Buchstabe {@0} hat eine senkrechte Symmetrieachse.",
  "Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti": "Figur und ihr Bild bei der Achsenspiegelung im Kästchengitter",
  "Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.": "Der Zeitpunkt der gemeinsamen Abfahrt muss ein Vielfaches beider Intervalle sein. Suche das kleinste solche.",
  "Číselná os od 2 do 3 s desatinami a stotinami": "Zahlenstrahl von 2 bis 3 mit Zehnteln und Hundertsteln",
  "Číselná os s celými číslami od −6 do 6": "Zahlenstrahl mit den ganzen Zahlen von −6 bis 6",
  "Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.": "Die Zahlen sind nicht gleich. Finde heraus, welche von ihnen auf dem Zahlenstrahl weiter rechts liegt.",
  "Čísla od 1 do 60, prvočísla sú vyfarbené": "Zahlen von 1 bis 60, die Primzahlen sind eingefärbt",
  "Číslica za týmto miestom je {@0}, teda 5 alebo viac – zaokrúhľuje sa nahor.": "Die Ziffer nach dieser Stelle ist {@0}, also 5 oder mehr – es wird aufgerundet.",
  "Číslica za týmto miestom je {@0}, teda menej ako 5 – zaokrúhľuje sa nadol.": "Die Ziffer nach dieser Stelle ist {@0}, also weniger als 5 – es wird abgerundet.",
  "Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.": "Die Zahl 1 hat nur einen Teiler (sich selbst), deshalb ist sie weder eine Primzahl noch eine zusammengesetzte Zahl.",
  "Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.": "Eine Zahl ist nur dann durch 6 teilbar, wenn sie gleichzeitig durch 2 und durch 3 teilbar ist. Prüfe beide Bedingungen.",
  "Číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Dividiere die Zahl durch den Nenner und multipliziere das Ergebnis mit dem Zähler.",
  "Číslo z posledných dvoch číslic je {@0}, je deliteľné 4.": "Die Zahl aus den letzten zwei Ziffern ist {@0}, sie ist durch 4 teilbar.",
  "Číslo z posledných dvoch číslic je {@0}, nie je deliteľné 4.": "Die Zahl aus den letzten zwei Ziffern ist {@0}, sie ist nicht durch 4 teilbar.",
  "Číslo {@0} má iba dva delitele: 1 a {@1}. Je to prvočíslo.": "Die Zahl {@0} hat nur zwei Teiler: 1 und {@1}. Sie ist eine Primzahl.",
  "časti": "Teile",
  "častí": "Teile",
  "časť": "Teil",
  "Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.": "Ein Quadrat hat 4 Symmetrieachsen: 2 verbinden die Mittelpunkte gegenüberliegender Seiten und 2 liegen auf den Diagonalen.",
  "Štvorec má obsah ${@0}\\,\\text{cm}^2$. Aký je jeho obvod v cm?": "Ein Quadrat hat den Flächeninhalt ${@0}\\,\\text{cm}^2$. Wie groß ist sein Umfang in cm?",
  "Štvorec má obvod ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Ein Quadrat hat den Umfang ${@0}\\,\\text{cm}$. Wie groß ist sein Flächeninhalt in cm²?",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Ein Quadrat hat die Seite ${@0}\\,\\text{cm}$. Wie groß ist sein Flächeninhalt in cm²?",
  "štvorčeková sieť s osou a bodom A": "Kästchengitter mit Achse und Punkt A"
 }
});
