/* Português: preklad js/rocniky/v3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/v3/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "v3-pojem": {
   "title": "Conceito de equação diferencial, problema de Cauchy, campo de direções",
   "summary": "Ordem da equação, solução geral e particular, problema de valor inicial, teorema de existência e unicidade, campo de direções.",
   "theory": [
    "<p>Uma <strong>equação diferencial ordinária (EDO)</strong> é uma equação $F(x, y, y', \\dots, y^{(n)}) = 0$ em que a incógnita é uma função\n       de uma variável $y = y(x)$ e na qual aparecem derivadas dessa função. A <strong>ordem</strong> da equação é a ordem da derivada mais alta\n       que de fato aparece nela: $y'' + (y')^{5} = x$ é uma equação de 2ª ordem; a potência $(y')^{5}$ não altera a ordem.\n       A equação é <strong>linear</strong> se é linear em relação a $y, y', \\dots, y^{(n)}$, ou seja, se tem a forma\n       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$.</p>\n       <p>Uma <strong>solução</strong> no intervalo $I$ é uma função que tem em $I$ derivadas até a ordem $n$ e que, substituída, satisfaz a equação para todo $x\\in I$.\n       A <strong>solução geral</strong> de uma equação de ordem $n$ é uma família de soluções $y = \\varphi(x, C_1, \\dots, C_n)$ com $n$ constantes independentes;\n       uma <strong>solução particular</strong> surge de uma escolha concreta das constantes. Uma solução que não se obtém da geral para nenhuma escolha das constantes\n       é chamada de <strong>singular</strong>.</p>",
    "<p><strong>Problema de Cauchy (problema de valor inicial)</strong> para uma equação de 1ª ordem: encontrar a solução da equação $y' = f(x, y)$ que satisfaz\n       a <strong>condição inicial</strong> $y(x_0) = y_0$. Para uma equação de ordem $n$ prescrevemos $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$.</p>\n       <p><strong>Teorema (Picard, Lindelöf).</strong> Se as funções $f$ e $\\frac{\\partial f}{\\partial y}$ são contínuas na vizinhança do ponto $[x_0; y_0]$, existe\n       um intervalo em torno de $x_0$ no qual o problema de Cauchy tem <strong>exatamente uma</strong> solução. Sem as hipóteses, a unicidade pode falhar:\n       o problema $y' = 3y^{2/3}$, $y(0) = 0$ é resolvido tanto por $y = 0$ quanto por $y = x^{3}$ (aqui $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$ não está definida no ponto $y = 0$).</p>",
    "<p><strong>Campo de direções.</strong> A equação $y' = f(x, y)$ prescreve, em cada ponto $[x; y]$, o coeficiente angular da tangente à solução que passa por ele.\n       Se desenharmos nos pontos do plano pequenos segmentos com coeficiente angular $f(x, y)$, obteremos o campo de direções. O gráfico de uma solução (<strong>curva integral</strong>)\n       é tangente ao campo em cada um de seus pontos. As curvas $f(x, y) = k$, sobre as quais todos os segmentos têm o mesmo coeficiente angular $k$, são chamadas de <strong>isóclinas</strong>.</p>",
    {
     "fig": "v3-smerove-pole",
     "caption": "Campo de direções da equação $y' = x - y$. A reta tracejada $y = x$ é a isóclina de coeficiente angular $0$; a reta verde $y = x - 1$ é a isóclina de coeficiente angular $1$ e, ao mesmo tempo, uma solução. Mova o valor inicial $y(0)$: todas as soluções se aproximam da reta $y = x - 1$ quando $x\\to\\infty$."
    }
   ],
   "examples": [
    {
     "task": "Verifique que $y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$ é solução da equação $y'' - y' - 2y = 0$ para quaisquer $C_1, C_2$. Qual é a ordem da equação?",
     "steps": [
      "A equação contém a segunda derivada e nenhuma mais alta, portanto é de <strong>2ª ordem</strong>.",
      "Derivamos: $y' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$, $y'' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$.",
      "Substituímos: $(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$.",
      "A igualdade vale para todo $x$ e para quaisquer $C_1, C_2$. A função contém duas constantes independentes; trata-se da <strong>solução geral</strong>."
     ]
    },
    {
     "task": "Mostre que $y = C\\mathrm{e}^{-x} + x - 1$ é a solução geral da equação $y' = x - y$ e encontre a solução do problema de Cauchy com a condição $y(0) = 2$.",
     "steps": [
      "$y' = -C\\mathrm{e}^{-x} + 1$ e $x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$. Os dois lados são iguais.",
      "Da condição: $y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$, logo $C = 3$.",
      "<strong>Solução particular: $y = 3\\mathrm{e}^{-x} + x - 1$.</strong> É a curva da figura para $y(0) = 2$."
     ]
    }
   ]
  },
  "v3-separovatelne": {
   "title": "Equações de variáveis separáveis",
   "summary": "A equação $y' = g(x)\\,h(y)$: separação de variáveis, soluções estacionárias, equações do tipo $y' = f(ax + by + c)$.",
   "theory": [
    "<p>Uma equação de <strong>variáveis separáveis</strong> tem a forma $y' = g(x)\\,h(y)$, em que $g$ é contínua no intervalo $I$\n       e $h$ é contínua no intervalo $J$. De modo equivalente, pode ser escrita na forma diferencial $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$.</p>\n       <p><strong>Procedimento:</strong></p>\n       <ol><li>Encontramos os zeros da função $h$. Se $h(c) = 0$, a constante $y = c$ é uma solução, a chamada <strong>solução estacionária</strong>.</li>\n       <li>Para $h(y)\\neq 0$ separamos as variáveis: $\\frac{dy}{h(y)} = g(x)\\,dx$.</li>\n       <li>Integramos: $\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$. Obtemos a solução na forma implícita, que, se possível, escrevemos de forma explícita.</li>\n       <li>Determinamos a constante $C$ pela condição inicial e verificamos em que intervalo a solução existe.</li></ol>",
    "<p><strong>Cuidado com a perda de soluções.</strong> Ao dividir por $h(y)$ podemos perder as soluções estacionárias, por isso é preciso listá-las à parte\n       (às vezes elas estão contidas na solução geral para $C = 0$; por exemplo, em $y' = ky$, $y = C\\mathrm{e}^{kx}$ dá também $y = 0$).\n       A solução de uma equação não linear pode não existir em todo o $\\mathbb{R}$, mesmo que o lado direito seja bem-comportado: a solução do problema $y' = y^{2}$, $y(0) = 1$\n       é $y = \\frac{1}{1 - x}$ e existe apenas no intervalo $(-\\infty; 1)$.</p>\n       <p><strong>Equações do tipo $y' = f(ax + by + c)$</strong> são transformadas, pela substituição $z = ax + by + c$, na equação separável $z' = a + b\\,f(z)$.</p>",
    {
     "fig": "v3-separovatelne",
     "caption": "A equação $y' = xy$ tem a solução geral $y = C\\mathrm{e}^{x^{2}/2}$. O eixo $x$ verde é a solução estacionária $y = 0$ (para $C = 0$); a curva azul é a solução com a condição $y(0) = 1$. As curvas integrais não se cruzam, como garante o teorema de unicidade."
    }
   ],
   "examples": [
    {
     "task": "Resolva o problema de Cauchy $y' = xy^{2}$, $y(0) = 1$, e determine o intervalo em que a solução existe.",
     "steps": [
      "A solução estacionária é $y = 0$, mas ela não satisfaz a condição $y(0) = 1$.",
      "Para $y\\neq 0$: $\\frac{dy}{y^{2}} = x\\,dx$; integrando, $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$.",
      "Da condição, $-1 = C$, logo $\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$ e $y = \\frac{2}{2 - x^{2}}$.",
      "<strong>A solução $y = \\frac{2}{2 - x^{2}}$ existe no intervalo $(-\\sqrt{2}; \\sqrt{2})$</strong>, que contém o ponto $x_0 = 0$; nos pontos $\\pm\\sqrt{2}$ o gráfico tem assíntotas verticais."
     ]
    },
    {
     "task": "Resolva o problema de Cauchy $y' = \\mathrm{e}^{x - y}$, $y(0) = \\ln 2$.",
     "steps": [
      "O lado direito é um produto: $y' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$. Separamos as variáveis: $\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$.",
      "Integramos: $\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$. Da condição, $2 = 1 + C$, logo $C = 1$.",
      "<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>; a solução existe em todo o $\\mathbb{R}$."
     ]
    }
   ]
  },
  "v3-homogenne": {
   "title": "Equações diferenciais homogêneas",
   "summary": "Equações $y' = \\varphi\\left(\\frac{y}{x}\\right)$, a substituição $y = ux$ e equações redutíveis a homogêneas.",
   "theory": [
    "<p>Uma função $f(x, y)$ é <strong>homogênea de grau $k$</strong> se $f(tx, ty) = t^{k}f(x, y)$ para todo $t \\gt 0$. A equação $y' = f(x, y)$ é chamada\n       <strong>homogênea</strong> se $f$ é homogênea de grau $0$; então $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$, ou seja, a equação tem a forma\n       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$\n       A equação $M(x, y)\\,dx + N(x, y)\\,dy = 0$ é homogênea se $M$ e $N$ são funções homogêneas do mesmo grau\n       (por exemplo, $\\frac{x^{2} + y^{2}}{xy}$: o numerador e o denominador têm grau $2$).</p>",
    "<p><strong>Substituição $y = ux$</strong>, em que $u = u(x)$ é a nova função incógnita. Então $y' = u + xu'$ e a equação se transforma em\n       $$xu' = \\varphi(u) - u,$$\n       que é uma equação de variáveis separáveis: $\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$. Se $\\varphi(u_0) = u_0$, a reta $y = u_0x$\n       é uma solução. Depois de integrar, substituímos de volta $u = \\frac{y}{x}$.</p>\n       <p><strong>Equações redutíveis a homogêneas</strong>: $y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$ com determinante não nulo\n       $a_1b_2 - a_2b_1$. Com a translação $x = X + x_0$, $y = Y + y_0$, em que $[x_0; y_0]$ é o ponto de interseção das retas $a_ix + b_iy + c_i = 0$, os termos independentes desaparecem.</p>",
    {
     "fig": "v3-homogenne",
     "caption": "Em uma equação homogênea, o campo de direções tem a mesma direção ao longo de cada reta $y = ux$ que passa pela origem (linhas tracejadas). A equação $y' = \\frac{x + y}{x - y}$ tem, em coordenadas polares, as soluções $r = C\\mathrm{e}^{\\varphi}$, ou seja, espirais logarítmicas."
    }
   ],
   "examples": [
    {
     "task": "Encontre a solução geral da equação $y' = \\dfrac{x^{2} + y^{2}}{xy}$ para $x \\gt 0$.",
     "steps": [
      "O numerador e o denominador são homogêneos de grau $2$. Dividindo por $x^{2}$: $y' = \\frac{1 + u^{2}}{u}$, em que $u = \\frac{y}{x}$.",
      "Substituímos $y' = u + xu'$: $u + xu' = \\frac{1}{u} + u$, logo $xu' = \\frac{1}{u}$.",
      "Separamos as variáveis: $u\\,du = \\frac{dx}{x}$; integrando, $\\frac{u^{2}}{2} = \\ln x + C$.",
      "<strong>Solução: $y^{2} = x^{2}(2\\ln x + C_1)$</strong>, em que $C_1 = 2C$."
     ]
    },
    {
     "task": "Resolva o problema de Cauchy $y' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$, $y(1) = 0$.",
     "steps": [
      "Substituição $y = ux$: $u + xu' = u + \\mathrm{e}^{-u}$, logo $xu' = \\mathrm{e}^{-u}$.",
      "Separamos as variáveis: $\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$, de modo que $\\mathrm{e}^{u} = \\ln x + C$.",
      "Da condição $u(1) = 0$: $1 = 0 + C$, logo $C = 1$ e $u = \\ln(1 + \\ln x)$.",
      "<strong>$y = x\\ln(1 + \\ln x)$</strong> para $x \\gt \\mathrm{e}^{-1}$."
     ]
    }
   ]
  },
  "v3-linearne": {
   "title": "Equações lineares de 1ª ordem e equação de Bernoulli",
   "summary": "Fator integrante, variação da constante, estrutura da solução $y = y_h + y_p$ e a substituição $z = y^{1-n}$.",
   "theory": [
    "<p>Uma <strong>equação linear de 1ª ordem</strong> tem a forma $y' + p(x)\\,y = q(x)$, em que $p, q$ são contínuas no intervalo $I$. Se $q = 0$, a equação é\n       <strong>homogênea</strong> (no sentido das equações lineares) e é separável: $y_h = C\\mathrm{e}^{-P(x)}$, em que $P$ é uma primitiva qualquer de $p$.\n       A solução geral da equação não homogênea é $y = y_h + y_p$, a soma da solução geral da equação homogênea e de uma solução (particular)\n       da equação não homogênea. O problema de Cauchy tem exatamente uma solução em todo o $I$.</p>",
    "<p><strong>Fator integrante.</strong> Multiplicamos a equação por $\\mu(x) = \\mathrm{e}^{P(x)}$. O lado esquerdo passa a ser a derivada de um produto:\n       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$\n       A <strong>variação da constante</strong> leva ao mesmo resultado: procuramos a solução na forma $y = C(x)\\,\\mathrm{e}^{-P(x)}$; após a substituição,\n       os termos com $C(x)$ se cancelam e resta $C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$.</p>",
    "<p><strong>Equação de Bernoulli</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$, $n\\neq 0, 1$. Dividimos por $y^{n}$ e introduzimos $z = y^{1-n}$,\n       de modo que $z' = (1-n)\\,y^{-n}y'$. Obtemos a equação linear\n       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$\n       Para $n \\gt 0$, também $y = 0$ é solução, e ela se perde na divisão. Por exemplo, a equação logística $y' = ry - \\frac{r}{K}y^{2}$ é uma equação de Bernoulli com $n = 2$.</p>"
   ],
   "examples": [
    {
     "task": "Resolva o problema de Cauchy $y' + 2y = 4x$, $y(0) = 1$.",
     "steps": [
      "$p = 2$, fator integrante $\\mu = \\mathrm{e}^{2x}$. A equação se transforma em $(y\\mathrm{e}^{2x})' = 4x\\mathrm{e}^{2x}$.",
      "Por partes: $\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$, logo $y = 2x - 1 + C\\mathrm{e}^{-2x}$.",
      "Da condição: $-1 + C = 1$, $C = 2$.",
      "<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$.</strong> Verificação: $y' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$."
     ]
    },
    {
     "task": "Encontre a solução geral da equação de Bernoulli $y' + \\dfrac{y}{x} = xy^{2}$ para $x \\gt 0$.",
     "steps": [
      "$n = 2$, por isso $z = y^{-1}$ e $z' = -y^{-2}y'$. Dividindo a equação por $y^{2}$: $y^{-2}y' + \\frac{1}{x}y^{-1} = x$, ou seja, $-z' + \\frac{z}{x} = x$.",
      "A equação linear $z' - \\frac{z}{x} = -x$ tem fator integrante $\\mu = \\frac{1}{x}$: $\\left(\\frac{z}{x}\\right)' = -1$, de modo que $z = Cx - x^{2}$.",
      "<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong> e, além disso, a solução estacionária $y = 0$."
     ]
    }
   ]
  },
  "v3-exaktne": {
   "title": "Equações exatas e fator integrante",
   "summary": "A equação $M\\,dx + N\\,dy = 0$ com $M_y = N_x$, a função potencial $F(x, y)$ e o fator integrante dependente de uma só variável.",
   "theory": [
    "<p>A equação $M(x, y)\\,dx + N(x, y)\\,dy = 0$ é <strong>exata</strong> na região $D$ se existe uma função $F(x, y)$ (função potencial) tal que\n       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$\n       ou seja, o lado esquerdo é o diferencial total $dF$. Ao longo de cada solução temos então $dF = 0$, de modo que a <strong>integral geral</strong> é $F(x, y) = C$:\n       as curvas integrais são as curvas de nível da função $F$.</p>\n       <p><strong>Critério.</strong> Se $M, N$ são continuamente diferenciáveis em uma região simplesmente conexa, a equação é exata se e somente se\n       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>",
    "<p><strong>Cálculo de $F$.</strong> Integramos $M$ em relação a $x$ (considerando $y$ constante): $F = \\int M\\,dx + \\varphi(y)$.\n       Determinamos a função desconhecida $\\varphi$ pela condição $\\frac{\\partial F}{\\partial y} = N$, que dá $\\varphi'(y)$ dependente apenas de $y$.\n       Igualmente bem podemos começar integrando $N$ em relação a $y$.</p>\n       <p><strong>Fator integrante.</strong> Se a equação não é exata, procuramos uma função $\\mu \\neq 0$ tal que $\\mu M\\,dx + \\mu N\\,dy = 0$ seja exata,\n       ou seja, $(\\mu M)_y = (\\mu N)_x$. Em dois casos simples:</p>\n       <ul><li>se $\\dfrac{M_y - N_x}{N} = \\omega(x)$ depende apenas de $x$, então $\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$;</li>\n       <li>se $\\dfrac{N_x - M_y}{M} = \\omega(y)$ depende apenas de $y$, então $\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$.</li></ul>\n       <p>Por exemplo, a equação linear $y' + p(x)y = q(x)$, escrita como $(p y - q)\\,dx + dy = 0$, tem $\\omega = p(x)$ e o conhecido fator $\\mu = \\mathrm{e}^{\\int p\\,dx}$.</p>",
    {
     "fig": "v3-exaktne",
     "caption": "A equação $(2x - y)\\,dx + (2y - x)\\,dy = 0$ é exata, com $F(x, y) = x^{2} - xy + y^{2}$. As curvas integrais são as elipses $F = C$; a curva que passa pelo ponto $[1; 2]$ corresponde a $C = 3$."
    }
   ],
   "examples": [
    {
     "task": "Resolva a equação $(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$ e encontre a curva integral que passa pelo ponto $[1; 1]$.",
     "steps": [
      "$M_y = 2x$ e $N_x = 2x$; a equação é exata.",
      "$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$.",
      "$F_y = x^{2} + \\varphi'(y) = x^{2} + 2y$, logo $\\varphi'(y) = 2y$ e $\\varphi(y) = y^{2}$.",
      "Integral geral: $x^{2}y + x^{3} + y^{2} = C$. O ponto $[1; 1]$ dá $C = 3$.",
      "<strong>$x^{2}y + x^{3} + y^{2} = 3$.</strong>"
     ]
    },
    {
     "task": "Encontre um fator integrante da equação $(y + x^{2})\\,dx - x\\,dy = 0$ ($x \\gt 0$) e resolva a equação.",
     "steps": [
      "$M_y = 1$, $N_x = -1$; a equação não é exata. $\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$ depende apenas de $x$.",
      "$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$. Nova equação: $\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$, em que $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$.",
      "$F = -\\frac{y}{x} + x$ (verifique $F_x$ e $F_y$); integral geral $x - \\frac{y}{x} = C$.",
      "<strong>$y = x^{2} - Cx$.</strong>"
     ]
    }
   ]
  },
  "v3-aplikacie": {
   "title": "Aplicações das equações de 1ª ordem",
   "summary": "Crescimento populacional e decaimento radioativo, lei de resfriamento de Newton, equação logística, circuito RC e mistura de soluções.",
   "theory": [
    "<p><strong>Crescimento e decaimento exponencial.</strong> Se a taxa de variação de uma grandeza é proporcional ao seu valor instantâneo, vale $y' = ky$, ou seja,\n       $y(t) = y_0\\mathrm{e}^{kt}$. Para $k \\gt 0$ trata-se de crescimento (população, juros compostos capitalizados continuamente), e o tempo de duplicação é $\\frac{\\ln 2}{k}$.\n       Para $k \\lt 0$ trata-se de decaimento; um isótopo radioativo com <strong>meia-vida</strong> $T$ tem $k = -\\frac{\\ln 2}{T}$ e, portanto, $m(t) = m_0\\cdot 2^{-t/T}$.</p>\n       <p><strong>Lei de resfriamento de Newton.</strong> A temperatura de um corpo em um ambiente de temperatura constante $T_o$ varia a uma taxa proporcional à diferença de temperaturas:\n       $T' = -k(T - T_o)$, $k \\gt 0$. A solução é $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; a constante $k$ costuma ser determinada a partir de mais uma medição.</p>",
    {
     "fig": "v3-rast",
     "caption": "A curva azul é a solução de $y' = ky$, $y(0) = 1$; a verde é a solução da equação logística com o mesmo $k$ e capacidade de suporte $K$ (linha tracejada). No início elas são quase idênticas, mas a curva logística se estabiliza no valor $K$."
    },
    "<p>A <strong>equação logística</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$ descreve o crescimento com recursos limitados; $K$ é a capacidade de suporte do meio.\n       Ela é separável (e também de Bernoulli), e a sua solução é\n       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$\n       As soluções estacionárias são $P = 0$ (instável) e $P = K$ (estável). A população cresce mais rapidamente quando $P = \\frac{K}{2}$, o que ocorre no instante $t = \\frac{\\ln A}{r}$.</p>",
    "<p><strong>Circuito RC.</strong> Para a carga de um capacitor carregado por uma fonte de tensão $U$ através de um resistor $R$, vale $Rq' + \\frac{q}{C} = U$.\n       Com carga inicial nula, a tensão no capacitor é $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, em que $\\tau = RC$ é a <strong>constante de tempo</strong>\n       (no tempo $\\tau$ o capacitor se carrega até cerca de $63\\,\\%$ da tensão $U$).</p>\n       <p><strong>Mistura de soluções.</strong> Um tanque contém $V$ litros de solução; entram nele $q$ litros por minuto de uma solução de concentração $c$ e, com a mesma vazão,\n       sai a solução perfeitamente misturada. Para a quantidade de substância $x(t)$ vale o balanço “entrada menos saída”:\n       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>"
   ],
   "examples": [
    {
     "task": "Um café a $90\\,{}^\\circ\\mathrm{C}$ está em uma sala a $20\\,{}^\\circ\\mathrm{C}$. Depois de $10$ minutos, está a $60\\,{}^\\circ\\mathrm{C}$. Quando ele esfriará até $40\\,{}^\\circ\\mathrm{C}$?",
     "steps": [
      "$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$. Da medição, $60 = 20 + 70\\,\\mathrm{e}^{-10k}$, logo $\\mathrm{e}^{-10k} = \\frac{4}{7}$ e $k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0{,}0560$.",
      "A condição $40 = 20 + 70\\,\\mathrm{e}^{-kt}$ dá $\\mathrm{e}^{-kt} = \\frac{2}{7}$, logo $t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3{,}5}{\\ln 1{,}75}$.",
      "<strong>$t \\approx 22{,}4$ minutos.</strong>"
     ]
    },
    {
     "task": "Um tanque contém $100$ litros de água com $5\\,\\mathrm{kg}$ de sal dissolvidos. Entram nele $4$ litros por minuto de uma solução de concentração $0{,}2\\,\\mathrm{kg/l}$ e, com a mesma vazão, sai a solução misturada. Quanto sal há no tanque após $25$ minutos?",
     "steps": [
      "Balanço: $x' = 0{,}2\\cdot 4 - \\frac{4}{100}x = 0{,}8 - 0{,}04x$, $x(0) = 5$.",
      "Equação linear com coeficientes constantes: o valor de equilíbrio é $x = 20$, por isso $x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0{,}04t} = 20 - 15\\,\\mathrm{e}^{-0{,}04t}$.",
      "<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14{,}48\\,\\mathrm{kg}$.</strong> Para $t\\to\\infty$, a quantidade se aproxima de $20\\,\\mathrm{kg}$."
     ]
    }
   ]
  },
  "v3-charakteristicka": {
   "title": "Equações lineares de 2ª ordem com coeficientes constantes",
   "summary": "Sistema fundamental, wronskiano, equação característica e os três tipos de raízes.",
   "theory": [
    "<p>A <strong>equação linear homogênea de 2ª ordem</strong> $y'' + a_1(x)y' + a_0(x)y = 0$, com coeficientes contínuos no intervalo $I$, tem as seguintes propriedades:</p>\n       <ul><li><strong>Princípio da superposição:</strong> toda combinação linear de soluções é de novo uma solução; as soluções formam um espaço vetorial de dimensão $2$.</li>\n       <li>Um <strong>sistema fundamental</strong> é um par de soluções linearmente independentes $y_1, y_2$; a solução geral é $y = C_1y_1 + C_2y_2$.</li>\n       <li><strong>Wronskiano</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$. As soluções $y_1, y_2$ são linearmente independentes se e somente se\n       $W(x)\\neq 0$ (basta em um ponto). Vale a <strong>fórmula de Liouville</strong> $W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$.</li></ul>",
    "<p><strong>Coeficientes constantes.</strong> Para $y'' + py' + qy = 0$ tentamos $y = \\mathrm{e}^{\\lambda x}$. Substituindo e dividindo por $\\mathrm{e}^{\\lambda x}$ obtemos\n       a <strong>equação característica</strong> $\\lambda^{2} + p\\lambda + q = 0$. Conforme as suas raízes:</p>\n       <table class=\"tbl\"><tr><th>raízes</th><th>sistema fundamental</th><th>solução geral</th></tr>\n       <tr><td>$\\lambda_1\\neq\\lambda_2$ reais</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>\n       <tr><td>$\\lambda$ dupla</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>\n       <p>Para raízes complexas, tomamos a parte real e a parte imaginária da solução complexa $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$.\n       O mesmo procedimento funciona para equações de ordem superior: a uma raiz $\\lambda$ de multiplicidade $k$ correspondem as funções $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$.</p>",
    {
     "fig": "v3-rad2",
     "caption": "Solução da equação $y'' + py' + qy = 0$ com as condições iniciais $y(0) = 1$, $y'(0) = 0$. Com raízes complexas, a solução oscila; com raízes reais, não; o sinal da parte real das raízes decide se a solução é amortecida ou cresce."
    }
   ],
   "examples": [
    {
     "task": "Resolva o problema de Cauchy $y'' - y' - 6y = 0$, $y(0) = 1$, $y'(0) = 8$.",
     "steps": [
      "A equação característica $\\lambda^{2} - \\lambda - 6 = 0$ tem as raízes $\\lambda_1 = 3$, $\\lambda_2 = -2$.",
      "Solução geral $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$, derivada $y' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$.",
      "Condições: $C_1 + C_2 = 1$, $3C_1 - 2C_2 = 8$, de onde $C_1 = 2$, $C_2 = -1$.",
      "<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$.</strong>"
     ]
    },
    {
     "task": "Encontre um sistema fundamental da equação $y'' + 4y' + 13y = 0$ e calcule o seu wronskiano.",
     "steps": [
      "$\\lambda^{2} + 4\\lambda + 13 = 0$, $D = 16 - 52 = -36$, raízes $\\lambda = -2\\pm 3\\mathrm{i}$.",
      "Sistema fundamental: $y_1 = \\mathrm{e}^{-2x}\\cos 3x$, $y_2 = \\mathrm{e}^{-2x}\\sin 3x$.",
      "$W = y_1y_2' - y_1'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.",
      "<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>, de acordo com a fórmula de Liouville $W(x) = W(0)\\,\\mathrm{e}^{-4x}$."
     ]
    }
   ]
  },
  "v3-nehomogenne": {
   "title": "Equações não homogêneas de 2ª ordem",
   "summary": "Estrutura da solução $y = y_h + y_p$, método dos coeficientes a determinar para o lado direito especial e variação das constantes.",
   "theory": [
    "<p>A solução geral da equação $y'' + py' + qy = f(x)$ é $y = y_h + y_p$, em que $y_h = C_1y_1 + C_2y_2$ é a solução geral da equação homogênea associada\n       e $y_p$ é uma solução (particular) qualquer da equação não homogênea. Se $f = f_1 + f_2$, podemos procurar as soluções particulares para $f_1$ e $f_2$\n       separadamente e somá-las (<strong>princípio da superposição</strong>).</p>",
    "<p><strong>Método dos coeficientes a determinar</strong> (lado direito especial). Se $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$\n       com polinômios $P_m, Q_n$, procuramos a solução particular na forma\n       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$\n       em que $R_N, S_N$ são polinômios de grau $N$ com coeficientes desconhecidos e $k$ é a multiplicidade do número $\\alpha + \\beta\\mathrm{i}$ como raiz da equação característica\n       ($k = 0$ se não for raiz). Determinamos os coeficientes substituindo na equação e comparando.</p>\n       <table class=\"tbl\"><tr><th>lado direito $f(x)$</th><th>forma de $y_p$ (se não houver ressonância)</th></tr>\n       <tr><td>$ax + b$</td><td>$Ax + B$ (se $q\\neq 0$)</td></tr>\n       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>\n       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>\n       <p>Se $\\alpha + \\beta\\mathrm{i}$ é raiz da equação característica (<strong>ressonância</strong>), multiplicamos a forma por $x$; no caso de raiz dupla, por $x^{2}$.</p>",
    "<p>A <strong>variação das constantes</strong> funciona para qualquer lado direito contínuo. Procuramos a solução na forma $y = C_1(x)y_1 + C_2(x)y_2$ com a condição\n       $C_1'y_1 + C_2'y_2 = 0$. Substituindo, obtemos o sistema\n       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$\n       cuja solução é $C_1' = -\\frac{y_2 f}{W}$, $C_2' = \\frac{y_1 f}{W}$, em que $W$ é o wronskiano. Precisamos do método, por exemplo, para os lados direitos\n       $\\frac{1}{\\cos x}$, $\\mathrm{tg}\\,x$, $\\ln x$ ou $\\frac{\\mathrm{e}^{x}}{x}$.</p>"
   ],
   "examples": [
    {
     "task": "Encontre a solução geral da equação $y'' - 3y' + 2y = \\mathrm{e}^{x}$.",
     "steps": [
      "$\\lambda^{2} - 3\\lambda + 2 = 0$ tem as raízes $1$ e $2$, logo $y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$.",
      "O número $\\alpha = 1$ é raiz simples (ressonância), por isso $y_p = Ax\\mathrm{e}^{x}$. Então $y_p' = A(1 + x)\\mathrm{e}^{x}$, $y_p'' = A(2 + x)\\mathrm{e}^{x}$.",
      "Substituímos: $A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$, logo $A = -1$.",
      "<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$.</strong>"
     ]
    },
    {
     "task": "Pelo método da variação das constantes, resolva a equação $y'' + y = \\dfrac{1}{\\cos x}$ no intervalo $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$.",
     "steps": [
      "$y_1 = \\cos x$, $y_2 = \\sin x$, $W = \\cos^{2} x + \\sin^{2} x = 1$.",
      "$C_1' = -\\frac{\\sin x}{\\cos x}$, logo $C_1 = \\ln(\\cos x) + K_1$; $C_2' = \\frac{\\cos x}{\\cos x} = 1$, logo $C_2 = x + K_2$.",
      "<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$.</strong>"
     ]
    }
   ]
  },
  "v3-kmitanie": {
   "title": "Oscilações: livres, amortecidas e forçadas",
   "summary": "A equação $mx'' + cx' + kx = F(t)$, amortecimento subcrítico, crítico e supercrítico, oscilações forçadas e ressonância.",
   "theory": [
    "<p>Um corpo de massa $m$ preso a uma mola de constante elástica $k$, amortecido por uma força proporcional à velocidade (coeficiente $c$) e acionado por uma força externa $F(t)$, obedece à equação\n       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$\n       em que $\\omega_0 = \\sqrt{k/m}$ é a <strong>frequência angular natural</strong> e $\\delta = \\frac{c}{2m}$ é o <strong>coeficiente de amortecimento</strong>.\n       A mesma equação descreve a carga em um circuito $RLC$ em série: $Lq'' + Rq' + \\frac{1}{C}q = U(t)$.</p>\n       <p><strong>Oscilações livres não amortecidas</strong> ($c = 0$, $F = 0$): $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$, com amplitude\n       $A = \\sqrt{C_1^{2} + C_2^{2}}$ e período $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$.</p>",
    "<p><strong>Oscilações amortecidas</strong> ($F = 0$). A equação característica $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$ tem as raízes $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$:</p>\n       <ul><li>$\\delta \\lt \\omega_0$ (<strong>amortecimento subcrítico</strong>, $c^{2} \\lt 4mk$): $x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$,\n       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$; oscilações com amplitude exponencialmente decrescente;</li>\n       <li>$\\delta = \\omega_0$ (<strong>amortecimento crítico</strong>, $c = 2\\sqrt{mk}$): $x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$;</li>\n       <li>$\\delta \\gt \\omega_0$ (<strong>amortecimento supercrítico</strong>): soma de duas exponenciais decrescentes, movimento aperiódico.</li></ul>",
    {
     "fig": "v3-tlmenie",
     "caption": "Deslocamento $x(t)$ para $\\omega_0 = 2$, $x(0) = 1$, $x'(0) = 0$. As curvas tracejadas $\\pm\\mathrm{e}^{-\\delta t}$ limitam as oscilações amortecidas. Para $\\delta = 2$ ocorre o amortecimento crítico."
    },
    "<p><strong>Oscilações forçadas</strong>, $F(t) = F_0\\cos\\omega t$. Sem amortecimento e para $\\omega\\neq\\omega_0$, a solução particular é\n       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$. Para $\\omega = \\omega_0$ ocorre a <strong>ressonância</strong>: $x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$,\n       e a amplitude cresce sem limite. Com amortecimento, as oscilações livres se extinguem e resta o regime permanente, com amplitude\n       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}},$$\n       que é máxima para $\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$ (se $\\omega_0^{2} \\gt 2\\delta^{2}$).</p>",
    {
     "fig": "v3-rezonancia",
     "caption": "Curva de ressonância $A(\\omega)$ para $\\omega_0 = 2$ e $F_0/m = 1$. Com amortecimento pequeno, o máximo é agudo e fica perto da frequência natural (linha tracejada)."
    }
   ],
   "examples": [
    {
     "task": "Um corpo de massa $1\\,\\mathrm{kg}$ preso a uma mola de constante $16\\,\\mathrm{N/m}$ é amortecido com coeficiente $c = 4\\,\\mathrm{kg/s}$. No início, ele é deslocado $0{,}1\\,\\mathrm{m}$ e solto a partir do repouso. Encontre $x(t)$.",
     "steps": [
      "$x'' + 4x' + 16x = 0$, logo $\\delta = 2$, $\\omega_0 = 4$. Como $\\delta \\lt \\omega_0$, trata-se de amortecimento subcrítico.",
      "Raízes $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$, $\\omega_d = 2\\sqrt{3}$, $x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$.",
      "$x(0) = C_1 = 0{,}1$; $x'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$, logo $C_2 = \\frac{0{,}1}{\\sqrt{3}}$.",
      "<strong>$x(t) = 0{,}1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$.</strong>"
     ]
    },
    {
     "task": "Resolva o problema $x'' + 9x = 6\\cos 3t$, $x(0) = 0$, $x'(0) = 0$.",
     "steps": [
      "A frequência de excitação é igual à natural ($\\omega = \\omega_0 = 3$); ocorre ressonância: $x_p = t(A\\cos 3t + B\\sin 3t)$.",
      "Substituindo, resulta $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$, logo $A = 0$, $B = 1$, $x_p = t\\sin 3t$.",
      "Solução geral $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$; das condições, $C_1 = 0$ e $3C_2 = 0$.",
      "<strong>$x(t) = t\\sin 3t$</strong>; a amplitude cresce linearmente com o tempo."
     ]
    }
   ]
  },
  "v3-sustavy": {
   "title": "Sistemas de equações diferenciais lineares e retrato de fase",
   "summary": "O sistema $\\mathbf{x}' = A\\mathbf{x}$, solução por meio de autovalores e autovetores, classificação do ponto de equilíbrio.",
   "theory": [
    "<p>Um sistema de equações lineares de 1ª ordem com coeficientes constantes tem a forma $\\mathbf{x}' = A\\mathbf{x}$, em que $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$ e $A$ é\n       uma matriz quadrada. As soluções formam um espaço vetorial de dimensão $n$; a matriz cujas colunas são $n$ soluções linearmente independentes é chamada de\n       <strong>matriz fundamental</strong>. Toda equação de ordem $n$ pode ser escrita como um sistema (por exemplo, para $y'' + py' + qy = 0$ fazemos $x_1 = y$, $x_2 = y'$)\n       e, inversamente, um sistema $2\\times 2$ pode ser transformado, pelo <strong>método de eliminação</strong>, em uma única equação de 2ª ordem.</p>",
    "<p><strong>Método matricial.</strong> Procuramos a solução $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$. Substituindo, $A\\mathbf{v} = \\lambda\\mathbf{v}$: $\\lambda$ é um\n       <strong>autovalor</strong> da matriz $A$ (raiz da equação $\\det(A - \\lambda I) = 0$) e $\\mathbf{v}$ é o autovetor correspondente.</p>\n       <ul><li>$\\lambda_1, \\lambda_2$ reais distintos: $\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$.</li>\n       <li>$\\lambda = \\alpha\\pm\\beta\\mathrm{i}$ complexos com o vetor $\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$: as soluções reais são a parte real e a parte imaginária de\n       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$, ou seja, $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$ e $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$.</li>\n       <li>$\\lambda$ duplo com um único autovetor $\\mathbf{v}$: a segunda solução é $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$, em que $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$.</li></ul>",
    "<p>O <strong>retrato de fase</strong> de um sistema plano mostra as trajetórias $(x(t), y(t))$ no plano $xy$. O ponto $\\mathbf{0}$ é de equilíbrio (estacionário) e, para\n       $\\det A\\neq 0$, é o único. O seu tipo é determinado pelos autovalores ou, equivalentemente, pelo traço $\\mathrm{tr}\\,A$ e pelo determinante:</p>\n       <table class=\"tbl\"><tr><th>autovalores</th><th>tipo</th><th>estabilidade</th></tr>\n       <tr><td>reais, de sinais opostos ($\\det A \\lt 0$)</td><td>sela</td><td>instável</td></tr>\n       <tr><td>reais, de mesmo sinal</td><td>nó</td><td>estável para $\\lambda \\lt 0$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\alpha\\neq 0$</td><td>foco (espirais)</td><td>estável para $\\alpha \\lt 0$</td></tr>\n       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>centro (curvas fechadas)</td><td>estável, mas não assintoticamente</td></tr></table>",
    {
     "fig": "v3-fazovy",
     "caption": "Retrato de fase do sistema $x' = a_{11}x + a_{12}y$, $y' = a_{21}x + a_{22}y$. As retas laranja são as direções dos autovetores (para autovalores reais); os triângulos mostram o sentido do movimento quando $t$ cresce. Alterando os elementos da matriz, percorra todos os tipos da tabela."
    }
   ],
   "examples": [
    {
     "task": "Resolva o sistema $x' = x + 2y$, $y' = 2x + y$ com a condição inicial $x(0) = 3$, $y(0) = 1$.",
     "steps": [
      "$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$, logo $\\lambda_1 = 3$, $\\lambda_2 = -1$.",
      "Autovetores: para $\\lambda_1 = 3$, $\\mathbf{v}_1 = (1, 1)^{T}$; para $\\lambda_2 = -1$, $\\mathbf{v}_2 = (1, -1)^{T}$.",
      "$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$. Condições: $C_1 + C_2 = 3$, $C_1 - C_2 = 1$, logo $C_1 = 2$, $C_2 = 1$.",
      "<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$, $y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$.</strong> Os autovalores têm sinais opostos; o ponto de equilíbrio é uma sela."
     ]
    },
    {
     "task": "Determine o tipo do ponto de equilíbrio do sistema $x' = y$, $y' = -5x - 2y$ e compare-o com uma equação de 2ª ordem.",
     "steps": [
      "$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$, $\\mathrm{tr}\\,A = -2$, $\\det A = 5$, equação característica $\\lambda^{2} + 2\\lambda + 5 = 0$.",
      "Os autovalores $-1\\pm 2\\mathrm{i}$ têm parte real negativa: <strong>foco estável</strong>; as trajetórias se aproximam da origem em espirais.",
      "O sistema é uma forma de escrever a equação $x'' + 2x' + 5x = 0$ (oscilações amortecidas); a sua solução é $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$."
     ]
    }
   ]
  },
  "v3-laplace": {
   "title": "Transformada de Laplace",
   "summary": "Definição, tabela de transformadas, transformada da derivada, transformada inversa por frações parciais e resolução de problemas de valor inicial.",
   "theory": [
    "<p>A <strong>transformada de Laplace</strong> associa a uma função $f(t)$ definida para $t \\ge 0$ uma função da variável complexa (para nós, real) $s$:\n       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$\n       A integral converge para $s \\gt s_0$ se $f$ é contínua por partes e de <strong>ordem exponencial</strong>, ou seja, $|f(t)| \\le M\\mathrm{e}^{s_0t}$.\n       Por exemplo, $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$ para $s \\gt a$. A transformada é linear\n       e, para funções contínuas, injetora, de modo que para a transformada $F$ existe uma única função original $f = \\mathcal{L}^{-1}\\{F\\}$.</p>",
    "<table class=\"tbl\"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>\n       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>\n       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>\n       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>\n       <p>Aqui $u$ é a função de Heaviside (degrau unitário). A transformada da convolução $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$ é o produto $F(s)G(s)$.</p>",
    "<p><strong>Resolução de um problema de valor inicial.</strong> A regra da transformada da derivada converte uma equação linear com coeficientes constantes em uma equação algébrica para $Y(s)$,\n       na qual as condições iniciais são incorporadas automaticamente. Dela isolamos $Y(s)$ (em geral uma função racional), decompomos em\n       <strong>frações parciais</strong> e, com a tabela, encontramos $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$. O método é vantajoso sobretudo para lados direitos descontínuos ou impulsivos.</p>",
    {
     "fig": "v3-laplace",
     "caption": "Etapas da resolução: transformada, manipulação algébrica no domínio das transformadas e transformada inversa."
    }
   ],
   "examples": [
    {
     "task": "Encontre a transformada de Laplace da função $f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$.",
     "steps": [
      "Usamos a linearidade e a tabela: $\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$, $\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$, $\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$.",
      "<strong>$F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong> para $s \\gt 2$."
     ]
    },
    {
     "task": "Usando a transformada de Laplace, resolva o problema $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$.",
     "steps": [
      "Transformamos: $s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$, logo $(s^{2} + 3s + 2)Y = s + 3$.",
      "$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$ (frações parciais, por exemplo pelo método de cobertura de Heaviside).",
      "<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$.</strong> Verificação: $y(0) = 1$, $y'(0) = -2 + 2 = 0$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$A = {@0}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, kde $\\mathrm{tr}\\,A = {@2}$ a $\\det A = {@3}$. Korene sú $\\lambda_1 = {@4}$ a $\\lambda_2 = {@5}$.": "$A = {@0}$. Equação característica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, em que $\\mathrm{tr}\\,A = {@2}$ e $\\det A = {@3}$. As raízes são $\\lambda_1 = {@4}$ e $\\lambda_2 = {@5}$.",
  "$C_1 + C_2 = {@0}$ a ${@1} = {@2}$": "$C_1 + C_2 = {@0}$ e ${@1} = {@2}$",
  "$C_1 = {@0}$ a ${@1} = {@2}$": "$C_1 = {@0}$ e ${@1} = {@2}$",
  "$M_y = {@0}$, $N_x = {@1}$, teda $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ závisí len od $x$. Preto $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrola: $(\\mu M)_y = {@11}$ a $(\\mu N)_x = {@12}$.": "$M_y = {@0}$, $N_x = {@1}$, logo $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ depende apenas de $x$. Por isso $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Verificação: $(\\mu M)_y = {@11}$ e $(\\mu N)_x = {@12}$.",
  "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, teda asi ${@8}$ jedincov.": "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ com $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, ou seja, cerca de ${@8}$ indivíduos.",
  "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-{@4}t} = 1$, teda $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ roka.": "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. A condição $P = \\frac{K}{2}$ significa $A\\mathrm{e}^{-{@4}t} = 1$, logo $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ anos.",
  "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, z merania $k = {@2} \\approx {@3}$. Z podmienky ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ máme $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minúty.": "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$; pela medição, $k = {@2} \\approx {@3}$. Da condição ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$, temos $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minutos.",
  "$\\lambda = {@0}$ (dvojnásobný koreň)": "$\\lambda = {@0}$ (raiz dupla)",
  "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ a $\\mathcal{L}\\{y'\\} = sY{@2}$. Po dosadení $({@3})Y = {@4}{@5}{@6}$, teda ${@7}$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ e $\\mathcal{L}\\{y'\\} = sY{@2}$. Após a substituição, $({@3})Y = {@4}{@5}{@6}$, logo ${@7}$.",
  "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}": "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, discriminante da equação característica $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}",
  "$\\omega_0 = {@0}$, riešenie $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ s $C_1 = x(0) = {@3}$ a ${@4}C_2 = x'(0) = {@5}$, teda $C_2 = {@6}$. Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.": "$\\omega_0 = {@0}$, solução $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ com $C_1 = x(0) = {@3}$ e ${@4}C_2 = x'(0) = {@5}$, logo $C_2 = {@6}$. Amplitude $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.",
  "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ máme $\\mathrm{e}^{-t/\\tau} = {@2}$, teda $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.": "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Da condição $1 - \\mathrm{e}^{-t/\\tau} = {@1}$, temos $\\mathrm{e}^{-t/\\tau} = {@2}$, logo $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.",
  "$\\varphi'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú": "$\\varphi'(y) = 0$, logo $\\varphi$ é uma constante, que escolhemos nula",
  "$\\varphi'(y) = {@0}$, teda $\\varphi(y) = {@1}$": "$\\varphi'(y) = {@0}$, logo $\\varphi(y) = {@1}$",
  "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Z podmienky $2^{-t/{@1}} = {@2}$ logaritmovaním $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.": "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Da condição $2^{-t/{@1}} = {@2}$, aplicando logaritmos, $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.",
  "$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov: pri $x^{2}$: ${@0} = {@1}$, $A = {@2}$; pri $x$: ${@3} = {@4}$, $B = {@5}$; absolútny člen: ${@6} = {@7}$, $C = {@8}$.": "$y_p' = 2Ax + B$, $y_p'' = 2A$. Após substituir e comparar os coeficientes: de $x^{2}$: ${@0} = {@1}$, $A = {@2}$; de $x$: ${@3} = {@4}$, $B = {@5}$; termo constante: ${@6} = {@7}$, $C = {@8}$.",
  "$y_p' = A$, $y_p'' = 0$. Dosadíme: ${@0}{@1} = {@2}$. Porovnaním koeficientov: pri $x$ je ${@3} = {@4}$, teda $A = {@5}$; absolútny člen ${@6} = {@7}$, teda $B = {@8}$.": "$y_p' = A$, $y_p'' = 0$. Substituímos: ${@0}{@1} = {@2}$. Comparando os coeficientes: de $x$, ${@3} = {@4}$, logo $A = {@5}$; termo constante ${@6} = {@7}$, logo $B = {@8}$.",
  "${@0}$, teda $K = {@1}$ a $m = {@2}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = {@3}$.": "${@0}$, logo $K = {@1}$ e $m = {@2}$. Isso concorda com a fórmula de Liouville: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ com $p = {@3}$.",
  ", teda $a = {@0}$": ", logo $a = {@0}$",
  "Absolútny člen v čitateli kazí homogenitu. Takú rovnicu treba najprv posunúť do priesečníka priamok.": "O termo constante no numerador estraga a homogeneidade. Uma equação assim deve primeiro ser transladada para a interseção das retas.",
  "Aké množstvo soli (v kg) je rovnovážne, teda pri ňom je $x' = 0$?": "Qual quantidade de sal (em kg) é de equilíbrio, ou seja, aquela para a qual $x' = 0$?",
  "Aké napätie (vo voltoch) bude na kondenzátore? {@0}": "Qual será a tensão (em volts) no capacitor? {@0}",
  "Akú smernicu má úsečka smerového poľa rovnice $y' = {@0}$ v bode $[{@1}; {@2}]$?": "Qual é a inclinação do segmento do campo de direções da equação $y' = {@0}$ no ponto $[{@1}; {@2}]$?",
  "Akú teplotu bude mať teleso? Zaokrúhli na desatiny stupňa.": "Qual será a temperatura do corpo? Arredonde para décimos de grau.",
  "Aký je celkový koeficient pri $\\frac{1}{{@0}}$ v $Y(s)$, teda $A$?": "Qual é o coeficiente total de $\\frac{1}{{@0}}$ em $Y(s)$, ou seja, $A$?",
  "Aký je súčin koreňov?": "Qual é o produto das raízes?",
  "Amplitúda nie je súčet $|C_1| + |C_2|$, ale $\\sqrt{C_1^{2} + C_2^{2}}$ (zloženie kosínusu a sínusu s rovnakou frekvenciou).": "A amplitude não é a soma $|C_1| + |C_2|$, mas sim $\\sqrt{C_1^{2} + C_2^{2}}$ (composição de um cosseno e um seno de mesma frequência).",
  "Amplitúda vynútených kmitov v závislosti od frekvencie": "Amplitude das oscilações forçadas em função da frequência",
  "Bernoulliho rovnicu $y'{@0} = {@1}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi. Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).": "A equação de Bernoulli $y'{@0} = {@1}$ é transformada, pela substituição $z = y^{k}$, na equação linear $z' + Pz = Q$ com coeficientes constantes. Determine $k$, $P$ e $Q$ (escreva frações na forma $a/b$).",
  "Charakteristická rovnica ${@0}$ má diskriminant $D = {@1}$ a korene {@2}. {@3} je všeobecné riešenie ${@4}$.": "A equação característica ${@0}$ tem discriminante $D = {@1}$ e raízes {@2}. {@3}, a solução geral é ${@4}$.",
  "Charakteristická rovnica ${@0}$ má korene $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, teda $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pre $t = 0$: $C_1 + C_2 = {@7}$ a ${@8} = {@9}$, odkiaľ $C_1 = {@10}$, $C_2 = {@11}$.": "A equação característica ${@0}$ tem raízes $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Da primeira linha de $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ para $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, logo $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Para $t = 0$: $C_1 + C_2 = {@7}$ e ${@8} = {@9}$, de onde $C_1 = {@10}$, $C_2 = {@11}$.",
  "Charakteristická rovnica ${@0}$ má korene ${@1}$ a ${@2}$, takže ${@3}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Po dosadení sa členy s $x$ odčítajú a zostane $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, teda $A = {@16}$.": "A equação característica ${@0}$ tem raízes ${@1}$ e ${@2}$, então ${@3}$ é raiz simples (ressonância) e a forma de $y_p$ tem o fator $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Após a substituição, os termos com $x$ se cancelam e resta $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, logo $A = {@16}$.",
  "Charakteristická rovnica ${@0}$ má korene {@1}, preto ${@2}$. Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu {@3}, ktorej riešenie je $C_1 = {@4}$, $C_2 = {@5}$.": "A equação característica ${@0}$ tem raízes {@1}, por isso ${@2}$. Substituindo $x = 0$ em $y$ e $y'$, obtemos o sistema {@3}, cuja solução é $C_1 = {@4}$, $C_2 = {@5}$.",
  "Charakteristická rovnica ${@0}$ má {@1}. Pravá strana je {@2}{@3}, teda $\\alpha = {@4}$, a to {@5} charakteristickej rovnice ($k = {@6}$). Preto $y_p = {@7}$.": "A equação característica ${@0}$ tem {@1}. O lado direito é {@2}{@3}, logo $\\alpha = {@4}$, e esse número {@5} da equação característica ($k = {@6}$). Por isso $y_p = {@7}$.",
  "Charakteristická rovnica (po vydelení koeficientom pri $y''$) je $\\lambda^{2} + p\\lambda + q = 0$. Aký je súčet jej koreňov?": "A equação característica (após dividir pelo coeficiente de $y''$) é $\\lambda^{2} + p\\lambda + q = 0$. Qual é a soma das suas raízes?",
  "Delil si len číslom ${@0}$, ale v riešení je $x^{2}$, teda $x_0^{2}$.": "Você dividiu apenas por ${@0}$, mas na solução aparece $x^{2}$, ou seja, $x_0^{2}$.",
  "Derivácia $(C_1 + C_2x){@0}$ má pri $x = 0$ hodnotu ${@1}C_1 + C_2$; zabudol si na člen z derivácie exponenciály.": "A derivada de $(C_1 + C_2x){@0}$ em $x = 0$ vale ${@1}C_1 + C_2$; você esqueceu o termo que vem da derivada da exponencial.",
  "Derivácia $C_2\\sin {@0}t$ je ${@1}C_2\\cos {@2}t$, preto $C_2 = \\frac{x'(0)}{\\omega_0}$, nie $x'(0)$.": "A derivada de $C_2\\sin {@0}t$ é ${@1}C_2\\cos {@2}t$, por isso $C_2 = \\frac{x'(0)}{\\omega_0}$, e não $x'(0)$.",
  "Derivácie $y_p$ nie sú nulové: $y_p' = {@0}A{@1}$ a $y_p'' = {@2}A{@3}$ treba tiež dosadiť.": "As derivadas de $y_p$ não são nulas: $y_p' = {@0}A{@1}$ e $y_p'' = {@2}A{@3}$ também devem ser substituídas.",
  "Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.": "O determinante é negativo, os autovalores são reais com sinais opostos: sela.",
  "Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.": "Na solução geral, substitua $x = 0$ e $y = y_0$ e isole $C$.",
  "Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme {@0}${@1}$. Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = {@2}$ a $\\lambda_1\\lambda_2 = {@3}$, korene sú {@4}. Všeobecné riešenie je ${@5}$.": "Substituindo $y = \\mathrm{e}^{\\lambda x}$, obtemos {@0}${@1}$. Pelas relações de Viète, $\\lambda_1 + \\lambda_2 = {@2}$ e $\\lambda_1\\lambda_2 = {@3}$; as raízes são {@4}. A solução geral é ${@5}$.",
  "Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, odkiaľ $C = {@3}$. Riešenie Cauchyho úlohy je $y = {@4}$.": "Substituímos $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, de onde $C = {@3}$. A solução do problema de Cauchy é $y = {@4}$.",
  "Dosadíme $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, teda $({@3} - {@4})A = {@5}$ a $A = {@6}$. {@7}": "Substituímos $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, logo $({@3} - {@4})A = {@5}$ e $A = {@6}$. {@7}",
  "Dosadíme: $C\\cdot {@0}^{2}{@1} = {@2}$, teda ${@3}C = {@4}$ a $C = {@5}$.": "Substituímos: $C\\cdot {@0}^{2}{@1} = {@2}$, logo ${@3}C = {@4}$ e $C = {@5}$.",
  "Dosadíme: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, teda $\\frac{C}{{@4}} = {@5}$ a $C = {@6}$. (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = {@7} + C$.)": "Substituímos: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, logo $\\frac{C}{{@4}} = {@5}$ e $C = {@6}$. (Verificação: o lado esquerdo da equação é $(xy)'$ e $xy = {@7} + C$.)",
  "Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.": "Substitua $P = \\frac{K}{2}$ na solução $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; você obtém $A\\mathrm{e}^{-rt} = 1$.",
  "Dosaď $t = 0$ a vyrieš sústavu pre konštanty. Zadaj $C_1$ a $C_2$.": "Substitua $t = 0$ e resolva o sistema para as constantes. Digite $C_1$ e $C_2$.",
  "Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.": "Substitua $x$ por $tx$ e $y$ por $ty$. Numa equação homogênea, o lado direito não muda.",
  "Dosaď $x = 0$ do $y_1, y_2, y_1', y_2'$.": "Substitua $x = 0$ em $y_1, y_2, y_1', y_2'$.",
  "Dosaď $x = 0$ do všeobecného riešenia a jeho derivácie a z vzniknutej sústavy urči $C_1$.": "Substitua $x = 0$ na solução geral e na sua derivada e, do sistema obtido, determine $C_1$.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.": "Substitua $x = x_0$, $y = y_0$ na solução geral e isole $C$.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.": "Substitua $x = x_0$, $y = y_0$ na solução geral e resolva a equação linear em $C$.",
  "Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.": "Substitua $x_p$ na equação: $(\\omega_0^{2} - \\omega^{2})A = F_0$.",
  "Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.": "Substitua $y_p = Ax + B$ na equação e compare os coeficientes de $x$ e os termos constantes.",
  "Dosaď $y_p = A{@0}$ do rovnice a urči $A$.": "Substitua $y_p = A{@0}$ na equação e determine $A$.",
  "Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.": "Substitua $y_p$ na equação e compare os coeficientes do cosseno e do seno; você obtém um sistema de duas equações para $A$, $B$.",
  "Dosaď konštantu $y_p = K$ do rovnice ($y_p' = 0$) a pozorne vyjadri $K$.": "Substitua a constante $y_p = K$ na equação ($y_p' = 0$) e isole $K$ com cuidado.",
  "Druhá derivácia kosínusu je záporná: $x_p'' = -{@0}A\\cos {@1}$.": "A derivada segunda do cosseno é negativa: $x_p'' = -{@0}A\\cos {@1}$.",
  "Exponenciálne neklesá samotná teplota telesa, ale jej rozdiel od teploty okolia $T - T_o$.": "Não é a temperatura do corpo que decresce exponencialmente, mas a sua diferença em relação à temperatura ambiente, $T - T_o$.",
  "Exponenciálny a logistický rast": "Crescimento exponencial e logístico",
  "Exponent je reálna časť koreňov $\\alpha = -\\frac{p}{2}$; skontroluj jej znamienko.": "O expoente é a parte real das raízes, $\\alpha = -\\frac{p}{2}$; confira o seu sinal.",
  "Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, teda $\\mathrm{arctg}\\,y = {@1} + C$ a $y = \\mathrm{tg}({@2} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}({@3}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.": "A função $1 + y^{2}$ não tem zeros, não existem soluções estacionárias. Separamos as variáveis: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, logo $\\mathrm{arctg}\\,y = {@1} + C$ e $y = \\mathrm{tg}({@2} + C)$. A constante fica dentro do argumento; por exemplo, $y = \\mathrm{tg}({@3}) + C$ não satisfaz a equação para $C\\neq 0$.",
  "Funkcie ${@0}$ tvoria fundamentálny systém rovnice ${@1} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.": "As funções ${@0}$ formam um sistema fundamental da equação ${@1} = 0$. O seu wronskiano tem a forma $W(x) = K\\mathrm{e}^{mx}$. Determine $K$ e $m$.",
  "Fázový portrét lineárnej sústavy": "Retrato de fase de um sistema linear",
  "Goniometrické funkcie patria ku komplexným koreňom ($D \\lt 0$). Aký je tu diskriminant?": "As funções trigonométricas correspondem a raízes complexas ($D \\lt 0$). Qual é o discriminante aqui?",
  "Homogénna rovnica $y'{@0} = 0$ dáva $y' = {@1}$; skontroluj znamienko v exponente.": "A equação homogênea $y'{@0} = 0$ dá $y' = {@1}$; confira o sinal no expoente.",
  "Homogénna rovnica $y'{@0} = 0$ má riešenie $y_h = C{@1}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$: ${@2}K = {@3}$, teda $K = {@4}$. Všeobecné riešenie je ${@5}$.": "A equação homogênea $y'{@0} = 0$ tem a solução $y_h = C{@1}$. Procuramos a solução particular como uma constante $y_p = K$: ${@2}K = {@3}$, logo $K = {@4}$. A solução geral é ${@5}$.",
  "Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y')^{3}$, rád nezvyšuje.": "Procure a maior ordem de derivada. Um expoente sobre o parêntese, por exemplo $(y')^{3}$, não aumenta a ordem.",
  "Integračný faktor je $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrovaním $y{@3} = {@4} + B$, teda $y = {@5} + B{@6}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Z podmienky ${@12} + B = {@13}$, teda $B = {@14}$. Odpoveď: $A = {@15}$, $B = {@16}$.": "O fator integrante é $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrando, $y{@3} = {@4} + B$, logo $y = {@5} + B{@6}$ (a solução particular também pode ser encontrada substituindo $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Da condição ${@12} + B = {@13}$, logo $B = {@14}$. Resposta: $A = {@15}$, $B = {@16}$.",
  "Integračný faktor je ${@0}$ a riešenie má tvar $y = {@1} + \\frac{C}{{@2}}$. Urči $C$ zo začiatočnej podmienky.": "O fator integrante é ${@0}$ e a solução tem a forma $y = {@1} + \\frac{C}{{@2}}$. Determine $C$ pela condição inicial.",
  "Integruj $M$ podľa $x$ (bez $\\varphi(y)$) a túto časť $F$ vyčísli v bode $[{@0}; {@1}]$.": "Integre $M$ em relação a $x$ (sem $\\varphi(y)$) e calcule essa parte de $F$ no ponto $[{@0}; {@1}]$.",
  "Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.": "Integre $M$ em relação a $x$, acrescente a função desconhecida $\\varphi(y)$ e determine-a comparando $F_y$ com $N$. Por fim, substitua o ponto.",
  "Integrál dáva $\\mathrm{arctg}\\,y = \\dots$; na vyjadrenie $y$ treba použiť inverznú funkciu k arkustangensu.": "A integral dá $\\mathrm{arctg}\\,y = \\dots$; para isolar $y$, é preciso usar a função inversa do arco tangente.",
  "Integrálne krivky rovnice y' = xy": "Curvas integrais da equação y' = xy",
  "K koeficientu z rozkladu pripočítaj člen zo začiatočnej podmienky.": "Ao coeficiente da decomposição some o termo que vem da condição inicial.",
  "Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.": "Derive cada função e substitua na equação. A solução deve satisfazer a equação para todo $x$.",
  "Keďže $c^{2} = 4mk$": "Como $c^{2} = 4mk$",
  "Keďže $c^{2} \\gt 4mk$": "Como $c^{2} \\gt 4mk$",
  "Keďže $c^{2} \\lt 4mk$": "Como $c^{2} \\lt 4mk$",
  "Keďže ${@0}\\neq {@1}$, nejde o rezonanciu.": "Como ${@0}\\neq {@1}$, não se trata de ressonância.",
  "Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.": "$A$ positivo significa que as oscilações estão em fase com a força externa.",
  "Koeficient p": "Coeficiente p",
  "Koeficient pri $x'$ (po vydelení hmotnosťou) je $2\\delta$, nie $\\delta$. Najprv ho vydeľ dvoma.": "O coeficiente de $x'$ (após dividir pela massa) é $2\\delta$, e não $\\delta$. Primeiro divida-o por dois.",
  "Koeficient q": "Coeficiente q",
  "Koeficient rastu k": "Taxa de crescimento k",
  "Koeficient útlmu δ": "Coeficiente de amortecimento δ",
  "Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.": "Calcule os coeficientes em ordem, a partir da maior potência: primeiro $A$ pelo termo com $x^{2}$, depois $B$ e por fim $C$.",
  "Konštanta $A$ vychádza z podmienky $P(0) = \\frac{K}{1 + A} = P_0$, teda $A = \\frac{K - P_0}{P_0}$, nie $\\frac{K}{P_0}$.": "A constante $A$ resulta da condição $P(0) = \\frac{K}{1 + A} = P_0$, logo $A = \\frac{K - P_0}{P_0}$, e não $\\frac{K}{P_0}$.",
  "Konštanta $C$ v riešení je delená integračným faktorom ${@0}$; pri $x = 2$ ju treba tiež vydeliť.": "A constante $C$ na solução é dividida pelo fator integrante ${@0}$; para $x = 2$, também é preciso dividi-la.",
  "Konštanta rozpadu nie je $\\frac{1}{T}$, ale $k = \\frac{\\ln 2}{T}$: za čas $T$ musí množstvo klesnúť presne na polovicu.": "A constante de decaimento não é $\\frac{1}{T}$, mas sim $k = \\frac{\\ln 2}{T}$: no tempo $T$, a quantidade deve cair exatamente à metade.",
  "Konštanta vzniká pri integrovaní, teda v rovnosti $\\mathrm{arctg}\\,y = \\dots + C$. Keď z nej vyjadríš $y$, kam sa $C$ dostane?": "A constante surge ao integrar, ou seja, na igualdade $\\mathrm{arctg}\\,y = \\dots + C$. Quando você isola $y$, para onde vai $C$?",
  "Koľko gramov izotopu zostane? {@0}": "Quantos gramas do isótopo restarão? {@0}",
  "Koľko je $y({@0})^{2}$?": "Quanto vale $y({@0})^{2}$?",
  "Koľko jedincov bude mať populácia? Zaokrúhli na celé číslo.": "Quantos indivíduos terá a população? Arredonde para um número inteiro.",
  "Koľko kilogramov soli bude v nádrži po ${@0}$ minútach? {@1}": "Quantos quilogramas de sal haverá no tanque após ${@0}$ minutos? {@1}",
  "Koľko polčasov rozpadu uplynie za ${@0}$ {@1}? {@2}": "Quantas meias-vidas se passam em ${@0}$ {@1}? {@2}",
  "Ktorá funkcia je všeobecným riešením rovnice $y' = {@0}(1 + y^{2})$?": "Qual função é a solução geral da equação $y' = {@0}(1 + y^{2})$?",
  "Ktorá funkcia je všeobecným riešením rovnice $y'{@0} = {@1}$?": "Qual função é a solução geral da equação $y'{@0} = {@1}$?",
  "Ktorá funkcia je všeobecným riešením rovnice ${@0} = 0$?": "Qual função é a solução geral da equação ${@0} = 0$?",
  "Ktorá z funkcií je riešením rovnice ${@0}$?": "Qual das funções é solução da equação ${@0}$?",
  "Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y' = \\varphi\\left(\\frac{y}{x}\\right)$?": "Qual das equações é homogênea, ou seja, pode ser escrita na forma $y' = \\varphi\\left(\\frac{y}{x}\\right)$?",
  "Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?": "Qual é a transformada de Laplace $Y(s)$ da solução do problema ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?",
  "Laplaceovou transformáciou vyrieš úlohu $y'{@0} = {@1}$, $y(0) = {@2}$. Riešenie má tvar $y(t) = A{@3} + B{@4}$; urči $A$ a $B$.": "Resolva pela transformada de Laplace o problema $y'{@0} = {@1}$, $y(0) = {@2}$. A solução tem a forma $y(t) = A{@3} + B{@4}$; determine $A$ e $B$.",
  "Liouvilleov vzorec: $W(x) = W(0)\\mathrm{e}^{-px}$.": "Fórmula de Liouville: $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Menovateľ je charakteristický polynóm rovnice: koeficienty pri $s$ majú rovnaké znamienka ako pri $y'$ v rovnici.": "O denominador é o polinômio característico da equação: os coeficientes de $s$ têm os mesmos sinais que os de $y'$ na equação.",
  "Menovateľ rozložíme: ${@0} = (s{@1})(s{@2})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zakrývacia metóda: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Preto $f(t) = {@17}{@18}$.": "Fatoramos o denominador: ${@0} = (s{@1})(s{@2})$. Decomposição em frações parciais: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Método da cobertura: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Por isso $f(t) = {@17}{@18}$.",
  "Mocnina $x$ v tvare $y_p$ sa rovná násobnosti čísla ${@0}$ ako koreňa charakteristickej rovnice. Over túto násobnosť.": "A potência de $x$ na forma de $y_p$ é igual à multiplicidade do número ${@0}$ como raiz da equação característica. Verifique essa multiplicidade.",
  "Multiplikatívna konštanta vzniká pri rovniciach $y' = g(x)y$ (cez logaritmus). Tu integruješ $\\frac{1}{1 + y^{2}}$, teda konštanta je aditívna v argumente.": "A constante multiplicativa surge nas equações $y' = g(x)y$ (via logaritmo). Aqui você integra $\\frac{1}{1 + y^{2}}$, então a constante é aditiva no argumento.",
  "Najprv skontroluj znamienko $\\det A$: rozhoduje, či majú vlastné čísla opačné znamienka.": "Primeiro confira o sinal de $\\det A$: ele decide se os autovalores têm sinais opostos.",
  "Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.": "Primeiro determine $k$ pela medição e depois resolva $T(t) = T^{*}$ aplicando logaritmos.",
  "Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = {@0}$. Vypočítaj $F({@1})$ (presne ako zlomok, alebo na 3 desatinné miesta).": "Seja $F(s) = \\mathcal{L}\\{f\\}(s)$ para $f(t) = {@0}$. Calcule $F({@1})$ (exatamente, como fração, ou com 3 casas decimais).",
  "Nenabitý kondenzátor s kapacitou ${@0}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím ${@1}\\,\\mathrm{V}$ cez rezistor s odporom ${@2}\\,\\mathrm{k\\Omega}$.": "Um capacitor descarregado de capacitância ${@0}\\,\\mu\\mathrm{F}$ é carregado por uma fonte de tensão ${@1}\\,\\mathrm{V}$ através de um resistor de resistência ${@2}\\,\\mathrm{k\\Omega}$.",
  "Nesčítavaj integrál $M$ podľa $x$ a integrál $N$ podľa $y$: zmiešané členy by si tak započítal dvakrát. Z $N$ ber len členy, ktoré ešte chýbajú.": "Não some a integral de $M$ em $x$ com a integral de $N$ em $y$: assim, os termos mistos seriam contados duas vezes. De $N$, tome só os termos que ainda faltam.",
  "Netlmený oscilátor $x'' + {@0}x = 0$ má začiatočné podmienky $x(0) = {@1}$, $x'(0) = {@2}$. Urči amplitúdu kmitov. {@3}": "O oscilador não amortecido $x'' + {@0}x = 0$ tem as condições iniciais $x(0) = {@1}$, $x'(0) = {@2}$. Determine a amplitude das oscilações. {@3}",
  "Netlmený oscilátor je budený periodickou silou: $x'' + {@0}x = {@1}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos {@2}$. Urči $A$ (ako zlomok alebo celé číslo).": "O oscilador não amortecido é excitado por uma força periódica: $x'' + {@0}x = {@1}$. As oscilações forçadas em regime estacionário têm a forma $x_p = A\\cos {@2}$. Determine $A$ (como fração ou número inteiro).",
  "Nosná kapacita K": "Capacidade de suporte K",
  "Nádrž obsahuje ${@0}$ litrov {@1}. Priteká do nej {@2} a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po ${@3}$ minútach? {@4}": "Um tanque contém ${@0}$ litros {@1}. Entra nele {@2}, e a solução, perfeitamente misturada, sai com a mesma vazão. Quantos quilogramas de sal haverá no tanque após ${@3}$ minutos? {@4}",
  "Nájdi korene charakteristickej rovnice diferenciálnej rovnice ${@0}$. Zadaj ich oddelené bodkočiarkou.": "Encontre as raízes da equação característica da equação diferencial ${@0}$. Digite-as separadas por ponto e vírgula.",
  "Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.": "Encontre os autovalores e os autovetores na forma $(1, m)^{T}$, depois substitua $t = 0$ e resolva o sistema para $C_1$, $C_2$.",
  "Nájdi vlastné čísla matice sústavy {@0}. Zadaj ich oddelené bodkočiarkou.": "Encontre os autovalores da matriz do sistema {@0}. Digite-os separados por ponto e vírgula.",
  "Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{{@0}}{{@1}}$. Výsledok má tvar $f(t) = A{@2} + B{@3}$; urči $A$ a $B$.": "Encontre a função original $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ da função $F(s) = \\dfrac{{@0}}{{@1}}$. O resultado tem a forma $f(t) = A{@2} + B{@3}$; determine $A$ e $B$.",
  "Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{{@0}}$. Bilancia: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Rovnovážna hodnota je $cV = {@5}$, preto $x(t) = {@6}$ a $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.": "O volume não muda; a concentração no tanque é $\\frac{x}{{@0}}$. Balanço: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. O valor de equilíbrio é $cV = {@5}$, por isso $x(t) = {@6}$ e $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.",
  "Obraz exponenciály je $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nie $\\frac{1}{s + a}$.": "A transformada da exponencial é $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, e não $\\frac{1}{s + a}$.",
  "Obraz mocniny je $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; zabudol si na faktoriál.": "A transformada da potência é $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; você esqueceu o fatorial.",
  "Oddelíme premenné: $y\\,dy = {@0}\\,dx$, teda $\\frac{y^{2}}{2} = {@1} + C$, čiže $y^{2} = {@2} + 2C$. Z podmienky $2C = {@3}$, takže $y^{2} = {@4} + {@5}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu: $y = \\sqrt{{@6} + {@7}}$ a $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.": "Separamos as variáveis: $y\\,dy = {@0}\\,dx$, logo $\\frac{y^{2}}{2} = {@1} + C$, ou seja, $y^{2} = {@2} + 2C$. Da condição, $2C = {@3}$, então $y^{2} = {@4} + {@5}$. Como $y(0) \\gt 0$, tomamos a raiz positiva: $y = \\sqrt{{@6} + {@7}}$ e $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.",
  "Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.": "Separe as variáveis, $\\frac{dy}{y^{2}} = k\\,dx$, e lembre-se de que $\\int y^{-2}\\,dy = -\\frac{1}{y}$.",
  "Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.": "Separe as variáveis, $y\\,dy = kx\\,dx$, e integre. Determine o sinal da raiz pela condição inicial.",
  "Odmocnina súčtu nie je súčet odmocnín: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Najprv sčítaj pod odmocninou.": "A raiz de uma soma não é a soma das raízes: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Primeiro some dentro da raiz.",
  "Odtok soli je koncentrácia krát prietok, teda $\\frac{x}{V}\\cdot q$. V exponente preto musí byť aj prietok $q$.": "A saída de sal é a concentração vezes a vazão, ou seja, $\\frac{x}{V}\\cdot q$. Por isso, no expoente também deve aparecer a vazão $q$.",
  "Over dosadením: pre $y = {@0}x$ je $xy' = {@1}x$, no pravá strana ${@2}y$ je iná.": "Verifique substituindo: para $y = {@0}x$, temos $xy' = {@1}x$, mas o lado direito ${@2}y$ é diferente.",
  "Overenie: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrovaním $M$ podľa $x$: $F = {@1} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde {@2}. Preto $F(x, y) = {@3}$ a $C = F({@4}, {@5}) = {@6}$.": "Verificação: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrando $M$ em relação a $x$: $F = {@1} + \\varphi(y)$. Da condição $F_y = N$ resulta {@2}. Por isso $F(x, y) = {@3}$ e $C = F({@4}, {@5}) = {@6}$.",
  "Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.": "Procure a solução particular na forma $A\\mathrm{e}^{cx}$ (substitua na equação) e determine a constante $B$ pela condição inicial.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.": "Procuramos a solução particular da equação ${@0} = {@1}$ na forma $y_p = Ax + B$. Determine $A$ e $B$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.": "Procuramos a solução particular da equação ${@0} = {@1}$ na forma $y_p = Ax^{2} + Bx + C$. Determine $A$, $B$ e $C$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = A{@2} + B{@3}$. Urči $A$ a $B$.": "Procuramos a solução particular da equação ${@0} = {@1}$ na forma $y_p = A{@2} + B{@3}$. Determine $A$ e $B$.",
  "Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.": "O período das oscilações não amortecidas é $T = 2\\pi\\sqrt{m/k}$.",
  "Po dosadení $x_p$ dostaneš $KA\\cos {@0} = {@1}\\cos {@2}$. Urči $K$.": "Substituindo $x_p$, você obtém $KA\\cos {@0} = {@1}\\cos {@2}$. Determine $K$.",
  "Po dosadení $y_p = Ax{@0}$ zostane $A(2r + p){@1}$. Vypočítaj $2r + p$.": "Substituindo $y_p = Ax{@0}$, resta $A(2r + p){@1}$. Calcule $2r + p$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c + a) = b$: derivácia dá $c$ a člen ${@1}$ pridá $+a$, nie $-a$.": "Substituindo $y_p = A{@0}$, você obtém $A(c + a) = b$: a derivada dá $c$ e o termo ${@1}$ acrescenta $+a$, e não $-a$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c^{2} + pc + q){@1}$. Vypočítaj hodnotu zátvorky.": "Substituindo $y_p = A{@0}$, você obtém $A(c^{2} + pc + q){@1}$. Calcule o valor do parêntese.",
  "Po dosadení $z' = (1-n)y^{-n}y'$ treba celú rovnicu vynásobiť číslom $1 - n$, teda aj koeficienty $p$ a $q$.": "Após substituir $z' = (1-n)y^{-n}y'$, é preciso multiplicar toda a equação por $1 - n$, ou seja, também os coeficientes $p$ e $q$.",
  "Po dosadení má rovnica pre koeficienty pri ${@0}$ tvar $uA{@1} = {@2}$. Urči $u$.": "Após a substituição, a equação para os coeficientes de ${@0}$ tem a forma $uA{@1} = {@2}$. Determine $u$.",
  "Po integrovaní máš $-\\frac{1}{u} = \\ln x + C$. Urči $C$ (zlomok alebo celé číslo).": "Após integrar, você tem $-\\frac{1}{u} = \\ln x + C$. Determine $C$ (fração ou número inteiro).",
  "Po integrovaní máš $\\frac{u^{2}}{2}$; pri vyjadrení $u^{2}$ musíš dvoma vynásobiť obe strany, teda aj člen s logaritmom.": "Após integrar, você tem $\\frac{u^{2}}{2}$; ao isolar $u^{2}$, é preciso multiplicar ambos os lados por dois, inclusive o termo com o logaritmo.",
  "Po integrácii a vynásobení dvoma dostaneš $y^{2} = {@0} + K$. Urči konštantu $K$ zo začiatočnej podmienky.": "Após integrar e multiplicar por dois, você obtém $y^{2} = {@0} + K$. Determine a constante $K$ pela condição inicial.",
  "Po integrácii máš $-\\frac{1}{y} = {@0} + C$. Urči $C$ zo začiatočnej podmienky (zlomok alebo celé číslo).": "Após integrar, você tem $-\\frac{1}{y} = {@0} + C$. Determine $C$ pela condição inicial (fração ou número inteiro).",
  "Po substitúcii $y = ux$ a integrovaní vyjadri $u^{2}$ a vypočítaj $u({@0})^{2}$. {@1}": "Após a substituição $y = ux$ e a integração, isole $u^{2}$ e calcule $u({@0})^{2}$. {@1}",
  "Po substitúcii $y = ux$ dostaneš $u = {@0} + C$. Urči $C$ zo začiatočnej podmienky.": "Após a substituição $y = ux$, você obtém $u = {@0} + C$. Determine $C$ pela condição inicial.",
  "Po transformácii a vyjadrení $Y(s)$ rozlož zlomok ${@0}$ na parciálne zlomky. Aký je koeficient pri $\\frac{1}{{@1}}$?": "Após transformar e isolar $Y(s)$, decomponha a fração ${@0}$ em frações parciais. Qual é o coeficiente de $\\frac{1}{{@1}}$?",
  "Po vydelení $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Integračný faktor je $\\mathrm{e}^{{@2}\\ln x} = {@3}$, rovnica prejde na $({@4}y)' = {@5}$, teda ${@6}y = {@7} + C$ a $y = {@8} + \\frac{C}{{@9}}$. Z podmienky $1 + C = {@10}$, $C = {@11}$. Potom $y(2) = {@12}{@13}$.": "Dividindo por $x$: $y' + \\frac{{@0}}{x}y = {@1}$. O fator integrante é $\\mathrm{e}^{{@2}\\ln x} = {@3}$, a equação passa a $({@4}y)' = {@5}$, logo ${@6}y = {@7} + C$ e $y = {@8} + \\frac{C}{{@9}}$. Da condição $1 + C = {@10}$, $C = {@11}$. Então $y(2) = {@12}{@13}$.",
  "Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = {@0}$. Odtiaľ $u = \\frac{{@1}}{1{@2}}$ a $y = \\frac{{@3}}{1{@4}}$, takže $y({@5}) \\approx {@6}$.": "Dividindo por $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substituição $y = ux$: $u + xu' = u^{2} + u$, logo $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (a solução $u = 0$ não satisfaz a condição). Integramos: $-\\frac{1}{u} = \\ln x + C$; da condição, $C = {@0}$. Daí $u = \\frac{{@1}}{1{@2}}$ e $y = \\frac{{@3}}{1{@4}}$, então $y({@5}) \\approx {@6}$.",
  "Po vydelení $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, teda $u\\,du = {@2}\\frac{dx}{x}$ a $\\frac{u^{2}}{2} = {@3} + C$. Z podmienky $u(1) = {@4}$ máme $u^{2} = {@5} + {@6}$, a keďže $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Potom $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.": "Dividindo por $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substituição $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, logo $u\\,du = {@2}\\frac{dx}{x}$ e $\\frac{u^{2}}{2} = {@3} + C$. Da condição $u(1) = {@4}$, temos $u^{2} = {@5} + {@6}$ e, como $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Então $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.",
  "Po vydelení číslom ${@0}$: $x'' + {@1}x' + {@2}x = 0$.": "Dividindo por ${@0}$: $x'' + {@1}x' + {@2}x = 0$.",
  "Podiel ${@0}\\,\\%$ patrí výrazu $1 - \\mathrm{e}^{-t/\\tau}$, nie samotnej exponenciále.": "A porcentagem ${@0}\\,\\%$ refere-se à expressão $1 - \\mathrm{e}^{-t/\\tau}$, e não à exponencial sozinha.",
  "Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = {@0}$ a $N_x = {@1}a{@2}{@3}$. Porovnaním koeficientov pri {@4} dostaneme ${@5}a = {@6}${@7}. Kmeňová funkcia je potom $F = {@8}$.": "A condição para a equação ser exata é $M_y = N_x$. Temos $M_y = {@0}$ e $N_x = {@1}a{@2}{@3}$. Comparando os coeficientes de {@4}, obtemos ${@5}a = {@6}${@7}. A função potencial é então $F = {@8}$.",
  "Podľa Liouvilleovho vzorca je $W(x) = W(0)\\mathrm{e}^{-px}$; skontroluj znamienko exponentu.": "Pela fórmula de Liouville, $W(x) = W(0)\\mathrm{e}^{-px}$; confira o sinal do expoente.",
  "Podľa Newtonovho zákona $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, teda $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.": "Pela lei de Newton, $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Pela medição, $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, logo $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.",
  "Podľa Vietových vzťahov je súčet koreňov $-p$.": "Pelas relações de Viète, a soma das raízes é $-p$.",
  "Podľa slovníka a linearity $F(s) = {@0}$ pre $s \\gt {@1}$. Dosadením $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.": "Pela tabela e pela linearidade, $F(s) = {@0}$ para $s \\gt {@1}$. Substituindo $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.",
  "Pohyb telesa sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$ (hmotnosť ${@3}\\,\\mathrm{kg}$, tlmenie ${@4}\\,\\mathrm{kg/s}$, tuhosť ${@5}\\,\\mathrm{N/m}$). O aký typ pohybu ide?": "O movimento de um corpo é regido pela equação ${@0}x'' + {@1}x' + {@2}x = 0$ (massa ${@3}\\,\\mathrm{kg}$, amortecimento ${@4}\\,\\mathrm{kg/s}$, rigidez ${@5}\\,\\mathrm{N/m}$). De que tipo de movimento se trata?",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Vzorka obsahuje na začiatku ${@2}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za ${@3}$ {@4}? {@5}": "A meia-vida de um isótopo radioativo é ${@0}$ {@1}. A amostra contém inicialmente ${@2}\\,\\mathrm{g}$ do isótopo. Quantos gramas do isótopo restarão após ${@3}$ {@4}? {@5}",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Za koľko {@2} klesne jeho množstvo na ${@3}\\,\\%$ pôvodného množstva? {@4}": "A meia-vida de um isótopo radioativo é ${@0}$ {@1}. Em quanto tempo (em {@2}) a sua quantidade cai para ${@3}\\,\\%$ da quantidade inicial? {@4}",
  "Populácia sa riadi logistickou rovnicou $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ v rokoch), na začiatku má ${@2}$ jedincov.": "Uma população é regida pela equação logística $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ em anos) e tem inicialmente ${@2}$ indivíduos.",
  "Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.": "Compare $c^{2}$ com $4mk$, ou o coeficiente de amortecimento $\\delta = \\frac{c}{2m}$ com a frequência natural $\\omega_0 = \\sqrt{k/m}$.",
  "Porovnaj absolútne členy a urči $B$.": "Compare os termos constantes e determine $B$.",
  "Porovnaj absolútne členy a urči $C$.": "Compare os termos constantes e determine $C$.",
  "Porovnaj koeficienty pri $x$ a urči $A$.": "Compare os coeficientes de $x$ e determine $A$.",
  "Porovnaj koeficienty pri $x$ a urči $B$.": "Compare os coeficientes de $x$ e determine $B$.",
  "Porovnaj koeficienty pri $x^{2}$ a urči $A$.": "Compare os coeficientes de $x^{2}$ e determine $A$.",
  "Použi $W = y_1y_2' - y_1'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.": "Use $W = y_1y_2' - y_1'y_2$. Você pode conferir o expoente pela fórmula de Liouville $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.": "Use $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.",
  "Použi $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ a $\\mathcal{L}\\{y'\\} = sY - y(0)$ a vyjadri $Y$.": "Use $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ e $\\mathcal{L}\\{y'\\} = sY - y(0)$ e isole $Y$.",
  "Použi prvý riadok sústavy $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.": "Use a primeira linha do sistema $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.",
  "Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.": "Use a fórmula $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, em que $A = \\frac{K - P_0}{P_0}$.",
  "Pozor na znamienko $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, po prenesení na pravú stranu je $+y'(0)$.": "Cuidado com o sinal de $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$; passando para o lado direito, fica $+y'(0)$.",
  "Pozor na znamienko: $\\int u^{-2}\\,du = -\\frac{1}{u}$.": "Cuidado com o sinal: $\\int u^{-2}\\,du = -\\frac{1}{u}$.",
  "Pozor na znamienko: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nie $\\frac{1}{y}$.": "Cuidado com o sinal: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, e não $\\frac{1}{y}$.",
  "Pravá strana je homogénna stupňa 2, nie 0: po dosadení $tx$, $ty$ sa vynásobí $t^{2}$. Tvar $\\varphi\\left(\\frac{y}{x}\\right)$ vyžaduje stupeň 0.": "O lado direito é homogêneo de grau 2, e não 0: após substituir $tx$, $ty$, ele é multiplicado por $t^{2}$. A forma $\\varphi\\left(\\frac{y}{x}\\right)$ exige grau 0.",
  "Pravá strana obsahuje len konštantu (polynóm stupňa 0), polynóm $Ax + B$ tu netreba.": "O lado direito contém só uma constante (polinômio de grau 0); o polinômio $Ax + B$ não é necessário aqui.",
  "Pre $x_p = Bt{@0} {@1}$ je $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (členy s $t$ sa odčítajú). Porovnaním ${@7}{@8}B = {@9}$, teda $B = {@10}$. Amplitúda $|B|t$ rastie lineárne s časom.": "Para $x_p = Bt{@0} {@1}$, temos $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (os termos com $t$ se cancelam). Comparando, ${@7}{@8}B = {@9}$, logo $B = {@10}$. A amplitude $|B|t$ cresce linearmente com o tempo.",
  "Pre $y = \\cos {@0}x$ je $y'' = -{@1}\\cos {@2}x$, a teda $y'' + {@3}y = 0$. Pri $\\cos {@4}x$ by vyšlo $y'' = -{@5}\\cos {@6}x$, exponenciála má kladnú druhú deriváciu.": "Para $y = \\cos {@0}x$, temos $y'' = -{@1}\\cos {@2}x$, e portanto $y'' + {@3}y = 0$. Com $\\cos {@4}x$ resultaria $y'' = -{@5}\\cos {@6}x$; a exponencial tem derivada segunda positiva.",
  "Pre $y = \\mathrm{e}^{-{@0}x}$ je $y'' = {@1}\\mathrm{e}^{-{@2}x}$, a teda $y'' - {@3}y = 0$. Pre $\\sin {@4}x$ vyjde $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.": "Para $y = \\mathrm{e}^{-{@0}x}$, temos $y'' = {@1}\\mathrm{e}^{-{@2}x}$, e portanto $y'' - {@3}y = 0$. Para $\\sin {@4}x$ resulta $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.",
  "Pre $y = x^{{@0}}$ je $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pre $y = {@6}x$ by vyšlo $xy' = {@7}x$, ale ${@8}y = {@9}x$.": "Para $y = x^{{@0}}$, temos $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Para $y = {@6}x$ resultaria $xy' = {@7}x$, mas ${@8}y = {@9}x$.",
  "Pre $y' + py = qy^{n}$ je $z = y^{1-n}$ a $z' + (1-n)pz = (1-n)q$.": "Para $y' + py = qy^{n}$, temos $z = y^{1-n}$ e $z' + (1-n)pz = (1-n)q$.",
  "Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = {@0}\\,dx$, teda $\\ln|y| = {@1} + c$ a $y = C\\mathrm{e}^{{@2}}$ (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = {@3}$, takže $y = {@4}$ a $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.": "Para $y\\neq 0$, separamos as variáveis: $\\frac{dy}{y} = {@0}\\,dx$, logo $\\ln|y| = {@1} + c$ e $y = C\\mathrm{e}^{{@2}}$ (a solução $y = 0$ está incluída para $C = 0$). Da condição, $C = {@3}$, então $y = {@4}$ e $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.",
  "Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.": "Para $y_p = A\\mathrm{e}^{cx}$, após a substituição resulta $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.",
  "Pre akú hodnotu parametra $a$ je rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ exaktná?": "Para qual valor do parâmetro $a$ a equação $({@0})\\,dx + ({@1})\\,dy = 0$ é exata?",
  "Pre dva rôzne reálne korene": "Para duas raízes reais distintas",
  "Pre dvojnásobný koreň": "Para uma raiz dupla",
  "Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$": "Para raízes complexas conjugadas $\\alpha\\pm\\beta\\mathrm{i}$",
  "Pre polynóm 1. stupňa treba úplný polynóm $Ax + B$, samotné $Ax$ nestačí.": "Para um polinômio de 1º grau, é preciso o polinômio completo $Ax + B$; apenas $Ax$ não basta.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ a urči $\\delta$.": "Reescreva a equação na forma $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ e determine $\\delta$.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Reescreva a equação na forma $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; então $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Pri $x = 0$ je $C\\cdot\\mathrm{e}^{0} = C$, ale v riešení je ešte konštantný člen ${@0}$, ktorý musíš od $y_0$ odčítať.": "Para $x = 0$, $C\\cdot\\mathrm{e}^{0} = C$, mas na solução há ainda o termo constante ${@0}$, que você deve subtrair de $y_0$.",
  "Pri $x = 0$ sú obe exponenciály rovné 1, takže $y(0) = A + B$. Hodnotu $A$ treba od $y(0)$ odčítať.": "Para $x = 0$, ambas as exponenciais valem 1, então $y(0) = A + B$. É preciso subtrair o valor de $A$ de $y(0)$.",
  "Pri $x = 1$ je $u(1) = y(1)$.": "Para $x = 1$, $u(1) = y(1)$.",
  "Pri $y = \\cos \\omega x$ je $y'' = -\\omega^{2}y$; koeficient ${@0}$ v rovnici je $\\omega^{2}$, nie $\\omega$.": "Para $y = \\cos \\omega x$, $y'' = -\\omega^{2}y$; o coeficiente ${@0}$ na equação é $\\omega^{2}$, e não $\\omega$.",
  "Pri $y = \\mathrm{e}^{rx}$ je $y'' = r^{2}y$; koeficient ${@0}$ v rovnici je $r^{2}$, nie $r$.": "Para $y = \\mathrm{e}^{rx}$, $y'' = r^{2}y$; o coeficiente ${@0}$ na equação é $r^{2}$, e não $r$.",
  "Pri absolútnom člene si zabudol na $y_p'' = 2A$: aj druhá derivácia prispieva konštantou.": "No termo constante, você esqueceu $y_p'' = 2A$: a derivada segunda também contribui com uma constante.",
  "Pri derivovaní $x\\mathrm{e}^{rx}$ podľa súčinu vznikne v $y_p''$ člen $2rA\\mathrm{e}^{rx}$, nie len $rA\\mathrm{e}^{rx}$.": "Ao derivar $x\\mathrm{e}^{rx}$ pela regra do produto, surge em $y_p''$ o termo $2rA\\mathrm{e}^{rx}$, e não apenas $rA\\mathrm{e}^{rx}$.",
  "Pri derivovaní ${@0}$ podľa $x$ vznikne koeficient ${@1}a$; rovnosť koeficientov treba ešte vydeliť číslom ${@2}$.": "Ao derivar ${@0}$ em relação a $x$, surge o coeficiente ${@1}a$; a igualdade dos coeficientes ainda deve ser dividida por ${@2}$.",
  "Pri derivovaní súčinu ${@0}\\cdot(\\dots)$ vznikne aj člen ${@1}C_1$ z derivácie exponenciály.": "Ao derivar o produto ${@0}\\cdot(\\dots)$, surge também o termo ${@1}C_1$, vindo da derivada da exponencial.",
  "Pri dvojnásobnom derivovaní súčinu $t{@0} {@1}$ vzniknú dva rovnaké členy bez $t$, spolu $2\\omega_0$-násobok.": "Ao derivar duas vezes o produto $t{@0} {@1}$, surgem dois termos iguais sem $t$, ao todo $2\\omega_0$ vezes.",
  "Pri dvojnásobnom koreni máš len jednu exponenciálu; druhé nezávislé riešenie dostaneš vynásobením $x$.": "Com raiz dupla, você tem só uma exponencial; a segunda solução independente é obtida multiplicando por $x$.",
  "Pri dvojnásobnom koreni sa exponenciála násobí $x$, nie $x^{2}$ (to by bolo pri trojnásobnom koreni).": "Com raiz dupla, a exponencial é multiplicada por $x$, e não por $x^{2}$ (isso seria no caso de raiz tripla).",
  "Pri integrovaní ${@0}$ si zabudol deliť exponentom: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.": "Ao integrar ${@0}$, você esqueceu de dividir pelo expoente: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.",
  "Pri komplexných koreňoch nie sú riešeniami reálne exponenciály; použi tvar $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.": "Com raízes complexas, as exponenciais reais não são soluções; use a forma $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.",
  "Pri koreňoch $\\alpha\\pm\\beta\\mathrm{i}$ je v exponente reálna časť $\\alpha$ a v goniometrických funkciách imaginárna časť $\\beta$; zamenil si ich.": "Com raízes $\\alpha\\pm\\beta\\mathrm{i}$, no expoente fica a parte real $\\alpha$ e nas funções trigonométricas a parte imaginária $\\beta$; você as trocou.",
  "Pri porovnaní absolútnych členov si zabudol na člen ${@0} = {@1}$, ktorý pochádza z derivácie.": "Ao comparar os termos constantes, você esqueceu o termo ${@0} = {@1}$, que vem da derivada.",
  "Pri prenášaní konštantného člena na druhú stranu rovnice si mu nezmenil znamienko.": "Ao passar o termo constante para o outro lado da equação, você não trocou o seu sinal.",
  "Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.": "Na ressonância com raiz simples $r$, após substituir $y_p = Ax\\mathrm{e}^{rx}$ resulta a expressão $A(2r + p)\\,\\mathrm{e}^{rx}$.",
  "Pri riešení $2^{-t/T} = p$ treba logaritmus podieliť číslom $\\ln 2$ (alebo použiť logaritmus so základom 2).": "Ao resolver $2^{-t/T} = p$, o logaritmo deve ser dividido por $\\ln 2$ (ou use o logaritmo na base 2).",
  "Pri vyjadrení $C$ zo zlomku $\\frac{C}{x_0}$ treba násobiť číslom $x_0$, nie deliť.": "Ao isolar $C$ da fração $\\frac{C}{x_0}$, é preciso multiplicar por $x_0$, e não dividir.",
  "Pri zakrývacej metóde dosadíš $s = a$ do zvyšku zlomku; v menovateli potom zostane $a - b$, nie $b - a$.": "No método da cobertura, você substitui $s = a$ no resto da fração; no denominador fica então $a - b$, e não $b - a$.",
  "Primitívna funkcia k $ax^{n}$ je $\\frac{a}{n+1}x^{n+1}$.": "A primitiva de $ax^{n}$ é $\\frac{a}{n+1}x^{n+1}$.",
  "Riešenie Cauchyho úlohy $y'{@0} = {@1}$, $y(0) = {@2}$ má tvar $y = A{@3} + B{@4}$. Urči $A$ a $B$.": "A solução do problema de Cauchy $y'{@0} = {@1}$, $y(0) = {@2}$ tem a forma $y = A{@3} + B{@4}$. Determine $A$ e $B$.",
  "Riešenie Cauchyho úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ zapíšeme v tvare ${@3}$. Urči $C_1$ a $C_2$.": "Escrevemos a solução do problema de Cauchy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ na forma ${@3}$. Determine $C_1$ e $C_2$.",
  "Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.": "A solução é $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; determine $\\mathrm{e}^{-k}$ pela segunda medição.",
  "Riešenie je súčet $y_h + y_p$: konštantné partikulárne riešenie sa exponenciálou nenásobí.": "A solução é a soma $y_h + y_p$: a solução particular constante não é multiplicada pela exponencial.",
  "Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.": "A solução é a soma de $y_h$ (uma exponencial com o coeficiente de $y$ com sinal trocado) e da solução particular constante.",
  "Riešenie má tvar $\\mathrm{e}^{\\lambda x}$, kde $\\lambda$ je koreň charakteristickej rovnice; skontroluj znamienka koreňov.": "A solução tem a forma $\\mathrm{e}^{\\lambda x}$, em que $\\lambda$ é raiz da equação característica; confira os sinais das raízes.",
  "Riešenie má tvar $y = C\\mathrm{e}^{G(x)}$ s $G(0) = 0$. Urči $C$ zo začiatočnej podmienky.": "A solução tem a forma $y = C\\mathrm{e}^{G(x)}$ com $G(0) = 0$. Determine $C$ pela condição inicial.",
  "Riešenie rovnice y″ + py′ + qy = 0": "Solução da equação y″ + py′ + qy = 0",
  "Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.": "Resolva a equação $2^{-t/T} = p$ aplicando logaritmos: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.",
  "Rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$. Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[{@2}; {@3}]$.": "A equação $({@0})\\,dx + ({@1})\\,dy = 0$ é exata. Escrevemos a sua integral geral na forma $F(x, y) = C$, em que $F(0, 0) = 0$. Determine $C$ para a curva integral que passa pelo ponto $[{@2}; {@3}]$.",
  "Rovnica $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.": "A equação $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) não é exata. Ela tem um fator integrante da forma $\\mu = x^{k}$. Determine $k$.",
  "Rovnica $x'' + {@0}x = {@1}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt{@2} {@3}$. Urči $B$.": "A equação $x'' + {@0}x = {@1}$ descreve ressonância. A sua solução particular tem a forma $x_p = Bt{@2} {@3}$. Determine $B$.",
  "Rovnica $y' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.": "A equação $y' = f(x, y)$ diz que a inclinação da tangente no ponto $[x; y]$ é $f(x, y)$. Substitua as coordenadas do ponto.",
  "Rovnica $y' = {@0}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$ sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen, po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.": "A equação $y' = {@0}$ tem no numerador e no denominador funções homogêneas de mesmo grau; por isso, após substituir $x \\to tx$, $y \\to ty$, o $t$ se cancela e o lado direito depende só de $\\frac{y}{x}$. As outras equações contêm termos de graus diferentes ou um termo constante; por isso, após substituir $tx$ e $ty$, o $t$ não se cancela.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = Ax{@2}$. Urči $A$.": "A equação ${@0} = {@1}$ tem uma solução particular da forma $y_p = Ax{@2}$. Determine $A$.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = A{@2}$. Urči $A$.": "A equação ${@0} = {@1}$ tem uma solução particular da forma $y_p = A{@2}$. Determine $A$.",
  "Rovnica ${@0}x'' + {@1}x = 0$ má $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.": "A equação ${@0}x'' + {@1}x = 0$ tem $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Período $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.",
  "Rovnica je homogénna: $y' = \\frac{y}{x}{@0}$. Substitúcia $y = ux$ dáva $u + xu' = u{@1}$, teda $u' = {@2}\\frac{{@3}}{x}$ a $u = {@4} + C$. Z podmienky $u(1) = {@5}$ je $C = {@6}$, preto $y = x({@7}{@8})$ a $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.": "A equação é homogênea: $y' = \\frac{y}{x}{@0}$. A substituição $y = ux$ dá $u + xu' = u{@1}$, logo $u' = {@2}\\frac{{@3}}{x}$ e $u = {@4} + C$. Da condição $u(1) = {@5}$, temos $C = {@6}$, por isso $y = x({@7}{@8})$ e $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.",
  "Rovnica má tvar $y' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.": "A equação tem a forma $y' = g(x)\\,y$. Separe as variáveis, $\\frac{dy}{y} = g(x)\\,dx$, e integre; você obtém $y = C\\mathrm{e}^{G(x)}$.",
  "Rozdiel $M_y - N_x$ treba ešte vydeliť funkciou $N = {@0}$, nie len premennou $x$.": "A diferença $M_y - N_x$ ainda deve ser dividida pela função $N = {@0}$, e não apenas pela variável $x$.",
  "Rozhoduje znamienko diskriminantu $c^{2} - 4mk$. Prepočítaj ho: porovnávaš druhú mocninu tlmenia so štvornásobkom súčinu $mk$.": "Decide o sinal do discriminante $c^{2} - 4mk$. Recalcule-o: você compara o quadrado do amortecimento com o quádruplo do produto $mk$.",
  "Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, ide o {@3}. (Ekvivalentne $\\delta = \\frac{c}{2m} = {@4}$ a $\\omega_0 = \\sqrt{k/m} = {@5}$.)": "Decide o sinal do discriminante da equação característica, ou seja, a comparação entre $c^{2}$ e $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, trata-se de {@3}. (Equivalentemente, $\\delta = \\frac{c}{2m} = {@4}$ e $\\omega_0 = \\sqrt{k/m} = {@5}$.)",
  "Rozlož $F$ na parciálne zlomky $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ a urči $A$.": "Decomponha $F$ em frações parciais $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ e determine $A$.",
  "Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.": "Fatore o denominador como o produto $(s - a)(s - b)$ e decomponha $F$ em frações parciais $\\frac{A}{s-a} + \\frac{B}{s-b}$; então $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.",
  "Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.": "O decaimento é regido pela equação $m' = -km$, logo $m(t) = m_0\\mathrm{e}^{-kt}$ com $k = \\frac{\\ln 2}{T}$, ou seja, $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.",
  "Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená. Najvyššia derivácia v rovnici je {@0}, rovnica je teda <strong>{@1}. rádu</strong>.": "A ordem é determinada pela derivada mais alta que aparece na equação, e não pela potência à qual a derivada está elevada. A derivada mais alta na equação é {@0}, logo a equação é <strong>de {@1}ª ordem</strong>.",
  "Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou": "Esquema da resolução de um problema de valor inicial pela transformada de Laplace",
  "Sedlo vzniká len pri zápornom determinante (reálne vlastné čísla s opačnými znamienkami). Prepočítaj $\\det A$.": "Uma sela surge só com determinante negativo (autovalores reais de sinais opostos). Recalcule $\\det A$.",
  "Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Integrálna krivka prechádzajúca bodom $[{@4}; {@5}]$ má v ňom dotyčnicu so smernicou ${@6}$.": "A inclinação do campo no ponto $[x; y]$ é o valor do lado direito $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. A curva integral que passa pelo ponto $[{@4}; {@5}]$ tem nele uma tangente de inclinação ${@6}$.",
  "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)": "Campo de direções da equação homogênea y' = (x + y)/(x − y)",
  "Smerové pole rovnice y' = x − y s integrálnou krivkou": "Campo de direções da equação y' = x − y com uma curva integral",
  "Stabilitu určuje znamienko stopy $\\mathrm{tr}\\,A$ (súčtu, resp. dvojnásobku reálnej časti vlastných čísel). Over ho.": "A estabilidade é determinada pelo sinal do traço $\\mathrm{tr}\\,A$ (a soma, ou o dobro da parte real, dos autovalores). Verifique-o.",
  "Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, teda $-\\frac{1}{y} = {@1} + C$. Z podmienky $C = {@2}$. Odtiaľ $y = \\frac{{@3}}{1{@4}}$, čo je na intervale $\\langle 0; {@5}\\rangle$ definované (menovateľ je tam kladný). Dosadením $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.": "A solução estacionária $y = 0$ não satisfaz a condição. Para $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, logo $-\\frac{1}{y} = {@1} + C$. Da condição, $C = {@2}$. Daí $y = \\frac{{@3}}{1{@4}}$, que está definida no intervalo $\\langle 0; {@5}\\rangle$ (o denominador é positivo ali). Substituindo, $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.",
  "Stred nastáva len pri nulovej stope; inak sa trajektórie k bodu približujú alebo sa od neho vzďaľujú.": "Um centro ocorre só com traço nulo; caso contrário, as trajetórias se aproximam do ponto ou se afastam dele.",
  "Substitúcia je $z = y^{1-n}$, nie $y^{n-1}$: exponent má odstrániť mocninu $y^{n}$ po vydelení rovnice.": "A substituição é $z = y^{1-n}$, e não $y^{n-1}$: o expoente deve eliminar a potência $y^{n}$ após a divisão da equação.",
  "Sústava {@0} má začiatočnú podmienku $x(0) = {@1}$, $y(0) = {@2}$. Riešenie zapíšeme v tvare $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$ a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.": "O sistema {@0} tem a condição inicial $x(0) = {@1}$, $y(0) = {@2}$. Escrevemos a solução na forma $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, em que $\\lambda_1 \\gt \\lambda_2$ e os autovetores têm primeira componente $1$. Determine $C_1$ e $C_2$.",
  "Sčítaj: $F({@0}) = ?$": "Some: $F({@0}) = ?$",
  "Teleso s hmotnosťou ${@0}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou ${@1}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? {@2}": "Um corpo de massa ${@0}\\,\\mathrm{kg}$ oscila sem amortecimento em uma mola de rigidez ${@1}\\,\\mathrm{N/m}$. Qual é o período das oscilações em segundos? {@2}",
  "Teleso s teplotou ${@0}{@1}$ položíme do miestnosti s teplotou ${@2}{@3}$. Po ${@4}$ minútach má teplotu ${@5}{@6}$.": "Um corpo à temperatura de ${@0}{@1}$ é colocado em uma sala à temperatura de ${@2}{@3}$. Após ${@4}$ minutos, a sua temperatura é ${@5}{@6}$.",
  "Tlmený harmonický oscilátor": "Oscilador harmônico amortecido",
  "Tlmený oscilátor sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. {@3}": "Um oscilador amortecido é regido pela equação ${@0}x'' + {@1}x' + {@2}x = 0$. Determine a frequência angular $\\omega_d$ das suas oscilações amortecidas. {@3}",
  "Toto je exponent (mocnina), nie rád derivácie. Rád určuje najvyššia derivácia, ktorá sa v rovnici vyskytuje.": "Isso é um expoente (potência), e não a ordem da derivada. A ordem é determinada pela derivada mais alta que aparece na equação.",
  "Toto je vlastná frekvencia netlmeného oscilátora $\\omega_0$. Tlmenie frekvenciu znižuje: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Essa é a frequência natural do oscilador não amortecido, $\\omega_0$. O amortecimento diminui a frequência: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Toto je vybíjanie kondenzátora. Pri nabíjaní napätie rastie od nuly k $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Isso é a descarga do capacitor. Na carga, a tensão cresce de zero até $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Transformuj rovnicu ($\\mathcal{L}\\{y'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.": "Transforme a equação ($\\mathcal{L}\\{y'\\} = sY - y(0)$), isole $Y(s)$ e decomponha-a em frações parciais.",
  "Transformáciou: $sY{@0}{@1} = {@2}$, teda $Y = {@3}{@4}$. Rozklad: ${@5} = {@6}{@7}$. Spätnou transformáciou $y = ({@8}{@9}){@10}{@11}$, teda $A = {@12}$, $B = {@13}$.": "Transformando: $sY{@0}{@1} = {@2}$, logo $Y = {@3}{@4}$. Decomposição: ${@5} = {@6}{@7}$. Pela transformada inversa, $y = ({@8}{@9}){@10}{@11}$, logo $A = {@12}$, $B = {@13}$.",
  "Tu $n = {@0}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - {@1} = {@2}$. Vydelením rovnice $y^{{@3}}$ dostaneme $y^{-n}y'{@4} = {@5}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = {@6}$ máme $z'{@7} = {@8}$. Teda $P = (1-n)p = {@9}$ a $Q = (1-n)q = {@10}$.": "Aqui $n = {@0}$, a substituição é $z = y^{1-n}$, logo $k = 1 - {@1} = {@2}$. Dividindo a equação por $y^{{@3}}$, obtemos $y^{-n}y'{@4} = {@5}$. Como $z' = (1-n)y^{-n}y'$, após multiplicar a equação por $1 - n = {@6}$ temos $z'{@7} = {@8}$. Logo, $P = (1-n)p = {@9}$ e $Q = (1-n)q = {@10}$.",
  "Tvar $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ patrí len dvojnásobnému koreňu ($D = 0$). Aký je tu diskriminant?": "A forma $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ corresponde só a uma raiz dupla ($D = 0$). Qual é o discriminante aqui?",
  "Urči $A$ (zlomok alebo celé číslo).": "Determine $A$ (fração ou número inteiro).",
  "Urči $A$.": "Determine $A$.",
  "Urči $C = F({@0}, {@1})$.": "Determine $C = F({@0}, {@1})$.",
  "Urči $C_1$ v riešení $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.": "Determine $C_1$ na solução $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.",
  "Urči $C_2$ (zlomok alebo celé číslo).": "Determine $C_2$ (fração ou número inteiro).",
  "Urči $C_2$.": "Determine $C_2$.",
  "Urči $\\omega_0^{2}$.": "Determine $\\omega_0^{2}$.",
  "Urči $\\omega_d$. {@0}": "Determine $\\omega_d$. {@0}",
  "Urči $\\varphi(y)$ s $\\varphi(0) = 0$ z podmienky $F_y = N$ a vypočítaj $\\varphi({@0})$.": "Determine $\\varphi(y)$ com $\\varphi(0) = 0$ pela condição $F_y = N$ e calcule $\\varphi({@0})$.",
  "Urči $y({@0})$ (znamienko podľa začiatočnej podmienky).": "Determine $y({@0})$ (o sinal de acordo com a condição inicial).",
  "Urči amplitúdu kmitov. {@0}": "Determine a amplitude das oscilações. {@0}",
  "Urči exponent $k$ v substitúcii $z = y^{k}$ (zlomok v tvare $a/b$).": "Determine o expoente $k$ na substituição $z = y^{k}$ (fração na forma $a/b$).",
  "Urči exponent $m$.": "Determine o expoente $m$.",
  "Urči hodnotu exponentu $G({@0})$, kde $G(x) = \\int_0^x g(t)\\,dt$. {@1}": "Determine o valor do expoente $G({@0})$, em que $G(x) = \\int_0^x g(t)\\,dt$. {@1}",
  "Urči koeficient $P$ pri $z$.": "Determine o coeficiente $P$ de $z$.",
  "Urči konštantu $A$ v riešení $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.": "Determine a constante $A$ na solução $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.",
  "Urči oba korene (oddelené bodkočiarkou).": "Determine as duas raízes (separadas por ponto e vírgula).",
  "Urči pravú stranu $Q$.": "Determine o lado direito $Q$.",
  "Urči rád diferenciálnej rovnice ${@0}$.": "Determine a ordem da equação diferencial ${@0}$.",
  "Urči typ rovnovážneho bodu $[0; 0]$ sústavy {@0}.": "Determine o tipo do ponto de equilíbrio $[0; 0]$ do sistema {@0}.",
  "Urči väčšie vlastné číslo $\\lambda_1$.": "Determine o maior autovalor $\\lambda_1$.",
  "V akom tvare treba hľadať partikulárne riešenie rovnice ${@0} = {@1}$ metódou neurčitých koeficientov?": "Em que forma deve ser procurada a solução particular da equação ${@0} = {@1}$ pelo método dos coeficientes a determinar?",
  "V čitateli sú členy rôznych stupňov ($x^{2}$ je stupňa 2, $y$ stupňa 1), takže sa $t$ po dosadení nevykráti.": "No numerador há termos de graus diferentes ($x^{2}$ é de grau 2, $y$ de grau 1), então o $t$ não se cancela após a substituição.",
  "Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.": "Os autovalores de uma matriz $2\\times 2$ são as raízes da equação $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.",
  "Vlastné čísla sú komplexné s reálnou časťou ${@0}$: {@1}.": "Os autovalores são complexos com parte real ${@0}$: {@1}.",
  "Vlastné čísla sú reálne s rovnakým znamienkom (súčin ${@0} \\gt 0$), ich súčet je ${@1}$: {@2}.": "Os autovalores são reais e de mesmo sinal (produto ${@0} \\gt 0$), e a sua soma é ${@1}$: {@2}.",
  "Vlastné čísla sú rýdzo imaginárne: stred.": "Os autovalores são imaginários puros: centro.",
  "Vlastný vektor k $\\lambda_1$ má tvar $(1, m_1)^{T}$. Urči $m_1$.": "O autovetor associado a $\\lambda_1$ tem a forma $(1, m_1)^{T}$. Determine $m_1$.",
  "Vlastný vektor k $\\lambda_2$ má tvar $(1, m_2)^{T}$. Urči $m_2$.": "O autovetor associado a $\\lambda_2$ tem a forma $(1, m_2)^{T}$. Determine $m_2$.",
  "Vrstevnice funkcie F(x, y) = x² − xy + y²": "Curvas de nível da função F(x, y) = x² − xy + y²",
  "Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.": "Divida a equação por $x$ e use o fator integrante $\\mu = \\mathrm{e}^{\\int p\\,dx}$; para $p = \\frac{n}{x}$, $\\mu = x^{n}$.",
  "Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.": "Divida a equação por $x^{2}$, substitua $y = ux$ e separe as variáveis, $\\frac{du}{u^{2}} = \\frac{dx}{x}$.",
  "Vydeľ rovnicu výrazom $xy$, dostaneš $y' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.": "Divida a equação por $xy$; você obtém $y' = \\frac{y}{x} + k\\frac{x}{y}$. Depois use a substituição $y = ux$.",
  "Vyjadri $y$ a vypočítaj $y({@0})$ (zlomok alebo celé číslo).": "Isole $y$ e calcule $y({@0})$ (fração ou número inteiro).",
  "Vyjadril si $\\frac{C}{{@0}}$, ale nie samotné $C$: rovnicu ešte vynásob číslom ${@1}$.": "Você isolou $\\frac{C}{{@0}}$, mas não o próprio $C$: multiplique ainda a equação por ${@1}$.",
  "Vypočítaj $M_y - N_x$.": "Calcule $M_y - N_x$.",
  "Vypočítaj $W(0)$, teda hodnotu $K$.": "Calcule $W(0)$, ou seja, o valor de $K$.",
  "Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.": "Calcule $\\frac{M_y - N_x}{N}$. Se resultar $\\frac{k}{x}$, o fator integrante é $\\mathrm{e}^{k\\ln x} = x^{k}$.",
  "Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.": "Calcule $\\frac{\\partial M}{\\partial y}$ e $\\frac{\\partial N}{\\partial x}$ e compare os coeficientes das mesmas potências.",
  "Vypočítaj $\\mathrm{e}^{-{@0}k}$. Zaokrúhli na 4 desatinné miesta.": "Calcule $\\mathrm{e}^{-{@0}k}$. Arredonde para 4 casas decimais.",
  "Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Calcule $\\tau = RC$ (quilo-ohms vezes microfarads dão milissegundos) e substitua em $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Vypočítaj $u({@0})$. {@1}": "Calcule $u({@0})$. {@1}",
  "Vypočítaj $y(2)$ (zlomok alebo desatinné číslo).": "Calcule $y(2)$ (fração ou número decimal).",
  "Vypočítaj $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}": "Calcule $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}",
  "Vypočítaj $y({@0})$. {@1}": "Calcule $y({@0})$. {@1}",
  "Vypočítaj determinant $\\det A$.": "Calcule o determinante $\\det A$.",
  "Vypočítaj obraz exponenciálneho člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Calcule a transformada do termo exponencial ${@0}$ no ponto $s = {@1}$ (fração).",
  "Vypočítaj obraz goniometrického člena v bode $s = {@0}$ (zlomok).": "Calcule a transformada do termo trigonométrico no ponto $s = {@0}$ (fração).",
  "Vypočítaj obraz člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Calcule a transformada do termo ${@0}$ no ponto $s = {@1}$ (fração).",
  "Vypočítaj periódu kmitov v sekundách. {@0}": "Calcule o período das oscilações em segundos. {@0}",
  "Vypočítaj stopu matice sústavy $\\mathrm{tr}\\,A$.": "Calcule o traço da matriz do sistema, $\\mathrm{tr}\\,A$.",
  "Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.": "Calcule o traço, o determinante e o discriminante $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ e use a tabela da teoria.",
  "Vypočítaj vlastnú uhlovú frekvenciu $\\omega_0$ (v $\\mathrm{s^{-1}}$). Zaokrúhli na 3 desatinné miesta.": "Calcule a frequência angular natural $\\omega_0$ (em $\\mathrm{s^{-1}}$). Arredonde para 3 casas decimais.",
  "Vypočítaj časovú konštantu $\\tau = RC$ v milisekundách.": "Calcule a constante de tempo $\\tau = RC$ em milissegundos.",
  "Vypočítal si $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Você calculou $u = \\frac{y}{x}$, e não $y$. Não se esqueça de desfazer a substituição, $y = ux$.",
  "Vypočítal si hodnotu $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Você calculou o valor de $u = \\frac{y}{x}$, e não de $y$. Não se esqueça de desfazer a substituição, $y = ux$.",
  "Vypočítal si hodnotu pomocnej funkcie $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Você calculou o valor da função auxiliar $u = \\frac{y}{x}$, e não de $y$. Não se esqueça de desfazer a substituição, $y = ux$.",
  "Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.": "Resolva $1 - \\mathrm{e}^{-t/\\tau} = p$ em $t$: $t = -\\tau\\ln(1 - p)$.",
  "Vyrieš $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ a zadaj vlastné čísla (oddelené bodkočiarkou).": "Resolva $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ e digite os autovalores (separados por ponto e vírgula).",
  "Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pre $x \\gt 0$), a vypočítaj $y({@1})$. {@2}": "Resolva o problema de Cauchy $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (para $x \\gt 0$) e calcule $y({@1})$. {@2}",
  "Vyrieš Cauchyho úlohu $xy'{@0} = {@1}$, $y(1) = {@2}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).": "Resolva o problema de Cauchy $xy'{@0} = {@1}$, $y(1) = {@2}$, para $x \\gt 0$ e calcule $y(2)$. Digite o resultado exato (fração ou número decimal).",
  "Vyrieš Cauchyho úlohu $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Resolva o problema de Cauchy $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (para $x \\gt 0$) e calcule $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. Výsledok zadaj ako zlomok alebo celé číslo.": "Resolva o problema de Cauchy $y' = {@0}$, $y(0) = {@1}$ e calcule $y({@2})$. Digite o resultado como fração ou número inteiro.",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. {@3}": "Resolva o problema de Cauchy $y' = {@0}$, $y(0) = {@1}$ e calcule $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $yy' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$.": "Resolva o problema de Cauchy $yy' = {@0}$, $y(0) = {@1}$ e calcule $y({@2})$.",
  "Vyrieš Cauchyho úlohu ${@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Resolva o problema de Cauchy ${@0}$, $y(1) = {@1}$ (para $x \\gt 0$) e calcule $y({@2})$. {@3}",
  "Vyrieš sústavu a urči $A$.": "Resolva o sistema e determine $A$.",
  "Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.": "Use $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ e isole $y$.",
  "Výraz $\\frac{M_y - N_x}{N}$ má tvar $\\frac{k}{x}$. Urči $k$.": "A expressão $\\frac{M_y - N_x}{N}$ tem a forma $\\frac{k}{x}$. Determine $k$.",
  "Výraz $\\sqrt{m/k}$ je $\\frac{1}{\\omega_0}$; perióda je ešte $2\\pi$-krát väčšia.": "A expressão $\\sqrt{m/k}$ é $\\frac{1}{\\omega_0}$; o período é ainda $2\\pi$ vezes maior.",
  "Všeobecné riešenie rovnice $xy' + y ={@0}$ na intervale, ktorý neobsahuje nulu, je $y = {@1} + \\frac{C}{x}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$.": "A solução geral da equação $xy' + y ={@0}$ em um intervalo que não contém o zero é $y = {@1} + \\frac{C}{x}$. Determine $C$ para a condição inicial $y({@2}) = {@3}$.",
  "Všeobecné riešenie rovnice $xy' = 2y{@0}$ je $y = Cx^{2}{@1}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$. Výsledok zadaj ako celé číslo alebo zlomok.": "A solução geral da equação $xy' = 2y{@0}$ é $y = Cx^{2}{@1}$. Determine $C$ para a condição inicial $y({@2}) = {@3}$. Digite o resultado como número inteiro ou fração.",
  "Všeobecné riešenie rovnice $y' = {@0}{@1}$ je $y = C{@2}{@3}$. Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = {@4}$.": "A solução geral da equação $y' = {@0}{@1}$ é $y = C{@2}{@3}$. Determine a constante $C$ de modo que a solução satisfaça a condição inicial $y(0) = {@4}$.",
  "Wronskián je $W = y_1y_2' - y_1'y_2$; poradie členov rozhoduje o znamienku $K$.": "O wronskiano é $W = y_1y_2' - y_1'y_2$; a ordem dos termos decide o sinal de $K$.",
  "Wronskián je súčinom dvoch funkcií s činiteľom $\\mathrm{e}^{\\alpha x}$, preto má v exponente $2\\alpha$.": "O wronskiano é um produto de duas funções com o fator $\\mathrm{e}^{\\alpha x}$, por isso tem $2\\alpha$ no expoente.",
  "Y(s) vyjadrené": "Y(s) isolada",
  "Z merania urči konštantu $k$ v $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Zaokrúhli na 4 desatinné miesta.": "Pela medição, determine a constante $k$ em $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Arredonde para 4 casas decimais.",
  "Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.": "A cada meia-vida, a quantidade cai à metade: $m(t) = m_0\\cdot 2^{-t/T}$.",
  "Za koľko milisekúnd dosiahne napätie požadovanú hodnotu? {@0}": "Em quantos milissegundos a tensão atinge o valor desejado? {@0}",
  "Za koľko minút klesne teplota na požadovanú hodnotu? Zaokrúhli na desatiny minúty.": "Em quantos minutos a temperatura cai para o valor desejado? Arredonde para décimos de minuto.",
  "Za koľko rokov dosiahne populácia polovicu nosnej kapacity? {@0}": "Em quantos anos a população atinge a metade da capacidade de suporte? {@0}",
  "Zabudol si na druhú deriváciu: $y_p'' = -{@0}y_p$, takže koeficient pri $A$ v rovnici pre kosínus je $q - {@1}$.": "Você esqueceu a derivada segunda: $y_p'' = -{@0}y_p$, então o coeficiente de $A$ na equação do cosseno é $q - {@1}$.",
  "Zabudol si na funkciu $\\varphi(y)$: po integrovaní $M$ podľa $x$ ju treba dourčiť z podmienky $F_y = N$.": "Você esqueceu a função $\\varphi(y)$: após integrar $M$ em relação a $x$, é preciso determiná-la pela condição $F_y = N$.",
  "Zabudol si na konštantný člen ${@0}$ vo všeobecnom riešení; najprv ho prenes na druhú stranu.": "Você esqueceu o termo constante ${@0}$ na solução geral; primeiro passe-o para o outro lado.",
  "Zabudol si na konštantu $C$: zo začiatočnej podmienky $y(0)$ vyjde $C$, ktorým treba exponenciálu vynásobiť.": "Você esqueceu a constante $C$: da condição inicial $y(0)$ resulta $C$, pelo qual a exponencial deve ser multiplicada.",
  "Zabudol si na prítok soli $cq$: bez neho by soľ z nádrže len ubúdala. Riešenie sa blíži k rovnovážnej hodnote $cV$.": "Você esqueceu a entrada de sal $cq$: sem ela, o sal no tanque só diminuiria. A solução se aproxima do valor de equilíbrio $cV$.",
  "Zabudol si na začiatočnú podmienku: $\\mathcal{L}\\{y'\\} = sY - y(0)$, takže v $Y(s)$ je aj člen $\\frac{y(0)}{s - a}$.": "Você esqueceu a condição inicial: $\\mathcal{L}\\{y'\\} = sY - y(0)$, então em $Y(s)$ aparece também o termo $\\frac{y(0)}{s - a}$.",
  "Zakry činiteľ $s{@0}$ a dosaď $s = {@1}$.": "Cubra o fator $s{@0}$ e substitua $s = {@1}$.",
  "Zamenil si hmotnosť a tuhosť: $\\omega_0 = \\sqrt{k/m}$, a perióda je $\\frac{2\\pi}{\\omega_0}$, nie $2\\pi\\omega_0$.": "Você trocou a massa e a rigidez: $\\omega_0 = \\sqrt{k/m}$, e o período é $\\frac{2\\pi}{\\omega_0}$, e não $2\\pi\\omega_0$.",
  "Zamenil si obrazy: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ a $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.": "Você trocou as transformadas: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ e $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.",
  "Zamenil si súradnice: v bode $[x; y]$ je prvá súradnica $x$ a druhá $y$. Dosaď ich do $f(x, y)$ na správne miesta.": "Você trocou as coordenadas: no ponto $[x; y]$, a primeira coordenada é $x$ e a segunda é $y$. Substitua-as em $f(x, y)$ nos lugares certos.",
  "Zameň $y''$ za $\\lambda^{2}$, $y'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.": "Troque $y''$ por $\\lambda^{2}$, $y'$ por $\\lambda$ e $y$ por $1$ e resolva a equação do segundo grau.",
  "Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.": "Escreva a solução como $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, determine as constantes pelas condições; a amplitude é $\\sqrt{C_1^{2} + C_2^{2}}$.",
  "Zapíš rovnicu v tvare $y' = \\frac{y}{x} + a$, dosaď $y = ux$, $y' = u + xu'$ a integruj.": "Escreva a equação na forma $y' = \\frac{y}{x} + a$, substitua $y = ux$, $y' = u + xu'$ e integre.",
  "Začiatočná hodnota y(0)": "Valor inicial y(0)",
  "Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.": "Derive $x_p$ duas vezes (produto de $t$ por uma função trigonométrica) e substitua. Para $\\omega = \\omega_0$, resta apenas o termo sem $t$.",
  "Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y'$ a vyrieš sústavu dvoch lineárnych rovníc.": "Derive a solução geral, substitua $x = 0$ em $y$ e em $y'$ e resolva o sistema de duas equações lineares.",
  "Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.": "Descubra quantas vezes o número $\\alpha$ do expoente do lado direito é raiz da equação característica e multiplique a forma básica por $x$ esse número de vezes.",
  "Zo začiatočnej podmienky urči $B$.": "Determine $B$ pela condição inicial.",
  "Zostav bilanciu $x' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.": "Monte o balanço $x' = (\\text{entrada de substância}) - (\\text{saída de substância}) = cq - \\frac{q}{V}x$ e resolva a equação linear.",
  "Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.": "Monte a equação característica, determine o tipo das raízes pelo discriminante e use a forma de solução correspondente.",
  "Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).": "$A$ negativo significa que as oscilações estão em oposição de fase com a força externa (a frequência de excitação é maior que a natural).",
  "absolútnom člene": "termos constantes",
  "algebra": "álgebra",
  "algebraická rovnica": "equação algébrica",
  "axy": "axy",
  "axy - x": "axy - x",
  "druhá": "a segunda",
  "dvojnásobný koreň ${@0}$": "a raiz dupla ${@0}$",
  "je dvojnásobným koreňom": "é raiz dupla",
  "je jednoduchým koreňom": "é raiz simples",
  "k = 0: veličina sa nemení": "k = 0: a grandeza não muda",
  "konštanta": "uma constante",
  "korene ${@0}$ a ${@1}$": "as raízes ${@0}$ e ${@1}$",
  "kritické tlmenie": "amortecimento crítico",
  "kritické tlmenie: najrýchlejší návrat bez kmitov": "amortecimento crítico: retorno mais rápido sem oscilações",
  "krát ${@0}$": "vezes ${@0}$",
  "litre": "litros",
  "litrov": "litros",
  "logistická krivka s K = {@0}": "curva logística com K = {@0}",
  "nadkritické tlmenie (aperiodický pohyb)": "amortecimento supercrítico (movimento aperiódico)",
  "nadkritické tlmenie: aperiodický pohyb": "amortecimento supercrítico: movimento aperiódico",
  "neizolovaný rovnovážny bod (det A = 0)": "ponto de equilíbrio não isolado (det A = 0)",
  "nestabilné ohnisko": "foco instável",
  "nestabilný degenerovaný uzol": "nó degenerado instável",
  "nestabilný uzol": "nó instável",
  "netlmené kmity, ω₀ = 2": "oscilações não amortecidas, ω₀ = 2",
  "nie je koreňom": "não é raiz",
  "po vydelení číslom ${@0}$": "após dividir por ${@0}$,",
  "podkritické tlmenie (tlmené kmity)": "amortecimento subcrítico (oscilações amortecidas)",
  "podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = {@0}": "amortecimento subcrítico: oscilações amortecidas, ω<sub>d</sub> = {@0}",
  "polynóm 1. stupňa": "um polinômio de 1º grau",
  "polčas ln 2 / |k| = {@0}": "meia-vida ln 2 / |k| = {@0}",
  "pre obraz Y(s)": "para a transformada Y(s)",
  "prvá": "a primeira",
  "riešenie y(t)": "solução y(t)",
  "rovnica pre y(t)": "equação para y(t)",
  "rozklad na parciálne zlomky": "decomposição em frações parciais",
  "roztok s koncentráciou ${@0}\\,\\mathrm{kg/l}$ {@1}": "uma solução com concentração ${@0}\\,\\mathrm{kg/l}$ {@1}",
  "roztoku, v ktorom je ${@0}\\,\\mathrm{kg}$ soli": "de uma solução com ${@0}\\,\\mathrm{kg}$ de sal",
  "rýchlosťou ${@0}$ {@1} za minútu": "a uma vazão de ${@0}$ {@1} por minuto",
  "sedlo": "sela",
  "stabilné ohnisko": "foco estável",
  "stabilný uzol": "nó estável",
  "tabuľka obrazov": "tabela de transformadas",
  "tretia": "a terceira",
  "začiatočná úloha": "problema de valor inicial",
  "{@0} $y_p'' = -{@1}y_p$ a $y_p' = {@2}(-A{@3} + B{@4})$. Po dosadení porovnáme koeficienty: pri ${@5}$: ${@6} = {@7}$, pri ${@8}$: ${@9} = {@10}$. Riešenie sústavy je $A = {@11}$, $B = {@12}$.": "{@0} $y_p'' = -{@1}y_p$ e $y_p' = {@2}(-A{@3} + B{@4})$. Após a substituição, comparamos os coeficientes: de ${@5}$: ${@6} = {@7}$; de ${@8}$: ${@9} = {@10}$. A solução do sistema é $A = {@11}$, $B = {@12}$.",
  "{@0} Aké napätie bude na kondenzátore ${@1}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.": "{@0} Qual será a tensão no capacitor ${@1}\\,\\mathrm{ms}$ após ligar o circuito? Arredonde o resultado em volts para 2 casas decimais.",
  "{@0} Akú teplotu bude mať ${@1}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.": "{@0} Qual será a sua temperatura ${@1}$ minutos após ser colocado na sala? Arredonde o resultado para décimos de grau.",
  "{@0} Koľko jedincov bude mať populácia po ${@1}$ rokoch? Výsledok zaokrúhli na celé číslo.": "{@0} Quantos indivíduos terá a população após ${@1}$ anos? Arredonde o resultado para um número inteiro.",
  "{@0} Za koľko milisekúnd dosiahne napätie na kondenzátore ${@1}\\,\\%$ napätia zdroja? {@2}": "{@0} Em quantos milissegundos a tensão no capacitor atinge ${@1}\\,\\%$ da tensão da fonte? {@2}",
  "{@0} Za koľko minút od položenia klesne teplota telesa na ${@1}{@2}$? Výsledok zaokrúhli na desatiny minúty.": "{@0} Em quantos minutos após ser colocado na sala a temperatura do corpo cai para ${@1}{@2}$? Arredonde o resultado para décimos de minuto.",
  "{@0} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? {@1}": "{@0} Em quantos anos ela atinge a metade da capacidade de suporte (quando cresce mais rápido)? {@1}",
  "{@0}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = {@1}$, $\\delta = {@2}$ a $\\omega_0^{2} = {@3}$. Korene charakteristickej rovnice sú $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, preto $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.": "{@0}Comparando com a forma $x'' + 2\\delta x' + \\omega_0^{2}x = 0$, temos $2\\delta = {@1}$, $\\delta = {@2}$ e $\\omega_0^{2} = {@3}$. As raízes da equação característica são $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, por isso $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.",
  "· riešením je priamka y = x − 1": "· a solução é a reta y = x − 1",
  "Časová konštanta $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.": "Constante de tempo $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, logo $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.",
  "Či sú vlastné čísla reálne (uzol) alebo komplexné (ohnisko, stred), rozhoduje znamienko diskriminantu $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.": "Se os autovalores são reais (nó) ou complexos (foco, centro), decide o sinal do discriminante $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.",
  "Člen $\\frac{y}{x}$ je v poriadku, ale druhý člen nezávisí len od podielu $\\frac{y}{x}$.": "O termo $\\frac{y}{x}$ está certo, mas o segundo termo não depende só do quociente $\\frac{y}{x}$.",
  "Člen $p\\,y'$ sa transformuje na $p(sY - y(0))$; po prenesení na pravú stranu dá $+p\\,y(0)$. Over znamienko.": "O termo $p\\,y'$ se transforma em $p(sY - y(0))$; passando para o lado direito, dá $+p\\,y(0)$. Confira o sinal.",
  "Číslo ${@0}$ nie je koreňom charakteristickej rovnice, lebo ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pre $y_p = A{@5}$ je $y_p' = {@6}A{@7}$ a $y_p'' = {@8}A{@9}$, po dosadení $A\\cdot {@10}\\,{@11} = {@12}{@13}$, teda $A = {@14}$.": "O número ${@0}$ não é raiz da equação característica, pois ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Para $y_p = A{@5}$, temos $y_p' = {@6}A{@7}$ e $y_p'' = {@8}A{@9}$; após a substituição, $A\\cdot {@10}\\,{@11} = {@12}{@13}$, logo $A = {@14}$.",
  "Číslo ${@0}$ z exponentu pravej strany je koreňom charakteristickej rovnice (rezonancia); koľkokrát treba tvar vynásobiť $x$?": "O número ${@0}$ do expoente do lado direito é raiz da equação característica (ressonância); quantas vezes é preciso multiplicar a forma por $x$?",
  "Číslo ${@0}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.": "O número ${@0}\\mathrm{i}$ não é raiz da equação característica; não se trata de ressonância.",
  "čas zdvojnásobenia ln 2 / k = {@0}": "tempo de duplicação ln 2 / k = {@0}",
  "čistej vody": "de água pura",
  "čistá voda {@0}": "água pura {@0}",
  "štvrtá": "a quarta",
  "λ = {@0} (dvojnásobný koreň)": "λ = {@0} (raiz dupla)",
  "λ = {@0} ± {@1}i (komplexné korene)": "λ = {@0} ± {@1}i (raízes complexas)",
  "λ₁ = {@0}, λ₂ = {@1} (rôzne reálne korene)": "λ₁ = {@0}, λ₂ = {@1} (raízes reais distintas)",
  "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pri ω = {@1}, amplitúda {@2}</span> (pre F₀/m = 1)": "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">máximo em ω = {@1}, amplitude {@2}</span> (para F₀/m = 1)",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Arredonde o resultado para 2 casas decimais.",
  "stred": "centro",
  "liter": "litro"
 }
});
