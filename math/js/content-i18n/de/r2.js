/* Deutsch: preklad js/rocniky/r2.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/r2/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "r2-cisla100": {
   "title": "Zahlen bis 100",
   "summary": "Zehner und Einer, Zahlenreihe und Vergleichen von Zahlen bis 100.",
   "theory": [
    "<p>Jede zweistellige Zahl hat <strong>Zehner</strong> und <strong>Einer</strong>. Die Zahl 47 hat 4 Zehner und 7 Einer:\n       $47 = 40 + 7$. Zehn Zehner sind <strong>hundert</strong>: $100$.</p>",
    {
     "fig": "r2-stovka",
     "caption": "Die Hundertertafel. In jeder Zeile steht ein Zehner von Zahlen. Unter der Zahl 47 steht 57, also die Zahl, die um 10 größer ist."
    },
    "<p><strong>Vergleichen:</strong> Zuerst vergleichen wir die Zehner. Wenn sie gleich sind, vergleichen wir die Einer.\n       $63 &gt; 58$, weil 6 Zehner mehr sind als 5 Zehner. $42 &lt; 45$, weil die Zehner gleich sind und 2 weniger ist als 5.</p>"
   ],
   "examples": [
    {
     "task": "Vergleiche die Zahlen 71 und 17.",
     "steps": [
      "Die Zahl 71 hat 7 Zehner, die Zahl 17 hat nur 1 Zehner.",
      "<strong>$71 &gt; 17$</strong>"
     ]
    },
    {
     "task": "Welche Zahl hat 6 Zehner und 3 Einer?",
     "steps": [
      "6 Zehner sind 60, dazu kommen 3 Einer.",
      "$60 + 3 = 63$.",
      "<strong>Es ist die Zahl 63.</strong>"
     ]
    }
   ]
  },
  "r2-scitanie": {
   "title": "Addieren und Subtrahieren bis 100",
   "summary": "Rechnen mit Zehnern, über den Zehner rechnen und Sprünge am Zahlenstrahl.",
   "theory": [
    "<p><strong>Glatte Zehner</strong> addieren wir wie Einer: $30 + 40$ sind 3 Zehner und 4 Zehner, also 7 Zehner, $70$.\n       Genauso ist $90 - 60 = 30$.</p>",
    "<p>Bei größeren Zahlen zerlegen wir die zweite Zahl in <strong>Zehner und Einer</strong> und addieren sie nacheinander.\n       Bei $38 + 25$ addieren wir zuerst 20 und dann 5.</p>",
    {
     "fig": "r2-skoky",
     "caption": "$38 + 25$: Ein Sprung um 20 bringt uns zur 58, ein Sprung um 5 zur 63. Also ist $38 + 25 = 63$."
    },
    "<p>Beim Subtrahieren gehen wir genauso vor: $72 - 34$ = zuerst $72 - 30 = 42$, dann $42 - 4 = 38$.\n       Das Ergebnis können wir durch Addieren überprüfen: $38 + 34 = 72$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $47 + 36$.",
     "steps": [
      "Wir zerlegen die Zahl 36 in 30 und 6.",
      "$47 + 30 = 77$.",
      "$77 + 6 = 83$.",
      "<strong>Ergebnis: 83</strong>"
     ]
    },
    {
     "task": "Berechne $81 - 25$.",
     "steps": [
      "Wir zerlegen die Zahl 25 in 20 und 5.",
      "$81 - 20 = 61$.",
      "$61 - 5 = 56$.",
      "Probe: $56 + 25 = 81$. <strong>Ergebnis: 56</strong>"
     ]
    }
   ]
  },
  "r2-nasobenie": {
   "title": "Multiplizieren und Dividieren",
   "summary": "Multiplizieren als wiederholtes Addieren, Dividieren als Aufteilen in gleiche Teile.",
   "theory": [
    "<p><strong>Multiplizieren</strong> ist eine verkürzte Addition gleicher Zahlen. Statt $4 + 4 + 4$ schreiben wir $3 \\cdot 4$\n       (drei mal vier). Die Zahlen, die wir multiplizieren, sind die <em>Faktoren</em>, das Ergebnis ist das <em>Produkt</em>.</p>",
    {
     "fig": "r2-pole",
     "caption": "3 Reihen mit je 4 Punkten: $4 + 4 + 4 = 3 \\cdot 4 = 12$. Lesen wir nach Spalten, haben wir 4 Spalten mit je 3 Punkten: $4 \\cdot 3 = 12$."
    },
    "<p>Die Reihenfolge der Faktoren spielt keine Rolle: $3 \\cdot 4 = 4 \\cdot 3$. Jede Zahl mal 1 bleibt gleich ($7 \\cdot 1 = 7$)\n       und jede Zahl mal 0 ist 0 ($5 \\cdot 0 = 0$).</p>",
    "<p><strong>Dividieren</strong> ist das Aufteilen in gleiche Teile. Wenn wir 12 Bonbons gerecht an 3 Kinder verteilen, bekommt jedes\n       $12 : 3 = 4$. Dividieren ist die Umkehrung des Multiplizierens: $12 : 3 = 4$, weil $3 \\cdot 4 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "Schreibe die Summe $5 + 5 + 5 + 5$ als Malaufgabe und rechne sie aus.",
     "steps": [
      "Die Zahl 5 wird viermal addiert.",
      "$4 \\cdot 5 = 20$.",
      "<strong>Ergebnis: 20</strong>"
     ]
    },
    {
     "task": "Aus 15 Blumen machen wir Sträuße mit je 5 Blumen. Wie viele Sträuße werden es?",
     "steps": [
      "Wir suchen, wie oft die 5 in die 15 passt.",
      "$15 : 5 = 3$, weil $3 \\cdot 5 = 15$.",
      "<strong>Es werden 3 Sträuße.</strong>"
     ]
    }
   ]
  },
  "r2-nasobilka": {
   "title": "Vielfache und das Einmaleins",
   "summary": "Das Einmaleins bis 10 · 10, Vielfache einer Zahl und Dividieren im Einmaleins.",
   "theory": [
    "<p>Die <strong>Vielfachen einer Zahl</strong> erhalten wir, wenn wir die Zahl der Reihe nach mit 1, 2, 3, … multiplizieren. Die Vielfachen der Zahl 3 sind\n       3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Auf dem Zahlenstrahl springen wir immer um 3 weiter.</p>",
    {
     "fig": "r2-nasobky",
     "caption": "Vielfache der Zahl 3: Jeder Sprung ist 3 lang. Nach vier Sprüngen sind wir bei der Zahl $4 \\cdot 3 = 12$."
    },
    "<p>Nützliche Tricks: Die Vielfachen von 2 sind gerade Zahlen, die Vielfachen von 5 enden auf 0 oder 5, die Vielfachen von 10 enden auf 0.\n       Wenn du $6 \\cdot 4$ nicht weißt, hilf dir so: $5 \\cdot 4 = 20$ und noch einmal 4, also $24$.</p>",
    "<p>Aus einer Malaufgabe kennen wir sofort zwei Geteiltaufgaben: Aus $6 \\cdot 4 = 24$ folgt $24 : 4 = 6$ und $24 : 6 = 4$.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $7 \\cdot 5$.",
     "steps": [
      "Vielfache von 5: 5, 10, 15, 20, 25, 30, 35.",
      "Das siebte Vielfache ist 35.",
      "<strong>$7 \\cdot 5 = 35$</strong>"
     ]
    },
    {
     "task": "Berechne $32 : 4$.",
     "steps": [
      "Wir suchen die Zahl, die mal 4 die Zahl 32 ergibt.",
      "$8 \\cdot 4 = 32$.",
      "<strong>$32 : 4 = 8$</strong>"
     ]
    }
   ]
  },
  "r2-slovne": {
   "title": "Sachaufgaben und Notizen",
   "summary": "Aus der Sachaufgabe wird eine Rechnung: Addieren, Subtrahieren, Multiplizieren und Dividieren.",
   "theory": [
    "<p>Bei einer Sachaufgabe schreiben wir zuerst auf, was wir <strong>wissen</strong> und was wir <strong>suchen</strong>. Dann wählen wir die richtige\n       Rechenart, rechnen und schreiben die <strong>Antwort</strong> als ganzen Satz.</p>",
    "<ul><li><em>bekommen, dazugekommen, zusammen, um … mehr</em> → Addieren,</li>\n       <li><em>weggegeben, übrig geblieben, um … weniger, wie viel mehr</em> → Subtrahieren,</li>\n       <li><em>je … (mehrmals dasselbe)</em> → Multiplizieren,</li>\n       <li><em>gerecht verteilt, wie viele Gruppen zu je …</em> → Dividieren.</li></ul>",
    "<p>Die <strong>Notiz</strong> zu einer Aufgabe kann so aussehen:<br>Jonas hatte … 35 Murmeln<br>verloren … 12 Murmeln<br>\n       übrig … ? Murmeln<br>$35 - 12 = 23$<br>Antwort: Jonas sind 23 Murmeln geblieben.</p>"
   ],
   "examples": [
    {
     "task": "Lea hat 28 Sticker. Adam hat 15 Sticker mehr. Wie viele Sticker hat Adam?",
     "steps": [
      "„15 mehr“ bedeutet, zu 28 die 15 dazuzuzählen.",
      "$28 + 15 = 43$.",
      "<strong>Antwort: Adam hat 43 Sticker.</strong>"
     ]
    },
    {
     "task": "Mama hat auf 4 Teller je 5 Äpfel gelegt. Wie viele Äpfel liegen insgesamt auf den Tellern?",
     "steps": [
      "4-mal je 5 ist eine Malaufgabe.",
      "$4 \\cdot 5 = 20$.",
      "<strong>Antwort: Auf den Tellern liegen 20 Äpfel.</strong>"
     ]
    }
   ]
  },
  "r2-ciary": {
   "title": "Punkt, Strecke, Gerade und krumme Linie",
   "summary": "Wir unterscheiden Linien, messen und vergleichen Strecken.",
   "theory": [
    "<p>Einen <strong>Punkt</strong> zeichnen wir als kleinen Punkt und bezeichnen ihn mit einem Großbuchstaben, zum Beispiel Punkt $A$.\n       Eine <strong>Strecke</strong> ist eine gerade Linie zwischen zwei Punkten, zum Beispiel die Strecke $CD$. Die Punkte $C$ und $D$ sind ihre Endpunkte.</p>",
    "<p>Eine <strong>Gerade</strong> ist eine gerade Linie ohne Anfang und Ende, wir können sie nach beiden Seiten verlängern.\n       Wir bezeichnen sie mit einem Kleinbuchstaben, zum Beispiel die Gerade $p$. Eine <strong>krumme Linie</strong> ist nicht gerade, sie macht Kurven.</p>",
    {
     "fig": "r2-ciary",
     "caption": "Punkt, Strecke, Gerade und krumme Linie. Gerade Linien zeichnen wir mit dem Lineal."
    },
    "<p>Die Länge einer Strecke messen wir mit dem Lineal in <strong>Zentimetern</strong>. Die Null des Lineals legen wir an den Endpunkt $A$\n       und lesen die Zahl beim Punkt $B$ ab.</p>",
    {
     "fig": "r2-pravitko",
     "caption": "Die Strecke $AB$ beginnt bei der Null und endet bei der Zahl 7. Sie ist $7\\,\\text{cm}$ lang."
    }
   ],
   "examples": [
    {
     "task": "Welche Linie hat zwei Endpunkte?",
     "steps": [
      "Ein Punkt ist nur ein Punkt, eine Gerade und eine krumme Linie haben keine Endpunkte.",
      "<strong>Eine Strecke hat zwei Endpunkte.</strong>"
     ]
    },
    {
     "task": "Die Strecke $AB$ ist $9\\,\\text{cm}$ lang, die Strecke $CD$ ist $4\\,\\text{cm}$ lang. Um wie viel ist die Strecke $AB$ länger?",
     "steps": [
      "Wir vergleichen, deshalb subtrahieren wir.",
      "$9 - 4 = 5$.",
      "<strong>Die Strecke $AB$ ist um $5\\,\\text{cm}$ länger.</strong>"
     ]
    }
   ]
  },
  "r2-jednotky": {
   "title": "Einheiten für Länge, Zeit und Geld",
   "summary": "Zentimeter und Meter, Stunden und Minuten, Euro und Cent.",
   "theory": [
    "<p><strong>Länge:</strong> Kurze Dinge messen wir in Zentimetern (cm), längere in Metern (m).\n       $1\\,\\text{m} = 100\\,\\text{cm}$ und $1\\,\\text{dm} = 10\\,\\text{cm}$.</p>",
    "<p><strong>Zeit:</strong> Ein Tag hat 24 Stunden, eine Stunde (h) hat 60 Minuten (min). Eine halbe Stunde sind 30 Minuten, eine Viertelstunde sind 15 Minuten.\n       Auf der Uhr zeigt der <em>kurze Zeiger</em> die Stunden und der <em>lange Zeiger</em> die Minuten.</p>",
    {
     "fig": "r2-hodiny",
     "caption": "Links ist es 7:00, der lange Zeiger zeigt auf die 12. Rechts ist es 2:30 (halb drei), der lange Zeiger zeigt auf die 6 und der kurze steht zwischen 2 und 3."
    },
    "<p><strong>Geld:</strong> Wir bezahlen mit Euro (€) und Cent (c). $1\\,\\text{€} = 100$ Cent.\n       Die Münzen sind 1 c, 2 c, 5 c, 10 c, 20 c, 50 c, 1 € und 2 €.</p>",
    {
     "fig": "r2-mince",
     "caption": "Euromünzen vom kleinsten bis zum größten Wert."
    }
   ],
   "examples": [
    {
     "task": "Wie viele Minuten sind 1 Stunde und 15 Minuten?",
     "steps": [
      "1 Stunde sind 60 Minuten.",
      "$60 + 15 = 75$.",
      "<strong>Das sind 75 Minuten.</strong>"
     ]
    },
    {
     "task": "In deinem Geldbeutel hast du die Münzen 50 c, 20 c und 20 c. Wie viele Cent fehlen bis zu 1 Euro?",
     "steps": [
      "$50 + 20 + 20 = 90$ Cent.",
      "1 Euro sind 100 Cent: $100 - 90 = 10$.",
      "<strong>Es fehlen 10 Cent.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{dm} = 10\\,\\text{cm}$, teda ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.": "$1\\,\\text{dm} = 10\\,\\text{cm}$, also ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.",
  "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Chýba ${@2}\\,\\text{cm}$.": "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Es fehlen ${@2}\\,\\text{cm}$.",
  "${@0} - {@1} = {@2}$. Úsečka $KL$ je o ${@3}\\,\\text{cm}$ dlhšia.": "${@0} - {@1} = {@2}$. Die Strecke $KL$ ist um ${@3}\\,\\text{cm}$ länger.",
  "${@0} : {@1} = {@2}$, teda ${@3} \\cdot {@4} = {@5}$.": "${@0} : {@1} = {@2}$, also ${@3} \\cdot {@4} = {@5}$.",
  "${@0} = {@1}$ centov.": "${@0} = {@1}$ Cent.",
  "${@0} \\cdot {@1} = {@2}$, preto ${@3} : {@4} = {@5}$.": "${@0} \\cdot {@1} = {@2}$, deshalb ${@3} : {@4} = {@5}$.",
  "${@0} \\cdot {@1} = {@2}$, preto {@3} je násobok čísla {@4}. Ostatné čísla v násobilke čísla {@5} nie sú.": "${@0} \\cdot {@1} = {@2}$, deshalb ist {@3} ein Vielfaches von {@4}. Die anderen Zahlen sind nicht in der Einmaleinsreihe von {@5}.",
  "1 dm je 10 cm.": "1 dm sind 10 cm.",
  "1 euro je 100 centov: $100 - {@0} = {@1}$. Chýba {@2} {@3}.": "1 Euro sind 100 Cent: $100 - {@0} = {@1}$. Es fehlen {@2} {@3}.",
  "1 hodina": "1 Stunde",
  "1 hodina je 60 minút: $60 + {@0} = {@1}$ minút.": "1 Stunde hat 60 Minuten: $60 + {@0} = {@1}$ Minuten.",
  "1 m je 100 cm.": "1 m sind 100 cm.",
  "1 € = 100 centov.": "1 € = 100 Cent.",
  "Aká dlhá je úsečka $AB$? Odpoveď napíš v centimetroch.{@0}": "Wie lang ist die Strecke $AB$? Schreibe die Antwort in Zentimetern.{@0}",
  "Bod $A$ je pri čísle {@0}, bod $B$ pri čísle {@1}. ${@2} - {@3} = {@4}$, úsečka meria ${@5}\\,\\text{cm}$.": "Der Punkt $A$ ist bei der Zahl {@0}, der Punkt $B$ bei der Zahl {@1}. ${@2} - {@3} = {@4}$, die Strecke ist ${@5}\\,\\text{cm}$ lang.",
  "Bod je len jedna malá bodka. Na obrázku je čiara.": "Ein Punkt ist nur ein kleiner Tupfen. Auf dem Bild ist eine Linie.",
  "Bod, úsečka, priamka a krivá čiara": "Punkt, Strecke, Gerade und krumme Linie",
  "Celá dĺžka je súčet dĺžok všetkých úsečiek.": "Die ganze Länge ist die Summe der Längen aller Strecken.",
  "Celá lomená čiara je dlhšia ako každá jej časť. Dĺžky úsečiek sčítaj, nie odčítaj.": "Der ganze Streckenzug ist länger als jeder seiner Teile. Addiere die Längen der Strecken, subtrahiere sie nicht.",
  "Centimeter je veľmi malý, asi ako šírka prsta. Tu treba väčšiu jednotku.": "Ein Zentimeter ist sehr klein, etwa so breit wie ein Finger. Hier brauchst du eine größere Einheit.",
  "Centov máš 100 alebo viac. Zo 100 centov je ďalšie celé euro – pripočítaj ho k eurám.": "Du hast 100 Cent oder mehr. Aus 100 Cent wird ein weiterer ganzer Euro – zähle ihn zu den Euro dazu.",
  "Ceny píšeme v eurách.": "Preise schreiben wir in Euro.",
  "Ceruzka je dlhá asi 15 …": "Ein Bleistift ist etwa 15 … lang",
  "Cez dva rôzne body prechádza práve jedna priamka.": "Durch zwei verschiedene Punkte geht genau eine Gerade.",
  "Chýbajúce číslo zistíme odčítaním: ${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "Die fehlende Zahl finden wir durch Subtrahieren: ${@0} - {@1} = {@2}$. Probe: ${@3} + {@4} = {@5}$.",
  "Delenie nie je odčítanie. Hľadaj číslo, ktoré krát {@0} dá {@1}.": "Dividieren ist nicht Subtrahieren. Suche die Zahl, die mal {@0} genau {@1} ergibt.",
  "Delíme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "Wir teilen in {@0} {@1}: ${@2} : {@3} = {@4}$, weil ${@5} \\cdot {@6} = {@7}$.",
  "Desať nepripočítavaj. Každý decimeter má 10 cm, preto počet decimetrov násob desiatimi.": "Addiere nicht zehn. Jeder Dezimeter hat 10 cm, deshalb multipliziere die Anzahl der Dezimeter mit zehn.",
  "Desiatky a jednotky nesčítavaj ako obyčajné čísla. Desiatky napíš na prvé miesto a jednotky za ne.": "Addiere Zehner und Einer nicht wie gewöhnliche Zahlen. Schreibe die Zehner an die erste Stelle und die Einer dahinter.",
  "Desiatky sú rovnaké, porovnáme jednotky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "Die Zehner sind gleich, wir vergleichen die Einer: {@0} und {@1}. Deshalb ${@2} {@3} {@4}$.",
  "Deň (s nocou) má 24 hodín.": "Ein Tag (mit der Nacht) hat 24 Stunden.",
  "Dlhšie veci meriame v metroch.": "Längere Dinge messen wir in Metern.",
  "Dlhší čas meriame v hodinách.": "Längere Zeiten messen wir in Stunden.",
  "Dom je vysoký asi 10 …": "Ein Haus ist etwa 10 … hoch",
  "Doplň chýbajúce číslo: ${@0} - \\square = {@1}$": "Ergänze die fehlende Zahl: ${@0} - \\square = {@1}$",
  "Doplň chýbajúce číslo: ${@0} \\cdot \\square = {@1}$": "Ergänze die fehlende Zahl: ${@0} \\cdot \\square = {@1}$",
  "Doplň chýbajúci násobok čísla {@0}: {@1}": "Ergänze das fehlende Vielfache von {@0}: {@1}",
  "Doplň správnu jednotku: {@0}": "Ergänze die richtige Einheit: {@0}",
  "Doplň číslo, ktoré chýba v rade: {@0}": "Ergänze die Zahl, die in der Reihe fehlt: {@0}",
  "Dĺžky nesčítavaj. Pýtame sa, o koľko je jedna úsečka dlhšia – odčítaj.": "Addiere die Längen nicht. Wir fragen, um wie viel eine Strecke länger ist – subtrahiere.",
  "Dĺžky sčítame: ${@0} + {@1} = {@2}$. Lomená čiara meria ${@3}\\,\\text{cm}$.": "Wir addieren die Längen: ${@0} + {@1} = {@2}$. Der Streckenzug ist ${@3}\\,\\text{cm}$ lang.",
  "Euromince": "Euromünzen",
  "Hodina je dlhý čas. Tu treba kratšiu jednotku.": "Eine Stunde ist eine lange Zeit. Hier brauchst du eine kürzere Einheit.",
  "Hodina má 60 minút. Polovica z 60 je 30, štvrtina je 15.": "Eine Stunde hat 60 Minuten. Die Hälfte von 60 ist 30, ein Viertel ist 15.",
  "Hodina má 60 minút. {@0} je {@1} minút.": "Eine Stunde hat 60 Minuten. {@0} sind {@1} Minuten.",
  "Hodina nemá 100 minút, ale 60 minút.": "Eine Stunde hat nicht 100 Minuten, sondern 60 Minuten.",
  "Hodinu musíš najprv premeniť na minúty: 1 hodina je 60 minút.": "Die Stunde musst du zuerst in Minuten umrechnen: 1 Stunde sind 60 Minuten.",
  "Hodiny ukazujú 7:00 a 2:30": "Uhren zeigen 7:00 und 2:30",
  "Hľadaj suseda čísla v číselnom rade.": "Suche den Nachbarn der Zahl in der Zahlenreihe.",
  "Je to dĺžka, čas, alebo cena? A je to krátke, alebo dlhé?": "Ist es eine Länge, eine Zeit oder ein Preis? Und ist es kurz oder lang?",
  "Je to len jedna bodka, teda bod.": "Es ist nur ein Tupfen, also ein Punkt.",
  "Je čiara rovná? Má krajné body?": "Ist die Linie gerade? Hat sie Endpunkte?",
  "Jednotky dali spolu viac ako 10, ale zabudol si pripočítať túto novú desiatku.": "Die Einer ergaben zusammen mehr als 10, aber du hast vergessen, diesen neuen Zehner dazuzuzählen.",
  "Každé ďalšie číslo je o {@0} väčšie.": "Jede nächste Zahl ist um {@0} größer.",
  "Keď je viackrát to isté číslo, môžeš násobiť.": "Wenn dieselbe Zahl mehrmals vorkommt, kannst du multiplizieren.",
  "Kniha stojí asi 12 …": "Ein Buch kostet etwa 12 …",
  "Koľko centimetrov je ${@0}\\,\\text{dm}$?": "Wie viele Zentimeter sind ${@0}\\,\\text{dm}$?",
  "Koľko centimetrov je od {@0} po {@1}? Vypočítaj ${@2} - {@3}$.": "Wie viele Zentimeter sind es von {@0} bis {@1}? Rechne ${@2} - {@3}$.",
  "Koľko centimetrov má 1 meter?": "Wie viele Zentimeter hat 1 Meter?",
  "Koľko centov je spolu?{@0}": "Wie viele Cent sind es zusammen?{@0}",
  "Koľko centov je v ostatných minciach?": "Wie viele Cent sind in den übrigen Münzen?",
  "Koľko centov má 1 euro?": "Wie viele Cent hat 1 Euro?",
  "Koľko eur je v minciach 1 € a 2 €?": "Wie viele Euro sind in den Münzen zu 1 € und 2 €?",
  "Koľko hodín má jeden deň?": "Wie viele Stunden hat ein Tag?",
  "Koľko je $100 - {@0}$?": "Wie viel ist $100 - {@0}$?",
  "Koľko je $60 + {@0}$?": "Wie viel ist $60 + {@0}$?",
  "Koľko je ${@0} \\cdot {@1}$?": "Wie viel ist ${@0} \\cdot {@1}$?",
  "Koľko je hodín?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"ciferník hodín\">{@0}</svg>": "Wie spät ist es?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"Zifferblatt\">{@0}</svg>",
  "Koľko je skupín?": "Wie viele Gruppen sind es?",
  "Koľko je spolu {@0}? <span class=\"emoji-row\">{@1}</span>": "Wie viele {@0} sind es zusammen? <span class=\"emoji-row\">{@1}</span>",
  "Koľko je to spolu eur a centov? Napíš dve čísla oddelené bodkočiarkou (napr. 2; 35).{@0}": "Wie viel Euro und Cent sind das zusammen? Schreibe zwei Zahlen getrennt durch ein Semikolon (z. B. 2; 35).{@0}",
  "Koľko krajných bodov má priamka?": "Wie viele Endpunkte hat eine Gerade?",
  "Koľko krajných bodov má úsečka?": "Wie viele Endpunkte hat eine Strecke?",
  "Koľko kúskov je v jednej skupine?": "Wie viele Stück sind in einer Gruppe?",
  "Koľko minút je 1 hodina a {@0} minút?": "Wie viele Minuten sind 1 Stunde und {@0} Minuten?",
  "Koľko minút je {@0}?": "Wie viele Minuten sind {@0}?",
  "Koľko minút má 1 hodina?": "Wie viele Minuten hat 1 Stunde?",
  "Koľko priamok môžeš nakresliť cez dva rôzne body?": "Wie viele Geraden kannst du durch zwei verschiedene Punkte zeichnen?",
  "Koľkokrát musíš sčítať {@0}, aby si dostal {@1}?": "Wie oft musst du {@0} addieren, um {@1} zu bekommen?",
  "Koľkokrát sa opakuje to isté číslo?": "Wie oft wiederholt sich dieselbe Zahl?",
  "Koľkokrát sa v súčte opakuje číslo {@0}?": "Wie oft wiederholt sich in der Summe die Zahl {@0}?",
  "Krivá čiara je čiara. Tu je len jedna bodka.": "Eine krumme Linie ist eine Linie. Hier ist nur ein Tupfen.",
  "Krivá čiara sa zatáča. Táto čiara je rovná.": "Eine krumme Linie macht Kurven. Diese Linie ist gerade.",
  "Krátka ručička je ešte len medzi {@0} a {@1}. Kým nedôjde k {@2}, platí menšia hodina.": "Der kurze Zeiger steht erst zwischen {@0} und {@1}. Bis er die {@2} erreicht, gilt die kleinere Stunde.",
  "Krátka ručička ukazuje hodiny, dlhá minúty. Keď je dlhá na 6, je pol.": "Der kurze Zeiger zeigt die Stunden, der lange die Minuten. Wenn der lange auf der 6 steht, ist es halb.",
  "Krátka ručička {@0}, dlhá ručička ukazuje na {@1}, teda {@2} minút. Je {@3} ({@4}).": "Der kurze Zeiger {@0}, der lange Zeiger zeigt auf {@1}, also {@2} Minuten. Es ist {@3} ({@4}).",
  "Krátke veci meriame v centimetroch.": "Kurze Dinge messen wir in Zentimetern.",
  "Krátky čas meriame v minútach.": "Kurze Zeiten messen wir in Minuten.",
  "Ktoré celé desiatky sú v čísle {@0}? (Pri čísle 36 by to bolo 30.)": "Welche ganzen Zehner stecken in der Zahl {@0}? (Bei der Zahl 36 wäre es 30.)",
  "Ktoré z týchto čísel je násobkom čísla {@0}?": "Welche dieser Zahlen ist ein Vielfaches von {@0}?",
  "Ktoré číslo je o {@0} {@1} ako {@2}?": "Welche Zahl ist um {@0} {@1} als {@2}?",
  "Ktoré číslo krát {@0} dá {@1}?": "Welche Zahl mal {@0} ergibt {@1}?",
  "Ktoré číslo má {@0} {@1} a {@2} {@3}?": "Welche Zahl hat {@0} {@1} und {@2} {@3}?",
  "Ktorú počtovú operáciu použiješ?": "Welche Rechenart verwendest du?",
  "Lomená čiara sa skladá z dvoch úsečiek. Prvá meria ${@0}\\,\\text{cm}$, druhá ${@1}\\,\\text{cm}$. Aká dlhá je celá lomená čiara (v cm)?": "Ein Streckenzug besteht aus zwei Strecken. Die erste ist ${@0}\\,\\text{cm}$ lang, die zweite ${@1}\\,\\text{cm}$. Wie lang ist der ganze Streckenzug (in cm)?",
  "Meter je asi taký dlhý ako veľký krok. Tu je to priveľa, treba menšiu jednotku.": "Ein Meter ist etwa so lang wie ein großer Schritt. Das ist hier zu viel, du brauchst eine kleinere Einheit.",
  "Mince 1 € a 2 € maj zvlášť, centy sčítaj zvlášť. 100 centov je 1 euro.": "Zähle die Münzen zu 1 € und 2 € getrennt und die Cent getrennt. 100 Cent sind 1 Euro.",
  "Minúta je krátky čas. Tu treba dlhšiu jednotku.": "Eine Minute ist eine kurze Zeit. Hier brauchst du eine längere Einheit.",
  "Máš {@0} {@1}. Koľko centov ti chýba do 1 eura?": "Du hast {@0} {@1}. Wie viele Cent fehlen dir bis 1 Euro?",
  "Najprv odčítaj desiatky, potom jednotky.": "Subtrahiere zuerst die Zehner, dann die Einer.",
  "Najprv odčítaj desiatky: koľko je ${@0} - {@1}$?": "Subtrahiere zuerst die Zehner: Wie viel ist ${@0} - {@1}$?",
  "Najprv odčítame desiatky: ${@0} - {@1} = {@2}$. Potom jednotky: ${@3} - {@4} = {@5}$.": "Zuerst subtrahieren wir die Zehner: ${@0} - {@1} = {@2}$. Dann die Einer: ${@3} - {@4} = {@5}$.",
  "Najprv porovnaj desiatky. Ak sú rovnaké, porovnaj jednotky.": "Vergleiche zuerst die Zehner. Wenn sie gleich sind, vergleiche die Einer.",
  "Najprv premeň hodinu na minúty a potom pripočítaj.": "Rechne zuerst die Stunde in Minuten um und addiere dann.",
  "Najprv pripočítaj desiatky: koľko je ${@0} + {@1}$?": "Addiere zuerst die Zehner: Wie viel ist ${@0} + {@1}$?",
  "Najprv pripočítame desiatky: ${@0} + {@1} = {@2}$. Potom jednotky: ${@3} + {@4} = {@5}$.": "Zuerst addieren wir die Zehner: ${@0} + {@1} = {@2}$. Dann die Einer: ${@3} + {@4} = {@5}$.",
  "Neodčítavaj. Cukríky rozdeľujeme rovnako, to je delenie.": "Subtrahiere nicht. Die Bonbons werden gerecht verteilt, das ist Dividieren.",
  "Neodčítavaj. Hľadáš číslo, ktoré krát {@0} dá {@1}.": "Subtrahiere nicht. Du suchst die Zahl, die mal {@0} genau {@1} ergibt.",
  "Neodčítavaj. Keď rozdeľujeme rovnako, delíme.": "Subtrahiere nicht. Wenn wir gerecht verteilen, dividieren wir.",
  "Neodčítavaj. Zisťujeme, koľkokrát sa {@0} zmestí do {@1}, to je delenie.": "Subtrahiere nicht. Wir finden heraus, wie oft {@0} in {@1} passt, das ist Dividieren.",
  "Nesčítavaj počet sčítancov a číslo {@0}. Číslo {@1} sa opakuje {@2}-krát – to je násobenie.": "Addiere nicht die Anzahl der Summanden und die Zahl {@0}. Die Zahl {@1} wiederholt sich {@2}-mal – das ist Multiplizieren.",
  "Násobenie použiješ, keď máš viackrát po rovnako.": "Multiplizieren verwendest du, wenn du mehrmals gleich viel hast.",
  "Násobky {@0} rastú vždy o {@1}: {@2}. Chýba ${@3} \\cdot {@4} = {@5}$.": "Die Vielfachen von {@0} wachsen immer um {@1}: {@2}. Es fehlt ${@3} \\cdot {@4} = {@5}$.",
  "Násobky {@0}: {@1}. Teda ${@2} \\cdot {@3} = {@4}$.": "Vielfache von {@0}: {@1}. Also ${@2} \\cdot {@3} = {@4}$.",
  "Násobky čísla 3 na číselnom rade": "Vielfache der Zahl 3 auf der Zahlenreihe",
  "O koľko je {@0} viac ako {@1}?": "Um wie viel ist {@0} größer als {@1}?",
  "Od {@0} sme ubrali toľko, koľko je ${@1} - {@2} = {@3}$. Skúška: ${@4} - {@5} = {@6}$.": "Von {@0} haben wir so viel weggenommen, wie ${@1} - {@2} = {@3}$ ist. Probe: ${@4} - {@5} = {@6}$.",
  "Odčítanie použiješ, keď niečo ubudne.": "Subtrahieren verwendest du, wenn etwas weggeht.",
  "Otázka „o koľko viac“ sa rieši odčítaním väčšieho a menšieho čísla.": "Die Frage „um wie viel mehr“ löst man, indem man die kleinere Zahl von der größeren abzieht.",
  "Palec na ruke je dlhý asi 5 …": "Der Daumen ist etwa 5 … lang",
  "Pol hodiny": "Eine halbe Stunde",
  "Porovnáme desiatky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "Wir vergleichen die Zehner: {@0} und {@1}. Deshalb ${@2} {@3} {@4}$.",
  "Porovnávame, preto odčítame: {@0} {@1} má o {@2} {@3} viac.": "Wir vergleichen, deshalb subtrahieren wir: {@0} {@1} hat {@2} {@3} mehr.",
  "Posunul si sa na opačnú stranu. Menšie číslo dostaneš odčítaním.": "Du bist in die falsche Richtung gegangen. Die kleinere Zahl bekommst du durch Subtrahieren.",
  "Posunul si sa na opačnú stranu. Väčšie číslo dostaneš pripočítaním.": "Du bist in die falsche Richtung gegangen. Die größere Zahl bekommst du durch Addieren.",
  "Pozor, úsečka nezačína na nule. Spočítaj centimetre medzi A a B.": "Achtung, die Strecke beginnt nicht bei null. Zähle die Zentimeter zwischen A und B.",
  "Pozri sa na dve susedné čísla. O koľko sa líšia?": "Schau dir zwei benachbarte Zahlen an. Um wie viel unterscheiden sie sich?",
  "Pozri sa presne, na ktoré číslo ukazuje krátka ručička.": "Schau genau hin, auf welche Zahl der kurze Zeiger zeigt.",
  "Pozri sa, pri ktorom čísle je bod B.": "Schau, bei welcher Zahl der Punkt B ist.",
  "Počet skupín a počet v jednej skupine nesčítavaj. Rovnaké skupiny spočítaš násobením.": "Addiere nicht die Anzahl der Gruppen und die Anzahl in einer Gruppe. Gleiche Gruppen zählst du durch Multiplizieren zusammen.",
  "Počet tanierov a počet na jednom tanieri nesčítavaj. Na každom tanieri je rovnako – násob.": "Addiere nicht die Anzahl der Teller und die Anzahl auf einem Teller. Auf jedem Teller liegt gleich viel – multipliziere.",
  "Počítaj s desiatkami ako s jednotkami: 3 desiatky + 4 desiatky = 7 desiatok.": "Rechne mit Zehnern wie mit Einern: 3 Zehner + 4 Zehner = 7 Zehner.",
  "Počítal si, akoby mala hodina 100 minút. Hodina má len 60 minút.": "Du hast gerechnet, als hätte eine Stunde 100 Minuten. Eine Stunde hat nur 60 Minuten.",
  "Pravítko a úsečka AB": "Lineal und Strecke AB",
  "Prejdi násobky čísla {@0}, kým nenájdeš {@1}.": "Gehe die Vielfachen von {@0} durch, bis du {@1} findest.",
  "Prestávka trvá 10 …": "Die Pause dauert 10 …",
  "Prečítal si len číslo pri bode B. Úsečka nezačína na nule, preto odčítaj číslo pri bode A.": "Du hast nur die Zahl bei Punkt B abgelesen. Die Strecke beginnt nicht bei null, deshalb ziehe die Zahl bei Punkt A ab.",
  "Pri jednotkách si odčítal obrátene ({@0} − {@1}). Keď jednotky nestačia, prejdi cez desiatku: uber najprv desiatky, potom jednotky.": "Bei den Einern hast du umgekehrt subtrahiert ({@0} − {@1}). Wenn die Einer nicht reichen, gehe über den Zehner: Nimm zuerst die Zehner weg, dann die Einer.",
  "Pri ktorom čísle na pravítku je bod A?": "Bei welcher Zahl auf dem Lineal ist der Punkt A?",
  "Pri ktorom čísle na pravítku je bod B?": "Bei welcher Zahl auf dem Lineal ist der Punkt B?",
  "Priamka je rovná čiara. Tu je len jedna bodka.": "Eine Gerade ist eine gerade Linie. Hier ist nur ein Tupfen.",
  "Priamka je rovná. Táto čiara sa zatáča.": "Eine Gerade ist gerade. Diese Linie macht Kurven.",
  "Priamka nemá krajné body. Táto čiara má dva krajné body, kde začína a končí.": "Eine Gerade hat keine Endpunkte. Diese Linie hat zwei Endpunkte, wo sie beginnt und endet.",
  "Priamka nemá začiatok ani koniec, nemá žiadny krajný bod.": "Eine Gerade hat weder Anfang noch Ende, sie hat keinen Endpunkt.",
  "Pribudlo → sčítanie, ubudlo → odčítanie, viackrát po rovnako → násobenie.": "Dazugekommen → Addition, weggegangen → Subtraktion, mehrmals gleich viel → Multiplikation.",
  "Pribudlo, preto sčítame.": "Es ist etwas dazugekommen, deshalb addieren wir.",
  "Pridávame, preto sčítame: {@0} {@1} má {@2} {@3}.": "Es kommt etwas dazu, deshalb addieren wir: {@0} {@1} hat {@2} {@3}.",
  "Pripočítal si len desiatky. Nezabudni pridať aj {@0} {@1}.": "Du hast nur die Zehner addiert. Vergiss nicht, auch {@0} {@1} dazuzugeben.",
  "Pripočítavaj {@0} toľkokrát, koľko je {@1}, alebo si spomeň na násobilku čísla {@2}.": "Addiere {@0} so oft, wie {@1} angibt, oder denke an die Einmaleinsreihe von {@2}.",
  "Rovnaké rozdeľovanie je delenie.": "Gerechtes Verteilen ist Dividieren.",
  "Rovná čiara bez krajných bodov, ktorá ide cez celý obrázok, je priamka.": "Eine gerade Linie ohne Endpunkte, die durch das ganze Bild geht, ist eine Gerade.",
  "Rovná čiara s dvoma krajnými bodmi je úsečka.": "Eine gerade Linie mit zwei Endpunkten ist eine Strecke.",
  "Rozdeľ druhé číslo na desiatky a jednotky a pripočítaj ich postupne.": "Zerlege die zweite Zahl in Zehner und Einer und addiere sie nacheinander.",
  "Rozdeľujeme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$. Každý dostal {@8} {@9}.": "Wir verteilen auf {@0} {@1}: ${@2} : {@3} = {@4}$, weil ${@5} \\cdot {@6} = {@7}$. Jeder bekam {@8} {@9}.",
  "Rozlož číslo na desiatky a jednotky: ${@0} = \\square + \\square$.": "Zerlege die Zahl in Zehner und Einer: ${@0} = \\square + \\square$.",
  "Si o jeden násobok čísla {@0} nižšie. Spočítaj skoky po {@1} ešte raz.": "Du bist um ein Vielfaches von {@0} zu tief. Zähle die Sprünge um {@1} noch einmal.",
  "Si o jeden násobok čísla {@0} vyššie. Spočítaj skoky po {@1} ešte raz.": "Du bist um ein Vielfaches von {@0} zu hoch. Zähle die Sprünge um {@1} noch einmal.",
  "Skoky na číselnom rade: 38 plus 20 plus 5": "Sprünge auf der Zahlenreihe: 38 plus 20 plus 5",
  "Spolu je to {@0} € a {@1} c. Koľko je to eur a centov? (Pamätaj: 100 centov je 1 euro.)": "Zusammen sind das {@0} € und {@1} c. Wie viel Euro und Cent sind das? (Denk daran: 100 Cent sind 1 Euro.)",
  "Spočítaj 12 hodín dopoludnia a 12 hodín popoludní.": "Zähle 12 Stunden am Vormittag und 12 Stunden am Nachmittag zusammen.",
  "Spočítaj skupiny a koľko je v jednej skupine. Potom vynásob.": "Zähle die Gruppen und wie viele in einer Gruppe sind. Dann multipliziere.",
  "Spočítal si, koľko je mincí. Treba sčítať čísla napísané na minciach.": "Du hast gezählt, wie viele Münzen es sind. Du musst die Zahlen addieren, die auf den Münzen stehen.",
  "Stovková tabuľka čísel od 1 do 100": "Hundertertafel mit den Zahlen von 1 bis 100",
  "Stuha meria ${@0}\\,\\text{cm}$. Koľko centimetrov chýba do $1\\,\\text{m}$?": "Ein Band ist ${@0}\\,\\text{cm}$ lang. Wie viele Zentimeter fehlen bis $1\\,\\text{m}$?",
  "Sú tu {@0} {@1} po {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.": "Hier sind {@0} {@1} mit je {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.",
  "Sčítaj hodnoty mincí, začni od najväčšej.": "Addiere die Werte der Münzen, beginne mit der größten.",
  "Sčítanie použiješ, keď niečo pribudne.": "Addieren verwendest du, wenn etwas dazukommt.",
  "Teraz odčítaj jednotky: koľko je ${@0} - {@1}$?": "Subtrahiere jetzt die Einer: Wie viel ist ${@0} - {@1}$?",
  "Teraz pripočítaj jednotky: koľko je ${@0} + {@1}$?": "Addiere jetzt die Einer: Wie viel ist ${@0} + {@1}$?",
  "To je dĺžka stuhy. Pýtame sa, koľko jej chýba do 1 metra – odčítaj od 100.": "Das ist die Länge des Bandes. Wir fragen, wie viel bis 1 Meter fehlt – ziehe von 100 ab.",
  "To je len polovica dňa. Ciferník ukazuje 12 hodín, ale ručička ho za deň obehne dvakrát.": "Das ist nur ein halber Tag. Das Zifferblatt zeigt 12 Stunden, aber der Zeiger läuft an einem Tag zweimal herum.",
  "To je počet desiatok. Jednotky sú posledná číslica vpravo.": "Das ist die Anzahl der Zehner. Die Einer sind die letzte Ziffer rechts.",
  "To je počet jednotiek. Desiatky sú prvá číslica vľavo.": "Das ist die Anzahl der Einer. Die Zehner sind die erste Ziffer links.",
  "Toľko centov už máš. Pýtame sa, koľko ti chýba do 100 centov – odčítaj.": "So viele Cent hast du schon. Wir fragen, wie viel dir bis 100 Cent fehlt – subtrahiere.",
  "Tri rady po štyri bodky": "Drei Reihen mit je vier Punkten",
  "Trieda je dlhá asi 9 …": "Ein Klassenzimmer ist etwa 9 … lang",
  "Trištvrte hodiny": "Eine Dreiviertelstunde",
  "Trojuholník má 3 strany a každá strana je úsečka.": "Ein Dreieck hat 3 Seiten und jede Seite ist eine Strecke.",
  "Uberáme, preto odčítame: {@0} Zostalo {@1} {@2} {@3}.": "Es wird etwas weggenommen, deshalb subtrahieren wir: {@0} Übrig geblieben sind {@1} {@2} {@3}.",
  "Ubudlo, preto odčítame.": "Es ist etwas weggegangen, deshalb subtrahieren wir.",
  "V centoch: ${@0} = {@1}$ centov. 100 centov je 1 euro, preto je to {@2} € a {@3} c.": "In Cent: ${@0} = {@1}$ Cent. 100 Cent sind 1 Euro, deshalb sind das {@2} € und {@3} c.",
  "V jednotkách {@0} meriame {@1}, ale tu ide o {@2}.": "In {@0} misst man {@1}, aber hier geht es um {@2}.",
  "V noci spíme asi 10 …": "In der Nacht schlafen wir etwa 10 …",
  "Vymenil si desiatky a jednotky. Desiatky píšeme na prvé miesto, jednotky na druhé.": "Du hast Zehner und Einer vertauscht. Die Zehner schreiben wir an die erste Stelle, die Einer an die zweite.",
  "Vymenil si ručičky. Krátka ručička ukazuje hodiny, dlhá ručička minúty.": "Du hast die Zeiger vertauscht. Der kurze Zeiger zeigt die Stunden, der lange Zeiger die Minuten.",
  "Vymenuj násobky {@0}: {@1}, {@2}, {@3}, …": "Zähle die Vielfachen von {@0} auf: {@1}, {@2}, {@3}, …",
  "Vypočítaj ${@0} : {@1}$.": "Rechne ${@0} : {@1}$.",
  "Vypočítaj ${@0} \\cdot {@1}$.": "Rechne ${@0} \\cdot {@1}$.",
  "Vypočítaj ${@0} {@1} {@2}$.": "Rechne ${@0} {@1} {@2}$.",
  "Vyučovanie trvá asi 5 …": "Der Unterricht dauert etwa 5 …",
  "Z koľkých úsečiek sa skladá obvod trojuholníka?": "Aus wie vielen Strecken besteht der Umfang eines Dreiecks?",
  "Z koľkých úsečiek sa skladá obvod štvorca?": "Aus wie vielen Strecken besteht der Umfang eines Quadrats?",
  "Z {@0} balónov robíme zväzky po {@1} {@2}. Koľko zväzkov urobíme?": "Aus {@0} Luftballons machen wir Bündel mit je {@1} {@2}. Wie viele Bündel machen wir?",
  "Zapíš súčet ako násobenie a vypočítaj: ${@0}$": "Schreibe die Summe als Multiplikation und rechne: ${@0}$",
  "Zisťujeme, koľkokrát sa {@0} zmestí do {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "Wir finden heraus, wie oft {@0} in {@1} passt: ${@2} : {@3} = {@4}$, weil ${@5} \\cdot {@6} = {@7}$.",
  "Zmení sa len počet desiatok, jednotky ostanú rovnaké. V stovkovej tabuľke sa posuň o riadok.": "Es ändert sich nur die Anzahl der Zehner, die Einer bleiben gleich. Gehe in der Hundertertafel eine Zeile weiter.",
  "Zmrzlina stojí asi 2 …": "Ein Eis kostet etwa 2 …",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "Das Zeichen = gehört nur zwischen zwei gleiche Zahlen. Diese Zahlen sind verschieden.",
  "Znak je otočený naopak. Desiatky sú rovnaké, preto rozhodujú jednotky.": "Das Zeichen ist verkehrt herum. Die Zehner sind gleich, deshalb entscheiden die Einer.",
  "Znak je otočený naopak. Rozhodujú desiatky: väčšie je číslo, ktoré má viac desiatok.": "Das Zeichen ist verkehrt herum. Die Zehner entscheiden: Größer ist die Zahl, die mehr Zehner hat.",
  "Znamienko + znamená pridať. Tu treba sčítať, nie odčítať.": "Das Zeichen + bedeutet dazugeben. Hier musst du addieren, nicht subtrahieren.",
  "Znamienko − znamená ubrať. Tu treba odčítať, nie sčítať.": "Das Zeichen − bedeutet wegnehmen. Hier musst du subtrahieren, nicht addieren.",
  "balón": "Luftballon",
  "balónov": "Luftballons",
  "balóny": "Luftballons",
  "bod": "Punkt",
  "bod A": "Punkt A",
  "cent": "Cent",
  "centov": "Cent",
  "centy": "Cent",
  "cenu": "den Preis",
  "ciferník hodín": "Zifferblatt",
  "citrónov": "Zitronen",
  "desiatku": "Zehner",
  "deti": "Kinder",
  "detí": "Kinder",
  "dieťa": "Kind",
  "dĺžku": "die Länge",
  "eurá; centy": "Euro; Cent",
  "hodina": "Stunde",
  "hodiny": "Stunden",
  "hodín": "Stunden",
  "hrušiek": "Birnen",
  "jahôd": "Erdbeeren",
  "je medzi {@0} a {@1}": "steht zwischen {@0} und {@1}",
  "jednotku": "Einer",
  "krivá čiara": "krumme Linie",
  "kúpil": "kaufte",
  "kúpila": "kaufte",
  "min": "min",
  "mince": "Münzen",
  "mrkiev": "Karotten",
  "orechov": "Nüsse",
  "orechy": "Nüsse",
  "pol hodiny": "eine halbe Stunde",
  "položil": "legte",
  "položila": "legte",
  "presne {@0} {@1}": "genau {@0} Uhr",
  "priamka": "Gerade",
  "priamka p": "Gerade p",
  "rovnaké časti": "gleiche Teile",
  "rovnakú časť": "gleichen Teil",
  "rovnakých častí": "gleiche Teile",
  "rozdelil": "verteilte",
  "rozdelila": "verteilte",
  "skupina": "Gruppe",
  "skupiny": "Gruppen",
  "skupín": "Gruppen",
  "skáčeme vždy o 3": "wir springen immer um 3",
  "stratil": "verlor",
  "stratila": "verlor",
  "tanier": "Teller",
  "taniere": "Teller",
  "tanierov": "Teller",
  "trištvrte hodiny": "eine Dreiviertelstunde",
  "ukazuje na {@0}": "zeigt auf {@0}",
  "vreciek": "Tüten",
  "vrecko": "Tüte",
  "vrecká": "Tüten",
  "{@0} Skúška: ${@1} + {@2} = {@3}$.": "{@0} Probe: ${@1} + {@2} = {@3}$.",
  "{@0} Správny zápis je {@1}.": "{@0} Die richtige Rechnung ist {@1}.",
  "{@0} desiatka je {@1}.": "{@0} Zehner ist {@1}.",
  "{@0} desiatky sú {@1}.": "{@0} Zehner sind {@1}.",
  "{@0} desiatok je {@1}.": "{@0} Zehner sind {@1}.",
  "{@0} je len to, o koľko má {@1} menej. Odčítaj to od toho, čo má {@2}.": "{@0} ist nur das, um wie viel {@1} weniger hat. Ziehe es von dem ab, was {@2} hat.",
  "{@0} má menej ako {@1}, preto treba odčítať, nie sčítať.": "{@0} hat weniger als {@1}, deshalb musst du subtrahieren, nicht addieren.",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} menej. Koľko {@6} má {@7}?": "{@0} hat {@1} {@2}. {@3} hat {@4} {@5} weniger. Wie viele {@6} hat {@7}?",
  "{@0} {@1} a {@2} minút": "{@0} Uhr und {@2} Minuten",
  "{@0} {@1} na {@2} {@3} po {@4} {@5}. Koľko {@6} je na tanieroch spolu?": "{@0} {@1} auf {@2} {@3} je {@4} {@5}. Wie viele {@6} liegen insgesamt auf den Tellern?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Ktorý zápis ukazuje, koľko {@6} má teraz?": "{@0} {@1} {@2} {@3} und {@4} noch {@5} dazu. Welche Rechnung zeigt, wie viele {@6} {@0} jetzt hat?",
  "{@0} {@1} {@2} {@3} a {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} zostalo?": "{@0} {@1} {@2} {@3} und {@5} {@4} davon. Welche Rechnung zeigt, wie viele {@6} {@7} übrig geblieben sind?",
  "{@0} {@1} {@2} {@3} po {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} spolu?": "{@0} {@1} {@2} {@3} mit je {@4} {@5}. Welche Rechnung zeigt, wie viele {@6} {@0} insgesamt {@7}?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} kamarátov. Koľko {@5} dostal každý kamarát?": "{@0} {@1} {@2} {@3} gerecht an {@4} Freunde. Wie viele {@5} bekam jeder Freund?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} {@5}. Koľko cukríkov dostalo každé dieťa?": "{@0} {@1} {@2} {@3} gerecht an {@4} {@5}. Wie viele Bonbons bekam jedes Kind?",
  "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.": "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.",
  "{@0}-krát po {@1} je násobenie.": "{@0}-mal je {@1} ist Multiplizieren.",
  "{@0}-krát po {@1} je násobenie: ${@2} \\cdot {@3} = {@4}$. Na tanieroch je {@5} {@6}.": "{@0}-mal je {@1} ist Multiplizieren: ${@2} \\cdot {@3} = {@4}$. Auf den Tellern liegen {@5} {@6}.",
  "Úsečka $KL$ meria ${@0}\\,\\text{cm}$, úsečka $MN$ meria ${@1}\\,\\text{cm}$. O koľko centimetrov je úsečka $KL$ dlhšia?": "Die Strecke $KL$ ist ${@0}\\,\\text{cm}$ lang, die Strecke $MN$ ist ${@1}\\,\\text{cm}$ lang. Um wie viele Zentimeter ist die Strecke $KL$ länger?",
  "Úsečka je rovná. Táto čiara sa zatáča.": "Eine Strecke ist gerade. Diese Linie macht Kurven.",
  "Úsečka je čiara medzi dvoma bodmi. Tu je len jedna bodka.": "Eine Strecke ist eine Linie zwischen zwei Punkten. Hier ist nur ein Tupfen.",
  "Úsečka má dva krajné body, napríklad $A$ a $B$.": "Eine Strecke hat zwei Endpunkte, zum Beispiel $A$ und $B$.",
  "Úsečka má na koncoch dva krajné body. Táto čiara ich nemá, pokračuje ďalej.": "Eine Strecke hat an den Enden zwei Endpunkte. Diese Linie hat keine, sie geht weiter.",
  "Úsečka má začiatok aj koniec, priamka nemá ani jedno.": "Eine Strecke hat einen Anfang und ein Ende, eine Gerade hat keins von beiden.",
  "Úsečka začína na nule a končí pri čísle {@0}. Je dlhá ${@1}\\,\\text{cm}$.": "Die Strecke beginnt bei null und endet bei der Zahl {@0}. Sie ist ${@1}\\,\\text{cm}$ lang.",
  "úsečka": "Strecke",
  "úsečka CD": "Strecke CD",
  "Čiara sa zatáča, nie je rovná, teda je to krivá čiara.": "Die Linie macht Kurven, sie ist nicht gerade, also ist es eine krumme Linie.",
  "Čistenie zubov trvá asi 3 …": "Zähneputzen dauert etwa 3 …",
  "Čo je na obrázku?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"čiara alebo bod\">{@0}</svg>": "Was ist auf dem Bild?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"Linie oder Punkt\">{@0}</svg>",
  "Čísla nesčítavaj. Hľadáš, koľko sme ubrali, aby z čísla {@0} zostalo {@1} – to zistíš odčítaním.": "Addiere die Zahlen nicht. Du suchst, wie viel wir weggenommen haben, damit von {@0} noch {@1} übrig bleibt – das findest du durch Subtrahieren.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby vyšlo {@1} – to zistíš odčítaním.": "Addiere die Zahlen nicht. Du suchst, wie viel du zu {@0} dazugeben musst, damit {@1} herauskommt – das findest du durch Subtrahieren.",
  "Čísla nesčítavaj. Otázka „o koľko viac“ porovnáva – odčítaj menšie číslo od väčšieho.": "Addiere die Zahlen nicht. Die Frage „um wie viel mehr“ vergleicht – ziehe die kleinere Zahl von der größeren ab.",
  "Čísla si sčítal. Znak · znamená násobiť.": "Du hast die Zahlen addiert. Das Zeichen · bedeutet multiplizieren.",
  "Čísla sú rovnaké: ${@0} = {@1}$.": "Die Zahlen sind gleich: ${@0} = {@1}$.",
  "Čísla sú úplne rovnaké, ani jedno nie je väčšie.": "Die Zahlen sind genau gleich, keine ist größer.",
  "Čísla {@0} vždy o {@1}: {@2}.": "Die Zahlen {@0} immer um {@1}: {@2}.",
  "Číslo {@0} nie je v násobilke čísla {@1}: leží medzi násobkami {@2} a {@3}.": "Die Zahl {@0} ist nicht in der Einmaleinsreihe von {@1}: Sie liegt zwischen den Vielfachen {@2} und {@3}.",
  "Číslo {@0} sčítavame {@1}-krát: ${@2} \\cdot {@3} = {@4}$.": "Die Zahl {@0} addieren wir {@1}-mal: ${@2} \\cdot {@3} = {@4}$.",
  "čas": "die Zeit",
  "čiara alebo bod": "Linie oder Punkt",
  "Štvorec má 4 strany, každá strana je úsečka.": "Ein Quadrat hat 4 Seiten, jede Seite ist eine Strecke.",
  "Štvrť hodiny": "Eine Viertelstunde",
  "štvrť hodiny": "eine Viertelstunde",
  "„O {@0} menej“ znamená {@1} ubrať: {@2} {@3} má {@4} {@5}.": "„{@0} weniger“ bedeutet, {@1} wegzunehmen: {@2} {@3} hat {@4} {@5}.",
  "„O … menej“ znamená odčítať.": "„… weniger“ bedeutet subtrahieren.",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "Lineal und Strecke AB": "Lineal und Strecke AB",
  "Linie oder Punkt": "Linie oder Punkt",
  "Münzen": "Münzen",
  "Zifferblatt": "Zifferblatt"
 }
});
