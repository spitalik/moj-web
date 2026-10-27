/* Português: lições de nível universitário dos níveis v9–v12 (js/rocniky/v9.js, v10.js, v11.js, v12.js). Estrutura e chaves: js/content-i18n.js. */
CONTENT_I18N.add('pt', {
  lessons: {
    'v9-kryst-struktury': {
      title: 'Estruturas cristalinas',
      summary: 'A célula unitária, os tipos de redes cúbicas e o número de átomos por célula.',
      theory: [
        `<p>Um cristal é uma substância em que os átomos estão dispostos de forma regular em uma <em>rede</em> espacial. O menor conjunto que, repetido por translações, forma toda a rede é a <strong>célula unitária</strong>.</p>`,
        `<p>As três células cúbicas básicas são: <em>cúbica simples</em> (átomos apenas nos vértices), <em>cúbica de corpo centrado</em> (além dos vértices, um átomo no centro) e <em>cúbica de face centrada</em> (além dos vértices, átomos nos centros das faces).</p>`,
        `<p>Um átomo no centro pertence inteiramente à célula, um átomo em uma face pertence a ela pela metade e um átomo em um vértice por um oitavo. Por isso a célula cúbica simples tem 1 átomo, a de corpo centrado 2 átomos e a de face centrada 4 átomos.</p>`,
        `<p>O arranjo influencia as propriedades mecânicas. Metais com rede cúbica de face centrada (Al, Cu, Au) são dúcteis, porque seus planos atômicos deslizam facilmente uns sobre os outros.</p>`,
        { fig: 'v9v12-bunka', caption: 'Célula unitária: redes cúbicas simples, de corpo centrado e de face centrada, e o número de átomos que pertencem a cada uma.' }
      ],
      examples: [
        { task: 'Quantos átomos pertencem a uma célula unitária de uma rede de face centrada?',
          steps: ['Oito átomos nos vértices, cada um pertencendo à célula por um oitavo: $8\\cdot\\tfrac{1}{8}=1$.', 'Seis átomos nas faces, cada um pela metade: $6\\cdot\\tfrac{1}{2}=3$.', '<strong>Resultado: $1+3=4$ átomos</strong>'] },
        { task: 'Quantos átomos tem uma célula cúbica de corpo centrado?',
          steps: ['Os vértices dão $8\\cdot\\tfrac{1}{8}=1$ átomo.', 'O átomo no centro pertence inteiramente à célula, portanto soma 1.', '<strong>Resultado: 2 átomos</strong>'] }
      ]
    },
    'v9-vazby': {
      title: 'Ligações atômicas em sólidos',
      summary: 'Ligações iônica, covalente, metálica e de van der Waals e suas consequências.',
      theory: [
        `<p>Átomos se unem em um sólido quando isso reduz a energia total do sistema. A ligação se forma pela redistribuição ou pelo compartilhamento de elétrons de valência.</p>`,
        `<ul><li><strong>Iônica</strong>: elétrons passam de um átomo para outro e formam-se íons de cargas opostas (por ex. NaCl). Essas substâncias são duras, frágeis e têm alto ponto de fusão.</li><li><strong>Covalente</strong>: os átomos compartilham pares de elétrons (diamante, silício). As ligações são fortes e as substâncias são duras.</li><li><strong>Metálica</strong>: os elétrons de valência formam um “gás de elétrons” comum, que pertence a todos os átomos (Cu, Fe). Os metais são dúcteis e conduzem corrente.</li><li><strong>Van der Waals</strong>: forças atrativas fracas entre dipolos temporários (por ex. CO₂ sólido ou camadas de grafite). Rompem-se facilmente.</li></ul>`,
        `<p>As propriedades de um sólido, como dureza, condutividade e ponto de fusão, são consequência direta do tipo de ligação. Conhecendo a ligação, podemos prever como o material se comportará.</p>`
      ],
      examples: [
        { task: 'Qual ligação existe no metal cobre?',
          steps: ['Os átomos de cobre liberam elétrons de valência para um “mar” comum.', '<strong>Resultado: ligação metálica</strong>'] },
        { task: 'Por que o diamante é muito duro?',
          steps: ['Cada átomo de carbono está ligado covalentemente a quatro vizinhos.', 'Uma rede tão rígida exige muita energia para ser rompida.', '<strong>Resultado: ligações covalentes fortes em todo o cristal</strong>'] }
      ]
    },
    'v9-elektricke-tepelne': {
      title: 'Propriedades elétricas e térmicas dos materiais',
      summary: 'Resistividade, dependência da resistência com a temperatura e condutividade térmica.',
      theory: [
        `<p>A resistência de um condutor é $R = \\rho\\dfrac{l}{S}$, onde $\\rho$ é a <em>resistividade</em> do material, $l$ o comprimento e $S$ a área da seção transversal. A resistividade do cobre é aproximadamente $1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$. Um condutor mais longo e mais fino oferece maior resistência.</p>`,
        `<p>O metal conduz corrente porque seus elétrons de valência se movem livremente na rede. Ao aumentar a temperatura, as vibrações dos íons da rede dispersam esse movimento, por isso a resistência do metal cresce com a temperatura. Já nos semicondutores e isolantes, com a temperatura se libera mais portadores de carga e a resistência diminui.</p>`,
        `<p><strong>Condutividade térmica:</strong> nos metais o calor é transportado principalmente pelos elétrons livres; nos não metais, pelas vibrações da rede (fônons). Por isso o cobre é um excelente condutor de calor, enquanto o vidro e a cerâmica isolam termicamente.</p>`
      ],
      examples: [
        { task: 'Um fio de cobre de comprimento 50 m e seção transversal 2 mm² tem qual resistência? A resistividade do cobre é $\\rho=1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$.',
          steps: ['Convertemos a área: $S=2\\,\\text{mm}^2=2\\cdot 10^{-6}\\,\\text{m}^2$.', '$R=\\rho\\dfrac{l}{S}=1{,}7\\cdot 10^{-8}\\cdot\\dfrac{50}{2\\cdot 10^{-6}}=0{,}425\\,\\Omega$.', '<strong>Resultado: aproximadamente 0,43 Ω</strong>'] },
        { task: 'Qual condutor tem maior resistência, o mais longo ou o mais curto, com a mesma seção transversal e o mesmo material?',
          steps: ['A resistência é proporcional ao comprimento $l$.', '<strong>Resultado: o mais longo</strong>'] }
      ]
    },
    'v9-pasova-teoria': {
      title: 'Teoria de bandas dos sólidos',
      summary: 'Bandas de energia em um cristal e a divisão das substâncias em condutores, semicondutores e isolantes.',
      theory: [
        `<p>Ao reunir um grande número de átomos, os níveis discretos de energia dos elétrons se transformam em <em>bandas</em>, isto é, conjuntos de níveis muito próximos. Entre as bandas pode haver uma <strong>banda proibida</strong> de largura $E_g$, na qual os elétrons não podem estar.</p>`,
        `<p>A banda mais alta ocupada é a <em>banda de valência</em>; acima dela fica a <em>banda de condução</em>. Os elétrons preenchem as bandas de baixo para cima, e o princípio de Pauli proíbe que dois elétrons ocupem o mesmo estado. Uma banda totalmente preenchida não conduz corrente, porque os elétrons nela não têm para onde se deslocar.</p>`,
        `<ul><li><strong>Condutor</strong> (metal): não há banda proibida, as bandas se sobrepõem e a banda de condução está parcialmente preenchida.</li><li><strong>Semicondutor</strong>: $E_g$ de aproximadamente 0,1 a 3 eV (o silício tem 1,1 eV). À temperatura ambiente, alguns elétrons chegam à banda de condução.</li><li><strong>Isolante</strong>: $E_g$ maior que 3 eV (o diamante tem 5,5 eV).</li></ul>`,
        { fig: 'v9v12-pasy', caption: 'Em um condutor as bandas se sobrepõem, em um semicondutor há uma banda proibida estreita E_g, em um isolante uma banda larga.' }
      ],
      examples: [
        { task: 'Um material tem largura da banda proibida $E_g = 0{,}67\\,\\text{eV}$. É condutor, semicondutor ou isolante?',
          steps: ['O valor está entre 0,1 e 3 eV e não é nulo.', '<strong>Resultado: semicondutor (por ex. germânio)</strong>'] },
        { task: 'Por que o diamante ($E_g=5{,}5\\,\\text{eV}$) não conduz corrente?',
          steps: ['A banda proibida é muito larga.', 'Em temperaturas comuns, os elétrons não chegam à banda de condução.', '<strong>Resultado: é um isolante</strong>'] }
      ]
    },
    'v9-polovodice': {
      title: 'Semicondutores e transistores',
      summary: 'Dopagem do silício, junção PN e princípio do transistor.',
      theory: [
        `<p>O silício puro tem quatro elétrons de valência e se liga covalentemente. À temperatura ambiente, uma pequena parte dos elétrons se libera para a banda de condução e deixa <em>lacunas</em>, posições para as quais um elétron pode migrar. Fala-se em condutividade intrínseca.</p>`,
        `<p><strong>A dopagem</strong> aumenta a condutividade. Um elemento com cinco elétrons de valência (fósforo, arsênio, antimônio) fornece um elétron livre extra e forma-se um semicondutor do tipo $n$, em que os portadores são elétrons. Um elemento com três elétrons de valência (boro, alumínio, gálio) cria lacunas e forma-se um semicondutor do tipo $p$.</p>`,
        `<p><strong>A junção PN</strong> forma-se unindo os dois tipos. No sentido direto a corrente passa; no sentido inverso, praticamente não. O transistor é composto por duas dessas junções, e uma pequena corrente em um circuito controla uma corrente grande em outro.</p>`,
        `<p>O transistor serve como amplificador e como interruptor. Bilhões de transistores compõem todos os circuitos digitais de computadores e celulares.</p>`,
        { fig: 'v9v12-pn', caption: 'Na junção PN se encontram lacunas da região p e elétrons da região n.' }
      ],
      examples: [
        { task: 'Adicionamos fósforo ao silício. Que tipo de semicondutor se forma?',
          steps: ['O fósforo tem 5 elétrons de valência, um deles a mais.', '<strong>Resultado: semicondutor do tipo $n$</strong>'] },
        { task: 'Por que o diodo quase não conduz corrente no sentido inverso?',
          steps: ['Na junção PN forma-se uma região sem portadores livres.', 'Ao aumentar a tensão no sentido inverso, essa região apenas se alarga.', '<strong>Resultado: a corrente praticamente não passa</strong>'] }
      ]
    },
    'v9-supravodivost': {
      title: 'Supercondutividade',
      summary: 'Resistência nula abaixo da temperatura crítica, efeito Meissner e supercondutores de alta temperatura.',
      theory: [
        `<p>Supercondutividade é o estado em que um material, abaixo da <em>temperatura crítica</em> $T_c$, perde totalmente a resistência elétrica. A corrente pode circular nele sem perdas.</p>`,
        `<p><strong>Efeito Meissner</strong>: o supercondutor expulsa o campo magnético de seu interior. Por isso um supercondutor flutua sobre um ímã.</p>`,
        `<p>Supercondutores clássicos, como chumbo ou nióbio, têm $T_c$ de alguns kelvins e são resfriados com hélio líquido ($4{,}2\\,\\text{K}$). Supercondutores de alta temperatura (cupratos, por ex. YBCO com $T_c\\approx 92\\,\\text{K}$) podem ser resfriados com nitrogênio líquido, mais barato ($77\\,\\text{K}$).</p>`,
        `<p>Segundo a teoria BCS, os elétrons do cristal se emparelham em <em>pares de Cooper</em> graças à troca de vibrações da rede. Esses pares se movem sem dispersão e por isso a resistência é nula.</p>`,
        { fig: 'v9v12-supra', caption: 'Abaixo da temperatura crítica Tc a resistência do supercondutor cai a zero, enquanto um metal normal tem resistência que cresce com a temperatura.' }
      ],
      examples: [
        { task: 'A temperatura crítica do nióbio é $T_c=9{,}2\\,\\text{K}$. Qual é essa temperatura em graus Celsius?',
          steps: ['$t = T - 273{,}15$.', '$t = 9{,}2 - 273{,}15 = -263{,}95\\,{}^{\\circ}\\text{C}$.', '<strong>Resultado: aproximadamente -263,95 °C</strong>'] },
        { task: 'Por que um supercondutor flutua sobre um ímã?',
          steps: ['O campo magnético não consegue penetrar no supercondutor (efeito Meissner).', 'As correntes induzidas na superfície criam um campo que repele o ímã.', '<strong>Resultado: a força de repulsão levanta o supercondutor</strong>'] }
      ]
    },
    'v9-magneticke': {
      title: 'Materiais magnéticos',
      summary: 'Diamagnetismo, paramagnetismo e ferromagnetismo, domínios e temperatura de Curie.',
      theory: [
        `<p>Conforme o comportamento em um campo magnético, as substâncias se dividem em <strong>diamagnéticas</strong> (fracamente repelidas, por ex. cobre, zinco), <strong>paramagnéticas</strong> (fracamente atraídas, por ex. alumínio, platina) e <strong>ferromagnéticas</strong> (fortemente atraídas, por ex. ferro, níquel, cobalto).</p>`,
        `<p>Nos ferromagnéticos, os momentos magnéticos dos átomos se alinham em regiões de orientação comum, chamadas <em>domínios</em>. Sem campo, os domínios estão orientados ao acaso e o momento resultante é nulo. Um campo externo os alinha e o material se magnetiza.</p>`,
        `<p>Acima da <em>temperatura de Curie</em> $T_C$, o movimento térmico dos átomos desorganiza os domínios e o ferromagnetismo desaparece. O ferro tem $T_C\\approx 770\\,{}^{\\circ}\\text{C}$.</p>`,
        `<p>Materiais magnéticos moles, como as chapas de transformadores, magnetizam-se e desmagnetizam-se com facilidade. Materiais duros, como os ímãs permanentes, mantêm a magnetização.</p>`,
        { fig: 'v9v12-domeny', caption: 'Em um ferromagnético, sem campo os domínios estão desordenados; em um campo externo se alinham e o material se magnetiza.' }
      ],
      examples: [
        { task: 'Por que um clipe de papel gruda em um ímã, mas um fio de cobre não?',
          steps: ['O clipe é de aço, que contém ferro; seus domínios se alinham no campo do ímã.', 'O cobre é diamagnético, e sua resposta é fraca e repulsiva.', '<strong>Resultado: o clipe é ferromagnético</strong>'] },
        { task: 'O ferro tem temperatura de Curie de 770 °C. O que acontece ao aquecê-lo a 800 °C?',
          steps: ['800 °C está acima da temperatura de Curie.', 'Os domínios se desfazem e o ferro perde a magnetização permanente.', '<strong>Resultado: deixa de ser ferromagnético</strong>'] }
      ]
    },
    'v9-nanomaterialy': {
      title: 'Nanomateriais e materiais quânticos',
      summary: 'Razão entre superfície e volume em nanomateriais e exemplos de materiais quânticos.',
      theory: [
        `<p>Nanomateriais têm pelo menos uma dimensão na faixa de aproximadamente 1 a 100 nm. Quando o tamanho diminui, cresce a razão entre superfície e volume, e uma grande parte dos átomos fica na superfície. Propriedades como cor, ponto de fusão ou reatividade podem, por isso, diferir bastante de um pedaço grande da mesma substância.</p>`,
        `<p>Para um cubo de aresta $a$ vale $S = 6a^2$ e $V = a^3$, logo $\\dfrac{S}{V}=\\dfrac{6}{a}$. A razão diminui com o aumento da aresta, por isso a aresta está no denominador. Se a aresta diminuir dez vezes, a razão aumenta dez vezes.</p>`,
        `<p><strong>Materiais quânticos</strong> apresentam efeitos da mecânica quântica em escala macroscópica. Exemplos: grafeno (uma camada de átomos de carbono com mobilidade muito alta dos elétrons), pontos quânticos (o tamanho determina a cor da luz emitida) e isolantes topológicos.</p>`,
        { fig: 'v9v12-nano', caption: 'Dividir um cubo em cubos menores mantém o volume, mas a superfície aumenta. A razão S/V cresce à medida que o tamanho diminui.' }
      ],
      examples: [
        { task: 'Um cubo tem aresta $a=2\\,\\text{nm}$. Qual é a razão $S/V$?',
          steps: ['$\\dfrac{S}{V}=\\dfrac{6a^2}{a^3}=\\dfrac{6}{a}$.', '$\\dfrac{6}{2}=3\\,\\text{nm}^{-1}$.', '<strong>Resultado: 3 nm⁻¹</strong>'] },
        { task: 'Como muda a razão $S/V$ se a aresta dobrar?',
          steps: ['$S/V = 6/a$ é inversamente proporcional à aresta.', 'Uma aresta duas vezes maior dá uma razão igual à metade.', '<strong>Resultado: cai para a metade</strong>'] }
      ]
    },
    'v10-hviezdy': {
      title: 'Surgimento, evolução e estrutura das estrelas',
      summary: 'Como uma estrela se forma, por que permanece em equilíbrio e como sua luminosidade se relaciona com o raio e a temperatura.',
      theory: [
        `<p>Uma estrela se forma a partir de uma região condensada de gás e poeira interestelares, chamada nebulosa. A gravidade comprime o material, o gás se aquece e, quando a temperatura no núcleo atinge dezenas de milhões de kelvins, começa a fusão termonuclear, na qual o hidrogênio se transforma em hélio.</p>`,
        `<p><strong>Por que a estrela não colapsa?</strong> A gravidade tenta comprimi-la para dentro, enquanto a pressão do gás quente e da radiação atua no sentido oposto. Quando esses dois efeitos estão em equilíbrio, falamos em <em>equilíbrio hidrostático</em>. A estrela é estável enquanto esse equilíbrio se mantém.</p>`,
        `<p><strong>A luminosidade</strong> $L$ é a potência total irradiada pela estrela. Pela lei de Stefan–Boltzmann vale $L=4\\pi R^2\\sigma T^4$, onde $R$ é o raio e $T$ a temperatura superficial. A luminosidade cresce com o quadrado do raio, mas com a quarta potência da temperatura; por isso uma pequena variação de temperatura altera muito o brilho.</p>`,
        `<p>As estrelas são organizadas no <strong>diagrama de Hertzsprung–Russell</strong>: no eixo horizontal está a temperatura (ou a cor), no eixo vertical a luminosidade. A maioria das estrelas, inclusive o Sol, situa-se na faixa da sequência principal, onde a estrela queima hidrogênio no núcleo.</p>`,
        { fig: 'v9v12-hr', caption: 'Diagrama de Hertzsprung–Russell: as estrelas da sequência principal queimam hidrogênio, as gigantes são mais brilhantes e as anãs brancas são menos luminosas, mas muito quentes.' }
      ],
      examples: [
        { task: 'Uma estrela tem raio três vezes maior que o do Sol e temperatura superficial duas vezes maior. Quantas vezes ela é mais luminosa?',
          steps: [
            'Razão das luminosidades: $\\frac{L}{L_\\odot}=\\left(\\frac{R}{R_\\odot}\\right)^2\\left(\\frac{T}{T_\\odot}\\right)^4$.',
            '$=3^2\\cdot 2^4=9\\cdot 16=144$.',
            '<strong>Resultado: 144 vezes</strong>'
          ] }
      ]
    },
    'v10-galaxie': {
      title: 'Galáxias e sua evolução',
      summary: 'Os principais tipos de galáxias e como se diferenciam por estrelas, gás e forma.',
      theory: [
        `<p>Uma galáxia é um sistema de estrelas, gás, poeira e matéria escura ligado pela gravidade. As galáxias se dividem principalmente pela forma: <strong>elípticas</strong> (lisas, formadas por estrelas antigas), <strong>espirais</strong> (disco achatado com braços) e <strong>irregulares</strong>.</p>`,
        `<p>A forma da galáxia está estreitamente ligada à quantidade de gás que ainda resta nela. O gás é a matéria-prima de novas estrelas: nos braços das espirais nascem continuamente estrelas azuis jovens, enquanto nas galáxias elípticas o gás quase se esgotou e a formação de estrelas diminui.</p>`,
        `<p>As galáxias crescem aos poucos por aglomeração de matéria e, muitas vezes, por <strong>colisões e fusões</strong> com outras galáxias. A interação gravitacional pode então remodelar a forma de ambas e provocar uma nova onda de formação de estrelas.</p>`
      ],
      examples: [
        { task: 'Uma galáxia tem forma elíptica lisa e quase nenhum gás. Que tipo de estrelas predomina nela?',
          steps: ['A formação de estrelas em uma galáxia depende da reserva de gás.', 'Sem gás não nascem novas estrelas; permanecem as antigas, de tom avermelhado.', '<strong>Resultado: estrelas antigas</strong>'] }
      ]
    },
    'v10-cierne-diery': {
      title: 'Buracos negros e estrelas de nêutrons',
      summary: 'O que determina o raio de um buraco negro e por que, após o esgotamento do combustível, surge uma estrela de nêutrons ou um buraco negro.',
      theory: [
        `<p>Quando uma estrela de massa suficiente esgota seu combustível nuclear, o núcleo colapsa. Se a massa restante não ultrapassar aproximadamente 1,4 massa solar, forma-se uma <strong>estrela de nêutrons</strong>: uma esfera muito densa, de raio cerca de 10 km, sustentada pela pressão dos nêutrons.</p>`,
        `<p>Um <strong>buraco negro</strong> surge se a massa for maior. A gravidade em sua vizinhança é tão intensa que nem a luz pode escapar além de uma fronteira chamada <em>horizonte de eventos</em>. O raio dessa fronteira é o raio de Schwarzschild.</p>`,
        `<p>O raio de Schwarzschild é $r_s=\\frac{2GM}{c^2}$, onde $G$ é a constante gravitacional, $M$ a massa e $c$ a velocidade da luz. Para a massa do Sol resulta aproximadamente $2{,}95\\,\\text{km}$. O raio é proporcional à massa; portanto, um buraco negro com o dobro da massa tem um horizonte com o dobro do raio.</p>`,
        { fig: 'v9v12-cierna-diera', caption: 'O raio de Schwarzschild é proporcional à massa. Um buraco negro duas vezes mais pesado tem um horizonte duas vezes maior.' }
      ],
      examples: [
        { task: 'Qual é o raio de Schwarzschild de um buraco negro com massa $5\\,M_\\odot$?',
          steps: ['$r_s\\approx 2{,}95\\,\\text{km}\\cdot 5$.', '$r_s\\approx 14{,}75\\,\\text{km}$.', '<strong>Resultado: aproximadamente 14,75 km</strong>'] }
      ]
    },
    'v10-exoplanety': {
      title: 'Exoplanetas e sistemas planetários',
      summary: 'Como os astrônomos encontram planetas em torno de outras estrelas e o que a observação revela.',
      theory: [
        `<p><strong>Exoplaneta</strong> é um planeta que orbita uma estrela diferente do Sol. Raramente é visto diretamente, por isso é procurado indiretamente, mais frequentemente pelo trânsito ou pela medição do movimento da estrela.</p>`,
        `<p><strong>Método do trânsito:</strong> quando o planeta passa diante da estrela, o brilho dela cai por um breve instante. A queda de brilho é proporcional à área que o planeta cobre: $\\Delta\\text{brilho}=\\left(\\frac{r_p}{R}\\right)^2$. Atenção: trata-se do quadrado da razão entre os raios.</p>`,
        `<p><strong>Método Doppler:</strong> o planeta puxa gravitacionalmente a estrela, que se desloca ligeiramente para lá e para cá. O deslocamento das linhas espectrais revela esse movimento, mesmo quando o planeta não é visível.</p>`,
        { fig: 'v9v12-tranzit', caption: 'Durante o trânsito planetário, o brilho da estrela cai brevemente pela razão entre as áreas, ou seja, em (r_p/R)².' }
      ],
      examples: [
        { task: 'Um planeta tem raio igual a um décimo do raio da estrela. Em quantos por cento cai o brilho da estrela durante o trânsito?',
          steps: ['$\\left(\\frac{1}{10}\\right)^2=\\frac{1}{100}$.', 'O brilho cai $1\\,\\%$.', '<strong>Resultado: 1 %</strong>'] }
      ]
    },
    'v10-rozpinanie': {
      title: 'Expansão do Universo',
      summary: 'Lei de Hubble: quanto mais distante uma galáxia está, mais rapidamente ela se afasta de nós.',
      theory: [
        `<p>Edwin Hubble constatou que os espectros de galáxias distantes estão deslocados para o vermelho. Esse <em>desvio para o vermelho</em> significa que as galáxias se afastam de nós. Quanto mais distante a galáxia, maior o seu desvio.</p>`,
        `<p><strong>Lei de Hubble:</strong> $v=H_0\\,d$, onde $v$ é a velocidade de afastamento, $d$ a distância e $H_0$ a constante de Hubble. Seu valor é aproximadamente $70\\,\\text{km/s/Mpc}$, sendo $1\\,\\text{Mpc}\\approx 3{,}26$ milhões de anos-luz.</p>`,
        `<p>É importante compreender que <strong>as galáxias não se expandem dentro do Universo</strong>; o que se expande é o próprio espaço entre elas. Por isso galáxias mais distantes se afastam mais rapidamente, mesmo que não tenham nenhuma velocidade própria.</p>`,
        { fig: 'v9v12-hubble', caption: 'Lei de Hubble: a velocidade de afastamento das galáxias é proporcional à sua distância.' }
      ],
      examples: [
        { task: 'Uma galáxia está a $100\\,\\text{Mpc}$ de distância. Qual é a sua velocidade de afastamento?',
          steps: ['$v=H_0\\,d=70\\cdot 100$.', '<strong>Resultado: 7000 km/s</strong>'] }
      ]
    },
    'v10-velky-tresk': {
      title: 'Big Bang e o fundo cósmico de micro-ondas',
      summary: 'Como o Universo surgiu de uma fase quente e por que hoje observamos uma radiação fraca vinda de todas as direções.',
      theory: [
        `<p>De acordo com o modelo do <strong>Big Bang</strong>, o Universo foi outrora muito denso e quente. Desde então ele se expande e se resfria. Não se trata de uma explosão no espaço vazio, mas da expansão do próprio espaço.</p>`,
        `<p>Pouco após o início, o Universo estava cheio de radiação; depois se tornou transparente, quando se formaram os átomos. Essa radiação apenas se esticou desde então, e hoje a observamos como <strong>radiação cósmica de fundo em micro-ondas</strong>, com temperatura de aproximadamente $2{,}725\\,\\text{K}$.</p>`,
        `<p>A expansão aumenta os comprimentos de onda da radiação na mesma proporção em que cresce a escala do Universo. Por isso a temperatura da radiação no passado era proporcional a $(1+z)$, onde $z$ é o desvio para o vermelho. Com $z=1$, a temperatura era o dobro da atual.</p>`,
        { fig: 'v9v12-natiahnutie', caption: 'A expansão do Universo estica o comprimento de onda da radiação; por isso a radiação de fundo de hoje tem temperatura menor.' }
      ],
      examples: [
        { task: 'Qual era a temperatura da radiação com desvio para o vermelho $z=3$?',
          steps: ['$T(z)=T_0(1+z)=2{,}725\\cdot(1+3)$.', '$=10{,}9\\,\\text{K}$.', '<strong>Resultado: aproximadamente 10,9 K</strong>'] }
      ]
    },
    'v10-temna-hmota': {
      title: 'Matéria escura e energia escura',
      summary: 'Evidências da matéria e da energia invisíveis e sua parcela na densidade total do Universo.',
      theory: [
        `<p><strong>A matéria escura</strong> associa-se à gravidade de modo invisível, mas não emite nem absorve luz. Uma evidência é a velocidade das estrelas na borda das galáxias, que, sem ela, seria alta demais para a galáxia permanecer unida.</p>`,
        `<p><strong>A energia escura</strong> é a componente que acelera a expansão do Universo. A observação de supernovas distantes mostrou que essa expansão está se acelerando atualmente.</p>`,
        `<p>As parcelas do Universo atual são aproximadamente: matéria comum $\\approx 5\\,\\%$, matéria escura $\\approx 27\\,\\%$ e energia escura $\\approx 68\\,\\%$. Se o Universo é plano, a densidade total é $\\Omega=1$ e vale $\\Omega_\\Lambda=1-\\Omega_m$.</p>`,
        { fig: 'v9v12-zlozenie', caption: 'Composição do Universo atual: matéria comum cerca de 5 %, matéria escura 27 %, energia escura 68 %.' }
      ],
      examples: [
        { task: 'A densidade da matéria é $\\Omega_m=0{,}3$. Que fração a energia escura representa em um Universo plano?',
          steps: ['$\\Omega_\\Lambda=1-\\Omega_m=1-0{,}3$.', '<strong>Resultado: 0,7</strong>'] }
      ]
    },
    'v10-kozmologicke-modely': {
      title: 'Modelos cosmológicos do Universo',
      summary: 'Como a densidade total determina se o Universo é aberto, plano ou fechado.',
      theory: [
        `<p>Um modelo cosmológico descreve a geometria e a evolução do Universo. A grandeza-chave é a razão entre a densidade média total $\\rho$ e a <em>densidade crítica</em> $\\rho_c$, indicada por $\\Omega=\\rho/\\rho_c$.</p>`,
        `<ol>
        <li>$\\Omega &lt; 1$: Universo <strong>aberto</strong>, que se expande para sempre.</li>
        <li>$\\Omega = 1$: Universo <strong>plano</strong>, o espaço tem geometria euclidiana.</li>
        <li>$\\Omega &gt; 1$: Universo <strong>fechado</strong>, que tem curvatura positiva.</li>
      </ol>`,
        `<p>Observações da radiação cósmica de fundo mostram que o Universo atual é muito próximo de plano. O modelo moderno, que inclui a energia escura, considera portanto uma densidade total próxima de um.</p>`
      ],
      examples: [
        { task: 'O Universo tem $\\Omega=0{,}4$. Qual é o seu modelo?',
          steps: ['Comparamos: $0{,}4&lt;1$.', '<strong>Resultado: Universo aberto</strong>'] }
      ]
    },
    'v11-hydrostatika': {
      title: 'Hidrostática',
      summary: 'A pressão em um líquido em repouso depende apenas da profundidade e da densidade, não do formato do recipiente.',
      theory: [
        `<p><strong>A hidrostática</strong> estuda os líquidos em repouso. A pressão em um líquido na profundidade $h$ é $p=\\rho g h$, onde $\\rho$ é a densidade do líquido e $g$ a aceleração da gravidade. Trata-se da <em>pressão manométrica</em>, isto é, a pressão acima da atmosférica.</p>`,
        `<p>A pressão não depende do formato do recipiente. Em um recipiente largo e em um estreito, de mesma profundidade, a pressão no fundo é igual. Esse paradoxo aparente se explica pelo fato de que o peso do líquido é suportado pela parede do recipiente, e não pelo fundo.</p>`,
        `<p>A pressão absoluta (total) é $p=p_0+\\rho g h$, onde $p_0$ é a pressão atmosférica. A diferença de pressões em um líquido é proporcional à diferença de altura, por isso a pressão aumenta para baixo.</p>`,
        `<p><strong>Princípio de Pascal:</strong> a pressão exercida sobre um líquido confinado transmite-se igualmente em todas as direções. Usa-se nos elevadores hidráulicos, em que uma pequena força sobre um pistão pequeno ergue uma carga grande sobre um pistão grande.</p>`,
        { fig: 'v9v12-nadoba', caption: 'A pressão em um líquido depende da profundidade h, não do formato do recipiente. No fundo dos dois recipientes a pressão é a mesma.' }
      ],
      examples: [
        { task: 'Qual é a pressão manométrica da água na profundidade $4\\,\\text{m}$? A densidade da água é $1000\\,\\text{kg/m}^3$, $g=9{,}81\\,\\text{m/s}^2$.',
          steps: ['$p=\\rho g h=1000\\cdot 9{,}81\\cdot 4=39\\,240\\,\\text{Pa}$.', '<strong>Resultado: 39,24 kPa</strong>'] }
      ]
    },
    'v11-tlak-vztlak': {
      title: 'Pressão e empuxo',
      summary: 'Princípio de Arquimedes: sobre um corpo imerso atua um empuxo igual ao peso do líquido deslocado.',
      theory: [
        `<p>Um corpo imerso em um líquido fica mais leve por causa de uma força dirigida para cima. Essa <strong>força de empuxo</strong> é determinada pelo princípio de Arquimedes: $F_{vz}=\\rho_k\\,g\\,V$, onde $\\rho_k$ é a densidade do líquido e $V$ o volume da parte imersa do corpo.</p>`,
        `<p>O empuxo não depende da profundidade nem da densidade do corpo, mas apenas do volume do líquido deslocado. Costuma-se dizer que ele é o peso do líquido deslocado.</p>`,
        `<p>Sobre a flutuação decide a comparação das densidades. Um corpo com densidade menor que a do líquido flutua e se imerge apenas o suficiente para que o líquido deslocado tenha peso igual ao do corpo inteiro. Um corpo com densidade maior afunda.</p>`,
        { fig: 'obr-vztlak', caption: 'O empuxo F_vz aponta para cima e o peso F_g para baixo. Um corpo imerso fica mais leve pelo peso do líquido deslocado.' }
      ],
      examples: [
        { task: 'Um corpo com volume de $3\\,\\text{dm}^3$ está totalmente imerso em água. Qual é a força de empuxo?',
          steps: ['$V=3\\,\\text{dm}^3=0{,}003\\,\\text{m}^3$.', '$F_{vz}=1000\\cdot 9{,}81\\cdot 0{,}003=29{,}43\\,\\text{N}$.', '<strong>Resultado: 29,43 N</strong>'] }
      ]
    },
    'v11-kontinuita': {
      title: 'Equação da continuidade',
      summary: 'Se o líquido não escapa nem se acumula em um trecho, o produto da área pela velocidade é constante.',
      theory: [
        `<p>Em um escoamento estacionário de um líquido incompressível, a massa não se acumula nem desaparece. Por unidade de tempo, portanto, por cada seção transversal deve passar o mesmo volume: $S_1 v_1 = S_2 v_2 = \\text{const.}$</p>`,
        `<p>A grandeza $Q=S\\,v$ chama-se <strong>vazão volumétrica</strong>. Onde o tubo é mais estreito, a água escoa mais depressa. Por isso um rio acelera em um trecho estreito e desacelera em uma planície larga.</p>`,
        `<p>A equação da continuidade é a lei da conservação da massa para um escoamento de líquido. Vale exatamente para líquidos incompressíveis e aproximadamente para gases em baixas velocidades.</p>`,
        { fig: 'v9v12-kontinuita', caption: 'Para um líquido incompressível vale S₁v₁ = S₂v₂. Onde a seção é menor, o líquido escoa mais depressa.' }
      ],
      examples: [
        { task: 'Um tubo se estreita de uma seção de $6\\,\\text{cm}^2$ para $2\\,\\text{cm}^2$. A água na parte mais larga escoa a $1{,}5\\,\\text{m/s}$. Qual é a velocidade na parte mais estreita?',
          steps: ['$S_1 v_1=S_2 v_2$, logo $v_2=\\frac{6\\cdot 1{,}5}{2}$.', '<strong>Resultado: 4,5 m/s</strong>'] }
      ]
    },
    'v11-bernoulli': {
      title: 'Equação de Bernoulli',
      summary: 'A energia em um líquido em escoamento se conserva: onde a velocidade é maior, a pressão é menor.',
      theory: [
        `<p><strong>A equação de Bernoulli</strong> expressa a lei da conservação da energia para um líquido ideal, incompressível e sem atrito em escoamento: $p+\\frac{1}{2}\\rho v^2+\\rho g h=\\text{const.}$ Os termos à esquerda são a pressão, a energia cinética e a energia potencial por unidade de volume.</p>`,
        `<p>Para um tubo horizontal ($h$ é igual em todos os pontos) vale $p_1+\\frac{1}{2}\\rho v_1^2=p_2+\\frac{1}{2}\\rho v_2^2$. Se a velocidade aumentar em um ponto, a pressão ali diminui.</p>`,
        `<p>Esse fenômeno chama-se <strong>efeito Venturi</strong> e é usado em carburadores, medidores de vazão do tipo Venturi e bombas de vácuo. Ocorre principalmente nos trechos estreitos do tubo.</p>`,
        { fig: 'v9v12-venturi', caption: 'No trecho estreito a velocidade aumenta e a pressão cai. Os níveis nos tubos manométricos mostram isso.' }
      ],
      examples: [
        { task: 'Em um tubo horizontal, a água tem velocidade de $6\\,\\text{m/s}$ no trecho estreito e de $2\\,\\text{m/s}$ no trecho largo. Qual é a diferença de pressões $p_1-p_2$ em kPa?',
          steps: ['$p_1-p_2=\\frac{1}{2}\\rho\\left(v_2^2-v_1^2\\right)=\\frac{1}{2}\\cdot 1000\\cdot(36-4)$.', '$=16\\,000\\,\\text{Pa}$.', '<strong>Resultado: 16 kPa</strong>'] }
      ]
    },
    'v11-viskozita': {
      title: 'Viscosidade e escoamento laminar',
      summary: 'Atrito interno dos líquidos, lei de Stokes e resistência em um movimento lento de uma esfera.',
      theory: [
        `<p><strong>A viscosidade</strong> (viscosidade dinâmica $\\eta$) é a medida do atrito interno de um líquido. O mel tem viscosidade maior que a da água, porque suas camadas deslizam umas sobre as outras com mais dificuldade. A unidade é $\\text{Pa}\\cdot\\text{s}$.</p>`,
        `<p><strong>O escoamento laminar</strong> é suave: as camadas do líquido deslizam umas sobre as outras sem se misturar. No movimento lento de um corpo em um líquido surge uma resistência proporcional à velocidade: <em>lei de Stokes</em> $F=6\\pi\\eta r v$ para uma esfera de raio $r$.</p>`,
        `<p>Atenção à diferença entre raio e diâmetro: na fórmula entra o raio $r$. Se você substituir o diâmetro, a força sairá duas vezes maior.</p>`,
        { fig: 'v9v12-vrstvy', caption: 'Em um escoamento laminar as camadas do líquido se deslocam umas em relação às outras, e o atrito interno causa resistência.' }
      ],
      examples: [
        { task: 'Uma esfera de raio $1\\,\\text{cm}$ se move a $0{,}5\\,\\text{m/s}$ em um líquido com $\\eta=2\\,\\text{Pa}\\cdot\\text{s}$. Qual é a resistência?',
          steps: ['$F=6\\pi\\eta r v=6\\pi\\cdot 2\\cdot 0{,}01\\cdot 0{,}5$.', '$F\\approx 0{,}188\\,\\text{N}$.', '<strong>Resultado: aproximadamente 188 mN</strong>'] }
      ]
    },
    'v11-turbulencia': {
      title: 'Turbulência',
      summary: 'O número de Reynolds decide se o escoamento é suave ou turbulento.',
      theory: [
        `<p>Com velocidades e diâmetros maiores, o escoamento laminar se desfaz em <strong>escoamento turbulento</strong>: formam-se redemoinhos e mistura, que mudam de modo aleatório no tempo e no espaço.</p>`,
        `<p>O tipo de escoamento é determinado pelo <strong>número de Reynolds</strong> $\\text{Re}=\\frac{\\rho v d}{\\eta}$, onde $d$ é uma dimensão característica (por exemplo, o diâmetro do tubo). Para tubos vale aproximadamente: $\\text{Re}&lt;2300$ laminar, $\\text{Re}&gt;4000$ turbulento; entre esses valores o escoamento é de transição.</p>`,
        `<p>A turbulência aumenta a resistência ao escoamento e a mistura de substâncias. Por isso, na prática, procuramos suavizar o escoamento, por exemplo nas asas dos aviões; em outros casos, provocamos turbulência para que o combustível se misture melhor.</p>`,
        { fig: 'v9v12-profil', caption: 'No escoamento laminar a velocidade na seção transversal tem perfil parabólico; no turbulento o perfil é mais achatado.' }
      ],
      examples: [
        { task: 'Água ($\\rho=1000\\,\\text{kg/m}^3$, $\\eta=10^{-3}\\,\\text{Pa}\\cdot\\text{s}$) escoa em um tubo de diâmetro $0{,}05\\,\\text{m}$ a $1\\,\\text{m/s}$. Qual é o número de Reynolds?',
          steps: ['$\\text{Re}=\\frac{1000\\cdot 1\\cdot 0{,}05}{10^{-3}}$.', '<strong>Resultado: Re = 50 000, o escoamento é turbulento</strong>'] }
      ]
    },
    'v11-aerodynamika': {
      title: 'Escoamento de gases e aerodinâmica',
      summary: 'Resistência aerodinâmica e sustentação: de que dependem e por que crescem com o quadrado da velocidade.',
      theory: [
        `<p>Em velocidades comuns os gases são quase incompressíveis, e muitos fenômenos podem ser descritos pelas mesmas leis válidas para os líquidos. Corpos que se movem pelo ar sofrem a frenagem da <strong>resistência aerodinâmica</strong>.</p>`,
        `<p>A resistência é dada pela fórmula $F=\\frac{1}{2}\\,c_w\\,\\rho\\,S\\,v^2$, onde $c_w$ é o coeficiente de arrasto (forma do corpo), $\\rho$ a densidade do ar, $S$ a área frontal e $v$ a velocidade. A resistência cresce com o <strong>quadrado</strong> da velocidade: com velocidade dobrada, a resistência fica quatro vezes maior.</p>`,
        `<p>A asa de um avião ou de um veículo cria <strong>sustentação</strong>, porque acima dela o escoamento é mais rápido e a pressão, menor (Bernoulli). Por isso projetamos a forma do corpo de modo que a resistência seja a menor possível e a sustentação, a maior possível.</p>`,
        { fig: 'v9v12-krido', caption: 'Acima da asa o escoamento é mais rápido e a pressão é menor; abaixo dela a pressão é maior. A diferença de pressões gera a sustentação.' }
      ],
      examples: [
        { task: 'Um automóvel tem área frontal de $2\\,\\text{m}^2$, coeficiente de arrasto $c_w=0{,}5$ e anda a $20\\,\\text{m/s}$. Qual é a resistência do ar? A densidade do ar é $1{,}2\\,\\text{kg/m}^3$.',
          steps: ['$F=\\frac{1}{2}\\cdot 0{,}5\\cdot 1{,}2\\cdot 2\\cdot 20^2$.', '$=0{,}6\\cdot 400=240\\,\\text{N}$.', '<strong>Resultado: 240 N</strong>'] }
      ]
    },
    'v12-modelovanie': {
      title: 'Modelagem matemática de fenômenos físicos',
      summary: 'Como construir um modelo matemático a partir de uma análise física e verificar se ele corresponde à observação.',
      theory: [
        `<p>Um <strong>modelo</strong> é uma descrição matemática simplificada de um fenômeno. Primeiro determinamos as grandezas que influenciam o resultado, depois escrevemos as relações entre elas e, por fim, verificamos se o cálculo corresponde à medição ou a uma expectativa razoável.</p>`,
        `<p>Um exemplo típico é o <strong>decaimento radioativo</strong>. O número de núcleos não desintegrados diminui proporcionalmente à quantidade atual deles, o que leva a uma lei exponencial. Com meia-vida $T_{1/2}$ vale $N(t)=N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>O modelo tem limitações: supõe que o decaimento é aleatório e independente do ambiente. Uma medição real pode, portanto, apresentar pequenos desvios, que se compensam estatisticamente quando há um grande número de núcleos.</p>`,
        { fig: 'v9v12-rozpad', caption: 'Com a meia-vida T½, o número de núcleos não desintegrados cai pela metade; lei exponencial N = N₀(1/2)^(t/T½).' }
      ],
      examples: [
        { task: 'Uma amostra tem inicialmente $800$ núcleos e a meia-vida é de $10$ anos. Quantos núcleos restam após $30$ anos?',
          steps: ['Após $30$ anos são $3$ meias-vidas.', '$N=800\\cdot\\left(\\frac{1}{2}\\right)^3=800\\cdot\\frac{1}{8}$.', '<strong>Resultado: 100 núcleos</strong>'] }
      ]
    },
    'v12-diferencialne-rovnice': {
      title: 'Equações diferenciais',
      summary: 'As leis do movimento são equações diferenciais; sua solução é obtida por integração e por uma condição inicial.',
      theory: [
        `<p>A segunda lei de Newton $F=ma$ é uma equação diferencial, porque a aceleração é a derivada da velocidade: $a=\\frac{dv}{dt}$. As grandezas não aparecem aqui diretamente, mas sim a sua <em>variação</em> no tempo.</p>`,
        `<p><strong>A solução</strong> procura-se por integração. Da equação $\\frac{dv}{dt}=a$ obtemos $v(t)=at+C$. A constante $C$ é determinada pela <em>condição inicial</em>, por exemplo $v(0)=v_0$. Por isso uma equação é sempre resolvida junto com essa condição.</p>`,
        `<p>As equações diferenciais descrevem quase todos os fenômenos dinâmicos: o movimento de corpos, circuitos, a propagação do calor ou de ondas. A solução é única somente quando conhecemos condições iniciais suficientes.</p>`,
        { fig: 'v9v12-rovnice', caption: 'A equação dv/dt = a tem infinitas soluções v = at + C. A condição inicial escolhe uma delas.' }
      ],
      examples: [
        { task: 'Resolva $\\frac{dv}{dt}=2$ com a condição $v(0)=5$. Qual é a velocidade no instante $t=4$?',
          steps: ['$v(t)=2t+C$; de $v(0)=5$ segue $C=5$.', '$v(t)=2t+5$, logo $v(4)=8+5$.', '<strong>Resultado: 13</strong>'] }
      ]
    },
    'v12-vektory': {
      title: 'Análise vetorial e tensores',
      summary: 'Produto escalar e produto vetorial, que descrevem o trabalho de uma força e o momento de uma força; o tensor como generalização.',
      theory: [
        `<p><strong>Um vetor</strong> tem módulo e direção e se escreve por suas componentes $\\vec a=(a_1,a_2,a_3)$. A soma de vetores é feita componente a componente. O módulo é $|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}$.</p>`,
        `<p><strong>O produto escalar</strong> $\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3$ é um número. Ele aparece no trabalho de uma força: $W=\\vec F\\cdot\\vec s$. Vale também $\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\varphi$, portanto é nulo para vetores perpendiculares entre si.</p>`,
        `<p><strong>O produto vetorial</strong> $\\vec a\\times\\vec b$ é um vetor perpendicular a ambos os originais; por exemplo, o momento de uma força $\\vec M=\\vec r\\times\\vec F$. <strong>O tensor</strong> é uma generalização: o tensor de tensões em um sólido, por exemplo, associa a cada plano um vetor de força.</p>`,
        { fig: 'v9v12-moment', caption: 'O momento da força M = r × F é um vetor perpendicular tanto ao vetor de posição r quanto à força F.' }
      ],
      examples: [
        { task: 'Calcule $\\vec a\\cdot\\vec b$ para $\\vec a=(1,2,3)$ e $\\vec b=(4,-5,6)$.',
          steps: ['$1\\cdot 4+2\\cdot(-5)+3\\cdot 6$.', '$=4-10+18=12$.', '<strong>Resultado: 12</strong>'] }
      ]
    },
    'v12-fourier': {
      title: 'Análise de Fourier',
      summary: 'Um sinal periódico é decomposto em componentes senoidais, e descobrimos quais frequências ele contém.',
      theory: [
        `<p>Todo sinal periódico de período $T$ pode ser escrito como soma de senos e cossenos com múltiplos da frequência fundamental $\\omega=\\frac{2\\pi}{T}$. Essa soma é a <strong>série de Fourier</strong>; seus termos são chamados componentes harmônicas.</p>`,
        `<p>Os coeficientes da decomposição obtêm-se por integração: multiplicamos o sinal pela função correspondente e integramos ao longo de um período. Graças à <em>ortogonalidade</em> de senos e cossenos, os demais termos se anulam.</p>`,
        `<p>Um sinal quadrado de amplitude $A$ tem apenas harmônicas ímpares, e a amplitude da $n$-ésima é $\\frac{4A}{n\\pi}$. A série de Fourier mostra quais frequências devem ser transmitidas para que o sinal não se deforme, e é a base da análise espectral.</p>`,
        { fig: 'v9v12-fourier', caption: 'Um sinal quadrado pode ser composto por senoides. A primeira harmônica tem amplitude 4A/π.' }
      ],
      examples: [
        { task: 'Qual é a amplitude da primeira harmônica de um sinal quadrado de amplitude $A=3$?',
          steps: ['Para a primeira harmônica temos $n=1$ e a fórmula $\\frac{4A}{n\\pi}$.', '$\\frac{4\\cdot 3}{\\pi}\\approx 3{,}82$.', '<strong>Resultado: aproximadamente 3,82</strong>'] }
      ]
    },
    'v12-numericke-metody': {
      title: 'Resolução numérica de problemas físicos',
      summary: 'Quando uma equação não tem solução em forma de fórmula, resolvemos por pequenos passos, por exemplo pelo método de Euler.',
      theory: [
        `<p>Muitas equações diferenciais não têm solução na forma de fórmula. Nesses casos as resolvemos <strong>numericamente</strong>: dividimos o tempo em passos de comprimento $h$ e, em cada passo, estimamos a variação da grandeza.</p>`,
        `<p><strong>O método de Euler</strong> para a equação $\\frac{dy}{dt}=f(t,y)$ calcula $y_{n+1}=y_n+h\\,f(t_n,y_n)$. É simples, mas o erro diminui apenas linearmente com o passo; por isso, na prática, usam-se métodos mais precisos, como o de Runge–Kutta.</p>`,
        `<p>A escolha do passo é um compromisso: um passo pequeno dá um resultado mais preciso, mas exige mais cálculos. Um passo grande demais pode causar instabilidade, em que os desvios crescem e a solução fica sem sentido.</p>`,
        { fig: 'v9v12-euler', caption: 'O método de Euler com passo h = 0,5 aproxima a equação dy/dt = y por uma linha poligonal, que fica abaixo da curva exata.' }
      ],
      examples: [
        { task: 'Resolva $\\frac{dy}{dt}=-y$ com $y(0)=10$ pelo método de Euler, com passo $h=0{,}1$. Qual é o valor de $y_1$?',
          steps: ['$y_1=y_0+h\\cdot(-y_0)=10+0{,}1\\cdot(-10)$.', '$=10-1=9$.', '<strong>Resultado: 9</strong>'] }
      ]
    },
    'v12-pocitacove-simulacie': {
      title: 'Simulações computacionais',
      summary: 'A simulação avança em passos; o comprimento do passo e o tempo total determinam o número de cálculos.',
      theory: [
        `<p>Uma <strong>simulação computacional</strong> aplica repetidamente a lei do movimento a pequenos intervalos de tempo. No início o sistema tem um estado (posições, velocidades), e em cada passo calcula-se um novo estado.</p>`,
        `<p>O número de passos para o tempo $t$ e o passo $h$ é $N=\\frac{t}{h}$. Se reduzirmos o passo pela metade, o cálculo leva o dobro do tempo, mas a precisão aumenta. Manualmente isso não é viável; no computador, essa é uma escolha fundamental.</p>`,
        `<p>As simulações são usadas em toda parte onde não há solução em forma de fórmula: o movimento dos planetas em um sistema de três corpos, o escoamento do ar em torno de uma asa ou a propagação do calor em um material.</p>`
      ],
      examples: [
        { task: 'Uma simulação de queda deve durar $10\\,\\text{s}$ e o passo é $0{,}05\\,\\text{s}$. Quantos passos são necessários?',
          steps: ['$N=\\frac{t}{h}=\\frac{10}{0{,}05}$.', '<strong>Resultado: 200 passos</strong>'] }
      ]
    },
    'v12-konecne-prvky': {
      title: 'Método dos elementos finitos',
      summary: 'Um corpo complexo é dividido em elementos simples, cujas propriedades são reunidas em um único sistema de equações.',
      theory: [
        `<p>O <strong>método dos elementos finitos (MEF)</strong> divide uma estrutura complexa em muitas partes simples (elementos), por exemplo triângulos. Para cada elemento escrevemos uma equação simples, que relaciona as forças e os deslocamentos de seus nós.</p>`,
        `<p>Os elementos são então reunidos em um <strong>sistema global de equações</strong>, resolvido pelo computador. Para molas ou barras vale: na ligação <em>em série</em> as flexibilidades se somam, ou seja, $\\frac{1}{k}=\\frac{1}{k_1}+\\frac{1}{k_2}$. Na ligação <em>em paralelo</em> as rigidezes se somam: $k=k_1+k_2$.</p>`,
        `<p>O MEF é usado em análise de resistência, no escoamento de fluidos e na propagação do calor. O resultado é aproximado, e a precisão cresce com o número e a finura dos elementos.</p>`,
        { fig: 'v9v12-pruziny', caption: 'Molas ligadas em série têm menor rigidez; molas ligadas em paralelo somam suas rigidezes.' }
      ],
      examples: [
        { task: 'Duas molas com rigidezes $k_1=6\\,\\text{N/m}$ e $k_2=3\\,\\text{N/m}$ estão ligadas em série. Qual é a rigidez equivalente?',
          steps: ['$\\frac{1}{k}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$.', '$k=2\\,\\text{N/m}$.', '<strong>Resultado: 2 N/m</strong>'] }
      ]
    },
    'v12-komplexne-systemy': {
      title: 'Modelagem de sistemas complexos',
      summary: 'Muitas partes simples com ligações entre si levam a um comportamento complexo; o número de ligações cresce depressa.',
      theory: [
        `<p>Um <strong>sistema complexo</strong> é formado por muitas partes que interagem entre si. O comportamento do conjunto muitas vezes não resulta da soma das propriedades das partes, mas de suas ligações mútuas. Fala-se em comportamento <em>emergente</em>.</p>`,
        `<p>O número de ligações mútuas cresce depressa. Com $N$ partículas, em que cada uma atua sobre cada outra uma vez, surgem $\\binom{N}{2}=\\frac{N(N-1)}{2}$ pares. Com $N=100$ já são $4950$ ligações.</p>`,
        `<p>Para a modelagem usam-se, por exemplo, <strong>modelos baseados em agentes</strong> (cada partícula segue regras simples) ou simulações <strong>Monte Carlo</strong>, que sorteiam aleatoriamente os estados possíveis. O resultado é sempre uma estimativa, que deve ser verificada.</p>`
      ],
      examples: [
        { task: 'No sistema há $5$ partículas, e cada uma atua sobre cada outra uma vez. Quantos pares diferentes surgem?',
          steps: ['$\\binom{5}{2}=\\frac{5\\cdot 4}{2}$.', '<strong>Resultado: 10 pares</strong>'] }
      ]
    },
  }
});
