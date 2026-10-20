/* Deutsch: preklad js/rocniky/v7.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/v7/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "v7-chyby": {
   "title": "Fehler und Rechengenauigkeit",
   "summary": "Absoluter und relativer Fehler, gültige Ziffern, Maschinenzahlen und Maschinengenauigkeit, Fehlerfortpflanzung, Kondition eines Problems und Auslöschung bei der Subtraktion.",
   "theory": [
    "<p>Das Ergebnis einer numerischen Rechnung ist fast immer nur <strong>näherungsweise</strong> richtig. Fehler stammen aus mehreren Quellen: aus dem <em>Modell</em>\n       (vereinfachte Beschreibung der Wirklichkeit), aus den <em>Eingabedaten</em> (Messungen), aus dem <em>Verfahren</em> (einen unendlichen Prozess, etwa eine Reihe oder einen Grenzwert, ersetzen wir durch einen endlichen — Verfahrens-\n       oder Diskretisierungsfehler) und aus dem <em>Runden</em> beim Rechnen mit einer endlichen Anzahl von Ziffern.</p>\n       <p>Ist $x$ der exakte Wert und $\\tilde{x}$ seine Näherung, so ist der <strong>absolute Fehler</strong> $\\Delta = |x-\\tilde{x}|$ und der <strong>relative Fehler</strong>\n       $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$ (für $x\\neq 0$), oft in Prozent. Den exakten Wert kennen wir in der Regel nicht, daher arbeiten wir mit einer <em>Schranke</em> für den Fehler:\n       einer Zahl $\\varepsilon$, für die $|x-\\tilde{x}|\\le\\varepsilon$ gilt, und schreiben $x=\\tilde{x}\\pm\\varepsilon$. Der relative Fehler ist wichtiger, weil er nicht von den Einheiten abhängt:\n       Ein Fehler von 1 mm ist bei der Länge einer Brücke vernachlässigbar, bei der Dicke eines Blechs aber riesig.</p>",
    "<p><strong>Gültige Ziffern.</strong> Eine Ziffer der Näherung $\\tilde{x}$ an der Stelle $10^{-k}$ ist <em>gültig</em> (zuverlässig), wenn $|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$.\n       Die Anzahl der gültigen Ziffern zählen wir von der ersten von null verschiedenen Ziffer links bis zur letzten gültigen. Zum Beispiel hat $\\tilde{x}=23{,}4718$ mit einem Fehler von höchstens $0{,}004$ zwei gültige Nachkommastellen\n       ($0{,}004\\le 0{,}005$), also vier gültige Ziffern 2, 3, 4, 7. Das <strong>Runden</strong> auf $k$ Nachkommastellen verursacht einen Fehler von höchstens $\\frac{1}{2}\\cdot 10^{-k}$,\n       bei einer korrekt gerundeten Zahl sind also alle angegebenen Ziffern gültig.</p>",
    "<p><strong>Maschinenzahlen.</strong> Ein Computer speichert reelle Zahlen als Gleitkommazahlen $\\pm m\\cdot\\beta^{e}$, wobei $\\beta$ die Basis ist, die Mantisse $m$ eine feste Anzahl\n       $t$ von Ziffern hat und der Exponent $e$ in einem beschränkten Bereich liegt. Der Standard IEEE 754 in doppelter Genauigkeit (double) verwendet $\\beta=2$, $t=53$ Mantissenbits und Exponenten\n       etwa von $-1022$ bis $1023$. Die Menge der Maschinenzahlen ist endlich, außerhalb davon tritt ein <em>Überlauf</em> (zu große Zahl) oder ein <em>Unterlauf</em> (zu kleine Zahl) ein.</p>\n       <p>Die <strong>Maschinengenauigkeit</strong> (Maschinenepsilon) $\\varepsilon_M$ ist der Abstand der Zahl 1 zur nächstgrößeren Maschinenzahl; für double ist $\\varepsilon_M=2^{-52}\\approx 2{,}22\\cdot 10^{-16}$.\n       Durch Runden einer reellen Zahl auf eine Maschinenzahl entsteht $\\mathrm{fl}(x)=x(1+\\eta)$, wobei $|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$ (Rundungsfehlereinheit).\n       Double trägt also etwa 15 bis 16 gültige Dezimalziffern. Selbst die Zahl $0{,}1$ hat im Dualsystem keine endliche Darstellung, daher ist zum Beispiel $0{,}1+0{,}2$ nicht genau $0{,}3$.</p>",
    "<p><strong>Fehlerfortpflanzung.</strong> Für die Fehlerschranken der Eingaben gilt (in linearer Näherung):\n       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$\n       Für eine Funktion $y=f(x)$ ist $\\Delta y\\approx|f'(x)|\\,\\Delta x$, für eine Funktion mehrerer Variablen $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$.\n       Bei der Addition addieren sich also die absoluten Fehler, bei Multiplikation und Division die relativen.</p>\n       <p><strong>Kondition.</strong> Ein Problem ist <em>gut konditioniert</em>, wenn eine kleine relative Änderung der Eingabe eine kleine relative Änderung des Ergebnisses bewirkt. Das Maß dafür ist\n       die <strong>Konditionszahl</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, für die $\\delta y\\approx\\kappa\\,\\delta x$ gilt. Zum Beispiel hat $f(x)=\\ln x$ die Konditionszahl $\\kappa=\\frac{1}{|\\ln x|}$,\n       die für $x$ nahe 1 groß ist: Der Logarithmus einer Zahl nahe eins ist ein schlecht konditioniertes Problem. Die Kondition ist eine Eigenschaft des <em>Problems</em>, die <em>Stabilität</em> dagegen eine Eigenschaft\n       des <em>Algorithmus</em> — ein stabiler Algorithmus vergrößert die Rundungsfehler nicht stärker, als es der Kondition des Problems entspricht.</p>",
    "<p><strong>Auslöschung bei der Subtraktion.</strong> Die Differenz zweier nahe beieinanderliegender Zahlen ist schlecht konditioniert: $\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$, und der Nenner ist klein.\n       Die gemeinsamen führenden Ziffern heben sich bei der Subtraktion auf, und die übrigen Ziffern sind fehlerbehaftet (sogenannte <em>katastrophale Auslöschung</em>). Abhilfe schafft eine algebraische Umformung, die die Subtraktion beseitigt:\n       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>"
   ],
   "examples": [
    {
     "task": "Die Zahl $\\pi$ ersetzen wir durch den Wert $3{,}14$. Bestimmen Sie den absoluten und relativen Fehler sowie die Anzahl der gültigen Ziffern der Näherung.",
     "steps": [
      "$\\Delta=|\\pi-3{,}14|=|3{,}14159\\ldots-3{,}14|\\approx 0{,}00159$.",
      "$\\delta=\\frac{0{,}00159}{3{,}14159}\\approx 0{,}000507=0{,}0507\\,\\%$.",
      "Da $0{,}00159\\le 0{,}005=\\frac{1}{2}\\cdot 10^{-2}$, sind zwei Nachkommastellen gültig. Die Näherung $3{,}14$ hat <strong>3 gültige Ziffern</strong>."
     ]
    },
    {
     "task": "Die kleinere Lösung der Gleichung $x^2-200x+1=0$ ist $x=100-\\sqrt{9999}$. Berechnen Sie sie in einer Arithmetik mit 4 gültigen Ziffern direkt und nach einer Umformung, die die Subtraktion beseitigt.",
     "steps": [
      "Auf 4 gültige Ziffern ist $\\sqrt{9999}=99{,}99499\\ldots\\approx 100{,}0$. Die direkte Rechnung ergibt $100-100{,}0=0$ — alle Ziffern sind verloren, der relative Fehler beträgt 100 %.",
      "Wir erweitern den Ausdruck: $100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$.",
      "Jetzt ist $\\frac{1}{100+100{,}0}=\\frac{1}{200{,}0}=0{,}005000$. Der exakte Wert ist $0{,}0050001250\\ldots$, das Ergebnis hat also alle 4 Ziffern gültig.",
      "Das Problem selbst ist gut konditioniert, schlecht war nur der Algorithmus (Subtraktion nahe beieinanderliegender Zahlen)."
     ]
    }
   ]
  },
  "v7-rovnice": {
   "title": "Numerische Lösung von Gleichungen",
   "summary": "Separation einer Nullstelle, Bisektionsverfahren, Fixpunktiteration, Newton-Verfahren und Sekantenverfahren, Konvergenzordnung und Abbruchkriterien.",
   "theory": [
    "<p>Wir suchen eine Nullstelle $\\xi$ der Gleichung $f(x)=0$, die sich nicht durch eine Formel ausdrücken lässt (zum Beispiel $x=\\cos x$ oder $x^5-x-1=0$). Zuerst <strong>separieren</strong> wir die Nullstelle — wir finden ein Intervall\n       $[a, b]$, in dem genau eine Nullstelle liegt. Nach dem <strong>Satz von Bolzano</strong> (Nullstellensatz) hat eine stetige Funktion mit $f(a)\\,f(b)&lt;0$ im Intervall $(a, b)$ mindestens eine Nullstelle; wechselt zusätzlich\n       $f'$ auf $[a, b]$ das Vorzeichen nicht, so ist die Nullstelle eindeutig.</p>\n       <p><strong>Bisektionsverfahren (Intervallhalbierung).</strong> Wir berechnen den Mittelpunkt $c=\\frac{a+b}{2}$. Ist $f(a)\\,f(c)&lt;0$, fahren wir mit $[a, c]$ fort, sonst mit $[c, b]$. Jeder Schritt\n       halbiert das Intervall, nach $n$ Schritten hat es die Länge $\\frac{b-a}{2^n}$. Um eine Länge von höchstens $\\varepsilon$ zu erreichen, braucht man $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ Schritte.\n       Das Verfahren ist langsam, konvergiert aber <em>immer</em> und benötigt nur die Vorzeichen der Funktionswerte.</p>",
    "<p><strong>Fixpunktiteration.</strong> Wir schreiben die Gleichung in der Form $x=g(x)$ und berechnen $x_{k+1}=g(x_k)$. Bildet $g$ das Intervall $I$ in sich ab und gilt\n       $|g'(x)|\\le q&lt;1$ auf $I$, so hat $g$ in $I$ genau einen <em>Fixpunkt</em> $\\xi$, und die Folge konvergiert für jeden Startwert $x_0\\in I$ gegen ihn (banachscher Fixpunktsatz).\n       Es gelten die Abschätzungen\n       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$\n       Die Wahl der Form ist wichtig: Die Gleichung $x^2-2=0$ kann man als $x=\\frac{2}{x}$ schreiben (die Iterationen oszillieren, $|g'(\\sqrt{2})|=1$) oder als $x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$ (sehr schnelle Konvergenz).</p>",
    "<p><strong>Newton-Verfahren (Tangentenverfahren).</strong> Wir ersetzen den Graphen der Funktion im Punkt $x_k$ durch die Tangente und nehmen als nächste Näherung ihren Schnittpunkt mit der $x$-Achse:\n       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$\n       Bei einer einfachen Nullstelle ($f'(\\xi)\\neq 0$) und einem Startwert nahe genug an der Nullstelle konvergiert es <strong>quadratisch</strong>: $|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$,\n       die Anzahl der gültigen Ziffern verdoppelt sich in jedem Schritt ungefähr. <em>Fourier-Bedingung:</em> Wechseln $f'$ und $f''$ auf $[a, b]$ das Vorzeichen nicht und starten wir in dem Randpunkt,\n       in dem $f(x_0)\\,f''(x_0)&gt;0$ gilt, so konvergieren die Iterationen monoton. Bei einem schlechten Startwert kann das Verfahren weit wegspringen; bei einer mehrfachen Nullstelle konvergiert es nur linear.</p>",
    {
     "fig": "v7-newton",
     "caption": "Newton-Verfahren für $f(x)=x^2-2$: Im Punkt $[x_k; f(x_k)]$ legen wir die Tangente an, und ihr Schnittpunkt mit der $x$-Achse ist $x_{k+1}$. Schon nach drei Schritten hat die Näherung von $\\sqrt{2}$ einen Fehler in der Größenordnung $10^{-6}$ bis $10^{-12}$."
    },
    "<p>Das <strong>Sekantenverfahren</strong> ersetzt die Ableitung durch einen Differenzenquotienten aus den letzten beiden Näherungen:\n       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$\n       Es benötigt keine Ableitung und konvergiert mit der Ordnung $\\frac{1+\\sqrt{5}}{2}\\approx 1{,}618$. Legen wir die Sekante stets durch Punkte mit entgegengesetzten Vorzeichen (wie bei der Bisektion),\n       so erhalten wir die <em>Regula falsi</em>, die immer konvergiert, aber gewöhnlich nur linear.</p>\n       <p><strong>Konvergenzordnung.</strong> Ein Verfahren hat die Ordnung $p$, wenn $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$; für $p=1$ (lineare Konvergenz) muss $C&lt;1$ sein. Bisektion und Fixpunktiteration\n       haben die Ordnung 1, das Sekantenverfahren die Ordnung $1{,}618$, das Newton-Verfahren die Ordnung 2. <strong>Abbruchkriterien:</strong> $|x_{k+1}-x_k|&lt;\\varepsilon$, relativ $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$,\n       $|f(x_k)|&lt;\\delta$ und immer auch eine maximale Anzahl von Iterationen. Ein kleines $|f(x_k)|$ allein garantiert keine Nähe zur Nullstelle, wenn die Funktion sehr flach ist.</p>"
   ],
   "examples": [
    {
     "task": "Finden Sie mit dem Newton-Verfahren $\\sqrt{5}$ als Nullstelle der Funktion $f(x)=x^2-5$, beginnen Sie im Punkt $x_0=2$ und führen Sie zwei Schritte aus.",
     "steps": [
      "$f'(x)=2x$, also $x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$.",
      "$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2{,}25$.",
      "$x_2=2{,}25-\\frac{2{,}25^2-5}{4{,}5}=2{,}25-\\frac{0{,}0625}{4{,}5}\\approx 2{,}236111$.",
      "Exakt ist $\\sqrt{5}=2{,}236068\\ldots$: Der Fehler sank von $0{,}014$ auf $0{,}00004$, was der quadratischen Konvergenz entspricht."
     ]
    },
    {
     "task": "Lokalisieren Sie mit dem Bisektionsverfahren die Nullstelle der Gleichung $x^3-x-1=0$ im Intervall $[1; 2]$ (drei Schritte). Wie viele Schritte wären für ein Intervall der Länge höchstens $10^{-6}$ nötig?",
     "steps": [
      "$f(1)=-1&lt;0$, $f(2)=5&gt;0$, die Nullstelle liegt in $[1; 2]$.",
      "$f(1{,}5)=0{,}875&gt;0$ → $[1; 1{,}5]$. $f(1{,}25)\\approx-0{,}297&lt;0$ → $[1{,}25; 1{,}5]$. $f(1{,}375)\\approx 0{,}225&gt;0$ → $[1{,}25; 1{,}375]$.",
      "Nach $n$ Schritten hat das Intervall die Länge $2^{-n}$. Die Bedingung $2^{-n}\\le 10^{-6}$ ergibt $n\\ge 6\\log_2 10\\approx 19{,}93$, also <strong>20 Schritte</strong>.",
      "Die Nullstelle ist $\\xi\\approx 1{,}3247$; das Newton-Verfahren würde dieselbe Genauigkeit in 4 bis 5 Schritten erreichen."
     ]
    }
   ]
  },
  "v7-interpolacia": {
   "title": "Interpolation und Approximation",
   "summary": "Interpolationspolynom in Lagrange- und Newton-Form, dividierte Differenzen, Interpolationsfehler, Runge-Phänomen und Methode der kleinsten Quadrate.",
   "theory": [
    "<p><strong>Interpolationsaufgabe.</strong> Gegeben sind paarweise verschiedene <em>Stützstellen</em> $x_0, x_1, \\dots, x_n$ und Werte $y_0, y_1, \\dots, y_n$ (zum Beispiel gemessen oder aus einer Tabelle).\n       Gesucht ist ein Polynom $P_n$ vom Grad höchstens $n$, für das $P_n(x_i)=y_i$ für alle $i$ gilt. Ein solches Polynom existiert und ist <strong>eindeutig</strong>: Die Bedingungen bilden ein System\n       mit der Vandermonde-Matrix, deren Determinante $\\prod_{i&lt;j}(x_j-x_i)$ von null verschieden ist. Das Polynom verwenden wir dann zur Berechnung von Werten zwischen den Stützstellen.</p>",
    "<p><strong>Lagrange-Form.</strong> Für jede Stützstelle konstruieren wir ein Basispolynom, das dort gleich 1 und an den übrigen Stützstellen gleich 0 ist:\n       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$\n       Für zwei Stützstellen erhalten wir die <em>lineare Interpolation</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$. Die Lagrange-Form ist übersichtlich, aber beim Hinzufügen einer Stützstelle muss alles neu berechnet werden.</p>",
    "<p><strong>Newton-Form und dividierte Differenzen.</strong> Die dividierten Differenzen definieren wir rekursiv:\n       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$\n       Dann gilt\n       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$\n       Die Differenzen werden in einem Dreiecksschema berechnet, und das Hinzufügen einer weiteren Stützstelle bedeutet nur das Hinzufügen eines Terms. Den Wert des Polynoms berechnen wir sparsam mit dem Horner-Schema.</p>",
    "<p><strong>Interpolationsfehler.</strong> Hat $f$ eine stetige Ableitung der Ordnung $n+1$, so gibt es für jedes $x$ ein $\\xi$ im kleinsten Intervall, das $x$ und die Stützstellen enthält, mit\n       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$\n       Daraus folgt die Abschätzung $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$, wobei $M_{n+1}=\\max|f^{(n+1)}|$. Bei linearer Interpolation mit Schrittweite $h$ ist der Fehler höchstens $\\frac{M_2h^2}{8}$.\n       Eine Erhöhung des Grades bei gleichabständigen Stützstellen muss nicht helfen: Bei der Funktion $\\frac{1}{1+25x^2}$ auf $[-1; 1]$ oszilliert das Polynom an den Rändern stark (<strong>Runge-Phänomen</strong>).\n       Abhilfe schaffen zu den Rändern hin verdichtete Tschebyschow-Knoten oder stückweise polynomiale Interpolation (Splines).</p>",
    "<p><strong>Methode der kleinsten Quadrate.</strong> Messdaten enthalten Fehler, daher wollen wir durch sie kein Polynom hohen Grades legen, sondern eine einfache Funktion, die sie\n       <em>approximiert</em>. Die Gerade $y=ax+b$ wählen wir so, dass die Summe der quadrierten Abweichungen $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$ minimal ist. Aus den Bedingungen\n       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$ erhalten wir die <strong>Normalgleichungen</strong>\n       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i,$$\n       mit der Lösung $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$, $b=\\frac{\\sum y_i-a\\sum x_i}{n}$. Die Gerade geht durch den Schwerpunkt der Daten $[\\bar{x}; \\bar{y}]$.</p>"
   ],
   "examples": [
    {
     "task": "Finden Sie den Wert des Interpolationspolynoms für die Punkte $[0; 1]$, $[1; 3]$, $[3; 2]$ an der Stelle $x=2$ sowohl in der Lagrange- als auch in der Newton-Form.",
     "steps": [
      "Lagrange: $\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$, $\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$, $\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$.",
      "$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3{,}333$.",
      "Newton: $f[0, 1]=\\frac{3-1}{1}=2$, $f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$, $f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$.",
      "$P(x)=1+2x-\\frac{5}{6}x(x-1)$, also $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$ — dasselbe Polynom, andere Schreibweise."
     ]
    },
    {
     "task": "Legen Sie mit der Methode der kleinsten Quadrate eine Gerade durch die Punkte $[0; 1]$, $[1; 2]$, $[2; 4]$, $[3; 4]$.",
     "steps": [
      "$n=4$, $\\sum x_i=6$, $\\sum y_i=11$, $\\sum x_i^2=14$, $\\sum x_iy_i=0+2+8+12=22$.",
      "$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1{,}1$.",
      "$b=\\frac{11-1{,}1\\cdot 6}{4}=\\frac{4{,}4}{4}=1{,}1$.",
      "Die gesuchte Gerade ist $y=1{,}1x+1{,}1$; sie geht durch den Schwerpunkt $[1{,}5; 2{,}75]$."
     ]
    }
   ]
  },
  "v7-derivacia-integracia": {
   "title": "Numerische Differentiation und Integration",
   "summary": "Vorwärts- und zentraler Differenzenquotient, Wahl der Schrittweite, Mittelpunkt-, Trapez- und Simpsonregel, Genauigkeitsordnung und Fehlerschätzung.",
   "theory": [
    "<p><strong>Numerische Differentiation.</strong> Aus der Taylor-Entwicklung $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$ erhalten wir die Formeln\n       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{Vorwärtsdifferenz, Fehler }-\\frac{h}{2}f''(\\xi)},\\qquad\n       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{zentrale Differenz, Fehler }-\\frac{h^2}{6}f'''(\\xi)}.$$\n       Der Vorwärtsdifferenzenquotient (ebenso der Rückwärtsdifferenzenquotient $\\frac{f(x)-f(x-h)}{h}$) hat die <strong>Genauigkeitsordnung 1</strong>, der zentrale die <strong>Ordnung 2</strong>: Bei halber Schrittweite wird der Fehler etwa\n       um die Hälfte bzw. auf ein Viertel kleiner. Für die zweite Ableitung dient $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$ mit dem Fehler $O(h^2)$.</p>",
    "<p><strong>Wahl der Schrittweite.</strong> Die Schrittweite lässt sich nicht beliebig verkleinern. Im Zähler subtrahieren wir zwei nahe beieinanderliegende Werte, sodass der Rundungsfehler in der Größenordnung $\\frac{\\varepsilon_M|f(x)|}{h}$ liegt\n       und mit fallendem $h$ <em>wächst</em>. Der Gesamtfehler des Vorwärtsdifferenzenquotienten $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$ ist etwa bei $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$ am kleinsten,\n       für den zentralen Differenzenquotienten bei $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$. Numerisches Differenzieren ist also ein schlecht konditioniertes Problem, im Gegensatz zum Integrieren.</p>",
    "<p><strong>Quadraturformeln.</strong> Das Intervall $[a, b]$ teilen wir in $n$ Teilintervalle mit der Schrittweite $h=\\frac{b-a}{n}$, die Stützstellen sind $x_i=a+ih$ und $f_i=f(x_i)$. Auf jedem Teilintervall ersetzen wir\n       die Funktion durch ein Polynom und integrieren dieses exakt:</p>\n       <ul><li><strong>Rechteckregel (Mittelpunktregel)</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$, Fehler $\\frac{(b-a)h^2}{24}f''(\\xi)$;</li>\n       <li><strong>Trapezregel</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$, Fehler $-\\frac{(b-a)h^2}{12}f''(\\xi)$;</li>\n       <li><strong>Simpsonregel</strong> ($n$ gerade, auf Paaren von Teilintervallen eine Parabel) $S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$, Fehler $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$.</li></ul>",
    {
     "fig": "v7-lichobeznik",
     "caption": "Trapezregel für $f(x)=2+\\sin 1{,}5x+0{,}3x$ auf $[0; 4]$. Erhöhe die Anzahl der Teilintervalle und beobachte, wie der Fehler etwa mit dem Quadrat der Schrittweite sinkt; bei geradem $n$ wird auch das Ergebnis der Simpsonregel angezeigt."
    },
    "<p><strong>Genauigkeitsordnung.</strong> Der Fehler einer zusammengesetzten Formel verhält sich wie $Ch^p$. Mittelpunkt- und Trapezregel haben $p=2$ (halbe Schrittweite → viermal kleinerer Fehler),\n       die Simpsonregel $p=4$ (sechzehnmal kleiner) und ist exakt für Polynome bis einschließlich dritten Grades. Die Mittelpunktregel hat etwa den halben Fehler mit entgegengesetztem Vorzeichen wie die Trapezregel,\n       daher gilt $S_{2n}=\\frac{2M_n+T_n}{3}$. Aus zwei Rechnungen mit den Schrittweiten $h$ und $\\frac{h}{2}$ schätzen wir den Fehler mit der <strong>Runge-Regel</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$,\n       und das verbesserte Ergebnis $\\frac{4T_{2n}-T_n}{3}$ ist genau die Simpsonformel (Richardson-Extrapolation, auf ihr beruht das Romberg-Verfahren).</p>"
   ],
   "examples": [
    {
     "task": "Schätzen Sie $f'(0)$ für $f(x)=e^x$ mit der Schrittweite $h=0{,}1$ mit dem Vorwärts- und dem zentralen Differenzenquotienten ab und vergleichen Sie die Fehler.",
     "steps": [
      "Vorwärts: $\\frac{e^{0{,}1}-1}{0{,}1}=\\frac{0{,}105171}{0{,}1}\\approx 1{,}051709$, Fehler $\\approx 0{,}0517$.",
      "Zentral: $\\frac{e^{0{,}1}-e^{-0{,}1}}{0{,}2}\\approx\\frac{1{,}105171-0{,}904837}{0{,}2}\\approx 1{,}001668$, Fehler $\\approx 0{,}0017$.",
      "Exakt ist $f'(0)=1$. Die Fehlerschätzungen $\\frac{h}{2}f''=0{,}05$ und $\\frac{h^2}{6}f'''\\approx 0{,}0017$ stimmen gut mit dem Ergebnis überein."
     ]
    },
    {
     "task": "Berechnen Sie $\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0{,}785398$ mit der Trapez- und der Simpsonregel mit $n=2$.",
     "steps": [
      "$h=0{,}5$, $f(0)=1$, $f(0{,}5)=0{,}8$, $f(1)=0{,}5$.",
      "$T_2=\\frac{0{,}5}{2}(1+2\\cdot 0{,}8+0{,}5)=0{,}25\\cdot 3{,}1=0{,}775$, Fehler $\\approx 0{,}0104$.",
      "$S_2=\\frac{0{,}5}{3}(1+4\\cdot 0{,}8+0{,}5)=\\frac{0{,}5\\cdot 4{,}7}{3}\\approx 0{,}783333$, Fehler $\\approx 0{,}0021$.",
      "Bei gleicher Anzahl von Funktionsauswertungen ist die Simpsonregel wesentlich genauer."
     ]
    }
   ]
  },
  "v7-ode": {
   "title": "Numerische Lösung von Differentialgleichungen",
   "summary": "Anfangswertproblem, Euler-Verfahren, Heun-Verfahren (verbessertes Euler-Verfahren), klassisches Runge-Kutta-Verfahren 4. Ordnung, lokaler und globaler Fehler, Wahl der Schrittweite und Stabilität.",
   "theory": [
    "<p>Wir lösen das <strong>Anfangswertproblem</strong> (Cauchy-Problem) $y'=f(x, y)$, $y(x_0)=y_0$, das sich meist nicht analytisch lösen lässt. Wir wählen eine <strong>Schrittweite</strong> $h$ und die Stützstellen $x_k=x_0+kh$ und berechnen\n       schrittweise Näherungen $y_k\\approx y(x_k)$. Einschrittverfahren berechnen $y_{k+1}$ nur aus dem Paar $[x_k; y_k]$. Der <strong>lokale Fehler</strong> ist der Fehler eines Schritts\n       (unter der Annahme eines exakten $y_k$), der <strong>globale Fehler</strong> $y(x_k)-y_k$ ist der angesammelte Fehler an der Stützstelle. Ist der lokale Fehler $O(h^{p+1})$, so ist nach $\\frac{X-x_0}{h}$ Schritten\n       der globale Fehler $O(h^p)$, und wir sagen, das Verfahren hat die <strong>Ordnung</strong> $p$.</p>",
    "<p><strong>Euler-Verfahren.</strong> Auf dem Teilintervall $[x_k, x_{k+1}]$ ersetzen wir die Lösung durch die Tangente mit der Steigung $f(x_k, y_k)$ aus dem Richtungsfeld:\n       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$\n       Es ist das einfachste Verfahren erster Ordnung: lokaler Fehler $\\frac{h^2}{2}y''(\\xi)$, globaler $O(h)$. Halbe Schrittweite halbiert den Fehler nur etwa, daher wird es in der Praxis\n       eher als Ausgangspunkt für genauere Verfahren verwendet.</p>",
    {
     "fig": "v7-euler",
     "caption": "Das Problem $y'=y$, $y(0)=1$ auf $[0; 2]$ mit der exakten Lösung $y=e^x$ (schwarze Kurve). Das Euler-Verfahren (blau) bleibt systematisch zurück, das Heun-Verfahren (grün) ist bei gleicher Schrittweite viel genauer. Erhöhe die Anzahl der Schritte und vergleiche, wie schnell die Fehler sinken."
    },
    "<p>Das <strong>Heun-Verfahren (verbessertes Euler-Verfahren)</strong> ist ein Prädiktor-Korrektor-Verfahren: Mit einem Euler-Schritt schätzen wir den Wert am Ende des Teilintervalls und mitteln dann die Steigung:\n       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$\n       Es entspricht der Trapezregel und hat die <strong>Ordnung 2</strong>. Ähnlich ist das <em>modifizierte Euler-Verfahren (Mittelpunktverfahren)</em> $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$.</p>\n       <p>Das <strong>klassische Runge-Kutta-Verfahren 4. Ordnung (RK4)</strong> wertet in jedem Schritt vier Steigungen aus\n       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$\n       und nimmt ihr gewichtetes Mittel $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$ — ein Gegenstück zur Simpsonregel. Bei halber Schrittweite wird der Fehler etwa 16-mal kleiner.</p>",
    "<p><strong>Schrittweite und Fehler.</strong> Für ein Verfahren der Ordnung $p$ ist der globale Fehler etwa $Ch^p$. Aus zwei Rechnungen mit den Schrittweiten $h$ und $\\frac{h}{2}$ schätzen wir ihn mit der <strong>Runge-Regel</strong>\n       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$. Moderne Programme passen die Schrittweite an (adaptive Schrittweite, zum Beispiel Paare von Runge-Kutta-Verfahren verschiedener Ordnung).\n       Eine kleinere Schrittweite bedeutet nicht immer ein besseres Ergebnis — es wachsen die Anzahl der Operationen und die Rundungsfehler.</p>\n       <p><strong>Stabilität.</strong> Für die Testgleichung $y'=\\lambda y$ mit $\\lambda&lt;0$ liefert das Euler-Verfahren $y_{k+1}=(1+h\\lambda)y_k$; die numerische Lösung fällt nur bei\n       $|1+h\\lambda|&lt;1$ gegen null, also für $h&lt;\\frac{2}{|\\lambda|}$. Bei größerer Schrittweite oszilliert und wächst sie, obwohl die exakte Lösung schnell fällt. Gleichungen mit sehr unterschiedlichen Zeitskalen\n       (<em>steife</em> Gleichungen) löst man daher mit impliziten Verfahren, zum Beispiel mit dem impliziten Euler-Verfahren $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$, das für jedes $h&gt;0$ stabil ist.</p>"
   ],
   "examples": [
    {
     "task": "Lösen Sie das Problem $y'=y$, $y(0)=1$ mit der Schrittweite $h=0{,}5$ mit dem Euler- und dem Heun-Verfahren bis $x=1$ und vergleichen Sie mit $e\\approx 2{,}71828$.",
     "steps": [
      "Euler: $y_1=1+0{,}5\\cdot 1=1{,}5$, $y_2=1{,}5+0{,}5\\cdot 1{,}5=2{,}25$, Fehler $\\approx 0{,}468$.",
      "Heun, 1. Schritt: Prädiktor $\\tilde{y}_1=1{,}5$, $y_1=1+0{,}25\\,(1+1{,}5)=1{,}625$.",
      "Heun, 2. Schritt: $\\tilde{y}_2=1{,}625+0{,}5\\cdot 1{,}625=2{,}4375$, $y_2=1{,}625+0{,}25\\,(1{,}625+2{,}4375)=2{,}640625$, Fehler $\\approx 0{,}078$.",
      "Bei gleicher Schrittweite ist das Heun-Verfahren etwa sechsmal genauer."
     ]
    },
    {
     "task": "Führen Sie einen Schritt des RK4-Verfahrens mit der Schrittweite $h=0{,}1$ für das Problem $y'=x+y$, $y(0)=1$ aus. Die exakte Lösung ist $y=2e^x-x-1$.",
     "steps": [
      "$k_1=f(0; 1)=1$, $k_2=f(0{,}05;\\ 1+0{,}05\\cdot 1)=0{,}05+1{,}05=1{,}1$.",
      "$k_3=f(0{,}05;\\ 1+0{,}05\\cdot 1{,}1)=0{,}05+1{,}055=1{,}105$, $k_4=f(0{,}1;\\ 1+0{,}1\\cdot 1{,}105)=0{,}1+1{,}1105=1{,}2105$.",
      "$y_1=1+\\frac{0{,}1}{6}(1+2{,}2+2{,}21+1{,}2105)=1+\\frac{0{,}66205}{6}\\approx 1{,}1103417$.",
      "Exakt ist $y(0{,}1)=2e^{0{,}1}-1{,}1\\approx 1{,}1103418$, der Fehler beträgt etwa $10^{-7}$."
     ]
    }
   ]
  },
  "v7-matice": {
   "title": "Algorithmen für Matrizen",
   "summary": "Gauß-Elimination mit Pivotsuche, LR-Zerlegung, Aufwand direkter Verfahren, Jacobi- und Gauß-Seidel-Verfahren, Potenzmethode für den betragsgrößten Eigenwert.",
   "theory": [
    "<p>Die <strong>Gauß-Elimination</strong> löst das System $Ax=b$ mit einer regulären $n\\times n$-Matrix in zwei Phasen. In der <em>Vorwärtselimination</em> subtrahieren wir für $k=1, \\dots, n-1$\n       von den Zeilen $i&gt;k$ ein Vielfaches der $k$-ten Zeile mit dem <strong>Multiplikator</strong> $l_{ik}=\\frac{a_{ik}}{a_{kk}}$, sodass unterhalb der Diagonalen Nullen entstehen und die Matrix\n       in eine obere Dreiecksmatrix übergeht. Durch <em>Rückwärtseinsetzen</em> berechnen wir $x_n, x_{n-1}, \\dots, x_1$ von unten nach oben.</p>\n       <p>Ist das <em>Pivotelement</em> $a_{kk}$ null oder sehr klein, so sind die Multiplikatoren riesig, und die Rundungsfehler wachsen. Deshalb verwendet man\n       die <strong>Spaltenpivotsuche</strong>: Vor dem $k$-ten Schritt vertauschen wir die Zeilen so, dass $|a_{kk}|$ in der $k$-ten Spalte auf und unter der Diagonalen am größten ist. Dann gilt $|l_{ik}|\\le 1$.</p>",
    "<p><strong>LR-Zerlegung</strong> (LU-Zerlegung). Die Multiplikatoren aus der Vorwärtselimination bilden eine untere Dreiecksmatrix $L$ mit Einsen auf der Diagonalen, und die entstandene obere Dreiecksmatrix ist $U$; es gilt\n       $A=LU$ (mit Pivotsuche $PA=LU$, wobei $P$ eine Permutationsmatrix ist). Das System lösen wir dann über zwei Dreieckssysteme:\n       $$Ly=b\\ \\text{(Vorwärtseinsetzen)},\\qquad Ux=y\\ \\text{(Rückwärtseinsetzen)}.$$\n       Die Zerlegung lohnt sich, wenn wir mehrere Systeme mit derselben Matrix und verschiedenen rechten Seiten lösen. Wir erhalten auch die Determinante $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$.\n       Für symmetrische positiv definite Matrizen gibt es die sparsamere <em>Cholesky-Zerlegung</em> $A=LL^{T}$.</p>",
    "<p><strong>Aufwand.</strong> Die Vorwärtselimination der Gauß-Elimination kostet etwa $\\frac{2}{3}n^3$ arithmetische Operationen, jedes Dreieckseinsetzen etwa $n^2$. Bei doppelter\n       Dimension wird die Eliminationszeit etwa achtmal größer. Die inverse Matrix (etwa $2n^3$ Operationen) muss man zum Lösen eines Systems nicht berechnen. Bei <em>Bandmatrizen</em> mit Bandbreite $w$ sinken\n       die Kosten auf $O(nw^2)$, bei Tridiagonalmatrizen auf $O(n)$. Bei großen <em>dünn besetzten</em> Matrizen (die meisten Elemente sind null) füllt die Elimination Nullen auf, daher kommen iterative Verfahren zum Einsatz.</p>",
    "<p><strong>Iterative Verfahren.</strong> Aus der $i$-ten Gleichung drücken wir $x_i$ aus und setzen die vorherige Näherung ein. Das <strong>Jacobi-Verfahren</strong> verwendet nur Werte aus dem letzten Schritt,\n       das <strong>Gauß-Seidel-Verfahren</strong> nutzt sofort die bereits neu berechneten Komponenten:\n       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$\n       Beide Verfahren konvergieren für jeden Startwert, wenn die Matrix <strong>strikt diagonaldominant</strong> ist ($|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$ für jede Zeile); das Gauß-Seidel-Verfahren auch für eine symmetrische\n       positiv definite Matrix. Ein Schritt kostet größenordnungsmäßig so viele Operationen, wie die Matrix von null verschiedene Elemente hat. Wir brechen ab, wenn $\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$ oder wenn das Residuum $\\|b-Ax^{(k)}\\|$ klein ist.</p>",
    "<p><strong>Potenzmethode.</strong> Die Matrix $A$ habe die Eigenwerte $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$ (das dominante $\\lambda_1$ ist das einzige mit dem größten Betrag).\n       Die wiederholte Multiplikation $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$ verstärkt die Komponente in Richtung des Eigenvektors $v_1$, sodass sich $x^{(k)}$ mit der Rate $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$ an $\\pm v_1$ annähert.\n       Den Eigenwert schätzen wir mit dem <strong>Rayleigh-Quotienten</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$ oder mit dem Quotienten entsprechender Komponenten $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$.\n       Den betragskleinsten Eigenwert findet die <em>inverse Potenzmethode</em> (Potenzmethode für $A^{-1}$, in jedem Schritt wird ein System mit der LR-Zerlegung gelöst). Auf diesem Prinzip\n       beruht auch die Bewertung von Webseiten mit PageRank.</p>"
   ],
   "examples": [
    {
     "task": "Finden Sie die LR-Zerlegung der Matrix $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$ und lösen Sie $Ax=b$ für $b=(4;\\ 10;\\ 24)^{T}$.",
     "steps": [
      "1. Schritt: $l_{21}=\\frac{4}{2}=2$, $l_{31}=\\frac{8}{2}=4$; die Zeilen werden zu $(0, 1, 1)$ und $(0, 3, 5)$.",
      "2. Schritt: $l_{32}=\\frac{3}{1}=3$; dritte Zeile $(0, 0, 2)$. Also $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$, $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$.",
      "$Ly=b$: $y_1=4$, $y_2=10-2\\cdot 4=2$, $y_3=24-4\\cdot 4-3\\cdot 2=2$.",
      "$Ux=y$: $x_3=\\frac{2}{2}=1$, $x_2=2-1=1$, $x_1=\\frac{4-1-1}{2}=1$. Lösung $x=(1;\\ 1;\\ 1)^{T}$, außerdem $\\det A=2\\cdot 1\\cdot 2=4$."
     ]
    },
    {
     "task": "Lösen Sie das System $4x_1-x_2=7$, $x_1+3x_2=5$ (Lösung $x=(2;\\ 1)$) ausgehend vom Punkt $(0;\\ 0)$ mit je zwei Schritten des Jacobi- und des Gauß-Seidel-Verfahrens.",
     "steps": [
      "Iterationsvorschriften: $x_1=\\frac{7+x_2}{4}$, $x_2=\\frac{5-x_1}{3}$. Die Matrix ist diagonaldominant ($4&gt;1$, $3&gt;1$), beide Verfahren konvergieren.",
      "Jacobi: $x^{(1)}=(1{,}75;\\ 1{,}6667)$, $x^{(2)}=\\left(\\frac{7+1{,}6667}{4};\\ \\frac{5-1{,}75}{3}\\right)=(2{,}1667;\\ 1{,}0833)$.",
      "Gauß-Seidel: $x_1^{(1)}=1{,}75$, sofort $x_2^{(1)}=\\frac{5-1{,}75}{3}=1{,}0833$; $x_1^{(2)}=\\frac{7+1{,}0833}{4}=2{,}0208$, $x_2^{(2)}=\\frac{5-2{,}0208}{3}=0{,}9931$.",
      "Nach zwei Schritten hat das Gauß-Seidel-Verfahren einen Fehler von etwa $0{,}02$, das Jacobi-Verfahren von etwa $0{,}17$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Presná hodnota je ${@5}$.)": "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Der exakte Wert ist ${@5}$.)",
  "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².": "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².",
  "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, teda asi ${@6}\\,\\%$.": "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Bei einer Potenz wird der relative Fehler mit dem Exponenten multipliziert: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, also etwa ${@6}\\,\\%$.",
  "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.": "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. In der Nähe von $\\pi$ ist der Sinus klein, und die Aufgabe ist schlecht konditioniert.",
  "$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{{@0}}\\approx {@1}$.": "$f''(x)=e^{x}$ ist wachsend, daher $M_2=e^{{@0}}\\approx {@1}$.",
  "$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Odčítanie blízkych čísel je zle podmienené.": "$f'(x)=1$, also $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Die Subtraktion naheliegender Zahlen ist schlecht konditioniert.",
  "$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Presne $\\sqrt{{@5}}\\approx {@6}$.)": "$f'(x)=2x$, also $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Exakt $\\sqrt{{@5}}\\approx {@6}$.)",
  "$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}": "$f'(x)=\\frac{1}{x}$, also $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Exakt ist $f'({@8})\\approx {@9}$, der Fehler beträgt etwa ${@10}$.",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Exakt ist $f'({@8})\\approx {@9}$, der Fehler beträgt etwa ${@10}$.",
  "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.": "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.",
  "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Presne $\\sqrt{{@6}}\\approx {@7}$.)": "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Exakt $\\sqrt{{@6}}\\approx {@7}$.)",
  "$f(x_0, y_0)={@0}$, prediktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.": "$f(x_0, y_0)={@0}$, Prädiktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.",
  "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Výsledný interval je $[{@5};\\ {@6}]$.": "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Das resultierende Intervall ist $[{@5};\\ {@6}]$.",
  "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.": "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.",
  "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Presná hodnota je ${@6}$, chyba asi ${@7}$.": "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Der exakte Wert ist ${@6}$, der Fehler etwa ${@7}$.",
  "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.": "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.",
  "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.": "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.",
  "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleighov podiel: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Presné dominantné vlastné číslo je $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.": "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleigh-Quotient: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Der exakte dominante Eigenwert ist $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.",
  "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)": "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Wir rechnen im Bogenmaß und runden Zwischenergebnisse nicht.)",
  "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.": "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.",
  "${@0}$, teda $M_2=1$.": "${@0}$, also $M_2=1$.",
  "${@0}\\approx {@1}$, absolútna chyba $\\Delta\\approx {@2}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, teda približne ${@7}\\,\\%$.": "${@0}\\approx {@1}$, absoluter Fehler $\\Delta\\approx {@2}$. Relativer Fehler $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, also etwa ${@7}\\,\\%$.",
  "${@0}\\approx {@1}$, teda $\\Delta=|{@2}-{@3}|\\approx {@4}$.": "${@0}\\approx {@1}$, also $\\Delta=|{@2}-{@3}|\\approx {@4}$.",
  "(tu len $f_1$)": "(hier nur $f_1$)",
  ", ale ${@0}&gt;{@1}$": ", aber ${@0}&gt;{@1}$",
  "Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).": "Der absolute Fehler ist $|x-\\tilde{x}|$. Nimm den Wert der Konstanten mit ausreichend vielen Ziffern (vom Taschenrechner).",
  "Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.": "Ist der Fehler ungefähr $Ch^p$, so verkleinert eine $k$-fache Verkleinerung der Schrittweite den Fehler um den Faktor $k^p$. Trapez- und Mittelpunktregel haben $p=2$, die Simpsonregel $p=4$.",
  "Aká je hranica absolútnej chyby obsahu? {@0}": "Wie groß ist die Schranke für den absoluten Fehler des Flächeninhalts? {@0}",
  "Aká je relatívna chyba $x^{{@0}}$ v percentách? {@1}": "Wie groß ist der relative Fehler von $x^{{@0}}$ in Prozent? {@1}",
  "Aká je relatívna chyba v percentách? {@0}": "Wie groß ist der relative Fehler in Prozent? {@0}",
  "Aký interval dostaneš po druhom kroku?": "Welches Intervall erhältst du nach dem zweiten Schritt?",
  "Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)": "Welches Intervall erhältst du nach dem ersten Schritt? (trenne die Randpunkte durch Semikolon)",
  "Aký je krok $h$?": "Wie groß ist die Schrittweite $h$?",
  "Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?": "Wie groß ist der Multiplikator $l_{21}$ (das Vielfache der ersten Gleichung, das du von der zweiten abziehst)?",
  "Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?": "Wie groß ist der Multiplikator $l_{32}$ im zweiten Eliminationsschritt?",
  "Aproximácia $\\tilde{x}={@0}$ má absolútnu chybu nanajvýš ${@1}$. Koľko má platných cifier?": "Die Näherung $\\tilde{x}={@0}$ hat einen absoluten Fehler von höchstens ${@1}$. Wie viele gültige Ziffern hat sie?",
  "Centrálna diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.": "Zentraler Differenzenquotient: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Berechne trigonometrische Funktionen im Bogenmaß.",
  "Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.": "Der Fehler ist proportional zu $h^{p}$, er verkleinert sich daher um den Faktor $k^{p}$, nicht $k\\cdot p$.",
  "Chyba lineárnej interpolácie je $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; za $f''(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.": "Der Fehler der linearen Interpolation ist $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; setze für $f''(\\xi)$ das Maximum des Betrags der zweiten Ableitung auf dem Intervall ein.",
  "Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.": "Der Fehler ist nicht zu $h$ selbst proportional, sondern zu $h^{p}$, wobei $p$ die Fehlerordnung des Verfahrens ist.",
  "Chyba sa nezmenšuje úmerne kroku: metóda má rád {@0}, takže chyba je úmerná $h^{{@1}}$.": "Der Fehler verkleinert sich nicht proportional zur Schrittweite: Das Verfahren hat die Ordnung {@0}, der Fehler ist also proportional zu $h^{{@1}}$.",
  "Chyba {@0} je úmerná $h^{{@1}}$ (rád presnosti {@2}). Pri kroku $\\frac{h}{{@3}}$ sa zmenší ${@4}^{{@5}}={@6}$-krát.": "Der Fehler {@0} ist proportional zu $h^{{@1}}$ (Fehlerordnung {@2}). Bei der Schrittweite $\\frac{h}{{@3}}$ verkleinert er sich um den Faktor ${@4}^{{@5}}={@6}$.",
  "Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.": "Die Fehler der Seiten werden nicht multipliziert. Die lineare Abschätzung lautet $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.",
  "Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, preto {@4}. Spolu s {@5} {@6} pred desatinnou čiarkou {@7}.": "Die Ziffer an der Stelle $10^{-j}$ ist gültig, wenn der Fehler $\\frac{1}{2}\\cdot 10^{-j}$ nicht übersteigt. Es gilt ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, daher {@4}. Zusammen mit {@5} {@6} vor dem Komma {@7}.",
  "Derivácia $x^2 - a$ je $2x$, nie $x$.": "Die Ableitung von $x^2 - a$ ist $2x$, nicht $x$.",
  "Dopredná diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.": "Vorderer Differenzenquotient: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Berechne trigonometrische Funktionen im Bogenmaß.",
  "Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.": "Setze $x_0$ in $g$ ein und das Ergebnis wieder in $g$. Runde Zwischenergebnisse nicht.",
  "Dosaď do $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.": "Setze in $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$ ein; die Ableitung von $x-c$ ist 1.",
  "Dosaď do vzorca {@0} diferencie. {@1}": "Setze in die Formel des {@0} Differenzenquotienten ein. {@1}",
  "Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.": "Euler-Schritt: $y_{k+1}=y_k+h\\,f(x_k, y_k)$ mit $x_k=kh$. Führe zwei Schritte durch.",
  "Eulerova a Heunova metóda pre y' = y, y(0) = 1": "Euler- und Heun-Verfahren für y' = y, y(0) = 1",
  "Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.": "Das Euler-Verfahren hat die Ordnung 1, das Heun-Verfahren die Ordnung 2, RK4 die Ordnung 4. Der Fehler ist ungefähr $Ch^p$.",
  "Eulerovou metódou": "mit dem Euler-Verfahren",
  "Funkciu $f(x)={@0}$ nahradíme na intervale $[{@1};\\ {@2}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x={@3}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}": "Die Funktion $f(x)={@0}$ ersetzen wir auf dem Intervall $[{@1};\\ {@2}]$ durch lineare Interpolation. Schätze den Interpolationsfehler im Punkt $x={@3}$ mit der Formel $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$ nach oben ab. {@4}",
  "Gaussova eliminácia sústavy s ${@0}$ neznámymi trvá na istom počítači ${@1}$ s. Približne koľko sekúnd potrvá sústava s ${@2}$ neznámymi (plná matica)?": "Die Gauß-Elimination eines Systems mit ${@0}$ Unbekannten dauert auf einem bestimmten Computer ${@1}$ s. Wie viele Sekunden dauert ungefähr ein System mit ${@2}$ Unbekannten (volle Matrix)?",
  "Gaussovou elimináciou vyrieš sústavu {@0}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.": "Löse mit der Gauß-Elimination das System {@0}. Gib $x_1; x_2; x_3$ durch Semikolon getrennt an.",
  "Gaussovou–Seidelovou": "Gauß-Seidel",
  "Heunovou metódou": "mit dem Heun-Verfahren",
  "Hodnota $x={@0}\\pm {@1}$. Odhadni relatívnu chybu výrazu $x^{{@2}}$ v percentách. {@3}": "Der Wert ist $x={@0}\\pm {@1}$. Schätze den relativen Fehler des Ausdrucks $x^{{@2}}$ in Prozent ab. {@3}",
  "Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.": "Suche das kleinste $n$, für das $2^n$ mindestens so groß ist.",
  "Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.": "Suche die kleinste Größenordnung $10^{-k}$, für die der Fehler $\\frac{1}{2}\\cdot 10^{-k}$ nicht übersteigt.",
  "Interpolačný polynóm 2. stupňa prechádza bodmi {@0}. Vypočítaj jeho hodnotu v bode $x={@1}$. {@2}": "Das Interpolationspolynom 2. Grades geht durch die Punkte {@0}. Berechne seinen Wert an der Stelle $x={@1}$. {@2}",
  "Jacobiho": "Jacobi",
  "Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.": "Der Taschenrechner ist auf Grad eingestellt. Trigonometrische Funktionen berechnen wir in numerischen Verfahren im Bogenmaß.",
  "Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.": "Der Taschenrechner ist auf Grad eingestellt. Beim Ableiten trigonometrischer Funktionen rechnen wir im Bogenmaß.",
  "Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.": "Jeder Bisektionsschritt halbiert das Intervall nur, daher brauchst du den Logarithmus zur Basis 2, nicht 10.",
  "Koreň leží v intervale dĺžky ${@0}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš ${@1}$?": "Die Nullstelle liegt in einem Intervall der Länge ${@0}$. Wie viele Bisektionsschritte sind mindestens nötig, damit das resultierende Intervall höchstens die Länge ${@1}$ hat?",
  "Koľko desatinných miest je platných?": "Wie viele Nachkommastellen sind gültig?",
  "Koľko najmenej krokov bisekcie treba?": "Wie viele Bisektionsschritte sind mindestens nötig?",
  "Koľko platných cifier má aproximácia celkovo?": "Wie viele gültige Ziffern hat die Näherung insgesamt?",
  "Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?": "Um welchen Faktor muss das Intervall verkleinert werden, d. h. wie groß ist $\\frac{b-a}{\\varepsilon}$?",
  "Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.": "Die Randwerte $f_0$ und $f_n$ haben in der Trapezregel das Gewicht $\\frac{h}{2}$, die inneren $h$. Die Randpunkte zählen nur zur Hälfte.",
  "Krok $h$ zmenšíme {@0}. Približne koľkokrát sa zmenší chyba {@1} (pre hladkú funkciu)?": "Wir verkleinern die Schrittweite $h$ {@0}. Um welchen Faktor verkleinert sich ungefähr der Fehler {@1} (für eine glatte Funktion)?",
  "Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.": "Quadratisch wächst nur der Aufwand des Einsetzens in eine Dreiecksmatrix. Die Vorwärtselimination hat die Komplexität $O(n^3)$.",
  "Lagrangeove bázové polynómy v bode ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.": "Lagrange-Basispolynome an der Stelle ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.",
  "Lichobežníková metóda pre funkciu na intervale od 0 do 4": "Trapezregel für eine Funktion auf dem Intervall von 0 bis 4",
  "Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.": "Trapezregel: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.",
  "Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.": "Lineare Interpolation: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.",
  "Metóda má rád {@0}, globálna chyba je približne $Ch^{{@1}}$. Pri kroku $\\frac{h}{{@2}}$ sa zmenší ${@3}^{{@4}}={@5}$-krát: $\\frac{{@6}}{{@7}}={@8}$.": "Das Verfahren hat die Ordnung {@0}, der globale Fehler ist ungefähr $Ch^{{@1}}$. Bei der Schrittweite $\\frac{h}{{@2}}$ verkleinert er sich um den Faktor ${@3}^{{@4}}={@5}$: $\\frac{{@6}}{{@7}}={@8}$.",
  "Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi {@0}. Urči {@1}. {@2}": "Lege mit der Methode der kleinsten Quadrate eine Gerade $y=ax+b$ durch die Punkte {@0}. Bestimme {@1}. {@2}",
  "Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A={@0}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}": "Mit der Potenzmethode schätzen wir den dominanten Eigenwert der symmetrischen Matrix $A={@0}$. Berechne ausgehend von $x^{(0)}=(1;\\ 1)^{T}$ den Vektor $x^{(1)}=Ax^{(0)}$ und den Rayleigh-Quotienten $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}",
  "Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.": "Der Multiplikator $l_{32}$ wird aus der nach dem ersten Eliminationsschritt umgeformten Matrix berechnet, nicht aus dem ursprünglichen Element $a_{32}$.",
  "Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.": "Multiplikator $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (aus der aktuellen, schon umgeformten Matrix); ziehe von der $i$-ten Zeile das $l_{ik}$-Fache der $k$-ten ab. Die resultierende obere Dreiecksmatrix ist $U$.",
  "Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.": "Der Multiplikator ist der Quotient $l_{21} = \\frac{a_{21}}{a_{11}}$; das Element muss durch das Pivotelement geteilt werden.",
  "Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.": "Der Multiplikator ist der Quotient $l_{31} = \\frac{a_{31}}{a_{11}}$; das Element muss durch das Pivotelement geteilt werden.",
  "Multiplikátory: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; po prvom kroku má druhý riadok tvar $(0, {@6}, {@7})$ a tretí $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.": "Multiplikatoren: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; nach dem ersten Schritt hat die zweite Zeile die Form $(0, {@6}, {@7})$ und die dritte $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.",
  "Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.": "Zuerst der Euler-Prädiktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, dann $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.",
  "Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.": "Berechne zuerst die dividierten Differenzen erster Ordnung $f[x_0, x_1]$ und $f[x_1, x_2]$, dann teile ihre Differenz durch $x_2-x_0$.",
  "Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; zlomok sa odčítava, nie pripočítava.": "Der Newton-Schritt ist $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; der Bruch wird subtrahiert, nicht addiert.",
  "Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "Der Newton-Schritt ist $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Newtonova metóda: dotyčnice ku grafu y = x² − 2": "Newton-Verfahren: Tangenten an den Graphen von y = x² − 2",
  "Newtonovou metódou hľadáme $\\sqrt{{@0}}$ ako koreň funkcie $f(x)=x^2-{@1}$. Vypočítaj $x_1$ zo štartu $x_0={@2}$. {@3}": "Mit dem Newton-Verfahren suchen wir $\\sqrt{{@0}}$ als Nullstelle der Funktion $f(x)=x^2-{@1}$. Berechne $x_1$ ausgehend von $x_0={@2}$. {@3}",
  "Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.": "Normalgleichungen: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; daraus $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.",
  "Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A={@0}$ a urči {@1}.": "Bestimme die LU-Zerlegung (ohne Zeilenvertauschung, $L$ hat Einsen auf der Diagonale) der Matrix $A={@0}$ und bestimme {@1}.",
  "Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.": "Finde die kleinste Größenordnung $10^{-k}$, für die noch $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$ gilt, und zähle die Ziffern von der ersten von null verschiedenen bis zu dieser Stelle.",
  "Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.": "Rechteckregel: $M_n=h\\sum f(\\text{Mitte des Teilintervalls})$, $h=\\frac{b-a}{n}$.",
  "Odhadni deriváciu funkcie $f(x)={@0}$ v bode $x={@1}$ {@2} diferenciou s krokom $h={@3}$. {@4}": "Schätze die Ableitung der Funktion $f(x)={@0}$ an der Stelle $x={@1}$ mit dem {@2} Differenzenquotienten mit der Schrittweite $h={@3}$. {@4}",
  "Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.": "Es gilt $\\delta(x^n)\\approx|n|\\,\\delta x$, wobei $\\delta x=\\frac{\\Delta x}{|x|}$.",
  "Po $n$ krokoch má interval dĺžku $\\frac{{@0}}{2^n}$. Treba $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, teda $n\\ge\\log_2 {@4}\\approx {@5}$. Najmenšie celé je $n={@6}$.": "Nach $n$ Schritten hat das Intervall die Länge $\\frac{{@0}}{2^n}$. Nötig ist $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, also $n\\ge\\log_2 {@4}\\approx {@5}$. Die kleinste ganze Zahl ist $n={@6}$.",
  "Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.": "Du hast die falsche Hälfte behalten. Die Nullstelle liegt in der Hälfte, an deren Enden $f$ entgegengesetzte Vorzeichen hat.",
  "Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.": "Verwende $P(x)=\\sum y_i\\ell_i(x)$ mit $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$ oder die Newton-Form mit dividierten Differenzen.",
  "Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.": "Verwende $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, hier ist $a-b=1$.",
  "Počet krokov": "Anzahl der Schritte",
  "Počet krokov n": "Anzahl der Schritte n",
  "Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil ${@0}$-krát, čas teda ${@1}^3={@2}$-krát: ${@3}\\cdot {@4}={@5}$ s.": "Die Anzahl der Operationen ist ungefähr $\\frac{2}{3}n^3$, die Zeit wächst mit der dritten Potenz der Dimension. Die Dimension hat sich ${@0}$-mal vergrößert, die Zeit also ${@1}^3={@2}$-mal: ${@3}\\cdot {@4}={@5}$ s.",
  "Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.": "Für $f(x)=\\ln x$ ergibt sich $\\kappa=\\frac{1}{|\\ln x|}$.",
  "Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.": "Für $f(x)=\\sin x$ ist $\\kappa=|x\\cot x|$. Rechne im Bogenmaß.",
  "Pre body {@0} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). {@1}": "Berechne für die Punkte {@0} die dividierte Differenz zweiter Ordnung $f[x_0, x_1, x_2]$ (den Koeffizienten bei $(x-x_0)(x-x_1)$ in der Newton-Form). {@1}",
  "Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.": "Für eine Funktion zweier Variablen gilt $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; bei $S=ab$ sind die partiellen Ableitungen $b$ und $a$.",
  "Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.": "Beim Gauß-Seidel-Verfahren haben wir in der zweiten und dritten Gleichung schon die neuen Werte verwendet.",
  "Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.": "Beim Jacobi-Verfahren setzen wir überall die Startwerte ein.",
  "Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.": "Beim Jacobi-Verfahren werden in alle Gleichungen nur die Werte aus dem Startvektor $x^{(0)}$ eingesetzt, nicht die gerade neu berechneten Komponenten.",
  "Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.": "Beim zentralen Differenzenquotienten ist der Abstand der Punkte $x-h$ und $x+h$ gleich $2h$; die Differenz der Werte muss durch $2h$ geteilt werden, nicht durch $h$.",
  "Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.": "Bei der dividierten Differenz zweiter Ordnung wird durch die Differenz der äußeren Stützstellen $x_2 - x_0$ geteilt, nicht durch $x_2 - x_1$.",
  "Priamy chod s multiplikátormi $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá hornú trojuholníkovú maticu $U={@3}$ a pravú stranu $y=({@4})^{T}$. Spätný chod: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.": "Die Vorwärtselimination mit den Multiplikatoren $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ ergibt die obere Dreiecksmatrix $U={@3}$ und die rechte Seite $y=({@4})^{T}$. Rückwärtseinsetzen: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.",
  "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.": "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.",
  "Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.": "Du hast den Rayleigh-Quotienten mit dem Vektor $x^{(0)}$ berechnet. Gefragt ist der Quotient für $x^{(1)}$, du musst also noch $Ax^{(1)}$ berechnen.",
  "Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.": "Der relative Fehler ist $\\frac{|x-\\tilde{x}|}{|x|}$; in Prozent multipliziere ihn mit 100.",
  "Relatívna chyba vstupu sa teda zväčší asi {@0}-krát — úloha je zle podmienená.": "Der relative Fehler der Eingabe vergrößert sich also etwa um den Faktor {@0} — die Aufgabe ist schlecht konditioniert.",
  "Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.": "Löse die Ungleichung $\\frac{b-a}{2^n}\\le\\varepsilon$, also $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, und runde auf.",
  "Riešenie istej úlohy {@0} s krokom $h$ má v koncovom bode globálnu chybu približne ${@1}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{{@2}}$? {@3}": "Eine bestimmte Aufgabe wird {@0} mit der Schrittweite $h$ gelöst; im Endpunkt beträgt der globale Fehler etwa ${@1}$. Welchen Fehler können wir bei der Schrittweite $\\frac{h}{{@2}}$ erwarten? {@3}",
  "Rovnica $x^2-{@0}=0$ má koreň v intervale $[{@1};\\ {@2}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).": "Die Gleichung $x^2-{@0}=0$ hat eine Nullstelle im Intervall $[{@1};\\ {@2}]$. Führe zwei Schritte des Bisektionsverfahrens durch und gib das resultierende Intervall als Paar von Randpunkten an, getrennt durch Semikolon (z. B. 1,25; 1,5).",
  "Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)={@0}$ (rovnica ${@1}$) a štartom $x_0={@2}$. Vypočítaj $x_2$. {@3}": "Wir lösen die Gleichung mit der Fixpunktiteration $x_{k+1}=g(x_k)$ mit $g(x)={@0}$ (Gleichung ${@1}$) und dem Startwert $x_0={@2}$. Berechne $x_2$. {@3}",
  "Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.": "Die Differenz der dividierten Differenzen erster Ordnung muss noch durch die Differenz der äußeren Stützstellen $x_2 - x_0$ geteilt werden.",
  "Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = {@0}$, až potom násobiť $(x - x_0)$.": "Die Differenz der Werte $y_1 - y_0$ muss durch die Schrittweite $x_1 - x_0 = {@0}$ geteilt werden, erst dann wird mit $(x - x_0)$ multipliziert.",
  "Rozšírime výraz súčtom odmocnín: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.": "Wir erweitern den Ausdruck mit der Summe der Wurzeln: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.",
  "Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.": "Die Simpsonregel hat die Fehlerordnung 4, nicht 2 wie die Trapezregel.",
  "Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.": "Simpsonregel: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ gerade.",
  "Simpsonovej metódy": "der Simpsonregel",
  "Simpsonovou metódou": "mit der Simpsonregel",
  "Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.": "Die Steigungen $k_2$ und $k_3$ haben in RK4 doppeltes Gewicht: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.",
  "Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.": "Die Steigungen werden gemittelt: Multipliziert wird mit $\\frac{h}{2}$, nicht mit $h$.",
  "Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.": "Die Steigung muss im zweiten Schritt im neuen Punkt $(x_1, y_1)$ neu berechnet werden; es genügt nicht, einen Schritt der Länge $2h$ mit der Anfangssteigung zu machen.",
  "Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.": "Du hast nur die gültigen Nachkommastellen gezählt. Zu den gültigen Ziffern gehören auch die Ziffern vor dem Komma.",
  "Spätným chodom urči najprv $x_3$.": "Bestimme durch Rückwärtseinsetzen zuerst $x_3$.",
  "Strany obdĺžnika sme namerali s presnosťou $\\pm {@0}$ cm: $a={@1}$ cm a $b={@2}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. {@3}": "Die Seiten eines Rechtecks haben wir mit der Genauigkeit $\\pm {@0}$ cm gemessen: $a={@1}$ cm und $b={@2}$ cm. Schätze mit der linearen Näherung eine Schranke für den absoluten Fehler des Flächeninhalts $S=ab$ (in cm²) ab. {@3}",
  "Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.": "Die Mittelpunktregel nimmt die Werte in den Mitten der Teilintervalle, nicht an ihren linken Enden.",
  "Stredy dielikov: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$": "Mitten der Teilintervalle: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$",
  "Sústavu {@0} rieš {@1} metódou zo štartu $x^{(0)}={@2}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.": "Löse das System {@0} mit dem {@1}-Verfahren ausgehend von $x^{(0)}={@2}$. Berechne die erste Iteration $x^{(1)}$ und gib ihre drei Komponenten durch Semikolon getrennt an, jede auf 4 Nachkommastellen gerundet.",
  "Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.": "Das Produkt der Diagonalelemente ergibt die Determinante nur bei einer Dreiecksmatrix. Multipliziere die Diagonale der Matrix $U$, nicht von $A$.",
  "Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.": "Das ist ein Jacobi-Schritt. Beim Gauß-Seidel-Verfahren setze in die weiteren Gleichungen sofort die neuen Werte $x_1^{(1)}, x_2^{(1)}$ ein.",
  "Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).": "Das ist der absolute Fehler. Den relativen erhältst du, indem du den absoluten Fehler durch $|x|$ teilst (und in Prozent noch mal 100).",
  "Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.": "Das ist erst $x_1$. Setze das Ergebnis noch einmal in $g$ ein.",
  "Toto je až $y_1$. Urob ešte druhý krok.": "Das ist erst $y_1$. Führe noch den zweiten Schritt durch.",
  "Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.": "Das ist nur der Euler-Prädiktor $\\tilde{y}_1$. Das Heun-Verfahren korrigiert ihn noch mit dem Mittelwert zweier Steigungen.",
  "Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.": "Das ist nur der Zähler $(x^{(1)})^{T}Ax^{(1)}$. Teile ihn noch durch $(x^{(1)})^{T}x^{(1)}$.",
  "Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.": "Das ist die Trapezregel. Die Simpsonregel verwendet die Gewichte $1, 4, 2, 4, \\dots, 4, 1$ und multipliziert mit $\\frac{h}{3}$.",
  "Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.": "Das ist die lineare Interpolation nur aus den zwei benachbarten Stützstellen. Das Polynom 2. Grades nutzt alle drei Punkte.",
  "Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.": "Das ist die Abschätzung $\\frac{M_2h^2}{8}$ für den ungünstigsten Punkt des Intervalls. Gefragt ist nach dem konkreten Punkt $x$.",
  "Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.": "Das ist der Mittelwert $\\bar{y}$. Der Achsenabschnitt ist $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, du musst also auch $a\\bar{x}$ abziehen.",
  "Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "Das ist das ursprüngliche Element $a_{22}$. Von der zweiten Zeile muss zuerst das $l_{21}$-Fache der ersten abgezogen werden.",
  "Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "Das ist das ursprüngliche Element $a_{23}$. Von der zweiten Zeile muss zuerst das $l_{21}$-Fache der ersten abgezogen werden.",
  "Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.": "Das ist das ursprüngliche Element $a_{33}$. Die dritte Zeile muss in beiden Eliminationsschritten umgeformt werden.",
  "Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.": "Das ist der relative Fehler (Quotient aus Fehler und Wert). Der absolute Fehler ist die Differenz $|x-\\tilde{x}|$ selbst.",
  "Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom ${@0}$.": "Das ist der relative Fehler von $x$ allein. Bei einer Potenz wird der relative Fehler mit dem Exponenten ${@0}$ multipliziert.",
  "Urob jeden krok Newtonovej metódy pre rovnicu $x^3{@0}-{@1}=0$ so štartom $x_0={@2}$. {@3}": "Führe einen Schritt des Newton-Verfahrens für die Gleichung $x^3{@0}-{@1}=0$ mit dem Startwert $x_0={@2}$ durch. {@3}",
  "Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h={@0}$ pre úlohu {@1}. {@2}": "Führe einen Schritt des Runge-Kutta-Verfahrens 4. Ordnung mit der Schrittweite $h={@0}$ für die Aufgabe {@1} durch. {@2}",
  "Urob jeden krok metódy sečníc pre $f(x)=x^2-{@0}$ s počiatočnými bodmi $x_0={@1}$ a $x_1={@2}$. {@3}": "Führe einen Schritt des Sekantenverfahrens für $f(x)=x^2-{@0}$ mit den Startpunkten $x_0={@1}$ und $x_1={@2}$ durch. {@3}",
  "Urči $M_2 = \\max|f''|$ na intervale. {@0}": "Bestimme $M_2 = \\max|f''|$ auf dem Intervall. {@0}",
  "Urči $u_{22}$.": "Bestimme $u_{22}$.",
  "Urči $u_{23}$.": "Bestimme $u_{23}$.",
  "Urči $u_{33}$.": "Bestimme $u_{33}$.",
  "Urči multiplikátor $l_{21}$.": "Bestimme den Multiplikator $l_{21}$.",
  "Urči multiplikátor $l_{31}$.": "Bestimme den Multiplikator $l_{31}$.",
  "Urči multiplikátor $l_{32}$.": "Bestimme den Multiplikator $l_{32}$.",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x={@0}$ (v radiánoch). {@1}": "Bestimme die Konditionszahl $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ der Berechnung von $f(x)=\\sin x$ an der Stelle $x={@0}$ (im Bogenmaß). {@1}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-{@0}$ v bode $x={@1}$. {@2}": "Bestimme die Konditionszahl $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ der Berechnung von $f(x)=x-{@0}$ an der Stelle $x={@1}$. {@2}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x={@0}$. {@1}": "Bestimme die Konditionszahl $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ der Berechnung der Funktion $f(x)=\\ln x$ an der Stelle $x={@0}$. {@1}",
  "V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.": "Berechne in jedem Schritt den Wert in der Intervallmitte und behalte die Hälfte, an deren Enden die Funktion entgegengesetzte Vorzeichen hat.",
  "Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.": "In der Formel wird noch durch zwei geteilt: $\\frac{M_2}{2!}$.",
  "Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.": "In der Sekantenformel wird die Korrektur $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ von $x_1$ subtrahiert.",
  "Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.": "Bringe die Elemente unter der Diagonale zuerst in der ersten und dann in der zweiten Spalte auf null, zuletzt löse von der letzten Gleichung an.",
  "Vypočítaj $Ax^{(1)}$.": "Berechne $Ax^{(1)}$.",
  "Vypočítaj $P_1({@0})$. {@1}": "Berechne $P_1({@0})$. {@1}",
  "Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.": "Berechne $\\det A = u_{11}u_{22}u_{33}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} s $n={@4}$ dielikmi. {@5}": "Berechne $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} mit $n={@4}$ Teilintervallen. {@5}",
  "Vypočítaj $\\ell_{@0}({@1})$. {@2}": "Berechne $\\ell_{@0}({@1})$. {@2}",
  "Vypočítaj $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}": "Berechne $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}",
  "Vypočítaj $\\sqrt{{@0}}-\\sqrt{{@1}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). {@2}": "Berechne $\\sqrt{{@0}}-\\sqrt{{@1}}$ auf numerisch stabile Weise (ohne Subtraktion naheliegender Zahlen). {@2}",
  "Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).": "Berechne $\\sum x_i$ und $\\sum y_i$ (durch Semikolon getrennt).",
  "Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).": "Berechne $\\sum x_i^2$ und $\\sum x_iy_i$ (durch Semikolon getrennt).",
  "Vypočítaj $f$ v strede intervalu, teda $f({@0})$. {@1}": "Berechne $f$ in der Intervallmitte, also $f({@0})$. {@1}",
  "Vypočítaj $f'(x_0)$.": "Berechne $f'(x_0)$.",
  "Vypočítaj $f(x_0)$ a $f'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "Berechne $f(x_0)$ und $f'(x_0)$ und setze in $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$ ein.",
  "Vypočítaj $f(x_0)$.": "Berechne $f(x_0)$.",
  "Vypočítaj $f(x_0, y_0)$. {@0}": "Berechne $f(x_0, y_0)$. {@0}",
  "Vypočítaj $f(x_1)$.": "Berechne $f(x_1)$.",
  "Vypočítaj $f(x_1, \\tilde{y}_1)$. {@0}": "Berechne $f(x_1, \\tilde{y}_1)$. {@0}",
  "Vypočítaj $f(x_1, y_1)$. {@0}": "Berechne $f(x_1, y_1)$. {@0}",
  "Vypočítaj $f({@0})$. {@1}": "Berechne $f({@0})$. {@1}",
  "Vypočítaj $f[x_0, x_1, x_2]$. {@0}": "Berechne $f[x_0, x_1, x_2]$. {@0}",
  "Vypočítaj $f[x_0, x_1]$. {@0}": "Berechne $f[x_0, x_1]$. {@0}",
  "Vypočítaj $f[x_1, x_2]$. {@0}": "Berechne $f[x_1, x_2]$. {@0}",
  "Vypočítaj $k_{@0}$. {@1}": "Berechne $k_{@0}$. {@1}",
  "Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).": "Berechne $x^{(1)} = Ax^{(0)}$ (zwei Komponenten durch Semikolon getrennt).",
  "Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.": "Berechne $x^{(1)}=Ax^{(0)}$, dann $Ax^{(1)}$ und den Quotienten der Skalarprodukte $x^{(1)}\\cdot Ax^{(1)}$ und $x^{(1)}\\cdot x^{(1)}$.",
  "Vypočítaj $x_1 = g(x_0)$. {@0}": "Berechne $x_1 = g(x_0)$. {@0}",
  "Vypočítaj $x_1$. {@0}": "Berechne $x_1$. {@0}",
  "Vypočítaj $x_2 = g(x_1)$. {@0}": "Berechne $x_2 = g(x_1)$. {@0}",
  "Vypočítaj $x_2$. {@0}": "Berechne $x_2$. {@0}",
  "Vypočítaj $x_{@0}^{(1)}$. {@1}": "Berechne $x_{@0}^{(1)}$. {@1}",
  "Vypočítaj $y_1$. {@0}": "Berechne $y_1$. {@0}",
  "Vypočítaj $y_2$. {@0}": "Berechne $y_2$. {@0}",
  "Vypočítaj $|(x-x_0)(x-x_1)|$. {@0}": "Berechne $|(x-x_0)(x-x_1)|$. {@0}",
  "Vypočítaj Rayleighov podiel. {@0}": "Berechne den Rayleigh-Quotienten. {@0}",
  "Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. {@0}": "Berechne den absoluten Fehler $|x-\\tilde{x}|$. {@0}",
  "Vypočítaj absolútny člen $b$. {@0}": "Berechne den Achsenabschnitt $b$. {@0}",
  "Vypočítaj menovateľ $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}": "Berechne den Nenner $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}",
  "Vypočítaj odhad chyby. {@0}": "Berechne die Fehlerabschätzung. {@0}",
  "Vypočítaj prediktor $\\tilde{y}_1$. {@0}": "Berechne den Prädiktor $\\tilde{y}_1$. {@0}",
  "Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. {@0}": "Berechne den Beitrag des Fehlers der Seite $a$, also $b\\,\\Delta a$. {@0}",
  "Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. {@0}": "Berechne den Beitrag des Fehlers der Seite $b$, also $a\\,\\Delta b$. {@0}",
  "Vypočítaj relatívnu chybu $x$ v percentách. {@0}": "Berechne den relativen Fehler von $x$ in Prozent. {@0}",
  "Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. {@0}": "Berechne die Steigung $\\frac{y_1-y_0}{x_1-x_0}$. {@0}",
  "Vypočítaj smernicu $a$. {@0}": "Berechne die Steigung $a$. {@0}",
  "Vypočítaj súčet hodnôt funkcie v stredoch dielikov. {@0}": "Berechne die Summe der Funktionswerte in den Mitten der Teilintervalle. {@0}",
  "Vypočítaj súčet hodnôt v nepárnych uzloch $f_1{@0}$ (váha 4). {@1}": "Berechne die Summe der Werte in den ungeraden Stützstellen $f_1{@0}$ (Gewicht 4). {@1}",
  "Vypočítaj súčet vnútorných hodnôt {@0}. {@1}": "Berechne die Summe der inneren Werte {@0}. {@1}",
  "Vypočítaj výslednú hodnotu integrálu. {@0}": "Berechne den resultierenden Wert des Integrals. {@0}",
  "Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.": "Die Formel $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ gilt nur für eine Gerade durch den Ursprung ($b = 0$). Verwende beide Normalgleichungen.",
  "Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.": "Sekantenformel: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.",
  "Výsledok zaokrúhli na {@0} {@1}.": "Runde das Ergebnis auf {@0} {@1}.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.": "Drücke aus der $i$-ten Gleichung $x_i$ aus und setze die Werte der Komponenten aus $x^{(0)}$ ein.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.": "Drücke aus der $i$-ten Gleichung $x_i$ aus und setze die schon neu berechneten Komponenten $x_1, \\dots, x_{i-1}$ und die alten Werte der übrigen ein.",
  "Z tabuľky poznáme ${@0}\\approx {@1}$ a ${@2}\\approx {@3}$. Lineárnou interpoláciou odhadni hodnotu funkcie ${@4}$ v bode $x={@5}$. {@6}": "Aus der Tabelle kennen wir ${@0}\\approx {@1}$ und ${@2}\\approx {@3}$. Schätze durch lineare Interpolation den Wert der Funktion ${@4}$ an der Stelle $x={@5}$. {@6}",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f'(x)}{f(x)}\\right|$.": "Du hast den Faktor $x$ im Zähler vergessen: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nicht $\\left|\\frac{f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.": "Du hast den Faktor $x$ im Zähler vergessen: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.": "Du hast den Faktor $x$ vergessen: $\\kappa = |x\\cot x|$, nicht $|\\cot x|$.",
  "Zadaj celé riešenie $x_1; x_2; x_3$.": "Gib die ganze Lösung $x_1; x_2; x_3$ an.",
  "Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.": "Du hast die Gewichte vertauscht: In der Simpsonregel haben die ungeraden Stützstellen $f_1, f_3, \\dots$ das Gewicht 4 und die geraden inneren Stützstellen das Gewicht 2.",
  "Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.": "Du hast nur den Fehler einer Seite gezählt. Addiere zu $b\\,\\Delta a$ auch $a\\,\\Delta b$.",
  "Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.": "Die Komplexität der Gauß-Elimination ist $O(n^3)$, genauer etwa $\\frac{2}{3}n^3$ Operationen.",
  "absolútny člen $b$": "den Achsenabschnitt $b$",
  "centrálnej": "zentralen",
  "centrálnej diferencie": "des zentralen Differenzenquotienten",
  "centrálnou": "zentralen",
  "ciframi": "Ziffern",
  "cifrou": "Ziffer",
  "determinant $\\det A$ ako súčin diagonálnych prvkov $U$": "die Determinante $\\det A$ als Produkt der Diagonalelemente von $U$",
  "doprednej": "vorderen",
  "doprednej diferencie": "des vorderen Differenzenquotienten",
  "doprednou": "vorderen",
  "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (chyba {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (chyba {@4})</span> · presne e² = {@5}": "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (Fehler {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (Fehler {@4})</span> · exakt e² = {@5}",
  "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · presne I = {@2} · chyba {@3}": "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · exakt I = {@2} · Fehler {@3}",
  "je platné 1 desatinné miesto": "ist 1 Nachkommastelle gültig",
  "je to <strong>1</strong> platná cifra": "ist das <strong>1</strong> gültige Ziffer",
  "je to <strong>{@0}</strong> platných cifier": "sind das <strong>{@0}</strong> gültige Ziffern",
  "lichobežníkovej metódy": "der Trapezregel",
  "lichobežníkovou metódou": "mit der Trapezregel",
  "metódou RK4": "mit dem RK4-Verfahren",
  "na polovicu": "auf die Hälfte",
  "nie je platné žiadne desatinné miesto": "ist keine Nachkommastelle gültig",
  "obdĺžnikovej (stredovej) metódy": "der Rechteckregel (Mittelpunktregel)",
  "obdĺžnikovou (stredovou) metódou": "mit der Rechteckregel (Mittelpunktregel)",
  "prvok ${@0}$": "das Element ${@0}$",
  "smernicu $a$": "die Steigung $a$",
  "sú platné {@0} desatinné miesta": "sind {@0} Nachkommastellen gültig",
  "sú to <strong>{@0}</strong> platné cifry": "sind das <strong>{@0}</strong> gültige Ziffern",
  "uzly {@0}.": "Stützstellen {@0}.",
  "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Odhad chyby: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.": "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Fehlerabschätzung: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.",
  "{@0}-krát": "um den Faktor {@0}",
  "{@0}.{@1}": "{@0}.{@1}",
  "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, chyba {@1}</span>": "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, Fehler {@1}</span>",
  "· <span class=\"c-ok\">chyba |x{@0} − √2| = {@1}</span>": "· <span class=\"c-ok\">Fehler |x{@0} − √2| = {@1}</span>",
  "· Simpson: n musí byť párne": "· Simpson: n muss gerade sein",
  "Úlohu {@0} rieš Eulerovou metódou s krokom $h={@1}$. Vypočítaj $y_2\\approx y({@2})$. {@3}": "Löse die Aufgabe {@0} mit dem Euler-Verfahren mit der Schrittweite $h={@1}$. Berechne $y_2\\approx y({@2})$. {@3}",
  "Úlohu {@0} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h={@1}$. Vypočítaj $y_1\\approx y({@2})$. {@3}": "Löse die Aufgabe {@0} mit dem Heun-Verfahren (verbessertes Euler-Verfahren) mit der Schrittweite $h={@1}$. Berechne $y_1\\approx y({@2})$. {@3}",
  "Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.": "Die Zeit wächst nicht linear mit der Anzahl der Unbekannten: Die Elimination braucht etwa $\\frac{2}{3}n^3$ Operationen.",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je absolútna chyba tejto aproximácie? {@2}": "Die Zahl ${@0}$ ersetzen wir durch die Näherung ${@1}$. Wie groß ist der absolute Fehler dieser Näherung? {@2}",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je relatívna chyba v percentách? {@2}": "Die Zahl ${@0}$ ersetzen wir durch die Näherung ${@1}$. Wie groß ist der relative Fehler in Prozent? {@2}",
  "Štart x₀": "Start x₀"
 }
});
