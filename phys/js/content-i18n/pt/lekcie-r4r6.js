/* Português: lições dos 4.º a 6.º anos (js/rocniky/r4.js, r5.js, r6.js). Estrutura e chaves: js/content-i18n.js. */
CONTENT_I18N.add('pt', {
  lessons: {
    'r4-svetlo-tien': {
      title: 'Luz, sombra e fontes de luz',
      summary: 'Você distingue uma fonte de luz de um objeto iluminado e explica como se forma a sombra.',
      theory: [
        `<p>A luz se propaga em linha reta. Um objeto que emite luz por si mesmo é uma <strong>fonte de luz</strong>, por exemplo o Sol, uma lâmpada ou uma vela.
       A Lua, uma mesa ou um livro não emitem luz. Eles apenas refletem a luz, e é por isso que os vemos.</p>`,
        `<p>Quando a luz atinge um objeto <strong>opaco</strong>, forma-se atrás dele uma <strong>sombra</strong>. A luz não consegue chegar atrás do objeto,
       porque não consegue contorná-lo.</p>`,
        `<ul>
         <li>Objetos opacos, por exemplo madeira ou pedra, bloqueiam a luz e projetam uma sombra escura.</li>
         <li>Objetos transparentes, por exemplo vidro comum ou água, deixam a luz passar. A sombra atrás deles é fraca ou inexistente.</li>
       </ul>`,
        `<p>O tamanho da sombra depende da distância. Quando o objeto se aproxima da fonte de luz, a sombra fica maior.
       Quando ele se afasta da fonte, a sombra fica menor.</p>`,
        { fig: 'obr-tien', caption: 'A sombra forma-se onde a luz não chega, porque é bloqueada por um corpo opaco.' }
      ],
      examples: [
        { task: 'Qual objeto é uma fonte de luz: uma vela, um livro ou uma árvore?',
          steps: ['Uma fonte de luz emite luz. O livro e a árvore apenas refletem a luz.', 'A vela queima e emite luz.', '<strong>Resultado: a vela</strong>'] },
        { task: 'Por que existe uma sombra atrás de uma árvore em um dia ensolarado?',
          steps: ['O Sol é uma fonte de luz.', 'A árvore é opaca, por isso a luz não consegue atravessá-la.', '<strong>Resultado: a luz não chega atrás da árvore, e por isso ali se forma uma sombra.</strong>'] }
      ]
    },
    'r4-zvuk': {
      title: 'O som e como ele é produzido',
      summary: 'Você explica que o som é produzido por corpos que vibram e distingue a altura e a intensidade do som.',
      theory: [
        `<p>O som é produzido pela <strong>vibração</strong>, isto é, pelo movimento de vai e vem de um corpo. Quando batemos em um diapasão ou puxamos uma corda esticada de violão,
       o corpo vibra rapidamente e põe o ar ao redor em movimento.</p>`,
        `<p>A vibração chega aos nossos ouvidos pelo ar na forma de uma <strong>onda sonora</strong>. O som precisa de um meio material, por exemplo ar, água ou um sólido.
       No vácuo ele não se propaga, por isso no espaço sideral não se ouvem explosões.</p>`,
        `<ul>
         <li><strong>A altura do som</strong> depende da velocidade da vibração. Uma vibração mais rápida soa mais agudo.</li>
         <li><strong>A intensidade do som</strong> depende do tamanho das vibrações. Uma oscilação maior soa mais forte.</li>
       </ul>`,
        `<p>No ar, o som se propaga a cerca de $340\\,\\text{m/s}$. A luz se propaga muito mais depressa, quase instantaneamente.
       Por isso, em uma tempestade, primeiro vemos o relâmpago e só depois ouvimos o trovão.</p>`,
        { fig: 'r1r5-zvuk-vlna', caption: 'Um som mais agudo tem vibração mais rápida (período menor). Um som mais forte tem oscilação maior, isto é, amplitude maior.' }
      ],
      examples: [
        { task: 'Por que, em uma tempestade, primeiro vemos o relâmpago e só depois ouvimos o trovão?',
          steps: ['A luz se propaga quase instantaneamente.', 'O som se propaga pelo ar muito mais devagar.', '<strong>Resultado: o som chega até nós mais tarde do que a luz.</strong>'] },
        { task: 'O que precisa fazer um corpo para emitir som?',
          steps: ['O som surge da vibração do corpo.', '<strong>Resultado: o corpo precisa vibrar.</strong>'] }
      ]
    },
    'r4-magnety': {
      title: 'Propriedades magnéticas dos objetos',
      summary: 'Você distingue os objetos que o ímã atrai dos que ele não atrai.',
      theory: [
        `<p>O ímã <strong>atrai</strong> objetos de ferro, níquel e cobalto, por exemplo um prego ou um clipe de aço. Esses metais são chamados de magnéticos.
       Madeira, plástico, vidro e a maioria dos outros metais, por exemplo o cobre, não são atraídos pelo ímã.</p>`,
        `<p>Todo ímã tem dois <strong>polos</strong>: norte e sul. Polos opostos se atraem, e polos iguais se repelem.</p>`,
        `<p>O efeito magnético atravessa também o papel ou uma camada fina de plástico. Por isso um ímã pode atrair um prego que está embaixo de uma folha de papel.</p>`,
        `<p>A propriedade de um objeto descobrimos com um experimento simples: aproximamos o ímã e observamos se o objeto se move.</p>`,
        { fig: 'obr-magnet', caption: 'As linhas de campo de um ímã em barra saem do polo norte N e entram no polo sul S.' }
      ],
      examples: [
        { task: 'Quais objetos o ímã atrai: um prego, uma borracha e uma régua de plástico?',
          steps: ['O prego é de ferro, e o ímã o atrai.', 'A borracha e a régua de plástico não são atraídas pelo ímã.', '<strong>Resultado: apenas o prego.</strong>'] },
        { task: 'Dois ímãs são aproximados com polos opostos. O que acontece?',
          steps: ['Polos opostos se atraem.', '<strong>Resultado: os ímãs se atraem.</strong>'] }
      ]
    },
    'r4-elektricke-zariadenia': {
      title: 'Aparelhos elétricos simples',
      summary: 'Você conhece as partes de um circuito elétrico simples e sabe o que cada uma faz.',
      theory: [
        `<p>Um circuito elétrico simples é formado por uma <strong>fonte</strong> (pilha ou bateria), um <strong>aparelho</strong> (lâmpada, campainha, ventilador),
       <strong>fios condutores</strong> (geralmente fios de cobre) e um <strong>interruptor</strong>.</p>`,
        `<ul>
         <li>A fonte fornece energia elétrica.</li>
         <li>O aparelho transforma a energia elétrica em outra, por exemplo em luz, calor ou movimento.</li>
         <li>O interruptor liga ou desliga o circuito.</li>
       </ul>`,
        `<p>A corrente elétrica circula somente em um circuito <strong>fechado</strong>. Se o circuito estiver interrompido, por exemplo com o interruptor desligado, a lâmpada não acende.</p>`,
        `<p>Os condutores deixam passar a corrente elétrica, por exemplo os metais. Os isolantes, por exemplo plástico ou borracha, não deixam a corrente passar. Por isso os fios têm capa de plástico e os cabos das ferramentas são de borracha.</p>`,
        { fig: 'r1r5-obvod-spinac', caption: 'Quando o interruptor está aberto, o circuito está interrompido, a corrente não circula e a lâmpada não acende.' }
      ],
      examples: [
        { task: 'Qual parte do circuito fornece energia?',
          steps: ['A fonte fornece energia elétrica, e o aparelho a consome.', '<strong>Resultado: a pilha (fonte).</strong>'] },
        { task: 'Por que a lâmpada não acende depois que o interruptor é desligado?',
          steps: ['O interruptor desligado interrompe o circuito.', 'Em um circuito interrompido a corrente não circula.', '<strong>Resultado: a lâmpada não acende, porque a corrente não circula.</strong>'] }
      ]
    },
    'r4-energia': {
      title: 'Energia e o seu uso',
      summary: 'Você reconhece em que outra forma de energia se transformam os aparelhos comuns.',
      theory: [
        `<p><strong>Energia</strong> não pode ser criada do nada nem destruída. Ela apenas passa de uma forma para outra. A unidade de energia é o joule, símbolo $\\text{J}$.</p>`,
        `<ul>
         <li><strong>Elétrica</strong>: tomada, pilha, carregador.</li>
         <li><strong>Química</strong>: armazenada na pilha ou nos alimentos.</li>
         <li><strong>Cinética</strong>: pessoa correndo, ventilador girando.</li>
         <li><strong>Luminosa</strong>: Sol, lâmpada, tela.</li>
         <li><strong>Térmica</strong>: água quente, radiador aquecido.</li>
         <li><strong>Sonora</strong>: música do alto-falante, voz.</li>
       </ul>`,
        `<p>Os aparelhos normalmente não transformam a energia em uma única forma. A lâmpada produz luz, mas a maior parte da sua energia vira calor. Por isso ela fica quente depois de ligada.</p>`,
        `<p>O ventilador transforma energia elétrica em movimento das pás. O alto-falante transforma energia elétrica em som.</p>`,
        { fig: 'r1r5-premeny-energie', caption: 'O ventilador transforma energia elétrica em cinética, e a lâmpada, em luminosa e térmica.' }
      ],
      examples: [
        { task: 'Que transformação de energia realiza um ventilador elétrico?',
          steps: ['O ventilador é um aparelho que consome energia elétrica.', 'O motorzinho gira e as pás se movimentam.', '<strong>Resultado: a energia elétrica se transforma em energia de movimento.</strong>'] },
        { task: 'Que transformação de energia realiza uma lâmpada?',
          steps: ['A lâmpada recebe energia elétrica.', 'Ela emite luz e ao mesmo tempo se aquece.', '<strong>Resultado: a energia elétrica se transforma em energia luminosa e térmica.</strong>'] }
      ]
    },
    'r4-bezpecnost': {
      title: 'Comportamento seguro com aparelhos elétricos',
      summary: 'Você sabe quais comportamentos com aparelhos elétricos são seguros e quais não são.',
      theory: [
        `<p>A eletricidade é útil, mas pode ser perigosa. A corrente que atravessa o corpo pode causar um acidente grave.
       Por isso, manuseie aparelhos elétricos somente seguindo as instruções dos adultos.</p>`,
        `<ol>
         <li>Nunca toque na tomada nem no plugue com as mãos molhadas.</li>
         <li>Desligue o aparelho segurando o plugue, e não o fio.</li>
         <li>Se o fio estiver danificado ou os condutores estiverem expostos, não use o aparelho e avise um adulto.</li>
       </ol>`,
        `<p>A água conduz muito bem a corrente elétrica, por isso a combinação de água com aparelhos elétricos é muito perigosa.
       Não use secador, carregador ou outro aparelho no banheiro ou perto da água.</p>`,
        `<p>Se você vir uma pessoa encostada em um fio energizado, não a toque. Primeiro chame um adulto ou o serviço de emergência,
       para que a corrente seja desligada.</p>`
      ],
      examples: [
        { task: 'Como desligar corretamente um ferro de passar roupa da tomada?',
          steps: ['Puxar pelo fio pode danificar os condutores.', 'O correto é segurar o plugue e puxá-lo.', '<strong>Resultado: puxamos pelo plugue, e não pelo fio.</strong>'] },
        { task: 'Você pode carregar o celular em um banheiro úmido?',
          steps: ['A água conduz bem a corrente elétrica.', '<strong>Resultado: não, em ambiente úmido não é seguro carregar.</strong>'] }
      ]
    },
    'r5-vlastnosti-latok': {
      title: 'Propriedades das substâncias e dos corpos',
      summary: 'Você distingue substância de corpo e conhece as propriedades básicas dos materiais.',
      theory: [
        `<p><strong>Substância</strong> é o material do qual algo é feito, por exemplo madeira, ferro ou água.
       <strong>Corpo</strong> é um objeto concreto feito de uma ou de várias substâncias, por exemplo uma mesa, uma chave ou uma garrafa.</p>`,
        `<p>As propriedades das substâncias descobrimos por observação e medição: cor, brilho, dureza, elasticidade, solubilidade em água ou condução de calor e de corrente elétrica.</p>`,
        `<ul>
         <li><strong>Dureza</strong>: resistência a riscos.</li>
         <li><strong>Elasticidade</strong>: capacidade de voltar à forma original depois de ser comprimida ou dobrada.</li>
         <li><strong>Solubilidade</strong>: capacidade de se dissolver na água. O sal se dissolve, a areia não.</li>
       </ul>`,
        `<p>Corpos feitos da mesma substância podem ter formas e tamanhos diferentes. As propriedades da substância, porém, não mudam: dois pedaços de madeira têm as propriedades da madeira.</p>`
      ],
      examples: [
        { task: 'A chave é um corpo ou uma substância?',
          steps: ['A chave é um objeto concreto.', '<strong>Resultado: um corpo, feito de metal.</strong>'] },
        { task: 'Qual substância se dissolve na água: sal ou areia?',
          steps: ['O sal se dissolve na água.', 'A areia não se dissolve na água.', '<strong>Resultado: o sal.</strong>'] }
      ]
    },
    'r5-skupenstva': {
      title: 'Sólidos, líquidos e gases',
      summary: 'Você compara sólidos, líquidos e gases pela forma e pelo volume.',
      theory: [
        `<p>As substâncias aparecem em três estados básicos: <strong>sólido</strong>, <strong>líquido</strong> e <strong>gasoso</strong>.
       Os distinguimos pelo fato de terem forma fixa ou não e volume fixo ou não.</p>`,
        `<ul>
         <li><strong>Sólido</strong>: forma e volume fixos, por exemplo uma pedra ou um cubo de gelo.</li>
         <li><strong>Líquido</strong>: volume fixo, mas muda de forma conforme o recipiente, por exemplo água em um copo.</li>
         <li><strong>Gás</strong>: não tem forma nem volume fixos, ocupa todo o recipiente, por exemplo o ar em um balão.</li>
       </ul>`,
        `<p>As partículas dos sólidos estão próximas umas das outras, por isso são difíceis de comprimir. As partículas dos gases estão distantes umas das outras, por isso os gases podem ser comprimidos.</p>`,
        `<p><strong>Experimento:</strong> despejamos água em um copo alto e depois em um copo largo. A água assume sempre a forma do recipiente, mas o seu volume não muda.</p>`,
        { fig: 'r1r5-castice-skupenstva', caption: 'Os sólidos têm partículas firmemente organizadas, os líquidos têm partículas próximas e sem ordem, e os gases têm partículas distantes umas das outras.' }
      ],
      examples: [
        { task: 'Quais são as propriedades da água em um copo?',
          steps: ['A água é um líquido e muda de forma conforme o recipiente.', 'O seu volume não muda.', '<strong>Resultado: volume fixo e forma variável.</strong>'] },
        { task: 'Por que o ar pode ser comprimido dentro de uma bola de futebol?',
          steps: ['As partículas do gás estão distantes umas das outras.', '<strong>Resultado: ao ser comprimido, as partículas se aproximam.</strong>'] }
      ]
    },
    'r5-telesa': {
      title: 'Corpos e os seus materiais',
      summary: 'Você explica de que são feitos os corpos e escolhe o material adequado para cada finalidade.',
      theory: [
        `<p>Um corpo é um objeto feito de substâncias. Muitos corpos são formados por várias substâncias. A tesoura tem lâminas de metal e cabos de plástico.</p>`,
        `<p>Ao fabricar objetos escolhemos a substância de acordo com o que queremos do objeto. Se precisamos que o objeto seja transparente, escolhemos vidro.
       Se queremos que o objeto não esquente facilmente, escolhemos um material que conduza mal o calor.</p>`,
        `<ul>
         <li>Os metais conduzem bem o calor e a corrente elétrica, por isso servem para panelas e fios.</li>
         <li>Plásticos e madeira conduzem mal o calor, por isso servem para os cabos das panelas.</li>
       </ul>`,
        `<p>Ao analisar um corpo, pergunte sempre: de que substância ele é feito e por que justamente dela?</p>`
      ],
      examples: [
        { task: 'Por que os cabos das panelas são de plástico ou de madeira?',
          steps: ['Plástico e madeira conduzem mal o calor.', '<strong>Resultado: o cabo não esquenta tanto quanto o metal, por isso pode ser segurado com facilidade.</strong>'] },
        { task: 'O copo é um corpo ou uma substância?',
          steps: ['O copo é um objeto concreto.', '<strong>Resultado: um corpo.</strong>'] }
      ]
    },
    'r5-hustota': {
      title: 'Massa, volume e densidade: noções básicas',
      summary: 'Você distingue massa e volume e calcula a densidade de uma substância.',
      theory: [
        `<p><strong>Massa</strong> $m$ indica quanta substância um corpo contém. A unidade é o grama $\\text{g}$ ou o quilograma $\\text{kg}$. A massa medimos com balanças.</p>`,
        `<p><strong>Volume</strong> $V$ é o espaço que o corpo ocupa. As unidades são, por exemplo, $\\text{cm}^3$ ou mililitro, sendo $1\\,\\text{ml}=1\\,\\text{cm}^3$.
       O volume de um líquido medimos com uma proveta.</p>`,
        `<p><strong>Densidade</strong> $\\rho$ indica qual massa tem $1\\,\\text{cm}^3$ da substância. Calculamo-la pelo quociente: $\\rho = \\frac{m}{V}$.
       A densidade é uma propriedade da substância, não do corpo. A água tem densidade de aproximadamente $1\\,\\text{g/cm}^3$.</p>`,
        `<ul>
         <li>Um corpo com densidade maior que a da água afunda, por exemplo uma pedra.</li>
         <li>Um corpo com densidade menor que a da água flutua, por exemplo a madeira.</li>
       </ul>`,
        { fig: 'r1r5-hustota-voda', caption: 'Um corpo com densidade maior que a da água afunda (pedra), e um corpo com densidade menor flutua (madeira).' }
      ],
      examples: [
        { task: 'Um cubo tem massa $48\\,\\text{g}$ e volume $16\\,\\text{cm}^3$. Qual é a sua densidade?',
          steps: ['$\\rho=\\frac{m}{V}=\\frac{48}{16}$', '<strong>Resultado: $3\\,\\text{g/cm}^3$</strong>'] },
        { task: 'Uma substância tem densidade $2\\,\\text{g/cm}^3$ e um corpo feito dela tem volume $10\\,\\text{cm}^3$. Qual é a sua massa?',
          steps: ['$m=\\rho\\cdot V=2\\cdot 10$', '<strong>Resultado: $20\\,\\text{g}$</strong>'] }
      ]
    },
    'r5-merania': {
      title: 'Medição de comprimento, volume e massa',
      summary: 'Você lê corretamente o resultado de uma medição e calcula a diferença entre valores medidos.',
      theory: [
        `<p>O comprimento medimos com uma régua ou uma fita métrica. Colocamos o zero da escala exatamente no início do corpo e lemos a extremidade final.
       Um erro comum é começar a medir a partir do número 1, e não do zero.</p>`,
        `<p>O volume de um líquido medimos com uma proveta. Colocamos os olhos na altura do nível do líquido e lemos a borda inferior do nível, chamada <strong>menisco</strong>.
       Se olharmos de cima ou de baixo, o resultado fica distorcido.</p>`,
        `<p>A massa medimos com balanças. Antes de medir, zeramos a balança para não contar a massa do recipiente.</p>`,
        `<p>O volume de um corpo que afunda determinamos com água: lemos o nível antes de mergulhá-lo e depois de mergulhá-lo. A diferença entre os níveis é o volume do corpo.</p>`,
        { fig: 'r1r5-hladina', caption: 'O volume de um corpo mergulhado é a diferença entre os níveis da água depois e antes de mergulhá-lo.' }
      ],
      examples: [
        { task: 'Uma haste está sobre uma régua, do número 2 cm até o número 9 cm. Qual é o seu comprimento?',
          steps: ['O comprimento é a diferença entre o número final e o inicial: $9 - 2$.', '<strong>Resultado: 7 cm</strong>'] },
        { task: 'Há $50\\,\\text{ml}$ de água em uma proveta. Depois de mergulhar um cubo, o nível sobe para $72\\,\\text{ml}$. Qual é o volume do cubo?',
          steps: ['O volume do cubo é o aumento do nível: $72 - 50$.', '<strong>Resultado: $22\\,\\text{ml}$</strong>'] }
      ]
    },
    'r5-jednotky': {
      title: 'Unidades de grandezas físicas',
      summary: 'Você converte unidades de comprimento, massa e volume.',
      theory: [
        `<p>Grandeza física é aquilo que medimos, por exemplo comprimento, massa, tempo ou temperatura. Cada grandeza tem uma <strong>unidade</strong>,
       com a qual a comparamos. As unidades básicas do SI são, por exemplo, o metro $\\text{m}$, o quilograma $\\text{kg}$ e o segundo $\\text{s}$.</p>`,
        `<ul>
         <li>Comprimento: $1\\,\\text{km}=1000\\,\\text{m}$, $1\\,\\text{m}=100\\,\\text{cm}$, $1\\,\\text{cm}=10\\,\\text{mm}$.</li>
         <li>Massa: $1\\,\\text{kg}=1000\\,\\text{g}$, $1\\,\\text{t}=1000\\,\\text{kg}$.</li>
         <li>Volume: $1\\,\\text{l}=1000\\,\\text{ml}$, $1\\,\\text{dm}^3=1\\,\\text{l}$.</li>
       </ul>`,
        `<p>A conversão para uma unidade <strong>menor</strong> resulta em um número maior, por isso multiplicamos o número: $2\\,\\text{km}=2000\\,\\text{m}$.
       A conversão para uma unidade <strong>maior</strong> resulta em um número menor, por isso dividimos o número: $300\\,\\text{cm}=3\\,\\text{m}$.</p>`,
        `<p>Cuidado com um erro comum: $1\\,\\text{m}$ não é $10\\,\\text{cm}$, e sim $100\\,\\text{cm}$.</p>`
      ],
      examples: [
        { task: 'Converta $3{,}5\\,\\text{m}$ para centímetros.',
          steps: ['O metro tem 100 cm; na conversão para uma unidade menor multiplicamos o número.', '$3{,}5\\cdot 100=350$', '<strong>Resultado: 350 cm</strong>'] },
        { task: 'Converta $4\\,500\\,\\text{g}$ para quilogramas.',
          steps: ['O quilograma tem 1000 g; na conversão para uma unidade maior dividimos o número.', '$4500 : 1000=4{,}5$', '<strong>Resultado: $4{,}5\\,\\text{kg}$</strong>'] }
      ]
    },
    'r5-teplota': {
      title: 'Temperatura e a sua medição',
      summary: 'Você lê a temperatura em graus Celsius e calcula as suas variações.',
      theory: [
        `<p>A temperatura medimos com um <strong>termômetro</strong>. Na escala Celsius há dois pontos fixos: o gelo derretendo tem temperatura $0\\,{}^\\circ\\text{C}$
       e a água ferve a $100\\,{}^\\circ\\text{C}$ sob pressão normal.</p>`,
        `<ul>
         <li>O termômetro contém um líquido, por exemplo álcool, que se dilata ao ser aquecido. Pelo comprimento da coluna lemos a temperatura.</li>
         <li>Deixamos o termômetro no lugar por pelo menos alguns minutos, para que ele mostre a temperatura correta.</li>
         <li>O termômetro não pode encostar no fundo do recipiente, porque mostraria a temperatura do fundo, e não a do líquido.</li>
       </ul>`,
        `<p>A temperatura muda. Se ela aumenta, somamos a variação. Se diminui, subtraímos. Temperaturas negativas estão abaixo de zero:
       por exemplo, $-5\\,{}^\\circ\\text{C}$ é 5 graus mais frio que o gelo derretendo.</p>`,
        { fig: 'r1r5-teplomer', caption: 'A escala Celsius tem dois pontos fixos: o gelo derretendo, a 0 °C, e a água fervendo, a 100 °C. As temperaturas negativas ficam abaixo de zero.' }
      ],
      examples: [
        { task: 'De manhã estava $-4\\,{}^\\circ\\text{C}$, e ao meio-dia a temperatura subiu $9\\,{}^\\circ\\text{C}$. Qual é a temperatura ao meio-dia?',
          steps: ['$-4+9=5$', '<strong>Resultado: $5\\,{}^\\circ\\text{C}$</strong>'] },
        { task: 'A água estava a $20\\,{}^\\circ\\text{C}$ e foi aquecida até $100\\,{}^\\circ\\text{C}$. Em quantos graus ela foi aquecida?',
          steps: ['$100-20=80$', '<strong>Resultado: em $80\\,{}^\\circ\\text{C}$</strong>'] }
      ]
    },
    'r5-pozorovanie': {
      title: 'Observação, medição e experimentos simples',
      summary: 'Você planeja um experimento simples, registra os resultados e tira uma conclusão.',
      theory: [
        `<p>Ao investigar, seguimos passo a passo: observamos, formulamos uma pergunta, propomos uma <strong>hipótese</strong>, realizamos o experimento,
       registramos os resultados e formulamos a conclusão. A hipótese é uma suposição verificável, não uma conclusão pronta.</p>`,
        `<ol>
         <li>Defina o que você quer descobrir.</li>
         <li>No experimento, altere apenas uma coisa de cada vez.</li>
         <li>Registre os resultados imediatamente na tabela.</li>
         <li>Repita o experimento para que os resultados possam ser comparados.</li>
       </ol>`,
        `<p>A grandeza que alteramos chama-se <strong>variável</strong>. As coisas que deixamos iguais são as controladas. Se alterarmos várias coisas ao mesmo tempo, não saberemos o que causou o resultado.</p>`,
        `<p>Os valores medidos registramos sempre com a unidade, por exemplo $25\\,\\text{cm}$, e não apenas $25$.</p>`
      ],
      examples: [
        { task: 'Você quer descobrir se o sal se dissolve mais rápido em água morna do que em água fria. Qual é a variável?',
          steps: ['Alteramos a temperatura da água.', 'A quantidade de sal e de água permanece a mesma.', '<strong>Resultado: a variável é a temperatura da água.</strong>'] },
        { task: 'Como aumentar a precisão de uma medição?',
          steps: ['Repetimos o experimento várias vezes.', 'Calculamos a média dos resultados.', '<strong>Resultado: repetimos o experimento e calculamos a média dos resultados.</strong>'] }
      ]
    },
    'r6-hustota': {
      title: 'Densidade das substâncias e o seu cálculo',
      summary: 'O que a densidade indica e como a calculamos a partir da massa e do volume.',
      theory: [
        `<p>Dois corpos de mesmo tamanho podem ter massas muito diferentes. Uma esfera de chumbo é muito mais pesada que uma esfera de madeira do mesmo volume.
       A diferença não vem da forma nem do tamanho, mas da <strong>substância</strong> da qual o corpo é feito. Essa propriedade da substância é descrita pela <strong>densidade</strong>.</p>`,
        `<p><strong>Densidade</strong> mostra qual massa tem uma unidade de volume de determinada substância. Ela é representada por $\\rho$ (rô) e calculada pela fórmula
       $\\rho = \\frac{m}{V}$, onde $m$ é a massa e $V$ o volume. Portanto, dividimos a massa pelo volume.</p>`,
        `<ul>
         <li>Unidades: $\\text{g/cm}^3$ (na prática) e $\\text{kg/m}^3$ (no SI).</li>
         <li>Conversão: $1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$, pois $1\\,\\text{g}=0{,}001\\,\\text{kg}$ e $1\\,\\text{cm}^3=0{,}000001\\,\\text{m}^3$.</li>
       </ul>`,
        `<p>A densidade é uma propriedade da substância, não do corpo. Todos os pedaços da mesma substância têm a mesma densidade, sejam grandes ou pequenos.
       Ela nos ajuda a distinguir substâncias que parecem semelhantes e mais tarde explica por que alguns corpos flutuam e outros afundam.</p>`,
        `<p>Densidades aproximadas: água $1\\,\\text{g/cm}^3$, óleo cerca de $0{,}9\\,\\text{g/cm}^3$, alumínio $2{,}7\\,\\text{g/cm}^3$, ferro $7{,}8\\,\\text{g/cm}^3$.
       A madeira é mais leve que a água, por exemplo o pinho tem aproximadamente $0{,}5\\,\\text{g/cm}^3$.</p>`,
        { fig: 'r6r9-hustota', caption: 'A densidade mostra qual massa tem uma unidade de volume da substância. Com o mesmo volume, o ferro é muito mais pesado que a água.' }
      ],
      examples: [
        { task: 'Um bloco de alumínio tem massa $135\\,\\text{g}$ e volume $50\\,\\text{cm}^3$. Calcule a sua densidade.',
          steps: ['Usamos a fórmula $\\rho = \\frac{m}{V}$.', '$\\rho = \\frac{135}{50} = 2{,}7\\,\\text{g/cm}^3$', '<strong>Resultado: 2,7 g/cm³</strong>'] },
        { task: 'Qual é a massa de $200\\,\\text{cm}^3$ de água? A densidade da água é $1\\,\\text{g/cm}^3$.',
          steps: ['Da fórmula $\\rho = \\frac{m}{V}$ obtemos $m = \\rho\\cdot V$.', '$m = 1\\,\\text{g/cm}^3\\cdot 200\\,\\text{cm}^3 = 200\\,\\text{g}$', '<strong>Resultado: 200 g</strong>'] }
      ]
    },
    'r6-vlastnosti': {
      title: 'Propriedades dos líquidos e dos gases',
      summary: 'Em que os líquidos e os gases se diferem quanto à forma, ao volume e à compressibilidade.',
      theory: [
        `<p>As substâncias aparecem em três estados: sólido, líquido e gasoso. Os sólidos têm forma e volume fixos.
       <strong>Os líquidos</strong> têm volume fixo, mas adaptam a forma ao recipiente. <strong>Os gases</strong> não têm forma nem volume fixos: expandem-se e ocupam todo o recipiente.</p>`,
        `<p>Por que é assim? As partículas de um líquido estão próximas umas das outras e se mantêm unidas, mas podem deslizar umas sobre as outras, por isso o líquido escorre.
       As partículas de um gás estão distantes umas das outras e se movem livremente, por isso se espalham por todo o espaço disponível.</p>`,
        `<p><strong>Compressibilidade:</strong> os líquidos praticamente não podem ser comprimidos, pois as suas partículas já estão próximas. Os gases podem ser comprimidos,
       porque há muito espaço livre entre as partículas. Por isso o ar da bomba de bicicleta se comprime, mas a água em um recipiente fechado não.</p>`,
        `<ul>
         <li><strong>Forma:</strong> o líquido se adapta ao recipiente; o gás ocupa todo o recipiente.</li>
         <li><strong>Volume:</strong> o líquido tem volume fixo; o volume do gás é igual ao do recipiente.</li>
         <li><strong>Compressibilidade:</strong> o líquido é quase incompressível; o gás pode ser comprimido.</li>
       </ul>`,
        `<p>Líquidos e gases juntos chamamos de <strong>fluidos</strong>. Os fluidos podem ser despejados e escoar, por isso neles observamos a pressão e o empuxo.</p>`,
        { fig: 'r6r9-castice', caption: 'As partículas de um sólido estão em seus lugares, os líquidos mantêm as partículas unidas e deslizando, e os gases se movem livremente.' }
      ],
      examples: [
        { task: 'Explique por que o ar em uma seringa pode ser comprimido, mas a água não.',
          steps: ['As partículas do ar estão distantes umas das outras, com espaço livre entre elas.', 'As partículas da água estão próximas umas das outras, não há para onde comprimi-las.', '<strong>Resultado: o ar é compressível, a água quase não é.</strong>'] },
        { task: 'Um litro de água é despejado de um recipiente largo em um copo alto e estreito. Qual é agora o volume da água?',
          steps: ['A água muda de forma conforme o recipiente.', 'O volume de um líquido não muda ao ser despejado.', '<strong>Resultado: continua sendo 1 litro.</strong>'] }
      ]
    },
    'r6-tlak': {
      title: 'Pressão em líquidos e gases',
      summary: 'Pressão como força sobre uma área e a pressão em um líquido, que cresce com a profundidade.',
      theory: [
        `<p><strong>Pressão</strong> é a força que atua perpendicularmente sobre uma superfície, dividida pela área dessa superfície. Fórmula: $p=\\frac{F}{S}$, onde $F$ é a força em newtons
       e $S$ a área da superfície em $\\text{m}^2$. A unidade de pressão é o pascal: $1\\,\\text{Pa}=1\\,\\text{N/m}^2$.</p>`,
        `<p>A mesma força causa maior pressão em uma área menor. Por isso um prego com ponta fina entra facilmente na madeira, e um prego sem ponta não entra: na ponta pequena a pressão é grande.</p>`,
        `<p><strong>A pressão em um líquido</strong> aumenta com a profundidade. Quanto mais fundo estamos, mais líquido há acima de nós empurrando as camadas de baixo.
       Fórmula: $p=\\rho\\cdot g\\cdot h$, onde $\\rho$ é a densidade do líquido, $h$ a profundidade abaixo da superfície e $g\\approx 10\\,\\text{N/kg}$ (no ensino fundamental arredondamos).</p>`,
        `<p>O líquido pressiona as paredes do recipiente, o fundo e também para cima. A pressão em um líquido atua igualmente em todas as direções, desde que esteja na mesma profundidade.</p>`,
        `<p>Também o gás em um recipiente fechado pressiona as paredes em todas as direções. Quando comprimimos o gás, a sua pressão aumenta.</p>`,
        { fig: 'obr-tlak', caption: 'A pressão em um líquido aumenta com a profundidade: quanto mais fundo, maior a força que atua sobre a parede.' }
      ],
      examples: [
        { task: 'Uma força de $600\\,\\text{N}$ atua perpendicularmente sobre uma área de $0{,}5\\,\\text{m}^2$. Que pressão ela causa?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$', '$p=1200\\,\\text{Pa}$', '<strong>Resultado: 1200 Pa</strong>'] },
        { task: 'Qual é a pressão na água a uma profundidade de $3\\,\\text{m}$? A densidade da água é $1000\\,\\text{kg/m}^3$, $g=10\\,\\text{N/kg}$.',
          steps: ['$p=\\rho\\cdot g\\cdot h$', '$p=1000\\cdot 10\\cdot 3=30\\,000\\,\\text{Pa}$', '<strong>Resultado: 30 000 Pa = 30 kPa</strong>'] }
      ]
    },
    'r6-atmosfera': {
      title: 'Pressão atmosférica',
      summary: 'Por que o ar pressiona sobre nós e como a pressão muda com a altitude.',
      theory: [
        `<p>O ar ao redor da Terra tem massa e por isso pressiona sobre nós. Essa pressão chama-se <strong>pressão atmosférica</strong>. Ao nível do mar é de cerca de $101\\,\\text{kPa}$,
       o que corresponde ao peso do ar acima de um metro quadrado, de aproximadamente 10 toneladas.</p>`,
        `<p>Os meteorologistas usam o hectopascal: $1\\,\\text{hPa}=100\\,\\text{Pa}$, portanto $1\\,\\text{kPa}=10\\,\\text{hPa}$. A pressão normal é de aproximadamente $1013\\,\\text{hPa}$.
       A pressão é medida com um <strong>barômetro</strong>.</p>`,
        `<p>Por que podemos beber com um canudo? Ao sugar, reduzimos a pressão dentro da boca. A pressão atmosférica atua sobre a superfície da bebida e a empurra para cima, dentro do canudo.
       Portanto, não somos nós que puxamos a bebida: quem a empurra é o ar.</p>`,
        `<p>Com o aumento da altitude acima do mar, a pressão diminui, porque há menos ar acima de nós. Por isso, nas montanhas a pressão do ar é menor e a água ferve a uma temperatura mais baixa.</p>`,
        { fig: 'r6r9-atmosfera', caption: 'Quanto mais alto estamos, menos ar há acima de nós, e por isso a pressão atmosférica diminui.' }
      ],
      examples: [
        { task: 'Um barômetro marca a pressão de $1013\\,\\text{hPa}$. Quantos quilopascais são isso?',
          steps: ['$1\\,\\text{kPa}=10\\,\\text{hPa}$, por isso dividimos o resultado por dez.', '$1013 : 10 = 101{,}3$', '<strong>Resultado: 101,3 kPa</strong>'] },
        { task: 'Como muda a pressão atmosférica quando subimos a uma montanha alta?',
          steps: ['Há menos ar acima de nós empurrando sobre nós.', 'Por isso a pressão do ar diminui.', '<strong>Resultado: a pressão diminui</strong>'] }
      ]
    },
    'r6-vztlak': {
      title: 'Força de empuxo e flutuação dos corpos',
      summary: 'Por que um líquido alivia o peso dos corpos e quando um corpo flutua.',
      theory: [
        `<p>Uma bola mergulhada na água sobe à superfície. O líquido atua sobre o corpo submerso com uma força dirigida para cima. Essa força chama-se <strong>força de empuxo</strong>.
       Ela surge porque a pressão no líquido aumenta com a profundidade: a superfície inferior do corpo é pressionada mais fortemente que a superior.</p>`,
        `<p><strong>Princípio de Arquimedes:</strong> a força de empuxo é igual ao peso do líquido deslocado pelo corpo. Fórmula: $F_{vz}=\\rho_k\\cdot g\\cdot V_p$,
       onde $\\rho_k$ é a densidade do líquido e $V_p$ é o volume da parte submersa do corpo.</p>`,
        `<ul>
         <li>O peso do corpo é maior que o empuxo: o corpo afunda.</li>
         <li>O peso e o empuxo são iguais: o corpo fica em equilíbrio, suspenso no líquido.</li>
         <li>O empuxo é maior que o peso: o corpo sobe e flutua na superfície, ficando submersa apenas uma parte dele.</li>
       </ul>`,
        `<p>Um navio de aço flutua porque é grande e oco. A sua densidade média é menor que a da água, e por isso desloca água suficiente para sustentar o próprio peso.</p>`,
        { fig: 'obr-vztlak', caption: 'O empuxo Fvz aponta para cima, e o peso Fg para baixo. O corpo submerso fica aliviado pelo peso do líquido deslocado.' }
      ],
      examples: [
        { task: 'Um cubo com volume de $1\\,\\text{dm}^3$ está totalmente submerso na água. A água tem densidade de $1\\,\\text{kg/dm}^3$. Qual é a força de empuxo?',
          steps: ['A água deslocada tem massa $\\rho\\cdot V = 1\\,\\text{kg}$.', 'O seu peso é $1\\,\\text{kg}\\cdot 10\\,\\text{N/kg}=10\\,\\text{N}$.', '<strong>Resultado: a força de empuxo é 10 N.</strong>'] },
        { task: 'Um corpo com massa de $3\\,\\text{kg}$ flutua na água. Qual é a intensidade da força de empuxo?',
          steps: ['O corpo flutua, por isso o empuxo é igual ao peso.', '$F_{vz}=F_G=m\\cdot g=3\\cdot 10=30\\,\\text{N}$', '<strong>Resultado: 30 N</strong>'] }
      ]
    },
    'r6-teplo': {
      title: 'Temperatura, calor e troca de calor',
      summary: 'A diferença entre temperatura e calor e o sentido em que o calor flui.',
      theory: [
        `<p><strong>Temperatura</strong> indica o quão quente está um corpo. Mede-se em graus Celsius (°C). Quanto mais rápido se movem as partículas de uma substância, mais quente ela está.
       O termômetro precisa atingir a temperatura do ambiente, por isso mostra a sua própria temperatura.</p>`,
        `<p><strong>Calor</strong> é energia que se transfere entre corpos por causa da diferença de temperatura. A sua unidade é o joule (J).
       O calor sempre flui do corpo mais quente para o mais frio, nunca no sentido contrário. A geladeira é uma exceção, porque para resfriar precisa de trabalho.</p>`,
        `<p><strong>A troca de calor</strong> dura até que as temperaturas dos corpos se igualem. Então ocorre o <em>equilíbrio térmico</em>.
       O calor se transmite de três maneiras: por <em>condução</em> (uma colher de metal em um chá), por <em>convecção</em> (líquidos e gases) e por <em>radiação</em> (o calor do Sol).</p>`,
        `<p>Se misturarmos quantidades iguais de água com temperaturas diferentes e desprezarmos as perdas de calor, a temperatura final é a média aritmética das duas temperaturas.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: 'O calor flui do corpo mais quente para o mais frio. Ele se transmite por condução, convecção ou radiação.' }
      ],
      examples: [
        { task: 'Misturamos quantidades iguais de água a 80 °C e a 20 °C. Qual será a temperatura final?',
          steps: ['Para quantidades iguais, a temperatura final é a média das temperaturas.', '$\\frac{80+20}{2}=50$', '<strong>Resultado: 50 °C</strong>'] },
        { task: 'Em que sentido o calor flui entre uma xícara de chá a 70 °C e o ar a 22 °C?',
          steps: ['O calor sempre flui do corpo mais quente para o mais frio.', 'O chá tem temperatura maior, então o calor passa do chá para o ar.', '<strong>Resultado: do chá para o ambiente</strong>'] }
      ]
    },
    'r6-skupenstva': {
      title: 'Mudança de estado físico das substâncias',
      summary: 'Fusão, solidificação, vaporização, condensação, sublimação e o que acontece com as partículas.',
      theory: [
        `<p>As substâncias aparecem nos estados sólido, líquido e gasoso. Na mudança de estado, a substância não se transforma em outra substância:
       apenas muda a disposição e o movimento das suas partículas.</p>`,
        `<ul>
         <li><strong>Fusão</strong>: sólido para líquido (o gelo derrete e vira água).</li>
         <li><strong>Solidificação</strong>: líquido para sólido (a água congela).</li>
         <li><strong>Vaporização</strong>: líquido para gasoso (a roupa molhada seca).</li>
         <li><strong>Condensação</strong>: gasoso para líquido (orvalho na grama).</li>
         <li><strong>Sublimação</strong>: sólido diretamente para gasoso (gelo-seco, naftalina).</li>
         <li><strong>Ressublimação</strong>: gasoso diretamente para sólido (geada no congelador).</li>
       </ul>`,
        `<p><strong>Por quê?</strong> Na fusão, a substância precisa receber energia para que as suas partículas possam se soltar da disposição sólida. Na solidificação, ao contrário, a energia é liberada.</p>`,
        `<ol>
         <li>Ao ser aquecido, o gelo a $-5\\,{}^\\circ\\text{C}$ primeiro se aquece até $0\\,{}^\\circ\\text{C}$.</li>
         <li>A $0\\,{}^\\circ\\text{C}$ ele derrete, e a sua temperatura não muda até que todo o gelo esteja derretido.</li>
         <li>Só depois a água continua a se aquecer.</li>
       </ol>`,
        { fig: 'obr-skupenstva', caption: 'Mudanças de estado: fusão, solidificação, vaporização e condensação.' }
      ],
      examples: [
        { task: 'A água do congelador se transforma em gelo. Como se chama esse processo?',
          steps: ['A água passa do estado líquido para o sólido.', 'A passagem do líquido para o sólido chama-se solidificação.', '<strong>Resultado: solidificação</strong>'] },
        { task: 'A geada se forma em uma superfície fria diretamente a partir do vapor de água, sem passar pelo estado líquido. Como se chama esse processo?',
          steps: ['O vapor passa diretamente para o sólido.', 'A passagem do gasoso para o sólido chama-se ressublimação.', '<strong>Resultado: ressublimação</strong>'] }
      ]
    },
    'r6-var': {
      title: 'Evaporação, condensação e ebulição',
      summary: 'A diferença entre evaporação e ebulição e por que os líquidos esfriam ao evaporar.',
      theory: [
        `<p><strong>A evaporação</strong> ocorre na superfície do líquido em qualquer temperatura. As partículas mais rápidas escapam da superfície para o ambiente.
       Ela é mais rápida em temperatura mais alta, em uma superfície maior e com vento, que leva o vapor embora.</p>`,
        `<p><strong>A evaporação esfria.</strong> Do líquido saem as partículas mais rápidas, por isso o restante tem menor energia média.
       Por isso, depois do banho, o vento nos esfria: a água da pele evapora e retira calor.</p>`,
        `<p><strong>A ebulição</strong> é a passagem do líquido para gás em todo o volume, e não apenas na superfície. Ocorre a uma certa <em>temperatura de ebulição</em>, que depende da pressão.
       À pressão normal, a água ferve a 100 °C. No alto de uma montanha a pressão é menor, por isso a água ferve a uma temperatura mais baixa.</p>`,
        `<p><strong>A condensação</strong> é a transformação oposta: o vapor se transforma em líquido. Na condensação o calor é liberado para o ambiente,
       por isso uma queimadura causada por vapor é pior que uma causada por água fervente. Orvalho, névoa e nuvens se formam pela condensação do vapor de água.</p>`,
        { fig: 'r6r9-var', caption: 'A evaporação ocorre apenas na superfície, a ebulição ocorre em todo o volume do líquido, e nela se formam bolhas de vapor.' }
      ],
      examples: [
        { task: 'Por que a roupa molhada seca mais rápido ao sol e com vento?',
          steps: ['A temperatura mais alta e o vento aceleram a evaporação.', 'As partículas de água da roupa escapam mais facilmente para o ar.', '<strong>Resultado: o calor e o vento aceleram a evaporação.</strong>'] },
        { task: 'A água ferve a 100 °C à pressão normal. Em que temperatura ela ferve no alto de uma montanha alta, onde a pressão é menor?',
          steps: ['Quanto menor a pressão, menor a temperatura de ebulição.', 'No alto de uma montanha alta, a água ferve a uma temperatura menor que 100 °C.', '<strong>Resultado: a uma temperatura menor que 100 °C</strong>'] }
      ]
    }
  }
});
