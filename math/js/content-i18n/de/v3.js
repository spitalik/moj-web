/* Deutsch: preklad js/rocniky/v3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/v3/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "v3-pojem": {
   "title": "Begriff der Differentialgleichung, Anfangswertproblem, Richtungsfeld",
   "summary": "Ordnung einer Gleichung, allgemeine und spezielle Lösung, Anfangswertproblem, Existenz- und Eindeutigkeitssatz, Richtungsfeld.",
   "theory": [
    "<p>Eine <strong>gewöhnliche Differentialgleichung (DGL)</strong> ist eine Gleichung $F(x, y, y', \\dots, y^{(n)}) = 0$, in der die Unbekannte eine Funktion\n       einer Variablen $y = y(x)$ ist und in der Ableitungen dieser Funktion vorkommen. Die <strong>Ordnung</strong> der Gleichung ist die Ordnung der höchsten Ableitung,\n       die tatsächlich in ihr vorkommt: $y'' + (y')^{5} = x$ ist eine Gleichung 2. Ordnung, die Potenz $(y')^{5}$ ändert an der Ordnung nichts.\n       Die Gleichung ist <strong>linear</strong>, wenn sie linear in $y, y', \\dots, y^{(n)}$ ist, also die Form\n       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$ hat.</p>\n       <p>Eine <strong>Lösung</strong> auf dem Intervall $I$ ist eine Funktion, die auf $I$ Ableitungen bis zur Ordnung $n$ besitzt und nach dem Einsetzen die Gleichung für jedes $x\\in I$ erfüllt.\n       Die <strong>allgemeine Lösung</strong> einer Gleichung $n$-ter Ordnung ist eine Lösungsschar $y = \\varphi(x, C_1, \\dots, C_n)$ mit $n$ unabhängigen Konstanten,\n       eine <strong>spezielle (partikuläre) Lösung</strong> entsteht durch eine konkrete Wahl der Konstanten. Eine Lösung, die man aus der allgemeinen für keine Wahl der Konstanten erhält,\n       heißt <strong>singulär</strong>.</p>",
    "<p><strong>Anfangswertproblem (Cauchy-Problem)</strong> für eine Gleichung 1. Ordnung: Gesucht ist eine Lösung der Gleichung $y' = f(x, y)$, die die\n       <strong>Anfangsbedingung</strong> $y(x_0) = y_0$ erfüllt. Bei einer Gleichung $n$-ter Ordnung schreiben wir $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$ vor.</p>\n       <p><strong>Satz (Picard-Lindelöf).</strong> Sind die Funktionen $f$ und $\\frac{\\partial f}{\\partial y}$ in einer Umgebung des Punktes $(x_0 \\mid y_0)$ stetig, so gibt es\n       ein Intervall um $x_0$, auf dem das Anfangswertproblem <strong>genau eine</strong> Lösung hat. Ohne diese Voraussetzungen muss die Eindeutigkeit nicht gelten:\n       Das Problem $y' = 3y^{2/3}$, $y(0) = 0$ wird sowohl von $y = 0$ als auch von $y = x^{3}$ gelöst (hier ist $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$ an der Stelle $y = 0$ nicht definiert).</p>",
    "<p><strong>Richtungsfeld.</strong> Die Gleichung $y' = f(x, y)$ schreibt in jedem Punkt $(x \\mid y)$ die Steigung der Tangente an die Lösung vor, die durch ihn verläuft.\n       Zeichnen wir in die Punkte der Ebene kurze Strecken mit der Steigung $f(x, y)$, erhalten wir das Richtungsfeld. Der Graph einer Lösung (<strong>Integralkurve</strong>)\n       berührt in jedem seiner Punkte das Feld. Kurven $f(x, y) = k$, auf denen alle Strecken dieselbe Steigung $k$ haben, heißen <strong>Isoklinen</strong>.</p>",
    {
     "fig": "v3-smerove-pole",
     "caption": "Richtungsfeld der Gleichung $y' = x - y$. Die gestrichelte Gerade $y = x$ ist die Isokline mit der Steigung $0$, die grüne Gerade $y = x - 1$ ist die Isokline mit der Steigung $1$ und zugleich eine Lösung. Verschiebe den Anfangswert $y(0)$: Alle Lösungen nähern sich für $x\\to\\infty$ der Geraden $y = x - 1$."
    }
   ],
   "examples": [
    {
     "task": "Prüfe, dass $y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$ für beliebige $C_1, C_2$ eine Lösung der Gleichung $y'' - y' - 2y = 0$ ist. Welche Ordnung hat die Gleichung?",
     "steps": [
      "Die Gleichung enthält die zweite Ableitung und keine höhere, sie ist also <strong>2. Ordnung</strong>.",
      "Wir leiten ab: $y' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$, $y'' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$.",
      "Wir setzen ein: $(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$.",
      "Die Gleichheit gilt für alle $x$ und alle $C_1, C_2$. Die Funktion enthält zwei unabhängige Konstanten, es handelt sich um die <strong>allgemeine Lösung</strong>."
     ]
    },
    {
     "task": "Zeige, dass $y = C\\mathrm{e}^{-x} + x - 1$ die allgemeine Lösung der Gleichung $y' = x - y$ ist, und bestimme die Lösung des Anfangswertproblems mit der Bedingung $y(0) = 2$.",
     "steps": [
      "$y' = -C\\mathrm{e}^{-x} + 1$ und $x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$. Beide Seiten sind gleich.",
      "Aus der Bedingung: $y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$, also $C = 3$.",
      "<strong>Spezielle Lösung: $y = 3\\mathrm{e}^{-x} + x - 1$.</strong> Das ist die Kurve aus der Abbildung für $y(0) = 2$."
     ]
    }
   ]
  },
  "v3-separovatelne": {
   "title": "Differentialgleichungen mit getrennten Variablen",
   "summary": "Die Gleichung $y' = g(x)\\,h(y)$: Trennung der Variablen, stationäre Lösungen, Gleichungen vom Typ $y' = f(ax + by + c)$.",
   "theory": [
    "<p>Eine Gleichung mit <strong>trennbaren Variablen</strong> hat die Form $y' = g(x)\\,h(y)$, wobei $g$ auf einem Intervall $I$ stetig ist\n       und $h$ auf einem Intervall $J$ stetig ist. Gleichwertig kann man sie in Differentialform $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$ schreiben.</p>\n       <p><strong>Vorgehen:</strong></p>\n       <ol><li>Wir bestimmen die Nullstellen der Funktion $h$. Ist $h(c) = 0$, so ist die Konstante $y = c$ eine Lösung, eine sogenannte <strong>stationäre Lösung</strong>.</li>\n       <li>Für $h(y)\\neq 0$ trennen wir die Variablen: $\\frac{dy}{h(y)} = g(x)\\,dx$.</li>\n       <li>Wir integrieren: $\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$. Wir erhalten eine Lösung in impliziter Form, die wir nach Möglichkeit explizit darstellen.</li>\n       <li>Die Konstante $C$ bestimmen wir aus der Anfangsbedingung und prüfen, auf welchem Intervall die Lösung existiert.</li></ol>",
    "<p><strong>Vorsicht vor dem Verlust von Lösungen.</strong> Durch die Division durch $h(y)$ können stationäre Lösungen verloren gehen, deshalb muss man sie gesondert angeben\n       (manchmal sind sie in der allgemeinen Lösung für $C = 0$ enthalten, zum Beispiel liefert bei $y' = ky$ die Lösung $y = C\\mathrm{e}^{kx}$ auch $y = 0$).\n       Die Lösung einer nichtlinearen Gleichung muss nicht auf ganz $\\mathbb{R}$ existieren, auch wenn die rechte Seite schön ist: Die Lösung des Problems $y' = y^{2}$, $y(0) = 1$\n       ist $y = \\frac{1}{1 - x}$ und existiert nur auf dem Intervall $(-\\infty; 1)$.</p>\n       <p><strong>Gleichungen vom Typ $y' = f(ax + by + c)$</strong> führen wir mit der Substitution $z = ax + by + c$ auf die trennbare Gleichung $z' = a + b\\,f(z)$ zurück.</p>",
    {
     "fig": "v3-separovatelne",
     "caption": "Die Gleichung $y' = xy$ hat die allgemeine Lösung $y = C\\mathrm{e}^{x^{2}/2}$. Die grüne $x$-Achse ist die stationäre Lösung $y = 0$ (für $C = 0$), die blaue Kurve ist die Lösung mit der Bedingung $y(0) = 1$. Die Integralkurven schneiden sich nicht, wie es der Eindeutigkeitssatz garantiert."
    }
   ],
   "examples": [
    {
     "task": "Löse das Anfangswertproblem $y' = xy^{2}$, $y(0) = 1$, und bestimme das Intervall, auf dem die Lösung existiert.",
     "steps": [
      "Die stationäre Lösung ist $y = 0$, sie erfüllt die Bedingung $y(0) = 1$ jedoch nicht.",
      "Für $y\\neq 0$: $\\frac{dy}{y^{2}} = x\\,dx$, nach dem Integrieren $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$.",
      "Aus der Bedingung folgt $-1 = C$, also $\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$ und $y = \\frac{2}{2 - x^{2}}$.",
      "<strong>Die Lösung $y = \\frac{2}{2 - x^{2}}$ existiert auf dem Intervall $(-\\sqrt{2}; \\sqrt{2})$</strong>, das den Punkt $x_0 = 0$ enthält; an den Stellen $\\pm\\sqrt{2}$ hat der Graph senkrechte Asymptoten."
     ]
    },
    {
     "task": "Löse das Anfangswertproblem $y' = \\mathrm{e}^{x - y}$, $y(0) = \\ln 2$.",
     "steps": [
      "Die rechte Seite ist ein Produkt: $y' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$. Wir trennen die Variablen: $\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$.",
      "Wir integrieren: $\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$. Aus der Bedingung folgt $2 = 1 + C$, also $C = 1$.",
      "<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>, die Lösung existiert auf ganz $\\mathbb{R}$."
     ]
    }
   ]
  },
  "v3-homogenne": {
   "title": "Homogene Differentialgleichungen (Ähnlichkeitsdifferentialgleichungen)",
   "summary": "Gleichungen $y' = \\varphi\\left(\\frac{y}{x}\\right)$, die Substitution $y = ux$ und auf homogene Form zurückführbare Gleichungen.",
   "theory": [
    "<p>Eine Funktion $f(x, y)$ ist <strong>homogen vom Grad $k$</strong>, wenn $f(tx, ty) = t^{k}f(x, y)$ für alle $t \\gt 0$ gilt. Die Gleichung $y' = f(x, y)$ heißt\n       <strong>homogen</strong>, wenn $f$ homogen vom Grad $0$ ist; dann ist $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$, die Gleichung hat also die Form\n       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$\n       Die Gleichung $M(x, y)\\,dx + N(x, y)\\,dy = 0$ ist homogen, wenn $M$ und $N$ homogene Funktionen desselben Grades sind\n       (zum Beispiel $\\frac{x^{2} + y^{2}}{xy}$: Zähler und Nenner haben beide den Grad $2$).</p>",
    "<p><strong>Substitution $y = ux$</strong>, wobei $u = u(x)$ die neue unbekannte Funktion ist. Dann ist $y' = u + xu'$, und die Gleichung geht über in\n       $$xu' = \\varphi(u) - u,$$\n       eine Gleichung mit trennbaren Variablen: $\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$. Gilt $\\varphi(u_0) = u_0$, so ist die Gerade $y = u_0x$\n       eine Lösung. Nach dem Integrieren setzen wir $u = \\frac{y}{x}$ zurück ein.</p>\n       <p><strong>Auf homogene Form zurückführbare Gleichungen</strong>: $y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$ mit von null verschiedener Determinante\n       $a_1b_2 - a_2b_1$. Durch die Verschiebung $x = X + x_0$, $y = Y + y_0$, wobei $(x_0 \\mid y_0)$ der Schnittpunkt der Geraden $a_ix + b_iy + c_i = 0$ ist, verschwinden die absoluten Glieder.</p>",
    {
     "fig": "v3-homogenne",
     "caption": "Bei einer homogenen Gleichung hat das Richtungsfeld auf jeder Ursprungsgeraden $y = ux$ (gestrichelte Linien) dieselbe Richtung. Die Gleichung $y' = \\frac{x + y}{x - y}$ hat in Polarkoordinaten die Lösungen $r = C\\mathrm{e}^{\\varphi}$, also logarithmische Spiralen."
    }
   ],
   "examples": [
    {
     "task": "Bestimme die allgemeine Lösung der Gleichung $y' = \\dfrac{x^{2} + y^{2}}{xy}$ für $x \\gt 0$.",
     "steps": [
      "Zähler und Nenner sind homogen vom Grad $2$. Nach Division durch $x^{2}$: $y' = \\frac{1 + u^{2}}{u}$, wobei $u = \\frac{y}{x}$.",
      "Wir setzen $y' = u + xu'$ ein: $u + xu' = \\frac{1}{u} + u$, also $xu' = \\frac{1}{u}$.",
      "Wir trennen die Variablen: $u\\,du = \\frac{dx}{x}$, nach dem Integrieren $\\frac{u^{2}}{2} = \\ln x + C$.",
      "<strong>Lösung: $y^{2} = x^{2}(2\\ln x + C_1)$</strong>, wobei $C_1 = 2C$."
     ]
    },
    {
     "task": "Löse das Anfangswertproblem $y' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$, $y(1) = 0$.",
     "steps": [
      "Substitution $y = ux$: $u + xu' = u + \\mathrm{e}^{-u}$, also $xu' = \\mathrm{e}^{-u}$.",
      "Wir trennen die Variablen: $\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$, sodass $\\mathrm{e}^{u} = \\ln x + C$.",
      "Aus der Bedingung $u(1) = 0$: $1 = 0 + C$, also $C = 1$ und $u = \\ln(1 + \\ln x)$.",
      "<strong>$y = x\\ln(1 + \\ln x)$</strong> für $x \\gt \\mathrm{e}^{-1}$."
     ]
    }
   ]
  },
  "v3-linearne": {
   "title": "Lineare Differentialgleichungen 1. Ordnung und Bernoulli-Gleichung",
   "summary": "Integrierender Faktor, Variation der Konstanten, Struktur der Lösung $y = y_h + y_p$ und die Substitution $z = y^{1-n}$.",
   "theory": [
    "<p>Eine <strong>lineare Differentialgleichung 1. Ordnung</strong> hat die Form $y' + p(x)\\,y = q(x)$, wobei $p, q$ auf einem Intervall $I$ stetig sind. Ist $q = 0$, so ist die Gleichung\n       <strong>homogen</strong> (im Sinne linearer Gleichungen) und trennbar: $y_h = C\\mathrm{e}^{-P(x)}$, wobei $P$ eine beliebige Stammfunktion von $p$ ist.\n       Die allgemeine Lösung der inhomogenen Gleichung ist $y = y_h + y_p$, die Summe aus der allgemeinen Lösung der homogenen Gleichung und einer (partikulären) Lösung\n       der inhomogenen Gleichung. Das Anfangswertproblem hat auf ganz $I$ genau eine Lösung.</p>",
    "<p><strong>Integrierender Faktor.</strong> Wir multiplizieren die Gleichung mit $\\mu(x) = \\mathrm{e}^{P(x)}$. Die linke Seite ist dann die Ableitung eines Produkts:\n       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$\n       Die <strong>Variation der Konstanten</strong> führt zum selben Ergebnis: Wir suchen die Lösung in der Form $y = C(x)\\,\\mathrm{e}^{-P(x)}$; nach dem Einsetzen\n       heben sich die Terme mit $C(x)$ weg, und es bleibt $C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$.</p>",
    "<p><strong>Bernoulli-Gleichung</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$, $n\\neq 0, 1$. Wir dividieren sie durch $y^{n}$ und führen $z = y^{1-n}$ ein,\n       sodass $z' = (1-n)\\,y^{-n}y'$. Wir erhalten die lineare Gleichung\n       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$\n       Für $n \\gt 0$ ist auch $y = 0$ eine Lösung, die bei der Division verloren geht. Zum Beispiel ist die logistische Gleichung $y' = ry - \\frac{r}{K}y^{2}$ eine Bernoulli-Gleichung mit $n = 2$.</p>"
   ],
   "examples": [
    {
     "task": "Löse das Anfangswertproblem $y' + 2y = 4x$, $y(0) = 1$.",
     "steps": [
      "$p = 2$, integrierender Faktor $\\mu = \\mathrm{e}^{2x}$. Die Gleichung geht über in $(y\\mathrm{e}^{2x})' = 4x\\mathrm{e}^{2x}$.",
      "Partielle Integration: $\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$, also $y = 2x - 1 + C\\mathrm{e}^{-2x}$.",
      "Aus der Bedingung: $-1 + C = 1$, $C = 2$.",
      "<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$.</strong> Probe: $y' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$."
     ]
    },
    {
     "task": "Bestimme die allgemeine Lösung der Bernoulli-Gleichung $y' + \\dfrac{y}{x} = xy^{2}$ für $x \\gt 0$.",
     "steps": [
      "$n = 2$, deshalb $z = y^{-1}$ und $z' = -y^{-2}y'$. Nach Division der Gleichung durch $y^{2}$: $y^{-2}y' + \\frac{1}{x}y^{-1} = x$, also $-z' + \\frac{z}{x} = x$.",
      "Die lineare Gleichung $z' - \\frac{z}{x} = -x$ hat den integrierenden Faktor $\\mu = \\frac{1}{x}$: $\\left(\\frac{z}{x}\\right)' = -1$, sodass $z = Cx - x^{2}$.",
      "<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong>, und zusätzlich die stationäre Lösung $y = 0$."
     ]
    }
   ]
  },
  "v3-exaktne": {
   "title": "Exakte Differentialgleichungen und integrierender Faktor",
   "summary": "Die Gleichung $M\\,dx + N\\,dy = 0$ mit $M_y = N_x$, die Stammfunktion $F(x, y)$ und ein integrierender Faktor, der von nur einer Variablen abhängt.",
   "theory": [
    "<p>Die Gleichung $M(x, y)\\,dx + N(x, y)\\,dy = 0$ ist auf einem Gebiet $D$ <strong>exakt</strong>, wenn es eine Funktion $F(x, y)$ (Stammfunktion, Potential) gibt mit\n       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$\n       die linke Seite also das totale Differential $dF$ ist. Entlang jeder Lösung gilt dann $dF = 0$, sodass das <strong>allgemeine Integral</strong> $F(x, y) = C$ lautet:\n       Die Integralkurven sind die Höhenlinien der Funktion $F$.</p>\n       <p><strong>Kriterium.</strong> Sind $M, N$ auf einem einfach zusammenhängenden Gebiet stetig differenzierbar, so ist die Gleichung genau dann exakt, wenn\n       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>",
    "<p><strong>Berechnung von $F$.</strong> Wir integrieren $M$ nach $x$ (die Variable $y$ betrachten wir als konstant): $F = \\int M\\,dx + \\varphi(y)$.\n       Die unbekannte Funktion $\\varphi$ bestimmen wir aus der Bedingung $\\frac{\\partial F}{\\partial y} = N$, die ein nur von $y$ abhängiges $\\varphi'(y)$ liefert.\n       Ebenso gut können wir mit der Integration von $N$ nach $y$ beginnen.</p>\n       <p><strong>Integrierender Faktor.</strong> Ist die Gleichung nicht exakt, suchen wir eine Funktion $\\mu \\neq 0$, sodass $\\mu M\\,dx + \\mu N\\,dy = 0$ exakt ist,\n       also $(\\mu M)_y = (\\mu N)_x$. In zwei einfachen Fällen gilt:</p>\n       <ul><li>Hängt $\\dfrac{M_y - N_x}{N} = \\omega(x)$ nur von $x$ ab, so ist $\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$;</li>\n       <li>hängt $\\dfrac{N_x - M_y}{M} = \\omega(y)$ nur von $y$ ab, so ist $\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$.</li></ul>\n       <p>Zum Beispiel hat die lineare Gleichung $y' + p(x)y = q(x)$, geschrieben als $(p y - q)\\,dx + dy = 0$, den Wert $\\omega = p(x)$ und den bekannten Faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$.</p>",
    {
     "fig": "v3-exaktne",
     "caption": "Die Gleichung $(2x - y)\\,dx + (2y - x)\\,dy = 0$ ist exakt mit $F(x, y) = x^{2} - xy + y^{2}$. Die Integralkurven sind die Ellipsen $F = C$; die Kurve durch den Punkt $(1 \\mid 2)$ entspricht $C = 3$."
    }
   ],
   "examples": [
    {
     "task": "Löse die Gleichung $(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$ und bestimme die Integralkurve, die durch den Punkt $(1 \\mid 1)$ verläuft.",
     "steps": [
      "$M_y = 2x$ und $N_x = 2x$, die Gleichung ist exakt.",
      "$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$.",
      "$F_y = x^{2} + \\varphi'(y) = x^{2} + 2y$, also $\\varphi'(y) = 2y$ und $\\varphi(y) = y^{2}$.",
      "Allgemeines Integral $x^{2}y + x^{3} + y^{2} = C$. Der Punkt $(1 \\mid 1)$ liefert $C = 3$.",
      "<strong>$x^{2}y + x^{3} + y^{2} = 3$.</strong>"
     ]
    },
    {
     "task": "Bestimme einen integrierenden Faktor der Gleichung $(y + x^{2})\\,dx - x\\,dy = 0$ ($x \\gt 0$) und löse die Gleichung.",
     "steps": [
      "$M_y = 1$, $N_x = -1$, die Gleichung ist nicht exakt. $\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$ hängt nur von $x$ ab.",
      "$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$. Neue Gleichung: $\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$, wobei $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$.",
      "$F = -\\frac{y}{x} + x$ (prüfe $F_x$ und $F_y$), allgemeines Integral $x - \\frac{y}{x} = C$.",
      "<strong>$y = x^{2} - Cx$.</strong>"
     ]
    }
   ]
  },
  "v3-aplikacie": {
   "title": "Anwendungen von Gleichungen 1. Ordnung",
   "summary": "Populationswachstum und radioaktiver Zerfall, newtonsches Abkühlungsgesetz, logistische Gleichung, RC-Glied und Mischungsprobleme.",
   "theory": [
    "<p><strong>Exponentielles Wachstum und exponentieller Zerfall.</strong> Ist die Änderungsrate einer Größe proportional zu ihrem momentanen Wert, so gilt $y' = ky$, also\n       $y(t) = y_0\\mathrm{e}^{kt}$. Für $k \\gt 0$ handelt es sich um Wachstum (Population, Zinseszins bei stetiger Verzinsung), die Verdopplungszeit ist $\\frac{\\ln 2}{k}$.\n       Für $k \\lt 0$ handelt es sich um Zerfall; ein radioaktives Isotop mit der <strong>Halbwertszeit</strong> $T$ hat $k = -\\frac{\\ln 2}{T}$ und somit $m(t) = m_0\\cdot 2^{-t/T}$.</p>\n       <p><strong>Newtonsches Abkühlungsgesetz.</strong> Die Temperatur eines Körpers in einer Umgebung mit konstanter Temperatur $T_o$ ändert sich mit einer Rate, die proportional zur Temperaturdifferenz ist:\n       $T' = -k(T - T_o)$, $k \\gt 0$. Die Lösung ist $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; die Konstante $k$ bestimmen wir meist aus einer weiteren Messung.</p>",
    {
     "fig": "v3-rast",
     "caption": "Die blaue Kurve ist die Lösung von $y' = ky$, $y(0) = 1$, die grüne die Lösung der logistischen Gleichung mit demselben $k$ und der Kapazitätsgrenze $K$ (gestrichelte Linie). Anfangs sind sie fast identisch, die logistische Kurve pendelt sich jedoch beim Wert $K$ ein."
    },
    "<p>Die <strong>logistische Gleichung</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$ beschreibt Wachstum bei begrenzten Ressourcen; $K$ ist die Kapazitätsgrenze (Tragfähigkeit) der Umgebung.\n       Sie ist trennbar (und auch eine Bernoulli-Gleichung), und ihre Lösung ist\n       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$\n       Die stationären Lösungen sind $P = 0$ (instabil) und $P = K$ (stabil). Am schnellsten wächst die Population bei $P = \\frac{K}{2}$, und zwar zur Zeit $t = \\frac{\\ln A}{r}$.</p>",
    "<p><strong>RC-Glied.</strong> Für die Ladung eines Kondensators, der von einer Quelle mit der Spannung $U$ über einen Widerstand $R$ geladen wird, gilt $Rq' + \\frac{q}{C} = U$.\n       Bei Anfangsladung null ist die Spannung am Kondensator $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, wobei $\\tau = RC$ die <strong>Zeitkonstante</strong> ist\n       (in der Zeit $\\tau$ lädt sich der Kondensator auf etwa $63\\,\\%$ der Spannung $U$ auf).</p>\n       <p><strong>Mischungsprobleme.</strong> Ein Behälter enthält $V$ Liter Lösung, es fließen $q$ Liter pro Minute einer Lösung mit der Konzentration $c$ zu, und genauso schnell\n       fließt die vollständig durchmischte Lösung ab. Für die Stoffmenge $x(t)$ gilt die Bilanz „Zufluss minus Abfluss“:\n       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>"
   ],
   "examples": [
    {
     "task": "Ein Kaffee mit einer Temperatur von $90\\,{}^\\circ\\mathrm{C}$ steht in einem Raum mit einer Temperatur von $20\\,{}^\\circ\\mathrm{C}$. Nach $10$ Minuten hat er $60\\,{}^\\circ\\mathrm{C}$. Wann ist er auf $40\\,{}^\\circ\\mathrm{C}$ abgekühlt?",
     "steps": [
      "$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$. Aus der Messung $60 = 20 + 70\\,\\mathrm{e}^{-10k}$ folgt $\\mathrm{e}^{-10k} = \\frac{4}{7}$ und $k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0{,}0560$.",
      "Die Bedingung $40 = 20 + 70\\,\\mathrm{e}^{-kt}$ liefert $\\mathrm{e}^{-kt} = \\frac{2}{7}$, also $t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3{,}5}{\\ln 1{,}75}$.",
      "<strong>$t \\approx 22{,}4$ Minuten.</strong>"
     ]
    },
    {
     "task": "Ein Behälter enthält $100$ Liter Wasser, in dem $5\\,\\mathrm{kg}$ Salz gelöst sind. Es fließen $4$ Liter pro Minute einer Lösung mit der Konzentration $0{,}2\\,\\mathrm{kg/l}$ zu, und genauso schnell fließt die durchmischte Lösung ab. Wie viel Salz ist nach $25$ Minuten im Behälter?",
     "steps": [
      "Bilanz: $x' = 0{,}2\\cdot 4 - \\frac{4}{100}x = 0{,}8 - 0{,}04x$, $x(0) = 5$.",
      "Lineare Gleichung mit konstanten Koeffizienten: Der Gleichgewichtswert ist $x = 20$, deshalb $x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0{,}04t} = 20 - 15\\,\\mathrm{e}^{-0{,}04t}$.",
      "<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14{,}48\\,\\mathrm{kg}$.</strong> Für $t\\to\\infty$ nähert sich die Menge $20\\,\\mathrm{kg}$."
     ]
    }
   ]
  },
  "v3-charakteristicka": {
   "title": "Lineare Differentialgleichungen 2. Ordnung mit konstanten Koeffizienten",
   "summary": "Fundamentalsystem, Wronski-Determinante, charakteristische Gleichung und die drei Typen ihrer Nullstellen.",
   "theory": [
    "<p>Die <strong>lineare homogene Gleichung 2. Ordnung</strong> $y'' + a_1(x)y' + a_0(x)y = 0$ mit auf einem Intervall $I$ stetigen Koeffizienten hat folgende Eigenschaften:</p>\n       <ul><li><strong>Superpositionsprinzip:</strong> Jede Linearkombination von Lösungen ist wieder eine Lösung; die Lösungen bilden einen Vektorraum der Dimension $2$.</li>\n       <li>Ein <strong>Fundamentalsystem</strong> ist ein Paar linear unabhängiger Lösungen $y_1, y_2$; die allgemeine Lösung ist $y = C_1y_1 + C_2y_2$.</li>\n       <li><strong>Wronski-Determinante</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$. Die Lösungen $y_1, y_2$ sind genau dann linear unabhängig,\n       wenn $W(x)\\neq 0$ (es genügt in einem Punkt). Es gilt die <strong>Formel von Liouville</strong> $W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$.</li></ul>",
    "<p><strong>Konstante Koeffizienten.</strong> Für $y'' + py' + qy = 0$ probieren wir den Ansatz $y = \\mathrm{e}^{\\lambda x}$. Nach dem Einsetzen und Dividieren durch $\\mathrm{e}^{\\lambda x}$ erhalten wir die\n       <strong>charakteristische Gleichung</strong> $\\lambda^{2} + p\\lambda + q = 0$. Je nach ihren Nullstellen:</p>\n       <table class=\"tbl\"><tr><th>Nullstellen</th><th>Fundamentalsystem</th><th>allgemeine Lösung</th></tr>\n       <tr><td>$\\lambda_1\\neq\\lambda_2$ reell</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>\n       <tr><td>$\\lambda$ doppelt</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>\n       <p>Bei komplexen Nullstellen nehmen wir Real- und Imaginärteil der komplexen Lösung $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$.\n       Dasselbe Vorgehen funktioniert für Gleichungen höherer Ordnung: Einer $k$-fachen Nullstelle $\\lambda$ entsprechen die Funktionen $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$.</p>",
    {
     "fig": "v3-rad2",
     "caption": "Lösung der Gleichung $y'' + py' + qy = 0$ mit den Anfangsbedingungen $y(0) = 1$, $y'(0) = 0$. Bei komplexen Nullstellen oszilliert die Lösung, bei reellen nicht; das Vorzeichen des Realteils der Nullstellen entscheidet, ob die Lösung abklingt oder wächst."
    }
   ],
   "examples": [
    {
     "task": "Löse das Anfangswertproblem $y'' - y' - 6y = 0$, $y(0) = 1$, $y'(0) = 8$.",
     "steps": [
      "Die charakteristische Gleichung $\\lambda^{2} - \\lambda - 6 = 0$ hat die Nullstellen $\\lambda_1 = 3$, $\\lambda_2 = -2$.",
      "Allgemeine Lösung $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$, Ableitung $y' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$.",
      "Bedingungen: $C_1 + C_2 = 1$, $3C_1 - 2C_2 = 8$, daraus $C_1 = 2$, $C_2 = -1$.",
      "<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$.</strong>"
     ]
    },
    {
     "task": "Bestimme ein Fundamentalsystem der Gleichung $y'' + 4y' + 13y = 0$ und berechne seine Wronski-Determinante.",
     "steps": [
      "$\\lambda^{2} + 4\\lambda + 13 = 0$, $D = 16 - 52 = -36$, Nullstellen $\\lambda = -2\\pm 3\\mathrm{i}$.",
      "Fundamentalsystem: $y_1 = \\mathrm{e}^{-2x}\\cos 3x$, $y_2 = \\mathrm{e}^{-2x}\\sin 3x$.",
      "$W = y_1y_2' - y_1'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.",
      "<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>, im Einklang mit der Formel von Liouville $W(x) = W(0)\\,\\mathrm{e}^{-4x}$."
     ]
    }
   ]
  },
  "v3-nehomogenne": {
   "title": "Inhomogene Differentialgleichungen 2. Ordnung",
   "summary": "Struktur der Lösung $y = y_h + y_p$, Ansatzmethode (Methode der unbestimmten Koeffizienten) für spezielle rechte Seiten und Variation der Konstanten.",
   "theory": [
    "<p>Die allgemeine Lösung der Gleichung $y'' + py' + qy = f(x)$ ist $y = y_h + y_p$, wobei $y_h = C_1y_1 + C_2y_2$ die allgemeine Lösung der zugehörigen homogenen Gleichung ist\n       und $y_p$ eine beliebige (partikuläre) Lösung der inhomogenen Gleichung. Ist $f = f_1 + f_2$, so können wir partikuläre Lösungen für $f_1$ und $f_2$\n       getrennt suchen und addieren (<strong>Superpositionsprinzip</strong>).</p>",
    "<p><strong>Ansatzmethode (Methode der unbestimmten Koeffizienten)</strong> für spezielle rechte Seiten. Ist $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$\n       mit Polynomen $P_m, Q_n$, so suchen wir eine partikuläre Lösung in der Form\n       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$\n       wobei $R_N, S_N$ Polynome vom Grad $N$ mit unbekannten Koeffizienten sind und $k$ die Vielfachheit der Zahl $\\alpha + \\beta\\mathrm{i}$ als Nullstelle der charakteristischen Gleichung ist\n       ($k = 0$, falls sie keine Nullstelle ist). Die Koeffizienten bestimmen wir durch Einsetzen in die Gleichung und Koeffizientenvergleich.</p>\n       <table class=\"tbl\"><tr><th>rechte Seite $f(x)$</th><th>Ansatz für $y_p$ (ohne Resonanz)</th></tr>\n       <tr><td>$ax + b$</td><td>$Ax + B$ (falls $q\\neq 0$)</td></tr>\n       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>\n       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>\n       <p>Ist $\\alpha + \\beta\\mathrm{i}$ eine Nullstelle der charakteristischen Gleichung (<strong>Resonanz</strong>), so multiplizieren wir den Ansatz mit $x$, bei einer doppelten Nullstelle mit $x^{2}$.</p>",
    "<p>Die <strong>Variation der Konstanten</strong> funktioniert für jede stetige rechte Seite. Wir suchen die Lösung in der Form $y = C_1(x)y_1 + C_2(x)y_2$ mit der Bedingung\n       $C_1'y_1 + C_2'y_2 = 0$. Durch Einsetzen erhalten wir das System\n       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$\n       dessen Lösung $C_1' = -\\frac{y_2 f}{W}$, $C_2' = \\frac{y_1 f}{W}$ ist, wobei $W$ die Wronski-Determinante ist. Die Methode brauchen wir zum Beispiel bei den rechten Seiten\n       $\\frac{1}{\\cos x}$, $\\tan x$, $\\ln x$ oder $\\frac{\\mathrm{e}^{x}}{x}$.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme die allgemeine Lösung der Gleichung $y'' - 3y' + 2y = \\mathrm{e}^{x}$.",
     "steps": [
      "$\\lambda^{2} - 3\\lambda + 2 = 0$ hat die Nullstellen $1$ und $2$, also $y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$.",
      "Die Zahl $\\alpha = 1$ ist eine einfache Nullstelle (Resonanz), deshalb $y_p = Ax\\mathrm{e}^{x}$. Dann ist $y_p' = A(1 + x)\\mathrm{e}^{x}$, $y_p'' = A(2 + x)\\mathrm{e}^{x}$.",
      "Wir setzen ein: $A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$, also $A = -1$.",
      "<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$.</strong>"
     ]
    },
    {
     "task": "Löse mit der Variation der Konstanten die Gleichung $y'' + y = \\dfrac{1}{\\cos x}$ auf dem Intervall $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$.",
     "steps": [
      "$y_1 = \\cos x$, $y_2 = \\sin x$, $W = \\cos^{2} x + \\sin^{2} x = 1$.",
      "$C_1' = -\\frac{\\sin x}{\\cos x}$, also $C_1 = \\ln(\\cos x) + K_1$; $C_2' = \\frac{\\cos x}{\\cos x} = 1$, also $C_2 = x + K_2$.",
      "<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$.</strong>"
     ]
    }
   ]
  },
  "v3-kmitanie": {
   "title": "Schwingungen: ungedämpft, gedämpft und erzwungen",
   "summary": "Die Gleichung $mx'' + cx' + kx = F(t)$, Schwingfall, aperiodischer Grenzfall und Kriechfall, erzwungene Schwingungen und Resonanz.",
   "theory": [
    "<p>Ein Körper der Masse $m$ an einer Feder mit der Federkonstante $k$, gedämpft durch eine geschwindigkeitsproportionale Kraft (Koeffizient $c$) und angetrieben durch eine äußere Kraft $F(t)$, gehorcht der Gleichung\n       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$\n       wobei $\\omega_0 = \\sqrt{k/m}$ die <strong>Eigenkreisfrequenz</strong> und $\\delta = \\frac{c}{2m}$ die <strong>Abklingkonstante</strong> ist.\n       Dieselbe Gleichung beschreibt die Ladung in einem $RLC$-Reihenschwingkreis: $Lq'' + Rq' + \\frac{1}{C}q = U(t)$.</p>\n       <p><strong>Ungedämpfte Schwingungen</strong> ($c = 0$, $F = 0$): $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$ mit der Amplitude\n       $A = \\sqrt{C_1^{2} + C_2^{2}}$ und der Periode $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$.</p>",
    "<p><strong>Gedämpfte Schwingungen</strong> ($F = 0$). Die charakteristische Gleichung $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$ hat die Nullstellen $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$:</p>\n       <ul><li>$\\delta \\lt \\omega_0$ (<strong>schwache Dämpfung, Schwingfall</strong>, $c^{2} \\lt 4mk$): $x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$,\n       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$; Schwingungen mit exponentiell abnehmender Amplitude;</li>\n       <li>$\\delta = \\omega_0$ (<strong>aperiodischer Grenzfall</strong>, $c = 2\\sqrt{mk}$): $x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$;</li>\n       <li>$\\delta \\gt \\omega_0$ (<strong>starke Dämpfung, Kriechfall</strong>): Summe zweier abklingender Exponentialfunktionen, aperiodische Bewegung.</li></ul>",
    {
     "fig": "v3-tlmenie",
     "caption": "Auslenkung $x(t)$ für $\\omega_0 = 2$, $x(0) = 1$, $x'(0) = 0$. Die gestrichelten Kurven $\\pm\\mathrm{e}^{-\\delta t}$ begrenzen die gedämpften Schwingungen. Bei $\\delta = 2$ tritt der aperiodische Grenzfall ein."
    },
    "<p><strong>Erzwungene Schwingungen</strong>, $F(t) = F_0\\cos\\omega t$. Ohne Dämpfung und für $\\omega\\neq\\omega_0$ ist die partikuläre Lösung\n       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$. Bei $\\omega = \\omega_0$ tritt <strong>Resonanz</strong> ein: $x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$,\n       und die Amplitude wächst unbeschränkt. Mit Dämpfung klingen die freien Schwingungen ab, und es bleibt ein eingeschwungener Zustand mit der Amplitude\n       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}},$$\n       die bei $\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$ am größten ist (falls $\\omega_0^{2} \\gt 2\\delta^{2}$).</p>",
    {
     "fig": "v3-rezonancia",
     "caption": "Resonanzkurve $A(\\omega)$ für $\\omega_0 = 2$ und $F_0/m = 1$. Bei schwacher Dämpfung ist das Maximum scharf und liegt nahe der Eigenfrequenz (gestrichelte Linie)."
    }
   ],
   "examples": [
    {
     "task": "Ein Körper der Masse $1\\,\\mathrm{kg}$ an einer Feder mit der Federkonstante $16\\,\\mathrm{N/m}$ ist mit dem Koeffizienten $c = 4\\,\\mathrm{kg/s}$ gedämpft. Zu Beginn ist er um $0{,}1\\,\\mathrm{m}$ ausgelenkt und wird aus der Ruhe losgelassen. Bestimme $x(t)$.",
     "steps": [
      "$x'' + 4x' + 16x = 0$, also $\\delta = 2$, $\\omega_0 = 4$. Da $\\delta \\lt \\omega_0$, handelt es sich um schwache Dämpfung.",
      "Nullstellen $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$, $\\omega_d = 2\\sqrt{3}$, $x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$.",
      "$x(0) = C_1 = 0{,}1$; $x'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$, also $C_2 = \\frac{0{,}1}{\\sqrt{3}}$.",
      "<strong>$x(t) = 0{,}1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$.</strong>"
     ]
    },
    {
     "task": "Löse das Problem $x'' + 9x = 6\\cos 3t$, $x(0) = 0$, $x'(0) = 0$.",
     "steps": [
      "Die Erregerfrequenz ist gleich der Eigenfrequenz ($\\omega = \\omega_0 = 3$), es tritt Resonanz ein: $x_p = t(A\\cos 3t + B\\sin 3t)$.",
      "Einsetzen ergibt $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$, also $A = 0$, $B = 1$, $x_p = t\\sin 3t$.",
      "Allgemeine Lösung $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$; aus den Bedingungen folgt $C_1 = 0$ und $3C_2 = 0$.",
      "<strong>$x(t) = t\\sin 3t$</strong>, die Amplitude wächst linear mit der Zeit."
     ]
    }
   ]
  },
  "v3-sustavy": {
   "title": "Systeme linearer Differentialgleichungen und Phasenporträt",
   "summary": "Das System $\\mathbf{x}' = A\\mathbf{x}$, Lösung mithilfe von Eigenwerten und Eigenvektoren, Klassifikation des Gleichgewichtspunkts.",
   "theory": [
    "<p>Ein System linearer Gleichungen 1. Ordnung mit konstanten Koeffizienten hat die Form $\\mathbf{x}' = A\\mathbf{x}$, wobei $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$ und $A$ eine\n       quadratische Matrix ist. Die Lösungen bilden einen Vektorraum der Dimension $n$; eine Matrix, deren Spalten $n$ linear unabhängige Lösungen sind, heißt\n       <strong>Fundamentalmatrix</strong>. Jede Gleichung $n$-ter Ordnung lässt sich als System schreiben (z. B. setzen wir für $y'' + py' + qy = 0$ $x_1 = y$, $x_2 = y'$),\n       und umgekehrt lässt sich ein $2\\times 2$-System mit dem <strong>Eliminationsverfahren</strong> in eine Gleichung 2. Ordnung umwandeln.</p>",
    "<p><strong>Matrixmethode.</strong> Wir suchen eine Lösung $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$. Einsetzen ergibt $A\\mathbf{v} = \\lambda\\mathbf{v}$: $\\lambda$ ist ein\n       <strong>Eigenwert</strong> der Matrix $A$ (Nullstelle der Gleichung $\\det(A - \\lambda I) = 0$) und $\\mathbf{v}$ ein zugehöriger Eigenvektor.</p>\n       <ul><li>Verschiedene reelle $\\lambda_1, \\lambda_2$: $\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$.</li>\n       <li>Komplexe $\\lambda = \\alpha\\pm\\beta\\mathrm{i}$ mit dem Vektor $\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$: Reelle Lösungen sind Real- und Imaginärteil von\n       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$, also $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$ und $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$.</li>\n       <li>Doppeltes $\\lambda$ mit nur einem Eigenvektor $\\mathbf{v}$: Die zweite Lösung ist $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$, wobei $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$.</li></ul>",
    "<p>Das <strong>Phasenporträt</strong> eines ebenen Systems zeigt die Trajektorien $(x(t), y(t))$ in der $xy$-Ebene. Der Punkt $\\mathbf{0}$ ist ein Gleichgewichtspunkt (stationärer Punkt) und bei\n       $\\det A\\neq 0$ der einzige. Seinen Typ bestimmen die Eigenwerte bzw. Spur $\\mathrm{tr}\\,A$ und Determinante:</p>\n       <table class=\"tbl\"><tr><th>Eigenwerte</th><th>Typ</th><th>Stabilität</th></tr>\n       <tr><td>reell, mit entgegengesetzten Vorzeichen ($\\det A \\lt 0$)</td><td>Sattel</td><td>instabil</td></tr>\n       <tr><td>reell, mit gleichem Vorzeichen</td><td>Knoten</td><td>stabil für $\\lambda \\lt 0$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\alpha\\neq 0$</td><td>Strudel (Spiralen)</td><td>stabil für $\\alpha \\lt 0$</td></tr>\n       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>Zentrum (geschlossene Kurven)</td><td>stabil, nicht asymptotisch</td></tr></table>",
    {
     "fig": "v3-fazovy",
     "caption": "Phasenporträt des Systems $x' = a_{11}x + a_{12}y$, $y' = a_{21}x + a_{22}y$. Die orangen Geraden sind die Richtungen der Eigenvektoren (bei reellen Eigenwerten), die kleinen Dreiecke zeigen die Bewegungsrichtung mit wachsendem $t$. Durchlaufe durch Ändern der Matrixeinträge alle Typen aus der Tabelle."
    }
   ],
   "examples": [
    {
     "task": "Löse das System $x' = x + 2y$, $y' = 2x + y$ mit der Anfangsbedingung $x(0) = 3$, $y(0) = 1$.",
     "steps": [
      "$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$, also $\\lambda_1 = 3$, $\\lambda_2 = -1$.",
      "Eigenvektoren: Für $\\lambda_1 = 3$ ist $\\mathbf{v}_1 = (1, 1)^{T}$, für $\\lambda_2 = -1$ ist $\\mathbf{v}_2 = (1, -1)^{T}$.",
      "$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$. Bedingungen: $C_1 + C_2 = 3$, $C_1 - C_2 = 1$, also $C_1 = 2$, $C_2 = 1$.",
      "<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$, $y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$.</strong> Die Eigenwerte haben entgegengesetzte Vorzeichen, der Gleichgewichtspunkt ist ein Sattel."
     ]
    },
    {
     "task": "Bestimme den Typ des Gleichgewichtspunkts des Systems $x' = y$, $y' = -5x - 2y$ und vergleiche es mit einer Gleichung 2. Ordnung.",
     "steps": [
      "$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$, $\\mathrm{tr}\\,A = -2$, $\\det A = 5$, charakteristische Gleichung $\\lambda^{2} + 2\\lambda + 5 = 0$.",
      "Die Eigenwerte $-1\\pm 2\\mathrm{i}$ haben negativen Realteil: <strong>stabiler Strudel</strong>, die Trajektorien nähern sich auf Spiralen dem Ursprung.",
      "Das System ist eine andere Schreibweise der Gleichung $x'' + 2x' + 5x = 0$ (gedämpfte Schwingungen); ihre Lösung ist $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$."
     ]
    }
   ]
  },
  "v3-laplace": {
   "title": "Laplace-Transformation",
   "summary": "Definition, Korrespondenztabelle, Bild der Ableitung, Rücktransformation mittels Partialbruchzerlegung und Lösung von Anfangswertproblemen.",
   "theory": [
    "<p>Die <strong>Laplace-Transformation</strong> ordnet einer für $t \\ge 0$ definierten Funktion $f(t)$ eine Funktion der komplexen (für uns reellen) Variablen $s$ zu:\n       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$\n       Das Integral konvergiert für $s \\gt s_0$, wenn $f$ stückweise stetig und von <strong>exponentieller Ordnung</strong> ist, d. h. $|f(t)| \\le M\\mathrm{e}^{s_0t}$.\n       Zum Beispiel ist $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$ für $s \\gt a$. Die Transformation ist linear\n       und für stetige Funktionen injektiv, sodass es zur Bildfunktion $F$ genau eine Originalfunktion $f = \\mathcal{L}^{-1}\\{F\\}$ gibt.</p>",
    "<table class=\"tbl\"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>\n       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>\n       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>\n       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>\n       <p>Hier ist $u$ die Heaviside-Funktion (Einheitssprung). Das Bild der Faltung $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$ ist das Produkt $F(s)G(s)$.</p>",
    "<p><strong>Lösung eines Anfangswertproblems.</strong> Die Regel für das Bild der Ableitung verwandelt eine lineare Gleichung mit konstanten Koeffizienten in eine algebraische Gleichung für $Y(s)$,\n       wobei die Anfangsbedingungen automatisch eingearbeitet werden. Daraus lösen wir nach $Y(s)$ auf (meist eine rationale Funktion), zerlegen sie in\n       <strong>Partialbrüche</strong> und bestimmen mithilfe der Korrespondenztabelle $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$. Die Methode ist besonders vorteilhaft bei unstetigen oder impulsförmigen rechten Seiten.</p>",
    {
     "fig": "v3-laplace",
     "caption": "Lösungsweg: Transformation, algebraische Umformung im Bildbereich und Rücktransformation."
    }
   ],
   "examples": [
    {
     "task": "Bestimme die Laplace-Transformierte der Funktion $f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$.",
     "steps": [
      "Wir nutzen die Linearität und die Korrespondenztabelle: $\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$, $\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$, $\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$.",
      "<strong>$F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong> für $s \\gt 2$."
     ]
    },
    {
     "task": "Löse mit der Laplace-Transformation das Problem $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$.",
     "steps": [
      "Wir transformieren: $s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$, also $(s^{2} + 3s + 2)Y = s + 3$.",
      "$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$ (Partialbrüche, z. B. mit der Zuhaltemethode).",
      "<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$.</strong> Probe: $y(0) = 1$, $y'(0) = -2 + 2 = 0$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$A = {@0}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, kde $\\mathrm{tr}\\,A = {@2}$ a $\\det A = {@3}$. Korene sú $\\lambda_1 = {@4}$ a $\\lambda_2 = {@5}$.": "$A = {@0}$. Die charakteristische Gleichung $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, wobei $\\mathrm{tr}\\,A = {@2}$ und $\\det A = {@3}$. Die Nullstellen sind $\\lambda_1 = {@4}$ und $\\lambda_2 = {@5}$.",
  "$C_1 + C_2 = {@0}$ a ${@1} = {@2}$": "$C_1 + C_2 = {@0}$ und ${@1} = {@2}$",
  "$C_1 = {@0}$ a ${@1} = {@2}$": "$C_1 = {@0}$ und ${@1} = {@2}$",
  "$M_y = {@0}$, $N_x = {@1}$, teda $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ závisí len od $x$. Preto $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrola: $(\\mu M)_y = {@11}$ a $(\\mu N)_x = {@12}$.": "$M_y = {@0}$, $N_x = {@1}$, also hängt $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ nur von $x$ ab. Deshalb $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrolle: $(\\mu M)_y = {@11}$ und $(\\mu N)_x = {@12}$.",
  "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, teda asi ${@8}$ jedincov.": "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ mit $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, also etwa ${@8}$ Individuen.",
  "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-{@4}t} = 1$, teda $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ roka.": "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Die Bedingung $P = \\frac{K}{2}$ bedeutet $A\\mathrm{e}^{-{@4}t} = 1$, also $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ Jahre.",
  "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, z merania $k = {@2} \\approx {@3}$. Z podmienky ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ máme $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minúty.": "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, aus der Messung $k = {@2} \\approx {@3}$. Aus der Bedingung ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ erhalten wir $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ Minuten.",
  "$\\lambda = {@0}$ (dvojnásobný koreň)": "$\\lambda = {@0}$ (doppelte Nullstelle)",
  "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ a $\\mathcal{L}\\{y'\\} = sY{@2}$. Po dosadení $({@3})Y = {@4}{@5}{@6}$, teda ${@7}$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ und $\\mathcal{L}\\{y'\\} = sY{@2}$. Nach dem Einsetzen $({@3})Y = {@4}{@5}{@6}$, also ${@7}$.",
  "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}": "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, Diskriminante der charakteristischen Gleichung $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}",
  "$\\omega_0 = {@0}$, riešenie $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ s $C_1 = x(0) = {@3}$ a ${@4}C_2 = x'(0) = {@5}$, teda $C_2 = {@6}$. Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.": "$\\omega_0 = {@0}$, Lösung $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ mit $C_1 = x(0) = {@3}$ und ${@4}C_2 = x'(0) = {@5}$, also $C_2 = {@6}$. Amplitude $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.",
  "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ máme $\\mathrm{e}^{-t/\\tau} = {@2}$, teda $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.": "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Aus der Bedingung $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ erhalten wir $\\mathrm{e}^{-t/\\tau} = {@2}$, also $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.",
  "$\\varphi'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú": "$\\varphi'(y) = 0$, also ist $\\varphi$ eine Konstante, die wir gleich null wählen",
  "$\\varphi'(y) = {@0}$, teda $\\varphi(y) = {@1}$": "$\\varphi'(y) = {@0}$, also $\\varphi(y) = {@1}$",
  "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Z podmienky $2^{-t/{@1}} = {@2}$ logaritmovaním $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.": "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Aus der Bedingung $2^{-t/{@1}} = {@2}$ durch Logarithmieren $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.",
  "$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov: pri $x^{2}$: ${@0} = {@1}$, $A = {@2}$; pri $x$: ${@3} = {@4}$, $B = {@5}$; absolútny člen: ${@6} = {@7}$, $C = {@8}$.": "$y_p' = 2Ax + B$, $y_p'' = 2A$. Nach dem Einsetzen und Koeffizientenvergleich: bei $x^{2}$: ${@0} = {@1}$, $A = {@2}$; bei $x$: ${@3} = {@4}$, $B = {@5}$; Absolutglied: ${@6} = {@7}$, $C = {@8}$.",
  "$y_p' = A$, $y_p'' = 0$. Dosadíme: ${@0}{@1} = {@2}$. Porovnaním koeficientov: pri $x$ je ${@3} = {@4}$, teda $A = {@5}$; absolútny člen ${@6} = {@7}$, teda $B = {@8}$.": "$y_p' = A$, $y_p'' = 0$. Wir setzen ein: ${@0}{@1} = {@2}$. Durch Koeffizientenvergleich: Bei $x$ ist ${@3} = {@4}$, also $A = {@5}$; Absolutglied ${@6} = {@7}$, also $B = {@8}$.",
  "${@0}$, teda $K = {@1}$ a $m = {@2}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = {@3}$.": "${@0}$, also $K = {@1}$ und $m = {@2}$. Das stimmt mit der Formel von Liouville überein: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ mit $p = {@3}$.",
  ", teda $a = {@0}$": ", also $a = {@0}$",
  "Absolútny člen v čitateli kazí homogenitu. Takú rovnicu treba najprv posunúť do priesečníka priamok.": "Das Absolutglied im Zähler zerstört die Homogenität. Eine solche Gleichung muss man zuerst in den Schnittpunkt der Geraden verschieben.",
  "Aké množstvo soli (v kg) je rovnovážne, teda pri ňom je $x' = 0$?": "Welche Salzmenge (in kg) ist die Gleichgewichtsmenge, d. h. bei welcher ist $x' = 0$?",
  "Aké napätie (vo voltoch) bude na kondenzátore? {@0}": "Welche Spannung (in Volt) liegt am Kondensator an? {@0}",
  "Akú smernicu má úsečka smerového poľa rovnice $y' = {@0}$ v bode $[{@1}; {@2}]$?": "Welche Steigung hat das Linienelement des Richtungsfelds der Gleichung $y' = {@0}$ im Punkt $[{@1}; {@2}]$?",
  "Akú teplotu bude mať teleso? Zaokrúhli na desatiny stupňa.": "Welche Temperatur wird der Körper haben? Runde auf Zehntel Grad.",
  "Aký je celkový koeficient pri $\\frac{1}{{@0}}$ v $Y(s)$, teda $A$?": "Wie lautet der gesamte Koeffizient bei $\\frac{1}{{@0}}$ in $Y(s)$, also $A$?",
  "Aký je súčin koreňov?": "Wie groß ist das Produkt der Nullstellen?",
  "Amplitúda nie je súčet $|C_1| + |C_2|$, ale $\\sqrt{C_1^{2} + C_2^{2}}$ (zloženie kosínusu a sínusu s rovnakou frekvenciou).": "Die Amplitude ist nicht die Summe $|C_1| + |C_2|$, sondern $\\sqrt{C_1^{2} + C_2^{2}}$ (Überlagerung von Kosinus und Sinus mit gleicher Frequenz).",
  "Amplitúda vynútených kmitov v závislosti od frekvencie": "Amplitude erzwungener Schwingungen in Abhängigkeit von der Frequenz",
  "Bernoulliho rovnicu $y'{@0} = {@1}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi. Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).": "Die Bernoulli-Gleichung $y'{@0} = {@1}$ führen wir durch die Substitution $z = y^{k}$ in eine lineare Gleichung $z' + Pz = Q$ mit konstanten Koeffizienten über. Bestimme $k$, $P$ und $Q$ (Brüche in der Form $a/b$).",
  "Charakteristická rovnica ${@0}$ má diskriminant $D = {@1}$ a korene {@2}. {@3} je všeobecné riešenie ${@4}$.": "Die charakteristische Gleichung ${@0}$ hat die Diskriminante $D = {@1}$ und die Nullstellen {@2}. {@3} ist die allgemeine Lösung ${@4}$.",
  "Charakteristická rovnica ${@0}$ má korene $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, teda $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pre $t = 0$: $C_1 + C_2 = {@7}$ a ${@8} = {@9}$, odkiaľ $C_1 = {@10}$, $C_2 = {@11}$.": "Die charakteristische Gleichung ${@0}$ hat die Nullstellen $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Aus der ersten Zeile von $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ für $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, also $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Für $t = 0$: $C_1 + C_2 = {@7}$ und ${@8} = {@9}$, woraus $C_1 = {@10}$, $C_2 = {@11}$.",
  "Charakteristická rovnica ${@0}$ má korene ${@1}$ a ${@2}$, takže ${@3}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Po dosadení sa členy s $x$ odčítajú a zostane $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, teda $A = {@16}$.": "Die charakteristische Gleichung ${@0}$ hat die Nullstellen ${@1}$ und ${@2}$, also ist ${@3}$ eine einfache Nullstelle (Resonanz), und im Ansatz $y_p$ steht der Faktor $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Nach dem Einsetzen heben sich die Glieder mit $x$ auf, und es bleibt $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, also $A = {@16}$.",
  "Charakteristická rovnica ${@0}$ má korene {@1}, preto ${@2}$. Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu {@3}, ktorej riešenie je $C_1 = {@4}$, $C_2 = {@5}$.": "Die charakteristische Gleichung ${@0}$ hat die Nullstellen {@1}, deshalb ${@2}$. Durch Einsetzen von $x = 0$ in $y$ und $y'$ erhalten wir das System {@3}, dessen Lösung $C_1 = {@4}$, $C_2 = {@5}$ ist.",
  "Charakteristická rovnica ${@0}$ má {@1}. Pravá strana je {@2}{@3}, teda $\\alpha = {@4}$, a to {@5} charakteristickej rovnice ($k = {@6}$). Preto $y_p = {@7}$.": "Die charakteristische Gleichung ${@0}$ hat {@1}. Die rechte Seite ist {@2}{@3}, also $\\alpha = {@4}$, und dieses ist {@5} der charakteristischen Gleichung ($k = {@6}$). Deshalb $y_p = {@7}$.",
  "Charakteristická rovnica (po vydelení koeficientom pri $y''$) je $\\lambda^{2} + p\\lambda + q = 0$. Aký je súčet jej koreňov?": "Die charakteristische Gleichung (nach Division durch den Koeffizienten bei $y''$) ist $\\lambda^{2} + p\\lambda + q = 0$. Wie groß ist die Summe ihrer Nullstellen?",
  "Delil si len číslom ${@0}$, ale v riešení je $x^{2}$, teda $x_0^{2}$.": "Du hast nur durch ${@0}$ dividiert, aber in der Lösung steht $x^{2}$, also $x_0^{2}$.",
  "Derivácia $(C_1 + C_2x){@0}$ má pri $x = 0$ hodnotu ${@1}C_1 + C_2$; zabudol si na člen z derivácie exponenciály.": "Die Ableitung von $(C_1 + C_2x){@0}$ hat bei $x = 0$ den Wert ${@1}C_1 + C_2$; du hast das Glied aus der Ableitung der Exponentialfunktion vergessen.",
  "Derivácia $C_2\\sin {@0}t$ je ${@1}C_2\\cos {@2}t$, preto $C_2 = \\frac{x'(0)}{\\omega_0}$, nie $x'(0)$.": "Die Ableitung von $C_2\\sin {@0}t$ ist ${@1}C_2\\cos {@2}t$, deshalb $C_2 = \\frac{x'(0)}{\\omega_0}$, nicht $x'(0)$.",
  "Derivácie $y_p$ nie sú nulové: $y_p' = {@0}A{@1}$ a $y_p'' = {@2}A{@3}$ treba tiež dosadiť.": "Die Ableitungen von $y_p$ sind nicht null: $y_p' = {@0}A{@1}$ und $y_p'' = {@2}A{@3}$ müssen ebenfalls eingesetzt werden.",
  "Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.": "Die Determinante ist negativ, die Eigenwerte sind reell mit entgegengesetzten Vorzeichen: Sattel.",
  "Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.": "Setze in die allgemeine Lösung $x = 0$ und $y = y_0$ ein und drücke $C$ aus.",
  "Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme {@0}${@1}$. Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = {@2}$ a $\\lambda_1\\lambda_2 = {@3}$, korene sú {@4}. Všeobecné riešenie je ${@5}$.": "Durch Einsetzen von $y = \\mathrm{e}^{\\lambda x}$ erhalten wir {@0}${@1}$. Nach dem Satz von Vieta ist $\\lambda_1 + \\lambda_2 = {@2}$ und $\\lambda_1\\lambda_2 = {@3}$, die Nullstellen sind {@4}. Die allgemeine Lösung ist ${@5}$.",
  "Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, odkiaľ $C = {@3}$. Riešenie Cauchyho úlohy je $y = {@4}$.": "Wir setzen $x = 0$ ein: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, woraus $C = {@3}$. Die Lösung des Anfangswertproblems ist $y = {@4}$.",
  "Dosadíme $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, teda $({@3} - {@4})A = {@5}$ a $A = {@6}$. {@7}": "Wir setzen $x_p = A\\cos {@0}$ ein: $x_p'' = -{@1}A\\cos {@2}$, also $({@3} - {@4})A = {@5}$ und $A = {@6}$. {@7}",
  "Dosadíme: $C\\cdot {@0}^{2}{@1} = {@2}$, teda ${@3}C = {@4}$ a $C = {@5}$.": "Wir setzen ein: $C\\cdot {@0}^{2}{@1} = {@2}$, also ${@3}C = {@4}$ und $C = {@5}$.",
  "Dosadíme: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, teda $\\frac{C}{{@4}} = {@5}$ a $C = {@6}$. (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = {@7} + C$.)": "Wir setzen ein: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, also $\\frac{C}{{@4}} = {@5}$ und $C = {@6}$. (Kontrolle: Die linke Seite der Gleichung ist $(xy)'$ und $xy = {@7} + C$.)",
  "Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.": "Setze $P = \\frac{K}{2}$ in die Lösung $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ ein; du erhältst $A\\mathrm{e}^{-rt} = 1$.",
  "Dosaď $t = 0$ a vyrieš sústavu pre konštanty. Zadaj $C_1$ a $C_2$.": "Setze $t = 0$ ein und löse das System für die Konstanten. Gib $C_1$ und $C_2$ ein.",
  "Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.": "Setze $tx$ statt $x$ und $ty$ statt $y$ ein. Bei einer homogenen Gleichung ändert sich die rechte Seite nicht.",
  "Dosaď $x = 0$ do $y_1, y_2, y_1', y_2'$.": "Setze $x = 0$ in $y_1, y_2, y_1', y_2'$ ein.",
  "Dosaď $x = 0$ do všeobecného riešenia a jeho derivácie a z vzniknutej sústavy urči $C_1$.": "Setze $x = 0$ in die allgemeine Lösung und ihre Ableitung ein und bestimme aus dem entstehenden System $C_1$.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.": "Setze $x = x_0$, $y = y_0$ in die allgemeine Lösung ein und drücke $C$ aus.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.": "Setze $x = x_0$, $y = y_0$ in die allgemeine Lösung ein und löse die lineare Gleichung für $C$.",
  "Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.": "Setze $x_p$ in die Gleichung ein: $(\\omega_0^{2} - \\omega^{2})A = F_0$.",
  "Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.": "Setze $y_p = Ax + B$ in die Gleichung ein und vergleiche die Koeffizienten bei $x$ und die Absolutglieder.",
  "Dosaď $y_p = A{@0}$ do rovnice a urči $A$.": "Setze $y_p = A{@0}$ in die Gleichung ein und bestimme $A$.",
  "Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.": "Setze $y_p$ in die Gleichung ein und vergleiche die Koeffizienten beim Kosinus und beim Sinus; du erhältst ein System aus zwei Gleichungen für $A$, $B$.",
  "Dosaď konštantu $y_p = K$ do rovnice ($y_p' = 0$) a pozorne vyjadri $K$.": "Setze die Konstante $y_p = K$ in die Gleichung ein ($y_p' = 0$) und drücke $K$ sorgfältig aus.",
  "Druhá derivácia kosínusu je záporná: $x_p'' = -{@0}A\\cos {@1}$.": "Die zweite Ableitung des Kosinus ist negativ: $x_p'' = -{@0}A\\cos {@1}$.",
  "Exponenciálne neklesá samotná teplota telesa, ale jej rozdiel od teploty okolia $T - T_o$.": "Exponentiell fällt nicht die Temperatur des Körpers selbst, sondern ihre Differenz zur Umgebungstemperatur $T - T_o$.",
  "Exponenciálny a logistický rast": "Exponentielles und logistisches Wachstum",
  "Exponent je reálna časť koreňov $\\alpha = -\\frac{p}{2}$; skontroluj jej znamienko.": "Der Exponent ist der Realteil der Nullstellen $\\alpha = -\\frac{p}{2}$; überprüfe sein Vorzeichen.",
  "Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, teda $\\mathrm{arctg}\\,y = {@1} + C$ a $y = \\mathrm{tg}({@2} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}({@3}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.": "Die Funktion $1 + y^{2}$ hat keine Nullstellen, stationäre Lösungen gibt es nicht. Wir trennen die Variablen: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, also $\\mathrm{arctg}\\,y = {@1} + C$ und $y = \\mathrm{tg}({@2} + C)$. Die Konstante steht im Argument; zum Beispiel erfüllt $y = \\mathrm{tg}({@3}) + C$ die Gleichung für $C\\neq 0$ nicht.",
  "Funkcie ${@0}$ tvoria fundamentálny systém rovnice ${@1} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.": "Die Funktionen ${@0}$ bilden ein Fundamentalsystem der Gleichung ${@1} = 0$. Ihre Wronski-Determinante hat die Form $W(x) = K\\mathrm{e}^{mx}$. Bestimme $K$ und $m$.",
  "Fázový portrét lineárnej sústavy": "Phasenporträt eines linearen Systems",
  "Goniometrické funkcie patria ku komplexným koreňom ($D \\lt 0$). Aký je tu diskriminant?": "Trigonometrische Funktionen gehören zu komplexen Nullstellen ($D \\lt 0$). Wie groß ist hier die Diskriminante?",
  "Homogénna rovnica $y'{@0} = 0$ dáva $y' = {@1}$; skontroluj znamienko v exponente.": "Die homogene Gleichung $y'{@0} = 0$ ergibt $y' = {@1}$; überprüfe das Vorzeichen im Exponenten.",
  "Homogénna rovnica $y'{@0} = 0$ má riešenie $y_h = C{@1}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$: ${@2}K = {@3}$, teda $K = {@4}$. Všeobecné riešenie je ${@5}$.": "Die homogene Gleichung $y'{@0} = 0$ hat die Lösung $y_h = C{@1}$. Die partikuläre Lösung suchen wir als Konstante $y_p = K$: ${@2}K = {@3}$, also $K = {@4}$. Die allgemeine Lösung ist ${@5}$.",
  "Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y')^{3}$, rád nezvyšuje.": "Suche die höchste Ordnung der Ableitung. Ein Exponent über der Klammer, zum Beispiel $(y')^{3}$, erhöht die Ordnung nicht.",
  "Integračný faktor je $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrovaním $y{@3} = {@4} + B$, teda $y = {@5} + B{@6}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Z podmienky ${@12} + B = {@13}$, teda $B = {@14}$. Odpoveď: $A = {@15}$, $B = {@16}$.": "Der integrierende Faktor ist $\\mu = {@0}$: $(y{@1})' = {@2}$. Durch Integration $y{@3} = {@4} + B$, also $y = {@5} + B{@6}$ (die partikuläre Lösung können wir auch durch Einsetzen von $y_p = A{@7}$ finden: $A({@8}{@9}) = {@10}$, $A = {@11}$). Aus der Bedingung ${@12} + B = {@13}$, also $B = {@14}$. Antwort: $A = {@15}$, $B = {@16}$.",
  "Integračný faktor je ${@0}$ a riešenie má tvar $y = {@1} + \\frac{C}{{@2}}$. Urči $C$ zo začiatočnej podmienky.": "Der integrierende Faktor ist ${@0}$, und die Lösung hat die Form $y = {@1} + \\frac{C}{{@2}}$. Bestimme $C$ aus der Anfangsbedingung.",
  "Integruj $M$ podľa $x$ (bez $\\varphi(y)$) a túto časť $F$ vyčísli v bode $[{@0}; {@1}]$.": "Integriere $M$ nach $x$ (ohne $\\varphi(y)$) und werte diesen Teil von $F$ im Punkt $[{@0}; {@1}]$ aus.",
  "Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.": "Integriere $M$ nach $x$, ergänze die unbekannte Funktion $\\varphi(y)$ und bestimme sie durch Vergleich von $F_y$ mit $N$. Setze zum Schluss den Punkt ein.",
  "Integrál dáva $\\mathrm{arctg}\\,y = \\dots$; na vyjadrenie $y$ treba použiť inverznú funkciu k arkustangensu.": "Das Integral ergibt $\\mathrm{arctg}\\,y = \\dots$; um $y$ auszudrücken, musst du die Umkehrfunktion des Arkustangens verwenden.",
  "Integrálne krivky rovnice y' = xy": "Integralkurven der Gleichung y' = xy",
  "K koeficientu z rozkladu pripočítaj člen zo začiatočnej podmienky.": "Addiere zum Koeffizienten aus der Zerlegung das Glied aus der Anfangsbedingung.",
  "Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.": "Leite jede Funktion ab und setze sie in die Gleichung ein. Eine Lösung muss die Gleichung für alle $x$ erfüllen.",
  "Keďže $c^{2} = 4mk$": "Da $c^{2} = 4mk$",
  "Keďže $c^{2} \\gt 4mk$": "Da $c^{2} \\gt 4mk$",
  "Keďže $c^{2} \\lt 4mk$": "Da $c^{2} \\lt 4mk$",
  "Keďže ${@0}\\neq {@1}$, nejde o rezonanciu.": "Da ${@0}\\neq {@1}$, liegt keine Resonanz vor.",
  "Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.": "Ein positives $A$ bedeutet, dass die Schwingungen in Phase mit der anregenden Kraft sind.",
  "Koeficient p": "Koeffizient p",
  "Koeficient pri $x'$ (po vydelení hmotnosťou) je $2\\delta$, nie $\\delta$. Najprv ho vydeľ dvoma.": "Der Koeffizient bei $x'$ (nach Division durch die Masse) ist $2\\delta$, nicht $\\delta$. Dividiere ihn zuerst durch zwei.",
  "Koeficient q": "Koeffizient q",
  "Koeficient rastu k": "Wachstumskoeffizient k",
  "Koeficient útlmu δ": "Abklingkonstante δ",
  "Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.": "Berechne die Koeffizienten nacheinander von der höchsten Potenz an: zuerst $A$ aus dem Glied mit $x^{2}$, dann $B$, zum Schluss $C$.",
  "Konštanta $A$ vychádza z podmienky $P(0) = \\frac{K}{1 + A} = P_0$, teda $A = \\frac{K - P_0}{P_0}$, nie $\\frac{K}{P_0}$.": "Die Konstante $A$ ergibt sich aus der Bedingung $P(0) = \\frac{K}{1 + A} = P_0$, also $A = \\frac{K - P_0}{P_0}$, nicht $\\frac{K}{P_0}$.",
  "Konštanta $C$ v riešení je delená integračným faktorom ${@0}$; pri $x = 2$ ju treba tiež vydeliť.": "Die Konstante $C$ in der Lösung wird durch den integrierenden Faktor ${@0}$ geteilt; bei $x = 2$ muss sie ebenfalls geteilt werden.",
  "Konštanta rozpadu nie je $\\frac{1}{T}$, ale $k = \\frac{\\ln 2}{T}$: za čas $T$ musí množstvo klesnúť presne na polovicu.": "Die Zerfallskonstante ist nicht $\\frac{1}{T}$, sondern $k = \\frac{\\ln 2}{T}$: In der Zeit $T$ muss die Menge genau auf die Hälfte fallen.",
  "Konštanta vzniká pri integrovaní, teda v rovnosti $\\mathrm{arctg}\\,y = \\dots + C$. Keď z nej vyjadríš $y$, kam sa $C$ dostane?": "Die Konstante entsteht beim Integrieren, also in der Gleichung $\\mathrm{arctg}\\,y = \\dots + C$. Wenn du daraus $y$ ausdrückst, wohin gelangt $C$?",
  "Koľko gramov izotopu zostane? {@0}": "Wie viele Gramm des Isotops bleiben übrig? {@0}",
  "Koľko je $y({@0})^{2}$?": "Wie groß ist $y({@0})^{2}$?",
  "Koľko jedincov bude mať populácia? Zaokrúhli na celé číslo.": "Wie viele Individuen wird die Population haben? Runde auf eine ganze Zahl.",
  "Koľko kilogramov soli bude v nádrži po ${@0}$ minútach? {@1}": "Wie viele Kilogramm Salz werden nach ${@0}$ Minuten im Tank sein? {@1}",
  "Koľko polčasov rozpadu uplynie za ${@0}$ {@1}? {@2}": "Wie viele Halbwertszeiten vergehen in ${@0}$ {@1}? {@2}",
  "Ktorá funkcia je všeobecným riešením rovnice $y' = {@0}(1 + y^{2})$?": "Welche Funktion ist die allgemeine Lösung der Gleichung $y' = {@0}(1 + y^{2})$?",
  "Ktorá funkcia je všeobecným riešením rovnice $y'{@0} = {@1}$?": "Welche Funktion ist die allgemeine Lösung der Gleichung $y'{@0} = {@1}$?",
  "Ktorá funkcia je všeobecným riešením rovnice ${@0} = 0$?": "Welche Funktion ist die allgemeine Lösung der Gleichung ${@0} = 0$?",
  "Ktorá z funkcií je riešením rovnice ${@0}$?": "Welche der Funktionen ist eine Lösung der Gleichung ${@0}$?",
  "Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y' = \\varphi\\left(\\frac{y}{x}\\right)$?": "Welche der Gleichungen ist homogen, lässt sich also in der Form $y' = \\varphi\\left(\\frac{y}{x}\\right)$ schreiben?",
  "Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?": "Welche ist die Laplace-Transformierte $Y(s)$ der Lösung des Problems ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?",
  "Laplaceovou transformáciou vyrieš úlohu $y'{@0} = {@1}$, $y(0) = {@2}$. Riešenie má tvar $y(t) = A{@3} + B{@4}$; urči $A$ a $B$.": "Löse mit der Laplace-Transformation das Problem $y'{@0} = {@1}$, $y(0) = {@2}$. Die Lösung hat die Form $y(t) = A{@3} + B{@4}$; bestimme $A$ und $B$.",
  "Liouvilleov vzorec: $W(x) = W(0)\\mathrm{e}^{-px}$.": "Formel von Liouville: $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Menovateľ je charakteristický polynóm rovnice: koeficienty pri $s$ majú rovnaké znamienka ako pri $y'$ v rovnici.": "Der Nenner ist das charakteristische Polynom der Gleichung: Die Koeffizienten bei $s$ haben dieselben Vorzeichen wie bei $y'$ in der Gleichung.",
  "Menovateľ rozložíme: ${@0} = (s{@1})(s{@2})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zakrývacia metóda: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Preto $f(t) = {@17}{@18}$.": "Wir zerlegen den Nenner: ${@0} = (s{@1})(s{@2})$. Partialbruchzerlegung: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zuhaltemethode: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Deshalb $f(t) = {@17}{@18}$.",
  "Mocnina $x$ v tvare $y_p$ sa rovná násobnosti čísla ${@0}$ ako koreňa charakteristickej rovnice. Over túto násobnosť.": "Die Potenz von $x$ im Ansatz $y_p$ ist gleich der Vielfachheit der Zahl ${@0}$ als Nullstelle der charakteristischen Gleichung. Überprüfe diese Vielfachheit.",
  "Multiplikatívna konštanta vzniká pri rovniciach $y' = g(x)y$ (cez logaritmus). Tu integruješ $\\frac{1}{1 + y^{2}}$, teda konštanta je aditívna v argumente.": "Eine multiplikative Konstante entsteht bei Gleichungen $y' = g(x)y$ (über den Logarithmus). Hier integrierst du $\\frac{1}{1 + y^{2}}$, die Konstante ist also additiv im Argument.",
  "Najprv skontroluj znamienko $\\det A$: rozhoduje, či majú vlastné čísla opačné znamienka.": "Überprüfe zuerst das Vorzeichen von $\\det A$: Es entscheidet, ob die Eigenwerte entgegengesetzte Vorzeichen haben.",
  "Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.": "Bestimme zuerst $k$ aus der Messung, dann löse $T(t) = T^{*}$ durch Logarithmieren.",
  "Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = {@0}$. Vypočítaj $F({@1})$ (presne ako zlomok, alebo na 3 desatinné miesta).": "Sei $F(s) = \\mathcal{L}\\{f\\}(s)$ für $f(t) = {@0}$. Berechne $F({@1})$ (exakt als Bruch oder auf 3 Dezimalstellen).",
  "Nenabitý kondenzátor s kapacitou ${@0}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím ${@1}\\,\\mathrm{V}$ cez rezistor s odporom ${@2}\\,\\mathrm{k\\Omega}$.": "Einen ungeladenen Kondensator mit der Kapazität ${@0}\\,\\mu\\mathrm{F}$ laden wir aus einer Quelle mit der Spannung ${@1}\\,\\mathrm{V}$ über einen Widerstand von ${@2}\\,\\mathrm{k\\Omega}$.",
  "Nesčítavaj integrál $M$ podľa $x$ a integrál $N$ podľa $y$: zmiešané členy by si tak započítal dvakrát. Z $N$ ber len členy, ktoré ešte chýbajú.": "Addiere nicht das Integral von $M$ nach $x$ und das Integral von $N$ nach $y$: Die gemischten Glieder würdest du so doppelt zählen. Nimm aus $N$ nur die Glieder, die noch fehlen.",
  "Netlmený oscilátor $x'' + {@0}x = 0$ má začiatočné podmienky $x(0) = {@1}$, $x'(0) = {@2}$. Urči amplitúdu kmitov. {@3}": "Ein ungedämpfter Oszillator $x'' + {@0}x = 0$ hat die Anfangsbedingungen $x(0) = {@1}$, $x'(0) = {@2}$. Bestimme die Amplitude der Schwingungen. {@3}",
  "Netlmený oscilátor je budený periodickou silou: $x'' + {@0}x = {@1}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos {@2}$. Urči $A$ (ako zlomok alebo celé číslo).": "Ein ungedämpfter Oszillator wird durch eine periodische Kraft angeregt: $x'' + {@0}x = {@1}$. Die stationären erzwungenen Schwingungen haben die Form $x_p = A\\cos {@2}$. Bestimme $A$ (als Bruch oder ganze Zahl).",
  "Nosná kapacita K": "Tragfähigkeit K",
  "Nádrž obsahuje ${@0}$ litrov {@1}. Priteká do nej {@2} a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po ${@3}$ minútach? {@4}": "Ein Tank enthält ${@0}$ Liter {@1}. Es fließt {@2} hinein, und die gut durchmischte Lösung fließt gleich schnell ab. Wie viele Kilogramm Salz werden nach ${@3}$ Minuten im Tank sein? {@4}",
  "Nájdi korene charakteristickej rovnice diferenciálnej rovnice ${@0}$. Zadaj ich oddelené bodkočiarkou.": "Finde die Nullstellen der charakteristischen Gleichung der Differentialgleichung ${@0}$. Gib sie durch Semikolons getrennt ein.",
  "Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.": "Finde die Eigenwerte und Eigenvektoren in der Form $(1, m)^{T}$, setze dann $t = 0$ ein und löse das System für $C_1$, $C_2$.",
  "Nájdi vlastné čísla matice sústavy {@0}. Zadaj ich oddelené bodkočiarkou.": "Finde die Eigenwerte der Systemmatrix {@0}. Gib sie durch Semikolons getrennt ein.",
  "Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{{@0}}{{@1}}$. Výsledok má tvar $f(t) = A{@2} + B{@3}$; urči $A$ a $B$.": "Finde die Originalfunktion $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ der Funktion $F(s) = \\dfrac{{@0}}{{@1}}$. Das Ergebnis hat die Form $f(t) = A{@2} + B{@3}$; bestimme $A$ und $B$.",
  "Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{{@0}}$. Bilancia: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Rovnovážna hodnota je $cV = {@5}$, preto $x(t) = {@6}$ a $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.": "Das Volumen ändert sich nicht, die Konzentration im Tank ist $\\frac{x}{{@0}}$. Bilanz: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Der Gleichgewichtswert ist $cV = {@5}$, deshalb $x(t) = {@6}$ und $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.",
  "Obraz exponenciály je $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nie $\\frac{1}{s + a}$.": "Die Laplace-Transformierte der Exponentialfunktion ist $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nicht $\\frac{1}{s + a}$.",
  "Obraz mocniny je $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; zabudol si na faktoriál.": "Die Laplace-Transformierte einer Potenz ist $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; du hast die Fakultät vergessen.",
  "Oddelíme premenné: $y\\,dy = {@0}\\,dx$, teda $\\frac{y^{2}}{2} = {@1} + C$, čiže $y^{2} = {@2} + 2C$. Z podmienky $2C = {@3}$, takže $y^{2} = {@4} + {@5}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu: $y = \\sqrt{{@6} + {@7}}$ a $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.": "Wir trennen die Variablen: $y\\,dy = {@0}\\,dx$, also $\\frac{y^{2}}{2} = {@1} + C$, d. h. $y^{2} = {@2} + 2C$. Aus der Bedingung $2C = {@3}$, also $y^{2} = {@4} + {@5}$. Da $y(0) \\gt 0$, nehmen wir die positive Wurzel: $y = \\sqrt{{@6} + {@7}}$ und $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.",
  "Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.": "Trenne die Variablen $\\frac{dy}{y^{2}} = k\\,dx$ und denke daran, dass $\\int y^{-2}\\,dy = -\\frac{1}{y}$.",
  "Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.": "Trenne die Variablen $y\\,dy = kx\\,dx$ und integriere. Das Vorzeichen der Wurzel bestimmst du aus der Anfangsbedingung.",
  "Odmocnina súčtu nie je súčet odmocnín: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Najprv sčítaj pod odmocninou.": "Die Wurzel einer Summe ist nicht die Summe der Wurzeln: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Addiere zuerst unter der Wurzel.",
  "Odtok soli je koncentrácia krát prietok, teda $\\frac{x}{V}\\cdot q$. V exponente preto musí byť aj prietok $q$.": "Der Salzabfluss ist Konzentration mal Durchfluss, also $\\frac{x}{V}\\cdot q$. Im Exponenten muss deshalb auch der Durchfluss $q$ stehen.",
  "Over dosadením: pre $y = {@0}x$ je $xy' = {@1}x$, no pravá strana ${@2}y$ je iná.": "Überprüfe durch Einsetzen: Für $y = {@0}x$ ist $xy' = {@1}x$, aber die rechte Seite ${@2}y$ ist anders.",
  "Overenie: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrovaním $M$ podľa $x$: $F = {@1} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde {@2}. Preto $F(x, y) = {@3}$ a $C = F({@4}, {@5}) = {@6}$.": "Überprüfung: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Durch Integration von $M$ nach $x$: $F = {@1} + \\varphi(y)$. Aus der Bedingung $F_y = N$ ergibt sich {@2}. Deshalb $F(x, y) = {@3}$ und $C = F({@4}, {@5}) = {@6}$.",
  "Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.": "Suche die partikuläre Lösung in der Form $A\\mathrm{e}^{cx}$ (setze in die Gleichung ein), die Konstante $B$ bestimme aus der Anfangsbedingung.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.": "Die partikuläre Lösung der Gleichung ${@0} = {@1}$ suchen wir in der Form $y_p = Ax + B$. Bestimme $A$ und $B$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.": "Die partikuläre Lösung der Gleichung ${@0} = {@1}$ suchen wir in der Form $y_p = Ax^{2} + Bx + C$. Bestimme $A$, $B$ und $C$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = A{@2} + B{@3}$. Urči $A$ a $B$.": "Die partikuläre Lösung der Gleichung ${@0} = {@1}$ suchen wir in der Form $y_p = A{@2} + B{@3}$. Bestimme $A$ und $B$.",
  "Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.": "Die Periode ungedämpfter Schwingungen ist $T = 2\\pi\\sqrt{m/k}$.",
  "Po dosadení $x_p$ dostaneš $KA\\cos {@0} = {@1}\\cos {@2}$. Urči $K$.": "Nach dem Einsetzen von $x_p$ erhältst du $KA\\cos {@0} = {@1}\\cos {@2}$. Bestimme $K$.",
  "Po dosadení $y_p = Ax{@0}$ zostane $A(2r + p){@1}$. Vypočítaj $2r + p$.": "Nach dem Einsetzen von $y_p = Ax{@0}$ bleibt $A(2r + p){@1}$. Berechne $2r + p$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c + a) = b$: derivácia dá $c$ a člen ${@1}$ pridá $+a$, nie $-a$.": "Nach dem Einsetzen von $y_p = A{@0}$ erhältst du $A(c + a) = b$: Die Ableitung ergibt $c$, und das Glied ${@1}$ fügt $+a$ hinzu, nicht $-a$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c^{2} + pc + q){@1}$. Vypočítaj hodnotu zátvorky.": "Nach dem Einsetzen von $y_p = A{@0}$ erhältst du $A(c^{2} + pc + q){@1}$. Berechne den Wert der Klammer.",
  "Po dosadení $z' = (1-n)y^{-n}y'$ treba celú rovnicu vynásobiť číslom $1 - n$, teda aj koeficienty $p$ a $q$.": "Nach dem Einsetzen von $z' = (1-n)y^{-n}y'$ muss die ganze Gleichung mit der Zahl $1 - n$ multipliziert werden, also auch die Koeffizienten $p$ und $q$.",
  "Po dosadení má rovnica pre koeficienty pri ${@0}$ tvar $uA{@1} = {@2}$. Urči $u$.": "Nach dem Einsetzen hat die Gleichung für die Koeffizienten bei ${@0}$ die Form $uA{@1} = {@2}$. Bestimme $u$.",
  "Po integrovaní máš $-\\frac{1}{u} = \\ln x + C$. Urči $C$ (zlomok alebo celé číslo).": "Nach der Integration hast du $-\\frac{1}{u} = \\ln x + C$. Bestimme $C$ (Bruch oder ganze Zahl).",
  "Po integrovaní máš $\\frac{u^{2}}{2}$; pri vyjadrení $u^{2}$ musíš dvoma vynásobiť obe strany, teda aj člen s logaritmom.": "Nach der Integration hast du $\\frac{u^{2}}{2}$; beim Ausdrücken von $u^{2}$ musst du beide Seiten mit zwei multiplizieren, also auch das Glied mit dem Logarithmus.",
  "Po integrácii a vynásobení dvoma dostaneš $y^{2} = {@0} + K$. Urči konštantu $K$ zo začiatočnej podmienky.": "Nach der Integration und Multiplikation mit zwei erhältst du $y^{2} = {@0} + K$. Bestimme die Konstante $K$ aus der Anfangsbedingung.",
  "Po integrácii máš $-\\frac{1}{y} = {@0} + C$. Urči $C$ zo začiatočnej podmienky (zlomok alebo celé číslo).": "Nach der Integration hast du $-\\frac{1}{y} = {@0} + C$. Bestimme $C$ aus der Anfangsbedingung (Bruch oder ganze Zahl).",
  "Po substitúcii $y = ux$ a integrovaní vyjadri $u^{2}$ a vypočítaj $u({@0})^{2}$. {@1}": "Drücke nach der Substitution $y = ux$ und der Integration $u^{2}$ aus und berechne $u({@0})^{2}$. {@1}",
  "Po substitúcii $y = ux$ dostaneš $u = {@0} + C$. Urči $C$ zo začiatočnej podmienky.": "Nach der Substitution $y = ux$ erhältst du $u = {@0} + C$. Bestimme $C$ aus der Anfangsbedingung.",
  "Po transformácii a vyjadrení $Y(s)$ rozlož zlomok ${@0}$ na parciálne zlomky. Aký je koeficient pri $\\frac{1}{{@1}}$?": "Zerlege nach der Transformation und dem Ausdrücken von $Y(s)$ den Bruch ${@0}$ in Partialbrüche. Wie lautet der Koeffizient bei $\\frac{1}{{@1}}$?",
  "Po vydelení $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Integračný faktor je $\\mathrm{e}^{{@2}\\ln x} = {@3}$, rovnica prejde na $({@4}y)' = {@5}$, teda ${@6}y = {@7} + C$ a $y = {@8} + \\frac{C}{{@9}}$. Z podmienky $1 + C = {@10}$, $C = {@11}$. Potom $y(2) = {@12}{@13}$.": "Nach Division durch $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Der integrierende Faktor ist $\\mathrm{e}^{{@2}\\ln x} = {@3}$, die Gleichung geht über in $({@4}y)' = {@5}$, also ${@6}y = {@7} + C$ und $y = {@8} + \\frac{C}{{@9}}$. Aus der Bedingung $1 + C = {@10}$, $C = {@11}$. Dann $y(2) = {@12}{@13}$.",
  "Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = {@0}$. Odtiaľ $u = \\frac{{@1}}{1{@2}}$ a $y = \\frac{{@3}}{1{@4}}$, takže $y({@5}) \\approx {@6}$.": "Nach Division durch $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitution $y = ux$: $u + xu' = u^{2} + u$, also $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (die Lösung $u = 0$ erfüllt die Bedingung nicht). Wir integrieren: $-\\frac{1}{u} = \\ln x + C$, aus der Bedingung $C = {@0}$. Daraus $u = \\frac{{@1}}{1{@2}}$ und $y = \\frac{{@3}}{1{@4}}$, also $y({@5}) \\approx {@6}$.",
  "Po vydelení $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, teda $u\\,du = {@2}\\frac{dx}{x}$ a $\\frac{u^{2}}{2} = {@3} + C$. Z podmienky $u(1) = {@4}$ máme $u^{2} = {@5} + {@6}$, a keďže $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Potom $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.": "Nach Division durch $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitution $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, also $u\\,du = {@2}\\frac{dx}{x}$ und $\\frac{u^{2}}{2} = {@3} + C$. Aus der Bedingung $u(1) = {@4}$ erhalten wir $u^{2} = {@5} + {@6}$, und da $y \\gt 0$, ist $y = x\\sqrt{{@7} + {@8}}$. Dann $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.",
  "Po vydelení číslom ${@0}$: $x'' + {@1}x' + {@2}x = 0$.": "Nach Division durch ${@0}$: $x'' + {@1}x' + {@2}x = 0$.",
  "Podiel ${@0}\\,\\%$ patrí výrazu $1 - \\mathrm{e}^{-t/\\tau}$, nie samotnej exponenciále.": "Der Anteil ${@0}\\,\\%$ gehört zum Ausdruck $1 - \\mathrm{e}^{-t/\\tau}$, nicht zur Exponentialfunktion allein.",
  "Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = {@0}$ a $N_x = {@1}a{@2}{@3}$. Porovnaním koeficientov pri {@4} dostaneme ${@5}a = {@6}${@7}. Kmeňová funkcia je potom $F = {@8}$.": "Die Exaktheitsbedingung ist $M_y = N_x$. Wir haben $M_y = {@0}$ und $N_x = {@1}a{@2}{@3}$. Durch Koeffizientenvergleich bei {@4} erhalten wir ${@5}a = {@6}${@7}. Die Stammfunktion ist dann $F = {@8}$.",
  "Podľa Liouvilleovho vzorca je $W(x) = W(0)\\mathrm{e}^{-px}$; skontroluj znamienko exponentu.": "Nach der Formel von Liouville ist $W(x) = W(0)\\mathrm{e}^{-px}$; überprüfe das Vorzeichen des Exponenten.",
  "Podľa Newtonovho zákona $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, teda $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.": "Nach dem newtonschen Abkühlungsgesetz $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Aus der Messung $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, also $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.",
  "Podľa Vietových vzťahov je súčet koreňov $-p$.": "Nach dem Satz von Vieta ist die Summe der Nullstellen $-p$.",
  "Podľa slovníka a linearity $F(s) = {@0}$ pre $s \\gt {@1}$. Dosadením $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.": "Nach der Korrespondenztabelle und der Linearität ist $F(s) = {@0}$ für $s \\gt {@1}$. Einsetzen von $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.",
  "Pohyb telesa sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$ (hmotnosť ${@3}\\,\\mathrm{kg}$, tlmenie ${@4}\\,\\mathrm{kg/s}$, tuhosť ${@5}\\,\\mathrm{N/m}$). O aký typ pohybu ide?": "Die Bewegung eines Körpers wird durch die Gleichung ${@0}x'' + {@1}x' + {@2}x = 0$ beschrieben (Masse ${@3}\\,\\mathrm{kg}$, Dämpfung ${@4}\\,\\mathrm{kg/s}$, Federkonstante ${@5}\\,\\mathrm{N/m}$). Um welchen Bewegungstyp handelt es sich?",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Vzorka obsahuje na začiatku ${@2}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za ${@3}$ {@4}? {@5}": "Ein radioaktives Isotop hat eine Halbwertszeit von ${@0}$ {@1}. Eine Probe enthält am Anfang ${@2}\\,\\mathrm{g}$ des Isotops. Wie viele Gramm des Isotops bleiben nach ${@3}$ {@4} übrig? {@5}",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Za koľko {@2} klesne jeho množstvo na ${@3}\\,\\%$ pôvodného množstva? {@4}": "Ein radioaktives Isotop hat eine Halbwertszeit von ${@0}$ {@1}. Nach wie vielen {@2} sinkt seine Menge auf ${@3}\\,\\%$ der ursprünglichen Menge? {@4}",
  "Populácia sa riadi logistickou rovnicou $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ v rokoch), na začiatku má ${@2}$ jedincov.": "Eine Population folgt der logistischen Gleichung $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ in Jahren), am Anfang hat sie ${@2}$ Individuen.",
  "Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.": "Vergleiche $c^{2}$ mit $4mk$ oder die Abklingkonstante $\\delta = \\frac{c}{2m}$ mit der Eigenkreisfrequenz $\\omega_0 = \\sqrt{k/m}$.",
  "Porovnaj absolútne členy a urči $B$.": "Vergleiche die Absolutglieder und bestimme $B$.",
  "Porovnaj absolútne členy a urči $C$.": "Vergleiche die Absolutglieder und bestimme $C$.",
  "Porovnaj koeficienty pri $x$ a urči $A$.": "Vergleiche die Koeffizienten bei $x$ und bestimme $A$.",
  "Porovnaj koeficienty pri $x$ a urči $B$.": "Vergleiche die Koeffizienten bei $x$ und bestimme $B$.",
  "Porovnaj koeficienty pri $x^{2}$ a urči $A$.": "Vergleiche die Koeffizienten bei $x^{2}$ und bestimme $A$.",
  "Použi $W = y_1y_2' - y_1'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.": "Verwende $W = y_1y_2' - y_1'y_2$. Den Exponenten kannst du mit der Formel von Liouville $W(x) = W(0)\\mathrm{e}^{-px}$ überprüfen.",
  "Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.": "Verwende $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.",
  "Použi $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ a $\\mathcal{L}\\{y'\\} = sY - y(0)$ a vyjadri $Y$.": "Verwende $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ und $\\mathcal{L}\\{y'\\} = sY - y(0)$ und drücke $Y$ aus.",
  "Použi prvý riadok sústavy $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.": "Verwende die erste Zeile des Systems $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.",
  "Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.": "Verwende die Formel $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, wobei $A = \\frac{K - P_0}{P_0}$.",
  "Pozor na znamienko $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, po prenesení na pravú stranu je $+y'(0)$.": "Achte auf das Vorzeichen von $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, nach dem Bringen auf die rechte Seite steht $+y'(0)$.",
  "Pozor na znamienko: $\\int u^{-2}\\,du = -\\frac{1}{u}$.": "Achte auf das Vorzeichen: $\\int u^{-2}\\,du = -\\frac{1}{u}$.",
  "Pozor na znamienko: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nie $\\frac{1}{y}$.": "Achte auf das Vorzeichen: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nicht $\\frac{1}{y}$.",
  "Pravá strana je homogénna stupňa 2, nie 0: po dosadení $tx$, $ty$ sa vynásobí $t^{2}$. Tvar $\\varphi\\left(\\frac{y}{x}\\right)$ vyžaduje stupeň 0.": "Die rechte Seite ist homogen vom Grad 2, nicht 0: Nach dem Einsetzen von $tx$, $ty$ wird sie mit $t^{2}$ multipliziert. Die Form $\\varphi\\left(\\frac{y}{x}\\right)$ verlangt den Grad 0.",
  "Pravá strana obsahuje len konštantu (polynóm stupňa 0), polynóm $Ax + B$ tu netreba.": "Die rechte Seite enthält nur eine Konstante (Polynom vom Grad 0), das Polynom $Ax + B$ ist hier nicht nötig.",
  "Pre $x_p = Bt{@0} {@1}$ je $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (členy s $t$ sa odčítajú). Porovnaním ${@7}{@8}B = {@9}$, teda $B = {@10}$. Amplitúda $|B|t$ rastie lineárne s časom.": "Für $x_p = Bt{@0} {@1}$ ist $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (die Glieder mit $t$ heben sich auf). Durch Vergleich ${@7}{@8}B = {@9}$, also $B = {@10}$. Die Amplitude $|B|t$ wächst linear mit der Zeit.",
  "Pre $y = \\cos {@0}x$ je $y'' = -{@1}\\cos {@2}x$, a teda $y'' + {@3}y = 0$. Pri $\\cos {@4}x$ by vyšlo $y'' = -{@5}\\cos {@6}x$, exponenciála má kladnú druhú deriváciu.": "Für $y = \\cos {@0}x$ ist $y'' = -{@1}\\cos {@2}x$, also $y'' + {@3}y = 0$. Bei $\\cos {@4}x$ ergäbe sich $y'' = -{@5}\\cos {@6}x$, eine Exponentialfunktion hat eine positive zweite Ableitung.",
  "Pre $y = \\mathrm{e}^{-{@0}x}$ je $y'' = {@1}\\mathrm{e}^{-{@2}x}$, a teda $y'' - {@3}y = 0$. Pre $\\sin {@4}x$ vyjde $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.": "Für $y = \\mathrm{e}^{-{@0}x}$ ist $y'' = {@1}\\mathrm{e}^{-{@2}x}$, also $y'' - {@3}y = 0$. Für $\\sin {@4}x$ ergibt sich $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.",
  "Pre $y = x^{{@0}}$ je $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pre $y = {@6}x$ by vyšlo $xy' = {@7}x$, ale ${@8}y = {@9}x$.": "Für $y = x^{{@0}}$ ist $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Für $y = {@6}x$ ergäbe sich $xy' = {@7}x$, aber ${@8}y = {@9}x$.",
  "Pre $y' + py = qy^{n}$ je $z = y^{1-n}$ a $z' + (1-n)pz = (1-n)q$.": "Für $y' + py = qy^{n}$ ist $z = y^{1-n}$ und $z' + (1-n)pz = (1-n)q$.",
  "Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = {@0}\\,dx$, teda $\\ln|y| = {@1} + c$ a $y = C\\mathrm{e}^{{@2}}$ (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = {@3}$, takže $y = {@4}$ a $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.": "Für $y\\neq 0$ trennen wir die Variablen: $\\frac{dy}{y} = {@0}\\,dx$, also $\\ln|y| = {@1} + c$ und $y = C\\mathrm{e}^{{@2}}$ (die Lösung $y = 0$ ist für $C = 0$ enthalten). Aus der Bedingung $C = {@3}$, also $y = {@4}$ und $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.",
  "Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.": "Für $y_p = A\\mathrm{e}^{cx}$ ergibt sich nach dem Einsetzen $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.",
  "Pre akú hodnotu parametra $a$ je rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ exaktná?": "Für welchen Wert des Parameters $a$ ist die Gleichung $({@0})\\,dx + ({@1})\\,dy = 0$ exakt?",
  "Pre dva rôzne reálne korene": "Für zwei verschiedene reelle Nullstellen",
  "Pre dvojnásobný koreň": "Für eine doppelte Nullstelle",
  "Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$": "Für konjugiert komplexe Nullstellen $\\alpha\\pm\\beta\\mathrm{i}$",
  "Pre polynóm 1. stupňa treba úplný polynóm $Ax + B$, samotné $Ax$ nestačí.": "Für ein Polynom 1. Grades braucht man das vollständige Polynom $Ax + B$, $Ax$ allein genügt nicht.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ a urči $\\delta$.": "Schreibe die Gleichung in der Form $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ und bestimme $\\delta$.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Schreibe die Gleichung in der Form $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; dann ist $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Pri $x = 0$ je $C\\cdot\\mathrm{e}^{0} = C$, ale v riešení je ešte konštantný člen ${@0}$, ktorý musíš od $y_0$ odčítať.": "Bei $x = 0$ ist $C\\cdot\\mathrm{e}^{0} = C$, aber in der Lösung steht noch das konstante Glied ${@0}$, das du von $y_0$ subtrahieren musst.",
  "Pri $x = 0$ sú obe exponenciály rovné 1, takže $y(0) = A + B$. Hodnotu $A$ treba od $y(0)$ odčítať.": "Bei $x = 0$ sind beide Exponentialfunktionen gleich 1, also $y(0) = A + B$. Den Wert $A$ musst du von $y(0)$ subtrahieren.",
  "Pri $x = 1$ je $u(1) = y(1)$.": "Bei $x = 1$ ist $u(1) = y(1)$.",
  "Pri $y = \\cos \\omega x$ je $y'' = -\\omega^{2}y$; koeficient ${@0}$ v rovnici je $\\omega^{2}$, nie $\\omega$.": "Bei $y = \\cos \\omega x$ ist $y'' = -\\omega^{2}y$; der Koeffizient ${@0}$ in der Gleichung ist $\\omega^{2}$, nicht $\\omega$.",
  "Pri $y = \\mathrm{e}^{rx}$ je $y'' = r^{2}y$; koeficient ${@0}$ v rovnici je $r^{2}$, nie $r$.": "Bei $y = \\mathrm{e}^{rx}$ ist $y'' = r^{2}y$; der Koeffizient ${@0}$ in der Gleichung ist $r^{2}$, nicht $r$.",
  "Pri absolútnom člene si zabudol na $y_p'' = 2A$: aj druhá derivácia prispieva konštantou.": "Beim Absolutglied hast du $y_p'' = 2A$ vergessen: Auch die zweite Ableitung trägt eine Konstante bei.",
  "Pri derivovaní $x\\mathrm{e}^{rx}$ podľa súčinu vznikne v $y_p''$ člen $2rA\\mathrm{e}^{rx}$, nie len $rA\\mathrm{e}^{rx}$.": "Beim Ableiten von $x\\mathrm{e}^{rx}$ nach der Produktregel entsteht in $y_p''$ das Glied $2rA\\mathrm{e}^{rx}$, nicht nur $rA\\mathrm{e}^{rx}$.",
  "Pri derivovaní ${@0}$ podľa $x$ vznikne koeficient ${@1}a$; rovnosť koeficientov treba ešte vydeliť číslom ${@2}$.": "Beim Ableiten von ${@0}$ nach $x$ entsteht der Koeffizient ${@1}a$; die Gleichheit der Koeffizienten muss noch durch ${@2}$ dividiert werden.",
  "Pri derivovaní súčinu ${@0}\\cdot(\\dots)$ vznikne aj člen ${@1}C_1$ z derivácie exponenciály.": "Beim Ableiten des Produkts ${@0}\\cdot(\\dots)$ entsteht auch das Glied ${@1}C_1$ aus der Ableitung der Exponentialfunktion.",
  "Pri dvojnásobnom derivovaní súčinu $t{@0} {@1}$ vzniknú dva rovnaké členy bez $t$, spolu $2\\omega_0$-násobok.": "Beim zweimaligen Ableiten des Produkts $t{@0} {@1}$ entstehen zwei gleiche Glieder ohne $t$, zusammen das $2\\omega_0$-Fache.",
  "Pri dvojnásobnom koreni máš len jednu exponenciálu; druhé nezávislé riešenie dostaneš vynásobením $x$.": "Bei einer doppelten Nullstelle hast du nur eine Exponentialfunktion; die zweite unabhängige Lösung erhältst du durch Multiplikation mit $x$.",
  "Pri dvojnásobnom koreni sa exponenciála násobí $x$, nie $x^{2}$ (to by bolo pri trojnásobnom koreni).": "Bei einer doppelten Nullstelle wird die Exponentialfunktion mit $x$ multipliziert, nicht mit $x^{2}$ (das wäre bei einer dreifachen Nullstelle).",
  "Pri integrovaní ${@0}$ si zabudol deliť exponentom: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.": "Beim Integrieren von ${@0}$ hast du vergessen, durch den Exponenten zu dividieren: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.",
  "Pri komplexných koreňoch nie sú riešeniami reálne exponenciály; použi tvar $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.": "Bei komplexen Nullstellen sind reelle Exponentialfunktionen keine Lösungen; verwende die Form $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.",
  "Pri koreňoch $\\alpha\\pm\\beta\\mathrm{i}$ je v exponente reálna časť $\\alpha$ a v goniometrických funkciách imaginárna časť $\\beta$; zamenil si ich.": "Bei den Nullstellen $\\alpha\\pm\\beta\\mathrm{i}$ steht im Exponenten der Realteil $\\alpha$ und in den trigonometrischen Funktionen der Imaginärteil $\\beta$; du hast sie vertauscht.",
  "Pri porovnaní absolútnych členov si zabudol na člen ${@0} = {@1}$, ktorý pochádza z derivácie.": "Beim Vergleich der Absolutglieder hast du das Glied ${@0} = {@1}$ vergessen, das aus der Ableitung stammt.",
  "Pri prenášaní konštantného člena na druhú stranu rovnice si mu nezmenil znamienko.": "Beim Bringen des konstanten Glieds auf die andere Seite der Gleichung hast du sein Vorzeichen nicht geändert.",
  "Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.": "Bei Resonanz mit einer einfachen Nullstelle $r$ ergibt sich nach dem Einsetzen von $y_p = Ax\\mathrm{e}^{rx}$ der Ausdruck $A(2r + p)\\,\\mathrm{e}^{rx}$.",
  "Pri riešení $2^{-t/T} = p$ treba logaritmus podieliť číslom $\\ln 2$ (alebo použiť logaritmus so základom 2).": "Beim Lösen von $2^{-t/T} = p$ muss der Logarithmus durch $\\ln 2$ geteilt werden (oder verwende den Logarithmus zur Basis 2).",
  "Pri vyjadrení $C$ zo zlomku $\\frac{C}{x_0}$ treba násobiť číslom $x_0$, nie deliť.": "Beim Ausdrücken von $C$ aus dem Bruch $\\frac{C}{x_0}$ musst du mit $x_0$ multiplizieren, nicht dividieren.",
  "Pri zakrývacej metóde dosadíš $s = a$ do zvyšku zlomku; v menovateli potom zostane $a - b$, nie $b - a$.": "Bei der Zuhaltemethode setzt du $s = a$ in den Rest des Bruchs ein; im Nenner bleibt dann $a - b$, nicht $b - a$.",
  "Primitívna funkcia k $ax^{n}$ je $\\frac{a}{n+1}x^{n+1}$.": "Die Stammfunktion von $ax^{n}$ ist $\\frac{a}{n+1}x^{n+1}$.",
  "Riešenie Cauchyho úlohy $y'{@0} = {@1}$, $y(0) = {@2}$ má tvar $y = A{@3} + B{@4}$. Urči $A$ a $B$.": "Die Lösung des Anfangswertproblems $y'{@0} = {@1}$, $y(0) = {@2}$ hat die Form $y = A{@3} + B{@4}$. Bestimme $A$ und $B$.",
  "Riešenie Cauchyho úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ zapíšeme v tvare ${@3}$. Urči $C_1$ a $C_2$.": "Die Lösung des Anfangswertproblems ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ schreiben wir in der Form ${@3}$. Bestimme $C_1$ und $C_2$.",
  "Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.": "Die Lösung ist $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; bestimme $\\mathrm{e}^{-k}$ aus der zweiten Messung.",
  "Riešenie je súčet $y_h + y_p$: konštantné partikulárne riešenie sa exponenciálou nenásobí.": "Die Lösung ist die Summe $y_h + y_p$: Die konstante partikuläre Lösung wird nicht mit der Exponentialfunktion multipliziert.",
  "Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.": "Die Lösung ist die Summe aus $y_h$ (Exponentialfunktion mit dem negativen Koeffizienten bei $y$) und der konstanten partikulären Lösung.",
  "Riešenie má tvar $\\mathrm{e}^{\\lambda x}$, kde $\\lambda$ je koreň charakteristickej rovnice; skontroluj znamienka koreňov.": "Die Lösung hat die Form $\\mathrm{e}^{\\lambda x}$, wobei $\\lambda$ eine Nullstelle der charakteristischen Gleichung ist; überprüfe die Vorzeichen der Nullstellen.",
  "Riešenie má tvar $y = C\\mathrm{e}^{G(x)}$ s $G(0) = 0$. Urči $C$ zo začiatočnej podmienky.": "Die Lösung hat die Form $y = C\\mathrm{e}^{G(x)}$ mit $G(0) = 0$. Bestimme $C$ aus der Anfangsbedingung.",
  "Riešenie rovnice y″ + py′ + qy = 0": "Lösung der Gleichung y″ + py′ + qy = 0",
  "Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.": "Löse die Gleichung $2^{-t/T} = p$ durch Logarithmieren: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.",
  "Rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$. Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[{@2}; {@3}]$.": "Die Gleichung $({@0})\\,dx + ({@1})\\,dy = 0$ ist exakt. Ihr allgemeines Integral schreiben wir in der Form $F(x, y) = C$, wobei $F(0, 0) = 0$. Bestimme $C$ für die Integralkurve, die durch den Punkt $[{@2}; {@3}]$ geht.",
  "Rovnica $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.": "Die Gleichung $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) ist nicht exakt. Sie hat einen integrierenden Faktor der Form $\\mu = x^{k}$. Bestimme $k$.",
  "Rovnica $x'' + {@0}x = {@1}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt{@2} {@3}$. Urči $B$.": "Die Gleichung $x'' + {@0}x = {@1}$ beschreibt Resonanz. Ihre partikuläre Lösung hat die Form $x_p = Bt{@2} {@3}$. Bestimme $B$.",
  "Rovnica $y' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.": "Die Gleichung $y' = f(x, y)$ besagt, dass die Steigung der Tangente im Punkt $[x; y]$ gleich $f(x, y)$ ist. Setze die Koordinaten des Punktes ein.",
  "Rovnica $y' = {@0}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$ sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen, po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.": "Die Gleichung $y' = {@0}$ hat im Zähler und im Nenner homogene Funktionen gleichen Grades, deshalb kürzt sich nach dem Einsetzen $x \\to tx$, $y \\to ty$ das $t$ heraus, und die rechte Seite hängt nur von $\\frac{y}{x}$ ab. Die übrigen Gleichungen enthalten Glieder verschiedener Grade oder ein Absolutglied, deshalb kürzt sich nach dem Einsetzen von $tx$ und $ty$ das $t$ nicht heraus.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = Ax{@2}$. Urči $A$.": "Die Gleichung ${@0} = {@1}$ hat eine partikuläre Lösung der Form $y_p = Ax{@2}$. Bestimme $A$.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = A{@2}$. Urči $A$.": "Die Gleichung ${@0} = {@1}$ hat eine partikuläre Lösung der Form $y_p = A{@2}$. Bestimme $A$.",
  "Rovnica ${@0}x'' + {@1}x = 0$ má $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.": "Die Gleichung ${@0}x'' + {@1}x = 0$ hat $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Periode $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.",
  "Rovnica je homogénna: $y' = \\frac{y}{x}{@0}$. Substitúcia $y = ux$ dáva $u + xu' = u{@1}$, teda $u' = {@2}\\frac{{@3}}{x}$ a $u = {@4} + C$. Z podmienky $u(1) = {@5}$ je $C = {@6}$, preto $y = x({@7}{@8})$ a $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.": "Die Gleichung ist homogen: $y' = \\frac{y}{x}{@0}$. Die Substitution $y = ux$ ergibt $u + xu' = u{@1}$, also $u' = {@2}\\frac{{@3}}{x}$ und $u = {@4} + C$. Aus der Bedingung $u(1) = {@5}$ ist $C = {@6}$, deshalb $y = x({@7}{@8})$ und $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.",
  "Rovnica má tvar $y' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.": "Die Gleichung hat die Form $y' = g(x)\\,y$. Trenne die Variablen $\\frac{dy}{y} = g(x)\\,dx$ und integriere; du erhältst $y = C\\mathrm{e}^{G(x)}$.",
  "Rozdiel $M_y - N_x$ treba ešte vydeliť funkciou $N = {@0}$, nie len premennou $x$.": "Die Differenz $M_y - N_x$ muss noch durch die Funktion $N = {@0}$ dividiert werden, nicht nur durch die Variable $x$.",
  "Rozhoduje znamienko diskriminantu $c^{2} - 4mk$. Prepočítaj ho: porovnávaš druhú mocninu tlmenia so štvornásobkom súčinu $mk$.": "Es entscheidet das Vorzeichen der Diskriminante $c^{2} - 4mk$. Berechne sie nach: Du vergleichst das Quadrat der Dämpfung mit dem Vierfachen des Produkts $mk$.",
  "Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, ide o {@3}. (Ekvivalentne $\\delta = \\frac{c}{2m} = {@4}$ a $\\omega_0 = \\sqrt{k/m} = {@5}$.)": "Es entscheidet das Vorzeichen der Diskriminante der charakteristischen Gleichung, also der Vergleich von $c^{2}$ und $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, liegt also der Fall „{@3}“ vor. (Äquivalent $\\delta = \\frac{c}{2m} = {@4}$ und $\\omega_0 = \\sqrt{k/m} = {@5}$.)",
  "Rozlož $F$ na parciálne zlomky $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ a urči $A$.": "Zerlege $F$ in die Partialbrüche $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ und bestimme $A$.",
  "Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.": "Zerlege den Nenner in das Produkt $(s - a)(s - b)$ und $F$ in die Partialbrüche $\\frac{A}{s-a} + \\frac{B}{s-b}$; dann ist $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.",
  "Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.": "Der Zerfall folgt der Gleichung $m' = -km$, also $m(t) = m_0\\mathrm{e}^{-kt}$ mit $k = \\frac{\\ln 2}{T}$, d. h. $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.",
  "Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená. Najvyššia derivácia v rovnici je {@0}, rovnica je teda <strong>{@1}. rádu</strong>.": "Die Ordnung wird durch die höchste Ableitung bestimmt, die in der Gleichung vorkommt, nicht durch die Potenz, mit der die Ableitung potenziert ist. Die höchste Ableitung in der Gleichung ist die {@0}, die Gleichung ist also <strong>von {@1}. Ordnung</strong>.",
  "Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou": "Schema der Lösung eines Anfangswertproblems mit der Laplace-Transformation",
  "Sedlo vzniká len pri zápornom determinante (reálne vlastné čísla s opačnými znamienkami). Prepočítaj $\\det A$.": "Ein Sattel entsteht nur bei negativer Determinante (reelle Eigenwerte mit entgegengesetzten Vorzeichen). Berechne $\\det A$ nach.",
  "Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Integrálna krivka prechádzajúca bodom $[{@4}; {@5}]$ má v ňom dotyčnicu so smernicou ${@6}$.": "Die Steigung des Feldes im Punkt $[x; y]$ ist der Wert der rechten Seite $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Die Integralkurve durch den Punkt $[{@4}; {@5}]$ hat dort eine Tangente mit der Steigung ${@6}$.",
  "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)": "Richtungsfeld der homogenen Gleichung y' = (x + y)/(x − y)",
  "Smerové pole rovnice y' = x − y s integrálnou krivkou": "Richtungsfeld der Gleichung y' = x − y mit einer Integralkurve",
  "Stabilitu určuje znamienko stopy $\\mathrm{tr}\\,A$ (súčtu, resp. dvojnásobku reálnej časti vlastných čísel). Over ho.": "Die Stabilität bestimmt das Vorzeichen der Spur $\\mathrm{tr}\\,A$ (der Summe bzw. des Doppelten des Realteils der Eigenwerte). Überprüfe es.",
  "Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, teda $-\\frac{1}{y} = {@1} + C$. Z podmienky $C = {@2}$. Odtiaľ $y = \\frac{{@3}}{1{@4}}$, čo je na intervale $\\langle 0; {@5}\\rangle$ definované (menovateľ je tam kladný). Dosadením $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.": "Die stationäre Lösung $y = 0$ erfüllt die Bedingung nicht. Für $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, also $-\\frac{1}{y} = {@1} + C$. Aus der Bedingung $C = {@2}$. Daraus $y = \\frac{{@3}}{1{@4}}$, was auf dem Intervall $\\langle 0; {@5}\\rangle$ definiert ist (der Nenner ist dort positiv). Durch Einsetzen $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.",
  "Stred nastáva len pri nulovej stope; inak sa trajektórie k bodu približujú alebo sa od neho vzďaľujú.": "Ein Zentrum liegt nur bei Spur null vor; sonst nähern sich die Trajektorien dem Punkt oder entfernen sich von ihm.",
  "Substitúcia je $z = y^{1-n}$, nie $y^{n-1}$: exponent má odstrániť mocninu $y^{n}$ po vydelení rovnice.": "Die Substitution ist $z = y^{1-n}$, nicht $y^{n-1}$: Der Exponent soll nach Division der Gleichung die Potenz $y^{n}$ beseitigen.",
  "Sústava {@0} má začiatočnú podmienku $x(0) = {@1}$, $y(0) = {@2}$. Riešenie zapíšeme v tvare $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$ a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.": "Das System {@0} hat die Anfangsbedingung $x(0) = {@1}$, $y(0) = {@2}$. Die Lösung schreiben wir in der Form $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, wobei $\\lambda_1 \\gt \\lambda_2$ und die Eigenvektoren die erste Komponente $1$ haben. Bestimme $C_1$ und $C_2$.",
  "Sčítaj: $F({@0}) = ?$": "Addiere: $F({@0}) = ?$",
  "Teleso s hmotnosťou ${@0}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou ${@1}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? {@2}": "Ein Körper der Masse ${@0}\\,\\mathrm{kg}$ schwingt ungedämpft an einer Feder mit der Federkonstante ${@1}\\,\\mathrm{N/m}$. Wie groß ist die Schwingungsperiode in Sekunden? {@2}",
  "Teleso s teplotou ${@0}{@1}$ položíme do miestnosti s teplotou ${@2}{@3}$. Po ${@4}$ minútach má teplotu ${@5}{@6}$.": "Einen Körper mit der Temperatur ${@0}{@1}$ stellen wir in einen Raum mit der Temperatur ${@2}{@3}$. Nach ${@4}$ Minuten hat er die Temperatur ${@5}{@6}$.",
  "Tlmený harmonický oscilátor": "Gedämpfter harmonischer Oszillator",
  "Tlmený oscilátor sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. {@3}": "Ein gedämpfter Oszillator folgt der Gleichung ${@0}x'' + {@1}x' + {@2}x = 0$. Bestimme die Kreisfrequenz $\\omega_d$ seiner gedämpften Schwingungen. {@3}",
  "Toto je exponent (mocnina), nie rád derivácie. Rád určuje najvyššia derivácia, ktorá sa v rovnici vyskytuje.": "Das ist ein Exponent (eine Potenz), nicht die Ordnung der Ableitung. Die Ordnung bestimmt die höchste Ableitung, die in der Gleichung vorkommt.",
  "Toto je vlastná frekvencia netlmeného oscilátora $\\omega_0$. Tlmenie frekvenciu znižuje: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Das ist die Eigenkreisfrequenz des ungedämpften Oszillators $\\omega_0$. Die Dämpfung verringert die Frequenz: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Toto je vybíjanie kondenzátora. Pri nabíjaní napätie rastie od nuly k $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Das ist das Entladen eines Kondensators. Beim Laden wächst die Spannung von null gegen $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Transformuj rovnicu ($\\mathcal{L}\\{y'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.": "Transformiere die Gleichung ($\\mathcal{L}\\{y'\\} = sY - y(0)$), drücke $Y(s)$ aus und zerlege es in Partialbrüche.",
  "Transformáciou: $sY{@0}{@1} = {@2}$, teda $Y = {@3}{@4}$. Rozklad: ${@5} = {@6}{@7}$. Spätnou transformáciou $y = ({@8}{@9}){@10}{@11}$, teda $A = {@12}$, $B = {@13}$.": "Durch Transformation: $sY{@0}{@1} = {@2}$, also $Y = {@3}{@4}$. Zerlegung: ${@5} = {@6}{@7}$. Durch Rücktransformation $y = ({@8}{@9}){@10}{@11}$, also $A = {@12}$, $B = {@13}$.",
  "Tu $n = {@0}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - {@1} = {@2}$. Vydelením rovnice $y^{{@3}}$ dostaneme $y^{-n}y'{@4} = {@5}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = {@6}$ máme $z'{@7} = {@8}$. Teda $P = (1-n)p = {@9}$ a $Q = (1-n)q = {@10}$.": "Hier ist $n = {@0}$, die Substitution ist $z = y^{1-n}$, also $k = 1 - {@1} = {@2}$. Durch Division der Gleichung durch $y^{{@3}}$ erhalten wir $y^{-n}y'{@4} = {@5}$. Da $z' = (1-n)y^{-n}y'$, haben wir nach Multiplikation der Gleichung mit $1 - n = {@6}$ die Gleichung $z'{@7} = {@8}$. Also $P = (1-n)p = {@9}$ und $Q = (1-n)q = {@10}$.",
  "Tvar $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ patrí len dvojnásobnému koreňu ($D = 0$). Aký je tu diskriminant?": "Die Form $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ gehört nur zu einer doppelten Nullstelle ($D = 0$). Wie groß ist hier die Diskriminante?",
  "Urči $A$ (zlomok alebo celé číslo).": "Bestimme $A$ (Bruch oder ganze Zahl).",
  "Urči $A$.": "Bestimme $A$.",
  "Urči $C = F({@0}, {@1})$.": "Bestimme $C = F({@0}, {@1})$.",
  "Urči $C_1$ v riešení $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.": "Bestimme $C_1$ in der Lösung $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.",
  "Urči $C_2$ (zlomok alebo celé číslo).": "Bestimme $C_2$ (Bruch oder ganze Zahl).",
  "Urči $C_2$.": "Bestimme $C_2$.",
  "Urči $\\omega_0^{2}$.": "Bestimme $\\omega_0^{2}$.",
  "Urči $\\omega_d$. {@0}": "Bestimme $\\omega_d$. {@0}",
  "Urči $\\varphi(y)$ s $\\varphi(0) = 0$ z podmienky $F_y = N$ a vypočítaj $\\varphi({@0})$.": "Bestimme $\\varphi(y)$ mit $\\varphi(0) = 0$ aus der Bedingung $F_y = N$ und berechne $\\varphi({@0})$.",
  "Urči $y({@0})$ (znamienko podľa začiatočnej podmienky).": "Bestimme $y({@0})$ (Vorzeichen gemäß der Anfangsbedingung).",
  "Urči amplitúdu kmitov. {@0}": "Bestimme die Amplitude der Schwingungen. {@0}",
  "Urči exponent $k$ v substitúcii $z = y^{k}$ (zlomok v tvare $a/b$).": "Bestimme den Exponenten $k$ in der Substitution $z = y^{k}$ (Bruch in der Form $a/b$).",
  "Urči exponent $m$.": "Bestimme den Exponenten $m$.",
  "Urči hodnotu exponentu $G({@0})$, kde $G(x) = \\int_0^x g(t)\\,dt$. {@1}": "Bestimme den Wert des Exponenten $G({@0})$, wobei $G(x) = \\int_0^x g(t)\\,dt$. {@1}",
  "Urči koeficient $P$ pri $z$.": "Bestimme den Koeffizienten $P$ bei $z$.",
  "Urči konštantu $A$ v riešení $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.": "Bestimme die Konstante $A$ in der Lösung $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.",
  "Urči oba korene (oddelené bodkočiarkou).": "Bestimme beide Nullstellen (durch ein Semikolon getrennt).",
  "Urči pravú stranu $Q$.": "Bestimme die rechte Seite $Q$.",
  "Urči rád diferenciálnej rovnice ${@0}$.": "Bestimme die Ordnung der Differentialgleichung ${@0}$.",
  "Urči typ rovnovážneho bodu $[0; 0]$ sústavy {@0}.": "Bestimme den Typ des Gleichgewichtspunkts $[0; 0]$ des Systems {@0}.",
  "Urči väčšie vlastné číslo $\\lambda_1$.": "Bestimme den größeren Eigenwert $\\lambda_1$.",
  "V akom tvare treba hľadať partikulárne riešenie rovnice ${@0} = {@1}$ metódou neurčitých koeficientov?": "In welcher Form muss man die partikuläre Lösung der Gleichung ${@0} = {@1}$ mit der Methode der unbestimmten Koeffizienten suchen?",
  "V čitateli sú členy rôznych stupňov ($x^{2}$ je stupňa 2, $y$ stupňa 1), takže sa $t$ po dosadení nevykráti.": "Im Zähler stehen Glieder verschiedener Grade ($x^{2}$ hat Grad 2, $y$ Grad 1), deshalb kürzt sich $t$ nach dem Einsetzen nicht heraus.",
  "Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.": "Die Eigenwerte einer $2\\times 2$-Matrix sind die Nullstellen der Gleichung $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.",
  "Vlastné čísla sú komplexné s reálnou časťou ${@0}$: {@1}.": "Die Eigenwerte sind komplex mit dem Realteil ${@0}$: {@1}.",
  "Vlastné čísla sú reálne s rovnakým znamienkom (súčin ${@0} \\gt 0$), ich súčet je ${@1}$: {@2}.": "Die Eigenwerte sind reell mit gleichem Vorzeichen (Produkt ${@0} \\gt 0$), ihre Summe ist ${@1}$: {@2}.",
  "Vlastné čísla sú rýdzo imaginárne: stred.": "Die Eigenwerte sind rein imaginär: Zentrum.",
  "Vlastný vektor k $\\lambda_1$ má tvar $(1, m_1)^{T}$. Urči $m_1$.": "Der Eigenvektor zu $\\lambda_1$ hat die Form $(1, m_1)^{T}$. Bestimme $m_1$.",
  "Vlastný vektor k $\\lambda_2$ má tvar $(1, m_2)^{T}$. Urči $m_2$.": "Der Eigenvektor zu $\\lambda_2$ hat die Form $(1, m_2)^{T}$. Bestimme $m_2$.",
  "Vrstevnice funkcie F(x, y) = x² − xy + y²": "Höhenlinien der Funktion F(x, y) = x² − xy + y²",
  "Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.": "Dividiere die Gleichung durch $x$ und verwende den integrierenden Faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; bei $p = \\frac{n}{x}$ ist $\\mu = x^{n}$.",
  "Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.": "Dividiere die Gleichung durch $x^{2}$, setze $y = ux$ ein und trenne die Variablen $\\frac{du}{u^{2}} = \\frac{dx}{x}$.",
  "Vydeľ rovnicu výrazom $xy$, dostaneš $y' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.": "Dividiere die Gleichung durch den Ausdruck $xy$, du erhältst $y' = \\frac{y}{x} + k\\frac{x}{y}$. Verwende dann die Substitution $y = ux$.",
  "Vyjadri $y$ a vypočítaj $y({@0})$ (zlomok alebo celé číslo).": "Drücke $y$ aus und berechne $y({@0})$ (Bruch oder ganze Zahl).",
  "Vyjadril si $\\frac{C}{{@0}}$, ale nie samotné $C$: rovnicu ešte vynásob číslom ${@1}$.": "Du hast $\\frac{C}{{@0}}$ ausgedrückt, aber nicht $C$ selbst: Multipliziere die Gleichung noch mit ${@1}$.",
  "Vypočítaj $M_y - N_x$.": "Berechne $M_y - N_x$.",
  "Vypočítaj $W(0)$, teda hodnotu $K$.": "Berechne $W(0)$, also den Wert $K$.",
  "Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.": "Berechne $\\frac{M_y - N_x}{N}$. Ergibt sich $\\frac{k}{x}$, ist der integrierende Faktor $\\mathrm{e}^{k\\ln x} = x^{k}$.",
  "Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.": "Berechne $\\frac{\\partial M}{\\partial y}$ und $\\frac{\\partial N}{\\partial x}$ und vergleiche die Koeffizienten bei gleichen Potenzen.",
  "Vypočítaj $\\mathrm{e}^{-{@0}k}$. Zaokrúhli na 4 desatinné miesta.": "Berechne $\\mathrm{e}^{-{@0}k}$. Runde auf 4 Dezimalstellen.",
  "Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Berechne $\\tau = RC$ (Kiloohm mal Mikrofarad ergeben Millisekunden) und setze in $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$ ein.",
  "Vypočítaj $u({@0})$. {@1}": "Berechne $u({@0})$. {@1}",
  "Vypočítaj $y(2)$ (zlomok alebo desatinné číslo).": "Berechne $y(2)$ (Bruch oder Dezimalzahl).",
  "Vypočítaj $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}": "Berechne $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}",
  "Vypočítaj $y({@0})$. {@1}": "Berechne $y({@0})$. {@1}",
  "Vypočítaj determinant $\\det A$.": "Berechne die Determinante $\\det A$.",
  "Vypočítaj obraz exponenciálneho člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Berechne die Laplace-Transformierte des Exponentialglieds ${@0}$ an der Stelle $s = {@1}$ (Bruch).",
  "Vypočítaj obraz goniometrického člena v bode $s = {@0}$ (zlomok).": "Berechne die Laplace-Transformierte des trigonometrischen Glieds an der Stelle $s = {@0}$ (Bruch).",
  "Vypočítaj obraz člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Berechne die Laplace-Transformierte des Glieds ${@0}$ an der Stelle $s = {@1}$ (Bruch).",
  "Vypočítaj periódu kmitov v sekundách. {@0}": "Berechne die Schwingungsperiode in Sekunden. {@0}",
  "Vypočítaj stopu matice sústavy $\\mathrm{tr}\\,A$.": "Berechne die Spur der Systemmatrix $\\mathrm{tr}\\,A$.",
  "Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.": "Berechne Spur, Determinante und Diskriminante $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ und verwende die Tabelle aus der Theorie.",
  "Vypočítaj vlastnú uhlovú frekvenciu $\\omega_0$ (v $\\mathrm{s^{-1}}$). Zaokrúhli na 3 desatinné miesta.": "Berechne die Eigenkreisfrequenz $\\omega_0$ (in $\\mathrm{s^{-1}}$). Runde auf 3 Dezimalstellen.",
  "Vypočítaj časovú konštantu $\\tau = RC$ v milisekundách.": "Berechne die Zeitkonstante $\\tau = RC$ in Millisekunden.",
  "Vypočítal si $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Du hast $u = \\frac{y}{x}$ berechnet, nicht $y$. Vergiss die Rücksubstitution $y = ux$ nicht.",
  "Vypočítal si hodnotu $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Du hast den Wert $u = \\frac{y}{x}$ berechnet, nicht $y$. Vergiss die Rücksubstitution $y = ux$ nicht.",
  "Vypočítal si hodnotu pomocnej funkcie $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Du hast den Wert der Hilfsfunktion $u = \\frac{y}{x}$ berechnet, nicht $y$. Vergiss die Rücksubstitution $y = ux$ nicht.",
  "Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.": "Löse $1 - \\mathrm{e}^{-t/\\tau} = p$ nach $t$: $t = -\\tau\\ln(1 - p)$.",
  "Vyrieš $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ a zadaj vlastné čísla (oddelené bodkočiarkou).": "Löse $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ und gib die Eigenwerte ein (durch ein Semikolon getrennt).",
  "Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pre $x \\gt 0$), a vypočítaj $y({@1})$. {@2}": "Löse das Anfangswertproblem $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (für $x \\gt 0$) und berechne $y({@1})$. {@2}",
  "Vyrieš Cauchyho úlohu $xy'{@0} = {@1}$, $y(1) = {@2}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).": "Löse das Anfangswertproblem $xy'{@0} = {@1}$, $y(1) = {@2}$, für $x \\gt 0$ und berechne $y(2)$. Gib das Ergebnis exakt ein (Bruch oder Dezimalzahl).",
  "Vyrieš Cauchyho úlohu $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Löse das Anfangswertproblem $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (für $x \\gt 0$) und berechne $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. Výsledok zadaj ako zlomok alebo celé číslo.": "Löse das Anfangswertproblem $y' = {@0}$, $y(0) = {@1}$ und berechne $y({@2})$. Gib das Ergebnis als Bruch oder ganze Zahl ein.",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. {@3}": "Löse das Anfangswertproblem $y' = {@0}$, $y(0) = {@1}$ und berechne $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $yy' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$.": "Löse das Anfangswertproblem $yy' = {@0}$, $y(0) = {@1}$ und berechne $y({@2})$.",
  "Vyrieš Cauchyho úlohu ${@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Löse das Anfangswertproblem ${@0}$, $y(1) = {@1}$ (für $x \\gt 0$) und berechne $y({@2})$. {@3}",
  "Vyrieš sústavu a urči $A$.": "Löse das System und bestimme $A$.",
  "Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.": "Nutze $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ und drücke $y$ aus.",
  "Výraz $\\frac{M_y - N_x}{N}$ má tvar $\\frac{k}{x}$. Urči $k$.": "Der Ausdruck $\\frac{M_y - N_x}{N}$ hat die Form $\\frac{k}{x}$. Bestimme $k$.",
  "Výraz $\\sqrt{m/k}$ je $\\frac{1}{\\omega_0}$; perióda je ešte $2\\pi$-krát väčšia.": "Der Ausdruck $\\sqrt{m/k}$ ist $\\frac{1}{\\omega_0}$; die Periode ist noch $2\\pi$-mal größer.",
  "Všeobecné riešenie rovnice $xy' + y ={@0}$ na intervale, ktorý neobsahuje nulu, je $y = {@1} + \\frac{C}{x}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$.": "Die allgemeine Lösung der Gleichung $xy' + y ={@0}$ auf einem Intervall, das die Null nicht enthält, ist $y = {@1} + \\frac{C}{x}$. Bestimme $C$ für die Anfangsbedingung $y({@2}) = {@3}$.",
  "Všeobecné riešenie rovnice $xy' = 2y{@0}$ je $y = Cx^{2}{@1}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$. Výsledok zadaj ako celé číslo alebo zlomok.": "Die allgemeine Lösung der Gleichung $xy' = 2y{@0}$ ist $y = Cx^{2}{@1}$. Bestimme $C$ für die Anfangsbedingung $y({@2}) = {@3}$. Gib das Ergebnis als ganze Zahl oder Bruch ein.",
  "Všeobecné riešenie rovnice $y' = {@0}{@1}$ je $y = C{@2}{@3}$. Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = {@4}$.": "Die allgemeine Lösung der Gleichung $y' = {@0}{@1}$ ist $y = C{@2}{@3}$. Bestimme die Konstante $C$ so, dass die Lösung die Anfangsbedingung $y(0) = {@4}$ erfüllt.",
  "Wronskián je $W = y_1y_2' - y_1'y_2$; poradie členov rozhoduje o znamienku $K$.": "Die Wronski-Determinante ist $W = y_1y_2' - y_1'y_2$; die Reihenfolge der Glieder entscheidet über das Vorzeichen von $K$.",
  "Wronskián je súčinom dvoch funkcií s činiteľom $\\mathrm{e}^{\\alpha x}$, preto má v exponente $2\\alpha$.": "Die Wronski-Determinante ist ein Produkt zweier Funktionen mit dem Faktor $\\mathrm{e}^{\\alpha x}$, deshalb steht im Exponenten $2\\alpha$.",
  "Y(s) vyjadrené": "Y(s) ausgedrückt",
  "Z merania urči konštantu $k$ v $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Zaokrúhli na 4 desatinné miesta.": "Bestimme aus der Messung die Konstante $k$ in $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Runde auf 4 Dezimalstellen.",
  "Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.": "In jeder Halbwertszeit sinkt die Menge auf die Hälfte: $m(t) = m_0\\cdot 2^{-t/T}$.",
  "Za koľko milisekúnd dosiahne napätie požadovanú hodnotu? {@0}": "Nach wie vielen Millisekunden erreicht die Spannung den geforderten Wert? {@0}",
  "Za koľko minút klesne teplota na požadovanú hodnotu? Zaokrúhli na desatiny minúty.": "Nach wie vielen Minuten sinkt die Temperatur auf den geforderten Wert? Runde auf Zehntel Minuten.",
  "Za koľko rokov dosiahne populácia polovicu nosnej kapacity? {@0}": "Nach wie vielen Jahren erreicht die Population die Hälfte der Tragfähigkeit? {@0}",
  "Zabudol si na druhú deriváciu: $y_p'' = -{@0}y_p$, takže koeficient pri $A$ v rovnici pre kosínus je $q - {@1}$.": "Du hast die zweite Ableitung vergessen: $y_p'' = -{@0}y_p$, also ist der Koeffizient bei $A$ in der Gleichung für den Kosinus $q - {@1}$.",
  "Zabudol si na funkciu $\\varphi(y)$: po integrovaní $M$ podľa $x$ ju treba dourčiť z podmienky $F_y = N$.": "Du hast die Funktion $\\varphi(y)$ vergessen: Nach der Integration von $M$ nach $x$ muss sie aus der Bedingung $F_y = N$ bestimmt werden.",
  "Zabudol si na konštantný člen ${@0}$ vo všeobecnom riešení; najprv ho prenes na druhú stranu.": "Du hast das konstante Glied ${@0}$ in der allgemeinen Lösung vergessen; bringe es zuerst auf die andere Seite.",
  "Zabudol si na konštantu $C$: zo začiatočnej podmienky $y(0)$ vyjde $C$, ktorým treba exponenciálu vynásobiť.": "Du hast die Konstante $C$ vergessen: Aus der Anfangsbedingung $y(0)$ ergibt sich $C$, mit dem die Exponentialfunktion multipliziert werden muss.",
  "Zabudol si na prítok soli $cq$: bez neho by soľ z nádrže len ubúdala. Riešenie sa blíži k rovnovážnej hodnote $cV$.": "Du hast den Salzzufluss $cq$ vergessen: Ohne ihn würde das Salz im Tank nur abnehmen. Die Lösung nähert sich dem Gleichgewichtswert $cV$.",
  "Zabudol si na začiatočnú podmienku: $\\mathcal{L}\\{y'\\} = sY - y(0)$, takže v $Y(s)$ je aj člen $\\frac{y(0)}{s - a}$.": "Du hast die Anfangsbedingung vergessen: $\\mathcal{L}\\{y'\\} = sY - y(0)$, also steht in $Y(s)$ auch das Glied $\\frac{y(0)}{s - a}$.",
  "Zakry činiteľ $s{@0}$ a dosaď $s = {@1}$.": "Halte den Faktor $s{@0}$ zu und setze $s = {@1}$ ein.",
  "Zamenil si hmotnosť a tuhosť: $\\omega_0 = \\sqrt{k/m}$, a perióda je $\\frac{2\\pi}{\\omega_0}$, nie $2\\pi\\omega_0$.": "Du hast Masse und Federkonstante vertauscht: $\\omega_0 = \\sqrt{k/m}$, und die Periode ist $\\frac{2\\pi}{\\omega_0}$, nicht $2\\pi\\omega_0$.",
  "Zamenil si obrazy: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ a $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.": "Du hast die Transformierten vertauscht: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ und $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.",
  "Zamenil si súradnice: v bode $[x; y]$ je prvá súradnica $x$ a druhá $y$. Dosaď ich do $f(x, y)$ na správne miesta.": "Du hast die Koordinaten vertauscht: Im Punkt $[x; y]$ ist die erste Koordinate $x$ und die zweite $y$. Setze sie an den richtigen Stellen in $f(x, y)$ ein.",
  "Zameň $y''$ za $\\lambda^{2}$, $y'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.": "Ersetze $y''$ durch $\\lambda^{2}$, $y'$ durch $\\lambda$ und $y$ durch $1$ und löse die quadratische Gleichung.",
  "Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.": "Schreibe die Lösung als $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, bestimme die Konstanten aus den Bedingungen, und die Amplitude ist $\\sqrt{C_1^{2} + C_2^{2}}$.",
  "Zapíš rovnicu v tvare $y' = \\frac{y}{x} + a$, dosaď $y = ux$, $y' = u + xu'$ a integruj.": "Schreibe die Gleichung in der Form $y' = \\frac{y}{x} + a$, setze $y = ux$, $y' = u + xu'$ ein und integriere.",
  "Začiatočná hodnota y(0)": "Anfangswert y(0)",
  "Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.": "Leite $x_p$ zweimal ab (Produkt aus $t$ und einer trigonometrischen Funktion) und setze ein. Bei $\\omega = \\omega_0$ bleibt nur das Glied ohne $t$.",
  "Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y'$ a vyrieš sústavu dvoch lineárnych rovníc.": "Leite die allgemeine Lösung ab, setze $x = 0$ in $y$ und $y'$ ein und löse das System aus zwei linearen Gleichungen.",
  "Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.": "Finde heraus, wie oft die Zahl $\\alpha$ aus dem Exponenten der rechten Seite eine Nullstelle der charakteristischen Gleichung ist, und multipliziere die Grundform entsprechend oft mit $x$.",
  "Zo začiatočnej podmienky urči $B$.": "Bestimme $B$ aus der Anfangsbedingung.",
  "Zostav bilanciu $x' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.": "Stelle die Bilanz $x' = (\\text{Zufluss des Stoffes}) - (\\text{Abfluss des Stoffes}) = cq - \\frac{q}{V}x$ auf und löse die lineare Gleichung.",
  "Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.": "Stelle die charakteristische Gleichung auf, bestimme den Typ der Nullstellen nach der Diskriminante und verwende die zugehörige Lösungsform.",
  "Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).": "Ein negatives $A$ bedeutet, dass die Schwingungen in Gegenphase zur anregenden Kraft sind (die Anregungsfrequenz ist höher als die Eigenfrequenz).",
  "absolútnom člene": "dem Absolutglied",
  "algebra": "Algebra",
  "algebraická rovnica": "algebraische Gleichung",
  "axy": "axy",
  "axy - x": "axy - x",
  "druhá": "zweite",
  "dvojnásobný koreň ${@0}$": "eine doppelte Nullstelle ${@0}$",
  "je dvojnásobným koreňom": "eine doppelte Nullstelle",
  "je jednoduchým koreňom": "eine einfache Nullstelle",
  "k = 0: veličina sa nemení": "k = 0: die Größe ändert sich nicht",
  "konštanta": "eine Konstante",
  "korene ${@0}$ a ${@1}$": "die Nullstellen ${@0}$ und ${@1}$",
  "kritické tlmenie": "kritische Dämpfung",
  "kritické tlmenie: najrýchlejší návrat bez kmitov": "kritische Dämpfung: schnellste Rückkehr ohne Schwingungen",
  "krát ${@0}$": "mal ${@0}$",
  "litre": "Litern",
  "litrov": "Litern",
  "logistická krivka s K = {@0}": "logistische Kurve mit K = {@0}",
  "nadkritické tlmenie (aperiodický pohyb)": "überkritische Dämpfung (aperiodische Bewegung)",
  "nadkritické tlmenie: aperiodický pohyb": "überkritische Dämpfung: aperiodische Bewegung",
  "neizolovaný rovnovážny bod (det A = 0)": "nicht isolierter Gleichgewichtspunkt (det A = 0)",
  "nestabilné ohnisko": "instabiler Strudel",
  "nestabilný degenerovaný uzol": "instabiler entarteter Knoten",
  "nestabilný uzol": "instabiler Knoten",
  "netlmené kmity, ω₀ = 2": "ungedämpfte Schwingungen, ω₀ = 2",
  "nie je koreňom": "keine Nullstelle",
  "po vydelení číslom ${@0}$": "nach Division durch ${@0}$",
  "podkritické tlmenie (tlmené kmity)": "unterkritische Dämpfung (gedämpfte Schwingungen)",
  "podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = {@0}": "unterkritische Dämpfung: gedämpfte Schwingungen, ω<sub>d</sub> = {@0}",
  "polynóm 1. stupňa": "ein Polynom 1. Grades",
  "polčas ln 2 / |k| = {@0}": "Halbwertszeit ln 2 / |k| = {@0}",
  "pre obraz Y(s)": "für die Bildfunktion Y(s)",
  "prvá": "erste",
  "riešenie y(t)": "Lösung y(t)",
  "rovnica pre y(t)": "Gleichung für y(t)",
  "rozklad na parciálne zlomky": "Partialbruchzerlegung",
  "roztok s koncentráciou ${@0}\\,\\mathrm{kg/l}$ {@1}": "eine Lösung mit der Konzentration ${@0}\\,\\mathrm{kg/l}$ {@1}",
  "roztoku, v ktorom je ${@0}\\,\\mathrm{kg}$ soli": "einer Lösung, die ${@0}\\,\\mathrm{kg}$ Salz enthält",
  "rýchlosťou ${@0}$ {@1} za minútu": "mit einer Rate von ${@0}$ {@1} pro Minute",
  "sedlo": "Sattel",
  "stabilné ohnisko": "stabiler Strudel",
  "stabilný uzol": "stabiler Knoten",
  "tabuľka obrazov": "Korrespondenztabelle",
  "tretia": "dritte",
  "začiatočná úloha": "Anfangswertproblem",
  "{@0} $y_p'' = -{@1}y_p$ a $y_p' = {@2}(-A{@3} + B{@4})$. Po dosadení porovnáme koeficienty: pri ${@5}$: ${@6} = {@7}$, pri ${@8}$: ${@9} = {@10}$. Riešenie sústavy je $A = {@11}$, $B = {@12}$.": "{@0} $y_p'' = -{@1}y_p$ und $y_p' = {@2}(-A{@3} + B{@4})$. Nach dem Einsetzen vergleichen wir die Koeffizienten: bei ${@5}$: ${@6} = {@7}$, bei ${@8}$: ${@9} = {@10}$. Die Lösung des Systems ist $A = {@11}$, $B = {@12}$.",
  "{@0} Aké napätie bude na kondenzátore ${@1}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.": "{@0} Welche Spannung liegt ${@1}\\,\\mathrm{ms}$ nach dem Einschalten am Kondensator an? Runde das Ergebnis in Volt auf 2 Dezimalstellen.",
  "{@0} Akú teplotu bude mať ${@1}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.": "{@0} Welche Temperatur hat er ${@1}$ Minuten nach dem Hineinstellen? Runde das Ergebnis auf Zehntel Grad.",
  "{@0} Koľko jedincov bude mať populácia po ${@1}$ rokoch? Výsledok zaokrúhli na celé číslo.": "{@0} Wie viele Individuen wird die Population nach ${@1}$ Jahren haben? Runde das Ergebnis auf eine ganze Zahl.",
  "{@0} Za koľko milisekúnd dosiahne napätie na kondenzátore ${@1}\\,\\%$ napätia zdroja? {@2}": "{@0} Nach wie vielen Millisekunden erreicht die Spannung am Kondensator ${@1}\\,\\%$ der Quellspannung? {@2}",
  "{@0} Za koľko minút od položenia klesne teplota telesa na ${@1}{@2}$? Výsledok zaokrúhli na desatiny minúty.": "{@0} Nach wie vielen Minuten ab dem Hineinstellen sinkt die Temperatur des Körpers auf ${@1}{@2}$? Runde das Ergebnis auf Zehntel Minuten.",
  "{@0} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? {@1}": "{@0} Nach wie vielen Jahren erreicht sie die Hälfte der Tragfähigkeit (dann wächst sie am schnellsten)? {@1}",
  "{@0}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = {@1}$, $\\delta = {@2}$ a $\\omega_0^{2} = {@3}$. Korene charakteristickej rovnice sú $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, preto $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.": "{@0}Durch Vergleich mit der Form $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ ist $2\\delta = {@1}$, $\\delta = {@2}$ und $\\omega_0^{2} = {@3}$. Die Nullstellen der charakteristischen Gleichung sind $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, deshalb $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.",
  "· riešením je priamka y = x − 1": "· die Lösung ist die Gerade y = x − 1",
  "Časová konštanta $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.": "Zeitkonstante $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, also $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.",
  "Či sú vlastné čísla reálne (uzol) alebo komplexné (ohnisko, stred), rozhoduje znamienko diskriminantu $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.": "Ob die Eigenwerte reell (Knoten) oder komplex (Strudel, Zentrum) sind, entscheidet das Vorzeichen der Diskriminante $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.",
  "Člen $\\frac{y}{x}$ je v poriadku, ale druhý člen nezávisí len od podielu $\\frac{y}{x}$.": "Das Glied $\\frac{y}{x}$ ist in Ordnung, aber das zweite Glied hängt nicht nur vom Quotienten $\\frac{y}{x}$ ab.",
  "Člen $p\\,y'$ sa transformuje na $p(sY - y(0))$; po prenesení na pravú stranu dá $+p\\,y(0)$. Over znamienko.": "Das Glied $p\\,y'$ transformiert sich zu $p(sY - y(0))$; nach dem Bringen auf die rechte Seite ergibt es $+p\\,y(0)$. Überprüfe das Vorzeichen.",
  "Číslo ${@0}$ nie je koreňom charakteristickej rovnice, lebo ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pre $y_p = A{@5}$ je $y_p' = {@6}A{@7}$ a $y_p'' = {@8}A{@9}$, po dosadení $A\\cdot {@10}\\,{@11} = {@12}{@13}$, teda $A = {@14}$.": "Die Zahl ${@0}$ ist keine Nullstelle der charakteristischen Gleichung, denn ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Für $y_p = A{@5}$ ist $y_p' = {@6}A{@7}$ und $y_p'' = {@8}A{@9}$, nach dem Einsetzen $A\\cdot {@10}\\,{@11} = {@12}{@13}$, also $A = {@14}$.",
  "Číslo ${@0}$ z exponentu pravej strany je koreňom charakteristickej rovnice (rezonancia); koľkokrát treba tvar vynásobiť $x$?": "Die Zahl ${@0}$ aus dem Exponenten der rechten Seite ist eine Nullstelle der charakteristischen Gleichung (Resonanz); wie oft muss man die Form mit $x$ multiplizieren?",
  "Číslo ${@0}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.": "Die Zahl ${@0}\\mathrm{i}$ ist keine Nullstelle der charakteristischen Gleichung, es liegt keine Resonanz vor.",
  "čas zdvojnásobenia ln 2 / k = {@0}": "Verdopplungszeit ln 2 / k = {@0}",
  "čistej vody": "reines Wasser",
  "čistá voda {@0}": "reines Wasser {@0}",
  "štvrtá": "vierte",
  "λ = {@0} (dvojnásobný koreň)": "λ = {@0} (doppelte Nullstelle)",
  "λ = {@0} ± {@1}i (komplexné korene)": "λ = {@0} ± {@1}i (komplexe Nullstellen)",
  "λ₁ = {@0}, λ₂ = {@1} (rôzne reálne korene)": "λ₁ = {@0}, λ₂ = {@1} (verschiedene reelle Nullstellen)",
  "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pri ω = {@1}, amplitúda {@2}</span> (pre F₀/m = 1)": "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">Maximum bei ω = {@1}, Amplitude {@2}</span> (für F₀/m = 1)",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Runde das Ergebnis auf 2 Dezimalstellen."
 }
});
