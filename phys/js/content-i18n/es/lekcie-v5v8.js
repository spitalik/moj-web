/* Español: lecciones de los niveles v5–v8 (js/rocniky/v5.js, v6.js, v7.js, v8.js). Estructura y claves: js/content-i18n.js. */
CONTENT_I18N.add('es', {
  lessons: {
    'v5-dualizmus': {
      title: 'Dualismo onda-partícula',
      summary: 'La luz y las partículas se comportan tanto como ondas como partículas; la longitud de onda de de Broglie.',
      theory: [
        `<p>El efecto fotoeléctrico y el efecto Compton demostraron que la luz se comporta como un flujo de partículas (fotones) con energía $E=h\\,f$. La interferencia y la difracción, en cambio, muestran propiedades ondulatorias. Hablamos de <strong>dualismo onda-partícula</strong>: cada objeto cuántico tiene ambas propiedades, pero en una medición concreta solo se manifiesta una de ellas.</p>`,
        `<p>Louis de Broglie propuso que también las partículas con momento lineal $p$ tienen una longitud de onda $\\lambda=\\frac{h}{p}$. Para un electrón libre con velocidad $v$ (no relativista) se cumple $p=m_e\\,v$. Cuanto más pesada o más rápida es una partícula, más corta es su longitud de onda.</p>`,
        `<p>Por eso los cuerpos macroscópicos (p. ej., una bolita) tienen una longitud de onda tan pequeña que no es observable, mientras que los electrones en un cristal producen un patrón de difracción similar al de los rayos X. La constante $h=6{,}63\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$ determina dónde se manifiestan los efectos cuánticos.</p>`,
        { fig: 'v5v8-dualizmus', caption: 'La longitud de onda de de Broglie λ = h/p: cuanto mayor es el momento lineal, más corta es la onda.' }
      ],
      examples: [
        { task: 'Un electrón se mueve con velocidad $v=2\\cdot 10^{6}\\,\\text{m/s}$. ¿Cuál es su longitud de onda de de Broglie? Usa $m_e=9{,}11\\cdot 10^{-31}\\,\\text{kg}$.',
          steps: ['$p=m_e v=9{,}11\\cdot 10^{-31}\\cdot 2\\cdot 10^{6}$.', '$\\lambda=\\frac{h}{p}=\\frac{6{,}63\\cdot 10^{-34}}{1{,}82\\cdot 10^{-24}}\\approx 3{,}6\\cdot 10^{-10}\\,\\text{m}$.', '<strong>Resultado: $\\lambda\\approx 0{,}36\\,\\text{nm}$</strong>'] }
      ]
    },
    'v5-vlnova-funkcia': {
      title: 'Función de onda y probabilidad',
      summary: 'La función de onda ψ, la densidad de probabilidad |ψ|² y el cálculo de la probabilidad para un intervalo.',
      theory: [
        `<p>El estado de una partícula cuántica se describe mediante la <strong>función de onda</strong> $\\psi(x,t)$. Por sí sola no es medible. Su cuadrado $|\\psi|^2$ es la <strong>densidad de probabilidad</strong>: la probabilidad de que la partícula se encuentre en un pequeño entorno del punto $x$ es $|\\psi|^2\\,dx$.</p>`,
        `<p>La probabilidad de hallar la partícula en un intervalo finito $[x_1,x_2]$ es la integral $P=\\int_{x_1}^{x_2}|\\psi|^2\\,dx$. La probabilidad total es 1, es decir, $\\int|\\psi|^2\\,dx=1$. Una función así se llama normalizada.</p>`,
        `<p>Por eso la mecánica cuántica proporciona solo las <em>probabilidades</em> de los resultados de medición, no valores exactos para una sola partícula. Si la densidad es uniforme, la probabilidad es igual al cociente entre la longitud del intervalo y la longitud de toda la región.</p>`,
        { fig: 'v5v8-pravdepodobnost', caption: 'Para una densidad uniforme |ψ|² la probabilidad es proporcional a la longitud del intervalo: P = a/L.' }
      ],
      examples: [
        { task: 'Una partícula está distribuida con densidad uniforme sobre un segmento de longitud $L=20\\,\\text{nm}$. ¿Cuál es la probabilidad de que se encuentre en el intervalo de $0$ a $5\\,\\text{nm}$?',
          steps: ['La densidad es constante, $|\\psi|^2=\\frac{1}{L}$.', '$P=\\frac{5}{20}=\\frac{1}{4}$.', '<strong>Resultado: $P=0{,}25$</strong>'] }
      ]
    },
    'v5-schrodinger': {
      title: 'Ecuación de Schrödinger',
      summary: 'La ecuación de Schrödinger independiente del tiempo y las energías de una partícula en un pozo infinitamente profundo.',
      theory: [
        `<p><strong>La ecuación de Schrödinger</strong> describe la evolución de la función de onda. Su forma independiente del tiempo $\\hat{H}\\psi=E\\psi$ establece que, para los estados estacionarios, la energía $E$ es constante y la función de onda es una autofunción del operador de energía $\\hat{H}$.</p>`,
        `<p>Consideremos una partícula en un <strong>pozo de potencial infinitamente profundo</strong> de anchura $L$. La función de onda debe anularse en los bordes del pozo, por lo que en él solo caben un número entero de semilongitudes de onda. El resultado son energías discretas $E_n=\\frac{n^2 h^2}{8 m L^2}$, donde $n=1,2,3,\\dots$</p>`,
        `<p>La energía crece con el cuadrado de $n$ y disminuye con el cuadrado de la anchura del pozo. Por eso, para un electrón en un pozo de anchura $1\\,\\text{nm}$ la energía más baja es $E_1=0{,}376\\,\\text{eV}$, mientras que en un pozo más ancho los niveles están más juntos.</p>`,
        { fig: 'v5v8-jama', caption: 'Una partícula en un pozo de potencial infinitamente profundo tiene solo niveles discretos; la energía crece con n².' }
      ],
      examples: [
        { task: 'Un electrón está en un pozo de anchura $L=1\\,\\text{nm}$ en el estado $n=2$. ¿Cuál es su energía? Para $n=1$ se cumple $E_1=0{,}376\\,\\text{eV}$.',
          steps: ['$E_n=E_1\\cdot\\frac{n^2}{L^2}$ con $L$ en nanómetros.', '$E_2=0{,}376\\cdot 4=1{,}504\\,\\text{eV}$.', '<strong>Resultado: $E_2\\approx 1{,}5\\,\\text{eV}$</strong>'] }
      ]
    },
    'v5-operatory': {
      title: 'Operadores y observables',
      summary: 'Operadores en la mecánica cuántica; autofunciones y autovalores como resultados de medición.',
      theory: [
        `<p>A cada magnitud física ($x$, momento lineal, energía) le corresponde un <strong>operador</strong>, es decir, una regla que convierte una función en otra. Por ejemplo, al momento lineal le corresponde $\\hat{p}=-i\\hbar\\,\\frac{d}{dx}$ y a la energía el hamiltoniano $\\hat{H}$.</p>`,
        `<p>Si un operador $\\hat{A}$ actuando sobre una función $\\psi$ cumple $\\hat{A}\\psi=a\\,\\psi$, entonces $\\psi$ es una <strong>autofunción</strong> y el número $a$ es un <strong>autovalor</strong>. La medición de la magnitud $A$ siempre da uno de sus autovalores; al medir, el estado se convierte en la autofunción correspondiente.</p>`,
        `<p>Los observables tienen autovalores reales, porque sus operadores son hermíticos. Por eso los resultados de las mediciones son siempre números reales.</p>`
      ],
      examples: [
        { task: 'El operador $\\hat{D}=\\frac{d}{dx}$ actúa sobre $\\psi=e^{3x}$. ¿Cuál es el autovalor?',
          steps: ['$\\frac{d}{dx}e^{3x}=3\\,e^{3x}$.', 'Se cumple $\\hat{D}\\psi=3\\psi$.', '<strong>Resultado: el autovalor es $3$</strong>'] }
      ]
    },
    'v5-kvantovanie': {
      title: 'Cuantización de la energía',
      summary: 'Por qué una partícula ligada tiene solo energías discretas, ilustrado con el oscilador armónico.',
      theory: [
        `<p>Si una partícula está <strong>ligada</strong> (p. ej., en un pozo o en un sistema oscilante), su función de onda debe anularse en los bordes de la región. Esta condición restringe las energías posibles a <strong>niveles discretos</strong>. Una partícula libre, en cambio, tiene energías continuas.</p>`,
        `<p>El oscilador armónico cuántico tiene niveles $E_n=\\left(n+\\tfrac{1}{2}\\right)\\hbar\\omega$, donde $n=0,1,2,\\dots$ y $\\omega$ es la frecuencia angular. Los niveles vecinos están igualmente separados por $\\hbar\\omega$.</p>`,
        `<p>El nivel más bajo ($n=0$) no tiene energía nula, sino $\\frac{1}{2}\\hbar\\omega$. Esta energía del punto cero es consecuencia del principio de incertidumbre: una partícula no puede estar en reposo en un único punto.</p>`,
        { fig: 'v5v8-oscilator', caption: 'Los niveles del oscilador están igualmente espaciados, y el más bajo no es cero, sino ½ħω.' }
      ],
      examples: [
        { task: '¿Cuál es la energía del oscilador en el estado $n=3$, en unidades de $\\hbar\\omega$?',
          steps: ['$E_3=\\left(3+\\tfrac{1}{2}\\right)\\hbar\\omega$.', '<strong>Resultado: $E_3=3{,}5\\,\\hbar\\omega$</strong>'] }
      ]
    },
    'v5-spin': {
      title: 'Momento angular y espín',
      summary: 'Momento angular orbital, número cuántico l, número de estados y espín del electrón.',
      theory: [
        `<p>El momento angular orbital de un electrón en un átomo está cuantizado: su módulo es $|\\vec{L}|=\\sqrt{l(l+1)}\\,\\hbar$, donde $l=0,1,2,\\dots$ es el <strong>número cuántico orbital</strong>. Su proyección sobre un eje elegido puede tomar los valores $L_z=m_l\\hbar$.</p>`,
        `<p>El número cuántico magnético $m_l$ toma valores desde $-l$ hasta $+l$, incluido el cero, por lo que para un $l$ dado hay exactamente $2l+1$ estados posibles. Para $l=0$ hay un estado; para $l=1$, tres.</p>`,
        `<p><strong>El espín</strong> es el momento angular intrínseco del electrón, que no tiene una imagen clásica de una bolita en rotación. El electrón tiene número cuántico de espín $s=\\tfrac{1}{2}$, por lo que hay dos orientaciones posibles. Junto con el momento orbital determina la estructura de los niveles atómicos.</p>`,
        { fig: 'v5v8-moment', caption: 'El número cuántico magnético m_l toma 2l + 1 valores, desde −l hasta +l.' }
      ],
      examples: [
        { task: 'Un electrón tiene número cuántico orbital $l=2$. ¿Cuántos valores distintos de $m_l$ son posibles?',
          steps: ['Los valores de $m_l$ van desde $-2$ hasta $+2$: $-2,-1,0,1,2$.', '<strong>Resultado: $2l+1=5$ valores</strong>'] }
      ]
    },
    'v5-vodik': {
      title: 'El átomo de hidrógeno y los estados cuánticos',
      summary: 'Niveles de energía del átomo de hidrógeno y energía del fotón emitido en una transición entre ellos.',
      theory: [
        `<p>Las energías de un electrón en el átomo de hidrógeno son $E_n=-\\frac{13{,}6\\,\\text{eV}}{n^2}$, donde $n=1,2,3,\\dots$ es el número cuántico principal. El signo negativo significa que el electrón está ligado; cuando $n\\to\\infty$, la energía se acerca a cero.</p>`,
        `<p>Cuando un electrón pasa de un nivel superior $n_i$ a uno inferior $n_f$, el átomo emite un fotón con energía $E_f=E_{n_i}-E_{n_f}$ en valor absoluto. La absorción de un fotón es el proceso inverso. Por eso el espectro del hidrógeno consiste en líneas, no en una banda continua.</p>`,
        `<p>Lo más importante es la serie de transiciones a $n_f=2$ (serie de Balmer), que se encuentra en la región visible de la luz. Las transiciones a $n_f=1$ producen radiación ultravioleta.</p>`,
        { fig: 'v5v8-vodik', caption: 'En una transición a un nivel inferior el átomo emite un fotón con energía igual a la diferencia de niveles.' }
      ],
      examples: [
        { task: 'Un electrón del átomo de hidrógeno pasa de $n=3$ a $n=2$. ¿Qué energía tiene el fotón emitido?',
          steps: ['$E_3=-\\frac{13{,}6}{9}\\approx -1{,}51\\,\\text{eV}$ y $E_2=-\\frac{13{,}6}{4}=-3{,}40\\,\\text{eV}$.', '$\\Delta E=|E_2-E_3|\\approx 1{,}89\\,\\text{eV}$.', '<strong>Resultado: $\\Delta E\\approx 1{,}89\\,\\text{eV}$</strong>'] }
      ]
    },
    'v5-neurcitost': {
      title: 'Efecto túnel y principio de incertidumbre',
      summary: 'El principio de incertidumbre de Heisenberg y el paso a través de una barrera que una partícula no puede cruzar clásicamente.',
      theory: [
        `<p><strong>El principio de incertidumbre de Heisenberg</strong> establece que la posición y el momento lineal de una partícula no pueden determinarse simultáneamente con precisión arbitraria: $\\Delta x\\,\\Delta p\\geq\\frac{\\hbar}{2}$. Es una propiedad de las ondas, no una deficiencia de la técnica de medición. Cuanto más exactamente conocemos la posición, mayor es la incertidumbre del momento.</p>`,
        `<p><strong>El efecto túnel</strong> significa que una partícula atraviesa una barrera de potencial que clásicamente no podría cruzar, porque no tiene suficiente energía. La función de onda decrece exponencialmente dentro de la barrera, pero no hasta cero, de modo que existe una probabilidad no nula de hallar la partícula al otro lado.</p>`,
        `<p>El efecto túnel explica la desintegración radiactiva alfa, el funcionamiento del microscopio de efecto túnel y la corriente eléctrica en algunos dispositivos semiconductores.</p>`,
        { fig: 'v5v8-tunel', caption: 'Una partícula con energía menor que la altura de la barrera tiene dentro de ella una onda que decrece exponencialmente y puede atravesarla por efecto túnel.' }
      ],
      examples: [
        { task: 'La posición de un electrón se conoce con una incertidumbre $\\Delta x=1\\,\\text{pm}$. ¿Cuál es la menor incertidumbre de su momento lineal? Usa $\\hbar=1{,}0546\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$.',
          steps: ['$\\Delta p_{\\min}=\\frac{\\hbar}{2\\,\\Delta x}=\\frac{1{,}0546\\cdot 10^{-34}}{2\\cdot 10^{-12}}$.', '$\\Delta p_{\\min}\\approx 5{,}27\\cdot 10^{-23}\\,\\text{kg}\\,\\text{m/s}$.', '<strong>Resultado: $\\Delta p_{\\min}\\approx 52{,}7\\cdot 10^{-24}\\,\\text{kg}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v6-specialna': {
      title: 'Relatividad especial',
      summary: 'Dos postulados, dilatación del tiempo y el factor de Lorentz.',
      theory: [
        `<p>La relatividad especial se basa en dos postulados: (1) las leyes de la física son las mismas en todos los sistemas de referencia inerciales, (2) la velocidad de la luz en el vacío $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$ es la misma para todo observador, independientemente del movimiento de la fuente.</p>`,
        `<p>Del segundo postulado se deduce que el tiempo no es absoluto. Los relojes en movimiento van más lentos: el intervalo $\\Delta t$ medido en el sistema respecto al cual los relojes se mueven es más largo que el tiempo propio $\\Delta t_0$ en su sistema en reposo. Se cumple $\\Delta t=\\gamma\\,\\Delta t_0$, donde $\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}\\geq 1$ es el <strong>factor de Lorentz</strong>.</p>`,
        `<p>El efecto es despreciable a velocidades cotidianas, porque $\\gamma$ está cerca de 1. A velocidades cercanas a $c$ crece muy rápidamente. Las partículas de los rayos cósmicos, por ejemplo, viven más de lo que permitiría la física clásica.</p>`,
        { fig: 'v5v8-gama', caption: 'El factor de Lorentz γ está cerca de 1 a bajas velocidades y crece bruscamente al acercarse la velocidad a c.' }
      ],
      examples: [
        { task: 'Una partícula se mueve con velocidad $v=0{,}6\\,c$. ¿Cuál es su factor de Lorentz?',
          steps: ['$\\gamma=\\frac{1}{\\sqrt{1-0{,}6^2}}=\\frac{1}{\\sqrt{0{,}64}}$.', '$\\sqrt{0{,}64}=0{,}8$, así que $\\gamma=\\frac{1}{0{,}8}$.', '<strong>Resultado: $\\gamma=1{,}25$</strong>'] }
      ]
    },
    'v6-lorentz': {
      title: 'Transformaciones de Lorentz',
      summary: 'Cómo cambian las coordenadas espacial y temporal de un suceso al pasar a otro sistema inercial.',
      theory: [
        `<p>La transformación de Galileo $x'=x-vt$ solo es válida a bajas velocidades. A velocidades cercanas a $c$ se necesitan las <strong>transformaciones de Lorentz</strong>, que conservan la velocidad de la luz. Para un sistema $S'$ que se mueve con velocidad $v$ en el sentido positivo del eje $x$, se tiene $x'=\\gamma\\,(x-\\beta\\,ct)$ y $ct'=\\gamma\\,(ct-\\beta\\,x)$, donde $\\beta=\\frac{v}{c}$.</p>`,
        `<p>El espacio y el tiempo se mezclan así: un suceso que es simultáneo en un sistema no tiene por qué serlo en otro. Esta <strong>relatividad de la simultaneidad</strong> es una consecuencia directa de la velocidad finita de la luz.</p>`,
        `<p>En la transformación inversa cambia el signo de la velocidad. Cuando $v\\to 0$ se tiene $\\gamma\\to 1$ y recuperamos la relación clásica $x'=x-vt$, de modo que las transformaciones de Lorentz contienen la física clásica como caso límite.</p>`,
        { fig: 'v5v8-lorentz', caption: 'Los ejes x′ y ct′ del sistema S′ están inclinados; la transformación de Lorentz recalcula las coordenadas del suceso.' }
      ],
      examples: [
        { task: 'En el sistema $S$ un suceso tiene coordenadas $x=8\\,\\text{m}$ y $ct=4\\,\\text{m}$. El sistema $S\'$ se mueve con velocidad $0{,}6\\,c$ en el sentido positivo del eje $x$. ¿Cuánto vale $x\'$ en $S\'$?',
          steps: ['$\\gamma=1{,}25$, $\\beta=0{,}6$.', '$x\'=\\gamma\\,(x-\\beta\\,ct)=1{,}25\\cdot(8-0{,}6\\cdot 4)=1{,}25\\cdot 5{,}6=7$.', '<strong>Resultado: $x\'=7\\,\\text{m}$</strong>'] }
      ]
    },
    'v6-energia': {
      title: 'Energía y momento lineal relativistas',
      summary: 'Energía total y cinética de una partícula a grandes velocidades.',
      theory: [
        `<p>En la relatividad una partícula tiene energía en reposo $E_0=mc^2$, aunque esté quieta. La energía total de una partícula en movimiento es $E=\\gamma\\,mc^2$. Para $v\\to 0$ se tiene $\\gamma\\to 1$ y la energía total se acerca a la energía en reposo.</p>`,
        `<p><strong>La energía cinética</strong> es la diferencia $E_k=E-E_0=(\\gamma-1)\\,mc^2$. Es la energía que debe suministrar el trabajo para acelerar la partícula desde el reposo hasta la velocidad $v$. A velocidades cercanas a $c$ la energía cinética crece sin límite, por lo que ninguna partícula con masa en reposo no nula puede alcanzar la velocidad de la luz.</p>`,
        `<p>El momento lineal relativista es $p=\\gamma\\,m\\,v$. Para la energía y el momento vale también la relación $E^2=(pc)^2+(mc^2)^2$, que es adecuada para los fotones, donde $m=0$.</p>`,
        { fig: 'v5v8-energia', caption: 'La energía total γmc² es la energía en reposo mc² más la energía cinética (γ − 1)mc².' }
      ],
      examples: [
        { task: 'Un electrón ($m\\,c^2=0{,}511\\,\\text{MeV}$) se mueve con velocidad $0{,}8\\,c$. ¿Cuál es su energía cinética?',
          steps: ['$\\gamma=\\frac{1}{\\sqrt{1-0{,}64}}=\\frac{5}{3}$.', '$E_k=(\\gamma-1)\\,mc^2=\\frac{2}{3}\\cdot 0{,}511\\approx 0{,}34\\,\\text{MeV}$.', '<strong>Resultado: $E_k\\approx 0{,}34\\,\\text{MeV}$</strong>'] }
      ]
    },
    'v6-ekvivalencia': {
      title: 'Equivalencia de masa y energía',
      summary: 'La relación E = mc² y la conversión de masa en energía y viceversa.',
      theory: [
        `<p>El resultado más conocido de la relatividad es la relación $E=mc^2$: la masa es una forma de energía, y la energía tiene una masa correspondiente $m=\\frac{E}{c^2}$. No es solo una fórmula sobre el movimiento, sino una propiedad de todo cuerpo, incluso del que está en reposo.</p>`,
        `<p>Pequeños cambios de masa significan grandes cantidades de energía, porque $c^2\\approx 9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$ es un número muy grande. Las reacciones nucleares liberan energía precisamente porque la suma de las masas de los productos es menor, en una pequeña fracción, que la de los núcleos originales.</p>`,
        `<p>Al convertir, hay que cuidar las unidades: masa en kilogramos, velocidad en metros por segundo, energía en julios. Un terajulio es $1\\,\\text{TJ}=10^{12}\\,\\text{J}$.</p>`
      ],
      examples: [
        { task: '¿Qué energía libera la conversión completa de $1\\,\\text{g}$ de materia? Da el resultado en terajulios.',
          steps: ['$m=10^{-3}\\,\\text{kg}$, $c^2=9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$.', '$E=mc^2=10^{-3}\\cdot 9\\cdot 10^{16}=9\\cdot 10^{13}\\,\\text{J}=90\\,\\text{TJ}$.', '<strong>Resultado: $90\\,\\text{TJ}$</strong>'] }
      ]
    },
    'v6-interval': {
      title: 'Intervalos espacio-temporales',
      summary: 'El intervalo invariante en un diagrama espacio-temporal y el tiempo propio.',
      theory: [
        `<p>La relatividad une el espacio y el tiempo en un <strong>espacio-tiempo</strong> de cuatro dimensiones. Los sucesos son puntos en él, y su distancia no es la ordinaria. El <strong>intervalo</strong> entre dos sucesos con diferencia de tiempo $\\Delta t$ y diferencia espacial $\\Delta x$ es $\\Delta s^2=c^2\\Delta t^2-\\Delta x^2$.</p>`,
        `<p>El intervalo tiene el mismo valor en todo sistema inercial, por eso se llama <strong>invariante</strong>. Si $\\Delta s^2>0$, el intervalo es de tipo temporal y existe un sistema en el que ambos sucesos ocurren en el mismo lugar. El tiempo propio es entonces $\\Delta\\tau=\\frac{\\sqrt{\\Delta s^2}}{c}$.</p>`,
        `<p>En unidades con $c=1$ (longitudes medidas en segundos-luz) basta calcular $\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}$. El resultado es siempre menor o igual que $\\Delta t$, lo que de nuevo es la dilatación del tiempo.</p>`,
        { fig: 'v5v8-interval', caption: 'Para un intervalo temporal el tiempo propio Δτ = √(Δt² − Δx²) es menor que Δt.' }
      ],
      examples: [
        { task: 'Dos sucesos están separados en el tiempo $\\Delta t=5\\,\\text{s}$ y en el espacio $\\Delta x=3\\,\\text{ls}$ (segundos-luz). ¿Cuál es el tiempo propio $\\Delta\\tau$?',
          steps: ['$\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}=\\sqrt{25-9}$.', '<strong>Resultado: $\\Delta\\tau=4\\,\\text{s}$</strong>'] }
      ]
    },
    'v6-vseobecna': {
      title: 'Relatividad general',
      summary: 'El principio de equivalencia, la gravitación como curvatura del espacio-tiempo y el radio de Schwarzschild.',
      theory: [
        `<p>La relatividad general (1915) se basa en el <strong>principio de equivalencia</strong>: localmente es imposible distinguir la aceleración de la gravedad. Una persona en un ascensor que cae libremente en un campo gravitatorio no siente peso, exactamente igual que un astronauta en órbita.</p>`,
        `<p>De ello Einstein dedujo que la gravitación no es una fuerza en el sentido clásico, sino la <strong>curvatura del espacio-tiempo</strong> causada por la masa y la energía. Los cuerpos se mueven por los caminos más cortos posibles, las llamadas geodésicas, que en un espacio curvo son curvas.</p>`,
        `<p>Un campo gravitatorio intenso ralentiza el tiempo: los relojes cerca de un cuerpo masivo van más lentos que los lejanos. Para una masa $M$, el <strong>radio de Schwarzschild</strong> es $r_s=\\frac{2GM}{c^2}$. Para la Tierra es de unos $9$ mm, para el Sol de unos $3\\,\\text{km}$.</p>`
      ],
      examples: [
        { task: '¿Cuál es el radio de Schwarzschild del Sol, si $M=1{,}989\\cdot 10^{30}\\,\\text{kg}$, $G=6{,}674\\cdot 10^{-11}$ y $c=3\\cdot 10^{8}\\,\\text{m/s}$?',
          steps: ['$r_s=\\frac{2GM}{c^2}=\\frac{2\\cdot 6{,}674\\cdot 10^{-11}\\cdot 1{,}989\\cdot 10^{30}}{9\\cdot 10^{16}}$.', '$r_s\\approx 2{,}95\\cdot 10^{3}\\,\\text{m}$.', '<strong>Resultado: $r_s\\approx 2{,}95\\,\\text{km}$</strong>'] }
      ]
    },
    'v6-zakrivenie': {
      title: 'Curvatura del espacio-tiempo',
      summary: 'Cómo la masa curva el espacio-tiempo y qué fenómenos lo demuestran.',
      theory: [
        `<p>Imagina una lámina elástica sobre la que colocas una bola pesada. La lámina se comba y las pequeñas bolitas ruedan hacia ella. De modo similar, la masa curva el espacio-tiempo y los cuerpos se mueven por trayectorias curvas. La analogía es solo ilustrativa, no un modelo exacto.</p>`,
        `<p>La prueba más directa es la <strong>desviación de la luz</strong> al pasar cerca del Sol. La luz se propaga por el camino más corto, que en un espacio-tiempo curvo no es una recta. Una estrella detrás del Sol parece, por tanto, desplazada para el observador. Este efecto fue medido por Eddington en 1919.</p>`,
        `<p>Otros fenómenos, por ejemplo el desplazamiento gravitatorio de las líneas espectrales o la ralentización del tiempo cerca de la materia, pueden medirse con la precisión necesaria para la navegación de los satélites GPS. Los fenómenos no relacionados con la gravedad ni con el espacio-tiempo, por ejemplo la descomposición de la luz blanca en un prisma, no pueden explicarse por la curvatura.</p>`,
        { fig: 'v5v8-zakrivenie', caption: 'La masa curva el espacio-tiempo y los cuerpos se mueven por trayectorias curvas. La cuadrícula es solo una analogía ilustrativa.' }
      ],
      examples: [
        { task: '¿Cuál de estos fenómenos es consecuencia de la curvatura del espacio-tiempo: la desviación de la luz que pasa junto al Sol, o el cambio de color de la luz en un prisma?',
          steps: ['La curvatura del espacio-tiempo describe la gravitación, que afecta a la trayectoria de la luz.', 'La descomposición de la luz en un prisma es consecuencia de la dependencia del índice de refracción con la longitud de onda.', '<strong>Resultado: la desviación de la luz alrededor del Sol</strong>'] }
      ]
    },
    'v6-gravvlny': {
      title: 'Ondas gravitacionales y agujeros negros',
      summary: 'Las ondas gravitacionales como ondulaciones del espacio-tiempo y el horizonte de sucesos de un agujero negro.',
      theory: [
        `<p><strong>Las ondas gravitacionales</strong> son ondulaciones del espacio-tiempo que se propagan a la velocidad de la luz. Surgen cuando grandes masas se aceleran, por ejemplo al fusionarse dos agujeros negros. La primera observación directa se logró en 2015 con el interferómetro LIGO.</p>`,
        `<p>Un <strong>agujero negro</strong> es una región donde la velocidad de escape es mayor que $c$, de modo que la luz no puede salir de ella. Su frontera es el <strong>horizonte de sucesos</strong>, situado en el radio de Schwarzschild $r_s=\\frac{2GM}{c^2}$. Dentro del horizonte todas las trayectorias se dirigen hacia el centro.</p>`,
        `<p>El radio del horizonte crece en proporción directa a la masa. Un agujero negro con la masa del Sol tiene un horizonte de unos $3\\,\\text{km}$, y uno con diez veces la masa del Sol, de unos $30\\,\\text{km}$.</p>`,
        { fig: 'v5v8-horizont', caption: 'El radio del horizonte de sucesos es r_s = 2GM/c²; la luz desde dentro del horizonte no puede escapar.' }
      ],
      examples: [
        { task: '¿Cuál es el radio del horizonte de un agujero negro de masa $10\\,M_{\\odot}$, si para el Sol $r_s\\approx 2{,}95\\,\\text{km}$?',
          steps: ['El radio es proporcional a la masa: $r_s=2{,}95\\,\\text{km}\\cdot 10$.', '<strong>Resultado: $r_s\\approx 29{,}5\\,\\text{km}$</strong>'] }
      ]
    },
    'v7-atom': {
      title: 'Estructura del átomo y las capas electrónicas',
      summary: 'El núcleo, la envoltura electrónica, y la distribución de los electrones en capas y su capacidad.',
      theory: [
        `<p>Un átomo tiene un <strong>núcleo</strong> formado por protones y neutrones (en conjunto, nucleones) y una <strong>envoltura electrónica</strong>. El número de protones es el número atómico $Z$ y determina el elemento químico. Un átomo neutro tiene el mismo número de electrones.</p>`,
        `<p>Los electrones no se distribuyen de forma arbitraria. Permanecen en <strong>capas</strong> con número $n = 1, 2, 3, \\dots$ (designadas K, L, M). Una capa con número $n$ admite como máximo $2n^2$ electrones: K admite 2, L admite 8, M admite 18.</p>`,
        `<p><strong>¿Por qué precisamente esa cantidad?</strong> Los electrones se describen mediante la mecánica cuántica. Cada estado de un electrón está determinado por un conjunto de números cuánticos, y el principio de Pauli prohíbe que dos electrones de un átomo tengan el mismo estado. Las capas se llenan de dentro hacia fuera, y la capa más externa (de valencia) determina las propiedades químicas del elemento.</p>`,
        `<ol><li>En la tabla periódica busca $Z$, y con ello el número de electrones.</li><li>Distribúyelos en capas: primero K, luego L, luego M.</li><li>La última capa ocupada es la de valencia.</li></ol>`,
        { fig: 'obr-atom', caption: 'Modelo simplificado del átomo: un núcleo positivo y electrones en órbitas.' }
      ],
      examples: [
        { task: '¿Cuál es el número máximo de electrones en la capa L (número $n = 2$)?',
          steps: ['Sustituimos $n = 2$ en la fórmula $2n^2$.', '$2\\cdot 2^2 = 8$.', '<strong>Resultado: 8 electrones</strong>'] },
        { task: 'El carbono tiene $Z = 6$. ¿Cuántos electrones hay en sus capas K y L?',
          steps: ['La capa K admite 2 electrones.', 'Los $6 - 2 = 4$ electrones restantes van a la capa L.', '<strong>Resultado: 2 en K y 4 en L</strong>'] }
      ]
    },
    'v7-spektra': {
      title: 'Espectros atómicos y niveles de energía',
      summary: 'Transiciones de los electrones entre niveles y energía de los fotones emitidos.',
      theory: [
        `<p>Un átomo solo puede tener ciertos <strong>niveles de energía</strong>. Cuando un electrón pasa de un nivel superior a uno inferior, emite un <strong>fotón</strong> con energía igual a la diferencia de niveles. Por el contrario, un fotón de energía adecuada puede excitar un electrón a un nivel superior.</p>`,
        `<p>La energía de un fotón es $E = h f = \\dfrac{h c}{\\lambda}$, donde $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$ es la constante de Planck. En física atómica la energía se expresa en electronvoltios: $1\\,\\text{eV} = 1{,}6\\cdot 10^{-19}\\,\\text{J}$.</p>`,
        `<p>Para el átomo de hidrógeno $E_n = -\\dfrac{13{,}6}{n^2}\\,\\text{eV}$. El estado fundamental ($n = 1$) es el más bajo, y los niveles se aproximan a cero desde abajo. En una transición de $n_i$ a $n_f$ se produce un fotón con energía $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}\\right)$.</p>`,
        `<p><strong>¿Por qué los espectros son de líneas?</strong> Los niveles son discretos, así que los fotones tienen solo unas pocas energías precisas. En un espectrograma vemos, por tanto, líneas nítidas, no un arcoíris continuo. Cada elemento tiene su propio conjunto de líneas, y por eso su espectro es como una huella dactilar.</p>`,
        { fig: 'v5v8-vodik', caption: 'En una transición a un nivel inferior el átomo emite un fotón con energía igual a la diferencia de niveles.' }
      ],
      examples: [
        { task: 'Un electrón del átomo de hidrógeno pasa del nivel $n=3$ al nivel $n=2$. ¿Qué energía tiene el fotón emitido?',
          steps: ['La diferencia de niveles: $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{2^2}-\\dfrac{1}{3^2}\\right)$.', '$\\dfrac{1}{4}-\\dfrac{1}{9}=\\dfrac{5}{36}$, así que $\\Delta E = 13{,}6\\cdot\\dfrac{5}{36}\\approx 1{,}89\\,\\text{eV}$.', '<strong>Resultado: aproximadamente 1,89 eV</strong>'] },
        { task: '¿Qué transición emite un fotón con mayor energía: $2\\to 1$ o $3\\to 2$?',
          steps: ['Transición $2\\to 1$: $13{,}6\\cdot\\left(1-\\dfrac{1}{4}\\right)=10{,}2\\,\\text{eV}$.', 'La transición $3\\to 2$ da aproximadamente $1{,}89\\,\\text{eV}$.', '<strong>Resultado: la transición $2\\to 1$</strong>'] }
      ]
    },
    'v7-jadro': {
      title: 'Estructura del núcleo atómico',
      summary: 'Protones, neutrones, notación de nucleidos, isótopos y tamaño del núcleo.',
      theory: [
        `<p>El núcleo está formado por protones (carga $+e$) y neutrones (sin carga). En conjunto se llaman nucleones. Un nucleido se escribe como $^{A}_{Z}\\mathrm{X}$: $A$ es el número másico, $Z$ el número atómico, y el número de neutrones es $N = A - Z$.</p>`,
        `<p>El radio del núcleo crece aproximadamente con la raíz cúbica del número másico: $r \\approx 1{,}2\\cdot 10^{-15}\\,\\text{m}\\cdot A^{1/3}$. Los núcleos son, por tanto, muy pequeños (del orden de femtómetros), pero tienen casi la misma densidad.</p>`,
        `<p><strong>¿Por qué no se desintegra el núcleo?</strong> Los protones se repelen eléctricamente, pero también actúa la interacción nuclear fuerte. Es una fuerza atractiva de corto alcance que es más intensa que la repulsión eléctrica. Los núcleos pesados estables tienen más neutrones que protones (p. ej., $^{208}_{82}\\mathrm{Pb}$).</p>`,
        `<ul><li><strong>Isótopos</strong> tienen el mismo $Z$, pero distinto $N$ (p. ej., $^{12}_{6}\\mathrm{C}$ y $^{14}_{6}\\mathrm{C}$).</li><li><strong>Isóbaros</strong> tienen el mismo $A$, pero distinto $Z$.</li></ul>`,
        { fig: 'v5v8-nuklidy', caption: 'Los núcleos estables ligeros tienen N ≈ Z, mientras que los núcleos estables más pesados tienen más neutrones que protones.' }
      ],
      examples: [
        { task: '¿Cuántos protones y neutrones tiene el núcleo $^{238}_{92}\\mathrm{U}$?',
          steps: ['El número atómico es $Z=92$.', '$N = A - Z = 238 - 92 = 146$.', '<strong>Resultado: 92 protones y 146 neutrones</strong>'] },
        { task: '¿Cómo cambia el radio de un núcleo si su número másico aumenta ocho veces?',
          steps: ['$r \\propto A^{1/3}$, así que $r$ cambia como $\\sqrt[3]{A}$.', '$\\sqrt[3]{8}=2$, así que el radio se duplica.', '<strong>Resultado: el radio se duplica</strong>'] }
      ]
    },
    'v7-radioaktivita': {
      title: 'Radiactividad y transformaciones nucleares',
      summary: 'Tipos de desintegración, ley de desintegración, período de semidesintegración y actividad.',
      theory: [
        `<p>Los núcleos inestables se transforman espontáneamente. En la desintegración <strong>alfa</strong> se emite un núcleo de helio $^{4}_{2}\\mathrm{He}$. En la desintegración <strong>beta-menos</strong> un neutrón se convierte en protón, y se producen un electrón y un antineutrino. En la radiación <strong>gamma</strong> el núcleo solo se libera de energía excedente; ni $Z$ ni $A$ cambian. En cada transformación se cumple la conservación del número nucleónico y del número protónico.</p>`,
        `<p>La desintegración de un único núcleo es un proceso aleatorio, pero para un gran número de núcleos se cumple la ley de desintegración $N(t) = N_0\\cdot 2^{-t/T}$. El tiempo $T$ es el <em>período de semidesintegración</em>, en el que se desintegra la mitad de los núcleos. La ley surge de suponer que la probabilidad de desintegración en un breve intervalo $dt$ es proporcional al número de núcleos: $\\dfrac{dN}{dt}=-\\lambda N$.</p>`,
        `<p><strong>La actividad</strong> $A = \\lambda N$ indica el número de desintegraciones por segundo. La unidad es el becquerelio, $1\\,\\text{Bq} = 1\\,\\text{s}^{-1}$. La constante de desintegración es $\\lambda = \\dfrac{\\ln 2}{T}$.</p>`,
        `<ol><li>Calcula el número de semiperíodos $k = t/T$.</li><li>Divide el número de núcleos por $2^{k}$, no solo por dos.</li></ol>`,
        { fig: 'v5v8-rozpad', caption: 'El número de núcleos no desintegrados disminuye exponencialmente: tras cada semiperíodo queda la mitad.' }
      ],
      examples: [
        { task: 'Un radioisótopo tiene un período de semidesintegración de 8 días. ¿Qué porcentaje de núcleos queda después de 24 días?',
          steps: ['El número de semiperíodos es $k = 24/8 = 3$.', '$N = N_0\\cdot 2^{-3} = \\dfrac{N_0}{8}$, por tanto queda el 12,5 %.', '<strong>Resultado: 12,5 %</strong>'] },
        { task: 'Una muestra tiene $4\\cdot 10^{6}$ núcleos y un período de semidesintegración de 2 h. ¿Cuántos núcleos quedan después de 6 h?',
          steps: ['En 6 h transcurren $k = 6/2 = 3$ semiperíodos.', '$N = \\dfrac{4\\cdot 10^{6}}{2^{3}} = 5\\cdot 10^{5}$.', '<strong>Resultado: 500 000 núcleos</strong>'] }
      ]
    },
    'v7-stiepenie-fuzia': {
      title: 'Fisión y fusión nuclear',
      summary: 'Defecto de masa, energía de enlace y energía liberada por la fisión o la fusión.',
      theory: [
        `<p>El núcleo tiene una masa menor que la suma de las masas de sus nucleones. Esta diferencia es el <em>defecto de masa</em> $\\Delta m$. Según la relación $E = \\Delta m\\, c^2$ se libera la energía correspondiente. Para cálculos prácticos vale $1\\,\\text{u}\\cdot c^2 \\approx 931{,}5\\,\\text{MeV}$.</p>`,
        `<p>La mayor energía de enlace por nucleón la tienen los núcleos alrededor del hierro ($A\\approx 56$). Por eso los núcleos pesados pueden <strong>fisionarse</strong> en núcleos de masa intermedia, y los núcleos ligeros pueden <strong>fusionarse</strong>. Ambos caminos conducen a una mayor energía de enlace y liberan energía.</p>`,
        `<p>En la fisión de $^{235}_{92}\\mathrm{U}$ por un neutrón se producen dos fragmentos, de 2 a 3 neutrones y aproximadamente 200 MeV de energía. Estos neutrones pueden provocar una reacción en cadena, que debe regularse en un reactor.</p>`,
        `<p>La fusión requiere una temperatura extremadamente alta para que los núcleos cargados positivamente se acerquen al alcance de la interacción fuerte. En la reacción $^{2}_{1}\\mathrm{H}+{}^{3}_{1}\\mathrm{H}\\to{}^{4}_{2}\\mathrm{He}+n$ se libera aproximadamente 17,6 MeV.</p>`,
        { fig: 'v5v8-vazba', caption: 'La energía de enlace por nucleón alcanza su máximo en el hierro: los núcleos ligeros se fusionan, los pesados se fisionan.' }
      ],
      examples: [
        { task: 'En una reacción nuclear se produce un defecto de masa $\\Delta m = 0{,}2\\,\\text{u}$. ¿Qué energía es?',
          steps: ['$E=\\Delta m\\cdot 931{,}5\\,\\text{MeV}$.', '$E=0{,}2\\cdot 931{,}5=186{,}3\\,\\text{MeV}$.', '<strong>Resultado: 186,3 MeV</strong>'] },
        { task: '¿Por qué la fusión en la Tierra es más exigente que la fisión?',
          steps: ['Los núcleos están cargados positivamente y se repelen.', 'Se necesitan una temperatura y una presión extremas para acercarlos al alcance de la interacción fuerte.', '<strong>Resultado: la fusión requiere condiciones extremas</strong>'] }
      ]
    },
    'v7-ziarenie-latka': {
      title: 'Interacción de la radiación con la materia',
      summary: 'Atenuación de la radiación, espesor de semiatenuación y los procesos principales en la radiación gamma.',
      theory: [
        `<p>La radiación pierde energía al atravesar la materia. Las partículas alfa se detienen ya con una hoja de papel, las partículas beta atraviesan unos milímetros de aluminio, y la radiación gamma penetra profundamente y se atenúa solo gradualmente.</p>`,
        `<p>Para un haz estrecho de fotones se cumple la atenuación exponencial $I(x) = I_0\\,e^{-\\mu x}$, donde $\\mu$ es el coeficiente de atenuación. Más práctico es el <em>espesor de semiatenuación</em> $d_{1/2}$, es decir, la capa que reduce la intensidad a la mitad. Entonces $I = I_0\\cdot 2^{-x/d_{1/2}}$.</p>`,
        `<p>En la radiación gamma son importantes tres procesos: el <strong>efecto fotoeléctrico</strong> (el fotón es absorbido, domina a bajas energías), la <strong>dispersión Compton</strong> (el fotón pierde parte de su energía) y la <strong>creación de pares</strong> electrón–positrón (a partir de 1,022 MeV). Los materiales pesados y densos, por ejemplo el plomo, apantallan mejor.</p>`,
        `<ul><li>La radiación ionizante arranca electrones de los átomos, por lo que puede dañar las células.</li><li>La protección se elige según el tipo de radiación: papel o la mano frente a la alfa, metacrilato frente a la beta, plomo u hormigón frente a la gamma.</li></ul>`,
        { fig: 'v5v8-zoslabenie', caption: 'Cada espesor de semiatenuación reduce la intensidad de la radiación a la mitad.' }
      ],
      examples: [
        { task: 'Una capa de plomo tiene un espesor de semiatenuación de 1,2 cm. ¿Qué porcentaje de la radiación atraviesa una capa de 3,6 cm de espesor?',
          steps: ['$x/d_{1/2}=3{,}6/1{,}2=3$ espesores de semiatenuación.', '$I = I_0\\cdot 2^{-3}=\\dfrac{I_0}{8}$.', '<strong>Resultado: 12,5 %</strong>'] },
        { task: 'La intensidad de la radiación bajó a una cuarta parte. ¿Cuántos espesores de semiatenuación tenía la capa?',
          steps: ['$\\dfrac{1}{4}=2^{-2}$.', 'Por tanto, la capa tenía 2 espesores de semiatenuación.', '<strong>Resultado: 2</strong>'] }
      ]
    },
    'v7-jadrova-energetika': {
      title: 'Energía nuclear y detección de la radiación',
      summary: 'Principio del reactor nuclear, eficiencia de la central y medición de la dosis de radiación.',
      theory: [
        `<p>Un reactor nuclear utiliza la fisión de $^{235}_{92}\\mathrm{U}$ en una reacción en cadena controlada. El calor del reactor calienta el agua, se produce vapor, y el vapor impulsa una turbina con un generador que produce electricidad.</p>`,
        `<p>El rendimiento de la central es $\\eta = \\dfrac{P_{\\text{el}}}{P_{\\text{t}}}$, donde $P_{\\text{t}}$ es la potencia térmica del reactor. Parte del calor no puede convertirse en trabajo y, por eso, se evacúa al agua de refrigeración. Las centrales nucleares suelen tener un rendimiento de alrededor del 33 %.</p>`,
        `<p><strong>Control:</strong> barras de control de materiales que absorben neutrones (p. ej., boro, cadmio). Un <strong>moderador</strong> (agua, grafito) frena los neutrones para que puedan fisionar núcleos con mayor eficacia.</p>`,
        `<p><strong>Dosimetría:</strong> la dosis absorbida $D = E/m$ se expresa en grays, $1\\,\\text{Gy} = 1\\,\\text{J/kg}$. Los detectores, como el tubo Geiger–Müller o un centelleador, reaccionan a partículas y fotones individuales.</p>`,
        { fig: 'v5v8-reaktor', caption: 'La central convierte el calor del reactor en trabajo; el calor restante va al agua de refrigeración.' }
      ],
      examples: [
        { task: 'Un reactor tiene una potencia térmica de 3000 MW y un rendimiento del 33 %. ¿Cuál es su potencia eléctrica?',
          steps: ['$P_{\\text{el}}=\\eta\\,P_{\\text{t}}$.', '$0{,}33\\cdot 3000=990\\,\\text{MW}$.', '<strong>Resultado: 990 MW</strong>'] },
        { task: 'Como consecuencia de una irradiación, un cuerpo absorbió una energía de 0,5 J. La masa del cuerpo es de 50 kg. ¿Cuál es la dosis absorbida?',
          steps: ['$D = E/m$.', '$D = 0{,}5/50 = 0{,}01\\,\\text{Gy}$.', '<strong>Resultado: 0,01 Gy</strong>'] }
      ]
    },
    'v8-castice': {
      title: 'Partículas elementales y sus propiedades',
      summary: 'Características de las partículas, fermiones y bosones, bariones y mesones.',
      theory: [
        `<p>Según los conocimientos actuales, las partículas elementales no tienen estructura interna. Se caracterizan por su <strong>masa</strong>, su <strong>carga eléctrica</strong>, su <strong>espín</strong> (momento angular intrínseco) y, en el caso de los quarks y los gluones, también por el <strong>color</strong>.</p>`,
        `<p>Según el espín, las partículas se dividen en <em>fermiones</em> (espín $\\tfrac{1}{2}$, forman la materia y obedecen el principio de Pauli) y <em>bosones</em> (espín entero, median las interacciones, p. ej., el fotón con espín 1).</p>`,
        `<p>Los hadrones están compuestos por quarks. Los <strong>bariones</strong> contienen tres quarks (protón $uud$, neutrón $udd$). Los <strong>mesones</strong> contienen un par quark–antiquark (p. ej., $\\pi^{+}=u\\bar{d}$). Los leptones (electrón, muón, tau y neutrinos) no participan en la interacción fuerte.</p>`,
        `<ul><li>Protón: masa aproximada de 938 MeV/$c^2$, carga $+e$.</li><li>Neutrón: masa aproximada de 940 MeV/$c^2$, carga $0$.</li><li>Electrón: masa aproximada de 0{,}511 MeV/$c^2$, carga $-e$.</li></ul>`,
        { fig: 'v5v8-kvarky', caption: 'El protón (uud) y el neutrón (udd) están formados por tres quarks; la suma de sus cargas es la carga de la partícula.' }
      ],
      examples: [
        { task: '¿De qué quarks está compuesto el neutrón?',
          steps: ['El neutrón es un barión, por tanto contiene tres quarks.', 'La carga debe ser 0: dos quarks $d$ y uno $u$ dan $-\\tfrac{1}{3}-\\tfrac{1}{3}+\\tfrac{2}{3}=0$.', '<strong>Resultado: $udd$</strong>'] },
        { task: '¿Es el electrón un barión?',
          steps: ['Un barión está compuesto por tres quarks.', 'El electrón es un leptón y no contiene quarks.', '<strong>Resultado: no</strong>'] }
      ]
    },
    'v8-kvarky-leptony': {
      title: 'Quarks y leptones',
      summary: 'Generaciones de fermiones y las cargas fraccionarias de los quarks.',
      theory: [
        `<p>Los seis quarks se dividen en tres generaciones: $(u,d)$, $(c,s)$ y $(t,b)$. Los quarks $u$, $c$, $t$ tienen carga $+\\tfrac{2}{3}e$ y los quarks $d$, $s$, $b$ tienen carga $-\\tfrac{1}{3}e$. Son las únicas partículas con carga fraccionaria no nula.</p>`,
        `<p>Los leptones forman también tres generaciones de parejas: $(e,\\nu_e)$, $(\\mu,\\nu_\\mu)$ y $(\\tau,\\nu_\\tau)$. Los leptones cargados tienen carga $-e$. Los neutrinos son neutros e interactúan muy débilmente con la materia.</p>`,
        `<p>Los hadrones libres tienen una carga total que es un múltiplo entero de $e$. Por eso los quarks se combinan en tríos (bariones) o en parejas quark–antiquark (mesones). Esta suma es una comprobación útil al escribir reacciones.</p>`,
        `<ol><li>Determina la carga de cada quark en unidades de $e$.</li><li>Súmalas.</li><li>El resultado debe ser un número entero.</li></ol>`,
        { fig: 'v5v8-generacie', caption: 'Los fermiones aparecen en tres generaciones; las generaciones superiores son más pesadas e inestables.' }
      ],
      examples: [
        { task: '¿Cuál es la carga de la partícula $uud$?',
          steps: ['$u$ tiene $+\\tfrac{2}{3}$, $d$ tiene $-\\tfrac{1}{3}$.', '$\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3}=1$.', '<strong>Resultado: $+e$ (protón)</strong>'] },
        { task: '¿Qué carga tiene el barión $uds$ (la partícula Λ)?',
          steps: ['$\\tfrac{2}{3}-\\tfrac{1}{3}-\\tfrac{1}{3}=0$.', '<strong>Resultado: carga 0</strong>'] }
      ]
    },
    'v8-fotony': {
      title: 'Fotones y otras partículas mediadoras',
      summary: 'Bosones de gauge como portadores de las interacciones y sus propiedades.',
      theory: [
        `<p>Las interacciones entre partículas se producen mediante el intercambio de <strong>bosones de gauge</strong>. El fotón $\\gamma$ transmite la fuerza electromagnética, los gluones $g$ la fuerza fuerte, y los bosones $W^{\\pm}$ y $Z^{0}$ la fuerza débil.</p>`,
        `<p>El fotón no tiene masa ni carga, y su espín es 1. El gluón también carece de masa, pero lleva carga de <em>color</em>, por lo que se liga también consigo mismo. Esta es la razón por la que los quarks no pueden aislarse y quedan confinados dentro de los hadrones.</p>`,
        `<p>Los bosones $W$ y $Z$ son muy pesados (masas de aproximadamente 80 y 91 GeV/$c^2$), por eso el alcance de la interacción débil es corto, del orden de $10^{-18}\\,\\text{m}$. El alcance es inversamente proporcional a la masa de la partícula mediadora.</p>`,
        `<p>El gravitón es un bosón hipotético de la gravitación. Todavía no ha sido confirmado experimentalmente y no está incluido en el modelo estándar.</p>`,
        { fig: 'v5v8-interakcie', caption: 'Las cuatro interacciones fundamentales: cada una se transmite por el intercambio de su bosón y tiene un alcance distinto.' }
      ],
      examples: [
        { task: '¿Qué partícula media la interacción fuerte?',
          steps: ['La interacción fuerte la median los gluones.', '<strong>Resultado: el gluón</strong>'] },
        { task: '¿Por qué la interacción débil tiene un alcance tan corto?',
          steps: ['Los bosones mediadores $W$ y $Z$ tienen una gran masa.', 'El alcance es inversamente proporcional a la masa, así que la gran masa acorta el alcance.', '<strong>Resultado: la gran masa de los bosones acorta el alcance</strong>'] }
      ]
    },
    'v8-standardny-model': {
      title: 'El modelo estándar de la física de partículas',
      summary: 'Visión general de las partículas e interacciones del modelo estándar y su recuento.',
      theory: [
        `<p>El modelo estándar describe tres de las cuatro interacciones fundamentales (electromagnética, débil y fuerte) y todas las partículas elementales conocidas hasta ahora. Todavía no incluye la gravitación.</p>`,
        `<p>La materia está formada por 12 fermiones: 6 quarks y 6 leptones en tres generaciones. Cada generación siguiente es más pesada e inestable. La materia estable está formada solo por partículas de la primera generación.</p>`,
        `<p>Las partículas adquieren masa mediante el <em>mecanismo de Higgs</em>. Las leyes de conservación (carga, color, números leptónicos) y las simetrías determinan qué procesos están permitidos.</p>`,
        `<ul><li>Bosones de gauge: el fotón $\\gamma$, ocho gluones $g$, los bosones $W^{\\pm}$ y $Z^{0}$.</li><li>El bosón de Higgs $H^{0}$.</li></ul>`,
        { fig: 'v5v8-generacie', caption: 'Los fermiones aparecen en tres generaciones; las generaciones superiores son más pesadas e inestables.' }
      ],
      examples: [
        { task: '¿Cuántos fermiones tiene el modelo estándar en las dos primeras generaciones?',
          steps: ['Cada generación contiene 2 quarks y 2 leptones, es decir, 4 fermiones.', '$2\\cdot 4 = 8$.', '<strong>Resultado: 8</strong>'] },
        { task: '¿Cuántos bosones de gauge hay en el modelo estándar?',
          steps: ['El fotón (1), los gluones (8) y los bosones $W^{+}$, $W^{-}$, $Z^{0}$ (3).', '$1+8+3=12$.', '<strong>Resultado: 12</strong>'] }
      ]
    },
    'v8-interakcie': {
      title: 'Interacciones fuerte, débil y electromagnética',
      summary: 'Alcance, acción e intensidad relativa de tres interacciones.',
      theory: [
        `<p><strong>La interacción fuerte</strong> mantiene unidos a los quarks dentro de protones y neutrones, y a los nucleones dentro del núcleo. Tiene el alcance más corto, del orden de $10^{-15}\\,\\text{m}$, y es la más intensa de las cuatro interacciones.</p>`,
        `<p><strong>La interacción electromagnética</strong> actúa entre cargas. Provoca las fuerzas eléctricas y magnéticas y la unión de los electrones en los átomos. Su alcance es infinito y la fuerza disminuye con el cuadrado de la distancia.</p>`,
        `<p><strong>La interacción débil</strong> es responsable de la desintegración beta, en la que un quark $d$ se convierte en un quark $u$ y se emite un bosón $W^{-}$. Su alcance es muy corto, del orden de $10^{-18}\\,\\text{m}$. Cambia el sabor de los quarks, algo que las demás interacciones no pueden hacer.</p>`,
        `<p>Las intensidades relativas (para dos partículas en un núcleo) son aproximadamente 1 : $10^{-2}$ : $10^{-6}$ : $10^{-39}$ en el orden fuerte, electromagnética, débil y gravitatoria. La gravedad es la más débil y en el microcosmos es despreciable.</p>`,
        { fig: 'v5v8-interakcie', caption: 'Las cuatro interacciones fundamentales: cada una se transmite por el intercambio de su bosón y tiene un alcance distinto.' }
      ],
      examples: [
        { task: '¿Qué interacción es la responsable de la desintegración beta?',
          steps: ['En la desintegración beta un quark $d$ se convierte en un quark $u$.', 'El cambio de sabor del quark es el dominio de la interacción débil.', '<strong>Resultado: la interacción débil</strong>'] },
        { task: '¿Qué interacción mantiene unidos a los electrones en un átomo?',
          steps: ['Los electrones tienen carga negativa y el núcleo carga positiva.', '<strong>Resultado: la interacción electromagnética</strong>'] }
      ]
    },
    'v8-urychlovace': {
      title: 'Aceleradores de partículas y detectores',
      summary: 'Aceleración de partículas cargadas, colisiones y reconstrucción de sucesos en un detector.',
      theory: [
        `<p>Un acelerador acelera partículas cargadas mediante un campo eléctrico. Una partícula con carga $q = z\\,e$ que atraviesa un voltaje $U$ adquiere energía cinética $E_k = z\\,e\\,U$. Si el voltaje está en megavoltios, la energía sale en MeV.</p>`,
        `<p>Los grandes aceleradores, por ejemplo el LHC del CERN con una circunferencia de 27 km, mantienen los haces en una trayectoria circular con imanes potentes, y las partículas se aceleran por etapas. Las colisiones protón–protón alcanzan energías del orden de TeV.</p>`,
        `<p>Los detectores registran las trayectorias de las partículas. Un detector de trazas en un campo magnético muestra la curvatura de la trayectoria, a partir de la cual se determina el momento lineal. Los calorímetros miden la energía y las cámaras de muones siguen a los muones. A partir de esos datos reconstruimos qué partícula se produjo.</p>`,
        `<p>Según la relación $E = m\\,c^2$, la energía cinética de una colisión puede convertirse en masa de nuevas partículas. Por eso en las colisiones de alta energía se producen también partículas muy pesadas.</p>`,
        { fig: 'v5v8-urychlovac', caption: 'Una partícula con carga ze atraviesa el voltaje U y adquiere energía zeU; la acelera un campo eléctrico.' }
      ],
      examples: [
        { task: 'Un protón es acelerado por un voltaje de 5 MV. ¿Qué energía cinética tiene?',
          steps: ['Para el protón $z=1$, así que $E_k = e\\,U$.', '$E_k = 5\\,\\text{MeV}$.', '<strong>Resultado: 5 MeV</strong>'] },
        { task: 'Una partícula con carga $+2e$ atraviesa un voltaje de 3 MV. ¿Qué energía adquiere?',
          steps: ['$z=2$, así que $E_k = 2\\cdot 3\\,\\text{MeV}$.', '<strong>Resultado: 6 MeV</strong>'] }
      ]
    },
    'v8-higgs': {
      title: 'El bosón de Higgs y las preguntas abiertas',
      summary: 'El campo de Higgs, el descubrimiento del bosón de Higgs y los problemas no resueltos de la física moderna.',
      theory: [
        `<p>El bosón de Higgs fue descubierto en 2012 en el LHC. Es un cuanto del campo de Higgs, que está presente en todo el universo. Las partículas que interactúan con este campo adquieren masa; cuanto más intensamente interactúan, más pesadas son.</p>`,
        `<p>La masa del bosón de Higgs es de aproximadamente 125 GeV/$c^2$, lo que equivale a unas 133 veces la masa del protón. El bosón se confirmó mediante sus desintegraciones en dos fotones o en bosones $Z$.</p>`,
        `<p>Preguntas abiertas: la <strong>materia oscura</strong> constituye alrededor del 27 % del contenido energético del universo, y el modelo estándar no la describe. Las <strong>masas de los neutrinos</strong> son pequeñas pero no nulas, algo que el modelo original no predecía. El modelo estándar tampoco incluye la <strong>gravitación</strong> ni explica por qué en el universo hay más materia que antimateria.</p>`
      ],
      examples: [
        { task: '¿Cuántas veces es más pesado el bosón de Higgs que el protón (la masa del protón es de aproximadamente 0,94 GeV/$c^2$)?',
          steps: ['$125/0{,}94\\approx 133$.', '<strong>Resultado: unas 133 veces</strong>'] },
        { task: '¿Qué fracción del contenido energético del universo constituye, aproximadamente, la materia oscura?',
          steps: ['La materia oscura constituye aproximadamente el 27 % y la materia ordinaria solo alrededor del 5 %.', '<strong>Resultado: unos 27 %</strong>'] }
      ]
    }
  }
});
