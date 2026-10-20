/* Español: preklad js/rocniky/r4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/r4/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "r4-cisla10000": {
   "title": "Números hasta el 10 000 y mayores",
   "summary": "Millares, centenas, decenas y unidades; leer, escribir y comparar números grandes.",
   "theory": [
    "<p>Cada cifra de un número tiene su <strong>lugar (orden)</strong>: unidades, decenas, centenas, unidades de millar, decenas de millar…\n       Diez unidades son una decena, diez decenas son una centena, diez centenas son un millar y diez millares son $10\\,000$.</p>",
    {
     "fig": "r4-rady",
     "caption": "El número $47\\,385$ tiene 4 decenas de millar, 7 unidades de millar, 3 centenas, 8 decenas y 5 unidades."
    },
    "<p>Los números grandes se escriben con un espacio cada tres cifras empezando por la derecha: $8\\,206$, $35\\,000$. Así se leen más fácilmente:\n       <em>ocho mil doscientos seis</em>, <em>treinta y cinco mil</em>.</p>",
    "<p><strong>Comparar:</strong> es mayor el número que tiene más cifras. Si tienen las mismas cifras, comparamos\n       desde la izquierda: primero los millares, luego las centenas, las decenas y las unidades. Por ejemplo, $5\\,382 &gt; 5\\,297$, porque 3 centenas son más que 2 centenas.</p>"
   ],
   "examples": [
    {
     "task": "Escribe con cifras: 6 millares, 0 centenas, 4 decenas y 9 unidades.",
     "steps": [
      "En el lugar de las centenas escribimos un cero para que las cifras no se desplacen.",
      "$6\\,000 + 40 + 9 = 6\\,049$.",
      "<strong>El número es $6\\,049$.</strong>"
     ]
    },
    {
     "task": "Compara los números $7\\,615$ y $7\\,651$.",
     "steps": [
      "Los dos números tienen cuatro cifras, 7 millares y 6 centenas.",
      "Decenas: 1 es menos que 5.",
      "<strong>$7\\,615 &lt; 7\\,651$</strong>"
     ]
    }
   ]
  },
  "r4-scitanie": {
   "title": "Suma y resta en columna",
   "summary": "Sumar y restar números de varias cifras colocándolos uno debajo del otro.",
   "theory": [
    "<p>En la suma escrita colocamos los números <strong>uno debajo del otro</strong>, de modo que las unidades queden bajo las unidades, las decenas bajo\n       las decenas, etc. Calculamos <strong>desde la derecha</strong>, empezando por las unidades. Si la suma de una columna pasa de 9, escribimos solo las unidades\n       y nos llevamos 1 a la columna siguiente.</p>",
    {
     "fig": "r4-scitanie",
     "caption": "Suma en columna $3\\,476 + 2\\,858 = 6\\,334$. Los unos pequeños de arriba son las cifras que nos llevamos."
    },
    "<p>En la resta escrita también empezamos por las unidades. Si la cifra de arriba es menor que la de abajo, le sumamos 10\n       y nos llevamos 1 a la columna siguiente, que sumamos a la cifra de abajo.</p>",
    "<p><strong>Comprobación:</strong> el resultado de una resta se comprueba con una suma. Si $5\\,203 - 1\\,868 = 3\\,335$,\n       debe cumplirse $3\\,335 + 1\\,868 = 5\\,203$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula en columna $4\\,587 + 3\\,765$.",
     "steps": [
      "$\\begin{array}{r}4587 \\\\ +\\,3765 \\\\ \\hline 8352\\end{array}$",
      "Unidades: $7 + 5 = 12$, escribimos 2 y nos llevamos 1. Decenas: $8 + 6 + 1 = 15$, escribimos 5 y nos llevamos 1.",
      "Centenas: $5 + 7 + 1 = 13$, escribimos 3 y nos llevamos 1. Millares: $4 + 3 + 1 = 8$.",
      "<strong>Resultado: $8\\,352$</strong>"
     ]
    },
    {
     "task": "Calcula en columna $6\\,042 - 2\\,718$.",
     "steps": [
      "$\\begin{array}{r}6042 \\\\ -\\,2718 \\\\ \\hline 3324\\end{array}$",
      "Unidades: 2 es menos que 8, por eso $12 - 8 = 4$ y nos llevamos 1.",
      "Decenas: $1 + 1 = 2$, $4 - 2 = 2$. Centenas: 0 es menos que 7, por eso $10 - 7 = 3$ y nos llevamos 1.",
      "Millares: $2 + 1 = 3$, $6 - 3 = 3$.",
      "<strong>Resultado: $3\\,324$</strong>. Comprobación: $3\\,324 + 2\\,718 = 6\\,042$."
     ]
    }
   ]
  },
  "r4-nasobenie": {
   "title": "Multiplicación y división escritas",
   "summary": "Multiplicar por números de una y dos cifras, dividir entre un número de una cifra con resto.",
   "theory": [
    "<p><strong>Multiplicación escrita por un número de una cifra:</strong> multiplicamos sucesivamente las unidades, las decenas, las centenas…\n       Si el resultado pasa de 9, escribimos las unidades, nos llevamos las decenas y las sumamos al producto siguiente.</p>",
    "<p><strong>Multiplicación por un número de dos cifras:</strong> primero multiplicamos por las unidades y después por las decenas. El segundo producto\n       parcial se escribe desplazado un lugar a la izquierda. Al final sumamos los productos parciales.</p>",
    {
     "fig": "r4-nasobenie",
     "caption": "$243\\cdot 32$: primero $243\\cdot 2 = 486$, después $243\\cdot 3 = 729$ desplazado a la izquierda (significa $7\\,290$). En total, $7\\,776$."
    },
    "<p><strong>División escrita:</strong> dividimos desde la izquierda. Tomamos tantas cifras como haga falta para poder dividir, hallamos el cociente y el resto,\n       bajamos la cifra siguiente y continuamos. Si al final sobra algo, es el <strong>resto</strong>, que siempre es menor que el divisor.\n       Comprobación: $\\text{cociente}\\cdot\\text{divisor} + \\text{resto} = \\text{dividendo}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula por escrito $1\\,627\\cdot 4$.",
     "steps": [
      "$\\begin{array}{r}1627 \\\\ \\cdot\\,4 \\\\ \\hline 6508\\end{array}$",
      "$4\\cdot 7 = 28$, escribimos 8 y nos llevamos 2. $4\\cdot 2 + 2 = 10$, escribimos 0 y nos llevamos 1.",
      "$4\\cdot 6 + 1 = 25$, escribimos 5 y nos llevamos 2. $4\\cdot 1 + 2 = 6$.",
      "<strong>Resultado: $6\\,508$</strong>"
     ]
    },
    {
     "task": "Calcula por escrito $947 : 6$.",
     "steps": [
      "$9 : 6 = 1$, resto 3.",
      "Bajamos el 4: $34 : 6 = 5$, resto 4.",
      "Bajamos el 7: $47 : 6 = 7$, resto 5.",
      "<strong>$947 : 6 = 157$, resto 5.</strong> Comprobación: $157\\cdot 6 + 5 = 947$."
     ]
    }
   ]
  },
  "r4-slovne": {
   "title": "Problemas con varias operaciones",
   "summary": "Problemas que se resuelven en varios pasos: compras, repartos en grupos, comparaciones.",
   "theory": [
    "<p>Algunos problemas no se pueden resolver con una sola operación. Vamos paso a paso:</p>\n       <ol><li>¿Qué sabemos? ¿Qué buscamos?</li><li>¿Qué tengo que averiguar primero para poder responder?</li>\n       <li>Calculo cada paso y lo anoto.</li><li>Escribo la respuesta y compruebo si tiene sentido.</li></ol>",
    "<p><strong>Palabras útiles:</strong> <em>… más / menos que</em> – sumamos o restamos;\n       <em>… veces más / menos</em> – multiplicamos o dividimos; <em>repartieron por igual</em>, <em>de … cada uno</em> – dividimos;\n       <em>lo que sobra</em>, <em>el cambio</em> – restamos.</p>",
    "<p>Los pasos también se pueden escribir en una sola expresión con paréntesis, por ejemplo $50 - 3\\cdot 12 = 50 - 36 = 14$.\n       Recuerda la jerarquía de operaciones: primero multiplicaciones y divisiones, después sumas y restas.</p>"
   ],
   "examples": [
    {
     "task": "Mamá compró 3 libros de 12 euros cada uno y pagó con un billete de 50 euros. ¿Cuántos euros le devolvieron?",
     "steps": [
      "Primero averiguamos el precio de los libros: $3\\cdot 12 = 36$ euros.",
      "Después, el cambio: $50 - 36 = 14$ euros.",
      "En una sola expresión: $50 - 3\\cdot 12 = 14$.",
      "<strong>Respuesta: A mamá le devolvieron 14 euros.</strong>"
     ]
    },
    {
     "task": "De excursión fueron 4 clases de 23 alumnos cada una. Viajaron en autobuses de 46 alumnos cada uno. ¿Cuántos autobuses fueron?",
     "steps": [
      "Número de alumnos: $4\\cdot 23 = 92$.",
      "Número de autobuses: $92 : 46 = 2$.",
      "<strong>Respuesta: Fueron 2 autobuses.</strong>"
     ]
    }
   ]
  },
  "r4-rimske": {
   "title": "Números romanos",
   "summary": "Los signos I, V, X, L, C, D, M y cómo escribir números romanos.",
   "theory": [
    "<p>Los antiguos romanos escribían los números con siete letras. Todavía hoy encontramos números romanos en los relojes, en los nombres de los siglos\n       o en los edificios.</p>",
    {
     "fig": "r4-rimske",
     "caption": "Los números romanos y sus valores."
    },
    "<p><strong>Reglas:</strong> los valores de los signos se suman: $\\text{XVI} = 10 + 5 + 1 = 16$. El mismo signo (I, X, C, M)\n       se puede escribir como máximo tres veces seguidas: $\\text{III} = 3$, $\\text{XXX} = 30$.</p>",
    "<p>Si un signo menor está <strong>delante</strong> de uno mayor, se resta: $\\text{IV} = 4$, $\\text{IX} = 9$, $\\text{XL} = 40$,\n       $\\text{XC} = 90$. Por eso el 4 no se escribe IIII, sino IV.</p>"
   ],
   "examples": [
    {
     "task": "¿Qué número está escrito en números romanos como $\\text{LXXIV}$?",
     "steps": [
      "Separamos: $\\text{L} = 50$, $\\text{XX} = 20$, $\\text{IV} = 4$.",
      "$50 + 20 + 4 = 74$.",
      "<strong>$\\text{LXXIV} = 74$</strong>"
     ]
    },
    {
     "task": "Escribe en números romanos el número 39.",
     "steps": [
      "$39 = 30 + 9$.",
      "$30 = \\text{XXX}$, $9 = \\text{IX}$.",
      "<strong>$39 = \\text{XXXIX}$</strong>"
     ]
    }
   ]
  },
  "r4-utvary": {
   "title": "Ángulo, triángulo y cuadriláteros",
   "summary": "Ángulo agudo, recto y obtuso; triángulo, rectángulo, cuadrado y otros cuadriláteros.",
   "theory": [
    "<p>Un <strong>ángulo</strong> está formado por dos lados que salen de un mismo punto, el <strong>vértice</strong>.\n       El ángulo recto tiene la forma de la esquina de un cuaderno. Un ángulo menor que el recto es <strong>agudo</strong>; un ángulo mayor que el recto\n       (pero que todavía no forma una línea recta) es <strong>obtuso</strong>.</p>",
    {
     "fig": "r4-uhly",
     "caption": "Ángulo agudo, recto y obtuso. El ángulo recto se marca con un cuadradito."
    },
    "<p>El <strong>triángulo</strong> tiene 3 lados, 3 vértices y 3 ángulos. El <strong>cuadrilátero</strong> tiene 4 lados, 4 vértices y 4 ángulos.\n       El <strong>rectángulo</strong> es un cuadrilátero con 4 ángulos rectos; sus lados opuestos miden lo mismo.\n       El <strong>cuadrado</strong> es un rectángulo con los 4 lados iguales.</p>",
    {
     "fig": "r4-stvoruholniky",
     "caption": "El cuadrado y el rectángulo tienen todos los ángulos rectos. Todo cuadrado es también un rectángulo."
    }
   ],
   "examples": [
    {
     "task": "El ángulo entre las agujas del reloj a las 3:00, ¿es agudo, recto u obtuso?",
     "steps": [
      "La aguja corta apunta al 3 y la larga, al 12.",
      "Entre ellas hay un cuarto de círculo, con forma de esquina de cuaderno.",
      "<strong>Es un ángulo recto.</strong>"
     ]
    },
    {
     "task": "Un rectángulo tiene un lado de 7 cm y otro de 4 cm. ¿Cuánto miden los otros dos lados?",
     "steps": [
      "Los lados opuestos de un rectángulo miden lo mismo.",
      "<strong>Los otros lados miden 7 cm y 4 cm.</strong>"
     ]
    }
   ]
  },
  "r4-obvod": {
   "title": "Perímetro y área",
   "summary": "El perímetro como longitud del borde, el área como número de cuadraditos que cubren la figura.",
   "theory": [
    "<p>El <strong>perímetro</strong> de una figura es la longitud de su borde, es decir, la suma de las longitudes de todos los lados. El perímetro de un rectángulo de lados\n       $a$ y $b$ es $a + b + a + b$, es decir, $2\\cdot(a + b)$. El perímetro de un cuadrado de lado $a$ es $4\\cdot a$.</p>",
    "<p>El <strong>área</strong> nos dice cuánto espacio ocupa una figura. La hallamos contando los cuadraditos que la cubren.\n       Un cuadradito de 1 cm de lado tiene un área de 1 centímetro cuadrado ($1\\,\\text{cm}^2$).</p>",
    {
     "fig": "r4-obvod-obsah",
     "caption": "Rectángulo de 4 cm × 3 cm: el perímetro es la longitud del borde azul y el área es el número de cuadraditos de dentro."
    },
    "<p>En un rectángulo no hace falta contar los cuadraditos uno a uno: en cada fila hay tantos como mide un lado,\n       y hay tantas filas como mide el otro lado. Por eso, área $= a\\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula el perímetro de un rectángulo de lados 8 cm y 5 cm.",
     "steps": [
      "$o = 8 + 5 + 8 + 5$.",
      "$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$.",
      "<strong>El perímetro es $26\\,\\text{cm}$.</strong>"
     ]
    },
    {
     "task": "Un cuadrado tiene 36 cm de perímetro. ¿Cuánto mide su lado?",
     "steps": [
      "El cuadrado tiene 4 lados iguales, que suman 36 cm.",
      "$36 : 4 = 9$.",
      "<strong>El lado mide $9\\,\\text{cm}$.</strong>"
     ]
    }
   ]
  },
  "r4-jednotky": {
   "title": "Conversión de unidades y trabajo con datos",
   "summary": "Unidades de longitud, masa, capacidad y tiempo; leer datos de una tabla y de un gráfico.",
   "theory": [
    "<p><strong>Longitud:</strong> $1\\,\\text{km} = 1\\,000\\,\\text{m}$, $1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$,\n       $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{cm} = 10\\,\\text{mm}$.<br>\n       <strong>Masa:</strong> $1\\,\\text{t} = 1\\,000\\,\\text{kg}$, $1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$.<br>\n       <strong>Capacidad:</strong> $1\\,\\text{hl} = 100\\,\\text{l}$, $1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$.<br>\n       <strong>Tiempo:</strong> $1\\,\\text{h} = 60\\,\\text{min}$, $1\\,\\text{min} = 60\\,\\text{s}$, 1 día = 24 h.</p>",
    {
     "fig": "r4-jednotky",
     "caption": "Al pasar de una unidad mayor a una menor, el número se hace más grande: multiplicamos. Al revés, dividimos."
    },
    "<p>Los <strong>datos</strong> se suelen leer en una tabla o en un gráfico de barras. La altura de la barra indica el valor,\n       que leemos en el eje vertical. Con los datos podemos comparar (cuánto más) y sumar (cuánto en total).</p>"
   ],
   "examples": [
    {
     "task": "¿Cuántos centímetros son 4 m 35 cm?",
     "steps": [
      "$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$.",
      "$400 + 35 = 435$.",
      "<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "¿Cuántos kilogramos son $6\\,000\\,\\text{g}$?",
     "steps": [
      "$1\\,\\text{kg} = 1\\,000\\,\\text{g}$; pasamos a una unidad mayor, por eso dividimos.",
      "$6\\,000 : 1\\,000 = 6$.",
      "<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, por eso ${@3} : {@4} = {@5}$. Así que ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, por eso ${@3}\\cdot {@4} = {@5}$. Así que ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$\\text{{@0}} = {@1}$.": "$\\text{{@0}} = {@1}$.",
  "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, el perímetro es ${@4}\\,\\text{{@5}}$.",
  "$o = 4\\cdot {@0} = {@1}$, obvod je ${@2}\\,\\text{{@3}}$.": "$o = 4\\cdot {@0} = {@1}$, el perímetro es ${@2}\\,\\text{{@3}}$.",
  "${@0} + {@1} + {@2} + {@3} = {@4}$. Kde je 0 kusov, píšeme na to miesto nulu.": "${@0} + {@1} + {@2} + {@3} = {@4}$. Donde hay 0 unidades de un orden, escribimos un cero en ese lugar.",
  "${@0} - {@1} = 0$, nulu na začiatok nepíšeme": "${@0} - {@1} = 0$, el cero no se escribe al principio",
  "${@0} - {@1} = {@2}$, píšeme {@3}": "${@0} - {@1} = {@2}$, escribimos {@3}",
  "${@0} : {@1} = {@2}$, lebo ${@3}\\cdot {@4} = {@5}$, zvyšok {@6}": "${@0} : {@1} = {@2}$, porque ${@3}\\cdot {@4} = {@5}$, resto {@6}",
  "${@0} = {@1}$. Hlasovalo {@2} {@3}.": "${@0} = {@1}$. Votaron {@2} {@3}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, pripočítame ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, sumamos ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.",
  "= 12 štvorčekov = 12 cm²": "= 12 cuadraditos = 12 cm²",
  "Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.": "Si tuviera dos ángulos rectos, sus lados serían paralelos y no se cortarían.",
  "Ako sa volá tento útvar? Vyber najpresnejší názov.": "¿Cómo se llama esta figura? Elige el nombre más preciso.",
  "Ako zapíšeš rímskymi číslicami {@0}?": "¿Cómo se escribe {@0} en números romanos?",
  "Aká dlhá je vodorovná strana obdĺžnika (v cm)?": "¿Cuánto mide el lado horizontal del rectángulo (en cm)?",
  "Aká dlhá je zvislá strana obdĺžnika (v cm)?": "¿Cuánto mide el lado vertical del rectángulo (en cm)?",
  "Aké číslo je zapísané rímskymi číslicami $\\text{{@0}}$?": "¿Qué número está escrito en números romanos $\\text{{@0}}$?",
  "Akú hodnotu má rímska číslica $\\text{{@0}}$?": "¿Qué valor tiene el número romano $\\text{{@0}}$?",
  "Akú hodnotu má časť $\\text{{@0}}$?": "¿Qué valor tiene la parte $\\text{{@0}}$?",
  "Aký je tento uhol?": "¿Cómo es este ángulo?",
  "Chýbajúci sčítanec zistíme odčítaním: ${@0} - {@1} = {@2}$.": "El sumando que falta lo averiguamos restando: ${@0} - {@1} = {@2}$.",
  "Desiatky": "Decenas",
  "Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.": "Los niños de la clase votaron su fruta favorita. Cada niño votó una vez.",
  "Deľ zľava a zvyšok na konci musí byť menší ako {@0}.": "Divide desde la izquierda; el resto final tiene que ser menor que {@0}.",
  "Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.": "Divide desde la izquierda. Toma tantas cifras como necesites para poder dividir y ve bajando las siguientes.",
  "Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.": "En el perímetro solo has contado dos lados. El perímetro lo forman los cuatro lados.",
  "Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.": "Hacia la derecha (a una unidad menor) multiplicamos; hacia la izquierda (a una unidad mayor) dividimos.",
  "Druhý súčin posuň o miesto doľava (znamená ${@0}$) a sčítaj: koľko je ${@1} + {@2}$?": "Desplaza el segundo producto un lugar a la izquierda (significa ${@0}$) y suma: ¿cuánto es ${@1} + {@2}$?",
  "Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.": "No has desplazado el segundo producto parcial un lugar a la izquierda. Multiplicas por las decenas, así que vale diez veces más.",
  "Dvakrát": "Dos veces",
  "Hodina má 60 minút a minúta 60 sekúnd.": "Una hora tiene 60 minutos y un minuto, 60 segundos.",
  "Hodnotu {@0} má rímska číslica {@1}, nie {@2}.": "El valor {@0} lo tiene el número romano {@1}, no {@2}.",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.": "No sumes los valores. «¿Cuánto más?» es una diferencia: resta el valor menor del mayor.",
  "Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.": "Suma los valores de los símbolos. Si un símbolo menor está delante de uno mayor (p. ej., IV, IX, XL, XC), réstalo.",
  "Hľadáme, koľko sme odčítali: ${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "Buscamos cuánto hemos restado: ${@0} - {@1} = {@2}$. Comprobación: ${@3} - {@4} = {@5}$.",
  "I = 1, V = 5, X = 10 – a ďalej L, C, D, M.": "I = 1, V = 5, X = 10, y después L, C, D, M.",
  "Jakub": "Diego",
  "Je toto tvrdenie pravdivé? „{@0}“": "¿Es verdadera esta afirmación? «{@0}»",
  "Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.": "Un triángulo tiene 3 ángulos; dos tienen $2\\cdot 3 = 6$ ángulos.",
  "Jednotky": "Unidades",
  "Každý obdĺžnik je štvorec.": "Todo rectángulo es un cuadrado.",
  "Každý uhol má 2 ramená a 1 vrchol.": "Todo ángulo tiene 2 lados y 1 vértice.",
  "Každý štvorec je obdĺžnik.": "Todo cuadrado es un rectángulo.",
  "Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. {@0}": "Cada cuadradito de la cuadrícula tiene 1 cm de lado. Halla el perímetro (en cm) y el área (en cm²) del rectángulo coloreado. Escríbelos en la forma «perímetro; área». {@0}",
  "Koľko autobusov po {@0} miest treba, aby sa zmestili všetci?": "¿Cuántos autobuses de {@0} plazas hacen falta para que quepan todos?",
  "Koľko detí hlasovalo za {@0}?": "¿Cuántos niños eligieron {@0}?",
  "Koľko eur majú spolu? Vypočítaj ${@0} + {@1} + {@2}$.": "¿Cuántos euros tienen en total? Calcula ${@0} + {@1} + {@2}$.",
  "Koľko eur má {@0}?": "¿Cuántos euros tiene {@0}?",
  "Koľko eur vydali? Vypočítaj ${@0} - {@1}$.": "¿Cuántos euros le devolvieron? Calcula ${@0} - {@1}$.",
  "Koľko je ${@0} + {@1}$ (dve susedné strany)?": "¿Cuánto es ${@0} + {@1}$ (dos lados contiguos)?",
  "Koľko je riadkov?": "¿Cuántas filas hay?",
  "Koľko kilogramov zemiakov zostalo po predaji?": "¿Cuántos kilogramos de patatas quedaron después de la venta?",
  "Koľko pravých uhlov má obdĺžnik?": "¿Cuántos ángulos rectos tiene un rectángulo?",
  "Koľko pravých uhlov má štvorec?": "¿Cuántos ángulos rectos tiene un cuadrado?",
  "Koľko ramien má jeden uhol?": "¿Cuántos lados tiene un ángulo?",
  "Koľko uhlov majú spolu dva trojuholníky?": "¿Cuántos ángulos tienen dos triángulos en total?",
  "Koľko uhlov má trojuholník?": "¿Cuántos ángulos tiene un triángulo?",
  "Koľko vrcholov má štvoruholník?": "¿Cuántos vértices tiene un cuadrilátero?",
  "Koľko vriec po {@0} kg sa z nich naplní?": "¿Cuántos sacos de {@0} kg se llenan con ellos?",
  "Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?": "¿Cuántas personas van de excursión en total (alumnos y profesores)?",
  "Koľko štvorčekov je v jednom riadku?": "¿Cuántos cuadraditos hay en una fila?",
  "Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) {@0}": "¿Cuántos cuadraditos de 1 cm × 1 cm cubren el rectángulo coloreado? (Escribe el área en cm².) {@0}",
  "Koľkokrát sa {@0} zmestí do {@1}?": "¿Cuántas veces cabe {@0} en {@1}?",
  "Ktorá číslica je v čísle ${@0}$ na mieste {@1}?": "¿Qué cifra está en el número ${@0}$ en el lugar de las {@1}?",
  "Ktoré číslo je o {@0} menšie ako ${@1}$?": "¿Qué número es {@0} menor que ${@1}$?",
  "Ktoré číslo je o {@0} väčšie ako ${@1}$?": "¿Qué número es {@0} mayor que ${@1}$?",
  "Lucia": "Elena",
  "Martin": "Martín",
  "Meníš na menšiu jednotku – číslo sa zväčší, násob.": "Pasas a una unidad menor: el número se hace mayor, multiplica.",
  "Meníš na väčšiu jednotku – číslo sa zmenší, deľ.": "Pasas a una unidad mayor: el número se hace menor, divide.",
  "Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.": "Un símbolo menor delante de uno mayor se resta, no se suma. Por ejemplo, IV = 5 − 1 = 4.",
  "Má 3 strany a 3 vrcholy – je to trojuholník.": "Tiene 3 lados y 3 vértices: es un triángulo.",
  "Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.": "Tiene 4 ángulos rectos y todos los lados iguales: es un cuadrado.",
  "Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.": "Tiene 4 ángulos rectos, pero los lados contiguos miden distinto: es un rectángulo.",
  "Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.": "Tiene 4 lados, pero sus ángulos no son rectos: es un cuadrilátero cualquiera.",
  "Na výlet idú {@0} triedy po {@1} žiakov a s nimi {@2} učitelia. Jeden autobus má {@3} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?": "Van de excursión {@0} clases de {@1} alumnos y con ellos {@2} profesores. Un autobús tiene {@3} plazas. ¿Cuántos autobuses tienen que pedir para que quepan todos?",
  "Najprv ${@0}\\cdot {@1} = {@2}$, potom ${@3}\\cdot {@4} = {@5}$ (píšeme o miesto doľava, znamená to ${@6}$). Sčítame: ${@7} + {@8} = {@9}$.": "Primero ${@0}\\cdot {@1} = {@2}$, después ${@3}\\cdot {@4} = {@5}$ (lo escribimos un lugar a la izquierda, significa ${@6}$). Sumamos: ${@7} + {@8} = {@9}$.",
  "Najprv cena nákupu: ${@0}\\cdot {@1} = {@2}$ {@3}. Potom vydané peniaze: ${@4} - {@5} = {@6}$. Vydali {@7} {@8} {@9}.": "Primero el precio de la compra: ${@0}\\cdot {@1} = {@2}$ {@3}. Después el cambio: ${@4} - {@5} = {@6}$. Así que {@7} devolvieron {@8} {@9}.",
  "Najprv násob jednotkami: koľko je ${@0}\\cdot {@1}$?": "Primero multiplica por las unidades: ¿cuánto es ${@0}\\cdot {@1}$?",
  "Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.": "Primero convierte la unidad mayor a la menor y después suma el resto.",
  "Najprv premeň väčšiu jednotku: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Primero convierte la unidad mayor: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.": "Primero averigua cuántos kilogramos quedaron y después cuántas veces cabe en ellos un saco.",
  "Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.": "Primero averigua cuánto costó toda la compra y después réstalo del billete.",
  "Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.": "Escribe los números uno debajo del otro, unidades debajo de unidades, y suma desde la derecha. No olvides las llevadas.",
  "Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.": "Escribe las cifras una detrás de otra en el orden millares, centenas, decenas, unidades. No olvides los ceros.",
  "Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.": "Multiplica desde la derecha: primero las unidades, después las decenas, las centenas… Las decenas del producto te las llevas.",
  "Obdĺžnik 4 krát 3 v štvorcovej sieti": "Rectángulo de 4 por 3 en una cuadrícula",
  "Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.": "El rectángulo tiene dos lados más largos y dos más cortos. Suma los cuatro.",
  "Obdĺžnik má protiľahlé strany rovnako dlhé.": "El rectángulo tiene los lados opuestos iguales.",
  "Obdĺžnik má všetky 4 uhly pravé.": "El rectángulo tiene los 4 ángulos rectos.",
  "Obdĺžnik má {@0} {@1} po {@2} štvorčekoch: ${@3}\\cdot {@4} = {@5}$. Obsah je ${@6}\\,\\text{cm}^2$.": "El rectángulo tiene {@0} {@1} de {@2} cuadraditos: ${@3}\\cdot {@4} = {@5}$. El área es ${@6}\\,\\text{cm}^2$.",
  "Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.": "Un rectángulo puede tener los lados contiguos de distinta longitud, por ejemplo 5 cm y 2 cm.",
  "Obdĺžnik v štvorcovej sieti": "Rectángulo en una cuadrícula",
  "Obsah: koľko je ${@0}\\cdot {@1}$?": "Área: ¿cuánto es ${@0}\\cdot {@1}$?",
  "Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.": "El perímetro es la longitud del borde; el área es el número de cuadraditos de dentro.",
  "Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.": "El perímetro no es el número de cuadraditos del borde, sino la longitud del borde. Suma las longitudes de todos los lados.",
  "Obvod tvoria 4 rovnaké strany: ${@0} : 4 = {@1}$, strana má ${@2}\\,\\text{{@3}}$.": "El perímetro lo forman 4 lados iguales: ${@0} : 4 = {@1}$, el lado mide ${@2}\\,\\text{{@3}}$.",
  "Obvod tvoria dve také dvojice strán: koľko je $2\\cdot {@0}$?": "El perímetro lo forman dos parejas de lados así: ¿cuánto es $2\\cdot {@0}$?",
  "Obvod štvorca vydeľ štyrmi.": "Divide el perímetro del cuadrado entre cuatro.",
  "Obvod: koľko je $2\\cdot({@0} + {@1})$?": "Perímetro: ¿cuánto es $2\\cdot({@0} + {@1})$?",
  "Od menšenca odčítaj rozdiel.": "Al minuendo réstale la diferencia.",
  "Od súčtu odčítaj známy sčítanec.": "A la suma réstale el sumando conocido.",
  "Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.": "Resta desde la derecha. Si la cifra de arriba es menor, súmale 10 y llévate 1 a la columna siguiente.",
  "Odčítaj {@0}. Pozor na prechod cez rád.": "Resta {@0}. Cuidado con el paso por el orden siguiente.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu celého nákupu.": "Has restado el precio de una sola cosa. Se compraron {@0} cosas: primero calcula el precio de toda la compra.",
  "Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "Un ángulo agudo es menor que la esquina de un cuaderno. Compara este ángulo con la esquina de un cuaderno.",
  "Ostrý, pravý a tupý uhol": "Ángulo agudo, recto y obtuso",
  "Porovnaj najprv počet číslic, potom číslice zľava doprava.": "Compara primero el número de cifras y después las cifras de izquierda a derecha.",
  "Porovnaj uhol s rohom zošita (pravým uhlom).": "Compara el ángulo con la esquina de un cuaderno (un ángulo recto).",
  "Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: ${@0} {@1} {@2}$.": "Comparamos desde la izquierda, orden por orden. Decide la primera cifra distinta: ${@0} {@1} {@2}$.",
  "Potom desiatkami: koľko je ${@0}\\cdot {@1}$?": "Después por las decenas: ¿cuánto es ${@0}\\cdot {@1}$?",
  "Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.": "Mira hasta qué línea llega la barra y lee el número de la izquierda.",
  "Počet ľudí: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, zvyšok {@7}.": "Número de personas: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, resto {@7}.",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.": "Has calculado con 100. Con el tiempo vale $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.",
  "Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.": "El ángulo recto tiene exactamente la forma de la esquina de un cuaderno y se marca con un cuadradito. Compara este ángulo con la esquina de un cuaderno.",
  "Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.": "Imagina la figura y cuenta sus vértices, lados o ángulos.",
  "Premeň: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Convierte: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Premeň: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$": "Convierte: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$",
  "Prevody jednotiek dĺžky a hmotnosti": "Conversión de unidades de longitud y de masa",
  "Prečítaj hodnotu každého stĺpca a všetky sčítaj.": "Lee el valor de cada barra y súmalos todos.",
  "Prečítaj obe hodnoty a odčítaj menšiu od väčšej.": "Lee los dos valores y resta el menor del mayor.",
  "Pripočítaj hlasy za {@0}: koľko je spolu teraz?": "Suma los votos de {@0}: ¿cuántos son ahora en total?",
  "Pripočítaj {@0}. Pozor na prechod cez rád.": "Suma {@0}. Cuidado con el paso por el orden siguiente.",
  "Pripíš {@0}: koľkokrát sa {@1} zmestí do {@2}?": "Baja {@0}: ¿cuántas veces cabe {@1} en {@2}?",
  "Písomné násobenie 243 krát 32": "Multiplicación en columna: 243 por 32",
  "Písomné sčítanie 3476 plus 2858": "Suma en columna: 3476 más 2858",
  "Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.": "Has repartido en sacos todas las patatas, también las vendidas. Primero resta las que se vendieron.",
  "Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.": "Descompón el número en decenas y unidades. Recuerda: 4 = IV, 9 = IX, 40 = XL, 90 = XC.",
  "Rozložíme: {@0}. Spolu ${@1} = \\text{{@2}}$.": "Descomponemos: {@0}. En total ${@1} = \\text{{@2}}$.",
  "Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.": "Has contado los órdenes desde la izquierda. Las unidades son la última cifra de la derecha; desde ahí avanza hacia la izquierda.",
  "Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste {@0} je číslica {@1}.": "Los órdenes se leen desde la derecha: unidades, decenas, centenas, unidades de millar, decenas de millar. En el lugar de las {@0} está la cifra {@1}.",
  "Rímske číslice a ich hodnoty": "Los números romanos y sus valores",
  "Samuel": "Samuel",
  "Skúška: ${@0} + {@1} = {@2}$.": "Comprobación: ${@0} + {@1} = {@2}$.",
  "Spoj obe časti: ako zapíšeš {@0}?": "Junta las dos partes: ¿cómo se escribe {@0}?",
  "Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.": "Recuerda: el rectángulo tiene 4 ángulos rectos y el cuadrado, además, todos los lados iguales.",
  "Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).": "Cuenta los lados y fíjate en si los ángulos son rectos (un cuadradito en la esquina).",
  "Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.": "Cuenta los lados de la figura. El triángulo tiene 3 lados; el cuadrilátero, 4.",
  "Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.": "Cuenta a todas las personas, también a los profesores. Si después de dividir sobra alguien, hace falta otro autobús.",
  "Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.": "Cuenta los cuadraditos de una fila y multiplica por el número de filas.",
  "Stovky": "Centenas",
  "Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.": "Has multiplicado el lado por sí mismo: eso sería el área. El perímetro es la suma de los cuatro lados.",
  "Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.": "Has sumado los lados. El área es el número de cuadraditos: cuadraditos de una fila por número de filas.",
  "Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.": "Has multiplicado los lados: eso sería el área. El perímetro es la longitud del borde, hay que sumar los lados.",
  "Strany sú {@0} cm a {@1} cm. Obvod: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Obsah: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.": "Los lados miden {@0} cm y {@1} cm. Perímetro: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Área: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.",
  "Stĺpcový diagram hlasovania": "Diagrama de barras de la votación",
  "Stĺpec „{@0}“ siaha po čiaru {@1}. Hlasovalo {@2} {@3}.": "La barra «{@0}» llega hasta la línea {@1}. Votaron {@2} {@3}.",
  "Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{{@0}}$?": "Suma los valores de todas las partes. ¿Qué número es $\\text{{@0}}$?",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.": "Solo has sumado dos lados. El rectángulo tiene cuatro lados, así que multiplica por dos la suma de dos lados contiguos.",
  "Tabuľka miestnych hodnôt pre číslo 47 385": "Tabla de valor posicional del número 47 385",
  "Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.": "El mismo símbolo se puede escribir como mucho tres veces seguidas. En lugar de cuatro símbolos iguales, usa la resta, por ejemplo 4 = IV.",
  "Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.": "Esta figura tiene ángulos rectos (un cuadradito en la esquina), así que tiene un nombre más preciso.",
  "Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.": "Esta figura no tiene ángulos rectos. El cuadrado y el rectángulo tienen todos los ángulos rectos.",
  "Tisíce": "Unidades de millar",
  "To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.": "Ese es el precio de toda la compra. Ahora averigua cuántos euros le devolvieron del billete.",
  "To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.": "Eso es el perímetro, la longitud del borde. El área es el número de cuadraditos de dentro.",
  "To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.": "Ese es el número de tipos de fruta. Suma cuántos niños eligieron cada fruta.",
  "To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po {@0} kg sa z nich naplní.": "Esos son los kilogramos que quedaron. Ahora averigua cuántos sacos de {@0} kg se llenan con ellos.",
  "Toľko má len {@0}. Pýtame sa, koľko majú spolu všetky tri deti.": "Eso es solo lo que tiene {@0}. Se pregunta cuánto tienen los tres niños juntos.",
  "Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.": "Esos son los ángulos de un triángulo. Los triángulos son dos.",
  "Treba {@0} {@1}.": "Hacen falta {@0} {@1}.",
  "Trikrát": "Tres veces",
  "Trojuholník má 3 vrcholy, a preto aj 3 uhly.": "El triángulo tiene 3 vértices y, por eso, también 3 ángulos.",
  "Trojuholník môže mať dva pravé uhly.": "Un triángulo puede tener dos ángulos rectos.",
  "Tupý uhol je menší ako pravý uhol.": "Un ángulo obtuso es menor que un ángulo recto.",
  "Tupý uhol je väčší ako pravý, menší je ostrý uhol.": "El ángulo obtuso es mayor que el recto; el menor es el agudo.",
  "Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "Un ángulo obtuso es mayor que la esquina de un cuaderno. Compara este ángulo con la esquina de un cuaderno.",
  "Uhol je menší ako roh zošita, je ostrý.": "El ángulo es menor que la esquina de un cuaderno: es agudo.",
  "Uhol je väčší ako roh zošita, je tupý.": "El ángulo es mayor que la esquina de un cuaderno: es obtuso.",
  "Uhol má tvar rohu zošita, je pravý.": "El ángulo tiene la forma de la esquina de un cuaderno: es recto.",
  "V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.": "En alguna columna has restado la cifra de arriba de la de abajo porque era menor. En ese caso, suma 10 a la cifra de arriba y llévate 1.",
  "V obchode mali {@0} kg zemiakov. Predali {@1} kg a zvyšok rozdelili do vriec po {@2} kg. Koľko vriec naplnili?": "En la tienda tenían {@0} kg de patatas. Vendieron {@1} kg y el resto lo repartieron en sacos de {@2} kg. ¿Cuántos sacos llenaron?",
  "V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.": "Te falta un cero en el cociente. Cuando después de bajar una cifra no se puede dividir, escribe 0 en el cociente y baja la cifra siguiente.",
  "Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.": "Te has saltado el cero. Si falta algún orden, escribe un 0 en su lugar; si no, las cifras se desplazan.",
  "Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.": "Multiplica primero por las unidades y después por las decenas. Desplaza el segundo resultado un lugar a la izquierda y suma los dos.",
  "Vynásobil si len jednotkami. Vynásob aj desiatkami ({@0}) a oba čiastočné súčiny sčítaj.": "Solo has multiplicado por las unidades. Multiplica también por las decenas ({@0}) y suma los dos productos parciales.",
  "Vypočítaj obvod obdĺžnika so stranami ${@0}\\,\\text{{@1}}$ a ${@2}\\,\\text{{@3}}$. Výsledok zapíš v {@4}.": "Calcula el perímetro de un rectángulo de lados ${@0}\\,\\text{{@1}}$ y ${@2}\\,\\text{{@3}}$. Escribe el resultado en {@4}.",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$. Výsledok zapíš v {@2}.": "Calcula el perímetro de un cuadrado de lado ${@0}\\,\\text{{@1}}$. Escribe el resultado en {@2}.",
  "Vypočítaj písomne ${@0} + {@1}$.": "Calcula en columna ${@0} + {@1}$.",
  "Vypočítaj písomne ${@0} - {@1}$.": "Calcula en columna ${@0} - {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$.": "Calcula ${@0} : {@1}$ con el algoritmo de la división.",
  "Vypočítaj písomne ${@0} : {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "Calcula ${@0} : {@1}$ con el algoritmo de la división. Escribe el cociente y el resto separados por punto y coma.",
  "Vypočítaj písomne ${@0}\\cdot {@1}$.": "Calcula en columna ${@0}\\cdot {@1}$.",
  "Za {@0}: {@1}, za {@2}: {@3}. ${@4} - {@5} = {@6}$.": "{@0}: {@1}; {@2}: {@3}. ${@4} - {@5} = {@6}$.",
  "Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.": "Se te ha olvidado la llevada. Después de pedir prestado, súmala a la cifra de abajo de la columna siguiente.",
  "Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.": "Se te han olvidado las llevadas. Cuando la suma de una columna es 10 o más, suma 1 en la columna siguiente de la izquierda.",
  "Zabudol si pripočítať ešte ${@0}\\,\\text{{@1}}$.": "Se te ha olvidado sumar todavía ${@0}\\,\\text{{@1}}$.",
  "Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.": "Se te ha olvidado sumar las decenas que te llevabas. Las decenas del producto se suman al producto del orden siguiente.",
  "Zapíš obvod a obsah v tvare „obvod; obsah“.": "Escribe el perímetro y el área en la forma «perímetro; área».",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.": "Escribe el cociente con los números que te han salido en cada paso y el resto del último paso.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.": "Escribe el cociente con los números que te han salido en cada paso.",
  "Zapíš rímskymi číslicami číslo {@0}.": "Escribe el número {@0} en números romanos.",
  "Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.": "Escribe el resultado con las cifras que te han salido en las columnas.",
  "Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.": "Escribe el resultado: de cada columna, las unidades de la suma; las decenas te las has llevado.",
  "Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.": "Escribe el resultado: de cada producto, las unidades; las decenas te las has llevado.",
  "Zapíš číslom: {@0} {@1}, {@2} {@3}, {@4} {@5} a {@6} {@7}.": "Escribe con cifras: {@0} {@1}, {@2} {@3}, {@4} {@5} y {@6} {@7}.",
  "Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.": "Empieza por la última cifra de la derecha (son las unidades) y avanza hacia la izquierda.",
  "Zisti, koľkokrát sa 60 zmestí do daného čísla.": "Averigua cuántas veces cabe 60 en el número dado.",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.": "El signo = solo va entre dos números iguales. Estos números se diferencian al menos en una cifra.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.": "El signo está al revés. Compara desde la izquierda: decide la primera cifra en la que los números son distintos.",
  "Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.": "El signo está al revés. El número con más cifras es mayor.",
  "Zvyšní ľudia potrebujú ešte jeden autobus, preto treba {@0} {@1}.": "Las personas que sobran necesitan otro autobús más, así que hacen falta {@0} {@1}.",
  "Zvyšok zemiakov: ${@0} - {@1} = {@2}$ kg. Počet vriec: ${@3} : {@4} = {@5}$.": "Patatas que quedan: ${@0} - {@1} = {@2}$ kg. Número de sacos: ${@3} : {@4} = {@5}$.",
  "autobus": "autobús",
  "autobusy": "autobuses",
  "banány": "plátanos",
  "dag": "dag",
  "desaťtisíce": "decenas de millar",
  "desaťtisícov": "decenas de millar",
  "dvakrát": "dos veces",
  "eur": "euros",
  "eurá": "euros",
  "hrušky": "peras",
  "jahody": "fresas",
  "k dolnej číslici pripočítaj zapamätanú 1 (${@0} + 1 = {@1}$).": "a la cifra de abajo súmale la que te llevabas (${@0} + 1 = {@1}$).",
  "napr. III": "p. ej., III",
  "napr. XIV": "p. ej., XIV",
  "napr. XX": "p. ej., XX",
  "nepravda": "falso",
  "obsah: 3 riadky po 4 štvorčekoch": "área: 3 filas de 4 cuadraditos",
  "obvod: 4 + 3 + 4 + 3 = 14 cm": "perímetro: 4 + 3 + 4 + 3 = 14 cm",
  "obvod; obsah": "perímetro; área",
  "opíšeme {@0}": "copiamos {@0}",
  "ostrý": "agudo",
  "pravda": "verdadero",
  "pravý": "recto",
  "pripíšeme {@0}: ${@1} : {@2} = {@3}$, lebo ${@4}\\cdot {@5} = {@6}$, zvyšok {@7}": "bajamos {@0}: ${@1} : {@2} = {@3}$, porque ${@4}\\cdot {@5} = {@6}$, resto {@7}",
  "píšeme {@0}": "escribimos {@0}",
  "píšeme {@0} a 1 si pamätáme": "escribimos {@0} y nos llevamos 1",
  "píšeme {@0} a {@1} si pamätáme": "escribimos {@0} y nos llevamos {@1}",
  "riadky": "filas",
  "riadok": "fila",
  "slivky": "ciruelas",
  "stovka": "centena",
  "tisíce": "unidades de millar",
  "tisícka": "unidad de millar",
  "tisícky": "unidades de millar",
  "tisícok": "unidades de millar",
  "tisícov": "unidades de millar",
  "trikrát": "tres veces",
  "tričiek": "camisetas",
  "tričká": "camisetas",
  "tupý": "obtuso",
  "uhol": "ángulo",
  "všeobecný štvoruholník": "cuadrilátero cualquiera",
  "všetci traja": "los tres",
  "všetky tri": "las tres",
  "zaplatil": "pagó",
  "zaplatila": "pagó",
  "{@0} Koľko detí hlasovalo spolu?": "{@0} ¿Cuántos niños votaron en total?",
  "{@0} Koľko detí hlasovalo za {@1}?": "{@0} ¿Cuántos niños eligieron {@1}?",
  "{@0} O koľko viac detí hlasovalo za {@1} ako za {@2}?": "{@0} ¿Cuántos niños más eligieron {@1} que {@2}?",
  "{@0} Podiel je ${@1}$, zvyšok {@2}. Skúška: ${@3}\\cdot {@4} + {@5} = {@6}$.": "{@0} El cociente es ${@1}$, resto {@2}. Comprobación: ${@3}\\cdot {@4} + {@5} = {@6}$.",
  "{@0} Výsledok je ${@1}$. Skúška: ${@2}\\cdot {@3} = {@4}$.": "{@0} El resultado es ${@1}$. Comprobación: ${@2}\\cdot {@3} = {@4}$.",
  "{@0} je menej ako {@1}, preto ${@2} - {@3} = {@4}$, píšeme {@5} a 1 si pamätáme": "{@0} es menor que {@1}, por eso ${@2} - {@3} = {@4}$, escribimos {@5} y nos llevamos 1",
  "{@0} je menej ako {@1}, preto počítaj ${@2} - {@3}$. Koľko to je?": "{@0} es menor que {@1}, así que calcula ${@2} - {@3}$. ¿Cuánto es?",
  "{@0} má ušetrených {@1} {@2}. {@3} má o {@4} {@5} viac ako {@6} a {@7} má {@8} toľko ako {@9}. Koľko eur majú {@10} spolu?": "{@0} tiene {@1} {@2} ahorrados. {@3} tiene {@4} {@5} más que {@6} y {@7} tiene {@8} lo que tiene {@9}. ¿Cuántos euros tienen entre {@10}?",
  "{@0} má {@1} toľko ako {@2}, nie ako {@3}. Násob sumu, ktorú má {@4}.": "{@0} tiene {@1} lo que tiene {@2}, no lo que tiene {@3}. Multiplica la cantidad que tiene {@4}.",
  "{@0} {@1} {@2} {@3} po {@4} {@5} a {@6} {@7}-eurovou bankovkou. Koľko eur {@8} vydali?": "{@0} {@1} {@2} {@3} a {@4} {@5} la unidad y {@6} con un billete de {@7} euros. ¿Cuántos euros {@8} devolvieron?",
  "{@0}. Spolu {@1}.": "{@0}. En total {@1}.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$ {@12}.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. En total: ${@8} + {@9} + {@10} = {@11}$ {@12}.",
  "{@0}: koľko je ${@1} + {@2} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)": "{@0}: ¿cuánto es ${@1} + {@2} + 1$? (El 1 te lo llevas de la columna anterior.)",
  "{@0}: koľko je ${@1} + {@2}$?": "{@0}: ¿cuánto es ${@1} + {@2}$?",
  "{@0}: koľko je ${@1}\\cdot {@2} + {@3}$? ({@4} si pamätáš z predchádzajúceho rádu.)": "{@0}: ¿cuánto es ${@1}\\cdot {@2} + {@3}$? (Las {@4} te las llevas del orden anterior.)",
  "{@0}: koľko je ${@1}\\cdot {@2}$?": "{@0}: ¿cuánto es ${@1}\\cdot {@2}$?",
  "Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.": "Sí, los lados opuestos del rectángulo son iguales.",
  "Áno, to je vlastnosť štvorca.": "Sí, es una propiedad del cuadrado.",
  "útvar": "figura",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}\\,\\text{{@1}}$ na menšiu jednotku $\\text{{@2}}$.": "No sumes los números directamente. Primero convierte ${@0}\\,\\text{{@1}}$ a la unidad menor $\\text{{@2}}$.",
  "Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.": "No sumes los números. El sumando que falta se averigua restando: a la suma réstale el sumando conocido.",
  "Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.": "No sumes los números. El número buscado se averigua restando: al minuendo réstale la diferencia.",
  "Čísla sú rovnaké.": "Los números son iguales.",
  "Číslo s viacerými číslicami je väčšie, preto ${@0} {@1} {@2}$.": "El número con más cifras es mayor, por eso ${@0} {@1} {@2}$.",
  "čerešne": "cerezas",
  "Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.": "El cuadrado también es un rectángulo, pero buscamos el nombre más preciso. Fíjate en si todos los lados miden lo mismo.",
  "Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.": "El cuadrado tiene 4 ángulos rectos y los lados opuestos iguales, así que es un rectángulo especial.",
  "Štvorec má obvod ${@0}\\,\\text{{@1}}$. Aká dlhá je jeho strana (v {@2})?": "Un cuadrado tiene un perímetro de ${@0}\\,\\text{{@1}}$. ¿Cuánto mide su lado (en {@2})?",
  "Štvorec má všetky 4 uhly pravé.": "El cuadrado tiene los 4 ángulos rectos.",
  "Štvorec má všetky strany rovnako dlhé.": "El cuadrado tiene todos los lados iguales.",
  "Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.": "El cuadrado tiene todos los lados iguales. Aquí los lados contiguos miden distinto.",
  "Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník": "Cuadrado, rectángulo, triángulo y cuadrilátero cualquiera",
  "Štvoruholník má 4 strany a 4 vrcholy.": "El cuadrilátero tiene 4 lados y 4 vértices.",
  "Štyrikrát": "Cuatro veces",
  "štyrikrát": "cuatro veces",
  "„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.": "«… más» significa sumar; «… veces lo que» significa multiplicar. Después súmalo todo.",
  "„{@0} toľko“ znamená násobiť, nie pripočítať {@1}.": "«{@0} lo que» significa multiplicar, no sumar {@1}."
 }
});
