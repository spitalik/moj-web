/* Português (Brasil): lições 1.º–4.º ano do ensino médio (js/rocniky/s1.js, s2.js, s3.js, s4.js). Estrutura e chaves: js/content-i18n.js. */
CONTENT_I18N.add('pt', {
  lessons: {
    's1-veliciny': {
      title: 'Grandezas físicas, unidades e medição',
      summary: 'Número e unidade, o Sistema Internacional (SI), prefixos e conversões de unidades.',
      theory: [
        `<p>Uma grandeza física é uma propriedade de um corpo ou de um fenômeno que podemos <strong>medir</strong> e expressar como um número com uma unidade. Por exemplo, o comprimento $s = 12\\,\\text{m}$: o número $12$ indica quantas vezes usamos a unidade, e $\\text{m}$ indica qual unidade usamos. Um valor sem unidade não tem significado.</p>`,
        `<p>O Sistema Internacional de Unidades (SI) tem sete unidades de base. Para este nível bastam estas: metro $\\text{m}$ (comprimento), quilograma $\\text{kg}$ (massa), segundo $\\text{s}$ (tempo) e kelvin $\\text{K}$ (temperatura). As unidades derivadas formam-se combinando as unidades de base: a velocidade tem unidade $\\text{m/s}$ e a força $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$.</p>`,
        `<p><strong>Prefixos</strong> encurtam a escrita de números muito grandes e muito pequenos. Por exemplo $1\\,\\text{km}=10^3\\,\\text{m}$, $1\\,\\text{cm}=10^{-2}\\,\\text{m}$ e $1\\,\\text{g}=10^{-3}\\,\\text{kg}$. Ao converter, basta saber quantas vezes a nova unidade é maior ou menor e, em seguida, multiplicar ou dividir de acordo.</p>`,
        `<p>Toda medição tem um <strong>erro</strong>, por isso escrevemos o resultado com um número adequado de algarismos significativos e sempre indicamos a unidade. A notação $s = 12{,}0\\,\\text{m}$ diz mais do que $s = 12\\,\\text{m}$, porque indica precisão até a décima de metro.</p>`
      ],
      examples: [
        { task: 'Converta $3{,}5\\,\\text{km}$ para metros.',
          steps: ['O prefixo k significa mil, portanto $1\\,\\text{km}=10^3\\,\\text{m}$.', '$3{,}5\\cdot 10^3\\,\\text{m}=3500\\,\\text{m}$.', '<strong>Resultado: 3500 m</strong>'] },
        { task: 'Quantos segundos há em $2\\,\\text{h}$?',
          steps: ['Uma hora tem $60\\,\\text{min}$ e um minuto tem $60\\,\\text{s}$.', 'Portanto, uma hora tem $60\\cdot 60=3600\\,\\text{s}$.', '$2\\,\\text{h}=2\\cdot 3600\\,\\text{s}=7200\\,\\text{s}$.', '<strong>Resultado: 7200 s</strong>'] }
      ]
    },
    's1-pohyb': {
      title: 'Movimento uniforme e movimento não uniforme',
      summary: 'Distância, tempo e velocidade; velocidade média quando o movimento muda.',
      theory: [
        `<p>Descrevemos o movimento de um corpo em relação a algum <strong>corpo de referência</strong>. A distância $s$ é o comprimento do caminho percorrido pelo corpo, e o tempo $t$ é a duração do movimento. A <strong>velocidade média</strong> é a razão entre a distância e o tempo: $\\bar v=\\frac{s}{t}$, unidade $\\text{m/s}$ ou $\\text{km/h}$.</p>`,
        `<p><strong>Movimento uniforme</strong> é o movimento com velocidade constante. Em tempos iguais o corpo percorre distâncias iguais, por isso vale $s=v\\,t$. No gráfico distância-tempo ele é representado por uma reta.</p>`,
        `<p><strong>Movimento não uniforme</strong> significa que a velocidade muda. A velocidade média de todo o percurso não é a média aritmética das velocidades, mas a distância total dividida pelo tempo total: $\\bar v=\\frac{s_1+s_2}{t_1+t_2}$.</p>`,
        `<p><strong>Por que é assim?</strong> Se dirigirmos 2 horas a $60\\,\\text{km/h}$ e depois 1 hora a $30\\,\\text{km/h}$, percorremos $120+30=150\\,\\text{km}$ em $3$ horas. A média das velocidades daria $45\\,\\text{km/h}$, mas a velocidade média real é $50\\,\\text{km/h}$, porque andamos mais rápido por mais tempo.</p>`,
        { fig: "s1s4-priemerna-rychlost", caption: "A área sob o gráfico v–t é a distância. A velocidade média é a distância total dividida pelo tempo total, e não a média das velocidades." }
      ],
      examples: [
        { task: 'Um carro percorre $120\\,\\text{km}$ em $2\\,\\text{h}$. Qual é a sua velocidade média?',
          steps: ['$\\bar v=\\frac{s}{t}=\\frac{120\\,\\text{km}}{2\\,\\text{h}}$.', '<strong>Resultado: 60 km/h</strong>'] },
        { task: 'Um ciclista pedala por $2\\,\\text{h}$ a $20\\,\\text{km/h}$ e depois por $2\\,\\text{h}$ a $10\\,\\text{km/h}$. Qual é a velocidade média?',
          steps: ['Primeiro trecho: $s_1=20\\cdot 2=40\\,\\text{km}$; segundo trecho: $s_2=10\\cdot 2=20\\,\\text{km}$.', 'No total, $60\\,\\text{km}$ em $4\\,\\text{h}$.', '<strong>Resultado: 15 km/h</strong>'] }
      ]
    },
    's1-zrychlenie': {
      title: 'Velocidade e aceleração',
      summary: 'Variação da velocidade no tempo e movimento uniformemente acelerado.',
      theory: [
        `<p><strong>Aceleração</strong> é a variação da velocidade por unidade de tempo: $a=\\frac{\\Delta v}{\\Delta t}=\\frac{v-v_0}{t}$. Sua unidade é $\\text{m/s}^2$. Se a velocidade aumenta $2\\,\\text{m/s}$ a cada segundo, a aceleração é $2\\,\\text{m/s}^2$.</p>`,
        `<p>Aceleração não é apenas aumentar a velocidade. Um $a$ positivo significa que a velocidade aumenta; um $a$ negativo significa frenagem. Há aceleração também quando muda a direção do movimento e o valor da velocidade permanece o mesmo, por exemplo ao percorrer uma circunferência.</p>`,
        `<p>No <strong>movimento uniformemente acelerado</strong> a velocidade cresce proporcionalmente ao tempo: $v=v_0+a\\,t$. A velocidade média é $\\frac{v_0+v}{2}$, portanto a distância é $s=v_0\\,t+\\frac{1}{2}a\\,t^2$. O termo com $\\frac{1}{2}$ é importante, porque a velocidade continua mudando durante o percurso.</p>`,
        `<p>Na queda livre, perto da superfície da Terra, a aceleração aponta para baixo e tem valor de cerca de $g\\approx 9{,}81\\,\\text{m/s}^2$. Um corpo que cai do repouso aumenta sua velocidade em cerca de $9{,}81\\,\\text{m/s}$ a cada segundo.</p>`,
        { fig: "s1s4-v-t-zrychlenie", caption: "A inclinação do gráfico v–t é a aceleração, e a área sob o gráfico é a distância. No movimento uniformemente acelerado o gráfico é uma reta." }
      ],
      examples: [
        { task: 'Um carro acelera do repouso até $20\\,\\text{m/s}$ em $5\\,\\text{s}$. Qual é a sua aceleração?',
          steps: ['$a=\\frac{v-v_0}{t}=\\frac{20-0}{5}$.', '<strong>Resultado: 4 m/s²</strong>'] },
        { task: 'Um corpo tem velocidade de $2\\,\\text{m/s}$ e aceleração de $3\\,\\text{m/s}^2$. Qual será a sua velocidade após $4\\,\\text{s}$?',
          steps: ['$v=v_0+a\\,t=2+3\\cdot 4$.', '<strong>Resultado: 14 m/s</strong>'] }
      ]
    },
    's1-newton': {
      title: 'Leis de Newton do movimento',
      summary: 'Inércia, a relação F = m·a e o princípio da ação e reação.',
      theory: [
        `<p><strong>Primeira lei de Newton (inércia):</strong> um corpo permanece em repouso ou em movimento retilíneo uniforme, a menos que uma força atue sobre ele, ou seja, quando a resultante de todas as forças é nula. Por isso, quando um ônibus freia bruscamente, os passageiros são jogados para a frente: seus corpos tendem a continuar em movimento.</p>`,
        `<p><strong>Segunda lei de Newton:</strong> a força resultante causa no corpo uma aceleração diretamente proporcional à força e inversamente proporcional à massa: $F=m\\,a$. A unidade de força é o newton, $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$. Com a mesma força, um corpo de massa maior acelera mais devagar.</p>`,
        `<p><strong>Terceira lei de Newton (ação e reação):</strong> se o corpo A atua sobre o corpo B com uma força, o corpo B atua sobre o corpo A com uma força de mesmo valor e sentido oposto. Essas forças atuam em corpos <em>diferentes</em>, por isso nunca se subtraem uma da outra. Um cavalo puxa uma carroça, e a carroça puxa o cavalo para trás.</p>`,
        `<p><strong>Resultante</strong> de várias forças numa mesma reta: forças com o mesmo sentido se somam, forças com sentidos opostos se subtraem. A aceleração resultante tem o sentido da resultante.</p>`,
        { fig: "s1s4-akcia-reakcia", caption: "As forças de ação e reação têm o mesmo valor e sentidos opostos, mas atuam em corpos diferentes, por isso não se subtraem." }
      ],
      examples: [
        { task: 'Um corpo de massa $4\\,\\text{kg}$ se move com aceleração de $3\\,\\text{m/s}^2$. Qual é a força resultante que atua sobre ele?',
          steps: ['$F=m\\,a=4\\cdot 3$.', '<strong>Resultado: 12 N</strong>'] },
        { task: 'Sobre um corpo atuam, em sentidos opostos, duas forças de $7\\,\\text{N}$ e $3\\,\\text{N}$. Qual é a resultante?',
          steps: ['As forças têm sentidos opostos, então se subtraem: $7-3=4$.', '<strong>Resultado: 4 N, no sentido da força maior</strong>'] }
      ]
    },
    's1-gravitacia': {
      title: 'Força gravitacional e peso',
      summary: 'Massa e peso, aceleração gravitacional na Terra e na Lua.',
      theory: [
        `<p><strong>Força gravitacional</strong> é a força de atração entre todos os corpos. Quanto maiores forem as massas e quanto mais próximos estiverem os corpos, maior é a força. Para corpos na superfície da Terra, ela se manifesta como <strong>peso</strong>.</p>`,
        `<p><strong>Peso</strong> é a força com que a Terra atrai um corpo: $F_g=m\\,g$, onde $g\\approx 9{,}81\\,\\text{m/s}^2$ é a aceleração gravitacional. A massa $m$, em quilogramas, é uma propriedade do corpo e não muda. O peso, em newtons, depende do lugar: na Lua, onde $g\\approx 1{,}62\\,\\text{m/s}^2$, ele é cerca de seis vezes menor.</p>`,
        `<p><strong>Por que todos os corpos caem com a mesma rapidez?</strong> O peso é proporcional à massa, assim como a inércia. A aceleração $a=\\frac{F_g}{m}=g$ portanto não depende da massa. Numa queda sem resistência do ar, uma pedra e um grão de pólen caem com a mesma rapidez.</p>`,
        `<p>Não confunda os termos: <strong>massa</strong> é medida em quilogramas e representa a quantidade de matéria do corpo; <strong>peso</strong> é uma força e é medido em newtons.</p>`,
        { fig: "s1s4-tiaz-zem-mesiac", caption: "A mesma massa tem na Lua um peso cerca de seis vezes menor, porque a aceleração gravitacional ali é menor." }
      ],
      examples: [
        { task: 'Qual é o peso de um corpo de massa $5\\,\\text{kg}$ na Terra?',
          steps: ['$F_g=m\\,g=5\\cdot 9{,}81$.', '<strong>Resultado: aproximadamente 49,1 N</strong>'] },
        { task: 'Qual é o peso do mesmo corpo na Lua, onde $g\\approx 1{,}62\\,\\text{m/s}^2$? Qual é a sua massa?',
          steps: ['$F_g=5\\cdot 1{,}62=8{,}1\\,\\text{N}$.', 'A massa não muda, continua $5\\,\\text{kg}$.', '<strong>Resultado: 8,1 N; massa 5 kg</strong>'] }
      ]
    },
    's1-praca-energia': {
      title: 'Trabalho, potência e energia',
      summary: 'Trabalho mecânico, potência e energia cinética de um corpo.',
      theory: [
        `<p><strong>Trabalho mecânico</strong> é a energia transferida por uma força quando um corpo sofre deslocamento. Se a força tem o sentido do movimento, ele é calculado por $W=F\\,s$. A unidade é o joule, $1\\,\\text{J}=1\\,\\text{N}\\cdot\\text{m}$. O mesmo trabalho pode ser realizado por uma força grande num pequeno deslocamento ou por uma força pequena num deslocamento grande.</p>`,
        `<p><strong>Potência</strong> indica quão rapidamente o trabalho é realizado: $P=\\frac{W}{t}$. A unidade é o watt, $1\\,\\text{W}=1\\,\\text{J/s}$. Dois motores podem realizar o mesmo trabalho, mas o de maior potência o faz em menos tempo.</p>`,
        `<p><strong>Energia cinética</strong> é a energia do movimento: $E_k=\\frac{1}{2}m\\,v^2$. Ela depende do quadrado da velocidade, então o dobro da velocidade significa quatro vezes mais energia. Por isso a distância de frenagem de um carro é bem maior em velocidades altas.</p>`,
        `<p>Trabalho e energia estão ligados: o trabalho realizado sobre um corpo altera a sua energia. Se $W$ for positivo, a energia do corpo aumenta.</p>`,
        { fig: "obr-energia", caption: "Ao deslizar sem atrito, a energia potencial se converte em energia cinética e vice-versa." }
      ],
      examples: [
        { task: 'Uma força de $50\\,\\text{N}$ desloca um carrinho em $4\\,\\text{m}$ no sentido da força. Qual trabalho é realizado?',
          steps: ['$W=F\\,s=50\\cdot 4$.', '<strong>Resultado: 200 J</strong>'] },
        { task: 'Um corpo de massa $2\\,\\text{kg}$ se move com velocidade de $3\\,\\text{m/s}$. Qual é a sua energia cinética?',
          steps: ['$E_k=\\frac{1}{2}\\cdot 2\\cdot 3^2=9$.', '<strong>Resultado: 9 J</strong>'] }
      ]
    },
    's1-zakony-zachovania': {
      title: 'Leis de conservação da energia e da quantidade de movimento',
      summary: 'Quantidade de movimento de um corpo e a conversão de energia potencial em cinética.',
      theory: [
        `<p>A <strong>quantidade de movimento</strong> de um corpo é o produto de sua massa pela velocidade: $p=m\\,v$, unidade $\\text{kg\\,m/s}$. Ela é uma grandeza vetorial e tem a direção da velocidade. Um corpo mais massivo com a mesma velocidade tem maior quantidade de movimento, por isso é mais difícil de parar.</p>`,
        `<p><strong>Lei da conservação da quantidade de movimento:</strong> se não atuam forças externas sobre um sistema, a quantidade de movimento total dos corpos que o compõem não muda. Dois patinadores que se empurram se afastam em sentidos opostos. O patinador mais leve adquire a maior velocidade, porque a soma das quantidades de movimento deve continuar nula.</p>`,
        `<p><strong>Lei da conservação da energia mecânica:</strong> na ausência de atrito e de resistência do meio, a soma das energias cinética e potencial $E_k+E_p$ não muda. Na queda livre, a energia potencial $E_p=m\\,g\\,h$ converte-se em energia cinética $\\frac{1}{2}m\\,v^2$. Daí $v=\\sqrt{2gh}$: a velocidade não depende da massa.</p>`,
        `<p>Na prática, o atrito e a resistência do ar convertem parte da energia mecânica em calor. A energia mecânica então diminui, mas a energia total do sistema permanece conservada.</p>`,
        { fig: "s1s4-hybnost", caption: "A soma das quantidades de movimento do sistema continua nula: o corpo mais leve se move mais rápido, o mais massivo, mais devagar." }
      ],
      examples: [
        { task: 'Uma bala de massa $0{,}01\\,\\text{kg}$ voa com velocidade de $500\\,\\text{m/s}$. Qual é a sua quantidade de movimento?',
          steps: ['$p=m\\,v=0{,}01\\cdot 500$.', '<strong>Resultado: 5 kg·m/s</strong>'] },
        { task: 'Um corpo cai do repouso de uma altura de $5\\,\\text{m}$ sem resistência do ar. Com que velocidade ele atinge o solo? Use $g=10\\,\\text{m/s}^2$.',
          steps: ['$m\\,g\\,h=\\frac{1}{2}m\\,v^2$, logo $v^2=2gh=2\\cdot 10\\cdot 5=100$.', '<strong>Resultado: v = 10 m/s</strong>'] }
      ]
    },
    's1-tlak': {
      title: 'Pressão, propriedades dos líquidos e dos gases',
      summary: 'Pressão dos sólidos, pressão hidrostática e lei de Pascal.',
      theory: [
        `<p><strong>Pressão</strong> é a razão entre a força perpendicular a uma superfície e a área dessa superfície: $p=\\frac{F}{S}$. A unidade é o pascal, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Pressionamos com mais intensidade usando a ponta afiada, porque a mesma força atua numa área menor.</p>`,
        `<p><strong>Pressão hidrostática</strong> num líquido aumenta com a profundidade: $p=\\rho\\,g\\,h$, onde $\\rho$ é a densidade do líquido (água: $1000\\,\\text{kg/m}^3$) e $h$ é a profundidade abaixo da superfície. Essa pressão não depende do formato do recipiente, apenas da profundidade e da densidade.</p>`,
        `<p><strong>Lei de Pascal:</strong> a pressão aplicada a um líquido em recipiente fechado é transmitida sem alteração a todas as partes do líquido. Por isso uma prensa hidráulica consegue levantar um carro: uma força pequena sobre um pistão pequeno cria uma pressão que atua sobre um pistão grande, com uma força maior.</p>`,
        `<p><strong>Os gases</strong> exercem pressão pelos choques das moléculas contra as paredes do recipiente. A pressão atmosférica ao nível do mar é de cerca de $101\\,325\\,\\text{Pa}\\approx 100\\,\\text{kPa}$ e diminui com o aumento da altitude.</p>`,
        { fig: "obr-tlak", caption: "A pressão no líquido aumenta com a profundidade: quanto mais fundo está o corpo, maior é a força que atua sobre a parede." }
      ],
      examples: [
        { task: 'Um bloco com peso de $600\\,\\text{N}$ está apoiado sobre um piso com área de $0{,}5\\,\\text{m}^2$. Qual pressão ele exerce?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$.', '<strong>Resultado: 1200 Pa</strong>'] },
        { task: 'Qual é a pressão hidrostática da água a uma profundidade de $3\\,\\text{m}$? Use $\\rho=1000\\,\\text{kg/m}^3$ e $g=10\\,\\text{m/s}^2$.',
          steps: ['$p=\\rho\\,g\\,h=1000\\cdot 10\\cdot 3=30000\\,\\text{Pa}$.', '<strong>Resultado: 30 kPa</strong>'] }
      ]
    },
    's2-molekuly': {
      title: 'Estrutura molecular da matéria',
      summary: 'Partículas da matéria, quantidade de substância e massa molar.',
      theory: [
        `<p>Toda substância é formada por partículas muito pequenas: átomos ou moléculas. Elas estão em movimento constante e desordenado e atuam umas sobre as outras com forças de atração e de repulsão. Essas forças determinam se a substância é sólida, líquida ou gasosa.</p>`,
        `<p>Uma evidência do movimento das moléculas é o <strong>movimento browniano</strong>: partículas minúsculas suspensas num líquido tremem de forma irregular, porque as moléculas do líquido as atingem por todos os lados. Não vemos o movimento das próprias moléculas, mas vemos as suas consequências.</p>`,
        `<p>A quantidade de substância é expressa em mols. Um mol contém $N_A\\approx 6{,}02\\cdot 10^{23}$ partículas (constante de Avogadro). A <strong>massa molar</strong> $M$ é a massa de um mol, em gramas por mol. Por exemplo, a água tem $M=18\\,\\text{g/mol}$, que é a massa de $6{,}02\\cdot 10^{23}$ moléculas de água.</p>`,
        `<p>Relações: quantidade de substância $n=\\frac{m}{M}$ e número de partículas $N=n\\,N_A$. Portanto, mesmo uma quantidade muito pequena de substância contém um número enorme de partículas.</p>`,
        { fig: "s1s4-brownov-pohyb", caption: "Movimento browniano: o grão treme de forma irregular, porque as moléculas do líquido o atingem por todos os lados." }
      ],
      examples: [
        { task: 'Quantos mols há em $36\\,\\text{g}$ de água, se $M=18\\,\\text{g/mol}$?',
          steps: ['$n=\\frac{m}{M}=\\frac{36}{18}$.', '<strong>Resultado: 2 mol</strong>'] },
        { task: 'Quantas moléculas há em $2\\,\\text{mol}$ de água?',
          steps: ['$N=n\\,N_A=2\\cdot 6{,}02\\cdot 10^{23}$.', '<strong>Resultado: aproximadamente $1{,}2\\cdot 10^{24}$ moléculas</strong>'] }
      ]
    },
    's2-teplo': {
      title: 'Temperatura, calor e energia interna',
      summary: 'Temperatura, kelvin, energia interna e o calor necessário para aquecer um corpo.',
      theory: [
        `<p><strong>Temperatura</strong> é a medida da energia cinética média do movimento desordenado das partículas. Um corpo mais quente tem partículas que, em média, se movem mais depressa. A escala Celsius tem zero no ponto de fusão do gelo; a escala absoluta, em kelvins, tem zero no zero absoluto. Vale $T=t+273{,}15$, e o tamanho de um grau é o mesmo.</p>`,
        `<p>A <strong>energia interna</strong> $U$ de um corpo é a soma das energias cinéticas e potenciais de todas as suas partículas. Ela muda de duas maneiras: por trabalho (por exemplo, pelo atrito) ou por transferência de calor.</p>`,
        `<p><strong>Calor</strong> é a energia que passa de um corpo mais quente para um corpo mais frio. Calor não é uma substância, e os corpos não contêm calor. O calor necessário para aquecer um corpo é $Q=m\\,c\\,\\Delta T$, onde $c$ é o calor específico. A água tem $c=4200\\,\\text{J/(kg\\,K)}$, o alumínio $900\\,\\text{J/(kg\\,K)}$. Por isso a água esquenta devagar e mantém o calor por muito tempo.</p>`,
        `<p>A variação de temperatura calculamos em kelvins e em graus Celsius do mesmo modo, porque $\\Delta T=\\Delta t$. A conversão para temperatura absoluta é necessária apenas para um valor específico de temperatura.</p>`,
        { fig: "s1s4-merna-kapacita", caption: "Para a mesma massa e a mesma variação de temperatura, a água precisa de quase cinco vezes mais calor que o alumínio." }
      ],
      examples: [
        { task: 'Quanto calor é necessário para aquecer $2\\,\\text{kg}$ de água em $10\\,\\text{K}$? Use $c=4200\\,\\text{J/(kg\\,K)}$.',
          steps: ['$Q=m\\,c\\,\\Delta T=2\\cdot 4200\\cdot 10$.', '<strong>Resultado: 84 000 J = 84 kJ</strong>'] },
        { task: 'Qual é a temperatura $25\\,{}^\\circ\\text{C}$ em kelvins?',
          steps: ['$T=t+273{,}15=25+273{,}15$.', '<strong>Resultado: 298,15 K</strong>'] }
      ]
    },
    's2-skupenstva': {
      title: 'Mudanças de estado',
      summary: 'Fusão, solidificação, vaporização e condensação, e calor latente.',
      theory: [
        `<p>Uma substância pode estar no estado sólido, líquido ou gasoso. A passagem de um estado para outro exige energia ou libera energia. Durante a fusão e a vaporização a <strong>temperatura não muda</strong>: o calor fornecido serve para enfraquecer as ligações entre as moléculas, e não para aumentar a sua velocidade.</p>`,
        `<p><strong>Calor latente</strong> é o calor necessário para mudar o estado de um quilograma de uma substância sem alterar a sua temperatura. Na fusão, é o calor latente específico de fusão $L_t$; na vaporização, $L_v$. Para o gelo $L_t\\approx 334\\,\\text{kJ/kg}$, para a água $L_v\\approx 2260\\,\\text{kJ/kg}$. O calor necessário para mudar o estado de um corpo de massa $m$ é $Q=m\\,L$.</p>`,
        `<p>Durante a <strong>solidificação</strong> e a <strong>condensação</strong> são liberadas as mesmas quantidades de calor. Por isso o vapor a $100\\,{}^\\circ\\text{C}$ é mais perigoso que a água na mesma temperatura: ao condensar sobre a pele, transfere uma quantidade enorme de calor.</p>`,
        `<p>A vaporização também causa resfriamento: as moléculas mais rápidas escapam da superfície, e o líquido restante fica mais frio. Por isso sentimos mais frio logo após sair do banho.</p>`,
        { fig: "s1s4-ohrev-latky", caption: "Durante a fusão e a vaporização a temperatura permanece constante: o calor fornecido é usado para mudar o estado, e não para aquecer a substância." }
      ],
      examples: [
        { task: 'Quanto calor é necessário para derreter $2\\,\\text{kg}$ de gelo a $0\\,{}^\\circ\\text{C}$? Use $L_t=334\\,\\text{kJ/kg}$.',
          steps: ['$Q=m\\,L_t=2\\cdot 334$.', '<strong>Resultado: 668 kJ</strong>'] },
        { task: 'Quanto calor é liberado quando $0{,}5\\,\\text{kg}$ de vapor se condensa em água a $100\\,{}^\\circ\\text{C}$? Use $L_v=2260\\,\\text{kJ/kg}$.',
          steps: ['$Q=m\\,L_v=0{,}5\\cdot 2260$.', '<strong>Resultado: 1130 kJ</strong>'] }
      ]
    },
    's2-ideal': {
      title: 'Gás ideal e equação de estado',
      summary: 'Modelo do gás ideal, equação de estado e transformação isotérmica.',
      theory: [
        `<p>Um <strong>gás ideal</strong> é um modelo: as moléculas são pequenos pontos, não atuam forças entre elas e colidem elasticamente com as paredes do recipiente e entre si. Gases reais, a baixa pressão e alta temperatura, se comportam quase como ideais.</p>`,
        `<p>A <strong>equação de estado</strong> do gás ideal é $p\\,V=n\\,R\\,T$, onde $R\\approx 8{,}31\\,\\text{J/(mol\\,K)}$ é a constante molar dos gases e a temperatura $T$ é usada em kelvins. Se elevarmos a temperatura num recipiente fechado, as moléculas colidem com as paredes com mais força e mais vezes, e a pressão aumenta.</p>`,
        `<p>Uma <strong>transformação isotérmica</strong> ocorre a temperatura constante. Então $p\\,V=\\text{const.}$, isto é, $p_1V_1=p_2V_2$: quando a pressão dobra, o volume se reduz à metade. De modo semelhante, à pressão constante o volume é proporcional à temperatura, e a volume constante a pressão é proporcional à temperatura.</p>`,
        `<p>Em todo cálculo devemos prestar atenção às unidades: pressão em pascals, volume em metros cúbicos e temperatura em kelvins.</p>`,
        { fig: "s1s4-izoterma", caption: "A temperatura constante, o produto p·V é constante: quando o volume cai pela metade, a pressão dobra." }
      ],
      examples: [
        { task: 'Um gás tem volume de $4\\,\\text{l}$ e pressão de $200\\,\\text{kPa}$ a temperatura constante. Qual será o seu volume à pressão de $400\\,\\text{kPa}$?',
          steps: ['$p_1V_1=p_2V_2$, logo $V_2=\\frac{p_1V_1}{p_2}=\\frac{200\\cdot 4}{400}$.', '<strong>Resultado: 2 l</strong>'] },
        { task: 'Qual pressão exerce $1\\,\\text{mol}$ de gás a $T=300\\,\\text{K}$ e volume $V=0{,}025\\,\\text{m}^3$? Use $R=8{,}31\\,\\text{J/(mol\\,K)}$.',
          steps: ['$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}31\\cdot 300}{0{,}025}$.', '<strong>Resultado: 99 720 Pa</strong>'] }
      ]
    },
    's2-termo': {
      title: 'Leis da termodinâmica e máquinas térmicas',
      summary: 'Primeira lei da termodinâmica, segunda lei e rendimento de uma máquina térmica.',
      theory: [
        `<p>A <strong>primeira lei da termodinâmica</strong> é a lei da conservação da energia para processos térmicos: $\\Delta U=Q-A$. A variação da energia interna $\\Delta U$ é igual ao calor $Q$ fornecido ao sistema menos o trabalho $A$ realizado pelo sistema sobre o meio. Se um gás se expande e realiza trabalho, sua energia interna diminui, a menos que lhe forneçamos calor suficiente.</p>`,
        `<p>A <strong>segunda lei da termodinâmica</strong> afirma que o calor passa espontaneamente de um corpo mais quente para um mais frio, e nunca no sentido contrário. Disso decorre que nenhuma máquina térmica pode transformar todo o calor em trabalho: parte do calor deve ser cedida ao corpo mais frio.</p>`,
        `<p>Uma <strong>máquina térmica</strong> retira calor $Q_1$ da fonte quente, transforma parte dele em trabalho $A$ e cede o restante $Q_2$ ao reservatório frio. O <strong>rendimento</strong> é $\\eta=\\frac{A}{Q_1}=1-\\frac{Q_2}{Q_1}$. Ele é sempre menor que 1, isto é, menor que 100 %.</p>`,
        `<p>O maior rendimento possível pertence ao ciclo de Carnot ideal: $\\eta_{\\max}=1-\\frac{T_2}{T_1}$, onde as temperaturas $T_1$ da fonte quente e $T_2$ do reservatório frio são em kelvins. Por isso os motores melhoram quando se eleva a temperatura da fonte quente.</p>`,
        { fig: "s1s4-tepelny-motor", caption: "A máquina retira calor Q₁ da fonte quente, transforma parte dele em trabalho A e cede o restante Q₂ ao reservatório frio. O rendimento A/Q₁ é menor que 1." }
      ],
      examples: [
        { task: 'Um gás recebe $300\\,\\text{J}$ de calor e realiza trabalho de $120\\,\\text{J}$. Qual é a variação da sua energia interna?',
          steps: ['$\\Delta U=Q-A=300-120$.', '<strong>Resultado: 180 J (a energia interna aumentou)</strong>'] },
        { task: 'Uma máquina retira $1000\\,\\text{J}$ da fonte quente e realiza trabalho de $250\\,\\text{J}$. Qual é o seu rendimento?',
          steps: ['$\\eta=\\frac{A}{Q_1}=\\frac{250}{1000}=0{,}25$.', '<strong>Resultado: 25 %</strong>'] }
      ]
    },
    's2-kmitanie': {
      title: 'Oscilações mecânicas e ressonância',
      summary: 'Período, frequência, pêndulo e ressonância.',
      theory: [
        `<p><strong>Movimento oscilatório</strong> é o movimento em torno de uma posição de equilíbrio que se repete periodicamente. Exemplos são um corpo preso a uma mola ou um pêndulo. O <strong>período</strong> $T$ é o tempo de uma oscilação, e a <strong>frequência</strong> $f$ é o número de oscilações por segundo: $f=\\frac{1}{T}=\\frac{n}{t}$. A unidade de frequência é o hertz, $1\\,\\text{Hz}=1\\,\\text{s}^{-1}$.</p>`,
        `<p><strong>Oscilação harmônica</strong> tem elongação $y=A\\sin(\\omega t)$, onde $A$ é a amplitude e $\\omega=2\\pi f$ é a frequência angular. Um movimento senoidal ocorre numa mola em que a força é diretamente proporcional à elongação.</p>`,
        `<p>O período depende das propriedades do sistema que oscila. Para uma mola, $T=2\\pi\\sqrt{\\frac{m}{k}}$: um corpo de maior massa oscila mais devagar, e uma mola mais rígida oscila mais depressa. Para um pêndulo simples, $T=2\\pi\\sqrt{\\frac{l}{g}}$, onde $l$ é o comprimento do fio (para pequenas elongações).</p>`,
        `<p><strong>Ressonância</strong> ocorre quando uma força externa periódica oscila com a frequência natural do corpo. Cada impulso se soma à oscilação anterior e a amplitude cresce. Por isso um balanço vai mais alto quando o empurramos no ritmo de seu movimento.</p>`,
        { fig: "s1s4-kmitanie", caption: "Oscilação harmônica: a amplitude A é o maior deslocamento, e o período T é o tempo de uma oscilação." }
      ],
      examples: [
        { task: 'Um corpo realiza $40$ oscilações em $20\\,\\text{s}$. Qual é o seu período e a sua frequência?',
          steps: ['$T=\\frac{t}{n}=\\frac{20}{40}=0{,}5\\,\\text{s}$.', '$f=\\frac{1}{T}=\\frac{1}{0{,}5}$.', '<strong>Resultado: T = 0,5 s; f = 2 Hz</strong>'] },
        { task: 'Um corpo oscila com frequência de $5\\,\\text{Hz}$. Qual é o seu período?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{5}$.', '<strong>Resultado: 0,2 s</strong>'] }
      ]
    },
    's2-vlnenie': {
      title: 'Ondas mecânicas e som',
      summary: 'Comprimento de onda, velocidade da onda e o som como onda mecânica.',
      theory: [
        `<p><strong>Uma onda</strong> é a propagação de oscilações através de um meio. Transferem-se energia e a forma da onda, mas as partículas do meio apenas oscilam em torno de suas posições de equilíbrio. Uma onda mecânica precisa de um meio material, por isso o som não se propaga no vácuo.</p>`,
        `<p>O comprimento de onda $\\lambda$ é a distância entre dois pontos mais próximos com a mesma fase, por exemplo duas cristas. Em um período $T$ a onda avança $\\lambda$; portanto, a velocidade de propagação é $v=\\frac{\\lambda}{T}=\\lambda\\,f$.</p>`,
        `<p><strong>O som</strong> é uma onda mecânica longitudinal. Os seres humanos ouvem frequências de cerca de $20\\,\\text{Hz}$ a $20\\,\\text{kHz}$. A altura de um som depende da frequência, e a intensidade, da amplitude. No ar seco a $20\\,{}^\\circ\\text{C}$ o som se propaga a cerca de $340\\,\\text{m/s}$, e mais rápido na água e no aço.</p>`,
        `<p><strong>O eco</strong> surge quando o som é refletido por um obstáculo. O som vai até lá e volta, então a distância até o obstáculo é $s=\\frac{v\\,t}{2}$, onde $t$ é o tempo entre a emissão do som e o seu retorno.</p>`,
        { fig: "obr-vlna", caption: "Onda transversal: o comprimento de onda λ é a distância entre dois pontos vizinhos com a mesma fase." }
      ],
      examples: [
        { task: 'Uma onda de frequência $50\\,\\text{Hz}$ tem comprimento de onda de $4\\,\\text{m}$. Com que velocidade ela se propaga?',
          steps: ['$v=\\lambda\\,f=4\\cdot 50$.', '<strong>Resultado: 200 m/s</strong>'] },
        { task: 'Um eco chegou $2\\,\\text{s}$ após o disparo. A que distância está o obstáculo? Use $v=340\\,\\text{m/s}$.',
          steps: ['$2s=v\\,t=340\\cdot 2=680\\,\\text{m}$.', '<strong>Resultado: $s=340\\,\\text{m}$</strong>'] }
      ]
    },
    's3-naboj': {
      title: 'Carga elétrica e campo elétrico',
      summary: 'Cargas se atraem e se repelem; o campo em torno de uma carga pontual e a sua intensidade.',
      theory: [
        `<p>A carga elétrica $Q$ é uma propriedade dos corpos. Ela é medida em coulombs ($\\text{C}$). Cargas de mesmo sinal <strong>se repelem</strong>, e cargas de sinais opostos <strong>se atraem</strong>. A menor carga da natureza é a carga do elétron, $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$.</p>`,
        `<p>Um <strong>campo elétrico</strong> é o espaço em torno de um corpo carregado que exerce força sobre outra carga. Descrevemos a sua força pela <em>intensidade</em> $E = \\frac{F}{q}$: a força com que o campo atua sobre uma pequena carga positiva $q$, dividida por essa carga. A unidade é $\\text{N/C}$, que equivale a $\\text{V/m}$.</p>`,
        `<p>Para uma carga pontual $Q$ à distância $r$, $E = k\\frac{Q}{r^2}$, onde $k \\approx 9\\cdot 10^{9}\\,\\text{N·m}^2/\\text{C}^2$. A intensidade diminui com o <strong>quadrado</strong> da distância: a duas vezes a distância, o campo é quatro vezes mais fraco. Por isso o campo enfraquece rapidamente com a distância.</p>`,
        `<ol><li>Anote a carga e a distância e converta-as para unidades do SI (nC = $10^{-9}$ C, cm = $10^{-2}$ m).</li>
         <li>Substitua em $E = k\\frac{Q}{r^2}$.</li><li>Escreva o resultado em $\\text{N/C}$.</li></ol>`,
        { fig: "s1s4-pole-naboja", caption: "A intensidade do campo de uma carga pontual diminui com o quadrado da distância: a duas vezes a distância, ela fica um quarto." }
      ],
      examples: [
        { task: 'Uma carga pontual $Q = 2\\,\\text{nC}$. Qual é a intensidade do campo a uma distância $r = 0{,}5\\,\\text{m}$?',
          steps: ['Converta a carga: $Q = 2\\cdot 10^{-9}\\,\\text{C}$.',
            '$E = 9\\cdot 10^{9}\\cdot\\frac{2\\cdot 10^{-9}}{0{,}25}=72\\,\\text{N/C}$.',
            '<strong>Resultado: $E = 72\\,\\text{N/C}$.</strong>'] },
        { task: 'Como muda a intensidade do campo se dobrarmos a distância até a carga?',
          steps: ['Na fórmula aparece $r^2$, então a $2r$ o denominador fica quatro vezes maior.', '<strong>A intensidade cai para um quarto.</strong>'] }
      ]
    },
    's3-prud-napatie': {
      title: 'Corrente elétrica, tensão e resistência',
      summary: 'A corrente é a carga por unidade de tempo, a tensão é o trabalho por carga, e a resistência dificulta o movimento das cargas.',
      theory: [
        `<p><strong>Corrente elétrica</strong> $I$ é a carga que atravessa uma seção transversal de um condutor por unidade de tempo: $I = \\frac{Q}{t}$. A unidade é o ampère ($\\text{A}$). A corrente só existe quando as cargas podem se mover e uma força atua sobre elas.</p>`,
        `<p><strong>Tensão elétrica</strong> $U$ indica o trabalho $W$ realizado pelo campo ao deslocar a carga $Q$: $U = \\frac{W}{Q}$. A unidade é o volt ($\\text{V}$). A tensão é o que “empurra” as cargas pelo circuito.</p>`,
        `<p><strong>Resistência elétrica</strong> $R$ é a capacidade de um condutor de dificultar o movimento das cargas. A unidade é o ohm ($\\Omega$). A resistência depende do material, do comprimento e da área da seção do condutor, e também da temperatura: um condutor mais longo e mais fino tem maior resistência.</p>`,
        `<p>Por que a corrente é limitada: a tensão põe as cargas em movimento, mas as colisões com os átomos do condutor as freiam. O resultado é uma corrente constante, que depende da tensão e da resistência.</p>`,
        { fig: "s1s4-jednoduchy-obvod", caption: "A corrente sai do polo positivo da fonte, passa pelo resistor e volta ao polo negativo. A tensão U está nos terminais da fonte." }
      ],
      examples: [
        { task: 'Uma carga de 12 C atravessa um condutor em 4 s. Qual é a corrente?',
          steps: ['Substituímos em $I = \\frac{Q}{t}$.', '$I = \\frac{12\\,\\text{C}}{4\\,\\text{s}} = 3\\,\\text{A}$.', '<strong>Resultado: a corrente é de 3 A.</strong>'] },
        { task: 'Ao deslocar uma carga de 5 C, o campo realiza trabalho de 30 J. Qual é a tensão?',
          steps: ['$U = \\frac{W}{Q}$.', '$U = \\frac{30\\,\\text{J}}{5\\,\\text{C}} = 6\\,\\text{V}$.', '<strong>Resultado: a tensão é de 6 V.</strong>'] }
      ]
    },
    's3-ohm': {
      title: 'Lei de Ohm e circuitos elétricos',
      summary: 'Corrente, tensão e resistência; associação de resistores em série e em paralelo.',
      theory: [
        `<p><strong>A lei de Ohm</strong> diz que a corrente num condutor é diretamente proporcional à tensão e inversamente proporcional à resistência: $I = \\frac{U}{R}$, logo $U = R\\,I$ e $R = \\frac{U}{I}$. Ela vale para condutores metálicos a temperatura constante.</p>`,
        `<p><strong>Associação em série</strong>: os dispositivos estão um após o outro, a mesma corrente os atravessa e as tensões se somam: $U = U_1 + U_2$, e as resistências $R = R_1 + R_2$. Se um dispositivo deixar de funcionar, todo o circuito fica interrompido.</p>`,
        `<p><strong>Associação em paralelo</strong>: os dispositivos estão lado a lado, cada um tem a mesma tensão e as correntes se somam: $I = I_1 + I_2$ e $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. A resistência total é menor que a menor das ramificações. Por isso os aparelhos domésticos são ligados em paralelo: cada um recebe a tensão total, e o desligamento de um não desliga os outros.</p>`,
        `<p>Ao resolver um circuito, primeiro determine quais partes estão em série e quais em paralelo; depois substitua o arranjo por uma única resistência e aplique a lei de Ohm.</p>`,
        { fig: "obr-ohm", caption: "Com resistência constante, o gráfico da tensão em função da corrente é uma reta que passa pela origem." }
      ],
      examples: [
        { task: 'Um resistor de $6\\,\\Omega$ é ligado a uma tensão de 12 V. Qual corrente passa por ele?',
          steps: ['$I = \\frac{U}{R} = \\frac{12\\,\\text{V}}{6\\,\\Omega}$.', '<strong>Resultado: I = 2 A.</strong>'] },
        { task: 'Dois resistores de $4\\,\\Omega$ são ligados em paralelo. Qual é a resistência total?',
          steps: ['$\\frac{1}{R}=\\frac{1}{4}+\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$.', '<strong>Resultado: R = 2 Ω.</strong>'] }
      ]
    },
    's3-praca-vykon': {
      title: 'Trabalho e potência elétricos',
      summary: 'Potência de um aparelho, energia em joules e em quilowatt-hora.',
      theory: [
        `<p><strong>Potência elétrica</strong> $P$ indica com que rapidez um aparelho converte energia elétrica: $P = U\\,I = \\frac{W}{t}$. A unidade é o watt ($\\text{W}$), onde $1\\,\\text{W} = 1\\,\\text{J/s}$.</p>`,
        `<p><strong>Trabalho elétrico</strong> (energia) $W$ num intervalo de tempo $t$ é $W = P\\,t = U\\,I\\,t$. A unidade é o joule ($\\text{J}$). Na conta de luz usa-se o quilowatt-hora: $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<p>Por que isso vale: a tensão dá a energia por coulomb, e a corrente indica quantos coulombs passam por segundo. O produto deles é a energia por segundo, ou seja, a potência.</p>`,
        `<p>A plaqueta de um aparelho indica a sua potência (por exemplo, 2000 W). Para obter a energia, multiplicamos a potência em quilowatts pelo tempo em horas.</p>`
      ],
      examples: [
        { task: 'Uma lâmpada é ligada a 230 V, e por ela passa uma corrente de 0,5 A. Qual é a sua potência?',
          steps: ['$P = U\\,I = 230\\,\\text{V}\\cdot 0{,}5\\,\\text{A}$.', '<strong>Resultado: P = 115 W.</strong>'] },
        { task: 'Um secador de cabelo com potência de 1,5 kW funciona durante 2 horas. Quantos kWh de energia ele consome?',
          steps: ['$W = P\\,t = 1{,}5\\,\\text{kW}\\cdot 2\\,\\text{h}$.', '<strong>Resultado: 3 kWh.</strong>'] }
      ]
    },
    's3-magnetizmus': {
      title: 'Campo magnético e indução eletromagnética',
      summary: 'Campo magnético de um condutor e de uma bobina, e tensão induzida por uma variação do fluxo magnético.',
      theory: [
        `<p>Um <strong>campo magnético</strong> surge em torno de ímãs e de um condutor percorrido por corrente. Sua direção é indicada pelas linhas de campo, que saem do polo norte e entram no polo sul. A indução magnética $B$ é medida em teslas ($\\text{T}$).</p>`,
        `<p>Um condutor retilíneo longo, percorrido pela corrente $I$, produz à distância $r$ o campo $B = \\frac{\\mu_0 I}{2\\pi r}$. No interior de uma <strong>bobina</strong> com $N$ espiras numa extensão $l$, o campo é aproximadamente uniforme: $B = \\mu_0\\frac{N}{l}I$, onde $\\mu_0 \\approx 1{,}26\\cdot 10^{-6}\\,\\text{T·m/A}$.</p>`,
        `<p><strong>Indução eletromagnética:</strong> se o fluxo magnético através de uma espira condutora fechada variar, nela é induzida uma tensão. Pela lei de Lenz, a corrente induzida circula no sentido que se opõe à variação que a causou. Por isso uma bobina oferece resistência quando um ímã se aproxima dela.</p>`,
        `<p>Por que isso vale: o campo magnético variável exerce força sobre as cargas livres do condutor, que começam a se mover. Se a corrente induzida reforçasse a variação, a energia surgiria do nada, o que contraria a lei da conservação da energia.</p>`,
        { fig: "obr-magnet-vodic", caption: "Em torno de um condutor percorrido por corrente existe um campo magnético na forma de circunferências ao redor do condutor." }
      ],
      examples: [
        { task: 'Uma bobina tem 500 espiras numa extensão de 0,25 m, e por ela passa uma corrente de 2 A. Qual é a indução em seu interior?',
          steps: ['$\\frac{N}{l}=\\frac{500}{0{,}25}=2000\\,\\text{m}^{-1}$.',
            '$B = \\mu_0\\frac{N}{l}I \\approx 1{,}26\\cdot 10^{-6}\\cdot 2000\\cdot 2 \\approx 5{,}0\\cdot 10^{-3}\\,\\text{T}$.',
            '<strong>Resultado: B ≈ 5,0 mT.</strong>'] },
        { task: 'Um condutor retilíneo é percorrido por uma corrente de 4 A. Qual é a indução a 0,2 m do condutor?',
          steps: ['$B = \\frac{\\mu_0 I}{2\\pi r}=\\frac{1{,}26\\cdot 10^{-6}\\cdot 4}{2\\pi\\cdot 0{,}2}$.', '<strong>Resultado: B ≈ 4,0·10⁻⁶ T.</strong>'] }
      ]
    },
    's3-transformator': {
      title: 'Motores elétricos, geradores e transformadores',
      summary: 'O motor converte eletricidade em movimento, o gerador faz o contrário, e o transformador altera a tensão.',
      theory: [
        `<p>Um <strong>motor elétrico</strong> converte energia elétrica em energia mecânica. Sobre um condutor percorrido por corrente, num campo magnético, atua uma força. Se o condutor for enrolado em forma de bobina, a força a faz girar, e a bobina torna-se o rotor do motor.</p>`,
        `<p>Um <strong>gerador</strong> é o oposto do motor: quando uma bobina gira num campo magnético, o fluxo magnético varia periodicamente e surge na bobina uma tensão alternada.</p>`,
        `<p>Um <strong>transformador</strong> altera a tensão da corrente alternada. Para um transformador ideal, $\\frac{U_1}{U_2}=\\frac{N_1}{N_2}$, onde $N_1$ e $N_2$ são os números de espiras dos enrolamentos primário e secundário. Se o secundário tiver mais espiras, a tensão aumenta; se tiver menos, a tensão diminui.</p>`,
        `<p>Por que a tensão é elevada para a transmissão: com a mesma potência $P = U\\,I$, uma tensão maior significa uma corrente menor e, portanto, menores perdas de calor nas linhas. Por isso a eletricidade é transmitida em alta tensão e rebaixada no local de consumo.</p>`,
        { fig: "s1s4-transformator", caption: "Transformador ideal: as tensões variam na razão do número de espiras, U₁/U₂ = N₁/N₂." }
      ],
      examples: [
        { task: 'Um transformador tem 200 espiras no primário e 1000 no secundário. Qual é a tensão no secundário se a tensão no primário for de 230 V?',
          steps: ['$\\frac{U_2}{U_1}=\\frac{N_2}{N_1}=\\frac{1000}{200}=5$.', '$U_2 = 5\\cdot 230\\,\\text{V}=1150\\,\\text{V}$.', '<strong>Resultado: 1150 V (o transformador eleva a tensão).</strong>'] },
        { task: 'Um transformador reduz a tensão de 230 V para 23 V. Quantas espiras tem o secundário, se o primário tem 1000?',
          steps: ['$\\frac{N_2}{N_1}=\\frac{U_2}{U_1}=\\frac{23}{230}=\\frac{1}{10}$.', '$N_2 = \\frac{1000}{10}=100$.', '<strong>Resultado: 100 espiras.</strong>'] }
      ]
    },
    's3-striedavy': {
      title: 'Corrente alternada',
      summary: 'Tensão senoidal, período, frequência e valor eficaz na rede elétrica.',
      theory: [
        `<p><strong>A corrente alternada</strong> muda periodicamente tanto o seu sentido quanto o seu valor. A tensão varia senoidalmente com o tempo: $u = U_{max}\\sin(\\omega t)$, onde $U_{max}$ é a amplitude e $\\omega = 2\\pi f$ é a frequência angular.</p>`,
        `<p>A duração de um período é $T = \\frac{1}{f}$. Na rede elétrica pública a frequência é $f = 50\\,\\text{Hz}$, logo o período é $T = 0{,}02\\,\\text{s}$. A tensão se repete 50 vezes por segundo.</p>`,
        `<p>O <strong>valor eficaz</strong> é o valor da tensão contínua que produziria o mesmo efeito térmico num dispositivo. Para uma tensão senoidal, $U_{ef} = \\frac{U_{max}}{\\sqrt{2}}$, logo $U_{max} = U_{ef}\\sqrt{2}$. Uma rede com tensão eficaz de 230 V tem amplitude de cerca de $325\\,\\text{V}$.</p>`,
        `<p>Por que usamos valores eficazes: os aparelhos (uma lâmpada, um secador de cabelo) respondem à potência média, e não aos picos. Por isso os valores eficazes são indicados nas etiquetas e medidos pelos voltímetros.</p>`,
        { fig: "s1s4-striedavy-prud", caption: "Tensão senoidal: o valor eficaz é a amplitude dividida por √2. O período é T = 1/f; em 50 Hz ele vale 0,02 s." }
      ],
      examples: [
        { task: 'A tensão eficaz da rede é de 230 V. Qual é a amplitude da tensão?',
          steps: ['$U_{max}=U_{ef}\\sqrt{2}=230\\cdot 1{,}414\\approx 325\\,\\text{V}$.', '<strong>Resultado: aproximadamente 325 V.</strong>'] },
        { task: 'A rede tem frequência de 50 Hz. Qual é o seu período?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{50}\\,\\text{s}$.', '<strong>Resultado: T = 0,02 s.</strong>'] }
      ]
    },
    's3-odraz-lom': {
      title: 'Reflexão e refração da luz',
      summary: 'Lei da reflexão, índice de refração e lei de Snell na passagem da luz entre meios.',
      theory: [
        `<p><strong>Reflexão da luz</strong>: o ângulo de incidência é igual ao ângulo de reflexão. Ambos os ângulos são medidos a partir da <em>normal</em> à superfície, e não da própria superfície. Se um raio atinge um espelho com ângulo de 30° em relação à superfície, o ângulo de incidência medido a partir da normal é $60^\\circ$.</p>`,
        `<p><strong>Refração da luz</strong>: quando a luz passa para outro meio, a sua velocidade muda e o raio se desvia. O índice de refração é $n = \\frac{c}{v}$, onde $c = 3\\cdot 10^{8}\\,\\text{m/s}$ é a velocidade da luz no vácuo e $v$ é a velocidade na substância. Um índice maior significa luz mais lenta.</p>`,
        `<p><strong>Lei de Snell</strong>: $n_1\\sin\\alpha = n_2\\sin\\beta$, onde $\\alpha$ é o ângulo de incidência e $\\beta$ o ângulo de refração, ambos medidos a partir da normal. Se $n_2 > n_1$, o raio se aproxima da normal, isto é, $\\beta < \\alpha$.</p>`,
        `<p>Por que o raio se desvia: um lado da frente de onda diminui a velocidade no meio mais lento antes do outro lado, o que muda a direção de propagação. Na incidência normal a direção não muda.</p>`,
        { fig: "obr-odraz", caption: "Quando a luz é refletida por um espelho plano, vale a lei da reflexão." }
      ],
      examples: [
        { task: 'A luz passa do ar para um vidro de índice de refração $n = 1{,}5$. Qual é a velocidade da luz no vidro?',
          steps: ['$n=\\frac{c}{v}$, logo $v=\\frac{c}{n}$.', '$v=\\frac{3\\cdot 10^{8}}{1{,}5}=2\\cdot 10^{8}\\,\\text{m/s}$.', '<strong>Resultado: 2·10⁸ m/s.</strong>'] },
        { task: 'Um raio incide perpendicularmente sobre a fronteira. Qual é o ângulo de refração?',
          steps: ['Incidência perpendicular significa $\\alpha=0^\\circ$, logo $\\sin\\alpha=0$.', '$n_1\\cdot 0 = n_2\\sin\\beta$, logo $\\sin\\beta = 0$.', '<strong>Resultado: $\\beta = 0^\\circ$, o raio não muda de direção.</strong>'] }
      ]
    },
    's3-sosovky': {
      title: 'Espelhos, lentes e formação de imagens',
      summary: 'Equação das lentes delgadas, distância da imagem e aumento linear.',
      theory: [
        `<p>A <strong>distância focal</strong> $f$ é a distância do foco ao centro de uma lente (ou ao vértice de um espelho). Uma lente convergente tem distância focal positiva: ela concentra os raios num foco.</p>`,
        `<p>A <strong>equação de Gauss para lentes delgadas</strong> é $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$, onde $a$ é a distância do objeto e $b$ a distância da imagem. Se o objeto estiver além do dobro da distância focal, a imagem é real, reduzida e invertida.</p>`,
        `<p><strong>O aumento linear</strong> indica quantas vezes a imagem é maior ou menor que o objeto: $|k| = \\frac{b}{a}$. Se $|k| < 1$, a imagem é reduzida; se $|k| > 1$, ela é ampliada.</p>`,
        `<p>Um <strong>espelho plano</strong> forma uma imagem virtual do mesmo tamanho do objeto e à mesma distância atrás do espelho. A equação de formação de imagens também pode ser usada para espelhos esféricos, apenas com outros sinais para as distâncias.</p>`,
        `<p>Por que isso vale: os raios de um ponto do objeto convergem para um ponto da imagem atrás da lente, e os triângulos semelhantes formados pelos raios dão as relações acima.</p>`,
        { fig: "s1s4-sosovka-2f", caption: "Um objeto a duas vezes a distância focal gera uma imagem real, invertida e do mesmo tamanho, do outro lado da lente." }
      ],
      examples: [
        { task: 'O objeto está a 30 cm de uma lente convergente com distância focal de 10 cm. Qual é a distância da imagem?',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{10}-\\frac{1}{30}=\\frac{2}{30}=\\frac{1}{15}$.', '$b = 15\\,\\text{cm}$.', '<strong>Resultado: a imagem se forma a 15 cm atrás da lente.</strong>'] },
        { task: 'O objeto está a 30 cm da lente, e a imagem a 15 cm atrás dela. Quantas vezes a imagem é menor?',
          steps: ['$|k| = \\frac{b}{a} = \\frac{15}{30}$.', '<strong>Resultado: |k| = 0,5; a imagem é reduzida à metade.</strong>'] }
      ]
    },
    's4-interferencia': {
      title: 'Propriedades ondulatórias da luz: interferência e difração',
      summary: 'Superposição de ondas, franjas claras e escuras na fenda dupla e a difração das ondas ao redor de obstáculos.',
      theory: [
        `<p>A luz tem propriedades ondulatórias. A luz visível tem comprimento de onda $\\lambda$ de cerca de $380\\,\\text{nm}$ a $750\\,\\text{nm}$. As ondas podem <strong>superpor-se</strong>, e esse fenômeno se chama interferência.</p>`,
        `<p><strong>Interferência</strong> na fenda dupla: se as ondas se reforçam (a diferença de caminho é um múltiplo inteiro de $\\lambda$), surge uma <strong>franja clara</strong>. Se elas se anulam (a diferença de caminho é $\\left(k+\\frac{1}{2}\\right)\\lambda$), surge uma <strong>franja escura</strong>.</p>`,
        `<p>Para as franjas claras numa tela à distância $L$ das fendas, com espaçamento $d$, temos aproximadamente $y_k = k\\,\\frac{\\lambda L}{d}$, onde $k = 0, 1, 2, \\dots$ é a ordem da franja. Com comprimento de onda maior ou maior distância até a tela, as franjas ficam mais afastadas.</p>`,
        `<p><strong>Difração</strong> é o desvio de uma onda ao redor de um obstáculo ou ao atravessar uma fenda estreita. Ela é mais acentuada quando o tamanho do obstáculo se aproxima do comprimento de onda. Por isso o som contorna a quina de uma sala melhor do que a luz.</p>`,
        { fig: "s1s4-interferencia", caption: "Franjas claras aparecem nas direções em que a diferença de caminho é um múltiplo inteiro de λ: y_k = k·λL/d." }
      ],
      examples: [
        { task: 'As fendas estão separadas por $d = 0{,}5\\,\\text{mm}$, a luz tem $\\lambda = 500\\,\\text{nm}$ e a tela está a $L = 1\\,\\text{m}$. Qual é a distância da primeira franja clara ($k=1$)?',
          steps: ['$y_1 = \\frac{\\lambda L}{d}=\\frac{500\\cdot 10^{-9}\\cdot 1}{0{,}5\\cdot 10^{-3}}\\,\\text{m}$.',
            '$y_1 = 10^{-3}\\,\\text{m}=1\\,\\text{mm}$.',
            '<strong>Resultado: 1 mm do centro.</strong>'] },
        { task: 'Na mesma montagem, qual comprimento de onda produz franjas mais largas: 400 nm ou 700 nm?',
          steps: ['O espaçamento das franjas $y_k$ é proporcional a $\\lambda$.', '<strong>A luz de 700 nm produz franjas mais largas.</strong>'] }
      ]
    },
    's4-ziarenie': {
      title: 'Radiação eletromagnética e espectros',
      summary: 'Comprimento de onda, frequência e energia do fóton; espectros de linhas e espectros contínuos.',
      theory: [
        `<p>A radiação eletromagnética é formada por ondas que se propagam no vácuo com velocidade $c = 3\\cdot 10^{8}\\,\\text{m/s}$. Comprimento de onda e frequência relacionam-se por $c = \\lambda f$. Ondas de rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e raios gama são apenas partes diferentes do mesmo fenômeno.</p>`,
        `<p><strong>Energia do fóton</strong>: a luz é emitida e absorvida em porções chamadas fótons. A energia de um fóton é $E = h f = \\frac{h c}{\\lambda}$, onde $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$. Em cálculos atômicos é cômodo usar o elétron-volt ($1\\,\\text{eV} \\approx 1{,}6\\cdot 10^{-19}\\,\\text{J}$), junto com a relação $hc \\approx 1240\\,\\text{eV·nm}$.</p>`,
        `<p><strong>Espectros</strong>: sólidos aquecidos até a incandescência emitem um espectro contínuo; gases rarefeitos emitem um espectro de linhas. Cada elemento tem suas próprias linhas, por isso os espectros são usados para determinar a composição química das estrelas.</p>`,
        `<p>Por que os espectros são formados por linhas: os níveis de energia dos átomos são discretos, então um átomo emite ou absorve apenas fótons cuja energia é igual à diferença entre dois níveis. Maior energia do fóton significa menor comprimento de onda.</p>`,
        { fig: "s1s4-spektrum", caption: "A radiação eletromagnética é um único fenômeno com diferentes comprimentos de onda. A luz visível é apenas uma faixa estreita." }
      ],
      examples: [
        { task: 'Um fóton tem comprimento de onda de 248 nm. Qual é a sua energia em elétron-volts?',
          steps: ['$E=\\frac{hc}{\\lambda}\\approx\\frac{1240\\,\\text{eV·nm}}{248\\,\\text{nm}}$.', '<strong>Resultado: E = 5 eV.</strong>'] },
        { task: 'A luz tem frequência de $6\\cdot 10^{14}\\,\\text{Hz}$. Qual é o seu comprimento de onda?',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{6\\cdot 10^{14}}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Resultado: 500 nm.</strong>'] }
      ]
    },
    's4-atom': {
      title: 'Modelos do átomo e fenômenos quânticos',
      summary: 'Modelo de Bohr do hidrogênio: níveis quantizados e energia do fóton emitido na transição entre eles.',
      theory: [
        `<p>Segundo o modelo de Rutherford, o átomo tem um núcleo pequeno e positivo, com elétrons ao redor. Porém, pela física clássica, um elétron em movimento ao redor do núcleo deveria continuar irradiando energia e cair sobre o núcleo, o que não acontece. Por isso o modelo de Bohr introduziu <strong>níveis quantizados</strong>, nos quais o elétron não irradia energia.</p>`,
        `<p>A energia do elétron no átomo de hidrogênio é quantizada: $E_n = -\\frac{13{,}6\\,\\text{eV}}{n^2}$, onde $n = 1, 2, 3, \\dots$ é o número quântico principal. Quanto maior $n$, mais fracamente o elétron está ligado e mais sua energia se aproxima de zero.</p>`,
        `<p><strong>Transição entre níveis</strong>: quando o átomo passa de um nível mais alto $n_i$ para um nível mais baixo $n_f$, emite um fóton com energia $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\frac{1}{n_f^2}-\\frac{1}{n_i^2}\\right)$. A transição inversa absorve um fóton de mesma energia.</p>`,
        `<p>Por que isso vale: o comprimento de onda da luz emitida corresponde à diferença entre os níveis, por isso o hidrogênio emite apenas um espectro de linhas. Do mesmo modo, o efeito fotoelétrico mostra que a luz transporta energia em porções e, portanto, também tem propriedades de partícula.</p>`,
        { fig: "obr-atom", caption: "Modelo simplificado do átomo: um núcleo positivo e elétrons em órbitas ao seu redor." }
      ],
      examples: [
        { task: 'Um elétron no átomo de hidrogênio passa do nível $n=3$ para $n=2$. Que energia ele emite?',
          steps: ['$\\Delta E = 13{,}6\\left(\\frac{1}{2^2}-\\frac{1}{3^2}\\right)\\,\\text{eV}$.',
            '$\\frac{1}{4}-\\frac{1}{9}=\\frac{5}{36}$, logo $\\Delta E = 13{,}6\\cdot\\frac{5}{36}\\approx 1{,}89\\,\\text{eV}$.',
            '<strong>Resultado: aproximadamente 1,89 eV.</strong>'] },
        { task: 'Qual é a energia do elétron no nível $n=1$?',
          steps: ['$E_1=-\\frac{13{,}6}{1^2}\\,\\text{eV}$.', '<strong>Resultado: E₁ = −13,6 eV.</strong>'] }
      ]
    },
    's4-radioaktivita': {
      title: 'Radioatividade e reações nucleares',
      summary: 'Decaimento de núcleos, meia-vida e escrita de uma reação nuclear.',
      theory: [
        `<p><strong>Radioatividade</strong> é o decaimento espontâneo de núcleos instáveis. Ela produz radiação: $\\alpha$ (núcleos de hélio), $\\beta$ (elétrons ou pósitrons) e $\\gamma$ (fótons de alta energia). O decaimento de um núcleo individual é aleatório, mas, num grande número de núcleos, o comportamento é previsível.</p>`,
        `<p>A <strong>meia-vida</strong> $T_{1/2}$ é o tempo após o qual se desintegra a metade dos núcleos originais. O número de núcleos não desintegrados após o tempo $t$ é $N = N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>Por que a diminuição é geométrica: a cada meia-vida a quantidade se reduz à metade, e não em valor fixo. Após a primeira meia-vida resta a metade; após a segunda, um quarto. A atividade $A = \\lambda N$ dá o número de desintegrações por segundo (unidade becquerel, $\\text{Bq}$).</p>`,
        `<p><strong>Reações nucleares</strong> são escritas com o balanço do número de massa (índice superior) e do número atômico (índice inferior): a soma à esquerda é igual à soma à direita.</p>`,
        { fig: "s1s4-polcas-rozpadu", caption: "A cada meia-vida, o número de núcleos não desintegrados se reduz à metade: a diminuição é geométrica, e não linear." }
      ],
      examples: [
        { task: 'Um elemento radioativo tem meia-vida de 4 dias. Que porcentagem da quantidade original resta após 8 dias?',
          steps: ['Em 8 dias passam $\\frac{8}{4}=2$ meias-vidas.', 'Resta $\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}$ da quantidade original.', '<strong>Resultado: 25 %.</strong>'] },
        { task: 'O núcleo $^{238}_{92}\\text{U}$ sofre decaimento alfa. Qual são o número de massa e o número atômico do novo núcleo?',
          steps: ['A partícula alfa é $^{4}_{2}\\text{He}$; ela leva 4 núcleons e 2 prótons.', '$238-4=234$, $92-2=90$.', '<strong>Resultado: $^{234}_{90}\\text{Th}$ (tório).</strong>'] }
      ]
    },
    's4-jadro': {
      title: 'Fissão e fusão nucleares',
      summary: 'Defeito de massa e energia liberada na fissão de núcleos pesados e na fusão de núcleos leves.',
      theory: [
        `<p>Um núcleo tem massa menor que a soma das massas de seus núcleons. A diferença é o <strong>defeito de massa</strong> $\\Delta m$, e ela corresponde à energia de ligação segundo a relação de Einstein $\\Delta E = \\Delta m\\,c^2$.</p>`,
        `<p>Se a massa for medida em unidades de massa atômica ($1\\,\\text{u}$), vale uma relação prática: um defeito de massa de $1\\,\\text{u}$ corresponde a uma energia de cerca de $931{,}5\\,\\text{MeV}$.</p>`,
        `<p><strong>Fissão</strong>: um núcleo pesado (por exemplo, o urânio-235) se divide em dois núcleos de massa média e libera energia. <strong>Fusão</strong>: núcleos leves se unem formando um núcleo mais pesado, e novamente há liberação de energia. O Sol obtém sua energia da fusão do hidrogênio em hélio.</p>`,
        `<p>Por que a energia é liberada: os núcleos estão mais fortemente ligados em torno do ferro. Aproximar-se dele, seja dividindo um núcleo pesado, seja unindo núcleos leves, libera a diferença das energias de ligação.</p>`,
        { fig: "s1s4-vazbova-energia", caption: "A energia de ligação por núcleon é maior em torno do ferro, por isso tanto a fissão de núcleos pesados quanto a fusão de núcleos leves liberam energia." }
      ],
      examples: [
        { task: 'Em certo processo o defeito de massa é $\\Delta m = 0{,}2\\,\\text{u}$. Quantos MeV de energia são liberados?',
          steps: ['$\\Delta E = \\Delta m\\cdot 931{,}5\\,\\text{MeV/u}=0{,}2\\cdot 931{,}5\\,\\text{MeV}$.', '<strong>Resultado: aproximadamente 186 MeV.</strong>'] },
        { task: 'Na reação D + T → He + n, as massas antes da reação somam 5,0301 u, e depois da reação, 5,0113 u. Quantos MeV são liberados?',
          steps: ['$\\Delta m = 5{,}0301-5{,}0113=0{,}0188\\,\\text{u}$.', '$\\Delta E = 0{,}0188\\cdot 931{,}5\\approx 17{,}5\\,\\text{MeV}$.', '<strong>Resultado: aproximadamente 17,5 MeV.</strong>'] }
      ]
    },
    's4-astrofyzika': {
      title: 'Fundamentos de astrofísica e cosmologia',
      summary: 'Distância das estrelas por paralaxe, lei de Hubble da expansão e lei de Wien da radiação.',
      theory: [
        `<p><strong>As distâncias no espaço</strong> são medidas em anos-luz ou parsecs: $1\\,\\text{pc}\\approx 3{,}26\\,\\text{ly}$. Com a <strong>paralaxe</strong>, uma estrela parece deslocar-se em relação às estrelas distantes à medida que a Terra orbita o Sol. A distância em parsecs é $d = \\frac{1}{p}$, onde $p$ é a paralaxe anual em segundos de arco.</p>`,
        `<p><strong>Lei de Hubble</strong>: as galáxias distantes se afastam de nós com velocidade $v = H_0\\,d$, onde $H_0 \\approx 70\\,\\text{km/(s·Mpc)}$. Quanto mais distante a galáxia, mais rápido ela se afasta. Isso é uma evidência de que o universo está em expansão.</p>`,
        `<p><strong>Lei de Wien</strong>: a temperatura superficial de uma estrela determina o comprimento de onda em que ela irradia com mais intensidade: $\\lambda_{max} = \\frac{b}{T}$, onde $b \\approx 2{,}9\\cdot 10^{-3}\\,\\text{m·K}$. As estrelas mais frias brilham em vermelho, e as mais quentes, em azul.</p>`,
        `<p>Por que isso funciona: a paralaxe é a geometria do triângulo Terra–Sol–estrela, e Hubble constatou que o deslocamento das linhas espectrais para o vermelho aumenta com a distância. A partir dessas duas medidas podemos estimar distâncias e também a idade do universo.</p>`,
        { fig: "s1s4-paralaxa", caption: "Paralaxe: vista de dois pontos da órbita da Terra, uma estrela parece deslocada em relação às estrelas mais distantes. A distância em parsecs é d = 1/p." }
      ],
      examples: [
        { task: 'Uma galáxia se afasta de nós a 3500 km/s. Qual é a sua distância, para $H_0 = 70\\,\\text{km/(s·Mpc)}$?',
          steps: ['$d=\\frac{v}{H_0}=\\frac{3500}{70}\\,\\text{Mpc}$.', '<strong>Resultado: 50 Mpc.</strong>'] },
        { task: 'A superfície de uma estrela tem temperatura de 5800 K. Em que comprimento de onda ela irradia com mais intensidade?',
          steps: ['$\\lambda_{max}=\\frac{2{,}9\\cdot 10^{-3}}{5800}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Resultado: 500 nm (região do verde).</strong>'] }
      ]
    },
    's4-opakovanie': {
      title: 'Revisão de mecânica, eletricidade e outros temas',
      summary: 'Revisão das principais fórmulas da mecânica e da eletricidade e verificação das unidades.',
      theory: [
        `<p>A revisão conecta coisas que você aprendeu separadamente. Mecânica: $F = m\\,a$, $E_k = \\frac{1}{2}m v^2$, $W = F\\,s$, $P = \\frac{W}{t}$. Eletricidade: $I = \\frac{Q}{t}$, $U = R\\,I$, $P = U\\,I$. Sempre descubra primeiro o que é dado e o que se pede, e só então escolha a fórmula.</p>`,
        `<p><strong>Verificação das unidades:</strong> força em newtons ($\\text{N} = \\text{kg·m/s}^2$), energia em joules, tensão em volts. Se as unidades dos dois lados não baterem, o erro está no procedimento.</p>`,
        `<p><strong>Erros comuns:</strong> não esqueça o $\\frac{1}{2}$ e o quadrado da velocidade na energia cinética; converta km/h em m/s dividindo por $3{,}6$; numa associação em paralelo, some os inversos das resistências.</p>`,
        `<p>Por que isso ajuda: a física é um único sistema de leis. A energia se conserva em todas as áreas; por exemplo, a energia elétrica se converte em energia mecânica num motor. Por isso o mesmo modo de pensar funciona em toda parte.</p>`
      ],
      examples: [
        { task: 'Um carro de massa 1000 kg se move a 20 m/s. Qual é a sua energia cinética?',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 1000\\cdot 20^2$.', '$=\\frac{1}{2}\\cdot 1000\\cdot 400=200\\,000\\,\\text{J}$.', '<strong>Resultado: 200 kJ.</strong>'] },
        { task: 'Um aparelho tem tensão de 12 V e resistência de 4 Ω. Que corrente passa por ele?',
          steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Resultado: 3 A.</strong>'] }
      ]
    },
    's4-maturita': {
      title: 'Preparação para o vestibular, sobretudo se você escolher física',
      summary: 'Método para resolver problemas, unidades, estimativa do resultado e arredondamento.',
      theory: [
        `<p>Na prova final de física, a maioria dos pontos se perde por <strong>unidades erradas</strong> e por substituir valores sem conferir. Um procedimento que compensa: anote as grandezas dadas, anote a grandeza procurada, escolha a fórmula, converta as unidades para o SI e só então calcule.</p>`,
        `<ol><li>Anote as grandezas dadas e a grandeza procurada.</li><li>Escolha uma fórmula e confira se ela vale para este processo.</li><li>Converta as unidades para o SI.</li>
         <li>Calcule e arredonde somente no final.</li><li>Confira a unidade e a ordem de grandeza do resultado.</li></ol>`,
        `<p><strong>Conferindo o resultado:</strong> verifique se a ordem de grandeza é razoável (a velocidade de um carro não pode ser $10^{6}\\,\\text{m/s}$), se o sinal está correto e se o resultado tem a unidade certa. Uma estimativa rápida antes de calcular evita erros de vírgula decimal.</p>`,
        `<p><strong>Arredondamento:</strong> calcule com toda a precisão e arredonde apenas no final, para o número de algarismos significativos dado no problema (geralmente 2 ou 3). Arredondar nas etapas intermediárias desloca o resultado.</p>`,
        `<p>Por que isso funciona: a prova avalia um modo de pensar, e não apenas um número. Unidades corretas e a conferência mostram compreensão, mesmo que você erre um pequeno valor no cálculo.</p>`
      ],
      examples: [
        { task: 'Um corpo de massa 2 kg tem velocidade de 36 km/h. Qual é a sua energia cinética?',
          steps: ['Converta as unidades: $v = 36\\,\\text{km/h}=10\\,\\text{m/s}$.', '$E_k=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 10^2=100\\,\\text{J}$.', '<strong>Resultado: 100 J.</strong>'] },
        { task: 'Uma força de 500 N atua numa área de 25 cm². Qual pressão resulta, em kPa?',
          steps: ['Converta a área: $S=25\\,\\text{cm}^2=25\\cdot 10^{-4}\\,\\text{m}^2$.', '$p=\\frac{F}{S}=\\frac{500}{25\\cdot 10^{-4}}\\,\\text{Pa}=2\\cdot 10^{5}\\,\\text{Pa}$.', '<strong>Resultado: 200 kPa.</strong>'] }
      ]
    }
  }
});
