/* Español: preklad js/rocniky/v3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/v3/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "v3-pojem": {
   "title": "Concepto de ecuación diferencial, problema de Cauchy, campo de direcciones",
   "summary": "Orden de una ecuación, solución general y particular, problema de valor inicial, teorema de existencia y unicidad, campo de direcciones.",
   "theory": [
    "<p>Una <strong>ecuación diferencial ordinaria (EDO)</strong> es una ecuación $F(x, y, y', \\dots, y^{(n)}) = 0$ cuya incógnita es una función\n       de una variable $y = y(x)$ y en la que aparecen derivadas de esta función. El <strong>orden</strong> de la ecuación es el orden de la derivada más alta\n       que realmente aparece en ella: $y'' + (y')^{5} = x$ es una ecuación de 2.º orden; la potencia $(y')^{5}$ no cambia el orden.\n       La ecuación es <strong>lineal</strong> si es lineal respecto a $y, y', \\dots, y^{(n)}$, es decir, si tiene la forma\n       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$.</p>\n       <p>Una <strong>solución</strong> en el intervalo $I$ es una función que tiene en $I$ derivadas hasta el orden $n$ y que, al sustituirla, cumple la ecuación para todo $x\\in I$.\n       La <strong>solución general</strong> de una ecuación de orden $n$ es una familia de soluciones $y = \\varphi(x, C_1, \\dots, C_n)$ con $n$ constantes independientes;\n       una <strong>solución particular</strong> se obtiene eligiendo valores concretos de las constantes. Una solución que no se obtiene de la general para ninguna elección de las constantes\n       se llama <strong>singular</strong>.</p>",
    "<p><strong>Problema de Cauchy (de valor inicial)</strong> para una ecuación de 1.er orden: hallar una solución de la ecuación $y' = f(x, y)$ que cumpla\n       la <strong>condición inicial</strong> $y(x_0) = y_0$. En una ecuación de orden $n$ se prescriben $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$.</p>\n       <p><strong>Teorema (Picard-Lindelöf).</strong> Si las funciones $f$ y $\\frac{\\partial f}{\\partial y}$ son continuas en un entorno del punto $[x_0; y_0]$, existe\n       un intervalo alrededor de $x_0$ en el que el problema de Cauchy tiene <strong>exactamente una</strong> solución. Sin estas hipótesis, la unicidad puede fallar:\n       el problema $y' = 3y^{2/3}$, $y(0) = 0$ tiene como soluciones tanto $y = 0$ como $y = x^{3}$ (aquí $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$ no está definida en $y = 0$).</p>",
    "<p><strong>Campo de direcciones.</strong> La ecuación $y' = f(x, y)$ prescribe en cada punto $[x; y]$ la pendiente de la tangente a la solución que pasa por él.\n       Si dibujamos en los puntos del plano segmentos cortos de pendiente $f(x, y)$, obtenemos el campo de direcciones. La gráfica de una solución (<strong>curva integral</strong>)\n       es tangente al campo en cada uno de sus puntos. Las curvas $f(x, y) = k$, en las que todos los segmentos tienen la misma pendiente $k$, se llaman <strong>isoclinas</strong>.</p>",
    {
     "fig": "v3-smerove-pole",
     "caption": "Campo de direcciones de la ecuación $y' = x - y$. La recta discontinua $y = x$ es la isoclina de pendiente $0$; la recta verde $y = x - 1$ es la isoclina de pendiente $1$ y a la vez una solución. Mueve el valor inicial $y(0)$: todas las soluciones se acercan a la recta $y = x - 1$ cuando $x\\to\\infty$."
    }
   ],
   "examples": [
    {
     "task": "Comprueba que $y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$ es solución de la ecuación $y'' - y' - 2y = 0$ para cualesquiera $C_1, C_2$. ¿De qué orden es la ecuación?",
     "steps": [
      "La ecuación contiene la segunda derivada y ninguna superior, así que es de <strong>2.º orden</strong>.",
      "Derivamos: $y' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$, $y'' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$.",
      "Sustituimos: $(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$.",
      "La igualdad se cumple para todo $x$ y todos $C_1, C_2$. La función contiene dos constantes independientes: se trata de la <strong>solución general</strong>."
     ]
    },
    {
     "task": "Demuestra que $y = C\\mathrm{e}^{-x} + x - 1$ es la solución general de la ecuación $y' = x - y$ y halla la solución del problema de Cauchy con la condición $y(0) = 2$.",
     "steps": [
      "$y' = -C\\mathrm{e}^{-x} + 1$ y $x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$. Ambos lados son iguales.",
      "De la condición: $y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$, luego $C = 3$.",
      "<strong>Solución particular: $y = 3\\mathrm{e}^{-x} + x - 1$.</strong> Es la curva de la figura para $y(0) = 2$."
     ]
    }
   ]
  },
  "v3-separovatelne": {
   "title": "Ecuaciones de variables separables",
   "summary": "La ecuación $y' = g(x)\\,h(y)$: separación de variables, soluciones estacionarias, ecuaciones del tipo $y' = f(ax + by + c)$.",
   "theory": [
    "<p>Una ecuación de <strong>variables separables</strong> tiene la forma $y' = g(x)\\,h(y)$, donde $g$ es continua en el intervalo $I$\n       y $h$ es continua en el intervalo $J$. De forma equivalente, se puede escribir en forma diferencial $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$.</p>\n       <p><strong>Procedimiento:</strong></p>\n       <ol><li>Hallamos los ceros de la función $h$. Si $h(c) = 0$, la constante $y = c$ es una solución, la llamada <strong>solución estacionaria</strong>.</li>\n       <li>Para $h(y)\\neq 0$ separamos las variables: $\\frac{dy}{h(y)} = g(x)\\,dx$.</li>\n       <li>Integramos: $\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$. Obtenemos la solución en forma implícita, que, si es posible, expresamos de forma explícita.</li>\n       <li>Determinamos la constante $C$ a partir de la condición inicial y comprobamos en qué intervalo existe la solución.</li></ol>",
    "<p><strong>Cuidado con la pérdida de soluciones.</strong> Al dividir por $h(y)$ podemos perder soluciones estacionarias, por eso hay que escribirlas aparte\n       (a veces están incluidas en la solución general para $C = 0$; por ejemplo, en $y' = ky$, $y = C\\mathrm{e}^{kx}$ da también $y = 0$).\n       La solución de una ecuación no lineal no tiene por qué existir en todo $\\mathbb{R}$, aunque el segundo miembro sea sencillo: la solución del problema $y' = y^{2}$, $y(0) = 1$\n       es $y = \\frac{1}{1 - x}$ y existe solo en el intervalo $(-\\infty; 1)$.</p>\n       <p>Las <strong>ecuaciones del tipo $y' = f(ax + by + c)$</strong> se transforman, mediante la sustitución $z = ax + by + c$, en la ecuación separable $z' = a + b\\,f(z)$.</p>",
    {
     "fig": "v3-separovatelne",
     "caption": "La ecuación $y' = xy$ tiene la solución general $y = C\\mathrm{e}^{x^{2}/2}$. El eje $x$ verde es la solución estacionaria $y = 0$ (para $C = 0$); la curva azul es la solución con la condición $y(0) = 1$. Las curvas integrales no se cortan, como garantiza el teorema de unicidad."
    }
   ],
   "examples": [
    {
     "task": "Resuelve el problema de Cauchy $y' = xy^{2}$, $y(0) = 1$, y halla el intervalo en el que existe la solución.",
     "steps": [
      "La solución estacionaria es $y = 0$, pero no cumple la condición $y(0) = 1$.",
      "Para $y\\neq 0$: $\\frac{dy}{y^{2}} = x\\,dx$; al integrar, $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$.",
      "De la condición, $-1 = C$, luego $\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$ e $y = \\frac{2}{2 - x^{2}}$.",
      "<strong>La solución $y = \\frac{2}{2 - x^{2}}$ existe en el intervalo $(-\\sqrt{2}; \\sqrt{2})$</strong>, que contiene el punto $x_0 = 0$; en los puntos $\\pm\\sqrt{2}$ la gráfica tiene asíntotas verticales."
     ]
    },
    {
     "task": "Resuelve el problema de Cauchy $y' = \\mathrm{e}^{x - y}$, $y(0) = \\ln 2$.",
     "steps": [
      "El segundo miembro es un producto: $y' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$. Separamos las variables: $\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$.",
      "Integramos: $\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$. De la condición, $2 = 1 + C$, luego $C = 1$.",
      "<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>; la solución existe en todo $\\mathbb{R}$."
     ]
    }
   ]
  },
  "v3-homogenne": {
   "title": "Ecuaciones diferenciales homogéneas",
   "summary": "Ecuaciones $y' = \\varphi\\left(\\frac{y}{x}\\right)$, la sustitución $y = ux$ y ecuaciones reducibles a homogéneas.",
   "theory": [
    "<p>Una función $f(x, y)$ es <strong>homogénea de grado $k$</strong> si $f(tx, ty) = t^{k}f(x, y)$ para todo $t \\gt 0$. La ecuación $y' = f(x, y)$ se llama\n       <strong>homogénea</strong> si $f$ es homogénea de grado $0$; entonces $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$, así que la ecuación tiene la forma\n       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$\n       La ecuación $M(x, y)\\,dx + N(x, y)\\,dy = 0$ es homogénea si $M$ y $N$ son funciones homogéneas del mismo grado\n       (por ejemplo, $\\frac{x^{2} + y^{2}}{xy}$: el numerador y el denominador tienen grado $2$).</p>",
    "<p><strong>Sustitución $y = ux$</strong>, donde $u = u(x)$ es una nueva función incógnita. Entonces $y' = u + xu'$ y la ecuación se convierte en\n       $$xu' = \\varphi(u) - u,$$\n       que es una ecuación de variables separables: $\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$. Si $\\varphi(u_0) = u_0$, la recta $y = u_0x$\n       es una solución. Después de integrar, deshacemos el cambio $u = \\frac{y}{x}$.</p>\n       <p><strong>Ecuaciones reducibles a homogéneas</strong>: $y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$ con determinante no nulo\n       $a_1b_2 - a_2b_1$. Con la traslación $x = X + x_0$, $y = Y + y_0$, donde $[x_0; y_0]$ es el punto de corte de las rectas $a_ix + b_iy + c_i = 0$, desaparecen los términos independientes.</p>",
    {
     "fig": "v3-homogenne",
     "caption": "En una ecuación homogénea, el campo de direcciones tiene la misma dirección a lo largo de cada recta $y = ux$ que pasa por el origen (líneas discontinuas). La ecuación $y' = \\frac{x + y}{x - y}$ tiene en coordenadas polares las soluciones $r = C\\mathrm{e}^{\\varphi}$, es decir, espirales logarítmicas."
    }
   ],
   "examples": [
    {
     "task": "Halla la solución general de la ecuación $y' = \\dfrac{x^{2} + y^{2}}{xy}$ para $x \\gt 0$.",
     "steps": [
      "El numerador y el denominador son homogéneos de grado $2$. Dividiendo por $x^{2}$: $y' = \\frac{1 + u^{2}}{u}$, donde $u = \\frac{y}{x}$.",
      "Sustituimos $y' = u + xu'$: $u + xu' = \\frac{1}{u} + u$, luego $xu' = \\frac{1}{u}$.",
      "Separamos las variables: $u\\,du = \\frac{dx}{x}$; al integrar, $\\frac{u^{2}}{2} = \\ln x + C$.",
      "<strong>Solución: $y^{2} = x^{2}(2\\ln x + C_1)$</strong>, donde $C_1 = 2C$."
     ]
    },
    {
     "task": "Resuelve el problema de Cauchy $y' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$, $y(1) = 0$.",
     "steps": [
      "Sustitución $y = ux$: $u + xu' = u + \\mathrm{e}^{-u}$, luego $xu' = \\mathrm{e}^{-u}$.",
      "Separamos las variables: $\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$, de modo que $\\mathrm{e}^{u} = \\ln x + C$.",
      "De la condición $u(1) = 0$: $1 = 0 + C$, luego $C = 1$ y $u = \\ln(1 + \\ln x)$.",
      "<strong>$y = x\\ln(1 + \\ln x)$</strong> para $x \\gt \\mathrm{e}^{-1}$."
     ]
    }
   ]
  },
  "v3-linearne": {
   "title": "Ecuaciones lineales de 1.er orden y ecuación de Bernoulli",
   "summary": "Factor integrante, variación de la constante, estructura de la solución $y = y_h + y_p$ y la sustitución $z = y^{1-n}$.",
   "theory": [
    "<p>Una <strong>ecuación lineal de 1.er orden</strong> tiene la forma $y' + p(x)\\,y = q(x)$, donde $p, q$ son continuas en el intervalo $I$. Si $q = 0$, la ecuación es\n       <strong>homogénea</strong> (en el sentido de las ecuaciones lineales) y es separable: $y_h = C\\mathrm{e}^{-P(x)}$, donde $P$ es una primitiva cualquiera de $p$.\n       La solución general de la ecuación no homogénea es $y = y_h + y_p$: la suma de la solución general de la ecuación homogénea y una solución (particular)\n       de la ecuación no homogénea. El problema de Cauchy tiene exactamente una solución en todo $I$.</p>",
    "<p><strong>Factor integrante.</strong> Multiplicamos la ecuación por $\\mu(x) = \\mathrm{e}^{P(x)}$. Entonces el primer miembro es la derivada de un producto:\n       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$\n       La <strong>variación de la constante</strong> lleva al mismo resultado: buscamos la solución en la forma $y = C(x)\\,\\mathrm{e}^{-P(x)}$; al sustituir,\n       los términos con $C(x)$ se cancelan y queda $C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$.</p>",
    "<p><strong>Ecuación de Bernoulli</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$, $n\\neq 0, 1$. La dividimos por $y^{n}$ e introducimos $z = y^{1-n}$,\n       de modo que $z' = (1-n)\\,y^{-n}y'$. Obtenemos la ecuación lineal\n       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$\n       Para $n \\gt 0$ también es solución $y = 0$, que se pierde al dividir. Por ejemplo, la ecuación logística $y' = ry - \\frac{r}{K}y^{2}$ es una ecuación de Bernoulli con $n = 2$.</p>"
   ],
   "examples": [
    {
     "task": "Resuelve el problema de Cauchy $y' + 2y = 4x$, $y(0) = 1$.",
     "steps": [
      "$p = 2$, factor integrante $\\mu = \\mathrm{e}^{2x}$. La ecuación se convierte en $(y\\mathrm{e}^{2x})' = 4x\\mathrm{e}^{2x}$.",
      "Por partes: $\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$, luego $y = 2x - 1 + C\\mathrm{e}^{-2x}$.",
      "De la condición: $-1 + C = 1$, $C = 2$.",
      "<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$.</strong> Comprobación: $y' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$."
     ]
    },
    {
     "task": "Halla la solución general de la ecuación de Bernoulli $y' + \\dfrac{y}{x} = xy^{2}$ para $x \\gt 0$.",
     "steps": [
      "$n = 2$, por eso $z = y^{-1}$ y $z' = -y^{-2}y'$. Dividiendo la ecuación por $y^{2}$: $y^{-2}y' + \\frac{1}{x}y^{-1} = x$, es decir, $-z' + \\frac{z}{x} = x$.",
      "La ecuación lineal $z' - \\frac{z}{x} = -x$ tiene el factor integrante $\\mu = \\frac{1}{x}$: $\\left(\\frac{z}{x}\\right)' = -1$, de modo que $z = Cx - x^{2}$.",
      "<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong>, y además la solución estacionaria $y = 0$."
     ]
    }
   ]
  },
  "v3-exaktne": {
   "title": "Ecuaciones exactas y factor integrante",
   "summary": "La ecuación $M\\,dx + N\\,dy = 0$ con $M_y = N_x$, la función potencial $F(x, y)$ y el factor integrante que depende de una sola variable.",
   "theory": [
    "<p>La ecuación $M(x, y)\\,dx + N(x, y)\\,dy = 0$ es <strong>exacta</strong> en la región $D$ si existe una función $F(x, y)$ (función potencial) tal que\n       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$\n       es decir, el primer miembro es la diferencial total $dF$. Entonces, a lo largo de cada solución, $dF = 0$, de modo que la <strong>integral general</strong> es $F(x, y) = C$:\n       las curvas integrales son las curvas de nivel de la función $F$.</p>\n       <p><strong>Criterio.</strong> Si $M, N$ son continuamente diferenciables en una región simplemente conexa, la ecuación es exacta si y solo si\n       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>",
    "<p><strong>Cálculo de $F$.</strong> Integramos $M$ respecto a $x$ (consideramos $y$ como constante): $F = \\int M\\,dx + \\varphi(y)$.\n       La función desconocida $\\varphi$ se determina a partir de la condición $\\frac{\\partial F}{\\partial y} = N$, que da $\\varphi'(y)$ dependiente solo de $y$.\n       Igualmente podemos empezar integrando $N$ respecto a $y$.</p>\n       <p><strong>Factor integrante.</strong> Si la ecuación no es exacta, buscamos una función $\\mu \\neq 0$ tal que $\\mu M\\,dx + \\mu N\\,dy = 0$ sí sea exacta,\n       es decir, $(\\mu M)_y = (\\mu N)_x$. En dos casos sencillos:</p>\n       <ul><li>si $\\dfrac{M_y - N_x}{N} = \\omega(x)$ depende solo de $x$, entonces $\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$;</li>\n       <li>si $\\dfrac{N_x - M_y}{M} = \\omega(y)$ depende solo de $y$, entonces $\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$.</li></ul>\n       <p>Por ejemplo, la ecuación lineal $y' + p(x)y = q(x)$, escrita como $(p y - q)\\,dx + dy = 0$, tiene $\\omega = p(x)$ y el conocido factor $\\mu = \\mathrm{e}^{\\int p\\,dx}$.</p>",
    {
     "fig": "v3-exaktne",
     "caption": "La ecuación $(2x - y)\\,dx + (2y - x)\\,dy = 0$ es exacta con $F(x, y) = x^{2} - xy + y^{2}$. Las curvas integrales son las elipses $F = C$; la curva que pasa por el punto $[1; 2]$ corresponde a $C = 3$."
    }
   ],
   "examples": [
    {
     "task": "Resuelve la ecuación $(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$ y halla la curva integral que pasa por el punto $[1; 1]$.",
     "steps": [
      "$M_y = 2x$ y $N_x = 2x$: la ecuación es exacta.",
      "$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$.",
      "$F_y = x^{2} + \\varphi'(y) = x^{2} + 2y$, luego $\\varphi'(y) = 2y$ y $\\varphi(y) = y^{2}$.",
      "Integral general: $x^{2}y + x^{3} + y^{2} = C$. El punto $[1; 1]$ da $C = 3$.",
      "<strong>$x^{2}y + x^{3} + y^{2} = 3$.</strong>"
     ]
    },
    {
     "task": "Halla un factor integrante de la ecuación $(y + x^{2})\\,dx - x\\,dy = 0$ ($x \\gt 0$) y resuelve la ecuación.",
     "steps": [
      "$M_y = 1$, $N_x = -1$: la ecuación no es exacta. $\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$ depende solo de $x$.",
      "$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$. Nueva ecuación: $\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$, donde $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$.",
      "$F = -\\frac{y}{x} + x$ (comprueba $F_x$ y $F_y$); integral general: $x - \\frac{y}{x} = C$.",
      "<strong>$y = x^{2} - Cx$.</strong>"
     ]
    }
   ]
  },
  "v3-aplikacie": {
   "title": "Aplicaciones de las ecuaciones de 1.er orden",
   "summary": "Crecimiento de poblaciones y desintegración radiactiva, ley de enfriamiento de Newton, ecuación logística, circuito RC y mezcla de disoluciones.",
   "theory": [
    "<p><strong>Crecimiento y decrecimiento exponencial.</strong> Si la rapidez de cambio de una magnitud es proporcional a su valor instantáneo, se cumple $y' = ky$, luego\n       $y(t) = y_0\\mathrm{e}^{kt}$. Para $k \\gt 0$ se trata de crecimiento (población, interés compuesto continuo); el tiempo de duplicación es $\\frac{\\ln 2}{k}$.\n       Para $k \\lt 0$ se trata de decrecimiento; un isótopo radiactivo con <strong>período de semidesintegración</strong> $T$ tiene $k = -\\frac{\\ln 2}{T}$ y, por tanto, $m(t) = m_0\\cdot 2^{-t/T}$.</p>\n       <p><strong>Ley de enfriamiento de Newton.</strong> La temperatura de un cuerpo en un ambiente de temperatura constante $T_o$ cambia con una rapidez proporcional a la diferencia de temperaturas:\n       $T' = -k(T - T_o)$, $k \\gt 0$. La solución es $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; la constante $k$ suele determinarse con una medición adicional.</p>",
    {
     "fig": "v3-rast",
     "caption": "La curva azul es la solución de $y' = ky$, $y(0) = 1$; la verde, la solución de la ecuación logística con el mismo $k$ y capacidad de carga $K$ (línea discontinua). Al principio son casi idénticas, pero la curva logística se estabiliza en el valor $K$."
    },
    "<p>La <strong>ecuación logística</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$ describe el crecimiento con recursos limitados; $K$ es la capacidad de carga del medio.\n       Es separable (y también de Bernoulli) y su solución es\n       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$\n       Las soluciones estacionarias son $P = 0$ (inestable) y $P = K$ (estable). La población crece más rápido cuando $P = \\frac{K}{2}$, en el instante $t = \\frac{\\ln A}{r}$.</p>",
    "<p><strong>Circuito RC.</strong> Para la carga de un condensador que se carga desde una fuente de tensión $U$ a través de una resistencia $R$ se cumple $Rq' + \\frac{q}{C} = U$.\n       Con carga inicial nula, la tensión en el condensador es $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, donde $\\tau = RC$ es la <strong>constante de tiempo</strong>\n       (en el tiempo $\\tau$ el condensador se carga hasta aproximadamente el $63\\,\\%$ de la tensión $U$).</p>\n       <p><strong>Mezcla de disoluciones.</strong> Un depósito contiene $V$ litros de disolución; entran $q$ litros por minuto de una disolución de concentración $c$ y con la misma rapidez\n       sale la disolución perfectamente mezclada. Para la cantidad de sustancia $x(t)$ se cumple el balance «entrada menos salida»:\n       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>"
   ],
   "examples": [
    {
     "task": "Un café a $90\\,{}^\\circ\\mathrm{C}$ está en una habitación a $20\\,{}^\\circ\\mathrm{C}$. Al cabo de $10$ minutos está a $60\\,{}^\\circ\\mathrm{C}$. ¿Cuándo se enfriará hasta $40\\,{}^\\circ\\mathrm{C}$?",
     "steps": [
      "$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$. De la medición, $60 = 20 + 70\\,\\mathrm{e}^{-10k}$, luego $\\mathrm{e}^{-10k} = \\frac{4}{7}$ y $k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0{,}0560$.",
      "La condición $40 = 20 + 70\\,\\mathrm{e}^{-kt}$ da $\\mathrm{e}^{-kt} = \\frac{2}{7}$, luego $t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3{,}5}{\\ln 1{,}75}$.",
      "<strong>$t \\approx 22{,}4$ minutos.</strong>"
     ]
    },
    {
     "task": "Un depósito contiene $100$ litros de agua en los que hay disueltos $5\\,\\mathrm{kg}$ de sal. Entran $4$ litros por minuto de una disolución de concentración $0{,}2\\,\\mathrm{kg/l}$ y con la misma rapidez sale la disolución mezclada. ¿Cuánta sal hay en el depósito al cabo de $25$ minutos?",
     "steps": [
      "Balance: $x' = 0{,}2\\cdot 4 - \\frac{4}{100}x = 0{,}8 - 0{,}04x$, $x(0) = 5$.",
      "Ecuación lineal con coeficientes constantes: el valor de equilibrio es $x = 20$, por eso $x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0{,}04t} = 20 - 15\\,\\mathrm{e}^{-0{,}04t}$.",
      "<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14{,}48\\,\\mathrm{kg}$.</strong> Para $t\\to\\infty$ la cantidad se acerca a $20\\,\\mathrm{kg}$."
     ]
    }
   ]
  },
  "v3-charakteristicka": {
   "title": "Ecuaciones lineales de 2.º orden con coeficientes constantes",
   "summary": "Sistema fundamental, wronskiano, ecuación característica y los tres tipos de raíces.",
   "theory": [
    "<p>La <strong>ecuación lineal homogénea de 2.º orden</strong> $y'' + a_1(x)y' + a_0(x)y = 0$ con coeficientes continuos en el intervalo $I$ tiene estas propiedades:</p>\n       <ul><li><strong>Principio de superposición:</strong> toda combinación lineal de soluciones es de nuevo una solución; las soluciones forman un espacio vectorial de dimensión $2$.</li>\n       <li>Un <strong>sistema fundamental</strong> es un par de soluciones linealmente independientes $y_1, y_2$; la solución general es $y = C_1y_1 + C_2y_2$.</li>\n       <li><strong>Wronskiano</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$. Las soluciones $y_1, y_2$ son linealmente independientes si y solo si\n       $W(x)\\neq 0$ (basta en un punto). Se cumple la <strong>fórmula de Liouville</strong> $W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$.</li></ul>",
    "<p><strong>Coeficientes constantes.</strong> Para $y'' + py' + qy = 0$ probamos $y = \\mathrm{e}^{\\lambda x}$. Al sustituir y dividir por $\\mathrm{e}^{\\lambda x}$ obtenemos\n       la <strong>ecuación característica</strong> $\\lambda^{2} + p\\lambda + q = 0$. Según sus raíces:</p>\n       <table class=\"tbl\"><tr><th>raíces</th><th>sistema fundamental</th><th>solución general</th></tr>\n       <tr><td>$\\lambda_1\\neq\\lambda_2$ reales</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>\n       <tr><td>$\\lambda$ doble</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>\n       <p>Con raíces complejas tomamos la parte real y la parte imaginaria de la solución compleja $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$.\n       El mismo procedimiento funciona para ecuaciones de orden superior: a una raíz $\\lambda$ de multiplicidad $k$ le corresponden las funciones $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$.</p>",
    {
     "fig": "v3-rad2",
     "caption": "Solución de la ecuación $y'' + py' + qy = 0$ con las condiciones iniciales $y(0) = 1$, $y'(0) = 0$. Con raíces complejas la solución oscila; con raíces reales, no. El signo de la parte real de las raíces decide si la solución se amortigua o crece."
    }
   ],
   "examples": [
    {
     "task": "Resuelve el problema de Cauchy $y'' - y' - 6y = 0$, $y(0) = 1$, $y'(0) = 8$.",
     "steps": [
      "La ecuación característica $\\lambda^{2} - \\lambda - 6 = 0$ tiene las raíces $\\lambda_1 = 3$, $\\lambda_2 = -2$.",
      "Solución general: $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$; derivada: $y' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$.",
      "Condiciones: $C_1 + C_2 = 1$, $3C_1 - 2C_2 = 8$, de donde $C_1 = 2$, $C_2 = -1$.",
      "<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$.</strong>"
     ]
    },
    {
     "task": "Halla un sistema fundamental de la ecuación $y'' + 4y' + 13y = 0$ y calcula su wronskiano.",
     "steps": [
      "$\\lambda^{2} + 4\\lambda + 13 = 0$, $D = 16 - 52 = -36$, raíces $\\lambda = -2\\pm 3\\mathrm{i}$.",
      "Sistema fundamental: $y_1 = \\mathrm{e}^{-2x}\\cos 3x$, $y_2 = \\mathrm{e}^{-2x}\\sin 3x$.",
      "$W = y_1y_2' - y_1'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.",
      "<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>, de acuerdo con la fórmula de Liouville $W(x) = W(0)\\,\\mathrm{e}^{-4x}$."
     ]
    }
   ]
  },
  "v3-nehomogenne": {
   "title": "Ecuaciones no homogéneas de 2.º orden",
   "summary": "Estructura de la solución $y = y_h + y_p$, método de los coeficientes indeterminados para un segundo miembro especial y variación de las constantes.",
   "theory": [
    "<p>La solución general de la ecuación $y'' + py' + qy = f(x)$ es $y = y_h + y_p$, donde $y_h = C_1y_1 + C_2y_2$ es la solución general de la ecuación homogénea asociada\n       e $y_p$ es una solución (particular) cualquiera de la ecuación no homogénea. Si $f = f_1 + f_2$, podemos buscar por separado las soluciones particulares para $f_1$ y $f_2$\n       y sumarlas (<strong>principio de superposición</strong>).</p>",
    "<p><strong>Método de los coeficientes indeterminados</strong> (segundo miembro especial). Si $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$\n       con polinomios $P_m, Q_n$, buscamos la solución particular en la forma\n       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$\n       donde $R_N, S_N$ son polinomios de grado $N$ con coeficientes desconocidos y $k$ es la multiplicidad del número $\\alpha + \\beta\\mathrm{i}$ como raíz de la ecuación característica\n       ($k = 0$ si no es raíz). Los coeficientes se determinan sustituyendo en la ecuación e igualando.</p>\n       <table class=\"tbl\"><tr><th>segundo miembro $f(x)$</th><th>forma de $y_p$ (si no hay resonancia)</th></tr>\n       <tr><td>$ax + b$</td><td>$Ax + B$ (si $q\\neq 0$)</td></tr>\n       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>\n       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>\n       <p>Si $\\alpha + \\beta\\mathrm{i}$ es raíz de la ecuación característica (<strong>resonancia</strong>), multiplicamos la forma por $x$; si es raíz doble, por $x^{2}$.</p>",
    "<p>La <strong>variación de las constantes</strong> funciona para cualquier segundo miembro continuo. Buscamos la solución en la forma $y = C_1(x)y_1 + C_2(x)y_2$ con la condición\n       $C_1'y_1 + C_2'y_2 = 0$. Al sustituir obtenemos el sistema\n       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$\n       cuya solución es $C_1' = -\\frac{y_2 f}{W}$, $C_2' = \\frac{y_1 f}{W}$, donde $W$ es el wronskiano. Este método es necesario, por ejemplo, con segundos miembros\n       $\\frac{1}{\\cos x}$, $\\mathrm{tg}\\,x$, $\\ln x$ o $\\frac{\\mathrm{e}^{x}}{x}$.</p>"
   ],
   "examples": [
    {
     "task": "Halla la solución general de la ecuación $y'' - 3y' + 2y = \\mathrm{e}^{x}$.",
     "steps": [
      "$\\lambda^{2} - 3\\lambda + 2 = 0$ tiene las raíces $1$ y $2$, luego $y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$.",
      "El número $\\alpha = 1$ es raíz simple (resonancia), por eso $y_p = Ax\\mathrm{e}^{x}$. Entonces $y_p' = A(1 + x)\\mathrm{e}^{x}$, $y_p'' = A(2 + x)\\mathrm{e}^{x}$.",
      "Sustituimos: $A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$, luego $A = -1$.",
      "<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$.</strong>"
     ]
    },
    {
     "task": "Resuelve por el método de variación de las constantes la ecuación $y'' + y = \\dfrac{1}{\\cos x}$ en el intervalo $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$.",
     "steps": [
      "$y_1 = \\cos x$, $y_2 = \\sin x$, $W = \\cos^{2} x + \\sin^{2} x = 1$.",
      "$C_1' = -\\frac{\\sin x}{\\cos x}$, luego $C_1 = \\ln(\\cos x) + K_1$; $C_2' = \\frac{\\cos x}{\\cos x} = 1$, luego $C_2 = x + K_2$.",
      "<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$.</strong>"
     ]
    }
   ]
  },
  "v3-kmitanie": {
   "title": "Oscilaciones: libres, amortiguadas y forzadas",
   "summary": "La ecuación $mx'' + cx' + kx = F(t)$, amortiguamiento subcrítico, crítico y supercrítico, oscilaciones forzadas y resonancia.",
   "theory": [
    "<p>Un cuerpo de masa $m$ sujeto a un muelle de constante elástica $k$, amortiguado por una fuerza proporcional a la velocidad (coeficiente $c$) e impulsado por una fuerza externa $F(t)$, obedece la ecuación\n       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$\n       donde $\\omega_0 = \\sqrt{k/m}$ es la <strong>frecuencia angular propia</strong> y $\\delta = \\frac{c}{2m}$ el <strong>coeficiente de amortiguamiento</strong>.\n       La misma ecuación describe la carga en un circuito $RLC$ en serie: $Lq'' + Rq' + \\frac{1}{C}q = U(t)$.</p>\n       <p><strong>Oscilaciones no amortiguadas</strong> ($c = 0$, $F = 0$): $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$, con amplitud\n       $A = \\sqrt{C_1^{2} + C_2^{2}}$ y período $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$.</p>",
    "<p><strong>Oscilaciones amortiguadas</strong> ($F = 0$). La ecuación característica $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$ tiene las raíces $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$:</p>\n       <ul><li>$\\delta \\lt \\omega_0$ (<strong>amortiguamiento subcrítico</strong>, $c^{2} \\lt 4mk$): $x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$,\n       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$; oscilaciones con amplitud que decrece exponencialmente;</li>\n       <li>$\\delta = \\omega_0$ (<strong>amortiguamiento crítico</strong>, $c = 2\\sqrt{mk}$): $x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$;</li>\n       <li>$\\delta \\gt \\omega_0$ (<strong>amortiguamiento supercrítico</strong>): suma de dos exponenciales decrecientes, movimiento aperiódico.</li></ul>",
    {
     "fig": "v3-tlmenie",
     "caption": "Elongación $x(t)$ para $\\omega_0 = 2$, $x(0) = 1$, $x'(0) = 0$. Las curvas discontinuas $\\pm\\mathrm{e}^{-\\delta t}$ acotan las oscilaciones amortiguadas. Para $\\delta = 2$ se produce el amortiguamiento crítico."
    },
    "<p><strong>Oscilaciones forzadas</strong>, $F(t) = F_0\\cos\\omega t$. Sin amortiguamiento y para $\\omega\\neq\\omega_0$ la solución particular es\n       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$. Para $\\omega = \\omega_0$ se produce <strong>resonancia</strong>: $x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$\n       y la amplitud crece sin límite. Con amortiguamiento, las oscilaciones libres se extinguen y queda un régimen estacionario de amplitud\n       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}},$$\n       que es máxima para $\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$ (si $\\omega_0^{2} \\gt 2\\delta^{2}$).</p>",
    {
     "fig": "v3-rezonancia",
     "caption": "Curva de resonancia $A(\\omega)$ para $\\omega_0 = 2$ y $F_0/m = 1$. Con poco amortiguamiento, el máximo es agudo y está cerca de la frecuencia propia (línea discontinua)."
    }
   ],
   "examples": [
    {
     "task": "Un cuerpo de masa $1\\,\\mathrm{kg}$ sujeto a un muelle de constante $16\\,\\mathrm{N/m}$ está amortiguado con coeficiente $c = 4\\,\\mathrm{kg/s}$. Al principio se desplaza $0{,}1\\,\\mathrm{m}$ y se suelta desde el reposo. Halla $x(t)$.",
     "steps": [
      "$x'' + 4x' + 16x = 0$, luego $\\delta = 2$, $\\omega_0 = 4$. Como $\\delta \\lt \\omega_0$, se trata de amortiguamiento subcrítico.",
      "Raíces $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$, $\\omega_d = 2\\sqrt{3}$, $x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$.",
      "$x(0) = C_1 = 0{,}1$; $x'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$, luego $C_2 = \\frac{0{,}1}{\\sqrt{3}}$.",
      "<strong>$x(t) = 0{,}1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$.</strong>"
     ]
    },
    {
     "task": "Resuelve el problema $x'' + 9x = 6\\cos 3t$, $x(0) = 0$, $x'(0) = 0$.",
     "steps": [
      "La frecuencia de excitación es igual a la propia ($\\omega = \\omega_0 = 3$): hay resonancia, $x_p = t(A\\cos 3t + B\\sin 3t)$.",
      "Al sustituir resulta $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$, luego $A = 0$, $B = 1$, $x_p = t\\sin 3t$.",
      "Solución general: $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$; de las condiciones, $C_1 = 0$ y $3C_2 = 0$.",
      "<strong>$x(t) = t\\sin 3t$</strong>: la amplitud crece linealmente con el tiempo."
     ]
    }
   ]
  },
  "v3-sustavy": {
   "title": "Sistemas de ecuaciones diferenciales lineales y diagrama de fases",
   "summary": "El sistema $\\mathbf{x}' = A\\mathbf{x}$, solución mediante valores y vectores propios, clasificación del punto de equilibrio.",
   "theory": [
    "<p>Un sistema de ecuaciones lineales de 1.er orden con coeficientes constantes tiene la forma $\\mathbf{x}' = A\\mathbf{x}$, donde $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$ y $A$ es\n       una matriz cuadrada. Las soluciones forman un espacio vectorial de dimensión $n$; la matriz cuyas columnas son $n$ soluciones linealmente independientes se llama\n       <strong>matriz fundamental</strong>. Toda ecuación de orden $n$ se puede escribir como un sistema (por ejemplo, para $y'' + py' + qy = 0$ ponemos $x_1 = y$, $x_2 = y'$)\n       y, a la inversa, un sistema $2\\times 2$ se puede transformar mediante el <strong>método de eliminación</strong> en una única ecuación de 2.º orden.</p>",
    "<p><strong>Método matricial.</strong> Buscamos soluciones $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$. Al sustituir, $A\\mathbf{v} = \\lambda\\mathbf{v}$: $\\lambda$ es un\n       <strong>valor propio</strong> de la matriz $A$ (raíz de la ecuación $\\det(A - \\lambda I) = 0$) y $\\mathbf{v}$, el vector propio correspondiente.</p>\n       <ul><li>$\\lambda_1, \\lambda_2$ reales distintos: $\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$.</li>\n       <li>$\\lambda = \\alpha\\pm\\beta\\mathrm{i}$ complejos con vector $\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$: las soluciones reales son la parte real y la parte imaginaria de\n       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$, es decir, $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$ y $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$.</li>\n       <li>$\\lambda$ doble con un único vector propio $\\mathbf{v}$: la segunda solución es $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$, donde $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$.</li></ul>",
    "<p>El <strong>diagrama de fases</strong> de un sistema plano representa las trayectorias $(x(t), y(t))$ en el plano $xy$. El punto $\\mathbf{0}$ es de equilibrio (estacionario) y, si\n       $\\det A\\neq 0$, es el único. Su tipo lo determinan los valores propios o, equivalentemente, la traza $\\mathrm{tr}\\,A$ y el determinante:</p>\n       <table class=\"tbl\"><tr><th>valores propios</th><th>tipo</th><th>estabilidad</th></tr>\n       <tr><td>reales, de signos opuestos ($\\det A \\lt 0$)</td><td>punto de silla</td><td>inestable</td></tr>\n       <tr><td>reales, del mismo signo</td><td>nodo</td><td>estable para $\\lambda \\lt 0$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\alpha\\neq 0$</td><td>foco (espirales)</td><td>estable para $\\alpha \\lt 0$</td></tr>\n       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>centro (curvas cerradas)</td><td>estable, no asintóticamente</td></tr></table>",
    {
     "fig": "v3-fazovy",
     "caption": "Diagrama de fases del sistema $x' = a_{11}x + a_{12}y$, $y' = a_{21}x + a_{22}y$. Las rectas naranjas son las direcciones de los vectores propios (con valores propios reales) y los triangulitos indican el sentido del movimiento al crecer $t$. Cambiando los elementos de la matriz, recorre todos los tipos de la tabla."
    }
   ],
   "examples": [
    {
     "task": "Resuelve el sistema $x' = x + 2y$, $y' = 2x + y$ con la condición inicial $x(0) = 3$, $y(0) = 1$.",
     "steps": [
      "$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$, luego $\\lambda_1 = 3$, $\\lambda_2 = -1$.",
      "Vectores propios: para $\\lambda_1 = 3$ es $\\mathbf{v}_1 = (1, 1)^{T}$; para $\\lambda_2 = -1$ es $\\mathbf{v}_2 = (1, -1)^{T}$.",
      "$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$. Condiciones: $C_1 + C_2 = 3$, $C_1 - C_2 = 1$, luego $C_1 = 2$, $C_2 = 1$.",
      "<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$, $y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$.</strong> Los valores propios tienen signos opuestos: el punto de equilibrio es un punto de silla."
     ]
    },
    {
     "task": "Determina el tipo del punto de equilibrio del sistema $x' = y$, $y' = -5x - 2y$ y compáralo con la ecuación de 2.º orden.",
     "steps": [
      "$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$, $\\mathrm{tr}\\,A = -2$, $\\det A = 5$, ecuación característica $\\lambda^{2} + 2\\lambda + 5 = 0$.",
      "Los valores propios $-1\\pm 2\\mathrm{i}$ tienen parte real negativa: <strong>foco estable</strong>; las trayectorias se acercan al origen en espiral.",
      "El sistema es otra forma de escribir la ecuación $x'' + 2x' + 5x = 0$ (oscilaciones amortiguadas); su solución es $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$."
     ]
    }
   ]
  },
  "v3-laplace": {
   "title": "Transformada de Laplace",
   "summary": "Definición, tabla de transformadas, transformada de la derivada, transformada inversa mediante fracciones simples y resolución de problemas de valor inicial.",
   "theory": [
    "<p>La <strong>transformada de Laplace</strong> asigna a una función $f(t)$ definida para $t \\ge 0$ una función de una variable compleja (para nosotros, real) $s$:\n       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$\n       La integral converge para $s \\gt s_0$ si $f$ es continua a trozos y de <strong>orden exponencial</strong>, es decir, $|f(t)| \\le M\\mathrm{e}^{s_0t}$.\n       Por ejemplo, $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$ para $s \\gt a$. La transformada es lineal\n       e inyectiva para funciones continuas, de modo que a cada transformada $F$ le corresponde una única función original $f = \\mathcal{L}^{-1}\\{F\\}$.</p>",
    "<table class=\"tbl\"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>\n       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>\n       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>\n       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>\n       <p>Aquí $u$ es la función de Heaviside (escalón unitario). La transformada de la convolución $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$ es el producto $F(s)G(s)$.</p>",
    "<p><strong>Resolución de un problema de valor inicial.</strong> La regla para la transformada de la derivada convierte una ecuación lineal con coeficientes constantes en una ecuación algebraica para $Y(s)$,\n       en la que las condiciones iniciales se incorporan automáticamente. De ella despejamos $Y(s)$ (normalmente una función racional), la descomponemos en\n       <strong>fracciones simples</strong> y, con ayuda de la tabla, hallamos $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$. El método es especialmente ventajoso con segundos miembros discontinuos o impulsivos.</p>",
    {
     "fig": "v3-laplace",
     "caption": "Procedimiento de resolución: transformada, manipulación algebraica en el dominio de las transformadas y transformada inversa."
    }
   ],
   "examples": [
    {
     "task": "Halla la transformada de Laplace de la función $f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$.",
     "steps": [
      "Usamos la linealidad y la tabla: $\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$, $\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$, $\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$.",
      "<strong>$F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong> para $s \\gt 2$."
     ]
    },
    {
     "task": "Resuelve mediante la transformada de Laplace el problema $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$.",
     "steps": [
      "Transformamos: $s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$, luego $(s^{2} + 3s + 2)Y = s + 3$.",
      "$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$ (fracciones simples, por ejemplo, con el método de Heaviside o de «tapar»).",
      "<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$.</strong> Comprobación: $y(0) = 1$, $y'(0) = -2 + 2 = 0$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$A = {@0}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, kde $\\mathrm{tr}\\,A = {@2}$ a $\\det A = {@3}$. Korene sú $\\lambda_1 = {@4}$ a $\\lambda_2 = {@5}$.": "$A = {@0}$. La ecuación característica es $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, donde $\\mathrm{tr}\\,A = {@2}$ y $\\det A = {@3}$. Las raíces son $\\lambda_1 = {@4}$ y $\\lambda_2 = {@5}$.",
  "$C_1 + C_2 = {@0}$ a ${@1} = {@2}$": "$C_1 + C_2 = {@0}$ y ${@1} = {@2}$",
  "$C_1 = {@0}$ a ${@1} = {@2}$": "$C_1 = {@0}$ y ${@1} = {@2}$",
  "$M_y = {@0}$, $N_x = {@1}$, teda $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ závisí len od $x$. Preto $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrola: $(\\mu M)_y = {@11}$ a $(\\mu N)_x = {@12}$.": "$M_y = {@0}$, $N_x = {@1}$, por tanto $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ depende solo de $x$. Por eso $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Comprobación: $(\\mu M)_y = {@11}$ y $(\\mu N)_x = {@12}$.",
  "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, teda asi ${@8}$ jedincov.": "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ con $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, es decir, unos ${@8}$ individuos.",
  "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-{@4}t} = 1$, teda $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ roka.": "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. La condición $P = \\frac{K}{2}$ significa $A\\mathrm{e}^{-{@4}t} = 1$, por tanto $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ años.",
  "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, z merania $k = {@2} \\approx {@3}$. Z podmienky ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ máme $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minúty.": "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$; de la medición, $k = {@2} \\approx {@3}$. De la condición ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ tenemos $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minutos.",
  "$\\lambda = {@0}$ (dvojnásobný koreň)": "$\\lambda = {@0}$ (raíz doble)",
  "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ a $\\mathcal{L}\\{y'\\} = sY{@2}$. Po dosadení $({@3})Y = {@4}{@5}{@6}$, teda ${@7}$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ y $\\mathcal{L}\\{y'\\} = sY{@2}$. Tras sustituir, $({@3})Y = {@4}{@5}{@6}$, por tanto ${@7}$.",
  "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}": "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, discriminante de la ecuación característica $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}",
  "$\\omega_0 = {@0}$, riešenie $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ s $C_1 = x(0) = {@3}$ a ${@4}C_2 = x'(0) = {@5}$, teda $C_2 = {@6}$. Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.": "$\\omega_0 = {@0}$, solución $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ con $C_1 = x(0) = {@3}$ y ${@4}C_2 = x'(0) = {@5}$, por tanto $C_2 = {@6}$. Amplitud $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.",
  "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ máme $\\mathrm{e}^{-t/\\tau} = {@2}$, teda $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.": "$\\tau = RC = {@0}\\,\\mathrm{ms}$. De la condición $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ tenemos $\\mathrm{e}^{-t/\\tau} = {@2}$, por tanto $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.",
  "$\\varphi'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú": "$\\varphi'(y) = 0$, así que $\\varphi$ es una constante, que tomamos nula",
  "$\\varphi'(y) = {@0}$, teda $\\varphi(y) = {@1}$": "$\\varphi'(y) = {@0}$, por tanto $\\varphi(y) = {@1}$",
  "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Z podmienky $2^{-t/{@1}} = {@2}$ logaritmovaním $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.": "$m(t) = m_0\\cdot 2^{-t/{@0}}$. De la condición $2^{-t/{@1}} = {@2}$, tomando logaritmos, $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.",
  "$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov: pri $x^{2}$: ${@0} = {@1}$, $A = {@2}$; pri $x$: ${@3} = {@4}$, $B = {@5}$; absolútny člen: ${@6} = {@7}$, $C = {@8}$.": "$y_p' = 2Ax + B$, $y_p'' = 2A$. Tras sustituir y comparar coeficientes: de $x^{2}$: ${@0} = {@1}$, $A = {@2}$; de $x$: ${@3} = {@4}$, $B = {@5}$; término independiente: ${@6} = {@7}$, $C = {@8}$.",
  "$y_p' = A$, $y_p'' = 0$. Dosadíme: ${@0}{@1} = {@2}$. Porovnaním koeficientov: pri $x$ je ${@3} = {@4}$, teda $A = {@5}$; absolútny člen ${@6} = {@7}$, teda $B = {@8}$.": "$y_p' = A$, $y_p'' = 0$. Sustituimos: ${@0}{@1} = {@2}$. Comparando coeficientes: de $x$ es ${@3} = {@4}$, por tanto $A = {@5}$; término independiente ${@6} = {@7}$, por tanto $B = {@8}$.",
  "${@0}$, teda $K = {@1}$ a $m = {@2}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = {@3}$.": "${@0}$, por tanto $K = {@1}$ y $m = {@2}$. Coincide con la fórmula de Liouville: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ con $p = {@3}$.",
  ", teda $a = {@0}$": ", por tanto $a = {@0}$",
  "Absolútny člen v čitateli kazí homogenitu. Takú rovnicu treba najprv posunúť do priesečníka priamok.": "El término independiente del numerador estropea la homogeneidad. Una ecuación así hay que trasladarla primero al punto de corte de las rectas.",
  "Aké množstvo soli (v kg) je rovnovážne, teda pri ňom je $x' = 0$?": "¿Qué cantidad de sal (en kg) es la de equilibrio, es decir, aquella para la que $x' = 0$?",
  "Aké napätie (vo voltoch) bude na kondenzátore? {@0}": "¿Qué tensión (en voltios) tendrá el condensador? {@0}",
  "Akú smernicu má úsečka smerového poľa rovnice $y' = {@0}$ v bode $[{@1}; {@2}]$?": "¿Qué pendiente tiene el segmento del campo de direcciones de la ecuación $y' = {@0}$ en el punto $[{@1}; {@2}]$?",
  "Akú teplotu bude mať teleso? Zaokrúhli na desatiny stupňa.": "¿Qué temperatura tendrá el cuerpo? Redondea a las décimas de grado.",
  "Aký je celkový koeficient pri $\\frac{1}{{@0}}$ v $Y(s)$, teda $A$?": "¿Cuál es el coeficiente total de $\\frac{1}{{@0}}$ en $Y(s)$, es decir, $A$?",
  "Aký je súčin koreňov?": "¿Cuál es el producto de las raíces?",
  "Amplitúda nie je súčet $|C_1| + |C_2|$, ale $\\sqrt{C_1^{2} + C_2^{2}}$ (zloženie kosínusu a sínusu s rovnakou frekvenciou).": "La amplitud no es la suma $|C_1| + |C_2|$, sino $\\sqrt{C_1^{2} + C_2^{2}}$ (composición de un coseno y un seno de la misma frecuencia).",
  "Amplitúda vynútených kmitov v závislosti od frekvencie": "Amplitud de las oscilaciones forzadas en función de la frecuencia",
  "Bernoulliho rovnicu $y'{@0} = {@1}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi. Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).": "La ecuación de Bernoulli $y'{@0} = {@1}$ se transforma con la sustitución $z = y^{k}$ en una ecuación lineal $z' + Pz = Q$ con coeficientes constantes. Determina $k$, $P$ y $Q$ (escribe las fracciones en la forma $a/b$).",
  "Charakteristická rovnica ${@0}$ má diskriminant $D = {@1}$ a korene {@2}. {@3} je všeobecné riešenie ${@4}$.": "La ecuación característica ${@0}$ tiene discriminante $D = {@1}$ y raíces {@2}. {@3} la solución general es ${@4}$.",
  "Charakteristická rovnica ${@0}$ má korene $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, teda $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pre $t = 0$: $C_1 + C_2 = {@7}$ a ${@8} = {@9}$, odkiaľ $C_1 = {@10}$, $C_2 = {@11}$.": "La ecuación característica ${@0}$ tiene raíces $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. De la primera fila de $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ para $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, por tanto $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Para $t = 0$: $C_1 + C_2 = {@7}$ y ${@8} = {@9}$, de donde $C_1 = {@10}$, $C_2 = {@11}$.",
  "Charakteristická rovnica ${@0}$ má korene ${@1}$ a ${@2}$, takže ${@3}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Po dosadení sa členy s $x$ odčítajú a zostane $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, teda $A = {@16}$.": "La ecuación característica ${@0}$ tiene raíces ${@1}$ y ${@2}$, así que ${@3}$ es raíz simple (resonancia) y en la forma de $y_p$ aparece el factor $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Tras sustituir, los términos con $x$ se cancelan y queda $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, por tanto $A = {@16}$.",
  "Charakteristická rovnica ${@0}$ má korene {@1}, preto ${@2}$. Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu {@3}, ktorej riešenie je $C_1 = {@4}$, $C_2 = {@5}$.": "La ecuación característica ${@0}$ tiene raíces {@1}, por eso ${@2}$. Sustituyendo $x = 0$ en $y$ e $y'$ obtenemos el sistema {@3}, cuya solución es $C_1 = {@4}$, $C_2 = {@5}$.",
  "Charakteristická rovnica ${@0}$ má {@1}. Pravá strana je {@2}{@3}, teda $\\alpha = {@4}$, a to {@5} charakteristickej rovnice ($k = {@6}$). Preto $y_p = {@7}$.": "La ecuación característica ${@0}$ tiene {@1}. El lado derecho es {@2}{@3}, por tanto $\\alpha = {@4}$, que {@5} de la ecuación característica ($k = {@6}$). Por eso $y_p = {@7}$.",
  "Charakteristická rovnica (po vydelení koeficientom pri $y''$) je $\\lambda^{2} + p\\lambda + q = 0$. Aký je súčet jej koreňov?": "La ecuación característica (tras dividir entre el coeficiente de $y''$) es $\\lambda^{2} + p\\lambda + q = 0$. ¿Cuál es la suma de sus raíces?",
  "Delil si len číslom ${@0}$, ale v riešení je $x^{2}$, teda $x_0^{2}$.": "Solo has dividido entre ${@0}$, pero en la solución aparece $x^{2}$, es decir, $x_0^{2}$.",
  "Derivácia $(C_1 + C_2x){@0}$ má pri $x = 0$ hodnotu ${@1}C_1 + C_2$; zabudol si na člen z derivácie exponenciály.": "La derivada de $(C_1 + C_2x){@0}$ en $x = 0$ vale ${@1}C_1 + C_2$; olvidaste el término que procede de derivar la exponencial.",
  "Derivácia $C_2\\sin {@0}t$ je ${@1}C_2\\cos {@2}t$, preto $C_2 = \\frac{x'(0)}{\\omega_0}$, nie $x'(0)$.": "La derivada de $C_2\\sin {@0}t$ es ${@1}C_2\\cos {@2}t$, por eso $C_2 = \\frac{x'(0)}{\\omega_0}$, no $x'(0)$.",
  "Derivácie $y_p$ nie sú nulové: $y_p' = {@0}A{@1}$ a $y_p'' = {@2}A{@3}$ treba tiež dosadiť.": "Las derivadas de $y_p$ no son nulas: también hay que sustituir $y_p' = {@0}A{@1}$ e $y_p'' = {@2}A{@3}$.",
  "Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.": "El determinante es negativo, los valores propios son reales y de signos opuestos: silla.",
  "Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.": "Sustituye $x = 0$ e $y = y_0$ en la solución general y despeja $C$.",
  "Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme {@0}${@1}$. Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = {@2}$ a $\\lambda_1\\lambda_2 = {@3}$, korene sú {@4}. Všeobecné riešenie je ${@5}$.": "Sustituyendo $y = \\mathrm{e}^{\\lambda x}$ obtenemos {@0}${@1}$. Según las fórmulas de Vieta, $\\lambda_1 + \\lambda_2 = {@2}$ y $\\lambda_1\\lambda_2 = {@3}$; las raíces son {@4}. La solución general es ${@5}$.",
  "Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, odkiaľ $C = {@3}$. Riešenie Cauchyho úlohy je $y = {@4}$.": "Sustituimos $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, de donde $C = {@3}$. La solución del problema de Cauchy es $y = {@4}$.",
  "Dosadíme $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, teda $({@3} - {@4})A = {@5}$ a $A = {@6}$. {@7}": "Sustituimos $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, por tanto $({@3} - {@4})A = {@5}$ y $A = {@6}$. {@7}",
  "Dosadíme: $C\\cdot {@0}^{2}{@1} = {@2}$, teda ${@3}C = {@4}$ a $C = {@5}$.": "Sustituimos: $C\\cdot {@0}^{2}{@1} = {@2}$, por tanto ${@3}C = {@4}$ y $C = {@5}$.",
  "Dosadíme: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, teda $\\frac{C}{{@4}} = {@5}$ a $C = {@6}$. (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = {@7} + C$.)": "Sustituimos: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, por tanto $\\frac{C}{{@4}} = {@5}$ y $C = {@6}$. (Comprobación: el lado izquierdo de la ecuación es $(xy)'$ y $xy = {@7} + C$.)",
  "Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.": "Sustituye $P = \\frac{K}{2}$ en la solución $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; obtienes $A\\mathrm{e}^{-rt} = 1$.",
  "Dosaď $t = 0$ a vyrieš sústavu pre konštanty. Zadaj $C_1$ a $C_2$.": "Sustituye $t = 0$ y resuelve el sistema para las constantes. Escribe $C_1$ y $C_2$.",
  "Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.": "Sustituye $x$ por $tx$ e $y$ por $ty$. En una ecuación homogénea, el lado derecho no cambia.",
  "Dosaď $x = 0$ do $y_1, y_2, y_1', y_2'$.": "Sustituye $x = 0$ en $y_1, y_2, y_1', y_2'$.",
  "Dosaď $x = 0$ do všeobecného riešenia a jeho derivácie a z vzniknutej sústavy urči $C_1$.": "Sustituye $x = 0$ en la solución general y en su derivada y, del sistema resultante, determina $C_1$.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.": "Sustituye $x = x_0$, $y = y_0$ en la solución general y despeja $C$.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.": "Sustituye $x = x_0$, $y = y_0$ en la solución general y resuelve la ecuación lineal para $C$.",
  "Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.": "Sustituye $x_p$ en la ecuación: $(\\omega_0^{2} - \\omega^{2})A = F_0$.",
  "Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.": "Sustituye $y_p = Ax + B$ en la ecuación y compara los coeficientes de $x$ y los términos independientes.",
  "Dosaď $y_p = A{@0}$ do rovnice a urči $A$.": "Sustituye $y_p = A{@0}$ en la ecuación y determina $A$.",
  "Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.": "Sustituye $y_p$ en la ecuación y compara los coeficientes del coseno y del seno; obtienes un sistema de dos ecuaciones para $A$, $B$.",
  "Dosaď konštantu $y_p = K$ do rovnice ($y_p' = 0$) a pozorne vyjadri $K$.": "Sustituye la constante $y_p = K$ en la ecuación ($y_p' = 0$) y despeja $K$ con cuidado.",
  "Druhá derivácia kosínusu je záporná: $x_p'' = -{@0}A\\cos {@1}$.": "La derivada segunda del coseno es negativa: $x_p'' = -{@0}A\\cos {@1}$.",
  "Exponenciálne neklesá samotná teplota telesa, ale jej rozdiel od teploty okolia $T - T_o$.": "Lo que decrece exponencialmente no es la temperatura del cuerpo, sino su diferencia con la temperatura ambiente $T - T_o$.",
  "Exponenciálny a logistický rast": "Crecimiento exponencial y logístico",
  "Exponent je reálna časť koreňov $\\alpha = -\\frac{p}{2}$; skontroluj jej znamienko.": "El exponente es la parte real de las raíces $\\alpha = -\\frac{p}{2}$; comprueba su signo.",
  "Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, teda $\\mathrm{arctg}\\,y = {@1} + C$ a $y = \\mathrm{tg}({@2} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}({@3}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.": "La función $1 + y^{2}$ no tiene ceros, no existen soluciones estacionarias. Separamos variables: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, por tanto $\\mathrm{arctg}\\,y = {@1} + C$ e $y = \\mathrm{tg}({@2} + C)$. La constante está dentro del argumento; por ejemplo, $y = \\mathrm{tg}({@3}) + C$ no cumple la ecuación para $C\\neq 0$.",
  "Funkcie ${@0}$ tvoria fundamentálny systém rovnice ${@1} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.": "Las funciones ${@0}$ forman un sistema fundamental de la ecuación ${@1} = 0$. Su wronskiano tiene la forma $W(x) = K\\mathrm{e}^{mx}$. Determina $K$ y $m$.",
  "Fázový portrét lineárnej sústavy": "Retrato de fase de un sistema lineal",
  "Goniometrické funkcie patria ku komplexným koreňom ($D \\lt 0$). Aký je tu diskriminant?": "Las funciones trigonométricas corresponden a raíces complejas ($D \\lt 0$). ¿Cuál es aquí el discriminante?",
  "Homogénna rovnica $y'{@0} = 0$ dáva $y' = {@1}$; skontroluj znamienko v exponente.": "La ecuación homogénea $y'{@0} = 0$ da $y' = {@1}$; comprueba el signo del exponente.",
  "Homogénna rovnica $y'{@0} = 0$ má riešenie $y_h = C{@1}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$: ${@2}K = {@3}$, teda $K = {@4}$. Všeobecné riešenie je ${@5}$.": "La ecuación homogénea $y'{@0} = 0$ tiene la solución $y_h = C{@1}$. Buscamos la solución particular como constante $y_p = K$: ${@2}K = {@3}$, por tanto $K = {@4}$. La solución general es ${@5}$.",
  "Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y')^{3}$, rád nezvyšuje.": "Busca el mayor orden de derivada. Un exponente sobre el paréntesis, por ejemplo $(y')^{3}$, no aumenta el orden.",
  "Integračný faktor je $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrovaním $y{@3} = {@4} + B$, teda $y = {@5} + B{@6}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Z podmienky ${@12} + B = {@13}$, teda $B = {@14}$. Odpoveď: $A = {@15}$, $B = {@16}$.": "El factor integrante es $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrando, $y{@3} = {@4} + B$, por tanto $y = {@5} + B{@6}$ (la solución particular también se puede hallar sustituyendo $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). De la condición ${@12} + B = {@13}$, por tanto $B = {@14}$. Respuesta: $A = {@15}$, $B = {@16}$.",
  "Integračný faktor je ${@0}$ a riešenie má tvar $y = {@1} + \\frac{C}{{@2}}$. Urči $C$ zo začiatočnej podmienky.": "El factor integrante es ${@0}$ y la solución tiene la forma $y = {@1} + \\frac{C}{{@2}}$. Determina $C$ a partir de la condición inicial.",
  "Integruj $M$ podľa $x$ (bez $\\varphi(y)$) a túto časť $F$ vyčísli v bode $[{@0}; {@1}]$.": "Integra $M$ respecto a $x$ (sin $\\varphi(y)$) y evalúa esta parte de $F$ en el punto $[{@0}; {@1}]$.",
  "Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.": "Integra $M$ respecto a $x$, añade la función desconocida $\\varphi(y)$ y determínala comparando $F_y$ con $N$. Al final sustituye el punto.",
  "Integrál dáva $\\mathrm{arctg}\\,y = \\dots$; na vyjadrenie $y$ treba použiť inverznú funkciu k arkustangensu.": "La integral da $\\mathrm{arctg}\\,y = \\dots$; para despejar $y$ hay que usar la función inversa de la arcotangente.",
  "Integrálne krivky rovnice y' = xy": "Curvas integrales de la ecuación y' = xy",
  "K koeficientu z rozkladu pripočítaj člen zo začiatočnej podmienky.": "Al coeficiente de la descomposición súmale el término que procede de la condición inicial.",
  "Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.": "Deriva cada función y sustitúyela en la ecuación. La solución debe cumplir la ecuación para todo $x$.",
  "Keďže $c^{2} = 4mk$": "Como $c^{2} = 4mk$",
  "Keďže $c^{2} \\gt 4mk$": "Como $c^{2} \\gt 4mk$",
  "Keďže $c^{2} \\lt 4mk$": "Como $c^{2} \\lt 4mk$",
  "Keďže ${@0}\\neq {@1}$, nejde o rezonanciu.": "Como ${@0}\\neq {@1}$, no hay resonancia.",
  "Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.": "Un $A$ positivo significa que las oscilaciones están en fase con la fuerza excitadora.",
  "Koeficient p": "Coeficiente p",
  "Koeficient pri $x'$ (po vydelení hmotnosťou) je $2\\delta$, nie $\\delta$. Najprv ho vydeľ dvoma.": "El coeficiente de $x'$ (tras dividir entre la masa) es $2\\delta$, no $\\delta$. Primero divídelo entre dos.",
  "Koeficient q": "Coeficiente q",
  "Koeficient rastu k": "Tasa de crecimiento k",
  "Koeficient útlmu δ": "Coeficiente de amortiguamiento δ",
  "Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.": "Calcula los coeficientes por orden, desde la potencia más alta: primero $A$ con el término en $x^{2}$, después $B$ y al final $C$.",
  "Konštanta $A$ vychádza z podmienky $P(0) = \\frac{K}{1 + A} = P_0$, teda $A = \\frac{K - P_0}{P_0}$, nie $\\frac{K}{P_0}$.": "La constante $A$ se obtiene de la condición $P(0) = \\frac{K}{1 + A} = P_0$, es decir, $A = \\frac{K - P_0}{P_0}$, no $\\frac{K}{P_0}$.",
  "Konštanta $C$ v riešení je delená integračným faktorom ${@0}$; pri $x = 2$ ju treba tiež vydeliť.": "La constante $C$ de la solución está dividida entre el factor integrante ${@0}$; en $x = 2$ también hay que dividirla.",
  "Konštanta rozpadu nie je $\\frac{1}{T}$, ale $k = \\frac{\\ln 2}{T}$: za čas $T$ musí množstvo klesnúť presne na polovicu.": "La constante de desintegración no es $\\frac{1}{T}$, sino $k = \\frac{\\ln 2}{T}$: en el tiempo $T$ la cantidad debe bajar exactamente a la mitad.",
  "Konštanta vzniká pri integrovaní, teda v rovnosti $\\mathrm{arctg}\\,y = \\dots + C$. Keď z nej vyjadríš $y$, kam sa $C$ dostane?": "La constante aparece al integrar, es decir, en la igualdad $\\mathrm{arctg}\\,y = \\dots + C$. Cuando despejas $y$, ¿dónde queda $C$?",
  "Koľko gramov izotopu zostane? {@0}": "¿Cuántos gramos del isótopo quedarán? {@0}",
  "Koľko je $y({@0})^{2}$?": "¿Cuánto vale $y({@0})^{2}$?",
  "Koľko jedincov bude mať populácia? Zaokrúhli na celé číslo.": "¿Cuántos individuos tendrá la población? Redondea a un número entero.",
  "Koľko kilogramov soli bude v nádrži po ${@0}$ minútach? {@1}": "¿Cuántos kilogramos de sal habrá en el depósito al cabo de ${@0}$ minutos? {@1}",
  "Koľko polčasov rozpadu uplynie za ${@0}$ {@1}? {@2}": "¿Cuántos periodos de semidesintegración transcurren en ${@0}$ {@1}? {@2}",
  "Ktorá funkcia je všeobecným riešením rovnice $y' = {@0}(1 + y^{2})$?": "¿Qué función es la solución general de la ecuación $y' = {@0}(1 + y^{2})$?",
  "Ktorá funkcia je všeobecným riešením rovnice $y'{@0} = {@1}$?": "¿Qué función es la solución general de la ecuación $y'{@0} = {@1}$?",
  "Ktorá funkcia je všeobecným riešením rovnice ${@0} = 0$?": "¿Qué función es la solución general de la ecuación ${@0} = 0$?",
  "Ktorá z funkcií je riešením rovnice ${@0}$?": "¿Cuál de las funciones es solución de la ecuación ${@0}$?",
  "Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y' = \\varphi\\left(\\frac{y}{x}\\right)$?": "¿Cuál de las ecuaciones es homogénea, es decir, se puede escribir en la forma $y' = \\varphi\\left(\\frac{y}{x}\\right)$?",
  "Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?": "¿Cuál es la transformada de Laplace $Y(s)$ de la solución del problema ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?",
  "Laplaceovou transformáciou vyrieš úlohu $y'{@0} = {@1}$, $y(0) = {@2}$. Riešenie má tvar $y(t) = A{@3} + B{@4}$; urči $A$ a $B$.": "Resuelve con la transformada de Laplace el problema $y'{@0} = {@1}$, $y(0) = {@2}$. La solución tiene la forma $y(t) = A{@3} + B{@4}$; determina $A$ y $B$.",
  "Liouvilleov vzorec: $W(x) = W(0)\\mathrm{e}^{-px}$.": "Fórmula de Liouville: $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Menovateľ je charakteristický polynóm rovnice: koeficienty pri $s$ majú rovnaké znamienka ako pri $y'$ v rovnici.": "El denominador es el polinomio característico de la ecuación: los coeficientes de $s$ tienen los mismos signos que los de $y'$ en la ecuación.",
  "Menovateľ rozložíme: ${@0} = (s{@1})(s{@2})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zakrývacia metóda: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Preto $f(t) = {@17}{@18}$.": "Factorizamos el denominador: ${@0} = (s{@1})(s{@2})$. Descomposición en fracciones simples: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Método del recubrimiento: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Por eso $f(t) = {@17}{@18}$.",
  "Mocnina $x$ v tvare $y_p$ sa rovná násobnosti čísla ${@0}$ ako koreňa charakteristickej rovnice. Over túto násobnosť.": "La potencia de $x$ en la forma de $y_p$ es igual a la multiplicidad del número ${@0}$ como raíz de la ecuación característica. Comprueba esta multiplicidad.",
  "Multiplikatívna konštanta vzniká pri rovniciach $y' = g(x)y$ (cez logaritmus). Tu integruješ $\\frac{1}{1 + y^{2}}$, teda konštanta je aditívna v argumente.": "Una constante multiplicativa aparece en ecuaciones $y' = g(x)y$ (a través del logaritmo). Aquí integras $\\frac{1}{1 + y^{2}}$, así que la constante es aditiva en el argumento.",
  "Najprv skontroluj znamienko $\\det A$: rozhoduje, či majú vlastné čísla opačné znamienka.": "Primero comprueba el signo de $\\det A$: decide si los valores propios tienen signos opuestos.",
  "Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.": "Primero determina $k$ a partir de la medición y después resuelve $T(t) = T^{*}$ tomando logaritmos.",
  "Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = {@0}$. Vypočítaj $F({@1})$ (presne ako zlomok, alebo na 3 desatinné miesta).": "Sea $F(s) = \\mathcal{L}\\{f\\}(s)$ para $f(t) = {@0}$. Calcula $F({@1})$ (exactamente como fracción o con 3 decimales).",
  "Nenabitý kondenzátor s kapacitou ${@0}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím ${@1}\\,\\mathrm{V}$ cez rezistor s odporom ${@2}\\,\\mathrm{k\\Omega}$.": "Cargamos un condensador descargado de capacidad ${@0}\\,\\mu\\mathrm{F}$ con una fuente de tensión ${@1}\\,\\mathrm{V}$ a través de una resistencia de ${@2}\\,\\mathrm{k\\Omega}$.",
  "Nesčítavaj integrál $M$ podľa $x$ a integrál $N$ podľa $y$: zmiešané členy by si tak započítal dvakrát. Z $N$ ber len členy, ktoré ešte chýbajú.": "No sumes la integral de $M$ respecto a $x$ y la integral de $N$ respecto a $y$: así contarías dos veces los términos mixtos. De $N$ toma solo los términos que todavía faltan.",
  "Netlmený oscilátor $x'' + {@0}x = 0$ má začiatočné podmienky $x(0) = {@1}$, $x'(0) = {@2}$. Urči amplitúdu kmitov. {@3}": "El oscilador no amortiguado $x'' + {@0}x = 0$ tiene las condiciones iniciales $x(0) = {@1}$, $x'(0) = {@2}$. Determina la amplitud de las oscilaciones. {@3}",
  "Netlmený oscilátor je budený periodickou silou: $x'' + {@0}x = {@1}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos {@2}$. Urči $A$ (ako zlomok alebo celé číslo).": "Un oscilador no amortiguado es excitado por una fuerza periódica: $x'' + {@0}x = {@1}$. Las oscilaciones forzadas estacionarias tienen la forma $x_p = A\\cos {@2}$. Determina $A$ (como fracción o número entero).",
  "Nosná kapacita K": "Capacidad de carga K",
  "Nádrž obsahuje ${@0}$ litrov {@1}. Priteká do nej {@2} a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po ${@3}$ minútach? {@4}": "Un depósito contiene ${@0}$ litros {@1}. Le entra {@2} y la disolución, perfectamente mezclada, sale al mismo ritmo. ¿Cuántos kilogramos de sal habrá en el depósito al cabo de ${@3}$ minutos? {@4}",
  "Nájdi korene charakteristickej rovnice diferenciálnej rovnice ${@0}$. Zadaj ich oddelené bodkočiarkou.": "Halla las raíces de la ecuación característica de la ecuación diferencial ${@0}$. Escríbelas separadas por punto y coma.",
  "Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.": "Halla los valores propios y los vectores propios en la forma $(1, m)^{T}$; después sustituye $t = 0$ y resuelve el sistema para $C_1$, $C_2$.",
  "Nájdi vlastné čísla matice sústavy {@0}. Zadaj ich oddelené bodkočiarkou.": "Halla los valores propios de la matriz del sistema {@0}. Escríbelos separados por punto y coma.",
  "Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{{@0}}{{@1}}$. Výsledok má tvar $f(t) = A{@2} + B{@3}$; urči $A$ a $B$.": "Halla la original $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ de la función $F(s) = \\dfrac{{@0}}{{@1}}$. El resultado tiene la forma $f(t) = A{@2} + B{@3}$; determina $A$ y $B$.",
  "Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{{@0}}$. Bilancia: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Rovnovážna hodnota je $cV = {@5}$, preto $x(t) = {@6}$ a $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.": "El volumen no cambia, la concentración en el depósito es $\\frac{x}{{@0}}$. Balance: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. El valor de equilibrio es $cV = {@5}$, por eso $x(t) = {@6}$ y $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.",
  "Obraz exponenciály je $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nie $\\frac{1}{s + a}$.": "La transformada de la exponencial es $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, no $\\frac{1}{s + a}$.",
  "Obraz mocniny je $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; zabudol si na faktoriál.": "La transformada de una potencia es $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; olvidaste el factorial.",
  "Oddelíme premenné: $y\\,dy = {@0}\\,dx$, teda $\\frac{y^{2}}{2} = {@1} + C$, čiže $y^{2} = {@2} + 2C$. Z podmienky $2C = {@3}$, takže $y^{2} = {@4} + {@5}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu: $y = \\sqrt{{@6} + {@7}}$ a $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.": "Separamos variables: $y\\,dy = {@0}\\,dx$, por tanto $\\frac{y^{2}}{2} = {@1} + C$, es decir, $y^{2} = {@2} + 2C$. De la condición, $2C = {@3}$, así que $y^{2} = {@4} + {@5}$. Como $y(0) \\gt 0$, tomamos la raíz positiva: $y = \\sqrt{{@6} + {@7}}$ e $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.",
  "Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.": "Separa variables $\\frac{dy}{y^{2}} = k\\,dx$ y recuerda que $\\int y^{-2}\\,dy = -\\frac{1}{y}$.",
  "Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.": "Separa variables $y\\,dy = kx\\,dx$ e integra. El signo de la raíz determínalo a partir de la condición inicial.",
  "Odmocnina súčtu nie je súčet odmocnín: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Najprv sčítaj pod odmocninou.": "La raíz de una suma no es la suma de las raíces: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Primero suma bajo la raíz.",
  "Odtok soli je koncentrácia krát prietok, teda $\\frac{x}{V}\\cdot q$. V exponente preto musí byť aj prietok $q$.": "La salida de sal es la concentración por el caudal, es decir, $\\frac{x}{V}\\cdot q$. Por eso en el exponente también debe aparecer el caudal $q$.",
  "Over dosadením: pre $y = {@0}x$ je $xy' = {@1}x$, no pravá strana ${@2}y$ je iná.": "Compruébalo sustituyendo: para $y = {@0}x$ es $xy' = {@1}x$, pero el lado derecho ${@2}y$ es distinto.",
  "Overenie: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrovaním $M$ podľa $x$: $F = {@1} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde {@2}. Preto $F(x, y) = {@3}$ a $C = F({@4}, {@5}) = {@6}$.": "Comprobación: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrando $M$ respecto a $x$: $F = {@1} + \\varphi(y)$. De la condición $F_y = N$ resulta {@2}. Por eso $F(x, y) = {@3}$ y $C = F({@4}, {@5}) = {@6}$.",
  "Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.": "Busca la solución particular en la forma $A\\mathrm{e}^{cx}$ (sustituye en la ecuación); la constante $B$ determínala con la condición inicial.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.": "Buscamos la solución particular de la ecuación ${@0} = {@1}$ en la forma $y_p = Ax + B$. Determina $A$ y $B$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.": "Buscamos la solución particular de la ecuación ${@0} = {@1}$ en la forma $y_p = Ax^{2} + Bx + C$. Determina $A$, $B$ y $C$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = A{@2} + B{@3}$. Urči $A$ a $B$.": "Buscamos la solución particular de la ecuación ${@0} = {@1}$ en la forma $y_p = A{@2} + B{@3}$. Determina $A$ y $B$.",
  "Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.": "El periodo de las oscilaciones no amortiguadas es $T = 2\\pi\\sqrt{m/k}$.",
  "Po dosadení $x_p$ dostaneš $KA\\cos {@0} = {@1}\\cos {@2}$. Urči $K$.": "Tras sustituir $x_p$ obtienes $KA\\cos {@0} = {@1}\\cos {@2}$. Determina $K$.",
  "Po dosadení $y_p = Ax{@0}$ zostane $A(2r + p){@1}$. Vypočítaj $2r + p$.": "Tras sustituir $y_p = Ax{@0}$ queda $A(2r + p){@1}$. Calcula $2r + p$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c + a) = b$: derivácia dá $c$ a člen ${@1}$ pridá $+a$, nie $-a$.": "Tras sustituir $y_p = A{@0}$ obtienes $A(c + a) = b$: la derivada da $c$ y el término ${@1}$ añade $+a$, no $-a$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c^{2} + pc + q){@1}$. Vypočítaj hodnotu zátvorky.": "Tras sustituir $y_p = A{@0}$ obtienes $A(c^{2} + pc + q){@1}$. Calcula el valor del paréntesis.",
  "Po dosadení $z' = (1-n)y^{-n}y'$ treba celú rovnicu vynásobiť číslom $1 - n$, teda aj koeficienty $p$ a $q$.": "Tras sustituir $z' = (1-n)y^{-n}y'$ hay que multiplicar toda la ecuación por $1 - n$, es decir, también los coeficientes $p$ y $q$.",
  "Po dosadení má rovnica pre koeficienty pri ${@0}$ tvar $uA{@1} = {@2}$. Urči $u$.": "Tras sustituir, la ecuación para los coeficientes de ${@0}$ tiene la forma $uA{@1} = {@2}$. Determina $u$.",
  "Po integrovaní máš $-\\frac{1}{u} = \\ln x + C$. Urči $C$ (zlomok alebo celé číslo).": "Tras integrar tienes $-\\frac{1}{u} = \\ln x + C$. Determina $C$ (fracción o número entero).",
  "Po integrovaní máš $\\frac{u^{2}}{2}$; pri vyjadrení $u^{2}$ musíš dvoma vynásobiť obe strany, teda aj člen s logaritmom.": "Tras integrar tienes $\\frac{u^{2}}{2}$; al despejar $u^{2}$ debes multiplicar por dos ambos lados, es decir, también el término con el logaritmo.",
  "Po integrácii a vynásobení dvoma dostaneš $y^{2} = {@0} + K$. Urči konštantu $K$ zo začiatočnej podmienky.": "Tras integrar y multiplicar por dos obtienes $y^{2} = {@0} + K$. Determina la constante $K$ a partir de la condición inicial.",
  "Po integrácii máš $-\\frac{1}{y} = {@0} + C$. Urči $C$ zo začiatočnej podmienky (zlomok alebo celé číslo).": "Tras integrar tienes $-\\frac{1}{y} = {@0} + C$. Determina $C$ a partir de la condición inicial (fracción o número entero).",
  "Po substitúcii $y = ux$ a integrovaní vyjadri $u^{2}$ a vypočítaj $u({@0})^{2}$. {@1}": "Tras la sustitución $y = ux$ e integrar, despeja $u^{2}$ y calcula $u({@0})^{2}$. {@1}",
  "Po substitúcii $y = ux$ dostaneš $u = {@0} + C$. Urči $C$ zo začiatočnej podmienky.": "Tras la sustitución $y = ux$ obtienes $u = {@0} + C$. Determina $C$ a partir de la condición inicial.",
  "Po transformácii a vyjadrení $Y(s)$ rozlož zlomok ${@0}$ na parciálne zlomky. Aký je koeficient pri $\\frac{1}{{@1}}$?": "Tras transformar y despejar $Y(s)$, descompón la fracción ${@0}$ en fracciones simples. ¿Cuál es el coeficiente de $\\frac{1}{{@1}}$?",
  "Po vydelení $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Integračný faktor je $\\mathrm{e}^{{@2}\\ln x} = {@3}$, rovnica prejde na $({@4}y)' = {@5}$, teda ${@6}y = {@7} + C$ a $y = {@8} + \\frac{C}{{@9}}$. Z podmienky $1 + C = {@10}$, $C = {@11}$. Potom $y(2) = {@12}{@13}$.": "Dividiendo entre $x$: $y' + \\frac{{@0}}{x}y = {@1}$. El factor integrante es $\\mathrm{e}^{{@2}\\ln x} = {@3}$, la ecuación pasa a $({@4}y)' = {@5}$, por tanto ${@6}y = {@7} + C$ e $y = {@8} + \\frac{C}{{@9}}$. De la condición, $1 + C = {@10}$, $C = {@11}$. Entonces $y(2) = {@12}{@13}$.",
  "Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = {@0}$. Odtiaľ $u = \\frac{{@1}}{1{@2}}$ a $y = \\frac{{@3}}{1{@4}}$, takže $y({@5}) \\approx {@6}$.": "Dividiendo entre $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Sustitución $y = ux$: $u + xu' = u^{2} + u$, por tanto $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (la solución $u = 0$ no cumple la condición). Integramos: $-\\frac{1}{u} = \\ln x + C$; de la condición, $C = {@0}$. De aquí $u = \\frac{{@1}}{1{@2}}$ e $y = \\frac{{@3}}{1{@4}}$, así que $y({@5}) \\approx {@6}$.",
  "Po vydelení $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, teda $u\\,du = {@2}\\frac{dx}{x}$ a $\\frac{u^{2}}{2} = {@3} + C$. Z podmienky $u(1) = {@4}$ máme $u^{2} = {@5} + {@6}$, a keďže $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Potom $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.": "Dividiendo entre $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Sustitución $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, por tanto $u\\,du = {@2}\\frac{dx}{x}$ y $\\frac{u^{2}}{2} = {@3} + C$. De la condición $u(1) = {@4}$ tenemos $u^{2} = {@5} + {@6}$ y, como $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Entonces $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.",
  "Po vydelení číslom ${@0}$: $x'' + {@1}x' + {@2}x = 0$.": "Dividiendo entre ${@0}$: $x'' + {@1}x' + {@2}x = 0$.",
  "Podiel ${@0}\\,\\%$ patrí výrazu $1 - \\mathrm{e}^{-t/\\tau}$, nie samotnej exponenciále.": "El porcentaje ${@0}\\,\\%$ corresponde a la expresión $1 - \\mathrm{e}^{-t/\\tau}$, no a la exponencial sola.",
  "Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = {@0}$ a $N_x = {@1}a{@2}{@3}$. Porovnaním koeficientov pri {@4} dostaneme ${@5}a = {@6}${@7}. Kmeňová funkcia je potom $F = {@8}$.": "La condición de exactitud es $M_y = N_x$. Tenemos $M_y = {@0}$ y $N_x = {@1}a{@2}{@3}$. Comparando los coeficientes en {@4} obtenemos ${@5}a = {@6}${@7}. La función potencial es entonces $F = {@8}$.",
  "Podľa Liouvilleovho vzorca je $W(x) = W(0)\\mathrm{e}^{-px}$; skontroluj znamienko exponentu.": "Según la fórmula de Liouville, $W(x) = W(0)\\mathrm{e}^{-px}$; comprueba el signo del exponente.",
  "Podľa Newtonovho zákona $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, teda $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.": "Según la ley de enfriamiento de Newton, $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. De la medición, $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, por tanto $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.",
  "Podľa Vietových vzťahov je súčet koreňov $-p$.": "Según las fórmulas de Vieta, la suma de las raíces es $-p$.",
  "Podľa slovníka a linearity $F(s) = {@0}$ pre $s \\gt {@1}$. Dosadením $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.": "Según la tabla y la linealidad, $F(s) = {@0}$ para $s \\gt {@1}$. Sustituyendo $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.",
  "Pohyb telesa sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$ (hmotnosť ${@3}\\,\\mathrm{kg}$, tlmenie ${@4}\\,\\mathrm{kg/s}$, tuhosť ${@5}\\,\\mathrm{N/m}$). O aký typ pohybu ide?": "El movimiento de un cuerpo se rige por la ecuación ${@0}x'' + {@1}x' + {@2}x = 0$ (masa ${@3}\\,\\mathrm{kg}$, amortiguamiento ${@4}\\,\\mathrm{kg/s}$, rigidez ${@5}\\,\\mathrm{N/m}$). ¿De qué tipo de movimiento se trata?",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Vzorka obsahuje na začiatku ${@2}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za ${@3}$ {@4}? {@5}": "El periodo de semidesintegración de un isótopo radiactivo es ${@0}$ {@1}. Al principio, la muestra contiene ${@2}\\,\\mathrm{g}$ del isótopo. ¿Cuántos gramos del isótopo quedarán al cabo de ${@3}$ {@4}? {@5}",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Za koľko {@2} klesne jeho množstvo na ${@3}\\,\\%$ pôvodného množstva? {@4}": "El periodo de semidesintegración de un isótopo radiactivo es ${@0}$ {@1}. ¿En cuánto tiempo (en {@2}) baja su cantidad al ${@3}\\,\\%$ de la cantidad inicial? {@4}",
  "Populácia sa riadi logistickou rovnicou $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ v rokoch), na začiatku má ${@2}$ jedincov.": "Una población se rige por la ecuación logística $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ en años) y al principio tiene ${@2}$ individuos.",
  "Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.": "Compara $c^{2}$ con $4mk$, o el coeficiente de amortiguamiento $\\delta = \\frac{c}{2m}$ con la frecuencia propia $\\omega_0 = \\sqrt{k/m}$.",
  "Porovnaj absolútne členy a urči $B$.": "Compara los términos independientes y determina $B$.",
  "Porovnaj absolútne členy a urči $C$.": "Compara los términos independientes y determina $C$.",
  "Porovnaj koeficienty pri $x$ a urči $A$.": "Compara los coeficientes de $x$ y determina $A$.",
  "Porovnaj koeficienty pri $x$ a urči $B$.": "Compara los coeficientes de $x$ y determina $B$.",
  "Porovnaj koeficienty pri $x^{2}$ a urči $A$.": "Compara los coeficientes de $x^{2}$ y determina $A$.",
  "Použi $W = y_1y_2' - y_1'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.": "Usa $W = y_1y_2' - y_1'y_2$. Puedes comprobar el exponente con la fórmula de Liouville $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.": "Usa $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.",
  "Použi $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ a $\\mathcal{L}\\{y'\\} = sY - y(0)$ a vyjadri $Y$.": "Usa $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ y $\\mathcal{L}\\{y'\\} = sY - y(0)$ y despeja $Y$.",
  "Použi prvý riadok sústavy $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.": "Usa la primera fila del sistema $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.",
  "Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.": "Usa la fórmula $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, donde $A = \\frac{K - P_0}{P_0}$.",
  "Pozor na znamienko $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, po prenesení na pravú stranu je $+y'(0)$.": "Cuidado con el signo de $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$; al pasarlo al lado derecho queda $+y'(0)$.",
  "Pozor na znamienko: $\\int u^{-2}\\,du = -\\frac{1}{u}$.": "Cuidado con el signo: $\\int u^{-2}\\,du = -\\frac{1}{u}$.",
  "Pozor na znamienko: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nie $\\frac{1}{y}$.": "Cuidado con el signo: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, no $\\frac{1}{y}$.",
  "Pravá strana je homogénna stupňa 2, nie 0: po dosadení $tx$, $ty$ sa vynásobí $t^{2}$. Tvar $\\varphi\\left(\\frac{y}{x}\\right)$ vyžaduje stupeň 0.": "El lado derecho es homogéneo de grado 2, no 0: al sustituir $tx$, $ty$ se multiplica por $t^{2}$. La forma $\\varphi\\left(\\frac{y}{x}\\right)$ exige grado 0.",
  "Pravá strana obsahuje len konštantu (polynóm stupňa 0), polynóm $Ax + B$ tu netreba.": "El lado derecho solo contiene una constante (polinomio de grado 0); aquí no hace falta el polinomio $Ax + B$.",
  "Pre $x_p = Bt{@0} {@1}$ je $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (členy s $t$ sa odčítajú). Porovnaním ${@7}{@8}B = {@9}$, teda $B = {@10}$. Amplitúda $|B|t$ rastie lineárne s časom.": "Para $x_p = Bt{@0} {@1}$ es $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (los términos con $t$ se cancelan). Comparando, ${@7}{@8}B = {@9}$, por tanto $B = {@10}$. La amplitud $|B|t$ crece linealmente con el tiempo.",
  "Pre $y = \\cos {@0}x$ je $y'' = -{@1}\\cos {@2}x$, a teda $y'' + {@3}y = 0$. Pri $\\cos {@4}x$ by vyšlo $y'' = -{@5}\\cos {@6}x$, exponenciála má kladnú druhú deriváciu.": "Para $y = \\cos {@0}x$ es $y'' = -{@1}\\cos {@2}x$, y por tanto $y'' + {@3}y = 0$. Con $\\cos {@4}x$ saldría $y'' = -{@5}\\cos {@6}x$; la exponencial tiene derivada segunda positiva.",
  "Pre $y = \\mathrm{e}^{-{@0}x}$ je $y'' = {@1}\\mathrm{e}^{-{@2}x}$, a teda $y'' - {@3}y = 0$. Pre $\\sin {@4}x$ vyjde $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.": "Para $y = \\mathrm{e}^{-{@0}x}$ es $y'' = {@1}\\mathrm{e}^{-{@2}x}$, y por tanto $y'' - {@3}y = 0$. Para $\\sin {@4}x$ sale $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.",
  "Pre $y = x^{{@0}}$ je $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pre $y = {@6}x$ by vyšlo $xy' = {@7}x$, ale ${@8}y = {@9}x$.": "Para $y = x^{{@0}}$ es $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Para $y = {@6}x$ saldría $xy' = {@7}x$, pero ${@8}y = {@9}x$.",
  "Pre $y' + py = qy^{n}$ je $z = y^{1-n}$ a $z' + (1-n)pz = (1-n)q$.": "Para $y' + py = qy^{n}$ es $z = y^{1-n}$ y $z' + (1-n)pz = (1-n)q$.",
  "Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = {@0}\\,dx$, teda $\\ln|y| = {@1} + c$ a $y = C\\mathrm{e}^{{@2}}$ (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = {@3}$, takže $y = {@4}$ a $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.": "Para $y\\neq 0$ separamos variables: $\\frac{dy}{y} = {@0}\\,dx$, por tanto $\\ln|y| = {@1} + c$ e $y = C\\mathrm{e}^{{@2}}$ (la solución $y = 0$ está incluida para $C = 0$). De la condición, $C = {@3}$, así que $y = {@4}$ e $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.",
  "Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.": "Para $y_p = A\\mathrm{e}^{cx}$, al sustituir sale $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.",
  "Pre akú hodnotu parametra $a$ je rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ exaktná?": "¿Para qué valor del parámetro $a$ es exacta la ecuación $({@0})\\,dx + ({@1})\\,dy = 0$?",
  "Pre dva rôzne reálne korene": "Para dos raíces reales distintas",
  "Pre dvojnásobný koreň": "Para una raíz doble",
  "Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$": "Para raíces complejas conjugadas $\\alpha\\pm\\beta\\mathrm{i}$",
  "Pre polynóm 1. stupňa treba úplný polynóm $Ax + B$, samotné $Ax$ nestačí.": "Para un polinomio de grado 1 hace falta el polinomio completo $Ax + B$; $Ax$ solo no basta.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ a urči $\\delta$.": "Escribe la ecuación en la forma $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ y determina $\\delta$.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Escribe la ecuación en la forma $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; entonces $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Pri $x = 0$ je $C\\cdot\\mathrm{e}^{0} = C$, ale v riešení je ešte konštantný člen ${@0}$, ktorý musíš od $y_0$ odčítať.": "En $x = 0$ es $C\\cdot\\mathrm{e}^{0} = C$, pero en la solución hay además el término constante ${@0}$, que debes restar de $y_0$.",
  "Pri $x = 0$ sú obe exponenciály rovné 1, takže $y(0) = A + B$. Hodnotu $A$ treba od $y(0)$ odčítať.": "En $x = 0$ las dos exponenciales valen 1, así que $y(0) = A + B$. Hay que restar el valor de $A$ de $y(0)$.",
  "Pri $x = 1$ je $u(1) = y(1)$.": "En $x = 1$ es $u(1) = y(1)$.",
  "Pri $y = \\cos \\omega x$ je $y'' = -\\omega^{2}y$; koeficient ${@0}$ v rovnici je $\\omega^{2}$, nie $\\omega$.": "Para $y = \\cos \\omega x$ es $y'' = -\\omega^{2}y$; el coeficiente ${@0}$ de la ecuación es $\\omega^{2}$, no $\\omega$.",
  "Pri $y = \\mathrm{e}^{rx}$ je $y'' = r^{2}y$; koeficient ${@0}$ v rovnici je $r^{2}$, nie $r$.": "Para $y = \\mathrm{e}^{rx}$ es $y'' = r^{2}y$; el coeficiente ${@0}$ de la ecuación es $r^{2}$, no $r$.",
  "Pri absolútnom člene si zabudol na $y_p'' = 2A$: aj druhá derivácia prispieva konštantou.": "En el término independiente olvidaste $y_p'' = 2A$: la derivada segunda también aporta una constante.",
  "Pri derivovaní $x\\mathrm{e}^{rx}$ podľa súčinu vznikne v $y_p''$ člen $2rA\\mathrm{e}^{rx}$, nie len $rA\\mathrm{e}^{rx}$.": "Al derivar $x\\mathrm{e}^{rx}$ por la regla del producto aparece en $y_p''$ el término $2rA\\mathrm{e}^{rx}$, no solo $rA\\mathrm{e}^{rx}$.",
  "Pri derivovaní ${@0}$ podľa $x$ vznikne koeficient ${@1}a$; rovnosť koeficientov treba ešte vydeliť číslom ${@2}$.": "Al derivar ${@0}$ respecto a $x$ aparece el coeficiente ${@1}a$; la igualdad de coeficientes todavía hay que dividirla entre ${@2}$.",
  "Pri derivovaní súčinu ${@0}\\cdot(\\dots)$ vznikne aj člen ${@1}C_1$ z derivácie exponenciály.": "Al derivar el producto ${@0}\\cdot(\\dots)$ aparece también el término ${@1}C_1$, que procede de derivar la exponencial.",
  "Pri dvojnásobnom derivovaní súčinu $t{@0} {@1}$ vzniknú dva rovnaké členy bez $t$, spolu $2\\omega_0$-násobok.": "Al derivar dos veces el producto $t{@0} {@1}$ aparecen dos términos iguales sin $t$, en total $2\\omega_0$ veces.",
  "Pri dvojnásobnom koreni máš len jednu exponenciálu; druhé nezávislé riešenie dostaneš vynásobením $x$.": "Con una raíz doble solo tienes una exponencial; la segunda solución independiente se obtiene multiplicando por $x$.",
  "Pri dvojnásobnom koreni sa exponenciála násobí $x$, nie $x^{2}$ (to by bolo pri trojnásobnom koreni).": "Con una raíz doble, la exponencial se multiplica por $x$, no por $x^{2}$ (eso sería con una raíz triple).",
  "Pri integrovaní ${@0}$ si zabudol deliť exponentom: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.": "Al integrar ${@0}$ olvidaste dividir entre el exponente: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.",
  "Pri komplexných koreňoch nie sú riešeniami reálne exponenciály; použi tvar $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.": "Con raíces complejas, las soluciones no son exponenciales reales; usa la forma $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.",
  "Pri koreňoch $\\alpha\\pm\\beta\\mathrm{i}$ je v exponente reálna časť $\\alpha$ a v goniometrických funkciách imaginárna časť $\\beta$; zamenil si ich.": "Con las raíces $\\alpha\\pm\\beta\\mathrm{i}$, en el exponente va la parte real $\\alpha$ y en las funciones trigonométricas la parte imaginaria $\\beta$; las has intercambiado.",
  "Pri porovnaní absolútnych členov si zabudol na člen ${@0} = {@1}$, ktorý pochádza z derivácie.": "Al comparar los términos independientes olvidaste el término ${@0} = {@1}$, que procede de la derivada.",
  "Pri prenášaní konštantného člena na druhú stranu rovnice si mu nezmenil znamienko.": "Al pasar el término constante al otro lado de la ecuación no le cambiaste el signo.",
  "Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.": "En resonancia con una raíz simple $r$, al sustituir $y_p = Ax\\mathrm{e}^{rx}$ sale la expresión $A(2r + p)\\,\\mathrm{e}^{rx}$.",
  "Pri riešení $2^{-t/T} = p$ treba logaritmus podieliť číslom $\\ln 2$ (alebo použiť logaritmus so základom 2).": "Al resolver $2^{-t/T} = p$ hay que dividir el logaritmo entre $\\ln 2$ (o usar el logaritmo en base 2).",
  "Pri vyjadrení $C$ zo zlomku $\\frac{C}{x_0}$ treba násobiť číslom $x_0$, nie deliť.": "Al despejar $C$ de la fracción $\\frac{C}{x_0}$ hay que multiplicar por $x_0$, no dividir.",
  "Pri zakrývacej metóde dosadíš $s = a$ do zvyšku zlomku; v menovateli potom zostane $a - b$, nie $b - a$.": "En el método del recubrimiento sustituyes $s = a$ en el resto de la fracción; en el denominador queda entonces $a - b$, no $b - a$.",
  "Primitívna funkcia k $ax^{n}$ je $\\frac{a}{n+1}x^{n+1}$.": "La primitiva de $ax^{n}$ es $\\frac{a}{n+1}x^{n+1}$.",
  "Riešenie Cauchyho úlohy $y'{@0} = {@1}$, $y(0) = {@2}$ má tvar $y = A{@3} + B{@4}$. Urči $A$ a $B$.": "La solución del problema de Cauchy $y'{@0} = {@1}$, $y(0) = {@2}$ tiene la forma $y = A{@3} + B{@4}$. Determina $A$ y $B$.",
  "Riešenie Cauchyho úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ zapíšeme v tvare ${@3}$. Urči $C_1$ a $C_2$.": "La solución del problema de Cauchy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ se escribe en la forma ${@3}$. Determina $C_1$ y $C_2$.",
  "Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.": "La solución es $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; determina $\\mathrm{e}^{-k}$ a partir de la segunda medición.",
  "Riešenie je súčet $y_h + y_p$: konštantné partikulárne riešenie sa exponenciálou nenásobí.": "La solución es la suma $y_h + y_p$: la solución particular constante no se multiplica por la exponencial.",
  "Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.": "La solución es la suma de $y_h$ (exponencial con el coeficiente de $y$ cambiado de signo) y la solución particular constante.",
  "Riešenie má tvar $\\mathrm{e}^{\\lambda x}$, kde $\\lambda$ je koreň charakteristickej rovnice; skontroluj znamienka koreňov.": "La solución tiene la forma $\\mathrm{e}^{\\lambda x}$, donde $\\lambda$ es raíz de la ecuación característica; comprueba los signos de las raíces.",
  "Riešenie má tvar $y = C\\mathrm{e}^{G(x)}$ s $G(0) = 0$. Urči $C$ zo začiatočnej podmienky.": "La solución tiene la forma $y = C\\mathrm{e}^{G(x)}$ con $G(0) = 0$. Determina $C$ a partir de la condición inicial.",
  "Riešenie rovnice y″ + py′ + qy = 0": "Solución de la ecuación y″ + py′ + qy = 0",
  "Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.": "Resuelve la ecuación $2^{-t/T} = p$ tomando logaritmos: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.",
  "Rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$. Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[{@2}; {@3}]$.": "La ecuación $({@0})\\,dx + ({@1})\\,dy = 0$ es exacta. Escribimos su integral general en la forma $F(x, y) = C$, donde $F(0, 0) = 0$. Determina $C$ para la curva integral que pasa por el punto $[{@2}; {@3}]$.",
  "Rovnica $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.": "La ecuación $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) no es exacta. Tiene un factor integrante de la forma $\\mu = x^{k}$. Determina $k$.",
  "Rovnica $x'' + {@0}x = {@1}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt{@2} {@3}$. Urči $B$.": "La ecuación $x'' + {@0}x = {@1}$ describe una resonancia. Su solución particular tiene la forma $x_p = Bt{@2} {@3}$. Determina $B$.",
  "Rovnica $y' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.": "La ecuación $y' = f(x, y)$ dice que la pendiente de la tangente en el punto $[x; y]$ es $f(x, y)$. Sustituye las coordenadas del punto.",
  "Rovnica $y' = {@0}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$ sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen, po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.": "La ecuación $y' = {@0}$ tiene en el numerador y en el denominador funciones homogéneas del mismo grado, por eso al sustituir $x \\to tx$, $y \\to ty$ el $t$ se simplifica y el lado derecho depende solo de $\\frac{y}{x}$. Las demás ecuaciones contienen términos de grados distintos o un término independiente, así que al sustituir $tx$ y $ty$ el $t$ no se simplifica.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = Ax{@2}$. Urči $A$.": "La ecuación ${@0} = {@1}$ tiene una solución particular de la forma $y_p = Ax{@2}$. Determina $A$.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = A{@2}$. Urči $A$.": "La ecuación ${@0} = {@1}$ tiene una solución particular de la forma $y_p = A{@2}$. Determina $A$.",
  "Rovnica ${@0}x'' + {@1}x = 0$ má $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.": "La ecuación ${@0}x'' + {@1}x = 0$ tiene $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Periodo $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.",
  "Rovnica je homogénna: $y' = \\frac{y}{x}{@0}$. Substitúcia $y = ux$ dáva $u + xu' = u{@1}$, teda $u' = {@2}\\frac{{@3}}{x}$ a $u = {@4} + C$. Z podmienky $u(1) = {@5}$ je $C = {@6}$, preto $y = x({@7}{@8})$ a $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.": "La ecuación es homogénea: $y' = \\frac{y}{x}{@0}$. La sustitución $y = ux$ da $u + xu' = u{@1}$, por tanto $u' = {@2}\\frac{{@3}}{x}$ y $u = {@4} + C$. De la condición $u(1) = {@5}$ es $C = {@6}$, por eso $y = x({@7}{@8})$ e $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.",
  "Rovnica má tvar $y' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.": "La ecuación tiene la forma $y' = g(x)\\,y$. Separa variables $\\frac{dy}{y} = g(x)\\,dx$ e integra; obtienes $y = C\\mathrm{e}^{G(x)}$.",
  "Rozdiel $M_y - N_x$ treba ešte vydeliť funkciou $N = {@0}$, nie len premennou $x$.": "La diferencia $M_y - N_x$ todavía hay que dividirla entre la función $N = {@0}$, no solo entre la variable $x$.",
  "Rozhoduje znamienko diskriminantu $c^{2} - 4mk$. Prepočítaj ho: porovnávaš druhú mocninu tlmenia so štvornásobkom súčinu $mk$.": "Decide el signo del discriminante $c^{2} - 4mk$. Vuelve a calcularlo: comparas el cuadrado del amortiguamiento con el cuádruple del producto $mk$.",
  "Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, ide o {@3}. (Ekvivalentne $\\delta = \\frac{c}{2m} = {@4}$ a $\\omega_0 = \\sqrt{k/m} = {@5}$.)": "Decide el signo del discriminante de la ecuación característica, es decir, la comparación de $c^{2}$ y $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, se trata de {@3}. (De forma equivalente, $\\delta = \\frac{c}{2m} = {@4}$ y $\\omega_0 = \\sqrt{k/m} = {@5}$.)",
  "Rozlož $F$ na parciálne zlomky $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ a urči $A$.": "Descompón $F$ en las fracciones simples $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ y determina $A$.",
  "Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.": "Factoriza el denominador como $(s - a)(s - b)$ y descompón $F$ en las fracciones simples $\\frac{A}{s-a} + \\frac{B}{s-b}$; después, $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.",
  "Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.": "La desintegración se rige por la ecuación $m' = -km$, es decir, $m(t) = m_0\\mathrm{e}^{-kt}$ con $k = \\frac{\\ln 2}{T}$, o sea, $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.",
  "Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená. Najvyššia derivácia v rovnici je {@0}, rovnica je teda <strong>{@1}. rádu</strong>.": "El orden lo determina la derivada más alta que aparece en la ecuación, no la potencia a la que está elevada la derivada. La derivada más alta de la ecuación es la {@0}, así que la ecuación es <strong>de orden {@1}</strong>.",
  "Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou": "Esquema de resolución de un problema de valor inicial con la transformada de Laplace",
  "Sedlo vzniká len pri zápornom determinante (reálne vlastné čísla s opačnými znamienkami). Prepočítaj $\\det A$.": "Una silla aparece solo con determinante negativo (valores propios reales de signos opuestos). Vuelve a calcular $\\det A$.",
  "Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Integrálna krivka prechádzajúca bodom $[{@4}; {@5}]$ má v ňom dotyčnicu so smernicou ${@6}$.": "La pendiente del campo en el punto $[x; y]$ es el valor del lado derecho $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. La curva integral que pasa por el punto $[{@4}; {@5}]$ tiene en él una tangente de pendiente ${@6}$.",
  "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)": "Campo de direcciones de la ecuación homogénea y' = (x + y)/(x − y)",
  "Smerové pole rovnice y' = x − y s integrálnou krivkou": "Campo de direcciones de la ecuación y' = x − y con una curva integral",
  "Stabilitu určuje znamienko stopy $\\mathrm{tr}\\,A$ (súčtu, resp. dvojnásobku reálnej časti vlastných čísel). Over ho.": "La estabilidad la determina el signo de la traza $\\mathrm{tr}\\,A$ (la suma, o el doble de la parte real, de los valores propios). Compruébalo.",
  "Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, teda $-\\frac{1}{y} = {@1} + C$. Z podmienky $C = {@2}$. Odtiaľ $y = \\frac{{@3}}{1{@4}}$, čo je na intervale $\\langle 0; {@5}\\rangle$ definované (menovateľ je tam kladný). Dosadením $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.": "La solución estacionaria $y = 0$ no cumple la condición. Para $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, por tanto $-\\frac{1}{y} = {@1} + C$. De la condición, $C = {@2}$. De aquí $y = \\frac{{@3}}{1{@4}}$, que está definida en el intervalo $\\langle 0; {@5}\\rangle$ (allí el denominador es positivo). Sustituyendo, $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.",
  "Stred nastáva len pri nulovej stope; inak sa trajektórie k bodu približujú alebo sa od neho vzďaľujú.": "Un centro aparece solo con traza nula; en otro caso, las trayectorias se acercan al punto o se alejan de él.",
  "Substitúcia je $z = y^{1-n}$, nie $y^{n-1}$: exponent má odstrániť mocninu $y^{n}$ po vydelení rovnice.": "La sustitución es $z = y^{1-n}$, no $y^{n-1}$: el exponente debe eliminar la potencia $y^{n}$ tras dividir la ecuación.",
  "Sústava {@0} má začiatočnú podmienku $x(0) = {@1}$, $y(0) = {@2}$. Riešenie zapíšeme v tvare $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$ a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.": "El sistema {@0} tiene la condición inicial $x(0) = {@1}$, $y(0) = {@2}$. Escribimos la solución en la forma $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, donde $\\lambda_1 \\gt \\lambda_2$ y los vectores propios tienen primera componente $1$. Determina $C_1$ y $C_2$.",
  "Sčítaj: $F({@0}) = ?$": "Suma: $F({@0}) = ?$",
  "Teleso s hmotnosťou ${@0}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou ${@1}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? {@2}": "Un cuerpo de masa ${@0}\\,\\mathrm{kg}$ oscila sin amortiguamiento en un muelle de rigidez ${@1}\\,\\mathrm{N/m}$. ¿Cuál es el periodo de las oscilaciones en segundos? {@2}",
  "Teleso s teplotou ${@0}{@1}$ položíme do miestnosti s teplotou ${@2}{@3}$. Po ${@4}$ minútach má teplotu ${@5}{@6}$.": "Colocamos un cuerpo a temperatura ${@0}{@1}$ en una habitación a temperatura ${@2}{@3}$. Al cabo de ${@4}$ minutos tiene una temperatura de ${@5}{@6}$.",
  "Tlmený harmonický oscilátor": "Oscilador armónico amortiguado",
  "Tlmený oscilátor sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. {@3}": "Un oscilador amortiguado se rige por la ecuación ${@0}x'' + {@1}x' + {@2}x = 0$. Determina la frecuencia angular $\\omega_d$ de sus oscilaciones amortiguadas. {@3}",
  "Toto je exponent (mocnina), nie rád derivácie. Rád určuje najvyššia derivácia, ktorá sa v rovnici vyskytuje.": "Esto es un exponente (una potencia), no el orden de la derivada. El orden lo determina la derivada más alta que aparece en la ecuación.",
  "Toto je vlastná frekvencia netlmeného oscilátora $\\omega_0$. Tlmenie frekvenciu znižuje: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Esta es la frecuencia propia del oscilador no amortiguado $\\omega_0$. El amortiguamiento reduce la frecuencia: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Toto je vybíjanie kondenzátora. Pri nabíjaní napätie rastie od nuly k $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Esto es la descarga del condensador. Al cargarlo, la tensión crece desde cero hacia $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Transformuj rovnicu ($\\mathcal{L}\\{y'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.": "Transforma la ecuación ($\\mathcal{L}\\{y'\\} = sY - y(0)$), despeja $Y(s)$ y descomponla en fracciones simples.",
  "Transformáciou: $sY{@0}{@1} = {@2}$, teda $Y = {@3}{@4}$. Rozklad: ${@5} = {@6}{@7}$. Spätnou transformáciou $y = ({@8}{@9}){@10}{@11}$, teda $A = {@12}$, $B = {@13}$.": "Transformando: $sY{@0}{@1} = {@2}$, por tanto $Y = {@3}{@4}$. Descomposición: ${@5} = {@6}{@7}$. Con la transformada inversa, $y = ({@8}{@9}){@10}{@11}$, por tanto $A = {@12}$, $B = {@13}$.",
  "Tu $n = {@0}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - {@1} = {@2}$. Vydelením rovnice $y^{{@3}}$ dostaneme $y^{-n}y'{@4} = {@5}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = {@6}$ máme $z'{@7} = {@8}$. Teda $P = (1-n)p = {@9}$ a $Q = (1-n)q = {@10}$.": "Aquí $n = {@0}$; la sustitución es $z = y^{1-n}$, por tanto $k = 1 - {@1} = {@2}$. Dividiendo la ecuación entre $y^{{@3}}$ obtenemos $y^{-n}y'{@4} = {@5}$. Como $z' = (1-n)y^{-n}y'$, tras multiplicar la ecuación por $1 - n = {@6}$ tenemos $z'{@7} = {@8}$. Por tanto, $P = (1-n)p = {@9}$ y $Q = (1-n)q = {@10}$.",
  "Tvar $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ patrí len dvojnásobnému koreňu ($D = 0$). Aký je tu diskriminant?": "La forma $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ corresponde solo a una raíz doble ($D = 0$). ¿Cuál es aquí el discriminante?",
  "Urči $A$ (zlomok alebo celé číslo).": "Determina $A$ (fracción o número entero).",
  "Urči $A$.": "Determina $A$.",
  "Urči $C = F({@0}, {@1})$.": "Determina $C = F({@0}, {@1})$.",
  "Urči $C_1$ v riešení $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.": "Determina $C_1$ en la solución $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.",
  "Urči $C_2$ (zlomok alebo celé číslo).": "Determina $C_2$ (fracción o número entero).",
  "Urči $C_2$.": "Determina $C_2$.",
  "Urči $\\omega_0^{2}$.": "Determina $\\omega_0^{2}$.",
  "Urči $\\omega_d$. {@0}": "Determina $\\omega_d$. {@0}",
  "Urči $\\varphi(y)$ s $\\varphi(0) = 0$ z podmienky $F_y = N$ a vypočítaj $\\varphi({@0})$.": "Determina $\\varphi(y)$ con $\\varphi(0) = 0$ a partir de la condición $F_y = N$ y calcula $\\varphi({@0})$.",
  "Urči $y({@0})$ (znamienko podľa začiatočnej podmienky).": "Determina $y({@0})$ (el signo según la condición inicial).",
  "Urči amplitúdu kmitov. {@0}": "Determina la amplitud de las oscilaciones. {@0}",
  "Urči exponent $k$ v substitúcii $z = y^{k}$ (zlomok v tvare $a/b$).": "Determina el exponente $k$ de la sustitución $z = y^{k}$ (fracción en la forma $a/b$).",
  "Urči exponent $m$.": "Determina el exponente $m$.",
  "Urči hodnotu exponentu $G({@0})$, kde $G(x) = \\int_0^x g(t)\\,dt$. {@1}": "Determina el valor del exponente $G({@0})$, donde $G(x) = \\int_0^x g(t)\\,dt$. {@1}",
  "Urči koeficient $P$ pri $z$.": "Determina el coeficiente $P$ de $z$.",
  "Urči konštantu $A$ v riešení $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.": "Determina la constante $A$ en la solución $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.",
  "Urči oba korene (oddelené bodkočiarkou).": "Determina las dos raíces (separadas por punto y coma).",
  "Urči pravú stranu $Q$.": "Determina el lado derecho $Q$.",
  "Urči rád diferenciálnej rovnice ${@0}$.": "Determina el orden de la ecuación diferencial ${@0}$.",
  "Urči typ rovnovážneho bodu $[0; 0]$ sústavy {@0}.": "Determina el tipo del punto de equilibrio $[0; 0]$ del sistema {@0}.",
  "Urči väčšie vlastné číslo $\\lambda_1$.": "Determina el mayor valor propio $\\lambda_1$.",
  "V akom tvare treba hľadať partikulárne riešenie rovnice ${@0} = {@1}$ metódou neurčitých koeficientov?": "¿En qué forma hay que buscar la solución particular de la ecuación ${@0} = {@1}$ por el método de coeficientes indeterminados?",
  "V čitateli sú členy rôznych stupňov ($x^{2}$ je stupňa 2, $y$ stupňa 1), takže sa $t$ po dosadení nevykráti.": "En el numerador hay términos de grados distintos ($x^{2}$ es de grado 2, $y$ de grado 1), así que al sustituir el $t$ no se simplifica.",
  "Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.": "Los valores propios de una matriz $2\\times 2$ son las raíces de la ecuación $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.",
  "Vlastné čísla sú komplexné s reálnou časťou ${@0}$: {@1}.": "Los valores propios son complejos con parte real ${@0}$: {@1}.",
  "Vlastné čísla sú reálne s rovnakým znamienkom (súčin ${@0} \\gt 0$), ich súčet je ${@1}$: {@2}.": "Los valores propios son reales y del mismo signo (producto ${@0} \\gt 0$), su suma es ${@1}$: {@2}.",
  "Vlastné čísla sú rýdzo imaginárne: stred.": "Los valores propios son imaginarios puros: centro.",
  "Vlastný vektor k $\\lambda_1$ má tvar $(1, m_1)^{T}$. Urči $m_1$.": "El vector propio para $\\lambda_1$ tiene la forma $(1, m_1)^{T}$. Determina $m_1$.",
  "Vlastný vektor k $\\lambda_2$ má tvar $(1, m_2)^{T}$. Urči $m_2$.": "El vector propio para $\\lambda_2$ tiene la forma $(1, m_2)^{T}$. Determina $m_2$.",
  "Vrstevnice funkcie F(x, y) = x² − xy + y²": "Curvas de nivel de la función F(x, y) = x² − xy + y²",
  "Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.": "Divide la ecuación entre $x$ y usa el factor integrante $\\mu = \\mathrm{e}^{\\int p\\,dx}$; para $p = \\frac{n}{x}$ es $\\mu = x^{n}$.",
  "Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.": "Divide la ecuación entre $x^{2}$, sustituye $y = ux$ y separa variables: $\\frac{du}{u^{2}} = \\frac{dx}{x}$.",
  "Vydeľ rovnicu výrazom $xy$, dostaneš $y' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.": "Divide la ecuación entre $xy$; obtienes $y' = \\frac{y}{x} + k\\frac{x}{y}$. Después usa la sustitución $y = ux$.",
  "Vyjadri $y$ a vypočítaj $y({@0})$ (zlomok alebo celé číslo).": "Despeja $y$ y calcula $y({@0})$ (fracción o número entero).",
  "Vyjadril si $\\frac{C}{{@0}}$, ale nie samotné $C$: rovnicu ešte vynásob číslom ${@1}$.": "Has despejado $\\frac{C}{{@0}}$, pero no $C$: todavía tienes que multiplicar la ecuación por ${@1}$.",
  "Vypočítaj $M_y - N_x$.": "Calcula $M_y - N_x$.",
  "Vypočítaj $W(0)$, teda hodnotu $K$.": "Calcula $W(0)$, es decir, el valor de $K$.",
  "Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.": "Calcula $\\frac{M_y - N_x}{N}$. Si sale $\\frac{k}{x}$, el factor integrante es $\\mathrm{e}^{k\\ln x} = x^{k}$.",
  "Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.": "Calcula $\\frac{\\partial M}{\\partial y}$ y $\\frac{\\partial N}{\\partial x}$ y compara los coeficientes de las mismas potencias.",
  "Vypočítaj $\\mathrm{e}^{-{@0}k}$. Zaokrúhli na 4 desatinné miesta.": "Calcula $\\mathrm{e}^{-{@0}k}$. Redondea a 4 decimales.",
  "Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Calcula $\\tau = RC$ (kiloohmios por microfaradios dan milisegundos) y sustituye en $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Vypočítaj $u({@0})$. {@1}": "Calcula $u({@0})$. {@1}",
  "Vypočítaj $y(2)$ (zlomok alebo desatinné číslo).": "Calcula $y(2)$ (fracción o número decimal).",
  "Vypočítaj $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}": "Calcula $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}",
  "Vypočítaj $y({@0})$. {@1}": "Calcula $y({@0})$. {@1}",
  "Vypočítaj determinant $\\det A$.": "Calcula el determinante $\\det A$.",
  "Vypočítaj obraz exponenciálneho člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Calcula la transformada del término exponencial ${@0}$ en el punto $s = {@1}$ (fracción).",
  "Vypočítaj obraz goniometrického člena v bode $s = {@0}$ (zlomok).": "Calcula la transformada del término trigonométrico en el punto $s = {@0}$ (fracción).",
  "Vypočítaj obraz člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Calcula la transformada del término ${@0}$ en el punto $s = {@1}$ (fracción).",
  "Vypočítaj periódu kmitov v sekundách. {@0}": "Calcula el periodo de las oscilaciones en segundos. {@0}",
  "Vypočítaj stopu matice sústavy $\\mathrm{tr}\\,A$.": "Calcula la traza de la matriz del sistema $\\mathrm{tr}\\,A$.",
  "Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.": "Calcula la traza, el determinante y el discriminante $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ y usa la tabla de la teoría.",
  "Vypočítaj vlastnú uhlovú frekvenciu $\\omega_0$ (v $\\mathrm{s^{-1}}$). Zaokrúhli na 3 desatinné miesta.": "Calcula la frecuencia angular propia $\\omega_0$ (en $\\mathrm{s^{-1}}$). Redondea a 3 decimales.",
  "Vypočítaj časovú konštantu $\\tau = RC$ v milisekundách.": "Calcula la constante de tiempo $\\tau = RC$ en milisegundos.",
  "Vypočítal si $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Has calculado $u = \\frac{y}{x}$, no $y$. No olvides deshacer la sustitución: $y = ux$.",
  "Vypočítal si hodnotu $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Has calculado el valor de $u = \\frac{y}{x}$, no $y$. No olvides deshacer la sustitución: $y = ux$.",
  "Vypočítal si hodnotu pomocnej funkcie $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Has calculado el valor de la función auxiliar $u = \\frac{y}{x}$, no $y$. No olvides deshacer la sustitución: $y = ux$.",
  "Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.": "Resuelve $1 - \\mathrm{e}^{-t/\\tau} = p$ para $t$: $t = -\\tau\\ln(1 - p)$.",
  "Vyrieš $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ a zadaj vlastné čísla (oddelené bodkočiarkou).": "Resuelve $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ y escribe los valores propios (separados por punto y coma).",
  "Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pre $x \\gt 0$), a vypočítaj $y({@1})$. {@2}": "Resuelve el problema de Cauchy $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (para $x \\gt 0$), y calcula $y({@1})$. {@2}",
  "Vyrieš Cauchyho úlohu $xy'{@0} = {@1}$, $y(1) = {@2}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).": "Resuelve el problema de Cauchy $xy'{@0} = {@1}$, $y(1) = {@2}$, para $x \\gt 0$ y calcula $y(2)$. Escribe el resultado exacto (fracción o número decimal).",
  "Vyrieš Cauchyho úlohu $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Resuelve el problema de Cauchy $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (para $x \\gt 0$), y calcula $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. Výsledok zadaj ako zlomok alebo celé číslo.": "Resuelve el problema de Cauchy $y' = {@0}$, $y(0) = {@1}$, y calcula $y({@2})$. Escribe el resultado como fracción o número entero.",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. {@3}": "Resuelve el problema de Cauchy $y' = {@0}$, $y(0) = {@1}$, y calcula $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $yy' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$.": "Resuelve el problema de Cauchy $yy' = {@0}$, $y(0) = {@1}$, y calcula $y({@2})$.",
  "Vyrieš Cauchyho úlohu ${@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Resuelve el problema de Cauchy ${@0}$, $y(1) = {@1}$ (para $x \\gt 0$), y calcula $y({@2})$. {@3}",
  "Vyrieš sústavu a urči $A$.": "Resuelve el sistema y determina $A$.",
  "Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.": "Usa $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ y despeja $y$.",
  "Výraz $\\frac{M_y - N_x}{N}$ má tvar $\\frac{k}{x}$. Urči $k$.": "La expresión $\\frac{M_y - N_x}{N}$ tiene la forma $\\frac{k}{x}$. Determina $k$.",
  "Výraz $\\sqrt{m/k}$ je $\\frac{1}{\\omega_0}$; perióda je ešte $2\\pi$-krát väčšia.": "La expresión $\\sqrt{m/k}$ es $\\frac{1}{\\omega_0}$; el periodo es todavía $2\\pi$ veces mayor.",
  "Všeobecné riešenie rovnice $xy' + y ={@0}$ na intervale, ktorý neobsahuje nulu, je $y = {@1} + \\frac{C}{x}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$.": "La solución general de la ecuación $xy' + y ={@0}$ en un intervalo que no contiene el cero es $y = {@1} + \\frac{C}{x}$. Determina $C$ para la condición inicial $y({@2}) = {@3}$.",
  "Všeobecné riešenie rovnice $xy' = 2y{@0}$ je $y = Cx^{2}{@1}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$. Výsledok zadaj ako celé číslo alebo zlomok.": "La solución general de la ecuación $xy' = 2y{@0}$ es $y = Cx^{2}{@1}$. Determina $C$ para la condición inicial $y({@2}) = {@3}$. Escribe el resultado como número entero o fracción.",
  "Všeobecné riešenie rovnice $y' = {@0}{@1}$ je $y = C{@2}{@3}$. Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = {@4}$.": "La solución general de la ecuación $y' = {@0}{@1}$ es $y = C{@2}{@3}$. Determina la constante $C$ de modo que la solución cumpla la condición inicial $y(0) = {@4}$.",
  "Wronskián je $W = y_1y_2' - y_1'y_2$; poradie členov rozhoduje o znamienku $K$.": "El wronskiano es $W = y_1y_2' - y_1'y_2$; el orden de los términos decide el signo de $K$.",
  "Wronskián je súčinom dvoch funkcií s činiteľom $\\mathrm{e}^{\\alpha x}$, preto má v exponente $2\\alpha$.": "El wronskiano es producto de dos funciones con el factor $\\mathrm{e}^{\\alpha x}$, por eso tiene $2\\alpha$ en el exponente.",
  "Y(s) vyjadrené": "Y(s) despejada",
  "Z merania urči konštantu $k$ v $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Zaokrúhli na 4 desatinné miesta.": "A partir de la medición, determina la constante $k$ en $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Redondea a 4 decimales.",
  "Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.": "En cada periodo de semidesintegración la cantidad baja a la mitad: $m(t) = m_0\\cdot 2^{-t/T}$.",
  "Za koľko milisekúnd dosiahne napätie požadovanú hodnotu? {@0}": "¿En cuántos milisegundos alcanza la tensión el valor requerido? {@0}",
  "Za koľko minút klesne teplota na požadovanú hodnotu? Zaokrúhli na desatiny minúty.": "¿En cuántos minutos baja la temperatura al valor requerido? Redondea a las décimas de minuto.",
  "Za koľko rokov dosiahne populácia polovicu nosnej kapacity? {@0}": "¿En cuántos años alcanza la población la mitad de la capacidad de carga? {@0}",
  "Zabudol si na druhú deriváciu: $y_p'' = -{@0}y_p$, takže koeficient pri $A$ v rovnici pre kosínus je $q - {@1}$.": "Olvidaste la derivada segunda: $y_p'' = -{@0}y_p$, así que el coeficiente de $A$ en la ecuación para el coseno es $q - {@1}$.",
  "Zabudol si na funkciu $\\varphi(y)$: po integrovaní $M$ podľa $x$ ju treba dourčiť z podmienky $F_y = N$.": "Olvidaste la función $\\varphi(y)$: tras integrar $M$ respecto a $x$ hay que determinarla con la condición $F_y = N$.",
  "Zabudol si na konštantný člen ${@0}$ vo všeobecnom riešení; najprv ho prenes na druhú stranu.": "Olvidaste el término constante ${@0}$ de la solución general; primero pásalo al otro lado.",
  "Zabudol si na konštantu $C$: zo začiatočnej podmienky $y(0)$ vyjde $C$, ktorým treba exponenciálu vynásobiť.": "Olvidaste la constante $C$: de la condición inicial $y(0)$ resulta $C$, por el que hay que multiplicar la exponencial.",
  "Zabudol si na prítok soli $cq$: bez neho by soľ z nádrže len ubúdala. Riešenie sa blíži k rovnovážnej hodnote $cV$.": "Olvidaste la entrada de sal $cq$: sin ella, la sal del depósito solo disminuiría. La solución se acerca al valor de equilibrio $cV$.",
  "Zabudol si na začiatočnú podmienku: $\\mathcal{L}\\{y'\\} = sY - y(0)$, takže v $Y(s)$ je aj člen $\\frac{y(0)}{s - a}$.": "Olvidaste la condición inicial: $\\mathcal{L}\\{y'\\} = sY - y(0)$, así que en $Y(s)$ está también el término $\\frac{y(0)}{s - a}$.",
  "Zakry činiteľ $s{@0}$ a dosaď $s = {@1}$.": "Tapa el factor $s{@0}$ y sustituye $s = {@1}$.",
  "Zamenil si hmotnosť a tuhosť: $\\omega_0 = \\sqrt{k/m}$, a perióda je $\\frac{2\\pi}{\\omega_0}$, nie $2\\pi\\omega_0$.": "Has intercambiado la masa y la rigidez: $\\omega_0 = \\sqrt{k/m}$, y el periodo es $\\frac{2\\pi}{\\omega_0}$, no $2\\pi\\omega_0$.",
  "Zamenil si obrazy: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ a $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.": "Has intercambiado las transformadas: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ y $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.",
  "Zamenil si súradnice: v bode $[x; y]$ je prvá súradnica $x$ a druhá $y$. Dosaď ich do $f(x, y)$ na správne miesta.": "Has intercambiado las coordenadas: en el punto $[x; y]$ la primera coordenada es $x$ y la segunda $y$. Sustitúyelas en $f(x, y)$ en el lugar correcto.",
  "Zameň $y''$ za $\\lambda^{2}$, $y'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.": "Sustituye $y''$ por $\\lambda^{2}$, $y'$ por $\\lambda$ e $y$ por $1$ y resuelve la ecuación de segundo grado.",
  "Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.": "Escribe la solución como $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, determina las constantes con las condiciones; la amplitud es $\\sqrt{C_1^{2} + C_2^{2}}$.",
  "Zapíš rovnicu v tvare $y' = \\frac{y}{x} + a$, dosaď $y = ux$, $y' = u + xu'$ a integruj.": "Escribe la ecuación en la forma $y' = \\frac{y}{x} + a$, sustituye $y = ux$, $y' = u + xu'$ e integra.",
  "Začiatočná hodnota y(0)": "Valor inicial y(0)",
  "Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.": "Deriva $x_p$ dos veces (producto de $t$ y una función trigonométrica) y sustituye. Con $\\omega = \\omega_0$ solo queda el término sin $t$.",
  "Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y'$ a vyrieš sústavu dvoch lineárnych rovníc.": "Deriva la solución general, sustituye $x = 0$ en $y$ y en $y'$ y resuelve el sistema de dos ecuaciones lineales.",
  "Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.": "Averigua cuántas veces es el número $\\alpha$ del exponente del lado derecho raíz de la ecuación característica, y multiplica la forma básica por $x$ ese mismo número de veces.",
  "Zo začiatočnej podmienky urči $B$.": "Determina $B$ a partir de la condición inicial.",
  "Zostav bilanciu $x' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.": "Plantea el balance $x' = (\\text{entrada de sustancia}) - (\\text{salida de sustancia}) = cq - \\frac{q}{V}x$ y resuelve la ecuación lineal.",
  "Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.": "Escribe la ecuación característica, determina el tipo de raíces según el discriminante y usa la forma de solución correspondiente.",
  "Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).": "Un $A$ negativo significa que las oscilaciones están en oposición de fase con la fuerza excitadora (la frecuencia de excitación es mayor que la propia).",
  "absolútnom člene": "el término independiente",
  "algebra": "álgebra",
  "algebraická rovnica": "ecuación algebraica",
  "axy": "axy",
  "axy - x": "axy - x",
  "druhá": "segunda",
  "dvojnásobný koreň ${@0}$": "una raíz doble ${@0}$",
  "je dvojnásobným koreňom": "es raíz doble",
  "je jednoduchým koreňom": "es raíz simple",
  "k = 0: veličina sa nemení": "k = 0: la magnitud no cambia",
  "konštanta": "una constante",
  "korene ${@0}$ a ${@1}$": "las raíces ${@0}$ y ${@1}$",
  "kritické tlmenie": "amortiguamiento crítico",
  "kritické tlmenie: najrýchlejší návrat bez kmitov": "amortiguamiento crítico: retorno más rápido sin oscilaciones",
  "krát ${@0}$": "por ${@0}$",
  "litre": "litros",
  "litrov": "litros",
  "logistická krivka s K = {@0}": "curva logística con K = {@0}",
  "nadkritické tlmenie (aperiodický pohyb)": "amortiguamiento supercrítico (movimiento aperiódico)",
  "nadkritické tlmenie: aperiodický pohyb": "amortiguamiento supercrítico: movimiento aperiódico",
  "neizolovaný rovnovážny bod (det A = 0)": "punto de equilibrio no aislado (det A = 0)",
  "nestabilné ohnisko": "foco inestable",
  "nestabilný degenerovaný uzol": "nodo degenerado inestable",
  "nestabilný uzol": "nodo inestable",
  "netlmené kmity, ω₀ = 2": "oscilaciones no amortiguadas, ω₀ = 2",
  "nie je koreňom": "no es raíz",
  "po vydelení číslom ${@0}$": "tras dividir entre ${@0}$,",
  "podkritické tlmenie (tlmené kmity)": "amortiguamiento subcrítico (oscilaciones amortiguadas)",
  "podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = {@0}": "amortiguamiento subcrítico: oscilaciones amortiguadas, ω<sub>d</sub> = {@0}",
  "polynóm 1. stupňa": "un polinomio de grado 1",
  "polčas ln 2 / |k| = {@0}": "periodo de semidesintegración ln 2 / |k| = {@0}",
  "pre obraz Y(s)": "para la transformada Y(s)",
  "prvá": "primera",
  "riešenie y(t)": "solución y(t)",
  "rovnica pre y(t)": "ecuación para y(t)",
  "rozklad na parciálne zlomky": "descomposición en fracciones simples",
  "roztok s koncentráciou ${@0}\\,\\mathrm{kg/l}$ {@1}": "una disolución de concentración ${@0}\\,\\mathrm{kg/l}$ {@1}",
  "roztoku, v ktorom je ${@0}\\,\\mathrm{kg}$ soli": "de una disolución que contiene ${@0}\\,\\mathrm{kg}$ de sal",
  "rýchlosťou ${@0}$ {@1} za minútu": "a razón de ${@0}$ {@1} por minuto",
  "sedlo": "silla",
  "stabilné ohnisko": "foco estable",
  "stabilný uzol": "nodo estable",
  "tabuľka obrazov": "tabla de transformadas",
  "tretia": "tercera",
  "začiatočná úloha": "problema de valor inicial",
  "{@0} $y_p'' = -{@1}y_p$ a $y_p' = {@2}(-A{@3} + B{@4})$. Po dosadení porovnáme koeficienty: pri ${@5}$: ${@6} = {@7}$, pri ${@8}$: ${@9} = {@10}$. Riešenie sústavy je $A = {@11}$, $B = {@12}$.": "{@0} $y_p'' = -{@1}y_p$ e $y_p' = {@2}(-A{@3} + B{@4})$. Tras sustituir comparamos coeficientes: de ${@5}$: ${@6} = {@7}$; de ${@8}$: ${@9} = {@10}$. La solución del sistema es $A = {@11}$, $B = {@12}$.",
  "{@0} Aké napätie bude na kondenzátore ${@1}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.": "{@0} ¿Qué tensión tendrá el condensador ${@1}\\,\\mathrm{ms}$ después de conectarlo? Redondea el resultado en voltios a 2 decimales.",
  "{@0} Akú teplotu bude mať ${@1}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.": "{@0} ¿Qué temperatura tendrá ${@1}$ minutos después de colocarlo? Redondea el resultado a las décimas de grado.",
  "{@0} Koľko jedincov bude mať populácia po ${@1}$ rokoch? Výsledok zaokrúhli na celé číslo.": "{@0} ¿Cuántos individuos tendrá la población al cabo de ${@1}$ años? Redondea el resultado a un número entero.",
  "{@0} Za koľko milisekúnd dosiahne napätie na kondenzátore ${@1}\\,\\%$ napätia zdroja? {@2}": "{@0} ¿En cuántos milisegundos alcanza la tensión del condensador el ${@1}\\,\\%$ de la tensión de la fuente? {@2}",
  "{@0} Za koľko minút od položenia klesne teplota telesa na ${@1}{@2}$? Výsledok zaokrúhli na desatiny minúty.": "{@0} ¿En cuántos minutos desde que se coloca baja la temperatura del cuerpo a ${@1}{@2}$? Redondea el resultado a las décimas de minuto.",
  "{@0} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? {@1}": "{@0} ¿En cuántos años alcanza la mitad de la capacidad de carga (cuando crece más rápido)? {@1}",
  "{@0}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = {@1}$, $\\delta = {@2}$ a $\\omega_0^{2} = {@3}$. Korene charakteristickej rovnice sú $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, preto $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.": "{@0}Comparando con la forma $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ es $2\\delta = {@1}$, $\\delta = {@2}$ y $\\omega_0^{2} = {@3}$. Las raíces de la ecuación característica son $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, por eso $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.",
  "· riešením je priamka y = x − 1": "· la solución es la recta y = x − 1",
  "Časová konštanta $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.": "Constante de tiempo $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, por tanto $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.",
  "Či sú vlastné čísla reálne (uzol) alebo komplexné (ohnisko, stred), rozhoduje znamienko diskriminantu $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.": "Si los valores propios son reales (nodo) o complejos (foco, centro) lo decide el signo del discriminante $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.",
  "Člen $\\frac{y}{x}$ je v poriadku, ale druhý člen nezávisí len od podielu $\\frac{y}{x}$.": "El término $\\frac{y}{x}$ está bien, pero el segundo término no depende solo del cociente $\\frac{y}{x}$.",
  "Člen $p\\,y'$ sa transformuje na $p(sY - y(0))$; po prenesení na pravú stranu dá $+p\\,y(0)$. Over znamienko.": "El término $p\\,y'$ se transforma en $p(sY - y(0))$; al pasarlo al lado derecho da $+p\\,y(0)$. Comprueba el signo.",
  "Číslo ${@0}$ nie je koreňom charakteristickej rovnice, lebo ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pre $y_p = A{@5}$ je $y_p' = {@6}A{@7}$ a $y_p'' = {@8}A{@9}$, po dosadení $A\\cdot {@10}\\,{@11} = {@12}{@13}$, teda $A = {@14}$.": "El número ${@0}$ no es raíz de la ecuación característica, porque ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Para $y_p = A{@5}$ es $y_p' = {@6}A{@7}$ e $y_p'' = {@8}A{@9}$; al sustituir, $A\\cdot {@10}\\,{@11} = {@12}{@13}$, por tanto $A = {@14}$.",
  "Číslo ${@0}$ z exponentu pravej strany je koreňom charakteristickej rovnice (rezonancia); koľkokrát treba tvar vynásobiť $x$?": "El número ${@0}$ del exponente del lado derecho es raíz de la ecuación característica (resonancia); ¿cuántas veces hay que multiplicar la forma por $x$?",
  "Číslo ${@0}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.": "El número ${@0}\\mathrm{i}$ no es raíz de la ecuación característica, no hay resonancia.",
  "čas zdvojnásobenia ln 2 / k = {@0}": "tiempo de duplicación ln 2 / k = {@0}",
  "čistej vody": "de agua pura",
  "čistá voda {@0}": "agua pura {@0}",
  "štvrtá": "cuarta",
  "λ = {@0} (dvojnásobný koreň)": "λ = {@0} (raíz doble)",
  "λ = {@0} ± {@1}i (komplexné korene)": "λ = {@0} ± {@1}i (raíces complejas)",
  "λ₁ = {@0}, λ₂ = {@1} (rôzne reálne korene)": "λ₁ = {@0}, λ₂ = {@1} (raíces reales distintas)",
  "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pri ω = {@1}, amplitúda {@2}</span> (pre F₀/m = 1)": "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">máximo en ω = {@1}, amplitud {@2}</span> (para F₀/m = 1)",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Redondea el resultado a 2 decimales."
 }
});
