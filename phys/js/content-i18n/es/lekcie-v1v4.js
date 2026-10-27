/* Spanish: university lessons, levels v1–v4 (js/rocniky/v1.js, v2.js, v3.js, v4.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('es', {
  lessons: {
    'v1-kinematika': {
      title: 'Cinemática: posición, velocidad y aceleración',
      summary: 'Descripción del movimiento sin sus causas: cómo cambian la posición, la velocidad y la aceleración con el tiempo.',
      theory: [
        `<p>La cinemática describe el movimiento de los cuerpos sin preguntarse por sus causas. La magnitud básica es la <strong>posición</strong> $x(t)$, es decir, la coordenada del cuerpo respecto a un origen y una dirección elegidos.</p>`,
        `<p><strong>La velocidad</strong> es el cambio de posición por unidad de tiempo: $v=\\frac{\\Delta x}{\\Delta t}$. Es un vector, por lo que también lleva un signo que determina el sentido del movimiento. <strong>La aceleración</strong> es el cambio de velocidad por unidad de tiempo: $a=\\frac{\\Delta v}{\\Delta t}$, en unidades de $\\text{m/s}^2$.</p>`,
        `<p>En el <strong>movimiento uniformemente acelerado</strong> la aceleración es constante. La velocidad cambia entonces linealmente, $v=v_0+a\\,t$, y la posición cambia con el cuadrado del tiempo: $x=x_0+v_0\\,t+\\frac{1}{2}a\\,t^2$.</p>`,
        `<p><strong>Por qué multiplicamos por el tiempo:</strong> la aceleración indica en cuántos metros por segundo cambia la velocidad en cada segundo. En el tiempo $t$ la velocidad cambia, por tanto, en $a\\,t$. Si $a$ y $v_0$ tienen el mismo signo, el cuerpo acelera; en caso contrario, frena.</p>`,
        { fig: 'v1v4-kinematika-vt', caption: 'En el movimiento uniformemente acelerado, la gráfica velocidad-tiempo es una recta: su pendiente es la aceleración a y su punto de partida es la velocidad inicial v₀.' }
      ],
      examples: [
        { task: 'Un coche está en reposo ($v_0=0$) y acelera con una aceleración constante $a=2\\,\\text{m/s}^2$. ¿Cuál será su velocidad después de $5\\,\\text{s}$?',
          steps: ['Sustituimos en $v=v_0+a\\,t$: $v=0+2\\cdot 5$.', '<strong>Resultado: $v=10\\,\\text{m/s}$</strong>'] },
        { task: 'Un tren lleva una velocidad $v_0=12\\,\\text{m/s}$ y frena con una aceleración $a=-3\\,\\text{m/s}^2$. ¿Cuál es su velocidad después de $2\\,\\text{s}$?',
          steps: ['$v=v_0+a\\,t=12+(-3)\\cdot 2$.', '$v=12-6$.', '<strong>Resultado: $v=6\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-newton': {
      title: 'Leyes del movimiento de Newton',
      summary: 'Primera, segunda y tercera ley: cuándo un cuerpo no se mueve uniformemente y cómo se relacionan la fuerza y la aceleración.',
      theory: [
        `<p><strong>Primera ley</strong> (de inercia): un cuerpo permanece en reposo o en movimiento rectilíneo uniforme mientras sobre él no actúe una fuerza neta distinta de cero. La inercia es una propiedad de la masa, no el resultado de una fuerza.</p>`,
        `<p><strong>Segunda ley</strong>: la aceleración es proporcional a la fuerza neta e inversamente proporcional a la masa, $\\vec a=\\frac{\\vec F}{m}$, es decir, $\\vec F=m\\,\\vec a$. La fuerza neta es la suma vectorial de todas las fuerzas que actúan sobre el cuerpo; las fuerzas en sentidos opuestos se restan.</p>`,
        `<p><strong>Tercera ley</strong>: si el cuerpo A actúa sobre el cuerpo B con una fuerza, el cuerpo B actúa sobre A con una fuerza igual en magnitud y de sentido opuesto. Estas dos fuerzas actúan sobre <em>cuerpos distintos</em>, por lo que no se anulan entre sí.</p>`,
        `<p><strong>Por qué es así:</strong> la fuerza es la causa del cambio de movimiento. Para una masa mayor se necesita una fuerza mayor para la misma aceleración, porque la masa se opone a los cambios de velocidad.</p>`,
        { fig: 'v1v4-sily-dve', caption: 'Las fuerzas en sentidos opuestos se restan. La fuerza neta F₁ − F₂ comunica al cuerpo la aceleración a = (F₁ − F₂)/m.' }
      ],
      examples: [
        { task: 'Un cuerpo de masa $m=4\\,\\text{kg}$ es arrastrado por una fuerza $F=20\\,\\text{N}$, y la fricción $F_t=8\\,\\text{N}$ actúa en contra a lo largo de la misma recta. ¿Cuál es la aceleración?',
          steps: ['Fuerza neta: $F_v=20-8=12\\,\\text{N}$.', 'Aceleración: $a=\\frac{F_v}{m}=\\frac{12}{4}$.', '<strong>Resultado: $a=3\\,\\text{m/s}^2$</strong>'] },
        { task: 'Sobre un cuerpo de masa $m=3\\,\\text{kg}$ actúa una fuerza neta de $12\\,\\text{N}$. ¿Cuál es la aceleración?',
          steps: ['$a=\\frac{F}{m}=\\frac{12}{3}$.', '<strong>Resultado: $a=4\\,\\text{m/s}^2$</strong>'] }
      ]
    },
    'v1-hybnost': {
      title: 'Fuerzas, cantidad de movimiento y momento angular',
      summary: 'La cantidad de movimiento como medida del movimiento, el impulso de una fuerza y el momento angular en la rotación alrededor de un punto.',
      theory: [
        `<p>La <strong>cantidad de movimiento</strong> de un cuerpo es el producto de su masa por su velocidad: $\\vec p=m\\,\\vec v$. Un cuerpo pesado y rápido tiene una cantidad de movimiento grande y es más difícil de detener.</p>`,
        `<p>La segunda ley de Newton también puede escribirse con la cantidad de movimiento: $\\vec F=\\frac{\\Delta \\vec p}{\\Delta t}$. El producto $\\vec F\\,\\Delta t$ se llama <strong>impulso de la fuerza</strong> y es igual al cambio de la cantidad de movimiento: $\\Delta \\vec p=\\vec F\\,\\Delta t$.</p>`,
        `<p>El <strong>momento angular</strong> de una partícula respecto a un punto fijo $O$ es el producto vectorial de la posición y la cantidad de movimiento: $\\vec L=\\vec r\\times\\vec p$, con magnitud $L=r\\,p\\sin\\alpha$, donde $\\alpha$ es el ángulo entre $\\vec r$ y $\\vec p$.</p>`,
        `<p><strong>Por qué se cumple:</strong> una fuerza cambia la cantidad de movimiento solo si actúa durante un tiempo suficiente. Un golpe breve produce un impulso pequeño aunque la fuerza sea grande. El momento angular cambia solo cuando sobre el cuerpo actúa un momento de fuerza $\\vec M=\\vec r\\times\\vec F$.</p>`
      ],
      examples: [
        { task: 'Una bala de masa $m=0{,}02\\,\\text{kg}$ vuela a una velocidad $v=300\\,\\text{m/s}$. ¿Cuál es su cantidad de movimiento?',
          steps: ['$p=m\\,v=0{,}02\\cdot 300$.', '<strong>Resultado: $p=6\\,\\text{kg\\,m/s}$</strong>'] },
        { task: 'Una fuerza $F=50\\,\\text{N}$ actúa sobre un cuerpo durante $4\\,\\text{s}$. ¿Cuál es el cambio de su cantidad de movimiento?',
          steps: ['Impulso de la fuerza: $\\Delta p=F\\,\\Delta t=50\\cdot 4$.', '<strong>Resultado: $\\Delta p=200\\,\\text{kg\\,m/s}$</strong>'] }
      ]
    },
    'v1-praca-energia': {
      title: 'Trabajo, energía y potencia',
      summary: 'Trabajo de una fuerza, energía cinética de un cuerpo y potencia como trabajo por unidad de tiempo.',
      theory: [
        `<p>El <strong>trabajo</strong> de una fuerza constante para un desplazamiento $\\vec s$ es $W=F\\,s\\cos\\alpha$, donde $\\alpha$ es el ángulo entre la fuerza y el desplazamiento. Una fuerza perpendicular al desplazamiento no realiza trabajo.</p>`,
        `<p>La <strong>energía cinética</strong> de un cuerpo es $E_k=\\frac{1}{2}m v^2$. El trabajo de la fuerza neta es igual al cambio de la energía cinética: $W=\\Delta E_k$. Es el teorema de la energía cinética.</p>`,
        `<p>La <strong>potencia</strong> es el trabajo realizado por unidad de tiempo: $P=\\frac{W}{t}$, en vatios, $1\\,\\text{W}=1\\,\\text{J/s}$.</p>`,
        `<p><strong>Por qué aparece $v^2$:</strong> con el doble de velocidad, el cuerpo tiene cuatro veces más energía, porque para detenerlo se necesita cuatro veces más trabajo. Por eso los accidentes a mayor velocidad son tan peligrosos.</p>`,
        { fig: 'v1v4-praca-uhol', caption: 'Solo la componente de la fuerza paralela al desplazamiento realiza trabajo, F·cos α. La componente perpendicular al desplazamiento no realiza trabajo.' }
      ],
      examples: [
        { task: 'Un cuerpo de masa $m=2\\,\\text{kg}$ se mueve con una velocidad $v=3\\,\\text{m/s}$. ¿Cuál es su energía cinética?',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 2\\cdot 3^2$.', '<strong>Resultado: $E_k=9\\,\\text{J}$</strong>'] },
        { task: 'Una fuerza $F=10\\,\\text{N}$ desplaza un cuerpo $s=6\\,\\text{m}$ en la dirección de la fuerza. ¿Cuánto trabajo se realiza?',
          steps: ['El ángulo es $\\alpha=0^\\circ$, así que $\\cos\\alpha=1$.', '$W=F\\,s\\cos\\alpha=10\\cdot 6\\cdot 1$.', '<strong>Resultado: $W=60\\,\\text{J}$</strong>'] }
      ]
    },
    'v1-gravitacne-pole': {
      title: 'Campo gravitatorio',
      summary: 'Ley de la gravitación de Newton, aceleración gravitatoria y cómo cambia con la distancia al centro de un planeta.',
      theory: [
        `<p><strong>Ley de la gravitación universal de Newton</strong>: dos cuerpos de masas $m_1$ y $m_2$ a una distancia $r$ se atraen con una fuerza $F=G\\frac{m_1 m_2}{r^2}$, donde $G\\approx 6{,}67\\cdot 10^{-11}\\,\\text{N\\,m}^2/\\text{kg}^2$.</p>`,
        `<p><strong>El campo gravitatorio</strong> es la región en la que sobre un cuerpo material actúa una fuerza gravitatoria. La intensidad del campo, es decir, la <em>aceleración gravitatoria</em>, es $g=\\frac{F}{m}=G\\frac{M}{r^2}$, donde $M$ es la masa de la fuente del campo.</p>`,
        `<p><strong>Por qué disminuye con la distancia:</strong> el efecto gravitatorio se reparte sobre una esfera cada vez mayor, de área $4\\pi r^2$. Por eso la aceleración gravitatoria cambia con el cuadrado de la distancia al centro, y no de forma lineal.</p>`,
        `<p>En la superficie de la Tierra $g\\approx 9{,}81\\,\\text{m/s}^2$. A una distancia $r$ del centro de la Tierra, $g(r)=9{,}81\\cdot\\left(\\frac{R}{r}\\right)^2$, donde $R$ es el radio de la Tierra.</p>`,
        { fig: 'v1v4-gravitacia-r', caption: 'La aceleración gravitatoria disminuye con el cuadrado de la distancia al centro: a una distancia 2R es una cuarta parte del valor en la superficie.' }
      ],
      examples: [
        { task: '¿Cuál es la aceleración gravitatoria a una altura en la que la distancia al centro de la Tierra es el doble del radio terrestre?',
          steps: ['La razón de distancias es $\\frac{r}{R}=2$, así que $g(r)=g\\cdot\\left(\\frac{1}{2}\\right)^2$.', '$g(r)=\\frac{9{,}81}{4}\\approx 2{,}45\\,\\text{m/s}^2$.', '<strong>Resultado: aproximadamente $2{,}45\\,\\text{m/s}^2$</strong>'] },
        { task: 'Dos cuerpos de masas $m_1=10\\,\\text{kg}$ y $m_2=5\\,\\text{kg}$ están a una distancia $r$. ¿Cómo cambia la fuerza si la distancia se duplica?',
          steps: ['La fuerza es proporcional a $\\frac{1}{r^2}$; con $2r$ disminuye cuatro veces.', '<strong>Resultado: la fuerza se reduce a una cuarta parte</strong>'] }
      ]
    },
    'v1-rotacia': {
      title: 'Rotación de un sólido rígido',
      summary: 'Velocidad angular, momento de inercia y momento de fuerza cuando un cuerpo gira alrededor de un eje.',
      theory: [
        `<p>Un <strong>sólido rígido</strong> no cambia de forma al girar alrededor de un eje: todos sus puntos giran con la misma <strong>velocidad angular</strong> $\\omega$, en radianes por segundo. Si el cuerpo realiza $f$ vueltas por segundo, entonces $\\omega=2\\pi f$, porque una vuelta completa corresponde al ángulo $2\\pi$.</p>`,
        `<p>La velocidad tangencial de un punto a una distancia $r$ del eje es $v=\\omega\\,r$. Los puntos más alejados del eje se mueven más rápido con la misma velocidad angular.</p>`,
        `<p><strong>El momento de inercia</strong> $I=\\sum m_i r_i^2$ es el equivalente rotacional de la masa. Depende no solo de la masa, sino también de lo lejos del eje que esté distribuida. La segunda ley de Newton para la rotación tiene la forma $M=I\\,\\alpha$, donde $M$ es el momento de fuerza y $\\alpha$ la aceleración angular.</p>`,
        `<p><strong>Por qué aparece el 2:</strong> el ángulo se mide en radianes y una vuelta son $2\\pi$ radianes, no $\\pi$. Por eso la frecuencia en hercios se multiplica por dos pi.</p>`,
        { fig: 'v1v4-rotacia', caption: 'Un punto de un sólido rígido a una distancia r del eje se mueve sobre una circunferencia con velocidad tangencial v = ω·r.' }
      ],
      examples: [
        { task: 'Un disco gira con una frecuencia $f=3\\,\\text{Hz}$. ¿Cuál es su velocidad angular?',
          steps: ['$\\omega=2\\pi f=2\\pi\\cdot 3$.', '<strong>Resultado: $\\omega=6\\pi\\approx 18{,}85\\,\\text{rad/s}$</strong>'] },
        { task: 'Un punto de una rueda está a una distancia $r=0{,}5\\,\\text{m}$ del eje y la velocidad angular es $\\omega=4\\,\\text{rad/s}$. ¿Cuál es su velocidad tangencial?',
          steps: ['$v=\\omega\\,r=4\\cdot 0{,}5$.', '<strong>Resultado: $v=2\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-sustavy': {
      title: 'Mecánica de sistemas de partículas',
      summary: 'El centro de masas de un sistema de partículas como promedio ponderado de sus posiciones, y el movimiento del centro de masas.',
      theory: [
        `<p>Un <strong>sistema de partículas</strong> puede describirse mediante un punto significativo: su <strong>centro de masas</strong>. Para dos partículas sobre el eje $x$, su posición es $x_T=\\frac{m_1x_1+m_2x_2}{m_1+m_2}$. Es un promedio ponderado, en el que la partícula más pesada atrae el centro de masas hacia sí.</p>`,
        `<p>El centro de masas se mueve como una única partícula con masa total $M=\\sum m_i$, sobre la que actúa la fuerza externa neta: $M\\,\\vec a_T=\\sum \\vec F_{\\text{ext}}$. Las fuerzas internas entre las partículas se anulan entre sí, por lo que no cambian el movimiento del centro de masas.</p>`,
        `<p><strong>Por qué el centro de masas y no un promedio ordinario:</strong> si las partículas tuvieran masas iguales, resultaría la media aritmética. Con masas distintas, cada coordenada debe ponderarse por su masa.</p>`,
        `<p>La energía cinética de un sistema puede separarse en la energía del movimiento del centro de masas y la energía del movimiento de las partículas respecto al centro de masas. Gracias a ello, los movimientos complejos pueden descomponerse en partes más sencillas.</p>`,
        { fig: 'v1v4-sustava-tazisko', caption: 'El centro de masas T está más cerca de la partícula más pesada. Su coordenada es el promedio ponderado de las coordenadas de las partículas.' }
      ],
      examples: [
        { task: 'Una partícula de masa $1\\,\\text{kg}$ está en el punto $x_1=0\\,\\text{m}$ y una partícula de masa $3\\,\\text{kg}$ está en el punto $x_2=4\\,\\text{m}$. ¿Dónde está el centro de masas?',
          steps: ['$x_T=\\frac{1\\cdot 0+3\\cdot 4}{1+3}=\\frac{12}{4}$.', '<strong>Resultado: $x_T=3\\,\\text{m}$</strong>'] },
        { task: 'Dos partículas igual de pesadas están en los puntos $x_1=2\\,\\text{m}$ y $x_2=8\\,\\text{m}$. ¿Dónde está el centro de masas?',
          steps: ['Para masas iguales, el centro de masas es la media aritmética: $x_T=\\frac{2+8}{2}$.', '<strong>Resultado: $x_T=5\\,\\text{m}$</strong>'] }
      ]
    },
    'v1-lagrange': {
      title: 'Mecánica lagrangiana y hamiltoniana',
      summary: 'El lagrangiano como diferencia entre la energía cinética y la potencial, y el hamiltoniano como energía total.',
      theory: [
        `<p>El <strong>lagrangiano</strong> de un sistema es $L=T-V$, donde $T$ es la energía cinética y $V$ la energía potencial. En lugar de seguir cada fuerza por separado, basta con conocer estas dos energías y su dependencia de las coordenadas generalizadas $q$ y de las velocidades $\\dot q$.</p>`,
        `<p>Las <strong>ecuaciones de Euler-Lagrange</strong> dan las ecuaciones de movimiento: $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q}-\\frac{\\partial L}{\\partial q}=0$. La ventaja es que las coordenadas pueden elegirse libremente, siempre que sean adecuadas para el problema, por ejemplo el ángulo de un péndulo.</p>`,
        `<p>El <strong>hamiltoniano</strong> es, para fuerzas conservativas, $H=T+V$, es decir, la energía total. Al introducir los momentos $p=\\frac{\\partial L}{\\partial \\dot q}$, las ecuaciones de movimiento se escriben como pares de ecuaciones de primer orden, las llamadas ecuaciones de Hamilton.</p>`,
        `<p><strong>Por qué el signo menos en $L$:</strong> la energía potencial actúa en contra del movimiento y en el lagrangiano se resta, mientras que en el hamiltoniano se suma a la energía cinética.</p>`
      ],
      examples: [
        { task: 'Una partícula de masa $m=2\\,\\text{kg}$ tiene una velocidad $v=3\\,\\text{m/s}$ a una altura $h=1\\,\\text{m}$. ¿Cuál es su lagrangiano si $g=10\\,\\text{m/s}^2$?',
          steps: ['$T=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 9=9\\,\\text{J}$.', '$V=mgh=2\\cdot 10\\cdot 1=20\\,\\text{J}$.', '<strong>Resultado: $L=T-V=9-20=-11\\,\\text{J}$</strong>'] },
        { task: 'La misma partícula tiene el hamiltoniano $H=T+V$. ¿Cuál es su resultado?',
          steps: ['$H=9+20$.', '<strong>Resultado: $H=29\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-teplota-tlak': {
      title: 'Temperatura, presión, calor y energía interna',
      summary: 'Temperatura termodinámica en kelvin, presión como fuerza por unidad de área y energía interna como suma de las energías de las partículas.',
      theory: [
        `<p>La <strong>temperatura termodinámica</strong> $T$ se mide en kelvin. Es proporcional a la energía cinética media de las partículas, por lo que no puede ser negativa. La conversión desde grados Celsius es $T=t+273{,}15$, siendo $0\\,\\text{K}$ el cero absoluto.</p>`,
        `<p><strong>La presión</strong> es la fuerza que actúa perpendicularmente sobre una unidad de área: $p=\\frac{F}{S}$, en pascales, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. El gas empuja las paredes del recipiente porque sus partículas chocan contra ellas y les transfieren cantidad de movimiento.</p>`,
        `<p><strong>La energía interna</strong> $U$ es la suma de las energías cinéticas y potenciales de todas las partículas del sistema. El calor $Q$ es la energía que se transfiere entre cuerpos debido a una diferencia de temperatura; no es un «contenido» del cuerpo.</p>`,
        `<p><strong>Por qué kelvin:</strong> las escalas Celsius tienen un cero elegido de forma arbitraria. En fórmulas que relacionan la energía o cocientes, debemos usar el cero en el que la energía desaparece, es decir, los kelvin.</p>`,
        { fig: 'v1v4-teplota-stupnice', caption: 'La conversión de temperaturas es T = t + 273,15. El cero absoluto corresponde a 0 K, es decir, −273,15 °C.' }
      ],
      examples: [
        { task: '¿Cuál es la temperatura $t=27\\,{}^\\circ\\text{C}$ en kelvin?',
          steps: ['$T=t+273{,}15=27+273{,}15$.', '<strong>Resultado: $T=300{,}15\\,\\text{K}$</strong>'] },
        { task: 'Una fuerza $F=600\\,\\text{N}$ actúa perpendicularmente sobre un área $S=0{,}2\\,\\text{m}^2$. ¿Cuál es la presión?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}2}$.', '<strong>Resultado: $p=3000\\,\\text{Pa}$</strong>'] }
      ]
    },
    'v2-stavove-rovnice': {
      title: 'Ecuaciones de estado',
      summary: 'Ecuación de estado del gas ideal pV = nRT y su uso para calcular la presión.',
      theory: [
        `<p>La <strong>ecuación de estado</strong> del gas ideal relaciona la presión $p$, el volumen $V$, la cantidad de sustancia $n$ y la temperatura $T$: $pV=nRT$, donde $R\\approx 8{,}314\\,\\text{J/(mol\\,K)}$.</p>`,
        `<p>El gas ideal es un modelo en el que las partículas no tienen volumen propio y no interactúan entre sí, salvo en los choques. Para un gas suficientemente diluido a temperaturas habituales, el modelo es muy preciso.</p>`,
        `<p><strong>Cómo usarla:</strong> si conocemos tres magnitudes, despejamos la cuarta. Por ejemplo, la presión es $p=\\frac{nRT}{V}$. Al cambiar una magnitud, las demás cambian según proporcionalidades: a temperatura constante, la presión es inversamente proporcional al volumen.</p>`,
        `<p><strong>Cuidado con las unidades:</strong> la temperatura debe estar en kelvin y el volumen en metros cúbicos; si no, el resultado no saldrá en pascales. Los litros y los decímetros cúbicos se convierten dividiendo entre $1000$.</p>`,
        { fig: 'v1v4-izoterma', caption: 'A temperatura constante el producto pV es constante, por lo que la presión en función del volumen forma una hipérbola: el doble de volumen significa la mitad de presión.' }
      ],
      examples: [
        { task: 'Un gas tiene $n=1\\,\\text{mol}$, temperatura $T=300\\,\\text{K}$ y volumen $V=2\\,\\text{dm}^3$. ¿Cuál es la presión en kPa?',
          steps: ['$V=2\\,\\text{dm}^3=0{,}002\\,\\text{m}^3$.', '$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}314\\cdot 300}{0{,}002}\\approx 1\\,247\\,100\\,\\text{Pa}$.', '<strong>Resultado: $p\\approx 1247\\,\\text{kPa}$</strong>'] },
        { task: 'A temperatura constante, el volumen de un gas se duplica. ¿Cómo cambia la presión?',
          steps: ['Con $T$ y $n$ constantes se cumple $p\\,V=\\text{const.}$', 'Si $V\\to 2V$, entonces $p\\to \\frac{p}{2}$.', '<strong>Resultado: la presión se reduce a la mitad</strong>'] }
      ]
    },
    'v2-prvy-zakon': {
      title: 'Primer y segundo principio de la termodinámica',
      summary: 'Conservación de la energía en los procesos térmicos y dirección en la que transcurren los procesos naturales.',
      theory: [
        `<p><strong>El primer principio de la termodinámica</strong> es la ley de conservación de la energía: la variación de la energía interna es igual al calor suministrado menos el trabajo que realiza el gas: $\\Delta U=Q-W$, donde $W$ es el trabajo del gas.</p>`,
        `<p>Si el gas realiza trabajo, su energía interna disminuye, porque la energía sale hacia el entorno. Si se realiza trabajo sobre el gas, la fórmula debe escribirse como $\\Delta U=Q+W_{\\text{en el gas}}$. Siempre es importante qué convenio de signos se utiliza.</p>`,
        `<p><strong>El segundo principio de la termodinámica</strong> dice que el calor pasa espontáneamente solo de un cuerpo más caliente a uno más frío, y que una máquina térmica no puede convertir todo el calor en trabajo. La dirección de los procesos naturales la determina el aumento de la entropía.</p>`,
        `<p><strong>Por qué es importante:</strong> el primer principio dice qué cantidad de energía se conserva, y el segundo dice en qué sentido transcurren los procesos. Sin el segundo principio, podría construirse un móvil perpetuo de segunda especie.</p>`,
        { fig: 'v1v4-prvy-zakon', caption: 'El calor Q suministrado aumenta la energía interna del gas; el trabajo W que realiza el gas se lleva parte de esa energía: ΔU = Q − W.' }
      ],
      examples: [
        { task: 'Al gas se le suministra un calor $Q=300\\,\\text{J}$ y el gas realiza un trabajo $W=120\\,\\text{J}$. ¿Cuál es la variación de su energía interna?',
          steps: ['$\\Delta U=Q-W=300-120$.', '<strong>Resultado: $\\Delta U=180\\,\\text{J}$</strong>'] },
        { task: 'Al comprimirse, el gas recibe un trabajo $W_{\\text{en el gas}}=50\\,\\text{J}$ y cede un calor $Q=-20\\,\\text{J}$. ¿Cuál es la variación de la energía interna?',
          steps: ['$\\Delta U=Q+W_{\\text{en el gas}}=-20+50$.', '<strong>Resultado: $\\Delta U=30\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-entropia': {
      title: 'Entropía y procesos térmicos',
      summary: 'La entropía como medida de la irreversibilidad y su variación en un proceso isotérmico reversible.',
      theory: [
        `<p><strong>La entropía</strong> $S$ es una magnitud que mide el número de microestados posibles de un sistema para un macroestado dado. Al absorber de forma reversible un calor $Q$ a temperatura constante $T$, cambia en $\\Delta S=\\frac{Q}{T}$, en unidades de $\\text{J/K}$.</p>`,
        `<p>El calor suministrado a baja temperatura aumenta la entropía más que el mismo calor a alta temperatura. Por eso la fórmula divide por la temperatura, y no solo suma.</p>`,
        `<p><strong>El segundo principio de la termodinámica en forma de entropía:</strong> en un sistema aislado la entropía nunca disminuye; en los procesos reversibles permanece constante y en los irreversibles aumenta. Los procesos espontáneos transcurren hacia una entropía mayor.</p>`,
        `<p><strong>Por qué es así:</strong> un estado muy ordenado tiene pocos microestados, y el sistema se dirige de forma natural hacia estados que son más numerosos. La entropía es, por tanto, una medida de cuánto desorden irreversible surge en el sistema.</p>`
      ],
      examples: [
        { task: 'Un gas a temperatura constante $T=300\\,\\text{K}$ absorbe de forma reversible un calor $Q=600\\,\\text{J}$. ¿Cuál es el cambio de su entropía?',
          steps: ['$\\Delta S=\\frac{Q}{T}=\\frac{600}{300}$.', '<strong>Resultado: $\\Delta S=2\\,\\text{J/K}$</strong>'] },
        { task: '¿Cómo cambia la entropía si el mismo calor $Q=600\\,\\text{J}$ se suministra a una temperatura $T=600\\,\\text{K}$?',
          steps: ['$\\Delta S=\\frac{600}{600}=1$.', '<strong>Resultado: $\\Delta S=1\\,\\text{J/K}$, es menor que a la temperatura más baja</strong>'] }
      ]
    },
    'v2-tepelne-motory': {
      title: 'Máquinas térmicas y refrigeradores',
      summary: 'Eficiencia de una máquina térmica, ciclo de Carnot y límite impuesto por las temperaturas del foco caliente y del foco frío.',
      theory: [
        `<p>Una <strong>máquina térmica</strong> toma calor del foco caliente, convierte una parte en trabajo y cede el resto al foco frío. Su eficiencia es $\\eta=\\frac{W}{Q_h}$, es decir, la razón entre el trabajo realizado y el calor del foco caliente.</p>`,
        `<p>El <strong>ciclo de Carnot</strong> es el mejor ciclo reversible posible entre dos temperaturas. Su eficiencia es $\\eta=1-\\frac{T_c}{T_h}$, donde las temperaturas deben expresarse en kelvin.</p>`,
        `<p>Un <strong>refrigerador</strong> es una máquina térmica invertida: con trabajo traslada calor desde un espacio más frío a uno más caliente. Por eso no se habla de eficiencia, sino de coeficiente de rendimiento.</p>`,
        `<p><strong>Por qué la eficiencia no llega al 100 %:</strong> incluso una máquina ideal debe ceder parte del calor al foco frío para que el ciclo pueda cerrarse. Cuanto mayor es la diferencia de temperaturas, mayor puede ser la eficiencia.</p>`,
        { fig: 'v1v4-tepelny-motor', caption: 'La máquina toma del foco caliente el calor Q_h, convierte una parte en trabajo W y cede el resto Q_c al foco frío.' }
      ],
      examples: [
        { task: 'Una máquina térmica trabaja entre un foco caliente a $T_h=500\\,\\text{K}$ y un foco frío a $T_c=300\\,\\text{K}$. ¿Cuál es su eficiencia ideal?',
          steps: ['$\\eta=1-\\frac{T_c}{T_h}=1-\\frac{300}{500}$.', '$\\eta=1-0{,}6=0{,}4$.', '<strong>Resultado: $\\eta=40\\,\\%$</strong>'] },
        { task: 'Una máquina con eficiencia $25\\,\\%$ recibe del foco caliente un calor $Q_h=800\\,\\text{J}$. ¿Cuánto trabajo realiza?',
          steps: ['$W=\\eta\\,Q_h=0{,}25\\cdot 800$.', '<strong>Resultado: $W=200\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-kinetika-plynov': {
      title: 'Teoría cinética de los gases',
      summary: 'Visión molecular del gas: la energía cinética media de las partículas es proporcional a la temperatura absoluta.',
      theory: [
        `<p>La <strong>teoría cinética de los gases</strong> explica la presión y la temperatura mediante el movimiento de las moléculas. La presión surge de los choques de las moléculas contra las paredes del recipiente; la temperatura es una medida de su energía cinética media.</p>`,
        `<p>La energía cinética media de una molécula en un gas ideal es $\\overline{E_k}=\\frac{3}{2}k\\,T$, donde $k\\approx 1{,}38\\cdot 10^{-23}\\,\\text{J/K}$ es la constante de Boltzmann. Depende solo de la temperatura, no del tipo de gas.</p>`,
        `<p><strong>Por qué aparece $\\frac{3}{2}$:</strong> una molécula puede moverse en tres direcciones y cada dirección aporta la mitad de $k\\,T$ a la energía. Tres grados de libertad dan en total $\\frac{3}{2}k\\,T$.</p>`,
        `<p><strong>Por qué kelvin:</strong> la fórmula es directamente proporcional a la temperatura absoluta. A $0\\,\\text{K}$ la energía cinética de las moléculas debería ser nula, por eso en esta fórmula nunca se usan grados Celsius.</p>`
      ],
      examples: [
        { task: '¿Cuál es la energía cinética media de una molécula de gas a la temperatura $T=300\\,\\text{K}$? Usa $k=1{,}38\\cdot 10^{-23}\\,\\text{J/K}$.',
          steps: ['$\\overline{E_k}=\\frac{3}{2}k\\,T=1{,}5\\cdot 1{,}38\\cdot 10^{-23}\\cdot 300$.', '$\\overline{E_k}\\approx 6{,}21\\cdot 10^{-21}\\,\\text{J}$.', '<strong>Resultado: aproximadamente $6{,}21\\cdot 10^{-21}\\,\\text{J}$</strong>'] },
        { task: 'Si la temperatura del gas se duplica, ¿cómo cambia la energía cinética media de la molécula?',
          steps: ['La energía es directamente proporcional a $T$.', '<strong>Resultado: se duplica</strong>'] }
      ]
    },
    'v2-boltzmann': {
      title: 'Distribución de Boltzmann',
      summary: 'Reparto de las partículas entre los niveles de energía a una temperatura dada y la disminución exponencial de la ocupación.',
      theory: [
        `<p>En equilibrio térmico, las partículas se reparten entre los niveles de energía de modo que los niveles superiores están menos ocupados. La razón entre el número de partículas en los niveles $E_2$ y $E_1$ es $\\frac{N_2}{N_1}=e^{-(E_2-E_1)/(k\\,T)}$, suponiendo que los niveles tienen la misma degeneración.</p>`,
        `<p>La exponencial significa que una pequeña diferencia de energía entre niveles tiene un gran efecto si la temperatura es baja. A temperatura alta los niveles se igualan y la ocupación se aproxima a una distribución uniforme.</p>`,
        `<p><strong>Por qué precisamente la exponencial:</strong> la probabilidad de ocupación de un estado con energía $E$ disminuye, al aumentar $E$, por un factor fijo por cada porción adicional de energía. Esto conduce precisamente a una dependencia exponencial.</p>`,
        `<p>El resultado muestra que la temperatura no es solo una medida del calor, sino también la escala que determina qué estados son accesibles. La distribución es la base de todos los cálculos estadísticos de las propiedades macroscópicas.</p>`,
        { fig: 'v1v4-boltzmann', caption: 'Un nivel situado ΔE = k·T por encima del fundamental está ocupado, a temperatura T, aproximadamente e⁻¹ ≈ 0,37 veces respecto al nivel fundamental.' }
      ],
      examples: [
        { task: 'El nivel está $\\Delta E=kT$ por encima del nivel fundamental. ¿Cuál es la razón $\\frac{N_2}{N_1}$?',
          steps: ['$\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}=e^{-1}$.', '<strong>Resultado: $\\frac{N_2}{N_1}\\approx 0{,}368$</strong>'] },
        { task: 'El nivel está $2\\,kT$ por encima. ¿Cuál es la razón de ocupación?',
          steps: ['$\\frac{N_2}{N_1}=e^{-2}\\approx 0{,}135$.', '<strong>Resultado: aproximadamente $0{,}135$</strong>'] }
      ]
    },
    'v2-statisticke': {
      title: 'Explicación estadística de los fenómenos macroscópicos',
      summary: 'La relación de Boltzmann entre la entropía y el número de microestados, y por qué los fenómenos macroscópicos tienen carácter probabilístico.',
      theory: [
        `<p><strong>La relación de Boltzmann</strong> vincula la entropía con el número de microestados $W$ que corresponden a un macroestado dado: $S=k\\ln W$. El logaritmo natural hace que la entropía sea aditiva cuando se combinan dos sistemas independientes.</p>`,
        `<p>Para $N$ partículas independientes, cada una de las cuales puede estar en uno de dos estados, el número de microestados es $W=2^N$. La entropía es entonces $S=k\\,N\\ln 2$, que crece proporcionalmente al número de partículas.</p>`,
        `<p><strong>Por qué los fenómenos macroscópicos son probabilísticos:</strong> los macroestados con un gran número de microestados aparecen con mucha mayor frecuencia. Con un mol de partículas la diferencia de probabilidades es tan enorme que una disminución espontánea de la entropía prácticamente nunca se observa.</p>`,
        `<p><strong>Por qué el logaritmo:</strong> el número de microestados crece exponencialmente con el número de partículas; su logaritmo lo convierte en una magnitud lineal que puede sumarse y compararse de forma razonable.</p>`
      ],
      examples: [
        { task: 'El sistema tiene $N=3$ partículas independientes, cada una con dos estados. ¿Cuántos microestados $W$ tiene?',
          steps: ['$W=2^N=2^3$.', '<strong>Resultado: $W=8$</strong>'] },
        { task: '¿Cuál es el valor de $S/k$ para $N=4$ partículas con dos estados? Redondea a 2 decimales.',
          steps: ['$W=2^4=16$, así que $\\frac{S}{k}=\\ln 16$.', '$\\ln 16=4\\ln 2\\approx 2{,}77$.', '<strong>Resultado: $\\frac{S}{k}\\approx 2{,}77$</strong>'] }
      ]
    },
    'v3-elektricke-pole': {
      title: 'Campo eléctrico y potencial eléctrico',
      summary: 'Intensidad y potencial de una carga puntual, principio de superposición y trabajo en un campo eléctrico.',
      theory: [
        `<p>La <strong>intensidad del campo eléctrico</strong> en un punto es la fuerza sobre una carga de prueba positiva dividida entre su valor: $\\vec E=\\frac{\\vec F}{q}$, en unidades de $\\text{V/m}$. El campo es una propiedad del espacio, no de la carga de prueba.</p>`,
        `<p>Para una carga puntual $Q$ a una distancia $r$ es $E=k\\frac{Q}{r^2}$, donde $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$. La dirección del campo es radial: desde la carga positiva hacia fuera y hacia la carga negativa.</p>`,
        `<p><strong>El potencial eléctrico</strong> es la energía por unidad de carga: $V=k\\frac{Q}{r}$. El trabajo al desplazar una carga $q$ entre dos puntos es $W=q\\,\\Delta V$ y no depende de la trayectoria, solo del punto inicial y del final.</p>`,
        `<p><strong>Superposición:</strong> los campos de varias cargas se suman vectorialmente, mientras que los potenciales se suman como escalares. Por eso el potencial es más sencillo de calcular que la intensidad.</p>`,
        { fig: 'v1v4-elektricke-pole', caption: 'Las líneas de campo de una carga puntual positiva salen radialmente hacia fuera. La intensidad disminuye con el cuadrado de la distancia.' }
      ],
      examples: [
        { task: 'Una carga puntual $Q=2\\,\\mu\\text{C}$ está a una distancia $r=3\\,\\text{m}$. ¿Cuál es la intensidad del campo en kV/m? Usa $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$.',
          steps: ['$E=k\\frac{Q}{r^2}=8{,}99\\cdot\\frac{2}{3^2}$.', '$E\\approx 2{,}00\\,\\text{kV/m}$', '<strong>Resultado: aproximadamente $2{,}00\\,\\text{kV/m}$</strong>'] },
        { task: '¿Cómo cambia la intensidad del campo de una carga puntual si la distancia se duplica?',
          steps: ['La intensidad es proporcional a $\\frac{1}{r^2}$.', '$\\frac{1}{(2r)^2}=\\frac{1}{4r^2}$.', '<strong>Resultado: se reduce a una cuarta parte</strong>'] }
      ]
    },
    'v3-gauss': {
      title: 'Ley de Gauss',
      summary: 'Flujo eléctrico a través de una superficie cerrada y su relación con la carga encerrada en ella.',
      theory: [
        `<p><strong>El flujo eléctrico</strong> a través de una superficie $S$ es $\\Phi_E=\\oint \\vec E\\cdot d\\vec S$, es decir, la suma de las componentes del campo perpendiculares a la superficie. Su unidad es $\\text{N\\,m}^2/\\text{C}$.</p>`,
        `<p><strong>La ley de Gauss</strong> dice que el flujo a través de una superficie cerrada es proporcional a la carga encerrada en ella: $\\oint \\vec E\\cdot d\\vec S=\\frac{Q_{\\text{dentro}}}{\\varepsilon_0}$, donde $\\varepsilon_0\\approx 8{,}854\\cdot 10^{-12}\\,\\text{F/m}$.</p>`,
        `<p><strong>Por qué se cumple:</strong> las líneas de campo nacen en las cargas positivas y terminan en las negativas. El flujo a través de una superficie cerrada capta, por tanto, exactamente tantas líneas como carga hay dentro, sin depender de la forma de la superficie.</p>`,
        `<p>La ley de Gauss es ventajosa en problemas simétricos, por ejemplo con una esfera o con un plano infinito de carga. Con una superficie bien elegida, el campo puede sacarse fuera de la integral y el cálculo resulta sencillo.</p>`,
        { fig: 'v1v4-gauss', caption: 'El flujo total a través de una superficie cerrada depende solo de la carga interior, Φ = Q/ε₀, independientemente de la forma de la superficie.' }
      ],
      examples: [
        { task: 'Por una superficie cerrada atraviesa una carga $Q=1\\,\\mu\\text{C}$. ¿Cuál es el flujo total a través de la superficie si $\\varepsilon_0=8{,}854\\cdot 10^{-12}\\,\\text{F/m}$?',
          steps: ['$\\Phi_E=\\frac{Q}{\\varepsilon_0}=\\frac{10^{-6}}{8{,}854\\cdot 10^{-12}}$.', '$\\Phi_E\\approx 1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$', '<strong>Resultado: aproximadamente $1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$</strong>'] },
        { task: 'La carga dentro de la superficie se duplica. ¿Cómo cambia el flujo?',
          steps: ['El flujo es directamente proporcional a la carga.', '<strong>Resultado: se duplica</strong>'] }
      ]
    },
    'v3-elektricky-prud': {
      title: 'Corriente eléctrica y circuitos',
      summary: 'Ley de Ohm, resistencias en serie y en paralelo, y corriente total suministrada por la fuente.',
      theory: [
        `<p><strong>La corriente eléctrica</strong> es la cantidad de carga que atraviesa una sección por unidad de tiempo: $I=\\frac{\\Delta Q}{\\Delta t}$, en amperios. El sentido de la corriente se define como el sentido de movimiento de las cargas positivas.</p>`,
        `<p><strong>Ley de Ohm</strong>: la tensión en un conductor es proporcional a la corriente, $U=R\\,I$, donde $R$ es la resistencia en ohmios. En la conexión en serie las resistencias se suman, $R=R_1+R_2$.</p>`,
        `<p>En la <strong>conexión en paralelo</strong> la tensión en ambas ramas es la misma y las corrientes se suman. La resistencia equivalente es menor que la menor de las resistencias: $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.</p>`,
        `<p><strong>Por qué la resistencia en paralelo es menor:</strong> la segunda rama ofrece a la corriente otro camino, de modo que con la misma tensión pasa en total una corriente mayor. Por eso la fuente entrega una corriente mayor que si hubiera una sola rama.</p>`,
        { fig: 'v1v4-paralelne', caption: 'En la conexión en paralelo la tensión en ambas ramas es la misma y la corriente total I es la suma de las corrientes de las ramas.' }
      ],
      examples: [
        { task: 'Dos resistencias $R_1=6\\,\\Omega$ y $R_2=3\\,\\Omega$ están conectadas en paralelo a una tensión $U=6\\,\\text{V}$. ¿Qué corriente total entrega la fuente?',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$, es decir, $R=2\\,\\Omega$.', '$I=\\frac{U}{R}=\\frac{6}{2}$.', '<strong>Resultado: $I=3\\,\\text{A}$</strong>'] },
        { task: 'Las resistencias $4\\,\\Omega$ y $6\\,\\Omega$ están conectadas en serie a una tensión de $10\\,\\text{V}$. ¿Qué corriente circula?',
          steps: ['$R=4+6=10\\,\\Omega$.', '$I=\\frac{10}{10}$.', '<strong>Resultado: $I=1\\,\\text{A}$</strong>'] }
      ]
    },
    'v3-magneticke-pole': {
      title: 'Campo magnético y fuerza magnética',
      summary: 'Fuerza de Lorentz sobre una carga en movimiento y sobre un conductor con corriente en un campo magnético.',
      theory: [
        `<p>La <strong>inducción magnética</strong> $\\vec B$ describe el campo magnético; su unidad es el tesla, $1\\,\\text{T}=1\\,\\text{N/(A\\,m)}$. El campo ejerce fuerza solo sobre cargas en movimiento; una carga estática no reacciona ante la fuerza magnética.</p>`,
        `<p><strong>La fuerza de Lorentz</strong> sobre una carga $q$ que se mueve con velocidad $\\vec v$ es $\\vec F=q\\,\\vec v\\times\\vec B$. Su magnitud es $F=q\\,v\\,B\\sin\\alpha$, donde $\\alpha$ es el ángulo entre $\\vec v$ y $\\vec B$.</p>`,
        `<p><strong>El sentido de la fuerza</strong> se determina con la regla de la mano derecha: los dedos apuntan en el sentido de la velocidad, la palma en el sentido del campo y el pulgar en el sentido de la fuerza, para una carga positiva. Para una carga negativa, la fuerza es opuesta.</p>`,
        `<p><strong>Por qué la fuerza es perpendicular a la velocidad:</strong> la fuerza magnética no realiza trabajo, solo cambia la dirección del movimiento. Por eso una partícula en un campo perpendicular describe una circunferencia en lugar de acelerarse. Gracias a ello, los campos magnéticos se usan para curvar las trayectorias de las partículas.</p>`,
        { fig: 'v1v4-lorentz', caption: 'La fuerza de Lorentz sobre una carga positiva que vuela perpendicularmente al campo es perpendicular tanto a la velocidad como al campo. Cambia la dirección del movimiento, no su rapidez.' }
      ],
      examples: [
        { task: 'Un electrón vuela perpendicularmente a un campo de inducción $B=0{,}2\\,\\text{T}$ con velocidad $v=10^{5}\\,\\text{m/s}$. ¿Cuál es la magnitud de la fuerza si $q=1{,}6\\cdot 10^{-19}\\,\\text{C}$?',
          steps: ['$\\alpha=90^\\circ$, así que $\\sin\\alpha=1$.', '$F=qvB=1{,}6\\cdot 10^{-19}\\cdot 10^{5}\\cdot 0{,}2$.', '<strong>Resultado: $F=3{,}2\\cdot 10^{-15}\\,\\text{N}$</strong>'] },
        { task: 'Una partícula con carga $q=2\\,\\mu\\text{C}$ vuela con velocidad $v=300\\,\\text{m/s}$ perpendicularmente al campo $B=0{,}5\\,\\text{T}$. ¿Cuál es la fuerza en micronewtons?',
          steps: ['$F=qvB=2\\cdot 300\\cdot 0{,}5$ en unidades de $\\mu\\text{N}$.', '<strong>Resultado: $F=300\\,\\mu\\text{N}$</strong>'] }
      ]
    },
    'v3-indukcia': {
      title: 'Inducción electromagnética',
      summary: 'Ley de Faraday: se induce una tensión al cambiar el flujo magnético a través de una espira.',
      theory: [
        `<p><strong>El flujo magnético</strong> a través de una superficie $S$ es $\\Phi=B\\,S\\cos\\alpha$, donde $\\alpha$ es el ángulo entre el campo y la normal a la superficie. Su unidad es el weber, $1\\,\\text{Wb}=1\\,\\text{T\\,m}^2$.</p>`,
        `<p><strong>La ley de inducción de Faraday</strong>: en una espira cerrada se induce una tensión proporcional a la rapidez de cambio del flujo, $U_i=-\\frac{\\Delta\\Phi}{\\Delta t}$. El signo menos expresa la ley de Lenz: la corriente inducida se opone al cambio del flujo.</p>`,
        `<p><strong>Cómo surge la tensión:</strong> por un cambio de la inducción, un cambio del área o el giro de la espira en el campo. Si el flujo es constante, no se induce ninguna tensión, aunque el campo sea intenso.</p>`,
        `<p><strong>Por qué aparece la división por el tiempo:</strong> la tensión depende de la rapidez con que cambia el flujo, no de su magnitud. Un cambio rápido produce una tensión mayor que uno lento, aunque el cambio total del flujo sea el mismo.</p>`,
        { fig: 'v1v4-tok-indukcia', caption: 'El flujo magnético a través de una superficie es Φ = B·S·cos α, donde α es el ángulo entre el campo B y la normal n de la superficie.' }
      ],
      examples: [
        { task: 'El área de una espira $S=0{,}5\\,\\text{m}^2$ está perpendicular al campo, que en $2\\,\\text{s}$ cambia en $\\Delta B=4\\,\\text{T}$. ¿Qué tensión se induce?',
          steps: ['$U_i=\\frac{\\Delta\\Phi}{\\Delta t}=\\frac{S\\,\\Delta B}{\\Delta t}=\\frac{0{,}5\\cdot 4}{2}$.', '<strong>Resultado: $U_i=1\\,\\text{V}$</strong>'] },
        { task: 'El flujo a través de la superficie es constante. ¿Qué tensión se induce?',
          steps: ['La tensión es proporcional al cambio del flujo, $\\Delta\\Phi=0$.', '<strong>Resultado: $U_i=0\\,\\text{V}$</strong>'] }
      ]
    },
    'v3-maxwell': {
      title: 'Ecuaciones de Maxwell',
      summary: 'Cuatro ecuaciones que relacionan los campos eléctrico y magnético, y su aplicación al cálculo del campo de un conductor con corriente.',
      theory: [
        `<p>Las <strong>ecuaciones de Maxwell</strong> en forma integral son cuatro: la ley de Gauss para el campo eléctrico, la ley de Gauss para el campo magnético (no existen cargas magnéticas), la ley de inducción de Faraday y la ley de Ampère-Maxwell. Juntas describen todos los fenómenos electromagnéticos clásicos.</p>`,
        `<p><strong>La ley de Ampère-Maxwell</strong> dice que la circulación del campo magnético a lo largo de una curva cerrada es proporcional a la corriente que la atraviesa y a la variación del flujo eléctrico: $\\oint \\vec B\\cdot d\\vec l=\\mu_0 I+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}$. En procesos estacionarios queda solo el término de corriente.</p>`,
        `<p>De la ley de Ampère para un conductor rectilíneo largo con corriente $I$ a una distancia $r$ resulta $B=\\frac{\\mu_0 I}{2\\pi r}$, siendo $\\mu_0=4\\pi\\cdot 10^{-7}\\,\\text{T\\,m/A}$.</p>`,
        `<p><strong>Por qué es importante la corriente de desplazamiento:</strong> sin el término de variación del flujo eléctrico, la ley no sería compatible con la conservación de la carga. Maxwell lo añadió, y de las ecuaciones se dedujo la existencia de las ondas electromagnéticas.</p>`,
        { fig: 'v1v4-ampere', caption: 'Alrededor de un conductor rectilíneo con corriente, las líneas del campo de inducción magnética son circunferencias. La inducción B disminuye con la distancia r.' }
      ],
      examples: [
        { task: 'Por un conductor rectilíneo circula una corriente $I=10\\,\\text{A}$. ¿Cuál es la inducción magnética a una distancia $r=0{,}2\\,\\text{m}$? Resultado en microteslas.',
          steps: ['$B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{4\\pi\\cdot 10^{-7}\\cdot 10}{2\\pi\\cdot 0{,}2}$.', '$B=\\frac{2\\cdot 10^{-7}\\cdot 10}{0{,}2}=10^{-5}\\,\\text{T}$.', '<strong>Resultado: $B=10\\,\\mu\\text{T}$</strong>'] },
        { task: '¿Cómo cambia la inducción de un conductor con corriente si la distancia a él se duplica?',
          steps: ['$B$ es proporcional a $\\frac{1}{r}$.', '<strong>Resultado: se reduce a la mitad</strong>'] }
      ]
    },
    'v3-em-vlny': {
      title: 'Ondas electromagnéticas',
      summary: 'La onda como campo eléctrico y magnético alternos, perpendiculares a la dirección de propagación, con la velocidad de la luz c.',
      theory: [
        `<p>Un cambio del campo eléctrico crea un campo magnético, y un cambio del campo magnético crea un campo eléctrico. Su generación mutua se propaga por el espacio como una <strong>onda electromagnética</strong>. En el vacío, su velocidad es $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        `<p>La onda tiene una frecuencia $f$ y una longitud de onda $\\lambda$. Se cumple la relación $c=\\lambda\\,f$, de la que resulta $\\lambda=\\frac{c}{f}$. Cuanto mayor es la frecuencia, menor es la longitud de onda.</p>`,
        `<p>El campo eléctrico y el magnético de la onda son mutuamente perpendiculares, y ambos son perpendiculares a la dirección de propagación. Por eso la onda electromagnética es <em>transversal</em>.</p>`,
        `<p><strong>Por qué es importante:</strong> las ondas de radio, la luz y los rayos X son de la misma naturaleza. Solo se diferencian en la frecuencia, y por tanto en la longitud de onda, y de ello dependen sus distintos usos.</p>`,
        { fig: 'v1v4-em-vlna', caption: 'Las componentes eléctrica y magnética de la onda oscilan en fase, son perpendiculares entre sí y ambas son perpendiculares a la dirección de propagación c.' }
      ],
      examples: [
        { task: 'Un transmisor trabaja a una frecuencia $f=100\\,\\text{MHz}$. ¿Cuál es la longitud de onda de la onda en el aire?',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{100\\cdot 10^{6}}$.', '<strong>Resultado: $\\lambda=3\\,\\text{m}$</strong>'] },
        { task: 'La longitud de onda es $\\lambda=0{,}5\\,\\text{m}$. ¿Cuál es la frecuencia de la onda?',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{0{,}5}$.', '<strong>Resultado: $f=6\\cdot 10^{8}\\,\\text{Hz}=600\\,\\text{MHz}$</strong>'] }
      ]
    },
    'v3-sirenie': {
      title: 'Propagación de la radiación electromagnética',
      summary: 'Velocidad de la luz en un medio, índice de refracción e influencia de la permitividad y la permeabilidad del medio.',
      theory: [
        `<p>En el vacío la radiación electromagnética se propaga con velocidad $c$; en una sustancia su velocidad es menor. El <strong>índice de refracción</strong> $n=\\frac{c}{v}$ indica cuántas veces es menor la velocidad en la sustancia.</p>`,
        `<p>Para un medio no magnético con permitividad relativa $\\varepsilon_r$ y permeabilidad $\\mu_r=1$ se cumple $n=\\sqrt{\\varepsilon_r\\,\\mu_r}=\\sqrt{\\varepsilon_r}$. Un dieléctrico con mayor permitividad frena, por tanto, la onda.</p>`,
        `<p><strong>Por qué se frena la onda:</strong> el campo eléctrico de la onda polariza los átomos de la sustancia, sus oscilaciones se retrasan y la onda resultante se propaga más despacio. La frecuencia no cambia al entrar en la sustancia; cambian la velocidad y la longitud de onda.</p>`,
        `<p>Precisamente este fenómeno explica la refracción de la luz en la frontera entre dos medios, así como el principio de las lentes y de las fibras ópticas.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: 'Al entrar en una sustancia, la velocidad de la onda disminuye y, por tanto, se acorta su longitud de onda. La frecuencia permanece igual.' }
      ],
      examples: [
        { task: 'Un medio tiene permitividad relativa $\\varepsilon_r=4$. ¿Cuál es el índice de refracción?',
          steps: ['$n=\\sqrt{\\varepsilon_r}=\\sqrt{4}$.', '<strong>Resultado: $n=2$</strong>'] },
        { task: '¿Cuál es la velocidad de la luz en un medio con índice de refracción $n=2$, si $c=3\\cdot 10^{8}\\,\\text{m/s}$?',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{2}$.', '<strong>Resultado: $v=1{,}5\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-vlnenie': {
      title: 'Ondas mecánicas y electromagnéticas',
      summary: 'Qué se transmite en una onda y por qué las ondas mecánicas necesitan un medio material, mientras que las electromagnéticas no.',
      theory: [
        `<p>Una onda es la propagación de oscilaciones en el espacio. El material no se traslada con ella; se transmiten <strong>energía</strong> e <strong>información</strong>. Según lo que oscile, distinguimos ondas <strong>mecánicas</strong> (oscila la materia, p. ej., el sonido, las olas del agua o las ondas sísmicas) y <strong>electromagnéticas</strong> (oscilan el campo eléctrico y el magnético, p. ej., la luz, las ondas de radio o los rayos X).</p>`,
        `<p>La onda mecánica necesita un <strong>medio material</strong>, porque cada partícula pone en oscilación a su vecina. Por eso el sonido no se propaga en el vacío. La onda electromagnética se propaga también en el vacío, porque las oscilaciones del campo no necesitan ninguna partícula que las transmita.</p>`,
        `<p>Según la dirección de las oscilaciones distinguimos ondas <strong>transversales</strong> (las oscilaciones son perpendiculares a la dirección de propagación, p. ej., una onda en una cuerda y la luz) y <strong>longitudinales</strong> (las oscilaciones son paralelas a la dirección de propagación, p. ej., el sonido en los gases). La velocidad del sonido en el aire es aproximadamente $340\\,\\text{m/s}$; la velocidad de la luz en el vacío es $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        { fig: 'obr-vlna', caption: 'Onda transversal: la longitud de onda λ es la distancia entre dos puntos vecinos en la misma fase.' }
      ],
      examples: [
        { task: 'La luz del Sol llega a la Tierra a través del espacio vacío. ¿Es una onda mecánica o electromagnética?',
          steps: ['Entre el Sol y la Tierra no hay materia; por tanto, la onda se propaga en el vacío.', '<strong>Resultado: se trata de una onda electromagnética.</strong>'] },
        { task: '¿Por qué no se oye el sonido en el espacio vacío entre dos naves espaciales?',
          steps: ['El sonido es una onda mecánica y necesita un medio material.', 'En el vacío no hay partículas, así que las oscilaciones no tienen a quién transmitirse.', '<strong>Resultado: el sonido no se propaga en el vacío.</strong>'] }
      ]
    },
    'v4-frekvencia': {
      title: 'Frecuencia, longitud de onda y amplitud',
      summary: 'Magnitudes que describen una onda y la relación v = λ·f entre ellas.',
      theory: [
        `<p>Una onda se describe con tres magnitudes básicas: la <strong>amplitud</strong> $A$ (la mayor desviación respecto a la posición de equilibrio), la <strong>frecuencia</strong> $f$ (número de oscilaciones por segundo, unidad $\\text{Hz}$) y la <strong>longitud de onda</strong> $\\lambda$ (distancia entre los dos puntos más cercanos que oscilan en fase).</p>`,
        `<p>El periodo $T=\\frac{1}{f}$ es el tiempo de una oscilación. La amplitud está relacionada con la <em>intensidad</em> de la onda (p. ej., con el volumen del sonido o el brillo de la luz); la frecuencia determina el tono o el color.</p>`,
        `<p>La velocidad de propagación de la onda es $v=\\lambda\\cdot f$. Al pasar a otro medio cambian la velocidad y la longitud de onda, pero <strong>la frecuencia no cambia</strong>: la determina la fuente de las oscilaciones, no el medio.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: 'Al entrar en una sustancia, la velocidad de la onda disminuye y, por tanto, se acorta su longitud de onda. La frecuencia permanece igual.' }
      ],
      examples: [
        { task: 'Una onda tiene frecuencia $f=50\\,\\text{Hz}$ y longitud de onda $\\lambda=6\\,\\text{m}$. ¿Cuál es su velocidad?',
          steps: ['$v=\\lambda\\cdot f=6\\cdot 50$.', '<strong>Resultado: $v=300\\,\\text{m/s}$</strong>'] },
        { task: '¿Cuál es el periodo de una onda con frecuencia $f=4\\,\\text{Hz}$?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{4}$.', '<strong>Resultado: $T=0{,}25\\,\\text{s}$</strong>'] }
      ]
    },
    'v4-interferencia': {
      title: 'Interferencia y difracción',
      summary: 'Superposición de ondas: cuándo se refuerzan, cuándo se debilitan y por qué las ondas se curvan alrededor de los obstáculos.',
      theory: [
        `<p><strong>Principio de superposición:</strong> la oscilación resultante en un punto es la suma de las oscilaciones de todas las ondas que llegan a él. Si las ondas oscilan en fase (son coherentes), el resultado depende de la <strong>diferencia de caminos</strong> $\\Delta d$.</p>`,
        `<p>El <strong>refuerzo</strong> se produce si la diferencia de caminos es un múltiplo entero de la longitud de onda: $\\Delta d=m\\,\\lambda$. El <strong>debilitamiento</strong> se produce si la diferencia de caminos es un múltiplo impar de media longitud de onda: $\\Delta d=\\left(m+\\tfrac{1}{2}\\right)\\lambda$.</p>`,
        `<p>La <strong>difracción</strong> es la curvatura de una onda alrededor de un obstáculo o a través de una rendija estrecha. Es más notable si el tamaño del obstáculo es comparable con la longitud de onda. Por eso el sonido se curva fácilmente al doblar una esquina, mientras que la luz produce una sombra nítida.</p>`,
        { fig: 'v1v4-interferencia', caption: 'Las ondas en fase se refuerzan con una diferencia de caminos m·λ; en oposición de fase se debilitan con (m + ½)·λ.' }
      ],
      examples: [
        { task: 'Dos ondas coherentes con longitud de onda $\\lambda=0{,}5\\,\\text{m}$ tienen una diferencia de caminos $\\Delta d=1{,}25\\,\\text{m}$. ¿Se produce refuerzo o debilitamiento?',
          steps: ['$\\frac{\\Delta d}{\\lambda}=\\frac{1{,}25}{0{,}5}=2{,}5$.', 'El número $2{,}5$ es un múltiplo impar de media longitud de onda: $2{,}5=\\left(2+\\tfrac{1}{2}\\right)$.', '<strong>Resultado: debilitamiento.</strong>'] }
      ]
    },
    'v4-polarizacia': {
      title: 'Polarización de la luz',
      summary: 'Carácter transversal de la luz, el polarizador y la ley de Malus para la intensidad tras el analizador.',
      theory: [
        `<p>La luz es una onda transversal: el campo eléctrico oscila perpendicularmente a la dirección de propagación. La luz <strong>polarizada</strong> tiene oscilaciones en un único plano. Una fuente común (una bombilla, el Sol) emite luz <strong>no polarizada</strong>, en la que el plano de oscilación cambia al azar.</p>`,
        `<p>El polarizador deja pasar solo la componente de las oscilaciones en su dirección. Al atravesar un primer polarizador la luz <strong>no polarizada</strong>, su intensidad se reduce a la mitad.</p>`,
        `<p><strong>La ley de Malus:</strong> si la luz linealmente polarizada con intensidad $I_0$ incide sobre un analizador girado un ángulo $\\varphi$, detrás de él la intensidad es $I=I_0\\cos^2\\varphi$. El coseno aparece al cuadrado porque el analizador deja pasar solo la componente del campo en la dirección de su eje, y la intensidad es proporcional al cuadrado de la amplitud.</p>`,
        { fig: 'v1v4-polarizacia', caption: 'El analizador deja pasar solo la componente de las oscilaciones en su dirección, E·cos φ. La intensidad es proporcional a cos²φ.' }
      ],
      examples: [
        { task: 'La luz linealmente polarizada con intensidad $I_0=80$ atraviesa un analizador girado $60^\\circ$. ¿Qué intensidad tiene detrás?',
          steps: ['$\\cos^2 60^\\circ=\\left(\\tfrac{1}{2}\\right)^2=0{,}25$.', '$I=80\\cdot 0{,}25=20$.', '<strong>Resultado: $I=20$</strong>'] }
      ]
    },
    'v4-geometricka-optika': {
      title: 'Óptica geométrica y ondulatoria',
      summary: 'Índice de refracción, velocidad de la luz en las sustancias y ley de Snell de la refracción.',
      theory: [
        `<p><strong>La óptica geométrica</strong> describe la luz como rayos que se propagan en línea recta, se reflejan según la ley de la reflexión ($\\alpha=\\alpha'$) y se refractan en la frontera entre medios. La óptica ondulatoria explica los fenómenos que los rayos no captan, por ejemplo la interferencia y la difracción.</p>`,
        `<p><strong>El índice de refracción</strong> $n=\\frac{c}{v}$ indica cuántas veces es más lenta la luz en una sustancia que en el vacío. En el agua es $n\\approx 1{,}33$, y en el vidrio alrededor de $1{,}5$. La velocidad de la luz en una sustancia es $v=\\frac{c}{n}$.</p>`,
        `<p><strong>La ley de Snell</strong> $n_1\\sin\\alpha=n_2\\sin\\beta$ indica cómo se refracta el rayo. Al pasar a un medio ópticamente más denso ($n_2>n_1$), el rayo se acerca a la normal; al pasar a uno menos denso, se aleja de ella.</p>`,
        { fig: 'v1v4-lom', caption: 'Al pasar a un medio ópticamente más denso, el rayo se refracta hacia la normal, de modo que β es menor que α (n₂ > n₁).' }
      ],
      examples: [
        { task: '¿Cuál es la velocidad de la luz en un vidrio con índice de refracción $n=1{,}5$? Usa $c=3\\cdot 10^{8}\\,\\text{m/s}$.',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{1{,}5}$.', '<strong>Resultado: $v=2\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-zobrazovanie': {
      title: 'Formación de imágenes con lentes y espejos',
      summary: 'Ecuación de las lentes para una lente convergente y determinación de la posición de la imagen.',
      theory: [
        `<p>Una lente convergente concentra los rayos paralelos en el <strong>foco</strong>, situado a una distancia $f$. Un objeto a una distancia $a$ delante de la lente forma una imagen a una distancia $b$ detrás de ella.</p>`,
        `<p><strong>La ecuación de las lentes</strong> vale para lentes delgadas y espejos: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$. Es una relación entre tres magnitudes, de modo que si conocemos dos, calculamos la tercera.</p>`,
        `<p>Si $a>f$, la imagen es real e invertida. Cuidado con el error: se suman los inversos de las distancias, no las distancias mismas. La relación $b=a+f$ no es válida.</p>`,
        { fig: 'v1v4-zobrazenie', caption: 'Un objeto situado a una distancia igual al doble de la focal produce una imagen real, invertida y del mismo tamaño, a una distancia 2f.' }
      ],
      examples: [
        { task: 'El objeto está a una distancia $a=30\\,\\text{cm}$ delante de una lente convergente de foco $f=15\\,\\text{cm}$. ¿Dónde se forma la imagen?',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{15}-\\frac{1}{30}=\\frac{1}{30}$.', '<strong>Resultado: $b=30\\,\\text{cm}$</strong>'] }
      ]
    },
    'v4-lasery': {
      title: 'Láseres e instrumentos ópticos',
      summary: 'Propiedades de la luz láser, cálculo de la frecuencia y aumento de la lupa.',
      theory: [
        `<p>El <strong>láser</strong> (amplificación de la luz por emisión estimulada de radiación) produce luz con propiedades que no tiene una fuente ordinaria: es <strong>monocromática</strong> (una sola longitud de onda), <strong>coherente</strong> (las oscilaciones están en fase) y forma un <strong>haz estrecho</strong>. Por eso puede enfocarse en una mancha pequeña.</p>`,
        `<p>Para cualquier luz se cumple $c=\\lambda\\cdot f$, es decir, la frecuencia es $f=\\frac{c}{\\lambda}$. En óptica, la longitud de onda suele expresarse en nanómetros: $1\\,\\text{nm}=10^{-9}\\,\\text{m}$.</p>`,
        `<p><strong>Los instrumentos ópticos</strong> usan lentes para aumentar. Una lupa de distancia focal $f$ proporciona, en una observación cómoda, un aumento $Z=\\frac{d}{f}$, donde $d\\approx 250\\,\\text{mm}$ es la distancia de visión distinta. Una distancia focal más corta significa un aumento mayor.</p>`
      ],
      examples: [
        { task: 'La luz de un láser rojo tiene longitud de onda $\\lambda=650\\,\\text{nm}$. ¿Cuál es su frecuencia en unidades de $10^{14}\\,\\text{Hz}$?',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{650\\cdot 10^{-9}}\\approx 4{,}6\\cdot 10^{14}\\,\\text{Hz}$.', '<strong>Resultado: aproximadamente $4{,}6\\cdot 10^{14}\\,\\text{Hz}$</strong>'] }
      ]
    },
    'v4-vlakna': {
      title: 'Fundamentos de las fibras ópticas',
      summary: 'Reflexión total en la frontera entre el núcleo y el revestimiento, y ángulo crítico.',
      theory: [
        `<p>La fibra óptica conduce la luz dentro de un núcleo delgado con índice de refracción $n_1$, rodeado de un revestimiento con índice menor $n_2&lt;n_1$. La luz se mantiene en el núcleo por <strong>reflexión total</strong>, no por refracción, así que casi no se pierde.</p>`,
        `<p>La reflexión total se produce si el ángulo de incidencia supera el <strong>ángulo crítico</strong> $\\alpha_c$, para el que se cumple $\\sin\\alpha_c=\\frac{n_2}{n_1}$. Cuanto mayor es la diferencia de índices, menor es el ángulo crítico y más luz capta la fibra.</p>`,
        `<p>La señal se transmite mediante pulsos de luz. Las fibras se usan en internet y en las telecomunicaciones, porque la luz transporta mucha información a grandes distancias y no se ve perturbada por el campo electromagnético.</p>`,
        { fig: 'v1v4-vlakno', caption: 'La luz se mantiene en el núcleo por reflexión total, porque incide con un ángulo mayor que el crítico, donde sin α_c = n₂/n₁.' }
      ],
      examples: [
        { task: 'El núcleo de una fibra tiene $n_1=1{,}5$ y el revestimiento $n_2=1{,}0$. ¿Cuál es el seno del ángulo crítico?',
          steps: ['$\\sin\\alpha_c=\\frac{n_2}{n_1}=\\frac{1{,}0}{1{,}5}$.', '<strong>Resultado: $\\sin\\alpha_c\\approx 0{,}67$</strong>'] }
      ]
    }
  }
});
