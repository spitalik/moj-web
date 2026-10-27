/* Deutsch: Lektionen der Stufen v5–v8 (js/rocniky/v5.js, v6.js, v7.js, v8.js). Struktur und Schlüssel: js/content-i18n.js. */
CONTENT_I18N.add('de', {
  lessons: {
    'v5-dualizmus': {
      title: `Welle-Teilchen-Dualismus`,
      summary: `Licht und Teilchen verhalten sich sowohl als Welle als auch als Teilchen; die de-Broglie-Wellenlänge.`,
      theory: [
        `<p>Der photoelektrische Effekt und der Compton-Effekt zeigten, dass sich Licht wie ein Strom von Teilchen (Photonen) mit der Energie $E=h\\,f$ verhält. Interferenz und Beugung dagegen zeigen Welleneigenschaften. Man spricht vom <strong>Welle-Teilchen-Dualismus</strong>: Jedes Quantenobjekt besitzt beide Eigenschaften, doch bei einer konkreten Messung tritt jeweils nur eine davon hervor.</p>`,
        `<p>Louis de Broglie schlug vor, dass auch Teilchen mit dem Impuls $p$ eine Wellenlänge $\\lambda=\\frac{h}{p}$ besitzen. Für ein freies Elektron mit der Geschwindigkeit $v$ (nichtrelativistisch) gilt $p=m_e\\,v$. Je schwerer oder schneller ein Teilchen ist, desto kürzer ist seine Wellenlänge.</p>`,
        `<p>Deshalb haben makroskopische Körper (z. B. eine kleine Kugel) eine so kleine Wellenlänge, dass sie nicht beobachtbar ist, während Elektronen in einem Kristall ein Beugungsbild ähnlich dem der Röntgenstrahlung erzeugen. Die Konstante $h=6{,}63\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$ bestimmt, wo sich Quanteneffekte zeigen.</p>`,
        { fig: 'v5v8-dualizmus', caption: `De-Broglie-Wellenlänge λ = h/p: Je größer der Impuls, desto kürzer die Welle.` }
      ],
      examples: [
        { task: `Ein Elektron bewegt sich mit der Geschwindigkeit $v=2\\cdot 10^{6}\\,\\text{m/s}$. Wie groß ist seine de-Broglie-Wellenlänge? Verwende $m_e=9{,}11\\cdot 10^{-31}\\,\\text{kg}$.`,
          steps: [`$p=m_e v=9{,}11\\cdot 10^{-31}\\cdot 2\\cdot 10^{6}$.`, `$\\lambda=\\frac{h}{p}=\\frac{6{,}63\\cdot 10^{-34}}{1{,}82\\cdot 10^{-24}}\\approx 3{,}6\\cdot 10^{-10}\\,\\text{m}$.`, `<strong>Ergebnis: $\\lambda\\approx 0{,}36\\,\\text{nm}$</strong>`] }
      ]
    },
    'v5-vlnova-funkcia': {
      title: `Wellenfunktion und Wahrscheinlichkeit`,
      summary: `Die Wellenfunktion ψ, die Wahrscheinlichkeitsdichte |ψ|² und die Berechnung der Wahrscheinlichkeit für einen Abschnitt.`,
      theory: [
        `<p>Den Zustand eines Quantenteilchens beschreibt die <strong>Wellenfunktion</strong> $\\psi(x,t)$. Sie selbst ist nicht messbar. Ihr Betragsquadrat $|\\psi|^2$ ist die <strong>Wahrscheinlichkeitsdichte</strong>: Die Wahrscheinlichkeit, das Teilchen in einer kleinen Umgebung des Punktes $x$ anzutreffen, beträgt $|\\psi|^2\\,dx$.</p>`,
        `<p>Die Wahrscheinlichkeit, das Teilchen in einem endlichen Abschnitt $[x_1,x_2]$ zu finden, ist das Integral $P=\\int_{x_1}^{x_2}|\\psi|^2\\,dx$. Die Gesamtwahrscheinlichkeit beträgt 1, also $\\int|\\psi|^2\\,dx=1$. Eine solche Funktion heißt normiert.</p>`,
        `<p>Die Quantenmechanik liefert daher nur <em>Wahrscheinlichkeiten</em> für Messergebnisse, keine exakten Werte für ein einzelnes Teilchen. Ist die Dichte gleichmäßig, entspricht die Wahrscheinlichkeit dem Verhältnis der Länge des Abschnitts zur Gesamtlänge des Bereichs.</p>`,
        { fig: 'v5v8-pravdepodobnost', caption: `Bei gleichmäßiger Dichte |ψ|² ist die Wahrscheinlichkeit proportional zur Länge des Abschnitts: P = a/L.` }
      ],
      examples: [
        { task: `Ein Teilchen ist mit gleichbleibender Dichte auf einer Strecke der Länge $L=20\\,\\text{nm}$ verteilt. Wie groß ist die Wahrscheinlichkeit, dass es sich im Abschnitt von $0$ bis $5\\,\\text{nm}$ befindet?`,
          steps: [`Die Dichte ist konstant, $|\\psi|^2=\\frac{1}{L}$.`, `$P=\\frac{5}{20}=\\frac{1}{4}$.`, `<strong>Ergebnis: $P=0{,}25$</strong>`] }
      ]
    },
    'v5-schrodinger': {
      title: `Schrödinger-Gleichung`,
      summary: `Die zeitunabhängige Schrödinger-Gleichung und die Energien eines Teilchens im unendlich tiefen Potentialtopf.`,
      theory: [
        `<p>Die <strong>Schrödinger-Gleichung</strong> beschreibt die zeitliche Entwicklung der Wellenfunktion. Ihre zeitunabhängige Form $\\hat{H}\\psi=E\\psi$ besagt, dass die Energie $E$ bei stationären Zuständen konstant ist und die Wellenfunktion eine Eigenfunktion des Energieoperators $\\hat{H}$ ist.</p>`,
        `<p>Betrachten wir ein Teilchen im <strong>unendlich tiefen Potentialtopf</strong> der Breite $L$. Die Wellenfunktion muss an den Rändern des Topfes verschwinden, daher passt in den Topf nur eine ganze Anzahl halber Wellenlängen. Es ergeben sich diskrete Energien $E_n=\\frac{n^2 h^2}{8 m L^2}$, wobei $n=1,2,3,\\dots$</p>`,
        `<p>Die Energie wächst mit dem Quadrat der Zahl $n$ und sinkt mit dem Quadrat der Breite des Topfes. Daher beträgt für ein Elektron im Topf der Breite $1\\,\\text{nm}$ die niedrigste Energie $E_1=0{,}376\\,\\text{eV}$, während in einem breiteren Topf die Niveaus enger beieinanderliegen.</p>`,
        { fig: 'v5v8-jama', caption: `Ein Teilchen im unendlich tiefen Potentialtopf hat nur diskrete Niveaus; die Energie wächst mit n².` }
      ],
      examples: [
        { task: `Ein Elektron befindet sich im Topf der Breite $L=1\\,\\text{nm}$ im Zustand $n=2$. Wie groß ist seine Energie? Für $n=1$ gilt $E_1=0{,}376\\,\\text{eV}$.`,
          steps: [`$E_n=E_1\\cdot\\frac{n^2}{L^2}$ mit $L$ in Nanometern.`, `$E_2=0{,}376\\cdot 4=1{,}504\\,\\text{eV}$.`, `<strong>Ergebnis: $E_2\\approx 1{,}5\\,\\text{eV}$</strong>`] }
      ]
    },
    'v5-operatory': {
      title: `Operatoren und Observable`,
      summary: `Operatoren in der Quantenmechanik, Eigenfunktionen und Eigenwerte als Messergebnisse.`,
      theory: [
        `<p>Jeder physikalischen Größe ($x$, Impuls, Energie) ist ein <strong>Operator</strong> zugeordnet, also eine Vorschrift, die aus einer Funktion eine andere Funktion macht. Dem Impuls entspricht zum Beispiel $\\hat{p}=-i\\hbar\\,\\frac{d}{dx}$, der Energie der Hamilton-Operator $\\hat{H}$.</p>`,
        `<p>Wirkt der Operator $\\hat{A}$ auf eine Funktion $\\psi$ so, dass $\\hat{A}\\psi=a\\,\\psi$ gilt, so ist $\\psi$ eine <strong>Eigenfunktion</strong> und die Zahl $a$ ein <strong>Eigenwert</strong>. Die Messung der Größe $A$ liefert stets einen ihrer Eigenwerte; der Zustand geht dabei in die zugehörige Eigenfunktion über.</p>`,
        `<p>Observable Größen besitzen reelle Eigenwerte, weil ihre Operatoren hermitesch sind. Die Messergebnisse sind daher immer reelle Zahlen.</p>`
      ],
      examples: [
        { task: `Der Operator $\\hat{D}=\\frac{d}{dx}$ wirkt auf $\\psi=e^{3x}$. Wie groß ist der Eigenwert?`,
          steps: [`$\\frac{d}{dx}e^{3x}=3\\,e^{3x}$.`, `Es gilt $\\hat{D}\\psi=3\\psi$.`, `<strong>Ergebnis: der Eigenwert ist $3$</strong>`] }
      ]
    },
    'v5-kvantovanie': {
      title: `Quantisierung der Energie`,
      summary: `Warum ein gebundenes Teilchen nur diskrete Energien besitzt, am Beispiel des harmonischen Oszillators.`,
      theory: [
        `<p>Ist ein Teilchen <strong>gebunden</strong> (z. B. in einem Topf oder in einem schwingenden System), muss seine Wellenfunktion an den Rändern des Bereichs null sein. Diese Bedingung beschränkt die möglichen Energien auf <strong>diskrete Niveaus</strong>. Ein freies Teilchen hat dagegen kontinuierliche Energien.</p>`,
        `<p>Der quantenmechanische harmonische Oszillator besitzt die Niveaus $E_n=\\left(n+\\tfrac{1}{2}\\right)\\hbar\\omega$, wobei $n=0,1,2,\\dots$ und $\\omega$ die Kreisfrequenz ist. Benachbarte Niveaus liegen gleich weit, um $\\hbar\\omega$, auseinander.</p>`,
        `<p>Das unterste Niveau ($n=0$) hat nicht die Energie null, sondern $\\frac{1}{2}\\hbar\\omega$. Diese Nullpunktsenergie ist eine Folge der Unschärferelation: Ein Teilchen kann nicht gleichzeitig an einem Punkt ruhen.</p>`,
        { fig: 'v5v8-oscilator', caption: `Die Niveaus des Oszillators sind gleich weit voneinander entfernt, und das unterste ist nicht null, sondern ½ħω.` }
      ],
      examples: [
        { task: `Wie groß ist die Energie des Oszillators im Zustand $n=3$ in Einheiten von $\\hbar\\omega$?`,
          steps: [`$E_3=\\left(3+\\tfrac{1}{2}\\right)\\hbar\\omega$.`, `<strong>Ergebnis: $E_3=3{,}5\\,\\hbar\\omega$</strong>`] }
      ]
    },
    'v5-spin': {
      title: `Drehimpuls und Spin`,
      summary: `Bahndrehimpuls, Quantenzahl l, Anzahl der Zustände und der Spin des Elektrons.`,
      theory: [
        `<p>Der Bahndrehimpuls eines Elektrons im Atom ist quantisiert: Sein Betrag beträgt $|\\vec{L}|=\\sqrt{l(l+1)}\\,\\hbar$, wobei $l=0,1,2,\\dots$ die <strong>Bahndrehimpulsquantenzahl</strong> ist. Die Projektion auf eine gewählte Achse kann die Werte $L_z=m_l\\hbar$ annehmen.</p>`,
        `<p>Die magnetische Quantenzahl $m_l$ nimmt die Werte von $-l$ bis $+l$ einschließlich der Null an, daher gibt es für ein gegebenes $l$ genau $2l+1$ mögliche Zustände. Für $l=0$ gibt es einen Zustand, für $l=1$ drei Zustände.</p>`,
        `<p><strong>Der Spin</strong> ist der innere Drehimpuls des Elektrons, der kein klassisches Bild eines rotierenden Kügelchens besitzt. Das Elektron hat die Spinquantenzahl $s=\\tfrac{1}{2}$, es gibt also zwei mögliche Orientierungen. Zusammen mit dem Bahndrehimpuls bestimmt er die Struktur der atomaren Energieniveaus.</p>`,
        { fig: 'v5v8-moment', caption: `Die magnetische Quantenzahl m_l nimmt 2l + 1 Werte von −l bis +l an.` }
      ],
      examples: [
        { task: `Ein Elektron hat die Bahndrehimpulsquantenzahl $l=2$. Wie viele verschiedene Werte von $m_l$ sind möglich?`,
          steps: [`Die Werte von $m_l$ reichen von $-2$ bis $+2$: $-2,-1,0,1,2$.`, `<strong>Ergebnis: $2l+1=5$ Werte</strong>`] }
      ]
    },
    'v5-vodik': {
      title: `Wasserstoffatom und Quantenzustände`,
      summary: `Die Energieniveaus des Wasserstoffatoms und die Photonenenergie beim Übergang zwischen ihnen.`,
      theory: [
        `<p>Die Energien des Elektrons im Wasserstoffatom betragen $E_n=-\\frac{13{,}6\\,\\text{eV}}{n^2}$, wobei $n=1,2,3,\\dots$ die Hauptquantenzahl ist. Das negative Vorzeichen bedeutet, dass das Elektron gebunden ist; für $n\\to\\infty$ nähert sich die Energie der Null.</p>`,
        `<p>Geht das Elektron von einem höheren Niveau $n_i$ auf ein niedrigeres $n_f$ über, strahlt das Atom ein Photon mit der Energie $E_f=E_{n_i}-E_{n_f}$ (dem Betrag nach) aus. Bei der Absorption eines Photons verläuft der Vorgang umgekehrt. Deshalb besteht das Spektrum des Wasserstoffs aus Linien und nicht aus einem kontinuierlichen Band.</p>`,
        `<p>Am wichtigsten ist die Serie der Übergänge nach $n_f=2$ (Balmer-Serie), die im sichtbaren Bereich des Lichts liegt. Übergänge nach $n_f=1$ ergeben ultraviolette Strahlung.</p>`,
        { fig: 'v5v8-vodik', caption: `Beim Übergang auf ein niedrigeres Niveau strahlt das Atom ein Photon mit einer Energie aus, die der Niveaudifferenz entspricht.` }
      ],
      examples: [
        { task: `Ein Elektron im Wasserstoffatom geht von $n=3$ nach $n=2$ über. Welche Energie hat das emittierte Photon?`,
          steps: [`$E_3=-\\frac{13{,}6}{9}\\approx -1{,}51\\,\\text{eV}$ und $E_2=-\\frac{13{,}6}{4}=-3{,}40\\,\\text{eV}$.`, `$\\Delta E=|E_2-E_3|\\approx 1{,}89\\,\\text{eV}$.`, `<strong>Ergebnis: $\\Delta E\\approx 1{,}89\\,\\text{eV}$</strong>`] }
      ]
    },
    'v5-neurcitost': {
      title: `Tunneleffekt und Unschärferelation`,
      summary: `Heisenbergsche Unschärferelation und das Tunneln durch eine Barriere, die das Teilchen klassisch nicht überwinden kann.`,
      theory: [
        `<p>Die <strong>Heisenbergsche Unschärferelation</strong> besagt, dass Ort und Impuls eines Teilchens nicht beliebig genau gleichzeitig bestimmt werden können: $\\Delta x\\,\\Delta p\\geq\\frac{\\hbar}{2}$. Es handelt sich um eine Eigenschaft von Wellen und nicht um einen Mangel der Messtechnik. Je genauer wir den Ort kennen, desto größer ist die Unsicherheit des Impulses.</p>`,
        `<p>Der <strong>Tunneleffekt</strong> bedeutet, dass ein Teilchen eine Potentialbarriere durchdringt, die es klassisch nicht überwinden könnte, weil ihm die Energie fehlt. In der Barriere nimmt die Wellenfunktion exponentiell ab, aber nicht auf null, und auf der anderen Seite der Barriere besteht eine von null verschiedene Wahrscheinlichkeit, das Teilchen anzutreffen.</p>`,
        `<p>Das Tunneln erklärt den radioaktiven Alphazerfall, die Funktionsweise des Rastertunnelmikroskops sowie den elektrischen Strom in manchen Halbleiterbauelementen.</p>`,
        { fig: 'v5v8-tunel', caption: `Ein Teilchen mit einer Energie unterhalb der Barrierenhöhe besitzt in der Barriere eine exponentiell abklingende Welle und kann sie durchdringen.` }
      ],
      examples: [
        { task: `Die Position eines Elektrons ist mit der Unsicherheit $\\Delta x=1\\,\\text{pm}$ bekannt. Wie groß ist die kleinstmögliche Unsicherheit seines Impulses? Verwende $\\hbar=1{,}0546\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$.`,
          steps: [`$\\Delta p_{\\min}=\\frac{\\hbar}{2\\,\\Delta x}=\\frac{1{,}0546\\cdot 10^{-34}}{2\\cdot 10^{-12}}$.`, `$\\Delta p_{\\min}\\approx 5{,}27\\cdot 10^{-23}\\,\\text{kg}\\,\\text{m/s}$.`, `<strong>Ergebnis: $\\Delta p_{\\min}\\approx 52{,}7\\cdot 10^{-24}\\,\\text{kg}\\,\\text{m/s}$</strong>`] }
      ]
    },
    'v6-specialna': {
      title: `Spezielle Relativitätstheorie`,
      summary: `Die beiden Postulate, die Zeitdilatation und der Lorentz-Faktor.`,
      theory: [
        `<p>Die spezielle Relativitätstheorie beruht auf zwei Postulaten: (1) Die physikalischen Gesetze sind in allen Inertialsystemen gleich, (2) die Lichtgeschwindigkeit im Vakuum $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$ ist für jeden Beobachter gleich, unabhängig von der Bewegung der Quelle.</p>`,
        `<p>Aus dem zweiten Postulat folgt, dass die Zeit nicht absolut ist. Bewegte Uhren gehen langsamer: Das Zeitintervall $\\Delta t$, gemessen in dem System, relativ zu dem sich die Uhren bewegen, ist länger als die Eigenzeit $\\Delta t_0$ in ihrem Ruhesystem. Es gilt $\\Delta t=\\gamma\\,\\Delta t_0$, wobei $\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}\\geq 1$ der <strong>Lorentz-Faktor</strong> ist.</p>`,
        `<p>Der Effekt ist bei gewöhnlichen Geschwindigkeiten vernachlässigbar, weil $\\gamma$ nahe bei 1 liegt. Bei Geschwindigkeiten nahe $c$ wächst er sehr schnell. Teilchen in der kosmischen Strahlung zum Beispiel leben länger, als es die klassische Physik zulassen würde.</p>`,
        { fig: 'v5v8-gama', caption: `Der Lorentz-Faktor γ liegt bei kleinen Geschwindigkeiten nahe bei 1 und wächst bei Annäherung an c stark an.` }
      ],
      examples: [
        { task: `Ein Teilchen bewegt sich mit der Geschwindigkeit $v=0{,}6\\,c$. Wie groß ist sein Lorentz-Faktor?`,
          steps: [`$\\gamma=\\frac{1}{\\sqrt{1-0{,}6^2}}=\\frac{1}{\\sqrt{0{,}64}}$.`, `$\\sqrt{0{,}64}=0{,}8$, also $\\gamma=\\frac{1}{0{,}8}$.`, `<strong>Ergebnis: $\\gamma=1{,}25$</strong>`] }
      ]
    },
    'v6-lorentz': {
      title: `Lorentz-Transformationen`,
      summary: `Wie sich die räumlichen und zeitlichen Koordinaten eines Ereignisses beim Wechsel in ein anderes Inertialsystem ändern.`,
      theory: [
        `<p>Die Galilei-Transformation $x'=x-vt$ gilt nur bei kleinen Geschwindigkeiten. Bei Geschwindigkeiten nahe $c$ benötigt man die <strong>Lorentz-Transformationen</strong>, die die Lichtgeschwindigkeit unverändert lassen. Für das System $S'$, das sich mit der Geschwindigkeit $v$ in positiver Richtung der $x$-Achse bewegt, gilt $x'=\\gamma\\,(x-\\beta\\,ct)$ und $ct'=\\gamma\\,(ct-\\beta\\,x)$, wobei $\\beta=\\frac{v}{c}$.</p>`,
        `<p>Raum und Zeit vermischen sich also: Ein Ereignis, das in einem System gleichzeitig stattfindet, ist in einem anderen nicht unbedingt gleichzeitig. Diese <strong>Relativität der Gleichzeitigkeit</strong> ist eine unmittelbare Folge der endlichen Lichtgeschwindigkeit.</p>`,
        `<p>Bei der inversen Transformation ändert sich das Vorzeichen der Geschwindigkeit. Für $v\\to 0$ gilt $\\gamma\\to 1$, und wir erhalten wieder die klassische Beziehung $x'=x-vt$. Die Lorentz-Transformationen enthalten die klassische Physik also als Grenzfall.</p>`,
        { fig: 'v5v8-lorentz', caption: `Die Achsen x′ und ct′ des Systems S′ sind geneigt; die Lorentz-Transformation rechnet die Koordinaten des Ereignisses um.` }
      ],
      examples: [
        { task: `Ein Ereignis hat im System $S$ die Koordinaten $x=8\\,\\text{m}$ und $ct=4\\,\\text{m}$. Das System $S'$ bewegt sich mit $0{,}6\\,c$ in positiver Richtung der $x$-Achse. Wie groß ist $x'$ in $S'$?`,
          steps: [`$\\gamma=1{,}25$, $\\beta=0{,}6$.`, `$x'=\\gamma\\,(x-\\beta\\,ct)=1{,}25\\cdot(8-0{,}6\\cdot 4)=1{,}25\\cdot 5{,}6=7$.`, `<strong>Ergebnis: $x'=7\\,\\text{m}$</strong>`] }
      ]
    },
    'v6-energia': {
      title: `Relativistische Energie und Impuls`,
      summary: `Gesamt- und kinetische Energie eines Teilchens bei hohen Geschwindigkeiten.`,
      theory: [
        `<p>In der Relativitätstheorie besitzt ein Teilchen die Ruheenergie $E_0=mc^2$, auch wenn es steht. Die Gesamtenergie eines bewegten Teilchens beträgt $E=\\gamma\\,mc^2$. Für $v\\to 0$ gilt $\\gamma\\to 1$, und die Gesamtenergie nähert sich der Ruheenergie an.</p>`,
        `<p><strong>Die kinetische Energie</strong> ist die Differenz $E_k=E-E_0=(\\gamma-1)\\,mc^2$. Sie ist die Energie, die die Arbeit aufbringen muss, um das Teilchen aus der Ruhe auf die Geschwindigkeit $v$ zu beschleunigen. Bei Geschwindigkeiten nahe $c$ wächst die kinetische Energie unbegrenzt, daher kann kein Teilchen mit von null verschiedener Ruhemasse die Lichtgeschwindigkeit erreichen.</p>`,
        `<p>Der relativistische Impuls ist $p=\\gamma\\,m\\,v$. Für Energie und Impuls gilt außerdem die Beziehung $E^2=(pc)^2+(mc^2)^2$, die sich für Photonen eignet, bei denen $m=0$ ist.</p>`,
        { fig: 'v5v8-energia', caption: `Die Gesamtenergie γmc² ist die Ruheenergie mc² plus die kinetische Energie (γ − 1)mc².` }
      ],
      examples: [
        { task: `Ein Elektron ($m\\,c^2=0{,}511\\,\\text{MeV}$) bewegt sich mit $0{,}8\\,c$. Wie groß ist seine kinetische Energie?`,
          steps: [`$\\gamma=\\frac{1}{\\sqrt{1-0{,}64}}=\\frac{5}{3}$.`, `$E_k=(\\gamma-1)\\,mc^2=\\frac{2}{3}\\cdot 0{,}511\\approx 0{,}34\\,\\text{MeV}$.`, `<strong>Ergebnis: $E_k\\approx 0{,}34\\,\\text{MeV}$</strong>`] }
      ]
    },
    'v6-ekvivalencia': {
      title: `Äquivalenz von Masse und Energie`,
      summary: `Die Beziehung E = mc² und die Umrechnung von Masse in Energie und umgekehrt.`,
      theory: [
        `<p>Das bekannteste Ergebnis der Relativitätstheorie ist die Beziehung $E=mc^2$: Masse ist eine Form der Energie, und Energie besitzt eine entsprechende Masse $m=\\frac{E}{c^2}$. Es handelt sich nicht nur um eine Formel für die Bewegung, sondern um eine Eigenschaft jedes Körpers, auch wenn er ruht.</p>`,
        `<p>Kleine Massenänderungen bedeuten große Energiemengen, denn $c^2\\approx 9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$ ist eine sehr große Zahl. Kernreaktionen setzen gerade deshalb Energie frei, weil die Summe der Massen der Produkte um einen kleinen Bruchteil kleiner ist als die der ursprünglichen Kerne.</p>`,
        `<p>Bei der Umrechnung auf die Einheiten ist Vorsicht geboten: Masse in Kilogramm, Geschwindigkeit in Metern pro Sekunde, Energie in Joule. Ein Terajoule ist $1\\,\\text{TJ}=10^{12}\\,\\text{J}$.</p>`
      ],
      examples: [
        { task: `Welche Energie setzt die vollständige Umwandlung von $1\\,\\text{g}$ Materie frei? Ergebnis in Terajoule.`,
          steps: [`$m=10^{-3}\\,\\text{kg}$, $c^2=9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$.`, `$E=mc^2=10^{-3}\\cdot 9\\cdot 10^{16}=9\\cdot 10^{13}\\,\\text{J}=90\\,\\text{TJ}$.`, `<strong>Ergebnis: $90\\,\\text{TJ}$</strong>`] }
      ]
    },
    'v6-interval': {
      title: `Raumzeitliche Intervalle`,
      summary: `Das invariante Intervall im Raumzeit-Diagramm und die Eigenzeit.`,
      theory: [
        `<p>Die Relativitätstheorie verbindet Raum und Zeit zur vierdimensionalen <strong>Raumzeit</strong>. Ereignisse sind darin Punkte, und ihr Abstand ist kein gewöhnlicher. Das <strong>Intervall</strong> zwischen zwei Ereignissen mit dem zeitlichen Unterschied $\\Delta t$ und dem räumlichen Unterschied $\\Delta x$ ist $\\Delta s^2=c^2\\Delta t^2-\\Delta x^2$.</p>`,
        `<p>Das Intervall hat in jedem Inertialsystem denselben Wert, daher heißt es <strong>invariant</strong>. Ist $\\Delta s^2>0$, handelt es sich um ein zeitartiges Intervall, und es existiert ein System, in dem beide Ereignisse am selben Ort stattfinden. Die Eigenzeit beträgt dann $\\Delta\\tau=\\frac{\\sqrt{\\Delta s^2}}{c}$.</p>`,
        `<p>Bei Einheiten mit $c=1$ (Längen in Lichtsekunden gemessen) genügt die Berechnung $\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}$. Das Ergebnis ist stets kleiner oder gleich $\\Delta t$, was wiederum die Zeitdilatation ist.</p>`,
        { fig: 'v5v8-interval', caption: `Die Eigenzeit Δτ = √(Δt² − Δx²) ist bei einem zeitartigen Intervall kleiner als Δt.` }
      ],
      examples: [
        { task: `Zwei Ereignisse sind zeitlich um $\\Delta t=5\\,\\text{s}$ und räumlich um $\\Delta x=3\\,\\text{ls}$ (Lichtsekunden) voneinander entfernt. Wie groß ist die Eigenzeit $\\Delta\\tau$?`,
          steps: [`$\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}=\\sqrt{25-9}$.`, `<strong>Ergebnis: $\\Delta\\tau=4\\,\\text{s}$</strong>`] }
      ]
    },
    'v6-vseobecna': {
      title: `Allgemeine Relativitätstheorie`,
      summary: `Äquivalenzprinzip, Gravitation als Krümmung der Raumzeit und der Schwarzschild-Radius.`,
      theory: [
        `<p>Die allgemeine Relativitätstheorie (1915) beruht auf dem <strong>Äquivalenzprinzip</strong>: Lokal lässt sich Beschleunigung nicht von Gravitation unterscheiden. Ein Mensch in einem frei fallenden Aufzug im Gravitationsfeld spürt keine Schwerkraft, genau wie ein Astronaut auf einer Umlaufbahn.</p>`,
        `<p>Daraus leitete Einstein ab, dass die Gravitation keine Kraft im klassischen Sinne ist, sondern die <strong>Krümmung der Raumzeit</strong>, verursacht durch Masse und Energie. Körper bewegen sich auf den kürzesten möglichen Bahnen, den sogenannten Geodäten, die in der gekrümmten Raumzeit selbst gekrümmt sind.</p>`,
        `<p>Ein starkes Gravitationsfeld verlangsamt die Zeit: Uhren in der Nähe eines massiven Körpers gehen langsamer als in großer Entfernung von ihm. Für die Masse $M$ ist der <strong>Schwarzschild-Radius</strong> $r_s=\\frac{2GM}{c^2}$. Für die Erde beträgt er etwa $9$ mm, für die Sonne etwa $3\\,\\text{km}$.</p>`
      ],
      examples: [
        { task: `Wie groß ist der Schwarzschild-Radius der Sonne, wenn $M=1{,}989\\cdot 10^{30}\\,\\text{kg}$, $G=6{,}674\\cdot 10^{-11}$ und $c=3\\cdot 10^{8}\\,\\text{m/s}$ gilt?`,
          steps: [`$r_s=\\frac{2GM}{c^2}=\\frac{2\\cdot 6{,}674\\cdot 10^{-11}\\cdot 1{,}989\\cdot 10^{30}}{9\\cdot 10^{16}}$.`, `$r_s\\approx 2{,}95\\cdot 10^{3}\\,\\text{m}$.`, `<strong>Ergebnis: $r_s\\approx 2{,}95\\,\\text{km}$</strong>`] }
      ]
    },
    'v6-zakrivenie': {
      title: `Krümmung der Raumzeit`,
      summary: `Wie Materie die Raumzeit krümmt und welche Phänomene das belegen.`,
      theory: [
        `<p>Stell dir ein elastisches Tuch vor, auf das man eine schwere Kugel legt. Das Tuch biegt sich durch, und kleine Kugeln rollen zu ihr hin. Ähnlich krümmt Materie die Raumzeit, und Körper bewegen sich auf gekrümmten Bahnen. Die Analogie ist nur anschaulich, kein exaktes Modell.</p>`,
        `<p>Der direkteste Beweis ist die <strong>Lichtablenkung</strong> beim Vorbeigehen an der Sonne. Licht breitet sich auf der kürzesten Bahn aus, die im gekrümmten Raum keine Gerade ist. Ein Stern hinter der Sonne erscheint dem Beobachter daher verschoben. Diesen Effekt maß Eddington im Jahr 1919.</p>`,
        `<p>Weitere Phänomene, etwa die gravitative Rotverschiebung der Spektrallinien oder die Verlangsamung der Zeit in der Nähe von Masse, lassen sich mit der Genauigkeit messen, die für die Navigation von GPS-Satelliten nötig ist. Phänomene ohne Bezug zur Gravitation oder Raumzeit, etwa die Farbzerlegung des Lichts im Prisma, lassen sich durch Krümmung nicht erklären.</p>`,
        { fig: 'v5v8-zakrivenie', caption: `Materie krümmt die Raumzeit, und Körper bewegen sich auf gekrümmten Bahnen. Das Gitter ist nur eine anschauliche Analogie.` }
      ],
      examples: [
        { task: `Welches der Phänomene ist eine Folge der Krümmung der Raumzeit: die Ablenkung des Lichts um die Sonne oder die Farbänderung des Lichts im Prisma?`,
          steps: [`Die Krümmung der Raumzeit beschreibt die Gravitation, die den Lichtweg beeinflusst.`, `Die Lichtzerlegung im Prisma ist eine Folge der Abhängigkeit des Brechungsindex von der Wellenlänge.`, `<strong>Ergebnis: die Ablenkung des Lichts um die Sonne</strong>`] }
      ]
    },
    'v6-gravvlny': {
      title: `Gravitationswellen und schwarze Löcher`,
      summary: `Gravitationswellen als Wellen der Raumzeit und der Ereignishorizont eines schwarzen Lochs.`,
      theory: [
        `<p><strong>Gravitationswellen</strong> sind Wellen der Raumzeit, die sich mit Lichtgeschwindigkeit ausbreiten. Sie entstehen bei beschleunigter Bewegung großer Massen, etwa beim Verschmelzen zweier schwarzer Löcher. Die erste direkte Beobachtung gelang im Jahr 2015 mit dem Interferometer LIGO.</p>`,
        `<p>Ein <strong>schwarzes Loch</strong> ist ein Gebiet, in dem die Fluchtgeschwindigkeit größer als $c$ ist und aus dem kein Licht entkommt. Die Grenze bildet der <strong>Ereignishorizont</strong> beim Schwarzschild-Radius $r_s=\\frac{2GM}{c^2}$. Innerhalb des Horizonts führen alle Bahnen zum Zentrum.</p>`,
        `<p>Der Radius des Horizonts wächst direkt proportional zur Masse. Ein schwarzes Loch mit der Masse der Sonne hat einen Horizont von etwa $3\\,\\text{km}$, ein schwarzes Loch mit der zehnfachen Sonnenmasse etwa $30\\,\\text{km}$.</p>`,
        { fig: 'v5v8-horizont', caption: `Der Radius des Ereignishorizonts beträgt r_s = 2GM/c²; Licht aus dem Inneren des Horizonts kann nicht entkommen.` }
      ],
      examples: [
        { task: `Wie groß ist der Radius des Horizonts eines schwarzen Lochs mit der Masse $10\\,M_{\\odot}$, wenn für die Sonne $r_s\\approx 2{,}95\\,\\text{km}$ gilt?`,
          steps: [`Der Radius ist proportional zur Masse: $r_s=2{,}95\\,\\text{km}\\cdot 10$.`, `<strong>Ergebnis: $r_s\\approx 29{,}5\\,\\text{km}$</strong>`] }
      ]
    },
    'v7-atom': {
      title: `Aufbau des Atoms und die Elektronenhülle`,
      summary: `Kern, Hülle und die Verteilung der Elektronen auf Schalen sowie deren Kapazität.`,
      theory: [
        `<p>Das Atom besitzt einen <strong>Kern</strong> aus Protonen und Neutronen (zusammen Nukleonen) und eine <strong>Elektronenhülle</strong>. Die Anzahl der Protonen ist die Ordnungszahl $Z$ und bestimmt das chemische Element. Ein neutrales Atom hat ebenso viele Elektronen.</p>`,
        `<p>Die Elektronen sind nicht beliebig verteilt. Sie halten sich in <strong>Schalen</strong> mit der Nummer $n = 1, 2, 3, \\dots$ auf (Bezeichnungen K, L, M). Die Schale mit der Nummer $n$ fasst höchstens $2n^2$ Elektronen: K fasst 2, L fasst 8, M fasst 18.</p>`,
        `<p><strong>Warum gerade so viele?</strong> Die Elektronen werden durch die Quantenmechanik beschrieben. Jeder Zustand eines Elektrons ist durch einen Satz von Quantenzahlen bestimmt, und das Pauli-Prinzip verbietet, dass zwei Elektronen im Atom denselben Zustand haben. Die Schalen werden von innen nach außen gefüllt, und die äußerste (Valenz-)Schale bestimmt die chemischen Eigenschaften des Elements.</p>`,
        `<ol><li>Aus dem Periodensystem bestimme $Z$ und damit die Anzahl der Elektronen.</li><li>Verteile sie auf die Schalen: zuerst K, dann L, dann M.</li><li>Die zuletzt besetzte Schale ist die Valenzschale.</li></ol>`,
        { fig: 'obr-atom', caption: `Vereinfachtes Atommodell: positiver Kern und Elektronen auf Umlaufbahnen.` }
      ],
      examples: [
        { task: `Wie viele Elektronen fasst höchstens die L-Schale (Nummer $n = 2$)?`,
          steps: [`Wir setzen $n = 2$ in die Formel $2n^2$ ein.`, `$2\\cdot 2^2 = 8$.`, `<strong>Ergebnis: 8 Elektronen</strong>`] },
        { task: `Kohlenstoff hat $Z = 6$. Wie viele Elektronen befinden sich in seiner K- und L-Schale?`,
          steps: [`Die K-Schale fasst 2 Elektronen.`, `Die restlichen $6 - 2 = 4$ Elektronen gehen in die L-Schale.`, `<strong>Ergebnis: 2 in K und 4 in L</strong>`] }
      ]
    },
    'v7-spektra': {
      title: `Atomspektren und Energieniveaus`,
      summary: `Übergänge der Elektronen zwischen den Niveaus und die Energie der emittierten Photonen.`,
      theory: [
        `<p>Ein Atom kann nur bestimmte <strong>Energieniveaus</strong> besitzen. Geht ein Elektron von einem höheren auf ein niedrigeres Niveau über, emittiert es ein <strong>Photon</strong> mit einer Energie, die der Niveaudifferenz entspricht. Umgekehrt kann ein Photon passender Energie das Elektron auf ein höheres Niveau anregen.</p>`,
        `<p>Die Photonenenergie beträgt $E = h f = \\dfrac{h c}{\\lambda}$, wobei $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$ das plancksche Wirkungsquantum ist. In der Atomphysik gibt man die Energie in Elektronenvolt an: $1\\,\\text{eV} = 1{,}6\\cdot 10^{-19}\\,\\text{J}$.</p>`,
        `<p>Für das Wasserstoffatom gilt $E_n = -\\dfrac{13{,}6}{n^2}\\,\\text{eV}$. Der Grundzustand ($n = 1$) ist der niedrigste, und die Niveaus nähern sich von oben der Null. Beim Übergang von $n_i$ nach $n_f$ entsteht ein Photon mit der Energie $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}\\right)$.</p>`,
        `<p><strong>Warum sind die Spektren linienförmig?</strong> Die Niveaus sind diskret, daher haben die Photonen nur einige wenige genaue Energien. Im Spektrogramm sehen wir daher scharfe Linien und kein kontinuierliches Regenbogenband. Jedes Element hat seinen eigenen Satz von Linien, und deshalb ist das Spektrum sein „Fingerabdruck“.</p>`,
        { fig: 'v5v8-vodik', caption: `Beim Übergang auf ein niedrigeres Niveau strahlt das Atom ein Photon mit einer Energie aus, die der Niveaudifferenz entspricht.` }
      ],
      examples: [
        { task: `Ein Elektron im Wasserstoffatom geht vom Niveau $n=3$ auf $n=2$ über. Welche Energie hat das emittierte Photon?`,
          steps: [`Niveaudifferenz: $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{2^2}-\\dfrac{1}{3^2}\\right)$.`, `$\\dfrac{1}{4}-\\dfrac{1}{9}=\\dfrac{5}{36}$, also $\\Delta E = 13{,}6\\cdot\\dfrac{5}{36}\\approx 1{,}89\\,\\text{eV}$.`, `<strong>Ergebnis: etwa 1,89 eV</strong>`] },
        { task: `Welcher Übergang emittiert ein Photon mit größerer Energie: $2\\to 1$ oder $3\\to 2$?`,
          steps: [`Übergang $2\\to 1$: $13{,}6\\cdot\\left(1-\\dfrac{1}{4}\\right)=10{,}2\\,\\text{eV}$.`, `Der Übergang $3\\to 2$ ergibt etwa $1{,}89\\,\\text{eV}$.`, `<strong>Ergebnis: Übergang $2\\to 1$</strong>`] }
      ]
    },
    'v7-jadro': {
      title: `Aufbau des Atomkerns`,
      summary: `Protonen, Neutronen, Nuklidschreibweise, Isotope und die Größe des Kerns.`,
      theory: [
        `<p>Der Kern besteht aus Protonen (Ladung $+e$) und Neutronen (ohne Ladung). Gemeinsam heißen sie Nukleonen. Ein Nuklid schreibt man als $^{A}_{Z}\\mathrm{X}$: $A$ ist die Nukleonenzahl, $Z$ die Protonenzahl, und die Anzahl der Neutronen beträgt $N = A - Z$.</p>`,
        `<p>Der Kernradius wächst ungefähr mit der dritten Wurzel der Nukleonenzahl: $r \\approx 1{,}2\\cdot 10^{-15}\\,\\text{m}\\cdot A^{1/3}$. Kerne sind also sehr klein (in der Größenordnung von Femtometern), haben aber nahezu dieselbe Dichte.</p>`,
        `<p><strong>Warum zerfällt der Kern nicht?</strong> Die Protonen stoßen sich elektrisch ab, doch es wirkt die starke Kernkraft. Sie ist eine kurzreichweitige anziehende Kraft, die stärker ist als die elektrische Abstoßung. Stabile schwerere Kerne haben mehr Neutronen als Protonen (z. B. $^{208}_{82}\\mathrm{Pb}$).</p>`,
        `<ul><li><strong>Isotope</strong> haben dasselbe $Z$, aber unterschiedliche $N$ (z. B. $^{12}_{6}\\mathrm{C}$ und $^{14}_{6}\\mathrm{C}$).</li><li><strong>Isobare</strong> haben dasselbe $A$, aber unterschiedliche $Z$.</li></ul>`,
        { fig: 'v5v8-nuklidy', caption: `Leichte stabile Kerne haben N ≈ Z, schwerere stabile Kerne haben mehr Neutronen als Protonen.` }
      ],
      examples: [
        { task: `Wie viele Protonen und Neutronen hat der Kern $^{238}_{92}\\mathrm{U}$?`,
          steps: [`Die Protonenzahl ist $Z=92$.`, `$N = A - Z = 238 - 92 = 146$.`, `<strong>Ergebnis: 92 Protonen und 146 Neutronen</strong>`] },
        { task: `Wie ändert sich der Kernradius, wenn sich seine Nukleonenzahl verachtfacht?`,
          steps: [`$r \\propto A^{1/3}$, also ändert sich $r$ wie $\\sqrt[3]{A}$.`, `$\\sqrt[3]{8}=2$, der Radius verdoppelt sich.`, `<strong>Ergebnis: der Radius verdoppelt sich</strong>`] }
      ]
    },
    'v7-radioaktivita': {
      title: `Radioaktivität und Kernumwandlungen`,
      summary: `Zerfallsarten, Zerfallsgesetz, Halbwertszeit und Aktivität.`,
      theory: [
        `<p>Instabile Kerne wandeln sich von selbst um. Beim <strong>Alphazerfall</strong> wird ein Heliumkern $^{4}_{2}\\mathrm{He}$ ausgestoßen. Beim <strong>Beta-Minus-Zerfall</strong> wandelt sich ein Neutron in ein Proton um, und es entstehen ein Elektron und ein Antineutrino. Bei der <strong>Gammastrahlung</strong> gibt der Kern nur überschüssige Energie ab, $Z$ und $A$ ändern sich nicht. Bei jeder Umwandlung gelten die Erhaltungssätze für die Nukleonenzahl und die Protonenzahl.</p>`,
        `<p>Der Zerfall eines einzelnen Kerns ist ein zufälliges Ereignis, für eine große Anzahl von Kernen gilt aber das Zerfallsgesetz $N(t) = N_0\\cdot 2^{-t/T}$. Die Zeit $T$ ist die <em>Halbwertszeit</em>, nach der die Hälfte der Kerne zerfallen ist. Das Gesetz ergibt sich aus der Annahme, dass die Zerfallswahrscheinlichkeit in einer kurzen Zeit $dt$ proportional zur Anzahl der Kerne ist: $\\dfrac{dN}{dt}=-\\lambda N$.</p>`,
        `<p>Die <strong>Aktivität</strong> $A = \\lambda N$ gibt die Anzahl der Zerfälle pro Sekunde an. Die Einheit ist das Becquerel, $1\\,\\text{Bq} = 1\\,\\text{s}^{-1}$. Die Zerfallskonstante ist $\\lambda = \\dfrac{\\ln 2}{T}$.</p>`,
        `<ol><li>Berechne die Anzahl der Halbwertszeiten $k = t/T$.</li><li>Teile die Anzahl der Kerne durch $2^{k}$, nicht nur durch zwei.</li></ol>`,
        { fig: 'v5v8-rozpad', caption: `Die Zahl der nicht zerfallenen Kerne sinkt exponentiell: Nach jeder Halbwertszeit bleibt die Hälfte übrig.` }
      ],
      examples: [
        { task: `Ein Radioisotop hat eine Halbwertszeit von 8 Tagen. Wie viel Prozent der Kerne bleiben nach 24 Tagen übrig?`,
          steps: [`Die Anzahl der Halbwertszeiten ist $k = 24/8 = 3$.`, `$N = N_0\\cdot 2^{-3} = \\dfrac{N_0}{8}$, also bleiben 12,5 % übrig.`, `<strong>Ergebnis: 12,5 %</strong>`] },
        { task: `Eine Probe enthält $4\\cdot 10^{6}$ Kerne und hat eine Halbwertszeit von 2 h. Wie viele Kerne bleiben nach 6 h übrig?`,
          steps: [`In 6 h vergehen $k = 6/2 = 3$ Halbwertszeiten.`, `$N = \\dfrac{4\\cdot 10^{6}}{2^{3}} = 5\\cdot 10^{5}$.`, `<strong>Ergebnis: 500 000 Kerne</strong>`] }
      ]
    },
    'v7-stiepenie-fuzia': {
      title: `Kernspaltung und Kernfusion`,
      summary: `Massendefekt, Bindungsenergie und die Energie, die bei Spaltung oder Verschmelzung frei wird.`,
      theory: [
        `<p>Ein Kern hat eine kleinere Masse als die Summe der Massen seiner Nukleonen. Dieser Unterschied ist der <em>Massendefekt</em> $\\Delta m$. Nach der Beziehung $E = \\Delta m\\, c^2$ wird die entsprechende Energie frei. Für praktische Berechnungen gilt $1\\,\\text{u}\\cdot c^2 \\approx 931{,}5\\,\\text{MeV}$.</p>`,
        `<p>Die größte Bindungsenergie pro Nukleon besitzen Kerne in der Nähe von Eisen ($A\\approx 56$). Deshalb können sich schwere Kerne <strong>spalten</strong>, und leichte Kerne können <strong>verschmelzen</strong> (Fusion). Beide Wege führen zu größerer Bindungsenergie und setzen Energie frei.</p>`,
        `<p>Bei der Spaltung von $^{235}_{92}\\mathrm{U}$ durch ein Neutron entstehen zwei Fragmente, 2 bis 3 Neutronen und etwa 200 MeV Energie. Diese Neutronen können eine Kettenreaktion auslösen, die im Reaktor geregelt werden muss.</p>`,
        `<p>Die Fusion erfordert eine extrem hohe Temperatur, damit sich die positiv geladenen Kerne bis in die Reichweite der starken Wechselwirkung nähern. Bei der Reaktion $^{2}_{1}\\mathrm{H}+{}^{3}_{1}\\mathrm{H}\\to{}^{4}_{2}\\mathrm{He}+n$ werden etwa 17,6 MeV frei.</p>`,
        { fig: 'v5v8-vazba', caption: `Die Bindungsenergie pro Nukleon hat ihr Maximum bei Eisen: Leichte Kerne verschmelzen, schwere spalten sich.` }
      ],
      examples: [
        { task: `Bei einer Kernreaktion entsteht ein Massendefekt $\\Delta m = 0{,}2\\,\\text{u}$. Welche Energie wird frei?`,
          steps: [`$E=\\Delta m\\cdot 931{,}5\\,\\text{MeV}$.`, `$E=0{,}2\\cdot 931{,}5=186{,}3\\,\\text{MeV}$.`, `<strong>Ergebnis: 186,3 MeV</strong>`] },
        { task: `Warum ist die Fusion auf der Erde anspruchsvoller als die Spaltung?`,
          steps: [`Die Kerne sind positiv geladen und stoßen sich ab.`, `Es sind extreme Temperatur und extremer Druck nötig, damit sie in die Reichweite der starken Wechselwirkung gelangen.`, `<strong>Ergebnis: die Fusion erfordert extreme Bedingungen</strong>`] }
      ]
    },
    'v7-ziarenie-latka': {
      title: `Wechselwirkung von Strahlung mit Materie`,
      summary: `Abschwächung der Strahlung, Halbwertsdicke und die wichtigsten Prozesse bei Gammastrahlung.`,
      theory: [
        `<p>Strahlung verliert beim Durchgang durch Materie Energie. Alphateilchen werden schon von einem Blatt Papier gestoppt, Betateilchen durchdringen einige Millimeter Aluminium, und Gammastrahlung dringt tief ein und wird nur allmählich geschwächt.</p>`,
        `<p>Für ein schmales Photonenbündel gilt die exponentielle Abschwächung $I(x) = I_0\\,e^{-\\mu x}$, wobei $\\mu$ der Schwächungskoeffizient ist. Praktischer ist die <em>Halbwertsdicke</em> $d_{1/2}$, also die Schicht, die die Intensität auf die Hälfte schwächt. Dann gilt $I = I_0\\cdot 2^{-x/d_{1/2}}$.</p>`,
        `<p>Bei Gammastrahlung sind drei Prozesse wichtig: der <strong>Photoeffekt</strong> (das Photon wird absorbiert, dominiert bei niedrigen Energien), die <strong>Compton-Streuung</strong> (das Photon verliert einen Teil seiner Energie) und die <strong>Paarbildung</strong> Elektron–Positron (ab einer Energie von 1,022 MeV). Schwere und dichte Stoffe, zum Beispiel Blei, schirmen besser ab.</p>`,
        `<ul><li>Ionisierende Strahlung schlägt Elektronen aus Atomen heraus und kann deshalb Zellen schädigen.</li><li>Der Schutz richtet sich nach der Strahlungsart: Papier oder Haut gegen Alpha, Plexiglas gegen Beta, Blei oder Beton gegen Gamma.</li></ul>`,
        { fig: 'v5v8-zoslabenie', caption: `Jede Halbwertsdicke verringert die Intensität der Strahlung auf die Hälfte.` }
      ],
      examples: [
        { task: `Eine Bleischicht hat eine Halbwertsdicke von 1,2 cm. Wie viel Prozent der Strahlung durchdringen eine 3,6 cm dicke Schicht?`,
          steps: [`$x/d_{1/2}=3{,}6/1{,}2=3$ Halbwertsdicken.`, `$I = I_0\\cdot 2^{-3}=\\dfrac{I_0}{8}$.`, `<strong>Ergebnis: 12,5 %</strong>`] },
        { task: `Die Intensität der Strahlung sank auf ein Viertel. Wie viele Halbwertsdicken hatte die Schicht?`,
          steps: [`$\\dfrac{1}{4}=2^{-2}$.`, `Die Schicht hatte also 2 Halbwertsdicken.`, `<strong>Ergebnis: 2</strong>`] }
      ]
    },
    'v7-jadrova-energetika': {
      title: `Kernenergie und Strahlungsmessung`,
      summary: `Funktionsprinzip des Kernreaktors, Wirkungsgrad des Kraftwerks und die Messung der Strahlendosis.`,
      theory: [
        `<p>Der Kernreaktor nutzt die Spaltung von $^{235}_{92}\\mathrm{U}$ in einer geregelten Kettenreaktion. Die Wärme aus dem Reaktor erwärmt Wasser, es entsteht Dampf, der eine Turbine mit Generator antreibt.</p>`,
        `<p>Der Wirkungsgrad des Kraftwerks ist $\\eta = \\dfrac{P_{\\text{el}}}{P_{\\text{t}}}$, wobei $P_{\\text{t}}$ die thermische Leistung des Reaktors ist. Ein Teil der Wärme lässt sich nicht in Arbeit umwandeln und wird daher an das Kühlwasser abgegeben. Kernkraftwerke erreichen üblicherweise einen Wirkungsgrad von etwa 33 %.</p>`,
        `<p><strong>Regelung:</strong> Steuerstäbe aus Stoffen, die Neutronen absorbieren (z. B. Bor, Cadmium). Der <strong>Moderator</strong> (Wasser, Graphit) bremst die Neutronen, damit sie die Kerne besser spalten.</p>`,
        `<p><strong>Dosimetrie:</strong> Die absorbierte Dosis $D = E/m$ wird in Gray angegeben, $1\\,\\text{Gy} = 1\\,\\text{J/kg}$. Detektoren wie das Geiger-Müller-Zählrohr oder der Szintillator reagieren auf einzelne Teilchen und Photonen.</p>`,
        { fig: 'v5v8-reaktor', caption: `Das Kraftwerk wandelt die Wärme des Reaktors in Arbeit um; der Rest der Wärme geht in das Kühlwasser.` }
      ],
      examples: [
        { task: `Ein Reaktor hat eine thermische Leistung von 3000 MW und einen Wirkungsgrad von 33 %. Wie groß ist seine elektrische Leistung?`,
          steps: [`$P_{\\text{el}}=\\eta\\,P_{\\text{t}}$.`, `$0{,}33\\cdot 3000=990\\,\\text{MW}$.`, `<strong>Ergebnis: 990 MW</strong>`] },
        { task: `Ein Körper hat infolge der Bestrahlung die Energie 0,5 J absorbiert. Seine Masse beträgt 50 kg. Wie groß ist die absorbierte Dosis?`,
          steps: [`$D = E/m$.`, `$D = 0{,}5/50 = 0{,}01\\,\\text{Gy}$.`, `<strong>Ergebnis: 0,01 Gy</strong>`] }
      ]
    },
    'v8-castice': {
      title: `Elementarteilchen und ihre Eigenschaften`,
      summary: `Eigenschaften der Teilchen, Fermionen und Bosonen, Baryonen und Mesonen.`,
      theory: [
        `<p>Elementarteilchen besitzen nach dem heutigen Wissensstand keine innere Struktur. Charakterisiert werden sie durch ihre <strong>Masse</strong>, ihre <strong>elektrische Ladung</strong>, ihren <strong>Spin</strong> (den Eigendrehimpuls) und bei Quarks und Gluonen zusätzlich durch die <strong>Farbe</strong>.</p>`,
        `<p>Nach dem Spin unterteilt man die Teilchen in <em>Fermionen</em> (Spin $\\tfrac{1}{2}$, sie bilden die Materie und gehorchen dem Pauli-Prinzip) und <em>Bosonen</em> (ganzzahliger Spin, sie vermitteln Wechselwirkungen, z. B. das Photon mit Spin 1).</p>`,
        `<p>Hadronen bestehen aus Quarks. <strong>Baryonen</strong> enthalten drei Quarks (Proton $uud$, Neutron $udd$). <strong>Mesonen</strong> enthalten ein Paar Quark–Antiquark (z. B. $\\pi^{+}=u\\bar{d}$). Leptonen (Elektron, Myon, Tau und Neutrinos) nehmen nicht an der starken Wechselwirkung teil.</p>`,
        `<ul><li>Proton: Masse etwa 938 MeV/$c^2$, Ladung $+e$.</li><li>Neutron: Masse etwa 940 MeV/$c^2$, Ladung $0$.</li><li>Elektron: Masse etwa 0{,}511 MeV/$c^2$, Ladung $-e$.</li></ul>`,
        { fig: 'v5v8-kvarky', caption: `Das Proton (uud) und das Neutron (udd) bestehen aus drei Quarks; die Summe ihrer Ladungen ergibt die Ladung des Teilchens.` }
      ],
      examples: [
        { task: `Aus welchen Quarks besteht das Neutron?`,
          steps: [`Das Neutron ist ein Baryon, enthält also drei Quarks.`, `Die Ladung muss 0 sein: zwei Quarks $d$ und ein Quark $u$ ergeben $-\\tfrac{1}{3}-\\tfrac{1}{3}+\\tfrac{2}{3}=0$.`, `<strong>Ergebnis: $udd$</strong>`] },
        { task: `Ist das Elektron ein Baryon?`,
          steps: [`Ein Baryon besteht aus drei Quarks.`, `Das Elektron ist ein Lepton und enthält keine Quarks.`, `<strong>Ergebnis: nein</strong>`] }
      ]
    },
    'v8-kvarky-leptony': {
      title: `Quarks und Leptonen`,
      summary: `Generationen der Fermionen und die gebrochenzahligen Ladungen der Quarks.`,
      theory: [
        `<p>Sechs Quarks sind in drei Generationen geordnet: $(u,d)$, $(c,s)$ und $(t,b)$. Die Quarks $u$, $c$, $t$ tragen die Ladung $+\\tfrac{2}{3}e$, die Quarks $d$, $s$, $b$ die Ladung $-\\tfrac{1}{3}e$. Sie sind die einzigen Teilchen mit gebrochener Ladung.</p>`,
        `<p>Auch die Leptonen bilden drei Generationen von Paaren: $(e,\\nu_e)$, $(\\mu,\\nu_\\mu)$ und $(\\tau,\\nu_\\tau)$. Geladene Leptonen tragen die Ladung $-e$. Neutrinos sind neutral und wechselwirken nur sehr schwach mit Materie.</p>`,
        `<p>Freie Hadronen haben eine Gesamtladung, die ein ganzzahliges Vielfaches von $e$ ist. Deshalb verbinden sich Quarks zu Dreiergruppen (Baryonen) oder zu Paaren Quark–Antiquark (Mesonen). Diese Summe ist eine nützliche Kontrolle beim Aufschreiben von Reaktionen.</p>`,
        `<ol><li>Bestimme die Ladung jedes Quarks in Einheiten von $e$.</li><li>Addiere sie.</li><li>Das Ergebnis muss eine ganze Zahl sein.</li></ol>`,
        { fig: 'v5v8-generacie', caption: `Die Fermionen treten in drei Generationen auf; höhere Generationen sind schwerer und instabiler.` }
      ],
      examples: [
        { task: `Wie groß ist die Ladung des Teilchens $uud$?`,
          steps: [`$u$ hat $+\\tfrac{2}{3}$, $d$ hat $-\\tfrac{1}{3}$.`, `$\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3}=1$.`, `<strong>Ergebnis: $+e$ (Proton)</strong>`] },
        { task: `Welche Ladung hat das Baryon $uds$ (Teilchen Λ)?`,
          steps: [`$\\tfrac{2}{3}-\\tfrac{1}{3}-\\tfrac{1}{3}=0$.`, `<strong>Ergebnis: Ladung 0</strong>`] }
      ]
    },
    'v8-fotony': {
      title: `Photonen und weitere vermittelnde Teilchen`,
      summary: `Eichbosonen als Träger der Wechselwirkungen und ihre Eigenschaften.`,
      theory: [
        `<p>Wechselwirkungen zwischen Teilchen finden durch den Austausch von <strong>Eichbosonen</strong> statt. Das Photon $\\gamma$ überträgt die elektromagnetische Kraft, die Gluonen $g$ die starke Kraft und die Bosonen $W^{\\pm}$ und $Z^{0}$ die schwache Kraft.</p>`,
        `<p>Das Photon besitzt weder Masse noch Ladung, sein Spin beträgt 1. Das Gluon ist ebenfalls masselos, trägt aber eine <em>Farbladung</em>, daher bindet es auch an sich selbst. Das ist der Grund, warum sich Quarks nicht isolieren lassen und in Hadronen eingeschlossen sind.</p>`,
        `<p>Die Bosonen $W$ und $Z$ sind sehr schwer (Massen etwa 80 bzw. 91 GeV/$c^2$), deshalb ist die Reichweite der schwachen Wechselwirkung kurz, in der Größenordnung von $10^{-18}\\,\\text{m}$. Die Reichweite ist umgekehrt proportional zur Masse des vermittelnden Teilchens.</p>`,
        `<p>Das Graviton ist das hypothetische Boson der Gravitation. Es wurde bisher nicht experimentell nachgewiesen und ist im Standardmodell nicht enthalten.</p>`,
        { fig: 'v5v8-interakcie', caption: `Die vier Grundwechselwirkungen: Jede wird durch den Austausch ihres Bosons übertragen und hat eine andere Reichweite.` }
      ],
      examples: [
        { task: `Welches Teilchen vermittelt die starke Wechselwirkung?`,
          steps: [`Die starke Wechselwirkung wird durch Gluonen vermittelt.`, `<strong>Ergebnis: das Gluon</strong>`] },
        { task: `Warum hat die schwache Wechselwirkung eine so kurze Reichweite?`,
          steps: [`Die vermittelnden Bosonen $W$ und $Z$ haben eine große Masse.`, `Die Reichweite ist umgekehrt proportional zur Masse, also verkürzt eine große Masse die Reichweite.`, `<strong>Ergebnis: die große Masse der Bosonen verkürzt die Reichweite</strong>`] }
      ]
    },
    'v8-standardny-model': {
      title: `Standardmodell der Teilchenphysik`,
      summary: `Überblick über die Teilchen und Wechselwirkungen im Standardmodell und ihre Anzahl.`,
      theory: [
        `<p>Das Standardmodell beschreibt drei der vier fundamentalen Wechselwirkungen (elektromagnetische, schwache und starke) sowie alle bisher bekannten Elementarteilchen. Die Gravitation berücksichtigt es bislang nicht.</p>`,
        `<p>Die Materie besteht aus 12 Fermionen: 6 Quarks und 6 Leptonen in drei Generationen. Jede weitere Generation ist schwerer und instabiler. Stabile Materie besteht nur aus Teilchen der ersten Generation.</p>`,
        `<p>Teilchen erhalten ihre Masse durch den <em>Higgs-Mechanismus</em>. Erhaltungssätze (Ladung, Farbe, Leptonenzahlen) und Symmetrien bestimmen, welche Prozesse erlaubt sind.</p>`,
        `<ul><li>Eichbosonen: das Photon $\\gamma$, acht Gluonen $g$, die Bosonen $W^{\\pm}$ und $Z^{0}$.</li><li>Das Higgs-Boson $H^{0}$.</li></ul>`,
        { fig: 'v5v8-generacie', caption: `Die Fermionen treten in drei Generationen auf; höhere Generationen sind schwerer und instabiler.` }
      ],
      examples: [
        { task: `Wie viele Fermionen hat das Standardmodell in den ersten beiden Generationen?`,
          steps: [`Jede Generation enthält 2 Quarks und 2 Leptonen, also 4 Fermionen.`, `$2\\cdot 4 = 8$.`, `<strong>Ergebnis: 8</strong>`] },
        { task: `Wie viele Eichbosonen gibt es im Standardmodell?`,
          steps: [`Das Photon (1), die Gluonen (8) und die Bosonen $W^{+}$, $W^{-}$, $Z^{0}$ (3).`, `$1+8+3=12$.`, `<strong>Ergebnis: 12</strong>`] }
      ]
    },
    'v8-interakcie': {
      title: `Starke, schwache und elektromagnetische Wechselwirkung`,
      summary: `Reichweite, Wirkungsweise und relative Stärke der drei Wechselwirkungen.`,
      theory: [
        `<p><strong>Die starke Wechselwirkung</strong> hält die Quarks in Protonen und Neutronen zusammen sowie die Nukleonen im Kern. Sie hat die kürzeste Reichweite, in der Größenordnung von $10^{-15}\\,\\text{m}$, und ist die stärkste der vier Wechselwirkungen.</p>`,
        `<p><strong>Die elektromagnetische Wechselwirkung</strong> wirkt zwischen Ladungen. Sie erzeugt elektrische und magnetische Kräfte und die Bindung der Elektronen in Atomen. Ihre Reichweite ist unendlich, und die Kraft nimmt mit dem Quadrat des Abstands ab.</p>`,
        `<p><strong>Die schwache Wechselwirkung</strong> ist für den Betazerfall verantwortlich, bei dem sich ein Quark $d$ in $u$ verwandelt und ein Boson $W^{-}$ abgestrahlt wird. Ihre Reichweite ist sehr kurz, in der Größenordnung von $10^{-18}\\,\\text{m}$. Sie ändert die Sorte der Quarks, was die anderen Wechselwirkungen nicht können.</p>`,
        `<p>Die relativen Stärken (für zwei Teilchen im Kern) betragen etwa 1 : $10^{-2}$ : $10^{-6}$ : $10^{-39}$ in der Reihenfolge starke, elektromagnetische, schwache und Gravitation. Die Gravitation ist die schwächste und in der Mikrowelt vernachlässigbar.</p>`,
        { fig: 'v5v8-interakcie', caption: `Die vier Grundwechselwirkungen: Jede wird durch den Austausch ihres Bosons übertragen und hat eine andere Reichweite.` }
      ],
      examples: [
        { task: `Welche Wechselwirkung ist für den Betazerfall verantwortlich?`,
          steps: [`Beim Betazerfall verwandelt sich ein Quark $d$ in ein Quark $u$.`, `Die Änderung der Quarksorte ist Sache der schwachen Wechselwirkung.`, `<strong>Ergebnis: die schwache Wechselwirkung</strong>`] },
        { task: `Welche Wechselwirkung hält die Elektronen im Atom?`,
          steps: [`Die Elektronen sind negativ geladen, der Kern positiv.`, `<strong>Ergebnis: die elektromagnetische Wechselwirkung</strong>`] }
      ]
    },
    'v8-urychlovace': {
      title: `Teilchenbeschleuniger und Detektoren`,
      summary: `Beschleunigung geladener Teilchen, Kollisionen und Rekonstruktion der Ereignisse im Detektor.`,
      theory: [
        `<p>Ein Beschleuniger beschleunigt geladene Teilchen durch ein elektrisches Feld. Ein Teilchen mit der Ladung $q = z\\,e$ durchläuft die Spannung $U$ und gewinnt die kinetische Energie $E_k = z\\,e\\,U$. Liegt die Spannung im Megavoltbereich, ergibt sich die Energie in MeV.</p>`,
        `<p>Große Beschleuniger, zum Beispiel der LHC am CERN mit einem Umfang von 27 km, halten die Teilchenbündel mit starken Magneten auf einer Kreisbahn und beschleunigen die Teilchen darin schrittweise. Proton-Proton-Kollisionen erreichen Energien in der Größenordnung von TeV.</p>`,
        `<p>Detektoren zeichnen die Spuren der Teilchen auf. Ein Spurdetektor im Magnetfeld zeigt die Krümmung der Bahn, aus der sich der Impuls bestimmen lässt. Kalorimeter messen die Energie, Myonenkammern verfolgen die Myonen. Aus solchen Daten rekonstruieren wir, welches Teilchen entstanden ist.</p>`,
        `<p>Nach der Beziehung $E = m\\,c^2$ kann sich die kinetische Energie beim Stoß in die Masse neuer Teilchen umwandeln. Deshalb entstehen bei Stößen mit großer Energie auch sehr schwere Teilchen.</p>`,
        { fig: 'v5v8-urychlovac', caption: `Ein Teilchen mit der Ladung ze durchläuft die Spannung U und gewinnt die Energie zeU; beschleunigt wird es durch das elektrische Feld.` }
      ],
      examples: [
        { task: `Ein Proton wird durch eine Spannung von 5 MV beschleunigt. Welche kinetische Energie hat es?`,
          steps: [`Für das Proton gilt $z=1$, also $E_k = e\\,U$.`, `$E_k = 5\\,\\text{MeV}$.`, `<strong>Ergebnis: 5 MeV</strong>`] },
        { task: `Ein Teilchen mit der Ladung $+2e$ durchläuft eine Spannung von 3 MV. Welche Energie gewinnt es?`,
          steps: [`$z=2$, also $E_k = 2\\cdot 3\\,\\text{MeV}$.`, `<strong>Ergebnis: 6 MeV</strong>`] }
      ]
    },
    'v8-higgs': {
      title: `Higgs-Boson und offene Fragen`,
      summary: `Das Higgs-Feld, die Entdeckung des Higgs-Bosons und ungelöste Probleme der modernen Physik.`,
      theory: [
        `<p>Das Higgs-Boson wurde im Jahr 2012 am LHC entdeckt. Es ist das Quant des Higgs-Feldes, das im gesamten Universum vorhanden ist. Teilchen, die mit diesem Feld wechselwirken, erhalten Masse; je stärker sie wechselwirken, desto schwerer sind sie.</p>`,
        `<p>Die Masse des Higgs-Bosons beträgt etwa 125 GeV/$c^2$, das ist ungefähr das 133-Fache der Protonenmasse. Das Boson wurde über Zerfälle in zwei Photonen oder in Bosonen $Z$ bestätigt.</p>`,
        `<p>Offene Fragen: Die <strong>dunkle Materie</strong> bildet etwa 27 % des Energieinhalts des Universums, und das Standardmodell beschreibt sie nicht. Die <strong>Neutrinomassen</strong> sind klein, aber nicht null, was das ursprüngliche Modell nicht vorhergesagt hatte. Das Standardmodell umfasst außerdem die <strong>Gravitation</strong> nicht und erklärt nicht, warum es im Universum mehr Materie als Antimaterie gibt.</p>`
      ],
      examples: [
        { task: `Wie viel mal schwerer ist das Higgs-Boson als das Proton (die Protonenmasse beträgt etwa 0,94 GeV/$c^2$)?`,
          steps: [`$125/0{,}94\\approx 133$.`, `<strong>Ergebnis: etwa 133-mal</strong>`] },
        { task: `Welchen ungefähren Anteil am Energieinhalt des Universums bildet die dunkle Materie?`,
          steps: [`Die dunkle Materie bildet etwa 27 %, die gewöhnliche Materie nur etwa 5 %.`, `<strong>Ergebnis: etwa 27 %</strong>`] }
      ]
    }
  }
});
