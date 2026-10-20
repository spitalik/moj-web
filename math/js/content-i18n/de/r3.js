/* Deutsch: preklad js/rocniky/r3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/r3/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "r3-cisla1000": {
   "title": "Zahlen bis 1 000",
   "summary": "Hunderter, Zehner und Einer, Zahlenstrahl und Vergleichen dreistelliger Zahlen.",
   "theory": [
    "<p>Eine dreistellige Zahl hat <strong>Hunderter (H)</strong>, <strong>Zehner (Z)</strong> und <strong>Einer (E)</strong>.\n       Die Zahl 472 hat 4 Hunderter, 7 Zehner und 2 Einer: $472 = 400 + 70 + 2$. Zehn Hunderter sind <strong>tausend</strong>: $1\\,000$.</p>",
    {
     "fig": "r3-rad1000",
     "caption": "Zahlenstrahl von 0 bis 1 000. Die Zahl 350 liegt genau in der Mitte zwischen 300 und 400, die Zahl 720 liegt näher an 700."
    },
    "<p><strong>Vergleichen:</strong> Zuerst vergleichen wir die Hunderter, wenn sie gleich sind, die Zehner und zuletzt die Einer.\n       $538 &gt; 497$, weil 5 Hunderter mehr sind als 4. $642 &lt; 648$, weil Hunderter und Zehner gleich sind und $2 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "Vergleiche die Zahlen 806 und 860.",
     "steps": [
      "Die Hunderter sind gleich (8).",
      "Zehner: 0 und 6, null ist weniger.",
      "<strong>$806 &lt; 860$</strong>"
     ]
    },
    {
     "task": "Schreibe die Zahl, die 3 Hunderter, 0 Zehner und 9 Einer hat.",
     "steps": [
      "$300 + 0 + 9 = 309$.",
      "An der Zehnerstelle schreiben wir eine Null.",
      "<strong>Es ist die Zahl 309.</strong>"
     ]
    }
   ]
  },
  "r3-scitanie": {
   "title": "Addieren und Subtrahieren bis 1 000",
   "summary": "Im Kopf in Schritten und schriftlich untereinander.",
   "theory": [
    "<p><strong>Im Kopf</strong> rechnen wir in Schritten: $356 + 230$ = zuerst $356 + 200 = 556$, dann $556 + 30 = 586$.\n       Mit glatten Hundertern rechnen wir wie mit Einern: $400 + 500 = 900$, $800 - 300 = 500$.</p>",
    "<p><strong>Schriftlich</strong> schreiben wir die Zahlen so untereinander, dass Einer unter Einern, Zehner unter Zehnern und Hunderter unter Hundertern stehen.\n       Wir rechnen von rechts: Einer, Zehner, Hunderter. Ist die Summe an einer Stelle größer als 9, übertragen wir eine Eins an die Stelle links davon.</p>",
    {
     "fig": "r3-stlpec",
     "caption": "Schriftliche Addition $347 + 285 = 632$. Die kleinen Einsen oben sind die übertragenen Zehner und Hunderter."
    },
    "<p>Eine Subtraktion können wir immer <strong>durch Addieren überprüfen</strong>: Wenn $632 - 285 = 347$, dann muss $347 + 285 = 632$ gelten.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $468 + 275$.",
     "steps": [
      "Einer: $8 + 5 = 13$, ich schreibe 3, 1 übertragen.",
      "Zehner: $6 + 7 + 1 = 14$, ich schreibe 4, 1 übertragen.",
      "Hunderter: $4 + 2 + 1 = 7$.",
      "<strong>Ergebnis: 743</strong>"
     ]
    },
    {
     "task": "Berechne $700 - 340$.",
     "steps": [
      "$700 - 300 = 400$.",
      "$400 - 40 = 360$.",
      "Probe: $360 + 340 = 700$. <strong>Ergebnis: 360</strong>"
     ]
    }
   ]
  },
  "r3-nasobilka": {
   "title": "Multiplizieren und Dividieren",
   "summary": "Das ganze Einmaleins, Multiplizieren von Zehnern und Dividieren mit Rest.",
   "theory": [
    "<p>Das Einmaleins bis $10 \\cdot 10$ finden wir in einer Tabelle: In der Zeile steht der erste Faktor, in der Spalte der zweite, wo sie sich kreuzen, steht das Produkt.\n       Dividieren ist die Umkehrung des Multiplizierens: Aus $6 \\cdot 7 = 42$ wissen wir, dass $42 : 6 = 7$ und auch $42 : 7 = 6$.</p>",
    {
     "fig": "r3-nasobilka",
     "caption": "Einmaleins-Tabelle: Die Zeile 6 und die Spalte 7 treffen sich bei der Zahl 42, also ist $6 \\cdot 7 = 42$."
    },
    "<p><strong>Multiplizieren von Zehnern:</strong> $30 \\cdot 4$ sind 3 Zehner mal 4, also 12 Zehner, das heißt $120$.</p>",
    "<p><strong>Dividieren mit Rest:</strong> Nicht jede Division geht genau auf. $17 : 5 = 3$ <em>Rest</em> 2, weil $3 \\cdot 5 = 15$\n       und bis 17 noch 2 fehlen. Der Rest muss immer kleiner sein als der Divisor.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $8 \\cdot 7$ und $56 : 8$.",
     "steps": [
      "Aus dem Einmaleins: $8 \\cdot 7 = 56$.",
      "Dividieren ist die Umkehrung des Multiplizierens, deshalb ist $56 : 8 = 7$."
     ]
    },
    {
     "task": "Dividiere mit Rest: $29 : 4$.",
     "steps": [
      "Das größte Vielfache von 4, das nicht größer als 29 ist, ist $7 \\cdot 4 = 28$.",
      "Rest: $29 - 28 = 1$.",
      "<strong>$29 : 4 = 7$, Rest 1</strong>"
     ]
    }
   ]
  },
  "r3-zatvorky": {
   "title": "Klammern und Rechenreihenfolge",
   "summary": "Was wir zuerst rechnen: Klammern, Punktrechnung, Strichrechnung.",
   "theory": [
    "<p>In einer Aufgabe mit mehreren Rechenarten gilt diese Reihenfolge:</p>\n       <ol><li>zuerst rechnen wir aus, was in den <strong>Klammern</strong> steht,</li>\n       <li>dann <strong>Multiplizieren und Dividieren</strong> (Punktrechnung),</li>\n       <li>zuletzt <strong>Addieren und Subtrahieren</strong> (Strichrechnung, von links nach rechts).</li></ol>",
    "<p>Vergleiche: $2 + 3 \\cdot 4 = 2 + 12 = 14$, aber $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$. Klammern verändern das Ergebnis!</p>",
    "<p>Wenn nur addiert und subtrahiert wird, rechnen wir von links nach rechts: $20 - 5 - 3 = 15 - 3 = 12$. Steht aber ein Teil in Klammern,\n       rechnen wir ihn zuerst: $20 - (5 - 3) = 20 - 2 = 18$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $18 + 4 \\cdot 6$.",
     "steps": [
      "Punkt vor Strich: $4 \\cdot 6 = 24$.",
      "$18 + 24 = 42$.",
      "<strong>Ergebnis: 42</strong>"
     ]
    },
    {
     "task": "Berechne $(15 - 7) \\cdot 3$.",
     "steps": [
      "Zuerst die Klammer: $15 - 7 = 8$.",
      "$8 \\cdot 3 = 24$.",
      "<strong>Ergebnis: 24</strong>"
     ]
    }
   ]
  },
  "r3-slovne": {
   "title": "Sachaufgaben mit mehreren Schritten",
   "summary": "Aufgaben, die man mit zwei oder drei Rechnungen nacheinander löst.",
   "theory": [
    "<p>Manche Aufgaben können wir nicht mit einer einzigen Rechnung lösen. Wir gehen Schritt für Schritt vor: <strong>Was wissen wir</strong>,\n       <strong>was müssen wir zuerst herausfinden</strong> und <strong>was suchen wir am Ende</strong>.</p>",
    "<p>Beispiel: Mama kaufte 3 Hefte zu je 4 € und bezahlte mit einem 20-€-Schein. Wie viel Euro bekam sie zurück?<br>\n       1. Schritt – Preis der Hefte: $3 \\cdot 4 = 12$ €.<br>2. Schritt – Rückgeld: $20 - 12 = 8$ €.<br>Antwort: Mama bekam 8 € zurück.</p>",
    "<p>Wir können die Schritte auch in einer Rechnung zusammenfassen: $20 - 3 \\cdot 4 = 20 - 12 = 8$ (Punkt vor Strich).\n       Am Ende prüfen wir immer, ob die Antwort sinnvoll ist.</p>"
   ],
   "examples": [
    {
     "task": "Im Bus saßen 34 Leute. An der Haltestelle stiegen 12 Leute aus und 9 Leute ein. Wie viele Leute sind jetzt im Bus?",
     "steps": [
      "Nach dem Aussteigen: $34 - 12 = 22$.",
      "Nach dem Einsteigen: $22 + 9 = 31$.",
      "<strong>Im Bus sind 31 Leute.</strong>"
     ]
    },
    {
     "task": "Emma hat 2 Päckchen mit je 8 Stickern und noch 5 einzelne. Wie viele Sticker hat sie insgesamt?",
     "steps": [
      "In den Päckchen: $2 \\cdot 8 = 16$.",
      "Insgesamt: $16 + 5 = 21$.",
      "<strong>Emma hat 21 Sticker.</strong>"
     ]
    }
   ]
  },
  "r3-obvod": {
   "title": "Umfang ebener Figuren",
   "summary": "Umfang von Dreieck, Quadrat und Rechteck als Summe der Seitenlängen.",
   "theory": [
    "<p>Der <strong>Umfang</strong> einer Figur ist die Länge der Linie rundherum. Wir berechnen ihn, indem wir <strong>die Längen aller Seiten addieren</strong>.\n       Den Umfang bezeichnen wir hier mit dem Buchstaben $o$.</p>",
    {
     "fig": "r3-obvod",
     "caption": "Ein Rechteck hat zwei längere und zwei kürzere Seiten, ein Dreieck hat drei Seiten. Der Umfang ist die Summe aller Seiten."
    },
    "<p><strong>Dreieck</strong> mit den Seiten $a, b, c$: $o = a + b + c$.<br>\n       <strong>Quadrat</strong> mit der Seite $a$: $o = a + a + a + a = 4 \\cdot a$.<br>\n       <strong>Rechteck</strong> mit den Seiten $a, b$: $o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne den Umfang eines Quadrats mit der Seite $7\\,\\text{cm}$.",
     "steps": [
      "Ein Quadrat hat 4 gleiche Seiten.",
      "$o = 4 \\cdot 7 = 28$.",
      "<strong>$o = 28\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Ein Rechteck hat die Seiten $9\\,\\text{cm}$ und $4\\,\\text{cm}$. Wie groß ist sein Umfang?",
     "steps": [
      "$o = 9 + 4 + 9 + 4$.",
      "$o = 18 + 8 = 26$.",
      "<strong>$o = 26\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "r3-jednotky": {
   "title": "Einheiten für Länge, Gewicht, Volumen und Zeit",
   "summary": "Millimeter bis Kilometer, Gramm und Kilogramm, Liter und Deziliter, Sekunde bis Woche.",
   "theory": [
    "<p><strong>Länge:</strong> $1\\,\\text{cm} = 10\\,\\text{mm}$, $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{m} = 100\\,\\text{cm}$,\n       $1\\,\\text{km} = 1\\,000\\,\\text{m}$.</p>",
    "<p><strong>Gewicht (Masse):</strong> $1\\,\\text{kg} = 1\\,000\\,\\text{g}$, $1\\,\\text{t} = 1\\,000\\,\\text{kg}$.<br>\n       <strong>Volumen:</strong> $1\\,\\text{l} = 10\\,\\text{dl}$, $1\\,\\text{dl} = 100\\,\\text{ml}$, also $1\\,\\text{l} = 1\\,000\\,\\text{ml}$.</p>",
    "<p><strong>Zeit:</strong> $1\\,\\text{min} = 60\\,\\text{s}$, $1\\,\\text{h} = 60\\,\\text{min}$, 1 Tag = 24 h, 1 Woche = 7 Tage.</p>",
    "<p>Beim Umrechnen in eine <strong>kleinere</strong> Einheit wird die Zahl größer (wir multiplizieren), beim Umrechnen in eine <strong>größere</strong> Einheit wird sie kleiner (wir dividieren).\n       Zum Beispiel $3\\,\\text{m} = 300\\,\\text{cm}$ und $40\\,\\text{mm} = 4\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Rechne $2\\,\\text{m}\\ 35\\,\\text{cm}$ in Zentimeter um.",
     "steps": [
      "$2\\,\\text{m} = 200\\,\\text{cm}$.",
      "$200 + 35 = 235$.",
      "<strong>$235\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Ein Film begann um 17:40 und endete um 19:10. Wie viele Minuten hat er gedauert?",
     "steps": [
      "Von 17:40 bis 18:00 sind es 20 Minuten.",
      "Von 18:00 bis 19:00 sind es 60 Minuten, von 19:00 bis 19:10 noch 10 Minuten.",
      "$20 + 60 + 10 = 90$. <strong>Der Film dauerte 90 Minuten.</strong>"
     ]
    }
   ]
  },
  "r3-tabulky": {
   "title": "Tabellen und einfache Daten",
   "summary": "Daten aus einer Tabelle und einem Säulendiagramm ablesen, vergleichen und addieren.",
   "theory": [
    "<p>Daten schreiben wir oft in eine <strong>Tabelle</strong>. In der ersten Zeile stehen die Bezeichnungen (zum Beispiel Tage) und darunter die Zahlen.\n       Eine Eisdiele hat notiert, wie viele Eis sie verkauft hat:</p>\n       <table class=\"tbl\"><tr><th>Tag</th><th>Mo</th><th>Di</th><th>Mi</th><th>Do</th><th>Fr</th></tr>\n       <tr><td>Eis</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>",
    "<p>Dieselben Daten können wir in einem <strong>Säulendiagramm</strong> darstellen. Je höher die Säule, desto größer die Zahl.</p>",
    {
     "fig": "r3-graf",
     "caption": "Die höchste Säule ist am Freitag (18), die niedrigste am Dienstag (8). Am Freitag wurden $18 - 8 = 10$ Eis mehr verkauft als am Dienstag."
    },
    "<p>Aus den Daten können wir herausfinden, wo es <strong>am meisten</strong> und <strong>am wenigsten</strong> ist, <strong>um wie viel</strong> sich zwei Zahlen unterscheiden\n       (Subtrahieren) und wie viel es <strong>zusammen</strong> ist (Addieren).</p>"
   ],
   "examples": [
    {
     "task": "Wie viele Eis wurden am Montag und am Mittwoch zusammen verkauft (laut der Tabelle oben)?",
     "steps": [
      "Montag 12, Mittwoch 15.",
      "$12 + 15 = 27$.",
      "<strong>Zusammen wurden 27 Eis verkauft.</strong>"
     ]
    },
    {
     "task": "Wie viele Eis wurden am Mittwoch mehr verkauft als am Donnerstag?",
     "steps": [
      "Mittwoch 15, Donnerstag 10.",
      "$15 - 10 = 5$.",
      "<strong>Am Mittwoch wurden 5 Eis mehr verkauft.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} : {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, deshalb ${@2} : {@3} = {@4}$. ${@5} = {@6}$.",
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, deshalb ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Probe: ${@3} + {@4} = {@5}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Probe: ${@3} - {@4} = {@5}$.",
  "${@0} = {@1} + {@2} + {@3}$. Na mieste {@4} je číslica {@5}.": "${@0} = {@1} + {@2} + {@3}$. An der Stelle der {@4} steht die Ziffer {@5}.",
  "${@0} = {@1}$, potom ${@2} + {@3} = {@4}$. Výsledok: ${@5}$.": "${@0} = {@1}$, dann ${@2} + {@3} = {@4}$. Ergebnis: ${@5}$.",
  "1. krok – cena: ${@0} \\cdot {@1} = {@2}$ €. 2. krok – vrátili: ${@3} - {@4} = {@5}$ €.": "1. Schritt – Preis: ${@0} \\cdot {@1} = {@2}$ €. 2. Schritt – zurück: ${@3} - {@4} = {@5}$ €.",
  "4 + 8 + 1 = 13, píšem 3, 1 ďalej": "4 + 8 + 1 = 13, schreibe 3, übertrage 1",
  "7 + 5 = 12, píšem 2, 1 ďalej": "7 + 5 = 12, schreibe 2, übertrage 1",
  "Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.": "Wenn es dir nicht einfällt, zerlege die Aufgabe: zum Beispiel $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.",
  "Akú číslicu má číslo {@0} na mieste {@1}?": "Welche Ziffer hat die Zahl {@0} an der Stelle der {@1}?",
  "Bez zátvoriek počítaj zľava doprava.": "Ohne Klammern rechnest du von links nach rechts.",
  "Bez zátvoriek počítame zľava: ${@0} - {@1} = {@2}$, potom ${@3} - {@4} = {@5}$.": "Ohne Klammern rechnen wir von links: ${@0} - {@1} = {@2}$, dann ${@3} - {@4} = {@5}$.",
  "Bez zátvoriek sa počíta zľava doprava. Najprv vypočítaj ${@0} - {@1}$, až potom odčítaj {@2}.": "Ohne Klammern rechnet man von links nach rechts. Rechne zuerst ${@0} - {@1}$, erst dann ziehe {@2} ab.",
  "Cesta vlakom k babke trvala 3 …": "Die Zugfahrt zur Oma dauerte 3 …",
  "Chýbajúci sčítanec zistíš odčítaním.": "Den fehlenden Summanden findest du durch Subtrahieren.",
  "Do hrnčeka sa zmestia asi 3 …": "In eine Tasse passen etwa 3 …",
  "Doplň chýbajúce číslo: $\\square \\cdot {@0} = {@1}$": "Ergänze die fehlende Zahl: $\\square \\cdot {@0} = {@1}$",
  "Doplň správny znak: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$": "Setze das richtige Zeichen ein: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$",
  "Doplň vhodnú jednotku: {@0}": "Ergänze die passende Einheit: {@0}",
  "Dve dlhšie strany: koľko je $2 \\cdot {@0}$?": "Zwei längere Seiten: Wie viel ist $2 \\cdot {@0}$?",
  "Dve kratšie strany: koľko je $2 \\cdot {@0}$?": "Zwei kürzere Seiten: Wie viel ist $2 \\cdot {@0}$?",
  "Dve strany po {@0} cm majú spolu $2 \\cdot {@1} = {@2}$. Na zvyšné dve strany ostáva ${@3} - {@4} = {@5}$, jedna strana je ${@6} : 2 = {@7}\\,\\text{cm}$.": "Zwei Seiten zu je {@0} cm haben zusammen $2 \\cdot {@1} = {@2}$. Für die übrigen zwei Seiten bleiben ${@3} - {@4} = {@5}$, eine Seite ist ${@6} : 2 = {@7}\\,\\text{cm}$ lang.",
  "Dvere sú vysoké asi 2 …": "Eine Tür ist etwa 2 … hoch",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšie číslo od väčšieho.": "Addiere die Werte nicht. „Um wie viel mehr“ ist ein Unterschied – ziehe die kleinere Zahl von der größeren ab.",
  "Hľadaj najmenšie číslo (najnižší stĺpec).": "Suche die kleinste Zahl (die niedrigste Säule).",
  "Hľadaj najväčšie číslo (najvyšší stĺpec).": "Suche die größte Zahl (die höchste Säule).",
  "Hľadaj suseda v číselnom rade.": "Suche den Nachbarn in der Zahlenreihe.",
  "Hľadaj v násobilke čísla {@0} najväčší násobok, ktorý sa ešte zmestí do {@1}. Zvyšok musí byť menší ako {@2}.": "Suche in der Einmaleinsreihe von {@0} das größte Vielfache, das noch in {@1} passt. Der Rest muss kleiner als {@2} sein.",
  "Jablko váži asi 150 …": "Ein Apfel wiegt etwa 150 …",
  "Jednotka {@0} je tu primalá: {@1} {@2} by bolo veľmi málo.": "Die Einheit {@0} ist hier zu klein: {@1} {@2} wäre sehr wenig.",
  "Jednotka {@0} je tu priveľká: {@1} {@2} by bolo veľmi veľa.": "Die Einheit {@0} ist hier zu groß: {@1} {@2} wäre sehr viel.",
  "Koľko centimetrov majú spolu dve strany po {@0} cm?": "Wie viele Zentimeter haben zwei Seiten zu je {@0} cm zusammen?",
  "Koľko centimetrov zostáva na dve zvyšné strany? Vypočítaj ${@0} - {@1}$.": "Wie viele Zentimeter bleiben für die zwei übrigen Seiten? Rechne ${@0} - {@1}$.",
  "Koľko desiatok vyšlo? K tomuto číslu pripíš nulu.": "Wie viele Zehner kamen heraus? Hänge an diese Zahl eine Null an.",
  "Koľko eur stál celý nákup?": "Wie viele Euro hat der ganze Einkauf gekostet?",
  "Koľko eur vrátili? Vypočítaj ${@0} - {@1}$.": "Wie viele Euro gab es zurück? Rechne ${@0} - {@1}$.",
  "Koľko je ${@0} - {@1}$?": "Wie viel ist ${@0} - {@1}$?",
  "Koľko kusov je vo všetkých balíčkoch spolu?": "Wie viele Stück sind in allen Päckchen zusammen?",
  "Koľko meria jedna zvyšná strana? Vypočítaj ${@0} : 2$.": "Wie lang ist eine der übrigen Seiten? Rechne ${@0} : 2$.",
  "Koľko minút je od {@0} do {@1}?": "Wie viele Minuten sind es von {@0} bis {@1}?",
  "Koľko minút trval tréning spolu? Vypočítaj ${@0} + {@1}$.": "Wie viele Minuten dauerte das Training insgesamt? Rechne ${@0} + {@1}$.",
  "Koľko stromčekov zostalo? Vypočítaj ${@0} - {@1}$.": "Wie viele Bäumchen sind übrig geblieben? Rechne ${@0} - {@1}$.",
  "Koľko stromčekov záhradník zasadil?": "Wie viele Bäumchen hat der Gärtner gepflanzt?",
  "Koľko {@0} majú všetky tri deti spolu? Vypočítaj ${@1} + {@2} + {@3}$.": "Wie viele {@0} haben alle drei Kinder zusammen? Rechne ${@1} + {@2} + {@3}$.",
  "Koľko {@0} má {@1}?": "Wie viele {@0} hat {@1}?",
  "Koľko {@0} {@1} {@2}?": "Wie viele {@0} {@1} {@2}?",
  "Koľko ľudí je v autobuse, keď ďalší nastúpili?": "Wie viele Leute sind im Bus, nachdem weitere eingestiegen sind?",
  "Koľko ľudí zostalo v autobuse po vystúpení?": "Wie viele Leute sind nach dem Aussteigen im Bus geblieben?",
  "Koľkokrát je {@0} v čísle {@1}?": "Wie oft ist {@0} in der Zahl {@1} enthalten?",
  "Koľkokrát sa {@0} {@1} zmestí do {@2} {@3}?": "Wie oft passen {@0} {@1} in {@2} {@3}?",
  "Ktoré číslo je o {@0} menšie ako {@1}?": "Welche Zahl ist um {@0} kleiner als {@1}?",
  "Ktoré číslo je o {@0} väčšie ako {@1}?": "Welche Zahl ist um {@0} größer als {@1}?",
  "Ktoré číslo má {@0} {@1}, {@2} {@3} a {@4} {@5}?": "Welche Zahl hat {@0} {@1}, {@2} {@3} und {@4} {@5}?",
  "Ktorý najväčší násobok čísla {@0} sa ešte zmestí do {@1}?": "Welches ist das größte Vielfache von {@0}, das noch in {@1} passt?",
  "Lyžička sirupu má asi 5 …": "Ein Löffel Sirup hat etwa 5 …",
  "Mravec je dlhý asi 5 …": "Eine Ameise ist etwa 5 … lang",
  "Najmenšie číslo je {@0}, a to {@1}.": "Die kleinste Zahl ist {@0}, und zwar {@1}.",
  "Najprv násobenie a delenie: ${@0} \\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} - {@7} = {@8}$.": "Zuerst Multiplikation und Division: ${@0} \\cdot {@1} = {@2}$ und ${@3} : {@4} = {@5}$. Dann ${@6} - {@7} = {@8}$.",
  "Najprv násobenie: ${@0} \\cdot {@1} = {@2}$. Potom ${@3} {@4} {@5} = {@6}$.": "Zuerst die Multiplikation: ${@0} \\cdot {@1} = {@2}$. Dann ${@3} {@4} {@5} = {@6}$.",
  "Najprv odčítaj {@0}: koľko je ${@1} - {@2}$?": "Subtrahiere zuerst {@0}: Wie viel ist ${@1} - {@2}$?",
  "Najprv premeň väčšiu jednotku: ${@0} = \\square\\,\\text{{@1}}$": "Rechne zuerst die größere Einheit um: ${@0} = \\square\\,\\text{{@1}}$",
  "Najprv premeň {@0} na {@1} a potom pripočítaj zvyšok.": "Rechne zuerst {@0} in {@1} um und addiere dann den Rest.",
  "Najprv pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Addiere zuerst {@0}: Wie viel ist ${@1} + {@2}$?",
  "Najprv vypočítaj, koľko je vo všetkých balíčkoch.": "Rechne zuerst aus, wie viel in allen Päckchen ist.",
  "Najprv vypočítaj, koľko stromčekov zasadil.": "Rechne zuerst aus, wie viele Bäumchen er gepflanzt hat.",
  "Najprv vypočítaj, čo je v zátvorke.": "Rechne zuerst aus, was in der Klammer steht.",
  "Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.": "Finde zuerst heraus, wie viel jedes Kind hat, und addiere dann alles.",
  "Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.": "Finde zuerst heraus, wie viel der ganze Einkauf gekostet hat. Ziehe das dann vom Geldschein ab.",
  "Najprv zátvorka: ${@0} + {@1} = {@2}$. Potom ${@3} : {@4} = {@5}$.": "Zuerst die Klammer: ${@0} + {@1} = {@2}$. Dann ${@3} : {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} - {@1} = {@2}$. Potom ${@3} - {@4} = {@5}$.": "Zuerst die Klammer: ${@0} - {@1} = {@2}$. Dann ${@3} - {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} {@1} {@2} = {@3}$. Potom ${@4} \\cdot {@5} = {@6}$.": "Zuerst die Klammer: ${@0} {@1} {@2} = {@3}$. Dann ${@4} \\cdot {@5} = {@6}$.",
  "Najprv zátvorka: koľko je ${@0} + {@1}$?": "Zuerst die Klammer: Wie viel ist ${@0} + {@1}$?",
  "Najprv zátvorka: koľko je ${@0} - {@1}$?": "Zuerst die Klammer: Wie viel ist ${@0} - {@1}$?",
  "Najprv zátvorka: koľko je ${@0} {@1} {@2}$?": "Zuerst die Klammer: Wie viel ist ${@0} {@1} {@2}$?",
  "Najväčšie číslo je {@0}, a to {@1}.": "Die größte Zahl ist {@0}, und zwar {@1}.",
  "Najväčší násobok {@0}, ktorý nie je väčší ako {@1}, je ${@2} \\cdot {@3} = {@4}$. Zvyšok: ${@5} - {@6} = {@7}$. Teda ${@8} : {@9} = {@10}$, zvyšok {@11}.": "Das größte Vielfache von {@0}, das nicht größer als {@1} ist, ist ${@2} \\cdot {@3} = {@4}$. Rest: ${@5} - {@6} = {@7}$. Also ${@8} : {@9} = {@10}$, Rest {@11}.",
  "Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.": "Du hast nur das Ergebnis geschrieben. Schreibe nach dem Semikolon auch den Rest.",
  "Nevšímal si si zátvorku. Najprv sčítaj čísla v zátvorke a až potom deľ.": "Du hast die Klammer nicht beachtet. Addiere zuerst die Zahlen in der Klammer und dividiere erst dann.",
  "Nevšímal si si zátvorku. Najprv vypočítaj ${@0} - {@1}$ a až potom to odčítaj od {@2}.": "Du hast die Klammer nicht beachtet. Rechne zuerst ${@0} - {@1}$ und ziehe das erst dann von {@2} ab.",
  "Nevšímal si si zátvorku. Čo je v zátvorke, počítaš úplne najprv – aj pred násobením.": "Du hast die Klammer nicht beachtet. Was in der Klammer steht, rechnest du ganz zuerst – sogar vor der Multiplikation.",
  "Nájdi správny deň a prečítaj číslo pri ňom.": "Finde den richtigen Tag und lies die Zahl daneben ab.",
  "Nákladné auto váži asi 8 …": "Ein Lastwagen wiegt etwa 8 …",
  "Násobenie a delenie urob skôr ako odčítanie.": "Multipliziere und dividiere vor dem Subtrahieren.",
  "Násobenie má prednosť pred sčítaním aj odčítaním.": "Punktrechnung geht vor Strichrechnung: Multiplikation vor Addition und Subtraktion.",
  "O koľko viac? Vypočítaj ${@0} - {@1}$.": "Um wie viel mehr? Rechne ${@0} - {@1}$.",
  "Obdĺžnik a trojuholník s dĺžkami strán": "Rechteck und Dreieck mit Seitenlängen",
  "Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.": "Ein Rechteck hat 4 Seiten: zwei längere und zwei kürzere. Addiere alle.",
  "Obdĺžnik má obvod ${@0}\\,\\text{cm}$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Ein Rechteck hat den Umfang ${@0}\\,\\text{cm}$ und eine Seite ${@1}\\,\\text{cm}$. Wie lang ist die andere Seite (in cm)?",
  "Obvod rozdeľ na 4 rovnaké časti.": "Teile den Umfang in 4 gleiche Teile.",
  "Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.": "Du hast den Umfang nur in zwei Teile geteilt. Ein Quadrat hat vier gleiche Seiten.",
  "Obvod trojuholníka je súčet jeho troch strán.": "Der Umfang des Dreiecks ist die Summe seiner drei Seiten.",
  "Obvod štvorca je ${@0}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?": "Der Umfang eines Quadrats ist ${@0}\\,\\text{cm}$. Wie lang ist seine Seite (in cm)?",
  "Obvod: koľko je ${@0} + {@1}$?": "Umfang: Wie viel ist ${@0} + {@1}$?",
  "Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.": "Ziehe vom Umfang beide bekannten Seiten ab und halbiere den Rest.",
  "Od {@0} do {@1} je {@2} minút, od {@3} do {@4} ešte {@5} minút. Spolu ${@6} + {@7} = {@8}$ minút.": "Von {@0} bis {@1} sind es {@2} Minuten, von {@3} bis {@4} noch {@5} Minuten. Zusammen ${@6} + {@7} = {@8}$ Minuten.",
  "Od {@0} do {@1} je {@2} minút.": "Von {@0} bis {@1} sind es {@2} Minuten.",
  "Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.": "Subtrahiere nacheinander Hunderter, Zehner und Einer. Überprüfe das Ergebnis durch Addieren.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu všetkých.": "Du hast den Preis nur eines Gegenstands abgezogen. Es wurden {@0} Gegenstände gekauft, rechne zuerst den Preis aller aus.",
  "Odčítal si stranu {@0} cm len raz. Obdĺžnik má dve takéto strany.": "Du hast die Seite {@0} cm nur einmal abgezogen. Ein Rechteck hat zwei solche Seiten.",
  "Pi": "Fr",
  "Platil": "Er bezahlte",
  "Platila": "Sie bezahlte",
  "Po": "Mo",
  "Po vystúpení: ${@0} - {@1} = {@2}$. Po nastúpení: ${@3} + {@4} = {@5}$.": "Nach dem Aussteigen: ${@0} - {@1} = {@2}$. Nach dem Einsteigen: ${@3} + {@4} = {@5}$.",
  "Pomôcka: $5 \\cdot {@0} = {@1}$ a ešte {@2}-krát {@3}, teda ${@4} + {@5} = {@6}$.": "Hilfe: $5 \\cdot {@0} = {@1}$ und noch {@2}-mal {@3}, also ${@4} + {@5} = {@6}$.",
  "Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.": "Vergleiche von links: zuerst die Hunderter, dann die Zehner, dann die Einer.",
  "Potom odčítaj {@0}: koľko je ${@1} - {@2}$?": "Subtrahiere dann {@0}: Wie viel ist ${@1} - {@2}$?",
  "Potom pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Addiere dann {@0}: Wie viel ist ${@1} + {@2}$?",
  "Počítaj najprv minúty do celej hodiny a potom minúty po nej.": "Zähle zuerst die Minuten bis zur vollen Stunde und dann die Minuten danach.",
  "Počítaj zľava: koľko je ${@0} - {@1}$?": "Rechne von links: Wie viel ist ${@0} - {@1}$?",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = {@1}$.": "Du hast mit 100 gerechnet. Bei der Zeit gilt $1\\,\\text{{@0}} = {@1}$.",
  "Počítal si zľava doprava. Delenie má prednosť pred odčítaním: najprv vypočítaj ${@0} : {@1}$.": "Du hast von links nach rechts gerechnet. Division geht vor Subtraktion: Rechne zuerst ${@0} : {@1}$.",
  "Počítal si zľava doprava. Násobenie má prednosť: najprv vypočítaj ${@0} \\cdot {@1}$.": "Du hast von links nach rechts gerechnet. Multiplikation geht vor: Rechne zuerst ${@0} \\cdot {@1}$.",
  "Predané zmrzliny": "Verkaufte Eisbecher",
  "Predchádzajúce miesta sú rovnaké, rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "Die vorderen Stellen sind gleich, entscheidend sind die {@0}: {@1} und {@2}. Deshalb ${@3} {@4} {@5}$.",
  "Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?": "Stell dir den Gegenstand vor. Ist er klein oder groß? Dauert es kurz oder lange?",
  "Premeň: ${@0} = \\square\\,\\text{{@1}}$": "Rechne um: ${@0} = \\square\\,\\text{{@1}}$",
  "Premeň: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$": "Rechne um: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$",
  "Prečítané strany": "Gelesene Seiten",
  "Pridaj tie navyše: koľko je ${@0} + {@1}$?": "Gib die zusätzlichen dazu: Wie viel ist ${@0} + {@1}$?",
  "Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.": "Addiere nacheinander Hunderter, Zehner und Einer oder rechne schriftlich untereinander.",
  "Pripočítaj zvyšok: koľko je ${@0} + {@1}$?": "Addiere den Rest: Wie viel ist ${@0} + {@1}$?",
  "Pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Addiere {@0}: Wie viel ist ${@1} + {@2}$?",
  "Písomné sčítanie 347 plus 285": "Schriftliche Addition 347 plus 285",
  "Rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "Entscheidend sind die {@0}: {@1} und {@2}. Deshalb ${@3} {@4} {@5}$.",
  "S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.": "Mit ganzen Hundertern rechnest du wie mit Einern: 4 Hunderter + 3 Hunderter = 7 Hunderter.",
  "Si o jeden násobok čísla {@0} nižšie. Skontroluj, koľkokrát si pripočítal {@1}.": "Du bist um ein Vielfaches von {@0} zu tief. Überprüfe, wie oft du {@1} addiert hast.",
  "Si o jeden násobok čísla {@0} vyššie. Skontroluj, koľkokrát si pripočítal {@1}.": "Du bist um ein Vielfaches von {@0} zu hoch. Überprüfe, wie oft du {@1} addiert hast.",
  "Skontroluj obe strany: vľavo počítaj najprv zátvorku, vpravo najprv násobenie.": "Überprüfe beide Seiten: Links rechne zuerst die Klammer, rechts zuerst die Multiplikation.",
  "Spomeň si, koľko {@0} je $1\\,\\text{{@1}}$.": "Erinnere dich, wie viele {@0} $1\\,\\text{{@1}}$ sind.",
  "St": "Mi",
  "Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.": "Schreibe die Hunderter an die erste Stelle, die Zehner an die zweite und die Einer an die dritte. Wenn etwas fehlt, schreibe 0.",
  "Stovky sú prvá číslica zľava, jednotky posledná.": "Die Hunderter sind die erste Ziffer von links, die Einer die letzte.",
  "Stranu si vynásobil samu sebou. Obvod je súčet všetkých štyroch strán.": "Du hast die Seite mit sich selbst multipliziert. Der Umfang ist die Summe aller vier Seiten.",
  "Strany si vynásobil. Obvod je dĺžka čiary okolo útvaru – strany treba sčítať.": "Du hast die Seiten multipliziert. Der Umfang ist die Länge der Linie um die Figur herum – die Seiten muss man addieren.",
  "Strany vyzerajú podobne, ale zátvorka mení poradie počítania. Vypočítaj obe strany zvlášť.": "Die Seiten sehen ähnlich aus, aber die Klammer ändert die Reihenfolge der Rechnung. Rechne beide Seiten getrennt aus.",
  "Sčítaj pondelok a utorok: koľko je ${@0} + {@1}$?": "Addiere Montag und Dienstag: Wie viel ist ${@0} + {@1}$?",
  "Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.": "Addiere alle Zahlen. Es hilft, wenn du zuerst Paare suchst, die eine runde Zahl ergeben.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany – každú dĺžku pripočítaj dvakrát.": "Du hast nur zwei Seiten addiert. Ein Rechteck hat vier Seiten – zähle jede Länge zweimal dazu.",
  "Sčítal si čísla zo zadania. {@0} a {@1} nie sú počty detí, ale o koľko má dieťa viac alebo menej. Najprv zisti, koľko má každé dieťa.": "Du hast die Zahlen aus der Aufgabe addiert. {@0} und {@1} sind keine Anzahlen der Kinder, sondern um wie viel ein Kind mehr oder weniger hat. Finde zuerst heraus, wie viel jedes Kind hat.",
  "Tabuľka násobilky do 10 krát 10": "Einmaleins-Tabelle bis 10 mal 10",
  "Taška zemiakov váži 5 …": "Eine Tasche Kartoffeln wiegt 5 …",
  "Teraz dokonči: koľko je ${@0} {@1} {@2}$?": "Rechne jetzt fertig: Wie viel ist ${@0} {@1} {@2}$?",
  "Tlesknutie trvá asi 1 …": "Ein Klatschen dauert etwa 1 …",
  "To je cena celého nákupu. Ešte zisti, koľko eur vrátili z bankovky.": "Das ist der Preis des ganzen Einkaufs. Finde noch heraus, wie viele Euro vom Geldschein zurückgegeben wurden.",
  "To je len počet v balíčkoch. Pripočítaj ešte {@0} navyše.": "Das ist nur die Anzahl in den Päckchen. Zähle noch {@0} zusätzlich dazu.",
  "To sú obe zvyšné strany spolu. Rozdeľ to ešte na polovicu.": "Das sind beide übrigen Seiten zusammen. Halbiere das noch.",
  "Toľko má len {@0}. Pýtame sa, koľko majú všetky tri deti spolu.": "So viel hat nur {@0}. Wir fragen, wie viel alle drei Kinder zusammen haben.",
  "Toľko stromčekov záhradník zasadil. Uschnuté stromčeky ešte odčítaj.": "So viele Bäumchen hat der Gärtner gepflanzt. Ziehe die vertrockneten Bäumchen noch ab.",
  "Trojuholník má strany ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ a ${@2}\\,\\text{cm}$. Aký má obvod (v cm)?": "Ein Dreieck hat die Seiten ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ und ${@2}\\,\\text{cm}$. Wie groß ist sein Umfang (in cm)?",
  "Tréning začal o {@0} a skončil o {@1}. Koľko minút trval?": "Das Training begann um {@0} und endete um {@1}. Wie viele Minuten dauerte es?",
  "Upečené koláče": "Gebackene Kuchen",
  "Uschnuté stromčeky ubudli, preto ich odčítaj, nepripočítaj.": "Die vertrockneten Bäumchen sind weggefallen, deshalb ziehe sie ab, addiere sie nicht.",
  "Ut": "Di",
  "V autobuse sedelo {@0} ľudí. Na zastávke {@1} ľudí vystúpilo a {@2} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?": "Im Bus saßen {@0} Leute. An der Haltestelle stiegen {@1} Leute aus und {@2} Leute ein. Wie viele Leute sind jetzt im Bus?",
  "V balíčkoch: ${@0} \\cdot {@1} = {@2}$. Spolu: ${@3} + {@4} = {@5}$.": "In den Päckchen: ${@0} \\cdot {@1} = {@2}$. Zusammen: ${@3} + {@4} = {@5}$.",
  "V cukrárni si zapisovali, koľko zmrzlín predali.": "In der Eisdiele wurde aufgeschrieben, wie viele Eisbecher verkauft wurden.",
  "V niektorom stĺpci si odčítal menšiu číslicu od väčšej, hoci väčšia bola dole. Vtedy si treba požičať desiatku z vedľajšieho stĺpca.": "In einer Spalte hast du die kleinere Ziffer von der größeren abgezogen, obwohl die größere unten stand. Dann musst du dir einen Zehner aus der Nachbarspalte borgen.",
  "V pekárni si zapisovali, koľko koláčov upiekli.": "In der Bäckerei wurde aufgeschrieben, wie viele Kuchen gebacken wurden.",
  "V piatok": "Am Freitag",
  "V pondelok": "Am Montag",
  "V stredu": "Am Mittwoch",
  "V tento deň je najmenšie číslo. Hľadáme najväčšie.": "An diesem Tag steht die kleinste Zahl. Wir suchen die größte.",
  "V tento deň je najväčšie číslo. Hľadáme najmenšie.": "An diesem Tag steht die größte Zahl. Wir suchen die kleinste.",
  "V utorok": "Am Dienstag",
  "Vo vedre je 10 …": "In einem Eimer sind 10 …",
  "Vo štvrtok": "Am Donnerstag",
  "Vydeľ so zvyškom: ${@0} : {@1}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).": "Dividiere mit Rest: ${@0} : {@1}$. Schreibe das Ergebnis und den Rest getrennt durch ein Semikolon (z. B. 4; 1).",
  "Vypočítaj $({@0} + {@1}) : {@2}$.": "Rechne $({@0} + {@1}) : {@2}$.",
  "Vypočítaj $({@0} {@1} {@2}) \\cdot {@3}$.": "Rechne $({@0} {@1} {@2}) \\cdot {@3}$.",
  "Vypočítaj ${@0} - ({@1} - {@2})$.": "Rechne ${@0} - ({@1} - {@2})$.",
  "Vypočítaj ${@0} - {@1} - {@2}$.": "Rechne ${@0} - {@1} - {@2}$.",
  "Vypočítaj ${@0} \\cdot {@1} - {@2} : {@3}$.": "Rechne ${@0} \\cdot {@1} - {@2} : {@3}$.",
  "Vypočítaj ${@0} {@1} {@2} \\cdot {@3}$.": "Rechne ${@0} {@1} {@2} \\cdot {@3}$.",
  "Vypočítaj najprv ${@0} \\cdot {@1}$ a potom pripíš nulu.": "Rechne zuerst ${@0} \\cdot {@1}$ und hänge dann eine Null an.",
  "Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.": "Rechne beide Seiten getrennt aus. Links beginne mit der Klammer, rechts mit der Multiplikation.",
  "Vypočítaj obvod obdĺžnika (v cm).{@0}": "Berechne den Umfang des Rechtecks (in cm).{@0}",
  "Vystúpili → odčítaj. Nastúpili → pripočítaj.": "Ausgestiegen → subtrahiere. Eingestiegen → addiere.",
  "Vyučovacia hodina trvá 45 …": "Eine Schulstunde dauert 45 …",
  "Vzdialenosť medzi dvoma mestami je 40 …": "Die Entfernung zwischen zwei Städten beträgt 40 …",
  "Vľavo: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Vpravo: ${@6} + {@7} = {@8}$. Preto ${@9} {@10} {@11}$.": "Links: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Rechts: ${@6} + {@7} = {@8}$. Deshalb ${@9} {@10} {@11}$.",
  "Zabudol si na delenie. Od {@0} neodčítavaš {@1}, ale až výsledok ${@2} : {@3}$.": "Du hast die Division vergessen. Von {@0} ziehst du nicht {@1} ab, sondern erst das Ergebnis ${@2} : {@3}$.",
  "Zabudol si na nulu na mieste desiatok. Bez nej sa číslice posunú a vznikne iné číslo.": "Du hast die Null an der Zehnerstelle vergessen. Ohne sie verschieben sich die Ziffern und es entsteht eine andere Zahl.",
  "Zabudol si na prenos. Keď je súčet v stĺpci 10 alebo viac, napíš len jednotky a 1 pripočítaj k ďalšiemu stĺpcu vľavo.": "Du hast den Übertrag vergessen. Wenn die Summe in einer Spalte 10 oder mehr ist, schreibe nur die Einer und zähle 1 zur nächsten Spalte links dazu.",
  "Zabudol si pripočítať ešte ${@0}$.": "Du hast vergessen, noch ${@0}$ dazuzuzählen.",
  "Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.": "Du hast nur zwei Seiten gezählt. Ein Quadrat hat vier gleich lange Seiten.",
  "Zasadil: ${@0} \\cdot {@1} = {@2}$. Zostalo: ${@3} - {@4} = {@5}$.": "Gepflanzt: ${@0} \\cdot {@1} = {@2}$. Übrig: ${@3} - {@4} = {@5}$.",
  "Zisti, o koľko sa líšia dve susedné čísla.": "Finde heraus, um wie viel sich zwei benachbarte Zahlen unterscheiden.",
  "Zmení sa počet desiatok.": "Die Anzahl der Zehner ändert sich.",
  "Zmení sa počet stoviek.": "Die Anzahl der Hunderter ändert sich.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvé miesto, kde sa čísla líšia ({@0}).": "Das Zeichen ist verkehrt herum. Vergleiche von links – entscheidend ist die erste Stelle, an der sich die Zahlen unterscheiden ({@0}).",
  "Zošit je dlhý asi 30 …": "Ein Heft ist etwa 30 … lang",
  "Zuzka si zapisovala, koľko strán knihy prečítala.": "Lena hat aufgeschrieben, wie viele Seiten eines Buches sie gelesen hat.",
  "Zvyšok je ${@0} - {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "Der Rest ist ${@0} - {@1}$. Schreibe das Ergebnis und den Rest getrennt durch ein Semikolon.",
  "Zvyšok {@0} je väčší ako deliteľ {@1}, takže sa číslo {@2} do {@3} zmestí ešte raz. Zvyšok musí byť vždy menší ako deliteľ.": "Der Rest {@0} ist größer als der Divisor {@1}, also passt die Zahl {@2} noch einmal in {@3}. Der Rest muss immer kleiner als der Divisor sein.",
  "Záhradník zasadil {@0} {@1} po {@2} {@3}. {@4} {@5}. Koľko stromčekov zostalo?": "Ein Gärtner pflanzte {@0} {@1} mit je {@2} {@3}. {@4} {@5}. Wie viele Bäumchen sind übrig geblieben?",
  "balíčkov": "Päckchen",
  "balíčky": "Päckchen",
  "deň": "Tag",
  "gaštan": "Kastanie",
  "gaštanov": "Kastanien",
  "gaštany": "Kastanien",
  "kartičiek": "Kärtchen",
  "kartičku": "Kärtchen",
  "kartičky": "Kärtchen",
  "knihy": "Bücher",
  "kníh": "Bücher",
  "koláče": "Kuchen",
  "koláčov": "Kuchen",
  "lopty": "Bälle",
  "lôpt": "Bälle",
  "orech": "Nuss",
  "perá": "Stifte",
  "piatok": "Freitag",
  "pier": "Stifte",
  "podiel; zvyšok": "Ergebnis; Rest",
  "pondelok": "Montag",
  "predali": "verkaufte die Eisdiele",
  "prečítala Zuzka": "las Lena",
  "radov": "Reihen",
  "rady": "Reihen",
  "stoviek": "Hunderter",
  "stovku": "Hunderter",
  "stovky": "Hunderter",
  "strany": "Seiten",
  "streda": "Mittwoch",
  "stredu": "Mittwoch",
  "stromček uschol": "Bäumchen ist vertrocknet",
  "stromčekov": "Bäumchen",
  "stromčekov uschlo": "Bäumchen sind vertrocknet",
  "stromčeky": "Bäumchen",
  "stromčeky uschli": "Bäumchen sind vertrocknet",
  "strán": "Seiten",
  "upiekli v pekárni": "backte die Bäckerei",
  "utorok": "Dienstag",
  "v piatok": "am Freitag",
  "v pondelok": "am Montag",
  "v stredu": "am Mittwoch",
  "v utorok": "am Dienstag",
  "vo štvrtok": "am Donnerstag",
  "zmrzliny": "Eisbecher",
  "zmrzlín": "Eisbecher",
  "zošitov": "Hefte",
  "zošity": "Hefte",
  "{@0} je v údajoch číslo {@1}.": "{@0} steht in den Daten die Zahl {@1}.",
  "{@0} má o {@1} menej ako {@2}, nie ako {@3}. Skontroluj, od koho odčítaš.": "{@0} hat {@1} weniger als {@2}, nicht als {@3}. Überprüfe, von wem du abziehst.",
  "{@0} má {@1} {@2} po {@3} {@4} a ešte {@5} {@6} navyše. Koľko {@7} má spolu?": "{@0} hat {@1} {@2} mit je {@3} {@4} und noch {@5} {@6} zusätzlich. Wie viele {@7} hat {@0} insgesamt?",
  "{@0} má {@1} {@2}. {@3} má o {@4} viac ako {@5} a {@6} má o {@7} menej ako {@8}. Koľko {@9} majú spolu?": "{@0} hat {@1} {@2}. {@3} hat {@4} mehr als {@5} und {@6} hat {@7} weniger als {@8}. Wie viele {@9} haben sie zusammen?",
  "{@0} {@1} krát {@2} je {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.": "{@0} {@1} mal {@2} sind {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.",
  "{@0} {@1} {@2} {@3} po {@4} €. {@5} bankovkou {@6} €. Koľko eur {@7} vrátili?": "{@0} {@1} {@2} {@3} zu je {@4} €. {@5} mit einem {@6}-€-Schein. Wie viele Euro gab man {@7} zurück?",
  "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.": "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Zusammen: ${@8} + {@9} + {@10} = {@11}$.",
  "{@0}Koľko {@1} {@2} spolu za všetkých päť dní?": "{@0}Wie viele {@1} {@2} insgesamt an allen fünf Tagen?",
  "{@0}Koľko {@1} {@2} {@3}?": "{@0}Wie viele {@1} {@2} {@3}?",
  "{@0}O koľko viac {@1} {@2} {@3} ako {@4}?": "{@0}Um wie viele {@1} mehr {@2} {@3} als {@4}?",
  "{@0}V ktorý deň {@1} najmenej {@2}?": "{@0}An welchem Tag {@1} am wenigsten {@2}?",
  "{@0}V ktorý deň {@1} najviac {@2}?": "{@0}An welchem Tag {@1} am meisten {@2}?",
  "Časy si odčítal ako obyčajné čísla. Hodina má len 60 minút – počítaj najprv do celej hodiny.": "Du hast die Zeiten wie gewöhnliche Zahlen subtrahiert. Eine Stunde hat nur 60 Minuten – zähle zuerst bis zur vollen Stunde.",
  "Čo počítaš najprv? Vypočítaj ${@0} \\cdot {@1}$.": "Was rechnest du zuerst? Rechne ${@0} \\cdot {@1}$.",
  "Číselný rad od 0 do 1000": "Zahlenreihe von 0 bis 1000",
  "Čísla klesajú vždy o {@0}: {@1}.": "Die Zahlen fallen immer um {@0}: {@1}.",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}$ na menšiu jednotku $\\text{{@1}}$.": "Addiere die Zahlen nicht gleich. Rechne zuerst ${@0}$ in die kleinere Einheit $\\text{{@1}}$ um.",
  "Čísla rastú vždy o {@0}: {@1}.": "Die Zahlen steigen immer um {@0}: {@1}.",
  "Čísla si len sčítal. {@0}-krát po {@1} je násobenie.": "Du hast die Zahlen nur addiert. {@0}-mal je {@1} ist Multiplizieren.",
  "Číslo {@0} má {@1} {@2}. Koľko je teda ${@3} \\cdot {@4}$?": "Die Zahl {@0} hat {@1} {@2}. Wie viel ist also ${@3} \\cdot {@4}$?",
  "Číslo {@0} rozdelíme na {@1}: {@2}.": "Die Zahl {@0} zerlegen wir in {@1}: {@2}.",
  "Čítal si z opačnej strany. Jednotky sú posledná číslica vpravo.": "Du hast von der falschen Seite gelesen. Die Einer sind die letzte Ziffer rechts.",
  "Čítal si z opačnej strany. Stovky sú prvá číslica zľava.": "Du hast von der falschen Seite gelesen. Die Hunderter sind die erste Ziffer von links.",
  "čokolád": "Tafeln Schokolade",
  "čokolády": "Tafeln Schokolade",
  "Ľudia, ktorí nastúpili, v autobuse pribudli. Ich počet pripočítaj, neodčítaj.": "Die Leute, die eingestiegen sind, sind im Bus dazugekommen. Addiere ihre Anzahl, ziehe sie nicht ab.",
  "Ľudia, ktorí vystúpili, z autobusu odišli. Ich počet odčítaj, nepripočítaj.": "Die Leute, die ausgestiegen sind, haben den Bus verlassen. Ziehe ihre Anzahl ab, addiere sie nicht.",
  "Št": "Do",
  "Štvorec má 4 rovnaké strany: ${@0} : 4 = {@1}\\,\\text{cm}$.": "Ein Quadrat hat 4 gleiche Seiten: ${@0} : 4 = {@1}\\,\\text{cm}$.",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký má obvod (v cm)?": "Ein Quadrat hat die Seite ${@0}\\,\\text{cm}$. Wie groß ist sein Umfang (in cm)?",
  "štvrtok": "Donnerstag",
  "„O koľko viac“ zistíš odčítaním.": "„Um wie viel mehr“ findest du durch Subtrahieren.",
  "Rechteck": "Rechteck",
  "Verkaufte Eisbecher": "Verkaufte Eisbecher",
  "Gelesene Seiten": "Gelesene Seiten",
  "Gebackene Kuchen": "Gebackene Kuchen"
 }
});
