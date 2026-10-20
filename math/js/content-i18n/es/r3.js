/* Español: preklad js/rocniky/r3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/r3/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "r3-cisla1000": {
   "title": "Números hasta el 1 000",
   "summary": "Centenas, decenas y unidades, la recta numérica y comparar números de tres cifras.",
   "theory": [
    "<p>Un número de tres cifras tiene <strong>centenas (C)</strong>, <strong>decenas (D)</strong> y <strong>unidades (U)</strong>.\n       El 472 tiene 4 centenas, 7 decenas y 2 unidades: $472 = 400 + 70 + 2$. Diez centenas son <strong>mil</strong>: $1\\,000$.</p>",
    {
     "fig": "r3-rad1000",
     "caption": "Recta numérica del 0 al 1 000. El 350 está justo en medio entre 300 y 400; el 720 está más cerca del 700."
    },
    "<p><strong>Comparar:</strong> primero comparamos las centenas; si son iguales, las decenas, y por último las unidades.\n       $538 &gt; 497$, porque 5 centenas son más que 4. $642 &lt; 648$, porque las centenas y las decenas son iguales y $2 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "Compara los números 806 y 860.",
     "steps": [
      "Las centenas son iguales (8).",
      "Decenas: 0 y 6; el cero es menor.",
      "<strong>$806 &lt; 860$</strong>"
     ]
    },
    {
     "task": "Escribe el número que tiene 3 centenas, 0 decenas y 9 unidades.",
     "steps": [
      "$300 + 0 + 9 = 309$.",
      "En el lugar de las decenas escribimos un cero.",
      "<strong>Es el número 309.</strong>"
     ]
    }
   ]
  },
  "r3-scitanie": {
   "title": "Sumas y restas hasta el 1 000",
   "summary": "Cálculo mental por partes y cálculo escrito en columna.",
   "theory": [
    "<p><strong>Mentalmente</strong> calculamos por partes: $356 + 230$ = primero $356 + 200 = 556$, luego $556 + 30 = 586$.\n       Con centenas completas calculamos como con unidades: $400 + 500 = 900$, $800 - 300 = 500$.</p>",
    "<p><strong>Por escrito</strong> colocamos los números uno debajo del otro, de modo que las unidades queden bajo las unidades, las decenas bajo las decenas y las centenas bajo las centenas.\n       Calculamos desde la derecha: unidades, decenas, centenas. Si en algún lugar la suma pasa de 9, nos llevamos una al lugar de la izquierda.</p>",
    {
     "fig": "r3-stlpec",
     "caption": "Suma en columna $347 + 285 = 632$. Los unos pequeños de arriba son las decenas y centenas que nos llevamos."
    },
    "<p>Una resta siempre se puede <strong>comprobar con una suma</strong>: si $632 - 285 = 347$, entonces debe cumplirse $347 + 285 = 632$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $468 + 275$.",
     "steps": [
      "Unidades: $8 + 5 = 13$, escribo 3 y me llevo 1.",
      "Decenas: $6 + 7 + 1 = 14$, escribo 4 y me llevo 1.",
      "Centenas: $4 + 2 + 1 = 7$.",
      "<strong>Resultado: 743</strong>"
     ]
    },
    {
     "task": "Calcula $700 - 340$.",
     "steps": [
      "$700 - 300 = 400$.",
      "$400 - 40 = 360$.",
      "Comprobación: $360 + 340 = 700$. <strong>Resultado: 360</strong>"
     ]
    }
   ]
  },
  "r3-nasobilka": {
   "title": "Multiplicación y división",
   "summary": "Todas las tablas de multiplicar, multiplicar decenas y división con resto.",
   "theory": [
    "<p>Las tablas hasta $10 \\cdot 10$ se pueden buscar en una tabla: en la fila está el primer factor, en la columna el segundo y donde se cruzan está el producto.\n       La división es lo contrario de la multiplicación: de $6 \\cdot 7 = 42$ sabemos que $42 : 6 = 7$ y también $42 : 7 = 6$.</p>",
    {
     "fig": "r3-nasobilka",
     "caption": "Tabla de multiplicar: la fila 6 y la columna 7 se cruzan en el 42, es decir, $6 \\cdot 7 = 42$."
    },
    "<p><strong>Multiplicar decenas:</strong> $30 \\cdot 4$ son 3 decenas por 4, es decir, 12 decenas, o sea, $120$.</p>",
    "<p><strong>División con resto:</strong> no todas las divisiones son exactas. $17 : 5 = 3$ <em>y resto</em> 2, porque $3 \\cdot 5 = 15$\n       y para llegar a 17 faltan 2. El resto siempre debe ser menor que el divisor.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $8 \\cdot 7$ y $56 : 8$.",
     "steps": [
      "Por la tabla: $8 \\cdot 7 = 56$.",
      "La división es lo contrario de la multiplicación, así que $56 : 8 = 7$."
     ]
    },
    {
     "task": "Divide con resto $29 : 4$.",
     "steps": [
      "El mayor múltiplo de 4 que no pasa de 29 es $7 \\cdot 4 = 28$.",
      "Resto: $29 - 28 = 1$.",
      "<strong>$29 : 4 = 7$, resto 1</strong>"
     ]
    }
   ]
  },
  "r3-zatvorky": {
   "title": "Paréntesis y jerarquía de operaciones",
   "summary": "Qué calculamos primero: paréntesis, multiplicación y división, suma y resta.",
   "theory": [
    "<p>En una operación con varios cálculos se sigue este orden:</p>\n       <ol><li>primero calculamos lo que está entre <strong>paréntesis</strong>,</li>\n       <li>después las <strong>multiplicaciones y divisiones</strong>,</li>\n       <li>por último las <strong>sumas y restas</strong> (de izquierda a derecha).</li></ol>",
    "<p>Compara: $2 + 3 \\cdot 4 = 2 + 12 = 14$, pero $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$. ¡Los paréntesis cambian el resultado!</p>",
    "<p>Si solo hay sumas y restas, vamos de izquierda a derecha: $20 - 5 - 3 = 15 - 3 = 12$. Pero si una parte está entre paréntesis,\n       la calculamos antes: $20 - (5 - 3) = 20 - 2 = 18$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $18 + 4 \\cdot 6$.",
     "steps": [
      "La multiplicación va primero: $4 \\cdot 6 = 24$.",
      "$18 + 24 = 42$.",
      "<strong>Resultado: 42</strong>"
     ]
    },
    {
     "task": "Calcula $(15 - 7) \\cdot 3$.",
     "steps": [
      "Primero el paréntesis: $15 - 7 = 8$.",
      "$8 \\cdot 3 = 24$.",
      "<strong>Resultado: 24</strong>"
     ]
    }
   ]
  },
  "r3-slovne": {
   "title": "Problemas de varios pasos",
   "summary": "Problemas que se resuelven con dos o tres operaciones seguidas.",
   "theory": [
    "<p>Algunos problemas no se resuelven con una sola operación. Vamos paso a paso: <strong>qué sabemos</strong>,\n       <strong>qué tenemos que averiguar primero</strong> y <strong>qué buscamos al final</strong>.</p>",
    "<p>Ejemplo: Mamá compró 3 cuadernos de 4 € cada uno y pagó con un billete de 20 €. ¿Cuántos euros le devolvieron?<br>\n       1.er paso – precio de los cuadernos: $3 \\cdot 4 = 12$ €.<br>2.º paso – le devolvieron: $20 - 12 = 8$ €.<br>Respuesta: A mamá le devolvieron 8 €.</p>",
    "<p>Los pasos también se pueden unir en una sola expresión: $20 - 3 \\cdot 4 = 20 - 12 = 8$ (la multiplicación va primero).\n       Al final siempre comprobamos si la respuesta tiene sentido.</p>"
   ],
   "examples": [
    {
     "task": "En el autobús iban 34 personas. En una parada bajaron 12 personas y subieron 9. ¿Cuántas personas hay ahora en el autobús?",
     "steps": [
      "Después de bajar: $34 - 12 = 22$.",
      "Después de subir: $22 + 9 = 31$.",
      "<strong>En el autobús hay 31 personas.</strong>"
     ]
    },
    {
     "task": "Lucía tiene 2 paquetes de 8 pegatinas y 5 sueltas más. ¿Cuántas pegatinas tiene en total?",
     "steps": [
      "En los paquetes: $2 \\cdot 8 = 16$.",
      "En total: $16 + 5 = 21$.",
      "<strong>Lucía tiene 21 pegatinas.</strong>"
     ]
    }
   ]
  },
  "r3-obvod": {
   "title": "Perímetro de figuras planas",
   "summary": "Perímetro del triángulo, el cuadrado y el rectángulo como suma de sus lados.",
   "theory": [
    "<p>El <strong>perímetro</strong> de una figura es la longitud de la línea que la rodea. Se calcula <strong>sumando las longitudes de todos los lados</strong>.\n       El perímetro se indica con la letra $o$.</p>",
    {
     "fig": "r3-obvod",
     "caption": "El rectángulo tiene dos lados más largos y dos más cortos; el triángulo, tres lados. El perímetro es la suma de todos los lados."
    },
    "<p><strong>Triángulo</strong> de lados $a, b, c$: $o = a + b + c$.<br>\n       <strong>Cuadrado</strong> de lado $a$: $o = a + a + a + a = 4 \\cdot a$.<br>\n       <strong>Rectángulo</strong> de lados $a, b$: $o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula el perímetro de un cuadrado de lado $7\\,\\text{cm}$.",
     "steps": [
      "El cuadrado tiene 4 lados iguales.",
      "$o = 4 \\cdot 7 = 28$.",
      "<strong>$o = 28\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Un rectángulo tiene lados de $9\\,\\text{cm}$ y $4\\,\\text{cm}$. ¿Cuál es su perímetro?",
     "steps": [
      "$o = 9 + 4 + 9 + 4$.",
      "$o = 18 + 8 = 26$.",
      "<strong>$o = 26\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "r3-jednotky": {
   "title": "Unidades de longitud, masa, capacidad y tiempo",
   "summary": "Del milímetro al kilómetro, gramo y kilogramo, litro y decilitro, del segundo a la semana.",
   "theory": [
    "<p><strong>Longitud:</strong> $1\\,\\text{cm} = 10\\,\\text{mm}$, $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{m} = 100\\,\\text{cm}$,\n       $1\\,\\text{km} = 1\\,000\\,\\text{m}$.</p>",
    "<p><strong>Masa:</strong> $1\\,\\text{kg} = 1\\,000\\,\\text{g}$, $1\\,\\text{t} = 1\\,000\\,\\text{kg}$.<br>\n       <strong>Capacidad:</strong> $1\\,\\text{l} = 10\\,\\text{dl}$, $1\\,\\text{dl} = 100\\,\\text{ml}$, es decir, $1\\,\\text{l} = 1\\,000\\,\\text{ml}$.</p>",
    "<p><strong>Tiempo:</strong> $1\\,\\text{min} = 60\\,\\text{s}$, $1\\,\\text{h} = 60\\,\\text{min}$, 1 día = 24 h, 1 semana = 7 días.</p>",
    "<p>Al pasar a una unidad <strong>menor</strong>, el número se hace más grande (multiplicamos); al pasar a una unidad <strong>mayor</strong>, se hace más pequeño (dividimos).\n       Por ejemplo, $3\\,\\text{m} = 300\\,\\text{cm}$ y $40\\,\\text{mm} = 4\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Expresa $2\\,\\text{m}\\ 35\\,\\text{cm}$ en centímetros.",
     "steps": [
      "$2\\,\\text{m} = 200\\,\\text{cm}$.",
      "$200 + 35 = 235$.",
      "<strong>$235\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Una película empezó a las 17:40 y terminó a las 19:10. ¿Cuántos minutos duró?",
     "steps": [
      "De 17:40 a 18:00 hay 20 minutos.",
      "De 18:00 a 19:00 hay 60 minutos y de 19:00 a 19:10, 10 minutos más.",
      "$20 + 60 + 10 = 90$. <strong>La película duró 90 minutos.</strong>"
     ]
    }
   ]
  },
  "r3-tabulky": {
   "title": "Tablas y datos sencillos",
   "summary": "Leer datos de una tabla y de un gráfico de barras, comparar y sumar.",
   "theory": [
    "<p>Los datos se suelen anotar en una <strong>tabla</strong>. En la primera fila están los nombres (por ejemplo, los días) y debajo, los números.\n       Una heladería anotó cuántos helados vendió:</p>\n       <table class=\"tbl\"><tr><th>día</th><th>Lu</th><th>Ma</th><th>Mi</th><th>Ju</th><th>Vi</th></tr>\n       <tr><td>helados</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>",
    "<p>Los mismos datos se pueden dibujar en un <strong>gráfico de barras</strong>. Cuanto más alta es la barra, mayor es el número.</p>",
    {
     "fig": "r3-graf",
     "caption": "La barra más alta es la del viernes (18) y la más baja, la del martes (8). El viernes vendieron $18 - 8 = 10$ helados más que el martes."
    },
    "<p>Con los datos podemos averiguar dónde hay <strong>más</strong> y <strong>menos</strong>, <strong>cuánto</strong> se diferencian dos números\n       (resta) y cuánto suman <strong>en total</strong> (suma).</p>"
   ],
   "examples": [
    {
     "task": "¿Cuántos helados vendieron en total el lunes y el miércoles (según la tabla de arriba)?",
     "steps": [
      "Lunes 12, miércoles 15.",
      "$12 + 15 = 27$.",
      "<strong>En total vendieron 27 helados.</strong>"
     ]
    },
    {
     "task": "¿Cuántos helados más vendieron el miércoles que el jueves?",
     "steps": [
      "Miércoles 15, jueves 10.",
      "$15 - 10 = 5$.",
      "<strong>El miércoles vendieron 5 helados más.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} : {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, por eso ${@2} : {@3} = {@4}$. ${@5} = {@6}$.",
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, por eso ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Comprobación: ${@3} + {@4} = {@5}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Comprobación: ${@3} - {@4} = {@5}$.",
  "${@0} = {@1} + {@2} + {@3}$. Na mieste {@4} je číslica {@5}.": "${@0} = {@1} + {@2} + {@3}$. En el lugar de las {@4} está la cifra {@5}.",
  "${@0} = {@1}$, potom ${@2} + {@3} = {@4}$. Výsledok: ${@5}$.": "${@0} = {@1}$, después ${@2} + {@3} = {@4}$. Resultado: ${@5}$.",
  "1. krok – cena: ${@0} \\cdot {@1} = {@2}$ €. 2. krok – vrátili: ${@3} - {@4} = {@5}$ €.": "1.er paso – precio: ${@0} \\cdot {@1} = {@2}$ €. 2.º paso – le devolvieron: ${@3} - {@4} = {@5}$ €.",
  "4 + 8 + 1 = 13, píšem 3, 1 ďalej": "4 + 8 + 1 = 13, escribo 3 y me llevo 1",
  "7 + 5 = 12, píšem 2, 1 ďalej": "7 + 5 = 12, escribo 2 y me llevo 1",
  "Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.": "Si no te acuerdas, descompón la operación: por ejemplo, $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.",
  "Akú číslicu má číslo {@0} na mieste {@1}?": "¿Qué cifra tiene el número {@0} en el lugar de las {@1}?",
  "Bez zátvoriek počítaj zľava doprava.": "Sin paréntesis, calcula de izquierda a derecha.",
  "Bez zátvoriek počítame zľava: ${@0} - {@1} = {@2}$, potom ${@3} - {@4} = {@5}$.": "Sin paréntesis calculamos desde la izquierda: ${@0} - {@1} = {@2}$, después ${@3} - {@4} = {@5}$.",
  "Bez zátvoriek sa počíta zľava doprava. Najprv vypočítaj ${@0} - {@1}$, až potom odčítaj {@2}.": "Sin paréntesis se calcula de izquierda a derecha. Primero calcula ${@0} - {@1}$ y solo después resta {@2}.",
  "Cesta vlakom k babke trvala 3 …": "El viaje en tren a casa de la abuela duró 3 …",
  "Chýbajúci sčítanec zistíš odčítaním.": "El sumando que falta lo averiguas restando.",
  "Do hrnčeka sa zmestia asi 3 …": "En una taza caben unos 3 …",
  "Doplň chýbajúce číslo: $\\square \\cdot {@0} = {@1}$": "Completa el número que falta: $\\square \\cdot {@0} = {@1}$",
  "Doplň správny znak: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$": "Pon el signo correcto: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$",
  "Doplň vhodnú jednotku: {@0}": "Elige la unidad adecuada: {@0}",
  "Dve dlhšie strany: koľko je $2 \\cdot {@0}$?": "Los dos lados más largos: ¿cuánto es $2 \\cdot {@0}$?",
  "Dve kratšie strany: koľko je $2 \\cdot {@0}$?": "Los dos lados más cortos: ¿cuánto es $2 \\cdot {@0}$?",
  "Dve strany po {@0} cm majú spolu $2 \\cdot {@1} = {@2}$. Na zvyšné dve strany ostáva ${@3} - {@4} = {@5}$, jedna strana je ${@6} : 2 = {@7}\\,\\text{cm}$.": "Dos lados de {@0} cm suman $2 \\cdot {@1} = {@2}$. Para los otros dos lados quedan ${@3} - {@4} = {@5}$, así que un lado mide ${@6} : 2 = {@7}\\,\\text{cm}$.",
  "Dvere sú vysoké asi 2 …": "La altura de una puerta es de unos 2 …",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšie číslo od väčšieho.": "No sumes los valores. «¿Cuánto más?» es una diferencia: resta el número menor del mayor.",
  "Hľadaj najmenšie číslo (najnižší stĺpec).": "Busca el número menor (la barra más baja).",
  "Hľadaj najväčšie číslo (najvyšší stĺpec).": "Busca el número mayor (la barra más alta).",
  "Hľadaj suseda v číselnom rade.": "Busca el vecino en la serie numérica.",
  "Hľadaj v násobilke čísla {@0} najväčší násobok, ktorý sa ešte zmestí do {@1}. Zvyšok musí byť menší ako {@2}.": "Busca en la tabla del {@0} el mayor múltiplo que todavía quepa en {@1}. El resto tiene que ser menor que {@2}.",
  "Jablko váži asi 150 …": "Una manzana pesa unos 150 …",
  "Jednotka {@0} je tu primalá: {@1} {@2} by bolo veľmi málo.": "La unidad {@0} es demasiado pequeña aquí: {@1} {@2} sería muy poco.",
  "Jednotka {@0} je tu priveľká: {@1} {@2} by bolo veľmi veľa.": "La unidad {@0} es demasiado grande aquí: {@1} {@2} sería muchísimo.",
  "Koľko centimetrov majú spolu dve strany po {@0} cm?": "¿Cuántos centímetros suman dos lados de {@0} cm?",
  "Koľko centimetrov zostáva na dve zvyšné strany? Vypočítaj ${@0} - {@1}$.": "¿Cuántos centímetros quedan para los otros dos lados? Calcula ${@0} - {@1}$.",
  "Koľko desiatok vyšlo? K tomuto číslu pripíš nulu.": "¿Cuántas decenas han salido? Añade un cero a ese número.",
  "Koľko eur stál celý nákup?": "¿Cuántos euros costó toda la compra?",
  "Koľko eur vrátili? Vypočítaj ${@0} - {@1}$.": "¿Cuántos euros le devolvieron? Calcula ${@0} - {@1}$.",
  "Koľko je ${@0} - {@1}$?": "¿Cuánto es ${@0} - {@1}$?",
  "Koľko kusov je vo všetkých balíčkoch spolu?": "¿Cuántas piezas hay en todos los paquetes juntos?",
  "Koľko meria jedna zvyšná strana? Vypočítaj ${@0} : 2$.": "¿Cuánto mide cada uno de los otros dos lados? Calcula ${@0} : 2$.",
  "Koľko minút je od {@0} do {@1}?": "¿Cuántos minutos hay de las {@0} a las {@1}?",
  "Koľko minút trval tréning spolu? Vypočítaj ${@0} + {@1}$.": "¿Cuántos minutos duró el entrenamiento en total? Calcula ${@0} + {@1}$.",
  "Koľko stromčekov zostalo? Vypočítaj ${@0} - {@1}$.": "¿Cuántos arbolitos quedaron? Calcula ${@0} - {@1}$.",
  "Koľko stromčekov záhradník zasadil?": "¿Cuántos arbolitos plantó el jardinero?",
  "Koľko {@0} majú všetky tri deti spolu? Vypočítaj ${@1} + {@2} + {@3}$.": "¿Cuántas {@0} tienen los tres niños juntos? Calcula ${@1} + {@2} + {@3}$.",
  "Koľko {@0} má {@1}?": "¿Cuántas {@0} tiene {@1}?",
  "Koľko {@0} {@1} {@2}?": "¿Cuál es el número de {@0} que {@1} {@2}?",
  "Koľko ľudí je v autobuse, keď ďalší nastúpili?": "¿Cuántas personas hay en el autobús después de que subieran las demás?",
  "Koľko ľudí zostalo v autobuse po vystúpení?": "¿Cuántas personas quedaron en el autobús después de bajar?",
  "Koľkokrát je {@0} v čísle {@1}?": "¿Cuántas veces cabe {@0} en el número {@1}?",
  "Koľkokrát sa {@0} {@1} zmestí do {@2} {@3}?": "¿Cuántas veces caben {@0} {@1} en {@2} {@3}?",
  "Ktoré číslo je o {@0} menšie ako {@1}?": "¿Qué número es {@0} menor que {@1}?",
  "Ktoré číslo je o {@0} väčšie ako {@1}?": "¿Qué número es {@0} mayor que {@1}?",
  "Ktoré číslo má {@0} {@1}, {@2} {@3} a {@4} {@5}?": "¿Qué número tiene {@0} {@1}, {@2} {@3} y {@4} {@5}?",
  "Ktorý najväčší násobok čísla {@0} sa ešte zmestí do {@1}?": "¿Cuál es el mayor múltiplo de {@0} que todavía cabe en {@1}?",
  "Lyžička sirupu má asi 5 …": "Una cucharita de jarabe tiene unos 5 …",
  "Mravec je dlhý asi 5 …": "Una hormiga mide unos 5 …",
  "Najmenšie číslo je {@0}, a to {@1}.": "El número menor es {@0}: {@1}.",
  "Najprv násobenie a delenie: ${@0} \\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} - {@7} = {@8}$.": "Primero multiplicaciones y divisiones: ${@0} \\cdot {@1} = {@2}$ y ${@3} : {@4} = {@5}$. Después ${@6} - {@7} = {@8}$.",
  "Najprv násobenie: ${@0} \\cdot {@1} = {@2}$. Potom ${@3} {@4} {@5} = {@6}$.": "Primero la multiplicación: ${@0} \\cdot {@1} = {@2}$. Después ${@3} {@4} {@5} = {@6}$.",
  "Najprv odčítaj {@0}: koľko je ${@1} - {@2}$?": "Primero resta las {@0}: ¿cuánto es ${@1} - {@2}$?",
  "Najprv premeň väčšiu jednotku: ${@0} = \\square\\,\\text{{@1}}$": "Primero convierte la unidad mayor: ${@0} = \\square\\,\\text{{@1}}$",
  "Najprv premeň {@0} na {@1} a potom pripočítaj zvyšok.": "Primero convierte {@0} a {@1} y después suma el resto.",
  "Najprv pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Primero suma las {@0}: ¿cuánto es ${@1} + {@2}$?",
  "Najprv vypočítaj, koľko je vo všetkých balíčkoch.": "Primero calcula cuánto hay en todos los paquetes.",
  "Najprv vypočítaj, koľko stromčekov zasadil.": "Primero calcula cuántos arbolitos plantó.",
  "Najprv vypočítaj, čo je v zátvorke.": "Primero calcula lo que hay dentro del paréntesis.",
  "Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.": "Primero averigua cuántas tiene cada niño y después súmalo todo.",
  "Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.": "Primero averigua cuánto costó toda la compra. Después réstalo del billete.",
  "Najprv zátvorka: ${@0} + {@1} = {@2}$. Potom ${@3} : {@4} = {@5}$.": "Primero el paréntesis: ${@0} + {@1} = {@2}$. Después ${@3} : {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} - {@1} = {@2}$. Potom ${@3} - {@4} = {@5}$.": "Primero el paréntesis: ${@0} - {@1} = {@2}$. Después ${@3} - {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} {@1} {@2} = {@3}$. Potom ${@4} \\cdot {@5} = {@6}$.": "Primero el paréntesis: ${@0} {@1} {@2} = {@3}$. Después ${@4} \\cdot {@5} = {@6}$.",
  "Najprv zátvorka: koľko je ${@0} + {@1}$?": "Primero el paréntesis: ¿cuánto es ${@0} + {@1}$?",
  "Najprv zátvorka: koľko je ${@0} - {@1}$?": "Primero el paréntesis: ¿cuánto es ${@0} - {@1}$?",
  "Najprv zátvorka: koľko je ${@0} {@1} {@2}$?": "Primero el paréntesis: ¿cuánto es ${@0} {@1} {@2}$?",
  "Najväčšie číslo je {@0}, a to {@1}.": "El número mayor es {@0}: {@1}.",
  "Najväčší násobok {@0}, ktorý nie je väčší ako {@1}, je ${@2} \\cdot {@3} = {@4}$. Zvyšok: ${@5} - {@6} = {@7}$. Teda ${@8} : {@9} = {@10}$, zvyšok {@11}.": "El mayor múltiplo de {@0} que no es mayor que {@1} es ${@2} \\cdot {@3} = {@4}$. Resto: ${@5} - {@6} = {@7}$. Así que ${@8} : {@9} = {@10}$, resto {@11}.",
  "Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.": "Solo has escrito el cociente. Después del punto y coma escribe también el resto.",
  "Nevšímal si si zátvorku. Najprv sčítaj čísla v zátvorke a až potom deľ.": "No has tenido en cuenta el paréntesis. Primero suma los números del paréntesis y solo después divide.",
  "Nevšímal si si zátvorku. Najprv vypočítaj ${@0} - {@1}$ a až potom to odčítaj od {@2}.": "No has tenido en cuenta el paréntesis. Primero calcula ${@0} - {@1}$ y solo después réstalo de {@2}.",
  "Nevšímal si si zátvorku. Čo je v zátvorke, počítaš úplne najprv – aj pred násobením.": "No has tenido en cuenta el paréntesis. Lo que está entre paréntesis se calcula lo primero de todo, incluso antes que la multiplicación.",
  "Nájdi správny deň a prečítaj číslo pri ňom.": "Busca el día correcto y lee el número que tiene al lado.",
  "Nákladné auto váži asi 8 …": "Un camión pesa alrededor de 8 …",
  "Násobenie a delenie urob skôr ako odčítanie.": "Haz la multiplicación y la división antes que la resta.",
  "Násobenie má prednosť pred sčítaním aj odčítaním.": "La multiplicación va antes que la suma y la resta.",
  "O koľko viac? Vypočítaj ${@0} - {@1}$.": "¿Cuánto más? Calcula ${@0} - {@1}$.",
  "Obdĺžnik a trojuholník s dĺžkami strán": "Rectángulo y triángulo con las longitudes de sus lados",
  "Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.": "El rectángulo tiene 4 lados: dos más largos y dos más cortos. Súmalos todos.",
  "Obdĺžnik má obvod ${@0}\\,\\text{cm}$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Un rectángulo tiene un perímetro de ${@0}\\,\\text{cm}$ y un lado de ${@1}\\,\\text{cm}$. ¿Cuánto mide el otro lado (en cm)?",
  "Obvod rozdeľ na 4 rovnaké časti.": "Divide el perímetro en 4 partes iguales.",
  "Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.": "Has dividido el perímetro solo en dos partes. El cuadrado tiene cuatro lados iguales.",
  "Obvod trojuholníka je súčet jeho troch strán.": "El perímetro del triángulo es la suma de sus tres lados.",
  "Obvod štvorca je ${@0}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?": "El perímetro de un cuadrado es ${@0}\\,\\text{cm}$. ¿Cuánto mide su lado (en cm)?",
  "Obvod: koľko je ${@0} + {@1}$?": "Perímetro: ¿cuánto es ${@0} + {@1}$?",
  "Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.": "Al perímetro réstale los dos lados conocidos y divide lo que queda entre dos.",
  "Od {@0} do {@1} je {@2} minút, od {@3} do {@4} ešte {@5} minút. Spolu ${@6} + {@7} = {@8}$ minút.": "De las {@0} a las {@1} hay {@2} minutos y de las {@3} a las {@4}, otros {@5} minutos. En total ${@6} + {@7} = {@8}$ minutos.",
  "Od {@0} do {@1} je {@2} minút.": "De las {@0} a las {@1} hay {@2} minutos.",
  "Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.": "Resta por partes las centenas, las decenas y las unidades. Comprueba el resultado con una suma.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu všetkých.": "Has restado el precio de una sola cosa. Se compraron {@0} cosas: primero calcula el precio de todas.",
  "Odčítal si stranu {@0} cm len raz. Obdĺžnik má dve takéto strany.": "Has restado el lado de {@0} cm solo una vez. El rectángulo tiene dos lados así.",
  "Pi": "V",
  "Platil": "Pagó",
  "Platila": "Pagó",
  "Po": "L",
  "Po vystúpení: ${@0} - {@1} = {@2}$. Po nastúpení: ${@3} + {@4} = {@5}$.": "Después de bajar: ${@0} - {@1} = {@2}$. Después de subir: ${@3} + {@4} = {@5}$.",
  "Pomôcka: $5 \\cdot {@0} = {@1}$ a ešte {@2}-krát {@3}, teda ${@4} + {@5} = {@6}$.": "Ayuda: $5 \\cdot {@0} = {@1}$ y {@2} veces {@3} más, así que ${@4} + {@5} = {@6}$.",
  "Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.": "Compara desde la izquierda: primero las centenas, después las decenas y después las unidades.",
  "Potom odčítaj {@0}: koľko je ${@1} - {@2}$?": "Después resta las {@0}: ¿cuánto es ${@1} - {@2}$?",
  "Potom pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Después suma las {@0}: ¿cuánto es ${@1} + {@2}$?",
  "Počítaj najprv minúty do celej hodiny a potom minúty po nej.": "Cuenta primero los minutos hasta la hora en punto y después los minutos que siguen.",
  "Počítaj zľava: koľko je ${@0} - {@1}$?": "Cuenta desde la izquierda: ¿cuánto es ${@0} - {@1}$?",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = {@1}$.": "Has calculado con 100. Con el tiempo vale $1\\,\\text{{@0}} = {@1}$.",
  "Počítal si zľava doprava. Delenie má prednosť pred odčítaním: najprv vypočítaj ${@0} : {@1}$.": "Has calculado de izquierda a derecha. La división va antes que la resta: primero calcula ${@0} : {@1}$.",
  "Počítal si zľava doprava. Násobenie má prednosť: najprv vypočítaj ${@0} \\cdot {@1}$.": "Has calculado de izquierda a derecha. La multiplicación va primero: primero calcula ${@0} \\cdot {@1}$.",
  "Predané zmrzliny": "Helados vendidos",
  "Predchádzajúce miesta sú rovnaké, rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "Los lugares anteriores son iguales, deciden las {@0}: {@1} y {@2}. Por eso ${@3} {@4} {@5}$.",
  "Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?": "Imagínate esa cosa. ¿Es pequeña o grande? ¿Dura poco o mucho?",
  "Premeň: ${@0} = \\square\\,\\text{{@1}}$": "Convierte: ${@0} = \\square\\,\\text{{@1}}$",
  "Premeň: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$": "Convierte: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$",
  "Prečítané strany": "Páginas leídas",
  "Pridaj tie navyše: koľko je ${@0} + {@1}$?": "Suma las que sobran: ¿cuánto es ${@0} + {@1}$?",
  "Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.": "Suma por partes las centenas, las decenas y las unidades, o haz la suma en columna.",
  "Pripočítaj zvyšok: koľko je ${@0} + {@1}$?": "Suma el resto: ¿cuánto es ${@0} + {@1}$?",
  "Pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Suma el {@0}: ¿cuánto es ${@1} + {@2}$?",
  "Písomné sčítanie 347 plus 285": "Suma en columna: 347 más 285",
  "Rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "Deciden las {@0}: {@1} y {@2}. Por eso ${@3} {@4} {@5}$.",
  "S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.": "Con las centenas enteras calcula como con las unidades: 4 centenas + 3 centenas = 7 centenas.",
  "Si o jeden násobok čísla {@0} nižšie. Skontroluj, koľkokrát si pripočítal {@1}.": "Te has quedado un múltiplo de {@0} por debajo. Comprueba cuántas veces has sumado {@1}.",
  "Si o jeden násobok čísla {@0} vyššie. Skontroluj, koľkokrát si pripočítal {@1}.": "Te has pasado un múltiplo de {@0}. Comprueba cuántas veces has sumado {@1}.",
  "Skontroluj obe strany: vľavo počítaj najprv zátvorku, vpravo najprv násobenie.": "Comprueba los dos lados: a la izquierda calcula primero el paréntesis y a la derecha, primero la multiplicación.",
  "Spomeň si, koľko {@0} je $1\\,\\text{{@1}}$.": "Recuerda cuántos {@0} hay en $1\\,\\text{{@1}}$.",
  "St": "X",
  "Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.": "Escribe las centenas en primer lugar, las decenas en segundo y las unidades en tercero. Si falta algo, escribe 0.",
  "Stovky sú prvá číslica zľava, jednotky posledná.": "Las centenas son la primera cifra por la izquierda y las unidades, la última.",
  "Stranu si vynásobil samu sebou. Obvod je súčet všetkých štyroch strán.": "Has multiplicado el lado por sí mismo. El perímetro es la suma de los cuatro lados.",
  "Strany si vynásobil. Obvod je dĺžka čiary okolo útvaru – strany treba sčítať.": "Has multiplicado los lados. El perímetro es la longitud de la línea que rodea la figura: hay que sumar los lados.",
  "Strany vyzerajú podobne, ale zátvorka mení poradie počítania. Vypočítaj obe strany zvlášť.": "Los dos lados se parecen, pero el paréntesis cambia el orden de las operaciones. Calcula cada lado por separado.",
  "Sčítaj pondelok a utorok: koľko je ${@0} + {@1}$?": "Suma el lunes y el martes: ¿cuánto es ${@0} + {@1}$?",
  "Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.": "Suma todos los números. Ayuda buscar primero parejas que den un número redondo.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany – každú dĺžku pripočítaj dvakrát.": "Solo has sumado dos lados. El rectángulo tiene cuatro lados: suma cada longitud dos veces.",
  "Sčítal si čísla zo zadania. {@0} a {@1} nie sú počty detí, ale o koľko má dieťa viac alebo menej. Najprv zisti, koľko má každé dieťa.": "Has sumado los números del enunciado. {@0} y {@1} no son lo que tienen los niños, sino cuánto más o menos tiene un niño. Primero averigua cuánto tiene cada niño.",
  "Tabuľka násobilky do 10 krát 10": "Tabla de multiplicar hasta 10 por 10",
  "Taška zemiakov váži 5 …": "Una bolsa de patatas pesa 5 …",
  "Teraz dokonči: koľko je ${@0} {@1} {@2}$?": "Ahora termina: ¿cuánto es ${@0} {@1} {@2}$?",
  "Tlesknutie trvá asi 1 …": "Una palmada dura más o menos 1 …",
  "To je cena celého nákupu. Ešte zisti, koľko eur vrátili z bankovky.": "Ese es el precio de toda la compra. Ahora averigua cuántos euros le devolvieron del billete.",
  "To je len počet v balíčkoch. Pripočítaj ešte {@0} navyše.": "Eso es solo lo que hay en los paquetes. Suma también las {@0} que sobran.",
  "To sú obe zvyšné strany spolu. Rozdeľ to ešte na polovicu.": "Esos son los otros dos lados juntos. Todavía tienes que dividirlo entre dos.",
  "Toľko má len {@0}. Pýtame sa, koľko majú všetky tri deti spolu.": "Eso es solo lo que tiene {@0}. Se pregunta cuánto tienen los tres niños juntos.",
  "Toľko stromčekov záhradník zasadil. Uschnuté stromčeky ešte odčítaj.": "Esos son los arbolitos que plantó el jardinero. Todavía tienes que restar los que se secaron.",
  "Trojuholník má strany ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ a ${@2}\\,\\text{cm}$. Aký má obvod (v cm)?": "Un triángulo tiene lados de ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ y ${@2}\\,\\text{cm}$. ¿Cuál es su perímetro (en cm)?",
  "Tréning začal o {@0} a skončil o {@1}. Koľko minút trval?": "El entrenamiento empezó a las {@0} y terminó a las {@1}. ¿Cuántos minutos duró?",
  "Upečené koláče": "Pasteles horneados",
  "Uschnuté stromčeky ubudli, preto ich odčítaj, nepripočítaj.": "Los arbolitos secos se perdieron, así que réstalos, no los sumes.",
  "Ut": "M",
  "V autobuse sedelo {@0} ľudí. Na zastávke {@1} ľudí vystúpilo a {@2} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?": "En el autobús iban {@0} personas. En una parada bajaron {@1} personas y subieron {@2}. ¿Cuántas personas hay ahora en el autobús?",
  "V balíčkoch: ${@0} \\cdot {@1} = {@2}$. Spolu: ${@3} + {@4} = {@5}$.": "En los paquetes: ${@0} \\cdot {@1} = {@2}$. En total: ${@3} + {@4} = {@5}$.",
  "V cukrárni si zapisovali, koľko zmrzlín predali.": "En la heladería apuntaron cuántos helados vendieron.",
  "V niektorom stĺpci si odčítal menšiu číslicu od väčšej, hoci väčšia bola dole. Vtedy si treba požičať desiatku z vedľajšieho stĺpca.": "En alguna columna has restado la cifra menor de la mayor, aunque la mayor estaba abajo. En ese caso hay que pedir prestada una decena a la columna de al lado.",
  "V pekárni si zapisovali, koľko koláčov upiekli.": "En la panadería apuntaron cuántos pasteles hornearon.",
  "V piatok": "El viernes",
  "V pondelok": "El lunes",
  "V stredu": "El miércoles",
  "V tento deň je najmenšie číslo. Hľadáme najväčšie.": "Ese día está el número menor. Buscamos el mayor.",
  "V tento deň je najväčšie číslo. Hľadáme najmenšie.": "Ese día está el número mayor. Buscamos el menor.",
  "V utorok": "El martes",
  "Vo vedre je 10 …": "En un cubo hay 10 …",
  "Vo štvrtok": "El jueves",
  "Vydeľ so zvyškom: ${@0} : {@1}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).": "Divide con resto: ${@0} : {@1}$. Escribe el cociente y el resto separados por punto y coma (p. ej., 4; 1).",
  "Vypočítaj $({@0} + {@1}) : {@2}$.": "Calcula $({@0} + {@1}) : {@2}$.",
  "Vypočítaj $({@0} {@1} {@2}) \\cdot {@3}$.": "Calcula $({@0} {@1} {@2}) \\cdot {@3}$.",
  "Vypočítaj ${@0} - ({@1} - {@2})$.": "Calcula ${@0} - ({@1} - {@2})$.",
  "Vypočítaj ${@0} - {@1} - {@2}$.": "Calcula ${@0} - {@1} - {@2}$.",
  "Vypočítaj ${@0} \\cdot {@1} - {@2} : {@3}$.": "Calcula ${@0} \\cdot {@1} - {@2} : {@3}$.",
  "Vypočítaj ${@0} {@1} {@2} \\cdot {@3}$.": "Calcula ${@0} {@1} {@2} \\cdot {@3}$.",
  "Vypočítaj najprv ${@0} \\cdot {@1}$ a potom pripíš nulu.": "Calcula primero ${@0} \\cdot {@1}$ y después añade un cero.",
  "Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.": "Calcula cada lado por separado. A la izquierda empieza por el paréntesis y a la derecha, por la multiplicación.",
  "Vypočítaj obvod obdĺžnika (v cm).{@0}": "Calcula el perímetro del rectángulo (en cm).{@0}",
  "Vystúpili → odčítaj. Nastúpili → pripočítaj.": "Bajaron → resta. Subieron → suma.",
  "Vyučovacia hodina trvá 45 …": "Una clase dura 45 …",
  "Vzdialenosť medzi dvoma mestami je 40 …": "La distancia entre dos ciudades es de 40 …",
  "Vľavo: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Vpravo: ${@6} + {@7} = {@8}$. Preto ${@9} {@10} {@11}$.": "Izquierda: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Derecha: ${@6} + {@7} = {@8}$. Por eso ${@9} {@10} {@11}$.",
  "Zabudol si na delenie. Od {@0} neodčítavaš {@1}, ale až výsledok ${@2} : {@3}$.": "Se te ha olvidado la división. A {@0} no le restas {@1}, sino el resultado de ${@2} : {@3}$.",
  "Zabudol si na nulu na mieste desiatok. Bez nej sa číslice posunú a vznikne iné číslo.": "Se te ha olvidado el cero en el lugar de las decenas. Sin él, las cifras se desplazan y sale otro número.",
  "Zabudol si na prenos. Keď je súčet v stĺpci 10 alebo viac, napíš len jednotky a 1 pripočítaj k ďalšiemu stĺpcu vľavo.": "Se te ha olvidado la llevada. Cuando la suma de una columna es 10 o más, escribe solo las unidades y suma 1 a la siguiente columna de la izquierda.",
  "Zabudol si pripočítať ešte ${@0}$.": "Se te ha olvidado sumar todavía ${@0}$.",
  "Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.": "Solo has contado dos lados. El cuadrado tiene cuatro lados iguales.",
  "Zasadil: ${@0} \\cdot {@1} = {@2}$. Zostalo: ${@3} - {@4} = {@5}$.": "Plantó: ${@0} \\cdot {@1} = {@2}$. Quedaron: ${@3} - {@4} = {@5}$.",
  "Zisti, o koľko sa líšia dve susedné čísla.": "Averigua en cuánto se diferencian dos números vecinos.",
  "Zmení sa počet desiatok.": "Cambia el número de decenas.",
  "Zmení sa počet stoviek.": "Cambia el número de centenas.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvé miesto, kde sa čísla líšia ({@0}).": "El signo está al revés. Compara desde la izquierda: decide el primer lugar en el que los números son distintos ({@0}).",
  "Zošit je dlhý asi 30 …": "El largo de un cuaderno es de unos 30 …",
  "Zuzka si zapisovala, koľko strán knihy prečítala.": "Marta apuntó cuántas páginas de un libro leyó.",
  "Zvyšok je ${@0} - {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "El resto es ${@0} - {@1}$. Escribe el cociente y el resto separados por punto y coma.",
  "Zvyšok {@0} je väčší ako deliteľ {@1}, takže sa číslo {@2} do {@3} zmestí ešte raz. Zvyšok musí byť vždy menší ako deliteľ.": "El resto {@0} es mayor que el divisor {@1}, así que {@2} todavía cabe una vez más en {@3}. El resto siempre tiene que ser menor que el divisor.",
  "Záhradník zasadil {@0} {@1} po {@2} {@3}. {@4} {@5}. Koľko stromčekov zostalo?": "Un jardinero plantó {@0} {@1} de {@2} {@3}. {@4} {@5}. ¿Cuántos arbolitos quedaron?",
  "balíčkov": "paquetes",
  "balíčky": "paquetes",
  "deň": "día",
  "gaštan": "castaña",
  "gaštanov": "castañas",
  "gaštany": "castañas",
  "kartičiek": "tarjetas",
  "kartičku": "tarjeta",
  "kartičky": "tarjetas",
  "knihy": "libros",
  "kníh": "libros",
  "koláče": "pasteles",
  "koláčov": "pasteles",
  "lopty": "pelotas",
  "lôpt": "pelotas",
  "orech": "nuez",
  "perá": "bolígrafos",
  "piatok": "viernes",
  "pier": "bolígrafos",
  "podiel; zvyšok": "cociente; resto",
  "pondelok": "lunes",
  "predali": "se vendieron",
  "prečítala Zuzka": "leyó Marta",
  "radov": "filas",
  "rady": "filas",
  "stoviek": "centenas",
  "stovku": "centena",
  "stovky": "centenas",
  "strany": "páginas",
  "streda": "miércoles",
  "stredu": "miércoles",
  "stromček uschol": "arbolito se secó",
  "stromčekov": "arbolitos",
  "stromčekov uschlo": "arbolitos se secaron",
  "stromčeky": "arbolitos",
  "stromčeky uschli": "arbolitos se secaron",
  "strán": "páginas",
  "upiekli v pekárni": "se hornearon en la panadería",
  "utorok": "martes",
  "v piatok": "el viernes",
  "v pondelok": "el lunes",
  "v stredu": "el miércoles",
  "v utorok": "el martes",
  "vo štvrtok": "el jueves",
  "zmrzliny": "helados",
  "zmrzlín": "helados",
  "zošitov": "cuadernos",
  "zošity": "cuadernos",
  "{@0} je v údajoch číslo {@1}.": "{@0}, en los datos aparece el número {@1}.",
  "{@0} má o {@1} menej ako {@2}, nie ako {@3}. Skontroluj, od koho odčítaš.": "{@0} tiene {@1} menos que {@2}, no que {@3}. Comprueba de quién restas.",
  "{@0} má {@1} {@2} po {@3} {@4} a ešte {@5} {@6} navyše. Koľko {@7} má spolu?": "{@0} tiene {@1} {@2} de {@3} {@4} y además {@5} {@6} sueltas. ¿Cuántas {@7} tiene en total?",
  "{@0} má {@1} {@2}. {@3} má o {@4} viac ako {@5} a {@6} má o {@7} menej ako {@8}. Koľko {@9} majú spolu?": "{@0} tiene {@1} {@2}. {@3} tiene {@4} más que {@5} y {@6} tiene {@7} menos que {@8}. ¿Cuántas {@9} tienen entre los tres?",
  "{@0} {@1} krát {@2} je {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.": "{@0} {@1} por {@2} son {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.",
  "{@0} {@1} {@2} {@3} po {@4} €. {@5} bankovkou {@6} €. Koľko eur {@7} vrátili?": "{@0} {@1} {@2} {@3} a {@4} € la unidad. {@5} con un billete de {@6} €. ¿Cuántos euros {@7} devolvieron?",
  "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.": "{@0} {@1}; {@2} {@3}: ${@4} - {@5} = {@6}$.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. En total: ${@8} + {@9} + {@10} = {@11}$.",
  "{@0}Koľko {@1} {@2} spolu za všetkých päť dní?": "{@0}¿Cuál es el número total de {@1} que {@2} en los cinco días?",
  "{@0}Koľko {@1} {@2} {@3}?": "{@0}¿Cuál es el número de {@1} que {@2} {@3}?",
  "{@0}O koľko viac {@1} {@2} {@3} ako {@4}?": "{@0}¿Qué diferencia hay entre el número de {@1} que {@2} {@3} y {@4}?",
  "{@0}V ktorý deň {@1} najmenej {@2}?": "{@0}¿Qué día {@1} menos {@2}?",
  "{@0}V ktorý deň {@1} najviac {@2}?": "{@0}¿Qué día {@1} más {@2}?",
  "Časy si odčítal ako obyčajné čísla. Hodina má len 60 minút – počítaj najprv do celej hodiny.": "Has restado las horas como números normales. Una hora tiene solo 60 minutos: cuenta primero hasta la hora en punto.",
  "Čo počítaš najprv? Vypočítaj ${@0} \\cdot {@1}$.": "¿Qué calculas primero? Calcula ${@0} \\cdot {@1}$.",
  "Číselný rad od 0 do 1000": "Serie numérica del 0 al 1000",
  "Čísla klesajú vždy o {@0}: {@1}.": "Los números disminuyen siempre en {@0}: {@1}.",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}$ na menšiu jednotku $\\text{{@1}}$.": "No sumes los números directamente. Primero convierte ${@0}$ a la unidad menor $\\text{{@1}}$.",
  "Čísla rastú vždy o {@0}: {@1}.": "Los números aumentan siempre en {@0}: {@1}.",
  "Čísla si len sčítal. {@0}-krát po {@1} je násobenie.": "Solo has sumado los números. {@0} veces {@1} es una multiplicación.",
  "Číslo {@0} má {@1} {@2}. Koľko je teda ${@3} \\cdot {@4}$?": "El número {@0} tiene {@1} {@2}. Entonces, ¿cuánto es ${@3} \\cdot {@4}$?",
  "Číslo {@0} rozdelíme na {@1}: {@2}.": "Descomponemos el número {@0} en {@1}: {@2}.",
  "Čítal si z opačnej strany. Jednotky sú posledná číslica vpravo.": "Has leído desde el lado contrario. Las unidades son la última cifra de la derecha.",
  "Čítal si z opačnej strany. Stovky sú prvá číslica zľava.": "Has leído desde el lado contrario. Las centenas son la primera cifra por la izquierda.",
  "čokolád": "tabletas de chocolate",
  "čokolády": "tabletas de chocolate",
  "Ľudia, ktorí nastúpili, v autobuse pribudli. Ich počet pripočítaj, neodčítaj.": "Las personas que subieron se añadieron al autobús. Suma su número, no lo restes.",
  "Ľudia, ktorí vystúpili, z autobusu odišli. Ich počet odčítaj, nepripočítaj.": "Las personas que bajaron se fueron del autobús. Resta su número, no lo sumes.",
  "Št": "J",
  "Štvorec má 4 rovnaké strany: ${@0} : 4 = {@1}\\,\\text{cm}$.": "El cuadrado tiene 4 lados iguales: ${@0} : 4 = {@1}\\,\\text{cm}$.",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký má obvod (v cm)?": "Un cuadrado tiene un lado de ${@0}\\,\\text{cm}$. ¿Cuál es su perímetro (en cm)?",
  "štvrtok": "jueves",
  "„O koľko viac“ zistíš odčítaním.": "«¿Cuánto más?» se averigua restando."
 }
});
