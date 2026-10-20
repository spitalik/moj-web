/* Deutsch: preklad js/rocniky/r5.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/r5/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "r5-prirodzene": {
   "title": "Natürliche Zahlen und ihre Eigenschaften",
   "summary": "Stellenwerte und Dreiergruppen großer Zahlen, Vergleichen, gerade und ungerade Zahlen.",
   "theory": [
    "<p><strong>Natürliche Zahlen</strong> sind $1, 2, 3, 4, \\dots$ – die Zahlen, mit denen wir Gegenstände zählen. Die kleinste natürliche Zahl\n       ist 1, eine größte gibt es nicht: Zu jeder Zahl können wir 1 addieren und erhalten ihren <strong>Nachfolger</strong>.\n       Die Zahl, die um 1 kleiner ist, ist der <strong>Vorgänger</strong>.</p>",
    "<p>Die Ziffern einer großen Zahl teilen wir von rechts in <strong>Dreiergruppen</strong> ein: Einer, Tausender, Millionen.\n       In jeder Gruppe gibt es Hunderter, Zehner und Einer. Der Wert einer Ziffer hängt von der Stelle ab, an der sie steht.</p>",
    {
     "fig": "r5-triedy",
     "caption": "In der Zahl $3\\,042\\,705$ hat die Ziffer 4 den Wert $40\\,000$, weil sie an der Zehntausenderstelle steht."
    },
    "<p><strong>Gerade Zahlen</strong> sind durch zwei teilbar und enden auf 0, 2, 4, 6 oder 8. Die übrigen Zahlen sind\n       <strong>ungerade</strong> – sie enden auf 1, 3, 5, 7 oder 9. Ob eine Zahl gerade ist, entscheidet nur die letzte Ziffer.</p>"
   ],
   "examples": [
    {
     "task": "Bilde aus den Ziffern 5, 0, 8, 2 (jede genau einmal) die größte und die kleinste vierstellige Zahl.",
     "steps": [
      "Größte: Wir ordnen die Ziffern von der größten an: $8\\,520$.",
      "Kleinste: Wir ordnen von der kleinsten an, aber vorne darf keine 0 stehen: $2\\,058$."
     ]
    },
    {
     "task": "Wie lauten Nachfolger und Vorgänger der Zahl $499\\,999$?",
     "steps": [
      "Nachfolger: $499\\,999 + 1 = 500\\,000$.",
      "Vorgänger: $499\\,999 - 1 = 499\\,998$."
     ]
    }
   ]
  },
  "r5-zaokruhlovanie": {
   "title": "Runden von Zahlen",
   "summary": "Runden auf Zehner, Hunderter und Tausender, Ergebnisse überschlagen.",
   "theory": [
    "<p>Beim <strong>Runden</strong> ersetzen wir eine Zahl durch die nächstgelegene „runde“ Zahl. Wir schreiben das Zeichen $\\doteq$\n       (gelesen „ist ungefähr gleich“): $3\\,467 \\doteq 3\\,470$ (auf Zehner).</p>",
    "<p><strong>Regel:</strong> Wir schauen auf die Ziffer <em>direkt rechts</em> von der Stelle, auf die wir runden.\n       Ist sie 0, 1, 2, 3 oder 4, runden wir <strong>ab</strong>. Ist sie 5, 6, 7, 8 oder 9, runden wir <strong>auf</strong>.\n       Die Ziffern rechts davon ersetzen wir durch Nullen.</p>",
    {
     "fig": "r5-zaokruhlovanie",
     "caption": "Verschiebe die Zahl und beobachte, welchem Zehner (grüner Punkt) und welchem Hunderter (Bogen) sie am nächsten liegt."
    },
    "<p><strong>Überschlag:</strong> Vor der genauen Rechnung können wir die Zahlen runden und das Ergebnis abschätzen.\n       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$. Der Überschlag hilft uns, Rechenfehler zu entdecken.</p>"
   ],
   "examples": [
    {
     "task": "Runde die Zahl $72\\,649$ auf Hunderter.",
     "steps": [
      "An der Hunderterstelle steht 6, direkt rechts davon 4.",
      "4 ist kleiner als 5, wir runden ab: Die Hunderter bleiben 6.",
      "<strong>$72\\,649 \\doteq 72\\,600$</strong>"
     ]
    },
    {
     "task": "Runde die Zahl $5\\,962$ auf Zehner.",
     "steps": [
      "An der Zehnerstelle steht 6, rechts davon 2 – wir runden ab.",
      "<strong>$5\\,962 \\doteq 5\\,960$</strong>",
      "Auf Hunderter wäre es $6\\,000$, weil hinter den Hundertern eine 6 steht."
     ]
    }
   ]
  },
  "r5-rimske": {
   "title": "Römische Zahlen",
   "summary": "Große Zahlen und Jahreszahlen schreiben, Subtraktionsregeln, Umwandlung in beide Richtungen.",
   "theory": [
    "<p>Römische Ziffern: $\\text{I} = 1$, $\\text{V} = 5$, $\\text{X} = 10$, $\\text{L} = 50$, $\\text{C} = 100$,\n       $\\text{D} = 500$, $\\text{M} = 1\\,000$. Die größte Zahl, die man damit üblicherweise schreibt, ist $3\\,999 = \\text{MMMCMXCIX}$.</p>",
    "<p><strong>Schreibregeln:</strong></p>\n       <ol><li>Die Zeichen schreiben wir vom größten zum kleinsten und addieren ihre Werte: $\\text{MDCLX} = 1\\,660$.</li>\n       <li>Die Zeichen I, X, C, M dürfen höchstens dreimal hintereinander stehen. V, L, D werden nicht wiederholt.</li>\n       <li>Ein kleineres Zeichen vor einem größeren wird subtrahiert. Das darf nur I, X oder C sein, und zwar nur vor den zwei nächstgrößeren Zeichen.</li></ol>",
    {
     "fig": "r5-rimske",
     "caption": "Die sechs Paare, bei denen subtrahiert wird. Andere Paare (zum Beispiel IL oder IC) sind falsch."
    },
    "<p>Die <strong>Umwandlung in römische Zahlen</strong> machen wir Stelle für Stelle: Tausender, Hunderter, Zehner, Einer.\n       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$.</p>"
   ],
   "examples": [
    {
     "task": "Schreibe das Jahr $2\\,026$ mit römischen Ziffern.",
     "steps": [
      "$2\\,026 = 2\\,000 + 20 + 6$.",
      "$2\\,000 = \\text{MM}$, $20 = \\text{XX}$, $6 = \\text{VI}$.",
      "<strong>$2\\,026 = \\text{MMXXVI}$</strong>"
     ]
    },
    {
     "task": "Welche Zahl ist $\\text{CDXLIX}$?",
     "steps": [
      "Wir teilen in Gruppen: $\\text{CD} = 400$, $\\text{XL} = 40$, $\\text{IX} = 9$.",
      "$400 + 40 + 9 = 449$.",
      "Achtung: 49 ist nicht IL, sondern XLIX.",
      "<strong>$\\text{CDXLIX} = 449$</strong>"
     ]
    }
   ]
  },
  "r5-operacie": {
   "title": "Grundrechenarten und Rechenreihenfolge",
   "summary": "Addition, Subtraktion, Multiplikation, Division, Klammern und geschicktes Rechnen.",
   "theory": [
    "<p>Bei der Berechnung eines Terms halten wir die <strong>Rechenreihenfolge</strong> ein: zuerst die Klammern, dann Multiplikation und Division\n       (von links nach rechts) und zuletzt Addition und Subtraktion (von links nach rechts).</p>",
    {
     "fig": "r5-poradie",
     "caption": "Rechenreihenfolge. Rechenarten derselben Stufe rechnen wir von links nach rechts."
    },
    "<p><strong>Geschicktes Rechnen:</strong> Beim Addieren und Multiplizieren dürfen wir die Zahlen vertauschen und anders zusammenfassen:\n       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$.\n       Auch das Ausmultiplizieren einer Klammer hilft: $36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$.</p>",
    "<p><strong>Fachbegriffe:</strong> Summand + Summand = Summe, Minuend − Subtrahend = Differenz, Faktor · Faktor = Produkt,\n       Dividend : Divisor = Quotient. Ein unbekanntes Glied finden wir mit der Umkehrrechnung: Wenn $\\square\\cdot 8 = 96$, dann ist $\\square = 96 : 8 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $120 - 6\\cdot(14 - 5)$.",
     "steps": [
      "Klammer: $14 - 5 = 9$.",
      "Multiplikation: $6\\cdot 9 = 54$.",
      "Subtraktion: $120 - 54 = 66$.",
      "<strong>Ergebnis: 66</strong>"
     ]
    },
    {
     "task": "Berechne geschickt $5\\cdot 63\\cdot 20$.",
     "steps": [
      "Wir fassen $5\\cdot 20 = 100$ zusammen.",
      "$100\\cdot 63 = 6\\,300$.",
      "<strong>Ergebnis: $6\\,300$</strong>"
     ]
    }
   ]
  },
  "r5-delitelnost": {
   "title": "Vielfache und Teiler",
   "summary": "Was Vielfache und Teiler einer Zahl sind, wie man sie findet, und die Teilbarkeitsregeln für 2, 3, 5 und 10.",
   "theory": [
    "<p>Die <strong>Vielfachen</strong> einer Zahl erhalten wir, wenn wir sie mit den Zahlen $1, 2, 3, \\dots$ multiplizieren. Die Vielfachen der Zahl 6 sind\n       $6, 12, 18, 24, \\dots$ – es gibt unendlich viele.</p>",
    "<p>Ein <strong>Teiler</strong> einer Zahl ist eine Zahl, durch die man sie ohne Rest dividieren kann. Die Teiler der Zahl 12 sind $1, 2, 3, 4, 6, 12$.\n       Wir suchen sie paarweise: $12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$. Die Zahl 1 und die Zahl selbst sind immer Teiler.</p>",
    {
     "fig": "r5-delitele",
     "caption": "12 Punkte können wir in Rechtecken $1\\cdot 12$, $2\\cdot 6$ und $3\\cdot 4$ anordnen. Die Seitenlängen sind die Teiler der Zahl 12."
    },
    "<p><strong>Teilbarkeitsregeln:</strong> Eine Zahl ist teilbar durch <strong>2</strong>, wenn sie auf 0, 2, 4, 6, 8 endet;\n       durch <strong>5</strong>, wenn sie auf 0 oder 5 endet; durch <strong>10</strong>, wenn sie auf 0 endet; durch <strong>3</strong>, wenn ihre\n       Quersumme (die Summe der Ziffern) durch drei teilbar ist.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme alle Teiler der Zahl 18.",
     "steps": [
      "Wir suchen Paare: $18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$.",
      "4 und 5 sind keine Teiler, danach wiederholen sich die Paare.",
      "<strong>Teiler: 1, 2, 3, 6, 9, 18.</strong>"
     ]
    },
    {
     "task": "Ist die Zahl $4\\,215$ durch drei teilbar?",
     "steps": [
      "Quersumme: $4 + 2 + 1 + 5 = 12$.",
      "12 ist durch drei teilbar.",
      "<strong>Ja, $4\\,215$ ist durch drei teilbar.</strong> ($4\\,215 : 3 = 1\\,405$)"
     ]
    }
   ]
  },
  "r5-zlomky": {
   "title": "Brüche – Grundvorstellungen",
   "summary": "Teil eines Ganzen, Zähler und Nenner, Bruchteil einer Zahl, Brüche vergleichen.",
   "theory": [
    "<p>Wenn wir ein Ganzes in <strong>gleich große</strong> Teile teilen, ist ein Teil ein Bruchteil davon: die Hälfte $\\frac{1}{2}$,\n       ein Drittel $\\frac{1}{3}$, ein Viertel $\\frac{1}{4}$ … Der Bruch $\\frac{3}{8}$ bedeutet: Wir teilen das Ganze in 8 gleiche Teile und nehmen 3 davon.</p>",
    "<p>Die Zahl unter dem Bruchstrich ist der <strong>Nenner</strong> – er sagt, in wie viele Teile wir das Ganze geteilt haben.\n       Die Zahl über dem Strich ist der <strong>Zähler</strong> – er sagt, wie viele Teile wir nehmen.</p>",
    {
     "fig": "r5-zlomky",
     "caption": "Die Brüche $\\frac{1}{2}$, $\\frac{1}{4}$ und $\\frac{3}{8}$ eines Kuchens und $\\frac{2}{5}$ eines Streifens."
    },
    "<p><strong>Bruchteil einer Zahl:</strong> $\\frac{3}{4}$ von 20 berechnen wir, indem wir 20 durch den Nenner dividieren ($20 : 4 = 5$, das ist ein Viertel)\n       und mit dem Zähler multiplizieren ($5\\cdot 3 = 15$).<br>\n       <strong>Vergleichen:</strong> Bei gleichem Nenner ist der Bruch mit dem größeren Zähler größer: $\\frac{5}{7} &gt; \\frac{3}{7}$.\n       Bei gleichem Zähler ist der Bruch mit dem kleineren Nenner größer: $\\frac{1}{3} &gt; \\frac{1}{5}$ (ein Drittel ist ein größeres Stück als ein Fünftel).</p>"
   ],
   "examples": [
    {
     "task": "Wie viel sind $\\frac{2}{5}$ von 35?",
     "steps": [
      "Ein Fünftel: $35 : 5 = 7$.",
      "Zwei Fünftel: $7\\cdot 2 = 14$.",
      "<strong>$\\frac{2}{5}$ von 35 sind 14.</strong>"
     ]
    },
    {
     "task": "Ein Drittel eines Weges ist 4 km lang. Wie lang ist der ganze Weg?",
     "steps": [
      "Der ganze Weg besteht aus 3 Dritteln.",
      "$3\\cdot 4 = 12$.",
      "<strong>Der ganze Weg ist 12 km lang.</strong>"
     ]
    }
   ]
  },
  "r5-utvary": {
   "title": "Geometrische Grundfiguren",
   "summary": "Punkt, Gerade, Halbgerade, Strecke, Kreislinie und Kreis.",
   "theory": [
    "<p>Einen <strong>Punkt</strong> bezeichnen wir mit einem Großbuchstaben (A, B, S). Durch zwei verschiedene Punkte geht genau eine <strong>Gerade</strong> –\n       sie ist gerade und hat weder Anfang noch Ende. Wir bezeichnen sie mit einem Kleinbuchstaben ($p$) oder mit zwei Punkten (Gerade $AB$).</p>",
    "<p>Eine <strong>Halbgerade</strong> (ein Strahl) hat einen Anfang, aber kein Ende: Die Halbgerade $AB$ beginnt im Punkt A und verläuft durch den Punkt B weiter.\n       Die <strong>Strecke</strong> $AB$ ist der Teil der Geraden zwischen den Punkten A und B, sie hat zwei Endpunkte und lässt sich messen.</p>",
    {
     "fig": "r5-utvary",
     "caption": "Die gestrichelte Linie zeigt, dass die Linie ohne Ende weitergeht. Rechts eine Kreislinie mit dem Mittelpunkt S, dem Radius r und dem Durchmesser d."
    },
    "<p>Die <strong>Kreislinie</strong> ist eine Linie, deren Punkte alle den gleichen Abstand vom Mittelpunkt S haben – das ist der <strong>Radius</strong> $r$.\n       Der <strong>Durchmesser</strong> $d$ geht durch den Mittelpunkt und ist doppelt so lang: $d = 2\\cdot r$. Der <strong>Kreis</strong> (die Kreisfläche) ist die Kreislinie samt dem ganzen Inneren.</p>"
   ],
   "examples": [
    {
     "task": "Eine Kreislinie hat den Durchmesser 14 cm. Wie groß ist ihr Radius?",
     "steps": [
      "Der Radius ist die Hälfte des Durchmessers.",
      "$14 : 2 = 7$.",
      "<strong>$r = 7\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Wie viele Strecken bestimmen 4 Punkte, von denen keine drei auf einer Geraden liegen?",
     "steps": [
      "Punkte A, B, C, D. Wir verbinden jeden mit jedem: AB, AC, AD, BC, BD, CD.",
      "<strong>Es sind 6.</strong>"
     ]
    }
   ]
  },
  "r5-obvod": {
   "title": "Umfang von Quadrat, Rechteck und Dreieck",
   "summary": "Umfang berechnen, fehlende Seite bestimmen und mit verschiedenen Einheiten rechnen.",
   "theory": [
    "<p>Der <strong>Umfang</strong> eines Vielecks ist die Summe der Längen aller seiner Seiten. Wir bezeichnen ihn mit $o$.</p>",
    {
     "fig": "r5-obvod",
     "caption": "Formeln für den Umfang von Quadrat, Rechteck und Dreieck."
    },
    "<p><strong>Quadrat:</strong> $o = 4\\cdot a$. <strong>Rechteck:</strong> $o = 2\\cdot(a + b)$.\n       <strong>Dreieck:</strong> $o = a + b + c$; ein gleichseitiges Dreieck hat $o = 3\\cdot a$.</p>",
    "<p>Vor dem Addieren müssen alle Längen in <strong>derselben Einheit</strong> sein. Hat ein Rechteck die Seiten $3\\,\\text{dm}$ und $12\\,\\text{cm}$,\n       rechnen wir zuerst $3\\,\\text{dm} = 30\\,\\text{cm}$ um und dann $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Ein Dreieck hat die Seiten 7 cm, 9 cm und 12 cm. Berechne seinen Umfang.",
     "steps": [
      "$o = 7 + 9 + 12$.",
      "$o = 28\\,\\text{cm}$."
     ]
    },
    {
     "task": "Ein Rechteck hat den Umfang 50 m und eine Seite von 15 m. Wie lang ist die andere Seite?",
     "steps": [
      "Der halbe Umfang ist $a + b = 50 : 2 = 25$.",
      "$b = 25 - 15 = 10$.",
      "<strong>Die andere Seite ist $10\\,\\text{m}$ lang.</strong>"
     ]
    }
   ]
  },
  "r5-jednotky": {
   "title": "Einheiten für Länge, Gewicht, Volumen und Zeit",
   "summary": "Einheiten umrechnen, zusammengesetzte Angaben und die passende Einheit wählen.",
   "theory": [
    "<p><strong>Länge:</strong> km, m, dm, cm, mm. <strong>Gewicht (Masse):</strong> t, kg, dag, g.\n       <strong>Volumen:</strong> hl, l, dl, ml. <strong>Zeit:</strong> Tag, Stunde (h), Minute (min), Sekunde (s).</p>",
    {
     "fig": "r5-jednotky",
     "caption": "Einheitenleitern. Der Pfeil zeigt, durch wie viele kleinere Einheiten wir eine größere ersetzen."
    },
    "<p><strong>In eine kleinere Einheit</strong> multiplizieren wir: $3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$.\n       <strong>In eine größere Einheit</strong> dividieren wir: $4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$.\n       Eine zusammengesetzte Angabe rechnen wir in Teilen um: $2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$.</p>",
    "<p>Vorsicht bei der Zeit: Hier gilt nicht „zehn“, sondern <strong>60</strong> (eine Stunde hat 60 Minuten, eine Minute 60 Sekunden), und ein Tag hat <strong>24</strong> Stunden.</p>"
   ],
   "examples": [
    {
     "task": "Rechne $3\\,\\text{l}\\ 4\\,\\text{dl}$ in Deziliter um.",
     "steps": [
      "$3\\,\\text{l} = 30\\,\\text{dl}$.",
      "$30 + 4 = 34$.",
      "<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>"
     ]
    },
    {
     "task": "Ein Film begann um 18:40 und endete um 20:15. Wie viele Minuten hat er gedauert?",
     "steps": [
      "Von 18:40 bis 19:00 sind es 20 Minuten.",
      "Von 19:00 bis 20:00 sind es 60 Minuten, von 20:00 bis 20:15 sind es 15 Minuten.",
      "$20 + 60 + 15 = 95$.",
      "<strong>Der Film dauerte 95 Minuten.</strong>"
     ]
    }
   ]
  },
  "r5-slovne": {
   "title": "Sachaufgaben lösen",
   "summary": "Aufgaben mit mehreren Schritten, Teile eines Ganzen, Summe und Differenz, Aufrunden.",
   "theory": [
    "<p>So löst du eine Sachaufgabe: <strong>1.</strong> Lies die Aufgabe und schreibe auf, was du weißt und was du suchst; <strong>2.</strong> überlege,\n       in welcher Reihenfolge du rechnest; <strong>3.</strong> rechne; <strong>4.</strong> mach eine Probe oder einen Überschlag;\n       <strong>5.</strong> schreibe die Antwort als ganzen Satz.</p>",
    "<p>Das <strong>Streckenmodell</strong> hilft bei Aufgaben zu Summe und Differenz. Haben zwei zusammen 50 € und einer hat 8 € mehr,\n       ziehen wir zuerst den Unterschied ab – danach haben beide gleich viel.</p>",
    {
     "fig": "r5-model",
     "caption": "Streckenmodell: $50 - 8 = 42$, $42 : 2 = 21$. Der Jüngere hat 21 €, der Ältere $21 + 8 = 29$ €."
    },
    "<p>Achtung beim <strong>Rest</strong>: Wenn 23 Kinder in Autos fahren sollen und in eines 4 passen, reichen $23 : 4 = 5$ (Rest 3) Autos nicht.\n       Die übrigen 3 Kinder brauchen ein weiteres Auto, deshalb braucht man 6 Autos.</p>"
   ],
   "examples": [
    {
     "task": "Lena hatte 120 Euro. Ein Drittel gab sie für Schuhe aus und 25 Euro für Bücher. Wie viel Euro blieben ihr übrig?",
     "steps": [
      "Ein Drittel von 120: $120 : 3 = 40$ Euro.",
      "Insgesamt gab sie $40 + 25 = 65$ Euro aus.",
      "Übrig blieben $120 - 65 = 55$ Euro.",
      "<strong>Antwort: Lena blieben 55 Euro übrig.</strong>"
     ]
    },
    {
     "task": "Ein Vater ist 42 Jahre alt und dreimal so alt wie sein Sohn. Wie alt wird der Sohn in 6 Jahren sein?",
     "steps": [
      "Der Sohn ist jetzt $42 : 3 = 14$ Jahre alt.",
      "In 6 Jahren: $14 + 6 = 20$.",
      "<strong>Antwort: Der Sohn wird 20 Jahre alt sein.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot {@0} = {@1}$.": "$125\\cdot 8 = 1\\,000$, deshalb ist das Ergebnis $1\\,000\\cdot {@0} = {@1}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, deshalb ${@3} : {@4} = {@5}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, deshalb ${@3}\\cdot {@4} = {@5}$.",
  "$25\\cdot 4 = 100$, preto $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.": "$25\\cdot 4 = 100$, deshalb $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.",
  "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Súčet: ${@4} + {@5} = {@6}$ (rímskymi číslicami {@7}).": "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Summe: ${@4} + {@5} = {@6}$ (in römischen Zahlzeichen {@7}).",
  "$a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}$, druhá strana meria ${@5}\\,\\text{{@6}}$.": "$a + b = {@0} : 2 = {@1}$, deshalb $b = {@2} - {@3} = {@4}$, die zweite Seite ist ${@5}\\,\\text{{@6}}$ lang.",
  "$a = {@0} : 4 = {@1}$, strana meria ${@2}\\,\\text{{@3}}$.": "$a = {@0} : 4 = {@1}$, die Seite ist ${@2}\\,\\text{{@3}}$ lang.",
  "$c = {@0} - {@1} - {@2} = {@3}$, tretia strana meria ${@4}\\,\\text{{@5}}$.": "$c = {@0} - {@1} - {@2} = {@3}$, die dritte Seite ist ${@4}\\,\\text{{@5}}$ lang.",
  "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, priemer je ${@2}\\,\\text{{@3}}$.": "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, der Durchmesser ist ${@2}\\,\\text{{@3}}$.",
  "$o = {@0} + {@1} + {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = {@0} + {@1} + {@2} = {@3}$, der Umfang ist ${@4}\\,\\text{{@5}}$.",
  "$o = {@0}\\cdot {@1} = {@2}$, obvod je ${@3}\\,\\text{{@4}}$.": "$o = {@0}\\cdot {@1} = {@2}$, der Umfang ist ${@3}\\,\\text{{@4}}$.",
  "$r = d : 2 = {@0} : 2 = {@1}$, polomer je ${@2}\\,\\text{{@3}}$.": "$r = d : 2 = {@0} : 2 = {@1}$, der Radius ist ${@2}\\,\\text{{@3}}$.",
  "${@0} : {@1} = {@2}$ (to je ${@3}$), potom ${@4}\\cdot {@5} = {@6}$.": "${@0} : {@1} = {@2}$ (das ist ${@3}$), dann ${@4}\\cdot {@5} = {@6}$.",
  "${@0} : {@1} = {@2}$, zvyšok {@3}. {@4}": "${@0} : {@1} = {@2}$, Rest {@3}. {@4}",
  "${@0} = {@1}\\cdot {@2}$. Ostatné čísla po delení {@3} dávajú zvyšok.": "${@0} = {@1}\\cdot {@2}$. Die anderen Zahlen lassen beim Teilen durch {@3} einen Rest.",
  "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Odhad: ${@4} {@5} {@6} = {@7}$. (Presný výsledok je ${@8}$.)": "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Überschlag: ${@4} {@5} {@6} = {@7}$. (Das genaue Ergebnis ist ${@8}$.)",
  "${@0}$ z {@1} je ${@2} : {@3} = {@4}$. ${@5}$ je ${@6}\\cdot {@7} = {@8}$. {@9}.": "${@0}$ von {@1} ist ${@2} : {@3} = {@4}$. ${@5}$ ist ${@6}\\cdot {@7} = {@8}$. {@9}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ a pripočítame zvyšok: ${@4} + {@5} = {@6}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ und wir addieren den Rest: ${@4} + {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.": "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.",
  "0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.": "0 – 4: abrunden, 5 – 9: aufrunden. Ersetze die Ziffern rechts durch Nullen.",
  "3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť": "3 042 705 = drei Millionen zweiundvierzigtausendsiebenhundertfünf",
  "<span class=\"c-ok\">{@0} ≐ {@1} (na desiatky)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (na stovky)</span>": "<span class=\"c-ok\">{@0} ≐ {@1} (auf Zehner)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (auf Hunderter)</span>",
  "Aké číslo je $\\text{{@0}}$?": "Welche Zahl ist $\\text{{@0}}$?",
  "Akú hodnotu má skupina $\\text{{@0}}$?": "Welchen Wert hat die Gruppe $\\text{{@0}}$?",
  "Akú hodnotu má číslica {@0} v čísle ${@1}$?": "Welchen Wert hat die Ziffer {@0} in der Zahl ${@1}$?",
  "Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). {@0}": "Welchen Teil des Ganzen bilden die eingefärbten Teile? Schreibe ihn als Bruch in der Form a/b (zum Beispiel 2/5). {@0}",
  "Aký je obvod obdĺžnika (v {@0})?": "Wie groß ist der Umfang des Rechtecks (in {@0})?",
  "Aký je obvod obdĺžnika v centimetroch?": "Wie groß ist der Umfang des Rechtecks in Zentimetern?",
  "Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.": "Ohne den Unterschied von 8 € hätten beide gleich viel: (50 − 8) : 2 = 21 €.",
  "Bez rozdielu: ${@0} - {@1} = {@2}$, to je dvakrát toľko, koľko má mladší: ${@3} : 2 = {@4}$. {@5} Skúška: ${@6} + {@7} = {@8}$.": "Ohne den Unterschied: ${@0} - {@1} = {@2}$, das ist doppelt so viel, wie der Jüngere hat: ${@3} : 2 = {@4}$. {@5} Probe: ${@6} + {@7} = {@8}$.",
  "Body {@0}. Úsečky: {@1}. Spolu {@2}.": "Punkte {@0}. Strecken: {@1}. Zusammen {@2}.",
  "Celok je rozdelený na {@0} {@1} (menovateľ), {@2} (čitateľ): ${@3}$.": "Das Ganze ist in {@0} {@1} geteilt (Nenner), {@2} (Zähler): ${@3}$.",
  "Celok má {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, teda ${@5}\\,\\text{{@6}}$.": "Das Ganze hat {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, also ${@5}\\,\\text{{@6}}$.",
  "Celok sa skladá z {@0} rovnakých častí. Vynásob.": "Das Ganze besteht aus {@0} gleichen Teilen. Multipliziere.",
  "Cesta vlakom z Bratislavy do Košíc trvá asi": "Die Zugfahrt von Bratislava nach Kosice dauert etwa",
  "Cez dva body vieme viesť jedinú priamku.": "Durch zwei Punkte können wir genau eine Gerade legen.",
  "Ciferný súčet: ${@0} = {@1}$, je deliteľný tromi.": "Quersumme: ${@0} = {@1}$, sie ist durch drei teilbar.",
  "Ciferný súčet: ${@0} = {@1}$, nie je deliteľný tromi.": "Quersumme: ${@0} = {@1}$, sie ist nicht durch drei teilbar.",
  "Desatina": "Ein Zehntel",
  "Deň má 24 hodín: ${@0}\\cdot 24 = {@1}$, a ešte ${@2} + {@3} = {@4}$ hodín.": "Ein Tag hat 24 Stunden: ${@0}\\cdot 24 = {@1}$, und noch ${@2} + {@3} = {@4}$ Stunden.",
  "Dni a hodiny nemôžeš len tak sčítať. Najprv premeň {@0} {@1} na hodiny.": "Tage und Stunden kannst du nicht einfach addieren. Rechne zuerst {@0} {@1} in Stunden um.",
  "Do hrnčeka sa zmestí asi": "In eine Tasse passen etwa",
  "Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.": "In den Nenner gehört die Anzahl aller Teile, nicht nur der nicht eingefärbten.",
  "Do vane sa zmestí asi": "In eine Badewanne passen etwa",
  "Do {@0} {@1} sa zmestí ${@2}\\,\\text{{@3}}$. {@4}": "In {@0} {@1} passen ${@2}\\,\\text{{@3}}$. {@4}",
  "Doplň chýbajúce číslo: $\\square : {@0} = {@1}$": "Ergänze die fehlende Zahl: $\\square : {@0} = {@1}$",
  "Doplň chýbajúce číslo: $\\square\\cdot {@0} = {@1}$": "Ergänze die fehlende Zahl: $\\square\\cdot {@0} = {@1}$",
  "Druhý deň neprešli {@0} km, ale o {@1} km viac ako prvý deň.": "Am zweiten Tag sind sie nicht {@0} km gegangen, sondern {@1} km mehr als am ersten Tag.",
  "Druhý deň: ${@0} + {@1} = {@2}$ km. Tretí deň: ${@3} : 2 = {@4}$ km. Spolu: ${@5} + {@6} + {@7} = {@8}$ km.": "Zweiter Tag: ${@0} + {@1} = {@2}$ km. Dritter Tag: ${@3} : 2 = {@4}$ km. Zusammen: ${@5} + {@6} + {@7} = {@8}$ km.",
  "Dvaja bratia majú spolu {@0} {@1}. Starší má o {@2} {@3} viac ako mladší. Koľko eur má {@4} brat?": "Zwei Brüder haben zusammen {@0} {@1}. Der Ältere hat {@2} {@3} mehr als der Jüngere. Wie viele Euro hat der {@4} Bruder?",
  "Dvanásť bodiek usporiadaných do obdĺžnikov": "Zwölf Punkte, in Rechtecken angeordnet",
  "Dvojica {@0} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.": "Das Paar {@0} darf nicht verwendet werden: Subtrahieren darfst du nur I vor V und X, X vor L und C, C vor D und M.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}.": "Paare: ${@0} = {@1}$. Teiler: {@2}.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}. Číslo má iba dva delitele.": "Paare: ${@0} = {@1}$. Teiler: {@2}. Die Zahl hat nur zwei Teiler.",
  "Dvoma rôznymi bodmi prechádza práve jedna priamka.": "Durch zwei verschiedene Punkte geht genau eine Gerade.",
  "Dĺžka triedy je asi": "Die Länge eines Klassenzimmers beträgt etwa",
  "Hmotnosť jablka je asi": "Die Masse eines Apfels beträgt etwa",
  "Hmotnosť nákladného auta je asi": "Die Masse eines Lastwagens beträgt etwa",
  "Hmotnosť žiaka 5. ročníka je asi": "Die Masse eines Kindes der 5. Klasse beträgt etwa",
  "Hrúbka zošita je asi": "Die Dicke eines Heftes beträgt etwa",
  "Hľadaj v násobilke čísla {@0} posledný výsledok, ktorý ešte nepresiahne {@1}.": "Suche in der Einmaleinsreihe von {@0} das letzte Ergebnis, das {@1} noch nicht übersteigt.",
  "Hľadáš {@0} číslo, ty si zostavil {@1}.": "Du suchst die {@0} Zahl, du hast aber die {@1} gebildet.",
  "Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.": "Es ist umgekehrt: Der Durchmesser ist das Doppelte des Radius, $d = 2\\cdot r$.",
  "Je číslo ${@0}$ deliteľné číslom {@1}?": "Ist die Zahl ${@0}$ durch {@1} teilbar?",
  "Je číslo ${@0}$ párne alebo nepárne?": "Ist die Zahl ${@0}$ gerade oder ungerade?",
  "Jeden deň má 24 hodín.": "Ein Tag hat 24 Stunden.",
  "Jedna časť je {@0}. Koľko je ${@1}$ z čísla {@2}?": "Ein Teil ist {@0}. Wie viel ist ${@1}$ von {@2}?",
  "Koľko eur je {@0} z {@1} eur?": "Wie viele Euro sind {@0} von {@1} Euro?",
  "Koľko eur má mladší brat?": "Wie viele Euro hat der jüngere Bruder?",
  "Koľko eur má starší brat?": "Wie viele Euro hat der ältere Bruder?",
  "Koľko eur zostane, keď od súčtu {@0} odčítaš rozdiel {@1}?": "Wie viele Euro bleiben, wenn du von der Summe {@0} den Unterschied {@1} abziehst?",
  "Koľko eur {@0} spolu?": "Wie viele Euro {@0} insgesamt aus?",
  "Koľko eur {@0} zostalo?": "Wie viele Euro sind {@0} geblieben?",
  "Koľko gramov váži celý koláč?": "Wie viele Gramm wiegt der ganze Kuchen?",
  "Koľko hodín majú {@0} {@1} a {@2} {@3}?": "Wie viele Stunden haben {@0} {@1} und {@2} {@3}?",
  "Koľko hodín majú {@0} {@1}?": "Wie viele Stunden haben {@0} {@1}?",
  "Koľko je ${@0}$ z čísla {@1}?": "Wie viel ist ${@0}$ von {@1}?",
  "Koľko je polovica obvodu, teda $a + b$?": "Wie viel ist der halbe Umfang, also $a + b$?",
  "Koľko kilometrov meria celá cesta?": "Wie viele Kilometer misst der ganze Weg?",
  "Koľko kilometrov prešli druhý deň?": "Wie viele Kilometer sind sie am zweiten Tag gegangen?",
  "Koľko kilometrov prešli tretí deň?": "Wie viele Kilometer sind sie am dritten Tag gegangen?",
  "Koľko kilometrov prešli za tri dni spolu?": "Wie viele Kilometer sind sie in den drei Tagen insgesamt gegangen?",
  "Koľko litrov sa zmestí do celej nádrže?": "Wie viele Liter passen in den ganzen Tank?",
  "Koľko minút trvala celá cesta?": "Wie viele Minuten dauerte die ganze Fahrt?",
  "Koľko minút uplynie od {@0} do {@1}?": "Wie viele Minuten vergehen von {@0} bis {@1}?",
  "Koľko násobkov čísla {@0} leží medzi číslami 1 a {@1} (vrátane)?": "Wie viele Vielfache von {@0} liegen zwischen 1 und {@1} (einschließlich)?",
  "Koľko rokov bude mať {@0} o {@1} {@2}?": "Wie alt wird {@0} {@1} {@2} später sein?",
  "Koľko rokov má {@0} teraz?": "Wie alt ist {@0} jetzt?",
  "Koľko úsečiek určuje {@0} bodov, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "Wie viele Strecken bestimmen {@0} Punkte, von denen keine drei auf einer Geraden liegen? (Je zwei Punkte verbinden wir mit einer Strecke.)",
  "Koľko úsečiek určujú {@0} body, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "Wie viele Strecken bestimmen {@0} Punkte, von denen keine drei auf einer Geraden liegen? (Je zwei Punkte verbinden wir mit einer Strecke.)",
  "Koľkokrát treba vziať {@0}, aby vyšlo {@1}?": "Wie oft muss man {@0} nehmen, damit {@1} herauskommt?",
  "Kruh je kružnica aj s celou vnútornou časťou.": "Eine Kreisfläche ist eine Kreislinie zusammen mit ihrem ganzen Inneren.",
  "Kružnica je len čiara, kruh je aj plocha vnútri.": "Eine Kreislinie ist nur eine Linie, eine Kreisfläche ist auch die Fläche innen.",
  "Kružnica má polomer ${@0}\\,\\text{{@1}}$. Aký má priemer (v {@2})?": "Ein Kreis hat den Radius ${@0}\\,\\text{{@1}}$. Wie groß ist sein Durchmesser (in {@2})?",
  "Kružnica má priemer ${@0}\\,\\text{{@1}}$. Aký má polomer (v {@2})?": "Ein Kreis hat den Durchmesser ${@0}\\,\\text{{@1}}$. Wie groß ist sein Radius (in {@2})?",
  "Ktorá číslica stojí v čísle ${@0}$ hneď vpravo od rádu {@1}?": "Welche Ziffer steht in der Zahl ${@0}$ direkt rechts von der Stelle der {@1}?",
  "Ktoré dve čísla dajú spolu $1\\,000$?": "Welche zwei Zahlen ergeben zusammen $1\\,000$?",
  "Ktoré dve čísla dajú spolu pekný súčin 100?": "Welche zwei Zahlen ergeben zusammen das schöne Produkt 100?",
  "Ktoré je {@0} prirodzené číslo, ktoré sa po zaokrúhlení na {@1} rovná ${@2}$?": "Welches ist die {@0} natürliche Zahl, die gerundet auf {@1} gleich ${@2}$ ist?",
  "Ktoré z čísel je násobkom čísla {@0}?": "Welche der Zahlen ist ein Vielfaches von {@0}?",
  "Ktoré z čísel je {@0}?": "Welche der Zahlen ist die {@0}?",
  "Ktorý je najväčší násobok čísla {@0}, ktorý nie je väčší ako {@1}?": "Welches ist das größte Vielfache von {@0}, das nicht größer als {@1} ist?",
  "Ktorý zápis čísla ${@0}$ rímskymi číslicami je správny?": "Welche Schreibweise der Zahl ${@0}$ in römischen Zahlzeichen ist richtig?",
  "Mama": "Mama",
  "Menovatele sú rovnaké, rozhoduje čitateľ: ${@0} {@1} {@2}$.": "Die Nenner sind gleich, der Zähler entscheidet: ${@0} {@1} {@2}$.",
  "Meníš na menšiu jednotku, preto násob.": "Du rechnest in eine kleinere Einheit um, deshalb multipliziere.",
  "Meníš na väčšiu jednotku, preto deľ.": "Du rechnest in eine größere Einheit um, deshalb dividiere.",
  "Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.": "Den Subtrahenden findest du nicht durch Addieren. Ziehe vom Minuenden die Differenz ab.",
  "Menšiteľ zistíme odčítaním: ${@0} - {@1} = {@2}$.": "Den Subtrahenden finden wir durch Subtrahieren: ${@0} - {@1} = {@2}$.",
  "Minul": "Er gab",
  "Minula": "Sie gab",
  "Mladší má {@0} {@1}.": "Der Jüngere hat {@0} {@1}.",
  "Na ${@0}$ sa zaokrúhľujú čísla od ${@1}$ (nahor) po ${@2}$ (nadol). {@3} je ${@4}$.": "Auf ${@0}$ werden die Zahlen von ${@1}$ (aufgerundet) bis ${@2}$ (abgerundet) gerundet. {@3} ist ${@4}$.",
  "Na farme nazbierali {@0} {@1}. Do jedného obalu sa zmestí {@2} vajec. Koľko obalov potrebujú na všetky vajcia?": "Auf dem Bauernhof wurden {@0} {@1} gesammelt. In einen Karton passen {@2} Eier. Wie viele Kartons braucht man für alle Eier?",
  "Na menšiu jednotku násobíme, na väčšiu jednotku delíme.": "In eine kleinere Einheit multiplizieren wir, in eine größere Einheit dividieren wir.",
  "Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.": "An die Tausenderstelle setze die kleinste Ziffer, die nicht 0 ist.",
  "Na výlet ide {@0} {@1}. Do jednej lodičky sa {@2} {@3} {@4}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?": "Auf den Ausflug fahren {@0} {@1}. In ein Boot passen {@3} {@4}. Wie viele Boote braucht man, damit alle Kinder gleichzeitig fahren können?",
  "Na zvyšok treba ešte jeden obal, spolu {@0} {@1}.": "Für den Rest braucht man noch einen Karton, zusammen {@0} {@1}.",
  "Na zvyšok treba ešte jednu lodičku, spolu {@0} {@1}.": "Für den Rest braucht man noch ein Boot, zusammen {@0} {@1}.",
  "Najmenšie": "Die kleinste",
  "Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.": "Rechne zuerst bis zur vollen Stunde, dann addiere den Rest. Eine Stunde hat 60 Minuten.",
  "Najprv preveď obe čísla na arabské číslice, potom sčítaj.": "Wandle zuerst beide Zahlen in arabische Ziffern um, dann addiere.",
  "Najprv rovnaké jednotky: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Potom $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.": "Zuerst gleiche Einheiten: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Dann $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.",
  "Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.": "Berechne zuerst den Teil vom ganzen Betrag, dann addiere alle Ausgaben und ziehe sie ab.",
  "Najprv zaokrúhli každé číslo na stovky, až potom počítaj.": "Runde zuerst jede Zahl auf Hunderter, erst dann rechne.",
  "Najprv zisti vek {@0} teraz z údaju {@1} {@2}, až potom pripočítaj {@3}. {@4} o {@5} {@6} už nebude {@7} {@8}.": "Bestimme zuerst das jetzige Alter {@0} aus der Angabe {@1} {@2}, erst dann addiere {@3}. {@4} wird {@5} {@6} später nicht mehr {@7} so alt sein.",
  "Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.": "Finde zuerst heraus, wie viel ein Teil ist (durch den Nenner teilen), dann multipliziere mit dem Zähler.",
  "Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.": "Finde zuerst heraus, wie alt das Kind jetzt ist (Division), dann addiere.",
  "Najprv zátvorka, potom násobenie, nakoniec odčítanie.": "Zuerst die Klammer, dann die Multiplikation, zuletzt die Subtraktion.",
  "Najväčšia číslica patrí na miesto tisícov.": "Die größte Ziffer gehört an die Tausenderstelle.",
  "Najväčšie": "Die größte",
  "Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.": "Zeichne ein Streckenmodell. Ziehe den Unterschied von der Summe ab – den Rest teilen die Brüder gerecht.",
  "Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.": "Du hast nur die Ziffer selbst geschrieben. Der Wert einer Ziffer hängt von ihrer Stelle ab – ergänze dahinter die richtige Anzahl Nullen.",
  "Napíš všetky delitele čísla {@0}. Oddeľ ich bodkočiarkou.": "Schreibe alle Teiler der Zahl {@0} auf. Trenne sie durch Semikolons.",
  "Napíš {@0} čísla ${@1}$.": "Schreibe den {@0} der Zahl ${@1}$.",
  "Nasledovník je o 1 väčší: ${@0} + 1 = {@1}$.": "Der Nachfolger ist um 1 größer: ${@0} + 1 = {@1}$.",
  "Nasledovník je číslo o 1 väčšie.": "Der Nachfolger ist die Zahl, die um 1 größer ist.",
  "Neznámy delenec zistíme násobením: ${@0}\\cdot {@1} = {@2}$.": "Den unbekannten Dividenden finden wir durch Multiplizieren: ${@0}\\cdot {@1} = {@2}$.",
  "Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.": "Den unbekannten Dividenden findest du durch Multiplizieren, nicht durch Dividieren: Multipliziere den Quotienten mit dem Divisor.",
  "Neznámy činiteľ zistíme delením: ${@0} : {@1} = {@2}$.": "Den unbekannten Faktor finden wir durch Dividieren: ${@0} : {@1} = {@2}$.",
  "Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.": "Den unbekannten Faktor findest du durch Dividieren, nicht durch Multiplizieren: Dividiere das Produkt durch den bekannten Faktor.",
  "Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.": "Einige Strecken hast du doppelt gezählt. Die Strecke AB ist dieselbe wie BA – zähle jedes Punktepaar nur einmal.",
  "Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.": "Finde die Stelle, auf die du rundest, und gehe eine Stelle nach rechts.",
  "Násobky: {@0}, {@1}, {@2}, …, {@3}. Posledný je ${@4}\\cdot {@5} = {@6}$, ďalší ${@7}$ je už väčší ako {@8}. Je ich {@9}.": "Vielfache: {@0}, {@1}, {@2}, …, {@3}. Das letzte ist ${@4}\\cdot {@5} = {@6}$, das nächste ${@7}$ ist schon größer als {@8}. Es sind {@9}.",
  "Obdĺžnik má dve dvojice rovnakých strán.": "Ein Rechteck hat zwei Paare gleicher Seiten.",
  "Obdĺžnik má obvod ${@0}\\,\\text{{@1}}$ a jednu stranu ${@2}\\,\\text{{@3}}$. Aká dlhá je druhá strana (v {@4})?": "Ein Rechteck hat den Umfang ${@0}\\,\\text{{@1}}$ und eine Seite ${@2}\\,\\text{{@3}}$. Wie lang ist die andere Seite (in {@4})?",
  "Obdĺžnik má strany ${@0}\\,\\text{dm}$ a ${@1}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.": "Ein Rechteck hat die Seiten ${@0}\\,\\text{dm}$ und ${@1}\\,\\text{cm}$. Berechne seinen Umfang in Zentimetern.",
  "Obvod je dvojnásobok súčtu dvoch susedných strán.": "Der Umfang ist das Doppelte der Summe zweier benachbarter Seiten.",
  "Obvod obdĺžnika je $2\\cdot(a + b)$.": "Der Umfang eines Rechtecks ist $2\\cdot(a + b)$.",
  "Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.": "Der Umfang enthält jede Seite zweimal. Teile ihn zuerst durch zwei, erst dann ziehe die bekannte Seite ab.",
  "Obvod štvorca, obdĺžnika a trojuholníka": "Umfang von Quadrat, Rechteck und Dreieck",
  "Od obvodu odčítaj dĺžky známych strán.": "Ziehe vom Umfang die Längen der bekannten Seiten ab.",
  "Od obvodu {@0} odčítaj {@1}.": "Ziehe vom Umfang {@0} die Zahl {@1} ab.",
  "Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.": "Du hast den Unterschied richtig von der Summe abgezogen, aber den Rest müssen die Brüder noch in zwei gleiche Teile teilen.",
  "Od súčtu {@0} odčítaj známu stranu {@1}.": "Ziehe von der Summe {@0} die bekannte Seite {@1} ab.",
  "Od {@0} do {@1} je {@2} min, od {@3} do {@4} je {@5} min. Spolu ${@6} + {@7} = {@8}$ minút.": "Von {@0} bis {@1} sind es {@2} min, von {@3} bis {@4} sind es {@5} min. Zusammen ${@6} + {@7} = {@8}$ Minuten.",
  "Od {@0} do {@1} uplynulo {@2} minút.": "Von {@0} bis {@1} vergingen {@2} Minuten.",
  "Odčítaj": "Subtrahiere",
  "Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.": "Du hast nur eine Seite abgezogen. Ziehe vom Umfang beide bekannten Seiten ab.",
  "Odčítal si iba peniaze za hru. Nezabudni odčítať aj {@0} {@1} za knihu.": "Du hast nur das Geld für das Spiel abgezogen. Vergiss nicht, auch {@0} {@1} für das Buch abzuziehen.",
  "Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to {@0} všetkých peňazí.": "Du hast nur das Geld für das Buch abgezogen. Ziehe auch den Betrag für das Spiel ab – das ist {@0} des ganzen Geldes.",
  "Osmina": "Ein Achtel",
  "Otec": "Papa",
  "Podiel vynásob deliteľom.": "Multipliziere den Quotienten mit dem Divisor.",
  "Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.": "Der Radius ist kürzer als der Durchmesser, deshalb muss man den Durchmesser durch zwei teilen, nicht multiplizieren.",
  "Polovica": "Die Hälfte",
  "Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.": "Der halbe Umfang ist die Summe der beiden benachbarten Seiten. Ziehe davon noch die bekannte Seite ab.",
  "Polovica obvodu obdĺžnika je súčet dvoch susedných strán.": "Der halbe Umfang eines Rechtecks ist die Summe zweier benachbarter Seiten.",
  "Polovicu": "Die Hälfte",
  "Polpriamka má jeden začiatočný bod.": "Ein Strahl hat einen Anfangspunkt.",
  "Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.": "Ein Strahl hat einen Anfang in einem Punkt und geht nur in eine Richtung ohne Ende weiter.",
  "Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.": "Ein Strahl beginnt in einem Punkt und geht in die andere Richtung ohne Ende weiter.",
  "Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…": "Benenne die Punkte mit Buchstaben und schreibe systematisch alle Paare auf: zuerst mit dem Punkt A, dann mit dem Punkt B …",
  "Poradie operácií": "Reihenfolge der Rechenarten",
  "Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.": "Vergleiche die Ziffern von links, bis du die erste verschiedene findest.",
  "Posledná číslica je {@0}, je párna.": "Die letzte Ziffer ist {@0}, sie ist gerade.",
  "Posledná číslica je {@0}, nie je 0 ani 5.": "Die letzte Ziffer ist {@0}, sie ist weder 0 noch 5.",
  "Posledná číslica je {@0}, nie je 0.": "Die letzte Ziffer ist {@0}, sie ist nicht 0.",
  "Posledná číslica je {@0}, nie je párna.": "Die letzte Ziffer ist {@0}, sie ist nicht gerade.",
  "Posledná číslica je {@0}, preto je číslo {@1}.": "Die letzte Ziffer ist {@0}, deshalb ist die Zahl {@1}.",
  "Posledná číslica je {@0}.": "Die letzte Ziffer ist {@0}.",
  "Poznáš {@0}, celok je teda väčší. Časť treba násobiť, nie deliť.": "Du kennst {@0}, das Ganze ist also größer. Den Teil muss man multiplizieren, nicht dividieren.",
  "Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.": "Achtung, ein größerer Nenner bedeutet keinen größeren Bruch. Je mehr Teile du aus dem Ganzen machst, desto kleiner sind die Teile.",
  "Pozri sa iba na poslednú číslicu.": "Schau nur auf die letzte Ziffer.",
  "Pozri sa na poslednú číslicu.": "Schau auf die letzte Ziffer.",
  "Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Schau auf die Ziffer direkt rechts von der Stelle, auf die du rundest: 0 – 4 abrunden, 5 – 9 aufrunden.",
  "Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.": "Schau genau hin: Beide Brüche haben denselben Zähler und denselben Nenner.",
  "Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob {@0} výsledkom zátvorky, až potom odčítaj od {@1}.": "Du hast von links nach rechts gerechnet. Punktrechnung geht vor Strichrechnung: Multipliziere zuerst {@0} mit dem Ergebnis der Klammer, erst dann ziehe es von {@1} ab.",
  "Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: ${@0}\\cdot {@1}$ vypočítaj skôr, ako budeš sčítať.": "Du hast von links nach rechts gerechnet. Punktrechnung geht vor Strichrechnung: Rechne ${@0}\\cdot {@1}$ aus, bevor du addierst.",
  "Počítal si, akoby tam zátvorka nebola. Číslo {@0} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.": "Du hast gerechnet, als gäbe es die Klammer nicht. Die Zahl {@0} multipliziert die ganze Differenz in der Klammer – rechne die Klammer zuerst aus.",
  "Predchodca je o 1 menší: ${@0} - 1 = {@1}$.": "Der Vorgänger ist um 1 kleiner: ${@0} - 1 = {@1}$.",
  "Predchodca je číslo o 1 menšie.": "Der Vorgänger ist die Zahl, die um 1 kleiner ist.",
  "Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).": "Stell dir den Gegenstand vor und vergleiche ihn mit etwas, das du kennst (zum Beispiel 1 kg Mehl, 1 m – ein großer Schritt, 1 l – eine Flasche).",
  "Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.": "Du hast die Stunden nur in Minuten umgerechnet. Jede Minute hat noch 60 Sekunden.",
  "Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.": "Du hast die Sekunden nur in Minuten umgerechnet. Eine Stunde hat 60 Minuten, deshalb dividiere noch durch sechzig.",
  "Premeň ${@0}\\,\\text{dm}$ na centimetre.": "Rechne ${@0}\\,\\text{dm}$ in Zentimeter um.",
  "Premeň ${@0}\\,\\text{{@1}}$ na {@2}.": "Rechne ${@0}\\,\\text{{@1}}$ in {@2} um.",
  "Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.": "Rechne die Dezimeter in Zentimeter um ($1\\,\\text{dm} = 10\\,\\text{cm}$) und rechne erst dann.",
  "Prevody jednotiek dĺžky, hmotnosti, objemu a času": "Umrechnen von Einheiten der Länge, Masse, des Volumens und der Zeit",
  "Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.": "Bei der Teilbarkeit durch drei entscheidet nicht die letzte Ziffer. Addiere alle Ziffern und prüfe, ob die Quersumme durch drei teilbar ist.",
  "Pri deliteľnosti číslom {@0} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.": "Bei der Teilbarkeit durch {@0} entscheidet nur die letzte Ziffer. Schau sie dir noch einmal an und vergleiche sie mit der Teilbarkeitsregel.",
  "Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.": "Bei der Zeit rechnet man nicht in Zehnerschritten um: Eine Stunde hat 60 Minuten und eine Minute 60 Sekunden.",
  "Pri čase sa nepremieňa po stovkách: 1 {@0} = 60 {@1}, preto deľ šesťdesiatimi.": "Bei der Zeit rechnet man nicht mit Hundert um: 1 {@0} = 60 {@1}, deshalb dividiere durch sechzig.",
  "Priamka je nekonečná na obe strany.": "Eine Gerade ist nach beiden Seiten unendlich.",
  "Priamka má začiatok aj koniec.": "Eine Gerade hat einen Anfang und ein Ende.",
  "Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.": "Eine Gerade hat kein Ende, ein Strahl hat einen Anfang, eine Strecke hat einen Anfang und ein Ende.",
  "Priamka nemá koniec, preto nemá ani dĺžku.": "Eine Gerade hat kein Ende, deshalb hat sie auch keine Länge.",
  "Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.": "Eine Gerade hat weder Anfang noch Ende – auf beiden Seiten würde sie mit einer gestrichelten Linie weitergehen.",
  "Priamka, polpriamka, úsečka a kružnica": "Gerade, Strahl, Strecke und Kreis",
  "Priamku môžeme odmerať pravítkom.": "Eine Gerade können wir mit dem Lineal messen.",
  "Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.": "Der Durchmesser ist länger als der Radius, deshalb muss man den Radius mit zwei multiplizieren, nicht dividieren.",
  "Priemer je dvakrát dlhší ako polomer.": "Der Durchmesser ist doppelt so lang wie der Radius.",
  "Priemer kružnice je polovica polomeru.": "Der Durchmesser eines Kreises ist die Hälfte des Radius.",
  "Pripočítaj": "Addiere",
  "Pripočítaj ešte {@0} {@1}: ${@2} + {@3}$.": "Addiere noch {@0} {@1}: ${@2} + {@3}$.",
  "Pripočítaj {@0} {@1}: ${@2} + {@3}$.": "Addiere {@0} {@1}: ${@2} + {@3}$.",
  "Pätina": "Ein Fünftel",
  "Pätinu": "Ein Fünftel",
  "Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.": "Gleicher Nenner: Vergleiche die Zähler. Gleicher Zähler: Ein kleinerer Nenner bedeutet größere Teile.",
  "Rovnostranný trojuholník má 3 rovnaké strany.": "Ein gleichseitiges Dreieck hat 3 gleiche Seiten.",
  "Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel {@0} {@1}.": "Du hast die Summe in zwei gleiche Teile geteilt, aber die Brüder haben nicht gleich viel. Ziehe zuerst von der Summe den Unterschied {@0} {@1} ab.",
  "Rozdelíme po rádoch: {@0}. Spolu ${@1} = {@2}$.": "Wir zerlegen nach Stellen: {@0}. Zusammen ${@1} = {@2}$.",
  "Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.": "Teile die Schreibweise in Gruppen der Tausender, Hunderter, Zehner und Einer. Paare wie CM, XC, IV bedeuten Subtraktion.",
  "Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.": "Entscheidend ist die Ziffer rechts von der Stelle: Bei 5 und mehr wird aufgerundet, bei 4 und weniger abgerundet.",
  "Rozložíme po rádoch: {@0}.": "Wir zerlegen nach Stellen: {@0}.",
  "Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…": "Zähle die Stellen von rechts: An der letzten Stelle stehen die Einer, davor die Zehner, Hunderter, Tausender …",
  "Rímske číslice s odčítaním": "Römische Zahlzeichen mit Subtraktion",
  "S = stovky, D = desiatky, J = jednotky danej triedy": "H = Hunderter, Z = Zehner, E = Einer der jeweiligen Klasse",
  "Skús deliť: ${@0} : {@1} = {@2}$, zvyšok {@3}. Násobok čísla {@4} sa dá vydeliť bez zvyšku.": "Versuche zu dividieren: ${@0} : {@1} = {@2}$, Rest {@3}. Ein Vielfaches von {@4} lässt sich ohne Rest teilen.",
  "Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je {@0}.": "Probiere, durch 1, 2, 3, … zu teilen, und suche Paare, deren Produkt {@0} ist.",
  "Spolu {@0} {@1}.": "Zusammen {@0} {@1}.",
  "Spomeň si na malú násobilku čísla {@0}.": "Denk an das kleine Einmaleins von {@0}.",
  "Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.": "Berechne den Wert dieser Schreibweise – ein kleineres Zeichen hinter einem größeren wird addiert, also kommt eine andere Zahl heraus.",
  "Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.": "Zähle alle Teile – das ist der Nenner. Dann zähle die eingefärbten Teile – das ist der Zähler.",
  "Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.": "Du hast die nicht eingefärbten Teile gezählt. Der Zähler gibt an, wie viele Teile eingefärbt sind.",
  "Správne je {@0}: {@1}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.": "Richtig ist {@0}: {@1}. Die anderen Schreibweisen verletzen die Regeln oder haben einen anderen Wert.",
  "Starší má ${@0} + {@1} = {@2}$ {@3}.": "Der Ältere hat ${@0} + {@1} = {@2}$ {@3}.",
  "Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.": "Die Seiten sind in verschiedenen Einheiten angegeben. Rechne zuerst die Dezimeter in Zentimeter um, erst dann addiere.",
  "Súčin vydeľ známym činiteľom.": "Dividiere das Produkt durch den bekannten Faktor.",
  "Sčítaj ${@0} + {@1}$.": "Addiere ${@0} + {@1}$.",
  "Sčítaj dve susedné strany: ${@0} + {@1}$.": "Addiere zwei benachbarte Seiten: ${@0} + {@1}$.",
  "Sčítaj dĺžky všetkých troch strán.": "Addiere die Längen aller drei Seiten.",
  "Sčítaj hodnoty skupín {@0}.": "Addiere die Werte der Gruppen {@0}.",
  "Sčítaj všetky číslice čísla.": "Addiere alle Ziffern der Zahl.",
  "Sčítaj známe strany: ${@0} + {@1}$.": "Addiere die bekannten Seiten: ${@0} + {@1}$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.": "Du hast nur zwei Seiten addiert. Ein Rechteck hat vier Seiten – zweimal die Länge $a$ und zweimal die Länge $b$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.": "Du hast nur zwei Seiten addiert. Ein Rechteck hat vier Seiten – multipliziere die Summe zweier benachbarter Seiten noch mit zwei.",
  "Sčítal si čísla v rôznych jednotkách. Najprv premeň {@0} {@1} na {@2}.": "Du hast Zahlen in verschiedenen Einheiten addiert. Rechne zuerst {@0} {@1} in {@2} um.",
  "Teraz: ${@0} : {@1} = {@2}$ {@3}. O {@4} {@5}: ${@6} + {@7} = {@8}$.": "Jetzt: ${@0} : {@1} = {@2}$ {@3}. {@4} {@5} später: ${@6} + {@7} = {@8}$.",
  "Toto je posledný násobok čísla {@0}, nie počet násobkov. Zisti, koľkokrát si musel {@1} pripočítať, aby si sa k nemu dostal.": "Das ist das letzte Vielfache von {@0}, nicht die Anzahl der Vielfachen. Finde heraus, wie oft du {@1} addieren musstest, um dorthin zu kommen.",
  "Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.": "Das ist das genaue Ergebnis. Die Aufgabe verlangt einen Überschlag: Runde zuerst beide Zahlen auf Hunderter, erst dann rechne.",
  "Toto je vek {@0} teraz. Úloha sa pýta, koľko rokov bude mať o {@1} {@2}.": "Das ist das jetzige Alter {@0}. Die Aufgabe fragt, wie alt das Kind {@1} {@2} später sein wird.",
  "Toto má {@0} brat. Pýtame sa na {@1}.": "Das hat der {@0} Bruder. Wir fragen nach dem {@1}.",
  "Tretina": "Ein Drittel",
  "Tretinu": "Ein Drittel",
  "Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.": "Am dritten Tag sind sie die Hälfte dessen gegangen, was sie am zweiten Tag gegangen sind, nicht am ersten.",
  "Triedy a rády čísla 3 042 705": "Klassen und Stellen der Zahl 3 042 705",
  "Trojuholník má iba tri strany, nie štyri.": "Ein Dreieck hat nur drei Seiten, nicht vier.",
  "Trojuholník má obvod ${@0}\\,\\text{{@1}}$. Dve jeho strany merajú ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Aká dlhá je tretia strana (v {@6})?": "Ein Dreieck hat den Umfang ${@0}\\,\\text{{@1}}$. Zwei seiner Seiten sind ${@2}\\,\\text{{@3}}$ und ${@4}\\,\\text{{@5}}$ lang. Wie lang ist die dritte Seite (in {@6})?",
  "Trojuholník má strany ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Vypočítaj jeho obvod v {@6}.": "Ein Dreieck hat die Seiten ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ und ${@4}\\,\\text{{@5}}$. Berechne seinen Umfang in {@6}.",
  "Turisti prešli prvý deň {@0} km. Druhý deň prešli o {@1} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?": "Wanderer sind am ersten Tag {@0} km gegangen. Am zweiten Tag sind sie {@1} km mehr gegangen als am ersten Tag und am dritten Tag die Hälfte dessen, was sie am zweiten Tag gegangen sind. Wie viele Kilometer sind sie in den drei Tagen gegangen?",
  "V košíku je {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "Im Korb ist {@0} {@1}. Rot sind ${@2}$ davon. Wie viele Äpfel sind rot?",
  "V košíku sú {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "Im Korb sind {@0} {@1}. Rot sind ${@2}$ davon. Wie viele Äpfel sind rot?",
  "Vlak odišiel o {@0} a do cieľa prišiel o {@1}. Koľko minút trvala cesta?": "Ein Zug fuhr um {@0} ab und kam um {@1} am Ziel an. Wie viele Minuten dauerte die Fahrt?",
  "Vyber správny údaj: {@0} …": "Wähle die richtige Angabe: {@0} …",
  "Vydeľ ${@0} : {@1}$.": "Dividiere ${@0} : {@1}$.",
  "Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.": "Dividiere und schau auf den Rest. Wenn etwas übrig bleibt, brauchst du noch einen zusätzlich.",
  "Vydeľ {@0} menovateľom {@1}.": "Dividiere {@0} durch den Nenner {@1}.",
  "Vydeľ číslo menovateľom a výsledok vynásob čitateľom.": "Dividiere die Zahl durch den Nenner und multipliziere das Ergebnis mit dem Zähler.",
  "Vynásob ${@0}\\cdot {@1}$.": "Multipliziere ${@0}\\cdot {@1}$.",
  "Vynásob {@0} čitateľom {@1}.": "Multipliziere {@0} mit dem Zähler {@1}.",
  "Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.": "Du hast die Seite mit sich selbst multipliziert – das ist der Flächeninhalt des Quadrats. Der Umfang ist die Summe der Längen aller vier Seiten.",
  "Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.": "Du hast die Seiten multipliziert – das ist der Flächeninhalt, nicht der Umfang. Der Umfang ist die Summe der Längen aller Seiten.",
  "Vypočítaj $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.": "Berechne $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.",
  "Vypočítaj ${@0} - {@1}\\cdot({@2} - {@3})$.": "Berechne ${@0} - {@1}\\cdot({@2} - {@3})$.",
  "Vypočítaj ${@0}\\cdot 100$.": "Berechne ${@0}\\cdot 100$.",
  "Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{{@0}} + \\text{{@1}}$": "Berechne und schreibe das Ergebnis in arabischen Ziffern: $\\text{{@0}} + \\text{{@1}}$",
  "Vypočítaj obvod obdĺžnika so stranami $a = {@0}\\,\\text{{@1}}$ a $b = {@2}\\,\\text{{@3}}$ (v {@4}).": "Berechne den Umfang eines Rechtecks mit den Seiten $a = {@0}\\,\\text{{@1}}$ und $b = {@2}\\,\\text{{@3}}$ (in {@4}).",
  "Vypočítaj obvod rovnostranného trojuholníka so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Berechne den Umfang eines gleichseitigen Dreiecks mit der Seite ${@0}\\,\\text{{@1}}$ (in {@2}).",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Berechne den Umfang eines Quadrats mit der Seite ${@0}\\,\\text{{@1}}$ (in {@2}).",
  "Vypočítaj postupne každý deň a nakoniec všetko sčítaj.": "Berechne nacheinander jeden Tag und addiere zum Schluss alles.",
  "Vypočítaj výhodne $125\\cdot {@0}\\cdot 8$.": "Berechne geschickt $125\\cdot {@0}\\cdot 8$.",
  "Vypočítaj výhodne $25\\cdot {@0}\\cdot 4$.": "Berechne geschickt $25\\cdot {@0}\\cdot 4$.",
  "Vypočítaj výhodne ${@0}\\cdot {@1}$.": "Berechne geschickt ${@0}\\cdot {@1}$.",
  "Vypočítaj zátvorku ${@0} + {@1}$.": "Berechne die Klammer ${@0} + {@1}$.",
  "Vypočítaj zátvorku ${@0} - {@1}$.": "Berechne die Klammer ${@0} - {@1}$.",
  "Vypočítal si iba ${@0}$, teda jeden diel. Ešte ho vynásob čitateľom {@1}.": "Du hast nur ${@0}$ berechnet, also einen Teil. Multipliziere ihn noch mit dem Zähler {@1}.",
  "Vyučovacia hodina trvá": "Eine Schulstunde dauert",
  "Vzdialenosť z Bratislavy do Košíc je asi": "Die Entfernung von Bratislava nach Kosice beträgt etwa",
  "Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.": "Rechne die größere Einheit in die kleinere um und addiere dann den zweiten Teil.",
  "Výška dospelého človeka je asi": "Die Körpergröße eines Erwachsenen beträgt etwa",
  "Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.": "Du hast alle Zeichen addiert. Ein kleineres Zeichen vor einem größeren wird aber subtrahiert: zum Beispiel ist IX 9, nicht 11.",
  "Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. {@0} je ${@1}$.": "Alle Zahlen haben gleich viele Ziffern, deshalb vergleichen wir sie von links. {@0} ist ${@1}$.",
  "Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.": "Achte darauf, ob die Linie einen Anfang, ein Ende oder keins von beiden hat.",
  "Z číslic {@0} zostav {@1} štvorciferné číslo. Každú číslicu použi práve raz.": "Bilde aus den Ziffern {@0} die {@1} vierstellige Zahl. Verwende jede Ziffer genau einmal.",
  "Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.": "Du hast den dritten Tag vergessen. Die Aufgabe fragt nach allen drei Tagen.",
  "Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš {@0}.": "Du hast die Begriffe verwechselt: Der Nachfolger ist um 1 größer, der Vorgänger um 1 kleiner. Du suchst den {@0}.",
  "Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Du hast die Rollen von Zähler und Nenner vertauscht: Dividiere die Zahl durch den Nenner und multipliziere das Ergebnis mit dem Zähler.",
  "Zaokrúhli ${@0}$ na stovky.": "Runde ${@0}$ auf Hunderter.",
  "Zaokrúhli obe čísla na stovky a odhadni výsledok: ${@0} {@1} {@2}$.": "Runde beide Zahlen auf Hunderter und überschlage das Ergebnis: ${@0} {@1} {@2}$.",
  "Zaokrúhli číslo ${@0}$ na {@1}.": "Runde die Zahl ${@0}$ auf {@1}.",
  "Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.": "Du hast erst das Ergebnis gerundet. Beim Überschlag runde zuerst jede Zahl einzeln und rechne dann mit den gerundeten Zahlen.",
  "Zaokrúhlil si na iný rád. Na {@0} znamená, že všetky číslice vpravo od rádu {@1} nahradíš nulami.": "Du hast auf eine andere Stelle gerundet. Auf {@0} bedeutet, dass du alle Ziffern rechts von der Stelle der {@1} durch Nullen ersetzt.",
  "Zaokrúhľovanie na číselnej osi": "Runden auf dem Zahlenstrahl",
  "Zapíš rímskymi číslicami číslo ${@0}$.": "Schreibe die Zahl ${@0}$ in römischen Zahlzeichen.",
  "Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.": "Schreibe Tausender, Hunderter, Zehner und Einer getrennt. Denk daran: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.",
  "Zisti, koľkokrát sa {@0} celé zmestí do {@1}.": "Finde heraus, wie oft {@0} ganz in {@1} passt.",
  "Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).": "Finde heraus, an welcher Stelle die Ziffer steht (Einer, Zehner, Hunderter, Tausender …).",
  "Zlomky na koláčoch a páse": "Brüche an Kuchen und Streifen",
  "Zlomky nie sú rovnaké – porovnaj ich menovatele.": "Die Brüche sind nicht gleich – vergleiche ihre Nenner.",
  "Zlomky nie sú rovnaké – porovnaj ich čitatele.": "Die Brüche sind nicht gleich – vergleiche ihre Zähler.",
  "Zlomky sú rovnaké.": "Die Brüche sind gleich.",
  "Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.": "Das Zeichen ist verkehrt herum. Bei gleichem Nenner ist der Bruch größer, der den größeren Zähler hat.",
  "Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.": "Ein Zeichen darf sich nicht viermal wiederholen, und subtrahieren dürfen wir nur I vor V und X, X vor L und C, C vor D und M.",
  "Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.": "Die Zeichen I, X, C dürfen sich nicht viermal hintereinander wiederholen. Für 4, 9, 40, 90, 400 und 900 verwende die Schreibweise mit Subtraktion.",
  "Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.": "Die Zeichen I, X, C, M dürfen höchstens dreimal hintereinander stehen. Statt vier gleicher Zeichen verwende die Subtraktion.",
  "Zvyšok sa delí na dve rovnaké časti.": "Der Rest wird in zwei gleiche Teile geteilt.",
  "Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.": "Die Klammer hat Vorrang. Dann Division und Multiplikation, die Addition erst am Schluss.",
  "Zátvorka: ${@0} + {@1} = {@2}$. Delenie a násobenie: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Sčítanie: ${@9} + {@10} = {@11}$.": "Klammer: ${@0} + {@1} = {@2}$. Division und Multiplikation: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Addition: ${@9} + {@10} = {@11}$.",
  "Zátvorka: ${@0} - {@1} = {@2}$. Násobenie: ${@3}\\cdot {@4} = {@5}$. Odčítanie: ${@6} - {@7} = {@8}$.": "Klammer: ${@0} - {@1} = {@2}$. Multiplikation: ${@3}\\cdot {@4} = {@5}$. Subtraktion: ${@6} - {@7} = {@8}$.",
  "cesty": "des Weges",
  "dcéra": "die Tochter",
  "dcére": "die Tochter",
  "dcéry": "der Tochter",
  "delitele čísla 12: 1, 2, 3, 4, 6, 12": "Teiler der Zahl 12: 1, 2, 3, 4, 6, 12",
  "desatina": "ein Zehntel",
  "desatinu": "ein Zehntel",
  "desatiny": "ein Zehntel",
  "dni": "Tage",
  "dní": "Tage",
  "euro": "Euro",
  "hodinu": "Stunde",
  "koláč": "Kuchen",
  "koláča": "des Kuchens",
  "lodičiek": "Boote",
  "lodičky": "Boote",
  "menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M": "ein kleineres Zeichen vor einem größeren wird subtrahiert – nur I vor V, X; X vor L, C; C vor D, M",
  "meria": "misst",
  "miliónov": "Millionen",
  "milióny": "Millionen",
  "minul": "gab er",
  "minula": "gab sie",
  "mladšieho": "jüngeren",
  "mladší": "jüngere",
  "nadol": "ab",
  "nahor": "auf",
  "najmenšie": "kleinste",
  "najväčšie": "größte",
  "napr. 1; 2; 4": "z. B. 1; 2; 4",
  "napr. 2/5": "z. B. 2/5",
  "napr. MCMXC": "z. B. MCMXC",
  "nasledovníka": "Nachfolger",
  "nepárne": "ungerade",
  "nie": "nein",
  "nádrže": "des Tanks",
  "obalov": "Kartons",
  "obaly": "Kartons",
  "odčítaj": "subtrahiere",
  "odčítaš": "subtrahierst",
  "osmina": "ein Achtel",
  "osminu": "ein Achtel",
  "osminy": "ein Achtel",
  "polovica": "die Hälfte",
  "polovice": "die Hälfte",
  "polovicu": "die Hälfte",
  "polpriamka": "Strahl",
  "polpriamka AB": "Strahl AB",
  "predchodcu": "Vorgänger",
  "priamka AB": "Gerade AB",
  "priemer d = 2 · r": "Durchmesser d = 2 · r",
  "pripočítaj": "addiere",
  "pripočítaš": "addierst",
  "párne": "gerade",
  "pásik": "Streifen",
  "pätina": "ein Fünftel",
  "pätinu": "ein Fünftel",
  "pätiny": "ein Fünftel",
  "päťkrát": "fünfmal",
  "rokov": "Jahre",
  "roky": "Jahre",
  "rovnaké diely": "gleiche Teile",
  "rovnakých dielov": "gleiche Teile",
  "spolu 50 €": "zusammen 50 €",
  "staršia": "älter",
  "staršieho": "älteren",
  "starší": "ältere",
  "stotisícov": "Hunderttausender",
  "syn": "der Sohn",
  "syna": "des Sohnes",
  "synovi": "der Sohn",
  "také časti": "solche Teile",
  "takých častí": "solche Teile",
  "tretina": "ein Drittel",
  "tretinu": "ein Drittel",
  "tretiny": "ein Drittel",
  "vajec": "Eier",
  "vyfarbené sú {@0}": "eingefärbt sind {@0}",
  "vyfarbený je 1": "eingefärbt ist 1",
  "vyfarbených je {@0}": "eingefärbt sind {@0}",
  "váži": "wiegt",
  "zmestia": "passen",
  "zmestí": "passt",
  "zátvorky": "Klammern",
  "zľava doprava": "von links nach rechts",
  "{@0} Preto nie, zvyšok po delení je {@1}.": "{@0} Deshalb nein, der Rest beim Teilen ist {@1}.",
  "{@0} Preto áno: ${@1} : {@2} = {@3}$.": "{@0} Deshalb ja: ${@1} : {@2} = {@3}$.",
  "{@0} ešte raz {@1}: ${@2} {@3} {@4}$.": "{@0} noch einmal {@1}: ${@2} {@3} {@4}$.",
  "{@0} je $100 {@1} 1$. Vynásob stovkou a potom {@2} číslo ešte raz.": "{@0} ist $100 {@1} 1$. Multipliziere mit hundert und {@2} dann die Zahl noch einmal.",
  "{@0} má {@1} {@2} a je {@3} {@4} ako {@5}. Koľko rokov bude {@6} o {@7} {@8}?": "{@0} ist {@1} {@2} alt und {@3} so alt wie {@5}. Wie alt wird {@6} {@7} {@8} später sein?",
  "{@0} neznamená {@1} {@2}. {@3} z {@4} vypočítaš delením: ${@5} : {@6}$.": "{@0} bedeutet nicht {@1} {@2}. {@3} von {@4} berechnest du durch Dividieren: ${@5} : {@6}$.",
  "{@0} z {@1}: ${@2} : {@3} = {@4}$. {@5} spolu ${@6} + {@7} = {@8}$. Zostalo ${@9} - {@10} = {@11}$ {@12}.": "{@0} von {@1}: ${@2} : {@3} = {@4}$. {@5} insgesamt ${@6} + {@7} = {@8}$ aus. Übrig blieben ${@9} - {@10} = {@11}$ {@12}.",
  "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}": "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}",
  "{@0} {@1} {@2} {@3}. {@4} {@5} na hru a {@6} {@7} na knihu. Koľko eur {@8} zostalo?": "{@0} {@1} {@2} {@3}. {@4} {@5} für ein Spiel aus und {@6} {@7} für ein Buch. Wie viele Euro sind {@8} geblieben?",
  "{@0} {@1} {@2}. Ostatné údaje sú príliš veľké alebo príliš malé.": "{@0} {@1} {@2}. Die anderen Angaben sind zu groß oder zu klein.",
  "Úsečka AB začína v bode A a končí v bode B.": "Die Strecke AB beginnt im Punkt A und endet im Punkt B.",
  "Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.": "Eine Strecke endet in beiden Endpunkten und geht dahinter nicht mehr weiter.",
  "Úsečka má dva krajné body.": "Eine Strecke hat zwei Endpunkte.",
  "Úsečka má konečnú dĺžku.": "Eine Strecke hat eine endliche Länge.",
  "Úsečkový model súčtu a rozdielu": "Streckenmodell für Summe und Differenz",
  "Úsečku môžeme odmerať pravítkom.": "Eine Strecke können wir mit dem Lineal messen.",
  "áno": "ja",
  "úsečka AB": "Strecke AB",
  "Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.": "Du hast die Zeiten wie gewöhnliche Zahlen subtrahiert. Eine Stunde hat aber 60 Minuten, nicht 100 – rechne zuerst bis zur vollen Stunde.",
  "Červené sú {@0} jablká": "Rot sind {@0} Äpfel",
  "Červených je {@0} jabĺk": "Rot sind {@0} Äpfel",
  "Čiara má dva krajné body A a B – je to úsečka.": "Die Linie hat zwei Endpunkte A und B – es ist eine Strecke.",
  "Čiara nemá začiatok ani koniec – je to priamka.": "Die Linie hat weder Anfang noch Ende – es ist eine Gerade.",
  "Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.": "Die Linie beginnt im Punkt A und geht in die andere Richtung weiter – es ist ein Strahl.",
  "Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: ${@0} {@1} {@2}$.": "Die Zähler sind gleich. Je mehr Teile wir aus dem Ganzen machen, desto kleiner sind die Teile: ${@0} {@1} {@2}$.",
  "Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.": "Was ist auf dem Bild? Eine gestrichelte Linie bedeutet, dass die Linie ohne Ende weitergeht.",
  "Čísla nestačí napísať vedľa seba. Najprv premeň {@0} {@1} na {@2}, potom pripočítaj {@3}.": "Es reicht nicht, die Zahlen nebeneinander zu schreiben. Rechne zuerst {@0} {@1} in {@2} um, dann addiere {@3}.",
  "Čísla si napísal vedľa seba, akoby platilo 1 {@0} = 100 {@1}. Platí však 1 {@2} = 60 {@3}.": "Du hast die Zahlen nebeneinander geschrieben, als ob 1 {@0} = 100 {@1} gälte. Es gilt aber 1 {@2} = 60 {@3}.",
  "Číslica hneď vpravo od rádu {@0} je {@1}, preto zaokrúhľujeme {@2}: ${@3} \\doteq {@4}$.": "Die Ziffer direkt rechts von der Stelle der {@0} ist {@1}, deshalb runden wir {@2}: ${@3} \\doteq {@4}$.",
  "Číslica vpravo je {@0}. Zaokrúhli ${@1}$ na {@2}.": "Die Ziffer rechts ist {@0}. Runde ${@1}$ auf {@2}.",
  "Číslica vpravo od rádu {@0} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.": "Die Ziffer rechts von der Stelle der {@0} ist 5 oder mehr – in diesem Fall wird aufgerundet.",
  "Číslica vpravo od rádu {@0} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.": "Die Ziffer rechts von der Stelle der {@0} ist kleiner als 5 – in diesem Fall wird abgerundet.",
  "Číslica {@0} stojí na mieste {@1}, preto má hodnotu ${@2}\\cdot {@3} = {@4}$.": "Die Ziffer {@0} steht an der Stelle der {@1}, deshalb hat sie den Wert ${@2}\\cdot {@3} = {@4}$.",
  "Číslice zoradíme od najmenšej, ale 0 nemôže byť na začiatku, preto ide na druhé miesto: ${@0}$.": "Wir ordnen die Ziffern von der kleinsten an, aber 0 darf nicht am Anfang stehen, deshalb kommt sie an die zweite Stelle: ${@0}$.",
  "Číslice zoradíme od najmenšej: ${@0}$.": "Wir ordnen die Ziffern von der kleinsten an: ${@0}$.",
  "Číslice zoradíme od najväčšej po najmenšiu: ${@0}$.": "Wir ordnen die Ziffern von der größten zur kleinsten: ${@0}$.",
  "Číslo": "Zahl",
  "Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.": "Eine Zahl darf nicht mit Null beginnen – sie wäre nicht vierstellig. An die erste Stelle setze die kleinste Ziffer, die nicht 0 ist.",
  "Číslo {@0} je $100 {@1} 1$, preto {@2} jedenkrát celé číslo {@3}, nie iba jednotku.": "Die Zahl {@0} ist $100 {@1} 1$, deshalb {@2} du einmal die ganze Zahl {@3}, nicht nur eine Einheit.",
  "čiara": "Linie",
  "Šestina": "Ein Sechstel",
  "Štvorec má 4 rovnaké strany.": "Ein Quadrat hat 4 gleiche Seiten.",
  "Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.": "Ein Quadrat hat vier gleiche Seiten, deshalb teile den Umfang durch vier, nicht durch zwei.",
  "Štvrtina": "Ein Viertel",
  "Štvrtinu": "Ein Viertel",
  "šestina": "ein Sechstel",
  "šestinu": "ein Sechstel",
  "šestiny": "ein Sechstel",
  "štvrtina": "ein Viertel",
  "štvrtinu": "ein Viertel",
  "štvrtiny": "ein Viertel"
 }
});
