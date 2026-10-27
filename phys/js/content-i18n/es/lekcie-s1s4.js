/* Español: lecciones de los cursos 1–4 de secundaria (js/rocniky/s1.js, s2.js, s3.js, s4.js). Estructura y claves: js/content-i18n.js. */
CONTENT_I18N.add('es', {
  lessons: {
    's1-veliciny': {
      title: 'Magnitudes físicas, unidades y medición',
      summary: 'Número y unidad, el Sistema Internacional, prefijos y conversiones de unidades.',
      theory: [
        `<p>Una magnitud física es una propiedad de un cuerpo o de un fenómeno que podemos <strong>medir</strong> y expresar como un número con una unidad. Por ejemplo, la longitud $s = 12\\,\\text{m}$: el número $12$ nos dice cuántas veces hemos usado la unidad, y $\\text{m}$ nos dice qué unidad hemos usado. Un valor sin unidad no tiene sentido.</p>`,
        `<p>El Sistema Internacional de unidades (SI) tiene siete unidades básicas. Para este curso bastan estas: metro $\\text{m}$ (longitud), kilogramo $\\text{kg}$ (masa), segundo $\\text{s}$ (tiempo) y kelvin $\\text{K}$ (temperatura). Las unidades derivadas se forman combinando las básicas: la velocidad tiene la unidad $\\text{m/s}$ y la fuerza $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$.</p>`,
        `<p><strong>Los prefijos</strong> acortan la escritura de números muy grandes y muy pequeños. Por ejemplo, $1\\,\\text{km}=10^3\\,\\text{m}$, $1\\,\\text{cm}=10^{-2}\\,\\text{m}$ y $1\\,\\text{g}=10^{-3}\\,\\text{kg}$. Al convertir basta saber cuántas veces es mayor o menor la nueva unidad, y según eso multiplicar o dividir.</p>`,
        `<p>Toda medición tiene un <strong>error</strong>, por eso escribimos el resultado con un número adecuado de cifras significativas y siempre indicamos la unidad. La notación $s = 12{,}0\\,\\text{m}$ dice más que $s = 12\\,\\text{m}$, porque indica una precisión de una décima de metro.</p>`
      ],
      examples: [
        { task: 'Convierte $3{,}5\\,\\text{km}$ a metros.',
          steps: ['El prefijo k significa mil, es decir, $1\\,\\text{km}=10^3\\,\\text{m}$.', '$3{,}5\\cdot 10^3\\,\\text{m}=3500\\,\\text{m}$.', '<strong>Resultado: 3500 m</strong>'] },
        { task: '¿Cuántos segundos hay en $2\\,\\text{h}$?',
          steps: ['Una hora tiene $60\\,\\text{min}$ y un minuto tiene $60\\,\\text{s}$.', 'Una hora tiene, por tanto, $60\\cdot 60=3600\\,\\text{s}$.', '$2\\,\\text{h}=2\\cdot 3600\\,\\text{s}=7200\\,\\text{s}$.', '<strong>Resultado: 7200 s</strong>'] }
      ]
    },
    's1-pohyb': {
      title: 'Movimiento uniforme y no uniforme',
      summary: 'Distancia, tiempo y velocidad; velocidad media cuando el movimiento cambia.',
      theory: [
        `<p>Describimos el movimiento de un cuerpo respecto a algún <strong>cuerpo de referencia</strong>. La distancia $s$ es la longitud de la trayectoria recorrida por el cuerpo, y el tiempo $t$ es la duración del movimiento. La <strong>velocidad media</strong> es el cociente entre la distancia y el tiempo: $\\bar v=\\frac{s}{t}$, unidad $\\text{m/s}$ o $\\text{km/h}$.</p>`,
        `<p><strong>El movimiento uniforme</strong> es el movimiento con velocidad constante. En tiempos iguales el cuerpo recorre distancias iguales, por eso se cumple $s=v\\,t$. En el gráfico de la distancia en función del tiempo es una recta.</p>`,
        `<p><strong>El movimiento no uniforme</strong> significa que la velocidad cambia. La velocidad media de todo el recorrido no es la media aritmética de las velocidades, sino la distancia total dividida por el tiempo total: $\\bar v=\\frac{s_1+s_2}{t_1+t_2}$.</p>`,
        `<p><strong>¿Por qué es así?</strong> Si conducimos 2 horas a $60\\,\\text{km/h}$ y después 1 hora a $30\\,\\text{km/h}$, recorremos $120+30=150\\,\\text{km}$ en $3$ horas. La media de las velocidades daría $45\\,\\text{km/h}$, pero la velocidad media real es $50\\,\\text{km/h}$, porque durante más tiempo íbamos más rápido.</p>`,
        { fig: "s1s4-priemerna-rychlost", caption: "El área bajo el gráfico v–t es la distancia. La velocidad media es la distancia total dividida por el tiempo total, no la media de las velocidades." }
      ],
      examples: [
        { task: 'Un coche recorre $120\\,\\text{km}$ en $2\\,\\text{h}$. ¿Cuál es su velocidad media?',
          steps: ['$\\bar v=\\frac{s}{t}=\\frac{120\\,\\text{km}}{2\\,\\text{h}}$.', '<strong>Resultado: 60 km/h</strong>'] },
        { task: 'Un ciclista va durante $2\\,\\text{h}$ a $20\\,\\text{km/h}$ y después durante $2\\,\\text{h}$ a $10\\,\\text{km/h}$. ¿Cuál es la velocidad media?',
          steps: ['Primer tramo: $s_1=20\\cdot 2=40\\,\\text{km}$, segundo: $s_2=10\\cdot 2=20\\,\\text{km}$.', 'En total $60\\,\\text{km}$ en $4\\,\\text{h}$.', '<strong>Resultado: 15 km/h</strong>'] }
      ]
    },
    's1-zrychlenie': {
      title: 'Velocidad y aceleración',
      summary: 'Cambio de la velocidad con el tiempo y movimiento uniformemente acelerado.',
      theory: [
        `<p><strong>La aceleración</strong> es el cambio de velocidad por unidad de tiempo: $a=\\frac{\\Delta v}{\\Delta t}=\\frac{v-v_0}{t}$. Su unidad es $\\text{m/s}^2$. Si la velocidad aumenta $2\\,\\text{m/s}$ cada segundo, la aceleración es $2\\,\\text{m/s}^2$.</p>`,
        `<p>La aceleración no es solo acelerar. Una $a$ positiva significa que la velocidad aumenta, una $a$ negativa significa frenar. También hay aceleración cuando cambia la dirección del movimiento aunque la magnitud de la velocidad se mantenga, por ejemplo al moverse por una circunferencia.</p>`,
        `<p>En el <strong>movimiento uniformemente acelerado</strong> la velocidad crece en proporción al tiempo: $v=v_0+a\\,t$. La velocidad media es $\\frac{v_0+v}{2}$, por eso la distancia es $s=v_0\\,t+\\frac{1}{2}a\\,t^2$. El término con $\\frac{1}{2}$ es importante, porque la velocidad cambia constantemente durante el recorrido.</p>`,
        `<p>En la caída libre cerca de la superficie de la Tierra la aceleración apunta hacia abajo y tiene un valor aproximado de $g\\approx 9{,}81\\,\\text{m/s}^2$. Un cuerpo que cae desde el reposo aumenta su velocidad aproximadamente en $9{,}81\\,\\text{m/s}$ cada segundo.</p>`,
        { fig: "s1s4-v-t-zrychlenie", caption: "La pendiente del gráfico v–t es la aceleración, y el área bajo el gráfico es la distancia. En el movimiento uniformemente acelerado el gráfico es una recta." }
      ],
      examples: [
        { task: 'Un coche acelera desde el reposo hasta $20\\,\\text{m/s}$ en $5\\,\\text{s}$. ¿Cuál es su aceleración?',
          steps: ['$a=\\frac{v-v_0}{t}=\\frac{20-0}{5}$.', '<strong>Resultado: 4 m/s²</strong>'] },
        { task: 'Un cuerpo tiene una velocidad de $2\\,\\text{m/s}$ y una aceleración de $3\\,\\text{m/s}^2$. ¿Cuál será su velocidad después de $4\\,\\text{s}$?',
          steps: ['$v=v_0+a\\,t=2+3\\cdot 4$.', '<strong>Resultado: 14 m/s</strong>'] }
      ]
    },
    's1-newton': {
      title: 'Leyes de Newton del movimiento',
      summary: 'Inercia, la relación F = m·a y el principio de acción y reacción.',
      theory: [
        `<p><strong>Primera ley de Newton (ley de la inercia):</strong> un cuerpo permanece en reposo o en movimiento rectilíneo uniforme mientras no actúe sobre él una fuerza, o si la resultante de todas las fuerzas es cero. Por eso, cuando un autobús frena de golpe, los pasajeros se inclinan hacia delante: su cuerpo quiere seguir moviéndose.</p>`,
        `<p><strong>Segunda ley de Newton:</strong> la fuerza resultante produce en el cuerpo una aceleración directamente proporcional a la fuerza e inversamente proporcional a la masa: $F=m\\,a$. La unidad de fuerza es el newton, $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$. Con la misma fuerza, un cuerpo más pesado acelera más lentamente.</p>`,
        `<p><strong>Tercera ley de Newton (acción y reacción):</strong> si el cuerpo A actúa sobre el cuerpo B con una fuerza, el cuerpo B actúa sobre A con una fuerza de igual magnitud y dirección opuesta. Estas fuerzas actúan sobre <em>cuerpos distintos</em>, por eso nunca se restan entre sí. El caballo tira del carro y el carro tira del caballo hacia atrás.</p>`,
        `<p><strong>La resultante</strong> de varias fuerzas sobre una misma recta: las fuerzas en el mismo sentido se suman, las fuerzas en sentidos opuestos se restan. La aceleración resultante tiene la dirección de la resultante.</p>`,
        { fig: "s1s4-akcia-reakcia", caption: "Las fuerzas de acción y reacción tienen igual magnitud y sentidos opuestos, pero actúan sobre cuerpos distintos, por eso no se restan." }
      ],
      examples: [
        { task: 'Un cuerpo de masa $4\\,\\text{kg}$ se mueve con una aceleración de $3\\,\\text{m/s}^2$. ¿Qué fuerza resultante actúa sobre él?',
          steps: ['$F=m\\,a=4\\cdot 3$.', '<strong>Resultado: 12 N</strong>'] },
        { task: 'Sobre un cuerpo actúan en sentidos opuestos dos fuerzas de $7\\,\\text{N}$ y $3\\,\\text{N}$. ¿Cuál es su resultante?',
          steps: ['Las fuerzas tienen sentidos opuestos, por eso se restan: $7-3=4$.', '<strong>Resultado: 4 N en el sentido de la fuerza mayor</strong>'] }
      ]
    },
    's1-gravitacia': {
      title: 'Fuerza gravitatoria y peso',
      summary: 'Masa y peso, aceleración de la gravedad en la Tierra y en la Luna.',
      theory: [
        `<p><strong>La fuerza gravitatoria</strong> es la fuerza atractiva entre todos los cuerpos. Cuanto más pesados son los cuerpos y más cerca están, mayor es la fuerza. En los cuerpos sobre la superficie de la Tierra la observamos como <strong>peso</strong>.</p>`,
        `<p><strong>El peso</strong> es la fuerza con la que la Tierra atrae a un cuerpo: $F_g=m\\,g$, donde $g\\approx 9{,}81\\,\\text{m/s}^2$ es la aceleración de la gravedad. La masa $m$ en kilogramos es una propiedad del cuerpo y no cambia. El peso en newtons depende del lugar: en la Luna, donde $g\\approx 1{,}62\\,\\text{m/s}^2$, es unas seis veces menor.</p>`,
        `<p><strong>¿Por qué todos los cuerpos caen igual de rápido?</strong> El peso es proporcional a la masa, y también lo es la inercia. La aceleración $a=\\frac{F_g}{m}=g$ por tanto no depende de la masa. En una caída sin resistencia del aire, una piedra y un grano de polen caen igual de rápido.</p>`,
        `<p>No confundas los conceptos: la <strong>masa</strong> se mide en kilogramos y es la cantidad de materia de un cuerpo, el <strong>peso</strong> es una fuerza y se mide en newtons.</p>`,
        { fig: "s1s4-tiaz-zem-mesiac", caption: "La misma masa tiene un peso unas seis veces menor en la Luna, porque allí la aceleración de la gravedad es menor." }
      ],
      examples: [
        { task: '¿Cuál es el peso de un cuerpo de masa $5\\,\\text{kg}$ en la Tierra?',
          steps: ['$F_g=m\\,g=5\\cdot 9{,}81$.', '<strong>Resultado: aproximadamente 49,1 N</strong>'] },
        { task: '¿Cuál es el peso del mismo cuerpo en la Luna, donde $g\\approx 1{,}62\\,\\text{m/s}^2$? ¿Cuál es su masa?',
          steps: ['$F_g=5\\cdot 1{,}62=8{,}1\\,\\text{N}$.', 'La masa no cambia, sigue siendo $5\\,\\text{kg}$.', '<strong>Resultado: 8,1 N, masa 5 kg</strong>'] }
      ]
    },
    's1-praca-energia': {
      title: 'Trabajo, potencia y energía',
      summary: 'Trabajo mecánico, potencia y energía cinética de un cuerpo.',
      theory: [
        `<p><strong>El trabajo mecánico</strong> es la energía transferida por una fuerza al desplazar un cuerpo. Si la fuerza tiene la dirección del movimiento, se calcula como $W=F\\,s$. La unidad es el julio, $1\\,\\text{J}=1\\,\\text{N}\\cdot\\text{m}$. El mismo trabajo se puede hacer con una fuerza grande en una distancia corta o con una fuerza pequeña en una distancia larga.</p>`,
        `<p><strong>La potencia</strong> indica con qué rapidez se realiza el trabajo: $P=\\frac{W}{t}$. La unidad es el vatio, $1\\,\\text{W}=1\\,\\text{J/s}$. Dos motores pueden realizar el mismo trabajo, pero el de mayor potencia lo hace en menos tiempo.</p>`,
        `<p><strong>La energía cinética</strong> es la energía del movimiento: $E_k=\\frac{1}{2}m\\,v^2$. Depende del cuadrado de la velocidad, por eso el doble de velocidad significa cuatro veces más energía. Por eso la distancia de frenado de un coche es mucho mayor a mayor velocidad.</p>`,
        `<p>El trabajo y la energía están relacionados: el trabajo realizado sobre un cuerpo se convierte en un cambio de su energía. Si $W$ es positivo, la energía del cuerpo aumenta.</p>`,
        { fig: "obr-energia", caption: "Al deslizarse sin rozamiento, la energía potencial se convierte en energía cinética y vuelve a convertirse." }
      ],
      examples: [
        { task: 'Una fuerza de $50\\,\\text{N}$ desplaza un carrito $4\\,\\text{m}$ en la dirección de la fuerza. ¿Qué trabajo realiza?',
          steps: ['$W=F\\,s=50\\cdot 4$.', '<strong>Resultado: 200 J</strong>'] },
        { task: 'Un cuerpo de masa $2\\,\\text{kg}$ se mueve con una velocidad de $3\\,\\text{m/s}$. ¿Cuál es su energía cinética?',
          steps: ['$E_k=\\frac{1}{2}\\cdot 2\\cdot 3^2=9$.', '<strong>Resultado: 9 J</strong>'] }
      ]
    },
    's1-zakony-zachovania': {
      title: 'Leyes de conservación de la energía y de la cantidad de movimiento',
      summary: 'Cantidad de movimiento de un cuerpo y la transformación de la energía potencial en cinética.',
      theory: [
        `<p>La <strong>cantidad de movimiento</strong> de un cuerpo es el producto de su masa y su velocidad: $p=m\\,v$, unidad $\\text{kg\\,m/s}$. La cantidad de movimiento es un vector, por eso tiene la dirección de la velocidad. Un cuerpo más pesado con la misma velocidad tiene mayor cantidad de movimiento, y por eso es más difícil de detener.</p>`,
        `<p><strong>Ley de conservación de la cantidad de movimiento:</strong> si sobre un sistema no actúan fuerzas externas, la suma de las cantidades de movimiento de los cuerpos del sistema no cambia. Dos patinadores que se empujan mutuamente se mueven en sentidos opuestos. El patinador más ligero obtiene mayor velocidad, porque la suma de sus cantidades de movimiento debe seguir siendo cero.</p>`,
        `<p><strong>Ley de conservación de la energía mecánica:</strong> si no actúan rozamiento ni resistencia del medio, la suma de la energía cinética y de la energía potencial $E_k+E_p$ no cambia. En la caída libre la energía potencial $E_p=m\\,g\\,h$ se convierte en energía cinética $\\frac{1}{2}m\\,v^2$. De ahí $v=\\sqrt{2gh}$: la velocidad no depende de la masa.</p>`,
        `<p>En la realidad, el rozamiento y la resistencia del aire convierten parte de la energía mecánica en calor. La energía mecánica entonces disminuye, pero la energía total del sistema se conserva.</p>`,
        { fig: "s1s4-hybnost", caption: "La suma de las cantidades de movimiento del sistema sigue siendo cero: el cuerpo más ligero se mueve más rápido y el más pesado más despacio." }
      ],
      examples: [
        { task: 'Una bala de masa $0{,}01\\,\\text{kg}$ vuela con una velocidad de $500\\,\\text{m/s}$. ¿Cuál es su cantidad de movimiento?',
          steps: ['$p=m\\,v=0{,}01\\cdot 500$.', '<strong>Resultado: 5 kg·m/s</strong>'] },
        { task: 'Un cuerpo cae desde el reposo desde una altura de $5\\,\\text{m}$ sin resistencia del aire. ¿Con qué velocidad llega al suelo? Usa $g=10\\,\\text{m/s}^2$.',
          steps: ['$m\\,g\\,h=\\frac{1}{2}m\\,v^2$, luego $v^2=2gh=2\\cdot 10\\cdot 5=100$.', '<strong>Resultado: v = 10 m/s</strong>'] }
      ]
    },
    's1-tlak': {
      title: 'Presión, propiedades de los líquidos y de los gases',
      summary: 'Presión de los sólidos, presión hidrostática y principio de Pascal.',
      theory: [
        `<p><strong>La presión</strong> es el cociente entre la fuerza perpendicular a una superficie y el área de esa superficie: $p=\\frac{F}{S}$. La unidad es el pascal, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Presionamos con más fuerza con una punta afilada, porque la misma fuerza actúa sobre una superficie menor.</p>`,
        `<p><strong>La presión hidrostática</strong> en un líquido aumenta con la profundidad: $p=\\rho\\,g\\,h$, donde $\\rho$ es la densidad del líquido (agua $1000\\,\\text{kg/m}^3$) y $h$ es la profundidad bajo la superficie. Esta presión no depende de la forma del recipiente, solo de la profundidad y de la densidad.</p>`,
        `<p><strong>Principio de Pascal:</strong> la presión ejercida sobre un líquido encerrado se transmite sin cambios a todos los puntos del líquido. Por eso una prensa hidráulica puede levantar un coche: una fuerza pequeña sobre un pistón pequeño crea una presión que actúa sobre un pistón grande con una fuerza mayor.</p>`,
        `<p><strong>Los gases</strong> ejercen presión mediante los choques de las moléculas contra las paredes del recipiente. La presión atmosférica al nivel del mar es aproximadamente $101\\,325\\,\\text{Pa}\\approx 100\\,\\text{kPa}$ y disminuye al aumentar la altitud.</p>`,
        { fig: "obr-tlak", caption: "La presión en un líquido aumenta con la profundidad: cuanto más profundo está el cuerpo, mayor es la fuerza que actúa sobre la pared." }
      ],
      examples: [
        { task: 'Un bloque con un peso de $600\\,\\text{N}$ está apoyado sobre un suelo con un área de $0{,}5\\,\\text{m}^2$. ¿Qué presión ejerce?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$.', '<strong>Resultado: 1200 Pa</strong>'] },
        { task: '¿Cuál es la presión hidrostática del agua a una profundidad de $3\\,\\text{m}$? Usa $\\rho=1000\\,\\text{kg/m}^3$ y $g=10\\,\\text{m/s}^2$.',
          steps: ['$p=\\rho\\,g\\,h=1000\\cdot 10\\cdot 3=30000\\,\\text{Pa}$.', '<strong>Resultado: 30 kPa</strong>'] }
      ]
    },
    's2-molekuly': {
      title: 'Estructura molecular de la materia',
      summary: 'Partículas de la materia, cantidad de sustancia y masa molar.',
      theory: [
        `<p>Cada sustancia está formada por partículas muy pequeñas: átomos o moléculas. Están en un movimiento desordenado constante y ejercen entre sí fuerzas atractivas y repulsivas. De estas fuerzas depende si la sustancia es sólida, líquida o gaseosa.</p>`,
        `<p>Una prueba del movimiento de las moléculas es el <strong>movimiento browniano</strong>: las partículas diminutas suspendidas en un líquido tiemblan de forma irregular, porque las moléculas del líquido las golpean desde todos los lados. No vemos el movimiento de las propias moléculas, pero sí sus consecuencias.</p>`,
        `<p>La cantidad de sustancia se expresa en moles. Un mol contiene $N_A\\approx 6{,}02\\cdot 10^{23}$ partículas (la constante de Avogadro). La <strong>masa molar</strong> $M$ es la masa de un mol, en gramos por mol. Por ejemplo, el agua tiene $M=18\\,\\text{g/mol}$, que es la masa de $6{,}02\\cdot 10^{23}$ moléculas de agua.</p>`,
        `<p>Relaciones: cantidad de sustancia $n=\\frac{m}{M}$ y número de partículas $N=n\\,N_A$. Por eso incluso una cantidad muy pequeña de sustancia contiene un número enorme de partículas.</p>`,
        { fig: "s1s4-brownov-pohyb", caption: "Movimiento browniano: la partícula tiembla de forma irregular, porque las moléculas del líquido la golpean desde todos los lados." }
      ],
      examples: [
        { task: '¿Cuántos moles hay en $36\\,\\text{g}$ de agua, si $M=18\\,\\text{g/mol}$?',
          steps: ['$n=\\frac{m}{M}=\\frac{36}{18}$.', '<strong>Resultado: 2 mol</strong>'] },
        { task: '¿Cuántas moléculas hay en $2\\,\\text{mol}$ de agua?',
          steps: ['$N=n\\,N_A=2\\cdot 6{,}02\\cdot 10^{23}$.', '<strong>Resultado: aproximadamente $1{,}2\\cdot 10^{24}$ moléculas</strong>'] }
      ]
    },
    's2-teplo': {
      title: 'Temperatura, calor y energía interna',
      summary: 'Temperatura, kelvin, energía interna y calor necesario para calentar.',
      theory: [
        `<p><strong>La temperatura</strong> es una medida de la energía cinética media del movimiento desordenado de las partículas. Un cuerpo más caliente tiene partículas que, en promedio, se mueven más rápido. La escala Celsius tiene el cero en el punto de fusión del hielo, mientras que la escala absoluta en kelvin tiene el cero en el cero absoluto. Se cumple $T=t+273{,}15$, y el tamaño de un grado es el mismo.</p>`,
        `<p>La <strong>energía interna</strong> $U$ de un cuerpo es la suma de las energías cinéticas y potenciales de todas sus partículas. Cambia de dos maneras: por trabajo (por ejemplo, por rozamiento) o por transferencia de calor.</p>`,
        `<p><strong>El calor</strong> es la energía que pasa de un cuerpo más caliente a uno más frío. El calor no es una sustancia y los cuerpos no lo «contienen». El calor necesario para calentar un cuerpo es $Q=m\\,c\\,\\Delta T$, donde $c$ es el calor específico. El agua tiene $c=4200\\,\\text{J/(kg\\,K)}$, el aluminio $900\\,\\text{J/(kg\\,K)}$. Por eso el agua se calienta despacio y conserva el calor durante mucho tiempo.</p>`,
        `<p>El cambio de temperatura en kelvin y en grados Celsius se calcula igual, porque $\\Delta T=\\Delta t$. La conversión a temperatura absoluta solo hace falta para un valor concreto de temperatura.</p>`,
        { fig: "s1s4-merna-kapacita", caption: "Para la misma masa y el mismo cambio de temperatura, el agua necesita casi cinco veces más calor que el aluminio." }
      ],
      examples: [
        { task: '¿Cuánto calor se necesita para calentar $2\\,\\text{kg}$ de agua en $10\\,\\text{K}$? Usa $c=4200\\,\\text{J/(kg\\,K)}$.',
          steps: ['$Q=m\\,c\\,\\Delta T=2\\cdot 4200\\cdot 10$.', '<strong>Resultado: 84 000 J = 84 kJ</strong>'] },
        { task: '¿Cuál es la temperatura $25\\,{}^\\circ\\text{C}$ en kelvin?',
          steps: ['$T=t+273{,}15=25+273{,}15$.', '<strong>Resultado: 298,15 K</strong>'] }
      ]
    },
    's2-skupenstva': {
      title: 'Cambios de estado',
      summary: 'Fusión, solidificación, evaporación y condensación, y calor latente.',
      theory: [
        `<p>Una sustancia puede ser sólida, líquida o gaseosa. El paso entre estados requiere energía o la libera. Durante la fusión y la evaporación la <strong>temperatura no cambia</strong>: el calor suministrado se usa para debilitar los enlaces entre las moléculas, no para aumentar su velocidad.</p>`,
        `<p><strong>El calor latente</strong> es el calor necesario para cambiar un kilogramo de una sustancia sin cambiar su temperatura. Para la fusión es el calor latente específico de fusión $L_t$, para la evaporación $L_v$. Para el hielo $L_t\\approx 334\\,\\text{kJ/kg}$, para el agua $L_v\\approx 2260\\,\\text{kJ/kg}$. El calor necesario para cambiar un cuerpo de masa $m$ es $Q=m\\,L$.</p>`,
        `<p>Durante la <strong>solidificación</strong> y la <strong>condensación</strong> se liberan las mismas cantidades de calor. Por eso el vapor a $100\\,{}^\\circ\\text{C}$ es más peligroso que el agua a la misma temperatura: al condensarse sobre la piel entrega una enorme cantidad de calor.</p>`,
        `<p>La evaporación también produce enfriamiento: de la superficie escapan las moléculas más rápidas, por eso el líquido que queda se enfría. Por eso, tras salir del baño, nos sentimos más fríos.</p>`,
        { fig: "s1s4-ohrev-latky", caption: "Durante la fusión y la evaporación la temperatura se mantiene constante: el calor suministrado se usa para cambiar el estado, no para calentar la sustancia." }
      ],
      examples: [
        { task: '¿Cuánto calor se necesita para fundir $2\\,\\text{kg}$ de hielo a $0\\,{}^\\circ\\text{C}$? Usa $L_t=334\\,\\text{kJ/kg}$.',
          steps: ['$Q=m\\,L_t=2\\cdot 334$.', '<strong>Resultado: 668 kJ</strong>'] },
        { task: '¿Cuánto calor se libera cuando $0{,}5\\,\\text{kg}$ de vapor se condensan en agua a $100\\,{}^\\circ\\text{C}$? Usa $L_v=2260\\,\\text{kJ/kg}$.',
          steps: ['$Q=m\\,L_v=0{,}5\\cdot 2260$.', '<strong>Resultado: 1130 kJ</strong>'] }
      ]
    },
    's2-ideal': {
      title: 'Gas ideal y ecuación de estado',
      summary: 'Modelo del gas ideal, ecuación de estado y proceso isotérmico.',
      theory: [
        `<p>Un <strong>gas ideal</strong> es un modelo: las moléculas son pequeños puntos, entre ellas no actúan fuerzas y chocan contra las paredes del recipiente y entre sí de forma elástica. Los gases reales a baja presión y alta temperatura se comportan casi idealmente.</p>`,
        `<p>La <strong>ecuación de estado</strong> del gas ideal es $p\\,V=n\\,R\\,T$, donde $R\\approx 8{,}31\\,\\text{J/(mol\\,K)}$ es la constante molar de los gases, y la temperatura $T$ se introduce en kelvin. Si aumentamos la temperatura en un recipiente cerrado, las moléculas chocan con más fuerza y más a menudo, y la presión sube.</p>`,
        `<p>Un <strong>proceso isotérmico</strong> ocurre a temperatura constante. Entonces $p\\,V=\\text{const.}$, es decir $p_1V_1=p_2V_2$: cuando la presión se duplica, el volumen se reduce a la mitad. De manera similar, a presión constante el volumen es proporcional a la temperatura, y a volumen constante la presión es proporcional a la temperatura.</p>`,
        `<p>En cada cálculo debemos prestar atención a las unidades: presión en pascales, volumen en metros cúbicos y temperatura en kelvin.</p>`,
        { fig: "s1s4-izoterma", caption: "A temperatura constante el producto p·V es constante: cuando el volumen se reduce a la mitad, la presión se duplica." }
      ],
      examples: [
        { task: 'Un gas tiene un volumen de $4\\,\\text{l}$ y una presión de $200\\,\\text{kPa}$ a temperatura constante. ¿Cuál será su volumen a una presión de $400\\,\\text{kPa}$?',
          steps: ['$p_1V_1=p_2V_2$, luego $V_2=\\frac{p_1V_1}{p_2}=\\frac{200\\cdot 4}{400}$.', '<strong>Resultado: 2 l</strong>'] },
        { task: '¿Qué presión tiene $1\\,\\text{mol}$ de gas a $T=300\\,\\text{K}$ y volumen $V=0{,}025\\,\\text{m}^3$? Usa $R=8{,}31\\,\\text{J/(mol\\,K)}$.',
          steps: ['$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}31\\cdot 300}{0{,}025}$.', '<strong>Resultado: 99 720 Pa</strong>'] }
      ]
    },
    's2-termo': {
      title: 'Leyes termodinámicas y motores térmicos',
      summary: 'Primer principio de la termodinámica, segundo principio y rendimiento de un motor térmico.',
      theory: [
        `<p>El <strong>primer principio de la termodinámica</strong> es la ley de conservación de la energía para los procesos térmicos: $\\Delta U=Q-A$. El cambio de la energía interna $\\Delta U$ es igual al calor $Q$ suministrado al sistema menos el trabajo $A$ que el sistema realiza sobre el entorno. Si un gas se expande y realiza trabajo, su energía interna disminuye, a menos que le suministremos suficiente calor.</p>`,
        `<p>El <strong>segundo principio de la termodinámica</strong> dice que el calor pasa espontáneamente de un cuerpo más caliente a uno más frío, y nunca al revés. De ahí se deduce que ningún motor térmico puede convertir todo el calor en trabajo. Una parte del calor debe pasar al foco frío.</p>`,
        `<p>Un <strong>motor térmico</strong> toma del foco caliente el calor $Q_1$, convierte una parte en trabajo $A$ y el resto $Q_2$ lo entrega al foco frío. El <strong>rendimiento</strong> es $\\eta=\\frac{A}{Q_1}=1-\\frac{Q_2}{Q_1}$. Siempre es menor que 1, es decir, menor que el 100 %.</p>`,
        `<p>El máximo rendimiento posible lo tiene el ciclo de Carnot ideal: $\\eta_{\\max}=1-\\frac{T_2}{T_1}$, donde las temperaturas $T_1$ del foco caliente y $T_2$ del foco frío están en kelvin. Por eso los motores mejoran al aumentar la temperatura del foco caliente.</p>`,
        { fig: "s1s4-tepelny-motor", caption: "El motor toma del foco caliente el calor Q₁, convierte una parte en trabajo A y entrega el resto Q₂ al foco frío. El rendimiento A/Q₁ es menor que 1." }
      ],
      examples: [
        { task: 'Un gas recibe $300\\,\\text{J}$ de calor y realiza un trabajo de $120\\,\\text{J}$. ¿Cuál es el cambio de su energía interna?',
          steps: ['$\\Delta U=Q-A=300-120$.', '<strong>Resultado: 180 J (la energía interna aumentó)</strong>'] },
        { task: 'Un motor toma del foco caliente $1000\\,\\text{J}$ y realiza un trabajo de $250\\,\\text{J}$. ¿Cuál es su rendimiento?',
          steps: ['$\\eta=\\frac{A}{Q_1}=\\frac{250}{1000}=0{,}25$.', '<strong>Resultado: 25 %</strong>'] }
      ]
    },
    's2-kmitanie': {
      title: 'Oscilaciones mecánicas y resonancia',
      summary: 'Periodo, frecuencia, péndulo y resonancia.',
      theory: [
        `<p><strong>El movimiento oscilatorio</strong> es un movimiento alrededor de una posición de equilibrio que se repite periódicamente. Ejemplos son una masa en un resorte o un péndulo. El <strong>periodo</strong> $T$ es el tiempo de una oscilación, y la <strong>frecuencia</strong> $f$ es el número de oscilaciones por segundo: $f=\\frac{1}{T}=\\frac{n}{t}$. La unidad de frecuencia es el hercio, $1\\,\\text{Hz}=1\\,\\text{s}^{-1}$.</p>`,
        `<p><strong>La oscilación armónica</strong> tiene elongación $y=A\\sin(\\omega t)$, donde $A$ es la amplitud y $\\omega=2\\pi f$ la frecuencia angular. Un curso sinusoidal surge en un resorte donde la fuerza es directamente proporcional a la elongación.</p>`,
        `<p>El periodo depende de las propiedades del sistema oscilante. En un resorte, $T=2\\pi\\sqrt{\\frac{m}{k}}$: una masa más pesada oscila más lentamente y un resorte más rígido oscila más rápido. En un péndulo matemático, $T=2\\pi\\sqrt{\\frac{l}{g}}$, donde $l$ es la longitud del hilo (para pequeñas elongaciones).</p>`,
        `<p><strong>La resonancia</strong> ocurre cuando una fuerza periódica externa oscila con la frecuencia propia del cuerpo. Cada impulso se suma a la oscilación anterior y la amplitud crece. Por eso un columpio sube más alto cuando lo empujamos al ritmo de su balanceo.</p>`,
        { fig: "s1s4-kmitanie", caption: "Oscilación armónica: la amplitud A es la mayor elongación, y el periodo T es el tiempo de una oscilación." }
      ],
      examples: [
        { task: 'Una masa realiza $40$ oscilaciones en $20\\,\\text{s}$. ¿Cuál es su periodo y su frecuencia?',
          steps: ['$T=\\frac{t}{n}=\\frac{20}{40}=0{,}5\\,\\text{s}$.', '$f=\\frac{1}{T}=\\frac{1}{0{,}5}$.', '<strong>Resultado: T = 0,5 s, f = 2 Hz</strong>'] },
        { task: 'Un cuerpo oscila con una frecuencia de $5\\,\\text{Hz}$. ¿Cuál es su periodo?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{5}$.', '<strong>Resultado: 0,2 s</strong>'] }
      ]
    },
    's2-vlnenie': {
      title: 'Ondas mecánicas y sonido',
      summary: 'Longitud de onda, velocidad de propagación de la onda y el sonido como onda mecánica.',
      theory: [
        `<p><strong>Una onda</strong> es la propagación de oscilaciones a través de un medio. Se transmiten la energía y la forma de la onda, pero las partículas del medio solo oscilan alrededor de sus posiciones de equilibrio. Una onda mecánica necesita un medio material, por eso el sonido no se oye en el vacío.</p>`,
        `<p>La longitud de onda $\\lambda$ es la distancia entre dos puntos más cercanos con la misma fase, por ejemplo entre dos crestas. En un periodo $T$ la onda avanza $\\lambda$, por eso la velocidad de propagación es $v=\\frac{\\lambda}{T}=\\lambda\\,f$.</p>`,
        `<p><strong>El sonido</strong> es una onda mecánica longitudinal. El ser humano oye frecuencias aproximadamente desde $20\\,\\text{Hz}$ hasta $20\\,\\text{kHz}$. La altura de un tono depende de la frecuencia, y la intensidad, de la amplitud. En aire seco a $20\\,{}^\\circ\\text{C}$ el sonido se propaga a unos $340\\,\\text{m/s}$, y más rápido en el agua y en el acero.</p>`,
        `<p><strong>El eco</strong> surge cuando el sonido se refleja en un obstáculo. El sonido recorre la distancia de ida y vuelta, por eso la distancia al obstáculo es $s=\\frac{v\\,t}{2}$, donde $t$ es el tiempo entre la emisión del sonido y su regreso.</p>`,
        { fig: "obr-vlna", caption: "Onda transversal: la longitud de onda λ es la distancia entre dos puntos vecinos con la misma fase." }
      ],
      examples: [
        { task: 'Una onda con una frecuencia de $50\\,\\text{Hz}$ tiene una longitud de onda de $4\\,\\text{m}$. ¿Con qué velocidad se propaga?',
          steps: ['$v=\\lambda\\,f=4\\cdot 50$.', '<strong>Resultado: 200 m/s</strong>'] },
        { task: 'El eco llegó $2\\,\\text{s}$ después del disparo. ¿A qué distancia está el obstáculo? Usa $v=340\\,\\text{m/s}$.',
          steps: ['$2s=v\\,t=340\\cdot 2=680\\,\\text{m}$.', '<strong>Resultado: $s=340\\,\\text{m}$</strong>'] }
      ]
    },
    's3-naboj': {
      title: 'Carga eléctrica y campo eléctrico',
      summary: 'Las cargas se atraen y se repelen; el campo alrededor de una carga puntual y su intensidad.',
      theory: [
        `<p>La carga eléctrica $Q$ es una propiedad de los cuerpos. Se mide en culombios ($\\text{C}$). Las cargas iguales se <strong>repelen</strong>, las opuestas se <strong>atraen</strong>. La carga más pequeña en la naturaleza es la del electrón, $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$.</p>`,
        `<p>El <strong>campo eléctrico</strong> es el espacio alrededor de un cuerpo cargado que ejerce fuerza sobre otra carga. Su intensidad la describimos con $E = \\frac{F}{q}$: la fuerza con la que el campo actúa sobre una pequeña carga positiva $q$, dividida por esta carga. La unidad es $\\text{N/C}$, que es lo mismo que $\\text{V/m}$.</p>`,
        `<p>Para una carga puntual $Q$ a la distancia $r$, $E = k\\frac{Q}{r^2}$, donde $k \\approx 9\\cdot 10^{9}\\,\\text{N·m}^2/\\text{C}^2$. La intensidad disminuye con el <strong>cuadrado</strong> de la distancia: a doble distancia el campo es cuatro veces más débil. Por eso el campo se debilita rápidamente con la distancia.</p>`,
        `<ol><li>Anota la carga y la distancia y conviértelas a unidades SI (nC = $10^{-9}$ C, cm = $10^{-2}$ m).</li>
         <li>Sustituye en $E = k\\frac{Q}{r^2}$.</li><li>Escribe el resultado en $\\text{N/C}$.</li></ol>`,
        { fig: "s1s4-pole-naboja", caption: "La intensidad del campo de una carga puntual disminuye con el cuadrado de la distancia: a doble distancia es una cuarta parte." }
      ],
      examples: [
        { task: 'Una carga puntual $Q = 2\\,\\text{nC}$. ¿Cuál es la intensidad del campo a una distancia $r = 0{,}5\\,\\text{m}$?',
          steps: ['Convierte la carga: $Q = 2\\cdot 10^{-9}\\,\\text{C}$.',
            '$E = 9\\cdot 10^{9}\\cdot\\frac{2\\cdot 10^{-9}}{0{,}25}=72\\,\\text{N/C}$.',
            '<strong>Resultado: $E = 72\\,\\text{N/C}$.</strong>'] },
        { task: '¿Cómo cambia la intensidad del campo si duplicamos la distancia desde la carga?',
          steps: ['En la fórmula aparece $r^2$, así que con $2r$ el denominador es cuatro veces mayor.', '<strong>La intensidad disminuye a una cuarta parte.</strong>'] }
      ]
    },
    's3-prud-napatie': {
      title: 'Corriente eléctrica, tensión y resistencia',
      summary: 'La corriente es carga por tiempo, la tensión es trabajo por carga, la resistencia frena el movimiento de las cargas.',
      theory: [
        `<p><strong>La corriente eléctrica</strong> $I$ es la carga que atraviesa una sección de un conductor en la unidad de tiempo: $I = \\frac{Q}{t}$. La unidad es el amperio ($\\text{A}$). La corriente circula solo cuando las cargas pueden moverse y sobre ellas actúa una fuerza.</p>`,
        `<p><strong>La tensión eléctrica</strong> $U$ indica el trabajo $W$ que realiza el campo al mover la carga $Q$: $U = \\frac{W}{Q}$. La unidad es el voltio ($\\text{V}$). La tensión es lo que «empuja» las cargas por el circuito.</p>`,
        `<p><strong>La resistencia eléctrica</strong> $R$ es la capacidad de un conductor de frenar el movimiento de las cargas. La unidad es el ohmio ($\\Omega$). La resistencia depende del material, de la longitud y de la sección del conductor, y de la temperatura: un conductor más largo y más delgado tiene mayor resistencia.</p>`,
        `<p>Por qué la corriente está limitada: la tensión pone las cargas en movimiento, pero los choques con los átomos del conductor las frenan. El resultado es una corriente constante que depende tanto de la tensión como de la resistencia.</p>`,
        { fig: "s1s4-jednoduchy-obvod", caption: "La corriente circula desde el polo positivo de la fuente, a través de la resistencia, de vuelta al polo negativo. La tensión U está entre los bornes de la fuente." }
      ],
      examples: [
        { task: 'Por un conductor pasa una carga de 12 C en 4 s. ¿Cuál es la corriente?',
          steps: ['Sustituimos en $I = \\frac{Q}{t}$.', '$I = \\frac{12\\,\\text{C}}{4\\,\\text{s}} = 3\\,\\text{A}$.', '<strong>Resultado: la corriente es de 3 A.</strong>'] },
        { task: 'Al mover una carga de 5 C, el campo realiza un trabajo de 30 J. ¿Cuál es la tensión?',
          steps: ['$U = \\frac{W}{Q}$.', '$U = \\frac{30\\,\\text{J}}{5\\,\\text{C}} = 6\\,\\text{V}$.', '<strong>Resultado: la tensión es de 6 V.</strong>'] }
      ]
    },
    's3-ohm': {
      title: 'Ley de Ohm y circuitos eléctricos',
      summary: 'Corriente, tensión y resistencia; conexión en serie y en paralelo de resistencias.',
      theory: [
        `<p><strong>La ley de Ohm</strong> dice que la corriente en un conductor es directamente proporcional a la tensión e inversamente proporcional a la resistencia: $I = \\frac{U}{R}$, luego $U = R\\,I$ y $R = \\frac{U}{I}$. Se cumple para conductores metálicos a temperatura constante.</p>`,
        `<p><strong>Conexión en serie</strong>: los receptores están uno tras otro, por ellos pasa la misma corriente y las tensiones se suman: $U = U_1 + U_2$, y las resistencias $R = R_1 + R_2$. Si uno de los receptores deja de funcionar, se interrumpe todo el circuito.</p>`,
        `<p><strong>Conexión en paralelo</strong>: los receptores están uno al lado del otro, cada uno tiene la misma tensión y las corrientes se suman: $I = I_1 + I_2$ y $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. La resistencia total es menor que la de la rama más pequeña. Por eso los aparatos domésticos se conectan en paralelo: cada uno recibe la tensión completa, y si uno se apaga, los demás no se apagan.</p>`,
        `<p>Al resolver un circuito, primero determina qué partes están en serie y cuáles en paralelo; después sustituye la disposición por una única resistencia y aplica la ley de Ohm.</p>`,
        { fig: "obr-ohm", caption: "Con resistencia constante, el gráfico de la tensión en función de la corriente es una recta que pasa por el origen." }
      ],
      examples: [
        { task: 'Una resistencia de $6\\,\\Omega$ se conecta a una tensión de 12 V. ¿Qué corriente la atraviesa?',
          steps: ['$I = \\frac{U}{R} = \\frac{12\\,\\text{V}}{6\\,\\Omega}$.', '<strong>Resultado: I = 2 A.</strong>'] },
        { task: 'Dos resistencias de $4\\,\\Omega$ están conectadas en paralelo. ¿Cuál es la resistencia total?',
          steps: ['$\\frac{1}{R}=\\frac{1}{4}+\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$.', '<strong>Resultado: R = 2 Ω.</strong>'] }
      ]
    },
    's3-praca-vykon': {
      title: 'Trabajo y potencia eléctrica',
      summary: 'Potencia de un aparato, energía en julios y en kilovatios hora.',
      theory: [
        `<p><strong>La potencia eléctrica</strong> $P$ indica con qué rapidez un aparato transforma la energía eléctrica: $P = U\\,I = \\frac{W}{t}$. La unidad es el vatio ($\\text{W}$), donde $1\\,\\text{W} = 1\\,\\text{J/s}$.</p>`,
        `<p><strong>El trabajo eléctrico</strong> (energía) $W$ en el tiempo $t$ es $W = P\\,t = U\\,I\\,t$. La unidad es el julio ($\\text{J}$). En las facturas de electricidad se usa el kilovatio hora: $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<p>Por qué esto se cumple: la tensión indica la energía por culombio, y la corriente indica cuántos culombios pasan por segundo. Su producto es la energía por segundo, es decir, la potencia.</p>`,
        `<p>La placa de características de un aparato muestra su potencia (por ejemplo, 2000 W). La energía se obtiene multiplicando la potencia en kilovatios por el tiempo en horas.</p>`
      ],
      examples: [
        { task: 'Una bombilla está conectada a 230 V y por ella pasa una corriente de 0,5 A. ¿Cuál es su potencia?',
          steps: ['$P = U\\,I = 230\\,\\text{V}\\cdot 0{,}5\\,\\text{A}$.', '<strong>Resultado: P = 115 W.</strong>'] },
        { task: 'Un secador de pelo de potencia 1,5 kW funciona durante 2 horas. ¿Cuántos kWh de energía consume?',
          steps: ['$W = P\\,t = 1{,}5\\,\\text{kW}\\cdot 2\\,\\text{h}$.', '<strong>Resultado: 3 kWh.</strong>'] }
      ]
    },
    's3-magnetizmus': {
      title: 'Campo magnético e inducción electromagnética',
      summary: 'Campo magnético de un conductor y de una bobina, y tensión inducida por un flujo magnético variable.',
      theory: [
        `<p>Un <strong>campo magnético</strong> surge alrededor de los imanes y alrededor de un conductor por el que circula corriente. Su dirección se muestra con las líneas del campo, que salen del polo norte y entran en el polo sur. La inducción magnética $B$ se mide en teslas ($\\text{T}$).</p>`,
        `<p>Un conductor recto y largo por el que circula una corriente $I$ produce, a la distancia $r$, el campo $B = \\frac{\\mu_0 I}{2\\pi r}$. Dentro de una <strong>bobina</strong> con $N$ espiras en una longitud $l$ el campo es aproximadamente uniforme: $B = \\mu_0\\frac{N}{l}I$, donde $\\mu_0 \\approx 1{,}26\\cdot 10^{-6}\\,\\text{T·m/A}$.</p>`,
        `<p><strong>Inducción electromagnética:</strong> si cambia el flujo magnético a través de un circuito cerrado de conductor, en él se induce una tensión. Según la ley de Lenz, la corriente inducida circula en el sentido que se opone al cambio que la produjo. Por eso una bobina se resiste cuando le acercamos un imán.</p>`,
        `<p>Por qué esto se cumple: el campo magnético variable ejerce fuerza sobre las cargas libres del conductor, y estas empiezan a moverse. Si la corriente inducida favoreciera el cambio, la energía surgiría de la nada, lo que contradice la ley de conservación de la energía.</p>`,
        { fig: "obr-magnet-vodic", caption: "Alrededor de un conductor por el que circula corriente hay un campo magnético en forma de círculos concéntricos alrededor del conductor." }
      ],
      examples: [
        { task: 'Una bobina tiene 500 espiras en una longitud de 0,25 m y por ella circula una corriente de 2 A. ¿Cuál es la inducción en su interior?',
          steps: ['$\\frac{N}{l}=\\frac{500}{0{,}25}=2000\\,\\text{m}^{-1}$.',
            '$B = \\mu_0\\frac{N}{l}I \\approx 1{,}26\\cdot 10^{-6}\\cdot 2000\\cdot 2 \\approx 5{,}0\\cdot 10^{-3}\\,\\text{T}$.',
            '<strong>Resultado: B ≈ 5,0 mT.</strong>'] },
        { task: 'Un conductor recto lleva una corriente de 4 A. ¿Cuál es la inducción a una distancia de 0,2 m del conductor?',
          steps: ['$B = \\frac{\\mu_0 I}{2\\pi r}=\\frac{1{,}26\\cdot 10^{-6}\\cdot 4}{2\\pi\\cdot 0{,}2}$.', '<strong>Resultado: B ≈ 4,0·10⁻⁶ T.</strong>'] }
      ]
    },
    's3-transformator': {
      title: 'Motores eléctricos, generadores y transformadores',
      summary: 'El motor convierte la electricidad en movimiento, el generador hace lo contrario y el transformador cambia la tensión.',
      theory: [
        `<p>Un <strong>motor eléctrico</strong> convierte la energía eléctrica en energía mecánica. Sobre un conductor por el que circula corriente en un campo magnético actúa una fuerza. Si el conductor está enrollado en forma de bobina, la fuerza la hace girar y la bobina se convierte en el rotor del motor.</p>`,
        `<p>Un <strong>generador</strong> es lo contrario de un motor: cuando una bobina gira en un campo magnético, el flujo magnético cambia periódicamente y en la bobina se induce una tensión alterna.</p>`,
        `<p>Un <strong>transformador</strong> cambia la tensión de la corriente alterna. Para un transformador ideal se cumple $\\frac{U_1}{U_2}=\\frac{N_1}{N_2}$, donde $N_1$ y $N_2$ son los números de espiras del devanado primario y del secundario. Si el devanado secundario tiene más espiras, la tensión sube; si tiene menos, la tensión baja.</p>`,
        `<p>Por qué se eleva la tensión para el transporte: a la misma potencia $P = U\\,I$, una tensión mayor significa una corriente menor y, por tanto, menores pérdidas de calor en las líneas. Por eso la electricidad se transporta a alta tensión y se reduce en el lugar de consumo.</p>`,
        { fig: "s1s4-transformator", caption: "Transformador ideal: las tensiones cambian en la relación de los números de espiras, U₁/U₂ = N₁/N₂." }
      ],
      examples: [
        { task: 'Un transformador tiene 200 espiras en el primario y 1000 en el secundario. ¿Cuál es la tensión en el secundario si en el primario es de 230 V?',
          steps: ['$\\frac{U_2}{U_1}=\\frac{N_2}{N_1}=\\frac{1000}{200}=5$.', '$U_2 = 5\\cdot 230\\,\\text{V}=1150\\,\\text{V}$.', '<strong>Resultado: 1150 V (el transformador eleva la tensión).</strong>'] },
        { task: 'Un transformador reduce la tensión de 230 V a 23 V. ¿Cuántas espiras tiene el secundario si el primario tiene 1000?',
          steps: ['$\\frac{N_2}{N_1}=\\frac{U_2}{U_1}=\\frac{23}{230}=\\frac{1}{10}$.', '$N_2 = \\frac{1000}{10}=100$.', '<strong>Resultado: 100 espiras.</strong>'] }
      ]
    },
    's3-striedavy': {
      title: 'Corriente alterna',
      summary: 'Tensión sinusoidal, periodo, frecuencia y valor eficaz en la red.',
      theory: [
        `<p><strong>La corriente alterna</strong> cambia periódicamente tanto su sentido como su magnitud. La tensión varía sinusoidalmente con el tiempo: $u = U_{max}\\sin(\\omega t)$, donde $U_{max}$ es la amplitud y $\\omega = 2\\pi f$ la frecuencia angular.</p>`,
        `<p>La duración de un periodo es $T = \\frac{1}{f}$. En la red eléctrica pública la frecuencia es $f = 50\\,\\text{Hz}$, así que el periodo es $T = 0{,}02\\,\\text{s}$. La tensión se repite 50 veces por segundo.</p>`,
        `<p>El <strong>valor eficaz</strong> es el valor de la tensión continua que produciría el mismo efecto calorífico en un aparato. Para una tensión sinusoidal $U_{ef} = \\frac{U_{max}}{\\sqrt{2}}$, así que $U_{max} = U_{ef}\\sqrt{2}$. Una red con tensión eficaz de 230 V tiene una amplitud de unos $325\\,\\text{V}$.</p>`,
        `<p>Por qué usamos valores eficaces: los aparatos (una bombilla, un secador) responden a la potencia media, no a los picos. Por eso los valores eficaces aparecen en las etiquetas y los muestran los voltímetros.</p>`,
        { fig: "s1s4-striedavy-prud", caption: "Tensión sinusoidal: el valor eficaz es la amplitud dividida por √2. El periodo es T = 1/f; a 50 Hz es 0,02 s." }
      ],
      examples: [
        { task: 'La tensión eficaz de la red es de 230 V. ¿Cuál es la amplitud de la tensión?',
          steps: ['$U_{max}=U_{ef}\\sqrt{2}=230\\cdot 1{,}414\\approx 325\\,\\text{V}$.', '<strong>Resultado: aproximadamente 325 V.</strong>'] },
        { task: 'La red tiene una frecuencia de 50 Hz. ¿Cuál es su periodo?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{50}\\,\\text{s}$.', '<strong>Resultado: T = 0,02 s.</strong>'] }
      ]
    },
    's3-odraz-lom': {
      title: 'Reflexión y refracción de la luz',
      summary: 'Ley de la reflexión, índice de refracción y ley de Snell al pasar la luz entre medios.',
      theory: [
        `<p><strong>La reflexión de la luz</strong>: el ángulo de incidencia es igual al ángulo de reflexión. Ambos ángulos se miden desde la <em>normal</em> a la superficie, no desde la superficie misma. Si un rayo llega a un espejo formando 30° con la superficie, el ángulo de incidencia medido desde la normal es $60^\\circ$.</p>`,
        `<p><strong>La refracción de la luz</strong>: cuando la luz pasa a otro medio, cambia su velocidad y el rayo se desvía. El índice de refracción es $n = \\frac{c}{v}$, donde $c = 3\\cdot 10^{8}\\,\\text{m/s}$ es la velocidad de la luz en el vacío y $v$ la velocidad en la sustancia. Un índice mayor significa luz más lenta.</p>`,
        `<p><strong>Ley de Snell</strong>: $n_1\\sin\\alpha = n_2\\sin\\beta$, donde $\\alpha$ es el ángulo de incidencia y $\\beta$ el ángulo de refracción, ambos medidos desde la normal. Si $n_2 > n_1$, el rayo se acerca a la normal, es decir, $\\beta < \\alpha$.</p>`,
        `<p>Por qué se desvía el rayo: un lado del frente de onda se frena en el medio más lento antes que el otro lado, y eso cambia la dirección de propagación. Con incidencia perpendicular la dirección no cambia.</p>`,
        { fig: "obr-odraz", caption: "Al reflejarse en un espejo plano se cumple la ley de la reflexión." }
      ],
      examples: [
        { task: 'La luz pasa del aire al vidrio, cuyo índice de refracción es $n = 1{,}5$. ¿Cuál es la velocidad de la luz en el vidrio?',
          steps: ['$n=\\frac{c}{v}$, luego $v=\\frac{c}{n}$.', '$v=\\frac{3\\cdot 10^{8}}{1{,}5}=2\\cdot 10^{8}\\,\\text{m/s}$.', '<strong>Resultado: 2·10⁸ m/s.</strong>'] },
        { task: 'Un rayo llega perpendicularmente a la frontera. ¿Cuál es el ángulo de refracción?',
          steps: ['La incidencia perpendicular significa $\\alpha=0^\\circ$, luego $\\sin\\alpha=0$.', '$n_1\\cdot 0 = n_2\\sin\\beta$, luego $\\sin\\beta = 0$.', '<strong>Resultado: $\\beta = 0^\\circ$, el rayo no cambia de dirección.</strong>'] }
      ]
    },
    's3-sosovky': {
      title: 'Espejos, lentes y formación de imágenes',
      summary: 'Ecuación de las lentes delgadas, distancia de la imagen y aumento.',
      theory: [
        `<p>La <strong>distancia focal</strong> $f$ es la distancia del foco al centro de una lente (o al vértice de un espejo). Una lente convergente tiene distancia focal positiva: reúne los rayos en un foco.</p>`,
        `<p>La <strong>ecuación de las lentes delgadas</strong> es $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$, donde $a$ es la distancia del objeto y $b$ la distancia de la imagen. Si el objeto está más lejos que el doble de la distancia focal, la imagen es real, reducida e invertida.</p>`,
        `<p>El <strong>aumento</strong> indica cuántas veces es la imagen mayor o menor que el objeto: $|k| = \\frac{b}{a}$. Si $|k| < 1$, la imagen es reducida; si $|k| > 1$, es ampliada.</p>`,
        `<p>Un <strong>espejo plano</strong> crea una imagen virtual del mismo tamaño que el objeto y a la misma distancia detrás del espejo. La ecuación de formación de imágenes sirve también para espejos esféricos, solo con signos distintos en las distancias.</p>`,
        `<p>Por qué esto se cumple: los rayos de un punto del objeto convergen en un punto de la imagen detrás de la lente, y los triángulos semejantes que forman los rayos dan las relaciones anteriores.</p>`,
        { fig: "s1s4-sosovka-2f", caption: "Un objeto a doble distancia focal da una imagen real, invertida y del mismo tamaño al otro lado de la lente." }
      ],
      examples: [
        { task: 'El objeto está a 30 cm delante de una lente convergente con distancia focal de 10 cm. ¿A qué distancia está la imagen?',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{10}-\\frac{1}{30}=\\frac{2}{30}=\\frac{1}{15}$.', '$b = 15\\,\\text{cm}$.', '<strong>Resultado: la imagen se forma a 15 cm detrás de la lente.</strong>'] },
        { task: 'El objeto está a 30 cm delante de la lente y la imagen a 15 cm detrás. ¿Cuántas veces es la imagen más pequeña?',
          steps: ['$|k| = \\frac{b}{a} = \\frac{15}{30}$.', '<strong>Resultado: |k| = 0,5, la imagen es reducida a la mitad.</strong>'] }
      ]
    },
    's4-interferencia': {
      title: 'Propiedades ondulatorias de la luz: interferencia y difracción',
      summary: 'Superposición de ondas, franjas claras y oscuras en una doble rendija y curvatura de las ondas alrededor de un obstáculo.',
      theory: [
        `<p>La luz tiene propiedades ondulatorias. La luz visible tiene una longitud de onda $\\lambda$ de aproximadamente $380\\,\\text{nm}$ a $750\\,\\text{nm}$. Las ondas pueden <strong>superponerse</strong>, y a este fenómeno lo llamamos interferencia.</p>`,
        `<p><strong>Interferencia</strong> en una doble rendija: si las ondas se refuerzan mutuamente (la diferencia de caminos es un múltiplo entero de $\\lambda$), aparece una <strong>franja clara</strong>. Si se anulan (la diferencia de caminos es $\\left(k+\\frac{1}{2}\\right)\\lambda$), aparece una <strong>franja oscura</strong>.</p>`,
        `<p>Para las franjas claras en una pantalla a distancia $L$ de las rendijas separadas por $d$ se cumple aproximadamente $y_k = k\\,\\frac{\\lambda L}{d}$, donde $k = 0, 1, 2, \\dots$ es el orden de la franja. Con mayor longitud de onda o mayor distancia a la pantalla, las franjas están más separadas.</p>`,
        `<p><strong>La difracción</strong> es el encorvamiento de una onda alrededor de un obstáculo o al pasar por una rendija estrecha. Es más notable cuando el tamaño del obstáculo se acerca a la longitud de onda. Por eso el sonido se curva mejor alrededor de la esquina de una habitación que la luz.</p>`,
        { fig: "s1s4-interferencia", caption: "Las franjas claras aparecen en las direcciones en que la diferencia de caminos es un múltiplo entero de λ: y_k = k·λL/d." }
      ],
      examples: [
        { task: 'Las rendijas están separadas $d = 0{,}5\\,\\text{mm}$, la luz tiene $\\lambda = 500\\,\\text{nm}$ y la pantalla está a $L = 1\\,\\text{m}$. ¿A qué distancia está la primera franja clara ($k=1$)?',
          steps: ['$y_1 = \\frac{\\lambda L}{d}=\\frac{500\\cdot 10^{-9}\\cdot 1}{0{,}5\\cdot 10^{-3}}\\,\\text{m}$.',
            '$y_1 = 10^{-3}\\,\\text{m}=1\\,\\text{mm}$.',
            '<strong>Resultado: 1 mm desde el centro.</strong>'] },
        { task: 'Con la misma disposición, ¿qué longitud de onda da franjas más anchas: 400 nm o 700 nm?',
          steps: ['La separación de las franjas $y_k$ es proporcional a $\\lambda$.', '<strong>La luz de 700 nm da franjas más anchas.</strong>'] }
      ]
    },
    's4-ziarenie': {
      title: 'Radiación electromagnética y espectros',
      summary: 'Longitud de onda, frecuencia y energía del fotón; espectros de líneas y continuos.',
      theory: [
        `<p>La radiación electromagnética consiste en ondas que se propagan en el vacío a la velocidad $c = 3\\cdot 10^{8}\\,\\text{m/s}$. La longitud de onda y la frecuencia se relacionan mediante $c = \\lambda f$. Las ondas de radio, las microondas, el infrarrojo, la luz visible, el ultravioleta, los rayos X y los rayos gamma son solo partes distintas del mismo fenómeno.</p>`,
        `<p><strong>Energía del fotón</strong>: la luz se emite y se absorbe en cuantos llamados fotones. La energía de un fotón es $E = h f = \\frac{h c}{\\lambda}$, donde $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$. En cálculos atómicos resulta cómodo el electronvoltio ($1\\,\\text{eV} \\approx 1{,}6\\cdot 10^{-19}\\,\\text{J}$), junto con la relación $hc \\approx 1240\\,\\text{eV·nm}$.</p>`,
        `<p><strong>Espectros</strong>: los sólidos calentados hasta la incandescencia emiten un espectro continuo, y los gases delgados emiten un espectro de líneas. Cada elemento tiene sus propias líneas, por eso los espectros sirven para determinar la composición química de las estrellas.</p>`,
        `<p>Por qué los espectros están formados por líneas: los niveles de energía de los átomos son discretos, así que un átomo emite o absorbe solo fotones cuya energía es igual a la diferencia entre dos niveles. Una mayor energía del fotón significa una longitud de onda más corta.</p>`,
        { fig: "s1s4-spektrum", caption: "La radiación electromagnética es un único fenómeno con distintas longitudes de onda. La luz visible es solo una banda estrecha." }
      ],
      examples: [
        { task: 'Un fotón tiene una longitud de onda de 248 nm. ¿Cuál es su energía en electronvoltios?',
          steps: ['$E=\\frac{hc}{\\lambda}\\approx\\frac{1240\\,\\text{eV·nm}}{248\\,\\text{nm}}$.', '<strong>Resultado: E = 5 eV.</strong>'] },
        { task: 'La luz tiene una frecuencia de $6\\cdot 10^{14}\\,\\text{Hz}$. ¿Cuál es su longitud de onda?',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{6\\cdot 10^{14}}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Resultado: 500 nm.</strong>'] }
      ]
    },
    's4-atom': {
      title: 'Modelos del átomo y fenómenos cuánticos',
      summary: 'Modelo de Bohr del hidrógeno: niveles cuantizados y energía del fotón emitido en una transición entre ellos.',
      theory: [
        `<p>Según el modelo de Rutherford, el átomo tiene un núcleo pequeño y positivo con electrones a su alrededor. Sin embargo, según la física clásica, un electrón que se mueve alrededor del núcleo debería seguir emitiendo energía y caer sobre el núcleo, lo que no ocurre. Por eso el modelo de Bohr introdujo <strong>niveles cuantizados</strong>, en los que el electrón no emite energía.</p>`,
        `<p>La energía de un electrón en el átomo de hidrógeno está cuantizada: $E_n = -\\frac{13{,}6\\,\\text{eV}}{n^2}$, donde $n = 1, 2, 3, \\dots$ es el número cuántico principal. Cuanto mayor es $n$, más débilmente está ligado el electrón y más cerca de cero está su energía.</p>`,
        `<p><strong>Transición entre niveles</strong>: cuando el átomo pasa de un nivel superior $n_i$ a uno inferior $n_f$, emite un fotón con energía $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\frac{1}{n_f^2}-\\frac{1}{n_i^2}\\right)$. La transición contraria absorbe un fotón de la misma energía.</p>`,
        `<p>Por qué esto se cumple: la longitud de onda de la luz emitida corresponde a la diferencia entre niveles, por eso el hidrógeno emite solo un espectro de líneas. Del mismo modo, el efecto fotoeléctrico muestra que la luz transporta energía en cuantos y, por tanto, también tiene propiedades de partícula.</p>`,
        { fig: "obr-atom", caption: "Modelo simplificado del átomo: un núcleo positivo y electrones en órbitas a su alrededor." }
      ],
      examples: [
        { task: 'Un electrón del átomo de hidrógeno pasa del nivel $n=3$ al $n=2$. ¿Qué energía emite?',
          steps: ['$\\Delta E = 13{,}6\\left(\\frac{1}{2^2}-\\frac{1}{3^2}\\right)\\,\\text{eV}$.',
            '$\\frac{1}{4}-\\frac{1}{9}=\\frac{5}{36}$, luego $\\Delta E = 13{,}6\\cdot\\frac{5}{36}\\approx 1{,}89\\,\\text{eV}$.',
            '<strong>Resultado: aproximadamente 1,89 eV.</strong>'] },
        { task: '¿Cuál es la energía del electrón en el nivel $n=1$?',
          steps: ['$E_1=-\\frac{13{,}6}{1^2}\\,\\text{eV}$.', '<strong>Resultado: E₁ = −13,6 eV.</strong>'] }
      ]
    },
    's4-radioaktivita': {
      title: 'Radiactividad y reacciones nucleares',
      summary: 'Desintegración de núcleos, periodo de semidesintegración y escritura de una reacción nuclear.',
      theory: [
        `<p><strong>La radiactividad</strong> es la desintegración espontánea de núcleos inestables. Produce radiación: $\\alpha$ (núcleos de helio), $\\beta$ (electrones o positrones) y $\\gamma$ (fotones de alta energía). La desintegración de un núcleo concreto es aleatoria, pero con un gran número de núcleos el comportamiento es predecible.</p>`,
        `<p>El <strong>periodo de semidesintegración</strong> $T_{1/2}$ es el tiempo después del cual se ha desintegrado la mitad de los núcleos iniciales. El número de núcleos sin desintegrar después del tiempo $t$ es $N = N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>Por qué la disminución es geométrica: después de cada periodo de semidesintegración la cantidad se reduce a la mitad, no en la misma cantidad. Tras el primer periodo queda la mitad, y tras el segundo, un cuarto. La actividad $A = \\lambda N$ da el número de desintegraciones por segundo (unidad becquerelio, $\\text{Bq}$).</p>`,
        `<p><strong>Las reacciones nucleares</strong> se escriben con un balance del número másico (índice superior) y del número atómico (índice inferior): la suma de la izquierda es igual a la suma de la derecha.</p>`,
        { fig: "s1s4-polcas-rozpadu", caption: "Tras cada periodo de semidesintegración el número de núcleos sin desintegrar se reduce a la mitad: la disminución es geométrica, no lineal." }
      ],
      examples: [
        { task: 'Un elemento radiactivo tiene un periodo de semidesintegración de 4 días. ¿Qué porcentaje de la cantidad inicial queda después de 8 días?',
          steps: ['En 8 días pasan $\\frac{8}{4}=2$ periodos de semidesintegración.', 'Queda $\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}$ de la cantidad inicial.', '<strong>Resultado: 25 %.</strong>'] },
        { task: 'El núcleo $^{238}_{92}\\text{U}$ se desintegra por desintegración alfa. ¿Cuál es el número másico y el número atómico del nuevo núcleo?',
          steps: ['La partícula alfa es $^{4}_{2}\\text{He}$: se lleva 4 nucleones y 2 protones.', '$238-4=234$, $92-2=90$.', '<strong>Resultado: $^{234}_{90}\\text{Th}$ (torio).</strong>'] }
      ]
    },
    's4-jadro': {
      title: 'Fisión y fusión de núcleos',
      summary: 'Defecto de masa y energía liberada en la fisión de núcleos pesados y en la fusión de núcleos ligeros.',
      theory: [
        `<p>Un núcleo tiene menor masa que la suma de las masas de sus nucleones. La diferencia es el <strong>defecto de masa</strong> $\\Delta m$, y corresponde a la energía de enlace según la relación de Einstein $\\Delta E = \\Delta m\\,c^2$.</p>`,
        `<p>Si la masa se mide en unidades de masa atómica ($1\\,\\text{u}$), se cumple una relación práctica: un defecto de masa de $1\\,\\text{u}$ corresponde a una energía de unos $931{,}5\\,\\text{MeV}$.</p>`,
        `<p><strong>Fisión</strong>: un núcleo pesado (por ejemplo, el uranio-235) se divide en dos núcleos de masa media y libera energía. <strong>Fusión</strong>: núcleos ligeros se unen en un núcleo más pesado y de nuevo se libera energía. El Sol obtiene su energía de la fusión del hidrógeno en helio.</p>`,
        `<p>Por qué se libera energía: los núcleos están más fuertemente ligados alrededor del hierro. Acercarse a él, ya sea dividiendo un núcleo pesado o uniendo núcleos ligeros, libera la diferencia de las energías de enlace.</p>`,
        { fig: "s1s4-vazbova-energia", caption: "La energía de enlace por nucleón es mayor alrededor del hierro, por eso tanto la fisión de núcleos pesados como la fusión de núcleos ligeros liberan energía." }
      ],
      examples: [
        { task: 'En cierto proceso el defecto de masa es $\\Delta m = 0{,}2\\,\\text{u}$. ¿Cuántos MeV de energía se liberan?',
          steps: ['$\\Delta E = \\Delta m\\cdot 931{,}5\\,\\text{MeV/u}=0{,}2\\cdot 931{,}5\\,\\text{MeV}$.', '<strong>Resultado: aproximadamente 186 MeV.</strong>'] },
        { task: 'En la reacción D + T → He + n, las masas antes de la reacción suman 5,0301 u y después 5,0113 u. ¿Cuántos MeV se liberan?',
          steps: ['$\\Delta m = 5{,}0301-5{,}0113=0{,}0188\\,\\text{u}$.', '$\\Delta E = 0{,}0188\\cdot 931{,}5\\approx 17{,}5\\,\\text{MeV}$.', '<strong>Resultado: aproximadamente 17,5 MeV.</strong>'] }
      ]
    },
    's4-astrofyzika': {
      title: 'Fundamentos de astrofísica y cosmología',
      summary: 'Distancia de las estrellas por paralaje, ley de Hubble de expansión y ley de Wien de radiación.',
      theory: [
        `<p><strong>Las distancias en el espacio</strong> se miden en años luz o en parsecs: $1\\,\\text{pc}\\approx 3{,}26\\,\\text{ly}$. Con la <strong>paralaje</strong>, una estrella parece desplazada respecto a las estrellas lejanas cuando la Tierra orbita alrededor del Sol. La distancia en parsecs es $d = \\frac{1}{p}$, donde $p$ es la paralaje anual en segundos de arco.</p>`,
        `<p><strong>La ley de Hubble</strong>: las galaxias lejanas se alejan de nosotros con una velocidad $v = H_0\\,d$, donde $H_0 \\approx 70\\,\\text{km/(s·Mpc)}$. Cuanto más lejana está la galaxia, más rápido se aleja. Es una prueba de que el universo se expande.</p>`,
        `<p><strong>La ley de Wien</strong>: la temperatura superficial de una estrella determina la longitud de onda en la que emite con mayor intensidad: $\\lambda_{max} = \\frac{b}{T}$, donde $b \\approx 2{,}9\\cdot 10^{-3}\\,\\text{m·K}$. Las estrellas más frías brillan en rojo, y las más calientes, en azul.</p>`,
        `<p>Por qué funciona esto: la paralaje es la geometría del triángulo Tierra–Sol–estrella, y Hubble descubrió que el desplazamiento de las líneas espectrales hacia el rojo aumenta con la distancia. A partir de ambas mediciones podemos estimar distancias y también la edad del universo.</p>`,
        { fig: "s1s4-paralaxa", caption: "Paralaje: vista desde dos puntos de la órbita terrestre, una estrella parece desplazada respecto a estrellas más lejanas. La distancia en parsecs es d = 1/p." }
      ],
      examples: [
        { task: 'Una galaxia se aleja de nosotros a 3500 km/s. ¿Cuál es su distancia si $H_0 = 70\\,\\text{km/(s·Mpc)}$?',
          steps: ['$d=\\frac{v}{H_0}=\\frac{3500}{70}\\,\\text{Mpc}$.', '<strong>Resultado: 50 Mpc.</strong>'] },
        { task: 'La superficie de una estrella tiene una temperatura de 5800 K. ¿A qué longitud de onda emite con mayor intensidad?',
          steps: ['$\\lambda_{max}=\\frac{2{,}9\\cdot 10^{-3}}{5800}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Resultado: 500 nm (zona verde).</strong>'] }
      ]
    },
    's4-opakovanie': {
      title: 'Repaso de mecánica, electricidad y otros temas',
      summary: 'Repasa las fórmulas principales de la mecánica y la electricidad y comprueba las unidades.',
      theory: [
        `<p>El repaso une cosas que has aprendido por separado. Mecánica: $F = m\\,a$, $E_k = \\frac{1}{2}m v^2$, $W = F\\,s$, $P = \\frac{W}{t}$. Electricidad: $I = \\frac{Q}{t}$, $U = R\\,I$, $P = U\\,I$. Siempre primero averigua qué se da y qué se pide, y solo después elige la fórmula.</p>`,
        `<p><strong>Comprobación de unidades:</strong> fuerza en newtons ($\\text{N} = \\text{kg·m/s}^2$), energía en julios, tensión en voltios. Si las unidades de ambos lados no coinciden, el error está en el procedimiento.</p>`,
        `<p><strong>Errores frecuentes:</strong> no olvides el $\\frac{1}{2}$ y el cuadrado de la velocidad en la energía cinética; convierte km/h a m/s dividiendo por $3{,}6$; en una conexión en paralelo suma los inversos de las resistencias.</p>`,
        `<p>Por qué esto ayuda: la física es un único sistema de leyes. La energía se conserva en distintos ámbitos; por ejemplo, la energía eléctrica se convierte en energía mecánica en un motor, así que la misma forma de pensar sirve en todas partes.</p>`
      ],
      examples: [
        { task: 'Un coche de masa 1000 kg se mueve a 20 m/s. ¿Cuál es su energía cinética?',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 1000\\cdot 20^2$.', '$=\\frac{1}{2}\\cdot 1000\\cdot 400=200\\,000\\,\\text{J}$.', '<strong>Resultado: 200 kJ.</strong>'] },
        { task: 'Un aparato tiene una tensión de 12 V y una resistencia de 4 Ω. ¿Qué corriente lo atraviesa?',
          steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Resultado: 3 A.</strong>'] }
      ]
    },
    's4-maturita': {
      title: 'Preparación para el examen final, sobre todo si se elige la física',
      summary: 'Enfoque para resolver problemas, unidades, estimación del resultado y redondeo.',
      theory: [
        `<p>En el examen final de física se pierden la mayoría de los puntos por <strong>unidades incorrectas</strong> y por sustituir sin comprobar. Un procedimiento que da buenos resultados: anota las magnitudes dadas, anota la magnitud buscada, elige la fórmula, convierte las unidades al SI y solo entonces calcula.</p>`,
        `<ol><li>Anota las magnitudes dadas y la buscada.</li><li>Elige una fórmula y comprueba que se aplica a este proceso.</li><li>Convierte las unidades al SI.</li>
         <li>Calcula y redondea solo al final.</li><li>Comprueba la unidad y el orden de magnitud del resultado.</li></ol>`,
        `<p><strong>Comprobación del resultado:</strong> verifica que el orden de magnitud sea razonable (la velocidad de un coche no puede ser $10^{6}\\,\\text{m/s}$), que el signo sea correcto y que el resultado tenga la unidad correcta. Una estimación rápida antes de calcular te libra de errores con la coma decimal.</p>`,
        `<p><strong>Redondeo:</strong> calcula con toda la precisión y redondea solo al final, al número de cifras significativas indicado en el problema (normalmente 2 o 3). Redondear en los pasos intermedios desplaza el resultado.</p>`,
        `<p>Por qué esto funciona: el examen final evalúa una forma de pensar, no solo un número. Las unidades correctas y la comprobación muestran comprensión, aunque te equivoques en un pequeño valor del cálculo.</p>`
      ],
      examples: [
        { task: 'Un cuerpo de masa 2 kg tiene una velocidad de 36 km/h. ¿Cuál es su energía cinética?',
          steps: ['Convierte las unidades: $v = 36\\,\\text{km/h}=10\\,\\text{m/s}$.', '$E_k=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 10^2=100\\,\\text{J}$.', '<strong>Resultado: 100 J.</strong>'] },
        { task: 'Una fuerza de 500 N actúa sobre un área de 25 cm². ¿Qué presión resulta, en kPa?',
          steps: ['Convierte el área: $S=25\\,\\text{cm}^2=25\\cdot 10^{-4}\\,\\text{m}^2$.', '$p=\\frac{F}{S}=\\frac{500}{25\\cdot 10^{-4}}\\,\\text{Pa}=2\\cdot 10^{5}\\,\\text{Pa}$.', '<strong>Resultado: 200 kPa.</strong>'] }
      ]
    }
  }
});
