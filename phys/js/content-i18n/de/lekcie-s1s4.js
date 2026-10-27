/* Deutsch: Lektionen der Klassen 1–4 der Oberschule (js/rocniky/s1.js, s2.js, s3.js, s4.js). Struktur und Schlüssel: js/content-i18n.js. */
CONTENT_I18N.add('de', {
  lessons: {
    's1-veliciny': {
      title: 'Physikalische Größen, Einheiten und Messung',
      summary: 'Zahl und Einheit, das SI-System, Vorsilben und Umrechnung von Einheiten.',
      theory: [
        `<p>Eine physikalische Größe ist eine Eigenschaft eines Körpers oder eines Vorgangs, die wir <strong>messen</strong> und als Zahl mit einer Einheit ausdrücken können. Zum Beispiel die Länge $s = 12\\,\\text{m}$: Die Zahl $12$ sagt, wie oft wir die Einheit verwendet haben, und $\\text{m}$ sagt, welche Einheit wir verwendet haben. Eine Angabe ohne Einheit hat keine Bedeutung.</p>`,
        `<p>Das Internationale Einheitensystem SI hat sieben Basiseinheiten. Für diese Klassenstufe genügen diese: Meter $\\text{m}$ (Länge), Kilogramm $\\text{kg}$ (Masse), Sekunde $\\text{s}$ (Zeit) und Kelvin $\\text{K}$ (Temperatur). Abgeleitete Einheiten entstehen durch Zusammensetzen der Basiseinheiten: Die Geschwindigkeit hat die Einheit $\\text{m/s}$ und die Kraft $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$.</p>`,
        `<p><strong>Vorsilben</strong> verkürzen die Schreibweise sehr großer und sehr kleiner Zahlen. Es gilt zum Beispiel $1\\,\\text{km}=10^3\\,\\text{m}$, $1\\,\\text{cm}=10^{-2}\\,\\text{m}$ und $1\\,\\text{g}=10^{-3}\\,\\text{kg}$. Beim Umrechnen genügt es, sich zu überlegen, wie oft die neue Einheit größer oder kleiner ist, und entsprechend zu multiplizieren oder zu dividieren.</p>`,
        `<p>Jede Messung hat einen <strong>Fehler</strong>, deshalb schreiben wir das Ergebnis mit einer passenden Anzahl gültiger Ziffern und geben immer die Einheit an. Die Schreibweise $s = 12{,}0\\,\\text{m}$ sagt mehr als $s = 12\\,\\text{m}$, weil sie eine Genauigkeit auf Zehntel Meter andeutet.</p>`
      ],
      examples: [
        { task: 'Rechne $3{,}5\\,\\text{km}$ in Meter um.',
          steps: ['Die Vorsilbe k bedeutet tausend, also $1\\,\\text{km}=10^3\\,\\text{m}$.', '$3{,}5\\cdot 10^3\\,\\text{m}=3500\\,\\text{m}$.', '<strong>Ergebnis: 3500 m</strong>'] },
        { task: 'Wie viele Sekunden hat $2\\,\\text{h}$?',
          steps: ['Eine Stunde hat $60\\,\\text{min}$ und eine Minute hat $60\\,\\text{s}$.', 'Eine Stunde hat also $60\\cdot 60=3600\\,\\text{s}$.', '$2\\,\\text{h}=2\\cdot 3600\\,\\text{s}=7200\\,\\text{s}$.', '<strong>Ergebnis: 7200 s</strong>'] }
      ]
    },
    's1-pohyb': {
      title: 'Gleichförmige und ungleichförmige Bewegung',
      summary: 'Weg, Zeit und Geschwindigkeit; mittlere Geschwindigkeit bei wechselnder Bewegung.',
      theory: [
        `<p>Die Bewegung eines Körpers beschreiben wir relativ zu einem <strong>Bezugskörper</strong>. Der Weg $s$ ist die Länge der Bahn, die der Körper zurückgelegt hat, und die Zeit $t$ ist die Dauer der Bewegung. Die <strong>mittlere Geschwindigkeit</strong> ist der Quotient aus Weg und Zeit: $\\bar v=\\frac{s}{t}$, Einheit $\\text{m/s}$ oder $\\text{km/h}$.</p>`,
        `<p><strong>Gleichförmige Bewegung</strong> ist eine Bewegung mit konstanter Geschwindigkeit. In gleichen Zeiten legt der Körper gleiche Wege zurück, deshalb gilt $s=v\\,t$. Im Weg-Zeit-Diagramm ist das eine Gerade.</p>`,
        `<p><strong>Ungleichförmige Bewegung</strong> bedeutet, dass sich die Geschwindigkeit ändert. Die mittlere Geschwindigkeit der ganzen Strecke ist nicht das arithmetische Mittel der Geschwindigkeiten, sondern der gesamte Weg geteilt durch die gesamte Zeit: $\\bar v=\\frac{s_1+s_2}{t_1+t_2}$.</p>`,
        `<p><strong>Warum ist das so?</strong> Fahren wir 2 Stunden mit $60\\,\\text{km/h}$ und danach 1 Stunde mit $30\\,\\text{km/h}$, legen wir $120+30=150\\,\\text{km}$ in $3$ Stunden zurück. Der Mittelwert der Geschwindigkeiten ergäbe $45\\,\\text{km/h}$, die tatsächliche mittlere Geschwindigkeit ist aber $50\\,\\text{km/h}$, weil wir länger schneller gefahren sind.</p>`,
        { fig: 's1s4-priemerna-rychlost', caption: "Die Fläche unter dem v-t-Diagramm ist der Weg. Die mittlere Geschwindigkeit ist der gesamte Weg geteilt durch die gesamte Zeit, nicht der Mittelwert der Geschwindigkeiten." }
      ],
      examples: [
        { task: 'Ein Auto legt $120\\,\\text{km}$ in $2\\,\\text{h}$ zurück. Wie groß ist seine mittlere Geschwindigkeit?',
          steps: ['$\\bar v=\\frac{s}{t}=\\frac{120\\,\\text{km}}{2\\,\\text{h}}$.', '<strong>Ergebnis: 60 km/h</strong>'] },
        { task: 'Ein Radfahrer fährt $2\\,\\text{h}$ mit $20\\,\\text{km/h}$ und danach $2\\,\\text{h}$ mit $10\\,\\text{km/h}$. Wie groß ist seine mittlere Geschwindigkeit?',
          steps: ['Erster Abschnitt: $s_1=20\\cdot 2=40\\,\\text{km}$, zweiter: $s_2=10\\cdot 2=20\\,\\text{km}$.', 'Insgesamt $60\\,\\text{km}$ in $4\\,\\text{h}$.', '<strong>Ergebnis: 15 km/h</strong>'] }
      ]
    },
    's1-zrychlenie': {
      title: 'Geschwindigkeit und Beschleunigung',
      summary: 'Änderung der Geschwindigkeit pro Zeit und gleichmäßig beschleunigte Bewegung.',
      theory: [
        `<p><strong>Beschleunigung</strong> ist die Änderung der Geschwindigkeit pro Zeiteinheit: $a=\\frac{\\Delta v}{\\Delta t}=\\frac{v-v_0}{t}$. Die Einheit ist $\\text{m/s}^2$. Nimmt die Geschwindigkeit jede Sekunde um $2\\,\\text{m/s}$ zu, beträgt die Beschleunigung $2\\,\\text{m/s}^2$.</p>`,
        `<p>Beschleunigung ist nicht nur Beschleunigen. Ein positives $a$ bedeutet, dass die Geschwindigkeit zunimmt, ein negatives $a$ bedeutet Bremsen. Eine Beschleunigung liegt auch dann vor, wenn sich die Bewegungsrichtung ändert, obwohl der Betrag der Geschwindigkeit gleich bleibt, etwa bei einer Bewegung auf einem Kreis.</p>`,
        `<p>Bei der <strong>gleichmäßig beschleunigten Bewegung</strong> wächst die Geschwindigkeit proportional zur Zeit: $v=v_0+a\\,t$. Die mittlere Geschwindigkeit ist $\\frac{v_0+v}{2}$, deshalb ist der Weg $s=v_0\\,t+\\frac{1}{2}a\\,t^2$. Der Term mit $\\frac{1}{2}$ ist wichtig, weil sich die Geschwindigkeit während der Strecke ständig ändert.</p>`,
        `<p>Beim freien Fall in der Nähe der Erdoberfläche zeigt die Beschleunigung nach unten und hat den Betrag etwa $g\\approx 9{,}81\\,\\text{m/s}^2$. Ein aus der Ruhe fallender Körper erhöht seine Geschwindigkeit jede Sekunde um etwa $9{,}81\\,\\text{m/s}$.</p>`,
        { fig: 's1s4-v-t-zrychlenie', caption: "Die Steigung des v-t-Diagramms ist die Beschleunigung, und die Fläche unter dem Diagramm ist der Weg. Bei gleichmäßig beschleunigter Bewegung ist das Diagramm eine Gerade." }
      ],
      examples: [
        { task: 'Ein Auto beschleunigt aus der Ruhe in $5\\,\\text{s}$ auf $20\\,\\text{m/s}$. Wie groß ist seine Beschleunigung?',
          steps: ['$a=\\frac{v-v_0}{t}=\\frac{20-0}{5}$.', '<strong>Ergebnis: 4 m/s²</strong>'] },
        { task: 'Ein Körper hat die Geschwindigkeit $2\\,\\text{m/s}$ und die Beschleunigung $3\\,\\text{m/s}^2$. Wie groß ist seine Geschwindigkeit nach $4\\,\\text{s}$?',
          steps: ['$v=v_0+a\\,t=2+3\\cdot 4$.', '<strong>Ergebnis: 14 m/s</strong>'] }
      ]
    },
    's1-newton': {
      title: 'Newtonsche Bewegungsgesetze',
      summary: 'Trägheit, der Zusammenhang F = m·a und das Prinzip von Actio und Reactio.',
      theory: [
        `<p><strong>Erstes Newtonsches Gesetz (Trägheitsgesetz):</strong> Ein Körper bleibt in Ruhe oder in gleichförmig geradliniger Bewegung, solange keine Kraft auf ihn wirkt oder die resultierende Kraft aller Kräfte null ist. Deshalb werden die Fahrgäste beim plötzlichen Bremsen des Busses nach vorne gedrückt: Ihr Körper will in der Bewegung weitergehen.</p>`,
        `<p><strong>Zweites Newtonsches Gesetz:</strong> Die resultierende Kraft erteilt dem Körper eine Beschleunigung, die der Kraft direkt proportional und der Masse umgekehrt proportional ist: $F=m\\,a$. Die Einheit der Kraft ist das Newton, $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$. Bei gleicher Kraft kommt ein schwererer Körper langsamer in Bewegung.</p>`,
        `<p><strong>Drittes Newtonsches Gesetz (Actio und Reactio):</strong> Wirkt Körper A mit einer Kraft auf Körper B, so wirkt Körper B auf A mit einer Kraft gleichen Betrags und entgegengesetzter Richtung. Diese Kräfte greifen an <em>verschiedenen</em> Körpern an, deshalb werden sie nie voneinander abgezogen. Das Pferd zieht den Wagen und der Wagen zieht das Pferd zurück.</p>`,
        `<p><strong>Resultierende Kraft</strong> mehrerer Kräfte auf einer Geraden: Kräfte in gleicher Richtung werden addiert, Kräfte in entgegengesetzten Richtungen werden subtrahiert. Die resultierende Beschleunigung hat die Richtung der resultierenden Kraft.</p>`,
        { fig: 's1s4-akcia-reakcia', caption: "Die Kräfte von Actio und Reactio haben die gleiche Größe und entgegengesetzte Richtung, wirken aber auf verschiedene Körper, deshalb werden sie nicht voneinander abgezogen." }
      ],
      examples: [
        { task: 'Ein Körper der Masse $4\\,\\text{kg}$ bewegt sich mit der Beschleunigung $3\\,\\text{m/s}^2$. Welche resultierende Kraft wirkt auf ihn?',
          steps: ['$F=m\\,a=4\\cdot 3$.', '<strong>Ergebnis: 12 N</strong>'] },
        { task: 'Zwei Kräfte $7\\,\\text{N}$ und $3\\,\\text{N}$ wirken auf einen Körper in entgegengesetzte Richtungen. Wie groß ist ihre resultierende Kraft?',
          steps: ['Die Kräfte haben entgegengesetzte Richtung, deshalb werden sie subtrahiert: $7-3=4$.', '<strong>Ergebnis: 4 N in Richtung der größeren Kraft</strong>'] }
      ]
    },
    's1-gravitacia': {
      title: 'Gravitationskraft und Gewichtskraft',
      summary: 'Masse und Gewichtskraft, Fallbeschleunigung auf der Erde und auf dem Mond.',
      theory: [
        `<p><strong>Die Gravitationskraft</strong> ist eine anziehende Kraft zwischen allen Körpern. Je schwerer die Körper sind und je näher sie beieinander liegen, desto größer ist sie. Bei Körpern auf der Erdoberfläche beobachten wir sie als <strong>Gewichtskraft</strong>.</p>`,
        `<p><strong>Die Gewichtskraft</strong> ist die Kraft, mit der die Erde einen Körper anzieht: $F_g=m\\,g$, wobei $g\\approx 9{,}81\\,\\text{m/s}^2$ die Fallbeschleunigung ist. Die Masse $m$ in Kilogramm ist eine Eigenschaft des Körpers und ändert sich nicht. Die Gewichtskraft in Newton hängt vom Ort ab: Auf dem Mond, wo $g\\approx 1{,}62\\,\\text{m/s}^2$ ist, ist sie etwa sechsmal kleiner.</p>`,
        `<p><strong>Warum fallen alle Körper gleich schnell?</strong> Die Gewichtskraft ist proportional zur Masse, ebenso die Trägheit. Die Beschleunigung $a=\\frac{F_g}{m}=g$ hängt daher nicht von der Masse ab. Beim Fall ohne Luftwiderstand fallen ein Stein und ein Pollenkorn gleich schnell.</p>`,
        `<p>Verwechsle die Begriffe nicht: Die <strong>Masse</strong> wird in Kilogramm gemessen und ist die Stoffmenge im Körper, die <strong>Gewichtskraft</strong> ist eine Kraft und wird in Newton gemessen.</p>`,
        { fig: 's1s4-tiaz-zem-mesiac', caption: "Dieselbe Masse hat auf dem Mond eine etwa sechsmal kleinere Gewichtskraft, weil dort die Fallbeschleunigung kleiner ist." }
      ],
      examples: [
        { task: 'Wie groß ist die Gewichtskraft eines Körpers der Masse $5\\,\\text{kg}$ auf der Erde?',
          steps: ['$F_g=m\\,g=5\\cdot 9{,}81$.', '<strong>Ergebnis: etwa 49,1 N</strong>'] },
        { task: 'Wie groß ist die Gewichtskraft desselben Körpers auf dem Mond, wo $g\\approx 1{,}62\\,\\text{m/s}^2$ ist? Wie groß ist seine Masse?',
          steps: ['$F_g=5\\cdot 1{,}62=8{,}1\\,\\text{N}$.', 'Die Masse ändert sich nicht, sie bleibt $5\\,\\text{kg}$.', '<strong>Ergebnis: 8,1 N, Masse 5 kg</strong>'] }
      ]
    },
    's1-praca-energia': {
      title: 'Arbeit, Leistung und Energie',
      summary: 'Mechanische Arbeit, Leistung und kinetische Energie eines Körpers.',
      theory: [
        `<p><strong>Mechanische Arbeit</strong> ist die Energie, die eine Kraft beim Verschieben eines Körpers überträgt. Hat die Kraft die Richtung der Bewegung, gilt $W=F\\,s$. Die Einheit ist das Joule, $1\\,\\text{J}=1\\,\\text{N}\\cdot\\text{m}$. Dieselbe Arbeit kann man mit einer großen Kraft auf kurzer Strecke oder mit einer kleinen Kraft auf langer Strecke verrichten.</p>`,
        `<p><strong>Die Leistung</strong> sagt, wie schnell Arbeit verrichtet wird: $P=\\frac{W}{t}$. Die Einheit ist das Watt, $1\\,\\text{W}=1\\,\\text{J/s}$. Zwei Motoren können dieselbe Arbeit verrichten, der Motor mit der größeren Leistung schafft es aber in kürzerer Zeit.</p>`,
        `<p><strong>Die kinetische Energie</strong> ist die Energie der Bewegung: $E_k=\\frac{1}{2}m\\,v^2$. Sie hängt vom Quadrat der Geschwindigkeit ab, deshalb bedeutet die doppelte Geschwindigkeit die vierfache Energie. Aus diesem Grund ist der Bremsweg eines Autos bei höherer Geschwindigkeit deutlich länger.</p>`,
        `<p>Arbeit und Energie hängen zusammen: Die an einem Körper verrichtete Arbeit wird in eine Änderung seiner Energie umgewandelt. Ist $W$ positiv, so wächst die Energie des Körpers.</p>`,
        { fig: 'obr-energia', caption: "Beim reibungsfreien Gleiten wandelt sich die potenzielle Energie in kinetische Energie und zurück." }
      ],
      examples: [
        { task: 'Eine Kraft von $50\\,\\text{N}$ verschiebt einen Wagen um $4\\,\\text{m}$ in Richtung der Kraft. Welche Arbeit wird verrichtet?',
          steps: ['$W=F\\,s=50\\cdot 4$.', '<strong>Ergebnis: 200 J</strong>'] },
        { task: 'Ein Körper der Masse $2\\,\\text{kg}$ bewegt sich mit der Geschwindigkeit $3\\,\\text{m/s}$. Wie groß ist seine kinetische Energie?',
          steps: ['$E_k=\\frac{1}{2}\\cdot 2\\cdot 3^2=9$.', '<strong>Ergebnis: 9 J</strong>'] }
      ]
    },
    's1-zakony-zachovania': {
      title: 'Erhaltungssätze für Energie und Impuls',
      summary: 'Impuls eines Körpers und die Umwandlung von Lageenergie in Bewegungsenergie.',
      theory: [
        `<p><strong>Der Impuls</strong> eines Körpers ist das Produkt aus seiner Masse und seiner Geschwindigkeit: $p=m\\,v$, Einheit $\\text{kg\\,m/s}$. Der Impuls ist eine vektorielle Größe, er hat also die Richtung der Geschwindigkeit. Ein schwererer Körper mit gleicher Geschwindigkeit hat einen größeren Impuls, deshalb ist er schwerer zu stoppen.</p>`,
        `<p><strong>Impulserhaltungssatz:</strong> Wirken auf ein System keine äußeren Kräfte, so ändert sich die Summe der Impulse der Körper darin nicht. Zwei Schlittschuhläufer, die sich voneinander abstoßen, bewegen sich in entgegengesetzte Richtungen. Der leichtere Läufer bekommt die größere Geschwindigkeit, weil die Summe ihrer Impulse null bleiben muss.</p>`,
        `<p><strong>Energieerhaltungssatz (mechanische Energie):</strong> Wirken weder Reibung noch Widerstand des Mediums, so bleibt die Summe aus kinetischer und potenzieller Energie $E_k+E_p$ konstant. Beim freien Fall wird die Lageenergie $E_p=m\\,g\\,h$ in kinetische Energie $\\frac{1}{2}m\\,v^2$ umgewandelt. Daraus folgt $v=\\sqrt{2gh}$: Die Geschwindigkeit hängt nicht von der Masse ab.</p>`,
        `<p>In Wirklichkeit wandeln Reibung und Luftwiderstand einen Teil der mechanischen Energie in Wärme um. Die mechanische Energie sinkt dann, die Gesamtenergie des Systems bleibt aber erhalten.</p>`,
        { fig: 's1s4-hybnost', caption: "Die Summe der Impulse des Systems bleibt null: Der leichtere Körper bewegt sich schneller, der schwerere langsamer." }
      ],
      examples: [
        { task: 'Eine Kugel der Masse $0{,}01\\,\\text{kg}$ fliegt mit $500\\,\\text{m/s}$. Wie groß ist ihr Impuls?',
          steps: ['$p=m\\,v=0{,}01\\cdot 500$.', '<strong>Ergebnis: 5 kg·m/s</strong>'] },
        { task: 'Ein Körper fällt aus der Ruhe aus $5\\,\\text{m}$ Höhe ohne Luftwiderstand. Mit welcher Geschwindigkeit trifft er auf? Verwende $g=10\\,\\text{m/s}^2$.',
          steps: ['$m\\,g\\,h=\\frac{1}{2}m\\,v^2$, also $v^2=2gh=2\\cdot 10\\cdot 5=100$.', '<strong>Ergebnis: v = 10 m/s</strong>'] }
      ]
    },
    's1-tlak': {
      title: 'Druck, Eigenschaften von Flüssigkeiten und Gasen',
      summary: 'Druck fester Körper, hydrostatischer Druck und das Pascalsche Gesetz.',
      theory: [
        `<p><strong>Der Druck</strong> ist der Quotient aus der senkrecht auf eine Fläche wirkenden Kraft und dem Flächeninhalt dieser Fläche: $p=\\frac{F}{S}$. Die Einheit ist das Pascal, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Mit einer scharfen Spitze drücken wir stärker, weil dieselbe Kraft auf eine kleinere Fläche wirkt.</p>`,
        `<p><strong>Der hydrostatische Druck</strong> in einer Flüssigkeit wächst mit der Tiefe: $p=\\rho\\,g\\,h$, wobei $\\rho$ die Dichte der Flüssigkeit ist (Wasser $1000\\,\\text{kg/m}^3$) und $h$ die Tiefe unter der Oberfläche. Dieser Druck hängt nicht von der Form des Gefäßes ab, sondern nur von der Tiefe und der Dichte.</p>`,
        `<p><strong>Pascalsches Gesetz:</strong> Der auf eine eingeschlossene Flüssigkeit ausgeübte Druck wird unverändert an alle Stellen der Flüssigkeit weitergegeben. Deshalb kann eine hydraulische Presse ein Auto anheben: Mit einer kleinen Kraft auf einen kleinen Kolben erzeugen wir einen Druck, der auf einen großen Kolben wirkt und dort eine größere Kraft ergibt.</p>`,
        `<p><strong>Gase</strong> üben Druck aus, indem ihre Moleküle an die Gefäßwände stoßen. Der Luftdruck auf Meereshöhe beträgt etwa $101\\,325\\,\\text{Pa}\\approx 100\\,\\text{kPa}$ und sinkt mit zunehmender Höhe.</p>`,
        { fig: 'obr-tlak', caption: "Der Druck in einer Flüssigkeit wächst mit der Tiefe: Je tiefer, desto größer ist die Kraft, die auf die Wand wirkt." }
      ],
      examples: [
        { task: 'Ein Quader mit der Gewichtskraft $600\\,\\text{N}$ steht auf einem Boden mit der Fläche $0{,}5\\,\\text{m}^2$. Welchen Druck erzeugt er?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$.', '<strong>Ergebnis: 1200 Pa</strong>'] },
        { task: 'Wie groß ist der hydrostatische Druck von Wasser in $3\\,\\text{m}$ Tiefe? Verwende $\\rho=1000\\,\\text{kg/m}^3$ und $g=10\\,\\text{m/s}^2$.',
          steps: ['$p=\\rho\\,g\\,h=1000\\cdot 10\\cdot 3=30000\\,\\text{Pa}$.', '<strong>Ergebnis: 30 kPa</strong>'] }
      ]
    },
    's2-molekuly': {
      title: 'Molekularer Aufbau der Stoffe',
      summary: 'Teilchen der Stoffe, Stoffmenge und molare Masse.',
      theory: [
        `<p>Jeder Stoff besteht aus sehr kleinen Teilchen: Atomen oder Molekülen. Diese befinden sich in ständiger, ungeordneter Bewegung und wirken untereinander mit anziehenden und abstoßenden Kräften aufeinander. Von diesen Kräften hängt ab, ob der Stoff fest, flüssig oder gasförmig ist.</p>`,
        `<p>Ein Beweis für die Bewegung der Moleküle ist die <strong>Brownsche Bewegung</strong>: Kleine Teilchen, die in einer Flüssigkeit verteilt sind, zittern unregelmäßig, weil sie von allen Seiten von Flüssigkeitsmolekülen getroffen werden. Die Bewegung der Moleküle selbst sehen wir nicht, wohl aber ihre Folgen.</p>`,
        `<p>Die Stoffmenge geben wir in Mol an. Ein Mol enthält $N_A\\approx 6{,}02\\cdot 10^{23}$ Teilchen (Avogadro-Konstante). Die <strong>molare Masse</strong> $M$ ist die Masse eines Mols in Gramm pro Mol. Zum Beispiel hat Wasser $M=18\\,\\text{g/mol}$, denn ein Mol Wassermoleküle wiegt 18 g.</p>`,
        `<p>Es gelten die Beziehungen: Stoffmenge $n=\\frac{m}{M}$ und Teilchenzahl $N=n\\,N_A$. Deshalb enthält auch eine sehr kleine Stoffmenge eine riesige Anzahl von Teilchen.</p>`,
        { fig: 's1s4-brownov-pohyb', caption: "Brownsche Bewegung: Das Körnchen zittert unregelmäßig, weil es von allen Seiten von Flüssigkeitsmolekülen getroffen wird." }
      ],
      examples: [
        { task: 'Wie viele Mol sind $36\\,\\text{g}$ Wasser, wenn $M=18\\,\\text{g/mol}$ ist?',
          steps: ['$n=\\frac{m}{M}=\\frac{36}{18}$.', '<strong>Ergebnis: 2 mol</strong>'] },
        { task: 'Wie viele Moleküle sind in $2\\,\\text{mol}$ Wasser enthalten?',
          steps: ['$N=n\\,N_A=2\\cdot 6{,}02\\cdot 10^{23}$.', '<strong>Ergebnis: etwa $1{,}2\\cdot 10^{24}$ Moleküle</strong>'] }
      ]
    },
    's2-teplo': {
      title: 'Temperatur, Wärme und innere Energie',
      summary: 'Temperatur, Kelvin, innere Energie und die Wärme für die Erwärmung.',
      theory: [
        `<p><strong>Die Temperatur</strong> ist ein Maß für die mittlere kinetische Energie der ungeordneten Bewegung der Teilchen. Ein wärmerer Körper hat seine Teilchen im Mittel schneller. Die Celsius-Skala hat ihren Nullpunkt beim Schmelzen von Eis, die absolute Skala in Kelvin hat ihren Nullpunkt beim absoluten Nullpunkt. Es gilt $T=t+273{,}15$, wobei die Größe eines Grades gleich ist.</p>`,
        `<p>Die <strong>innere Energie</strong> $U$ eines Körpers ist die Summe der kinetischen und potenziellen Energien aller seiner Teilchen. Sie ändert sich auf zwei Arten: durch Arbeit (zum Beispiel durch Reibung) oder durch Übertragung von Wärme.</p>`,
        `<p><strong>Wärme</strong> ist Energie, die von einem wärmeren Körper auf einen kälteren übergeht. Wärme ist kein Stoff, und Körper „haben“ sie nicht. Die Wärme, die zum Erwärmen eines Körpers nötig ist, beträgt $Q=m\\,c\\,\\Delta T$, wobei $c$ die spezifische Wärmekapazität ist. Wasser hat $c=4200\\,\\text{J/(kg\\,K)}$, Aluminium $900\\,\\text{J/(kg\\,K)}$. Deshalb erwärmt sich Wasser langsam und speichert die Wärme lange.</p>`,
        `<p>Die Temperaturänderung in Kelvin und in Grad Celsius berechnen wir gleich, denn $\\Delta T=\\Delta t$. Die Umrechnung auf die absolute Temperatur muss man nur bei einer konkreten Temperatur durchführen.</p>`,
        { fig: 's1s4-merna-kapacita', caption: "Bei gleicher Masse und gleicher Temperaturänderung braucht Wasser fast fünfmal so viel Wärme wie Aluminium." }
      ],
      examples: [
        { task: 'Wie viel Wärme braucht man, um $2\\,\\text{kg}$ Wasser um $10\\,\\text{K}$ zu erwärmen? Verwende $c=4200\\,\\text{J/(kg\\,K)}$.',
          steps: ['$Q=m\\,c\\,\\Delta T=2\\cdot 4200\\cdot 10$.', '<strong>Ergebnis: 84 000 J = 84 kJ</strong>'] },
        { task: 'Welche Temperatur hat $25\\,{}^\\circ\\text{C}$ in Kelvin?',
          steps: ['$T=t+273{,}15=25+273{,}15$.', '<strong>Ergebnis: 298,15 K</strong>'] }
      ]
    },
    's2-skupenstva': {
      title: 'Zustandsänderungen',
      summary: 'Schmelzen, Erstarren, Verdampfen und Kondensation sowie die Umwandlungswärme.',
      theory: [
        `<p>Ein Stoff kann fest, flüssig oder gasförmig sein. Der Übergang zwischen den Aggregatzuständen erfordert Energie oder gibt sie ab. Beim Schmelzen und Verdampfen <strong>ändert sich die Temperatur nicht</strong>: Die zugeführte Wärme wird dafür verbraucht, die Bindungen zwischen den Molekülen zu lockern, und nicht, um ihre Geschwindigkeit zu erhöhen.</p>`,
        `<p>Die <strong>spezifische Schmelzwärme</strong> ist die Wärme, die nötig ist, um ein Kilogramm eines Stoffes ohne Temperaturänderung umzuwandeln. Beim Schmelzen handelt es sich um die spezifische Schmelzwärme $L_t$, beim Verdampfen um die spezifische Verdampfungswärme $L_v$. Für Eis gilt $L_t\\approx 334\\,\\text{kJ/kg}$, für Wasser $L_v\\approx 2260\\,\\text{kJ/kg}$. Die Wärme, die zur Umwandlung eines Körpers der Masse $m$ nötig ist, beträgt $Q=m\\,L$.</p>`,
        `<p>Beim <strong>Erstarren</strong> und bei der <strong>Kondensation</strong> wird dieselbe Wärmemenge frei. Deshalb ist Wasserdampf von $100\\,{}^\\circ\\text{C}$ gefährlicher als Wasser gleicher Temperatur: Bei der Kondensation auf der Haut gibt er eine enorme Wärmemenge ab.</p>`,
        `<p>Verdampfen bedeutet auch Abkühlung: Von der Oberfläche entweichen die schnellsten Moleküle, deshalb kühlt sich die verbleibende Flüssigkeit ab. Darum frieren wir nach dem Baden.</p>`,
        { fig: 's1s4-ohrev-latky', caption: "Beim Schmelzen und Verdampfen bleibt die Temperatur gleich: Die zugeführte Wärme wird für die Zustandsänderung verbraucht, nicht für die Erwärmung." }
      ],
      examples: [
        { task: 'Wie viel Wärme braucht man, um $2\\,\\text{kg}$ Eis bei $0\\,{}^\\circ\\text{C}$ zu schmelzen? Verwende $L_t=334\\,\\text{kJ/kg}$.',
          steps: ['$Q=m\\,L_t=2\\cdot 334$.', '<strong>Ergebnis: 668 kJ</strong>'] },
        { task: 'Wie viel Wärme gibt $0{,}5\\,\\text{kg}$ Wasserdampf bei der Kondensation zu Wasser von $100\\,{}^\\circ\\text{C}$ ab? Verwende $L_v=2260\\,\\text{kJ/kg}$.',
          steps: ['$Q=m\\,L_v=0{,}5\\cdot 2260$.', '<strong>Ergebnis: 1130 kJ</strong>'] }
      ]
    },
    's2-ideal': {
      title: 'Ideales Gas und Zustandsgleichung',
      summary: 'Modell des idealen Gases, Zustandsgleichung und isothermer Vorgang.',
      theory: [
        `<p>Das <strong>ideale Gas</strong> ist ein Modell: Die Moleküle sind kleine Punkte, zwischen ihnen wirken keine Kräfte, und sie stoßen an die Wände des Gefäßes und prallen elastisch voneinander ab. Reale Gase verhalten sich bei niedrigem Druck und hoher Temperatur nahezu ideal.</p>`,
        `<p>Die <strong>Zustandsgleichung</strong> des idealen Gases lautet $p\\,V=n\\,R\\,T$, wobei $R\\approx 8{,}31\\,\\text{J/(mol\\,K)}$ die molare Gaskonstante ist und die Temperatur $T$ in Kelvin eingesetzt wird. Erhöhen wir die Temperatur in einem geschlossenen Gefäß, stoßen die Moleküle stärker und häufiger an, und der Druck steigt.</p>`,
        `<p>Ein <strong>isothermer Vorgang</strong> verläuft bei konstanter Temperatur. Dann gilt $p\\,V=\\text{konst.}$, also $p_1V_1=p_2V_2$: Verdoppelt sich der Druck, sinkt das Volumen auf die Hälfte. Ähnlich ist bei konstantem Druck das Volumen proportional zur Temperatur, und bei konstantem Volumen der Druck proportional zur Temperatur.</p>`,
        `<p>Bei jeder Rechnung müssen wir auf die Einheiten achten: Druck in Pascal, Volumen in Kubikmetern und Temperatur in Kelvin.</p>`,
        { fig: 's1s4-izoterma', caption: "Bei konstanter Temperatur ist das Produkt p·V konstant: Sinkt das Volumen auf die Hälfte, verdoppelt sich der Druck." }
      ],
      examples: [
        { task: 'Ein Gas hat bei konstanter Temperatur das Volumen $4\\,\\text{l}$ und den Druck $200\\,\\text{kPa}$. Wie groß wird das Volumen bei dem Druck $400\\,\\text{kPa}$?',
          steps: ['$p_1V_1=p_2V_2$, also $V_2=\\frac{p_1V_1}{p_2}=\\frac{200\\cdot 4}{400}$.', '<strong>Ergebnis: 2 l</strong>'] },
        { task: 'Welchen Druck hat $1\\,\\text{mol}$ Gas bei $T=300\\,\\text{K}$ und dem Volumen $V=0{,}025\\,\\text{m}^3$? Verwende $R=8{,}31\\,\\text{J/(mol\\,K)}$.',
          steps: ['$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}31\\cdot 300}{0{,}025}$.', '<strong>Ergebnis: 99 720 Pa</strong>'] }
      ]
    },
    's2-termo': {
      title: 'Thermodynamische Gesetze und Wärmekraftmaschinen',
      summary: 'Erster Hauptsatz der Thermodynamik, zweiter Hauptsatz und Wirkungsgrad einer Wärmekraftmaschine.',
      theory: [
        `<p>Der <strong>erste Hauptsatz der Thermodynamik</strong> ist der Energieerhaltungssatz für thermische Vorgänge: $\\Delta U=Q-A$. Die Änderung der inneren Energie $\\Delta U$ ist gleich der dem System zugeführten Wärme $Q$ minus der Arbeit $A$, die das System an der Umgebung verrichtet. Dehnt sich ein Gas aus und verrichtet Arbeit, so sinkt seine innere Energie, sofern ihm nicht genügend Wärme zugeführt wird.</p>`,
        `<p>Der <strong>zweite Hauptsatz der Thermodynamik</strong> besagt, dass Wärme von selbst von einem wärmeren Körper auf einen kälteren übergeht, nicht umgekehrt. Daraus folgt, dass keine Wärmekraftmaschine die gesamte Wärme in Arbeit umwandeln kann. Ein Teil der Wärme muss an den Kühler abgegeben werden.</p>`,
        `<p>Eine <strong>Wärmekraftmaschine</strong> nimmt aus der Wärmequelle die Wärme $Q_1$ auf, wandelt einen Teil in Arbeit $A$ um und gibt den Rest $Q_2$ an den Kühler ab. Der <strong>Wirkungsgrad</strong> ist $\\eta=\\frac{A}{Q_1}=1-\\frac{Q_2}{Q_1}$. Er ist immer kleiner als 1, also kleiner als 100 %.</p>`,
        `<p>Den höchsten möglichen Wirkungsgrad hat der ideale Carnot-Kreisprozess: $\\eta_{\\max}=1-\\frac{T_2}{T_1}$, wobei die Temperaturen $T_1$ der Wärmequelle und $T_2$ des Kühlers in Kelvin eingesetzt werden. Deshalb verbessern sich Motoren durch Erhöhung der Temperatur der Wärmequelle.</p>`,
        { fig: 's1s4-tepelny-motor', caption: "Der Motor nimmt die Wärme Q₁ aus der Wärmequelle auf, wandelt einen Teil in Arbeit A um und gibt den Rest Q₂ an den Kühler ab. Der Wirkungsgrad A/Q₁ ist kleiner als 1." }
      ],
      examples: [
        { task: 'Dem Gas wurde die Wärme $300\\,\\text{J}$ zugeführt, und das Gas verrichtete dabei die Arbeit $120\\,\\text{J}$. Wie groß ist die Änderung seiner inneren Energie?',
          steps: ['$\\Delta U=Q-A=300-120$.', '<strong>Ergebnis: 180 J (die innere Energie ist gestiegen)</strong>'] },
        { task: 'Eine Maschine nimmt aus der Wärmequelle $1000\\,\\text{J}$ auf und verrichtet die Arbeit $250\\,\\text{J}$. Wie groß ist ihr Wirkungsgrad?',
          steps: ['$\\eta=\\frac{A}{Q_1}=\\frac{250}{1000}=0{,}25$.', '<strong>Ergebnis: 25 %</strong>'] }
      ]
    },
    's2-kmitanie': {
      title: 'Mechanische Schwingungen und Resonanz',
      summary: 'Periode, Frequenz, Pendel und Resonanz.',
      theory: [
        `<p><strong>Eine Schwingungsbewegung</strong> ist eine Bewegung um eine Gleichgewichtslage, die sich periodisch wiederholt. Beispiele sind ein Gewicht an einer Feder oder ein Pendel. Die <strong>Periode</strong> $T$ ist die Zeit einer Schwingung, die <strong>Frequenz</strong> $f$ ist die Anzahl der Schwingungen pro Sekunde: $f=\\frac{1}{T}=\\frac{n}{t}$. Die Einheit der Frequenz ist das Hertz, $1\\,\\text{Hz}=1\\,\\text{s}^{-1}$.</p>`,
        `<p>Eine <strong>harmonische Schwingung</strong> hat die Auslenkung $y=A\\sin(\\omega t)$, wobei $A$ die Amplitude und $\\omega=2\\pi f$ die Kreisfrequenz ist. Ein sinusförmiger Verlauf entsteht bei einer Feder, bei der die Kraft direkt proportional zur Auslenkung ist.</p>`,
        `<p>Die Periode hängt von den Eigenschaften des schwingenden Systems ab. Bei einer Feder gilt $T=2\\pi\\sqrt{\\frac{m}{k}}$: Ein schwereres Gewicht schwingt langsamer, eine steifere Feder schneller. Beim mathematischen Pendel gilt $T=2\\pi\\sqrt{\\frac{l}{g}}$, wobei $l$ die Länge der Aufhängung ist (für kleine Auslenkungen).</p>`,
        `<p><strong>Resonanz</strong> tritt ein, wenn eine äußere periodische Kraft mit der Eigenfrequenz des Körpers schwingt. Jeder Impuls addiert sich zur vorherigen Schwingung, und die Amplitude wächst. Deshalb schaukelt sich eine Schaukel auf, wenn wir sie im Rhythmus ihrer Schwingung anstoßen.</p>`,
        { fig: 's1s4-kmitanie', caption: "Harmonische Schwingung: Die Amplitude A ist die größte Auslenkung, die Periode T ist die Zeit einer Schwingung." }
      ],
      examples: [
        { task: 'Ein Gewicht vollführt in $20\\,\\text{s}$ $40$ Schwingungen. Wie groß sind seine Periode und seine Frequenz?',
          steps: ['$T=\\frac{t}{n}=\\frac{20}{40}=0{,}5\\,\\text{s}$.', '$f=\\frac{1}{T}=\\frac{1}{0{,}5}$.', '<strong>Ergebnis: T = 0,5 s, f = 2 Hz</strong>'] },
        { task: 'Ein Körper schwingt mit der Frequenz $5\\,\\text{Hz}$. Wie groß ist seine Periode?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{5}$.', '<strong>Ergebnis: 0,2 s</strong>'] }
      ]
    },
    's2-vlnenie': {
      title: 'Mechanische Wellen und Schall',
      summary: 'Wellenlänge, Ausbreitungsgeschwindigkeit einer Welle und Schall als mechanische Welle.',
      theory: [
        `<p><strong>Eine Welle</strong> ist die Ausbreitung von Schwingungen in einem Medium. Dabei werden Energie und Wellenform übertragen, die Teilchen des Mediums schwingen aber nur um ihre Gleichgewichtslagen. Eine mechanische Welle braucht ein stoffliches Medium, deshalb hört man Schall im Vakuum nicht.</p>`,
        `<p>Die Wellenlänge $\\lambda$ ist der Abstand zweier nächster Punkte mit gleicher Phase, zum Beispiel zweier Wellenberge. In einer Periode $T$ schreitet die Welle um $\\lambda$ voran, deshalb gilt für die Ausbreitungsgeschwindigkeit $v=\\frac{\\lambda}{T}=\\lambda\\,f$.</p>`,
        `<p><strong>Schall</strong> ist eine Longitudinalwelle (Längswelle). Der Mensch hört Frequenzen von etwa $20\\,\\text{Hz}$ bis $20\\,\\text{kHz}$. Die Tonhöhe hängt von der Frequenz ab, die Lautstärke von der Amplitude. In trockener Luft bei $20\\,{}^\\circ\\text{C}$ breitet sich Schall mit etwa $340\\,\\text{m/s}$ aus, in Wasser und in Stahl schneller.</p>`,
        `<p><strong>Ein Echo</strong> entsteht, wenn sich der Schall an einem Hindernis reflektiert. Der Schall legt den Weg hin und zurück zurück, deshalb ist der Abstand zum Hindernis $s=\\frac{v\\,t}{2}$, wobei $t$ die Zeit zwischen dem Aussenden des Schalls und seiner Rückkehr ist.</p>`,
        { fig: 'obr-vlna', caption: "Transversalwelle: Die Wellenlänge λ ist der Abstand zweier benachbarter Punkte in gleicher Phase." }
      ],
      examples: [
        { task: 'Eine Welle mit der Frequenz $50\\,\\text{Hz}$ hat die Wellenlänge $4\\,\\text{m}$. Mit welcher Geschwindigkeit breitet sie sich aus?',
          steps: ['$v=\\lambda\\,f=4\\cdot 50$.', '<strong>Ergebnis: 200 m/s</strong>'] },
        { task: 'Das Echo kam $2\\,\\text{s}$ nach dem Schuss. Wie weit ist das Hindernis entfernt? Verwende $v=340\\,\\text{m/s}$.',
          steps: ['$2s=v\\,t=340\\cdot 2=680\\,\\text{m}$.', '<strong>Ergebnis: $s=340\\,\\text{m}$</strong>'] }
      ]
    },
    's3-naboj': {
      title: 'Elektrische Ladung und elektrisches Feld',
      summary: 'Ladungen ziehen sich an und stoßen sich ab; das Feld um eine Punktladung und seine Feldstärke.',
      theory: [
        `<p>Die elektrische Ladung $Q$ ist eine Eigenschaft von Körpern. Sie wird in Coulomb ($\\text{C}$) gemessen. Gleichnamige Ladungen <strong>stoßen sich ab</strong>, ungleichnamige <strong>ziehen sich an</strong>. Die kleinste Ladung in der Natur ist die Ladung des Elektrons, $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$.</p>`,
        `<p>Das <strong>elektrische Feld</strong> ist der Raum um einen geladenen Körper, der auf eine andere Ladung eine Kraft ausübt. Seine Wirkung beschreiben wir durch die <em>Feldstärke</em> $E = \\frac{F}{q}$: die Kraft, mit der das Feld auf eine kleine positive Ladung $q$ wirkt, geteilt durch diese Ladung. Die Einheit ist $\\text{N/C}$, was dasselbe wie $\\text{V/m}$ ist.</p>`,
        `<p>Für eine Punktladung $Q$ im Abstand $r$ gilt $E = k\\frac{Q}{r^2}$, wobei $k \\approx 9\\cdot 10^{9}\\,\\text{N·m}^2/\\text{C}^2$ ist. Die Feldstärke sinkt mit dem <strong>Quadrat</strong> des Abstands: Bei doppeltem Abstand ist das Feld nur noch ein Viertel. Deshalb schwächt sich das Feld mit dem Abstand schnell ab.</p>`,
        `<ol><li>Schreibe Ladung und Abstand auf und wandle sie in SI-Einheiten um (nC = $10^{-9}$ C, cm = $10^{-2}$ m).</li><li>Setze in $E = k\\frac{Q}{r^2}$ ein.</li><li>Schreibe das Ergebnis in $\\text{N/C}$ an.</li></ol>`,
        { fig: 's1s4-pole-naboja', caption: "Die Feldstärke einer Punktladung sinkt mit dem Quadrat des Abstands: Bei doppeltem Abstand ist sie nur ein Viertel." }
      ],
      examples: [
        { task: 'Eine Punktladung $Q = 2\\,\\text{nC}$. Wie groß ist die Feldstärke im Abstand $r = 0{,}5\\,\\text{m}$?',
          steps: ['Die Ladung umschreiben: $Q = 2\\cdot 10^{-9}\\,\\text{C}$.',
            '$E = 9\\cdot 10^{9}\\cdot\\frac{2\\cdot 10^{-9}}{0{,}25}=72\\,\\text{N/C}$.',
            '<strong>Ergebnis: $E = 72\\,\\text{N/C}$.</strong>'] },
        { task: 'Wie ändert sich die Feldstärke, wenn wir den Abstand von der Ladung verdoppeln?',
          steps: ['In der Formel steht $r^2$, also ist der Nenner bei $2r$ vierfach.', '<strong>Die Feldstärke sinkt auf ein Viertel.</strong>'] }
      ]
    },
    's3-prud-napatie': {
      title: 'Elektrischer Strom, Spannung und Widerstand',
      summary: 'Strom ist Ladung pro Zeit, Spannung ist Arbeit pro Ladung, der Widerstand bremst die Bewegung der Ladungen.',
      theory: [
        `<p>Der <strong>elektrische Strom</strong> $I$ ist die Ladung, die in der Zeiteinheit durch einen Leiterquerschnitt fließt: $I = \\frac{Q}{t}$. Die Einheit ist das Ampere ($\\text{A}$). Strom fließt nur dann, wenn sich die Ladungen bewegen können und auf sie eine Kraft wirkt.</p>`,
        `<p>Die <strong>elektrische Spannung</strong> $U$ gibt an, welche Arbeit $W$ das Feld beim Transport der Ladung $Q$ verrichtet: $U = \\frac{W}{Q}$. Die Einheit ist das Volt ($\\text{V}$). Die Spannung ist das, was die Ladungen durch den Stromkreis „drückt“.</p>`,
        `<p>Der <strong>elektrische Widerstand</strong> $R$ ist die Eigenschaft eines Leiters, die Bewegung der Ladungen zu bremsen. Die Einheit ist das Ohm ($\\Omega$). Der Widerstand hängt vom Material, von der Länge und vom Querschnitt des Leiters sowie von der Temperatur ab: Ein längerer und dünnerer Leiter hat einen größeren Widerstand.</p>`,
        `<p>Warum der Strom begrenzt ist: Die Spannung setzt die Ladungen in Bewegung, Zusammenstöße mit den Atomen des Leiters bremsen sie aber. Das Ergebnis ist ein stationärer Strom, der von der Spannung und vom Widerstand abhängt.</p>`,
        { fig: 's1s4-jednoduchy-obvod', caption: "Der Strom fließt vom positiven Pol der Quelle durch den Widerstand zurück zum negativen Pol. Die Spannung U liegt an den Klemmen der Quelle." }
      ],
      examples: [
        { task: 'Durch einen Leiter fließt in 4 s die Ladung 12 C. Wie groß ist der Strom?',
          steps: ['Wir setzen in die Beziehung $I = \\frac{Q}{t}$ ein.', '$I = \\frac{12\\,\\text{C}}{4\\,\\text{s}} = 3\\,\\text{A}$.', '<strong>Ergebnis: Der Strom beträgt 3 A.</strong>'] },
        { task: 'Beim Transport der Ladung 5 C verrichtet das Feld die Arbeit 30 J. Wie groß ist die Spannung?',
          steps: ['$U = \\frac{W}{Q}$.', '$U = \\frac{30\\,\\text{J}}{5\\,\\text{C}} = 6\\,\\text{V}$.', '<strong>Ergebnis: Die Spannung beträgt 6 V.</strong>'] }
      ]
    },
    's3-ohm': {
      title: 'Ohmsches Gesetz und elektrische Schaltungen',
      summary: 'Strom, Spannung und Widerstand; Reihen- und Parallelschaltung von Widerständen.',
      theory: [
        `<p>Das <strong>ohmsche Gesetz</strong> besagt, dass der Strom im Leiter direkt proportional zur Spannung und umgekehrt proportional zum Widerstand ist: $I = \\frac{U}{R}$, also $U = R\\,I$ und $R = \\frac{U}{I}$. Es gilt für metallische Leiter bei konstanter Temperatur.</p>`,
        `<p><strong>Reihenschaltung</strong>: Die Verbraucher sind hintereinander geschaltet, durch alle fließt derselbe Strom, und die Spannungen addieren sich: $U = U_1 + U_2$, die Widerstände $R = R_1 + R_2$. Wenn ein Verbraucher ausfällt, wird der ganze Stromkreis unterbrochen.</p>`,
        `<p><strong>Parallelschaltung</strong>: Die Verbraucher liegen nebeneinander, an jedem liegt dieselbe Spannung, und die Ströme addieren sich: $I = I_1 + I_2$ und $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. Der Gesamtwiderstand ist kleiner als der kleinste der Zweigwiderstände. Deshalb sind Haushaltsgeräte parallel geschaltet: Jedes erhält die volle Spannung, und wenn eines ausgeschaltet wird, bleiben die übrigen in Betrieb.</p>`,
        `<p>Beim Lösen einer Schaltung bestimmen wir zuerst, welche Teile in Reihe und welche parallel liegen. Danach ersetzen wir die Schaltung durch einen einzigen Widerstand und wenden das ohmsche Gesetz an.</p>`,
        { fig: 'obr-ohm', caption: "Bei konstantem Widerstand ist das Diagramm der Abhängigkeit der Spannung vom Strom eine Gerade durch den Ursprung." }
      ],
      examples: [
        { task: 'Ein Widerstand von $6\\,\\Omega$ ist an eine Spannung von 12 V angeschlossen. Welcher Strom fließt durch ihn?',
          steps: ['$I = \\frac{U}{R} = \\frac{12\\,\\text{V}}{6\\,\\Omega}$.', '<strong>Ergebnis: I = 2 A.</strong>'] },
        { task: 'Zwei Widerstände von $4\\,\\Omega$ sind parallel geschaltet. Wie groß ist der Gesamtwiderstand?',
          steps: ['$\\frac{1}{R}=\\frac{1}{4}+\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$.', '<strong>Ergebnis: R = 2 Ω.</strong>'] }
      ]
    },
    's3-praca-vykon': {
      title: 'Elektrische Arbeit und Leistung',
      summary: 'Leistung eines Geräts, Energie in Joule und Kilowattstunden.',
      theory: [
        `<p>Die <strong>elektrische Leistung</strong> $P$ gibt an, mit welcher Geschwindigkeit ein Gerät elektrische Energie umwandelt: $P = U\\,I = \\frac{W}{t}$. Die Einheit ist das Watt ($\\text{W}$), wobei $1\\,\\text{W} = 1\\,\\text{J/s}$ gilt.</p>`,
        `<p>Die <strong>elektrische Arbeit</strong> (Energie) $W$ in der Zeit $t$ ist $W = P\\,t = U\\,I\\,t$. Die Einheit ist das Joule ($\\text{J}$). Auf der Stromrechnung verwendet man die Kilowattstunde: $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<p>Warum das gilt: Die Spannung gibt die Energie pro Coulomb an, und der Strom gibt an, wie viele Coulomb in einer Sekunde fließen. Ihr Produkt ist die Energie pro Sekunde, also die Leistung.</p>`,
        `<p>Auf dem Typenschild eines Geräts steht die Leistung (z. B. 2000 W). Die Energie erhältst du, indem du die Leistung in Kilowatt mit der Zeit in Stunden multiplizierst.</p>`
      ],
      examples: [
        { task: 'Eine Glühlampe ist an 230 V angeschlossen, und durch sie fließt ein Strom von 0,5 A. Wie groß ist ihre Leistung?',
          steps: ['$P = U\\,I = 230\\,\\text{V}\\cdot 0{,}5\\,\\text{A}$.', '<strong>Ergebnis: P = 115 W.</strong>'] },
        { task: 'Ein Föhn mit der Leistung 1,5 kW läuft 2 Stunden. Wie viele kWh Energie verbraucht er?',
          steps: ['$W = P\\,t = 1{,}5\\,\\text{kW}\\cdot 2\\,\\text{h}$.', '<strong>Ergebnis: 3 kWh.</strong>'] }
      ]
    },
    's3-magnetizmus': {
      title: 'Magnetfeld und elektromagnetische Induktion',
      summary: 'Magnetfeld eines Leiters und einer Spule sowie die Entstehung einer Spannung bei Änderung des magnetischen Flusses.',
      theory: [
        `<p>Ein <strong>Magnetfeld</strong> entsteht um Magnete und um einen Leiter, durch den Strom fließt. Seine Richtung zeigen die Feldlinien an, die vom Nordpol ausgehen und am Südpol eintreten. Die magnetische Flussdichte $B$ wird in Tesla ($\\text{T}$) gemessen.</p>`,
        `<p>Ein langer gerader Leiter mit dem Strom $I$ erzeugt im Abstand $r$ das Feld $B = \\frac{\\mu_0 I}{2\\pi r}$. Im Inneren einer <strong>Spule</strong> mit $N$ Windungen auf der Länge $l$ ist das Feld näherungsweise homogen: $B = \\mu_0\\frac{N}{l}I$, wobei $\\mu_0 \\approx 1{,}26\\cdot 10^{-6}\\,\\text{T·m/A}$ ist.</p>`,
        `<p><strong>Elektromagnetische Induktion:</strong> Ändert sich der magnetische Fluss durch eine geschlossene Leiterschleife, entsteht in ihr eine Spannung. Nach der Lenzschen Regel hat der induzierte Strom eine solche Richtung, dass er der Änderung entgegenwirkt, die ihn hervorgerufen hat. Deshalb setzt sich eine Spule der Annäherung eines Magneten entgegen.</p>`,
        `<p>Warum das gilt: Die Änderung des Magnetfeldes wirkt mit einer Kraft auf die freien Ladungen im Leiter, die sich dadurch bewegen. Würde der induzierte Strom die Änderung unterstützen, entstünde Energie aus dem Nichts, was dem Energieerhaltungssatz widerspricht.</p>`,
        { fig: 'obr-magnet-vodic', caption: "Um einen stromdurchflossenen Leiter herum besteht das Magnetfeld aus Kreisen um den Leiter." }
      ],
      examples: [
        { task: 'Eine Spule hat 500 Windungen auf einer Länge von 0,25 m, und durch sie fließt ein Strom von 2 A. Wie groß ist die Flussdichte in ihrem Inneren?',
          steps: ['$\\frac{N}{l}=\\frac{500}{0{,}25}=2000\\,\\text{m}^{-1}$.',
            '$B = \\mu_0\\frac{N}{l}I \\approx 1{,}26\\cdot 10^{-6}\\cdot 2000\\cdot 2 \\approx 5{,}0\\cdot 10^{-3}\\,\\text{T}$.',
            '<strong>Ergebnis: B ≈ 5,0 mT.</strong>'] },
        { task: 'Durch einen geraden Leiter fließt ein Strom von 4 A. Wie groß ist die Flussdichte im Abstand 0,2 m vom Leiter?',
          steps: ['$B = \\frac{\\mu_0 I}{2\\pi r}=\\frac{1{,}26\\cdot 10^{-6}\\cdot 4}{2\\pi\\cdot 0{,}2}$.',
            '<strong>Ergebnis: B ≈ 4,0·10⁻⁶ T.</strong>'] }
      ]
    },
    's3-transformator': {
      title: 'Elektromotoren, Generatoren und Transformatoren',
      summary: 'Der Motor wandelt Elektrizität in Bewegung um, der Generator umgekehrt; der Transformator ändert die Spannung.',
      theory: [
        `<p>Ein <strong>Elektromotor</strong> wandelt elektrische Energie in mechanische um. Auf einen stromdurchflossenen Leiter im Magnetfeld wirkt eine Kraft. Ist der Leiter zu einer Spule gewickelt, dreht die Kraft sie, und die Spule wird zum Rotor des Motors.</p>`,
        `<p>Ein <strong>Generator</strong> ist das Gegenstück zum Motor: Durch Drehen einer Spule im Magnetfeld ändert sich der magnetische Fluss periodisch, und in der Spule wird eine Wechselspannung induziert.</p>`,
        `<p>Ein <strong>Transformator</strong> ändert die Spannung von Wechselstrom. Bei einem idealen Transformator gilt $\\frac{U_1}{U_2}=\\frac{N_1}{N_2}$, wobei $N_1$ und $N_2$ die Windungszahlen der Primär- und der Sekundärwicklung sind. Hat die Sekundärwicklung mehr Windungen, steigt die Spannung; hat sie weniger, sinkt sie.</p>`,
        `<p>Warum man die Spannung beim Transport erhöht: Bei gleicher Leistung $P = U\\,I$ fließt bei höherer Spannung ein kleinerer Strom, und damit sind auch die Wärmeverluste in der Leitung kleiner. Deshalb wird Elektrizität mit Hochspannung übertragen und am Verbrauchsort wieder heruntertransformiert.</p>`,
        { fig: 's1s4-transformator', caption: "Idealer Transformator: Die Spannungen ändern sich im Verhältnis der Windungszahlen, U₁/U₂ = N₁/N₂." }
      ],
      examples: [
        { task: 'Ein Transformator hat auf der Primärseite 200 Windungen und auf der Sekundärseite 1000. Wie groß ist die Spannung auf der Sekundärseite, wenn an der Primärseite 230 V anliegen?',
          steps: ['$\\frac{U_2}{U_1}=\\frac{N_2}{N_1}=\\frac{1000}{200}=5$.', '$U_2 = 5\\cdot 230\\,\\text{V}=1150\\,\\text{V}$.', '<strong>Ergebnis: 1150 V (der Transformator erhöht die Spannung).</strong>'] },
        { task: 'Ein Transformator senkt die Spannung von 230 V auf 23 V. Wie viele Windungen hat die Sekundärwicklung, wenn die Primärwicklung 1000 hat?',
          steps: ['$\\frac{N_2}{N_1}=\\frac{U_2}{U_1}=\\frac{23}{230}=\\frac{1}{10}$.', '$N_2 = \\frac{1000}{10}=100$.', '<strong>Ergebnis: 100 Windungen.</strong>'] }
      ]
    },
    's3-striedavy': {
      title: 'Wechselstrom',
      summary: 'Sinusförmige Spannung, Periode, Frequenz und der Effektivwert im Netz.',
      theory: [
        `<p><strong>Wechselstrom</strong> ändert periodisch Richtung und Betrag. Die Spannung ändert sich mit der Zeit sinusförmig: $u = U_{max}\\sin(\\omega t)$, wobei $U_{max}$ die Amplitude und $\\omega = 2\\pi f$ die Kreisfrequenz ist.</p>`,
        `<p>Die Dauer einer Periode ist $T = \\frac{1}{f}$. Im öffentlichen Netz beträgt die Frequenz $f = 50\\,\\text{Hz}$, die Periode ist also $T = 0{,}02\\,\\text{s}$. In jeder Sekunde wiederholt sich die Spannung 50-mal.</p>`,
        `<p>Der <strong>Effektivwert</strong> ist der Wert einer Gleichspannung, die im Verbraucher dieselbe Wärmewirkung hätte. Für eine Sinusspannung gilt $U_{ef} = \\frac{U_{max}}{\\sqrt{2}}$, also $U_{max} = U_{ef}\\sqrt{2}$. Ein Netz mit dem Effektivwert 230 V hat eine Amplitude von etwa $325\\,\\text{V}$.</p>`,
        `<p>Warum wir Effektivwerte verwenden: Die Verbraucher (Glühlampe, Föhn) reagieren auf die mittlere Leistung und nicht auf die Spitzen. Deshalb werden auf Typenschildern und bei Voltmetern gerade die Effektivwerte angegeben.</p>`,
        { fig: 's1s4-striedavy-prud', caption: "Sinusspannung: Der Effektivwert ist die Amplitude geteilt durch √2. Die Periode ist T = 1/f, bei 50 Hz beträgt sie 0,02 s." }
      ],
      examples: [
        { task: 'Der Effektivwert der Netzspannung beträgt 230 V. Wie groß ist die Amplitude der Spannung?',
          steps: ['$U_{max}=U_{ef}\\sqrt{2}=230\\cdot 1{,}414\\approx 325\\,\\text{V}$.', '<strong>Ergebnis: etwa 325 V.</strong>'] },
        { task: 'Das Netz hat eine Frequenz von 50 Hz. Wie groß ist seine Periode?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{50}\\,\\text{s}$.', '<strong>Ergebnis: T = 0,02 s.</strong>'] }
      ]
    },
    's3-odraz-lom': {
      title: 'Reflexion und Brechung des Lichts',
      summary: 'Reflexionsgesetz, Brechungsindex und das Snelliussche Gesetz beim Übergang zwischen Medien.',
      theory: [
        `<p><strong>Reflexion des Lichts:</strong> Der Einfallswinkel ist gleich dem Reflexionswinkel. Beide Winkel messen wir von der <em>Lotrechten</em> zur Grenzfläche aus, nicht von der Oberfläche. Trifft ein Strahl unter einem Winkel von 30° zur Oberfläche auf einen Spiegel, so beträgt der Einfallswinkel zur Lotrechten $60^\\circ$.</p>`,
        `<p><strong>Brechung des Lichts:</strong> Beim Übergang in ein anderes Medium ändert sich die Lichtgeschwindigkeit, und der Strahl wird gebrochen. Der Brechungsindex ist $n = \\frac{c}{v}$, wobei $c = 3\\cdot 10^{8}\\,\\text{m/s}$ die Lichtgeschwindigkeit im Vakuum und $v$ die Geschwindigkeit im Stoff ist. Ein größerer Brechungsindex bedeutet langsameres Licht.</p>`,
        `<p><strong>Snelliussches Gesetz:</strong> $n_1\\sin\\alpha = n_2\\sin\\beta$, wobei $\\alpha$ der Einfallswinkel und $\\beta$ der Brechungswinkel sind, beide von der Lotrechten gemessen. Ist $n_2 > n_1$, wird der Strahl zur Lotrechten hin gebrochen, also $\\beta < \\alpha$.</p>`,
        `<p>Warum der Strahl gebrochen wird: In einem langsameren Medium wird die Wellenfront auf der einen Seite früher gebremst als auf der anderen, wodurch sich die Ausbreitungsrichtung ändert. Bei senkrechtem Einfall ändert sich die Richtung nicht.</p>`,
        { fig: 'obr-odraz', caption: "Bei der Reflexion des Lichts an einem ebenen Spiegel gilt das Reflexionsgesetz." }
      ],
      examples: [
        { task: 'Licht geht aus Luft in Glas mit dem Brechungsindex $n = 1{,}5$ über. Wie groß ist die Lichtgeschwindigkeit im Glas?',
          steps: ['$n=\\frac{c}{v}$, also $v=\\frac{c}{n}$.', '$v=\\frac{3\\cdot 10^{8}}{1{,}5}=2\\cdot 10^{8}\\,\\text{m/s}$.', '<strong>Ergebnis: 2·10⁸ m/s.</strong>'] },
        { task: 'Ein Strahl trifft senkrecht auf die Grenzfläche. Wie groß ist der Brechungswinkel?',
          steps: ['Senkrechter Einfall bedeutet $\\alpha=0^\\circ$, also $\\sin\\alpha=0$.', '$n_1\\cdot 0 = n_2\\sin\\beta$, also $\\sin\\beta = 0$.', '<strong>Ergebnis: $\\beta = 0^\\circ$, der Strahl ändert seine Richtung nicht.</strong>'] }
      ]
    },
    's3-sosovky': {
      title: 'Spiegel, Linsen und Abbildung',
      summary: 'Abbildungsgleichung der dünnen Linse, Bildweite und Vergrößerung.',
      theory: [
        `<p>Die <strong>Brennweite</strong> $f$ ist der Abstand des Brennpunkts vom Linsenmittelpunkt (bzw. vom Scheitel des Spiegels). Eine <strong>Sammellinse</strong> hat eine positive Brennweite: Sie bündelt die Strahlen im Brennpunkt.</p>`,
        `<p><strong>Abbildungsgleichung der dünnen Linse</strong>: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$, wobei $a$ der Gegenstandsabstand und $b$ der Bildabstand ist. Liegt der Gegenstand weiter entfernt als die doppelte Brennweite, ist das Bild reell, verkleinert und umgekehrt.</p>`,
        `<p><strong>Die Vergrößerung</strong> gibt an, wie oft das Bild größer oder kleiner als der Gegenstand ist: $|k| = \\frac{b}{a}$. Ist $|k| < 1$, ist das Bild verkleinert; ist $|k| > 1$, ist es vergrößert.</p>`,
        `<p><strong>Der ebene Spiegel</strong> erzeugt ein scheinbares Bild, das gleich groß ist wie der Gegenstand und gleich weit hinter dem Spiegel liegt. Die Abbildungsgleichung kann man auch für Hohlspiegel verwenden, allerdings mit anderen Vorzeichen der Abstände.</p>`,
        `<p>Warum das gilt: Die Strahlen von einem Punkt des Gegenstandes vereinigen sich hinter der Linse im Bildpunkt, und die ähnlichen Dreiecke, die die Strahlen bilden, ergeben die angeführten Beziehungen.</p>`,
        { fig: 's1s4-sosovka-2f', caption: "Ein Gegenstand im doppelten Brennweitenabstand erzeugt auf der anderen Seite der Linse ein reelles, umgekehrtes und gleich großes Bild." }
      ],
      examples: [
        { task: 'Der Gegenstand steht 30 cm vor einer Sammellinse mit der Brennweite 10 cm. Wie weit hinter der Linse entsteht das Bild?',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{10}-\\frac{1}{30}=\\frac{2}{30}=\\frac{1}{15}$.', '$b = 15\\,\\text{cm}$.', '<strong>Ergebnis: Das Bild entsteht 15 cm hinter der Linse.</strong>'] },
        { task: 'Der Gegenstand steht 30 cm vor der Linse, und das Bild entsteht 15 cm dahinter. Wie oft ist das Bild kleiner?',
          steps: ['$|k| = \\frac{b}{a} = \\frac{15}{30}$.', '<strong>Ergebnis: |k| = 0,5, das Bild ist auf die Hälfte verkleinert.</strong>'] }
      ]
    },
    's4-interferencia': {
      title: 'Wellennatur des Lichts: Interferenz und Beugung',
      summary: 'Überlagerung von Wellen, helle und dunkle Streifen am Doppelspalt und die Beugung einer Welle um ein Hindernis.',
      theory: [
        `<p>Licht hat Welleneigenschaften. Sichtbares Licht hat eine Wellenlänge $\\lambda$ von etwa $380\\,\\text{nm}$ bis $750\\,\\text{nm}$. Wellen können sich <strong>überlagern</strong>; diese Erscheinung nennen wir Interferenz.</p>`,
        `<p><strong>Interferenz</strong> am Doppelspalt: Verstärken sich die Wellen (der Gangunterschied ist ein ganzzahliges Vielfaches von $\\lambda$), entsteht ein <strong>heller Streifen</strong>. Löschen sie sich aus (der Gangunterschied ist $\\left(k+\\frac{1}{2}\\right)\\lambda$), entsteht ein <strong>dunkler Streifen</strong>.</p>`,
        `<p>Für die hellen Streifen auf einem Schirm im Abstand $L$ von den Spalten mit dem Abstand $d$ gilt näherungsweise $y_k = k\\,\\frac{\\lambda L}{d}$, wobei $k = 0, 1, 2, \\dots$ die Ordnung des Streifens ist. Bei größerer Wellenlänge oder größerem Abstand des Schirms liegen die Streifen weiter auseinander.</p>`,
        `<p><strong>Beugung</strong> ist das Abbiegen einer Welle um ein Hindernis oder durch einen schmalen Spalt. Sie ist deutlicher, wenn die Abmessung des Hindernisses der Wellenlänge nahekommt. Deshalb biegt Schall um eine Zimmerecke besser ab als Licht.</p>`,
        { fig: 's1s4-interferencia', caption: "Helle Streifen entstehen in den Richtungen, in denen der Gangunterschied ein ganzzahliges Vielfaches von λ ist: yk = k·λL/d." }
      ],
      examples: [
        { task: 'Die Spalte haben den Abstand $d = 0{,}5\\,\\text{mm}$, das Licht hat $\\lambda = 500\\,\\text{nm}$, und der Schirm ist $L = 1\\,\\text{m}$ entfernt. Wie weit ist der erste helle Streifen ($k=1$) von der Mitte entfernt?',
          steps: ['$y_1 = \\frac{\\lambda L}{d}=\\frac{500\\cdot 10^{-9}\\cdot 1}{0{,}5\\cdot 10^{-3}}\\,\\text{m}$.',
            '$y_1 = 10^{-3}\\,\\text{m}=1\\,\\text{mm}$.',
            '<strong>Ergebnis: 1 mm von der Mitte.</strong>'] },
        { task: 'Welche Wellenlänge ergibt bei gleicher Anordnung breitere Streifen: 400 nm oder 700 nm?',
          steps: ['Der Abstand der Streifen $y_k$ ist proportional zu $\\lambda$.', '<strong>Breitere Streifen ergibt 700 nm.</strong>'] }
      ]
    },
    's4-ziarenie': {
      title: 'Elektromagnetische Strahlung und Spektren',
      summary: 'Wellenlänge, Frequenz und Energie eines Photons; Linienspektren und kontinuierliche Spektren.',
      theory: [
        `<p>Elektromagnetische Strahlung sind Wellen, die sich im Vakuum mit der Geschwindigkeit $c = 3\\cdot 10^{8}\\,\\text{m/s}$ ausbreiten. Wellenlänge und Frequenz hängen durch die Beziehung $c = \\lambda f$ zusammen. Radiowellen, Mikrowellen, Infrarot, sichtbares Licht, Ultraviolett, Röntgen- und Gammastrahlung sind nur verschiedene Teile derselben Erscheinung.</p>`,
        `<p><strong>Energie des Photons</strong>: Licht wird in Quanten, den Photonen, abgegeben und absorbiert. Die Energie eines Photons ist $E = h f = \\frac{h c}{\\lambda}$, wobei $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$ ist. Bei atomaren Berechnungen ist die Einheit Elektronvolt praktisch ($1\\,\\text{eV} \\approx 1{,}6\\cdot 10^{-19}\\,\\text{J}$), ebenso die Beziehung $hc \\approx 1240\\,\\text{eV·nm}$.</p>`,
        `<p><strong>Spektren</strong>: Glühende feste Stoffe geben ein kontinuierliches Spektrum ab, verdünnte Gase ein Linienspektrum. Jedes Element hat eigene Linien, deshalb nutzt man Spektren zur Bestimmung der chemischen Zusammensetzung von Sternen.</p>`,
        `<p>Warum die Spektren aus Linien bestehen: Die Energieniveaus der Atome sind diskret. Ein Atom strahlt daher nur Photonen mit einer Energie ab oder absorbiert nur solche, die genau der Differenz zweier Niveaus entspricht. Eine höhere Photonenenergie bedeutet eine kürzere Wellenlänge.</p>`,
        { fig: 's1s4-spektrum', caption: "Elektromagnetische Strahlung ist eine Erscheinung mit unterschiedlicher Wellenlänge. Sichtbares Licht ist nur ein schmaler Bereich." }
      ],
      examples: [
        { task: 'Ein Photon hat die Wellenlänge 248 nm. Wie groß ist seine Energie in Elektronvolt?',
          steps: ['$E=\\frac{hc}{\\lambda}\\approx\\frac{1240\\,\\text{eV·nm}}{248\\,\\text{nm}}$.', '<strong>Ergebnis: E = 5 eV.</strong>'] },
        { task: 'Licht hat die Frequenz $6\\cdot 10^{14}\\,\\text{Hz}$. Wie groß ist seine Wellenlänge?',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{6\\cdot 10^{14}}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Ergebnis: 500 nm.</strong>'] }
      ]
    },
    's4-atom': {
      title: 'Atommodelle und Quantenerscheinungen',
      summary: 'Bohrsches Wasserstoffmodell: quantisierte Energieniveaus und die Energie des Photons beim Übergang zwischen ihnen.',
      theory: [
        `<p>Nach dem Rutherfordschen Modell besitzt das Atom einen kleinen positiven Kern und um ihn herum Elektronen. Nach der klassischen Physik müsste ein um den Kern kreisendes Elektron aber ständig Energie abstrahlen und in den Kern stürzen, was nicht geschieht. Das Bohrsche Modell führte deshalb <strong>quantisierte Niveaus</strong> ein, auf denen das Elektron keine Energie abstrahlt.</p>`,
        `<p>Die Energie des Elektrons im Wasserstoffatom ist quantisiert: $E_n = -\\frac{13{,}6\\,\\text{eV}}{n^2}$, wobei $n = 1, 2, 3, \\dots$ die Hauptquantenzahl ist. Je größer $n$ ist, desto schwächer ist das Elektron gebunden und desto näher liegt seine Energie bei null.</p>`,
        `<p><strong>Übergang zwischen Niveaus</strong>: Beim Übergang von einem höheren Niveau $n_i$ auf ein niedrigeres $n_f$ strahlt das Atom ein Photon mit der Energie $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\frac{1}{n_f^2}-\\frac{1}{n_i^2}\\right)$ ab. Der umgekehrte Übergang absorbiert ein Photon gleicher Energie.</p>`,
        `<p>Warum das gilt: Die Wellenlänge des abgestrahlten Lichts entspricht der Niveaudifferenz, daher strahlt Wasserstoff nur ein Linienspektrum ab. Auch der Fotoeffekt zeigt, dass Licht seine Energie in Quanten überträgt und damit Teilcheneigenschaften besitzt.</p>`,
        { fig: 'obr-atom', caption: "Vereinfachtes Atommodell: positiver Kern und Elektronen auf Umlaufbahnen." }
      ],
      examples: [
        { task: 'Ein Elektron im Wasserstoffatom geht vom Niveau $n=3$ auf $n=2$ über. Welche Energie strahlt es ab?',
          steps: ['$\\Delta E = 13{,}6\\left(\\frac{1}{2^2}-\\frac{1}{3^2}\\right)\\,\\text{eV}$.',
            '$\\frac{1}{4}-\\frac{1}{9}=\\frac{5}{36}$, also $\\Delta E = 13{,}6\\cdot\\frac{5}{36}\\approx 1{,}89\\,\\text{eV}$.',
            '<strong>Ergebnis: etwa 1,89 eV.</strong>'] },
        { task: 'Wie groß ist die Energie des Elektrons auf dem Niveau $n=1$?',
          steps: ['$E_1=-\\frac{13{,}6}{1^2}\\,\\text{eV}$.', '<strong>Ergebnis: E₁ = −13,6 eV.</strong>'] }
      ]
    },
    's4-radioaktivita': {
      title: 'Radioaktivität und Kernreaktionen',
      summary: 'Zerfall der Atomkerne, Halbwertszeit und die Schreibweise einer Kernreaktion.',
      theory: [
        `<p><strong>Radioaktivität</strong> ist der spontane Zerfall instabiler Atomkerne. Dabei entstehen Strahlungen: $\\alpha$ (Heliumkerne), $\\beta$ (Elektronen oder Positronen) und $\\gamma$ (hochenergetische Photonen). Der Zerfall eines einzelnen Kerns ist zufällig, bei einer großen Anzahl von Kernen verhält er sich aber vorhersagbar.</p>`,
        `<p>Die <strong>Halbwertszeit</strong> $T_{1/2}$ ist die Zeit, nach der die Hälfte der ursprünglichen Kerne zerfallen ist. Die Anzahl der unzerfallenen Kerne nach der Zeit $t$ beträgt $N = N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>Warum die Abnahme geometrisch verläuft: Mit jeder Halbwertszeit verringert sich die Menge auf die Hälfte, nicht um einen gleich großen Betrag. Nach der ersten Halbwertszeit bleibt die Hälfte übrig, nach der zweiten ein Viertel. Die Aktivität $A = \\lambda N$ gibt die Anzahl der Zerfälle pro Sekunde an (Einheit Becquerel, $\\text{Bq}$).</p>`,
        `<p><strong>Kernreaktionen</strong> schreiben wir mit einer Bilanz der Nukleonenzahl (oberer Index) und der Protonenzahl (unterer Index): Die Summe auf der linken Seite ist gleich der Summe auf der rechten Seite.</p>`,
        { fig: 's1s4-polcas-rozpadu', caption: "Nach jeder Halbwertszeit sinkt die Anzahl unzerfallener Kerne auf die Hälfte: Die Abnahme ist geometrisch, nicht linear." }
      ],
      examples: [
        { task: 'Ein radioaktives Element hat eine Halbwertszeit von 4 Tagen. Wie viel Prozent der ursprünglichen Menge bleiben nach 8 Tagen übrig?',
          steps: ['In 8 Tagen sind $\\frac{8}{4}=2$ Halbwertszeiten vergangen.', 'Es bleibt $\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}$ der ursprünglichen Menge übrig.', '<strong>Ergebnis: 25 %.</strong>'] },
        { task: 'Der Urankern $^{238}_{92}\\text{U}$ zerfällt durch Alpha-Zerfall. Wie groß sind die Nukleonen- und die Protonenzahl des neuen Kerns?',
          steps: ['Das Alpha-Teilchen ist $^{4}_{2}\\text{He}$, es trägt 4 Nukleonen und 2 Protonen weg.', '$238-4=234$, $92-2=90$.', '<strong>Ergebnis: $^{234}_{90}\\text{Th}$ (Thorium).</strong>'] }
      ]
    },
    's4-jadro': {
      title: 'Kernspaltung und Kernfusion',
      summary: 'Massendefekt und die freigesetzte Energie bei der Spaltung schwerer und der Fusion leichter Kerne.',
      theory: [
        `<p>Ein Kern hat eine kleinere Masse als die Summe der Massen seiner Nukleonen. Der Unterschied ist der <strong>Massendefekt</strong> $\\Delta m$ und entspricht der Bindungsenergie nach der Einstein-Beziehung $\\Delta E = \\Delta m\\,c^2$.</p>`,
        `<p>Messen wir die Masse in atomaren Masseneinheiten ($1\\,\\text{u}$), gilt die praktische Beziehung: Ein Massendefekt von $1\\,\\text{u}$ entspricht einer Energie von etwa $931{,}5\\,\\text{MeV}$.</p>`,
        `<p><strong>Kernspaltung</strong>: Ein schwerer Kern (z. B. Uran-235) zerfällt in zwei mittelschwere Kerne und setzt dabei Energie frei. <strong>Kernfusion</strong>: Leichte Kerne verschmelzen zu einem schwereren Kern, und dabei wird ebenfalls Energie frei. Die Sonne gewinnt ihre Energie durch Fusion von Wasserstoff zu Helium.</p>`,
        `<p>Warum Energie frei wird: Die Kerne sind im Bereich des Eisens am stärksten gebunden. Eine Bewegung in Richtung des Eisens, sei es durch Spaltung eines schweren oder durch Verschmelzung eines leichten Kerns, setzt die Differenz der Bindungsenergien frei.</p>`,
        { fig: 's1s4-vazbova-energia', caption: "Die Bindungsenergie pro Nukleon ist um Eisen am größten, deshalb setzen sowohl die Spaltung schwerer als auch die Fusion leichter Kerne Energie frei." }
      ],
      examples: [
        { task: 'Bei einem Prozess beträgt der Massendefekt $\\Delta m = 0{,}2\\,\\text{u}$. Wie viel MeV werden freigesetzt?',
          steps: ['$\\Delta E = \\Delta m\\cdot 931{,}5\\,\\text{MeV/u}=0{,}2\\cdot 931{,}5\\,\\text{MeV}$.', '<strong>Ergebnis: etwa 186 MeV.</strong>'] },
        { task: 'Bei der Reaktion D + T → He + n betragen die Massen vor der Reaktion zusammen 5,0301 u und nach der Reaktion 5,0113 u. Wie viel MeV werden freigesetzt?',
          steps: ['$\\Delta m = 5{,}0301-5{,}0113=0{,}0188\\,\\text{u}$.', '$\\Delta E = 0{,}0188\\cdot 931{,}5\\approx 17{,}5\\,\\text{MeV}$.', '<strong>Ergebnis: etwa 17,5 MeV.</strong>'] }
      ]
    },
    's4-astrofyzika': {
      title: 'Grundlagen der Astrophysik und Kosmologie',
      summary: 'Entfernung der Sterne durch Parallaxe, das Hubble-Gesetz der Expansion und das Wiensche Verschiebungsgesetz.',
      theory: [
        `<p><strong>Entfernungen im Weltall</strong> messen wir in Lichtjahren oder in Parsec: $1\\,\\text{pc}\\approx 3{,}26\\,\\text{ly}$. Bei der <strong>Parallaxe</strong> erscheint ein Stern am Himmel gegenüber den fernen Sternen verschoben, wenn die Erde um die Sonne kreist. Die Entfernung in Parsec beträgt $d = \\frac{1}{p}$, wobei $p$ die jährliche Parallaxe in Bogensekunden ist.</p>`,
        `<p><strong>Hubble-Gesetz</strong>: Ferne Galaxien entfernen sich von uns mit der Geschwindigkeit $v = H_0\\,d$, wobei $H_0 \\approx 70\\,\\text{km/(s·Mpc)}$ ist. Je weiter die Galaxien entfernt sind, desto schneller entfernen sie sich. Das ist ein Beweis dafür, dass sich das Weltall ausdehnt.</p>`,
        `<p><strong>Wiensches Verschiebungsgesetz</strong>: Die Oberflächentemperatur eines Sterns bestimmt die Wellenlänge, bei der er am stärksten strahlt: $\\lambda_{max} = \\frac{b}{T}$, wobei $b \\approx 2{,}9\\cdot 10^{-3}\\,\\text{m·K}$ ist. Kältere Sterne leuchten rötlich, heißere bläulich.</p>`,
        `<p>Warum das funktioniert: Die Parallaxe beruht auf der Geometrie des Dreiecks Erde–Sonne–Stern, und Hubble stellte fest, dass die Verschiebung der Spektrallinien zum Roten mit der Entfernung wächst. Aus beiden Messungen können wir die Entfernungen und das Alter des Weltalls abschätzen.</p>`,
        { fig: 's1s4-paralaxa', caption: "Parallaxe: Ein Stern erscheint von zwei Punkten der Erdbahn aus gegenüber den ferneren Sternen verschoben. Die Entfernung in Parsec ist d = 1/p." }
      ],
      examples: [
        { task: 'Eine Galaxie entfernt sich von uns mit der Geschwindigkeit 3500 km/s. Wie weit ist sie bei $H_0 = 70\\,\\text{km/(s·Mpc)}$ entfernt?',
          steps: ['$d=\\frac{v}{H_0}=\\frac{3500}{70}\\,\\text{Mpc}$.', '<strong>Ergebnis: 50 Mpc.</strong>'] },
        { task: 'Die Oberfläche eines Sterns hat die Temperatur 5800 K. Bei welcher Wellenlänge strahlt er am stärksten?',
          steps: ['$\\lambda_{max}=\\frac{2{,}9\\cdot 10^{-3}}{5800}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Ergebnis: 500 nm (grüner Bereich).</strong>'] }
      ]
    },
    's4-opakovanie': {
      title: 'Wiederholung von Mechanik, Elektrizität und weiteren Themen',
      summary: 'Wiederhole die wichtigsten Formeln aus Mechanik und Elektrizität und kontrolliere die Einheiten.',
      theory: [
        `<p>Die Wiederholung verbindet Dinge, die du getrennt gelernt hast. Mechanik: $F = m\\,a$, $E_k = \\frac{1}{2}m v^2$, $W = F\\,s$, $P = \\frac{W}{t}$. Elektrizität: $I = \\frac{Q}{t}$, $U = R\\,I$, $P = U\\,I$. Finde immer zuerst heraus, was gegeben ist und was gesucht wird, und wähle erst danach die Formel aus.</p>`,
        `<p><strong>Kontrolle der Einheiten:</strong> Kraft in Newton ($\\text{N} = \\text{kg·m/s}^2$), Energie in Joule, Spannung in Volt. Stimmen die Einheiten auf beiden Seiten nicht überein, liegt der Fehler im Rechenweg.</p>`,
        `<p><strong>Häufige Fehler:</strong> Vergiss nicht den Faktor $\\frac{1}{2}$ und das Quadrat der Geschwindigkeit bei der kinetischen Energie; rechne km/h in m/s um, indem du durch $3{,}6$ teilst; bei der Parallelschaltung addiere die Kehrwerte der Widerstände.</p>`,
        `<p>Warum das hilft: Die Physik ist ein einziges System von Gesetzen. Die Energie bleibt über alle Bereiche hinweg erhalten. Zum Beispiel wird elektrische Energie im Motor in mechanische umgewandelt, sodass dieselbe Denkweise überall funktioniert.</p>`
      ],
      examples: [
        { task: 'Ein Auto mit der Masse 1000 kg fährt mit 20 m/s. Wie groß ist seine kinetische Energie?',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 1000\\cdot 20^2$.', '$=\\frac{1}{2}\\cdot 1000\\cdot 400=200\\,000\\,\\text{J}$.', '<strong>Ergebnis: 200 kJ.</strong>'] },
        { task: 'Ein Verbraucher hat die Spannung 12 V und den Widerstand 4 Ω. Welcher Strom fließt durch ihn?',
          steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Ergebnis: 3 A.</strong>'] }
      ]
    },
    's4-maturita': {
      title: 'Vorbereitung auf die Matura, besonders bei Physik als Wahlfach',
      summary: 'Vorgehen beim Lösen von Aufgaben, Einheiten, Abschätzung des Ergebnisses und Runden.',
      theory: [
        `<p>In der Matura aus Physik verliert man die meisten Punkte wegen <strong>falscher Einheiten</strong> und Einsetzens ohne Kontrolle. Ein bewährtes Vorgehen: Schreibe die gegebenen Größen auf, schreibe die gesuchte Größe auf, wähle die Formel, wandle die Einheiten ins SI um und erst dann rechne.</p>`,
        `<ol><li>Schreibe die gegebenen und die gesuchten Größen auf.</li><li>Wähle die Formel und prüfe, ob sie für diesen Vorgang gilt.</li><li>Wandle die Einheiten ins SI um.</li>
         <li>Rechne und runde erst am Ende.</li><li>Kontrolliere die Einheit und die Größenordnung des Ergebnisses.</li></ol>`,
        `<p><strong>Kontrolle des Ergebnisses:</strong> Prüfe, ob die Größenordnung vernünftig ist (die Geschwindigkeit eines Autos kann nicht $10^{6}\\,\\text{m/s}$ betragen), ob das Vorzeichen stimmt und ob das Ergebnis die richtige Einheit hat. Eine schnelle Abschätzung vor der Rechnung erspart dir Fehler beim Dezimalkomma.</p>`,
        `<p><strong>Runden:</strong> Rechne mit voller Genauigkeit und runde erst am Ende auf die Anzahl der gültigen Ziffern der Aufgabe (meist 2 oder 3). Rundung in Zwischenschritten verschiebt das Ergebnis.</p>`,
        `<p>Warum das hilft: Die Matura-Aufgabe bewertet die Art des Denkens und nicht nur die Zahl. Richtige Einheiten und Kontrolle zeigen das Verständnis, auch wenn du dich bei der Rechnung um einen kleinen Wert vertust.</p>`
      ],
      examples: [
        { task: 'Ein Körper mit der Masse 2 kg hat die Geschwindigkeit 36 km/h. Wie groß ist seine kinetische Energie?',
          steps: ['Wandle die Einheiten um: $v = 36\\,\\text{km/h}=10\\,\\text{m/s}$.', '$E_k=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 10^2=100\\,\\text{J}$.', '<strong>Ergebnis: 100 J.</strong>'] },
        { task: 'Eine Kraft von 500 N wirkt auf eine Fläche von 25 cm². Welcher Druck entsteht in kPa?',
          steps: ['Wandle die Fläche um: $S=25\\,\\text{cm}^2=25\\cdot 10^{-4}\\,\\text{m}^2$.', '$p=\\frac{F}{S}=\\frac{500}{25\\cdot 10^{-4}}\\,\\text{Pa}=2\\cdot 10^{5}\\,\\text{Pa}$.', '<strong>Ergebnis: 200 kPa.</strong>'] }
      ]
    }
  }
});
