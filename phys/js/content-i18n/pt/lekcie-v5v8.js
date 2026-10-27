/* Português (Brasil): lições dos ročníkov v5–v8 (js/rocniky/v5.js, v6.js, v7.js, v8.js). Estrutura e chaves: js/content-i18n.js. */
CONTENT_I18N.add('pt', {
  lessons: {
    'v5-dualizmus': {
      title: `Dualidade onda-partícula`,
      summary: `A luz e as partículas se comportam tanto como ondas quanto como partículas; o comprimento de onda de de Broglie.`,
      theory: [
        `<p>O efeito fotoelétrico e o efeito Compton mostraram que a luz se comporta como um feixe de partículas (fótons) com energia $E=h\\,f$. A interferência e a difração, por sua vez, mostram propriedades ondulatórias. Falamos em <strong>dualidade onda-partícula</strong>: todo objeto quântico tem as duas propriedades, mas numa dada medição só uma delas se manifesta.</p>`,
        `<p>Louis de Broglie propôs que também as partículas com momento linear $p$ têm um comprimento de onda $\\lambda=\\frac{h}{p}$. Para um elétron livre com velocidade $v$ (não relativisticamente) vale $p=m_e\\,v$. Quanto mais pesada ou mais rápida for a partícula, menor é o seu comprimento de onda.</p>`,
        `<p>Por isso os corpos macroscópicos (por exemplo, uma bolinha) têm um comprimento de onda tão pequeno que não pode ser observado, enquanto os elétrons num cristal produzem um padrão de difração semelhante ao dos raios X. A constante $h=6{,}63\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$ determina onde os efeitos quânticos se manifestam.</p>`,
        { fig: 'v5v8-dualizmus', caption: `Comprimento de onda de de Broglie λ = h/p: quanto maior o momento linear, menor a onda.` }
      ],
      examples: [
        { task: `Um elétron se move com velocidade $v=2\\cdot 10^{6}\\,\\text{m/s}$. Qual é o seu comprimento de onda de de Broglie? Use $m_e=9{,}11\\cdot 10^{-31}\\,\\text{kg}$.`,
          steps: [`$p=m_e v=9{,}11\\cdot 10^{-31}\\cdot 2\\cdot 10^{6}$.`, `$\\lambda=\\frac{h}{p}=\\frac{6{,}63\\cdot 10^{-34}}{1{,}82\\cdot 10^{-24}}\\approx 3{,}6\\cdot 10^{-10}\\,\\text{m}$.`, `<strong>Resultado: $\\lambda\\approx 0{,}36\\,\\text{nm}$</strong>`] }
      ]
    },
    'v5-vlnova-funkcia': {
      title: `Função de onda e probabilidade`,
      summary: `A função de onda ψ, a densidade de probabilidade |ψ|² e o cálculo da probabilidade para um intervalo.`,
      theory: [
        `<p>O estado de uma partícula quântica é descrito pela <strong>função de onda</strong> $\\psi(x,t)$. Por si só ela não é mensurável. Seu quadrado $|\\psi|^2$ é a <strong>densidade de probabilidade</strong>: a probabilidade de que a partícula esteja numa pequena vizinhança do ponto $x$ é $|\\psi|^2\\,dx$.</p>`,
        `<p>A probabilidade de encontrar a partícula num intervalo finito $[x_1,x_2]$ é a integral $P=\\int_{x_1}^{x_2}|\\psi|^2\\,dx$. A probabilidade total é 1, logo $\\int|\\psi|^2\\,dx=1$. Uma função com essa propriedade chama-se normalizada.</p>`,
        `<p>Portanto a mecânica quântica fornece apenas as <em>probabilidades</em> dos resultados de medição, e não valores exatos para uma única partícula. Se a densidade for uniforme, a probabilidade é igual à razão entre o comprimento do intervalo e o comprimento de toda a região.</p>`,
        { fig: 'v5v8-pravdepodobnost', caption: `Para densidade uniforme |ψ|² a probabilidade é proporcional ao comprimento do intervalo: P = a/L.` }
      ],
      examples: [
        { task: `Uma partícula está distribuída com densidade uniforme sobre um segmento de comprimento $L=20\\,\\text{nm}$. Qual é a probabilidade de que ela esteja no intervalo de $0$ a $5\\,\\text{nm}$?`,
          steps: [`A densidade é constante, $|\\psi|^2=\\frac{1}{L}$.`, `$P=\\frac{5}{20}=\\frac{1}{4}$.`, `<strong>Resultado: $P=0{,}25$</strong>`] }
      ]
    },
    'v5-schrodinger': {
      title: `Equação de Schrödinger`,
      summary: `A equação de Schrödinger independente do tempo e as energias de uma partícula num poço de potencial infinitamente profundo.`,
      theory: [
        `<p>A <strong>equação de Schrödinger</strong> descreve a evolução da função de onda. Sua forma independente do tempo $\\hat{H}\\psi=E\\psi$ afirma que, para estados estacionários, a energia $E$ é constante e a função de onda é uma autofunção do operador de energia $\\hat{H}$.</p>`,
        `<p>Considere uma partícula num <strong>poço de potencial infinitamente profundo</strong> de largura $L$. A função de onda deve anular-se nas bordas do poço, por isso nele cabe apenas um número inteiro de meias ondas. O resultado são energias discretas $E_n=\\frac{n^2 h^2}{8 m L^2}$, onde $n=1,2,3,\\dots$</p>`,
        `<p>A energia cresce com o quadrado de $n$ e diminui com o quadrado da largura do poço. Portanto, para um elétron num poço de largura $1\\,\\text{nm}$ a energia mais baixa é $E_1=0{,}376\\,\\text{eV}$, enquanto num poço mais largo os níveis ficam mais próximos entre si.</p>`,
        { fig: 'v5v8-jama', caption: `Uma partícula num poço infinitamente profundo tem apenas níveis discretos; a energia cresce com n².` }
      ],
      examples: [
        { task: `Um elétron está num poço de largura $L=1\\,\\text{nm}$ no estado $n=2$. Qual é a sua energia? Para $n=1$ vale $E_1=0{,}376\\,\\text{eV}$.`,
          steps: [`$E_n=E_1\\cdot\\frac{n^2}{L^2}$ com $L$ em nanômetros.`, `$E_2=0{,}376\\cdot 4=1{,}504\\,\\text{eV}$.`, `<strong>Resultado: $E_2\\approx 1{,}5\\,\\text{eV}$</strong>`] }
      ]
    },
    'v5-operatory': {
      title: `Operadores e grandezas observáveis`,
      summary: `Operadores na mecânica quântica; autofunções e autovalores como resultados de medição.`,
      theory: [
        `<p>A cada grandeza física ($x$, momento linear, energia) corresponde um <strong>operador</strong>, isto é, uma regra que transforma uma função em outra. Por exemplo, ao momento linear corresponde $\\hat{p}=-i\\hbar\\,\\frac{d}{dx}$ e à energia o operador hamiltoniano $\\hat{H}$.</p>`,
        `<p>Se um operador $\\hat{A}$ atua sobre uma função $\\psi$ de modo que $\\hat{A}\\psi=a\\,\\psi$, então $\\psi$ é uma <strong>autofunção</strong> e o número $a$ é um <strong>autovalor</strong>. A medição da grandeza $A$ fornece sempre um dos seus autovalores; durante a medição, o estado se transforma na autofunção correspondente.</p>`,
        `<p>As grandezas observáveis têm autovalores reais, porque seus operadores são hermitianos. Por isso os resultados de medição são sempre números reais.</p>`
      ],
      examples: [
        { task: `O operador $\\hat{D}=\\frac{d}{dx}$ atua sobre $\\psi=e^{3x}$. Qual é o autovalor?`,
          steps: [`$\\frac{d}{dx}e^{3x}=3\\,e^{3x}$.`, `Vale $\\hat{D}\\psi=3\\psi$.`, `<strong>Resultado: o autovalor é $3$</strong>`] }
      ]
    },
    'v5-kvantovanie': {
      title: `Quantização da energia`,
      summary: `Por que uma partícula confinada tem apenas energias discretas, usando o oscilador harmônico como exemplo.`,
      theory: [
        `<p>Se a partícula está <strong>confinada</strong> (por exemplo, num poço ou num sistema oscilante), sua função de onda deve ser nula nas bordas da região. Essa condição restringe as energias possíveis a <strong>níveis discretos</strong>. Já uma partícula livre tem energias contínuas.</p>`,
        `<p>O oscilador harmônico quântico tem níveis $E_n=\\left(n+\\tfrac{1}{2}\\right)\\hbar\\omega$, onde $n=0,1,2,\\dots$ e $\\omega$ é a frequência angular. Níveis vizinhos estão igualmente afastados entre si por $\\hbar\\omega$.</p>`,
        `<p>O nível mais baixo ($n=0$) não tem energia nula, mas $\\frac{1}{2}\\hbar\\omega$. Essa energia de ponto zero é consequência do princípio da incerteza: a partícula não pode estar simultaneamente em repouso num único ponto.</p>`,
        { fig: 'v5v8-oscilator', caption: `Os níveis do oscilador são igualmente espaçados, e o mais baixo não é zero, mas ½ħω.` }
      ],
      examples: [
        { task: `Qual é a energia do oscilador no estado $n=3$, em unidades de $\\hbar\\omega$?`,
          steps: [`$E_3=\\left(3+\\tfrac{1}{2}\\right)\\hbar\\omega$.`, `<strong>Resultado: $E_3=3{,}5\\,\\hbar\\omega$</strong>`] }
      ]
    },
    'v5-spin': {
      title: `Momento angular e spin`,
      summary: `Momento angular orbital, número quântico l, número de estados e spin do elétron.`,
      theory: [
        `<p>O momento angular orbital do elétron num átomo é quantizado: seu módulo é $|\\vec{L}|=\\sqrt{l(l+1)}\\,\\hbar$, onde $l=0,1,2,\\dots$ é o <strong>número quântico orbital</strong>. Sua projeção sobre um eixo escolhido pode assumir os valores $L_z=m_l\\hbar$.</p>`,
        `<p>O número quântico magnético $m_l$ assume valores de $-l$ até $+l$, incluindo o zero; por isso, para um dado $l$ há exatamente $2l+1$ estados possíveis. Para $l=0$ há um estado; para $l=1$, três estados.</p>`,
        `<p><strong>O spin</strong> é o momento angular intrínseco do elétron, que não tem uma imagem clássica de bolinha em rotação. O elétron tem número quântico de spin $s=\\tfrac{1}{2}$, portanto há duas orientações possíveis. Junto com o momento orbital, ele determina a estrutura dos níveis atômicos.</p>`,
        { fig: 'v5v8-moment', caption: `O número quântico magnético m_l assume 2l + 1 valores, de −l até +l.` }
      ],
      examples: [
        { task: `O elétron tem número quântico orbital $l=2$. Quantos valores diferentes de $m_l$ são possíveis?`,
          steps: [`Os valores de $m_l$ vão de $-2$ a $+2$: $-2,-1,0,1,2$.`, `<strong>Resultado: $2l+1=5$ valores</strong>`] }
      ]
    },
    'v5-vodik': {
      title: `Átomo de hidrogênio e estados quânticos`,
      summary: `Níveis de energia do átomo de hidrogênio e energia do fóton na transição entre eles.`,
      theory: [
        `<p>As energias do elétron no átomo de hidrogênio são $E_n=-\\frac{13{,}6\\,\\text{eV}}{n^2}$, onde $n=1,2,3,\\dots$ é o número quântico principal. O sinal negativo significa que o elétron está ligado; quando $n\\to\\infty$, a energia tende a zero.</p>`,
        `<p>Quando o elétron passa de um nível mais alto $n_i$ para um mais baixo $n_f$, o átomo emite um fóton com energia $E_f=E_{n_i}-E_{n_f}$ (em valor absoluto). Na absorção de um fóton ocorre o processo inverso. Por isso o espectro do hidrogênio forma linhas, e não uma faixa contínua.</p>`,
        `<p>O mais importante é a série de transições para $n_f=2$ (série de Balmer), situada na região visível da luz. As transições para $n_f=1$ produzem radiação ultravioleta.</p>`,
        { fig: 'v5v8-vodik', caption: `Na transição para um nível inferior, o átomo emite um fóton com energia igual à diferença dos níveis.` }
      ],
      examples: [
        { task: `Um elétron no átomo de hidrogênio passa de $n=3$ para $n=2$. Qual é a energia do fóton emitido?`,
          steps: [`$E_3=-\\frac{13{,}6}{9}\\approx -1{,}51\\,\\text{eV}$ e $E_2=-\\frac{13{,}6}{4}=-3{,}40\\,\\text{eV}$.`, `$\\Delta E=|E_2-E_3|\\approx 1{,}89\\,\\text{eV}$.`, `<strong>Resultado: $\\Delta E\\approx 1{,}89\\,\\text{eV}$</strong>`] }
      ]
    },
    'v5-neurcitost': {
      title: `Tunelamento e princípio da incerteza`,
      summary: `Princípio da incerteza de Heisenberg e tunelamento através de uma barreira que, classicamente, não pode ser ultrapassada.`,
      theory: [
        `<p>O <strong>princípio da incerteza de Heisenberg</strong> afirma que a posição e o momento linear de uma partícula não podem ser determinados simultaneamente com precisão arbitrária: $\\Delta x\\,\\Delta p\\geq\\frac{\\hbar}{2}$. Trata-se de uma propriedade das ondas, e não de uma deficiência da técnica de medição. Quanto mais precisamente conhecemos a posição, maior é a incerteza do momento.</p>`,
        `<p><strong>O tunelamento</strong> significa que a partícula atravessa uma barreira de potencial que, classicamente, não conseguiria ultrapassar por não ter energia suficiente. Na barreira a função de onda diminui exponencialmente, mas não se anula, e do outro lado existe uma probabilidade não nula de encontrar a partícula.</p>`,
        `<p>O tunelamento explica a desintegração radioativa alfa, o funcionamento do microscópio de tunelamento e a corrente elétrica em alguns dispositivos semicondutores.</p>`,
        { fig: 'v5v8-tunel', caption: `Partícula com energia menor que a altura da barreira tem, dentro dela, uma onda que decresce exponencialmente, e por isso pode atravessá-la.` }
      ],
      examples: [
        { task: `A posição de um elétron é conhecida com incerteza $\\Delta x=1\\,\\text{pm}$. Qual é a menor incerteza possível do seu momento linear? Use $\\hbar=1{,}0546\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$.`,
          steps: [`$\\Delta p_{\\min}=\\frac{\\hbar}{2\\,\\Delta x}=\\frac{1{,}0546\\cdot 10^{-34}}{2\\cdot 10^{-12}}$.`, `$\\Delta p_{\\min}\\approx 5{,}27\\cdot 10^{-23}\\,\\text{kg}\\,\\text{m/s}$.`, `<strong>Resultado: $\\Delta p_{\\min}\\approx 52{,}7\\cdot 10^{-24}\\,\\text{kg}\\,\\text{m/s}$</strong>`] }
      ]
    },
    'v6-specialna': {
      title: `Teoria da relatividade restrita`,
      summary: `Dois postulados, dilatação do tempo e fator de Lorentz.`,
      theory: [
        `<p>A teoria da relatividade restrita parte de dois postulados: (1) as leis físicas são as mesmas em todos os referenciais inerciais, (2) a velocidade da luz no vácuo $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$ é a mesma para qualquer observador, independentemente do movimento da fonte.</p>`,
        `<p>Do segundo postulado decorre que o tempo não é absoluto. Relógios em movimento andam mais devagar: o intervalo $\\Delta t$ medido no referencial em relação ao qual os relógios se movem é mais longo do que o tempo próprio $\\Delta t_0$ no seu referencial de repouso. Vale $\\Delta t=\\gamma\\,\\Delta t_0$, onde $\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}\\geq 1$ é o <strong>fator de Lorentz</strong>.</p>`,
        `<p>O efeito é desprezível em velocidades comuns, pois $\\gamma$ fica próximo de 1. Em velocidades próximas de $c$ ele cresce rapidamente. Partículas dos raios cósmicos, por exemplo, vivem mais tempo do que a física clássica permitiria.</p>`,
        { fig: 'v5v8-gama', caption: `O fator de Lorentz γ fica próximo de 1 em baixas velocidades e cresce bruscamente ao aproximar-se de c.` }
      ],
      examples: [
        { task: `Uma partícula se move com velocidade $v=0{,}6\\,c$. Qual é o seu fator de Lorentz?`,
          steps: [`$\\gamma=\\frac{1}{\\sqrt{1-0{,}6^2}}=\\frac{1}{\\sqrt{0{,}64}}$.`, `$\\sqrt{0{,}64}=0{,}8$, logo $\\gamma=\\frac{1}{0{,}8}$.`, `<strong>Resultado: $\\gamma=1{,}25$</strong>`] }
      ]
    },
    'v6-lorentz': {
      title: `Transformações de Lorentz`,
      summary: `Como as coordenadas espaciais e temporais de um evento mudam na passagem para outro referencial inercial.`,
      theory: [
        `<p>A transformação de Galileu $x'=x-vt$ vale apenas para pequenas velocidades. Para velocidades próximas de $c$ são necessárias as <strong>transformações de Lorentz</strong>, que preservam a velocidade da luz. Para o referencial $S'$, que se move com velocidade $v$ no sentido positivo do eixo $x$, temos $x'=\\gamma\\,(x-\\beta\\,ct)$ e $ct'=\\gamma\\,(ct-\\beta\\,x)$, onde $\\beta=\\frac{v}{c}$.</p>`,
        `<p>Espaço e tempo assim se misturam: um evento simultâneo num referencial pode não ser simultâneo em outro. Esta <strong>relatividade da simultaneidade</strong> é consequência direta da velocidade finita da luz.</p>`,
        `<p>Na transformação inversa muda o sinal da velocidade. Quando $v\\to 0$, temos $\\gamma\\to 1$ e recuperamos a relação clássica $x'=x-vt$; portanto as transformações de Lorentz contêm a física clássica como caso limite.</p>`,
        { fig: 'v5v8-lorentz', caption: `Os eixos x′ e ct′ do referencial S′ estão inclinados; a transformação de Lorentz recalcula as coordenadas do evento.` }
      ],
      examples: [
        { task: `Um evento tem no referencial $S$ as coordenadas $x=8\\,\\text{m}$ e $ct=4\\,\\text{m}$. O referencial $S'$ se move com velocidade $0{,}6\\,c$ no sentido positivo do eixo $x$. Qual é o $x'$ em $S'$?`,
          steps: [`$\\gamma=1{,}25$, $\\beta=0{,}6$.`, `$x'=\\gamma\\,(x-\\beta\\,ct)=1{,}25\\cdot(8-0{,}6\\cdot 4)=1{,}25\\cdot 5{,}6=7$.`, `<strong>Resultado: $x'=7\\,\\text{m}$</strong>`] }
      ]
    },
    'v6-energia': {
      title: `Energia e momento relativísticos`,
      summary: `Energia total e cinética de uma partícula em altas velocidades.`,
      theory: [
        `<p>Na relatividade, a partícula tem energia de repouso $E_0=mc^2$, mesmo quando está parada. A energia total de uma partícula em movimento é $E=\\gamma\\,mc^2$. Para $v\\to 0$ temos $\\gamma\\to 1$ e a energia total se aproxima da energia de repouso.</p>`,
        `<p><strong>A energia cinética</strong> é a diferença $E_k=E-E_0=(\\gamma-1)\\,mc^2$. É a energia que o trabalho deve fornecer para acelerar a partícula do repouso até a velocidade $v$. Em velocidades próximas de $c$ a energia cinética cresce sem limite, de modo que nenhuma partícula com massa de repouso não nula pode alcançar a velocidade da luz.</p>`,
        `<p>O momento relativístico é $p=\\gamma\\,m\\,v$. Para a energia e o momento vale também a relação $E^2=(pc)^2+(mc^2)^2$, útil para fótons, em que $m=0$.</p>`,
        { fig: 'v5v8-energia', caption: `A energia total γmc² é a energia de repouso mc² mais a energia cinética (γ − 1)mc².` }
      ],
      examples: [
        { task: `Um elétron ($m\\,c^2=0{,}511\\,\\text{MeV}$) se move com velocidade $0{,}8\\,c$. Qual é a sua energia cinética?`,
          steps: [`$\\gamma=\\frac{1}{\\sqrt{1-0{,}64}}=\\frac{5}{3}$.`, `$E_k=(\\gamma-1)\\,mc^2=\\frac{2}{3}\\cdot 0{,}511\\approx 0{,}34\\,\\text{MeV}$.`, `<strong>Resultado: $E_k\\approx 0{,}34\\,\\text{MeV}$</strong>`] }
      ]
    },
    'v6-ekvivalencia': {
      title: `Equivalência de massa e energia`,
      summary: `A relação E = mc² e a conversão de massa em energia e vice-versa.`,
      theory: [
        `<p>O resultado mais conhecido da relatividade é a relação $E=mc^2$: a massa é uma forma de energia, e a energia tem massa correspondente $m=\\frac{E}{c^2}$. Não se trata apenas de uma fórmula para o movimento, mas de uma propriedade de todo corpo, mesmo em repouso.</p>`,
        `<p>Pequenas variações de massa correspondem a grandes quantidades de energia, pois $c^2\\approx 9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$ é um número muito grande. As reações nucleares liberam energia justamente porque a soma das massas dos produtos é uma pequena fração menor do que a dos núcleos originais.</p>`,
        `<p>Na conversão, cuidado com as unidades: massa em quilogramas, velocidade em metros por segundo, energia em joules. O terajoule é $1\\,\\text{TJ}=10^{12}\\,\\text{J}$.</p>`
      ],
      examples: [
        { task: `Que energia libera a conversão completa de $1\\,\\text{g}$ de matéria? Resultado em terajoules.`,
          steps: [`$m=10^{-3}\\,\\text{kg}$, $c^2=9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$.`, `$E=mc^2=10^{-3}\\cdot 9\\cdot 10^{16}=9\\cdot 10^{13}\\,\\text{J}=90\\,\\text{TJ}$.`, `<strong>Resultado: $90\\,\\text{TJ}$</strong>`] }
      ]
    },
    'v6-interval': {
      title: `Intervalos espaço-temporais`,
      summary: `Intervalo invariante no diagrama espaço-tempo e tempo próprio.`,
      theory: [
        `<p>A relatividade une espaço e tempo num <strong>espaço-tempo</strong> quadridimensional. Os eventos são pontos nele, e a distância entre eles não é a distância comum. O <strong>intervalo</strong> entre dois eventos com diferença de tempo $\\Delta t$ e diferença espacial $\\Delta x$ é $\\Delta s^2=c^2\\Delta t^2-\\Delta x^2$.</p>`,
        `<p>O intervalo tem o mesmo valor em todo referencial inercial, por isso se chama <strong>invariante</strong>. Se $\\Delta s^2>0$, o intervalo é do tipo temporal, e existe um referencial no qual os dois eventos ocorrem no mesmo lugar. O tempo próprio é então $\\Delta\\tau=\\frac{\\sqrt{\\Delta s^2}}{c}$.</p>`,
        `<p>Com unidades em que $c=1$ (distâncias medidas em segundos-luz), basta calcular $\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}$. O resultado é sempre menor ou igual a $\\Delta t$, o que é mais uma vez a dilatação do tempo.</p>`,
        { fig: 'v5v8-interval', caption: `O tempo próprio Δτ = √(Δt² − Δx²) é, para um intervalo do tipo temporal, menor que Δt.` }
      ],
      examples: [
        { task: `Dois eventos estão separados no tempo por $\\Delta t=5\\,\\text{s}$ e no espaço por $\\Delta x=3\\,\\text{ls}$ (segundos-luz). Qual é o tempo próprio $\\Delta\\tau$?`,
          steps: [`$\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}=\\sqrt{25-9}$.`, `<strong>Resultado: $\\Delta\\tau=4\\,\\text{s}$</strong>`] }
      ]
    },
    'v6-vseobecna': {
      title: `Teoria da relatividade geral`,
      summary: `Princípio de equivalência, gravitação como curvatura do espaço-tempo e raio de Schwarzschild.`,
      theory: [
        `<p>A teoria da relatividade geral (1915) parte do <strong>princípio de equivalência</strong>: localmente não é possível distinguir uma aceleração de um campo gravitacional. Uma pessoa num elevador em queda livre dentro de um campo gravitacional não sente o próprio peso, exatamente como um astronauta em órbita.</p>`,
        `<p>Disso Einstein concluiu que a gravitação não é uma força no sentido clássico, mas a <strong>curvatura do espaço-tempo</strong> causada pela matéria e pela energia. Os corpos se movem ao longo dos caminhos mais curtos possíveis, chamados geodésicas, que são curvos no espaço curvo.</p>`,
        `<p>Um campo gravitacional forte retarda o tempo: relógios perto de um corpo massivo andam mais devagar do que longe dele. Para a massa $M$, o <strong>raio de Schwarzschild</strong> é $r_s=\\frac{2GM}{c^2}$. Para a Terra é aproximadamente $9$ mm, e para o Sol aproximadamente $3\\,\\text{km}$.</p>`
      ],
      examples: [
        { task: `Qual é o raio de Schwarzschild do Sol, se $M=1{,}989\\cdot 10^{30}\\,\\text{kg}$, $G=6{,}674\\cdot 10^{-11}$ e $c=3\\cdot 10^{8}\\,\\text{m/s}$?`,
          steps: [`$r_s=\\frac{2GM}{c^2}=\\frac{2\\cdot 6{,}674\\cdot 10^{-11}\\cdot 1{,}989\\cdot 10^{30}}{9\\cdot 10^{16}}$.`, `$r_s\\approx 2{,}95\\cdot 10^{3}\\,\\text{m}$.`, `<strong>Resultado: $r_s\\approx 2{,}95\\,\\text{km}$</strong>`] }
      ]
    },
    'v6-zakrivenie': {
      title: `Curvatura do espaço-tempo`,
      summary: `Como a matéria curva o espaço-tempo e quais fenômenos comprovam isso.`,
      theory: [
        `<p>Imagine uma folha elástica sobre a qual se coloca uma bola pesada. A folha se curva, e pequenas bolinhas rolam em sua direção. De modo semelhante, a matéria curva o espaço-tempo e os corpos se movem ao longo de trajetórias curvas. A analogia serve apenas para ilustrar, não é um modelo exato.</p>`,
        `<p>A prova mais direta é <strong>o desvio da luz</strong> ao passar perto do Sol. A luz se propaga ao longo do caminho mais curto, que num espaço curvo não é uma reta. Por isso uma estrela situada atrás do Sol parece deslocada para um observador. Esse efeito foi medido por Eddington em 1919.</p>`,
        `<p>Outros fenômenos, como o desvio gravitacional das linhas espectrais ou a desaceleração do tempo perto de massas, podem ser medidos com a precisão necessária para a navegação dos satélites GPS. Fenômenos sem relação com a gravitação ou com o espaço-tempo, como a decomposição da luz branca num prisma, não se explicam pela curvatura.</p>`,
        { fig: 'v5v8-zakrivenie', caption: `A matéria curva o espaço-tempo e os corpos se movem ao longo de trajetórias curvas. A malha é apenas uma analogia ilustrativa.` }
      ],
      examples: [
        { task: `Qual dos fenômenos é consequência da curvatura do espaço-tempo: o desvio da luz perto do Sol, ou a mudança de cor da luz num prisma?`,
          steps: [`A curvatura do espaço-tempo descreve a gravitação, que influencia a trajetória da luz.`, `A decomposição da luz num prisma se deve à dependência do índice de refração em relação ao comprimento de onda.`, `<strong>Resultado: o desvio da luz perto do Sol</strong>`] }
      ]
    },
    'v6-gravvlny': {
      title: `Ondas gravitacionais e buracos negros`,
      summary: `Ondas gravitacionais como ondulações do espaço-tempo e o horizonte de eventos de um buraco negro.`,
      theory: [
        `<p><strong>As ondas gravitacionais</strong> são ondulações do espaço-tempo que se propagam à velocidade da luz. Surgem com o movimento acelerado de grandes massas, por exemplo na fusão de dois buracos negros. A primeira observação direta foi feita em 2015 pelo interferômetro LIGO.</p>`,
        `<p><strong>Um buraco negro</strong> é uma região em que a velocidade de escape é maior que $c$, e a luz não consegue sair dela. Seu limite é o <strong>horizonte de eventos</strong>, situado no raio de Schwarzschild $r_s=\\frac{2GM}{c^2}$. Dentro do horizonte, todas as trajetórias apontam para o centro.</p>`,
        `<p>O raio do horizonte é diretamente proporcional à massa. Um buraco negro com a massa do Sol tem horizonte de aproximadamente $3\\,\\text{km}$, e um com dez vezes a massa do Sol tem aproximadamente $30\\,\\text{km}$.</p>`,
        { fig: 'v5v8-horizont', caption: `O raio do horizonte de eventos é r_s = 2GM/c²; a luz que está dentro do horizonte não consegue escapar para fora.` }
      ],
      examples: [
        { task: `Qual é o raio do horizonte de um buraco negro de massa $10\\,M_{\\odot}$, sabendo que para o Sol vale $r_s\\approx 2{,}95\\,\\text{km}$?`,
          steps: [`O raio é proporcional à massa: $r_s=2{,}95\\,\\text{km}\\cdot 10$.`, `<strong>Resultado: $r_s\\approx 29{,}5\\,\\text{km}$</strong>`] }
      ]
    },
    'v7-atom': {
      title: `Estrutura do átomo e eletrosfera`,
      summary: `Núcleo, eletrosfera e distribuição dos elétrons em camadas e sua capacidade.`,
      theory: [
        `<p>O átomo tem um <strong>núcleo</strong> formado por prótons e nêutrons (em conjunto, núcleons) e uma <strong>eletrosfera</strong>. O número de prótons é o número atômico $Z$, que determina o elemento químico. Um átomo neutro tem o mesmo número de elétrons.</p>`,
        `<p>Os elétrons não estão distribuídos de forma arbitrária. Ocupam <strong>camadas</strong> de número $n = 1, 2, 3, \\dots$ (denominadas K, L, M). A camada de número $n$ comporta no máximo $2n^2$ elétrons: a K comporta 2, a L comporta 8, a M comporta 18.</p>`,
        `<p><strong>Por que exatamente esses valores?</strong> Os elétrons são descritos pela mecânica quântica. Cada estado de um elétron é determinado por um conjunto de números quânticos, e o princípio de exclusão de Pauli proíbe que dois elétrons de um átomo tenham o mesmo estado. As camadas se preenchem de dentro para fora, e a camada mais externa (de valência) determina as propriedades químicas do elemento.</p>`,
        `<ol><li>Na tabela periódica descubra $Z$, e com isso também o número de elétrons.</li><li>Distribua-os pelas camadas: primeiro a K, depois a L, depois a M.</li><li>A última camada ocupada é a de valência.</li></ol>`,
        { fig: 'obr-atom', caption: `Modelo simplificado do átomo: núcleo positivo e elétrons em órbitas.` }
      ],
      examples: [
        { task: `Quantos elétrons, no máximo, comporta a camada L (número $n = 2$)?`,
          steps: [`Substituímos $n = 2$ na fórmula $2n^2$.`, `$2\\cdot 2^2 = 8$.`, `<strong>Resultado: 8 elétrons</strong>`] },
        { task: `O carbono tem $Z = 6$. Quantos elétrons há em suas camadas K e L?`,
          steps: [`A camada K comporta 2 elétrons.`, `Os $6 - 2 = 4$ elétrons restantes vão para a camada L.`, `<strong>Resultado: 2 na K e 4 na L</strong>`] }
      ]
    },
    'v7-spektra': {
      title: `Espectros atômicos e níveis de energia`,
      summary: `Transições de elétrons entre níveis e energia dos fótons emitidos.`,
      theory: [
        `<p>Um átomo só pode ter certos <strong>níveis de energia</strong>. Quando um elétron passa de um nível mais alto para um mais baixo, emite um <strong>fóton</strong> com energia igual à diferença entre os níveis. Inversamente, um fóton de energia adequada pode excitar um elétron para um nível mais alto.</p>`,
        `<p>A energia do fóton é $E = h f = \\dfrac{h c}{\\lambda}$, onde $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$ é a constante de Planck. Na física atômica a energia se expressa em elétron-volts: $1\\,\\text{eV} = 1{,}6\\cdot 10^{-19}\\,\\text{J}$.</p>`,
        `<p>Para o átomo de hidrogênio vale $E_n = -\\dfrac{13{,}6}{n^2}\\,\\text{eV}$. O estado fundamental ($n = 1$) é o mais baixo, e os níveis se aproximam de zero por cima. Na transição de $n_i$ para $n_f$ surge um fóton com energia $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}\\right)$.</p>`,
        `<p><strong>Por que os espectros são de linhas?</strong> Os níveis são discretos, portanto os fótons têm apenas algumas energias exatas. No espectrograma vemos, por isso, linhas nítidas, e não um arco-íris contínuo. Cada elemento tem seu próprio conjunto de linhas, e por isso o espectro é a sua “impressão digital”.</p>`,
        { fig: 'v5v8-vodik', caption: `Na transição para um nível inferior, o átomo emite um fóton com energia igual à diferença dos níveis.` }
      ],
      examples: [
        { task: `Um elétron no átomo de hidrogênio passa do nível $n=3$ para o nível $n=2$. Qual é a energia do fóton emitido?`,
          steps: [`Diferença dos níveis: $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{2^2}-\\dfrac{1}{3^2}\\right)$.`, `$\\dfrac{1}{4}-\\dfrac{1}{9}=\\dfrac{5}{36}$, logo $\\Delta E = 13{,}6\\cdot\\dfrac{5}{36}\\approx 1{,}89\\,\\text{eV}$.`, `<strong>Resultado: aproximadamente 1,89 eV</strong>`] },
        { task: `Qual transição emite um fóton de maior energia: $2\\to 1$ ou $3\\to 2$?`,
          steps: [`Transição $2\\to 1$: $13{,}6\\cdot\\left(1-\\dfrac{1}{4}\\right)=10{,}2\\,\\text{eV}$.`, `A transição $3\\to 2$ dá aproximadamente $1{,}89\\,\\text{eV}$.`, `<strong>Resultado: a transição $2\\to 1$</strong>`] }
      ]
    },
    'v7-jadro': {
      title: `Estrutura do núcleo atômico`,
      summary: `Prótons, nêutrons, notação do nuclídeo, isótopos e tamanho do núcleo.`,
      theory: [
        `<p>O núcleo é formado por prótons (carga $+e$) e nêutrons (sem carga). Juntos são chamados núcleons. O nuclídeo se escreve como $^{A}_{Z}\\mathrm{X}$: $A$ é o número de massa, $Z$ o número atômico, e o número de nêutrons é $N = A - Z$.</p>`,
        `<p>O raio do núcleo cresce aproximadamente com a raiz cúbica do número de massa: $r \\approx 1{,}2\\cdot 10^{-15}\\,\\text{m}\\cdot A^{1/3}$. Os núcleos são, portanto, muito pequenos (da ordem de femtômetros), mas têm praticamente a mesma densidade.</p>`,
        `<p><strong>Por que o núcleo não se desfaz?</strong> Os prótons se repelem eletricamente, mas atua a interação nuclear forte. É uma força atrativa de curto alcance, mais intensa que a repulsão elétrica. Núcleos estáveis mais pesados têm mais nêutrons do que prótons (por exemplo, $^{208}_{82}\\mathrm{Pb}$).</p>`,
        `<ul><li><strong>Isótopos</strong> têm o mesmo $Z$, mas $N$ diferente (por exemplo, $^{12}_{6}\\mathrm{C}$ e $^{14}_{6}\\mathrm{C}$).</li><li><strong>Isóbaros</strong> têm o mesmo $A$, mas $Z$ diferente.</li></ul>`,
        { fig: 'v5v8-nuklidy', caption: `Núcleos leves estáveis têm N ≈ Z; núcleos pesados estáveis têm mais nêutrons do que prótons.` }
      ],
      examples: [
        { task: `Quantos prótons e nêutrons tem o núcleo $^{238}_{92}\\mathrm{U}$?`,
          steps: [`O número atômico é $Z=92$.`, `$N = A - Z = 238 - 92 = 146$.`, `<strong>Resultado: 92 prótons e 146 nêutrons</strong>`] },
        { task: `Como muda o raio do núcleo se seu número de massa aumentar oito vezes?`,
          steps: [`$r \\propto A^{1/3}$, logo $r$ varia com $\\sqrt[3]{A}$.`, `$\\sqrt[3]{8}=2$, o raio dobra.`, `<strong>Resultado: o raio dobra</strong>`] }
      ]
    },
    'v7-radioaktivita': {
      title: `Radioatividade e transmutações nucleares`,
      summary: `Tipos de desintegração, lei do decaimento, meia-vida e atividade.`,
      theory: [
        `<p>Núcleos instáveis se transformam espontaneamente. Na desintegração <strong>alfa</strong> é emitido um núcleo de hélio $^{4}_{2}\\mathrm{He}$. Na desintegração <strong>beta-menos</strong> um nêutron se transforma em próton, e surgem um elétron e um antineutrino. Na radiação <strong>gama</strong> o núcleo apenas se livra da energia excedente, sem que $Z$ nem $A$ mudem. Em cada transformação vale a conservação do número de massa e do número atômico.</p>`,
        `<p>A desintegração de um único núcleo é um processo aleatório, mas para um grande número de núcleos vale a lei do decaimento $N(t) = N_0\\cdot 2^{-t/T}$. O tempo $T$ é a <em>meia-vida</em>, após o qual se desintegra a metade dos núcleos. A lei decorre da hipótese de que a probabilidade de desintegração num breve intervalo $dt$ é proporcional ao número de núcleos: $\\dfrac{dN}{dt}=-\\lambda N$.</p>`,
        `<p>A <strong>atividade</strong> $A = \\lambda N$ indica o número de desintegrações por segundo. A unidade é o becquerel, $1\\,\\text{Bq} = 1\\,\\text{s}^{-1}$. A constante de decaimento é $\\lambda = \\dfrac{\\ln 2}{T}$.</p>`,
        `<ol><li>Calcule o número de meias-vidas $k = t/T$.</li><li>Divida o número de núcleos por $2^{k}$, e não apenas por dois.</li></ol>`,
        { fig: 'v5v8-rozpad', caption: `O número de núcleos não desintegrados diminui exponencialmente: após cada meia-vida resta a metade.` }
      ],
      examples: [
        { task: `Um radioisótopo tem meia-vida de 8 dias. Que porcentagem dos núcleos resta após 24 dias?`,
          steps: [`O número de meias-vidas é $k = 24/8 = 3$.`, `$N = N_0\\cdot 2^{-3} = \\dfrac{N_0}{8}$, ou seja, restam 12,5 %.`, `<strong>Resultado: 12,5 %</strong>`] },
        { task: `Uma amostra tem $4\\cdot 10^{6}$ núcleos e meia-vida de 2 h. Quantos núcleos restam após 6 h?`,
          steps: [`Em 6 h passam $k = 6/2 = 3$ meias-vidas.`, `$N = \\dfrac{4\\cdot 10^{6}}{2^{3}} = 5\\cdot 10^{5}$.`, `<strong>Resultado: 500 000 núcleos</strong>`] }
      ]
    },
    'v7-stiepenie-fuzia': {
      title: `Fissão e fusão nucleares`,
      summary: `Defeito de massa, energia de ligação e energia liberada na fissão ou na fusão.`,
      theory: [
        `<p>O núcleo tem massa menor que a soma das massas de seus núcleons. Essa diferença é o <em>defeito de massa</em> $\\Delta m$. De acordo com a relação $E = \\Delta m\\, c^2$, a energia correspondente é liberada. Para cálculos práticos vale $1\\,\\text{u}\\cdot c^2 \\approx 931{,}5\\,\\text{MeV}$.</p>`,
        `<p>A maior energia de ligação por núcleon é encontrada nos núcleos próximos do ferro ($A\\approx 56$). Por isso núcleos pesados podem sofrer <strong>fissão</strong>, dividindo-se em núcleos de massa média, e núcleos leves podem se <strong>unir</strong> (fusão). Ambos os caminhos levam a uma energia de ligação maior e liberam energia.</p>`,
        `<p>Na fissão do $^{235}_{92}\\mathrm{U}$ provocada por um nêutron formam-se dois fragmentos, de 2 a 3 nêutrons e aproximadamente 200 MeV de energia. Esses nêutrons podem provocar uma reação em cadeia, que precisa ser controlada no reator.</p>`,
        `<p>A fusão exige temperaturas extremamente altas para que os núcleos carregados positivamente se aproximem o suficiente para a interação forte atuar. Na reação $^{2}_{1}\\mathrm{H}+{}^{3}_{1}\\mathrm{H}\\to{}^{4}_{2}\\mathrm{He}+n$ são liberados cerca de 17,6 MeV.</p>`,
        { fig: 'v5v8-vazba', caption: `A energia de ligação por núcleon tem o máximo no ferro: núcleos leves se unem, núcleos pesados se dividem.` }
      ],
      examples: [
        { task: `Numa reação nuclear ocorre um defeito de massa $\\Delta m = 0{,}2\\,\\text{u}$. Qual é a energia correspondente?`,
          steps: [`$E=\\Delta m\\cdot 931{,}5\\,\\text{MeV}$.`, `$E=0{,}2\\cdot 931{,}5=186{,}3\\,\\text{MeV}$.`, `<strong>Resultado: 186,3 MeV</strong>`] },
        { task: `Por que a fusão na Terra é mais difícil do que a fissão?`,
          steps: [`Os núcleos têm carga positiva e se repelem.`, `É preciso uma temperatura e pressão extremas para aproximá-los ao alcance da interação forte.`, `<strong>Resultado: a fusão exige condições extremas</strong>`] }
      ]
    },
    'v7-ziarenie-latka': {
      title: `Interação da radiação com a matéria`,
      summary: `Atenuação da radiação, espessura de meia atenuação e os principais processos da radiação gama.`,
      theory: [
        `<p>Ao atravessar a matéria, a radiação perde energia. As partículas alfa param já numa folha de papel, as partículas beta atravessam alguns milímetros de alumínio, e a radiação gama penetra profundamente, enfraquecendo-se apenas gradualmente.</p>`,
        `<p>Para um feixe estreito de fótons vale a atenuação exponencial $I(x) = I_0\\,e^{-\\mu x}$, onde $\\mu$ é o coeficiente de atenuação. Mais prática é a <em>espessura de meia atenuação</em> $d_{1/2}$, ou seja, a camada que reduz a intensidade à metade. Então $I = I_0\\cdot 2^{-x/d_{1/2}}$.</p>`,
        `<p>Na radiação gama são importantes três processos: o <strong>efeito fotoelétrico</strong> (o fóton é absorvido, domina em baixas energias), o <strong>espalhamento Compton</strong> (o fóton perde parte da energia) e a <strong>produção de pares</strong> elétron–pósitron (a partir de 1,022 MeV). Materiais pesados e densos, como o chumbo, blindam melhor.</p>`,
        `<ul><li>A radiação ionizante arranca elétrons dos átomos, por isso pode danificar as células.</li><li>A proteção se escolhe conforme o tipo de radiação: papel ou pele contra a alfa, acrílico contra a beta, chumbo ou concreto contra a gama.</li></ul>`,
        { fig: 'v5v8-zoslabenie', caption: `Cada espessura de meia atenuação reduz a intensidade da radiação à metade.` }
      ],
      examples: [
        { task: `Uma camada de chumbo tem espessura de meia atenuação de 1,2 cm. Que porcentagem da radiação atravessa uma camada de 3,6 cm?`,
          steps: [`$x/d_{1/2}=3{,}6/1{,}2=3$ espessuras de meia atenuação.`, `$I = I_0\\cdot 2^{-3}=\\dfrac{I_0}{8}$.`, `<strong>Resultado: 12,5 %</strong>`] },
        { task: `A intensidade da radiação caiu para um quarto. Quantas espessuras de meia atenuação tinha a camada?`,
          steps: [`$\\dfrac{1}{4}=2^{-2}$.`, `Portanto a camada tinha 2 espessuras de meia atenuação.`, `<strong>Resultado: 2</strong>`] }
      ]
    },
    'v7-jadrova-energetika': {
      title: `Energia nuclear e detecção da radiação`,
      summary: `Princípio do reator nuclear, eficiência da usina e medição da dose de radiação.`,
      theory: [
        `<p>O reator nuclear aproveita a fissão do $^{235}_{92}\\mathrm{U}$ numa reação em cadeia controlada. O calor do reator aquece a água, forma-se vapor, que aciona uma turbina com gerador de eletricidade.</p>`,
        `<p>A eficiência da usina é $\\eta = \\dfrac{P_{\\text{el}}}{P_{\\text{t}}}$, onde $P_{\\text{t}}$ é a potência térmica do reator. Parte do calor não pode ser convertida em trabalho e é levada à água de resfriamento. As usinas nucleares têm eficiência geralmente em torno de 33 %.</p>`,
        `<p><strong>Controle:</strong> barras de controle feitas de materiais que absorvem nêutrons (por exemplo, boro, cádmio). O <strong>moderador</strong> (água, grafite) desacelera os nêutrons, para que provoquem melhor a fissão dos núcleos.</p>`,
        `<p><strong>Dosimetria:</strong> a dose absorvida $D = E/m$ é expressa em gray, $1\\,\\text{Gy} = 1\\,\\text{J/kg}$. Detectores como o tubo Geiger-Müller ou o cintilador reagem a partículas e fótons individuais.</p>`,
        { fig: 'v5v8-reaktor', caption: `A usina transforma o calor do reator em trabalho; o restante do calor segue para a água de resfriamento.` }
      ],
      examples: [
        { task: `O reator tem potência térmica de 3000 MW e eficiência de 33 %. Qual é a sua potência elétrica?`,
          steps: [`$P_{\\text{el}}=\\eta\\,P_{\\text{t}}$.`, `$0{,}33\\cdot 3000=990\\,\\text{MW}$.`, `<strong>Resultado: 990 MW</strong>`] },
        { task: `Um corpo, devido à irradiação, absorveu energia de 0,5 J. A massa do corpo é 50 kg. Qual é a dose absorvida?`,
          steps: [`$D = E/m$.`, `$D = 0{,}5/50 = 0{,}01\\,\\text{Gy}$.`, `<strong>Resultado: 0,01 Gy</strong>`] }
      ]
    },
    'v8-castice': {
      title: `Partículas elementares e suas propriedades`,
      summary: `Características das partículas, férmions e bósons, bárions e mésons.`,
      theory: [
        `<p>Segundo os conhecimentos atuais, as partículas elementares não têm estrutura interna. São caracterizadas pela <strong>massa</strong>, pela <strong>carga elétrica</strong>, pelo <strong>spin</strong> (momento angular próprio) e, nos quarks e glúons, também pela <strong>cor</strong>.</p>`,
        `<p>Conforme o spin, as partículas se dividem em <em>férmions</em> (spin $\\tfrac{1}{2}$, formam a matéria e obedecem ao princípio de Pauli) e <em>bósons</em> (spin inteiro, transmitem interações, por exemplo o fóton com spin 1).</p>`,
        `<p>Os hádrons são compostos de quarks. Os <strong>bárions</strong> contêm três quarks (próton $uud$, nêutron $udd$). Os <strong>mésons</strong> contêm um par quark–antiquark (por exemplo, $\\pi^{+}=u\\bar{d}$). Os léptons (elétron, múon, tau e neutrinos) não participam da interação forte.</p>`,
        `<ul><li>Próton: massa de aproximadamente 938 MeV/$c^2$, carga $+e$.</li><li>Nêutron: massa de aproximadamente 940 MeV/$c^2$, carga $0$.</li><li>Elétron: massa de aproximadamente 0{,}511 MeV/$c^2$, carga $-e$.</li></ul>`,
        { fig: 'v5v8-kvarky', caption: `Próton (uud) e nêutron (udd) são compostos de três quarks; a soma de suas cargas é a carga da partícula.` }
      ],
      examples: [
        { task: `De quais quarks é composto o nêutron?`,
          steps: [`O nêutron é um bárion, portanto contém três quarks.`, `A carga deve ser 0: dois quarks $d$ e um $u$ dão $-\\tfrac{1}{3}-\\tfrac{1}{3}+\\tfrac{2}{3}=0$.`, `<strong>Resultado: $udd$</strong>`] },
        { task: `O elétron é um bárion?`,
          steps: [`Um bárion é composto de três quarks.`, `O elétron é um lépton e não contém quarks.`, `<strong>Resultado: não</strong>`] }
      ]
    },
    'v8-kvarky-leptony': {
      title: `Quarks e léptons`,
      summary: `Gerações de férmions e cargas fracionárias dos quarks.`,
      theory: [
        `<p>Os seis quarks estão divididos em três gerações: $(u,d)$, $(c,s)$ e $(t,b)$. Os quarks $u$, $c$, $t$ têm carga $+\\tfrac{2}{3}e$, e os quarks $d$, $s$, $b$ têm carga $-\\tfrac{1}{3}e$. São as únicas partículas com carga fracionária.</p>`,
        `<p>Os léptons também formam três gerações de pares: $(e,\\nu_e)$, $(\\mu,\\nu_\\mu)$ e $(\\tau,\\nu_\\tau)$. Os léptons carregados têm carga $-e$. Os neutrinos são neutros e interagem muito fracamente com a matéria.</p>`,
        `<p>Os hádrons livres têm carga total que é múltiplo inteiro de $e$. Por isso os quarks se unem em trios (bárions) ou em pares quark–antiquark (mésons). Essa soma é um controle útil ao escrever reações.</p>`,
        `<ol><li>Determine a carga de cada quark em unidades de $e$.</li><li>Some-as.</li><li>O resultado deve ser um número inteiro.</li></ol>`,
        { fig: 'v5v8-generacie', caption: `Os férmions estão em três gerações; as gerações superiores são mais pesadas e instáveis.` }
      ],
      examples: [
        { task: `Qual é a carga da partícula $uud$?`,
          steps: [`$u$ tem $+\\tfrac{2}{3}$, $d$ tem $-\\tfrac{1}{3}$.`, `$\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3}=1$.`, `<strong>Resultado: $+e$ (próton)</strong>`] },
        { task: `Qual carga tem o bárion $uds$ (partícula Λ)?`,
          steps: [`$\\tfrac{2}{3}-\\tfrac{1}{3}-\\tfrac{1}{3}=0$.`, `<strong>Resultado: carga 0</strong>`] }
      ]
    },
    'v8-fotony': {
      title: `Fótons e outras partículas mediadoras`,
      summary: `Bósons de calibre como portadores das interações e suas propriedades.`,
      theory: [
        `<p>As interações entre partículas ocorrem pela troca de <strong>bósons de calibre</strong>. O fóton $\\gamma$ transmite a força eletromagnética, os glúons $g$ a força forte, e os bósons $W^{\\pm}$ e $Z^{0}$ a força fraca.</p>`,
        `<p>O fóton não tem massa nem carga, e seu spin é 1. O glúon também não tem massa, mas carrega carga de <em>cor</em>, por isso interage também consigo mesmo. Essa é a razão pela qual não conseguimos isolar os quarks: eles estão confinados dentro dos hádrons.</p>`,
        `<p>Os bósons $W$ e $Z$ são muito pesados (massas de aproximadamente 80 e 91 GeV/$c^2$), por isso o alcance da interação fraca é curto, da ordem de $10^{-18}\\,\\text{m}$. O alcance é inversamente proporcional à massa da partícula mediadora.</p>`,
        `<p>O gráviton é um bóson hipotético da gravitação. Ainda não foi confirmado experimentalmente e não está incluído no modelo padrão.</p>`,
        { fig: 'v5v8-interakcie', caption: `Quatro interações fundamentais: cada uma é transmitida pela troca de seu bóson e tem um alcance diferente.` }
      ],
      examples: [
        { task: `Qual partícula transmite a interação forte?`,
          steps: [`A interação forte é transmitida pelos glúons.`, `<strong>Resultado: glúon</strong>`] },
        { task: `Por que a interação fraca tem alcance tão curto?`,
          steps: [`Os bósons mediadores $W$ e $Z$ têm grande massa.`, `O alcance é inversamente proporcional à massa, portanto a grande massa reduz o alcance.`, `<strong>Resultado: a grande massa dos bósons reduz o alcance</strong>`] }
      ]
    },
    'v8-standardny-model': {
      title: `Modelo padrão da física de partículas`,
      summary: `Visão geral das partículas e interações do modelo padrão e seu número.`,
      theory: [
        `<p>O modelo padrão descreve três das quatro interações fundamentais (eletromagnética, fraca e forte) e todas as partículas elementares conhecidas até hoje. A gravitação ainda não está incluída.</p>`,
        `<p>A matéria é formada por 12 férmions: 6 quarks e 6 léptons, em três gerações. Cada geração seguinte é mais pesada e mais instável. A matéria estável é constituída apenas pelas partículas da primeira geração.</p>`,
        `<p>As partículas adquirem massa pelo <em>mecanismo de Higgs</em>. As leis de conservação (carga, cor, números leptônicos) e as simetrias determinam quais processos são permitidos.</p>`,
        `<ul><li>Bósons de calibre: fóton $\\gamma$, oito glúons $g$, bósons $W^{\\pm}$ e $Z^{0}$.</li><li>Bóson de Higgs $H^{0}$.</li></ul>`,
        { fig: 'v5v8-generacie', caption: `Os férmions estão em três gerações; as gerações superiores são mais pesadas e instáveis.` }
      ],
      examples: [
        { task: `Quantos férmions tem o modelo padrão nas duas primeiras gerações?`,
          steps: [`Cada geração contém 2 quarks e 2 léptons, ou seja, 4 férmions.`, `$2\\cdot 4 = 8$.`, `<strong>Resultado: 8</strong>`] },
        { task: `Quantos bósons de calibre há no modelo padrão?`,
          steps: [`Fóton (1), glúons (8) e os bósons $W^{+}$, $W^{-}$, $Z^{0}$ (3).`, `$1+8+3=12$.`, `<strong>Resultado: 12</strong>`] }
      ]
    },
    'v8-interakcie': {
      title: `Interação forte, fraca e eletromagnética`,
      summary: `Alcance, atuação e força relativa das três interações.`,
      theory: [
        `<p><strong>A interação forte</strong> mantém os quarks unidos nos prótons e nêutrons, e os núcleons no núcleo. Tem o menor alcance, da ordem de $10^{-15}\\,\\text{m}$, e é a mais intensa das quatro interações.</p>`,
        `<p><strong>A interação eletromagnética</strong> atua entre cargas. Provoca as forças elétricas e magnéticas e a ligação dos elétrons nos átomos. O alcance é infinito e a força diminui com o quadrado da distância.</p>`,
        `<p><strong>A interação fraca</strong> é responsável pelo decaimento beta, no qual um quark $d$ se transforma em $u$ e é emitido um bóson $W^{-}$. O alcance é muito curto, da ordem de $10^{-18}\\,\\text{m}$. Ela muda o sabor dos quarks, o que as outras interações não conseguem fazer.</p>`,
        `<p>As forças relativas (para dois núcleons no núcleo) são aproximadamente 1 : $10^{-2}$ : $10^{-6}$ : $10^{-39}$, na ordem forte, eletromagnética, fraca e gravitacional. A gravitação é a mais fraca e, no micromundo, desprezível.</p>`,
        { fig: 'v5v8-interakcie', caption: `Quatro interações fundamentais: cada uma é transmitida pela troca de seu bóson e tem um alcance diferente.` }
      ],
      examples: [
        { task: `Qual interação é responsável pelo decaimento beta?`,
          steps: [`No decaimento beta um quark $d$ se transforma em $u$.`, `A mudança de sabor de um quark é domínio da interação fraca.`, `<strong>Resultado: a interação fraca</strong>`] },
        { task: `Qual interação mantém os elétrons no átomo?`,
          steps: [`Os elétrons têm carga negativa e o núcleo carga positiva.`, `<strong>Resultado: a interação eletromagnética</strong>`] }
      ]
    },
    'v8-urychlovace': {
      title: `Aceleradores de partículas e detectores`,
      summary: `Aceleração de partículas carregadas, colisões e reconstrução de eventos no detector.`,
      theory: [
        `<p>Um acelerador acelera partículas carregadas por meio de um campo elétrico. Uma partícula com carga $q = z\\,e$ atravessa uma diferença de potencial $U$ e adquire energia cinética $E_k = z\\,e\\,U$. Se a tensão estiver em megavolts, a energia sai em MeV.</p>`,
        `<p>Grandes aceleradores, como o LHC do CERN, com circunferência de 27 km, mantêm os feixes numa trajetória circular com ímãs potentes, e as partículas são aceleradas em etapas. As colisões próton–próton atingem energias da ordem de TeV.</p>`,
        `<p>Os detectores registram os rastros das partículas. Um detector de trajetórias num campo magnético mostra a curvatura do caminho, a partir da qual se determina o momento linear. Calorímetros medem a energia, e câmaras de múons acompanham os múons. Com esses dados reconstruímos qual partícula foi produzida.</p>`,
        `<p>Segundo a relação $E = m\\,c^2$, a energia cinética de uma colisão pode converter-se em massa de novas partículas. Por isso, em colisões de alta energia surgem também partículas muito pesadas.</p>`,
        { fig: 'v5v8-urychlovac', caption: `Partícula com carga ze atravessa uma tensão U e adquire energia zeU; ela é acelerada pelo campo elétrico.` }
      ],
      examples: [
        { task: `Um próton é acelerado por uma tensão de 5 MV. Qual é a sua energia cinética?`,
          steps: [`Para o próton $z=1$, logo $E_k = e\\,U$.`, `$E_k = 5\\,\\text{MeV}$.`, `<strong>Resultado: 5 MeV</strong>`] },
        { task: `Uma partícula com carga $+2e$ atravessa uma tensão de 3 MV. Que energia ela adquire?`,
          steps: [`$z=2$, logo $E_k = 2\\cdot 3\\,\\text{MeV}$.`, `<strong>Resultado: 6 MeV</strong>`] }
      ]
    },
    'v8-higgs': {
      title: `Bóson de Higgs e questões em aberto`,
      summary: `Campo de Higgs, descoberta do bóson de Higgs e problemas não resolvidos da física moderna.`,
      theory: [
        `<p>O bóson de Higgs foi descoberto em 2012 no LHC. É o quantum do campo de Higgs, que está presente em todo o universo. As partículas que interagem com esse campo adquirem massa; quanto mais intensamente interagem, mais pesadas são.</p>`,
        `<p>A massa do bóson de Higgs é de aproximadamente 125 GeV/$c^2$, cerca de 133 vezes a massa do próton. A partícula foi confirmada por seus decaimentos em dois fótons ou em bósons $Z$.</p>`,
        `<p>Questões em aberto: a <strong>matéria escura</strong> constitui cerca de 27 % do conteúdo energético do universo, e o modelo padrão não a descreve. As <strong>massas dos neutrinos</strong> são pequenas, mas não nulas, algo que o modelo original não previa. O modelo padrão também não inclui a <strong>gravitação</strong> e não explica por que existe mais matéria do que antimatéria no universo.</p>`
      ],
      examples: [
        { task: `Quantas vezes o bóson de Higgs é mais pesado que o próton (massa do próton de aproximadamente 0,94 GeV/$c^2$)?`,
          steps: [`$125/0{,}94\\approx 133$.`, `<strong>Resultado: cerca de 133 vezes</strong>`] },
        { task: `Qual é, aproximadamente, a fração da energia do universo constituída por matéria escura?`,
          steps: [`A matéria escura constitui cerca de 27 %, e a matéria comum apenas cerca de 5 %.`, `<strong>Resultado: cerca de 27 %</strong>`] }
      ]
    }
  }
});
