/* Deutsch: preklad js/rocniky/s4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/de/s4/ – needitovať ručne. */
CONTENT_I18N.add('de', {
 "decimal": ",",
 "lessons": {
  "s4-limita": {
   "title": "Grenzwert einer Funktion",
   "summary": "Wogegen die Funktionswerte streben, Berechnung von Grenzwerten vom Typ 0/0 und Grenzwerte im Unendlichen.",
   "theory": [
    "<p>Die Schreibweise $\\lim_{x\\to a} f(x) = L$ bedeutet, dass die Werte $f(x)$ der Zahl $L$ beliebig nahe kommen, wenn wir $x$ hinreichend nahe an $a$ heranführen (wobei $x\\neq a$).\n       Der Funktionswert direkt an der Stelle $a$ spielt für den Grenzwert <strong>keine Rolle</strong>, die Funktion muss dort nicht einmal definiert sein.\n       Der Grenzwert existiert genau dann, wenn die <strong>einseitigen Grenzwerte</strong> $\\lim_{x\\to a^-} f(x)$ und $\\lim_{x\\to a^+} f(x)$ übereinstimmen.</p>",
    {
     "fig": "s4-limita",
     "caption": "Die Funktion $f(x)=\\frac{\\sin x}{x}$ ist an der Stelle $0$ nicht definiert (leerer Kreis), trotzdem gilt $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$. Verkleinere $h$ und beobachte die Werte."
    },
    "<p><strong>Wie wir Grenzwerte berechnen:</strong></p>\n       <ul><li>Ist $f$ an der Stelle $a$ stetig (Polynom, $\\sin$, $\\mathrm{e}^x$ …), genügt Einsetzen: $\\lim_{x\\to a} f(x) = f(a)$.</li>\n       <li>Einen Ausdruck vom Typ $\\frac{0}{0}$ formen wir um: Wir faktorisieren und kürzen oder erweitern eine Wurzel zu einer Differenz von Quadraten.</li>\n       <li>Ein wichtiger Grenzwert: $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, deshalb $\\lim_{x\\to 0}\\frac{\\sin kx}{x} = k$.</li>\n       <li>Ein Ausdruck $\\frac{c}{0}$ mit $c\\neq 0$ führt zu einem uneigentlichen Grenzwert $\\pm\\infty$; das Vorzeichen bestimmen wir aus den einseitigen Grenzwerten.</li></ul>",
    "<p><strong>Grenzwert im Unendlichen</strong> einer gebrochen-rationalen Funktion: Zähler und Nenner dividieren wir durch die höchste Potenz von $x$ im Nenner.\n       Bei gleichem Grad ist der Grenzwert der Quotient der Leitkoeffizienten, hat der Zähler einen kleineren Grad, ist der Grenzwert $0$.\n       Zum Beispiel $\\lim_{x\\to\\infty}\\frac{3x^2+1}{2x^2-x} = \\frac{3}{2}$. Ist $\\lim_{x\\to\\pm\\infty} f(x) = q$, so ist die Gerade $y=q$ eine waagerechte Asymptote des Graphen.</p>"
   ],
   "examples": [
    {
     "task": "Berechne $\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3}$.",
     "steps": [
      "Durch Einsetzen erhalten wir $\\frac{0}{0}$, also müssen wir den Ausdruck umformen.",
      "Wir faktorisieren den Zähler: $x^2-9=(x-3)(x+3)$. Für $x\\neq 3$ kürzen wir: $\\frac{(x-3)(x+3)}{x-3}=x+3$.",
      "$\\lim_{x\\to 3}(x+3)=6$.",
      "<strong>Ergebnis: 6</strong>"
     ]
    },
    {
     "task": "Berechne $\\lim_{x\\to\\infty}\\dfrac{4x^2-x+7}{2x^2+5}$.",
     "steps": [
      "Wir dividieren Zähler und Nenner durch $x^2$: $\\dfrac{4-\\frac{1}{x}+\\frac{7}{x^2}}{2+\\frac{5}{x^2}}$.",
      "Die Brüche $\\frac{1}{x}$, $\\frac{7}{x^2}$ und $\\frac{5}{x^2}$ streben für $x\\to\\infty$ gegen null.",
      "<strong>Ergebnis: $\\frac{4}{2}=2$</strong>"
     ]
    }
   ]
  },
  "s4-derivacie-funkcii": {
   "title": "Ableitungen der Grundfunktionen",
   "summary": "Ableitung der Exponential-, Logarithmus- und trigonometrischen Funktionen, Produkt-, Quotienten- und Kettenregel.",
   "theory": [
    "<p><strong>Ableitungen der Grundfunktionen:</strong></p>\n       <table class=\"tbl tbl-auto\">\n         <tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(x)$</th><th>$f'(x)$</th></tr>\n         <tr><td>$c$</td><td>$0$</td><td>$x^n$</td><td>$n\\,x^{n-1}$</td></tr>\n         <tr><td>$\\mathrm{e}^x$</td><td>$\\mathrm{e}^x$</td><td>$a^x$</td><td>$a^x\\ln a$</td></tr>\n         <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td>$\\log_a x$</td><td>$\\frac{1}{x\\ln a}$</td></tr>\n         <tr><td>$\\sin x$</td><td>$\\cos x$</td><td>$\\cos x$</td><td>$-\\sin x$</td></tr>\n         <tr><td>$\\mathrm{tg}\\,x$</td><td>$\\frac{1}{\\cos^2 x}$</td><td>$\\sqrt{x}$</td><td>$\\frac{1}{2\\sqrt{x}}$</td></tr>\n       </table>",
    "<p><strong>Regeln:</strong> Produktregel $(u\\cdot v)'=u'v+uv'$, Quotientenregel $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$ (für $v\\neq 0$),\n       Kettenregel $\\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x)$ — die Ableitung der „äußeren“ Funktion multiplizieren wir mit der Ableitung der „inneren“.\n       Zum Beispiel $(\\sin 3x)'=3\\cos 3x$, $(\\mathrm{e}^{x^2})'=2x\\,\\mathrm{e}^{x^2}$, $\\big(\\ln(x^2+1)\\big)'=\\frac{2x}{x^2+1}$.</p>",
    {
     "fig": "s4-exp-ln",
     "caption": "Die Graphen von $y=\\mathrm{e}^x$ und $y=\\ln x$ sind symmetrisch zur Geraden $y=x$. Die Tangente an den Graphen von $\\mathrm{e}^x$ im Punkt $[0; 1]$ hat die Steigung $\\mathrm{e}^0=1$, die Tangente an den Graphen von $\\ln x$ im Punkt $[1; 0]$ hat die Steigung $\\frac{1}{1}=1$."
    },
    "<p>Die <strong>Tangente</strong> an den Graphen der Funktion $f$ im Punkt $[x_0; f(x_0)]$ hat die Gleichung $y=f(x_0)+f'(x_0)(x-x_0)$.</p>"
   ],
   "examples": [
    {
     "task": "Leite $f(x)=x^2\\sin x$ ab.",
     "steps": [
      "Es ist ein Produkt aus $u=x^2$ und $v=\\sin x$ mit $u'=2x$ und $v'=\\cos x$.",
      "<strong>$f'(x)=2x\\sin x+x^2\\cos x$</strong>"
     ]
    },
    {
     "task": "Berechne für $f(x)=\\ln(x^2+1)$ den Wert $f'(1)$ und gib die Gleichung der Tangente an der Stelle $x_0=1$ an.",
     "steps": [
      "Verkettete Funktion: Die äußere Funktion $\\ln u$ hat die Ableitung $\\frac{1}{u}$, die innere $u=x^2+1$ hat die Ableitung $2x$.",
      "$f'(x)=\\frac{2x}{x^2+1}$, also $f'(1)=\\frac{2}{2}=1$.",
      "$f(1)=\\ln 2$, Tangente: $y=\\ln 2+1\\cdot(x-1)$, also $y=x-1+\\ln 2$."
     ]
    }
   ]
  },
  "s4-extremy": {
   "title": "Monotonie und Extrema einer Funktion",
   "summary": "Vorzeichen der Ableitung, stationäre Stellen, lokale und globale Extrema, Optimierungsaufgaben.",
   "theory": [
    "<p>Ist $f'(x)&gt;0$ auf einem Intervall $I$, so ist die Funktion $f$ dort <strong>streng monoton steigend</strong>; ist $f'(x)&lt;0$, ist sie <strong>streng monoton fallend</strong>.\n       Stellen, an denen $f'(x)=0$ gilt, heißen <strong>stationäre Stellen</strong>. Ein lokales Extremum kann eine (differenzierbare) Funktion nur an einer stationären Stelle haben.</p>",
    {
     "fig": "s4-extremy",
     "caption": "Graph von $f(x)=x^3-3x$, $f'(x)=3x^2-3=3(x-1)(x+1)$. Grüne Teile: $f'&gt;0$, oranger Teil: $f'&lt;0$. An der Stelle $-1$ liegt das lokale Maximum $2$, an der Stelle $1$ das lokale Minimum $-2$."
    },
    "<p><strong>Entscheidung über ein Extremum:</strong> Wechselt $f'$ das Vorzeichen von $+$ nach $-$, liegt an der Stelle ein <strong>lokales Maximum</strong>; ein Wechsel von $-$ nach $+$ bedeutet ein <strong>lokales Minimum</strong>.\n       Ebenso gut dient die zweite Ableitung: $f'(x_0)=0$ und $f''(x_0)&lt;0$ ergibt ein Maximum, $f''(x_0)&gt;0$ ein Minimum.</p>",
    "<p><strong>Globale Extrema auf einem abgeschlossenen Intervall</strong> $\\langle a; b\\rangle$: Wir vergleichen die Werte an den stationären Stellen im Intervall und an den Randpunkten $a$, $b$.\n       So lösen wir auch <strong>Optimierungsaufgaben</strong>: Wir drücken die Größe als Funktion einer Variablen aus und suchen ihren größten oder kleinsten Wert.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme die lokalen Extrema der Funktion $f(x)=x^3-6x^2+9x+1$.",
     "steps": [
      "$f'(x)=3x^2-12x+9=3(x-1)(x-3)$, die stationären Stellen sind $1$ und $3$.",
      "Auf $(-\\infty; 1)$ ist $f'&gt;0$, auf $(1; 3)$ ist $f'&lt;0$, auf $(3; \\infty)$ ist $f'&gt;0$.",
      "An der Stelle $1$ liegt das lokale Maximum $f(1)=5$, an der Stelle $3$ das lokale Minimum $f(3)=1$."
     ]
    },
    {
     "task": "Aus einem Draht der Länge $40\\,\\text{cm}$ wollen wir ein Rechteck mit möglichst großem Flächeninhalt biegen. Welche Maße hat es?",
     "steps": [
      "Die Seiten sind $x$ und $20-x$, der Flächeninhalt ist $S(x)=x(20-x)=20x-x^2$ für $x\\in(0; 20)$.",
      "$S'(x)=20-2x=0$ für $x=10$; $S''(x)=-2&lt;0$, es ist ein Maximum.",
      "<strong>Den größten Flächeninhalt hat das Quadrat $10\\times 10\\,\\text{cm}$, $S=100\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "s4-priebeh": {
   "title": "Kurvendiskussion und Graph einer Funktion",
   "summary": "Definitionsbereich, Symmetrie, Asymptoten, Extrema, Krümmungsverhalten und Wendepunkte.",
   "theory": [
    "<p>Eine <strong>Kurvendiskussion</strong> führen wir in Schritten durch:</p>\n       <ol><li>Definitionsbereich $D(f)$, gegebenenfalls Symmetrie: gerade ($f(-x)=f(x)$) oder ungerade ($f(-x)=-f(x)$), und Periodizität,</li>\n       <li>Schnittpunkte des Graphen mit den Achsen und Vorzeichen der Funktion,</li>\n       <li>Grenzwerte an den Rändern von $D(f)$ und <strong>Asymptoten</strong>,</li>\n       <li>$f'$: Monotonieintervalle und lokale Extrema,</li>\n       <li>$f''$: Intervalle, auf denen die Funktion <strong>konvex</strong> (linksgekrümmt, $f''&gt;0$) oder <strong>konkav</strong> (rechtsgekrümmt, $f''&lt;0$) ist, und <strong>Wendepunkte</strong>, an denen sich das Krümmungsverhalten ändert,</li>\n       <li>Skizze des Graphen.</li></ol>",
    "<p><strong>Asymptoten:</strong> Die Gerade $x=a$ ist eine senkrechte Asymptote, wenn $f(x)$ für $x\\to a^+$ oder $x\\to a^-$ gegen $\\pm\\infty$ strebt (typischerweise eine Nullstelle des Nenners).\n       Die Gerade $y=kx+q$ ist eine schiefe Asymptote, wenn $k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}$ und $q=\\lim_{x\\to\\pm\\infty}(f(x)-kx)$; für $k=0$ ist es die waagerechte Asymptote $y=q$.\n       Die gebrochen-lineare Funktion $f(x)=\\frac{ax+b}{cx+d}$ hat die Asymptoten $x=-\\frac{d}{c}$ und $y=\\frac{a}{c}$.</p>",
    {
     "fig": "s4-asymptoty",
     "caption": "Graph von $f(x)=\\frac{2x+1}{x-1}=2+\\frac{3}{x-1}$ mit den Asymptoten $x=1$ und $y=2$. Die grünen Punkte sind die Achsenschnittpunkte $[-\\frac{1}{2}; 0]$ und $[0; -1]$. Die Funktion ist auf $(-\\infty; 1)$ und auf $(1; \\infty)$ fallend."
    },
    "<p>Eine konvexe Funktion liegt oberhalb jeder ihrer Tangenten (der Graph „hält Wasser“), eine konkave darunter.\n       Ein Polynom dritten Grades $ax^3+bx^2+cx+d$ hat immer genau einen Wendepunkt, und zwar bei $x=-\\frac{b}{3a}$.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme den Wendepunkt der Funktion $f(x)=x^3-3x^2+4$ und gib an, wo sie konvex ist.",
     "steps": [
      "$f'(x)=3x^2-6x$, $f''(x)=6x-6$.",
      "$f''(x)=0$ für $x=1$; für $x&lt;1$ ist $f''&lt;0$, für $x&gt;1$ ist $f''&gt;0$.",
      "Der Wendepunkt ist $[1; f(1)]=[1; 2]$, die Funktion ist konvex auf $(1; \\infty)$ und konkav auf $(-\\infty; 1)$."
     ]
    },
    {
     "task": "Untersuche die Symmetrie der Funktion $f(x)=\\frac{x}{x^2+1}$ und bestimme ihre waagerechte Asymptote.",
     "steps": [
      "$D(f)=\\mathbb{R}$ ist symmetrisch zur Null und $f(-x)=\\frac{-x}{x^2+1}=-f(x)$, die Funktion ist ungerade (der Graph ist punktsymmetrisch zum Ursprung).",
      "Der Zähler hat einen kleineren Grad als der Nenner, deshalb $\\lim_{x\\to\\pm\\infty}f(x)=0$.",
      "Die waagerechte Asymptote ist $y=0$ (die $x$-Achse)."
     ]
    }
   ]
  },
  "s4-plocha": {
   "title": "Flächeninhalt und Substitution im Integral",
   "summary": "Flächeninhalt zwischen zwei Kurven, Integrale elementarer Funktionen und lineare Substitution.",
   "theory": [
    "<p>Gilt auf dem Intervall $\\langle a; b\\rangle$ $f(x)\\le g(x)$, so ist der Flächeninhalt zwischen den Graphen $S=\\int_a^b \\big(g(x)-f(x)\\big)\\,dx$ — „obere minus untere“.\n       Die Grenzen $a$, $b$ sind meist die $x$-Koordinaten der Schnittpunkte der Graphen; wir finden sie aus der Gleichung $f(x)=g(x)$.\n       Liegt eine Funktion unterhalb der $x$-Achse, ist ihr bestimmtes Integral negativ, der Flächeninhalt ist daher sein Betrag.</p>",
    {
     "fig": "s4-medzi-krivkami",
     "caption": "Die Gerade $y=2x$ und die Parabel $y=x^2$ schneiden sich an den Stellen $x=0$ und $x=2$. Der Flächeninhalt ist $\\int_0^2 (2x-x^2)\\,dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=\\frac{4}{3}$."
    },
    "<p><strong>Integrale elementarer Funktionen:</strong> $\\int \\mathrm{e}^x\\,dx=\\mathrm{e}^x+c$, $\\int \\frac{1}{x}\\,dx=\\ln|x|+c$, $\\int \\sin x\\,dx=-\\cos x+c$, $\\int \\cos x\\,dx=\\sin x+c$.</p>",
    "<p><strong>Lineare Substitution:</strong> Ist $F$ eine Stammfunktion von $f$, dann gilt $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)+c$.\n       Zum Beispiel $\\int (2x+1)^3\\,dx=\\frac{1}{2}\\cdot\\frac{(2x+1)^4}{4}+c$ oder $\\int \\cos 3x\\,dx=\\frac{1}{3}\\sin 3x+c$. Die Richtigkeit prüfen wir immer durch Ableiten.</p>"
   ],
   "examples": [
    {
     "task": "Berechne den Flächeninhalt der Fläche, die von der Parabel $y=4-x^2$ und der $x$-Achse begrenzt wird.",
     "steps": [
      "Schnittpunkte mit der Achse: $4-x^2=0$, also $x=\\pm 2$. Dazwischen liegt die Parabel oberhalb der Achse.",
      "$S=\\int_{-2}^{2}(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}=\\left(8-\\frac{8}{3}\\right)-\\left(-8+\\frac{8}{3}\\right)$.",
      "<strong>$S=16-\\frac{16}{3}=\\frac{32}{3}$</strong>"
     ]
    },
    {
     "task": "Berechne $\\int_0^{1} (2x+1)^2\\,dx$ mithilfe der Substitution.",
     "steps": [
      "Stammfunktion: $F(x)=\\frac{1}{2}\\cdot\\frac{(2x+1)^3}{3}=\\frac{(2x+1)^3}{6}$.",
      "$F(1)-F(0)=\\frac{27}{6}-\\frac{1}{6}=\\frac{26}{6}=\\frac{13}{3}$.",
      "Probe durch Ausmultiplizieren: $\\int_0^1(4x^2+4x+1)\\,dx=\\frac{4}{3}+2+1=\\frac{13}{3}$ ✓"
     ]
    }
   ]
  },
  "s4-zlozene-inverzne": {
   "title": "Verkettete Funktionen und Umkehrfunktionen",
   "summary": "Verketten von Funktionen, injektive Funktion, Berechnung der Umkehrfunktion und Symmetrie der Graphen zur Geraden y = x.",
   "theory": [
    "<p>Die <strong>verkettete Funktion</strong> $f\\circ g$ ist durch die Vorschrift $(f\\circ g)(x)=f(g(x))$ gegeben: Zuerst wenden wir $g$ (die innere Funktion) an, auf das Ergebnis dann $f$ (die äußere).\n       Die Reihenfolge spielt eine Rolle, im Allgemeinen ist $f\\circ g\\neq g\\circ f$. Zum Beispiel ist für $f(x)=x^2$, $g(x)=x+1$ $f(g(x))=(x+1)^2$, aber $g(f(x))=x^2+1$.</p>",
    "<p>Eine Funktion ist <strong>injektiv</strong> (umkehrbar), wenn sie verschiedenen $x$ verschiedene Werte zuordnet (jede waagerechte Gerade schneidet den Graphen höchstens einmal). Nur eine injektive Funktion hat\n       eine <strong>Umkehrfunktion</strong> $f^{-1}$, für die $f^{-1}(y)=x \\Leftrightarrow f(x)=y$ gilt. Dabei ist $D(f^{-1})=H(f)$ und $H(f^{-1})=D(f)$.</p>",
    "<p><strong>Berechnung</strong> von $f^{-1}$: In der Gleichung $y=f(x)$ vertauschen wir $x$ und $y$ und lösen nach $y$ auf. Für $f(x)=2x-6$: $x=2y-6$, also $f^{-1}(x)=\\frac{x+6}{2}$.\n       Die Graphen von $f$ und $f^{-1}$ sind symmetrisch zur Geraden $y=x$. Zueinander invers sind auch $a^x$ und $\\log_a x$, deshalb gilt $a^{\\log_a x}=x$ und $\\log_a a^x=x$.</p>",
    {
     "fig": "s4-inverzna",
     "caption": "Graph von $y=a^x$ (blau) und Graph der Umkehrfunktion $y=\\log_a x$ (grün). Jeder Punkt $[u; v]$ des einen Graphen hat auf dem anderen Graphen das Bild $[v; u]$."
    }
   ],
   "examples": [
    {
     "task": "Gegeben sind $f(x)=x^2-1$ und $g(x)=3x+2$. Berechne $(f\\circ g)(1)$ und $(g\\circ f)(1)$.",
     "steps": [
      "$(f\\circ g)(1)=f(g(1))=f(5)=25-1=24$.",
      "$(g\\circ f)(1)=g(f(1))=g(0)=2$.",
      "Die Ergebnisse unterscheiden sich — das Verketten von Funktionen ist nicht kommutativ."
     ]
    },
    {
     "task": "Bestimme die Umkehrfunktion von $f(x)=\\frac{x+1}{x-2}$, $x\\neq 2$.",
     "steps": [
      "Wir vertauschen die Variablen: $x=\\frac{y+1}{y-2}$.",
      "$x(y-2)=y+1 \\Rightarrow xy-y=2x+1 \\Rightarrow y(x-1)=2x+1$.",
      "<strong>$f^{-1}(x)=\\frac{2x+1}{x-1}$, $x\\neq 1$</strong> (den Wert $1$ nimmt die Funktion $f$ nicht an)."
     ]
    }
   ]
  },
  "s4-exp-log-rovnice": {
   "title": "Exponential- und Logarithmusgleichungen",
   "summary": "Substitution, Gleichungen mit verschiedenen Basen, Logarithmieren und Lösbarkeitsbedingungen.",
   "theory": [
    "<p><strong>Grundtypen von Exponentialgleichungen:</strong></p>\n       <ul><li>gleiche Basis: $a^{f(x)}=a^{g(x)} \\Leftrightarrow f(x)=g(x)$ (für $a&gt;0$, $a\\neq 1$),</li>\n       <li><strong>Substitution</strong>: $4^x-6\\cdot 2^x+8=0$ schreiben wir mit $t=2^x&gt;0$ um zu $t^2-6t+8=0$,</li>\n       <li><strong>verschiedene Basen</strong>: Wir logarithmieren beide Seiten, z. B. $3^x=5 \\Rightarrow x=\\frac{\\ln 5}{\\ln 3}$; die Gleichung $c\\cdot a^x=d\\cdot b^x$ formen wir um zu $\\left(\\frac{a}{b}\\right)^x=\\frac{d}{c}$.</li></ul>",
    "<p><strong>Logarithmusgleichungen:</strong> Zuerst bestimmen wir die Bedingungen (das Argument des Logarithmus muss positiv sein), dann nutzen wir die Regeln\n       $\\log_a u+\\log_a v=\\log_a(uv)$, $\\log_a u-\\log_a v=\\log_a\\frac{u}{v}$, $k\\log_a u=\\log_a u^k$, und aus $\\log_a u=c$ erhalten wir $u=a^c$.\n       Jede Lösung prüfen wir durch Einsetzen oder durch Vergleich mit den Bedingungen — durch Umformungen können Scheinlösungen entstehen.</p>",
    "<p>Eine Gleichung mit dem Term $\\log_a x$ in verschiedenen Potenzen lösen wir mit der Substitution $t=\\log_a x$: Aus $(\\log x)^2-3\\log x+2=0$ erhalten wir $t\\in\\{1; 2\\}$, also $x\\in\\{10; 100\\}$.\n       Achtung: $(\\log x)^2$ ist nicht dasselbe wie $\\log x^2=2\\log x$.</p>"
   ],
   "examples": [
    {
     "task": "Löse die Gleichung $9^x-4\\cdot 3^x+3=0$.",
     "steps": [
      "$9^x=(3^x)^2$, Substitution $t=3^x&gt;0$: $t^2-4t+3=0$, also $t_1=1$, $t_2=3$.",
      "$3^x=1 \\Rightarrow x=0$; $3^x=3 \\Rightarrow x=1$.",
      "<strong>$K=\\{0; 1\\}$</strong>"
     ]
    },
    {
     "task": "Löse die Gleichung $\\log_3(x+1)+\\log_3(x-1)=1$.",
     "steps": [
      "Bedingungen: $x+1&gt;0$ und $x-1&gt;0$, also $x&gt;1$.",
      "$\\log_3\\big((x+1)(x-1)\\big)=1 \\Rightarrow x^2-1=3 \\Rightarrow x=\\pm 2$.",
      "Die Bedingung erfüllt nur $x=2$, die Lösung $-2$ scheidet aus.",
      "<strong>$K=\\{2\\}$</strong>"
     ]
    }
   ]
  },
  "s4-gonio-rovnice": {
   "title": "Trigonometrische Gleichungen",
   "summary": "Gleichungen, die quadratisch in Sinus oder Kosinus sind, Anwendung von Formeln und allgemeine Lösung.",
   "theory": [
    "<p>Die <strong>Grundgleichungen</strong> $\\sin x=a$, $\\cos x=a$ sind nur für $a\\in\\langle -1; 1\\rangle$ lösbar, und zwar haben sie in jeder Periode $2\\pi$ meist zwei Lösungen.\n       Zum Beispiel hat $\\sin x=\\frac{1}{2}$ in $\\langle 0; 2\\pi)$ die Lösungen $\\frac{\\pi}{6}$ und $\\frac{5\\pi}{6}$, allgemein $x=\\frac{\\pi}{6}+2k\\pi$ oder $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.\n       Die Gleichung $\\mathrm{tg}\\,x=a$ ist für jedes $a$ lösbar, und ihre Periode ist $\\pi$: $x=x_0+k\\pi$.</p>",
    "<p><strong>Gleichungen, die quadratisch</strong> in $\\sin x$ oder $\\cos x$ sind, lösen wir durch Substitution: $2\\sin^2 x-3\\sin x+1=0$ mit $t=\\sin x$ ergibt $2t^2-3t+1=0$, also $t\\in\\{\\frac{1}{2}; 1\\}$.\n       Lösungen außerhalb von $\\langle -1; 1\\rangle$ verwerfen wir.</p>",
    "<p><strong>Nützliche Formeln:</strong> $\\sin^2 x+\\cos^2 x=1$ (führt die Gleichung auf eine einzige Funktion zurück), $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x=1-2\\sin^2 x$.\n       Einen gemeinsamen Faktor <strong>klammern wir aus</strong>, wir dividieren nie durch ihn — sonst verlören wir die Lösungen, bei denen er null ist.</p>\n       <table class=\"tbl tbl-auto\"><tr><th>$x$</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th></tr>\n       <tr><td>$\\sin x$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$1$</td></tr>\n       <tr><td>$\\cos x$</td><td>$1$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr></table>"
   ],
   "examples": [
    {
     "task": "Löse die Gleichung $2\\cos^2 x+3\\sin x-3=0$ für $x\\in\\langle 0; 2\\pi)$.",
     "steps": [
      "$\\cos^2 x=1-\\sin^2 x$: $2-2\\sin^2 x+3\\sin x-3=0$, also $2\\sin^2 x-3\\sin x+1=0$.",
      "Substitution $t=\\sin x$: $2t^2-3t+1=0$, $t_1=1$, $t_2=\\frac{1}{2}$.",
      "$\\sin x=1 \\Rightarrow x=\\frac{\\pi}{2}$; $\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}$ oder $x=\\frac{5\\pi}{6}$.",
      "<strong>$K=\\left\\{\\frac{\\pi}{6}; \\frac{\\pi}{2}; \\frac{5\\pi}{6}\\right\\}$</strong>"
     ]
    },
    {
     "task": "Löse die Gleichung $\\sin 2x=\\cos x$ in $\\mathbb{R}$.",
     "steps": [
      "$2\\sin x\\cos x-\\cos x=0 \\Rightarrow \\cos x\\,(2\\sin x-1)=0$.",
      "$\\cos x=0 \\Rightarrow x=\\frac{\\pi}{2}+k\\pi$.",
      "$\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}+2k\\pi$ oder $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$."
     ]
    }
   ]
  },
  "s4-sustavy": {
   "title": "Gleichungs- und Ungleichungssysteme",
   "summary": "Nichtlineare Systeme, Schnittpunkte von Kurven und Ungleichungssysteme mit einer und zwei Variablen.",
   "theory": [
    "<p>Ein <strong>nichtlineares System</strong> lösen wir meist mit dem <strong>Einsetzungsverfahren</strong>: Aus der einfacheren (linearen) Gleichung drücken wir eine Unbekannte aus und setzen sie in die andere ein.\n       Die Lösungen sind geordnete Paare $[x; y]$; ihre Anzahl entspricht der Anzahl der Schnittpunkte der Graphen beider Gleichungen. Das System $x+y=s$, $xy=p$ führt nach dem Satz von Vieta auf die Gleichung $t^2-st+p=0$.</p>",
    "<p><strong>Ungleichungssystem mit einer Unbekannten:</strong> Wir lösen jede Ungleichung einzeln, und das Ergebnis ist die <strong>Schnittmenge</strong> der Lösungsmengen.\n       Beim Multiplizieren oder Dividieren mit einer negativen Zahl dreht sich das Ungleichheitszeichen um.</p>",
    "<p>Ein <strong>System linearer Ungleichungen mit zwei Unbekannten</strong> beschreibt einen Teil der Ebene: Jede Ungleichung $y\\le kx+q$ ist die Halbebene unterhalb der Geraden $y=kx+q$ (einschließlich der Geraden).\n       Die Lösung des Systems ist die Schnittmenge der Halbebenen — oft ein Vieleck.</p>",
    {
     "fig": "s4-oblast",
     "caption": "Das System $y\\ge 0$, $y\\le x+2$, $y\\le -x+4$ beschreibt ein Dreieck mit den Eckpunkten $[-2; 0]$, $[4; 0]$ und $[1; 3]$. Sein Flächeninhalt ist $\\frac{6\\cdot 3}{2}=9$."
    }
   ],
   "examples": [
    {
     "task": "Löse das System $x+y=7$, $x\\cdot y=10$.",
     "steps": [
      "Aus der ersten Gleichung $y=7-x$, wir setzen ein: $x(7-x)=10 \\Rightarrow x^2-7x+10=0$.",
      "$x_1=2$, $x_2=5$, dazu $y_1=5$, $y_2=2$.",
      "<strong>Lösungen: $[2; 5]$ und $[5; 2]$</strong>"
     ]
    },
    {
     "task": "Löse das Ungleichungssystem $3x-2&gt;4$ und $5-x\\ge -1$ in $\\mathbb{R}$.",
     "steps": [
      "$3x&gt;6 \\Rightarrow x&gt;2$.",
      "$-x\\ge -6 \\Rightarrow x\\le 6$ (die Division durch eine negative Zahl dreht das Zeichen um).",
      "<strong>$K=(2; 6\\rangle$</strong>, die ganzen Zahlen darin sind $3, 4, 5, 6$."
     ]
    }
   ]
  },
  "s4-parametre": {
   "title": "Gleichungen und Systeme mit Parameter",
   "summary": "Fallunterscheidung der Lösungsanzahl nach dem Parameter, quadratische Gleichungen und Systeme mit Parameter.",
   "theory": [
    "<p>Ein <strong>Parameter</strong> ist ein Buchstabe, der in einer Gleichung für eine feste, aber beliebige Zahl steht. Wir lösen die Gleichung für alle seine Werte gleichzeitig\n       und führen eine <strong>Fallunterscheidung</strong> durch: Für welche Werte des Parameters hat die Gleichung eine, mehrere oder keine Lösung?\n       Zum Beispiel hat $px=3$ für $p\\neq 0$ die einzige Lösung $x=\\frac{3}{p}$, für $p=0$ keine Lösung.</p>",
    "<p>Eine <strong>quadratische Gleichung</strong> $ax^2+bx+c=0$ mit $a\\neq 0$ hat für $D&gt;0$ zwei verschiedene reelle Lösungen, für $D=0$ eine doppelte und für $D&lt;0$ keine reelle.\n       Ist eine Lösung bekannt, setzen wir sie ein und erhalten eine Gleichung für den Parameter; die zweite Lösung berechnen wir dann leicht mit dem Satz von Vieta $x_1+x_2=-\\frac{b}{a}$, $x_1x_2=\\frac{c}{a}$.\n       Steht bei $x^2$ ein Parameter, müssen wir den Fall $a=0$ (die Gleichung ist linear) gesondert untersuchen.</p>",
    "<p>Ein <strong>System aus zwei linearen Gleichungen</strong> $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$ hat genau eine Lösung, wenn $a_1b_2-a_2b_1\\neq 0$ (die Geraden schneiden sich).\n       Ist $a_1b_2-a_2b_1=0$, sind die Geraden parallel: entweder verschieden (keine Lösung) oder identisch (unendlich viele Lösungen).</p>"
   ],
   "examples": [
    {
     "task": "Für welche Werte des Parameters $p$ hat die Gleichung $x^2-4x+p=0$ zwei verschiedene reelle Lösungen?",
     "steps": [
      "$D=16-4p$.",
      "$D&gt;0 \\Leftrightarrow 16-4p&gt;0 \\Leftrightarrow p&lt;4$.",
      "<strong>Für $p\\in(-\\infty; 4)$</strong>; für $p=4$ gibt es die doppelte Lösung $2$, für $p&gt;4$ keine reellen Lösungen."
     ]
    },
    {
     "task": "Für welche $m$ hat das System $mx+2y=4$, $2x+my=-4$ keine Lösung?",
     "steps": [
      "Die Determinante $m\\cdot m-2\\cdot 2=m^2-4=0$ für $m=\\pm 2$; sonst hat das System genau eine Lösung.",
      "$m=2$: $2x+2y=4$ und $2x+2y=-4$ sind parallele, verschiedene Geraden — keine Lösung.",
      "$m=-2$: $-2x+2y=4$ und $2x-2y=-4$ sind dieselbe Gerade — unendlich viele Lösungen.",
      "<strong>Das System hat für $m=2$ keine Lösung.</strong>"
     ]
    }
   ]
  },
  "s4-priamka-kruznica": {
   "title": "Gerade und Kreis in analytischer Darstellung",
   "summary": "Lagebeziehung von Gerade und Kreis, Schnittpunkte und Tangente an einen Kreis.",
   "theory": [
    "<p>Ein Kreis mit dem Mittelpunkt $S[m; n]$ und dem Radius $r$ hat die Gleichung $(x-m)^2+(y-n)^2=r^2$. Eine Gerade in der Ebene hat die allgemeine Gleichung $ax+by+c=0$,\n       wobei $\\vec{n}=(a; b)$ ihr Normalenvektor ist. Der Abstand des Punktes $S[m; n]$ von der Geraden ist $d=\\dfrac{|am+bn+c|}{\\sqrt{a^2+b^2}}$.</p>",
    "<p><strong>Lagebeziehung:</strong> Ist $d&lt;r$, ist die Gerade eine <strong>Sekante</strong> (2 gemeinsame Punkte); ist $d=r$, ist sie eine <strong>Tangente</strong> (1 Punkt); ist $d&gt;r$, ist sie eine <strong>Passante</strong>.\n       Dasselbe finden wir auch algebraisch heraus: Durch Einsetzen der Geraden in die Kreisgleichung erhalten wir eine quadratische Gleichung, deren Diskriminante über die Anzahl der Schnittpunkte entscheidet.</p>",
    {
     "fig": "s4-priamka-kruznica",
     "caption": "Kreis $x^2+y^2=9$ und Gerade $y=-0{,}75x+q$. Verschiebe $q$: Die Gerade ist genau für $q=\\pm 3{,}75$ eine Tangente, wenn der Abstand des Mittelpunkts gleich dem Radius ist."
    },
    "<p>Die <strong>Tangente im Punkt</strong> $T$ des Kreises steht senkrecht auf dem Radius $ST$, deshalb ist der Vektor $\\vec{ST}$ ihr Normalenvektor.\n       Für den Kreis $x^2+y^2=r^2$ und einen Punkt $T[x_0; y_0]$ auf ihm hat die Tangente die Gleichung $x_0x+y_0y=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme die Schnittpunkte des Kreises $x^2+y^2=25$ mit der Geraden $x-y+1=0$.",
     "steps": [
      "Aus der Geradengleichung $y=x+1$, wir setzen ein: $x^2+(x+1)^2=25 \\Rightarrow 2x^2+2x-24=0 \\Rightarrow x^2+x-12=0$.",
      "$x_1=3$, $x_2=-4$, dazu $y_1=4$, $y_2=-3$.",
      "<strong>Schnittpunkte: $[3; 4]$ und $[-4; -3]$</strong>"
     ]
    },
    {
     "task": "Gib die Gleichung der Tangente an den Kreis $(x-1)^2+(y+2)^2=25$ im Punkt $T[4; 2]$ an.",
     "steps": [
      "Mittelpunkt $S[1; -2]$, $\\vec{ST}=(3; 4)$ ist ein Normalenvektor der Tangente: $3x+4y+c=0$.",
      "Wir setzen $T$ ein: $12+8+c=0$, also $c=-20$.",
      "<strong>Tangente: $3x+4y-20=0$</strong>"
     ]
    }
   ]
  },
  "s4-polohy": {
   "title": "Lagebeziehungen von Punkten, Geraden und Ebenen",
   "summary": "Parallele, sich schneidende und windschiefe Geraden, Lage von Gerade und Ebene, zweier Ebenen und ihre analytische Beschreibung.",
   "theory": [
    "<p><strong>Zwei Geraden im Raum</strong> sind entweder <strong>identisch</strong>, <strong>parallel</strong> (sie liegen in einer Ebene und haben keinen gemeinsamen Punkt),\n       <strong>schneidend</strong> (sie haben genau einen gemeinsamen Punkt) oder <strong>windschief</strong> — sie haben keinen gemeinsamen Punkt und liegen nicht in einer Ebene.\n       Windschiefe Geraden gibt es in der Ebene nicht, im Raum sind sie häufig.</p>",
    {
     "fig": "s4-kocka",
     "caption": "Würfel $ABCDEFGH$. Die Geraden $AB$ (blau) und $CG$ (grün) sind windschief, die Geraden $AB$ und $EG$ (orange) ebenfalls. Die Geraden $CG$ und $EG$ schneiden sich im Punkt $G$."
    },
    "<p><strong>Gerade und Ebene:</strong> Eine Gerade liegt entweder in der Ebene, ist zu ihr parallel (kein gemeinsamer Punkt) oder schneidet sie (ein gemeinsamer Punkt — der Durchstoßpunkt).\n       Eine Gerade ist zu einer Ebene parallel, wenn sie zu einer Geraden dieser Ebene parallel ist. <strong>Zwei Ebenen</strong> sind identisch, echt parallel oder schneiden sich — dann in einer Geraden.</p>",
    "<p><strong>Analytisch:</strong> Eine Gerade hat die Parameterdarstellung $X=A+t\\vec{u}$, $t\\in\\mathbb{R}$; eine Ebene die allgemeine Gleichung $ax+by+cz+d=0$ mit dem Normalenvektor $\\vec{n}=(a; b; c)$.\n       Geraden mit zueinander vielfachen Richtungsvektoren sind parallel oder identisch. Eine Gerade ist zur Ebene parallel oder liegt in ihr, wenn $\\vec{u}\\cdot\\vec{n}=0$.\n       Bei Rechnungen im Würfel mit der Kante $1$ wählen wir $A[0; 0; 0]$, $B[1; 0; 0]$, $D[0; 1; 0]$, $E[0; 0; 1]$.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme im Würfel $ABCDEFGH$ die Lagebeziehung der Geraden $BG$ und $AH$.",
     "steps": [
      "$\\vec{BG}=G-B=(0; 1; 1)$ und $\\vec{AH}=H-A=(0; 1; 1)$ — die Richtungsvektoren sind gleich.",
      "Der Punkt $A$ liegt nicht auf der Geraden $BG$, die Geraden fallen also nicht zusammen.",
      "<strong>Die Geraden $BG$ und $AH$ sind parallel</strong> (sie liegen in der Ebene $ABGH$)."
     ]
    },
    {
     "task": "Entscheide, ob der Punkt $Q[5; 1; -2]$ auf der Geraden $p: X=[1; 3; 0]+t\\,(2; -1; -1)$ liegt.",
     "steps": [
      "Aus der ersten Koordinate: $1+2t=5$, also $t=2$.",
      "Für $t=2$: $y=3-2=1$ ✓, $z=0-2=-2$ ✓.",
      "<strong>Der Punkt $Q$ liegt auf der Geraden</strong> (Parameter $t=2$)."
     ]
    }
   ]
  },
  "s4-uhly-vzdialenosti": {
   "title": "Winkel und Abstand im Raum",
   "summary": "Abstand zweier Punkte, eines Punktes von einer Geraden und von einer Ebene, Winkel zwischen Geraden und zwischen Gerade und Ebene — vor allem im Würfel.",
   "theory": [
    "<p><strong>Abstände:</strong> Der Abstand zweier Punkte ist $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2+(b_3-a_3)^2}$. Der Abstand eines Punktes von einer Geraden ist die Länge des Lotes auf die Gerade,\n       der Abstand des Punktes $P$ von der Ebene $ax+by+cz+d=0$ ist $\\dfrac{|ap_1+bp_2+cp_3+d|}{\\sqrt{a^2+b^2+c^2}}$.\n       Im Würfel mit der Kante $a$: Flächendiagonale $a\\sqrt2$, Raumdiagonale $a\\sqrt3$.</p>",
    "<p>Der <strong>Winkel zweier Geraden</strong> (auch windschiefer) ist der Winkel ihrer Richtungsvektoren, wir nehmen ihn aus $\\langle 0^\\circ; 90^\\circ\\rangle$:\n       $\\cos\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}$. Der <strong>Winkel zwischen Gerade und Ebene</strong> ist der Winkel zwischen der Geraden und ihrer senkrechten Projektion in die Ebene;\n       mit dem Normalenvektor $\\vec{n}$ gilt $\\sin\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}$.</p>",
    {
     "fig": "s4-kocka-uhol",
     "caption": "Der Winkel der Raumdiagonale $AG$ mit der Grundfläche ist der Winkel zwischen $AG$ und ihrer Projektion $AC$. Aus dem rechtwinkligen Dreieck $ACG$: $\\mathrm{tg}\\,\\varphi=\\frac{a}{a\\sqrt2}$, also $\\varphi\\approx 35{,}26^\\circ$."
    },
    "<p>Das <strong>Vektorprodukt</strong> (Kreuzprodukt) $\\vec{u}\\times\\vec{v}=(u_2v_3-u_3v_2;\\ u_3v_1-u_1v_3;\\ u_1v_2-u_2v_1)$ steht senkrecht auf beiden Vektoren, und sein Betrag ist der Flächeninhalt des von ihnen aufgespannten Parallelogramms.\n       Deshalb ist der Abstand des Punktes $P$ von der Geraden $X=Q+t\\vec{u}$ gleich $\\dfrac{|\\vec{QP}\\times\\vec{u}|}{|\\vec{u}|}$, und ein Normalenvektor der Ebene $QRS$ ist $\\vec{QR}\\times\\vec{QS}$.</p>"
   ],
   "examples": [
    {
     "task": "Ein Würfel $ABCDEFGH$ hat die Kante $a=6\\,\\text{cm}$. Berechne den Abstand des Eckpunkts $A$ vom Mittelpunkt $K$ der Kante $GH$.",
     "steps": [
      "$A[0; 0; 0]$, $G[6; 6; 6]$, $H[0; 6; 6]$, also $K[3; 6; 6]$.",
      "$|AK|=\\sqrt{3^2+6^2+6^2}=\\sqrt{81}=9$.",
      "<strong>$|AK|=9\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Berechne den Abstand des Eckpunkts $A$ von der Ebene $BDE$ im Würfel mit der Kante $a$.",
     "steps": [
      "$B[a; 0; 0]$, $D[0; a; 0]$, $E[0; 0; a]$ liegen in der Ebene $x+y+z-a=0$.",
      "$d=\\dfrac{|0+0+0-a|}{\\sqrt{1+1+1}}=\\dfrac{a}{\\sqrt3}=\\dfrac{a\\sqrt3}{3}$.",
      "Das ist ein Drittel der Raumdiagonale $AG$."
     ]
    }
   ]
  },
  "s4-telesa": {
   "title": "Prisma, Pyramide, Zylinder, Kegel und Kugel",
   "summary": "Eigenschaften der Körper, rechtwinklige Dreiecke im Inneren von Körpern, Oberfläche und Volumen, Kugelschnitt.",
   "theory": [
    "<p><strong>Prisma</strong> und <strong>Zylinder</strong> haben zwei kongruente parallele Grundflächen: $V=S_p\\cdot v$, $S=2S_p+S_{pl}$. Zylinder: $V=\\pi r^2v$, $S=2\\pi r^2+2\\pi rv$.\n       <strong>Pyramide</strong> und <strong>Kegel</strong> haben eine Grundfläche und eine Spitze: $V=\\frac{1}{3}S_p\\cdot v$. Kegel mit der Mantellinie $s$: $V=\\frac{1}{3}\\pi r^2 v$, $S=\\pi r^2+\\pi rs$, wobei $s^2=r^2+v^2$.\n       <strong>Kugel</strong>: $V=\\frac{4}{3}\\pi r^3$, $S=4\\pi r^2$.</p>",
    {
     "fig": "s4-ihlan",
     "caption": "Regelmäßige vierseitige Pyramide: Die Höhe $v$, die Seitenflächenhöhe $v_s$ und die halbe Kante $\\frac{a}{2}$ bilden ein rechtwinkliges Dreieck: $v_s^2=v^2+\\left(\\frac{a}{2}\\right)^2$. Für die Seitenkante $h$ gilt $h^2=v_s^2+\\left(\\frac{a}{2}\\right)^2$."
    },
    "<p>Eine <strong>regelmäßige vierseitige Pyramide</strong> mit der Grundkante $a$ hat $S=a^2+4\\cdot\\frac{a\\cdot v_s}{2}=a^2+2av_s$ und $V=\\frac{1}{3}a^2v$.\n       Der Schlüssel zu den meisten Aufgaben ist das richtige rechtwinklige Dreieck — zum Beispiel aus der Höhe, der halben Diagonale der Grundfläche und der Seitenkante: $h^2=v^2+\\left(\\frac{a\\sqrt2}{2}\\right)^2$.</p>",
    "<p>Der <strong>Schnitt einer Kugel</strong> mit einer Ebene im Abstand $d$ vom Mittelpunkt ist ein Kreis mit dem Radius $\\rho=\\sqrt{r^2-d^2}$. Ein <strong>regelmäßiges dreiseitiges Prisma</strong> hat als Grundfläche\n       ein gleichseitiges Dreieck mit dem Flächeninhalt $\\frac{\\sqrt3}{4}a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Eine regelmäßige vierseitige Pyramide hat die Grundkante $a=10\\,\\text{cm}$ und die Höhe $v=12\\,\\text{cm}$. Berechne ihre Oberfläche und ihr Volumen.",
     "steps": [
      "Seitenflächenhöhe: $v_s=\\sqrt{12^2+5^2}=\\sqrt{169}=13\\,\\text{cm}$.",
      "$S=a^2+2av_s=100+2\\cdot 10\\cdot 13=360\\,\\text{cm}^2$.",
      "$V=\\frac{1}{3}\\cdot 100\\cdot 12=400\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Eine Kugel mit dem Radius $r=10\\,\\text{cm}$ wird von einer Ebene im Abstand $6\\,\\text{cm}$ vom Mittelpunkt geschnitten. Wie groß ist der Flächeninhalt der Schnittfläche?",
     "steps": [
      "$\\rho=\\sqrt{10^2-6^2}=\\sqrt{64}=8\\,\\text{cm}$.",
      "$S=\\pi\\rho^2=64\\pi\\approx 201{,}06\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "s4-povrch-objem": {
   "title": "Oberfläche und Volumen zusammengesetzter Körper",
   "summary": "Kegelstumpf und Pyramidenstumpf, zusammengesetzte Körper, Ähnlichkeit von Körpern und Anwendungsaufgaben.",
   "theory": [
    "<p>Ein <strong>Kegelstumpf</strong> mit den Radien $R$, $r$ der Grundflächen, der Höhe $v$ und der Mantellinie $s$: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$, Mantel $S_{pl}=\\pi s(R+r)$,\n       Oberfläche $S=\\pi R^2+\\pi r^2+\\pi s(R+r)$. Die Mantellinie finden wir aus dem trapezförmigen Achsenschnitt: $s^2=v^2+(R-r)^2$.</p>",
    {
     "fig": "s4-zrezany",
     "caption": "Ein Kegelstumpf entsteht, wenn man den oberen Teil eines Kegels mit einer zur Grundfläche parallelen Ebene abschneidet. Die Höhe $v$, die Differenz der Radien $R-r$ und die Mantellinie $s$ bilden ein rechtwinkliges Dreieck."
    },
    "<p>Ein <strong>Pyramidenstumpf</strong> mit den Grundflächeninhalten $S_1$, $S_2$ und der Höhe $v$ hat das Volumen $V=\\frac{v}{3}\\left(S_1+\\sqrt{S_1S_2}+S_2\\right)$;\n       für einen regelmäßigen vierseitigen mit den Kanten $a_1$, $a_2$ ist $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.\n       Einen <strong>zusammengesetzten Körper</strong> zerlegen wir in bekannte Körper und addieren die Volumina (bei Hohlräumen subtrahieren wir). Bei der Oberfläche Vorsicht: Berührungsflächen gehören nicht zur Oberfläche.</p>",
    "<p><strong>Ähnliche Körper</strong> mit dem Ähnlichkeitsfaktor $k$ haben Oberflächen im Verhältnis $k^2$ und Volumina im Verhältnis $k^3$. Verdoppeln wir alle Maße,\n       wird die Oberfläche 4-mal und das Volumen 8-mal so groß. Beim Umschmelzen bleibt das Volumen erhalten.</p>"
   ],
   "examples": [
    {
     "task": "Ein Eimer hat die Form eines Kegelstumpfs mit den Radien $R=15\\,\\text{cm}$, $r=10\\,\\text{cm}$ und der Höhe $v=30\\,\\text{cm}$. Wie viele Liter passen hinein?",
     "steps": [
      "$V=\\frac{\\pi\\cdot 30}{3}(225+150+100)=10\\pi\\cdot 475=4750\\pi\\,\\text{cm}^3$.",
      "$V\\approx 14\\,923\\,\\text{cm}^3\\approx 14{,}9\\,\\ell$."
     ]
    },
    {
     "task": "Ein Silo hat die Form eines Zylinders mit dem Radius $3\\,\\text{m}$ und der Höhe $8\\,\\text{m}$, auf dem eine Halbkugel mit demselben Radius sitzt. Berechne das Volumen des Silos.",
     "steps": [
      "Zylinder: $\\pi\\cdot 9\\cdot 8=72\\pi$.",
      "Halbkugel: $\\frac{1}{2}\\cdot\\frac{4}{3}\\pi\\cdot 27=18\\pi$.",
      "<strong>$V=90\\pi\\approx 282{,}74\\,\\text{m}^3$</strong>"
     ]
    }
   ]
  },
  "s4-statisticky-subor": {
   "title": "Statistische Erhebung, Merkmale, Tabellen und Diagramme",
   "summary": "Grundgesamtheit und Merkmal, absolute und relative Häufigkeit, Häufigkeitstabelle, Diagramme und ihr Ablesen.",
   "theory": [
    "<p>Eine <strong>statistische Erhebung</strong> untersucht eine Menge von Objekten (Merkmalsträgern), ihre Anzahl $n$ ist der <strong>Stichprobenumfang</strong>.\n       Die beobachtete Eigenschaft ist das <strong>Merkmal</strong>: <strong>qualitativ</strong> (in Worten — Farbe, Marke, Fachrichtung) oder <strong>quantitativ</strong> (in Zahlen).\n       Ein quantitatives Merkmal ist <strong>diskret</strong>, wenn es nur einzelne Werte annimmt (Anzahl der Geschwister), oder <strong>stetig</strong>, wenn es jeden beliebigen Wert aus einem Intervall annehmen kann (Körpergröße, Zeit).</p>",
    "<p>Die <strong>absolute Häufigkeit</strong> $n_i$ eines Wertes ist die Anzahl der Merkmalsträger mit diesem Wert, die <strong>relative Häufigkeit</strong> ist $f_i=\\frac{n_i}{n}$ (oft in Prozent).\n       Die Summe aller $n_i$ ist $n$, die Summe der $f_i$ ist $1$. Die Daten tragen wir in eine <strong>Häufigkeitstabelle</strong> ein.</p>",
    {
     "fig": "s4-stlpcovy",
     "caption": "Säulendiagramm der Noten in einer Klasse mit $28$ Schülerinnen und Schülern. Zum Beispiel haben $9$ die Note $2$, die relative Häufigkeit ist $\\frac{9}{28}\\approx 32{,}1\\,\\%$."
    },
    "<p><strong>Diagramme:</strong> Säulendiagramm (Häufigkeiten der Werte), Kreisdiagramm (der Sektor eines Wertes hat den Mittelpunktswinkel $f_i\\cdot 360^\\circ$), Histogramm (für ein stetiges, in Klassen eingeteiltes Merkmal)\n       und Liniendiagramm (Entwicklung über die Zeit). Bei der <strong>Interpretation</strong> Vorsicht bei einer Achse, die nicht bei null beginnt — kleine Unterschiede sehen dann riesig aus.</p>"
   ],
   "examples": [
    {
     "task": "Eine Tabelle zeigt den Schulweg: Bus 12, Auto 5, Fahrrad 3, zu Fuß 10. Welchen Teil des Kreisdiagramms (Mittelpunktswinkel) nimmt der Bus ein?",
     "steps": [
      "$n=12+5+3+10=30$.",
      "$f=\\frac{12}{30}=0{,}4=40\\,\\%$.",
      "Mittelpunktswinkel: $0{,}4\\cdot 360^\\circ=144^\\circ$."
     ]
    },
    {
     "task": "Berechne anhand des Säulendiagramms oben die Durchschnittsnote der Klasse.",
     "steps": [
      "$n=6+9+7+4+2=28$.",
      "Summe der Noten: $1\\cdot 6+2\\cdot 9+3\\cdot 7+4\\cdot 4+5\\cdot 2=6+18+21+16+10=71$.",
      "$\\bar{x}=\\frac{71}{28}\\approx 2{,}54$"
     ]
    }
   ]
  },
  "s4-charakteristiky": {
   "title": "Mittelwert, Median, Modus und Varianz",
   "summary": "Lage- und Streumaße: Mittelwert, Median, Modus, Quartile, Varianz und Standardabweichung.",
   "theory": [
    "<p><strong>Lagemaße:</strong> das arithmetische Mittel $\\bar{x}=\\frac{x_1+x_2+\\dots+x_n}{n}$ (aus einer Tabelle gewichtet: $\\bar{x}=\\frac{\\sum n_ix_i}{n}$),\n       der <strong>Median</strong> — der mittlere Wert der geordneten Daten (bei geradem $n$ der Mittelwert der beiden mittleren) und der <strong>Modus</strong> — der häufigste Wert.\n       Den Median beeinflussen Extremwerte im Gegensatz zum Mittelwert nicht (z. B. ein einzelnes sehr hohes Gehalt).</p>",
    "<p><strong>Streumaße:</strong> die Spannweite $R=x_{\\max}-x_{\\min}$, die <strong>Varianz</strong> $s^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2$\n       (der Mittelwert der quadrierten Abweichungen vom Mittelwert, auch $s^2=\\overline{x^2}-\\bar{x}^2$) und die <strong>Standardabweichung</strong> $s=\\sqrt{s^2}$, die dieselbe Einheit wie die Daten hat.</p>",
    "<p><strong>Quartile:</strong> Das untere Quartil $Q_1$ ist der Median der unteren Hälfte der Daten, das obere Quartil $Q_3$ der Median der oberen Hälfte.\n       Zwischen $Q_1$ und $Q_3$ liegt die mittlere Hälfte der Daten, ihre Differenz $Q_3-Q_1$ ist der Interquartilsabstand. Die fünf Zahlen (Min, $Q_1$, Median, $Q_3$, Max) stellt ein Boxplot dar.</p>",
    {
     "fig": "s4-krabica",
     "caption": "Boxplot der Daten $2, 4, 5, 5, 6, 7, 7, 8, 9, 10, 14$: Minimum $2$, $Q_1=5$, Median $7$, $Q_3=9$, Maximum $14$."
    }
   ],
   "examples": [
    {
     "task": "Berechne Mittelwert, Median und Modus der Daten $3, 8, 5, 3, 6, 9, 3, 7$.",
     "steps": [
      "Wir ordnen: $3, 3, 3, 5, 6, 7, 8, 9$; $n=8$.",
      "$\\bar{x}=\\frac{44}{8}=5{,}5$.",
      "Median $=\\frac{5+6}{2}=5{,}5$, Modus $=3$ (kommt dreimal vor)."
     ]
    },
    {
     "task": "Berechne Varianz und Standardabweichung der Daten $4, 6, 7, 9, 9$.",
     "steps": [
      "$\\bar{x}=\\frac{35}{5}=7$. Abweichungen: $-3, -1, 0, 2, 2$.",
      "$s^2=\\frac{9+1+0+4+4}{5}=\\frac{18}{5}=3{,}6$.",
      "$s=\\sqrt{3{,}6}\\approx 1{,}90$."
     ]
    }
   ]
  },
  "s4-kombinatorika": {
   "title": "Kombinatorische Aufgaben",
   "summary": "Variationen, Permutationen und Kombinationen ohne und mit Wiederholung in typischen Aufgaben.",
   "theory": [
    "<p><strong>Produktregel der Kombinatorik:</strong> Wählen wir das erste Objekt auf $m$ Arten und zu jedem das zweite auf $n$ Arten, so gibt es $m\\cdot n$ Paare.\n       Die <strong>Summenregel</strong> verwenden wir, wenn sich die Möglichkeiten gegenseitig ausschließen. Bei schwierigeren Aufgaben unterscheiden wir Fälle (z. B. nach der letzten Ziffer) und addieren sie.</p>",
    "<table class=\"tbl\"><tr><th></th><th>ohne Wiederholung</th><th>mit Wiederholung</th></tr>\n       <tr><td>Variationen $k$-ter Klasse aus $n$ (Reihenfolge wichtig)</td><td>$V_k(n)=\\frac{n!}{(n-k)!}$</td><td>$V'_k(n)=n^k$</td></tr>\n       <tr><td>Permutationen (Anordnung aller Elemente)</td><td>$P(n)=n!$</td><td>$P'(k_1,\\dots,k_m)=\\frac{n!}{k_1!\\cdots k_m!}$</td></tr>\n       <tr><td>Kombinationen $k$-ter Klasse aus $n$ (Reihenfolge unwichtig)</td><td>$C_k(n)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$</td><td>$C'_k(n)=\\binom{n+k-1}{k}$</td></tr></table>",
    "<p><strong>Wie man entscheidet:</strong> Spielt die Reihenfolge eine Rolle (Code, Verteilung von Ämtern, Zahl)? Wenn ja, sind es Variationen oder Permutationen, wenn nein (Auswahl einer Gruppe, gleichzeitiges Ziehen von Kugeln), Kombinationen.\n       Bei Zahlen darf an erster Stelle keine Null stehen. Nützlich: $\\binom{n}{k}=\\binom{n}{n-k}$, $\\binom{n}{2}=\\frac{n(n-1)}{2}$ (z. B. die Anzahl der Händedrücke zwischen $n$ Personen).</p>"
   ],
   "examples": [
    {
     "task": "Wie viele dreistellige Zahlen mit verschiedenen Ziffern können wir aus den Ziffern $0, 1, 2, 3, 4$ bilden?",
     "steps": [
      "An erster Stelle darf keine Null stehen: $4$ Möglichkeiten.",
      "An zweiter Stelle die $4$ übrigen Ziffern (auch die Null), an dritter $3$.",
      "<strong>$4\\cdot 4\\cdot 3=48$ Zahlen</strong>"
     ]
    },
    {
     "task": "Aus 8 Jungen und 6 Mädchen wählen wir einen vierköpfigen Ausschuss, in dem 2 Jungen und 2 Mädchen sind. Wie viele Möglichkeiten gibt es?",
     "steps": [
      "Die Jungen wählen wir auf $\\binom{8}{2}=28$ Arten, die Mädchen auf $\\binom{6}{2}=15$ Arten.",
      "Die Auswahlen sind unabhängig, wir verwenden die Produktregel.",
      "<strong>$28\\cdot 15=420$ Möglichkeiten</strong>"
     ]
    }
   ]
  },
  "s4-pravdepodobnost": {
   "title": "Wahrscheinlichkeit und unabhängige Ereignisse",
   "summary": "Laplace-Wahrscheinlichkeit, Gegenereignis, Vereinigung von Ereignissen und Produkt der Wahrscheinlichkeiten unabhängiger Ereignisse.",
   "theory": [
    "<p><strong>Laplace-Definition:</strong> Hat ein Experiment $n$ gleich wahrscheinliche Ergebnisse und tritt das Ereignis $A$ bei $m$ davon ein, so ist $P(A)=\\frac{m}{n}$.\n       Es gilt $0\\le P(A)\\le 1$. Die Anzahlen $m$ und $n$ bestimmen wir oft kombinatorisch, z. B. sind beim gleichzeitigen Ziehen von $k$ Kugeln die Ergebnisse Kombinationen $\\binom{n}{k}$.</p>",
    "<p><strong>Gegenereignis</strong> $A'$ (das Ereignis $A$ tritt nicht ein): $P(A')=1-P(A)$. Vor allem Aufgaben vom Typ „mindestens einmal“ lösen wir über das Gegenereignis „kein einziges Mal“.\n       <strong>Vereinigung</strong>: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$; für unvereinbare Ereignisse (sie können nicht gleichzeitig eintreten) ist $P(A\\cap B)=0$.</p>",
    "<p>Die Ereignisse $A$ und $B$ sind <strong>unabhängig</strong>, wenn das Ergebnis des einen die Wahrscheinlichkeit des anderen nicht ändert; dann gilt $P(A\\cap B)=P(A)\\cdot P(B)$.\n       Typische Fälle sind wiederholte Würfe, Schüsse verschiedener Schützen oder Ziehen mit Zurücklegen. Die Wahrscheinlichkeit, dass bei $n$ unabhängigen Versuchen mit der Wahrscheinlichkeit $p$ das Ereignis mindestens einmal eintritt, ist $1-(1-p)^n$.</p>"
   ],
   "examples": [
    {
     "task": "In einer Urne sind 5 weiße und 3 schwarze Kugeln. Wir ziehen gleichzeitig zwei. Wie groß ist die Wahrscheinlichkeit, dass beide weiß sind?",
     "steps": [
      "Alle Paare: $\\binom{8}{2}=28$, günstige: $\\binom{5}{2}=10$.",
      "$P=\\frac{10}{28}=\\frac{5}{14}\\approx 0{,}357$."
     ]
    },
    {
     "task": "Zwei Schützen treffen die Zielscheibe mit den Wahrscheinlichkeiten $0{,}8$ und $0{,}7$ (unabhängig voneinander). Wie groß ist die Wahrscheinlichkeit, dass die Scheibe getroffen wird?",
     "steps": [
      "Gegenereignis: Beide verfehlen, $P=0{,}2\\cdot 0{,}3=0{,}06$.",
      "<strong>$P=1-0{,}06=0{,}94$</strong>"
     ]
    }
   ]
  },
  "s4-binomicke": {
   "title": "Binomialverteilung",
   "summary": "Wiederholte unabhängige Versuche, Wahrscheinlichkeit für k Treffer, Erwartungswert und Varianz.",
   "theory": [
    "<p>Ein Versuch mit zwei Ergebnissen (Treffer mit der Wahrscheinlichkeit $p$, Niete mit $1-p$) wird $n$-mal unabhängig wiederholt. Die Zufallsgröße $X$ — die Anzahl der Treffer —\n       ist <strong>binomialverteilt</strong>, $X\\sim Bi(n; p)$, und $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$ für $k=0, 1, \\dots, n$.\n       Der Binomialkoeffizient gibt an, auf wie viele Arten die Treffer auf die $n$ Versuche verteilt sein können.</p>",
    "<p>Der <strong>Erwartungswert</strong> (erwartete Anzahl der Treffer) ist $E(X)=np$, die <strong>Varianz</strong> $D(X)=np(1-p)$ und die Standardabweichung $\\sigma=\\sqrt{np(1-p)}$.\n       „Mindestens ein Treffer“ berechnen wir über das Gegenereignis: $P(X\\ge 1)=1-(1-p)^n$, „höchstens $k$“ als Summe $P(X=0)+\\dots+P(X=k)$.</p>",
    {
     "fig": "s4-binom",
     "caption": "Die Säulen zeigen $P(X=k)$ für $Bi(n; p)$, die grüne Säule ist der wahrscheinlichste Wert. Für größere $n$ nähert sich die Form der Glockenkurve der <strong>Normalverteilung</strong> (orange) mit dem Erwartungswert $np$ und der Standardabweichung $\\sqrt{np(1-p)}$."
    }
   ],
   "examples": [
    {
     "task": "Ein Schüler rät die Antworten in einem Test mit 5 Fragen, jede hat 4 Antwortmöglichkeiten (eine richtig). Wie groß ist die Wahrscheinlichkeit, dass er genau 2 Antworten richtig hat?",
     "steps": [
      "$X\\sim Bi(5; \\frac{1}{4})$.",
      "$P(X=2)=\\binom{5}{2}\\left(\\frac{1}{4}\\right)^2\\left(\\frac{3}{4}\\right)^3=10\\cdot\\frac{1}{16}\\cdot\\frac{27}{64}=\\frac{270}{1024}$.",
      "$P\\approx 0{,}2637$"
     ]
    },
    {
     "task": "Ein Produkt ist mit der Wahrscheinlichkeit $0{,}1$ fehlerhaft. Wie viele fehlerhafte Produkte erwarten wir in einer Lieferung von 50 Stück und wie groß ist die Varianz?",
     "steps": [
      "$E(X)=np=50\\cdot 0{,}1=5$ Produkte.",
      "$D(X)=np(1-p)=50\\cdot 0{,}1\\cdot 0{,}9=4{,}5$, $\\sigma\\approx 2{,}12$."
     ]
    }
   ]
  },
  "s4-mat-cisla": {
   "title": "Abitur: Zahlbereiche, Terme und Gleichungen",
   "summary": "Gemischte Aufgaben zu Zahlen, Termumformungen und Gleichungen aus allen Jahrgangsstufen.",
   "theory": [
    "<p><strong>Was man können muss — Zahlen:</strong> $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$, Teilbarkeit (ggT, kgV, Primzahlen), Mengenoperationen und $|A\\cup B|=|A|+|B|-|A\\cap B|$,\n         Betrag als Abstand am Zahlenstrahl, Intervalle, Potenzen $a^{m}a^{n}=a^{m+n}$, $(a^m)^n=a^{mn}$, $a^{-n}=\\frac{1}{a^n}$, Wurzeln $\\sqrt[n]{a}=a^{1/n}$ und rationales Machen des Nenners.</p>",
    "<p><strong>Terme:</strong> Formeln $(a\\pm b)^2=a^2\\pm 2ab+b^2$, $a^2-b^2=(a-b)(a+b)$, $a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$, Faktorisieren durch Ausklammern und mit Formeln,\n         Kürzen von Bruchtermen — immer mit <strong>Bedingungen</strong> (Nenner $\\neq 0$).</p>",
    "<p><strong>Gleichungen:</strong> lineare (Äquivalenzumformungen), quadratische $x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ und der Satz von Vieta, Gleichungen mit der Unbekannten im Nenner,\n         unter der Wurzel (Quadrieren und <strong>Probe</strong>), mit Beträgen (Methode der Nullstellen), Exponential- und Logarithmusgleichungen ($\\log_a x=c \\Leftrightarrow x=a^c$).</p>"
   ],
   "examples": [
    {
     "task": "Löse die Gleichung $\\sqrt{x+7}=x+1$.",
     "steps": [
      "Bedingung $x+1\\ge 0$. Wir quadrieren: $x+7=x^2+2x+1 \\Rightarrow x^2+x-6=0$.",
      "$x_1=2$, $x_2=-3$.",
      "Probe: $\\sqrt9=3$ ✓; für $-3$ ist die rechte Seite negativ ✗. <strong>$K=\\{2\\}$</strong>"
     ]
    },
    {
     "task": "Vereinfache $\\dfrac{x^2-9}{x^2+3x}$ und gib die Bedingungen an.",
     "steps": [
      "$\\dfrac{(x-3)(x+3)}{x(x+3)}$, Bedingungen $x\\neq 0$, $x\\neq -3$.",
      "<strong>$\\dfrac{x-3}{x}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-nerovnice": {
   "title": "Abitur: Ungleichungen und Gleichungssysteme",
   "summary": "Gemischte Aufgaben zu Ungleichungen sowie zu Gleichungs- und Ungleichungssystemen.",
   "theory": [
    "<p><strong>Ungleichungen:</strong> Beim Multiplizieren oder Dividieren mit einer negativen Zahl dreht sich das Zeichen um. Eine quadratische Ungleichung lösen wir mithilfe der Nullstellen und der Form der Parabel:\n         Für $a&gt;0$ ist $ax^2+bx+c&lt;0$ zwischen den Nullstellen. Quotienten- und Produktungleichungen lösen wir mit der <strong>Methode der Nullstellen</strong> (Vorzeichentabelle),\n         Ungleichungen mit Beträgen durch Aufteilen in Intervalle oder über $|x-a|&lt;r \\Leftrightarrow a-r&lt;x&lt;a+r$.</p>",
    "<p><strong>Gleichungssysteme:</strong> Einsetzungs- und Additionsverfahren, bei drei Unbekannten schrittweise Elimination. Ein lineares System aus zwei Gleichungen hat eine, keine oder\n         unendlich viele Lösungen (sich schneidende, parallele, identische Geraden). Bei nichtlinearen Systemen drücken wir aus der linearen Gleichung eine Unbekannte aus und setzen ein.</p>",
    "<p><strong>Typische Fehler:</strong> vergessene Bedingungen, Dividieren durch einen Term mit der Unbekannten (er kann negativ oder null sein), falsches Zusammenfassen der Ergebnisse — bei einem Ungleichungssystem bilden wir die <strong>Schnittmenge</strong>, bei „oder“ die Vereinigung.</p>"
   ],
   "examples": [
    {
     "task": "Löse die Ungleichung $\\dfrac{x-2}{x+1}\\le 0$.",
     "steps": [
      "Nullstellen: $2$ (Zähler) und $-1$ (Nenner, diese ist ausgeschlossen).",
      "Vorzeichen: auf $(-\\infty; -1)$ $+$, auf $(-1; 2)$ $-$, auf $(2; \\infty)$ $+$.",
      "<strong>$K=(-1; 2\\rangle$</strong>"
     ]
    },
    {
     "task": "Löse das System $2x+3y=12$, $x-y=1$.",
     "steps": [
      "Aus der zweiten Gleichung $x=y+1$, wir setzen ein: $2y+2+3y=12 \\Rightarrow y=2$.",
      "$x=3$. <strong>Lösung $[3; 2]$</strong>"
     ]
    }
   ]
  },
  "s4-mat-funkcie": {
   "title": "Abitur: Funktionen und ihre Graphen",
   "summary": "Gemischte Aufgaben zu Funktionen: lineare, quadratische, gebrochen-rationale, Exponential- und Logarithmusfunktionen und ihre Eigenschaften.",
   "theory": [
    "<p><strong>Eigenschaften einer Funktion:</strong> Definitions- und Wertebereich, Monotonie, Symmetrie (gerade/ungerade), Beschränktheit, Extrema, Injektivität und Umkehrfunktion (Symmetrie zur Geraden $y=x$).</p>",
    "<p><strong>Überblick über die Funktionen:</strong> linear $y=kx+q$ ($k$ — Steigung, $q$ — $y$-Achsenabschnitt); quadratisch $y=a(x-m)^2+n$ mit dem Scheitelpunkt $V[m; n]$;\n         gebrochen-linear $y=\\frac{ax+b}{cx+d}$ (Hyperbel mit Asymptoten); Exponentialfunktion $y=a^x$ (steigend für $a&gt;1$, fallend für $0&lt;a&lt;1$, $H=(0; \\infty)$)\n         und Logarithmusfunktion $y=\\log_a x$ ($D=(0; \\infty)$, verläuft durch den Punkt $[1; 0]$); trigonometrische Funktionen mit der Periode $2\\pi$ (Tangens $\\pi$).</p>",
    "<p><strong>Verschieben von Graphen:</strong> $f(x-a)$ verschiebt den Graphen um $a$ nach rechts, $f(x)+b$ um $b$ nach oben, $-f(x)$ ist die Spiegelung an der $x$-Achse, $|f(x)|$ klappt die negativen Teile nach oben.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme den Scheitelpunkt der Parabel $y=x^2-6x+5$ und den Wertebereich der Funktion.",
     "steps": [
      "Quadratische Ergänzung: $y=(x-3)^2-4$.",
      "Scheitelpunkt $V[3; -4]$, die Parabel ist nach oben geöffnet.",
      "<strong>$H(f)=\\langle -4; \\infty)$</strong>"
     ]
    },
    {
     "task": "Bestimme den Definitionsbereich der Funktion $f(x)=\\log_2(6-2x)$.",
     "steps": [
      "Das Argument des Logarithmus muss positiv sein: $6-2x&gt;0$.",
      "<strong>$x&lt;3$, also $D(f)=(-\\infty; 3)$</strong>"
     ]
    }
   ]
  },
  "s4-mat-geometria": {
   "title": "Abitur: ebene Geometrie, Raumgeometrie und analytische Geometrie",
   "summary": "Gemischte Aufgaben zur Geometrie in der Ebene, im Raum und zur analytischen Geometrie.",
   "theory": [
    "<p><strong>Ebene Geometrie:</strong> Winkelsumme im Dreieck $180^\\circ$, Satz des Pythagoras, Höhen- und Kathetensatz, Ähnlichkeit von Dreiecken (Sätze $sss$, $sus$, $uu$, d. h. SSS, SWS, WW),\n         Flächeninhalte ($S=\\frac{a\\cdot v_a}{2}=\\frac{1}{2}ab\\sin\\gamma$, Heronsche Formel), Kreis ($S=\\pi r^2$, $o=2\\pi r$, Ausschnitt $\\frac{\\alpha}{360^\\circ}\\pi r^2$), Umfangs- und Mittelpunktswinkel.</p>",
    "<p><strong>Raumgeometrie:</strong> Volumina $V=S_pv$ (Prisma, Zylinder), $V=\\frac{1}{3}S_pv$ (Pyramide, Kegel), $V=\\frac{4}{3}\\pi r^3$ (Kugel); Oberflächen; Lagebeziehungen von Geraden und Ebenen,\n         Winkel und Abstände — wir suchen immer ein geeignetes rechtwinkliges Dreieck.</p>",
    "<p><strong>Analytische Geometrie:</strong> $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2}$, Mittelpunkt einer Strecke, Vektoren und Skalarprodukt ($\\vec u\\perp\\vec v \\Leftrightarrow \\vec u\\cdot\\vec v=0$),\n         Geradengleichungen (Parameterform, allgemeine Form $ax+by+c=0$, Steigungsform $y=kx+q$), Abstand eines Punktes von einer Geraden, Kreis $(x-m)^2+(y-n)^2=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Bestimme die allgemeine Gleichung der Geraden durch die Punkte $A[1; 2]$ und $B[4; -4]$.",
     "steps": [
      "Richtungsvektor $\\vec{AB}=(3; -6)\\sim(1; -2)$, Normalenvektor $(2; 1)$.",
      "$2x+y+c=0$, wir setzen $A$ ein: $2+2+c=0$, $c=-4$.",
      "<strong>$2x+y-4=0$</strong>"
     ]
    },
    {
     "task": "Ein Zylinder hat das Volumen $72\\pi\\,\\text{cm}^3$ und die Höhe $8\\,\\text{cm}$. Wie groß ist der Radius der Grundfläche?",
     "steps": [
      "$\\pi r^2\\cdot 8=72\\pi \\Rightarrow r^2=9$.",
      "<strong>$r=3\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-goniometria": {
   "title": "Abitur: trigonometrische Funktionen und Trigonometrie",
   "summary": "Gemischte Aufgaben zu trigonometrischen Funktionen, Gleichungen und Berechnungen an Dreiecken.",
   "theory": [
    "<p><strong>Trigonometrische Funktionen:</strong> Bogenmaß $180^\\circ=\\pi\\,\\text{rad}$, Einheitskreis, Vorzeichen in den Quadranten, Werte für $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$,\n         Periodizität, Symmetrie ($\\cos$ gerade, $\\sin$ und $\\mathrm{tg}$ ungerade).</p>",
    "<p><strong>Formeln:</strong> $\\sin^2 x+\\cos^2 x=1$, $\\mathrm{tg}\\,x=\\frac{\\sin x}{\\cos x}$, $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x$,\n         $\\sin(\\pi-x)=\\sin x$, $\\cos(\\pi-x)=-\\cos x$. Trigonometrische Gleichungen: Substitution, Ausklammern, allgemeine Lösung mit $k\\in\\mathbb{Z}$.</p>",
    "<p><strong>Trigonometrie:</strong> im rechtwinkligen Dreieck die Definitionen von $\\sin$, $\\cos$, $\\mathrm{tg}$; im allgemeinen Dreieck der <strong>Sinussatz</strong>\n         $\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2r$ und der <strong>Kosinussatz</strong> $c^2=a^2+b^2-2ab\\cos\\gamma$.</p>"
   ],
   "examples": [
    {
     "task": "Ein Dreieck hat die Seiten $a=5$, $b=8$ und den Winkel $\\gamma=60^\\circ$. Berechne die Seite $c$.",
     "steps": [
      "Kosinussatz: $c^2=25+64-2\\cdot 5\\cdot 8\\cdot\\frac{1}{2}=49$.",
      "<strong>$c=7$</strong>"
     ]
    },
    {
     "task": "Es ist $\\cos x=-\\frac{3}{5}$ und $x\\in(\\frac{\\pi}{2}; \\pi)$. Berechne $\\sin x$ und $\\mathrm{tg}\\,x$.",
     "steps": [
      "$\\sin^2 x=1-\\frac{9}{25}=\\frac{16}{25}$; im II. Quadranten ist der Sinus positiv: $\\sin x=\\frac{4}{5}$.",
      "$\\mathrm{tg}\\,x=\\frac{4/5}{-3/5}=-\\frac{4}{3}$."
     ]
    }
   ]
  },
  "s4-mat-postupnosti": {
   "title": "Abitur: Folgen, Kombinatorik und Wahrscheinlichkeit",
   "summary": "Gemischte Aufgaben zu Folgen, Finanzmathematik, Kombinatorik, Wahrscheinlichkeit und Statistik.",
   "theory": [
    "<p><strong>Folgen:</strong> arithmetisch $a_n=a_1+(n-1)d$, $s_n=\\frac{n}{2}(a_1+a_n)$; geometrisch $a_n=a_1q^{n-1}$, $s_n=a_1\\frac{q^n-1}{q-1}$ ($q\\neq 1$);\n         unendliche geometrische Reihe $s=\\frac{a_1}{1-q}$ für $|q|&lt;1$.</p>",
    "<p><strong>Finanzmathematik:</strong> Zinseszins $K_n=K_0\\left(1+\\frac{p}{100}\\right)^n$ (bei Steuer auf Zinsen sinkt der effektive Zinssatz), regelmäßiges Sparen und Tilgen als Summe einer geometrischen Folge,\n         Prozent und Promille.</p>",
    "<p><strong>Kombinatorik und Wahrscheinlichkeit:</strong> Variationen, Permutationen, Kombinationen (auch mit Wiederholung), $P(A)=\\frac{m}{n}$, Gegenereignis, unabhängige Ereignisse, Binomialverteilung.\n         <strong>Statistik:</strong> Mittelwert, Median, Modus, Varianz, Standardabweichung, Ablesen von Tabellen und Diagrammen.</p>"
   ],
   "examples": [
    {
     "task": "Eine Einlage von $2\\,000\\,€$ wird mit $3\\,\\%$ jährlich verzinst (Zinseszins). Wie viel ist nach 5 Jahren auf dem Konto?",
     "steps": [
      "$K_5=2000\\cdot 1{,}03^5$.",
      "$1{,}03^5\\approx 1{,}159274$.",
      "<strong>$K_5\\approx 2\\,318{,}55\\,€$</strong>"
     ]
    },
    {
     "task": "In einer arithmetischen Folge ist $a_3=7$ und $a_7=19$. Berechne $a_1$ und die Summe der ersten 10 Glieder.",
     "steps": [
      "$a_7-a_3=4d=12 \\Rightarrow d=3$, $a_1=a_3-2d=1$.",
      "$a_{10}=1+9\\cdot 3=28$, $s_{10}=\\frac{10}{2}(1+28)=145$."
     ]
    }
   ]
  },
  "s4-mat-komplex": {
   "title": "Abitur: typische Aufgaben und komplexe Beispiele",
   "summary": "Mehrschrittige Aufgaben, die mehrere Themen verbinden: Optimierung, Finanzen, Folgen, analytische Geometrie, Wahrscheinlichkeit und Ableitungen.",
   "theory": [
    "<p><strong>So gehst du eine komplexe Aufgabe an:</strong></p>\n       <ol><li>Lies die Aufgabe zweimal und schreibe heraus, was gegeben und was gesucht ist (mit Einheiten).</li>\n       <li>Fertige eine Skizze oder Tabelle an; benenne die Unbekannten.</li>\n       <li>Teile die Aufgabe in kleinere Schritte — oft ist es eine Kette bekannter Verfahren (z. B. „Funktion aufstellen → ableiten → Maximum finden“).</li>\n       <li>Prüfe das Ergebnis: durch Einsetzen, durch Abschätzen der Größenordnung, durch Kontrolle der Bedingungen (Länge positiv, Wahrscheinlichkeit aus $\\langle 0; 1\\rangle$).</li></ol>",
    "<p><strong>Häufige Themenkombinationen:</strong> Optimierung (Geometrie + Ableitungen), Verzinsung und Sparen (Prozente + geometrische Folge + Logarithmen),\n       Dreieck im Koordinatensystem (Vektoren + Flächeninhalt + Abstand), Auswahl einer Gruppe und Wahrscheinlichkeit (Kombinationen + Gegenereignis), Tangente an einen Graphen (Ableitung + Geradengleichung).</p>",
    "<p><strong>Weitere nützliche Formeln:</strong> Flächeninhalt des Dreiecks $ABC$ in Koordinaten $S=\\frac{1}{2}\\left|(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)\\right|$,\n       Tangente $y=f(x_0)+f'(x_0)(x-x_0)$, Anzahl der Jahre bei Verzinsung $n=\\frac{\\ln(K_n/K_0)}{\\ln(1+p/100)}$.</p>"
   ],
   "examples": [
    {
     "task": "Aus einem quadratischen Blech mit der Seite $30\\,\\text{cm}$ schneiden wir an den Ecken gleich große Quadrate aus und biegen eine offene Schachtel. Welches Volumen kann sie höchstens haben?",
     "steps": [
      "Bei der Seite $x$ des ausgeschnittenen Quadrats: $V(x)=x(30-2x)^2$, $x\\in(0; 15)$.",
      "$V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)=0 \\Rightarrow x=5$ (der Wert $15$ liegt nicht im Intervall).",
      "<strong>$V(5)=5\\cdot 20^2=2\\,000\\,\\text{cm}^3$</strong>"
     ]
    },
    {
     "task": "Nach wie vielen Jahren verdoppelt sich eine Einlage bei jährlicher Verzinsung mit $4\\,\\%$ zum ersten Mal?",
     "steps": [
      "Wir suchen das kleinste $n$, für das $1{,}04^n\\ge 2$ gilt.",
      "$n\\ge\\frac{\\ln 2}{\\ln 1{,}04}\\approx 17{,}67$.",
      "<strong>Nach 18 Jahren.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(-\\infty; {@0}\\rangle$ a $\\langle {@1}; \\infty)$": "$(-\\infty; {@0}\\rangle$ und $\\langle {@1}; \\infty)$",
  "$(-x)^2\\sin(-x)=-x^2\\sin x$, teda $f(-x)=-f(x)$.": "$(-x)^2\\sin(-x)=-x^2\\sin x$, also $f(-x)=-f(x)$.",
  "$(f\\circ g)({@0})=f(g({@1}))$. Najprv $g({@2})={@3}\\cdot {@4}{@5}={@6}$, potom $f({@7})={@8}{@9}^2{@10}={@11}$.": "$(f\\circ g)({@0})=f(g({@1}))$. Zuerst $g({@2})={@3}\\cdot {@4}{@5}={@6}$, dann $f({@7})={@8}{@9}^2{@10}={@11}$.",
  "$(g\\circ f)({@0})=g(f({@1}))$. Najprv $f({@2})={@3}{@4}^2{@5}={@6}$, potom $g({@7})={@8}\\cdot {@9}{@10}={@11}$.": "$(g\\circ f)({@0})=g(f({@1}))$. Zuerst $f({@2})={@3}{@4}^2{@5}={@6}$, dann $g({@7})={@8}\\cdot {@9}{@10}={@11}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ pre $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ für $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ für $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ pre $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ für $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ für $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, teda $k={@5}$.": "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, also $k={@5}$.",
  "$D={@0}-4c=0 \\Rightarrow c={@1}$. Rovnica je potom $({@2})^2=0$ s dvojnásobným koreňom ${@3}$.": "$D={@0}-4c=0 \\Rightarrow c={@1}$. Die Gleichung ist dann $({@2})^2=0$ mit der doppelten Lösung ${@3}$.",
  "$D={@0}-4p$. Podmienka {@1} dáva {@2}.": "$D={@0}-4p$. Die Bedingung {@1} ergibt {@2}.",
  "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.": "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.",
  "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.": "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.",
  "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (prvý trafí a druhý nie, alebo naopak).": "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (der erste trifft und der zweite nicht oder umgekehrt).",
  "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.": "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.",
  "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.": "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.",
  "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.": "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.",
  "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Odchýlky od priemeru: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.": "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Abweichungen vom Mittelwert: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.",
  "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.": "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.",
  "$\\cos x=\\frac{1}{2}$; v jednej perióde má riešenia $\\frac{\\pi}{3}$ a $-\\frac{\\pi}{3}$, perióda kosínusu je $2\\pi$.": "$\\cos x=\\frac{1}{2}$; in einer Periode hat sie die Lösungen $\\frac{\\pi}{3}$ und $-\\frac{\\pi}{3}$, die Periode des Kosinus ist $2\\pi$.",
  "$\\cos(-x)=\\cos x$ a $(-x)^2=x^2$, teda $f(-x)=f(x)$.": "$\\cos(-x)=\\cos x$ und $(-x)^2=x^2$, also $f(-x)=f(x)$.",
  "$\\mathrm{tg}\\,x=1$ alebo $\\mathrm{tg}\\,x=-1$, teda $x=\\frac{\\pi}{4}+k\\pi$ alebo $x=-\\frac{\\pi}{4}+k\\pi$. Spolu sú to body vzdialené o $\\frac{\\pi}{2}$.": "$\\mathrm{tg}\\,x=1$ oder $\\mathrm{tg}\\,x=-1$, also $x=\\frac{\\pi}{4}+k\\pi$ oder $x=-\\frac{\\pi}{4}+k\\pi$. Zusammen sind das Punkte im Abstand $\\frac{\\pi}{2}$.",
  "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, čo platí pre $\\frac{\\pi}{6}$; perióda tangensu je $\\pi$.": "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, was für $\\frac{\\pi}{6}$ gilt; die Periode des Tangens ist $\\pi$.",
  "$\\sin x=\\frac{\\sqrt2}{2}$; sínus je kladný v I. a II. kvadrante, teda $\\frac{\\pi}{4}$ a $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, perióda $2\\pi$.": "$\\sin x=\\frac{\\sqrt2}{2}$; der Sinus ist im I. und II. Quadranten positiv, also $\\frac{\\pi}{4}$ und $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, Periode $2\\pi$.",
  "$\\sin x=\\pm\\frac{1}{2}$; riešenia $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ sa opakujú s periódou $\\pi$ ako $\\pm\\frac{\\pi}{6}+k\\pi$.": "$\\sin x=\\pm\\frac{1}{2}$; die Lösungen $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ wiederholen sich mit der Periode $\\pi$ als $\\pm\\frac{\\pi}{6}+k\\pi$.",
  "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, z $S=\\frac{|AB|\\cdot v_c}{2}$ je $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.": "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, aus $S=\\frac{|AB|\\cdot v_c}{2}$ folgt $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.",
  "$f''(x)={@0}$. Nerovnica $f''(x)&gt;0$ dáva ${@1}$, funkcia je konvexná na {@2}.": "$f''(x)={@0}$. Die Ungleichung $f''(x)&gt;0$ ergibt ${@1}$, die Funktion ist konvex auf {@2}.",
  "$f'(x)={@0}$ má korene ${@1}$ a ${@2}$. {@3} Porovnáme hodnoty: {@4}. {@5} z nich je ${@6}$.": "$f'(x)={@0}$ hat die Nullstellen ${@1}$ und ${@2}$. {@3} Wir vergleichen die Werte: {@4}. {@5} von ihnen ist ${@6}$.",
  "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ pre $x={@2}$ a druhá derivácia tam mení znamienko. $f({@3})={@4}$, inflexný bod je $[{@5}; {@6}]$.": "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ für $x={@2}$ und die zweite Ableitung wechselt dort das Vorzeichen. $f({@3})={@4}$, der Wendepunkt ist $[{@5}; {@6}]$.",
  "$f'(x)={@0}$.": "$f'(x)={@0}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$, stacionárne body sú ${@4}$ a ${@5}$. Derivácia má znamienka {@6} na intervaloch $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} je preto v bode $x={@12}$ a $f({@13})={@14}$.": "$f'(x)={@0}={@1}{@2}{@3}$, die stationären Punkte sind ${@4}$ und ${@5}$. Die Ableitung hat die Vorzeichen {@6} auf den Intervallen $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} liegt daher im Punkt $x={@12}$ und $f({@13})={@14}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$. Derivácia je {@4} medzi koreňmi ${@5}$ a ${@6}$ a {@7} mimo nich. Funkcia je {@8} na {@9}.": "$f'(x)={@0}={@1}{@2}{@3}$. Die Ableitung ist zwischen den Nullstellen ${@5}$ und ${@6}$ {@4} und außerhalb {@7}. Die Funktion ist {@8} auf {@9}.",
  "$f'(x)={@0}\\cos {@1}x{@2}$. Keďže $\\cos 0=1$ a $\\mathrm{e}^0=1$, je $f'(0)={@3}{@4}={@5}$.": "$f'(x)={@0}\\cos {@1}x{@2}$. Da $\\cos 0=1$ und $\\mathrm{e}^0=1$, ist $f'(0)={@3}{@4}={@5}$.",
  "$f'(x)={@0}\\sin {@1}x{@2}$. Keďže $\\sin 0=0$ a $\\mathrm{e}^0=1$, je $f'(0)=0{@3}={@4}$.": "$f'(x)={@0}\\sin {@1}x{@2}$. Da $\\sin 0=0$ und $\\mathrm{e}^0=1$, ist $f'(0)=0{@3}={@4}$.",
  "$f(-1)=\\mathrm{e}^{-1}$ sa nerovná $f(1)=\\mathrm{e}$ ani $-\\mathrm{e}$.": "$f(-1)=\\mathrm{e}^{-1}$ ist weder gleich $f(1)=\\mathrm{e}$ noch gleich $-\\mathrm{e}$.",
  "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, párne mocniny zmenu znamienka „pohltia“.": "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, gerade Potenzen „schlucken“ den Vorzeichenwechsel.",
  "$f(-x)=-\\sin x+\\cos x$, čo nie je $f(x)$ ani $-f(x)$.": "$f(-x)=-\\sin x+\\cos x$, was weder $f(x)$ noch $-f(x)$ ist.",
  "$f(-x)=-x^3+{@0}x=-f(x)$, výraz obsahuje len nepárne mocniny.": "$f(-x)=-x^3+{@0}x=-f(x)$, der Ausdruck enthält nur ungerade Potenzen.",
  "$f(1)={@0}$ a $f(-1)={@1}$; neplatí ani jedna z rovností $f(-1)=f(1)$, $f(-1)=-f(1)$.": "$f(1)={@0}$ und $f(-1)={@1}$; keine der Gleichungen $f(-1)=f(1)$, $f(-1)=-f(1)$ gilt.",
  "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Dotyčnica: $y={@5}+{@6}(x-{@7})$, teda $y={@8}$.": "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Tangente: $y={@5}+{@6}(x-{@7})$, also $y={@8}$.",
  "$f^{-1}({@0})$ je číslo $x$, pre ktoré $f(x)={@1}$. Riešime $\\dfrac{{@2}}{{@3}}={@4}$: po vynásobení menovateľmi dostaneme lineárnu rovnicu s riešením $x={@5}$. Skúška: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓": "$f^{-1}({@0})$ ist die Zahl $x$, für die $f(x)={@1}$. Wir lösen $\\dfrac{{@2}}{{@3}}={@4}$: Nach Multiplikation mit den Nennern erhalten wir eine lineare Gleichung mit der Lösung $x={@5}$. Probe: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓",
  "$n={@0}$ je {@1} v usporiadanom súbore. Kumulované počty: {@2}. Medián je ${@3}$.": "$n={@0}$ ist {@1} im geordneten Datensatz. Kumulierte Häufigkeiten: {@2}. Der Median ist ${@3}$.",
  "$n={@0}={@1}$. Vážený aritmetický priemer: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.": "$n={@0}={@1}$. Gewogenes arithmetisches Mittel: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.",
  "${@0} x={@1}$ pre $x\\in\\{{@2}\\}$": "${@0} x={@1}$ für $x\\in\\{{@2}\\}$",
  "${@0}^{x}=({@1}^{x})^2$, substitúcia $t={@2}^{x}$, pričom $t&gt;0$: ${@3}=0$, korene $t_1={@4}$, $t_2={@5}$. {@6}Z ${@7}^{x}={@8}$ je $x={@9}${@10}. $K=\\{{@11}\\}$.": "${@0}^{x}=({@1}^{x})^2$, Substitution $t={@2}^{x}$, wobei $t&gt;0$: ${@3}=0$, Lösungen $t_1={@4}$, $t_2={@5}$. {@6}Aus ${@7}^{x}={@8}$ folgt $x={@9}${@10}. $K=\\{{@11}\\}$.",
  "(Výsledok zadaj ako zlomok alebo desatinné číslo zaokrúhlené na 3 desatinné miesta.)": "(Gib das Ergebnis als Bruch oder als auf 3 Dezimalstellen gerundete Dezimalzahl ein.)",
  "(otočíme znak)": "(wir kehren das Zeichen um)",
  ", obsah $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$": ", Flächeninhalt $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$",
  ", prepona má ${@0}\\,\\text{cm}$": ", die Hypotenuse hat ${@0}\\,\\text{cm}$",
  ", z ${@0}^{x}={@1}$ je $x={@2}$": ", aus ${@0}^{x}={@1}$ folgt $x={@2}$",
  "0 alebo 5": "0 oder 5",
  "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · body [1; {@2}] a [{@3}; 1] sú súmerné podľa y = x": "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · die Punkte [1; {@2}] und [{@3}; 1] sind symmetrisch zu y = x",
  "<span class=\"c-ok\">f′ &gt; 0, funkcia rastie</span>": "<span class=\"c-ok\">f′ &gt; 0, die Funktion steigt</span>",
  "<span class=\"muted small\">Téma: {@0}</span><br>{@1}": "<span class=\"muted small\">Thema: {@0}</span><br>{@1}",
  "ABC": "ABC",
  "ABD": "ABD",
  "ABE": "ABE",
  "ABF": "ABF",
  "ABG": "ABG",
  "ACB": "ACB",
  "ACD": "ACD",
  "ACE": "ACE",
  "ACF": "ACF",
  "ACG": "ACG",
  "ACH": "ACH",
  "ADB": "ADB",
  "ADC": "ADC",
  "ADE": "ADE",
  "ADF": "ADF",
  "ADG": "ADG",
  "ADH": "ADH",
  "AEB": "AEB",
  "AEC": "AEC",
  "AED": "AED",
  "AEF": "AEF",
  "AEG": "AEG",
  "AFB": "AFB",
  "AFD": "AFD",
  "AFG": "AFG",
  "AFH": "AFH",
  "AGB": "AGB",
  "AGC": "AGC",
  "AGD": "AGD",
  "AGE": "AGE",
  "AGF": "AGF",
  "AHB": "AHB",
  "AHC": "AHC",
  "AHD": "AHD",
  "AHE": "AHE",
  "AHF": "AHF",
  "AHG": "AHG",
  "ANALÝZA": "ANALYZA",
  "ANANÁS": "BANANE",
  "Ak po dosadení vyjde $\\frac{0}{0}$, rozlož čitateľa na súčin. Jeden z činiteľov sa vykráti s menovateľom.": "Ergibt sich nach dem Einsetzen $\\frac{0}{0}$, zerlege den Zähler in ein Produkt. Einer der Faktoren kürzt sich mit dem Nenner.",
  "Aká dlhá je potom strana rovnobežná so stenou (v metroch)?": "Wie lang ist dann die zur Mauer parallele Seite (in Metern)?",
  "Aká dlhá je prepona v cm?": "Wie lang ist die Hypotenuse in cm?",
  "Aká dlhá je základňa trojuholníka na osi $x$?": "Wie lang ist die Grundseite des Dreiecks auf der $x$-Achse?",
  "Aká dlhá musí byť strana rovnobežná so stenou, aby bol obsah najväčší (v metroch)?": "Wie lang muss die zur Mauer parallele Seite sein, damit der Flächeninhalt am größten ist (in Metern)?",
  "Aká je $y$-ová súradnica bodu s $x={@0}$?": "Wie lautet die $y$-Koordinate des Punktes mit $x={@0}$?",
  "Aká je pravdepodobnosť, že obaja minú?": "Wie groß ist die Wahrscheinlichkeit, dass beide verfehlen?",
  "Aká je pravdepodobnosť, že prvý minie a druhý zasiahne?": "Wie groß ist die Wahrscheinlichkeit, dass der erste verfehlt und der zweite trifft?",
  "Aká je pravdepodobnosť, že prvý zasiahne a druhý minie?": "Wie groß ist die Wahrscheinlichkeit, dass der erste trifft und der zweite verfehlt?",
  "Aká je pravdepodobnosť, že terč zasiahne aspoň jeden?": "Wie groß ist die Wahrscheinlichkeit, dass mindestens einer die Zielscheibe trifft?",
  "Aká je pravdepodobnosť, že terč zasiahne práve jeden?": "Wie groß ist die Wahrscheinlichkeit, dass genau einer die Zielscheibe trifft?",
  "Aká je pravdepodobnosť, že vo výbere bude aspoň jedno dievča? {@0}": "Wie groß ist die Wahrscheinlichkeit, dass in der Auswahl mindestens ein Mädchen ist? {@0}",
  "Aká je pravdepodobnosť, že šestka nepadne ani raz? Výsledok zaokrúhli na 4 desatinné miesta.": "Wie groß ist die Wahrscheinlichkeit, dass keine einzige Sechs fällt? Runde das Ergebnis auf 4 Dezimalstellen.",
  "Aká je pravdepodobnosť, že šestka padne aspoň raz? Výsledok zaokrúhli na 3 desatinné miesta.": "Wie groß ist die Wahrscheinlichkeit, dass mindestens eine Sechs fällt? Runde das Ergebnis auf 3 Dezimalstellen.",
  "Aká je pravdepodobnosť? {@0}": "Wie groß ist die Wahrscheinlichkeit? {@0}",
  "Aká je teda hodnota limity? Zadaj ju ako zlomok.": "Welchen Wert hat also der Grenzwert? Gib ihn als Bruch ein.",
  "Aká je výška trojuholníka (y-ová súradnica priesečníka oboch priamok)?": "Wie groß ist die Höhe des Dreiecks ($y$-Koordinate des Schnittpunkts beider Geraden)?",
  "Aké je najmenšie celé číslo v prieniku?": "Was ist die kleinste ganze Zahl in der Schnittmenge?",
  "Aké je najmenšie celé číslo, ktoré ju spĺňa?": "Was ist die kleinste ganze Zahl, die sie erfüllt?",
  "Aké sú súradnice bodu $K$ (v cm)? Zadaj $x$; $y$; $z$.": "Welche Koordinaten hat der Punkt $K$ (in cm)? Gib $x$; $y$; $z$ ein.",
  "Akú dĺžku (v cm) musí mať strana odstrihnutých štvorcov, aby mala krabica najväčší objem?": "Welche Länge (in cm) muss die Seite der ausgeschnittenen Quadrate haben, damit die Schachtel das größte Volumen hat?",
  "Akú hodnotu má derivácia člena ${@0}$ v bode $0$?": "Welchen Wert hat die Ableitung des Glieds ${@0}$ an der Stelle $0$?",
  "Akú hodnotu má menovateľ derivácie $({@0})^2$ v bode ${@1}$?": "Welchen Wert hat der Nenner der Ableitung $({@0})^2$ an der Stelle ${@1}$?",
  "Akú hodnotu má vnútorná funkcia ${@0}$ v bode ${@1}$?": "Welchen Wert hat die innere Funktion ${@0}$ an der Stelle ${@1}$?",
  "Akú hodnotu má člen $uv'$ v bode $0$?": "Welchen Wert hat das Glied $uv'$ an der Stelle $0$?",
  "Aký je absolútny člen $q$?": "Wie lautet das absolute Glied $q$?",
  "Aký je najväčší objem krabice v $\\text{cm}^3$?": "Wie groß ist das größte Volumen der Schachtel in $\\text{cm}^3$?",
  "Aký je najväčší obsah pozemku (v $\\text{m}^2$)?": "Wie groß ist der größte Flächeninhalt des Grundstücks (in $\\text{m}^2$)?",
  "Aký je obsah oblasti?": "Wie groß ist der Flächeninhalt des Gebiets?",
  "Aký je obsah útvaru? Zadaj zlomok alebo celé číslo.": "Wie groß ist der Flächeninhalt der Figur? Gib einen Bruch oder eine ganze Zahl ein.",
  "Aký je parameter $p$?": "Wie groß ist der Parameter $p$?",
  "Aký je rozsah súboru $n$ (počet všetkých žiakov)?": "Wie groß ist der Umfang des Datensatzes $n$ (Anzahl aller Schüler)?",
  "Aký je stredový uhol výseče v stupňoch?": "Wie groß ist der Mittelpunktswinkel des Kreissektors in Grad?",
  "Aký je súčet vekov po príchode nového člena?": "Wie groß ist die Summe der Alter nach dem Hinzukommen des neuen Mitglieds?",
  "Aký je súčet vekov pôvodných členov?": "Wie groß ist die Summe der Alter der ursprünglichen Mitglieder?",
  "Aký je súčet známok všetkých žiakov?": "Wie groß ist die Summe der Noten aller Schüler?",
  "Aký je súčin faktoriálov počtov opakujúcich sa písmen?": "Wie groß ist das Produkt der Fakultäten der Häufigkeiten der sich wiederholenden Buchstaben?",
  "Aký je teda exponent ${@0}$?": "Wie lautet also der Exponent ${@0}$?",
  "Aký je štatistický znak „{@0}“?": "Was für ein statistisches Merkmal ist „{@0}“?",
  "Aký najväčší objem (v $\\text{cm}^3$) môže mať krabica?": "Welches größte Volumen (in $\\text{cm}^3$) kann die Schachtel haben?",
  "Aký najväčší obsah (v $\\text{m}^2$) môže mať pozemok?": "Welchen größten Flächeninhalt (in $\\text{m}^2$) kann das Grundstück haben?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „autobus“ v kruhovom diagrame?": "Welchen Mittelpunktswinkel (in Grad) hat der Sektor „Bus“ im Kreisdiagramm?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „auto“ v kruhovom diagrame?": "Welchen Mittelpunktswinkel (in Grad) hat der Sektor „Auto“ im Kreisdiagramm?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „bicykel“ v kruhovom diagrame?": "Welchen Mittelpunktswinkel (in Grad) hat der Sektor „Fahrrad“ im Kreisdiagramm?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „pešo“ v kruhovom diagrame?": "Welchen Mittelpunktswinkel (in Grad) hat der Sektor „zu Fuß“ im Kreisdiagramm?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „vlak“ v kruhovom diagrame?": "Welchen Mittelpunktswinkel (in Grad) hat der Sektor „Zug“ im Kreisdiagramm?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „{@0}“ v kruhovom diagrame?": "Welchen Mittelpunktswinkel (in Grad) hat der Sektor „{@0}“ im Kreisdiagramm?",
  "Akým číslom sa suma na účte každý rok vynásobí?": "Mit welcher Zahl wird der Betrag auf dem Konto jedes Jahr multipliziert?",
  "BAC": "BAC",
  "BAD": "BAD",
  "BAE": "BAE",
  "BAF": "BAF",
  "BAG": "BAG",
  "BAH": "BAH",
  "BCA": "BCA",
  "BCD": "BCD",
  "BCF": "BCF",
  "BCG": "BCG",
  "BCH": "BCH",
  "BDA": "BDA",
  "BDC": "BDC",
  "BDE": "BDE",
  "BDF": "BDF",
  "BDG": "BDG",
  "BDH": "BDH",
  "BEA": "BEA",
  "BEC": "BEC",
  "BED": "BED",
  "BEF": "BEF",
  "BEG": "BEG",
  "BFA": "BFA",
  "BFC": "BFC",
  "BFD": "BFD",
  "BFE": "BFE",
  "BFG": "BFG",
  "BFH": "BFH",
  "BGC": "BGC",
  "BGD": "BGD",
  "BGE": "BGE",
  "BGF": "BGF",
  "BGH": "BGH",
  "BHA": "BHA",
  "BHC": "BHC",
  "BHD": "BHD",
  "BHE": "BHE",
  "BHF": "BHF",
  "BHG": "BHG",
  "Basketbalista premení trestný hod s pravdepodobnosťou ${@0}$, hody sú nezávislé. Hádže {@1}-krát; $X$ je počet premenených hodov.": "Ein Basketballspieler verwandelt einen Freiwurf mit der Wahrscheinlichkeit ${@0}$, die Würfe sind unabhängig. Er wirft {@1}-mal; $X$ ist die Anzahl der verwandelten Würfe.",
  "Biela a čierna môžu prísť v dvoch poradiach. Pri výbere naraz radšej počítaj neusporiadané dvojice: bielu a čiernu guľu vyberáš nezávisle.": "Weiß und Schwarz können in zwei Reihenfolgen kommen. Beim gleichzeitigen Ziehen zähle lieber ungeordnete Paare: Die weiße und die schwarze Kugel wählst du unabhängig aus.",
  "Binomické rozdelenie": "Binomialverteilung",
  "Bod $T[{@0}; {@1}]$ leží na kružnici $k: {@2}$. Dotyčnica ku kružnici v bode $T$ má rovnicu ${@3}+c=0$. Vypočítaj $c$.": "Der Punkt $T[{@0}; {@1}]$ liegt auf dem Kreis $k: {@2}$. Die Tangente an den Kreis im Punkt $T$ hat die Gleichung ${@3}+c=0$. Berechne $c$.",
  "CAB": "CAB",
  "CAD": "CAD",
  "CAE": "CAE",
  "CAF": "CAF",
  "CAG": "CAG",
  "CAH": "CAH",
  "CBA": "CBA",
  "CBD": "CBD",
  "CBE": "CBE",
  "CBF": "CBF",
  "CBG": "CBG",
  "CBH": "CBH",
  "CDA": "CDA",
  "CDB": "CDB",
  "CDE": "CDE",
  "CDF": "CDF",
  "CDG": "CDG",
  "CDH": "CDH",
  "CEA": "CEA",
  "CEB": "CEB",
  "CED": "CED",
  "CEF": "CEF",
  "CEG": "CEG",
  "CEH": "CEH",
  "CFA": "CFA",
  "CFD": "CFD",
  "CFE": "CFE",
  "CFG": "CFG",
  "CGA": "CGA",
  "CGB": "CGB",
  "CGD": "CGD",
  "CGF": "CGF",
  "CGH": "CGH",
  "CHB": "CHB",
  "CHD": "CHD",
  "CHE": "CHE",
  "CHF": "CHF",
  "CHG": "CHG",
  "Celé čísla ${@0}, \\dots, {@1}$ — je ich ${@2}$.": "Die ganzen Zahlen ${@0}, \\dots, {@1}$ — es sind ${@2}$.",
  "Chlapcov a dievčatá vyberáš nezávisle (kombinácie, lebo na poradí nezáleží) a počty vynásobíš.": "Jungen und Mädchen wählst du unabhängig aus (Kombinationen, weil die Reihenfolge keine Rolle spielt) und multiplizierst die Anzahlen.",
  "DAB": "DAB",
  "DAC": "DAC",
  "DAE": "DAE",
  "DAF": "DAF",
  "DAG": "DAG",
  "DAH": "DAH",
  "DBA": "DBA",
  "DBC": "DBC",
  "DBE": "DBE",
  "DBF": "DBF",
  "DBG": "DBG",
  "DBH": "DBH",
  "DCA": "DCA",
  "DCB": "DCB",
  "DCE": "DCE",
  "DCF": "DCF",
  "DCG": "DCG",
  "DCH": "DCH",
  "DEA": "DEA",
  "DEB": "DEB",
  "DEC": "DEC",
  "DEF": "DEF",
  "DEG": "DEG",
  "DEH": "DEH",
  "DFA": "DFA",
  "DFB": "DFB",
  "DFC": "DFC",
  "DFE": "DFE",
  "DFG": "DFG",
  "DFH": "DFH",
  "DGA": "DGA",
  "DGB": "DGB",
  "DGC": "DGC",
  "DGE": "DGE",
  "DGF": "DGF",
  "DGH": "DGH",
  "DHB": "DHB",
  "DHC": "DHC",
  "DHE": "DHE",
  "DHF": "DHF",
  "DHG": "DHG",
  "Dané sú funkcie $f(x)={@0}$ a $g(x)={@1}$. Vypočítaj $({@2})({@3})$.": "Gegeben sind die Funktionen $f(x)={@0}$ und $g(x)={@1}$. Berechne $({@2})({@3})$.",
  "Daný je súbor údajov: ${@0}$. Urči jeho {@1}.": "Gegeben ist der Datensatz: ${@0}$. Bestimme {@1}.",
  "Definičný obor $(0; \\infty)$ nie je súmerný podľa nuly, funkcia preto nemôže byť párna ani nepárna.": "Der Definitionsbereich $(0; \\infty)$ ist nicht symmetrisch zu null, die Funktion kann daher weder gerade noch ungerade sein.",
  "Delíš záporným číslom, znak nerovnosti sa otočí.": "Du dividierst durch eine negative Zahl, das Ungleichheitszeichen kehrt sich um.",
  "Derivácia je $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Koľko je $f'({@4})$?": "Die Ableitung ist $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Wie viel ist $f'({@4})$?",
  "Derivácia podielu: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. V bode ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.": "Quotientenregel: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. An der Stelle ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.",
  "Derivácia sínusu je kosínus bez mínusu: $(\\sin x)'=\\cos x$. Mínus patrí k derivácii kosínusu.": "Die Ableitung des Sinus ist der Kosinus ohne Minus: $(\\sin x)'=\\cos x$. Das Minus gehört zur Ableitung des Kosinus.",
  "Derivácia súčinu nie je súčin derivácií: $(u\\cdot v)'=u'v+uv'$, nie $u'\\cdot v'$.": "Die Ableitung eines Produkts ist nicht das Produkt der Ableitungen: $(u\\cdot v)'=u'v+uv'$, nicht $u'\\cdot v'$.",
  "Derivácia súčinu: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Keďže $\\mathrm{e}^0=1$, je $f'(0)={@3}$.": "Produktregel: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Da $\\mathrm{e}^0=1$, ist $f'(0)={@3}$.",
  "Derivácia súčinu: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Keďže $\\ln 1=0$, je $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.": "Produktregel: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Da $\\ln 1=0$, ist $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.",
  "Derivácia zloženej funkcie: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. V bode ${@4}$ je vnútorná funkcia ${@5}\\cdot {@6}{@7}={@8}$, teda $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.": "Kettenregel: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. An der Stelle ${@4}$ ist die innere Funktion ${@5}\\cdot {@6}{@7}={@8}$, also $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.",
  "Determinant sústavy je $m^2-{@0}$, je nulový pre $m=\\pm {@1}$ (inak má sústava jediné riešenie). Pre $m={@2}$ majú rovnice ľavé strany úmerné, ale pravé strany ${@3}$ a ${@4}$ nie: priamky sú rovnobežné rôzne, riešenie neexistuje. Pre $m={@5}$ je druhá rovnica $(-1)$-násobkom prvej: priamky splývajú, riešení je nekonečne veľa. Odpoveď: $m={@6}$.": "Die Determinante des Systems ist $m^2-{@0}$, sie ist null für $m=\\pm {@1}$ (sonst hat das System eine einzige Lösung). Für $m={@2}$ haben die Gleichungen proportionale linke Seiten, die rechten Seiten ${@3}$ und ${@4}$ aber nicht: Die Geraden sind parallel und verschieden, es gibt keine Lösung. Für $m={@5}$ ist die zweite Gleichung das $(-1)$-Fache der ersten: Die Geraden fallen zusammen, es gibt unendlich viele Lösungen. Antwort: $m={@6}$.",
  "Determinant z vektorov $\\vec{AB}$ a $\\vec{AC}$ dáva obsah rovnobežníka. Obsah trojuholníka je jeho polovica.": "Die Determinante aus den Vektoren $\\vec{AB}$ und $\\vec{AC}$ ergibt den Flächeninhalt des Parallelogramms. Der Flächeninhalt des Dreiecks ist seine Hälfte.",
  "Diskriminant je $D=b^2-4ac$. Nezabudni na štvorku pred súčinom $ac$.": "Die Diskriminante ist $D=b^2-4ac$. Vergiss die Vier vor dem Produkt $ac$ nicht.",
  "Diskriminant je $D=b^2-4ac$. Z rovnice $D=0$ treba $c$ ešte vydeliť štyrmi.": "Die Diskriminante ist $D=b^2-4ac$. Aus der Gleichung $D=0$ muss man $c$ noch durch vier dividieren.",
  "Do vnútra intervalu patrí {@0}.": "Im Inneren des Intervalls liegt {@0}.",
  "Do vzorca pre plášť $\\pi rs$ patrí strana kužeľa $s$, nie výška $v$.": "In die Formel für den Mantel $\\pi rs$ gehört die Mantellinie $s$ des Kegels, nicht die Höhe $v$.",
  "Dosadením $y={@0}$ dostaneš rovnicu ${@1}=0$. Aký je jej diskriminant?": "Durch Einsetzen von $y={@0}$ erhältst du die Gleichung ${@1}=0$. Wie lautet ihre Diskriminante?",
  "Dosadením dostaneme $\\frac{0}{0}$. Menovateľ je rozdiel štvorcov: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.": "Durch Einsetzen erhalten wir $\\frac{0}{0}$. Der Nenner ist eine Differenz von Quadraten: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Nach dem Kürzen $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.",
  "Dosadením vyjde $\\frac{0}{0}$, čo nie je nula, ale neurčitý výraz. Menovateľ rozlož ako rozdiel štvorcov a vykráť.": "Durch Einsetzen ergibt sich $\\frac{0}{0}$, und das ist nicht null, sondern ein unbestimmter Ausdruck. Zerlege den Nenner als Differenz von Quadraten und kürze.",
  "Dosadením vyšlo $\\frac{0}{0}$, a to nie je nula, ale neurčitý výraz. Čitateľa rozlož na súčin a vykráť.": "Durch Einsetzen ergab sich $\\frac{0}{0}$, und das ist nicht null, sondern ein unbestimmter Ausdruck. Zerlege den Zähler in ein Produkt und kürze.",
  "Dosadil si stred kružnice. Dotyčnica stredom neprechádza, prechádza bodom dotyku $T$.": "Du hast den Mittelpunkt des Kreises eingesetzt. Die Tangente geht nicht durch den Mittelpunkt, sie geht durch den Berührpunkt $T$.",
  "Dosadiť sa nedá, menovateľ sa blíži k nule. Deliť číslom blízkym nule dáva v absolútnej hodnote veľmi veľké čísla.": "Einsetzen geht nicht, der Nenner nähert sich null. Die Division durch eine Zahl nahe null ergibt betragsmäßig sehr große Zahlen.",
  "Dosadíme ${@0}^2 x=1-{@1}^2 x$ a upravíme: ${@2}{@3}{@4}=0$.": "Wir setzen ${@0}^2 x=1-{@1}^2 x$ ein und formen um: ${@2}{@3}{@4}=0$.",
  "Dosaď $-x$ namiesto $x$ a porovnaj $f(-x)$ s $f(x)$ a s $-f(x)$. Over aj, či je definičný obor súmerný podľa nuly.": "Setze $-x$ statt $x$ ein und vergleiche $f(-x)$ mit $f(x)$ und mit $-f(x)$. Prüfe auch, ob der Definitionsbereich symmetrisch zu null ist.",
  "Dosaď bod $P$ do výrazu ${@0}$. Akú hodnotu dostaneš?": "Setze den Punkt $P$ in den Ausdruck ${@0}$ ein. Welchen Wert erhältst du?",
  "Dosaď bod ${@0}$ do ľavej strany rovnice roviny. Aká je absolútna hodnota výsledku?": "Setze den Punkt ${@0}$ in die linke Seite der Ebenengleichung ein. Wie groß ist der Betrag des Ergebnisses?",
  "Dosaď súradnice bodu $P$ do rovnice roviny a vyjadri $d$.": "Setze die Koordinaten des Punktes $P$ in die Ebenengleichung ein und drücke $d$ aus.",
  "Dotyčnica je kolmá na polomer $ST$. Do zadanej rovnice dosaď súradnice bodu $T$.": "Die Tangente steht senkrecht auf dem Radius $ST$. Setze die Koordinaten des Punktes $T$ in die gegebene Gleichung ein.",
  "Druhá mocnina pomeru dĺžok platí pre povrch. Zachováva sa však objem, a ten závisí od tretej mocniny.": "Das Quadrat des Längenverhältnisses gilt für die Oberfläche. Erhalten bleibt aber das Volumen, und das hängt von der dritten Potenz ab.",
  "Druhá nerovnica má riešenie $x\\le d$. Aké je číslo $d$?": "Die zweite Ungleichung hat die Lösung $x\\le d$. Wie lautet die Zahl $d$?",
  "Druhá súradnica inflexného bodu je funkčná hodnota $f({@0})$, nie hodnota $f''({@1})$.": "Die zweite Koordinate des Wendepunkts ist der Funktionswert $f({@0})$, nicht der Wert $f''({@1})$.",
  "Druhý koreň čitateľa je $-c$; súčin koreňov je ${@0}$.": "Die zweite Nullstelle des Zählers ist $-c$; das Produkt der Nullstellen ist ${@0}$.",
  "Dvaja strelci vystrelia nezávisle po jednej rane. Prvý zasiahne terč s pravdepodobnosťou ${@0}$, druhý s pravdepodobnosťou ${@1}$. Aká je pravdepodobnosť, že {@2}?": "Zwei Schützen geben unabhängig voneinander je einen Schuss ab. Der erste trifft die Zielscheibe mit der Wahrscheinlichkeit ${@0}$, der zweite mit der Wahrscheinlichkeit ${@1}$. Wie groß ist die Wahrscheinlichkeit, dass {@2}?",
  "Dvojnásobný koreň je pri $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.": "Eine doppelte Lösung gibt es bei $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.",
  "Dĺžky sa neodčítajú priamo. Polomer gule je prepona pravouhlého trojuholníka, použi Pytagorovu vetu.": "Die Längen werden nicht direkt subtrahiert. Der Kugelradius ist die Hypotenuse eines rechtwinkligen Dreiecks, verwende den Satz des Pythagoras.",
  "Dĺžky strán pravouhlého trojuholníka tvoria aritmetickú postupnosť a jeho obvod je ${@0}\\,\\text{cm}$. Vypočítaj {@1}.": "Die Seitenlängen eines rechtwinkligen Dreiecks bilden eine arithmetische Folge und sein Umfang ist ${@0}\\,\\text{cm}$. Berechne {@1}.",
  "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">najpravdepodobnejšie k = {@3}</span>": "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">am wahrscheinlichsten k = {@3}</span>",
  "E; D": "E; D",
  "EAB": "EAB",
  "EAC": "EAC",
  "EAD": "EAD",
  "EAF": "EAF",
  "EAG": "EAG",
  "EAH": "EAH",
  "EBA": "EBA",
  "EBC": "EBC",
  "EBD": "EBD",
  "EBF": "EBF",
  "EBG": "EBG",
  "EBH": "EBH",
  "ECA": "ECA",
  "ECB": "ECB",
  "ECD": "ECD",
  "ECF": "ECF",
  "ECG": "ECG",
  "ECH": "ECH",
  "EDA": "EDA",
  "EDB": "EDB",
  "EDC": "EDC",
  "EDF": "EDF",
  "EDG": "EDG",
  "EDH": "EDH",
  "EFA": "EFA",
  "EFB": "EFB",
  "EFC": "EFC",
  "EFD": "EFD",
  "EFG": "EFG",
  "EFH": "EFH",
  "EGB": "EGB",
  "EGC": "EGC",
  "EGD": "EGD",
  "EGF": "EGF",
  "EGH": "EGH",
  "EHA": "EHA",
  "EHB": "EHB",
  "EHC": "EHC",
  "EHD": "EHD",
  "EHF": "EHF",
  "EHG": "EHG",
  "Exponenciálna funkcia a k nej inverzná logaritmická funkcia": "Exponentialfunktion und die zu ihr inverse Logarithmusfunktion",
  "FAB": "FAB",
  "FAC": "FAC",
  "FAD": "FAD",
  "FAE": "FAE",
  "FAG": "FAG",
  "FAH": "FAH",
  "FBA": "FBA",
  "FBC": "FBC",
  "FBD": "FBD",
  "FBE": "FBE",
  "FBG": "FBG",
  "FBH": "FBH",
  "FCA": "FCA",
  "FCB": "FCB",
  "FCD": "FCD",
  "FCE": "FCE",
  "FCG": "FCG",
  "FCH": "FCH",
  "FDA": "FDA",
  "FDC": "FDC",
  "FDE": "FDE",
  "FDG": "FDG",
  "FDH": "FDH",
  "FEA": "FEA",
  "FEB": "FEB",
  "FEC": "FEC",
  "FED": "FED",
  "FEG": "FEG",
  "FEH": "FEH",
  "FGA": "FGA",
  "FGB": "FGB",
  "FGC": "FGC",
  "FGD": "FGD",
  "FGE": "FGE",
  "FGH": "FGH",
  "FHA": "FHA",
  "FHB": "FHB",
  "FHC": "FHC",
  "FHD": "FHD",
  "FHE": "FHE",
  "FHG": "FHG",
  "Funkcia $f(x)=\\dfrac{{@0}}{{@1}}$ je prostá. Vypočítaj $f^{-1}\\!\\left({@2}\\right)$.": "Die Funktion $f(x)=\\dfrac{{@0}}{{@1}}$ ist injektiv. Berechne $f^{-1}\\!\\left({@2}\\right)$.",
  "Funkcia $f(x)={@0}$ má práve jedno {@1}. Nájdi bod, v ktorom ho nadobúda: zadaj $x$ a $f(x)$ (napr. 2; -5).": "Die Funktion $f(x)={@0}$ hat genau {@1}. Finde den Punkt, in dem sie es annimmt: Gib $x$ und $f(x)$ ein (z. B. 2; -5).",
  "Funkcia je konvexná tam, kde $f''(x)&gt;0$. Vypočítaj druhú deriváciu a vyrieš lineárnu nerovnicu.": "Die Funktion ist konvex dort, wo $f''(x)&gt;0$. Berechne die zweite Ableitung und löse die lineare Ungleichung.",
  "Funkcie sú rôzne, takže záleží na tom, kto je predseda a kto pokladník. Ide o variácie, nie kombinácie.": "Die Funktionen sind verschieden, daher ist wichtig, wer Vorsitzender und wer Kassenwart ist. Es handelt sich um Variationen, nicht um Kombinationen.",
  "GAB": "GAB",
  "GAC": "GAC",
  "GAD": "GAD",
  "GAE": "GAE",
  "GAH": "GAH",
  "GBA": "GBA",
  "GBC": "GBC",
  "GBD": "GBD",
  "GBE": "GBE",
  "GBF": "GBF",
  "GBH": "GBH",
  "GCA": "GCA",
  "GCB": "GCB",
  "GCD": "GCD",
  "GCH": "GCH",
  "GDA": "GDA",
  "GDB": "GDB",
  "GDC": "GDC",
  "GDE": "GDE",
  "GDF": "GDF",
  "GDH": "GDH",
  "GEA": "GEA",
  "GEB": "GEB",
  "GEC": "GEC",
  "GED": "GED",
  "GEH": "GEH",
  "GFA": "GFA",
  "GFB": "GFB",
  "GFC": "GFC",
  "GFD": "GFD",
  "GFE": "GFE",
  "GFH": "GFH",
  "GHA": "GHA",
  "GHB": "GHB",
  "GHC": "GHC",
  "GHD": "GHD",
  "Graf": "Graph",
  "Graf funkcie sin x / x s dierou v bode 0": "Graph der Funktion sin x / x mit einer Lücke im Punkt 0",
  "Graf funkcie x na tretiu mínus 3x s extrémami": "Graph der Funktion x hoch drei minus 3x mit Extrema",
  "Graf racionálnej funkcie s asymptotami": "Graph einer gebrochenrationalen Funktion mit Asymptoten",
  "Grafy funkcií e na x a ln x s dotyčnicami": "Graphen der Funktionen e hoch x und ln x mit Tangenten",
  "Gule ťaháme naraz, teda bez vrátenia. Po vytiahnutí bielej je v urne o jednu bielu menej.": "Die Kugeln ziehen wir gleichzeitig, also ohne Zurücklegen. Nach dem Ziehen einer weißen ist in der Urne eine weiße weniger.",
  "Guľu s polomerom $r={@0}\\,\\text{cm}$ pretne rovina vo vzdialenosti ${@1}\\,\\text{cm}$ od stredu gule. Vypočítaj {@2}": "Eine Kugel mit dem Radius $r={@0}\\,\\text{cm}$ wird von einer Ebene im Abstand ${@1}\\,\\text{cm}$ vom Kugelmittelpunkt geschnitten. Berechne {@2}",
  "HAB": "HAB",
  "HAC": "HAC",
  "HAD": "HAD",
  "HAE": "HAE",
  "HAF": "HAF",
  "HAG": "HAG",
  "HBA": "HBA",
  "HBC": "HBC",
  "HBD": "HBD",
  "HBE": "HBE",
  "HBF": "HBF",
  "HBG": "HBG",
  "HCA": "HCA",
  "HCB": "HCB",
  "HCD": "HCD",
  "HCE": "HCE",
  "HCF": "HCF",
  "HCG": "HCG",
  "HDA": "HDA",
  "HDB": "HDB",
  "HDC": "HDC",
  "HDE": "HDE",
  "HDF": "HDF",
  "HDG": "HDG",
  "HEA": "HEA",
  "HEB": "HEB",
  "HEC": "HEC",
  "HED": "HED",
  "HEF": "HEF",
  "HEG": "HEG",
  "HFA": "HFA",
  "HFB": "HFB",
  "HFC": "HFC",
  "HFD": "HFD",
  "HFE": "HFE",
  "HFG": "HFG",
  "HGB": "HGB",
  "HGC": "HGC",
  "HGD": "HGD",
  "HGE": "HGE",
  "HGF": "HGF",
  "Hodnota ${@0}$ je síce koreňom $V'(x)$, ale nepatrí do prípustného intervalu: krabica by nemala žiadne dno.": "Der Wert ${@0}$ ist zwar eine Nullstelle von $V'(x)$, gehört aber nicht zum zulässigen Intervall: Die Schachtel hätte keinen Boden.",
  "Hodnota ${@0}$ leží mimo $\\langle -1; 1\\rangle$, tá riešenie nedáva.": "Der Wert ${@0}$ liegt außerhalb von $\\langle -1; 1\\rangle$, er liefert keine Lösung.",
  "Hodnotu inverznej funkcie nájdeš bez jej predpisu: hľadáš $x$, pre ktoré $f(x)$ dá zadané číslo.": "Den Wert der Umkehrfunktion findest du ohne ihre Funktionsvorschrift: Du suchst $x$, für das $f(x)$ die gegebene Zahl ergibt.",
  "Hodnoty sú celé čísla získané počítaním, medzi dvoma susednými nie je iná možná hodnota.": "Die Werte sind durch Zählen gewonnene ganze Zahlen, zwischen zwei benachbarten gibt es keinen anderen möglichen Wert.",
  "Hodnoty sú slová (kategórie), nie čísla.": "Die Werte sind Wörter (Kategorien), keine Zahlen.",
  "Hodnoty tohto znaku sú slová (kategórie), nie čísla.": "Die Werte dieses Merkmals sind Wörter (Kategorien), keine Zahlen.",
  "Hodnoty tohto znaku sú čísla, takže znak je kvantitatívny.": "Die Werte dieses Merkmals sind Zahlen, das Merkmal ist also quantitativ.",
  "Hodnoty získavame meraním a môžu byť ľubovoľným číslom z nejakého intervalu.": "Die Werte gewinnen wir durch Messen und sie können eine beliebige Zahl aus einem Intervall sein.",
  "Hodnoty získavame meraním, môžu byť ľubovoľným číslom z nejakého intervalu (aj desatinným).": "Die Werte gewinnen wir durch Messen, sie können eine beliebige Zahl aus einem Intervall sein (auch eine Dezimalzahl).",
  "Hodnoty získavame počítaním, sú to len celé čísla. Medzi dvoma susednými hodnotami nie je iná možná hodnota.": "Die Werte gewinnen wir durch Zählen, es sind nur ganze Zahlen. Zwischen zwei benachbarten Werten gibt es keinen anderen möglichen Wert.",
  "Hodíme naraz dvoma hracími kockami. Aká je pravdepodobnosť, že {@0}? {@1}": "Wir werfen gleichzeitig zwei Spielwürfel. Wie groß ist die Wahrscheinlichkeit, dass {@0}? {@1}",
  "Hranica intervalu konvexnosti je inflexný bod, v ktorom $f''(x)=0$. Over, kde je druhá derivácia nulová.": "Die Grenze des Konvexitätsintervalls ist der Wendepunkt, in dem $f''(x)=0$. Prüfe, wo die zweite Ableitung null ist.",
  "Hranice integrálu sú nulové body paraboly. Funkcia je párna, môžeš počítať $2\\int_0^{m}$.": "Die Integrationsgrenzen sind die Nullstellen der Parabel. Die Funktion ist gerade, du kannst $2\\int_0^{m}$ berechnen.",
  "Hranol má dve podstavy, hornú aj dolnú. Obsah podstavy započítaj dvakrát.": "Ein Prisma hat zwei Grundflächen, eine obere und eine untere. Zähle den Flächeninhalt der Grundfläche doppelt.",
  "Hrany sa zväčšia o ${@0}\\,\\%$, {@1} však rastie rýchlejšie: koeficient podobnosti treba umocniť.": "Die Kanten werden um ${@0}\\,\\%$ größer, {@1} wächst aber schneller: Der Ähnlichkeitsfaktor muss potenziert werden.",
  "Hráč hodí hracou kockou {@0}-krát. Aká je pravdepodobnosť, že aspoň raz padne šestka? Výsledok zaokrúhli na 3 desatinné miesta.": "Ein Spieler wirft einen Spielwürfel {@0}-mal. Wie groß ist die Wahrscheinlichkeit, dass mindestens einmal eine Sechs fällt? Runde das Ergebnis auf 3 Dezimalstellen.",
  "Hráč hodí {@0}-krát hracou kockou. Náhodná premenná $X$ je počet hodov, v ktorých padla šestka.": "Ein Spieler wirft {@0}-mal einen Spielwürfel. Die Zufallsgröße $X$ ist die Anzahl der Würfe, bei denen eine Sechs fiel.",
  "Hráč zapisoval počet bodov v jednotlivých zápasoch: ${@0}$. Aký je modus tohto súboru?": "Ein Spieler notierte die Anzahl der Punkte in den einzelnen Spielen: ${@0}$. Was ist der Modus dieses Datensatzes?",
  "Hľadisko letného amfiteátra má v prvom rade {@0} {@1} a každý ďalší rad má o {@2} {@3} viac. Koľko radov treba najmenej postaviť, aby bolo spolu aspoň {@4} sedadiel?": "Die Tribüne eines Freilichttheaters hat in der ersten Reihe {@0} {@1} und jede weitere Reihe hat {@2} {@3} mehr. Wie viele Reihen muss man mindestens bauen, damit es insgesamt mindestens {@4} Sitzplätze gibt?",
  "Hľadá sa hodnota funkcie, nie bod $x$, v ktorom ju nadobúda.": "Gesucht ist der Funktionswert, nicht die Stelle $x$, an der er angenommen wird.",
  "Hľadáme $t$ tak, aby $A+t\\vec{u}=Q$. Z prvej rovnice {@0} je $t={@1}$. Ďalšie rovnice: {@2} a {@3} — {@4}": "Wir suchen $t$ so, dass $A+t\\vec{u}=Q$. Aus der ersten Gleichung {@0} folgt $t={@1}$. Weitere Gleichungen: {@2} und {@3} — {@4}",
  "Hľadáme najmenšie prirodzené $n$, pre ktoré ${@0}^n\\ge {@1}$. Logaritmovaním: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, teda $n={@5}$.": "Wir suchen das kleinste natürliche $n$, für das ${@0}^n\\ge {@1}$. Durch Logarithmieren: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, also $n={@5}$.",
  "Ide o permutácie: ${@0}!={@1}$.": "Es handelt sich um Permutationen: ${@0}!={@1}$.",
  "Inflexný bod hľadaj tam, kde $f''(x)=0$ a druhá derivácia mení znamienko.": "Den Wendepunkt suche dort, wo $f''(x)=0$ gilt und die zweite Ableitung das Vorzeichen wechselt.",
  "Integroval si len od $0$ do ${@0}$, to je polovica útvaru. Dolná hranica je druhý nulový bod paraboly.": "Du hast nur von $0$ bis ${@0}$ integriert, das ist die Hälfte der Figur. Die untere Grenze ist die zweite Nullstelle der Parabel.",
  "Integruj ako mocninu, $\\frac{u^{n+1}}{n+1}$, a výsledok vydeľ koeficientom pri $x$ vnútri zátvorky.": "Integriere wie eine Potenz, $\\frac{u^{n+1}}{n+1}$, und dividiere das Ergebnis durch den Koeffizienten bei $x$ in der Klammer.",
  "Integrál mocniny je $\\frac{u^{{@0}}}{{@1}}$: exponent sa zvýši o jedna a zároveň sa ním delí.": "Das Integral einer Potenz ist $\\frac{u^{{@0}}}{{@1}}$: Der Exponent erhöht sich um eins und zugleich wird durch ihn dividiert.",
  "Inverznou funkciou k exponenciálnej je logaritmická. Hľadáš $x$, pre ktoré ${@0}^{{@1}}{@2}={@3}$.": "Die Umkehrfunktion der Exponentialfunktion ist die Logarithmusfunktion. Du suchst $x$, für das ${@0}^{{@1}}{@2}={@3}$.",
  "Inverzná funkcia k funkcii $f(x)={@0}$ má tvar $f^{-1}(x)=kx+q$. Zadaj $k$ a $q$ (napr. 1/2; -3).": "Die Umkehrfunktion der Funktion $f(x)={@0}$ hat die Form $f^{-1}(x)=kx+q$. Gib $k$ und $q$ ein (z. B. 1/2; -3).",
  "Inverzná funkcia vráti operácie v opačnom poradí: násobenie sa zmení na delenie. Vymeň $x$ a $y$ a vyjadri $y$.": "Die Umkehrfunktion macht die Operationen in umgekehrter Reihenfolge rückgängig: Die Multiplikation wird zur Division. Vertausche $x$ und $y$ und drücke $y$ aus.",
  "Inverzná funkcia: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.": "Umkehrfunktion: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.",
  "Jav „aspoň jeden úspech“ je opačný k javu „ani jeden úspech“.": "Das Ereignis „mindestens ein Erfolg“ ist das Gegenereignis zu „kein einziger Erfolg“.",
  "Jav „aspoň jedna biela“ zahŕňa aj prípad, keď je jedna biela a jedna čierna. Použi opačný jav „obe čierne“.": "Das Ereignis „mindestens eine weiße“ umfasst auch den Fall, dass eine weiß und eine schwarz ist. Verwende das Gegenereignis „beide schwarz“.",
  "Javy „prvý zasiahne“ a „druhý zasiahne“ môžu nastať súčasne: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Alebo použi opačný jav.": "Die Ereignisse „der erste trifft“ und „der zweite trifft“ können gleichzeitig eintreten: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Oder verwende das Gegenereignis.",
  "Je daná funkcia $f(x)={@0}^{{@1}}{@2}$. Vypočítaj $f^{-1}({@3})$.": "Gegeben ist die Funktion $f(x)={@0}^{{@1}}{@2}$. Berechne $f^{-1}({@3})$.",
  "Je funkcia $f(x)={@0}$ párna, nepárna, alebo ani jedno?": "Ist die Funktion $f(x)={@0}$ gerade, ungerade oder keins von beiden?",
  "Jedna osoba môže mať najviac jednu funkciu, ďalšiu funkciu už vyberáš len zo zvyšných ľudí.": "Eine Person kann höchstens eine Funktion haben, die nächste Funktion wählst du nur noch aus den übrigen Personen.",
  "Jedna súradnica nestačí: to isté $t$ musí vyhovovať všetkým trom rovniciam. Over aj $y$ a $z$.": "Eine Koordinate reicht nicht: Dasselbe $t$ muss alle drei Gleichungen erfüllen. Prüfe auch $y$ und $z$.",
  "Jedného človeka posadíme na ľubovoľné miesto (otočenia nerozlišujeme), ostatných {@0} usporiadame: $({@1}-1)!={@2}!={@3}$.": "Eine Person setzen wir auf einen beliebigen Platz (Drehungen unterscheiden wir nicht), die übrigen {@0} ordnen wir an: $({@1}-1)!={@2}!={@3}$.",
  "KAJAK": "KAJAK",
  "Kandidáti sú stacionárne body vnútri intervalu a oba krajné body. Vypočítaj v nich funkčné hodnoty a porovnaj ich.": "Kandidaten sind die stationären Punkte im Inneren des Intervalls und beide Randpunkte. Berechne dort die Funktionswerte und vergleiche sie.",
  "Každé podanie rúk je dvojica ľudí, na poradí nezáleží: $\\binom{n}{2}$. Zostav kvadratickú rovnicu.": "Jeder Händedruck ist ein Paar von Personen, die Reihenfolge spielt keine Rolle: $\\binom{n}{2}$. Stelle eine quadratische Gleichung auf.",
  "Každú uhlopriečku si započítal dvakrát, z oboch jej koncových vrcholov. Výsledok vydeľ dvoma.": "Du hast jede Diagonale doppelt gezählt, von beiden ihrer Endecken aus. Dividiere das Ergebnis durch zwei.",
  "Každú známku vynásob počtom žiakov, ktorí ju dostali, výsledky sčítaj a vydeľ počtom všetkých žiakov.": "Multipliziere jede Note mit der Anzahl der Schüler, die sie bekommen haben, addiere die Ergebnisse und dividiere durch die Anzahl aller Schüler.",
  "Každý rok sa suma vynásobí číslom $1+\\frac{p}{100}$ — ide o geometrickú postupnosť.": "Jedes Jahr wird der Betrag mit der Zahl $1+\\frac{p}{100}$ multipliziert — es handelt sich um eine geometrische Folge.",
  "Každý vrchol spojíme s $n-3$ nesusednými vrcholmi a každú uhlopriečku tak započítame dvakrát: $\\frac{n(n-3)}{2}$. {@0}": "Jede Ecke verbinden wir mit $n-3$ nicht benachbarten Ecken und zählen so jede Diagonale doppelt: $\\frac{n(n-3)}{2}$. {@0}",
  "Keby boli všetky písmená rôzne, bolo by ich $n!$. Výmena rovnakých písmen nové slovo nedá, preto vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Wären alle Buchstaben verschieden, gäbe es $n!$ Anordnungen. Das Vertauschen gleicher Buchstaben ergibt kein neues Wort, daher dividiere durch die Fakultäten der Häufigkeiten der sich wiederholenden Buchstaben.",
  "Kocka $ABCDEFGH$ má hranu $a={@0}\\,\\text{cm}$.": "Der Würfel $ABCDEFGH$ hat die Kante $a={@0}\\,\\text{cm}$.",
  "Kocka ABCDEFGH s vyznačenými priamkami": "Würfel ABCDEFGH mit eingezeichneten Geraden",
  "Kocka s telesovou uhlopriečkou a uhlom s rovinou podstavy": "Würfel mit Raumdiagonale und ihrem Winkel mit der Grundfläche",
  "Kocky rozlišujeme: $[1; 2]$ a $[2; 1]$ sú dva rôzne výsledky. Započítaj obe poradia.": "Wir unterscheiden die Würfel: $[1; 2]$ und $[2; 1]$ sind zwei verschiedene Ergebnisse. Zähle beide Reihenfolgen.",
  "Koeficient podobnosti je $k={@0}$. Koľkokrát sa zväčší {@1}? Zadaj číslo na 4 desatinné miesta.": "Der Ähnlichkeitsfaktor ist $k={@0}$. Um das Wievielfache wächst {@1}? Gib eine Zahl auf 4 Dezimalstellen ein.",
  "Koeficient podobnosti je $k={@0}$. {@1} sa zmení $k^{{@2}}={@3}$-krát, teda sa zväčší o ${@4}\\,\\%$.": "Der Ähnlichkeitsfaktor ist $k={@0}$. {@1}: Änderung um das $k^{{@2}}={@3}$-Fache, also eine Zunahme um ${@4}\\,\\%$.",
  "Konvexný mnohouholník má {@0} uhlopriečok. Koľko má vrcholov?": "Ein konvexes Vieleck hat {@0} Diagonalen. Wie viele Ecken hat es?",
  "Koreň $t_2={@0}$ je záporný a rovnica ${@1}^{x}={@2}$ nemá riešenie.": "Die Lösung $t_2={@0}$ ist negativ und die Gleichung ${@1}^{x}={@2}$ hat keine Lösung.",
  "Koľko celých čísel ju spĺňa?": "Wie viele ganze Zahlen erfüllen sie?",
  "Koľko celých čísel leží v prieniku?": "Wie viele ganze Zahlen liegen in der Schnittmenge?",
  "Koľko eur bude na účte po {@0} rokoch? Výsledok zaokrúhli na centy.": "Wie viele Euro werden nach {@0} Jahren auf dem Konto sein? Runde das Ergebnis auf Cent.",
  "Koľko je $f'(0)$?": "Wie viel ist $f'(0)$?",
  "Koľko je $f'({@0})$? Zadaj celé číslo alebo zlomok.": "Wie viel ist $f'({@0})$? Gib eine ganze Zahl oder einen Bruch ein.",
  "Koľko je $x=f^{-1}({@0})$?": "Wie viel ist $x=f^{-1}({@0})$?",
  "Koľko je ${@0}!$?": "Wie viel ist ${@0}!$?",
  "Koľko je spolu možností?": "Wie viele Möglichkeiten gibt es insgesamt?",
  "Koľko je trojíc, v ktorých sú len chlapci?": "Wie viele Dreiergruppen gibt es, in denen nur Jungen sind?",
  "Koľko je všetkých trojíc?": "Wie viele Dreiergruppen gibt es insgesamt?",
  "Koľko je všetkých výberov dvoch gúľ?": "Wie viele Auswahlen von zwei Kugeln gibt es insgesamt?",
  "Koľko percent to je?": "Wie viel Prozent sind das?",
  "Koľko percent žiakov odpovedalo „autobus“?": "Wie viel Prozent der Schüler haben „Bus“ geantwortet?",
  "Koľko percent žiakov odpovedalo „auto“?": "Wie viel Prozent der Schüler haben „Auto“ geantwortet?",
  "Koľko percent žiakov odpovedalo „bicykel“?": "Wie viel Prozent der Schüler haben „Fahrrad“ geantwortet?",
  "Koľko percent žiakov odpovedalo „pešo“?": "Wie viel Prozent der Schüler haben „zu Fuß“ geantwortet?",
  "Koľko percent žiakov odpovedalo „vlak“?": "Wie viel Prozent der Schüler haben „Zug“ geantwortet?",
  "Koľko percent žiakov odpovedalo „{@0}“?": "Wie viel Prozent der Schüler haben „{@0}“ geantwortet?",
  "Koľko rokov má nový člen?": "Wie alt ist das neue Mitglied?",
  "Koľko rôznych „slov“ (aj nezmyselných) vznikne preusporiadaním všetkých písmen slova {@0}?": "Wie viele verschiedene „Wörter“ (auch sinnlose) entstehen durch Umstellen aller Buchstaben des Wortes {@0}?",
  "Koľko uhlopriečok má konvexný {@0}-uholník?": "Wie viele Diagonalen hat ein konvexes {@0}-Eck?",
  "Koľko {@0} {@1}čísel možno zostaviť z cifier {@2}, ak sa cifry {@3}?": "Wie viele {@0} {@1}Zahlen kann man aus den Ziffern {@2} bilden, wenn sich die Ziffern {@3}?",
  "Koľkokrát najmenej musíme hodiť hracou kockou, aby pravdepodobnosť, že aspoň raz padne šestka, bola väčšia ako ${@0}$?": "Wie oft muss man mindestens würfeln, damit die Wahrscheinlichkeit, dass mindestens einmal eine Sechs fällt, größer als ${@0}$ ist?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť do radu na {@1} stoličiek?": "Auf wie viele Arten können sich {@0} Personen in einer Reihe auf {@1} Stühle setzen?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť okolo okrúhleho stola, ak rozlišujeme len to, kto sedí vedľa koho (otočenie celého rozsadenia nič nemení)?": "Auf wie viele Arten können sich {@0} Personen um einen runden Tisch setzen, wenn wir nur unterscheiden, wer neben wem sitzt (eine Drehung der ganzen Sitzordnung ändert nichts)?",
  "Koľkými spôsobmi vyberieme chlapcov?": "Auf wie viele Arten wählen wir die Jungen aus?",
  "Koľkými spôsobmi vyberieme dievčatá?": "Auf wie viele Arten wählen wir die Mädchen aus?",
  "Krabicový graf": "Boxplot",
  "Kružnica a priamka": "Kreis und Gerade",
  "Ktoré z koreňov spĺňajú podmienky? Zadaj všetky riešenia rovnice.": "Welche der Lösungen erfüllen die Bedingungen? Gib alle Lösungen der Gleichung ein.",
  "Ktorý koreň $V'(x)$ leží v intervale $(0; {@0})$?": "Welche Nullstelle von $V'(x)$ liegt im Intervall $(0; {@0})$?",
  "Ktorý zápis vyjadruje všetky riešenia rovnice ${@0}$ v $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?": "Welche Schreibweise gibt alle Lösungen der Gleichung ${@0}$ in $\\mathbb{R}$ an ($k\\in\\mathbb{Z}$)?",
  "Kvadratická funkcia $f'$ má medzi koreňmi opačné znamienko ako jej vedúci koeficient.": "Die quadratische Funktion $f'$ hat zwischen den Nullstellen das entgegengesetzte Vorzeichen wie ihr Leitkoeffizient.",
  "Kvadratická rovnica má dvojnásobný koreň práve vtedy, keď je diskriminant nulový.": "Eine quadratische Gleichung hat genau dann eine doppelte Lösung, wenn die Diskriminante null ist.",
  "Leží bod $Q{@0}$ na priamke $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?": "Liegt der Punkt $Q{@0}$ auf der Geraden $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?",
  "Lokálne maximum": "Lokales Maximum",
  "Lokálne minimum": "Lokales Minimum",
  "MATEMATIKA": "MATEMATIKA",
  "Medián je priemer {@0}. a {@1}. hodnoty": "Der Median ist das Mittel des {@0}. und des {@1}. Werts",
  "Medián je priemer {@0}. a {@1}. hodnoty: $\\frac{{@2}+{@3}}{2}={@4}$.": "Der Median ist das Mittel des {@0}. und des {@1}. Werts: $\\frac{{@2}+{@3}}{2}={@4}$.",
  "Medián je {@0}. hodnota": "Der Median ist der {@0}. Wert",
  "Medián je {@0}. hodnota: ${@1}$.": "Der Median ist der {@0}. Wert: ${@1}$.",
  "Medián nie je prostredná zo známok 1 až 5. Je to prostredná hodnota, keď známky všetkých žiakov zoradíš za sebou.": "Der Median ist nicht die mittlere der Noten 1 bis 5. Er ist der mittlere Wert, wenn du die Noten aller Schüler der Reihe nach ordnest.",
  "Menovateľ je nulový pre $x={@0}$ a čitateľ tam nulový nie je (lebo $ad-bc={@1}\\neq 0$), preto je $x={@2}$ zvislá asymptota. Pre $x\\to\\pm\\infty$ sa $f(x)$ blíži k podielu koeficientov pri $x$: $\\frac{{@3}}{{@4}}={@5}$, vodorovná asymptota je $y={@6}$.": "Der Nenner ist null für $x={@0}$ und der Zähler ist dort nicht null (weil $ad-bc={@1}\\neq 0$), daher ist $x={@2}$ eine senkrechte Asymptote. Für $x\\to\\pm\\infty$ nähert sich $f(x)$ dem Quotienten der Koeffizienten bei $x$: $\\frac{{@3}}{{@4}}={@5}$, die waagerechte Asymptote ist $y={@6}$.",
  "Menovateľ rozložíme: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení zostane $\\frac{1}{\\sqrt{x}+{@3}}$. Akú hodnotu má $\\sqrt{x}+{@4}$ pre $x={@5}$?": "Wir zerlegen den Nenner: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Nach dem Kürzen bleibt $\\frac{1}{\\sqrt{x}+{@3}}$. Welchen Wert hat $\\sqrt{x}+{@4}$ für $x={@5}$?",
  "Mimobežné priamky neležia v jednej rovine. Skús nájsť stenu alebo rez kocky, v ktorom ležia obe priamky.": "Windschiefe Geraden liegen nicht in einer Ebene. Versuche, eine Fläche oder einen Schnitt des Würfels zu finden, in dem beide Geraden liegen.",
  "Množina riešení sústavy troch lineárnych nerovníc": "Lösungsmenge eines Systems dreier linearer Ungleichungen",
  "Mocniny s rovnakým exponentom $x$ daj na jednu stranu, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, a potom obe strany zlogaritmuj.": "Bringe die Potenzen mit demselben Exponenten $x$ auf eine Seite, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, und logarithmiere dann beide Seiten.",
  "Modus je hodnota s najväčšou početnosťou. Spočítaj, koľkokrát sa vyskytuje každá hodnota.": "Der Modus ist der Wert mit der größten Häufigkeit. Zähle, wie oft jeder Wert vorkommt.",
  "Na ktorom intervale je funkcia $f(x)={@0}$ konvexná?": "Auf welchem Intervall ist die Funktion $f(x)={@0}$ konvex?",
  "Na ktorých intervaloch je funkcia $f(x)={@0}$ {@1}?": "Auf welchen Intervallen ist die Funktion $f(x)={@0}$ {@1}?",
  "Na poradí nezáleží, ide o kombinácie: chlapcov vyberieme $\\binom{{@0}}{{@1}}={@2}$ spôsobmi, dievčatá $\\binom{{@3}}{{@4}}={@5}$ spôsobmi. Podľa pravidla súčinu je spolu ${@6}\\cdot {@7}={@8}$ možností.": "Die Reihenfolge spielt keine Rolle, es handelt sich um Kombinationen: Die Jungen wählen wir auf $\\binom{{@0}}{{@1}}={@2}$ Arten aus, die Mädchen auf $\\binom{{@3}}{{@4}}={@5}$ Arten. Nach der Produktregel gibt es insgesamt ${@6}\\cdot {@7}={@8}$ Möglichkeiten.",
  "Na prvé miesto môžeme dať {@0} ({@1} {@2}), na ďalšie miesta {@3}. Spolu ${@4}={@5}$.": "An die erste Stelle können wir {@0} setzen ({@1} {@2}), an die weiteren Stellen {@3}. Insgesamt ${@4}={@5}$.",
  "Na stretnutí si každý účastník podal ruku s každým iným práve raz. Podaní rúk bolo {@0}. Koľko ľudí bolo na stretnutí?": "Bei einem Treffen gab jeder Teilnehmer jedem anderen genau einmal die Hand. Es gab {@0} Händedrücke. Wie viele Personen waren bei dem Treffen?",
  "Na tomto intervale leží stacionárny bod, v ktorom $f'$ mení znamienko, takže tam funkcia nie je monotónna.": "Auf diesem Intervall liegt ein stationärer Punkt, in dem $f'$ das Vorzeichen wechselt, daher ist die Funktion dort nicht monoton.",
  "Na valci je len polguľa, jej objem je polovica objemu gule.": "Auf dem Zylinder sitzt nur eine Halbkugel, ihr Volumen ist das halbe Volumen der Kugel.",
  "Na účet sme vložili ${@0}\\,€$ s ročnou úrokovou sadzbou ${@1}\\,\\%$, úroky sa pripisujú raz ročne a ponechávajú na účte (daň neuvažujeme). Koľko eur bude na účte po {@2} rokoch? Výsledok zaokrúhli na centy.": "Wir haben ${@0}\\,€$ mit einem jährlichen Zinssatz von ${@1}\\,\\%$ auf ein Konto eingezahlt, die Zinsen werden einmal jährlich gutgeschrieben und bleiben auf dem Konto (Steuern berücksichtigen wir nicht). Wie viele Euro werden nach {@2} Jahren auf dem Konto sein? Runde das Ergebnis auf Cent.",
  "Najmenšie celé číslo v ňom je ${@0}$.": "Die kleinste ganze Zahl darin ist ${@0}$.",
  "Najprv nájdi hodnoty $m$, pre ktoré je determinant $m\\cdot m-k\\cdot k$ nulový. Potom pre každú z nich dosaď $m$ a porovnaj rovnice.": "Finde zuerst die Werte von $m$, für die die Determinante $m\\cdot m-k\\cdot k$ null ist. Setze dann für jeden davon $m$ ein und vergleiche die Gleichungen.",
  "Najprv nájdi priesečníky, potom integruj rozdiel „horná mínus dolná“ funkcia.": "Finde zuerst die Schnittpunkte, dann integriere die Differenz „obere minus untere“ Funktion.",
  "Najprv rozhodni, či sú hodnoty slová alebo čísla. Pri číslach rozlíš počítanie (diskrétny) a meranie (spojitý).": "Entscheide zuerst, ob die Werte Wörter oder Zahlen sind. Bei Zahlen unterscheide Zählen (diskret) und Messen (stetig).",
  "Najprv vypočítaj stranu $s$ z pravouhlého trojuholníka s odvesnami $v$ a $R-r$. Povrch tvoria dve podstavy a plášť $\\pi s(R+r)$.": "Berechne zuerst die Mantellinie $s$ aus dem rechtwinkligen Dreieck mit den Katheten $v$ und $R-r$. Die Oberfläche bilden zwei Grundflächen und der Mantel $\\pi s(R+r)$.",
  "Najprv vypočítaj vnútornú funkciu: ${@0}({@1})$.": "Berechne zuerst die innere Funktion: ${@0}({@1})$.",
  "Najčastejšie sa vyskytuje hodnota ${@0}$ (trikrát), ostatné hodnoty najviac dvakrát. Modus je ${@1}$.": "Am häufigsten kommt der Wert ${@0}$ vor (dreimal), die übrigen Werte höchstens zweimal. Der Modus ist ${@1}$.",
  "Napríklad $f(1)={@0}$ a $f(-1)={@1}$; neplatí $f(-1)=f(1)$ ani $f(-1)=-f(1)$.": "Zum Beispiel $f(1)={@0}$ und $f(-1)={@1}$; es gilt weder $f(-1)=f(1)$ noch $f(-1)=-f(1)$.",
  "Napíš rovnicu dotyčnice ku grafu funkcie $f(x)={@0}$ v bode s $x$-ovou súradnicou $x_0={@1}$ v tvare $y=kx+q$. Zadaj $k$ a $q$.": "Schreibe die Gleichung der Tangente an den Graphen der Funktion $f(x)={@0}$ im Punkt mit der $x$-Koordinate $x_0={@1}$ in der Form $y=kx+q$. Gib $k$ und $q$ ein.",
  "Načrtni priamky a nájdi vrcholy oblasti ako priesečníky hraničných priamok. Oblasť je trojuholník.": "Skizziere die Geraden und finde die Ecken des Gebiets als Schnittpunkte der Randgeraden. Das Gebiet ist ein Dreieck.",
  "Nech $u={@0}$, $v=\\ln x$. Akú hodnotu má člen $u'v={@1}\\ln x$ v bode $1$?": "Sei $u={@0}$, $v=\\ln x$. Welchen Wert hat das Glied $u'v={@1}\\ln x$ an der Stelle $1$?",
  "Nech $u={@0}$, $v=\\mathrm{e}^x$. Akú hodnotu má člen $u'v$ v bode $0$?": "Sei $u={@0}$, $v=\\mathrm{e}^x$. Welchen Wert hat das Glied $u'v$ an der Stelle $0$?",
  "Nech $x$ je dĺžka strán kolmých na stenu. Strana rovnobežná so stenou má dĺžku ${@0}-2x$ a obsah je $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ pre $x={@4}$ a $S''=-4&lt;0$, ide o maximum. Rozmery sú ${@5}\\,\\text{m}$ a ${@6}\\,\\text{m}$, obsah ${@7}\\,\\text{m}^2$.": "Sei $x$ die Länge der Seiten senkrecht zur Mauer. Die zur Mauer parallele Seite hat die Länge ${@0}-2x$ und der Flächeninhalt ist $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ für $x={@4}$ und $S''=-4&lt;0$, es handelt sich um ein Maximum. Die Abmessungen sind ${@5}\\,\\text{m}$ und ${@6}\\,\\text{m}$, der Flächeninhalt ${@7}\\,\\text{m}^2$.",
  "Nepárna funkcia spĺňa $f(-x)=-f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Eine ungerade Funktion erfüllt $f(-x)=-f(x)$ für alle $x$ aus dem Definitionsbereich. Setze zum Beispiel $x=1$ und $x=-1$ ein und vergleiche.",
  "Newton-Leibnizova formula: {@0}": "Hauptsatz der Differential- und Integralrechnung: {@0}",
  "Nezabudni na koeficient ${@0}$ v menovateli: výraz je $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.": "Vergiss den Koeffizienten ${@0}$ im Nenner nicht: Der Ausdruck ist $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.",
  "Nezabudni na prostredný člen $Rr$ v zátvorke: $R^2+Rr+r^2$.": "Vergiss das mittlere Glied $Rr$ in der Klammer nicht: $R^2+Rr+r^2$.",
  "Nezabudni na prostredný člen $a_1a_2$, teda $\\sqrt{S_1S_2}$.": "Vergiss das mittlere Glied $a_1a_2$, also $\\sqrt{S_1S_2}$, nicht.",
  "Nie sú násobkami seba, roviny sú rôznobežné.": "Sie sind keine Vielfachen voneinander, die Ebenen schneiden sich.",
  "Niektoré písmená sa opakujú a ich výmenou nové slovo nevznikne. Vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Einige Buchstaben wiederholen sich und durch ihr Vertauschen entsteht kein neues Wort. Dividiere durch die Fakultäten der Häufigkeiten der sich wiederholenden Buchstaben.",
  "Nájdi inflexný bod funkcie $f(x)={@0}$. Zadaj jeho súradnice $x$ a $y$ (napr. 1; -4).": "Finde den Wendepunkt der Funktion $f(x)={@0}$. Gib seine Koordinaten $x$ und $y$ ein (z. B. 1; -4).",
  "Nájdi korene derivácie $f'(x)={@0}$.": "Finde die Nullstellen der Ableitung $f'(x)={@0}$.",
  "Nájdi primitívnu funkciu ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) a dosaď hranice.": "Finde die Stammfunktion ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) und setze die Grenzen ein.",
  "Nájdi stacionárne body funkcie, teda korene rovnice $f'(x)={@0}=0$.": "Finde die stationären Punkte der Funktion, also die Lösungen der Gleichung $f'(x)={@0}=0$.",
  "O koľko percent sa {@0} zväčší? {@1}": "Um wie viel Prozent wächst {@0}? {@1}",
  "Obe časti sú nepárne funkcie, preto aj ich súčet: $f(-x)=-f(x)$.": "Beide Teile sind ungerade Funktionen, daher auch ihre Summe: $f(-x)=-f(x)$.",
  "Objem": "Volumen",
  "Objem gule je $\\frac{4}{3}\\pi r^3$, nezabudni na koeficient $\\frac{4}{3}$.": "Das Volumen einer Kugel ist $\\frac{4}{3}\\pi r^3$, vergiss den Koeffizienten $\\frac{4}{3}$ nicht.",
  "Objem je $V(x)=x({@0}-2x)^2$. Pre ktoré $x$ z intervalu $(0; {@1})$ je $V'(x)=0$?": "Das Volumen ist $V(x)=x({@0}-2x)^2$. Für welches $x$ aus dem Intervall $(0; {@1})$ ist $V'(x)=0$?",
  "Objem je $V(x)=x({@0}-2x)^2$. Rozlož deriváciu na súčin $V'(x)=({@1}-2x)({@2}-cx)$. Aké je číslo $c$?": "Das Volumen ist $V(x)=x({@0}-2x)^2$. Zerlege die Ableitung in das Produkt $V'(x)=({@1}-2x)({@2}-cx)$. Wie lautet die Zahl $c$?",
  "Objem kužeľa je tretina objemu valca s rovnakou podstavou a výškou. Objemy častí sčítaj.": "Das Volumen eines Kegels ist ein Drittel des Volumens eines Zylinders mit gleicher Grundfläche und Höhe. Addiere die Volumina der Teile.",
  "Objem kužeľa nie je $\\pi r^2 w$, ale len jeho tretina.": "Das Volumen eines Kegels ist nicht $\\pi r^2 w$, sondern nur ein Drittel davon.",
  "Objem materiálu je rozdiel objemov dvoch valcov s rovnakou výškou.": "Das Materialvolumen ist die Differenz der Volumina zweier Zylinder mit gleicher Höhe.",
  "Objem polgule je polovica objemu gule, teda $\\frac{2}{3}\\pi r^3$. Objemy častí sčítaj.": "Das Volumen einer Halbkugel ist das halbe Kugelvolumen, also $\\frac{2}{3}\\pi r^3$. Addiere die Volumina der Teile.",
  "Objem sa zachová: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, teda $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.": "Das Volumen bleibt erhalten: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, also $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.",
  "Obsah je $S(x)=x({@0}-2x)$, kde $x$ je strana kolmá na stenu. Pre aké $x$ je $S'(x)=0$?": "Der Flächeninhalt ist $S(x)=x({@0}-2x)$, wobei $x$ die Seite senkrecht zur Mauer ist. Für welches $x$ ist $S'(x)=0$?",
  "Obsah rezu: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.": "Flächeninhalt des Schnitts: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.",
  "Obsah rovnostranného trojuholníka so stranou $a$ je $\\frac{\\sqrt3}{4}a^2$. Plášť hranola tvoria tri zhodné obdĺžniky.": "Der Flächeninhalt eines gleichseitigen Dreiecks mit der Seite $a$ ist $\\frac{\\sqrt3}{4}a^2$. Den Mantel des Prismas bilden drei kongruente Rechtecke.",
  "Obsah trojuholníka je polovica súčinu základne a výšky. Nezabudni deliť dvoma.": "Der Flächeninhalt eines Dreiecks ist das halbe Produkt aus Grundseite und Höhe. Vergiss nicht, durch zwei zu teilen.",
  "Obsah vypočítaj z vektorov $\\vec{AB}$ a $\\vec{AC}$ (polovica absolútnej hodnoty determinantu), výšku potom zo vzorca $S=\\frac{c\\cdot v_c}{2}$.": "Berechne den Flächeninhalt aus den Vektoren $\\vec{AB}$ und $\\vec{AC}$ (halber Betrag der Determinante), die Höhe dann aus der Formel $S=\\frac{c\\cdot v_c}{2}$.",
  "Od objemu plného valca odčítame dutinu: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.": "Vom Volumen des vollen Zylinders subtrahieren wir den Hohlraum: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.",
  "Olovenú guľu s polomerom ${@0}\\,\\text{cm}$ pretavili na rovnaké guľôčky s polomerom ${@1}\\,\\text{cm}$. Koľko guľôčok vzniklo (bez strát materiálu)?": "Eine Bleikugel mit dem Radius ${@0}\\,\\text{cm}$ wurde zu gleichen Kügelchen mit dem Radius ${@1}\\,\\text{cm}$ umgeschmolzen. Wie viele Kügelchen sind entstanden (ohne Materialverlust)?",
  "Opačný jav (obaja minú): ${@0}\\cdot {@1}={@2}$, teda $P=1-{@3}={@4}$.": "Gegenereignis (beide verfehlen): ${@0}\\cdot {@1}={@2}$, also $P=1-{@3}={@4}$.",
  "Opačný jav je $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Preto $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.": "Das Gegenereignis ist $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Daher $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.",
  "Opačný jav „obe čierne“ má $\\binom{{@0}}{2}={@1}$ výberov, priaznivých je ${@2}-{@3}={@4}$.": "Das Gegenereignis „beide schwarz“ hat $\\binom{{@0}}{2}={@1}$ Auswahlen, günstig sind ${@2}-{@3}={@4}$.",
  "Opačný jav: šestka nepadne ani raz, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. Hľadaná pravdepodobnosť je $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.": "Gegenereignis: Die Sechs fällt kein einziges Mal, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. Die gesuchte Wahrscheinlichkeit ist $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.",
  "Over tento zápis: dosaď $k=0$ a $k=1$ a skontroluj, či dostaneš riešenia rovnice. Over aj, či zápis nevynecháva niektoré riešenie z jednej periódy.": "Prüfe diese Schreibweise: Setze $k=0$ und $k=1$ ein und kontrolliere, ob du Lösungen der Gleichung erhältst. Prüfe auch, ob die Schreibweise keine Lösung aus einer Periode auslässt.",
  "Označ $x$ stranu kolmú na stenu, vyjadri druhú stranu z dĺžky pletiva a obsah ako funkciu $x$. Potom hľadaj, kde je jej derivácia nulová.": "Bezeichne mit $x$ die Seite senkrecht zur Mauer, drücke die andere Seite aus der Länge des Zauns aus und den Flächeninhalt als Funktion von $x$. Suche dann, wo ihre Ableitung null ist.",
  "Parabola $y={@0}$ a priamka $y={@1}$ majú dva spoločné body. Zadaj súradnice toho z nich, ktorý má menšiu $x$-ovú súradnicu (napr. -1; 4).": "Die Parabel $y={@0}$ und die Gerade $y={@1}$ haben zwei gemeinsame Punkte. Gib die Koordinaten desjenigen ein, der die kleinere $x$-Koordinate hat (z. B. -1; 4).",
  "Percentá sa nesčitujú. Koeficient $k={@0}$ umocni na {@1} a až potom preveď na percentá.": "Prozente werden nicht addiert. Erhebe den Faktor $k={@0}$ in {@1} Potenz und rechne erst dann in Prozent um.",
  "Pletivo netreba na všetky štyri strany: stena tvorí jednu stranu, ohradiť treba len tri.": "Zaun braucht man nicht an allen vier Seiten: Die Mauer bildet eine Seite, einzuzäunen sind nur drei.",
  "Plášť tvoria tri obdĺžniky ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.": "Den Mantel bilden drei Rechtecke ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.",
  "Po dosadení $x={@0}$ vyjde výraz $\\frac{0}{0}$, preto čitateľa rozložíme: ${@1}={@2}{@3}$. Pre $x\\neq {@4}$ vykrátime a dostaneme $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.": "Nach dem Einsetzen von $x={@0}$ ergibt sich der Ausdruck $\\frac{0}{0}$, daher zerlegen wir den Zähler: ${@1}={@2}{@3}$. Für $x\\neq {@4}$ kürzen wir und erhalten $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.",
  "Po koľkých rokoch sa vklad prvýkrát aspoň {@0}?": "Nach wie vielen Jahren hat sich die Einlage erstmals mindestens {@0}?",
  "Po odlogaritmovaní dostaneš $({@0})({@1})={@2}$. Zadaj korene tejto kvadratickej rovnice.": "Nach dem Entlogarithmieren erhältst du $({@0})({@1})={@2}$. Gib die Lösungen dieser quadratischen Gleichung ein.",
  "Po príchode má zbor ${@0}$ členov, nový súčet je preto ${@1}\\cdot {@2}$.": "Nach dem Hinzukommen hat der Chor ${@0}$ Mitglieder, die neue Summe ist daher ${@1}\\cdot {@2}$.",
  "Po substitúcii $t={@0} x$ dostaneš ${@1}=0$. Zadaj jej korene (zlomok napr. ako 1/2).": "Nach der Substitution $t={@0} x$ erhältst du ${@1}=0$. Gib ihre Lösungen ein (einen Bruch z. B. als 1/2).",
  "Po substitúcii $t={@0}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "Löse nach der Substitution $t={@0}$ die Gleichung ${@1}=0$. Gib ihre Lösungen $t$ ein.",
  "Po substitúcii $t={@0}^{x}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "Löse nach der Substitution $t={@0}^{x}$ die Gleichung ${@1}=0$. Gib ihre Lösungen $t$ ein.",
  "Po vybratí ${@0}$ pred zátvorku: pre ktoré $x$ z {@1} je ${@2}=0$?": "Nach dem Ausklammern von ${@0}$: Für welche $x$ aus {@1} ist ${@2}=0$?",
  "Po vykrátení ostal výraz ${@0}$ a doňho ešte treba dosadiť $x={@1}$.": "Nach dem Kürzen blieb der Ausdruck ${@0}$ übrig und in ihn muss man noch $x={@1}$ einsetzen.",
  "Po vykrátení ostane v menovateli $\\sqrt{x}+{@0}$, nie len $\\sqrt{x}$. Dosaď $x={@1}$ do celého súčtu.": "Nach dem Kürzen bleibt im Nenner $\\sqrt{x}+{@0}$, nicht nur $\\sqrt{x}$. Setze $x={@1}$ in die ganze Summe ein.",
  "Po vykrátení činiteľa ${@0}$ zostane ${@1}$. Akú hodnotu má tento výraz pre $x={@2}$?": "Nach dem Kürzen des Faktors ${@0}$ bleibt ${@1}$. Welchen Wert hat dieser Ausdruck für $x={@2}$?",
  "Po výmene premenných máme $x={@0}$. Aký je koeficient $k$ pri $x$ vo vyjadrení $y=kx+q$?": "Nach dem Vertauschen der Variablen haben wir $x={@0}$. Wie lautet der Koeffizient $k$ bei $x$ in der Darstellung $y=kx+q$?",
  "Podaní rúk je $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Z rovnice $\\frac{n(n-1)}{2}={@0}$ dostaneme $n^2-n-{@1}=0$, kladný koreň je $n={@2}$.": "Es gibt $\\binom{n}{2}=\\frac{n(n-1)}{2}$ Händedrücke. Aus der Gleichung $\\frac{n(n-1)}{2}={@0}$ erhalten wir $n^2-n-{@1}=0$, die positive Lösung ist $n={@2}$.",
  "Podiel vedúcich koeficientov rozhoduje len pri rovnakom stupni. Tu má čitateľ nižší stupeň, takže po vydelení najvyššou mocninou menovateľa ide celý čitateľ k nule.": "Der Quotient der Leitkoeffizienten entscheidet nur bei gleichem Grad. Hier hat der Zähler einen niedrigeren Grad, sodass nach Division durch die höchste Potenz des Nenners der ganze Zähler gegen null geht.",
  "Podmienka $x&gt;0$. Substitúcia $t={@0}$: ${@1}=0$, teda $t_1={@2}$, $t_2={@3}$. Z ${@4}={@5}$ je $x={@6}^{{@7}}={@8}$ a z ${@9}={@10}$ je $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.": "Bedingung $x&gt;0$. Substitution $t={@0}$: ${@1}=0$, also $t_1={@2}$, $t_2={@3}$. Aus ${@4}={@5}$ folgt $x={@6}^{{@7}}={@8}$ und aus ${@9}={@10}$ folgt $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.",
  "Podmienky dávajú $x&gt;c$. Aké je číslo $c$?": "Die Bedingungen ergeben $x&gt;c$. Wie lautet die Zahl $c$?",
  "Podmienky: ${@0}&gt;0$ a ${@1}&gt;0$, teda $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Korene sú ${@10}$ a ${@11}$; podmienku spĺňa len $x={@12}$. $K=\\{{@13}\\}$.": "Bedingungen: ${@0}&gt;0$ und ${@1}&gt;0$, also $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Die Lösungen sind ${@10}$ und ${@11}$; die Bedingung erfüllt nur $x={@12}$. $K=\\{{@13}\\}$.",
  "Podstava je rovnostranný trojuholník, nie štvorec: jej obsah je $\\frac{\\sqrt3}{4}a^2$.": "Die Grundfläche ist ein gleichseitiges Dreieck, kein Quadrat: Ihr Flächeninhalt ist $\\frac{\\sqrt3}{4}a^2$.",
  "Podstava je rovnostranný trojuholník: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}": "Die Grundfläche ist ein gleichseitiges Dreieck: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}",
  "Podľa Vietovho vzťahu je súčet koreňov $x_1+x_2=-p$, nie $p$. Pozor na znamienko.": "Nach dem Satz von Vieta ist die Summe der Lösungen $x_1+x_2=-p$, nicht $p$. Achte auf das Vorzeichen.",
  "Polomer gule, vzdialenosť roviny od stredu a polomer rezu tvoria pravouhlý trojuholník (polomer gule je prepona).": "Der Kugelradius, der Abstand der Ebene vom Mittelpunkt und der Radius des Schnitts bilden ein rechtwinkliges Dreieck (der Kugelradius ist die Hypotenuse).",
  "Polomer rezu: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}": "Radius des Schnitts: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}",
  "Polož diskriminant rovný nule.": "Setze die Diskriminante gleich null.",
  "Pomocou $\\sin^2 x+\\cos^2 x=1$ prepíš rovnicu len na ${@0} x$.": "Schreibe die Gleichung mithilfe von $\\sin^2 x+\\cos^2 x=1$ nur mit ${@0} x$.",
  "Porovnaj aj hodnoty funkcie v krajných bodoch intervalu, globálny extrém môže byť práve tam.": "Vergleiche auch die Funktionswerte in den Randpunkten des Intervalls, das globale Extremum kann gerade dort liegen.",
  "Porovnaj smery priamok. Ak nie sú rovnobežné, zisti, či ležia v jednej rovine (napr. v stene alebo uhlopriečnom reze kocky).": "Vergleiche die Richtungen der Geraden. Sind sie nicht parallel, stelle fest, ob sie in einer Ebene liegen (z. B. in einer Fläche oder einem Diagonalschnitt des Würfels).",
  "Porovnaj stupne čitateľa a menovateľa. Pri rovnakom stupni rozhodujú vedúce koeficienty.": "Vergleiche die Grade von Zähler und Nenner. Bei gleichem Grad entscheiden die Leitkoeffizienten.",
  "Porovnaj tieto hodnoty s hodnotami v stacionárnych bodoch vnútri intervalu. Aká je {@0} hodnota?": "Vergleiche diese Werte mit den Werten in den stationären Punkten im Inneren des Intervalls. Welcher Wert ist {@0}?",
  "Porovnaj vzdialenosť stredu od priamky s polomerom. Polomer je odmocnina z pravej strany rovnice kružnice, teda $r={@0}$, nie ${@1}$. Pozor aj na znamienka súradníc stredu.": "Vergleiche den Abstand des Mittelpunkts von der Geraden mit dem Radius. Der Radius ist die Wurzel aus der rechten Seite der Kreisgleichung, also $r={@0}$, nicht ${@1}$. Achte auch auf die Vorzeichen der Mittelpunktskoordinaten.",
  "Porovnáme pravé strany: ${@0}={@1} \\Rightarrow {@2}=0$, korene $x={@3}$ a $x={@4}$. Pre $x={@5}$ je $y={@6}\\cdot {@7}{@8}={@9}$. Priesečníky sú $[{@10}; {@11}]$ a $[{@12}; {@13}]$.": "Wir vergleichen die rechten Seiten: ${@0}={@1} \\Rightarrow {@2}=0$, Lösungen $x={@3}$ und $x={@4}$. Für $x={@5}$ ist $y={@6}\\cdot {@7}{@8}={@9}$. Die Schnittpunkte sind $[{@10}; {@11}]$ und $[{@12}; {@13}]$.",
  "Potrebujeme $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, teda $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Zlogaritmujeme (logaritmus čísla menšieho ako 1 je záporný, znak sa otočí): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Najmenšie celé $n$ je ${@4}$.": "Wir brauchen $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, also $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Wir logarithmieren (der Logarithmus einer Zahl kleiner als 1 ist negativ, das Zeichen kehrt sich um): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Das kleinste ganze $n$ ist ${@4}$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\ln x)'=\\frac{1}{x}$. Nezabudni, že $\\ln 1=0$.": "Verwende $(u\\cdot v)'=u'v+uv'$ und $(\\ln x)'=\\frac{1}{x}$. Vergiss nicht, dass $\\ln 1=0$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\mathrm{e}^x)'=\\mathrm{e}^x$.": "Verwende $(u\\cdot v)'=u'v+uv'$ und $(\\mathrm{e}^x)'=\\mathrm{e}^x$.",
  "Použi $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.": "Verwende $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
  "Použi $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "Verwende $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Použi $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. V čitateli sa členy s $x$ odčítajú.": "Verwende $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. Im Zähler heben sich die Glieder mit $x$ auf.",
  "Použi $\\sin 2x=2\\sin x\\cos x$, všetko prenes na jednu stranu a vyber spoločného činiteľa pred zátvorku. Nedeľ ním!": "Verwende $\\sin 2x=2\\sin x\\cos x$, bringe alles auf eine Seite und klammere den gemeinsamen Faktor aus. Dividiere nicht durch ihn!",
  "Použi opačný jav: pravdepodobnosť, že šestka nepadne v žiadnom z hodov, je $\\left(\\frac{5}{6}\\right)^n$.": "Verwende das Gegenereignis: Die Wahrscheinlichkeit, dass in keinem der Würfe eine Sechs fällt, ist $\\left(\\frac{5}{6}\\right)^n$.",
  "Použi vzorec $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, kde $Q$ je bod priamky. Alebo nájdi trojuholník, v ktorom je hľadaná vzdialenosť výškou.": "Verwende die Formel $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, wobei $Q$ ein Punkt der Geraden ist. Oder finde ein Dreieck, in dem der gesuchte Abstand eine Höhe ist.",
  "Povrch": "Oberfläche",
  "Povrch gule je ${@0}\\pi\\,\\text{cm}^2$. Jej objem sa dá zapísať ako $V=k\\pi\\,\\text{cm}^3$. Vypočítaj $k$.": "Die Oberfläche einer Kugel ist ${@0}\\pi\\,\\text{cm}^2$. Ihr Volumen lässt sich als $V=k\\pi\\,\\text{cm}^3$ schreiben. Berechne $k$.",
  "Pozor na znamienko menovateľa: pre $x$ tesne {@0} od ${@1}$ je menovateľ ${@2}$ {@3}. Skombinuj ho so znamienkom čitateľa.": "Achte auf das Vorzeichen des Nenners: Für $x$ knapp {@0} von ${@1}$ ist der Nenner ${@2}$ {@3}. Kombiniere es mit dem Vorzeichen des Zählers.",
  "Pozor, $R^2-r^2$ nie je to isté ako $(R-r)^2$. Odčítaj objemy dvoch valcov.": "Achtung, $R^2-r^2$ ist nicht dasselbe wie $(R-r)^2$. Subtrahiere die Volumina zweier Zylinder.",
  "Pozor, $\\cos\\pi=-1$, nie $1$. Hodnoty primitívnej funkcie v hraniciach sa preto neodčítajú na nulu.": "Achtung, $\\cos\\pi=-1$, nicht $1$. Die Werte der Stammfunktion an den Grenzen heben sich daher nicht zu null auf.",
  "Pozor, $\\ln 1=0$, lebo $\\mathrm{e}^0=1$. Hodnota primitívnej funkcie v dolnej hranici je nulová.": "Achtung, $\\ln 1=0$, weil $\\mathrm{e}^0=1$. Der Wert der Stammfunktion an der unteren Grenze ist null.",
  "Pozor, $\\ln 1=0$, nie $1$ (lebo $\\mathrm{e}^0=1$). Prvý člen $u'v$ je preto v bode $1$ nulový.": "Achtung, $\\ln 1=0$, nicht $1$ (weil $\\mathrm{e}^0=1$). Das erste Glied $u'v$ ist daher an der Stelle $1$ null.",
  "Počet pokusov n": "Anzahl der Versuche n",
  "Počet uhlopriečok $n$-uholníka je $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (všetky spojnice vrcholov mínus strany).": "Die Anzahl der Diagonalen eines $n$-Ecks ist $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (alle Verbindungsstrecken der Ecken minus die Seiten).",
  "Počet usporiadaní $n$ rôznych prvkov je $n!$.": "Die Anzahl der Anordnungen von $n$ verschiedenen Elementen ist $n!$.",
  "Počty sedadiel tvoria aritmetickú postupnosť s $a_1={@0}$, $d={@1}$. Súčet $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ vedie na kvadratickú nerovnicu ${@5}\\ge 0$. Kladný koreň je približne ${@6}$, preto $n={@7}$. Kontrola: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.": "Die Anzahlen der Sitzplätze bilden eine arithmetische Folge mit $a_1={@0}$, $d={@1}$. Die Summe $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ führt auf die quadratische Ungleichung ${@5}\\ge 0$. Die positive Lösung ist ungefähr ${@6}$, daher $n={@7}$. Probe: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.",
  "Počítal si v opačnom poradí. Pri $({@0})(x)$ sa najprv použije {@1} (vnútorná funkcia) a jej výsledok sa dosadí do {@2}.": "Du hast in umgekehrter Reihenfolge gerechnet. Bei $({@0})(x)$ wird zuerst {@1} (die innere Funktion) angewendet und ihr Ergebnis in {@2} eingesetzt.",
  "Pracuj so súčtami: súčet = priemer · počet. Porovnaj súčet pred príchodom a po príchode nového člena.": "Arbeite mit Summen: Summe = Mittelwert · Anzahl. Vergleiche die Summe vor und nach dem Hinzukommen des neuen Mitglieds.",
  "Pravdepodobnosti jednotlivých hodov sa nesčítavajú (pri 6 hodoch by vyšla istota). Použi opačný jav „ani raz“.": "Die Wahrscheinlichkeiten der einzelnen Würfe werden nicht addiert (bei 6 Würfen käme Gewissheit heraus). Verwende das Gegenereignis „kein einziges Mal“.",
  "Pravdepodobnosti netrafenia sú ${@0}$ a ${@1}$. {@2}": "Die Wahrscheinlichkeiten eines Fehlschusses sind ${@0}$ und ${@1}$. {@2}",
  "Pravdepodobnosť p": "Wahrscheinlichkeit p",
  "Pravidelný trojboký hranol má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj jeho {@2}. {@3}": "Ein regelmäßiges dreiseitiges Prisma hat die Grundkante $a={@0}\\,\\text{cm}$ und die Höhe $v={@1}\\,\\text{cm}$. Berechne {@2}. {@3}",
  "Pravidelný štvorboký ihlan": "Regelmäßige quadratische Pyramide",
  "Pravidelný štvorboký ihlan má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}.{@3}": "Eine regelmäßige quadratische Pyramide hat die Grundkante $a={@0}\\,\\text{cm}$ und die Höhe $v={@1}\\,\\text{cm}$. Berechne {@2}.{@3}",
  "Pravidelný štvorboký zrezaný ihlan má podstavné hrany $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho objem v $\\text{cm}^3$.{@3}": "Ein regelmäßiger quadratischer Pyramidenstumpf hat die Grundkanten $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ und die Höhe $v={@2}\\,\\text{cm}$. Berechne sein Volumen in $\\text{cm}^3$.{@3}",
  "Pre $x\\to {@0}^{{@1}}$ je $x {@2} {@3}$, menovateľ ${@4}$ je teda {@5} a blíži sa k nule. Čitateľ ${@6}$ je {@7}, preto zlomok rastie v absolútnej hodnote nad všetky medze so znamienkom {@8}: limita je {@9}.": "Für $x\\to {@0}^{{@1}}$ ist $x {@2} {@3}$, der Nenner ${@4}$ ist also {@5} und nähert sich null. Der Zähler ${@6}$ ist {@7}, daher wächst der Bruch betragsmäßig über alle Grenzen mit dem Vorzeichen {@8}: Der Grenzwert ist {@9}.",
  "Pre $x\\to\\infty$ nerozhodujú absolútne členy, ale členy s najvyššou mocninou $x$.": "Für $x\\to\\infty$ entscheiden nicht die absoluten Glieder, sondern die Glieder mit der höchsten Potenz von $x$.",
  "Pre $x\\to\\pm\\infty$ rozhodujú koeficienty pri $x$, nie absolútne členy.": "Für $x\\to\\pm\\infty$ entscheiden die Koeffizienten bei $x$, nicht die absoluten Glieder.",
  "Pre akú hodnotu parametra $c$ má rovnica $x^2{@0}+c=0$ dvojnásobný koreň?": "Für welchen Wert des Parameters $c$ hat die Gleichung $x^2{@0}+c=0$ eine doppelte Lösung?",
  "Pre binomické rozdelenie je $E(X)=np$ a $D(X)=np(1-p)$.": "Für die Binomialverteilung gilt $E(X)=np$ und $D(X)=np(1-p)$.",
  "Pre funkciu $f(x)=({@0})\\,\\mathrm{e}^{x}$ vypočítaj $f'(0)$.": "Berechne für die Funktion $f(x)=({@0})\\,\\mathrm{e}^{x}$ den Wert $f'(0)$.",
  "Pre funkciu $f(x)=({@0})\\ln x$ vypočítaj $f'(1)$.": "Berechne für die Funktion $f(x)=({@0})\\ln x$ den Wert $f'(1)$.",
  "Pre funkciu $f(x)=({@0})^{{@1}}$ vypočítaj $f'({@2})$.": "Berechne für die Funktion $f(x)=({@0})^{{@1}}$ den Wert $f'({@2})$.",
  "Pre funkciu $f(x)=\\dfrac{{@0}}{{@1}}$ vypočítaj $f'({@2})$. Výsledok zadaj ako celé číslo alebo zlomok.": "Berechne für die Funktion $f(x)=\\dfrac{{@0}}{{@1}}$ den Wert $f'({@2})$. Gib das Ergebnis als ganze Zahl oder als Bruch ein.",
  "Pre funkciu $f(x)={@0}{@1}$ vypočítaj $f'(0)$.": "Berechne für die Funktion $f(x)={@0}{@1}$ den Wert $f'(0)$.",
  "Pre korene z intervalu $\\langle -1; 1\\rangle$ nájdi všetky $x$ v stupňoch z {@0}.": "Finde für die Lösungen aus dem Intervall $\\langle -1; 1\\rangle$ alle $x$ in Grad aus {@0}.",
  "Pre ktoré $x$ je nulová zátvorka ${@0} {@1}$?": "Für welche $x$ ist die Klammer ${@0} {@1}$ null?",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2+px+{@0}=0$ dvojnásobný koreň? Zadaj všetky hodnoty oddelené bodkočiarkou.": "Für welche Werte des Parameters $p$ hat die Gleichung $x^2+px+{@0}=0$ eine doppelte Lösung? Gib alle Werte durch Semikolon getrennt ein.",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2{@0}+p=0$ {@1}?": "Für welche Werte des Parameters $p$ hat die Gleichung $x^2{@0}+p=0$ {@1}?",
  "Pre zrezaný ihlan platí $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; pri štvorcových podstavách je $\\sqrt{S_1S_2}=a_1a_2$.": "Für einen Pyramidenstumpf gilt $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; bei quadratischen Grundflächen ist $\\sqrt{S_1S_2}=a_1a_2$.",
  "Pred určením mediánu treba údaje usporiadať podľa veľkosti.": "Vor dem Bestimmen des Medians muss man die Daten der Größe nach ordnen.",
  "Predsedu vyberáš z $n$ ľudí, podpredsedu už len zo zvyšných, pokladníka zo zvyšných ďalej.": "Den Vorsitzenden wählst du aus $n$ Personen, den Stellvertreter nur noch aus den übrigen, den Kassenwart aus den dann noch übrigen.",
  "Predstav si rovinu ako rez kockou. Priamka v nej leží, ak v nej ležia dva jej body; je rovnobežná, ak je rovnobežná s niektorou priamkou roviny.": "Stell dir die Ebene als Schnitt des Würfels vor. Eine Gerade liegt in ihr, wenn zwei ihrer Punkte in ihr liegen; sie ist parallel, wenn sie zu einer Geraden der Ebene parallel ist.",
  "Predstav si všetky známky zoradené od najlepšej. Medián je prostredná hodnota (pri párnom počte priemer dvoch prostredných).": "Stell dir alle Noten von der besten an geordnet vor. Der Median ist der mittlere Wert (bei gerader Anzahl das Mittel der beiden mittleren).",
  "Pri $(f\\circ g)(x)=f(g(x))$ počítaš najprv vnútornú funkciu $g$, jej výsledok dosadíš do $f$.": "Bei $(f\\circ g)(x)=f(g(x))$ berechnest du zuerst die innere Funktion $g$, ihr Ergebnis setzt du in $f$ ein.",
  "Pri derivovaní mocniny sa exponent zníži o jedna: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.": "Beim Ableiten einer Potenz verringert sich der Exponent um eins: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.",
  "Pri lineárnej substitúcii treba výsledok vydeliť koeficientom pri $x$, teda číslom ${@0}$.": "Bei einer linearen Substitution muss man das Ergebnis durch den Koeffizienten bei $x$, also durch die Zahl ${@0}$, dividieren.",
  "Pri nezávislých javoch sa pravdepodobnosti súčasného nastania násobia. Pri „aspoň jeden“ použi opačný jav.": "Bei unabhängigen Ereignissen werden die Wahrscheinlichkeiten des gleichzeitigen Eintretens multipliziert. Bei „mindestens ein“ verwende das Gegenereignis.",
  "Pri okrúhlom stole sú rozsadenia, ktoré sa líšia len otočením, rovnaké. Zafixuj jedného človeka.": "Am runden Tisch sind Sitzordnungen, die sich nur durch eine Drehung unterscheiden, gleich. Halte eine Person fest.",
  "Pri podobnosti s koeficientom $k$ sa {@0}. Výsledný násobok preveď na percentá.": "Bei Ähnlichkeit mit dem Faktor $k$ {@0}. Rechne das entstehende Vielfache in Prozent um.",
  "Pri pretavení sa zachováva objem. Pomer objemov podobných telies je tretia mocnina pomeru dĺžok.": "Beim Umschmelzen bleibt das Volumen erhalten. Das Verhältnis der Volumina ähnlicher Körper ist die dritte Potenz des Längenverhältnisses.",
  "Pri rovnej stene chceme ohradiť obdĺžnikový pozemok, stena tvorí jednu jeho stranu. Máme ${@0}\\,\\text{m}$ pletiva. {@1}": "An einer geraden Mauer wollen wir ein rechteckiges Grundstück einzäunen, die Mauer bildet eine seiner Seiten. Wir haben ${@0}\\,\\text{m}$ Zaun. {@1}",
  "Pri strane odstrihnutého štvorca $x$ má krabica dno $({@0}-2x)^2$ a výšku $x$: $V(x)=x({@1}-2x)^2$ pre $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, v intervale je nulová len pre $x={@7}$ (tam sa mení znamienko z $+$ na $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.": "Bei der Seite $x$ des ausgeschnittenen Quadrats hat die Schachtel den Boden $({@0}-2x)^2$ und die Höhe $x$: $V(x)=x({@1}-2x)^2$ für $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, im Intervall ist sie nur für $x={@7}$ null (dort wechselt das Vorzeichen von $+$ zu $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.",
  "Pri vyjadrení $y$ treba číslom ${@0}$ vydeliť celú pravú stranu, teda aj absolútny člen.": "Beim Ausdrücken von $y$ muss man die ganze rechte Seite durch die Zahl ${@0}$ dividieren, also auch das absolute Glied.",
  "Pri zloženej funkcii násob deriváciou vnútra: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "Bei einer verketteten Funktion multipliziere mit der Ableitung der inneren: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Priamka $p: {@0}=0$ pretína kružnicu $k: {@1}$ v dvoch bodoch. Zadaj $x$-ové súradnice oboch priesečníkov oddelené bodkočiarkou.": "Die Gerade $p: {@0}=0$ schneidet den Kreis $k: {@1}$ in zwei Punkten. Gib die $x$-Koordinaten beider Schnittpunkte durch Semikolon getrennt ein.",
  "Priamka je s rovinou rovnobežná, len ak je jej smerový vektor kolmý na normálový vektor roviny ($\\vec u\\cdot\\vec n=0$). Vypočítaj tento skalárny súčin.": "Eine Gerade ist zu einer Ebene nur dann parallel, wenn ihr Richtungsvektor senkrecht auf dem Normalenvektor der Ebene steht ($\\vec u\\cdot\\vec n=0$). Berechne dieses Skalarprodukt.",
  "Priamka leží v rovine, len ak v nej ležia dva jej body. Over oba koncové body.": "Eine Gerade liegt nur dann in einer Ebene, wenn zwei ihrer Punkte in ihr liegen. Prüfe beide Endpunkte.",
  "Priamka pretína rovinu, len ak $\\vec u\\cdot\\vec n\\neq 0$. Vypočítaj skalárny súčin smerového a normálového vektora.": "Eine Gerade schneidet eine Ebene nur dann, wenn $\\vec u\\cdot\\vec n\\neq 0$. Berechne das Skalarprodukt von Richtungs- und Normalenvektor.",
  "Priamky $y={@0}$ a $y={@1}$ pretínajú os $x$ v bodoch $[{@2}; 0]$ a $[{@3}; 0]$ a navzájom sa pretínajú v bode $[{@4}; {@5}]$. Oblasť je trojuholník so základňou ${@6}$ a výškou ${@7}$, jeho obsah je $\\frac{{@8}\\cdot {@9}}{2}={@10}$.": "Die Geraden $y={@0}$ und $y={@1}$ schneiden die $x$-Achse in den Punkten $[{@2}; 0]$ und $[{@3}; 0]$ und schneiden sich gegenseitig im Punkt $[{@4}; {@5}]$. Das Gebiet ist ein Dreieck mit der Grundseite ${@6}$ und der Höhe ${@7}$, sein Flächeninhalt ist $\\frac{{@8}\\cdot {@9}}{2}={@10}$.",
  "Priaznivé dvojice: {@0} — spolu ${@1}$.": "Günstige Paare: {@0} — insgesamt ${@1}$.",
  "Priaznivé: $\\binom{{@0}}{2}={@1}$.": "Günstig: $\\binom{{@0}}{2}={@1}$.",
  "Priaznivé: ${@0}\\cdot {@1}={@2}$ (bielu a čiernu vyberáme nezávisle).": "Günstig: ${@0}\\cdot {@1}={@2}$ (die weiße und die schwarze wählen wir unabhängig aus).",
  "Priemer z tabuľky početností je vážený: každú známku vynásob počtom žiakov, ktorí ju dostali.": "Der Mittelwert aus einer Häufigkeitstabelle ist gewogen: Multipliziere jede Note mit der Anzahl der Schüler, die sie bekommen haben.",
  "Priemerný vek {@0} členov speváckeho zboru je ${@1}$ rokov. Keď do zboru pribudol nový člen, priemerný vek sa {@2} na ${@3}$ rokov. Koľko rokov má nový člen?": "Das Durchschnittsalter der {@0} Mitglieder eines Chors ist ${@1}$ Jahre. Als ein neues Mitglied hinzukam, ist das Durchschnittsalter auf ${@3}$ Jahre {@2}. Wie alt ist das neue Mitglied?",
  "Priesečníky s osou $x$: ${@0}-x^2=0$, teda $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.": "Schnittpunkte mit der $x$-Achse: ${@0}-x^2=0$, also $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.",
  "Priesečníky sú $x=0$ a ešte jeden bod. Aké je jeho $x$?": "Die Schnittpunkte sind $x=0$ und noch ein Punkt. Wie lautet sein $x$?",
  "Priesečníky: $x^2={@0}$, teda $x=0$ a $x={@1}$. Na $\\langle 0; {@2}\\rangle$ leží priamka nad parabolou. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.": "Schnittpunkte: $x^2={@0}$, also $x=0$ und $x={@1}$. Auf $\\langle 0; {@2}\\rangle$ liegt die Gerade über der Parabel. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.",
  "Primitívna funkcia je $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Vypočítaj $F(1)$. Zadaj zlomok alebo celé číslo.": "Die Stammfunktion ist $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Berechne $F(1)$. Gib einen Bruch oder eine ganze Zahl ein.",
  "Primitívna funkcia je $F(x)={@0}$. Vypočítaj $F({@1})$.": "Die Stammfunktion ist $F(x)={@0}$. Berechne $F({@1})$.",
  "Primitívna funkcia je $F(x)={@0}x-\\frac{x^3}{3}$. Vypočítaj $F({@1})$. Zadaj zlomok alebo celé číslo.": "Die Stammfunktion ist $F(x)={@0}x-\\frac{x^3}{3}$. Berechne $F({@1})$. Gib einen Bruch oder eine ganze Zahl ein.",
  "Prvá nerovnica má riešenie $x&gt;c$. Aké je číslo $c$?": "Die erste Ungleichung hat die Lösung $x&gt;c$. Wie lautet die Zahl $c$?",
  "Prvá nerovnica: ${@0} {@1} {@2}$, po delení číslom ${@3}$ {@4}$x&gt;{@5}$. Druhá: ${@6} {@7} {@8}$, odtiaľ {@9}$x\\le {@10}$. Prienik je $({@11}; {@12}\\rangle$. {@13}": "Erste Ungleichung: ${@0} {@1} {@2}$, nach Division durch ${@3}$ {@4}$x&gt;{@5}$. Zweite: ${@6} {@7} {@8}$, daraus {@9}$x\\le {@10}$. Die Schnittmenge ist $({@11}; {@12}\\rangle$. {@13}",
  "Práve jeden môže byť prvý aj druhý strelec. Sčítaj pravdepodobnosti oboch možností.": "Genau einer kann der erste oder der zweite Schütze sein. Addiere die Wahrscheinlichkeiten beider Möglichkeiten.",
  "Párna funkcia spĺňa $f(-x)=f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Eine gerade Funktion erfüllt $f(-x)=f(x)$ für alle $x$ aus dem Definitionsbereich. Setze zum Beispiel $x=1$ und $x=-1$ ein und vergleiche.",
  "RADAR": "RADAR",
  "Relatívna početnosť je $\\frac{n_i}{n}$, v percentách ju vynásob číslom 100.": "Die relative Häufigkeit ist $\\frac{n_i}{n}$, in Prozent multipliziere sie mit 100.",
  "Rez nemá polomer gule. Polomer rezu $\\rho$ najprv vypočítaj z pravouhlého trojuholníka.": "Der Schnitt hat nicht den Kugelradius. Berechne den Radius des Schnitts $\\rho$ zuerst aus dem rechtwinkligen Dreieck.",
  "Riešime ${@0}^{{@1}}{@2}={@3}$. Čomu sa rovná mocnina ${@4}^{{@5}}$?": "Wir lösen ${@0}^{{@1}}{@2}={@3}$. Wem ist die Potenz ${@4}^{{@5}}$ gleich?",
  "Rotačný kužeľ má polomer podstavy $r={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}. {@3}": "Ein gerader Kreiskegel hat den Grundflächenradius $r={@0}\\,\\text{cm}$ und die Höhe $v={@1}\\,\\text{cm}$. Berechne {@2}. {@3}",
  "Rovina $\\rho: {@0}+d=0$ prechádza bodom $P{@1}$. Vypočítaj $d$.": "Die Ebene $\\rho: {@0}+d=0$ geht durch den Punkt $P{@1}$. Berechne $d$.",
  "Rovina ${@0}$ má normálový vektor $\\vec{n}={@1}$ a rovnicu ${@2}+d=0$. Vypočítaj $d$.": "Die Ebene ${@0}$ hat den Normalenvektor $\\vec{n}={@1}$ und die Gleichung ${@2}+d=0$. Berechne $d$.",
  "Rovnica $x^2+px{@0}=0$ má koreň $x_1={@1}$. Urči parameter $p$ a druhý koreň $x_2$ (zadaj ich v tomto poradí, napr. -5; 3).": "Die Gleichung $x^2+px{@0}=0$ hat die Lösung $x_1={@1}$. Bestimme den Parameter $p$ und die zweite Lösung $x_2$ (gib sie in dieser Reihenfolge ein, z. B. -5; 3).",
  "Rovnicu si zrejme vydelil výrazom ${@0}$ a stratil si riešenia, v ktorých je nulový. Vyber ho pred zátvorku.": "Du hast die Gleichung offenbar durch den Ausdruck ${@0}$ dividiert und die Lösungen verloren, in denen er null ist. Klammere ihn aus.",
  "Rovnobežné priamky majú smerové vektory, ktoré sú násobkami seba. Porovnaj smerové vektory.": "Parallele Geraden haben Richtungsvektoren, die Vielfache voneinander sind. Vergleiche die Richtungsvektoren.",
  "Rovnobežné roviny majú normálové vektory, ktoré sú násobkami seba. Porovnaj normálové vektory.": "Parallele Ebenen haben Normalenvektoren, die Vielfache voneinander sind. Vergleiche die Normalenvektoren.",
  "Rozdelíme prípady podľa poslednej cifry (musí byť {@0}); prvá cifra nesmie byť nula{@1}: {@2}. Spolu ${@3}$.": "Wir unterscheiden Fälle nach der letzten Ziffer (sie muss {@0} sein); die erste Ziffer darf nicht null sein{@1}: {@2}. Insgesamt ${@3}$.",
  "Rozlož $f'(x)$ na súčin, nájdi nulové body a zisti, kde derivácia mení znamienko.": "Zerlege $f'(x)$ in ein Produkt, finde die Nullstellen und stelle fest, wo die Ableitung das Vorzeichen wechselt.",
  "Rozptyl binomického rozdelenia je $np(1-p)$, nezabudni na činiteľ $1-p$.": "Die Varianz der Binomialverteilung ist $np(1-p)$, vergiss den Faktor $1-p$ nicht.",
  "Rozpätie je rozdiel najväčšej a najmenšej hodnoty, nie poslednej a prvej hodnoty v zápise.": "Die Spannweite ist die Differenz aus dem größten und dem kleinsten Wert, nicht aus dem letzten und dem ersten Wert in der Aufzählung.",
  "Rozsadenia, ktoré sa líšia len otočením stola, sú rovnaké. Každé si takto započítal {@0}-krát.": "Sitzordnungen, die sich nur durch eine Drehung des Tisches unterscheiden, sind gleich. Jede hast du so {@0}-mal gezählt.",
  "Rozsah súboru $n={@0}={@1}$. Relatívna početnosť: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}": "Umfang des Datensatzes $n={@0}={@1}$. Relative Häufigkeit: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}",
  "Rôznobežné priamky majú spoločný bod, a teda ležia v jednej rovine. Nájdeš takú rovinu?": "Sich schneidende Geraden haben einen gemeinsamen Punkt und liegen daher in einer Ebene. Findest du eine solche Ebene?",
  "Rôznobežné roviny majú normálové vektory, ktoré nie sú násobkami seba. Porovnaj normálové vektory.": "Sich schneidende Ebenen haben Normalenvektoren, die keine Vielfachen voneinander sind. Vergleiche die Normalenvektoren.",
  "Rúra má tvar dutého valca s vonkajším polomerom ${@0}\\,\\text{cm}$, vnútorným polomerom ${@1}\\,\\text{cm}$ a dĺžkou ${@2}\\,\\text{cm}$. Vypočítaj objem materiálu v $\\text{cm}^3$. {@3}": "Ein Rohr hat die Form eines Hohlzylinders mit dem Außenradius ${@0}\\,\\text{cm}$, dem Innenradius ${@1}\\,\\text{cm}$ und der Länge ${@2}\\,\\text{cm}$. Berechne das Materialvolumen in $\\text{cm}^3$. {@3}",
  "S; v_c": "S; v_c",
  "Slovo má {@0} písmen, opakujú sa {@1}. Ide o permutácie s opakovaním: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.": "Das Wort hat {@0} Buchstaben, es wiederholen sich {@1}. Es handelt sich um Permutationen mit Wiederholung: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.",
  "Smernica dotyčnice je $f'(x_0)$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a uprav.": "Die Steigung der Tangente ist $f'(x_0)$. Setze in $y=f(x_0)+f'(x_0)(x-x_0)$ ein und forme um.",
  "Smerové vektory $\\vec{{@0}}={@1}$ a $\\vec{{@2}}={@3}$ sú násobkami seba a bod ${@4}$ na priamke ${@5}$ neleží, priamky sú rovnobežné.": "Die Richtungsvektoren $\\vec{{@0}}={@1}$ und $\\vec{{@2}}={@3}$ sind Vielfache voneinander und der Punkt ${@4}$ liegt nicht auf der Geraden ${@5}$, die Geraden sind parallel.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, priamky však ležia v jednej rovine a pretínajú sa v bode ${@2}$. Sú rôznobežné.": "Die Richtungsvektoren ${@0}$ und ${@1}$ sind keine Vielfachen voneinander, die Geraden liegen aber in einer Ebene und schneiden sich im Punkt ${@2}$. Sie schneiden sich.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, takže priamky nie sú rovnobežné; neležia ani v jednej rovine, preto nemajú spoločný bod. Sú mimobežné.": "Die Richtungsvektoren ${@0}$ und ${@1}$ sind keine Vielfachen voneinander, die Geraden sind also nicht parallel; sie liegen auch nicht in einer Ebene, daher haben sie keinen gemeinsamen Punkt. Sie sind windschief.",
  "Spolok má {@0} členov. Koľkými spôsobmi môžu zvoliť predsedu, podpredsedu a pokladníka (jedna osoba zastáva najviac jednu funkciu)?": "Ein Verein hat {@0} Mitglieder. Auf wie viele Arten können sie einen Vorsitzenden, einen Stellvertreter und einen Kassenwart wählen (eine Person übt höchstens eine Funktion aus)?",
  "Spočítaj trojice kombináciami a využi opačný jav „samí chlapci“.": "Zähle die Dreiergruppen mit Kombinationen und nutze das Gegenereignis „nur Jungen“.",
  "Stenová výška: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}": "Höhe der Seitenfläche: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}",
  "Strana kužeľa $s$ je prepona pravouhlého trojuholníka s odvesnami $r$ a $v$.": "Die Mantellinie $s$ des Kegels ist die Hypotenuse eines rechtwinkligen Dreiecks mit den Katheten $r$ und $v$.",
  "Strana kužeľa: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.": "Mantellinie: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.",
  "Strana: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.": "Mantellinie: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.",
  "Strany označíme $a-d$, $a$, $a+d$ (prepona je najdlhšia). Z obvodu $3a={@0}$, teda $a={@1}$. Pytagorova veta: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Strany sú ${@8}$, ${@9}$, ${@10}$ cm{@11}.": "Wir bezeichnen die Seiten mit $a-d$, $a$, $a+d$ (die Hypotenuse ist die längste). Aus dem Umfang $3a={@0}$, also $a={@1}$. Satz des Pythagoras: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Die Seiten sind ${@8}$, ${@9}$, ${@10}$ cm{@11}.",
  "Strany sú $a-d$, $a$, $a+d$. Z obvodu vypočítaj $a$.": "Die Seiten sind $a-d$, $a$, $a+d$. Berechne $a$ aus dem Umfang.",
  "Strany zapíš ako $a-d$, $a$, $a+d$. Obvod dá $a$, Pytagorova veta potom diferenciu $d$.": "Schreibe die Seiten als $a-d$, $a$, $a+d$. Der Umfang liefert $a$, der Satz des Pythagoras dann die Differenz $d$.",
  "Stred je $S[{@0}; {@1}]$ a vektor $\\vec{ST}=({@2}; {@3})$ je kolmý na dotyčnicu, je to jej normálový vektor — preto má rovnica tvar ${@4}+c=0$. Dosadíme $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, teda $c={@9}$.": "Der Mittelpunkt ist $S[{@0}; {@1}]$ und der Vektor $\\vec{ST}=({@2}; {@3})$ steht senkrecht auf der Tangente, er ist ihr Normalenvektor — daher hat die Gleichung die Form ${@4}+c=0$. Wir setzen $T$ ein: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, also $c={@9}$.",
  "Stred kružnice je $S[{@0}; {@1}]$, polomer $r={@2}$. Vzdialenosť stredu od priamky: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Keďže $d{@10}r$, priamka je {@11}.": "Der Mittelpunkt des Kreises ist $S[{@0}; {@1}]$, der Radius $r={@2}$. Abstand des Mittelpunkts von der Geraden: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Da $d{@10}r$, ist die Gerade {@11}.",
  "Stredový uhol: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.": "Mittelpunktswinkel: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.",
  "Stĺpcový graf známok": "Säulendiagramm der Noten",
  "Stĺpcový graf známok v triede": "Säulendiagramm der Noten in der Klasse",
  "Substitúcia $u={@0}$ (alebo vzorec $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): primitívna funkcia je $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.": "Substitution $u={@0}$ (oder die Formel $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): Die Stammfunktion ist $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.",
  "Sú násobkami seba, roviny sú rovnobežné; bod ${@0}$ {@1} ${@2}$, preto sú roviny {@3}.": "Sie sind Vielfache voneinander, die Ebenen sind parallel; der Punkt ${@0}$ {@1} ${@2}$, daher sind die Ebenen {@3}.",
  "Súradnice bodu $P$ musia vyhovovať rovnici: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, teda ${@6}+d=0$ a $d={@7}$.": "Die Koordinaten des Punktes $P$ müssen die Gleichung erfüllen: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, also ${@6}+d=0$ und $d={@7}$.",
  "Sústava nerovníc ${@0}$ a ${@1}$ má riešenie v $\\mathbb{R}$. {@2}": "Das Ungleichungssystem ${@0}$ und ${@1}$ hat eine Lösung in $\\mathbb{R}$. {@2}",
  "Sústava rovníc s parametrom $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Pre ktorú hodnotu $m$ {@4}?": "Gleichungssystem mit dem Parameter $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Für welchen Wert von $m$ {@4}?",
  "Súčet logaritmov je logaritmus súčinu: $\\log_2 u+\\log_2 v=\\log_2(uv)$, nie $\\log_2(u+v)$.": "Die Summe von Logarithmen ist der Logarithmus des Produkts: $\\log_2 u+\\log_2 v=\\log_2(uv)$, nicht $\\log_2(u+v)$.",
  "Súčet s $d$ má byť nula. Koľko je $d$?": "Die Summe mit $d$ soll null sein. Wie groß ist $d$?",
  "Súčet vekov pôvodných členov je ${@0}\\cdot {@1}={@2}$. Po príchode je súčet vekov ${@3}\\cdot {@4}={@5}$. Nový člen má ${@6}-{@7}={@8}$ rokov.": "Die Summe der Alter der ursprünglichen Mitglieder ist ${@0}\\cdot {@1}={@2}$. Nach dem Hinzukommen ist die Summe der Alter ${@3}\\cdot {@4}={@5}$. Das neue Mitglied ist ${@6}-{@7}={@8}$ Jahre alt.",
  "Súčet známok treba deliť počtom žiakov $n$, nie počtom rôznych známok.": "Die Summe der Noten muss durch die Anzahl der Schüler $n$ geteilt werden, nicht durch die Anzahl der verschiedenen Noten.",
  "Súčet štvorcov odchýlok delíme počtom údajov $n={@0}$, nie číslom $n-1$ (tak je rozptyl definovaný v teórii).": "Die Summe der Quadrate der Abweichungen dividieren wir durch die Anzahl der Daten $n={@0}$, nicht durch die Zahl $n-1$ (so ist die Varianz in der Theorie definiert).",
  "Súčin dvoch nepárnych funkcií je párny: $(-x)\\sin(-x)=x\\sin x$.": "Das Produkt zweier ungerader Funktionen ist gerade: $(-x)\\sin(-x)=x\\sin x$.",
  "Súčin je nenulový, priamka rovinu pretína.": "Das Produkt ist nicht null, die Gerade schneidet die Ebene.",
  "Súčin je nepárny len vtedy, keď sú obe čísla nepárne: $3\\cdot 3=9$ výsledkov. Priaznivých je $36-9=27$.": "Das Produkt ist nur dann ungerade, wenn beide Zahlen ungerade sind: $3\\cdot 3=9$ Ergebnisse. Günstig sind $36-9=27$.",
  "Súčin je nulový, priamka je s rovinou rovnobežná; bod ${@0}$ {@1}.": "Das Produkt ist null, die Gerade ist parallel zur Ebene; der Punkt ${@0}$ {@1}.",
  "Súčin koreňov je $x_1x_2={@0}$. Aký je druhý koreň $x_2$?": "Das Produkt der Lösungen ist $x_1x_2={@0}$. Wie lautet die zweite Lösung $x_2$?",
  "Tabuľka": "Tabelle",
  "Takto by to bolo pri jednoduchom úročení. Pri zloženom sa úročia aj pripísané úroky, suma sa každý rok násobí.": "So wäre es bei einfacher Verzinsung. Bei Zinseszins werden auch die gutgeschriebenen Zinsen verzinst, der Betrag wird jedes Jahr multipliziert.",
  "Takto by to bolo pri jednoduchom úročení. Úroky ostávajú na účte a ďalší rok sa úročia tiež, suma sa každý rok násobí.": "So wäre es bei einfacher Verzinsung. Die Zinsen bleiben auf dem Konto und werden im nächsten Jahr ebenfalls verzinst, der Betrag wird jedes Jahr multipliziert.",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{dm}$ a výškou ${@1}\\,\\text{dm}$, na ktorý je nasadený kužeľ s rovnakou podstavou a výškou ${@2}\\,\\text{dm}$. Vypočítaj objem telesa v $\\text{dm}^3$. {@3}": "Der Körper besteht aus einem Zylinder mit dem Radius ${@0}\\,\\text{dm}$ und der Höhe ${@1}\\,\\text{dm}$, auf den ein Kegel mit derselben Grundfläche und der Höhe ${@2}\\,\\text{dm}$ gesetzt ist. Berechne das Volumen des Körpers in $\\text{dm}^3$. {@3}",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{m}$ a výškou ${@1}\\,\\text{m}$, na ktorého hornej podstave je polguľa s rovnakým polomerom. Vypočítaj objem telesa v $\\text{m}^3$. {@2}": "Der Körper besteht aus einem Zylinder mit dem Radius ${@0}\\,\\text{m}$ und der Höhe ${@1}\\,\\text{m}$, auf dessen oberer Grundfläche eine Halbkugel mit demselben Radius sitzt. Berechne das Volumen des Körpers in $\\text{m}^3$. {@2}",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "Das ist das Quadrat des Abstands. Ziehe noch die Wurzel aus dem Ergebnis.",
  "To je druhý spoločný bod. Pýtame sa na ten s menšou $x$-ovou súradnicou.": "Das ist der zweite gemeinsame Punkt. Wir fragen nach dem mit der kleineren $x$-Koordinate.",
  "To je druhý stacionárny bod, v ňom má funkcia lokálne {@0}. Pri maxime mení $f'$ znamienko z $+$ na $-$, pri minime z $-$ na $+$.": "Das ist der zweite stationäre Punkt, in ihm hat die Funktion ein lokales {@0}. Bei einem Maximum wechselt $f'$ das Vorzeichen von $+$ zu $-$, bei einem Minimum von $-$ zu $+$.",
  "To je dĺžka strany kolmej na stenu. Pýtame sa na stranu rovnobežnú so stenou, jej dĺžka je ${@0}-2x$.": "Das ist die Länge der Seite senkrecht zur Mauer. Wir fragen nach der zur Mauer parallelen Seite, ihre Länge ist ${@0}-2x$.",
  "To je len plášť ihlana. Povrch zahŕňa aj štvorcovú podstavu.": "Das ist nur der Mantel der Pyramide. Die Oberfläche umfasst auch die quadratische Grundfläche.",
  "To je len plášť kužeľa. Povrch zahŕňa aj kruhovú podstavu $\\pi r^2$.": "Das ist nur der Mantel des Kegels. Die Oberfläche umfasst auch die kreisförmige Grundfläche $\\pi r^2$.",
  "To je len plášť. Povrch zahŕňa aj obe kruhové podstavy.": "Das ist nur der Mantel. Die Oberfläche umfasst auch beide kreisförmigen Grundflächen.",
  "To je nový priemerný vek. Pracuj so súčtami vekov: súčet = priemer · počet.": "Das ist das neue Durchschnittsalter. Arbeite mit den Summen der Alter: Summe = Mittelwert · Anzahl.",
  "To je objem hranola s rovnakou podstavou a výškou. Objem ihlana je jeho tretina.": "Das ist das Volumen eines Prismas mit derselben Grundfläche und Höhe. Das Volumen der Pyramide ist ein Drittel davon.",
  "To je objem valca. Objem kužeľa je jeho tretina.": "Das ist das Volumen des Zylinders. Das Volumen des Kegels ist ein Drittel davon.",
  "To je obsah pod parabolou. Útvar je medzi dvoma krivkami, integruj rozdiel „horná mínus dolná“.": "Das ist der Flächeninhalt unter der Parabel. Die Figur liegt zwischen zwei Kurven, integriere die Differenz „obere minus untere“.",
  "To je obsah pod priamkou. Od neho ešte treba odčítať obsah pod parabolou.": "Das ist der Flächeninhalt unter der Geraden. Davon muss man noch den Flächeninhalt unter der Parabel subtrahieren.",
  "To je pomer polomerov. Pri pretavení sa zachováva objem a objem rastie s treťou mocninou polomeru.": "Das ist das Verhältnis der Radien. Beim Umschmelzen bleibt das Volumen erhalten, und das Volumen wächst mit der dritten Potenz des Radius.",
  "To je početnosť najčastejšej hodnoty. Modus je samotná hodnota, ktorá sa vyskytuje najčastejšie.": "Das ist die Häufigkeit des häufigsten Werts. Der Modus ist der Wert selbst, der am häufigsten vorkommt.",
  "To je pravdepodobnosť opačného javu $X=0$. Odpočítaj ju od jednotky.": "Das ist die Wahrscheinlichkeit des Gegenereignisses $X=0$. Subtrahiere sie von eins.",
  "To je pravdepodobnosť opačného javu, že sa vyberú len chlapci. Odpočítaj ju od jednotky.": "Das ist die Wahrscheinlichkeit des Gegenereignisses, dass nur Jungen ausgewählt werden. Subtrahiere sie von eins.",
  "To je pravdepodobnosť opačného javu, že súčin je nepárny. Odpočítaj ju od jednotky.": "Das ist die Wahrscheinlichkeit des Gegenereignisses, dass das Produkt ungerade ist. Subtrahiere sie von eins.",
  "To je pravdepodobnosť opačného javu, že šestka nepadne ani raz. Odpočítaj ju od jednotky.": "Das ist die Wahrscheinlichkeit des Gegenereignisses, dass die Sechs kein einziges Mal fällt. Subtrahiere sie von eins.",
  "To je pravdepodobnosť práve jedného úspechu. „Aspoň jeden“ zahŕňa aj viac úspechov, použi opačný jav.": "Das ist die Wahrscheinlichkeit für genau einen Erfolg. „Mindestens ein“ umfasst auch mehrere Erfolge, verwende das Gegenereignis.",
  "To je pravdepodobnosť, že nezasiahnu obaja súčasne. Ani jeden znamená, že minú obaja.": "Das ist die Wahrscheinlichkeit, dass nicht beide gleichzeitig treffen. Keiner bedeutet, dass beide verfehlen.",
  "To je pravdepodobnosť, že zasiahnu obaja. „Aspoň jeden“ zahŕňa aj prípady, keď zasiahne len jeden.": "Das ist die Wahrscheinlichkeit, dass beide treffen. „Mindestens einer“ umfasst auch die Fälle, in denen nur einer trifft.",
  "To je priemer. Medián je prostredná hodnota usporiadaného súboru.": "Das ist der Mittelwert. Der Median ist der mittlere Wert des geordneten Datensatzes.",
  "To je prostredná strana. Prepona je najdlhšia strana trojuholníka.": "Das ist die mittlere Seite. Die Hypotenuse ist die längste Seite des Dreiecks.",
  "To je rozptyl. Smerodajná odchýlka je jeho druhá odmocnina.": "Das ist die Varianz. Die Standardabweichung ist ihre Quadratwurzel.",
  "To je smerodajná odchýlka. Rozptyl je jej druhá mocnina, $D(X)=np(1-p)$.": "Das ist die Standardabweichung. Die Varianz ist ihr Quadrat, $D(X)=np(1-p)$.",
  "To je smerodajná odchýlka. Rozptyl sa neodmocňuje.": "Das ist die Standardabweichung. Bei der Varianz wird keine Wurzel gezogen.",
  "To je strana odstrihnutého štvorca. Pýtame sa na objem krabice.": "Das ist die Seite des ausgeschnittenen Quadrats. Wir fragen nach dem Volumen der Schachtel.",
  "To je stredový uhol výseče v stupňoch. Percentá sú časť zo $100$, nie z $360$.": "Das ist der Mittelpunktswinkel des Sektors in Grad. Prozente sind ein Teil von $100$, nicht von $360$.",
  "To je uhol priamky s normálovým vektorom roviny. Uhol s rovinou ho dopĺňa do $90^\\circ$: s normálou počítaj $\\sin\\varphi$, nie $\\cos\\varphi$.": "Das ist der Winkel der Geraden mit dem Normalenvektor der Ebene. Der Winkel mit der Ebene ergänzt ihn zu $90^\\circ$: Mit der Normalen berechne $\\sin\\varphi$, nicht $\\cos\\varphi$.",
  "To je vzdialenosť bodov ${@0}$ a ${@1}$. Vzdialenosť od priamky sa meria kolmo na priamku.": "Das ist der Abstand der Punkte ${@0}$ und ${@1}$. Der Abstand von einer Geraden wird senkrecht zur Geraden gemessen.",
  "To sú $y$-ové súradnice priesečníkov. Zadaj ich $x$-ové súradnice.": "Das sind die $y$-Koordinaten der Schnittpunkte. Gib ihre $x$-Koordinaten ein.",
  "To sú hodnoty substitúcie $t={@0}$. Z definície logaritmu ešte vypočítaj $x={@1}^{t}$.": "Das sind die Werte der Substitution $t={@0}$. Berechne aus der Definition des Logarithmus noch $x={@1}^{t}$.",
  "To sú hodnoty substitúcie $t={@0}^{x}$. Ešte sa vráť k neznámej $x$.": "Das sind die Werte der Substitution $t={@0}^{x}$. Kehre noch zur Unbekannten $x$ zurück.",
  "To sú percentá. Stredový uhol je rovnaká časť z celého uhla $360^\\circ$, nie zo $100$.": "Das sind Prozente. Der Mittelpunktswinkel ist derselbe Teil des Vollwinkels $360^\\circ$, nicht von $100$.",
  "To sú všetky spojnice dvojíc vrcholov, aj strany mnohouholníka. Strany treba odčítať.": "Das sind alle Verbindungsstrecken von Eckenpaaren, auch die Seiten des Vielecks. Die Seiten muss man subtrahieren.",
  "Totožné priamky majú všetky body spoločné. Over, či oba body jednej priamky ležia na druhej.": "Identische Geraden haben alle Punkte gemeinsam. Prüfe, ob beide Punkte der einen Geraden auf der anderen liegen.",
  "Totožné roviny majú všetky body spoločné. Over, či všetky tri body druhej roviny ležia v prvej.": "Identische Ebenen haben alle Punkte gemeinsam. Prüfe, ob alle drei Punkte der zweiten Ebene in der ersten liegen.",
  "Trojuholník má vrcholy $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Vypočítaj jeho obsah $S$ a výšku $v_c$ na stranu $AB$. Zadaj $S$ a $v_c$ (zaokrúhlenú na 2 desatinné miesta) oddelené bodkočiarkou.": "Ein Dreieck hat die Ecken $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Berechne seinen Flächeninhalt $S$ und die Höhe $v_c$ auf die Seite $AB$. Gib $S$ und $v_c$ (gerundet auf 2 Dezimalstellen) durch Semikolon getrennt ein.",
  "Tu je $f''(x)&lt;0$, funkcia je tam konkávna. Pri delení nerovnice záporným číslom nezabudni otočiť znak nerovnosti.": "Hier ist $f''(x)&lt;0$, die Funktion ist dort konkav. Vergiss beim Dividieren der Ungleichung durch eine negative Zahl nicht, das Ungleichheitszeichen umzukehren.",
  "Tu je funkcia {@0}. Skontroluj znamienko $f'$: medzi koreňmi má opačné znamienko ako vedúci koeficient ${@1}$.": "Hier ist die Funktion {@0}. Prüfe das Vorzeichen von $f'$: Zwischen den Nullstellen hat sie das entgegengesetzte Vorzeichen wie der Leitkoeffizient ${@1}$.",
  "Táto podmienka zodpovedá $D&gt;0$, teda dvom rôznym reálnym koreňom.": "Diese Bedingung entspricht $D&gt;0$, also zwei verschiedenen reellen Lösungen.",
  "Táto podmienka zodpovedá $D&lt;0$, rovnica potom nemá reálny koreň.": "Diese Bedingung entspricht $D&lt;0$, die Gleichung hat dann keine reelle Lösung.",
  "Táto podmienka zodpovedá $D=0$, teda jednému dvojnásobnému koreňu.": "Diese Bedingung entspricht $D=0$, also einer doppelten Lösung.",
  "Táto podmienka zodpovedá $D\\ge 0$, teda aspoň jednému reálnemu koreňu.": "Diese Bedingung entspricht $D\\ge 0$, also mindestens einer reellen Lösung.",
  "Táto podmienka zodpovedá $D\\le 0$: zahŕňa dvojnásobný koreň aj prípad bez reálnych koreňov.": "Diese Bedingung entspricht $D\\le 0$: Sie umfasst die doppelte Lösung und auch den Fall ohne reelle Lösungen.",
  "Uhol dvoch priamok je najviac $90^\\circ$. Vo vzorci pre $\\cos\\varphi$ je v čitateli absolútna hodnota skalárneho súčinu.": "Der Winkel zweier Geraden beträgt höchstens $90^\\circ$. In der Formel für $\\cos\\varphi$ steht im Zähler der Betrag des Skalarprodukts.",
  "Uhol priamky s rovinou počítaj cez normálový vektor roviny: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Alebo nájdi priemet priamky do roviny a pravouhlý trojuholník.": "Den Winkel einer Geraden mit einer Ebene berechne über den Normalenvektor der Ebene: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Oder finde die Projektion der Geraden in die Ebene und ein rechtwinkliges Dreieck.",
  "Uhol priamok je uhol ich smerových vektorov z intervalu $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.": "Der Winkel zweier Geraden ist der Winkel ihrer Richtungsvektoren aus dem Intervall $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.",
  "Umiestni kocku do súradnicovej sústavy, zapíš súradnice oboch bodov (stred hrany je priemer koncových bodov) a použi vzorec pre vzdialenosť.": "Lege den Würfel in ein Koordinatensystem, schreibe die Koordinaten beider Punkte auf (der Mittelpunkt einer Kante ist das Mittel der Endpunkte) und verwende die Abstandsformel.",
  "Uprav $f(-x)$: využi $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ a $\\cos(-x)=\\cos x$. Potom porovnaj s $f(x)$ aj s $-f(x)$.": "Forme $f(-x)$ um: Nutze $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ und $\\cos(-x)=\\cos x$. Vergleiche dann mit $f(x)$ und mit $-f(x)$.",
  "Uprav rovnicu na tvar $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Aké je číslo $r$? Zadaj zlomok alebo celé číslo.": "Forme die Gleichung in die Form $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$ um. Wie lautet die Zahl $r$? Gib einen Bruch oder eine ganze Zahl ein.",
  "Upravíme: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Pre $x\\to 0$ aj $t={@6}x\\to 0$ a $\\frac{\\sin t}{t}\\to 1$. Limita je ${@7}{@8}$.": "Wir formen um: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Für $x\\to 0$ gilt auch $t={@6}x\\to 0$ und $\\frac{\\sin t}{t}\\to 1$. Der Grenzwert ist ${@7}{@8}$.",
  "Urči asymptoty grafu funkcie $f(x)=\\dfrac{{@0}}{{@1}}$. Zadaj číslo zo zvislej asymptoty $x=\\dots$ a potom číslo z vodorovnej asymptoty $y=\\dots$ (napr. 2; -1/2).": "Bestimme die Asymptoten des Graphen der Funktion $f(x)=\\dfrac{{@0}}{{@1}}$. Gib die Zahl der senkrechten Asymptote $x=\\dots$ und dann die Zahl der waagerechten Asymptote $y=\\dots$ ein (z. B. 2; -1/2).",
  "Urči jednostrannú limitu $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.": "Bestimme den einseitigen Grenzwert $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.",
  "Urči podmienky, súčet logaritmov zapíš ako logaritmus súčinu a odlogaritmuj. Nájdené korene porovnaj s podmienkami.": "Bestimme die Bedingungen, schreibe die Summe der Logarithmen als Logarithmus des Produkts und entlogarithmiere. Vergleiche die gefundenen Lösungen mit den Bedingungen.",
  "Urči vzájomnú polohu priamky $p: {@0}=0$ a kružnice $k: {@1}$.": "Bestimme die gegenseitige Lage der Geraden $p: {@0}=0$ und des Kreises $k: {@1}$.",
  "Usporiadaný súbor: ${@0}$ ($n={@1}$). {@2}": "Geordneter Datensatz: ${@0}$ ($n={@1}$). {@2}",
  "V $P(X=1)$ chýba kombinačné číslo $\\binom{{@0}}{1}={@1}$: úspech môže nastať v ktoromkoľvek pokuse.": "In $P(X=1)$ fehlt der Binomialkoeffizient $\\binom{{@0}}{1}={@1}$: Der Erfolg kann in jedem beliebigen Versuch eintreten.",
  "V kocke $ABCDEFGH$ (podstava $ABCD$, nad ňou $EFGH$, hrany $AE$, $BF$, $CG$, $DH$) urči vzájomnú polohu priamok ${@0}$ a ${@1}$.": "Bestimme im Würfel $ABCDEFGH$ (Grundfläche $ABCD$, darüber $EFGH$, Kanten $AE$, $BF$, $CG$, $DH$) die gegenseitige Lage der Geraden ${@0}$ und ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu priamky ${@0}$ a roviny ${@1}$.": "Bestimme im Würfel $ABCDEFGH$ die gegenseitige Lage der Geraden ${@0}$ und der Ebene ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu rovín ${@0}$ a ${@1}$.": "Bestimme im Würfel $ABCDEFGH$ die gegenseitige Lage der Ebenen ${@0}$ und ${@1}$.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamky ${@0}$ s rovinou ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Berechne im Würfel $ABCDEFGH$ den Winkel der Geraden ${@0}$ mit der Ebene ${@1}$ in Grad. Runde das Ergebnis auf Zehntelgrad.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamok ${@0}$ a ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Berechne im Würfel $ABCDEFGH$ den Winkel der Geraden ${@0}$ und ${@1}$ in Grad. Runde das Ergebnis auf Zehntelgrad.",
  "V kocke s hranou $1$ je smerový vektor priamky $\\vec{u}={@0}$ a rovina ${@1}$ je stena kocky s normálovým vektorom $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, teda $\\varphi\\approx {@6}^\\circ$.": "Im Würfel mit der Kante $1$ ist der Richtungsvektor der Geraden $\\vec{u}={@0}$ und die Ebene ${@1}$ ist eine Fläche des Würfels mit dem Normalenvektor $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, also $\\varphi\\approx {@6}^\\circ$.",
  "V kocke s hranou $1$ sú smerové vektory $\\vec{u}=\\vec{{@0}}={@1}$ a $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, teda $\\varphi\\approx {@8}^\\circ$.": "Im Würfel mit der Kante $1$ sind die Richtungsvektoren $\\vec{u}=\\vec{{@0}}={@1}$ und $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, also $\\varphi\\approx {@8}^\\circ$.",
  "V krúžku je {@0} chlapcov a {@1} {@2}. Na súťaž náhodne vyberieme troch členov. Aká je pravdepodobnosť, že medzi nimi bude aspoň jedno dievča? {@3}": "In einer Arbeitsgemeinschaft sind {@0} Jungen und {@1} {@2}. Für einen Wettbewerb wählen wir zufällig drei Mitglieder aus. Wie groß ist die Wahrscheinlichkeit, dass unter ihnen mindestens ein Mädchen ist? {@3}",
  "V ktorom z bodov ${@0}$, ${@1}$ má funkcia {@2}?": "In welchem der Punkte ${@0}$, ${@1}$ hat die Funktion {@2}?",
  "V percentách ${@0}\\,\\%$.": "In Prozent ${@0}\\,\\%$.",
  "V pravouhlom trojuholníku s výškou ihlana a stenovou výškou je druhou odvesnou polovica podstavnej hrany, nie celá hrana.": "Im rechtwinkligen Dreieck mit der Höhe der Pyramide und der Höhe der Seitenfläche ist die zweite Kathete die halbe Grundkante, nicht die ganze Kante.",
  "V rade záleží na tom, kto sedí na ktorej stoličke: otočenie tu nehrá rolu, usporiadaj všetkých ľudí.": "In einer Reihe ist wichtig, wer auf welchem Stuhl sitzt: Drehungen spielen hier keine Rolle, ordne alle Personen an.",
  "V rovnici $y=ax+b$ vymeň $x$ a $y$ a vyjadri $y$.": "Vertausche in der Gleichung $y=ax+b$ $x$ und $y$ und drücke $y$ aus.",
  "V skupine nezáleží na poradí, ide o kombinácie, nie variácie.": "In einer Gruppe spielt die Reihenfolge keine Rolle, es handelt sich um Kombinationen, nicht um Variationen.",
  "V spoločnom bode majú obe funkcie rovnakú hodnotu: polož pravé strany rovné a vyrieš kvadratickú rovnicu.": "Im gemeinsamen Punkt haben beide Funktionen denselben Wert: Setze die rechten Seiten gleich und löse die quadratische Gleichung.",
  "V triede je {@0} chlapcov a {@1} dievčat. Koľkými spôsobmi môžeme vybrať skupinu, v ktorej budú {@2} a {@3}?": "In einer Klasse sind {@0} Jungen und {@1} Mädchen. Auf wie viele Arten können wir eine Gruppe auswählen, in der {@2} und {@3} sind?",
  "V urne sú gule: {@0} {@1} a {@2} {@3}. Naraz náhodne vytiahneme dve. Aká je pravdepodobnosť, že {@4}? {@5}": "In einer Urne sind Kugeln: {@0} {@1} und {@2} {@3}. Wir ziehen gleichzeitig zufällig zwei. Wie groß ist die Wahrscheinlichkeit, dass {@4}? {@5}",
  "Valec: $\\pi r^2v={@0}\\pi$. Kužeľ: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.": "Zylinder: $\\pi r^2v={@0}\\pi$. Kegel: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Zusammen $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.",
  "Valec: $\\pi r^2v={@0}\\pi$. Polguľa: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.": "Zylinder: $\\pi r^2v={@0}\\pi$. Halbkugel: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Zusammen $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.",
  "Variačné rozpätie je rozdiel najväčšej a najmenšej hodnoty.": "Die Spannweite ist die Differenz aus dem größten und dem kleinsten Wert.",
  "Vklad je úročený ročne sadzbou ${@0}\\,\\%$ (zložené úročenie, bez dane). Po koľkých rokoch sa prvýkrát aspoň {@1}?": "Eine Einlage wird jährlich mit ${@0}\\,\\%$ verzinst (Zinseszins, ohne Steuer). Nach wie vielen Jahren hat sie sich erstmals mindestens {@1}?",
  "Vo vzorci je výška delená tromi: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.": "In der Formel wird die Höhe durch drei geteilt: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.",
  "Vo vzorci pre objem zrezaného kužeľa je výška delená tromi: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "In der Volumenformel des Kegelstumpfs wird die Höhe durch drei geteilt: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Vráť sa k $x$ a zadaj všetky riešenia (zlomok napr. ako 1/2).": "Kehre zu $x$ zurück und gib alle Lösungen ein (einen Bruch z. B. als 1/2).",
  "Vydelíme obe strany výrazom ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Zlogaritmujeme: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, teda $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.": "Wir dividieren beide Seiten durch den Ausdruck ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Wir logarithmieren: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, also $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.",
  "Vyjadri diskriminant pomocou $p$ a podľa požadovaného počtu koreňov urči, či má byť kladný, nulový alebo záporný.": "Drücke die Diskriminante mithilfe von $p$ aus und bestimme nach der geforderten Anzahl von Lösungen, ob sie positiv, null oder negativ sein soll.",
  "Vyjadri goniometrickú funkciu, nájdi riešenia v jednej perióde a pripočítaj násobky periódy ($2\\pi$ pre sínus a kosínus, $\\pi$ pre tangens).": "Drücke die trigonometrische Funktion aus, finde die Lösungen in einer Periode und addiere Vielfache der Periode ($2\\pi$ für Sinus und Kosinus, $\\pi$ für den Tangens).",
  "Vyjadri objem ako funkciu strany odstrihnutého štvorca, zderivuj ju a nájdi stacionárny bod v prípustnom intervale.": "Drücke das Volumen als Funktion der Seite des ausgeschnittenen Quadrats aus, leite sie ab und finde den stationären Punkt im zulässigen Intervall.",
  "Vymeníme $x$ a $y$: $x={@0}$, odtiaľ ${@1}y={@2}$ a $y=\\dfrac{{@3}}{{@4}}$. Teda $f^{-1}(x)={@5}x{@6}{@7}$, čiže $k={@8}$ a $q={@9}$.": "Wir vertauschen $x$ und $y$: $x={@0}$, daraus ${@1}y={@2}$ und $y=\\dfrac{{@3}}{{@4}}$. Also $f^{-1}(x)={@5}x{@6}{@7}$, d. h. $k={@8}$ und $q={@9}$.",
  "Vypočítaj $F(-{@0})$.": "Berechne $F(-{@0})$.",
  "Vypočítaj $F(0)$.": "Berechne $F(0)$.",
  "Vypočítaj $F(1)-F(0)$. Zadaj zlomok alebo celé číslo.": "Berechne $F(1)-F(0)$. Gib einen Bruch oder eine ganze Zahl ein.",
  "Vypočítaj $F({@0})$.": "Berechne $F({@0})$.",
  "Vypočítaj $F({@0})-F({@1})$.": "Berechne $F({@0})-F({@1})$.",
  "Vypočítaj $P(X=0)$. {@0}": "Berechne $P(X=0)$. {@0}",
  "Vypočítaj $P(X=1)$. {@0}": "Berechne $P(X=1)$. {@0}",
  "Vypočítaj $P(X={@0})$. {@1}": "Berechne $P(X={@0})$. {@1}",
  "Vypočítaj $P(X\\ge 1)$. {@0}": "Berechne $P(X\\ge 1)$. {@0}",
  "Vypočítaj $P(X\\le 1)$. {@0}": "Berechne $P(X\\le 1)$. {@0}",
  "Vypočítaj $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}": "Berechne $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}",
  "Vypočítaj $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Výsledok zadaj ako zlomok alebo celé číslo.": "Berechne $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Gib das Ergebnis als Bruch oder ganze Zahl ein.",
  "Vypočítaj $\\int_0^{{@0}} x^2\\,dx$. Zadaj zlomok alebo celé číslo.": "Berechne $\\int_0^{{@0}} x^2\\,dx$. Gib einen Bruch oder eine ganze Zahl ein.",
  "Vypočítaj $\\int_0^{{@0}} {@1}\\,dx$.": "Berechne $\\int_0^{{@0}} {@1}\\,dx$.",
  "Vypočítaj $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok.": "Berechne $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Gib das Ergebnis als ganze Zahl oder Bruch ein.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Výsledok zadaj ako zlomok.": "Berechne $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Gib das Ergebnis als Bruch ein.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.": "Berechne $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.",
  "Vypočítaj $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok (napr. -3/2).": "Berechne $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Gib das Ergebnis als ganze Zahl oder Bruch ein (z. B. -3/2).",
  "Vypočítaj $k$.": "Berechne $k$.",
  "Vypočítaj $t$ z prvej súradnice a dosaď ho do zvyšných dvoch rovníc. Over starostlivo obe.": "Berechne $t$ aus der ersten Koordinate und setze es in die übrigen zwei Gleichungen ein. Prüfe beide sorgfältig.",
  "Vypočítaj $|AB|^2$.": "Berechne $|AB|^2$.",
  "Vypočítaj $|\\vec u\\cdot\\vec n|$ pre $\\vec u=\\vec{{@0}}$ a normálový vektor $\\vec n={@1}$ (kocka s hranou $1$).": "Berechne $|\\vec u\\cdot\\vec n|$ für $\\vec u=\\vec{{@0}}$ und den Normalenvektor $\\vec n={@1}$ (Würfel mit der Kante $1$).",
  "Vypočítaj $|{@0}K|$ v cm. {@1}": "Berechne $|{@0}K|$ in cm. {@1}",
  "Vypočítaj $|{@0}K|^2$.": "Berechne $|{@0}K|^2$.",
  "Vypočítaj absolútny člen $q$.": "Berechne das absolute Glied $q$.",
  "Vypočítaj aritmetický priemer $\\bar{x}$.": "Berechne das arithmetische Mittel $\\bar{x}$.",
  "Vypočítaj determinant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.": "Berechne die Determinante $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.",
  "Vypočítaj druhú deriváciu. Pre aké $x$ je $f''(x)=0$?": "Berechne die zweite Ableitung. Für welches $x$ ist $f''(x)=0$?",
  "Vypočítaj hodnotu v pravom krajnom bode, $f({@0})$.": "Berechne den Wert im rechten Randpunkt, $f({@0})$.",
  "Vypočítaj hodnotu v ľavom krajnom bode, $f({@0})$.": "Berechne den Wert im linken Randpunkt, $f({@0})$.",
  "Vypočítaj objem celého telesa v $\\text{dm}^3$. {@0}": "Berechne das Volumen des ganzen Körpers in $\\text{dm}^3$. {@0}",
  "Vypočítaj objem celého telesa v $\\text{m}^3$. {@0}": "Berechne das Volumen des ganzen Körpers in $\\text{m}^3$. {@0}",
  "Vypočítaj objem dutiny s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Berechne das Volumen des Hohlraums mit dem Radius ${@0}\\,\\text{cm}$ in $\\text{cm}^3$. {@1}",
  "Vypočítaj objem kužeľa v $\\text{dm}^3$. {@0}": "Berechne das Volumen des Kegels in $\\text{dm}^3$. {@0}",
  "Vypočítaj objem materiálu v $\\text{cm}^3$. {@0}": "Berechne das Materialvolumen in $\\text{cm}^3$. {@0}",
  "Vypočítaj objem plného valca s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Berechne das Volumen des vollen Zylinders mit dem Radius ${@0}\\,\\text{cm}$ in $\\text{cm}^3$. {@1}",
  "Vypočítaj objem polgule v $\\text{m}^3$. {@0}": "Berechne das Volumen der Halbkugel in $\\text{m}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$. {@0}": "Berechne das Volumen in $\\text{cm}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$.{@0}": "Berechne das Volumen in $\\text{cm}^3$.{@0}",
  "Vypočítaj objem valca v $\\text{dm}^3$. {@0}": "Berechne das Volumen des Zylinders in $\\text{dm}^3$. {@0}",
  "Vypočítaj objem valca v $\\text{m}^3$. {@0}": "Berechne das Volumen des Zylinders in $\\text{m}^3$. {@0}",
  "Vypočítaj obsah $S$.": "Berechne den Flächeninhalt $S$.",
  "Vypočítaj obsah podstavy $S_p$ v $\\text{cm}^2$. {@0}": "Berechne den Grundflächeninhalt $S_p$ in $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah rezu v $\\text{cm}^2$. {@0}": "Berechne den Flächeninhalt des Schnitts in $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah v $\\text{cm}^2$.": "Berechne den Flächeninhalt in $\\text{cm}^2$.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y=x^2$ a priamkou $y={@0}$. Výsledok zadaj ako zlomok alebo celé číslo.": "Berechne den Flächeninhalt der Figur, die von der Parabel $y=x^2$ und der Geraden $y={@0}$ begrenzt wird. Gib das Ergebnis als Bruch oder ganze Zahl ein.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y={@0}-x^2$ a osou $x$. Výsledok zadaj ako zlomok alebo celé číslo.": "Berechne den Flächeninhalt der Figur, die von der Parabel $y={@0}-x^2$ und der $x$-Achse begrenzt wird. Gib das Ergebnis als Bruch oder ganze Zahl ein.",
  "Vypočítaj obsah časti roviny, ktorú určuje sústava nerovníc $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.": "Berechne den Flächeninhalt des Teils der Ebene, der durch das Ungleichungssystem $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$ bestimmt ist.",
  "Vypočítaj polomer gule v cm.": "Berechne den Kugelradius in cm.",
  "Vypočítaj polomer rezu $\\rho$ v cm.": "Berechne den Radius des Schnitts $\\rho$ in cm.",
  "Vypočítaj povrch ihlana v $\\text{cm}^2$.": "Berechne die Oberfläche der Pyramide in $\\text{cm}^2$.",
  "Vypočítaj povrch v $\\text{cm}^2$. {@0}": "Berechne die Oberfläche in $\\text{cm}^2$. {@0}",
  "Vypočítaj priemer, potom priemer druhých mocnín odchýlok od neho. Smerodajná odchýlka je odmocnina z rozptylu.": "Berechne den Mittelwert, dann den Mittelwert der Quadrate der Abweichungen davon. Die Standardabweichung ist die Wurzel aus der Varianz.",
  "Vypočítaj priemernú známku. {@0}": "Berechne die Durchschnittsnote. {@0}",
  "Vypočítaj rozptyl $D(X)$.": "Berechne die Varianz $D(X)$.",
  "Vypočítaj rozptyl $s^2$. {@0}": "Berechne die Varianz $s^2$. {@0}",
  "Vypočítaj skalárny súčin smerových vektorov $\\vec{{@0}}\\cdot\\vec{{@1}}$ (kocka s hranou $1$).": "Berechne das Skalarprodukt der Richtungsvektoren $\\vec{{@0}}\\cdot\\vec{{@1}}$ (Würfel mit der Kante $1$).",
  "Vypočítaj smernicu $k=f'({@0})$.": "Berechne die Steigung $k=f'({@0})$.",
  "Vypočítaj smerodajnú odchýlku $s$. {@0}": "Berechne die Standardabweichung $s$. {@0}",
  "Vypočítaj stranu $s$ v cm.": "Berechne die Mantellinie $s$ in cm.",
  "Vypočítaj stranu kužeľa $s$ v cm.": "Berechne die Mantellinie $s$ des Kegels in cm.",
  "Vypočítaj strednú hodnotu $E(X)$ (zlomok alebo desatinné číslo aspoň na 2 miesta).": "Berechne den Erwartungswert $E(X)$ (Bruch oder Dezimalzahl auf mindestens 2 Stellen).",
  "Vypočítaj súčet $R^2+Rr+r^2$.": "Berechne die Summe $R^2+Rr+r^2$.",
  "Vypočítaj súčet $a_1^2+a_1a_2+a_2^2$.": "Berechne die Summe $a_1^2+a_1a_2+a_2^2$.",
  "Vypočítaj súčet druhých mocnín odchýlok od priemeru.": "Berechne die Summe der Quadrate der Abweichungen vom Mittelwert.",
  "Vypočítaj uhol priamky s rovinou v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Berechne den Winkel der Geraden mit der Ebene in Grad. Runde das Ergebnis auf Zehntelgrad.",
  "Vypočítaj uhol priamok v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Berechne den Winkel der Geraden in Grad. Runde das Ergebnis auf Zehntelgrad.",
  "Vypočítaj vzdialenosť bodu ${@0}$ od roviny v cm. {@1}": "Berechne den Abstand des Punktes ${@0}$ von der Ebene in cm. {@1}",
  "Vypočítaj výšku $v_c$. {@0}": "Berechne die Höhe $v_c$. {@0}",
  "Vypočítaj {@0} hodnotu funkcie $f(x)={@1}$ na intervale $\\langle {@2}; {@3}\\rangle$.": "Berechne den {@0} Wert der Funktion $f(x)={@1}$ auf dem Intervall $\\langle {@2}; {@3}\\rangle$.",
  "Vypočítaj {@0} súboru ${@1}$. {@2}": "Berechne {@0} des Datensatzes ${@1}$. {@2}",
  "Vypočítaj {@0} v $\\text{cm}^2$. {@1}": "Berechne {@0} in $\\text{cm}^2$. {@1}",
  "Vypočítaj {@0}. {@1}": "Berechne {@0}. {@1}",
  "Vypočítal si $f\\!\\left({@0}\\right)$. Hodnota $f^{-1}(c)$ je však číslo $x$, pre ktoré $f(x)=c$.": "Du hast $f\\!\\left({@0}\\right)$ berechnet. Der Wert $f^{-1}(c)$ ist aber die Zahl $x$, für die $f(x)=c$.",
  "Vypĺňaj miesta postupne a použi pravidlo súčinu. Prvá cifra nesmie byť nula; pri podmienke na deliteľnosť začni poslednou cifrou a rozdeľ prípady.": "Fülle die Stellen nacheinander aus und verwende die Produktregel. Die erste Ziffer darf nicht null sein; bei einer Teilbarkeitsbedingung beginne mit der letzten Ziffer und unterscheide Fälle.",
  "Vyrieš každú nerovnicu zvlášť (pozor na delenie záporným číslom) a urob prienik intervalov.": "Löse jede Ungleichung einzeln (Achtung bei Division durch eine negative Zahl) und bilde die Schnittmenge der Intervalle.",
  "Vyrieš rovnicu $({@0})^2{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou (zlomok napr. ako 1/2).": "Löse die Gleichung $({@0})^2{@1}{@2}=0$. Gib alle Lösungen durch Semikolon getrennt ein (einen Bruch z. B. als 1/2).",
  "Vyrieš rovnicu $\\log_2({@0})+\\log_2({@1})={@2}$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Löse die Gleichung $\\log_2({@0})+\\log_2({@1})={@2}$. Gib alle Lösungen durch Semikolon getrennt ein.",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou (napr. 30; 150).": "Löse die Gleichung ${@0}$ für {@1}. Gib alle Lösungen in Grad durch Semikolon getrennt ein (z. B. 30; 150).",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou.": "Löse die Gleichung ${@0}$ für {@1}. Gib alle Lösungen in Grad durch Semikolon getrennt ein.",
  "Vyrieš rovnicu ${@0}={@1}$. {@2}": "Löse die Gleichung ${@0}={@1}$. {@2}",
  "Vyrieš rovnicu. Koľko vrcholov má mnohouholník?": "Löse die Gleichung. Wie viele Ecken hat das Vieleck?",
  "Vyrieš rovnicu. Koľko ľudí bolo na stretnutí?": "Löse die Gleichung. Wie viele Personen waren bei dem Treffen?",
  "Vyrieš sústavu rovníc $x+y={@0}$, $x\\cdot y={@1}$. Zadaj všetky možné hodnoty $x$ oddelené bodkočiarkou.": "Löse das Gleichungssystem $x+y={@0}$, $x\\cdot y={@1}$. Gib alle möglichen Werte von $x$ durch Semikolon getrennt ein.",
  "Vyrieš v $\\mathbb{R}$ rovnicu ${@0}^{x}{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Löse in $\\mathbb{R}$ die Gleichung ${@0}^{x}{@1}{@2}=0$. Gib alle Lösungen durch Semikolon getrennt ein.",
  "Využi $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: vynásob a vydeľ výraz tak, aby si v menovateli dostal ten istý argument ako v sínuse.": "Nutze $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: Multipliziere und dividiere den Ausdruck so, dass im Nenner dasselbe Argument wie im Sinus steht.",
  "Využi Vietove vzťahy: súčin koreňov je absolútny člen, súčet koreňov je $-p$. Alebo dosaď známy koreň do rovnice.": "Nutze den Satz von Vieta: Das Produkt der Lösungen ist das absolute Glied, die Summe der Lösungen ist $-p$. Oder setze die bekannte Lösung in die Gleichung ein.",
  "Vzdialenosť h od nuly": "Abstand h von null",
  "Vzorec $\\frac{\\sin t}{t}\\to 1$ platí, len keď je v menovateli presne argument sínusu, teda ${@0}x$. Výraz najprv uprav.": "Die Formel $\\frac{\\sin t}{t}\\to 1$ gilt nur, wenn im Nenner genau das Argument des Sinus steht, also ${@0}x$. Forme den Ausdruck zuerst um.",
  "Výber chlapcov a výber dievčat sa navzájom nevylučujú, kombinujú sa. Použi pravidlo súčinu, nie súčtu.": "Die Auswahl der Jungen und die Auswahl der Mädchen schließen sich nicht gegenseitig aus, sie werden kombiniert. Verwende die Produktregel, nicht die Summenregel.",
  "Výraz obsahuje len $x^2$, preto $f(-x)=f(x)$.": "Der Ausdruck enthält nur $x^2$, daher $f(-x)=f(x)$.",
  "Výrobok je chybný s pravdepodobnosťou ${@0}$, nezávisle od ostatných. Náhodne vyberieme {@1} {@2}; $X$ je počet chybných.": "Ein Produkt ist mit der Wahrscheinlichkeit ${@0}$ fehlerhaft, unabhängig von den anderen. Wir wählen zufällig {@1} {@2} aus; $X$ ist die Anzahl der fehlerhaften.",
  "Výseč má stredový uhol $\\frac{n_i}{n}\\cdot 360^\\circ$.": "Der Sektor hat den Mittelpunktswinkel $\\frac{n_i}{n}\\cdot 360^\\circ$.",
  "Výsledky pokusu sú dvojice gúľ (kombinácie). Spočítaj všetky a priaznivé; pri „aspoň jedna“ je jednoduchší opačný jav.": "Die Ergebnisse des Versuchs sind Paare von Kugeln (Kombinationen). Zähle alle und die günstigen; bei „mindestens eine“ ist das Gegenereignis einfacher.",
  "Výsledok dosaď do vonkajšej funkcie: ${@0}({@1})$.": "Setze das Ergebnis in die äußere Funktion ein: ${@0}({@1})$.",
  "Výsledok je usporiadaná dvojica (prvá kocka, druhá kocka), všetkých je 36. Spočítaj priaznivé dvojice.": "Das Ergebnis ist ein geordnetes Paar (erster Würfel, zweiter Würfel), insgesamt gibt es 36. Zähle die günstigen Paare.",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Runde das Ergebnis auf 2 Dezimalstellen.",
  "Výsledok zaokrúhli na 4 desatinné miesta.": "Runde das Ergebnis auf 4 Dezimalstellen.",
  "Všetky hrany kocky zväčšíme o ${@0}\\,\\%$. O koľko percent sa zväčší jej {@1}? {@2}": "Alle Kanten eines Würfels vergrößern wir um ${@0}\\,\\%$. Um wie viel Prozent wächst {@1}? {@2}",
  "Všetkých trojíc je $\\binom{{@0}}{3}={@1}$. Opačný jav — vyberú sa len chlapci — má $\\binom{{@2}}{3}={@3}$ možností. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.": "Es gibt insgesamt $\\binom{{@0}}{3}={@1}$ Dreiergruppen. Das Gegenereignis — es werden nur Jungen ausgewählt — hat $\\binom{{@2}}{3}={@3}$ Möglichkeiten. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.",
  "Všetkých výberov dvoch gúľ je $\\binom{{@0}}{2}={@1}$. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.": "Es gibt insgesamt $\\binom{{@0}}{2}={@1}$ Auswahlen von zwei Kugeln. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.",
  "Všetkých výsledkov je $6\\cdot 6=36$. {@0} $P=\\frac{{@1}}{36}={@2}$.": "Es gibt insgesamt $6\\cdot 6=36$ Ergebnisse. {@0} $P=\\frac{{@1}}{36}={@2}$.",
  "Z $\\frac{n(n-3)}{2}={@0}$ je $n^2-3n-{@1}=0$ a kladný koreň $n={@2}$.": "Aus $\\frac{n(n-3)}{2}={@0}$ folgt $n^2-3n-{@1}=0$ und die positive Lösung $n={@2}$.",
  "Z Pytagorovej vety vypočítaj diferenciu $d$.": "Berechne die Differenz $d$ mit dem Satz des Pythagoras.",
  "Z Vietovho vzťahu $x_1x_2={@0}$ je $x_2=\\frac{{@1}}{{@2}}={@3}$. Zo vzťahu $x_1+x_2=-p$ je $p=-({@4}{@5})={@6}$. Kontrola dosadením: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓": "Aus dem Satz von Vieta $x_1x_2={@0}$ folgt $x_2=\\frac{{@1}}{{@2}}={@3}$. Aus der Beziehung $x_1+x_2=-p$ folgt $p=-({@4}{@5})={@6}$. Probe durch Einsetzen: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓",
  "Z jednej súradnice vypočítaj parameter $t$ a over, či rovnaké $t$ vyhovuje aj ostatným súradniciam.": "Berechne aus einer Koordinate den Parameter $t$ und prüfe, ob dasselbe $t$ auch die übrigen Koordinaten erfüllt.",
  "Z lineárnej rovnice vyjadri $y$ a dosaď do druhej. Dostaneš kvadratickú rovnicu pre $x$.": "Drücke aus der linearen Gleichung $y$ aus und setze es in die andere ein. Du erhältst eine quadratische Gleichung für $x$.",
  "Z podmienky $D=0$ vyjadri $p^2$. Koľko je $p^2$?": "Drücke aus der Bedingung $D=0$ $p^2$ aus. Wie groß ist $p^2$?",
  "Z povrchu $S=4\\pi r^2$ vypočítaj polomer a dosaď ho do vzorca pre objem $V=\\frac{4}{3}\\pi r^3$.": "Berechne aus der Oberfläche $S=4\\pi r^2$ den Radius und setze ihn in die Volumenformel $V=\\frac{4}{3}\\pi r^3$ ein.",
  "Z prvej rovnice $y={@0}$. Dosadíme: $x({@1})={@2} \\Rightarrow {@3}=0$, korene $x_1={@4}$, $x_2={@5}$. Riešenia sústavy sú $[{@6}; {@7}]$ a $[{@8}; {@9}]$, $x$ je teda ${@10}$ alebo ${@11}$.": "Aus der ersten Gleichung $y={@0}$. Wir setzen ein: $x({@1})={@2} \\Rightarrow {@3}=0$, Lösungen $x_1={@4}$, $x_2={@5}$. Die Lösungen des Systems sind $[{@6}; {@7}]$ und $[{@8}; {@9}]$, $x$ ist also ${@10}$ oder ${@11}$.",
  "Z rovnice $\\frac{n(n-1)}{2}={@0}$ vyjadri súčin $n(n-1)$. Koľko je?": "Drücke aus der Gleichung $\\frac{n(n-1)}{2}={@0}$ das Produkt $n(n-1)$ aus. Wie viel ist es?",
  "Z rovnice $\\frac{n(n-3)}{2}={@0}$ vyjadri súčin $n(n-3)$. Koľko je?": "Drücke aus der Gleichung $\\frac{n(n-3)}{2}={@0}$ das Produkt $n(n-3)$ aus. Wie viel ist es?",
  "Z rovnice ${@0}={@1}$ urči $x$-ové súradnice spoločných bodov.": "Bestimme aus der Gleichung ${@0}={@1}$ die $x$-Koordinaten der gemeinsamen Punkte.",
  "Z rovnice kružnice zisti stred a polomer, potom vypočítaj vzdialenosť stredu od priamky a porovnaj ju s polomerom.": "Bestimme aus der Kreisgleichung Mittelpunkt und Radius, berechne dann den Abstand des Mittelpunkts von der Geraden und vergleiche ihn mit dem Radius.",
  "Z rovnice priamky vyjadri $y$, dosaď do rovnice kružnice a vyrieš kvadratickú rovnicu pre $x$.": "Drücke aus der Geradengleichung $y$ aus, setze es in die Kreisgleichung ein und löse die quadratische Gleichung für $x$.",
  "Z rovnice priamky vyjadríme $y={@0}$ a dosadíme do rovnice kružnice. Po úprave dostaneme ${@1}=0$ s koreňmi $x_1={@2}$, $x_2={@3}$. Priesečníky sú $[{@4}; {@5}]$ a $[{@6}; {@7}]$.": "Aus der Geradengleichung drücken wir $y={@0}$ aus und setzen es in die Kreisgleichung ein. Nach Umformung erhalten wir ${@1}=0$ mit den Lösungen $x_1={@2}$, $x_2={@3}$. Die Schnittpunkte sind $[{@4}; {@5}]$ und $[{@6}; {@7}]$.",
  "Z rovníc ${@0}^{x}=t$ urči všetky riešenia $x$ (pamätaj, že ${@1}^{x}&gt;0$).": "Bestimme aus den Gleichungen ${@0}^{x}=t$ alle Lösungen $x$ (denk daran, dass ${@1}^{x}&gt;0$).",
  "Zabudol si deliť veľkosťou normálového vektora $|\\vec n|=\\sqrt{{@0}}$.": "Du hast vergessen, durch den Betrag des Normalenvektors $|\\vec n|=\\sqrt{{@0}}$ zu dividieren.",
  "Zabudol si na kombinačné číslo $\\binom{{@0}}{{@1}}$: úspešné pokusy môžu byť medzi všetkými pokusmi rozmiestnené rôznymi spôsobmi.": "Du hast den Binomialkoeffizienten $\\binom{{@0}}{{@1}}$ vergessen: Die erfolgreichen Versuche können auf verschiedene Arten auf alle Versuche verteilt sein.",
  "Zabudol si na člen $u'v$: derivuj aj lineárnu funkciu v zátvorke.": "Du hast das Glied $u'v$ vergessen: Leite auch die lineare Funktion in der Klammer ab.",
  "Zabudol si násobiť deriváciou vnútornej funkcie: $(\\sin kx)'=k\\cos kx$ a $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "Du hast vergessen, mit der Ableitung der inneren Funktion zu multiplizieren: $(\\sin kx)'=k\\cos kx$ und $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Zabudol si umocniť menovateľ: vo vzorci pre deriváciu podielu je v menovateli $v^2$.": "Du hast vergessen, den Nenner zu quadrieren: In der Quotientenregel steht im Nenner $v^2$.",
  "Zabudol si vynásobiť deriváciou vnútornej funkcie: $({@0})'={@1}$.": "Du hast vergessen, mit der Ableitung der inneren Funktion zu multiplizieren: $({@0})'={@1}$.",
  "Zadaj všetky hodnoty $p$.": "Gib alle Werte von $p$ ein.",
  "Zadaj všetky možné hodnoty $x$.": "Gib alle möglichen Werte von $x$ ein.",
  "Zadaj všetky riešenia rovnice.": "Gib alle Lösungen der Gleichung ein.",
  "Započítal si aj „čísla“ začínajúce nulou. Na prvom mieste nula byť nemôže.": "Du hast auch „Zahlen“ mitgezählt, die mit null beginnen. An der ersten Stelle darf keine Null stehen.",
  "Zapíš ${@0}^{x}$ ako $({@1}^{x})^2$ a zaveď substitúciu $t={@2}^{x}$. Nezabudni, že $t$ musí byť kladné.": "Schreibe ${@0}^{x}$ als $({@1}^{x})^2$ und führe die Substitution $t={@2}^{x}$ ein. Vergiss nicht, dass $t$ positiv sein muss.",
  "Zapíš menovateľ ako $(\\sqrt{x})^2-a^2$ a rozlož ho podľa vzorca $A^2-B^2=(A-B)(A+B)$.": "Schreibe den Nenner als $(\\sqrt{x})^2-a^2$ und zerlege ihn nach der Formel $A^2-B^2=(A-B)(A+B)$.",
  "Zapíš podmienku cez opačný jav $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ a vyrieš ju logaritmovaním.": "Schreibe die Bedingung über das Gegenereignis als $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ und löse sie durch Logarithmieren.",
  "Zapíš súčet prvých $n$ členov aritmetickej postupnosti a vyrieš nerovnicu $s_n\\ge$ požadovaný počet. Hľadáš najmenšie prirodzené $n$.": "Schreibe die Summe der ersten $n$ Glieder der arithmetischen Folge auf und löse die Ungleichung $s_n\\ge$ geforderte Anzahl. Du suchst das kleinste natürliche $n$.",
  "Zaveď substitúciu $t={@0}$, vyrieš kvadratickú rovnicu a potom sa vráť k $x$ cez definíciu logaritmu.": "Führe die Substitution $t={@0}$ ein, löse die quadratische Gleichung und kehre dann über die Definition des Logarithmus zu $x$ zurück.",
  "Zderivuj vonkajšiu mocninu (vnútro nechaj tak) a vynásob deriváciou vnútornej funkcie.": "Leite die äußere Potenz ab (das Innere lass unverändert) und multipliziere mit der Ableitung der inneren Funktion.",
  "Zisti znamienko $f'$ vľavo a vpravo od bodu.": "Bestimme das Vorzeichen von $f'$ links und rechts vom Punkt.",
  "Zisti znamienko menovateľa pre $x$ tesne vpravo alebo vľavo od daného bodu a skombinuj ho so znamienkom čitateľa.": "Bestimme das Vorzeichen des Nenners für $x$ knapp rechts oder links vom gegebenen Punkt und kombiniere es mit dem Vorzeichen des Zählers.",
  "Zisti, ktoré body kocky v rovinách ležia. Tri body môžu určovať tú istú rovinu, aj keď sú to iné vrcholy.": "Stelle fest, welche Punkte des Würfels in den Ebenen liegen. Drei Punkte können dieselbe Ebene bestimmen, auch wenn es andere Ecken sind.",
  "Zistil si len exponent ${@0}$. Z neho ešte vyjadri $x$.": "Du hast nur den Exponenten ${@0}$ bestimmt. Daraus musst du noch $x$ ausdrücken.",
  "Zlogaritmuj obe strany a vyjadri $x$. {@0}": "Logarithmiere beide Seiten und drücke $x$ aus. {@0}",
  "Zložené úročenie: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Stav na účte tvorí geometrickú postupnosť s kvocientom ${@6}$.": "Zinseszins: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Der Kontostand bildet eine geometrische Folge mit dem Quotienten ${@6}$.",
  "Zo štvorcového kartónu so stranou ${@0}\\,\\text{cm}$ odstrihneme v rohoch zhodné štvorce a zvyšok zahneme na otvorenú krabicu. {@1}": "Aus quadratischem Karton mit der Seite ${@0}\\,\\text{cm}$ schneiden wir an den Ecken gleiche Quadrate aus und falten den Rest zu einer offenen Schachtel. {@1}",
  "Zostane podiel vedúcich koeficientov: $\\frac{{@0}}{{@1}}{@2}$.": "Es bleibt der Quotient der Leitkoeffizienten: $\\frac{{@0}}{{@1}}{@2}$.",
  "Zostav nerovnicu $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ a vyrieš ju logaritmovaním. Výsledok zaokrúhli nahor.": "Stelle die Ungleichung $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ auf und löse sie durch Logarithmieren. Runde das Ergebnis auf.",
  "Zostav rovnicu roviny (normálový vektor je kolmý na dva vektory v rovine) a použi vzorec pre vzdialenosť bodu od roviny.": "Stelle die Ebenengleichung auf (der Normalenvektor steht senkrecht auf zwei Vektoren in der Ebene) und verwende die Formel für den Abstand eines Punktes von einer Ebene.",
  "Zrezaný kužeľ": "Kegelstumpf",
  "Zrezaný rotačný kužeľ má polomery podstáv $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho {@3}. {@4}": "Ein gerader Kreiskegelstumpf hat die Radien der Grundflächen $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ und die Höhe $v={@2}\\,\\text{cm}$. Berechne {@3}. {@4}",
  "Zvislá asymptota je v nulovom bode menovateľa. Vodorovnú asymptotu dá limita pre $x\\to\\infty$: podiel koeficientov pri $x$.": "Die senkrechte Asymptote liegt in der Nullstelle des Nenners. Die waagerechte Asymptote liefert der Grenzwert für $x\\to\\infty$: der Quotient der Koeffizienten bei $x$.",
  "Zvislá asymptota je v nulovom bode menovateľa: rieš rovnicu ${@0}=0$. Pozor na znamienko.": "Die senkrechte Asymptote liegt in der Nullstelle des Nenners: Löse die Gleichung ${@0}=0$. Achte auf das Vorzeichen.",
  "Zvolíme $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.": "Wir wählen $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.",
  "Zvolíme kocku s hranou $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ a body $E, F, G, H$ nad nimi so súradnicou $z=1$.": "Wir wählen einen Würfel mit der Kante $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ und die Punkte $E, F, G, H$ darüber mit der Koordinate $z=1$.",
  "Základ a": "Basis a",
  "Záleží na tom, kto má akú funkciu, ide o variácie 3. triedy z {@0} prvkov: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.": "Es ist wichtig, wer welche Funktion hat, es handelt sich um Variationen 3. Klasse aus {@0} Elementen: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.",
  "Zámenou $x$ za $-x$ sa sčítance len vymenia: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.": "Beim Ersetzen von $x$ durch $-x$ werden die Summanden nur vertauscht: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.",
  "ani sa cifry nesmú opakovať": "und die Ziffern dürfen sich nicht wiederholen",
  "aspoň jeden reálny koreň": "mindestens eine reelle Lösung",
  "aspoň jedna guľa je biela": "mindestens eine Kugel ist weiß",
  "auto": "Auto",
  "bicykel": "Fahrrad",
  "biele": "weiße",
  "bielych": "weiße",
  "deliteľných piatimi": "durch fünf teilbare",
  "dievčat": "Mädchen",
  "dievčatá": "Mädchen",
  "do známky {@0} je to {@1}": "bis zur Note {@0} sind es {@1}",
  "dotyčnica (jeden spoločný bod)": "Tangente (ein gemeinsamer Punkt)",
  "druh dopravy do práce": "Verkehrsmittel zur Arbeit",
  "druhú": "die zweite",
  "dva rôzne reálne korene": "zwei verschiedene reelle Lösungen",
  "dĺžku prepony v cm": "die Länge der Hypotenuse in cm",
  "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">pre h → 0 sa hodnota blíži k 1</span>": "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">für h → 0 nähert sich der Wert 1</span>",
  "farba očí žiaka": "Augenfarbe eines Schülers",
  "f′ &lt; 0, funkcia klesá": "f′ &lt; 0, die Funktion fällt",
  "hmotnosť balíka": "Gewicht eines Pakets",
  "jeden chlapec": "ein Junge",
  "jedna guľa je biela a jedna čierna": "eine Kugel ist weiß und eine schwarz",
  "jeho objem v $\\text{cm}^3$": "das Volumen in $\\text{cm}^3$",
  "jeho obsah v $\\text{cm}^2$": "seinen Flächeninhalt in $\\text{cm}^2$",
  "jeho povrch v $\\text{cm}^2$": "die Oberfläche in $\\text{cm}^2$",
  "k; q": "k; q",
  "končiace cifrou {@0}: {@1}": "endend mit der Ziffer {@0}: {@1}",
  "krajina, z ktorej prišiel turista": "Land, aus dem ein Tourist kam",
  "kvalitatívny": "qualitativ",
  "kvantitatívny diskrétny": "quantitativ diskret",
  "kvantitatívny spojitý": "quantitativ stetig",
  "leží v rovine": "liegt in der Ebene",
  "lokálne maximum": "ein lokales Maximum",
  "lokálne minimum": "ein lokales Minimum",
  "max": "max",
  "medián": "den Median",
  "mimobežné": "windschief",
  "možností": "Möglichkeiten",
  "má sústava nekonečne veľa riešení": "hat das System unendlich viele Lösungen",
  "mínus": "minus",
  "môžu opakovať": "wiederholen dürfen",
  "neleží v rovine": "liegt nicht in der Ebene",
  "nepárne, medián je {@0}. hodnota": "ungerade, der Median ist der {@0}. Wert",
  "nepárnych": "ungerade",
  "nesečnica (žiadny spoločný bod)": "Passante (kein gemeinsamer Punkt)",
  "nesmú opakovať": "nicht wiederholen dürfen",
  "obe gule sú biele": "beide Kugeln sind weiß",
  "objem": "das Volumen",
  "objem hranola v $\\text{cm}^3$": "das Volumen des Prismas in $\\text{cm}^3$",
  "objem mení $k^3$-krát": "ändert sich das Volumen um das $k^3$-Fache",
  "objem v $\\text{cm}^3$": "das Volumen in $\\text{cm}^3$",
  "obsah jeho plášťa v $\\text{cm}^2$": "den Mantelflächeninhalt in $\\text{cm}^2$",
  "obsah plášťa": "den Mantelflächeninhalt",
  "obsah rezu v $\\text{cm}^2$. {@0}": "den Flächeninhalt des Schnitts in $\\text{cm}^2$. {@0}",
  "obľúbený šport": "Lieblingssportart",
  "opäť ľubovoľnú": "wieder eine beliebige",
  "p; x₂": "p; x₂",
  "pešo": "zu Fuß",
  "plus": "plus",
  "polomer rezu v cm.": "den Radius des Schnitts in cm.",
  "povrch": "die Oberfläche",
  "povrch hranola v $\\text{cm}^2$": "die Oberfläche des Prismas in $\\text{cm}^2$",
  "povrch mení $k^2$-krát": "ändert sich die Oberfläche um das $k^2$-Fache",
  "povrch v $\\text{cm}^2$": "die Oberfläche in $\\text{cm}^2$",
  "počet": "Anzahl",
  "počet gólov v zápase": "Anzahl der Tore in einem Spiel",
  "počet strán knihy": "Seitenzahl eines Buches",
  "počet súrodencov": "Anzahl der Geschwister",
  "počet vymeškaných hodín za polrok": "Anzahl der Fehlstunden pro Halbjahr",
  "počet áut v domácnosti": "Anzahl der Autos im Haushalt",
  "pre $t={@0}$ niektorá z nich neplatí, bod na priamke <strong>neleží</strong>.": "für $t={@0}$ gilt eine davon nicht, der Punkt <strong>liegt nicht</strong> auf der Geraden.",
  "pre $t={@0}$ obe platia, bod na priamke <strong>leží</strong>.": "für $t={@0}$ gelten beide, der Punkt <strong>liegt</strong> auf der Geraden.",
  "priamka je s rovinou rovnobežná a nemá s ňou spoločný bod": "die Gerade ist parallel zur Ebene und hat keinen gemeinsamen Punkt mit ihr",
  "priamka je s rovinou rôznobežná (pretína ju v jednom bode)": "die Gerade schneidet die Ebene (in einem Punkt)",
  "priamka leží v rovine": "die Gerade liegt in der Ebene",
  "práve jeden (dvojnásobný) koreň": "genau eine (doppelte) Lösung",
  "párne, medián je priemer {@0}. a {@1}. hodnoty": "gerade, der Median ist das Mittel des {@0}. und des {@1}. Werts",
  "párnych": "gerade",
  "roviny sú rovnobežné rôzne": "die Ebenen sind parallel und verschieden",
  "roviny sú rôznobežné (pretínajú sa v priamke)": "die Ebenen schneiden sich (in einer Geraden)",
  "roviny sú totožné": "die Ebenen sind identisch",
  "rovnobežné": "parallel",
  "rozptyl": "die Varianz",
  "sedadiel": "Sitzplätze",
  "sedadlo": "Sitzplatz",
  "sedadlá": "Sitzplätze",
  "sečnica (2 spoločné body)": "Sekante (2 gemeinsame Punkte)",
  "sečnica (dva spoločné body)": "Sekante (zwei gemeinsame Punkte)",
  "smerodajnú odchýlku": "die Standardabweichung",
  "spotreba auta na 100 km": "Kraftstoffverbrauch eines Autos auf 100 km",
  "stenovú výšku $v_s$ v cm": "die Höhe der Seitenfläche $v_s$ in cm",
  "strojnásobí": "verdreifacht",
  "sústava nemá riešenie": "hat das System keine Lösung",
  "súčet je aspoň {@0}": "die Summe ist mindestens {@0}",
  "súčet je {@0}": "die Summe ist {@0}",
  "súčin je párny": "das Produkt ist gerade",
  "teplota vzduchu na poludnie": "Lufttemperatur am Mittag",
  "terč nezasiahne ani jeden z nich": "keiner von ihnen trifft die Zielscheibe",
  "terč zasiahne aspoň jeden z nich": "mindestens einer von ihnen trifft die Zielscheibe",
  "terč zasiahne práve jeden z nich": "genau einer von ihnen trifft die Zielscheibe",
  "tretiu": "die dritte",
  "v rovine leží, takže v nej leží celá priamka": "liegt in der Ebene, also liegt die ganze Gerade in ihr",
  "v rovine neleží, preto nemajú spoločný bod": "liegt nicht in der Ebene, daher haben sie keinen gemeinsamen Punkt",
  "variačné rozpätie": "die Spannweite",
  "vlak": "Zug",
  "vpravo": "rechts",
  "výrobkov": "Produkte",
  "výrobky": "Produkte",
  "výška žiaka": "Körpergröße eines Schülers",
  "vľavo": "links",
  "vždy niektorú zo zvyšných": "jeweils eine der übrigen",
  "x; y": "x; y",
  "x; y; z": "x; y; z",
  "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · vzdialenosť stredu d = {@3} · r = 3 → {@4}": "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · Abstand des Mittelpunkts d = {@3} · r = 3 → {@4}",
  "x₀ = {@0} · f′(x₀) = {@1} · {@2}": "x₀ = {@0} · f′(x₀) = {@1} · {@2}",
  "x₁; x₂": "x₁; x₂",
  "zdvojnásobí": "verdoppelt",
  "značka mobilného telefónu": "Marke des Mobiltelefons",
  "známka": "Note",
  "znížil": "gesunken",
  "zvýšil": "gestiegen",
  "{@0} Bod $K$ je stred hrany ${@1}$. Vypočítaj vzdialenosť bodov ${@2}$ a $K$ v cm. {@3}": "{@0} Der Punkt $K$ ist der Mittelpunkt der Kante ${@1}$. Berechne den Abstand der Punkte ${@2}$ und $K$ in cm. {@3}",
  "{@0} Funkcia je <strong>{@1}</strong>.": "{@0} Die Funktion ist <strong>{@1}</strong>.",
  "{@0} Normálové vektory sú ${@1}$ a ${@2}$. {@3}": "{@0} Die Normalenvektoren sind ${@1}$ und ${@2}$. {@3}",
  "{@0} Normálový vektor roviny ${@1}$ je $\\vec{n}={@2}$ (kolmý na $\\vec{{@3}{@4}}$ aj $\\vec{{@5}{@6}}$), smerový vektor priamky $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}": "{@0} Der Normalenvektor der Ebene ${@1}$ ist $\\vec{n}={@2}$ (senkrecht zu $\\vec{{@3}{@4}}$ und $\\vec{{@5}{@6}}$), der Richtungsvektor der Geraden $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}",
  "{@0} Potom ${@1}{@2}$ a $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.": "{@0} Dann ${@1}{@2}$ und $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.",
  "{@0} Rovina ${@1}$ má normálový vektor $\\vec{n}={@2}$ a rovnicu ${@3}=0$. Pre ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.": "{@0} Die Ebene ${@1}$ hat den Normalenvektor $\\vec{n}={@2}$ und die Gleichung ${@3}=0$. Für ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.",
  "{@0} Smerový vektor priamky $\\vec{u}=\\vec{{@1}}={@2}$, vektor $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.": "{@0} Der Richtungsvektor der Geraden ist $\\vec{u}=\\vec{{@1}}={@2}$, der Vektor $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.",
  "{@0} Správne je ${@1}$, $k\\in\\mathbb{Z}$.": "{@0} Richtig ist ${@1}$, $k\\in\\mathbb{Z}$.",
  "{@0} Substitúcia $t={@1} x$: ${@2}=0$, korene $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Spolu $K=\\{{@7}\\}$.": "{@0} Substitution $t={@1} x$: ${@2}=0$, Lösungen $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Zusammen $K=\\{{@7}\\}$.",
  "{@0} Vypočítaj $P(X={@1})$. {@2}": "{@0} Berechne $P(X={@1})$. {@2}",
  "{@0} Vypočítaj $P(X\\ge 1)$. {@1}": "{@0} Berechne $P(X\\ge 1)$. {@1}",
  "{@0} Vypočítaj pravdepodobnosť, že $X\\le 1$. {@1}": "{@0} Berechne die Wahrscheinlichkeit, dass $X\\le 1$. {@1}",
  "{@0} Vypočítaj strednú hodnotu $E(X)$ a rozptyl $D(X)$. Zadaj ich v tomto poradí oddelené bodkočiarkou (ako zlomky alebo desatinné čísla zaokrúhlené aspoň na 2 miesta).": "{@0} Berechne den Erwartungswert $E(X)$ und die Varianz $D(X)$. Gib sie in dieser Reihenfolge durch Semikolon getrennt ein (als Brüche oder auf mindestens 2 Stellen gerundete Dezimalzahlen).",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od priamky ${@2}$ v cm. {@3}": "{@0} Berechne den Abstand der Ecke ${@1}$ von der Geraden ${@2}$ in cm. {@3}",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od roviny ${@2}$ v cm. {@3}": "{@0} Berechne den Abstand der Ecke ${@1}$ von der Ebene ${@2}$ in cm. {@3}",
  "{@0} Výsledok zaokrúhli na desatiny.": "{@0} Runde das Ergebnis auf Zehntel.",
  "{@0} Znak je <strong>{@1}</strong>.": "{@0} Das Merkmal ist <strong>{@1}</strong>.",
  "{@0} chlapci": "{@0} Jungen",
  "{@0} dievčatá": "{@0} Mädchen",
  "{@0} usporiadaného súboru. Aký je medián?": "{@0} des geordneten Datensatzes. Was ist der Median?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Aký je medián známok?": "{@0} zeigt die Noten einer Klassenarbeit in der Klasse:{@1}Was ist der Median der Noten?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Vypočítaj priemernú známku. {@2}": "{@0} zeigt die Noten einer Klassenarbeit in der Klasse:{@1}Berechne die Durchschnittsnote. {@2}",
  "{@0} {@1}": "{@0} {@1}",
  "{@0}Zaveď $t={@1} x$, vyrieš kvadratickú rovnicu a ponechaj len korene z intervalu $\\langle -1; 1\\rangle$.": "{@0}Führe $t={@1} x$ ein, löse die quadratische Gleichung und behalte nur die Lösungen aus dem Intervall $\\langle -1; 1\\rangle$.",
  "Údaje najprv usporiadaj podľa veľkosti. Pri párnom počte je medián priemerom dvoch prostredných hodnôt.": "Ordne die Daten zuerst der Größe nach. Bei gerader Anzahl ist der Median das Mittel der beiden mittleren Werte.",
  "Útvar ohraničený parabolou a priamkou": "Von einer Parabel und einer Geraden begrenzte Figur",
  "Čitateľ ${@0}$ rozlož na súčin ${@1}\\cdot(x+c)$. Aké je číslo $c$?": "Zerlege den Zähler ${@0}$ in das Produkt ${@1}\\cdot(x+c)$. Wie lautet die Zahl $c$?",
  "Čitateľ derivácie ${@0}({@1})-({@2})\\cdot {@3}$ je po úprave konštanta. Aká?": "Der Zähler der Ableitung ${@0}({@1})-({@2})\\cdot {@3}$ ist nach dem Umformen eine Konstante. Welche?",
  "Čitateľ je nenulová konštanta a menovateľ sa blíži k nule, takže zlomok v absolútnej hodnote rastie nad všetky medze.": "Der Zähler ist eine von null verschiedene Konstante und der Nenner nähert sich null, sodass der Bruch betragsmäßig über alle Grenzen wächst.",
  "Čitateľ má nižší stupeň než menovateľ, v čitateli preto zostane len nula a limita je $0$.": "Der Zähler hat einen niedrigeren Grad als der Nenner, im Zähler bleibt daher nur null und der Grenzwert ist $0$.",
  "Čitateľ zmení znamienko, menovateľ nie: $f(-x)=-f(x)$.": "Der Zähler ändert das Vorzeichen, der Nenner nicht: $f(-x)=-f(x)$.",
  "Čitateľa aj menovateľa vydelíme najvyššou mocninou menovateľa, teda ${@0}$. Všetky členy tvaru $\\frac{c}{x^k}$ sa blížia k nule. {@1}": "Zähler und Nenner dividieren wir durch die höchste Potenz des Nenners, also ${@0}$. Alle Glieder der Form $\\frac{c}{x^k}$ nähern sich null. {@1}",
  "Člen $uv'$ je $({@0})\\cdot\\frac{1}{x}$. Koľko je teda $f'(1)$?": "Das Glied $uv'$ ist $({@0})\\cdot\\frac{1}{x}$. Wie viel ist also $f'(1)$?",
  "Číslo $f({@0})$ nie je absolútny člen $q$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a roznásob zátvorku.": "Die Zahl $f({@0})$ ist nicht das absolute Glied $q$. Setze in $y=f(x_0)+f'(x_0)(x-x_0)$ ein und multipliziere die Klammer aus.",
  "Číslo z vodorovnej asymptoty $y=\\dots$ (limita pre $x\\to\\infty$)?": "Die Zahl der waagerechten Asymptote $y=\\dots$ (Grenzwert für $x\\to\\infty$)?",
  "Číslo zo zvislej asymptoty $x=\\dots$ (nulový bod menovateľa)?": "Die Zahl der senkrechten Asymptote $x=\\dots$ (Nullstelle des Nenners)?",
  "čas behu na 100 m": "Laufzeit über 100 m",
  "čierne": "schwarze",
  "čiernych": "schwarze",
  "ľubovoľnú cifru": "eine beliebige Ziffer",
  "ľubovoľnú cifru okrem nuly": "eine beliebige Ziffer außer Null",
  "Žiaci odpovedali, ako chodia do školy:{@0}{@1} Výsledok zaokrúhli na desatiny.": "Die Schüler haben geantwortet, wie sie zur Schule kommen:{@0}{@1} Runde das Ergebnis auf Zehntel.",
  "Žiadny z nich neleží vo vnútri intervalu.": "Keine von ihnen liegt im Inneren des Intervalls.",
  "Žiak v teste s {@0} otázkami náhodne tipuje; každá otázka má štyri možnosti a práve jedna je správna. Náhodná premenná $X$ je počet správnych odpovedí.": "Ein Schüler rät in einem Test mit {@0} Fragen zufällig; jede Frage hat vier Antwortmöglichkeiten und genau eine ist richtig. Die Zufallsgröße $X$ ist die Anzahl der richtigen Antworten.",
  "žiadny reálny koreň": "keine reelle Lösung",
  "„Najviac jeden“ zahŕňa aj možnosť, že nenastane žiadny úspech. Pripočítaj $P(X=0)$.": "„Höchstens einer“ umfasst auch die Möglichkeit, dass kein Erfolg eintritt. Addiere $P(X=0)$.",
  "„Najviac jeden“ znamená 0 alebo 1 úspech. Sčítaj tieto dve pravdepodobnosti.": "„Höchstens einer“ bedeutet 0 oder 1 Erfolg. Addiere diese beiden Wahrscheinlichkeiten."
 }
});
