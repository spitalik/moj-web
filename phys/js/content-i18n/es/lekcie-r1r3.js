/* Español: lekcie 1.–3. ročníka ZŠ (js/rocniky/r1.js, r2.js, r3.js). Štruktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('es', {
  lessons: {
    'r1-pozorovanie': {
      title: 'Observación de objetos y fenómenos',
      summary: 'Observando descubres las propiedades de los objetos y distingues un objeto de un material.',
      theory: [
        `<p>Observar significa mirar algo a propósito. Al observar usamos nuestros <strong>sentidos</strong>: la vista, el oído, el tacto, el olfato y el gusto.
       Nunca probamos ni olemos sustancias desconocidas sin el permiso de un adulto.</p>`,
        `<p><strong>Un objeto</strong> es algo que podemos ver y nombrar, por ejemplo una pelota, una silla o un libro.
       <strong>Un material</strong> es aquello de lo que está hecho un objeto, por ejemplo madera, vidrio o plástico.</p>`,
        `<p>Al describir un objeto hablamos de sus <strong>propiedades</strong>: color, forma, tamaño, peso, dureza o si brilla.
       Una buena descripción es precisa y permite reconocer el objeto a partir de ella.</p>`,
        `<ul>
         <li>Un fenómeno es algo que ocurre a nuestro alrededor, por ejemplo la lluvia, el derretimiento de la nieve o la caída de las hojas.</li>
         <li>Al observar nos preguntamos: ¿qué veo, qué oigo y qué está cambiando?</li>
       </ul>`
      ],
      examples: [
        { task: 'Describe las propiedades de una pelota.',
          steps: ['La pelota es redonda y bota bien.', 'Tiene un color vivo y rebota en el suelo.', '<strong>Resultado: un objeto redondo que bota bien.</strong>'] },
        { task: '¿La madera es un objeto o un material?',
          steps: ['La madera no es una forma concreta, es un material.', 'Con madera podemos hacer una silla o una mesa.', '<strong>Resultado: la madera es un material.</strong>'] }
      ]
    },
    'r1-vlastnosti-materialov': {
      title: 'Propiedades de los materiales: dureza, elasticidad, forma',
      summary: 'Comparas materiales según su dureza, su elasticidad y si conservan la forma.',
      theory: [
        `<p>Los materiales se diferencian entre sí. Dos propiedades importantes son la <strong>dureza</strong> y la <strong>elasticidad</strong>.</p>`,
        `<ul>
         <li>Un material <strong>duro</strong> se raya o se aplasta con dificultad, por ejemplo la piedra o el metal.</li>
         <li>Un material <strong>blando</strong> se corta o se aprieta fácilmente, por ejemplo el jabón o la madera blanda.</li>
         <li>Un material <strong>elástico</strong> vuelve a su forma original después de apretarlo o estirarlo, por ejemplo la goma o un resorte.</li>
       </ul>`,
        `<p>La <strong>forma</strong> de algunos materiales se puede cambiar fácilmente. La plastilina o la arcilla se quedan con la nueva forma incluso después de soltarlas.
       Un material así no es elástico.</p>`,
        `<p><strong>Experimento:</strong> intenta apretar una goma, un trozo de plastilina y un bloque de madera. Anota cuál vuelve a su forma original.</p>`,
        { fig: 'r1r5-pruznost', caption: 'Una goma elástica vuelve a su forma original después de apretarla; la plastilina conserva la nueva forma.' }
      ],
      examples: [
        { task: '¿Qué material es más duro, la piedra o el jabón?',
          steps: ['La piedra se corta con dificultad, mientras que el jabón se corta con facilidad.', '<strong>Resultado: la piedra es más dura.</strong>'] },
        { task: '¿Qué material es elástico: la plastilina o la goma?',
          steps: ['Después de apretarla, la goma vuelve a su forma original.', 'La plastilina conserva su forma después de apretarla.', '<strong>Resultado: la goma es elástica.</strong>'] }
      ]
    },
    'r1-voda-vzduch': {
      title: 'Agua, aire y por qué son importantes',
      summary: 'Describes las propiedades del agua y del aire y explicas por qué son importantes para la vida.',
      theory: [
        `<p><strong>El agua</strong> es un líquido. No tiene forma propia, toma la forma del recipiente en el que está. El agua fluye, por eso es fácil de verter.
       Sin agua, ningún animal ni planta podría sobrevivir.</p>`,
        `<p><strong>El aire</strong> no se ve, pero está en todas partes a nuestro alrededor. Lo sentimos como viento o cuando respiramos.
       El aire es importante porque lo respiramos, y sin él las plantas no podrían crecer.</p>`,
        `<ul>
         <li>El agua es necesaria para beber, cocinar, lavarnos y para las plantas.</li>
         <li>Necesitamos el aire para respirar, y su movimiento crea el viento.</li>
         <li>El aire llena un globo cuando lo inflamos. El globo se agranda porque el aire ocupa espacio.</li>
       </ul>`,
        `<p><strong>Experimento:</strong> mete un pañuelo de papel en un vaso, dale la vuelta al vaso boca abajo y empújalo dentro del agua. El pañuelo queda seco, porque el aire que hay en el vaso no deja entrar el agua.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'Un vaso boca abajo sumergido en agua queda seco, porque el aire del interior ocupa espacio y no deja entrar el agua.' }
      ],
      examples: [
        { task: '¿Por qué necesita una persona agua?',
          steps: ['El agua está en el cuerpo y ayuda a que funcione.', 'Sin agua, una persona no sobreviviría mucho tiempo.', '<strong>Resultado: el agua es necesaria para la vida.</strong>'] },
        { task: '¿Qué hay dentro de un globo inflado?',
          steps: ['El globo se infló, pero no le pusimos nada.', 'El aire está en todas partes a nuestro alrededor, también dentro del globo.', '<strong>Resultado: en el globo hay aire.</strong>'] }
      ]
    },
    'r1-svetlo-tien-teplo': {
      title: 'Luz, sombra y calor en la vida diaria',
      summary: 'Descubres de dónde vienen la luz y el calor y explicas cómo se forma una sombra.',
      theory: [
        `<p><strong>El Sol</strong> nos da luz y calor. La luz nos ayuda a ver, y el calor nos calienta.
       Una lámpara y una vela también dan luz, y algunas de ellas también dan calor.</p>`,
        `<p>Cuando la luz choca con un objeto que no deja pasar la luz, detrás del objeto se forma una <strong>sombra</strong>.
       La sombra es un lugar oscuro al que no llega la luz.</p>`,
        `<ul>
         <li>Los objetos de madera o de piedra producen sombra.</li>
         <li>El vidrio y el agua dejan pasar la luz, por eso la sombra detrás de ellos no es oscura.</li>
       </ul>`,
        `<p>En un día de verano caluroso buscamos la sombra de un árbol, porque allí el sol no nos calienta tanto. El calor nos llega sobre todo a través de los rayos del sol, y la sombra los bloquea.</p>`,
        { fig: 'obr-tien', caption: 'La sombra se forma donde la luz no puede llegar, porque un objeto opaco la bloquea.' }
      ],
      examples: [
        { task: '¿Por qué hay sombra debajo de un árbol en un día soleado?',
          steps: ['El sol brilla sobre el árbol.', 'El árbol es opaco, así que la luz no puede atravesarlo.', '<strong>Resultado: detrás del árbol se forma una sombra.</strong>'] },
        { task: '¿Qué objeto nos da luz y calor a la vez?',
          steps: ['Un objeto que arde o brilla da luz y calor.', 'El sol brilla y nos calienta.', '<strong>Resultado: el Sol.</strong>'] }
      ]
    },
    'r1-zmeny-prirody': {
      title: 'Observación de cambios en la naturaleza',
      summary: 'Describes cómo cambia la naturaleza durante el día y durante el año.',
      theory: [
        `<p>La naturaleza cambia constantemente. Algunos cambios son rápidos, por ejemplo la lluvia o el viento. Otros son más lentos, por ejemplo el crecimiento de un árbol o el cambio de las estaciones.</p>`,
        `<ul>
         <li><strong>Primavera</strong>: crecen las flores, los árboles brotan hojas y hace más calor.</li>
         <li><strong>Verano</strong>: es lo más caluroso y los días son largos.</li>
         <li><strong>Otoño</strong>: las hojas se ponen amarillas y caen, hace más frío.</li>
         <li><strong>Invierno</strong>: es lo más frío, a menudo cae nieve y las plantas están en reposo.</li>
       </ul>`,
        `<p>Durante el día cambian la luz y la temperatura: por la mañana hace más fresco, al mediodía es lo más caluroso y por la noche oscurece.
       Los días y las noches se alternan porque la Tierra gira.</p>`,
        `<p>Los cambios puedes registrarlos en un diario de la naturaleza, por ejemplo cada semana anotas cuántas hojas tiene el árbol.</p>`,
        { fig: 'r1r5-zem-den-noc', caption: 'La Tierra gira alrededor de su eje. El lado que mira al Sol tiene día, el lado opuesto tiene noche.' }
      ],
      examples: [
        { task: '¿Cómo es el otoño como estación?',
          steps: ['En otoño las hojas se ponen amarillas y caen.', 'Hace más frío y los días son más cortos.', '<strong>Resultado: el otoño es la estación en la que caen las hojas.</strong>'] },
        { task: '¿Por qué se alternan los días y las noches?',
          steps: ['La Tierra gira alrededor de su eje.', 'Cuando nuestra parte mira al Sol, es de día.', '<strong>Resultado: la rotación de la Tierra hace que se alternen el día y la noche.</strong>'] }
      ]
    },
    'r2-vlastnosti-latok': {
      title: 'Propiedades de las sustancias y los objetos',
      summary: 'Identificas propiedades de las sustancias, como la transparencia, la resistencia y la capacidad de conducir la electricidad.',
      theory: [
        `<p>Cada sustancia tiene sus propias <strong>propiedades</strong>. Según ellas podemos elegir de qué puede estar hecho cierto objeto.
       Por ejemplo, la ventana no la hacemos de madera, porque la madera no es transparente.</p>`,
        `<ul>
         <li>Una sustancia <strong>transparente</strong> deja pasar la luz, por ejemplo el vidrio o el agua limpia.</li>
         <li>Una sustancia <strong>opaca</strong> no deja pasar la luz, por ejemplo la madera o la piedra.</li>
         <li>Una sustancia <strong>brillante</strong> refleja la luz, por ejemplo el metal.</li>
         <li>Un material <strong>conductor</strong> conduce la corriente eléctrica, por ejemplo el metal. El plástico es un <strong>aislante</strong>, no conduce la corriente eléctrica.</li>
       </ul>`,
        `<p>Al describir una sustancia podemos preguntarnos: ¿es dura, blanda, transparente, brillante, elástica? Cuanto más precisamente la describas, más fácil será reconocerla.</p>`,
        `<p><strong>Experimento:</strong> en una habitación oscura ilumina con una linterna el vidrio, la madera y el papel de aluminio. Anota qué sustancia deja pasar la luz.</p>`,
        { fig: 'r1r5-priehladnost', caption: 'El vidrio deja pasar la luz, la madera la detiene y el metal refleja la luz.' }
      ],
      examples: [
        { task: '¿Por qué las ventanas se hacen de vidrio y no de madera?',
          steps: ['Una ventana debe ser transparente, para que la luz pase a través de ella.', 'El vidrio es transparente, la madera no.', '<strong>Resultado: el vidrio es una sustancia transparente, por eso sirve para las ventanas.</strong>'] },
        { task: '¿Qué sustancia conduce la corriente eléctrica: el cobre o el plástico?',
          steps: ['El cobre es un metal, y los metales conducen la corriente.', 'El plástico es un aislante y no conduce la corriente.', '<strong>Resultado: el cobre.</strong>'] }
      ]
    },
    'r2-skupenstva': {
      title: 'Sólidos, líquidos y gases',
      summary: 'Distingues sólidos, líquidos y gases según su forma y su volumen.',
      theory: [
        `<p>Las sustancias se presentan en tres <strong>estados de la materia</strong>: sólido, líquido y gaseoso.</p>`,
        `<ul>
         <li><strong>Un sólido</strong> tiene forma fija y volumen fijo. Un cubito de hielo o una piedra mantienen su forma.</li>
         <li><strong>Un líquido</strong> tiene volumen fijo, pero su forma cambia según el recipiente. El agua en un vaso tiene la forma del vaso.</li>
         <li><strong>Un gas</strong> no tiene ni forma fija ni volumen fijo. Llena todo el recipiente en el que está.</li>
       </ul>`,
        `<p>El aire es un gas. Cuando inflamos un globo, lo llenamos de gas y este se extiende por todo el globo.</p>`,
        `<p>El estado de la materia se puede observar. Toma un cubito de hielo, después agua en un vaso y, por último, el aire de un globo, y compáralos.</p>`,
        { fig: 'obr-skupenstva', caption: 'Cambios de estado: fusión, solidificación, evaporación y condensación.' }
      ],
      examples: [
        { task: '¿En qué estado está la leche en un vaso?',
          steps: ['La leche fluye y toma la forma del vaso.', 'Tiene volumen fijo, pero no forma fija.', '<strong>Resultado: líquido.</strong>'] },
        { task: '¿Qué estado de la materia tiene forma fija?',
          steps: ['Un sólido mantiene su forma.', 'Los gases y los líquidos no tienen forma fija.', '<strong>Resultado: sólido.</strong>'] }
      ]
    },
    'r2-voda-vzduch': {
      title: 'Agua y aire',
      summary: 'Observando descubres que el aire ocupa espacio y que el agua fluye y cambia de forma.',
      theory: [
        `<p><strong>El agua</strong> es un líquido. Fluye, toma la forma del recipiente y se puede verter de un recipiente a otro.
       El agua se puede congelar en hielo y calentar hasta convertirla en vapor.</p>`,
        `<p><strong>El aire</strong> es un gas. Aunque no lo vemos, ocupa espacio. Por eso en un globo inflado solo cabe cierta cantidad de aire.</p>`,
        `<ul>
         <li>El agua se filtra en la arena y en la tierra. Algunas sustancias se disuelven en el agua, otras no.</li>
         <li>El aire se mueve como viento. El viento puede mover las hojas y hacer girar un molinete.</li>
       </ul>`,
        `<p><strong>Experimento:</strong> mete un vaso vacío boca abajo dentro de un vaso de agua y observa si el agua entra. El aire del vaso impide que el agua entre.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'Un vaso boca abajo sumergido en agua queda seco, porque el aire del interior ocupa espacio y no deja entrar el agua.' }
      ],
      examples: [
        { task: '¿Por qué un vaso boca abajo no se llena de agua?',
          steps: ['Hay aire en el vaso.', 'El aire ocupa espacio y no deja entrar el agua.', '<strong>Resultado: el aire del vaso ocupa espacio.</strong>'] },
        { task: '¿En qué estado de la materia está el agua y cómo se comporta?',
          steps: ['El agua es un líquido.', 'Fluye y toma la forma de su recipiente.', '<strong>Resultado: el agua es un líquido que fluye.</strong>'] }
      ]
    },
    'r2-zmeny-skupenstva': {
      title: 'Cambios de estado en la vida diaria',
      summary: 'Nombras la fusión, la congelación, la evaporación y la condensación con ejemplos de tu entorno.',
      theory: [
        `<p>Una sustancia puede <strong>cambiar</strong> de un estado de la materia a otro. Lo vemos con más frecuencia en el agua.</p>`,
        `<ul>
         <li><strong>Fusión</strong>: un sólido se convierte en líquido, por ejemplo el hielo en agua al calentarlo.</li>
         <li><strong>Congelación</strong>: un líquido se convierte en sólido, por ejemplo el agua en hielo en el congelador.</li>
         <li><strong>Evaporación</strong>: un líquido se convierte en gas (vapor), por ejemplo la ropa mojada se seca.</li>
         <li><strong>Condensación</strong>: un gas (vapor) se convierte en líquido, por ejemplo las gotas en un vaso frío.</li>
       </ul>`,
        `<p>Durante la fusión y la evaporación una sustancia absorbe calor. Durante la congelación y la condensación lo cede. Por eso en invierno los charcos se enfrían rápidamente, y en verano el agua se seca deprisa.</p>`,
        { fig: 'r1r5-zmeny-voda', caption: 'La fusión y la evaporación necesitan absorber calor; la congelación y la condensación lo ceden.' }
      ],
      examples: [
        { task: '¿Cómo se llama el cambio cuando la nieve se convierte en agua?',
          steps: ['La nieve es un sólido.', 'Cuando se calienta, se convierte en líquido.', '<strong>Resultado: fusión.</strong>'] },
        { task: '¿Qué le pasa a la ropa mojada al sol?',
          steps: ['El agua de la ropa se convierte en vapor.', 'El vapor se va al aire.', '<strong>Resultado: evaporación, la ropa se seca.</strong>'] }
      ]
    },
    'r2-magnety': {
      title: 'Imanes y sus efectos',
      summary: 'Descubres qué objetos atrae un imán y describes los polos del imán.',
      theory: [
        `<p>Un <strong>imán</strong> atrae objetos de hierro, acero y níquel. Un imán no atrae la madera, el plástico, el papel ni el vidrio.</p>`,
        `<p>Cada imán tiene dos <strong>polos</strong>: norte y sur. El efecto más fuerte está en sus extremos.</p>`,
        `<ul>
         <li>Dos polos iguales se <strong>repelen</strong>.</li>
         <li>Dos polos distintos se <strong>atraen</strong>.</li>
       </ul>`,
        `<p>El imán actúa también a través de algunas sustancias, por ejemplo a través del papel o de una capa fina de plástico. Sin embargo, a través del hierro el efecto del imán se transmite con más dificultad.</p>`,
        { fig: 'obr-magnet', caption: 'Las líneas de campo de un imán de barra salen del polo norte N y entran en el polo sur S.' }
      ],
      examples: [
        { task: '¿Atrae un imán una llave de acero?',
          steps: ['El acero contiene hierro.', 'El imán atrae el hierro.', '<strong>Resultado: sí, un imán atrae una llave de acero.</strong>'] },
        { task: '¿Qué pasa si acercamos dos imanes con sus polos norte uno frente al otro?',
          steps: ['Ambos polos son iguales.', 'Los polos iguales se repelen.', '<strong>Resultado: los imanes se separan.</strong>'] }
      ]
    },
    'r2-pokusy': {
      title: 'Observaciones sencillas y experimentos',
      summary: 'Planificas un experimento sencillo y anotas las observaciones y la conclusión.',
      theory: [
        `<p>Un experimento es una forma de comprobar nuestra idea. Primero nos planteamos una pregunta, luego enunciamos una <strong>predicción</strong> (una hipótesis), realizamos el experimento y anotamos los resultados.</p>`,
        `<ol>
         <li><strong>Pregunta</strong>: ¿Qué queremos averiguar? Por ejemplo: ¿El azúcar se disuelve más rápido en agua caliente o en agua fría?</li>
         <li><strong>Predicción</strong>: ¿Qué creemos que va a pasar? Por ejemplo: El azúcar se disolverá más rápido en agua caliente.</li>
         <li><strong>Experimento y observación</strong>: Realizamos el experimento y anotamos exactamente lo que vemos.</li>
         <li><strong>Conclusión</strong>: ¿El experimento confirmó nuestra predicción? Si no, no es ningún problema: el resultado también es información.</li>
       </ol>`,
        `<p>Al hacer un experimento siempre sigue las normas de seguridad y trabaja en las mismas condiciones, para que el resultado sea fiable.</p>`
      ],
      examples: [
        { task: '¿Cuál es el primer paso en un experimento sencillo?',
          steps: ['Primero nos planteamos una pregunta.', 'Después enunciamos una predicción y realizamos el experimento.', '<strong>Resultado: el primer paso es plantear una pregunta.</strong>'] },
        { task: '¿Qué anotamos después de un experimento?',
          steps: ['Anotamos las observaciones, es decir, lo que vimos.', 'Al final escribimos la conclusión.', '<strong>Resultado: las observaciones y la conclusión.</strong>'] }
      ]
    },
    'r3-latky': {
      title: 'Sustancias y sus propiedades',
      summary: 'Comparas sustancias según su transparencia, dureza, solubilidad y otras propiedades.',
      theory: [
        `<p>Cada objeto está hecho de alguna <strong>sustancia</strong>. La misma sustancia se puede encontrar en distintos objetos: las sillas y los lápices pueden estar hechos de madera.</p>`,
        `<ul>
         <li><strong>Transparencia</strong>: a través de una sustancia transparente podemos ver, por ejemplo el vidrio.</li>
         <li><strong>Dureza</strong>: una sustancia dura se raya con dificultad, por ejemplo la piedra.</li>
         <li><strong>Solubilidad</strong>: una sustancia soluble se disuelve en agua y desaparece, por ejemplo el azúcar o la sal. La arena no se disuelve en agua.</li>
         <li><strong>Magnetismo</strong>: un imán atrae el hierro y el acero, no la madera ni el plástico.</li>
       </ul>`,
        `<p>Comparamos las propiedades de las sustancias observando, midiendo y anotando los resultados. Por ejemplo, podemos averiguar cuál se disuelve más rápido.</p>`,
        `<p><strong>Experimento:</strong> echa azúcar, arena y una piedrecita en tres vasos con agua. Observa dónde desaparece cada una y dónde se queda en el fondo.</p>`
      ],
      examples: [
        { task: '¿Qué sustancia se disuelve en agua: la sal o la arena?',
          steps: ['La sal se disuelve en agua y desaparece.', 'La arena queda en el fondo, no se disuelve.', '<strong>Resultado: la sal.</strong>'] },
        { task: '¿Qué atrae un imán: un clavo de hierro o un palito de madera?',
          steps: ['Un imán atrae el hierro.', 'Un imán no atrae la madera.', '<strong>Resultado: el clavo de hierro.</strong>'] }
      ]
    },
    'r3-merania': {
      title: 'Medición de longitud, tiempo y temperatura',
      summary: 'Eliges un instrumento y una unidad adecuados y conviertes longitudes sencillas.',
      theory: [
        `<p>Al medir siempre averiguamos <strong>cuánto</strong> hay de algo y lo comparamos con una unidad. Cada magnitud tiene su propia unidad y su instrumento.</p>`,
        `<ul>
         <li><strong>Longitud</strong>: medimos con una regla o con un metro. Las unidades son el centímetro (cm) y el metro (m).</li>
         <li><strong>Tiempo</strong>: medimos con un reloj o con un cronómetro. Las unidades son el segundo (s), el minuto (min) y la hora (h).</li>
         <li><strong>Temperatura</strong>: medimos con un termómetro. La unidad es el grado Celsius (°C).</li>
       </ul>`,
        `<p>Un metro tiene <strong>100 centímetros</strong>. Por eso al convertir multiplicamos por cien: 3 m = 300 cm.</p>`,
        `<p>Al medir una longitud, coloca la regla al principio del objeto y lee el final a la misma altura, para que el resultado sea preciso.</p>`,
        { fig: 'r1r5-pravitko', caption: 'Colocamos el cero de la regla al principio del objeto y leemos el final. El objeto mide 7 cm.' }
      ],
      examples: [
        { task: '¿Cuántos centímetros son 4 metros?',
          steps: ['Un metro tiene 100 centímetros.', 'Cuatro metros tienen $4 \\cdot 100 = 400$ centímetros.', '<strong>Resultado: 400 cm</strong>'] },
        { task: '¿Qué instrumento usarías para medir el tiempo de una carrera?',
          steps: ['El tiempo se mide con un instrumento que muestra segundos y minutos.', 'El termómetro mide la temperatura y la regla mide la longitud.', '<strong>Resultado: un cronómetro.</strong>'] }
      ]
    },
    'r3-teplo': {
      title: 'El calor y el calentamiento de los objetos',
      summary: 'Explicas cómo se calientan y enfrían los objetos y por qué algunos se calientan más rápido.',
      theory: [
        `<p><strong>El calor</strong> pasa de un objeto más caliente a uno más frío. Por eso la sopa fría en una olla se calienta cuando la ponemos sobre el fuego.</p>`,
        `<ul>
         <li><strong>Los objetos oscuros</strong> absorben más luz del sol, por eso se calientan más rápido.</li>
         <li><strong>Los objetos claros</strong> reflejan más luz, por eso se calientan más lentamente.</li>
         <li><strong>Los metales</strong> conducen el calor rápidamente, por eso una cuchara en una sopa caliente se calienta enseguida.</li>
       </ul>`,
        `<p>Medimos el calentamiento con un termómetro. La temperatura sube cuando un objeto absorbe calor, y baja cuando lo cede.</p>`,
        { fig: 'r1r5-teplo-tok', caption: 'El calor pasa del cuerpo más caliente al más frío, y no al revés.' }
      ],
      examples: [
        { task: '¿Qué objeto se calienta más rápido al sol: una camiseta oscura o una blanca?',
          steps: ['Los objetos oscuros absorben más luz del sol.', 'Los objetos blancos reflejan la luz y el calor.', '<strong>Resultado: la camiseta oscura se calienta más rápido.</strong>'] },
        { task: '¿Por qué una cuchara de metal se calienta rápidamente en una sopa caliente?',
          steps: ['El metal conduce el calor rápidamente.', 'El calor pasa de la sopa a la cuchara.', '<strong>Resultado: el metal conduce el calor rápidamente.</strong>'] }
      ]
    },
    'r3-rozpustanie': {
      title: 'Disolver sustancias en agua',
      summary: 'Descubres qué sustancias se disuelven en agua y qué factores aceleran la disolución.',
      theory: [
        `<p><strong>Disolver</strong> es cuando una sustancia se separa en agua en partes tan pequeñas que ya no las vemos. La disolución queda entonces transparente.</p>`,
        `<ul>
         <li><strong>Sustancias solubles</strong>: azúcar, sal, cacao.</li>
         <li><strong>Sustancias insolubles</strong>: arena, piedrecitas, aceite (flota encima del agua).</li>
       </ul>`,
        `<p>La disolución va más rápido cuando:</p>
       <ol>
         <li>el agua está caliente,</li>
         <li>removemos la sustancia,</li>
         <li>primero partimos la sustancia en trozos más pequeños.</li>
       </ol>`,
        `<p><strong>Experimento:</strong> pon la misma cantidad de azúcar en dos vasos, llena uno con agua caliente y el otro con agua fría. Observa dónde se disuelve antes el azúcar.</p>`,
        { fig: 'r1r5-castice-teplota', caption: 'En el agua más caliente las partículas se mueven más rápido, por eso el azúcar se disuelve más rápido.' }
      ],
      examples: [
        { task: '¿Qué sustancia se disuelve en agua: una piedrecita o el azúcar?',
          steps: ['El azúcar se disuelve en agua.', 'La piedrecita queda en el fondo.', '<strong>Resultado: el azúcar.</strong>'] },
        { task: '¿Dónde se disuelve el azúcar más rápido: en agua caliente o en agua fría?',
          steps: ['Las moléculas del agua caliente se mueven más rápido.', 'El agua que se mueve más rápido disuelve el azúcar antes.', '<strong>Resultado: en agua caliente.</strong>'] }
      ]
    },
    'r3-pohyb': {
      title: 'Movimiento de los objetos y fuerzas',
      summary: 'Describes cómo las fuerzas ponen en movimiento a los objetos o los detienen.',
      theory: [
        `<p>Un objeto se mueve cuando algo <strong>actúa</strong> sobre él. Esta acción se llama <strong>fuerza</strong>. Una fuerza puede ser un empujón o un tirón.</p>`,
        `<ul>
         <li><strong>La gravedad</strong> atrae los objetos hacia el suelo. Gracias a ella la pelota cae.</li>
         <li><strong>El rozamiento</strong> actúa entre objetos que se tocan. Frena el movimiento, por ejemplo el de una pelota sobre la hierba.</li>
         <li><strong>La fuerza magnética</strong> actúa entre un imán y el hierro.</li>
       </ul>`,
        `<p>Una fuerza puede poner un objeto en movimiento, acelerarlo, frenarlo o cambiar la dirección de su movimiento.</p>`,
        `<p>Un libro está sobre una mesa porque la mesa lo empuja hacia arriba y la gravedad lo atrae hacia abajo. Estas dos fuerzas se equilibran, por eso el libro no se mueve.</p>`,
        { fig: 'r1r5-sily-stol', caption: 'El libro está sobre la mesa: el apoyo empuja hacia arriba con la fuerza N, la gravedad tira hacia abajo con la fuerza Fg. Las fuerzas se equilibran.' }
      ],
      examples: [
        { task: '¿Qué fuerza detiene una pelota que rueda por la hierba?',
          steps: ['La hierba y la pelota se tocan y rozan entre sí.', 'Esta resistencia frena la pelota.', '<strong>Resultado: el rozamiento.</strong>'] },
        { task: '¿Por qué cae una pelota cuando la soltamos?',
          steps: ['La gravedad actúa sobre la pelota.', 'La atrae hacia el suelo.', '<strong>Resultado: la gravedad.</strong>'] }
      ]
    },
    'r3-zaznamenavanie': {
      title: 'Observación y registro de los resultados de un experimento',
      summary: 'Escribes los resultados de un experimento en una tabla y de ellos sacas una conclusión.',
      theory: [
        `<p>En un experimento no basta con mirar. Debemos <strong>registrar</strong> los resultados, o de lo contrario pronto los olvidaríamos.</p>`,
        `<ol>
         <li>Anotamos qué hicimos y con qué.</li>
         <li>Durante el experimento registramos los valores medidos en una <strong>tabla</strong>.</li>
         <li>Al final comparamos los resultados y escribimos una <strong>conclusión</strong>.</li>
       </ol>`,
        `<p>La tabla tiene columnas para las mediciones individuales, por ejemplo el tiempo que necesita el azúcar para disolverse y la temperatura del agua. Gracias a la tabla vemos cómo se relacionan dos cosas.</p>`,
        `<p>Escribe con precisión, no según lo que esperas. Si el resultado no salió como esperabas, anótalo también.</p>`
      ],
      examples: [
        { task: '¿Qué es lo mejor que se puede hacer con los valores medidos durante un experimento?',
          steps: ['Olvidamos rápidamente los valores si no los anotamos.', 'Los escribimos en la tabla en cuanto los medimos.', '<strong>Resultado: escribirlos en la tabla.</strong>'] },
        { task: '¿Qué va en la tabla en un experimento de disolución?',
          steps: ['En el experimento medimos el tiempo y la temperatura del agua.', 'Escribimos estos valores en las columnas.', '<strong>Resultado: el tiempo de disolución y la temperatura del agua.</strong>'] }
      ]
    }
  }
});
