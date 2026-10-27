/* Spanish: lessons of grades 4–6 (js/rocniky/r4.js, r5.js, r6.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('es', {
  lessons: {
    'r4-svetlo-tien': {
      title: 'Luz, sombra y fuentes de luz',
      summary: 'Distingues una fuente de luz de un objeto iluminado y explicas cómo se forma una sombra.',
      theory: [
        `<p>La luz viaja en línea recta. Un objeto que emite luz por sí mismo es una <strong>fuente de luz</strong>, por ejemplo el sol, una bombilla o una vela.
       La Luna, una mesa o un libro no emiten luz. Solo la reflejan, y por eso podemos verlos.</p>`,
        `<p>Cuando la luz llega a un objeto <strong>opaco</strong>, detrás de él se forma una <strong>sombra</strong>. La luz no puede llegar detrás del objeto,
       porque no puede rodearlo.</p>`,
        `<ul>
         <li>Los objetos opacos, por ejemplo la madera o la piedra, detienen la luz y proyectan una sombra oscura.</li>
         <li>Los objetos transparentes, por ejemplo el vidrio limpio o el agua, dejan pasar la luz. La sombra detrás de ellos es débil o no existe.</li>
       </ul>`,
        `<p>El tamaño de la sombra depende de la distancia. Cuando el objeto se acerca a la fuente de luz, la sombra se hace más grande.
       Cuando se aleja de la fuente, la sombra se hace más pequeña.</p>`,
        { fig: 'obr-tien', caption: 'Se forma una sombra donde la luz no puede llegar, porque un cuerpo opaco la bloquea.' }
      ],
      examples: [
        { task: '¿Qué objeto es una fuente de luz: una vela, un libro o un árbol?',
          steps: ['Una fuente de luz emite luz. Un libro y un árbol solo reflejan la luz.', 'Una vela arde y emite luz.', '<strong>Resultado: la vela</strong>'] },
        { task: '¿Por qué hay una sombra detrás de un árbol en un día soleado?',
          steps: ['El sol es una fuente de luz.', 'El árbol es opaco, así que la luz no lo atraviesa.', '<strong>Resultado: la luz no llega detrás del árbol, por eso allí se forma una sombra.</strong>'] }
      ]
    },
    'r4-zvuk': {
      title: 'El sonido y su origen',
      summary: 'Explicas que el sonido lo producen los cuerpos que vibran y distingues el tono de la sonoridad.',
      theory: [
        `<p>El sonido se produce por <strong>vibración</strong>, es decir, por un cuerpo que se mueve de un lado a otro. Cuando golpeamos un diapasón o pulsamos una cuerda tensa de guitarra,
       el cuerpo vibra rápidamente y pone en movimiento el aire que lo rodea.</p>`,
        `<p>La vibración llega a nuestros oídos a través del aire en forma de <strong>onda sonora</strong>. El sonido necesita un medio material, por ejemplo aire, agua o un sólido.
       No se propaga en el vacío, por eso en el espacio exterior no se oyen las explosiones.</p>`,
        `<ul>
         <li><strong>El tono</strong> depende de la velocidad de vibración. Una vibración más rápida suena más agudo.</li>
         <li><strong>La sonoridad</strong> depende del tamaño de las vibraciones. Una oscilación mayor suena más fuerte.</li>
       </ul>`,
        `<p>En el aire, el sonido viaja a unos $340\\,\\text{m/s}$. La luz viaja mucho más rápido, casi al instante.
       Por eso durante una tormenta primero vemos el relámpago y solo después oímos el trueno.</p>`,
        { fig: 'r1r5-zvuk-vlna', caption: 'Un tono más agudo tiene una vibración más rápida (un periodo más corto). Un sonido más fuerte tiene un vaivén mayor, es decir, una amplitud mayor.' }
      ],
      examples: [
        { task: '¿Por qué durante una tormenta primero vemos el relámpago y solo después oímos el trueno?',
          steps: ['La luz viaja casi al instante.', 'El sonido viaja por el aire mucho más despacio.', '<strong>Resultado: el sonido nos llega más tarde que la luz.</strong>'] },
        { task: '¿Qué debe hacer un cuerpo para producir un sonido?',
          steps: ['El sonido se produce por la vibración de un cuerpo.', '<strong>Resultado: el cuerpo debe vibrar.</strong>'] }
      ]
    },
    'r4-magnety': {
      title: 'Propiedades magnéticas de los objetos',
      summary: 'Distingues los objetos que un imán atrae de los que no atrae.',
      theory: [
        `<p>Un imán <strong>atrae</strong> objetos hechos de hierro, níquel y cobalto, por ejemplo un clavo o un clip de acero. A estos metales los llamamos magnéticos.
       La madera, el plástico, el vidrio y la mayoría de los demás metales, por ejemplo el cobre, no son atraídos por un imán.</p>`,
        `<p>Cada imán tiene dos <strong>polos</strong>: norte y sur. Los polos opuestos se atraen entre sí, y los polos iguales se repelen.</p>`,
        `<p>El efecto magnético atraviesa también el papel o una capa delgada de plástico. Por eso un imán puede atraer un clavo que está debajo de una hoja de papel.</p>`,
        `<p>Una propiedad de un objeto la averiguamos con un experimento sencillo: acercamos un imán y observamos si el objeto se mueve.</p>`,
        { fig: 'obr-magnet', caption: 'Las líneas del campo de un imán de barra salen del polo norte N y entran en el polo sur S.' }
      ],
      examples: [
        { task: '¿Qué objetos atrae un imán: un clavo, una goma y una regla de plástico?',
          steps: ['El clavo es de hierro, y el imán lo atrae.', 'La goma y la regla de plástico no son atraídas por un imán.', '<strong>Resultado: solo el clavo.</strong>'] },
        { task: 'Dos imanes se acercan con los polos opuestos enfrentados. ¿Qué pasa?',
          steps: ['Los polos opuestos se atraen.', '<strong>Resultado: los imanes se atraen entre sí.</strong>'] }
      ]
    },
    'r4-elektricke-zariadenia': {
      title: 'Sencillos aparatos eléctricos',
      summary: 'Conoces las partes de un circuito eléctrico sencillo y sabes para qué sirve cada una.',
      theory: [
        `<p>Un circuito eléctrico sencillo está formado por una <strong>fuente</strong> (una batería), un <strong>consumidor</strong> (una bombilla, un timbre, un ventilador),
       <strong>conductores</strong> (normalmente cables de cobre) y un <strong>interruptor</strong>.</p>`,
        `<ul>
         <li>La fuente suministra energía eléctrica.</li>
         <li>El consumidor convierte la energía eléctrica en otra forma, por ejemplo en luz, calor o movimiento.</li>
         <li>El interruptor cierra o abre el circuito.</li>
       </ul>`,
        `<p>La corriente eléctrica circula solo en un circuito <strong>cerrado</strong>. Si el circuito está interrumpido, por ejemplo por un interruptor abierto, la bombilla no se enciende.</p>`,
        `<p>Los conductores dejan pasar la corriente eléctrica, por ejemplo los metales. Los aislantes, por ejemplo el plástico o la goma, no la dejan pasar. Por eso los cables tienen una cubierta de plástico y los mangos de las herramientas son de goma.</p>`,
        { fig: 'r1r5-obvod-spinac', caption: 'Cuando el interruptor está abierto, el circuito está interrumpido, no circula corriente y la bombilla no se enciende.' }
      ],
      examples: [
        { task: '¿Qué parte del circuito suministra energía?',
          steps: ['La fuente suministra energía eléctrica, y el consumidor la gasta.', '<strong>Resultado: la batería (la fuente).</strong>'] },
        { task: '¿Por qué la bombilla no se enciende después de apagar el interruptor?',
          steps: ['El interruptor abierto interrumpe el circuito.', 'En un circuito interrumpido no circula corriente.', '<strong>Resultado: la bombilla no se enciende, porque no circula corriente.</strong>'] }
      ]
    },
    'r4-energia': {
      title: 'La energía y su uso',
      summary: 'Reconoces en qué otra forma de energía se transforma la energía en aparatos habituales.',
      theory: [
        `<p><strong>La energía</strong> no se puede crear de la nada ni destruir. Solo cambia de una forma a otra. La unidad de energía es el julio, símbolo $\\text{J}$.</p>`,
        `<ul>
         <li><strong>Energía eléctrica</strong>: enchufe, batería, cargador.</li>
         <li><strong>Energía química</strong>: almacenada en una batería o en los alimentos.</li>
         <li><strong>Energía de movimiento</strong>: una persona que corre, un ventilador que gira.</li>
         <li><strong>Energía luminosa</strong>: el sol, una bombilla, una pantalla.</li>
         <li><strong>Energía térmica</strong>: agua caliente, un radiador caliente.</li>
         <li><strong>Energía sonora</strong>: música de un altavoz, una voz.</li>
       </ul>`,
        `<p>Los aparatos normalmente no convierten la energía en una sola forma. Una bombilla da luz, pero la mayor parte de su energía se convierte en calor. Por eso está caliente después de encenderla.</p>`,
        `<p>Un ventilador convierte la energía eléctrica en el movimiento de sus aspas. Un altavoz convierte la energía eléctrica en sonido.</p>`,
        { fig: 'r1r5-premeny-energie', caption: 'Un ventilador convierte la energía eléctrica en movimiento, una bombilla la convierte en luz y calor.' }
      ],
      examples: [
        { task: '¿Qué transformación de energía realiza un ventilador eléctrico?',
          steps: ['El ventilador es un consumidor de energía eléctrica.', 'El motor gira y las aspas se mueven.', '<strong>Resultado: la energía eléctrica se transforma en energía de movimiento.</strong>'] },
        { task: '¿Qué transformación de energía realiza una bombilla?',
          steps: ['La bombilla recibe energía eléctrica.', 'Emite luz y al mismo tiempo se calienta.', '<strong>Resultado: la energía eléctrica se transforma en luz y calor.</strong>'] }
      ]
    },
    'r4-bezpecnost': {
      title: 'Comportamiento seguro con aparatos eléctricos',
      summary: 'Sabes qué comportamiento con los aparatos eléctricos es seguro y cuál no.',
      theory: [
        `<p>La electricidad es útil, pero puede ser peligrosa. La corriente que atraviesa el cuerpo puede causar una lesión grave.
       Por eso maneja los aparatos eléctricos solo según las instrucciones de los adultos.</p>`,
        `<ol>
         <li>Nunca toques un enchufe ni una clavija con las manos mojadas.</li>
         <li>Desconecta un aparato sujetando la clavija, no el cable.</li>
         <li>Si el cable está dañado o hay cables al descubierto, no uses el aparato y avisa a un adulto.</li>
       </ol>`,
        `<p>El agua conduce muy bien la corriente eléctrica, por eso combinar agua con aparatos eléctricos es muy peligroso.
       No uses un secador de pelo, un cargador ni ningún otro aparato en el baño o cerca del agua.</p>`,
        `<p>Si ves a una persona que toca un cable con corriente, no la toques. Primero llama a un adulto o a los servicios de emergencia,
       para que se corte la corriente.</p>`
      ],
      examples: [
        { task: '¿Cómo se desconecta correctamente una plancha de la corriente?',
          steps: ['Tirar del cable puede dañar los hilos.', 'La forma correcta es sujetar la clavija y sacarla.', '<strong>Resultado: tiramos de la clavija, no del cable.</strong>'] },
        { task: '¿Puedes cargar el teléfono en un baño húmedo?',
          steps: ['El agua conduce bien la corriente eléctrica.', '<strong>Resultado: no, cargar en un lugar húmedo no es seguro.</strong>'] }
      ]
    },
    'r5-vlastnosti-latok': {
      title: 'Propiedades de las sustancias y de los cuerpos',
      summary: 'Distingues una sustancia de un cuerpo y conoces las propiedades básicas de los materiales.',
      theory: [
        `<p>Una <strong>sustancia</strong> es el material del que se compone algo, por ejemplo madera, hierro o agua.
       Un <strong>cuerpo</strong> es un objeto concreto hecho de una o varias sustancias, por ejemplo una mesa, una llave o una botella.</p>`,
        `<p>Las propiedades de las sustancias las descubrimos observando y midiendo: color, brillo, dureza, elasticidad, solubilidad en agua o si conducen el calor y la corriente eléctrica.</p>`,
        `<ul>
         <li><strong>Dureza</strong>: resistencia a ser rayado.</li>
         <li><strong>Elasticidad</strong>: capacidad de volver a la forma original después de ser apretado o doblado.</li>
         <li><strong>Solubilidad</strong>: capacidad de disolverse en agua. La sal se disuelve, la arena no.</li>
       </ul>`,
        `<p>Los cuerpos hechos de la misma sustancia pueden tener formas y tamaños distintos. Sin embargo, las propiedades de la sustancia no cambian: dos trozos de madera tienen las mismas propiedades de la madera.</p>`
      ],
      examples: [
        { task: '¿Es una llave un cuerpo o una sustancia?',
          steps: ['Una llave es un objeto concreto.', '<strong>Resultado: un cuerpo, hecho de metal.</strong>'] },
        { task: '¿Qué sustancia se disuelve en agua: la sal o la arena?',
          steps: ['La sal se disuelve en agua.', 'La arena no se disuelve en agua.', '<strong>Resultado: la sal.</strong>'] }
      ]
    },
    'r5-skupenstva': {
      title: 'Sustancias sólidas, líquidas y gaseosas',
      summary: 'Comparas las sustancias sólidas, líquidas y gaseosas según su forma y su volumen.',
      theory: [
        `<p>Las sustancias se presentan en tres <strong>estados</strong> básicos: <strong>sólido</strong>, <strong>líquido</strong> y <strong>gaseoso</strong>.
       Los distinguimos según si tienen forma fija y volumen fijo.</p>`,
        `<ul>
         <li><strong>El sólido</strong>: forma y volumen fijos, por ejemplo una piedra o un cubito de hielo.</li>
         <li><strong>El líquido</strong>: volumen fijo, pero su forma cambia según el recipiente, por ejemplo el agua en un vaso.</li>
         <li><strong>El gas</strong>: ni forma ni volumen fijos, llena todo el recipiente, por ejemplo el aire en un globo.</li>
       </ul>`,
        `<p>Las partículas de los sólidos están muy juntas, por eso son difíciles de comprimir. Las partículas de los gases están muy separadas, por eso los gases se pueden comprimir.</p>`,
        `<p><strong>Experimento:</strong> vierte agua en un vaso alto y luego en un vaso ancho. El agua siempre toma la forma del recipiente, pero su volumen no cambia.</p>`,
        { fig: 'r1r5-castice-skupenstva', caption: 'Los sólidos tienen sus partículas firmemente ordenadas, los líquidos tienen sus partículas juntas pero sin orden, y los gases tienen sus partículas muy separadas.' }
      ],
      examples: [
        { task: '¿Qué propiedades tiene el agua en un vaso?',
          steps: ['El agua es un líquido, cambia de forma según el recipiente.', 'Su volumen no cambia.', '<strong>Resultado: volumen fijo y forma cambiante.</strong>'] },
        { task: '¿Por qué se puede meter aire en un balón de fútbol?',
          steps: ['Las partículas de un gas están muy separadas.', '<strong>Resultado: al apretar, las partículas se acercan entre sí.</strong>'] }
      ]
    },
    'r5-telesa': {
      title: 'Cuerpos y sus materiales',
      summary: 'Explicas de qué están hechos los cuerpos y eliges un material adecuado para un fin determinado.',
      theory: [
        `<p>Un cuerpo es un objeto hecho de sustancias. Muchos cuerpos están hechos de varias sustancias. Las tijeras tienen hojas de metal y mangos de plástico.</p>`,
        `<p>Al fabricar objetos elegimos la sustancia según lo que queremos del objeto. Si necesitamos que el objeto sea transparente, elegimos vidrio.
       Si queremos que el objeto no se caliente fácilmente, elegimos un material que conduzca mal el calor.</p>`,
        `<ul>
         <li>Los metales conducen bien el calor y la corriente eléctrica, por eso son adecuados para ollas y cables.</li>
         <li>Los plásticos y la madera conducen mal el calor, por eso son adecuados para los mangos de las ollas.</li>
       </ul>`,
        `<p>Al evaluar un cuerpo, pregúntate siempre: ¿de qué sustancia está hecho y por qué se eligió precisamente esa sustancia?</p>`
      ],
      examples: [
        { task: '¿Por qué los mangos de las ollas son de plástico o de madera?',
          steps: ['El plástico y la madera conducen mal el calor.', '<strong>Resultado: el mango no se calienta tan rápido como el metal, por eso es fácil de sujetar.</strong>'] },
        { task: '¿Es un vaso un cuerpo o una sustancia?',
          steps: ['Un vaso es un objeto concreto.', '<strong>Resultado: un cuerpo.</strong>'] }
      ]
    },
    'r5-hustota': {
      title: 'Masa, volumen y densidad: ideas básicas',
      summary: 'Distingues la masa y el volumen y calculas la densidad de una sustancia.',
      theory: [
        `<p><strong>La masa</strong> $m$ nos dice cuánta sustancia contiene un cuerpo. Su unidad es el gramo $\\text{g}$ o el kilogramo $\\text{kg}$. La masa se mide con una balanza.</p>`,
        `<p><strong>El volumen</strong> $V$ es el espacio que ocupa un cuerpo. Las unidades son, por ejemplo, $\\text{cm}^3$ o mililitros, donde $1\\,\\text{ml}=1\\,\\text{cm}^3$.
       El volumen de un líquido se mide con una probeta.</p>`,
        `<p><strong>La densidad</strong> $\\rho$ nos dice qué masa tiene un $\\text{cm}^3$ de una sustancia. La calculamos como cociente: $\\rho = \\frac{m}{V}$.
       La densidad es una propiedad de la sustancia, no del cuerpo. El agua tiene una densidad de unos $1\\,\\text{g/cm}^3$.</p>`,
        `<ul>
         <li>Un cuerpo con mayor densidad que el agua se hunde, por ejemplo una piedra.</li>
         <li>Un cuerpo con menor densidad que el agua flota, por ejemplo la madera.</li>
       </ul>`,
        { fig: 'r1r5-hustota-voda', caption: 'Un cuerpo con mayor densidad que el agua se hunde (una piedra), un cuerpo con menor densidad flota (madera).' }
      ],
      examples: [
        { task: 'Un cubo tiene una masa de $48\\,\\text{g}$ y un volumen de $16\\,\\text{cm}^3$. ¿Cuál es su densidad?',
          steps: ['$\\rho=\\frac{m}{V}=\\frac{48}{16}$', '<strong>Resultado: $3\\,\\text{g/cm}^3$</strong>'] },
        { task: 'Una sustancia tiene una densidad de $2\\,\\text{g/cm}^3$, y un cuerpo hecho de ella tiene un volumen de $10\\,\\text{cm}^3$. ¿Cuál es su masa?',
          steps: ['$m=\\rho\\cdot V=2\\cdot 10$', '<strong>Resultado: $20\\,\\text{g}$</strong>'] }
      ]
    },
    'r5-merania': {
      title: 'Medir longitud, volumen y masa',
      summary: 'Lees correctamente el resultado de una medición y calculas la diferencia entre valores medidos.',
      theory: [
        `<p>La longitud la medimos con una regla o una cinta métrica. Colocamos el cero de la escala exactamente en el inicio del cuerpo y leemos el final.
       Un error frecuente es empezar a medir desde el número 1, y no desde el cero.</p>`,
        `<p>El volumen de un líquido lo medimos con una probeta. Ponemos el ojo a la altura del líquido y leemos el borde inferior de la superficie, el llamado <strong>menisco</strong>.
       Si miramos desde arriba o desde abajo, el resultado queda distorsionado.</p>`,
        `<p>La masa la medimos con una balanza. Antes de medir, ponemos la balanza a cero para que no se cuente la masa del recipiente.</p>`,
        `<p>El volumen de un cuerpo que se hunde se puede averiguar con agua: leemos el nivel del agua antes y después de sumergirlo. La diferencia de los niveles es el volumen del cuerpo.</p>`,
        { fig: 'r1r5-hladina', caption: 'El volumen de un cuerpo sumergido es la diferencia entre los niveles del agua después y antes de sumergirlo.' }
      ],
      examples: [
        { task: 'Un palito está sobre una regla desde 2 cm hasta 9 cm. ¿Cuál es su longitud?',
          steps: ['La longitud es la diferencia entre el número final y el inicial: $9 - 2$.', '<strong>Resultado: 7 cm</strong>'] },
        { task: 'Una probeta contiene $50\\,\\text{ml}$ de agua. Después de sumergir un cubo, el nivel sube a $72\\,\\text{ml}$. ¿Cuál es el volumen del cubo?',
          steps: ['El volumen del cubo es la subida del nivel: $72 - 50$.', '<strong>Resultado: $22\\,\\text{ml}$</strong>'] }
      ]
    },
    'r5-jednotky': {
      title: 'Unidades de magnitudes físicas',
      summary: 'Conviertes unidades de longitud, masa y volumen.',
      theory: [
        `<p>Una magnitud física es aquello que medimos, por ejemplo longitud, masa, tiempo o temperatura. Cada magnitud tiene una <strong>unidad</strong>
       con la que la comparamos. Unidades básicas del SI son, por ejemplo, el metro $\\text{m}$, el kilogramo $\\text{kg}$ y el segundo $\\text{s}$.</p>`,
        `<ul>
         <li>Longitud: $1\\,\\text{km}=1000\\,\\text{m}$, $1\\,\\text{m}=100\\,\\text{cm}$, $1\\,\\text{cm}=10\\,\\text{mm}$.</li>
         <li>Masa: $1\\,\\text{kg}=1000\\,\\text{g}$, $1\\,\\text{t}=1000\\,\\text{kg}$.</li>
         <li>Volumen: $1\\,\\text{l}=1000\\,\\text{ml}$, $1\\,\\text{dm}^3=1\\,\\text{l}$.</li>
       </ul>`,
        `<p>Al convertir a una unidad <strong>menor</strong>, el número es mayor, así que multiplicamos: $2\\,\\text{km}=2000\\,\\text{m}$.
       Al convertir a una unidad <strong>mayor</strong>, el número es menor, así que dividimos: $300\\,\\text{cm}=3\\,\\text{m}$.</p>`,
        `<p>Cuidado con un error frecuente: $1\\,\\text{m}$ no es $10\\,\\text{cm}$, sino $100\\,\\text{cm}$.</p>`
      ],
      examples: [
        { task: 'Convierte $3{,}5\\,\\text{m}$ a centímetros.',
          steps: ['Un metro tiene 100 cm, y al convertir a una unidad menor multiplicamos el número.', '$3{,}5\\cdot 100=350$', '<strong>Resultado: 350 cm</strong>'] },
        { task: 'Convierte $4\\,500\\,\\text{g}$ a kilogramos.',
          steps: ['Un kilogramo tiene 1000 g, y al convertir a una unidad mayor dividimos el número.', '$4500 : 1000=4{,}5$', '<strong>Resultado: $4{,}5\\,\\text{kg}$</strong>'] }
      ]
    },
    'r5-teplota': {
      title: 'Temperatura y su medición',
      summary: 'Lees la temperatura en grados Celsius y calculas sus cambios.',
      theory: [
        `<p>La temperatura la medimos con un <strong>termómetro</strong>. En la escala Celsius hay dos puntos fijos: el hielo que se derrite tiene una temperatura de $0\\,{}^\\circ\\text{C}$,
       y el agua hierve a $100\\,{}^\\circ\\text{C}$ a presión normal.</p>`,
        `<ul>
         <li>Un termómetro contiene un líquido, por ejemplo alcohol, que se dilata al calentarse. La temperatura la leemos por la longitud de la columna.</li>
         <li>Dejamos el termómetro en su sitio al menos unos minutos para que muestre la temperatura correcta.</li>
         <li>El termómetro no debe tocar el fondo del recipiente, porque mostraría la temperatura del fondo y no la del líquido.</li>
       </ul>`,
        `<p>La temperatura cambia. Si la temperatura sube, sumamos el cambio. Si baja, lo restamos. Las temperaturas negativas están bajo cero,
       por ejemplo $-5\\,{}^\\circ\\text{C}$ es 5 grados más fría que el hielo que se derrite.</p>`,
        { fig: 'r1r5-teplomer', caption: 'La escala Celsius tiene dos puntos fijos: hielo que se derrite a 0 °C y agua hirviendo a 100 °C. Las temperaturas negativas están bajo cero.' }
      ],
      examples: [
        { task: 'Por la mañana había $-4\\,{}^\\circ\\text{C}$, y hacia el mediodía la temperatura había subido $9\\,{}^\\circ\\text{C}$. ¿Cuál es la temperatura al mediodía?',
          steps: ['$-4+9=5$', '<strong>Resultado: $5\\,{}^\\circ\\text{C}$</strong>'] },
        { task: 'El agua tenía una temperatura de $20\\,{}^\\circ\\text{C}$ y se calentó hasta $100\\,{}^\\circ\\text{C}$. ¿Cuántos grados se calentó?',
          steps: ['$100-20=80$', '<strong>Resultado: se calentó $80\\,{}^\\circ\\text{C}$</strong>'] }
      ]
    },
    'r5-pozorovanie': {
      title: 'Observación, medición y experimentos sencillos',
      summary: 'Planificas un experimento sencillo, anotas los resultados y sacas una conclusión.',
      theory: [
        `<p>Al investigar avanzamos paso a paso: observamos, planteamos una pregunta, formulamos una <strong>hipótesis</strong>, realizamos un experimento,
       anotamos los resultados y formulamos una conclusión. La hipótesis es una suposición que se puede comprobar, no una conclusión terminada.</p>`,
        `<ol>
         <li>Decide qué quieres averiguar.</li>
         <li>En el experimento cambia solo una cosa a la vez.</li>
         <li>Anota los resultados en una tabla de inmediato.</li>
         <li>Repite el experimento para poder comparar los resultados.</li>
       </ol>`,
        `<p>La cantidad que cambiamos se llama <strong>variable</strong>. Las cosas que mantenemos iguales se controlan. Si cambiamos varias cosas a la vez, no podemos saber qué causó el resultado.</p>`,
        `<p>Los valores medidos siempre escribimos con su unidad, por ejemplo $25\\,\\text{cm}$, y no solo $25$.</p>`
      ],
      examples: [
        { task: 'Quieres averiguar si la sal se disuelve más rápido en agua caliente que en agua fría. ¿Cuál es la variable?',
          steps: ['Cambiamos la temperatura del agua.', 'Mantenemos igual la cantidad de sal y de agua.', '<strong>Resultado: la variable es la temperatura del agua.</strong>'] },
        { task: '¿Cómo se puede aumentar la exactitud de una medición?',
          steps: ['Repetimos el experimento varias veces.', 'Calculamos el promedio de los resultados.', '<strong>Resultado: repetir el experimento y calcular el promedio de los resultados.</strong>'] }
      ]
    },
    'r6-hustota': {
      title: 'Densidad de las sustancias y cómo se calcula',
      summary: 'Qué nos dice la densidad y cómo la calculamos a partir de la masa y el volumen.',
      theory: [
        `<p>Dos cuerpos del mismo tamaño pueden tener masas muy distintas. Una bola de plomo es mucho más pesada que una bola de madera del mismo volumen.
       La diferencia no la causa la forma ni el tamaño, sino la <strong>sustancia</strong> de la que está hecho el cuerpo. Esta propiedad de la sustancia se describe con la <strong>densidad</strong>.</p>`,
        `<p><strong>La densidad</strong> muestra qué masa tiene una unidad de volumen de una sustancia dada. Se denota $\\rho$ (ro) y se calcula con la fórmula
       $\\rho = \\frac{m}{V}$, donde $m$ es la masa y $V$ el volumen. Es decir, dividimos la masa entre el volumen.</p>`,
        `<ul>
         <li>Unidades: $\\text{g/cm}^3$ (en la práctica) y $\\text{kg/m}^3$ (en el SI).</li>
         <li>Conversión: $1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$, porque $1\\,\\text{g}=0{,}001\\,\\text{kg}$ y $1\\,\\text{cm}^3=0{,}000001\\,\\text{m}^3$.</li>
       </ul>`,
        `<p>La densidad es una propiedad de la sustancia, no del cuerpo. Todos los trozos de la misma sustancia tienen la misma densidad, sean grandes o pequeños.
       Nos ayuda a distinguir sustancias que se parecen, y más adelante explica por qué unos cuerpos flotan y otros se hunden.</p>`,
        `<p>Densidades aproximadas: agua $1\\,\\text{g/cm}^3$, aceite aproximadamente $0{,}9\\,\\text{g/cm}^3$, aluminio $2{,}7\\,\\text{g/cm}^3$, hierro $7{,}8\\,\\text{g/cm}^3$.
       La madera es más ligera que el agua, por ejemplo el pino tiene aproximadamente $0{,}5\\,\\text{g/cm}^3$.</p>`,
        { fig: 'r6r9-hustota', caption: 'La densidad muestra qué masa tiene una unidad de volumen de una sustancia. Para el mismo volumen, el hierro es mucho más pesado que el agua.' }
      ],
      examples: [
        { task: 'Un bloque de aluminio tiene una masa de $135\\,\\text{g}$ y un volumen de $50\\,\\text{cm}^3$. Calcula su densidad.',
          steps: ['Usamos la fórmula $\\rho = \\frac{m}{V}$.', '$\\rho = \\frac{135}{50} = 2{,}7\\,\\text{g/cm}^3$', '<strong>Resultado: 2,7 g/cm³</strong>'] },
        { task: '¿Qué masa tienen $200\\,\\text{cm}^3$ de agua? La densidad del agua es $1\\,\\text{g/cm}^3$.',
          steps: ['De la fórmula $\\rho = \\frac{m}{V}$ obtenemos $m = \\rho\\cdot V$.', '$m = 1\\,\\text{g/cm}^3\\cdot 200\\,\\text{cm}^3 = 200\\,\\text{g}$', '<strong>Resultado: 200 g</strong>'] }
      ]
    },
    'r6-vlastnosti': {
      title: 'Propiedades de los líquidos y los gases',
      summary: 'En qué se diferencian los líquidos y los gases en forma, volumen y compresibilidad.',
      theory: [
        `<p>Las sustancias se presentan en tres estados: sólido, líquido y gaseoso. Los cuerpos sólidos tienen forma fija y volumen fijo.
       <strong>Los líquidos</strong> tienen volumen fijo, pero adaptan su forma al recipiente. <strong>Los gases</strong> no tienen ni forma ni volumen fijos: se expanden y llenan todo el recipiente.</p>`,
        `<p>¿Por qué es así? Las partículas de un líquido están juntas y unidas, pero pueden deslizarse unas sobre otras, por eso un líquido fluye.
       Las partículas de un gas están muy separadas y se mueven libremente, por eso se reparten por todo el espacio disponible.</p>`,
        `<p><strong>Compresibilidad:</strong> los líquidos prácticamente no se pueden comprimir, porque sus partículas ya están muy juntas. Los gases sí se pueden comprimir,
       porque entre sus partículas hay mucho espacio libre. El aire de una bomba de bicicleta se comprime, mientras que el agua en un recipiente cerrado no.</p>`,
        `<ul>
         <li><strong>Forma:</strong> un líquido se adapta al recipiente, un gas llena todo el recipiente.</li>
         <li><strong>Volumen:</strong> un líquido tiene volumen fijo, el volumen de un gas es igual al del recipiente que lo contiene.</li>
         <li><strong>Compresibilidad:</strong> un líquido es casi incompresible, un gas se puede comprimir.</li>
       </ul>`,
        `<p>Los líquidos y los gases juntos se llaman <strong>fluidos</strong>. Los fluidos se pueden verter y fluyen, por eso en ellos observamos presión y fuerza de empuje.</p>`,
        { fig: 'r6r9-castice', caption: 'Las partículas de un sólido permanecen en lugares fijos, las de un líquido están unidas y se deslizan unas sobre otras, y las de un gas se mueven libremente.' }
      ],
      examples: [
        { task: 'Explica por qué el aire de una jeringa se puede comprimir, pero el agua no.',
          steps: ['Las partículas del aire están muy separadas, con espacio libre entre ellas.', 'Las partículas del agua están juntas, sin espacio para acercarlas más.', '<strong>Resultado: el aire es compresible, el agua casi no.</strong>'] },
        { task: 'Se vierte un litro de agua de un recipiente ancho en un vaso alto y estrecho. ¿Qué volumen tiene ahora el agua?',
          steps: ['El agua cambia su forma según el recipiente.', 'El volumen de un líquido no cambia al verterlo.', '<strong>Resultado: sigue siendo 1 litro.</strong>'] }
      ]
    },
    'r6-tlak': {
      title: 'Presión en líquidos y gases',
      summary: 'La presión como fuerza por unidad de superficie, y la presión en un líquido, que crece con la profundidad.',
      theory: [
        `<p><strong>La presión</strong> es la fuerza que actúa perpendicularmente sobre una superficie, expresada por unidad de área. Fórmula: $p=\\frac{F}{S}$, donde $F$ es la fuerza en newtons
       y $S$ el área de la superficie en $\\text{m}^2$. La unidad de presión es el pascal: $1\\,\\text{Pa}=1\\,\\text{N/m}^2$.</p>`,
        `<p>La misma fuerza produce mayor presión sobre una superficie menor. Por eso un clavo afilado entra fácilmente en la madera y uno romo no: en la punta pequeña la presión es grande.</p>`,
        `<p><strong>La presión en un líquido</strong> aumenta con la profundidad. Cuanto más profundo, más líquido hay encima presionando las capas de abajo.
       Fórmula: $p=\\rho\\cdot g\\cdot h$, donde $\\rho$ es la densidad del líquido, $h$ la profundidad bajo la superficie y $g\\approx 10\\,\\text{N/kg}$ (redondeado en la escuela básica).</p>`,
        `<p>Un líquido presiona las paredes del recipiente, el fondo y hacia arriba. La presión en un líquido actúa igual en todas las direcciones a la misma profundidad.</p>`,
        `<p>Un gas en un recipiente cerrado también presiona las paredes en todas las direcciones. Cuando comprimimos el gas, su presión aumenta.</p>`,
        { fig: 'obr-tlak', caption: 'La presión en un líquido aumenta con la profundidad: cuanto más profundo, mayor es la fuerza que actúa sobre la pared.' }
      ],
      examples: [
        { task: 'Una fuerza de $600\\,\\text{N}$ actúa perpendicularmente sobre un área de $0{,}5\\,\\text{m}^2$. ¿Qué presión produce?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$', '$p=1200\\,\\text{Pa}$', '<strong>Resultado: 1200 Pa</strong>'] },
        { task: '¿Cuál es la presión en el agua a una profundidad de $3\\,\\text{m}$? La densidad del agua es $1000\\,\\text{kg/m}^3$, $g=10\\,\\text{N/kg}$.',
          steps: ['$p=\\rho\\cdot g\\cdot h$', '$p=1000\\cdot 10\\cdot 3=30\\,000\\,\\text{Pa}$', '<strong>Resultado: 30 000 Pa = 30 kPa</strong>'] }
      ]
    },
    'r6-atmosfera': {
      title: 'Presión atmosférica',
      summary: 'Por qué el aire nos presiona y cómo cambia la presión con la altitud.',
      theory: [
        `<p>El aire que rodea la Tierra tiene masa y por eso nos presiona. Esta presión se llama <strong>presión atmosférica</strong>. Al nivel del mar es de unos $101\\,\\text{kPa}$,
       lo que corresponde al peso del aire sobre un metro cuadrado, aproximadamente 10 toneladas.</p>`,
        `<p>Los meteorólogos usan el hectopascal: $1\\,\\text{hPa}=100\\,\\text{Pa}$, por lo tanto $1\\,\\text{kPa}=10\\,\\text{hPa}$. La presión normal es de unos $1013\\,\\text{hPa}$.
       La presión se mide con un <strong>barómetro</strong>.</p>`,
        `<p>¿Por qué podemos beber con una pajita? Al succionar, reducimos la presión en la boca. La presión atmosférica actúa sobre la superficie de la bebida y la empuja hacia arriba por la pajita.
       Así que no somos nosotros quienes la subimos: es el aire el que la empuja.</p>`,
        `<p>A medida que aumenta la altitud sobre el nivel del mar, la presión baja, porque hay menos aire encima de nosotros. Por eso en la montaña baja la presión del aire y el agua hierve a menor temperatura.</p>`,
        { fig: 'r6r9-atmosfera', caption: 'Cuanto más subimos, menos aire hay encima de nosotros y, por tanto, la presión atmosférica baja.' }
      ],
      examples: [
        { task: 'Un barómetro marca una presión de $1013\\,\\text{hPa}$. ¿Cuántos kilopascales son?',
          steps: ['$1\\,\\text{kPa}=10\\,\\text{hPa}$, así que dividimos el resultado entre diez.', '$1013 : 10 = 101{,}3$', '<strong>Resultado: 101,3 kPa</strong>'] },
        { task: '¿Cómo cambia la presión atmosférica cuando subimos a una montaña alta?',
          steps: ['Hay menos aire encima de nosotros que nos presiona.', 'Por lo tanto, la presión del aire baja.', '<strong>Resultado: la presión baja</strong>'] }
      ]
    },
    'r6-vztlak': {
      title: 'Fuerza de empuje y flotación de los cuerpos',
      summary: 'Por qué un líquido hace que los cuerpos pesen menos y cuándo un cuerpo flota.',
      theory: [
        `<p>Una pelota sumergida en agua sube a la superficie. Un líquido actúa sobre un cuerpo sumergido con una fuerza dirigida hacia arriba. Esta fuerza se llama <strong>fuerza de empuje</strong>.
       Surge porque la presión en un líquido aumenta con la profundidad: la superficie inferior del cuerpo está más presionada que la superior.</p>`,
        `<p><strong>Principio de Arquímedes:</strong> la fuerza de empuje es igual al peso del líquido desplazado por el cuerpo. Fórmula: $F_{vz}=\\rho_k\\cdot g\\cdot V_p$,
       donde $\\rho_k$ es la densidad del líquido y $V_p$ el volumen de la parte sumergida del cuerpo.</p>`,
        `<ul>
         <li>El peso del cuerpo es mayor que la fuerza de empuje: el cuerpo se hunde.</li>
         <li>El peso y la fuerza de empuje son iguales: el cuerpo queda suspendido o flota sumergido.</li>
         <li>La fuerza de empuje es mayor que el peso: el cuerpo sube y flota en la superficie, con solo una parte sumergida.</li>
       </ul>`,
        `<p>Un barco de acero flota porque es grande y hueco. Su densidad media es menor que la del agua, así que desplaza suficiente agua para sostener su peso.</p>`,
        { fig: 'obr-vztlak', caption: 'La fuerza de empuje Fvz apunta hacia arriba, el peso Fg apunta hacia abajo. Un cuerpo sumergido parece más ligero en el peso del líquido desplazado.' }
      ],
      examples: [
        { task: 'Un cubo con un volumen de $1\\,\\text{dm}^3$ está totalmente sumergido en agua. El agua tiene una densidad de $1\\,\\text{kg/dm}^3$. ¿Cuál es la fuerza de empuje?',
          steps: ['El agua desplazada tiene una masa de $\\rho\\cdot V = 1\\,\\text{kg}$.', 'Su peso es $1\\,\\text{kg}\\cdot 10\\,\\text{N/kg}=10\\,\\text{N}$.', '<strong>Resultado: la fuerza de empuje es 10 N.</strong>'] },
        { task: 'Un cuerpo de masa $3\\,\\text{kg}$ flota en el agua. ¿Cuál es el valor de la fuerza de empuje?',
          steps: ['El cuerpo flota, así que la fuerza de empuje es igual a su peso.', '$F_{vz}=F_G=m\\cdot g=3\\cdot 10=30\\,\\text{N}$', '<strong>Resultado: 30 N</strong>'] }
      ]
    },
    'r6-teplo': {
      title: 'Temperatura, calor e intercambio de calor',
      summary: 'La diferencia entre temperatura y calor, y el sentido en que fluye el calor.',
      theory: [
        `<p><strong>La temperatura</strong> indica lo caliente que está un cuerpo. Se mide en grados Celsius (°C). Cuanto más rápido se mueven las partículas de una sustancia, más caliente está.
       Un termómetro debe alcanzar la temperatura de su entorno, así muestra la temperatura del entorno.</p>`,
        `<p><strong>El calor</strong> es la energía que se transfiere entre cuerpos por una diferencia de temperatura. La unidad del calor es el julio (J).
       El calor siempre fluye de un cuerpo más caliente a uno más frío, nunca al revés. Un refrigerador es una excepción, porque enfriar requiere trabajo.</p>`,
        `<p><strong>El intercambio de calor</strong> dura hasta que las temperaturas de los cuerpos se igualan. Entonces se produce el <em>equilibrio térmico</em>.
       El calor se transfiere de tres formas: por <em>conducción</em> (una cuchara metálica en el té), por <em>convección</em> (líquidos y gases) y por <em>radiación</em> (el calor del Sol).</p>`,
        `<p>Si mezclamos cantidades iguales de agua a distintas temperaturas y despreciamos las pérdidas de calor, la temperatura resultante es la media aritmética de las dos temperaturas.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: 'El calor fluye de un cuerpo más caliente a uno más frío. Se transfiere por conducción, convección o radiación.' }
      ],
      examples: [
        { task: 'Mezclamos cantidades iguales de agua a 80 °C y a 20 °C. ¿Cuál será la temperatura resultante?',
          steps: ['Con cantidades iguales, la temperatura resultante es la media de las dos temperaturas.', '$\\frac{80+20}{2}=50$', '<strong>Resultado: 50 °C</strong>'] },
        { task: '¿En qué sentido fluye el calor entre una taza de té a 70 °C y el aire a 22 °C?',
          steps: ['El calor siempre fluye del cuerpo más caliente al más frío.', 'El té tiene mayor temperatura, así que el calor pasa del té al aire.', '<strong>Resultado: del té al entorno</strong>'] }
      ]
    },
    'r6-skupenstva': {
      title: 'Cambios de estado de las sustancias',
      summary: 'Fusión, solidificación, evaporación, condensación, sublimación y qué ocurre con las partículas en cada una.',
      theory: [
        `<p>Las sustancias se presentan en estado sólido, líquido y gaseoso. Durante un cambio de estado la sustancia no se convierte en otra sustancia;
       solo cambian la disposición y el movimiento de sus partículas.</p>`,
        `<ul>
         <li><strong>Fusión</strong>: sólido a líquido (el hielo se derrite y se convierte en agua).</li>
         <li><strong>Solidificación</strong>: líquido a sólido (el agua se congela).</li>
         <li><strong>Evaporación</strong>: líquido a gas (la ropa mojada se seca).</li>
         <li><strong>Condensación</strong>: gas a líquido (el rocío sobre la hierba).</li>
         <li><strong>Sublimación</strong>: sólido directamente a gas (hielo seco, naftalina).</li>
         <li><strong>Desublimación</strong>: gas directamente a sólido (escarcha en el congelador).</li>
       </ul>`,
        `<p><strong>¿Por qué?</strong> Durante la fusión la sustancia debe absorber energía para que sus partículas puedan separarse de la disposición del sólido. En cambio, durante la solidificación se libera energía.</p>`,
        `<ol>
         <li>El hielo a una temperatura de $-5\\,{}^\\circ\\text{C}$ primero se calienta hasta $0\\,{}^\\circ\\text{C}$.</li>
         <li>A $0\\,{}^\\circ\\text{C}$ se derrite, y su temperatura no cambia hasta que todo se haya derretido.</li>
         <li>Solo después el agua se calienta más.</li>
       </ol>`,
        { fig: 'obr-skupenstva', caption: 'Cambios de estado: fusión, solidificación, evaporación y condensación.' }
      ],
      examples: [
        { task: 'El agua del congelador se convierte en hielo. ¿Cómo se llama este proceso?',
          steps: ['El agua pasa del estado líquido al sólido.', 'El paso de líquido a sólido se llama solidificación.', '<strong>Resultado: solidificación</strong>'] },
        { task: 'Sobre una superficie fría se forma escarcha directamente a partir del vapor de agua, sin pasar por el líquido. ¿Cómo se llama este proceso?',
          steps: ['El vapor pasa directamente al estado sólido.', 'El paso de gas a sólido se llama desublimación.', '<strong>Resultado: desublimación</strong>'] }
      ]
    },
    'r6-var': {
      title: 'Evaporación, condensación y ebullición',
      summary: 'La diferencia entre evaporación y ebullición, y por qué se enfrían los líquidos.',
      theory: [
        `<p><strong>La evaporación</strong> ocurre en la superficie de un líquido a cualquier temperatura. Las partículas más rápidas escapan de la superficie hacia el entorno.
       La evaporación es más rápida a mayor temperatura, en una superficie más grande y con viento, que se lleva el vapor.</p>`,
        `<p><strong>La evaporación enfría.</strong> Escapan las partículas más rápidas del líquido, así que lo que queda tiene una energía media menor.
       Por eso el viento nos enfría después de nadar: el agua se evapora de la piel y se lleva el calor.</p>`,
        `<p><strong>La ebullición</strong> es el cambio de un líquido a gas en todo su volumen, no solo en la superficie. Ocurre a una determinada <em>temperatura de ebullición</em>, que depende de la presión.
       A presión normal el agua hierve a 100 °C. En una montaña alta la presión es menor, así que el agua hierve a una temperatura más baja.</p>`,
        `<p><strong>La condensación</strong> es el cambio contrario: el vapor se convierte en líquido. Durante la condensación se libera calor al entorno,
       por eso una quemadura por vapor es peor que una quemadura por agua hirviendo. El rocío, la niebla y las nubes se forman por condensación del vapor de agua.</p>`,
        { fig: 'r6r9-var', caption: 'La evaporación ocurre solo en la superficie, mientras que la ebullición ocurre en todo el volumen del líquido, donde se forman burbujas de vapor.' }
      ],
      examples: [
        { task: '¿Por qué la ropa mojada se seca más rápido al sol y con viento?',
          steps: ['La mayor temperatura y el viento aceleran la evaporación.', 'Las partículas de agua de la ropa escapan más fácilmente al aire.', '<strong>Resultado: el calor y el viento aceleran la evaporación.</strong>'] },
        { task: 'El agua hierve a 100 °C con presión normal. ¿A qué temperatura hervirá en la cima de una montaña alta, donde la presión es menor?',
          steps: ['Cuanto menor es la presión, menor es el punto de ebullición.', 'En una montaña alta el agua hierve a una temperatura inferior a 100 °C.', '<strong>Resultado: a una temperatura menor que 100 °C</strong>'] }
      ]
    }
  }
});
