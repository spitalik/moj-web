/* Español: preklad js/rocniky/r2.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/r2/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "r2-cisla100": {
   "title": "Números hasta el 100",
   "summary": "Decenas y unidades, la serie numérica y comparar números hasta el 100.",
   "theory": [
    "<p>Todo número de dos cifras tiene <strong>decenas</strong> y <strong>unidades</strong>. El 47 tiene 4 decenas y 7 unidades:\n       $47 = 40 + 7$. Diez decenas son <strong>cien</strong>: $100$.</p>",
    {
     "fig": "r2-stovka",
     "caption": "Tabla del 100. En cada fila hay una decena de números. Debajo del 47 está el 57, es decir, el número que es 10 más."
    },
    "<p><strong>Comparar:</strong> primero comparamos las decenas. Si son iguales, comparamos las unidades.\n       $63 &gt; 58$, porque 6 decenas son más que 5 decenas. $42 &lt; 45$, porque las decenas son iguales y 2 es menos que 5.</p>"
   ],
   "examples": [
    {
     "task": "Compara los números 71 y 17.",
     "steps": [
      "El 71 tiene 7 decenas; el 17 solo tiene 1 decena.",
      "<strong>$71 &gt; 17$</strong>"
     ]
    },
    {
     "task": "¿Qué número tiene 6 decenas y 3 unidades?",
     "steps": [
      "6 decenas son 60, y además 3 unidades.",
      "$60 + 3 = 63$.",
      "<strong>Es el número 63.</strong>"
     ]
    }
   ]
  },
  "r2-scitanie": {
   "title": "Sumas y restas hasta el 100",
   "summary": "Calcular con decenas, pasar por la decena y saltos en la recta numérica.",
   "theory": [
    "<p>Las <strong>decenas completas</strong> se suman como unidades: $30 + 40$ son 3 decenas y 4 decenas, es decir, 7 decenas, $70$.\n       Del mismo modo, $90 - 60 = 30$.</p>",
    "<p>Con números más grandes, separamos el segundo número en <strong>decenas y unidades</strong> y las sumamos poco a poco.\n       En $38 + 25$ primero sumamos 20 y luego 5.</p>",
    {
     "fig": "r2-skoky",
     "caption": "$38 + 25$: un salto de 20 nos lleva al 58 y un salto de 5, al 63. Así, $38 + 25 = 63$."
    },
    "<p>Al restar hacemos lo mismo: $72 - 34$ = primero $72 - 30 = 42$, luego $42 - 4 = 38$.\n       Podemos comprobar el resultado con una suma: $38 + 34 = 72$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $47 + 36$.",
     "steps": [
      "Separamos el 36 en 30 y 6.",
      "$47 + 30 = 77$.",
      "$77 + 6 = 83$.",
      "<strong>Resultado: 83</strong>"
     ]
    },
    {
     "task": "Calcula $81 - 25$.",
     "steps": [
      "Separamos el 25 en 20 y 5.",
      "$81 - 20 = 61$.",
      "$61 - 5 = 56$.",
      "Comprobación: $56 + 25 = 81$. <strong>Resultado: 56</strong>"
     ]
    }
   ]
  },
  "r2-nasobenie": {
   "title": "Multiplicación y división",
   "summary": "La multiplicación como suma repetida, la división en partes iguales.",
   "theory": [
    "<p>La <strong>multiplicación</strong> es una forma abreviada de sumar números iguales. En lugar de $4 + 4 + 4$ escribimos $3 \\cdot 4$\n       (tres veces cuatro). Los números que multiplicamos son los <em>factores</em> y el resultado es el <em>producto</em>.</p>",
    {
     "fig": "r2-pole",
     "caption": "3 filas de 4 puntos: $4 + 4 + 4 = 3 \\cdot 4 = 12$. Si contamos por columnas, tenemos 4 columnas de 3 puntos: $4 \\cdot 3 = 12$."
    },
    "<p>El orden de los factores no importa: $3 \\cdot 4 = 4 \\cdot 3$. Cualquier número por 1 no cambia ($7 \\cdot 1 = 7$)\n       y cualquier número por 0 da 0 ($5 \\cdot 0 = 0$).</p>",
    "<p>La <strong>división</strong> es repartir en partes iguales. Si repartimos 12 caramelos por igual entre 3 niños, cada uno recibe\n       $12 : 3 = 4$. La división es lo contrario de la multiplicación: $12 : 3 = 4$, porque $3 \\cdot 4 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "Escribe la suma $5 + 5 + 5 + 5$ como multiplicación y calcula.",
     "steps": [
      "Sumamos el 5 cuatro veces.",
      "$4 \\cdot 5 = 20$.",
      "<strong>Resultado: 20</strong>"
     ]
    },
    {
     "task": "Con 15 flores hacemos ramos de 5 flores. ¿Cuántos ramos habrá?",
     "steps": [
      "Buscamos cuántas veces cabe el 5 en el 15.",
      "$15 : 5 = 3$, porque $3 \\cdot 5 = 15$.",
      "<strong>Habrá 3 ramos.</strong>"
     ]
    }
   ]
  },
  "r2-nasobilka": {
   "title": "Múltiplos y tablas de multiplicar",
   "summary": "Tablas de multiplicar hasta 10 · 10, múltiplos de un número y divisiones de las tablas.",
   "theory": [
    "<p>Los <strong>múltiplos de un número</strong> se obtienen multiplicándolo por 1, 2, 3, … Los múltiplos del 3 son\n       3, 6, 9, 12, 15, 18, 21, 24, 27, 30. En la recta numérica saltamos siempre de 3 en 3.</p>",
    {
     "fig": "r2-nasobky",
     "caption": "Múltiplos del 3: cada salto mide 3. Después de cuatro saltos estamos en el número $4 \\cdot 3 = 12$."
    },
    "<p>Trucos útiles: los múltiplos del 2 son los números pares, los múltiplos del 5 terminan en 0 o en 5, los múltiplos del 10 terminan en 0.\n       Si no sabes $6 \\cdot 4$, ayúdate: $5 \\cdot 4 = 20$ y otra vez 4, es decir, $24$.</p>",
    "<p>De una multiplicación sacamos enseguida dos divisiones: de $6 \\cdot 4 = 24$ se deduce $24 : 4 = 6$ y $24 : 6 = 4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $7 \\cdot 5$.",
     "steps": [
      "Múltiplos del 5: 5, 10, 15, 20, 25, 30, 35.",
      "El séptimo múltiplo es 35.",
      "<strong>$7 \\cdot 5 = 35$</strong>"
     ]
    },
    {
     "task": "Calcula $32 : 4$.",
     "steps": [
      "Buscamos el número que multiplicado por 4 da 32.",
      "$8 \\cdot 4 = 32$.",
      "<strong>$32 : 4 = 8$</strong>"
     ]
    }
   ]
  },
  "r2-slovne": {
   "title": "Problemas y datos",
   "summary": "Del problema a la operación: suma, resta, multiplicación y división.",
   "theory": [
    "<p>En un problema primero anotamos lo que <strong>sabemos</strong> y lo que <strong>buscamos</strong>. Después elegimos la operación\n       correcta, calculamos y escribimos la <strong>respuesta</strong> con una frase completa.</p>",
    "<ul><li><em>recibió, se añadieron, en total, … más que</em> → suma,</li>\n       <li><em>regaló, quedaron, … menos que, cuántos más</em> → resta,</li>\n       <li><em>de … cada uno (varias veces lo mismo)</em> → multiplicación,</li>\n       <li><em>repartió por igual, cuántos grupos de …</em> → división.</li></ul>",
    "<p>Los <strong>datos</strong> del problema pueden anotarse así:<br>Pablo tenía … 35 canicas<br>perdió … 12 canicas<br>\n       le quedan … ? canicas<br>$35 - 12 = 23$<br>Respuesta: A Pablo le quedan 23 canicas.</p>"
   ],
   "examples": [
    {
     "task": "Lea tiene 28 pegatinas. Adán tiene 15 pegatinas más. ¿Cuántas pegatinas tiene Adán?",
     "steps": [
      "«15 más» significa sumar 15 a 28.",
      "$28 + 15 = 43$.",
      "<strong>Respuesta: Adán tiene 43 pegatinas.</strong>"
     ]
    },
    {
     "task": "Mamá puso 5 manzanas en cada uno de 4 platos. ¿Cuántas manzanas hay en total en los platos?",
     "steps": [
      "4 veces 5 es una multiplicación.",
      "$4 \\cdot 5 = 20$.",
      "<strong>Respuesta: En los platos hay 20 manzanas.</strong>"
     ]
    }
   ]
  },
  "r2-ciary": {
   "title": "Punto, segmento, recta y línea curva",
   "summary": "Distinguimos líneas, medimos y comparamos segmentos.",
   "theory": [
    "<p>Un <strong>punto</strong> se dibuja como un puntito y se nombra con una letra mayúscula, por ejemplo el punto $A$.\n       Un <strong>segmento</strong> es una línea recta entre dos puntos, por ejemplo el segmento $CD$. Los puntos $C$ y $D$ son sus extremos.</p>",
    "<p>Una <strong>recta</strong> es una línea recta que no tiene principio ni fin; podemos prolongarla hacia ambos lados.\n       Se nombra con una letra minúscula, por ejemplo la recta $p$. Una <strong>línea curva</strong> no es recta, se tuerce.</p>",
    {
     "fig": "r2-ciary",
     "caption": "Punto, segmento, recta y línea curva. Las líneas rectas se dibujan con regla."
    },
    "<p>La longitud de un segmento se mide con la regla en <strong>centímetros</strong>. Ponemos el cero de la regla en el extremo $A$\n       y leemos el número junto al punto $B$.</p>",
    {
     "fig": "r2-pravitko",
     "caption": "El segmento $AB$ empieza en el cero y termina en el número 7. Mide $7\\,\\text{cm}$."
    }
   ],
   "examples": [
    {
     "task": "¿Qué línea tiene dos extremos?",
     "steps": [
      "El punto es solo un puntito; ni la recta ni la línea curva tienen extremos.",
      "<strong>El segmento tiene dos extremos.</strong>"
     ]
    },
    {
     "task": "El segmento $AB$ mide $9\\,\\text{cm}$ y el segmento $CD$ mide $4\\,\\text{cm}$. ¿Cuánto más largo es el segmento $AB$?",
     "steps": [
      "Comparamos, así que restamos.",
      "$9 - 4 = 5$.",
      "<strong>El segmento $AB$ es $5\\,\\text{cm}$ más largo.</strong>"
     ]
    }
   ]
  },
  "r2-jednotky": {
   "title": "Unidades de longitud, tiempo y dinero",
   "summary": "Centímetro y metro, horas y minutos, euros y céntimos.",
   "theory": [
    "<p><strong>Longitud:</strong> las cosas cortas se miden en centímetros (cm) y las más largas, en metros (m).\n       $1\\,\\text{m} = 100\\,\\text{cm}$ y $1\\,\\text{dm} = 10\\,\\text{cm}$.</p>",
    "<p><strong>Tiempo:</strong> un día tiene 24 horas y una hora (h) tiene 60 minutos (min). Media hora son 30 minutos y un cuarto de hora, 15 minutos.\n       En el reloj, la <em>aguja corta</em> marca las horas y la <em>aguja larga</em>, los minutos.</p>",
    {
     "fig": "r2-hodiny",
     "caption": "A la izquierda son las 7:00, la aguja larga apunta al 12. A la derecha son las 2:30 (las dos y media), la aguja larga apunta al 6 y la corta está entre el 2 y el 3."
    },
    "<p><strong>Dinero:</strong> pagamos con euros (€) y céntimos (c). $1\\,\\text{€} = 100$ céntimos.\n       Las monedas son de 1 c, 2 c, 5 c, 10 c, 20 c, 50 c, 1 € y 2 €.</p>",
    {
     "fig": "r2-mince",
     "caption": "Monedas de euro, de menor a mayor valor."
    }
   ],
   "examples": [
    {
     "task": "¿Cuántos minutos son 1 hora y 15 minutos?",
     "steps": [
      "1 hora son 60 minutos.",
      "$60 + 15 = 75$.",
      "<strong>Son 75 minutos.</strong>"
     ]
    },
    {
     "task": "En el monedero tienes monedas de 50 c, 20 c y 20 c. ¿Cuántos céntimos faltan para 1 euro?",
     "steps": [
      "$50 + 20 + 20 = 90$ céntimos.",
      "1 euro son 100 céntimos: $100 - 90 = 10$.",
      "<strong>Faltan 10 céntimos.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{dm} = 10\\,\\text{cm}$, teda ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.": "$1\\,\\text{dm} = 10\\,\\text{cm}$, así que ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.",
  "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Chýba ${@2}\\,\\text{cm}$.": "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Faltan ${@2}\\,\\text{cm}$.",
  "${@0} - {@1} = {@2}$. Úsečka $KL$ je o ${@3}\\,\\text{cm}$ dlhšia.": "${@0} - {@1} = {@2}$. El segmento $KL$ es ${@3}\\,\\text{cm}$ más largo.",
  "${@0} : {@1} = {@2}$, teda ${@3} \\cdot {@4} = {@5}$.": "${@0} : {@1} = {@2}$, así que ${@3} \\cdot {@4} = {@5}$.",
  "${@0} = {@1}$ centov.": "${@0} = {@1}$ céntimos.",
  "${@0} \\cdot {@1} = {@2}$, preto ${@3} : {@4} = {@5}$.": "${@0} \\cdot {@1} = {@2}$, por eso ${@3} : {@4} = {@5}$.",
  "${@0} \\cdot {@1} = {@2}$, preto {@3} je násobok čísla {@4}. Ostatné čísla v násobilke čísla {@5} nie sú.": "${@0} \\cdot {@1} = {@2}$, por eso {@3} es múltiplo de {@4}. Los demás números no están en la tabla del {@5}.",
  "1 dm je 10 cm.": "1 dm son 10 cm.",
  "1 euro je 100 centov: $100 - {@0} = {@1}$. Chýba {@2} {@3}.": "1 euro son 100 céntimos: $100 - {@0} = {@1}$. Faltan {@2} {@3}.",
  "1 hodina": "1 hora",
  "1 hodina je 60 minút: $60 + {@0} = {@1}$ minút.": "1 hora son 60 minutos: $60 + {@0} = {@1}$ minutos.",
  "1 m je 100 cm.": "1 m son 100 cm.",
  "1 € = 100 centov.": "1 € = 100 céntimos.",
  "Aká dlhá je úsečka $AB$? Odpoveď napíš v centimetroch.{@0}": "¿Cuánto mide el segmento $AB$? Escribe la respuesta en centímetros.{@0}",
  "Bod $A$ je pri čísle {@0}, bod $B$ pri čísle {@1}. ${@2} - {@3} = {@4}$, úsečka meria ${@5}\\,\\text{cm}$.": "El punto $A$ está en el {@0} y el punto $B$, en el {@1}. ${@2} - {@3} = {@4}$, el segmento mide ${@5}\\,\\text{cm}$.",
  "Bod je len jedna malá bodka. Na obrázku je čiara.": "Un punto es solo un puntito. En el dibujo hay una línea.",
  "Bod, úsečka, priamka a krivá čiara": "Punto, segmento, recta y línea curva",
  "Celá dĺžka je súčet dĺžok všetkých úsečiek.": "La longitud total es la suma de las longitudes de todos los segmentos.",
  "Celá lomená čiara je dlhšia ako každá jej časť. Dĺžky úsečiek sčítaj, nie odčítaj.": "La línea poligonal entera es más larga que cada una de sus partes. Suma las longitudes de los segmentos, no las restes.",
  "Centimeter je veľmi malý, asi ako šírka prsta. Tu treba väčšiu jednotku.": "El centímetro es muy pequeño, más o menos como el ancho de un dedo. Aquí hace falta una unidad mayor.",
  "Centov máš 100 alebo viac. Zo 100 centov je ďalšie celé euro – pripočítaj ho k eurám.": "Tienes 100 céntimos o más. Con 100 céntimos tienes otro euro entero: súmalo a los euros.",
  "Ceny píšeme v eurách.": "Los precios se escriben en euros.",
  "Ceruzka je dlhá asi 15 …": "Un lápiz mide unos 15 …",
  "Cez dva rôzne body prechádza práve jedna priamka.": "Por dos puntos distintos pasa exactamente una recta.",
  "Chýbajúce číslo zistíme odčítaním: ${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "El número que falta lo averiguamos restando: ${@0} - {@1} = {@2}$. Comprobación: ${@3} + {@4} = {@5}$.",
  "Delenie nie je odčítanie. Hľadaj číslo, ktoré krát {@0} dá {@1}.": "Dividir no es restar. Busca el número que multiplicado por {@0} da {@1}.",
  "Delíme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "Dividimos en {@0} {@1}: ${@2} : {@3} = {@4}$, porque ${@5} \\cdot {@6} = {@7}$.",
  "Desať nepripočítavaj. Každý decimeter má 10 cm, preto počet decimetrov násob desiatimi.": "No sumes diez. Cada decímetro tiene 10 cm, así que multiplica el número de decímetros por diez.",
  "Desiatky a jednotky nesčítavaj ako obyčajné čísla. Desiatky napíš na prvé miesto a jednotky za ne.": "No sumes las decenas y las unidades como números normales. Escribe las decenas en primer lugar y las unidades detrás.",
  "Desiatky sú rovnaké, porovnáme jednotky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "Las decenas son iguales, comparamos las unidades: {@0} y {@1}. Por eso ${@2} {@3} {@4}$.",
  "Deň (s nocou) má 24 hodín.": "Un día (con su noche) tiene 24 horas.",
  "Dlhšie veci meriame v metroch.": "Las cosas más largas las medimos en metros.",
  "Dlhší čas meriame v hodinách.": "Los tiempos más largos los medimos en horas.",
  "Dom je vysoký asi 10 …": "La altura de una casa es de unos 10 …",
  "Doplň chýbajúce číslo: ${@0} - \\square = {@1}$": "Completa el número que falta: ${@0} - \\square = {@1}$",
  "Doplň chýbajúce číslo: ${@0} \\cdot \\square = {@1}$": "Completa el número que falta: ${@0} \\cdot \\square = {@1}$",
  "Doplň chýbajúci násobok čísla {@0}: {@1}": "Completa el múltiplo de {@0} que falta: {@1}",
  "Doplň správnu jednotku: {@0}": "Elige la unidad correcta: {@0}",
  "Doplň číslo, ktoré chýba v rade: {@0}": "Completa el número que falta en la serie: {@0}",
  "Dĺžky nesčítavaj. Pýtame sa, o koľko je jedna úsečka dlhšia – odčítaj.": "No sumes las longitudes. Se pregunta cuánto más largo es un segmento: resta.",
  "Dĺžky sčítame: ${@0} + {@1} = {@2}$. Lomená čiara meria ${@3}\\,\\text{cm}$.": "Sumamos las longitudes: ${@0} + {@1} = {@2}$. La línea poligonal mide ${@3}\\,\\text{cm}$.",
  "Euromince": "Monedas de euro",
  "Hodina je dlhý čas. Tu treba kratšiu jednotku.": "Una hora es mucho tiempo. Aquí hace falta una unidad más corta.",
  "Hodina má 60 minút. Polovica z 60 je 30, štvrtina je 15.": "Una hora tiene 60 minutos. La mitad de 60 es 30 y la cuarta parte es 15.",
  "Hodina má 60 minút. {@0} je {@1} minút.": "Una hora tiene 60 minutos. {@0} son {@1} minutos.",
  "Hodina nemá 100 minút, ale 60 minút.": "Una hora no tiene 100 minutos, sino 60.",
  "Hodinu musíš najprv premeniť na minúty: 1 hodina je 60 minút.": "Primero tienes que pasar la hora a minutos: 1 hora son 60 minutos.",
  "Hodiny ukazujú 7:00 a 2:30": "Relojes que marcan las 7:00 y las 2:30",
  "Hľadaj suseda čísla v číselnom rade.": "Busca el vecino del número en la serie numérica.",
  "Je to dĺžka, čas, alebo cena? A je to krátke, alebo dlhé?": "¿Es una longitud, un tiempo o un precio? ¿Y es corto o largo?",
  "Je to len jedna bodka, teda bod.": "Es solo un puntito, así que es un punto.",
  "Je čiara rovná? Má krajné body?": "¿La línea es recta? ¿Tiene extremos?",
  "Jednotky dali spolu viac ako 10, ale zabudol si pripočítať túto novú desiatku.": "Las unidades juntas suman más de 10, pero se te ha olvidado sumar esa nueva decena.",
  "Každé ďalšie číslo je o {@0} väčšie.": "Cada número es {@0} mayor que el anterior.",
  "Keď je viackrát to isté číslo, môžeš násobiť.": "Cuando se repite varias veces el mismo número, puedes multiplicar.",
  "Kniha stojí asi 12 …": "Un libro cuesta unos 12 …",
  "Koľko centimetrov je ${@0}\\,\\text{dm}$?": "¿Cuántos centímetros son ${@0}\\,\\text{dm}$?",
  "Koľko centimetrov je od {@0} po {@1}? Vypočítaj ${@2} - {@3}$.": "¿Cuántos centímetros hay de {@0} a {@1}? Calcula ${@2} - {@3}$.",
  "Koľko centimetrov má 1 meter?": "¿Cuántos centímetros tiene 1 metro?",
  "Koľko centov je spolu?{@0}": "¿Cuántos céntimos hay en total?{@0}",
  "Koľko centov je v ostatných minciach?": "¿Cuántos céntimos hay en las demás monedas?",
  "Koľko centov má 1 euro?": "¿Cuántos céntimos tiene 1 euro?",
  "Koľko eur je v minciach 1 € a 2 €?": "¿Cuántos euros hay en las monedas de 1 € y 2 €?",
  "Koľko hodín má jeden deň?": "¿Cuántas horas tiene un día?",
  "Koľko je $100 - {@0}$?": "¿Cuánto es $100 - {@0}$?",
  "Koľko je $60 + {@0}$?": "¿Cuánto es $60 + {@0}$?",
  "Koľko je ${@0} \\cdot {@1}$?": "¿Cuánto es ${@0} \\cdot {@1}$?",
  "Koľko je hodín?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"ciferník hodín\">{@0}</svg>": "¿Qué hora es?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"esfera del reloj\">{@0}</svg>",
  "Koľko je skupín?": "¿Cuántos grupos hay?",
  "Koľko je spolu {@0}? <span class=\"emoji-row\">{@1}</span>": "¿Cuál es el número total de {@0}? <span class=\"emoji-row\">{@1}</span>",
  "Koľko je to spolu eur a centov? Napíš dve čísla oddelené bodkočiarkou (napr. 2; 35).{@0}": "¿Cuántos euros y céntimos son en total? Escribe dos números separados por punto y coma (p. ej., 2; 35).{@0}",
  "Koľko krajných bodov má priamka?": "¿Cuántos extremos tiene una recta?",
  "Koľko krajných bodov má úsečka?": "¿Cuántos extremos tiene un segmento?",
  "Koľko kúskov je v jednej skupine?": "¿Cuántas piezas hay en un grupo?",
  "Koľko minút je 1 hodina a {@0} minút?": "¿Cuántos minutos son 1 hora y {@0} minutos?",
  "Koľko minút je {@0}?": "¿Cuántos minutos hay en {@0}?",
  "Koľko minút má 1 hodina?": "¿Cuántos minutos tiene 1 hora?",
  "Koľko priamok môžeš nakresliť cez dva rôzne body?": "¿Cuántas rectas puedes dibujar que pasen por dos puntos distintos?",
  "Koľkokrát musíš sčítať {@0}, aby si dostal {@1}?": "¿Cuántas veces tienes que sumar {@0} para obtener {@1}?",
  "Koľkokrát sa opakuje to isté číslo?": "¿Cuántas veces se repite el mismo número?",
  "Koľkokrát sa v súčte opakuje číslo {@0}?": "¿Cuántas veces se repite el número {@0} en la suma?",
  "Krivá čiara je čiara. Tu je len jedna bodka.": "La línea curva es una línea. Aquí solo hay un puntito.",
  "Krivá čiara sa zatáča. Táto čiara je rovná.": "La línea curva se tuerce. Esta línea es recta.",
  "Krátka ručička je ešte len medzi {@0} a {@1}. Kým nedôjde k {@2}, platí menšia hodina.": "La aguja corta todavía está entre el {@0} y el {@1}. Hasta que no llegue al {@2}, vale la hora menor.",
  "Krátka ručička ukazuje hodiny, dlhá minúty. Keď je dlhá na 6, je pol.": "La aguja corta marca las horas y la larga, los minutos. Cuando la larga está en el 6, es y media.",
  "Krátka ručička {@0}, dlhá ručička ukazuje na {@1}, teda {@2} minút. Je {@3} ({@4}).": "La aguja corta {@0}, la aguja larga señala el {@1}, es decir, {@2} minutos. Son las {@3} ({@4}).",
  "Krátke veci meriame v centimetroch.": "Las cosas cortas las medimos en centímetros.",
  "Krátky čas meriame v minútach.": "Los tiempos cortos los medimos en minutos.",
  "Ktoré celé desiatky sú v čísle {@0}? (Pri čísle 36 by to bolo 30.)": "¿Qué decenas enteras hay en el número {@0}? (En el 36 serían 30.)",
  "Ktoré z týchto čísel je násobkom čísla {@0}?": "¿Cuál de estos números es múltiplo de {@0}?",
  "Ktoré číslo je o {@0} {@1} ako {@2}?": "¿Qué número es {@1} que {@2} en {@0}?",
  "Ktoré číslo krát {@0} dá {@1}?": "¿Qué número multiplicado por {@0} da {@1}?",
  "Ktoré číslo má {@0} {@1} a {@2} {@3}?": "¿Qué número tiene {@0} {@1} y {@2} {@3}?",
  "Ktorú počtovú operáciu použiješ?": "¿Qué operación vas a usar?",
  "Lomená čiara sa skladá z dvoch úsečiek. Prvá meria ${@0}\\,\\text{cm}$, druhá ${@1}\\,\\text{cm}$. Aká dlhá je celá lomená čiara (v cm)?": "Una línea poligonal está formada por dos segmentos. El primero mide ${@0}\\,\\text{cm}$ y el segundo, ${@1}\\,\\text{cm}$. ¿Cuánto mide la línea poligonal entera (en cm)?",
  "Meter je asi taký dlhý ako veľký krok. Tu je to priveľa, treba menšiu jednotku.": "Un metro es más o menos lo que mide un paso largo. Aquí es demasiado, hace falta una unidad menor.",
  "Mince 1 € a 2 € maj zvlášť, centy sčítaj zvlášť. 100 centov je 1 euro.": "Cuenta aparte las monedas de 1 € y 2 €, y suma aparte los céntimos. 100 céntimos son 1 euro.",
  "Minúta je krátky čas. Tu treba dlhšiu jednotku.": "Un minuto es poco tiempo. Aquí hace falta una unidad más larga.",
  "Máš {@0} {@1}. Koľko centov ti chýba do 1 eura?": "Tienes {@0} {@1}. ¿Cuántos céntimos te faltan para tener 1 euro?",
  "Najprv odčítaj desiatky, potom jednotky.": "Primero resta las decenas y después las unidades.",
  "Najprv odčítaj desiatky: koľko je ${@0} - {@1}$?": "Primero resta las decenas: ¿cuánto es ${@0} - {@1}$?",
  "Najprv odčítame desiatky: ${@0} - {@1} = {@2}$. Potom jednotky: ${@3} - {@4} = {@5}$.": "Primero restamos las decenas: ${@0} - {@1} = {@2}$. Después las unidades: ${@3} - {@4} = {@5}$.",
  "Najprv porovnaj desiatky. Ak sú rovnaké, porovnaj jednotky.": "Primero compara las decenas. Si son iguales, compara las unidades.",
  "Najprv premeň hodinu na minúty a potom pripočítaj.": "Primero pasa la hora a minutos y después suma.",
  "Najprv pripočítaj desiatky: koľko je ${@0} + {@1}$?": "Primero suma las decenas: ¿cuánto es ${@0} + {@1}$?",
  "Najprv pripočítame desiatky: ${@0} + {@1} = {@2}$. Potom jednotky: ${@3} + {@4} = {@5}$.": "Primero sumamos las decenas: ${@0} + {@1} = {@2}$. Después las unidades: ${@3} + {@4} = {@5}$.",
  "Neodčítavaj. Cukríky rozdeľujeme rovnako, to je delenie.": "No restes. Repartimos las gominolas en partes iguales: eso es dividir.",
  "Neodčítavaj. Hľadáš číslo, ktoré krát {@0} dá {@1}.": "No restes. Buscas el número que multiplicado por {@0} da {@1}.",
  "Neodčítavaj. Keď rozdeľujeme rovnako, delíme.": "No restes. Cuando repartimos en partes iguales, dividimos.",
  "Neodčítavaj. Zisťujeme, koľkokrát sa {@0} zmestí do {@1}, to je delenie.": "No restes. Averiguamos cuántas veces cabe {@0} en {@1}: eso es dividir.",
  "Nesčítavaj počet sčítancov a číslo {@0}. Číslo {@1} sa opakuje {@2}-krát – to je násobenie.": "No sumes el número de sumandos y el número {@0}. El número {@1} se repite {@2} veces: eso es una multiplicación.",
  "Násobenie použiješ, keď máš viackrát po rovnako.": "La multiplicación la usas cuando tienes varias veces la misma cantidad.",
  "Násobky {@0} rastú vždy o {@1}: {@2}. Chýba ${@3} \\cdot {@4} = {@5}$.": "Los múltiplos de {@0} aumentan siempre en {@1}: {@2}. Falta ${@3} \\cdot {@4} = {@5}$.",
  "Násobky {@0}: {@1}. Teda ${@2} \\cdot {@3} = {@4}$.": "Múltiplos de {@0}: {@1}. Así que ${@2} \\cdot {@3} = {@4}$.",
  "Násobky čísla 3 na číselnom rade": "Múltiplos del 3 en la serie numérica",
  "O koľko je {@0} viac ako {@1}?": "¿Cuánto más es {@0} que {@1}?",
  "Od {@0} sme ubrali toľko, koľko je ${@1} - {@2} = {@3}$. Skúška: ${@4} - {@5} = {@6}$.": "A {@0} le hemos quitado ${@1} - {@2} = {@3}$. Comprobación: ${@4} - {@5} = {@6}$.",
  "Odčítanie použiješ, keď niečo ubudne.": "La resta la usas cuando se quita algo.",
  "Otázka „o koľko viac“ sa rieši odčítaním väčšieho a menšieho čísla.": "La pregunta «¿cuánto más?» se resuelve restando el número mayor y el menor.",
  "Palec na ruke je dlhý asi 5 …": "El pulgar mide unos 5 …",
  "Pol hodiny": "Media hora",
  "Porovnáme desiatky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "Comparamos las decenas: {@0} y {@1}. Por eso ${@2} {@3} {@4}$.",
  "Porovnávame, preto odčítame: {@0} {@1} má o {@2} {@3} viac.": "Comparamos, así que restamos: {@0} {@1} tiene {@2} {@3} más.",
  "Posunul si sa na opačnú stranu. Menšie číslo dostaneš odčítaním.": "Te has movido hacia el lado contrario. El número menor lo obtienes restando.",
  "Posunul si sa na opačnú stranu. Väčšie číslo dostaneš pripočítaním.": "Te has movido hacia el lado contrario. El número mayor lo obtienes sumando.",
  "Pozor, úsečka nezačína na nule. Spočítaj centimetre medzi A a B.": "Cuidado, el segmento no empieza en el cero. Cuenta los centímetros entre A y B.",
  "Pozri sa na dve susedné čísla. O koľko sa líšia?": "Fíjate en dos números vecinos. ¿En cuánto se diferencian?",
  "Pozri sa presne, na ktoré číslo ukazuje krátka ručička.": "Fíjate bien en qué número señala la aguja corta.",
  "Pozri sa, pri ktorom čísle je bod B.": "Fíjate en qué número está el punto B.",
  "Počet skupín a počet v jednej skupine nesčítavaj. Rovnaké skupiny spočítaš násobením.": "No sumes el número de grupos y lo que hay en un grupo. Los grupos iguales se cuentan multiplicando.",
  "Počet tanierov a počet na jednom tanieri nesčítavaj. Na každom tanieri je rovnako – násob.": "No sumes el número de platos y lo que hay en un plato. En cada plato hay lo mismo: multiplica.",
  "Počítaj s desiatkami ako s jednotkami: 3 desiatky + 4 desiatky = 7 desiatok.": "Calcula con las decenas como con las unidades: 3 decenas + 4 decenas = 7 decenas.",
  "Počítal si, akoby mala hodina 100 minút. Hodina má len 60 minút.": "Has calculado como si la hora tuviera 100 minutos. Una hora tiene solo 60 minutos.",
  "Pravítko a úsečka AB": "Regla y segmento AB",
  "Prejdi násobky čísla {@0}, kým nenájdeš {@1}.": "Recorre los múltiplos de {@0} hasta encontrar {@1}.",
  "Prestávka trvá 10 …": "El recreo dura 10 …",
  "Prečítal si len číslo pri bode B. Úsečka nezačína na nule, preto odčítaj číslo pri bode A.": "Solo has leído el número del punto B. El segmento no empieza en el cero, así que resta el número del punto A.",
  "Pri jednotkách si odčítal obrátene ({@0} − {@1}). Keď jednotky nestačia, prejdi cez desiatku: uber najprv desiatky, potom jednotky.": "En las unidades has restado al revés ({@0} − {@1}). Cuando las unidades no llegan, pasa por la decena: quita primero las decenas y después las unidades.",
  "Pri ktorom čísle na pravítku je bod A?": "¿En qué número de la regla está el punto A?",
  "Pri ktorom čísle na pravítku je bod B?": "¿En qué número de la regla está el punto B?",
  "Priamka je rovná čiara. Tu je len jedna bodka.": "La recta es una línea recta. Aquí solo hay un puntito.",
  "Priamka je rovná. Táto čiara sa zatáča.": "La recta es recta. Esta línea se tuerce.",
  "Priamka nemá krajné body. Táto čiara má dva krajné body, kde začína a končí.": "La recta no tiene extremos. Esta línea tiene dos extremos, donde empieza y donde termina.",
  "Priamka nemá začiatok ani koniec, nemá žiadny krajný bod.": "La recta no tiene principio ni fin, no tiene ningún extremo.",
  "Pribudlo → sčítanie, ubudlo → odčítanie, viackrát po rovnako → násobenie.": "Se añade → suma, se quita → resta, varias veces lo mismo → multiplicación.",
  "Pribudlo, preto sčítame.": "Se ha añadido, así que sumamos.",
  "Pridávame, preto sčítame: {@0} {@1} má {@2} {@3}.": "Añadimos, así que sumamos: {@0} {@1} tiene {@2} {@3}.",
  "Pripočítal si len desiatky. Nezabudni pridať aj {@0} {@1}.": "Solo has sumado las decenas. No olvides añadir también {@0} {@1}.",
  "Pripočítavaj {@0} toľkokrát, koľko je {@1}, alebo si spomeň na násobilku čísla {@2}.": "Suma {@0} tantas veces como indica {@1}, o acuérdate de la tabla del {@2}.",
  "Rovnaké rozdeľovanie je delenie.": "Repartir en partes iguales es dividir.",
  "Rovná čiara bez krajných bodov, ktorá ide cez celý obrázok, je priamka.": "Una línea recta sin extremos que atraviesa todo el dibujo es una recta.",
  "Rovná čiara s dvoma krajnými bodmi je úsečka.": "Una línea recta con dos extremos es un segmento.",
  "Rozdeľ druhé číslo na desiatky a jednotky a pripočítaj ich postupne.": "Separa el segundo número en decenas y unidades y súmalas por partes.",
  "Rozdeľujeme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$. Každý dostal {@8} {@9}.": "Dividimos en {@0} {@1}: ${@2} : {@3} = {@4}$, porque ${@5} \\cdot {@6} = {@7}$. Cada uno recibió {@8} {@9}.",
  "Rozlož číslo na desiatky a jednotky: ${@0} = \\square + \\square$.": "Descompón el número en decenas y unidades: ${@0} = \\square + \\square$.",
  "Si o jeden násobok čísla {@0} nižšie. Spočítaj skoky po {@1} ešte raz.": "Te has quedado un múltiplo de {@0} por debajo. Cuenta otra vez los saltos de {@1} en {@1}.",
  "Si o jeden násobok čísla {@0} vyššie. Spočítaj skoky po {@1} ešte raz.": "Te has pasado un múltiplo de {@0}. Cuenta otra vez los saltos de {@1} en {@1}.",
  "Skoky na číselnom rade: 38 plus 20 plus 5": "Saltos en la serie numérica: 38 más 20 más 5",
  "Spolu je to {@0} € a {@1} c. Koľko je to eur a centov? (Pamätaj: 100 centov je 1 euro.)": "En total son {@0} € y {@1} c. ¿Cuántos euros y céntimos son? (Recuerda: 100 céntimos son 1 euro.)",
  "Spočítaj 12 hodín dopoludnia a 12 hodín popoludní.": "Suma las 12 horas de la mañana y las 12 horas de la tarde y la noche.",
  "Spočítaj skupiny a koľko je v jednej skupine. Potom vynásob.": "Cuenta los grupos y cuánto hay en un grupo. Después multiplica.",
  "Spočítal si, koľko je mincí. Treba sčítať čísla napísané na minciach.": "Has contado cuántas monedas hay. Hay que sumar los números escritos en las monedas.",
  "Stovková tabuľka čísel od 1 do 100": "Tabla del 100 con los números del 1 al 100",
  "Stuha meria ${@0}\\,\\text{cm}$. Koľko centimetrov chýba do $1\\,\\text{m}$?": "Una cinta mide ${@0}\\,\\text{cm}$. ¿Cuántos centímetros le faltan para $1\\,\\text{m}$?",
  "Sú tu {@0} {@1} po {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.": "Hay {@0} {@1} de {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.",
  "Sčítaj hodnoty mincí, začni od najväčšej.": "Suma los valores de las monedas, empezando por la mayor.",
  "Sčítanie použiješ, keď niečo pribudne.": "La suma la usas cuando se añade algo.",
  "Teraz odčítaj jednotky: koľko je ${@0} - {@1}$?": "Ahora resta las unidades: ¿cuánto es ${@0} - {@1}$?",
  "Teraz pripočítaj jednotky: koľko je ${@0} + {@1}$?": "Ahora suma las unidades: ¿cuánto es ${@0} + {@1}$?",
  "To je dĺžka stuhy. Pýtame sa, koľko jej chýba do 1 metra – odčítaj od 100.": "Esa es la longitud de la cinta. Se pregunta cuánto le falta para 1 metro: resta de 100.",
  "To je len polovica dňa. Ciferník ukazuje 12 hodín, ale ručička ho za deň obehne dvakrát.": "Eso es solo medio día. La esfera muestra 12 horas, pero la aguja le da dos vueltas al día.",
  "To je počet desiatok. Jednotky sú posledná číslica vpravo.": "Ese es el número de decenas. Las unidades son la última cifra de la derecha.",
  "To je počet jednotiek. Desiatky sú prvá číslica vľavo.": "Ese es el número de unidades. Las decenas son la primera cifra de la izquierda.",
  "Toľko centov už máš. Pýtame sa, koľko ti chýba do 100 centov – odčítaj.": "Esos céntimos ya los tienes. Se pregunta cuánto te falta para 100 céntimos: resta.",
  "Tri rady po štyri bodky": "Tres filas de cuatro puntos",
  "Trieda je dlhá asi 9 …": "El largo de una clase es de unos 9 …",
  "Trištvrte hodiny": "Tres cuartos de hora",
  "Trojuholník má 3 strany a každá strana je úsečka.": "El triángulo tiene 3 lados y cada lado es un segmento.",
  "Uberáme, preto odčítame: {@0} Zostalo {@1} {@2} {@3}.": "Quitamos, así que restamos: {@0} Al final, {@1} quedan {@2} {@3}.",
  "Ubudlo, preto odčítame.": "Se ha quitado, así que restamos.",
  "V centoch: ${@0} = {@1}$ centov. 100 centov je 1 euro, preto je to {@2} € a {@3} c.": "En céntimos: ${@0} = {@1}$ céntimos. 100 céntimos son 1 euro, así que son {@2} € y {@3} c.",
  "V jednotkách {@0} meriame {@1}, ale tu ide o {@2}.": "En {@0} medimos {@1}, pero aquí hace falta {@2}.",
  "V noci spíme asi 10 …": "Por la noche dormimos unas 10 …",
  "Vymenil si desiatky a jednotky. Desiatky píšeme na prvé miesto, jednotky na druhé.": "Has cambiado las decenas por las unidades. Las decenas se escriben en primer lugar y las unidades, en segundo.",
  "Vymenil si ručičky. Krátka ručička ukazuje hodiny, dlhá ručička minúty.": "Has confundido las agujas. La aguja corta marca las horas y la larga, los minutos.",
  "Vymenuj násobky {@0}: {@1}, {@2}, {@3}, …": "Di los múltiplos de {@0}: {@1}, {@2}, {@3}, …",
  "Vypočítaj ${@0} : {@1}$.": "Calcula ${@0} : {@1}$.",
  "Vypočítaj ${@0} \\cdot {@1}$.": "Calcula ${@0} \\cdot {@1}$.",
  "Vypočítaj ${@0} {@1} {@2}$.": "Calcula ${@0} {@1} {@2}$.",
  "Vyučovanie trvá asi 5 …": "Las clases duran unas 5 …",
  "Z koľkých úsečiek sa skladá obvod trojuholníka?": "¿De cuántos segmentos está formado el perímetro de un triángulo?",
  "Z koľkých úsečiek sa skladá obvod štvorca?": "¿De cuántos segmentos está formado el perímetro de un cuadrado?",
  "Z {@0} balónov robíme zväzky po {@1} {@2}. Koľko zväzkov urobíme?": "Con {@0} globos hacemos ramilletes de {@1} {@2}. ¿Cuántos ramilletes haremos?",
  "Zapíš súčet ako násobenie a vypočítaj: ${@0}$": "Escribe la suma como multiplicación y calcula: ${@0}$",
  "Zisťujeme, koľkokrát sa {@0} zmestí do {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "Averiguamos cuántas veces cabe {@0} en {@1}: ${@2} : {@3} = {@4}$, porque ${@5} \\cdot {@6} = {@7}$.",
  "Zmení sa len počet desiatok, jednotky ostanú rovnaké. V stovkovej tabuľke sa posuň o riadok.": "Solo cambia el número de decenas; las unidades siguen iguales. En la tabla del 100 baja o sube una fila.",
  "Zmrzlina stojí asi 2 …": "Un helado cuesta unos 2 …",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "El signo = solo va entre dos números iguales. Estos números son distintos.",
  "Znak je otočený naopak. Desiatky sú rovnaké, preto rozhodujú jednotky.": "El signo está al revés. Las decenas son iguales, así que deciden las unidades.",
  "Znak je otočený naopak. Rozhodujú desiatky: väčšie je číslo, ktoré má viac desiatok.": "El signo está al revés. Deciden las decenas: es mayor el número que tiene más decenas.",
  "Znamienko + znamená pridať. Tu treba sčítať, nie odčítať.": "El signo + significa añadir. Aquí hay que sumar, no restar.",
  "Znamienko − znamená ubrať. Tu treba odčítať, nie sčítať.": "El signo − significa quitar. Aquí hay que restar, no sumar.",
  "balón": "globo",
  "balónov": "globos",
  "balóny": "globos",
  "bod": "punto",
  "bod A": "punto A",
  "cent": "céntimo",
  "centov": "céntimos",
  "centy": "céntimos",
  "cenu": "el precio",
  "ciferník hodín": "esfera del reloj",
  "citrónov": "limones",
  "desiatku": "decena",
  "deti": "niños",
  "detí": "niños",
  "dieťa": "niño",
  "dĺžku": "la longitud",
  "eurá; centy": "euros; céntimos",
  "hodina": "hora",
  "hodiny": "horas",
  "hodín": "horas",
  "hrušiek": "peras",
  "jahôd": "fresas",
  "je medzi {@0} a {@1}": "está entre el {@0} y el {@1}",
  "jednotku": "unidad",
  "krivá čiara": "línea curva",
  "kúpil": "compró",
  "kúpila": "compró",
  "min": "min",
  "mince": "monedas",
  "mrkiev": "zanahorias",
  "orechov": "nueces",
  "orechy": "nueces",
  "pol hodiny": "media hora",
  "položil": "puso",
  "položila": "puso",
  "presne {@0} {@1}": "las {@0} en punto",
  "priamka": "recta",
  "priamka p": "recta p",
  "rovnaké časti": "partes iguales",
  "rovnakú časť": "parte igual",
  "rovnakých častí": "partes iguales",
  "rozdelil": "repartió",
  "rozdelila": "repartió",
  "skupina": "grupo",
  "skupiny": "grupos",
  "skupín": "grupos",
  "skáčeme vždy o 3": "saltamos siempre de 3 en 3",
  "stratil": "perdió",
  "stratila": "perdió",
  "tanier": "plato",
  "taniere": "platos",
  "tanierov": "platos",
  "trištvrte hodiny": "tres cuartos de hora",
  "ukazuje na {@0}": "señala el {@0}",
  "vreciek": "bolsitas",
  "vrecko": "bolsita",
  "vrecká": "bolsitas",
  "{@0} Skúška: ${@1} + {@2} = {@3}$.": "{@0} Comprobación: ${@1} + {@2} = {@3}$.",
  "{@0} Správny zápis je {@1}.": "{@0} La expresión correcta es {@1}.",
  "{@0} desiatka je {@1}.": "{@0} decena es {@1}.",
  "{@0} desiatky sú {@1}.": "{@0} decenas son {@1}.",
  "{@0} desiatok je {@1}.": "{@0} decenas son {@1}.",
  "{@0} je len to, o koľko má {@1} menej. Odčítaj to od toho, čo má {@2}.": "{@0} es solo lo que {@1} tiene de menos. Réstaselo a lo que tiene {@2}.",
  "{@0} má menej ako {@1}, preto treba odčítať, nie sčítať.": "{@0} tiene menos que {@1}, así que hay que restar, no sumar.",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} menej. Koľko {@6} má {@7}?": "{@0} tiene {@1} {@2}. {@3} tiene {@4} {@5} menos. ¿Cuántas {@6} tiene {@7}?",
  "{@0} {@1} a {@2} minút": "{@0} {@1} y {@2} minutos",
  "{@0} {@1} na {@2} {@3} po {@4} {@5}. Koľko {@6} je na tanieroch spolu?": "{@0} {@1} {@4} {@5} en cada uno de {@2} {@3}. ¿Cuántas {@6} hay en total en los platos?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Ktorý zápis ukazuje, koľko {@6} má teraz?": "{@0} {@1} {@2} {@3} y {@4} {@5} más. ¿Qué expresión muestra cuántas {@6} tiene ahora?",
  "{@0} {@1} {@2} {@3} a {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} zostalo?": "{@0} {@1} {@2} {@3} y {@5} {@4}. ¿Qué expresión muestra cuántas {@6} {@7} quedan?",
  "{@0} {@1} {@2} {@3} po {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} spolu?": "{@0} {@1} {@2} {@3} de {@4} {@5}. ¿Qué expresión muestra cuántas {@6} {@7} en total?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} kamarátov. Koľko {@5} dostal každý kamarát?": "{@0} {@1} {@2} {@3} a partes iguales entre {@4} amigos. ¿Cuántas {@5} recibió cada amigo?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} {@5}. Koľko cukríkov dostalo každé dieťa?": "{@0} {@1} {@2} {@3} a partes iguales entre {@4} {@5}. ¿Cuántas gominolas recibió cada niño?",
  "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.": "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.",
  "{@0}-krát po {@1} je násobenie.": "{@0} veces {@1} es una multiplicación.",
  "{@0}-krát po {@1} je násobenie: ${@2} \\cdot {@3} = {@4}$. Na tanieroch je {@5} {@6}.": "{@0} veces {@1} es una multiplicación: ${@2} \\cdot {@3} = {@4}$. En los platos hay {@5} {@6}.",
  "Úsečka $KL$ meria ${@0}\\,\\text{cm}$, úsečka $MN$ meria ${@1}\\,\\text{cm}$. O koľko centimetrov je úsečka $KL$ dlhšia?": "El segmento $KL$ mide ${@0}\\,\\text{cm}$ y el segmento $MN$ mide ${@1}\\,\\text{cm}$. ¿Cuántos centímetros más largo es el segmento $KL$?",
  "Úsečka je rovná. Táto čiara sa zatáča.": "El segmento es recto. Esta línea se tuerce.",
  "Úsečka je čiara medzi dvoma bodmi. Tu je len jedna bodka.": "El segmento es una línea entre dos puntos. Aquí solo hay un puntito.",
  "Úsečka má dva krajné body, napríklad $A$ a $B$.": "El segmento tiene dos extremos, por ejemplo $A$ y $B$.",
  "Úsečka má na koncoch dva krajné body. Táto čiara ich nemá, pokračuje ďalej.": "El segmento tiene dos extremos en sus puntas. Esta línea no los tiene, sigue adelante.",
  "Úsečka má začiatok aj koniec, priamka nemá ani jedno.": "El segmento tiene principio y fin; la recta no tiene ninguno de los dos.",
  "Úsečka začína na nule a končí pri čísle {@0}. Je dlhá ${@1}\\,\\text{cm}$.": "El segmento empieza en el cero y termina en el {@0}. Mide ${@1}\\,\\text{cm}$.",
  "úsečka": "segmento",
  "úsečka CD": "segmento CD",
  "Čiara sa zatáča, nie je rovná, teda je to krivá čiara.": "La línea se tuerce, no es recta, así que es una línea curva.",
  "Čistenie zubov trvá asi 3 …": "Lavarse los dientes dura unos 3 …",
  "Čo je na obrázku?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"čiara alebo bod\">{@0}</svg>": "¿Qué hay en el dibujo?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"línea o punto\">{@0}</svg>",
  "Čísla nesčítavaj. Hľadáš, koľko sme ubrali, aby z čísla {@0} zostalo {@1} – to zistíš odčítaním.": "No sumes los números. Buscas cuánto hemos quitado para que de {@0} queden {@1}: eso se averigua restando.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby vyšlo {@1} – to zistíš odčítaním.": "No sumes los números. Buscas cuánto hay que añadir a {@0} para obtener {@1}: eso se averigua restando.",
  "Čísla nesčítavaj. Otázka „o koľko viac“ porovnáva – odčítaj menšie číslo od väčšieho.": "No sumes los números. La pregunta «¿cuánto más?» compara: resta el número menor del mayor.",
  "Čísla si sčítal. Znak · znamená násobiť.": "Has sumado los números. El signo · significa multiplicar.",
  "Čísla sú rovnaké: ${@0} = {@1}$.": "Los números son iguales: ${@0} = {@1}$.",
  "Čísla sú úplne rovnaké, ani jedno nie je väčšie.": "Los números son exactamente iguales, ninguno es mayor.",
  "Čísla {@0} vždy o {@1}: {@2}.": "Los números {@0} siempre en {@1}: {@2}.",
  "Číslo {@0} nie je v násobilke čísla {@1}: leží medzi násobkami {@2} a {@3}.": "El número {@0} no está en la tabla del {@1}: está entre los múltiplos {@2} y {@3}.",
  "Číslo {@0} sčítavame {@1}-krát: ${@2} \\cdot {@3} = {@4}$.": "Sumamos el número {@0} {@1} veces: ${@2} \\cdot {@3} = {@4}$.",
  "čas": "el tiempo",
  "čiara alebo bod": "línea o punto",
  "Štvorec má 4 strany, každá strana je úsečka.": "El cuadrado tiene 4 lados y cada lado es un segmento.",
  "Štvrť hodiny": "Un cuarto de hora",
  "štvrť hodiny": "un cuarto de hora",
  "„O {@0} menej“ znamená {@1} ubrať: {@2} {@3} má {@4} {@5}.": "«{@0} menos» significa quitar {@1}: {@2} {@3} tiene {@4} {@5}.",
  "„O … menej“ znamená odčítať.": "«… menos» significa restar.",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕"
 }
});
