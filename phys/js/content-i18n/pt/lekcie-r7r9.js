/* Português: lekcie 7.–9. ročníka (js/rocniky/r7.js, r8.js, r9.js). Štruktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('pt', {
  lessons: {
    'r7-pohyb': {
      title: 'Movimento dos corpos e a sua descrição',
      summary: 'Movimento e repouso são relativos e dependem do referencial.',
      theory: [
        `<p>Movimento e repouso são <strong>relativos</strong>: dependem daquilo em relação ao qual os avaliamos. O corpo, em relação ao qual descrevemos o movimento, chama-se
       <strong>corpo de referência</strong>. Junto com relógios forma um <strong>referencial</strong>.</p>`,
        `<p>Passageiro sentado num trem em movimento está em repouso em relação ao trem, mas move-se em relação às árvores ao lado da linha. Ambas as afirmações são verdadeiras,
       cada uma num referencial diferente. Por isso, ao descrever o movimento, dizemos sempre em relação a quê o descrevemos.</p>`,
        `<ul>
         <li><strong>Trajetória</strong>: linha que o corpo descreve durante o movimento.</li>
         <li><strong>Caminho percorrido</strong> $s$: comprimento da trajetória entre dois lugares. Mede-se em metros.</li>
         <li><strong>Ponto material</strong>: corpo cujas dimensões desprezamos ao descrever o movimento.</li>
       </ul>`,
        `<p>Caminho percorrido é o comprimento de todo o percurso, e não a distância entre o início e o fim. Se andarmos 3 m para leste e depois 4 m para norte,
       o caminho percorrido é $7\\,\\text{m}$, embora a distância do ponto de partida seja só $5\\,\\text{m}$.</p>`,
        { fig: 'obr-draha', caption: 'O caminho percorrido é o percurso inteiro; a distância é a reta entre o início e o fim.' }
      ],
      examples: [
        { task: 'Um passageiro está sentado num trem rápido. Está em repouso ou em movimento?',
          steps: ['Em relação ao trem, no qual está sentado, não se move.', 'Em relação às árvores ao lado da linha, move-se.', '<strong>Resultado: em repouso em relação ao trem, em movimento em relação ao meio envolvente.</strong>'] },
        { task: 'Um pedestre andou 3 m para leste e depois 4 m para norte. Qual é o seu caminho percorrido?',
          steps: ['O caminho percorrido é o comprimento de todo o percurso, por isso somamos os dois trechos.', '$s = 3\\,\\text{m} + 4\\,\\text{m} = 7\\,\\text{m}$', '<strong>Resultado: 7 m</strong>'] }
      ]
    },
    'r7-draha': {
      title: 'Caminho percorrido, tempo e velocidade média',
      summary: 'Cálculo da velocidade, do caminho e do tempo e conversão entre m/s e km/h.',
      theory: [
        `<p><strong>Velocidade</strong> indica que caminho um corpo percorre na unidade de tempo. Fórmula: $v=\\frac{s}{t}$, onde $s$ é o caminho percorrido e $t$ o tempo.
       A unidade no SI é $\\text{m/s}$; no trânsito rodoviário usa-se $\\text{km/h}$.</p>`,
        `<p>Desta fórmula derivamos mais duas: $s=v\\cdot t$ e $t=\\frac{s}{v}$. Antes de calcular, verifique sempre as unidades.
       Se o caminho estiver em quilômetros e o tempo em minutos, temos de converter uma das grandezas.</p>`,
        `<ul>
         <li>$1\\,\\text{m/s}=3{,}6\\,\\text{km/h}$: de metros por segundo para quilômetros por hora multiplicamos por $3{,}6$.</li>
         <li>$1\\,\\text{km/h}=\\frac{1}{3{,}6}\\,\\text{m/s}$: de quilômetros por hora para metros por segundo dividimos por $3{,}6$.</li>
       </ul>`,
        `<p><strong>Velocidade média</strong> não é igual à média das velocidades. Calcula-se como caminho total dividido pelo tempo total:
       $v_p=\\frac{s_{\\text{celk}}}{t_{\\text{celk}}}$. Se um carro parou durante algum tempo num trecho, a sua velocidade média é menor do que a velocidade máxima.</p>`,
        { fig: 'obr-draha', caption: 'O caminho percorrido é o percurso inteiro; a distância é a reta entre o início e o fim.' }
      ],
      examples: [
        { task: 'Um carro percorreu $120\\,\\text{km}$ em $2\\,\\text{h}$. Qual foi a sua velocidade média?',
          steps: ['$v=\\frac{s}{t}=\\frac{120}{2}$', '$v=60\\,\\text{km/h}$', '<strong>Resultado: 60 km/h</strong>'] },
        { task: 'Um ciclista move-se a $5\\,\\text{m/s}$. Qual é essa velocidade em $\\text{km/h}$?',
          steps: ['Para converter de m/s para km/h multiplicamos por 3,6.', '$5\\cdot 3{,}6=18\\,\\text{km/h}$', '<strong>Resultado: 18 km/h</strong>'] }
      ]
    },
    'r7-rovnomerny': {
      title: 'Movimento uniforme e não uniforme',
      summary: 'Quando a velocidade não muda e como calcular um movimento cuja velocidade muda.',
      theory: [
        `<p><strong>Movimento uniforme</strong>: o corpo percorre o mesmo caminho em cada intervalo de tempo igual, portanto a sua velocidade não muda.
       No gráfico do caminho em função do tempo é uma reta, e o seu declive corresponde à velocidade.</p>`,
        `<p><strong>Movimento não uniforme</strong>: a velocidade muda, o corpo acelera ou desacelera. Exemplo é um trem que arranca ou uma pedra que cai ao chão.</p>`,
        `<p>Para o movimento uniforme vale a fórmula $s=v\\cdot t$, onde $v$ é a velocidade constante. Para o movimento não uniforme podemos usar a
       <strong>velocidade média</strong>: caminho total dividido pelo tempo total. Mostra apenas o resultado global, e não como a velocidade mudava.</p>`,
        `<ol>
         <li>Se o corpo percorre caminhos iguais em tempos iguais, o movimento é uniforme.</li>
         <li>Se os caminhos percorridos em tempos iguais mudam, o movimento é não uniforme.</li>
         <li>Velocidade média nunca calculamos como média de duas velocidades.</li>
       </ol>`,
        { fig: 'r6r9-rovnomerny', caption: 'No movimento uniforme o gráfico do caminho em função do tempo é uma reta, e o seu declive é a velocidade. Ao acelerar torna-se uma curva.' }
      ],
      examples: [
        { task: 'Um pedestre caminha a uma velocidade constante de $4\\,\\text{km/h}$. Que caminho percorre em $3\\,\\text{h}$?',
          steps: ['O movimento é uniforme, por isso $s=v\\cdot t$.', '$s=4\\cdot 3=12\\,\\text{km}$', '<strong>Resultado: 12 km</strong>'] },
        { task: 'Um corpo percorre 5 m a cada segundo. Que tipo de movimento é e que caminho percorre em 6 s?',
          steps: ['Em tempos iguais percorre caminhos iguais, o movimento é uniforme.', '$s = 5\\cdot 6 = 30\\,\\text{m}$', '<strong>Resultado: movimento uniforme, 30 m</strong>'] }
      ]
    },
    'r7-sila': {
      title: 'Força e os seus efeitos',
      summary: 'O que é força, quais são os seus efeitos e como se somam forças com a mesma ou com a direção oposta.',
      theory: [
        `<p><strong>Força</strong> é a interação mútua entre corpos. Não vemos a força, vemos os seus efeitos. Representa-se por $F$ e a sua unidade é o newton: $1\\,\\text{N}$.</p>`,
        `<ul>
         <li>Pode <strong>mudar a velocidade</strong> de um corpo: pô-lo em movimento, abrandá-lo ou pará-lo.</li>
         <li>Pode <strong>mudar a direção</strong> do movimento, por exemplo quando a bicicleta faz uma curva.</li>
         <li>Pode <strong>mudar a forma</strong> de um corpo: apertar uma esponja ou esticar um elástico.</li>
       </ul>`,
        `<p>Força é um <strong>vetor</strong>: tem intensidade, direção e ponto de aplicação. Representamo-la por uma seta. Se atuam num corpo forças na mesma direção,
       somamo-las. Se atuam em direções opostas, subtraímos a menor da maior e a força resultante tem a direção da maior.</p>`,
        `<p>Forças surgem sempre em pares: se a mão empurra uma parede, a parede empurra a mão com uma força igualmente grande e de direção oposta.
       Estas duas forças, porém, atuam em corpos diferentes, por isso não se anulam.</p>`,
        { fig: 'obr-sily', caption: 'Forças atuando num corpo sobre uma superfície horizontal: força de tração F, atrito Ftr e a força normal da superfície N.' }
      ],
      examples: [
        { task: 'Dois alunos puxam um carrinho na mesma direção com forças de $30\\,\\text{N}$ e $20\\,\\text{N}$. Qual é a força resultante?',
          steps: ['As forças têm a mesma direção, por isso as somamos.', '$30 + 20 = 50$', '<strong>Resultado: 50 N</strong>'] },
        { task: 'O mesmo carrinho é puxado pelo primeiro aluno com uma força de $30\\,\\text{N}$ para a direita e pelo segundo com uma força de $20\\,\\text{N}$ para a esquerda. Qual é a força resultante?',
          steps: ['As forças têm direções opostas, por isso as subtraímos.', '$30 - 20 = 10$, a força resultante aponta para a direita.', '<strong>Resultado: 10 N para a direita</strong>'] }
      ]
    },
    'r7-tiaz': {
      title: 'Força gravitacional e peso',
      summary: 'Por que os corpos caem na Terra e em que se diferencia a massa do peso.',
      theory: [
        `<p>Todos os corpos se atraem mutuamente com uma <strong>força gravitacional</strong>. Quanto maiores forem as massas e quanto mais próximos estiverem os corpos, maior é a força de atração.
       A gravidade da Terra nos mantém na sua superfície, e a Lua orbita a Terra.</p>`,
        `<p><strong>Peso</strong> $F_G$ é a força com que a Terra atrai um corpo para si. Calculamo-lo pela fórmula $F_G=m\\cdot g$, onde $m$ é a massa em quilogramas
       e $g$ a aceleração gravitacional. Na Terra é $g\\approx 10\\,\\text{N/kg}$ (mais precisamente $9{,}81\\,\\text{N/kg}$).</p>`,
        `<p><strong>Massa e peso não são a mesma coisa.</strong> A massa em quilogramas indica quanta matéria o corpo contém, e é igual em todo lugar.
       O peso em newtons depende do lugar. Na Lua é $g\\approx 1{,}6\\,\\text{N/kg}$, por isso um corpo de massa $5\\,\\text{kg}$ pesa lá cerca de $8\\,\\text{N}$.</p>`,
        `<ul>
         <li>Peso é uma força, mede-se com um dinamômetro em newtons.</li>
         <li>Massa mede-se com a balança em quilogramas.</li>
       </ul>`,
        { fig: 'r6r9-tiaz', caption: 'A mesma massa tem menor peso na Lua, porque a aceleração gravitacional ali é menor.' }
      ],
      examples: [
        { task: 'Qual é o peso de um corpo de massa $4\\,\\text{kg}$ na Terra? Use $g=10\\,\\text{N/kg}$.',
          steps: ['$F_G=m\\cdot g$', '$F_G=4\\cdot 10=40\\,\\text{N}$', '<strong>Resultado: 40 N</strong>'] },
        { task: 'Um corpo tem peso de $60\\,\\text{N}$ na Terra. Qual é a sua massa?',
          steps: ['$m=\\frac{F_G}{g}$', '$m=\\frac{60}{10}=6\\,\\text{kg}$', '<strong>Resultado: 6 kg</strong>'] }
      ]
    },
    'r7-trenie': {
      title: 'Atrito e resistência do meio',
      summary: 'Quando o atrito é maior, como o aumentar ou diminuir e o que trava os corpos nos líquidos e nos gases.',
      theory: [
        `<p><strong>Atrito</strong> surge na superfície de contacto de dois corpos e atua contra o movimento, ou contra a tentativa de movimento. Por isso a caixa que empurramos pelo chão
       para quando deixamos de empurrar.</p>`,
        `<ul>
         <li>Atrito é maior quanto mais ásperas forem as superfícies.</li>
         <li>Atrito é maior quanto mais forte o corpo pressiona a base.</li>
         <li>Atrito não depende do tamanho da superfície de contacto.</li>
       </ul>`,
        `<p><strong>Resistência do meio</strong> (ar, água) trava o movimento do corpo. Depende da forma do corpo, da sua velocidade e da densidade do meio.
       Paraquedas tem grande resistência do ar, por isso cai devagar. Nadador de corpo liso oferece à água menor resistência.</p>`,
        `<p>Atrito por vezes queremos aumentar, por exemplo nos pneus na estrada ou ao andar. Outras vezes queremos diminuí-lo, por exemplo nos rolamentos.
       O lubrificante cria entre as superfícies uma camada fina e assim reduz o atrito.</p>`,
        { fig: 'obr-sily', caption: 'Forças atuando num corpo sobre uma superfície horizontal: força de tração F, atrito Ftr e a força normal da superfície N.' }
      ],
      examples: [
        { task: 'Uma caixa é puxada por uma força de $300\\,\\text{N}$ no sentido do movimento, e o atrito é $120\\,\\text{N}$ contra o movimento. Qual é a força resultante no sentido do movimento?',
          steps: ['O atrito atua contra o movimento, por isso o subtraímos.', '$300-120=180$', '<strong>Resultado: 180 N</strong>'] },
        { task: 'Qual método aumenta o atrito: pneus com piso mais rugoso ou lubrificante no rolamento?',
          steps: ['Pneus com piso mais rugoso têm superfície mais áspera, o atrito aumenta.', 'O lubrificante entre as superfícies reduz o atrito.', '<strong>Resultado: pneus com piso mais rugoso</strong>'] }
      ]
    },
    'r7-svetlo': {
      title: 'Luz e a sua propagação',
      summary: 'Propagação retilínea da luz, velocidade da luz, sombras e eclipses.',
      theory: [
        `<p>Luz é radiação eletromagnética que percebemos com a visão. Uma fonte de luz emite luz em todas as direções.
       Um corpo que não emite luz por si vemo-lo porque reflete luz para os nossos olhos.</p>`,
        `<p>Num mesmo meio a luz se propaga <strong>em linha reta</strong>. Por isso atrás de um objeto opaco surge uma sombra: o objeto encobre a luz atrás de si.
       Uma fonte grande de luz produz também penumbra, onde ilumina apenas uma parte da fonte.</p>`,
        `<p>A velocidade da luz no vácuo é $c=300\\,000\\,\\text{km/s}$, isto é $3\\cdot 10^8\\,\\text{m/s}$. No ar é quase a mesma,
       na água e no vidro é menor. A luz da Lua chega até nós em cerca de $1{,}3\\,\\text{s}$, a do Sol em cerca de 8 minutos.</p>`,
        `<p>Eclipse do Sol ocorre quando a Lua fica entre o Sol e a Terra e projeta a sua sombra na Terra. Eclipse da Lua ocorre quando a Terra fica entre o Sol e a Lua.</p>`,
        { fig: 'r6r9-zatmenie', caption: 'Num eclipse solar a Lua fica entre o Sol e a Terra e projeta a sua sombra na Terra.' }
      ],
      examples: [
        { task: 'A luz propaga-se com a velocidade de $300\\,000\\,\\text{km/s}$. Que distância percorre em $10\\,\\text{s}$?',
          steps: ['$s=c\\cdot t$', '$s=300\\,000\\cdot 10=3\\,000\\,000\\,\\text{km}$', '<strong>Resultado: 3 000 000 km</strong>'] },
        { task: 'Por que atrás de uma árvore ao sol surge uma sombra?',
          steps: ['A árvore é opaca e a luz se propaga em linha reta.', 'A luz não pode atravessar a árvore, por isso atrás dela fica escuridão.', '<strong>Resultado: a árvore encobre a luz, porque ela se propaga em linha reta</strong>'] }
      ]
    },
    'r7-odraz': {
      title: 'Reflexão e refração da luz',
      summary: 'Lei da reflexão, ângulos medidos em relação à normal e desvio do raio ao entrar noutro meio.',
      theory: [
        `<p>Um raio de luz incide na superfície de separação de dois meios. Uma parte reflete-se de volta, outra passa para o segundo meio.
       Os ângulos medimos sempre em relação à <strong>normal</strong>, isto é, à reta perpendicular à superfície, e não em relação à superfície.</p>`,
        `<p><strong>Lei da reflexão:</strong> o ângulo de incidência $\\alpha$ é igual ao ângulo de reflexão $\\beta$, isto é $\\alpha=\\beta$.
       O raio refletido está no plano formado pelo raio incidente e pela normal.</p>`,
        `<ul>
         <li>Ao passar para um meio em que a luz é mais lenta (p. ex. do ar para a água), o raio se <strong>aproxima da normal</strong>.</li>
         <li>Ao passar para um meio em que a luz é mais rápida (p. ex. da água para o ar), o raio se <strong>afasta da normal</strong>.</li>
       </ul>`,
        `<p>Por isso um lápis mergulhado num copo com água parece quebrado, e o fundo de uma piscina parece mais raso do que realmente é.</p>`,
        { fig: 'obr-odraz', caption: 'Na reflexão da luz num espelho plano vale a lei da reflexão.' }
      ],
      examples: [
        { task: 'Um raio incide num espelho plano formando com a normal um ângulo de $35^\\circ$. Que ângulo forma o raio refletido com a normal?',
          steps: ['Pela lei da reflexão, o ângulo de reflexão é igual ao ângulo de incidência.', '$\\beta=\\alpha=35^\\circ$', '<strong>Resultado: 35°</strong>'] },
        { task: 'Um raio incide no espelho de modo que forma com a superfície do espelho um ângulo de $60^\\circ$. Qual é o ângulo de incidência em relação à normal?',
          steps: ['Ângulos medem-se em relação à normal, não em relação à superfície.', '$\\alpha = 90^\\circ - 60^\\circ = 30^\\circ$', '<strong>Resultado: 30°</strong>'] }
      ]
    },
    'r7-zrkadla': {
      title: 'Espelhos, lentes e fenômenos ópticos',
      summary: 'Imagem num espelho plano, lente convergente e divergente e fenômenos como o arco-íris ou a miragem.',
      theory: [
        `<p><strong>Espelho plano</strong> cria uma imagem aparente (virtual): vemo-la atrás do espelho e não pode ser captada num anteparo.
       A imagem é igualmente grande, direita e tão distante atrás do espelho quanto o objeto está à frente dele.</p>`,
        `<p>Se estiveres a $2\\,\\text{m}$ do espelho, a tua imagem fica a $4\\,\\text{m}$ de ti. A distância entre o objeto e a sua imagem
       é o dobro da distância do objeto ao espelho.</p>`,
        `<p><strong>Lentes</strong> desviam a luz. A <strong>lente convergente</strong> é mais espessa no centro e junta os raios paralelos num ponto (foco).
       A <strong>lente divergente</strong> é mais fina no centro e espalha os raios. A lente convergente usa-se na lupa, na máquina fotográfica e nos óculos para hipermetropia.</p>`,
        `<p><strong>Fenômenos ópticos:</strong> o arco-íris surge pela decomposição da luz branca em gotas de água. A miragem surge pela refração da luz no ar quente
       sobre uma estrada aquecida, por isso vemos o reflexo do céu como se fosse água no chão.</p>`,
        { fig: 'r6r9-zrkadlo', caption: 'A imagem num espelho plano é virtual e fica atrás do espelho tão longe quanto o objeto está à frente dele.' }
      ],
      examples: [
        { task: 'Um objeto está em frente de um espelho plano a $3\\,\\text{m}$. Qual é a distância entre o objeto e a sua imagem?',
          steps: ['A imagem atrás do espelho está tão distante quanto o objeto à frente dele.', '$3\\,\\text{m}+3\\,\\text{m}=6\\,\\text{m}$', '<strong>Resultado: 6 m</strong>'] },
        { task: 'Qual lente junta raios paralelos num ponto?',
          steps: ['Junta os raios num ponto a lente mais espessa no centro.', 'Lente mais espessa no centro é a convergente.', '<strong>Resultado: lente convergente</strong>'] }
      ]
    },
    'r8-praca': {
      title: 'Trabalho mecânico e potência',
      summary: 'Quando a força realiza trabalho, como o calcular e com que rapidez ele é realizado.',
      theory: [
        `<p><strong>Trabalho mecânico</strong> é realizado quando uma força atua num corpo e o corpo se desloca na direção dessa força.
       Se não movemos o corpo, o trabalho é nulo: empurrar uma parede não realiza trabalho algum.</p>`,
        `<p>O trabalho calculamos pela fórmula $W = F\\cdot s$, onde $F$ é a força em newtons (N) e $s$ o caminho em metros (m).
       A unidade do trabalho é o <strong>joule</strong> (J): $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$.</p>`,
        `<p><strong>Potência</strong> indica quão depressa se realiza trabalho. Calcula-se como trabalho dividido pelo tempo: $P = \\frac{W}{t}$,
       onde $t$ é o tempo em segundos. A unidade da potência é o <strong>watt</strong> (W): $1\\,\\text{W} = 1\\,\\text{J/s}$.
       Dois motores podem realizar o mesmo trabalho, mas o mais potente o faz em menos tempo.</p>`,
        `<ol>
         <li>Determina a força e o caminho em N e m.</li>
         <li>Multiplica-os: $W = F\\cdot s$.</li>
         <li>Se perguntam pela potência, divide o resultado pelo tempo: $P = W : t$.</li>
       </ol>`,
        { fig: 'r6r9-praca', caption: 'Trabalho se realiza só quando o corpo se move na direção da força. Empurrar uma parede que não se move não realiza trabalho.' }
      ],
      examples: [
        { task: 'Dois rapazes empurram um carrinho com força $F = 150\\,\\text{N}$ e deslocam-no $s = 8\\,\\text{m}$. Que trabalho foi realizado?',
          steps: ['Substituímos na fórmula: $W = F\\cdot s = 150\\cdot 8$.', '<strong>Resultado: W = 1200 J</strong>'] },
        { task: 'Um motor de elevação realiza trabalho $W = 3000\\,\\text{J}$ em $t = 20\\,\\text{s}$. Qual é a sua potência?',
          steps: ['$P = \\frac{W}{t} = \\frac{3000}{20}$.', '<strong>Resultado: P = 150 W</strong>'] }
      ]
    },
    'r8-mechanicka-energia': {
      title: 'Energia mecânica e as suas transformações',
      summary: 'Energia é a capacidade de realizar trabalho e transforma-se de uma forma noutra.',
      theory: [
        `<p><strong>Energia</strong> é a capacidade de um corpo realizar trabalho. Representa-se por $E$ e a sua unidade é igual à do trabalho: joule (J).
       Energia não se pode criar do nada nem destruir. Pode apenas transformar-se de uma forma noutra.</p>`,
        `<p><strong>Lei da conservação da energia:</strong> a energia total de um sistema isolado não muda. Se uma forma de energia diminui,
       outra aumenta do mesmo valor.</p>`,
        `<ul>
         <li>Pedra que cai de uma altura: energia potencial transforma-se em cinética.</li>
         <li>Pêndulo que volta a subir: energia cinética transforma-se outra vez em potencial.</li>
         <li>Carro com travões: energia cinética transforma-se em energia interna (calor).</li>
       </ul>`,
        `<p>Por causa do atrito, parte da energia mecânica transforma-se sempre em calor. A energia não se perde, apenas se dispersa no ambiente
       e dificilmente pode ser aproveitada.</p>`,
        { fig: 'obr-energia', caption: 'Ao deslizar sem atrito, a energia potencial transforma-se em cinética e vice-versa.' }
      ],
      examples: [
        { task: 'O que acontece com a energia quando um livro cai da mesa para o chão?',
          steps: ['Sobre a mesa o livro tem energia potencial. Durante a queda move-se, tem portanto energia cinética.', 'No embate parte da energia transforma-se em som e calor.', '<strong>Resultado: energia potencial transforma-se em cinética, sonora e térmica.</strong>'] },
        { task: 'Que transformação de energia ocorre ao travar uma bicicleta?',
          steps: ['A bicicleta se move, tem energia cinética.', 'Os travões, por atrito contra a jante, geram calor.', '<strong>Resultado: energia cinética transforma-se em energia interna (calor).</strong>'] }
      ]
    },
    'r8-polohova-pohybova': {
      title: 'Energia potencial e cinética',
      summary: 'Cálculo da energia de um corpo numa altura e em movimento.',
      theory: [
        `<p><strong>Energia potencial gravitacional</strong> tem um corpo elevado acima do solo. Quanto mais pesado e mais alto, maior é a energia.
       Calcula-se $E_p = m\\cdot g\\cdot h$, onde $m$ é a massa em quilogramas, $g \\approx 10\\,\\text{m/s}^2$ a aceleração gravitacional
       e $h$ a altura em metros.</p>`,
        `<p><strong>Energia cinética</strong> tem um corpo que se move. Calcula-se $E_k = \\frac{1}{2}\\,m\\,v^2$,
       onde $v$ é a velocidade em m/s. A velocidade está elevada ao quadrado, por isso o dobro da velocidade significa quatro vezes mais energia cinética.</p>`,
        `<p>Estas energias dependem da massa, da altura e da velocidade, e não da forma do corpo. Por isso um carro a alta velocidade trava com mais dificuldade:
       tem muito mais energia cinética.</p>`,
        `<ol>
         <li>Determina a massa em kg, a altura em m ou a velocidade em m/s.</li>
         <li>Escolhe a fórmula conforme o corpo esteja elevado ou em movimento.</li>
         <li>Substitui e calcula; o resultado sai em joules.</li>
       </ol>`,
        { fig: 'r6r9-kinetika', caption: 'A energia cinética cresce com o quadrado da velocidade: o dobro da velocidade significa quatro vezes mais energia.' }
      ],
      examples: [
        { task: 'Uma pedra com massa $m = 2\\,\\text{kg}$ está no telhado de uma casa alta de $h = 5\\,\\text{m}$. Qual é a sua energia potencial com $g = 10\\,\\text{m/s}^2$?',
          steps: ['$E_p = m\\cdot g\\cdot h = 2\\cdot 10\\cdot 5$.', '<strong>Resultado: E_p = 100 J</strong>'] },
        { task: 'Um carrinho com massa $m = 4\\,\\text{kg}$ move-se com velocidade $v = 3\\,\\text{m/s}$. Qual é a sua energia cinética?',
          steps: ['$E_k=\\frac{1}{2}\\,m\\,v^2=\\frac{1}{2}\\cdot 4\\cdot 3^2$.', '$\\frac{1}{2}\\cdot 4 = 2$ e $3^2 = 9$, portanto $E_k = 2\\cdot 9$.', '<strong>Resultado: E_k = 18 J</strong>'] }
      ]
    },
    'r8-jednoduche-stroje': {
      title: 'Máquinas simples',
      summary: 'Alavanca, roldana e plano inclinado facilitam o trabalho, mas não encurtam o caminho.',
      theory: [
        `<p><strong>Máquinas simples</strong> (alavanca, roldana, plano inclinado) permitem levantar uma carga maior com uma força menor.
       Vale porém a regra de ouro da mecânica: o trabalho não se pode poupar. Força menor compramo-la com um caminho maior.</p>`,
        `<p><strong>Alavanca</strong> é uma barra que gira em torno de um eixo. A distância da força ao eixo é o <em>braço</em> da força $r$.
       A alavanca está em equilíbrio quando $F_1\\cdot r_1 = F_2\\cdot r_2$. Braço maior significa força necessária menor.</p>`,
        `<p><strong>Roldanas:</strong> roldana fixa apenas muda a direção da força. Roldana móvel reduz a força para metade, mas o caminho
       duplica. <strong>Plano inclinado:</strong> quanto menor a inclinação, menor a força necessária, mas o caminho é mais longo.</p>`,
        `<ol>
         <li>Identifica qual força é a carga e qual força puxa.</li>
         <li>Mede os braços (distâncias ao eixo).</li>
         <li>Usa o equilíbrio da alavanca e calcula a força desconhecida.</li>
       </ol>`,
        { fig: 'obr-paka', caption: 'A alavanca está em equilíbrio quando o produto da força e do braço de um lado é igual ao produto do outro lado.' }
      ],
      examples: [
        { task: 'Numa alavanca com braço da força $r_1 = 2\\,\\text{m}$ levantamos a carga com força $F_2 = 300\\,\\text{N}$ com braço $r_2 = 0{,}5\\,\\text{m}$. Com que força atuamos no braço $r_1$?',
          steps: ['Equilíbrio: $F_1\\cdot r_1 = F_2\\cdot r_2$.', '$F_1 = \\frac{F_2\\cdot r_2}{r_1} = \\frac{300\\cdot 0{,}5}{2}$.', '<strong>Resultado: F_1 = 75 N</strong>'] },
        { task: 'Com uma roldana móvel levantamos uma carga de peso $200\\,\\text{N}$. Com que força puxamos, se desprezarmos o atrito?',
          steps: ['A roldana móvel reduz a força para metade: $F = \\frac{200}{2}$.', '<strong>Resultado: F = 100 N, mas é preciso puxar num caminho duas vezes maior.</strong>'] }
      ]
    },
    'r8-vnutorna-energia': {
      title: 'Energia interna e transferência de calor',
      summary: 'Energia interna do corpo, transferência de calor e cálculo do calor necessário para aquecer.',
      theory: [
        `<p>Cada corpo tem <strong>energia interna</strong>. É formada pelas energias cinéticas e potenciais das suas partículas (átomos e moléculas).
       Quanto mais depressa se movem as partículas, mais quente é o corpo e maior é a sua energia interna.</p>`,
        `<p><strong>Calor</strong> é a energia que os corpos trocam entre si quando há diferença de temperatura. Passa sempre do corpo mais quente
       para o mais frio, até as temperaturas se igualarem. Calor não é propriedade do corpo, mas energia transferida.</p>`,
        `<ul>
         <li><strong>Condução:</strong> o calor passa de partícula em partícula, por exemplo a colher dentro de um chá quente.</li>
         <li><strong>Convecção:</strong> ar ou água aquecidos sobem, por exemplo junto ao radiador.</li>
         <li><strong>Irradiação:</strong> o calor passa também sem material, por exemplo do Sol.</li>
       </ul>`,
        `<p>A quantidade de calor para aquecer calculamo-la pela relação $Q = m\\cdot c\\cdot \\Delta t$. O valor $c$ é o calor específico:
       para a água $c = 4200\\,\\text{J/(kg\\cdot K)}$. A variação de temperatura $\\Delta t$ é a diferença entre a temperatura final e a inicial.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: 'O calor flui do corpo mais quente para o mais frio. Transfere-se por condução, convecção ou irradiação.' }
      ],
      examples: [
        { task: 'Quanto calor é preciso para aquecer $m = 2\\,\\text{kg}$ de água em 10 °C? Use $c = 4200\\,\\text{J/(kg\\cdot K)}$.',
          steps: ['$Q = m\\cdot c\\cdot \\Delta t = 2\\cdot 4200\\cdot 10$.', '<strong>Resultado: Q = 84 000 J = 84 kJ</strong>'] },
        { task: 'Um chá quente numa caneca vai arrefecendo. De que modo transmite calor ao ambiente?',
          steps: ['O calor do chá passa pela parede da caneca por condução.', 'O ar quente sobre a caneca sobe, isso é convecção. O calor também é irradiado.', '<strong>Resultado: por condução, convecção e irradiação.</strong>'] }
      ]
    },
    'r8-naboj': {
      title: 'Carga elétrica',
      summary: 'Dois tipos de carga, eletrização por atrito e carga do elétron.',
      theory: [
        `<p>Todos os corpos são formados por átomos. O átomo tem um núcleo com carga positiva e elétrons com carga negativa.
       <strong>Carga elétrica</strong> é uma propriedade dos corpos que se manifesta por ação de forças. Representa-se por $Q$ e a sua unidade é o coulomb (C).</p>`,
        `<p>Existem dois tipos de carga: positiva e negativa. Cargas iguais repelem-se, opostas atraem-se.
       Um corpo neutro tem igual número de cargas positivas e negativas.</p>`,
        `<p><strong>Eletrização por atrito:</strong> ao esfregar, elétrons passam de um corpo para o outro. O corpo que ganha elétrons fica com carga negativa.
       O que os perde fica positivo. A carga não se pode criar nem destruir, apenas transferir.</p>`,
        `<ul>
         <li>A carga elementar $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$ é a carga de um elétron.</li>
         <li>A carga de um corpo com $n$ elétrons a mais é $Q = -n\\,e$; com $n$ elétrons a menos é $Q = +n\\,e$.</li>
       </ul>`,
        { fig: 'r6r9-naboj', caption: 'Cargas iguais repelem-se, cargas opostas atraem-se.' }
      ],
      examples: [
        { task: 'Um corpo perdeu 3 elétrons. Que carga tem, em múltiplos da carga elementar $e$?',
          steps: ['Ao perder elétrons, fica com falta de carga negativa, por isso o corpo é positivo.', 'A carga é $Q = +3e$.', '<strong>Resultado: +3e</strong>'] },
        { task: 'Duas esferas repelem-se depois de se tocarem. O que isso significa para as suas cargas?',
          steps: ['A repulsão ocorre só com cargas iguais.', '<strong>Resultado: as duas esferas têm carga do mesmo sinal.</strong>'] }
      ]
    },
    'r8-prud-napatie': {
      title: 'Corrente elétrica e tensão elétrica',
      summary: 'Corrente como carga por tempo, tensão como força que impulsiona as cargas e a sua medição.',
      theory: [
        `<p><strong>Corrente elétrica</strong> é o movimento ordenado de partículas carregadas, nos metais sobretudo de elétrons. Representa-se por $I$ e a sua unidade é o ampere (A).
       Se pela secção do condutor passar a carga $Q$ no tempo $t$, a corrente é $I = \\frac{Q}{t}$. Daí $1\\,\\text{A} = 1\\,\\text{C/s}$.</p>`,
        `<p>Por convenção, o sentido da corrente indica-se como movimento da carga positiva do polo positivo da fonte para o negativo. Os elétrons movem-se em sentido oposto.</p>`,
        `<p><strong>Tensão elétrica</strong> $U$ é a diferença de potencial que impulsiona os elétrons no circuito. A fonte (bateria) a cria entre os seus terminais.
       A unidade é o volt (V).</p>`,
        `<ol>
         <li>A corrente medimos com o <strong>amperímetro</strong>, ligado em série com o aparelho.</li>
         <li>A tensão medimos com o <strong>voltímetro</strong>, ligado em paralelo ao aparelho.</li>
       </ol>`,
        { fig: 'r6r9-merania', caption: 'O amperímetro liga-se em série com o aparelho, e o voltímetro em paralelo com ele.' }
      ],
      examples: [
        { task: 'Pelo condutor passa em $t = 10\\,\\text{s}$ a carga $Q = 20\\,\\text{C}$. Qual é a corrente?',
          steps: ['$I = \\frac{Q}{t} = \\frac{20}{10}$.', '<strong>Resultado: I = 2 A</strong>'] },
        { task: 'Que aparelho mede a corrente e que aparelho mede a tensão, e como se ligam?',
          steps: ['A corrente mede-a o amperímetro, ligado em série.', 'A tensão mede-a o voltímetro, ligado em paralelo.', '<strong>Resultado: amperímetro mede a corrente, voltímetro mede a tensão.</strong>'] }
      ]
    },
    'r8-odpor': {
      title: 'Circuito elétrico e resistência elétrica',
      summary: 'O que forma um circuito e como a resistência trava a corrente.',
      theory: [
        `<p><strong>Circuito elétrico</strong> é um caminho fechado por onde passa corrente. É formado por fonte, aparelhos, condutores e interruptor.
       Se o circuito estiver interrompido (por exemplo com o interruptor aberto), a corrente não circula.</p>`,
        `<p><strong>Resistência elétrica</strong> $R$ trava o movimento dos elétrons no condutor. Surge pelas colisões com os átomos da substância.
       A unidade é o ohm ($\\Omega$). A resistência depende do material, do comprimento, da secção e da temperatura do condutor.</p>`,
        `<p>Entre tensão, corrente e resistência vale a relação $R = \\frac{U}{I}$. Com a mesma tensão, maior resistência significa menor corrente.</p>`,
        `<ol>
         <li>Determina a tensão $U$ em volts e a corrente $I$ em ampères.</li>
         <li>Calcula a resistência por $R = \\frac{U}{I}$.</li>
       </ol>`,
        { fig: 'r6r9-odpor', caption: 'Com a mesma tensão, maior resistência deixa passar menos corrente: a 12 V a corrente é 6 A com 2 Ω e 2 A com 6 Ω.' }
      ],
      examples: [
        { task: 'Uma lâmpada ligada à tensão $U = 12\\,\\text{V}$ é percorrida pela corrente $I = 2\\,\\text{A}$. Qual é a sua resistência?',
          steps: ['$R = \\frac{U}{I} = \\frac{12}{2}$.', '<strong>Resultado: R = 6 Ω</strong>'] },
        { task: 'Qual condutor trava mais a corrente: o de maior ou o de menor resistência?',
          steps: ['Maior resistência significa que os elétrons passam com mais dificuldade.', '<strong>Resultado: condutor de maior resistência.</strong>'] }
      ]
    },
    'r8-vodice': {
      title: 'Condutores e isolantes elétricos',
      summary: 'Quais substâncias conduzem corrente e porquê, e para que se usam.',
      theory: [
        `<p><strong>Condutor</strong> é uma substância em que os elétrons se podem mover livremente. Típicos condutores são os metais, como cobre, alumínio
       e ferro, e também a grafite. <strong>Isolante</strong> (não condutor) tem elétrons firmemente presos e não conduz corrente: por exemplo plástico, borracha, vidro ou madeira seca.</p>`,
        `<ul>
         <li>Metal: bom condutor, usa-se para conduzir corrente.</li>
         <li>Plástico e borracha: isolantes, usam-se como revestimento dos condutores.</li>
         <li>Solução de sal em água: conduz corrente, porque nela se movem partículas carregadas.</li>
         <li>Água destilada pura: praticamente isolante.</li>
       </ul>`,
        `<p>Os condutores usamos para transportar corrente, por exemplo o cobre nos cabos. Os isolantes os revestem, para não tocarmos num condutor sob tensão
       e para que a corrente não passe por onde não deve.</p>`,
        `<p>Os semicondutores, por exemplo o silício, estão entre condutores e isolantes. Conduzem corrente só sob certas condições, por isso se usam na eletrônica.</p>`,
        { fig: 'r6r9-vodice', caption: 'Condutores têm elétrons livres e conduzem corrente. Isolantes têm elétrons firmemente presos e não conduzem corrente.' }
      ],
      examples: [
        { task: 'Por que é que o fio de cobre é revestido de plástico?',
          steps: ['O cobre conduz corrente, o plástico não é condutor.', 'O plástico impede o contacto com o condutor e a fuga de corrente.', '<strong>Resultado: o plástico é isolante e protege contra acidentes.</strong>'] },
        { task: 'Conduz corrente a água salgada?',
          steps: ['O sal dissolve-se na água e forma partículas carregadas, que podem transportar carga.', '<strong>Resultado: a solução de sal conduz corrente, é condutora.</strong>'] }
      ]
    },
    'r8-bezpecnost': {
      title: 'Segurança ao usar aparelhos elétricos',
      summary: 'Regras que protegem contra choques elétricos e incêndios.',
      theory: [
        `<p>A corrente elétrica que atravessa o corpo pode causar queimaduras, problemas cardíacos ou morte. Por isso cumprimos regras de segurança.
       O perigo é maior quando a pele está molhada, porque a água aumenta a condução da corrente.</p>`,
        `<ul>
         <li>Não toques em aparelhos elétricos com as mãos molhadas nem no chão molhado.</li>
         <li>Não uses cabos e fichas danificados; nunca puxes pelo fio.</li>
         <li>Não enfies objetos nas tomadas, sobretudo metálicos.</li>
         <li>Em caso de avaria, desliga o aparelho da tomada e chama um técnico.</li>
       </ul>`,
        `<p><strong>Fusível</strong> ou <strong>disjuntor</strong> interrompe o circuito quando a corrente é muito alta, por exemplo num curto-circuito ou numa sobrecarga.
       Assim evitam o sobreaquecimento dos condutores e um incêndio.</p>`,
        `<p><strong>Ligação à terra:</strong> as carcaças metálicas dos aparelhos são ligadas à terra. Em caso de avaria, a carcaça não fica sob tensão e o toque não é perigoso.</p>`
      ],
      examples: [
        { task: 'O Pedro tirou a ficha da tomada com a mão molhada. O que é perigoso nessa situação?',
          steps: ['A água na pele aumenta a condução e a corrente pode atravessar o corpo.', '<strong>Resultado: risco de choque elétrico. Nunca peguem na ficha com as mãos molhadas.</strong>'] },
        { task: 'Que elemento protege o condutor de sobreaquecer num curto-circuito?',
          steps: ['Num curto-circuito a corrente é muito grande e o condutor aquece rapidamente.', 'O fusível queima-se ou o disjuntor desliga o circuito.', '<strong>Resultado: fusível ou disjuntor.</strong>'] }
      ]
    },
    'r9-obvody': {
      title: 'Circuitos elétricos e as suas propriedades',
      summary: 'Fonte, consumidor, interruptor e condutores num circuito fechado.',
      theory: [
        `<p><strong>Circuito elétrico</strong> é formado por uma fonte (pilha, bateria), consumidores (lâmpada, resistor, motor), interruptor e condutores.
       A corrente circula só quando o circuito está <strong>fechado</strong>, isto é, quando se consegue percorrer toda a malha desde um polo da fonte até ao outro.</p>`,
        `<ul>
         <li><strong>Fonte</strong> fornece energia às partículas carregadas.</li>
         <li><strong>Consumidor</strong> transforma a energia elétrica noutra forma: luz, calor ou movimento.</li>
         <li><strong>Interruptor</strong> fecha ou abre o circuito.</li>
         <li><strong>Condutores</strong> ligam os componentes num todo.</li>
       </ul>`,
        `<p>O circuito desenha-se com um <strong>esquema</strong>, em que cada componente tem o seu símbolo. O esquema mostra como os componentes estão ligados,
       e não como são na realidade.</p>`,
        `<p>Quando abrimos o interruptor, o circuito se interrompe: a corrente não circula e a lâmpada apaga. O circuito funciona, portanto, só quando está fechado por completo.</p>`,
        { fig: 'obr-obvod', caption: 'Ligação em série e em paralelo de consumidores numa mesma fonte.' }
      ],
      examples: [
        { task: 'O que acontece com a lâmpada quando abrimos o interruptor?',
          steps: ['O circuito se interrompe e a corrente não circula.', '<strong>Resultado: a lâmpada apaga.</strong>'] },
        { task: 'Qual componente do circuito transforma energia elétrica em luz?',
          steps: ['A luz surge no filamento da lâmpada.', '<strong>Resultado: lâmpada (consumidor).</strong>'] }
      ]
    },
    'r9-zapojenie': {
      title: 'Ligação em série e em paralelo',
      summary: 'Como varia a resistência total quando os resistores são ligados um atrás do outro ou lado a lado.',
      theory: [
        `<p>Dois resistores ligamos <strong>em série</strong> (um atrás do outro) ou <strong>em paralelo</strong> (lado a lado).
       Em série a corrente tem de atravessar ambos os resistores. Em paralelo a corrente divide-se em dois ramos.</p>`,
        `<ul>
         <li><strong>Ligação em série:</strong> a corrente é igual em todo o circuito, a tensão divide-se entre os resistores.
             A resistência total é a soma: $R = R_1 + R_2$.</li>
         <li><strong>Ligação em paralelo:</strong> a tensão é igual nos dois ramos, a corrente divide-se.
             Vale $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$.</li>
       </ul>`,
        `<p>Em paralelo a resistência total é sempre <strong>menor</strong> do que a menor das resistências dos ramos. A razão é lógica:
       cada ramo adicional é mais um caminho para a corrente. Por isso aparelhos ligados em paralelo numa casa retiram da rede elétrica uma corrente maior.</p>`,
        `<ol>
         <li>Verifica se os resistores estão um atrás do outro (série) ou lado a lado (paralelo).</li>
         <li>Em série somamos as resistências; em paralelo somamos os seus inversos.</li>
       </ol>`,
        { fig: 'obr-obvod', caption: 'Ligação em série e em paralelo de consumidores numa mesma fonte.' }
      ],
      examples: [
        { task: 'Os resistores $R_1 = 6\\,\\Omega$ e $R_2 = 3\\,\\Omega$ estão ligados em paralelo. Qual é a resistência total?',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{6}+\\frac{2}{6}=\\frac{3}{6}$.', '$R=\\frac{6}{3}=2\\,\\Omega$.', '<strong>Resultado: R = 2 Ω</strong>'] },
        { task: 'Os resistores $R_1 = 4\\,\\Omega$ e $R_2 = 5\\,\\Omega$ estão ligados em série. Qual é a resistência total?',
          steps: ['Em série somam-se as resistências: $R = R_1 + R_2$.', '<strong>Resultado: R = 9 Ω</strong>'] }
      ]
    },
    'r9-vypocty': {
      title: 'Cálculos de corrente, tensão e resistência elétrica',
      summary: 'Conhecendo duas grandezas, calculamos a terceira.',
      theory: [
        `<p>No circuito há três grandezas básicas: a corrente $I$ (A), a tensão $U$ (V) e a resistência $R$ (Ω). Se conhecemos duas delas, podemos calcular a terceira.
       As relações são $I=\\frac{U}{R}$, $U=I\\cdot R$ e $R=\\frac{U}{I}$.</p>`,
        `<ol>
         <li>Escreve o que é dado e o que procuramos.</li>
         <li>Escolhe a fórmula em que a grandeza procurada fica isolada.</li>
         <li>Substitui as unidades V, A e Ω; na conversão usa os múltiplos.</li>
         <li>Verifica as unidades do resultado.</li>
       </ol>`,
        `<p><strong>Cuidado com as unidades:</strong> $1\\,\\text{mA}=0{,}001\\,\\text{A}$ e $1\\,\\text{k}\\Omega=1000\\,\\Omega$. Se o dado vier em miliampères ou quiloohms,
       primeiro converte-o para a unidade básica.</p>`,
        { fig: 'r6r9-trojuholnik', caption: 'Tapa a grandeza procurada e o resto mostra a fórmula, por exemplo U = I · R.' }
      ],
      examples: [
        { task: 'Na resistência $R = 4\\,\\Omega$ a tensão é $U = 12\\,\\text{V}$. Que corrente passa por ela?',
          steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Resultado: I = 3 A</strong>'] },
        { task: 'Um aparelho é percorrido pela corrente $I = 0{,}5\\,\\text{A}$ a uma tensão $U = 230\\,\\text{V}$. Qual é a sua resistência?',
          steps: ['$R=\\frac{U}{I}=\\frac{230}{0{,}5}$.', 'Dividir por um número decimal: $\\frac{230}{0{,}5}=\\frac{460}{1}$.', '<strong>Resultado: R = 460 Ω</strong>'] }
      ]
    },
    'r9-ohmov-zakon': {
      title: 'Lei de Ohm',
      summary: 'A corrente é proporcional à tensão e inversamente proporcional à resistência.',
      theory: [
        `<p><strong>Lei de Ohm</strong> diz: a corrente que passa por um condutor é diretamente proporcional à tensão e inversamente proporcional à resistência.
       Escreve-se $I=\\frac{U}{R}$, à temperatura constante do condutor.</p>`,
        `<ul>
         <li>Com resistência constante: duplicar a tensão duplica a corrente.</li>
         <li>Com tensão constante: duplicar a resistência reduz a corrente para metade.</li>
       </ul>`,
        `<p>A dependência da corrente em relação à tensão, para resistência constante, é no gráfico uma <strong>reta que passa pela origem</strong>.
       Uma reta mais inclinada significa menor resistência, porque à mesma tensão passa mais corrente.</p>`,
        `<p>A lei vale exatamente para condutores metálicos a temperatura constante. Com forte aquecimento a resistência do metal aumenta, por isso a dependência já não é linear.</p>`,
        { fig: 'obr-ohm', caption: 'Com resistência constante, o gráfico da tensão em função da corrente é uma reta que passa pela origem.' }
      ],
      examples: [
        { task: 'A tensão numa resistência aumentou de $4\\,\\text{V}$ para $12\\,\\text{V}$. A resistência não mudou. Quantas vezes aumentou a corrente?',
          steps: ['A razão das tensões é $\\frac{12}{4}=3$.', 'A corrente é diretamente proporcional à tensão, por isso também aumenta $3$ vezes.', '<strong>Resultado: 3 vezes</strong>'] },
        { task: 'Com a tensão de $230\\,\\text{V}$, um resistor consome a corrente $2\\,\\text{A}$. Que corrente consome com o dobro da resistência e a mesma tensão?',
          steps: ['A resistência é o dobro; a corrente é inversamente proporcional à resistência.', '$I_2 = \\frac{I_1}{2} = \\frac{2}{2}$.', '<strong>Resultado: 1 A</strong>'] }
      ]
    },
    'r9-praca-vykon': {
      title: 'Trabalho e potência elétrica',
      summary: 'Quanta energia um aparelho consome num tempo e como se calcula em kWh.',
      theory: [
        `<p><strong>Potência elétrica</strong> é $P=U\\cdot I$ e a sua unidade é o watt (W). Indica quanta energia o aparelho transforma por segundo.
       Se conhecemos a resistência, vale também $P=I^2\\,R$ ou $P=\\frac{U^2}{R}$.</p>`,
        `<p><strong>Trabalho elétrico</strong> (energia consumida) é $W=P\\cdot t=U\\cdot I\\cdot t$, onde $t$ é o tempo em segundos. A unidade é o joule (J),
       porque $1\\,\\text{W}\\cdot 1\\,\\text{s}=1\\,\\text{J}$.</p>`,
        `<p>Em casa a energia é faturada em <strong>quilowatts-hora</strong> (kWh). Calculamo-la como potência em quilowatts vezes o tempo em horas:
       $E = P\\cdot t$, sendo $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<ol>
         <li>Potência em quilowatts: $1000\\,\\text{W} = 1\\,\\text{kW}$.</li>
         <li>Energia em kWh: potência em kW vezes o tempo em horas.</li>
       </ol>`
      ],
      examples: [
        { task: 'Uma lâmpada ligada à tensão $230\\,\\text{V}$ é percorrida pela corrente $0{,}5\\,\\text{A}$. Qual é a sua potência?',
          steps: ['$P = U\\cdot I = 230\\cdot 0{,}5$.', '<strong>Resultado: P = 115 W</strong>'] },
        { task: 'Uma máquina de lavar tem potência $2\\,\\text{kW}$ e trabalha $1{,}5\\,\\text{h}$. Quanta energia consome em kWh?',
          steps: ['$E = P\\cdot t = 2\\cdot 1{,}5$.', '<strong>Resultado: E = 3 kWh</strong>'] }
      ]
    },
    'r9-magnetizmus': {
      title: 'Campo magnético e efeitos magnéticos da corrente',
      summary: 'À volta do condutor com corrente forma-se um campo magnético, cuja direção se determina pela regra da mão direita.',
      theory: [
        `<p>À volta do condutor percorrido por corrente elétrica forma-se um <strong>campo magnético</strong>. A ligação entre eletricidade e magnetismo
       descobriu em 1820 o físico dinamarquês Ørsted: quando se ligou a corrente num condutor próximo, a agulha de uma bússola se desviou.</p>`,
        `<p>O <strong>sentido do campo</strong> determina-se pela regra da mão direita: o polegar aponta o sentido da corrente e os dedos dobrados apontam o sentido das linhas do campo à volta do condutor.
       Se invertermos o sentido da corrente, inverte-se também o sentido do campo.</p>`,
        `<p>Se o condutor for enrolado numa <strong>bobina</strong>, os campos das espiras somam-se e dentro da bobina surge um campo mais forte.
       O campo aumenta com corrente maior ou com maior número de espiras.</p>`,
        `<ul>
         <li>Sem corrente não há campo magnético à volta do condutor.</li>
         <li>O campo magnético exerce força sobre ímãs e sobre outros condutores com corrente.</li>
         <li>Mais longe do condutor o campo é mais fraco.</li>
       </ul>`,
        { fig: 'obr-magnet-vodic', caption: 'À volta de um condutor com corrente existe campo magnético em forma de circunferências em torno do condutor.' }
      ],
      examples: [
        { task: 'Como muda o sentido do campo magnético à volta do condutor se invertermos o sentido da corrente?',
          steps: ['O sentido do campo depende do sentido da corrente (regra da mão direita).', '<strong>Resultado: o sentido do campo passa a ser o oposto.</strong>'] },
        { task: 'Por que a agulha de uma bússola se desvia perto de um condutor com corrente?',
          steps: ['A agulha da bússola é um pequeno ímã, que se orienta no campo magnético.', '<strong>Resultado: à volta do condutor com corrente existe um campo magnético, que atua sobre a agulha.</strong>'] }
      ]
    },
    'r9-elektromagnet': {
      title: 'Eletroímã e motor elétrico',
      summary: 'Bobina com núcleo como ímã temporário e motor, que transforma energia elétrica em movimento.',
      theory: [
        `<p><strong>Eletroímã</strong> é uma bobina com núcleo de ferro doce. Quando pela bobina passa corrente, o núcleo fica magnetizado.
       Depois de desligar a corrente, o magnetismo desaparece. A força do eletroímã aumenta com corrente maior ou com mais espiras.</p>`,
        `<p><strong>Motor elétrico</strong> transforma energia elétrica em energia de movimento (mecânica). Aproveita a ação de força do campo magnético sobre o condutor com corrente:
       a bobina no campo magnético gira.</p>`,
        `<ul>
         <li>O eletroímã usa-se em campainhas, relés e ímãs de elevação em depósitos de sucata.</li>
         <li>O motor elétrico aciona a máquina de lavar, a furadeira ou o ventilador.</li>
       </ul>`,
        `<ol>
         <li>A corrente passa pela bobina do motor.</li>
         <li>O campo magnético exerce força sobre os condutores da bobina.</li>
         <li>A bobina gira.</li>
         <li>O comutador inverte o sentido da corrente, para que a bobina continue a girar.</li>
       </ol>`,
        { fig: 'r6r9-elektromagnet', caption: 'Uma bobina com núcleo de ferro é magnética apenas quando a corrente passa por ela.' }
      ],
      examples: [
        { task: 'Por que o eletroímã num depósito de sucata levanta ferro, mas, depois de desligar a corrente, o solta?',
          steps: ['Com a corrente ligada o núcleo é magnético e atrai o ferro.', 'Depois de desligar a corrente o campo magnético desaparece.', '<strong>Resultado: o magnetismo do eletroímã depende da corrente.</strong>'] },
        { task: 'Que transformação de energia ocorre num motor elétrico de máquina de lavar?',
          steps: ['A energia elétrica passa pelas bobinas do motor.', 'Surge a rotação do tambor.', '<strong>Resultado: energia elétrica em energia de movimento (mecânica).</strong>'] }
      ]
    },
    'r9-premeny-zdroje': {
      title: 'Transformações e fontes de energia',
      summary: 'Como a energia se transforma nas centrais e em que se diferenciam as fontes renováveis das não renováveis.',
      theory: [
        `<p>A energia pode transformar-se de uma forma noutra. As fontes de energia dividimos em <strong>renováveis</strong>, que se renovam naturalmente
       (sol, vento, água, biomassa, energia geotérmica), e <strong>não renováveis</strong>, cujas reservas se gastam
       (carvão, petróleo, gás natural, combustível nuclear).</p>`,
        `<ul>
         <li><strong>Central a carvão:</strong> energia química do combustível, térmica, mecânica (turbina), elétrica.</li>
         <li><strong>Central hidrelétrica:</strong> energia potencial da água, cinética, mecânica (turbina), elétrica.</li>
         <li><strong>Painel solar:</strong> a energia radiante do Sol transforma-se em elétrica.</li>
         <li><strong>Aerogerador:</strong> energia cinética do vento, mecânica, elétrica.</li>
       </ul>`,
        `<p>Em cada transformação parte da energia passa a calor e dispersa-se no ambiente. A energia total conserva-se,
       mas a energia útil diminui.</p>`,
        { fig: 'r6r9-elektrarna', caption: 'Uma central a carvão transforma, passo a passo, a energia química do combustível em térmica, mecânica e elétrica.' }
      ],
      examples: [
        { task: 'Que transformação de energia realiza um painel solar?',
          steps: ['O painel recebe energia radiante do Sol.', 'Transforma-a em energia elétrica.', '<strong>Resultado: energia radiante em elétrica.</strong>'] },
        { task: 'Por que o carvão é uma fonte não renovável?',
          steps: ['Formou-se durante milhões de anos a partir de plantas.', 'Consumimo-lo mais depressa do que se regenera.', '<strong>Resultado: é não renovável, porque não se regenera a tempo.</strong>'] }
      ]
    },
    'r9-energia-priroda': {
      title: 'Energia na natureza e na técnica',
      summary: 'Rendimento de um dispositivo e energia que não se consegue aproveitar.',
      theory: [
        `<p>O <strong>rendimento</strong> de um dispositivo indica que parte da energia fornecida se transforma em trabalho ou energia útil:
       $\\eta = \\frac{E_u}{E_d}\\cdot 100\\,\\%$, onde $E_u$ é a energia útil e $E_d$ a energia fornecida.</p>`,
        `<p>O rendimento é sempre menor do que 100 %. Parte da energia transforma-se em calor, que se dispersa no ambiente.
       A lâmpada incandescente tem rendimento baixo, porque a maior parte da energia emite como calor.</p>`,
        `<ul>
         <li>A lâmpada LED é mais eficiente do que a lâmpada clássica, porque transforma em calor menos energia.</li>
         <li>No motor de combustão do carro, grande parte da energia do combustível perde-se como calor.</li>
       </ul>`,
        `<p>A energia na natureza não desaparece, apenas se dispersa como calor, que dificilmente se aproveita. Por isso o ser humano procura aumentar o rendimento das máquinas.</p>`,
        { fig: 'r6r9-ucinnost', caption: 'O rendimento é a razão entre a energia útil e a energia fornecida. O restante perde-se como calor.' }
      ],
      examples: [
        { task: 'Um motor recebe $400\\,\\text{J}$ e transforma $100\\,\\text{J}$ em movimento. Qual é o seu rendimento?',
          steps: ['$\\eta = \\frac{100}{400}\\cdot 100\\,\\%$.', '$\\eta = 0{,}25\\cdot 100\\,\\% = 25\\,\\%$.', '<strong>Resultado: 25 %</strong>'] },
        { task: 'Um aquecedor com rendimento de $90\\,\\%$ recebe $1000\\,\\text{J}$. Quanta energia se perde?',
          steps: ['A energia útil é $0{,}9\\cdot 1000 = 900\\,\\text{J}$.', 'O restante perde-se: $1000 - 900 = 100\\,\\text{J}$.', '<strong>Resultado: 100 J</strong>'] }
      ]
    },
    'r9-opakovanie': {
      title: 'Revisão e tarefas práticas de física',
      summary: 'Resumo das fórmulas do 9.º ano e procedimento para resolver tarefas práticas.',
      theory: [
        `<p>Em cada tarefa, primeiro escreve o que é dado e o que procuramos. Depois escolhe a fórmula, converte as unidades e substitui.
       No fim verifica as unidades do resultado e se o valor é razoável.</p>`,
        `<ol>
         <li>Identifica o fenômeno: circuito elétrico, energia, potência, magnetismo.</li>
         <li>Escolhe a fórmula correta.</li>
         <li>Converte as unidades (mA para A, kW para W, minutos para segundos, kWh para J).</li>
         <li>Substitui, calcula e verifica as unidades.</li>
       </ol>`,
        `<ul>
         <li>Lei de Ohm: $I=\\frac{U}{R}$, $U=I\\cdot R$, $R=\\frac{U}{I}$.</li>
         <li>Potência e trabalho: $P=U\\cdot I$, $W=P\\cdot t$.</li>
         <li>Energia potencial: $E_p=m\\,g\\,h$, com $g\\approx 10\\,\\text{m/s}^2$.</li>
         <li>Rendimento: $\\eta=\\frac{E_u}{E_d}\\cdot 100\\,\\%$.</li>
       </ul>`
      ],
      examples: [
        { task: 'Um motor com potência $1500\\,\\text{W}$ funciona durante $2\\,\\text{h}$. Que energia consome em kWh?',
          steps: ['Potência em quilowatts: $1500\\,\\text{W} = 1{,}5\\,\\text{kW}$.', '$E = P\\cdot t = 1{,}5\\cdot 2 = 3$.', '<strong>Resultado: E = 3 kWh</strong>'] },
        { task: 'Um corpo com massa $3\\,\\text{kg}$ está a uma altura de $4\\,\\text{m}$. Qual é a sua energia potencial com $g = 10\\,\\text{m/s}^2$?',
          steps: ['$E_p = m\\,g\\,h = 3\\cdot 10\\cdot 4$.', '<strong>Resultado: E_p = 120 J</strong>'] }
      ]
    }
  }
});
