/* Español: preklad js/rocniky/s4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/s4/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "s4-limita": {
   "title": "Límite de una función",
   "summary": "A qué se acercan los valores de una función, cálculo de límites del tipo 0/0 y límites en el infinito.",
   "theory": [
    "<p>La notación $\\lim_{x\\to a} f(x) = L$ significa que los valores $f(x)$ se acercan tanto como queramos al número $L$ si acercamos $x$ lo suficiente a $a$ (con $x\\neq a$).\n       El valor de la función justo en el punto $a$ <strong>no influye</strong> en el límite; la función ni siquiera tiene que estar definida en él.\n       El límite existe si y solo si son iguales los <strong>límites laterales</strong> $\\lim_{x\\to a^-} f(x)$ y $\\lim_{x\\to a^+} f(x)$.</p>",
    {
     "fig": "s4-limita",
     "caption": "La función $f(x)=\\frac{\\sin x}{x}$ no está definida en el punto $0$ (círculo vacío); aun así, $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$. Reduce $h$ y observa los valores."
    },
    "<p><strong>Cómo calculamos límites:</strong></p>\n       <ul><li>Si $f$ es continua en el punto $a$ (polinomio, $\\sin$, $\\mathrm{e}^x$ …), basta con sustituir: $\\lim_{x\\to a} f(x) = f(a)$.</li>\n       <li>Una expresión del tipo $\\frac{0}{0}$ se transforma: se factoriza y se simplifica, o se multiplica por el conjugado para obtener una diferencia de cuadrados.</li>\n       <li>Límite importante: $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, por lo que $\\lim_{x\\to 0}\\frac{\\sin kx}{x} = k$.</li>\n       <li>Una expresión $\\frac{c}{0}$ con $c\\neq 0$ lleva a un límite infinito $\\pm\\infty$; el signo se determina con los límites laterales.</li></ul>",
    "<p><strong>Límite en el infinito</strong> de una función racional: dividimos el numerador y el denominador entre la mayor potencia de $x$ del denominador.\n       Si los grados son iguales, el límite es el cociente de los coeficientes principales; si el numerador tiene menor grado, el límite es $0$.\n       Por ejemplo, $\\lim_{x\\to\\infty}\\frac{3x^2+1}{2x^2-x} = \\frac{3}{2}$. Si $\\lim_{x\\to\\pm\\infty} f(x) = q$, la recta $y=q$ es una asíntota horizontal de la gráfica.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3}$.",
     "steps": [
      "Al sustituir obtenemos $\\frac{0}{0}$, así que hay que transformar la expresión.",
      "Factorizamos el numerador: $x^2-9=(x-3)(x+3)$. Para $x\\neq 3$ simplificamos: $\\frac{(x-3)(x+3)}{x-3}=x+3$.",
      "$\\lim_{x\\to 3}(x+3)=6$.",
      "<strong>Resultado: 6</strong>"
     ]
    },
    {
     "task": "Calcula $\\lim_{x\\to\\infty}\\dfrac{4x^2-x+7}{2x^2+5}$.",
     "steps": [
      "Dividimos el numerador y el denominador entre $x^2$: $\\dfrac{4-\\frac{1}{x}+\\frac{7}{x^2}}{2+\\frac{5}{x^2}}$.",
      "Las fracciones $\\frac{1}{x}$, $\\frac{7}{x^2}$ y $\\frac{5}{x^2}$ tienden a cero cuando $x\\to\\infty$.",
      "<strong>Resultado: $\\frac{4}{2}=2$</strong>"
     ]
    }
   ]
  },
  "s4-derivacie-funkcii": {
   "title": "Derivadas de las funciones elementales",
   "summary": "Derivada de las funciones exponencial, logarítmica y trigonométricas, del producto, del cociente y de la función compuesta.",
   "theory": [
    "<p><strong>Derivadas de las funciones elementales:</strong></p>\n       <table class=\"tbl tbl-auto\">\n         <tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(x)$</th><th>$f'(x)$</th></tr>\n         <tr><td>$c$</td><td>$0$</td><td>$x^n$</td><td>$n\\,x^{n-1}$</td></tr>\n         <tr><td>$\\mathrm{e}^x$</td><td>$\\mathrm{e}^x$</td><td>$a^x$</td><td>$a^x\\ln a$</td></tr>\n         <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td>$\\log_a x$</td><td>$\\frac{1}{x\\ln a}$</td></tr>\n         <tr><td>$\\sin x$</td><td>$\\cos x$</td><td>$\\cos x$</td><td>$-\\sin x$</td></tr>\n         <tr><td>$\\mathrm{tg}\\,x$</td><td>$\\frac{1}{\\cos^2 x}$</td><td>$\\sqrt{x}$</td><td>$\\frac{1}{2\\sqrt{x}}$</td></tr>\n       </table>",
    "<p><strong>Reglas:</strong> producto $(u\\cdot v)'=u'v+uv'$, cociente $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$ (para $v\\neq 0$),\n       función compuesta (regla de la cadena) $\\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x)$: la derivada de la función «exterior» se multiplica por la derivada de la «interior».\n       Por ejemplo, $(\\sin 3x)'=3\\cos 3x$, $(\\mathrm{e}^{x^2})'=2x\\,\\mathrm{e}^{x^2}$, $\\big(\\ln(x^2+1)\\big)'=\\frac{2x}{x^2+1}$.</p>",
    {
     "fig": "s4-exp-ln",
     "caption": "Las gráficas de $y=\\mathrm{e}^x$ e $y=\\ln x$ son simétricas respecto a la recta $y=x$. La tangente a la gráfica de $\\mathrm{e}^x$ en el punto $[0; 1]$ tiene pendiente $\\mathrm{e}^0=1$, y la tangente a la gráfica de $\\ln x$ en el punto $[1; 0]$ tiene pendiente $\\frac{1}{1}=1$."
    },
    "<p>La <strong>recta tangente</strong> a la gráfica de la función $f$ en el punto $[x_0; f(x_0)]$ tiene la ecuación $y=f(x_0)+f'(x_0)(x-x_0)$.</p>"
   ],
   "examples": [
    {
     "task": "Deriva $f(x)=x^2\\sin x$.",
     "steps": [
      "Se trata del producto $u=x^2$, $v=\\sin x$, donde $u'=2x$ y $v'=\\cos x$.",
      "<strong>$f'(x)=2x\\sin x+x^2\\cos x$</strong>"
     ]
    },
    {
     "task": "Para $f(x)=\\ln(x^2+1)$, calcula $f'(1)$ y escribe la ecuación de la recta tangente en el punto $x_0=1$.",
     "steps": [
      "Función compuesta: la exterior, $\\ln u$, tiene derivada $\\frac{1}{u}$; la interior, $u=x^2+1$, tiene derivada $2x$.",
      "$f'(x)=\\frac{2x}{x^2+1}$, es decir, $f'(1)=\\frac{2}{2}=1$.",
      "$f(1)=\\ln 2$; tangente: $y=\\ln 2+1\\cdot(x-1)$, es decir, $y=x-1+\\ln 2$."
     ]
    }
   ]
  },
  "s4-extremy": {
   "title": "Monotonía y extremos de una función",
   "summary": "Signo de la derivada, puntos críticos, extremos relativos y absolutos, problemas de optimización.",
   "theory": [
    "<p>Si $f'(x)&gt;0$ en el intervalo $I$, la función $f$ es <strong>creciente</strong> en él; si $f'(x)&lt;0$, es <strong>decreciente</strong>.\n       Los puntos en los que $f'(x)=0$ se llaman <strong>puntos críticos</strong> (estacionarios). Una función (derivable) solo puede tener un extremo relativo en un punto crítico.</p>",
    {
     "fig": "s4-extremy",
     "caption": "Gráfica de $f(x)=x^3-3x$, $f'(x)=3x^2-3=3(x-1)(x+1)$. Partes verdes: $f'&gt;0$; parte naranja: $f'&lt;0$. En el punto $-1$ hay un máximo relativo $2$, y en el punto $1$, un mínimo relativo $-2$."
    },
    "<p><strong>Cómo decidir si hay extremo:</strong> si $f'$ cambia de signo de $+$ a $-$, en el punto hay un <strong>máximo relativo</strong>; el cambio de $-$ a $+$ indica un <strong>mínimo relativo</strong>.\n       Igual de útil es la segunda derivada: $f'(x_0)=0$ y $f''(x_0)&lt;0$ indican un máximo, y $f''(x_0)&gt;0$, un mínimo.</p>",
    "<p><strong>Extremos absolutos en un intervalo cerrado</strong> $\\langle a; b\\rangle$: comparamos los valores en los puntos críticos que están en el intervalo y en los extremos $a$, $b$.\n       Así resolvemos también los <strong>problemas de optimización</strong>: expresamos la magnitud como función de una sola variable y buscamos su valor máximo o mínimo.</p>"
   ],
   "examples": [
    {
     "task": "Halla los extremos relativos de la función $f(x)=x^3-6x^2+9x+1$.",
     "steps": [
      "$f'(x)=3x^2-12x+9=3(x-1)(x-3)$; los puntos críticos son $1$ y $3$.",
      "En $(-\\infty; 1)$, $f'&gt;0$; en $(1; 3)$, $f'&lt;0$; en $(3; \\infty)$, $f'&gt;0$.",
      "En el punto $1$ hay un máximo relativo $f(1)=5$, y en el punto $3$, un mínimo relativo $f(3)=1$."
     ]
    },
    {
     "task": "Con un alambre de $40\\,\\text{cm}$ queremos doblar un rectángulo con la mayor área posible. ¿Qué dimensiones tiene?",
     "steps": [
      "Los lados son $x$ y $20-x$; el área, $S(x)=x(20-x)=20x-x^2$ para $x\\in(0; 20)$.",
      "$S'(x)=20-2x=0$ para $x=10$; $S''(x)=-2&lt;0$, se trata de un máximo.",
      "<strong>La mayor área la tiene el cuadrado de $10\\times 10\\,\\text{cm}$, $S=100\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "s4-priebeh": {
   "title": "Estudio de una función y su gráfica",
   "summary": "Dominio, paridad, asíntotas, extremos, convexidad y puntos de inflexión.",
   "theory": [
    "<p><strong>El estudio de una función</strong> se hace por pasos:</p>\n       <ol><li>dominio $D(f)$ y, en su caso, paridad ($f(-x)=f(x)$) o imparidad ($f(-x)=-f(x)$) y periodicidad,</li>\n       <li>puntos de corte de la gráfica con los ejes y signo de la función,</li>\n       <li>límites en los extremos de $D(f)$ y <strong>asíntotas</strong>,</li>\n       <li>$f'$: intervalos de monotonía y extremos relativos,</li>\n       <li>$f''$: intervalos en los que la función es <strong>convexa</strong> ($f''&gt;0$) o <strong>cóncava</strong> ($f''&lt;0$), y <strong>puntos de inflexión</strong>, en los que cambia la convexidad,</li>\n       <li>esbozo de la gráfica.</li></ol>",
    "<p><strong>Asíntotas:</strong> la recta $x=a$ es una asíntota vertical si $f(x)$ tiende a $\\pm\\infty$ cuando $x\\to a^+$ o $x\\to a^-$ (típicamente, un cero del denominador).\n       La recta $y=kx+q$ es una asíntota oblicua si $k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}$ y $q=\\lim_{x\\to\\pm\\infty}(f(x)-kx)$; para $k=0$ se trata de la asíntota horizontal $y=q$.\n       La función homográfica $f(x)=\\frac{ax+b}{cx+d}$ tiene las asíntotas $x=-\\frac{d}{c}$ e $y=\\frac{a}{c}$.</p>",
    {
     "fig": "s4-asymptoty",
     "caption": "Gráfica de $f(x)=\\frac{2x+1}{x-1}=2+\\frac{3}{x-1}$ con las asíntotas $x=1$ e $y=2$. Los puntos verdes son los puntos de corte con los ejes, $[-\\frac{1}{2}; 0]$ y $[0; -1]$. La función es decreciente en $(-\\infty; 1)$ y en $(1; \\infty)$."
    },
    "<p>Una función convexa está por encima de cada una de sus rectas tangentes (la gráfica «retiene el agua», cóncava hacia arriba); una cóncava, por debajo.\n       Un polinomio de tercer grado $ax^3+bx^2+cx+d$ tiene siempre exactamente un punto de inflexión, en $x=-\\frac{b}{3a}$.</p>"
   ],
   "examples": [
    {
     "task": "Halla el punto de inflexión de la función $f(x)=x^3-3x^2+4$ y determina dónde es convexa.",
     "steps": [
      "$f'(x)=3x^2-6x$, $f''(x)=6x-6$.",
      "$f''(x)=0$ para $x=1$; para $x&lt;1$, $f''&lt;0$; para $x&gt;1$, $f''&gt;0$.",
      "El punto de inflexión es $[1; f(1)]=[1; 2]$; la función es convexa en $(1; \\infty)$ y cóncava en $(-\\infty; 1)$."
     ]
    },
    {
     "task": "Estudia la paridad de la función $f(x)=\\frac{x}{x^2+1}$ y determina su asíntota horizontal.",
     "steps": [
      "$D(f)=\\mathbb{R}$ es simétrico respecto al cero y $f(-x)=\\frac{-x}{x^2+1}=-f(x)$: la función es impar (la gráfica es simétrica respecto al origen).",
      "El numerador tiene menor grado que el denominador, por lo que $\\lim_{x\\to\\pm\\infty}f(x)=0$.",
      "La asíntota horizontal es $y=0$ (el eje $x$)."
     ]
    }
   ]
  },
  "s4-plocha": {
   "title": "Área de un recinto y cambio de variable en la integral",
   "summary": "Área del recinto entre dos curvas, integrales de funciones elementales y cambio de variable lineal.",
   "theory": [
    "<p>Si en el intervalo $\\langle a; b\\rangle$ se cumple $f(x)\\le g(x)$, el área del recinto entre las gráficas es $S=\\int_a^b \\big(g(x)-f(x)\\big)\\,dx$: «la de arriba menos la de abajo».\n       Los límites $a$, $b$ suelen ser las abscisas de los puntos de intersección de las gráficas; los hallamos con la ecuación $f(x)=g(x)$.\n       Si la función está por debajo del eje $x$, su integral definida es negativa, y por eso el área es su valor absoluto.</p>",
    {
     "fig": "s4-medzi-krivkami",
     "caption": "La recta $y=2x$ y la parábola $y=x^2$ se cortan en los puntos $x=0$ y $x=2$. El área del recinto es $\\int_0^2 (2x-x^2)\\,dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=\\frac{4}{3}$."
    },
    "<p><strong>Integrales de funciones elementales:</strong> $\\int \\mathrm{e}^x\\,dx=\\mathrm{e}^x+c$, $\\int \\frac{1}{x}\\,dx=\\ln|x|+c$, $\\int \\sin x\\,dx=-\\cos x+c$, $\\int \\cos x\\,dx=\\sin x+c$.</p>",
    "<p><strong>Cambio de variable lineal:</strong> si $F$ es una primitiva de $f$, entonces $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)+c$.\n       Por ejemplo, $\\int (2x+1)^3\\,dx=\\frac{1}{2}\\cdot\\frac{(2x+1)^4}{4}+c$ o $\\int \\cos 3x\\,dx=\\frac{1}{3}\\sin 3x+c$. El resultado siempre se comprueba derivando.</p>"
   ],
   "examples": [
    {
     "task": "Calcula el área del recinto limitado por la parábola $y=4-x^2$ y el eje $x$.",
     "steps": [
      "Puntos de corte con el eje: $4-x^2=0$, es decir, $x=\\pm 2$. Entre ellos, la parábola está por encima del eje.",
      "$S=\\int_{-2}^{2}(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}=\\left(8-\\frac{8}{3}\\right)-\\left(-8+\\frac{8}{3}\\right)$.",
      "<strong>$S=16-\\frac{16}{3}=\\frac{32}{3}$</strong>"
     ]
    },
    {
     "task": "Calcula $\\int_0^{1} (2x+1)^2\\,dx$ mediante un cambio de variable.",
     "steps": [
      "Primitiva: $F(x)=\\frac{1}{2}\\cdot\\frac{(2x+1)^3}{3}=\\frac{(2x+1)^3}{6}$.",
      "$F(1)-F(0)=\\frac{27}{6}-\\frac{1}{6}=\\frac{26}{6}=\\frac{13}{3}$.",
      "Comprobación desarrollando: $\\int_0^1(4x^2+4x+1)\\,dx=\\frac{4}{3}+2+1=\\frac{13}{3}$ ✓"
     ]
    }
   ]
  },
  "s4-zlozene-inverzne": {
   "title": "Funciones compuestas e inversas",
   "summary": "Composición de funciones, función inyectiva, cálculo de la función inversa y simetría de las gráficas respecto a la recta y = x.",
   "theory": [
    "<p>La <strong>función compuesta</strong> $f\\circ g$ viene dada por $(f\\circ g)(x)=f(g(x))$: primero aplicamos $g$ (la función interior) y al resultado le aplicamos $f$ (la exterior).\n       El orden importa: en general, $f\\circ g\\neq g\\circ f$. Por ejemplo, para $f(x)=x^2$, $g(x)=x+1$, se tiene $f(g(x))=(x+1)^2$, pero $g(f(x))=x^2+1$.</p>",
    "<p>Una función es <strong>inyectiva</strong> si a valores distintos de $x$ les asigna valores distintos (cada recta horizontal corta la gráfica como mucho una vez). Solo una función inyectiva tiene\n       <strong>función inversa</strong> $f^{-1}$, para la que se cumple $f^{-1}(y)=x \\Leftrightarrow f(x)=y$. Además, $D(f^{-1})=H(f)$ y $H(f^{-1})=D(f)$.</p>",
    "<p><strong>Cálculo de</strong> $f^{-1}$: en la ecuación $y=f(x)$ intercambiamos $x$ e $y$ y despejamos $y$. Para $f(x)=2x-6$: $x=2y-6$, es decir, $f^{-1}(x)=\\frac{x+6}{2}$.\n       Las gráficas de $f$ y $f^{-1}$ son simétricas respecto a la recta $y=x$. También son inversas entre sí $a^x$ y $\\log_a x$; por eso, $a^{\\log_a x}=x$ y $\\log_a a^x=x$.</p>",
    {
     "fig": "s4-inverzna",
     "caption": "Gráfica de $y=a^x$ (azul) y gráfica de la función inversa $y=\\log_a x$ (verde). Cada punto $[u; v]$ de una gráfica tiene en la otra su imagen $[v; u]$."
    }
   ],
   "examples": [
    {
     "task": "Sean $f(x)=x^2-1$ y $g(x)=3x+2$. Calcula $(f\\circ g)(1)$ y $(g\\circ f)(1)$.",
     "steps": [
      "$(f\\circ g)(1)=f(g(1))=f(5)=25-1=24$.",
      "$(g\\circ f)(1)=g(f(1))=g(0)=2$.",
      "Los resultados son distintos: la composición de funciones no es conmutativa."
     ]
    },
    {
     "task": "Halla la función inversa de $f(x)=\\frac{x+1}{x-2}$, $x\\neq 2$.",
     "steps": [
      "Intercambiamos las variables: $x=\\frac{y+1}{y-2}$.",
      "$x(y-2)=y+1 \\Rightarrow xy-y=2x+1 \\Rightarrow y(x-1)=2x+1$.",
      "<strong>$f^{-1}(x)=\\frac{2x+1}{x-1}$, $x\\neq 1$</strong> (la función $f$ no toma el valor $1$)."
     ]
    }
   ]
  },
  "s4-exp-log-rovnice": {
   "title": "Ecuaciones exponenciales y logarítmicas",
   "summary": "Cambio de variable, ecuaciones con bases distintas, tomar logaritmos y condiciones de resolubilidad.",
   "theory": [
    "<p><strong>Tipos básicos de ecuaciones exponenciales:</strong></p>\n       <ul><li>misma base: $a^{f(x)}=a^{g(x)} \\Leftrightarrow f(x)=g(x)$ (para $a&gt;0$, $a\\neq 1$),</li>\n       <li><strong>cambio de variable</strong>: $4^x-6\\cdot 2^x+8=0$ se reescribe con $t=2^x&gt;0$ como $t^2-6t+8=0$,</li>\n       <li><strong>bases distintas</strong>: tomamos logaritmos en ambos miembros, por ejemplo, $3^x=5 \\Rightarrow x=\\frac{\\ln 5}{\\ln 3}$; la ecuación $c\\cdot a^x=d\\cdot b^x$ se transforma en $\\left(\\frac{a}{b}\\right)^x=\\frac{d}{c}$.</li></ul>",
    "<p><strong>Ecuaciones logarítmicas:</strong> primero determinamos las condiciones (el argumento del logaritmo debe ser positivo); después usamos las reglas\n       $\\log_a u+\\log_a v=\\log_a(uv)$, $\\log_a u-\\log_a v=\\log_a\\frac{u}{v}$, $k\\log_a u=\\log_a u^k$, y de la igualdad $\\log_a u=c$ obtenemos $u=a^c$.\n       Cada solución se comprueba sustituyendo o comparando con las condiciones: las transformaciones pueden generar raíces falsas.</p>",
    "<p>Una ecuación con la expresión $\\log_a x$ elevada a distintas potencias se resuelve con el cambio de variable $t=\\log_a x$: de $(\\log x)^2-3\\log x+2=0$ obtenemos $t\\in\\{1; 2\\}$, es decir, $x\\in\\{10; 100\\}$.\n       Cuidado: $(\\log x)^2$ no es lo mismo que $\\log x^2=2\\log x$.</p>"
   ],
   "examples": [
    {
     "task": "Resuelve la ecuación $9^x-4\\cdot 3^x+3=0$.",
     "steps": [
      "$9^x=(3^x)^2$; cambio de variable $t=3^x&gt;0$: $t^2-4t+3=0$, es decir, $t_1=1$, $t_2=3$.",
      "$3^x=1 \\Rightarrow x=0$; $3^x=3 \\Rightarrow x=1$.",
      "<strong>$K=\\{0; 1\\}$</strong>"
     ]
    },
    {
     "task": "Resuelve la ecuación $\\log_3(x+1)+\\log_3(x-1)=1$.",
     "steps": [
      "Condiciones: $x+1&gt;0$ y $x-1&gt;0$, es decir, $x&gt;1$.",
      "$\\log_3\\big((x+1)(x-1)\\big)=1 \\Rightarrow x^2-1=3 \\Rightarrow x=\\pm 2$.",
      "Solo $x=2$ cumple la condición; descartamos la raíz $-2$.",
      "<strong>$K=\\{2\\}$</strong>"
     ]
    }
   ]
  },
  "s4-gonio-rovnice": {
   "title": "Ecuaciones trigonométricas",
   "summary": "Ecuaciones de segundo grado en seno o coseno, uso de fórmulas y solución general.",
   "theory": [
    "<p><strong>Las ecuaciones básicas</strong> $\\sin x=a$, $\\cos x=a$ solo tienen solución para $a\\in\\langle -1; 1\\rangle$, y normalmente dos en cada periodo $2\\pi$.\n       Por ejemplo, $\\sin x=\\frac{1}{2}$ tiene en $\\langle 0; 2\\pi)$ las soluciones $\\frac{\\pi}{6}$ y $\\frac{5\\pi}{6}$; en general, $x=\\frac{\\pi}{6}+2k\\pi$ o $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.\n       La ecuación $\\mathrm{tg}\\,x=a$ tiene solución para todo $a$ y su periodo es $\\pi$: $x=x_0+k\\pi$.</p>",
    "<p><strong>Las ecuaciones de segundo grado</strong> en $\\sin x$ o $\\cos x$ se resuelven con un cambio de variable: $2\\sin^2 x-3\\sin x+1=0$ con $t=\\sin x$ da $2t^2-3t+1=0$, es decir, $t\\in\\{\\frac{1}{2}; 1\\}$.\n       Las raíces fuera de $\\langle -1; 1\\rangle$ se descartan.</p>",
    "<p><strong>Fórmulas útiles:</strong> $\\sin^2 x+\\cos^2 x=1$ (convierte la ecuación en una sola función), $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x=1-2\\sin^2 x$.\n       El factor común <strong>se saca fuera del paréntesis</strong>; nunca dividimos entre él: perderíamos las soluciones en las que se anula.</p>\n       <table class=\"tbl tbl-auto\"><tr><th>$x$</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th></tr>\n       <tr><td>$\\sin x$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$1$</td></tr>\n       <tr><td>$\\cos x$</td><td>$1$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr></table>"
   ],
   "examples": [
    {
     "task": "Resuelve la ecuación $2\\cos^2 x+3\\sin x-3=0$ para $x\\in\\langle 0; 2\\pi)$.",
     "steps": [
      "$\\cos^2 x=1-\\sin^2 x$: $2-2\\sin^2 x+3\\sin x-3=0$, es decir, $2\\sin^2 x-3\\sin x+1=0$.",
      "Cambio de variable $t=\\sin x$: $2t^2-3t+1=0$, $t_1=1$, $t_2=\\frac{1}{2}$.",
      "$\\sin x=1 \\Rightarrow x=\\frac{\\pi}{2}$; $\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}$ o $x=\\frac{5\\pi}{6}$.",
      "<strong>$K=\\left\\{\\frac{\\pi}{6}; \\frac{\\pi}{2}; \\frac{5\\pi}{6}\\right\\}$</strong>"
     ]
    },
    {
     "task": "Resuelve la ecuación $\\sin 2x=\\cos x$ en $\\mathbb{R}$.",
     "steps": [
      "$2\\sin x\\cos x-\\cos x=0 \\Rightarrow \\cos x\\,(2\\sin x-1)=0$.",
      "$\\cos x=0 \\Rightarrow x=\\frac{\\pi}{2}+k\\pi$.",
      "$\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}+2k\\pi$ o $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$."
     ]
    }
   ]
  },
  "s4-sustavy": {
   "title": "Sistemas de ecuaciones y de inecuaciones",
   "summary": "Sistemas no lineales, puntos de intersección de curvas y sistemas de inecuaciones con una y dos variables.",
   "theory": [
    "<p>Un <strong>sistema no lineal</strong> se resuelve casi siempre por el <strong>método de sustitución</strong>: de la ecuación más sencilla (la lineal) despejamos una incógnita y la sustituimos en la otra.\n       Las soluciones son pares ordenados $[x; y]$; su número coincide con el número de puntos de intersección de las gráficas de ambas ecuaciones. El sistema $x+y=s$, $xy=p$ conduce, por las fórmulas de Cardano-Vieta, a la ecuación $t^2-st+p=0$.</p>",
    "<p><strong>Sistema de inecuaciones con una incógnita:</strong> resolvemos cada inecuación por separado, y el resultado es la <strong>intersección</strong> de los conjuntos de soluciones.\n       Al multiplicar o dividir por un número negativo, el signo de la desigualdad cambia de sentido.</p>",
    "<p><strong>Un sistema de inecuaciones lineales con dos incógnitas</strong> describe una parte del plano: cada inecuación $y\\le kx+q$ es el semiplano situado por debajo de la recta $y=kx+q$ (incluida esta).\n       La solución del sistema es la intersección de los semiplanos, a menudo un polígono.</p>",
    {
     "fig": "s4-oblast",
     "caption": "El sistema $y\\ge 0$, $y\\le x+2$, $y\\le -x+4$ describe un triángulo de vértices $[-2; 0]$, $[4; 0]$ y $[1; 3]$. Su área es $\\frac{6\\cdot 3}{2}=9$."
    }
   ],
   "examples": [
    {
     "task": "Resuelve el sistema $x+y=7$, $x\\cdot y=10$.",
     "steps": [
      "De la primera ecuación, $y=7-x$; sustituimos: $x(7-x)=10 \\Rightarrow x^2-7x+10=0$.",
      "$x_1=2$, $x_2=5$, y les corresponden $y_1=5$, $y_2=2$.",
      "<strong>Soluciones: $[2; 5]$ y $[5; 2]$</strong>"
     ]
    },
    {
     "task": "Resuelve el sistema de inecuaciones $3x-2&gt;4$ y $5-x\\ge -1$ en $\\mathbb{R}$.",
     "steps": [
      "$3x&gt;6 \\Rightarrow x&gt;2$.",
      "$-x\\ge -6 \\Rightarrow x\\le 6$ (al dividir entre un número negativo cambia el sentido de la desigualdad).",
      "<strong>$K=(2; 6\\rangle$</strong>; los números enteros que contiene son $3, 4, 5, 6$."
     ]
    }
   ]
  },
  "s4-parametre": {
   "title": "Ecuaciones y sistemas con parámetro",
   "summary": "Discusión del número de soluciones según el parámetro, ecuaciones de segundo grado y sistemas con parámetro.",
   "theory": [
    "<p>Un <strong>parámetro</strong> es una letra que en la ecuación representa un número fijo, pero arbitrario. Resolvemos la ecuación para todos sus valores a la vez\n       y hacemos una <strong>discusión</strong>: para qué valores del parámetro la ecuación tiene una solución, varias o ninguna.\n       Por ejemplo, $px=3$ tiene para $p\\neq 0$ la única solución $x=\\frac{3}{p}$, y para $p=0$ no tiene solución.</p>",
    "<p><strong>La ecuación de segundo grado</strong> $ax^2+bx+c=0$ con $a\\neq 0$ tiene dos raíces reales distintas si $D&gt;0$, una doble si $D=0$ y ninguna real si $D&lt;0$.\n       Si se conoce una raíz, la sustituimos y obtenemos una ecuación para el parámetro; la otra raíz se calcula fácilmente con las fórmulas de Cardano-Vieta $x_1+x_2=-\\frac{b}{a}$, $x_1x_2=\\frac{c}{a}$.\n       Si el parámetro acompaña a $x^2$, el caso $a=0$ (la ecuación es lineal) hay que estudiarlo aparte.</p>",
    "<p><strong>Un sistema de dos ecuaciones lineales</strong> $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$ tiene exactamente una solución cuando $a_1b_2-a_2b_1\\neq 0$ (las rectas son secantes).\n       Si $a_1b_2-a_2b_1=0$, las rectas son paralelas: o bien distintas (ninguna solución), o bien coincidentes (infinitas soluciones).</p>"
   ],
   "examples": [
    {
     "task": "¿Para qué valores del parámetro $p$ tiene la ecuación $x^2-4x+p=0$ dos raíces reales distintas?",
     "steps": [
      "$D=16-4p$.",
      "$D&gt;0 \\Leftrightarrow 16-4p&gt;0 \\Leftrightarrow p&lt;4$.",
      "<strong>Para $p\\in(-\\infty; 4)$</strong>; para $p=4$ tiene la raíz doble $2$, y para $p&gt;4$ no tiene raíces reales."
     ]
    },
    {
     "task": "¿Para qué $m$ no tiene solución el sistema $mx+2y=4$, $2x+my=-4$?",
     "steps": [
      "El determinante $m\\cdot m-2\\cdot 2=m^2-4=0$ para $m=\\pm 2$; en otro caso, el sistema tiene una única solución.",
      "$m=2$: $2x+2y=4$ y $2x+2y=-4$ son rectas paralelas distintas: ninguna solución.",
      "$m=-2$: $-2x+2y=4$ y $2x-2y=-4$ son la misma recta: infinitas soluciones.",
      "<strong>El sistema no tiene solución para $m=2$.</strong>"
     ]
    }
   ]
  },
  "s4-priamka-kruznica": {
   "title": "Recta y circunferencia en geometría analítica",
   "summary": "Posición relativa de una recta y una circunferencia, puntos de intersección y recta tangente a la circunferencia.",
   "theory": [
    "<p>La circunferencia de centro $S[m; n]$ y radio $r$ tiene la ecuación $(x-m)^2+(y-n)^2=r^2$. Una recta del plano tiene la ecuación general $ax+by+c=0$,\n       donde $\\vec{n}=(a; b)$ es su vector normal. La distancia del punto $S[m; n]$ a la recta es $d=\\dfrac{|am+bn+c|}{\\sqrt{a^2+b^2}}$.</p>",
    "<p><strong>Posición relativa:</strong> si $d&lt;r$, la recta es <strong>secante</strong> (2 puntos comunes); si $d=r$, es <strong>tangente</strong> (1 punto); si $d&gt;r$, es <strong>exterior</strong>.\n       Lo mismo se averigua algebraicamente: sustituyendo la recta en la ecuación de la circunferencia obtenemos una ecuación de segundo grado cuyo discriminante decide el número de puntos de intersección.</p>",
    {
     "fig": "s4-priamka-kruznica",
     "caption": "La circunferencia $x^2+y^2=9$ y la recta $y=-0{,}75x+q$. Mueve $q$: la recta es tangente exactamente para $q=\\pm 3{,}75$, cuando la distancia al centro es igual al radio."
    },
    "<p>La <strong>recta tangente en el punto</strong> $T$ de la circunferencia es perpendicular al radio $ST$; por eso, el vector $\\vec{ST}$ es su vector normal.\n       Para la circunferencia $x^2+y^2=r^2$ y un punto suyo $T[x_0; y_0]$, la tangente tiene la ecuación $x_0x+y_0y=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Halla los puntos de intersección de la circunferencia $x^2+y^2=25$ y la recta $x-y+1=0$.",
     "steps": [
      "De la ecuación de la recta, $y=x+1$; sustituimos: $x^2+(x+1)^2=25 \\Rightarrow 2x^2+2x-24=0 \\Rightarrow x^2+x-12=0$.",
      "$x_1=3$, $x_2=-4$, y les corresponden $y_1=4$, $y_2=-3$.",
      "<strong>Puntos de intersección: $[3; 4]$ y $[-4; -3]$</strong>"
     ]
    },
    {
     "task": "Escribe la ecuación de la recta tangente a la circunferencia $(x-1)^2+(y+2)^2=25$ en el punto $T[4; 2]$.",
     "steps": [
      "Centro $S[1; -2]$; $\\vec{ST}=(3; 4)$ es el vector normal de la tangente: $3x+4y+c=0$.",
      "Sustituimos $T$: $12+8+c=0$, es decir, $c=-20$.",
      "<strong>Tangente: $3x+4y-20=0$</strong>"
     ]
    }
   ]
  },
  "s4-polohy": {
   "title": "Posición relativa de puntos, rectas y planos",
   "summary": "Rectas paralelas, secantes y que se cruzan, posición de una recta y un plano, de dos planos y su descripción analítica.",
   "theory": [
    "<p><strong>Dos rectas en el espacio</strong> son <strong>coincidentes</strong>, <strong>paralelas</strong> (están en un mismo plano y no tienen ningún punto común),\n       <strong>secantes</strong> (tienen exactamente un punto común) o <strong>se cruzan</strong>: no tienen ningún punto común y no están en un mismo plano.\n       En el plano no existen rectas que se crucen; en el espacio son habituales.</p>",
    {
     "fig": "s4-kocka",
     "caption": "Cubo $ABCDEFGH$. Las rectas $AB$ (azul) y $CG$ (verde) se cruzan, y también las rectas $AB$ y $EG$ (naranja). Las rectas $CG$ y $EG$ son secantes: se cortan en el punto $G$."
    },
    "<p><strong>Recta y plano:</strong> la recta o bien está contenida en el plano, o bien es paralela a él (no tienen ningún punto común), o bien es secante (un punto común, el punto de intersección).\n       Una recta es paralela a un plano si es paralela a alguna recta de ese plano. <strong>Dos planos</strong> son coincidentes, paralelos distintos o secantes; en este último caso se cortan en una recta.</p>",
    "<p><strong>Analíticamente:</strong> la recta tiene las ecuaciones paramétricas $X=A+t\\vec{u}$, $t\\in\\mathbb{R}$; el plano, la ecuación general $ax+by+cz+d=0$ con vector normal $\\vec{n}=(a; b; c)$.\n       Las rectas con vectores directores proporcionales son paralelas o coincidentes. Una recta es paralela al plano o está contenida en él si $\\vec{u}\\cdot\\vec{n}=0$.\n       Para los cálculos en un cubo de arista $1$ elegimos $A[0; 0; 0]$, $B[1; 0; 0]$, $D[0; 1; 0]$, $E[0; 0; 1]$.</p>"
   ],
   "examples": [
    {
     "task": "En el cubo $ABCDEFGH$, determina la posición relativa de las rectas $BG$ y $AH$.",
     "steps": [
      "$\\vec{BG}=G-B=(0; 1; 1)$ y $\\vec{AH}=H-A=(0; 1; 1)$: los vectores directores son iguales.",
      "El punto $A$ no está en la recta $BG$, así que las rectas no coinciden.",
      "<strong>Las rectas $BG$ y $AH$ son paralelas</strong> (están en el plano $ABGH$)."
     ]
    },
    {
     "task": "Decide si el punto $Q[5; 1; -2]$ está en la recta $p: X=[1; 3; 0]+t\\,(2; -1; -1)$.",
     "steps": [
      "De la primera coordenada: $1+2t=5$, es decir, $t=2$.",
      "Para $t=2$: $y=3-2=1$ ✓, $z=0-2=-2$ ✓.",
      "<strong>El punto $Q$ está en la recta</strong> (parámetro $t=2$)."
     ]
    }
   ]
  },
  "s4-uhly-vzdialenosti": {
   "title": "Ángulos y distancias en el espacio",
   "summary": "Distancia entre puntos, de un punto a una recta y a un plano, ángulo entre rectas y ángulo entre recta y plano, sobre todo en el cubo.",
   "theory": [
    "<p><strong>Distancias:</strong> la distancia entre dos puntos es $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2+(b_3-a_3)^2}$. La distancia de un punto a una recta es la longitud de la perpendicular a la recta;\n       la distancia del punto $P$ al plano $ax+by+cz+d=0$ es $\\dfrac{|ap_1+bp_2+cp_3+d|}{\\sqrt{a^2+b^2+c^2}}$.\n       En un cubo de arista $a$: diagonal de una cara $a\\sqrt2$, diagonal del cubo $a\\sqrt3$.</p>",
    "<p><strong>El ángulo entre dos rectas</strong> (incluso si se cruzan) es el ángulo de sus vectores directores, tomado en $\\langle 0^\\circ; 90^\\circ\\rangle$:\n       $\\cos\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}$. <strong>El ángulo entre una recta y un plano</strong> es el ángulo entre la recta y su proyección ortogonal sobre el plano;\n       con el vector normal $\\vec{n}$ se cumple $\\sin\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}$.</p>",
    {
     "fig": "s4-kocka-uhol",
     "caption": "El ángulo de la diagonal del cubo $AG$ con el plano de la base es el ángulo entre $AG$ y su proyección $AC$. Del triángulo rectángulo $ACG$: $\\mathrm{tg}\\,\\varphi=\\frac{a}{a\\sqrt2}$, es decir, $\\varphi\\approx 35{,}26^\\circ$."
    },
    "<p>El <strong>producto vectorial</strong> $\\vec{u}\\times\\vec{v}=(u_2v_3-u_3v_2;\\ u_3v_1-u_1v_3;\\ u_1v_2-u_2v_1)$ es perpendicular a ambos vectores y su módulo es el área del paralelogramo que determinan.\n       Por eso, la distancia del punto $P$ a la recta $X=Q+t\\vec{u}$ es $\\dfrac{|\\vec{QP}\\times\\vec{u}|}{|\\vec{u}|}$, y el vector normal del plano $QRS$ es $\\vec{QR}\\times\\vec{QS}$.</p>"
   ],
   "examples": [
    {
     "task": "El cubo $ABCDEFGH$ tiene arista $a=6\\,\\text{cm}$. Calcula la distancia del vértice $A$ al punto medio $K$ de la arista $GH$.",
     "steps": [
      "$A[0; 0; 0]$, $G[6; 6; 6]$, $H[0; 6; 6]$; por tanto, $K[3; 6; 6]$.",
      "$|AK|=\\sqrt{3^2+6^2+6^2}=\\sqrt{81}=9$.",
      "<strong>$|AK|=9\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Calcula la distancia del vértice $A$ al plano $BDE$ en un cubo de arista $a$.",
     "steps": [
      "$B[a; 0; 0]$, $D[0; a; 0]$, $E[0; 0; a]$ están en el plano $x+y+z-a=0$.",
      "$d=\\dfrac{|0+0+0-a|}{\\sqrt{1+1+1}}=\\dfrac{a}{\\sqrt3}=\\dfrac{a\\sqrt3}{3}$.",
      "Es un tercio de la diagonal del cubo $AG$."
     ]
    }
   ]
  },
  "s4-telesa": {
   "title": "Prisma, pirámide, cilindro, cono y esfera",
   "summary": "Propiedades de los cuerpos, triángulos rectángulos dentro de los cuerpos, área total y volumen, sección de la esfera.",
   "theory": [
    "<p>El <strong>prisma</strong> y el <strong>cilindro</strong> tienen dos bases iguales y paralelas: $V=S_p\\cdot v$, $S=2S_p+S_{pl}$. Cilindro: $V=\\pi r^2v$, $S=2\\pi r^2+2\\pi rv$.\n       La <strong>pirámide</strong> y el <strong>cono</strong> tienen una base y un vértice: $V=\\frac{1}{3}S_p\\cdot v$. Cono de generatriz $s$: $V=\\frac{1}{3}\\pi r^2 v$, $S=\\pi r^2+\\pi rs$, donde $s^2=r^2+v^2$.\n       <strong>Esfera</strong>: $V=\\frac{4}{3}\\pi r^3$, $S=4\\pi r^2$.</p>",
    {
     "fig": "s4-ihlan",
     "caption": "Pirámide cuadrangular regular: la altura $v$, la apotema $v_s$ y la mitad de la arista $\\frac{a}{2}$ forman un triángulo rectángulo: $v_s^2=v^2+\\left(\\frac{a}{2}\\right)^2$. Para la arista lateral $h$ se cumple $h^2=v_s^2+\\left(\\frac{a}{2}\\right)^2$."
    },
    "<p>Una <strong>pirámide cuadrangular regular</strong> de arista básica $a$ tiene $S=a^2+4\\cdot\\frac{a\\cdot v_s}{2}=a^2+2av_s$ y $V=\\frac{1}{3}a^2v$.\n       La clave de la mayoría de los problemas es elegir el triángulo rectángulo adecuado; por ejemplo, la altura, la mitad de la diagonal de la base y la arista lateral: $h^2=v^2+\\left(\\frac{a\\sqrt2}{2}\\right)^2$.</p>",
    "<p>La <strong>sección de una esfera</strong> por un plano a distancia $d$ del centro es un círculo de radio $\\rho=\\sqrt{r^2-d^2}$. Un <strong>prisma triangular regular</strong> tiene como base\n       un triángulo equilátero de área $\\frac{\\sqrt3}{4}a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Una pirámide cuadrangular regular tiene arista básica $a=10\\,\\text{cm}$ y altura $v=12\\,\\text{cm}$. Calcula su área total y su volumen.",
     "steps": [
      "Apotema: $v_s=\\sqrt{12^2+5^2}=\\sqrt{169}=13\\,\\text{cm}$.",
      "$S=a^2+2av_s=100+2\\cdot 10\\cdot 13=360\\,\\text{cm}^2$.",
      "$V=\\frac{1}{3}\\cdot 100\\cdot 12=400\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Una esfera de radio $r=10\\,\\text{cm}$ se corta con un plano a $6\\,\\text{cm}$ del centro. ¿Qué área tiene la sección?",
     "steps": [
      "$\\rho=\\sqrt{10^2-6^2}=\\sqrt{64}=8\\,\\text{cm}$.",
      "$S=\\pi\\rho^2=64\\pi\\approx 201{,}06\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "s4-povrch-objem": {
   "title": "Área y volumen de cuerpos más complejos",
   "summary": "Tronco de cono y de pirámide, cuerpos compuestos, semejanza de cuerpos y problemas prácticos.",
   "theory": [
    "<p><strong>Tronco de cono</strong> con radios de las bases $R$, $r$, altura $v$ y generatriz $s$: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$, superficie lateral $S_{pl}=\\pi s(R+r)$,\n       área total $S=\\pi R^2+\\pi r^2+\\pi s(R+r)$. La generatriz se obtiene de la sección axial, que es un trapecio: $s^2=v^2+(R-r)^2$.</p>",
    {
     "fig": "s4-zrezany",
     "caption": "El tronco de cono se obtiene cortando la parte superior de un cono con un plano paralelo a la base. La altura $v$, la diferencia de radios $R-r$ y la generatriz $s$ forman un triángulo rectángulo."
    },
    "<p>Un <strong>tronco de pirámide</strong> con bases de áreas $S_1$, $S_2$ y altura $v$ tiene volumen $V=\\frac{v}{3}\\left(S_1+\\sqrt{S_1S_2}+S_2\\right)$;\n       para uno cuadrangular regular de aristas $a_1$, $a_2$, $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.\n       Un <strong>cuerpo compuesto</strong> se divide en cuerpos conocidos y se suman los volúmenes (en las cavidades, se restan). Cuidado con el área: las superficies de contacto no forman parte del área total.</p>",
    "<p>Los <strong>cuerpos semejantes</strong> con razón de semejanza $k$ tienen las áreas en la razón $k^2$ y los volúmenes en la razón $k^3$. Si duplicamos todas las dimensiones,\n       el área se multiplica por 4 y el volumen por 8. Al fundir y remodelar un material, el volumen se conserva.</p>"
   ],
   "examples": [
    {
     "task": "Un cubo de fregar tiene forma de tronco de cono con radios $R=15\\,\\text{cm}$, $r=10\\,\\text{cm}$ y altura $v=30\\,\\text{cm}$. ¿Cuántos litros caben en él?",
     "steps": [
      "$V=\\frac{\\pi\\cdot 30}{3}(225+150+100)=10\\pi\\cdot 475=4750\\pi\\,\\text{cm}^3$.",
      "$V\\approx 14\\,923\\,\\text{cm}^3\\approx 14{,}9\\,\\ell$."
     ]
    },
    {
     "task": "Un silo tiene forma de cilindro de radio $3\\,\\text{m}$ y altura $8\\,\\text{m}$, coronado por una semiesfera del mismo radio. Calcula el volumen del silo.",
     "steps": [
      "Cilindro: $\\pi\\cdot 9\\cdot 8=72\\pi$.",
      "Semiesfera: $\\frac{1}{2}\\cdot\\frac{4}{3}\\pi\\cdot 27=18\\pi$.",
      "<strong>$V=90\\pi\\approx 282{,}74\\,\\text{m}^3$</strong>"
     ]
    }
   ]
  },
  "s4-statisticky-subor": {
   "title": "Población estadística, variables, tablas y gráficos",
   "summary": "Población y variable, frecuencia absoluta y relativa, tabla de frecuencias, gráficos y su lectura.",
   "theory": [
    "<p>Una <strong>población estadística</strong> es el conjunto de objetos estudiados (unidades estadísticas); su número $n$ es el <strong>tamaño</strong> de la población.\n       La propiedad observada es la <strong>variable estadística</strong>: <strong>cualitativa</strong> (expresada con palabras: color, marca, especialidad) o <strong>cuantitativa</strong> (numérica).\n       Una variable cuantitativa es <strong>discreta</strong> si solo toma valores aislados (número de hermanos), o <strong>continua</strong> si puede tomar cualquier valor de un intervalo (estatura, tiempo).</p>",
    "<p>La <strong>frecuencia absoluta</strong> $n_i$ de un valor es el número de unidades con ese valor; la <strong>frecuencia relativa</strong> es $f_i=\\frac{n_i}{n}$ (a menudo en porcentaje).\n       La suma de todas las $n_i$ es $n$, y la suma de las $f_i$ es $1$. Los datos se recogen en una <strong>tabla de frecuencias</strong>.</p>",
    {
     "fig": "s4-stlpcovy",
     "caption": "Diagrama de barras de las notas (en una escala de 1 a 5) de una clase de $28$ alumnos. Por ejemplo, la nota $2$ la tienen $9$ alumnos; la frecuencia relativa es $\\frac{9}{28}\\approx 32{,}1\\,\\%$."
    },
    "<p><strong>Gráficos:</strong> de barras (frecuencias de los valores), de sectores (el sector de un valor tiene ángulo central $f_i\\cdot 360^\\circ$), histograma (para una variable continua agrupada en intervalos)\n       y de líneas (evolución en el tiempo). Al <strong>interpretarlos</strong>, cuidado con un eje que no empieza en cero: las diferencias pequeñas parecen entonces enormes.</p>"
   ],
   "examples": [
    {
     "task": "En una tabla figura el medio de transporte para ir al instituto: autobús 12, coche 5, bicicleta 3, a pie 10. ¿Qué parte del diagrama de sectores (ángulo central) ocupa el autobús?",
     "steps": [
      "$n=12+5+3+10=30$.",
      "$f=\\frac{12}{30}=0{,}4=40\\,\\%$.",
      "Ángulo central: $0{,}4\\cdot 360^\\circ=144^\\circ$."
     ]
    },
    {
     "task": "A partir del diagrama de barras anterior, calcula la nota media de la clase.",
     "steps": [
      "$n=6+9+7+4+2=28$.",
      "Suma de las notas: $1\\cdot 6+2\\cdot 9+3\\cdot 7+4\\cdot 4+5\\cdot 2=6+18+21+16+10=71$.",
      "$\\bar{x}=\\frac{71}{28}\\approx 2{,}54$"
     ]
    }
   ]
  },
  "s4-charakteristiky": {
   "title": "Media, mediana, moda y varianza",
   "summary": "Medidas de posición y de dispersión: media, mediana, moda, cuartiles, varianza y desviación típica.",
   "theory": [
    "<p><strong>Medidas de posición:</strong> la media aritmética $\\bar{x}=\\frac{x_1+x_2+\\dots+x_n}{n}$ (a partir de una tabla, ponderada: $\\bar{x}=\\frac{\\sum n_ix_i}{n}$),\n       la <strong>mediana</strong>, el valor central de los datos ordenados (si $n$ es par, la media de los dos centrales), y la <strong>moda</strong>, el valor más frecuente.\n       A diferencia de la media, la mediana no se ve afectada por los valores extremos (por ejemplo, un sueldo muy alto).</p>",
    "<p><strong>Medidas de dispersión:</strong> el rango (recorrido) $R=x_{\\max}-x_{\\min}$, la <strong>varianza</strong> $s^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2$\n       (la media de los cuadrados de las desviaciones respecto a la media; también $s^2=\\overline{x^2}-\\bar{x}^2$) y la <strong>desviación típica</strong> $s=\\sqrt{s^2}$, que tiene la misma unidad que los datos.</p>",
    "<p><strong>Cuartiles:</strong> el primer cuartil $Q_1$ es la mediana de la mitad inferior de los datos, y el tercer cuartil $Q_3$, la mediana de la mitad superior.\n       Entre $Q_1$ y $Q_3$ está la mitad central de los datos; su diferencia $Q_3-Q_1$ es el rango intercuartílico. Los cinco números (mín., $Q_1$, mediana, $Q_3$, máx.) se representan en el diagrama de caja y bigotes.</p>",
    {
     "fig": "s4-krabica",
     "caption": "Diagrama de caja y bigotes de los datos $2, 4, 5, 5, 6, 7, 7, 8, 9, 10, 14$: mínimo $2$, $Q_1=5$, mediana $7$, $Q_3=9$, máximo $14$."
    }
   ],
   "examples": [
    {
     "task": "Calcula la media, la mediana y la moda de los datos $3, 8, 5, 3, 6, 9, 3, 7$.",
     "steps": [
      "Ordenamos: $3, 3, 3, 5, 6, 7, 8, 9$; $n=8$.",
      "$\\bar{x}=\\frac{44}{8}=5{,}5$.",
      "Mediana $=\\frac{5+6}{2}=5{,}5$, moda $=3$ (aparece tres veces)."
     ]
    },
    {
     "task": "Calcula la varianza y la desviación típica de los datos $4, 6, 7, 9, 9$.",
     "steps": [
      "$\\bar{x}=\\frac{35}{5}=7$. Desviaciones: $-3, -1, 0, 2, 2$.",
      "$s^2=\\frac{9+1+0+4+4}{5}=\\frac{18}{5}=3{,}6$.",
      "$s=\\sqrt{3{,}6}\\approx 1{,}90$."
     ]
    }
   ]
  },
  "s4-kombinatorika": {
   "title": "Problemas de combinatoria",
   "summary": "Variaciones, permutaciones y combinaciones sin repetición y con repetición en problemas típicos.",
   "theory": [
    "<p><strong>Principio del producto:</strong> si la primera cosa se elige de $m$ formas y, para cada una, la segunda de $n$ formas, hay $m\\cdot n$ pares.\n       El <strong>principio de la suma</strong> se usa cuando las posibilidades se excluyen entre sí. En los problemas más difíciles separamos casos (por ejemplo, según la última cifra) y los sumamos.</p>",
    "<table class=\"tbl\"><tr><th></th><th>sin repetición</th><th>con repetición</th></tr>\n       <tr><td>variaciones de $n$ elementos tomados de $k$ en $k$ (importa el orden)</td><td>$V_k(n)=\\frac{n!}{(n-k)!}$</td><td>$V'_k(n)=n^k$</td></tr>\n       <tr><td>permutaciones (ordenación de todos)</td><td>$P(n)=n!$</td><td>$P'(k_1,\\dots,k_m)=\\frac{n!}{k_1!\\cdots k_m!}$</td></tr>\n       <tr><td>combinaciones de $n$ elementos tomados de $k$ en $k$ (no importa el orden)</td><td>$C_k(n)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$</td><td>$C'_k(n)=\\binom{n+k-1}{k}$</td></tr></table>",
    "<p><strong>Cómo decidir:</strong> ¿importa el orden (un código, el reparto de cargos, un número)? Si es así, se trata de variaciones o permutaciones; si no (elegir un grupo, sacar bolas a la vez), de combinaciones.\n       En los números de varias cifras, la primera no puede ser cero. Útil: $\\binom{n}{k}=\\binom{n}{n-k}$, $\\binom{n}{2}=\\frac{n(n-1)}{2}$ (por ejemplo, el número de apretones de manos entre $n$ personas).</p>"
   ],
   "examples": [
    {
     "task": "¿Cuántos números de tres cifras distintas podemos formar con las cifras $0, 1, 2, 3, 4$?",
     "steps": [
      "En primer lugar no puede ir el cero: $4$ posibilidades.",
      "En segundo lugar, las $4$ cifras restantes (incluido el cero); en tercero, $3$.",
      "<strong>$4\\cdot 4\\cdot 3=48$ números</strong>"
     ]
    },
    {
     "task": "De 8 chicos y 6 chicas elegimos una comisión de cuatro miembros formada por 2 chicos y 2 chicas. ¿Cuántas posibilidades hay?",
     "steps": [
      "Los chicos se eligen de $\\binom{8}{2}=28$ formas, y las chicas, de $\\binom{6}{2}=15$ formas.",
      "Las elecciones son independientes; usamos el principio del producto.",
      "<strong>$28\\cdot 15=420$ posibilidades</strong>"
     ]
    }
   ]
  },
  "s4-pravdepodobnost": {
   "title": "Probabilidad y sucesos independientes",
   "summary": "Probabilidad clásica, suceso contrario, unión de sucesos y producto de probabilidades de sucesos independientes.",
   "theory": [
    "<p><strong>Definición clásica:</strong> si un experimento tiene $n$ resultados igualmente probables y el suceso $A$ ocurre en $m$ de ellos, $P(A)=\\frac{m}{n}$.\n       Se cumple $0\\le P(A)\\le 1$. Los números $m$ y $n$ se determinan a menudo con la combinatoria; por ejemplo, al sacar $k$ bolas a la vez, los resultados son las combinaciones $\\binom{n}{k}$.</p>",
    "<p><strong>Suceso contrario</strong> $A'$ (el suceso $A$ no ocurre): $P(A')=1-P(A)$. Sobre todo los problemas del tipo «al menos una vez» se resuelven mediante el suceso contrario «ninguna vez».\n       <strong>Unión</strong>: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$; para sucesos incompatibles (no pueden ocurrir a la vez), $P(A\\cap B)=0$.</p>",
    "<p>Los sucesos $A$ y $B$ son <strong>independientes</strong> si el resultado de uno no cambia la probabilidad del otro; entonces $P(A\\cap B)=P(A)\\cdot P(B)$.\n       Típicamente se trata de lanzamientos repetidos, disparos de distintos tiradores o extracciones con reemplazamiento. La probabilidad de que en $n$ experimentos independientes con probabilidad $p$ el suceso ocurra al menos una vez es $1-(1-p)^n$.</p>"
   ],
   "examples": [
    {
     "task": "En una urna hay bolas: 5 blancas y 3 negras. Sacamos dos a la vez. ¿Cuál es la probabilidad de que ambas sean blancas?",
     "steps": [
      "Pares posibles: $\\binom{8}{2}=28$; favorables: $\\binom{5}{2}=10$.",
      "$P=\\frac{10}{28}=\\frac{5}{14}\\approx 0{,}357$."
     ]
    },
    {
     "task": "Dos tiradores aciertan en la diana con probabilidades $0{,}8$ y $0{,}7$ (de forma independiente). ¿Cuál es la probabilidad de que la diana resulte alcanzada?",
     "steps": [
      "Suceso contrario: ambos fallan, $P=0{,}2\\cdot 0{,}3=0{,}06$.",
      "<strong>$P=1-0{,}06=0{,}94$</strong>"
     ]
    }
   ]
  },
  "s4-binomicke": {
   "title": "Distribución binomial",
   "summary": "Experimentos independientes repetidos, probabilidad de k éxitos, esperanza y varianza.",
   "theory": [
    "<p>Un experimento con dos resultados (éxito con probabilidad $p$, fracaso con $1-p$) se repite $n$ veces de forma independiente. La variable aleatoria $X$, el número de éxitos,\n       sigue una <strong>distribución binomial</strong> $X\\sim Bi(n; p)$ y $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$ para $k=0, 1, \\dots, n$.\n       El número combinatorio indica de cuántas formas pueden repartirse los experimentos con éxito entre los $n$ experimentos.</p>",
    "<p>La <strong>esperanza</strong> (número esperado de éxitos) es $E(X)=np$; la <strong>varianza</strong>, $D(X)=np(1-p)$, y la desviación típica, $\\sigma=\\sqrt{np(1-p)}$.\n       «Al menos un éxito» se calcula con el suceso contrario: $P(X\\ge 1)=1-(1-p)^n$; «como mucho $k$», como la suma $P(X=0)+\\dots+P(X=k)$.</p>",
    {
     "fig": "s4-binom",
     "caption": "Las barras muestran $P(X=k)$ para $Bi(n; p)$; la barra verde es el valor más probable. Para $n$ mayores, la forma se aproxima a la curva de campana de la <strong>distribución normal</strong> (naranja) con media $np$ y desviación típica $\\sqrt{np(1-p)}$."
    }
   ],
   "examples": [
    {
     "task": "Un alumno responde al azar un test de 5 preguntas, cada una con 4 opciones (una correcta). ¿Cuál es la probabilidad de que acierte exactamente 2 respuestas?",
     "steps": [
      "$X\\sim Bi(5; \\frac{1}{4})$.",
      "$P(X=2)=\\binom{5}{2}\\left(\\frac{1}{4}\\right)^2\\left(\\frac{3}{4}\\right)^3=10\\cdot\\frac{1}{16}\\cdot\\frac{27}{64}=\\frac{270}{1024}$.",
      "$P\\approx 0{,}2637$"
     ]
    },
    {
     "task": "Un producto es defectuoso con probabilidad $0{,}1$. ¿Cuántos productos defectuosos esperamos en un envío de 50 unidades y cuál es la varianza?",
     "steps": [
      "$E(X)=np=50\\cdot 0{,}1=5$ productos.",
      "$D(X)=np(1-p)=50\\cdot 0{,}1\\cdot 0{,}9=4{,}5$, $\\sigma\\approx 2{,}12$."
     ]
    }
   ]
  },
  "s4-mat-cisla": {
   "title": "Repaso para la PAU: números, expresiones y ecuaciones",
   "summary": "Problemas variados de números, operaciones con expresiones y ecuaciones de todos los cursos.",
   "theory": [
    "<p><strong>Lo que hay que saber sobre los números:</strong> $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$, divisibilidad (MCD, mcm, números primos), operaciones con conjuntos y $|A\\cup B|=|A|+|B|-|A\\cap B|$,\n         el valor absoluto como distancia en la recta, intervalos, potencias $a^{m}a^{n}=a^{m+n}$, $(a^m)^n=a^{mn}$, $a^{-n}=\\frac{1}{a^n}$, raíces $\\sqrt[n]{a}=a^{1/n}$ y racionalización de denominadores.</p>",
    "<p><strong>Expresiones:</strong> identidades $(a\\pm b)^2=a^2\\pm 2ab+b^2$, $a^2-b^2=(a-b)(a+b)$, $a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$, factorización sacando factor común y con las identidades,\n         simplificación de fracciones algebraicas, siempre con las <strong>condiciones</strong> (denominador $\\neq 0$).</p>",
    "<p><strong>Ecuaciones:</strong> lineales (transformaciones equivalentes), de segundo grado $x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ y fórmulas de Cardano-Vieta, ecuaciones con la incógnita en el denominador,\n         bajo una raíz (elevar a una potencia y <strong>comprobar</strong>), con valor absoluto (método de los puntos críticos), exponenciales y logarítmicas ($\\log_a x=c \\Leftrightarrow x=a^c$).</p>"
   ],
   "examples": [
    {
     "task": "Resuelve la ecuación $\\sqrt{x+7}=x+1$.",
     "steps": [
      "Condición: $x+1\\ge 0$. Elevamos al cuadrado: $x+7=x^2+2x+1 \\Rightarrow x^2+x-6=0$.",
      "$x_1=2$, $x_2=-3$.",
      "Comprobación: $\\sqrt9=3$ ✓; para $-3$, el segundo miembro es negativo ✗. <strong>$K=\\{2\\}$</strong>"
     ]
    },
    {
     "task": "Simplifica $\\dfrac{x^2-9}{x^2+3x}$ y determina las condiciones.",
     "steps": [
      "$\\dfrac{(x-3)(x+3)}{x(x+3)}$, condiciones $x\\neq 0$, $x\\neq -3$.",
      "<strong>$\\dfrac{x-3}{x}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-nerovnice": {
   "title": "Repaso para la PAU: inecuaciones y sistemas de ecuaciones",
   "summary": "Problemas variados de inecuaciones y de sistemas de ecuaciones e inecuaciones.",
   "theory": [
    "<p><strong>Inecuaciones:</strong> al multiplicar o dividir por un número negativo cambia el sentido de la desigualdad. Una inecuación de segundo grado se resuelve con las raíces y la forma de la parábola:\n         para $a&gt;0$, $ax^2+bx+c&lt;0$ entre las raíces. Las inecuaciones en forma de cociente y de producto se resuelven con el <strong>método de los puntos críticos</strong> (tabla de signos),\n         y las inecuaciones con valor absoluto, dividiendo en intervalos o mediante $|x-a|&lt;r \\Leftrightarrow a-r&lt;x&lt;a+r$.</p>",
    "<p><strong>Sistemas de ecuaciones:</strong> métodos de sustitución y de reducción; con tres incógnitas, eliminación sucesiva. Un sistema lineal de dos ecuaciones tiene una, ninguna o\n         infinitas soluciones (rectas secantes, paralelas, coincidentes). En los sistemas no lineales despejamos una incógnita de la ecuación lineal y la sustituimos.</p>",
    "<p><strong>Errores típicos:</strong> olvidar las condiciones, dividir entre una expresión con la incógnita (puede ser negativa o nula), combinar mal los resultados: en un sistema de inecuaciones hacemos la <strong>intersección</strong>; con «o», la unión.</p>"
   ],
   "examples": [
    {
     "task": "Resuelve la inecuación $\\dfrac{x-2}{x+1}\\le 0$.",
     "steps": [
      "Puntos críticos: $2$ (numerador) y $-1$ (denominador, excluido).",
      "Signos: en $(-\\infty; -1)$, $+$; en $(-1; 2)$, $-$; en $(2; \\infty)$, $+$.",
      "<strong>$K=(-1; 2\\rangle$</strong>"
     ]
    },
    {
     "task": "Resuelve el sistema $2x+3y=12$, $x-y=1$.",
     "steps": [
      "De la segunda ecuación, $x=y+1$; sustituimos: $2y+2+3y=12 \\Rightarrow y=2$.",
      "$x=3$. <strong>Solución $[3; 2]$</strong>"
     ]
    }
   ]
  },
  "s4-mat-funkcie": {
   "title": "Repaso para la PAU: funciones y sus gráficas",
   "summary": "Problemas variados sobre funciones lineales, cuadráticas, homográficas, exponenciales, logarítmicas y sus propiedades.",
   "theory": [
    "<p><strong>Propiedades de una función:</strong> dominio y recorrido, monotonía, paridad, acotación, extremos, inyectividad y función inversa (simetría respecto a $y=x$).</p>",
    "<p><strong>Resumen de funciones:</strong> lineal $y=kx+q$ ($k$, la pendiente; $q$, la ordenada en el origen); cuadrática $y=a(x-m)^2+n$ con vértice $V[m; n]$;\n         homográfica $y=\\frac{ax+b}{cx+d}$ (hipérbola con asíntotas); exponencial $y=a^x$ (creciente para $a&gt;1$, decreciente para $0&lt;a&lt;1$, $H=(0; \\infty)$)\n         y logarítmica $y=\\log_a x$ ($D=(0; \\infty)$, pasa por el punto $[1; 0]$); funciones trigonométricas de periodo $2\\pi$ (la tangente, $\\pi$).</p>",
    "<p><strong>Traslaciones de gráficas:</strong> $f(x-a)$ traslada la gráfica $a$ hacia la derecha; $f(x)+b$, $b$ hacia arriba; $-f(x)$ es la reflexión respecto al eje $x$; $|f(x)|$ refleja hacia arriba las partes negativas.</p>"
   ],
   "examples": [
    {
     "task": "Determina el vértice de la parábola $y=x^2-6x+5$ y el recorrido de la función.",
     "steps": [
      "Completamos el cuadrado: $y=(x-3)^2-4$.",
      "Vértice $V[3; -4]$; la parábola se abre hacia arriba.",
      "<strong>$H(f)=\\langle -4; \\infty)$</strong>"
     ]
    },
    {
     "task": "Determina el dominio de la función $f(x)=\\log_2(6-2x)$.",
     "steps": [
      "El argumento del logaritmo debe ser positivo: $6-2x&gt;0$.",
      "<strong>$x&lt;3$, es decir, $D(f)=(-\\infty; 3)$</strong>"
     ]
    }
   ]
  },
  "s4-mat-geometria": {
   "title": "Repaso para la PAU: geometría plana, del espacio y analítica",
   "summary": "Problemas variados de geometría en el plano, en el espacio y de geometría analítica.",
   "theory": [
    "<p><strong>Geometría plana:</strong> la suma de los ángulos de un triángulo es $180^\\circ$, teoremas de Pitágoras y de Euclides, semejanza de triángulos (criterios $LLL$, $LAL$, $AA$),\n         áreas ($S=\\frac{a\\cdot v_a}{2}=\\frac{1}{2}ab\\sin\\gamma$, fórmula de Herón), círculo ($S=\\pi r^2$, $o=2\\pi r$, sector $\\frac{\\alpha}{360^\\circ}\\pi r^2$), ángulo inscrito y ángulo central.</p>",
    "<p><strong>Geometría del espacio:</strong> volúmenes $V=S_pv$ (prisma, cilindro), $V=\\frac{1}{3}S_pv$ (pirámide, cono), $V=\\frac{4}{3}\\pi r^3$ (esfera); áreas; posición relativa de rectas y planos,\n         ángulos y distancias: siempre buscamos un triángulo rectángulo adecuado.</p>",
    "<p><strong>Geometría analítica:</strong> $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2}$, punto medio de un segmento, vectores y producto escalar ($\\vec u\\perp\\vec v \\Leftrightarrow \\vec u\\cdot\\vec v=0$),\n         ecuaciones de la recta (paramétricas, general $ax+by+c=0$, explícita $y=kx+q$), distancia de un punto a una recta, circunferencia $(x-m)^2+(y-n)^2=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Halla la ecuación general de la recta que pasa por los puntos $A[1; 2]$ y $B[4; -4]$.",
     "steps": [
      "Vector director $\\vec{AB}=(3; -6)\\sim(1; -2)$, vector normal $(2; 1)$.",
      "$2x+y+c=0$; sustituimos $A$: $2+2+c=0$, $c=-4$.",
      "<strong>$2x+y-4=0$</strong>"
     ]
    },
    {
     "task": "Un cilindro tiene un volumen de $72\\pi\\,\\text{cm}^3$ y una altura de $8\\,\\text{cm}$. ¿Cuál es el radio de la base?",
     "steps": [
      "$\\pi r^2\\cdot 8=72\\pi \\Rightarrow r^2=9$.",
      "<strong>$r=3\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-goniometria": {
   "title": "Repaso para la PAU: funciones trigonométricas y trigonometría",
   "summary": "Problemas variados de funciones y ecuaciones trigonométricas y de resolución de triángulos.",
   "theory": [
    "<p><strong>Funciones trigonométricas:</strong> radianes $180^\\circ=\\pi\\,\\text{rad}$, circunferencia unidad, signos en los cuadrantes, valores para $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$,\n         periodicidad, paridad ($\\cos$ par; $\\sin$ y $\\mathrm{tg}$ impares).</p>",
    "<p><strong>Fórmulas:</strong> $\\sin^2 x+\\cos^2 x=1$, $\\mathrm{tg}\\,x=\\frac{\\sin x}{\\cos x}$, $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x$,\n         $\\sin(\\pi-x)=\\sin x$, $\\cos(\\pi-x)=-\\cos x$. Ecuaciones trigonométricas: cambio de variable, sacar factor común, solución general con $k\\in\\mathbb{Z}$.</p>",
    "<p><strong>Trigonometría:</strong> en el triángulo rectángulo, las definiciones de $\\sin$, $\\cos$, $\\mathrm{tg}$; en un triángulo cualquiera, el <strong>teorema del seno</strong>\n         $\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2r$ y el <strong>teorema del coseno</strong> $c^2=a^2+b^2-2ab\\cos\\gamma$.</p>"
   ],
   "examples": [
    {
     "task": "Un triángulo tiene lados $a=5$, $b=8$ y ángulo $\\gamma=60^\\circ$. Calcula el lado $c$.",
     "steps": [
      "Teorema del coseno: $c^2=25+64-2\\cdot 5\\cdot 8\\cdot\\frac{1}{2}=49$.",
      "<strong>$c=7$</strong>"
     ]
    },
    {
     "task": "Si $\\cos x=-\\frac{3}{5}$ y $x\\in(\\frac{\\pi}{2}; \\pi)$, calcula $\\sin x$ y $\\mathrm{tg}\\,x$.",
     "steps": [
      "$\\sin^2 x=1-\\frac{9}{25}=\\frac{16}{25}$; en el cuadrante II el seno es positivo: $\\sin x=\\frac{4}{5}$.",
      "$\\mathrm{tg}\\,x=\\frac{4/5}{-3/5}=-\\frac{4}{3}$."
     ]
    }
   ]
  },
  "s4-mat-postupnosti": {
   "title": "Repaso para la PAU: sucesiones, combinatoria y probabilidad",
   "summary": "Problemas variados de sucesiones, matemática financiera, combinatoria, probabilidad y estadística.",
   "theory": [
    "<p><strong>Sucesiones:</strong> aritmética $a_n=a_1+(n-1)d$, $s_n=\\frac{n}{2}(a_1+a_n)$; geométrica $a_n=a_1q^{n-1}$, $s_n=a_1\\frac{q^n-1}{q-1}$ ($q\\neq 1$);\n         serie geométrica infinita $s=\\frac{a_1}{1-q}$ para $|q|&lt;1$.</p>",
    "<p><strong>Matemática financiera:</strong> interés compuesto $K_n=K_0\\left(1+\\frac{p}{100}\\right)^n$ (con el impuesto sobre los intereses, el tipo de interés efectivo baja), ahorro periódico y amortización como suma de una progresión geométrica,\n         porcentajes y tantos por mil.</p>",
    "<p><strong>Combinatoria y probabilidad:</strong> variaciones, permutaciones, combinaciones (también con repetición), $P(A)=\\frac{m}{n}$, suceso contrario, sucesos independientes, distribución binomial.\n         <strong>Estadística:</strong> media, mediana, moda, varianza, desviación típica, lectura de tablas y gráficos.</p>"
   ],
   "examples": [
    {
     "task": "Un depósito de $2\\,000\\,€$ genera un interés del $3\\,\\%$ anual (interés compuesto). ¿Cuánto habrá en la cuenta al cabo de 5 años?",
     "steps": [
      "$K_5=2000\\cdot 1{,}03^5$.",
      "$1{,}03^5\\approx 1{,}159274$.",
      "<strong>$K_5\\approx 2\\,318{,}55\\,€$</strong>"
     ]
    },
    {
     "task": "En una progresión aritmética, $a_3=7$ y $a_7=19$. Calcula $a_1$ y la suma de los 10 primeros términos.",
     "steps": [
      "$a_7-a_3=4d=12 \\Rightarrow d=3$, $a_1=a_3-2d=1$.",
      "$a_{10}=1+9\\cdot 3=28$, $s_{10}=\\frac{10}{2}(1+28)=145$."
     ]
    }
   ]
  },
  "s4-mat-komplex": {
   "title": "Repaso para la PAU: problemas tipo y ejercicios completos",
   "summary": "Problemas de varios pasos que combinan varios temas: optimización, finanzas, sucesiones, geometría analítica, probabilidad y derivadas.",
   "theory": [
    "<p><strong>Cómo abordar un problema completo:</strong></p>\n       <ol><li>Lee el enunciado dos veces y anota qué datos se dan y qué se busca (también con las unidades).</li>\n       <li>Haz un esbozo o una tabla; ponles nombre a las incógnitas.</li>\n       <li>Divide el problema en pasos más pequeños: a menudo es una cadena de procedimientos conocidos (por ejemplo, «plantear la función → derivar → hallar el máximo»).</li>\n       <li>Comprueba el resultado: sustituyendo, estimando el orden de magnitud, revisando las condiciones (longitud positiva, probabilidad en $\\langle 0; 1\\rangle$).</li></ol>",
    "<p><strong>Combinaciones frecuentes de temas:</strong> optimización (geometría + derivadas), interés y ahorro (porcentajes + progresión geométrica + logaritmos),\n       triángulo en coordenadas (vectores + área + distancia), elección de un grupo y probabilidad (combinaciones + suceso contrario), tangente a una gráfica (derivada + ecuación de la recta).</p>",
    "<p><strong>Fórmulas útiles adicionales:</strong> área del triángulo $ABC$ en coordenadas $S=\\frac{1}{2}\\left|(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)\\right|$,\n       tangente $y=f(x_0)+f'(x_0)(x-x_0)$, número de años en la capitalización $n=\\frac{\\ln(K_n/K_0)}{\\ln(1+p/100)}$.</p>"
   ],
   "examples": [
    {
     "task": "De una chapa cuadrada de $30\\,\\text{cm}$ de lado recortamos en las esquinas cuadrados iguales y doblamos una caja abierta. ¿Cuál es el mayor volumen que puede tener?",
     "steps": [
      "Si el lado del cuadrado recortado es $x$: $V(x)=x(30-2x)^2$, $x\\in(0; 15)$.",
      "$V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)=0 \\Rightarrow x=5$ (el valor $15$ no pertenece al intervalo).",
      "<strong>$V(5)=5\\cdot 20^2=2\\,000\\,\\text{cm}^3$</strong>"
     ]
    },
    {
     "task": "¿En cuántos años se duplica por primera vez un depósito con un interés anual del $4\\,\\%$?",
     "steps": [
      "Buscamos el menor $n$ tal que $1{,}04^n\\ge 2$.",
      "$n\\ge\\frac{\\ln 2}{\\ln 1{,}04}\\approx 17{,}67$.",
      "<strong>Al cabo de 18 años.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(-\\infty; {@0}\\rangle$ a $\\langle {@1}; \\infty)$": "$(-\\infty; {@0}\\rangle$ y $\\langle {@1}; \\infty)$",
  "$(-x)^2\\sin(-x)=-x^2\\sin x$, teda $f(-x)=-f(x)$.": "$(-x)^2\\sin(-x)=-x^2\\sin x$, es decir, $f(-x)=-f(x)$.",
  "$(f\\circ g)({@0})=f(g({@1}))$. Najprv $g({@2})={@3}\\cdot {@4}{@5}={@6}$, potom $f({@7})={@8}{@9}^2{@10}={@11}$.": "$(f\\circ g)({@0})=f(g({@1}))$. Primero $g({@2})={@3}\\cdot {@4}{@5}={@6}$, después $f({@7})={@8}{@9}^2{@10}={@11}$.",
  "$(g\\circ f)({@0})=g(f({@1}))$. Najprv $f({@2})={@3}{@4}^2{@5}={@6}$, potom $g({@7})={@8}\\cdot {@9}{@10}={@11}$.": "$(g\\circ f)({@0})=g(f({@1}))$. Primero $f({@2})={@3}{@4}^2{@5}={@6}$, después $g({@7})={@8}\\cdot {@9}{@10}={@11}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ pre $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ para $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ para $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ pre $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ para $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ para $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, teda $k={@5}$.": "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, es decir, $k={@5}$.",
  "$D={@0}-4c=0 \\Rightarrow c={@1}$. Rovnica je potom $({@2})^2=0$ s dvojnásobným koreňom ${@3}$.": "$D={@0}-4c=0 \\Rightarrow c={@1}$. La ecuación es entonces $({@2})^2=0$, con la raíz doble ${@3}$.",
  "$D={@0}-4p$. Podmienka {@1} dáva {@2}.": "$D={@0}-4p$. La condición {@1} da {@2}.",
  "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.": "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.",
  "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.": "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.",
  "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (prvý trafí a druhý nie, alebo naopak).": "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (el primero acierta y el segundo no, o al revés).",
  "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.": "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.",
  "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.": "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.",
  "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.": "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.",
  "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Odchýlky od priemeru: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.": "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Desviaciones respecto a la media: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.",
  "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.": "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.",
  "$\\cos x=\\frac{1}{2}$; v jednej perióde má riešenia $\\frac{\\pi}{3}$ a $-\\frac{\\pi}{3}$, perióda kosínusu je $2\\pi$.": "$\\cos x=\\frac{1}{2}$; en un período tiene las soluciones $\\frac{\\pi}{3}$ y $-\\frac{\\pi}{3}$; el período del coseno es $2\\pi$.",
  "$\\cos(-x)=\\cos x$ a $(-x)^2=x^2$, teda $f(-x)=f(x)$.": "$\\cos(-x)=\\cos x$ y $(-x)^2=x^2$, es decir, $f(-x)=f(x)$.",
  "$\\mathrm{tg}\\,x=1$ alebo $\\mathrm{tg}\\,x=-1$, teda $x=\\frac{\\pi}{4}+k\\pi$ alebo $x=-\\frac{\\pi}{4}+k\\pi$. Spolu sú to body vzdialené o $\\frac{\\pi}{2}$.": "$\\mathrm{tg}\\,x=1$ o $\\mathrm{tg}\\,x=-1$, es decir, $x=\\frac{\\pi}{4}+k\\pi$ o $x=-\\frac{\\pi}{4}+k\\pi$. En conjunto son puntos separados $\\frac{\\pi}{2}$.",
  "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, čo platí pre $\\frac{\\pi}{6}$; perióda tangensu je $\\pi$.": "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, lo que se cumple para $\\frac{\\pi}{6}$; el período de la tangente es $\\pi$.",
  "$\\sin x=\\frac{\\sqrt2}{2}$; sínus je kladný v I. a II. kvadrante, teda $\\frac{\\pi}{4}$ a $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, perióda $2\\pi$.": "$\\sin x=\\frac{\\sqrt2}{2}$; el seno es positivo en los cuadrantes I y II, es decir, $\\frac{\\pi}{4}$ y $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, con período $2\\pi$.",
  "$\\sin x=\\pm\\frac{1}{2}$; riešenia $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ sa opakujú s periódou $\\pi$ ako $\\pm\\frac{\\pi}{6}+k\\pi$.": "$\\sin x=\\pm\\frac{1}{2}$; las soluciones $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ se repiten con período $\\pi$ como $\\pm\\frac{\\pi}{6}+k\\pi$.",
  "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, z $S=\\frac{|AB|\\cdot v_c}{2}$ je $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.": "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$; de $S=\\frac{|AB|\\cdot v_c}{2}$ se obtiene $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.",
  "$f''(x)={@0}$. Nerovnica $f''(x)&gt;0$ dáva ${@1}$, funkcia je konvexná na {@2}.": "$f''(x)={@0}$. La inecuación $f''(x)&gt;0$ da ${@1}$; la función es convexa en {@2}.",
  "$f'(x)={@0}$ má korene ${@1}$ a ${@2}$. {@3} Porovnáme hodnoty: {@4}. {@5} z nich je ${@6}$.": "$f'(x)={@0}$ tiene las raíces ${@1}$ y ${@2}$. {@3} Comparamos los valores: {@4}. {@5} de ellos es ${@6}$.",
  "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ pre $x={@2}$ a druhá derivácia tam mení znamienko. $f({@3})={@4}$, inflexný bod je $[{@5}; {@6}]$.": "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ para $x={@2}$ y la segunda derivada cambia allí de signo. $f({@3})={@4}$; el punto de inflexión es $[{@5}; {@6}]$.",
  "$f'(x)={@0}$.": "$f'(x)={@0}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$, stacionárne body sú ${@4}$ a ${@5}$. Derivácia má znamienka {@6} na intervaloch $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} je preto v bode $x={@12}$ a $f({@13})={@14}$.": "$f'(x)={@0}={@1}{@2}{@3}$; los puntos estacionarios son ${@4}$ y ${@5}$. La derivada tiene los signos {@6} en los intervalos $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. Por eso el {@11} está en el punto $x={@12}$ y $f({@13})={@14}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$. Derivácia je {@4} medzi koreňmi ${@5}$ a ${@6}$ a {@7} mimo nich. Funkcia je {@8} na {@9}.": "$f'(x)={@0}={@1}{@2}{@3}$. La derivada es {@4} entre las raíces ${@5}$ y ${@6}$ y {@7} fuera de ellas. La función es {@8} en {@9}.",
  "$f'(x)={@0}\\cos {@1}x{@2}$. Keďže $\\cos 0=1$ a $\\mathrm{e}^0=1$, je $f'(0)={@3}{@4}={@5}$.": "$f'(x)={@0}\\cos {@1}x{@2}$. Como $\\cos 0=1$ y $\\mathrm{e}^0=1$, es $f'(0)={@3}{@4}={@5}$.",
  "$f'(x)={@0}\\sin {@1}x{@2}$. Keďže $\\sin 0=0$ a $\\mathrm{e}^0=1$, je $f'(0)=0{@3}={@4}$.": "$f'(x)={@0}\\sin {@1}x{@2}$. Como $\\sin 0=0$ y $\\mathrm{e}^0=1$, es $f'(0)=0{@3}={@4}$.",
  "$f(-1)=\\mathrm{e}^{-1}$ sa nerovná $f(1)=\\mathrm{e}$ ani $-\\mathrm{e}$.": "$f(-1)=\\mathrm{e}^{-1}$ no es igual a $f(1)=\\mathrm{e}$ ni a $-\\mathrm{e}$.",
  "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, párne mocniny zmenu znamienka „pohltia“.": "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$; las potencias pares «absorben» el cambio de signo.",
  "$f(-x)=-\\sin x+\\cos x$, čo nie je $f(x)$ ani $-f(x)$.": "$f(-x)=-\\sin x+\\cos x$, que no es $f(x)$ ni $-f(x)$.",
  "$f(-x)=-x^3+{@0}x=-f(x)$, výraz obsahuje len nepárne mocniny.": "$f(-x)=-x^3+{@0}x=-f(x)$; la expresión contiene solo potencias impares.",
  "$f(1)={@0}$ a $f(-1)={@1}$; neplatí ani jedna z rovností $f(-1)=f(1)$, $f(-1)=-f(1)$.": "$f(1)={@0}$ y $f(-1)={@1}$; no se cumple ninguna de las igualdades $f(-1)=f(1)$, $f(-1)=-f(1)$.",
  "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Dotyčnica: $y={@5}+{@6}(x-{@7})$, teda $y={@8}$.": "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Tangente: $y={@5}+{@6}(x-{@7})$, es decir, $y={@8}$.",
  "$f^{-1}({@0})$ je číslo $x$, pre ktoré $f(x)={@1}$. Riešime $\\dfrac{{@2}}{{@3}}={@4}$: po vynásobení menovateľmi dostaneme lineárnu rovnicu s riešením $x={@5}$. Skúška: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓": "$f^{-1}({@0})$ es el número $x$ para el que $f(x)={@1}$. Resolvemos $\\dfrac{{@2}}{{@3}}={@4}$: después de multiplicar por los denominadores obtenemos una ecuación lineal con solución $x={@5}$. Comprobación: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓",
  "$n={@0}$ je {@1} v usporiadanom súbore. Kumulované počty: {@2}. Medián je ${@3}$.": "$n={@0}$ es {@1} en el conjunto ordenado. Frecuencias acumuladas: {@2}. La mediana es ${@3}$.",
  "$n={@0}={@1}$. Vážený aritmetický priemer: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.": "$n={@0}={@1}$. Media aritmética ponderada: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.",
  "${@0} x={@1}$ pre $x\\in\\{{@2}\\}$": "${@0} x={@1}$ para $x\\in\\{{@2}\\}$",
  "${@0}^{x}=({@1}^{x})^2$, substitúcia $t={@2}^{x}$, pričom $t&gt;0$: ${@3}=0$, korene $t_1={@4}$, $t_2={@5}$. {@6}Z ${@7}^{x}={@8}$ je $x={@9}${@10}. $K=\\{{@11}\\}$.": "${@0}^{x}=({@1}^{x})^2$, sustitución $t={@2}^{x}$, donde $t&gt;0$: ${@3}=0$, raíces $t_1={@4}$, $t_2={@5}$. {@6}De ${@7}^{x}={@8}$ es $x={@9}${@10}. $K=\\{{@11}\\}$.",
  "(Výsledok zadaj ako zlomok alebo desatinné číslo zaokrúhlené na 3 desatinné miesta.)": "(Escribe el resultado como fracción o como número decimal redondeado a 3 decimales.)",
  "(otočíme znak)": "(invertimos el signo)",
  ", obsah $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$": ", área $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$",
  ", prepona má ${@0}\\,\\text{cm}$": ", la hipotenusa mide ${@0}\\,\\text{cm}$",
  ", z ${@0}^{x}={@1}$ je $x={@2}$": "; de ${@0}^{x}={@1}$ es $x={@2}$",
  "0 alebo 5": "0 o 5",
  "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · body [1; {@2}] a [{@3}; 1] sú súmerné podľa y = x": "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · los puntos [1; {@2}] y [{@3}; 1] son simétricos respecto a y = x",
  "<span class=\"c-ok\">f′ &gt; 0, funkcia rastie</span>": "<span class=\"c-ok\">f′ &gt; 0, la función crece</span>",
  "<span class=\"muted small\">Téma: {@0}</span><br>{@1}": "<span class=\"muted small\">Tema: {@0}</span><br>{@1}",
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
  "ANALÝZA": "ANALÝZA",
  "ANANÁS": "ANANÁS",
  "Ak po dosadení vyjde $\\frac{0}{0}$, rozlož čitateľa na súčin. Jeden z činiteľov sa vykráti s menovateľom.": "Si al sustituir sale $\\frac{0}{0}$, factoriza el numerador. Uno de los factores se simplifica con el denominador.",
  "Aká dlhá je potom strana rovnobežná so stenou (v metroch)?": "¿Cuánto mide entonces el lado paralelo a la pared (en metros)?",
  "Aká dlhá je prepona v cm?": "¿Cuánto mide la hipotenusa en cm?",
  "Aká dlhá je základňa trojuholníka na osi $x$?": "¿Cuánto mide la base del triángulo sobre el eje $x$?",
  "Aká dlhá musí byť strana rovnobežná so stenou, aby bol obsah najväčší (v metroch)?": "¿Cuánto tiene que medir el lado paralelo a la pared para que el área sea máxima (en metros)?",
  "Aká je $y$-ová súradnica bodu s $x={@0}$?": "¿Cuál es la coordenada $y$ del punto con $x={@0}$?",
  "Aká je pravdepodobnosť, že obaja minú?": "¿Cuál es la probabilidad de que los dos fallen?",
  "Aká je pravdepodobnosť, že prvý minie a druhý zasiahne?": "¿Cuál es la probabilidad de que el primero falle y el segundo acierte?",
  "Aká je pravdepodobnosť, že prvý zasiahne a druhý minie?": "¿Cuál es la probabilidad de que el primero acierte y el segundo falle?",
  "Aká je pravdepodobnosť, že terč zasiahne aspoň jeden?": "¿Cuál es la probabilidad de que al menos uno acierte en el blanco?",
  "Aká je pravdepodobnosť, že terč zasiahne práve jeden?": "¿Cuál es la probabilidad de que exactamente uno acierte en el blanco?",
  "Aká je pravdepodobnosť, že vo výbere bude aspoň jedno dievča? {@0}": "¿Cuál es la probabilidad de que en la selección haya al menos una chica? {@0}",
  "Aká je pravdepodobnosť, že šestka nepadne ani raz? Výsledok zaokrúhli na 4 desatinné miesta.": "¿Cuál es la probabilidad de que no salga ningún seis? Redondea el resultado a 4 decimales.",
  "Aká je pravdepodobnosť, že šestka padne aspoň raz? Výsledok zaokrúhli na 3 desatinné miesta.": "¿Cuál es la probabilidad de que salga al menos un seis? Redondea el resultado a 3 decimales.",
  "Aká je pravdepodobnosť? {@0}": "¿Cuál es la probabilidad? {@0}",
  "Aká je teda hodnota limity? Zadaj ju ako zlomok.": "¿Cuál es entonces el valor del límite? Escríbelo como fracción.",
  "Aká je výška trojuholníka (y-ová súradnica priesečníka oboch priamok)?": "¿Cuál es la altura del triángulo (la coordenada $y$ del punto de intersección de ambas rectas)?",
  "Aké je najmenšie celé číslo v prieniku?": "¿Cuál es el menor número entero de la intersección?",
  "Aké je najmenšie celé číslo, ktoré ju spĺňa?": "¿Cuál es el menor número entero que la cumple?",
  "Aké sú súradnice bodu $K$ (v cm)? Zadaj $x$; $y$; $z$.": "¿Cuáles son las coordenadas del punto $K$ (en cm)? Introduce $x$; $y$; $z$.",
  "Akú dĺžku (v cm) musí mať strana odstrihnutých štvorcov, aby mala krabica najväčší objem?": "¿Cuánto (en cm) tiene que medir el lado de los cuadrados recortados para que la caja tenga el volumen máximo?",
  "Akú hodnotu má derivácia člena ${@0}$ v bode $0$?": "¿Qué valor tiene la derivada del término ${@0}$ en el punto $0$?",
  "Akú hodnotu má menovateľ derivácie $({@0})^2$ v bode ${@1}$?": "¿Qué valor tiene el denominador de la derivada $({@0})^2$ en el punto ${@1}$?",
  "Akú hodnotu má vnútorná funkcia ${@0}$ v bode ${@1}$?": "¿Qué valor tiene la función interior ${@0}$ en el punto ${@1}$?",
  "Akú hodnotu má člen $uv'$ v bode $0$?": "¿Qué valor tiene el término $uv'$ en el punto $0$?",
  "Aký je absolútny člen $q$?": "¿Cuál es el término independiente $q$?",
  "Aký je najväčší objem krabice v $\\text{cm}^3$?": "¿Cuál es el volumen máximo de la caja en $\\text{cm}^3$?",
  "Aký je najväčší obsah pozemku (v $\\text{m}^2$)?": "¿Cuál es el área máxima del terreno (en $\\text{m}^2$)?",
  "Aký je obsah oblasti?": "¿Cuál es el área de la región?",
  "Aký je obsah útvaru? Zadaj zlomok alebo celé číslo.": "¿Cuál es el área de la figura? Escribe una fracción o un número entero.",
  "Aký je parameter $p$?": "¿Cuál es el parámetro $p$?",
  "Aký je rozsah súboru $n$ (počet všetkých žiakov)?": "¿Cuál es el tamaño del conjunto $n$ (número total de alumnos)?",
  "Aký je stredový uhol výseče v stupňoch?": "¿Cuál es el ángulo central del sector en grados?",
  "Aký je súčet vekov po príchode nového člena?": "¿Cuál es la suma de las edades después de la llegada del nuevo miembro?",
  "Aký je súčet vekov pôvodných členov?": "¿Cuál es la suma de las edades de los miembros originales?",
  "Aký je súčet známok všetkých žiakov?": "¿Cuál es la suma de las notas de todos los alumnos?",
  "Aký je súčin faktoriálov počtov opakujúcich sa písmen?": "¿Cuál es el producto de los factoriales de los números de letras repetidas?",
  "Aký je teda exponent ${@0}$?": "¿Cuál es entonces el exponente ${@0}$?",
  "Aký je štatistický znak „{@0}“?": "¿De qué tipo es el carácter estadístico «{@0}»?",
  "Aký najväčší objem (v $\\text{cm}^3$) môže mať krabica?": "¿Qué volumen máximo (en $\\text{cm}^3$) puede tener la caja?",
  "Aký najväčší obsah (v $\\text{m}^2$) môže mať pozemok?": "¿Qué área máxima (en $\\text{m}^2$) puede tener el terreno?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „autobus“ v kruhovom diagrame?": "¿Qué ángulo central (en grados) tendrá el sector «autobús» en el diagrama de sectores?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „auto“ v kruhovom diagrame?": "¿Qué ángulo central (en grados) tendrá el sector «coche» en el diagrama de sectores?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „bicykel“ v kruhovom diagrame?": "¿Qué ángulo central (en grados) tendrá el sector «bicicleta» en el diagrama de sectores?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „pešo“ v kruhovom diagrame?": "¿Qué ángulo central (en grados) tendrá el sector «a pie» en el diagrama de sectores?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „vlak“ v kruhovom diagrame?": "¿Qué ángulo central (en grados) tendrá el sector «tren» en el diagrama de sectores?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „{@0}“ v kruhovom diagrame?": "¿Qué ángulo central (en grados) tendrá el sector «{@0}» en el diagrama de sectores?",
  "Akým číslom sa suma na účte každý rok vynásobí?": "¿Por qué número se multiplica cada año la cantidad de la cuenta?",
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
  "Basketbalista premení trestný hod s pravdepodobnosťou ${@0}$, hody sú nezávislé. Hádže {@1}-krát; $X$ je počet premenených hodov.": "Un jugador de baloncesto encesta un tiro libre con probabilidad ${@0}$; los tiros son independientes. Lanza {@1} veces; $X$ es el número de tiros encestados.",
  "Biela a čierna môžu prísť v dvoch poradiach. Pri výbere naraz radšej počítaj neusporiadané dvojice: bielu a čiernu guľu vyberáš nezávisle.": "La blanca y la negra pueden salir en dos órdenes. Al sacar a la vez, es mejor contar pares no ordenados: la bola blanca y la negra las eliges de forma independiente.",
  "Binomické rozdelenie": "Distribución binomial",
  "Bod $T[{@0}; {@1}]$ leží na kružnici $k: {@2}$. Dotyčnica ku kružnici v bode $T$ má rovnicu ${@3}+c=0$. Vypočítaj $c$.": "El punto $T[{@0}; {@1}]$ está en la circunferencia $k: {@2}$. La tangente a la circunferencia en el punto $T$ tiene la ecuación ${@3}+c=0$. Calcula $c$.",
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
  "Celé čísla ${@0}, \\dots, {@1}$ — je ich ${@2}$.": "Los números enteros ${@0}, \\dots, {@1}$: son ${@2}$.",
  "Chlapcov a dievčatá vyberáš nezávisle (kombinácie, lebo na poradí nezáleží) a počty vynásobíš.": "Los chicos y las chicas los eliges de forma independiente (combinaciones, porque el orden no importa) y multiplicas los números.",
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
  "Dané sú funkcie $f(x)={@0}$ a $g(x)={@1}$. Vypočítaj $({@2})({@3})$.": "Se dan las funciones $f(x)={@0}$ y $g(x)={@1}$. Calcula $({@2})({@3})$.",
  "Daný je súbor údajov: ${@0}$. Urči jeho {@1}.": "Se da el conjunto de datos: ${@0}$. Determina {@1} del conjunto.",
  "Definičný obor $(0; \\infty)$ nie je súmerný podľa nuly, funkcia preto nemôže byť párna ani nepárna.": "El dominio $(0; \\infty)$ no es simétrico respecto a cero; por eso la función no puede ser ni par ni impar.",
  "Delíš záporným číslom, znak nerovnosti sa otočí.": "Divides entre un número negativo: el signo de desigualdad se invierte.",
  "Derivácia je $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Koľko je $f'({@4})$?": "La derivada es $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. ¿Cuánto vale $f'({@4})$?",
  "Derivácia podielu: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. V bode ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.": "Derivada del cociente: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. En el punto ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.",
  "Derivácia sínusu je kosínus bez mínusu: $(\\sin x)'=\\cos x$. Mínus patrí k derivácii kosínusu.": "La derivada del seno es el coseno sin signo menos: $(\\sin x)'=\\cos x$. El menos corresponde a la derivada del coseno.",
  "Derivácia súčinu nie je súčin derivácií: $(u\\cdot v)'=u'v+uv'$, nie $u'\\cdot v'$.": "La derivada de un producto no es el producto de las derivadas: $(u\\cdot v)'=u'v+uv'$, no $u'\\cdot v'$.",
  "Derivácia súčinu: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Keďže $\\mathrm{e}^0=1$, je $f'(0)={@3}$.": "Derivada del producto: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Como $\\mathrm{e}^0=1$, es $f'(0)={@3}$.",
  "Derivácia súčinu: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Keďže $\\ln 1=0$, je $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.": "Derivada del producto: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Como $\\ln 1=0$, es $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.",
  "Derivácia zloženej funkcie: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. V bode ${@4}$ je vnútorná funkcia ${@5}\\cdot {@6}{@7}={@8}$, teda $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.": "Derivada de la función compuesta: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. En el punto ${@4}$ la función interior vale ${@5}\\cdot {@6}{@7}={@8}$, es decir, $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.",
  "Determinant sústavy je $m^2-{@0}$, je nulový pre $m=\\pm {@1}$ (inak má sústava jediné riešenie). Pre $m={@2}$ majú rovnice ľavé strany úmerné, ale pravé strany ${@3}$ a ${@4}$ nie: priamky sú rovnobežné rôzne, riešenie neexistuje. Pre $m={@5}$ je druhá rovnica $(-1)$-násobkom prvej: priamky splývajú, riešení je nekonečne veľa. Odpoveď: $m={@6}$.": "El determinante del sistema es $m^2-{@0}$; vale cero para $m=\\pm {@1}$ (en otro caso el sistema tiene una única solución). Para $m={@2}$ las ecuaciones tienen los lados izquierdos proporcionales, pero los lados derechos ${@3}$ y ${@4}$ no: las rectas son paralelas distintas y no existe solución. Para $m={@5}$ la segunda ecuación es $(-1)$ veces la primera: las rectas coinciden y hay infinitas soluciones. Respuesta: $m={@6}$.",
  "Determinant z vektorov $\\vec{AB}$ a $\\vec{AC}$ dáva obsah rovnobežníka. Obsah trojuholníka je jeho polovica.": "El determinante de los vectores $\\vec{AB}$ y $\\vec{AC}$ da el área del paralelogramo. El área del triángulo es la mitad.",
  "Diskriminant je $D=b^2-4ac$. Nezabudni na štvorku pred súčinom $ac$.": "El discriminante es $D=b^2-4ac$. No olvides el cuatro delante del producto $ac$.",
  "Diskriminant je $D=b^2-4ac$. Z rovnice $D=0$ treba $c$ ešte vydeliť štyrmi.": "El discriminante es $D=b^2-4ac$. De la ecuación $D=0$ hay que dividir todavía $c$ entre cuatro.",
  "Do vnútra intervalu patrí {@0}.": "En el interior del intervalo está {@0}.",
  "Do vzorca pre plášť $\\pi rs$ patrí strana kužeľa $s$, nie výška $v$.": "En la fórmula de la superficie lateral $\\pi rs$ va la generatriz del cono $s$, no la altura $v$.",
  "Dosadením $y={@0}$ dostaneš rovnicu ${@1}=0$. Aký je jej diskriminant?": "Sustituyendo $y={@0}$ obtienes la ecuación ${@1}=0$. ¿Cuál es su discriminante?",
  "Dosadením dostaneme $\\frac{0}{0}$. Menovateľ je rozdiel štvorcov: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.": "Sustituyendo obtenemos $\\frac{0}{0}$. El denominador es una diferencia de cuadrados: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Después de simplificar, $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.",
  "Dosadením vyjde $\\frac{0}{0}$, čo nie je nula, ale neurčitý výraz. Menovateľ rozlož ako rozdiel štvorcov a vykráť.": "Al sustituir sale $\\frac{0}{0}$, que no es cero, sino una indeterminación. Factoriza el denominador como diferencia de cuadrados y simplifica.",
  "Dosadením vyšlo $\\frac{0}{0}$, a to nie je nula, ale neurčitý výraz. Čitateľa rozlož na súčin a vykráť.": "Al sustituir ha salido $\\frac{0}{0}$, que no es cero, sino una indeterminación. Factoriza el numerador y simplifica.",
  "Dosadil si stred kružnice. Dotyčnica stredom neprechádza, prechádza bodom dotyku $T$.": "Has sustituido el centro de la circunferencia. La tangente no pasa por el centro, sino por el punto de tangencia $T$.",
  "Dosadiť sa nedá, menovateľ sa blíži k nule. Deliť číslom blízkym nule dáva v absolútnej hodnote veľmi veľké čísla.": "No se puede sustituir: el denominador tiende a cero. Dividir entre un número cercano a cero da números muy grandes en valor absoluto.",
  "Dosadíme ${@0}^2 x=1-{@1}^2 x$ a upravíme: ${@2}{@3}{@4}=0$.": "Sustituimos ${@0}^2 x=1-{@1}^2 x$ y simplificamos: ${@2}{@3}{@4}=0$.",
  "Dosaď $-x$ namiesto $x$ a porovnaj $f(-x)$ s $f(x)$ a s $-f(x)$. Over aj, či je definičný obor súmerný podľa nuly.": "Sustituye $-x$ en lugar de $x$ y compara $f(-x)$ con $f(x)$ y con $-f(x)$. Comprueba también si el dominio es simétrico respecto a cero.",
  "Dosaď bod $P$ do výrazu ${@0}$. Akú hodnotu dostaneš?": "Sustituye el punto $P$ en la expresión ${@0}$. ¿Qué valor obtienes?",
  "Dosaď bod ${@0}$ do ľavej strany rovnice roviny. Aká je absolútna hodnota výsledku?": "Sustituye el punto ${@0}$ en el lado izquierdo de la ecuación del plano. ¿Cuál es el valor absoluto del resultado?",
  "Dosaď súradnice bodu $P$ do rovnice roviny a vyjadri $d$.": "Sustituye las coordenadas del punto $P$ en la ecuación del plano y despeja $d$.",
  "Dotyčnica je kolmá na polomer $ST$. Do zadanej rovnice dosaď súradnice bodu $T$.": "La tangente es perpendicular al radio $ST$. Sustituye las coordenadas del punto $T$ en la ecuación dada.",
  "Druhá mocnina pomeru dĺžok platí pre povrch. Zachováva sa však objem, a ten závisí od tretej mocniny.": "El cuadrado de la razón de longitudes vale para el área de la superficie. Sin embargo, lo que se conserva es el volumen, y este depende de la tercera potencia.",
  "Druhá nerovnica má riešenie $x\\le d$. Aké je číslo $d$?": "La segunda inecuación tiene la solución $x\\le d$. ¿Cuál es el número $d$?",
  "Druhá súradnica inflexného bodu je funkčná hodnota $f({@0})$, nie hodnota $f''({@1})$.": "La segunda coordenada del punto de inflexión es el valor de la función $f({@0})$, no el valor $f''({@1})$.",
  "Druhý koreň čitateľa je $-c$; súčin koreňov je ${@0}$.": "La segunda raíz del numerador es $-c$; el producto de las raíces es ${@0}$.",
  "Dvaja strelci vystrelia nezávisle po jednej rane. Prvý zasiahne terč s pravdepodobnosťou ${@0}$, druhý s pravdepodobnosťou ${@1}$. Aká je pravdepodobnosť, že {@2}?": "Dos tiradores disparan de forma independiente un tiro cada uno. El primero acierta en el blanco con probabilidad ${@0}$ y el segundo con probabilidad ${@1}$. ¿Cuál es la probabilidad de que {@2}?",
  "Dvojnásobný koreň je pri $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.": "La raíz es doble cuando $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.",
  "Dĺžky sa neodčítajú priamo. Polomer gule je prepona pravouhlého trojuholníka, použi Pytagorovu vetu.": "Las longitudes no se restan directamente. El radio de la esfera es la hipotenusa de un triángulo rectángulo: usa el teorema de Pitágoras.",
  "Dĺžky strán pravouhlého trojuholníka tvoria aritmetickú postupnosť a jeho obvod je ${@0}\\,\\text{cm}$. Vypočítaj {@1}.": "Las longitudes de los lados de un triángulo rectángulo forman una progresión aritmética y su perímetro es ${@0}\\,\\text{cm}$. Calcula {@1}.",
  "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">najpravdepodobnejšie k = {@3}</span>": "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">k más probable = {@3}</span>",
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
  "Exponenciálna funkcia a k nej inverzná logaritmická funkcia": "Función exponencial y su función inversa, la logarítmica",
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
  "Funkcia $f(x)=\\dfrac{{@0}}{{@1}}$ je prostá. Vypočítaj $f^{-1}\\!\\left({@2}\\right)$.": "La función $f(x)=\\dfrac{{@0}}{{@1}}$ es inyectiva. Calcula $f^{-1}\\!\\left({@2}\\right)$.",
  "Funkcia $f(x)={@0}$ má práve jedno {@1}. Nájdi bod, v ktorom ho nadobúda: zadaj $x$ a $f(x)$ (napr. 2; -5).": "La función $f(x)={@0}$ tiene exactamente un {@1}. Halla el punto en el que lo alcanza: escribe $x$ y $f(x)$ (por ejemplo, 2; -5).",
  "Funkcia je konvexná tam, kde $f''(x)&gt;0$. Vypočítaj druhú deriváciu a vyrieš lineárnu nerovnicu.": "La función es convexa donde $f''(x)&gt;0$. Calcula la segunda derivada y resuelve la inecuación lineal.",
  "Funkcie sú rôzne, takže záleží na tom, kto je predseda a kto pokladník. Ide o variácie, nie kombinácie.": "Los cargos son distintos, así que importa quién es el presidente y quién el tesorero. Se trata de variaciones, no de combinaciones.",
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
  "Graf": "Gráfica",
  "Graf funkcie sin x / x s dierou v bode 0": "Gráfica de la función sen x / x con un hueco en el punto 0",
  "Graf funkcie x na tretiu mínus 3x s extrémami": "Gráfica de la función x al cubo menos 3x con sus extremos",
  "Graf racionálnej funkcie s asymptotami": "Gráfica de una función racional con sus asíntotas",
  "Grafy funkcií e na x a ln x s dotyčnicami": "Gráficas de las funciones e elevado a x y ln x con sus tangentes",
  "Gule ťaháme naraz, teda bez vrátenia. Po vytiahnutí bielej je v urne o jednu bielu menej.": "Las bolas se sacan a la vez, es decir, sin reemplazamiento. Después de sacar una blanca, en la urna hay una blanca menos.",
  "Guľu s polomerom $r={@0}\\,\\text{cm}$ pretne rovina vo vzdialenosti ${@1}\\,\\text{cm}$ od stredu gule. Vypočítaj {@2}": "Una esfera de radio $r={@0}\\,\\text{cm}$ es cortada por un plano a una distancia de ${@1}\\,\\text{cm}$ del centro de la esfera. Calcula {@2}",
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
  "Hodnota ${@0}$ je síce koreňom $V'(x)$, ale nepatrí do prípustného intervalu: krabica by nemala žiadne dno.": "El valor ${@0}$ es una raíz de $V'(x)$, pero no pertenece al intervalo admisible: la caja no tendría fondo.",
  "Hodnota ${@0}$ leží mimo $\\langle -1; 1\\rangle$, tá riešenie nedáva.": "El valor ${@0}$ está fuera de $\\langle -1; 1\\rangle$, no da ninguna solución.",
  "Hodnotu inverznej funkcie nájdeš bez jej predpisu: hľadáš $x$, pre ktoré $f(x)$ dá zadané číslo.": "El valor de la función inversa lo encuentras sin su expresión: buscas el $x$ para el que $f(x)$ da el número dado.",
  "Hodnoty sú celé čísla získané počítaním, medzi dvoma susednými nie je iná možná hodnota.": "Los valores son números enteros obtenidos contando; entre dos valores consecutivos no hay otro valor posible.",
  "Hodnoty sú slová (kategórie), nie čísla.": "Los valores son palabras (categorías), no números.",
  "Hodnoty tohto znaku sú slová (kategórie), nie čísla.": "Los valores de este carácter son palabras (categorías), no números.",
  "Hodnoty tohto znaku sú čísla, takže znak je kvantitatívny.": "Los valores de este carácter son números, así que el carácter es cuantitativo.",
  "Hodnoty získavame meraním a môžu byť ľubovoľným číslom z nejakého intervalu.": "Los valores se obtienen midiendo y pueden ser cualquier número de un intervalo.",
  "Hodnoty získavame meraním, môžu byť ľubovoľným číslom z nejakého intervalu (aj desatinným).": "Los valores se obtienen midiendo y pueden ser cualquier número de un intervalo (también decimal).",
  "Hodnoty získavame počítaním, sú to len celé čísla. Medzi dvoma susednými hodnotami nie je iná možná hodnota.": "Los valores se obtienen contando; son solo números enteros. Entre dos valores consecutivos no hay otro valor posible.",
  "Hodíme naraz dvoma hracími kockami. Aká je pravdepodobnosť, že {@0}? {@1}": "Lanzamos a la vez dos dados. ¿Cuál es la probabilidad de que {@0}? {@1}",
  "Hranica intervalu konvexnosti je inflexný bod, v ktorom $f''(x)=0$. Over, kde je druhá derivácia nulová.": "El límite del intervalo de convexidad es el punto de inflexión, en el que $f''(x)=0$. Comprueba dónde se anula la segunda derivada.",
  "Hranice integrálu sú nulové body paraboly. Funkcia je párna, môžeš počítať $2\\int_0^{m}$.": "Los límites de la integral son los ceros de la parábola. La función es par, puedes calcular $2\\int_0^{m}$.",
  "Hranol má dve podstavy, hornú aj dolnú. Obsah podstavy započítaj dvakrát.": "El prisma tiene dos bases, la superior y la inferior. Cuenta el área de la base dos veces.",
  "Hrany sa zväčšia o ${@0}\\,\\%$, {@1} však rastie rýchlejšie: koeficient podobnosti treba umocniť.": "Las aristas aumentan un ${@0}\\,\\%$, pero {@1} crece más deprisa: hay que elevar la razón de semejanza.",
  "Hráč hodí hracou kockou {@0}-krát. Aká je pravdepodobnosť, že aspoň raz padne šestka? Výsledok zaokrúhli na 3 desatinné miesta.": "Un jugador lanza un dado {@0} veces. ¿Cuál es la probabilidad de que salga al menos un seis? Redondea el resultado a 3 decimales.",
  "Hráč hodí {@0}-krát hracou kockou. Náhodná premenná $X$ je počet hodov, v ktorých padla šestka.": "Un jugador lanza un dado {@0} veces. La variable aleatoria $X$ es el número de lanzamientos en los que ha salido un seis.",
  "Hráč zapisoval počet bodov v jednotlivých zápasoch: ${@0}$. Aký je modus tohto súboru?": "Un jugador anotó el número de puntos en cada partido: ${@0}$. ¿Cuál es la moda de este conjunto?",
  "Hľadisko letného amfiteátra má v prvom rade {@0} {@1} a každý ďalší rad má o {@2} {@3} viac. Koľko radov treba najmenej postaviť, aby bolo spolu aspoň {@4} sedadiel?": "Las gradas de un anfiteatro de verano tienen en la primera fila {@0} {@1} y cada fila siguiente tiene {@2} {@3} más. ¿Cuántas filas hay que construir como mínimo para que haya en total al menos {@4} asientos?",
  "Hľadá sa hodnota funkcie, nie bod $x$, v ktorom ju nadobúda.": "Se busca el valor de la función, no el punto $x$ en el que lo alcanza.",
  "Hľadáme $t$ tak, aby $A+t\\vec{u}=Q$. Z prvej rovnice {@0} je $t={@1}$. Ďalšie rovnice: {@2} a {@3} — {@4}": "Buscamos $t$ tal que $A+t\\vec{u}=Q$. De la primera ecuación {@0} se obtiene $t={@1}$. Las demás ecuaciones: {@2} y {@3}: {@4}",
  "Hľadáme najmenšie prirodzené $n$, pre ktoré ${@0}^n\\ge {@1}$. Logaritmovaním: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, teda $n={@5}$.": "Buscamos el menor $n$ natural para el que ${@0}^n\\ge {@1}$. Tomando logaritmos: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, es decir, $n={@5}$.",
  "Ide o permutácie: ${@0}!={@1}$.": "Se trata de permutaciones: ${@0}!={@1}$.",
  "Inflexný bod hľadaj tam, kde $f''(x)=0$ a druhá derivácia mení znamienko.": "Busca el punto de inflexión donde $f''(x)=0$ y la segunda derivada cambia de signo.",
  "Integroval si len od $0$ do ${@0}$, to je polovica útvaru. Dolná hranica je druhý nulový bod paraboly.": "Has integrado solo de $0$ a ${@0}$, que es la mitad de la figura. El límite inferior es el otro cero de la parábola.",
  "Integruj ako mocninu, $\\frac{u^{n+1}}{n+1}$, a výsledok vydeľ koeficientom pri $x$ vnútri zátvorky.": "Integra como una potencia, $\\frac{u^{n+1}}{n+1}$, y divide el resultado entre el coeficiente de $x$ dentro del paréntesis.",
  "Integrál mocniny je $\\frac{u^{{@0}}}{{@1}}$: exponent sa zvýši o jedna a zároveň sa ním delí.": "La integral de una potencia es $\\frac{u^{{@0}}}{{@1}}$: el exponente aumenta en uno y a la vez se divide entre él.",
  "Inverznou funkciou k exponenciálnej je logaritmická. Hľadáš $x$, pre ktoré ${@0}^{{@1}}{@2}={@3}$.": "La función inversa de la exponencial es la logarítmica. Buscas el $x$ para el que ${@0}^{{@1}}{@2}={@3}$.",
  "Inverzná funkcia k funkcii $f(x)={@0}$ má tvar $f^{-1}(x)=kx+q$. Zadaj $k$ a $q$ (napr. 1/2; -3).": "La función inversa de la función $f(x)={@0}$ tiene la forma $f^{-1}(x)=kx+q$. Introduce $k$ y $q$ (por ejemplo, 1/2; -3).",
  "Inverzná funkcia vráti operácie v opačnom poradí: násobenie sa zmení na delenie. Vymeň $x$ a $y$ a vyjadri $y$.": "La función inversa deshace las operaciones en orden inverso: la multiplicación se convierte en división. Intercambia $x$ e $y$ y despeja $y$.",
  "Inverzná funkcia: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.": "Función inversa: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.",
  "Jav „aspoň jeden úspech“ je opačný k javu „ani jeden úspech“.": "El suceso «al menos un éxito» es el contrario del suceso «ningún éxito».",
  "Jav „aspoň jedna biela“ zahŕňa aj prípad, keď je jedna biela a jedna čierna. Použi opačný jav „obe čierne“.": "El suceso «al menos una blanca» incluye también el caso de una blanca y una negra. Usa el suceso contrario «las dos negras».",
  "Javy „prvý zasiahne“ a „druhý zasiahne“ môžu nastať súčasne: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Alebo použi opačný jav.": "Los sucesos «el primero acierta» y «el segundo acierta» pueden ocurrir a la vez: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. O usa el suceso contrario.",
  "Je daná funkcia $f(x)={@0}^{{@1}}{@2}$. Vypočítaj $f^{-1}({@3})$.": "Se da la función $f(x)={@0}^{{@1}}{@2}$. Calcula $f^{-1}({@3})$.",
  "Je funkcia $f(x)={@0}$ párna, nepárna, alebo ani jedno?": "¿La función $f(x)={@0}$ es par, impar o ninguna de las dos cosas?",
  "Jedna osoba môže mať najviac jednu funkciu, ďalšiu funkciu už vyberáš len zo zvyšných ľudí.": "Una persona puede tener como máximo un cargo; el siguiente cargo lo eliges solo entre las personas restantes.",
  "Jedna súradnica nestačí: to isté $t$ musí vyhovovať všetkým trom rovniciam. Over aj $y$ a $z$.": "Una coordenada no basta: el mismo $t$ tiene que cumplir las tres ecuaciones. Comprueba también $y$ y $z$.",
  "Jedného človeka posadíme na ľubovoľné miesto (otočenia nerozlišujeme), ostatných {@0} usporiadame: $({@1}-1)!={@2}!={@3}$.": "Sentamos a una persona en un sitio cualquiera (no distinguimos las rotaciones) y ordenamos a las otras {@0}: $({@1}-1)!={@2}!={@3}$.",
  "KAJAK": "KAJAK",
  "Kandidáti sú stacionárne body vnútri intervalu a oba krajné body. Vypočítaj v nich funkčné hodnoty a porovnaj ich.": "Los candidatos son los puntos estacionarios del interior del intervalo y los dos extremos. Calcula en ellos los valores de la función y compáralos.",
  "Každé podanie rúk je dvojica ľudí, na poradí nezáleží: $\\binom{n}{2}$. Zostav kvadratickú rovnicu.": "Cada apretón de manos es un par de personas, el orden no importa: $\\binom{n}{2}$. Plantea una ecuación de segundo grado.",
  "Každú uhlopriečku si započítal dvakrát, z oboch jej koncových vrcholov. Výsledok vydeľ dvoma.": "Has contado cada diagonal dos veces, desde sus dos vértices extremos. Divide el resultado entre dos.",
  "Každú známku vynásob počtom žiakov, ktorí ju dostali, výsledky sčítaj a vydeľ počtom všetkých žiakov.": "Multiplica cada nota por el número de alumnos que la obtuvieron, suma los resultados y divide entre el número total de alumnos.",
  "Každý rok sa suma vynásobí číslom $1+\\frac{p}{100}$ — ide o geometrickú postupnosť.": "Cada año la cantidad se multiplica por $1+\\frac{p}{100}$: se trata de una progresión geométrica.",
  "Každý vrchol spojíme s $n-3$ nesusednými vrcholmi a každú uhlopriečku tak započítame dvakrát: $\\frac{n(n-3)}{2}$. {@0}": "Unimos cada vértice con los $n-3$ vértices no adyacentes y así contamos cada diagonal dos veces: $\\frac{n(n-3)}{2}$. {@0}",
  "Keby boli všetky písmená rôzne, bolo by ich $n!$. Výmena rovnakých písmen nové slovo nedá, preto vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Si todas las letras fueran distintas, habría $n!$ ordenaciones. Intercambiar letras iguales no da una palabra nueva, por eso divide entre los factoriales de los números de letras repetidas.",
  "Kocka $ABCDEFGH$ má hranu $a={@0}\\,\\text{cm}$.": "El cubo $ABCDEFGH$ tiene arista $a={@0}\\,\\text{cm}$.",
  "Kocka ABCDEFGH s vyznačenými priamkami": "Cubo ABCDEFGH con las rectas marcadas",
  "Kocka s telesovou uhlopriečkou a uhlom s rovinou podstavy": "Cubo con la diagonal espacial y su ángulo con el plano de la base",
  "Kocky rozlišujeme: $[1; 2]$ a $[2; 1]$ sú dva rôzne výsledky. Započítaj obe poradia.": "Los dados se distinguen: $[1; 2]$ y $[2; 1]$ son dos resultados distintos. Cuenta los dos órdenes.",
  "Koeficient podobnosti je $k={@0}$. Koľkokrát sa zväčší {@1}? Zadaj číslo na 4 desatinné miesta.": "La razón de semejanza es $k={@0}$. ¿Cuántas veces aumenta {@1}? Escribe el número con 4 decimales.",
  "Koeficient podobnosti je $k={@0}$. {@1} sa zmení $k^{{@2}}={@3}$-krát, teda sa zväčší o ${@4}\\,\\%$.": "La razón de semejanza es $k={@0}$. {@1} cambia $k^{{@2}}={@3}$ veces, es decir, aumenta un ${@4}\\,\\%$.",
  "Konvexný mnohouholník má {@0} uhlopriečok. Koľko má vrcholov?": "Un polígono convexo tiene {@0} diagonales. ¿Cuántos vértices tiene?",
  "Koreň $t_2={@0}$ je záporný a rovnica ${@1}^{x}={@2}$ nemá riešenie.": "La raíz $t_2={@0}$ es negativa y la ecuación ${@1}^{x}={@2}$ no tiene solución.",
  "Koľko celých čísel ju spĺňa?": "¿Cuántos números enteros la cumplen?",
  "Koľko celých čísel leží v prieniku?": "¿Cuántos números enteros hay en la intersección?",
  "Koľko eur bude na účte po {@0} rokoch? Výsledok zaokrúhli na centy.": "¿Cuántos euros habrá en la cuenta al cabo de {@0} años? Redondea el resultado a céntimos.",
  "Koľko je $f'(0)$?": "¿Cuánto vale $f'(0)$?",
  "Koľko je $f'({@0})$? Zadaj celé číslo alebo zlomok.": "¿Cuánto vale $f'({@0})$? Escribe un número entero o una fracción.",
  "Koľko je $x=f^{-1}({@0})$?": "¿Cuánto vale $x=f^{-1}({@0})$?",
  "Koľko je ${@0}!$?": "¿Cuánto vale ${@0}!$?",
  "Koľko je spolu možností?": "¿Cuántas posibilidades hay en total?",
  "Koľko je trojíc, v ktorých sú len chlapci?": "¿Cuántos tríos hay formados solo por chicos?",
  "Koľko je všetkých trojíc?": "¿Cuántos tríos hay en total?",
  "Koľko je všetkých výberov dvoch gúľ?": "¿Cuántas selecciones de dos bolas hay en total?",
  "Koľko percent to je?": "¿Qué porcentaje es?",
  "Koľko percent žiakov odpovedalo „autobus“?": "¿Qué porcentaje de alumnos respondió «autobús»?",
  "Koľko percent žiakov odpovedalo „auto“?": "¿Qué porcentaje de alumnos respondió «coche»?",
  "Koľko percent žiakov odpovedalo „bicykel“?": "¿Qué porcentaje de alumnos respondió «bicicleta»?",
  "Koľko percent žiakov odpovedalo „pešo“?": "¿Qué porcentaje de alumnos respondió «a pie»?",
  "Koľko percent žiakov odpovedalo „vlak“?": "¿Qué porcentaje de alumnos respondió «tren»?",
  "Koľko percent žiakov odpovedalo „{@0}“?": "¿Qué porcentaje de alumnos respondió «{@0}»?",
  "Koľko rokov má nový člen?": "¿Cuántos años tiene el nuevo miembro?",
  "Koľko rôznych „slov“ (aj nezmyselných) vznikne preusporiadaním všetkých písmen slova {@0}?": "¿Cuántas «palabras» distintas (también sin sentido) se obtienen reordenando todas las letras de la palabra {@0}?",
  "Koľko uhlopriečok má konvexný {@0}-uholník?": "¿Cuántas diagonales tiene un polígono convexo de {@0} lados?",
  "Koľko {@0} {@1}čísel možno zostaviť z cifier {@2}, ak sa cifry {@3}?": "¿Cuántos números {@0} {@1}se pueden formar con las cifras {@2}, si las cifras {@3}?",
  "Koľkokrát najmenej musíme hodiť hracou kockou, aby pravdepodobnosť, že aspoň raz padne šestka, bola väčšia ako ${@0}$?": "¿Cuántas veces como mínimo tenemos que lanzar un dado para que la probabilidad de que salga al menos un seis sea mayor que ${@0}$?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť do radu na {@1} stoličiek?": "¿De cuántas maneras se pueden sentar {@0} personas en una fila de {@1} sillas?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť okolo okrúhleho stola, ak rozlišujeme len to, kto sedí vedľa koho (otočenie celého rozsadenia nič nemení)?": "¿De cuántas maneras se pueden sentar {@0} personas alrededor de una mesa redonda, si solo distinguimos quién se sienta junto a quién (girar toda la distribución no cambia nada)?",
  "Koľkými spôsobmi vyberieme chlapcov?": "¿De cuántas maneras elegimos a los chicos?",
  "Koľkými spôsobmi vyberieme dievčatá?": "¿De cuántas maneras elegimos a las chicas?",
  "Krabicový graf": "Diagrama de caja",
  "Kružnica a priamka": "Circunferencia y recta",
  "Ktoré z koreňov spĺňajú podmienky? Zadaj všetky riešenia rovnice.": "¿Qué raíces cumplen las condiciones? Escribe todas las soluciones de la ecuación.",
  "Ktorý koreň $V'(x)$ leží v intervale $(0; {@0})$?": "¿Qué raíz de $V'(x)$ está en el intervalo $(0; {@0})$?",
  "Ktorý zápis vyjadruje všetky riešenia rovnice ${@0}$ v $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?": "¿Qué expresión describe todas las soluciones de la ecuación ${@0}$ en $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?",
  "Kvadratická funkcia $f'$ má medzi koreňmi opačné znamienko ako jej vedúci koeficient.": "La función cuadrática $f'$ tiene entre sus raíces el signo contrario al de su coeficiente principal.",
  "Kvadratická rovnica má dvojnásobný koreň práve vtedy, keď je diskriminant nulový.": "Una ecuación de segundo grado tiene una raíz doble si y solo si el discriminante vale cero.",
  "Leží bod $Q{@0}$ na priamke $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?": "¿Está el punto $Q{@0}$ en la recta $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?",
  "Lokálne maximum": "Máximo local",
  "Lokálne minimum": "Mínimo local",
  "MATEMATIKA": "MATEMATIKA",
  "Medián je priemer {@0}. a {@1}. hodnoty": "La mediana es la media de los valores {@0}.º y {@1}.º",
  "Medián je priemer {@0}. a {@1}. hodnoty: $\\frac{{@2}+{@3}}{2}={@4}$.": "La mediana es la media de los valores {@0}.º y {@1}.º: $\\frac{{@2}+{@3}}{2}={@4}$.",
  "Medián je {@0}. hodnota": "La mediana es el valor {@0}.º",
  "Medián je {@0}. hodnota: ${@1}$.": "La mediana es el valor {@0}.º: ${@1}$.",
  "Medián nie je prostredná zo známok 1 až 5. Je to prostredná hodnota, keď známky všetkých žiakov zoradíš za sebou.": "La mediana no es la nota del medio entre 1 y 5. Es el valor central cuando ordenas una tras otra las notas de todos los alumnos.",
  "Menovateľ je nulový pre $x={@0}$ a čitateľ tam nulový nie je (lebo $ad-bc={@1}\\neq 0$), preto je $x={@2}$ zvislá asymptota. Pre $x\\to\\pm\\infty$ sa $f(x)$ blíži k podielu koeficientov pri $x$: $\\frac{{@3}}{{@4}}={@5}$, vodorovná asymptota je $y={@6}$.": "El denominador vale cero para $x={@0}$ y el numerador allí no vale cero (porque $ad-bc={@1}\\neq 0$), por eso $x={@2}$ es una asíntota vertical. Para $x\\to\\pm\\infty$, $f(x)$ se acerca al cociente de los coeficientes de $x$: $\\frac{{@3}}{{@4}}={@5}$; la asíntota horizontal es $y={@6}$.",
  "Menovateľ rozložíme: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení zostane $\\frac{1}{\\sqrt{x}+{@3}}$. Akú hodnotu má $\\sqrt{x}+{@4}$ pre $x={@5}$?": "Factorizamos el denominador: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Después de simplificar queda $\\frac{1}{\\sqrt{x}+{@3}}$. ¿Qué valor tiene $\\sqrt{x}+{@4}$ para $x={@5}$?",
  "Mimobežné priamky neležia v jednej rovine. Skús nájsť stenu alebo rez kocky, v ktorom ležia obe priamky.": "Las rectas que se cruzan no están en un mismo plano. Intenta encontrar una cara o una sección del cubo en la que estén las dos rectas.",
  "Množina riešení sústavy troch lineárnych nerovníc": "Conjunto de soluciones de un sistema de tres inecuaciones lineales",
  "Mocniny s rovnakým exponentom $x$ daj na jednu stranu, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, a potom obe strany zlogaritmuj.": "Pasa las potencias con el mismo exponente $x$ a un mismo lado, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, y después toma logaritmos en ambos lados.",
  "Modus je hodnota s najväčšou početnosťou. Spočítaj, koľkokrát sa vyskytuje každá hodnota.": "La moda es el valor con mayor frecuencia. Cuenta cuántas veces aparece cada valor.",
  "Na ktorom intervale je funkcia $f(x)={@0}$ konvexná?": "¿En qué intervalo es convexa la función $f(x)={@0}$?",
  "Na ktorých intervaloch je funkcia $f(x)={@0}$ {@1}?": "¿En qué intervalos es {@1} la función $f(x)={@0}$?",
  "Na poradí nezáleží, ide o kombinácie: chlapcov vyberieme $\\binom{{@0}}{{@1}}={@2}$ spôsobmi, dievčatá $\\binom{{@3}}{{@4}}={@5}$ spôsobmi. Podľa pravidla súčinu je spolu ${@6}\\cdot {@7}={@8}$ možností.": "El orden no importa, se trata de combinaciones: a los chicos los elegimos de $\\binom{{@0}}{{@1}}={@2}$ maneras, a las chicas de $\\binom{{@3}}{{@4}}={@5}$ maneras. Por el principio del producto hay en total ${@6}\\cdot {@7}={@8}$ posibilidades.",
  "Na prvé miesto môžeme dať {@0} ({@1} {@2}), na ďalšie miesta {@3}. Spolu ${@4}={@5}$.": "En la primera posición podemos poner {@0} ({@1} {@2}); en las siguientes posiciones, {@3}. En total, ${@4}={@5}$.",
  "Na stretnutí si každý účastník podal ruku s každým iným práve raz. Podaní rúk bolo {@0}. Koľko ľudí bolo na stretnutí?": "En una reunión cada participante dio la mano a cada uno de los demás exactamente una vez. Hubo {@0} apretones de manos. ¿Cuántas personas había en la reunión?",
  "Na tomto intervale leží stacionárny bod, v ktorom $f'$ mení znamienko, takže tam funkcia nie je monotónna.": "En este intervalo hay un punto estacionario en el que $f'$ cambia de signo, así que la función no es monótona en él.",
  "Na valci je len polguľa, jej objem je polovica objemu gule.": "Sobre el cilindro hay solo una semiesfera; su volumen es la mitad del volumen de la esfera.",
  "Na účet sme vložili ${@0}\\,€$ s ročnou úrokovou sadzbou ${@1}\\,\\%$, úroky sa pripisujú raz ročne a ponechávajú na účte (daň neuvažujeme). Koľko eur bude na účte po {@2} rokoch? Výsledok zaokrúhli na centy.": "Hemos depositado ${@0}\\,€$ en una cuenta con un tipo de interés anual del ${@1}\\,\\%$; los intereses se abonan una vez al año y se dejan en la cuenta (no consideramos impuestos). ¿Cuántos euros habrá en la cuenta al cabo de {@2} años? Redondea el resultado a céntimos.",
  "Najmenšie celé číslo v ňom je ${@0}$.": "El menor número entero que contiene es ${@0}$.",
  "Najprv nájdi hodnoty $m$, pre ktoré je determinant $m\\cdot m-k\\cdot k$ nulový. Potom pre každú z nich dosaď $m$ a porovnaj rovnice.": "Primero encuentra los valores de $m$ para los que el determinante $m\\cdot m-k\\cdot k$ vale cero. Después, para cada uno de ellos, sustituye $m$ y compara las ecuaciones.",
  "Najprv nájdi priesečníky, potom integruj rozdiel „horná mínus dolná“ funkcia.": "Primero encuentra los puntos de intersección y después integra la diferencia entre la función «de arriba menos la de abajo».",
  "Najprv rozhodni, či sú hodnoty slová alebo čísla. Pri číslach rozlíš počítanie (diskrétny) a meranie (spojitý).": "Primero decide si los valores son palabras o números. Si son números, distingue entre contar (discreto) y medir (continuo).",
  "Najprv vypočítaj stranu $s$ z pravouhlého trojuholníka s odvesnami $v$ a $R-r$. Povrch tvoria dve podstavy a plášť $\\pi s(R+r)$.": "Primero calcula la generatriz $s$ a partir del triángulo rectángulo de catetos $v$ y $R-r$. El área total la forman las dos bases y la superficie lateral $\\pi s(R+r)$.",
  "Najprv vypočítaj vnútornú funkciu: ${@0}({@1})$.": "Primero calcula la función interior: ${@0}({@1})$.",
  "Najčastejšie sa vyskytuje hodnota ${@0}$ (trikrát), ostatné hodnoty najviac dvakrát. Modus je ${@1}$.": "El valor que aparece con más frecuencia es ${@0}$ (tres veces); los demás valores, como máximo dos veces. La moda es ${@1}$.",
  "Napríklad $f(1)={@0}$ a $f(-1)={@1}$; neplatí $f(-1)=f(1)$ ani $f(-1)=-f(1)$.": "Por ejemplo, $f(1)={@0}$ y $f(-1)={@1}$; no se cumple ni $f(-1)=f(1)$ ni $f(-1)=-f(1)$.",
  "Napíš rovnicu dotyčnice ku grafu funkcie $f(x)={@0}$ v bode s $x$-ovou súradnicou $x_0={@1}$ v tvare $y=kx+q$. Zadaj $k$ a $q$.": "Escribe la ecuación de la recta tangente a la gráfica de la función $f(x)={@0}$ en el punto de coordenada $x$ igual a $x_0={@1}$, en la forma $y=kx+q$. Introduce $k$ y $q$.",
  "Načrtni priamky a nájdi vrcholy oblasti ako priesečníky hraničných priamok. Oblasť je trojuholník.": "Dibuja las rectas y encuentra los vértices de la región como puntos de intersección de las rectas límite. La región es un triángulo.",
  "Nech $u={@0}$, $v=\\ln x$. Akú hodnotu má člen $u'v={@1}\\ln x$ v bode $1$?": "Sea $u={@0}$, $v=\\ln x$. ¿Qué valor tiene el término $u'v={@1}\\ln x$ en el punto $1$?",
  "Nech $u={@0}$, $v=\\mathrm{e}^x$. Akú hodnotu má člen $u'v$ v bode $0$?": "Sea $u={@0}$, $v=\\mathrm{e}^x$. ¿Qué valor tiene el término $u'v$ en el punto $0$?",
  "Nech $x$ je dĺžka strán kolmých na stenu. Strana rovnobežná so stenou má dĺžku ${@0}-2x$ a obsah je $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ pre $x={@4}$ a $S''=-4&lt;0$, ide o maximum. Rozmery sú ${@5}\\,\\text{m}$ a ${@6}\\,\\text{m}$, obsah ${@7}\\,\\text{m}^2$.": "Sea $x$ la longitud de los lados perpendiculares a la pared. El lado paralelo a la pared mide ${@0}-2x$ y el área es $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ para $x={@4}$ y $S''=-4&lt;0$, se trata de un máximo. Las dimensiones son ${@5}\\,\\text{m}$ y ${@6}\\,\\text{m}$; el área, ${@7}\\,\\text{m}^2$.",
  "Nepárna funkcia spĺňa $f(-x)=-f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Una función impar cumple $f(-x)=-f(x)$ para todo $x$ del dominio. Sustituye, por ejemplo, $x=1$ y $x=-1$ y compara.",
  "Newton-Leibnizova formula: {@0}": "Regla de Barrow (fórmula de Newton-Leibniz): {@0}",
  "Nezabudni na koeficient ${@0}$ v menovateli: výraz je $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.": "No olvides el coeficiente ${@0}$ del denominador: la expresión es $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.",
  "Nezabudni na prostredný člen $Rr$ v zátvorke: $R^2+Rr+r^2$.": "No olvides el término central $Rr$ del paréntesis: $R^2+Rr+r^2$.",
  "Nezabudni na prostredný člen $a_1a_2$, teda $\\sqrt{S_1S_2}$.": "No olvides el término central $a_1a_2$, es decir, $\\sqrt{S_1S_2}$.",
  "Nie sú násobkami seba, roviny sú rôznobežné.": "No son múltiplos uno del otro: los planos son secantes.",
  "Niektoré písmená sa opakujú a ich výmenou nové slovo nevznikne. Vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Algunas letras se repiten e intercambiándolas no se obtiene una palabra nueva. Divide entre los factoriales de los números de letras repetidas.",
  "Nájdi inflexný bod funkcie $f(x)={@0}$. Zadaj jeho súradnice $x$ a $y$ (napr. 1; -4).": "Halla el punto de inflexión de la función $f(x)={@0}$. Escribe sus coordenadas $x$ e $y$ (por ejemplo, 1; -4).",
  "Nájdi korene derivácie $f'(x)={@0}$.": "Halla las raíces de la derivada $f'(x)={@0}$.",
  "Nájdi primitívnu funkciu ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) a dosaď hranice.": "Halla una primitiva ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) y sustituye los límites.",
  "Nájdi stacionárne body funkcie, teda korene rovnice $f'(x)={@0}=0$.": "Halla los puntos estacionarios de la función, es decir, las raíces de la ecuación $f'(x)={@0}=0$.",
  "O koľko percent sa {@0} zväčší? {@1}": "¿En qué porcentaje aumenta {@0}? {@1}",
  "Obe časti sú nepárne funkcie, preto aj ich súčet: $f(-x)=-f(x)$.": "Las dos partes son funciones impares, y por tanto también su suma: $f(-x)=-f(x)$.",
  "Objem": "El volumen",
  "Objem gule je $\\frac{4}{3}\\pi r^3$, nezabudni na koeficient $\\frac{4}{3}$.": "El volumen de la esfera es $\\frac{4}{3}\\pi r^3$: no olvides el coeficiente $\\frac{4}{3}$.",
  "Objem je $V(x)=x({@0}-2x)^2$. Pre ktoré $x$ z intervalu $(0; {@1})$ je $V'(x)=0$?": "El volumen es $V(x)=x({@0}-2x)^2$. ¿Para qué $x$ del intervalo $(0; {@1})$ es $V'(x)=0$?",
  "Objem je $V(x)=x({@0}-2x)^2$. Rozlož deriváciu na súčin $V'(x)=({@1}-2x)({@2}-cx)$. Aké je číslo $c$?": "El volumen es $V(x)=x({@0}-2x)^2$. Factoriza la derivada como producto $V'(x)=({@1}-2x)({@2}-cx)$. ¿Cuál es el número $c$?",
  "Objem kužeľa je tretina objemu valca s rovnakou podstavou a výškou. Objemy častí sčítaj.": "El volumen del cono es un tercio del volumen del cilindro con la misma base y altura. Suma los volúmenes de las partes.",
  "Objem kužeľa nie je $\\pi r^2 w$, ale len jeho tretina.": "El volumen del cono no es $\\pi r^2 w$, sino solo un tercio de eso.",
  "Objem materiálu je rozdiel objemov dvoch valcov s rovnakou výškou.": "El volumen del material es la diferencia de los volúmenes de dos cilindros con la misma altura.",
  "Objem polgule je polovica objemu gule, teda $\\frac{2}{3}\\pi r^3$. Objemy častí sčítaj.": "El volumen de la semiesfera es la mitad del volumen de la esfera, es decir, $\\frac{2}{3}\\pi r^3$. Suma los volúmenes de las partes.",
  "Objem sa zachová: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, teda $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.": "El volumen se conserva: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, es decir, $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.",
  "Obsah je $S(x)=x({@0}-2x)$, kde $x$ je strana kolmá na stenu. Pre aké $x$ je $S'(x)=0$?": "El área es $S(x)=x({@0}-2x)$, donde $x$ es el lado perpendicular a la pared. ¿Para qué $x$ es $S'(x)=0$?",
  "Obsah rezu: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.": "Área de la sección: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.",
  "Obsah rovnostranného trojuholníka so stranou $a$ je $\\frac{\\sqrt3}{4}a^2$. Plášť hranola tvoria tri zhodné obdĺžniky.": "El área de un triángulo equilátero de lado $a$ es $\\frac{\\sqrt3}{4}a^2$. La superficie lateral del prisma la forman tres rectángulos iguales.",
  "Obsah trojuholníka je polovica súčinu základne a výšky. Nezabudni deliť dvoma.": "El área de un triángulo es la mitad del producto de la base por la altura. No olvides dividir entre dos.",
  "Obsah vypočítaj z vektorov $\\vec{AB}$ a $\\vec{AC}$ (polovica absolútnej hodnoty determinantu), výšku potom zo vzorca $S=\\frac{c\\cdot v_c}{2}$.": "Calcula el área a partir de los vectores $\\vec{AB}$ y $\\vec{AC}$ (la mitad del valor absoluto del determinante) y después la altura con la fórmula $S=\\frac{c\\cdot v_c}{2}$.",
  "Od objemu plného valca odčítame dutinu: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.": "Al volumen del cilindro macizo le restamos el hueco: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.",
  "Olovenú guľu s polomerom ${@0}\\,\\text{cm}$ pretavili na rovnaké guľôčky s polomerom ${@1}\\,\\text{cm}$. Koľko guľôčok vzniklo (bez strát materiálu)?": "Una bola de plomo de radio ${@0}\\,\\text{cm}$ se ha fundido para hacer bolitas iguales de radio ${@1}\\,\\text{cm}$. ¿Cuántas bolitas se han obtenido (sin pérdidas de material)?",
  "Opačný jav (obaja minú): ${@0}\\cdot {@1}={@2}$, teda $P=1-{@3}={@4}$.": "Suceso contrario (los dos fallan): ${@0}\\cdot {@1}={@2}$, es decir, $P=1-{@3}={@4}$.",
  "Opačný jav je $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Preto $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.": "El suceso contrario es $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Por eso $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.",
  "Opačný jav „obe čierne“ má $\\binom{{@0}}{2}={@1}$ výberov, priaznivých je ${@2}-{@3}={@4}$.": "El suceso contrario «las dos negras» tiene $\\binom{{@0}}{2}={@1}$ selecciones; las favorables son ${@2}-{@3}={@4}$.",
  "Opačný jav: šestka nepadne ani raz, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. Hľadaná pravdepodobnosť je $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.": "Suceso contrario: no sale ningún seis, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. La probabilidad buscada es $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.",
  "Over tento zápis: dosaď $k=0$ a $k=1$ a skontroluj, či dostaneš riešenia rovnice. Over aj, či zápis nevynecháva niektoré riešenie z jednej periódy.": "Comprueba esta expresión: sustituye $k=0$ y $k=1$ y comprueba si obtienes soluciones de la ecuación. Comprueba también si la expresión no omite alguna solución de un período.",
  "Označ $x$ stranu kolmú na stenu, vyjadri druhú stranu z dĺžky pletiva a obsah ako funkciu $x$. Potom hľadaj, kde je jej derivácia nulová.": "Llama $x$ al lado perpendicular a la pared, expresa el otro lado a partir de la longitud de la malla y el área como función de $x$. Después busca dónde se anula su derivada.",
  "Parabola $y={@0}$ a priamka $y={@1}$ majú dva spoločné body. Zadaj súradnice toho z nich, ktorý má menšiu $x$-ovú súradnicu (napr. -1; 4).": "La parábola $y={@0}$ y la recta $y={@1}$ tienen dos puntos comunes. Escribe las coordenadas del que tiene la menor coordenada $x$ (por ejemplo, -1; 4).",
  "Percentá sa nesčitujú. Koeficient $k={@0}$ umocni na {@1} a až potom preveď na percentá.": "Los porcentajes no se suman. Eleva la razón $k={@0}$ al {@1} y solo después conviértela a porcentaje.",
  "Pletivo netreba na všetky štyri strany: stena tvorí jednu stranu, ohradiť treba len tri.": "No hace falta malla en los cuatro lados: la pared forma un lado, solo hay que cercar tres.",
  "Plášť tvoria tri obdĺžniky ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.": "La superficie lateral la forman tres rectángulos de ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.",
  "Po dosadení $x={@0}$ vyjde výraz $\\frac{0}{0}$, preto čitateľa rozložíme: ${@1}={@2}{@3}$. Pre $x\\neq {@4}$ vykrátime a dostaneme $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.": "Al sustituir $x={@0}$ sale la expresión $\\frac{0}{0}$, por eso factorizamos el numerador: ${@1}={@2}{@3}$. Para $x\\neq {@4}$ simplificamos y obtenemos $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.",
  "Po koľkých rokoch sa vklad prvýkrát aspoň {@0}?": "¿Al cabo de cuántos años el depósito se {@0} como mínimo por primera vez?",
  "Po odlogaritmovaní dostaneš $({@0})({@1})={@2}$. Zadaj korene tejto kvadratickej rovnice.": "Al quitar los logaritmos obtienes $({@0})({@1})={@2}$. Escribe las raíces de esta ecuación de segundo grado.",
  "Po príchode má zbor ${@0}$ členov, nový súčet je preto ${@1}\\cdot {@2}$.": "Después de la llegada, el coro tiene ${@0}$ miembros; por eso la nueva suma es ${@1}\\cdot {@2}$.",
  "Po substitúcii $t={@0} x$ dostaneš ${@1}=0$. Zadaj jej korene (zlomok napr. ako 1/2).": "Después de la sustitución $t={@0} x$ obtienes ${@1}=0$. Escribe sus raíces (una fracción, por ejemplo, como 1/2).",
  "Po substitúcii $t={@0}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "Después de la sustitución $t={@0}$ resuelve la ecuación ${@1}=0$. Escribe sus raíces $t$.",
  "Po substitúcii $t={@0}^{x}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "Después de la sustitución $t={@0}^{x}$ resuelve la ecuación ${@1}=0$. Escribe sus raíces $t$.",
  "Po vybratí ${@0}$ pred zátvorku: pre ktoré $x$ z {@1} je ${@2}=0$?": "Después de sacar ${@0}$ factor común: ¿para qué $x$ de {@1} es ${@2}=0$?",
  "Po vykrátení ostal výraz ${@0}$ a doňho ešte treba dosadiť $x={@1}$.": "Después de simplificar ha quedado la expresión ${@0}$, y en ella todavía hay que sustituir $x={@1}$.",
  "Po vykrátení ostane v menovateli $\\sqrt{x}+{@0}$, nie len $\\sqrt{x}$. Dosaď $x={@1}$ do celého súčtu.": "Después de simplificar, en el denominador queda $\\sqrt{x}+{@0}$, no solo $\\sqrt{x}$. Sustituye $x={@1}$ en toda la suma.",
  "Po vykrátení činiteľa ${@0}$ zostane ${@1}$. Akú hodnotu má tento výraz pre $x={@2}$?": "Después de simplificar el factor ${@0}$ queda ${@1}$. ¿Qué valor tiene esta expresión para $x={@2}$?",
  "Po výmene premenných máme $x={@0}$. Aký je koeficient $k$ pri $x$ vo vyjadrení $y=kx+q$?": "Después de intercambiar las variables tenemos $x={@0}$. ¿Cuál es el coeficiente $k$ de $x$ en la expresión $y=kx+q$?",
  "Podaní rúk je $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Z rovnice $\\frac{n(n-1)}{2}={@0}$ dostaneme $n^2-n-{@1}=0$, kladný koreň je $n={@2}$.": "El número de apretones de manos es $\\binom{n}{2}=\\frac{n(n-1)}{2}$. De la ecuación $\\frac{n(n-1)}{2}={@0}$ obtenemos $n^2-n-{@1}=0$; la raíz positiva es $n={@2}$.",
  "Podiel vedúcich koeficientov rozhoduje len pri rovnakom stupni. Tu má čitateľ nižší stupeň, takže po vydelení najvyššou mocninou menovateľa ide celý čitateľ k nule.": "El cociente de los coeficientes principales solo decide cuando los grados son iguales. Aquí el numerador tiene menor grado, así que, al dividir entre la mayor potencia del denominador, todo el numerador tiende a cero.",
  "Podmienka $x&gt;0$. Substitúcia $t={@0}$: ${@1}=0$, teda $t_1={@2}$, $t_2={@3}$. Z ${@4}={@5}$ je $x={@6}^{{@7}}={@8}$ a z ${@9}={@10}$ je $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.": "Condición: $x&gt;0$. Sustitución $t={@0}$: ${@1}=0$, es decir, $t_1={@2}$, $t_2={@3}$. De ${@4}={@5}$ es $x={@6}^{{@7}}={@8}$ y de ${@9}={@10}$ es $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.",
  "Podmienky dávajú $x&gt;c$. Aké je číslo $c$?": "Las condiciones dan $x&gt;c$. ¿Cuál es el número $c$?",
  "Podmienky: ${@0}&gt;0$ a ${@1}&gt;0$, teda $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Korene sú ${@10}$ a ${@11}$; podmienku spĺňa len $x={@12}$. $K=\\{{@13}\\}$.": "Condiciones: ${@0}&gt;0$ y ${@1}&gt;0$, es decir, $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Las raíces son ${@10}$ y ${@11}$; la condición solo la cumple $x={@12}$. $K=\\{{@13}\\}$.",
  "Podstava je rovnostranný trojuholník, nie štvorec: jej obsah je $\\frac{\\sqrt3}{4}a^2$.": "La base es un triángulo equilátero, no un cuadrado: su área es $\\frac{\\sqrt3}{4}a^2$.",
  "Podstava je rovnostranný trojuholník: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}": "La base es un triángulo equilátero: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}",
  "Podľa Vietovho vzťahu je súčet koreňov $x_1+x_2=-p$, nie $p$. Pozor na znamienko.": "Según la relación de Vieta, la suma de las raíces es $x_1+x_2=-p$, no $p$. Cuidado con el signo.",
  "Polomer gule, vzdialenosť roviny od stredu a polomer rezu tvoria pravouhlý trojuholník (polomer gule je prepona).": "El radio de la esfera, la distancia del plano al centro y el radio de la sección forman un triángulo rectángulo (el radio de la esfera es la hipotenusa).",
  "Polomer rezu: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}": "Radio de la sección: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}",
  "Polož diskriminant rovný nule.": "Iguala el discriminante a cero.",
  "Pomocou $\\sin^2 x+\\cos^2 x=1$ prepíš rovnicu len na ${@0} x$.": "Con $\\sin^2 x+\\cos^2 x=1$ reescribe la ecuación solo con ${@0} x$.",
  "Porovnaj aj hodnoty funkcie v krajných bodoch intervalu, globálny extrém môže byť práve tam.": "Compara también los valores de la función en los extremos del intervalo: el extremo global puede estar precisamente allí.",
  "Porovnaj smery priamok. Ak nie sú rovnobežné, zisti, či ležia v jednej rovine (napr. v stene alebo uhlopriečnom reze kocky).": "Compara las direcciones de las rectas. Si no son paralelas, averigua si están en un mismo plano (por ejemplo, en una cara o en una sección diagonal del cubo).",
  "Porovnaj stupne čitateľa a menovateľa. Pri rovnakom stupni rozhodujú vedúce koeficienty.": "Compara los grados del numerador y del denominador. Con grados iguales, deciden los coeficientes principales.",
  "Porovnaj tieto hodnoty s hodnotami v stacionárnych bodoch vnútri intervalu. Aká je {@0} hodnota?": "Compara estos valores con los valores en los puntos estacionarios del interior del intervalo. ¿Cuál es {@0} valor?",
  "Porovnaj vzdialenosť stredu od priamky s polomerom. Polomer je odmocnina z pravej strany rovnice kružnice, teda $r={@0}$, nie ${@1}$. Pozor aj na znamienka súradníc stredu.": "Compara la distancia del centro a la recta con el radio. El radio es la raíz del lado derecho de la ecuación de la circunferencia, es decir, $r={@0}$, no ${@1}$. Cuidado también con los signos de las coordenadas del centro.",
  "Porovnáme pravé strany: ${@0}={@1} \\Rightarrow {@2}=0$, korene $x={@3}$ a $x={@4}$. Pre $x={@5}$ je $y={@6}\\cdot {@7}{@8}={@9}$. Priesečníky sú $[{@10}; {@11}]$ a $[{@12}; {@13}]$.": "Comparamos los lados derechos: ${@0}={@1} \\Rightarrow {@2}=0$, raíces $x={@3}$ y $x={@4}$. Para $x={@5}$ es $y={@6}\\cdot {@7}{@8}={@9}$. Los puntos de intersección son $[{@10}; {@11}]$ y $[{@12}; {@13}]$.",
  "Potrebujeme $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, teda $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Zlogaritmujeme (logaritmus čísla menšieho ako 1 je záporný, znak sa otočí): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Najmenšie celé $n$ je ${@4}$.": "Necesitamos $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, es decir, $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Tomamos logaritmos (el logaritmo de un número menor que 1 es negativo, el signo se invierte): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. El menor $n$ entero es ${@4}$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\ln x)'=\\frac{1}{x}$. Nezabudni, že $\\ln 1=0$.": "Usa $(u\\cdot v)'=u'v+uv'$ y $(\\ln x)'=\\frac{1}{x}$. No olvides que $\\ln 1=0$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\mathrm{e}^x)'=\\mathrm{e}^x$.": "Usa $(u\\cdot v)'=u'v+uv'$ y $(\\mathrm{e}^x)'=\\mathrm{e}^x$.",
  "Použi $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.": "Usa $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
  "Použi $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "Usa $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Použi $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. V čitateli sa členy s $x$ odčítajú.": "Usa $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. En el numerador, los términos con $x$ se restan.",
  "Použi $\\sin 2x=2\\sin x\\cos x$, všetko prenes na jednu stranu a vyber spoločného činiteľa pred zátvorku. Nedeľ ním!": "Usa $\\sin 2x=2\\sin x\\cos x$, pasa todo a un lado y saca factor común. ¡No dividas entre él!",
  "Použi opačný jav: pravdepodobnosť, že šestka nepadne v žiadnom z hodov, je $\\left(\\frac{5}{6}\\right)^n$.": "Usa el suceso contrario: la probabilidad de que no salga ningún seis en ninguno de los lanzamientos es $\\left(\\frac{5}{6}\\right)^n$.",
  "Použi vzorec $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, kde $Q$ je bod priamky. Alebo nájdi trojuholník, v ktorom je hľadaná vzdialenosť výškou.": "Usa la fórmula $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, donde $Q$ es un punto de la recta. O encuentra un triángulo en el que la distancia buscada sea una altura.",
  "Povrch": "El área total",
  "Povrch gule je ${@0}\\pi\\,\\text{cm}^2$. Jej objem sa dá zapísať ako $V=k\\pi\\,\\text{cm}^3$. Vypočítaj $k$.": "El área de una esfera es ${@0}\\pi\\,\\text{cm}^2$. Su volumen se puede escribir como $V=k\\pi\\,\\text{cm}^3$. Calcula $k$.",
  "Pozor na znamienko menovateľa: pre $x$ tesne {@0} od ${@1}$ je menovateľ ${@2}$ {@3}. Skombinuj ho so znamienkom čitateľa.": "Cuidado con el signo del denominador: para $x$ justo {@0} de ${@1}$ el denominador ${@2}$ es {@3}. Combínalo con el signo del numerador.",
  "Pozor, $R^2-r^2$ nie je to isté ako $(R-r)^2$. Odčítaj objemy dvoch valcov.": "Cuidado, $R^2-r^2$ no es lo mismo que $(R-r)^2$. Resta los volúmenes de dos cilindros.",
  "Pozor, $\\cos\\pi=-1$, nie $1$. Hodnoty primitívnej funkcie v hraniciach sa preto neodčítajú na nulu.": "Cuidado, $\\cos\\pi=-1$, no $1$. Por eso los valores de la primitiva en los límites no se anulan al restarlos.",
  "Pozor, $\\ln 1=0$, lebo $\\mathrm{e}^0=1$. Hodnota primitívnej funkcie v dolnej hranici je nulová.": "Cuidado, $\\ln 1=0$, porque $\\mathrm{e}^0=1$. El valor de la primitiva en el límite inferior es cero.",
  "Pozor, $\\ln 1=0$, nie $1$ (lebo $\\mathrm{e}^0=1$). Prvý člen $u'v$ je preto v bode $1$ nulový.": "Cuidado, $\\ln 1=0$, no $1$ (porque $\\mathrm{e}^0=1$). Por eso el primer término $u'v$ vale cero en el punto $1$.",
  "Počet pokusov n": "Número de ensayos n",
  "Počet uhlopriečok $n$-uholníka je $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (všetky spojnice vrcholov mínus strany).": "El número de diagonales de un polígono de $n$ lados es $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (todos los segmentos entre vértices menos los lados).",
  "Počet usporiadaní $n$ rôznych prvkov je $n!$.": "El número de ordenaciones de $n$ elementos distintos es $n!$.",
  "Počty sedadiel tvoria aritmetickú postupnosť s $a_1={@0}$, $d={@1}$. Súčet $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ vedie na kvadratickú nerovnicu ${@5}\\ge 0$. Kladný koreň je približne ${@6}$, preto $n={@7}$. Kontrola: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.": "Los números de asientos forman una progresión aritmética con $a_1={@0}$, $d={@1}$. La suma $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ lleva a la inecuación de segundo grado ${@5}\\ge 0$. La raíz positiva es aproximadamente ${@6}$, por eso $n={@7}$. Comprobación: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.",
  "Počítal si v opačnom poradí. Pri $({@0})(x)$ sa najprv použije {@1} (vnútorná funkcia) a jej výsledok sa dosadí do {@2}.": "Has calculado en el orden contrario. En $({@0})(x)$ se aplica primero {@1} (la función interior) y su resultado se sustituye en {@2}.",
  "Pracuj so súčtami: súčet = priemer · počet. Porovnaj súčet pred príchodom a po príchode nového člena.": "Trabaja con las sumas: suma = media · número. Compara la suma antes y después de la llegada del nuevo miembro.",
  "Pravdepodobnosti jednotlivých hodov sa nesčítavajú (pri 6 hodoch by vyšla istota). Použi opačný jav „ani raz“.": "Las probabilidades de los distintos lanzamientos no se suman (con 6 lanzamientos saldría certeza). Usa el suceso contrario «ninguna vez».",
  "Pravdepodobnosti netrafenia sú ${@0}$ a ${@1}$. {@2}": "Las probabilidades de fallar son ${@0}$ y ${@1}$. {@2}",
  "Pravdepodobnosť p": "Probabilidad p",
  "Pravidelný trojboký hranol má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj jeho {@2}. {@3}": "Un prisma triangular regular tiene arista de la base $a={@0}\\,\\text{cm}$ y altura $v={@1}\\,\\text{cm}$. Calcula su {@2}. {@3}",
  "Pravidelný štvorboký ihlan": "Pirámide cuadrangular regular",
  "Pravidelný štvorboký ihlan má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}.{@3}": "Una pirámide cuadrangular regular tiene arista de la base $a={@0}\\,\\text{cm}$ y altura $v={@1}\\,\\text{cm}$. Calcula {@2}.{@3}",
  "Pravidelný štvorboký zrezaný ihlan má podstavné hrany $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho objem v $\\text{cm}^3$.{@3}": "Un tronco de pirámide cuadrangular regular tiene aristas de las bases $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ y altura $v={@2}\\,\\text{cm}$. Calcula su volumen en $\\text{cm}^3$.{@3}",
  "Pre $x\\to {@0}^{{@1}}$ je $x {@2} {@3}$, menovateľ ${@4}$ je teda {@5} a blíži sa k nule. Čitateľ ${@6}$ je {@7}, preto zlomok rastie v absolútnej hodnote nad všetky medze so znamienkom {@8}: limita je {@9}.": "Para $x\\to {@0}^{{@1}}$ es $x {@2} {@3}$; el denominador ${@4}$ es, por tanto, {@5} y tiende a cero. El numerador ${@6}$ es {@7}, por eso la fracción crece en valor absoluto sin límite, con signo {@8}: el límite es {@9}.",
  "Pre $x\\to\\infty$ nerozhodujú absolútne členy, ale členy s najvyššou mocninou $x$.": "Para $x\\to\\infty$ no deciden los términos independientes, sino los términos con la mayor potencia de $x$.",
  "Pre $x\\to\\pm\\infty$ rozhodujú koeficienty pri $x$, nie absolútne členy.": "Para $x\\to\\pm\\infty$ deciden los coeficientes de $x$, no los términos independientes.",
  "Pre akú hodnotu parametra $c$ má rovnica $x^2{@0}+c=0$ dvojnásobný koreň?": "¿Para qué valor del parámetro $c$ tiene la ecuación $x^2{@0}+c=0$ una raíz doble?",
  "Pre binomické rozdelenie je $E(X)=np$ a $D(X)=np(1-p)$.": "Para la distribución binomial, $E(X)=np$ y $D(X)=np(1-p)$.",
  "Pre funkciu $f(x)=({@0})\\,\\mathrm{e}^{x}$ vypočítaj $f'(0)$.": "Para la función $f(x)=({@0})\\,\\mathrm{e}^{x}$ calcula $f'(0)$.",
  "Pre funkciu $f(x)=({@0})\\ln x$ vypočítaj $f'(1)$.": "Para la función $f(x)=({@0})\\ln x$ calcula $f'(1)$.",
  "Pre funkciu $f(x)=({@0})^{{@1}}$ vypočítaj $f'({@2})$.": "Para la función $f(x)=({@0})^{{@1}}$ calcula $f'({@2})$.",
  "Pre funkciu $f(x)=\\dfrac{{@0}}{{@1}}$ vypočítaj $f'({@2})$. Výsledok zadaj ako celé číslo alebo zlomok.": "Para la función $f(x)=\\dfrac{{@0}}{{@1}}$ calcula $f'({@2})$. Escribe el resultado como número entero o fracción.",
  "Pre funkciu $f(x)={@0}{@1}$ vypočítaj $f'(0)$.": "Para la función $f(x)={@0}{@1}$ calcula $f'(0)$.",
  "Pre korene z intervalu $\\langle -1; 1\\rangle$ nájdi všetky $x$ v stupňoch z {@0}.": "Para las raíces del intervalo $\\langle -1; 1\\rangle$ halla todos los $x$ en grados de {@0}.",
  "Pre ktoré $x$ je nulová zátvorka ${@0} {@1}$?": "¿Para qué $x$ vale cero el paréntesis ${@0} {@1}$?",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2+px+{@0}=0$ dvojnásobný koreň? Zadaj všetky hodnoty oddelené bodkočiarkou.": "¿Para qué valores del parámetro $p$ tiene la ecuación $x^2+px+{@0}=0$ una raíz doble? Escribe todos los valores separados por punto y coma.",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2{@0}+p=0$ {@1}?": "¿Para qué valores del parámetro $p$ tiene la ecuación $x^2{@0}+p=0$ {@1}?",
  "Pre zrezaný ihlan platí $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; pri štvorcových podstavách je $\\sqrt{S_1S_2}=a_1a_2$.": "Para el tronco de pirámide se cumple $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; con bases cuadradas es $\\sqrt{S_1S_2}=a_1a_2$.",
  "Pred určením mediánu treba údaje usporiadať podľa veľkosti.": "Antes de determinar la mediana hay que ordenar los datos por tamaño.",
  "Predsedu vyberáš z $n$ ľudí, podpredsedu už len zo zvyšných, pokladníka zo zvyšných ďalej.": "Al presidente lo eliges entre $n$ personas, al vicepresidente ya solo entre las restantes y al tesorero entre las que quedan después.",
  "Predstav si rovinu ako rez kockou. Priamka v nej leží, ak v nej ležia dva jej body; je rovnobežná, ak je rovnobežná s niektorou priamkou roviny.": "Imagina el plano como una sección del cubo. Una recta está en él si están en él dos de sus puntos; es paralela si es paralela a alguna recta del plano.",
  "Predstav si všetky známky zoradené od najlepšej. Medián je prostredná hodnota (pri párnom počte priemer dvoch prostredných).": "Imagina todas las notas ordenadas desde la mejor. La mediana es el valor central (con un número par de datos, la media de los dos centrales).",
  "Pri $(f\\circ g)(x)=f(g(x))$ počítaš najprv vnútornú funkciu $g$, jej výsledok dosadíš do $f$.": "En $(f\\circ g)(x)=f(g(x))$ calculas primero la función interior $g$ y su resultado lo sustituyes en $f$.",
  "Pri derivovaní mocniny sa exponent zníži o jedna: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.": "Al derivar una potencia, el exponente disminuye en uno: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.",
  "Pri lineárnej substitúcii treba výsledok vydeliť koeficientom pri $x$, teda číslom ${@0}$.": "Con una sustitución lineal hay que dividir el resultado entre el coeficiente de $x$, es decir, entre ${@0}$.",
  "Pri nezávislých javoch sa pravdepodobnosti súčasného nastania násobia. Pri „aspoň jeden“ použi opačný jav.": "Con sucesos independientes, las probabilidades de que ocurran a la vez se multiplican. Para «al menos uno», usa el suceso contrario.",
  "Pri okrúhlom stole sú rozsadenia, ktoré sa líšia len otočením, rovnaké. Zafixuj jedného človeka.": "En una mesa redonda, las distribuciones que solo se diferencian en un giro son iguales. Fija a una persona.",
  "Pri podobnosti s koeficientom $k$ sa {@0}. Výsledný násobok preveď na percentá.": "En una semejanza de razón $k$, {@0}. Convierte el múltiplo resultante a porcentaje.",
  "Pri pretavení sa zachováva objem. Pomer objemov podobných telies je tretia mocnina pomeru dĺžok.": "Al fundir se conserva el volumen. La razón de los volúmenes de cuerpos semejantes es el cubo de la razón de las longitudes.",
  "Pri rovnej stene chceme ohradiť obdĺžnikový pozemok, stena tvorí jednu jeho stranu. Máme ${@0}\\,\\text{m}$ pletiva. {@1}": "Junto a una pared recta queremos cercar un terreno rectangular; la pared forma uno de sus lados. Tenemos ${@0}\\,\\text{m}$ de malla. {@1}",
  "Pri strane odstrihnutého štvorca $x$ má krabica dno $({@0}-2x)^2$ a výšku $x$: $V(x)=x({@1}-2x)^2$ pre $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, v intervale je nulová len pre $x={@7}$ (tam sa mení znamienko z $+$ na $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.": "Si el lado del cuadrado recortado es $x$, la caja tiene fondo $({@0}-2x)^2$ y altura $x$: $V(x)=x({@1}-2x)^2$ para $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$; en el intervalo solo se anula para $x={@7}$ (allí el signo cambia de $+$ a $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.",
  "Pri vyjadrení $y$ treba číslom ${@0}$ vydeliť celú pravú stranu, teda aj absolútny člen.": "Al despejar $y$ hay que dividir entre ${@0}$ todo el lado derecho, es decir, también el término independiente.",
  "Pri zloženej funkcii násob deriváciou vnútra: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "En una función compuesta, multiplica por la derivada de la función interior: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Priamka $p: {@0}=0$ pretína kružnicu $k: {@1}$ v dvoch bodoch. Zadaj $x$-ové súradnice oboch priesečníkov oddelené bodkočiarkou.": "La recta $p: {@0}=0$ corta la circunferencia $k: {@1}$ en dos puntos. Escribe las coordenadas $x$ de los dos puntos de intersección separadas por punto y coma.",
  "Priamka je s rovinou rovnobežná, len ak je jej smerový vektor kolmý na normálový vektor roviny ($\\vec u\\cdot\\vec n=0$). Vypočítaj tento skalárny súčin.": "Una recta es paralela a un plano solo si su vector director es perpendicular al vector normal del plano ($\\vec u\\cdot\\vec n=0$). Calcula este producto escalar.",
  "Priamka leží v rovine, len ak v nej ležia dva jej body. Over oba koncové body.": "Una recta está en un plano solo si están en él dos de sus puntos. Comprueba los dos puntos extremos.",
  "Priamka pretína rovinu, len ak $\\vec u\\cdot\\vec n\\neq 0$. Vypočítaj skalárny súčin smerového a normálového vektora.": "Una recta corta un plano solo si $\\vec u\\cdot\\vec n\\neq 0$. Calcula el producto escalar del vector director y el vector normal.",
  "Priamky $y={@0}$ a $y={@1}$ pretínajú os $x$ v bodoch $[{@2}; 0]$ a $[{@3}; 0]$ a navzájom sa pretínajú v bode $[{@4}; {@5}]$. Oblasť je trojuholník so základňou ${@6}$ a výškou ${@7}$, jeho obsah je $\\frac{{@8}\\cdot {@9}}{2}={@10}$.": "Las rectas $y={@0}$ e $y={@1}$ cortan el eje $x$ en los puntos $[{@2}; 0]$ y $[{@3}; 0]$ y se cortan entre sí en el punto $[{@4}; {@5}]$. La región es un triángulo de base ${@6}$ y altura ${@7}$; su área es $\\frac{{@8}\\cdot {@9}}{2}={@10}$.",
  "Priaznivé dvojice: {@0} — spolu ${@1}$.": "Pares favorables: {@0}; en total ${@1}$.",
  "Priaznivé: $\\binom{{@0}}{2}={@1}$.": "Favorables: $\\binom{{@0}}{2}={@1}$.",
  "Priaznivé: ${@0}\\cdot {@1}={@2}$ (bielu a čiernu vyberáme nezávisle).": "Favorables: ${@0}\\cdot {@1}={@2}$ (la blanca y la negra las elegimos de forma independiente).",
  "Priemer z tabuľky početností je vážený: každú známku vynásob počtom žiakov, ktorí ju dostali.": "La media de una tabla de frecuencias es ponderada: multiplica cada nota por el número de alumnos que la obtuvieron.",
  "Priemerný vek {@0} členov speváckeho zboru je ${@1}$ rokov. Keď do zboru pribudol nový člen, priemerný vek sa {@2} na ${@3}$ rokov. Koľko rokov má nový člen?": "La edad media de los {@0} miembros de un coro es de ${@1}$ años. Cuando se incorporó un nuevo miembro, la edad media {@2} a ${@3}$ años. ¿Cuántos años tiene el nuevo miembro?",
  "Priesečníky s osou $x$: ${@0}-x^2=0$, teda $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.": "Puntos de intersección con el eje $x$: ${@0}-x^2=0$, es decir, $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.",
  "Priesečníky sú $x=0$ a ešte jeden bod. Aké je jeho $x$?": "Los puntos de intersección son $x=0$ y otro punto más. ¿Cuál es su $x$?",
  "Priesečníky: $x^2={@0}$, teda $x=0$ a $x={@1}$. Na $\\langle 0; {@2}\\rangle$ leží priamka nad parabolou. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.": "Puntos de intersección: $x^2={@0}$, es decir, $x=0$ y $x={@1}$. En $\\langle 0; {@2}\\rangle$ la recta está por encima de la parábola. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.",
  "Primitívna funkcia je $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Vypočítaj $F(1)$. Zadaj zlomok alebo celé číslo.": "Una primitiva es $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Calcula $F(1)$. Escribe una fracción o un número entero.",
  "Primitívna funkcia je $F(x)={@0}$. Vypočítaj $F({@1})$.": "Una primitiva es $F(x)={@0}$. Calcula $F({@1})$.",
  "Primitívna funkcia je $F(x)={@0}x-\\frac{x^3}{3}$. Vypočítaj $F({@1})$. Zadaj zlomok alebo celé číslo.": "Una primitiva es $F(x)={@0}x-\\frac{x^3}{3}$. Calcula $F({@1})$. Escribe una fracción o un número entero.",
  "Prvá nerovnica má riešenie $x&gt;c$. Aké je číslo $c$?": "La primera inecuación tiene la solución $x&gt;c$. ¿Cuál es el número $c$?",
  "Prvá nerovnica: ${@0} {@1} {@2}$, po delení číslom ${@3}$ {@4}$x&gt;{@5}$. Druhá: ${@6} {@7} {@8}$, odtiaľ {@9}$x\\le {@10}$. Prienik je $({@11}; {@12}\\rangle$. {@13}": "Primera inecuación: ${@0} {@1} {@2}$; después de dividir entre ${@3}$ {@4}$x&gt;{@5}$. Segunda: ${@6} {@7} {@8}$, de donde {@9}$x\\le {@10}$. La intersección es $({@11}; {@12}\\rangle$. {@13}",
  "Práve jeden môže byť prvý aj druhý strelec. Sčítaj pravdepodobnosti oboch možností.": "«Exactamente uno» puede ser tanto el primer tirador como el segundo. Suma las probabilidades de ambas posibilidades.",
  "Párna funkcia spĺňa $f(-x)=f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Una función par cumple $f(-x)=f(x)$ para todo $x$ del dominio. Sustituye, por ejemplo, $x=1$ y $x=-1$ y compara.",
  "RADAR": "RADAR",
  "Relatívna početnosť je $\\frac{n_i}{n}$, v percentách ju vynásob číslom 100.": "La frecuencia relativa es $\\frac{n_i}{n}$; para expresarla en porcentaje, multiplícala por 100.",
  "Rez nemá polomer gule. Polomer rezu $\\rho$ najprv vypočítaj z pravouhlého trojuholníka.": "La sección no tiene el radio de la esfera. Calcula primero el radio de la sección $\\rho$ a partir del triángulo rectángulo.",
  "Riešime ${@0}^{{@1}}{@2}={@3}$. Čomu sa rovná mocnina ${@4}^{{@5}}$?": "Resolvemos ${@0}^{{@1}}{@2}={@3}$. ¿A qué es igual la potencia ${@4}^{{@5}}$?",
  "Rotačný kužeľ má polomer podstavy $r={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}. {@3}": "Un cono de revolución tiene radio de la base $r={@0}\\,\\text{cm}$ y altura $v={@1}\\,\\text{cm}$. Calcula {@2}. {@3}",
  "Rovina $\\rho: {@0}+d=0$ prechádza bodom $P{@1}$. Vypočítaj $d$.": "El plano $\\rho: {@0}+d=0$ pasa por el punto $P{@1}$. Calcula $d$.",
  "Rovina ${@0}$ má normálový vektor $\\vec{n}={@1}$ a rovnicu ${@2}+d=0$. Vypočítaj $d$.": "El plano ${@0}$ tiene vector normal $\\vec{n}={@1}$ y ecuación ${@2}+d=0$. Calcula $d$.",
  "Rovnica $x^2+px{@0}=0$ má koreň $x_1={@1}$. Urči parameter $p$ a druhý koreň $x_2$ (zadaj ich v tomto poradí, napr. -5; 3).": "La ecuación $x^2+px{@0}=0$ tiene la raíz $x_1={@1}$. Determina el parámetro $p$ y la segunda raíz $x_2$ (escríbelos en este orden, por ejemplo, -5; 3).",
  "Rovnicu si zrejme vydelil výrazom ${@0}$ a stratil si riešenia, v ktorých je nulový. Vyber ho pred zátvorku.": "Probablemente has dividido la ecuación entre la expresión ${@0}$ y has perdido las soluciones en las que vale cero. Sácala factor común.",
  "Rovnobežné priamky majú smerové vektory, ktoré sú násobkami seba. Porovnaj smerové vektory.": "Las rectas paralelas tienen vectores directores que son múltiplos uno del otro. Compara los vectores directores.",
  "Rovnobežné roviny majú normálové vektory, ktoré sú násobkami seba. Porovnaj normálové vektory.": "Los planos paralelos tienen vectores normales que son múltiplos uno del otro. Compara los vectores normales.",
  "Rozdelíme prípady podľa poslednej cifry (musí byť {@0}); prvá cifra nesmie byť nula{@1}: {@2}. Spolu ${@3}$.": "Distinguimos casos según la última cifra (tiene que ser {@0}); la primera cifra no puede ser cero{@1}: {@2}. En total ${@3}$.",
  "Rozlož $f'(x)$ na súčin, nájdi nulové body a zisti, kde derivácia mení znamienko.": "Factoriza $f'(x)$, encuentra sus ceros y averigua dónde cambia de signo la derivada.",
  "Rozptyl binomického rozdelenia je $np(1-p)$, nezabudni na činiteľ $1-p$.": "La varianza de la distribución binomial es $np(1-p)$: no olvides el factor $1-p$.",
  "Rozpätie je rozdiel najväčšej a najmenšej hodnoty, nie poslednej a prvej hodnoty v zápise.": "El rango es la diferencia entre el valor mayor y el menor, no entre el último y el primer valor de la lista.",
  "Rozsadenia, ktoré sa líšia len otočením stola, sú rovnaké. Každé si takto započítal {@0}-krát.": "Las distribuciones que solo se diferencian en un giro de la mesa son iguales. Has contado cada una {@0} veces.",
  "Rozsah súboru $n={@0}={@1}$. Relatívna početnosť: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}": "Tamaño del conjunto $n={@0}={@1}$. Frecuencia relativa: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}",
  "Rôznobežné priamky majú spoločný bod, a teda ležia v jednej rovine. Nájdeš takú rovinu?": "Las rectas secantes tienen un punto común y, por tanto, están en un mismo plano. ¿Encuentras ese plano?",
  "Rôznobežné roviny majú normálové vektory, ktoré nie sú násobkami seba. Porovnaj normálové vektory.": "Los planos secantes tienen vectores normales que no son múltiplos uno del otro. Compara los vectores normales.",
  "Rúra má tvar dutého valca s vonkajším polomerom ${@0}\\,\\text{cm}$, vnútorným polomerom ${@1}\\,\\text{cm}$ a dĺžkou ${@2}\\,\\text{cm}$. Vypočítaj objem materiálu v $\\text{cm}^3$. {@3}": "Un tubo tiene forma de cilindro hueco con radio exterior ${@0}\\,\\text{cm}$, radio interior ${@1}\\,\\text{cm}$ y longitud ${@2}\\,\\text{cm}$. Calcula el volumen del material en $\\text{cm}^3$. {@3}",
  "S; v_c": "S; v_c",
  "Slovo má {@0} písmen, opakujú sa {@1}. Ide o permutácie s opakovaním: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.": "La palabra tiene {@0} letras; se repiten {@1}. Se trata de permutaciones con repetición: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.",
  "Smernica dotyčnice je $f'(x_0)$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a uprav.": "La pendiente de la tangente es $f'(x_0)$. Sustituye en $y=f(x_0)+f'(x_0)(x-x_0)$ y simplifica.",
  "Smerové vektory $\\vec{{@0}}={@1}$ a $\\vec{{@2}}={@3}$ sú násobkami seba a bod ${@4}$ na priamke ${@5}$ neleží, priamky sú rovnobežné.": "Los vectores directores $\\vec{{@0}}={@1}$ y $\\vec{{@2}}={@3}$ son múltiplos uno del otro y el punto ${@4}$ no está en la recta ${@5}$: las rectas son paralelas.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, priamky však ležia v jednej rovine a pretínajú sa v bode ${@2}$. Sú rôznobežné.": "Los vectores directores ${@0}$ y ${@1}$ no son múltiplos uno del otro, pero las rectas están en un mismo plano y se cortan en el punto ${@2}$. Son secantes.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, takže priamky nie sú rovnobežné; neležia ani v jednej rovine, preto nemajú spoločný bod. Sú mimobežné.": "Los vectores directores ${@0}$ y ${@1}$ no son múltiplos uno del otro, así que las rectas no son paralelas; tampoco están en un mismo plano, por eso no tienen ningún punto común. Se cruzan.",
  "Spolok má {@0} členov. Koľkými spôsobmi môžu zvoliť predsedu, podpredsedu a pokladníka (jedna osoba zastáva najviac jednu funkciu)?": "Una asociación tiene {@0} miembros. ¿De cuántas maneras pueden elegir presidente, vicepresidente y tesorero (una persona ocupa como máximo un cargo)?",
  "Spočítaj trojice kombináciami a využi opačný jav „samí chlapci“.": "Cuenta los tríos con combinaciones y aprovecha el suceso contrario «solo chicos».",
  "Stenová výška: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}": "Apotema: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}",
  "Strana kužeľa $s$ je prepona pravouhlého trojuholníka s odvesnami $r$ a $v$.": "La generatriz del cono $s$ es la hipotenusa de un triángulo rectángulo de catetos $r$ y $v$.",
  "Strana kužeľa: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.": "Generatriz del cono: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.",
  "Strana: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.": "Generatriz: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.",
  "Strany označíme $a-d$, $a$, $a+d$ (prepona je najdlhšia). Z obvodu $3a={@0}$, teda $a={@1}$. Pytagorova veta: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Strany sú ${@8}$, ${@9}$, ${@10}$ cm{@11}.": "Llamamos a los lados $a-d$, $a$, $a+d$ (la hipotenusa es el mayor). Del perímetro, $3a={@0}$, es decir, $a={@1}$. Teorema de Pitágoras: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Los lados miden ${@8}$, ${@9}$, ${@10}$ cm{@11}.",
  "Strany sú $a-d$, $a$, $a+d$. Z obvodu vypočítaj $a$.": "Los lados son $a-d$, $a$, $a+d$. Calcula $a$ a partir del perímetro.",
  "Strany zapíš ako $a-d$, $a$, $a+d$. Obvod dá $a$, Pytagorova veta potom diferenciu $d$.": "Escribe los lados como $a-d$, $a$, $a+d$. El perímetro da $a$, y el teorema de Pitágoras, después, la diferencia $d$.",
  "Stred je $S[{@0}; {@1}]$ a vektor $\\vec{ST}=({@2}; {@3})$ je kolmý na dotyčnicu, je to jej normálový vektor — preto má rovnica tvar ${@4}+c=0$. Dosadíme $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, teda $c={@9}$.": "El centro es $S[{@0}; {@1}]$ y el vector $\\vec{ST}=({@2}; {@3})$ es perpendicular a la tangente, es su vector normal; por eso la ecuación tiene la forma ${@4}+c=0$. Sustituimos $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, es decir, $c={@9}$.",
  "Stred kružnice je $S[{@0}; {@1}]$, polomer $r={@2}$. Vzdialenosť stredu od priamky: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Keďže $d{@10}r$, priamka je {@11}.": "El centro de la circunferencia es $S[{@0}; {@1}]$ y el radio $r={@2}$. Distancia del centro a la recta: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Como $d{@10}r$, la recta es {@11}.",
  "Stredový uhol: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.": "Ángulo central: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.",
  "Stĺpcový graf známok": "Diagrama de barras de las notas",
  "Stĺpcový graf známok v triede": "Diagrama de barras de las notas de la clase",
  "Substitúcia $u={@0}$ (alebo vzorec $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): primitívna funkcia je $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.": "Sustitución $u={@0}$ (o la fórmula $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): una primitiva es $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.",
  "Sú násobkami seba, roviny sú rovnobežné; bod ${@0}$ {@1} ${@2}$, preto sú roviny {@3}.": "Son múltiplos uno del otro: los planos son paralelos; el punto ${@0}$ {@1} ${@2}$, por eso los planos son {@3}.",
  "Súradnice bodu $P$ musia vyhovovať rovnici: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, teda ${@6}+d=0$ a $d={@7}$.": "Las coordenadas del punto $P$ tienen que cumplir la ecuación: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, es decir, ${@6}+d=0$ y $d={@7}$.",
  "Sústava nerovníc ${@0}$ a ${@1}$ má riešenie v $\\mathbb{R}$. {@2}": "El sistema de inecuaciones ${@0}$ y ${@1}$ tiene solución en $\\mathbb{R}$. {@2}",
  "Sústava rovníc s parametrom $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Pre ktorú hodnotu $m$ {@4}?": "Sistema de ecuaciones con el parámetro $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. ¿Para qué valor de $m$ {@4}?",
  "Súčet logaritmov je logaritmus súčinu: $\\log_2 u+\\log_2 v=\\log_2(uv)$, nie $\\log_2(u+v)$.": "La suma de logaritmos es el logaritmo del producto: $\\log_2 u+\\log_2 v=\\log_2(uv)$, no $\\log_2(u+v)$.",
  "Súčet s $d$ má byť nula. Koľko je $d$?": "La suma con $d$ tiene que ser cero. ¿Cuánto vale $d$?",
  "Súčet vekov pôvodných členov je ${@0}\\cdot {@1}={@2}$. Po príchode je súčet vekov ${@3}\\cdot {@4}={@5}$. Nový člen má ${@6}-{@7}={@8}$ rokov.": "La suma de las edades de los miembros originales es ${@0}\\cdot {@1}={@2}$. Después de la llegada, la suma de las edades es ${@3}\\cdot {@4}={@5}$. El nuevo miembro tiene ${@6}-{@7}={@8}$ años.",
  "Súčet známok treba deliť počtom žiakov $n$, nie počtom rôznych známok.": "La suma de las notas hay que dividirla entre el número de alumnos $n$, no entre el número de notas distintas.",
  "Súčet štvorcov odchýlok delíme počtom údajov $n={@0}$, nie číslom $n-1$ (tak je rozptyl definovaný v teórii).": "La suma de los cuadrados de las desviaciones se divide entre el número de datos $n={@0}$, no entre $n-1$ (así está definida la varianza en la teoría).",
  "Súčin dvoch nepárnych funkcií je párny: $(-x)\\sin(-x)=x\\sin x$.": "El producto de dos funciones impares es par: $(-x)\\sin(-x)=x\\sin x$.",
  "Súčin je nenulový, priamka rovinu pretína.": "El producto es distinto de cero: la recta corta el plano.",
  "Súčin je nepárny len vtedy, keď sú obe čísla nepárne: $3\\cdot 3=9$ výsledkov. Priaznivých je $36-9=27$.": "El producto es impar solo si los dos números son impares: $3\\cdot 3=9$ resultados. Los favorables son $36-9=27$.",
  "Súčin je nulový, priamka je s rovinou rovnobežná; bod ${@0}$ {@1}.": "El producto es cero, la recta es paralela al plano; el punto ${@0}$ {@1}.",
  "Súčin koreňov je $x_1x_2={@0}$. Aký je druhý koreň $x_2$?": "El producto de las raíces es $x_1x_2={@0}$. ¿Cuál es la segunda raíz $x_2$?",
  "Tabuľka": "Tabla",
  "Takto by to bolo pri jednoduchom úročení. Pri zloženom sa úročia aj pripísané úroky, suma sa každý rok násobí.": "Así sería con interés simple. Con interés compuesto, también los intereses abonados producen intereses; la cantidad se multiplica cada año.",
  "Takto by to bolo pri jednoduchom úročení. Úroky ostávajú na účte a ďalší rok sa úročia tiež, suma sa každý rok násobí.": "Así sería con interés simple. Los intereses se quedan en la cuenta y al año siguiente también producen intereses; la cantidad se multiplica cada año.",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{dm}$ a výškou ${@1}\\,\\text{dm}$, na ktorý je nasadený kužeľ s rovnakou podstavou a výškou ${@2}\\,\\text{dm}$. Vypočítaj objem telesa v $\\text{dm}^3$. {@3}": "Un cuerpo está formado por un cilindro de radio ${@0}\\,\\text{dm}$ y altura ${@1}\\,\\text{dm}$, sobre el que hay un cono con la misma base y altura ${@2}\\,\\text{dm}$. Calcula el volumen del cuerpo en $\\text{dm}^3$. {@3}",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{m}$ a výškou ${@1}\\,\\text{m}$, na ktorého hornej podstave je polguľa s rovnakým polomerom. Vypočítaj objem telesa v $\\text{m}^3$. {@2}": "Un cuerpo está formado por un cilindro de radio ${@0}\\,\\text{m}$ y altura ${@1}\\,\\text{m}$, sobre cuya base superior hay una semiesfera del mismo radio. Calcula el volumen del cuerpo en $\\text{m}^3$. {@2}",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "Eso es el cuadrado de la distancia. Calcula todavía la raíz del resultado.",
  "To je druhý spoločný bod. Pýtame sa na ten s menšou $x$-ovou súradnicou.": "Ese es el otro punto común. Preguntamos por el que tiene la menor coordenada $x$.",
  "To je druhý stacionárny bod, v ňom má funkcia lokálne {@0}. Pri maxime mení $f'$ znamienko z $+$ na $-$, pri minime z $-$ na $+$.": "Ese es el otro punto estacionario; en él la función tiene un {@0} local. En un máximo, $f'$ cambia de signo de $+$ a $-$; en un mínimo, de $-$ a $+$.",
  "To je dĺžka strany kolmej na stenu. Pýtame sa na stranu rovnobežnú so stenou, jej dĺžka je ${@0}-2x$.": "Esa es la longitud del lado perpendicular a la pared. Preguntamos por el lado paralelo a la pared, cuya longitud es ${@0}-2x$.",
  "To je len plášť ihlana. Povrch zahŕňa aj štvorcovú podstavu.": "Eso es solo la superficie lateral de la pirámide. El área total incluye también la base cuadrada.",
  "To je len plášť kužeľa. Povrch zahŕňa aj kruhovú podstavu $\\pi r^2$.": "Eso es solo la superficie lateral del cono. El área total incluye también la base circular $\\pi r^2$.",
  "To je len plášť. Povrch zahŕňa aj obe kruhové podstavy.": "Eso es solo la superficie lateral. El área total incluye también las dos bases circulares.",
  "To je nový priemerný vek. Pracuj so súčtami vekov: súčet = priemer · počet.": "Esa es la nueva edad media. Trabaja con las sumas de las edades: suma = media · número.",
  "To je objem hranola s rovnakou podstavou a výškou. Objem ihlana je jeho tretina.": "Ese es el volumen del prisma con la misma base y altura. El volumen de la pirámide es un tercio de él.",
  "To je objem valca. Objem kužeľa je jeho tretina.": "Ese es el volumen del cilindro. El volumen del cono es un tercio de él.",
  "To je obsah pod parabolou. Útvar je medzi dvoma krivkami, integruj rozdiel „horná mínus dolná“.": "Esa es el área bajo la parábola. La figura está entre dos curvas: integra la diferencia «de arriba menos la de abajo».",
  "To je obsah pod priamkou. Od neho ešte treba odčítať obsah pod parabolou.": "Esa es el área bajo la recta. Todavía hay que restarle el área bajo la parábola.",
  "To je pomer polomerov. Pri pretavení sa zachováva objem a objem rastie s treťou mocninou polomeru.": "Esa es la razón de los radios. Al fundir se conserva el volumen, y el volumen crece con el cubo del radio.",
  "To je početnosť najčastejšej hodnoty. Modus je samotná hodnota, ktorá sa vyskytuje najčastejšie.": "Esa es la frecuencia del valor más frecuente. La moda es el propio valor que aparece con más frecuencia.",
  "To je pravdepodobnosť opačného javu $X=0$. Odpočítaj ju od jednotky.": "Esa es la probabilidad del suceso contrario $X=0$. Réstala de uno.",
  "To je pravdepodobnosť opačného javu, že sa vyberú len chlapci. Odpočítaj ju od jednotky.": "Esa es la probabilidad del suceso contrario, que se elijan solo chicos. Réstala de uno.",
  "To je pravdepodobnosť opačného javu, že súčin je nepárny. Odpočítaj ju od jednotky.": "Esa es la probabilidad del suceso contrario, que el producto sea impar. Réstala de uno.",
  "To je pravdepodobnosť opačného javu, že šestka nepadne ani raz. Odpočítaj ju od jednotky.": "Esa es la probabilidad del suceso contrario, que no salga ningún seis. Réstala de uno.",
  "To je pravdepodobnosť práve jedného úspechu. „Aspoň jeden“ zahŕňa aj viac úspechov, použi opačný jav.": "Esa es la probabilidad de exactamente un éxito. «Al menos uno» incluye también más éxitos: usa el suceso contrario.",
  "To je pravdepodobnosť, že nezasiahnu obaja súčasne. Ani jeden znamená, že minú obaja.": "Esa es la probabilidad de que no acierten los dos a la vez. «Ninguno» significa que fallan los dos.",
  "To je pravdepodobnosť, že zasiahnu obaja. „Aspoň jeden“ zahŕňa aj prípady, keď zasiahne len jeden.": "Esa es la probabilidad de que acierten los dos. «Al menos uno» incluye también los casos en que acierta solo uno.",
  "To je priemer. Medián je prostredná hodnota usporiadaného súboru.": "Esa es la media. La mediana es el valor central del conjunto ordenado.",
  "To je prostredná strana. Prepona je najdlhšia strana trojuholníka.": "Ese es el lado intermedio. La hipotenusa es el lado más largo del triángulo.",
  "To je rozptyl. Smerodajná odchýlka je jeho druhá odmocnina.": "Esa es la varianza. La desviación típica es su raíz cuadrada.",
  "To je smerodajná odchýlka. Rozptyl je jej druhá mocnina, $D(X)=np(1-p)$.": "Esa es la desviación típica. La varianza es su cuadrado, $D(X)=np(1-p)$.",
  "To je smerodajná odchýlka. Rozptyl sa neodmocňuje.": "Esa es la desviación típica. La varianza no lleva raíz.",
  "To je strana odstrihnutého štvorca. Pýtame sa na objem krabice.": "Ese es el lado del cuadrado recortado. Preguntamos por el volumen de la caja.",
  "To je stredový uhol výseče v stupňoch. Percentá sú časť zo $100$, nie z $360$.": "Ese es el ángulo central del sector en grados. Los porcentajes son una parte de $100$, no de $360$.",
  "To je uhol priamky s normálovým vektorom roviny. Uhol s rovinou ho dopĺňa do $90^\\circ$: s normálou počítaj $\\sin\\varphi$, nie $\\cos\\varphi$.": "Ese es el ángulo de la recta con el vector normal del plano. El ángulo con el plano es su complementario hasta $90^\\circ$: con la normal calcula $\\sin\\varphi$, no $\\cos\\varphi$.",
  "To je vzdialenosť bodov ${@0}$ a ${@1}$. Vzdialenosť od priamky sa meria kolmo na priamku.": "Esa es la distancia entre los puntos ${@0}$ y ${@1}$. La distancia a una recta se mide perpendicularmente a la recta.",
  "To sú $y$-ové súradnice priesečníkov. Zadaj ich $x$-ové súradnice.": "Esas son las coordenadas $y$ de los puntos de intersección. Escribe sus coordenadas $x$.",
  "To sú hodnoty substitúcie $t={@0}$. Z definície logaritmu ešte vypočítaj $x={@1}^{t}$.": "Esos son los valores de la sustitución $t={@0}$. Con la definición de logaritmo calcula todavía $x={@1}^{t}$.",
  "To sú hodnoty substitúcie $t={@0}^{x}$. Ešte sa vráť k neznámej $x$.": "Esos son los valores de la sustitución $t={@0}^{x}$. Vuelve todavía a la incógnita $x$.",
  "To sú percentá. Stredový uhol je rovnaká časť z celého uhla $360^\\circ$, nie zo $100$.": "Eso son porcentajes. El ángulo central es la misma parte del ángulo completo $360^\\circ$, no de $100$.",
  "To sú všetky spojnice dvojíc vrcholov, aj strany mnohouholníka. Strany treba odčítať.": "Esos son todos los segmentos que unen pares de vértices, también los lados del polígono. Hay que restar los lados.",
  "Totožné priamky majú všetky body spoločné. Over, či oba body jednej priamky ležia na druhej.": "Las rectas coincidentes tienen todos los puntos en común. Comprueba si los dos puntos de una recta están en la otra.",
  "Totožné roviny majú všetky body spoločné. Over, či všetky tri body druhej roviny ležia v prvej.": "Los planos coincidentes tienen todos los puntos en común. Comprueba si los tres puntos del segundo plano están en el primero.",
  "Trojuholník má vrcholy $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Vypočítaj jeho obsah $S$ a výšku $v_c$ na stranu $AB$. Zadaj $S$ a $v_c$ (zaokrúhlenú na 2 desatinné miesta) oddelené bodkočiarkou.": "Un triángulo tiene los vértices $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Calcula su área $S$ y la altura $v_c$ sobre el lado $AB$. Escribe $S$ y $v_c$ (redondeada a 2 decimales) separados por punto y coma.",
  "Tu je $f''(x)&lt;0$, funkcia je tam konkávna. Pri delení nerovnice záporným číslom nezabudni otočiť znak nerovnosti.": "Aquí es $f''(x)&lt;0$, la función es cóncava allí. Al dividir la inecuación entre un número negativo no olvides invertir el signo de desigualdad.",
  "Tu je funkcia {@0}. Skontroluj znamienko $f'$: medzi koreňmi má opačné znamienko ako vedúci koeficient ${@1}$.": "Aquí la función es {@0}. Comprueba el signo de $f'$: entre las raíces tiene el signo contrario al del coeficiente principal ${@1}$.",
  "Táto podmienka zodpovedá $D&gt;0$, teda dvom rôznym reálnym koreňom.": "Esta condición corresponde a $D&gt;0$, es decir, a dos raíces reales distintas.",
  "Táto podmienka zodpovedá $D&lt;0$, rovnica potom nemá reálny koreň.": "Esta condición corresponde a $D&lt;0$; la ecuación entonces no tiene raíces reales.",
  "Táto podmienka zodpovedá $D=0$, teda jednému dvojnásobnému koreňu.": "Esta condición corresponde a $D=0$, es decir, a una raíz doble.",
  "Táto podmienka zodpovedá $D\\ge 0$, teda aspoň jednému reálnemu koreňu.": "Esta condición corresponde a $D\\ge 0$, es decir, a al menos una raíz real.",
  "Táto podmienka zodpovedá $D\\le 0$: zahŕňa dvojnásobný koreň aj prípad bez reálnych koreňov.": "Esta condición corresponde a $D\\le 0$: incluye la raíz doble y también el caso sin raíces reales.",
  "Uhol dvoch priamok je najviac $90^\\circ$. Vo vzorci pre $\\cos\\varphi$ je v čitateli absolútna hodnota skalárneho súčinu.": "El ángulo de dos rectas es como máximo $90^\\circ$. En la fórmula de $\\cos\\varphi$, en el numerador está el valor absoluto del producto escalar.",
  "Uhol priamky s rovinou počítaj cez normálový vektor roviny: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Alebo nájdi priemet priamky do roviny a pravouhlý trojuholník.": "El ángulo de una recta con un plano calcúlalo mediante el vector normal del plano: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. O encuentra la proyección de la recta sobre el plano y un triángulo rectángulo.",
  "Uhol priamok je uhol ich smerových vektorov z intervalu $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.": "El ángulo de dos rectas es el ángulo de sus vectores directores del intervalo $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.",
  "Umiestni kocku do súradnicovej sústavy, zapíš súradnice oboch bodov (stred hrany je priemer koncových bodov) a použi vzorec pre vzdialenosť.": "Coloca el cubo en un sistema de coordenadas, escribe las coordenadas de los dos puntos (el punto medio de una arista es la media de sus extremos) y usa la fórmula de la distancia.",
  "Uprav $f(-x)$: využi $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ a $\\cos(-x)=\\cos x$. Potom porovnaj s $f(x)$ aj s $-f(x)$.": "Simplifica $f(-x)$: aprovecha $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ y $\\cos(-x)=\\cos x$. Después compara con $f(x)$ y con $-f(x)$.",
  "Uprav rovnicu na tvar $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Aké je číslo $r$? Zadaj zlomok alebo celé číslo.": "Lleva la ecuación a la forma $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. ¿Cuál es el número $r$? Escribe una fracción o un número entero.",
  "Upravíme: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Pre $x\\to 0$ aj $t={@6}x\\to 0$ a $\\frac{\\sin t}{t}\\to 1$. Limita je ${@7}{@8}$.": "Transformamos: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Para $x\\to 0$ también $t={@6}x\\to 0$ y $\\frac{\\sin t}{t}\\to 1$. El límite es ${@7}{@8}$.",
  "Urči asymptoty grafu funkcie $f(x)=\\dfrac{{@0}}{{@1}}$. Zadaj číslo zo zvislej asymptoty $x=\\dots$ a potom číslo z vodorovnej asymptoty $y=\\dots$ (napr. 2; -1/2).": "Determina las asíntotas de la gráfica de la función $f(x)=\\dfrac{{@0}}{{@1}}$. Escribe el número de la asíntota vertical $x=\\dots$ y después el número de la asíntota horizontal $y=\\dots$ (por ejemplo, 2; -1/2).",
  "Urči jednostrannú limitu $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.": "Determina el límite lateral $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.",
  "Urči podmienky, súčet logaritmov zapíš ako logaritmus súčinu a odlogaritmuj. Nájdené korene porovnaj s podmienkami.": "Determina las condiciones, escribe la suma de logaritmos como logaritmo del producto y quita los logaritmos. Compara las raíces encontradas con las condiciones.",
  "Urči vzájomnú polohu priamky $p: {@0}=0$ a kružnice $k: {@1}$.": "Determina la posición relativa de la recta $p: {@0}=0$ y la circunferencia $k: {@1}$.",
  "Usporiadaný súbor: ${@0}$ ($n={@1}$). {@2}": "Conjunto ordenado: ${@0}$ ($n={@1}$). {@2}",
  "V $P(X=1)$ chýba kombinačné číslo $\\binom{{@0}}{1}={@1}$: úspech môže nastať v ktoromkoľvek pokuse.": "En $P(X=1)$ falta el número combinatorio $\\binom{{@0}}{1}={@1}$: el éxito puede ocurrir en cualquiera de los ensayos.",
  "V kocke $ABCDEFGH$ (podstava $ABCD$, nad ňou $EFGH$, hrany $AE$, $BF$, $CG$, $DH$) urči vzájomnú polohu priamok ${@0}$ a ${@1}$.": "En el cubo $ABCDEFGH$ (base $ABCD$, encima $EFGH$, aristas $AE$, $BF$, $CG$, $DH$) determina la posición relativa de las rectas ${@0}$ y ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu priamky ${@0}$ a roviny ${@1}$.": "En el cubo $ABCDEFGH$ determina la posición relativa de la recta ${@0}$ y el plano ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu rovín ${@0}$ a ${@1}$.": "En el cubo $ABCDEFGH$ determina la posición relativa de los planos ${@0}$ y ${@1}$.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamky ${@0}$ s rovinou ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "En el cubo $ABCDEFGH$ calcula el ángulo de la recta ${@0}$ con el plano ${@1}$ en grados. Redondea el resultado a las décimas de grado.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamok ${@0}$ a ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "En el cubo $ABCDEFGH$ calcula el ángulo de las rectas ${@0}$ y ${@1}$ en grados. Redondea el resultado a las décimas de grado.",
  "V kocke s hranou $1$ je smerový vektor priamky $\\vec{u}={@0}$ a rovina ${@1}$ je stena kocky s normálovým vektorom $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, teda $\\varphi\\approx {@6}^\\circ$.": "En un cubo de arista $1$, el vector director de la recta es $\\vec{u}={@0}$ y el plano ${@1}$ es una cara del cubo con vector normal $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, es decir, $\\varphi\\approx {@6}^\\circ$.",
  "V kocke s hranou $1$ sú smerové vektory $\\vec{u}=\\vec{{@0}}={@1}$ a $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, teda $\\varphi\\approx {@8}^\\circ$.": "En un cubo de arista $1$, los vectores directores son $\\vec{u}=\\vec{{@0}}={@1}$ y $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, es decir, $\\varphi\\approx {@8}^\\circ$.",
  "V krúžku je {@0} chlapcov a {@1} {@2}. Na súťaž náhodne vyberieme troch členov. Aká je pravdepodobnosť, že medzi nimi bude aspoň jedno dievča? {@3}": "En un club hay {@0} chicos y {@1} {@2}. Para un concurso elegimos al azar a tres miembros. ¿Cuál es la probabilidad de que entre ellos haya al menos una chica? {@3}",
  "V ktorom z bodov ${@0}$, ${@1}$ má funkcia {@2}?": "¿En cuál de los puntos ${@0}$, ${@1}$ tiene la función un {@2}?",
  "V percentách ${@0}\\,\\%$.": "En porcentaje, ${@0}\\,\\%$.",
  "V pravouhlom trojuholníku s výškou ihlana a stenovou výškou je druhou odvesnou polovica podstavnej hrany, nie celá hrana.": "En el triángulo rectángulo formado por la altura de la pirámide y la apotema, el otro cateto es la mitad de la arista de la base, no la arista entera.",
  "V rade záleží na tom, kto sedí na ktorej stoličke: otočenie tu nehrá rolu, usporiadaj všetkých ľudí.": "En una fila importa quién se sienta en qué silla: aquí el giro no tiene importancia, ordena a todas las personas.",
  "V rovnici $y=ax+b$ vymeň $x$ a $y$ a vyjadri $y$.": "En la ecuación $y=ax+b$ intercambia $x$ e $y$ y despeja $y$.",
  "V skupine nezáleží na poradí, ide o kombinácie, nie variácie.": "En un grupo el orden no importa: se trata de combinaciones, no de variaciones.",
  "V spoločnom bode majú obe funkcie rovnakú hodnotu: polož pravé strany rovné a vyrieš kvadratickú rovnicu.": "En un punto común las dos funciones tienen el mismo valor: iguala los lados derechos y resuelve la ecuación de segundo grado.",
  "V triede je {@0} chlapcov a {@1} dievčat. Koľkými spôsobmi môžeme vybrať skupinu, v ktorej budú {@2} a {@3}?": "En una clase hay {@0} chicos y {@1} chicas. ¿De cuántas maneras podemos elegir un grupo en el que haya {@2} y {@3}?",
  "V urne sú gule: {@0} {@1} a {@2} {@3}. Naraz náhodne vytiahneme dve. Aká je pravdepodobnosť, že {@4}? {@5}": "En una urna hay bolas: {@0} {@1} y {@2} {@3}. Sacamos a la vez al azar dos. ¿Cuál es la probabilidad de que {@4}? {@5}",
  "Valec: $\\pi r^2v={@0}\\pi$. Kužeľ: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.": "Cilindro: $\\pi r^2v={@0}\\pi$. Cono: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. En total, $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.",
  "Valec: $\\pi r^2v={@0}\\pi$. Polguľa: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.": "Cilindro: $\\pi r^2v={@0}\\pi$. Semiesfera: $\\frac{2}{3}\\pi r^3={@1}\\pi$. En total, $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.",
  "Variačné rozpätie je rozdiel najväčšej a najmenšej hodnoty.": "El rango es la diferencia entre el valor mayor y el menor.",
  "Vklad je úročený ročne sadzbou ${@0}\\,\\%$ (zložené úročenie, bez dane). Po koľkých rokoch sa prvýkrát aspoň {@1}?": "Un depósito produce intereses anuales a un tipo del ${@0}\\,\\%$ (interés compuesto, sin impuestos). ¿Al cabo de cuántos años se {@1} como mínimo por primera vez?",
  "Vo vzorci je výška delená tromi: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.": "En la fórmula, la altura está dividida entre tres: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.",
  "Vo vzorci pre objem zrezaného kužeľa je výška delená tromi: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "En la fórmula del volumen del tronco de cono, la altura está dividida entre tres: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Vráť sa k $x$ a zadaj všetky riešenia (zlomok napr. ako 1/2).": "Vuelve a $x$ y escribe todas las soluciones (una fracción, por ejemplo, como 1/2).",
  "Vydelíme obe strany výrazom ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Zlogaritmujeme: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, teda $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.": "Dividimos ambos lados entre la expresión ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Tomamos logaritmos: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, es decir, $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.",
  "Vyjadri diskriminant pomocou $p$ a podľa požadovaného počtu koreňov urči, či má byť kladný, nulový alebo záporný.": "Expresa el discriminante en función de $p$ y, según el número de raíces pedido, determina si tiene que ser positivo, cero o negativo.",
  "Vyjadri goniometrickú funkciu, nájdi riešenia v jednej perióde a pripočítaj násobky periódy ($2\\pi$ pre sínus a kosínus, $\\pi$ pre tangens).": "Despeja la función trigonométrica, encuentra las soluciones en un período y suma múltiplos del período ($2\\pi$ para el seno y el coseno, $\\pi$ para la tangente).",
  "Vyjadri objem ako funkciu strany odstrihnutého štvorca, zderivuj ju a nájdi stacionárny bod v prípustnom intervale.": "Expresa el volumen como función del lado del cuadrado recortado, derívala y encuentra el punto estacionario en el intervalo admisible.",
  "Vymeníme $x$ a $y$: $x={@0}$, odtiaľ ${@1}y={@2}$ a $y=\\dfrac{{@3}}{{@4}}$. Teda $f^{-1}(x)={@5}x{@6}{@7}$, čiže $k={@8}$ a $q={@9}$.": "Intercambiamos $x$ e $y$: $x={@0}$, de donde ${@1}y={@2}$ e $y=\\dfrac{{@3}}{{@4}}$. Por tanto, $f^{-1}(x)={@5}x{@6}{@7}$, es decir, $k={@8}$ y $q={@9}$.",
  "Vypočítaj $F(-{@0})$.": "Calcula $F(-{@0})$.",
  "Vypočítaj $F(0)$.": "Calcula $F(0)$.",
  "Vypočítaj $F(1)-F(0)$. Zadaj zlomok alebo celé číslo.": "Calcula $F(1)-F(0)$. Escribe una fracción o un número entero.",
  "Vypočítaj $F({@0})$.": "Calcula $F({@0})$.",
  "Vypočítaj $F({@0})-F({@1})$.": "Calcula $F({@0})-F({@1})$.",
  "Vypočítaj $P(X=0)$. {@0}": "Calcula $P(X=0)$. {@0}",
  "Vypočítaj $P(X=1)$. {@0}": "Calcula $P(X=1)$. {@0}",
  "Vypočítaj $P(X={@0})$. {@1}": "Calcula $P(X={@0})$. {@1}",
  "Vypočítaj $P(X\\ge 1)$. {@0}": "Calcula $P(X\\ge 1)$. {@0}",
  "Vypočítaj $P(X\\le 1)$. {@0}": "Calcula $P(X\\le 1)$. {@0}",
  "Vypočítaj $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}": "Calcula $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}",
  "Vypočítaj $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcula $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Escribe el resultado como fracción o número entero.",
  "Vypočítaj $\\int_0^{{@0}} x^2\\,dx$. Zadaj zlomok alebo celé číslo.": "Calcula $\\int_0^{{@0}} x^2\\,dx$. Escribe una fracción o un número entero.",
  "Vypočítaj $\\int_0^{{@0}} {@1}\\,dx$.": "Calcula $\\int_0^{{@0}} {@1}\\,dx$.",
  "Vypočítaj $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok.": "Calcula $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Escribe el resultado como número entero o fracción.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Výsledok zadaj ako zlomok.": "Calcula $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Escribe el resultado como fracción.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.": "Calcula $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.",
  "Vypočítaj $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok (napr. -3/2).": "Calcula $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Escribe el resultado como número entero o fracción (por ejemplo, -3/2).",
  "Vypočítaj $k$.": "Calcula $k$.",
  "Vypočítaj $t$ z prvej súradnice a dosaď ho do zvyšných dvoch rovníc. Over starostlivo obe.": "Calcula $t$ a partir de la primera coordenada y sustitúyelo en las otras dos ecuaciones. Comprueba con cuidado las dos.",
  "Vypočítaj $|AB|^2$.": "Calcula $|AB|^2$.",
  "Vypočítaj $|\\vec u\\cdot\\vec n|$ pre $\\vec u=\\vec{{@0}}$ a normálový vektor $\\vec n={@1}$ (kocka s hranou $1$).": "Calcula $|\\vec u\\cdot\\vec n|$ para $\\vec u=\\vec{{@0}}$ y el vector normal $\\vec n={@1}$ (cubo de arista $1$).",
  "Vypočítaj $|{@0}K|$ v cm. {@1}": "Calcula $|{@0}K|$ en cm. {@1}",
  "Vypočítaj $|{@0}K|^2$.": "Calcula $|{@0}K|^2$.",
  "Vypočítaj absolútny člen $q$.": "Calcula el término independiente $q$.",
  "Vypočítaj aritmetický priemer $\\bar{x}$.": "Calcula la media aritmética $\\bar{x}$.",
  "Vypočítaj determinant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.": "Calcula el determinante $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.",
  "Vypočítaj druhú deriváciu. Pre aké $x$ je $f''(x)=0$?": "Calcula la segunda derivada. ¿Para qué $x$ es $f''(x)=0$?",
  "Vypočítaj hodnotu v pravom krajnom bode, $f({@0})$.": "Calcula el valor en el extremo derecho, $f({@0})$.",
  "Vypočítaj hodnotu v ľavom krajnom bode, $f({@0})$.": "Calcula el valor en el extremo izquierdo, $f({@0})$.",
  "Vypočítaj objem celého telesa v $\\text{dm}^3$. {@0}": "Calcula el volumen de todo el cuerpo en $\\text{dm}^3$. {@0}",
  "Vypočítaj objem celého telesa v $\\text{m}^3$. {@0}": "Calcula el volumen de todo el cuerpo en $\\text{m}^3$. {@0}",
  "Vypočítaj objem dutiny s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Calcula el volumen del hueco de radio ${@0}\\,\\text{cm}$ en $\\text{cm}^3$. {@1}",
  "Vypočítaj objem kužeľa v $\\text{dm}^3$. {@0}": "Calcula el volumen del cono en $\\text{dm}^3$. {@0}",
  "Vypočítaj objem materiálu v $\\text{cm}^3$. {@0}": "Calcula el volumen del material en $\\text{cm}^3$. {@0}",
  "Vypočítaj objem plného valca s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Calcula el volumen del cilindro macizo de radio ${@0}\\,\\text{cm}$ en $\\text{cm}^3$. {@1}",
  "Vypočítaj objem polgule v $\\text{m}^3$. {@0}": "Calcula el volumen de la semiesfera en $\\text{m}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$. {@0}": "Calcula el volumen en $\\text{cm}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$.{@0}": "Calcula el volumen en $\\text{cm}^3$.{@0}",
  "Vypočítaj objem valca v $\\text{dm}^3$. {@0}": "Calcula el volumen del cilindro en $\\text{dm}^3$. {@0}",
  "Vypočítaj objem valca v $\\text{m}^3$. {@0}": "Calcula el volumen del cilindro en $\\text{m}^3$. {@0}",
  "Vypočítaj obsah $S$.": "Calcula el área $S$.",
  "Vypočítaj obsah podstavy $S_p$ v $\\text{cm}^2$. {@0}": "Calcula el área de la base $S_p$ en $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah rezu v $\\text{cm}^2$. {@0}": "Calcula el área de la sección en $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah v $\\text{cm}^2$.": "Calcula el área en $\\text{cm}^2$.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y=x^2$ a priamkou $y={@0}$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcula el área de la figura limitada por la parábola $y=x^2$ y la recta $y={@0}$. Escribe el resultado como fracción o número entero.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y={@0}-x^2$ a osou $x$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcula el área de la figura limitada por la parábola $y={@0}-x^2$ y el eje $x$. Escribe el resultado como fracción o número entero.",
  "Vypočítaj obsah časti roviny, ktorú určuje sústava nerovníc $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.": "Calcula el área de la parte del plano determinada por el sistema de inecuaciones $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.",
  "Vypočítaj polomer gule v cm.": "Calcula el radio de la esfera en cm.",
  "Vypočítaj polomer rezu $\\rho$ v cm.": "Calcula el radio de la sección $\\rho$ en cm.",
  "Vypočítaj povrch ihlana v $\\text{cm}^2$.": "Calcula el área total de la pirámide en $\\text{cm}^2$.",
  "Vypočítaj povrch v $\\text{cm}^2$. {@0}": "Calcula el área total en $\\text{cm}^2$. {@0}",
  "Vypočítaj priemer, potom priemer druhých mocnín odchýlok od neho. Smerodajná odchýlka je odmocnina z rozptylu.": "Calcula la media y después la media de los cuadrados de las desviaciones respecto a ella. La desviación típica es la raíz de la varianza.",
  "Vypočítaj priemernú známku. {@0}": "Calcula la nota media. {@0}",
  "Vypočítaj rozptyl $D(X)$.": "Calcula la varianza $D(X)$.",
  "Vypočítaj rozptyl $s^2$. {@0}": "Calcula la varianza $s^2$. {@0}",
  "Vypočítaj skalárny súčin smerových vektorov $\\vec{{@0}}\\cdot\\vec{{@1}}$ (kocka s hranou $1$).": "Calcula el producto escalar de los vectores directores $\\vec{{@0}}\\cdot\\vec{{@1}}$ (cubo de arista $1$).",
  "Vypočítaj smernicu $k=f'({@0})$.": "Calcula la pendiente $k=f'({@0})$.",
  "Vypočítaj smerodajnú odchýlku $s$. {@0}": "Calcula la desviación típica $s$. {@0}",
  "Vypočítaj stranu $s$ v cm.": "Calcula la generatriz $s$ en cm.",
  "Vypočítaj stranu kužeľa $s$ v cm.": "Calcula la generatriz del cono $s$ en cm.",
  "Vypočítaj strednú hodnotu $E(X)$ (zlomok alebo desatinné číslo aspoň na 2 miesta).": "Calcula la esperanza $E(X)$ (fracción o número decimal con al menos 2 decimales).",
  "Vypočítaj súčet $R^2+Rr+r^2$.": "Calcula la suma $R^2+Rr+r^2$.",
  "Vypočítaj súčet $a_1^2+a_1a_2+a_2^2$.": "Calcula la suma $a_1^2+a_1a_2+a_2^2$.",
  "Vypočítaj súčet druhých mocnín odchýlok od priemeru.": "Calcula la suma de los cuadrados de las desviaciones respecto a la media.",
  "Vypočítaj uhol priamky s rovinou v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Calcula el ángulo de la recta con el plano en grados. Redondea el resultado a las décimas de grado.",
  "Vypočítaj uhol priamok v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Calcula el ángulo de las rectas en grados. Redondea el resultado a las décimas de grado.",
  "Vypočítaj vzdialenosť bodu ${@0}$ od roviny v cm. {@1}": "Calcula la distancia del punto ${@0}$ al plano en cm. {@1}",
  "Vypočítaj výšku $v_c$. {@0}": "Calcula la altura $v_c$. {@0}",
  "Vypočítaj {@0} hodnotu funkcie $f(x)={@1}$ na intervale $\\langle {@2}; {@3}\\rangle$.": "Calcula el valor {@0} de la función $f(x)={@1}$ en el intervalo $\\langle {@2}; {@3}\\rangle$.",
  "Vypočítaj {@0} súboru ${@1}$. {@2}": "Calcula {@0} del conjunto ${@1}$. {@2}",
  "Vypočítaj {@0} v $\\text{cm}^2$. {@1}": "Calcula {@0} en $\\text{cm}^2$. {@1}",
  "Vypočítaj {@0}. {@1}": "Calcula {@0}. {@1}",
  "Vypočítal si $f\\!\\left({@0}\\right)$. Hodnota $f^{-1}(c)$ je však číslo $x$, pre ktoré $f(x)=c$.": "Has calculado $f\\!\\left({@0}\\right)$. Sin embargo, el valor $f^{-1}(c)$ es el número $x$ para el que $f(x)=c$.",
  "Vypĺňaj miesta postupne a použi pravidlo súčinu. Prvá cifra nesmie byť nula; pri podmienke na deliteľnosť začni poslednou cifrou a rozdeľ prípady.": "Rellena las posiciones una a una y usa el principio del producto. La primera cifra no puede ser cero; si hay una condición de divisibilidad, empieza por la última cifra y divide en casos.",
  "Vyrieš každú nerovnicu zvlášť (pozor na delenie záporným číslom) a urob prienik intervalov.": "Resuelve cada inecuación por separado (cuidado al dividir entre un número negativo) y haz la intersección de los intervalos.",
  "Vyrieš rovnicu $({@0})^2{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou (zlomok napr. ako 1/2).": "Resuelve la ecuación $({@0})^2{@1}{@2}=0$. Escribe todas las soluciones separadas por punto y coma (una fracción, por ejemplo, como 1/2).",
  "Vyrieš rovnicu $\\log_2({@0})+\\log_2({@1})={@2}$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Resuelve la ecuación $\\log_2({@0})+\\log_2({@1})={@2}$. Escribe todas las soluciones separadas por punto y coma.",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou (napr. 30; 150).": "Resuelve la ecuación ${@0}$ para {@1}. Escribe todas las soluciones en grados separadas por punto y coma (por ejemplo, 30; 150).",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou.": "Resuelve la ecuación ${@0}$ para {@1}. Escribe todas las soluciones en grados separadas por punto y coma.",
  "Vyrieš rovnicu ${@0}={@1}$. {@2}": "Resuelve la ecuación ${@0}={@1}$. {@2}",
  "Vyrieš rovnicu. Koľko vrcholov má mnohouholník?": "Resuelve la ecuación. ¿Cuántos vértices tiene el polígono?",
  "Vyrieš rovnicu. Koľko ľudí bolo na stretnutí?": "Resuelve la ecuación. ¿Cuántas personas había en la reunión?",
  "Vyrieš sústavu rovníc $x+y={@0}$, $x\\cdot y={@1}$. Zadaj všetky možné hodnoty $x$ oddelené bodkočiarkou.": "Resuelve el sistema de ecuaciones $x+y={@0}$, $x\\cdot y={@1}$. Escribe todos los valores posibles de $x$ separados por punto y coma.",
  "Vyrieš v $\\mathbb{R}$ rovnicu ${@0}^{x}{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Resuelve en $\\mathbb{R}$ la ecuación ${@0}^{x}{@1}{@2}=0$. Escribe todas las soluciones separadas por punto y coma.",
  "Využi $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: vynásob a vydeľ výraz tak, aby si v menovateli dostal ten istý argument ako v sínuse.": "Aprovecha $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: multiplica y divide la expresión de modo que en el denominador obtengas el mismo argumento que en el seno.",
  "Využi Vietove vzťahy: súčin koreňov je absolútny člen, súčet koreňov je $-p$. Alebo dosaď známy koreň do rovnice.": "Aprovecha las relaciones de Vieta: el producto de las raíces es el término independiente y la suma de las raíces es $-p$. O sustituye la raíz conocida en la ecuación.",
  "Vzdialenosť h od nuly": "Distancia h desde cero",
  "Vzorec $\\frac{\\sin t}{t}\\to 1$ platí, len keď je v menovateli presne argument sínusu, teda ${@0}x$. Výraz najprv uprav.": "La fórmula $\\frac{\\sin t}{t}\\to 1$ solo vale cuando en el denominador está exactamente el argumento del seno, es decir, ${@0}x$. Transforma primero la expresión.",
  "Výber chlapcov a výber dievčat sa navzájom nevylučujú, kombinujú sa. Použi pravidlo súčinu, nie súčtu.": "La elección de los chicos y la de las chicas no se excluyen, se combinan. Usa el principio del producto, no el de la suma.",
  "Výraz obsahuje len $x^2$, preto $f(-x)=f(x)$.": "La expresión contiene solo $x^2$, por eso $f(-x)=f(x)$.",
  "Výrobok je chybný s pravdepodobnosťou ${@0}$, nezávisle od ostatných. Náhodne vyberieme {@1} {@2}; $X$ je počet chybných.": "Un producto es defectuoso con probabilidad ${@0}$, independientemente de los demás. Elegimos al azar {@1} {@2}; $X$ es el número de defectuosos.",
  "Výseč má stredový uhol $\\frac{n_i}{n}\\cdot 360^\\circ$.": "El sector tiene ángulo central $\\frac{n_i}{n}\\cdot 360^\\circ$.",
  "Výsledky pokusu sú dvojice gúľ (kombinácie). Spočítaj všetky a priaznivé; pri „aspoň jedna“ je jednoduchší opačný jav.": "Los resultados del experimento son pares de bolas (combinaciones). Cuenta todos y los favorables; con «al menos una» es más fácil el suceso contrario.",
  "Výsledok dosaď do vonkajšej funkcie: ${@0}({@1})$.": "Sustituye el resultado en la función exterior: ${@0}({@1})$.",
  "Výsledok je usporiadaná dvojica (prvá kocka, druhá kocka), všetkých je 36. Spočítaj priaznivé dvojice.": "El resultado es un par ordenado (primer dado, segundo dado); hay 36 en total. Cuenta los pares favorables.",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Redondea el resultado a 2 decimales.",
  "Výsledok zaokrúhli na 4 desatinné miesta.": "Redondea el resultado a 4 decimales.",
  "Všetky hrany kocky zväčšíme o ${@0}\\,\\%$. O koľko percent sa zväčší jej {@1}? {@2}": "Aumentamos todas las aristas de un cubo un ${@0}\\,\\%$. ¿En qué porcentaje aumenta {@1} del cubo? {@2}",
  "Všetkých trojíc je $\\binom{{@0}}{3}={@1}$. Opačný jav — vyberú sa len chlapci — má $\\binom{{@2}}{3}={@3}$ možností. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.": "Hay $\\binom{{@0}}{3}={@1}$ tríos en total. El suceso contrario, que se elijan solo chicos, tiene $\\binom{{@2}}{3}={@3}$ posibilidades. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.",
  "Všetkých výberov dvoch gúľ je $\\binom{{@0}}{2}={@1}$. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.": "Hay $\\binom{{@0}}{2}={@1}$ selecciones de dos bolas en total. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.",
  "Všetkých výsledkov je $6\\cdot 6=36$. {@0} $P=\\frac{{@1}}{36}={@2}$.": "Hay $6\\cdot 6=36$ resultados en total. {@0} $P=\\frac{{@1}}{36}={@2}$.",
  "Z $\\frac{n(n-3)}{2}={@0}$ je $n^2-3n-{@1}=0$ a kladný koreň $n={@2}$.": "De $\\frac{n(n-3)}{2}={@0}$ se obtiene $n^2-3n-{@1}=0$, con raíz positiva $n={@2}$.",
  "Z Pytagorovej vety vypočítaj diferenciu $d$.": "Calcula la diferencia $d$ con el teorema de Pitágoras.",
  "Z Vietovho vzťahu $x_1x_2={@0}$ je $x_2=\\frac{{@1}}{{@2}}={@3}$. Zo vzťahu $x_1+x_2=-p$ je $p=-({@4}{@5})={@6}$. Kontrola dosadením: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓": "De la relación de Vieta $x_1x_2={@0}$ se obtiene $x_2=\\frac{{@1}}{{@2}}={@3}$. De la relación $x_1+x_2=-p$ se obtiene $p=-({@4}{@5})={@6}$. Comprobación sustituyendo: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓",
  "Z jednej súradnice vypočítaj parameter $t$ a over, či rovnaké $t$ vyhovuje aj ostatným súradniciam.": "Calcula el parámetro $t$ a partir de una coordenada y comprueba si el mismo $t$ cumple también las demás coordenadas.",
  "Z lineárnej rovnice vyjadri $y$ a dosaď do druhej. Dostaneš kvadratickú rovnicu pre $x$.": "De la ecuación lineal despeja $y$ y sustitúyelo en la otra. Obtienes una ecuación de segundo grado en $x$.",
  "Z podmienky $D=0$ vyjadri $p^2$. Koľko je $p^2$?": "De la condición $D=0$ despeja $p^2$. ¿Cuánto vale $p^2$?",
  "Z povrchu $S=4\\pi r^2$ vypočítaj polomer a dosaď ho do vzorca pre objem $V=\\frac{4}{3}\\pi r^3$.": "A partir del área $S=4\\pi r^2$ calcula el radio y sustitúyelo en la fórmula del volumen $V=\\frac{4}{3}\\pi r^3$.",
  "Z prvej rovnice $y={@0}$. Dosadíme: $x({@1})={@2} \\Rightarrow {@3}=0$, korene $x_1={@4}$, $x_2={@5}$. Riešenia sústavy sú $[{@6}; {@7}]$ a $[{@8}; {@9}]$, $x$ je teda ${@10}$ alebo ${@11}$.": "De la primera ecuación, $y={@0}$. Sustituimos: $x({@1})={@2} \\Rightarrow {@3}=0$, raíces $x_1={@4}$, $x_2={@5}$. Las soluciones del sistema son $[{@6}; {@7}]$ y $[{@8}; {@9}]$, así que $x$ es ${@10}$ o ${@11}$.",
  "Z rovnice $\\frac{n(n-1)}{2}={@0}$ vyjadri súčin $n(n-1)$. Koľko je?": "De la ecuación $\\frac{n(n-1)}{2}={@0}$ despeja el producto $n(n-1)$. ¿Cuánto vale?",
  "Z rovnice $\\frac{n(n-3)}{2}={@0}$ vyjadri súčin $n(n-3)$. Koľko je?": "De la ecuación $\\frac{n(n-3)}{2}={@0}$ despeja el producto $n(n-3)$. ¿Cuánto vale?",
  "Z rovnice ${@0}={@1}$ urči $x$-ové súradnice spoločných bodov.": "A partir de la ecuación ${@0}={@1}$ determina las coordenadas $x$ de los puntos comunes.",
  "Z rovnice kružnice zisti stred a polomer, potom vypočítaj vzdialenosť stredu od priamky a porovnaj ju s polomerom.": "A partir de la ecuación de la circunferencia averigua el centro y el radio; después calcula la distancia del centro a la recta y compárala con el radio.",
  "Z rovnice priamky vyjadri $y$, dosaď do rovnice kružnice a vyrieš kvadratickú rovnicu pre $x$.": "De la ecuación de la recta despeja $y$, sustitúyelo en la ecuación de la circunferencia y resuelve la ecuación de segundo grado en $x$.",
  "Z rovnice priamky vyjadríme $y={@0}$ a dosadíme do rovnice kružnice. Po úprave dostaneme ${@1}=0$ s koreňmi $x_1={@2}$, $x_2={@3}$. Priesečníky sú $[{@4}; {@5}]$ a $[{@6}; {@7}]$.": "De la ecuación de la recta despejamos $y={@0}$ y lo sustituimos en la ecuación de la circunferencia. Simplificando obtenemos ${@1}=0$, con raíces $x_1={@2}$, $x_2={@3}$. Los puntos de intersección son $[{@4}; {@5}]$ y $[{@6}; {@7}]$.",
  "Z rovníc ${@0}^{x}=t$ urči všetky riešenia $x$ (pamätaj, že ${@1}^{x}&gt;0$).": "A partir de las ecuaciones ${@0}^{x}=t$ determina todas las soluciones $x$ (recuerda que ${@1}^{x}&gt;0$).",
  "Zabudol si deliť veľkosťou normálového vektora $|\\vec n|=\\sqrt{{@0}}$.": "Has olvidado dividir entre el módulo del vector normal $|\\vec n|=\\sqrt{{@0}}$.",
  "Zabudol si na kombinačné číslo $\\binom{{@0}}{{@1}}$: úspešné pokusy môžu byť medzi všetkými pokusmi rozmiestnené rôznymi spôsobmi.": "Has olvidado el número combinatorio $\\binom{{@0}}{{@1}}$: los ensayos con éxito pueden estar distribuidos de distintas maneras entre todos los ensayos.",
  "Zabudol si na člen $u'v$: derivuj aj lineárnu funkciu v zátvorke.": "Has olvidado el término $u'v$: deriva también la función lineal del paréntesis.",
  "Zabudol si násobiť deriváciou vnútornej funkcie: $(\\sin kx)'=k\\cos kx$ a $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "Has olvidado multiplicar por la derivada de la función interior: $(\\sin kx)'=k\\cos kx$ y $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Zabudol si umocniť menovateľ: vo vzorci pre deriváciu podielu je v menovateli $v^2$.": "Has olvidado elevar al cuadrado el denominador: en la fórmula de la derivada del cociente, en el denominador está $v^2$.",
  "Zabudol si vynásobiť deriváciou vnútornej funkcie: $({@0})'={@1}$.": "Has olvidado multiplicar por la derivada de la función interior: $({@0})'={@1}$.",
  "Zadaj všetky hodnoty $p$.": "Escribe todos los valores de $p$.",
  "Zadaj všetky možné hodnoty $x$.": "Escribe todos los valores posibles de $x$.",
  "Zadaj všetky riešenia rovnice.": "Escribe todas las soluciones de la ecuación.",
  "Započítal si aj „čísla“ začínajúce nulou. Na prvom mieste nula byť nemôže.": "Has contado también «números» que empiezan por cero. En la primera posición no puede haber un cero.",
  "Zapíš ${@0}^{x}$ ako $({@1}^{x})^2$ a zaveď substitúciu $t={@2}^{x}$. Nezabudni, že $t$ musí byť kladné.": "Escribe ${@0}^{x}$ como $({@1}^{x})^2$ e introduce la sustitución $t={@2}^{x}$. No olvides que $t$ tiene que ser positivo.",
  "Zapíš menovateľ ako $(\\sqrt{x})^2-a^2$ a rozlož ho podľa vzorca $A^2-B^2=(A-B)(A+B)$.": "Escribe el denominador como $(\\sqrt{x})^2-a^2$ y factorízalo con la fórmula $A^2-B^2=(A-B)(A+B)$.",
  "Zapíš podmienku cez opačný jav $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ a vyrieš ju logaritmovaním.": "Escribe la condición mediante el suceso contrario, $\\left(\\frac{5}{6}\\right)^n&lt;1-p$, y resuélvela tomando logaritmos.",
  "Zapíš súčet prvých $n$ členov aritmetickej postupnosti a vyrieš nerovnicu $s_n\\ge$ požadovaný počet. Hľadáš najmenšie prirodzené $n$.": "Escribe la suma de los $n$ primeros términos de la progresión aritmética y resuelve la inecuación $s_n\\ge$ número pedido. Buscas el menor $n$ natural.",
  "Zaveď substitúciu $t={@0}$, vyrieš kvadratickú rovnicu a potom sa vráť k $x$ cez definíciu logaritmu.": "Introduce la sustitución $t={@0}$, resuelve la ecuación de segundo grado y después vuelve a $x$ mediante la definición de logaritmo.",
  "Zderivuj vonkajšiu mocninu (vnútro nechaj tak) a vynásob deriváciou vnútornej funkcie.": "Deriva la potencia exterior (deja la función interior tal cual) y multiplica por la derivada de la función interior.",
  "Zisti znamienko $f'$ vľavo a vpravo od bodu.": "Averigua el signo de $f'$ a la izquierda y a la derecha del punto.",
  "Zisti znamienko menovateľa pre $x$ tesne vpravo alebo vľavo od daného bodu a skombinuj ho so znamienkom čitateľa.": "Averigua el signo del denominador para $x$ justo a la derecha o a la izquierda del punto dado y combínalo con el signo del numerador.",
  "Zisti, ktoré body kocky v rovinách ležia. Tri body môžu určovať tú istú rovinu, aj keď sú to iné vrcholy.": "Averigua qué puntos del cubo están en los planos. Tres puntos pueden determinar el mismo plano aunque sean vértices distintos.",
  "Zistil si len exponent ${@0}$. Z neho ešte vyjadri $x$.": "Solo has averiguado el exponente ${@0}$. A partir de él despeja todavía $x$.",
  "Zlogaritmuj obe strany a vyjadri $x$. {@0}": "Toma logaritmos en ambos lados y despeja $x$. {@0}",
  "Zložené úročenie: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Stav na účte tvorí geometrickú postupnosť s kvocientom ${@6}$.": "Interés compuesto: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. El saldo de la cuenta forma una progresión geométrica de razón ${@6}$.",
  "Zo štvorcového kartónu so stranou ${@0}\\,\\text{cm}$ odstrihneme v rohoch zhodné štvorce a zvyšok zahneme na otvorenú krabicu. {@1}": "De un cartón cuadrado de lado ${@0}\\,\\text{cm}$ recortamos en las esquinas cuadrados iguales y doblamos el resto para formar una caja abierta. {@1}",
  "Zostane podiel vedúcich koeficientov: $\\frac{{@0}}{{@1}}{@2}$.": "Queda el cociente de los coeficientes principales: $\\frac{{@0}}{{@1}}{@2}$.",
  "Zostav nerovnicu $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ a vyrieš ju logaritmovaním. Výsledok zaokrúhli nahor.": "Plantea la inecuación $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ y resuélvela tomando logaritmos. Redondea el resultado hacia arriba.",
  "Zostav rovnicu roviny (normálový vektor je kolmý na dva vektory v rovine) a použi vzorec pre vzdialenosť bodu od roviny.": "Plantea la ecuación del plano (el vector normal es perpendicular a dos vectores del plano) y usa la fórmula de la distancia de un punto a un plano.",
  "Zrezaný kužeľ": "Tronco de cono",
  "Zrezaný rotačný kužeľ má polomery podstáv $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho {@3}. {@4}": "Un tronco de cono de revolución tiene radios de las bases $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ y altura $v={@2}\\,\\text{cm}$. Calcula su {@3}. {@4}",
  "Zvislá asymptota je v nulovom bode menovateľa. Vodorovnú asymptotu dá limita pre $x\\to\\infty$: podiel koeficientov pri $x$.": "La asíntota vertical está en el cero del denominador. La asíntota horizontal la da el límite para $x\\to\\infty$: el cociente de los coeficientes de $x$.",
  "Zvislá asymptota je v nulovom bode menovateľa: rieš rovnicu ${@0}=0$. Pozor na znamienko.": "La asíntota vertical está en el cero del denominador: resuelve la ecuación ${@0}=0$. Cuidado con el signo.",
  "Zvolíme $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.": "Elegimos $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.",
  "Zvolíme kocku s hranou $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ a body $E, F, G, H$ nad nimi so súradnicou $z=1$.": "Elegimos un cubo de arista $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ y los puntos $E, F, G, H$ encima de ellos con coordenada $z=1$.",
  "Základ a": "Base a",
  "Záleží na tom, kto má akú funkciu, ide o variácie 3. triedy z {@0} prvkov: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.": "Importa quién tiene qué cargo: se trata de variaciones de orden 3 de {@0} elementos, $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.",
  "Zámenou $x$ za $-x$ sa sčítance len vymenia: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.": "Al cambiar $x$ por $-x$ los sumandos solo se intercambian: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.",
  "ani sa cifry nesmú opakovať": "y las cifras no se pueden repetir",
  "aspoň jeden reálny koreň": "al menos una raíz real",
  "aspoň jedna guľa je biela": "al menos una bola sea blanca",
  "auto": "coche",
  "bicykel": "bicicleta",
  "biele": "blancas",
  "bielych": "blancas",
  "deliteľných piatimi": "divisibles entre cinco",
  "dievčat": "chicas",
  "dievčatá": "chicas",
  "do známky {@0} je to {@1}": "hasta la nota {@0} son {@1}",
  "dotyčnica (jeden spoločný bod)": "tangente (un punto común)",
  "druh dopravy do práce": "medio de transporte al trabajo",
  "druhú": "cuadrado",
  "dva rôzne reálne korene": "dos raíces reales distintas",
  "dĺžku prepony v cm": "la longitud de la hipotenusa en cm",
  "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">pre h → 0 sa hodnota blíži k 1</span>": "f(−h) = f(h) = sen h / h = {@0} · <span class=\"c-accent\">para h → 0 el valor se acerca a 1</span>",
  "farba očí žiaka": "color de ojos de un alumno",
  "f′ &lt; 0, funkcia klesá": "f′ &lt; 0, la función decrece",
  "hmotnosť balíka": "peso de un paquete",
  "jeden chlapec": "un chico",
  "jedna guľa je biela a jedna čierna": "una bola sea blanca y la otra negra",
  "jeho objem v $\\text{cm}^3$": "su volumen en $\\text{cm}^3$",
  "jeho obsah v $\\text{cm}^2$": "su área en $\\text{cm}^2$",
  "jeho povrch v $\\text{cm}^2$": "su área total en $\\text{cm}^2$",
  "k; q": "k; q",
  "končiace cifrou {@0}: {@1}": "terminados en la cifra {@0}: {@1}",
  "krajina, z ktorej prišiel turista": "país del que procede un turista",
  "kvalitatívny": "cualitativo",
  "kvantitatívny diskrétny": "cuantitativo discreto",
  "kvantitatívny spojitý": "cuantitativo continuo",
  "leží v rovine": "está en el plano",
  "lokálne maximum": "máximo local",
  "lokálne minimum": "mínimo local",
  "max": "máx",
  "medián": "la mediana",
  "mimobežné": "se cruzan",
  "možností": "posibilidades",
  "má sústava nekonečne veľa riešení": "tiene el sistema infinitas soluciones",
  "mínus": "menos",
  "môžu opakovať": "se pueden repetir",
  "neleží v rovine": "no está en el plano",
  "nepárne, medián je {@0}. hodnota": "impar, la mediana es el valor {@0}.º",
  "nepárnych": "impares",
  "nesečnica (žiadny spoločný bod)": "exterior (ningún punto común)",
  "nesmú opakovať": "no se pueden repetir",
  "obe gule sú biele": "las dos bolas sean blancas",
  "objem": "el volumen",
  "objem hranola v $\\text{cm}^3$": "el volumen del prisma en $\\text{cm}^3$",
  "objem mení $k^3$-krát": "el volumen cambia $k^3$ veces",
  "objem v $\\text{cm}^3$": "volumen en $\\text{cm}^3$",
  "obsah jeho plášťa v $\\text{cm}^2$": "el área de su superficie lateral en $\\text{cm}^2$",
  "obsah plášťa": "el área de la superficie lateral",
  "obsah rezu v $\\text{cm}^2$. {@0}": "el área de la sección en $\\text{cm}^2$. {@0}",
  "obľúbený šport": "deporte favorito",
  "opäť ľubovoľnú": "de nuevo cualquiera",
  "p; x₂": "p; x₂",
  "pešo": "a pie",
  "plus": "más",
  "polomer rezu v cm.": "el radio de la sección en cm.",
  "povrch": "el área total",
  "povrch hranola v $\\text{cm}^2$": "el área total del prisma en $\\text{cm}^2$",
  "povrch mení $k^2$-krát": "el área total cambia $k^2$ veces",
  "povrch v $\\text{cm}^2$": "área total en $\\text{cm}^2$",
  "počet": "número",
  "počet gólov v zápase": "número de goles en un partido",
  "počet strán knihy": "número de páginas de un libro",
  "počet súrodencov": "número de hermanos",
  "počet vymeškaných hodín za polrok": "número de horas de ausencia en un semestre",
  "počet áut v domácnosti": "número de coches en un hogar",
  "pre $t={@0}$ niektorá z nich neplatí, bod na priamke <strong>neleží</strong>.": "para $t={@0}$ alguna de ellas no se cumple: el punto <strong>no está</strong> en la recta.",
  "pre $t={@0}$ obe platia, bod na priamke <strong>leží</strong>.": "para $t={@0}$ se cumplen las dos: el punto <strong>está</strong> en la recta.",
  "priamka je s rovinou rovnobežná a nemá s ňou spoločný bod": "la recta es paralela al plano y no tiene ningún punto común con él",
  "priamka je s rovinou rôznobežná (pretína ju v jednom bode)": "la recta es secante al plano (lo corta en un punto)",
  "priamka leží v rovine": "la recta está en el plano",
  "práve jeden (dvojnásobný) koreň": "exactamente una raíz (doble)",
  "párne, medián je priemer {@0}. a {@1}. hodnoty": "par, la mediana es la media de los valores {@0}.º y {@1}.º",
  "párnych": "pares",
  "roviny sú rovnobežné rôzne": "los planos son paralelos distintos",
  "roviny sú rôznobežné (pretínajú sa v priamke)": "los planos son secantes (se cortan en una recta)",
  "roviny sú totožné": "los planos son coincidentes",
  "rovnobežné": "paralelas",
  "rozptyl": "la varianza",
  "sedadiel": "asientos",
  "sedadlo": "asiento",
  "sedadlá": "asientos",
  "sečnica (2 spoločné body)": "secante (2 puntos comunes)",
  "sečnica (dva spoločné body)": "secante (dos puntos comunes)",
  "smerodajnú odchýlku": "la desviación típica",
  "spotreba auta na 100 km": "consumo de un coche cada 100 km",
  "stenovú výšku $v_s$ v cm": "la apotema $v_s$ en cm",
  "strojnásobí": "triplica",
  "sústava nemá riešenie": "el sistema no tiene solución",
  "súčet je aspoň {@0}": "la suma sea al menos {@0}",
  "súčet je {@0}": "la suma sea {@0}",
  "súčin je párny": "el producto sea par",
  "teplota vzduchu na poludnie": "temperatura del aire a mediodía",
  "terč nezasiahne ani jeden z nich": "ninguno de ellos acierte en el blanco",
  "terč zasiahne aspoň jeden z nich": "al menos uno de ellos acierte en el blanco",
  "terč zasiahne práve jeden z nich": "exactamente uno de ellos acierte en el blanco",
  "tretiu": "cubo",
  "v rovine leží, takže v nej leží celá priamka": "está en el plano, así que toda la recta está en él",
  "v rovine neleží, preto nemajú spoločný bod": "no está en el plano, por eso no tienen ningún punto común",
  "variačné rozpätie": "el rango",
  "vlak": "tren",
  "vpravo": "a la derecha",
  "výrobkov": "productos",
  "výrobky": "productos",
  "výška žiaka": "estatura de un alumno",
  "vľavo": "a la izquierda",
  "vždy niektorú zo zvyšných": "siempre alguna de las restantes",
  "x; y": "x; y",
  "x; y; z": "x; y; z",
  "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · vzdialenosť stredu d = {@3} · r = 3 → {@4}": "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · distancia del centro d = {@3} · r = 3 → {@4}",
  "x₀ = {@0} · f′(x₀) = {@1} · {@2}": "x₀ = {@0} · f′(x₀) = {@1} · {@2}",
  "x₁; x₂": "x₁; x₂",
  "zdvojnásobí": "duplica",
  "značka mobilného telefónu": "marca de teléfono móvil",
  "známka": "nota",
  "znížil": "disminuyó",
  "zvýšil": "aumentó",
  "{@0} Bod $K$ je stred hrany ${@1}$. Vypočítaj vzdialenosť bodov ${@2}$ a $K$ v cm. {@3}": "{@0} El punto $K$ es el punto medio de la arista ${@1}$. Calcula la distancia entre los puntos ${@2}$ y $K$ en cm. {@3}",
  "{@0} Funkcia je <strong>{@1}</strong>.": "{@0} La función es <strong>{@1}</strong>.",
  "{@0} Normálové vektory sú ${@1}$ a ${@2}$. {@3}": "{@0} Los vectores normales son ${@1}$ y ${@2}$. {@3}",
  "{@0} Normálový vektor roviny ${@1}$ je $\\vec{n}={@2}$ (kolmý na $\\vec{{@3}{@4}}$ aj $\\vec{{@5}{@6}}$), smerový vektor priamky $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}": "{@0} El vector normal del plano ${@1}$ es $\\vec{n}={@2}$ (perpendicular a $\\vec{{@3}{@4}}$ y a $\\vec{{@5}{@6}}$), y el vector director de la recta es $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}",
  "{@0} Potom ${@1}{@2}$ a $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.": "{@0} Entonces ${@1}{@2}$ y $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.",
  "{@0} Rovina ${@1}$ má normálový vektor $\\vec{n}={@2}$ a rovnicu ${@3}=0$. Pre ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.": "{@0} El plano ${@1}$ tiene vector normal $\\vec{n}={@2}$ y ecuación ${@3}=0$. Para ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.",
  "{@0} Smerový vektor priamky $\\vec{u}=\\vec{{@1}}={@2}$, vektor $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.": "{@0} Vector director de la recta $\\vec{u}=\\vec{{@1}}={@2}$, vector $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.",
  "{@0} Správne je ${@1}$, $k\\in\\mathbb{Z}$.": "{@0} Lo correcto es ${@1}$, $k\\in\\mathbb{Z}$.",
  "{@0} Substitúcia $t={@1} x$: ${@2}=0$, korene $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Spolu $K=\\{{@7}\\}$.": "{@0} Sustitución $t={@1} x$: ${@2}=0$, raíces $t_1={@3}$, $t_2={@4}$. {@5} {@6}. En total, $K=\\{{@7}\\}$.",
  "{@0} Vypočítaj $P(X={@1})$. {@2}": "{@0} Calcula $P(X={@1})$. {@2}",
  "{@0} Vypočítaj $P(X\\ge 1)$. {@1}": "{@0} Calcula $P(X\\ge 1)$. {@1}",
  "{@0} Vypočítaj pravdepodobnosť, že $X\\le 1$. {@1}": "{@0} Calcula la probabilidad de que $X\\le 1$. {@1}",
  "{@0} Vypočítaj strednú hodnotu $E(X)$ a rozptyl $D(X)$. Zadaj ich v tomto poradí oddelené bodkočiarkou (ako zlomky alebo desatinné čísla zaokrúhlené aspoň na 2 miesta).": "{@0} Calcula la esperanza $E(X)$ y la varianza $D(X)$. Escríbelas en este orden separadas por punto y coma (como fracciones o números decimales redondeados al menos a 2 decimales).",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od priamky ${@2}$ v cm. {@3}": "{@0} Calcula la distancia del vértice ${@1}$ a la recta ${@2}$ en cm. {@3}",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od roviny ${@2}$ v cm. {@3}": "{@0} Calcula la distancia del vértice ${@1}$ al plano ${@2}$ en cm. {@3}",
  "{@0} Výsledok zaokrúhli na desatiny.": "{@0} Redondea el resultado a las décimas.",
  "{@0} Znak je <strong>{@1}</strong>.": "{@0} El carácter es <strong>{@1}</strong>.",
  "{@0} chlapci": "{@0} chicos",
  "{@0} dievčatá": "{@0} chicas",
  "{@0} usporiadaného súboru. Aký je medián?": "{@0} del conjunto ordenado. ¿Cuál es la mediana?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Aký je medián známok?": "{@0} muestra las notas de un examen en la clase:{@1}¿Cuál es la mediana de las notas?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Vypočítaj priemernú známku. {@2}": "{@0} muestra las notas de un examen en la clase:{@1}Calcula la nota media. {@2}",
  "{@0} {@1}": "{@0} {@1}",
  "{@0}Zaveď $t={@1} x$, vyrieš kvadratickú rovnicu a ponechaj len korene z intervalu $\\langle -1; 1\\rangle$.": "{@0}Introduce $t={@1} x$, resuelve la ecuación de segundo grado y quédate solo con las raíces del intervalo $\\langle -1; 1\\rangle$.",
  "Údaje najprv usporiadaj podľa veľkosti. Pri párnom počte je medián priemerom dvoch prostredných hodnôt.": "Ordena primero los datos por tamaño. Con un número par de datos, la mediana es la media de los dos valores centrales.",
  "Útvar ohraničený parabolou a priamkou": "Figura limitada por una parábola y una recta",
  "Čitateľ ${@0}$ rozlož na súčin ${@1}\\cdot(x+c)$. Aké je číslo $c$?": "Factoriza el numerador ${@0}$ como producto ${@1}\\cdot(x+c)$. ¿Cuál es el número $c$?",
  "Čitateľ derivácie ${@0}({@1})-({@2})\\cdot {@3}$ je po úprave konštanta. Aká?": "El numerador de la derivada ${@0}({@1})-({@2})\\cdot {@3}$ es, después de simplificar, una constante. ¿Cuál?",
  "Čitateľ je nenulová konštanta a menovateľ sa blíži k nule, takže zlomok v absolútnej hodnote rastie nad všetky medze.": "El numerador es una constante distinta de cero y el denominador tiende a cero, así que la fracción crece sin límite en valor absoluto.",
  "Čitateľ má nižší stupeň než menovateľ, v čitateli preto zostane len nula a limita je $0$.": "El numerador tiene menor grado que el denominador; por eso en el numerador solo queda cero y el límite es $0$.",
  "Čitateľ zmení znamienko, menovateľ nie: $f(-x)=-f(x)$.": "El numerador cambia de signo y el denominador no: $f(-x)=-f(x)$.",
  "Čitateľa aj menovateľa vydelíme najvyššou mocninou menovateľa, teda ${@0}$. Všetky členy tvaru $\\frac{c}{x^k}$ sa blížia k nule. {@1}": "Dividimos el numerador y el denominador entre la mayor potencia del denominador, es decir, ${@0}$. Todos los términos de la forma $\\frac{c}{x^k}$ tienden a cero. {@1}",
  "Člen $uv'$ je $({@0})\\cdot\\frac{1}{x}$. Koľko je teda $f'(1)$?": "El término $uv'$ es $({@0})\\cdot\\frac{1}{x}$. ¿Cuánto vale entonces $f'(1)$?",
  "Číslo $f({@0})$ nie je absolútny člen $q$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a roznásob zátvorku.": "El número $f({@0})$ no es el término independiente $q$. Sustituye en $y=f(x_0)+f'(x_0)(x-x_0)$ y desarrolla el paréntesis.",
  "Číslo z vodorovnej asymptoty $y=\\dots$ (limita pre $x\\to\\infty$)?": "¿Cuál es el número de la asíntota horizontal $y=\\dots$ (límite para $x\\to\\infty$)?",
  "Číslo zo zvislej asymptoty $x=\\dots$ (nulový bod menovateľa)?": "¿Cuál es el número de la asíntota vertical $x=\\dots$ (cero del denominador)?",
  "čas behu na 100 m": "tiempo en la carrera de 100 m",
  "čierne": "negras",
  "čiernych": "negras",
  "ľubovoľnú cifru": "cualquier cifra",
  "ľubovoľnú cifru okrem nuly": "cualquier cifra excepto el cero",
  "Žiaci odpovedali, ako chodia do školy:{@0}{@1} Výsledok zaokrúhli na desatiny.": "Los alumnos respondieron cómo van a la escuela:{@0}{@1} Redondea el resultado a las décimas.",
  "Žiadny z nich neleží vo vnútri intervalu.": "Ninguno de ellos está en el interior del intervalo.",
  "Žiak v teste s {@0} otázkami náhodne tipuje; každá otázka má štyri možnosti a práve jedna je správna. Náhodná premenná $X$ je počet správnych odpovedí.": "Un alumno responde al azar a un test de {@0} preguntas; cada pregunta tiene cuatro opciones y exactamente una es correcta. La variable aleatoria $X$ es el número de respuestas correctas.",
  "žiadny reálny koreň": "ninguna raíz real",
  "„Najviac jeden“ zahŕňa aj možnosť, že nenastane žiadny úspech. Pripočítaj $P(X=0)$.": "«Como máximo uno» incluye también la posibilidad de que no haya ningún éxito. Suma $P(X=0)$.",
  "„Najviac jeden“ znamená 0 alebo 1 úspech. Sčítaj tieto dve pravdepodobnosti.": "«Como máximo uno» significa 0 o 1 éxitos. Suma estas dos probabilidades.",
  "Koľko žiakov písalo písomku?": "¿Cuántos alumnos hicieron el examen?",
  "biela": "blanca",
  "výrobok": "producto",
  "dievča": "chica",
  "čierna": "negra"
 }
});
