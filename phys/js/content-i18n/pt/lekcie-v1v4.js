/* Português (Brasil): lekcie vysokoškolských úrovní v1–v4 (js/rocniky/v1.js, v2.js, v3.js, v4.js). Štruktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('pt', {
  lessons: {
    'v1-kinematika': {
      title: 'Cinemática: posição, velocidade e aceleração',
      summary: 'Descrição do movimento sem suas causas: como a posição, a velocidade e a aceleração mudam com o tempo.',
      theory: [
        `<p>A cinemática descreve o movimento dos corpos sem perguntar por suas causas. A grandeza básica é a <strong>posição</strong> $x(t)$, isto é, a coordenada do corpo em relação a uma origem e a um sentido escolhidos.</p>`,
        `<p>A <strong>velocidade</strong> é a variação da posição por unidade de tempo: $v=\\frac{\\Delta x}{\\Delta t}$. É um vetor, por isso também carrega um sinal, que determina o sentido do movimento. A <strong>aceleração</strong> é a variação da velocidade por unidade de tempo: $a=\\frac{\\Delta v}{\\Delta t}$, em unidades de $\\text{m/s}^2$.</p>`,
        `<p>No <strong>movimento uniformemente acelerado</strong> a aceleração é constante. A velocidade então varia linearmente, $v=v_0+a\\,t$, e a posição varia com o quadrado do tempo: $x=x_0+v_0\\,t+\\frac{1}{2}a\\,t^2$.</p>`,
        `<p><strong>Por que multiplicamos pelo tempo:</strong> a aceleração indica em quantos metros por segundo a velocidade muda a cada segundo. Em um tempo $t$, ela portanto muda em $a\\,t$. Se $a$ e $v_0$ têm o mesmo sinal, o corpo acelera; caso contrário, freia.</p>`,
        { fig: 'v1v4-kinematika-vt', caption: 'No movimento uniformemente acelerado, o gráfico velocidade-tempo é uma reta: sua inclinação é a aceleração a e seu ponto inicial é a velocidade inicial v₀.' }
      ],
      examples: [
        { task: 'Um carro está parado ($v_0=0$) e acelera com aceleração constante $a=2\\,\\text{m/s}^2$. Qual será sua velocidade após $5\\,\\text{s}$?',
          steps: ['Substituímos na relação $v=v_0+a\\,t$: $v=0+2\\cdot 5$.', '<strong>Resultado: $v=10\\,\\text{m/s}$</strong>'] },
        { task: 'Um trem tem velocidade $v_0=12\\,\\text{m/s}$ e freia com aceleração $a=-3\\,\\text{m/s}^2$. Qual é sua velocidade após $2\\,\\text{s}$?',
          steps: ['$v=v_0+a\\,t=12+(-3)\\cdot 2$.', '$v=12-6$.', '<strong>Resultado: $v=6\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-newton': {
      title: 'As leis do movimento de Newton',
      summary: 'Primeira, segunda e terceira lei: quando um corpo não se move uniformemente e como a força se relaciona com a aceleração.',
      theory: [
        `<p><strong>Primeira lei</strong> (da inércia): um corpo permanece em repouso ou em movimento retilíneo uniforme enquanto não atuar sobre ele uma força resultante não nula. A inércia é uma propriedade da massa, não um resultado de uma força.</p>`,
        `<p><strong>Segunda lei</strong>: a aceleração é proporcional à força resultante e inversamente proporcional à massa, $\\vec a=\\frac{\\vec F}{m}$, isto é, $\\vec F=m\\,\\vec a$. A resultante é a soma vetorial de todas as forças que atuam sobre o corpo; forças em sentidos opostos subtraem-se.</p>`,
        `<p><strong>Terceira lei</strong>: se o corpo A atua sobre o corpo B com uma força, o corpo B atua sobre A com uma força de igual intensidade e sentido oposto. Essas duas forças atuam em corpos <em>diferentes</em>, por isso não se anulam.</p>`,
        `<p><strong>Por que é assim:</strong> a força é a causa da mudança do movimento. Para uma massa maior, é necessária uma força maior para a mesma aceleração, pois a massa oferece resistência à mudança de velocidade.</p>`,
        { fig: 'v1v4-sily-dve', caption: 'Forças em sentidos opostos se subtraem. A força resultante F₁ − F₂ confere ao corpo a aceleração a = (F₁ − F₂)/m.' }
      ],
      examples: [
        { task: 'Um corpo de massa $m=4\\,\\text{kg}$ é puxado por uma força $F=20\\,\\text{N}$, e o atrito $F_t=8\\,\\text{N}$ atua contra ele na mesma direção. Qual é a aceleração?',
          steps: ['Força resultante: $F_v=20-8=12\\,\\text{N}$.', 'Aceleração: $a=\\frac{F_v}{m}=\\frac{12}{4}$.', '<strong>Resultado: $a=3\\,\\text{m/s}^2$</strong>'] },
        { task: 'Sobre um corpo de massa $m=3\\,\\text{kg}$ atua uma força resultante de $12\\,\\text{N}$. Qual é a aceleração?',
          steps: ['$a=\\frac{F}{m}=\\frac{12}{3}$.', '<strong>Resultado: $a=4\\,\\text{m/s}^2$</strong>'] }
      ]
    },
    'v1-hybnost': {
      title: 'Forças, quantidade de movimento e momento angular',
      summary: 'Quantidade de movimento como medida do movimento, impulso da força e momento angular na rotação em torno de um ponto.',
      theory: [
        `<p>A <strong>quantidade de movimento</strong> de um corpo é o produto de sua massa pela velocidade: $\\vec p=m\\,\\vec v$. Um corpo pesado e rápido tem grande quantidade de movimento e é mais difícil de parar.</p>`,
        `<p>A segunda lei de Newton também pode ser escrita com a quantidade de movimento: $\\vec F=\\frac{\\Delta \\vec p}{\\Delta t}$. O produto $\\vec F\\,\\Delta t$ chama-se <strong>impulso da força</strong> e é igual à variação da quantidade de movimento: $\\Delta \\vec p=\\vec F\\,\\Delta t$.</p>`,
        `<p>O <strong>momento angular</strong> de uma partícula em relação a um ponto fixo $O$ é o produto vetorial da posição pela quantidade de movimento: $\\vec L=\\vec r\\times\\vec p$, com módulo $L=r\\,p\\sin\\alpha$, onde $\\alpha$ é o ângulo entre $\\vec r$ e $\\vec p$.</p>`,
        `<p><strong>Por que isso vale:</strong> a força só muda a quantidade de movimento se atuar por tempo suficiente. Um golpe curto dá um impulso pequeno, mesmo com força grande. O momento angular só muda quando sobre o corpo atua um momento de força $\\vec M=\\vec r\\times\\vec F$.</p>`
      ],
      examples: [
        { task: 'Uma bala de massa $m=0{,}02\\,\\text{kg}$ voa com velocidade $v=300\\,\\text{m/s}$. Qual é sua quantidade de movimento?',
          steps: ['$p=m\\,v=0{,}02\\cdot 300$.', '<strong>Resultado: $p=6\\,\\text{kg\\,m/s}$</strong>'] },
        { task: 'Uma força $F=50\\,\\text{N}$ atua sobre um corpo durante $4\\,\\text{s}$. Qual é a variação de sua quantidade de movimento?',
          steps: ['Impulso da força: $\\Delta p=F\\,\\Delta t=50\\cdot 4$.', '<strong>Resultado: $\\Delta p=200\\,\\text{kg\\,m/s}$</strong>'] }
      ]
    },
    'v1-praca-energia': {
      title: 'Trabalho, energia e potência',
      summary: 'Trabalho de uma força, energia cinética de um corpo e potência como trabalho por unidade de tempo.',
      theory: [
        `<p>O <strong>trabalho</strong> de uma força constante para um deslocamento $\\vec s$ é $W=F\\,s\\cos\\alpha$, onde $\\alpha$ é o ângulo entre a força e o deslocamento. Uma força perpendicular ao deslocamento não realiza trabalho.</p>`,
        `<p>A <strong>energia cinética</strong> de um corpo é $E_k=\\frac{1}{2}m v^2$. O trabalho da força resultante é igual à variação da energia cinética: $W=\\Delta E_k$. Trata-se do teorema da energia cinética.</p>`,
        `<p>A <strong>potência</strong> é o trabalho realizado por unidade de tempo: $P=\\frac{W}{t}$, em watts, $1\\,\\text{W}=1\\,\\text{J/s}$.</p>`,
        `<p><strong>Por que aparece $v^2$:</strong> com o dobro da velocidade, o corpo tem quatro vezes a energia, pois para pará-lo é preciso quatro vezes o trabalho. Por isso os acidentes em alta velocidade são tão perigosos.</p>`,
        { fig: 'v1v4-praca-uhol', caption: 'Apenas a componente da força paralela ao deslocamento realiza trabalho, F·cos α. A componente perpendicular ao deslocamento não realiza trabalho.' }
      ],
      examples: [
        { task: 'Um corpo de massa $m=2\\,\\text{kg}$ move-se com velocidade $v=3\\,\\text{m/s}$. Qual é sua energia cinética?',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 2\\cdot 3^2$.', '<strong>Resultado: $E_k=9\\,\\text{J}$</strong>'] },
        { task: 'Uma força $F=10\\,\\text{N}$ desloca um corpo em $s=6\\,\\text{m}$ no sentido da força. Qual trabalho é realizado?',
          steps: ['O ângulo é $\\alpha=0^\\circ$, logo $\\cos\\alpha=1$.', '$W=F\\,s\\cos\\alpha=10\\cdot 6\\cdot 1$.', '<strong>Resultado: $W=60\\,\\text{J}$</strong>'] }
      ]
    },
    'v1-gravitacne-pole': {
      title: 'Campo gravitacional',
      summary: 'Lei da gravitação de Newton, aceleração gravitacional e como ela varia com a distância do centro de um planeta.',
      theory: [
        `<p><strong>Lei da gravitação de Newton</strong>: dois corpos de massas $m_1$ e $m_2$ a uma distância $r$ atraem-se com a força $F=G\\frac{m_1 m_2}{r^2}$, onde $G\\approx 6{,}67\\cdot 10^{-11}\\,\\text{N\\,m}^2/\\text{kg}^2$.</p>`,
        `<p><strong>Campo gravitacional</strong> é a região na qual uma força gravitacional atua sobre um corpo material. A intensidade do campo, isto é, a <em>aceleração gravitacional</em>, é $g=\\frac{F}{m}=G\\frac{M}{r^2}$, onde $M$ é a massa da fonte do campo.</p>`,
        `<p><strong>Por que diminui com a distância:</strong> o efeito gravitacional se espalha por uma esfera de área $4\\pi r^2$ cada vez maior. Por isso a aceleração gravitacional varia com o quadrado da distância ao centro, e não linearmente.</p>`,
        `<p>Na superfície da Terra $g\\approx 9{,}81\\,\\text{m/s}^2$. À distância $r$ do centro da Terra, $g(r)=9{,}81\\cdot\\left(\\frac{R}{r}\\right)^2$, onde $R$ é o raio da Terra.</p>`,
        { fig: 'v1v4-gravitacia-r', caption: 'A aceleração gravitacional cai com o quadrado da distância ao centro: a 2R ela é um quarto do valor na superfície.' }
      ],
      examples: [
        { task: 'Qual é a aceleração gravitacional na altura em que a distância ao centro da Terra é o dobro do raio da Terra?',
          steps: ['A razão das distâncias é $\\frac{r}{R}=2$, logo $g(r)=g\\cdot\\left(\\frac{1}{2}\\right)^2$.', '$g(r)=\\frac{9{,}81}{4}\\approx 2{,}45\\,\\text{m/s}^2$.', '<strong>Resultado: aproximadamente $2{,}45\\,\\text{m/s}^2$</strong>'] },
        { task: 'Dois corpos de massas $m_1=10\\,\\text{kg}$ e $m_2=5\\,\\text{kg}$ estão a uma distância $r$. Como muda a força se a distância for duplicada?',
          steps: ['A força é proporcional a $\\frac{1}{r^2}$; a $2r$ ela diminui quatro vezes.', '<strong>Resultado: a força diminui para um quarto</strong>'] }
      ]
    },
    'v1-rotacia': {
      title: 'Rotação de um corpo rígido',
      summary: 'Velocidade angular, momento de inércia e momento de força na rotação de um corpo em torno de um eixo.',
      theory: [
        `<p>Um <strong>corpo rígido</strong> não muda de forma ao girar em torno de um eixo: todos os seus pontos giram com a mesma <strong>velocidade angular</strong> $\\omega$, em radianos por segundo. Se o corpo realiza $f$ voltas por segundo, então $\\omega=2\\pi f$, porque uma volta completa corresponde ao ângulo $2\\pi$.</p>`,
        `<p>A velocidade tangencial de um ponto à distância $r$ do eixo é $v=\\omega\\,r$. Pontos mais afastados do eixo se movem mais depressa, com a mesma velocidade angular.</p>`,
        `<p>O <strong>momento de inércia</strong> $I=\\sum m_i r_i^2$ é o equivalente rotacional da massa. Ele depende não só da massa, mas também de quão longe do eixo ela está distribuída. A segunda lei de Newton para a rotação tem a forma $M=I\\,\\alpha$, onde $M$ é o momento de força e $\\alpha$ a aceleração angular.</p>`,
        `<p><strong>Por que aparece o 2:</strong> o ângulo é medido em radianos e uma volta corresponde a $2\\pi$ radianos, e não a $\\pi$. Por isso a frequência em hertz é multiplicada por dois pi.</p>`,
        { fig: 'v1v4-rotacia', caption: 'Um ponto de um corpo rígido à distância r do eixo se move ao longo de um círculo com velocidade tangencial v = ω·r.' }
      ],
      examples: [
        { task: 'Um disco gira com frequência $f=3\\,\\text{Hz}$. Qual é sua velocidade angular?',
          steps: ['$\\omega=2\\pi f=2\\pi\\cdot 3$.', '<strong>Resultado: $\\omega=6\\pi\\approx 18{,}85\\,\\text{rad/s}$</strong>'] },
        { task: 'Um ponto de uma roda está a $r=0{,}5\\,\\text{m}$ do eixo e a velocidade angular é $\\omega=4\\,\\text{rad/s}$. Qual é sua velocidade tangencial?',
          steps: ['$v=\\omega\\,r=4\\cdot 0{,}5$.', '<strong>Resultado: $v=2\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-sustavy': {
      title: 'Mecânica de sistemas de partículas',
      summary: 'O centro de massa de um sistema de partículas como média ponderada de suas posições e o movimento do centro de massa.',
      theory: [
        `<p>Um <strong>sistema de partículas</strong> pode ser descrito por um ponto significativo, seu <strong>centro de massa</strong>. Para duas partículas sobre o eixo $x$, sua posição é $x_T=\\frac{m_1x_1+m_2x_2}{m_1+m_2}$. É uma média ponderada, na qual a partícula mais pesada puxa o centro de massa em sua direção.</p>`,
        `<p>O centro de massa se move como uma única partícula de massa total $M=\\sum m_i$, sobre a qual atua a força externa resultante: $M\\,\\vec a_T=\\sum \\vec F_{\\text{ext}}$. As forças internas entre as partículas se anulam mutuamente, por isso não alteram o movimento do centro de massa.</p>`,
        `<p><strong>Por que o centro de massa e não uma média comum:</strong> se as partículas tivessem massas iguais, resultaria a média aritmética. Com massas diferentes, cada coordenada deve ser ponderada por sua massa.</p>`,
        `<p>A energia cinética de um sistema pode ser separada em energia do movimento do centro de massa e energia do movimento das partículas em relação ao centro de massa. Graças a isso, movimentos complexos podem ser decompostos em partes mais simples.</p>`,
        { fig: 'v1v4-sustava-tazisko', caption: 'O centro de massa T fica mais próximo da partícula mais pesada. Sua coordenada é a média ponderada das coordenadas das partículas.' }
      ],
      examples: [
        { task: 'Uma partícula de massa $1\\,\\text{kg}$ está no ponto $x_1=0\\,\\text{m}$ e uma partícula de massa $3\\,\\text{kg}$ está no ponto $x_2=4\\,\\text{m}$. Onde está o centro de massa?',
          steps: ['$x_T=\\frac{1\\cdot 0+3\\cdot 4}{1+3}=\\frac{12}{4}$.', '<strong>Resultado: $x_T=3\\,\\text{m}$</strong>'] },
        { task: 'Duas partículas de mesmo peso estão nos pontos $x_1=2\\,\\text{m}$ e $x_2=8\\,\\text{m}$. Onde está o centro de massa?',
          steps: ['Para massas iguais, o centro de massa é a média aritmética: $x_T=\\frac{2+8}{2}$.', '<strong>Resultado: $x_T=5\\,\\text{m}$</strong>'] }
      ]
    },
    'v1-lagrange': {
      title: 'Mecânica lagrangiana e hamiltoniana',
      summary: 'O lagrangiano como diferença entre energia cinética e potencial, e o hamiltoniano como energia total.',
      theory: [
        `<p>O <strong>lagrangiano</strong> de um sistema é $L=T-V$, onde $T$ é a energia cinética e $V$ a energia potencial. Em vez de acompanhar forças individuais, basta conhecer essas duas energias e como dependem das coordenadas generalizadas $q$ e das velocidades $\\dot q$.</p>`,
        `<p>As <strong>equações de Euler-Lagrange</strong> fornecem as equações do movimento: $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q}-\\frac{\\partial L}{\\partial q}=0$. A vantagem é que podemos escolher as coordenadas livremente, desde que se adequem ao problema, por exemplo o ângulo de um pêndulo.</p>`,
        `<p>Para forças conservativas, o <strong>hamiltoniano</strong> é $H=T+V$, isto é, a energia total. Introduzindo os momentos $p=\\frac{\\partial L}{\\partial \\dot q}$, as equações do movimento se escrevem como pares de equações de primeira ordem, as chamadas equações de Hamilton.</p>`,
        `<p><strong>Por que o sinal negativo em $L$:</strong> a energia potencial atua contra o movimento e por isso é subtraída no lagrangiano, enquanto no hamiltoniano é somada à energia cinética.</p>`
      ],
      examples: [
        { task: 'Uma partícula de massa $m=2\\,\\text{kg}$ tem velocidade $v=3\\,\\text{m/s}$ à altura $h=1\\,\\text{m}$. Qual é seu lagrangiano, se $g=10\\,\\text{m/s}^2$?',
          steps: ['$T=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 9=9\\,\\text{J}$.', '$V=mgh=2\\cdot 10\\cdot 1=20\\,\\text{J}$.', '<strong>Resultado: $L=T-V=9-20=-11\\,\\text{J}$</strong>'] },
        { task: 'A mesma partícula tem o hamiltoniano $H=T+V$. Qual é seu valor?',
          steps: ['$H=9+20$.', '<strong>Resultado: $H=29\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-teplota-tlak': {
      title: 'Temperatura, pressão, calor e energia interna',
      summary: 'Temperatura termodinâmica em kelvins, pressão como força por área e energia interna como soma das energias das partículas.',
      theory: [
        `<p>A <strong>temperatura termodinâmica</strong> $T$ é medida em kelvins. Ela é proporcional à energia cinética média das partículas, por isso não pode ser negativa. A conversão a partir de graus Celsius é $T=t+273{,}15$, onde $0\\,\\text{K}$ é o zero absoluto.</p>`,
        `<p>A <strong>pressão</strong> é a força que atua perpendicularmente sobre a unidade de área: $p=\\frac{F}{S}$, em pascals, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Um gás empurra as paredes do recipiente porque suas partículas colidem com elas e lhes transferem quantidade de movimento.</p>`,
        `<p>A <strong>energia interna</strong> $U$ é a soma das energias cinéticas e potenciais de todas as partículas do sistema. O <strong>calor</strong> $Q$ é a energia transferida entre corpos por causa de uma diferença de temperatura; não é um "conteúdo" do corpo.</p>`,
        `<p><strong>Por que kelvin:</strong> a escala Celsius tem um zero escolhido arbitrariamente. Em fórmulas relacionadas à energia ou a razões, devemos usar o zero no qual a energia se anula, isto é, os kelvins.</p>`,
        { fig: 'v1v4-teplota-stupnice', caption: 'A conversão de temperatura é T = t + 273,15. O zero absoluto corresponde a 0 K, ou seja, −273,15 °C.' }
      ],
      examples: [
        { task: 'Qual é a temperatura $t=27\\,{}^\\circ\\text{C}$ em kelvins?',
          steps: ['$T=t+273{,}15=27+273{,}15$.', '<strong>Resultado: $T=300{,}15\\,\\text{K}$</strong>'] },
        { task: 'Uma força $F=600\\,\\text{N}$ atua perpendicularmente sobre uma área $S=0{,}2\\,\\text{m}^2$. Qual é a pressão?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}2}$.', '<strong>Resultado: $p=3000\\,\\text{Pa}$</strong>'] }
      ]
    },
    'v2-stavove-rovnice': {
      title: 'Equações de estado',
      summary: 'A equação de estado do gás ideal, pV = nRT, e seu uso no cálculo da pressão.',
      theory: [
        `<p>A <strong>equação de estado</strong> do gás ideal relaciona a pressão $p$, o volume $V$, a quantidade de matéria $n$ e a temperatura $T$: $pV=nRT$, onde $R\\approx 8{,}314\\,\\text{J/(mol\\,K)}$.</p>`,
        `<p>Um gás ideal é um modelo no qual as partículas não têm volume próprio e não interagem entre si, exceto nas colisões. Para um gás suficientemente rarefeito, em temperaturas usuais, o modelo é muito preciso.</p>`,
        `<p><strong>Como usá-la:</strong> se conhecemos três grandezas, podemos expressar a quarta. Por exemplo, a pressão é $p=\\frac{nRT}{V}$. Quando uma grandeza muda, as outras mudam segundo proporcionalidades: a temperatura constante, a pressão é inversamente proporcional ao volume.</p>`,
        `<p><strong>Atenção às unidades:</strong> a temperatura deve estar em kelvins e o volume em metros cúbicos; caso contrário, o resultado não sairá em pascals. Litros e decímetros cúbicos convertem-se dividindo por $1000$.</p>`,
        { fig: 'v1v4-izoterma', caption: 'A temperatura constante, o produto pV é constante, por isso a pressão em função do volume forma uma hipérbole: o dobro do volume significa metade da pressão.' }
      ],
      examples: [
        { task: 'Um gás tem $n=1\\,\\text{mol}$, temperatura $T=300\\,\\text{K}$ e volume $V=2\\,\\text{dm}^3$. Qual é a pressão em kPa?',
          steps: ['$V=2\\,\\text{dm}^3=0{,}002\\,\\text{m}^3$.', '$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}314\\cdot 300}{0{,}002}\\approx 1\\,247\\,100\\,\\text{Pa}$.', '<strong>Resultado: $p\\approx 1247\\,\\text{kPa}$</strong>'] },
        { task: 'À temperatura constante, o volume de um gás dobra. Como muda a pressão?',
          steps: ['Com $T$ e $n$ constantes, vale $p\\,V=\\text{const.}$', 'Se $V\\to 2V$, então $p\\to \\frac{p}{2}$.', '<strong>Resultado: a pressão cai para a metade</strong>'] }
      ]
    },
    'v2-prvy-zakon': {
      title: 'A primeira e a segunda lei da termodinâmica',
      summary: 'Conservação da energia em processos térmicos e o sentido em que ocorrem os processos naturais.',
      theory: [
        `<p>A <strong>primeira lei da termodinâmica</strong> é a lei da conservação da energia: a variação da energia interna é igual ao calor fornecido menos o trabalho realizado pelo gás: $\\Delta U=Q-W$, onde $W$ é o trabalho realizado pelo gás.</p>`,
        `<p>Se o gás realiza trabalho, sua energia interna diminui, porque a energia sai para o ambiente. Se é realizado trabalho sobre o gás, a fórmula deve ser reescrita como $\\Delta U=Q+W_{\\text{sobre o gás}}$. É sempre importante qual convenção de sinais está sendo usada.</p>`,
        `<p><strong>A segunda lei da termodinâmica</strong> afirma que o calor passa espontaneamente apenas de um corpo mais quente para um mais frio, e que uma máquina térmica não pode converter todo o calor em trabalho. O sentido dos processos naturais é determinado pelo aumento da entropia.</p>`,
        `<p><strong>Por que isso importa:</strong> a primeira lei diz quanta energia se conserva, e a segunda lei diz em que sentido os processos ocorrem. Sem a segunda lei, seria possível construir um moto-perpétuo de segunda espécie.</p>`,
        { fig: 'v1v4-prvy-zakon', caption: 'O calor Q fornecido aumenta a energia interna do gás, enquanto o trabalho W realizado pelo gás leva energia embora: ΔU = Q − W.' }
      ],
      examples: [
        { task: 'Ao gás é fornecido calor $Q=300\\,\\text{J}$ e o gás realiza trabalho $W=120\\,\\text{J}$. Qual é a variação de sua energia interna?',
          steps: ['$\\Delta U=Q-W=300-120$.', '<strong>Resultado: $\\Delta U=180\\,\\text{J}$</strong>'] },
        { task: 'Ao ser comprimido, o gás recebe trabalho $W_{\\text{sobre o gás}}=50\\,\\text{J}$ e cede calor $Q=-20\\,\\text{J}$. Qual é a variação da energia interna?',
          steps: ['$\\Delta U=Q+W_{\\text{sobre o gás}}=-20+50$.', '<strong>Resultado: $\\Delta U=30\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-entropia': {
      title: 'Entropia e processos térmicos',
      summary: 'Entropia como medida de irreversibilidade e sua variação em um processo isotérmico reversível.',
      theory: [
        `<p>A <strong>entropia</strong> $S$ é uma grandeza que mede o número de microestados possíveis de um sistema para um dado macroestado. Quando o calor $Q$ é absorvido de forma reversível a temperatura constante $T$, a entropia varia de $\\Delta S=\\frac{Q}{T}$, em unidades de $\\text{J/K}$.</p>`,
        `<p>O calor fornecido a baixa temperatura aumenta a entropia mais do que o mesmo calor a alta temperatura. Por isso a fórmula divide pela temperatura, e não apenas soma o calor.</p>`,
        `<p><strong>A segunda lei da termodinâmica na forma da entropia:</strong> em um sistema isolado a entropia nunca diminui; em processos reversíveis permanece constante, e em processos irreversíveis cresce. Os processos espontâneos ocorrem no sentido de maior entropia.</p>`,
        `<p><strong>Por que é assim:</strong> um estado muito ordenado tem poucos microestados, e o sistema passa naturalmente para estados que são mais numerosos. A entropia é, portanto, uma medida de quanta desordem irreversível surge no sistema.</p>`
      ],
      examples: [
        { task: 'Um gás à temperatura constante $T=300\\,\\text{K}$ absorve de forma reversível o calor $Q=600\\,\\text{J}$. Qual é a variação de sua entropia?',
          steps: ['$\\Delta S=\\frac{Q}{T}=\\frac{600}{300}$.', '<strong>Resultado: $\\Delta S=2\\,\\text{J/K}$</strong>'] },
        { task: 'Como muda a entropia se o mesmo calor $Q=600\\,\\text{J}$ for fornecido à temperatura $T=600\\,\\text{K}$?',
          steps: ['$\\Delta S=\\frac{600}{600}=1$.', '<strong>Resultado: $\\Delta S=1\\,\\text{J/K}$, ou seja, menor que a temperatura mais baixa</strong>'] }
      ]
    },
    'v2-tepelne-motory': {
      title: 'Máquinas térmicas e refrigeradores',
      summary: 'Rendimento de uma máquina térmica, o ciclo de Carnot e o limite imposto pelas temperaturas da fonte quente e do refrigerante.',
      theory: [
        `<p>Uma <strong>máquina térmica</strong> retira calor de uma fonte quente, converte parte dele em trabalho e cede o restante a um refrigerante. Seu rendimento é $\\eta=\\frac{W}{Q_h}$, isto é, a razão entre o trabalho realizado e o calor retirado da fonte quente.</p>`,
        `<p>O <strong>ciclo de Carnot</strong> é o melhor ciclo reversível possível entre duas temperaturas. Seu rendimento é $\\eta=1-\\frac{T_c}{T_h}$, onde as temperaturas devem estar em kelvins.</p>`,
        `<p>Um <strong>refrigerador</strong> é uma máquina térmica operada ao contrário: realizando trabalho, transporta calor de um espaço mais frio para um mais quente. Por isso não se fala de seu rendimento, mas de seu coeficiente de desempenho.</p>`,
        `<p><strong>Por que o rendimento não é 100 %:</strong> mesmo uma máquina ideal deve ceder parte do calor ao refrigerante para que o ciclo se feche. Quanto maior a diferença de temperaturas, maior o rendimento possível.</p>`,
        { fig: 'v1v4-tepelny-motor', caption: 'A máquina retira o calor Q_h da fonte quente, converte parte dele em trabalho W e cede o restante Q_c ao refrigerante.' }
      ],
      examples: [
        { task: 'Uma máquina térmica opera entre uma fonte quente à temperatura $T_h=500\\,\\text{K}$ e um refrigerante a $T_c=300\\,\\text{K}$. Qual é seu rendimento ideal?',
          steps: ['$\\eta=1-\\frac{T_c}{T_h}=1-\\frac{300}{500}$.', '$\\eta=1-0{,}6=0{,}4$.', '<strong>Resultado: $\\eta=40\\,\\%$</strong>'] },
        { task: 'Uma máquina com rendimento $25\\,\\%$ recebe da fonte quente o calor $Q_h=800\\,\\text{J}$. Quanto trabalho ela realiza?',
          steps: ['$W=\\eta\\,Q_h=0{,}25\\cdot 800$.', '<strong>Resultado: $W=200\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-kinetika-plynov': {
      title: 'Teoria cinética dos gases',
      summary: 'A visão molecular do gás: a energia cinética média das partículas é proporcional à temperatura absoluta.',
      theory: [
        `<p>A <strong>teoria cinética dos gases</strong> explica a pressão e a temperatura pelo movimento das moléculas. A pressão surge das colisões das moléculas com as paredes do recipiente, e a temperatura é uma medida de sua energia cinética média.</p>`,
        `<p>A energia cinética média de uma molécula de gás ideal é $\\overline{E_k}=\\frac{3}{2}k\\,T$, onde $k\\approx 1{,}38\\cdot 10^{-23}\\,\\text{J/K}$ é a constante de Boltzmann. Ela depende apenas da temperatura, e não do tipo de gás.</p>`,
        `<p><strong>Por que o fator $\\frac{3}{2}$:</strong> uma molécula pode mover-se em três direções, e cada direção contribui com a metade de $k\\,T$ para a energia. Três graus de liberdade juntos dão $\\frac{3}{2}k\\,T$.</p>`,
        `<p><strong>Por que kelvin:</strong> a fórmula é diretamente proporcional à temperatura absoluta. A $0\\,\\text{K}$ a energia cinética das moléculas deveria ser nula, por isso nunca se usa um grau Celsius nesta fórmula.</p>`
      ],
      examples: [
        { task: 'Qual é a energia cinética média de uma molécula de gás à temperatura $T=300\\,\\text{K}$? Use $k=1{,}38\\cdot 10^{-23}\\,\\text{J/K}$.',
          steps: ['$\\overline{E_k}=\\frac{3}{2}k\\,T=1{,}5\\cdot 1{,}38\\cdot 10^{-23}\\cdot 300$.', '$\\overline{E_k}\\approx 6{,}21\\cdot 10^{-21}\\,\\text{J}$.', '<strong>Resultado: aproximadamente $6{,}21\\cdot 10^{-21}\\,\\text{J}$</strong>'] },
        { task: 'Se a temperatura de um gás dobrar, como muda a energia cinética média de uma molécula?',
          steps: ['A energia é diretamente proporcional a $T$.', '<strong>Resultado: ela dobra</strong>'] }
      ]
    },
    'v2-boltzmann': {
      title: 'Distribuição de Boltzmann',
      summary: 'Distribuição das partículas entre níveis de energia a uma dada temperatura e a diminuição exponencial da ocupação.',
      theory: [
        `<p>Em equilíbrio térmico, as partículas se distribuem entre os níveis de energia de modo que os níveis mais altos são menos ocupados. A razão entre o número de partículas nos níveis $E_2$ e $E_1$ é $\\frac{N_2}{N_1}=e^{-(E_2-E_1)/(k\\,T)}$, supondo degenerescências iguais dos níveis.</p>`,
        `<p>A exponencial significa que uma pequena diferença de energia entre os níveis tem grande efeito quando a temperatura é baixa. A temperatura alta, os níveis se equilibram e a ocupação se aproxima de uma distribuição uniforme.</p>`,
        `<p><strong>Por que exatamente uma exponencial:</strong> a probabilidade de um estado com energia $E$ diminui por um fator fixo a cada acréscimo igual de energia à medida que $E$ cresce. É exatamente isso que leva a uma dependência exponencial.</p>`,
        `<p>O resultado mostra que a temperatura não é apenas uma medida do calor, mas também uma escala que determina quais estados estão acessíveis. Esta distribuição é a base de todos os cálculos estatísticos das propriedades macroscópicas.</p>`,
        { fig: 'v1v4-boltzmann', caption: 'Um nível situado ΔE = k·T acima do nível fundamental é ocupado, à temperatura T, cerca de e⁻¹ ≈ 0,37 vezes o nível fundamental.' }
      ],
      examples: [
        { task: 'Um nível fica $\\Delta E=kT$ acima do nível fundamental. Qual é a razão $\\frac{N_2}{N_1}$?',
          steps: ['$\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}=e^{-1}$.', '<strong>Resultado: $\\frac{N_2}{N_1}\\approx 0{,}368$</strong>'] },
        { task: 'Um nível fica $2\\,kT$ mais alto. Qual é a razão de ocupação?',
          steps: ['$\\frac{N_2}{N_1}=e^{-2}\\approx 0{,}135$.', '<strong>Resultado: aproximadamente $0{,}135$</strong>'] }
      ]
    },
    'v2-statisticke': {
      title: 'Explicação estatística de fenômenos macroscópicos',
      summary: 'A relação de Boltzmann entre entropia e número de microestados, e por que os fenômenos macroscópicos têm caráter probabilístico.',
      theory: [
        `<p>A <strong>relação de Boltzmann</strong> liga a entropia ao número de microestados $W$ que correspondem a um dado macroestado: $S=k\\ln W$. O logaritmo natural significa que a entropia é aditiva quando se combinam dois sistemas independentes.</p>`,
        `<p>Para $N$ partículas independentes, cada uma podendo estar em um de dois estados, o número de microestados é $W=2^N$. A entropia é então $S=k\\,N\\ln 2$, que cresce em proporção ao número de partículas.</p>`,
        `<p><strong>Por que os fenômenos macroscópicos são probabilísticos:</strong> macroestados com grande número de microestados ocorrem muito mais frequentemente. Para um mol de partículas, a diferença de probabilidades é tão enorme que uma diminuição espontânea da entropia praticamente nunca é observada.</p>`,
        `<p><strong>Por que o logaritmo:</strong> o número de microestados cresce exponencialmente com o número de partículas; seu logaritmo transforma-o em uma grandeza linear, que pode ser somada e comparada de forma razoável.</p>`
      ],
      examples: [
        { task: 'Um sistema tem $N=3$ partículas independentes, cada uma com dois estados. Quantos microestados $W$ ele tem?',
          steps: ['$W=2^N=2^3$.', '<strong>Resultado: $W=8$</strong>'] },
        { task: 'Qual é o valor de $S/k$ para $N=4$ partículas com dois estados cada? Arredonde para 2 casas decimais.',
          steps: ['$W=2^4=16$, logo $\\frac{S}{k}=\\ln 16$.', '$\\ln 16=4\\ln 2\\approx 2{,}77$.', '<strong>Resultado: $\\frac{S}{k}\\approx 2{,}77$</strong>'] }
      ]
    },
    'v3-elektricke-pole': {
      title: 'Campo elétrico e potencial elétrico',
      summary: 'Intensidade e potencial de uma carga pontual, princípio da superposição e trabalho em um campo elétrico.',
      theory: [
        `<p>A <strong>intensidade do campo elétrico</strong> em um ponto é a força sobre uma carga de prova positiva dividida por seu valor: $\\vec E=\\frac{\\vec F}{q}$, em unidades de $\\text{V/m}$. O campo é uma propriedade do espaço, não da carga de prova.</p>`,
        `<p>Para uma carga pontual $Q$ à distância $r$, temos $E=k\\frac{Q}{r^2}$, onde $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$. A direção do campo é radial: para fora de uma carga positiva e para dentro de uma negativa.</p>`,
        `<p>O <strong>potencial elétrico</strong> é a energia por unidade de carga: $V=k\\frac{Q}{r}$. O trabalho para deslocar uma carga $q$ entre dois pontos é $W=q\\,\\Delta V$ e não depende do caminho, apenas dos pontos inicial e final.</p>`,
        `<p><strong>Superposição:</strong> os campos de várias cargas somam-se como vetores, enquanto seus potenciais somam-se como escalares. Por isso o potencial é mais simples de calcular do que a intensidade do campo.</p>`,
        { fig: 'v1v4-elektricke-pole', caption: 'As linhas de campo de uma carga pontual positiva saem radialmente para fora. A intensidade do campo cai com o quadrado da distância.' }
      ],
      examples: [
        { task: 'Uma carga pontual $Q=2\\,\\mu\\text{C}$ está à distância $r=3\\,\\text{m}$. Qual é a intensidade do campo em kV/m? Use $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$.',
          steps: ['$E=k\\frac{Q}{r^2}=8{,}99\\cdot\\frac{2}{3^2}$.', '$E\\approx 2{,}00\\,\\text{kV/m}$', '<strong>Resultado: aproximadamente $2{,}00\\,\\text{kV/m}$</strong>'] },
        { task: 'Como muda a intensidade do campo de uma carga pontual se a distância for duplicada?',
          steps: ['A intensidade do campo é proporcional a $\\frac{1}{r^2}$.', '$\\frac{1}{(2r)^2}=\\frac{1}{4r^2}$.', '<strong>Resultado: ela cai para um quarto</strong>'] }
      ]
    },
    'v3-gauss': {
      title: 'Lei de Gauss',
      summary: 'Fluxo elétrico através de uma superfície fechada e sua relação com a carga no interior da superfície.',
      theory: [
        `<p>O <strong>fluxo elétrico</strong> através de uma superfície $S$ é $\\Phi_E=\\oint \\vec E\\cdot d\\vec S$, isto é, a soma das componentes do campo perpendiculares à superfície. Sua unidade é $\\text{N\\,m}^2/\\text{C}$.</p>`,
        `<p>A <strong>lei de Gauss</strong> afirma que o fluxo através de uma superfície fechada é proporcional à carga no interior da superfície: $\\oint \\vec E\\cdot d\\vec S=\\frac{Q_{\\text{interior}}}{\\varepsilon_0}$, onde $\\varepsilon_0\\approx 8{,}854\\cdot 10^{-12}\\,\\text{F/m}$.</p>`,
        `<p><strong>Por que vale:</strong> as linhas de campo saem das cargas positivas e entram nas negativas. O fluxo através de uma superfície fechada capta, portanto, exatamente tantas linhas quanto a carga existente no interior, independentemente da forma da superfície.</p>`,
        `<p>A lei de Gauss é conveniente em problemas simétricos, por exemplo uma esfera ou um plano infinito de carga. Em uma superfície adequadamente escolhida, o campo pode ser retirado da integral e o cálculo é simples.</p>`,
        { fig: 'v1v4-gauss', caption: 'O fluxo total através de uma superfície fechada depende apenas da carga no interior da superfície, Φ = Q/ε₀, qualquer que seja a forma da superfície.' }
      ],
      examples: [
        { task: 'Uma carga $Q=1\\,\\mu\\text{C}$ atravessa uma superfície fechada. Qual é o fluxo total através da superfície, se $\\varepsilon_0=8{,}854\\cdot 10^{-12}\\,\\text{F/m}$?',
          steps: ['$\\Phi_E=\\frac{Q}{\\varepsilon_0}=\\frac{10^{-6}}{8{,}854\\cdot 10^{-12}}$.', '$\\Phi_E\\approx 1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$', '<strong>Resultado: aproximadamente $1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$</strong>'] },
        { task: 'A carga no interior da superfície dobra. Como muda o fluxo?',
          steps: ['O fluxo é diretamente proporcional à carga.', '<strong>Resultado: ele dobra</strong>'] }
      ]
    },
    'v3-elektricky-prud': {
      title: 'Corrente elétrica e circuitos elétricos',
      summary: 'Lei de Ohm, resistores em série e em paralelo e a corrente total fornecida pela fonte.',
      theory: [
        `<p>A <strong>corrente elétrica</strong> é a quantidade de carga que atravessa uma seção por unidade de tempo: $I=\\frac{\\Delta Q}{\\Delta t}$, em amperes. O sentido da corrente é convencionado como o sentido do movimento das cargas positivas.</p>`,
        `<p><strong>Lei de Ohm</strong>: a tensão em um condutor é proporcional à corrente, $U=R\\,I$, onde $R$ é a resistência em ohms. Em uma ligação em série as resistências somam-se, $R=R_1+R_2$.</p>`,
        `<p>Em uma <strong>ligação em paralelo</strong> a tensão nos dois ramos é a mesma e as correntes somam-se. A resistência equivalente é menor do que a menor das resistências: $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.</p>`,
        `<p><strong>Por que a resistência em paralelo é menor:</strong> o segundo ramo oferece à corrente outro caminho, por isso, com a mesma tensão, passa uma corrente total maior. A fonte fornece, portanto, mais corrente do que forneceria por um único ramo.</p>`,
        { fig: 'v1v4-paralelne', caption: 'Em uma ligação em paralelo a tensão nos dois ramos é a mesma, e a corrente total I é a soma das correntes dos ramos.' }
      ],
      examples: [
        { task: 'Dois resistores $R_1=6\\,\\Omega$ e $R_2=3\\,\\Omega$ estão ligados em paralelo a uma tensão $U=6\\,\\text{V}$. Qual corrente total a fonte fornece?',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$, logo $R=2\\,\\Omega$.', '$I=\\frac{U}{R}=\\frac{6}{2}$.', '<strong>Resultado: $I=3\\,\\text{A}$</strong>'] },
        { task: 'Resistores de $4\\,\\Omega$ e $6\\,\\Omega$ estão ligados em série a uma tensão de $10\\,\\text{V}$. Qual corrente circula?',
          steps: ['$R=4+6=10\\,\\Omega$.', '$I=\\frac{10}{10}$.', '<strong>Resultado: $I=1\\,\\text{A}$</strong>'] }
      ]
    },
    'v3-magneticke-pole': {
      title: 'Campo magnético e força magnética',
      summary: 'Força de Lorentz sobre uma carga em movimento e sobre um condutor percorrido por corrente em um campo magnético.',
      theory: [
        `<p>A <strong>indução magnética</strong> $\\vec B$ descreve o campo magnético; sua unidade é o tesla, $1\\,\\text{T}=1\\,\\text{N/(A\\,m)}$. O campo exerce força apenas sobre cargas em movimento; uma carga em repouso não reage à força magnética.</p>`,
        `<p>A <strong>força de Lorentz</strong> sobre uma carga $q$ que se move com velocidade $\\vec v$ é $\\vec F=q\\,\\vec v\\times\\vec B$. Seu módulo é $F=q\\,v\\,B\\sin\\alpha$, onde $\\alpha$ é o ângulo entre $\\vec v$ e $\\vec B$.</p>`,
        `<p><strong>O sentido da força</strong> é determinado pela regra da mão direita: os dedos apontam o sentido da velocidade, a palma o sentido do campo, e o polegar o sentido da força para uma carga positiva. Para uma carga negativa, a força tem sentido oposto.</p>`,
        `<p><strong>Por que a força é perpendicular à velocidade:</strong> a força magnética não realiza trabalho; ela apenas muda a direção do movimento. Uma partícula em um campo perpendicular, portanto, descreve um círculo em vez de acelerar. Por isso os campos magnéticos são usados para curvar trajetórias de partículas.</p>`,
        { fig: 'v1v4-lorentz', caption: 'A força de Lorentz sobre uma carga positiva que voa perpendicularmente ao campo é perpendicular tanto à velocidade quanto ao campo. Ela muda a direção do movimento, não sua rapidez.' }
      ],
      examples: [
        { task: 'Um elétron voa perpendicularmente a um campo de indução $B=0{,}2\\,\\text{T}$ com velocidade $v=10^{5}\\,\\text{m/s}$. Qual é o módulo da força, se $q=1{,}6\\cdot 10^{-19}\\,\\text{C}$?',
          steps: ['$\\alpha=90^\\circ$, logo $\\sin\\alpha=1$.', '$F=qvB=1{,}6\\cdot 10^{-19}\\cdot 10^{5}\\cdot 0{,}2$.', '<strong>Resultado: $F=3{,}2\\cdot 10^{-15}\\,\\text{N}$</strong>'] },
        { task: 'Uma partícula com carga $q=2\\,\\mu\\text{C}$ voa com velocidade $v=300\\,\\text{m/s}$ perpendicularmente a um campo $B=0{,}5\\,\\text{T}$. Qual é a força em micronewtons?',
          steps: ['$F=qvB=2\\cdot 300\\cdot 0{,}5$ em unidades de $\\mu\\text{N}$.', '<strong>Resultado: $F=300\\,\\mu\\text{N}$</strong>'] }
      ]
    },
    'v3-indukcia': {
      title: 'Indução eletromagnética',
      summary: 'Lei de Faraday: surge uma tensão quando o fluxo magnético através de uma espira varia.',
      theory: [
        `<p>O <strong>fluxo magnético</strong> através de uma superfície $S$ é $\\Phi=B\\,S\\cos\\alpha$, onde $\\alpha$ é o ângulo entre o campo e a normal à superfície. Sua unidade é o weber, $1\\,\\text{Wb}=1\\,\\text{T\\,m}^2$.</p>`,
        `<p><strong>Lei de indução de Faraday</strong>: em uma espira fechada surge uma tensão proporcional à taxa de variação do fluxo, $U_i=-\\frac{\\Delta\\Phi}{\\Delta t}$. O sinal negativo expressa a lei de Lenz, segundo a qual a corrente induzida se opõe à variação do fluxo.</p>`,
        `<p><strong>Como surge a tensão:</strong> alterando a indução magnética, alterando a área, ou girando a espira no campo. Se o fluxo é constante, não surge tensão, mesmo que o campo seja forte.</p>`,
        `<p><strong>Por que há divisão pelo tempo:</strong> a tensão depende de quão rapidamente o fluxo varia, e não de sua magnitude. Uma variação rápida produz uma tensão maior do que uma lenta, mesmo para a mesma variação total do fluxo.</p>`,
        { fig: 'v1v4-tok-indukcia', caption: 'O fluxo magnético através de uma superfície é Φ = B·S·cos α, onde α é o ângulo entre o campo B e a normal n da superfície.' }
      ],
      examples: [
        { task: 'A área de uma espira $S=0{,}5\\,\\text{m}^2$ está perpendicular a um campo que varia $\\Delta B=4\\,\\text{T}$ em $2\\,\\text{s}$. Qual tensão é induzida?',
          steps: ['$U_i=\\frac{\\Delta\\Phi}{\\Delta t}=\\frac{S\\,\\Delta B}{\\Delta t}=\\frac{0{,}5\\cdot 4}{2}$.', '<strong>Resultado: $U_i=1\\,\\text{V}$</strong>'] },
        { task: 'O fluxo através de uma superfície é constante. Qual tensão é induzida?',
          steps: ['A tensão é proporcional à variação do fluxo, $\\Delta\\Phi=0$.', '<strong>Resultado: $U_i=0\\,\\text{V}$</strong>'] }
      ]
    },
    'v3-maxwell': {
      title: 'Equações de Maxwell',
      summary: 'Quatro equações que ligam os campos elétrico e magnético, e seu uso para um condutor percorrido por corrente.',
      theory: [
        `<p>As <strong>equações de Maxwell</strong> na forma integral são quatro: a lei de Gauss para o campo elétrico, a lei de Gauss para o campo magnético (não existem cargas magnéticas), a lei de indução de Faraday e a lei de Ampère-Maxwell. Juntas descrevem todos os fenômenos eletromagnéticos clássicos.</p>`,
        `<p>A <strong>lei de Ampère-Maxwell</strong> afirma que a circulação do campo magnético ao longo de uma curva fechada é proporcional à corrente que a atravessa e à taxa de variação do fluxo elétrico: $\\oint \\vec B\\cdot d\\vec l=\\mu_0 I+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}$. Em processos estacionários permanece apenas o termo da corrente.</p>`,
        `<p>Da lei de Ampère para um condutor retilíneo longo percorrido pela corrente $I$, à distância $r$, segue que $B=\\frac{\\mu_0 I}{2\\pi r}$, onde $\\mu_0=4\\pi\\cdot 10^{-7}\\,\\text{T\\,m/A}$.</p>`,
        `<p><strong>Por que a corrente de deslocamento é importante:</strong> sem o termo com a variação do fluxo elétrico, a lei não estaria de acordo com a conservação da carga. Maxwell o acrescentou, e das equações decorreu a existência das ondas eletromagnéticas.</p>`,
        { fig: 'v1v4-ampere', caption: 'Ao redor de um condutor retilíneo percorrido por corrente, as linhas de campo da indução magnética são círculos. A indução B diminui com a distância r.' }
      ],
      examples: [
        { task: 'Um condutor retilíneo é percorrido pela corrente $I=10\\,\\text{A}$. Qual é a indução magnética à distância $r=0{,}2\\,\\text{m}$? Dê o resultado em microtesla.',
          steps: ['$B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{4\\pi\\cdot 10^{-7}\\cdot 10}{2\\pi\\cdot 0{,}2}$.', '$B=\\frac{2\\cdot 10^{-7}\\cdot 10}{0{,}2}=10^{-5}\\,\\text{T}$.', '<strong>Resultado: $B=10\\,\\mu\\text{T}$</strong>'] },
        { task: 'Como muda a indução magnética de um condutor percorrido por corrente se a distância até ele for duplicada?',
          steps: ['$B$ é proporcional a $\\frac{1}{r}$.', '<strong>Resultado: ela cai para a metade</strong>'] }
      ]
    },
    'v3-em-vlny': {
      title: 'Ondas eletromagnéticas',
      summary: 'Uma onda como campo elétrico e magnético alternados, perpendiculares à direção de propagação, com a velocidade da luz c.',
      theory: [
        `<p>Um campo elétrico variável cria um campo magnético, e um campo magnético variável cria um campo elétrico. Esse apoio mútuo propaga-se pelo espaço como uma <strong>onda eletromagnética</strong>. No vácuo sua velocidade é $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        `<p>Uma onda tem frequência $f$ e comprimento de onda $\\lambda$. Vale a relação $c=\\lambda\\,f$, da qual segue $\\lambda=\\frac{c}{f}$. Quanto maior a frequência, menor o comprimento de onda.</p>`,
        `<p>O campo elétrico e o campo magnético na onda são perpendiculares entre si, e ambos são perpendiculares à direção de propagação. Por isso a onda eletromagnética é <em>transversal</em>.</p>`,
        `<p><strong>Por que isso importa:</strong> as ondas de rádio, a luz e os raios X são da mesma natureza. Diferem apenas na frequência e, portanto, no comprimento de onda, e seus diferentes usos estão relacionados a isso.</p>`,
        { fig: 'v1v4-em-vlna', caption: 'As componentes elétrica e magnética da onda oscilam em fase, são perpendiculares entre si e ambas são perpendiculares à direção de propagação c.' }
      ],
      examples: [
        { task: 'Um transmissor opera na frequência $f=100\\,\\text{MHz}$. Qual é o comprimento de onda da onda no ar?',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{100\\cdot 10^{6}}$.', '<strong>Resultado: $\\lambda=3\\,\\text{m}$</strong>'] },
        { task: 'O comprimento de onda é $\\lambda=0{,}5\\,\\text{m}$. Qual é a frequência da onda?',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{0{,}5}$.', '<strong>Resultado: $f=6\\cdot 10^{8}\\,\\text{Hz}=600\\,\\text{MHz}$</strong>'] }
      ]
    },
    'v3-sirenie': {
      title: 'Propagação da radiação eletromagnética',
      summary: 'Velocidade da luz em um meio, índice de refração e influência da permissividade e da permeabilidade do meio.',
      theory: [
        `<p>No vácuo a radiação eletromagnética se propaga com velocidade $c$; em um meio sua velocidade é menor. O <strong>índice de refração</strong> $n=\\frac{c}{v}$ indica quantas vezes a velocidade no meio é menor.</p>`,
        `<p>Para um meio não magnético com permissividade relativa $\\varepsilon_r$ e permeabilidade $\\mu_r=1$, temos $n=\\sqrt{\\varepsilon_r\\,\\mu_r}=\\sqrt{\\varepsilon_r}$. Um dielétrico com maior permissividade, portanto, desacelera a onda.</p>`,
        `<p><strong>Por que a onda desacelera:</strong> o campo elétrico da onda polariza os átomos do material, suas oscilações são atrasadas e a onda resultante se propaga mais lentamente. A frequência não muda ao entrar no material; mudam a velocidade e o comprimento de onda.</p>`,
        `<p>Exatamente esse efeito explica a refração da luz na fronteira entre dois meios, bem como o princípio das lentes e das fibras ópticas.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: 'Ao entrar em um material, a velocidade da onda diminui, por isso seu comprimento de onda se encurta. A frequência permanece a mesma.' }
      ],
      examples: [
        { task: 'Um meio tem permissividade relativa $\\varepsilon_r=4$. Qual é seu índice de refração?',
          steps: ['$n=\\sqrt{\\varepsilon_r}=\\sqrt{4}$.', '<strong>Resultado: $n=2$</strong>'] },
        { task: 'Qual é a velocidade da luz em um meio com índice de refração $n=2$, se $c=3\\cdot 10^{8}\\,\\text{m/s}$?',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{2}$.', '<strong>Resultado: $v=1{,}5\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-vlnenie': {
      title: 'Ondas mecânicas e eletromagnéticas',
      summary: 'O que uma onda transporta e por que as ondas mecânicas precisam de um meio material, enquanto as eletromagnéticas não.',
      theory: [
        `<p>Uma onda é a propagação de oscilações pelo espaço. O próprio material não se desloca junto com ela; o que se transfere é <strong>energia</strong> e <strong>informação</strong>. Conforme aquilo que oscila, as ondas se dividem em <strong>mecânicas</strong> (oscila a matéria, p. ex. som, ondas na água, ondas sísmicas) e <strong>eletromagnéticas</strong> (oscila o campo elétrico e magnético, p. ex. luz, ondas de rádio, raios X).</p>`,
        `<p>As ondas mecânicas precisam de um <strong>meio material</strong>, porque cada partícula faz oscilar a vizinha. Por isso o som não se propaga no vácuo. As ondas eletromagnéticas se propagam mesmo no vácuo, pois as oscilações do campo não precisam de nenhuma partícula que as transmita adiante.</p>`,
        `<p>Conforme a direção das oscilações, distinguimos ondas <strong>transversais</strong> (oscilações perpendiculares à direção de propagação, p. ex. onda em uma corda e luz) e ondas <strong>longitudinais</strong> (oscilações na direção de propagação, p. ex. som em gases). A velocidade do som no ar é aproximadamente $340\\,\\text{m/s}$, e a velocidade da luz no vácuo é $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        { fig: 'obr-vlna', caption: 'Onda transversal: o comprimento de onda λ é a distância entre dois pontos vizinhos na mesma fase.' }
      ],
      examples: [
        { task: 'A luz do Sol chega à Terra atravessando o espaço vazio. Trata-se de uma onda mecânica ou eletromagnética?',
          steps: ['Não há matéria entre o Sol e a Terra, logo a onda se propaga no vácuo.', '<strong>Resultado: trata-se de uma onda eletromagnética.</strong>'] },
        { task: 'Por que o som não pode ser ouvido no espaço vazio entre duas naves?',
          steps: ['O som é uma onda mecânica e precisa de um meio material.', 'No vácuo não há partículas, por isso as oscilações não têm a quem transmiti-las.', '<strong>Resultado: o som não se propaga no vácuo.</strong>'] }
      ]
    },
    'v4-frekvencia': {
      title: 'Frequência, comprimento de onda e amplitude',
      summary: 'Grandezas que descrevem uma onda e a relação v = λ·f entre elas.',
      theory: [
        `<p>Uma onda é descrita por três grandezas básicas: a <strong>amplitude</strong> $A$ (o maior deslocamento em relação à posição de equilíbrio), a <strong>frequência</strong> $f$ (o número de oscilações por segundo, unidade $\\text{Hz}$) e o <strong>comprimento de onda</strong> $\\lambda$ (a distância entre dois pontos mais próximos que oscilam em fase).</p>`,
        `<p>O período $T=\\frac{1}{f}$ é o tempo de uma oscilação. A amplitude está relacionada à <em>intensidade</em> da onda (p. ex. o volume do som ou o brilho da luz), enquanto a frequência determina a altura de um tom ou a cor da luz.</p>`,
        `<p>A velocidade de propagação de uma onda é $v=\\lambda\\cdot f$. Ao passar para outro meio, mudam a velocidade e o comprimento de onda, mas <strong>a frequência não muda</strong>: ela é determinada pela fonte das oscilações, e não pelo meio.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: 'Ao entrar em um material, a velocidade da onda diminui, por isso seu comprimento de onda se encurta. A frequência permanece a mesma.' }
      ],
      examples: [
        { task: 'Uma onda tem frequência $f=50\\,\\text{Hz}$ e comprimento de onda $\\lambda=6\\,\\text{m}$. Qual é sua velocidade?',
          steps: ['$v=\\lambda\\cdot f=6\\cdot 50$.', '<strong>Resultado: $v=300\\,\\text{m/s}$</strong>'] },
        { task: 'Qual é o período de uma onda com frequência $f=4\\,\\text{Hz}$?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{4}$.', '<strong>Resultado: $T=0{,}25\\,\\text{s}$</strong>'] }
      ]
    },
    'v4-interferencia': {
      title: 'Interferência e difração',
      summary: 'Soma de ondas: quando elas se reforçam e quando se anulam, e por que as ondas se curvam ao redor de obstáculos.',
      theory: [
        `<p><strong>Princípio da superposição:</strong> a oscilação resultante em um ponto é a soma das oscilações de todas as ondas que chegam ali. Se as ondas oscilam em fase (coerentemente), o resultado depende da <strong>diferença de percurso</strong> $\\Delta d$.</p>`,
        `<p><strong>Reforço</strong> ocorre se a diferença de percurso é um múltiplo inteiro do comprimento de onda: $\\Delta d=m\\,\\lambda$. <strong>Anulação</strong> ocorre se a diferença de percurso é um múltiplo ímpar de meio comprimento de onda: $\\Delta d=\\left(m+\\tfrac{1}{2}\\right)\\lambda$.</p>`,
        `<p><strong>A difração</strong> é a curvatura de uma onda ao redor de um obstáculo ou através de uma fenda estreita. Ela é mais pronunciada se a dimensão do obstáculo for comparável ao comprimento de onda. Por isso o som se curva facilmente ao redor de uma esquina, enquanto a luz produz uma sombra nítida.</p>`,
        { fig: 'v1v4-interferencia', caption: 'Ondas em fase se reforçam com diferença de percurso m·λ; em oposição de fase se anulam em (m + ½)·λ.' }
      ],
      examples: [
        { task: 'Duas ondas coerentes com comprimento de onda $\\lambda=0{,}5\\,\\text{m}$ têm diferença de percurso $\\Delta d=1{,}25\\,\\text{m}$. Ocorre reforço ou anulação?',
          steps: ['$\\frac{\\Delta d}{\\lambda}=\\frac{1{,}25}{0{,}5}=2{,}5$.', 'O número $2{,}5$ é um múltiplo ímpar de meio: $2{,}5=\\left(2+\\tfrac{1}{2}\\right)$.', '<strong>Resultado: anulação.</strong>'] }
      ]
    },
    'v4-polarizacia': {
      title: 'Polarização da luz',
      summary: 'A natureza transversal da luz, o polarizador e a lei de Malus para a intensidade após o analisador.',
      theory: [
        `<p>A luz é uma onda transversal: o campo elétrico oscila perpendicularmente à direção de propagação. A luz <strong>polarizada</strong> tem oscilações em um único plano. Uma fonte comum (uma lâmpada, o Sol) emite luz <strong>não polarizada</strong>, na qual o plano de oscilação muda aleatoriamente.</p>`,
        `<p>Um polarizador deixa passar apenas a componente das oscilações em sua própria direção. Ao atravessar o primeiro polarizador, a luz <strong>não polarizada</strong> tem sua intensidade reduzida à metade.</p>`,
        `<p><strong>Lei de Malus:</strong> se a luz linearmente polarizada de intensidade $I_0$ incide sobre um analisador girado de um ângulo $\\varphi$, a intensidade após ele é $I=I_0\\cos^2\\varphi$. O cosseno está elevado ao quadrado porque só passa a componente do campo na direção do eixo, e a intensidade é proporcional ao quadrado da amplitude.</p>`,
        { fig: 'v1v4-polarizacia', caption: 'O analisador deixa passar apenas a componente das oscilações ao longo de sua própria direção, E·cos φ. A intensidade é proporcional a cos²φ.' }
      ],
      examples: [
        { task: 'Luz linearmente polarizada de intensidade $I_0=80$ atravessa um analisador girado de $60^\\circ$. Qual é sua intensidade após ele?',
          steps: ['$\\cos^2 60^\\circ=\\left(\\tfrac{1}{2}\\right)^2=0{,}25$.', '$I=80\\cdot 0{,}25=20$.', '<strong>Resultado: $I=20$</strong>'] }
      ]
    },
    'v4-geometricka-optika': {
      title: 'Óptica geométrica e óptica ondulatória',
      summary: 'Índice de refração, velocidade da luz em materiais e a lei de Snell da refração.',
      theory: [
        `<p>A <strong>óptica geométrica</strong> descreve a luz como raios que se propagam em linha reta, são refletidos segundo a lei da reflexão ($\\alpha=\\alpha'$) e são refratados na fronteira entre meios. A óptica ondulatória explica fenômenos que os raios não captam, por exemplo a interferência e a difração.</p>`,
        `<p>O <strong>índice de refração</strong> $n=\\frac{c}{v}$ indica quantas vezes a luz é mais lenta em um material do que no vácuo. Na água $n\\approx 1{,}33$, no vidro cerca de $1{,}5$. A velocidade da luz em um material é $v=\\frac{c}{n}$.</p>`,
        `<p><strong>A lei de Snell</strong> $n_1\\sin\\alpha=n_2\\sin\\beta$ indica como um raio é refratado. Ao entrar em um meio opticamente mais denso ($n_2>n_1$), o raio se aproxima da normal; ao entrar em um meio menos denso, afasta-se dela.</p>`,
        { fig: 'v1v4-lom', caption: 'Ao entrar em um meio opticamente mais denso, o raio é refratado em direção à normal, por isso β é menor que α (n₂ > n₁).' }
      ],
      examples: [
        { task: 'Qual é a velocidade da luz em um vidro com índice de refração $n=1{,}5$? Use $c=3\\cdot 10^{8}\\,\\text{m/s}$.',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{1{,}5}$.', '<strong>Resultado: $v=2\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-zobrazovanie': {
      title: 'Formação de imagens por lentes e espelhos',
      summary: 'A equação dos pontos conjugados para uma lente convergente e a determinação da posição da imagem.',
      theory: [
        `<p>Uma lente convergente concentra os raios paralelos em um <strong>foco</strong> à distância $f$. Um objeto à distância $a$ diante da lente forma uma imagem à distância $b$ atrás dela.</p>`,
        `<p>A <strong>equação dos pontos conjugados</strong> vale para lentes delgadas e espelhos: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$. É uma relação entre três grandezas; assim, se conhecemos duas delas, calculamos a terceira.</p>`,
        `<p>Se $a>f$, a imagem é real e invertida. Cuidado com o erro: somamos os inversos, e não as próprias distâncias. A relação $b=a+f$ não vale.</p>`,
        { fig: 'v1v4-zobrazenie', caption: 'Um objeto situado no dobro da distância focal gera uma imagem real, invertida e do mesmo tamanho, à distância 2f.' }
      ],
      examples: [
        { task: 'Um objeto está à distância $a=30\\,\\text{cm}$ diante de uma lente convergente de distância focal $f=15\\,\\text{cm}$. Onde se forma a imagem?',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{15}-\\frac{1}{30}=\\frac{1}{30}$.', '<strong>Resultado: $b=30\\,\\text{cm}$</strong>'] }
      ]
    },
    'v4-lasery': {
      title: 'Lasers e instrumentos ópticos',
      summary: 'Propriedades da luz laser, cálculo da frequência e a ampliação de uma lupa.',
      theory: [
        `<p>Um <strong>laser</strong> (amplificação da luz por emissão estimulada de radiação) produz luz com propriedades que as fontes comuns não têm: é <strong>monocromática</strong> (um único comprimento de onda), <strong>coerente</strong> (oscilações em fase) e forma um <strong>feixe estreito</strong>. Por isso pode ser focalizada em um ponto pequeno.</p>`,
        `<p>Para qualquer luz vale $c=\\lambda\\cdot f$, logo a frequência é $f=\\frac{c}{\\lambda}$. Na óptica, o comprimento de onda costuma ser dado em nanômetros: $1\\,\\text{nm}=10^{-9}\\,\\text{m}$.</p>`,
        `<p><strong>Instrumentos ópticos</strong> usam lentes para ampliar. Uma lupa de distância focal $f$ fornece, para observação confortável, uma ampliação $Z=\\frac{d}{f}$, onde $d\\approx 250\\,\\text{mm}$ é a distância de visão distinta. Uma distância focal menor significa maior ampliação.</p>`
      ],
      examples: [
        { task: 'A luz de um laser vermelho tem comprimento de onda $\\lambda=650\\,\\text{nm}$. Qual é sua frequência em unidades de $10^{14}\\,\\text{Hz}$?',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{650\\cdot 10^{-9}}\\approx 4{,}6\\cdot 10^{14}\\,\\text{Hz}$.', '<strong>Resultado: aproximadamente $4{,}6\\cdot 10^{14}\\,\\text{Hz}$</strong>'] }
      ]
    },
    'v4-vlakna': {
      title: 'Fundamentos das fibras ópticas',
      summary: 'Reflexão total na fronteira entre o núcleo e a casca, e o ângulo crítico.',
      theory: [
        `<p>Uma fibra óptica conduz a luz dentro de um núcleo fino com índice de refração $n_1$, envolto por uma casca com índice menor $n_2&lt;n_1$. A luz é mantida no núcleo por <strong>reflexão total</strong>, e não por refração, por isso quase não se perde.</p>`,
        `<p>A reflexão total ocorre se o ângulo de incidência ultrapassar o <strong>ângulo crítico</strong> $\\alpha_c$, para o qual vale $\\sin\\alpha_c=\\frac{n_2}{n_1}$. Para uma diferença maior entre os índices, o ângulo crítico é menor e a fibra capta mais luz.</p>`,
        `<p>O sinal é transmitido por pulsos de luz. As fibras são usadas na internet e nas telecomunicações, porque a luz pode transportar muita informação a longas distâncias e não é perturbada por campos eletromagnéticos.</p>`,
        { fig: 'v1v4-vlakno', caption: 'A luz é mantida no núcleo por reflexão total, pois incide com um ângulo maior que o ângulo crítico, onde sin α_c = n₂/n₁.' }
      ],
      examples: [
        { task: 'O núcleo de uma fibra tem $n_1=1{,}5$ e a casca $n_2=1{,}0$. Qual é o seno do ângulo crítico?',
          steps: ['$\\sin\\alpha_c=\\frac{n_2}{n_1}=\\frac{1{,}0}{1{,}5}$.', '<strong>Resultado: $\\sin\\alpha_c\\approx 0{,}67$</strong>'] }
      ]
    }
  }
});
