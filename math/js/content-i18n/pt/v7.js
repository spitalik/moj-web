/* Português: preklad js/rocniky/v7.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/v7/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "v7-chyby": {
   "title": "Erros e precisão dos cálculos",
   "summary": "Erro absoluto e relativo, algarismos significativos, números de máquina e épsilon da máquina, propagação de erros, condicionamento do problema e perda de precisão na subtração.",
   "theory": [
    "<p>O resultado de um cálculo numérico é quase sempre apenas <strong>aproximado</strong>. Os erros vêm de várias fontes: do <em>modelo</em>\n       (descrição simplificada da realidade), dos <em>dados de entrada</em> (medições), do <em>método</em> (um processo infinito, por exemplo uma série ou um limite, é substituído por um finito — erro\n       do método ou de discretização) e do <em>arredondamento</em> ao calcular com um número finito de algarismos.</p>\n       <p>Se $x$ é o valor exato e $\\tilde{x}$ a sua aproximação, então o <strong>erro absoluto</strong> é $\\Delta = |x-\\tilde{x}|$ e o <strong>erro relativo</strong> é\n       $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$ (para $x\\neq 0$), frequentemente em porcentagem. Em geral não conhecemos o valor exato, por isso trabalhamos com uma <em>estimativa</em> (cota) do erro:\n       um número $\\varepsilon$ para o qual $|x-\\tilde{x}|\\le\\varepsilon$, e escrevemos $x=\\tilde{x}\\pm\\varepsilon$. O erro relativo é mais importante, porque não depende das unidades:\n       um erro de 1 mm é desprezível no comprimento de uma ponte, mas enorme na espessura de uma chapa.</p>",
    "<p><strong>Algarismos significativos.</strong> Um algarismo da aproximação $\\tilde{x}$ na posição de ordem $10^{-k}$ é <em>exato</em> (confiável) se $|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$.\n       Contamos os algarismos significativos exatos do primeiro algarismo não nulo à esquerda até o último exato. Por exemplo, $\\tilde{x}=23{,}4718$ com erro de no máximo $0{,}004$ tem duas casas decimais exatas\n       ($0{,}004\\le 0{,}005$), ou seja, quatro algarismos significativos exatos: 2, 3, 4, 7. O <strong>arredondamento</strong> para $k$ casas decimais causa um erro de no máximo $\\frac{1}{2}\\cdot 10^{-k}$;\n       um número corretamente arredondado tem, portanto, todos os algarismos escritos exatos.</p>",
    "<p><strong>Números de máquina.</strong> O computador armazena os números reais em ponto flutuante, na forma $\\pm m\\cdot\\beta^{e}$, em que $\\beta$ é a base, a mantissa $m$ tem um número fixo\n       $t$ de algarismos e o expoente $e$ está num intervalo limitado. O padrão IEEE 754 em precisão dupla (double) usa $\\beta=2$, $t=53$ bits de mantissa e expoentes\n       aproximadamente de $-1022$ a $1023$. O conjunto dos números de máquina é finito; fora dele ocorre <em>overflow</em> (número grande demais) ou <em>underflow</em> (número pequeno demais).</p>\n       <p>O <strong>épsilon da máquina</strong> $\\varepsilon_M$ é a distância do número 1 ao próximo número de máquina maior; para double, $\\varepsilon_M=2^{-52}\\approx 2{,}22\\cdot 10^{-16}$.\n       Arredondando um número real para um número de máquina, obtemos $\\mathrm{fl}(x)=x(1+\\eta)$, em que $|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$ (unidade de arredondamento).\n       O double carrega, portanto, cerca de 15 a 16 algarismos decimais significativos. Nem mesmo o número $0{,}1$ tem representação finita no sistema binário, por isso, por exemplo, $0{,}1+0{,}2$ não é exatamente $0{,}3$.</p>",
    "<p><strong>Propagação de erros.</strong> Para as estimativas dos erros das entradas vale (em aproximação linear):\n       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$\n       Para uma função $y=f(x)$, $\\Delta y\\approx|f'(x)|\\,\\Delta x$; para uma função de várias variáveis, $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$.\n       Na adição somam-se, portanto, os erros absolutos; na multiplicação e na divisão, os relativos.</p>\n       <p><strong>Condicionamento.</strong> Um problema é <em>bem condicionado</em> se uma pequena variação relativa da entrada causa uma pequena variação relativa do resultado. A medida é o\n       <strong>número de condição</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, para o qual $\\delta y\\approx\\kappa\\,\\delta x$. Por exemplo, $f(x)=\\ln x$ tem $\\kappa=\\frac{1}{|\\ln x|}$,\n       que é um número grande para $x$ próximo de 1: o logaritmo de um número próximo de um é um problema mal condicionado. O condicionamento é uma propriedade do <em>problema</em>, enquanto a <em>estabilidade</em> é uma propriedade\n       do <em>algoritmo</em> — um algoritmo estável não amplia os erros de arredondamento mais do que corresponde ao condicionamento do problema.</p>",
    "<p><strong>Perda de precisão na subtração.</strong> A diferença de dois números próximos é mal condicionada: $\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$, e o denominador é pequeno.\n       Os algarismos iniciais comuns se cancelam na subtração, e os algarismos restantes estão contaminados pelo erro (o chamado <em>cancelamento catastrófico</em>). Ajuda uma manipulação algébrica que elimine a subtração:\n       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>"
   ],
   "examples": [
    {
     "task": "Substituímos o número $\\pi$ pelo valor $3{,}14$. Determine o erro absoluto e o relativo e o número de algarismos significativos exatos da aproximação.",
     "steps": [
      "$\\Delta=|\\pi-3{,}14|=|3{,}14159\\ldots-3{,}14|\\approx 0{,}00159$.",
      "$\\delta=\\frac{0{,}00159}{3{,}14159}\\approx 0{,}000507=0{,}0507\\,\\%$.",
      "Como $0{,}00159\\le 0{,}005=\\frac{1}{2}\\cdot 10^{-2}$, duas casas decimais são exatas. A aproximação $3{,}14$ tem <strong>3 algarismos significativos exatos</strong>."
     ]
    },
    {
     "task": "A menor raiz da equação $x^2-200x+1=0$ é $x=100-\\sqrt{9999}$. Calcule-a em aritmética com 4 algarismos significativos, diretamente e depois de uma manipulação que elimine a subtração.",
     "steps": [
      "Com 4 algarismos significativos, $\\sqrt{9999}=99{,}99499\\ldots\\approx 100{,}0$. O cálculo direto dá $100-100{,}0=0$ — todos os algarismos se perderam, e o erro relativo é de 100 %.",
      "Multiplicamos e dividimos pelo conjugado: $100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$.",
      "Agora $\\frac{1}{100+100{,}0}=\\frac{1}{200{,}0}=0{,}005000$. O valor exato é $0{,}0050001250\\ldots$, de modo que o resultado tem os 4 algarismos exatos.",
      "O problema em si é bem condicionado; ruim era apenas o algoritmo (subtração de números próximos)."
     ]
    }
   ]
  },
  "v7-rovnice": {
   "title": "Resolução numérica de equações",
   "summary": "Isolamento da raiz, método da bissecção, iteração de ponto fixo, método de Newton e método das secantes, ordem de convergência e critérios de parada.",
   "theory": [
    "<p>Procuramos uma raiz $\\xi$ da equação $f(x)=0$ que não pode ser expressa por uma fórmula (por exemplo, $x=\\cos x$ ou $x^5-x-1=0$). Primeiro <strong>isolamos</strong> a raiz — encontramos um intervalo\n       $[a, b]$ que contém exatamente uma raiz. Pelo <strong>teorema de Bolzano</strong>, uma função contínua com $f(a)\\,f(b)&lt;0$ tem pelo menos uma raiz no intervalo $(a, b)$; se, além disso,\n       $f'$ não muda de sinal em $[a, b]$, a raiz é única.</p>\n       <p><strong>Método da bissecção.</strong> Calculamos o ponto médio $c=\\frac{a+b}{2}$. Se $f(a)\\,f(c)&lt;0$, continuamos com $[a, c]$; caso contrário, com $[c, b]$. Cada passo\n       divide o intervalo ao meio; depois de $n$ passos, ele tem comprimento $\\frac{b-a}{2^n}$. Para obter um comprimento de no máximo $\\varepsilon$, são necessários $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ passos.\n       O método é lento, mas converge <em>sempre</em> e precisa apenas dos sinais dos valores da função.</p>",
    "<p><strong>Método da iteração de ponto fixo.</strong> Reescrevemos a equação na forma $x=g(x)$ e calculamos $x_{k+1}=g(x_k)$. Se $g$ leva o intervalo $I$ em si mesmo e\n       $|g'(x)|\\le q&lt;1$ em $I$, então $g$ tem em $I$ um único <em>ponto fixo</em> $\\xi$, e a sequência converge para ele para qualquer início $x_0\\in I$ (teorema do ponto fixo de Banach).\n       Valem as estimativas\n       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$\n       A escolha da forma é importante: a equação $x^2-2=0$ pode ser escrita como $x=\\frac{2}{x}$ (as iterações oscilam, $|g'(\\sqrt{2})|=1$) ou como $x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$ (convergência muito rápida).</p>",
    "<p><strong>Método de Newton (método das tangentes).</strong> Substituímos o gráfico da função no ponto $x_k$ pela reta tangente e tomamos como aproximação seguinte a sua interseção com o eixo $x$:\n       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$\n       Para uma raiz simples ($f'(\\xi)\\neq 0$) e um início suficientemente próximo da raiz, ele converge <strong>quadraticamente</strong>: $|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$;\n       o número de algarismos exatos praticamente dobra a cada passo. <em>Condição de Fourier:</em> se $f'$ e $f''$ não mudam de sinal em $[a, b]$ e começamos no extremo\n       em que $f(x_0)\\,f''(x_0)&gt;0$, as iterações convergem monotonicamente. A partir de um início ruim, o método pode saltar para longe; para uma raiz múltipla, converge apenas linearmente.</p>",
    {
     "fig": "v7-newton",
     "caption": "Método de Newton para $f(x)=x^2-2$: pelo ponto $(x_k; f(x_k))$ traçamos a tangente, e a sua interseção com o eixo $x$ é $x_{k+1}$. Já depois de três passos, a aproximação de $\\sqrt{2}$ tem erro da ordem de $10^{-6}$ a $10^{-12}$."
    },
    "<p>O <strong>método das secantes</strong> substitui a derivada pelo quociente de diferenças das duas últimas aproximações:\n       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$\n       Ele não precisa da derivada e converge com ordem $\\frac{1+\\sqrt{5}}{2}\\approx 1{,}618$. Se traçamos a secante sempre por pontos de sinais opostos (como na bissecção),\n       obtemos a <em>regula falsi</em> (método da falsa posição), que sempre converge, mas geralmente apenas de forma linear.</p>\n       <p><strong>Ordem de convergência.</strong> Um método tem ordem $p$ se $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$; para $p=1$ (convergência linear), deve ser $C&lt;1$. A bissecção e a iteração de ponto fixo\n       têm ordem 1, as secantes ordem $1{,}618$, o método de Newton ordem 2. <strong>Critérios de parada:</strong> $|x_{k+1}-x_k|&lt;\\varepsilon$, relativamente $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$,\n       $|f(x_k)|&lt;\\delta$ e sempre também um número máximo de iterações. Um $|f(x_k)|$ pequeno, por si só, não garante proximidade da raiz se a função for muito achatada.</p>"
   ],
   "examples": [
    {
     "task": "Pelo método de Newton, encontre $\\sqrt{5}$ como raiz da função $f(x)=x^2-5$, começando no ponto $x_0=2$, e faça dois passos.",
     "steps": [
      "$f'(x)=2x$, de modo que $x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$.",
      "$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2{,}25$.",
      "$x_2=2{,}25-\\frac{2{,}25^2-5}{4{,}5}=2{,}25-\\frac{0{,}0625}{4{,}5}\\approx 2{,}236111$.",
      "O valor exato é $\\sqrt{5}=2{,}236068\\ldots$: o erro caiu de $0{,}014$ para $0{,}00004$, o que corresponde à convergência quadrática."
     ]
    },
    {
     "task": "Pela bissecção, localize a raiz da equação $x^3-x-1=0$ no intervalo $[1; 2]$ (três passos). Quantos passos seriam necessários para um intervalo de comprimento de no máximo $10^{-6}$?",
     "steps": [
      "$f(1)=-1&lt;0$, $f(2)=5&gt;0$; a raiz está em $[1; 2]$.",
      "$f(1{,}5)=0{,}875&gt;0$ → $[1; 1{,}5]$. $f(1{,}25)\\approx-0{,}297&lt;0$ → $[1{,}25; 1{,}5]$. $f(1{,}375)\\approx 0{,}225&gt;0$ → $[1{,}25; 1{,}375]$.",
      "Depois de $n$ passos, o intervalo tem comprimento $2^{-n}$. A condição $2^{-n}\\le 10^{-6}$ dá $n\\ge 6\\log_2 10\\approx 19{,}93$, ou seja, <strong>20 passos</strong>.",
      "A raiz é $\\xi\\approx 1{,}3247$; o método de Newton atingiria a mesma precisão em 4 a 5 passos."
     ]
    }
   ]
  },
  "v7-interpolacia": {
   "title": "Interpolação e aproximação",
   "summary": "Polinômio interpolador nas formas de Lagrange e de Newton, diferenças divididas, erro de interpolação, fenômeno de Runge e método dos mínimos quadrados.",
   "theory": [
    "<p><strong>O problema da interpolação.</strong> São dados <em>nós</em> distintos $x_0, x_1, \\dots, x_n$ e valores $y_0, y_1, \\dots, y_n$ (por exemplo, medidos ou tirados de uma tabela).\n       Procuramos um polinômio $P_n$ de grau no máximo $n$ tal que $P_n(x_i)=y_i$ para todo $i$. Esse polinômio existe e é <strong>único</strong>: as condições formam um sistema\n       com a matriz de Vandermonde, cujo determinante $\\prod_{i&lt;j}(x_j-x_i)$ é não nulo. Usamos então o polinômio para calcular valores entre os nós.</p>",
    "<p><strong>Forma de Lagrange.</strong> Para cada nó, construímos um polinômio de base que vale 1 nesse nó e 0 nos demais nós:\n       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$\n       Para dois nós, obtemos a <em>interpolação linear</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$. A forma de Lagrange é clara, mas, ao acrescentar um nó, é preciso recalcular tudo.</p>",
    "<p><strong>Forma de Newton e diferenças divididas.</strong> As diferenças divididas são definidas recursivamente:\n       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$\n       Então\n       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$\n       As diferenças são calculadas numa tabela triangular, e acrescentar mais um nó significa apenas acrescentar um termo. O valor do polinômio é calculado de forma econômica pelo esquema de Horner (Briot–Ruffini).</p>",
    "<p><strong>Erro de interpolação.</strong> Se $f$ tem derivada contínua de ordem $n+1$, para cada $x$ existe $\\xi$ no menor intervalo que contém $x$ e os nós, tal que\n       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$\n       Daí a estimativa $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$, em que $M_{n+1}=\\max|f^{(n+1)}|$. Na interpolação linear com passo $h$, o erro é no máximo $\\frac{M_2h^2}{8}$.\n       Aumentar o grau com nós igualmente espaçados pode não ajudar: para a função $\\frac{1}{1+25x^2}$ em $[-1; 1]$, o polinômio oscila fortemente perto das extremidades (<strong>fenômeno de Runge</strong>).\n       A solução são os nós de Chebyshev, mais densos perto das extremidades, ou a interpolação polinomial por partes (splines).</p>",
    "<p><strong>Método dos mínimos quadrados.</strong> Dados medidos contêm erros, por isso não queremos passar por eles um polinômio de grau alto, mas sim uma função simples que os\n       <em>aproxime</em>. Escolhemos a reta $y=ax+b$ de modo que a soma dos quadrados dos desvios $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$ seja mínima. Das condições\n       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$ obtemos as <strong>equações normais</strong>\n       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i,$$\n       com solução $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$, $b=\\frac{\\sum y_i-a\\sum x_i}{n}$. A reta passa pelo centroide dos dados $(\\bar{x}; \\bar{y})$.</p>"
   ],
   "examples": [
    {
     "task": "Encontre o valor do polinômio interpolador para os pontos $(0; 1)$, $(1; 3)$, $(3; 2)$ no ponto $x=2$, tanto na forma de Lagrange quanto na de Newton.",
     "steps": [
      "Lagrange: $\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$, $\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$, $\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$.",
      "$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3{,}333$.",
      "Newton: $f[0, 1]=\\frac{3-1}{1}=2$, $f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$, $f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$.",
      "$P(x)=1+2x-\\frac{5}{6}x(x-1)$, logo $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$ — o mesmo polinômio, escrito de outra forma."
     ]
    },
    {
     "task": "Pelo método dos mínimos quadrados, ajuste uma reta aos pontos $(0; 1)$, $(1; 2)$, $(2; 4)$, $(3; 4)$.",
     "steps": [
      "$n=4$, $\\sum x_i=6$, $\\sum y_i=11$, $\\sum x_i^2=14$, $\\sum x_iy_i=0+2+8+12=22$.",
      "$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1{,}1$.",
      "$b=\\frac{11-1{,}1\\cdot 6}{4}=\\frac{4{,}4}{4}=1{,}1$.",
      "A reta procurada é $y=1{,}1x+1{,}1$; ela passa pelo centroide $(1{,}5; 2{,}75)$."
     ]
    }
   ]
  },
  "v7-derivacia-integracia": {
   "title": "Derivação e integração numérica",
   "summary": "Diferença progressiva e centrada, escolha do passo, regras do ponto médio, dos trapézios e de Simpson, ordem de precisão e estimativa do erro.",
   "theory": [
    "<p><strong>Derivação numérica.</strong> Da expansão de Taylor $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$ obtemos as fórmulas\n       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{diferença progressiva, erro }-\\frac{h}{2}f''(\\xi)},\\qquad\n       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{diferença centrada, erro }-\\frac{h^2}{6}f'''(\\xi)}.$$\n       A diferença progressiva (e também a regressiva $\\frac{f(x)-f(x-h)}{h}$) tem <strong>ordem de precisão 1</strong>, e a centrada, <strong>ordem 2</strong>: com metade do passo, o erro diminui cerca de\n       duas vezes ou quatro vezes, respectivamente. Para a segunda derivada usamos $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$, com erro $O(h^2)$.</p>",
    "<p><strong>Escolha do passo.</strong> O passo não pode ser diminuído indefinidamente. No numerador subtraímos dois valores próximos, de modo que o erro de arredondamento é da ordem de $\\frac{\\varepsilon_M|f(x)|}{h}$\n       e <em>cresce</em> à medida que $h$ diminui. O erro total da diferença progressiva $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$ é mínimo aproximadamente para $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$;\n       para a diferença centrada, para $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$. A derivação numérica é, portanto, um problema mal condicionado, ao contrário da integração.</p>",
    "<p><strong>Fórmulas de quadratura.</strong> Dividimos o intervalo $[a, b]$ em $n$ subintervalos com passo $h=\\frac{b-a}{n}$; os nós são $x_i=a+ih$ e $f_i=f(x_i)$. Em cada subintervalo, substituímos\n       a função por um polinômio e integramos este exatamente:</p>\n       <ul><li><strong>regra do retângulo (ponto médio)</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$, erro $\\frac{(b-a)h^2}{24}f''(\\xi)$;</li>\n       <li><strong>regra dos trapézios</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$, erro $-\\frac{(b-a)h^2}{12}f''(\\xi)$;</li>\n       <li><strong>regra de Simpson</strong> ($n$ par, uma parábola em cada par de subintervalos) $S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$, erro $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$.</li></ul>",
    {
     "fig": "v7-lichobeznik",
     "caption": "Regra dos trapézios para $f(x)=2+\\sin 1{,}5x+0{,}3x$ em $[0; 4]$. Aumente o número de subintervalos e observe como o erro diminui aproximadamente com o quadrado do passo; para $n$ par, aparece também o resultado da regra de Simpson."
    },
    "<p><strong>Ordem de precisão.</strong> O erro da fórmula composta se comporta como $Ch^p$. As regras do ponto médio e dos trapézios têm $p=2$ (metade do passo → erro quatro vezes menor),\n       a de Simpson tem $p=4$ (dezesseis vezes menor) e é exata para polinômios de grau até três, inclusive. A regra do ponto médio tem aproximadamente metade do erro da regra dos trapézios, com sinal oposto,\n       por isso $S_{2n}=\\frac{2M_n+T_n}{3}$. A partir de dois cálculos com passos $h$ e $\\frac{h}{2}$, estimamos o erro pela <strong>regra de Runge</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$,\n       e o resultado melhorado $\\frac{4T_{2n}-T_n}{3}$ é exatamente a fórmula de Simpson (extrapolação de Richardson, na qual se baseia o método de Romberg).</p>"
   ],
   "examples": [
    {
     "task": "Estime $f'(0)$ para $f(x)=e^x$ com passo $h=0{,}1$ pela diferença progressiva e pela centrada e compare os erros.",
     "steps": [
      "Progressiva: $\\frac{e^{0{,}1}-1}{0{,}1}=\\frac{0{,}105171}{0{,}1}\\approx 1{,}051709$, erro $\\approx 0{,}0517$.",
      "Centrada: $\\frac{e^{0{,}1}-e^{-0{,}1}}{0{,}2}\\approx\\frac{1{,}105171-0{,}904837}{0{,}2}\\approx 1{,}001668$, erro $\\approx 0{,}0017$.",
      "O valor exato é $f'(0)=1$. As estimativas de erro $\\frac{h}{2}f''=0{,}05$ e $\\frac{h^2}{6}f'''\\approx 0{,}0017$ concordam bem com o resultado."
     ]
    },
    {
     "task": "Calcule $\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0{,}785398$ pela regra dos trapézios e pela regra de Simpson com $n=2$.",
     "steps": [
      "$h=0{,}5$, $f(0)=1$, $f(0{,}5)=0{,}8$, $f(1)=0{,}5$.",
      "$T_2=\\frac{0{,}5}{2}(1+2\\cdot 0{,}8+0{,}5)=0{,}25\\cdot 3{,}1=0{,}775$, erro $\\approx 0{,}0104$.",
      "$S_2=\\frac{0{,}5}{3}(1+4\\cdot 0{,}8+0{,}5)=\\frac{0{,}5\\cdot 4{,}7}{3}\\approx 0{,}783333$, erro $\\approx 0{,}0021$.",
      "Com o mesmo número de avaliações da função, a regra de Simpson é bem mais precisa."
     ]
    }
   ]
  },
  "v7-ode": {
   "title": "Resolução numérica de equações diferenciais",
   "summary": "Problema de Cauchy, método de Euler, método de Heun (Euler melhorado), método de Runge–Kutta de 4ª ordem, erro local e global, escolha do passo e estabilidade.",
   "theory": [
    "<p>Resolvemos o <strong>problema de Cauchy</strong> (problema de valor inicial) $y'=f(x, y)$, $y(x_0)=y_0$, que na maioria das vezes não sabemos resolver analiticamente. Escolhemos um <strong>passo</strong> $h$ e os nós $x_k=x_0+kh$ e\n       calculamos sucessivamente as aproximações $y_k\\approx y(x_k)$. Os métodos de passo único calculam $y_{k+1}$ apenas a partir do par $(x_k; y_k)$. O <strong>erro local</strong> é o erro de um único passo\n       (supondo $y_k$ exato); o <strong>erro global</strong> $y(x_k)-y_k$ é o erro acumulado no nó. Se o erro local é $O(h^{p+1})$, depois de $\\frac{X-x_0}{h}$ passos\n       o erro global é $O(h^p)$, e dizemos que o método tem <strong>ordem</strong> $p$.</p>",
    "<p><strong>Método de Euler.</strong> No subintervalo $[x_k, x_{k+1}]$, substituímos a solução pela tangente com coeficiente angular $f(x_k, y_k)$ dado pelo campo de direções:\n       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$\n       É o método mais simples, de primeira ordem: erro local $\\frac{h^2}{2}y''(\\xi)$, global $O(h)$. Metade do passo reduz o erro apenas à metade, aproximadamente; por isso, na prática,\n       ele é usado mais como ponto de partida para métodos mais precisos.</p>",
    {
     "fig": "v7-euler",
     "caption": "O problema $y'=y$, $y(0)=1$ em $[0; 2]$, com solução exata $y=e^x$ (curva preta). O método de Euler (azul) fica sistematicamente para trás; o de Heun (verde), com o mesmo passo, é muito mais preciso. Aumente o número de passos e compare a rapidez com que os erros diminuem."
    },
    "<p>O <strong>método de Heun (Euler melhorado)</strong> é do tipo preditor–corretor: com um passo de Euler, estimamos o valor no fim do subintervalo e depois tomamos a média dos coeficientes angulares:\n       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$\n       Ele corresponde à regra dos trapézios e tem <strong>ordem 2</strong>. Semelhante é o <em>método de Euler modificado (do ponto médio)</em> $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$.</p>\n       <p>O <strong>método de Runge–Kutta de 4ª ordem (RK4)</strong> avalia em cada passo quatro coeficientes angulares\n       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$\n       e toma a sua média ponderada $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$ — um análogo da regra de Simpson. Com metade do passo, o erro diminui cerca de 16 vezes.</p>",
    "<p><strong>Passo e erro.</strong> Para um método de ordem $p$, o erro global é aproximadamente $Ch^p$. A partir de dois cálculos com passos $h$ e $\\frac{h}{2}$, estimamos esse erro pela <strong>regra de Runge</strong>\n       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$. Os programas modernos adaptam o passo (passo adaptativo, por exemplo, com pares de métodos de Runge–Kutta de ordens diferentes).\n       Um passo menor nem sempre significa um resultado melhor — cresce o número de operações e também o de erros de arredondamento.</p>\n       <p><strong>Estabilidade.</strong> Para a equação de teste $y'=\\lambda y$ com $\\lambda&lt;0$, o método de Euler dá $y_{k+1}=(1+h\\lambda)y_k$; a solução numérica tende a zero somente se\n       $|1+h\\lambda|&lt;1$, ou seja, $h&lt;\\frac{2}{|\\lambda|}$. Com um passo maior, ela oscila e cresce, embora a solução exata decresça rapidamente. Equações com escalas de tempo muito diferentes\n       (equações <em>rígidas</em>, stiff) são, por isso, resolvidas por métodos implícitos, por exemplo, o método de Euler implícito $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$, que é estável para todo $h&gt;0$.</p>"
   ],
   "examples": [
    {
     "task": "Resolva o problema $y'=y$, $y(0)=1$ com passo $h=0{,}5$ pelos métodos de Euler e de Heun até $x=1$ e compare com $e\\approx 2{,}71828$.",
     "steps": [
      "Euler: $y_1=1+0{,}5\\cdot 1=1{,}5$, $y_2=1{,}5+0{,}5\\cdot 1{,}5=2{,}25$, erro $\\approx 0{,}468$.",
      "Heun, 1º passo: preditor $\\tilde{y}_1=1{,}5$, $y_1=1+0{,}25\\,(1+1{,}5)=1{,}625$.",
      "Heun, 2º passo: $\\tilde{y}_2=1{,}625+0{,}5\\cdot 1{,}625=2{,}4375$, $y_2=1{,}625+0{,}25\\,(1{,}625+2{,}4375)=2{,}640625$, erro $\\approx 0{,}078$.",
      "Com o mesmo passo, o método de Heun é cerca de seis vezes mais preciso."
     ]
    },
    {
     "task": "Faça um passo do método RK4 com passo $h=0{,}1$ para o problema $y'=x+y$, $y(0)=1$. A solução exata é $y=2e^x-x-1$.",
     "steps": [
      "$k_1=f(0; 1)=1$, $k_2=f(0{,}05;\\ 1+0{,}05\\cdot 1)=0{,}05+1{,}05=1{,}1$.",
      "$k_3=f(0{,}05;\\ 1+0{,}05\\cdot 1{,}1)=0{,}05+1{,}055=1{,}105$, $k_4=f(0{,}1;\\ 1+0{,}1\\cdot 1{,}105)=0{,}1+1{,}1105=1{,}2105$.",
      "$y_1=1+\\frac{0{,}1}{6}(1+2{,}2+2{,}21+1{,}2105)=1+\\frac{0{,}66205}{6}\\approx 1{,}1103417$.",
      "O valor exato é $y(0{,}1)=2e^{0{,}1}-1{,}1\\approx 1{,}1103418$; o erro é de cerca de $10^{-7}$."
     ]
    }
   ]
  },
  "v7-matice": {
   "title": "Algoritmos para trabalhar com matrizes",
   "summary": "Eliminação de Gauss com pivoteamento, decomposição LU, complexidade dos métodos diretos, iterações de Jacobi e de Gauss–Seidel, método das potências para o autovalor dominante.",
   "theory": [
    "<p>A <strong>eliminação de Gauss</strong> resolve o sistema $Ax=b$ com uma matriz invertível de ordem $n\\times n$ em duas fases. Na <em>fase de eliminação</em>, para $k=1, \\dots, n-1$,\n       subtraímos das linhas $i&gt;k$ um múltiplo da $k$-ésima linha com o <strong>multiplicador</strong> $l_{ik}=\\frac{a_{ik}}{a_{kk}}$, de modo que surgem zeros abaixo da diagonal e a matriz\n       se torna triangular superior. Na <em>substituição regressiva</em>, calculamos $x_n, x_{n-1}, \\dots, x_1$ substituindo de baixo para cima.</p>\n       <p>Se o <em>elemento pivô</em> $a_{kk}$ é nulo ou muito pequeno, os multiplicadores são enormes e os erros de arredondamento crescem. Por isso usa-se o\n       <strong>pivoteamento parcial</strong>: antes do $k$-ésimo passo, trocamos as linhas de modo que $|a_{kk}|$ seja o maior na $k$-ésima coluna, na diagonal e abaixo dela. Então $|l_{ik}|\\le 1$.</p>",
    "<p><strong>Decomposição LU.</strong> Os multiplicadores da fase de eliminação formam uma matriz triangular inferior $L$ com uns na diagonal, e a matriz triangular superior resultante é $U$; vale\n       $A=LU$ (com pivoteamento, $PA=LU$, em que $P$ é uma matriz de permutação). O sistema é então resolvido por meio de dois sistemas triangulares:\n       $$Ly=b\\ \\text{(substituição progressiva)},\\qquad Ux=y\\ \\text{(substituição regressiva)}.$$\n       A decomposição compensa quando resolvemos vários sistemas com a mesma matriz e diferentes lados direitos. Obtemos também o determinante $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$.\n       Para matrizes simétricas definidas positivas existe a <em>decomposição de Cholesky</em> $A=LL^{T}$, mais econômica.</p>",
    "<p><strong>Complexidade.</strong> A fase de eliminação de Gauss custa aproximadamente $\\frac{2}{3}n^3$ operações aritméticas; cada substituição triangular, cerca de $n^2$. Com o dobro da\n       dimensão, o tempo de eliminação aumenta cerca de oito vezes. Não é necessário calcular a matriz inversa (cerca de $2n^3$ operações) para resolver um sistema. Para matrizes <em>de banda</em> com largura de banda $w$, o custo\n       cai para $O(nw^2)$; para tridiagonais, para $O(n)$. Para matrizes grandes <em>esparsas</em> (a maioria dos elementos nula), a eliminação preenche os zeros, por isso são usados métodos iterativos.</p>",
    "<p><strong>Métodos iterativos.</strong> Da $i$-ésima equação isolamos $x_i$ e substituímos a aproximação anterior. O <strong>método de Jacobi</strong> usa apenas os valores do passo anterior;\n       o de <strong>Gauss–Seidel</strong> usa imediatamente as componentes já recalculadas:\n       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$\n       Os dois métodos convergem para qualquer início se a matriz é <strong>estritamente diagonal dominante</strong> ($|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$ para cada linha); o de Gauss–Seidel também para uma matriz simétrica\n       definida positiva. Um passo custa da ordem de tantas operações quantos elementos não nulos tem a matriz. Paramos quando $\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$ ou quando o resíduo $\\|b-Ax^{(k)}\\|$ é pequeno.</p>",
    "<p><strong>Método das potências.</strong> Suponha que a matriz $A$ tenha autovalores $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$ (o dominante $\\lambda_1$ é o único com o maior valor absoluto).\n       A multiplicação repetida $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$ amplifica a componente na direção do autovetor $v_1$, de modo que $x^{(k)}$ se aproxima de $\\pm v_1$ com rapidez $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$.\n       Estimamos o autovalor pelo <strong>quociente de Rayleigh</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$ ou pelo quociente das componentes correspondentes $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$.\n       O autovalor de menor valor absoluto é encontrado pelo <em>método das potências inverso</em> (o método das potências para $A^{-1}$; em cada passo resolve-se um sistema com a decomposição LU). Nesse princípio\n       baseia-se também a classificação de páginas PageRank.</p>"
   ],
   "examples": [
    {
     "task": "Encontre a decomposição LU da matriz $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$ e resolva $Ax=b$ para $b=(4;\\ 10;\\ 24)^{T}$.",
     "steps": [
      "1º passo: $l_{21}=\\frac{4}{2}=2$, $l_{31}=\\frac{8}{2}=4$; as linhas passam a ser $(0, 1, 1)$ e $(0, 3, 5)$.",
      "2º passo: $l_{32}=\\frac{3}{1}=3$; a terceira linha fica $(0, 0, 2)$. Assim, $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$, $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$.",
      "$Ly=b$: $y_1=4$, $y_2=10-2\\cdot 4=2$, $y_3=24-4\\cdot 4-3\\cdot 2=2$.",
      "$Ux=y$: $x_3=\\frac{2}{2}=1$, $x_2=2-1=1$, $x_1=\\frac{4-1-1}{2}=1$. Solução $x=(1;\\ 1;\\ 1)^{T}$; além disso, $\\det A=2\\cdot 1\\cdot 2=4$."
     ]
    },
    {
     "task": "Resolva o sistema $4x_1-x_2=7$, $x_1+3x_2=5$ (solução $x=(2;\\ 1)$) a partir do ponto $(0;\\ 0)$ com dois passos dos métodos de Jacobi e de Gauss–Seidel.",
     "steps": [
      "Fórmulas de iteração: $x_1=\\frac{7+x_2}{4}$, $x_2=\\frac{5-x_1}{3}$. A matriz é diagonal dominante ($4&gt;1$, $3&gt;1$); os dois métodos convergem.",
      "Jacobi: $x^{(1)}=(1{,}75;\\ 1{,}6667)$, $x^{(2)}=\\left(\\frac{7+1{,}6667}{4};\\ \\frac{5-1{,}75}{3}\\right)=(2{,}1667;\\ 1{,}0833)$.",
      "Gauss–Seidel: $x_1^{(1)}=1{,}75$, e logo $x_2^{(1)}=\\frac{5-1{,}75}{3}=1{,}0833$; $x_1^{(2)}=\\frac{7+1{,}0833}{4}=2{,}0208$, $x_2^{(2)}=\\frac{5-2{,}0208}{3}=0{,}9931$.",
      "Depois de dois passos, o método de Gauss–Seidel tem erro de cerca de $0{,}02$, e o de Jacobi, de cerca de $0{,}17$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Presná hodnota je ${@5}$.)": "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (O valor exato é ${@5}$.)",
  "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².": "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².",
  "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, teda asi ${@6}\\,\\%$.": "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Numa potência, o erro relativo é multiplicado pelo expoente: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, ou seja, cerca de ${@6}\\,\\%$.",
  "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.": "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Perto de $\\pi$, o seno é pequeno e o problema é mal condicionado.",
  "$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{{@0}}\\approx {@1}$.": "$f''(x)=e^{x}$ é crescente, portanto $M_2=e^{{@0}}\\approx {@1}$.",
  "$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Odčítanie blízkych čísel je zle podmienené.": "$f'(x)=1$, portanto $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. A subtração de números próximos é mal condicionada.",
  "$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Presne $\\sqrt{{@5}}\\approx {@6}$.)": "$f'(x)=2x$, portanto $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Exatamente, $\\sqrt{{@5}}\\approx {@6}$.)",
  "$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}": "$f'(x)=\\frac{1}{x}$, portanto $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Exatamente, $f'({@8})\\approx {@9}$; o erro é de cerca de ${@10}$.",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Exatamente, $f'({@8})\\approx {@9}$; o erro é de cerca de ${@10}$.",
  "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.": "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.",
  "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Presne $\\sqrt{{@6}}\\approx {@7}$.)": "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Exatamente, $\\sqrt{{@6}}\\approx {@7}$.)",
  "$f(x_0, y_0)={@0}$, prediktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.": "$f(x_0, y_0)={@0}$, preditor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.",
  "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Výsledný interval je $[{@5};\\ {@6}]$.": "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. O intervalo resultante é $[{@5};\\ {@6}]$.",
  "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.": "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.",
  "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Presná hodnota je ${@6}$, chyba asi ${@7}$.": "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. O valor exato é ${@6}$, o erro é de cerca de ${@7}$.",
  "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.": "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.",
  "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.": "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.",
  "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleighov podiel: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Presné dominantné vlastné číslo je $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.": "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Quociente de Rayleigh: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. O autovalor dominante exato é $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.",
  "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)": "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Calculamos em radianos e não arredondamos os resultados intermediários.)",
  "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.": "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.",
  "${@0}$, teda $M_2=1$.": "${@0}$, portanto $M_2=1$.",
  "${@0}\\approx {@1}$, absolútna chyba $\\Delta\\approx {@2}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, teda približne ${@7}\\,\\%$.": "${@0}\\approx {@1}$, erro absoluto $\\Delta\\approx {@2}$. Erro relativo $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, ou seja, aproximadamente ${@7}\\,\\%$.",
  "${@0}\\approx {@1}$, teda $\\Delta=|{@2}-{@3}|\\approx {@4}$.": "${@0}\\approx {@1}$, portanto $\\Delta=|{@2}-{@3}|\\approx {@4}$.",
  "(tu len $f_1$)": "(aqui só $f_1$)",
  ", ale ${@0}&gt;{@1}$": ", mas ${@0}&gt;{@1}$",
  "Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).": "O erro absoluto é $|x-\\tilde{x}|$. Use o valor da constante com algarismos suficientes (da calculadora).",
  "Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.": "Se o erro é aproximadamente $Ch^p$, reduzir o passo $k$ vezes reduz o erro $k^p$ vezes. As regras dos trapézios e do ponto médio têm $p=2$; a regra de Simpson, $p=4$.",
  "Aká je hranica absolútnej chyby obsahu? {@0}": "Qual é o limite do erro absoluto da área? {@0}",
  "Aká je relatívna chyba $x^{{@0}}$ v percentách? {@1}": "Qual é o erro relativo de $x^{{@0}}$ em porcentagem? {@1}",
  "Aká je relatívna chyba v percentách? {@0}": "Qual é o erro relativo em porcentagem? {@0}",
  "Aký interval dostaneš po druhom kroku?": "Que intervalo você obtém depois do segundo passo?",
  "Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)": "Que intervalo você obtém depois do primeiro passo? (separe as extremidades com ponto e vírgula)",
  "Aký je krok $h$?": "Qual é o passo $h$?",
  "Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?": "Qual é o multiplicador $l_{21}$ (o múltiplo da primeira equação que você subtrai da segunda)?",
  "Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?": "Qual é o multiplicador $l_{32}$ no segundo passo da eliminação?",
  "Aproximácia $\\tilde{x}={@0}$ má absolútnu chybu nanajvýš ${@1}$. Koľko má platných cifier?": "A aproximação $\\tilde{x}={@0}$ tem erro absoluto de no máximo ${@1}$. Quantos algarismos significativos exatos ela tem?",
  "Centrálna diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.": "Diferença centrada: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Calcule as funções trigonométricas em radianos.",
  "Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.": "O erro é proporcional a $h^{p}$, por isso diminui $k^{p}$ vezes, e não $k\\cdot p$ vezes.",
  "Chyba lineárnej interpolácie je $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; za $f''(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.": "O erro da interpolação linear é $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; no lugar de $f''(\\xi)$, use o máximo do valor absoluto da segunda derivada no intervalo.",
  "Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.": "O erro não é proporcional ao próprio $h$, mas a $h^{p}$, em que $p$ é a ordem de precisão do método.",
  "Chyba sa nezmenšuje úmerne kroku: metóda má rád {@0}, takže chyba je úmerná $h^{{@1}}$.": "O erro não diminui proporcionalmente ao passo: o método tem ordem {@0}, portanto o erro é proporcional a $h^{{@1}}$.",
  "Chyba {@0} je úmerná $h^{{@1}}$ (rád presnosti {@2}). Pri kroku $\\frac{h}{{@3}}$ sa zmenší ${@4}^{{@5}}={@6}$-krát.": "O erro {@0} é proporcional a $h^{{@1}}$ (ordem de precisão {@2}). Com o passo $\\frac{h}{{@3}}$, ele diminui ${@4}^{{@5}}={@6}$ vezes.",
  "Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.": "Os erros dos lados não se multiplicam. A estimativa linear é $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.",
  "Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, preto {@4}. Spolu s {@5} {@6} pred desatinnou čiarkou {@7}.": "O algarismo na posição $10^{-j}$ é exato se o erro não ultrapassa $\\frac{1}{2}\\cdot 10^{-j}$. Temos ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, portanto {@4}. Junto com {@5} {@6} antes da vírgula, {@7}.",
  "Derivácia $x^2 - a$ je $2x$, nie $x$.": "A derivada de $x^2 - a$ é $2x$, e não $x$.",
  "Dopredná diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.": "Diferença progressiva: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Calcule as funções trigonométricas em radianos.",
  "Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.": "Substitua $x_0$ em $g$ e o resultado novamente em $g$. Não arredonde os resultados intermediários.",
  "Dosaď do $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.": "Substitua em $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; a derivada de $x-c$ é 1.",
  "Dosaď do vzorca {@0} diferencie. {@1}": "Substitua na fórmula da diferença {@0}. {@1}",
  "Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.": "Passo de Euler: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, em que $x_k=kh$. Faça dois passos.",
  "Eulerova a Heunova metóda pre y' = y, y(0) = 1": "Métodos de Euler e de Heun para y' = y, y(0) = 1",
  "Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.": "O método de Euler tem ordem 1, o de Heun ordem 2, o RK4 ordem 4. O erro é aproximadamente $Ch^p$.",
  "Eulerovou metódou": "pelo método de Euler",
  "Funkciu $f(x)={@0}$ nahradíme na intervale $[{@1};\\ {@2}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x={@3}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}": "Substituímos a função $f(x)={@0}$ no intervalo $[{@1};\\ {@2}]$ por interpolação linear. Estime um limite superior para o erro de interpolação no ponto $x={@3}$ usando a fórmula $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}",
  "Gaussova eliminácia sústavy s ${@0}$ neznámymi trvá na istom počítači ${@1}$ s. Približne koľko sekúnd potrvá sústava s ${@2}$ neznámymi (plná matica)?": "A eliminação de Gauss de um sistema com ${@0}$ incógnitas leva ${@1}$ s num certo computador. Aproximadamente quantos segundos levará um sistema com ${@2}$ incógnitas (matriz cheia)?",
  "Gaussovou elimináciou vyrieš sústavu {@0}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.": "Resolva o sistema {@0} por eliminação de Gauss. Digite $x_1; x_2; x_3$ separados por ponto e vírgula.",
  "Gaussovou–Seidelovou": "Gauss–Seidel",
  "Heunovou metódou": "pelo método de Heun",
  "Hodnota $x={@0}\\pm {@1}$. Odhadni relatívnu chybu výrazu $x^{{@2}}$ v percentách. {@3}": "O valor é $x={@0}\\pm {@1}$. Estime o erro relativo da expressão $x^{{@2}}$ em porcentagem. {@3}",
  "Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.": "Procure o menor $n$ para o qual $2^n$ seja pelo menos desse tamanho.",
  "Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.": "Procure a menor ordem $10^{-k}$ para a qual o erro não ultrapassa $\\frac{1}{2}\\cdot 10^{-k}$.",
  "Interpolačný polynóm 2. stupňa prechádza bodmi {@0}. Vypočítaj jeho hodnotu v bode $x={@1}$. {@2}": "O polinômio interpolador de grau 2 passa pelos pontos {@0}. Calcule o seu valor no ponto $x={@1}$. {@2}",
  "Jacobiho": "Jacobi",
  "Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.": "A calculadora está em graus. Nos métodos numéricos, calculamos as funções trigonométricas em radianos.",
  "Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.": "A calculadora está em graus. Ao derivar funções trigonométricas, calculamos em radianos.",
  "Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.": "Cada passo da bissecção apenas divide o intervalo ao meio, por isso é preciso o logaritmo na base 2, e não na base 10.",
  "Koreň leží v intervale dĺžky ${@0}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš ${@1}$?": "A raiz está num intervalo de comprimento ${@0}$. Qual é o menor número de passos da bissecção necessários para que o intervalo resultante tenha comprimento de no máximo ${@1}$?",
  "Koľko desatinných miest je platných?": "Quantas casas decimais são exatas?",
  "Koľko najmenej krokov bisekcie treba?": "Qual é o menor número necessário de passos da bissecção?",
  "Koľko platných cifier má aproximácia celkovo?": "Quantos algarismos significativos exatos a aproximação tem ao todo?",
  "Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?": "Quantas vezes é preciso reduzir o intervalo, ou seja, quanto vale $\\frac{b-a}{\\varepsilon}$?",
  "Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.": "Na regra dos trapézios, os valores extremos $f_0$ e $f_n$ têm peso $\\frac{h}{2}$; os internos, $h$. Os pontos extremos contam só pela metade.",
  "Krok $h$ zmenšíme {@0}. Približne koľkokrát sa zmenší chyba {@1} (pre hladkú funkciu)?": "Reduzimos o passo $h$ {@0}. Aproximadamente quantas vezes diminui o erro {@1} (para uma função suave)?",
  "Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.": "Só o custo da substituição triangular cresce quadraticamente. A eliminação tem complexidade $O(n^3)$.",
  "Lagrangeove bázové polynómy v bode ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.": "Polinômios da base de Lagrange no ponto ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.",
  "Lichobežníková metóda pre funkciu na intervale od 0 do 4": "Regra dos trapézios para uma função no intervalo de 0 a 4",
  "Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.": "Regra dos trapézios: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.",
  "Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.": "Interpolação linear: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.",
  "Metóda má rád {@0}, globálna chyba je približne $Ch^{{@1}}$. Pri kroku $\\frac{h}{{@2}}$ sa zmenší ${@3}^{{@4}}={@5}$-krát: $\\frac{{@6}}{{@7}}={@8}$.": "O método tem ordem {@0}; o erro global é aproximadamente $Ch^{{@1}}$. Com o passo $\\frac{h}{{@2}}$, ele diminui ${@3}^{{@4}}={@5}$ vezes: $\\frac{{@6}}{{@7}}={@8}$.",
  "Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi {@0}. Urči {@1}. {@2}": "Pelo método dos mínimos quadrados, ajuste a reta $y=ax+b$ aos pontos {@0}. Determine {@1}. {@2}",
  "Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A={@0}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}": "Pelo método das potências, estimamos o autovalor dominante da matriz simétrica $A={@0}$. A partir de $x^{(0)}=(1;\\ 1)^{T}$, calcule $x^{(1)}=Ax^{(0)}$ e o quociente de Rayleigh $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}",
  "Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.": "O multiplicador $l_{32}$ é calculado a partir da matriz modificada após o primeiro passo da eliminação, e não a partir do elemento original $a_{32}$.",
  "Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.": "Multiplicador $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (da matriz atual, já modificada); da $i$-ésima linha, subtraia $l_{ik}$ vezes a $k$-ésima. A matriz triangular superior resultante é $U$.",
  "Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.": "O multiplicador é o quociente $l_{21} = \\frac{a_{21}}{a_{11}}$; o elemento deve ser dividido pelo pivô.",
  "Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.": "O multiplicador é o quociente $l_{31} = \\frac{a_{31}}{a_{11}}$; o elemento deve ser dividido pelo pivô.",
  "Multiplikátory: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; po prvom kroku má druhý riadok tvar $(0, {@6}, {@7})$ a tretí $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.": "Multiplicadores: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; após o primeiro passo, a segunda linha tem a forma $(0, {@6}, {@7})$ e a terceira $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.",
  "Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.": "Primeiro o preditor de Euler $\\tilde{y}_1=y_0+hf(x_0, y_0)$, depois $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.",
  "Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.": "Calcule primeiro as diferenças de primeira ordem $f[x_0, x_1]$ e $f[x_1, x_2]$, depois divida a diferença entre elas por $x_2-x_0$.",
  "Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; zlomok sa odčítava, nie pripočítava.": "O passo de Newton é $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; a fração é subtraída, e não somada.",
  "Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "O passo de Newton é $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Newtonova metóda: dotyčnice ku grafu y = x² − 2": "Método de Newton: tangentes ao gráfico de y = x² − 2",
  "Newtonovou metódou hľadáme $\\sqrt{{@0}}$ ako koreň funkcie $f(x)=x^2-{@1}$. Vypočítaj $x_1$ zo štartu $x_0={@2}$. {@3}": "Pelo método de Newton, procuramos $\\sqrt{{@0}}$ como raiz da função $f(x)=x^2-{@1}$. Calcule $x_1$ a partir de $x_0={@2}$. {@3}",
  "Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.": "Equações normais: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; delas, $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.",
  "Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A={@0}$ a urči {@1}.": "Encontre a decomposição LU (sem troca de linhas, $L$ tem uns na diagonal) da matriz $A={@0}$ e determine {@1}.",
  "Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.": "Encontre a menor ordem $10^{-k}$ para a qual ainda vale $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$ e conte os algarismos desde o primeiro não nulo até essa ordem.",
  "Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.": "Regra do ponto médio: $M_n=h\\sum f(\\text{ponto médio do subintervalo})$, $h=\\frac{b-a}{n}$.",
  "Odhadni deriváciu funkcie $f(x)={@0}$ v bode $x={@1}$ {@2} diferenciou s krokom $h={@3}$. {@4}": "Estime a derivada da função $f(x)={@0}$ no ponto $x={@1}$ pela diferença {@2} com passo $h={@3}$. {@4}",
  "Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.": "Vale $\\delta(x^n)\\approx|n|\\,\\delta x$, em que $\\delta x=\\frac{\\Delta x}{|x|}$.",
  "Po $n$ krokoch má interval dĺžku $\\frac{{@0}}{2^n}$. Treba $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, teda $n\\ge\\log_2 {@4}\\approx {@5}$. Najmenšie celé je $n={@6}$.": "Após $n$ passos, o intervalo tem comprimento $\\frac{{@0}}{2^n}$. É preciso $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, ou seja, $n\\ge\\log_2 {@4}\\approx {@5}$. O menor inteiro é $n={@6}$.",
  "Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.": "Você ficou com a metade errada. A raiz está na metade em cujas extremidades $f$ tem sinais opostos.",
  "Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.": "Use $P(x)=\\sum y_i\\ell_i(x)$ com $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$ ou a forma de Newton com diferenças divididas.",
  "Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.": "Use $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$; aqui $a-b=1$.",
  "Počet krokov": "Número de passos",
  "Počet krokov n": "Número de passos n",
  "Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil ${@0}$-krát, čas teda ${@1}^3={@2}$-krát: ${@3}\\cdot {@4}={@5}$ s.": "O número de operações é aproximadamente $\\frac{2}{3}n^3$; o tempo cresce com o cubo da dimensão. A dimensão aumentou ${@0}$ vezes, portanto o tempo ${@1}^3={@2}$ vezes: ${@3}\\cdot {@4}={@5}$ s.",
  "Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.": "Para $f(x)=\\ln x$, obtemos $\\kappa=\\frac{1}{|\\ln x|}$.",
  "Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.": "Para $f(x)=\\sin x$, $\\kappa=|x\\cot x|$. Calcule em radianos.",
  "Pre body {@0} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). {@1}": "Para os pontos {@0}, calcule a diferença dividida de segunda ordem $f[x_0, x_1, x_2]$ (o coeficiente de $(x-x_0)(x-x_1)$ na forma de Newton). {@1}",
  "Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.": "Para uma função de duas variáveis, $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; para $S=ab$, as derivadas parciais são $b$ e $a$.",
  "Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.": "No método de Gauss–Seidel, na segunda e na terceira equação já usamos os valores novos.",
  "Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.": "No método de Jacobi, substituímos em toda parte os valores iniciais.",
  "Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.": "No método de Jacobi, em todas as equações substituem-se apenas os valores do ponto inicial $x^{(0)}$, e não as componentes acabadas de calcular.",
  "Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.": "Na diferença centrada, a distância entre os pontos $x-h$ e $x+h$ é $2h$; a diferença dos valores deve ser dividida por $2h$, e não por $h$.",
  "Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.": "Na diferença de segunda ordem, divide-se pela diferença dos nós extremos $x_2 - x_0$, e não por $x_2 - x_1$.",
  "Priamy chod s multiplikátormi $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá hornú trojuholníkovú maticu $U={@3}$ a pravú stranu $y=({@4})^{T}$. Spätný chod: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.": "A eliminação com os multiplicadores $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá a matriz triangular superior $U={@3}$ e o lado direito $y=({@4})^{T}$. Substituição regressiva: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.",
  "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.": "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.",
  "Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.": "Você calculou o quociente de Rayleigh com o vetor $x^{(0)}$. A tarefa pede o quociente para $x^{(1)}$, portanto ainda é preciso calcular $Ax^{(1)}$.",
  "Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.": "O erro relativo é $\\frac{|x-\\tilde{x}|}{|x|}$; para obtê-lo em porcentagem, multiplique por 100.",
  "Relatívna chyba vstupu sa teda zväčší asi {@0}-krát — úloha je zle podmienená.": "O erro relativo da entrada é, portanto, ampliado cerca de {@0} vezes — o problema é mal condicionado.",
  "Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.": "Resolva a inequação $\\frac{b-a}{2^n}\\le\\varepsilon$, ou seja, $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, e arredonde para cima.",
  "Riešenie istej úlohy {@0} s krokom $h$ má v koncovom bode globálnu chybu približne ${@1}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{{@2}}$? {@3}": "A solução de certo problema {@0} com passo $h$ tem, no ponto final, erro global de aproximadamente ${@1}$. Que erro podemos esperar com o passo $\\frac{h}{{@2}}$? {@3}",
  "Rovnica $x^2-{@0}=0$ má koreň v intervale $[{@1};\\ {@2}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).": "A equação $x^2-{@0}=0$ tem uma raiz no intervalo $[{@1};\\ {@2}]$. Faça dois passos do método da bissecção e escreva o intervalo resultante como um par de extremidades separadas por ponto e vírgula (por exemplo, 1,25; 1,5).",
  "Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)={@0}$ (rovnica ${@1}$) a štartom $x_0={@2}$. Vypočítaj $x_2$. {@3}": "Resolvemos a equação pelo método da iteração de ponto fixo $x_{k+1}=g(x_k)$ com $g(x)={@0}$ (equação ${@1}$) e ponto inicial $x_0={@2}$. Calcule $x_2$. {@3}",
  "Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.": "A diferença das diferenças de primeira ordem ainda deve ser dividida pela diferença dos nós extremos $x_2 - x_0$.",
  "Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = {@0}$, až potom násobiť $(x - x_0)$.": "A diferença dos valores $y_1 - y_0$ deve ser dividida pelo comprimento do passo $x_1 - x_0 = {@0}$, e só depois multiplicada por $(x - x_0)$.",
  "Rozšírime výraz súčtom odmocnín: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.": "Multiplicamos e dividimos a expressão pela soma das raízes: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.",
  "Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.": "A regra de Simpson tem ordem de precisão 4, e não 2 como a regra dos trapézios.",
  "Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.": "Regra de Simpson: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ par.",
  "Simpsonovej metódy": "da regra de Simpson",
  "Simpsonovou metódou": "pela regra de Simpson",
  "Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.": "As inclinações $k_2$ e $k_3$ têm peso duplo no RK4: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.",
  "Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.": "As inclinações são tomadas em média: multiplica-se por $\\frac{h}{2}$, e não por $h$.",
  "Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.": "No segundo passo, a inclinação deve ser recalculada no novo ponto $(x_1, y_1)$; não basta dar um passo de comprimento $2h$ com a inclinação do início.",
  "Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.": "Você contou só as casas decimais exatas. Os algarismos significativos incluem também os algarismos antes da vírgula.",
  "Spätným chodom urči najprv $x_3$.": "Pela substituição regressiva, determine primeiro $x_3$.",
  "Strany obdĺžnika sme namerali s presnosťou $\\pm {@0}$ cm: $a={@1}$ cm a $b={@2}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. {@3}": "Os lados de um retângulo foram medidos com precisão de $\\pm {@0}$ cm: $a={@1}$ cm e $b={@2}$ cm. Estime o limite do erro absoluto da área $S=ab$ (em cm²) pela aproximação linear. {@3}",
  "Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.": "A regra do ponto médio usa os valores nos pontos médios dos subintervalos, e não nas suas extremidades esquerdas.",
  "Stredy dielikov: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$": "Pontos médios dos subintervalos: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$",
  "Sústavu {@0} rieš {@1} metódou zo štartu $x^{(0)}={@2}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.": "Resolva o sistema {@0} pelo método de {@1} a partir de $x^{(0)}={@2}$. Calcule a primeira iteração $x^{(1)}$ e digite as suas três componentes separadas por ponto e vírgula, cada uma arredondada para 4 casas decimais.",
  "Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.": "O produto dos elementos diagonais dá o determinante só para uma matriz triangular. Multiplique a diagonal da matriz $U$, e não de $A$.",
  "Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.": "Este é um passo de Jacobi. No método de Gauss–Seidel, substitua imediatamente nas equações seguintes os novos valores $x_1^{(1)}, x_2^{(1)}$.",
  "Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).": "Esse é o erro absoluto. O relativo se obtém dividindo o erro absoluto por $|x|$ (e, em porcentagem, multiplicando ainda por 100).",
  "Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.": "Esse ainda é só $x_1$. Substitua o resultado em $g$ mais uma vez.",
  "Toto je až $y_1$. Urob ešte druhý krok.": "Esse ainda é só $y_1$. Faça também o segundo passo.",
  "Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.": "Esse é apenas o preditor de Euler $\\tilde{y}_1$. O método de Heun ainda o corrige com a média de duas inclinações.",
  "Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.": "Esse é só o numerador $(x^{(1)})^{T}Ax^{(1)}$. Divida-o ainda por $(x^{(1)})^{T}x^{(1)}$.",
  "Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.": "Essa é a regra dos trapézios. A regra de Simpson usa os pesos $1, 4, 2, 4, \\dots, 4, 1$ e multiplica por $\\frac{h}{3}$.",
  "Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.": "Essa é a interpolação linear só com os dois nós vizinhos. O polinômio de grau 2 usa os três pontos.",
  "Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.": "Essa é a estimativa $\\frac{M_2h^2}{8}$ para o pior ponto do intervalo. A tarefa pergunta por um ponto concreto $x$.",
  "Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.": "Essa é a média $\\bar{y}$. O coeficiente linear é $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, portanto é preciso subtrair também $a\\bar{x}$.",
  "Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "Esse é o elemento original $a_{22}$. Da segunda linha é preciso primeiro subtrair $l_{21}$ vezes a primeira.",
  "Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "Esse é o elemento original $a_{23}$. Da segunda linha é preciso primeiro subtrair $l_{21}$ vezes a primeira.",
  "Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.": "Esse é o elemento original $a_{33}$. A terceira linha deve ser modificada nos dois passos da eliminação.",
  "Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.": "Esse é o erro relativo (a razão entre o erro e o valor). O erro absoluto é a própria diferença $|x-\\tilde{x}|$.",
  "Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom ${@0}$.": "Esse é o erro relativo do próprio $x$. Numa potência, o erro relativo é multiplicado pelo expoente ${@0}$.",
  "Urob jeden krok Newtonovej metódy pre rovnicu $x^3{@0}-{@1}=0$ so štartom $x_0={@2}$. {@3}": "Faça um passo do método de Newton para a equação $x^3{@0}-{@1}=0$ com ponto inicial $x_0={@2}$. {@3}",
  "Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h={@0}$ pre úlohu {@1}. {@2}": "Faça um passo do método de Runge–Kutta de 4ª ordem com passo $h={@0}$ para o problema {@1}. {@2}",
  "Urob jeden krok metódy sečníc pre $f(x)=x^2-{@0}$ s počiatočnými bodmi $x_0={@1}$ a $x_1={@2}$. {@3}": "Faça um passo do método das secantes para $f(x)=x^2-{@0}$ com os pontos iniciais $x_0={@1}$ e $x_1={@2}$. {@3}",
  "Urči $M_2 = \\max|f''|$ na intervale. {@0}": "Determine $M_2 = \\max|f''|$ no intervalo. {@0}",
  "Urči $u_{22}$.": "Determine $u_{22}$.",
  "Urči $u_{23}$.": "Determine $u_{23}$.",
  "Urči $u_{33}$.": "Determine $u_{33}$.",
  "Urči multiplikátor $l_{21}$.": "Determine o multiplicador $l_{21}$.",
  "Urči multiplikátor $l_{31}$.": "Determine o multiplicador $l_{31}$.",
  "Urči multiplikátor $l_{32}$.": "Determine o multiplicador $l_{32}$.",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x={@0}$ (v radiánoch). {@1}": "Determine o número de condição $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ do cálculo de $f(x)=\\sin x$ no ponto $x={@0}$ (em radianos). {@1}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-{@0}$ v bode $x={@1}$. {@2}": "Determine o número de condição $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ do cálculo de $f(x)=x-{@0}$ no ponto $x={@1}$. {@2}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x={@0}$. {@1}": "Determine o número de condição $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ do cálculo da função $f(x)=\\ln x$ no ponto $x={@0}$. {@1}",
  "V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.": "Em cada passo, calcule o valor no ponto médio do intervalo e fique com a metade em cujas extremidades a função tem sinais opostos.",
  "Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.": "Na fórmula há ainda uma divisão por dois: $\\frac{M_2}{2!}$.",
  "Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.": "Na fórmula das secantes, a correção $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ é subtraída de $x_1$.",
  "Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.": "Anule os elementos abaixo da diagonal na primeira e depois na segunda coluna; por fim, resolva a partir da última equação.",
  "Vypočítaj $Ax^{(1)}$.": "Calcule $Ax^{(1)}$.",
  "Vypočítaj $P_1({@0})$. {@1}": "Calcule $P_1({@0})$. {@1}",
  "Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.": "Calcule $\\det A = u_{11}u_{22}u_{33}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} s $n={@4}$ dielikmi. {@5}": "Calcule $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} com $n={@4}$ subintervalos. {@5}",
  "Vypočítaj $\\ell_{@0}({@1})$. {@2}": "Calcule $\\ell_{@0}({@1})$. {@2}",
  "Vypočítaj $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}": "Calcule $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}",
  "Vypočítaj $\\sqrt{{@0}}-\\sqrt{{@1}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). {@2}": "Calcule $\\sqrt{{@0}}-\\sqrt{{@1}}$ de forma numericamente estável (sem subtrair números próximos). {@2}",
  "Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).": "Calcule $\\sum x_i$ e $\\sum y_i$ (separados por ponto e vírgula).",
  "Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).": "Calcule $\\sum x_i^2$ e $\\sum x_iy_i$ (separados por ponto e vírgula).",
  "Vypočítaj $f$ v strede intervalu, teda $f({@0})$. {@1}": "Calcule $f$ no ponto médio do intervalo, ou seja, $f({@0})$. {@1}",
  "Vypočítaj $f'(x_0)$.": "Calcule $f'(x_0)$.",
  "Vypočítaj $f(x_0)$ a $f'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "Calcule $f(x_0)$ e $f'(x_0)$ e substitua em $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Vypočítaj $f(x_0)$.": "Calcule $f(x_0)$.",
  "Vypočítaj $f(x_0, y_0)$. {@0}": "Calcule $f(x_0, y_0)$. {@0}",
  "Vypočítaj $f(x_1)$.": "Calcule $f(x_1)$.",
  "Vypočítaj $f(x_1, \\tilde{y}_1)$. {@0}": "Calcule $f(x_1, \\tilde{y}_1)$. {@0}",
  "Vypočítaj $f(x_1, y_1)$. {@0}": "Calcule $f(x_1, y_1)$. {@0}",
  "Vypočítaj $f({@0})$. {@1}": "Calcule $f({@0})$. {@1}",
  "Vypočítaj $f[x_0, x_1, x_2]$. {@0}": "Calcule $f[x_0, x_1, x_2]$. {@0}",
  "Vypočítaj $f[x_0, x_1]$. {@0}": "Calcule $f[x_0, x_1]$. {@0}",
  "Vypočítaj $f[x_1, x_2]$. {@0}": "Calcule $f[x_1, x_2]$. {@0}",
  "Vypočítaj $k_{@0}$. {@1}": "Calcule $k_{@0}$. {@1}",
  "Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).": "Calcule $x^{(1)} = Ax^{(0)}$ (duas componentes separadas por ponto e vírgula).",
  "Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.": "Calcule $x^{(1)}=Ax^{(0)}$, depois $Ax^{(1)}$ e o quociente dos produtos escalares $x^{(1)}\\cdot Ax^{(1)}$ e $x^{(1)}\\cdot x^{(1)}$.",
  "Vypočítaj $x_1 = g(x_0)$. {@0}": "Calcule $x_1 = g(x_0)$. {@0}",
  "Vypočítaj $x_1$. {@0}": "Calcule $x_1$. {@0}",
  "Vypočítaj $x_2 = g(x_1)$. {@0}": "Calcule $x_2 = g(x_1)$. {@0}",
  "Vypočítaj $x_2$. {@0}": "Calcule $x_2$. {@0}",
  "Vypočítaj $x_{@0}^{(1)}$. {@1}": "Calcule $x_{@0}^{(1)}$. {@1}",
  "Vypočítaj $y_1$. {@0}": "Calcule $y_1$. {@0}",
  "Vypočítaj $y_2$. {@0}": "Calcule $y_2$. {@0}",
  "Vypočítaj $|(x-x_0)(x-x_1)|$. {@0}": "Calcule $|(x-x_0)(x-x_1)|$. {@0}",
  "Vypočítaj Rayleighov podiel. {@0}": "Calcule o quociente de Rayleigh. {@0}",
  "Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. {@0}": "Calcule o erro absoluto $|x-\\tilde{x}|$. {@0}",
  "Vypočítaj absolútny člen $b$. {@0}": "Calcule o coeficiente linear $b$. {@0}",
  "Vypočítaj menovateľ $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}": "Calcule o denominador $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}",
  "Vypočítaj odhad chyby. {@0}": "Calcule a estimativa do erro. {@0}",
  "Vypočítaj prediktor $\\tilde{y}_1$. {@0}": "Calcule o preditor $\\tilde{y}_1$. {@0}",
  "Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. {@0}": "Calcule a contribuição do erro do lado $a$, ou seja, $b\\,\\Delta a$. {@0}",
  "Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. {@0}": "Calcule a contribuição do erro do lado $b$, ou seja, $a\\,\\Delta b$. {@0}",
  "Vypočítaj relatívnu chybu $x$ v percentách. {@0}": "Calcule o erro relativo de $x$ em porcentagem. {@0}",
  "Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. {@0}": "Calcule a inclinação $\\frac{y_1-y_0}{x_1-x_0}$. {@0}",
  "Vypočítaj smernicu $a$. {@0}": "Calcule o coeficiente angular $a$. {@0}",
  "Vypočítaj súčet hodnôt funkcie v stredoch dielikov. {@0}": "Calcule a soma dos valores da função nos pontos médios dos subintervalos. {@0}",
  "Vypočítaj súčet hodnôt v nepárnych uzloch $f_1{@0}$ (váha 4). {@1}": "Calcule a soma dos valores nos nós ímpares $f_1{@0}$ (peso 4). {@1}",
  "Vypočítaj súčet vnútorných hodnôt {@0}. {@1}": "Calcule a soma dos valores internos {@0}. {@1}",
  "Vypočítaj výslednú hodnotu integrálu. {@0}": "Calcule o valor resultante da integral. {@0}",
  "Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.": "A fórmula $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ vale apenas para uma reta pela origem ($b = 0$). Use as duas equações normais.",
  "Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.": "Fórmula das secantes: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.",
  "Výsledok zaokrúhli na {@0} {@1}.": "Arredonde o resultado para {@0} {@1}.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.": "Da $i$-ésima equação, isole $x_i$ e substitua os valores das componentes de $x^{(0)}$.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.": "Da $i$-ésima equação, isole $x_i$ e substitua as componentes já recalculadas $x_1, \\dots, x_{i-1}$ e os valores antigos das demais.",
  "Z tabuľky poznáme ${@0}\\approx {@1}$ a ${@2}\\approx {@3}$. Lineárnou interpoláciou odhadni hodnotu funkcie ${@4}$ v bode $x={@5}$. {@6}": "De uma tabela conhecemos ${@0}\\approx {@1}$ e ${@2}\\approx {@3}$. Por interpolação linear, estime o valor da função ${@4}$ no ponto $x={@5}$. {@6}",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f'(x)}{f(x)}\\right|$.": "Você se esqueceu do fator $x$ no numerador: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, e não $\\left|\\frac{f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.": "Você se esqueceu do fator $x$ no numerador: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.": "Você se esqueceu do fator $x$: $\\kappa = |x\\cot x|$, e não $|\\cot x|$.",
  "Zadaj celé riešenie $x_1; x_2; x_3$.": "Digite a solução completa $x_1; x_2; x_3$.",
  "Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.": "Você trocou os pesos: na regra de Simpson, os nós ímpares $f_1, f_3, \\dots$ têm peso 4 e os nós internos pares, peso 2.",
  "Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.": "Você contou o erro de apenas um lado. A $b\\,\\Delta a$ some também $a\\,\\Delta b$.",
  "Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.": "A complexidade da eliminação de Gauss é $O(n^3)$; mais precisamente, cerca de $\\frac{2}{3}n^3$ operações.",
  "absolútny člen $b$": "o coeficiente linear $b$",
  "centrálnej": "centrada",
  "centrálnej diferencie": "da diferença centrada",
  "centrálnou": "centrada",
  "ciframi": "algarismos",
  "cifrou": "algarismo",
  "determinant $\\det A$ ako súčin diagonálnych prvkov $U$": "o determinante $\\det A$ como produto dos elementos diagonais de $U$",
  "doprednej": "progressiva",
  "doprednej diferencie": "da diferença progressiva",
  "doprednou": "progressiva",
  "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (chyba {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (chyba {@4})</span> · presne e² = {@5}": "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (erro {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (erro {@4})</span> · exatamente e² = {@5}",
  "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · presne I = {@2} · chyba {@3}": "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · exatamente I = {@2} · erro {@3}",
  "je platné 1 desatinné miesto": "1 casa decimal é exata",
  "je to <strong>1</strong> platná cifra": "isso dá <strong>1</strong> algarismo significativo",
  "je to <strong>{@0}</strong> platných cifier": "isso dá <strong>{@0}</strong> algarismos significativos",
  "lichobežníkovej metódy": "da regra dos trapézios",
  "lichobežníkovou metódou": "pela regra dos trapézios",
  "metódou RK4": "pelo método RK4",
  "na polovicu": "à metade",
  "nie je platné žiadne desatinné miesto": "nenhuma casa decimal é exata",
  "obdĺžnikovej (stredovej) metódy": "da regra do ponto médio (retângulo)",
  "obdĺžnikovou (stredovou) metódou": "pela regra do ponto médio (retângulo)",
  "prvok ${@0}$": "o elemento ${@0}$",
  "smernicu $a$": "o coeficiente angular $a$",
  "sú platné {@0} desatinné miesta": "{@0} casas decimais são exatas",
  "sú to <strong>{@0}</strong> platné cifry": "isso dá <strong>{@0}</strong> algarismos significativos",
  "uzly {@0}.": "nós {@0}.",
  "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Odhad chyby: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.": "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Estimativa do erro: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.",
  "{@0}-krát": "{@0} vezes",
  "{@0}.{@1}": "{@0}.{@1}",
  "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, chyba {@1}</span>": "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, erro {@1}</span>",
  "· <span class=\"c-ok\">chyba |x{@0} − √2| = {@1}</span>": "· <span class=\"c-ok\">erro |x{@0} − √2| = {@1}</span>",
  "· Simpson: n musí byť párne": "· Simpson: n deve ser par",
  "Úlohu {@0} rieš Eulerovou metódou s krokom $h={@1}$. Vypočítaj $y_2\\approx y({@2})$. {@3}": "Resolva o problema {@0} pelo método de Euler com passo $h={@1}$. Calcule $y_2\\approx y({@2})$. {@3}",
  "Úlohu {@0} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h={@1}$. Vypočítaj $y_1\\approx y({@2})$. {@3}": "Resolva o problema {@0} pelo método de Heun (Euler melhorado) com passo $h={@1}$. Calcule $y_1\\approx y({@2})$. {@3}",
  "Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.": "O tempo não cresce linearmente com o número de incógnitas: a eliminação precisa de cerca de $\\frac{2}{3}n^3$ operações.",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je absolútna chyba tejto aproximácie? {@2}": "Substituímos o número ${@0}$ pela aproximação ${@1}$. Qual é o erro absoluto dessa aproximação? {@2}",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je relatívna chyba v percentách? {@2}": "Substituímos o número ${@0}$ pela aproximação ${@1}$. Qual é o erro relativo em porcentagem? {@2}",
  "Štart x₀": "Início x₀"
 }
});
