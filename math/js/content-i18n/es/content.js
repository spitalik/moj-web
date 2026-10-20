/* Español: preklad js/content.js, js/exercises.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/content/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "cisla": {
   "title": "Expresiones numéricas y jerarquía de operaciones",
   "summary": "Números, paréntesis y el orden correcto de los cálculos.",
   "theory": [
    "<p>Los números naturales son $1, 2, 3, 4, \\dots$. Su conjunto se denota $\\mathbb{N}$. Si les añadimos el cero, obtenemos los enteros no negativos; al añadir los números negativos se forma el conjunto de los números enteros $\\mathbb{Z}$.</p>",
    {
     "fig": "numberline",
     "caption": "Recta numérica: los puntos azules son números naturales; a la izquierda del cero están los enteros negativos."
    },
    "<p><strong>Jerarquía de operaciones:</strong></p>\n       <ol><li>expresiones entre paréntesis,</li><li>potencias y raíces,</li>\n       <li>multiplicaciones y divisiones de izquierda a derecha,</li><li>sumas y restas de izquierda a derecha.</li></ol>"
   ],
   "examples": [
    {
     "task": "Calcula $2 + 3\\cdot 4 - 6 : 2$.",
     "steps": [
      "Primero la multiplicación y la división: $3\\cdot 4 = 12$, $6 : 2 = 3$.",
      "La expresión queda $2 + 12 - 3$.",
      "De izquierda a derecha: $2 + 12 = 14$, luego $14 - 3 = 11$.",
      "<strong>Resultado: 11</strong>"
     ]
    }
   ]
  },
  "zlomky": {
   "title": "Fracciones y operaciones con fracciones",
   "summary": "Simplificar, amplificar y operar con fracciones.",
   "theory": [
    "<p>La fracción $\\frac{a}{b}$ tiene numerador $a$ y denominador $b \\neq 0$. El valor de la fracción no cambia si multiplicamos el numerador y el denominador por el mismo número distinto de cero (<strong>amplificación</strong>). El proceso contrario es la <strong>simplificación</strong>.</p>",
    {
     "fig": "fractions",
     "caption": "Amplificar no cambia el valor: $\\frac{1}{2}=\\frac{3}{6}$ y $\\frac{2}{3}=\\frac{4}{6}$ tienen partes coloreadas igual de largas."
    },
    "<p>La <strong>suma y la resta</strong> necesitan un denominador común: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.</p>",
    "<p><strong>Multiplicación</strong>: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$. Para la <strong>división</strong> multiplicamos por la fracción inversa: $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $\\frac{1}{2}+\\frac{2}{3}$.",
     "steps": [
      "El denominador común es $2\\cdot 3 = 6$.",
      "$\\frac{1}{2}=\\frac{3}{6}$ y $\\frac{2}{3}=\\frac{4}{6}$.",
      "$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$.",
      "<strong>Resultado: $\\frac{7}{6}=1\\frac{1}{6}$</strong>"
     ]
    }
   ]
  },
  "percenta": {
   "title": "Porcentajes",
   "summary": "Cálculo de porcentajes, aumentos y descuentos porcentuales.",
   "theory": [
    "<p>$p\\,\\%$ significa $\\frac{p}{100}$. El porcentaje de un número $x$ es $\\frac{p}{100}\\cdot x$.</p>",
    {
     "fig": "percent",
     "caption": "El total son 100 partes. $25\\,\\%$ significa 25 de ellas."
    },
    "<p>Un <strong>aumento</strong> del $p\\,\\%$ es multiplicar por $1+\\frac{p}{100}$; una <strong>disminución</strong> es multiplicar por $1-\\frac{p}{100}$.</p>",
    "<p>El número decimal $0{,}25$ es la fracción $\\frac{1}{4}$ y a la vez el $25\\,\\%$. En español los decimales se escriben con coma.</p>"
   ],
   "examples": [
    {
     "task": "Un producto cuesta $80\\,€$. ¿Cuánto cuesta después de un aumento del $15\\,\\%$?",
     "steps": [
      "El factor es $1+\\frac{15}{100}=1{,}15$.",
      "$80\\cdot 1{,}15 = 92$.",
      "<strong>Resultado: 92 €</strong>"
     ]
    }
   ]
  },
  "mnoziny": {
   "title": "Conjuntos y operaciones con conjuntos",
   "summary": "Elementos, unión, intersección, diferencia y cardinal.",
   "theory": [
    "<p>Un conjunto es una colección de elementos distinguibles entre sí. La notación $a\\in A$ significa que el elemento $a$ pertenece al conjunto $A$. El conjunto vacío es $\\varnothing$.</p>",
    "<p>Operaciones: <strong>unión</strong> $A\\cup B$ (elementos de al menos uno de los conjuntos), <strong>intersección</strong> $A\\cap B$ (elementos de ambos conjuntos), <strong>diferencia</strong> $A\\setminus B$ (elementos de $A$ que no están en $B$).</p>",
    {
     "fig": "venn",
     "caption": "Diagrama de Venn para $A=\\{1,2,3,4\\}$ y $B=\\{3,4,5\\}$. La intersección está donde se solapan los círculos."
    },
    "<p>El número de elementos (cardinal) se denota $|A|$. Se cumple $|A\\cup B| = |A|+|B|-|A\\cap B|$: los elementos de la intersección los hemos contado dos veces, por eso los restamos.</p>"
   ],
   "examples": [
    {
     "task": "Sean $A=\\{1,2,3,4\\}$ y $B=\\{3,4,5\\}$. Halla $A\\cup B$, $A\\cap B$ y $A\\setminus B$.",
     "steps": [
      "$A\\cup B=\\{1,2,3,4,5\\}$",
      "$A\\cap B=\\{3,4\\}$",
      "$A\\setminus B=\\{1,2\\}$"
     ]
    }
   ]
  },
  "obsah": {
   "title": "Perímetro y área de figuras planas",
   "summary": "Perímetro y área del rectángulo, el triángulo y el círculo.",
   "theory": [
    "<p>Un rectángulo de lados $a$ y $b$ tiene perímetro $o=2(a+b)$ y área $S=a\\cdot b$.</p>",
    "<p>Un triángulo de base $z$ y altura $v$ sobre esa base tiene área $S=\\frac{z\\cdot v}{2}$.</p>",
    "<p>Un círculo de radio $r$ tiene perímetro (longitud de la circunferencia) $o=2\\pi r$ y área $S=\\pi r^2$, donde $\\pi\\approx 3{,}14159$.</p>",
    {
     "fig": "shapes",
     "caption": "Lados $a$, $b$ del rectángulo, base $z$ y altura $v$ del triángulo, radio $r$ del círculo."
    }
   ],
   "examples": [
    {
     "task": "Un círculo tiene radio $r=3\\,\\text{cm}$. Calcula su área.",
     "steps": [
      "$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$.",
      "$9\\pi\\approx 28{,}27\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "pytagoras": {
   "title": "Teorema de Pitágoras",
   "summary": "Cálculo de lados en un triángulo rectángulo.",
   "theory": [
    "<p>En un triángulo rectángulo con catetos $a$, $b$ e hipotenusa $c$ se cumple $a^2+b^2=c^2$. La hipotenusa está opuesta al ángulo recto y siempre es el lado más largo.</p>",
    {
     "fig": "pythagoras",
     "caption": "Triángulo de lados $3, 4, 5$: las áreas de los cuadrados sobre los catetos $9+16$ suman el área del cuadrado sobre la hipotenusa $25$."
    },
    "<p>Ternas pitagóricas conocidas: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ y sus múltiplos.</p>"
   ],
   "examples": [
    {
     "task": "Los catetos miden $6$ y $8$. ¿Cuánto mide la hipotenusa?",
     "steps": [
      "$c^2=6^2+8^2=36+64=100$.",
      "$c=\\sqrt{100}=10$."
     ]
    }
   ]
  },
  "linearne": {
   "title": "Ecuaciones lineales",
   "summary": "Transformaciones equivalentes y ecuaciones de primer grado.",
   "theory": [
    "<p>Las ecuaciones se resuelven mediante <strong>transformaciones equivalentes</strong>: sumamos o restamos el mismo número a ambos miembros, o multiplicamos o dividimos ambos miembros por un número distinto de cero.</p>",
    "<p>La ecuación $ax+b=c$ con $a\\neq 0$ se resuelve así: $ax=c-b$, es decir, $x=\\frac{c-b}{a}$.</p>",
    "<p>Comprobamos sustituyendo el resultado en la ecuación original.</p>"
   ],
   "examples": [
    {
     "task": "Resuelve $3x+5=20$.",
     "steps": [
      "Restamos $5$: $3x=15$.",
      "Dividimos entre $3$: $x=5$.",
      "Comprobación: $3\\cdot 5+5=20$ ✓"
     ]
    }
   ]
  },
  "kvadraticke": {
   "title": "Ecuaciones de segundo grado",
   "summary": "Discriminante, fórmula general y relaciones de Cardano-Vieta.",
   "theory": [
    "<p>La ecuación de segundo grado $ax^2+bx+c=0$ ($a\\neq 0$) tiene las raíces $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$, donde $D=b^2-4ac$ es el <strong>discriminante</strong>.</p>",
    "<p>Si $D&gt;0$, la ecuación tiene dos raíces reales distintas. Si $D=0$, tiene una raíz doble. Si $D&lt;0$, no tiene raíces reales.</p>",
    {
     "fig": "parabola",
     "caption": "Gráfica de $y=x^2+px+q$ (es decir, $b=p$, $c=q$). Las raíces son los puntos de corte de la parábola con el eje $x$. Cambia $p$ y $q$ y observa el discriminante."
    },
    "<p><strong>Relaciones de Cardano-Vieta</strong> (para $a=1$): $x_1+x_2=-b$ y $x_1\\cdot x_2=c$.</p>"
   ],
   "examples": [
    {
     "task": "Resuelve $x^2-5x+6=0$.",
     "steps": [
      "$a=1$, $b=-5$, $c=6$, $D=25-24=1$.",
      "$x_{1,2}=\\frac{5\\pm 1}{2}$, es decir, $x_1=3$, $x_2=2$.",
      "Comprobación: $3+2=5$ y $3\\cdot 2=6$ ✓"
     ]
    }
   ]
  },
  "mocniny": {
   "title": "Potencias y raíces",
   "summary": "Reglas para operar con potencias y raíces.",
   "theory": [
    "<p>Para $a&gt;0$ y $m,n$ enteros se cumple: $a^m\\cdot a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{m\\cdot n}$.</p>",
    "<p>Exponente negativo: $a^{-n}=\\frac{1}{a^n}$. Exponente cero: $a^0=1$ para $a\\neq 0$.</p>",
    "<p>La raíz es la operación inversa de la potencia: $\\sqrt{a}=a^{1/2}$, $\\sqrt[n]{a}=a^{1/n}$. Se cumple $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$.</p>"
   ],
   "examples": [
    {
     "task": "Simplifica $\\frac{2^5\\cdot 2^{-2}}{2}$.",
     "steps": [
      "Numerador: $2^5\\cdot 2^{-2}=2^{3}$.",
      "$\\frac{2^3}{2}=2^{2}$.",
      "<strong>Resultado: $4$</strong>"
     ]
    }
   ]
  },
  "goniometria": {
   "title": "Razones trigonométricas en el triángulo rectángulo",
   "summary": "Seno, coseno y tangente en el triángulo rectángulo.",
   "theory": [
    "<p>En un triángulo rectángulo con un ángulo agudo $\\alpha$: $\\sin\\alpha=\\frac{\\text{cateto opuesto}}{\\text{hipotenusa}}$, $\\cos\\alpha=\\frac{\\text{cateto contiguo}}{\\text{hipotenusa}}$, $\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$.</p>",
    {
     "fig": "trigtriangle",
     "caption": "Nombres de los lados del triángulo rectángulo respecto al ángulo $\\alpha$."
    },
    "<p>Identidad fundamental: $\\sin^2\\alpha+\\cos^2\\alpha=1$.</p>",
    {
     "fig": "unitcircle",
     "caption": "Circunferencia unidad: un punto sobre ella tiene coordenadas $(\\cos\\alpha, \\sin\\alpha)$. Mueve el ángulo y observa cómo cambian los signos."
    },
    "<p>Valores para los ángulos notables:</p>\n       <table class=\"tbl\">\n         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>\n         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>\n         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>\n       </table>"
   ],
   "examples": [
    {
     "task": "Si $\\sin\\alpha=0{,}6$ y $\\alpha$ es un ángulo agudo, calcula $\\cos\\alpha$.",
     "steps": [
      "$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0{,}36=0{,}64$.",
      "$\\cos\\alpha=\\sqrt{0{,}64}=0{,}8$ (ángulo agudo, el coseno es positivo)."
     ]
    }
   ]
  },
  "matice": {
   "title": "Determinante y matriz inversa 2×2",
   "summary": "Notación matricial, determinante 2×2 y matriz inversa.",
   "theory": [
    "<p>Una matriz de orden $m\\times n$ es una tabla de números con $m$ filas y $n$ columnas. El elemento de la fila $i$ y la columna $j$ se denota $a_{ij}$.</p>",
    "<p>El determinante de la matriz $A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$ es $\\det A=ad-bc$. Si $\\det A\\neq 0$, existe la matriz inversa $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    {
     "fig": "parallelogram",
     "caption": "Las columnas de la matriz $\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ son los vectores $u=(2,1)$ y $v=(3,4)$. El valor absoluto del determinante es el área del paralelogramo que forman: $|\\det|=5$."
    },
    "<p>Un sistema de ecuaciones lineales puede escribirse como $Ax=b$ y resolverse con la matriz inversa: $x=A^{-1}b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $\\det\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$.",
     "steps": [
      "$\\det = 2\\cdot 4-3\\cdot 1 = 8-3 = 5$."
     ]
    }
   ]
  },
  "sucin": {
   "title": "Producto de matrices",
   "summary": "Cómo se multiplican las matrices y por qué importa el orden.",
   "theory": [
    "<p>El producto $C=AB$ existe si el número de columnas de $A$ es igual al número de filas de $B$. El elemento de la fila $i$ y la columna $j$ es $c_{ij}=\\sum_k a_{ik}b_{kj}$: multiplicamos la fila de $A$ por la columna de $B$ y sumamos.</p>",
    {
     "fig": "matmul",
     "caption": "El elemento $c_{11}$ se obtiene de la 1.ª fila de $A$ y la 1.ª columna de $B$: $1\\cdot 0+2\\cdot 1=2$."
    },
    "<p>El producto de matrices <strong>no es conmutativo</strong>: en general $AB\\neq BA$.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$, $B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$. Calcula $AB$.",
     "steps": [
      "$c_{11}=1\\cdot 0+2\\cdot 1=2$, $c_{12}=1\\cdot 1+2\\cdot 0=1$.",
      "$c_{21}=3\\cdot 0+4\\cdot 1=4$, $c_{22}=3\\cdot 1+4\\cdot 0=3$.",
      "<strong>Resultado:</strong> $AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$"
     ]
    }
   ]
  },
  "derivacie": {
   "title": "Derivada de una función",
   "summary": "Variación instantánea, reglas de derivación y recta tangente.",
   "theory": [
    "<p>La derivada $f'(x_0)$ es el límite $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$, si existe. Geométricamente es la pendiente de la recta tangente a la gráfica de $f$ en el punto $x_0$.</p>",
    {
     "fig": "tangent",
     "caption": "Gráfica de $f(x)=x^3-2x$ y la tangente en el punto $x_0$. Su pendiente es $f'(x_0)=3x_0^2-2$. Donde la tangente es horizontal, la derivada vale cero."
    },
    "<p>Reglas: $(x^n)'=n\\,x^{n-1}$, $(c)'=0$, $(c\\,f)'=c\\,f'$, $(f+g)'=f'+g'$, $(f\\cdot g)'=f'g+fg'$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$.</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-2x$. Calcula $f'(2)$.",
     "steps": [
      "$f'(x)=3x^2-2$.",
      "$f'(2)=3\\cdot 2^2-2=12-2=10$."
     ]
    }
   ]
  },
  "integraly": {
   "title": "Fundamentos del cálculo integral",
   "summary": "Integral indefinida y definida, regla de Barrow (Newton-Leibniz).",
   "theory": [
    "<p>Una primitiva $F$ de la función $f$ cumple $F'(x)=f(x)$. Integral indefinida: $\\int f(x)\\,dx=F(x)+C$. Para $n\\neq -1$ se cumple $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$.</p>",
    "<p>La integral definida se calcula con la <strong>regla de Barrow (fórmula de Newton-Leibniz)</strong>: $\\int_a^b f(x)\\,dx=F(b)-F(a)$. Geométricamente es el área bajo la gráfica de $f$ desde $a$ hasta $b$ (para $f$ positiva).</p>",
    {
     "fig": "area",
     "caption": "El área bajo la gráfica de $f(x)=x^2$ desde $0$ hasta $b$ es $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$."
    },
    "<p>Linealidad: $\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $\\int_0^2 3x^2\\,dx$.",
     "steps": [
      "Primitiva: $F(x)=x^3$.",
      "$F(2)-F(0)=8-0=8$.",
      "<strong>Resultado: 8</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A={@0}$, $B={@1}$. Aký prvok má súčin $AB$ v riadku {@2} a stĺpci {@3}?": "$A={@0}$, $B={@1}$. ¿Qué elemento tiene el producto $AB$ en la fila {@2} y la columna {@3}?",
  "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, teda $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.": "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, por tanto $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.",
  "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).": "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — escribe el resultado como fracción de la forma $p/q$ (p. ej., 5/6).",
  "$b^2=c^2-a^2={@0}-{@1}={@2}$, teda $b={@3}$.": "$b^2=c^2-a^2={@0}-{@1}={@2}$, por tanto $b={@3}$.",
  "$c^2=a^2+b^2={@0}+{@1}={@2}$, teda $c={@3}$.": "$c^2=a^2+b^2={@0}+{@1}={@2}$, por tanto $c={@3}$.",
  "$f'(x)={@0}x^{{@1}}{@2}$, teda $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.": "$f'(x)={@0}x^{{@1}}{@2}$, por tanto $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.",
  "$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.": "El $p\\,\\%$ del número $x$ es $\\frac{p}{100}\\cdot x$.",
  "${@0}\\,\\%=\\frac{{@1}}{100}$, teda $\\frac{{@2}}{100}\\cdot {@3}={@4}$.": "${@0}\\,\\%=\\frac{{@1}}{100}$, por tanto $\\frac{{@2}}{100}\\cdot {@3}={@4}$.",
  "${@0}x={@1}{@2}={@3}$, teda $x={@4}$.": "${@0}x={@1}{@2}={@3}$, por tanto $x={@4}$.",
  "25 štvorčekov zo 100": "25 cuadraditos de 100",
  "Aký exponent bude mať výsledok ${@0}^{\\square}$?": "¿Qué exponente tendrá el resultado ${@0}^{\\square}$?",
  "Aký je spoločný menovateľ (súčin menovateľov ${@0}\\cdot {@1}$)?": "¿Cuál es el denominador común (producto de los denominadores ${@0}\\cdot {@1}$)?",
  "Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?": "¿Cuánto vale la suma de las raíces $x_1 + x_2$ (según las fórmulas de Vieta)?",
  "Aký je súčin koreňov $x_1 \\cdot x_2$?": "¿Cuánto vale el producto de las raíces $x_1 \\cdot x_2$?",
  "Derivácia je $f'(x)=k\\,x^{{@0}}{@1}$. Aký je koeficient $k$?": "La derivada es $f'(x)=k\\,x^{{@0}}{@1}$. ¿Cuánto vale el coeficiente $k$?",
  "Determinant ako obsah rovnobežníka": "El determinante como área de un paralelogramo",
  "Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.": "Has sustituido en la función original $f$. Primero deriva la función y después sustituye.",
  "Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.": "Has sustituido en la función original. Primero halla la primitiva $F$ y sustituye en ella.",
  "Dosadil si len hornú hranicu. Od $F({@0})$ ešte odčítaj $F({@1})$.": "Solo has sustituido el límite superior. A $F({@0})$ todavía hay que restarle $F({@1})$.",
  "Dosadil si priemer ${@0}$. Vo vzorci $\\pi r^2$ je polomer $r={@1}$.": "Has usado el diámetro ${@0}$. En la fórmula $\\pi r^2$ el radio es $r={@1}$.",
  "Druhý súčin: koľko je ${@0}\\cdot {@1}$?": "Segundo producto: ¿cuánto es ${@0}\\cdot {@1}$?",
  "Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.": "Solo has restado las longitudes. El teorema de Pitágoras se cumple para los cuadrados: $b^2=c^2-a^2$.",
  "Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.": "Has sumado los exponentes. Al elevar una potencia a otra potencia, los exponentes se multiplican.",
  "Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.": "Has multiplicado los exponentes. Al multiplicar potencias de la misma base, los exponentes se suman.",
  "Graf funkcie s dotyčnicou": "Gráfica de una función con su recta tangente",
  "Graf kvadratickej funkcie": "Gráfica de una función cuadrática",
  "Horná hranica b": "Límite superior b",
  "Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.": "Busca dos números cuyo producto sea $q$ y cuya suma sea $-p$.",
  "Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.": "La identidad se cumple para los cuadrados: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, no $\\cos\\alpha = 1 - \\sin\\alpha$.",
  "Jednotková kružnica": "Circunferencia unidad",
  "Koeficient {@0} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom {@1}.": "Has restado el coeficiente {@0}. Junto a la $x$ hay una multiplicación, así que divide ambos miembros entre {@1}.",
  "Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.": "Las raíces te han salido el doble de grandes. En la fórmula $x=\\frac{-p\\pm\\sqrt{D}}{2}$ no olvides dividir entre dos.",
  "Koľko je $1\\,\\%$ z čísla {@0}?": "¿Cuánto es el $1\\,\\%$ de {@0}?",
  "Koľko je $F({@0}) - F({@1})$?": "¿Cuánto es $F({@0}) - F({@1})$?",
  "Koľko je $F({@0})$?": "¿Cuánto es $F({@0})$?",
  "Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?": "¿Cuánto vale $\\cos\\alpha$ (ángulo agudo, raíz positiva) con 3 decimales?",
  "Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.": "¿Cuánto vale $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Escríbelo como fracción.",
  "Koľko je $\\pi\\cdot {@0}$ (použi $\\pi\\approx 3{{@1}}14$)?": "¿Cuánto es $\\pi\\cdot {@0}$ (usa $\\pi\\approx 3{{@1}}14$)?",
  "Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).": "¿Cuánto vale $\\sin^2\\alpha$? Escríbelo como fracción (p. ej., 9/25).",
  "Koľko je $a^2 = {@0}^2$?": "¿Cuánto es $a^2 = {@0}^2$?",
  "Koľko je $b = \\sqrt{{@0}}$?": "¿Cuánto es $b = \\sqrt{{@0}}$?",
  "Koľko je $b^2 = {@0} - {@1}$?": "¿Cuánto es $b^2 = {@0} - {@1}$?",
  "Koľko je $b^2 = {@0}^2$?": "¿Cuánto es $b^2 = {@0}^2$?",
  "Koľko je $c = \\sqrt{{@0}}$?": "¿Cuánto es $c = \\sqrt{{@0}}$?",
  "Koľko je $c^2 = {@0} + {@1}$?": "¿Cuánto es $c^2 = {@0} + {@1}$?",
  "Koľko je $c^2 = {@0}^2$?": "¿Cuánto es $c^2 = {@0}^2$?",
  "Koľko je $f'({@0})$?": "¿Cuánto es $f'({@0})$?",
  "Koľko je $r^2 = {@0}^2$?": "¿Cuánto es $r^2 = {@0}^2$?",
  "Koľko je $z\\cdot v = {@0}\\cdot {@1}$?": "¿Cuánto es $z\\cdot v = {@0}\\cdot {@1}$?",
  "Koľko je ${@0} + {@1} - {@2}$?": "¿Cuánto es ${@0} + {@1} - {@2}$?",
  "Koľko je ${@0} - ({@1})$?": "¿Cuánto es ${@0} - ({@1})$?",
  "Koľko je ${@0} : {@1}$?": "¿Cuánto es ${@0} : {@1}$?",
  "Koľko je ${@0}\\,\\%$ z čísla ${@1}$?": "¿Cuánto es el ${@0}\\,\\%$ de ${@1}$?",
  "Koľko je ${@0}\\cdot {@1}$?": "¿Cuánto es ${@0}\\cdot {@1}$?",
  "Koľko je ${@0}^{{@1}}$?": "¿Cuánto es ${@0}^{{@1}}$?",
  "Koľko je $|A| + |B|$?": "¿Cuánto es $|A| + |B|$?",
  "Koľko je teda ${@0}\\,\\%$ z čísla {@1}?": "Entonces, ¿cuánto es el ${@0}\\,\\%$ de {@1}?",
  "Kruh má polomer $r={@0}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{{@1}}14$).": "Un círculo tiene radio $r={@0}$. Calcula su área $S$ (usa $\\pi\\approx 3{{@1}}14$).",
  "Ktoré dve čísla majú súčet {@0} a súčin {@1}? Zadaj ich oddelené bodkočiarkou.": "¿Qué dos números suman {@0} y multiplicados dan {@1}? Escríbelos separados por punto y coma.",
  "Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.": "Las matrices no se multiplican elemento a elemento en la misma posición. Multiplica la fila de la matriz $A$ por la columna de la matriz $B$ y suma los productos.",
  "Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.": "Has cambiado el denominador al común, pero no has ampliado los numeradores. Multiplica el numerador por el mismo número que el denominador.",
  "Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?": "El conjunto $A$ tiene ${@0}$ elementos, el conjunto $B$ tiene ${@1}$ elementos y su intersección tiene ${@2}$ elementos. ¿Cuántos elementos tiene $A\\cup B$?",
  "Najprv násobenie a delenie: ${@0}\\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} + {@7} - {@8} = {@9}$.": "Primero multiplicaciones y divisiones: ${@0}\\cdot {@1} = {@2}$ y ${@3} : {@4} = {@5}$. Después ${@6} + {@7} - {@8} = {@9}$.",
  "Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.": "Primero resta la constante en ambos miembros y después divide entre el coeficiente de $x$.",
  "Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.": "Primero calcula las multiplicaciones y divisiones, y solo después las sumas y restas.",
  "Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.": "Has multiplicado los elementos de las columnas. Multiplica por diagonales: $a\\cdot d$ y $b\\cdot c$.",
  "Obdĺžnik má strany $a={@0}$ a $b={@1}$. Aký je jeho obsah $S$?": "Un rectángulo tiene lados $a={@0}$ y $b={@1}$. ¿Cuál es su área $S$?",
  "Obdĺžnik, trojuholník a kruh": "Rectángulo, triángulo y círculo",
  "Obsah kruhu je $\\pi r^2$.": "El área del círculo es $\\pi r^2$.",
  "Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.": "El área del rectángulo es el producto de las longitudes de dos lados contiguos.",
  "Obsah trojuholníka je polovica súčinu základne a výšky.": "El área del triángulo es la mitad del producto de la base por la altura.",
  "Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.": "Solo has sumado los catetos. El teorema de Pitágoras se cumple para los cuadrados: $c^2=a^2+b^2$.",
  "Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).": "El ángulo agudo $\\alpha$ cumple $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Calcula $\\cos\\alpha$ (con 3 decimales).",
  "Plocha pod grafom funkcie": "Área bajo la gráfica de una función",
  "Použi $(x^n)'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.": "Usa $(x^n)'=n\\,x^{n-1}$ y deriva cada término por separado.",
  "Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.": "Usa $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ y después la regla de Barrow.",
  "Použi Pytagorovu vetu $c^2=a^2+b^2$.": "Usa el teorema de Pitágoras $c^2=a^2+b^2$.",
  "Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.": "Usa la identidad $\\sin^2\\alpha+\\cos^2\\alpha=1$.",
  "Pozri si tabuľku hodnôt v teórii.": "Mira la tabla de valores de la teoría.",
  "Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.": "Has calculado de izquierda a derecha. La multiplicación y la división tienen prioridad sobre la suma y la resta.",
  "Pravouhlý trojuholník má odvesny $a={@0}$ a $b={@1}$. Aká je dĺžka prepony $c$?": "Un triángulo rectángulo tiene catetos $a={@0}$ y $b={@1}$. ¿Cuánto mide la hipotenusa $c$?",
  "Pravouhlý trojuholník má preponu $c={@0}$ a odvesnu $a={@1}$. Aká je dĺžka druhej odvesny $b$?": "Un triángulo rectángulo tiene hipotenusa $c={@0}$ y un cateto $a={@1}$. ¿Cuánto mide el otro cateto $b$?",
  "Pravouhlý trojuholník s popisom strán": "Triángulo rectángulo con los lados señalados",
  "Pre $2\\times 2$ matica je $\\det=ad-bc$.": "Para una matriz $2\\times 2$ es $\\det=ad-bc$.",
  "Pre funkciu $f(x)={@0}x^{{@1}}{@2}$ vypočítaj $f'({@3})$.": "Para la función $f(x)={@0}x^{{@1}}{@2}$ calcula $f'({@3})$.",
  "Prenes konštantu na pravú stranu. Koľko je ${@0}x$?": "Pasa la constante al miembro derecho. ¿Cuánto es ${@0}x$?",
  "Pri násobení mocnín rovnakého základu sa exponenty sčítajú.": "Al multiplicar potencias de la misma base, los exponentes se suman.",
  "Pri prenesení čísla {@0} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.": "Al pasar el número {@0} al otro miembro no le has cambiado el signo. Haz la misma operación inversa en ambos miembros.",
  "Pri umocňovaní mocniny sa exponenty násobia.": "Al elevar una potencia a otra potencia, los exponentes se multiplican.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, teda $F({@3})-F({@4})={@5}$.": "La primitiva es $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, por tanto $F({@3})-F({@4})={@5}$.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Koľko je $F({@3})$?": "La primitiva es $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. ¿Cuánto es $F({@3})$?",
  "Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.": "Los elementos de la intersección se cuentan dos veces, por eso hay que restarlos.",
  "Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.": "Has restado dos veces los elementos de la intersección. Pertenecen a la unión: réstalos solo una vez.",
  "Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.": "Has contado dos veces los elementos de la intersección: están en $A$ y también en $B$. Réstalos una vez.",
  "Prvky prieniku sú v tomto súčte dvakrát. Koľko je ${@0} - {@1}$?": "Los elementos de la intersección están dos veces en esta suma. ¿Cuánto es ${@0} - {@1}$?",
  "Prvý súčin: koľko je ${@0}\\cdot {@1}$?": "Primer producto: ¿cuánto es ${@0}\\cdot {@1}$?",
  "Pytagorova veta: štvorce nad stranami": "Teorema de Pitágoras: cuadrados sobre los lados",
  "Rozšír druhý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Amplía la segunda fracción al denominador {@0}. ¿Cuál será su numerador?",
  "Rozšír prvý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Amplía la primera fracción al denominador {@0}. ¿Cuál será su numerador?",
  "Spoločný menovateľ je ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.": "El denominador común es ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.",
  "Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.": "Has sumado los lados. El área del rectángulo se obtiene multiplicándolos.",
  "Súčet: koľko je ${@0} + {@1}$?": "Suma: ¿cuánto es ${@0} + {@1}$?",
  "Súčin matíc: riadok krát stĺpec": "Producto de matrices: fila por columna",
  "Súčin na hlavnej diagonále: koľko je $({@0})\\cdot({@1})$?": "Producto de la diagonal principal: ¿cuánto es $({@0})\\cdot({@1})$?",
  "Súčin na vedľajšej diagonále: koľko je $({@0})\\cdot({@1})$?": "Producto de la diagonal secundaria: ¿cuánto es $({@0})\\cdot({@1})$?",
  "Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.": "Has sumado los productos. El determinante es una diferencia: el producto de la diagonal principal menos el de la diagonal secundaria.",
  "Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.": "Suma los numeradores y escribe el resultado como fracción $p/q$.",
  "Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.": "Has sumado los numeradores y también los denominadores. Las fracciones se suman después de reducirlas a común denominador; el denominador no se suma.",
  "To je $\\cos^2\\alpha$. Na konci ešte odmocni.": "Eso es $\\cos^2\\alpha$. Al final todavía tienes que hacer la raíz cuadrada.",
  "To je $b^2$. Na konci ešte odmocni.": "Eso es $b^2$. Al final todavía tienes que hacer la raíz cuadrada.",
  "To je $c^2$. Na konci ešte odmocni.": "Eso es $c^2$. Al final todavía tienes que hacer la raíz cuadrada.",
  "To je hodnota {@0} uhla ${@1}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.": "Ese es el valor del {@0} del ángulo ${@1}^\\circ$. El seno crece de 0 a 1 al aumentar el ángulo y el coseno decrece de 1 a 0.",
  "To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.": "Eso es el perímetro (la suma de todos los lados). El área es el producto de dos lados contiguos.",
  "To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.": "Eso es la longitud de la circunferencia $2\\pi r$. El área es $\\pi r^2$.",
  "To je zvyšok do 100 %. Pýtame sa na samotných ${@0}\\,\\%$ z čísla {@1}.": "Eso es lo que falta hasta el 100 %. Se pregunta solo por el ${@0}\\,\\%$ de {@1}.",
  "Trojuholník je polovica obdĺžnika. Koľko je ${@0} : 2$?": "El triángulo es la mitad del rectángulo. ¿Cuánto es ${@0} : 2$?",
  "Trojuholník má základňu $z={@0}$ a výšku $v={@1}$. Aký je jeho obsah $S$?": "Un triángulo tiene base $z={@0}$ y altura $v={@1}$. ¿Cuál es su área $S$?",
  "Uhol α (°)": "Ángulo α (°)",
  "Vennov diagram dvoch množín": "Diagrama de Venn de dos conjuntos",
  "Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.": "Toma la fila $i$ de la matriz $A$ y la columna $j$ de la matriz $B$ y multiplícalas componente a componente.",
  "Vietove vzťahy: $x_1+x_2={@0}$ a $x_1\\cdot x_2={@1}$. Korene sú $x_1={@2}$ a $x_2={@3}$.": "Fórmulas de Vieta: $x_1+x_2={@0}$ y $x_1\\cdot x_2={@1}$. Las raíces son $x_1={@2}$ y $x_2={@3}$.",
  "Vydeľ obe strany číslom {@0}. Koľko je $x$?": "Divide ambos miembros entre {@0}. ¿Cuánto vale $x$?",
  "Vypočítaj $({@0}^{{@1}})^{{@2}}$.": "Calcula $({@0}^{{@1}})^{{@2}}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.": "Calcula $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.",
  "Vypočítaj ${@0}\\,{@1}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).": "Calcula ${@0}\\,{@1}^\\circ$ como número decimal (con 3 decimales).",
  "Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.": "Calcula ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.",
  "Vypočítaj determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.": "Calcula el determinante $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.",
  "Vyrieš rovnicu $x^2{@0}{@1} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).": "Resuelve la ecuación $x^2{@0}{@1} = 0$. Escribe las dos raíces separadas por punto y coma (p. ej., 2; 3).",
  "Vyrieš rovnicu ${@0}x{@1} = {@2}$.": "Resuelve la ecuación ${@0}x{@1} = {@2}$.",
  "Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.": "Del teorema de Pitágoras despeja $b^2=c^2-a^2$.",
  "Z matice $B$ si vzal riadok. Prvok súčinu je {@0}. riadok matice $A$ krát {@1}. stĺpec matice $B$.": "Has tomado una fila de la matriz $B$. El elemento del producto es la fila {@0} de la matriz $A$ por la columna {@1} de la matriz $B$.",
  "Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.": "Se te ha olvidado dividir entre dos. El triángulo es la mitad del rectángulo de lados $z$ y $v$.",
  "Zabudol si deliť číslom {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.": "Se te ha olvidado dividir entre {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.",
  "Zabudol si exponent {@0} dať pred $x$: $(x^{{@1}})'={@2}x^{{@3}}$.": "Se te ha olvidado poner el exponente {@0} delante de la $x$: $(x^{{@1}})'={@2}x^{{@3}}$.",
  "Zabudol si na delenie. Neodčítavaš {@0}, ale až výsledok ${@1} : {@2}$.": "Se te ha olvidado la división. No restas {@0}, sino el resultado de ${@1} : {@2}$.",
  "Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.": "Se te ha olvidado elevar el radio al cuadrado: el área es $\\pi\\cdot r\\cdot r$.",
  "Zlomky ako pruhy": "Fracciones como barras",
  "Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.": "Reduce las fracciones a común denominador: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.",
  "Základy si vynásobil. Základ {@0} ostáva, sčítajú sa len exponenty.": "Has multiplicado las bases. La base {@0} se mantiene; solo se suman los exponentes.",
  "b = {@0} · <span class=\"c-accent\">obsah = b³/3 = {@1}</span>": "b = {@0} · <span class=\"c-accent\">área = b³/3 = {@1}</span>",
  "korene x₁ = {@0}, x₂ = {@1}": "raíces x₁ = {@0}, x₂ = {@1}",
  "kosínusu": "coseno",
  "kruh": "círculo",
  "napr. 5/6": "p. ej., 5/6",
  "nemá reálne korene (D &lt; 0)": "no tiene raíces reales (D &lt; 0)",
  "obdĺžnik": "rectángulo",
  "odvesna": "cateto",
  "prepona": "hipotenusa",
  "prirodzené čísla ℕ": "números naturales ℕ",
  "priľahlá odvesna": "cateto contiguo",
  "protiľahlá": "opuesto",
  "sínusu": "seno",
  "trojuholník": "triángulo",
  "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (smernica dotyčnice)": "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (pendiente de la tangente)",
  "y = x²{@0}{@1} · D = {@2} · {@3}": "y = x²{@0}{@1} · D = {@2} · {@3}",
  "záporné celé čísla": "enteros negativos",
  "Člen ${@0}x$ si nezderivoval. Jeho derivácia je {@1}.": "No has derivado el término ${@0}x$. Su derivada es {@1}.",
  "Číselná os": "Recta numérica",
  "Číslo si vydelil počtom percent. ${@0}\\,\\%$ znamená {@1} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob {@2}.": "Has dividido el número entre el porcentaje. ${@0}\\,\\%$ significa {@1} centésimas, así que primero halla el 1 % (divide entre 100) y después multiplica por {@2}.",
  "Štvorec rozdelený na 100 dielov, 25 je vyfarbených": "Cuadrado dividido en 100 partes, 25 están coloreadas",
  "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>": "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>"
 }
});
