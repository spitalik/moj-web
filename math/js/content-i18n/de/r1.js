/* Deutsch: preklad js/rocniky/r1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/r1/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "r1-cisla20": {
   "title": "Zahlen bis 20",
   "summary": "Zahlen von 0 bis 20 lesen, schreiben und vergleichen.",
   "theory": [
    "<p>Die Zahlen von 0 bis 20 können wir lesen und mit Ziffern schreiben: 0 (null), 1 (eins), 2 (zwei) … 10 (zehn) … 20 (zwanzig).\n       Die Zahlen von 11 bis 19 haben <strong>1 Zehner</strong> und einige <strong>Einer</strong>: zum Beispiel $14 = 10 + 4$.</p>",
    {
     "fig": "r1-rad20",
     "caption": "Die Zahlenreihe von 0 bis 20. Je weiter rechts, desto größer ist die Zahl."
    },
    "<p><strong>Vergleichen:</strong> Das Zeichen $&lt;$ bedeutet „ist kleiner als“, das Zeichen $&gt;$ „ist größer als“ und $=$ „ist gleich“.\n       Die offene Seite des Zeichens zeigt immer zur größeren Zahl: $7 &lt; 12$, $15 &gt; 9$.</p>"
   ],
   "examples": [
    {
     "task": "Vergleiche die Zahlen 13 und 8.",
     "steps": [
      "In der Zahlenreihe liegt 13 weiter rechts als 8.",
      "Deshalb gilt $13 &gt; 8$."
     ]
    },
    {
     "task": "Wie viele Zehner und Einer hat die Zahl 17?",
     "steps": [
      "$17 = 10 + 7$.",
      "<strong>1 Zehner und 7 Einer.</strong>"
     ]
    }
   ]
  },
  "r1-scitanie": {
   "title": "Addieren und Subtrahieren bis 20",
   "summary": "Dazutun und Wegnehmen, Rechnen über den Zehner.",
   "theory": [
    "<p><strong>Addieren</strong> bedeutet dazutun: $5 + 3 = 8$. Die Zahlen, die wir addieren, sind die <em>Summanden</em>, das Ergebnis ist die <em>Summe</em>.\n       Die Reihenfolge der Summanden spielt keine Rolle: $3 + 5 = 5 + 3$.</p>",
    "<p><strong>Subtrahieren</strong> bedeutet wegnehmen: $8 - 3 = 5$. Subtrahieren ist die Umkehrung des Addierens: Wenn $5 + 3 = 8$, dann ist $8 - 3 = 5$ und auch $8 - 5 = 3$.</p>",
    "<p><strong>Rechnen über den Zehner:</strong> Bei $8 + 5$ ergänzen wir zuerst bis zum Zehner ($8 + 2 = 10$) und addieren dann den Rest ($10 + 3 = 13$).</p>",
    {
     "fig": "r1-desiatka",
     "caption": "Zwei Zehnerfelder: 8 blaue und 5 grüne. Zwei grüne füllen den ersten Zehner auf, die übrigen 3 liegen im zweiten: $8 + 5 = 13$."
    }
   ],
   "examples": [
    {
     "task": "Berechne $8 + 5$.",
     "steps": [
      "Wir ergänzen bis zum Zehner: $8 + 2 = 10$.",
      "Von der 5 bleiben 3 übrig: $10 + 3 = 13$.",
      "<strong>Ergebnis: 13</strong>"
     ]
    },
    {
     "task": "Berechne $14 - 6$.",
     "steps": [
      "Zuerst nehmen wir 4 weg, um zum Zehner zu kommen: $14 - 4 = 10$.",
      "Von der 6 müssen wir noch 2 wegnehmen: $10 - 2 = 8$.",
      "<strong>Ergebnis: 8</strong>"
     ]
    }
   ]
  },
  "r1-rozklad": {
   "title": "Zahlenreihe und Zerlegen von Zahlen",
   "summary": "Welche Zahl kommt davor und danach, eine Zahl in zwei Teile zerlegen.",
   "theory": [
    "<p>Die <strong>Zahlenreihe</strong> ordnet die Zahlen der Reihe nach: 0, 1, 2, 3, … Die Zahl direkt vor einer Zahl (der Vorgänger) ist um 1 kleiner,\n       die Zahl direkt danach (der Nachfolger) ist um 1 größer.</p>",
    "<p>Eine <strong>Zahl zerlegen</strong> heißt, sie als Summe zweier kleinerer Zahlen zu schreiben. Die Zahl 6 können wir zum Beispiel zerlegen\n       in $1 + 5$, $2 + 4$ oder $3 + 3$.</p>",
    {
     "fig": "r1-domcek",
     "caption": "Zahlenhaus der Zahl 6: In jedem Stockwerk stehen zwei Zahlen, die zusammen 6 ergeben."
    }
   ],
   "examples": [
    {
     "task": "Welche Zahl folgt in der Zahlenreihe auf die Zahl 15?",
     "steps": [
      "Nach einer Zahl kommt immer die Zahl, die um 1 größer ist.",
      "$15 + 1 = 16$.",
      "<strong>Ergebnis: 16</strong>"
     ]
    },
    {
     "task": "Ergänze die Zerlegung: $9 = 4 + \\square$.",
     "steps": [
      "Wir suchen, wie viel von 4 bis 9 fehlt.",
      "$9 - 4 = 5$.",
      "<strong>$9 = 4 + 5$</strong>"
     ]
    }
   ]
  },
  "r1-slovne": {
   "title": "Einfache Sachaufgaben",
   "summary": "Wie man aus einer Geschichte eine Rechnung macht und eine Antwort schreibt.",
   "theory": [
    "<p>Bei einer Sachaufgabe gehen wir Schritt für Schritt vor:</p>\n       <ol><li>Wir lesen die Aufgabe,</li><li>wir überlegen, was wir wissen und was wir suchen,</li><li>wir schreiben die Rechnung auf,</li>\n       <li>wir rechnen,</li><li>wir schreiben die Antwort als ganzen Satz.</li></ol>",
    "<p>Wörter wie <em>dazugelegt, bekommen, zusammen, … mehr</em> bedeuten meistens <strong>Addieren</strong>.\n       Wörter wie <em>gegessen, weggegeben, übrig geblieben, wie viel mehr</em> bedeuten meistens <strong>Subtrahieren</strong>.</p>"
   ],
   "examples": [
    {
     "task": "Emma hatte 7 Bonbons und bekam noch 5 dazu. Wie viele Bonbons hat sie jetzt?",
     "steps": [
      "Wir wissen: Sie hatte 7 Bonbons und bekam 5. Wir suchen, wie viele sie zusammen hat.",
      "Rechnung: $7 + 5 = 12$.",
      "<strong>Antwort: Emma hat 12 Bonbons.</strong>"
     ]
    },
    {
     "task": "Jonas hat 9 Murmeln, Max hat 4 Murmeln. Wie viele Murmeln hat Jonas mehr?",
     "steps": [
      "Wir vergleichen, deshalb ziehen wir die kleinere Zahl von der größeren ab.",
      "Rechnung: $9 - 4 = 5$.",
      "<strong>Antwort: Jonas hat 5 Murmeln mehr.</strong>"
     ]
    }
   ]
  },
  "r1-utvary": {
   "title": "Ebene Figuren und Körper",
   "summary": "Kreis, Dreieck, Quadrat, Rechteck und Körper um uns herum.",
   "theory": [
    "<p><strong>Ebene Figuren</strong> sind flach, wir können sie auf Papier zeichnen: <strong>Kreis</strong>, <strong>Dreieck</strong>\n       (3 Seiten, 3 Ecken), <strong>Quadrat</strong> (4 gleich lange Seiten) und <strong>Rechteck</strong> (4 Seiten, gegenüberliegende Seiten sind gleich lang).</p>",
    {
     "fig": "r1-rovinne",
     "caption": "Ebene Figuren."
    },
    "<p><strong>Körper</strong> können wir in die Hand nehmen: <strong>Würfel</strong> (Spielwürfel), <strong>Quader</strong> (Schachtel),\n       <strong>Kugel</strong> (Ball), <strong>Zylinder</strong> (Dose) und <strong>Kegel</strong> (Eiswaffel).</p>",
    {
     "fig": "r1-telesa",
     "caption": "Körper. Die gestrichelte Linie zeigt eine Kante, die hinten liegt."
    }
   ],
   "examples": [
    {
     "task": "Wie viele Ecken hat ein Dreieck und wie viele ein Quadrat?",
     "steps": [
      "Eine Ecke ist die Spitze einer Figur.",
      "Ein Dreieck hat 3 Ecken, ein Quadrat hat 4 Ecken."
     ]
    },
    {
     "task": "Welchem Körper ähnelt ein Ball?",
     "steps": [
      "Ein Ball ist von allen Seiten rund.",
      "<strong>Ein Ball hat die Form einer Kugel.</strong>"
     ]
    }
   ]
  },
  "r1-meranie": {
   "title": "Orientierung im Raum und Messen",
   "summary": "Links, rechts, zwischen; Längen vergleichen und messen.",
   "theory": [
    "<p><strong>Orientierung:</strong> Wir verwenden die Wörter links – rechts, oben – unten, vor – hinter, neben und zwischen.\n       In der Reihe 🐶 🐱 🐰 ist die Katze <em>zwischen</em> dem Hund und dem Hasen, und der Hund ist <em>links</em> von der Katze.</p>",
    "<p><strong>Längen messen:</strong> Eine Länge können wir mit Schritten, Handbreiten oder Würfeln messen. Genauer messen wir mit dem Lineal\n       in Zentimetern (cm). Beim Vergleichen sagen wir länger – kürzer, höher – niedriger.</p>",
    {
     "fig": "r1-meranie",
     "caption": "Der Bleistift ist 7 Würfel lang, der Radiergummi 3 Würfel. Der Bleistift ist um 4 Würfel länger."
    }
   ],
   "examples": [
    {
     "task": "Welches Obst liegt in der Reihe 🍎 🍐 🍌 🍇 direkt rechts von der Birne?",
     "steps": [
      "Die Birne 🍐 ist die zweite von links.",
      "Direkt rechts von ihr liegt die Banane 🍌."
     ]
    },
    {
     "task": "Ein Band ist 9 cm lang, ein anderes 5 cm. Um wie viel ist das erste Band länger?",
     "steps": [
      "Wir vergleichen, deshalb subtrahieren wir: $9 - 5 = 4$.",
      "<strong>Das erste Band ist um 4 cm länger.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "${@0} - {@1} = {@2}$, teda ${@3} = {@4} + {@5}$.": "${@0} - {@1} = {@2}$, also ${@3} = {@4} + {@5}$.",
  "${@0} - {@1} = {@2}$, červená stuha je o {@3} cm dlhšia.": "${@0} - {@1} = {@2}$, das rote Band ist um {@3} cm länger.",
  "${@0} = {@1} + {@2}$, teda {@3} {@4} a {@5} {@6}.": "${@0} = {@1} + {@2}$, also {@3} {@4} und {@5} {@6}.",
  "Adam": "Adam",
  "Ak prejdeš cez 10, najprv doplň do desiatky a potom pridaj zvyšok.": "Wenn du über die 10 gehst, ergänze zuerst bis zum Zehner und gib dann den Rest dazu.",
  "Ako sa volá {@0}?": "Wie heißt {@0}?",
  "Budeš sčítať (+), alebo odčítať (−)?": "Wirst du addieren (+) oder subtrahieren (−)?",
  "Chýbajúce číslo zistíš odčítaním.": "Die fehlende Zahl findest du durch Subtrahieren.",
  "Desiatkové rámčeky: 8 plus 5": "Zehnerrahmen: 8 plus 5",
  "Domček rozkladu čísla 6": "Zahlenhaus der Zahl 6",
  "Doplnil si do desiatky, ale zabudol si pridať zvyšok: ešte $+ {@0}$.": "Du hast bis zum Zehner ergänzt, aber vergessen, den Rest dazuzugeben: noch $+ {@0}$.",
  "Doplň chýbajúce číslo: ${@0} + \\square = {@1}$": "Ergänze die fehlende Zahl: ${@0} + \\square = {@1}$",
  "Doplň do desiatky: ${@0} + {@1} = 10$, potom $10 + {@2} = {@3}$.": "Ergänze bis zum Zehner: ${@0} + {@1} = 10$, dann $10 + {@2} = {@3}$.",
  "Doplň správny znak: ${@0} \\;\\square\\; {@1}$": "Setze das richtige Zeichen ein: ${@0} \\;\\square\\; {@1}$",
  "Doplň číslo, ktoré chýba v číselnom rade: {@0}": "Ergänze die Zahl, die in der Zahlenreihe fehlt: {@0}",
  "Dĺžky stúh nesčítavaj. Pýtame sa, o koľko je červená stuha dlhšia – odčítaj.": "Addiere die Längen der Bänder nicht. Wir fragen, um wie viel das rote Band länger ist – subtrahiere.",
  "Ema": "Emma",
  "Hneď pred": "Direkt vor",
  "Hneď vpravo od {@0} stojí {@1}.": "Direkt rechts von {@0} steht: {@1}.",
  "Hneď vľavo od {@0} stojí {@1}.": "Direkt links von {@0} steht: {@1}.",
  "Hneď za": "Direkt nach",
  "Hľadaj číslo, ktoré je o 1 väčšie ako prvé.": "Suche die Zahl, die um 1 größer ist als die erste.",
  "Hľadáme, koľko chýba od {@0} do {@1}: ${@2} - {@3} = {@4}$.": "Wir suchen, wie viel von {@0} bis {@1} fehlt: ${@2} - {@3} = {@4}$.",
  "Jano": "Jonas",
  "Keď niečo dáš preč, zostane toho menej. Tu treba odčítať, nie sčítať.": "Wenn du etwas wegnimmst, bleibt weniger übrig. Hier musst du subtrahieren, nicht addieren.",
  "Keď niečo pribudne, je toho viac. Tu treba sčítať, nie odčítať.": "Wenn etwas dazukommt, wird es mehr. Hier musst du addieren, nicht subtrahieren.",
  "Keď niečo pribudne, sčítavame.": "Wenn etwas dazukommt, addieren wir.",
  "Keď niečo ubudne, odčítavame.": "Wenn etwas weggeht, subtrahieren wir.",
  "Kocka má 6 stien a každá stena je štvorec.": "Ein Würfel hat 6 Flächen und jede Fläche ist ein Quadrat.",
  "Kocka má 8 vrcholov: 4 hore a 4 dole.": "Ein Würfel hat 8 Ecken: 4 oben und 4 unten.",
  "Kocka má všetky steny rovnaké štvorce. Toto teleso je širšie, ako je vysoké.": "Beim Würfel sind alle Flächen gleiche Quadrate. Dieser Körper ist breiter als hoch.",
  "Kocky z oboch pásov nesčítavaj. Zisti, o koľko kociek má modrý pás viac – odčítaj.": "Addiere die Würfel aus beiden Streifen nicht. Finde heraus, um wie viele Würfel der blaue Streifen mehr hat – subtrahiere.",
  "Koľko chýba od {@0} do {@1}?": "Wie viel fehlt von {@0} bis {@1}?",
  "Koľko chýba čísla {@0} do 10?": "Wie viel fehlt der Zahl {@0} bis 10?",
  "Koľko je $10 + {@0}$?": "Wie viel ist $10 + {@0}$?",
  "Koľko je $10 - {@0}$?": "Wie viel ist $10 - {@0}$?",
  "Koľko jednotiek má {@0} navyše oproti 10?": "Wie viele Einer hat {@0} mehr als 10?",
  "Koľko kociek má modrý pás?": "Wie viele Würfel hat der blaue Streifen?",
  "Koľko kociek má zelený pás?": "Wie viele Würfel hat der grüne Streifen?",
  "Koľko musíš ubrať z čísla {@0}, aby si sa dostal na 10?": "Wie viel musst du von {@0} wegnehmen, um auf 10 zu kommen?",
  "Koľko stien má kocka?": "Wie viele Flächen hat ein Würfel?",
  "Koľko strán má trojuholník?": "Wie viele Seiten hat ein Dreieck?",
  "Koľko strán má štvorec?": "Wie viele Seiten hat ein Quadrat?",
  "Koľko vrcholov má kocka?": "Wie viele Ecken hat ein Würfel?",
  "Koľko vrcholov má kruh?": "Wie viele Ecken hat ein Kreis?",
  "Koľko vrcholov má obdĺžnik?": "Wie viele Ecken hat ein Rechteck?",
  "Koľko vrcholov má trojuholník?": "Wie viele Ecken hat ein Dreieck?",
  "Koľko {@0} má číslo {@1}?": "Wie viele {@0} hat die Zahl {@1}?",
  "Kruh nemá žiadne vrcholy, jeho okraj je oblý.": "Ein Kreis hat keine Ecken, sein Rand ist rund.",
  "Ktoré číslo je o 1 {@0} ako {@1}?": "Welche Zahl ist um 1 {@0} als {@1}?",
  "Ktoré číslo leží v číselnom rade medzi číslami {@0} a {@1}?": "Welche Zahl liegt in der Zahlenreihe zwischen {@0} und {@1}?",
  "Kužeľ má hore špičku. Toto teleso má hore aj dole kruh.": "Ein Kegel hat oben eine Spitze. Dieser Körper hat oben und unten einen Kreis.",
  "Kváder vyzerá ako krabica, jeho steny nie sú všetky rovnaké. Tu sú všetky steny rovnaké štvorce.": "Ein Quader sieht aus wie eine Schachtel, seine Flächen sind nicht alle gleich. Hier sind alle Flächen gleiche Quadrate.",
  "Lea": "Lea",
  "Medzi {@0} a {@1} stojí {@2}.": "Zwischen {@0} und {@1} steht: {@2}.",
  "Meranie kockami": "Messen mit Würfeln",
  "Miro": "Max",
  "Modrý pás má {@0} {@1}, zelený {@2}. ${@3} - {@4} = {@5}$.": "Der blaue Streifen hat {@0} {@1}, der grüne {@2}. ${@3} - {@4} = {@5}$.",
  "Máš odčítať, nie sčítať: znamienko $-$ znamená ubrať.": "Du sollst subtrahieren, nicht addieren: Das Zeichen $-$ bedeutet wegnehmen.",
  "Máš sčítať, nie odčítať: znamienko $+$ znamená pridať.": "Du sollst addieren, nicht subtrahieren: Das Zeichen $+$ bedeutet dazugeben.",
  "Na obrázku je {@0}.": "Auf dem Bild siehst du: {@0}.",
  "Na obrázku vidno len 3 steny. Ďalšie 3 steny sú schované vzadu, vľavo a dole.": "Auf dem Bild sieht man nur 3 Flächen. Die anderen 3 Flächen sind hinten, links und unten versteckt.",
  "Na číselnom rade sa posuň o jedno miesto doprava.": "Gehe in der Zahlenreihe einen Platz nach rechts.",
  "Na číselnom rade sa posuň o jedno miesto doľava.": "Gehe in der Zahlenreihe einen Platz nach links.",
  "Najprv uber do desiatky: ${@0} - {@1} = 10$, potom $10 - {@2} = {@3}$.": "Nimm zuerst bis zum Zehner weg: ${@0} - {@1} = 10$, dann $10 - {@2} = {@3}$.",
  "Nina": "Nina",
  "O koľko je modrý pás dlhší? Vypočítaj ${@0} - {@1}$.": "Um wie viel ist der blaue Streifen länger? Rechne ${@0} - {@1}$.",
  "O koľko kociek je modrý pás dlhší ako zelený? {@0}": "Um wie viele Würfel ist der blaue Streifen länger als der grüne? {@0}",
  "Obdĺžnik má 4 vrcholy.": "Ein Rechteck hat 4 Ecken.",
  "Obdĺžnik má dve strany dlhšie a dve kratšie. Sú tu všetky strany rovnako dlhé?": "Ein Rechteck hat zwei längere und zwei kürzere Seiten. Sind hier alle Seiten gleich lang?",
  "Odčítanie je opak sčítania: koľko musíš pridať k {@0}, aby si dostal {@1}?": "Subtrahieren ist das Gegenteil von Addieren: Wie viel musst du zu {@0} dazugeben, um {@1} zu bekommen?",
  "Otázka „o koľko viac“ sa rieši odčítaním.": "Die Frage „um wie viel mehr“ löst man durch Subtrahieren.",
  "Porovnávame: ${@0} - {@1} = {@2}$. {@3} má o {@4} {@5} viac.": "Wir vergleichen: ${@0} - {@1} = {@2}$. {@3} hat {@4} {@5} mehr.",
  "Posunul si sa na opačnú stranu. Menšie čísla sú na číselnom rade vľavo.": "Du bist in die falsche Richtung gegangen. Kleinere Zahlen sind in der Zahlenreihe links.",
  "Posunul si sa na opačnú stranu. Väčšie čísla sú na číselnom rade vpravo.": "Du bist in die falsche Richtung gegangen. Größere Zahlen sind in der Zahlenreihe rechts.",
  "Pozri sa znova: obe čísla sú rovnaké, ani jedno nie je väčšie.": "Schau noch einmal hin: Beide Zahlen sind gleich, keine ist größer.",
  "Počítaj od {@0} po 10.": "Zähle von {@0} bis 10.",
  "Predstav si loptu, plechovku, krabicu, hraciu kocku alebo kornútok.": "Stell dir einen Ball, eine Dose, eine Schachtel, einen Spielwürfel oder eine Eiswaffel vor.",
  "Pridávame, preto sčítame: ${@0} + {@1} = {@2}$. {@3} má {@4} {@5}.": "Es kommt etwas dazu, deshalb addieren wir: ${@0} + {@1} = {@2}$. {@3} hat {@4} {@5}.",
  "Priestorové útvary": "Körper",
  "Rovinné útvary": "Ebene Figuren",
  "Rozdiel dĺžok zistíš odčítaním.": "Den Längenunterschied findest du durch Subtrahieren.",
  "Rozlož číslo {@0}: ${@1} = {@2} + \\square$": "Zerlege die Zahl {@0}: ${@1} = {@2} + \\square$",
  "Sofia": "Sofia",
  "Spočítaj kocky v oboch pásoch a odčítaj.": "Zähle die Würfel in beiden Streifen und subtrahiere.",
  "Spočítaj strany a vrcholy útvaru.": "Zähle die Seiten und Ecken der Figur.",
  "Spočítal si len vrcholy na jednej stene. Kocka má vrcholy hore aj dole.": "Du hast nur die Ecken einer Fläche gezählt. Ein Würfel hat Ecken oben und unten.",
  "To je dĺžka celého modrého pásu. Odčítaj od nej, koľko kociek má zelený pás.": "Das ist die Länge des ganzen blauen Streifens. Ziehe davon ab, wie viele Würfel der grüne Streifen hat.",
  "To je počet desiatok. Jednotky sú číslica vpravo.": "Das ist die Anzahl der Zehner. Die Einer sind die rechte Ziffer.",
  "To je počet jednotiek. Desiatky sú číslica vľavo.": "Das ist die Anzahl der Einer. Die Zehner sind die linke Ziffer.",
  "Tomáš": "Tom",
  "Toto je zvieratko, od ktorého hľadáme. Hľadáme jeho suseda.": "Das ist das Tier, von dem aus wir suchen. Wir suchen seinen Nachbarn.",
  "Toto zvieratko stojí vpravo. Vľavo je tá strana, kde rad začína.": "Dieses Tier steht rechts. Links ist die Seite, wo die Reihe beginnt.",
  "Toto zvieratko stojí vľavo. Vpravo je tá strana, kde rad končí.": "Dieses Tier steht links. Rechts ist die Seite, wo die Reihe endet.",
  "Trojuholník má 3 strany.": "Ein Dreieck hat 3 Seiten.",
  "Trojuholník má 3 vrcholy a 3 strany.": "Ein Dreieck hat 3 Ecken und 3 Seiten.",
  "Uberáme, preto odčítame: ${@0} - {@1} = {@2}$. Zostalo {@3} {@4} {@5}.": "Es wird etwas weggenommen, deshalb subtrahieren wir: ${@0} - {@1} = {@2}$. Übrig geblieben sind {@3} {@4} {@5}.",
  "Valec má hore aj dole kruh. Toto teleso má hore špičku.": "Ein Zylinder hat oben und unten einen Kreis. Dieser Körper hat oben eine Spitze.",
  "Vrchol je roh útvaru, strana je čiara medzi dvoma vrcholmi.": "Eine Ecke ist ein Eckpunkt der Figur, eine Seite ist die Linie zwischen zwei Ecken.",
  "Vypočítaj ${@0} + {@1}$.": "Rechne ${@0} + {@1}$.",
  "Vypočítaj ${@0} - {@1}$.": "Rechne ${@0} - {@1}$.",
  "Väčšie číslo leží na číselnom rade viac vpravo. Otvorená strana znaku smeruje k väčšiemu číslu.": "Die größere Zahl liegt in der Zahlenreihe weiter rechts. Die offene Seite des Zeichens zeigt zur größeren Zahl.",
  "Vľavo je začiatok radu, vpravo jeho koniec.": "Links ist der Anfang der Reihe, rechts ihr Ende.",
  "Z čísla {@0} sme použili {@1}. Koľko z neho ešte zostáva pridať?": "Von der Zahl {@0} haben wir {@1} verbraucht. Wie viel davon müssen wir noch dazugeben?",
  "Z čísla {@0} sme ubrali {@1}. Koľko ešte treba ubrať?": "Von der Zahl {@0} haben wir {@1} weggenommen. Wie viel müssen wir noch wegnehmen?",
  "Za číslom {@0} nasleduje {@1} a za ním {@2}.": "Nach der Zahl {@0} kommt {@1} und danach {@2}.",
  "Zisti, či čísla rastú alebo klesajú, a o koľko.": "Finde heraus, ob die Zahlen steigen oder fallen und um wie viel.",
  "Znak $=$ patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "Das Zeichen $=$ gehört nur zwischen zwei gleiche Zahlen. Diese Zahlen sind verschieden.",
  "Znak je otočený naopak. Otvorená strana znaku má smerovať k väčšiemu číslu.": "Das Zeichen ist verkehrt herum. Die offene Seite des Zeichens soll zur größeren Zahl zeigen.",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vpravo od {@1}?": "Die Tiere stehen in einer Reihe: {@0} Wer steht direkt rechts von {@1}?",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vľavo od {@1}?": "Die Tiere stehen in einer Reihe: {@0} Wer steht direkt links von {@1}?",
  "Zvieratká stoja v rade: {@0} Kto stojí medzi {@1} a {@2}?": "Die Tiere stehen in einer Reihe: {@0} Wer steht zwischen {@1} und {@2}?",
  "ceruzka": "Bleistift",
  "cukrík": "Bonbon",
  "cukríkov": "Bonbons",
  "cukríky": "Bonbons",
  "dal": "gab",
  "dala": "gab",
  "desiatka": "Zehner",
  "desiatky": "Zehner",
  "desiatok": "Zehner",
  "dostal": "bekam",
  "dostala": "bekam",
  "dva pásy z kociek": "zwei Streifen aus Würfeln",
  "guličiek": "Murmeln",
  "guličku": "Murmel",
  "guličky": "Murmeln",
  "guma": "Radiergummi",
  "guľa": "Kugel",
  "jablko": "Apfel",
  "jablká": "Äpfel",
  "jabĺk": "Äpfel",
  "jednotiek": "Einer",
  "jednotka": "Einer",
  "jednotky": "Einer",
  "jej": "ihr",
  "klesajú": "fallen",
  "kociek": "Würfel",
  "kocka": "Würfel",
  "kocky": "Würfel",
  "kužeľ": "Kegel",
  "kváder": "Quader",
  "líška": "Fuchs",
  "líškou": "dem Fuchs",
  "líšky": "dem Fuchs",
  "mal": "hatte",
  "mala": "hatte",
  "mačka": "Katze",
  "mačkou": "der Katze",
  "mačky": "der Katze",
  "medveď": "Bär",
  "medveďa": "dem Bären",
  "medveďom": "dem Bären",
  "menšie": "kleiner",
  "modrý": "blau",
  "mu": "ihm",
  "myš": "Maus",
  "myši": "der Maus",
  "myšou": "der Maus",
  "nálepiek": "Sticker",
  "nálepku": "Sticker",
  "nálepky": "Sticker",
  "obrázok útvaru": "Bild einer Figur",
  "pasteliek": "Buntstifte",
  "pastelku": "Buntstift",
  "pastelky": "Buntstifte",
  "pes": "Hund",
  "psa": "dem Hund",
  "psom": "dem Hund",
  "rastú": "steigen",
  "tento útvar": "diese Figur",
  "toto teleso": "dieser Körper",
  "valec": "Zylinder",
  "väčšie": "größer",
  "zajac": "Hase",
  "zajaca": "dem Hasen",
  "zajacom": "dem Hasen",
  "zelený": "grün",
  "{@0} je len to, o koľko má {@1} viac. Pripočítaj to k tomu, čo má {@2}.": "{@0} ist nur das, um wie viel {@1} mehr hat. Zähle es zu dem dazu, was {@2} hat.",
  "{@0} má {@1} {@2}, {@3} má {@4} {@5}. O koľko {@6} má {@7} viac?": "{@0} hat {@1} {@2}, {@3} hat {@4} {@5}. Um wie viele {@6} hat {@7} mehr?",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} viac. Koľko {@6} má {@7}?": "{@0} hat {@1} {@2}. {@3} hat {@4} {@5} mehr. Wie viele {@6} hat {@7}?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Koľko {@6} má teraz?": "{@0} {@1} {@2} {@3} und {@4} noch {@5} dazu. Wie viele {@6} hat {@0} jetzt?",
  "{@0} {@1} {@2} {@3}. Kamarátom {@4} {@5} {@6}. Koľko {@7} {@8} zostalo?": "{@0} {@1} {@2} {@3}. Den Freunden {@4} {@0} {@5} {@6}. Wie viele {@7} sind {@8} übrig geblieben?",
  "{@0} číslom {@1} je v číselnom rade číslo {@2}.": "{@0} der Zahl {@1} steht in der Zahlenreihe die Zahl {@2}.",
  "Červená stuha meria {@0} cm, modrá {@1} cm. O koľko centimetrov je červená stuha dlhšia?": "Das rote Band ist {@0} cm lang, das blaue {@1} cm. Um wie viele Zentimeter ist das rote Band länger?",
  "Číselný rad od 0 do 20": "Zahlenreihe von 0 bis 20",
  "Čísla nesčítavaj. Hľadáš, koľko chýba od {@0} do {@1}.": "Addiere die Zahlen nicht. Du suchst, wie viel von {@0} bis {@1} fehlt.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby si dostal {@1}.": "Addiere die Zahlen nicht. Du suchst, wie viel du zu {@0} dazugeben musst, um {@1} zu bekommen.",
  "Čísla nesčítavaj. Pýtame sa, o koľko má jedno dieťa viac – odčítaj menšie číslo od väčšieho.": "Addiere die Zahlen nicht. Wir fragen, um wie viel ein Kind mehr hat – ziehe die kleinere Zahl von der größeren ab.",
  "Čísla sú rovnaké, preto ${@0} = {@1}$.": "Die Zahlen sind gleich, deshalb ${@0} = {@1}$.",
  "Čísla {@0} vždy o 1: {@1}.": "Die Zahlen {@0} immer um 1: {@1}.",
  "Číslo rozdeľ na desiatky a jednotky, napríklad $14 = 10 + 4$.": "Zerlege die Zahl in Zehner und Einer, zum Beispiel $14 = 10 + 4$.",
  "Číslo {@0} leží na číselnom rade ďalej vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "Die Zahl {@0} liegt in der Zahlenreihe weiter rechts, sie ist größer. Deshalb ${@1} {@2} {@3}$.",
  "Štvorec má 4 rovnako dlhé strany.": "Ein Quadrat hat 4 gleich lange Seiten.",
  "Štvorec má všetky štyri strany rovnako dlhé. Tu sú dve strany dlhšie.": "Beim Quadrat sind alle vier Seiten gleich lang. Hier sind zwei Seiten länger.",
  "štvorec": "Quadrat",
  "žaba": "Frosch",
  "žabou": "dem Frosch",
  "žaby": "dem Frosch",
  "„O {@0} viac“ znamená pridať {@1}: ${@2} + {@3} = {@4}$. {@5} má {@6} {@7}.": "„{@0} mehr“ bedeutet {@1} dazugeben: ${@2} + {@3} = {@4}$. {@5} hat {@6} {@7}.",
  "„O {@0} viac“ znamená, že {@1} má viac ako {@2}. Treba pripočítať, nie odčítať.": "„{@0} mehr“ bedeutet, dass {@1} mehr hat als {@2}. Du musst addieren, nicht subtrahieren.",
  "„O … viac“ znamená k číslu pripočítať.": "„… mehr“ bedeutet, zur Zahl etwas dazuzuzählen."
 }
});
