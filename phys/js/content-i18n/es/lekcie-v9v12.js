/* Español: lecciones universitarias de los niveles v9–v12 (js/rocniky/v9.js, v10.js, v11.js, v12.js). Estructura y claves: js/content-i18n.js. */
CONTENT_I18N.add('es', {
  lessons: {
    'v9-kryst-struktury': {
      title: 'Estructuras cristalinas',
      summary: 'La celda unitaria, los tipos de redes cúbicas y el número de átomos por celda.',
      theory: [
        `<p>Un cristal es una sustancia en la que los átomos están dispuestos de forma regular en una <em>red</em> espacial. La unidad más pequeña que, repetida mediante traslaciones, construye toda la red es la <strong>celda unitaria</strong>.</p>`,
        `<p>Las tres celdas cúbicas básicas son: <em>cúbica simple</em> (átomos solo en las esquinas), <em>cúbica centrada en el cuerpo</em> (además de las esquinas, un átomo en el centro) y <em>cúbica centrada en las caras</em> (además de las esquinas, átomos en los centros de las caras).</p>`,
        `<p>Un átomo en el centro pertenece a la celda por completo, un átomo en una cara le pertenece en una mitad y un átomo en una esquina en un octavo. Por ello, una celda cúbica simple tiene 1 átomo, una celda centrada en el cuerpo 2 átomos y una celda centrada en las caras 4 átomos.</p>`,
        `<p>La disposición afecta a las propiedades mecánicas. Los metales con red centrada en las caras (Al, Cu, Au) son dúctiles, porque sus planos atómicos pueden deslizarse con facilidad unos sobre otros.</p>`,
        { fig: 'v9v12-bunka', caption: 'Celda unitaria: redes cúbicas simple, centrada en el cuerpo y centrada en las caras, y número de átomos que pertenecen a cada una de ellas.' }
      ],
      examples: [
        { task: '¿Cuántos átomos pertenecen a una celda unitaria de red centrada en las caras?',
          steps: ['Ocho átomos de las esquinas, cada uno pertenece a la celda en un octavo: $8\\cdot\\tfrac{1}{8}=1$.', 'Seis átomos de las caras, cada uno pertenece a la celda en una mitad: $6\\cdot\\tfrac{1}{2}=3$.', '<strong>Resultado: $1+3=4$ átomos</strong>'] },
        { task: '¿Cuántos átomos tiene una celda cúbica centrada en el cuerpo?',
          steps: ['Las esquinas dan $8\\cdot\\tfrac{1}{8}=1$ átomo.', 'El átomo del centro pertenece a la celda por completo, por lo que suma 1.', '<strong>Resultado: 2 átomos</strong>'] }
      ]
    },
    'v9-vazby': {
      title: 'Enlaces atómicos en los sólidos',
      summary: 'Enlaces iónico, covalente, metálico y de van der Waals, y sus consecuencias.',
      theory: [
        `<p>Los átomos se unen en un sólido cuando con ello disminuye la energía total del sistema. El enlace se forma por la redistribución o la compartición de los electrones de valencia.</p>`,
        `<ul><li><strong>Iónico</strong>: los electrones pasan de un átomo a otro y se forman iones de carga opuesta (p. ej. NaCl). Estas sustancias son duras, frágiles y tienen un punto de fusión alto.</li><li><strong>Covalente</strong>: los átomos comparten pares de electrones (diamante, silicio). Los enlaces son fuertes y las sustancias son duras.</li><li><strong>Metálico</strong>: los electrones de valencia forman un "gas electrónico" común que pertenece a todos los átomos (Cu, Fe). Los metales son dúctiles y conducen la corriente.</li><li><strong>Van der Waals</strong>: fuerzas atractivas débiles entre dipolos temporales (p. ej. CO₂ sólido o capas de grafito). Se rompen con facilidad.</li></ul>`,
        `<p>Las propiedades de un sólido, como la dureza, la conductividad y el punto de fusión, son una consecuencia directa del tipo de enlace. Cuando conocemos el enlace, podemos predecir cómo se comportará el material.</p>`
      ],
      examples: [
        { task: '¿Qué enlace está presente en el cobre metálico?',
          steps: ['Los átomos de cobre liberan sus electrones de valencia a un "mar" común.', '<strong>Resultado: enlace metálico</strong>'] },
        { task: '¿Por qué el diamante es muy duro?',
          steps: ['Cada átomo de carbono está unido covalentemente a cuatro vecinos.', 'Una red tan rígida requiere mucha energía para romperse.', '<strong>Resultado: enlaces covalentes fuertes en todo el cristal</strong>'] }
      ]
    },
    'v9-elektricke-tepelne': {
      title: 'Propiedades eléctricas y térmicas de los materiales',
      summary: 'Resistividad, dependencia de la resistencia con la temperatura y conductividad térmica.',
      theory: [
        `<p>La resistencia de un conductor es $R = \\rho\\dfrac{l}{S}$, donde $\\rho$ es la <em>resistividad</em> del material, $l$ la longitud y $S$ la sección transversal. La resistividad del cobre es aproximadamente $1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$. Un conductor más largo y más delgado tiene una resistencia mayor.</p>`,
        `<p>Un metal conduce la corriente porque sus electrones de valencia se mueven libremente en la red. Al aumentar la temperatura, las vibraciones de los iones de la red dispersan este movimiento, por lo que la resistencia de un metal aumenta con la temperatura. En cambio, en los semiconductores y aislantes se liberan más portadores al subir la temperatura y la resistencia disminuye.</p>`,
        `<p><strong>Conductividad térmica:</strong> en los metales el calor se transporta principalmente por electrones libres, y en los no metales por vibraciones de la red (fonones). Por eso el cobre es un excelente conductor del calor, mientras que el vidrio y las cerámicas aíslan del calor.</p>`
      ],
      examples: [
        { task: `Un alambre de cobre de longitud 50 m y sección transversal 2 mm² ¿qué resistencia tiene? La resistividad del cobre es $\\rho=1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$.`,
          steps: ['Convertimos la sección: $S=2\\,\\text{mm}^2=2\\cdot 10^{-6}\\,\\text{m}^2$.', '$R=\\rho\\dfrac{l}{S}=1{,}7\\cdot 10^{-8}\\cdot\\dfrac{50}{2\\cdot 10^{-6}}=0{,}425\\,\\Omega$.', '<strong>Resultado: aproximadamente 0,43 Ω</strong>'] },
        { task: '¿Qué conductor tiene mayor resistencia: el más largo o el más corto, con la misma sección y el mismo material?',
          steps: ['La resistencia es proporcional a la longitud $l$.', '<strong>Resultado: el más largo</strong>'] }
      ]
    },
    'v9-pasova-teoria': {
      title: 'Teoría de bandas de los sólidos',
      summary: 'Bandas de energía en un cristal y división de los materiales en conductores, semiconductores y aislantes.',
      theory: [
        `<p>Cuando se juntan un gran número de átomos, los niveles discretos de energía de los electrones se ensanchan en <em>bandas</em>, es decir, en conjuntos de niveles muy próximos entre sí. Entre las bandas puede existir una <strong>banda prohibida</strong> de anchura $E_g$, en la que no se pueden encontrar electrones.</p>`,
        `<p>La banda ocupada más alta es la banda de <em>valencia</em>, y por encima de ella se encuentra la banda de <em>conducción</em>. Los electrones llenan las bandas desde abajo hacia arriba, y el principio de Pauli prohíbe que dos electrones ocupen un mismo estado. Una banda completamente llena no conduce la corriente, porque los electrones que hay en ella no tienen adónde moverse.</p>`,
        `<ul><li><strong>Conductor</strong> (metal): no hay banda prohibida, las bandas se solapan y la banda de conducción está parcialmente llena.</li><li><strong>Semiconductor</strong>: $E_g$ es aproximadamente de 0,1 a 3 eV (el silicio tiene 1,1 eV). A temperatura ambiente, algunos electrones alcanzan la banda de conducción.</li><li><strong>Aislante</strong>: $E_g$ es mayor que 3 eV (el diamante tiene 5,5 eV).</li></ul>`,
        { fig: 'v9v12-pasy', caption: 'En un conductor las bandas se solapan, en un semiconductor hay una banda prohibida estrecha E_g y en un aislante una banda ancha.' }
      ],
      examples: [
        { task: 'Un material tiene una anchura de banda prohibida $E_g = 0{,}67\\,\\text{eV}$. ¿Es un conductor, un semiconductor o un aislante?',
          steps: ['El valor está entre 0,1 y 3 eV y no es cero.', '<strong>Resultado: un semiconductor (p. ej. germanio)</strong>'] },
        { task: '¿Por qué el diamante ($E_g=5{,}5\\,\\text{eV}$) no conduce la corriente?',
          steps: ['La banda prohibida es muy ancha.', 'A temperaturas ordinarias los electrones no alcanzan la banda de conducción.', '<strong>Resultado: es un aislante</strong>'] }
      ]
    },
    'v9-polovodice': {
      title: 'Semiconductores y transistores',
      summary: 'Dopaje del silicio, la unión PN y el principio del transistor.',
      theory: [
        `<p>El silicio puro tiene cuatro electrones de valencia y se une covalentemente. A temperatura ambiente, una pequeña fracción de los electrones pasa a la banda de conducción y deja tras de sí <em>huecos</em>, lugares a los que puede pasar un electrón. Esto se llama conducción intrínseca.</p>`,
        `<p><strong>El dopaje</strong> aumenta la conductividad. Un elemento con cinco electrones de valencia (fósforo, arsénico, antimonio) aporta un electrón libre adicional y se forma un semiconductor de tipo $n$, en el que los portadores son electrones. Un elemento con tres electrones de valencia (boro, aluminio, galio) crea huecos y se forma un semiconductor de tipo $p$.</p>`,
        `<p>Una <strong>unión PN</strong> se forma al unir ambos tipos. En sentido directo circula corriente, en sentido inverso prácticamente ninguna. Un transistor consiste en dos de estas uniones, y una pequeña corriente en un circuito controla una gran corriente en el otro.</p>`,
        `<p>El transistor sirve como amplificador y como interruptor. Todos los circuitos digitales de las computadoras y de los teléfonos móviles están construidos con miles de millones de transistores.</p>`,
        { fig: 'v9v12-pn', caption: 'En la unión PN los huecos de la región p se encuentran con los electrones de la región n.' }
      ],
      examples: [
        { task: 'Añadimos fósforo al silicio. ¿Qué tipo de semiconductor se forma?',
          steps: ['El fósforo tiene 5 electrones de valencia, por lo que uno de ellos sobra.', '<strong>Resultado: un semiconductor de tipo $n$</strong>'] },
        { task: '¿Por qué un diodo apenas conduce la corriente en sentido inverso?',
          steps: ['En la unión PN se forma una región sin portadores libres.', 'Al aumentar el voltaje inverso, esta región solo se ensancha.', '<strong>Resultado: prácticamente no pasa corriente</strong>'] }
      ]
    },
    'v9-supravodivost': {
      title: 'Superconductividad',
      summary: 'Resistencia nula por debajo de la temperatura crítica, efecto Meissner y superconductores de alta temperatura.',
      theory: [
        `<p>La superconductividad es un estado en el que un material pierde por completo su resistencia eléctrica por debajo de la <em>temperatura crítica</em> $T_c$. La corriente puede fluir en él sin pérdidas.</p>`,
        `<p><strong>Efecto Meissner</strong>: un superconductor expulsa el campo magnético de su interior. Por eso un superconductor levita sobre un imán.</p>`,
        `<p>Los superconductores clásicos, como el plomo o el niobio, tienen $T_c$ de varios kelvin y se enfrían con helio líquido ($4{,}2\\,\\text{K}$). Los superconductores de alta temperatura (cupratos, p. ej. YBCO con $T_c\\approx 92\\,\\text{K}$) pueden enfriarse con nitrógeno líquido, más barato ($77\\,\\text{K}$).</p>`,
        `<p>Según la teoría BCS, los electrones de un cristal se emparejan en <em>pares de Cooper</em> gracias al intercambio de vibraciones de la red. Estos pares se mueven sin dispersarse, por lo que la resistencia es nula.</p>`,
        { fig: 'v9v12-supra', caption: 'Por debajo de la temperatura crítica Tc la resistencia de un superconductor cae a cero, mientras que un metal normal tiene una resistencia que crece con la temperatura.' }
      ],
      examples: [
        { task: 'La temperatura crítica del niobio es $T_c=9{,}2\\,\\text{K}$. ¿Cuánto es en grados Celsius?',
          steps: ['$t = T - 273{,}15$.', '$t = 9{,}2 - 273{,}15 = -263{,}95\\,{}^{\\circ}\\text{C}$.', '<strong>Resultado: aproximadamente -263,95 °C</strong>'] },
        { task: '¿Por qué un superconductor levita sobre un imán?',
          steps: ['El campo magnético no puede penetrar en el superconductor (efecto Meissner).', 'Las corrientes inducidas en la superficie crean un campo que repele al imán.', '<strong>Resultado: la fuerza repulsiva eleva al superconductor</strong>'] }
      ]
    },
    'v9-magneticke': {
      title: 'Materiales magnéticos',
      summary: 'Diamagnetismo, paramagnetismo y ferromagnetismo, dominios y temperatura de Curie.',
      theory: [
        `<p>Según su comportamiento en un campo magnético, las sustancias se dividen en <strong>diamagnéticas</strong> (repelidas débilmente, p. ej. cobre, zinc), <strong>paramagnéticas</strong> (atraídas débilmente, p. ej. aluminio, platino) y <strong>ferromagnéticas</strong> (atraídas fuertemente, p. ej. hierro, níquel, cobalto).</p>`,
        `<p>En los ferromagnetos los momentos magnéticos de los átomos se alinean en regiones con orientación común llamadas <em>dominios</em>. Sin campo, los dominios están orientados al azar y el momento neto es cero. Un campo externo los alinea y el material se imanta.</p>`,
        `<p>Por encima de la <em>temperatura de Curie</em> $T_C$ el movimiento térmico de los átomos destruye los dominios y desaparece el ferromagnetismo. El hierro tiene $T_C\\approx 770\\,{}^{\\circ}\\text{C}$.</p>`,
        `<p>Los materiales magnéticos blandos, por ejemplo las chapas de los transformadores, se imanan y desimanan con facilidad. Los materiales duros, por ejemplo los imanes permanentes, conservan su imantación.</p>`,
        { fig: 'v9v12-domeny', caption: 'En un ferromagneto los dominios están orientados al azar sin campo; en un campo externo se alinean y el material se imanta.' }
      ],
      examples: [
        { task: '¿Por qué un clip de papel se pega a un imán, pero un alambre de cobre no?',
          steps: ['El clip está hecho de acero, que contiene hierro; sus dominios se alinean en el campo del imán.', 'El cobre es diamagnético y su respuesta es débil y repulsiva.', '<strong>Resultado: el clip es ferromagnético</strong>'] },
        { task: 'El hierro tiene una temperatura de Curie de 770 °C. ¿Qué ocurre al calentarlo a 800 °C?',
          steps: ['800 °C está por encima de la temperatura de Curie.', 'Los dominios se destruyen y el hierro pierde su imantación permanente.', '<strong>Resultado: deja de ser ferromagnético</strong>'] }
      ]
    },
    'v9-nanomaterialy': {
      title: 'Nanomateriales y materiales cuánticos',
      summary: 'La razón superficie-volumen en los nanomateriales y ejemplos de materiales cuánticos.',
      theory: [
        `<p>Los nanomateriales tienen al menos una dimensión en el intervalo de aproximadamente 1 a 100 nm. Al disminuir el tamaño aumenta la razón superficie-volumen y una gran parte de los átomos queda en la superficie. Propiedades como el color, el punto de fusión o la reactividad pueden por ello diferir notablemente de las de una pieza grande de la misma sustancia.</p>`,
        `<p>Para un cubo de arista $a$ tenemos $S = 6a^2$ y $V = a^3$, por lo que $\\dfrac{S}{V}=\\dfrac{6}{a}$. La razón disminuye al aumentar la arista; por eso la arista está en el denominador. Si la arista se reduce diez veces, la razón aumenta diez veces.</p>`,
        `<p><strong>Los materiales cuánticos</strong> muestran los efectos de la mecánica cuántica a escala macroscópica. Ejemplos son el grafeno (una sola capa de átomos de carbono con una movilidad electrónica muy alta), los puntos cuánticos (su tamaño determina el color de la luz emitida) y los aislantes topológicos.</p>`,
        { fig: 'v9v12-nano', caption: 'Al dividir un cubo en cubos más pequeños se conserva el volumen, pero aumenta la superficie. La razón S/V crece al disminuir el tamaño.' }
      ],
      examples: [
        { task: 'Un cubo tiene una arista $a=2\\,\\text{nm}$. ¿Cuál es la razón $S/V$?',
          steps: ['$\\dfrac{S}{V}=\\dfrac{6a^2}{a^3}=\\dfrac{6}{a}$.', '$\\dfrac{6}{2}=3\\,\\text{nm}^{-1}$.', '<strong>Resultado: 3 nm⁻¹</strong>'] },
        { task: '¿Cómo cambia la razón $S/V$ si se duplica la arista?',
          steps: ['$S/V = 6/a$ es inversamente proporcional a la arista.', 'Al duplicar la arista, la razón se reduce a la mitad.', '<strong>Resultado: se reduce a la mitad</strong>'] }
      ]
    },
    'v10-hviezdy': {
      title: 'Formación, evolución y estructura de las estrellas',
      summary: 'Cómo se forma una estrella, por qué permanece en equilibrio y cómo su luminosidad depende del radio y de la temperatura.',
      theory: [
        `<p>Una estrella se forma a partir de una región condensada de gas y polvo interestelares, la llamada nebulosa. La gravedad comprime el material y el gas se calienta. Cuando la temperatura en el núcleo alcanza unas decenas de millones de kelvin, comienza la fusión termonuclear, en la que el hidrógeno se convierte en helio.</p>`,
        `<p><strong>¿Por qué no colapsa una estrella?</strong> La gravedad intenta comprimir la estrella hacia dentro, mientras que la presión del gas caliente y de la radiación actúa en sentido contrario. Cuando ambos efectos están en equilibrio, hablamos de <em>equilibrio hidrostático</em>. La estrella es estable mientras dure este equilibrio.</p>`,
        `<p><strong>La luminosidad</strong> $L$ es la potencia total que emite la estrella. Según la ley de Stefan–Boltzmann, $L=4\\pi R^2\\sigma T^4$, donde $R$ es el radio y $T$ la temperatura superficial. La luminosidad crece con el cuadrado del radio, pero con la cuarta potencia de la temperatura, por lo que un pequeño cambio de temperatura altera notablemente el brillo.</p>`,
        `<p>Las estrellas se ordenan en el <strong>diagrama de Hertzsprung–Russell</strong>: la temperatura (o el color) está en el eje horizontal y la luminosidad en el eje vertical. La mayoría de las estrellas, incluido el Sol, se encuentran en la secuencia principal, donde una estrella quema hidrógeno en su núcleo.</p>`,
        { fig: 'v9v12-hr', caption: 'Diagrama de Hertzsprung–Russell: las estrellas de la secuencia principal queman hidrógeno, las gigantes son más brillantes y las enanas blancas son más débiles a alta temperatura.' }
      ],
      examples: [
        { task: 'Una estrella tiene tres veces el radio del Sol y el doble de su temperatura superficial. ¿Cuántas veces es más luminosa?',
          steps: [
            'Razón de luminosidades: $\\frac{L}{L_\\odot}=\\left(\\frac{R}{R_\\odot}\\right)^2\\left(\\frac{T}{T_\\odot}\\right)^4$.',
            '$=3^2\\cdot 2^4=9\\cdot 16=144$.',
            '<strong>Resultado: 144 veces</strong>'
          ] }
      ]
    },
    'v10-galaxie': {
      title: 'Galaxias y su evolución',
      summary: 'Los tipos principales de galaxias y cómo se diferencian por sus estrellas, su gas y su forma.',
      theory: [
        `<p>Una galaxia es un sistema ligado gravitacionalmente de estrellas, gas, polvo y materia oscura. Las galaxias se dividen principalmente por su forma: <strong>elípticas</strong> (lisas, formadas por estrellas viejas), <strong>espirales</strong> (un disco plano con brazos) e <strong>irregulares</strong>.</p>`,
        `<p>La forma de una galaxia está estrechamente relacionada con la cantidad de gas que le queda. El gas es la materia prima de las estrellas nuevas: en los brazos espirales nacen constantemente estrellas jóvenes y azules, mientras que en las galaxias elípticas el gas está casi agotado y la formación estelar se ha apagado.</p>`,
        `<p>Las galaxias crecen agrupando la materia poco a poco, y a menudo crecen mediante <strong>colisiones y fusiones</strong> con otras galaxias. La interacción gravitatoria puede remodelar ambas galaxias y desencadenar una nueva oleada de formación estelar.</p>`
      ],
      examples: [
        { task: 'Una galaxia tiene una forma elíptica lisa y casi nada de gas. ¿Qué estrellas predominan en ella?',
          steps: ['La formación de estrellas en una galaxia depende del suministro de gas.', 'Sin gas no nacen estrellas nuevas, por lo que permanecen estrellas viejas y rojizas.', '<strong>Resultado: estrellas viejas</strong>'] }
      ]
    },
    'v10-cierne-diery': {
      title: 'Agujeros negros y estrellas de neutrones',
      summary: 'Qué determina el radio de un agujero negro y por qué se forma una estrella de neutrones o un agujero negro cuando se agota el combustible.',
      theory: [
        `<p>Cuando una estrella de masa suficiente agota su combustible nuclear, su núcleo colapsa. Si la masa restante no supera aproximadamente 1,4 masas solares, se forma una <strong>estrella de neutrones</strong>: una esfera densa de unos 10 km de radio, sostenida por la presión de los neutrones.</p>`,
        `<p>Un <strong>agujero negro</strong> se forma si la masa es mayor. La gravedad cerca de él es tan intensa que ni siquiera la luz puede escapar más allá del límite llamado <em>horizonte de sucesos</em>. El radio de este límite es el radio de Schwarzschild.</p>`,
        `<p>El radio de Schwarzschild es $r_s=\\frac{2GM}{c^2}$, donde $G$ es la constante gravitatoria, $M$ la masa y $c$ la velocidad de la luz. Para la masa del Sol es aproximadamente $2{,}95\\,\\text{km}$. El radio es proporcional a la masa, por lo que un agujero negro dos veces más pesado tiene un horizonte dos veces mayor.</p>`,
        { fig: 'v9v12-cierna-diera', caption: 'El radio de Schwarzschild es proporcional a la masa. Un agujero negro dos veces más pesado tiene un horizonte dos veces mayor.' }
      ],
      examples: [
        { task: '¿Cuál es el radio de Schwarzschild de un agujero negro de masa $5\\,M_\\odot$?',
          steps: ['$r_s\\approx 2{,}95\\,\\text{km}\\cdot 5$.', '$r_s\\approx 14{,}75\\,\\text{km}$.', '<strong>Resultado: aproximadamente 14,75 km</strong>'] }
      ]
    },
    'v10-exoplanety': {
      title: 'Exoplanetas y sistemas planetarios',
      summary: 'Cómo los astrónomos encuentran planetas alrededor de otras estrellas y qué aprenden de las observaciones.',
      theory: [
        `<p>Un <strong>exoplaneta</strong> es un planeta que orbita una estrella distinta del Sol. Rara vez se ve directamente, por eso se busca de forma indirecta, más a menudo mediante el método del tránsito o midiendo el movimiento de la estrella.</p>`,
        `<p><strong>Método del tránsito:</strong> cuando un planeta pasa delante de su estrella, el brillo de esta disminuye brevemente. La disminución es proporcional al área que cubre el planeta: $\\Delta\\text{brillo}=\\left(\\frac{r_p}{R}\\right)^2$. Obsérvese que es el cuadrado de la razón de los radios.</p>`,
        `<p><strong>Método Doppler:</strong> el planeta atrae gravitatoriamente a la estrella, y esta se mueve ligeramente de un lado a otro según lo ve el observador. El desplazamiento de las líneas espectrales revela este movimiento aunque el planeta no se vea.</p>`,
        { fig: 'v9v12-tranzit', caption: 'Durante un tránsito planetario el brillo de la estrella disminuye brevemente en la razón de las áreas, es decir, en (r_p/R)².' }
      ],
      examples: [
        { task: `Un planeta tiene un radio igual a una décima parte del radio de su estrella. ¿En qué porcentaje disminuye el brillo de la estrella durante un tránsito?`,
          steps: ['$\\left(\\frac{1}{10}\\right)^2=\\frac{1}{100}$.', 'El brillo disminuye en $1\\,\\%$.', '<strong>Resultado: 1 %</strong>'] }
      ]
    },
    'v10-rozpinanie': {
      title: 'Expansión del universo',
      summary: `Ley de Hubble: cuanto más lejos está una galaxia, más rápido se aleja de nosotros.`,
      theory: [
        `<p>Edwin Hubble descubrió que los espectros de las galaxias lejanas están desplazados hacia el rojo. Este <em>corrimiento al rojo</em> significa que las galaxias se alejan de nosotros. Cuanto más lejos está la galaxia, mayor es su desplazamiento.</p>`,
        `<p><strong>Ley de Hubble:</strong> $v=H_0\\,d$, donde $v$ es la velocidad de alejamiento, $d$ la distancia y $H_0$ la constante de Hubble. Su valor es aproximadamente $70\\,\\text{km/s/Mpc}$, donde $1\\,\\text{Mpc}\\approx 3{,}26$ millones de años luz.</p>`,
        `<p>Es importante entender que <strong>las galaxias no se mueven por el espacio</strong>; es el espacio entre ellas el que se expande. Por eso las galaxias más lejanas se alejan más rápido, aunque no tengan velocidad propia.</p>`,
        { fig: 'v9v12-hubble', caption: 'Ley de Hubble: la velocidad de alejamiento de las galaxias es proporcional a su distancia.' }
      ],
      examples: [
        { task: 'Una galaxia está a $100\\,\\text{Mpc}$. ¿Cuál es su velocidad de alejamiento?',
          steps: ['$v=H_0\\,d=70\\cdot 100$.', '<strong>Resultado: 7000 km/s</strong>'] }
      ]
    },
    'v10-velky-tresk': {
      title: 'El Big Bang y el fondo cósmico de microondas',
      summary: 'Cómo surgió el universo de una fase caliente y por qué hoy observamos una radiación débil que llega desde todas las direcciones.',
      theory: [
        `<p>Según el modelo del <strong>Big Bang</strong>, el universo fue en otro tiempo muy denso y caliente. Desde entonces se expande y se enfría. No fue una explosión en el espacio vacío, sino la expansión del propio espacio.</p>`,
        `<p>Poco después del comienzo, el universo estaba lleno de radiación, y se volvió transparente cuando se formaron los átomos. Desde entonces esta radiación solo se ha estirado, y hoy la vemos como el <strong>fondo cósmico de microondas</strong> con una temperatura de aproximadamente $2{,}725\\,\\text{K}$.</p>`,
        `<p>La expansión aumenta las longitudes de onda de la radiación en la misma proporción que crece la escala del universo. Por ello la temperatura de la radiación en el pasado era proporcional a $(1+z)$, donde $z$ es el corrimiento al rojo. Con $z=1$ la temperatura era el doble del valor actual.</p>`,
        { fig: 'v9v12-natiahnutie', caption: 'La expansión del universo estira la longitud de onda de la radiación, por lo que el fondo de microondas actual tiene una temperatura menor.' }
      ],
      examples: [
        { task: '¿Cuál era la temperatura de la radiación con un corrimiento al rojo $z=3$?',
          steps: ['$T(z)=T_0(1+z)=2{,}725\\cdot(1+3)$.', '$=10{,}9\\,\\text{K}$.', '<strong>Resultado: aproximadamente 10,9 K</strong>'] }
      ]
    },
    'v10-temna-hmota': {
      title: 'Materia oscura y energía oscura',
      summary: 'Las pruebas de la materia y la energía invisibles y su parte en la densidad total del universo.',
      theory: [
        `<p><strong>La materia oscura</strong> está relacionada con la gravedad, pero no emite ni absorbe luz. Las pruebas de su existencia son las velocidades de las estrellas en los bordes de las galaxias, que sin ella serían demasiado grandes para que la galaxia permaneciera unida.</p>`,
        `<p><strong>La energía oscura</strong> es la componente que acelera la expansión del universo. Las observaciones de supernovas lejanas mostraron que hoy la expansión se está acelerando.</p>`,
        `<p>Las proporciones del universo actual son aproximadamente: materia ordinaria $\\approx 5\\,\\%$, materia oscura $\\approx 27\\,\\%$ y energía oscura $\\approx 68\\,\\%$. Si el universo es plano, la densidad total es $\\Omega=1$ y se cumple $\\Omega_\\Lambda=1-\\Omega_m$.</p>`,
        { fig: 'v9v12-zlozenie', caption: 'Proporciones del universo actual: materia ordinaria alrededor de 5 %, materia oscura 27 %, energía oscura 68 %.' }
      ],
      examples: [
        { task: 'La densidad de materia es $\\Omega_m=0{,}3$. ¿Qué parte representa la energía oscura en un universo plano?',
          steps: ['$\\Omega_\\Lambda=1-\\Omega_m=1-0{,}3$.', '<strong>Resultado: 0,7</strong>'] }
      ]
    },
    'v10-kozmologicke-modely': {
      title: 'Modelos cosmológicos del universo',
      summary: 'Cómo la densidad total determina si el universo es abierto, plano o cerrado.',
      theory: [
        `<p>Un modelo cosmológico describe la geometría y la evolución del universo. La magnitud clave es la razón entre la densidad media total $\\rho$ y la <em>densidad crítica</em> $\\rho_c$, que se denota $\\Omega=\\rho/\\rho_c$.</p>`,
        `<ol>
        <li>$\\Omega &lt; 1$: un universo <strong>abierto</strong>, que se expande para siempre.</li>
        <li>$\\Omega = 1$: un universo <strong>plano</strong>, cuyo espacio tiene geometría euclidiana.</li>
        <li>$\\Omega &gt; 1$: un universo <strong>cerrado</strong>, que tiene curvatura positiva.</li>
      </ol>`,
        `<p>Las observaciones de la radiación cósmica de fondo muestran que el universo actual es muy cercano a plano. El modelo moderno, que incluye la energía oscura, supone por ello una densidad total próxima a uno.</p>`
      ],
      examples: [
        { task: 'El universo tiene $\\Omega=0{,}4$. ¿Cuál es su modelo?',
          steps: ['Comparamos: $0{,}4&lt;1$.', '<strong>Resultado: un universo abierto</strong>'] }
      ]
    },
    'v11-hydrostatika': {
      title: 'Hidrostática',
      summary: 'La presión en un líquido en reposo depende solo de la profundidad y de la densidad, no de la forma del recipiente.',
      theory: [
        `<p><strong>La hidrostática</strong> estudia los líquidos en reposo. La presión en un líquido a la profundidad $h$ es $p=\\rho g h$, donde $\\rho$ es la densidad del líquido y $g$ la aceleración gravitatoria. Es la <em>presión manométrica</em>, es decir, la presión por encima de la atmosférica.</p>`,
        `<p>La presión no depende de la forma del recipiente. En un recipiente ancho y en uno estrecho de la misma profundidad, la presión en el fondo es la misma. Esta aparente paradoja se explica porque el peso del líquido lo soportan las paredes del recipiente, no solo su fondo.</p>`,
        `<p>La presión total (absoluta) es $p=p_0+\\rho g h$, donde $p_0$ es la presión atmosférica. La diferencia de presión en un líquido es proporcional a la diferencia de altura, por lo que la presión aumenta hacia abajo.</p>`,
        `<p><strong>Ley de Pascal:</strong> la presión aplicada a un líquido encerrado se transmite por igual en todas las direcciones. Se usa en los elevadores hidráulicos, donde una pequeña fuerza sobre un pistón pequeño levanta una carga grande en un pistón grande.</p>`,
        { fig: 'v9v12-nadoba', caption: 'La presión en un líquido depende de la profundidad h, no de la forma del recipiente. La presión en el fondo de ambos recipientes es la misma.' }
      ],
      examples: [
        { task: '¿Cuál es la presión manométrica del agua a una profundidad de $4\\,\\text{m}$? La densidad del agua es $1000\\,\\text{kg/m}^3$ y $g=9{,}81\\,\\text{m/s}^2$.',
          steps: ['$p=\\rho g h=1000\\cdot 9{,}81\\cdot 4=39\\,240\\,\\text{Pa}$.', '<strong>Resultado: 39,24 kPa</strong>'] }
      ]
    },
    'v11-tlak-vztlak': {
      title: 'Presión y empuje',
      summary: `Principio de Arquímedes: un cuerpo sumergido experimenta un empuje igual al peso del líquido desplazado.`,
      theory: [
        `<p>Un cuerpo sumergido en un líquido se vuelve más ligero por una fuerza dirigida hacia arriba. Este <strong>empuje</strong> viene dado por el principio de Arquímedes: $F_{vz}=\\rho_k\\,g\\,V$, donde $\\rho_k$ es la densidad del líquido y $V$ el volumen de la parte sumergida del cuerpo.</p>`,
        `<p>El empuje no depende de la profundidad ni de la densidad del cuerpo, solo del volumen del líquido desplazado. Por eso se llama también peso del líquido desplazado.</p>`,
        `<p>Que un cuerpo flote se decide comparando densidades. Un cuerpo con densidad menor que la del líquido flota y se hunde solo hasta que el líquido desplazado tiene un peso igual al de todo el cuerpo. Un cuerpo con mayor densidad se hunde hasta el fondo.</p>`,
        { fig: 'obr-vztlak', caption: 'El empuje F_vz apunta hacia arriba y el peso F_g hacia abajo. Un cuerpo sumergido se vuelve más ligero en el peso del líquido desplazado.' }
      ],
      examples: [
        { task: 'Un cuerpo de volumen $3\\,\\text{dm}^3$ está completamente sumergido en agua. ¿Cuál es el empuje?',
          steps: ['$V=3\\,\\text{dm}^3=0{,}003\\,\\text{m}^3$.', '$F_{vz}=1000\\cdot 9{,}81\\cdot 0{,}003=29{,}43\\,\\text{N}$.', '<strong>Resultado: 29,43 N</strong>'] }
      ]
    },
    'v11-kontinuita': {
      title: 'Ecuación de continuidad',
      summary: 'Si un líquido no escapa ni se acumula a lo largo del flujo, el producto de la sección transversal y la velocidad es constante.',
      theory: [
        `<p>En un flujo estacionario de un líquido incompresible, la masa no se acumula ni desaparece. Por ello el mismo volumen debe atravesar cada sección transversal en una unidad de tiempo: $S_1 v_1 = S_2 v_2 = \\text{const.}$</p>`,
        `<p>La magnitud $Q=S\\,v$ se llama <strong>caudal volumétrico</strong>. Donde una tubería es más estrecha, el agua fluye más rápido. Por eso un río se acelera en un tramo estrecho y se frena en una llanura ancha.</p>`,
        `<p>La ecuación de continuidad es la ley de conservación de la masa para el flujo de un líquido. Se cumple exactamente para un líquido incompresible y de forma aproximada para gases a bajas velocidades.</p>`,
        { fig: 'v9v12-kontinuita', caption: 'Para un líquido incompresible se cumple S₁v₁ = S₂v₂. Donde la sección transversal es menor, el líquido fluye más rápido.' }
      ],
      examples: [
        { task: 'Una tubería se estrecha desde una sección transversal de $6\\,\\text{cm}^2$ a $2\\,\\text{cm}^2$. El agua en la parte ancha fluye a $1{,}5\\,\\text{m/s}$. ¿Cuál es la velocidad en la parte estrecha?',
          steps: ['$S_1 v_1=S_2 v_2$, por lo tanto $v_2=\\frac{6\\cdot 1{,}5}{2}$.', '<strong>Resultado: 4,5 m/s</strong>'] }
      ]
    },
    'v11-bernoulli': {
      title: 'Ecuación de Bernoulli',
      summary: 'La energía en un líquido en movimiento se conserva: donde la velocidad es mayor, la presión es menor.',
      theory: [
        `<p>La <strong>ecuación de Bernoulli</strong> expresa la conservación de la energía para un líquido ideal, incompresible y sin rozamiento en un flujo: $p+\\frac{1}{2}\\rho v^2+\\rho g h=\\text{const.}$ Los términos de la izquierda son la presión, la energía cinética y la energía potencial por unidad de volumen.</p>`,
        `<p>Para una tubería horizontal ($h$ es igual en todas partes) tenemos $p_1+\\frac{1}{2}\\rho v_1^2=p_2+\\frac{1}{2}\\rho v_2^2$. Si la velocidad aumenta en un punto, la presión en ese punto disminuye.</p>`,
        `<p>Este fenómeno se llama <strong>efecto Venturi</strong> y se usa en carburadores, medidores de caudal de Venturi y bombas de vacío. Se produce principalmente en las partes estrechadas de una tubería.</p>`,
        { fig: 'v9v12-venturi', caption: 'En el punto estrechado la velocidad aumenta y la presión baja. Los niveles en los tubos del manómetro lo muestran.' }
      ],
      examples: [
        { task: 'Agua fluye por una tubería horizontal. En el punto estrecho la velocidad es $6\\,\\text{m/s}$ y en el punto ancho $2\\,\\text{m/s}$. ¿Cuál es la diferencia de presión $p_1-p_2$ en kPa?',
          steps: ['$p_1-p_2=\\frac{1}{2}\\rho\\left(v_2^2-v_1^2\\right)=\\frac{1}{2}\\cdot 1000\\cdot(36-4)$.', '$=16\\,000\\,\\text{Pa}$.', '<strong>Resultado: 16 kPa</strong>'] }
      ]
    },
    'v11-viskozita': {
      title: 'Viscosidad y flujo laminar',
      summary: `Rozamiento interno de los líquidos, ley de Stokes y resistencia al movimiento lento de una esfera pequeña.`,
      theory: [
        `<p><strong>La viscosidad</strong> (viscosidad dinámica $\\eta$) es una medida del rozamiento interno de un líquido. La miel tiene mayor viscosidad que el agua, porque sus capas se deslizan unas contra otras con más dificultad. La unidad es $\\text{Pa}\\cdot\\text{s}$.</p>`,
        `<p><strong>El flujo laminar</strong> es suave: las capas del líquido se deslizan unas sobre otras sin mezclarse. Durante el movimiento lento de un cuerpo en un líquido surge una resistencia proporcional a la velocidad: <em>ley de Stokes</em>, $F=6\\pi\\eta r v$, para una esfera de radio $r$.</p>`,
        `<p>Cuidado con la diferencia entre radio y diámetro: la fórmula contiene el radio $r$. Si se sustituye el diámetro, la fuerza sale dos veces mayor.</p>`,
        { fig: 'v9v12-vrstvy', caption: 'En el flujo laminar las capas de líquido se deslizan unas sobre otras, y el rozamiento interno causa la resistencia.' }
      ],
      examples: [
        { task: 'Una esfera de radio $1\\,\\text{cm}$ se mueve a una velocidad de $0{,}5\\,\\text{m/s}$ en un líquido con $\\eta=2\\,\\text{Pa}\\cdot\\text{s}$. ¿Cuál es la resistencia?',
          steps: ['$F=6\\pi\\eta r v=6\\pi\\cdot 2\\cdot 0{,}01\\cdot 0{,}5$.', '$F\\approx 0{,}188\\,\\text{N}$.', '<strong>Resultado: aproximadamente 188 mN</strong>'] }
      ]
    },
    'v11-turbulencia': {
      title: 'Turbulencia',
      summary: 'El número de Reynolds decide si el flujo es suave o remolinante.',
      theory: [
        `<p>A velocidades y diámetros mayores, el flujo laminar se rompe en un flujo <strong>turbulento</strong>: aparecen remolinos y mezcla que cambian de forma aleatoria en el tiempo y en el espacio.</p>`,
        `<p>El tipo de flujo lo decide el <strong>número de Reynolds</strong> $\\text{Re}=\\frac{\\rho v d}{\\eta}$, donde $d$ es una dimensión característica (por ejemplo, el diámetro de una tubería). Para una tubería, aproximadamente: $\\text{Re}&lt;2300$ laminar, $\\text{Re}&gt;4000$ turbulento, y el flujo de transición está entre ambos valores.</p>`,
        `<p>La turbulencia aumenta la resistencia del flujo y la mezcla de sustancias. En la práctica, por tanto, se intenta mantener el flujo suave, por ejemplo sobre las alas de los aviones, o, al contrario, se provoca turbulencia para que el combustible se mezcle mejor.</p>`,
        { fig: 'v9v12-profil', caption: 'En el flujo laminar la velocidad en la sección transversal tiene forma parabólica; en el flujo turbulento el perfil es más plano.' }
      ],
      examples: [
        { task: `Agua ($\\rho=1000\\,\\text{kg/m}^3$, $\\eta=10^{-3}\\,\\text{Pa}\\cdot\\text{s}$) fluye por una tubería de diámetro $0{,}05\\,\\text{m}$ a una velocidad de $1\\,\\text{m/s}$. ¿Cuál es el número de Reynolds?`,
          steps: ['$\\text{Re}=\\frac{1000\\cdot 1\\cdot 0{,}05}{10^{-3}}$.', '<strong>Resultado: Re = 50 000, el flujo es turbulento</strong>'] }
      ]
    },
    'v11-aerodynamika': {
      title: 'Flujo de gases y aerodinámica',
      summary: 'Resistencia aerodinámica y sustentación: de qué dependen y por qué crecen con el cuadrado de la velocidad.',
      theory: [
        `<p>A velocidades ordinarias los gases son casi incompresibles y en muchos aspectos se pueden describir con las mismas leyes que los líquidos. Los cuerpos que se mueven por el aire son frenados por la <strong>resistencia aerodinámica</strong>.</p>`,
        `<p>La resistencia viene dada por $F=\\frac{1}{2}\\,c_w\\,\\rho\\,S\\,v^2$, donde $c_w$ es el coeficiente de resistencia (la forma del cuerpo), $\\rho$ la densidad del aire, $S$ el área frontal y $v$ la velocidad. La resistencia crece con el <strong>cuadrado</strong> de la velocidad: el doble de velocidad significa cuatro veces más resistencia.</p>`,
        `<p>El ala de un avión o de un vehículo genera <strong>sustentación</strong>, porque el flujo por encima es más rápido y la presión allí es menor (Bernoulli). La forma aerodinámica se diseña, por tanto, para que la resistencia sea lo menor posible y la sustentación lo mayor posible.</p>`,
        { fig: 'v9v12-krido', caption: 'Por encima del ala el flujo es más rápido y la presión menor; por debajo del ala la presión es mayor. La diferencia de presión crea la sustentación.' }
      ],
      examples: [
        { task: 'Un coche tiene un área frontal de $2\\,\\text{m}^2$, un coeficiente de resistencia $c_w=0{,}5$ y circula a $20\\,\\text{m/s}$. ¿Cuál es la resistencia del aire? La densidad del aire es $1{,}2\\,\\text{kg/m}^3$.',
          steps: ['$F=\\frac{1}{2}\\cdot 0{,}5\\cdot 1{,}2\\cdot 2\\cdot 20^2$.', '$=0{,}6\\cdot 400=240\\,\\text{N}$.', '<strong>Resultado: 240 N</strong>'] }
      ]
    },
    'v12-modelovanie': {
      title: 'Modelado matemático de fenómenos físicos',
      summary: 'Cómo construir un modelo matemático a partir de un razonamiento físico y comprobar si concuerda con la observación.',
      theory: [
        `<p>Un <strong>modelo</strong> es una descripción matemática simplificada de un fenómeno. Primero identificamos las magnitudes que influyen en el resultado, después escribimos las relaciones entre ellas y, por último, comprobamos si el cálculo concuerda con la medición o con una expectativa razonable.</p>`,
        `<p>Un ejemplo típico es la <strong>desintegración radiactiva</strong>. El número de núcleos no desintegrados disminuye en proporción a su número actual, lo que conduce a una ley exponencial. Con un periodo de semidesintegración $T_{1/2}$ tenemos $N(t)=N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>El modelo tiene limitaciones: supone que la desintegración es aleatoria e independiente del entorno. Una medición real puede, por tanto, mostrar pequeñas desviaciones, que se compensan al promediar un número grande de núcleos.</p>`,
        { fig: 'v9v12-rozpad', caption: 'En cada periodo de semidesintegración el número de núcleos no desintegrados se reduce a la mitad; la ley exponencial es N = N₀(1/2)^(t/T½).' }
      ],
      examples: [
        { task: 'Una muestra contiene inicialmente $800$ núcleos y el periodo de semidesintegración es de $10$ años. ¿Cuántos núcleos quedan después de $30$ años?',
          steps: ['Después de $30$ años han transcurrido $3$ periodos de semidesintegración.', '$N=800\\cdot\\left(\\frac{1}{2}\\right)^3=800\\cdot\\frac{1}{8}$.', '<strong>Resultado: 100 núcleos</strong>'] }
      ]
    },
    'v12-diferencialne-rovnice': {
      title: 'Ecuaciones diferenciales',
      summary: 'Las ecuaciones de movimiento son ecuaciones diferenciales; las resolvemos por integración y con una condición inicial.',
      theory: [
        `<p>La segunda ley de Newton $F=ma$ es una ecuación diferencial, porque la aceleración es la derivada de la velocidad: $a=\\frac{dv}{dt}$. Las magnitudes no aparecen aquí directamente, sino a través de su <em>cambio</em> en el tiempo.</p>`,
        `<p>La <strong>solución</strong> se obtiene por integración. De $\\frac{dv}{dt}=a$ obtenemos $v(t)=at+C$. La constante $C$ se determina a partir de la <em>condición inicial</em>, por ejemplo $v(0)=v_0$. Por ello una ecuación diferencial siempre se resuelve junto con tal condición.</p>`,
        `<p>Las ecuaciones diferenciales describen casi todos los fenómenos dinámicos: el movimiento de los cuerpos, los circuitos eléctricos, la propagación del calor o de las ondas. Su solución es única solo cuando conocemos suficientes condiciones iniciales.</p>`,
        { fig: 'v9v12-rovnice', caption: 'La ecuación dv/dt = a tiene infinitas soluciones v = at + C. La condición inicial selecciona una de ellas.' }
      ],
      examples: [
        { task: 'Resuelve $\\frac{dv}{dt}=2$ con la condición $v(0)=5$. ¿Cuál es la velocidad en el instante $t=4$?',
          steps: ['$v(t)=2t+C$, y de $v(0)=5$ obtenemos $C=5$.', '$v(t)=2t+5$, por lo tanto $v(4)=8+5$.', '<strong>Resultado: 13</strong>'] }
      ]
    },
    'v12-vektory': {
      title: 'Análisis vectorial y tensores',
      summary: 'Productos escalar y vectorial, que describen el trabajo de una fuerza y el momento de una fuerza; el tensor como generalización.',
      theory: [
        `<p>Un <strong>vector</strong> tiene módulo y dirección; lo escribimos mediante sus componentes $\\vec a=(a_1,a_2,a_3)$. Los vectores se suman componente a componente. El módulo es $|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}$.</p>`,
        `<p>El <strong>producto escalar</strong> $\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3$ es un número. Se usa para el trabajo de una fuerza: $W=\\vec F\\cdot\\vec s$. También se cumple $\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\varphi$, por lo que es cero para vectores mutuamente perpendiculares.</p>`,
        `<p>El <strong>producto vectorial</strong> $\\vec a\\times\\vec b$ es un vector perpendicular a ambos vectores originales, por ejemplo el momento de una fuerza $\\vec M=\\vec r\\times\\vec F$. Un <strong>tensor</strong> es una generalización: por ejemplo, el tensor de tensiones en un sólido asigna un vector de fuerza a cada plano.</p>`,
        { fig: 'v9v12-moment', caption: 'El momento de fuerza M = r × F es un vector perpendicular tanto al vector de posición r como a la fuerza F.' }
      ],
      examples: [
        { task: 'Calcula $\\vec a\\cdot\\vec b$ para $\\vec a=(1,2,3)$ y $\\vec b=(4,-5,6)$.',
          steps: ['$1\\cdot 4+2\\cdot(-5)+3\\cdot 6$.', '$=4-10+18=12$.', '<strong>Resultado: 12</strong>'] }
      ]
    },
    'v12-fourier': {
      title: 'Análisis de Fourier',
      summary: 'Una señal periódica se descompone en componentes sinusoidales y se averigua qué frecuencias contiene.',
      theory: [
        `<p>Toda forma de onda periódica de periodo $T$ puede escribirse como suma de senos y cosenos con múltiplos de la frecuencia fundamental $\\omega=\\frac{2\\pi}{T}$. Esta suma es una <strong>serie de Fourier</strong>; sus términos se llaman componentes armónicas.</p>`,
        `<p>Los coeficientes del desarrollo se obtienen por integración: multiplicamos la señal por la función adecuada e integramos el resultado en un periodo. Gracias a la <em>ortogonalidad</em> de senos y cosenos, los demás términos se anulan.</p>`,
        `<p>Una señal de onda cuadrada de amplitud $A$ tiene solo armónicos impares, y la amplitud del $n$-ésimo es $\\frac{4A}{n\\pi}$. El desarrollo de Fourier muestra qué frecuencias deben transmitirse para que la señal no se distorsione, y es la base del análisis espectral.</p>`,
        { fig: 'v9v12-fourier', caption: 'Una señal de onda cuadrada puede componerse a partir de senos. El primer armónico tiene amplitud 4A/π.' }
      ],
      examples: [
        { task: '¿Cuál es la amplitud del primer armónico de una señal de onda cuadrada de amplitud $A=3$?',
          steps: ['Para el primer armónico $n=1$ y la fórmula $\\frac{4A}{n\\pi}$.', '$\\frac{4\\cdot 3}{\\pi}\\approx 3{,}82$.', '<strong>Resultado: aproximadamente 3,82</strong>'] }
      ]
    },
    'v12-numericke-metody': {
      title: 'Solución numérica de problemas físicos',
      summary: `Cuando una ecuación no puede resolverse con una fórmula, la resolvemos en pequeños pasos, por ejemplo con el método de Euler.`,
      theory: [
        `<p>Muchas ecuaciones diferenciales no tienen solución en forma de fórmula. En tales casos las resolvemos <strong>numéricamente</strong>: el tiempo se divide en pasos de longitud $h$, y en cada paso estimamos el cambio de la magnitud.</p>`,
        `<p><strong>El método de Euler</strong> para la ecuación $\\frac{dy}{dt}=f(t,y)$ calcula $y_{n+1}=y_n+h\\,f(t_n,y_n)$. Es sencillo, pero el error disminuye solo linealmente con el paso, por lo que en la práctica se usan métodos más precisos, por ejemplo Runge–Kutta.</p>`,
        `<p>Elegir el paso es un compromiso: un paso pequeño da un resultado más preciso, pero exige más cálculo. Un paso demasiado grande puede causar inestabilidad, en la que las desviaciones crecen y la solución deja de tener sentido.</p>`,
        { fig: 'v9v12-euler', caption: 'El método de Euler con paso h = 0,5 aproxima la ecuación dy/dt = y mediante una poligonal que queda por debajo de la curva exacta.' }
      ],
      examples: [
        { task: `Resuelve $\\frac{dy}{dt}=-y$ con $y(0)=10$ por el método de Euler usando el paso $h=0{,}1$. ¿Cuál es el valor de $y_1$?`,
          steps: ['$y_1=y_0+h\\cdot(-y_0)=10+0{,}1\\cdot(-10)$.', '$=10-1=9$.', '<strong>Resultado: 9</strong>'] }
      ]
    },
    'v12-pocitacove-simulacie': {
      title: 'Simulaciones por computadora',
      summary: 'Una simulación avanza en pasos; la longitud del paso y el tiempo total determinan el número de cálculos.',
      theory: [
        `<p>Una <strong>simulación por computadora</strong> aplica repetidamente la ley de movimiento en pequeños pasos de tiempo. Al inicio tenemos el estado del sistema (posiciones, velocidades), y en cada paso se calcula un nuevo estado.</p>`,
        `<p>El número de pasos para un tiempo $t$ y un paso $h$ es $N=\\frac{t}{h}$. Si se reduce el paso a la mitad, el cálculo tarda el doble, pero la precisión aumenta. Esto no se puede elegir libremente a mano; en una computadora es una decisión clave.</p>`,
        `<p>Las simulaciones se usan siempre que no hay solución en forma de fórmula: el movimiento de los planetas en un sistema de tres cuerpos, el flujo de aire alrededor de un ala o la propagación del calor en un material.</p>`
      ],
      examples: [
        { task: 'Una simulación de una caída debe durar $10\\,\\text{s}$ y el paso es $0{,}05\\,\\text{s}$. ¿Cuántos pasos se necesitan?',
          steps: ['$N=\\frac{t}{h}=\\frac{10}{0{,}05}$.', '<strong>Resultado: 200 pasos</strong>'] }
      ]
    },
    'v12-konecne-prvky': {
      title: 'El método de los elementos finitos',
      summary: 'Un cuerpo complejo se divide en elementos sencillos y sus propiedades se ensamblan en un único sistema de ecuaciones.',
      theory: [
        `<p>El <strong>método de los elementos finitos (MEF)</strong> divide una estructura compleja en muchas partes sencillas (elementos), por ejemplo triángulos. Para cada elemento escribimos una ecuación sencilla que relaciona las fuerzas y los desplazamientos de sus nodos.</p>`,
        `<p>Los elementos se unen después en un <strong>sistema global de ecuaciones</strong>, que resuelve una computadora. Para resortes o barras: en una conexión <em>en serie</em> se suman las flexibilidades, por lo que $\\frac{1}{k}=\\frac{1}{k_1}+\\frac{1}{k_2}$. En una conexión <em>en paralelo</em> se suman las rigideces: $k=k_1+k_2$.</p>`,
        `<p>El MEF se usa en el análisis de resistencia, en el flujo de fluidos y en la conducción del calor. El resultado es aproximado; su precisión crece con el número y la finura de los elementos.</p>`,
        { fig: 'v9v12-pruziny', caption: 'Los resortes conectados en serie tienen una rigidez menor; los conectados en paralelo tienen rigideces que se suman.' }
      ],
      examples: [
        { task: 'Dos resortes con rigideces $k_1=6\\,\\text{N/m}$ y $k_2=3\\,\\text{N/m}$ están conectados en serie. ¿Cuál es la rigidez equivalente?',
          steps: ['$\\frac{1}{k}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$.', '$k=2\\,\\text{N/m}$.', '<strong>Resultado: 2 N/m</strong>'] }
      ]
    },
    'v12-komplexne-systemy': {
      title: 'Modelado de sistemas complejos',
      summary: 'Muchas partículas sencillas con acoplamientos mutuos conducen a un comportamiento complejo, y el número de acoplamientos crece rápidamente.',
      theory: [
        `<p>Un <strong>sistema complejo</strong> consta de muchas partes que interactúan entre sí. El comportamiento del conjunto a menudo no se deduce de la suma de las propiedades de las partes individuales, sino de sus acoplamientos mutuos. Hablamos de comportamiento <em>emergente</em>.</p>`,
        `<p>El número de acoplamientos mutuos crece rápidamente. Para $N$ partículas, donde cada una actúa sobre cada una de las otras una vez, aparecen $\\binom{N}{2}=\\frac{N(N-1)}{2}$ pares. Para $N=100$ ya son $4950$ acoplamientos.</p>`,
        `<p>Para modelar se usan, por ejemplo, <strong>modelos basados en agentes</strong> (cada partícula sigue reglas sencillas) o simulaciones <strong>Monte Carlo</strong>, que muestrean al azar los posibles estados. El resultado es siempre una estimación que debe verificarse.</p>`
      ],
      examples: [
        { task: 'En el sistema hay $5$ partículas y cada una actúa sobre cada una de las otras una vez. ¿Cuántos pares distintos aparecen?',
          steps: ['$\\binom{5}{2}=\\frac{5\\cdot 4}{2}$.', '<strong>Resultado: 10 pares</strong>'] }
      ]
    }
  }
});
