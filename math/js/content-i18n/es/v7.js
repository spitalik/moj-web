/* Español: preklad js/rocniky/v7.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/v7/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "v7-chyby": {
   "title": "Errores y precisión de los cálculos",
   "summary": "Error absoluto y relativo, cifras significativas, números de máquina y épsilon de máquina, propagación de errores, condicionamiento del problema y pérdida de precisión en la resta.",
   "theory": [
    "<p>El resultado de un cálculo numérico es casi siempre solo <strong>aproximado</strong>. Los errores proceden de varias fuentes: del <em>modelo</em>\n       (descripción simplificada de la realidad), de los <em>datos de entrada</em> (mediciones), del <em>método</em> (un proceso infinito, por ejemplo una serie o un límite, se sustituye por uno finito: error\n       del método o de discretización) y del <em>redondeo</em> al calcular con un número finito de cifras.</p>\n       <p>Si $x$ es el valor exacto y $\\tilde{x}$ su aproximación, el <strong>error absoluto</strong> es $\\Delta = |x-\\tilde{x}|$ y el <strong>error relativo</strong>\n       $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$ (para $x\\neq 0$), a menudo en porcentaje. Por lo general no conocemos el valor exacto, por eso trabajamos con una <em>estimación</em> (cota) del error:\n       un número $\\varepsilon$ para el que $|x-\\tilde{x}|\\le\\varepsilon$, y escribimos $x=\\tilde{x}\\pm\\varepsilon$. El error relativo es más importante, porque no depende de las unidades:\n       un error de 1 mm es despreciable en la longitud de un puente, pero enorme en el grosor de una chapa.</p>",
    "<p><strong>Cifras significativas.</strong> La cifra de la aproximación $\\tilde{x}$ en la posición del orden $10^{-k}$ es <em>significativa</em> (fiable) si $|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$.\n       El número de cifras significativas se cuenta desde la primera cifra no nula por la izquierda hasta la última significativa. Por ejemplo, $\\tilde{x}=23{,}4718$ con un error de como máximo $0{,}004$ tiene dos decimales exactos\n       ($0{,}004\\le 0{,}005$), es decir, cuatro cifras significativas: 2, 3, 4, 7. El <strong>redondeo</strong> a $k$ decimales produce un error de como máximo $\\frac{1}{2}\\cdot 10^{-k}$;\n       un número correctamente redondeado tiene, por tanto, todas sus cifras escritas significativas.</p>",
    "<p><strong>Números de máquina.</strong> El ordenador guarda los números reales en forma de coma flotante $\\pm m\\cdot\\beta^{e}$, donde $\\beta$ es la base, la mantisa $m$ tiene un número fijo\n       $t$ de cifras y el exponente $e$ está en un rango limitado. El estándar IEEE 754 en doble precisión (double) usa $\\beta=2$, $t=53$ bits de mantisa y exponentes\n       aproximadamente de $-1022$ a $1023$. El conjunto de números de máquina es finito; fuera de él se produce <em>desbordamiento</em> (número demasiado grande) o <em>subdesbordamiento</em> (demasiado pequeño).</p>\n       <p>El <strong>épsilon de máquina</strong> $\\varepsilon_M$ es la distancia del número 1 al número de máquina inmediatamente mayor; para double, $\\varepsilon_M=2^{-52}\\approx 2{,}22\\cdot 10^{-16}$.\n       Al redondear un número real a número de máquina se obtiene $\\mathrm{fl}(x)=x(1+\\eta)$, donde $|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$ (unidad de redondeo).\n       Así, un double lleva unas 15 o 16 cifras decimales significativas. Ni siquiera el número $0{,}1$ tiene una representación finita en el sistema binario, por eso, por ejemplo, $0{,}1+0{,}2$ no es exactamente $0{,}3$.</p>",
    "<p><strong>Propagación de errores.</strong> Para las cotas de error de las entradas se cumple (en aproximación lineal):\n       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$\n       Para una función $y=f(x)$ es $\\Delta y\\approx|f'(x)|\\,\\Delta x$; para una función de varias variables, $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$.\n       Así, al sumar se suman los errores absolutos, y al multiplicar y dividir, los relativos.</p>\n       <p><strong>Condicionamiento.</strong> Un problema está <em>bien condicionado</em> si un pequeño cambio relativo de la entrada provoca un pequeño cambio relativo del resultado. La medida es\n       el <strong>número de condición</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, para el que $\\delta y\\approx\\kappa\\,\\delta x$. Por ejemplo, $f(x)=\\ln x$ tiene $\\kappa=\\frac{1}{|\\ln x|}$,\n       que para $x$ cercano a 1 es un número grande: el logaritmo de un número cercano a uno es un problema mal condicionado. El condicionamiento es una propiedad del <em>problema</em>, mientras que la <em>estabilidad</em> es una propiedad\n       del <em>algoritmo</em>: un algoritmo estable no amplifica los errores de redondeo más de lo que corresponde al condicionamiento del problema.</p>",
    "<p><strong>Pérdida de precisión en la resta.</strong> La diferencia de dos números cercanos está mal condicionada: $\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$, y el denominador es pequeño.\n       Las cifras iniciales comunes se anulan al restar y las cifras restantes están afectadas por el error (la llamada <em>cancelación catastrófica</em>). Ayuda una transformación algebraica que elimine la resta:\n       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>"
   ],
   "examples": [
    {
     "task": "Sustituimos el número $\\pi$ por el valor $3{,}14$. Determine el error absoluto y el relativo y el número de cifras significativas de la aproximación.",
     "steps": [
      "$\\Delta=|\\pi-3{,}14|=|3{,}14159\\ldots-3{,}14|\\approx 0{,}00159$.",
      "$\\delta=\\frac{0{,}00159}{3{,}14159}\\approx 0{,}000507=0{,}0507\\,\\%$.",
      "Como $0{,}00159\\le 0{,}005=\\frac{1}{2}\\cdot 10^{-2}$, los dos decimales son exactos. La aproximación $3{,}14$ tiene <strong>3 cifras significativas</strong>."
     ]
    },
    {
     "task": "La raíz menor de la ecuación $x^2-200x+1=0$ es $x=100-\\sqrt{9999}$. Calcúlela en aritmética con 4 cifras significativas directamente y tras una transformación que elimine la resta.",
     "steps": [
      "Con 4 cifras significativas, $\\sqrt{9999}=99{,}99499\\ldots\\approx 100{,}0$. El cálculo directo da $100-100{,}0=0$: se han perdido todas las cifras, el error relativo es del 100 %.",
      "Multiplicamos y dividimos por el conjugado: $100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$.",
      "Ahora $\\frac{1}{100+100{,}0}=\\frac{1}{200{,}0}=0{,}005000$. El valor exacto es $0{,}0050001250\\ldots$, así que el resultado tiene las 4 cifras significativas.",
      "El problema en sí está bien condicionado; lo malo era solo el algoritmo (la resta de números cercanos)."
     ]
    }
   ]
  },
  "v7-rovnice": {
   "title": "Resolución numérica de ecuaciones",
   "summary": "Separación de raíces, método de bisección, iteración de punto fijo, método de Newton y método de la secante, orden de convergencia y criterios de parada.",
   "theory": [
    "<p>Buscamos una raíz $\\xi$ de la ecuación $f(x)=0$ que no se puede expresar mediante una fórmula (por ejemplo, $x=\\cos x$ o $x^5-x-1=0$). Primero <strong>separamos</strong> la raíz: hallamos un intervalo\n       $[a, b]$ en el que hay exactamente una raíz. Según el <strong>teorema de Bolzano</strong>, una función continua con $f(a)\\,f(b)&lt;0$ tiene en el intervalo $(a, b)$ al menos una raíz; si además\n       $f'$ no cambia de signo en $[a, b]$, la raíz es única.</p>\n       <p><strong>Método de bisección.</strong> Calculamos el punto medio $c=\\frac{a+b}{2}$. Si $f(a)\\,f(c)&lt;0$, continuamos con $[a, c]$; si no, con $[c, b]$. Cada paso\n       divide el intervalo por la mitad; tras $n$ pasos su longitud es $\\frac{b-a}{2^n}$. Para lograr una longitud de como máximo $\\varepsilon$ se necesitan $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ pasos.\n       El método es lento, pero converge <em>siempre</em> y solo necesita los signos de los valores de la función.</p>",
    "<p><strong>Método de iteración de punto fijo.</strong> Reescribimos la ecuación en la forma $x=g(x)$ y calculamos $x_{k+1}=g(x_k)$. Si $g$ aplica el intervalo $I$ en sí mismo y\n       $|g'(x)|\\le q&lt;1$ en $I$, entonces $g$ tiene en $I$ un único <em>punto fijo</em> $\\xi$ y la sucesión converge a él para cualquier valor inicial $x_0\\in I$ (teorema del punto fijo de Banach).\n       Se cumplen las estimaciones\n       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$\n       La elección de la forma es importante: la ecuación $x^2-2=0$ puede escribirse como $x=\\frac{2}{x}$ (las iteraciones oscilan, $|g'(\\sqrt{2})|=1$) o como $x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$ (convergencia muy rápida).</p>",
    "<p><strong>Método de Newton (método de la tangente).</strong> Sustituimos la gráfica de la función en el punto $x_k$ por la recta tangente y tomamos como siguiente aproximación su intersección con el eje $x$:\n       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$\n       Con una raíz simple ($f'(\\xi)\\neq 0$) y un valor inicial suficientemente cercano a la raíz converge <strong>cuadráticamente</strong>: $|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$;\n       el número de cifras significativas se duplica aproximadamente en cada paso. <em>Condición de Fourier:</em> si $f'$ y $f''$ no cambian de signo en $[a, b]$ y empezamos en el extremo\n       en el que $f(x_0)\\,f''(x_0)&gt;0$, las iteraciones convergen de forma monótona. Desde un mal valor inicial el método puede saltar lejos; con una raíz múltiple converge solo linealmente.</p>",
    {
     "fig": "v7-newton",
     "caption": "Método de Newton para $f(x)=x^2-2$: desde el punto $[x_k; f(x_k)]$ trazamos la tangente y su intersección con el eje $x$ es $x_{k+1}$. Ya tras tres pasos la aproximación de $\\sqrt{2}$ tiene un error del orden de $10^{-6}$ a $10^{-12}$."
    },
    "<p>El <strong>método de la secante</strong> sustituye la derivada por un cociente de diferencias de las dos últimas aproximaciones:\n       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$\n       No necesita la derivada y converge con orden $\\frac{1+\\sqrt{5}}{2}\\approx 1{,}618$. Si trazamos siempre la secante por puntos de signos opuestos (como en la bisección),\n       obtenemos la <em>regula falsi</em>, que siempre converge, pero normalmente solo de forma lineal.</p>\n       <p><strong>Orden de convergencia.</strong> Un método tiene orden $p$ si $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$; para $p=1$ (convergencia lineal) debe ser $C&lt;1$. La bisección y la iteración de punto fijo\n       son de orden 1, la secante de orden $1{,}618$ y el método de Newton de orden 2. <strong>Criterios de parada:</strong> $|x_{k+1}-x_k|&lt;\\varepsilon$, en forma relativa $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$,\n       $|f(x_k)|&lt;\\delta$ y siempre también un número máximo de iteraciones. Un $|f(x_k)|$ pequeño por sí solo no garantiza la cercanía a la raíz si la función es muy plana.</p>"
   ],
   "examples": [
    {
     "task": "Mediante el método de Newton, halle $\\sqrt{5}$ como raíz de la función $f(x)=x^2-5$; empiece en el punto $x_0=2$ y haga dos pasos.",
     "steps": [
      "$f'(x)=2x$, así que $x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$.",
      "$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2{,}25$.",
      "$x_2=2{,}25-\\frac{2{,}25^2-5}{4{,}5}=2{,}25-\\frac{0{,}0625}{4{,}5}\\approx 2{,}236111$.",
      "Exactamente, $\\sqrt{5}=2{,}236068\\ldots$: el error bajó de $0{,}014$ a $0{,}00004$, lo que corresponde a una convergencia cuadrática."
     ]
    },
    {
     "task": "Localice mediante bisección la raíz de la ecuación $x^3-x-1=0$ en el intervalo $[1; 2]$ (tres pasos). ¿Cuántos pasos harían falta para un intervalo de longitud como máximo $10^{-6}$?",
     "steps": [
      "$f(1)=-1&lt;0$, $f(2)=5&gt;0$; la raíz está en $[1; 2]$.",
      "$f(1{,}5)=0{,}875&gt;0$ → $[1; 1{,}5]$. $f(1{,}25)\\approx-0{,}297&lt;0$ → $[1{,}25; 1{,}5]$. $f(1{,}375)\\approx 0{,}225&gt;0$ → $[1{,}25; 1{,}375]$.",
      "Tras $n$ pasos el intervalo tiene longitud $2^{-n}$. La condición $2^{-n}\\le 10^{-6}$ da $n\\ge 6\\log_2 10\\approx 19{,}93$, es decir, <strong>20 pasos</strong>.",
      "La raíz es $\\xi\\approx 1{,}3247$; el método de Newton alcanzaría la misma precisión en 4 o 5 pasos."
     ]
    }
   ]
  },
  "v7-interpolacia": {
   "title": "Interpolación y aproximación",
   "summary": "Polinomio interpolador en forma de Lagrange y de Newton, diferencias divididas, error de interpolación, fenómeno de Runge y método de mínimos cuadrados.",
   "theory": [
    "<p><strong>Problema de interpolación.</strong> Se dan <em>nodos</em> distintos entre sí $x_0, x_1, \\dots, x_n$ y valores $y_0, y_1, \\dots, y_n$ (por ejemplo, medidos o tomados de una tabla).\n       Buscamos un polinomio $P_n$ de grado como máximo $n$ tal que $P_n(x_i)=y_i$ para todo $i$. Este polinomio existe y es <strong>único</strong>: las condiciones forman un sistema\n       con la matriz de Vandermonde, cuyo determinante $\\prod_{i&lt;j}(x_j-x_i)$ no es nulo. Después usamos el polinomio para calcular valores entre los nodos.</p>",
    "<p><strong>Forma de Lagrange.</strong> Para cada nodo construimos un polinomio de base que vale 1 en él y 0 en los demás nodos:\n       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$\n       Para dos nodos obtenemos la <em>interpolación lineal</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$. La forma de Lagrange es clara, pero al añadir un nodo hay que recalcularlo todo.</p>",
    "<p><strong>Forma de Newton y diferencias divididas.</strong> Las diferencias divididas se definen de forma recurrente:\n       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$\n       Entonces\n       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$\n       Las diferencias se calculan en una tabla triangular y añadir otro nodo significa solo añadir un término. El valor del polinomio se calcula de forma económica con el esquema de Horner.</p>",
    "<p><strong>Error de interpolación.</strong> Si $f$ tiene derivada continua de orden $n+1$, para cada $x$ existe un $\\xi$ en el menor intervalo que contiene a $x$ y a los nodos tal que\n       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$\n       De ahí la estimación $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$, donde $M_{n+1}=\\max|f^{(n+1)}|$. En la interpolación lineal con paso $h$ el error es como máximo $\\frac{M_2h^2}{8}$.\n       Aumentar el grado con nodos equiespaciados puede no ayudar: para la función $\\frac{1}{1+25x^2}$ en $[-1; 1]$ el polinomio oscila fuertemente cerca de los extremos (<strong>fenómeno de Runge</strong>).\n       La solución son los nodos de Chebyshev, más densos hacia los extremos, o la interpolación polinómica a trozos (splines).</p>",
    "<p><strong>Método de mínimos cuadrados.</strong> Los datos medidos contienen errores, por eso no queremos hacer pasar por ellos un polinomio de grado alto, sino una función sencilla que los\n       <em>aproxime</em>. Elegimos la recta $y=ax+b$ de modo que la suma de los cuadrados de las desviaciones $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$ sea mínima. De las condiciones\n       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$ obtenemos las <strong>ecuaciones normales</strong>\n       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i,$$\n       con solución $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$, $b=\\frac{\\sum y_i-a\\sum x_i}{n}$. La recta pasa por el centro de gravedad de los datos $[\\bar{x}; \\bar{y}]$.</p>"
   ],
   "examples": [
    {
     "task": "Halle el valor del polinomio interpolador para los puntos $[0; 1]$, $[1; 3]$, $[3; 2]$ en el punto $x=2$, tanto en forma de Lagrange como de Newton.",
     "steps": [
      "Lagrange: $\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$, $\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$, $\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$.",
      "$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3{,}333$.",
      "Newton: $f[0, 1]=\\frac{3-1}{1}=2$, $f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$, $f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$.",
      "$P(x)=1+2x-\\frac{5}{6}x(x-1)$, luego $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$: el mismo polinomio, escrito de otra forma."
     ]
    },
    {
     "task": "Ajuste por mínimos cuadrados una recta a los puntos $[0; 1]$, $[1; 2]$, $[2; 4]$, $[3; 4]$.",
     "steps": [
      "$n=4$, $\\sum x_i=6$, $\\sum y_i=11$, $\\sum x_i^2=14$, $\\sum x_iy_i=0+2+8+12=22$.",
      "$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1{,}1$.",
      "$b=\\frac{11-1{,}1\\cdot 6}{4}=\\frac{4{,}4}{4}=1{,}1$.",
      "La recta buscada es $y=1{,}1x+1{,}1$; pasa por el centro de gravedad $[1{,}5; 2{,}75]$."
     ]
    }
   ]
  },
  "v7-derivacia-integracia": {
   "title": "Derivación e integración numéricas",
   "summary": "Diferencia progresiva y centrada, elección del paso, métodos del rectángulo, del trapecio y de Simpson, orden de precisión y estimación del error.",
   "theory": [
    "<p><strong>Derivación numérica.</strong> A partir del desarrollo de Taylor $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$ obtenemos las fórmulas\n       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{diferencia progresiva, error }-\\frac{h}{2}f''(\\xi)},\\qquad\n       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{diferencia centrada, error }-\\frac{h^2}{6}f'''(\\xi)}.$$\n       La diferencia progresiva (y también la regresiva $\\frac{f(x)-f(x-h)}{h}$) tiene <strong>orden de precisión 1</strong>, la centrada <strong>orden 2</strong>: al reducir el paso a la mitad, el error disminuye aproximadamente\n       a la mitad o a la cuarta parte, respectivamente. Para la segunda derivada se usa $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$, con error $O(h^2)$.</p>",
    "<p><strong>Elección del paso.</strong> El paso no puede reducirse indefinidamente. En el numerador restamos dos valores cercanos, de modo que el error de redondeo es del orden de $\\frac{\\varepsilon_M|f(x)|}{h}$\n       y <em>crece</em> al disminuir $h$. El error total de la diferencia progresiva $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$ es mínimo aproximadamente para $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$,\n       y para la diferencia centrada, para $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$. La derivación numérica es, por tanto, un problema mal condicionado, a diferencia de la integración.</p>",
    "<p><strong>Fórmulas de cuadratura.</strong> Dividimos el intervalo $[a, b]$ en $n$ subintervalos con paso $h=\\frac{b-a}{n}$; los nodos son $x_i=a+ih$ y $f_i=f(x_i)$. En cada subintervalo sustituimos\n       la función por un polinomio y lo integramos de forma exacta:</p>\n       <ul><li><strong>método del rectángulo (punto medio)</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$, error $\\frac{(b-a)h^2}{24}f''(\\xi)$;</li>\n       <li><strong>método del trapecio</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$, error $-\\frac{(b-a)h^2}{12}f''(\\xi)$;</li>\n       <li><strong>método de Simpson</strong> ($n$ par, una parábola en cada par de subintervalos) $S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$, error $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$.</li></ul>",
    {
     "fig": "v7-lichobeznik",
     "caption": "Método del trapecio para $f(x)=2+\\sin 1{,}5x+0{,}3x$ en $[0; 4]$. Aumenta el número de subintervalos y observa cómo el error disminuye aproximadamente con el cuadrado del paso; con $n$ par se muestra también el resultado del método de Simpson."
    },
    "<p><strong>Orden de precisión.</strong> El error de una fórmula compuesta se comporta como $Ch^p$. Los métodos del rectángulo y del trapecio tienen $p=2$ (paso a la mitad → error cuatro veces menor);\n       el de Simpson, $p=4$ (dieciséis veces menor), y es exacto para polinomios de hasta tercer grado inclusive. El método del punto medio tiene aproximadamente la mitad del error, con signo opuesto, que el del trapecio;\n       por eso $S_{2n}=\\frac{2M_n+T_n}{3}$. A partir de dos cálculos con pasos $h$ y $\\frac{h}{2}$ estimamos el error mediante la <strong>regla de Runge</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$,\n       y el resultado mejorado $\\frac{4T_{2n}-T_n}{3}$ es precisamente la fórmula de Simpson (extrapolación de Richardson, en la que se basa el método de Romberg).</p>"
   ],
   "examples": [
    {
     "task": "Estime $f'(0)$ para $f(x)=e^x$ con paso $h=0{,}1$ mediante la diferencia progresiva y la centrada, y compare los errores.",
     "steps": [
      "Progresiva: $\\frac{e^{0{,}1}-1}{0{,}1}=\\frac{0{,}105171}{0{,}1}\\approx 1{,}051709$, error $\\approx 0{,}0517$.",
      "Centrada: $\\frac{e^{0{,}1}-e^{-0{,}1}}{0{,}2}\\approx\\frac{1{,}105171-0{,}904837}{0{,}2}\\approx 1{,}001668$, error $\\approx 0{,}0017$.",
      "Exactamente, $f'(0)=1$. Las estimaciones del error $\\frac{h}{2}f''=0{,}05$ y $\\frac{h^2}{6}f'''\\approx 0{,}0017$ concuerdan bien con el resultado."
     ]
    },
    {
     "task": "Calcule $\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0{,}785398$ mediante los métodos del trapecio y de Simpson con $n=2$.",
     "steps": [
      "$h=0{,}5$, $f(0)=1$, $f(0{,}5)=0{,}8$, $f(1)=0{,}5$.",
      "$T_2=\\frac{0{,}5}{2}(1+2\\cdot 0{,}8+0{,}5)=0{,}25\\cdot 3{,}1=0{,}775$, error $\\approx 0{,}0104$.",
      "$S_2=\\frac{0{,}5}{3}(1+4\\cdot 0{,}8+0{,}5)=\\frac{0{,}5\\cdot 4{,}7}{3}\\approx 0{,}783333$, error $\\approx 0{,}0021$.",
      "Con el mismo número de evaluaciones de la función, el método de Simpson es bastante más preciso."
     ]
    }
   ]
  },
  "v7-ode": {
   "title": "Resolución numérica de ecuaciones diferenciales",
   "summary": "Problema de Cauchy, método de Euler, método de Heun (Euler mejorado), método de Runge-Kutta de orden 4, error local y global, elección del paso y estabilidad.",
   "theory": [
    "<p>Resolvemos el <strong>problema de Cauchy</strong> (de valor inicial) $y'=f(x, y)$, $y(x_0)=y_0$, que en general no sabemos resolver analíticamente. Elegimos un <strong>paso</strong> $h$ y los nodos $x_k=x_0+kh$, y vamos\n       calculando aproximaciones $y_k\\approx y(x_k)$. Los métodos de un paso calculan $y_{k+1}$ solo a partir del par $[x_k; y_k]$. El <strong>error local</strong> es el error de un solo paso\n       (suponiendo $y_k$ exacto); el <strong>error global</strong> $y(x_k)-y_k$ es el error acumulado en el nodo. Si el error local es $O(h^{p+1})$, tras $\\frac{X-x_0}{h}$ pasos\n       el error global es $O(h^p)$ y decimos que el método tiene <strong>orden</strong> $p$.</p>",
    "<p><strong>Método de Euler.</strong> En el subintervalo $[x_k, x_{k+1}]$ sustituimos la solución por la tangente con pendiente $f(x_k, y_k)$ del campo de direcciones:\n       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$\n       Es el método más sencillo, de primer orden: error local $\\frac{h^2}{2}y''(\\xi)$, global $O(h)$. Reducir el paso a la mitad solo reduce el error aproximadamente a la mitad, por eso en la práctica\n       se usa más bien como punto de partida para métodos más precisos.</p>",
    {
     "fig": "v7-euler",
     "caption": "Problema $y'=y$, $y(0)=1$ en $[0; 2]$ con solución exacta $y=e^x$ (curva negra). El método de Euler (azul) se queda sistemáticamente por debajo; el de Heun (verde) es mucho más preciso con el mismo paso. Aumenta el número de pasos y compara la rapidez con que disminuyen los errores."
    },
    "<p>El <strong>método de Heun (Euler mejorado)</strong> es de tipo predictor-corrector: con un paso de Euler estimamos el valor al final del subintervalo y después promediamos las pendientes:\n       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$\n       Corresponde a la regla del trapecio y tiene <strong>orden 2</strong>. Parecido es el <em>método de Euler modificado (del punto medio)</em> $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$.</p>\n       <p>El <strong>método de Runge-Kutta de orden 4 (RK4)</strong> evalúa en cada paso cuatro pendientes\n       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$\n       y toma su media ponderada $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$, análoga a la regla de Simpson. Con la mitad del paso, el error disminuye unas 16 veces.</p>",
    "<p><strong>Paso y error.</strong> Para un método de orden $p$, el error global es aproximadamente $Ch^p$. A partir de dos cálculos con pasos $h$ y $\\frac{h}{2}$ lo estimamos con la <strong>regla de Runge</strong>\n       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$. Los programas modernos adaptan el paso (paso adaptativo, por ejemplo, con pares de métodos de Runge-Kutta de órdenes distintos).\n       Un paso menor no siempre significa un resultado mejor: aumentan el número de operaciones y los errores de redondeo.</p>\n       <p><strong>Estabilidad.</strong> Para la ecuación de prueba $y'=\\lambda y$ con $\\lambda&lt;0$, el método de Euler da $y_{k+1}=(1+h\\lambda)y_k$; la solución numérica tiende a cero solo si\n       $|1+h\\lambda|&lt;1$, es decir, $h&lt;\\frac{2}{|\\lambda|}$. Con un paso mayor oscila y crece, aunque la solución exacta decrece rápidamente. Las ecuaciones con escalas de tiempo muy diferentes\n       (ecuaciones <em>rígidas</em>) se resuelven por eso con métodos implícitos, por ejemplo, el método de Euler implícito $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$, que es estable para todo $h&gt;0$.</p>"
   ],
   "examples": [
    {
     "task": "Resuelva el problema $y'=y$, $y(0)=1$ con paso $h=0{,}5$ mediante los métodos de Euler y de Heun hasta $x=1$ y compare con $e\\approx 2{,}71828$.",
     "steps": [
      "Euler: $y_1=1+0{,}5\\cdot 1=1{,}5$, $y_2=1{,}5+0{,}5\\cdot 1{,}5=2{,}25$, error $\\approx 0{,}468$.",
      "Heun, paso 1: predictor $\\tilde{y}_1=1{,}5$, $y_1=1+0{,}25\\,(1+1{,}5)=1{,}625$.",
      "Heun, paso 2: $\\tilde{y}_2=1{,}625+0{,}5\\cdot 1{,}625=2{,}4375$, $y_2=1{,}625+0{,}25\\,(1{,}625+2{,}4375)=2{,}640625$, error $\\approx 0{,}078$.",
      "Con el mismo paso, el método de Heun es unas seis veces más preciso."
     ]
    },
    {
     "task": "Haga un paso del método RK4 con paso $h=0{,}1$ para el problema $y'=x+y$, $y(0)=1$. La solución exacta es $y=2e^x-x-1$.",
     "steps": [
      "$k_1=f(0; 1)=1$, $k_2=f(0{,}05;\\ 1+0{,}05\\cdot 1)=0{,}05+1{,}05=1{,}1$.",
      "$k_3=f(0{,}05;\\ 1+0{,}05\\cdot 1{,}1)=0{,}05+1{,}055=1{,}105$, $k_4=f(0{,}1;\\ 1+0{,}1\\cdot 1{,}105)=0{,}1+1{,}1105=1{,}2105$.",
      "$y_1=1+\\frac{0{,}1}{6}(1+2{,}2+2{,}21+1{,}2105)=1+\\frac{0{,}66205}{6}\\approx 1{,}1103417$.",
      "Exactamente, $y(0{,}1)=2e^{0{,}1}-1{,}1\\approx 1{,}1103418$; el error es de aproximadamente $10^{-7}$."
     ]
    }
   ]
  },
  "v7-matice": {
   "title": "Algoritmos para trabajar con matrices",
   "summary": "Eliminación gaussiana con pivoteo, factorización LU, complejidad de los métodos directos, iteraciones de Jacobi y de Gauss-Seidel, método de la potencia para el valor propio dominante.",
   "theory": [
    "<p>La <strong>eliminación gaussiana</strong> resuelve el sistema $Ax=b$ con una matriz regular de tamaño $n\\times n$ en dos fases. En la <em>eliminación hacia delante</em>, para $k=1, \\dots, n-1$\n       restamos a las filas $i&gt;k$ un múltiplo de la fila $k$-ésima con el <strong>multiplicador</strong> $l_{ik}=\\frac{a_{ik}}{a_{kk}}$, de modo que bajo la diagonal aparecen ceros y la matriz\n       pasa a ser triangular superior. Con la <em>sustitución hacia atrás</em> calculamos $x_n, x_{n-1}, \\dots, x_1$ sustituyendo de abajo arriba.</p>\n       <p>Si el <em>elemento pivote</em> $a_{kk}$ es nulo o muy pequeño, los multiplicadores son enormes y los errores de redondeo crecen. Por eso se usa\n       el <strong>pivoteo parcial</strong>: antes del paso $k$-ésimo intercambiamos filas de modo que $|a_{kk}|$ sea el mayor de la columna $k$-ésima en la diagonal y por debajo de ella. Entonces $|l_{ik}|\\le 1$.</p>",
    "<p><strong>Factorización LU.</strong> Los multiplicadores de la eliminación forman una matriz triangular inferior $L$ con unos en la diagonal, y la matriz triangular superior resultante es $U$; se cumple\n       $A=LU$ (con pivoteo, $PA=LU$, donde $P$ es una matriz de permutación). El sistema se resuelve después mediante dos sistemas triangulares:\n       $$Ly=b\\ \\text{(sustitución hacia delante)},\\qquad Ux=y\\ \\text{(sustitución hacia atrás)}.$$\n       La factorización compensa si resolvemos varios sistemas con la misma matriz y distintos términos independientes. También obtenemos el determinante $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$.\n       Para matrices simétricas definidas positivas existe la <em>factorización de Cholesky</em> $A=LL^{T}$, más económica.</p>",
    "<p><strong>Complejidad.</strong> La eliminación gaussiana cuesta aproximadamente $\\frac{2}{3}n^3$ operaciones aritméticas, y cada sustitución triangular unas $n^2$. Al duplicar\n       el tamaño, el tiempo de eliminación se multiplica aproximadamente por ocho. Para resolver un sistema no hace falta calcular la matriz inversa (unas $2n^3$ operaciones). Para matrices <em>banda</em> con ancho de banda $w$ el coste baja\n       a $O(nw^2)$, y para las tridiagonales a $O(n)$. En matrices grandes <em>dispersas</em> (la mayoría de los elementos nulos) la eliminación rellena los ceros, por eso se aplican métodos iterativos.</p>",
    "<p><strong>Métodos iterativos.</strong> De la $i$-ésima ecuación despejamos $x_i$ y sustituimos la aproximación anterior. El <strong>método de Jacobi</strong> usa solo valores del paso anterior;\n       el de <strong>Gauss-Seidel</strong> aprovecha enseguida las componentes ya recalculadas:\n       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$\n       Ambos métodos convergen para cualquier valor inicial si la matriz es <strong>estrictamente diagonal dominante</strong> ($|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$ en cada fila); el de Gauss-Seidel, también para una matriz simétrica\n       definida positiva. Un paso cuesta del orden de tantas operaciones como elementos no nulos tiene la matriz. Paramos cuando $\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$ o cuando el residuo $\\|b-Ax^{(k)}\\|$ es pequeño.</p>",
    "<p><strong>Método de la potencia.</strong> Supongamos que la matriz $A$ tiene valores propios $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$ (el dominante $\\lambda_1$ es el único de mayor valor absoluto).\n       La multiplicación repetida $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$ amplifica la componente en la dirección del vector propio $v_1$, de modo que $x^{(k)}$ se acerca a $\\pm v_1$ con rapidez $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$.\n       El valor propio se estima con el <strong>cociente de Rayleigh</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$ o con el cociente de las componentes correspondientes $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$.\n       El valor propio de menor valor absoluto se halla con el <em>método de la potencia inversa</em> (método de la potencia para $A^{-1}$; en cada paso se resuelve un sistema con la factorización LU). En este principio\n       se basa también la clasificación de páginas PageRank.</p>"
   ],
   "examples": [
    {
     "task": "Halle la factorización LU de la matriz $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$ y resuelva $Ax=b$ para $b=(4;\\ 10;\\ 24)^{T}$.",
     "steps": [
      "Paso 1: $l_{21}=\\frac{4}{2}=2$, $l_{31}=\\frac{8}{2}=4$; las filas pasan a ser $(0, 1, 1)$ y $(0, 3, 5)$.",
      "Paso 2: $l_{32}=\\frac{3}{1}=3$; tercera fila $(0, 0, 2)$. Por tanto, $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$, $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$.",
      "$Ly=b$: $y_1=4$, $y_2=10-2\\cdot 4=2$, $y_3=24-4\\cdot 4-3\\cdot 2=2$.",
      "$Ux=y$: $x_3=\\frac{2}{2}=1$, $x_2=2-1=1$, $x_1=\\frac{4-1-1}{2}=1$. Solución $x=(1;\\ 1;\\ 1)^{T}$; además, $\\det A=2\\cdot 1\\cdot 2=4$."
     ]
    },
    {
     "task": "Resuelva el sistema $4x_1-x_2=7$, $x_1+3x_2=5$ (solución $x=(2;\\ 1)$) desde el punto $(0;\\ 0)$ con dos pasos de los métodos de Jacobi y de Gauss-Seidel.",
     "steps": [
      "Fórmulas de iteración: $x_1=\\frac{7+x_2}{4}$, $x_2=\\frac{5-x_1}{3}$. La matriz es diagonal dominante ($4&gt;1$, $3&gt;1$); ambos métodos convergen.",
      "Jacobi: $x^{(1)}=(1{,}75;\\ 1{,}6667)$, $x^{(2)}=\\left(\\frac{7+1{,}6667}{4};\\ \\frac{5-1{,}75}{3}\\right)=(2{,}1667;\\ 1{,}0833)$.",
      "Gauss-Seidel: $x_1^{(1)}=1{,}75$, e inmediatamente $x_2^{(1)}=\\frac{5-1{,}75}{3}=1{,}0833$; $x_1^{(2)}=\\frac{7+1{,}0833}{4}=2{,}0208$, $x_2^{(2)}=\\frac{5-2{,}0208}{3}=0{,}9931$.",
      "Tras dos pasos, el método de Gauss-Seidel tiene un error de aproximadamente $0{,}02$, y el de Jacobi, de unos $0{,}17$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Presná hodnota je ${@5}$.)": "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (El valor exacto es ${@5}$).",
  "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².": "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².",
  "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, teda asi ${@6}\\,\\%$.": "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. En una potencia, el error relativo se multiplica por el exponente: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, es decir, aproximadamente ${@6}\\,\\%$.",
  "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.": "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Cerca de $\\pi$ el seno es pequeño y el problema está mal condicionado.",
  "$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{{@0}}\\approx {@1}$.": "$f''(x)=e^{x}$ es creciente, por eso $M_2=e^{{@0}}\\approx {@1}$.",
  "$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Odčítanie blízkych čísel je zle podmienené.": "$f'(x)=1$, por lo tanto $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. La resta de números cercanos está mal condicionada.",
  "$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Presne $\\sqrt{{@5}}\\approx {@6}$.)": "$f'(x)=2x$, por lo tanto $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Exactamente $\\sqrt{{@5}}\\approx {@6}$).",
  "$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}": "$f'(x)=\\frac{1}{x}$, por lo tanto $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Exactamente $f'({@8})\\approx {@9}$, el error es aproximadamente ${@10}$.",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Exactamente $f'({@8})\\approx {@9}$, el error es aproximadamente ${@10}$.",
  "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.": "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.",
  "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Presne $\\sqrt{{@6}}\\approx {@7}$.)": "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Exactamente $\\sqrt{{@6}}\\approx {@7}$).",
  "$f(x_0, y_0)={@0}$, prediktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.": "$f(x_0, y_0)={@0}$, predictor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.",
  "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Výsledný interval je $[{@5};\\ {@6}]$.": "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. El intervalo resultante es $[{@5};\\ {@6}]$.",
  "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.": "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.",
  "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Presná hodnota je ${@6}$, chyba asi ${@7}$.": "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. El valor exacto es ${@6}$, el error aproximadamente ${@7}$.",
  "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.": "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.",
  "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.": "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.",
  "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleighov podiel: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Presné dominantné vlastné číslo je $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.": "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Cociente de Rayleigh: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. El valor propio dominante exacto es $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.",
  "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)": "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Calculamos en radianes y no redondeamos los resultados intermedios).",
  "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.": "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.",
  "${@0}$, teda $M_2=1$.": "${@0}$, por lo tanto $M_2=1$.",
  "${@0}\\approx {@1}$, absolútna chyba $\\Delta\\approx {@2}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, teda približne ${@7}\\,\\%$.": "${@0}\\approx {@1}$, error absoluto $\\Delta\\approx {@2}$. Error relativo $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, es decir, aproximadamente ${@7}\\,\\%$.",
  "${@0}\\approx {@1}$, teda $\\Delta=|{@2}-{@3}|\\approx {@4}$.": "${@0}\\approx {@1}$, por lo tanto $\\Delta=|{@2}-{@3}|\\approx {@4}$.",
  "(tu len $f_1$)": "(aquí solo $f_1$)",
  ", ale ${@0}&gt;{@1}$": ", pero ${@0}&gt;{@1}$",
  "Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).": "El error absoluto es $|x-\\tilde{x}|$. Toma el valor de la constante con suficientes cifras (de la calculadora).",
  "Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.": "Si el error es aproximadamente $Ch^p$, reducir el paso $k$ veces reduce el error $k^p$ veces. Los métodos del trapecio y del punto medio tienen $p=2$; el de Simpson, $p=4$.",
  "Aká je hranica absolútnej chyby obsahu? {@0}": "¿Cuál es la cota del error absoluto del área? {@0}",
  "Aká je relatívna chyba $x^{{@0}}$ v percentách? {@1}": "¿Cuál es el error relativo $x^{{@0}}$ en porcentaje? {@1}",
  "Aká je relatívna chyba v percentách? {@0}": "¿Cuál es el error relativo en porcentaje? {@0}",
  "Aký interval dostaneš po druhom kroku?": "¿Qué intervalo obtienes después del segundo paso?",
  "Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)": "¿Qué intervalo obtienes después del primer paso? (separa los extremos con punto y coma)",
  "Aký je krok $h$?": "¿Cuál es el paso $h$?",
  "Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?": "¿Cuál es el multiplicador $l_{21}$ (el múltiplo de la primera ecuación que restas de la segunda)?",
  "Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?": "¿Cuál es el multiplicador $l_{32}$ en el segundo paso de la eliminación?",
  "Aproximácia $\\tilde{x}={@0}$ má absolútnu chybu nanajvýš ${@1}$. Koľko má platných cifier?": "La aproximación $\\tilde{x}={@0}$ tiene un error absoluto de como máximo ${@1}$. ¿Cuántas cifras significativas tiene?",
  "Centrálna diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.": "Diferencia central: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Calcula las funciones trigonométricas en radianes.",
  "Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.": "El error es proporcional a $h^{p}$, por eso se reduce $k^{p}$ veces, no $k\\cdot p$ veces.",
  "Chyba lineárnej interpolácie je $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; za $f''(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.": "El error de la interpolación lineal es $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; en lugar de $f''(\\xi)$ sustituye el máximo del valor absoluto de la segunda derivada en el intervalo.",
  "Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.": "El error no es proporcional al propio $h$, sino a $h^{p}$, donde $p$ es el orden de precisión del método.",
  "Chyba sa nezmenšuje úmerne kroku: metóda má rád {@0}, takže chyba je úmerná $h^{{@1}}$.": "El error no disminuye proporcionalmente al paso: el método tiene orden {@0}, así que el error es proporcional a $h^{{@1}}$.",
  "Chyba {@0} je úmerná $h^{{@1}}$ (rád presnosti {@2}). Pri kroku $\\frac{h}{{@3}}$ sa zmenší ${@4}^{{@5}}={@6}$-krát.": "El error {@0} es proporcional a $h^{{@1}}$ (orden de precisión {@2}). Con el paso $\\frac{h}{{@3}}$ se reduce ${@4}^{{@5}}={@6}$ veces.",
  "Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.": "Los errores de los lados no se multiplican. La estimación lineal es $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.",
  "Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, preto {@4}. Spolu s {@5} {@6} pred desatinnou čiarkou {@7}.": "La cifra en la posición $10^{-j}$ es significativa si el error no supera $\\frac{1}{2}\\cdot 10^{-j}$. Se cumple ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, por eso {@4}. Junto con {@5} {@6} antes de la coma decimal, {@7}.",
  "Derivácia $x^2 - a$ je $2x$, nie $x$.": "La derivada de $x^2 - a$ es $2x$, no $x$.",
  "Dopredná diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.": "Diferencia progresiva: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Calcula las funciones trigonométricas en radianes.",
  "Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.": "Sustituye $x_0$ en $g$ y el resultado vuelve a sustituirlo en $g$. No redondees los resultados intermedios.",
  "Dosaď do $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.": "Sustituye en $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; la derivada $x-c$ es 1.",
  "Dosaď do vzorca {@0} diferencie. {@1}": "Sustituye en la fórmula de la diferencia {@0}. {@1}",
  "Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.": "Paso de Euler: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, donde $x_k=kh$. Haz dos pasos.",
  "Eulerova a Heunova metóda pre y' = y, y(0) = 1": "Métodos de Euler y de Heun para y' = y, y(0) = 1",
  "Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.": "El método de Euler tiene orden 1, el de Heun orden 2, RK4 orden 4. El error es aproximadamente $Ch^p$.",
  "Eulerovou metódou": "con el método de Euler",
  "Funkciu $f(x)={@0}$ nahradíme na intervale $[{@1};\\ {@2}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x={@3}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}": "Sustituimos la función $f(x)={@0}$ en el intervalo $[{@1};\\ {@2}]$ por una interpolación lineal. Acota superiormente el error de interpolación en el punto $x={@3}$ con la fórmula $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}",
  "Gaussova eliminácia sústavy s ${@0}$ neznámymi trvá na istom počítači ${@1}$ s. Približne koľko sekúnd potrvá sústava s ${@2}$ neznámymi (plná matica)?": "La eliminación gaussiana de un sistema con ${@0}$ incógnitas tarda en cierto ordenador ${@1}$ s. ¿Aproximadamente cuántos segundos tardará un sistema con ${@2}$ incógnitas (matriz llena)?",
  "Gaussovou elimináciou vyrieš sústavu {@0}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.": "Resuelve por eliminación gaussiana el sistema {@0}. Escribe $x_1; x_2; x_3$ separados por punto y coma.",
  "Gaussovou–Seidelovou": "de Gauss-Seidel",
  "Heunovou metódou": "con el método de Heun",
  "Hodnota $x={@0}\\pm {@1}$. Odhadni relatívnu chybu výrazu $x^{{@2}}$ v percentách. {@3}": "Valor $x={@0}\\pm {@1}$. Estima el error relativo de la expresión $x^{{@2}}$ en porcentaje. {@3}",
  "Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.": "Busca el menor $n$ con $2^n$ al menos así de grande.",
  "Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.": "Busca el menor orden $10^{-k}$ para el que el error no supere $\\frac{1}{2}\\cdot 10^{-k}$.",
  "Interpolačný polynóm 2. stupňa prechádza bodmi {@0}. Vypočítaj jeho hodnotu v bode $x={@1}$. {@2}": "El polinomio de interpolación de grado 2 pasa por los puntos {@0}. Calcula su valor en el punto $x={@1}$. {@2}",
  "Jacobiho": "de Jacobi",
  "Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.": "La calculadora está en grados. En los métodos numéricos las funciones trigonométricas se calculan en radianes.",
  "Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.": "La calculadora está en grados. Al derivar funciones trigonométricas calculamos en radianes.",
  "Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.": "Cada paso de bisección solo divide el intervalo por la mitad, por eso hace falta el logaritmo en base 2, no en base 10.",
  "Koreň leží v intervale dĺžky ${@0}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš ${@1}$?": "La raíz está en un intervalo de longitud ${@0}$. ¿Cuántos pasos de bisección hacen falta como mínimo para que el intervalo resultante tenga longitud de como máximo ${@1}$?",
  "Koľko desatinných miest je platných?": "¿Cuántos decimales son significativos?",
  "Koľko najmenej krokov bisekcie treba?": "¿Cuántos pasos de bisección hacen falta como mínimo?",
  "Koľko platných cifier má aproximácia celkovo?": "¿Cuántas cifras significativas tiene la aproximación en total?",
  "Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?": "¿Cuántas veces hay que reducir el intervalo, es decir, cuánto vale $\\frac{b-a}{\\varepsilon}$?",
  "Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.": "Los valores extremos $f_0$ y $f_n$ tienen en el método del trapecio peso $\\frac{h}{2}$; los interiores, $h$. Los puntos extremos hay que contarlos solo a medias.",
  "Krok $h$ zmenšíme {@0}. Približne koľkokrát sa zmenší chyba {@1} (pre hladkú funkciu)?": "Reducimos el paso $h$ {@0}. ¿Aproximadamente cuántas veces se reduce el error {@1} (para una función suave)?",
  "Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.": "Solo el coste de la sustitución triangular crece cuadráticamente. La fase de eliminación tiene complejidad $O(n^3)$.",
  "Lagrangeove bázové polynómy v bode ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.": "Polinomios de la base de Lagrange en el punto ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.",
  "Lichobežníková metóda pre funkciu na intervale od 0 do 4": "Método del trapecio para una función en el intervalo de 0 a 4",
  "Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.": "Método del trapecio: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.",
  "Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.": "Interpolación lineal: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.",
  "Metóda má rád {@0}, globálna chyba je približne $Ch^{{@1}}$. Pri kroku $\\frac{h}{{@2}}$ sa zmenší ${@3}^{{@4}}={@5}$-krát: $\\frac{{@6}}{{@7}}={@8}$.": "El método tiene orden {@0}, el error global es aproximadamente $Ch^{{@1}}$. Con el paso $\\frac{h}{{@2}}$ se reduce ${@3}^{{@4}}={@5}$ veces: $\\frac{{@6}}{{@7}}={@8}$.",
  "Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi {@0}. Urči {@1}. {@2}": "Por el método de mínimos cuadrados ajusta la recta $y=ax+b$ a los puntos {@0}. Determina {@1}. {@2}",
  "Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A={@0}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}": "Con el método de la potencia estimamos el valor propio dominante de la matriz simétrica $A={@0}$. Desde el inicio $x^{(0)}=(1;\\ 1)^{T}$ calcula $x^{(1)}=Ax^{(0)}$ y el cociente de Rayleigh $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}",
  "Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.": "El multiplicador $l_{32}$ se calcula a partir de la matriz transformada tras el primer paso de la eliminación, no del elemento original $a_{32}$.",
  "Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.": "Multiplicador $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (de la matriz actual, ya transformada); a la fila $i$ réstale $l_{ik}$ veces la fila $k$. La matriz triangular superior resultante es $U$.",
  "Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.": "El multiplicador es el cociente $l_{21} = \\frac{a_{21}}{a_{11}}$; hay que dividir el elemento por el pivote.",
  "Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.": "El multiplicador es el cociente $l_{31} = \\frac{a_{31}}{a_{11}}$; hay que dividir el elemento por el pivote.",
  "Multiplikátory: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; po prvom kroku má druhý riadok tvar $(0, {@6}, {@7})$ a tretí $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.": "Multiplicadores: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; tras el primer paso la segunda fila tiene la forma $(0, {@6}, {@7})$ y la tercera $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.",
  "Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.": "Primero el predictor de Euler $\\tilde{y}_1=y_0+hf(x_0, y_0)$, después $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.",
  "Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.": "Primero calcula las diferencias de primer orden $f[x_0, x_1]$ y $f[x_1, x_2]$, después divide su diferencia por $x_2-x_0$.",
  "Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; zlomok sa odčítava, nie pripočítava.": "El paso de Newton es $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; la fracción se resta, no se suma.",
  "Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "El paso de Newton es $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Newtonova metóda: dotyčnice ku grafu y = x² − 2": "Método de Newton: tangentes a la gráfica de y = x² − 2",
  "Newtonovou metódou hľadáme $\\sqrt{{@0}}$ ako koreň funkcie $f(x)=x^2-{@1}$. Vypočítaj $x_1$ zo štartu $x_0={@2}$. {@3}": "Con el método de Newton buscamos $\\sqrt{{@0}}$ como raíz de la función $f(x)=x^2-{@1}$. Calcula $x_1$ desde el inicio $x_0={@2}$. {@3}",
  "Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.": "Ecuaciones normales: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; de ellas, $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.",
  "Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A={@0}$ a urči {@1}.": "Halla la descomposición LU (sin intercambio de filas, $L$ tiene unos en la diagonal) de la matriz $A={@0}$ y determina {@1}.",
  "Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.": "Halla el menor orden $10^{-k}$ para el que aún se cumple $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, y cuenta las cifras desde la primera no nula hasta ese orden.",
  "Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.": "Método del rectángulo: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.",
  "Odhadni deriváciu funkcie $f(x)={@0}$ v bode $x={@1}$ {@2} diferenciou s krokom $h={@3}$. {@4}": "Estima la derivada de la función $f(x)={@0}$ en el punto $x={@1}$ con la diferencia {@2} de paso $h={@3}$. {@4}",
  "Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.": "Se cumple $\\delta(x^n)\\approx|n|\\,\\delta x$, donde $\\delta x=\\frac{\\Delta x}{|x|}$.",
  "Po $n$ krokoch má interval dĺžku $\\frac{{@0}}{2^n}$. Treba $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, teda $n\\ge\\log_2 {@4}\\approx {@5}$. Najmenšie celé je $n={@6}$.": "Después de $n$ pasos, el intervalo tiene longitud $\\frac{{@0}}{2^n}$. Hace falta $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, es decir, $n\\ge\\log_2 {@4}\\approx {@5}$. El menor entero es $n={@6}$.",
  "Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.": "Te quedaste con la mitad equivocada. La raíz está en la mitad en cuyos extremos $f$ tiene signos opuestos.",
  "Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.": "Usa $P(x)=\\sum y_i\\ell_i(x)$ con $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, o la forma de Newton con diferencias divididas.",
  "Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.": "Usa $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$; aquí es $a-b=1$.",
  "Počet krokov": "Número de pasos",
  "Počet krokov n": "Número de pasos n",
  "Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil ${@0}$-krát, čas teda ${@1}^3={@2}$-krát: ${@3}\\cdot {@4}={@5}$ s.": "El número de operaciones es aproximadamente $\\frac{2}{3}n^3$; el tiempo crece con el cubo de la dimensión. La dimensión aumentó ${@0}$ veces, así que el tiempo ${@1}^3={@2}$ veces: ${@3}\\cdot {@4}={@5}$ s.",
  "Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.": "Para $f(x)=\\ln x$ sale $\\kappa=\\frac{1}{|\\ln x|}$.",
  "Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.": "Para $f(x)=\\sin x$ es $\\kappa=|x\\cot x|$. Calcula en radianes.",
  "Pre body {@0} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). {@1}": "Para los puntos {@0} calcula la diferencia dividida de segundo orden $f[x_0, x_1, x_2]$ (el coeficiente de $(x-x_0)(x-x_1)$ en la forma de Newton). {@1}",
  "Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.": "Para una función de dos variables, $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; en $S=ab$ las derivadas parciales son $b$ y $a$.",
  "Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.": "En el método de Gauss-Seidel, en la segunda y la tercera ecuación ya usamos los valores nuevos.",
  "Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.": "En el método de Jacobi sustituimos en todas partes los valores iniciales.",
  "Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.": "En el método de Jacobi se sustituyen en todas las ecuaciones solo los valores iniciales $x^{(0)}$, no las componentes recién calculadas.",
  "Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.": "En la diferencia central, la distancia entre los puntos $x-h$ y $x+h$ es $2h$; la diferencia de valores hay que dividirla por $2h$, no por $h$.",
  "Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.": "En la diferencia de segundo orden se divide por la diferencia de los nodos extremos $x_2 - x_0$, no por $x_2 - x_1$.",
  "Priamy chod s multiplikátormi $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá hornú trojuholníkovú maticu $U={@3}$ a pravú stranu $y=({@4})^{T}$. Spätný chod: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.": "La fase de eliminación con los multiplicadores $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ da la matriz triangular superior $U={@3}$ y el lado derecho $y=({@4})^{T}$. Sustitución regresiva: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.",
  "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.": "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.",
  "Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.": "Calculaste el cociente de Rayleigh con el vector $x^{(0)}$. El problema pide el cociente para $x^{(1)}$, así que aún hay que calcular $Ax^{(1)}$.",
  "Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.": "El error relativo es $\\frac{|x-\\tilde{x}|}{|x|}$; para expresarlo en porcentaje multiplícalo por 100.",
  "Relatívna chyba vstupu sa teda zväčší asi {@0}-krát — úloha je zle podmienená.": "Así, el error relativo de la entrada aumenta aproximadamente {@0} veces: el problema está mal condicionado.",
  "Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.": "Resuelve la inecuación $\\frac{b-a}{2^n}\\le\\varepsilon$, es decir, $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, y redondea hacia arriba.",
  "Riešenie istej úlohy {@0} s krokom $h$ má v koncovom bode globálnu chybu približne ${@1}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{{@2}}$? {@3}": "La solución de cierto problema {@0} con paso $h$ tiene en el punto final un error global de aproximadamente ${@1}$. ¿Qué error podemos esperar con el paso $\\frac{h}{{@2}}$? {@3}",
  "Rovnica $x^2-{@0}=0$ má koreň v intervale $[{@1};\\ {@2}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).": "La ecuación $x^2-{@0}=0$ tiene una raíz en el intervalo $[{@1};\\ {@2}]$. Haz dos pasos del método de bisección y escribe el intervalo resultante como par de extremos separados por punto y coma (p. ej., 1,25; 1,5).",
  "Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)={@0}$ (rovnica ${@1}$) a štartom $x_0={@2}$. Vypočítaj $x_2$. {@3}": "Resolvemos la ecuación por el método de iteración simple $x_{k+1}=g(x_k)$ con $g(x)={@0}$ (ecuación ${@1}$) e inicio $x_0={@2}$. Calcula $x_2$. {@3}",
  "Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.": "La diferencia de las diferencias de primer orden aún hay que dividirla por la diferencia de los nodos extremos $x_2 - x_0$.",
  "Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = {@0}$, až potom násobiť $(x - x_0)$.": "La diferencia de valores $y_1 - y_0$ hay que dividirla por la longitud del paso $x_1 - x_0 = {@0}$, y solo después multiplicar $(x - x_0)$.",
  "Rozšírime výraz súčtom odmocnín: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.": "Multiplicamos la expresión por la suma de las raíces: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.",
  "Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.": "El método de Simpson tiene orden de precisión 4, no 2 como el del trapecio.",
  "Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.": "Método de Simpson: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ par.",
  "Simpsonovej metódy": "del método de Simpson",
  "Simpsonovou metódou": "con el método de Simpson",
  "Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.": "Las pendientes $k_2$ y $k_3$ tienen en RK4 peso doble: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.",
  "Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.": "Las pendientes se promedian: se multiplica por $\\frac{h}{2}$, no por $h$.",
  "Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.": "En el segundo paso hay que recalcular la pendiente en el nuevo punto $(x_1, y_1)$; no basta con hacer un paso de longitud $2h$ con la pendiente del inicio.",
  "Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.": "Solo contaste los decimales significativos. A las cifras significativas pertenecen también las cifras antes de la coma decimal.",
  "Spätným chodom urči najprv $x_3$.": "Con la sustitución regresiva determina primero $x_3$.",
  "Strany obdĺžnika sme namerali s presnosťou $\\pm {@0}$ cm: $a={@1}$ cm a $b={@2}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. {@3}": "Medimos los lados de un rectángulo con una precisión de $\\pm {@0}$ cm: $a={@1}$ cm y $b={@2}$ cm. Estima la cota del error absoluto del área $S=ab$ (en cm²) mediante la aproximación lineal. {@3}",
  "Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.": "El método del punto medio toma los valores en los puntos medios de los subintervalos, no en sus extremos izquierdos.",
  "Stredy dielikov: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$": "Puntos medios de los subintervalos: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$",
  "Sústavu {@0} rieš {@1} metódou zo štartu $x^{(0)}={@2}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.": "Resuelve el sistema {@0} con el método {@1} desde el inicio $x^{(0)}={@2}$. Calcula la primera iteración $x^{(1)}$ y escribe sus tres componentes separadas por punto y coma, cada una redondeada a 4 decimales.",
  "Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.": "El producto de los elementos diagonales da el determinante solo en una matriz triangular. Multiplica la diagonal de la matriz $U$, no de $A$.",
  "Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.": "Este es el paso de Jacobi. En el método de Gauss-Seidel sustituye en las siguientes ecuaciones enseguida los valores nuevos $x_1^{(1)}, x_2^{(1)}$.",
  "Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).": "Este es el error absoluto. El relativo se obtiene dividiendo el error absoluto por el valor $|x|$ (y en porcentaje, además, por 100).",
  "Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.": "Este es solo $x_1$. Sustituye el resultado una vez más en $g$.",
  "Toto je až $y_1$. Urob ešte druhý krok.": "Este es solo $y_1$. Haz también el segundo paso.",
  "Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.": "Este es solo el predictor de Euler $\\tilde{y}_1$. El método de Heun aún lo corrige con el promedio de dos pendientes.",
  "Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.": "Este es solo el numerador $(x^{(1)})^{T}Ax^{(1)}$. Aún hay que dividirlo por $(x^{(1)})^{T}x^{(1)}$.",
  "Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.": "Este es el método del trapecio. El método de Simpson usa los pesos $1, 4, 2, 4, \\dots, 4, 1$ y multiplica por $\\frac{h}{3}$.",
  "Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.": "Esta es la interpolación lineal solo con los dos nodos vecinos. El polinomio de grado 2 usa los tres puntos.",
  "Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.": "Esta es la estimación $\\frac{M_2h^2}{8}$ para el peor punto del intervalo. El problema pregunta por el punto concreto $x$.",
  "Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.": "Esta es la media $\\bar{y}$. El término independiente es $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, así que hay que restar también $a\\bar{x}$.",
  "Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "Este es el elemento original $a_{22}$. A la segunda fila hay que restarle primero $l_{21}$ veces la primera.",
  "Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "Este es el elemento original $a_{23}$. A la segunda fila hay que restarle primero $l_{21}$ veces la primera.",
  "Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.": "Este es el elemento original $a_{33}$. La tercera fila hay que transformarla en ambos pasos de la eliminación.",
  "Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.": "Este es el error relativo (cociente entre el error y el valor). El error absoluto es la propia diferencia $|x-\\tilde{x}|$.",
  "Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom ${@0}$.": "Este es el error relativo del propio $x$. En una potencia, el error relativo se multiplica por el exponente ${@0}$.",
  "Urob jeden krok Newtonovej metódy pre rovnicu $x^3{@0}-{@1}=0$ so štartom $x_0={@2}$. {@3}": "Haz un paso del método de Newton para la ecuación $x^3{@0}-{@1}=0$ con inicio $x_0={@2}$. {@3}",
  "Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h={@0}$ pre úlohu {@1}. {@2}": "Haz un paso del método de Runge-Kutta de 4.º orden con paso $h={@0}$ para el problema {@1}. {@2}",
  "Urob jeden krok metódy sečníc pre $f(x)=x^2-{@0}$ s počiatočnými bodmi $x_0={@1}$ a $x_1={@2}$. {@3}": "Haz un paso del método de la secante para $f(x)=x^2-{@0}$ con los puntos iniciales $x_0={@1}$ y $x_1={@2}$. {@3}",
  "Urči $M_2 = \\max|f''|$ na intervale. {@0}": "Determina $M_2 = \\max|f''|$ en el intervalo. {@0}",
  "Urči $u_{22}$.": "Determina $u_{22}$.",
  "Urči $u_{23}$.": "Determina $u_{23}$.",
  "Urči $u_{33}$.": "Determina $u_{33}$.",
  "Urči multiplikátor $l_{21}$.": "Determina el multiplicador $l_{21}$.",
  "Urči multiplikátor $l_{31}$.": "Determina el multiplicador $l_{31}$.",
  "Urči multiplikátor $l_{32}$.": "Determina el multiplicador $l_{32}$.",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x={@0}$ (v radiánoch). {@1}": "Determina el número de condición $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ del cálculo $f(x)=\\sin x$ en el punto $x={@0}$ (en radianes). {@1}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-{@0}$ v bode $x={@1}$. {@2}": "Determina el número de condición $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ del cálculo $f(x)=x-{@0}$ en el punto $x={@1}$. {@2}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x={@0}$. {@1}": "Determina el número de condición $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ del cálculo de la función $f(x)=\\ln x$ en el punto $x={@0}$. {@1}",
  "V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.": "En cada paso calcula el valor en el punto medio del intervalo y quédate con la mitad en cuyos extremos la función tiene signos opuestos.",
  "Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.": "En la fórmula aún hay una división por dos: $\\frac{M_2}{2!}$.",
  "Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.": "En la fórmula de la secante, la corrección $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ se resta de $x_1$.",
  "Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.": "Anula los elementos bajo la diagonal en la primera y después en la segunda columna; al final resuelve desde la última ecuación.",
  "Vypočítaj $Ax^{(1)}$.": "Calcula $Ax^{(1)}$.",
  "Vypočítaj $P_1({@0})$. {@1}": "Calcula $P_1({@0})$. {@1}",
  "Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.": "Calcula $\\det A = u_{11}u_{22}u_{33}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} s $n={@4}$ dielikmi. {@5}": "Calcula $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} con $n={@4}$ subintervalos. {@5}",
  "Vypočítaj $\\ell_{@0}({@1})$. {@2}": "Calcula $\\ell_{@0}({@1})$. {@2}",
  "Vypočítaj $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}": "Calcula $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}",
  "Vypočítaj $\\sqrt{{@0}}-\\sqrt{{@1}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). {@2}": "Calcula $\\sqrt{{@0}}-\\sqrt{{@1}}$ de forma numéricamente estable (sin restar números cercanos). {@2}",
  "Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).": "Calcula $\\sum x_i$ y $\\sum y_i$ (separados por punto y coma).",
  "Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).": "Calcula $\\sum x_i^2$ y $\\sum x_iy_i$ (separados por punto y coma).",
  "Vypočítaj $f$ v strede intervalu, teda $f({@0})$. {@1}": "Calcula $f$ en el punto medio del intervalo, es decir, $f({@0})$. {@1}",
  "Vypočítaj $f'(x_0)$.": "Calcula $f'(x_0)$.",
  "Vypočítaj $f(x_0)$ a $f'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "Calcula $f(x_0)$ y $f'(x_0)$ y sustituye en $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Vypočítaj $f(x_0)$.": "Calcula $f(x_0)$.",
  "Vypočítaj $f(x_0, y_0)$. {@0}": "Calcula $f(x_0, y_0)$. {@0}",
  "Vypočítaj $f(x_1)$.": "Calcula $f(x_1)$.",
  "Vypočítaj $f(x_1, \\tilde{y}_1)$. {@0}": "Calcula $f(x_1, \\tilde{y}_1)$. {@0}",
  "Vypočítaj $f(x_1, y_1)$. {@0}": "Calcula $f(x_1, y_1)$. {@0}",
  "Vypočítaj $f({@0})$. {@1}": "Calcula $f({@0})$. {@1}",
  "Vypočítaj $f[x_0, x_1, x_2]$. {@0}": "Calcula $f[x_0, x_1, x_2]$. {@0}",
  "Vypočítaj $f[x_0, x_1]$. {@0}": "Calcula $f[x_0, x_1]$. {@0}",
  "Vypočítaj $f[x_1, x_2]$. {@0}": "Calcula $f[x_1, x_2]$. {@0}",
  "Vypočítaj $k_{@0}$. {@1}": "Calcula $k_{@0}$. {@1}",
  "Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).": "Calcula $x^{(1)} = Ax^{(0)}$ (dos componentes separadas por punto y coma).",
  "Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.": "Calcula $x^{(1)}=Ax^{(0)}$, después $Ax^{(1)}$ y el cociente de los productos escalares $x^{(1)}\\cdot Ax^{(1)}$ y $x^{(1)}\\cdot x^{(1)}$.",
  "Vypočítaj $x_1 = g(x_0)$. {@0}": "Calcula $x_1 = g(x_0)$. {@0}",
  "Vypočítaj $x_1$. {@0}": "Calcula $x_1$. {@0}",
  "Vypočítaj $x_2 = g(x_1)$. {@0}": "Calcula $x_2 = g(x_1)$. {@0}",
  "Vypočítaj $x_2$. {@0}": "Calcula $x_2$. {@0}",
  "Vypočítaj $x_{@0}^{(1)}$. {@1}": "Calcula $x_{@0}^{(1)}$. {@1}",
  "Vypočítaj $y_1$. {@0}": "Calcula $y_1$. {@0}",
  "Vypočítaj $y_2$. {@0}": "Calcula $y_2$. {@0}",
  "Vypočítaj $|(x-x_0)(x-x_1)|$. {@0}": "Calcula $|(x-x_0)(x-x_1)|$. {@0}",
  "Vypočítaj Rayleighov podiel. {@0}": "Calcula el cociente de Rayleigh. {@0}",
  "Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. {@0}": "Calcula el error absoluto $|x-\\tilde{x}|$. {@0}",
  "Vypočítaj absolútny člen $b$. {@0}": "Calcula el término independiente $b$. {@0}",
  "Vypočítaj menovateľ $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}": "Calcula el denominador $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}",
  "Vypočítaj odhad chyby. {@0}": "Calcula la estimación del error. {@0}",
  "Vypočítaj prediktor $\\tilde{y}_1$. {@0}": "Calcula el predictor $\\tilde{y}_1$. {@0}",
  "Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. {@0}": "Calcula la contribución del error del lado $a$, es decir, $b\\,\\Delta a$. {@0}",
  "Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. {@0}": "Calcula la contribución del error del lado $b$, es decir, $a\\,\\Delta b$. {@0}",
  "Vypočítaj relatívnu chybu $x$ v percentách. {@0}": "Calcula el error relativo $x$ en porcentaje. {@0}",
  "Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. {@0}": "Calcula la pendiente $\\frac{y_1-y_0}{x_1-x_0}$. {@0}",
  "Vypočítaj smernicu $a$. {@0}": "Calcula la pendiente $a$. {@0}",
  "Vypočítaj súčet hodnôt funkcie v stredoch dielikov. {@0}": "Calcula la suma de los valores de la función en los puntos medios de los subintervalos. {@0}",
  "Vypočítaj súčet hodnôt v nepárnych uzloch $f_1{@0}$ (váha 4). {@1}": "Calcula la suma de los valores en los nodos impares $f_1{@0}$ (peso 4). {@1}",
  "Vypočítaj súčet vnútorných hodnôt {@0}. {@1}": "Calcula la suma de los valores interiores {@0}. {@1}",
  "Vypočítaj výslednú hodnotu integrálu. {@0}": "Calcula el valor resultante de la integral. {@0}",
  "Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.": "La fórmula $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ solo vale para una recta que pasa por el origen ($b = 0$). Usa ambas ecuaciones normales.",
  "Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.": "Fórmula de la secante: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.",
  "Výsledok zaokrúhli na {@0} {@1}.": "Redondea el resultado a {@0} {@1}.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.": "De la ecuación número $i$ despeja $x_i$ y sustituye en ella los valores de las componentes de $x^{(0)}$.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.": "De la ecuación número $i$ despeja $x_i$ y sustituye en ella las componentes ya recalculadas $x_1, \\dots, x_{i-1}$ y los valores antiguos de las demás.",
  "Z tabuľky poznáme ${@0}\\approx {@1}$ a ${@2}\\approx {@3}$. Lineárnou interpoláciou odhadni hodnotu funkcie ${@4}$ v bode $x={@5}$. {@6}": "De la tabla conocemos ${@0}\\approx {@1}$ y ${@2}\\approx {@3}$. Con interpolación lineal estima el valor de la función ${@4}$ en el punto $x={@5}$. {@6}",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f'(x)}{f(x)}\\right|$.": "Olvidaste el factor $x$ en el numerador: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, no $\\left|\\frac{f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.": "Olvidaste el factor $x$ en el numerador: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.": "Olvidaste el factor $x$: $\\kappa = |x\\cot x|$, no $|\\cot x|$.",
  "Zadaj celé riešenie $x_1; x_2; x_3$.": "Escribe la solución completa $x_1; x_2; x_3$.",
  "Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.": "Confundiste los pesos: en el método de Simpson los nodos impares $f_1, f_3, \\dots$ tienen peso 4 y los nodos interiores pares, peso 2.",
  "Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.": "Solo contaste el error de un lado. A $b\\,\\Delta a$ súmale también $a\\,\\Delta b$.",
  "Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.": "La complejidad de la eliminación gaussiana es $O(n^3)$; más exactamente, unas $\\frac{2}{3}n^3$ operaciones.",
  "absolútny člen $b$": "el término independiente $b$",
  "centrálnej": "central",
  "centrálnej diferencie": "de la diferencia central",
  "centrálnou": "central",
  "ciframi": "cifras",
  "cifrou": "cifra",
  "determinant $\\det A$ ako súčin diagonálnych prvkov $U$": "el determinante $\\det A$ como producto de los elementos diagonales $U$",
  "doprednej": "progresiva",
  "doprednej diferencie": "de la diferencia progresiva",
  "doprednou": "progresiva",
  "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (chyba {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (chyba {@4})</span> · presne e² = {@5}": "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (error {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (error {@4})</span> · exacto e² = {@5}",
  "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · presne I = {@2} · chyba {@3}": "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · exacto I = {@2} · error {@3}",
  "je platné 1 desatinné miesto": "es significativo 1 decimal",
  "je to <strong>1</strong> platná cifra": "es <strong>1</strong> cifra significativa",
  "je to <strong>{@0}</strong> platných cifier": "son <strong>{@0}</strong> cifras significativas",
  "lichobežníkovej metódy": "del método del trapecio",
  "lichobežníkovou metódou": "con el método del trapecio",
  "metódou RK4": "con el método RK4",
  "na polovicu": "a la mitad",
  "nie je platné žiadne desatinné miesto": "no es significativo ningún decimal",
  "obdĺžnikovej (stredovej) metódy": "del método del rectángulo (punto medio)",
  "obdĺžnikovou (stredovou) metódou": "con el método del rectángulo (punto medio)",
  "prvok ${@0}$": "el elemento ${@0}$",
  "smernicu $a$": "la pendiente $a$",
  "sú platné {@0} desatinné miesta": "son significativos {@0} decimales",
  "sú to <strong>{@0}</strong> platné cifry": "son <strong>{@0}</strong> cifras significativas",
  "uzly {@0}.": "nodos {@0}.",
  "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Odhad chyby: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.": "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Estimación del error: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.",
  "{@0}-krát": "{@0} veces",
  "{@0}.{@1}": "{@0}.{@1}",
  "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, chyba {@1}</span>": "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, error {@1}</span>",
  "· <span class=\"c-ok\">chyba |x{@0} − √2| = {@1}</span>": "· <span class=\"c-ok\">error |x{@0} − √2| = {@1}</span>",
  "· Simpson: n musí byť párne": "· Simpson: n debe ser par",
  "Úlohu {@0} rieš Eulerovou metódou s krokom $h={@1}$. Vypočítaj $y_2\\approx y({@2})$. {@3}": "Resuelve el problema {@0} con el método de Euler con paso $h={@1}$. Calcula $y_2\\approx y({@2})$. {@3}",
  "Úlohu {@0} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h={@1}$. Vypočítaj $y_1\\approx y({@2})$. {@3}": "Resuelve el problema {@0} con el método de Heun (método de Euler mejorado) con paso $h={@1}$. Calcula $y_1\\approx y({@2})$. {@3}",
  "Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.": "El tiempo no crece linealmente con el número de incógnitas: la eliminación necesita unas $\\frac{2}{3}n^3$ operaciones.",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je absolútna chyba tejto aproximácie? {@2}": "Sustituimos el número ${@0}$ por la aproximación ${@1}$. ¿Cuál es el error absoluto de esta aproximación? {@2}",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je relatívna chyba v percentách? {@2}": "Sustituimos el número ${@0}$ por la aproximación ${@1}$. ¿Cuál es el error relativo en porcentaje? {@2}",
  "Štart x₀": "Inicio x₀"
 }
});
