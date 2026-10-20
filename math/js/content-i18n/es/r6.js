/* Español: preklad js/rocniky/r6.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/r6/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "r6-desatinne": {
   "title": "Números decimales y operaciones con ellos",
   "summary": "Escribir, comparar y redondear números decimales; suma, resta, multiplicación y división.",
   "theory": [
    "<p>En un <strong>número decimal</strong>, la coma decimal separa la parte entera de la parte decimal. En el número $2{,}75$ hay 2 unidades, 7 décimas y 5 centésimas,\n       es decir, $2{,}75 = 2 + \\frac{7}{10} + \\frac{5}{100}$. Los ceros al final de la parte decimal se pueden añadir o quitar: $2{,}4 = 2{,}40$.</p>",
    {
     "fig": "r6-desatinna-os",
     "caption": "Tramo de la recta numérica del 2 al 3. Entre dos números enteros hay 10 décimas y 100 centésimas."
    },
    "<p><strong>Suma y resta:</strong> escribimos los números uno debajo del otro de modo que <em>las comas queden alineadas</em>, y completamos los lugares que faltan con ceros.\n       <strong>Multiplicación:</strong> multiplicamos como si fueran enteros y el resultado tiene tantas cifras decimales como los dos factores juntos: $1{,}2\\cdot 0{,}3 = 0{,}36$.\n       Multiplicar por 10, 100, 1 000 desplaza la coma 1, 2, 3 lugares a la derecha; dividir, a la izquierda.</p>",
    "<p><strong>División entre un número natural:</strong> dividimos como siempre y ponemos la coma en el cociente en el momento en que la pasamos en el dividendo: $7{,}5 : 3 = 2{,}5$.\n       <strong>Redondeo:</strong> miramos la cifra justo después del lugar al que redondeamos. Si es de 0 a 4, redondeamos hacia abajo; si es de 5 a 9, hacia arriba: $3{,}462 \\doteq 3{,}5$ (a las décimas).</p>"
   ],
   "examples": [
    {
     "task": "Calcula $12{,}5 + 3{,}78$.",
     "steps": [
      "Alineamos las comas: $12{,}50 + 3{,}78$.",
      "Sumamos por órdenes: $12{,}50 + 3{,}78 = 16{,}28$.",
      "<strong>Resultado: 16,28</strong>"
     ]
    },
    {
     "task": "Calcula $2{,}4\\cdot 1{,}5$.",
     "steps": [
      "Sin comas: $24\\cdot 15 = 360$.",
      "Los factores tienen en total 2 cifras decimales, así que el resultado es $3{,}60 = 3{,}6$.",
      "<strong>Resultado: 3,6</strong>"
     ]
    }
   ]
  },
  "r6-zlomky": {
   "title": "Fracciones y sus usos básicos",
   "summary": "Qué es una fracción, parte de un todo, simplificar y amplificar, paso a decimal, comparar.",
   "theory": [
    "<p>Una <strong>fracción</strong> $\\frac{a}{b}$ describe una parte de un todo: dividimos el todo en $b$ partes iguales (<em>denominador</em>) y tomamos $a$ de ellas (<em>numerador</em>).\n       La raya de fracción significa división: $\\frac{3}{4} = 3 : 4 = 0{,}75$.</p>",
    {
     "fig": "r6-zlomky-kruhy",
     "caption": "Partes coloreadas de los círculos: un medio, tres cuartos y tres octavos."
    },
    "<p><strong>Fracción de un número:</strong> $\\frac{3}{4}$ de 20 se calcula dividiendo 20 entre el denominador y multiplicando por el numerador: $20 : 4 = 5$, $5\\cdot 3 = 15$.</p>",
    "<p><strong>Amplificar y simplificar:</strong> si multiplicamos o dividimos el numerador y el denominador por el mismo número (distinto de cero), el valor de la fracción no cambia:\n       $\\frac{12}{18} = \\frac{2}{3}$ (simplificamos entre seis). Una fracción es <em>irreducible</em> cuando ya no se puede simplificar.\n       Dos fracciones se comparan más fácilmente cuando las reducimos a común denominador.</p>"
   ],
   "examples": [
    {
     "task": "¿Cuánto es $\\frac{2}{5}$ de 35?",
     "steps": [
      "Un quinto: $35 : 5 = 7$.",
      "Dos quintos: $7\\cdot 2 = 14$.",
      "<strong>Resultado: 14</strong>"
     ]
    },
    {
     "task": "Compara las fracciones $\\frac{3}{4}$ y $\\frac{5}{6}$.",
     "steps": [
      "El denominador común es 12: $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{5}{6} = \\frac{10}{12}$.",
      "$9 &lt; 10$, por eso $\\frac{3}{4} &lt; \\frac{5}{6}$."
     ]
    }
   ]
  },
  "r6-delitelnost": {
   "title": "Divisibilidad, números primos y compuestos",
   "summary": "Divisor y múltiplo, criterios de divisibilidad, números primos, números compuestos y descomposición en factores primos.",
   "theory": [
    "<p>Un número $a$ es <strong>divisible</strong> entre $b$ si la división $a : b$ no deja resto. Entonces $b$ es un <em>divisor</em> de $a$ y $a$ es un <em>múltiplo</em> de $b$.\n       Por ejemplo, los divisores del 12 son 1, 2, 3, 4, 6 y 12.</p>",
    "<p><strong>Criterios de divisibilidad.</strong> Un número es divisible entre</p>\n       <ul><li><strong>2</strong> si su última cifra es par (0, 2, 4, 6, 8),</li>\n       <li><strong>3</strong> si la suma de sus cifras es divisible entre 3; <strong>9</strong> si la suma de sus cifras es divisible entre 9,</li>\n       <li><strong>4</strong> si el número formado por sus dos últimas cifras es divisible entre 4,</li>\n       <li><strong>5</strong> si termina en 0 o 5; <strong>10</strong> si termina en 0,</li>\n       <li><strong>6</strong> si es divisible a la vez entre 2 y entre 3.</li></ul>",
    "<p>Un <strong>número primo</strong> es un número natural que tiene exactamente dos divisores: el 1 y él mismo (2, 3, 5, 7, 11, …).\n       Un <strong>número compuesto</strong> tiene más de dos divisores (4, 6, 8, 9, …). El 1 no es ni primo ni compuesto.\n       Todo número compuesto se puede descomponer en un producto de números primos (<em>factores primos</em>): $60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$.</p>",
    {
     "fig": "r6-eratosten",
     "caption": "Criba de Eratóstenes: de los números del 1 al 60 tachamos los múltiplos de 2, 3, 5 y 7 (excepto ellos mismos). Quedan los números primos, que están coloreados."
    }
   ],
   "examples": [
    {
     "task": "¿Es el número 4 716 divisible entre 3? ¿Y entre 4?",
     "steps": [
      "Suma de las cifras: $4 + 7 + 1 + 6 = 18$, y 18 es divisible entre 3, así que <strong>sí</strong>.",
      "Las dos últimas cifras forman 16 y $16 : 4 = 4$, así que también es divisible entre 4: <strong>sí</strong>."
     ]
    },
    {
     "task": "Descompón el número 90 en factores primos.",
     "steps": [
      "$90 : 2 = 45$, $45 : 3 = 15$, $15 : 3 = 5$, y 5 es primo.",
      "<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>"
     ]
    }
   ]
  },
  "r6-nsd-nsn": {
   "title": "Máximo común divisor y mínimo común múltiplo",
   "summary": "M.c.d. y m.c.m. mediante la descomposición en factores primos, números primos entre sí y problemas.",
   "theory": [
    "<p>El <strong>máximo común divisor</strong> de los números $a$, $b$ (lo escribimos $D(a, b)$ o m.c.d.) es el mayor número entre el que son divisibles los dos números.\n       El <strong>mínimo común múltiplo</strong> ($n(a, b)$ o m.c.m.) es el menor número distinto de cero que es múltiplo de los dos números.</p>",
    {
     "fig": "r6-strom",
     "caption": "Descomposición de 60 y 84 en factores primos. Los comunes son 2, 2 y 3, así que m.c.d.(60, 84) = 12; m.c.m.(60, 84) = 2 · 2 · 3 · 5 · 7 = 420."
    },
    "<p><strong>Método de la descomposición:</strong> descomponemos los dos números en factores primos. El m.c.d. es el producto de los factores primos <em>comunes</em> (cada uno tantas veces como aparece en ambos).\n       El m.c.m. es el producto de <em>todos</em> los factores primos que aparecen al menos en uno de los números (cada uno tantas veces como aparece en el número donde más se repite).\n       Comprobación útil: $D(a, b)\\cdot n(a, b) = a\\cdot b$.</p>",
    "<p>Los números cuyo m.c.d. es 1 se llaman <strong>primos entre sí</strong> (por ejemplo, 8 y 15). Si tienen un divisor común mayor que 1, <strong>no son primos entre sí</strong>.\n       El m.c.d. se usa cuando repartimos algo en partes iguales lo más grandes posible; el m.c.m., cuando buscamos cuándo vuelven a coincidir cosas que se repiten.</p>"
   ],
   "examples": [
    {
     "task": "Halla $D(24, 36)$ y $n(24, 36)$.",
     "steps": [
      "$24 = 2^3\\cdot 3$, $36 = 2^2\\cdot 3^2$.",
      "M.c.d.: $2^2\\cdot 3 = 12$.",
      "M.c.m.: $2^3\\cdot 3^2 = 72$.",
      "Comprobación: $12\\cdot 72 = 864 = 24\\cdot 36$."
     ]
    },
    {
     "task": "Dos semáforos se ponen en verde a la vez. El primero cambia de color en un ciclo de 40 segundos y el segundo, de 60 segundos. ¿Dentro de cuántos segundos volverán a estar a la vez al principio del ciclo?",
     "steps": [
      "Buscamos el mínimo común múltiplo: $n(40, 60)$.",
      "$40 = 2^3\\cdot 5$, $60 = 2^2\\cdot 3\\cdot 5$, así que $n = 2^3\\cdot 3\\cdot 5 = 120$.",
      "<strong>Dentro de 120 segundos (2 minutos).</strong>"
     ]
    }
   ]
  },
  "r6-cele": {
   "title": "Números enteros y números negativos",
   "summary": "Números positivos y negativos en la recta numérica, opuesto, valor absoluto, comparación, suma y resta.",
   "theory": [
    "<p>Los <strong>números enteros</strong> son $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ Los números negativos se usan, por ejemplo, para temperaturas bajo cero ($-5\\,{}^\\circ\\mathrm{C}$),\n       para deudas o para alturas por debajo del nivel del mar. El cero no es ni positivo ni negativo.</p>",
    {
     "fig": "r6-os-cele",
     "caption": "Los números 4 y −4 son opuestos: están a la misma distancia del cero, en lados contrarios. Los dos tienen valor absoluto 4."
    },
    "<p>El <strong>opuesto</strong> de un número $a$ es $-a$ (el de 4 es $-4$; el de $-7$ es 7). El <strong>valor absoluto</strong> $|a|$ es la distancia del número al cero: $|-6| = 6$, $|6| = 6$.\n       <strong>Comparar:</strong> en la recta numérica es mayor el número que está más a la derecha. Por eso $-2 &gt; -5$ y todo número negativo es menor que 0.</p>",
    "<p><strong>Suma y resta:</strong> sumar un número positivo significa moverse a la derecha en la recta; sumar uno negativo, a la izquierda.\n       Restar un número es lo mismo que sumar su opuesto: $3 - (-4) = 3 + 4 = 7$, $-2 - 5 = -2 + (-5) = -7$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $-8 + 3$.",
     "steps": [
      "Empezamos en $-8$ y nos movemos 3 a la derecha.",
      "<strong>$-8 + 3 = -5$</strong>"
     ]
    },
    {
     "task": "Por la mañana había $-6\\,{}^\\circ\\mathrm{C}$ y al mediodía, $2\\,{}^\\circ\\mathrm{C}$. ¿Cuántos grados subió la temperatura?",
     "steps": [
      "Diferencia: $2 - (-6) = 2 + 6 = 8$.",
      "<strong>La temperatura subió 8 °C.</strong>"
     ]
    }
   ]
  },
  "r6-uhly": {
   "title": "El ángulo y su medida",
   "summary": "Tipos de ángulos, transportador, grados y minutos, ángulos adyacentes y opuestos por el vértice, cálculos con ángulos.",
   "theory": [
    "<p>Un <strong>ángulo</strong> está formado por dos semirrectas (<em>lados</em>) con un origen común (<em>vértice</em>). La amplitud de un ángulo se mide en <strong>grados</strong>;\n       un grado tiene 60 minutos: $1^\\circ = 60'$. Los ángulos se nombran con letras griegas $\\alpha, \\beta, \\gamma$ o con la notación $\\angle AVB$.</p>",
    {
     "fig": "r6-uhly-druhy",
     "caption": "El ángulo agudo mide menos de 90°, el recto mide 90°, el obtuso está entre 90° y 180° y el llano mide 180°."
    },
    "<p><strong>Medir con el transportador:</strong> colocamos el centro del transportador en el vértice del ángulo y el cero sobre uno de los lados, y leemos en la escala por dónde pasa el otro lado.</p>",
    {
     "fig": "r6-uhlomer",
     "caption": "Transportador colocado sobre un ángulo de 50°."
    },
    "<p>Los <strong>ángulos adyacentes</strong> tienen un lado común y los otros dos lados forman una recta; suman $180^\\circ$.\n       Los <strong>ángulos opuestos por el vértice</strong> se forman enfrentados al cortarse dos rectas y son iguales.\n       Al sumar ángulos sumamos por separado los grados y los minutos; 60 minutos se cambian por 1 grado.</p>"
   ],
   "examples": [
    {
     "task": "El ángulo $\\alpha$ mide $48^\\circ$. ¿Cuánto mide su ángulo adyacente?",
     "steps": [
      "Los ángulos adyacentes suman $180^\\circ$.",
      "$180^\\circ - 48^\\circ = 132^\\circ$.",
      "<strong>El ángulo adyacente mide 132°.</strong>"
     ]
    },
    {
     "task": "Suma $35^\\circ\\,40' + 27^\\circ\\,35'$.",
     "steps": [
      "Grados: $35 + 27 = 62$; minutos: $40 + 35 = 75$.",
      "$75' = 1^\\circ\\,15'$, así que en total $63^\\circ\\,15'$."
     ]
    }
   ]
  },
  "r6-trojuholniky": {
   "title": "Los triángulos y sus propiedades",
   "summary": "Suma de los ángulos de un triángulo, tipos de triángulos según sus lados y ángulos, desigualdad triangular.",
   "theory": [
    "<p>El <strong>triángulo</strong> $ABC$ tiene tres vértices, tres lados $a = |BC|$, $b = |AC|$, $c = |AB|$ y tres ángulos interiores $\\alpha, \\beta, \\gamma$.\n       La <strong>suma de los ángulos interiores</strong> de cualquier triángulo es $\\alpha + \\beta + \\gamma = 180^\\circ$.</p>",
    {
     "fig": "r6-trojuholniky",
     "caption": "Arriba, la clasificación según los lados (las rayitas marcan los lados iguales); abajo, según los ángulos."
    },
    "<p><strong>Según sus lados:</strong> escaleno (todos los lados distintos), isósceles (dos lados iguales; los ángulos de la base son iguales),\n       equilátero (todos los lados iguales, cada ángulo mide $60^\\circ$).\n       <strong>Según sus ángulos:</strong> acutángulo (todos los ángulos agudos), rectángulo (un ángulo recto), obtusángulo (un ángulo obtuso).</p>",
    "<p><strong>Desigualdad triangular:</strong> la suma de las longitudes de dos lados cualesquiera siempre es mayor que la longitud del tercero.\n       Basta comprobar que los dos lados más cortos juntos son más largos que el más largo. Por ejemplo, con lados de 3 cm, 4 cm y 8 cm no se puede construir un triángulo, porque $3 + 4 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "En un triángulo, $\\alpha = 52^\\circ$ y $\\beta = 71^\\circ$. Calcula $\\gamma$.",
     "steps": [
      "$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$.",
      "<strong>$\\gamma = 57^\\circ$</strong>"
     ]
    },
    {
     "task": "¿Se puede construir un triángulo con lados de 5 cm, 6 cm y 10 cm?",
     "steps": [
      "Los dos lados más cortos: $5 + 6 = 11$.",
      "$11 &gt; 10$, la desigualdad se cumple.",
      "<strong>Sí, se puede.</strong>"
     ]
    }
   ]
  },
  "r6-obvod-obsah": {
   "title": "Perímetro y área del cuadrado y el rectángulo",
   "summary": "Fórmulas del perímetro y el área, cálculo del lado que falta, unidades de superficie y su conversión.",
   "theory": [
    "<p>El <strong>perímetro</strong> es la longitud del contorno de una figura; se mide en unidades de longitud (mm, cm, m). El <strong>área</strong> indica cuántos cuadraditos\n       de 1 unidad de lado caben en la figura; se mide en unidades de superficie ($\\text{mm}^2$, $\\text{cm}^2$, $\\text{m}^2$).</p>",
    {
     "fig": "r6-obdlznik-siet",
     "caption": "En un rectángulo de 5 cm × 3 cm caben 3 filas de 5 cuadraditos de 1 cm², en total 15 cm²."
    },
    "<p><strong>Rectángulo</strong> de lados $a$, $b$: $o = 2\\cdot(a + b)$, $S = a\\cdot b$.\n       <strong>Cuadrado</strong> de lado $a$: $o = 4\\cdot a$, $S = a\\cdot a = a^2$.\n       Si conocemos el área y un lado del rectángulo, el otro se obtiene dividiendo: $b = S : a$.</p>",
    "<p><strong>Unidades de superficie:</strong> $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$, $1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$, $1\\,\\text{m}^2 = 100\\,\\text{dm}^2$.\n       En las unidades de superficie la equivalencia es 100, no 10, porque un cuadrado de 1 cm de lado contiene $10\\cdot 10$ cuadraditos de 1 mm de lado.</p>"
   ],
   "examples": [
    {
     "task": "Un jardín tiene forma de rectángulo de 14 m × 9 m. ¿Cuántos metros de valla hacen falta para cercarlo y cuál es su área?",
     "steps": [
      "Perímetro: $o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$.",
      "Área: $S = 14\\cdot 9 = 126\\,\\text{m}^2$.",
      "<strong>Hacen falta 46 m de valla; el jardín mide 126 m².</strong>"
     ]
    },
    {
     "task": "Un cuadrado tiene 36 cm de perímetro. ¿Cuál es su área?",
     "steps": [
      "Lado: $a = 36 : 4 = 9\\,\\text{cm}$.",
      "$S = 9\\cdot 9 = 81\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r6-osova": {
   "title": "Simetría axial",
   "summary": "Imagen de un punto y de una figura en una simetría axial, figuras simétricas y sus ejes.",
   "theory": [
    "<p>La <strong>simetría axial</strong> de eje $o$ asigna a cada punto $A$ su <em>imagen</em> $A'$ de modo que el segmento $AA'$ es perpendicular al eje\n       y el eje lo divide por la mitad. Así, el punto $A$ y su imagen están a la misma distancia del eje, cada uno a un lado. Los puntos del eje son su propia imagen.</p>",
    {
     "fig": "r6-osova",
     "caption": "La figura azul y su imagen (verde) respecto al eje o. El punto A está 4 cuadraditos a la izquierda del eje y su imagen A′, 4 cuadraditos a la derecha."
    },
    "<p>La imagen de una figura se construye hallando las imágenes de sus vértices y uniéndolas. La imagen tiene la misma forma y el mismo tamaño que la figura original; solo está «dada la vuelta», como en un espejo.</p>",
    "<p>Una figura es <strong>simétrica</strong> si existe una recta respecto a la cual es su propia imagen (al doblar el papel por ella, las dos mitades coinciden).\n       Esa recta se llama <em>eje de simetría</em>. El cuadrado tiene 4 ejes, el rectángulo 2, el triángulo equilátero 3, el isósceles 1 y el círculo, infinitos.</p>"
   ],
   "examples": [
    {
     "task": "El eje $o$ es una recta vertical en la columna 6. El punto $A$ está en la columna 2. ¿En qué columna está su imagen?",
     "steps": [
      "El punto $A$ está a $6 - 2 = 4$ columnas del eje.",
      "La imagen está 4 columnas al otro lado: $6 + 4 = 10$.",
      "<strong>La imagen está en la columna 10.</strong>"
     ]
    },
    {
     "task": "¿Cuántos ejes de simetría tiene un rectángulo que no es un cuadrado?",
     "steps": [
      "Un eje pasa por los puntos medios de dos lados opuestos; hay dos así.",
      "La diagonal no es un eje: al doblar, las mitades no coinciden.",
      "<strong>2 ejes.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, preto delíme stom: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.": "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, por eso dividimos entre cien: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.",
  "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, preto ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.": "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, por eso ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.",
  "$1^\\circ = 60'$, preto ${@0}^\\circ = {@1}'$ a spolu ${@2}' + {@3}' = {@4}'$.": "$1^\\circ = 60'$, por eso ${@0}^\\circ = {@1}'$ y en total ${@2}' + {@3}' = {@4}'$.",
  "$S = a\\cdot b$, preto $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.": "$S = a\\cdot b$, por eso $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.",
  "${@0} &gt; {@1}$, trojuholník sa zostrojiť dá.": "${@0} &gt; {@1}$, el triángulo se puede construir.",
  "${@0} &lt; {@1}$, trojuholník sa zostrojiť nedá.": "${@0} &lt; {@1}$, el triángulo no se puede construir.",
  "${@0} + {@1} = {@2}$ (posun o {@3} doprava).": "${@0} + {@1} = {@2}$ (desplazamiento de {@3} hacia la derecha).",
  "${@0} - {@1} = {@2}$ (posun o {@3} doľava).": "${@0} - {@1} = {@2}$ (desplazamiento de {@3} hacia la izquierda).",
  "${@0} : 60 = {@1}$, zvyšok {@2}. Teda ${@3}' = {@4}$.": "${@0} : 60 = {@1}$, resto {@2}. Así que ${@3}' = {@4}$.",
  "${@0} = {@1}$ a ${@2} = {@3}$ nemajú spoločný prvočiniteľ, $D({@4}, {@5}) = 1$. Sú nesúdeliteľné.": "${@0} = {@1}$ y ${@2} = {@3}$ no tienen ningún factor primo común, $D({@4}, {@5}) = 1$. Son primos entre sí.",
  "${@0} = {@1}$, ${@2} = {@3}$. NSD je súčin spoločných prvočiniteľov: $D({@4}, {@5}) = {@6}{@7}$.": "${@0} = {@1}$, ${@2} = {@3}$. El m.c.d. es el producto de los factores primos comunes: $D({@4}, {@5}) = {@6}{@7}$.",
  "${@0} = {@1}\\cdot {@2}$, teda okrem 1 a {@3} má aj deliteľ {@4}. Je to zložené číslo.": "${@0} = {@1}\\cdot {@2}$, así que además de 1 y {@3} tiene el divisor {@4}. Es un número compuesto.",
  "${@0} {@1} {@2} = {@3}$. Večer bolo {@4} °C.": "${@0} {@1} {@2} = {@3}$. Por la tarde había {@4} °C.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda súčet je ${@4} + {@5} = {@6}$.": "$|{@0}| = {@1}$ y $|{@2}| = {@3}$, así que la suma es ${@4} + {@5} = {@6}$.",
  "4 dieliky": "4 divisiones",
  "Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.": "El valor absoluto es la distancia al cero, por eso nunca es negativo.",
  "Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.": "El valor absoluto nunca es negativo. Primero halla la distancia de cada número al cero y solo después suma.",
  "Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.": "Si hay 60 minutos o más, cambia 60 minutos por 1 grado.",
  "Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.": "Si la suma de los dos lados más cortos es igual al lado más largo, los lados quedarían sobre una misma recta y no se forma un triángulo.",
  "Aká dlhá je strana štvorca (v cm)?": "¿Cuánto mide el lado del cuadrado (en cm)?",
  "Aké je číslo opačné k číslu {@0}?": "¿Cuál es el opuesto del número {@0}?",
  "Aké je číslo {@0}?": "¿Cómo es el número {@0}?",
  "Aký bude čitateľ rozšíreného zlomku?": "¿Cuál será el numerador de la fracción amplificada?",
  "Aký je najmenší spoločný násobok čísel {@0} a {@1}?": "¿Cuál es el mínimo común múltiplo de {@0} y {@1}?",
  "Aký je najväčší spoločný deliteľ čísel {@0} a {@1}?": "¿Cuál es el máximo común divisor de {@0} y {@1}?",
  "Aký je obsah štvorca (v cm²)?": "¿Cuál es el área del cuadrado (en cm²)?",
  "Aký je obvod (v {@0})?": "¿Cuál es el perímetro (en {@0})?",
  "Aký je obvod štvorca (v cm)?": "¿Cuál es el perímetro del cuadrado (en cm)?",
  "Aký je súčet dvoch susedných strán?": "¿Cuánto suman dos lados contiguos?",
  "Aký je súčet známych číslic?": "¿Cuánto suman las cifras conocidas?",
  "Aký je uhol s veľkosťou ${@0}^\\circ$?": "¿Cómo es un ángulo de ${@0}^\\circ$?",
  "Aký veľký je jeden uhol pri základni?": "¿Cuánto mide cada ángulo de la base?",
  "Akým číslom treba rozšíriť zlomok $\\frac{{@0}}{{@1}}$, aby bol v menovateli {@2}?": "¿Por qué número hay que amplificar la fracción $\\frac{{@0}}{{@1}}$ para que el denominador sea {@2}?",
  "Bod $A$ je od osi vzdialený $|{@0} - {@1}| = {@2}$ {@3}. Obraz je rovnako ďaleko na druhej strane osi: ${@4} {@5} {@6} = {@7}$.": "El punto $A$ está a $|{@0} - {@1}| = {@2}$ {@3} del eje. La imagen está a la misma distancia al otro lado del eje: ${@4} {@5} {@6} = {@7}$.",
  "Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.": "No puedes multiplicar por separado la parte entera y la decimal: las décimas pasan a las unidades. Multiplica los números sin la coma y después coloca la coma.",
  "Ciferný súčet je {@0}, je deliteľný 3.": "La suma de las cifras es {@0}, es divisible entre 3.",
  "Ciferný súčet je {@0}, je deliteľný 9.": "La suma de las cifras es {@0}, es divisible entre 9.",
  "Ciferný súčet je {@0}, nie je deliteľný 3.": "La suma de las cifras es {@0}, no es divisible entre 3.",
  "Ciferný súčet je {@0}, nie je deliteľný 9.": "La suma de las cifras es {@0}, no es divisible entre 9.",
  "Delitele čísla {@0} sú {@1}. Je ich {@2}.": "Los divisores de {@0} son {@1}. Hay {@2}.",
  "Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.": "El divisor 1 lo tienen todos los números. No son primos entre sí los números que tienen un divisor común mayor que 1.",
  "Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: ${@0} : {@1} = {@2}$. Skúška: ${@3}\\cdot {@4} = {@5}$.": "Dividimos como con los números enteros y escribimos la coma en el cociente cuando la pasamos en el dividendo: ${@0} : {@1} = {@2}$. Comprobación: ${@3}\\cdot {@4} = {@5}$.",
  "Delíme postupne prvočíslami: ${@0}$. Teda ${@1} = {@2}{@3}$.": "Dividimos sucesivamente entre números primos: ${@0}$. Así que ${@1} = {@2}{@3}$.",
  "Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.": "Las comas decimales tienen que estar una debajo de otra. Completa con ceros los lugares que falten.",
  "Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.": "Divide empezando por el orden más alto. Cuando pases la coma decimal del dividendo, escribe también la coma en el resultado.",
  "Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.": "Divide el número entre el menor número primo posible (2, 3, 5, 7, …) y sigue con el cociente hasta llegar a 1.",
  "Doplň správny znak: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$": "Pon el signo correcto: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$",
  "Dopočítaj tretí uhol a pozri sa na najväčší z nich.": "Calcula el tercer ángulo y fíjate en el mayor de ellos.",
  "Druhy trojuholníkov podľa strán a podľa uhlov": "Tipos de triángulos según sus lados y según sus ángulos",
  "Dve kratšie strany: ${@0} + {@1} = {@2}$, najdlhšia je {@3}.": "Los dos lados más cortos: ${@0} + {@1} = {@2}$; el más largo es {@3}.",
  "Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.": "Dos lados son iguales, el triángulo es isósceles.",
  "Dve stuhy merajú {@0} cm a {@1} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?": "Dos cintas miden {@0} cm y {@1} cm. Queremos cortarlas sin que sobre nada en trozos iguales y lo más largos posible (en centímetros enteros). ¿Cuántos centímetros medirá cada trozo?",
  "Dá sa zostrojiť trojuholník so stranami {@0} cm, {@1} cm a {@2} cm?": "¿Se puede construir un triángulo con lados de {@0} cm, {@1} cm y {@2} cm?",
  "Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?": "La longitud del trozo tiene que ser divisor de las dos longitudes. ¿Cuál es el mayor divisor común?",
  "Dĺžka kúska musí deliť {@0} aj {@1} a má byť čo najväčšia, hľadáme $D({@2}, {@3})$.": "La longitud del trozo tiene que dividir a {@0} y a {@1} y ser lo mayor posible: buscamos $D({@2}, {@3})$.",
  "Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …": "Busca parejas de números cuyo producto sea el número dado: 1 y el propio número, después 2 y …",
  "Hľadáme najmenší spoločný násobok: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Linky odídu znova naraz o {@8} minút, teda o {@9}:{@10}.": "Buscamos el mínimo común múltiplo: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Las líneas volverán a salir a la vez dentro de {@8} minutos, es decir, a las {@9}:{@10}.",
  "Hľadáme číslo, ktoré vynásobené samo sebou dá {@0}: $a = {@1}\\,\\text{cm}$. Obvod: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.": "Buscamos el número que multiplicado por sí mismo da {@0}: $a = {@1}\\,\\text{cm}$. Perímetro: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.",
  "Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.": "Solo el triángulo equilátero tiene 3 ejes. El isósceles solo tiene dos lados iguales.",
  "Je menší ako 90°, preto je ostrý.": "Es menor que 90°, por eso es agudo.",
  "Je párne a ciferný súčet {@0} je deliteľný 3.": "Es par y la suma de sus cifras, {@0}, es divisible entre 3.",
  "Je párne a ciferný súčet {@0} nie je deliteľný 3.": "Es par, pero la suma de sus cifras, {@0}, no es divisible entre 3.",
  "Je veľké tlačené písmeno <strong style=\"font-size:1.6em\">{@0}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?": "¿Tiene simetría axial la letra mayúscula <strong style=\"font-size:1.6em\">{@0}</strong> (en su forma simple, sin remates)?",
  "Je väčší ako 90° a menší ako 180°, preto je tupý.": "Es mayor que 90° y menor que 180°, por eso es obtuso.",
  "Je číslo {@0} deliteľné číslom {@1}?": "¿Es el número {@0} divisible entre {@1}?",
  "Jeden kúsok bude merať {@0} cm.": "Cada trozo medirá {@0} cm.",
  "Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.": "Un grado tiene 60 minutos, no 100: divide el número de minutos entre sesenta.",
  "Jeden stupeň má 60 minút, nie 100.": "Un grado tiene 60 minutos, no 100.",
  "Jeden stupeň má 60 minút.": "Un grado tiene 60 minutos.",
  "Kontrola: NSD · nsn = {@0} · {@1}.": "Comprobación: m.c.d. · m.c.m. = {@0} · {@1}.",
  "Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.": "El romboide no tiene ningún eje de simetría. Al doblarlo por cualquier recta no coincide consigo mismo.",
  "Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.": "El rombo tiene 2 ejes de simetría: sus dos diagonales.",
  "Koľko celých stupňov je v ${@0}'$?": "¿Cuántos grados enteros hay en ${@0}'$?",
  "Koľko deliteľov má číslo {@0}?": "¿Cuántos divisores tiene el número {@0}?",
  "Koľko desatinných miest majú činitele ${@0}$ a ${@1}$ spolu?": "¿Cuántas cifras decimales tienen en total los factores ${@0}$ y ${@1}$?",
  "Koľko je $\\frac{1}{{@0}}$ z čísla {@1}?": "¿Cuánto es $\\frac{1}{{@0}}$ de {@1}?",
  "Koľko je $\\frac{{@0}}{{@1}}$ z čísla {@2}?": "¿Cuánto es $\\frac{{@0}}{{@1}}$ de {@2}?",
  "Koľko je polovica obvodu, teda $a + b$ (v cm)?": "¿Cuánto es la mitad del perímetro, es decir, $a + b$ (en cm)?",
  "Koľko minút je ${@0}$?": "¿Cuántos minutos son ${@0}$?",
  "Koľko minút je ${@0}^\\circ$?": "¿Cuántos minutos son ${@0}^\\circ$?",
  "Koľko minút zostane?": "¿Cuántos minutos quedan?",
  "Koľko osí súmernosti má {@0}?": "¿Cuántos ejes de simetría tiene el {@0}?",
  "Koľko riadkov je bod A vzdialený od osi?": "¿A cuántas filas del eje está el punto A?",
  "Koľko stupňov majú spolu oba uhly pri základni?": "¿Cuántos grados suman los dos ángulos de la base?",
  "Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?": "¿Cuántos grados suman los ángulos $\\alpha$ y $\\beta$?",
  "Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?": "¿Cuántos grados quedan después de restar (no olvides el grado que has pedido prestado)?",
  "Koľko stupňov zostáva do súčtu uhlov v trojuholníku?": "¿Cuántos grados faltan para la suma de los ángulos del triángulo?",
  "Koľko stĺpcov je bod A vzdialený od osi?": "¿A cuántas columnas del eje está el punto A?",
  "Koľkokrát sa 60 zmestí do počtu minút?": "¿Cuántas veces cabe 60 en el número de minutos?",
  "Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.": "El círculo tiene infinitos ejes de simetría: cualquier recta que pase por su centro.",
  "Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy": "Círculos divididos en partes: un medio, tres cuartos, tres octavos",
  "Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.": "Has simplificado bien, pero la fracción todavía no es irreducible: el numerador y el denominador todavía se pueden dividir por un mismo número.",
  "Ktorá číslica stojí v čísle ${@0}$ hneď za miestom {@1}?": "¿Qué cifra está en el número ${@0}$ justo después del lugar de las {@1}?",
  "Ktoré číslo krát samo sebou dá obsah? To je strana.": "¿Qué número multiplicado por sí mismo da el área? Ese es el lado.",
  "Ktoré číslo vynásobené samo sebou dá {@0}?": "¿Qué número multiplicado por sí mismo da {@0}?",
  "Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo ${@0}$ bolo deliteľné {@1}?": "¿Qué cifra, la menor posible, hay que escribir en lugar de $\\square$ para que el número ${@0}$ sea divisible entre {@1}?",
  "Ktorú najmenšiu číslicu treba pripočítať k {@0}, aby bol súčet deliteľný {@1}?": "¿Qué cifra, la menor posible, hay que sumar a {@0} para que la suma sea divisible entre {@1}?",
  "Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.": "Con esta longitud los trozos sí se podrían cortar sin que sobre nada, pero no son los más largos posibles.",
  "Medzi susednými plošnými jednotkami je prevodový vzťah 100.": "Entre unidades de superficie vecinas la equivalencia es 100.",
  "Meranie uhla uhlomerom: uhol 50 stupňov": "Medir un ángulo con el transportador: ángulo de 50 grados",
  "Minút je málo, preto zameníme 1 stupeň: ${@0} = {@1}$. Potom ${@2} - {@3} = {@4}$ a ${@5} - {@6} = {@7}$, výsledok je ${@8}$.": "Hay pocos minutos, así que cambiamos 1 grado: ${@0} = {@1}$. Después ${@2} - {@3} = {@4}$ y ${@5} - {@6} = {@7}$, el resultado es ${@8}$.",
  "Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?": "Hay pocos minutos: cambia 1 grado por 60 minutos. ¿Cuántos minutos tendrá entonces el primer ángulo?",
  "Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.": "No puede haber 60 minutos o más. Cambia 60 minutos por 1 grado.",
  "Má 180°, ramená tvoria priamku, je priamy.": "Mide 180°, sus lados forman una recta: es llano.",
  "Má presne 90°, je pravý.": "Mide exactamente 90°: es recto.",
  "NSD; nsn": "m.c.d.; m.c.m.",
  "Na deliteľnosť 6 treba oboje.": "Para la divisibilidad entre 6 hacen falta las dos cosas.",
  "Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.": "En la recta numérica el número mayor está a la derecha. Todo número negativo es menor que cero y que cualquier número positivo.",
  "Na číselnej osi leží číslo {@0} viac vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "En la recta numérica el número {@0} está más a la derecha, es mayor. Por eso ${@1} {@2} {@3}$.",
  "Najnižšia nočná teplota bola {@0} °C, najvyššia denná {@1} °C. O koľko stupňov bolo cez deň teplejšie?": "La temperatura mínima de la noche fue de {@0} °C y la máxima del día, de {@1} °C. ¿Cuántos grados más hizo durante el día?",
  "Najprv jedna časť: ${@0} : {@1} = {@2}$. Potom {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.": "Primero una parte: ${@0} : {@1} = {@2}$. Después {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.",
  "Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).": "Primero calcula el lado a partir del perímetro (el cuadrado tiene 4 lados iguales).",
  "Najväčší spoločný deliteľ čísel {@0} a {@1} je {@2}. Krátime ním: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.": "El máximo común divisor de {@0} y {@1} es {@2}. Simplificamos por él: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.",
  "Nezabudni, že deliteľom je vždy aj 1 a samotné číslo {@0}.": "No olvides que 1 y el propio número {@0} siempre son divisores.",
  "Nie je párne a ciferný súčet {@0} je deliteľný 3.": "No es par, pero la suma de sus cifras, {@0}, es divisible entre 3.",
  "Nie je párne a ciferný súčet {@0} nie je deliteľný 3.": "No es par y la suma de sus cifras, {@0}, no es divisible entre 3.",
  "Nie. Písmeno {@0} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.": "No. La letra {@0} no tiene eje de simetría vertical ni horizontal: al doblarla, las mitades no coinciden.",
  "Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.": "Busca el mayor número entre el que se puedan dividir el numerador y el denominador.",
  "Násobíme bez čiarok: ${@0}\\cdot {@1} = {@2}$. Činitele majú spolu {@3} {@4}, preto ${@5}\\cdot {@6} = {@7}$.": "Multiplicamos sin comas: ${@0}\\cdot {@1} = {@2}$. Los factores tienen en total {@3} {@4}, por eso ${@5}\\cdot {@6} = {@7}$.",
  "O koľko stupňov bolo cez deň teplejšie?": "¿Cuántos grados más hizo durante el día?",
  "O koľko stupňov stúpne teplota z 0 °C na {@0} °C?": "¿Cuántos grados sube la temperatura de 0 °C a {@0} °C?",
  "O koľko stupňov stúpne teplota z {@0} °C na 0 °C?": "¿Cuántos grados sube la temperatura de {@0} °C a 0 °C?",
  "Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.": "El rectángulo (que no es un cuadrado) tiene 2 ejes de simetría, que unen los puntos medios de lados opuestos. Las diagonales no son ejes.",
  "Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²": "Rectángulo de 5 cm por 3 cm dividido en cuadraditos de 1 cm²",
  "Obdĺžnik má obsah ${@0}\\,\\text{cm}^2$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Un rectángulo tiene un área de ${@0}\\,\\text{cm}^2$ y un lado de ${@1}\\,\\text{cm}$. ¿Cuánto mide el otro lado (en cm)?",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².": "Un rectángulo tiene lados $a = {@0}\\,\\text{cm}$ y $b = {@1}\\,\\text{cm}$. Calcula su área en cm².",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.": "Un rectángulo tiene lados $a = {@0}\\,\\text{cm}$ y $b = {@1}\\,\\text{cm}$. Calcula su perímetro en cm.",
  "Obe čísla sú deliteľné {@0}, teda $D({@1}, {@2}) = {@3} &gt; 1$. Sú súdeliteľné.": "Los dos números son divisibles entre {@0}, así que $D({@1}, {@2}) = {@3} &gt; 1$. No son primos entre sí.",
  "Obsah je súčin strán, druhú stranu teda dostaneš delením.": "El área es el producto de los lados, así que el otro lado se obtiene dividiendo.",
  "Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.": "El área es el producto de los lados, por eso el otro lado se obtiene dividiendo, no restando.",
  "Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.": "El área no se divide entre cuatro como el perímetro. El lado es el número que multiplicado por sí mismo da el área.",
  "Obsah obdĺžnika: S = a · b.": "Área del rectángulo: S = a · b.",
  "Obsah štvorca je strana krát strana.": "El área del cuadrado es lado por lado.",
  "Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.": "El perímetro no es el lado del cuadrado. Primero divídelo entre cuatro: obtendrás el lado.",
  "Obvod obdĺžnika: o = 2 · (a + b).": "Perímetro del rectángulo: o = 2 · (a + b).",
  "Ochladenie znamená odčítať.": "Enfriarse significa restar.",
  "Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.": "Al perímetro le has restado los dos lados de longitud a. Te quedan dos lados b: divide todavía el resultado entre dos.",
  "Od teploty {@0} °C odčítavaš zápornú teplotu {@1} °C. Odčítať záporné číslo znamená pripočítať opačné.": "A la temperatura de {@0} °C le restas una temperatura negativa, {@1} °C. Restar un número negativo es sumar su opuesto.",
  "Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.": "A la temperatura más alta réstale la más baja. Restar un número negativo es sumar su opuesto.",
  "Odčítaj minúty.": "Resta los minutos.",
  "Odčítaj stupne.": "Resta los grados.",
  "Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.": "Restas un número positivo: en la recta numérica te mueves hacia la izquierda.",
  "Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.": "Restar un número negativo es sumar su opuesto: menos por menos da más.",
  "Odčítať záporné číslo znamená pripočítať opačné: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.": "Restar un número negativo es sumar su opuesto: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.",
  "Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.": "Restar un número es lo mismo que sumar su opuesto. Ayúdate con la recta numérica.",
  "Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.": "Además de las rectas que pasan por los puntos medios de lados opuestos, también son ejes del cuadrado sus diagonales.",
  "Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k {@0} je to {@1}.": "El opuesto está en la recta a la misma distancia del cero, pero al otro lado: el de {@0} es {@1}.",
  "Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.": "El opuesto está a la misma distancia del cero, pero tiene el signo contrario.",
  "Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku {@0}. Bod $A$ leží v riadku {@1}. V ktorom riadku leží jeho obraz $A'$?": "El eje de simetría $o$ (línea discontinua) es una recta horizontal en la fila {@0}. El punto $A$ está en la fila {@1}. ¿En qué fila está su imagen $A'$?",
  "Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci {@0}. Bod $A$ leží v stĺpci {@1}. V ktorom stĺpci leží jeho obraz $A'$?": "El eje de simetría $o$ (línea discontinua) es una recta vertical en la columna {@0}. El punto $A$ está en la columna {@1}. ¿En qué columna está su imagen $A'$?",
  "Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.": "Hay un eje de simetría que pasa por cada vértice del triángulo equilátero, no solo por uno.",
  "Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.": "El triángulo acutángulo tiene los tres ángulos menores que 90°. No olvides calcular también el tercer ángulo.",
  "Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.": "Un ángulo agudo es menor que un ángulo recto, es decir, menor que 90°.",
  "Ostrý, pravý, tupý a priamy uhol": "Ángulo agudo, recto, obtuso y llano",
  "Oteplenie znamená pripočítať.": "Calentarse significa sumar.",
  "Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.": "Comprueba la desigualdad triangular: la suma de los dos lados más cortos tiene que ser mayor que el lado más largo.",
  "Polovica obvodu je $a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}\\,\\text{cm}$.": "La mitad del perímetro es $a + b = {@0} : 2 = {@1}$, por eso $b = {@2} - {@3} = {@4}\\,\\text{cm}$.",
  "Polovica obvodu je súčet dvoch susedných strán.": "La mitad del perímetro es la suma de dos lados contiguos.",
  "Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).": "Compara el ángulo con un ángulo recto (90°, la esquina de un cuaderno) y con un ángulo llano (180°).",
  "Posledná číslica je {@0}, je to 0 alebo 5.": "La última cifra es {@0}, es 0 o 5.",
  "Posledná číslica je {@0}, je to 0.": "La última cifra es {@0}, es 0.",
  "Posledná číslica je {@0}, nie je to 0 ani 5.": "La última cifra es {@0}, no es 0 ni 5.",
  "Posledná číslica je {@0}, nie je to 0.": "La última cifra es {@0}, no es 0.",
  "Posunul si čiarku opačným smerom. Pri delení číslom {@0} sa číslo zmenší.": "Has movido la coma en la dirección contraria. Al dividir entre {@0} el número se hace menor.",
  "Posunul si čiarku opačným smerom. Pri násobení číslom {@0} sa číslo zväčší.": "Has movido la coma en la dirección contraria. Al multiplicar por {@0} el número se hace mayor.",
  "Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).": "Usa el criterio de divisibilidad del número dado (la última cifra, la suma de las cifras o las dos últimas cifras).",
  "Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Fíjate en la primera cifra después del lugar al que redondeas: de 0 a 4, hacia abajo; de 5 a 9, hacia arriba.",
  "Pozri sa pozorne – obe čísla sú rovnaké.": "Fíjate bien: los dos números son iguales.",
  "Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.": "Fíjate en si no son iguales los tres lados: ese triángulo tiene un nombre más preciso.",
  "Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.": "El número de ceros de 10, 100 o 1 000 indica cuántos lugares se desplaza la coma decimal.",
  "Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.": "Calcula por separado los grados y los minutos. 60 minutos son 1 grado.",
  "Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.": "Has pedido prestado 1 grado para los minutos, pero no lo has quitado de los grados.",
  "Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.": "El triángulo rectángulo tiene un ángulo de exactamente 90°. Calcula el tercer ángulo y compruébalo.",
  "Pravý uhol má presne 90° – ako roh zošita.": "El ángulo recto mide exactamente 90°, como la esquina de un cuaderno.",
  "Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.": "Imagina un espejo colocado en vertical u horizontal por el centro de la letra.",
  "Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?": "Imagina que doblas la figura por una recta. ¿De cuántas maneras coinciden exactamente las dos mitades?",
  "Premeň: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$": "Convierte: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$",
  "Preto nie, číslo {@0} nie je deliteľné {@1}.": "Por eso no: el número {@0} no es divisible entre {@1}.",
  "Preto áno, číslo {@0} je deliteľné {@1}.": "Por eso sí: el número {@0} es divisible entre {@1}.",
  "Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.": "Reduce las dos fracciones a común denominador y compara los numeradores.",
  "Pri delení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doľava: {@3}.": "Al dividir entre {@0} desplazamos la coma decimal {@1} {@2} hacia la izquierda: {@3}.",
  "Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.": "Para la divisibilidad entre 10 decide la última cifra: tiene que ser 0.",
  "Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.": "Para la divisibilidad entre 2 solo decide la última cifra: tiene que ser par.",
  "Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.": "Para la divisibilidad entre 3 no decide la última cifra, sino la suma de las cifras. Suma todas las cifras.",
  "Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.": "Para la divisibilidad entre 4 no basta con que el número sea par. Decide el número formado por las dos últimas cifras.",
  "Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.": "Para la divisibilidad entre 5 decide la última cifra: tiene que ser 0 o 5.",
  "Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.": "Para la divisibilidad entre 9 decide la suma de las cifras: tiene que ser divisible entre 9; no basta con que lo sea entre 3.",
  "Pri násobení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doprava: {@3}.": "Al multiplicar por {@0} desplazamos la coma decimal {@1} {@2} hacia la derecha: {@3}.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.": "En las unidades de superficie la equivalencia no es 10, sino $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.": "En las unidades de superficie la equivalencia no es 10, sino $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.",
  "Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.": "Al pedir prestado cambias 1 grado por 60 minutos, no por 100.",
  "Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.": "Con números negativos es mayor el que está más cerca del cero. No decide cuál tiene la cifra mayor.",
  "Priamy uhol má 180°, jeho ramená ležia na jednej priamke.": "El ángulo llano mide 180°; sus lados están sobre una misma recta.",
  "Pripočítaj ešte ${@0}'$.": "Suma todavía ${@0}'$.",
  "Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.": "Sumas un número positivo: en la recta numérica te mueves hacia la derecha.",
  "Pripočítať záporné číslo znamená odčítať: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.": "Sumar un número negativo es restar: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.",
  "Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.": "Sumar un número negativo significa moverse hacia la izquierda en la recta, es decir, restar.",
  "Prvočíslo má iba dva delitele. Skús, či sa {@0} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.": "Un número primo solo tiene dos divisores. Prueba si {@0} se puede dividir sin resto entre alguno de los números 2, 3, 5, 7.",
  "Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?": "Un número primo tiene exactamente dos divisores y un número compuesto, más de dos. ¿Cuántos divisores tiene el número 1?",
  "Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.": "El triángulo isósceles (no equilátero) tiene 1 eje de simetría: pasa por el vértice principal y por el punto medio de la base.",
  "Rovnoramenný trojuholník má dve strany rovnako dlhé.": "El triángulo isósceles tiene dos lados iguales.",
  "Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.": "El triángulo equilátero tiene 3 ejes de simetría; cada uno pasa por un vértice y por el punto medio del lado opuesto.",
  "Rovnostranný trojuholník má všetky tri strany rovnako dlhé.": "El triángulo equilátero tiene los tres lados iguales.",
  "Rozdiel teplôt: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Cez deň bolo o {@5} °C teplejšie.": "Diferencia de temperaturas: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Durante el día hizo {@5} °C más.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je 5 alebo viac, zaokrúhlime nahor: ${@1} \\doteq {@2}$.": "Decide la cifra que está justo después de este lugar: es {@0}. Es 5 o más, redondeamos hacia arriba: ${@1} \\doteq {@2}$.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je menšia ako 5, zaokrúhlime nadol: ${@1} \\doteq {@2}$.": "Decide la cifra que está justo después de este lugar: es {@0}. Es menor que 5, redondeamos hacia abajo: ${@1} \\doteq {@2}$.",
  "Rozklad nie je dokončený: {@0} nie je prvočíslo. Pokračuj v delení prvočíslami.": "La descomposición no está terminada: {@0} no es primo. Sigue dividiendo entre números primos.",
  "Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).": "Descompón los dos números en factores primos. El m.c.d. lo forman los factores primos comunes; el m.c.m., todos (con el mayor exponente).",
  "Rozlož čísla {@0} a {@1} na prvočinitele. Aký je ich najväčší spoločný deliteľ?": "Descompón los números {@0} y {@1} en factores primos. ¿Cuál es su máximo común divisor?",
  "Rozlož číslo {@0} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).": "Descompón el número {@0} en producto de números primos. Escribe los factores primos de menor a mayor, separados por punto y coma (también los repetidos).",
  "Rozšírime na menovateľ {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Alebo vydelíme ${@6} : {@7}$.)": "Amplificamos al denominador {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (O dividimos ${@6} : {@7}$.)",
  "Ráno bolo {@0} °C. Do večera sa ochladilo o {@1} °C. Aká teplota bola večer (v °C)?": "Por la mañana había {@0} °C. Hasta la tarde la temperatura bajó {@1} °C. ¿Qué temperatura había por la tarde (en °C)?",
  "Ráno bolo {@0} °C. Do večera sa oteplilo o {@1} °C. Aká teplota bola večer (v °C)?": "Por la mañana había {@0} °C. Hasta la tarde la temperatura subió {@1} °C. ¿Qué temperatura había por la tarde (en °C)?",
  "Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.": "El triángulo escaleno tiene los tres lados distintos. Compara otra vez las longitudes.",
  "Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.": "El triángulo escaleno no tiene ningún eje de simetría: no tiene dos lados iguales.",
  "S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.": "Con esta cifra el número sí será divisible, pero buscas la menor cifra posible.",
  "Skráť zlomok $\\frac{{@0}}{{@1}}$ na základný tvar. Odpoveď zapíš ako a/b.": "Simplifica la fracción $\\frac{{@0}}{{@1}}$ hasta hacerla irreducible. Escribe la respuesta como a/b.",
  "Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.": "Intenta encontrar un divisor común mayor que 1: mira, por ejemplo, si los dos números son divisibles entre 2, 3, 5 o 7.",
  "Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.": "Prueba si el número se puede dividir entre 2, 3, 5 o 7 sin resto.",
  "Spoločný menovateľ je {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ a $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Keďže ${@9} {@10} {@11}$, platí $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.": "El denominador común es {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ y $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Como ${@9} {@10} {@11}$, se cumple $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.",
  "Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Cuenta a cuántas filas del eje está el punto A y cuenta las mismas hacia el otro lado.",
  "Spočítaj, koľko strán má rovnakú dĺžku.": "Cuenta cuántos lados tienen la misma longitud.",
  "Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Cuenta a cuántas columnas del eje está el punto A y cuenta las mismas hacia el otro lado.",
  "Strana: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Obsah: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.": "Lado: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Área: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.",
  "Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.": "Has multiplicado el lado por dos. El área del cuadrado es lado por lado, no lado por 2.",
  "Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Has sumado los lados. El área del rectángulo es el producto de las longitudes de sus lados.",
  "Stromy rozkladu čísel 60 a 84 na prvočinitele": "Árboles de factorización de 60 y 84",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Keďže ${@6}' = 1^\\circ\\,{@7}'$, výsledok je ${@8}$.": "Grados: ${@0} + {@1} = {@2}$; minutos: ${@3} + {@4} = {@5}$. Como ${@6}' = 1^\\circ\\,{@7}'$, el resultado es ${@8}$.",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Výsledok je ${@6}$.": "Grados: ${@0} + {@1} = {@2}$; minutos: ${@3} + {@4} = {@5}$. El resultado es ${@6}$.",
  "Stupne: ${@0} - {@1} = {@2}$, minúty: ${@3} - {@4} = {@5}$. Výsledok je ${@6}$.": "Grados: ${@0} - {@1} = {@2}$; minutos: ${@3} - {@4} = {@5}$. El resultado es ${@6}$.",
  "Sú čísla {@0} a {@1} súdeliteľné, alebo nesúdeliteľné?": "¿Son los números {@0} y {@1} primos entre sí o no?",
  "Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.": "La suma es igual al lado más largo: los lados quedarían sobre una misma recta. El triángulo no se puede construir.",
  "Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.": "La suma de los ángulos es $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.",
  "Súčet uhlov v trojuholníku je 180°, nie 360°.": "La suma de los ángulos de un triángulo es 180°, no 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.": "La suma de los ángulos interiores de un triángulo es 180°, no 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°.": "La suma de los ángulos interiores de un triángulo es 180°.",
  "Súčet známych číslic je {@0}. Ciferný súčet musí byť deliteľný {@1}: najmenšia vhodná číslica je {@2}, lebo ${@3} + {@4} = {@5}$.": "La suma de las cifras conocidas es {@0}. La suma de las cifras tiene que ser divisible entre {@1}: la menor cifra adecuada es {@2}, porque ${@3} + {@4} = {@5}$.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.": "El producto {@0}·{@1} es un múltiplo común, pero no el mínimo. Las líneas coinciden antes.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.": "El producto {@0}·{@1} es un múltiplo común, pero no el mínimo. En el m.c.m. toma cada factor primo solo tantas veces como aparece en el número donde más veces está.",
  "Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.": "Suma los dos lados más cortos y compara su suma con el lado más largo. Basta con que la suma sea mayor.",
  "Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.": "Suma los dos lados más cortos y compáralos con el lado más largo. La suma tiene que ser mayor.",
  "Sčítaj minúty.": "Suma los minutos.",
  "Sčítaj stupne.": "Suma los grados.",
  "Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný {@0}.": "Suma las cifras conocidas. Añade a la suma la menor cifra posible para que la suma sea divisible entre {@0}.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.": "Solo has sumado dos lados. El rectángulo tiene cuatro lados: multiplica todavía por dos la suma de los lados contiguos.",
  "Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.": "Así la suma de las cifras será divisible entre 3, pero para la divisibilidad entre 9 tiene que ser divisible entre 9.",
  "Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.": "Esa es la medida del ángulo adyacente. Los ángulos opuestos por el vértice están uno frente al otro y son iguales.",
  "Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.": "Ese es el mínimo común múltiplo. El trozo tiene que ser más corto que las cintas: buscas el máximo común divisor.",
  "Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.": "Ese es el máximo común divisor. El momento de la salida común tiene que ser múltiplo de los dos intervalos: buscas el mínimo común múltiplo.",
  "Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.": "Ese es el perímetro del cuadrado. El área se calcula como lado por lado.",
  "Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.": "Ese es el perímetro. El área del rectángulo se calcula como el producto de las longitudes de sus lados.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obsah.": "Ese es el lado del cuadrado. Ahora calcula con él el área.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obvod.": "Ese es el lado del cuadrado. Ahora calcula con él el perímetro.",
  "Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.": "Esa es la distancia del punto A al eje. La imagen está a la misma distancia al otro lado del eje: averigua su número.",
  "Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.": "Eso es lo que suman los dos ángulos de la base. Son iguales, así que divide todavía el resultado entre dos.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je pravý, trojuholník je pravouhlý.": "Tercer ángulo: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. El ángulo mayor mide ${@3}^\\circ$, es recto: el triángulo es rectángulo.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je tupý, trojuholník je tupouhlý.": "Tercer ángulo: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. El ángulo mayor mide ${@3}^\\circ$, es obtuso: el triángulo es obtusángulo.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.": "Tercer ángulo: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. El ángulo mayor mide ${@3}^\\circ$; todos los ángulos son agudos: el triángulo es acutángulo.",
  "Trojuholník má dva vnútorné uhly s veľkosťou ${@0}^\\circ$ a ${@1}^\\circ$. Aký je to trojuholník podľa uhlov?": "Un triángulo tiene dos ángulos interiores de ${@0}^\\circ$ y ${@1}^\\circ$. ¿Qué tipo de triángulo es según sus ángulos?",
  "Trojuholník má strany {@0} cm, {@1} cm a {@2} cm. Aký je podľa strán?": "Un triángulo tiene lados de {@0} cm, {@1} cm y {@2} cm. ¿Cómo es según sus lados?",
  "Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.": "El triángulo obtusángulo tiene un ángulo mayor que 90°. Calcula el tercer ángulo y compruébalo.",
  "Tupý uhol je väčší ako 90° a zároveň menší ako 180°.": "Un ángulo obtuso es mayor que 90° y a la vez menor que 180°.",
  "Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.": "Esta propiedad solo la tiene el número 1. Todo número natural mayor es primo o compuesto.",
  "Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.": "Las diagonales del rectángulo no son ejes de simetría: al doblarlo por una diagonal, las mitades no coinciden.",
  "Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.": "Los ángulos de la base de un triángulo isósceles son iguales y los tres ángulos suman 180°.",
  "Uhly pri základni sú zhodné: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.": "Los ángulos de la base son iguales: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?": "El ángulo $\\alpha$ mide ${@0}^\\circ$. ¿Cuánto mide su ángulo adyacente (en grados)?",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?": "El ángulo $\\alpha$ mide ${@0}^\\circ$. ¿Cuánto mide su ángulo opuesto por el vértice (en grados)?",
  "Uhol má {@0}°.": "El ángulo mide {@0}°.",
  "Umiestni desatinnú čiarku: koľko je ${@0}\\cdot {@1}$?": "Coloca la coma decimal: ¿cuánto es ${@0}\\cdot {@1}$?",
  "Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel {@0} a {@1}. Zapíš ich v poradí NSD; nsn.": "Halla el máximo común divisor y el mínimo común múltiplo de {@0} y {@1}. Escríbelos en el orden m.c.d.; m.c.m.",
  "V ktorom riadku leží obraz $A'$?": "¿En qué fila está la imagen $A'$?",
  "V ktorom stĺpci leží obraz $A'$?": "¿En qué columna está la imagen $A'$?",
  "V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť ${@0}^\\circ$. Aký veľký je každý z uhlov pri základni?": "En un triángulo isósceles, el ángulo opuesto a la base (en el vértice principal) mide ${@0}^\\circ$. ¿Cuánto mide cada uno de los ángulos de la base?",
  "V trojuholníku $ABC$ je $\\alpha = {@0}^\\circ$ a $\\beta = {@1}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?": "En el triángulo $ABC$, $\\alpha = {@0}^\\circ$ y $\\beta = {@1}^\\circ$. ¿Cuánto mide el ángulo $\\gamma$ (en grados)?",
  "Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.": "Los ángulos adyacentes forman juntos un ángulo llano; los ángulos opuestos por el vértice son iguales.",
  "Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.": "Los ángulos adyacentes suman $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.",
  "Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).": "Los ángulos adyacentes no completan un ángulo recto, sino un ángulo llano (180°).",
  "Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.": "Los ángulos adyacentes forman juntos un ángulo llano, es decir, 180°, no 360°.",
  "Vrcholové uhly sú rovnako veľké, preto má tiež ${@0}^\\circ$.": "Los ángulos opuestos por el vértice son iguales, por eso también mide ${@0}^\\circ$.",
  "Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.": "Divide el número de minutos entre 60. El cociente son los grados y el resto, los minutos.",
  "Vydeľ čitateľa aj menovateľa číslom {@0}. Aký zlomok dostaneš (a/b)?": "Divide el numerador y el denominador entre {@0}. ¿Qué fracción obtienes (a/b)?",
  "Vyjadri ${@0}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.": "Expresa ${@0}'$ en grados y minutos. Escríbelo en la forma grados; minutos.",
  "Vynásob prvočinitele, ktoré sú v oboch rozkladoch.": "Multiplica los factores primos que están en las dos descomposiciones.",
  "Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.": "Multiplica los números sin las comas decimales y después cuenta las cifras decimales de los dos factores.",
  "Vynásob čísla bez desatinných čiarok: ${@0}\\cdot {@1}$.": "Multiplica los números sin las comas decimales: ${@0}\\cdot {@1}$.",
  "Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Has multiplicado los lados: eso es el área. El perímetro es la suma de las longitudes de los cuatro lados.",
  "Vypočítaj ${@0} {@1} {@2}$. Výsledok zapíš v tvare stupne; minúty.": "Calcula ${@0} {@1} {@2}$. Escribe el resultado en la forma grados; minutos.",
  "Vypočítaj ${@0}\\cdot {@1}$.": "Calcula ${@0}\\cdot {@1}$.",
  "Vypočítaj $|{@0}| + |{@1}|$.": "Calcula $|{@0}| + |{@1}|$.",
  "Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom {@0}.": "Solo has calculado una parte. Todavía tienes que multiplicarla por el numerador {@0}.",
  "Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.": "Es mayor el número que está más a la derecha en la recta numérica. Cuidado: −2 es mayor que −9.",
  "Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.": "Todos los lados son iguales, el triángulo es equilátero.",
  "Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.": "Los tres lados son distintos, el triángulo es escaleno.",
  "Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?": "De la estación de autobuses sale la línea A cada {@0} minutos y la línea B cada {@1} minutos. A las 7:00 salieron las dos a la vez. ¿Cuántos minutos después volverán a salir a la vez?",
  "Z menšej jednotky na väčšiu delíme číslom 100.": "De una unidad menor a una mayor dividimos entre 100.",
  "Za týmto miestom je číslica {@0}. Zaokrúhli ${@1}$ na {@2}.": "Después de este lugar está la cifra {@0}. Redondea ${@1}$ a las {@2}.",
  "Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Has intercambiado el numerador y el denominador: divide el número entre el denominador y multiplica el resultado por el numerador.",
  "Zaokrúhlil si na iné miesto. Na {@0} znamená, že posledná ponechaná číslica stojí na mieste {@1}.": "Has redondeado a otro lugar. Redondear a las {@0} significa que la última cifra que se conserva está en el lugar de las {@1}.",
  "Zapíš $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Escribe $\\frac{{@0}}{{@1}}$ como número decimal.",
  "Zapíš výsledok v poradí NSD; nsn.": "Escribe el resultado en el orden m.c.d.; m.c.m.",
  "Zapíš výsledok v tvare stupne; minúty.": "Escribe el resultado en la forma grados; minutos.",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Escribe la fracción $\\frac{{@0}}{{@1}}$ como número decimal.",
  "Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo {@0} si dopíš ako {@1}0.": "Has alineado los números por la derecha como si fueran enteros. Las comas decimales tienen que estar una debajo de otra: escribe el número {@0} como {@1}0.",
  "Zarovnáme desatinné čiarky pod seba a doplníme nuly: ${@0} {@1} {@2} = {@3}$.": "Alineamos las comas decimales y completamos con ceros: ${@0} {@1} {@2} = {@3}$.",
  "Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.": "Averigua si existe un número mayor que 1 entre el que se puedan dividir los dos números.",
  "Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.": "La raya de fracción no es una coma decimal. Una fracción significa una división: divide el numerador entre el denominador.",
  "Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.": "Las fracciones no son iguales. Redúcelas a común denominador y compara los numeradores.",
  "Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.": "Las fracciones con distinto denominador no se pueden comparar solo por los numeradores o solo por los denominadores. Redúcelas a común denominador.",
  "Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.": "Amplifica la fracción para que el denominador sea 10, 100 o 1 000, o divide el numerador entre el denominador.",
  "Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla {@0} – ak žiadny nie je, číslo nie je zložené.": "Un número compuesto tiene algún divisor además de 1 y de sí mismo. Intenta encontrar un divisor así de {@0}; si no lo hay, el número no es compuesto.",
  "Zrkadlil si bod podľa stredu siete, nie podľa osi o.": "Has reflejado el punto respecto al centro de la cuadrícula, no respecto al eje o.",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Aký je obsah záhrady v m²?": "Un jardín tiene forma de rectángulo de {@0} m por {@1} m. ¿Cuál es el área del jardín en m²?",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Koľko metrov pletiva treba na jej oplotenie?": "Un jardín tiene forma de rectángulo de {@0} m por {@1} m. ¿Cuántos metros de valla hacen falta para cercarlo?",
  "ani prvočíslo, ani zložené": "ni primo ni compuesto",
  "desatinné miesta": "cifras decimales",
  "desatinné miesto": "cifra decimal",
  "desatinných miest": "cifras decimales",
  "desatín": "décimas",
  "jednotky (celé čísla)": "unidades (números enteros)",
  "kladné": "positivo",
  "kosodĺžnik (rovnobežník)": "romboide (paralelogramo)",
  "kosoštvorec": "rombo",
  "malé dieliky sú stotiny (0,01), veľké desatiny (0,1)": "las divisiones pequeñas son centésimas (0,01); las grandes, décimas (0,1)",
  "miesta": "lugares",
  "miesto": "lugar",
  "napr. 2/3": "p. ej., 2/3",
  "napr. 2; 2; 3": "p. ej., 2; 2; 3",
  "nekonečne veľa": "infinitos",
  "nesúdeliteľné": "primos entre sí",
  "nsn obsahuje všetky prvočinitele: $n({@0}, {@1}) = {@2} = {@3}$.": "El m.c.m. contiene todos los factores primos: $n({@0}, {@1}) = {@2} = {@3}$.",
  "ostrouhlý": "acutángulo",
  "ostrý (30°)": "agudo (30°)",
  "podľa strán": "según sus lados",
  "podľa uhlov": "según sus ángulos",
  "pravouhlý": "rectángulo",
  "pravý (90°)": "recto (90°)",
  "priamy": "llano",
  "priamy (180°)": "llano (180°)",
  "prvočíslo": "un número primo",
  "riadkov": "filas",
  "rovnoramenný": "isósceles",
  "rovnoramenný trojuholník": "triángulo isósceles",
  "rovnostranný": "equilátero",
  "rovnostranný trojuholník": "triángulo equilátero",
  "rôznostranný": "escaleno",
  "rôznostranný trojuholník": "triángulo escaleno",
  "stotiny": "centésimas",
  "stotín": "centésimas",
  "stred uhlomera = vrchol uhla": "centro del transportador = vértice del ángulo",
  "stupne; minúty": "grados; minutos",
  "stĺpce": "columnas",
  "stĺpcov": "columnas",
  "stĺpec": "columna",
  "súdeliteľné": "no primos entre sí",
  "tupouhlý": "obtusángulo",
  "tupý (135°)": "obtuso (135°)",
  "zložené číslo": "un número compuesto",
  "záporné": "negativo",
  "Áno. Písmeno {@0} má vodorovnú os súmernosti.": "Sí. La letra {@0} tiene un eje de simetría horizontal.",
  "Áno. Písmeno {@0} má zvislú aj vodorovnú os súmernosti.": "Sí. La letra {@0} tiene un eje de simetría vertical y otro horizontal.",
  "Áno. Písmeno {@0} má zvislú os súmernosti.": "Sí. La letra {@0} tiene un eje de simetría vertical.",
  "Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti": "Figura y su imagen en una simetría axial sobre una cuadrícula",
  "Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.": "El momento de la salida común tiene que ser múltiplo de los dos intervalos. Busca el menor.",
  "Číselná os od 2 do 3 s desatinami a stotinami": "Recta numérica del 2 al 3 con décimas y centésimas",
  "Číselná os s celými číslami od −6 do 6": "Recta numérica con los números enteros del −6 al 6",
  "Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.": "Los números no son iguales. Averigua cuál está más a la derecha en la recta numérica.",
  "Čísla od 1 do 60, prvočísla sú vyfarbené": "Números del 1 al 60; los números primos están coloreados",
  "Číslica za týmto miestom je {@0}, teda 5 alebo viac – zaokrúhľuje sa nahor.": "La cifra después de este lugar es {@0}, es decir, 5 o más: se redondea hacia arriba.",
  "Číslica za týmto miestom je {@0}, teda menej ako 5 – zaokrúhľuje sa nadol.": "La cifra después de este lugar es {@0}, es decir, menos de 5: se redondea hacia abajo.",
  "Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.": "El número 1 tiene un único divisor (él mismo), por eso no es ni primo ni compuesto.",
  "Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.": "Un número es divisible entre 6 solo si es divisible entre 2 y entre 3 a la vez. Comprueba las dos condiciones.",
  "Číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Divide el número entre el denominador y multiplica el resultado por el numerador.",
  "Číslo z posledných dvoch číslic je {@0}, je deliteľné 4.": "El número formado por las dos últimas cifras es {@0}, es divisible entre 4.",
  "Číslo z posledných dvoch číslic je {@0}, nie je deliteľné 4.": "El número formado por las dos últimas cifras es {@0}, no es divisible entre 4.",
  "Číslo {@0} má iba dva delitele: 1 a {@1}. Je to prvočíslo.": "El número {@0} solo tiene dos divisores: 1 y {@1}. Es primo.",
  "časti": "partes",
  "častí": "partes",
  "časť": "parte",
  "Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.": "El cuadrado tiene 4 ejes de simetría: 2 unen los puntos medios de lados opuestos y 2 están sobre las diagonales.",
  "Štvorec má obsah ${@0}\\,\\text{cm}^2$. Aký je jeho obvod v cm?": "Un cuadrado tiene un área de ${@0}\\,\\text{cm}^2$. ¿Cuál es su perímetro en cm?",
  "Štvorec má obvod ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Un cuadrado tiene un perímetro de ${@0}\\,\\text{cm}$. ¿Cuál es su área en cm²?",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Un cuadrado tiene un lado de ${@0}\\,\\text{cm}$. ¿Cuál es su área en cm²?",
  "štvorčeková sieť s osou a bodom A": "cuadrícula con un eje y el punto A"
 }
});
