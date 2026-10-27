/* Deutsch: Lektionen der Klassen 7 bis 9 (js/rocniky/r7.js, r8.js, r9.js). Struktur und Schlüssel: js/content-i18n.js. */
CONTENT_I18N.add('de', {
  lessons: {
    'r7-pohyb': {
      title: 'Bewegung von Körpern und ihre Beschreibung',
      summary: 'Bewegung und Ruhe sind relativ und hängen vom Bezugssystem ab.',
      theory: [
        `<p>Bewegung und Ruhe sind <strong>relativ</strong>: Sie hängen davon ab, worauf wir sie beziehen. Der Körper, auf den wir eine Bewegung beziehen, heißt
       <strong>Bezugskörper</strong>. Zusammen mit Uhren bildet er ein <strong>Bezugssystem</strong>.</p>`,
        `<p>Ein Fahrgast, der in einem fahrenden Zug sitzt, ruht relativ zum Zug, bewegt sich aber relativ zu den Bäumen an der Strecke. Beide Aussagen sind wahr,
       jede jedoch in einem anderen Bezugssystem. Deshalb sagen wir bei der Beschreibung einer Bewegung immer dazu, worauf wir sie beziehen.</p>`,
        `<ul>
         <li><strong>Bahnkurve</strong>: die Linie, die ein Körper bei seiner Bewegung beschreibt.</li>
         <li><strong>Weg</strong> $s$: die Länge der Bahnkurve zwischen zwei Orten. Er wird in Metern gemessen.</li>
         <li><strong>Massepunkt</strong>: ein Körper, dessen Abmessungen bei der Beschreibung der Bewegung vernachlässigt werden.</li>
       </ul>`,
        `<p>Der Weg ist die Länge der ganzen Strecke, nicht der Abstand zwischen Anfang und Ende. Gehen wir 3 m nach Osten und dann 4 m nach Norden,
       ist der Weg $7\\,\\text{m}$, obwohl der Abstand vom Start nur $5\\,\\text{m}$ beträgt.</p>`,
        { fig: 'obr-draha', caption: 'Der Weg ist die ganze Strecke, der Abstand ist die gerade Verbindung zwischen Anfang und Ende.' }
      ],
      examples: [
        { task: 'Ein Fahrgast sitzt in einem schnellen Zug. Ist er in Ruhe oder in Bewegung?',
          steps: ['Relativ zum Zug, in dem er sitzt, bewegt er sich nicht.', 'Relativ zu den Bäumen an der Strecke bewegt er sich.', '<strong>Ergebnis: in Ruhe relativ zum Zug, in Bewegung relativ zur Umgebung.</strong>'] },
        { task: 'Ein Fußgänger ist 3 m nach Osten und dann 4 m nach Norden gegangen. Wie groß ist sein Weg?',
          steps: ['Der Weg ist die Länge der ganzen Strecke, also addieren wir beide Abschnitte.', '$s = 3\\,\\text{m} + 4\\,\\text{m} = 7\\,\\text{m}$', '<strong>Ergebnis: 7 m</strong>'] }
      ]
    },
    'r7-draha': {
      title: 'Weg, Zeit und mittlere Geschwindigkeit',
      summary: 'Berechnen von Geschwindigkeit, Weg und Zeit sowie Umrechnen zwischen m/s und km/h.',
      theory: [
        `<p><strong>Die Geschwindigkeit</strong> gibt an, welchen Weg ein Körper in einer Zeiteinheit zurücklegt. Formel: $v=\\frac{s}{t}$, wobei $s$ der Weg und $t$ die Zeit ist.
       Die SI-Einheit ist $\\text{m/s}$; im Straßenverkehr verwendet man $\\text{km/h}$.</p>`,
        `<p>Aus dieser Formel leiten wir zwei weitere ab: $s=v\\cdot t$ und $t=\\frac{s}{v}$. Vor jeder Rechnung prüfen wir immer die Einheiten.
       Ist der Weg in Kilometern und die Zeit in Minuten angegeben, müssen wir eine der Größen umrechnen.</p>`,
        `<ul>
         <li>$1\\,\\text{m/s}=3{,}6\\,\\text{km/h}$: Von Metern pro Sekunde zu Kilometern pro Stunde multiplizieren wir mit $3{,}6$.</li>
         <li>$1\\,\\text{km/h}=\\frac{1}{3{,}6}\\,\\text{m/s}$: Von Kilometern pro Stunde zu Metern pro Sekunde dividieren wir durch $3{,}6$.</li>
       </ul>`,
        `<p><strong>Die mittlere Geschwindigkeit</strong> ist nicht gleich dem Mittelwert der Geschwindigkeiten. Sie wird als gesamter Weg geteilt durch die gesamte Zeit berechnet:
       $v_p=\\frac{s_{\\text{celk}}}{t_{\\text{celk}}}$. Hält ein Auto auf einem Teil der Strecke an, ist seine mittlere Geschwindigkeit kleiner als seine höchste Geschwindigkeit.</p>`,
        { fig: 'obr-draha', caption: 'Der Weg ist die ganze Strecke, der Abstand ist die gerade Verbindung zwischen Anfang und Ende.' }
      ],
      examples: [
        { task: 'Ein Auto legt $120\\,\\text{km}$ in $2\\,\\text{h}$ zurück. Wie groß war seine mittlere Geschwindigkeit?',
          steps: ['$v=\\frac{s}{t}=\\frac{120}{2}$', '$v=60\\,\\text{km/h}$', '<strong>Ergebnis: 60 km/h</strong>'] },
        { task: 'Ein Radfahrer fährt mit $5\\,\\text{m/s}$. Wie groß ist diese Geschwindigkeit in $\\text{km/h}$?',
          steps: ['Von m/s zu km/h rechnen wir durch Multiplikation mit 3,6 um.', '$5\\cdot 3{,}6=18\\,\\text{km/h}$', '<strong>Ergebnis: 18 km/h</strong>'] }
      ]
    },
    'r7-rovnomerny': {
      title: 'Gleichförmige und ungleichförmige Bewegung',
      summary: 'Wann sich die Geschwindigkeit nicht ändert und wie man eine Bewegung mit veränderlicher Geschwindigkeit berechnet.',
      theory: [
        `<p><strong>Gleichförmige Bewegung</strong>: Ein Körper legt in jedem gleich langen Zeitabschnitt die gleiche Strecke zurück, seine Geschwindigkeit ändert sich also nicht.
       Im Weg-Zeit-Diagramm ist das eine Gerade, und ihre Steigung entspricht der Geschwindigkeit.</p>`,
        `<p><strong>Ungleichförmige Bewegung</strong>: Die Geschwindigkeit ändert sich, der Körper wird schneller oder langsamer. Ein Beispiel ist ein anfahrender Zug oder ein zu Boden fallender Stein.</p>`,
        `<p>Bei gleichförmiger Bewegung gilt die Formel $s=v\\cdot t$, wobei $v$ die konstante Geschwindigkeit ist. Bei ungleichförmiger Bewegung können wir die
       <strong>mittlere Geschwindigkeit</strong> verwenden: gesamter Weg geteilt durch gesamte Zeit. Sie zeigt aber nur das Gesamtergebnis, nicht, wie sich die Geschwindigkeit geändert hat.</p>`,
        `<ol>
         <li>Legt ein Körper in gleichen Zeiten gleiche Wege zurück, ist die Bewegung gleichförmig.</li>
         <li>Ändern sich die Wege in gleichen Zeiten, ist die Bewegung ungleichförmig.</li>
         <li>Die mittlere Geschwindigkeit berechnen wir nie als Mittelwert zweier Geschwindigkeiten.</li>
       </ol>`,
        { fig: 'r6r9-rovnomerny', caption: 'Bei gleichförmiger Bewegung ist das Weg-Zeit-Diagramm eine Gerade, und ihre Steigung ist die Geschwindigkeit. Beim Beschleunigen ist es eine Kurve.' }
      ],
      examples: [
        { task: 'Ein Fußgänger geht mit konstanter Geschwindigkeit $4\\,\\text{km/h}$. Welche Strecke legt er in $3\\,\\text{h}$ zurück?',
          steps: ['Die Bewegung ist gleichförmig, daher $s=v\\cdot t$.', '$s=4\\cdot 3=12\\,\\text{km}$', '<strong>Ergebnis: 12 km</strong>'] },
        { task: 'Ein Körper legt jede Sekunde 5 m zurück. Welche Art von Bewegung ist das, und welche Strecke legt er in 6 s zurück?',
          steps: ['In gleichen Zeiten legt er gleiche Wege zurück, die Bewegung ist also gleichförmig.', '$s = 5\\cdot 6 = 30\\,\\text{m}$', '<strong>Ergebnis: gleichförmige Bewegung, 30 m</strong>'] }
      ]
    },
    'r7-sila': {
      title: 'Kraft und ihre Wirkungen',
      summary: 'Was eine Kraft ist, welche Wirkungen sie hat und wie Kräfte mit gleicher oder entgegengesetzter Richtung addiert werden.',
      theory: [
        `<p><strong>Die Kraft</strong> ist die gegenseitige Wechselwirkung von Körpern. Die Kraft sehen wir nicht, wir sehen ihre Wirkungen. Sie wird mit $F$ bezeichnet, ihre Einheit ist das Newton: $1\\,\\text{N}$.</p>`,
        `<ul>
         <li>Sie kann die <strong>Geschwindigkeit</strong> eines Körpers ändern: ihn in Bewegung setzen, abbremsen oder anhalten.</li>
         <li>Sie kann die <strong>Bewegungsrichtung</strong> ändern, zum Beispiel wenn ein Fahrrad um eine Kurve fährt.</li>
         <li>Sie kann die <strong>Form</strong> eines Körpers ändern: einen Schwamm zusammendrücken oder ein Gummiband dehnen.</li>
       </ul>`,
        `<p>Die Kraft ist ein <strong>Vektor</strong>: Sie hat einen Betrag, eine Richtung und einen Angriffspunkt. Wir zeichnen sie als Pfeil. Wirken Kräfte auf einen Körper in die gleiche Richtung,
       addieren wir sie. Wirken sie in entgegengesetzte Richtungen, subtrahieren wir die kleinere von der größeren, und die resultierende Kraft hat die Richtung der größeren.</p>`,
        `<p>Kräfte treten immer paarweise auf: Drückt eine Hand gegen eine Wand, drückt die Wand mit gleich großer Kraft in entgegengesetzter Richtung zurück.
       Diese beiden Kräfte wirken jedoch auf verschiedene Körper, daher heben sie sich nicht auf.</p>`,
        { fig: 'obr-sily', caption: 'Kräfte auf einen Körper auf waagerechter Unterlage: Zugkraft F, Reibungskraft Ftr und Normalkraft N der Unterlage.' }
      ],
      examples: [
        { task: 'Zwei Schüler ziehen einen Wagen in die gleiche Richtung mit den Kräften $30\\,\\text{N}$ und $20\\,\\text{N}$. Wie groß ist die resultierende Kraft?',
          steps: ['Die Kräfte haben die gleiche Richtung, daher addieren wir sie.', '$30 + 20 = 50$', '<strong>Ergebnis: 50 N</strong>'] },
        { task: 'Den gleichen Wagen zieht der erste Schüler mit $30\\,\\text{N}$ nach rechts und der zweite mit $20\\,\\text{N}$ nach links. Wie groß ist die resultierende Kraft?',
          steps: ['Die Kräfte haben entgegengesetzte Richtungen, daher subtrahieren wir sie.', '$30 - 20 = 10$, die resultierende Kraft zeigt nach rechts.', '<strong>Ergebnis: 10 N nach rechts</strong>'] }
      ]
    },
    'r7-tiaz': {
      title: 'Gravitationskraft und Gewichtskraft',
      summary: 'Warum auf der Erde Körper fallen und wie sich Masse von Gewichtskraft unterscheidet.',
      theory: [
        `<p>Alle Körper ziehen sich gegenseitig mit einer <strong>Gravitationskraft</strong> an. Je größer die Massen und je näher die Körper sind, desto größer ist die Anziehungskraft.
       Die Schwerkraft der Erde hält uns auf ihrer Oberfläche, und der Mond kreist um die Erde.</p>`,
        `<p><strong>Die Gewichtskraft</strong> $F_G$ ist die Kraft, mit der die Erde einen Körper zu sich zieht. Berechnen lässt sie sich mit der Formel $F_G=m\\cdot g$, wobei $m$ die Masse in Kilogramm
       und $g$ die Fallbeschleunigung ist. Auf der Erde ist $g\\approx 10\\,\\text{N/kg}$ (genauer $9{,}81\\,\\text{N/kg}$).</p>`,
        `<p><strong>Masse und Gewichtskraft sind nicht dasselbe.</strong> Die Masse in Kilogramm gibt an, wie viel Stoff ein Körper enthält, und sie ist überall gleich.
       Die Gewichtskraft in Newton hängt vom Ort ab. Auf dem Mond ist $g\\approx 1{,}6\\,\\text{N/kg}$, daher wiegt ein Körper mit der Masse $5\\,\\text{kg}$ dort etwa $8\\,\\text{N}$.</p>`,
        `<ul>
         <li>Die Gewichtskraft ist eine Kraft, sie wird mit dem Federkraftmesser in Newton gemessen.</li>
         <li>Die Masse messen wir mit der Waage in Kilogramm.</li>
       </ul>`,
        { fig: 'r6r9-tiaz', caption: 'Dieselbe Masse hat auf dem Mond eine kleinere Gewichtskraft, weil dort die Fallbeschleunigung kleiner ist.' }
      ],
      examples: [
        { task: 'Wie groß ist die Gewichtskraft eines Körpers mit der Masse $4\\,\\text{kg}$ auf der Erde? Verwende $g=10\\,\\text{N/kg}$.',
          steps: ['$F_G=m\\cdot g$', '$F_G=4\\cdot 10=40\\,\\text{N}$', '<strong>Ergebnis: 40 N</strong>'] },
        { task: 'Ein Körper hat auf der Erde eine Gewichtskraft von $60\\,\\text{N}$. Wie groß ist seine Masse?',
          steps: ['$m=\\frac{F_G}{g}$', '$m=\\frac{60}{10}=6\\,\\text{kg}$', '<strong>Ergebnis: 6 kg</strong>'] }
      ]
    },
    'r7-trenie': {
      title: 'Reibung und Widerstand des Mediums',
      summary: 'Wann die Reibung größer ist, wie man sie vergrößern oder verkleinern kann und was Körper in Flüssigkeiten bremst.',
      theory: [
        `<p><strong>Reibung</strong> entsteht an der Berührungsfläche zweier Körper und wirkt der Bewegung oder dem Versuch zur Bewegung entgegen. Deshalb bleibt eine Kiste,
       die wir über den Boden schieben, stehen, sobald wir aufhören zu drücken.</p>`,
        `<ul>
         <li>Die Reibung ist größer, je rauer die Oberflächen sind.</li>
         <li>Die Reibung ist größer, je stärker ein Körper auf seine Unterlage drückt.</li>
         <li>Die Reibung hängt nicht von der Größe der Berührungsfläche ab.</li>
       </ul>`,
        `<p><strong>Der Widerstand des Mediums</strong> (Luft, Wasser) bremst die Bewegung eines Körpers. Er hängt von der Form des Körpers, von seiner Geschwindigkeit
       und von der Dichte des Mediums ab. Ein Fallschirm hat einen großen Luftwiderstand, deshalb sinkt er langsam. Ein Schwimmer mit stromlinienförmigem Körper spürt vom Wasser einen kleineren Widerstand.</p>`,
        `<p>Manchmal wollen wir die Reibung vergrößern, zum Beispiel bei Autoreifen auf der Straße oder beim Gehen. Manchmal wollen wir sie verkleinern, zum Beispiel in Lagern.
       Schmiermittel bildet zwischen den Oberflächen eine dünne Schicht und verringert so die Reibung.</p>`,
        { fig: 'obr-sily', caption: 'Kräfte auf einen Körper auf waagerechter Unterlage: Zugkraft F, Reibungskraft Ftr und Normalkraft N der Unterlage.' }
      ],
      examples: [
        { task: 'Einen Schrank zieht eine Kraft von $300\\,\\text{N}$ in Bewegungsrichtung, und eine Reibung von $120\\,\\text{N}$ wirkt der Bewegung entgegen. Wie groß ist die resultierende Kraft in Bewegungsrichtung?',
          steps: ['Die Reibung wirkt der Bewegung entgegen, daher subtrahieren wir sie.', '$300-120=180$', '<strong>Ergebnis: 180 N</strong>'] },
        { task: 'Welche Maßnahme vergrößert die Reibung: Winterreifen oder Schmiermittel in einem Lager?',
          steps: ['Winterreifen haben eine rauere Oberfläche, die Reibung wird größer.', 'Schmiermittel zwischen den Oberflächen verringert die Reibung.', '<strong>Ergebnis: Winterreifen</strong>'] }
      ]
    },
    'r7-svetlo': {
      title: 'Licht und seine Ausbreitung',
      summary: 'Geradlinige Ausbreitung des Lichts, Lichtgeschwindigkeit, Schatten und Finsternisse.',
      theory: [
        `<p>Licht ist elektromagnetische Strahlung, die wir mit den Augen wahrnehmen. Eine Lichtquelle sendet Licht in alle Richtungen aus.
       Einen Körper, der selbst kein Licht aussendet, sehen wir, weil er Licht in unsere Augen reflektiert.</p>`,
        `<p>In einem gleichbleibenden Medium breitet sich Licht <strong>geradlinig</strong> aus. Deshalb entsteht hinter einem undurchsichtigen Gegenstand ein Schatten:
       Der Gegenstand verdeckt das Licht hinter sich. Eine große Lichtquelle erzeugt außerdem einen Halbschatten, in dem nur ein Teil der Quelle sichtbar ist.</p>`,
        `<p>Die Lichtgeschwindigkeit im Vakuum beträgt $c=300\\,000\\,\\text{km/s}$, das sind $3\\cdot 10^8\\,\\text{m/s}$. In Luft ist sie fast gleich,
       in Wasser und Glas ist sie kleiner. Licht vom Mond erreicht uns in etwa $1{,}3\\,\\text{s}$, Licht von der Sonne in etwa 8 Minuten.</p>`,
        `<p>Eine Sonnenfinsternis tritt ein, wenn sich der Mond zwischen Sonne und Erde schiebt und seinen Schatten auf die Erde wirft. Eine Mondfinsternis tritt ein,
       wenn sich die Erde zwischen Sonne und Mond befindet.</p>`,
        { fig: 'r6r9-zatmenie', caption: 'Bei einer Sonnenfinsternis steht der Mond zwischen Sonne und Erde und wirft seinen Schatten auf die Erde.' }
      ],
      examples: [
        { task: 'Licht breitet sich mit $300\\,000\\,\\text{km/s}$ aus. Welche Strecke legt es in $10\\,\\text{s}$ zurück?',
          steps: ['$s=c\\cdot t$', '$s=300\\,000\\cdot 10=3\\,000\\,000\\,\\text{km}$', '<strong>Ergebnis: 3 000 000 km</strong>'] },
        { task: 'Warum entsteht hinter einem Baum in der Sonne ein Schatten?',
          steps: ['Der Baum ist undurchsichtig und das Licht breitet sich geradlinig aus.', 'Das Licht kann nicht durch den Baum gelangen, daher bleibt es dahinter dunkel.', '<strong>Ergebnis: Der Baum verdeckt das Licht, weil sich Licht geradlinig ausbreitet</strong>'] }
      ]
    },
    'r7-odraz': {
      title: 'Reflexion und Brechung des Lichts',
      summary: 'Das Reflexionsgesetz, Winkel gemessen vom Lot und die Knickung des Lichtstrahls beim Übergang in ein anderes Medium.',
      theory: [
        `<p>Ein Lichtstrahl trifft auf die Grenzfläche zweier Medien. Ein Teil wird zurückgeworfen, ein Teil geht in das zweite Medium über.
       Winkel messen wir immer vom <strong>Lot</strong>, also von der Senkrechten zur Oberfläche, nicht von der Oberfläche selbst.</p>`,
        `<p><strong>Reflexionsgesetz:</strong> Der Einfallswinkel $\\alpha$ ist gleich dem Reflexionswinkel $\\beta$, also $\\alpha=\\beta$.
       Der reflektierte Strahl liegt in der Ebene, die der einfallende Strahl und das Lot bilden.</p>`,
        `<ul>
         <li>Beim Übergang in ein Medium, in dem sich das Licht langsamer ausbreitet (z. B. von Luft in Wasser), wird der Strahl <strong>zum Lot hin</strong> gebrochen.</li>
         <li>Beim Übergang in ein Medium, in dem sich das Licht schneller ausbreitet (z. B. von Wasser in Luft), wird der Strahl <strong>vom Lot weg</strong> gebrochen.</li>
       </ul>`,
        `<p>Deshalb wirkt ein Bleistift, der in ein Glas Wasser gesteckt wird, geknickt, und der Grund eines Schwimmbeckens erscheint flacher, als er tatsächlich ist.</p>`,
        { fig: 'obr-odraz', caption: 'Bei der Reflexion von Licht an einem ebenen Spiegel gilt das Reflexionsgesetz.' }
      ],
      examples: [
        { task: 'Ein Strahl trifft so auf einen ebenen Spiegel, dass er mit dem Lot den Winkel $35^\\circ$ bildet. Welchen Winkel bildet der reflektierte Strahl mit dem Lot?',
          steps: ['Nach dem Reflexionsgesetz ist der Reflexionswinkel gleich dem Einfallswinkel.', '$\\beta=\\alpha=35^\\circ$', '<strong>Ergebnis: 35°</strong>'] },
        { task: 'Ein Strahl trifft so auf einen Spiegel, dass er mit der Spiegeloberfläche den Winkel $60^\\circ$ bildet. Wie groß ist der Einfallswinkel, gemessen vom Lot?',
          steps: ['Winkel werden vom Lot gemessen, nicht von der Oberfläche.', '$\\alpha = 90^\\circ - 60^\\circ = 30^\\circ$', '<strong>Ergebnis: 30°</strong>'] }
      ]
    },
    'r7-zrkadla': {
      title: 'Spiegel, Linsen und optische Erscheinungen',
      summary: 'Das Bild im ebenen Spiegel, Sammel- und Zerstreuungslinsen sowie Erscheinungen wie der Regenbogen oder die Fata Morgana.',
      theory: [
        `<p>Ein <strong>ebener Spiegel</strong> erzeugt ein scheinbares (virtuelles) Bild: Wir sehen es hinter dem Spiegel, und es lässt sich nicht auf einem Schirm auffangen.
       Das Bild ist gleich groß, aufrecht und genauso weit hinter dem Spiegel, wie der Gegenstand davor steht.</p>`,
        `<p>Stehst du $2\\,\\text{m}$ vor einem Spiegel, ist dein Bild $4\\,\\text{m}$ von dir entfernt. Der Abstand zwischen Gegenstand und Bild
       ist also doppelt so groß wie der Abstand des Gegenstands vom Spiegel.</p>`,
        `<p><strong>Linsen</strong> brechen das Licht. Eine <strong>Sammellinse</strong> ist in der Mitte dicker und bündelt parallele Strahlen in einem Punkt (dem Brennpunkt).
       Eine <strong>Zerstreuungslinse</strong> ist in der Mitte dünner und zerstreut die Strahlen. Sammellinsen verwendet man in Lupen, Fotoapparaten und Brillen gegen Weitsichtigkeit.</p>`,
        `<p><strong>Optische Erscheinungen:</strong> Ein Regenbogen entsteht, wenn sich weißes Licht in Wassertropfen in Farben zerlegt. Eine Fata Morgana entsteht durch Brechung des Lichts
       in warmer Luft über einer heißen Straßenoberfläche, sodass wir das Spiegelbild des Himmels sehen, als läge Wasser auf dem Boden.</p>`,
        { fig: 'r6r9-zrkadlo', caption: 'Das Bild im ebenen Spiegel ist scheinbar und genauso weit hinter dem Spiegel, wie der Gegenstand davor steht.' }
      ],
      examples: [
        { task: 'Ein Gegenstand steht $3\\,\\text{m}$ vor einem ebenen Spiegel. Wie groß ist der Abstand zwischen dem Gegenstand und seinem Bild?',
          steps: ['Das Bild liegt hinter dem Spiegel genauso weit entfernt, wie der Gegenstand davor steht.', '$3\\,\\text{m}+3\\,\\text{m}=6\\,\\text{m}$', '<strong>Ergebnis: 6 m</strong>'] },
        { task: 'Welche Linse bündelt parallele Strahlen in einem Punkt?',
          steps: ['Eine Linse, die Strahlen in einem Punkt bündelt, ist in der Mitte dicker.', 'Eine Linse, die in der Mitte dicker ist, ist eine Sammellinse.', '<strong>Ergebnis: eine Sammellinse</strong>'] }
      ]
    },
    'r8-praca': {
      title: 'Mechanische Arbeit und Leistung',
      summary: 'Wann eine Kraft Arbeit verrichtet, wie man sie berechnet und wie schnell sie verrichtet wird.',
      theory: [
        `<p><strong>Mechanische Arbeit</strong> wird verrichtet, wenn eine Kraft auf einen Körper wirkt und sich der Körper in Richtung dieser Kraft bewegt.
       Bewegen wir den Körper nicht, ist die Arbeit null: Gegen eine Wand zu drücken verrichtet keine Arbeit.</p>`,
        `<p>Die Arbeit berechnen wir mit der Formel $W = F\\cdot s$, wobei $F$ die Kraft in Newton (N) und $s$ der Weg in Metern (m) ist.
       Die Einheit der Arbeit ist das <strong>Joule</strong> (J): $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$.</p>`,
        `<p><strong>Die Leistung</strong> gibt an, wie schnell Arbeit verrichtet wird. Sie wird als Arbeit geteilt durch Zeit berechnet: $P = \\frac{W}{t}$,
       wobei $t$ die Zeit in Sekunden ist. Die Einheit der Leistung ist das <strong>Watt</strong> (W): $1\\,\\text{W} = 1\\,\\text{J/s}$.
       Zwei Motoren können die gleiche Arbeit verrichten, aber der stärkere schafft sie in kürzerer Zeit.</p>`,
        `<ol>
         <li>Ermittle Kraft und Weg in den Einheiten N und m.</li>
         <li>Multipliziere sie: $W = F\\cdot s$.</li>
         <li>Wird die Leistung verlangt, teile das Ergebnis durch die Zeit: $P = W : t$.</li>
       </ol>`,
        { fig: 'r6r9-praca', caption: 'Arbeit wird nur verrichtet, wenn sich der Körper in Richtung der Kraft bewegt. Gegen eine Wand zu drücken, die sich nicht bewegt, verrichtet keine Arbeit.' }
      ],
      examples: [
        { task: 'Zwei Jungen schieben einen Wagen mit der Kraft $F = 150\\,\\text{N}$ und verschieben ihn um $s = 8\\,\\text{m}$. Welche Arbeit wird verrichtet?',
          steps: ['Wir setzen in die Formel ein: $W = F\\cdot s = 150\\cdot 8$.', '<strong>Ergebnis: W = 1200 J</strong>'] },
        { task: 'Ein Hebemotor verrichtet die Arbeit $W = 3000\\,\\text{J}$ in $t = 20\\,\\text{s}$. Wie groß ist seine Leistung?',
          steps: ['$P = \\frac{W}{t} = \\frac{3000}{20}$.', '<strong>Ergebnis: P = 150 W</strong>'] }
      ]
    },
    'r8-mechanicka-energia': {
      title: 'Mechanische Energie und ihre Umwandlungen',
      summary: 'Energie ist die Fähigkeit, Arbeit zu verrichten, und sie wandelt sich von einer Form in eine andere um.',
      theory: [
        `<p><strong>Die Energie</strong> ist die Fähigkeit eines Körpers, Arbeit zu verrichten. Sie wird mit $E$ bezeichnet, und ihre Einheit ist dieselbe wie bei der Arbeit: das Joule (J).
       Energie kann weder aus dem Nichts erzeugt noch vernichtet werden. Sie lässt sich nur von einer Form in eine andere umwandeln.</p>`,
        `<p><strong>Energieerhaltungssatz:</strong> Die Gesamtenergie eines abgeschlossenen Systems ändert sich nicht. Nimmt eine Energieform ab,
       so nimmt eine andere Form um denselben Betrag zu.</p>`,
        `<ul>
         <li>Ein aus der Höhe fallender Stein: Lageenergie wird in Bewegungsenergie umgewandelt.</li>
         <li>Ein Pendel, das wieder nach oben schwingt: Bewegungsenergie wird zurück in Lageenergie umgewandelt.</li>
         <li>Ein Auto mit Bremsen: Bewegungsenergie wird in innere Energie (Wärme) umgewandelt.</li>
       </ul>`,
        `<p>Durch Reibung wird immer ein Teil der mechanischen Energie in Wärme umgewandelt. Die Energie geht dabei nicht verloren, sie verteilt sich nur in der Umgebung
       und lässt sich schwer nutzen.</p>`,
        { fig: 'obr-energia', caption: 'Beim Gleiten ohne Reibung wandelt sich Lageenergie in Bewegungsenergie um und wieder zurück.' }
      ],
      examples: [
        { task: 'Was passiert mit der Energie, wenn ein Buch vom Tisch auf den Boden fällt?',
          steps: ['Auf dem Tisch hat das Buch Lageenergie. Während des Falls bewegt es sich, besitzt also Bewegungsenergie.', 'Beim Aufprall wird ein Teil der Energie in Schall und Wärme umgewandelt.', '<strong>Ergebnis: Lageenergie wird in Bewegungsenergie, Schallenergie und Wärme umgewandelt.</strong>'] },
        { task: 'Welche Energieumwandlung findet beim Bremsen eines Fahrrads statt?',
          steps: ['Das Fahrrad bewegt sich, es besitzt Bewegungsenergie.', 'Die Bremsen erzeugen durch Reibung an der Felge Wärme.', '<strong>Ergebnis: Bewegungsenergie wird in innere Energie (Wärme) umgewandelt.</strong>'] }
      ]
    },
    'r8-polohova-pohybova': {
      title: 'Lage- und Bewegungsenergie',
      summary: 'Berechnen der Energie eines Körpers in der Höhe und in Bewegung.',
      theory: [
        `<p><strong>Lageenergie</strong> besitzt ein Körper, der über den Boden angehoben ist. Je schwerer und höher er ist, desto mehr Energie hat er.
       Sie berechnet sich als $E_p = m\\cdot g\\cdot h$, wobei $m$ die Masse in Kilogramm, $g \\approx 10\\,\\text{m/s}^2$ die Fallbeschleunigung
       und $h$ die Höhe in Metern ist.</p>`,
        `<p><strong>Bewegungsenergie</strong> (kinetische Energie) besitzt ein Körper, der sich bewegt. Sie berechnet sich als $E_k = \\frac{1}{2}\\,m\\,v^2$,
       wobei $v$ die Geschwindigkeit in m/s ist. Die Geschwindigkeit wird quadriert, daher bedeutet die doppelte Geschwindigkeit die vierfache Bewegungsenergie.</p>`,
        `<p>Diese Energien hängen von Masse, Höhe und Geschwindigkeit ab, nicht von der Form des Körpers. Deshalb lässt sich ein Auto bei höherer Geschwindigkeit schwerer anhalten:
       Es besitzt deutlich mehr Bewegungsenergie.</p>`,
        `<ol>
         <li>Ermittle die Masse in kg, die Höhe in m oder die Geschwindigkeit in m/s.</li>
         <li>Wähle die Formel danach, ob der Körper hoch steht oder sich bewegt.</li>
         <li>Setze ein und berechne; das Ergebnis ist in Joule.</li>
       </ol>`,
        { fig: 'r6r9-kinetika', caption: 'Die Bewegungsenergie wächst mit dem Quadrat der Geschwindigkeit: doppelte Geschwindigkeit bedeutet vierfache Energie.' }
      ],
      examples: [
        { task: 'Ein Stein mit der Masse $m = 2\\,\\text{kg}$ liegt auf dem Dach eines $h = 5\\,\\text{m}$ hohen Gebäudes. Wie groß ist seine Lageenergie bei $g = 10\\,\\text{m/s}^2$?',
          steps: ['$E_p = m\\cdot g\\cdot h = 2\\cdot 10\\cdot 5$.', '<strong>Ergebnis: E_p = 100 J</strong>'] },
        { task: 'Ein Wagen mit der Masse $m = 4\\,\\text{kg}$ bewegt sich mit der Geschwindigkeit $v = 3\\,\\text{m/s}$. Wie groß ist seine Bewegungsenergie?',
          steps: ['$E_k=\\frac{1}{2}\\,m\\,v^2=\\frac{1}{2}\\cdot 4\\cdot 3^2$.', '$\\frac{1}{2}\\cdot 4 = 2$ und $3^2 = 9$, also $E_k = 2\\cdot 9$.', '<strong>Ergebnis: E_k = 18 J</strong>'] }
      ]
    },
    'r8-jednoduche-stroje': {
      title: 'Einfache Maschinen',
      summary: 'Hebel, Rolle und schiefe Ebene erleichtern die Arbeit, verringern aber nicht die Arbeit selbst.',
      theory: [
        `<p><strong>Einfache Maschinen</strong> (Hebel, Rolle, schiefe Ebene) ermöglichen es, eine größere Last mit einer kleineren Kraft zu heben.
       Es gilt jedoch die goldene Regel der Mechanik: Arbeit lässt sich nicht sparen. Eine kleinere Kraft erkauft man sich mit einem längeren Weg.</p>`,
        `<p>Ein <strong>Hebel</strong> ist ein Stab, der sich um eine Achse dreht. Der Abstand der Kraft von der Achse ist der <em>Hebelarm</em> der Kraft $r$.
       Der Hebel ist im Gleichgewicht, wenn $F_1\\cdot r_1 = F_2\\cdot r_2$. Ein längerer Hebelarm bedeutet, dass eine kleinere Kraft nötig ist.</p>`,
        `<p><strong>Rollen:</strong> Eine feste Rolle ändert nur die Richtung der Kraft. Eine bewegliche Rolle halbiert die Kraft, dafür verdoppelt sich der Weg.
       <strong>Schiefe Ebene:</strong> Je kleiner die Steigung, desto kleiner die nötige Kraft, aber desto länger ist der Weg.</p>`,
        `<ol>
         <li>Bestimme, welche Kraft die Last ist und welche Kraft zieht.</li>
         <li>Miss die Hebelarme (Abstände von der Achse).</li>
         <li>Verwende das Gleichgewicht des Hebels und berechne die gesuchte Kraft.</li>
       </ol>`,
        { fig: 'obr-paka', caption: 'Ein Hebel ist im Gleichgewicht, wenn das Produkt aus Kraft und Hebelarm auf einer Seite gleich dem Produkt auf der anderen Seite ist.' }
      ],
      examples: [
        { task: 'Am Hebel mit dem Hebelarm $r_1 = 2\\,\\text{m}$ heben wir eine Last mit der Kraft $F_2 = 300\\,\\text{N}$ am Hebelarm $r_2 = 0{,}5\\,\\text{m}$. Mit welcher Kraft wirken wir am Arm $r_1$?',
          steps: ['Gleichgewicht: $F_1\\cdot r_1 = F_2\\cdot r_2$.', '$F_1 = \\frac{F_2\\cdot r_2}{r_1} = \\frac{300\\cdot 0{,}5}{2}$.', '<strong>Ergebnis: F_1 = 75 N</strong>'] },
        { task: 'Mit einer beweglichen Rolle heben wir eine Last mit der Gewichtskraft $200\\,\\text{N}$. Mit welcher Kraft ziehen wir, wenn wir die Reibung vernachlässigen?',
          steps: ['Eine bewegliche Rolle halbiert die Kraft: $F = \\frac{200}{2}$.', '<strong>Ergebnis: F = 100 N, wir müssen aber auf dem doppelten Weg ziehen.</strong>'] }
      ]
    },
    'r8-vnutorna-energia': {
      title: 'Innere Energie und Wärmeaustausch',
      summary: 'Innere Energie eines Körpers, Wärmeübertragung und Berechnung der Wärme beim Erwärmen.',
      theory: [
        `<p>Jeder Körper besitzt <strong>innere Energie</strong>. Sie setzt sich aus den Bewegungs- und Lageenergien seiner Teilchen (Atome und Moleküle) zusammen.
       Je schneller sich die Teilchen bewegen, desto wärmer ist der Körper und desto größer ist seine innere Energie.</p>`,
        `<p><strong>Wärme</strong> ist die Energie, die Körper aufgrund eines Temperaturunterschieds austauschen. Sie fließt immer vom wärmeren zum kälteren Körper,
       bis sich die Temperaturen angeglichen haben. Wärme ist keine Eigenschaft eines Körpers, sondern übertragene Energie.</p>`,
        `<ul>
         <li><strong>Wärmeleitung:</strong> Wärme wird von Teilchen zu Teilchen weitergegeben, zum Beispiel ein Löffel in einem heißen Tee.</li>
         <li><strong>Konvektion:</strong> Erwärmte Luft oder erwärmtes Wasser steigt auf, zum Beispiel in der Nähe eines Heizkörpers.</li>
         <li><strong>Strahlung:</strong> Wärme wandert auch ohne Stoff, zum Beispiel von der Sonne.</li>
       </ul>`,
        `<p>Die Wärmemenge zum Erwärmen berechnen wir aus $Q = m\\cdot c\\cdot \\Delta t$. Der Wert $c$ ist die spezifische Wärmekapazität:
       für Wasser $c = 4200\\,\\text{J/(kg\\cdot K)}$. Die Temperaturänderung $\\Delta t$ ist der Unterschied zwischen End- und Anfangstemperatur.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: 'Wärme fließt von einem wärmeren zu einem kälteren Körper. Sie wird durch Leitung, Konvektion oder Strahlung übertragen.' }
      ],
      examples: [
        { task: 'Wie viel Wärme braucht man, um $m = 2\\,\\text{kg}$ Wasser um 10 °C zu erwärmen? Verwende $c = 4200\\,\\text{J/(kg\\cdot K)}$.',
          steps: ['$Q = m\\cdot c\\cdot \\Delta t = 2\\cdot 4200\\cdot 10$.', '<strong>Ergebnis: Q = 84 000 J = 84 kJ</strong>'] },
        { task: 'Ein Becher mit heißem Tee kühlt langsam ab. Auf welche Weise gibt er Wärme an die Umgebung ab?',
          steps: ['Die Wärme gelangt vom Tee durch die Wand des Bechers durch Wärmeleitung.', 'Die warme Luft über dem Becher steigt auf, das ist Konvektion. Wärme wird außerdem durch Strahlung abgegeben.', '<strong>Ergebnis: durch Leitung, Konvektion und Strahlung.</strong>'] }
      ]
    },
    'r8-naboj': {
      title: 'Elektrische Ladung',
      summary: 'Zwei Arten von Ladung, Aufladung durch Reibung und die Ladung des Elektrons.',
      theory: [
        `<p>Alle Körper bestehen aus Atomen. Ein Atom hat einen positiv geladenen Kern und negativ geladene Elektronen.
       <strong>Die elektrische Ladung</strong> ist eine Eigenschaft von Körpern, die sich als Kraftwirkung zeigt. Sie wird mit $Q$ bezeichnet, ihre Einheit ist das Coulomb (C).</p>`,
        `<p>Es gibt zwei Arten von Ladung: positive und negative. Gleiche Ladungen stoßen sich ab, entgegengesetzte ziehen sich an.
       Ein neutraler Körper hat gleich viele positive und negative Ladungen.</p>`,
        `<p><strong>Aufladung durch Reibung:</strong> Beim Reiben wandern Elektronen von einem Körper auf den anderen. Der Körper, der Elektronen aufnimmt,
       wird negativ geladen. Der Körper, der sie verliert, wird positiv geladen. Ladung lässt sich weder erzeugen noch vernichten, sondern nur übertragen.</p>`,
        `<ul>
         <li>Die Elementarladung $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$ trägt ein Elektron.</li>
         <li>Die Ladung eines Körpers mit $n$ zusätzlichen Elektronen ist $Q = -n\\,e$; mit $n$ fehlenden Elektronen ist sie $Q = +n\\,e$.</li>
       </ul>`,
        { fig: 'r6r9-naboj', caption: 'Gleiche Ladungen stoßen sich ab, entgegengesetzte Ladungen ziehen sich an.' }
      ],
      examples: [
        { task: 'Ein Körper hat 3 Elektronen verloren. Welche Ladung hat er in Vielfachen der Elementarladung $e$?',
          steps: ['Durch den Verlust von Elektronen entsteht ein Mangel an negativer Ladung, der Körper ist also positiv.', 'Die Ladung ist $Q = +3e$.', '<strong>Ergebnis: +3e</strong>'] },
        { task: 'Zwei Kugeln stoßen sich nach der Berührung ab. Was bedeutet das für ihre Ladungen?',
          steps: ['Abstoßung tritt nur bei gleichen Ladungen auf.', '<strong>Ergebnis: Beide Kugeln haben Ladungen mit demselben Vorzeichen.</strong>'] }
      ]
    },
    'r8-prud-napatie': {
      title: 'Elektrischer Strom und elektrische Spannung',
      summary: 'Strom als Ladung pro Zeit, Spannung als antreibender Druck und ihre Messung.',
      theory: [
        `<p><strong>Der elektrische Strom</strong> ist die geordnete Bewegung geladener Teilchen, in Metallen vor allem der Elektronen. Er wird mit $I$ bezeichnet, seine Einheit ist das Ampere (A).
       Fließt durch einen Leiterquerschnitt in der Zeit $t$ die Ladung $Q$, so ist der Strom $I = \\frac{Q}{t}$. Daraus folgt $1\\,\\text{A} = 1\\,\\text{C/s}$.</p>`,
        `<p>Die Stromrichtung wird vereinbarungsgemäß als Bewegung positiver Ladung vom Pluspol zum Minuspol der Quelle festgelegt. Die Elektronen bewegen sich entgegengesetzt.</p>`,
        `<p><strong>Die elektrische Spannung</strong> $U$ ist der Potenzialunterschied, der die Elektronen im Stromkreis antreibt. Die Quelle (Batterie) erzeugt sie zwischen ihren Klemmen.
       Die Einheit ist das Volt (V).</p>`,
        `<ol>
         <li>Den Strom messen wir mit dem <strong>Amperemeter</strong>, das in Reihe mit dem Verbraucher geschaltet wird.</li>
         <li>Die Spannung messen wir mit dem <strong>Voltmeter</strong>, das parallel zum Verbraucher geschaltet wird.</li>
       </ol>`,
        { fig: 'r6r9-merania', caption: 'Das Amperemeter schaltet man in Reihe zum Verbraucher, das Voltmeter parallel dazu.' }
      ],
      examples: [
        { task: 'Durch einen Leiter fließt in $t = 10\\,\\text{s}$ die Ladung $Q = 20\\,\\text{C}$. Wie groß ist der Strom?',
          steps: ['$I = \\frac{Q}{t} = \\frac{20}{10}$.', '<strong>Ergebnis: I = 2 A</strong>'] },
        { task: 'Welches Gerät misst den Strom und welches die Spannung, und wie werden sie geschaltet?',
          steps: ['Den Strom misst das Amperemeter, das in Reihe geschaltet wird.', 'Die Spannung misst das Voltmeter, das parallel geschaltet wird.', '<strong>Ergebnis: das Amperemeter misst den Strom, das Voltmeter die Spannung.</strong>'] }
      ]
    },
    'r8-odpor': {
      title: 'Elektrischer Stromkreis und elektrischer Widerstand',
      summary: 'Was einen Stromkreis ausmacht und wie der Widerstand den Strom bremst.',
      theory: [
        `<p>Ein <strong>elektrischer Stromkreis</strong> ist ein geschlossener Weg, auf dem der Strom fließt. Er besteht aus Quelle, Verbrauchern, Leitern und Schalter.
       Ist der Stromkreis unterbrochen, etwa durch einen geöffneten Schalter, fließt kein Strom.</p>`,
        `<p>Der <strong>elektrische Widerstand</strong> $R$ bremst die Bewegung der Elektronen im Leiter. Er entsteht durch Zusammenstöße der Elektronen mit den Atomen des Stoffes.
       Die Einheit ist das Ohm ($\\Omega$). Der Widerstand hängt vom Material, von der Länge, vom Querschnitt und von der Temperatur des Leiters ab.</p>`,
        `<p>Zwischen Spannung, Strom und Widerstand gilt der Zusammenhang $R = \\frac{U}{I}$. Bei gleicher Spannung bedeutet ein größerer Widerstand einen kleineren Strom.</p>`,
        `<ol>
         <li>Ermittle die Spannung $U$ in Volt und den Strom $I$ in Ampere.</li>
         <li>Berechne den Widerstand nach $R = \\frac{U}{I}$.</li>
       </ol>`,
        { fig: 'r6r9-odpor', caption: 'Bei gleicher Spannung lässt ein größerer Widerstand einen kleineren Strom durch: bei 12 V fließt ein Strom von 6 A bei 2 Ω und 2 A bei 6 Ω.' }
      ],
      examples: [
        { task: 'Durch eine Glühlampe fließt bei der Spannung $U = 12\\,\\text{V}$ der Strom $I = 2\\,\\text{A}$. Wie groß ist ihr Widerstand?',
          steps: ['$R = \\frac{U}{I} = \\frac{12}{2}$.', '<strong>Ergebnis: R = 6 Ω</strong>'] },
        { task: 'Welcher Leiter bremst den Strom stärker: der mit größerem oder der mit kleinerem Widerstand?',
          steps: ['Ein größerer Widerstand bedeutet, dass die Elektronen schwerer durchkommen.', '<strong>Ergebnis: der Leiter mit dem größeren Widerstand.</strong>'] }
      ]
    },
    'r8-vodice': {
      title: 'Elektrische Leiter und Nichtleiter',
      summary: 'Welche Stoffe den Strom leiten und warum, und wofür sie verwendet werden.',
      theory: [
        `<p><strong>Ein Leiter</strong> ist ein Stoff, in dem sich Elektronen frei bewegen können. Typische Leiter sind Metalle wie Kupfer, Aluminium und Eisen sowie Graphit.
       <strong>Ein Isolator</strong> (Nichtleiter) hat fest gebundene Elektronen und leitet keinen Strom, zum Beispiel Kunststoff, Gummi, Glas oder trockenes Holz.</p>`,
        `<ul>
         <li>Metall: guter Leiter, wird zur Stromleitung verwendet.</li>
         <li>Kunststoff und Gummi: Isolatoren, werden als Ummantelung von Leitern verwendet.</li>
         <li>Salzlösung in Wasser: leitet den Strom, weil sich darin geladene Teilchen bewegen.</li>
         <li>Reines destilliertes Wasser: praktisch ein Isolator.</li>
       </ul>`,
        `<p>Leiter verwenden wir zur Übertragung des Stroms, zum Beispiel Kupfer in Kabeln. Isolatoren umhüllen sie, damit wir keinen spannungsführenden Leiter berühren
       und der Strom nicht dorthin fließt, wo er nicht soll.</p>`,
        `<p>Halbleiter, zum Beispiel Silizium, liegen zwischen Leitern und Isolatoren. Sie leiten den Strom nur unter bestimmten Bedingungen, deshalb werden sie in der Elektronik verwendet.</p>`,
        { fig: 'r6r9-vodice', caption: 'Leiter haben freie Elektronen und leiten den Strom. Isolatoren haben fest gebundene Elektronen und leiten keinen Strom.' }
      ],
      examples: [
        { task: 'Warum ist ein Kupferdraht mit Kunststoff umhüllt?',
          steps: ['Kupfer leitet den Strom, Kunststoff ist kein Leiter.', 'Der Kunststoff verhindert die Berührung mit dem Leiter und das Austreten des Stroms.', '<strong>Ergebnis: Kunststoff ist ein Isolator und schützt vor Unfällen.</strong>'] },
        { task: 'Leitet Salzwasser den Strom?',
          steps: ['Das Salz löst sich im Wasser auf und bildet geladene Teilchen, die Ladung transportieren können.', '<strong>Ergebnis: Salzlösung leitet den Strom, sie ist ein Leiter.</strong>'] }
      ]
    },
    'r8-bezpecnost': {
      title: 'Sicherheit beim Umgang mit elektrischen Geräten',
      summary: 'Regeln, die vor Stromunfällen und Bränden schützen.',
      theory: [
        `<p>Ein elektrischer Strom, der durch den Körper fließt, kann Verbrennungen, eine Herzstörung oder den Tod verursachen. Deshalb halten wir die Sicherheitsregeln ein.
       Die Gefahr ist größer, wenn die Haut feucht ist, weil Wasser die Stromleitung erhöht.</p>`,
        `<ul>
         <li>Berühre elektrische Geräte nicht mit nassen Händen und nicht auf nassem Boden.</li>
         <li>Verwende keine beschädigten Kabel und Stecker; ziehe nie am Kabel.</li>
         <li>Stecke keine Gegenstände in Steckdosen, besonders keine metallischen.</li>
         <li>Bei einem Defekt ziehe das Gerät aus der Steckdose und rufe einen Fachmann.</li>
       </ul>`,
        `<p>Eine <strong>Sicherung</strong> oder ein <strong>Sicherungsautomat</strong> unterbricht den Stromkreis bei zu großem Strom, zum Beispiel bei einem Kurzschluss oder einer Überlastung.
       So verhindern sie das Überhitzen der Leiter und einen Brand.</p>`,
        `<p><strong>Erdung:</strong> Metallgehäuse von Geräten werden mit der Erde verbunden. Bei einem Defekt steht das Gehäuse dann nicht unter Spannung, und das Berühren ist nicht gefährlich.</p>`
      ],
      examples: [
        { task: 'Peter zog den Stecker mit nasser Hand aus der Steckdose. Was ist dabei gefährlich?',
          steps: ['Wasser auf der Haut erhöht die Stromleitung, und der Strom kann durch den Körper fließen.', '<strong>Ergebnis: Es droht ein Stromunfall. Den Stecker nie mit nassen Händen anfassen.</strong>'] },
        { task: 'Welches Element schützt den Leiter bei einem Kurzschluss vor Überhitzung?',
          steps: ['Bei einem Kurzschluss ist der Strom sehr groß und der Leiter erwärmt sich schnell.', 'Die Sicherung brennt durch oder der Sicherungsautomat schaltet den Stromkreis ab.', '<strong>Ergebnis: die Sicherung oder der Sicherungsautomat.</strong>'] }
      ]
    },
    'r9-obvody': {
      title: 'Elektrische Stromkreise und ihre Eigenschaften',
      summary: 'Quelle, Verbraucher, Schalter und Leiter in einem geschlossenen Stromkreis.',
      theory: [
        `<p>Ein <strong>elektrischer Stromkreis</strong> besteht aus einer Quelle (Batterie, Akku), Verbrauchern (Glühlampe, Widerstand, Motor), einem Schalter und Leitern.
       Der Strom fließt nur, wenn der Stromkreis <strong>geschlossen</strong> ist, das heißt, wenn man die ganze Schleife vom einen Pol der Quelle zum anderen durchlaufen kann.</p>`,
        `<ul>
         <li><strong>Die Quelle</strong> liefert den geladenen Teilchen Energie.</li>
         <li><strong>Der Verbraucher</strong> wandelt elektrische Energie in eine andere Energie um: Licht, Wärme oder Bewegung.</li>
         <li><strong>Der Schalter</strong> schließt oder öffnet den Stromkreis.</li>
         <li><strong>Die Leiter</strong> verbinden die Bauteile zu einem Ganzen.</li>
       </ul>`,
        `<p>Den Stromkreis zeichnen wir als <strong>Schaltplan</strong>, in dem jedes Bauteil sein eigenes Zeichen hat. Der Schaltplan zeigt, wie die Bauteile verbunden sind, nicht wie sie aussehen.</p>`,
        `<p>Öffnen wir den Schalter, wird der Stromkreis unterbrochen: Der Strom fließt nicht, und die Glühlampe erlischt. Der Stromkreis funktioniert also nur, wenn er vollständig geschlossen ist.</p>`,
        { fig: 'obr-obvod', caption: 'Serien- und Parallelschaltung von Verbrauchern an einer Quelle.' }
      ],
      examples: [
        { task: 'Was passiert mit der Glühlampe, wenn wir den Schalter öffnen?',
          steps: ['Der Stromkreis wird unterbrochen und der Strom fließt nicht.', '<strong>Ergebnis: Die Glühlampe erlischt.</strong>'] },
        { task: 'Welches Bauteil im Stromkreis wandelt elektrische Energie in Licht um?',
          steps: ['Licht entsteht im Glühfaden der Glühlampe.', '<strong>Ergebnis: die Glühlampe (Verbraucher).</strong>'] }
      ]
    },
    'r9-zapojenie': {
      title: 'Reihen- und Parallelschaltung',
      summary: 'Wie sich der Gesamtwiderstand ändert, wenn Widerstände hintereinander oder nebeneinander geschaltet werden.',
      theory: [
        `<p>Zwei Widerstände schalten wir <strong>in Reihe</strong> (hintereinander) oder <strong>parallel</strong> (nebeneinander). Bei der Reihenschaltung muss der Strom beide Widerstände durchfließen.
       Bei der Parallelschaltung teilt sich der Strom auf zwei Zweige auf.</p>`,
        `<ul>
         <li><strong>Reihenschaltung:</strong> Der Strom ist im ganzen Stromkreis gleich groß, die Spannung verteilt sich auf die Widerstände.
             Der Gesamtwiderstand ist die Summe: $R = R_1 + R_2$.</li>
         <li><strong>Parallelschaltung:</strong> Die Spannung ist an beiden Zweigen gleich, der Strom teilt sich auf.
             Es gilt $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$.</li>
       </ul>`,
        `<p>Bei der Parallelschaltung ist der Gesamtwiderstand immer <strong>kleiner</strong> als der kleinste Widerstand der Zweige. Der Grund ist einleuchtend:
       Jeder weitere Zweig ist ein weiterer Weg für den Strom. Deshalb entnehmen parallel angeschlossene Haushaltsgeräte dem Stromnetz einen größeren Strom.</p>`,
        `<ol>
         <li>Stelle fest, ob die Widerstände hintereinander (Reihe) oder nebeneinander (parallel) liegen.</li>
         <li>Bei der Reihe addierst du die Widerstände, bei der Parallelschaltung addierst du ihre Kehrwerte.</li>
       </ol>`,
        { fig: 'obr-obvod', caption: 'Serien- und Parallelschaltung von Verbrauchern an einer Quelle.' }
      ],
      examples: [
        { task: 'Die Widerstände $R_1 = 6\\,\\Omega$ und $R_2 = 3\\,\\Omega$ sind parallel geschaltet. Wie groß ist der Gesamtwiderstand?',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{6}+\\frac{2}{6}=\\frac{3}{6}$.', '$R=\\frac{6}{3}=2\\,\\Omega$.', '<strong>Ergebnis: R = 2 Ω</strong>'] },
        { task: 'Die Widerstände $R_1 = 4\\,\\Omega$ und $R_2 = 5\\,\\Omega$ sind hintereinander geschaltet. Wie groß ist der Gesamtwiderstand?',
          steps: ['Bei der Reihenschaltung werden die Widerstände addiert: $R = R_1 + R_2$.', '<strong>Ergebnis: R = 9 Ω</strong>'] }
      ]
    },
    'r9-vypocty': {
      title: 'Berechnung von Strom, Spannung und Widerstand',
      summary: 'Aus zwei bekannten Größen berechnen wir die dritte.',
      theory: [
        `<p>Im Stromkreis gibt es drei Grundgrößen: Strom $I$ (A), Spannung $U$ (V) und Widerstand $R$ (Ω). Kennen wir zwei davon, können wir die dritte berechnen.
       Die Beziehungen lauten $I=\\frac{U}{R}$, $U=I\\cdot R$ und $R=\\frac{U}{I}$.</p>`,
        `<ol>
         <li>Schreibe auf, was gegeben ist und was gesucht wird.</li>
         <li>Wähle die Formel, in der die gesuchte Größe allein steht.</li>
         <li>Setze die Einheiten V, A und Ω ein; bei Umrechnungen verwende Vielfache.</li>
         <li>Prüfe die Einheiten des Ergebnisses.</li>
       </ol>`,
        `<p><strong>Achtung auf die Einheiten:</strong> $1\\,\\text{mA}=0{,}001\\,\\text{A}$ und $1\\,\\text{k}\\Omega=1000\\,\\Omega$. Ist eine Angabe in Milliampere oder Kiloohm,
       schreibe sie zuerst in die Grundeinheit um.</p>`,
        { fig: 'r6r9-trojuholnik', caption: 'Deckt man die gesuchte Größe ab, zeigt der Rest die Formel, zum Beispiel U = I · R.' }
      ],
      examples: [
        { task: 'An einem Widerstand mit $R = 4\\,\\Omega$ liegt die Spannung $U = 12\\,\\text{V}$. Welcher Strom fließt durch ihn?',
          steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Ergebnis: I = 3 A</strong>'] },
        { task: 'Durch ein Gerät fließt bei der Spannung $U = 230\\,\\text{V}$ der Strom $I = 0{,}5\\,\\text{A}$. Wie groß ist sein Widerstand?',
          steps: ['$R=\\frac{U}{I}=\\frac{230}{0{,}5}$.', 'Division durch eine Dezimalzahl: $\\frac{230}{0{,}5}=\\frac{460}{1}$.', '<strong>Ergebnis: R = 460 Ω</strong>'] }
      ]
    },
    'r9-ohmov-zakon': {
      title: 'Ohmsches Gesetz',
      summary: 'Der Strom ist proportional zur Spannung und umgekehrt proportional zum Widerstand.',
      theory: [
        `<p><strong>Das Ohmsche Gesetz</strong> besagt: Der Strom durch einen Leiter ist proportional zur Spannung und umgekehrt proportional zum Widerstand.
       Es wird als $I=\\frac{U}{R}$ geschrieben, bei gleichbleibender Temperatur des Leiters.</p>`,
        `<ul>
         <li>Bei gleichem Widerstand: Verdoppelt sich die Spannung, verdoppelt sich der Strom.</li>
         <li>Bei gleicher Spannung: Verdoppelt sich der Widerstand, halbiert sich der Strom.</li>
       </ul>`,
        `<p>Die Abhängigkeit des Stroms von der Spannung ist bei gleichbleibendem Widerstand im Diagramm eine <strong>Gerade durch den Ursprung</strong>.
       Eine steilere Gerade bedeutet einen kleineren Widerstand, denn bei gleicher Spannung fließt ein größerer Strom.</p>`,
        `<p>Das Gesetz gilt genau für Metalleiter bei konstanter Temperatur. Erwärmt sich das Metall stark, nimmt sein Widerstand zu, und die Abhängigkeit ist dann nicht mehr geradlinig.</p>`,
        { fig: 'obr-ohm', caption: 'Bei gleichbleibendem Widerstand ist das Diagramm der Spannung über dem Strom eine Gerade durch den Ursprung.' }
      ],
      examples: [
        { task: 'Die Spannung am Widerstand wurde von $4\\,\\text{V}$ auf $12\\,\\text{V}$ erhöht. Der Widerstand blieb gleich. Um das Wievielfache wuchs der Strom?',
          steps: ['Das Verhältnis der Spannungen ist $\\frac{12}{4}=3$.', 'Der Strom ist proportional zur Spannung, daher wächst er ebenfalls auf das $3$-Fache.', '<strong>Ergebnis: 3-mal so groß</strong>'] },
        { task: 'Bei der Spannung $230\\,\\text{V}$ nimmt ein Widerstand den Strom $2\\,\\text{A}$ auf. Welchen Strom nimmt er bei doppeltem Widerstand und gleicher Spannung auf?',
          steps: ['Der Widerstand ist doppelt so groß, der Strom ist umgekehrt proportional zum Widerstand.', '$I_2 = \\frac{I_1}{2} = \\frac{2}{2}$.', '<strong>Ergebnis: 1 A</strong>'] }
      ]
    },
    'r9-praca-vykon': {
      title: 'Elektrische Arbeit und elektrische Leistung',
      summary: 'Wie viel Energie ein Verbraucher in einer Zeit umsetzt und wie man sie in kWh berechnet.',
      theory: [
        `<p><strong>Die elektrische Leistung</strong> ist $P=U\\cdot I$, ihre Einheit ist das Watt (W). Sie gibt an, wie viel Energie der Verbraucher pro Sekunde umwandelt.
       Kennen wir den Widerstand, gilt auch $P=I^2\\,R$ oder $P=\\frac{U^2}{R}$.</p>`,
        `<p><strong>Die elektrische Arbeit</strong> (verbrauchte Energie) ist $W=P\\cdot t=U\\cdot I\\cdot t$, wobei $t$ die Zeit in Sekunden ist. Die Einheit ist das Joule (J),
       denn $1\\,\\text{W}\\cdot 1\\,\\text{s}=1\\,\\text{J}$.</p>`,
        `<p>Im Haushalt wird die Energie in <strong>Kilowattstunden</strong> (kWh) abgerechnet. Wir berechnen sie als Leistung in Kilowatt mal Zeit in Stunden:
       $E = P\\cdot t$, wobei $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<ol>
         <li>Leistung in Kilowatt: $1000\\,\\text{W} = 1\\,\\text{kW}$.</li>
         <li>Energie in kWh: Leistung in kW mal Zeit in Stunden.</li>
       </ol>`
      ],
      examples: [
        { task: 'Eine Glühlampe ist an die Spannung $230\\,\\text{V}$ angeschlossen, und durch sie fließt der Strom $0{,}5\\,\\text{A}$. Wie groß ist ihre Leistung?',
          steps: ['$P = U\\cdot I = 230\\cdot 0{,}5$.', '<strong>Ergebnis: P = 115 W</strong>'] },
        { task: 'Eine Waschmaschine hat die Leistung $2\\,\\text{kW}$ und läuft $1{,}5\\,\\text{h}$. Wie viel Energie verbraucht sie in kWh?',
          steps: ['$E = P\\cdot t = 2\\cdot 1{,}5$.', '<strong>Ergebnis: E = 3 kWh</strong>'] }
      ]
    },
    'r9-magnetizmus': {
      title: 'Magnetfeld und magnetische Wirkungen des elektrischen Stroms',
      summary: 'Um einen stromdurchflossenen Leiter entsteht ein Magnetfeld, dessen Richtung man mit der Rechte-Hand-Regel bestimmt.',
      theory: [
        `<p>Um einen Leiter, durch den elektrischer Strom fließt, entsteht ein <strong>Magnetfeld</strong>. Den Zusammenhang zwischen Elektrizität und Magnetismus entdeckte
       1820 der dänische Physiker Ørsted: Als man in der Nähe den Strom eines Leiters einschaltete, wurde eine Kompassnadel abgelenkt.</p>`,
        `<p>Die <strong>Richtung des Feldes</strong> bestimmt man mit der Rechte-Hand-Regel: Der Daumen zeigt in die Stromrichtung, und die gekrümmten Finger zeigen die Richtung
       der magnetischen Feldlinien um den Leiter. Ändern wir die Stromrichtung, ändert sich auch die Feldrichtung.</p>`,
        `<p>Wickeln wir den Leiter zu einer <strong>Spule</strong>, verstärken sich die Felder der einzelnen Windungen, und im Inneren der Spule entsteht ein stärkeres Feld.
       Die Stärke des Feldes vergrößern wir mit einem größeren Strom oder mit mehr Windungen.</p>`,
        `<ul>
         <li>Ohne Strom gibt es um den Leiter kein Magnetfeld.</li>
         <li>Das Magnetfeld übt eine Kraft auf Magnete und auf andere stromdurchflossene Leiter aus.</li>
         <li>Je weiter vom Leiter entfernt, desto schwächer ist das Feld.</li>
       </ul>`,
        { fig: 'obr-magnet-vodic', caption: 'Um den stromdurchflossenen Leiter entsteht ein Magnetfeld in Form von Kreisen um den Leiter.' }
      ],
      examples: [
        { task: 'Wie ändert sich die Richtung des Magnetfelds um einen Leiter, wenn wir die Stromrichtung umkehren?',
          steps: ['Die Feldrichtung wird durch die Stromrichtung bestimmt (Rechte-Hand-Regel).', '<strong>Ergebnis: die Feldrichtung kehrt sich um.</strong>'] },
        { task: 'Warum lenkt sich eine Kompassnadel in der Nähe eines stromdurchflossenen Leiters ab?',
          steps: ['Die Kompassnadel ist ein kleiner Magnet, der sich im Magnetfeld dreht.', '<strong>Ergebnis: Um den stromdurchflossenen Leiter entsteht ein Magnetfeld, das auf die Nadel wirkt.</strong>'] }
      ]
    },
    'r9-elektromagnet': {
      title: 'Elektromagnet und Elektromotor',
      summary: 'Eine Spule mit Kern als vorübergehender Magnet und ein Motor, der elektrische Energie in Bewegung umwandelt.',
      theory: [
        `<p><strong>Ein Elektromagnet</strong> ist eine Spule mit einem Kern aus weichem Eisen. Fließt Strom durch die Spule, wird der Kern magnetisch.
       Nach dem Abschalten des Stroms verschwindet der Magnetismus. Die Kraft des Elektromagneten vergrößern wir durch einen größeren Strom oder mehr Windungen.</p>`,
        `<p><strong>Ein Elektromotor</strong> wandelt elektrische Energie in Bewegungsenergie (mechanische Energie) um. Er nutzt die Kraftwirkung des Magnetfelds auf einen stromdurchflossenen Leiter:
       Eine Spule dreht sich im Magnetfeld.</p>`,
        `<ul>
         <li>Der Elektromagnet wird in Klingeln, Relais und Hebemagneten auf Schrottplätzen verwendet.</li>
         <li>Der Elektromotor treibt Waschmaschinen, Bohrmaschinen oder Ventilatoren an.</li>
       </ul>`,
        `<ol>
         <li>Strom fließt durch die Spule des Motors.</li>
         <li>Das Magnetfeld wirkt mit einer Kraft auf die Leiter der Spule.</li>
         <li>Die Spule dreht sich.</li>
         <li>Der Kommutator ändert die Stromrichtung, damit sich die Spule weiterdreht.</li>
       </ol>`,
        { fig: 'r6r9-elektromagnet', caption: 'Eine Spule mit Eisenkern ist nur magnetisch, wenn Strom durch sie fließt.' }
      ],
      examples: [
        { task: 'Warum hebt ein Elektromagnet auf einem Schrottplatz Eisenschrott an und lässt ihn nach dem Abschalten des Stroms los?',
          steps: ['Bei eingeschaltetem Strom ist der Kern magnetisch und zieht Eisen an.', 'Nach dem Abschalten des Stroms verschwindet das Magnetfeld.', '<strong>Ergebnis: Der Magnetismus des Elektromagneten hängt vom Strom ab.</strong>'] },
        { task: 'Welche Energieumwandlung führt der Elektromotor in einer Waschmaschine aus?',
          steps: ['Elektrische Energie fließt durch die Spulen des Motors.', 'Die Trommel beginnt sich zu drehen.', '<strong>Ergebnis: elektrische Energie in Bewegungsenergie (mechanische Energie).</strong>'] }
      ]
    },
    'r9-premeny-zdroje': {
      title: 'Energieumwandlungen und Energiequellen',
      summary: 'Wie sich Energie in Kraftwerken umwandelt und worin sich erneuerbare von nicht erneuerbaren Quellen unterscheiden.',
      theory: [
        `<p>Energie lässt sich von einer Form in eine andere umwandeln. Energiequellen teilen wir in <strong>erneuerbare</strong> ein, die sich natürlich erneuern
       (Sonne, Wind, Wasser, Biomasse, Erdwärme), und <strong>nicht erneuerbare</strong>, deren Vorräte verbraucht werden (Kohle, Erdöl, Erdgas, Kernbrennstoff).</p>`,
        `<ul>
         <li><strong>Kohlekraftwerk:</strong> chemische Energie des Brennstoffs, thermische Energie, mechanische Energie (Turbine), elektrische Energie.</li>
         <li><strong>Wasserkraftwerk:</strong> Lageenergie des Wassers, Bewegungsenergie, mechanische Energie (Turbine), elektrische Energie.</li>
         <li><strong>Solarpanel:</strong> Strahlungsenergie der Sonne wird in elektrische Energie umgewandelt.</li>
         <li><strong>Windkraftwerk:</strong> Bewegungsenergie des Windes, mechanische Energie, elektrische Energie.</li>
       </ul>`,
        `<p>Bei jeder Umwandlung geht ein Teil der Energie in Wärme über und verteilt sich in der Umgebung. Die Gesamtenergie bleibt erhalten,
       aber die nutzbare Energie wird kleiner.</p>`,
        { fig: 'r6r9-elektrarna', caption: 'Ein Kohlekraftwerk wandelt die chemische Energie des Brennstoffs nach und nach in thermische, mechanische und elektrische Energie um.' }
      ],
      examples: [
        { task: 'Welche Energieumwandlung führt ein Solarpanel aus?',
          steps: ['Das Panel nimmt Strahlungsenergie der Sonne auf.', 'Es wandelt sie in elektrische Energie um.', '<strong>Ergebnis: Strahlungsenergie wird in elektrische Energie umgewandelt.</strong>'] },
        { task: 'Warum ist Kohle ein nicht erneuerbarer Energieträger?',
          steps: ['Sie ist vor Millionen von Jahren aus Pflanzen entstanden.', 'Wir verbrauchen sie schneller, als sie sich erneuern kann.', '<strong>Ergebnis: Sie ist nicht erneuerbar, weil sie sich nicht schnell genug erneuert.</strong>'] }
      ]
    },
    'r9-energia-priroda': {
      title: 'Energie in Natur und Technik',
      summary: 'Wirkungsgrad eines Geräts und Energie, die sich nicht nutzen lässt.',
      theory: [
        `<p><strong>Der Wirkungsgrad</strong> eines Geräts gibt an, welcher Anteil der zugeführten Energie in nutzbare Arbeit oder Energie umgewandelt wird:
       $\\eta = \\frac{E_u}{E_d}\\cdot 100\\,\\%$, wobei $E_u$ die nutzbare und $E_d$ die zugeführte Energie ist.</p>`,
        `<p>Der Wirkungsgrad ist immer kleiner als 100 %. Ein Teil der Energie wird in Wärme umgewandelt, die sich in der Umgebung verteilt.
       Eine Glühlampe mit Glühfaden hat einen geringen Wirkungsgrad, weil sie den größten Teil der Energie als Wärme abstrahlt.</p>`,
        `<ul>
         <li>Eine LED-Lampe ist effizienter als eine klassische Glühlampe, weil sie weniger Energie in Wärme umwandelt.</li>
         <li>Beim Verbrennungsmotor eines Autos geht ein großer Teil der Energie des verbrannten Kraftstoffs als Wärme verloren.</li>
       </ul>`,
        `<p>In der Natur geht Energie nicht verloren, sie verteilt sich nur als Wärme, die sich nur schwer nutzen lässt. Deshalb bemüht sich der Mensch, den Wirkungsgrad der Maschinen zu erhöhen.</p>`,
        { fig: 'r6r9-ucinnost', caption: 'Der Wirkungsgrad ist das Verhältnis von nutzbarer zu zugeführter Energie. Der Rest geht als Wärme verloren.' }
      ],
      examples: [
        { task: 'Ein Motor erhält 400 J Energie und wandelt 100 J in Bewegung um. Wie groß ist sein Wirkungsgrad?',
          steps: ['$\\eta = \\frac{100}{400}\\cdot 100\\,\\%$.', '$\\eta = 0{,}25\\cdot 100\\,\\% = 25\\,\\%$.', '<strong>Ergebnis: 25 %</strong>'] },
        { task: 'Ein Heizgerät mit einem Wirkungsgrad von $90\\,\\%$ erhält $1000\\,\\text{J}$. Wie viel Energie geht verloren?',
          steps: ['Die nutzbare Energie beträgt $0{,}9\\cdot 1000 = 900\\,\\text{J}$.', 'Der Rest geht verloren: $1000 - 900 = 100\\,\\text{J}$.', '<strong>Ergebnis: 100 J</strong>'] }
      ]
    },
    'r9-opakovanie': {
      title: 'Wiederholung und praktische physikalische Aufgaben',
      summary: 'Übersicht der Zusammenhänge aus der 9. Klasse und Vorgehen bei praktischen Aufgaben.',
      theory: [
        `<p>Schreibe bei jeder Aufgabe zuerst auf, was gegeben ist und was gesucht wird. Dann wählst du die Formel, wandelst die Einheiten um und setzt ein.
       Am Ende prüfst du die Einheiten des Ergebnisses und ob der Wert sinnvoll ist.</p>`,
        `<ol>
         <li>Bestimme, um welchen Vorgang es geht: elektrischer Stromkreis, Energie, Leistung oder Magnetismus.</li>
         <li>Wähle die richtige Formel.</li>
         <li>Wandle die Einheiten um (mA in A, kW in W, Minuten in Sekunden, kWh in J).</li>
         <li>Setze ein, berechne und prüfe die Einheiten.</li>
       </ol>`,
        `<ul>
         <li>Ohmsches Gesetz: $I=\\frac{U}{R}$, $U=I\\cdot R$, $R=\\frac{U}{I}$.</li>
         <li>Leistung und Arbeit: $P=U\\cdot I$, $W=P\\cdot t$.</li>
         <li>Lageenergie: $E_p=m\\,g\\,h$, bei $g\\approx 10\\,\\text{m/s}^2$.</li>
         <li>Wirkungsgrad: $\\eta=\\frac{E_u}{E_d}\\cdot 100\\,\\%$.</li>
       </ul>`
      ],
      examples: [
        { task: 'Ein Motor mit der Leistung $1500\\,\\text{W}$ läuft $2\\,\\text{h}$. Wie viel Energie verbraucht er in kWh?',
          steps: ['Leistung in Kilowatt: $1500\\,\\text{W} = 1{,}5\\,\\text{kW}$.', '$E = P\\cdot t = 1{,}5\\cdot 2 = 3$.', '<strong>Ergebnis: E = 3 kWh</strong>'] },
        { task: 'Ein Körper mit der Masse $3\\,\\text{kg}$ befindet sich in der Höhe $4\\,\\text{m}$. Wie groß ist seine Lageenergie bei $g = 10\\,\\text{m/s}^2$?',
          steps: ['$E_p = m\\,g\\,h = 3\\cdot 10\\cdot 4$.', '<strong>Ergebnis: E_p = 120 J</strong>'] }
      ]
    }
  }
});
