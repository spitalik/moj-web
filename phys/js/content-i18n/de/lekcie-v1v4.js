/* Deutsch: Universitätsstufen v1–v4 (js/rocniky/v1.js, v2.js, v3.js, v4.js). Struktur und Schlüssel: js/content-i18n.js. */
CONTENT_I18N.add('de', {
  lessons: {
    'v1-kinematika': {
      title: 'Kinematik: Ort, Geschwindigkeit und Beschleunigung',
      summary: 'Beschreibung der Bewegung ohne ihre Ursachen: wie sich Ort, Geschwindigkeit und Beschleunigung mit der Zeit ändern.',
      theory: [
        `<p>Die Kinematik beschreibt die Bewegung von Körpern, ohne nach deren Ursachen zu fragen. Die grundlegende Größe ist der <strong>Ort</strong> $x(t)$, also die Koordinate des Körpers bezüglich eines gewählten Ursprungs und einer gewählten Richtung.</p>`,
        `<p><strong>Die Geschwindigkeit</strong> ist die Ortsänderung pro Zeit: $v=\\frac{\\Delta x}{\\Delta t}$. Sie ist ein Vektor und trägt daher auch ein Vorzeichen, das die Bewegungsrichtung bestimmt. <strong>Die Beschleunigung</strong> ist die Geschwindigkeitsänderung pro Zeit: $a=\\frac{\\Delta v}{\\Delta t}$, in der Einheit $\\text{m/s}^2$.</p>`,
        `<p>Bei der <strong>gleichmäßig beschleunigten Bewegung</strong> ist die Beschleunigung konstant. Die Geschwindigkeit ändert sich dann linear, $v=v_0+a\\,t$, und der Weg wächst mit dem Quadrat der Zeit: $x=x_0+v_0\\,t+\\frac{1}{2}a\\,t^2$.</p>`,
        `<p><strong>Warum wir mit der Zeit multiplizieren:</strong> Die Beschleunigung gibt an, um wie viele Meter pro Sekunde sich die Geschwindigkeit in jeder Sekunde ändert. In der Zeit $t$ ändert sie sich daher um $a\\,t$. Haben $a$ und $v_0$ dasselbe Vorzeichen, wird der Körper schneller, andernfalls langsamer.</p>`,
        { fig: 'v1v4-kinematika-vt', caption: 'Bei der gleichmäßig beschleunigten Bewegung ist das Geschwindigkeits-Zeit-Diagramm eine Gerade: ihre Steigung ist die Beschleunigung a, ihr Anfangspunkt die Anfangsgeschwindigkeit v₀.' }
      ],
      examples: [
        { task: 'Ein Auto steht ($v_0=0$) und beschleunigt mit konstanter Beschleunigung $a=2\\,\\text{m/s}^2$. Wie groß ist seine Geschwindigkeit nach $5\\,\\text{s}$?',
          steps: ['Wir setzen in $v=v_0+a\\,t$ ein: $v=0+2\\cdot 5$.', '<strong>Ergebnis: $v=10\\,\\text{m/s}$</strong>'] },
        { task: 'Ein Zug hat die Geschwindigkeit $v_0=12\\,\\text{m/s}$ und bremst mit $a=-3\\,\\text{m/s}^2$. Welche Geschwindigkeit hat er nach $2\\,\\text{s}$?',
          steps: ['$v=v_0+a\\,t=12+(-3)\\cdot 2$.', '$v=12-6$.', '<strong>Ergebnis: $v=6\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-newton': {
      title: 'Newtonsche Bewegungsgesetze',
      summary: 'Erstes, zweites und drittes Gesetz: wann sich ein Körper nicht gleichförmig bewegt und wie Kraft und Beschleunigung zusammenhängen.',
      theory: [
        `<p><strong>Erstes Gesetz</strong> (der Trägheit): Ein Körper bleibt in Ruhe oder in gleichförmiger geradliniger Bewegung, solange keine von null verschiedene resultierende Kraft auf ihn wirkt. Die Trägheit ist eine Eigenschaft der Masse und kein Ergebnis einer Kraft.</p>`,
        `<p><strong>Zweites Gesetz</strong>: Die Beschleunigung ist proportional zur resultierenden Kraft und umgekehrt proportional zur Masse, $\\vec a=\\frac{\\vec F}{m}$, also $\\vec F=m\\,\\vec a$. Die Resultierende ist die vektorielle Summe aller auf den Körper wirkenden Kräfte; Kräfte in entgegengesetzte Richtungen werden voneinander subtrahiert.</p>`,
        `<p><strong>Drittes Gesetz</strong>: Wirkt Körper A mit einer Kraft auf Körper B, so wirkt B auf A mit einer gleich großen Kraft in entgegengesetzter Richtung. Diese beiden Kräfte greifen an <em>verschiedenen</em> Körpern an und heben sich deshalb nicht auf.</p>`,
        `<p><strong>Warum das so ist:</strong> Die Kraft ist die Ursache einer Bewegungsänderung. Bei größerer Masse ist für dieselbe Beschleunigung eine größere Kraft nötig, weil die Masse einer Geschwindigkeitsänderung Widerstand entgegensetzt.</p>`,
        { fig: 'v1v4-sily-dve', caption: 'Kräfte in entgegengesetzten Richtungen werden subtrahiert. Die resultierende Kraft F₁ − F₂ erteilt dem Körper die Beschleunigung a = (F₁ − F₂)/m.' }
      ],
      examples: [
        { task: 'Ein Körper mit der Masse $m=4\\,\\text{kg}$ wird von einer Kraft $F=20\\,\\text{N}$ gezogen, entgegen wirkt auf derselben Geraden die Reibung $F_t=8\\,\\text{N}$. Wie groß ist die Beschleunigung?',
          steps: ['Resultierende Kraft: $F_v=20-8=12\\,\\text{N}$.', 'Beschleunigung: $a=\\frac{F_v}{m}=\\frac{12}{4}$.', '<strong>Ergebnis: $a=3\\,\\text{m/s}^2$</strong>'] },
        { task: 'Auf einen Körper mit der Masse $m=3\\,\\text{kg}$ wirkt eine resultierende Kraft von $12\\,\\text{N}$. Wie groß ist die Beschleunigung?',
          steps: ['$a=\\frac{F}{m}=\\frac{12}{3}$.', '<strong>Ergebnis: $a=4\\,\\text{m/s}^2$</strong>'] }
      ]
    },
    'v1-hybnost': {
      title: 'Kräfte, Impuls und Drehimpuls',
      summary: 'Der Impuls als Maß der Bewegung, der Kraftstoß und der Drehimpuls bei der Drehung um einen Punkt.',
      theory: [
        `<p>Der <strong>Impuls</strong> eines Körpers ist das Produkt aus seiner Masse und Geschwindigkeit: $\\vec p=m\\,\\vec v$. Ein schwerer und schneller Körper hat einen großen Impuls und lässt sich schwerer anhalten.</p>`,
        `<p>Das zweite Newtonsche Gesetz lässt sich auch mit dem Impuls schreiben: $\\vec F=\\frac{\\Delta \\vec p}{\\Delta t}$. Das Produkt $\\vec F\\,\\Delta t$ heißt <strong>Kraftstoß</strong> und entspricht der Impulsänderung: $\\Delta \\vec p=\\vec F\\,\\Delta t$.</p>`,
        `<p>Der <strong>Drehimpuls</strong> eines Teilchens bezüglich eines festen Punktes $O$ ist das Vektorprodukt aus Ort und Impuls: $\\vec L=\\vec r\\times\\vec p$, mit dem Betrag $L=r\\,p\\sin\\alpha$, wobei $\\alpha$ der Winkel zwischen $\\vec r$ und $\\vec p$ ist.</p>`,
        `<p><strong>Warum das gilt:</strong> Eine Kraft ändert den Impuls nur dann, wenn sie hinreichend lange wirkt. Ein kurzer Schlag ergibt auch bei großer Kraft nur einen kleinen Kraftstoß. Der Drehimpuls ändert sich nur, wenn ein Drehmoment $\\vec M=\\vec r\\times\\vec F$ auf den Körper wirkt.</p>`
      ],
      examples: [
        { task: 'Eine Kugel mit der Masse $m=0{,}02\\,\\text{kg}$ fliegt mit der Geschwindigkeit $v=300\\,\\text{m/s}$. Wie groß ist ihr Impuls?',
          steps: ['$p=m\\,v=0{,}02\\cdot 300$.', '<strong>Ergebnis: $p=6\\,\\text{kg\\,m/s}$</strong>'] },
        { task: 'Eine Kraft $F=50\\,\\text{N}$ wirkt $4\\,\\text{s}$ lang auf einen Körper. Wie groß ist die Änderung seines Impulses?',
          steps: ['Kraftstoß: $\\Delta p=F\\,\\Delta t=50\\cdot 4$.', '<strong>Ergebnis: $\\Delta p=200\\,\\text{kg\\,m/s}$</strong>'] }
      ]
    },
    'v1-praca-energia': {
      title: 'Arbeit, Energie und Leistung',
      summary: 'Arbeit einer Kraft, kinetische Energie eines Körpers und Leistung als Arbeit pro Zeit.',
      theory: [
        `<p>Die <strong>Arbeit</strong> einer konstanten Kraft bei einer Verschiebung um $\\vec s$ ist $W=F\\,s\\cos\\alpha$, wobei $\\alpha$ der Winkel zwischen Kraft und Verschiebung ist. Eine Kraft senkrecht zur Verschiebung verrichtet keine Arbeit.</p>`,
        `<p>Die <strong>kinetische Energie</strong> eines Körpers ist $E_k=\\frac{1}{2}m v^2$. Die Arbeit der resultierenden Kraft entspricht der Änderung der kinetischen Energie: $W=\\Delta E_k$. Das ist der Satz von der kinetischen Energie.</p>`,
        `<p>Die <strong>Leistung</strong> ist die pro Zeiteinheit verrichtete Arbeit: $P=\\frac{W}{t}$, in der Einheit Watt, $1\\,\\text{W}=1\\,\\text{J/s}$.</p>`,
        `<p><strong>Warum dort $v^2$ steht:</strong> Bei doppelter Geschwindigkeit hat der Körper die vierfache Energie, denn zum Anhalten ist die vierfache Arbeit nötig. Deshalb sind Unfälle bei höherer Geschwindigkeit so gefährlich.</p>`,
        { fig: 'v1v4-praca-uhol', caption: 'Arbeit verrichtet nur die zur Verschiebung parallele Kraftkomponente, F·cos α. Die zur Verschiebung senkrechte Komponente verrichtet keine Arbeit.' }
      ],
      examples: [
        { task: 'Ein Körper mit der Masse $m=2\\,\\text{kg}$ bewegt sich mit der Geschwindigkeit $v=3\\,\\text{m/s}$. Wie groß ist seine kinetische Energie?',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 2\\cdot 3^2$.', '<strong>Ergebnis: $E_k=9\\,\\text{J}$</strong>'] },
        { task: 'Eine Kraft $F=10\\,\\text{N}$ verschiebt den Körper um $s=6\\,\\text{m}$ in Richtung der Kraft. Welche Arbeit wird verrichtet?',
          steps: ['Der Winkel ist $\\alpha=0^\\circ$, also $\\cos\\alpha=1$.', '$W=F\\,s\\cos\\alpha=10\\cdot 6\\cdot 1$.', '<strong>Ergebnis: $W=60\\,\\text{J}$</strong>'] }
      ]
    },
    'v1-gravitacne-pole': {
      title: 'Gravitationsfeld',
      summary: 'Newtonsches Gravitationsgesetz, Gravitationsbeschleunigung und ihre Abnahme mit dem Abstand vom Mittelpunkt des Planeten.',
      theory: [
        `<p><strong>Newtonsches Gravitationsgesetz</strong>: Zwei Körper mit den Massen $m_1$ und $m_2$ im Abstand $r$ ziehen sich mit der Kraft $F=G\\frac{m_1 m_2}{r^2}$ an, wobei $G\\approx 6{,}67\\cdot 10^{-11}\\,\\text{N\\,m}^2/\\text{kg}^2$ ist.</p>`,
        `<p>Das <strong>Gravitationsfeld</strong> ist ein Raumbereich, in dem auf einen Massenkörper eine Gravitationskraft wirkt. Die Feldstärke, also die <em>Gravitationsbeschleunigung</em>, ist $g=\\frac{F}{m}=G\\frac{M}{r^2}$, wobei $M$ die Masse der Feldquelle ist.</p>`,
        `<p><strong>Warum sie mit dem Abstand abnimmt:</strong> Die Gravitationswirkung verteilt sich über eine immer größere Kugeloberfläche $4\\pi r^2$. Deshalb ändert sich die Gravitationsbeschleunigung mit dem Quadrat des Abstands vom Mittelpunkt und nicht linear.</p>`,
        `<p>An der Erdoberfläche ist $g\\approx 9{,}81\\,\\text{m/s}^2$. Im Abstand $r$ vom Erdmittelpunkt ist $g(r)=9{,}81\\cdot\\left(\\frac{R}{r}\\right)^2$, wobei $R$ der Erdradius ist.</p>`,
        { fig: 'v1v4-gravitacia-r', caption: 'Die Gravitationsbeschleunigung nimmt mit dem Quadrat des Abstands vom Mittelpunkt ab: im Abstand 2R beträgt sie ein Viertel des Oberflächenwerts.' }
      ],
      examples: [
        { task: 'Wie groß ist die Gravitationsbeschleunigung in einer Höhe, in der der Abstand vom Erdmittelpunkt doppelt so groß ist wie der Erdradius?',
          steps: ['Das Abstandsverhältnis ist $\\frac{r}{R}=2$, also $g(r)=g\\cdot\\left(\\frac{1}{2}\\right)^2$.', '$g(r)=\\frac{9{,}81}{4}\\approx 2{,}45\\,\\text{m/s}^2$.', '<strong>Ergebnis: etwa $2{,}45\\,\\text{m/s}^2$</strong>'] },
        { task: 'Zwei Körper mit den Massen $m_1=10\\,\\text{kg}$ und $m_2=5\\,\\text{kg}$ befinden sich im Abstand $r$. Wie ändert sich die Kraft, wenn wir den Abstand verdoppeln?',
          steps: ['Die Kraft ist proportional zu $\\frac{1}{r^2}$, bei $2r$ wird sie auf ein Viertel verringert.', '<strong>Ergebnis: die Kraft verringert sich auf ein Viertel</strong>'] }
      ]
    },
    'v1-rotacia': {
      title: 'Rotation des starren Körpers',
      summary: 'Winkelgeschwindigkeit, Trägheitsmoment und Drehmoment bei der Drehung eines Körpers um eine Achse.',
      theory: [
        `<p>Ein <strong>starrer Körper</strong> ändert bei der Drehung um eine Achse seine Form nicht: Alle seine Punkte drehen sich mit derselben <strong>Winkelgeschwindigkeit</strong> $\\omega$ in Radiant pro Sekunde. Führt der Körper $f$ Umdrehungen pro Sekunde aus, gilt $\\omega=2\\pi f$, denn eine volle Umdrehung entspricht dem Winkel $2\\pi$.</p>`,
        `<p>Die Bahngeschwindigkeit eines Punktes im Abstand $r$ von der Achse ist $v=\\omega\\,r$. Punkte weiter von der Achse bewegen sich bei gleicher Winkelgeschwindigkeit schneller.</p>`,
        `<p>Das <strong>Trägheitsmoment</strong> $I=\\sum m_i r_i^2$ ist das Rotationsäquivalent der Masse. Es hängt nicht nur von der Masse ab, sondern auch davon, wie weit sie von der Achse verteilt ist. Das zweite Newtonsche Gesetz für die Rotation hat die Form $M=I\\,\\alpha$, wobei $M$ das Drehmoment und $\\alpha$ die Winkelbeschleunigung ist.</p>`,
        `<p><strong>Warum dort die Zwei steht:</strong> Der Winkel wird im Bogenmaß gemessen, und eine Umdrehung entspricht $2\\pi$ Radiant, nicht $\\pi$. Deshalb wird die Frequenz in Hertz mit zwei pi multipliziert.</p>`,
        { fig: 'v1v4-rotacia', caption: 'Ein Punkt eines starren Körpers im Abstand r von der Achse bewegt sich auf einer Kreisbahn mit der Bahngeschwindigkeit v = ω·r.' }
      ],
      examples: [
        { task: 'Eine Scheibe dreht sich mit der Frequenz $f=3\\,\\text{Hz}$. Wie groß ist ihre Winkelgeschwindigkeit?',
          steps: ['$\\omega=2\\pi f=2\\pi\\cdot 3$.', '<strong>Ergebnis: $\\omega=6\\pi\\approx 18{,}85\\,\\text{rad/s}$</strong>'] },
        { task: 'Ein Punkt am Rad hat den Abstand $r=0{,}5\\,\\text{m}$ von der Achse, und die Winkelgeschwindigkeit beträgt $\\omega=4\\,\\text{rad/s}$. Wie groß ist seine Bahngeschwindigkeit?',
          steps: ['$v=\\omega\\,r=4\\cdot 0{,}5$.', '<strong>Ergebnis: $v=2\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-sustavy': {
      title: 'Mechanik von Teilchensystemen',
      summary: 'Der Schwerpunkt eines Teilchensystems als gewichteter Mittelwert ihrer Orte und die Bewegung des Schwerpunkts.',
      theory: [
        `<p>Ein <strong>Teilchensystem</strong> lässt sich durch einen markanten Punkt beschreiben, den <strong>Schwerpunkt</strong>. Für zwei Teilchen auf der Achse $x$ liegt er bei $x_T=\\frac{m_1x_1+m_2x_2}{m_1+m_2}$. Es ist ein gewichteter Mittelwert, bei dem das schwerere Teilchen den Schwerpunkt stärker zu sich zieht.</p>`,
        `<p>Der Schwerpunkt bewegt sich wie ein einzelnes Teilchen mit der Gesamtmasse $M=\\sum m_i$, auf das die resultierende äußere Kraft wirkt: $M\\,\\vec a_T=\\sum \\vec F_{\\text{ext}}$. Die inneren Kräfte zwischen den Teilchen heben sich gegenseitig auf, deshalb ändert sich die Bewegung des Schwerpunkts durch sie nicht.</p>`,
        `<p><strong>Warum der Schwerpunkt und nicht ein gewöhnlicher Mittelwert:</strong> Haben die Teilchen dieselbe Masse, ergibt sich das arithmetische Mittel. Bei unterschiedlichen Massen muss jede Koordinate entsprechend ihrer Masse gewichtet werden.</p>`,
        `<p>Die kinetische Energie des Systems lässt sich in die Energie der Bewegung des Schwerpunkts und die Energie der Bewegung der Teilchen relativ zum Schwerpunkt aufteilen. Dadurch lassen sich komplizierte Bewegungen in einfachere Anteile zerlegen.</p>`,
        { fig: 'v1v4-sustava-tazisko', caption: 'Der Schwerpunkt T liegt näher am schwereren Teilchen. Seine Koordinate ist der gewichtete Mittelwert der Teilchenkoordinaten.' }
      ],
      examples: [
        { task: 'Ein Teilchen mit der Masse $1\\,\\text{kg}$ befindet sich bei $x_1=0\\,\\text{m}$, ein Teilchen mit der Masse $3\\,\\text{kg}$ bei $x_2=4\\,\\text{m}$. Wo liegt der Schwerpunkt?',
          steps: ['$x_T=\\frac{1\\cdot 0+3\\cdot 4}{1+3}=\\frac{12}{4}$.', '<strong>Ergebnis: $x_T=3\\,\\text{m}$</strong>'] },
        { task: 'Zwei gleich schwere Teilchen befinden sich bei $x_1=2\\,\\text{m}$ und $x_2=8\\,\\text{m}$. Wo liegt der Schwerpunkt?',
          steps: ['Bei gleichen Massen ist der Schwerpunkt das arithmetische Mittel: $x_T=\\frac{2+8}{2}$.', '<strong>Ergebnis: $x_T=5\\,\\text{m}$</strong>'] }
      ]
    },
    'v1-lagrange': {
      title: 'Lagrange- und Hamilton-Mechanik',
      summary: 'Die Lagrange-Funktion als Differenz von kinetischer und potentieller Energie und die Hamilton-Funktion als Gesamtenergie.',
      theory: [
        `<p>Die <strong>Lagrange-Funktion</strong> eines Systems ist $L=T-V$, wobei $T$ die kinetische und $V$ die potentielle Energie ist. Statt die einzelnen Kräfte zu verfolgen, genügt die Kenntnis dieser beiden Energien und ihrer Abhängigkeit von verallgemeinerten Koordinaten $q$ und Geschwindigkeiten $\\dot q$.</p>`,
        `<p>Die <strong>Euler-Lagrange-Gleichungen</strong> liefern die Bewegungsgleichungen: $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q}-\\frac{\\partial L}{\\partial q}=0$. Der Vorteil ist, dass man die Koordinaten frei wählen kann, sofern sie für die Aufgabe geeignet sind, etwa den Auslenkwinkel eines Pendels.</p>`,
        `<p>Die <strong>Hamilton-Funktion</strong> ist bei konservativen Kräften $H=T+V$, also die Gesamtenergie. Mit den Impulsen $p=\\frac{\\partial L}{\\partial \\dot q}$ schreiben sich die Bewegungsgleichungen als Paare von Gleichungen erster Ordnung, den sogenannten Hamilton-Gleichungen.</p>`,
        `<p><strong>Warum das Minuszeichen in $L$ steht:</strong> Die potentielle Energie geht in der Lagrange-Funktion mit negativem Vorzeichen ein, während sie in der Hamilton-Funktion zur kinetischen Energie addiert wird.</p>`
      ],
      examples: [
        { task: 'Ein Teilchen mit der Masse $m=2\\,\\text{kg}$ hat die Geschwindigkeit $v=3\\,\\text{m/s}$ in der Höhe $h=1\\,\\text{m}$. Wie groß ist seine Lagrange-Funktion, wenn $g=10\\,\\text{m/s}^2$ gilt?',
          steps: ['$T=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 9=9\\,\\text{J}$.', '$V=mgh=2\\cdot 10\\cdot 1=20\\,\\text{J}$.', '<strong>Ergebnis: $L=T-V=9-20=-11\\,\\text{J}$</strong>'] },
        { task: 'Dasselbe Teilchen hat die Hamilton-Funktion $H=T+V$. Wie lautet ihr Wert?',
          steps: ['$H=9+20$.', '<strong>Ergebnis: $H=29\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-teplota-tlak': {
      title: 'Temperatur, Druck, Wärme und innere Energie',
      summary: 'Die thermodynamische Temperatur in Kelvin, der Druck als Kraft pro Fläche und die innere Energie als Summe der Teilchenenergien.',
      theory: [
        `<p>Die <strong>thermodynamische Temperatur</strong> $T$ wird in Kelvin gemessen. Sie ist proportional zur mittleren kinetischen Energie der Teilchen und kann deshalb nicht negativ sein. Die Umrechnung aus Grad Celsius lautet $T=t+273{,}15$, wobei $0\\,\\text{K}$ der absolute Nullpunkt ist.</p>`,
        `<p><strong>Der Druck</strong> ist die Kraft, die senkrecht auf eine Flächeneinheit wirkt: $p=\\frac{F}{S}$, in Pascal, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Ein Gas drückt auf die Wände des Behälters, weil seine Teilchen auf sie prallen und ihnen Impuls übertragen.</p>`,
        `<p><strong>Die innere Energie</strong> $U$ ist die Summe der kinetischen und potentiellen Energien aller Teilchen des Systems. Die <strong>Wärme</strong> $Q$ ist diejenige Energie, die wegen eines Temperaturunterschieds zwischen Körpern übertragen wird; sie ist kein „Inhalt“ eines Körpers.</p>`,
        `<p><strong>Warum Kelvin:</strong> Die Grade Celsius haben einen frei gewählten Nullpunkt. Bei Formeln, die mit Energie oder einem Verhältnis zusammenhängen, benötigen wir den Nullpunkt, bei dem die Energie verschwindet, also Kelvin.</p>`,
        { fig: 'v1v4-teplota-stupnice', caption: 'Die Temperaturumrechnung lautet T = t + 273,15. Der absolute Nullpunkt entspricht 0 K, also −273,15 °C.' }
      ],
      examples: [
        { task: 'Welche Temperatur hat $t=27\\,{}^\\circ\\text{C}$ in Kelvin?',
          steps: ['$T=t+273{,}15=27+273{,}15$.', '<strong>Ergebnis: $T=300{,}15\\,\\text{K}$</strong>'] },
        { task: 'Eine Kraft $F=600\\,\\text{N}$ wirkt senkrecht auf die Fläche $S=0{,}2\\,\\text{m}^2$. Wie groß ist der Druck?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}2}$.', '<strong>Ergebnis: $p=3000\\,\\text{Pa}$</strong>'] }
      ]
    },
    'v2-stavove-rovnice': {
      title: 'Zustandsgleichungen',
      summary: 'Die Zustandsgleichung des idealen Gases pV = nRT und ihre Anwendung bei der Berechnung des Drucks.',
      theory: [
        `<p>Die <strong>Zustandsgleichung</strong> des idealen Gases verknüpft Druck $p$, Volumen $V$, Stoffmenge $n$ und Temperatur $T$: $pV=nRT$, wobei $R\\approx 8{,}314\\,\\text{J/(mol\\,K)}$ ist.</p>`,
        `<p>Das ideale Gas ist ein Modell, in dem die Teilchen kein eigenes Volumen haben und außer bei Stößen nicht miteinander wechselwirken. Bei ausreichend verdünntem Gas und üblichen Temperaturen ist das Modell sehr genau.</p>`,
        `<p><strong>Anwendung:</strong> Kennen wir drei Größen, lösen wir nach der vierten auf. Der Druck ist zum Beispiel $p=\\frac{nRT}{V}$. Ändert sich eine Größe, ändern sich die übrigen gemäß den Proportionalitäten: Bei konstanter Temperatur ist der Druck umgekehrt proportional zum Volumen.</p>`,
        `<p><strong>Achtung bei den Einheiten:</strong> Die Temperatur muss in Kelvin und das Volumen in Kubikmetern angegeben werden, sonst ergibt sich der Druck nicht in Pascal. Liter und Kubikdezimeter werden durch Division mit $1000$ umgerechnet.</p>`,
        { fig: 'v1v4-izoterma', caption: 'Bei konstanter Temperatur ist das Produkt pV konstant, sodass der Druck als Funktion des Volumens eine Hyperbel bildet: doppeltes Volumen bedeutet halben Druck.' }
      ],
      examples: [
        { task: 'Ein Gas hat $n=1\\,\\text{mol}$, die Temperatur $T=300\\,\\text{K}$ und das Volumen $V=2\\,\\text{dm}^3$. Wie groß ist der Druck in kPa?',
          steps: ['$V=2\\,\\text{dm}^3=0{,}002\\,\\text{m}^3$.', '$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}314\\cdot 300}{0{,}002}\\approx 1\\,247\\,100\\,\\text{Pa}$.', '<strong>Ergebnis: $p\\approx 1247\\,\\text{kPa}$</strong>'] },
        { task: 'Bei konstanter Temperatur verdoppelt sich das Volumen des Gases. Wie ändert sich der Druck?',
          steps: ['Bei konstantem $T$ und $n$ gilt $p\\,V=\\text{konst.}$', 'Wenn $V\\to 2V$, dann $p\\to \\frac{p}{2}$.', '<strong>Ergebnis: der Druck sinkt auf die Hälfte</strong>'] }
      ]
    },
    'v2-prvy-zakon': {
      title: 'Erster und zweiter Hauptsatz der Thermodynamik',
      summary: 'Die Erhaltung der Energie bei thermischen Vorgängen und die Richtung, in der natürliche Prozesse ablaufen.',
      theory: [
        `<p>Der <strong>erste Hauptsatz der Thermodynamik</strong> ist der Energieerhaltungssatz: Die Änderung der inneren Energie ist gleich der zugeführten Wärme abzüglich der Arbeit, die das Gas verrichtet hat: $\\Delta U=Q-W$, wobei $W$ die Arbeit des Gases ist.</p>`,
        `<p>Verrichtet das Gas Arbeit, sinkt seine innere Energie, weil die Energie an die Umgebung abfließt. Wird am Gas Arbeit verrichtet, muss die Formel zu $\\Delta U=Q+W_{\\text{am Gas}}$ umgestellt werden. Wichtig ist stets, welche Vorzeichenkonvention verwendet wird.</p>`,
        `<p><strong>Der zweite Hauptsatz der Thermodynamik</strong> besagt, dass Wärme von selbst nur vom wärmeren zum kälteren Körper fließt und dass eine Wärmekraftmaschine nicht die gesamte Wärme in Arbeit umwandeln kann. Die Richtung natürlicher Vorgänge bestimmt das Wachstum der Entropie.</p>`,
        `<p><strong>Warum das wichtig ist:</strong> Der erste Hauptsatz sagt, wie viel Energie erhalten bleibt, und der zweite Hauptsatz, in welche Richtung Prozesse ablaufen. Ohne den zweiten Hauptsatz ließe sich ein Perpetuum mobile zweiter Art konstruieren.</p>`,
        { fig: 'v1v4-prvy-zakon', caption: 'Die zugeführte Wärme Q erhöht die innere Energie des Gases, die vom Gas verrichtete Arbeit W entzieht ihr Energie: ΔU = Q − W.' }
      ],
      examples: [
        { task: 'Dem Gas wird die Wärme $Q=300\\,\\text{J}$ zugeführt, und das Gas verrichtet die Arbeit $W=120\\,\\text{J}$. Wie groß ist die Änderung seiner inneren Energie?',
          steps: ['$\\Delta U=Q-W=300-120$.', '<strong>Ergebnis: $\\Delta U=180\\,\\text{J}$</strong>'] },
        { task: 'Beim Zusammendrücken wird dem Gas die Arbeit $W_{\\text{am Gas}}=50\\,\\text{J}$ zugeführt, und das Gas gibt die Wärme $Q=-20\\,\\text{J}$ ab. Wie groß ist die Änderung der inneren Energie?',
          steps: ['$\\Delta U=Q+W_{\\text{am Gas}}=-20+50$.', '<strong>Ergebnis: $\\Delta U=30\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-entropia': {
      title: 'Entropie und thermische Prozesse',
      summary: 'Die Entropie als Maß der Irreversibilität und ihre Änderung bei einem reversiblen isothermen Prozess.',
      theory: [
        `<p>Die <strong>Entropie</strong> $S$ ist eine Größe, die die Anzahl der möglichen Mikrozustände des Systems bei gegebenem Makrozustand misst. Bei reversibler Aufnahme der Wärme $Q$ bei konstanter Temperatur $T$ ändert sie sich um $\\Delta S=\\frac{Q}{T}$, in der Einheit $\\text{J/K}$.</p>`,
        `<p>Wärme, die bei niedriger Temperatur zugeführt wird, erhöht die Entropie stärker als dieselbe Wärme bei hoher Temperatur. Deshalb wird in der Formel durch die Temperatur dividiert und nicht nur addiert.</p>`,
        `<p><strong>Der zweite Hauptsatz in Form der Entropie:</strong> In einem abgeschlossenen System sinkt die Entropie nie; bei reversiblen Vorgängen bleibt sie konstant, bei irreversiblen steigt sie. Spontane Vorgänge laufen in Richtung höherer Entropie ab.</p>`,
        `<p><strong>Warum das so ist:</strong> Ein stark geordneter Zustand hat wenige Mikrozustände, und das System gelangt natürlicherweise in Zustände, von denen es mehr gibt. Die Entropie ist daher ein Maß dafür, wie viel nicht rückgängig zu machende Unordnung im System entsteht.</p>`,
      ],
      examples: [
        { task: 'Ein Gas nimmt bei konstanter Temperatur $T=300\\,\\text{K}$ reversibel die Wärme $Q=600\\,\\text{J}$ auf. Wie groß ist die Änderung seiner Entropie?',
          steps: ['$\\Delta S=\\frac{Q}{T}=\\frac{600}{300}$.', '<strong>Ergebnis: $\\Delta S=2\\,\\text{J/K}$</strong>'] },
        { task: 'Wie ändert sich die Entropie, wenn dieselbe Wärme $Q=600\\,\\text{J}$ bei der Temperatur $T=600\\,\\text{K}$ zugeführt wird?',
          steps: ['$\\Delta S=\\frac{600}{600}=1$.', '<strong>Ergebnis: $\\Delta S=1\\,\\text{J/K}$, also weniger als bei der niedrigeren Temperatur</strong>'] }
      ]
    },
    'v2-tepelne-motory': {
      title: 'Wärmekraftmaschinen und Kältemaschinen',
      summary: 'Der Wirkungsgrad einer Wärmekraftmaschine, der Carnot-Kreisprozess und die Grenze, die durch die Temperaturen von Wärmereservoir und Kühler gesetzt ist.',
      theory: [
        `<p>Eine <strong>Wärmekraftmaschine</strong> entnimmt dem Wärmereservoir Wärme, wandelt einen Teil in Arbeit um und gibt den Rest an den Kühler ab. Der Wirkungsgrad ist $\\eta=\\frac{W}{Q_h}$, also das Verhältnis der verrichteten Arbeit zur Wärme aus dem Reservoir.</p>`,
        `<p>Der <strong>Carnot-Kreisprozess</strong> ist der bestmögliche reversible Kreisprozess zwischen zwei Temperaturen. Sein Wirkungsgrad beträgt $\\eta=1-\\frac{T_c}{T_h}$, wobei die Temperaturen in Kelvin angegeben werden müssen.</p>`,
        `<p>Eine <strong>Kältemaschine</strong> ist eine umgekehrt laufende Wärmekraftmaschine: Mithilfe von Arbeit wird Wärme aus einem kälteren Raum in einen wärmeren transportiert. Deshalb spricht man bei ihr nicht vom Wirkungsgrad, sondern von der Leistungszahl.</p>`,
        `<p><strong>Warum der Wirkungsgrad nicht 100 % beträgt:</strong> Auch eine ideale Maschine muss einen Teil der Wärme an den Kühler abgeben, damit der Kreisprozess geschlossen werden kann. Je größer der Temperaturunterschied, desto höher der mögliche Wirkungsgrad.</p>`,
        { fig: 'v1v4-tepelny-motor', caption: 'Der Motor entnimmt dem Wärmereservoir die Wärme Q_h, wandelt einen Teil in Arbeit W um und gibt den Rest Q_c an den Kühler ab.' }
      ],
      examples: [
        { task: 'Eine Wärmekraftmaschine arbeitet zwischen einem Wärmereservoir mit $T_h=500\\,\\text{K}$ und einem Kühler mit $T_c=300\\,\\text{K}$. Wie groß ist ihr ideeller Wirkungsgrad?',
          steps: ['$\\eta=1-\\frac{T_c}{T_h}=1-\\frac{300}{500}$.', '$\\eta=1-0{,}6=0{,}4$.', '<strong>Ergebnis: $\\eta=40\\,\\%$</strong>'] },
        { task: 'Eine Maschine mit dem Wirkungsgrad $25\\,\\%$ erhält aus dem Reservoir die Wärme $Q_h=800\\,\\text{J}$. Welche Arbeit verrichtet sie?',
          steps: ['$W=\\eta\\,Q_h=0{,}25\\cdot 800$.', '<strong>Ergebnis: $W=200\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-kinetika-plynov': {
      title: 'Kinetische Gastheorie',
      summary: 'Die molekulare Betrachtung des Gases: Die mittlere kinetische Energie der Teilchen ist proportional zur absoluten Temperatur.',
      theory: [
        `<p>Die <strong>kinetische Gastheorie</strong> erklärt Druck und Temperatur durch die Bewegung der Moleküle. Der Druck entsteht durch Stöße der Moleküle auf die Behälterwände, die Temperatur ist ein Maß für ihre mittlere kinetische Energie.</p>`,
        `<p>Die mittlere kinetische Energie eines Moleküls im idealen Gas beträgt $\\overline{E_k}=\\frac{3}{2}k\\,T$, wobei $k\\approx 1{,}38\\cdot 10^{-23}\\,\\text{J/K}$ die Boltzmann-Konstante ist. Sie hängt nur von der Temperatur ab, nicht von der Art des Gases.</p>`,
        `<p><strong>Warum der Faktor $\\frac{3}{2}$:</strong> Ein Molekül kann sich in drei Richtungen bewegen, und jede Richtung trägt die Hälfte von $k\\,T$ zur Energie bei. Drei Freiheitsgrade ergeben zusammen $\\frac{3}{2}k\\,T$.</p>`,
        `<p><strong>Warum Kelvin:</strong> Die Formel ist direkt proportional zur absoluten Temperatur. Bei $0\\,\\text{K}$ müsste die kinetische Energie der Moleküle null sein, deshalb wird in dieser Formel niemals die Celsius-Skala verwendet.</p>`
      ],
      examples: [
        { task: 'Wie groß ist die mittlere kinetische Energie eines Gasmoleküls bei der Temperatur $T=300\\,\\text{K}$? Verwende $k=1{,}38\\cdot 10^{-23}\\,\\text{J/K}$.',
          steps: ['$\\overline{E_k}=\\frac{3}{2}k\\,T=1{,}5\\cdot 1{,}38\\cdot 10^{-23}\\cdot 300$.', '$\\overline{E_k}\\approx 6{,}21\\cdot 10^{-21}\\,\\text{J}$.', '<strong>Ergebnis: etwa $6{,}21\\cdot 10^{-21}\\,\\text{J}$</strong>'] },
        { task: 'Wenn sich die Temperatur des Gases verdoppelt, wie ändert sich dann die mittlere kinetische Energie eines Moleküls?',
          steps: ['Die Energie ist direkt proportional zu $T$.', '<strong>Ergebnis: sie verdoppelt sich</strong>'] }
      ]
    },
    'v2-boltzmann': {
      title: 'Boltzmann-Verteilung',
      summary: 'Die Verteilung der Teilchen auf Energieniveaus bei gegebener Temperatur und der exponentielle Abfall der Besetzung.',
      theory: [
        `<p>Im thermischen Gleichgewicht verteilen sich die Teilchen so auf die Energieniveaus, dass höhere Niveaus weniger besetzt sind. Das Verhältnis der Teilchenzahlen auf den Niveaus $E_2$ und $E_1$ beträgt $\\frac{N_2}{N_1}=e^{-(E_2-E_1)/(k\\,T)}$, unter der Annahme gleicher Entartung der Niveaus.</p>`,
        `<p>Die Exponentialfunktion bedeutet, dass ein kleiner Energieunterschied zwischen den Niveaus bei niedriger Temperatur großen Einfluss hat. Bei hoher Temperatur gleichen sich die Niveaus an, und die Besetzung nähert sich einer gleichmäßigen Verteilung.</p>`,
        `<p><strong>Warum gerade die Exponentialfunktion:</strong> Die Wahrscheinlichkeit der Besetzung eines Zustands mit der Energie $E$ sinkt mit wachsendem $E$ bei jedem festen zusätzlichen Energiebetrag um einen konstanten Faktor. Genau das führt auf die exponentielle Abhängigkeit.</p>`,
        `<p>Das Ergebnis zeigt, dass die Temperatur nicht nur ein Maß für die Wärme ist, sondern auch ein Maßstab dafür, welche Zustände zugänglich sind. Die Verteilung bildet die Grundlage aller statistischen Berechnungen makroskopischer Eigenschaften.</p>`,
        { fig: 'v1v4-boltzmann', caption: 'Ein Niveau um ΔE = k·T über dem Grundzustand ist bei der Temperatur T etwa e⁻¹ ≈ 0,37-mal so stark besetzt wie der Grundzustand.' }
      ],
      examples: [
        { task: 'Ein Niveau liegt um $\\Delta E=kT$ höher als das Grundniveau. Wie groß ist das Verhältnis $\\frac{N_2}{N_1}$?',
          steps: ['$\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}=e^{-1}$.', '<strong>Ergebnis: $\\frac{N_2}{N_1}\\approx 0{,}368$</strong>'] },
        { task: 'Ein Niveau liegt um $2\\,kT$ höher. Wie groß ist das Besetzungsverhältnis?',
          steps: ['$\\frac{N_2}{N_1}=e^{-2}\\approx 0{,}135$.', '<strong>Ergebnis: etwa $0{,}135$</strong>'] }
      ]
    },
    'v2-statisticke': {
      title: 'Statistische Erklärung makroskopischer Phänomene',
      summary: 'Der Boltzmann-Zusammenhang zwischen Entropie und Anzahl der Mikrozustände und warum makroskopische Phänomene einen Wahrscheinlichkeitscharakter haben.',
      theory: [
        `<p>Der <strong>Boltzmann-Zusammenhang</strong> verknüpft die Entropie mit der Anzahl der Mikrozustände $W$, die zu einem gegebenen Makrozustand gehören: $S=k\\ln W$. Der natürliche Logarithmus bewirkt, dass die Entropie additiv ist, wenn man zwei unabhängige Systeme zusammenfasst.</p>`,
        `<p>Bei $N$ unabhängigen Teilchen, von denen jedes in einem von zwei Zuständen sein kann, beträgt die Anzahl der Mikrozustände $W=2^N$. Die Entropie ist dann $S=k\\,N\\ln 2$ und wächst proportional zur Teilchenzahl.</p>`,
        `<p><strong>Warum makroskopische Phänomene wahrscheinlichkeitsbestimmt sind:</strong> Makrozustände mit einer großen Anzahl von Mikrozuständen treten weitaus häufiger auf. Bei einem Mol Teilchen ist der Unterschied der Wahrscheinlichkeiten so gewaltig, dass ein spontaner Entropierückgang praktisch nie beobachtet wird.</p>`,
        `<p><strong>Warum der Logarithmus:</strong> Die Anzahl der Mikrozustände wächst exponentiell mit der Teilchenzahl. Der Logarithmus macht daraus eine lineare Größe, die sinnvoll addiert und verglichen werden kann.</p>`
      ],
      examples: [
        { task: 'Ein System besteht aus $N=3$ unabhängigen Teilchen, von denen jedes zwei Zustände hat. Wie viele Mikrozustände $W$ gibt es?',
          steps: ['$W=2^N=2^3$.', '<strong>Ergebnis: $W=8$</strong>'] },
        { task: 'Wie groß ist der Wert $S/k$ für $N=4$ Teilchen mit zwei Zuständen? Runde auf 2 Dezimalstellen.',
          steps: ['$W=2^4=16$, also $\\frac{S}{k}=\\ln 16$.', '$\\ln 16=4\\ln 2\\approx 2{,}77$.', '<strong>Ergebnis: $\\frac{S}{k}\\approx 2{,}77$</strong>'] }
      ]
    },
    'v3-elektricke-pole': {
      title: 'Elektrisches Feld und elektrisches Potential',
      summary: 'Feldstärke und Potential einer Punktladung, das Superpositionsprinzip und die Arbeit im elektrischen Feld.',
      theory: [
        `<p>Die <strong>Feldstärke des elektrischen Feldes</strong> an einem Punkt ist die Kraft auf eine positive Probeladung, geteilt durch deren Betrag: $\\vec E=\\frac{\\vec F}{q}$, in der Einheit $\\text{V/m}$. Das Feld ist eine Eigenschaft des Raumes und nicht der Probeladung.</p>`,
        `<p>Für eine Punktladung $Q$ im Abstand $r$ gilt $E=k\\frac{Q}{r^2}$, wobei $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$ ist. Die Richtung des Feldes ist radial: von einer positiven Ladung nach außen und zu einer negativen Ladung hin.</p>`,
        `<p><strong>Das elektrische Potential</strong> ist die Energie pro Ladungseinheit: $V=k\\frac{Q}{r}$. Die Arbeit beim Verschieben der Ladung $q$ zwischen zwei Punkten beträgt $W=q\\,\\Delta V$ und hängt nicht vom Weg ab, nur vom Anfangs- und Endpunkt.</p>`,
        `<p><strong>Superposition:</strong> Die Felder mehrerer Ladungen werden vektoriell addiert, die Potentiale dagegen als Skalare einfach summiert. Deshalb ist das Potential einfacher zu berechnen als die Feldstärke.</p>`,
        { fig: 'v1v4-elektricke-pole', caption: 'Die Feldlinien einer positiven Punktladung verlaufen radial nach außen. Die Feldstärke nimmt mit dem Quadrat des Abstands ab.' }
      ],
      examples: [
        { task: 'Eine Punktladung $Q=2\\,\\mu\\text{C}$ befindet sich im Abstand $r=3\\,\\text{m}$. Wie groß ist die Feldstärke in kV/m? Verwende $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$.',
          steps: ['$E=k\\frac{Q}{r^2}=8{,}99\\cdot\\frac{2}{3^2}$.', '$E\\approx 2{,}00\\,\\text{kV/m}$', '<strong>Ergebnis: etwa $2{,}00\\,\\text{kV/m}$</strong>'] },
        { task: 'Wie ändert sich die Feldstärke einer Punktladung, wenn sich der Abstand verdoppelt?',
          steps: ['Die Feldstärke ist proportional zu $\\frac{1}{r^2}$.', '$\\frac{1}{(2r)^2}=\\frac{1}{4r^2}$.', '<strong>Ergebnis: sie sinkt auf ein Viertel</strong>'] }
      ]
    },
    'v3-gauss': {
      title: 'Gaußsches Gesetz',
      summary: 'Der elektrische Fluss durch eine geschlossene Fläche und sein Zusammenhang mit der Ladung im Inneren der Fläche.',
      theory: [
        `<p>Der <strong>elektrische Fluss</strong> durch eine Fläche $S$ ist $\\Phi_E=\\oint \\vec E\\cdot d\\vec S$, also die Summe der zur Fläche senkrechten Feldkomponenten. Die Einheit ist $\\text{N\\,m}^2/\\text{C}$.</p>`,
        `<p>Das <strong>Gaußsche Gesetz</strong> besagt, dass der Fluss durch eine geschlossene Fläche proportional zur Ladung im Inneren der Fläche ist: $\\oint \\vec E\\cdot d\\vec S=\\frac{Q_{\\text{innen}}}{\\varepsilon_0}$, wobei $\\varepsilon_0\\approx 8{,}854\\cdot 10^{-12}\\,\\text{F/m}$ ist.</p>`,
        `<p><strong>Warum das gilt:</strong> Feldlinien gehen von positiven Ladungen aus und enden in negativen. Der Fluss durch eine geschlossene Fläche erfasst daher genau so viele Feldlinien, wie Ladung im Inneren ist, unabhängig von der Form der Fläche.</p>`,
        `<p>Das Gaußsche Gesetz ist bei symmetrischen Aufgaben vorteilhaft, etwa bei einer Kugel oder einer unendlichen geladenen Ebene. Bei geeignet gewählter Fläche lässt sich das Feld vor das Integral ziehen, und die Rechnung wird einfach.</p>`,
        { fig: 'v1v4-gauss', caption: 'Der Gesamtfluss durch eine geschlossene Fläche hängt nur von der Ladung im Inneren der Fläche ab, Φ = Q/ε₀, unabhängig von der Form der Fläche.' }
      ],
      examples: [
        { task: 'Durch eine geschlossene Fläche tritt die Ladung $Q=1\\,\\mu\\text{C}$. Wie groß ist der Gesamtfluss durch die Fläche, wenn $\\varepsilon_0=8{,}854\\cdot 10^{-12}\\,\\text{F/m}$ ist?',
          steps: ['$\\Phi_E=\\frac{Q}{\\varepsilon_0}=\\frac{10^{-6}}{8{,}854\\cdot 10^{-12}}$.', '$\\Phi_E\\approx 1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$', '<strong>Ergebnis: etwa $1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$</strong>'] },
        { task: 'Die Ladung im Inneren der Fläche verdoppelt sich. Wie ändert sich der Fluss?',
          steps: ['Der Fluss ist direkt proportional zur Ladung.', '<strong>Ergebnis: er verdoppelt sich</strong>'] }
      ]
    },
    'v3-elektricky-prud': {
      title: 'Elektrischer Strom und elektrische Schaltungen',
      summary: 'Das Ohmsche Gesetz, Widerstände in Reihe und parallel sowie der Gesamtstrom aus der Quelle.',
      theory: [
        `<p>Der <strong>elektrische Strom</strong> ist die Ladungsmenge, die pro Zeiteinheit durch einen Querschnitt fließt: $I=\\frac{\\Delta Q}{\\Delta t}$, in Ampere. Die Stromrichtung wird als Bewegungsrichtung der positiven Ladungen festgelegt.</p>`,
        `<p><strong>Das Ohmsche Gesetz</strong>: Die Spannung an einem Leiter ist proportional zum Strom, $U=R\\,I$, wobei $R$ der Widerstand in Ohm ist. Bei der Reihenschaltung addieren sich die Widerstände, $R=R_1+R_2$.</p>`,
        `<p>Bei der <strong>Parallelschaltung</strong> liegt an beiden Zweigen dieselbe Spannung, und die Ströme addieren sich. Der Ersatzwiderstand ist kleiner als der kleinste der Widerstände: $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.</p>`,
        `<p><strong>Warum der Widerstand parallel kleiner ist:</strong> Der zweite Zweig bietet dem Strom einen weiteren Weg, sodass bei derselben Spannung insgesamt ein größerer Strom fließt. Die Quelle liefert daher mehr Strom, als sie über einen einzigen Zweig liefern würde.</p>`,
        { fig: 'v1v4-paralelne', caption: 'Bei der Parallelschaltung liegt an beiden Zweigen dieselbe Spannung, und der Gesamtstrom I ist die Summe der Zweigströme.' }
      ],
      examples: [
        { task: 'Zwei Widerstände $R_1=6\\,\\Omega$ und $R_2=3\\,\\Omega$ sind parallel an die Spannung $U=6\\,\\text{V}$ angeschlossen. Wie groß ist der Gesamtstrom der Quelle?',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$, also $R=2\\,\\Omega$.', '$I=\\frac{U}{R}=\\frac{6}{2}$.', '<strong>Ergebnis: $I=3\\,\\text{A}$</strong>'] },
        { task: 'Die Widerstände $4\\,\\Omega$ und $6\\,\\Omega$ sind in Reihe an die Spannung $10\\,\\text{V}$ angeschlossen. Wie groß ist der Strom?',
          steps: ['$R=4+6=10\\,\\Omega$.', '$I=\\frac{10}{10}$.', '<strong>Ergebnis: $I=1\\,\\text{A}$</strong>'] }
      ]
    },
    'v3-magneticke-pole': {
      title: 'Magnetisches Feld und magnetische Kraft',
      summary: 'Die Lorentzkraft auf eine bewegte Ladung und auf einen stromdurchflossenen Leiter im Magnetfeld.',
      theory: [
        `<p>Die <strong>magnetische Flussdichte</strong> $\\vec B$ beschreibt das Magnetfeld, ihre Einheit ist das Tesla, $1\\,\\text{T}=1\\,\\text{N/(A\\,m)}$. Das Feld wirkt nur auf bewegte Ladungen mit einer Kraft; eine ruhende Ladung erfährt keine magnetische Kraft.</p>`,
        `<p>Die <strong>Lorentzkraft</strong> auf eine Ladung $q$, die sich mit der Geschwindigkeit $\\vec v$ bewegt, ist $\\vec F=q\\,\\vec v\\times\\vec B$. Ihr Betrag beträgt $F=q\\,v\\,B\\sin\\alpha$, wobei $\\alpha$ der Winkel zwischen $\\vec v$ und $\\vec B$ ist.</p>`,
        `<p><strong>Die Richtung der Kraft</strong> ergibt sich aus der Rechte-Hand-Regel: Die Finger zeigen in Richtung der Geschwindigkeit, die Handfläche in Richtung des Feldes und der Daumen in Richtung der Kraft für eine positive Ladung. Bei einer negativen Ladung ist die Kraft entgegengesetzt.</p>`,
        `<p><strong>Warum die Kraft senkrecht zur Geschwindigkeit steht:</strong> Die magnetische Kraft verrichtet keine Arbeit und ändert nur die Bewegungsrichtung. Ein Teilchen bewegt sich im senkrechten Feld daher auf einer Kreisbahn und wird nicht beschleunigt. Deshalb nutzt man Magnetfelder, um Teilchenbahnen zu krümmen.</p>`,
        { fig: 'v1v4-lorentz', caption: 'Die Lorentzkraft auf eine positive Ladung, die senkrecht zum Feld fliegt, steht senkrecht zur Geschwindigkeit und zum Feld. Sie ändert die Bewegungsrichtung, nicht die Geschwindigkeit.' }
      ],
      examples: [
        { task: 'Ein Elektron fliegt senkrecht zu einem Feld mit der Flussdichte $B=0{,}2\\,\\text{T}$ mit der Geschwindigkeit $v=10^{5}\\,\\text{m/s}$. Wie groß ist die Kraft, wenn $q=1{,}6\\cdot 10^{-19}\\,\\text{C}$ ist?',
          steps: ['$\\alpha=90^\\circ$, also $\\sin\\alpha=1$.', '$F=qvB=1{,}6\\cdot 10^{-19}\\cdot 10^{5}\\cdot 0{,}2$.', '<strong>Ergebnis: $F=3{,}2\\cdot 10^{-15}\\,\\text{N}$</strong>'] },
        { task: 'Ein Teilchen mit der Ladung $q=2\\,\\mu\\text{C}$ fliegt mit $v=300\\,\\text{m/s}$ senkrecht zum Feld $B=0{,}5\\,\\text{T}$. Wie groß ist die Kraft in Mikronewton?',
          steps: ['$F=qvB=2\\cdot 300\\cdot 0{,}5$ in Einheiten von $\\mu\\text{N}$.', '<strong>Ergebnis: $F=300\\,\\mu\\text{N}$</strong>'] }
      ]
    },
    'v3-indukcia': {
      title: 'Elektromagnetische Induktion',
      summary: 'Das Faradaysche Gesetz: Eine Spannung entsteht durch die Änderung des magnetischen Flusses durch eine Leiterschleife.',
      theory: [
        `<p>Der <strong>magnetische Fluss</strong> durch eine Fläche $S$ ist $\\Phi=B\\,S\\cos\\alpha$, wobei $\\alpha$ der Winkel zwischen dem Feld und der Flächennormalen ist. Die Einheit ist das Weber, $1\\,\\text{Wb}=1\\,\\text{T\\,m}^2$.</p>`,
        `<p>Das <strong>Faradaysche Induktionsgesetz</strong>: In einer geschlossenen Schleife entsteht eine Spannung, die proportional zur Änderungsgeschwindigkeit des Flusses ist, $U_i=-\\frac{\\Delta\\Phi}{\\Delta t}$. Das Minuszeichen beschreibt die Lenzsche Regel, nach der der induzierte Strom der Flussänderung entgegenwirkt.</p>`,
        `<p><strong>Wie die Spannung entsteht:</strong> durch Änderung der Induktion, Änderung der Fläche oder Drehen der Schleife im Feld. Ist der Fluss konstant, entsteht keine Spannung, auch wenn das Feld stark ist.</p>`,
        `<p><strong>Warum durch die Zeit dividiert wird:</strong> Die Spannung hängt davon ab, wie schnell sich der Fluss ändert, und nicht von seiner Größe. Eine schnelle Änderung erzeugt eine größere Spannung als eine langsame, selbst bei gleicher gesamter Flussänderung.</p>`,
        { fig: 'v1v4-tok-indukcia', caption: 'Der magnetische Fluss durch eine Fläche ist Φ = B·S·cos α, wobei α der Winkel zwischen dem Feld B und der Normalen n der Fläche ist.' }
      ],
      examples: [
        { task: 'Die Fläche einer Schleife beträgt $S=0{,}5\\,\\text{m}^2$ und steht senkrecht im Feld, das sich in $2\\,\\text{s}$ um $\\Delta B=4\\,\\text{T}$ ändert. Welche Spannung wird induziert?',
          steps: ['$U_i=\\frac{\\Delta\\Phi}{\\Delta t}=\\frac{S\\,\\Delta B}{\\Delta t}=\\frac{0{,}5\\cdot 4}{2}$.', '<strong>Ergebnis: $U_i=1\\,\\text{V}$</strong>'] },
        { task: 'Der Fluss durch die Fläche ist konstant. Welche Spannung wird induziert?',
          steps: ['Die Spannung ist proportional zur Flussänderung, $\\Delta\\Phi=0$.', '<strong>Ergebnis: $U_i=0\\,\\text{V}$</strong>'] }
      ]
    },
    'v3-maxwell': {
      title: 'Maxwellsche Gleichungen',
      summary: 'Vier Gleichungen, die elektrisches und magnetisches Feld verbinden, und ihre Anwendung auf einen stromdurchflossenen Leiter.',
      theory: [
        `<p>Die <strong>Maxwellschen Gleichungen</strong> in integraler Form sind vier: das Gaußsche Gesetz für das elektrische Feld, das Gaußsche Gesetz für das magnetische Feld (magnetische Ladungen existieren nicht), das Faradaysche Induktionsgesetz und das Ampère-Maxwell-Gesetz. Zusammen beschreiben sie alle klassischen elektromagnetischen Phänomene.</p>`,
        `<p>Das <strong>Ampère-Maxwell-Gesetz</strong> besagt, dass die Zirkulation des Magnetfeldes längs einer geschlossenen Kurve proportional zum Strom durch sie und zur Änderung des elektrischen Flusses ist: $\\oint \\vec B\\cdot d\\vec l=\\mu_0 I+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}$. Bei stationären Vorgängen bleibt nur der Stromterm.</p>`,
        `<p>Aus dem Ampère-Gesetz für einen langen geraden Leiter mit dem Strom $I$ im Abstand $r$ folgt $B=\\frac{\\mu_0 I}{2\\pi r}$, wobei $\\mu_0=4\\pi\\cdot 10^{-7}\\,\\text{T\\,m/A}$ ist.</p>`,
        `<p><strong>Warum der Verschiebungsstrom wichtig ist:</strong> Ohne den Term mit der Änderung des elektrischen Flusses würde das Gesetz nicht mit der Erhaltung der Ladung übereinstimmen. Maxwell ergänzte ihn, und aus den Gleichungen folgte die Existenz elektromagnetischer Wellen.</p>`,
        { fig: 'v1v4-ampere', caption: 'Um einen geraden stromdurchflossenen Leiter verlaufen die Feldlinien der magnetischen Flussdichte als Kreise. Die Flussdichte B nimmt mit dem Abstand r ab.' }
      ],
      examples: [
        { task: 'Durch einen geraden Leiter fließt der Strom $I=10\\,\\text{A}$. Wie groß ist die magnetische Flussdichte im Abstand $r=0{,}2\\,\\text{m}$? Ergebnis in Mikrotesla.',
          steps: ['$B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{4\\pi\\cdot 10^{-7}\\cdot 10}{2\\pi\\cdot 0{,}2}$.', '$B=\\frac{2\\cdot 10^{-7}\\cdot 10}{0{,}2}=10^{-5}\\,\\text{T}$.', '<strong>Ergebnis: $B=10\\,\\mu\\text{T}$</strong>'] },
        { task: 'Wie ändert sich die Flussdichte um einen stromdurchflossenen Leiter, wenn sich der Abstand von ihm verdoppelt?',
          steps: ['$B$ ist proportional zu $\\frac{1}{r}$.', '<strong>Ergebnis: sie sinkt auf die Hälfte</strong>'] }
      ]
    },
    'v3-em-vlny': {
      title: 'Elektromagnetische Wellen',
      summary: 'Die Welle als wechselndes elektrisches und magnetisches Feld senkrecht zur Ausbreitungsrichtung mit der Lichtgeschwindigkeit c.',
      theory: [
        `<p>Eine Änderung des elektrischen Feldes erzeugt ein Magnetfeld, und eine Änderung des Magnetfeldes erzeugt ein elektrisches Feld. Dieses wechselseitige Hervorrufen breitet sich im Raum als <strong>elektromagnetische Welle</strong> aus. Im Vakuum beträgt ihre Geschwindigkeit $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        `<p>Die Welle hat eine Frequenz $f$ und eine Wellenlänge $\\lambda$. Es gilt $c=\\lambda\\,f$, woraus $\\lambda=\\frac{c}{f}$ folgt. Je höher die Frequenz, desto kürzer die Wellenlänge.</p>`,
        `<p>Das elektrische und das magnetische Feld der Welle stehen aufeinander senkrecht, und beide sind senkrecht zur Ausbreitungsrichtung. Deshalb ist die elektromagnetische Welle <em>transversal</em>.</p>`,
        `<p><strong>Warum das wichtig ist:</strong> Radiowellen, sichtbares Licht und Röntgenstrahlung sind von derselben Art. Sie unterscheiden sich nur durch die Frequenz und damit die Wellenlänge, und daran knüpfen sich ihre unterschiedlichen Anwendungen.</p>`,
        { fig: 'v1v4-em-vlna', caption: 'Die elektrische und die magnetische Komponente der Welle schwingen in Phase, sie stehen senkrecht zueinander und beide senkrecht zur Ausbreitungsrichtung c.' }
      ],
      examples: [
        { task: 'Ein Sender arbeitet mit der Frequenz $f=100\\,\\text{MHz}$. Wie groß ist die Wellenlänge der Welle in Luft?',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{100\\cdot 10^{6}}$.', '<strong>Ergebnis: $\\lambda=3\\,\\text{m}$</strong>'] },
        { task: 'Die Wellenlänge beträgt $\\lambda=0{,}5\\,\\text{m}$. Wie groß ist die Frequenz der Welle?',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{0{,}5}$.', '<strong>Ergebnis: $f=6\\cdot 10^{8}\\,\\text{Hz}=600\\,\\text{MHz}$</strong>'] }
      ]
    },
    'v3-sirenie': {
      title: 'Ausbreitung elektromagnetischer Strahlung',
      summary: 'Die Lichtgeschwindigkeit im Stoff, der Brechungsindex und der Einfluss von Permittivität und Permeabilität des Mediums.',
      theory: [
        `<p>Im Vakuum breitet sich elektromagnetische Strahlung mit der Geschwindigkeit $c$ aus, in einem Stoff ist ihre Geschwindigkeit kleiner. Der <strong>Brechungsindex</strong> $n=\\frac{c}{v}$ gibt an, um wie viel mal kleiner die Geschwindigkeit im Stoff ist.</p>`,
        `<p>Für ein nichtmagnetisches Medium mit der relativen Permittivität $\\varepsilon_r$ und der Permeabilität $\\mu_r=1$ gilt $n=\\sqrt{\\varepsilon_r\\,\\mu_r}=\\sqrt{\\varepsilon_r}$. Ein Dielektrikum mit größerer Permittivität verlangsamt die Welle also.</p>`,
        `<p><strong>Warum die Welle langsamer wird:</strong> Das elektrische Feld der Welle polarisiert die Atome des Stoffes, deren Schwingungen verzögert werden, und die resultierende Welle breitet sich langsamer aus. Beim Eintritt in den Stoff ändert sich die Frequenz nicht, wohl aber die Geschwindigkeit und die Wellenlänge.</p>`,
        `<p>Genau dieser Effekt erklärt die Brechung des Lichts an der Grenzfläche zweier Medien sowie das Prinzip von Linsen und Lichtwellenleitern.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: 'Beim Eintritt in einen Stoff verringert sich die Wellengeschwindigkeit und damit die Wellenlänge. Die Frequenz bleibt gleich.' }
      ],
      examples: [
        { task: 'Ein Medium hat die relative Permittivität $\\varepsilon_r=4$. Wie groß ist der Brechungsindex?',
          steps: ['$n=\\sqrt{\\varepsilon_r}=\\sqrt{4}$.', '<strong>Ergebnis: $n=2$</strong>'] },
        { task: 'Wie groß ist die Lichtgeschwindigkeit in einem Medium mit dem Brechungsindex $n=2$, wenn $c=3\\cdot 10^{8}\\,\\text{m/s}$ gilt?',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{2}$.', '<strong>Ergebnis: $v=1{,}5\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-vlnenie': {
      title: 'Mechanische und elektromagnetische Wellen',
      summary: 'Was bei einer Welle übertragen wird und warum mechanische Wellen einen Stoff benötigen, elektromagnetische dagegen nicht.',
      theory: [
        `<p>Eine Welle ist die Ausbreitung von Schwingungen im Raum. Der Stoff wandert dabei nicht mit, übertragen werden <strong>Energie</strong> und <strong>Information</strong>. Je nachdem, was schwingt, unterscheidet man <strong>mechanische</strong> Wellen (der Stoff schwingt, z. B. Schall, Wasserwellen, seismische Wellen) und <strong>elektromagnetische</strong> Wellen (es schwingen das elektrische und das magnetische Feld, z. B. Licht, Radiowellen, Röntgenstrahlung).</p>`,
        `<p>Mechanische Wellen benötigen ein <strong>materielles Medium</strong>, weil jedes Teilchen seinen Nachbarn zum Schwingen anregt. Deshalb breitet sich Schall im Vakuum nicht aus. Elektromagnetische Wellen breiten sich auch im Vakuum aus, da die Schwingungen des Feldes keine Teilchen benötigen, die sie weitergeben.</p>`,
        `<p>Nach der Richtung der Schwingungen unterscheidet man <strong>transversale</strong> Wellen (die Schwingungen stehen senkrecht zur Ausbreitungsrichtung, z. B. Welle auf einer Saite und Licht) und <strong>longitudinale</strong> Wellen (die Schwingungen verlaufen in Ausbreitungsrichtung, z. B. Schall in Gasen). Die Schallgeschwindigkeit in Luft beträgt etwa $340\\,\\text{m/s}$, die Lichtgeschwindigkeit im Vakuum $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        { fig: 'obr-vlna', caption: 'Transversale Welle: Die Wellenlänge λ ist der Abstand zweier benachbarter Punkte in gleicher Phase.' }
      ],
      examples: [
        { task: 'Das Licht der Sonne erreicht die Erde durch den leeren Weltraum. Handelt es sich um eine mechanische oder um eine elektromagnetische Welle?',
          steps: ['Zwischen Sonne und Erde gibt es keinen Stoff, die Welle breitet sich also im Vakuum aus.', '<strong>Ergebnis: es handelt sich um eine elektromagnetische Welle.</strong>'] },
        { task: 'Warum hört man im leeren Raum zwischen zwei Raumschiffen keinen Schall?',
          steps: ['Schall ist eine mechanische Welle und benötigt ein materielles Medium.', 'Im Vakuum sind keine Teilchen vorhanden, die die Schwingungen weitergeben könnten.', '<strong>Ergebnis: Schall breitet sich im Vakuum nicht aus.</strong>'] }
      ]
    },
    'v4-frekvencia': {
      title: 'Frequenz, Wellenlänge und Amplitude',
      summary: 'Die Größen, die eine Welle beschreiben, und die Beziehung v = λ·f zwischen ihnen.',
      theory: [
        `<p>Eine Welle wird durch drei grundlegende Größen beschrieben: die <strong>Amplitude</strong> $A$ (größte Auslenkung aus der Ruhelage), die <strong>Frequenz</strong> $f$ (Anzahl der Schwingungen pro Sekunde, Einheit $\\text{Hz}$) und die <strong>Wellenlänge</strong> $\\lambda$ (Abstand zweier nächstliegender Punkte, die gleichphasig schwingen).</p>`,
        `<p>Die Periode $T=\\frac{1}{f}$ ist die Zeit einer Schwingung. Die Amplitude hängt mit der <em>Stärke</em> der Welle zusammen (z. B. der Lautstärke des Schalls oder der Helligkeit des Lichts), die Frequenz bestimmt die Tonhöhe oder die Farbe des Lichts.</p>`,
        `<p>Die Ausbreitungsgeschwindigkeit der Welle beträgt $v=\\lambda\\cdot f$. Beim Übergang in ein anderes Medium ändern sich Geschwindigkeit und Wellenlänge, aber <strong>die Frequenz bleibt gleich</strong>: Sie wird durch die Schwingungsquelle bestimmt und nicht durch das Medium.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: 'Beim Eintritt in einen Stoff verringert sich die Wellengeschwindigkeit und damit die Wellenlänge. Die Frequenz bleibt gleich.' }
      ],
      examples: [
        { task: 'Eine Welle hat die Frequenz $f=50\\,\\text{Hz}$ und die Wellenlänge $\\lambda=6\\,\\text{m}$. Wie groß ist ihre Geschwindigkeit?',
          steps: ['$v=\\lambda\\cdot f=6\\cdot 50$.', '<strong>Ergebnis: $v=300\\,\\text{m/s}$</strong>'] },
        { task: 'Wie groß ist die Periode einer Welle mit der Frequenz $f=4\\,\\text{Hz}$?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{4}$.', '<strong>Ergebnis: $T=0{,}25\\,\\text{s}$</strong>'] }
      ]
    },
    'v4-interferencia': {
      title: 'Interferenz und Beugung',
      summary: 'Die Überlagerung von Wellen: wann sie sich verstärken, wann sie sich abschwächen und warum sich Wellen hinter Hindernissen ausbreiten.',
      theory: [
        `<p><strong>Superpositionsprinzip:</strong> Die resultierende Schwingung an einem Punkt ist die Summe der Schwingungen aller Wellen, die dort eintreffen. Schwingen die Wellen gleichphasig (kohärent), entscheidet der <strong>Gangunterschied</strong> $\\Delta d$ über das Ergebnis.</p>`,
        `<p><strong>Verstärkung</strong> tritt ein, wenn der Gangunterschied ein ganzzahliges Vielfaches der Wellenlänge ist: $\\Delta d=m\\,\\lambda$. <strong>Abschwächung</strong> tritt ein, wenn der Gangunterschied ein ungerades Vielfaches der halben Wellenlänge ist: $\\Delta d=\\left(m+\\tfrac{1}{2}\\right)\\lambda$.</p>`,
        `<p><strong>Beugung</strong> ist das Abbiegen einer Welle um ein Hindernis oder durch einen schmalen Spalt. Sie ist stärker, wenn die Abmessung des Hindernisses mit der Wellenlänge vergleichbar ist. Deshalb biegt sich Schall leicht um eine Ecke, während Licht einen scharfen Schatten erzeugt.</p>`,
        { fig: 'v1v4-interferencia', caption: 'Gleichphasige Wellen verstärken sich bei einem Gangunterschied m·λ, gegenphasige schwächen sich bei (m + ½)·λ ab.' }
      ],
      examples: [
        { task: 'Zwei kohärente Wellen mit der Wellenlänge $\\lambda=0{,}5\\,\\text{m}$ haben den Gangunterschied $\\Delta d=1{,}25\\,\\text{m}$. Tritt Verstärkung oder Abschwächung auf?',
          steps: ['$\\frac{\\Delta d}{\\lambda}=\\frac{1{,}25}{0{,}5}=2{,}5$.', 'Die Zahl $2{,}5$ ist ein ungerades Vielfaches der halben Wellenlänge: $2{,}5=\\left(2+\\tfrac{1}{2}\\right)$.', '<strong>Ergebnis: Abschwächung.</strong>'] }
      ]
    },
    'v4-polarizacia': {
      title: 'Polarisation des Lichts',
      summary: 'Die Querschwingung des Lichts, der Polarisator und das Gesetz von Malus für die Intensität hinter dem Analysator.',
      theory: [
        `<p>Licht ist eine transversale Welle: Das elektrische Feld schwingt senkrecht zur Ausbreitungsrichtung. <strong>Polarisiertes</strong> Licht hat Schwingungen in nur einer Ebene. Eine gewöhnliche Quelle (Glühlampe, Sonne) sendet unpolarisiertes Licht aus, bei dem die Schwingungsebene sich zufällig ändert.</p>`,
        `<p>Ein Polarisator lässt nur die Schwingungskomponente in seiner Richtung durch. Beim Durchgang von <strong>unpolarisiertem</strong> Licht durch den ersten Polarisator sinkt die Intensität auf die Hälfte.</p>`,
        `<p><strong>Gesetz von Malus:</strong> Trifft linear polarisiertes Licht mit der Intensität $I_0$ auf einen um den Winkel $\\varphi$ gedrehten Analysator, so beträgt die Intensität dahinter $I=I_0\\cos^2\\varphi$. Der Kosinus tritt quadriert auf, weil nur die Feldkomponente in Richtung der Achse durchgelassen wird und die Intensität proportional zum Quadrat der Amplitude ist.</p>`,
        { fig: 'v1v4-polarizacia', caption: 'Der Analysator lässt nur die Schwingungskomponente in seiner Richtung durch, E·cos φ. Die Intensität ist proportional zu cos²φ.' }
      ],
      examples: [
        { task: 'Linear polarisiertes Licht mit der Intensität $I_0=80$ durchläuft einen um $60^\\circ$ gedrehten Analysator. Welche Intensität hat es dahinter?',
          steps: ['$\\cos^2 60^\\circ=\\left(\\tfrac{1}{2}\\right)^2=0{,}25$.', '$I=80\\cdot 0{,}25=20$.', '<strong>Ergebnis: $I=20$</strong>'] }
      ]
    },
    'v4-geometricka-optika': {
      title: 'Geometrische und Wellenoptik',
      summary: 'Brechungsindex, Lichtgeschwindigkeit in Stoffen und das Snelliussche Brechungsgesetz.',
      theory: [
        `<p>Die <strong>geometrische Optik</strong> beschreibt Licht als Strahlen, die sich geradlinig ausbreiten, nach dem Reflexionsgesetz ($\\alpha=\\alpha'$) reflektiert und an Grenzflächen zwischen Medien gebrochen werden. Die Wellenoptik erklärt Phänomene, die Strahlen nicht erfassen, zum Beispiel Interferenz und Beugung.</p>`,
        `<p>Der <strong>Brechungsindex</strong> $n=\\frac{c}{v}$ gibt an, um wie viel mal das Licht im Stoff langsamer ist als im Vakuum. In Wasser ist $n\\approx 1{,}33$, in Glas etwa $1{,}5$. Die Lichtgeschwindigkeit im Stoff ist $v=\\frac{c}{n}$.</p>`,
        `<p>Das <strong>Snelliussche Brechungsgesetz</strong> $n_1\\sin\\alpha=n_2\\sin\\beta$ beschreibt, wie der Strahl gebrochen wird. Beim Übergang in ein optisch dichteres Medium ($n_2>n_1$) wird der Strahl zum Lot hin gebrochen, beim Übergang in ein dünneres vom Lot weg.</p>`,
        { fig: 'v1v4-lom', caption: 'Beim Übergang in ein optisch dichteres Medium wird der Strahl zum Lot hin gebrochen, sodass β kleiner als α ist (n₂ > n₁).' }
      ],
      examples: [
        { task: 'Wie groß ist die Lichtgeschwindigkeit in Glas mit dem Brechungsindex $n=1{,}5$? Verwende $c=3\\cdot 10^{8}\\,\\text{m/s}$.',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{1{,}5}$.', '<strong>Ergebnis: $v=2\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-zobrazovanie': {
      title: 'Abbildung durch Linsen und Spiegel',
      summary: 'Die Abbildungsgleichung für die Sammellinse und die Bestimmung der Bildlage.',
      theory: [
        `<p>Eine Sammellinse vereinigt parallele Strahlen im <strong>Brennpunkt</strong> im Abstand $f$. Ein Gegenstand im Abstand $a$ vor der Linse erzeugt ein Bild im Abstand $b$ hinter ihr.</p>`,
        `<p>Die <strong>Abbildungsgleichung</strong> gilt für dünne Linsen und Spiegel: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$. Es ist ein Zusammenhang zwischen drei Größen, sodass man die dritte berechnen kann, wenn zwei bekannt sind.</p>`,
        `<p>Ist $a>f$, so ist das Bild reell und umgekehrt. Achtung auf einen häufigen Fehler: Die Kehrwerte werden addiert, nicht die Abstände selbst. Die Beziehung $b=a+f$ gilt nicht.</p>`,
        { fig: 'v1v4-zobrazenie', caption: 'Ein Gegenstand in der doppelten Brennweite erzeugt ein reelles, umgekehrtes und gleich großes Bild im Abstand 2f.' }
      ],
      examples: [
        { task: 'Ein Gegenstand befindet sich im Abstand $a=30\\,\\text{cm}$ vor einer Sammellinse mit der Brennweite $f=15\\,\\text{cm}$. Wo entsteht das Bild?',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{15}-\\frac{1}{30}=\\frac{1}{30}$.', '<strong>Ergebnis: $b=30\\,\\text{cm}$</strong>'] }
      ]
    },
    'v4-lasery': {
      title: 'Laser und optische Geräte',
      summary: 'Eigenschaften des Laserlichts, die Berechnung der Frequenz und die Vergrößerung der Lupe.',
      theory: [
        `<p>Der <strong>Laser</strong> (Lichtverstärkung durch stimulierte Emission von Strahlung) erzeugt Licht mit Eigenschaften, die eine gewöhnliche Quelle nicht besitzt: Es ist <strong>monochromatisch</strong> (eine einzige Wellenlänge), <strong>kohärent</strong> (die Schwingungen sind gleichphasig) und bildet ein <strong>schmales Bündel</strong>. Deshalb lässt es sich auf einen kleinen Fleck fokussieren.</p>`,
        `<p>Für jedes Licht gilt $c=\\lambda\\cdot f$, also ist die Frequenz $f=\\frac{c}{\\lambda}$. Die Wellenlänge gibt man in der Optik meist in Nanometern an: $1\\,\\text{nm}=10^{-9}\\,\\text{m}$.</p>`,
        `<p><strong>Optische Geräte</strong> verwenden Linsen zur Vergrößerung. Eine Lupe mit der Brennweite $f$ erzeugt bei bequemer Betrachtung die Vergrößerung $Z=\\frac{d}{f}$, wobei $d\\approx 250\\,\\text{mm}$ die deutliche Sehweite ist. Eine kürzere Brennweite bedeutet eine stärkere Vergrößerung.</p>`
      ],
      examples: [
        { task: 'Rotes Laserlicht hat die Wellenlänge $\\lambda=650\\,\\text{nm}$. Wie groß ist seine Frequenz in Einheiten von $10^{14}\\,\\text{Hz}$?',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{650\\cdot 10^{-9}}\\approx 4{,}6\\cdot 10^{14}\\,\\text{Hz}$.', '<strong>Ergebnis: etwa $4{,}6\\cdot 10^{14}\\,\\text{Hz}$</strong>'] }
      ]
    },
    'v4-vlakna': {
      title: 'Grundlagen der Lichtwellenleiter',
      summary: 'Totalreflexion an der Grenzfläche von Kern und Mantel und der Grenzwinkel.',
      theory: [
        `<p>Ein Lichtwellenleiter führt das Licht im Inneren eines dünnen Kerns mit dem Brechungsindex $n_1$, der von einem Mantel mit kleinerem Brechungsindex $n_2&lt;n_1$ umgeben ist. Das Licht wird im Kern durch <strong>Totalreflexion</strong> gehalten und nicht durch Brechung, sodass es kaum verloren geht.</p>`,
        `<p>Totalreflexion tritt ein, wenn der Einfallswinkel den <strong>Grenzwinkel</strong> $\\alpha_c$ übersteigt, für den $\\sin\\alpha_c=\\frac{n_2}{n_1}$ gilt. Bei größerem Indexunterschied ist der Grenzwinkel kleiner, und die Faser erfasst mehr Licht.</p>`,
        `<p>Das Signal wird durch Lichtimpulse übertragen. Lichtwellenleiter werden im Internet und in der Telekommunikation eingesetzt, weil Licht über große Entfernungen viel Information transportiert und nicht durch elektromagnetische Felder gestört wird.</p>`,
        { fig: 'v1v4-vlakno', caption: 'Das Licht wird im Kern durch Totalreflexion geführt, da es unter einem Winkel auftrifft, der größer als der Grenzwinkel ist, für den sin α_c = n₂/n₁ gilt.' }
      ],
      examples: [
        { task: 'Der Kern einer Faser hat $n_1=1{,}5$ und der Mantel $n_2=1{,}0$. Wie groß ist der Sinus des Grenzwinkels?',
          steps: ['$\\sin\\alpha_c=\\frac{n_2}{n_1}=\\frac{1{,}0}{1{,}5}$.', '<strong>Ergebnis: $\\sin\\alpha_c\\approx 0{,}67$</strong>'] }
      ]
    }
  }
});
