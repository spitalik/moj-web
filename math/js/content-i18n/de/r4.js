/* Deutsch: preklad js/rocniky/r4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/r4/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "r4-cisla10000": {
   "title": "Zahlen bis 10 000 und darüber",
   "summary": "Tausender, Hunderter, Zehner und Einer; große Zahlen lesen, schreiben und vergleichen.",
   "theory": [
    "<p>Jede Ziffer in einer Zahl hat ihre <strong>Stelle (Stellenwert)</strong>: Einer, Zehner, Hunderter, Tausender, Zehntausender …\n       Zehn Einer sind ein Zehner, zehn Zehner sind ein Hunderter, zehn Hunderter sind ein Tausender und zehn Tausender sind $10\\,000$.</p>",
    {
     "fig": "r4-rady",
     "caption": "Die Zahl $47\\,385$ hat 4 Zehntausender, 7 Tausender, 3 Hunderter, 8 Zehner und 5 Einer."
    },
    "<p>Große Zahlen schreiben wir mit einem Abstand nach jeweils drei Ziffern von rechts: $8\\,206$, $35\\,000$. So lassen sie sich leichter lesen:\n       <em>achttausendzweihundertsechs</em>, <em>fünfunddreißigtausend</em>.</p>",
    "<p><strong>Vergleichen:</strong> Größer ist die Zahl mit mehr Ziffern. Haben beide gleich viele Ziffern, vergleichen wir\n       von links – zuerst die Tausender, dann die Hunderter, Zehner und Einer. Zum Beispiel $5\\,382 &gt; 5\\,297$, weil 3 Hunderter mehr sind als 2 Hunderter.</p>"
   ],
   "examples": [
    {
     "task": "Schreibe als Zahl: 6 Tausender, 0 Hunderter, 4 Zehner und 9 Einer.",
     "steps": [
      "An die Hunderterstelle schreiben wir eine Null, damit sich die Ziffern nicht verschieben.",
      "$6\\,000 + 40 + 9 = 6\\,049$.",
      "<strong>Die Zahl ist $6\\,049$.</strong>"
     ]
    },
    {
     "task": "Vergleiche die Zahlen $7\\,615$ und $7\\,651$.",
     "steps": [
      "Beide Zahlen sind vierstellig und haben 7 Tausender und 6 Hunderter.",
      "Zehner: 1 ist weniger als 5.",
      "<strong>$7\\,615 &lt; 7\\,651$</strong>"
     ]
    }
   ]
  },
  "r4-scitanie": {
   "title": "Schriftliche Addition und Subtraktion",
   "summary": "Mehrstellige Zahlen untereinander addieren und subtrahieren.",
   "theory": [
    "<p>Bei der schriftlichen Addition schreiben wir die Zahlen <strong>untereinander</strong>, sodass Einer unter Einern, Zehner unter\n       Zehnern usw. stehen. Wir rechnen <strong>von rechts</strong>, bei den Einern beginnend. Ist die Summe in einer Spalte größer als 9, schreiben wir nur die Einer\n       und merken uns 1 für die nächste Spalte (Übertrag).</p>",
    {
     "fig": "r4-scitanie",
     "caption": "Schriftliche Addition $3\\,476 + 2\\,858 = 6\\,334$. Die kleinen Einsen oben sind die Überträge, die wir uns merken."
    },
    "<p>Bei der schriftlichen Subtraktion rechnen wir ebenfalls von den Einern aus. Ist die obere Ziffer kleiner als die untere, addieren wir zu ihr 10\n       und merken uns für die nächste Spalte eine 1, die wir zur unteren Ziffer addieren.</p>",
    "<p><strong>Probe:</strong> Das Ergebnis einer Subtraktion überprüfen wir durch Addieren. Wenn $5\\,203 - 1\\,868 = 3\\,335$,\n       muss $3\\,335 + 1\\,868 = 5\\,203$ gelten.</p>"
   ],
   "examples": [
    {
     "task": "Berechne schriftlich $4\\,587 + 3\\,765$.",
     "steps": [
      "$\\begin{array}{r}4587 \\\\ +\\,3765 \\\\ \\hline 8352\\end{array}$",
      "Einer: $7 + 5 = 12$, wir schreiben 2 und merken uns 1. Zehner: $8 + 6 + 1 = 15$, wir schreiben 5 und merken uns 1.",
      "Hunderter: $5 + 7 + 1 = 13$, wir schreiben 3 und merken uns 1. Tausender: $4 + 3 + 1 = 8$.",
      "<strong>Ergebnis: $8\\,352$</strong>"
     ]
    },
    {
     "task": "Berechne schriftlich $6\\,042 - 2\\,718$.",
     "steps": [
      "$\\begin{array}{r}6042 \\\\ -\\,2718 \\\\ \\hline 3324\\end{array}$",
      "Einer: 2 ist weniger als 8, deshalb $12 - 8 = 4$, wir merken uns 1.",
      "Zehner: $1 + 1 = 2$, $4 - 2 = 2$. Hunderter: 0 ist weniger als 7, deshalb $10 - 7 = 3$, wir merken uns 1.",
      "Tausender: $2 + 1 = 3$, $6 - 3 = 3$.",
      "<strong>Ergebnis: $3\\,324$</strong>. Probe: $3\\,324 + 2\\,718 = 6\\,042$."
     ]
    }
   ]
  },
  "r4-nasobenie": {
   "title": "Schriftliche Multiplikation und Division",
   "summary": "Multiplizieren mit einer einstelligen und einer zweistelligen Zahl, Dividieren durch eine einstellige Zahl mit Rest.",
   "theory": [
    "<p><strong>Schriftliche Multiplikation mit einer einstelligen Zahl:</strong> Wir multiplizieren nacheinander die Einer, Zehner, Hunderter …\n       Ist das Ergebnis größer als 9, schreiben wir die Einer, merken uns die Zehner und addieren sie zum nächsten Produkt.</p>",
    "<p><strong>Multiplikation mit einer zweistelligen Zahl:</strong> Zuerst multiplizieren wir mit den Einern, dann mit den Zehnern. Das zweite Teilprodukt\n       schreiben wir um eine Stelle nach links verschoben. Zum Schluss addieren wir die Teilprodukte.</p>",
    {
     "fig": "r4-nasobenie",
     "caption": "$243\\cdot 32$: zuerst $243\\cdot 2 = 486$, dann $243\\cdot 3 = 729$ nach links verschoben (bedeutet $7\\,290$). Zusammen $7\\,776$."
    },
    "<p><strong>Schriftliche Division:</strong> Wir dividieren von links. Wir nehmen so viele Ziffern, dass man dividieren kann, bestimmen das Ergebnis und den Rest,\n       holen die nächste Ziffer herunter und machen weiter. Bleibt am Ende etwas übrig, ist das der <strong>Rest</strong>, der immer kleiner ist als der Divisor.\n       Probe: $\\text{Quotient}\\cdot\\text{Divisor} + \\text{Rest} = \\text{Dividend}$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne schriftlich $1\\,627\\cdot 4$.",
     "steps": [
      "$\\begin{array}{r}1627 \\\\ \\cdot\\,4 \\\\ \\hline 6508\\end{array}$",
      "$4\\cdot 7 = 28$, wir schreiben 8 und merken uns 2. $4\\cdot 2 + 2 = 10$, wir schreiben 0 und merken uns 1.",
      "$4\\cdot 6 + 1 = 25$, wir schreiben 5 und merken uns 2. $4\\cdot 1 + 2 = 6$.",
      "<strong>Ergebnis: $6\\,508$</strong>"
     ]
    },
    {
     "task": "Berechne schriftlich $947 : 6$.",
     "steps": [
      "$9 : 6 = 1$, Rest 3.",
      "Wir holen die 4 herunter: $34 : 6 = 5$, Rest 4.",
      "Wir holen die 7 herunter: $47 : 6 = 7$, Rest 5.",
      "<strong>$947 : 6 = 157$, Rest 5.</strong> Probe: $157\\cdot 6 + 5 = 947$."
     ]
    }
   ]
  },
  "r4-slovne": {
   "title": "Sachaufgaben mit mehreren Rechenarten",
   "summary": "Aufgaben, die wir in mehreren Schritten lösen: Einkäufe, Aufteilen in Gruppen, Vergleichen.",
   "theory": [
    "<p>Manche Sachaufgaben lassen sich nicht mit einer einzigen Rechnung lösen. Wir gehen in Schritten vor:</p>\n       <ol><li>Was wissen wir? Was suchen wir?</li><li>Was muss ich zuerst herausfinden, um antworten zu können?</li>\n       <li>Ich rechne jeden Schritt aus und schreibe ihn auf.</li><li>Ich schreibe die Antwort und prüfe, ob sie sinnvoll ist.</li></ol>",
    "<p><strong>Hilfreiche Wörter:</strong> <em>um … mehr / weniger</em> – wir addieren oder subtrahieren;\n       <em>…-mal so viel / so wenig</em> – wir multiplizieren oder dividieren; <em>gerecht verteilt</em>, <em>je …</em> – wir dividieren;\n       <em>Rest</em>, <em>Rückgeld</em> – wir subtrahieren.</p>",
    "<p>Die Schritte können wir auch in einem einzigen Term mit Klammern aufschreiben, zum Beispiel $50 - 3\\cdot 12 = 50 - 36 = 14$.\n       Denk an die Rechenreihenfolge: zuerst Multiplizieren und Dividieren, dann Addieren und Subtrahieren.</p>"
   ],
   "examples": [
    {
     "task": "Mama kaufte 3 Bücher zu je 12 Euro und bezahlte mit einem 50-Euro-Schein. Wie viel Euro Rückgeld bekam sie?",
     "steps": [
      "Zuerst bestimmen wir den Preis der Bücher: $3\\cdot 12 = 36$ Euro.",
      "Dann das Rückgeld: $50 - 36 = 14$ Euro.",
      "Zusammen in einem Term: $50 - 3\\cdot 12 = 14$.",
      "<strong>Antwort: Mama bekam 14 Euro zurück.</strong>"
     ]
    },
    {
     "task": "Auf einen Ausflug fuhren 4 Klassen mit je 23 Kindern. Sie fuhren mit Bussen, in jedem saßen 46 Kinder. Wie viele Busse fuhren?",
     "steps": [
      "Anzahl der Kinder: $4\\cdot 23 = 92$.",
      "Anzahl der Busse: $92 : 46 = 2$.",
      "<strong>Antwort: Es fuhren 2 Busse.</strong>"
     ]
    }
   ]
  },
  "r4-rimske": {
   "title": "Römische Zahlen",
   "summary": "Die Zeichen I, V, X, L, C, D, M und das Schreiben von Zahlen mit römischen Ziffern.",
   "theory": [
    "<p>Die alten Römer schrieben Zahlen mit sieben Buchstaben. Römische Zahlen finden wir bis heute auf Uhren, bei Jahrhunderten\n       oder an Gebäuden.</p>",
    {
     "fig": "r4-rimske",
     "caption": "Römische Ziffern und ihre Werte."
    },
    "<p><strong>Regeln:</strong> Die Werte der Zeichen werden addiert: $\\text{XVI} = 10 + 5 + 1 = 16$. Dasselbe Zeichen (I, X, C, M)\n       dürfen wir höchstens dreimal hintereinander schreiben: $\\text{III} = 3$, $\\text{XXX} = 30$.</p>",
    "<p>Steht ein kleineres Zeichen <strong>vor</strong> einem größeren, wird es subtrahiert: $\\text{IV} = 4$, $\\text{IX} = 9$, $\\text{XL} = 40$,\n       $\\text{XC} = 90$. Deshalb schreiben wir 4 nicht als IIII, sondern als IV.</p>"
   ],
   "examples": [
    {
     "task": "Welche Zahl ist mit den römischen Ziffern $\\text{LXXIV}$ geschrieben?",
     "steps": [
      "Wir zerlegen: $\\text{L} = 50$, $\\text{XX} = 20$, $\\text{IV} = 4$.",
      "$50 + 20 + 4 = 74$.",
      "<strong>$\\text{LXXIV} = 74$</strong>"
     ]
    },
    {
     "task": "Schreibe die Zahl 39 mit römischen Ziffern.",
     "steps": [
      "$39 = 30 + 9$.",
      "$30 = \\text{XXX}$, $9 = \\text{IX}$.",
      "<strong>$39 = \\text{XXXIX}$</strong>"
     ]
    }
   ]
  },
  "r4-utvary": {
   "title": "Winkel, Dreieck und Vierecke",
   "summary": "Spitzer, rechter und stumpfer Winkel; Dreieck, Rechteck, Quadrat und andere Vierecke.",
   "theory": [
    "<p>Ein <strong>Winkel</strong> wird von zwei Schenkeln gebildet, die von einem Punkt ausgehen – dem <strong>Scheitelpunkt</strong>.\n       Ein rechter Winkel hat die Form einer Heftecke. Ein Winkel, der kleiner als ein rechter ist, heißt <strong>spitz</strong>, ein Winkel, der größer als ein rechter ist\n       (aber noch keine gerade Linie), heißt <strong>stumpf</strong>.</p>",
    {
     "fig": "r4-uhly",
     "caption": "Spitzer, rechter und stumpfer Winkel. Den rechten Winkel kennzeichnen wir mit einem kleinen Quadrat."
    },
    "<p>Ein <strong>Dreieck</strong> hat 3 Seiten, 3 Ecken und 3 Winkel. Ein <strong>Viereck</strong> hat 4 Seiten, 4 Ecken und 4 Winkel.\n       Ein <strong>Rechteck</strong> ist ein Viereck mit 4 rechten Winkeln, seine gegenüberliegenden Seiten sind gleich lang.\n       Ein <strong>Quadrat</strong> ist ein Rechteck, dessen 4 Seiten alle gleich lang sind.</p>",
    {
     "fig": "r4-stvoruholniky",
     "caption": "Quadrat und Rechteck haben nur rechte Winkel. Jedes Quadrat ist zugleich ein Rechteck."
    }
   ],
   "examples": [
    {
     "task": "Ist der Winkel zwischen den Uhrzeigern um 3:00 Uhr spitz, recht oder stumpf?",
     "steps": [
      "Der kleine Zeiger zeigt auf die 3, der große auf die 12.",
      "Dazwischen liegt ein Viertel des Kreises – die Form einer Heftecke.",
      "<strong>Es ist ein rechter Winkel.</strong>"
     ]
    },
    {
     "task": "Ein Rechteck hat eine Seite von 7 cm und eine andere von 4 cm. Wie lang sind die übrigen zwei Seiten?",
     "steps": [
      "Gegenüberliegende Seiten eines Rechtecks sind gleich lang.",
      "<strong>Die übrigen Seiten sind 7 cm und 4 cm lang.</strong>"
     ]
    }
   ]
  },
  "r4-obvod": {
   "title": "Umfang und Flächeninhalt",
   "summary": "Umfang als Länge des Randes, Flächeninhalt als Anzahl der Kästchen, die eine Figur bedecken.",
   "theory": [
    "<p>Der <strong>Umfang</strong> einer Figur ist die Länge ihres Randes – die Summe der Längen aller Seiten. Der Umfang eines Rechtecks mit den Seiten\n       $a$ und $b$ ist $a + b + a + b$, also $2\\cdot(a + b)$. Der Umfang eines Quadrats mit der Seite $a$ ist $4\\cdot a$.</p>",
    "<p>Der <strong>Flächeninhalt</strong> sagt, wie viel Platz eine Figur einnimmt. Wir bestimmen ihn, indem wir die Kästchen zählen, die sie bedecken.\n       Ein Kästchen mit der Seite 1 cm hat den Flächeninhalt 1 Quadratzentimeter ($1\\,\\text{cm}^2$).</p>",
    {
     "fig": "r4-obvod-obsah",
     "caption": "Rechteck 4 cm × 3 cm: Der Umfang ist die Länge des blauen Randes, der Flächeninhalt ist die Anzahl der Kästchen darin."
    },
    "<p>Beim Rechteck müssen wir die Kästchen nicht einzeln zählen: In jeder Reihe sind so viele, wie die eine Seite lang ist,\n       und es gibt so viele Reihen, wie die andere Seite lang ist. Deshalb ist der Flächeninhalt $= a\\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne den Umfang eines Rechtecks mit den Seiten 8 cm und 5 cm.",
     "steps": [
      "$o = 8 + 5 + 8 + 5$.",
      "$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$.",
      "<strong>Der Umfang beträgt $26\\,\\text{cm}$.</strong>"
     ]
    },
    {
     "task": "Ein Quadrat hat einen Umfang von 36 cm. Wie lang ist seine Seite?",
     "steps": [
      "Ein Quadrat hat 4 gleich lange Seiten, zusammen 36 cm.",
      "$36 : 4 = 9$.",
      "<strong>Die Seite ist $9\\,\\text{cm}$ lang.</strong>"
     ]
    }
   ]
  },
  "r4-jednotky": {
   "title": "Einheiten umrechnen und mit Daten arbeiten",
   "summary": "Einheiten für Länge, Gewicht, Volumen und Zeit; Daten aus Tabelle und Diagramm ablesen.",
   "theory": [
    "<p><strong>Länge:</strong> $1\\,\\text{km} = 1\\,000\\,\\text{m}$, $1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$,\n       $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{cm} = 10\\,\\text{mm}$.<br>\n       <strong>Gewicht (Masse):</strong> $1\\,\\text{t} = 1\\,000\\,\\text{kg}$, $1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$.<br>\n       <strong>Volumen:</strong> $1\\,\\text{hl} = 100\\,\\text{l}$, $1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$.<br>\n       <strong>Zeit:</strong> $1\\,\\text{h} = 60\\,\\text{min}$, $1\\,\\text{min} = 60\\,\\text{s}$, 1 Tag = 24 h.</p>",
    {
     "fig": "r4-jednotky",
     "caption": "Wenn wir eine größere Einheit in eine kleinere umrechnen, wird die Zahl größer – wir multiplizieren. Umgekehrt dividieren wir."
    },
    "<p><strong>Daten</strong> lesen wir oft aus einer Tabelle oder einem Säulendiagramm ab. Die Höhe der Säule zeigt den Wert –\n       wir lesen ihn an der senkrechten Achse ab. Mit den Daten können wir dann vergleichen (um wie viel mehr) und addieren (wie viel zusammen).</p>"
   ],
   "examples": [
    {
     "task": "Wie viele Zentimeter sind 4 m 35 cm?",
     "steps": [
      "$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$.",
      "$400 + 35 = 435$.",
      "<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Wie viele Kilogramm sind $6\\,000\\,\\text{g}$?",
     "steps": [
      "$1\\,\\text{kg} = 1\\,000\\,\\text{g}$, wir rechnen in eine größere Einheit um, deshalb dividieren wir.",
      "$6\\,000 : 1\\,000 = 6$.",
      "<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, deshalb ${@3} : {@4} = {@5}$. Also ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, deshalb ${@3}\\cdot {@4} = {@5}$. Also ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$\\text{{@0}} = {@1}$.": "$\\text{{@0}} = {@1}$.",
  "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, der Umfang ist ${@4}\\,\\text{{@5}}$.",
  "$o = 4\\cdot {@0} = {@1}$, obvod je ${@2}\\,\\text{{@3}}$.": "$o = 4\\cdot {@0} = {@1}$, der Umfang ist ${@2}\\,\\text{{@3}}$.",
  "${@0} + {@1} + {@2} + {@3} = {@4}$. Kde je 0 kusov, píšeme na to miesto nulu.": "${@0} + {@1} + {@2} + {@3} = {@4}$. Wo es 0 Stück gibt, schreiben wir an diese Stelle eine Null.",
  "${@0} - {@1} = 0$, nulu na začiatok nepíšeme": "${@0} - {@1} = 0$, eine Null am Anfang schreiben wir nicht",
  "${@0} - {@1} = {@2}$, píšeme {@3}": "${@0} - {@1} = {@2}$, schreibe {@3}",
  "${@0} : {@1} = {@2}$, lebo ${@3}\\cdot {@4} = {@5}$, zvyšok {@6}": "${@0} : {@1} = {@2}$, weil ${@3}\\cdot {@4} = {@5}$, Rest {@6}",
  "${@0} = {@1}$. Hlasovalo {@2} {@3}.": "${@0} = {@1}$. Abgestimmt haben {@2} {@3}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, pripočítame ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, wir addieren ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.",
  "= 12 štvorčekov = 12 cm²": "= 12 Kästchen = 12 cm²",
  "Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.": "Wenn es zwei rechte Winkel hätte, wären seine Schenkel parallel und würden sich nicht treffen.",
  "Ako sa volá tento útvar? Vyber najpresnejší názov.": "Wie heißt diese Figur? Wähle den genauesten Namen.",
  "Ako zapíšeš rímskymi číslicami {@0}?": "Wie schreibst du {@0} in römischen Zahlzeichen?",
  "Aká dlhá je vodorovná strana obdĺžnika (v cm)?": "Wie lang ist die waagerechte Seite des Rechtecks (in cm)?",
  "Aká dlhá je zvislá strana obdĺžnika (v cm)?": "Wie lang ist die senkrechte Seite des Rechtecks (in cm)?",
  "Aké číslo je zapísané rímskymi číslicami $\\text{{@0}}$?": "Welche Zahl ist in römischen Zahlzeichen als $\\text{{@0}}$ geschrieben?",
  "Akú hodnotu má rímska číslica $\\text{{@0}}$?": "Welchen Wert hat das römische Zahlzeichen $\\text{{@0}}$?",
  "Akú hodnotu má časť $\\text{{@0}}$?": "Welchen Wert hat der Teil $\\text{{@0}}$?",
  "Aký je tento uhol?": "Was für ein Winkel ist das?",
  "Chýbajúci sčítanec zistíme odčítaním: ${@0} - {@1} = {@2}$.": "Den fehlenden Summanden finden wir durch Subtrahieren: ${@0} - {@1} = {@2}$.",
  "Desiatky": "Zehner",
  "Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.": "Die Kinder in der Klasse haben abgestimmt, welches Obst sie am liebsten mögen. Jedes Kind hat einmal abgestimmt.",
  "Deľ zľava a zvyšok na konci musí byť menší ako {@0}.": "Dividiere von links, und der Rest am Ende muss kleiner als {@0} sein.",
  "Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.": "Dividiere von links. Nimm so viele Ziffern, dass man dividieren kann, und hole nach und nach die nächsten herunter.",
  "Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.": "Du hast in den Umfang nur zwei Seiten eingerechnet. Den Umfang bilden alle vier Seiten.",
  "Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.": "Nach rechts (zur kleineren Einheit) multiplizieren wir, nach links (zur größeren Einheit) dividieren wir.",
  "Druhý súčin posuň o miesto doľava (znamená ${@0}$) a sčítaj: koľko je ${@1} + {@2}$?": "Verschiebe das zweite Produkt um eine Stelle nach links (es bedeutet ${@0}$) und addiere: Wie viel ist ${@1} + {@2}$?",
  "Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.": "Du hast das zweite Teilprodukt nicht um eine Stelle nach links verschoben. Du multiplizierst mit Zehnern, deshalb bedeutet es zehnmal so viel.",
  "Dvakrát": "Zweimal",
  "Hodina má 60 minút a minúta 60 sekúnd.": "Eine Stunde hat 60 Minuten und eine Minute 60 Sekunden.",
  "Hodnotu {@0} má rímska číslica {@1}, nie {@2}.": "Den Wert {@0} hat das römische Zahlzeichen {@1}, nicht {@2}.",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.": "Addiere die Werte nicht. „Um wie viel mehr“ ist ein Unterschied – ziehe den kleineren Wert vom größeren ab.",
  "Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.": "Addiere die Werte der Zeichen. Steht ein kleineres Zeichen vor einem größeren (z. B. IV, IX, XL, XC), ziehe es ab.",
  "Hľadáme, koľko sme odčítali: ${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "Wir suchen, wie viel wir subtrahiert haben: ${@0} - {@1} = {@2}$. Probe: ${@3} - {@4} = {@5}$.",
  "I = 1, V = 5, X = 10 – a ďalej L, C, D, M.": "I = 1, V = 5, X = 10 – und weiter L, C, D, M.",
  "Jakub": "Jakob",
  "Je toto tvrdenie pravdivé? „{@0}“": "Ist diese Aussage wahr? „{@0}“",
  "Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.": "Ein Dreieck hat 3 Winkel, zwei haben $2\\cdot 3 = 6$ Winkel.",
  "Jednotky": "Einer",
  "Každý obdĺžnik je štvorec.": "Jedes Rechteck ist ein Quadrat.",
  "Každý uhol má 2 ramená a 1 vrchol.": "Jeder Winkel hat 2 Schenkel und 1 Scheitel.",
  "Každý štvorec je obdĺžnik.": "Jedes Quadrat ist ein Rechteck.",
  "Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. {@0}": "Jedes Kästchen im Gitter hat die Seitenlänge 1 cm. Bestimme den Umfang (in cm) und den Flächeninhalt (in cm²) des eingefärbten Rechtecks. Schreibe sie in der Form „Umfang; Flächeninhalt“. {@0}",
  "Koľko autobusov po {@0} miest treba, aby sa zmestili všetci?": "Wie viele Busse mit je {@0} Plätzen braucht man, damit alle hineinpassen?",
  "Koľko detí hlasovalo za {@0}?": "Wie viele Kinder haben für {@0} gestimmt?",
  "Koľko eur majú spolu? Vypočítaj ${@0} + {@1} + {@2}$.": "Wie viele Euro haben sie zusammen? Rechne ${@0} + {@1} + {@2}$.",
  "Koľko eur má {@0}?": "Wie viele Euro hat {@0}?",
  "Koľko eur vydali? Vypočítaj ${@0} - {@1}$.": "Wie viele Euro gab es zurück? Rechne ${@0} - {@1}$.",
  "Koľko je ${@0} + {@1}$ (dve susedné strany)?": "Wie viel ist ${@0} + {@1}$ (zwei benachbarte Seiten)?",
  "Koľko je riadkov?": "Wie viele Zeilen sind es?",
  "Koľko kilogramov zemiakov zostalo po predaji?": "Wie viele Kilogramm Kartoffeln sind nach dem Verkauf übrig geblieben?",
  "Koľko pravých uhlov má obdĺžnik?": "Wie viele rechte Winkel hat ein Rechteck?",
  "Koľko pravých uhlov má štvorec?": "Wie viele rechte Winkel hat ein Quadrat?",
  "Koľko ramien má jeden uhol?": "Wie viele Schenkel hat ein Winkel?",
  "Koľko uhlov majú spolu dva trojuholníky?": "Wie viele Winkel haben zwei Dreiecke zusammen?",
  "Koľko uhlov má trojuholník?": "Wie viele Winkel hat ein Dreieck?",
  "Koľko vrcholov má štvoruholník?": "Wie viele Ecken hat ein Viereck?",
  "Koľko vriec po {@0} kg sa z nich naplní?": "Wie viele Säcke zu je {@0} kg kann man damit füllen?",
  "Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?": "Wie viele Personen fahren insgesamt auf den Ausflug (Schüler und Lehrer)?",
  "Koľko štvorčekov je v jednom riadku?": "Wie viele Kästchen sind in einer Zeile?",
  "Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) {@0}": "Wie viele Kästchen der Größe 1 cm × 1 cm bedecken das eingefärbte Rechteck? (Gib den Flächeninhalt in cm² an.) {@0}",
  "Koľkokrát sa {@0} zmestí do {@1}?": "Wie oft passt {@0} in {@1}?",
  "Ktorá číslica je v čísle ${@0}$ na mieste {@1}?": "Welche Ziffer steht in der Zahl ${@0}$ an der Stelle der {@1}?",
  "Ktoré číslo je o {@0} menšie ako ${@1}$?": "Welche Zahl ist um {@0} kleiner als ${@1}$?",
  "Ktoré číslo je o {@0} väčšie ako ${@1}$?": "Welche Zahl ist um {@0} größer als ${@1}$?",
  "Lucia": "Lucia",
  "Martin": "Martin",
  "Meníš na menšiu jednotku – číslo sa zväčší, násob.": "Du rechnest in eine kleinere Einheit um – die Zahl wird größer, multipliziere.",
  "Meníš na väčšiu jednotku – číslo sa zmenší, deľ.": "Du rechnest in eine größere Einheit um – die Zahl wird kleiner, dividiere.",
  "Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.": "Ein kleineres Zeichen vor einem größeren wird subtrahiert, nicht addiert. Zum Beispiel IV = 5 − 1 = 4.",
  "Má 3 strany a 3 vrcholy – je to trojuholník.": "Sie hat 3 Seiten und 3 Ecken – es ist ein Dreieck.",
  "Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.": "Sie hat 4 rechte Winkel und alle Seiten sind gleich lang – es ist ein Quadrat.",
  "Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.": "Sie hat 4 rechte Winkel, aber benachbarte Seiten sind verschieden lang – es ist ein Rechteck.",
  "Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.": "Sie hat 4 Seiten, aber ihre Winkel sind keine rechten – es ist ein allgemeines Viereck.",
  "Na výlet idú {@0} triedy po {@1} žiakov a s nimi {@2} učitelia. Jeden autobus má {@3} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?": "Auf den Ausflug fahren {@0} Klassen mit je {@1} Schülern und mit ihnen {@2} Lehrer. Ein Bus hat {@3} Plätze. Wie viele Busse müssen sie bestellen, damit alle hineinpassen?",
  "Najprv ${@0}\\cdot {@1} = {@2}$, potom ${@3}\\cdot {@4} = {@5}$ (píšeme o miesto doľava, znamená to ${@6}$). Sčítame: ${@7} + {@8} = {@9}$.": "Zuerst ${@0}\\cdot {@1} = {@2}$, dann ${@3}\\cdot {@4} = {@5}$ (wir schreiben es eine Stelle weiter links, es bedeutet ${@6}$). Wir addieren: ${@7} + {@8} = {@9}$.",
  "Najprv cena nákupu: ${@0}\\cdot {@1} = {@2}$ {@3}. Potom vydané peniaze: ${@4} - {@5} = {@6}$. Vydali {@7} {@8} {@9}.": "Zuerst der Preis des Einkaufs: ${@0}\\cdot {@1} = {@2}$ {@3}. Dann das Rückgeld: ${@4} - {@5} = {@6}$. Zurück gab man {@7} {@8} {@9}.",
  "Najprv násob jednotkami: koľko je ${@0}\\cdot {@1}$?": "Multipliziere zuerst mit den Einern: Wie viel ist ${@0}\\cdot {@1}$?",
  "Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.": "Rechne zuerst die größere Einheit in die kleinere um und addiere dann den Rest.",
  "Najprv premeň väčšiu jednotku: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Rechne zuerst die größere Einheit um: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.": "Finde zuerst heraus, wie viele Kilogramm übrig geblieben sind, dann wie oft ein Sack hineinpasst.",
  "Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.": "Finde zuerst heraus, wie viel der ganze Einkauf gekostet hat, und ziehe das dann vom Geldschein ab.",
  "Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.": "Schreibe die Zahlen untereinander, Einer unter Einer, und addiere von rechts. Vergiss die gemerkten Zahlen nicht.",
  "Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.": "Schreibe die Ziffern nacheinander in der Reihenfolge Tausender, Hunderter, Zehner, Einer. Vergiss die Nullen nicht.",
  "Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.": "Multipliziere von rechts: zuerst die Einer, dann die Zehner, Hunderter … Die Zehner aus dem Produkt merkst du dir.",
  "Obdĺžnik 4 krát 3 v štvorcovej sieti": "Rechteck 4 mal 3 im Kästchengitter",
  "Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.": "Ein Rechteck hat zwei längere und zwei kürzere Seiten. Addiere alle vier.",
  "Obdĺžnik má protiľahlé strany rovnako dlhé.": "Ein Rechteck hat gleich lange gegenüberliegende Seiten.",
  "Obdĺžnik má všetky 4 uhly pravé.": "Ein Rechteck hat 4 rechte Winkel.",
  "Obdĺžnik má {@0} {@1} po {@2} štvorčekoch: ${@3}\\cdot {@4} = {@5}$. Obsah je ${@6}\\,\\text{cm}^2$.": "Das Rechteck hat {@0} {@1} mit je {@2} Kästchen: ${@3}\\cdot {@4} = {@5}$. Der Flächeninhalt ist ${@6}\\,\\text{cm}^2$.",
  "Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.": "Ein Rechteck kann verschieden lange benachbarte Seiten haben, zum Beispiel 5 cm und 2 cm.",
  "Obdĺžnik v štvorcovej sieti": "Rechteck im Kästchengitter",
  "Obsah: koľko je ${@0}\\cdot {@1}$?": "Flächeninhalt: Wie viel ist ${@0}\\cdot {@1}$?",
  "Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.": "Der Umfang ist die Länge des Randes, der Flächeninhalt ist die Anzahl der Kästchen innen.",
  "Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.": "Der Umfang ist nicht die Anzahl der Kästchen am Rand, sondern die Länge des Randes. Addiere die Längen aller Seiten.",
  "Obvod tvoria 4 rovnaké strany: ${@0} : 4 = {@1}$, strana má ${@2}\\,\\text{{@3}}$.": "Den Umfang bilden 4 gleiche Seiten: ${@0} : 4 = {@1}$, die Seite ist ${@2}\\,\\text{{@3}}$ lang.",
  "Obvod tvoria dve také dvojice strán: koľko je $2\\cdot {@0}$?": "Den Umfang bilden zwei solche Seitenpaare: Wie viel ist $2\\cdot {@0}$?",
  "Obvod štvorca vydeľ štyrmi.": "Dividiere den Umfang des Quadrats durch vier.",
  "Obvod: koľko je $2\\cdot({@0} + {@1})$?": "Umfang: Wie viel ist $2\\cdot({@0} + {@1})$?",
  "Od menšenca odčítaj rozdiel.": "Ziehe vom Minuenden die Differenz ab.",
  "Od súčtu odčítaj známy sčítanec.": "Ziehe von der Summe den bekannten Summanden ab.",
  "Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.": "Subtrahiere von rechts. Ist die obere Ziffer kleiner, zähle 10 dazu und merke dir 1 für die nächste Spalte.",
  "Odčítaj {@0}. Pozor na prechod cez rád.": "Subtrahiere {@0}. Achte auf den Übergang über die Stelle.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu celého nákupu.": "Du hast den Preis nur eines Gegenstands abgezogen. Es wurden {@0} Gegenstände gekauft, rechne zuerst den Preis des ganzen Einkaufs aus.",
  "Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "Ein spitzer Winkel ist kleiner als die Ecke eines Heftes. Vergleiche diesen Winkel mit der Ecke eines Heftes.",
  "Ostrý, pravý a tupý uhol": "Spitzer, rechter und stumpfer Winkel",
  "Porovnaj najprv počet číslic, potom číslice zľava doprava.": "Vergleiche zuerst die Anzahl der Ziffern, dann die Ziffern von links nach rechts.",
  "Porovnaj uhol s rohom zošita (pravým uhlom).": "Vergleiche den Winkel mit der Ecke eines Heftes (einem rechten Winkel).",
  "Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: ${@0} {@1} {@2}$.": "Wir vergleichen von links Stelle für Stelle. Die erste verschiedene Ziffer entscheidet: ${@0} {@1} {@2}$.",
  "Potom desiatkami: koľko je ${@0}\\cdot {@1}$?": "Dann mit den Zehnern: Wie viel ist ${@0}\\cdot {@1}$?",
  "Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.": "Schau, bis zu welcher Linie die Säule reicht, und lies die Zahl links ab.",
  "Počet ľudí: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, zvyšok {@7}.": "Anzahl der Personen: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, Rest {@7}.",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.": "Du hast mit 100 gerechnet. Bei der Zeit gilt $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.",
  "Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.": "Ein rechter Winkel hat genau die Form der Ecke eines Heftes und wird mit einem kleinen Quadrat markiert. Vergleiche diesen Winkel mit der Ecke eines Heftes.",
  "Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.": "Stell dir die Figur vor und zähle ihre Ecken, Seiten oder Winkel.",
  "Premeň: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Rechne um: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Premeň: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$": "Rechne um: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$",
  "Prevody jednotiek dĺžky a hmotnosti": "Umrechnen von Längen- und Gewichtseinheiten",
  "Prečítaj hodnotu každého stĺpca a všetky sčítaj.": "Lies den Wert jeder Säule ab und addiere alle.",
  "Prečítaj obe hodnoty a odčítaj menšiu od väčšej.": "Lies beide Werte ab und ziehe den kleineren vom größeren ab.",
  "Pripočítaj hlasy za {@0}: koľko je spolu teraz?": "Addiere die Stimmen für {@0}: Wie viele sind es jetzt zusammen?",
  "Pripočítaj {@0}. Pozor na prechod cez rád.": "Addiere {@0}. Achte auf den Übergang über die Stelle.",
  "Pripíš {@0}: koľkokrát sa {@1} zmestí do {@2}?": "Hole {@0} herunter: Wie oft passt {@1} in {@2}?",
  "Písomné násobenie 243 krát 32": "Schriftliche Multiplikation 243 mal 32",
  "Písomné sčítanie 3476 plus 2858": "Schriftliche Addition 3476 plus 2858",
  "Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.": "Du hast alle Kartoffeln auf die Säcke verteilt, auch die verkauften. Ziehe zuerst ab, wie viel verkauft wurde.",
  "Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.": "Zerlege die Zahl in Zehner und Einer. Denk daran: 4 = IV, 9 = IX, 40 = XL, 90 = XC.",
  "Rozložíme: {@0}. Spolu ${@1} = \\text{{@2}}$.": "Wir zerlegen: {@0}. Zusammen ${@1} = \\text{{@2}}$.",
  "Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.": "Du hast die Stellen von links gezählt. Die Einer sind die letzte Ziffer rechts, von dort gehst du nach links.",
  "Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste {@0} je číslica {@1}.": "Die Stellen lesen wir von rechts: Einer, Zehner, Hunderter, Tausender, Zehntausender. An der Stelle der {@0} steht die Ziffer {@1}.",
  "Rímske číslice a ich hodnoty": "Römische Zahlzeichen und ihre Werte",
  "Samuel": "Samuel",
  "Skúška: ${@0} + {@1} = {@2}$.": "Probe: ${@0} + {@1} = {@2}$.",
  "Spoj obe časti: ako zapíšeš {@0}?": "Verbinde beide Teile: Wie schreibst du {@0}?",
  "Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.": "Denk daran: Ein Rechteck hat 4 rechte Winkel, ein Quadrat hat zusätzlich lauter gleich lange Seiten.",
  "Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).": "Zähle die Seiten und schau, ob die Winkel rechte sind (kleines Quadrat in der Ecke).",
  "Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.": "Zähle die Seiten der Figur. Ein Dreieck hat 3 Seiten, ein Viereck 4.",
  "Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.": "Zähle alle Personen zusammen, auch die Lehrer. Wenn nach dem Dividieren jemand übrig bleibt, braucht er einen weiteren Bus.",
  "Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.": "Zähle die Kästchen in einer Zeile und multipliziere mit der Anzahl der Zeilen.",
  "Stovky": "Hunderter",
  "Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.": "Du hast die Seite mit sich selbst multipliziert – das wäre der Flächeninhalt. Der Umfang ist die Summe aller vier Seiten.",
  "Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.": "Du hast die Seiten addiert. Der Flächeninhalt ist die Anzahl der Kästchen: Kästchen in einer Zeile mal Anzahl der Zeilen.",
  "Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.": "Du hast die Seiten multipliziert – das wäre der Flächeninhalt. Der Umfang ist die Länge des Randes, die Seiten muss man addieren.",
  "Strany sú {@0} cm a {@1} cm. Obvod: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Obsah: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.": "Die Seiten sind {@0} cm und {@1} cm lang. Umfang: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Flächeninhalt: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.",
  "Stĺpcový diagram hlasovania": "Säulendiagramm der Abstimmung",
  "Stĺpec „{@0}“ siaha po čiaru {@1}. Hlasovalo {@2} {@3}.": "Die Säule „{@0}“ reicht bis zur Linie {@1}. Abgestimmt haben {@2} {@3}.",
  "Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{{@0}}$?": "Addiere die Werte aller Teile. Welche Zahl ist $\\text{{@0}}$?",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.": "Du hast nur zwei Seiten addiert. Ein Rechteck hat vier Seiten, deshalb multipliziere die Summe zweier benachbarter Seiten noch mit zwei.",
  "Tabuľka miestnych hodnôt pre číslo 47 385": "Stellenwerttafel für die Zahl 47 385",
  "Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.": "Dasselbe Zeichen darfst du höchstens dreimal hintereinander schreiben. Statt vier gleicher Zeichen verwende die Subtraktion, zum Beispiel 4 = IV.",
  "Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.": "Diese Figur hat rechte Winkel (kleines Quadrat in der Ecke), deshalb hat sie einen genaueren Namen.",
  "Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.": "Diese Figur hat keine rechten Winkel. Quadrat und Rechteck haben lauter rechte Winkel.",
  "Tisíce": "Tausender",
  "To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.": "Das ist der Preis des ganzen Einkaufs. Finde noch heraus, wie viele Euro vom Geldschein zurückgegeben wurden.",
  "To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.": "Das ist der Umfang – die Länge des Randes. Der Flächeninhalt ist die Anzahl der Kästchen innen.",
  "To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.": "Das ist die Anzahl der Obstsorten. Addiere, wie viele Kinder für jedes Obst gestimmt haben.",
  "To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po {@0} kg sa z nich naplní.": "Das sind die Kilogramm, die übrig geblieben sind. Finde noch heraus, wie viele Säcke zu je {@0} kg man damit füllen kann.",
  "Toľko má len {@0}. Pýtame sa, koľko majú spolu všetky tri deti.": "So viel hat nur {@0}. Wir fragen, wie viel alle drei Kinder zusammen haben.",
  "Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.": "So viele Winkel hat ein Dreieck. Es sind aber zwei Dreiecke.",
  "Treba {@0} {@1}.": "Man braucht {@0} {@1}.",
  "Trikrát": "Dreimal",
  "Trojuholník má 3 vrcholy, a preto aj 3 uhly.": "Ein Dreieck hat 3 Ecken und deshalb auch 3 Winkel.",
  "Trojuholník môže mať dva pravé uhly.": "Ein Dreieck kann zwei rechte Winkel haben.",
  "Tupý uhol je menší ako pravý uhol.": "Ein stumpfer Winkel ist kleiner als ein rechter Winkel.",
  "Tupý uhol je väčší ako pravý, menší je ostrý uhol.": "Ein stumpfer Winkel ist größer als ein rechter, kleiner ist der spitze Winkel.",
  "Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "Ein stumpfer Winkel ist größer als die Ecke eines Heftes. Vergleiche diesen Winkel mit der Ecke eines Heftes.",
  "Uhol je menší ako roh zošita, je ostrý.": "Der Winkel ist kleiner als die Ecke eines Heftes, er ist spitz.",
  "Uhol je väčší ako roh zošita, je tupý.": "Der Winkel ist größer als die Ecke eines Heftes, er ist stumpf.",
  "Uhol má tvar rohu zošita, je pravý.": "Der Winkel hat die Form der Ecke eines Heftes, er ist ein rechter Winkel.",
  "V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.": "In einer Spalte hast du die obere Ziffer von der unteren abgezogen, weil sie kleiner war. Dann zähle zur oberen Ziffer 10 dazu und merke dir 1.",
  "V obchode mali {@0} kg zemiakov. Predali {@1} kg a zvyšok rozdelili do vriec po {@2} kg. Koľko vriec naplnili?": "Im Laden gab es {@0} kg Kartoffeln. Verkauft wurden {@1} kg und der Rest wurde in Säcke zu je {@2} kg verteilt. Wie viele Säcke wurden gefüllt?",
  "V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.": "Im Ergebnis fehlt dir eine Null. Wenn man nach dem Herunterholen einer Ziffer nicht dividieren kann, schreibe 0 ins Ergebnis und hole die nächste Ziffer herunter.",
  "Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.": "Du hast eine Null ausgelassen. Fehlt eine Stelle, schreibe an ihren Platz 0, sonst verschieben sich die Ziffern.",
  "Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.": "Multipliziere zuerst mit den Einern, dann mit den Zehnern. Verschiebe das zweite Ergebnis um eine Stelle nach links und addiere beide.",
  "Vynásobil si len jednotkami. Vynásob aj desiatkami ({@0}) a oba čiastočné súčiny sčítaj.": "Du hast nur mit den Einern multipliziert. Multipliziere auch mit den Zehnern ({@0}) und addiere beide Teilprodukte.",
  "Vypočítaj obvod obdĺžnika so stranami ${@0}\\,\\text{{@1}}$ a ${@2}\\,\\text{{@3}}$. Výsledok zapíš v {@4}.": "Berechne den Umfang eines Rechtecks mit den Seiten ${@0}\\,\\text{{@1}}$ und ${@2}\\,\\text{{@3}}$. Gib das Ergebnis in {@4} an.",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$. Výsledok zapíš v {@2}.": "Berechne den Umfang eines Quadrats mit der Seite ${@0}\\,\\text{{@1}}$. Gib das Ergebnis in {@2} an.",
  "Vypočítaj písomne ${@0} + {@1}$.": "Rechne schriftlich ${@0} + {@1}$.",
  "Vypočítaj písomne ${@0} - {@1}$.": "Rechne schriftlich ${@0} - {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$.": "Rechne schriftlich ${@0} : {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "Rechne schriftlich ${@0} : {@1}$. Schreibe das Ergebnis und den Rest getrennt durch ein Semikolon.",
  "Vypočítaj písomne ${@0}\\cdot {@1}$.": "Rechne schriftlich ${@0}\\cdot {@1}$.",
  "Za {@0}: {@1}, za {@2}: {@3}. ${@4} - {@5} = {@6}$.": "Für {@0}: {@1}, für {@2}: {@3}. ${@4} - {@5} = {@6}$.",
  "Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.": "Du hast die gemerkte 1 vergessen. Nach dem Entbündeln zähle sie in der nächsten Spalte zur unteren Ziffer dazu.",
  "Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.": "Du hast die gemerkten Zahlen vergessen. Wenn die Summe in einer Spalte 10 oder mehr ist, zähle 1 in der nächsten Spalte links dazu.",
  "Zabudol si pripočítať ešte ${@0}\\,\\text{{@1}}$.": "Du hast vergessen, noch ${@0}\\,\\text{{@1}}$ dazuzuzählen.",
  "Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.": "Du hast vergessen, die gemerkten Zehner dazuzuzählen. Die Zehner aus dem Produkt zählst du zum Produkt an der nächsten Stelle dazu.",
  "Zapíš obvod a obsah v tvare „obvod; obsah“.": "Schreibe Umfang und Flächeninhalt in der Form „Umfang; Flächeninhalt“.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.": "Bilde das Ergebnis aus den Zahlen, die dir in den einzelnen Schritten herausgekommen sind, und den Rest aus dem letzten Schritt.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.": "Bilde das Ergebnis aus den Zahlen, die dir in den einzelnen Schritten herausgekommen sind.",
  "Zapíš rímskymi číslicami číslo {@0}.": "Schreibe die Zahl {@0} in römischen Zahlzeichen.",
  "Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.": "Schreibe das Ergebnis aus den Ziffern, die dir in den Spalten herausgekommen sind.",
  "Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.": "Schreibe das Ergebnis: aus jeder Spalte die Einer der Summe, die Zehner wurden weiter übertragen.",
  "Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.": "Schreibe das Ergebnis: aus jedem Produkt die Einer, die Zehner wurden weiter übertragen.",
  "Zapíš číslom: {@0} {@1}, {@2} {@3}, {@4} {@5} a {@6} {@7}.": "Schreibe als Zahl: {@0} {@1}, {@2} {@3}, {@4} {@5} und {@6} {@7}.",
  "Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.": "Beginne bei der letzten Ziffer rechts – das sind die Einer – und gehe nach links.",
  "Zisti, koľkokrát sa 60 zmestí do daného čísla.": "Finde heraus, wie oft 60 in die gegebene Zahl passt.",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.": "Das Zeichen = gehört nur zwischen zwei gleiche Zahlen. Diese Zahlen unterscheiden sich in mindestens einer Ziffer.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.": "Das Zeichen ist verkehrt herum. Vergleiche von links – entscheidend ist die erste Ziffer, in der sich die Zahlen unterscheiden.",
  "Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.": "Das Zeichen ist verkehrt herum. Die Zahl mit mehr Ziffern ist größer.",
  "Zvyšní ľudia potrebujú ešte jeden autobus, preto treba {@0} {@1}.": "Die übrigen Personen brauchen noch einen Bus, deshalb braucht man {@0} {@1}.",
  "Zvyšok zemiakov: ${@0} - {@1} = {@2}$ kg. Počet vriec: ${@3} : {@4} = {@5}$.": "Übrige Kartoffeln: ${@0} - {@1} = {@2}$ kg. Anzahl der Säcke: ${@3} : {@4} = {@5}$.",
  "autobus": "Bus",
  "autobusy": "Busse",
  "banány": "Bananen",
  "dag": "dag",
  "desaťtisíce": "Zehntausender",
  "desaťtisícov": "Zehntausender",
  "dvakrát": "zweimal",
  "eur": "Euro",
  "eurá": "Euro",
  "hrušky": "Birnen",
  "jahody": "Erdbeeren",
  "k dolnej číslici pripočítaj zapamätanú 1 (${@0} + 1 = {@1}$).": "zähle die gemerkte 1 zur unteren Ziffer dazu (${@0} + 1 = {@1}$).",
  "napr. III": "z. B. III",
  "napr. XIV": "z. B. XIV",
  "napr. XX": "z. B. XX",
  "nepravda": "falsch",
  "obsah: 3 riadky po 4 štvorčekoch": "Flächeninhalt: 3 Zeilen mit je 4 Kästchen",
  "obvod: 4 + 3 + 4 + 3 = 14 cm": "Umfang: 4 + 3 + 4 + 3 = 14 cm",
  "obvod; obsah": "Umfang; Flächeninhalt",
  "opíšeme {@0}": "übernehmen {@0}",
  "ostrý": "spitz",
  "pravda": "wahr",
  "pravý": "recht",
  "pripíšeme {@0}: ${@1} : {@2} = {@3}$, lebo ${@4}\\cdot {@5} = {@6}$, zvyšok {@7}": "holen {@0} herunter: ${@1} : {@2} = {@3}$, weil ${@4}\\cdot {@5} = {@6}$, Rest {@7}",
  "píšeme {@0}": "schreibe {@0}",
  "píšeme {@0} a 1 si pamätáme": "schreibe {@0}, merke 1",
  "píšeme {@0} a {@1} si pamätáme": "schreibe {@0}, merke {@1}",
  "riadky": "Zeilen",
  "riadok": "Zeile",
  "slivky": "Pflaumen",
  "stovka": "Hunderter",
  "tisíce": "Tausender",
  "tisícka": "Tausender",
  "tisícky": "Tausender",
  "tisícok": "Tausender",
  "tisícov": "Tausender",
  "trikrát": "dreimal",
  "tričiek": "T-Shirts",
  "tričká": "T-Shirts",
  "tupý": "stumpf",
  "uhol": "Winkel",
  "všeobecný štvoruholník": "allgemeines Viereck",
  "všetci traja": "alle drei",
  "všetky tri": "alle drei",
  "zaplatil": "bezahlte",
  "zaplatila": "bezahlte",
  "{@0} Koľko detí hlasovalo spolu?": "{@0} Wie viele Kinder haben insgesamt abgestimmt?",
  "{@0} Koľko detí hlasovalo za {@1}?": "{@0} Wie viele Kinder haben für {@1} gestimmt?",
  "{@0} O koľko viac detí hlasovalo za {@1} ako za {@2}?": "{@0} Wie viele Kinder mehr haben für {@1} als für {@2} gestimmt?",
  "{@0} Podiel je ${@1}$, zvyšok {@2}. Skúška: ${@3}\\cdot {@4} + {@5} = {@6}$.": "{@0} Das Ergebnis ist ${@1}$, Rest {@2}. Probe: ${@3}\\cdot {@4} + {@5} = {@6}$.",
  "{@0} Výsledok je ${@1}$. Skúška: ${@2}\\cdot {@3} = {@4}$.": "{@0} Das Ergebnis ist ${@1}$. Probe: ${@2}\\cdot {@3} = {@4}$.",
  "{@0} je menej ako {@1}, preto ${@2} - {@3} = {@4}$, píšeme {@5} a 1 si pamätáme": "{@0} ist weniger als {@1}, deshalb ${@2} - {@3} = {@4}$, schreibe {@5}, merke 1",
  "{@0} je menej ako {@1}, preto počítaj ${@2} - {@3}$. Koľko to je?": "{@0} ist weniger als {@1}, deshalb rechne ${@2} - {@3}$. Wie viel ist das?",
  "{@0} má ušetrených {@1} {@2}. {@3} má o {@4} {@5} viac ako {@6} a {@7} má {@8} toľko ako {@9}. Koľko eur majú {@10} spolu?": "{@0} hat {@1} {@2} gespart. {@3} hat {@4} {@5} mehr als {@6} und {@7} hat {@8} so viel wie {@9}. Wie viele Euro haben {@10} zusammen?",
  "{@0} má {@1} toľko ako {@2}, nie ako {@3}. Násob sumu, ktorú má {@4}.": "{@0} hat {@1} so viel wie {@2}, nicht wie {@3}. Multipliziere den Betrag, den {@4} hat.",
  "{@0} {@1} {@2} {@3} po {@4} {@5} a {@6} {@7}-eurovou bankovkou. Koľko eur {@8} vydali?": "{@0} {@1} {@2} {@3} zu je {@4} {@5} und {@6} mit einem {@7}-Euro-Schein. Wie viele Euro gab man {@8} zurück?",
  "{@0}. Spolu {@1}.": "{@0}. Zusammen {@1}.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$ {@12}.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Zusammen: ${@8} + {@9} + {@10} = {@11}$ {@12}.",
  "{@0}: koľko je ${@1} + {@2} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)": "{@0}: Wie viel ist ${@1} + {@2} + 1$? (Die 1 hast du dir aus der vorigen Spalte gemerkt.)",
  "{@0}: koľko je ${@1} + {@2}$?": "{@0}: Wie viel ist ${@1} + {@2}$?",
  "{@0}: koľko je ${@1}\\cdot {@2} + {@3}$? ({@4} si pamätáš z predchádzajúceho rádu.)": "{@0}: Wie viel ist ${@1}\\cdot {@2} + {@3}$? ({@4} hast du dir von der vorigen Stelle gemerkt.)",
  "{@0}: koľko je ${@1}\\cdot {@2}$?": "{@0}: Wie viel ist ${@1}\\cdot {@2}$?",
  "Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.": "Ja, die gegenüberliegenden Seiten eines Rechtecks sind gleich lang.",
  "Áno, to je vlastnosť štvorca.": "Ja, das ist eine Eigenschaft des Quadrats.",
  "útvar": "Figur",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}\\,\\text{{@1}}$ na menšiu jednotku $\\text{{@2}}$.": "Addiere die Zahlen nicht gleich. Rechne zuerst ${@0}\\,\\text{{@1}}$ in die kleinere Einheit $\\text{{@2}}$ um.",
  "Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.": "Addiere die Zahlen nicht. Den fehlenden Summanden findest du durch Subtrahieren: Ziehe von der Summe den bekannten Summanden ab.",
  "Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.": "Addiere die Zahlen nicht. Die gesuchte Zahl findest du durch Subtrahieren: Ziehe vom Minuenden die Differenz ab.",
  "Čísla sú rovnaké.": "Die Zahlen sind gleich.",
  "Číslo s viacerými číslicami je väčšie, preto ${@0} {@1} {@2}$.": "Die Zahl mit mehr Ziffern ist größer, deshalb ${@0} {@1} {@2}$.",
  "čerešne": "Kirschen",
  "Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.": "Ein Quadrat ist tatsächlich auch ein Rechteck, aber wir suchen den genauesten Namen. Schau, ob alle Seiten gleich lang sind.",
  "Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.": "Ein Quadrat hat 4 rechte Winkel und gleich lange gegenüberliegende Seiten, es ist also ein besonderes Rechteck.",
  "Štvorec má obvod ${@0}\\,\\text{{@1}}$. Aká dlhá je jeho strana (v {@2})?": "Ein Quadrat hat den Umfang ${@0}\\,\\text{{@1}}$. Wie lang ist seine Seite (in {@2})?",
  "Štvorec má všetky 4 uhly pravé.": "Ein Quadrat hat 4 rechte Winkel.",
  "Štvorec má všetky strany rovnako dlhé.": "Bei einem Quadrat sind alle Seiten gleich lang.",
  "Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.": "Bei einem Quadrat sind alle Seiten gleich lang. Hier sind benachbarte Seiten verschieden lang.",
  "Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník": "Quadrat, Rechteck, Dreieck und allgemeines Viereck",
  "Štvoruholník má 4 strany a 4 vrcholy.": "Ein Viereck hat 4 Seiten und 4 Ecken.",
  "Štyrikrát": "Viermal",
  "štyrikrát": "viermal",
  "„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.": "„Um … mehr“ bedeutet addieren, „…mal so viel“ bedeutet multiplizieren. Dann addiere alles.",
  "„{@0} toľko“ znamená násobiť, nie pripočítať {@1}.": "„{@0} so viel“ bedeutet multiplizieren, nicht {@1} addieren."
 }
});
