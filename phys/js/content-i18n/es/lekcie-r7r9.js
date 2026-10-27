/* Español: lecciones de 7.º–9.º curso (js/rocniky/r7.js, r8.js, r9.js). Estructura y claves: js/content-i18n.js. */
CONTENT_I18N.add('es', {
  lessons: {
    'r7-pohyb': {
      title: 'El movimiento de los cuerpos y cómo lo describimos',
      summary: 'El movimiento y el reposo son relativos y dependen del sistema de referencia.',
      theory: [
        `<p>El movimiento y el reposo son <strong>relativos</strong>: dependen de con qué los comparamos. El cuerpo respecto al cual describimos el movimiento se llama
       <strong>cuerpo de referencia</strong>. Junto con los relojes forma un <strong>sistema de referencia</strong>.</p>`,
        `<p>Un pasajero sentado en un tren en marcha está en reposo respecto al tren, pero se mueve respecto a los árboles junto a la vía. Ambas afirmaciones son verdaderas,
       cada una en un sistema de referencia distinto. Por eso, al describir el movimiento, siempre decimos respecto a qué lo describimos.</p>`,
        `<ul>
         <li><strong>Trayectoria</strong>: la línea que traza un cuerpo al moverse.</li>
         <li><strong>Recorrido</strong> $s$: la longitud de la trayectoria entre dos lugares. Se mide en metros.</li>
         <li><strong>Punto material</strong>: un cuerpo cuyas dimensiones despreciamos al describir su movimiento.</li>
       </ul>`,
        `<p>El recorrido es la longitud de toda la ruta, no la distancia entre el inicio y el final. Si caminamos 3 m al este y luego 4 m al norte,
       el recorrido es $7\\,\\text{m}$, aunque la distancia desde el inicio es solo $5\\,\\text{m}$.</p>`,
        { fig: 'obr-draha', caption: 'El recorrido es toda la ruta; la distancia es la línea recta entre el inicio y el final.' }
      ],
      examples: [
        { task: 'Un pasajero está sentado en un tren rápido. ¿Está en reposo o en movimiento?',
          steps: ['Respecto al tren en el que viaja, no se mueve.', 'Respecto a los árboles junto a la vía, sí se mueve.', '<strong>Resultado: en reposo respecto al tren, en movimiento respecto a los alrededores.</strong>'] },
        { task: 'Un peatón caminó 3 m al este y luego 4 m al norte. ¿Cuál es su recorrido?',
          steps: ['El recorrido es la longitud de toda la ruta, así que sumamos ambos tramos.', '$s = 3\\,\\text{m} + 4\\,\\text{m} = 7\\,\\text{m}$', '<strong>Resultado: 7 m</strong>'] }
      ]
    },
    'r7-draha': {
      title: 'Recorrido, tiempo y velocidad media',
      summary: 'Cálculo de la velocidad, el recorrido y el tiempo, y conversión entre m/s y km/h.',
      theory: [
        `<p>La <strong>velocidad</strong> indica qué recorrido hace un cuerpo en una unidad de tiempo. Fórmula: $v=\\frac{s}{t}$, donde $s$ es el recorrido y $t$ el tiempo.
       La unidad del SI es $\\text{m/s}$; en el tráfico por carretera se usa $\\text{km/h}$.</p>`,
        `<p>De esta fórmula derivamos otras dos: $s=v\\cdot t$ y $t=\\frac{s}{v}$. Antes de calcular, comprobamos siempre las unidades.
       Si el recorrido está en kilómetros y el tiempo en minutos, hay que convertir una de las magnitudes.</p>`,
        `<ul>
         <li>$1\\,\\text{m/s}=3{,}6\\,\\text{km/h}$: para pasar de metros por segundo a kilómetros por hora, multiplicamos por $3{,}6$.</li>
         <li>$1\\,\\text{km/h}=\\frac{1}{3{,}6}\\,\\text{m/s}$: para pasar de kilómetros por hora a metros por segundo, dividimos por $3{,}6$.</li>
       </ul>`,
        `<p>La <strong>velocidad media</strong> no es igual a la media de las velocidades. Se calcula como el recorrido total dividido por el tiempo total:
       $v_p=\\frac{s_{\\text{total}}}{t_{\\text{total}}}$. Si un coche se detuvo un rato en parte de la ruta, su velocidad media es menor que su velocidad máxima.</p>`,
        { fig: 'obr-draha', caption: 'El recorrido es toda la ruta; la distancia es la línea recta entre el inicio y el final.' }
      ],
      examples: [
        { task: 'Un coche recorrió $120\\,\\text{km}$ en $2\\,\\text{h}$. ¿Cuál fue su velocidad media?',
          steps: ['$v=\\frac{s}{t}=\\frac{120}{2}$', '$v=60\\,\\text{km/h}$', '<strong>Resultado: 60 km/h</strong>'] },
        { task: 'Un ciclista se mueve a $5\\,\\text{m/s}$. ¿Cuál es esta velocidad en $\\text{km/h}$?',
          steps: ['Para pasar de m/s a km/h multiplicamos por 3,6.', '$5\\cdot 3{,}6=18\\,\\text{km/h}$', '<strong>Resultado: 18 km/h</strong>'] }
      ]
    },
    'r7-rovnomerny': {
      title: 'Movimiento uniforme y no uniforme',
      summary: 'Cuándo no cambia la velocidad y cómo calcular un movimiento cuya velocidad cambia.',
      theory: [
        `<p><strong>Movimiento uniforme</strong>: el cuerpo recorre el mismo trayecto en cada intervalo de tiempo igual, así que su velocidad no cambia.
       En una gráfica de recorrido en función del tiempo es una línea recta, y su pendiente corresponde a la velocidad.</p>`,
        `<p><strong>Movimiento no uniforme</strong>: la velocidad cambia, el cuerpo acelera o frena. Ejemplo: un tren que arranca o una piedra que cae al suelo.</p>`,
        `<p>En el movimiento uniforme se cumple la fórmula $s=v\\cdot t$, donde $v$ es la velocidad constante. En el movimiento no uniforme podemos usar la
       <strong>velocidad media</strong>: recorrido total dividido por tiempo total. Muestra solo el resultado global, no cómo cambió la velocidad.</p>`,
        `<ol>
         <li>Si un cuerpo recorre trayectos iguales en tiempos iguales, el movimiento es uniforme.</li>
         <li>Si los trayectos recorridos en tiempos iguales cambian, el movimiento es no uniforme.</li>
         <li>La velocidad media nunca se calcula como la media de dos velocidades.</li>
       </ol>`,
        { fig: 'r6r9-rovnomerny', caption: 'En el movimiento uniforme la gráfica de recorrido en función del tiempo es una recta y su pendiente es la velocidad. Al acelerar es una curva.' }
      ],
      examples: [
        { task: 'Un peatón camina a una velocidad constante de $4\\,\\text{km/h}$. ¿Qué recorrido hace en $3\\,\\text{h}$?',
          steps: ['El movimiento es uniforme, así que $s=v\\cdot t$.', '$s=4\\cdot 3=12\\,\\text{km}$', '<strong>Resultado: 12 km</strong>'] },
        { task: 'Un cuerpo recorre 5 m cada segundo. ¿Qué tipo de movimiento es y qué recorrido hace en 6 s?',
          steps: ['En tiempos iguales recorre trayectos iguales, así que el movimiento es uniforme.', '$s = 5\\cdot 6 = 30\\,\\text{m}$', '<strong>Resultado: movimiento uniforme, 30 m</strong>'] }
      ]
    },
    'r7-sila': {
      title: 'La fuerza y sus efectos',
      summary: 'Qué es una fuerza, qué efectos produce y cómo se suman fuerzas con la misma o con la dirección opuesta.',
      theory: [
        `<p><strong>La fuerza</strong> es la interacción mutua de los cuerpos. No vemos la fuerza, vemos sus efectos. Se designa con $F$ y su unidad es el newton: $1\\,\\text{N}$.</p>`,
        `<ul>
         <li>Puede <strong>cambiar la velocidad</strong> de un cuerpo: ponerlo en movimiento, frenarlo o detenerlo.</li>
         <li>Puede <strong>cambiar la dirección</strong> del movimiento, por ejemplo cuando una bicicleta toma una curva.</li>
         <li>Puede <strong>cambiar la forma</strong> de un cuerpo: apretar una esponja o estirar una goma.</li>
       </ul>`,
        `<p>La fuerza es un <strong>vector</strong>: tiene módulo, dirección y punto de aplicación. La dibujamos como una flecha. Si sobre un cuerpo actúan fuerzas en el mismo sentido,
       las sumamos. Si actúan en sentidos opuestos, restamos la menor de la mayor, y la fuerza resultante tiene el sentido de la mayor.</p>`,
        `<p>Las fuerzas siempre aparecen en pares: si una mano empuja una pared, la pared empuja de vuelta a la mano con una fuerza igual de grande en sentido opuesto.
       Sin embargo, estas dos fuerzas actúan sobre cuerpos distintos, por eso no se anulan entre sí.</p>`,
        { fig: 'obr-sily', caption: 'Fuerzas que actúan sobre un cuerpo en una superficie horizontal: fuerza de tracción F, rozamiento Ftr y la fuerza normal de la superficie N.' }
      ],
      examples: [
        { task: 'Dos estudiantes tiran de un carrito en el mismo sentido con fuerzas de $30\\,\\text{N}$ y $20\\,\\text{N}$. ¿Cuál es la fuerza resultante?',
          steps: ['Las fuerzas tienen el mismo sentido, así que las sumamos.', '$30 + 20 = 50$', '<strong>Resultado: 50 N</strong>'] },
        { task: 'El mismo carrito es tirado por el primer estudiante con una fuerza de $30\\,\\text{N}$ hacia la derecha y por el segundo con una fuerza de $20\\,\\text{N}$ hacia la izquierda. ¿Cuál es la fuerza resultante?',
          steps: ['Las fuerzas tienen sentidos opuestos, así que las restamos.', '$30 - 20 = 10$; la fuerza resultante apunta hacia la derecha.', '<strong>Resultado: 10 N hacia la derecha</strong>'] }
      ]
    },
    'r7-tiaz': {
      title: 'Fuerza gravitatoria y peso',
      summary: 'Por qué los cuerpos caen en la Tierra y en qué se diferencia la masa del peso.',
      theory: [
        `<p>Todos los cuerpos se atraen mutuamente con una <strong>fuerza gravitatoria</strong>. Cuanto mayores son las masas y más cerca están los cuerpos, mayor es la fuerza de atracción.
       La gravedad terrestre nos mantiene sobre su superficie, y la Luna orbita alrededor de la Tierra.</p>`,
        `<p><strong>El peso</strong> $F_G$ es la fuerza con la que la Tierra atrae un cuerpo hacia sí. Lo calculamos con la fórmula $F_G=m\\cdot g$, donde $m$ es la masa en kilogramos
       y $g$ es la aceleración de la gravedad. En la Tierra $g\\approx 10\\,\\text{N/kg}$ (más exactamente $9{,}81\\,\\text{N/kg}$).</p>`,
        `<p><strong>La masa y el peso no son lo mismo.</strong> La masa en kilogramos indica cuánta materia contiene un cuerpo, y es la misma en todas partes.
       El peso en newtons depende del lugar. En la Luna $g\\approx 1{,}6\\,\\text{N/kg}$, así que un cuerpo de masa $5\\,\\text{kg}$ pesa allí unos $8\\,\\text{N}$.</p>`,
        `<ul>
         <li>El peso es una fuerza, se mide con un dinamómetro de resorte en newtons.</li>
         <li>La masa se mide con una balanza en kilogramos.</li>
       </ul>`,
        { fig: 'r6r9-tiaz', caption: 'La misma masa tiene un peso menor en la Luna, porque allí la aceleración de la gravedad es menor.' }
      ],
      examples: [
        { task: '¿Cuál es el peso de un cuerpo de masa $4\\,\\text{kg}$ en la Tierra? Usa $g=10\\,\\text{N/kg}$.',
          steps: ['$F_G=m\\cdot g$', '$F_G=4\\cdot 10=40\\,\\text{N}$', '<strong>Resultado: 40 N</strong>'] },
        { task: 'Un cuerpo tiene un peso de $60\\,\\text{N}$ en la Tierra. ¿Cuál es su masa?',
          steps: ['$m=\\frac{F_G}{g}$', '$m=\\frac{60}{10}=6\\,\\text{kg}$', '<strong>Resultado: 6 kg</strong>'] }
      ]
    },
    'r7-trenie': {
      title: 'Rozamiento y resistencia del medio',
      summary: 'Cuándo el rozamiento es mayor, cómo aumentarlo o reducirlo y qué frena los cuerpos en los fluidos.',
      theory: [
        `<p><strong>El rozamiento</strong> surge en la superficie de contacto de dos cuerpos y actúa en contra del movimiento o del intento de moverse. Por eso una caja que empujamos por el suelo
       se detiene cuando dejamos de empujar.</p>`,
        `<ul>
         <li>El rozamiento es mayor cuanto más rugosas son las superficies.</li>
         <li>El rozamiento es mayor cuanto más fuerte presiona un cuerpo sobre el otro.</li>
         <li>El rozamiento no depende del tamaño de la superficie de contacto.</li>
       </ul>`,
        `<p><strong>La resistencia del medio</strong> (aire, agua) frena el movimiento de un cuerpo. Depende de la forma del cuerpo, de su velocidad y de la densidad del medio.
       Un paracaídas tiene una gran resistencia del aire, por eso cae despacio. Un nadador con cuerpo aerodinámico sufre menos resistencia del agua.</p>`,
        `<p>A veces queremos aumentar el rozamiento, por ejemplo con los neumáticos del coche en la carretera o al caminar. Otras veces queremos reducirlo, por ejemplo en los cojinetes.
       El lubricante crea una capa fina entre las superficies y así reduce el rozamiento.</p>`,
        { fig: 'obr-sily', caption: 'Fuerzas que actúan sobre un cuerpo en una superficie horizontal: fuerza de tracción F, rozamiento Ftr y la fuerza normal de la superficie N.' }
      ],
      examples: [
        { task: 'Un armario es empujado por una fuerza de $300\\,\\text{N}$ en la dirección del movimiento, y el rozamiento de $120\\,\\text{N}$ actúa en contra del movimiento. ¿Cuál es la fuerza resultante en la dirección del movimiento?',
          steps: ['El rozamiento actúa en contra del movimiento, así que lo restamos.', '$300-120=180$', '<strong>Resultado: 180 N</strong>'] },
        { task: '¿Qué medida aumenta el rozamiento: los neumáticos de invierno o el lubricante en un cojinete?',
          steps: ['Los neumáticos de invierno tienen una superficie más rugosa, así que el rozamiento aumenta.', 'El lubricante entre las superficies reduce el rozamiento.', '<strong>Resultado: los neumáticos de invierno</strong>'] }
      ]
    },
    'r7-svetlo': {
      title: 'La luz y cómo se propaga',
      summary: 'Propagación rectilínea de la luz, velocidad de la luz, sombras y eclipses.',
      theory: [
        `<p>La luz es radiación electromagnética que percibimos con los ojos. Una fuente de luz emite luz en todas las direcciones.
       Vemos un cuerpo que no emite luz por sí mismo porque refleja la luz hacia nuestros ojos.</p>`,
        `<p>En un mismo medio la luz se propaga en <strong>línea recta</strong>. Por eso se forma una sombra detrás de un objeto opaco: el objeto tapa la luz que hay detrás de él.
       Una fuente de luz grande crea además una penumbra, donde solo se ve una parte de la fuente.</p>`,
        `<p>La velocidad de la luz en el vacío es $c=300\\,000\\,\\text{km/s}$, es decir, $3\\cdot 10^8\\,\\text{m/s}$. En el aire es casi la misma,
       en el agua y en el vidrio es menor. La luz de la Luna nos llega en unos $1{,}3\\,\\text{s}$, la luz del Sol en unos 8 minutos.</p>`,
        `<p>Un eclipse de Sol ocurre cuando la Luna se interpone entre el Sol y la Tierra y proyecta su sombra sobre la Tierra. Un eclipse de Luna ocurre cuando la Tierra se interpone entre el Sol y la Luna.</p>`,
        { fig: 'r6r9-zatmenie', caption: 'En un eclipse de Sol la Luna se encuentra entre el Sol y la Tierra y proyecta una sombra sobre la Tierra.' }
      ],
      examples: [
        { task: 'La luz viaja a $300\\,000\\,\\text{km/s}$. ¿Qué distancia recorre en $10\\,\\text{s}$?',
          steps: ['$s=c\\cdot t$', '$s=300\\,000\\cdot 10=3\\,000\\,000\\,\\text{km}$', '<strong>Resultado: 3 000 000 km</strong>'] },
        { task: '¿Por qué hay una sombra detrás de un árbol al sol?',
          steps: ['El árbol es opaco y la luz se propaga en línea recta.', 'La luz no puede atravesar el árbol, así que detrás queda oscuro.', '<strong>Resultado: el árbol tapa la luz porque la luz se propaga en línea recta</strong>'] }
      ]
    },
    'r7-odraz': {
      title: 'Reflexión y refracción de la luz',
      summary: 'La ley de la reflexión, los ángulos medidos desde la normal y la desviación del rayo al entrar en otro medio.',
      theory: [
        `<p>Un rayo de luz incide sobre la superficie de separación de dos medios. Una parte se refleja hacia atrás y otra parte pasa al segundo medio.
       Los ángulos siempre se miden desde la <strong>normal</strong>, es decir, la recta perpendicular a la superficie, no desde la superficie misma.</p>`,
        `<p><strong>Ley de la reflexión:</strong> el ángulo de incidencia $\\alpha$ es igual al ángulo de reflexión $\\beta$, es decir, $\\alpha=\\beta$.
       El rayo reflejado está en el plano que forman el rayo incidente y la normal.</p>`,
        `<ul>
         <li>Al pasar a un medio donde la luz es más lenta (p. ej. del aire al agua), el rayo se desvía <strong>hacia la normal</strong>.</li>
         <li>Al pasar a un medio donde la luz es más rápida (p. ej. del agua al aire), el rayo se desvía <strong>alejándose de la normal</strong>.</li>
       </ul>`,
        `<p>Por eso un lápiz colocado en un vaso de agua parece quebrado, y el fondo de una piscina parece menos profundo de lo que realmente es.</p>`,
        { fig: 'obr-odraz', caption: 'Cuando la luz se refleja en un espejo plano, se cumple la ley de la reflexión.' }
      ],
      examples: [
        { task: 'Un rayo incide sobre un espejo plano formando un ángulo de $35^\\circ$ con la normal. ¿Qué ángulo forma el rayo reflejado con la normal?',
          steps: ['Según la ley de la reflexión, el ángulo de reflexión es igual al ángulo de incidencia.', '$\\beta=\\alpha=35^\\circ$', '<strong>Resultado: 35°</strong>'] },
        { task: 'Un rayo incide sobre un espejo formando un ángulo de $60^\\circ$ con la superficie del espejo. ¿Cuál es el ángulo de incidencia medido desde la normal?',
          steps: ['Los ángulos se miden desde la normal, no desde la superficie.', '$\\alpha = 90^\\circ - 60^\\circ = 30^\\circ$', '<strong>Resultado: 30°</strong>'] }
      ]
    },
    'r7-zrkadla': {
      title: 'Espejos, lentes y fenómenos ópticos',
      summary: 'La imagen en un espejo plano, las lentes convergentes y divergentes, y fenómenos como el arcoíris o el espejismo.',
      theory: [
        `<p>Un <strong>espejo plano</strong> forma una imagen virtual: la vemos detrás del espejo y no se puede recoger en una pantalla.
       La imagen tiene el mismo tamaño, está derecha y se encuentra a la misma distancia detrás del espejo que el objeto delante de él.</p>`,
        `<p>Si te sitúas a 2 m de un espejo, tu imagen está a 4 m de ti. La distancia entre un objeto y su imagen
       es el doble de la distancia del objeto al espejo.</p>`,
        `<p><strong>Las lentes</strong> refractan la luz. Una <strong>lente convergente</strong> es más gruesa en el centro y concentra los rayos paralelos en un punto (el foco).
       Una <strong>lente divergente</strong> es más delgada en el centro y separa los rayos. Las lentes convergentes se usan en las lupas, las cámaras y las gafas para la hipermetropía.</p>`,
        `<p><strong>Fenómenos ópticos:</strong> el arcoíris se forma cuando la luz blanca se descompone en colores en las gotas de agua. El espejismo se produce por refracción de la luz en el aire caliente
       sobre una carretera ardiente, de modo que vemos el reflejo del cielo como si hubiera agua en el suelo.</p>`,
        { fig: 'r6r9-zrkadlo', caption: 'La imagen en un espejo plano es virtual y está tan lejos detrás del espejo como el objeto delante de él.' }
      ],
      examples: [
        { task: 'Un objeto está a 3 m delante de un espejo plano. ¿Cuál es la distancia entre el objeto y su imagen?',
          steps: ['La imagen está detrás del espejo a la misma distancia a la que está el objeto delante de él.', '$3\\,\\text{m}+3\\,\\text{m}=6\\,\\text{m}$', '<strong>Resultado: 6 m</strong>'] },
        { task: '¿Qué lente concentra los rayos paralelos en un solo punto?',
          steps: ['Una lente que concentra los rayos en un punto es más gruesa en el centro.', 'Una lente más gruesa en el centro es una lente convergente.', '<strong>Resultado: una lente convergente</strong>'] }
      ]
    },
    'r8-praca': {
      title: 'Trabajo mecánico y potencia',
      summary: 'Cuándo una fuerza realiza trabajo, cómo calcularlo y con qué rapidez se realiza.',
      theory: [
        `<p><strong>El trabajo mecánico</strong> se realiza cuando una fuerza actúa sobre un cuerpo y el cuerpo se mueve en la dirección de esta fuerza.
       Si no movemos el cuerpo, el trabajo es nulo: empujar una pared no realiza ningún trabajo.</p>`,
        `<p>Calculamos el trabajo con la fórmula $W = F\\cdot s$, donde $F$ es la fuerza en newtons (N) y $s$ es el recorrido en metros (m).
       La unidad de trabajo es el <strong>julio</strong> (J): $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$.</p>`,
        `<p><strong>La potencia</strong> indica con qué rapidez se realiza el trabajo. Se calcula como el trabajo dividido por el tiempo: $P = \\frac{W}{t}$,
       donde $t$ es el tiempo en segundos. La unidad de potencia es el <strong>vatio</strong> (W): $1\\,\\text{W} = 1\\,\\text{J/s}$.
       Dos motores pueden realizar el mismo trabajo, pero el más potente lo termina en menos tiempo.</p>`,
        `<ol>
         <li>Determina la fuerza y el recorrido en N y m.</li>
         <li>Multiplícalos: $W = F\\cdot s$.</li>
         <li>Si se pide la potencia, divide el resultado por el tiempo: $P = W : t$.</li>
       </ol>`,
        { fig: 'r6r9-praca', caption: 'El trabajo se realiza solo cuando el cuerpo se mueve en la dirección de la fuerza. Empujar una pared que no se mueve no realiza trabajo.' }
      ],
      examples: [
        { task: 'Dos chicos empujan un carrito con una fuerza $F = 150\\,\\text{N}$ y lo desplazan $s = 8\\,\\text{m}$. ¿Qué trabajo realizan?',
          steps: ['Sustituimos en la fórmula: $W = F\\cdot s = 150\\cdot 8$.', '<strong>Resultado: W = 1200 J</strong>'] },
        { task: 'Un motor elevador realiza un trabajo $W = 3000\\,\\text{J}$ en $t = 20\\,\\text{s}$. ¿Cuál es su potencia?',
          steps: ['$P = \\frac{W}{t} = \\frac{3000}{20}$.', '<strong>Resultado: P = 150 W</strong>'] }
      ]
    },
    'r8-mechanicka-energia': {
      title: 'Energía mecánica y sus transformaciones',
      summary: 'La energía es la capacidad de realizar trabajo y se transforma de una forma en otra.',
      theory: [
        `<p><strong>La energía</strong> es la capacidad de un cuerpo para realizar trabajo. Se designa con $E$ y su unidad es la misma que la del trabajo: el julio (J).
       La energía no se puede crear de la nada ni destruir. Solo puede transformarse de una forma en otra.</p>`,
        `<p><strong>Principio de conservación de la energía:</strong> la energía total de un sistema cerrado no cambia. Si una forma de energía disminuye,
       otra forma aumenta en la misma cantidad.</p>`,
        `<ul>
         <li>Una piedra que cae desde una altura: la energía potencial se transforma en energía cinética.</li>
         <li>Un péndulo que vuelve a subir: la energía cinética se transforma de nuevo en energía potencial.</li>
         <li>Un coche con frenos: la energía cinética se transforma en energía interna (calor).</li>
       </ul>`,
        `<p>Cuando aparece rozamiento, una parte de la energía mecánica siempre se transforma en calor. La energía no se pierde, solo se dispersa en el entorno
       y es difícil de aprovechar.</p>`,
        { fig: 'obr-energia', caption: 'Al deslizarse sin rozamiento, la energía potencial se transforma en cinética y viceversa.' }
      ],
      examples: [
        { task: '¿Qué ocurre con la energía cuando un libro cae de una mesa al suelo?',
          steps: ['Sobre la mesa el libro tiene energía potencial. Al caer se mueve, así que tiene energía cinética.', 'Al chocar, una parte de la energía se transforma en sonido y calor.', '<strong>Resultado: la energía potencial se transforma en cinética, sonora y térmica.</strong>'] },
        { task: '¿Qué transformación de energía tiene lugar al frenar una bicicleta?',
          steps: ['La bicicleta se mueve, así que tiene energía cinética.', 'Los frenos producen calor por rozamiento con la llanta.', '<strong>Resultado: la energía cinética se transforma en energía interna (calor).</strong>'] }
      ]
    },
    'r8-polohova-pohybova': {
      title: 'Energía potencial y energía cinética',
      summary: 'Cálculo de la energía de un cuerpo a una altura y en movimiento.',
      theory: [
        `<p>Un cuerpo elevado sobre el suelo tiene <strong>energía potencial</strong>. Cuanto más pesado y más alto está, más energía tiene.
       Se calcula como $E_p = m\\cdot g\\cdot h$, donde $m$ es la masa en kilogramos, $g \\approx 10\\,\\text{m/s}^2$ es la aceleración de la gravedad
       y $h$ es la altura en metros.</p>`,
        `<p>Un cuerpo en movimiento tiene <strong>energía cinética</strong>. Se calcula como $E_k = \\frac{1}{2}\\,m\\,v^2$,
       donde $v$ es la velocidad en m/s. La velocidad está elevada al cuadrado, así que el doble de velocidad significa cuatro veces más energía cinética.</p>`,
        `<p>Estas energías dependen de la masa, la altura y la velocidad, no de la forma del cuerpo. Por eso es más difícil detener un coche a mayor velocidad:
       tiene una energía cinética mucho mayor.</p>`,
        `<ol>
         <li>Determina la masa en kg, la altura en m o la velocidad en m/s.</li>
         <li>Elige la fórmula según si el cuerpo está en altura o en movimiento.</li>
         <li>Sustituye y calcula; el resultado está en julios.</li>
       </ol>`,
        { fig: 'r6r9-kinetika', caption: 'La energía cinética crece con el cuadrado de la velocidad: el doble de velocidad significa cuatro veces más energía.' }
      ],
      examples: [
        { task: 'Una piedra de masa $m = 2\\,\\text{kg}$ está sobre el tejado de un edificio de $h = 5\\,\\text{m}$ de altura. ¿Cuál es su energía potencial si $g = 10\\,\\text{m/s}^2$?',
          steps: ['$E_p = m\\cdot g\\cdot h = 2\\cdot 10\\cdot 5$.', '<strong>Resultado: E_p = 100 J</strong>'] },
        { task: 'Un carrito de masa $m = 4\\,\\text{kg}$ se mueve a una velocidad de $v = 3\\,\\text{m/s}$. ¿Cuál es su energía cinética?',
          steps: ['$E_k=\\frac{1}{2}\\,m\\,v^2=\\frac{1}{2}\\cdot 4\\cdot 3^2$.', '$\\frac{1}{2}\\cdot 4 = 2$ y $3^2 = 9$, así que $E_k = 2\\cdot 9$.', '<strong>Resultado: E_k = 18 J</strong>'] }
      ]
    },
    'r8-jednoduche-stroje': {
      title: 'Máquinas simples',
      summary: 'La palanca, la polea y el plano inclinado facilitan el trabajo, pero no reducen el trabajo en sí.',
      theory: [
        `<p><strong>Las máquinas simples</strong> (palanca, polea, plano inclinado) permiten levantar una carga más pesada con una fuerza menor.
       Sin embargo, rige la regla de oro de la mecánica: el trabajo no se puede ahorrar. Cambiamos una fuerza menor por un recorrido más largo.</p>`,
        `<p>Una <strong>palanca</strong> es una barra que gira alrededor de un eje. La distancia de la fuerza al eje es el <em>brazo de palanca</em> de la fuerza $r$.
       La palanca está en equilibrio cuando $F_1\\cdot r_1 = F_2\\cdot r_2$. Un brazo más largo significa que se necesita menos fuerza.</p>`,
        `<p><strong>Poleas:</strong> una polea fija solo cambia la dirección de la fuerza. Una polea móvil reduce a la mitad la fuerza, pero el recorrido
       se duplica. <strong>Plano inclinado:</strong> cuanto menor es la pendiente, menor es la fuerza necesaria, pero el recorrido es más largo.</p>`,
        `<ol>
         <li>Determina cuál es la carga y cuál es la fuerza que tira.</li>
         <li>Mide los brazos de palanca (distancias al eje).</li>
         <li>Usa el equilibrio de la palanca y calcula la fuerza desconocida.</li>
       </ol>`,
        { fig: 'obr-paka', caption: 'Una palanca está en equilibrio cuando el producto de fuerza por brazo en un lado es igual al del otro lado.' }
      ],
      examples: [
        { task: 'En una palanca, el brazo de la fuerza es $r_1 = 2\\,\\text{m}$ y levantamos una carga con una fuerza $F_2 = 300\\,\\text{N}$ en el brazo $r_2 = 0{,}5\\,\\text{m}$. ¿Con qué fuerza actuamos en el brazo $r_1$?',
          steps: ['Equilibrio: $F_1\\cdot r_1 = F_2\\cdot r_2$.', '$F_1 = \\frac{F_2\\cdot r_2}{r_1} = \\frac{300\\cdot 0{,}5}{2}$.', '<strong>Resultado: F_1 = 75 N</strong>'] },
        { task: 'Levantamos una carga de peso $200\\,\\text{N}$ con una polea móvil. ¿Con qué fuerza tiramos si despreciamos el rozamiento?',
          steps: ['Una polea móvil reduce la fuerza a la mitad: $F = \\frac{200}{2}$.', '<strong>Resultado: F = 100 N, pero debemos tirar a lo largo del doble de recorrido.</strong>'] }
      ]
    },
    'r8-vnutorna-energia': {
      title: 'Energía interna e intercambio de calor',
      summary: 'Energía interna de un cuerpo, transmisión del calor y cálculo del calor al calentar.',
      theory: [
        `<p>Todo cuerpo tiene <strong>energía interna</strong>. Está formada por las energías cinética y potencial de sus partículas (átomos y moléculas).
       Cuanto más rápido se mueven las partículas, más caliente está el cuerpo y mayor es su energía interna.</p>`,
        `<p><strong>El calor</strong> es la energía que intercambian los cuerpos por una diferencia de temperatura. Siempre fluye
       desde el cuerpo más caliente hacia el más frío, hasta que las temperaturas se igualan. El calor no es una propiedad de un cuerpo, sino energía transferida.</p>`,
        `<ul>
         <li><strong>Conducción:</strong> el calor se pasa de partícula en partícula, por ejemplo una cucharilla en una taza de té caliente.</li>
         <li><strong>Convección:</strong> el aire o el agua calentados suben, por ejemplo cerca de un radiador.</li>
         <li><strong>Radiación:</strong> el calor se propaga incluso sin sustancia, por ejemplo desde el Sol.</li>
       </ul>`,
        `<p>La cantidad de calor necesaria para calentar se calcula con $Q = m\\cdot c\\cdot \\Delta t$. El valor $c$ es el calor específico:
       para el agua $c = 4200\\,\\text{J/(kg\\cdot K)}$. La variación de temperatura $\\Delta t$ es la diferencia entre la temperatura final y la inicial.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: 'El calor fluye de un cuerpo más caliente a uno más frío. Se transmite por conducción, convección o radiación.' }
      ],
      examples: [
        { task: '¿Cuánto calor se necesita para calentar $m = 2\\,\\text{kg}$ de agua en 10 °C? Usa $c = 4200\\,\\text{J/(kg\\cdot K)}$.',
          steps: ['$Q = m\\cdot c\\cdot \\Delta t = 2\\cdot 4200\\cdot 10$.', '<strong>Resultado: Q = 84 000 J = 84 kJ</strong>'] },
        { task: 'Una taza de té caliente se enfría poco a poco. ¿Cómo cede calor al entorno?',
          steps: ['El calor pasa del té a través de la pared de la taza por conducción.', 'El aire caliente sobre la taza sube, eso es convección. El calor también se emite por radiación.', '<strong>Resultado: por conducción, convección y radiación.</strong>'] }
      ]
    },
    'r8-naboj': {
      title: 'Carga eléctrica',
      summary: 'Dos clases de carga, electrización por frotamiento y la carga del electrón.',
      theory: [
        `<p>Todos los cuerpos están formados por átomos. Un átomo tiene un núcleo cargado positivamente y electrones cargados negativamente.
       <strong>La carga eléctrica</strong> es una propiedad de los cuerpos que se manifiesta como una fuerza. Se designa con $Q$ y su unidad es el culombio (C).</p>`,
        `<p>Existen dos clases de carga: positiva y negativa. Las cargas iguales se repelen y las opuestas se atraen.
       Un cuerpo neutro tiene el mismo número de cargas positivas que negativas.</p>`,
        `<p><strong>Electrización por frotamiento:</strong> al frotar, los electrones pasan de un cuerpo al otro. El cuerpo que gana electrones
       queda cargado negativamente. El que los pierde queda cargado positivamente. La carga no se puede crear ni destruir, solo transferir.</p>`,
        `<ul>
         <li>La carga elemental $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$ la lleva un electrón.</li>
         <li>La carga de un cuerpo con $n$ electrones de más es $Q = -n\\,e$; con $n$ electrones de menos es $Q = +n\\,e$.</li>
       </ul>`,
        { fig: 'r6r9-naboj', caption: 'Las cargas iguales se repelen y las opuestas se atraen.' }
      ],
      examples: [
        { task: 'Un cuerpo ha perdido 3 electrones. ¿Cuál es su carga en múltiplos de la carga elemental $e$?',
          steps: ['La pérdida de electrones crea un defecto de carga negativa, así que el cuerpo es positivo.', 'La carga es $Q = +3e$.', '<strong>Resultado: +3e</strong>'] },
        { task: 'Dos bolitas se repelen después de tocarse. ¿Qué significa esto para sus cargas?',
          steps: ['La repulsión solo ocurre entre cargas del mismo signo.', '<strong>Resultado: ambas bolitas tienen cargas del mismo signo.</strong>'] }
      ]
    },
    'r8-prud-napatie': {
      title: 'Corriente eléctrica y tensión',
      summary: 'La corriente como carga por tiempo, la tensión como impulso que mueve las cargas y cómo se miden.',
      theory: [
        `<p><strong>La corriente eléctrica</strong> es el movimiento ordenado de partículas cargadas, en los metales sobre todo de electrones. Se designa con $I$ y su unidad es el amperio (A).
       Si una carga $Q$ atraviesa la sección de un conductor en un tiempo $t$, la corriente es $I = \\frac{Q}{t}$. Por tanto, $1\\,\\text{A} = 1\\,\\text{C/s}$.</p>`,
        `<p>Por convenio, el sentido de la corriente se indica como el movimiento de la carga positiva desde el polo positivo de la fuente hasta el negativo. Los electrones se mueven en sentido contrario.</p>`,
        `<p><strong>La tensión eléctrica</strong> $U$ es la diferencia de potencial que impulsa a los electrones en un circuito. Una fuente (una pila) la crea entre sus bornes.
       La unidad es el voltio (V).</p>`,
        `<ol>
         <li>La corriente se mide con un <strong>amperímetro</strong>, conectado en serie con el aparato.</li>
         <li>La tensión se mide con un <strong>voltímetro</strong>, conectado en paralelo con el aparato.</li>
       </ol>`,
        { fig: 'r6r9-merania', caption: 'El amperímetro se conecta en serie con el aparato, y el voltímetro en paralelo con él.' }
      ],
      examples: [
        { task: 'Una carga $Q = 20\\,\\text{C}$ atraviesa un conductor en $t = 10\\,\\text{s}$. ¿Cuál es la corriente?',
          steps: ['$I = \\frac{Q}{t} = \\frac{20}{10}$.', '<strong>Resultado: I = 2 A</strong>'] },
        { task: '¿Qué instrumento mide la corriente y cuál mide la tensión, y cómo se conectan?',
          steps: ['Un amperímetro conectado en serie mide la corriente.', 'Un voltímetro conectado en paralelo mide la tensión.', '<strong>Resultado: el amperímetro mide la corriente y el voltímetro mide la tensión.</strong>'] }
      ]
    },
    'r8-odpor': {
      title: 'Circuito eléctrico y resistencia eléctrica',
      summary: 'De qué se compone un circuito y cómo la resistencia frena la corriente.',
      theory: [
        `<p>Un <strong>circuito eléctrico</strong> es un camino cerrado por el que circula la corriente. Consta de una fuente, aparatos, conductores y un interruptor.
       Si el circuito está interrumpido (por ejemplo, con un interruptor abierto), no circula corriente.</p>`,
        `<p><strong>La resistencia eléctrica</strong> $R$ frena el movimiento de los electrones en un conductor. Es causada por los choques de los electrones con los átomos de la sustancia.
       Su unidad es el ohmio ($\\Omega$). La resistencia depende del material, la longitud, la sección y la temperatura del conductor.</p>`,
        `<p>La relación entre la tensión, la corriente y la resistencia es $R = \\frac{U}{I}$. Con la misma tensión, una resistencia mayor significa una corriente menor.</p>`,
        `<ol>
         <li>Determina la tensión $U$ en voltios y la corriente $I$ en amperios.</li>
         <li>Calcula la resistencia con $R = \\frac{U}{I}$.</li>
       </ol>`,
        { fig: 'r6r9-odpor', caption: 'Con la misma tensión, una resistencia mayor deja pasar menos corriente: a 12 V la corriente es 6 A con 2 Ω y 2 A con 6 Ω.' }
      ],
      examples: [
        { task: 'Una bombilla con tensión $U = 12\\,\\text{V}$ tiene una corriente $I = 2\\,\\text{A}$. ¿Cuál es su resistencia?',
          steps: ['$R = \\frac{U}{I} = \\frac{12}{2}$.', '<strong>Resultado: R = 6 Ω</strong>'] },
        { task: '¿Qué conductor frena más la corriente: el de mayor resistencia o el de menor resistencia?',
          steps: ['Una resistencia mayor significa que los electrones pasan con más dificultad.', '<strong>Resultado: el conductor de mayor resistencia.</strong>'] }
      ]
    },
    'r8-vodice': {
      title: 'Conductores y aislantes eléctricos',
      summary: 'Qué sustancias conducen la corriente y por qué, y para qué se usan.',
      theory: [
        `<p>Un <strong>conductor</strong> es una sustancia en la que los electrones pueden moverse libremente. Los conductores típicos son los metales, por ejemplo el cobre, el aluminio
       y el hierro, y el grafito. Un <strong>aislante</strong> (no conductor) tiene los electrones firmemente ligados y no conduce la corriente: por ejemplo el plástico, el caucho, el vidrio o la madera seca.</p>`,
        `<ul>
         <li>Metal: buen conductor, se usa para conducir la corriente.</li>
         <li>Plástico y caucho: aislantes, se usan como recubrimiento de los conductores.</li>
         <li>Una disolución de sal en agua: conduce la corriente, porque en ella se mueven partículas cargadas.</li>
         <li>El agua destilada pura: prácticamente un aislante.</li>
       </ul>`,
        `<p>Usamos conductores para transmitir la corriente, por ejemplo el cobre en los cables. Los aislantes los recubren para que no toquemos un conductor con tensión
       y para que la corriente no circule por donde no debe.</p>`,
        `<p>Los semiconductores, por ejemplo el silicio, están entre los conductores y los aislantes. Conducen la corriente solo bajo ciertas condiciones, por eso se usan en electrónica.</p>`,
        { fig: 'r6r9-vodice', caption: 'Los conductores tienen electrones libres y conducen la corriente. Los aislantes tienen electrones firmemente ligados y no conducen la corriente.' }
      ],
      examples: [
        { task: '¿Por qué un cable de cobre está recubierto de plástico?',
          steps: ['El cobre conduce la corriente, el plástico no es conductor.', 'El plástico evita el contacto con el conductor y la fuga de corriente.', '<strong>Resultado: el plástico es un aislante y protege de lesiones.</strong>'] },
        { task: '¿Conduce la corriente el agua salada?',
          steps: ['La sal se disuelve en el agua y forma partículas cargadas que pueden transportar carga.', '<strong>Resultado: la disolución de sal conduce la corriente, es un conductor.</strong>'] }
      ]
    },
    'r8-bezpecnost': {
      title: 'Seguridad al usar aparatos eléctricos',
      summary: 'Normas que protegen de las lesiones por corriente eléctrica y del fuego.',
      theory: [
        `<p>La corriente eléctrica que atraviesa el cuerpo puede causar quemaduras, fallos del corazón o la muerte. Por eso seguimos normas de seguridad.
       El peligro es mayor cuando la piel está mojada, porque el agua aumenta la conducción de la corriente.</p>`,
        `<ul>
         <li>No toques aparatos eléctricos con las manos mojadas ni sobre el suelo mojado.</li>
         <li>No uses cables ni enchufes dañados; nunca tires del cable.</li>
         <li>No introduzcas objetos en los enchufes, sobre todo metálicos.</li>
         <li>Si un aparato falla, desconéctalo de la toma de corriente y llama a un profesional.</li>
       </ul>`,
        `<p>Un <strong>fusible</strong> o un <strong>interruptor automático</strong> corta el circuito cuando la corriente es demasiado alta, por ejemplo en un cortocircuito o una sobrecarga.
       De este modo evitan que los conductores se sobrecalienten y provoquen un incendio.</p>`,
        `<p><strong>La puesta a tierra:</strong> las carcasas metálicas de los aparatos se conectan a tierra. En caso de fallo, la carcasa no está bajo tensión y tocarla no es peligroso.</p>`
      ],
      examples: [
        { task: 'Pedro sacó un enchufe de la toma con la mano mojada. ¿Qué es peligroso en este caso?',
          steps: ['El agua en la piel aumenta la conducción, y la corriente puede atravesar el cuerpo.', '<strong>Resultado: existe riesgo de descarga eléctrica. Nunca sujetes un enchufe con las manos mojadas.</strong>'] },
        { task: '¿Qué elemento protege un conductor del sobrecalentamiento durante un cortocircuito?',
          steps: ['Durante un cortocircuito la corriente es muy grande y el conductor se calienta rápidamente.', 'El fusible se funde o el interruptor automático desconecta el circuito.', '<strong>Resultado: un fusible o un interruptor automático.</strong>'] }
      ]
    },
    'r9-obvody': {
      title: 'Circuitos eléctricos y sus propiedades',
      summary: 'Una fuente, un aparato, un interruptor y conductores en un circuito cerrado.',
      theory: [
        `<p>Un <strong>circuito eléctrico</strong> consta de una fuente (pila, acumulador), aparatos (bombilla, resistor, motor), un interruptor y conductores.
       La corriente circula solo cuando el circuito está <strong>cerrado</strong>, es decir, cuando se puede recorrer todo el bucle desde un polo de la fuente hasta el otro.</p>`,
        `<ul>
         <li><strong>La fuente</strong> suministra energía a las partículas cargadas.</li>
         <li><strong>El aparato</strong> convierte la energía eléctrica en otra forma: luz, calor o movimiento.</li>
         <li><strong>El interruptor</strong> cierra o abre el circuito.</li>
         <li><strong>Los conductores</strong> unen los componentes en un solo conjunto.</li>
       </ul>`,
        `<p>Dibujamos un circuito como un <strong>esquema</strong>, en el que cada componente tiene su propio símbolo. El esquema muestra cómo están conectados los componentes,
       no cómo se ven.</p>`,
        `<p>Cuando abrimos el interruptor, el circuito se interrumpe: no circula corriente y la bombilla se apaga. Un circuito funciona solo cuando está completamente cerrado.</p>`,
        { fig: 'obr-obvod', caption: 'Conexión en serie y en paralelo de aparatos a una misma fuente.' }
      ],
      examples: [
        { task: '¿Qué ocurre con la bombilla cuando abrimos el interruptor?',
          steps: ['El circuito se interrumpe y no circula corriente.', '<strong>Resultado: la bombilla se apaga.</strong>'] },
        { task: '¿Qué componente del circuito convierte la energía eléctrica en luz?',
          steps: ['La luz se produce en el filamento de la bombilla.', '<strong>Resultado: la bombilla (un aparato).</strong>'] }
      ]
    },
    'r9-zapojenie': {
      title: 'Conexión en serie y en paralelo',
      summary: 'Cómo cambia la resistencia total cuando los resistores se conectan uno tras otro o uno al lado del otro.',
      theory: [
        `<p>Dos resistores pueden conectarse <strong>en serie</strong> (uno tras otro) o <strong>en paralelo</strong> (uno al lado del otro).
       En serie, la corriente debe atravesar ambos resistores. En la conexión en paralelo, la corriente se divide en dos ramas.</p>`,
        `<ul>
         <li><strong>Conexión en serie:</strong> la corriente es la misma en todo el circuito, y la tensión se reparte entre los resistores.
             La resistencia total es la suma: $R = R_1 + R_2$.</li>
         <li><strong>Conexión en paralelo:</strong> la tensión es la misma en ambas ramas, y la corriente se divide.
             Se cumple $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$.</li>
       </ul>`,
        `<p>En una conexión en paralelo la resistencia total es siempre <strong>menor</strong> que la menor de las resistencias de las ramas. Hay una razón lógica:
       cada rama adicional es otro camino para la corriente. Por eso los aparatos conectados en paralelo en casa toman de la red una corriente mayor.</p>`,
        `<ol>
         <li>Determina si los resistores están uno tras otro (serie) o uno al lado del otro (paralelo).</li>
         <li>En serie se suman las resistencias; en paralelo se suman sus inversos.</li>
       </ol>`,
        { fig: 'obr-obvod', caption: 'Conexión en serie y en paralelo de aparatos a una misma fuente.' }
      ],
      examples: [
        { task: 'Los resistores $R_1 = 6\\,\\Omega$ y $R_2 = 3\\,\\Omega$ están conectados en paralelo. ¿Cuál es la resistencia total?',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{6}+\\frac{2}{6}=\\frac{3}{6}$.', '$R=\\frac{6}{3}=2\\,\\Omega$.', '<strong>Resultado: R = 2 Ω</strong>'] },
        { task: 'Los resistores $R_1 = 4\\,\\Omega$ y $R_2 = 5\\,\\Omega$ están conectados en serie. ¿Cuál es la resistencia total?',
          steps: ['En serie las resistencias se suman: $R = R_1 + R_2$.', '<strong>Resultado: R = 9 Ω</strong>'] }
      ]
    },
    'r9-vypocty': {
      title: 'Cálculo de la corriente, la tensión y la resistencia',
      summary: 'A partir de dos magnitudes conocidas calculamos la tercera.',
      theory: [
        `<p>En un circuito hay tres magnitudes básicas: la corriente $I$ (A), la tensión $U$ (V) y la resistencia $R$ (Ω). Si conocemos dos de ellas, podemos calcular la tercera.
       Las relaciones son $I=\\frac{U}{R}$, $U=I\\cdot R$ y $R=\\frac{U}{I}$.</p>`,
        `<ol>
         <li>Escribe lo que se da y lo que se busca.</li>
         <li>Elige la fórmula en la que la magnitud buscada está despejada.</li>
         <li>Sustituye las unidades V, A y Ω; al convertir, usa múltiplos.</li>
         <li>Comprueba las unidades del resultado.</li>
       </ol>`,
        `<p><strong>Cuidado con las unidades:</strong> $1\\,\\text{mA}=0{,}001\\,\\text{A}$ y $1\\,\\text{k}\\Omega=1000\\,\\Omega$. Si un valor está en miliamperios o kiloohmios,
       primero lo reescribe en la unidad básica.</p>`,
        { fig: 'r6r9-trojuholnik', caption: 'Tapa la magnitud buscada y lo que queda muestra la fórmula, por ejemplo U = I · R.' }
      ],
      examples: [
        { task: 'La tensión en un resistor de resistencia $R = 4\\,\\Omega$ es $U = 12\\,\\text{V}$. ¿Qué corriente circula por él?',
          steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Resultado: I = 3 A</strong>'] },
        { task: 'Un aparato toma una corriente $I = 0{,}5\\,\\text{A}$ con una tensión $U = 230\\,\\text{V}$. ¿Cuál es su resistencia?',
          steps: ['$R=\\frac{U}{I}=\\frac{230}{0{,}5}$.', 'División entre un número decimal: $\\frac{230}{0{,}5}=\\frac{460}{1}$.', '<strong>Resultado: R = 460 Ω</strong>'] }
      ]
    },
    'r9-ohmov-zakon': {
      title: 'Ley de Ohm',
      summary: 'La corriente es proporcional a la tensión e inversamente proporcional a la resistencia.',
      theory: [
        `<p><strong>La ley de Ohm</strong> establece: la corriente que circula por un conductor es directamente proporcional a la tensión e inversamente proporcional a la resistencia.
       Se escribe como $I=\\frac{U}{R}$, a temperatura constante del conductor.</p>`,
        `<ul>
         <li>Con resistencia constante: el doble de tensión da el doble de corriente.</li>
         <li>Con tensión constante: el doble de resistencia da la mitad de corriente.</li>
       </ul>`,
        `<p>La dependencia de la corriente respecto a la tensión, para una resistencia constante, es en la gráfica una <strong>recta que pasa por el origen</strong>.
       Una recta más inclinada significa una resistencia menor, porque con la misma tensión circula una corriente mayor.</p>`,
        `<p>La ley se cumple exactamente en los conductores metálicos a temperatura constante. Cuando un metal se calienta mucho, su resistencia aumenta y la dependencia deja de ser lineal.</p>`,
        { fig: 'obr-ohm', caption: 'Con resistencia constante, la gráfica de tensión en función de corriente es una recta que pasa por el origen.' }
      ],
      examples: [
        { task: 'La tensión en un resistor aumentó de $4\\,\\text{V}$ a $12\\,\\text{V}$. La resistencia no cambió. ¿Cuántas veces aumentó la corriente?',
          steps: ['La razón entre las tensiones es $\\frac{12}{4}=3$.', 'La corriente es directamente proporcional a la tensión, así que también aumenta $3$ veces.', '<strong>Resultado: 3 veces</strong>'] },
        { task: 'Con una tensión de $230\\,\\text{V}$, un resistor toma una corriente de $2\\,\\text{A}$. ¿Qué corriente toma con el doble de resistencia y la misma tensión?',
          steps: ['La resistencia se duplica, y la corriente es inversamente proporcional a la resistencia.', '$I_2 = \\frac{I_1}{2} = \\frac{2}{2}$.', '<strong>Resultado: 1 A</strong>'] }
      ]
    },
    'r9-praca-vykon': {
      title: 'Trabajo eléctrico y potencia eléctrica',
      summary: 'Cuánta energía consume un aparato con el tiempo y cómo se calcula en kWh.',
      theory: [
        `<p><strong>La potencia eléctrica</strong> es $P=U\\cdot I$ y su unidad es el vatio (W). Indica cuánta energía convierte el aparato por segundo.
       Si conocemos la resistencia, también se cumple $P=I^2\\,R$ o $P=\\frac{U^2}{R}$.</p>`,
        `<p><strong>El trabajo eléctrico</strong> (energía consumida) es $W=P\\cdot t=U\\cdot I\\cdot t$, donde $t$ es el tiempo en segundos. La unidad es el julio (J),
       porque $1\\,\\text{W}\\cdot 1\\,\\text{s}=1\\,\\text{J}$.</p>`,
        `<p>En los hogares la energía se factura en <strong>kilovatios hora</strong> (kWh). Se calcula como la potencia en kilovatios multiplicada por el tiempo en horas:
       $E = P\\cdot t$, donde $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<ol>
         <li>Potencia en kilovatios: $1000\\,\\text{W} = 1\\,\\text{kW}$.</li>
         <li>Energía en kWh: potencia en kW multiplicada por el tiempo en horas.</li>
       </ol>`
      ],
      examples: [
        { task: 'Una bombilla está conectada a una tensión de $230\\,\\text{V}$ y por ella circula una corriente de $0{,}5\\,\\text{A}$. ¿Cuál es su potencia?',
          steps: ['$P = U\\cdot I = 230\\cdot 0{,}5$.', '<strong>Resultado: P = 115 W</strong>'] },
        { task: 'Una lavadora tiene una potencia de $2\\,\\text{kW}$ y funciona durante $1{,}5\\,\\text{h}$. ¿Cuánta energía consume en kWh?',
          steps: ['$E = P\\cdot t = 2\\cdot 1{,}5$.', '<strong>Resultado: E = 3 kWh</strong>'] }
      ]
    },
    'r9-magnetizmus': {
      title: 'Campo magnético y efectos magnéticos de la corriente eléctrica',
      summary: 'Alrededor de un cable con corriente se forma un campo magnético, cuyo sentido se halla con la regla de la mano derecha.',
      theory: [
        `<p>Alrededor de un conductor por el que circula una corriente eléctrica se forma un <strong>campo magnético</strong>. La relación entre electricidad y magnetismo
       fue descubierta en 1820 por el físico danés Ørsted: la aguja de una brújula se desvió al conectar la corriente en un cable cercano.</p>`,
        `<p>La <strong>dirección del campo</strong> se determina con la regla de la mano derecha: el pulgar apunta en el sentido de la corriente y los dedos doblados
       indican el sentido de las líneas de campo magnético alrededor del conductor. Si invertimos la corriente, también se invierte el sentido del campo.</p>`,
        `<p>Si enrollamos el conductor en una <strong>bobina</strong>, los campos de las espiras se suman y dentro de la bobina se forma un campo más intenso.
       Aumentamos la intensidad del campo con una corriente mayor o con un mayor número de espiras.</p>`,
        `<ul>
         <li>Sin corriente no hay campo magnético alrededor de un cable.</li>
         <li>Un campo magnético ejerce fuerza sobre imanes y sobre otros conductores por los que circula corriente.</li>
         <li>El campo es más débil cuanto más lejos está del cable.</li>
       </ul>`,
        { fig: 'obr-magnet-vodic', caption: 'Alrededor de un conductor con corriente hay un campo magnético en forma de circunferencias concéntricas alrededor del conductor.' }
      ],
      examples: [
        { task: '¿Cómo cambia el sentido del campo magnético alrededor de un cable si invertimos el sentido de la corriente?',
          steps: ['El sentido del campo lo determina el sentido de la corriente (regla de la mano derecha).', '<strong>Resultado: el sentido del campo se invierte.</strong>'] },
        { task: '¿Por qué se desvía la aguja de una brújula cerca de un cable con corriente?',
          steps: ['La aguja de la brújula es un pequeño imán que gira en un campo magnético.', '<strong>Resultado: el campo magnético alrededor del cable con corriente actúa sobre la aguja.</strong>'] }
      ]
    },
    'r9-elektromagnet': {
      title: 'Electroimán y motor eléctrico',
      summary: 'Una bobina con núcleo como imán temporal, y un motor que convierte la energía eléctrica en movimiento.',
      theory: [
        `<p>Un <strong>electroimán</strong> es una bobina con núcleo de hierro dulce. Cuando la corriente circula por la bobina, el núcleo se imanta.
       Al desconectar la corriente, el magnetismo desaparece. Aumentamos la fuerza de un electroimán con una corriente mayor o con más espiras.</p>`,
        `<p>Un <strong>motor eléctrico</strong> convierte la energía eléctrica en energía cinética (mecánica). Aprovecha la fuerza que un campo magnético ejerce sobre un conductor con corriente:
       una bobina en un campo magnético gira.</p>`,
        `<ul>
         <li>Los electroimanes se usan en timbres, relés e imanes de elevación en los desguaces.</li>
         <li>Los motores eléctricos mueven lavadoras, taladros y ventiladores.</li>
       </ul>`,
        `<ol>
         <li>La corriente circula por la bobina del motor.</li>
         <li>El campo magnético ejerce una fuerza sobre los cables de la bobina.</li>
         <li>La bobina gira.</li>
         <li>El conmutador invierte el sentido de la corriente para que la bobina siga girando.</li>
       </ol>`,
        { fig: 'r6r9-elektromagnet', caption: 'Una bobina con núcleo de hierro es magnética solo mientras circula corriente por ella.' }
      ],
      examples: [
        { task: '¿Por qué un electroimán en un desguace levanta chatarra de hierro, pero la suelta al desconectar la corriente?',
          steps: ['Cuando hay corriente, el núcleo es magnético y atrae el hierro.', 'Al desconectar la corriente, el campo magnético desaparece.', '<strong>Resultado: el magnetismo del electroimán depende de la corriente.</strong>'] },
        { task: '¿Qué conversión de energía tiene lugar en el motor eléctrico de una lavadora?',
          steps: ['La energía eléctrica pasa por las bobinas del motor.', 'El tambor empieza a girar.', '<strong>Resultado: la energía eléctrica se convierte en energía cinética (mecánica).</strong>'] }
      ]
    },
    'r9-premeny-zdroje': {
      title: 'Transformaciones de la energía y fuentes de energía',
      summary: 'Cómo cambia la energía en las centrales y en qué se diferencian las fuentes renovables de las no renovables.',
      theory: [
        `<p>La energía puede convertirse de una forma en otra. Las fuentes de energía se dividen en <strong>renovables</strong>, que se reponen de forma natural
       (sol, viento, agua, biomasa, energía geotérmica), y <strong>no renovables</strong>, cuyas reservas se agotan
       (carbón, petróleo, gas natural, combustible nuclear).</p>`,
        `<ul>
         <li><strong>Central de carbón:</strong> energía química del combustible, térmica, mecánica (turbina), eléctrica.</li>
         <li><strong>Central hidroeléctrica:</strong> energía potencial del agua, cinética, mecánica (turbina), eléctrica.</li>
         <li><strong>Panel solar:</strong> la energía radiante del Sol se convierte en energía eléctrica.</li>
         <li><strong>Central eólica:</strong> energía cinética del viento, mecánica, eléctrica.</li>
       </ul>`,
        `<p>En cada conversión una parte de la energía se transforma en calor y se dispersa en el entorno. La energía total se conserva,
       pero la energía útil disminuye.</p>`,
        { fig: 'r6r9-elektrarna', caption: 'Una central de carbón convierte la energía química del combustible, paso a paso, en energía térmica, mecánica y eléctrica.' }
      ],
      examples: [
        { task: '¿Qué conversión de energía realiza un panel solar?',
          steps: ['El panel recibe energía radiante del Sol.', 'La convierte en energía eléctrica.', '<strong>Resultado: energía radiante en energía eléctrica.</strong>'] },
        { task: '¿Por qué el carbón es una fuente no renovable?',
          steps: ['Se formó durante millones de años a partir de plantas.', 'Lo consumimos más rápido de lo que se puede reponer.', '<strong>Resultado: es no renovable, porque no se puede reponer a tiempo.</strong>'] }
      ]
    },
    'r9-energia-priroda': {
      title: 'Energía en la naturaleza y la técnica',
      summary: 'El rendimiento de un dispositivo y la energía que no puede aprovecharse por completo.',
      theory: [
        `<p>El <strong>rendimiento</strong> de un dispositivo indica qué parte de la energía suministrada se convierte en trabajo o energía útil:
       $\\eta = \\frac{E_u}{E_d}\\cdot 100\\,\\%$, donde $E_u$ es la energía útil y $E_d$ la energía suministrada.</p>`,
        `<p>El rendimiento siempre es menor que el 100 %. Una parte de la energía se transforma en calor, que se dispersa en el entorno.
       Una bombilla incandescente tiene un rendimiento bajo, porque emite la mayor parte de su energía como calor.</p>`,
        `<ul>
         <li>Una bombilla LED es más eficiente que una clásica, porque se transforma menos energía en calor.</li>
         <li>En el motor de combustión de un coche se pierde como calor una gran parte de la energía de la combustión del combustible.</li>
       </ul>`,
        `<p>La energía no se pierde en la naturaleza, solo se dispersa como calor, que luego es difícil de aprovechar. Por eso las personas intentan aumentar el rendimiento de las máquinas.</p>`,
        { fig: 'r6r9-ucinnost', caption: 'El rendimiento es el cociente entre la energía útil y la energía suministrada. El resto de la energía se pierde como calor.' }
      ],
      examples: [
        { task: 'Un motor recibe 400 J de energía y convierte 100 J en movimiento. ¿Cuál es su rendimiento?',
          steps: ['$\\eta = \\frac{100}{400}\\cdot 100\\,\\%$.', '$\\eta = 0{,}25\\cdot 100\\,\\% = 25\\,\\%$.', '<strong>Resultado: 25 %</strong>'] },
        { task: 'Un calefactor con un rendimiento de $90\\,\\%$ recibe $1000\\,\\text{J}$. ¿Cuánta energía se pierde?',
          steps: ['La energía útil es $0{,}9\\cdot 1000 = 900\\,\\text{J}$.', 'El resto se pierde: $1000 - 900 = 100\\,\\text{J}$.', '<strong>Resultado: 100 J</strong>'] }
      ]
    },
    'r9-opakovanie': {
      title: 'Repaso y problemas prácticos de física',
      summary: 'Resumen de las fórmulas de noveno curso y un método para los problemas prácticos.',
      theory: [
        `<p>En cada problema, primero escribe lo que se da y lo que se busca. Después elige la fórmula, convierte las unidades y sustituye.
       Al final comprueba las unidades del resultado y si el valor es razonable.</p>`,
        `<ol>
         <li>Identifica el fenómeno: circuito eléctrico, energía, potencia, magnetismo.</li>
         <li>Elige la fórmula correcta.</li>
         <li>Convierte las unidades (mA a A, kW a W, minutos a segundos, kWh a J).</li>
         <li>Sustituye, calcula y comprueba las unidades.</li>
       </ol>`,
        `<ul>
         <li>Ley de Ohm: $I=\\frac{U}{R}$, $U=I\\cdot R$, $R=\\frac{U}{I}$.</li>
         <li>Potencia y trabajo: $P=U\\cdot I$, $W=P\\cdot t$.</li>
         <li>Energía potencial: $E_p=m\\,g\\,h$, con $g\\approx 10\\,\\text{m/s}^2$.</li>
         <li>Rendimiento: $\\eta=\\frac{E_u}{E_d}\\cdot 100\\,\\%$.</li>
       </ul>`
      ],
      examples: [
        { task: 'Un motor de potencia $1500\\,\\text{W}$ funciona durante $2\\,\\text{h}$. ¿Cuánta energía consume en kWh?',
          steps: ['Potencia en kilovatios: $1500\\,\\text{W} = 1{,}5\\,\\text{kW}$.', '$E = P\\cdot t = 1{,}5\\cdot 2 = 3$.', '<strong>Resultado: E = 3 kWh</strong>'] },
        { task: 'Un cuerpo de masa $3\\,\\text{kg}$ está a una altura de $4\\,\\text{m}$. ¿Cuál es su energía potencial si $g = 10\\,\\text{m/s}^2$?',
          steps: ['$E_p = m\\,g\\,h = 3\\cdot 10\\cdot 4$.', '<strong>Resultado: E_p = 120 J</strong>'] }
      ]
    }
  }
});
