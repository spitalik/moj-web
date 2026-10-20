/* Español: preklad js/rocniky/r8.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/r8/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "r8-cisla": {
   "title": "Números enteros y racionales",
   "summary": "Números negativos, opuesto, valor absoluto y cálculo con fracciones con signo.",
   "theory": [
    "<p>Los <strong>números naturales</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ los usamos para contar objetos. Si les añadimos el cero\n       y sus opuestos ($-1, -2, -3, \\dots$), obtenemos los <strong>números enteros</strong> $\\mathbb{Z}$. Los <strong>números racionales</strong> $\\mathbb{Q}$\n       son todos los números que se pueden escribir como fracción $\\frac{p}{q}$ ($p$ entero, $q$ natural), por ejemplo $\\frac{3}{4}$,\n       $-2{,}5 = -\\frac{5}{2}$ o $7 = \\frac{7}{1}$.</p>",
    {
     "fig": "r8-obory",
     "caption": "Todo número natural es entero y todo número entero es racional: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$."
    },
    "<p>El <strong>opuesto</strong> de un número $a$ es $-a$: el de $5$ es $-5$; el de $-3$ es $3$. El <strong>valor absoluto</strong> $|a|$\n       es la distancia del número al cero en la recta numérica, por eso nunca es negativo: $|-7| = 7$, $|7| = 7$.</p>",
    "<p><strong>Cálculo con signos:</strong> restar un número significa sumar su opuesto: $4 - (-6) = 4 + 6 = 10$.\n       Al multiplicar y dividir, signos iguales dan un resultado positivo y signos distintos, uno negativo: $(-3)\\cdot(-4) = 12$, $(-20) : 5 = -4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $-8 - (-5) + 2\\cdot(-3)$.",
     "steps": [
      "Primero la multiplicación: $2\\cdot(-3) = -6$ (signos distintos, el resultado es negativo).",
      "Restar un número negativo es sumar: $-8 - (-5) = -8 + 5 = -3$.",
      "Por último, $-3 + (-6) = -9$.",
      "<strong>Resultado: $-9$</strong>"
     ]
    },
    {
     "task": "Compara los números $-\\frac{3}{4}$ y $-0{,}7$.",
     "steps": [
      "Pasamos la fracción a decimal: $-\\frac{3}{4} = -0{,}75$.",
      "El número $-0{,}75$ está más lejos del cero en el lado negativo, así que en la recta numérica está más a la izquierda.",
      "<strong>$-\\frac{3}{4} &lt; -0{,}7$</strong>"
     ]
    }
   ]
  },
  "r8-mocniny": {
   "title": "Potencias y raíces",
   "summary": "Cuadrado y cubo, raíz cuadrada, estimación de raíces y escritura de números grandes.",
   "theory": [
    "<p>Una <strong>potencia</strong> $a^n$ es una forma abreviada de escribir el producto de $n$ factores iguales: $a^n = a\\cdot a\\cdot\\ldots\\cdot a$.\n       El número $a$ es la <em>base</em> y $n$ es el <em>exponente</em>. Por ejemplo, $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$.</p>",
    {
     "fig": "r8-mocniny",
     "caption": "El cuadrado de un número es el área de un cuadrado: un cuadrado de lado 3 tiene $3^2 = 9$ cuadraditos. El cubo es el volumen de un cubo: un cubo de arista 2 está formado por $2^3 = 8$ cubitos."
    },
    "<p><strong>Cuidado con el signo:</strong> $(-3)^2 = (-3)\\cdot(-3) = 9$, pero $-3^2 = -(3\\cdot 3) = -9$.\n       Una potencia par de un número negativo es positiva; una impar, negativa: $(-2)^3 = -8$.</p>",
    "<p>La <strong>raíz cuadrada</strong> de un número no negativo $a$ es el número no negativo $b$ que cumple $b^2 = a$. Escribimos $\\sqrt{a} = b$,\n       por ejemplo $\\sqrt{49} = 7$ y $\\sqrt{0{,}09} = 0{,}3$. Los números grandes se escriben en la forma $a\\cdot 10^n$, donde $1 \\le a &lt; 10$:\n       $45\\,000 = 4{,}5\\cdot 10^4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $(-2)^3 + 3^2 - \\sqrt{64}$.",
     "steps": [
      "$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$.",
      "$3^2 = 9$ y $\\sqrt{64} = 8$, porque $8^2 = 64$.",
      "$-8 + 9 - 8 = -7$.",
      "<strong>Resultado: $-7$</strong>"
     ]
    },
    {
     "task": "¿Entre qué dos números naturales consecutivos está $\\sqrt{50}$?",
     "steps": [
      "Buscamos los cuadrados cercanos a 50: $7^2 = 49$ y $8^2 = 64$.",
      "Como $49 &lt; 50 &lt; 64$, se cumple $7 &lt; \\sqrt{50} &lt; 8$.",
      "<strong>$\\sqrt{50}$ está entre 7 y 8</strong> (muy cerca de 7)."
     ]
    }
   ]
  },
  "r8-vyrazy": {
   "title": "Expresiones algebraicas",
   "summary": "Qué es una variable, sustituir en una expresión y traducir un enunciado a una expresión.",
   "theory": [
    "<p>Una <strong>variable</strong> es una letra (por ejemplo $x$, $a$, $n$) que representa un número cualquiera. Una <strong>expresión algebraica</strong>\n       une números y variables mediante operaciones, por ejemplo $3x + 5$ o $2(a - 1)$. Entre un número y una variable no se escribe\n       el signo de multiplicar: $3x$ significa $3\\cdot x$.</p>",
    "<p>El <strong>valor numérico de una expresión</strong> se calcula sustituyendo la variable por un número. Los números negativos se sustituyen entre paréntesis:\n       para $x = -2$, $x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$.</p>",
    {
     "fig": "r8-obdlznik",
     "caption": "Un rectángulo de lados $a$ y $a + 3$ tiene perímetro $o = 2a + 2(a + 3)$ y área $S = a(a + 3)$. Para $a = 4$, $o = 22$ y $S = 28$."
    },
    "<p><strong>Lenguaje algebraico:</strong> «el doble de un número $x$» es $2x$, «un número 5 unidades mayor que $x$» es $x + 5$, «la tercera parte de un número $x$» es $\\frac{x}{3}$,\n       «el cuadrado de la suma de los números $a$ y $b$» es $(a + b)^2$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula el valor de la expresión $2x^2 - 5x + 1$ para $x = -3$.",
     "steps": [
      "Sustituimos $-3$ entre paréntesis: $2\\cdot(-3)^2 - 5\\cdot(-3) + 1$.",
      "$(-3)^2 = 9$, así que $2\\cdot 9 = 18$; además, $-5\\cdot(-3) = 15$.",
      "$18 + 15 + 1 = 34$.",
      "<strong>El valor de la expresión es 34.</strong>"
     ]
    },
    {
     "task": "Escribe como expresión: «un número 4 unidades menor que el triple de un número $n$».",
     "steps": [
      "El triple del número $n$ es $3n$.",
      "«4 unidades menor» significa restar 4.",
      "<strong>$3n - 4$</strong>"
     ]
    }
   ]
  },
  "r8-upravy": {
   "title": "Operaciones con expresiones algebraicas",
   "summary": "Términos semejantes, quitar paréntesis e identidades notables del cuadrado de un binomio.",
   "theory": [
    "<p>Los <strong>términos semejantes</strong> tienen la misma variable con el mismo exponente, por ejemplo $3x$ y $-5x$, o $2x^2$ y $x^2$.\n       Se suman sumando sus coeficientes: $3x - 5x + 2 = -2x + 2$. Los términos no semejantes (por ejemplo $x^2$ y $x$) no se pueden sumar.</p>",
    "<p><strong>Quitar paréntesis:</strong> el número que está delante del paréntesis multiplica a cada término de dentro: $3(2x - 4) = 6x - 12$.\n       Un signo menos delante del paréntesis cambia el signo de todos los términos: $-(x - 5) = -x + 5$. Dos binomios se multiplican «cada término por cada término»:\n       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.</p>",
    {
     "fig": "r8-dlazdice",
     "caption": "Un cuadrado de lado $a + b$ está formado por el cuadrado $a^2$, el cuadrado $b^2$ y dos rectángulos $ab$. Por eso $(a + b)^2 = a^2 + 2ab + b^2$."
    },
    "<p><strong>Identidades notables</strong> que conviene saber de memoria: $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$\n       y $(a + b)(a - b) = a^2 - b^2$.</p>"
   ],
   "examples": [
    {
     "task": "Simplifica la expresión $4(x - 3) - 2(x - 5)$.",
     "steps": [
      "Quitamos paréntesis: $4x - 12 - 2x + 10$ (el menos delante del segundo paréntesis convierte $-5$ en $+10$).",
      "Agrupamos términos semejantes: $4x - 2x = 2x$ y $-12 + 10 = -2$.",
      "<strong>$2x - 2$</strong>"
     ]
    },
    {
     "task": "Desarrolla $(x - 4)^2$.",
     "steps": [
      "Usamos la identidad $(a - b)^2 = a^2 - 2ab + b^2$, con $a = x$ y $b = 4$.",
      "$x^2 - 2\\cdot x\\cdot 4 + 4^2$.",
      "<strong>$x^2 - 8x + 16$</strong>"
     ]
    }
   ]
  },
  "r8-rovnice": {
   "title": "Ecuaciones lineales",
   "summary": "Transformaciones equivalentes, ecuaciones con paréntesis y comprobación.",
   "theory": [
    "<p>Una <strong>ecuación</strong> es una igualdad entre dos expresiones en la que hay una incógnita, por ejemplo $2x + 3 = 9$. <strong>Resolver una ecuación</strong>\n       significa hallar el número (la solución) que, al sustituirlo, hace que se cumpla la igualdad. La solución de esta ecuación es $x = 3$, porque $2\\cdot 3 + 3 = 9$.</p>",
    {
     "fig": "r8-vahy",
     "caption": "Una ecuación es como una balanza en equilibrio: a la izquierda hay dos bolsitas de masa desconocida $x$ y tres pesas; a la derecha, nueve pesas. Si quitamos 3 pesas de cada platillo, la balanza sigue en equilibrio: $2x = 6$, es decir, $x = 3$."
    },
    "<p>Las <strong>transformaciones equivalentes</strong> no cambian la solución de la ecuación: podemos sumar (o restar) a ambos miembros el mismo número\n       o expresión, y podemos multiplicar o dividir ambos miembros por el mismo número distinto de cero. El objetivo es dejar la incógnita sola en un miembro.</p>",
    "<p><strong>Procedimiento:</strong> 1. quitamos los paréntesis, 2. pasamos los términos con incógnita a un miembro y los números al otro,\n       3. dividimos ambos miembros entre el coeficiente de la incógnita, 4. hacemos la <strong>comprobación</strong> sustituyendo en la ecuación original.</p>"
   ],
   "examples": [
    {
     "task": "Resuelve la ecuación $5x - 7 = 2x + 8$.",
     "steps": [
      "Restamos $2x$ a ambos miembros: $3x - 7 = 8$.",
      "Sumamos 7 a ambos miembros: $3x = 15$.",
      "Dividimos ambos miembros entre 3: $x = 5$.",
      "Comprobación: miembro izquierdo $5\\cdot 5 - 7 = 18$, miembro derecho $2\\cdot 5 + 8 = 18$ ✓"
     ]
    },
    {
     "task": "Resuelve la ecuación $3(x + 2) = x - 4$.",
     "steps": [
      "Quitamos el paréntesis: $3x + 6 = x - 4$.",
      "Restamos $x$ y después 6: $2x = -10$.",
      "Dividimos entre 2: $x = -5$.",
      "Comprobación: $3\\cdot(-5 + 2) = -9$ y $-5 - 4 = -9$ ✓"
     ]
    }
   ]
  },
  "r8-slovne": {
   "title": "Problemas resueltos con ecuaciones",
   "summary": "Cómo plantear una ecuación a partir de un enunciado: números, edades, perímetro y repartos de dinero.",
   "theory": [
    "<p>Un problema se resuelve con una ecuación en cinco pasos:</p>\n       <ol><li>Llamamos a la incógnita con una letra (por ejemplo $x$) y anotamos qué significa.</li>\n       <li>Expresamos las demás magnitudes en función de $x$.</li><li>Planteamos la ecuación según lo que el problema dice que es igual.</li>\n       <li>Resolvemos la ecuación.</li><li>Comprobamos <em>con el enunciado del problema</em> y escribimos la respuesta.</li></ol>",
    "<p>Expresiones útiles: «5 más» es $x + 5$, «el triple» es $3x$, «tres números consecutivos» son $x$, $x + 1$, $x + 2$,\n       «el perímetro de un rectángulo» es $2a + 2b$.</p>",
    "<p>La comprobación se hace con el enunciado, no sustituyendo en nuestra propia ecuación. Si hubiéramos planteado mal la ecuación, la comprobación en ella no descubriría el error.</p>"
   ],
   "examples": [
    {
     "task": "La suma de tres números naturales consecutivos es 48. ¿Qué números son?",
     "steps": [
      "Llamamos $x$ al menor; los siguientes son $x + 1$ y $x + 2$.",
      "Ecuación: $x + (x + 1) + (x + 2) = 48$, es decir, $3x + 3 = 48$.",
      "$3x = 45$, $x = 15$.",
      "Comprobación: $15 + 16 + 17 = 48$ ✓",
      "<strong>Respuesta: Son los números 15, 16 y 17.</strong>"
     ]
    },
    {
     "task": "Una madre tiene 26 años más que su hija. Entre las dos suman 50 años. ¿Cuántos años tiene la hija?",
     "steps": [
      "La edad de la hija es $x$ y la de la madre, $x + 26$.",
      "Ecuación: $x + (x + 26) = 50$, es decir, $2x + 26 = 50$.",
      "$2x = 24$, $x = 12$.",
      "Comprobación: la madre tiene $12 + 26 = 38$ años y $12 + 38 = 50$ ✓",
      "<strong>Respuesta: La hija tiene 12 años.</strong>"
     ]
    }
   ]
  },
  "r8-kruh": {
   "title": "Círculo y circunferencia",
   "summary": "Radio y diámetro, longitud de la circunferencia, área del círculo, sector circular y corona circular.",
   "theory": [
    "<p>La <strong>circunferencia</strong> $k$ de centro $S$ y radio $r$ es el conjunto de todos los puntos del plano que están a distancia $r$ del punto $S$;\n       es solo una «línea». El <strong>círculo</strong> lo forman la circunferencia y toda la superficie de su interior. El <strong>diámetro</strong> es un segmento que pasa\n       por el centro y une dos puntos de la circunferencia; su longitud es $d = 2r$.</p>",
    {
     "fig": "r8-kruh",
     "caption": "Centro $S$, radio $r$, diámetro $d = 2r$ y sector circular de ángulo $\\alpha$."
    },
    "<p>La <strong>longitud de la circunferencia</strong> (perímetro del círculo) es $o = 2\\pi r = \\pi d$, y el <strong>área del círculo</strong> es $S = \\pi r^2$.\n       El número $\\pi$ es la razón entre el perímetro y el diámetro de cualquier círculo, $\\pi \\approx 3{,}14$.</p>",
    "<p>Un <strong>sector circular</strong> de ángulo $\\alpha$ es la parte del círculo comprendida entre dos radios; su área es $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$.\n       La <strong>corona circular</strong> es la superficie entre dos circunferencias concéntricas de radios $R &gt; r$: $S = \\pi (R^2 - r^2)$.</p>"
   ],
   "examples": [
    {
     "task": "La rueda de una bicicleta tiene $70\\,\\text{cm}$ de diámetro. ¿Qué distancia recorre en una vuelta? Usa $\\pi \\approx 3{,}14$.",
     "steps": [
      "En una vuelta, la rueda recorre la longitud de su circunferencia: $o = \\pi d$.",
      "$o \\approx 3{,}14\\cdot 70 = 219{,}8\\,\\text{cm}$.",
      "<strong>La rueda recorre unos $219{,}8\\,\\text{cm}$, es decir, aproximadamente $2{,}2\\,\\text{m}$.</strong>"
     ]
    },
    {
     "task": "Calcula el área de un cuarto de círculo de radio $10\\,\\text{cm}$ ($\\pi \\approx 3{,}14$).",
     "steps": [
      "Un cuarto de círculo es un sector de $90^\\circ$, es decir, $\\frac{90}{360} = \\frac{1}{4}$ del círculo.",
      "Área del círculo entero: $S = \\pi r^2 \\approx 3{,}14\\cdot 100 = 314\\,\\text{cm}^2$.",
      "<strong>Un cuarto: $314 : 4 = 78{,}5\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "r8-hranoly": {
   "title": "Prismas: área y volumen",
   "summary": "Bases y superficie lateral del prisma, desarrollo del ortoedro, área y volumen del ortoedro, el cubo y el prisma triangular.",
   "theory": [
    "<p>Un <strong>prisma</strong> es un cuerpo que tiene dos <strong>bases</strong> iguales y paralelas (polígonos) y una <strong>superficie lateral</strong>\n       formada por rectángulos, las caras laterales. Según la forma de la base hablamos de prisma triangular, cuadrangular, hexagonal…\n       El ortoedro y el cubo son prismas cuadrangulares.</p>",
    {
     "fig": "r8-siet",
     "caption": "Desarrollo de un ortoedro de dimensiones $a$, $b$, $c$: dos bases $a\\times b$ (azules) y cuatro caras laterales (verdes)."
    },
    "<p><strong>Volumen</strong> del prisma: $V = S_p\\cdot v$ (área de la base por la altura). Para el ortoedro, $V = a\\cdot b\\cdot c$; para el cubo, $V = a^3$.\n       El volumen se mide en unidades cúbicas; $1\\,\\text{dm}^3 = 1\\,\\text{l}$ y $1\\,\\text{cm}^3 = 1\\,\\text{ml}$.</p>",
    "<p>El <strong>área total</strong> es la suma de las áreas de todas las caras: $S = 2\\cdot S_p + S_{pl}$, donde el área lateral es $S_{pl} = o_p\\cdot v$\n       (perímetro de la base por la altura). Para el ortoedro, $S = 2(ab + bc + ac)$; para el cubo, $S = 6a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Un ortoedro tiene dimensiones $a = 5\\,\\text{cm}$, $b = 3\\,\\text{cm}$, $c = 4\\,\\text{cm}$. Calcula su área total y su volumen.",
     "steps": [
      "$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$.",
      "$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Un prisma triangular tiene como base un triángulo rectángulo de catetos $3\\,\\text{cm}$ y $4\\,\\text{cm}$ (la hipotenusa mide $5\\,\\text{cm}$) y una altura de $10\\,\\text{cm}$. Calcula su área total y su volumen.",
     "steps": [
      "Área de la base: $S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$.",
      "Volumen: $V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$.",
      "Área lateral: $S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$.",
      "Área total: $S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r8-statistika": {
   "title": "Gráficos, tablas y estadística",
   "summary": "Diagrama de barras y diagrama de sectores, media aritmética, moda y mediana.",
   "theory": [
    "<p>Los datos se recogen en <strong>tablas</strong> y se representan con <strong>gráficos</strong>. El diagrama de barras sirve para comparar cantidades;\n       el diagrama de sectores muestra qué parte del total representa cada grupo.</p>",
    {
     "fig": "r8-stlpce",
     "caption": "Diagrama de barras: notas de un examen en una clase de 23 alumnos (en una escala de 1 a 5, donde 1 es la mejor nota). La mayoría de los alumnos sacó un 2."
    },
    {
     "fig": "r8-kolac",
     "caption": "Diagrama de sectores: cómo van los alumnos al colegio. La mitad va a pie, el 30 % en autobús y el 20 % en bicicleta."
    },
    "<p>La <strong>media aritmética</strong> es la suma de todos los valores dividida entre el número de valores. La <strong>moda</strong> es el valor que aparece\n       con más frecuencia. La <strong>mediana</strong> es el valor central cuando ordenamos los datos de menor a mayor; si el número de datos es par, es\n       la media de los dos valores centrales.</p>"
   ],
   "examples": [
    {
     "task": "Las temperaturas durante cinco días fueron $12$, $15$, $9$, $15$ y $14\\,{}^\\circ\\text{C}$. Halla la media, la moda y la mediana.",
     "steps": [
      "Media: $\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$.",
      "Moda: el valor más frecuente es $15\\,{}^\\circ\\text{C}$.",
      "Mediana: ordenamos $9, 12, 14, 15, 15$; el valor central es $14\\,{}^\\circ\\text{C}$."
     ]
    },
    {
     "task": "Con el diagrama de notas, calcula la nota media de la clase.",
     "steps": [
      "Suma de todas las notas: $1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$.",
      "Número de alumnos: $5 + 8 + 6 + 3 + 1 = 23$.",
      "<strong>Media: $56 : 23 \\approx 2{,}43$.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, teda $p = {@6}$ a $q = {@7}$.": "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, así que $p = {@6}$ y $q = {@7}$.",
  "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Plášť: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, povrch $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.": "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Superficie lateral: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$; área total $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.",
  "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Obe strany vynásobíme {@4}: $x = {@5}$.": "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Multiplicamos los dos miembros por {@4}: $x = {@5}$.",
  "$\\sqrt{{@0}} = {@1}$ a $\\sqrt{{@2}} = {@3}$, teda ${@4} - {@5} = {@6}$.": "$\\sqrt{{@0}} = {@1}$ y $\\sqrt{{@2}} = {@3}$, así que ${@4} - {@5} = {@6}$.",
  "$\\sqrt{{@0}} = {@1}$, lebo ${@2}^2 = {@3}$.": "$\\sqrt{{@0}} = {@1}$, porque ${@2}^2 = {@3}$.",
  "$a^3$ znamená $a\\cdot a\\cdot a$, nie $3\\cdot a$.": "$a^3$ significa $a\\cdot a\\cdot a$, no $3\\cdot a$.",
  "${@0} : {@1} = {@2}$ a znamienka sú {@3}: ${@4} : {@5} = {@6}$.": "${@0} : {@1} = {@2}$ y los signos son {@3}: ${@4} : {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}$ a znamienka sú {@3}: ${@4}\\cdot {@5} = {@6}$.": "${@0}\\cdot {@1} = {@2}$ y los signos son {@3}: ${@4}\\cdot {@5} = {@6}$.",
  "${@0}^2 = {@1}$ a ${@2}^2 = {@3}$. Keďže ${@4} &lt; {@5} &lt; {@6}$, platí ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.": "${@0}^2 = {@1}$ y ${@2}^2 = {@3}$. Como ${@4} &lt; {@5} &lt; {@6}$, se cumple ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda ${@4} - {@5} = {@6}$.": "$|{@0}| = {@1}$ y $|{@2}| = {@3}$, así que ${@4} - {@5} = {@6}$.",
  "(a + b)^2 = a^2 + 2ab + b^2": "(a + b)^2 = a^2 + 2ab + b^2",
  "(a - b)^2 = a^2 - 2ab + b^2": "(a - b)^2 = a^2 - 2ab + b^2",
  ", $x + 2$ a $x + 3$": ", $x + 2$ y $x + 3$",
  "Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.": "El valor absoluto es la distancia al cero; nunca es negativo.",
  "Ak rovnicu násobíš číslom {@0}, vynásob každý člen na oboch stranách, aj číslo ${@1}$. Jednoduchšie je najprv osamostatniť zlomok.": "Si multiplicas la ecuación por {@0}, multiplica todos los términos de los dos miembros, también el número ${@1}$. Es más sencillo despejar primero la fracción.",
  "Akvárium tvaru kvádra má vnútorné rozmery {@0} cm, {@1} cm a {@2} cm. Koľko litrov vody sa doň zmestí?": "Un acuario con forma de ortoedro tiene unas medidas interiores de {@0} cm, {@1} cm y {@2} cm. ¿Cuántos litros de agua caben en él?",
  "Aká dlhá je dlhšia strana (v cm)?": "¿Cuánto mide el lado más largo (en cm)?",
  "Aká dlhá je druhá strana $a + {@0}$ pre $a = {@1}$ (v cm)?": "¿Cuánto mide el otro lado, $a + {@0}$, para $a = {@1}$ (en cm)?",
  "Aká dlhá je kratšia strana (v cm)?": "¿Cuánto mide el lado más corto (en cm)?",
  "Aké je najväčšie z čísel?": "¿Cuál es el mayor de los números?",
  "Aké je {@0}. číslo v poradí?": "¿Cuál es el número que ocupa el lugar {@0}?",
  "Aké je číslo $a$? Pred desatinnou čiarkou má mať jedinú nenulovú číslicu.": "¿Cuál es el número $a$? Delante de la coma decimal tiene que tener una sola cifra distinta de cero.",
  "Akú časť plného uhla tvorí uhol ${@0}^\\circ$? Zadaj ju ako zlomok.": "¿Qué parte del ángulo completo es un ángulo de ${@0}^\\circ$? Escríbela como fracción.",
  "Aký je najmenší spoločný menovateľ zlomkov ${@0}$ a ${@1}$?": "¿Cuál es el mínimo común denominador de las fracciones ${@0}$ y ${@1}$?",
  "Aký je objem hranola $V = S_p\\cdot v$ (v cm³)?": "¿Cuál es el volumen del prisma $V = S_p\\cdot v$ (en cm³)?",
  "Aký je objem kvádra (v cm³)?": "¿Cuál es el volumen del ortoedro (en cm³)?",
  "Aký je obsah celého kruhu (v cm²)?": "¿Cuál es el área del círculo entero (en cm²)?",
  "Aký je obsah plášťa – obvod podstavy krát výška (v cm²)?": "¿Cuál es el área de la superficie lateral, el perímetro de la base por la altura (en cm²)?",
  "Aký je obsah podstavy $S_p$ (v cm²)?": "¿Cuál es el área de la base $S_p$ (en cm²)?",
  "Aký je polomer kruhu (v cm)?": "¿Cuál es el radio del círculo (en cm)?",
  "Aký je povrch hranola – dve podstavy a plášť (v cm²)?": "¿Cuál es el área total del prisma, las dos bases y la superficie lateral (en cm²)?",
  "Aký je súčet všetkých čísel?": "¿Cuánto suman todos los números?",
  "Aký obsah má jedna stena kocky (v cm²)?": "¿Qué área tiene una cara del cubo (en cm²)?",
  "Babka": "La abuela",
  "Bez zátvorky sa umocňuje len číslo {@0}, mínus ostáva pred výsledkom: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.": "Sin paréntesis solo se eleva al cuadrado el número {@0}; el menos se queda delante del resultado: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.",
  "Chýbajú ti členy s $x$: každý člen prvej zátvorky treba vynásobiť každým členom druhej, nielen prvý s prvým a posledný s posledným.": "Te faltan los términos con $x$: hay que multiplicar cada término del primer paréntesis por cada término del segundo, no solo el primero por el primero y el último por el último.",
  "Dcéra": "Su hija",
  "Dedko": "El abuelo",
  "Delil si len číslom $\\pi$, takto dostaneš priemer. Polomer je jeho polovica.": "Solo has dividido entre $\\pi$: así obtienes el diámetro. El radio es su mitad.",
  "Desatinnú čiarku posunieme o {@0} {@1} doľava, aby pred ňou ostala jediná nenulová číslica: ${@2} = {@3}\\cdot 10^{{@4}}$.": "Desplazamos la coma decimal {@0} {@1} hacia la izquierda para que delante quede una sola cifra distinta de cero: ${@2} = {@3}\\cdot 10^{{@4}}$.",
  "Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.": "El diagrama muestra cuántos libros se prestaron en la biblioteca cada día.",
  "Dlhšia strana má ${@0} + {@1} = {@2}\\,\\text{cm}$.": "El lado más largo mide ${@0} + {@1} = {@2}\\,\\text{cm}$.",
  "Do vzorca $S = \\pi r^2$ si dosadil priemer. Najprv vypočítaj polomer, polovicu priemeru.": "En la fórmula $S = \\pi r^2$ has puesto el diámetro. Primero calcula el radio, la mitad del diámetro.",
  "Dosaď $x = {@0}$ do člena ${@1}$. Koľko je ${@2}$?": "Sustituye $x = {@0}$ en el término ${@1}$. ¿Cuánto es ${@2}$?",
  "Dosaď za obe premenné naraz, záporné čísla do zátvoriek.": "Sustituye las dos variables a la vez; los números negativos, entre paréntesis.",
  "Druhá mocnina $x^2$ znamená $x\\cdot x$, nie $2\\cdot x$.": "El cuadrado $x^2$ significa $x\\cdot x$, no $2\\cdot x$.",
  "Druhá mocnina ako štvorec, tretia mocnina ako kocka": "El cuadrado como un cuadrado y el cubo como un cubo",
  "Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.": "El cuadrado es el producto de dos factores iguales. Menos por menos da más.",
  "Druhá mocnina nie je dvojnásobok: umocniť na druhú znamená vynásobiť číslo samým sebou.": "El cuadrado no es el doble: elevar al cuadrado significa multiplicar el número por sí mismo.",
  "Druhá mocnina nie je dvojnásobok: umocniť znamená vynásobiť samým sebou.": "El cuadrado no es el doble: elevar al cuadrado significa multiplicar por sí mismo.",
  "Druhá strana je celý výraz $a + {@0}$, daj ju do zátvorky: násobí sa $a\\cdot(a + {@1})$.": "El otro lado es toda la expresión $a + {@0}$; ponla entre paréntesis: se multiplica $a\\cdot(a + {@1})$.",
  "Dvojnásobok": "El doble",
  "Exponent nie je počet číslic čísla, ale počet miest, o ktoré posunieš desatinnú čiarku.": "El exponente no es el número de cifras del número, sino el número de lugares que desplazas la coma decimal.",
  "Filip": "Hugo",
  "Hranol má dve podstavy (hornú a dolnú), obe treba započítať do povrchu.": "El prisma tiene dos bases (la de arriba y la de abajo), y hay que contar las dos en el área total.",
  "Hľadaj najvyšší stĺpec.": "Busca la barra más alta.",
  "Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.": "Busca el número no negativo cuyo cuadrado es el número que está bajo la raíz.",
  "Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.": "Busca el número que, multiplicado tres veces por sí mismo, da el volumen.",
  "Hľadáme číslo, ktorého tretia mocnina je {@0}: ${@1}^3 = {@2}$, teda $a = {@3}\\,\\text{cm}$.": "Buscamos el número cuyo cubo es {@0}: ${@1}^3 = {@2}$, así que $a = {@3}\\,\\text{cm}$.",
  "Jedna stena má obsah ${@0} : 6 = {@1}\\,\\text{cm}^2$, teda $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.": "Una cara tiene un área de ${@0} : 6 = {@1}\\,\\text{cm}^2$, así que $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.",
  "Jedna strana obdĺžnika je o {@0} cm dlhšia ako druhá. Obvod obdĺžnika je {@1} cm. Aká dlhá je {@2} strana (v cm)?": "Un lado de un rectángulo mide {@0} cm más que el otro. El perímetro del rectángulo es de {@1} cm. ¿Cuánto mide el lado {@2} (en cm)?",
  "K obom stranám pripočítame {@0}": "Sumamos {@0} a los dos miembros",
  "Každá stena je na kvádri dvakrát. Aký je povrch kvádra (v cm²)?": "Cada cara está dos veces en el ortoedro. ¿Cuál es el área total del ortoedro (en cm²)?",
  "Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.": "Multiplica cada término del primer paréntesis por cada término del segundo. Después agrupa los términos con $x$.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko.": "Cuando pasas un número al otro miembro de la ecuación, cámbiale el signo.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko. Na oboch stranách urob tú istú operáciu.": "Cuando pasas un número al otro miembro de la ecuación, cámbiale el signo. Haz la misma operación en los dos miembros.",
  "Kocka má 6 stien, každá je štvorec so stranou $a$.": "El cubo tiene 6 caras; cada una es un cuadrado de lado $a$.",
  "Kocka má 6 stien, nie 4. Nezabudni na hornú a dolnú stenu.": "El cubo tiene 6 caras, no 4. No olvides la cara de arriba y la de abajo.",
  "Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.": "El cubo tiene 6 caras cuadradas iguales: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.",
  "Kocka má objem ${@0}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?": "Un cubo tiene un volumen de ${@0}\\,\\text{cm}^3$. ¿Cuánto mide su arista (en cm)?",
  "Kocka má povrch ${@0}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?": "Un cubo tiene un área total de ${@0}\\,\\text{cm}^2$. ¿Cuánto mide su arista (en cm)?",
  "Koeficient ${@0}$ pri $x$ odstrániš delením, nie odčítaním: ${@1}x$ znamená ${@2}\\cdot x$.": "El coeficiente ${@0}$ de la $x$ se quita dividiendo, no restando: ${@1}x$ significa ${@2}\\cdot x$.",
  "Koľko je $R^2 - r^2$?": "¿Cuánto es $R^2 - r^2$?",
  "Koľko je $\\sqrt{{@0}}$?": "¿Cuánto es $\\sqrt{{@0}}$?",
  "Koľko je $r^2$?": "¿Cuánto es $r^2$?",
  "Koľko je ${@0}$?": "¿Cuánto es ${@0}$?",
  "Koľko je ${@0}^2$?": "¿Cuánto es ${@0}^2$?",
  "Koľko je ${@0}{@1}$?": "¿Cuánto es ${@0}{@1}$?",
  "Koľko je $|{@0}|$?": "¿Cuánto es $|{@0}|$?",
  "Koľko je v zátvorke: ${@0}{@1}$?": "¿Cuánto da el paréntesis: ${@0}{@1}$?",
  "Koľko je čísel?": "¿Cuántos números hay?",
  "Koľko kníh si požičali za celý týždeň?": "¿Cuántos libros se prestaron en toda la semana?",
  "Koľko rokov má {@0}?": "¿Cuántos años tiene {@0}?",
  "Koľko žiakov hlasovalo spolu?": "¿Cuántos alumnos votaron en total?",
  "Koľko žiakov odpovedalo spolu?": "¿Cuántos alumnos respondieron en total?",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Rovnica: $2x + 2(x + {@1}) = {@2}$, teda $4x + {@3} = {@4}$, $4x = {@5}$ a $x = {@6}$. {@7}": "El lado más corto es $x$ y el más largo, $x + {@0}$. Ecuación: $2x + 2(x + {@1}) = {@2}$, así que $4x + {@3} = {@4}$, $4x = {@5}$ y $x = {@6}$. {@7}",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Z rovnice $2x + 2(x + {@1}) = {@2}$ vypočítaj, koľko je $4x$.": "El lado más corto es $x$ y el más largo, $x + {@0}$. De la ecuación $2x + 2(x + {@1}) = {@2}$, calcula cuánto es $4x$.",
  "Kratšia strana má ${@0}\\,\\text{cm}$.": "El lado más corto mide ${@0}\\,\\text{cm}$.",
  "Kruh má {@0}. Vypočítaj jeho obsah v cm². {@1}": "Un círculo tiene {@0}. Calcula su área en cm². {@1}",
  "Kruh má {@0}. Vypočítaj jeho obvod v cm. {@1}": "Un círculo tiene {@0}. Calcula la longitud de su circunferencia en cm. {@1}",
  "Kruh so stredom, polomerom, priemerom a výsekom": "Círculo con centro, radio, diámetro y sector",
  "Kruhový diagram dopravy do školy": "Diagrama de sectores del transporte al colegio",
  "Ktoré ovocie dostalo najviac hlasov?": "¿Qué fruta obtuvo más votos?",
  "Ktorý výraz sa rovná ${@0}$?": "¿Qué expresión es igual a ${@0}$?",
  "Ktorý výraz zodpovedá opisu: <em>{@0}</em>?": "¿Qué expresión corresponde a la descripción <em>{@0}</em>?",
  "Ktorý šport je medzi žiakmi najobľúbenejší?": "¿Qué deporte es el favorito de los alumnos?",
  "Kváder má každú stenu dvakrát (hornú a dolnú, prednú a zadnú, ľavú a pravú). Súčet $ab + bc + ac$ ešte zdvojnásob.": "El ortoedro tiene cada cara dos veces (arriba y abajo, delante y detrás, izquierda y derecha). Todavía tienes que duplicar la suma $ab + bc + ac$.",
  "Kváder má rozmery $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.": "Un ortoedro mide $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Calcula su área total (en cm²) y su volumen (en cm³). Escríbelos separados por punto y coma.",
  "Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.": "El ortoedro tiene tres pares de caras iguales: $ab$, $bc$ y $ac$. El volumen es el producto de las tres dimensiones.",
  "Medián hľadaj až v usporiadanom zozname. Čísla najprv zoraď od najmenšieho po najväčšie.": "La mediana se busca en la lista ordenada. Primero ordena los números de menor a mayor.",
  "Medián je priemer týchto dvoch čísel. Koľko je?": "La mediana es la media de estos dos números. ¿Cuánto es?",
  "Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{{@0}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.": "¿Entre qué dos números naturales consecutivos está $\\sqrt{{@0}}$? Escribe el menor y el mayor separados por punto y coma.",
  "Množiny prirodzených, celých a racionálnych čísel": "Conjuntos de los números naturales, enteros y racionales",
  "Modus je hodnota, ktorá sa opakuje najčastejšie.": "La moda es el valor que más se repite.",
  "Modus nie je najväčšie číslo, ale hodnota, ktorá sa vyskytuje najčastejšie.": "La moda no es el número mayor, sino el valor que aparece más veces.",
  "Na polovicu sa delí len $x$, číslo {@0} sa odčíta až od polovice.": "Solo se divide entre dos la $x$; el número {@0} se resta después de la mitad.",
  "Na číselnej osi ležia čísla ${@0}$ a ${@1}$. Aká je ich vzdialenosť?": "En la recta numérica están los números ${@0}$ y ${@1}$. ¿A qué distancia están?",
  "Najmenšie číslo je {@0}.": "El número menor es {@0}.",
  "Najmenšie číslo označ $x$ a sčítaj všetky čísla. Rovnica má tvar ${@0}x + \\square = {@1}$. Aké číslo patrí do štvorčeka?": "Llama $x$ al número menor y suma todos los números. La ecuación tiene la forma ${@0}x + \\square = {@1}$. ¿Qué número va en el cuadrado?",
  "Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.": "Llama $x$ al número menor; los siguientes son $x + 1$, $x + 2$, … Súmalos e iguálalos a la suma.",
  "Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.": "Primero despeja la fracción y después multiplica los dos miembros por el denominador.",
  "Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.": "Primero quita el paréntesis y después resuelve como una ecuación normal.",
  "Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.": "Primero eleva a la potencia, después multiplica y al final suma. Pon el número negativo entre paréntesis.",
  "Najprv urči absolútne hodnoty oboch čísel (vzdialenosti od nuly, tie nie sú záporné) a až potom odčítaj.": "Primero halla los valores absolutos de los dos números (las distancias al cero, que no son negativas) y solo después resta.",
  "Najprv vypočítaj každú odmocninu zvlášť.": "Primero calcula cada raíz por separado.",
  "Najprv vypočítaj, čo je v zátvorke, potom násob.": "Primero calcula lo que hay dentro del paréntesis y después multiplica.",
  "Najvyšší stĺpec má hodnotu {@0} a patrí k možnosti „{@1}“. Táto hodnota je modus údajov.": "La barra más alta tiene el valor {@0} y corresponde a la opción «{@1}». Ese valor es la moda de los datos.",
  "Najväčšie číslo je $x + {@0} = {@1}$.": "El número mayor es $x + {@0} = {@1}$.",
  "Natália": "Natalia",
  "Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.": "Busca los dos cuadrados de números naturales entre los que está el número bajo la raíz.",
  "Násobiť treba číslo $x$, nie číslo {@0}.": "Hay que multiplicar el número $x$, no el número {@0}.",
  "Násobí sa celý súčet, preto ho treba dať do zátvorky. Bez zátvorky by sa násobilo len $x$.": "Se multiplica toda la suma, por eso hay que ponerla entre paréntesis. Sin paréntesis solo se multiplicaría la $x$.",
  "Násobí sa celý súčet, teda aj $x$, nielen číslo {@0}.": "Se multiplica toda la suma, es decir, también la $x$, no solo el número {@0}.",
  "Násobí sa len $x$, číslo {@0} sa odčíta až od {@1}. Zátvorka by znamenala {@2} celého rozdielu.": "Solo se multiplica la $x$; el número {@0} se resta después de {@1}. El paréntesis significaría {@2} de toda la diferencia.",
  "O koľko miest doľava treba posunúť desatinnú čiarku? To je exponent $n$.": "¿Cuántos lugares hacia la izquierda hay que desplazar la coma decimal? Ese es el exponente $n$.",
  "Obdĺžnik má strany dlhé $a$ a $a + {@0}$ centimetrov. Vypočítaj jeho {@1} pre $a = {@2}$.": "Un rectángulo tiene lados de $a$ y $a + {@0}$ centímetros. Calcula su {@1} para $a = {@2}$.",
  "Obdĺžnik so stranami a a a plus 3": "Rectángulo de lados a y a más 3",
  "Obe strany vydeľ číslom ${@0}$. Aké je $x$?": "Divide los dos miembros entre ${@0}$. ¿Cuánto vale $x$?",
  "Obe strany vynásob číslom {@0}. Aké je $x$?": "Multiplica los dos miembros por {@0}. ¿Cuánto vale $x$?",
  "Obe čísla ležia na tej istej strane nuly, preto ich vzdialenosti od nuly odčítaj, nesčítavaj.": "Los dos números están al mismo lado del cero, por eso sus distancias al cero se restan, no se suman.",
  "Objem kocky je $a^3$.": "El volumen del cubo es $a^3$.",
  "Objem nedelíš tromi. Hľadáš číslo, ktoré trikrát vynásobené samým sebou dá objem.": "El volumen no se divide entre tres. Buscas el número que, multiplicado tres veces por sí mismo, da el volumen.",
  "Obsah jednej steny je $a^2$, nie $a$. Stena je štvorec.": "El área de una cara es $a^2$, no $a$. La cara es un cuadrado.",
  "Obsah kruhu je $S = \\pi r^2$.": "El área del círculo es $S = \\pi r^2$.",
  "Obsah medzikružia nie je $\\pi(R - r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého: $\\pi R^2 - \\pi r^2$.": "El área de la corona circular no es $\\pi(R - r)^2$. Al área del círculo grande réstale la del pequeño: $\\pi R^2 - \\pi r^2$.",
  "Obsah obdĺžnika je súčin jeho strán.": "El área del rectángulo es el producto de sus lados.",
  "Obsah pravouhlého trojuholníka je polovica súčinu odvesien, nezabudni deliť dvoma.": "El área del triángulo rectángulo es la mitad del producto de los catetos; no olvides dividir entre dos.",
  "Obsahy kruhov treba odčítať, nie sčítať: malý kruh v strede chýba.": "Las áreas de los círculos hay que restarlas, no sumarlas: falta el círculo pequeño del centro.",
  "Obvod je $2\\pi r$, zabudol si na dvojku (alebo si dosadil polomer namiesto priemeru do $\\pi d$).": "La longitud de la circunferencia es $2\\pi r$; se te ha olvidado el dos (o has puesto el radio en lugar del diámetro en $\\pi d$).",
  "Obvod kruhu je $o = 2\\pi r = \\pi d$.": "La longitud de la circunferencia es $o = 2\\pi r = \\pi d$.",
  "Obvod kruhu je ${@0}\\,\\text{cm}$. Aký je jeho polomer v cm? {@1}": "La circunferencia mide ${@0}\\,\\text{cm}$. ¿Cuál es su radio en cm? {@1}",
  "Obvod nemôžeš len vydeliť štyrmi, strany obdĺžnika nie sú rovnako dlhé.": "El perímetro no se puede dividir sin más entre cuatro: los lados del rectángulo no son iguales.",
  "Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + {@0}$.": "El perímetro del rectángulo es $2a + 2b$; en lugar del otro lado pon $a + {@0}$.",
  "Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.": "El perímetro del rectángulo es $2a + 2b$. Llama $x$ al lado más corto.",
  "Od oboch strán odčítame {@0}": "Restamos {@0} a los dos miembros",
  "Od obsahu veľkého kruhu odčítaj obsah malého kruhu.": "Al área del círculo grande réstale el área del círculo pequeño.",
  "Od záporného čísla odčítavaš, posúvaš sa teda po číselnej osi ešte ďalej doľava od nuly.": "A un número negativo le restas, así que en la recta numérica te alejas todavía más del cero hacia la izquierda.",
  "Odmocnina nie je polovica čísla. Hľadaj číslo, ktoré vynásobené samým sebou dá {@0}.": "La raíz no es la mitad del número. Busca el número que, multiplicado por sí mismo, da {@0}.",
  "Odčítaj hodnoty dvoch stĺpcov.": "Resta los valores de las dos barras.",
  "Odčítaj získané absolútne hodnoty. Aký je výsledok?": "Resta los valores absolutos obtenidos. ¿Cuál es el resultado?",
  "Odčítaj získané čísla. Aký je výsledok?": "Resta los números obtenidos. ¿Cuál es el resultado?",
  "Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.": "Resta los números y toma el resultado sin signo. Si están a lados opuestos del cero, las distancias al cero se suman.",
  "Odčítanie nahraď pripočítaním opačného čísla.": "Sustituye la resta por la suma del opuesto.",
  "Odčítať záporné číslo znamená pripočítať opačné, kladné číslo: $-{@0} = +{@1}$.": "Restar un número negativo es sumar su opuesto, un número positivo: $-{@0} = +{@1}$.",
  "Odčítať číslo znamená pripočítať opačné číslo: ${@0} - {@1} = {@2} + {@3} = {@4}$.": "Restar un número es sumar su opuesto: ${@0} - {@1} = {@2} + {@3} = {@4}$.",
  "Opis zodpovedá výrazu ${@0}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.": "La descripción corresponde a la expresión ${@0}$. Al escribirla, empieza por el final de la frase: primero decide cuál es la operación «principal» (suma, diferencia, potencia…) y después sus partes.",
  "Osamostatni zlomok. Koľko je $\\frac{x}{{@0}}$?": "Despeja la fracción. ¿Cuánto es $\\frac{x}{{@0}}$?",
  "Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.": "La base es un triángulo rectángulo; su área es la mitad del producto de los catetos. La superficie lateral es el perímetro de la base por la altura.",
  "Podľa vzorca ${@0}$ pre $a = x$, $b = {@1}$: ${@2} = {@3}$.": "Según la fórmula ${@0}$ para $a = x$, $b = {@1}$: ${@2} = {@3}$.",
  "Polomer je polovica priemeru: $r = {@0}\\,\\text{cm}$.": "El radio es la mitad del diámetro: $r = {@0}\\,\\text{cm}$.",
  "Polovica čísla $x$ je $x$ delené dvoma, nie $2x$.": "La mitad de $x$ es $x$ dividido entre dos, no $2x$.",
  "Posledný člen $b^2$ je druhá mocnina, a tá je vždy kladná.": "El último término, $b^2$, es un cuadrado, y siempre es positivo.",
  "Posledný člen je druhá mocnina čísla {@0}, nie samotné číslo.": "El último término es el cuadrado del número {@0}, no el propio número.",
  "Posledný člen je súčin ${@0}\\cdot {@1}$, nie samotné číslo {@2}.": "El último término es el producto ${@0}\\cdot {@1}$, no el número {@2} solo.",
  "Použi $\\pi \\approx 3{,}14$.": "Usa $\\pi \\approx 3{,}14$.",
  "Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.": "Divide el área total entre seis: obtendrás el área de una cara. Después haz la raíz cuadrada.",
  "Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.": "Cuidado: en la fórmula $S = \\pi r^2$ va el radio, no el diámetro.",
  "Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.": "Cuidado: $(x + a)^2$ no es $x^2 + a^2$; falta el doble producto $2ax$.",
  "Počet čísel je nepárny ({@0}), medián je prostredné, {@1}. číslo: {@2}.": "Hay una cantidad impar de números ({@0}): la mediana es el número del medio, el que ocupa el lugar {@1}: {@2}.",
  "Počet čísel je párny ({@0}), medián je priemer {@1}. a {@2}. čísla: $\\frac{{@3} + {@4}}{2} = {@5}$.": "Hay una cantidad par de números ({@0}): la mediana es la media de los números que ocupan los lugares {@1} y {@2}: $\\frac{{@3} + {@4}}{2} = {@5}$.",
  "Počítaš obsah kruhu ($\\pi r^2$), úloha sa pýta na obvod.": "Estás calculando el área del círculo ($\\pi r^2$), y la tarea pregunta por la longitud de la circunferencia.",
  "Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.": "Imagina un desplazamiento por la recta numérica: un número positivo te mueve a la derecha y uno negativo, a la izquierda.",
  "Presuň členy s $x$ na ľavú stranu a spoj ich. Aký koeficient bude pri $x$?": "Pasa los términos con $x$ al miembro izquierdo y agrúpalos. ¿Qué coeficiente tendrá la $x$?",
  "Presuň členy s $x$ naľavo a čísla napravo. Na tvar $ax = b$: aké je $a$ a $b$? Zadaj ich oddelené bodkočiarkou.": "Pasa los términos con $x$ a la izquierda y los números a la derecha. En la forma $ax = b$: ¿cuánto valen $a$ y $b$? Escríbelos separados por punto y coma.",
  "Presuň čísla na pravú stranu a spoj ich. Aké číslo bude na pravej strane?": "Pasa los números al miembro derecho y agrúpalos. ¿Qué número quedará en el miembro derecho?",
  "Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.": "Pasa la fracción a número decimal. De dos números negativos, es mayor el que está más cerca del cero.",
  "Pri delení platí rovnaké pravidlo znamienok ako pri násobení.": "En la división se cumple la misma regla de los signos que en la multiplicación.",
  "Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.": "Para multiplicar fracciones no hace falta denominador común: multiplica numerador por numerador y denominador por denominador.",
  "Pri presune člena s $x$ na druhú stranu rovnice mu treba zmeniť znamienko.": "Al pasar un término con $x$ al otro miembro de la ecuación hay que cambiarle el signo.",
  "Pri presune čísla na druhú stranu rovnice mu treba zmeniť znamienko.": "Al pasar un número al otro miembro de la ecuación hay que cambiarle el signo.",
  "Pri párnom počte čísel sú v strede dve čísla. Medián je ich priemer.": "Con una cantidad par de números, en el medio hay dos números. La mediana es su media.",
  "Pri rozdiele záleží na poradí: najprv píšeš to, od čoho odčítavaš.": "En una diferencia importa el orden: primero escribes aquello de lo que restas.",
  "Pri roznásobení vzniknú dva členy s $x$: $x$ krát číslo z druhej zátvorky a číslo z prvej zátvorky krát $x$. Spoj ich. Aký je koeficient $p$ pri $x$?": "Al quitar los paréntesis salen dos términos con $x$: $x$ por el número del segundo paréntesis y el número del primer paréntesis por $x$. Agrúpalos. ¿Cuál es el coeficiente $p$ de la $x$?",
  "Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.": "Para sumar y restar fracciones necesitas un denominador común. No olvides los signos.",
  "Pri umocnení rozdielu nestačí umocniť každý člen zvlášť, chýba stredný člen $-2ab$.": "Al elevar al cuadrado una diferencia no basta con elevar cada término por separado; falta el término central $-2ab$.",
  "Pri umocnení súčtu nestačí umocniť každý člen zvlášť, chýba stredný člen $2ab$.": "Al elevar al cuadrado una suma no basta con elevar cada término por separado; falta el término central $2ab$.",
  "Pri záporných číslach nerozhoduje, ktoré má väčšiu absolútnu hodnotu: väčšie je to, ktoré je bližšie k nule.": "Con números negativos no decide cuál tiene mayor valor absoluto: es mayor el que está más cerca del cero.",
  "Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: ${@0} + {@1} = {@2} - {@3} = {@4}$.": "Sumar un número negativo es lo mismo que restar su valor absoluto: ${@0} + {@1} = {@2} - {@3} = {@4}$.",
  "Päťkrát": "Cinco veces",
  "Päťnásobok": "El quíntuple",
  "Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.": "Signos iguales dan un producto positivo; signos distintos, negativo.",
  "Rozdiel odmocnín nie je odmocnina z rozdielu. Najprv vypočítaj každú odmocninu zvlášť a až potom odčítaj.": "La diferencia de raíces no es la raíz de la diferencia. Primero calcula cada raíz por separado y solo después resta.",
  "Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.": "Decide qué operación se hace en último lugar. Si se multiplica o se eleva a una potencia toda una suma o diferencia, hace falta paréntesis.",
  "Rozmery prevedieme na decimetre: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.": "Pasamos las medidas a decímetros: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.",
  "Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.": "Pasa las medidas a decímetros, porque $1\\,\\text{dm}^3 = 1$ litro.",
  "Roznásob $(x{@0})(x{@1})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.": "Desarrolla $(x{@0})(x{@1})$ y escribe el resultado en la forma $x^2 + px + q$. Escribe $p$ y $q$ separados por punto y coma.",
  "Roznásob ${@0}({@1})$ (aj so znamienkom pred zátvorkou). Zadaj koeficient pri $x$ a samotné číslo.": "Desarrolla ${@0}({@1})$ (también con el signo de delante del paréntesis). Escribe el coeficiente de la $x$ y el término independiente.",
  "Roznásob ${@0}({@1})$. Zadaj koeficient pri $x$ a samotné číslo oddelené bodkočiarkou.": "Desarrolla ${@0}({@1})$. Escribe el coeficiente de la $x$ y el término independiente separados por punto y coma.",
  "Roznásob a zjednoduš ${@0}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Desarrolla y simplifica ${@0}$ hasta la forma $ax + b$. Escribe $a$ y $b$ separados por punto y coma.",
  "Roznásob zátvorku ${@0}(x{@1})$. Aké číslo (bez $x$) vznikne?": "Quita el paréntesis ${@0}(x{@1})$. ¿Qué número (sin $x$) sale?",
  "Roznásobíme: ${@0}{@1} = {@2}{@3}$. Členy s $x$ naľavo, čísla napravo: ${@4} = {@5}$, teda $x = {@6}$.": "Quitamos el paréntesis: ${@0}{@1} = {@2}{@3}$. Los términos con $x$ a la izquierda y los números a la derecha: ${@4} = {@5}$, así que $x = {@6}$.",
  "Roznásobíme: ${@0}{@1}{@2}$. Spojíme podobné členy: ${@3}$, teda $a = {@4}$, $b = {@5}$.": "Desarrollamos: ${@0}{@1}{@2}$. Agrupamos los términos semejantes: ${@3}$, así que $a = {@4}$, $b = {@5}$.",
  "Rozšír oba zlomky na menovateľ {@0} a {@1} ich čitatele. Aký čitateľ dostaneš?": "Amplifica las dos fracciones al denominador {@0} y {@1} sus numeradores. ¿Qué numerador obtienes?",
  "S – stred": "S – centro",
  "Sieť kvádra": "Desarrollo plano del ortoedro",
  "Spoj podobné členy. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Agrupa los términos semejantes. Escribe $a$ y $b$ separados por punto y coma.",
  "Spoločný menovateľ je {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.": "El denominador común es {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.",
  "Spolu je to {@0} rovnakých dielov: {@1} má jeden diel a {@2} {@3}. Súčet preto deľ číslom {@4}.": "En total son {@0} partes iguales: {@1} tiene una parte y {@2}, {@3}. Por eso divide la suma entre {@4}.",
  "Spolu majú {@0} {@1}, ale nie sú rovnako starí, preto súčet nemôžeš len rozdeliť na polovicu. Zohľadni rozdiel {@2} {@3}.": "Entre los dos tienen {@0} {@1}, pero no tienen la misma edad, así que no puedes dividir la suma entre dos sin más. Ten en cuenta la diferencia de {@2} {@3}.",
  "Stena je štvorec. Aká dlhá je jeho strana, teda hrana kocky (v cm)?": "La cara es un cuadrado. ¿Cuánto mide su lado, es decir, la arista del cubo (en cm)?",
  "Stredný člen je dvojnásobok súčinu, $2ab$, nie len $ab$.": "El término central es el doble del producto, $2ab$, no solo $ab$.",
  "Stĺpcový diagram známok z písomky": "Diagrama de barras de las notas de un examen",
  "Sumu, ktorú {@0} {@1}, označ $x$. „{@2} viac“ znamená {@3}-násobok.": "Llama $x$ a la cantidad que {@0} {@1}. «{@2} más» significa multiplicar por {@3}.",
  "Syn": "Su hijo",
  "Súčet je ${@0} = {@1}$, počet čísel je {@2}. Priemer: ${@3} : {@4} = {@5}$.": "La suma es ${@0} = {@1}$ y hay {@2} números. Media: ${@3} : {@4} = {@5}$.",
  "Súčet treba deliť počtom všetkých čísel. Spočítaj ich ešte raz.": "La suma hay que dividirla entre la cantidad de números. Cuéntalos otra vez.",
  "Súčet vydelený počtom čísel je ich priemer, nie hľadané číslo. Zostav rovnicu so všetkými číslami $x$, $x + 1$, …": "La suma dividida entre la cantidad de números es su media, no el número buscado. Plantea una ecuación con todos los números $x$, $x + 1$, …",
  "Súčet {@0} po sebe idúcich prirodzených čísel je {@1}. Ktoré z nich je {@2}?": "La suma de {@0} números naturales consecutivos es {@1}. ¿Cuál de ellos es el {@2}?",
  "Súčin $(+b)\\cdot(-b)$ je záporný, preto je pred $b^2$ mínus.": "El producto $(+b)\\cdot(-b)$ es negativo, por eso delante de $b^2$ hay un menos.",
  "Sčítaj hodnoty všetkých stĺpcov.": "Suma los valores de todas las barras.",
  "Sčítaj koeficienty všetkých členov s $x$. Aké je $a$?": "Suma los coeficientes de todos los términos con $x$. ¿Cuánto vale $a$?",
  "Sčítaj oba výsledky. Akú hodnotu má výraz?": "Suma los dos resultados. ¿Qué valor tiene la expresión?",
  "Sčítaj samotné čísla (bez $x$). Aké je $b$?": "Suma los números solos (sin $x$). ¿Cuánto vale $b$?",
  "Sčítaj všetky členy. Akú hodnotu má výraz?": "Suma todos los términos. ¿Qué valor tiene la expresión?",
  "Sčítaj všetky čísla a súčet vydeľ ich počtom.": "Suma todos los números y divide la suma entre la cantidad de números.",
  "Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.": "Suma por separado los coeficientes de la $x$ y los números solos. El signo que va delante de un término le pertenece.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, každú dĺžku teda započítaj dvakrát.": "Solo has sumado dos lados. El rectángulo tiene cuatro lados, así que cuenta cada longitud dos veces.",
  "Sčítame hodnoty všetkých stĺpcov: ${@0} = {@1}$.": "Sumamos los valores de todas las barras: ${@0} = {@1}$.",
  "To by bol výsledok $(x - b)^2$. Pri súčine súčtu a rozdielu sa stredné členy navzájom vyrušia.": "Ese sería el resultado de $(x - b)^2$. En el producto de una suma por una diferencia los términos centrales se anulan.",
  "To je výsledok súčinu $(a + b)(a - b)$. Pri druhej mocnine rozdielu je navyše stredný člen $-2ab$ a posledný člen je kladný.": "Ese es el resultado del producto $(a + b)(a - b)$. En el cuadrado de una diferencia hay además un término central $-2ab$, y el último término es positivo.",
  "Toto je aritmetický priemer. Medián je prostredná hodnota usporiadaných čísel.": "Esa es la media aritmética. La mediana es el valor central de los números ordenados.",
  "Toto je dĺžka druhej strany. Úloha sa pýta na {@0} stranu.": "Esa es la longitud del otro lado. La tarea pregunta por el lado {@0}.",
  "Toto je len plášť. K povrchu patria aj obe podstavy.": "Eso es solo la superficie lateral. El área total incluye también las dos bases.",
  "Toto je najmenšie z čísel, úloha sa pýta na najväčšie. Pripočítaj k nemu, o koľko je najväčšie číslo väčšie.": "Ese es el menor de los números, y la tarea pregunta por el mayor. Súmale cuánto mayor es el número mayor.",
  "Toto je najväčšie z čísel, úloha sa pýta na najmenšie.": "Ese es el mayor de los números, y la tarea pregunta por el menor.",
  "Toto je objem kocky ($a^3$). Povrch je súčet obsahov všetkých stien.": "Ese es el volumen del cubo ($a^3$). El área total es la suma de las áreas de todas las caras.",
  "Toto je obsah celého kruhu. Výsek je len jeho časť podľa veľkosti stredového uhla.": "Esa es el área del círculo entero. El sector es solo una parte, según el tamaño del ángulo central.",
  "Toto je obsah jednej steny. Hranu dostaneš, keď ho ešte odmocníš.": "Esa es el área de una cara. La arista la obtienes haciendo además la raíz cuadrada.",
  "Toto je obvod ($2\\pi r$), alebo si $r^2$ počítal ako $2r$. Obsah je $\\pi r^2 = \\pi\\cdot r\\cdot r$.": "Esa es la longitud de la circunferencia ($2\\pi r$), o has calculado $r^2$ como $2r$. El área es $\\pi r^2 = \\pi\\cdot r\\cdot r$.",
  "Toto je povrch kocky ($6a^2$). Objem je $a^3$.": "Esa es el área total del cubo ($6a^2$). El volumen es $a^3$.",
  "Toto je počet, koľkokrát sa najčastejšia hodnota opakuje. Modus je samotná hodnota.": "Eso es cuántas veces se repite el valor más frecuente. La moda es el propio valor.",
  "Toto je suma, ktorú {@0} {@1}. Úloha sa pýta, koľko {@2} {@3}.": "Esa es la cantidad que {@0} {@1}. La tarea pregunta cuánto {@2} {@3}.",
  "Toto je súčet čísel. Priemer dostaneš, keď súčet vydelíš počtom čísel.": "Esa es la suma de los números. La media se obtiene dividiendo la suma entre la cantidad de números.",
  "Toto je vek {@0}, úloha sa pýta na vek {@1}.": "Esa es la edad {@0}; la tarea pregunta por la edad {@1}.",
  "Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.": "El cubo de un número es el producto de tres factores iguales. Una potencia impar de un número negativo es negativa.",
  "Tretia mocnina nie je trojnásobok: číslo treba napísať trikrát ako činiteľ a vynásobiť.": "El cubo no es el triple: hay que escribir el número tres veces como factor y multiplicar.",
  "Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami ${@0}\\,\\text{cm}$ a ${@1}\\,\\text{cm}$ (prepona má ${@2}\\,\\text{cm}$) a výšku ${@3}\\,\\text{cm}$.": "Un prisma triangular tiene como base un triángulo rectángulo de catetos ${@0}\\,\\text{cm}$ y ${@1}\\,\\text{cm}$ (la hipotenusa mide ${@2}\\,\\text{cm}$) y una altura de ${@3}\\,\\text{cm}$.",
  "Trojnásobok": "El triple",
  "Uhol ${@0}^\\circ$ je $\\frac{{@1}}{360}$ plného uhla, teda výsek je {@2} kruhu: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.": "El ángulo de ${@0}^\\circ$ es $\\frac{{@1}}{360}$ del ángulo completo, así que el sector es {@2} del círculo: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.",
  "Umocniť treba celý rozdiel, nielen číslo $x$.": "Hay que elevar al cuadrado toda la diferencia, no solo el número $x$.",
  "Umocňuje sa celý rozdiel, nie každé číslo zvlášť. Rozdiel daj do zátvorky.": "Se eleva al cuadrado toda la diferencia, no cada número por separado. Pon la diferencia entre paréntesis.",
  "Umocňujeme celé číslo $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.": "Elevamos al cuadrado todo el número $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.",
  "Urči medián čísel {@0}.": "Halla la mediana de los números {@0}.",
  "Urči modus súboru údajov {@0}.": "Halla la moda del conjunto de datos {@0}.",
  "Usporiadame: {@0}. {@1}": "Ordenamos: {@0}. {@1}",
  "V ktorý deň si požičali najviac kníh?": "¿Qué día se prestaron más libros?",
  "V obvode je dlhšia strana dvakrát, preto aj rozdiel {@0} cm treba započítať dvakrát.": "En el perímetro el lado más largo aparece dos veces, por eso también la diferencia de {@0} cm hay que contarla dos veces.",
  "Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.": "Llama $x$ a la edad del más joven; la edad del mayor es $x$ más la diferencia. La suma de las dos edades es igual al número dado.",
  "Vek {@0} označ $x$. Z rovnice $x + (x + {@1}) = {@2}$ vypočítaj, koľko je $2x$.": "Llama $x$ a la edad {@0}. De la ecuación $x + (x + {@1}) = {@2}$, calcula cuánto es $2x$.",
  "Vek {@0} označíme $x$, vek {@1} je potom $x + {@2}$. Rovnica: $x + (x + {@3}) = {@4}$, teda $2x = {@5}$ a $x = {@6}$. {@7}": "Llamamos $x$ a la edad {@0}; la edad {@1} es entonces $x + {@2}$. Ecuación: $x + (x + {@3}) = {@4}$, así que $2x = {@5}$ y $x = {@6}$. {@7}",
  "Vezmi túto časť z obsahu celého kruhu. Aký je obsah výseku (v cm²)?": "Toma esa parte del área del círculo entero. ¿Cuál es el área del sector (en cm²)?",
  "Vnuk": "Su nieto",
  "Vnučka": "Su nieta",
  "Vo vzorci $o = 2\\pi r$ je polomer. Ak poznáš priemer, stačí $o = \\pi d$, priemer už nezdvojnásobuj.": "En la fórmula $o = 2\\pi r$ va el radio. Si conoces el diámetro, basta con $o = \\pi d$; no dupliques el diámetro.",
  "Vydeľ pravú stranu koeficientom pri $x$. Aké je $x$?": "Divide el miembro derecho entre el coeficiente de la $x$. ¿Cuánto vale $x$?",
  "Vydeľ súčet počtom čísel. Aký je priemer?": "Divide la suma entre la cantidad de números. ¿Cuál es la media?",
  "Vydeľ. Aké je $x$?": "Divide. ¿Cuánto vale $x$?",
  "Vynásob menovatele. Aký menovateľ dostaneš?": "Multiplica los denominadores. ¿Qué denominador obtienes?",
  "Vynásob samotné čísla z oboch zátvoriek. Aké je $q$?": "Multiplica los números solos de los dos paréntesis. ¿Cuánto vale $q$?",
  "Vynásob čitatele. Aký čitateľ dostaneš (pred krátením)?": "Multiplica los numeradores. ¿Qué numerador obtienes (antes de simplificar)?",
  "Vynásob číslom $3{,}14$. Aký je obsah kruhu (v cm²)?": "Multiplica por $3{,}14$. ¿Cuál es el área del círculo (en cm²)?",
  "Vynásob číslom $3{,}14$. Aký je obsah medzikružia (v cm²)?": "Multiplica por $3{,}14$. ¿Cuál es el área de la corona circular (en cm²)?",
  "Vypočítaj $\\sqrt{{@0}} - \\sqrt{{@1}}$.": "Calcula $\\sqrt{{@0}} - \\sqrt{{@1}}$.",
  "Vypočítaj $\\sqrt{{@0}}$.": "Calcula $\\sqrt{{@0}}$.",
  "Vypočítaj ${@0}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.": "Calcula ${@0}$. Escribe el resultado como fracción irreducible (p. ej., -5/6) o como número entero.",
  "Vypočítaj ${@0}^2$.": "Calcula ${@0}^2$.",
  "Vypočítaj ${@0}^3$.": "Calcula ${@0}^3$.",
  "Vypočítaj $|{@0}| - |{@1}|$.": "Calcula $|{@0}| - |{@1}|$.",
  "Vypočítaj aritmetický priemer čísel {@0}.": "Calcula la media aritmética de los números {@0}.",
  "Vypočítaj hodnotu výrazu ${@0}$ pre $x = {@1}$.": "Calcula el valor de la expresión ${@0}$ para $x = {@1}$.",
  "Vypočítaj hodnotu výrazu ${@0}(x{@1})$ pre $x = {@2}$.": "Calcula el valor de la expresión ${@0}(x{@1})$ para $x = {@2}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$ a $y = {@3}$.": "Calcula el valor de la expresión ${@0}{@1}$ para $x = {@2}$ e $y = {@3}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$.": "Calcula el valor de la expresión ${@0}{@1}$ para $x = {@2}$.",
  "Vypočítaj objem kocky s hranou ${@0}\\,\\text{cm}$ (v cm³).": "Calcula el volumen de un cubo de arista ${@0}\\,\\text{cm}$ (en cm³).",
  "Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.": "Calcula el área del círculo entero y toma de ella la misma parte que el ángulo del sector es de $360^\\circ$.",
  "Vypočítaj obsah kruhového výseku s polomerom $r = {@0}\\,\\text{cm}$ a stredovým uhlom ${@1}^\\circ$ (v cm²). {@2}": "Calcula el área de un sector circular de radio $r = {@0}\\,\\text{cm}$ y ángulo central de ${@1}^\\circ$ (en cm²). {@2}",
  "Vypočítaj obsah medzikružia s polomermi $R = {@0}\\,\\text{cm}$ a $r = {@1}\\,\\text{cm}$ (v cm²). {@2}": "Calcula el área de una corona circular de radios $R = {@0}\\,\\text{cm}$ y $r = {@1}\\,\\text{cm}$ (en cm²). {@2}",
  "Vypočítaj obsah obdĺžnika $a\\cdot b$ (v cm²).": "Calcula el área del rectángulo $a\\cdot b$ (en cm²).",
  "Vypočítaj obsahy troch rôznych stien $ab$, $bc$ a $ac$ a sčítaj ich (v cm²).": "Calcula las áreas de las tres caras distintas $ab$, $bc$ y $ac$ y súmalas (en cm²).",
  "Vypočítaj obvod obdĺžnika $2a + 2b$ (v cm).": "Calcula el perímetro del rectángulo $2a + 2b$ (en cm).",
  "Vypočítaj povrch kocky s hranou ${@0}\\,\\text{cm}$ (v cm²).": "Calcula el área total de un cubo de arista ${@0}\\,\\text{cm}$ (en cm²).",
  "Vypočítal si $2x$, teda dvojnásobok hľadaného veku. Ešte vydeľ dvoma.": "Has calculado $2x$, es decir, el doble de la edad buscada. Todavía tienes que dividir entre dos.",
  "Vypočítal si obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Has calculado el área. El perímetro es la suma de las longitudes de los cuatro lados.",
  "Vypočítal si obvod. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Has calculado el perímetro. El área del rectángulo es el producto de las longitudes de sus lados.",
  "Vyrieš rovnicu $\\frac{x}{{@0}}{@1} = {@2}$.": "Resuelve la ecuación $\\frac{x}{{@0}}{@1} = {@2}$.",
  "Vyrieš rovnicu ${@0}(x{@1}) = {@2}{@3}$.": "Resuelve la ecuación ${@0}(x{@1}) = {@2}{@3}$.",
  "Vyrieš rovnicu ${@0}{@1} = {@2}{@3}$.": "Resuelve la ecuación ${@0}{@1} = {@2}{@3}$.",
  "Vyrieš rovnicu. Aké je $x$ (najmenšie číslo)?": "Resuelve la ecuación. ¿Cuánto vale $x$ (el número menor)?",
  "Vyrieš rovnicu. Koľko eur {@0} {@1}?": "Resuelve la ecuación. ¿Cuántos euros {@0} {@1}?",
  "Vzal si časť z obvodu ($2\\pi r$), to je dĺžka oblúka. Pri obsahu výseku vychádzaj z obsahu kruhu $\\pi r^2$.": "Has tomado una parte de la longitud de la circunferencia ($2\\pi r$), que es la longitud del arco. Para el área del sector parte del área del círculo, $\\pi r^2$.",
  "Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|{@0} - {@1}| = |{@2}| = {@3}$.": "La distancia entre dos números es el valor absoluto de su diferencia: $|{@0} - {@1}| = |{@2}| = {@3}$.",
  "Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.": "Divide la fórmula $o = 2\\pi r$ entre $2\\pi \\approx 6{,}28$.",
  "Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo": "Balanza en equilibrio: dos bolsitas x y tres pesas a la izquierda, nueve pesas a la derecha",
  "Výsledok zo zátvorky vynásob číslom ${@0}$. Akú hodnotu má výraz?": "Multiplica el resultado del paréntesis por ${@0}$. ¿Qué valor tiene la expresión?",
  "Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.": "Fíjate en si el menos está dentro del paréntesis. Solo se eleva lo que está directamente bajo el exponente.",
  "Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.": "De $o = 2\\pi r$ despejamos $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.",
  "Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.": "Sustituye la $x$ por el número; si es negativo, ponlo entre paréntesis.",
  "Zamenil si čísla: násobí sa číslom {@0}, pripočítava sa {@1}.": "Has intercambiado los números: se multiplica por {@0} y se suma {@1}.",
  "Zapíš výsledok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Escribe el resultado $\\frac{{@0}}{{@1}}$ como fracción irreducible (o como número entero).",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Escribe la fracción $\\frac{{@0}}{{@1}}$ como fracción irreducible (o como número entero).",
  "Zapíš číslo ${@0}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.": "Escribe el número ${@0}$ en la forma $a\\cdot 10^n$, donde $1 \\le a &lt; 10$. Escribe $a$ y $n$ separados por punto y coma.",
  "Zbav sa čísla ${@0}$ na ľavej strane, aby ostalo len ${@1}x$. Aké číslo bude na pravej strane?": "Quita el número ${@0}$ del miembro izquierdo para que quede solo ${@1}x$. ¿Qué número quedará en el miembro derecho?",
  "Zjednoduš výraz ${@0}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.": "Simplifica la expresión ${@0}$ hasta la forma $ax + b$. Escribe los números $a$ y $b$ separados por punto y coma.",
  "Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Las fracciones no se restan restando por un lado los numeradores y por otro los denominadores. Primero redúcelas a común denominador.",
  "Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Las fracciones no se suman sumando por un lado los numeradores y por otro los denominadores. Primero redúcelas a común denominador.",
  "Zlomok $\\frac{x}{{@0}}$ odstrániš násobením číslom {@1}, nie delením.": "La fracción $\\frac{x}{{@0}}$ se quita multiplicando por {@1}, no dividiendo.",
  "Zlomok prevedieme na desatinné číslo: ${@0} = {@1}$. Porovnávame ${@2}$ a ${@3}$, preto ${@4} {@5} {@6}$.": "Pasamos la fracción a número decimal: ${@0} = {@1}$. Comparamos ${@2}$ y ${@3}$, por eso ${@4} {@5} {@6}$.",
  "Zápis ${@0}$ znamená súčin čísla ${@1}$ a premennej $x$, nie súčet. Dosadené číslo daj do zátvorky a vynásob.": "La expresión ${@0}$ significa el producto del número ${@1}$ por la variable $x$, no la suma. Pon el número sustituido entre paréntesis y multiplica.",
  "Záporné číslo pred zátvorkou mení znamienko každého člena v zátvorke, aj čísla na konci.": "Un número negativo delante del paréntesis cambia el signo de todos los términos del paréntesis, también del número del final.",
  "Záporné číslo pri umocňovaní daj do zátvorky: $({@0})^2$ je kladné číslo.": "Al elevar un número negativo, ponlo entre paréntesis: $({@0})^2$ es un número positivo.",
  "Zátvorka by znamenala, že {@0}-krát berieš celý súčet. Tu sa najprv vezme {@1} čísla $x$ a až k nemu sa pripočíta {@2}.": "El paréntesis significaría que tomas {@0} veces toda la suma. Aquí primero se toma {@1} de $x$ y solo después se le suma {@2}.",
  "a $x + 2$": "y $x + 2$",
  "autobusom 30 %": "en autobús 30 %",
  "babka": "la abuela",
  "babky": "de la abuela",
  "banán": "plátano",
  "beh": "carrera",
  "d = 2r – priemer": "d = 2r – diámetro",
  "dedka": "del abuelo",
  "dedko": "el abuelo",
  "dlhšia": "más largo",
  "dlhšiu": "más largo",
  "druhá mocnina rozdielu čísla $x$ a čísla {@0}": "el cuadrado de la diferencia entre $x$ y {@0}",
  "dvojnásobku": "el doble",
  "dvojnásobok": "el doble",
  "futbal": "fútbol",
  "hokej": "hockey",
  "hruška": "pera",
  "jahoda": "fresa",
  "k – kružnica": "k – circunferencia",
  "kratšia": "más corto",
  "kratšiu": "más corto",
  "mama": "mamá",
  "mamy": "de mamá",
  "miest": "lugares",
  "na bicykli 20 %": "en bicicleta 20 %",
  "napr. -2; 8": "p. ej., -2; 8",
  "napr. 4; 5": "p. ej., 4; 5",
  "napr. 6; -9": "p. ej., 6; -9",
  "objem (v cm³)": "volumen (en cm³)",
  "obsah (v cm²)": "área (en cm²)",
  "obvod (v cm)": "perímetro (en cm)",
  "otca": "de papá",
  "otec": "papá",
  "pešo 50 %": "a pie 50 %",
  "plávanie": "natación",
  "podstava": "base",
  "polomer $r = {@0}\\,\\text{cm}$": "radio $r = {@0}\\,\\text{cm}$",
  "povrch (v cm²)": "área total (en cm²)",
  "povrch; objem": "área total; volumen",
  "priemer $d = {@0}\\,\\text{cm}$": "diámetro $d = {@0}\\,\\text{cm}$",
  "päťnásobku": "el quíntuple",
  "päťnásobok": "el quíntuple",
  "r – polomer": "r – radio",
  "rovnaké, výsledok je kladný": "iguales, así que el resultado es positivo",
  "rozdiel {@0} čísla $x$ a čísla {@1}": "la diferencia entre {@0} de $x$ y {@1}",
  "rôzne, výsledok je záporný": "distintos, así que el resultado es negativo",
  "slivka": "ciruela",
  "stĺpcový diagram": "diagrama de barras",
  "sčítaj": "suma",
  "tenis": "tenis",
  "tri štvrtiny": "tres cuartos",
  "troch": "tres",
  "trojnásobku": "el triple",
  "trojnásobok": "el triple",
  "ušetril": "ha ahorrado",
  "ušetrila": "ha ahorrado",
  "vnuk": "su nieto",
  "vnuka": "de su nieto",
  "vnučka": "su nieta",
  "vnučky": "de su nieta",
  "výsek s uhlom α": "sector de ángulo α",
  "{@0} O koľko je stĺpec „{@1}“ vyšší ako stĺpec „{@2}“? {@3}": "{@0} ¿Cuánto más alta es la barra «{@1}» que la barra «{@2}»? {@3}",
  "{@0} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.": "{@0} Calcula su área total (en cm²) y su volumen (en cm³), sepáralos con punto y coma.",
  "{@0} Vypočítaj jeho {@1}.": "{@0} Calcula su {@1}.",
  "{@0} a {@1} ušetrili spolu {@2} €. {@3} {@4} {@5} viac ako {@6}. Koľko eur {@7} {@8}?": "{@0} y {@1} han ahorrado en total {@2} €. {@3} {@4} {@5} más que {@6}. ¿Cuántos euros {@7} {@8}?",
  "{@0} je o {@1} {@2} {@3} ako {@4}. Spolu majú {@5} {@6}. Koľko rokov má {@7}?": "{@0} es {@1} {@2} {@3} que {@4}. Entre los dos tienen {@5} {@6}. ¿Cuántos años tiene {@7}?",
  "{@0} má $x$ eur, {@1} ${@2}x$ eur. Koľko $x$ je to spolu, teda aké číslo patrí do rovnice $\\square\\, x = {@3}$?": "{@0} tiene $x$ euros y {@1}, ${@2}x$ euros. ¿Cuántas $x$ son en total, es decir, qué número va en la ecuación $\\square\\, x = {@3}$?",
  "{@0} má ${@1} + {@2} = {@3}$ {@4}.": "{@0} tiene ${@1} + {@2} = {@3}$ {@4}.",
  "{@0} má {@1} {@2}.": "{@0} tiene {@1} {@2}.",
  "{@0} súčtu čísla $x$ a čísla {@1}": "{@0} de la suma de $x$ y {@1}",
  "{@0} znamená násobiť číslom {@1}, nie {@2} pripočítať.": "{@0} significa multiplicar por {@1}, no sumar {@2}.",
  "{@0}: $x$, {@1}: ${@2}x$. Rovnica: $x + {@3}x = {@4}$, teda ${@5}x = {@6}$ a $x = {@7}$. {@8} {@9} {@10} €.": "{@0}: $x$, {@1}: ${@2}x$. Ecuación: $x + {@3}x = {@4}$, así que ${@5}x = {@6}$ y $x = {@7}$. {@8} {@9} {@10} €.",
  "{@0}: ${@1}x = {@2}$. Obe strany vydelíme číslom ${@3}$: $x = {@4}$.": "{@0}: ${@1}x = {@2}$. Dividimos los dos miembros entre ${@3}$: $x = {@4}$.",
  "Čitateľ násobíme čitateľom a menovateľ menovateľom: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.": "Multiplicamos numerador por numerador y denominador por denominador: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.",
  "Člen ${@0}$ má koeficient ${@1}$, nezabudni ho započítať.": "El término ${@0}$ tiene coeficiente ${@1}$; no olvides contarlo.",
  "Členy s $x$ dáme naľavo, čísla napravo: ${@0}{@1} = {@2}{@3}$, teda ${@4} = {@5}$ a $x = {@6}$.": "Ponemos los términos con $x$ a la izquierda y los números a la derecha: ${@0}{@1} = {@2}{@3}$, así que ${@4} = {@5}$ y $x = {@6}$.",
  "Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.": "Pasa los términos con $x$ a un miembro y los números al otro. Al final divide entre el coeficiente de la $x$.",
  "Členy s $x$: ${@0}{@1}{@2} = {@3}$. Čísla: ${@4}{@5} = {@6}$. Výsledok: ${@7}$, teda $a = {@8}$, $b = {@9}$.": "Términos con $x$: ${@0}{@1}{@2} = {@3}$. Números: ${@4}{@5} = {@6}$. Resultado: ${@7}$, así que $a = {@8}$, $b = {@9}$.",
  "Čísel je {@0}. Koľké v poradí je prostredné číslo?": "Hay {@0} números. ¿Qué lugar ocupa el número del medio?",
  "Čísla ležia na opačných stranách nuly, preto sa ich vzdialenosti od nuly sčítajú, neodčítajú.": "Los números están a lados opuestos del cero, por eso sus distancias al cero se suman, no se restan.",
  "Čísla majú rôzne znamienka, preto ich absolútne hodnoty nesčítavaj, ale menšiu odčítaj od väčšej. Znamienko výsledku určí číslo s väčšou absolútnou hodnotou.": "Los números tienen signos distintos, así que no sumes sus valores absolutos: resta el menor del mayor. El signo del resultado lo decide el número de mayor valor absoluto.",
  "Čísla najprv usporiadaj od najmenšieho po najväčšie.": "Primero ordena los números de menor a mayor.",
  "Čísla označíme $x$, $x + 1${@0}. Rovnica: ${@1}x + {@2} = {@3}$, teda ${@4}x = {@5}$ a $x = {@6}$. {@7}": "Llamamos a los números $x$, $x + 1${@0}. Ecuación: ${@1}x + {@2} = {@3}$, así que ${@4}x = {@5}$ y $x = {@6}$. {@7}",
  "Čísla usporiadaj od najmenšieho. Aké je {@0}. číslo v poradí?": "Ordena los números de menor a mayor. ¿Cuál es el número que ocupa el lugar {@0}?",
  "Čísla usporiadaj od najmenšieho. Aké číslo stojí na tomto mieste? To je medián.": "Ordena los números de menor a mayor. ¿Qué número está en ese lugar? Esa es la mediana.",
  "Číslo $a$ musí spĺňať $1 \\le a &lt; 10$, pred desatinnou čiarkou má teda jedinú číslicu.": "El número $a$ tiene que cumplir $1 \\le a &lt; 10$, así que delante de la coma decimal tiene una sola cifra.",
  "Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.": "El número $a$ tiene una sola cifra delante de la coma decimal. El exponente $n$ indica cuántos lugares desplazas la coma.",
  "Číslo $q$ vznikne vynásobením samotných čísel zo zátvoriek, nie ich sčítaním.": "El número $q$ se obtiene multiplicando los números solos de los paréntesis, no sumándolos.",
  "Číslo ${@0}$ násobí celý obsah zátvorky, nielen $x$.": "El número ${@0}$ multiplica todo el contenido del paréntesis, no solo la $x$.",
  "Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{{@0}}$ a vydeľ 10.": "El número bajo la raíz tiene dos cifras decimales; el resultado tendrá una: prueba con $\\sqrt{{@0}}$ y divide entre 10.",
  "Číslo pred zátvorkou násobí oba členy v zátvorke, nielen $x$, ale aj samotné číslo.": "El número de delante del paréntesis multiplica los dos términos del paréntesis: no solo la $x$, también el número.",
  "Číslo {@0} sa vyskytuje trikrát, ostatné čísla len raz. Modus je {@1}.": "El número {@0} aparece tres veces; los demás, solo una vez. La moda es {@1}.",
  "Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.": "Multiplica por el número de delante del paréntesis cada término de dentro, con su signo. Después agrupa los términos semejantes.",
  "Číslom pred zátvorkou vynásob každý člen v zátvorke, aj samotné číslo na konci.": "Multiplica por el número de delante del paréntesis cada término de dentro, también el número del final.",
  "číslo o {@0} menšie ako polovica čísla $x$": "el número que es {@0} menos que la mitad de $x$",
  "číslo o {@0} väčšie ako {@1} čísla $x$": "el número que es {@0} más que {@1} de $x$",
  "Štvorec so stranou a plus b rozdelený na štyri časti": "Cuadrado de lado a más b dividido en cuatro partes",
  "Štvornásobok": "El cuádruple",
  "štvornásobku": "el cuádruple",
  "štvornásobok": "el cuádruple",
  "štyroch": "cuatro",
  "Žiaci hlasovali o obľúbenom ovocí.": "Los alumnos votaron su fruta favorita.",
  "Žiaci uviedli svoj obľúbený šport.": "Los alumnos dijeron su deporte favorito.",
  "„O {@0} menšie“ znamená od polovice odčítať {@1}, poradie je opačné.": "«{@0} menos» significa restar {@1} a la mitad; el orden es el contrario.",
  "„O {@0} väčšie“ znamená {@1} pripočítať, nie odčítať.": "«{@0} más» significa sumar {@1}, no restarlo.",
  "ℕ – prirodzené": "ℕ – naturales",
  "ℚ – racionálne čísla": "ℚ – números racionales",
  "ℤ – celé čísla": "ℤ – números enteros"
 }
});
