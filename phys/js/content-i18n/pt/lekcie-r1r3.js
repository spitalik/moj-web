/* Português: lições 1.–3. ročníka ZŠ (js/rocniky/r1.js, r2.js, r3.js). Struktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('pt', {
  lessons: {
    'r1-pozorovanie': {
      title: 'Observação de objetos e fenômenos',
      summary: 'Observando, você descobre as propriedades dos objetos e distingue um objeto de um material.',
      theory: [
        `<p>Observar significa olhar algo de propósito. Ao observar usamos os <strong>sentidos</strong>: visão, audição, tato, olfato e paladar.
       Nunca usamos o paladar nem o olfato em substâncias desconhecidas sem a permissão de um adulto.</p>`,
        `<p><strong>Um objeto</strong> é algo que podemos ver e nomear, por exemplo uma bola, uma cadeira ou um livro.
       <strong>Um material</strong> é aquilo de que um objeto é feito, por exemplo madeira, vidro ou plástico.</p>`,
        `<p>Ao descrever um objeto falamos das suas <strong>propriedades</strong>: cor, forma, tamanho, peso, dureza ou se ele brilha.
       Uma boa descrição é precisa e permite reconhecer o objeto por ela.</p>`,
        `<ul>
         <li>Fenômeno é algo que acontece à nossa volta, por exemplo a chuva, o derretimento da neve ou a queda das folhas.</li>
         <li>Ao observar, perguntamos: o que vejo, o que ouço e o que está mudando?</li>
       </ul>`
      ],
      examples: [
        { task: 'Descreva as propriedades de uma bola.',
          steps: ['A bola é redonda e elástica.', 'Tem uma cor viva e quica no chão.', '<strong>Resultado: um objeto redondo e elástico, que quica.</strong>'] },
        { task: 'A madeira é um objeto ou um material?',
          steps: ['A madeira não tem uma forma específica, é um material.', 'Com madeira se fazem cadeiras ou mesas.', '<strong>Resultado: a madeira é um material.</strong>'] }
      ]
    },
    'r1-vlastnosti-materialov': {
      title: 'Propriedades dos materiais: dureza, elasticidade, forma',
      summary: 'Você compara materiais pela dureza, pela elasticidade e pelo fato de manterem a forma.',
      theory: [
        `<p>Os materiais são diferentes uns dos outros. Duas propriedades importantes são a <strong>dureza</strong> e a <strong>elasticidade</strong>.</p>`,
        `<ul>
         <li><strong>Um material duro</strong> é difícil de riscar ou amassar, por exemplo pedra ou metal.</li>
         <li><strong>Um material mole</strong> é fácil de cortar ou apertar, por exemplo sabão ou madeira macia.</li>
         <li><strong>Um material elástico</strong> volta à forma original depois de ser apertado ou esticado, por exemplo borracha ou mola.</li>
       </ul>`,
        `<p><strong>A forma</strong> de alguns materiais pode ser facilmente alterada. A massinha ou o barro continuam na nova forma mesmo depois de soltarmos.
       Um material assim não é elástico.</p>`,
        `<p><strong>Experimento:</strong> tente apertar uma borracha, um pedaço de massinha e um bloco de madeira. Anote qual deles volta à forma original.</p>`,
        { fig: 'r1r5-pruznost', caption: 'Uma borracha elástica volta à forma original depois de apertada; a massinha mantém a nova forma.' }
      ],
      examples: [
        { task: 'Qual material é mais duro: a pedra ou o sabão?',
          steps: ['A pedra é difícil de cortar, enquanto o sabão é fácil de cortar.', '<strong>Resultado: a pedra é mais dura.</strong>'] },
        { task: 'Qual material é elástico: a massinha ou a borracha?',
          steps: ['Depois de apertada, a borracha volta à forma original.', 'A massinha mantém a forma depois de apertada.', '<strong>Resultado: a borracha é elástica.</strong>'] }
      ]
    },
    'r1-voda-vzduch': {
      title: 'Água, ar e a sua importância',
      summary: 'Você descreve as propriedades da água e do ar e explica por que são importantes para a vida.',
      theory: [
        `<p><strong>A água</strong> é um líquido. Não tem forma própria, assume a forma do recipiente em que está. A água escorre, por isso é fácil de derramar.
       Sem água, nenhum animal ou planta conseguiria sobreviver.</p>`,
        `<p><strong>O ar</strong> não se vê, mas está em toda parte à nossa volta. Sentimos o ar como vento ou quando respiramos.
       O ar é importante porque respiramos, e sem ele as plantas não conseguiriam crescer.</p>`,
        `<ul>
         <li>A água é necessária para beber, cozinhar, lavar e para as plantas.</li>
         <li>Precisamos do ar para respirar, e o seu movimento cria o vento.</li>
         <li>O ar enche um balão quando o enchemos. O balão fica maior porque o ar ocupa espaço.</li>
       </ul>`,
        `<p><strong>Experimento:</strong> coloque um lenço de papel dentro de um copo, vire o copo de cabeça para baixo e empurre-o para dentro da água. O lenço fica seco, porque o ar dentro do copo não deixa a água entrar.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'Um copo virado de cabeça para baixo e mergulhado na água fica seco, porque o ar lá dentro ocupa espaço e não deixa a água entrar.' }
      ],
      examples: [
        { task: 'Por que uma pessoa precisa de água?',
          steps: ['A água está no corpo e ajuda-o a funcionar.', 'Sem água, uma pessoa não sobreviveria por muito tempo.', '<strong>Resultado: a água é necessária para a vida.</strong>'] },
        { task: 'O que existe dentro de um balão cheio?',
          steps: ['O balão foi enchido, mas nós não colocamos nada dentro dele.', 'O ar está em toda parte à nossa volta, também dentro do balão.', '<strong>Resultado: há ar dentro do balão.</strong>'] }
      ]
    },
    'r1-svetlo-tien-teplo': {
      title: 'Luz, sombra e calor no dia a dia',
      summary: 'Você descobre de onde vêm a luz e o calor e explica como se forma uma sombra.',
      theory: [
        `<p><strong>O Sol</strong> nos dá luz e calor. A luz nos ajuda a enxergar, e o calor nos aquece.
       Uma lâmpada e uma vela também dão luz, e algumas delas também dão calor.</p>`,
        `<p>Quando a luz atinge um objeto que não deixa a luz passar, forma-se uma <strong>sombra</strong> atrás do objeto.
       A sombra é um lugar escuro onde a luz não chega.</p>`,
        `<ul>
         <li>Objetos de madeira ou de pedra projetam sombra.</li>
         <li>O vidro e a água deixam a luz passar, por isso a sombra atrás deles não é escura.</li>
       </ul>`,
        `<p>Num dia quente de verão procuramos a sombra de uma árvore, porque ali o Sol não nos aquece tanto. O calor chega até nós principalmente pelos raios solares, e a sombra os bloqueia.</p>`,
        { fig: 'obr-tien', caption: 'A sombra se forma onde a luz não consegue chegar, porque um objeto opaco a bloqueia.' }
      ],
      examples: [
        { task: 'Por que há uma sombra debaixo de uma árvore num dia de sol?',
          steps: ['O Sol brilha sobre a árvore.', 'A árvore é opaca, por isso a luz não consegue atravessá-la.', '<strong>Resultado: forma-se uma sombra atrás da árvore.</strong>'] },
        { task: 'Qual objeto nos dá luz e calor ao mesmo tempo?',
          steps: ['Um objeto que queima ou brilha dá luz e calor.', 'O Sol brilha e nos aquece.', '<strong>Resultado: o Sol.</strong>'] }
      ]
    },
    'r1-zmeny-prirody': {
      title: 'Observação das mudanças na natureza',
      summary: 'Você descreve como a natureza muda durante o dia e durante o ano.',
      theory: [
        `<p>A natureza está em constante mudança. Algumas mudanças são rápidas, por exemplo a chuva ou o vento. Outras são mais lentas, por exemplo o crescimento de uma árvore ou a sucessão das estações do ano.</p>`,
        `<ul>
         <li><strong>Primavera</strong>: as flores crescem, as árvores soltam folhas, está mais quente.</li>
         <li><strong>Verão</strong>: é a época mais quente, e os dias são longos.</li>
         <li><strong>Outono</strong>: as folhas amarelam e caem, está mais frio.</li>
         <li><strong>Inverno</strong>: é a época mais fria, muitas vezes cai neve e as plantas ficam em repouso.</li>
       </ul>`,
        `<p>Durante o dia mudam a luz e a temperatura: de manhã está mais fresco, ao meio-dia é mais quente, e à noite escurece.
       Os dias e as noites se alternam porque a Terra gira.</p>`,
        `<p>Você pode registrar as mudanças num diário da natureza, por exemplo anotando a cada semana quantas folhas tem a árvore.</p>`,
        { fig: 'r1r5-zem-den-noc', caption: 'A Terra gira em torno do próprio eixo. O lado voltado para o Sol tem dia, e o lado oposto tem noite.' }
      ],
      examples: [
        { task: 'Como é o outono como estação do ano?',
          steps: ['No outono as folhas amarelam e caem.', 'Está mais frio e os dias são mais curtos.', '<strong>Resultado: o outono é a estação em que as folhas caem.</strong>'] },
        { task: 'Por que os dias e as noites se alternam?',
          steps: ['A Terra gira em torno do próprio eixo.', 'Quando o nosso lado está voltado para o Sol, é dia.', '<strong>Resultado: a rotação da Terra faz o dia e a noite se alternarem.</strong>'] }
      ]
    },
    'r2-vlastnosti-latok': {
      title: 'Propriedades das substâncias e dos objetos',
      summary: 'Você identifica as propriedades das substâncias, como a transparência, a resistência e a capacidade de conduzir eletricidade.',
      theory: [
        `<p>Cada substância tem as suas próprias <strong>propriedades</strong>. Com base nelas podemos escolher de que material um determinado objeto pode ser feito.
       Por exemplo, não fazemos janelas de madeira, porque a madeira não é transparente.</p>`,
        `<ul>
         <li><strong>Uma substância transparente</strong> deixa a luz passar, por exemplo o vidro ou a água limpa.</li>
         <li><strong>Uma substância opaca</strong> não deixa a luz passar, por exemplo a madeira ou a pedra.</li>
         <li><strong>Uma substância brilhante</strong> reflete a luz, por exemplo o metal.</li>
         <li><strong>Uma substância condutora</strong> conduz a corrente elétrica, por exemplo o metal. O plástico é um <strong>isolante</strong>, não conduz a corrente elétrica.</li>
       </ul>`,
        `<p>Ao descrever uma substância podemos perguntar: é dura, mole, transparente, brilhante, elástica? Quanto mais precisa for a descrição, mais fácil será reconhecê-la.</p>`,
        `<p><strong>Experimento:</strong> num lugar escuro, ilumine com uma lanterna o vidro, a madeira e um plástico fino. Anote qual deles deixou a luz passar.</p>`,
        { fig: 'r1r5-priehladnost', caption: 'O vidro deixa a luz passar, a madeira a bloqueia, e o metal reflete a luz.' }
      ],
      examples: [
        { task: 'Por que as janelas são feitas de vidro, e não de madeira?',
          steps: ['A janela deve ser transparente, para que a luz atravesse.', 'O vidro é transparente, a madeira não é.', '<strong>Resultado: o vidro é uma substância transparente, por isso serve para janelas.</strong>'] },
        { task: 'Qual substância conduz a corrente elétrica: o cobre ou o plástico?',
          steps: ['O cobre é um metal, e os metais conduzem a corrente.', 'O plástico é um isolante e não conduz a corrente.', '<strong>Resultado: o cobre.</strong>'] }
      ]
    },
    'r2-skupenstva': {
      title: 'Sólidos, líquidos e gases',
      summary: 'Você distingue sólidos, líquidos e gases pela forma e pelo volume.',
      theory: [
        `<p>As substâncias existem em três <strong>estados físicos</strong>: sólido, líquido e gasoso.</p>`,
        `<ul>
         <li><strong>Um sólido</strong> tem forma e volume constantes. Um cubo de gelo ou uma pedra mantêm a sua forma.</li>
         <li><strong>Um líquido</strong> tem volume constante, mas a forma muda conforme o recipiente. A água no copo tem a forma do copo.</li>
         <li><strong>Um gás</strong> não tem forma nem volume constantes. Ocupa todo o recipiente em que está.</li>
       </ul>`,
        `<p>O ar é um gás. Quando enchemos um balão, estamos enchendo-o com gás, e ele se espalha por todo o balão.</p>`,
        `<p>O estado físico de uma substância pode ser observado. Pegue um cubo de gelo, depois a água num copo e, por fim, o ar dentro de um balão, e compare-os.</p>`,
        { fig: 'obr-skupenstva', caption: 'Mudanças de estado: fusão, solidificação, evaporação e condensação.' }
      ],
      examples: [
        { task: 'Em que estado físico está o leite num copo?',
          steps: ['O leite escorre e assume a forma do copo.', 'Tem volume constante, mas não tem forma constante.', '<strong>Resultado: líquido.</strong>'] },
        { task: 'Qual estado físico tem forma constante?',
          steps: ['O sólido mantém a sua forma.', 'O gás e o líquido não têm forma constante.', '<strong>Resultado: sólido.</strong>'] }
      ]
    },
    'r2-voda-vzduch': {
      title: 'Água e ar',
      summary: 'Observando, você descobre que o ar ocupa espaço e que a água escorre e muda de forma.',
      theory: [
        `<p><strong>A água</strong> é um líquido. Escorre, assume a forma do recipiente e pode ser passada de um recipiente para outro.
       A água pode ser congelada e transformar-se em gelo, ou aquecida até virar vapor.</p>`,
        `<p><strong>O ar</strong> é um gás. Mesmo sem o vermos, ele ocupa espaço. Por isso, dentro de um balão cheio cabe apenas uma certa quantidade de ar.</p>`,
        `<ul>
         <li>A água se infiltra na areia e no solo. Algumas substâncias se dissolvem na água, outras não.</li>
         <li>O ar se movimenta como vento. O vento pode mover as folhas e fazer girar o cata-vento.</li>
       </ul>`,
        `<p><strong>Experimento:</strong> coloque dentro de um recipiente com água um copo vazio virado de cabeça para baixo e observe se a água entra nele. O ar dentro do copo impede a água de entrar.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'Um copo virado de cabeça para baixo e mergulhado na água fica seco, porque o ar lá dentro ocupa espaço e não deixa a água entrar.' }
      ],
      examples: [
        { task: 'Por que um copo virado de cabeça para baixo não se enche de água?',
          steps: ['Dentro do copo há ar.', 'O ar ocupa espaço e não deixa a água entrar.', '<strong>Resultado: o ar dentro do copo ocupa lugar.</strong>'] },
        { task: 'Em que estado físico está a água e como ela se comporta?',
          steps: ['A água é um líquido.', 'Ela escorre e assume a forma do recipiente.', '<strong>Resultado: a água é um líquido que escorre.</strong>'] }
      ]
    },
    'r2-zmeny-skupenstva': {
      title: 'Mudanças de estado físico no dia a dia',
      summary: 'Você dá nome à fusão, à solidificação, à evaporação e à condensação com exemplos do cotidiano.',
      theory: [
        `<p>Uma substância pode <strong>transformar-se</strong> de um estado físico em outro. Isso vemos com mais frequência na água.</p>`,
        `<ul>
         <li><strong>Fusão</strong>: uma substância sólida passa a líquido, por exemplo o gelo vira água quando aquecido.</li>
         <li><strong>Solidificação</strong>: um líquido passa a sólido, por exemplo a água vira gelo no congelador.</li>
         <li><strong>Evaporação</strong>: um líquido passa a gás (vapor), por exemplo a roupa molhada seca.</li>
         <li><strong>Condensação</strong>: um gás (vapor) passa a líquido, por exemplo as gotas que se formam num copo gelado.</li>
       </ul>`,
        `<p>Na fusão e na evaporação a substância <strong>absorve</strong> calor. Na solidificação e na condensação ela <strong>cede</strong> calor. Por isso, no inverno as poças esfriam depressa, e no verão a água seca rapidamente.</p>`,
        { fig: 'r1r5-zmeny-voda', caption: 'A fusão e a evaporação exigem absorver calor; a solidificação e a condensação o devolvem.' }
      ],
      examples: [
        { task: 'Como se chama a mudança em que a neve vira água?',
          steps: ['A neve é um sólido.', 'Quando aquecida, transforma-se em líquido.', '<strong>Resultado: fusão.</strong>'] },
        { task: 'O que acontece com a roupa molhada ao sol?',
          steps: ['A água da roupa vira vapor.', 'O vapor sai para o ar.', '<strong>Resultado: evaporação, a roupa seca.</strong>'] }
      ]
    },
    'r2-magnety': {
      title: 'Ímãs e os seus efeitos',
      summary: 'Você descobre quais objetos um ímã atrai e descreve os polos do ímã.',
      theory: [
        `<p><strong>Um ímã</strong> atrai objetos de ferro, aço e níquel. Madeira, plástico, papel e vidro não são atraídos pelo ímã.</p>`,
        `<p>Cada ímã tem dois <strong>polos</strong>: norte e sul. O efeito mais forte está nas suas extremidades.</p>`,
        `<ul>
         <li>Dois polos iguais <strong>se repelem</strong>.</li>
         <li>Dois polos diferentes <strong>se atraem</strong>.</li>
       </ul>`,
        `<p>O ímã também atua através de alguns materiais, por exemplo através do papel ou de uma camada fina de plástico. Através do ferro, porém, o efeito do ímã se transmite com mais dificuldade.</p>`,
        { fig: 'obr-magnet', caption: 'As linhas de campo de um ímã em barra saem do polo norte N e entram no polo sul S.' }
      ],
      examples: [
        { task: 'O ímã atrai uma chave de aço?',
          steps: ['O aço contém ferro.', 'O ímã atrai o ferro.', '<strong>Resultado: sim, a chave de aço é atraída pelo ímã.</strong>'] },
        { task: 'O que acontece se aproximarmos dois ímãs pelos polos norte?',
          steps: ['Os dois polos são iguais.', 'Polos iguais se repelem.', '<strong>Resultado: os ímãs se afastam um do outro.</strong>'] }
      ]
    },
    'r2-pokusy': {
      title: 'Observações simples e experimentos',
      summary: 'Você planeja um experimento simples e registra as observações e a conclusão.',
      theory: [
        `<p>Um experimento é a verificação da nossa ideia. Primeiro formulamos uma pergunta, depois enunciamos uma <strong>hipótese</strong>, fazemos o experimento e registramos os resultados.</p>`,
        `<ol>
         <li><strong>Pergunta</strong>: o que queremos descobrir? Por exemplo: o açúcar se dissolve mais depressa em água quente ou em água fria?</li>
         <li><strong>Hipótese</strong>: o que achamos que vai acontecer? Por exemplo: em água quente o açúcar se dissolve mais depressa.</li>
         <li><strong>Experimento e observação</strong>: fazemos o experimento e anotamos com precisão o que vemos.</li>
         <li><strong>Conclusão</strong>: o experimento confirmou a nossa hipótese? Se não, não há problema: o resultado também é uma informação.</li>
       </ol>`,
        `<p>Durante um experimento, siga sempre as regras de segurança e trabalhe em condições iguais, para que o resultado seja confiável.</p>`
      ],
      examples: [
        { task: 'Qual é o primeiro passo de um experimento simples?',
          steps: ['Primeiro formulamos uma pergunta.', 'Depois enunciamos uma hipótese e fazemos o experimento.', '<strong>Resultado: o primeiro passo é formular uma pergunta.</strong>'] },
        { task: 'O que anotamos depois do experimento?',
          steps: ['Anotamos as observações, ou seja, o que vimos.', 'No fim escrevemos a conclusão.', '<strong>Resultado: as observações e a conclusão.</strong>'] }
      ]
    },
    'r3-latky': {
      title: 'Substâncias e as suas propriedades',
      summary: 'Você compara substâncias pela transparência, pela dureza, pela solubilidade e por outras propriedades.',
      theory: [
        `<p>Cada objeto é feito de alguma <strong>substância</strong>. A mesma substância, porém, encontramos em objetos diferentes: com madeira se fazem cadeiras e lápis.</p>`,
        `<ul>
         <li><strong>Transparência</strong>: através de uma substância transparente enxergamos, por exemplo o vidro.</li>
         <li><strong>Dureza</strong>: uma substância dura é difícil de riscar, por exemplo a pedra.</li>
         <li><strong>Solubilidade</strong>: uma substância solúvel se dissolve na água e desaparece, por exemplo o açúcar ou o sal. A areia não se dissolve na água.</li>
         <li><strong>Magnetismo</strong>: o ímã atrai o ferro e o aço, mas não a madeira nem o plástico.</li>
       </ul>`,
        `<p>Comparamos as propriedades das substâncias observando, medindo e anotando os resultados. Assim, por exemplo, podemos descobrir qual substância se dissolve mais depressa.</p>`,
        `<p><strong>Experimento:</strong> coloque açúcar, areia e uma pedrinha em três copos com água. Observe onde cada uma desaparece e onde fica no fundo.</p>`
      ],
      examples: [
        { task: 'Qual substância se dissolve na água: o sal ou a areia?',
          steps: ['O sal se dissolve na água e desaparece.', 'A areia fica no fundo e não se dissolve.', '<strong>Resultado: o sal.</strong>'] },
        { task: 'Qual substância o ímã atrai: um prego de ferro ou uma varinha de madeira?',
          steps: ['O ímã atrai o ferro.', 'A madeira não é atraída pelo ímã.', '<strong>Resultado: o prego de ferro.</strong>'] }
      ]
    },
    'r3-merania': {
      title: 'Medição de comprimento, tempo e temperatura',
      summary: 'Você escolhe o instrumento e a unidade adequados e faz conversões simples de comprimento.',
      theory: [
        `<p>Ao medir, descobrimos sempre <strong>quanto</strong> de algo existe e comparamos com uma unidade. Cada grandeza tem a sua unidade e o seu instrumento.</p>`,
        `<ul>
         <li><strong>Comprimento</strong>: medimos com régua ou fita métrica. As unidades são o centímetro (cm) e o metro (m).</li>
         <li><strong>Tempo</strong>: medimos com relógio ou cronômetro. As unidades são o segundo (s), o minuto (min) e a hora (h).</li>
         <li><strong>Temperatura</strong>: medimos com termômetro. A unidade é o grau Celsius (°C).</li>
       </ul>`,
        `<p>Um metro tem <strong>100 centímetros</strong>. Na conversão, portanto, multiplicamos por cem: 3 m = 300 cm.</p>`,
        `<p>Ao medir o comprimento, encoste a régua no início do objeto e leia o final na mesma altura, para que o resultado seja preciso.</p>`,
        { fig: 'r1r5-pravitko', caption: 'Colocamos o zero da régua no início do objeto e lemos o final. O objeto mede 7 cm de comprimento.' }
      ],
      examples: [
        { task: 'Quantos centímetros são 4 metros?',
          steps: ['Um metro tem 100 centímetros.', 'Quatro metros têm $4 \\cdot 100 = 400$ centímetros.', '<strong>Resultado: 400 cm</strong>'] },
        { task: 'Qual instrumento usar para medir o tempo de uma corrida?',
          steps: ['O tempo medimos com um instrumento que mostra segundos e minutos.', 'O termômetro mede a temperatura, a régua mede o comprimento.', '<strong>Resultado: o cronômetro.</strong>'] }
      ]
    },
    'r3-teplo': {
      title: 'Calor e aquecimento dos objetos',
      summary: 'Você explica como os objetos se aquecem e se resfriam e por que alguns deles aquecem mais depressa.',
      theory: [
        `<p><strong>O calor</strong> passa do objeto mais quente para o mais frio. Por isso a sopa fria numa panela esquenta quando a colocamos no fogão.</p>`,
        `<ul>
         <li><strong>Objetos escuros</strong> absorvem mais luz solar e por isso aquecem mais depressa.</li>
         <li><strong>Objetos claros</strong> refletem mais luz e aquecem mais devagar.</li>
         <li><strong>Os metais</strong> conduzem o calor depressa, por isso uma colher dentro de uma sopa quente esquenta rapidamente.</li>
       </ul>`,
        `<p>O aquecimento medimos com um termômetro. A temperatura sobe quando um objeto recebe calor e desce quando cede calor.</p>`,
        { fig: 'r1r5-teplo-tok', caption: 'O calor passa do corpo mais quente para o mais frio, e não ao contrário.' }
      ],
      examples: [
        { task: 'Qual objeto aquece mais depressa ao sol: uma camiseta escura ou uma branca?',
          steps: ['Objetos escuros absorvem mais luz.', 'Objetos brancos refletem a luz e o calor.', '<strong>Resultado: a camiseta escura aquece mais depressa.</strong>'] },
        { task: 'Por que uma colher de metal aquece rapidamente numa sopa quente?',
          steps: ['O metal conduz o calor depressa.', 'O calor passa da sopa para a colher.', '<strong>Resultado: o metal conduz bem o calor.</strong>'] }
      ]
    },
    'r3-rozpustanie': {
      title: 'Dissolução de substâncias na água',
      summary: 'Você descobre quais substâncias se dissolvem na água e quais fatores aceleram a dissolução.',
      theory: [
        `<p><strong>A dissolução</strong> acontece quando uma substância se divide na água em partes tão pequenas que já não as vemos. A solução fica então transparente.</p>`,
        `<ul>
         <li><strong>Substâncias solúveis</strong>: açúcar, sal, cacau.</li>
         <li><strong>Substâncias insolúveis</strong>: areia, pedrinhas, óleo (este forma uma camada por cima da água).</li>
       </ul>`,
        `<p>A dissolução acontece mais depressa quando:</p>
       <ol>
         <li>a água está quente,</li>
         <li>a substância é mexida,</li>
         <li>a substância foi antes triturada em pedaços menores.</li>
       </ol>`,
        `<p><strong>Experimento:</strong> coloque a mesma quantidade de açúcar em dois copos, encha um com água quente e o outro com água fria. Observe em qual deles o açúcar se dissolve mais depressa.</p>`,
        { fig: 'r1r5-castice-teplota', caption: 'Em água mais quente as partículas se movem mais depressa, por isso o açúcar se dissolve mais rápido.' }
      ],
      examples: [
        { task: 'Qual substância se dissolve na água: a pedrinha ou o açúcar?',
          steps: ['O açúcar se dissolve na água.', 'A pedrinha fica no fundo.', '<strong>Resultado: o açúcar.</strong>'] },
        { task: 'Onde o açúcar se dissolve mais depressa: em água quente ou em água fria?',
          steps: ['As moléculas da água quente se movem mais depressa.', 'A água que se move mais depressa dissolve o açúcar mais cedo.', '<strong>Resultado: em água quente.</strong>'] }
      ]
    },
    'r3-pohyb': {
      title: 'Movimento dos objetos e ação das forças',
      summary: 'Você descreve como as forças colocam os objetos em movimento ou os fazem parar.',
      theory: [
        `<p>Um objeto se move quando algo <strong>atua</strong> sobre ele. Essa ação chama-se <strong>força</strong>. A força pode empurrar ou puxar.</p>`,
        `<ul>
         <li><strong>A força da gravidade</strong> puxa os objetos para o chão. Graças a ela a bola cai.</li>
         <li><strong>O atrito</strong> atua entre objetos que se tocam. Ele reduz o movimento, por exemplo o de uma bola na grama.</li>
         <li><strong>A força magnética</strong> atua entre um ímã e o ferro.</li>
       </ul>`,
        `<p>Uma força pode colocar um objeto em movimento, acelerá-lo, freá-lo ou mudar a direção do movimento.</p>`,
        `<p>Um livro está sobre a mesa porque a mesa o empurra para cima e a gravidade o puxa para baixo. Essas duas forças se equilibram, e por isso o livro não se move.</p>`,
        { fig: 'r1r5-sily-stol', caption: 'O livro está sobre a mesa: o apoio empurra para cima com a força N, a gravidade puxa para baixo com a força Fg. As forças se equilibram.' }
      ],
      examples: [
        { task: 'Qual força freia a bola que rola na grama?',
          steps: ['A grama e a bola se tocam e se esfregam uma na outra.', 'Esse atrito freia a bola.', '<strong>Resultado: o atrito.</strong>'] },
        { task: 'Por que a bola cai quando a soltamos?',
          steps: ['Sobre a bola atua a força da gravidade.', 'Essa força a puxa em direção ao chão.', '<strong>Resultado: a força da gravidade.</strong>'] }
      ]
    },
    'r3-zaznamenavanie': {
      title: 'Observação e registro dos resultados de experimentos',
      summary: 'Você registra os resultados de um experimento numa tabela e tira deles uma conclusão.',
      theory: [
        `<p>Durante um experimento não basta observar. Os resultados precisam ser <strong>registrados</strong>, senão depois não nos lembraremos deles.</p>`,
        `<ol>
         <li>Anotamos o que fizemos e com quê.</li>
         <li>Durante o experimento registramos os valores medidos numa <strong>tabela</strong>.</li>
         <li>No fim comparamos os resultados e escrevemos uma <strong>conclusão</strong>.</li>
       </ol>`,
        `<p>A tabela tem colunas para as medições individuais, por exemplo o tempo que o açúcar precisa para se dissolver e a temperatura da água. Graças à tabela vemos como duas grandezas se relacionam.</p>`,
        `<p>Anote com precisão, e não de acordo com o que você acha. Se o resultado não saiu como esperava, anote isso também.</p>`
      ],
      examples: [
        { task: 'O que é melhor fazer com os valores medidos durante o experimento?',
          steps: ['Se não os anotarmos, logo os esquecemos.', 'Anotamos os valores na tabela assim que os medimos.', '<strong>Resultado: anotá-los na tabela.</strong>'] },
        { task: 'O que vai na tabela de um experimento de dissolução?',
          steps: ['No experimento medimos o tempo e a temperatura da água.', 'Esses valores anotamos nas colunas.', '<strong>Resultado: o tempo de dissolução e a temperatura da água.</strong>'] }
      ]
    }
  }
});
