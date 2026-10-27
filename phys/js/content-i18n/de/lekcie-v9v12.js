/* Deutsch: Hochschulniveau-Lektionen der Stufen v9–v12 (js/rocniky/v9.js, v10.js, v11.js, v12.js). Struktur und Schlüssel: js/content-i18n.js. */
CONTENT_I18N.add('de', {
  lessons: {
    'v9-kryst-struktury': {
      title: 'Kristallstrukturen',
      summary: 'Die Elementarzelle, die Typen kubischer Gitter und die Anzahl der Atome pro Zelle.',
      theory: [
        `<p>Ein Kristall ist ein Stoff, in dem die Atome regelmäßig in einem räumlichen <em>Gitter</em> angeordnet sind. Der kleinste Baustein, der durch Verschiebungen wiederholt das ganze Gitter aufbaut, ist die <strong>Elementarzelle</strong>.</p>`,
        `<p>Die drei grundlegenden kubischen Zellen sind: <em>einfach kubisch</em> (Atome nur an den Ecken), <em>raumzentriert kubisch</em> (außer den Ecken auch ein Atom im Zentrum) und <em>flächenzentriert kubisch</em> (außer den Ecken auch Atome in den Mitten der Flächen).</p>`,
        `<p>Ein Atom im Zentrum gehört der Zelle vollständig, ein Atom auf einer Fläche zur Hälfte und ein Atom an einer Ecke zu einem Achtel. Daher hat eine einfach kubische Zelle 1 Atom, eine raumzentrierte Zelle 2 Atome und eine flächenzentrierte Zelle 4 Atome.</p>`,
        `<p>Die Anordnung beeinflusst die mechanischen Eigenschaften. Metalle mit flächenzentriertem Gitter (Al, Cu, Au) sind duktil, weil sich ihre Atomebenen leicht gegeneinander verschieben lassen.</p>`,
        { fig: 'v9v12-bunka', caption: 'Elementarzelle: einfach, raumzentriert und flächenzentriert kubische Gitter sowie die Anzahl der Atome, die jeweils zur Zelle gehören.' }
      ],
      examples: [
        { task: 'Wie viele Atome gehören zu einer Elementarzelle eines flächenzentrierten Gitters?',
          steps: ['Acht Eckatome, jedes gehört zur Zelle zu einem Achtel: $8\\cdot\\tfrac{1}{8}=1$.', 'Sechs Flächenatome, jedes zur Hälfte: $6\\cdot\\tfrac{1}{2}=3$.', '<strong>Ergebnis: $1+3=4$ Atome</strong>'] },
        { task: 'Wie viele Atome hat eine raumzentriert kubische Zelle?',
          steps: ['Die Ecken ergeben $8\\cdot\\tfrac{1}{8}=1$ Atom.', 'Das Atom im Zentrum gehört der Zelle vollständig, also 1.', '<strong>Ergebnis: 2 Atome</strong>'] }
      ]
    },
    'v9-vazby': {
      title: 'Atombindungen in Festkörpern',
      summary: 'Ionische, kovalente, metallische und van-der-Waals-Bindung sowie ihre Folgen.',
      theory: [
        `<p>Atome verbinden sich zu einem Festkörper, wenn dadurch die Gesamtenergie des Systems sinkt. Eine Bindung entsteht durch Umverteilung oder gemeinsame Nutzung der Valenzelektronen.</p>`,
        `<ul><li><strong>Ionisch</strong>: Elektronen wechseln von einem Atom zum anderen, und es entstehen entgegengesetzt geladene Ionen (z. B. NaCl). Diese Stoffe sind hart, spröde und haben eine hohe Schmelztemperatur.</li><li><strong>Kovalent</strong>: Atome teilen sich Elektronenpaare (Diamant, Silizium). Die Bindungen sind stark und die Stoffe hart.</li><li><strong>Metallisch</strong>: Die Valenzelektronen bilden ein gemeinsames „Elektronengas“, das allen Atomen gehört (Cu, Fe). Metalle sind duktil und leiten den Strom.</li><li><strong>Van-der-Waals</strong>: schwache Anziehungskräfte zwischen temporären Dipolen (z. B. festes CO₂ oder Graphitschichten). Sie werden leicht gelöst.</li></ul>`,
        `<p>Eigenschaften eines Festkörpers wie Härte, Leitfähigkeit und Schmelztemperatur sind eine direkte Folge des Bindungstyps. Kennt man die Bindung, kann man vorhersagen, wie sich der Werkstoff verhält.</p>`
      ],
      examples: [
        { task: 'Welche Bindung liegt im Kupfermetall vor?',
          steps: ['Die Kupferatome geben ihre Valenzelektronen in ein gemeinsames „Meer“ ab.', '<strong>Ergebnis: metallische Bindung</strong>'] },
        { task: 'Warum ist Diamant sehr hart?',
          steps: ['Jedes Kohlenstoffatom ist kovalent an vier Nachbarn gebunden.', 'Ein so starres Netz erfordert viel Energie zum Aufbrechen.', '<strong>Ergebnis: starke kovalente Bindungen im gesamten Kristall</strong>'] }
      ]
    },
    'v9-elektricke-tepelne': {
      title: 'Elektrische und thermische Eigenschaften von Werkstoffen',
      summary: 'Spezifischer Widerstand, die Temperaturabhängigkeit des Widerstands und die Wärmeleitfähigkeit.',
      theory: [
        `<p>Der Widerstand eines Leiters ist $R = \\rho\\dfrac{l}{S}$, wobei $\\rho$ der <em>spezifische Widerstand</em> des Stoffes, $l$ die Länge und $S$ der Querschnitt ist. Der spezifische Widerstand von Kupfer beträgt etwa $1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$. Ein längerer und dünnerer Leiter hat einen größeren Widerstand.</p>`,
        `<p>Ein Metall leitet den Strom, weil sich seine Valenzelektronen im Gitter frei bewegen. Bei steigender Temperatur streuen die Schwingungen der Gitterionen diese Bewegung, daher steigt der Widerstand eines Metalls mit der Temperatur. Dagegen werden in Halbleitern und Isolatoren mit steigender Temperatur mehr Ladungsträger freigesetzt, und der Widerstand sinkt.</p>`,
        `<p><strong>Wärmeleitfähigkeit:</strong> In Metallen transportieren vor allem die freien Elektronen die Wärme, in Nichtmetallen die Gitterschwingungen (Phononen). Deshalb ist Kupfer ein ausgezeichneter Wärmeleiter, während Glas und Keramik vor Wärme isolieren.</p>`
      ],
      examples: [
        { task: `Ein Kupferdraht der Länge 50 m und dem Querschnitt 2 mm² hat welchen Widerstand? Der spezifische Widerstand von Kupfer beträgt $\\rho=1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$.`,
          steps: ['Querschnitt umrechnen: $S=2\\,\\text{mm}^2=2\\cdot 10^{-6}\\,\\text{m}^2$.', '$R=\\rho\\dfrac{l}{S}=1{,}7\\cdot 10^{-8}\\cdot\\dfrac{50}{2\\cdot 10^{-6}}=0{,}425\\,\\Omega$.', '<strong>Ergebnis: etwa 0,43 Ω</strong>'] },
        { task: 'Welcher Leiter hat den größeren Widerstand: der längere oder der kürzere, bei gleichem Querschnitt und Material?',
          steps: ['Der Widerstand ist proportional zur Länge $l$.', '<strong>Ergebnis: der längere</strong>'] }
      ]
    },
    'v9-pasova-teoria': {
      title: 'Bändermodell der Festkörper',
      summary: 'Energiebänder im Kristall und die Einteilung der Stoffe in Leiter, Halbleiter und Isolatoren.',
      theory: [
        `<p>Verbinden sich sehr viele Atome, werden die diskreten Energieniveaus der Elektronen zu <em>Bändern</em>, das heißt zu Gruppen sehr dicht liegender Niveaus. Zwischen den Bändern kann ein <strong>verbotenes Band</strong> der Breite $E_g$ liegen, in dem sich Elektronen nicht aufhalten können.</p>`,
        `<p>Das höchste besetzte Band ist das <em>Valenzband</em>, darüber liegt das <em>Leitungsband</em>. Die Elektronen füllen die Bänder von unten nach oben, und das Pauli-Prinzip verbietet, dass zwei Elektronen denselben Zustand besetzen. Ein vollständig gefülltes Band leitet keinen Strom, weil die Elektronen darin keinen Platz zum Verschieben haben.</p>`,
        `<ul><li><strong>Leiter</strong> (Metall): Ein verbotenes Band fehlt, die Bänder überlappen sich und das Leitungsband ist teilweise besetzt.</li><li><strong>Halbleiter</strong>: $E_g$ beträgt etwa 0,1 bis 3 eV (Silizium hat 1,1 eV). Bei Raumtemperatur gelangen einige Elektronen in das Leitungsband.</li><li><strong>Isolator</strong>: $E_g$ ist größer als 3 eV (Diamant hat 5,5 eV).</li></ul>`,
        { fig: 'v9v12-pasy', caption: 'Im Leiter überlappen sich die Bänder, im Halbleiter gibt es ein schmales verbotenes Band E_g, im Isolator ein breites.' }
      ],
      examples: [
        { task: 'Ein Material hat eine Breite des verbotenen Bandes $E_g = 0{,}67\\,\\text{eV}$. Ist es ein Leiter, ein Halbleiter oder ein Isolator?',
          steps: ['Der Wert liegt zwischen 0,1 und 3 eV und ist nicht null.', '<strong>Ergebnis: ein Halbleiter (z. B. Germanium)</strong>'] },
        { task: 'Warum leitet Diamant ($E_g=5{,}5\\,\\text{eV}$) keinen Strom?',
          steps: ['Das verbotene Band ist sehr breit.', 'Bei gewöhnlichen Temperaturen gelangen die Elektronen nicht in das Leitungsband.', '<strong>Ergebnis: Es ist ein Isolator</strong>'] }
      ]
    },
    'v9-polovodice': {
      title: 'Halbleiter und Transistoren',
      summary: 'Dotierung von Silizium, der PN-Übergang und das Prinzip des Transistors.',
      theory: [
        `<p>Reines Silizium hat vier Valenzelektronen und bindet sich kovalent. Bei Raumtemperatur wird ein kleiner Teil der Elektronen in das Leitungsband freigesetzt und hinterlässt <em>Löcher</em>, Stellen, in die ein Elektron wechseln kann. Man spricht von Eigenleitung.</p>`,
        `<p><strong>Dotierung</strong> erhöht die Leitfähigkeit. Ein Element mit fünf Valenzelektronen (Phosphor, Arsen, Antimon) gibt ein zusätzliches freies Elektron ab, und es entsteht ein Halbleiter vom Typ $n$, in dem die Ladungsträger Elektronen sind. Ein Element mit drei Valenzelektronen (Bor, Aluminium, Gallium) erzeugt Löcher, und es entsteht ein Halbleiter vom Typ $p$.</p>`,
        `<p>Ein <strong>PN-Übergang</strong> entsteht durch Verbinden beider Typen. In Durchlassrichtung fließt Strom, in Sperrrichtung praktisch keiner. Ein Transistor besteht aus zwei solchen Übergängen, und ein kleiner Strom in einem Kreis steuert einen großen Strom im anderen.</p>`,
        `<p>Der Transistor dient als Verstärker und als Schalter. Alle digitalen Schaltungen in Computern und Mobiltelefonen bestehen aus Milliarden von Transistoren.</p>`,
        { fig: 'v9v12-pn', caption: 'Am PN-Übergang treffen Löcher aus dem p-Bereich auf Elektronen aus dem n-Bereich.' }
      ],
      examples: [
        { task: 'Wir fügen Phosphor zu Silizium hinzu. Welcher Typ von Halbleiter entsteht?',
          steps: ['Phosphor hat 5 Valenzelektronen, eines davon ist überzählig.', '<strong>Ergebnis: ein Halbleiter vom Typ $n$</strong>'] },
        { task: 'Warum leitet eine Diode in Sperrrichtung kaum Strom?',
          steps: ['Am PN-Übergang entsteht ein Bereich ohne freie Ladungsträger.', 'Wenn die Sperrspannung steigt, wird dieser Bereich nur breiter.', '<strong>Ergebnis: praktisch fließt kein Strom</strong>'] }
      ]
    },
    'v9-supravodivost': {
      title: 'Supraleitung',
      summary: 'Null-Widerstand unterhalb der kritischen Temperatur, der Meißner-Effekt und Hochtemperatur-Supraleiter.',
      theory: [
        `<p>Supraleitung ist ein Zustand, in dem ein Material unterhalb der <em>kritischen Temperatur</em> $T_c$ seinen elektrischen Widerstand vollständig verliert. Der Strom kann darin ohne Verluste fließen.</p>`,
        `<p><strong>Meißner-Effekt</strong>: Ein Supraleiter verdrängt das Magnetfeld aus seinem Inneren. Deshalb schwebt ein Supraleiter über einem Magneten.</p>`,
        `<p>Klassische Supraleiter wie Blei oder Niob haben ein $T_c$ von einigen Kelvin und werden mit flüssigem Helium ($4{,}2\\,\\text{K}$) gekühlt. Hochtemperatur-Supraleiter (Kuprate, z. B. YBCO mit $T_c\\approx 92\\,\\text{K}$) lassen sich mit dem günstigeren flüssigen Stickstoff ($77\\,\\text{K}$) kühlen.</p>`,
        `<p>Nach der BCS-Theorie bilden sich die Elektronen im Kristall durch den Austausch von Gitterschwingungen zu <em>Cooper-Paaren</em>. Diese Paare bewegen sich ohne Streuung, deshalb ist der Widerstand null.</p>`,
        { fig: 'v9v12-supra', caption: 'Unterhalb der kritischen Temperatur Tc fällt der Widerstand eines Supraleiters auf null, während ein normales Metall einen mit der Temperatur wachsenden Widerstand hat.' }
      ],
      examples: [
        { task: 'Die kritische Temperatur von Niob beträgt $T_c=9{,}2\\,\\text{K}$. Welche Temperatur ist das in Grad Celsius?',
          steps: ['$t = T - 273{,}15$.', '$t = 9{,}2 - 273{,}15 = -263{,}95\\,{}^{\\circ}\\text{C}$.', '<strong>Ergebnis: etwa -263,95 °C</strong>'] },
        { task: 'Warum schwebt ein Supraleiter über einem Magneten?',
          steps: ['Das Magnetfeld kann nicht in den Supraleiter eindringen (Meißner-Effekt).', 'Die induzierten Ströme in der Oberfläche erzeugen ein Feld, das den Magneten abstößt.', '<strong>Ergebnis: Die abstoßende Kraft hebt den Supraleiter an</strong>'] }
      ]
    },
    'v9-magneticke': {
      title: 'Magnetische Werkstoffe',
      summary: 'Diamagnetismus, Paramagnetismus und Ferromagnetismus, Domänen und die Curie-Temperatur.',
      theory: [
        `<p>Je nach ihrem Verhalten im Magnetfeld teilt man Stoffe ein in <strong>diamagnetische</strong> (schwach abgestoßen, z. B. Kupfer, Zink), <strong>paramagnetische</strong> (schwach angezogen, z. B. Aluminium, Platin) und <strong>ferromagnetische</strong> (stark angezogen, z. B. Eisen, Nickel, Kobalt).</p>`,
        `<p>In Ferromagneten richten sich die magnetischen Momente der Atome in gemeinsam orientierten Bereichen aus, die man <em>Domänen</em> nennt. Ohne Feld sind die Domänen ungeordnet und das resultierende Moment ist null. Ein äußeres Feld richtet sie aus, und der Stoff wird magnetisiert.</p>`,
        `<p>Oberhalb der <em>Curie-Temperatur</em> $T_C$ zerstört die Wärmebewegung der Atome die Domänen, und der Ferromagnetismus verschwindet. Eisen hat $T_C\\approx 770\\,{}^{\\circ}\\text{C}$.</p>`,
        `<p>Weichmagnetische Werkstoffe, zum Beispiel Trafobleche, lassen sich leicht magnetisieren und entmagnetisieren. Hartmagnetische Werkstoffe, zum Beispiel Dauermagnete, behalten ihre Magnetisierung.</p>`,
        { fig: 'v9v12-domeny', caption: 'In einem Ferromagneten sind die Domänen ohne Feld ungeordnet; im äußeren Feld richten sie sich aus und der Stoff wird magnetisiert.' }
      ],
      examples: [
        { task: 'Warum bleibt eine Büroklammer am Magneten haften, ein Kupferdraht aber nicht?',
          steps: ['Die Klammer besteht aus Stahl, der Eisen enthält; ihre Domänen richten sich im Feld des Magneten aus.', 'Kupfer ist diamagnetisch, seine Reaktion ist schwach und abstoßend.', '<strong>Ergebnis: Die Klammer ist ferromagnetisch</strong>'] },
        { task: 'Eisen hat eine Curie-Temperatur von 770 °C. Was geschieht beim Erhitzen auf 800 °C?',
          steps: ['800 °C liegt über der Curie-Temperatur.', 'Die Domänen brechen zusammen und das Eisen verliert seine dauerhafte Magnetisierung.', '<strong>Ergebnis: Es hört auf, ferromagnetisch zu sein</strong>'] }
      ]
    },
    'v9-nanomaterialy': {
      title: 'Nanomaterialien und Quantenmaterialien',
      summary: 'Das Verhältnis von Oberfläche zu Volumen bei Nanomaterialien und Beispiele für Quantenmaterialien.',
      theory: [
        `<p>Nanomaterialien haben mindestens eine Abmessung im Bereich von etwa 1 bis 100 nm. Mit abnehmender Größe steigt das Verhältnis von Oberfläche zu Volumen, und ein großer Teil der Atome liegt an der Oberfläche. Eigenschaften wie Farbe, Schmelztemperatur oder Reaktivität können sich deshalb deutlich von einem großen Stück desselben Stoffes unterscheiden.</p>`,
        `<p>Für einen Würfel mit der Kante $a$ gilt $S = 6a^2$ und $V = a^3$, also $\\dfrac{S}{V}=\\dfrac{6}{a}$. Das Verhältnis sinkt mit wachsender Kante, deshalb steht die Kante im Nenner. Wird die Kante zehnmal kleiner, steigt das Verhältnis auf das Zehnfache.</p>`,
        `<p><strong>Quantenmaterialien</strong> zeigen die Effekte der Quantenmechanik im makroskopischen Maßstab. Beispiele sind Graphen (eine einzelne Schicht von Kohlenstoffatomen mit sehr hoher Elektronenbeweglichkeit), Quantenpunkte (ihre Größe bestimmt die Farbe des ausgesandten Lichts) und topologische Isolatoren.</p>`,
        { fig: 'v9v12-nano', caption: 'Teilt man einen Würfel in kleinere Würfel, bleibt das Volumen erhalten, die Oberfläche aber wächst. Das Verhältnis S/V steigt mit abnehmender Größe.' }
      ],
      examples: [
        { task: 'Ein Würfel hat die Kante $a=2\\,\\text{nm}$. Wie groß ist das Verhältnis $S/V$?',
          steps: ['$\\dfrac{S}{V}=\\dfrac{6a^2}{a^3}=\\dfrac{6}{a}$.', '$\\dfrac{6}{2}=3\\,\\text{nm}^{-1}$.', '<strong>Ergebnis: 3 nm⁻¹</strong>'] },
        { task: 'Wie ändert sich das Verhältnis $S/V$, wenn die Kante verdoppelt wird?',
          steps: ['$S/V = 6/a$ ist umgekehrt proportional zur Kante.', 'Eine doppelt so lange Kante ergibt das halbe Verhältnis.', '<strong>Ergebnis: Es halbiert sich</strong>'] }
      ]
    },
    'v10-hviezdy': {
      title: 'Entstehung, Entwicklung und Aufbau der Sterne',
      summary: 'Wie ein Stern entsteht, warum er im Gleichgewicht bleibt und wie seine Leuchtkraft von Radius und Temperatur abhängt.',
      theory: [
        `<p>Ein Stern entsteht aus einem verdichteten Bereich von interstellarem Gas und Staub, einem sogenannten Nebel. Die Gravitation verdichtet den Stoff, das Gas erwärmt sich, und wenn die Temperatur im Kern etwa einige zehn Millionen Kelvin erreicht, beginnt die thermonukleare Fusion, bei der Wasserstoff in Helium umgewandelt wird.</p>`,
        `<p><strong>Warum kollabiert der Stern nicht?</strong> Die Gravitation versucht, den Stern nach innen zu drücken, während der Druck des heißen Gases und der Strahlung in die entgegengesetzte Richtung wirkt. Wenn sich diese beiden Effekte die Waage halten, spricht man vom <em>hydrostatischen Gleichgewicht</em>. Der Stern ist stabil, solange dieses Gleichgewicht besteht.</p>`,
        `<p><strong>Leuchtkraft</strong> $L$ ist die gesamte Leistung, die der Stern abstrahlt. Nach dem Stefan-Boltzmann-Gesetz gilt $L=4\\pi R^2\\sigma T^4$, wobei $R$ der Radius und $T$ die Oberflächentemperatur ist. Die Leuchtkraft wächst mit dem Quadrat des Radius, aber mit der vierten Potenz der Temperatur, deshalb verändert eine kleine Temperaturänderung die Helligkeit deutlich.</p>`,
        `<p>Sterne ordnet man im <strong>Hertzsprung-Russell-Diagramm</strong> an: Auf der waagerechten Achse steht die Temperatur (oder Farbe), auf der senkrechten die Leuchtkraft. Die meisten Sterne, einschließlich der Sonne, liegen in der Hauptreihe, wo ein Stern im Kern Wasserstoff verbrennt.</p>`,
        { fig: 'v9v12-hr', caption: 'Hertzsprung-Russell-Diagramm: Hauptreihensterne verbrennen Wasserstoff, Riesen sind heller, und Weiße Zwerge sind bei hoher Temperatur lichtschwächer.' }
      ],
      examples: [
        { task: 'Ein Stern hat den dreifachen Radius der Sonne und die doppelte Oberflächentemperatur. Um wie viel Mal ist er leuchtkräftiger?',
          steps: [
            'Verhältnis der Leuchtkräfte: $\\frac{L}{L_\\odot}=\\left(\\frac{R}{R_\\odot}\\right)^2\\left(\\frac{T}{T_\\odot}\\right)^4$.',
            '$=3^2\\cdot 2^4=9\\cdot 16=144$.',
            '<strong>Ergebnis: 144-mal</strong>'
          ] }
      ]
    },
    'v10-galaxie': {
      title: 'Galaxien und ihre Entwicklung',
      summary: 'Die wichtigsten Galaxientypen und wie sie sich durch Sterne, Gas und Form unterscheiden.',
      theory: [
        `<p>Eine Galaxie ist ein gravitativ gebundenes System aus Sternen, Gas, Staub und dunkler Materie. Galaxien teilt man vor allem nach ihrer Form ein: <strong>elliptisch</strong> (glatt, aus alten Sternen bestehend), <strong>spiralförmig</strong> (flache Scheibe mit Armen) und <strong>unregelmäßig</strong>.</p>`,
        `<p>Die Form einer Galaxie hängt eng damit zusammen, wie viel Gas in ihr verbleibt. Gas ist der Rohstoff für neue Sterne: In den Spiralarmen entstehen ständig junge blaue Sterne, während in elliptischen Galaxien das Gas fast verbraucht ist und die Sternentstehung abklingt.</p>`,
        `<p>Galaxien wachsen durch die allmähliche Verdichtung von Materie, und oft wachsen sie durch <strong>Kollisionen und Verschmelzungen</strong> mit anderen Galaxien. Die gravitative Wechselwirkung kann dabei beide Galaxien umformen und eine neue Welle der Sternentstehung auslösen.</p>`
      ],
      examples: [
        { task: 'Eine Galaxie hat eine glatte elliptische Form und fast kein Gas. Welche Sterne überwiegen in ihr?',
          steps: ['Die Sternentstehung in einer Galaxie hängt vom Gasvorrat ab.', 'Ohne Gas entstehen keine neuen Sterne, es bleiben alte, rötliche Sterne.', '<strong>Ergebnis: alte Sterne</strong>'] }
      ]
    },
    'v10-cierne-diery': {
      title: 'Schwarze Löcher und Neutronensterne',
      summary: 'Was den Radius eines Schwarzen Lochs bestimmt und warum nach dem Verbrauch des Brennstoffs ein Neutronenstern oder ein Schwarzes Loch entsteht.',
      theory: [
        `<p>Wenn ein Stern mit ausreichender Masse seinen Kernbrennstoff erschöpft, kollabiert sein Kern. Übersteigt die verbleibende Masse nicht etwa das 1,4-Fache der Sonnenmasse, entsteht ein <strong>Neutronenstern</strong>: eine dichte Kugel mit einem Radius von etwa 10 km, gehalten durch den Druck der Neutronen.</p>`,
        `<p>Ein <strong>Schwarzes Loch</strong> entsteht, wenn die Masse größer ist. Die Gravitation ist in seiner Nähe so stark, dass nicht einmal Licht über die Grenze entweichen kann, die man <em>Ereignishorizont</em> nennt. Der Radius dieser Grenze ist der Schwarzschild-Radius.</p>`,
        `<p>Der Schwarzschild-Radius ist $r_s=\\frac{2GM}{c^2}$, wobei $G$ die Gravitationskonstante, $M$ die Masse und $c$ die Lichtgeschwindigkeit ist. Für die Masse der Sonne ergibt sich etwa $2{,}95\\,\\text{km}$. Der Radius ist proportional zur Masse, daher hat ein doppelt so schweres Schwarzes Loch einen doppelt so großen Horizont.</p>`,
        { fig: 'v9v12-cierna-diera', caption: 'Der Schwarzschild-Radius ist proportional zur Masse. Ein doppelt so schweres Schwarzes Loch hat einen doppelt so großen Horizont.' }
      ],
      examples: [
        { task: 'Wie groß ist der Schwarzschild-Radius eines Schwarzen Lochs mit der Masse $5\\,M_\\odot$?',
          steps: ['$r_s\\approx 2{,}95\\,\\text{km}\\cdot 5$.', '$r_s\\approx 14{,}75\\,\\text{km}$.', '<strong>Ergebnis: etwa 14,75 km</strong>'] }
      ]
    },
    'v10-exoplanety': {
      title: 'Exoplaneten und Planetensysteme',
      summary: 'Wie Astronomen Planeten bei anderen Sternen finden und was sie aus den Beobachtungen erfahren.',
      theory: [
        `<p>Ein <strong>Exoplanet</strong> ist ein Planet, der einen anderen Stern als die Sonne umkreist. Direkt sieht man ihn nur selten, deshalb sucht man ihn indirekt, am häufigsten durch den Transit oder durch die Messung der Bewegung des Sterns.</p>`,
        `<p><strong>Transitmethode:</strong> Wenn ein Planet vor seinem Stern vorbeizieht, sinkt dessen Helligkeit kurz ab. Der Helligkeitsabfall ist proportional zur Fläche, die der Planet verdeckt: $\\Delta\\text{Helligkeit}=\\left(\\frac{r_p}{R}\\right)^2$. Achtung, es ist die zweite Potenz des Verhältnisses der Radien.</p>`,
        `<p><strong>Dopplermethode:</strong> Der Planet zieht den Stern gravitativ an, und der Stern bewegt sich dadurch für den Beobachter leicht hin und her. Die Verschiebung der Spektrallinien verrät diese Bewegung, auch wenn der Planet selbst nicht zu sehen ist.</p>`,
        { fig: 'v9v12-tranzit', caption: 'Beim Planetentransit sinkt die Helligkeit des Sterns kurz um das Verhältnis der Flächen, also um (r_p/R)².' }
      ],
      examples: [
        { task: 'Ein Planet hat einen Radius, der ein Zehntel des Radius seines Sterns beträgt. Um wie viel Prozent sinkt die Helligkeit des Sterns beim Transit?',
          steps: ['$\\left(\\frac{1}{10}\\right)^2=\\frac{1}{100}$.', 'Die Helligkeit sinkt um $1\\,\\%$.', '<strong>Ergebnis: 1 %</strong>'] }
      ]
    },
    'v10-rozpinanie': {
      title: 'Ausdehnung des Universums',
      summary: 'Hubble-Gesetz: Je weiter eine Galaxie entfernt ist, desto schneller entfernt sie sich von uns.',
      theory: [
        `<p>Edwin Hubble stellte fest, dass die Spektren ferner Galaxien zum Roten verschoben sind. Diese <em>Rotverschiebung</em> bedeutet, dass sich die Galaxien von uns entfernen. Je weiter die Galaxie, desto größer ist ihre Verschiebung.</p>`,
        `<p><strong>Hubble-Gesetz:</strong> $v=H_0\\,d$, wobei $v$ die Fluchtgeschwindigkeit, $d$ die Entfernung und $H_0$ die Hubble-Konstante ist. Ihr Wert beträgt etwa $70\\,\\text{km/s/Mpc}$, wobei $1\\,\\text{Mpc}\\approx 3{,}26$ Millionen Lichtjahre ist.</p>`,
        `<p>Wichtig ist zu verstehen, dass <strong>sich die Galaxien nicht durch den Raum bewegen</strong>; es ist der Raum zwischen ihnen, der sich ausdehnt. Deshalb entfernen sich weiter entfernte Galaxien schneller, auch wenn sie keine eigene Geschwindigkeit haben.</p>`,
        { fig: 'v9v12-hubble', caption: "Hubble-Gesetz: Die Fluchtgeschwindigkeit der Galaxien ist proportional zu ihrer Entfernung." }
      ],
      examples: [
        { task: 'Eine Galaxie ist $100\\,\\text{Mpc}$ entfernt. Wie groß ist ihre Fluchtgeschwindigkeit?',
          steps: ['$v=H_0\\,d=70\\cdot 100$.', '<strong>Ergebnis: 7000 km/s</strong>'] }
      ]
    },
    'v10-velky-tresk': {
      title: 'Urknall und kosmische Mikrowellenhintergrundstrahlung',
      summary: 'Wie das Universum aus einer heißen Phase hervorging und warum wir heute eine schwache, aus allen Richtungen kommende Strahlung beobachten.',
      theory: [
        `<p>Nach dem Modell des <strong>Urknalls</strong> war das Universum einst sehr dicht und heiß. Seitdem dehnt es sich aus und kühlt sich ab. Es war keine Explosion in leerem Raum, sondern die Ausdehnung des Raumes selbst.</p>`,
        `<p>Kurz nach dem Anfang war das Universum mit Strahlung erfüllt, und es wurde durchsichtig, als sich Atome bildeten. Diese Strahlung wird seitdem nur gedehnt, und heute sehen wir sie als <strong>kosmische Mikrowellenhintergrundstrahlung</strong> mit einer Temperatur von etwa $2{,}725\\,\\text{K}$.</p>`,
        `<p>Die Ausdehnung vergrößert die Wellenlängen der Strahlung im gleichen Verhältnis wie den Maßstab des Universums. Die Temperatur der Strahlung war in der Vergangenheit daher proportional zu $(1+z)$, wobei $z$ die Rotverschiebung ist. Bei $z=1$ war die Temperatur doppelt so hoch wie heute.</p>`,
        { fig: 'v9v12-natiahnutie', caption: "Die Ausdehnung des Universums dehnt die Wellenlänge der Strahlung, daher hat der heutige Mikrowellenhintergrund eine niedrigere Temperatur." }
      ],
      examples: [
        { task: 'Wie hoch war die Temperatur der Strahlung bei der Rotverschiebung $z=3$?',
          steps: ['$T(z)=T_0(1+z)=2{,}725\\cdot(1+3)$.', '$=10{,}9\\,\\text{K}$.', '<strong>Ergebnis: etwa 10,9 K</strong>'] }
      ]
    },
    'v10-temna-hmota': {
      title: 'Dunkle Materie und dunkle Energie',
      summary: 'Die Belege für unsichtbare Materie und Energie und ihr Anteil an der Gesamtdichte des Universums.',
      theory: [
        `<p><strong>Dunkle Materie</strong> ist mit der Gravitation verbunden, sendet aber kein Licht aus und absorbiert keines. Ein Beleg dafür ist die Geschwindigkeit der Sterne am Rand von Galaxien, die ohne sie zu groß wäre, als dass die Galaxie zusammenbleiben könnte.</p>`,
        `<p><strong>Dunkle Energie</strong> ist der Bestandteil, der die Ausdehnung des Universums beschleunigt. Beobachtungen ferner Supernovae zeigten, dass sich die Ausdehnung gegenwärtig beschleunigt.</p>`,
        `<p>Die Anteile des gegenwärtigen Universums betragen etwa: gewöhnliche Materie $\\approx 5\\,\\%$, dunkle Materie $\\approx 27\\,\\%$ und dunkle Energie $\\approx 68\\,\\%$. Ist das Universum flach, gilt für die Gesamtdichte $\\Omega=1$ und $\\Omega_\\Lambda=1-\\Omega_m$.</p>`,
        { fig: 'v9v12-zlozenie', caption: 'Anteile des gegenwärtigen Universums: gewöhnliche Materie etwa 5 %, dunkle Materie 27 %, dunkle Energie 68 %.' }
      ],
      examples: [
        { task: 'Die Dichte der Materie beträgt $\\Omega_m=0{,}3$. Welchen Anteil hat die dunkle Energie in einem flachen Universum?',
          steps: ['$\\Omega_\\Lambda=1-\\Omega_m=1-0{,}3$.', '<strong>Ergebnis: 0,7</strong>'] }
      ]
    },
    'v10-kozmologicke-modely': {
      title: 'Kosmologische Modelle des Universums',
      summary: 'Wie die Gesamtdichte bestimmt, ob das Universum offen, flach oder geschlossen ist.',
      theory: [
        `<p>Ein kosmologisches Modell beschreibt die Geometrie und die Entwicklung des Universums. Die Schlüsselgröße ist das Verhältnis der mittleren Gesamtdichte $\\rho$ zur <em>kritischen Dichte</em> $\\rho_c$, bezeichnet als $\\Omega=\\rho/\\rho_c$.</p>`,
        `<ol>
        <li>$\\Omega &lt; 1$: ein <strong>offenes</strong> Universum, das sich für immer ausdehnt.</li>
        <li>$\\Omega = 1$: ein <strong>flaches</strong> Universum, dessen Raum euklidische Geometrie hat.</li>
        <li>$\\Omega &gt; 1$: ein <strong>geschlossenes</strong> Universum, das eine positive Krümmung hat.</li>
      </ol>`,
        `<p>Beobachtungen der kosmischen Hintergrundstrahlung zeigen, dass das heutige Universum sehr nahe an flach ist. Das moderne Modell, das die dunkle Energie einschließt, setzt daher eine Gesamtdichte nahe eins voraus.</p>`
      ],
      examples: [
        { task: 'Das Universum hat $\\Omega=0{,}4$. Welches Modell ist es?',
          steps: ['Wir vergleichen: $0{,}4&lt;1$.', '<strong>Ergebnis: ein offenes Universum</strong>'] }
      ]
    },
    'v11-hydrostatika': {
      title: 'Hydrostatik',
      summary: 'Der Druck in einer ruhenden Flüssigkeit hängt nur von Tiefe und Dichte ab, nicht von der Form des Gefäßes.',
      theory: [
        `<p><strong>Hydrostatik</strong> untersucht Flüssigkeiten im Ruhezustand. Der Druck in einer Flüssigkeit in der Tiefe $h$ ist $p=\\rho g h$, wobei $\\rho$ die Dichte der Flüssigkeit und $g$ die Fallbeschleunigung ist. Dies ist der <em>Überdruck</em>, also der Druck über dem Atmosphärendruck.</p>`,
        `<p>Der Druck hängt nicht von der Form des Gefäßes ab. In einem breiten und in einem schmalen Gefäß gleicher Tiefe ist der Druck am Boden gleich. Dieses scheinbare Paradoxon erklärt sich dadurch, dass das Gewicht der Flüssigkeit von den Wänden des Gefäßes getragen wird und nicht vom Boden.</p>`,
        `<p>Der Gesamt- (absolute) Druck beträgt $p=p_0+\\rho g h$, wobei $p_0$ der Atmosphärendruck ist. Der Druckunterschied in einer Flüssigkeit ist proportional zum Höhenunterschied, daher steigt der Druck nach unten.</p>`,
        `<p><strong>Pascalsches Gesetz:</strong> Ein auf eine eingeschlossene Flüssigkeit ausgeübter Druck wird in alle Richtungen gleich übertragen. Es wird bei hydraulischen Hebebühnen genutzt, wo eine kleine Kraft auf einem kleinen Kolben eine große Last auf einem großen Kolben hebt.</p>`,
        { fig: 'v9v12-nadoba', caption: 'Der Druck in einer Flüssigkeit hängt von der Tiefe h ab, nicht von der Form des Gefäßes. Am Boden beider Gefäße herrscht der gleiche Druck.' }
      ],
      examples: [
        { task: 'Wie groß ist der Überdruck von Wasser in einer Tiefe von $4\\,\\text{m}$? Die Dichte von Wasser beträgt $1000\\,\\text{kg/m}^3$ und $g=9{,}81\\,\\text{m/s}^2$.',
          steps: ['$p=\\rho g h=1000\\cdot 9{,}81\\cdot 4=39\\,240\\,\\text{Pa}$.', '<strong>Ergebnis: 39,24 kPa</strong>'] }
      ]
    },
    'v11-tlak-vztlak': {
      title: 'Druck und Auftrieb',
      summary: 'Archimedisches Prinzip: Ein eingetauchter Körper erfährt eine Auftriebskraft, die gleich dem Gewicht der verdrängten Flüssigkeit ist.',
      theory: [
        `<p>Ein in eine Flüssigkeit getauchter Körper wird durch eine nach oben gerichtete Kraft leichter. Diese <strong>Auftriebskraft</strong> ist durch das Archimedische Prinzip gegeben: $F_{vz}=\\rho_k\\,g\\,V$, wobei $\\rho_k$ die Dichte der Flüssigkeit und $V$ das Volumen des eingetauchten Teils des Körpers ist.</p>`,
        `<p>Die Auftriebskraft hängt nicht von der Tiefe oder der Dichte des Körpers ab, sondern nur vom Volumen der verdrängten Flüssigkeit. Dies nennt man das Gewicht der verdrängten Flüssigkeit.</p>`,
        `<p>Ob ein Körper schwimmt, entscheidet der Vergleich der Dichten. Ein Körper mit kleinerer Dichte als die Flüssigkeit schwimmt und sinkt nur so weit ein, dass die verdrängte Flüssigkeit das Gewicht des ganzen Körpers hat. Ein Körper mit größerer Dichte sinkt auf den Boden.</p>`,
        { fig: 'obr-vztlak', caption: 'Die Auftriebskraft F_vz zeigt nach oben und die Gewichtskraft F_g nach unten. Ein eingetauchter Körper wird um das Gewicht der verdrängten Flüssigkeit leichter.' }
      ],
      examples: [
        { task: 'Ein Körper mit dem Volumen $3\\,\\text{dm}^3$ ist vollständig in Wasser getaucht. Wie groß ist die Auftriebskraft?',
          steps: ['$V=3\\,\\text{dm}^3=0{,}003\\,\\text{m}^3$.', '$F_{vz}=1000\\cdot 9{,}81\\cdot 0{,}003=29{,}43\\,\\text{N}$.', '<strong>Ergebnis: 29,43 N</strong>'] }
      ]
    },
    'v11-kontinuita': {
      title: 'Kontinuitätsgleichung',
      summary: 'Wenn eine Flüssigkeit entlang der Strömung weder entweicht noch sich ansammelt, ist das Produkt aus Querschnitt und Geschwindigkeit konstant.',
      theory: [
        `<p>Bei stationärer Strömung einer inkompressiblen Flüssigkeit sammelt sich die Masse weder an, noch verschwindet sie. Deshalb muss durch jeden Querschnitt in der Zeiteinheit dasselbe Volumen fließen: $S_1 v_1 = S_2 v_2 = \\text{konst.}$</p>`,
        `<p>Die Größe $Q=S\\,v$ heißt <strong>Volumenstrom</strong>. Dort, wo ein Rohr enger ist, fließt das Wasser schneller. Deshalb beschleunigt sich ein Fluss an einer engen Stelle und verlangsamt sich in einer breiten Ebene.</p>`,
        `<p>Die Kontinuitätsgleichung ist der Erhaltungssatz der Masse für eine Flüssigkeitsströmung. Sie gilt genau für inkompressible Flüssigkeiten und näherungsweise für Gase bei kleinen Geschwindigkeiten.</p>`,
        { fig: 'v9v12-kontinuita', caption: 'Für eine inkompressible Flüssigkeit gilt S₁v₁ = S₂v₂. Wo der Querschnitt kleiner ist, fließt die Flüssigkeit schneller.' }
      ],
      examples: [
        { task: 'Ein Rohr verengt sich von einem Querschnitt von $6\\,\\text{cm}^2$ auf $2\\,\\text{cm}^2$. Das Wasser im breiteren Abschnitt fließt mit $1{,}5\\,\\text{m/s}$. Wie groß ist die Geschwindigkeit im engeren Abschnitt?',
          steps: ['$S_1 v_1=S_2 v_2$, daher $v_2=\\frac{6\\cdot 1{,}5}{2}$.', '<strong>Ergebnis: 4,5 m/s</strong>'] }
      ]
    },
    'v11-bernoulli': {
      title: 'Bernoullische Gleichung',
      summary: 'Die Energie in einer strömenden Flüssigkeit bleibt erhalten: Wo die Geschwindigkeit größer ist, ist der Druck kleiner.',
      theory: [
        `<p><strong>Die Bernoullische Gleichung</strong> drückt den Energieerhaltungssatz für eine ideale, inkompressible und reibungsfreie Flüssigkeit in einer Strömung aus: $p+\\frac{1}{2}\\rho v^2+\\rho g h=\\text{konst.}$ Die Terme auf der linken Seite sind Druck, kinetische und potenzielle Energie je Volumeneinheit.</p>`,
        `<p>Für ein waagerechtes Rohr ($h$ ist überall gleich) gilt $p_1+\\frac{1}{2}\\rho v_1^2=p_2+\\frac{1}{2}\\rho v_2^2$. Steigt die Geschwindigkeit an einer Stelle, sinkt dort der Druck.</p>`,
        `<p>Diese Erscheinung heißt <strong>Venturi-Effekt</strong> und wird in Vergasern, Venturi-Durchflussmessern und Vakuumpumpen genutzt. Sie tritt vor allem an verengten Stellen eines Rohres auf.</p>`,
        { fig: 'v9v12-venturi', caption: 'An der verengten Stelle steigt die Geschwindigkeit und der Druck sinkt. Die Flüssigkeitsstände in den Manometerrohren zeigen dies.' }
      ],
      examples: [
        { task: 'Wasser strömt durch ein waagerechtes Rohr. An der engen Stelle beträgt die Geschwindigkeit $6\\,\\text{m/s}$, an der breiten $2\\,\\text{m/s}$. Wie groß ist die Druckdifferenz $p_1-p_2$ in kPa?',
          steps: ['$p_1-p_2=\\frac{1}{2}\\rho\\left(v_2^2-v_1^2\\right)=\\frac{1}{2}\\cdot 1000\\cdot(36-4)$.', '$=16\\,000\\,\\text{Pa}$.', '<strong>Ergebnis: 16 kPa</strong>'] }
      ]
    },
    'v11-viskozita': {
      title: 'Viskosität und laminare Strömung',
      summary: 'Innere Reibung von Flüssigkeiten, das Stokessche Gesetz und der Widerstand bei langsamer Bewegung einer kleinen Kugel.',
      theory: [
        `<p><strong>Viskosität</strong> (dynamische Viskosität $\\eta$) ist ein Maß für die innere Reibung einer Flüssigkeit. Honig hat eine höhere Viskosität als Wasser, weil seine Schichten schwerer gegeneinander gleiten. Die Einheit ist $\\text{Pa}\\cdot\\text{s}$.</p>`,
        `<p><strong>Laminare Strömung</strong> ist gleichmäßig: Die Flüssigkeitsschichten gleiten aneinander vorbei, ohne sich zu vermischen. Bei langsamer Bewegung eines Körpers in einer Flüssigkeit entsteht ein zur Geschwindigkeit proportionaler Widerstand: <em>das Stokessche Gesetz</em> $F=6\\pi\\eta r v$ für eine Kugel mit dem Radius $r$.</p>`,
        `<p>Achtung auf den Unterschied zwischen Radius und Durchmesser: Die Formel enthält den Radius $r$. Setzt man den Durchmesser ein, wird die Kraft doppelt so groß.</p>`,
        { fig: 'v9v12-vrstvy', caption: 'Bei laminarer Strömung gleiten die Flüssigkeitsschichten aneinander vorbei, und die innere Reibung verursacht den Widerstand.' }
      ],
      examples: [
        { task: 'Eine Kugel mit dem Radius $1\\,\\text{cm}$ bewegt sich mit der Geschwindigkeit $0{,}5\\,\\text{m/s}$ in einer Flüssigkeit mit $\\eta=2\\,\\text{Pa}\\cdot\\text{s}$. Wie groß ist der Widerstand?',
          steps: ['$F=6\\pi\\eta r v=6\\pi\\cdot 2\\cdot 0{,}01\\cdot 0{,}5$.', '$F\\approx 0{,}188\\,\\text{N}$.', '<strong>Ergebnis: etwa 188 mN</strong>'] }
      ]
    },
    'v11-turbulencia': {
      title: 'Turbulenz',
      summary: 'Die Reynolds-Zahl entscheidet, ob die Strömung glatt oder verwirbelt ist.',
      theory: [
        `<p>Bei höheren Geschwindigkeiten und größeren Durchmessern zerfällt die laminare Strömung in eine <strong>turbulente</strong> Strömung: Es entstehen Wirbel und Vermischungen, die sich zeitlich und räumlich unregelmäßig ändern.</p>`,
        `<p>Die Art der Strömung bestimmt die <strong>Reynolds-Zahl</strong> $\\text{Re}=\\frac{\\rho v d}{\\eta}$, wobei $d$ eine charakteristische Abmessung ist (zum Beispiel der Durchmesser eines Rohres). Für ein Rohr gilt näherungsweise: $\\text{Re}&lt;2300$ laminar, $\\text{Re}&gt;4000$ turbulent, dazwischen liegt die Übergangsströmung.</p>`,
        `<p>Turbulenz erhöht den Strömungswiderstand und die Vermischung von Stoffen. In der Praxis versucht man deshalb, die Strömung glatt zu halten, zum Beispiel über Flugzeugflügeln, oder man erzeugt umgekehrt Turbulenz, damit sich der Kraftstoff besser vermischt.</p>`,
        { fig: 'v9v12-profil', caption: 'Bei laminarer Strömung ist die Geschwindigkeit über den Querschnitt parabelförmig; bei turbulenter Strömung ist das Profil flacher.' }
      ],
      examples: [
        { task: `Wasser ($\\rho=1000\\,\\text{kg/m}^3$, $\\eta=10^{-3}\\,\\text{Pa}\\cdot\\text{s}$) fließt mit einer Geschwindigkeit von $1\\,\\text{m/s}$ durch ein Rohr mit dem Durchmesser $0{,}05\\,\\text{m}$. Wie groß ist die Reynolds-Zahl?`,
          steps: ['$\\text{Re}=\\frac{1000\\cdot 1\\cdot 0{,}05}{10^{-3}}$.', '<strong>Ergebnis: Re = 50 000, die Strömung ist turbulent</strong>'] }
      ]
    },
    'v11-aerodynamika': {
      title: 'Gasströmung und Aerodynamik',
      summary: 'Aerodynamischer Widerstand und Auftrieb: wovon sie abhängen und warum sie mit dem Quadrat der Geschwindigkeit wachsen.',
      theory: [
        `<p>Bei gewöhnlichen Geschwindigkeiten sind Gase nahezu inkompressibel und lassen sich in vielen Hinsichten mit denselben Gesetzen wie Flüssigkeiten beschreiben. Körper, die sich durch die Luft bewegen, werden durch den <strong>aerodynamischen Widerstand</strong> gebremst.</p>`,
        `<p>Der Widerstand ist gegeben durch $F=\\frac{1}{2}\\,c_w\\,\\rho\\,S\\,v^2$, wobei $c_w$ der Widerstandsbeiwert (die Form des Körpers), $\\rho$ die Dichte der Luft, $S$ die Stirnfläche und $v$ die Geschwindigkeit ist. Der Widerstand wächst mit dem <strong>Quadrat</strong> der Geschwindigkeit: doppelte Geschwindigkeit bedeutet vierfachen Widerstand.</p>`,
        `<p>Der Flügel eines Flugzeugs oder eines Fahrzeugs erzeugt <strong>Auftrieb</strong>, weil die Strömung über ihm schneller ist und der Druck dort niedriger (nach Bernoulli). Die stromlinienförmige Gestalt ist daher so ausgelegt, dass der Widerstand möglichst klein und der Auftrieb möglichst groß ist.</p>`,
        { fig: 'v9v12-krido', caption: 'Über dem Flügel ist die Strömung schneller und der Druck niedriger, unter dem Flügel ist der Druck höher. Der Druckunterschied erzeugt den Auftrieb.' }
      ],
      examples: [
        { task: 'Ein Auto hat eine Stirnfläche von $2\\,\\text{m}^2$, einen Widerstandsbeiwert $c_w=0{,}5$ und fährt mit $20\\,\\text{m/s}$. Wie groß ist der Luftwiderstand? Die Dichte der Luft beträgt $1{,}2\\,\\text{kg/m}^3$.',
          steps: ['$F=\\frac{1}{2}\\cdot 0{,}5\\cdot 1{,}2\\cdot 2\\cdot 20^2$.', '$=0{,}6\\cdot 400=240\\,\\text{N}$.', '<strong>Ergebnis: 240 N</strong>'] }
      ]
    },
    'v12-modelovanie': {
      title: 'Mathematische Modellierung physikalischer Vorgänge',
      summary: 'Wie man aus einer physikalischen Überlegung ein mathematisches Modell aufbaut und prüft, ob es mit der Beobachtung übereinstimmt.',
      theory: [
        `<p>Ein <strong>Modell</strong> ist eine vereinfachte mathematische Beschreibung eines Vorgangs. Zuerst bestimmen wir die Größen, die das Ergebnis beeinflussen, dann schreiben wir die Beziehungen zwischen ihnen auf, und schließlich prüfen wir, ob die Rechnung mit der Messung oder mit einer vernünftigen Erwartung übereinstimmt.</p>`,
        `<p>Ein typisches Beispiel ist der <strong>radioaktive Zerfall</strong>. Die Zahl der unzerfallenen Kerne nimmt proportional zu ihrer momentanen Anzahl ab, was zu einem Exponentialgesetz führt. Mit einer Halbwertszeit $T_{1/2}$ gilt $N(t)=N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>Das Modell hat Grenzen: Es setzt voraus, dass der Zerfall zufällig und unabhängig von der Umgebung ist. Eine tatsächliche Messung kann daher kleine Abweichungen zeigen, die sich bei einer großen Anzahl von Kernen ausmitteln.</p>`,
        { fig: 'v9v12-rozpad', caption: 'Bei jeder Halbwertszeit halbiert sich die Zahl der unzerfallenen Kerne; das Exponentialgesetz lautet N = N₀(1/2)^(t/T½).' }
      ],
      examples: [
        { task: 'Eine Probe enthält anfangs $800$ Kerne, die Halbwertszeit beträgt $10$ Jahre. Wie viele Kerne bleiben nach $30$ Jahren übrig?',
          steps: ['Nach $30$ Jahren sind $3$ Halbwertszeiten vergangen.', '$N=800\\cdot\\left(\\frac{1}{2}\\right)^3=800\\cdot\\frac{1}{8}$.', '<strong>Ergebnis: 100 Kerne</strong>'] }
      ]
    },
    'v12-diferencialne-rovnice': {
      title: 'Differentialgleichungen',
      summary: 'Bewegungsgleichungen sind Differentialgleichungen; wir lösen sie durch Integration und eine Anfangsbedingung.',
      theory: [
        `<p>Newtons zweites Gesetz $F=ma$ ist eine Differentialgleichung, denn die Beschleunigung ist die Ableitung der Geschwindigkeit: $a=\\frac{dv}{dt}$. Die Größen treten hier nicht direkt auf, sondern über ihre <em>Änderung</em> in der Zeit.</p>`,
        `<p>Die <strong>Lösung</strong> findet man durch Integration. Aus $\\frac{dv}{dt}=a$ folgt $v(t)=at+C$. Die Konstante $C$ bestimmt man aus der <em>Anfangsbedingung</em>, zum Beispiel $v(0)=v_0$. Eine Differentialgleichung wird deshalb immer zusammen mit einer solchen Bedingung gelöst.</p>`,
        `<p>Differentialgleichungen beschreiben fast alle dynamischen Vorgänge: die Bewegung von Körpern, elektrische Schaltungen, die Ausbreitung von Wärme oder Wellen. Ihre Lösung ist nur dann eindeutig, wenn wir genügend Anfangsbedingungen kennen.</p>`,
        { fig: 'v9v12-rovnice', caption: 'Die Gleichung dv/dt = a hat unendlich viele Lösungen v = at + C. Die Anfangsbedingung wählt eine davon aus.' }
      ],
      examples: [
        { task: 'Löse $\\frac{dv}{dt}=2$ mit der Bedingung $v(0)=5$. Wie groß ist die Geschwindigkeit zur Zeit $t=4$?',
          steps: ['$v(t)=2t+C$, und aus $v(0)=5$ folgt $C=5$.', '$v(t)=2t+5$, daher $v(4)=8+5$.', '<strong>Ergebnis: 13</strong>'] }
      ]
    },
    'v12-vektory': {
      title: 'Vektoranalysis und Tensoren',
      summary: 'Skalar- und Vektorprodukt, die die Arbeit einer Kraft und das Moment einer Kraft beschreiben; der Tensor als Verallgemeinerung.',
      theory: [
        `<p>Ein <strong>Vektor</strong> hat einen Betrag und eine Richtung; wir schreiben ihn durch seine Komponenten $\\vec a=(a_1,a_2,a_3)$. Vektoren addiert man komponentenweise. Der Betrag ist $|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}$.</p>`,
        `<p>Das <strong>Skalarprodukt</strong> $\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3$ ist eine Zahl. Es wird für die Arbeit einer Kraft verwendet: $W=\\vec F\\cdot\\vec s$. Außerdem gilt $\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\varphi$, es ist also null für zueinander senkrechte Vektoren.</p>`,
        `<p>Das <strong>Vektorprodukt</strong> $\\vec a\\times\\vec b$ ist ein Vektor, der auf beiden Ausgangsvektoren senkrecht steht, zum Beispiel das Moment einer Kraft $\\vec M=\\vec r\\times\\vec F$. Ein <strong>Tensor</strong> ist eine Verallgemeinerung: Der Spannungstensor in einem Festkörper ordnet zum Beispiel jeder Ebene einen Kraftvektor zu.</p>`,
        { fig: 'v9v12-moment', caption: 'Das Moment der Kraft M = r × F ist ein Vektor, der sowohl auf dem Ortsvektor r als auch auf der Kraft F senkrecht steht.' }
      ],
      examples: [
        { task: 'Berechne $\\vec a\\cdot\\vec b$ für $\\vec a=(1,2,3)$ und $\\vec b=(4,-5,6)$.',
          steps: ['$1\\cdot 4+2\\cdot(-5)+3\\cdot 6$.', '$=4-10+18=12$.', '<strong>Ergebnis: 12</strong>'] }
      ]
    },
    'v12-fourier': {
      title: 'Fourier-Analyse',
      summary: 'Ein periodisches Signal wird in sinusförmige Anteile zerlegt, und man ermittelt, welche Frequenzen es enthält.',
      theory: [
        `<p>Jeder periodische Verlauf mit der Periode $T$ lässt sich als Summe von Sinus- und Kosinusfunktionen mit Vielfachen der Grundfrequenz $\\omega=\\frac{2\\pi}{T}$ schreiben. Diese Summe ist eine <strong>Fourier-Reihe</strong>; ihre Glieder nennt man harmonische Komponenten.</p>`,
        `<p>Die Koeffizienten der Entwicklung findet man durch Integration: Man multipliziert das Signal mit der passenden Funktion und integriert das Ergebnis über eine Periode. Dank der <em>Orthogonalität</em> von Sinus und Kosinus verschwinden die übrigen Glieder.</p>`,
        `<p>Ein Rechtecksignal mit der Amplitude $A$ enthält nur ungerade Harmonische, und die Amplitude der $n$-ten beträgt $\\frac{4A}{n\\pi}$. Die Fourier-Entwicklung zeigt, welche Frequenzen übertragen werden müssen, damit das Signal nicht verzerrt wird, und ist die Grundlage der Spektralanalyse.</p>`,
        { fig: 'v9v12-fourier', caption: 'Ein Rechtecksignal lässt sich aus Sinusfunktionen zusammensetzen. Die erste Harmonische hat die Amplitude 4A/π.' }
      ],
      examples: [
        { task: 'Wie groß ist die Amplitude der ersten Harmonischen eines Rechtecksignals mit der Amplitude $A=3$?',
          steps: ['Für die erste Harmonische gilt $n=1$ und die Formel $\\frac{4A}{n\\pi}$.', '$\\frac{4\\cdot 3}{\\pi}\\approx 3{,}82$.', '<strong>Ergebnis: etwa 3,82</strong>'] }
      ]
    },
    'v12-numericke-metody': {
      title: 'Numerische Lösung physikalischer Probleme',
      summary: 'Wenn sich eine Gleichung nicht mit einer Formel lösen lässt, löst man sie in kleinen Schritten, zum Beispiel mit dem Euler-Verfahren.',
      theory: [
        `<p>Viele Differentialgleichungen besitzen keine Lösung in Form einer Formel. In solchen Fällen löst man sie <strong>numerisch</strong>: Die Zeit wird in Schritte der Länge $h$ unterteilt, und in jedem Schritt schätzt man die Änderung der Größe ab.</p>`,
        `<p>Das <strong>Euler-Verfahren</strong> für die Gleichung $\\frac{dy}{dt}=f(t,y)$ berechnet $y_{n+1}=y_n+h\\,f(t_n,y_n)$. Es ist einfach, der Fehler sinkt aber nur linear mit dem Schritt, deshalb verwendet man in der Praxis genauere Verfahren, zum Beispiel Runge-Kutta.</p>`,
        `<p>Die Wahl des Schritts ist ein Kompromiss: Ein kleiner Schritt liefert ein genaueres Ergebnis, erfordert aber mehr Rechenaufwand. Ein zu großer Schritt kann Instabilität verursachen, bei der die Abweichungen wachsen und die Lösung sinnlos wird.</p>`,
        { fig: 'v9v12-euler', caption: 'Das Euler-Verfahren mit dem Schritt h = 0,5 nähert die Gleichung dy/dt = y durch einen Polygonzug an, der unter der genauen Kurve verläuft.' }
      ],
      examples: [
        { task: `Löse $\\frac{dy}{dt}=-y$ mit $y(0)=10$ nach dem Euler-Verfahren mit dem Schritt $h=0{,}1$. Wie groß ist der Wert $y_1$?`,
          steps: ['$y_1=y_0+h\\cdot(-y_0)=10+0{,}1\\cdot(-10)$.', '$=10-1=9$.', '<strong>Ergebnis: 9</strong>'] }
      ]
    },
    'v12-pocitacove-simulacie': {
      title: 'Computersimulationen',
      summary: 'Eine Simulation läuft in Schritten ab; die Schrittlänge und die Gesamtzeit bestimmen die Anzahl der Rechenoperationen.',
      theory: [
        `<p>Eine <strong>Computersimulation</strong> wendet das Bewegungsgesetz wiederholt über kleine Zeitschritte an. Am Anfang kennen wir den Zustand des Systems (Orte, Geschwindigkeiten), und in jedem Schritt wird ein neuer Zustand berechnet.</p>`,
        `<p>Die Anzahl der Schritte für eine Zeit $t$ und einen Schritt $h$ ist $N=\\frac{t}{h}$. Halbiert man den Schritt, dauert die Rechnung doppelt so lange, dafür steigt die Genauigkeit. Dies lässt sich nicht beliebig von Hand wählen; am Computer ist es eine Schlüsselentscheidung.</p>`,
        `<p>Simulationen werden überall dort verwendet, wo es keine Lösung in Form einer Formel gibt: die Bewegung von Planeten in einem Dreikörperproblem, die Luftströmung um einen Flügel oder die Ausbreitung von Wärme in einem Werkstoff.</p>`
      ],
      examples: [
        { task: 'Eine Simulation des Falls soll $10\\,\\text{s}$ dauern und der Schritt beträgt $0{,}05\\,\\text{s}$. Wie viele Schritte sind nötig?',
          steps: ['$N=\\frac{t}{h}=\\frac{10}{0{,}05}$.', '<strong>Ergebnis: 200 Schritte</strong>'] }
      ]
    },
    'v12-konecne-prvky': {
      title: 'Die Finite-Elemente-Methode',
      summary: 'Ein komplexer Körper wird in einfache Elemente zerlegt, und deren Eigenschaften werden zu einem Gleichungssystem zusammengesetzt.',
      theory: [
        `<p>Die <strong>Finite-Elemente-Methode (FEM)</strong> zerlegt eine komplexe Struktur in viele einfache Teile (Elemente), zum Beispiel Dreiecke. Für jedes Element schreiben wir eine einfache Gleichung auf, die die Kräfte und Verschiebungen seiner Knoten verbindet.</p>`,
        `<p>Die Elemente werden dann zu einem <strong>globalen Gleichungssystem</strong> zusammengefügt, das der Computer löst. Bei Federn oder Stäben gilt: Bei einer <em>Reihenschaltung</em> addieren sich die Nachgiebigkeiten, also $\\frac{1}{k}=\\frac{1}{k_1}+\\frac{1}{k_2}$. Bei einer <em>Parallelschaltung</em> addieren sich die Steifigkeiten: $k=k_1+k_2$.</p>`,
        `<p>FEM wird bei Festigkeitsberechnungen, Strömungen und Wärmeleitung eingesetzt. Das Ergebnis ist näherungsweise; seine Genauigkeit wächst mit der Anzahl und der Feinheit der Elemente.</p>`,
        { fig: 'v9v12-pruziny', caption: 'Hintereinander geschaltete Federn haben eine kleinere Steifigkeit; parallel geschaltete Federn haben Steifigkeiten, die sich addieren.' }
      ],
      examples: [
        { task: 'Zwei Federn mit den Steifigkeiten $k_1=6\\,\\text{N/m}$ und $k_2=3\\,\\text{N/m}$ sind hintereinandergeschaltet. Wie groß ist die Ersatzsteifigkeit?',
          steps: ['$\\frac{1}{k}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$.', '$k=2\\,\\text{N/m}$.', '<strong>Ergebnis: 2 N/m</strong>'] }
      ]
    },
    'v12-komplexne-systemy': {
      title: 'Modellierung komplexer Systeme',
      summary: 'Viele einfache Teilchen mit gegenseitigen Kopplungen führen zu komplexem Verhalten, und die Zahl der Kopplungen wächst schnell.',
      theory: [
        `<p>Ein <strong>komplexes System</strong> besteht aus vielen Teilen, die miteinander wechselwirken. Das Verhalten des Ganzen folgt oft nicht aus der Summe der Eigenschaften der einzelnen Teile, sondern aus ihren gegenseitigen Kopplungen. Man spricht von <em>emergentem</em> Verhalten.</p>`,
        `<p>Die Zahl der gegenseitigen Kopplungen wächst schnell. Bei $N$ Teilchen, von denen jedes einmal auf jedes andere wirkt, entstehen $\\binom{N}{2}=\\frac{N(N-1)}{2}$ Paare. Bei $N=100$ sind es bereits $4950$ Kopplungen.</p>`,
        `<p>Für die Modellierung verwendet man zum Beispiel <strong>agentenbasierte Modelle</strong> (jedes Teilchen folgt einfachen Regeln) oder <strong>Monte-Carlo-Simulationen</strong>, die die möglichen Zustände zufällig stichprobenartig erfassen. Das Ergebnis ist immer eine Schätzung, die überprüft werden muss.</p>`
      ],
      examples: [
        { task: 'Im System gibt es $5$ Teilchen, und jedes wirkt einmal auf jedes andere. Wie viele verschiedene Paare entstehen?',
          steps: ['$\\binom{5}{2}=\\frac{5\\cdot 4}{2}$.', '<strong>Ergebnis: 10 Paare</strong>'] }
      ]
    }
  }
});
