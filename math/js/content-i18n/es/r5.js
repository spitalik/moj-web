/* Español: preklad js/rocniky/r5.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/r5/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "r5-prirodzene": {
   "title": "Los números naturales y sus propiedades",
   "summary": "Clases y órdenes de los números grandes, comparación, números pares e impares.",
   "theory": [
    "<p>Los <strong>números naturales</strong> son $1, 2, 3, 4, \\dots$, los números con los que contamos objetos. El menor número natural\n       es el 1 y no existe el mayor: a cualquier número le podemos sumar 1 y obtenemos su <strong>siguiente</strong>.\n       El número que es 1 menos es su <strong>anterior</strong>.</p>",
    "<p>Las cifras de un número grande se agrupan de tres en tres desde la derecha en <strong>clases</strong>: unidades, millares, millones.\n       En cada clase hay centenas, decenas y unidades. El valor de una cifra depende del lugar que ocupa.</p>",
    {
     "fig": "r5-triedy",
     "caption": "En el número $3\\,042\\,705$ la cifra 4 vale $40\\,000$, porque está en el lugar de las decenas de millar."
    },
    "<p>Los <strong>números pares</strong> son divisibles entre dos y terminan en 0, 2, 4, 6 u 8. Los demás números son\n       <strong>impares</strong>: terminan en 1, 3, 5, 7 o 9. Para saber si un número es par basta con mirar la última cifra.</p>"
   ],
   "examples": [
    {
     "task": "Con las cifras 5, 0, 8, 2 (usa cada una una vez) forma el mayor y el menor número de cuatro cifras.",
     "steps": [
      "El mayor: ordenamos las cifras de mayor a menor: $8\\,520$.",
      "El menor: ordenamos de menor a mayor, pero el 0 no puede ir al principio: $2\\,058$."
     ]
    },
    {
     "task": "¿Cuál es el siguiente y el anterior del número $499\\,999$?",
     "steps": [
      "Siguiente: $499\\,999 + 1 = 500\\,000$.",
      "Anterior: $499\\,999 - 1 = 499\\,998$."
     ]
    }
   ]
  },
  "r5-zaokruhlovanie": {
   "title": "Redondeo de números",
   "summary": "Redondear a las decenas, centenas y millares, estimar el resultado.",
   "theory": [
    "<p>Al <strong>redondear</strong> sustituimos un número por el número «redondo» más cercano. Se escribe con el signo $\\doteq$\n       (se lee «es aproximadamente igual a»): $3\\,467 \\doteq 3\\,470$ (a las decenas).</p>",
    "<p><strong>Regla:</strong> miramos la cifra que está <em>justo a la derecha</em> del orden al que redondeamos.\n       Si es 0, 1, 2, 3 o 4, redondeamos <strong>hacia abajo</strong>. Si es 5, 6, 7, 8 o 9, redondeamos <strong>hacia arriba</strong>.\n       Las cifras de la derecha se sustituyen por ceros.</p>",
    {
     "fig": "r5-zaokruhlovanie",
     "caption": "Mueve el número y observa a qué decena (punto verde) y a qué centena (arco) está más cerca."
    },
    "<p><strong>Estimación:</strong> antes del cálculo exacto podemos redondear los números y estimar el resultado.\n       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$. La estimación nos ayuda a descubrir errores de cálculo.</p>"
   ],
   "examples": [
    {
     "task": "Redondea el número $72\\,649$ a las centenas.",
     "steps": [
      "En el lugar de las centenas hay un 6 y justo a su derecha, un 4.",
      "4 es menos que 5, redondeamos hacia abajo: las centenas siguen siendo 6.",
      "<strong>$72\\,649 \\doteq 72\\,600$</strong>"
     ]
    },
    {
     "task": "Redondea el número $5\\,962$ a las decenas.",
     "steps": [
      "En el lugar de las decenas hay un 6 y a su derecha un 2: redondeamos hacia abajo.",
      "<strong>$5\\,962 \\doteq 5\\,960$</strong>",
      "A las centenas sería $6\\,000$, porque después de las centenas hay un 6."
     ]
    }
   ]
  },
  "r5-rimske": {
   "title": "Números romanos",
   "summary": "Escribir números grandes y años, reglas de la resta, conversiones en ambos sentidos.",
   "theory": [
    "<p>Números romanos: $\\text{I} = 1$, $\\text{V} = 5$, $\\text{X} = 10$, $\\text{L} = 50$, $\\text{C} = 100$,\n       $\\text{D} = 500$, $\\text{M} = 1\\,000$. El mayor número que se escribe habitualmente con ellos es $3\\,999 = \\text{MMMCMXCIX}$.</p>",
    "<p><strong>Reglas de escritura:</strong></p>\n       <ol><li>Los signos se escriben de mayor a menor y sus valores se suman: $\\text{MDCLX} = 1\\,660$.</li>\n       <li>Los signos I, X, C, M pueden repetirse como máximo tres veces seguidas. V, L, D no se repiten.</li>\n       <li>Un signo menor delante de uno mayor se resta. Solo pueden restarse I, X o C, y solo delante de los dos signos mayores más próximos.</li></ol>",
    {
     "fig": "r5-rimske",
     "caption": "Las seis parejas en las que se resta. Otras parejas (por ejemplo, IL o IC) son incorrectas."
    },
    "<p>La <strong>conversión a números romanos</strong> se hace por órdenes: millares, centenas, decenas, unidades.\n       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$.</p>"
   ],
   "examples": [
    {
     "task": "Escribe en números romanos el año $2\\,026$.",
     "steps": [
      "$2\\,026 = 2\\,000 + 20 + 6$.",
      "$2\\,000 = \\text{MM}$, $20 = \\text{XX}$, $6 = \\text{VI}$.",
      "<strong>$2\\,026 = \\text{MMXXVI}$</strong>"
     ]
    },
    {
     "task": "¿Qué número es $\\text{CDXLIX}$?",
     "steps": [
      "Lo separamos en grupos: $\\text{CD} = 400$, $\\text{XL} = 40$, $\\text{IX} = 9$.",
      "$400 + 40 + 9 = 449$.",
      "Atención: 49 no es IL, sino XLIX.",
      "<strong>$\\text{CDXLIX} = 449$</strong>"
     ]
    }
   ]
  },
  "r5-operacie": {
   "title": "Operaciones y jerarquía de operaciones",
   "summary": "Suma, resta, multiplicación, división, paréntesis y cálculo inteligente.",
   "theory": [
    "<p>Al calcular una expresión respetamos la <strong>jerarquía de operaciones</strong>: primero los paréntesis, después las multiplicaciones y divisiones\n       (de izquierda a derecha) y por último las sumas y restas (de izquierda a derecha).</p>",
    {
     "fig": "r5-poradie",
     "caption": "Jerarquía de operaciones. Las operaciones del mismo nivel se calculan de izquierda a derecha."
    },
    "<p><strong>Cálculo inteligente:</strong> en la suma y la multiplicación podemos cambiar el orden de los números y agruparlos de otra forma:\n       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$.\n       También ayuda aplicar la propiedad distributiva: $36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$.</p>",
    "<p><strong>Nombres:</strong> sumando + sumando = suma, minuendo − sustraendo = diferencia, factor · factor = producto,\n       dividendo : divisor = cociente. El término desconocido se halla con la operación inversa: si $\\square\\cdot 8 = 96$, entonces $\\square = 96 : 8 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $120 - 6\\cdot(14 - 5)$.",
     "steps": [
      "Paréntesis: $14 - 5 = 9$.",
      "Multiplicación: $6\\cdot 9 = 54$.",
      "Resta: $120 - 54 = 66$.",
      "<strong>Resultado: 66</strong>"
     ]
    },
    {
     "task": "Calcula de forma inteligente $5\\cdot 63\\cdot 20$.",
     "steps": [
      "Agrupamos $5\\cdot 20 = 100$.",
      "$100\\cdot 63 = 6\\,300$.",
      "<strong>Resultado: $6\\,300$</strong>"
     ]
    }
   ]
  },
  "r5-delitelnost": {
   "title": "Múltiplos y divisores",
   "summary": "Qué son los múltiplos y divisores de un número, cómo hallarlos y criterios de divisibilidad del 2, 3, 5 y 10.",
   "theory": [
    "<p>Los <strong>múltiplos</strong> de un número se obtienen multiplicándolo por $1, 2, 3, \\dots$. Los múltiplos del 6 son\n       $6, 12, 18, 24, \\dots$; hay infinitos.</p>",
    "<p>Un <strong>divisor</strong> de un número es un número que lo divide sin dejar resto. Los divisores del 12 son $1, 2, 3, 4, 6, 12$.\n       Los buscamos por parejas: $12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$. El 1 y el propio número siempre son divisores.</p>",
    {
     "fig": "r5-delitele",
     "caption": "12 puntos se pueden colocar en rectángulos de $1\\cdot 12$, $2\\cdot 6$ y $3\\cdot 4$. Las dimensiones son los divisores del 12."
    },
    "<p><strong>Criterios de divisibilidad:</strong> un número es divisible entre <strong>2</strong> si termina en 0, 2, 4, 6, 8;\n       entre <strong>5</strong> si termina en 0 o 5; entre <strong>10</strong> si termina en 0; entre <strong>3</strong> si la\n       suma de sus cifras es divisible entre tres.</p>"
   ],
   "examples": [
    {
     "task": "Halla todos los divisores del 18.",
     "steps": [
      "Buscamos parejas: $18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$.",
      "4 y 5 no son divisores; a partir de ahí las parejas se repiten.",
      "<strong>Divisores: 1, 2, 3, 6, 9, 18.</strong>"
     ]
    },
    {
     "task": "¿Es el número $4\\,215$ divisible entre tres?",
     "steps": [
      "Suma de las cifras: $4 + 2 + 1 + 5 = 12$.",
      "12 es divisible entre tres.",
      "<strong>Sí, $4\\,215$ es divisible entre tres.</strong> ($4\\,215 : 3 = 1\\,405$)"
     ]
    }
   ]
  },
  "r5-zlomky": {
   "title": "Fracciones: ideas básicas",
   "summary": "Parte de un todo, numerador y denominador, fracción de un número, comparar fracciones.",
   "theory": [
    "<p>Cuando dividimos un todo en partes <strong>iguales</strong>, cada parte es una fracción de él: un medio $\\frac{1}{2}$,\n       un tercio $\\frac{1}{3}$, un cuarto $\\frac{1}{4}$… La fracción $\\frac{3}{8}$ significa: dividimos el todo en 8 partes iguales y tomamos 3.</p>",
    "<p>El número que está debajo de la raya de fracción es el <strong>denominador</strong>: indica en cuántas partes hemos dividido el todo.\n       El número de encima de la raya es el <strong>numerador</strong>: indica cuántas partes tomamos.</p>",
    {
     "fig": "r5-zlomky",
     "caption": "Las fracciones $\\frac{1}{2}$, $\\frac{1}{4}$ y $\\frac{3}{8}$ de una tarta y $\\frac{2}{5}$ de una tira."
    },
    "<p><strong>Fracción de un número:</strong> $\\frac{3}{4}$ de 20 se calcula dividiendo 20 entre el denominador ($20 : 4 = 5$, eso es un cuarto)\n       y multiplicando por el numerador ($5\\cdot 3 = 15$).<br>\n       <strong>Comparar:</strong> con el mismo denominador, es mayor la fracción con mayor numerador: $\\frac{5}{7} &gt; \\frac{3}{7}$.\n       Con el mismo numerador, es mayor la fracción con menor denominador: $\\frac{1}{3} &gt; \\frac{1}{5}$ (un tercio es un trozo más grande que un quinto).</p>"
   ],
   "examples": [
    {
     "task": "¿Cuánto es $\\frac{2}{5}$ de 35?",
     "steps": [
      "Un quinto: $35 : 5 = 7$.",
      "Dos quintos: $7\\cdot 2 = 14$.",
      "<strong>$\\frac{2}{5}$ de 35 es 14.</strong>"
     ]
    },
    {
     "task": "Un tercio del camino mide 4 km. ¿Cuánto mide el camino entero?",
     "steps": [
      "El camino entero tiene 3 tercios.",
      "$3\\cdot 4 = 12$.",
      "<strong>El camino entero mide 12 km.</strong>"
     ]
    }
   ]
  },
  "r5-utvary": {
   "title": "Figuras geométricas básicas",
   "summary": "Punto, recta, semirrecta, segmento, circunferencia y círculo.",
   "theory": [
    "<p>Un <strong>punto</strong> se nombra con una letra mayúscula (A, B, S). Por dos puntos distintos pasa exactamente una <strong>recta</strong>:\n       es recta y no tiene principio ni fin. Se nombra con una letra minúscula ($p$) o con dos puntos (recta $AB$).</p>",
    "<p>Una <strong>semirrecta</strong> tiene principio pero no tiene fin: la semirrecta $AB$ empieza en el punto A y sigue a través del punto B.\n       El <strong>segmento</strong> $AB$ es la parte de la recta entre los puntos A y B; tiene dos extremos y se puede medir.</p>",
    {
     "fig": "r5-utvary",
     "caption": "La línea discontinua indica que la línea continúa sin fin. A la derecha, una circunferencia de centro S, radio r y diámetro d."
    },
    "<p>La <strong>circunferencia</strong> es una línea cuyos puntos están todos a la misma distancia del centro S: esa distancia es el <strong>radio</strong> $r$.\n       El <strong>diámetro</strong> $d$ pasa por el centro y mide el doble: $d = 2\\cdot r$. El <strong>círculo</strong> es la circunferencia junto con toda su parte interior.</p>"
   ],
   "examples": [
    {
     "task": "Una circunferencia tiene 14 cm de diámetro. ¿Cuál es su radio?",
     "steps": [
      "El radio es la mitad del diámetro.",
      "$14 : 2 = 7$.",
      "<strong>$r = 7\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "¿Cuántos segmentos determinan 4 puntos de los cuales no hay tres en una misma recta?",
     "steps": [
      "Puntos A, B, C, D. Unimos cada uno con todos los demás: AB, AC, AD, BC, BD, CD.",
      "<strong>Hay 6.</strong>"
     ]
    }
   ]
  },
  "r5-obvod": {
   "title": "Perímetro del cuadrado, el rectángulo y el triángulo",
   "summary": "Cálculo del perímetro, el lado que falta y cálculos con distintas unidades.",
   "theory": [
    "<p>El <strong>perímetro</strong> de un polígono es la suma de las longitudes de todos sus lados. Lo indicamos con $o$.</p>",
    {
     "fig": "r5-obvod",
     "caption": "Fórmulas del perímetro del cuadrado, el rectángulo y el triángulo."
    },
    "<p><strong>Cuadrado:</strong> $o = 4\\cdot a$. <strong>Rectángulo:</strong> $o = 2\\cdot(a + b)$.\n       <strong>Triángulo:</strong> $o = a + b + c$; el triángulo equilátero tiene $o = 3\\cdot a$.</p>",
    "<p>Antes de sumar, todas las longitudes deben estar en la <strong>misma unidad</strong>. Si un rectángulo tiene lados de $3\\,\\text{dm}$ y $12\\,\\text{cm}$,\n       primero convertimos $3\\,\\text{dm} = 30\\,\\text{cm}$ y luego $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Un triángulo tiene lados de 7 cm, 9 cm y 12 cm. Calcula su perímetro.",
     "steps": [
      "$o = 7 + 9 + 12$.",
      "$o = 28\\,\\text{cm}$."
     ]
    },
    {
     "task": "Un rectángulo tiene 50 m de perímetro y uno de sus lados mide 15 m. ¿Cuánto mide el otro lado?",
     "steps": [
      "La mitad del perímetro es $a + b = 50 : 2 = 25$.",
      "$b = 25 - 15 = 10$.",
      "<strong>El otro lado mide $10\\,\\text{m}$.</strong>"
     ]
    }
   ]
  },
  "r5-jednotky": {
   "title": "Unidades de longitud, masa, capacidad y tiempo",
   "summary": "Conversión de unidades, medidas complejas y elección de la unidad adecuada.",
   "theory": [
    "<p><strong>Longitud:</strong> km, m, dm, cm, mm. <strong>Masa:</strong> t, kg, dag, g.\n       <strong>Capacidad:</strong> hl, l, dl, ml. <strong>Tiempo:</strong> día, hora (h), minuto (min), segundo (s).</p>",
    {
     "fig": "r5-jednotky",
     "caption": "Escaleras de unidades. La flecha indica cuántas unidades menores equivalen a una mayor."
    },
    "<p><strong>A una unidad menor</strong> multiplicamos: $3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$.\n       <strong>A una unidad mayor</strong> dividimos: $4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$.\n       Una medida compleja se convierte por partes: $2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$.</p>",
    "<p>Cuidado con el tiempo: no se cuenta de diez en diez, sino de <strong>60</strong> en 60 (una hora tiene 60 minutos y un minuto, 60 segundos), y un día tiene <strong>24</strong> horas.</p>"
   ],
   "examples": [
    {
     "task": "Expresa $3\\,\\text{l}\\ 4\\,\\text{dl}$ en decilitros.",
     "steps": [
      "$3\\,\\text{l} = 30\\,\\text{dl}$.",
      "$30 + 4 = 34$.",
      "<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>"
     ]
    },
    {
     "task": "Una película empezó a las 18:40 y terminó a las 20:15. ¿Cuántos minutos duró?",
     "steps": [
      "De 18:40 a 19:00 hay 20 minutos.",
      "De 19:00 a 20:00 hay 60 minutos y de 20:00 a 20:15, 15 minutos.",
      "$20 + 60 + 15 = 95$.",
      "<strong>La película duró 95 minutos.</strong>"
     ]
    }
   ]
  },
  "r5-slovne": {
   "title": "Resolución de problemas",
   "summary": "Problemas de varios pasos, partes de un todo, suma y diferencia, redondeo hacia arriba.",
   "theory": [
    "<p>Para resolver un problema: <strong>1.</strong> lee el problema y anota lo que sabes y lo que buscas; <strong>2.</strong> piensa\n       en qué orden vas a calcular; <strong>3.</strong> calcula; <strong>4.</strong> haz la comprobación o una estimación;\n       <strong>5.</strong> escribe la respuesta con una frase completa.</p>",
    "<p>El <strong>modelo de barras</strong> ayuda en los problemas de suma y diferencia. Si dos personas tienen juntas 50 € y una tiene 8 € más,\n       primero restamos la diferencia y así las dos tienen lo mismo.</p>",
    {
     "fig": "r5-model",
     "caption": "Modelo de barras: $50 - 8 = 42$, $42 : 2 = 21$. El menor tiene 21 € y el mayor, $21 + 8 = 29$ €."
    },
    "<p>Cuidado con el <strong>resto</strong>: si tienen que subir a coches 23 niños y en cada coche caben 4, no bastan $23 : 4 = 5$ (resto 3) coches.\n       Los 3 niños que sobran necesitan otro coche, así que hacen falta 6 coches.</p>"
   ],
   "examples": [
    {
     "task": "Lucía tenía 120 euros. Gastó un tercio en zapatos y 25 euros en libros. ¿Cuántos euros le quedaron?",
     "steps": [
      "Un tercio de 120: $120 : 3 = 40$ euros.",
      "En total gastó $40 + 25 = 65$ euros.",
      "Le quedaron $120 - 65 = 55$ euros.",
      "<strong>Respuesta: A Lucía le quedaron 55 euros.</strong>"
     ]
    },
    {
     "task": "Un padre tiene 42 años y tiene el triple de edad que su hijo. ¿Cuántos años tendrá el hijo dentro de 6 años?",
     "steps": [
      "Ahora el hijo tiene $42 : 3 = 14$ años.",
      "Dentro de 6 años: $14 + 6 = 20$.",
      "<strong>Respuesta: El hijo tendrá 20 años.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot {@0} = {@1}$.": "$125\\cdot 8 = 1\\,000$, por eso el resultado es $1\\,000\\cdot {@0} = {@1}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, por eso ${@3} : {@4} = {@5}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, por eso ${@3}\\cdot {@4} = {@5}$.",
  "$25\\cdot 4 = 100$, preto $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.": "$25\\cdot 4 = 100$, por eso $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.",
  "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Súčet: ${@4} + {@5} = {@6}$ (rímskymi číslicami {@7}).": "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Suma: ${@4} + {@5} = {@6}$ (en números romanos, {@7}).",
  "$a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}$, druhá strana meria ${@5}\\,\\text{{@6}}$.": "$a + b = {@0} : 2 = {@1}$, por eso $b = {@2} - {@3} = {@4}$, el otro lado mide ${@5}\\,\\text{{@6}}$.",
  "$a = {@0} : 4 = {@1}$, strana meria ${@2}\\,\\text{{@3}}$.": "$a = {@0} : 4 = {@1}$, el lado mide ${@2}\\,\\text{{@3}}$.",
  "$c = {@0} - {@1} - {@2} = {@3}$, tretia strana meria ${@4}\\,\\text{{@5}}$.": "$c = {@0} - {@1} - {@2} = {@3}$, el tercer lado mide ${@4}\\,\\text{{@5}}$.",
  "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, priemer je ${@2}\\,\\text{{@3}}$.": "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, el diámetro mide ${@2}\\,\\text{{@3}}$.",
  "$o = {@0} + {@1} + {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = {@0} + {@1} + {@2} = {@3}$, el perímetro es ${@4}\\,\\text{{@5}}$.",
  "$o = {@0}\\cdot {@1} = {@2}$, obvod je ${@3}\\,\\text{{@4}}$.": "$o = {@0}\\cdot {@1} = {@2}$, el perímetro es ${@3}\\,\\text{{@4}}$.",
  "$r = d : 2 = {@0} : 2 = {@1}$, polomer je ${@2}\\,\\text{{@3}}$.": "$r = d : 2 = {@0} : 2 = {@1}$, el radio mide ${@2}\\,\\text{{@3}}$.",
  "${@0} : {@1} = {@2}$ (to je ${@3}$), potom ${@4}\\cdot {@5} = {@6}$.": "${@0} : {@1} = {@2}$ (eso es ${@3}$), después ${@4}\\cdot {@5} = {@6}$.",
  "${@0} : {@1} = {@2}$, zvyšok {@3}. {@4}": "${@0} : {@1} = {@2}$, resto {@3}. {@4}",
  "${@0} = {@1}\\cdot {@2}$. Ostatné čísla po delení {@3} dávajú zvyšok.": "${@0} = {@1}\\cdot {@2}$. Los demás números dan resto al dividirlos entre {@3}.",
  "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Odhad: ${@4} {@5} {@6} = {@7}$. (Presný výsledok je ${@8}$.)": "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Estimación: ${@4} {@5} {@6} = {@7}$. (El resultado exacto es ${@8}$.)",
  "${@0}$ z {@1} je ${@2} : {@3} = {@4}$. ${@5}$ je ${@6}\\cdot {@7} = {@8}$. {@9}.": "${@0}$ de {@1} es ${@2} : {@3} = {@4}$. ${@5}$ es ${@6}\\cdot {@7} = {@8}$. {@9}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ a pripočítame zvyšok: ${@4} + {@5} = {@6}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ y sumamos el resto: ${@4} + {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.": "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.",
  "0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.": "0 – 4: hacia abajo; 5 – 9: hacia arriba. Sustituye por ceros las cifras de la derecha.",
  "3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť": "3 042 705 = tres millones cuarenta y dos mil setecientos cinco",
  "<span class=\"c-ok\">{@0} ≐ {@1} (na desiatky)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (na stovky)</span>": "<span class=\"c-ok\">{@0} ≐ {@1} (a las decenas)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (a las centenas)</span>",
  "Aké číslo je $\\text{{@0}}$?": "¿Qué número es $\\text{{@0}}$?",
  "Akú hodnotu má skupina $\\text{{@0}}$?": "¿Qué valor tiene el grupo $\\text{{@0}}$?",
  "Akú hodnotu má číslica {@0} v čísle ${@1}$?": "¿Qué valor tiene la cifra {@0} en el número ${@1}$?",
  "Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). {@0}": "¿Qué parte del todo forman las partes coloreadas? Escríbelo como fracción de la forma a/b (por ejemplo, 2/5). {@0}",
  "Aký je obvod obdĺžnika (v {@0})?": "¿Cuál es el perímetro del rectángulo (en {@0})?",
  "Aký je obvod obdĺžnika v centimetroch?": "¿Cuál es el perímetro del rectángulo en centímetros?",
  "Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.": "Sin la diferencia de 8 €, los dos tendrían lo mismo: (50 − 8) : 2 = 21 €.",
  "Bez rozdielu: ${@0} - {@1} = {@2}$, to je dvakrát toľko, koľko má mladší: ${@3} : 2 = {@4}$. {@5} Skúška: ${@6} + {@7} = {@8}$.": "Sin la diferencia: ${@0} - {@1} = {@2}$, que es el doble de lo que tiene el menor: ${@3} : 2 = {@4}$. {@5} Comprobación: ${@6} + {@7} = {@8}$.",
  "Body {@0}. Úsečky: {@1}. Spolu {@2}.": "Puntos {@0}. Segmentos: {@1}. En total, {@2}.",
  "Celok je rozdelený na {@0} {@1} (menovateľ), {@2} (čitateľ): ${@3}$.": "El todo está dividido en {@0} {@1} (denominador); {@2} (numerador): ${@3}$.",
  "Celok má {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, teda ${@5}\\,\\text{{@6}}$.": "El todo tiene {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, es decir, ${@5}\\,\\text{{@6}}$.",
  "Celok sa skladá z {@0} rovnakých častí. Vynásob.": "El todo está formado por {@0} partes iguales. Multiplica.",
  "Cesta vlakom z Bratislavy do Košíc trvá asi": "El viaje en tren de Bratislava a Kosice dura alrededor de",
  "Cez dva body vieme viesť jedinú priamku.": "Por dos puntos se puede trazar una única recta.",
  "Ciferný súčet: ${@0} = {@1}$, je deliteľný tromi.": "Suma de las cifras: ${@0} = {@1}$, es divisible entre tres.",
  "Ciferný súčet: ${@0} = {@1}$, nie je deliteľný tromi.": "Suma de las cifras: ${@0} = {@1}$, no es divisible entre tres.",
  "Desatina": "Una décima parte",
  "Deň má 24 hodín: ${@0}\\cdot 24 = {@1}$, a ešte ${@2} + {@3} = {@4}$ hodín.": "Un día tiene 24 horas: ${@0}\\cdot 24 = {@1}$, y además ${@2} + {@3} = {@4}$ horas.",
  "Dni a hodiny nemôžeš len tak sčítať. Najprv premeň {@0} {@1} na hodiny.": "No puedes sumar sin más los días y las horas. Primero convierte {@0} {@1} a horas.",
  "Do hrnčeka sa zmestí asi": "En una taza caben unos",
  "Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.": "En el denominador va el número de todas las partes, no solo de las que no están coloreadas.",
  "Do vane sa zmestí asi": "En una bañera caben unos",
  "Do {@0} {@1} sa zmestí ${@2}\\,\\text{{@3}}$. {@4}": "En {@0} {@1} caben ${@2}\\,\\text{{@3}}$. {@4}",
  "Doplň chýbajúce číslo: $\\square : {@0} = {@1}$": "Completa el número que falta: $\\square : {@0} = {@1}$",
  "Doplň chýbajúce číslo: $\\square\\cdot {@0} = {@1}$": "Completa el número que falta: $\\square\\cdot {@0} = {@1}$",
  "Druhý deň neprešli {@0} km, ale o {@1} km viac ako prvý deň.": "El segundo día no recorrieron {@0} km, sino {@1} km más que el primer día.",
  "Druhý deň: ${@0} + {@1} = {@2}$ km. Tretí deň: ${@3} : 2 = {@4}$ km. Spolu: ${@5} + {@6} + {@7} = {@8}$ km.": "Segundo día: ${@0} + {@1} = {@2}$ km. Tercer día: ${@3} : 2 = {@4}$ km. En total: ${@5} + {@6} + {@7} = {@8}$ km.",
  "Dvaja bratia majú spolu {@0} {@1}. Starší má o {@2} {@3} viac ako mladší. Koľko eur má {@4} brat?": "Dos hermanos tienen en total {@0} {@1}. El mayor tiene {@2} {@3} más que el menor. ¿Cuántos euros tiene el hermano {@4}?",
  "Dvanásť bodiek usporiadaných do obdĺžnikov": "Doce puntos colocados formando rectángulos",
  "Dvojica {@0} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.": "La pareja {@0} no se puede usar: solo se puede restar I delante de V y X, X delante de L y C, y C delante de D y M.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}.": "Parejas: ${@0} = {@1}$. Divisores: {@2}.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}. Číslo má iba dva delitele.": "Parejas: ${@0} = {@1}$. Divisores: {@2}. El número solo tiene dos divisores.",
  "Dvoma rôznymi bodmi prechádza práve jedna priamka.": "Por dos puntos distintos pasa exactamente una recta.",
  "Dĺžka triedy je asi": "La longitud de una clase es de unos",
  "Hmotnosť jablka je asi": "Una manzana pesa unos",
  "Hmotnosť nákladného auta je asi": "Un camión pesa alrededor de",
  "Hmotnosť žiaka 5. ročníka je asi": "Un alumno de 5.º pesa unos",
  "Hrúbka zošita je asi": "El grosor de un cuaderno es de unos",
  "Hľadaj v násobilke čísla {@0} posledný výsledok, ktorý ešte nepresiahne {@1}.": "Busca en la tabla del {@0} el último resultado que todavía no pase de {@1}.",
  "Hľadáš {@0} číslo, ty si zostavil {@1}.": "Buscas el número {@0} y has formado el {@1}.",
  "Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.": "Es al revés: el diámetro es el doble del radio, $d = 2\\cdot r$.",
  "Je číslo ${@0}$ deliteľné číslom {@1}?": "¿Es el número ${@0}$ divisible entre {@1}?",
  "Je číslo ${@0}$ párne alebo nepárne?": "¿Es el número ${@0}$ par o impar?",
  "Jeden deň má 24 hodín.": "Un día tiene 24 horas.",
  "Jedna časť je {@0}. Koľko je ${@1}$ z čísla {@2}?": "Una parte es {@0}. ¿Cuánto es ${@1}$ de {@2}?",
  "Koľko eur je {@0} z {@1} eur?": "¿Cuántos euros son {@0} de {@1} euros?",
  "Koľko eur má mladší brat?": "¿Cuántos euros tiene el hermano menor?",
  "Koľko eur má starší brat?": "¿Cuántos euros tiene el hermano mayor?",
  "Koľko eur zostane, keď od súčtu {@0} odčítaš rozdiel {@1}?": "¿Cuántos euros quedan si a la suma {@0} le restas la diferencia {@1}?",
  "Koľko eur {@0} spolu?": "¿Cuántos euros {@0} en total?",
  "Koľko eur {@0} zostalo?": "¿Cuántos euros {@0} quedaron?",
  "Koľko gramov váži celý koláč?": "¿Cuántos gramos pesa el pastel entero?",
  "Koľko hodín majú {@0} {@1} a {@2} {@3}?": "¿Cuántas horas tienen {@0} {@1} y {@2} {@3}?",
  "Koľko hodín majú {@0} {@1}?": "¿Cuántas horas tienen {@0} {@1}?",
  "Koľko je ${@0}$ z čísla {@1}?": "¿Cuánto es ${@0}$ de {@1}?",
  "Koľko je polovica obvodu, teda $a + b$?": "¿Cuánto es la mitad del perímetro, es decir, $a + b$?",
  "Koľko kilometrov meria celá cesta?": "¿Cuántos kilómetros mide el camino entero?",
  "Koľko kilometrov prešli druhý deň?": "¿Cuántos kilómetros recorrieron el segundo día?",
  "Koľko kilometrov prešli tretí deň?": "¿Cuántos kilómetros recorrieron el tercer día?",
  "Koľko kilometrov prešli za tri dni spolu?": "¿Cuántos kilómetros recorrieron en total en los tres días?",
  "Koľko litrov sa zmestí do celej nádrže?": "¿Cuántos litros caben en el depósito entero?",
  "Koľko minút trvala celá cesta?": "¿Cuántos minutos duró el viaje entero?",
  "Koľko minút uplynie od {@0} do {@1}?": "¿Cuántos minutos pasan de las {@0} a las {@1}?",
  "Koľko násobkov čísla {@0} leží medzi číslami 1 a {@1} (vrátane)?": "¿Cuántos múltiplos de {@0} hay entre 1 y {@1} (ambos incluidos)?",
  "Koľko rokov bude mať {@0} o {@1} {@2}?": "¿Cuántos años tendrá {@0} dentro de {@1} {@2}?",
  "Koľko rokov má {@0} teraz?": "¿Cuántos años tiene {@0} ahora?",
  "Koľko úsečiek určuje {@0} bodov, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "¿Cuántos segmentos determinan {@0} puntos de los que no hay tres en la misma recta? (Unimos cada dos puntos con un segmento.)",
  "Koľko úsečiek určujú {@0} body, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "¿Cuántos segmentos determinan {@0} puntos de los que no hay tres en la misma recta? (Unimos cada dos puntos con un segmento.)",
  "Koľkokrát treba vziať {@0}, aby vyšlo {@1}?": "¿Cuántas veces hay que tomar {@0} para obtener {@1}?",
  "Kruh je kružnica aj s celou vnútornou časťou.": "El círculo es la circunferencia junto con toda la parte de dentro.",
  "Kružnica je len čiara, kruh je aj plocha vnútri.": "La circunferencia es solo una línea; el círculo es también la superficie de dentro.",
  "Kružnica má polomer ${@0}\\,\\text{{@1}}$. Aký má priemer (v {@2})?": "Una circunferencia tiene un radio de ${@0}\\,\\text{{@1}}$. ¿Cuánto mide su diámetro (en {@2})?",
  "Kružnica má priemer ${@0}\\,\\text{{@1}}$. Aký má polomer (v {@2})?": "Una circunferencia tiene un diámetro de ${@0}\\,\\text{{@1}}$. ¿Cuánto mide su radio (en {@2})?",
  "Ktorá číslica stojí v čísle ${@0}$ hneď vpravo od rádu {@1}?": "¿Qué cifra está en el número ${@0}$ justo a la derecha del orden de las {@1}?",
  "Ktoré dve čísla dajú spolu $1\\,000$?": "¿Qué dos números suman $1\\,000$?",
  "Ktoré dve čísla dajú spolu pekný súčin 100?": "¿Qué dos números dan un producto redondo, 100?",
  "Ktoré je {@0} prirodzené číslo, ktoré sa po zaokrúhlení na {@1} rovná ${@2}$?": "¿Cuál es el número natural {@0} que, redondeado a las {@1}, da ${@2}$?",
  "Ktoré z čísel je násobkom čísla {@0}?": "¿Cuál de los números es múltiplo de {@0}?",
  "Ktoré z čísel je {@0}?": "¿Cuál de los números es el {@0}?",
  "Ktorý je najväčší násobok čísla {@0}, ktorý nie je väčší ako {@1}?": "¿Cuál es el mayor múltiplo de {@0} que no es mayor que {@1}?",
  "Ktorý zápis čísla ${@0}$ rímskymi číslicami je správny?": "¿Qué forma de escribir ${@0}$ en números romanos es correcta?",
  "Mama": "Mamá",
  "Menovatele sú rovnaké, rozhoduje čitateľ: ${@0} {@1} {@2}$.": "Los denominadores son iguales, decide el numerador: ${@0} {@1} {@2}$.",
  "Meníš na menšiu jednotku, preto násob.": "Pasas a una unidad menor, así que multiplica.",
  "Meníš na väčšiu jednotku, preto deľ.": "Pasas a una unidad mayor, así que divide.",
  "Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.": "El sustraendo no se averigua sumando. Al minuendo réstale la diferencia.",
  "Menšiteľ zistíme odčítaním: ${@0} - {@1} = {@2}$.": "El sustraendo lo averiguamos restando: ${@0} - {@1} = {@2}$.",
  "Minul": "Gastó",
  "Minula": "Gastó",
  "Mladší má {@0} {@1}.": "El menor tiene {@0} {@1}.",
  "Na ${@0}$ sa zaokrúhľujú čísla od ${@1}$ (nahor) po ${@2}$ (nadol). {@3} je ${@4}$.": "A ${@0}$ se redondean los números desde ${@1}$ (hacia arriba) hasta ${@2}$ (hacia abajo). {@3} es ${@4}$.",
  "Na farme nazbierali {@0} {@1}. Do jedného obalu sa zmestí {@2} vajec. Koľko obalov potrebujú na všetky vajcia?": "En una granja recogieron {@0} {@1}. En una huevera caben {@2} huevos. ¿Cuántas hueveras necesitan para todos los huevos?",
  "Na menšiu jednotku násobíme, na väčšiu jednotku delíme.": "Para pasar a una unidad menor multiplicamos; para pasar a una mayor, dividimos.",
  "Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.": "En el lugar de las unidades de millar pon la cifra más pequeña que no sea 0.",
  "Na výlet ide {@0} {@1}. Do jednej lodičky sa {@2} {@3} {@4}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?": "Van de excursión {@0} {@1}. En una barca {@2} {@3} {@4}. ¿Cuántas barcas necesitan para que todos los niños naveguen a la vez?",
  "Na zvyšok treba ešte jeden obal, spolu {@0} {@1}.": "Para el resto hace falta otra huevera, en total {@0} {@1}.",
  "Na zvyšok treba ešte jednu lodičku, spolu {@0} {@1}.": "Para el resto hace falta otra barca, en total {@0} {@1}.",
  "Najmenšie": "El más pequeño",
  "Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.": "Primero completa hasta la hora en punto y después suma el resto. Una hora tiene 60 minutos.",
  "Najprv preveď obe čísla na arabské číslice, potom sčítaj.": "Primero pasa los dos números a cifras arábigas y después suma.",
  "Najprv rovnaké jednotky: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Potom $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.": "Primero, las mismas unidades: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Después $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.",
  "Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.": "Primero calcula la parte de toda la cantidad, después suma todos los gastos y réstalos.",
  "Najprv zaokrúhli každé číslo na stovky, až potom počítaj.": "Primero redondea cada número a las centenas y solo después calcula.",
  "Najprv zisti vek {@0} teraz z údaju {@1} {@2}, až potom pripočítaj {@3}. {@4} o {@5} {@6} už nebude {@7} {@8}.": "Primero averigua la edad actual {@0} a partir del dato {@1} {@2} y solo después suma {@3}. Dentro de {@5} {@6}, {@4} ya no será {@7} {@8}.",
  "Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.": "Primero averigua cuánto es una parte (divide entre el denominador) y después multiplica por el numerador.",
  "Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.": "Primero averigua cuántos años tiene ahora el niño (división) y después suma.",
  "Najprv zátvorka, potom násobenie, nakoniec odčítanie.": "Primero el paréntesis, después la multiplicación y al final la resta.",
  "Najväčšia číslica patrí na miesto tisícov.": "La cifra mayor va en el lugar de las unidades de millar.",
  "Najväčšie": "El más grande",
  "Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.": "Dibuja un modelo de barras. Resta la diferencia de la suma: lo que queda se lo reparten los hermanos a partes iguales.",
  "Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.": "Solo has escrito la cifra. El valor de una cifra depende del lugar que ocupa: añade detrás el número correcto de ceros.",
  "Napíš všetky delitele čísla {@0}. Oddeľ ich bodkočiarkou.": "Escribe todos los divisores de {@0}. Sepáralos con punto y coma.",
  "Napíš {@0} čísla ${@1}$.": "Escribe el {@0} del número ${@1}$.",
  "Nasledovník je o 1 väčší: ${@0} + 1 = {@1}$.": "El siguiente es 1 mayor: ${@0} + 1 = {@1}$.",
  "Nasledovník je číslo o 1 väčšie.": "El siguiente es el número que es 1 mayor.",
  "Neznámy delenec zistíme násobením: ${@0}\\cdot {@1} = {@2}$.": "El dividendo desconocido lo averiguamos multiplicando: ${@0}\\cdot {@1} = {@2}$.",
  "Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.": "El dividendo desconocido se averigua multiplicando, no dividiendo: multiplica el cociente por el divisor.",
  "Neznámy činiteľ zistíme delením: ${@0} : {@1} = {@2}$.": "El factor desconocido lo averiguamos dividiendo: ${@0} : {@1} = {@2}$.",
  "Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.": "El factor desconocido se averigua dividiendo, no multiplicando: divide el producto entre el factor conocido.",
  "Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.": "Has contado dos veces algunos segmentos. El segmento AB es el mismo que BA: cuenta cada pareja de puntos solo una vez.",
  "Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.": "Busca el orden al que redondeas y avanza un lugar hacia la derecha.",
  "Násobky: {@0}, {@1}, {@2}, …, {@3}. Posledný je ${@4}\\cdot {@5} = {@6}$, ďalší ${@7}$ je už väčší ako {@8}. Je ich {@9}.": "Múltiplos: {@0}, {@1}, {@2}, …, {@3}. El último es ${@4}\\cdot {@5} = {@6}$; el siguiente, ${@7}$, ya es mayor que {@8}. Hay {@9}.",
  "Obdĺžnik má dve dvojice rovnakých strán.": "El rectángulo tiene dos parejas de lados iguales.",
  "Obdĺžnik má obvod ${@0}\\,\\text{{@1}}$ a jednu stranu ${@2}\\,\\text{{@3}}$. Aká dlhá je druhá strana (v {@4})?": "Un rectángulo tiene un perímetro de ${@0}\\,\\text{{@1}}$ y un lado de ${@2}\\,\\text{{@3}}$. ¿Cuánto mide el otro lado (en {@4})?",
  "Obdĺžnik má strany ${@0}\\,\\text{dm}$ a ${@1}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.": "Un rectángulo tiene lados de ${@0}\\,\\text{dm}$ y ${@1}\\,\\text{cm}$. Calcula su perímetro en centímetros.",
  "Obvod je dvojnásobok súčtu dvoch susedných strán.": "El perímetro es el doble de la suma de dos lados contiguos.",
  "Obvod obdĺžnika je $2\\cdot(a + b)$.": "El perímetro del rectángulo es $2\\cdot(a + b)$.",
  "Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.": "El perímetro contiene cada lado dos veces. Primero divídelo entre dos y solo después resta el lado conocido.",
  "Obvod štvorca, obdĺžnika a trojuholníka": "Perímetro del cuadrado, del rectángulo y del triángulo",
  "Od obvodu odčítaj dĺžky známych strán.": "Al perímetro réstale las longitudes de los lados conocidos.",
  "Od obvodu {@0} odčítaj {@1}.": "Al perímetro {@0} réstale {@1}.",
  "Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.": "Has restado bien la diferencia de la suma, pero los hermanos todavía tienen que repartirse lo que queda en dos partes iguales.",
  "Od súčtu {@0} odčítaj známu stranu {@1}.": "A la suma {@0} réstale el lado conocido {@1}.",
  "Od {@0} do {@1} je {@2} min, od {@3} do {@4} je {@5} min. Spolu ${@6} + {@7} = {@8}$ minút.": "De las {@0} a las {@1} hay {@2} min y de las {@3} a las {@4}, {@5} min. En total ${@6} + {@7} = {@8}$ minutos.",
  "Od {@0} do {@1} uplynulo {@2} minút.": "De las {@0} a las {@1} pasaron {@2} minutos.",
  "Odčítaj": "Resta",
  "Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.": "Solo has restado un lado. Al perímetro réstale los dos lados conocidos.",
  "Odčítal si iba peniaze za hru. Nezabudni odčítať aj {@0} {@1} za knihu.": "Solo has restado el dinero del juego. No olvides restar también {@0} {@1} del libro.",
  "Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to {@0} všetkých peňazí.": "Solo has restado el dinero del libro. Resta también lo del juego: es {@0} de todo el dinero.",
  "Osmina": "Un octavo",
  "Otec": "Papá",
  "Podiel vynásob deliteľom.": "Multiplica el cociente por el divisor.",
  "Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.": "El radio es más corto que el diámetro, así que hay que dividir el diámetro entre dos, no multiplicarlo.",
  "Polovica": "La mitad",
  "Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.": "La mitad del perímetro es la suma de los dos lados contiguos. Réstale todavía el lado conocido.",
  "Polovica obvodu obdĺžnika je súčet dvoch susedných strán.": "La mitad del perímetro del rectángulo es la suma de dos lados contiguos.",
  "Polovicu": "La mitad",
  "Polpriamka má jeden začiatočný bod.": "La semirrecta tiene un punto de origen.",
  "Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.": "La semirrecta empieza en un punto y continúa sin fin solo hacia un lado.",
  "Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.": "La semirrecta empieza en un punto y hacia el otro lado continúa sin fin.",
  "Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…": "Nombra los puntos con letras y escribe ordenadamente todas las parejas: primero con el punto A, después con el punto B…",
  "Poradie operácií": "Orden de las operaciones",
  "Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.": "Compara las cifras desde la izquierda hasta encontrar la primera distinta.",
  "Posledná číslica je {@0}, je párna.": "La última cifra es {@0}, es par.",
  "Posledná číslica je {@0}, nie je 0 ani 5.": "La última cifra es {@0}, no es 0 ni 5.",
  "Posledná číslica je {@0}, nie je 0.": "La última cifra es {@0}, no es 0.",
  "Posledná číslica je {@0}, nie je párna.": "La última cifra es {@0}, no es par.",
  "Posledná číslica je {@0}, preto je číslo {@1}.": "La última cifra es {@0}, por eso el número es {@1}.",
  "Posledná číslica je {@0}.": "La última cifra es {@0}.",
  "Poznáš {@0}, celok je teda väčší. Časť treba násobiť, nie deliť.": "Conoces {@0}, así que el todo es mayor. La parte hay que multiplicarla, no dividirla.",
  "Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.": "Cuidado: un denominador mayor no significa una fracción mayor. Cuantas más partes haces del todo, más pequeñas son.",
  "Pozri sa iba na poslednú číslicu.": "Fíjate solo en la última cifra.",
  "Pozri sa na poslednú číslicu.": "Fíjate en la última cifra.",
  "Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Fíjate en la cifra que está justo a la derecha del orden al que redondeas: de 0 a 4, hacia abajo; de 5 a 9, hacia arriba.",
  "Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.": "Fíjate bien: las dos fracciones tienen el mismo numerador y el mismo denominador.",
  "Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob {@0} výsledkom zátvorky, až potom odčítaj od {@1}.": "Has calculado de izquierda a derecha. La multiplicación va antes que la resta: primero multiplica {@0} por el resultado del paréntesis y solo después resta de {@1}.",
  "Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: ${@0}\\cdot {@1}$ vypočítaj skôr, ako budeš sčítať.": "Has calculado de izquierda a derecha. La multiplicación va antes que la suma: calcula ${@0}\\cdot {@1}$ antes de sumar.",
  "Počítal si, akoby tam zátvorka nebola. Číslo {@0} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.": "Has calculado como si no hubiera paréntesis. El número {@0} multiplica toda la diferencia del paréntesis: calcula primero el paréntesis.",
  "Predchodca je o 1 menší: ${@0} - 1 = {@1}$.": "El anterior es 1 menor: ${@0} - 1 = {@1}$.",
  "Predchodca je číslo o 1 menšie.": "El anterior es el número que es 1 menor.",
  "Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).": "Imagina el objeto y compáralo con algo que conozcas (por ejemplo, 1 kg de harina, 1 m – un paso largo, 1 l – una botella).",
  "Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.": "Solo has pasado las horas a minutos. Cada minuto tiene además 60 segundos.",
  "Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.": "Solo has pasado los segundos a minutos. Una hora tiene 60 minutos, así que divide otra vez entre sesenta.",
  "Premeň ${@0}\\,\\text{dm}$ na centimetre.": "Convierte ${@0}\\,\\text{dm}$ a centímetros.",
  "Premeň ${@0}\\,\\text{{@1}}$ na {@2}.": "Convierte ${@0}\\,\\text{{@1}}$ a {@2}.",
  "Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.": "Convierte los decímetros a centímetros ($1\\,\\text{dm} = 10\\,\\text{cm}$) y solo después calcula.",
  "Prevody jednotiek dĺžky, hmotnosti, objemu a času": "Conversión de unidades de longitud, masa, capacidad y tiempo",
  "Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.": "Para la divisibilidad entre tres no decide la última cifra. Suma todas las cifras y comprueba si la suma es divisible entre tres.",
  "Pri deliteľnosti číslom {@0} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.": "Para la divisibilidad entre {@0} solo decide la última cifra. Mírala otra vez y compárala con el criterio de divisibilidad.",
  "Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.": "Con el tiempo no se convierte de diez en diez: una hora tiene 60 minutos y un minuto, 60 segundos.",
  "Pri čase sa nepremieňa po stovkách: 1 {@0} = 60 {@1}, preto deľ šesťdesiatimi.": "Con el tiempo no se convierte de cien en cien: 1 {@0} = 60 {@1}, así que divide entre sesenta.",
  "Priamka je nekonečná na obe strany.": "La recta es infinita por los dos lados.",
  "Priamka má začiatok aj koniec.": "La recta tiene principio y fin.",
  "Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.": "La recta no tiene fin; la semirrecta tiene origen; el segmento tiene principio y fin.",
  "Priamka nemá koniec, preto nemá ani dĺžku.": "La recta no tiene fin, así que tampoco tiene longitud.",
  "Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.": "La recta no tiene principio ni fin: por los dos lados continuaría con una línea discontinua.",
  "Priamka, polpriamka, úsečka a kružnica": "Recta, semirrecta, segmento y circunferencia",
  "Priamku môžeme odmerať pravítkom.": "Una recta se puede medir con una regla.",
  "Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.": "El diámetro es más largo que el radio, así que hay que multiplicar el radio por dos, no dividirlo.",
  "Priemer je dvakrát dlhší ako polomer.": "El diámetro es el doble de largo que el radio.",
  "Priemer kružnice je polovica polomeru.": "El diámetro de una circunferencia es la mitad del radio.",
  "Pripočítaj": "Suma",
  "Pripočítaj ešte {@0} {@1}: ${@2} + {@3}$.": "Suma todavía {@0} {@1}: ${@2} + {@3}$.",
  "Pripočítaj {@0} {@1}: ${@2} + {@3}$.": "Suma {@0} {@1}: ${@2} + {@3}$.",
  "Pätina": "Un quinto",
  "Pätinu": "Un quinto",
  "Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.": "Mismo denominador: compara los numeradores. Mismo numerador: un denominador menor significa partes mayores.",
  "Rovnostranný trojuholník má 3 rovnaké strany.": "El triángulo equilátero tiene 3 lados iguales.",
  "Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel {@0} {@1}.": "Has dividido la suma en dos partes iguales, pero los hermanos no tienen lo mismo. Primero a la suma réstale la diferencia de {@0} {@1}.",
  "Rozdelíme po rádoch: {@0}. Spolu ${@1} = {@2}$.": "Separamos por órdenes: {@0}. En total ${@1} = {@2}$.",
  "Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.": "Divide la escritura en grupos de millares, centenas, decenas y unidades. Parejas como CM, XC o IV significan resta.",
  "Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.": "Decide la cifra a la derecha del orden: con 5 o más se redondea hacia arriba; con 4 o menos, hacia abajo.",
  "Rozložíme po rádoch: {@0}.": "Descomponemos por órdenes: {@0}.",
  "Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…": "Cuenta los órdenes desde la derecha: en el último lugar están las unidades; delante, las decenas, las centenas, las unidades de millar…",
  "Rímske číslice s odčítaním": "Números romanos con resta",
  "S = stovky, D = desiatky, J = jednotky danej triedy": "C = centenas, D = decenas, U = unidades de cada clase",
  "Skús deliť: ${@0} : {@1} = {@2}$, zvyšok {@3}. Násobok čísla {@4} sa dá vydeliť bez zvyšku.": "Prueba a dividir: ${@0} : {@1} = {@2}$, resto {@3}. Un múltiplo de {@4} se puede dividir sin resto.",
  "Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je {@0}.": "Prueba a dividir entre 1, 2, 3, … y busca parejas cuyo producto sea {@0}.",
  "Spolu {@0} {@1}.": "En total {@0} {@1}.",
  "Spomeň si na malú násobilku čísla {@0}.": "Acuérdate de la tabla del {@0}.",
  "Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.": "Calcula el valor de esta escritura: un símbolo menor detrás de uno mayor se suma, así que sale otro número.",
  "Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.": "Cuenta todas las partes: ese es el denominador. Después cuenta las partes coloreadas: ese es el numerador.",
  "Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.": "Has contado las partes sin colorear. El numerador dice cuántas partes están coloreadas.",
  "Správne je {@0}: {@1}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.": "La correcta es {@0}: {@1}. Las demás formas incumplen las reglas o tienen otro valor.",
  "Starší má ${@0} + {@1} = {@2}$ {@3}.": "El mayor tiene ${@0} + {@1} = {@2}$ {@3}.",
  "Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.": "Los lados están en unidades distintas. Primero convierte los decímetros a centímetros y solo después suma.",
  "Súčin vydeľ známym činiteľom.": "Divide el producto entre el factor conocido.",
  "Sčítaj ${@0} + {@1}$.": "Suma ${@0} + {@1}$.",
  "Sčítaj dve susedné strany: ${@0} + {@1}$.": "Suma dos lados contiguos: ${@0} + {@1}$.",
  "Sčítaj dĺžky všetkých troch strán.": "Suma las longitudes de los tres lados.",
  "Sčítaj hodnoty skupín {@0}.": "Suma los valores de los grupos {@0}.",
  "Sčítaj všetky číslice čísla.": "Suma todas las cifras del número.",
  "Sčítaj známe strany: ${@0} + {@1}$.": "Suma los lados conocidos: ${@0} + {@1}$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.": "Solo has sumado dos lados. El rectángulo tiene cuatro lados: dos de longitud $a$ y dos de longitud $b$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.": "Solo has sumado dos lados. El rectángulo tiene cuatro lados: multiplica por dos la suma de dos lados contiguos.",
  "Sčítal si čísla v rôznych jednotkách. Najprv premeň {@0} {@1} na {@2}.": "Has sumado números en unidades distintas. Primero convierte {@0} {@1} a {@2}.",
  "Teraz: ${@0} : {@1} = {@2}$ {@3}. O {@4} {@5}: ${@6} + {@7} = {@8}$.": "Ahora: ${@0} : {@1} = {@2}$ {@3}. Dentro de {@4} {@5}: ${@6} + {@7} = {@8}$.",
  "Toto je posledný násobok čísla {@0}, nie počet násobkov. Zisti, koľkokrát si musel {@1} pripočítať, aby si sa k nemu dostal.": "Ese es el último múltiplo de {@0}, no el número de múltiplos. Averigua cuántas veces has tenido que sumar {@1} para llegar a él.",
  "Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.": "Ese es el resultado exacto. La tarea pide una estimación: primero redondea los dos números a las centenas y solo después calcula.",
  "Toto je vek {@0} teraz. Úloha sa pýta, koľko rokov bude mať o {@1} {@2}.": "Esa es la edad actual {@0}. Se pregunta cuántos años tendrá dentro de {@1} {@2}.",
  "Toto má {@0} brat. Pýtame sa na {@1}.": "Eso es lo que tiene el hermano {@0}. Se pregunta por el {@1}.",
  "Tretina": "Un tercio",
  "Tretinu": "Un tercio",
  "Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.": "El tercer día recorrieron la mitad de lo que recorrieron el segundo día, no el primero.",
  "Triedy a rády čísla 3 042 705": "Clases y órdenes del número 3 042 705",
  "Trojuholník má iba tri strany, nie štyri.": "El triángulo solo tiene tres lados, no cuatro.",
  "Trojuholník má obvod ${@0}\\,\\text{{@1}}$. Dve jeho strany merajú ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Aká dlhá je tretia strana (v {@6})?": "Un triángulo tiene un perímetro de ${@0}\\,\\text{{@1}}$. Dos de sus lados miden ${@2}\\,\\text{{@3}}$ y ${@4}\\,\\text{{@5}}$. ¿Cuánto mide el tercer lado (en {@6})?",
  "Trojuholník má strany ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Vypočítaj jeho obvod v {@6}.": "Un triángulo tiene lados de ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ y ${@4}\\,\\text{{@5}}$. Calcula su perímetro en {@6}.",
  "Turisti prešli prvý deň {@0} km. Druhý deň prešli o {@1} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?": "Unos excursionistas recorrieron {@0} km el primer día. El segundo día recorrieron {@1} km más que el primero y el tercer día, la mitad de lo que recorrieron el segundo. ¿Cuántos kilómetros recorrieron en los tres días?",
  "V košíku je {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "En la cesta hay {@0} {@1}. Son rojas ${@2}$ de ellas. ¿Cuántas manzanas son rojas?",
  "V košíku sú {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "En la cesta hay {@0} {@1}. Son rojas ${@2}$ de ellas. ¿Cuántas manzanas son rojas?",
  "Vlak odišiel o {@0} a do cieľa prišiel o {@1}. Koľko minút trvala cesta?": "El tren salió a las {@0} y llegó a su destino a las {@1}. ¿Cuántos minutos duró el viaje?",
  "Vyber správny údaj: {@0} …": "Elige el dato correcto: {@0} …",
  "Vydeľ ${@0} : {@1}$.": "Divide ${@0} : {@1}$.",
  "Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.": "Divide y fíjate en el resto. Si sobra algo, necesitas uno más.",
  "Vydeľ {@0} menovateľom {@1}.": "Divide {@0} entre el denominador {@1}.",
  "Vydeľ číslo menovateľom a výsledok vynásob čitateľom.": "Divide el número entre el denominador y multiplica el resultado por el numerador.",
  "Vynásob ${@0}\\cdot {@1}$.": "Multiplica ${@0}\\cdot {@1}$.",
  "Vynásob {@0} čitateľom {@1}.": "Multiplica {@0} por el numerador {@1}.",
  "Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.": "Has multiplicado el lado por sí mismo: eso es el área del cuadrado. El perímetro es la suma de las longitudes de los cuatro lados.",
  "Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.": "Has multiplicado los lados: eso es el área, no el perímetro. El perímetro es la suma de las longitudes de todos los lados.",
  "Vypočítaj $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.": "Calcula $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.",
  "Vypočítaj ${@0} - {@1}\\cdot({@2} - {@3})$.": "Calcula ${@0} - {@1}\\cdot({@2} - {@3})$.",
  "Vypočítaj ${@0}\\cdot 100$.": "Calcula ${@0}\\cdot 100$.",
  "Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{{@0}} + \\text{{@1}}$": "Calcula y escribe el resultado en cifras arábigas: $\\text{{@0}} + \\text{{@1}}$",
  "Vypočítaj obvod obdĺžnika so stranami $a = {@0}\\,\\text{{@1}}$ a $b = {@2}\\,\\text{{@3}}$ (v {@4}).": "Calcula el perímetro de un rectángulo de lados $a = {@0}\\,\\text{{@1}}$ y $b = {@2}\\,\\text{{@3}}$ (en {@4}).",
  "Vypočítaj obvod rovnostranného trojuholníka so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Calcula el perímetro de un triángulo equilátero de lado ${@0}\\,\\text{{@1}}$ (en {@2}).",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Calcula el perímetro de un cuadrado de lado ${@0}\\,\\text{{@1}}$ (en {@2}).",
  "Vypočítaj postupne každý deň a nakoniec všetko sčítaj.": "Calcula cada día por orden y al final súmalo todo.",
  "Vypočítaj výhodne $125\\cdot {@0}\\cdot 8$.": "Calcula de forma inteligente $125\\cdot {@0}\\cdot 8$.",
  "Vypočítaj výhodne $25\\cdot {@0}\\cdot 4$.": "Calcula de forma inteligente $25\\cdot {@0}\\cdot 4$.",
  "Vypočítaj výhodne ${@0}\\cdot {@1}$.": "Calcula de forma inteligente ${@0}\\cdot {@1}$.",
  "Vypočítaj zátvorku ${@0} + {@1}$.": "Calcula el paréntesis ${@0} + {@1}$.",
  "Vypočítaj zátvorku ${@0} - {@1}$.": "Calcula el paréntesis ${@0} - {@1}$.",
  "Vypočítal si iba ${@0}$, teda jeden diel. Ešte ho vynásob čitateľom {@1}.": "Solo has calculado ${@0}$, es decir, una parte. Todavía tienes que multiplicarla por el numerador {@1}.",
  "Vyučovacia hodina trvá": "Una clase dura",
  "Vzdialenosť z Bratislavy do Košíc je asi": "La distancia de Bratislava a Kosice es de unos",
  "Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.": "Convierte la unidad mayor a la menor y después suma la otra parte.",
  "Výška dospelého človeka je asi": "La altura de una persona adulta es de unos",
  "Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.": "Has sumado todos los símbolos. Pero un símbolo menor delante de uno mayor se resta: por ejemplo, IX es 9, no 11.",
  "Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. {@0} je ${@1}$.": "Todos los números tienen el mismo número de cifras, así que los comparamos desde la izquierda. {@0} es ${@1}$.",
  "Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.": "Fíjate en si la línea tiene principio, fin o ninguno de los dos.",
  "Z číslic {@0} zostav {@1} štvorciferné číslo. Každú číslicu použi práve raz.": "Con las cifras {@0} forma el número de cuatro cifras {@1}. Usa cada cifra exactamente una vez.",
  "Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.": "Se te ha olvidado el tercer día. La tarea pregunta por los tres días.",
  "Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš {@0}.": "Has confundido los conceptos: el siguiente es 1 mayor y el anterior, 1 menor. Buscas el {@0}.",
  "Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Has intercambiado los papeles del numerador y el denominador: divide el número entre el denominador y multiplica el resultado por el numerador.",
  "Zaokrúhli ${@0}$ na stovky.": "Redondea ${@0}$ a las centenas.",
  "Zaokrúhli obe čísla na stovky a odhadni výsledok: ${@0} {@1} {@2}$.": "Redondea los dos números a las centenas y estima el resultado: ${@0} {@1} {@2}$.",
  "Zaokrúhli číslo ${@0}$ na {@1}.": "Redondea el número ${@0}$ a las {@1}.",
  "Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.": "Solo has redondeado el resultado. Para estimar, redondea primero cada número por separado y después calcula con los números redondeados.",
  "Zaokrúhlil si na iný rád. Na {@0} znamená, že všetky číslice vpravo od rádu {@1} nahradíš nulami.": "Has redondeado a otro orden. Redondear a las {@0} significa sustituir por ceros todas las cifras a la derecha del orden de las {@1}.",
  "Zaokrúhľovanie na číselnej osi": "Redondeo en la recta numérica",
  "Zapíš rímskymi číslicami číslo ${@0}$.": "Escribe el número ${@0}$ en números romanos.",
  "Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.": "Escribe por separado las unidades de millar, las centenas, las decenas y las unidades. Recuerda: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.",
  "Zisti, koľkokrát sa {@0} celé zmestí do {@1}.": "Averigua cuántas veces cabe {@0} entero en {@1}.",
  "Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).": "Averigua en qué lugar está la cifra (unidades, decenas, centenas, unidades de millar…).",
  "Zlomky na koláčoch a páse": "Fracciones en pasteles y en una tira",
  "Zlomky nie sú rovnaké – porovnaj ich menovatele.": "Las fracciones no son iguales: compara sus denominadores.",
  "Zlomky nie sú rovnaké – porovnaj ich čitatele.": "Las fracciones no son iguales: compara sus numeradores.",
  "Zlomky sú rovnaké.": "Las fracciones son iguales.",
  "Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.": "El signo está al revés. Con el mismo denominador, es mayor la fracción que tiene el numerador mayor.",
  "Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.": "Un símbolo no se puede repetir cuatro veces y solo se puede restar I delante de V y X, X delante de L y C, y C delante de D y M.",
  "Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.": "Los símbolos I, X, C no se pueden repetir cuatro veces seguidas. Para 4, 9, 40, 90, 400 y 900 usa la escritura con resta.",
  "Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.": "Los símbolos I, X, C, M pueden ir seguidos como mucho tres veces. En lugar de cuatro símbolos iguales, usa la resta.",
  "Zvyšok sa delí na dve rovnaké časti.": "Lo que queda se divide en dos partes iguales.",
  "Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.": "El paréntesis va primero. Después la división y la multiplicación, y la suma al final.",
  "Zátvorka: ${@0} + {@1} = {@2}$. Delenie a násobenie: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Sčítanie: ${@9} + {@10} = {@11}$.": "Paréntesis: ${@0} + {@1} = {@2}$. División y multiplicación: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Suma: ${@9} + {@10} = {@11}$.",
  "Zátvorka: ${@0} - {@1} = {@2}$. Násobenie: ${@3}\\cdot {@4} = {@5}$. Odčítanie: ${@6} - {@7} = {@8}$.": "Paréntesis: ${@0} - {@1} = {@2}$. Multiplicación: ${@3}\\cdot {@4} = {@5}$. Resta: ${@6} - {@7} = {@8}$.",
  "cesty": "del camino",
  "dcéra": "su hija",
  "dcére": "su hija",
  "dcéry": "de su hija",
  "delitele čísla 12: 1, 2, 3, 4, 6, 12": "divisores de 12: 1, 2, 3, 4, 6, 12",
  "desatina": "una décima parte",
  "desatinu": "una décima parte",
  "desatiny": "una décima parte",
  "dni": "días",
  "dní": "días",
  "euro": "euro",
  "hodinu": "hora",
  "koláč": "pastel",
  "koláča": "del pastel",
  "lodičiek": "barcas",
  "lodičky": "barcas",
  "menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M": "un símbolo menor delante de uno mayor se resta: solo I delante de V, X; X delante de L, C; C delante de D, M",
  "meria": "mide",
  "miliónov": "unidades de millón",
  "milióny": "millones",
  "minul": "gastó",
  "minula": "gastó",
  "mladšieho": "menor",
  "mladší": "menor",
  "nadol": "hacia abajo",
  "nahor": "hacia arriba",
  "najmenšie": "más pequeño",
  "najväčšie": "más grande",
  "napr. 1; 2; 4": "p. ej., 1; 2; 4",
  "napr. 2/5": "p. ej., 2/5",
  "napr. MCMXC": "p. ej., MCMXC",
  "nasledovníka": "siguiente",
  "nepárne": "impar",
  "nie": "no",
  "nádrže": "del depósito",
  "obalov": "hueveras",
  "obaly": "hueveras",
  "odčítaj": "resta",
  "odčítaš": "restas",
  "osmina": "un octavo",
  "osminu": "un octavo",
  "osminy": "un octavo",
  "polovica": "la mitad",
  "polovice": "la mitad",
  "polovicu": "la mitad",
  "polpriamka": "semirrecta",
  "polpriamka AB": "semirrecta AB",
  "predchodcu": "anterior",
  "priamka AB": "recta AB",
  "priemer d = 2 · r": "diámetro d = 2 · r",
  "pripočítaj": "suma",
  "pripočítaš": "sumas",
  "párne": "par",
  "pásik": "tira",
  "pätina": "un quinto",
  "pätinu": "un quinto",
  "pätiny": "un quinto",
  "päťkrát": "cinco veces",
  "rokov": "años",
  "roky": "años",
  "rovnaké diely": "partes iguales",
  "rovnakých dielov": "partes iguales",
  "spolu 50 €": "en total 50 €",
  "staršia": "mayor",
  "staršieho": "mayor",
  "starší": "mayor",
  "stotisícov": "centenas de millar",
  "syn": "su hijo",
  "syna": "de su hijo",
  "synovi": "su hijo",
  "také časti": "partes así",
  "takých častí": "partes así",
  "tretina": "un tercio",
  "tretinu": "un tercio",
  "tretiny": "un tercio",
  "vajec": "huevos",
  "vyfarbené sú {@0}": "hay {@0} coloreadas",
  "vyfarbený je 1": "hay 1 coloreada",
  "vyfarbených je {@0}": "hay {@0} coloreadas",
  "váži": "pesa",
  "zmestia": "caben",
  "zmestí": "caben",
  "zátvorky": "paréntesis",
  "zľava doprava": "de izquierda a derecha",
  "{@0} Preto nie, zvyšok po delení je {@1}.": "{@0} Por eso no: el resto de la división es {@1}.",
  "{@0} Preto áno: ${@1} : {@2} = {@3}$.": "{@0} Por eso sí: ${@1} : {@2} = {@3}$.",
  "{@0} ešte raz {@1}: ${@2} {@3} {@4}$.": "{@0} una vez más {@1}: ${@2} {@3} {@4}$.",
  "{@0} je $100 {@1} 1$. Vynásob stovkou a potom {@2} číslo ešte raz.": "{@0} es $100 {@1} 1$. Multiplica por cien y después {@2} el número una vez más.",
  "{@0} má {@1} {@2} a je {@3} {@4} ako {@5}. Koľko rokov bude {@6} o {@7} {@8}?": "{@0} tiene {@1} {@2} y es {@3} {@4} que {@5}. ¿Cuántos años tendrá {@6} dentro de {@7} {@8}?",
  "{@0} neznamená {@1} {@2}. {@3} z {@4} vypočítaš delením: ${@5} : {@6}$.": "{@0} no significa {@1} {@2}. {@3} de {@4} se calcula dividiendo: ${@5} : {@6}$.",
  "{@0} z {@1}: ${@2} : {@3} = {@4}$. {@5} spolu ${@6} + {@7} = {@8}$. Zostalo ${@9} - {@10} = {@11}$ {@12}.": "{@0} de {@1}: ${@2} : {@3} = {@4}$. {@5} en total ${@6} + {@7} = {@8}$. Le quedaron ${@9} - {@10} = {@11}$ {@12}.",
  "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}": "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}",
  "{@0} {@1} {@2} {@3}. {@4} {@5} na hru a {@6} {@7} na knihu. Koľko eur {@8} zostalo?": "{@0} {@1} {@2} {@3}. {@4} lo {@5} en un juego y {@6} {@7} en un libro. ¿Cuántos euros {@8} quedaron?",
  "{@0} {@1} {@2}. Ostatné údaje sú príliš veľké alebo príliš malé.": "{@0} {@1} {@2}. Los demás datos son demasiado grandes o demasiado pequeños.",
  "Úsečka AB začína v bode A a končí v bode B.": "El segmento AB empieza en el punto A y termina en el punto B.",
  "Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.": "El segmento termina en sus dos extremos y no continúa más allá.",
  "Úsečka má dva krajné body.": "El segmento tiene dos extremos.",
  "Úsečka má konečnú dĺžku.": "El segmento tiene una longitud finita.",
  "Úsečkový model súčtu a rozdielu": "Modelo de barras de la suma y la diferencia",
  "Úsečku môžeme odmerať pravítkom.": "Un segmento se puede medir con una regla.",
  "áno": "sí",
  "úsečka AB": "segmento AB",
  "Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.": "Has restado las horas como números normales. Pero una hora tiene 60 minutos, no 100: completa primero hasta la hora en punto.",
  "Červené sú {@0} jablká": "Son rojas {@0} manzanas",
  "Červených je {@0} jabĺk": "Son rojas {@0} manzanas",
  "Čiara má dva krajné body A a B – je to úsečka.": "La línea tiene dos extremos, A y B: es un segmento.",
  "Čiara nemá začiatok ani koniec – je to priamka.": "La línea no tiene principio ni fin: es una recta.",
  "Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.": "La línea empieza en el punto A y continúa hacia el otro lado: es una semirrecta.",
  "Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: ${@0} {@1} {@2}$.": "Los numeradores son iguales. Cuantas más partes hacemos del todo, más pequeñas son: ${@0} {@1} {@2}$.",
  "Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.": "¿Qué hay en el dibujo? La línea discontinua significa que la línea continúa sin fin.",
  "Čísla nestačí napísať vedľa seba. Najprv premeň {@0} {@1} na {@2}, potom pripočítaj {@3}.": "No basta con escribir los números uno al lado del otro. Primero convierte {@0} {@1} a {@2} y después suma {@3}.",
  "Čísla si napísal vedľa seba, akoby platilo 1 {@0} = 100 {@1}. Platí však 1 {@2} = 60 {@3}.": "Has escrito los números uno al lado del otro, como si 1 {@0} = 100 {@1}. Pero 1 {@2} = 60 {@3}.",
  "Číslica hneď vpravo od rádu {@0} je {@1}, preto zaokrúhľujeme {@2}: ${@3} \\doteq {@4}$.": "La cifra justo a la derecha del orden de las {@0} es {@1}, así que redondeamos {@2}: ${@3} \\doteq {@4}$.",
  "Číslica vpravo je {@0}. Zaokrúhli ${@1}$ na {@2}.": "La cifra de la derecha es {@0}. Redondea ${@1}$ a las {@2}.",
  "Číslica vpravo od rádu {@0} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.": "La cifra a la derecha del orden de las {@0} es 5 o más: en ese caso se redondea hacia arriba.",
  "Číslica vpravo od rádu {@0} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.": "La cifra a la derecha del orden de las {@0} es menor que 5: en ese caso se redondea hacia abajo.",
  "Číslica {@0} stojí na mieste {@1}, preto má hodnotu ${@2}\\cdot {@3} = {@4}$.": "La cifra {@0} está en el lugar de las {@1}, por eso vale ${@2}\\cdot {@3} = {@4}$.",
  "Číslice zoradíme od najmenšej, ale 0 nemôže byť na začiatku, preto ide na druhé miesto: ${@0}$.": "Ordenamos las cifras de menor a mayor, pero el 0 no puede ir al principio, así que va en segundo lugar: ${@0}$.",
  "Číslice zoradíme od najmenšej: ${@0}$.": "Ordenamos las cifras de menor a mayor: ${@0}$.",
  "Číslice zoradíme od najväčšej po najmenšiu: ${@0}$.": "Ordenamos las cifras de mayor a menor: ${@0}$.",
  "Číslo": "Número",
  "Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.": "Un número no puede empezar por cero: no tendría cuatro cifras. En primer lugar pon la cifra más pequeña que no sea 0.",
  "Číslo {@0} je $100 {@1} 1$, preto {@2} jedenkrát celé číslo {@3}, nie iba jednotku.": "El número {@0} es $100 {@1} 1$, así que {@2} una vez el número entero {@3}, no solo una unidad.",
  "čiara": "línea",
  "Šestina": "Un sexto",
  "Štvorec má 4 rovnaké strany.": "El cuadrado tiene 4 lados iguales.",
  "Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.": "El cuadrado tiene cuatro lados iguales, así que divide el perímetro entre cuatro, no entre dos.",
  "Štvrtina": "Un cuarto",
  "Štvrtinu": "Un cuarto",
  "šestina": "un sexto",
  "šestinu": "un sexto",
  "šestiny": "un sexto",
  "štvrtina": "un cuarto",
  "štvrtinu": "un cuarto",
  "štvrtiny": "un cuarto"
 }
});
