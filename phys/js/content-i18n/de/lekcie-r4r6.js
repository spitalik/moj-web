/* Deutsch: Lektionen der Klassen 4–6 (js/rocniky/r4.js, r5.js, r6.js). Struktur und Schlüssel: js/content-i18n.js. */
CONTENT_I18N.add('de', {
  lessons: {
    'r4-svetlo-tien': {
      title: 'Licht, Schatten und Lichtquellen',
      summary: 'Du unterscheidest eine Lichtquelle von einem beleuchteten Gegenstand und erklärst, wie ein Schatten entsteht.',
      theory: [
        `<p>Licht breitet sich geradlinig aus. Ein Körper, der selbst Licht aussendet, ist eine <strong>Lichtquelle</strong>, zum Beispiel die Sonne, eine Glühlampe oder eine Kerze.
       Der Mond, ein Tisch oder ein Buch senden kein Licht aus. Sie reflektieren es nur, und deshalb können wir sie sehen.</p>`,
        `<p>Trifft Licht auf einen <strong>undurchsichtigen</strong> Körper, entsteht hinter ihm ein <strong>Schatten</strong>. Das Licht gelangt nicht hinter den Körper,
       weil es sich nicht um ihn herumbiegen kann.</p>`,
        `<ul>
         <li>Undurchsichtige Körper, zum Beispiel Holz oder Stein, halten das Licht auf und werfen einen dunklen Schatten.</li>
         <li>Durchsichtige Körper, zum Beispiel klares Glas oder Wasser, lassen das Licht hindurch. Der Schatten dahinter ist schwach oder fehlt.</li>
       </ul>`,
        `<p>Die Größe des Schattens hängt von der Entfernung ab. Nähert sich der Körper der Lichtquelle, wird der Schatten größer.
       Entfernt er sich von der Quelle, wird der Schatten kleiner.</p>`,
        { fig: 'obr-tien', caption: 'Ein Schatten entsteht dort, wo das Licht nicht hinkommt, weil ein undurchsichtiger Körper es blockiert.' }
      ],
      examples: [
        { task: 'Welcher Gegenstand ist eine Lichtquelle: eine Kerze, ein Buch oder ein Baum?',
          steps: ['Eine Lichtquelle sendet Licht aus. Ein Buch und ein Baum reflektieren das Licht nur.', 'Eine Kerze brennt und sendet Licht aus.', '<strong>Ergebnis: die Kerze</strong>'] },
        { task: 'Warum entsteht an einem sonnigen Tag hinter einem Baum ein Schatten?',
          steps: ['Die Sonne ist eine Lichtquelle.', 'Der Baum ist undurchsichtig, das Licht kann nicht durch ihn hindurch.', '<strong>Ergebnis: Das Licht gelangt nicht hinter den Baum, deshalb entsteht dort ein Schatten.</strong>'] }
      ]
    },
    'r4-zvuk': {
      title: 'Schall und seine Entstehung',
      summary: 'Du erklärst, dass Schall durch schwingende Körper entsteht, und unterscheidest Tonhöhe und Lautstärke.',
      theory: [
        `<p>Schall entsteht durch <strong>Schwingung</strong>, also durch das Hin- und Herbewegen eines Körpers. Wenn wir gegen eine Stimmgabel schlagen oder eine gespannte Gitarrensaite zupfen,
       schwingt der Körper schnell und bringt die umgebende Luft in Bewegung.</p>`,
        `<p>Die Schwingung erreicht uns durch die Luft als <strong>Schallwelle</strong>. Schall braucht ein materielles Medium, zum Beispiel Luft, Wasser oder einen festen Stoff.
       Im Vakuum breitet er sich nicht aus, deshalb sind Explosionen im Weltraum nicht zu hören.</p>`,
        `<ul>
         <li><strong>Die Tonhöhe</strong> hängt von der Schwingungsgeschwindigkeit ab. Schnellere Schwingung klingt höher.</li>
         <li><strong>Die Lautstärke</strong> hängt von der Größe der Schwingungen ab. Ein größerer Ausschlag klingt lauter.</li>
       </ul>`,
        `<p>In Luft breitet sich Schall etwa mit $340\\,\\text{m/s}$ aus. Licht breitet sich viel schneller aus, fast augenblicklich.
       Deshalb sehen wir bei einem Gewitter zuerst den Blitz und hören erst danach den Donner.</p>`,
        { fig: 'r1r5-zvuk-vlna', caption: 'Ein höherer Ton hat eine schnellere Schwingung (eine kürzere Periode). Ein lauterer Schall hat einen größeren Ausschlag, also eine größere Amplitude.' }
      ],
      examples: [
        { task: 'Warum sehen wir bei einem Gewitter zuerst den Blitz und hören erst danach den Donner?',
          steps: ['Licht breitet sich fast augenblicklich aus.', 'Schall breitet sich in der Luft viel langsamer aus.', '<strong>Ergebnis: Der Schall erreicht uns später als das Licht.</strong>'] },
        { task: 'Was muss ein Körper tun, damit er einen Ton abgibt?',
          steps: ['Schall entsteht durch die Schwingung eines Körpers.', '<strong>Ergebnis: Der Körper muss schwingen.</strong>'] }
      ]
    },
    'r4-magnety': {
      title: 'Magnetische Eigenschaften von Gegenständen',
      summary: 'Du unterscheidest Gegenstände, die ein Magnet anzieht, von solchen, die er nicht anzieht.',
      theory: [
        `<p>Ein Magnet <strong>zieht</strong> Gegenstände aus Eisen, Nickel und Kobalt an, zum Beispiel einen Nagel oder eine Büroklammer aus Stahl. Solche Metalle nennen wir magnetisch.
       Holz, Kunststoff, Glas und die meisten anderen Metalle, zum Beispiel Kupfer, zieht ein Magnet nicht an.</p>`,
        `<p>Jeder Magnet hat zwei <strong>Pole</strong>: einen Nordpol und einen Südpol. Ungleiche Pole ziehen sich an, gleiche stoßen sich ab.</p>`,
        `<p>Die magnetische Wirkung geht auch durch Papier oder eine dünne Kunststoffschicht hindurch. Deshalb kann ein Magnet einen Nagel anziehen, der unter einem Blatt Papier liegt.</p>`,
        `<p>Eine Eigenschaft eines Gegenstands finden wir mit einem einfachen Versuch heraus: Wir nähern einen Magneten und beobachten, ob sich der Gegenstand bewegt.</p>`,
        { fig: 'obr-magnet', caption: 'Die Feldlinien eines Stabmagneten verlassen den Nordpol N und treten in den Südpol S ein.' }
      ],
      examples: [
        { task: 'Welche Gegenstände zieht ein Magnet an: einen Nagel, einen Radiergummi und ein Plastiklineal?',
          steps: ['Der Nagel ist aus Eisen, der Magnet zieht ihn an.', 'Radiergummi und Plastiklineal zieht ein Magnet nicht an.', '<strong>Ergebnis: nur der Nagel.</strong>'] },
        { task: 'Zwei Magnete werden mit ungleichen Polen einander zugewandt. Was passiert?',
          steps: ['Ungleiche Pole ziehen sich an.', '<strong>Ergebnis: Die Magnete ziehen sich gegenseitig an.</strong>'] }
      ]
    },
    'r4-elektricke-zariadenia': {
      title: 'Einfache elektrische Geräte',
      summary: 'Du kennst die Teile eines einfachen Stromkreises und weißt, was jedes davon tut.',
      theory: [
        `<p>Ein einfacher Stromkreis besteht aus einer <strong>Quelle</strong> (Batterie), einem <strong>Verbraucher</strong> (Glühlampe, Klingel, Ventilator),
       <strong>Leitern</strong> (meist Kupferdrähten) und einem <strong>Schalter</strong>.</p>`,
        `<ul>
         <li>Die Quelle liefert elektrische Energie.</li>
         <li>Der Verbraucher wandelt elektrische Energie in eine andere Form um, zum Beispiel in Licht, Wärme oder Bewegung.</li>
         <li>Der Schalter schließt oder öffnet den Stromkreis.</li>
       </ul>`,
        `<p>Elektrischer Strom fließt nur in einem <strong>geschlossenen</strong> Stromkreis. Ist der Stromkreis unterbrochen, zum Beispiel durch einen geöffneten Schalter, leuchtet die Glühlampe nicht.</p>`,
        `<p>Leiter lassen elektrischen Strom durch, zum Beispiel Metalle. Isolatoren, zum Beispiel Kunststoff oder Gummi, lassen den Strom nicht durch. Deshalb haben Drähte eine Kunststoffhülle und die Griffe von Werkzeugen bestehen aus Gummi.</p>`,
        { fig: 'r1r5-obvod-spinac', caption: 'Ist der Schalter geöffnet, ist der Stromkreis unterbrochen, es fließt kein Strom und die Glühlampe leuchtet nicht.' }
      ],
      examples: [
        { task: 'Welcher Teil des Stromkreises liefert Energie?',
          steps: ['Die Quelle liefert elektrische Energie, der Verbraucher verbraucht sie.', '<strong>Ergebnis: die Batterie (die Quelle).</strong>'] },
        { task: 'Warum leuchtet die Glühlampe nicht, nachdem der Schalter ausgeschaltet wurde?',
          steps: ['Der geöffnete Schalter unterbricht den Stromkreis.', 'In einem unterbrochenen Stromkreis fließt kein Strom.', '<strong>Ergebnis: Die Glühlampe leuchtet nicht, weil kein Strom fließt.</strong>'] }
      ]
    },
    'r4-energia': {
      title: 'Energie und ihre Nutzung',
      summary: 'Du erkennst, in welche andere Energieform sich die Energie in alltäglichen Geräten umwandelt.',
      theory: [
        `<p><strong>Energie</strong> kann weder aus dem Nichts erzeugt noch vernichtet werden. Sie wandelt sich nur von einer Form in eine andere um. Die Einheit der Energie ist das Joule, Zeichen $\\text{J}$.</p>`,
        `<ul>
         <li><strong>Elektrische</strong> Energie: Steckdose, Batterie, Ladegerät.</li>
         <li><strong>Chemische</strong> Energie: in einer Batterie oder in Nahrungsmitteln gespeichert.</li>
         <li><strong>Bewegungsenergie</strong>: ein laufender Mensch, ein sich drehender Ventilator.</li>
         <li><strong>Lichtenergie</strong>: Sonne, Glühlampe, Display.</li>
         <li><strong>Wärmeenergie</strong>: heißes Wasser, ein warmer Heizkörper.</li>
         <li><strong>Schallenergie</strong>: Musik aus einem Lautsprecher, eine Stimme.</li>
       </ul>`,
        `<p>Geräte wandeln Energie meist nicht nur in eine Form um. Eine Glühlampe gibt Licht ab, aber der größte Teil ihrer Energie wird zu Wärme. Deshalb ist sie nach dem Einschalten heiß.</p>`,
        `<p>Ein Ventilator wandelt elektrische Energie in die Bewegung seiner Flügel um. Ein Lautsprecher wandelt elektrische Energie in Schall um.</p>`,
        { fig: 'r1r5-premeny-energie', caption: 'Ein Ventilator wandelt elektrische Energie in Bewegung um, eine Glühlampe in Licht und Wärme.' }
      ],
      examples: [
        { task: 'Welche Energieumwandlung findet beim elektrischen Ventilator statt?',
          steps: ['Der Ventilator ist ein Verbraucher elektrischer Energie.', 'Der Motor dreht sich und die Flügel bewegen sich.', '<strong>Ergebnis: Elektrische Energie wird in Bewegungsenergie umgewandelt.</strong>'] },
        { task: 'Welche Energieumwandlung findet bei einer Glühlampe statt?',
          steps: ['Die Glühlampe erhält elektrische Energie.', 'Sie sendet Licht aus und wird gleichzeitig warm.', '<strong>Ergebnis: Elektrische Energie wird in Licht- und Wärmeenergie umgewandelt.</strong>'] }
      ]
    },
    'r4-bezpecnost': {
      title: 'Sicheres Verhalten bei elektrischen Geräten',
      summary: 'Du weißt, welches Verhalten bei elektrischen Geräten sicher ist und welches nicht.',
      theory: [
        `<p>Elektrizität ist nützlich, kann aber gefährlich sein. Strom, der durch den Körper fließt, kann schwere Verletzungen verursachen.
       Deshalb sollst du elektrische Geräte nur nach Anweisung von Erwachsenen benutzen.</p>`,
        `<ol>
         <li>Berühre niemals eine Steckdose oder einen Stecker mit nassen Händen.</li>
         <li>Ziehe ein Gerät ab, indem du den Stecker anfasst, nicht die Schnur.</li>
         <li>Ist die Schnur beschädigt oder liegen Drähte frei, benutze das Gerät nicht und sag es einem Erwachsenen.</li>
       </ol>`,
        `<p>Wasser leitet elektrischen Strom sehr gut, deshalb ist die Verbindung von Wasser und elektrischen Geräten sehr gefährlich.
       Föhn, Ladegerät oder ein anderes Gerät nicht im Badezimmer oder in der Nähe von Wasser benutzen.</p>`,
        `<p>Siehst du jemanden, der ein Kabel unter Strom berührt, fass ihn nicht an. Ruf zuerst einen Erwachsenen oder den Rettungsdienst,
       damit der Strom abgeschaltet wird.</p>`
      ],
      examples: [
        { task: 'Wie ziehst du ein Bügeleisen richtig aus der Steckdose?',
          steps: ['Am Kabel zu ziehen kann die Drähte beschädigen.', 'Richtig ist, den Stecker zu fassen und ihn herauszuziehen.', '<strong>Ergebnis: Wir ziehen am Stecker, nicht am Kabel.</strong>'] },
        { task: 'Darfst du ein Handy in einem feuchten Badezimmer aufladen?',
          steps: ['Wasser leitet elektrischen Strom gut.', '<strong>Ergebnis: Nein, bei Feuchtigkeit ist Aufladen nicht sicher.</strong>'] }
      ]
    },
    'r5-vlastnosti-latok': {
      title: 'Eigenschaften von Stoffen und Körpern',
      summary: 'Du unterscheidest einen Stoff von einem Körper und kennst die grundlegenden Eigenschaften von Materialien.',
      theory: [
        `<p>Ein <strong>Stoff</strong> ist ein Material, aus dem etwas hergestellt ist, zum Beispiel Holz, Eisen oder Wasser.
       Ein <strong>Körper</strong> ist ein bestimmter Gegenstand aus einem oder mehreren Stoffen, zum Beispiel ein Tisch, ein Schlüssel oder eine Flasche.</p>`,
        `<p>Die Eigenschaften von Stoffen stellen wir durch Beobachten und Messen fest: Farbe, Glanz, Härte, Elastizität, Löslichkeit in Wasser oder ob sie Wärme und elektrischen Strom leiten.</p>`,
        `<ul>
         <li><strong>Härte</strong>: Widerstand gegen Verkratzen.</li>
         <li><strong>Elastizität</strong>: die Fähigkeit, nach dem Drücken oder Biegen in die ursprüngliche Form zurückzukehren.</li>
         <li><strong>Löslichkeit</strong>: die Fähigkeit, sich in Wasser aufzulösen. Salz löst sich, Sand nicht.</li>
       </ul>`,
        `<p>Körper aus demselben Stoff können unterschiedliche Form und Größe haben. Die Eigenschaften des Stoffes ändern sich jedoch nicht: Zwei Stücke Holz haben die gleichen Eigenschaften von Holz.</p>`
      ],
      examples: [
        { task: 'Ist ein Schlüssel ein Körper oder ein Stoff?',
          steps: ['Ein Schlüssel ist ein bestimmter Gegenstand.', '<strong>Ergebnis: ein Körper, aus Metall hergestellt.</strong>'] },
        { task: 'Welcher Stoff löst sich in Wasser: Salz oder Sand?',
          steps: ['Salz löst sich in Wasser.', 'Sand löst sich in Wasser nicht.', '<strong>Ergebnis: Salz.</strong>'] }
      ]
    },
    'r5-skupenstva': {
      title: 'Feste, flüssige und gasförmige Stoffe',
      summary: 'Du vergleichst feste, flüssige und gasförmige Stoffe anhand ihrer Form und ihres Volumens.',
      theory: [
        `<p>Stoffe kommen in drei Grundzuständen vor, den <strong>Aggregatzuständen</strong>: <strong>fest</strong>, <strong>flüssig</strong> und <strong>gasförmig</strong>.
       Wir unterscheiden sie danach, ob sie eine feste Form und ein festes Volumen haben.</p>`,
        `<ul>
         <li><strong>Ein fester Stoff</strong>: feste Form und festes Volumen, zum Beispiel ein Stein oder ein Eiswürfel.</li>
         <li><strong>Eine Flüssigkeit</strong>: festes Volumen, aber die Form ändert sich mit dem Gefäß, zum Beispiel Wasser in einem Glas.</li>
         <li><strong>Ein Gas</strong>: weder feste Form noch festes Volumen, es füllt das ganze Gefäß aus, zum Beispiel die Luft in einem Ballon.</li>
       </ul>`,
        `<p>Die Teilchen fester Stoffe liegen dicht beieinander, deshalb lassen sie sich schwer zusammendrücken. Die Teilchen von Gasen sind weit voneinander entfernt, deshalb lassen sich Gase zusammendrücken.</p>`,
        `<p><strong>Versuch:</strong> Gieße Wasser in ein hohes und dann in ein breites Glas. Das Wasser nimmt immer die Form des Gefäßes an, aber sein Volumen ändert sich nicht.</p>`,
        { fig: 'r1r5-castice-skupenstva', caption: 'Bei festen Stoffen sind die Teilchen fest angeordnet, bei Flüssigkeiten liegen sie dicht beieinander, aber ungeordnet, und bei Gasen liegen sie weit voneinander entfernt.' }
      ],
      examples: [
        { task: 'Welche Eigenschaften hat Wasser in einem Glas?',
          steps: ['Wasser ist eine Flüssigkeit, es nimmt die Form des Gefäßes an.', 'Sein Volumen ändert sich nicht.', '<strong>Ergebnis: festes Volumen, wechselnde Form.</strong>'] },
        { task: 'Warum lässt sich Luft in einen Fußball pressen?',
          steps: ['Die Teilchen eines Gases sind weit voneinander entfernt.', '<strong>Ergebnis: Beim Zusammendrücken kommen die Teilchen näher zusammen.</strong>'] }
      ]
    },
    'r5-telesa': {
      title: 'Körper und ihre Eigenschaften',
      summary: 'Du erklärst, woraus Körper bestehen, und wählst einen Stoff, der für einen bestimmten Zweck geeignet ist.',
      theory: [
        `<p>Ein Körper ist ein aus Stoffen hergestellter Gegenstand. Viele Körper bestehen aus mehreren Stoffen. Eine Schere hat metallische Klingen und Griffe aus Kunststoff.</p>`,
        `<p>Bei der Herstellung von Gegenständen wählen wir den Stoff danach, was wir vom Gegenstand erwarten. Soll der Gegenstand durchsichtig sein, wählen wir Glas.
       Soll er sich nicht leicht erwärmen, wählen wir einen Stoff, der Wärme schlecht leitet.</p>`,
        `<ul>
         <li>Metalle leiten Wärme und elektrischen Strom gut, deshalb eignen sie sich für Töpfe und Kabel.</li>
         <li>Kunststoff und Holz leiten Wärme schlecht, deshalb eignen sie sich für Topfgriffe.</li>
       </ul>`,
        `<p>Wenn du einen Körper beurteilst, frag dich immer: Aus welchem Stoff ist er hergestellt und warum gerade aus diesem?</p>`
      ],
      examples: [
        { task: 'Warum bestehen Topfgriffe aus Kunststoff oder Holz?',
          steps: ['Kunststoff und Holz leiten Wärme schlecht.', '<strong>Ergebnis: Der Griff erwärmt sich nicht so schnell wie Metall und lässt sich deshalb gut halten.</strong>'] },
        { task: 'Ist ein Glas ein Körper oder ein Stoff?',
          steps: ['Ein Glas ist ein bestimmter Gegenstand.', '<strong>Ergebnis: ein Körper.</strong>'] }
      ]
    },
    'r5-hustota': {
      title: 'Masse, Volumen und Dichte – Grundbegriffe',
      summary: 'Du unterscheidest Masse und Volumen und berechnest die Dichte eines Stoffes.',
      theory: [
        `<p><strong>Masse</strong> $m$ gibt an, wie viel Stoff ein Körper enthält. Ihre Einheit ist das Gramm $\\text{g}$ oder das Kilogramm $\\text{kg}$. Die Masse messen wir mit einer Waage.</p>`,
        `<p><strong>Volumen</strong> $V$ ist der Raum, den ein Körper einnimmt. Die Einheiten sind zum Beispiel $\\text{cm}^3$ oder Milliliter, wobei $1\\,\\text{ml}=1\\,\\text{cm}^3$.
       Das Volumen einer Flüssigkeit messen wir mit einem Messzylinder.</p>`,
        `<p><strong>Dichte</strong> $\\rho$ gibt an, welche Masse ein $\\text{cm}^3$ eines Stoffes hat. Wir berechnen sie als Quotient: $\\rho = \\frac{m}{V}$.
       Die Dichte ist eine Eigenschaft des Stoffes, nicht des Körpers. Wasser hat eine Dichte von etwa $1\\,\\text{g/cm}^3$.</p>`,
        `<ul>
         <li>Ein Körper mit größerer Dichte als Wasser sinkt unter, zum Beispiel ein Stein.</li>
         <li>Ein Körper mit kleinerer Dichte als Wasser schwimmt, zum Beispiel Holz.</li>
       </ul>`,
        { fig: 'r1r5-hustota-voda', caption: 'Ein Körper mit größerer Dichte als Wasser sinkt unter (Stein), ein Körper mit kleinerer Dichte schwimmt (Holz).' }
      ],
      examples: [
        { task: 'Ein Würfel hat eine Masse von $48\\,\\text{g}$ und ein Volumen von $16\\,\\text{cm}^3$. Wie groß ist seine Dichte?',
          steps: ['$\\rho=\\frac{m}{V}=\\frac{48}{16}$', '<strong>Ergebnis: $3\\,\\text{g/cm}^3$</strong>'] },
        { task: 'Ein Stoff hat die Dichte $2\\,\\text{g/cm}^3$, und ein Körper aus ihm hat ein Volumen von $10\\,\\text{cm}^3$. Wie groß ist seine Masse?',
          steps: ['$m=\\rho\\cdot V=2\\cdot 10$', '<strong>Ergebnis: $20\\,\\text{g}$</strong>'] }
      ]
    },
    'r5-merania': {
      title: 'Messen von Länge, Volumen und Masse',
      summary: 'Du liest das Messergebnis richtig ab und berechnest die Differenz zweier gemessener Werte.',
      theory: [
        `<p>Die Länge messen wir mit einem Lineal oder einem Maßband. Den Nullpunkt der Skala legen wir genau an den Anfang des Körpers und lesen das Ende ab.
       Ein häufiger Fehler ist, bei der Zahl 1 statt bei null zu beginnen.</p>`,
        `<p>Das Volumen einer Flüssigkeit messen wir mit einem Messzylinder. Das Auge bringen wir auf die Höhe der Flüssigkeitsoberfläche und lesen den unteren Rand des Flüssigkeitsspiegels ab, den sogenannten <strong>Meniskus</strong>.
       Schauen wir von oben oder von unten, ist das Ergebnis verfälscht.</p>`,
        `<p>Die Masse messen wir mit einer Waage. Vor dem Wiegen stellen wir die Waage auf null, damit die Masse des Gefäßes nicht mitgerechnet wird.</p>`,
        `<p>Das Volumen eines Körpers, der untergeht, bestimmen wir mit Wasser: Wir lesen den Wasserstand vor dem Eintauchen und nach dem Eintauchen ab. Die Differenz der Wasserstände ist das Volumen des Körpers.</p>`,
        { fig: 'r1r5-hladina', caption: 'Das Volumen eines eingetauchten Körpers ist die Differenz der Wasserstände nach und vor dem Eintauchen.' }
      ],
      examples: [
        { task: 'Ein Stab liegt auf dem Lineal von der Marke 2 cm bis zur Marke 9 cm. Wie lang ist er?',
          steps: ['Die Länge ist die Differenz von Endwert und Anfangswert: $9 - 2$.', '<strong>Ergebnis: 7 cm</strong>'] },
        { task: 'Im Messzylinder sind $50\\,\\text{ml}$ Wasser. Nach dem Eintauchen eines Würfels steigt der Wasserstand auf $72\\,\\text{ml}$. Welches Volumen hat der Würfel?',
          steps: ['Das Volumen des Würfels ist der Anstieg des Wasserstands: $72 - 50$.', '<strong>Ergebnis: $22\\,\\text{ml}$</strong>'] }
      ]
    },
    'r5-jednotky': {
      title: 'Einheiten physikalischer Größen',
      summary: 'Du rechnest Einheiten von Länge, Masse und Volumen um.',
      theory: [
        `<p>Eine physikalische Größe ist das, was wir messen, zum Beispiel Länge, Masse, Zeit oder Temperatur. Jede Größe hat eine <strong>Einheit</strong>,
       mit der wir sie vergleichen. Grundlegende Einheiten des SI-Systems sind zum Beispiel das Meter $\\text{m}$, das Kilogramm $\\text{kg}$ und die Sekunde $\\text{s}$.</p>`,
        `<ul>
         <li>Länge: $1\\,\\text{km}=1000\\,\\text{m}$, $1\\,\\text{m}=100\\,\\text{cm}$, $1\\,\\text{cm}=10\\,\\text{mm}$.</li>
         <li>Masse: $1\\,\\text{kg}=1000\\,\\text{g}$, $1\\,\\text{t}=1000\\,\\text{kg}$.</li>
         <li>Volumen: $1\\,\\text{l}=1000\\,\\text{ml}$, $1\\,\\text{dm}^3=1\\,\\text{l}$.</li>
       </ul>`,
        `<p>Die Umrechnung in eine <strong>kleinere</strong> Einheit ergibt eine größere Zahl, deshalb multiplizieren wir: $2\\,\\text{km}=2000\\,\\text{m}$.
       Die Umrechnung in eine <strong>größere</strong> Einheit ergibt eine kleinere Zahl, deshalb dividieren wir: $300\\,\\text{cm}=3\\,\\text{m}$.</p>`,
        `<p>Achtung auf einen häufigen Fehler: $1\\,\\text{m}$ ist nicht $10\\,\\text{cm}$, sondern $100\\,\\text{cm}$.</p>`
      ],
      examples: [
        { task: 'Rechne $3{,}5\\,\\text{m}$ in Zentimeter um.',
          steps: ['Ein Meter hat 100 cm. Bei der Umrechnung in die kleinere Einheit multiplizieren wir die Zahl.', '$3{,}5\\cdot 100=350$', '<strong>Ergebnis: 350 cm</strong>'] },
        { task: 'Rechne $4\\,500\\,\\text{g}$ in Kilogramm um.',
          steps: ['Ein Kilogramm hat 1000 g. Bei der Umrechnung in die größere Einheit dividieren wir die Zahl.', '$4500 : 1000=4{,}5$', '<strong>Ergebnis: $4{,}5\\,\\text{kg}$</strong>'] }
      ]
    },
    'r5-teplota': {
      title: 'Temperatur und ihre Messung',
      summary: 'Du liest die Temperatur in Grad Celsius ab und berechnest ihre Änderungen.',
      theory: [
        `<p>Die Temperatur messen wir mit einem <strong>Thermometer</strong>. Auf der Celsius-Skala gibt es zwei feste Punkte: schmelzendes Eis hat die Temperatur $0\\,{}^\\circ\\text{C}$,
       und Wasser siedet bei normalem Druck bei $100\\,{}^\\circ\\text{C}$.</p>`,
        `<ul>
         <li>Das Thermometer enthält eine Flüssigkeit, zum Beispiel Alkohol, die sich beim Erwärmen ausdehnt. An der Länge der Säule lesen wir die Temperatur ab.</li>
         <li>Wir lassen das Thermometer mindestens einige Minuten an seinem Platz, damit es die richtige Temperatur anzeigt.</li>
         <li>Das Thermometer darf den Boden des Gefäßes nicht berühren, sonst würde es die Temperatur des Bodens anzeigen und nicht die der Flüssigkeit.</li>
       </ul>`,
        `<p>Die Temperatur ändert sich. Steigt sie, rechnen wir die Änderung hinzu. Sinkt sie, ziehen wir sie ab. Negative Temperaturen liegen unter null,
       zum Beispiel ist $-5\\,{}^\\circ\\text{C}$ um 5 Grad kälter als schmelzendes Eis.</p>`,
        { fig: 'r1r5-teplomer', caption: 'Die Celsius-Skala hat zwei feste Punkte: schmelzendes Eis bei 0 °C und siedendes Wasser bei 100 °C. Negative Temperaturen liegen unter null.' }
      ],
      examples: [
        { task: 'Morgens waren es $-4\\,{}^\\circ\\text{C}$, und mittags stieg die Temperatur um $9\\,{}^\\circ\\text{C}$. Wie hoch ist die Temperatur mittags?',
          steps: ['$-4+9=5$', '<strong>Ergebnis: $5\\,{}^\\circ\\text{C}$</strong>'] },
        { task: 'Wasser hatte $20\\,{}^\\circ\\text{C}$ und wurde auf $100\\,{}^\\circ\\text{C}$ erwärmt. Um wie viele Grad wurde es erwärmt?',
          steps: ['$100-20=80$', '<strong>Ergebnis: um $80\\,{}^\\circ\\text{C}$</strong>'] }
      ]
    },
    'r5-pozorovanie': {
      title: 'Beobachten, Messen und einfache Versuche',
      summary: 'Du planst einen einfachen Versuch, notierst die Ergebnisse und ziehst eine Schlussfolgerung.',
      theory: [
        `<p>Beim Untersuchen gehen wir Schritt für Schritt vor: Wir beobachten, stellen eine Frage, formulieren eine <strong>Hypothese</strong>, führen den Versuch durch,
       notieren die Ergebnisse und formulieren eine Schlussfolgerung. Eine Hypothese ist eine überprüfbare Annahme, keine fertige Schlussfolgerung.</p>`,
        `<ol>
         <li>Lege fest, was du herausfinden willst.</li>
         <li>Ändere bei einem Versuch immer nur eine Sache gleichzeitig.</li>
         <li>Schreibe die Ergebnisse sofort in eine Tabelle.</li>
         <li>Wiederhole den Versuch, damit sich die Ergebnisse vergleichen lassen.</li>
       </ol>`,
        `<p>Die Größe, die wir ändern, heißt <strong>Variable</strong>. Dinge, die wir gleich lassen, werden kontrolliert. Ändern wir mehrere Dinge gleichzeitig, können wir nicht bestimmen, was das Ergebnis verursacht hat.</p>`,
        `<p>Gemessene Werte schreiben wir immer mit Einheit, zum Beispiel $25\\,\\text{cm}$, nicht nur $25$.</p>`
      ],
      examples: [
        { task: 'Du willst herausfinden, ob sich Salz in warmem Wasser schneller löst als in kaltem. Was ist die Variable?',
          steps: ['Wir ändern die Temperatur des Wassers.', 'Die Menge des Salzes und des Wassers lassen wir gleich.', '<strong>Ergebnis: Die Variable ist die Wassertemperatur.</strong>'] },
        { task: 'Wie kann man die Genauigkeit einer Messung erhöhen?',
          steps: ['Wir wiederholen den Versuch mehrmals.', 'Wir bilden den Durchschnitt der Ergebnisse.', '<strong>Ergebnis: Wir wiederholen den Versuch und bilden den Durchschnitt der Ergebnisse.</strong>'] }
      ]
    },
    'r6-hustota': {
      title: 'Dichte von Stoffen und ihre Berechnung',
      summary: 'Was die Dichte aussagt und wie wir sie aus Masse und Volumen berechnen.',
      theory: [
        `<p>Zwei Körper gleicher Größe können eine sehr unterschiedliche Masse haben. Eine Bleikugel ist viel schwerer als eine Holzkugel mit gleichem Volumen.
       Den Unterschied verursachen nicht Form oder Größe, sondern der <strong>Stoff</strong>, aus dem der Körper besteht. Diese Eigenschaft des Stoffes beschreibt die <strong>Dichte</strong>.</p>`,
        `<p><strong>Die Dichte</strong> zeigt, welche Masse eine Volumeneinheit des jeweiligen Stoffes hat. Sie wird mit $\\rho$ (rho) bezeichnet und nach der Formel
       $\\rho = \\frac{m}{V}$ berechnet, wobei $m$ die Masse und $V$ das Volumen ist. Die Masse wird also durch das Volumen geteilt.</p>`,
        `<ul>
         <li>Einheiten: $\\text{g/cm}^3$ (in der Praxis) und $\\text{kg/m}^3$ (im SI-System).</li>
         <li>Umrechnung: $1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$, denn $1\\,\\text{g}=0{,}001\\,\\text{kg}$ und $1\\,\\text{cm}^3=0{,}000001\\,\\text{m}^3$.</li>
       </ul>`,
        `<p>Die Dichte ist eine Eigenschaft des Stoffes, nicht des Körpers. Alle Stücke desselben Stoffes haben dieselbe Dichte, egal ob groß oder klein.
       Sie hilft, ähnlich aussehende Stoffe zu unterscheiden, und erklärt später, warum manche Körper schwimmen und andere sinken.</p>`,
        `<p>Richtwerte: Wasser $1\\,\\text{g/cm}^3$, Öl etwa $0{,}9\\,\\text{g/cm}^3$, Aluminium $2{,}7\\,\\text{g/cm}^3$, Eisen $7{,}8\\,\\text{g/cm}^3$.
       Holz ist leichter als Wasser, zum Beispiel hat Kiefernholz etwa $0{,}5\\,\\text{g/cm}^3$.</p>`,
        { fig: 'r6r9-hustota', caption: 'Die Dichte zeigt, welche Masse eine Volumeneinheit des Stoffes hat. Bei gleichem Volumen ist Eisen viel schwerer als Wasser.' }
      ],
      examples: [
        { task: 'Ein Quader aus Aluminium hat eine Masse von $135\\,\\text{g}$ und ein Volumen von $50\\,\\text{cm}^3$. Berechne seine Dichte.',
          steps: ['Wir verwenden die Formel $\\rho = \\frac{m}{V}$.', '$\\rho = \\frac{135}{50} = 2{,}7\\,\\text{g/cm}^3$', '<strong>Ergebnis: 2,7 g/cm³</strong>'] },
        { task: 'Welche Masse hat $200\\,\\text{cm}^3$ Wasser? Die Dichte von Wasser ist $1\\,\\text{g/cm}^3$.',
          steps: ['Aus der Formel $\\rho = \\frac{m}{V}$ erhalten wir $m = \\rho\\cdot V$.', '$m = 1\\,\\text{g/cm}^3\\cdot 200\\,\\text{cm}^3 = 200\\,\\text{g}$', '<strong>Ergebnis: 200 g</strong>'] }
      ]
    },
    'r6-vlastnosti': {
      title: 'Eigenschaften von Flüssigkeiten und Gasen',
      summary: 'Wie sich Flüssigkeiten und Gase in Form, Volumen und Zusammendrückbarkeit unterscheiden.',
      theory: [
        `<p>Stoffe kommen in drei Aggregatzuständen vor: fest, flüssig und gasförmig. Feste Körper haben eine feste Form und ein festes Volumen.
       <strong>Flüssigkeiten</strong> haben ein festes Volumen, passen ihre Form aber dem Gefäß an. <strong>Gase</strong> haben weder eine feste Form noch ein festes Volumen: Sie breiten sich aus und füllen das ganze Gefäß.</p>`,
        `<p>Warum ist das so? Die Teilchen einer Flüssigkeit liegen dicht beieinander und halten zusammen, können sich aber gegeneinander verschieben, deshalb fließt die Flüssigkeit.
       Die Teilchen eines Gases sind weit voneinander entfernt und bewegen sich frei, deshalb verteilen sie sich im gesamten verfügbaren Raum.</p>`,
        `<p><strong>Zusammendrückbarkeit:</strong> Flüssigkeiten lassen sich praktisch nicht zusammendrücken, weil ihre Teilchen schon dicht beieinander liegen. Gase lassen sich zusammendrücken,
       weil es zwischen den Teilchen viel freien Raum gibt. Die Luft in einer Fahrradpumpe lässt sich deshalb zusammendrücken, Wasser in einem geschlossenen Gefäß dagegen nicht.</p>`,
        `<ul>
         <li><strong>Form:</strong> Eine Flüssigkeit passt sich dem Gefäß an, ein Gas füllt das ganze Gefäß aus.</li>
         <li><strong>Volumen:</strong> Eine Flüssigkeit hat ein festes Volumen, das Volumen eines Gases entspricht dem Volumen des Gefäßes.</li>
         <li><strong>Zusammendrückbarkeit:</strong> Eine Flüssigkeit ist praktisch nicht zusammendrückbar, ein Gas lässt sich zusammendrücken.</li>
       </ul>`,
        `<p>Flüssigkeiten und Gase werden zusammen als <strong>Fluide</strong> bezeichnet. Fluide lassen sich umfüllen und strömen, deshalb beobachten wir an ihnen Druck und Auftrieb.</p>`,
        { fig: 'r6r9-castice', caption: 'Die Teilchen eines festen Stoffes sind an ihren Plätzen, die einer Flüssigkeit halten zusammen und gleiten aneinander vorbei, die eines Gases bewegen sich frei.' }
      ],
      examples: [
        { task: 'Erkläre, warum sich die Luft in einer Spritze zusammendrücken lässt, Wasser dagegen nicht.',
          steps: ['Die Teilchen der Luft liegen weit voneinander entfernt, zwischen ihnen ist freier Raum.', 'Die Teilchen des Wassers liegen dicht beieinander, es gibt keinen Platz, in den man sie drücken könnte.', '<strong>Ergebnis: Luft ist zusammendrückbar, Wasser fast nicht.</strong>'] },
        { task: 'Ein Liter Wasser wird aus einem breiten Gefäß in ein hohes, schmales Glas umgegossen. Welches Volumen hat das Wasser jetzt?',
          steps: ['Wasser passt seine Form dem Gefäß an.', 'Das Volumen einer Flüssigkeit ändert sich beim Umgießen nicht.', '<strong>Ergebnis: immer noch 1 Liter.</strong>'] }
      ]
    },
    'r6-tlak': {
      title: 'Druck in Flüssigkeiten und Gasen',
      summary: 'Druck als Kraft pro Fläche und Druck in einer Flüssigkeit, der mit der Tiefe zunimmt.',
      theory: [
        `<p><strong>Druck</strong> ist die Kraft, die senkrecht auf eine Fläche wirkt, bezogen auf eine Flächeneinheit. Formel: $p=\\frac{F}{S}$, wobei $F$ die Kraft in Newton
       und $S$ der Flächeninhalt in $\\text{m}^2$ ist. Die Einheit des Drucks ist das Pascal: $1\\,\\text{Pa}=1\\,\\text{N/m}^2$.</p>`,
        `<p>Dieselbe Kraft erzeugt auf einer kleineren Fläche einen größeren Druck. Deshalb lässt sich ein spitzer Nagel leicht in Holz schlagen, ein stumpfer nicht: An der kleinen Spitze ist der Druck groß.</p>`,
        `<p><strong>Der Druck in einer Flüssigkeit</strong> nimmt mit der Tiefe zu. Je tiefer wir sind, desto mehr Flüssigkeit ist über uns und drückt auf die Schichten darunter.
       Formel: $p=\\rho\\cdot g\\cdot h$, wobei $\\rho$ die Dichte der Flüssigkeit, $h$ die Tiefe unter der Oberfläche und $g\\approx 10\\,\\text{N/kg}$ ist (in der Schule runden wir).</p>`,
        `<p>Eine Flüssigkeit drückt auf die Wände des Gefäßes, auf den Boden und nach oben. Der Druck in einer Flüssigkeit wirkt in allen Richtungen gleich, wenn er in derselben Tiefe gemessen wird.</p>`,
        `<p>Auch ein Gas in einem geschlossenen Gefäß drückt in alle Richtungen auf die Wände. Wenn wir das Gas zusammendrücken, steigt sein Druck.</p>`,
        { fig: 'obr-tlak', caption: 'Der Druck in einer Flüssigkeit steigt mit der Tiefe: je tiefer, desto größer ist die Kraft auf die Wand.' }
      ],
      examples: [
        { task: 'Eine Kraft von $600\\,\\text{N}$ wirkt senkrecht auf eine Fläche von $0{,}5\\,\\text{m}^2$. Welchen Druck erzeugt sie?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$', '$p=1200\\,\\text{Pa}$', '<strong>Ergebnis: 1200 Pa</strong>'] },
        { task: 'Wie groß ist der Druck im Wasser in einer Tiefe von $3\\,\\text{m}$? Die Dichte von Wasser ist $1000\\,\\text{kg/m}^3$, $g=10\\,\\text{N/kg}$.',
          steps: ['$p=\\rho\\cdot g\\cdot h$', '$p=1000\\cdot 10\\cdot 3=30\\,000\\,\\text{Pa}$', '<strong>Ergebnis: 30 000 Pa = 30 kPa</strong>'] }
      ]
    },
    'r6-atmosfera': {
      title: 'Atmosphärischer Druck',
      summary: 'Warum uns die Luft drückt und wie sich der Druck mit der Höhe ändert.',
      theory: [
        `<p>Die Luft rund um die Erde hat eine Masse und drückt deshalb auf uns. Dieser Druck heißt <strong>Atmosphärendruck</strong>. Auf Meereshöhe beträgt er etwa $101\\,\\text{kPa}$,
       was ungefähr dem Gewicht von 10 Tonnen Luft über einem Quadratmeter entspricht.</p>`,
        `<p>Meteorologen verwenden das Hektopascal: $1\\,\\text{hPa}=100\\,\\text{Pa}$, also $1\\,\\text{kPa}=10\\,\\text{hPa}$. Der Normaldruck beträgt etwa $1013\\,\\text{hPa}$.
       Den Druck misst man mit einem <strong>Barometer</strong>.</p>`,
        `<p>Warum können wir mit einem Strohhalm trinken? Beim Saugen verringern wir den Druck im Mund. Der Atmosphärendruck wirkt auf die Oberfläche des Getränks und drückt es nach oben in den Strohhalm.
       Das Getränk saugen wir also nicht hoch, es wird von der Luft hochgedrückt.</p>`,
        `<p>Mit wachsender Höhe über dem Meer sinkt der Druck, weil über uns weniger Luft liegt. Deshalb sinkt der Luftdruck auf Bergen, und Wasser siedet bei einer niedrigeren Temperatur.</p>`,
        { fig: 'r6r9-atmosfera', caption: 'Je höher wir steigen, desto weniger Luft ist über uns, deshalb sinkt der Atmosphärendruck.' }
      ],
      examples: [
        { task: 'Ein Barometer zeigt einen Druck von $1013\\,\\text{hPa}$. Wie viele Kilopascal sind das?',
          steps: ['$1\\,\\text{kPa}=10\\,\\text{hPa}$, deshalb teilen wir durch zehn.', '$1013 : 10 = 101{,}3$', '<strong>Ergebnis: 101,3 kPa</strong>'] },
        { task: 'Wie ändert sich der Atmosphärendruck, wenn wir auf einen hohen Berg steigen?',
          steps: ['Über uns ist weniger Luft, die auf uns drückt.', 'Der Luftdruck sinkt also.', '<strong>Ergebnis: Der Druck sinkt.</strong>'] }
      ]
    },
    'r6-vztlak': {
      title: 'Auftriebskraft und Schwimmen von Körpern',
      summary: 'Warum eine Flüssigkeit Körper scheinbar leichter macht und wann ein Körper schwimmt.',
      theory: [
        `<p>Ein Ball, der unter Wasser gedrückt wird, taucht wieder auf. Die Flüssigkeit wirkt auf den eingetauchten Körper mit einer Kraft nach oben. Diese Kraft heißt <strong>Auftriebskraft</strong>.
       Sie entsteht, weil der Druck in der Flüssigkeit mit der Tiefe zunimmt: Die untere Fläche des Körpers wird stärker gedrückt als die obere.</p>`,
        `<p><strong>Archimedisches Prinzip:</strong> Die Auftriebskraft ist gleich der Gewichtskraft der verdrängten Flüssigkeit. Formel: $F_{vz}=\\rho_k\\cdot g\\cdot V_p$,
       wobei $\\rho_k$ die Dichte der Flüssigkeit und $V_p$ das Volumen des eingetauchten Teils des Körpers ist.</p>`,
        `<ul>
         <li>Die Gewichtskraft des Körpers ist größer als der Auftrieb: Der Körper sinkt.</li>
         <li>Gewichtskraft und Auftrieb sind gleich: Der Körper schwebt oder schwimmt eingetaucht.</li>
         <li>Der Auftrieb ist größer als die Gewichtskraft: Der Körper steigt auf und schwimmt an der Oberfläche, nur ein Teil von ihm ist eingetaucht.</li>
       </ul>`,
        `<p>Ein Stahlschiff schwimmt, weil es groß und hohl ist. Seine mittlere Dichte ist kleiner als die Dichte von Wasser, deshalb verdrängt es so viel Wasser, dass dessen Gewichtskraft sein Gewicht tragen kann.</p>`,
        { fig: 'obr-vztlak', caption: 'Der Auftrieb Fvz zeigt nach oben, die Gewichtskraft Fg nach unten. Ein eingetauchter Körper ist um die Gewichtskraft der verdrängten Flüssigkeit leichter.' }
      ],
      examples: [
        { task: 'Ein Würfel mit dem Volumen $1\\,\\text{dm}^3$ ist vollständig in Wasser getaucht. Wasser hat die Dichte $1\\,\\text{kg/dm}^3$. Wie groß ist die Auftriebskraft?',
          steps: ['Das verdrängte Wasser hat die Masse $\\rho\\cdot V = 1\\,\\text{kg}$.', 'Seine Gewichtskraft ist $1\\,\\text{kg}\\cdot 10\\,\\text{N/kg}=10\\,\\text{N}$.', '<strong>Ergebnis: Die Auftriebskraft beträgt 10 N.</strong>'] },
        { task: 'Ein Körper mit der Masse $3\\,\\text{kg}$ schwimmt auf dem Wasser. Wie groß ist die Auftriebskraft?',
          steps: ['Der Körper schwimmt, deshalb ist der Auftrieb gleich der Gewichtskraft.', '$F_{vz}=F_G=m\\cdot g=3\\cdot 10=30\\,\\text{N}$', '<strong>Ergebnis: 30 N</strong>'] }
      ]
    },
    'r6-teplo': {
      title: 'Temperatur, Wärme und Wärmeübertragung',
      summary: 'Der Unterschied zwischen Temperatur und Wärme und die Richtung, in der Wärme fließt.',
      theory: [
        `<p><strong>Temperatur</strong> zeigt, wie warm ein Körper ist. Sie wird in Grad Celsius (°C) gemessen. Je schneller sich die Teilchen eines Stoffes bewegen, desto wärmer ist der Stoff.
       Das Thermometer muss die Temperatur seiner Umgebung annehmen, deshalb zeigt es diese an.</p>`,
        `<p><strong>Wärme</strong> ist Energie, die zwischen Körpern aufgrund eines Temperaturunterschieds übertragen wird. Die Einheit der Wärme ist das Joule (J).
       Wärme fließt immer vom wärmeren zum kälteren Körper, nie umgekehrt. Der Kühlschrank ist eine Ausnahme, denn zum Kühlen braucht er Arbeit.</p>`,
        `<p><strong>Der Wärmeaustausch</strong> dauert so lange, bis sich die Temperaturen der Körper angleichen. Dann herrscht <em>thermisches Gleichgewicht</em>.
       Wärme wird auf drei Arten übertragen: durch <em>Wärmeleitung</em> (ein Metalllöffel im Tee), durch <em>Strömung</em> (Flüssigkeiten und Gase) und durch <em>Strahlung</em> (Wärme von der Sonne).</p>`,
        `<p>Mischen wir gleiche Mengen Wasser mit unterschiedlicher Temperatur und vernachlässigen wir die Wärmeverluste, ist die Endtemperatur das arithmetische Mittel beider Temperaturen.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: 'Wärme fließt von einem wärmeren zu einem kälteren Körper. Sie wird durch Wärmeleitung, Strömung oder Strahlung übertragen.' }
      ],
      examples: [
        { task: 'Wir mischen gleiche Mengen Wasser mit den Temperaturen 80 °C und 20 °C. Wie hoch ist die Endtemperatur?',
          steps: ['Bei gleichen Mengen ist die Endtemperatur der Mittelwert der Temperaturen.', '$\\frac{80+20}{2}=50$', '<strong>Ergebnis: 50 °C</strong>'] },
        { task: 'In welche Richtung fließt Wärme zwischen einer Tasse Tee mit 70 °C und der Luft mit 22 °C?',
          steps: ['Wärme fließt immer vom wärmeren zum kälteren Körper.', 'Der Tee hat die höhere Temperatur, die Wärme geht also vom Tee in die Luft über.', '<strong>Ergebnis: vom Tee in die Umgebung</strong>'] }
      ]
    },
    'r6-skupenstva': {
      title: 'Zustandsänderungen von Stoffen',
      summary: 'Schmelzen, Erstarren, Verdampfen, Kondensieren, Sublimation und ihr Ablauf auf Teilchenebene.',
      theory: [
        `<p>Stoffe kommen in fester, flüssiger und gasförmiger Form vor. Bei einer Zustandsänderung verwandelt sich der Stoff nicht in einen anderen Stoff,
       sondern nur die Anordnung und Bewegung seiner Teilchen ändert sich.</p>`,
        `<ul>
         <li><strong>Schmelzen</strong>: fest zu flüssig (Eis schmilzt zu Wasser).</li>
         <li><strong>Erstarren</strong>: flüssig zu fest (Wasser gefriert).</li>
         <li><strong>Verdampfen</strong>: flüssig zu gasförmig (nasse Wäsche trocknet).</li>
         <li><strong>Kondensieren</strong>: gasförmig zu flüssig (Tau auf dem Gras).</li>
         <li><strong>Sublimieren</strong>: fest direkt zu gasförmig (Trockeneis, Naphthalin).</li>
         <li><strong>Resublimieren</strong>: gasförmig direkt zu fest (Reif im Gefrierfach).</li>
       </ul>`,
        `<p><strong>Warum?</strong> Beim Schmelzen muss der Stoff Energie aufnehmen, damit sich seine Teilchen aus der festen Ordnung lösen können. Beim Erstarren wird dagegen Energie abgegeben.</p>`,
        `<ol>
         <li>Eis mit einer Temperatur von $-5\\,{}^\\circ\\text{C}$ erwärmt sich beim Erhitzen zuerst auf $0\\,{}^\\circ\\text{C}$.</li>
         <li>Bei $0\\,{}^\\circ\\text{C}$ schmilzt es, und seine Temperatur ändert sich dabei nicht, bis es vollständig geschmolzen ist.</li>
         <li>Erst danach erwärmt sich das Wasser weiter.</li>
       </ol>`,
        { fig: 'obr-skupenstva', caption: 'Zustandsänderungen: Schmelzen, Erstarren, Verdampfen und Kondensieren.' }
      ],
      examples: [
        { task: 'Wasser aus dem Gefrierfach wird zu Eis. Wie heißt dieser Vorgang?',
          steps: ['Das Wasser wechselt vom flüssigen in den festen Zustand.', 'Der Übergang vom flüssigen in den festen Zustand heißt Erstarren.', '<strong>Ergebnis: Erstarren</strong>'] },
        { task: 'Reif entsteht auf einer kalten Oberfläche direkt aus Wasserdampf, ohne vorher flüssig zu werden. Wie heißt dieser Vorgang?',
          steps: ['Der Dampf geht direkt in den festen Zustand über.', 'Der Übergang vom gasförmigen in den festen Zustand heißt Resublimation.', '<strong>Ergebnis: Resublimation</strong>'] }
      ]
    },
    'r6-var': {
      title: 'Verdunsten, Kondensieren und Sieden',
      summary: 'Der Unterschied zwischen Verdunsten und Sieden und warum Flüssigkeiten abkühlen.',
      theory: [
        `<p><strong>Verdunsten</strong> findet an der Oberfläche einer Flüssigkeit bei jeder Temperatur statt. Die schnellsten Teilchen entweichen aus der Oberfläche in die Umgebung.
       Verdunsten geht bei höherer Temperatur schneller, bei größerer Oberfläche und bei Wind, der den Dampf wegträgt.</p>`,
        `<p><strong>Verdunsten kühlt ab.</strong> Aus der Flüssigkeit entweichen die schnellsten Teilchen, sodass der Rest eine geringere mittlere Energie hat.
       Deshalb kühlt uns der Wind nach dem Baden ab: Das Wasser verdunstet von der Haut und entzieht ihr Wärme.</p>`,
        `<p><strong>Sieden</strong> ist der Übergang einer Flüssigkeit in ein Gas im gesamten Volumen, nicht nur an der Oberfläche. Es tritt bei einer bestimmten <em>Siedetemperatur</em> auf, die vom Druck abhängt.
       Bei normalem Druck siedet Wasser bei 100 °C. Auf einem hohen Berg ist der Druck niedriger, deshalb siedet Wasser bei einer niedrigeren Temperatur.</p>`,
        `<p><strong>Kondensation</strong> ist der umgekehrte Vorgang: Dampf wird zu Flüssigkeit. Bei der Kondensation wird Wärme an die Umgebung abgegeben,
       deshalb ist eine Verbrühung durch Dampf schlimmer als eine durch kochendes Wasser. Tau, Nebel und Wolken entstehen durch Kondensation von Wasserdampf.</p>`,
        { fig: 'r6r9-var', caption: 'Verdunsten findet nur an der Oberfläche statt, Sieden im gesamten Volumen der Flüssigkeit, wo sich Dampfblasen bilden.' }
      ],
      examples: [
        { task: 'Warum trocknet nasse Wäsche in Sonne und Wind schneller?',
          steps: ['Höhere Temperatur und Wind beschleunigen das Verdunsten.', 'Wasserteilchen aus der Wäsche entweichen leichter in die Luft.', '<strong>Ergebnis: Wärme und Wind beschleunigen das Verdunsten.</strong>'] },
        { task: 'Wasser siedet bei normalem Druck bei 100 °C. Bei welcher Temperatur siedet es auf dem Gipfel eines hohen Berges, wo der Druck niedriger ist?',
          steps: ['Je niedriger der Druck, desto niedriger die Siedetemperatur.', 'Auf einem hohen Berg siedet Wasser bei einer Temperatur unter 100 °C.', '<strong>Ergebnis: bei einer Temperatur unter 100 °C</strong>'] }
      ]
    }
  }
});
