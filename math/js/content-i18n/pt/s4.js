/* Português: preklad js/rocniky/s4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/s4/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "s4-limita": {
   "title": "Limite de uma função",
   "summary": "De que valor se aproximam os valores da função, cálculo de limites do tipo 0/0 e limites no infinito.",
   "theory": [
    "<p>A notação $\\lim_{x\\to a} f(x) = L$ significa que os valores $f(x)$ ficam tão próximos quanto quisermos do número $L$ se tomarmos $x$ suficientemente próximo de $a$ (com $x\\neq a$).\n       O valor da função no próprio ponto $a$ <strong>não importa</strong> para o limite; a função nem precisa estar definida nele.\n       O limite existe se, e somente se, os <strong>limites laterais</strong> $\\lim_{x\\to a^-} f(x)$ e $\\lim_{x\\to a^+} f(x)$ forem iguais.</p>",
    {
     "fig": "s4-limita",
     "caption": "A função $f(x)=\\frac{\\sin x}{x}$ não está definida no ponto $0$ (bolinha vazia); mesmo assim, $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$. Diminua $h$ e observe os valores."
    },
    "<p><strong>Como calculamos limites:</strong></p>\n       <ul><li>Se $f$ é contínua no ponto $a$ (polinômio, $\\sin$, $\\mathrm{e}^x$ …), basta substituir: $\\lim_{x\\to a} f(x) = f(a)$.</li>\n       <li>Uma expressão do tipo $\\frac{0}{0}$ deve ser transformada: fatoramos e simplificamos, ou multiplicamos pelo conjugado da raiz para obter uma diferença de quadrados.</li>\n       <li>Limite fundamental: $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, por isso $\\lim_{x\\to 0}\\frac{\\sin kx}{x} = k$.</li>\n       <li>Uma expressão $\\frac{c}{0}$ com $c\\neq 0$ leva a um limite infinito $\\pm\\infty$; o sinal é determinado pelos limites laterais.</li></ul>",
    "<p><strong>Limite no infinito</strong> de uma função racional: dividimos o numerador e o denominador pela maior potência de $x$ do denominador.\n       Com graus iguais, o limite é o quociente dos coeficientes dominantes; se o numerador tem grau menor, o limite é $0$.\n       Por exemplo, $\\lim_{x\\to\\infty}\\frac{3x^2+1}{2x^2-x} = \\frac{3}{2}$. Se $\\lim_{x\\to\\pm\\infty} f(x) = q$, a reta $y=q$ é uma assíntota horizontal do gráfico.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3}$.",
     "steps": [
      "Substituindo, obtemos $\\frac{0}{0}$; portanto, é preciso transformar a expressão.",
      "Fatoramos o numerador: $x^2-9=(x-3)(x+3)$. Para $x\\neq 3$ simplificamos: $\\frac{(x-3)(x+3)}{x-3}=x+3$.",
      "$\\lim_{x\\to 3}(x+3)=6$.",
      "<strong>Resultado: 6</strong>"
     ]
    },
    {
     "task": "Calcule $\\lim_{x\\to\\infty}\\dfrac{4x^2-x+7}{2x^2+5}$.",
     "steps": [
      "Dividimos o numerador e o denominador por $x^2$: $\\dfrac{4-\\frac{1}{x}+\\frac{7}{x^2}}{2+\\frac{5}{x^2}}$.",
      "As frações $\\frac{1}{x}$, $\\frac{7}{x^2}$ e $\\frac{5}{x^2}$ tendem a zero quando $x\\to\\infty$.",
      "<strong>Resultado: $\\frac{4}{2}=2$</strong>"
     ]
    }
   ]
  },
  "s4-derivacie-funkcii": {
   "title": "Derivadas das funções elementares",
   "summary": "Derivada das funções exponencial, logarítmica e trigonométricas, do produto, do quociente e da função composta.",
   "theory": [
    "<p><strong>Derivadas das funções elementares:</strong></p>\n       <table class=\"tbl tbl-auto\">\n         <tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(x)$</th><th>$f'(x)$</th></tr>\n         <tr><td>$c$</td><td>$0$</td><td>$x^n$</td><td>$n\\,x^{n-1}$</td></tr>\n         <tr><td>$\\mathrm{e}^x$</td><td>$\\mathrm{e}^x$</td><td>$a^x$</td><td>$a^x\\ln a$</td></tr>\n         <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td>$\\log_a x$</td><td>$\\frac{1}{x\\ln a}$</td></tr>\n         <tr><td>$\\sin x$</td><td>$\\cos x$</td><td>$\\cos x$</td><td>$-\\sin x$</td></tr>\n         <tr><td>$\\mathrm{tg}\\,x$</td><td>$\\frac{1}{\\cos^2 x}$</td><td>$\\sqrt{x}$</td><td>$\\frac{1}{2\\sqrt{x}}$</td></tr>\n       </table>",
    "<p><strong>Regras:</strong> produto $(u\\cdot v)'=u'v+uv'$, quociente $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$ (para $v\\neq 0$),\n       função composta (regra da cadeia) $\\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x)$ — multiplicamos a derivada da função “externa” pela derivada da “interna”.\n       Por exemplo, $(\\sin 3x)'=3\\cos 3x$, $(\\mathrm{e}^{x^2})'=2x\\,\\mathrm{e}^{x^2}$, $\\big(\\ln(x^2+1)\\big)'=\\frac{2x}{x^2+1}$.</p>",
    {
     "fig": "s4-exp-ln",
     "caption": "Os gráficos de $y=\\mathrm{e}^x$ e $y=\\ln x$ são simétricos em relação à reta $y=x$. A reta tangente ao gráfico de $\\mathrm{e}^x$ no ponto $[0; 1]$ tem coeficiente angular $\\mathrm{e}^0=1$; a tangente ao gráfico de $\\ln x$ no ponto $[1; 0]$ tem coeficiente angular $\\frac{1}{1}=1$."
    },
    "<p>A <strong>reta tangente</strong> ao gráfico da função $f$ no ponto $[x_0; f(x_0)]$ tem a equação $y=f(x_0)+f'(x_0)(x-x_0)$.</p>"
   ],
   "examples": [
    {
     "task": "Derive $f(x)=x^2\\sin x$.",
     "steps": [
      "Trata-se do produto $u=x^2$, $v=\\sin x$, em que $u'=2x$ e $v'=\\cos x$.",
      "<strong>$f'(x)=2x\\sin x+x^2\\cos x$</strong>"
     ]
    },
    {
     "task": "Para $f(x)=\\ln(x^2+1)$, calcule $f'(1)$ e escreva a equação da reta tangente no ponto $x_0=1$.",
     "steps": [
      "Função composta: a externa, $\\ln u$, tem derivada $\\frac{1}{u}$; a interna, $u=x^2+1$, tem derivada $2x$.",
      "$f'(x)=\\frac{2x}{x^2+1}$, logo $f'(1)=\\frac{2}{2}=1$.",
      "$f(1)=\\ln 2$; reta tangente: $y=\\ln 2+1\\cdot(x-1)$, ou seja, $y=x-1+\\ln 2$."
     ]
    }
   ]
  },
  "s4-extremy": {
   "title": "Monotonia e extremos de uma função",
   "summary": "Sinal da derivada, pontos críticos, extremos locais e globais, problemas de otimização.",
   "theory": [
    "<p>Se $f'(x)&gt;0$ no intervalo $I$, a função $f$ é <strong>crescente</strong> nele; se $f'(x)&lt;0$, é <strong>decrescente</strong>.\n       Os pontos em que $f'(x)=0$ são chamados <strong>pontos críticos</strong> (estacionários). Uma função (derivável) só pode ter extremo local em um ponto crítico.</p>",
    {
     "fig": "s4-extremy",
     "caption": "Gráfico de $f(x)=x^3-3x$, $f'(x)=3x^2-3=3(x-1)(x+1)$. Partes verdes: $f'&gt;0$; parte laranja: $f'&lt;0$. No ponto $-1$ há um máximo local $2$, no ponto $1$ um mínimo local $-2$."
    },
    "<p><strong>Decisão sobre o extremo:</strong> se $f'$ muda de sinal de $+$ para $-$, o ponto é de <strong>máximo local</strong>; a mudança de $-$ para $+$ indica um <strong>mínimo local</strong>.\n       A segunda derivada serve igualmente bem: $f'(x_0)=0$ e $f''(x_0)&lt;0$ dá máximo; $f''(x_0)&gt;0$, mínimo.</p>",
    "<p><strong>Extremos globais em um intervalo fechado</strong> $\\langle a; b\\rangle$: comparamos os valores nos pontos críticos que estão no intervalo e nas extremidades $a$, $b$.\n       Assim também resolvemos <strong>problemas de otimização</strong>: expressamos a grandeza como função de uma variável e procuramos o seu maior ou menor valor.</p>"
   ],
   "examples": [
    {
     "task": "Encontre os extremos locais da função $f(x)=x^3-6x^2+9x+1$.",
     "steps": [
      "$f'(x)=3x^2-12x+9=3(x-1)(x-3)$; os pontos críticos são $1$ e $3$.",
      "Em $(-\\infty; 1)$, $f'&gt;0$; em $(1; 3)$, $f'&lt;0$; em $(3; \\infty)$, $f'&gt;0$.",
      "No ponto $1$ há um máximo local $f(1)=5$; no ponto $3$, um mínimo local $f(3)=1$."
     ]
    },
    {
     "task": "Com um arame de $40\\,\\text{cm}$ queremos dobrar um retângulo com a maior área possível. Quais são as suas dimensões?",
     "steps": [
      "Os lados são $x$ e $20-x$; a área é $S(x)=x(20-x)=20x-x^2$ para $x\\in(0; 20)$.",
      "$S'(x)=20-2x=0$ para $x=10$; $S''(x)=-2&lt;0$, trata-se de um máximo.",
      "<strong>A maior área é a do quadrado $10\\times 10\\,\\text{cm}$, $S=100\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "s4-priebeh": {
   "title": "Estudo de uma função e o seu gráfico",
   "summary": "Domínio, paridade, assíntotas, extremos, concavidade e pontos de inflexão.",
   "theory": [
    "<p>O <strong>estudo completo de uma função</strong> é feito em etapas:</p>\n       <ol><li>domínio $D(f)$ e, se for o caso, paridade ($f(-x)=f(x)$), imparidade ($f(-x)=-f(x)$) e periodicidade,</li>\n       <li>interseções do gráfico com os eixos e sinal da função,</li>\n       <li>limites nas extremidades de $D(f)$ e <strong>assíntotas</strong>,</li>\n       <li>$f'$: intervalos de monotonia e extremos locais,</li>\n       <li>$f''$: intervalos em que a função é <strong>convexa</strong> ($f''&gt;0$, concavidade para cima) ou <strong>côncava</strong> ($f''&lt;0$, concavidade para baixo), e os <strong>pontos de inflexão</strong>, em que a concavidade muda,</li>\n       <li>esboço do gráfico.</li></ol>",
    "<p><strong>Assíntotas:</strong> a reta $x=a$ é uma assíntota vertical se $f(x)$ tende a $\\pm\\infty$ quando $x\\to a^+$ ou $x\\to a^-$ (tipicamente um zero do denominador).\n       A reta $y=kx+q$ é uma assíntota oblíqua se $k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}$ e $q=\\lim_{x\\to\\pm\\infty}(f(x)-kx)$; para $k=0$ trata-se da assíntota horizontal $y=q$.\n       A função homográfica $f(x)=\\frac{ax+b}{cx+d}$ tem as assíntotas $x=-\\frac{d}{c}$ e $y=\\frac{a}{c}$.</p>",
    {
     "fig": "s4-asymptoty",
     "caption": "Gráfico de $f(x)=\\frac{2x+1}{x-1}=2+\\frac{3}{x-1}$ com as assíntotas $x=1$ e $y=2$. Os pontos verdes são as interseções com os eixos, $[-\\frac{1}{2}; 0]$ e $[0; -1]$. A função é decrescente em $(-\\infty; 1)$ e em $(1; \\infty)$."
    },
    "<p>Uma função convexa fica acima de cada uma das suas retas tangentes (o gráfico “segura água”); uma côncava fica abaixo delas.\n       Um polinômio do terceiro grau $ax^3+bx^2+cx+d$ sempre tem exatamente um ponto de inflexão, em $x=-\\frac{b}{3a}$.</p>"
   ],
   "examples": [
    {
     "task": "Encontre o ponto de inflexão da função $f(x)=x^3-3x^2+4$ e determine onde ela é convexa.",
     "steps": [
      "$f'(x)=3x^2-6x$, $f''(x)=6x-6$.",
      "$f''(x)=0$ para $x=1$; para $x&lt;1$, $f''&lt;0$; para $x&gt;1$, $f''&gt;0$.",
      "O ponto de inflexão é $[1; f(1)]=[1; 2]$; a função é convexa em $(1; \\infty)$ e côncava em $(-\\infty; 1)$."
     ]
    },
    {
     "task": "Verifique a paridade da função $f(x)=\\frac{x}{x^2+1}$ e determine a sua assíntota horizontal.",
     "steps": [
      "$D(f)=\\mathbb{R}$ é simétrico em relação ao zero e $f(-x)=\\frac{-x}{x^2+1}=-f(x)$; a função é ímpar (o gráfico é simétrico em relação à origem).",
      "O numerador tem grau menor que o denominador, portanto $\\lim_{x\\to\\pm\\infty}f(x)=0$.",
      "A assíntota horizontal é $y=0$ (o eixo $x$)."
     ]
    }
   ]
  },
  "s4-plocha": {
   "title": "Área de uma região e substituição na integral",
   "summary": "Área da região entre duas curvas, integrais das funções elementares e substituição linear.",
   "theory": [
    "<p>Se no intervalo $\\langle a; b\\rangle$ vale $f(x)\\le g(x)$, a área da região entre os gráficos é $S=\\int_a^b \\big(g(x)-f(x)\\big)\\,dx$ — “a de cima menos a de baixo”.\n       Os limites $a$, $b$ são normalmente as abscissas dos pontos de interseção dos gráficos, obtidas da equação $f(x)=g(x)$.\n       Se a função fica abaixo do eixo $x$, a sua integral definida é negativa, e a área é, portanto, o seu valor absoluto.</p>",
    {
     "fig": "s4-medzi-krivkami",
     "caption": "A reta $y=2x$ e a parábola $y=x^2$ se cortam nos pontos $x=0$ e $x=2$. A área da região é $\\int_0^2 (2x-x^2)\\,dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=\\frac{4}{3}$."
    },
    "<p><strong>Integrais das funções elementares:</strong> $\\int \\mathrm{e}^x\\,dx=\\mathrm{e}^x+c$, $\\int \\frac{1}{x}\\,dx=\\ln|x|+c$, $\\int \\sin x\\,dx=-\\cos x+c$, $\\int \\cos x\\,dx=\\sin x+c$.</p>",
    "<p><strong>Substituição linear:</strong> se $F$ é uma primitiva de $f$, então $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)+c$.\n       Por exemplo, $\\int (2x+1)^3\\,dx=\\frac{1}{2}\\cdot\\frac{(2x+1)^4}{4}+c$ ou $\\int \\cos 3x\\,dx=\\frac{1}{3}\\sin 3x+c$. Sempre verificamos o resultado derivando.</p>"
   ],
   "examples": [
    {
     "task": "Calcule a área da região limitada pela parábola $y=4-x^2$ e pelo eixo $x$.",
     "steps": [
      "Interseções com o eixo: $4-x^2=0$, logo $x=\\pm 2$. Entre elas, a parábola fica acima do eixo.",
      "$S=\\int_{-2}^{2}(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}=\\left(8-\\frac{8}{3}\\right)-\\left(-8+\\frac{8}{3}\\right)$.",
      "<strong>$S=16-\\frac{16}{3}=\\frac{32}{3}$</strong>"
     ]
    },
    {
     "task": "Calcule $\\int_0^{1} (2x+1)^2\\,dx$ por substituição.",
     "steps": [
      "Primitiva: $F(x)=\\frac{1}{2}\\cdot\\frac{(2x+1)^3}{3}=\\frac{(2x+1)^3}{6}$.",
      "$F(1)-F(0)=\\frac{27}{6}-\\frac{1}{6}=\\frac{26}{6}=\\frac{13}{3}$.",
      "Verificação desenvolvendo o quadrado: $\\int_0^1(4x^2+4x+1)\\,dx=\\frac{4}{3}+2+1=\\frac{13}{3}$ ✓"
     ]
    }
   ]
  },
  "s4-zlozene-inverzne": {
   "title": "Funções compostas e inversas",
   "summary": "Composição de funções, função injetora, cálculo da função inversa e simetria dos gráficos em relação à reta y = x.",
   "theory": [
    "<p>A <strong>função composta</strong> $f\\circ g$ é dada pela lei $(f\\circ g)(x)=f(g(x))$: primeiro aplicamos $g$ (a função interna) e, ao resultado, aplicamos $f$ (a externa).\n       A ordem importa; em geral, $f\\circ g\\neq g\\circ f$. Por exemplo, para $f(x)=x^2$, $g(x)=x+1$ temos $f(g(x))=(x+1)^2$, mas $g(f(x))=x^2+1$.</p>",
    "<p>Uma função é <strong>injetora</strong> se associa valores diferentes a valores diferentes de $x$ (cada reta horizontal corta o gráfico no máximo uma vez). Só uma função injetora tem\n       <strong>função inversa</strong> $f^{-1}$, para a qual vale $f^{-1}(y)=x \\Leftrightarrow f(x)=y$. Além disso, $D(f^{-1})=H(f)$ e $H(f^{-1})=D(f)$.</p>",
    "<p><strong>Como calcular</strong> $f^{-1}$: na equação $y=f(x)$ trocamos $x$ e $y$ e isolamos $y$. Para $f(x)=2x-6$: $x=2y-6$, logo $f^{-1}(x)=\\frac{x+6}{2}$.\n       Os gráficos de $f$ e $f^{-1}$ são simétricos em relação à reta $y=x$. Também são inversas entre si $a^x$ e $\\log_a x$, por isso $a^{\\log_a x}=x$ e $\\log_a a^x=x$.</p>",
    {
     "fig": "s4-inverzna",
     "caption": "Gráfico de $y=a^x$ (azul) e gráfico da função inversa $y=\\log_a x$ (verde). Cada ponto $[u; v]$ de um gráfico tem no outro gráfico a imagem $[v; u]$."
    }
   ],
   "examples": [
    {
     "task": "Dadas $f(x)=x^2-1$ e $g(x)=3x+2$, calcule $(f\\circ g)(1)$ e $(g\\circ f)(1)$.",
     "steps": [
      "$(f\\circ g)(1)=f(g(1))=f(5)=25-1=24$.",
      "$(g\\circ f)(1)=g(f(1))=g(0)=2$.",
      "Os resultados são diferentes — a composição de funções não é comutativa."
     ]
    },
    {
     "task": "Encontre a função inversa de $f(x)=\\frac{x+1}{x-2}$, $x\\neq 2$.",
     "steps": [
      "Trocamos as variáveis: $x=\\frac{y+1}{y-2}$.",
      "$x(y-2)=y+1 \\Rightarrow xy-y=2x+1 \\Rightarrow y(x-1)=2x+1$.",
      "<strong>$f^{-1}(x)=\\frac{2x+1}{x-1}$, $x\\neq 1$</strong> (a função $f$ não assume o valor $1$)."
     ]
    }
   ]
  },
  "s4-exp-log-rovnice": {
   "title": "Equações exponenciais e logarítmicas",
   "summary": "Substituição, equações com bases diferentes, aplicação de logaritmos e condições de existência.",
   "theory": [
    "<p><strong>Tipos básicos de equações exponenciais:</strong></p>\n       <ul><li>mesma base: $a^{f(x)}=a^{g(x)} \\Leftrightarrow f(x)=g(x)$ (para $a&gt;0$, $a\\neq 1$),</li>\n       <li><strong>substituição</strong>: reescrevemos $4^x-6\\cdot 2^x+8=0$ por meio de $t=2^x&gt;0$ como $t^2-6t+8=0$,</li>\n       <li><strong>bases diferentes</strong>: aplicamos o logaritmo aos dois membros, por exemplo $3^x=5 \\Rightarrow x=\\frac{\\ln 5}{\\ln 3}$; a equação $c\\cdot a^x=d\\cdot b^x$ é transformada em $\\left(\\frac{a}{b}\\right)^x=\\frac{d}{c}$.</li></ul>",
    "<p><strong>Equações logarítmicas:</strong> primeiro determinamos as condições de existência (o logaritmando deve ser positivo); depois usamos as regras\n       $\\log_a u+\\log_a v=\\log_a(uv)$, $\\log_a u-\\log_a v=\\log_a\\frac{u}{v}$, $k\\log_a u=\\log_a u^k$, e da igualdade $\\log_a u=c$ obtemos $u=a^c$.\n       Verificamos cada solução por substituição ou comparando com as condições — as transformações podem gerar raízes estranhas.</p>",
    "<p>Uma equação com a expressão $\\log_a x$ em diferentes potências é resolvida pela substituição $t=\\log_a x$: de $(\\log x)^2-3\\log x+2=0$ obtemos $t\\in\\{1; 2\\}$, ou seja, $x\\in\\{10; 100\\}$.\n       Atenção: $(\\log x)^2$ não é o mesmo que $\\log x^2=2\\log x$.</p>"
   ],
   "examples": [
    {
     "task": "Resolva a equação $9^x-4\\cdot 3^x+3=0$.",
     "steps": [
      "$9^x=(3^x)^2$; substituição $t=3^x&gt;0$: $t^2-4t+3=0$, logo $t_1=1$, $t_2=3$.",
      "$3^x=1 \\Rightarrow x=0$; $3^x=3 \\Rightarrow x=1$.",
      "<strong>$K=\\{0; 1\\}$</strong>"
     ]
    },
    {
     "task": "Resolva a equação $\\log_3(x+1)+\\log_3(x-1)=1$.",
     "steps": [
      "Condições: $x+1&gt;0$ e $x-1&gt;0$, logo $x&gt;1$.",
      "$\\log_3\\big((x+1)(x-1)\\big)=1 \\Rightarrow x^2-1=3 \\Rightarrow x=\\pm 2$.",
      "Só $x=2$ satisfaz a condição; descartamos a raiz $-2$.",
      "<strong>$K=\\{2\\}$</strong>"
     ]
    }
   ]
  },
  "s4-gonio-rovnice": {
   "title": "Equações trigonométricas",
   "summary": "Equações do 2º grau em seno ou cosseno, uso de fórmulas e solução geral.",
   "theory": [
    "<p>As <strong>equações básicas</strong> $\\sin x=a$, $\\cos x=a$ só têm solução para $a\\in\\langle -1; 1\\rangle$, e normalmente duas em cada período $2\\pi$.\n       Por exemplo, $\\sin x=\\frac{1}{2}$ tem em $\\langle 0; 2\\pi)$ as soluções $\\frac{\\pi}{6}$ e $\\frac{5\\pi}{6}$; em geral, $x=\\frac{\\pi}{6}+2k\\pi$ ou $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.\n       A equação $\\mathrm{tg}\\,x=a$ tem solução para todo $a$, e o seu período é $\\pi$: $x=x_0+k\\pi$.</p>",
    "<p>Resolvemos as <strong>equações do 2º grau</strong> em $\\sin x$ ou $\\cos x$ por substituição: $2\\sin^2 x-3\\sin x+1=0$ com $t=\\sin x$ dá $2t^2-3t+1=0$, ou seja, $t\\in\\{\\frac{1}{2}; 1\\}$.\n       Descartamos as raízes fora de $\\langle -1; 1\\rangle$.</p>",
    "<p><strong>Fórmulas úteis:</strong> $\\sin^2 x+\\cos^2 x=1$ (transforma a equação em uma só função), $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x=1-2\\sin^2 x$.\n       <strong>Colocamos o fator comum em evidência</strong> e nunca dividimos por ele — perderíamos as soluções em que ele se anula.</p>\n       <table class=\"tbl tbl-auto\"><tr><th>$x$</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th></tr>\n       <tr><td>$\\sin x$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$1$</td></tr>\n       <tr><td>$\\cos x$</td><td>$1$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr></table>"
   ],
   "examples": [
    {
     "task": "Resolva a equação $2\\cos^2 x+3\\sin x-3=0$ para $x\\in\\langle 0; 2\\pi)$.",
     "steps": [
      "$\\cos^2 x=1-\\sin^2 x$: $2-2\\sin^2 x+3\\sin x-3=0$, ou seja, $2\\sin^2 x-3\\sin x+1=0$.",
      "Substituição $t=\\sin x$: $2t^2-3t+1=0$, $t_1=1$, $t_2=\\frac{1}{2}$.",
      "$\\sin x=1 \\Rightarrow x=\\frac{\\pi}{2}$; $\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}$ ou $x=\\frac{5\\pi}{6}$.",
      "<strong>$K=\\left\\{\\frac{\\pi}{6}; \\frac{\\pi}{2}; \\frac{5\\pi}{6}\\right\\}$</strong>"
     ]
    },
    {
     "task": "Resolva a equação $\\sin 2x=\\cos x$ em $\\mathbb{R}$.",
     "steps": [
      "$2\\sin x\\cos x-\\cos x=0 \\Rightarrow \\cos x\\,(2\\sin x-1)=0$.",
      "$\\cos x=0 \\Rightarrow x=\\frac{\\pi}{2}+k\\pi$.",
      "$\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}+2k\\pi$ ou $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$."
     ]
    }
   ]
  },
  "s4-sustavy": {
   "title": "Sistemas de equações e de inequações",
   "summary": "Sistemas não lineares, interseções de curvas e sistemas de inequações com uma e com duas variáveis.",
   "theory": [
    "<p>Um <strong>sistema não linear</strong> é resolvido, na maioria das vezes, pelo <strong>método da substituição</strong>: da equação mais simples (linear) isolamos uma incógnita e a substituímos na outra.\n       As soluções são pares ordenados $[x; y]$; o seu número corresponde ao número de pontos de interseção dos gráficos das duas equações. O sistema $x+y=s$, $xy=p$ leva, pelas relações de Girard (soma e produto), à equação $t^2-st+p=0$.</p>",
    "<p><strong>Sistema de inequações com uma incógnita:</strong> resolvemos cada inequação separadamente, e o resultado é a <strong>interseção</strong> dos conjuntos solução.\n       Ao multiplicar ou dividir por um número negativo, o sinal da desigualdade se inverte.</p>",
    "<p>Um <strong>sistema de inequações lineares com duas incógnitas</strong> descreve uma parte do plano: cada inequação $y\\le kx+q$ é o semiplano abaixo da reta $y=kx+q$ (incluindo a reta).\n       A solução do sistema é a interseção dos semiplanos — muitas vezes um polígono.</p>",
    {
     "fig": "s4-oblast",
     "caption": "O sistema $y\\ge 0$, $y\\le x+2$, $y\\le -x+4$ descreve o triângulo de vértices $[-2; 0]$, $[4; 0]$ e $[1; 3]$. A sua área é $\\frac{6\\cdot 3}{2}=9$."
    }
   ],
   "examples": [
    {
     "task": "Resolva o sistema $x+y=7$, $x\\cdot y=10$.",
     "steps": [
      "Da primeira equação, $y=7-x$; substituindo: $x(7-x)=10 \\Rightarrow x^2-7x+10=0$.",
      "$x_1=2$, $x_2=5$, e correspondem a eles $y_1=5$, $y_2=2$.",
      "<strong>Soluções: $[2; 5]$ e $[5; 2]$</strong>"
     ]
    },
    {
     "task": "Resolva em $\\mathbb{R}$ o sistema de inequações $3x-2&gt;4$ e $5-x\\ge -1$.",
     "steps": [
      "$3x&gt;6 \\Rightarrow x&gt;2$.",
      "$-x\\ge -6 \\Rightarrow x\\le 6$ (a divisão por um número negativo inverte o sinal).",
      "<strong>$K=(2; 6\\rangle$</strong>; os números inteiros nele são $3, 4, 5, 6$."
     ]
    }
   ]
  },
  "s4-parametre": {
   "title": "Equações e sistemas com parâmetro",
   "summary": "Discussão do número de soluções conforme o parâmetro, equações do 2º grau e sistemas com parâmetro.",
   "theory": [
    "<p>Um <strong>parâmetro</strong> é uma letra que, na equação, representa um número fixo, mas qualquer. Resolvemos a equação para todos os seus valores ao mesmo tempo\n       e fazemos a <strong>discussão</strong>: para quais valores do parâmetro a equação tem uma, várias ou nenhuma solução.\n       Por exemplo, $px=3$ tem, para $p\\neq 0$, a única solução $x=\\frac{3}{p}$, e para $p=0$ não tem solução.</p>",
    "<p>A <strong>equação do 2º grau</strong> $ax^2+bx+c=0$ com $a\\neq 0$ tem duas raízes reais distintas para $D&gt;0$, uma raiz dupla para $D=0$ e nenhuma raiz real para $D&lt;0$.\n       Se uma raiz é conhecida, nós a substituímos e obtemos uma equação para o parâmetro; a segunda raiz é então calculada facilmente pelas relações de Girard $x_1+x_2=-\\frac{b}{a}$, $x_1x_2=\\frac{c}{a}$.\n       Se o coeficiente de $x^2$ contém o parâmetro, o caso $a=0$ (a equação é do 1º grau) deve ser analisado separadamente.</p>",
    "<p>O <strong>sistema de duas equações lineares</strong> $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$ tem exatamente uma solução quando $a_1b_2-a_2b_1\\neq 0$ (as retas são concorrentes).\n       Se $a_1b_2-a_2b_1=0$, as retas são paralelas: ou distintas (nenhuma solução) ou coincidentes (infinitas soluções).</p>"
   ],
   "examples": [
    {
     "task": "Para que valores do parâmetro $p$ a equação $x^2-4x+p=0$ tem duas raízes reais distintas?",
     "steps": [
      "$D=16-4p$.",
      "$D&gt;0 \\Leftrightarrow 16-4p&gt;0 \\Leftrightarrow p&lt;4$.",
      "<strong>Para $p\\in(-\\infty; 4)$</strong>; para $p=4$ há a raiz dupla $2$, e para $p&gt;4$ não há raízes reais."
     ]
    },
    {
     "task": "Para que valores de $m$ o sistema $mx+2y=4$, $2x+my=-4$ não tem solução?",
     "steps": [
      "Determinante $m\\cdot m-2\\cdot 2=m^2-4=0$ para $m=\\pm 2$; nos outros casos o sistema tem uma única solução.",
      "$m=2$: $2x+2y=4$ e $2x+2y=-4$ são retas paralelas distintas — nenhuma solução.",
      "$m=-2$: $-2x+2y=4$ e $2x-2y=-4$ são a mesma reta — infinitas soluções.",
      "<strong>O sistema não tem solução para $m=2$.</strong>"
     ]
    }
   ]
  },
  "s4-priamka-kruznica": {
   "title": "Reta e circunferência na geometria analítica",
   "summary": "Posição relativa entre reta e circunferência, pontos de interseção e reta tangente à circunferência.",
   "theory": [
    "<p>A circunferência de centro $S[m; n]$ e raio $r$ tem a equação $(x-m)^2+(y-n)^2=r^2$. Uma reta no plano tem a equação geral $ax+by+c=0$,\n       em que $\\vec{n}=(a; b)$ é o seu vetor normal. A distância do ponto $S[m; n]$ à reta é $d=\\dfrac{|am+bn+c|}{\\sqrt{a^2+b^2}}$.</p>",
    "<p><strong>Posição relativa:</strong> se $d&lt;r$, a reta é <strong>secante</strong> (2 pontos comuns); se $d=r$, é <strong>tangente</strong> (1 ponto); se $d&gt;r$, é <strong>exterior</strong>.\n       Podemos descobrir o mesmo algebricamente: substituindo a reta na equação da circunferência, obtemos uma equação do 2º grau, e o seu discriminante decide o número de pontos de interseção.</p>",
    {
     "fig": "s4-priamka-kruznica",
     "caption": "A circunferência $x^2+y^2=9$ e a reta $y=-0{,}75x+q$. Mova $q$: a reta é tangente exatamente para $q=\\pm 3{,}75$, quando a distância do centro é igual ao raio."
    },
    "<p>A <strong>reta tangente no ponto</strong> $T$ da circunferência é perpendicular ao raio $ST$; por isso o vetor $\\vec{ST}$ é o seu vetor normal.\n       Para a circunferência $x^2+y^2=r^2$ e o ponto $T[x_0; y_0]$ sobre ela, a tangente tem a equação $x_0x+y_0y=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Encontre os pontos de interseção da circunferência $x^2+y^2=25$ com a reta $x-y+1=0$.",
     "steps": [
      "Da equação da reta, $y=x+1$; substituindo: $x^2+(x+1)^2=25 \\Rightarrow 2x^2+2x-24=0 \\Rightarrow x^2+x-12=0$.",
      "$x_1=3$, $x_2=-4$, e correspondem a eles $y_1=4$, $y_2=-3$.",
      "<strong>Pontos de interseção: $[3; 4]$ e $[-4; -3]$</strong>"
     ]
    },
    {
     "task": "Escreva a equação da reta tangente à circunferência $(x-1)^2+(y+2)^2=25$ no ponto $T[4; 2]$.",
     "steps": [
      "Centro $S[1; -2]$; $\\vec{ST}=(3; 4)$ é o vetor normal da tangente: $3x+4y+c=0$.",
      "Substituímos $T$: $12+8+c=0$, logo $c=-20$.",
      "<strong>Reta tangente: $3x+4y-20=0$</strong>"
     ]
    }
   ]
  },
  "s4-polohy": {
   "title": "Posição relativa de pontos, retas e planos",
   "summary": "Retas paralelas, concorrentes e reversas, posição de reta e plano, de dois planos e a sua descrição analítica.",
   "theory": [
    "<p><strong>Duas retas no espaço</strong> são <strong>coincidentes</strong>, <strong>paralelas</strong> (estão em um mesmo plano e não têm ponto comum),\n       <strong>concorrentes</strong> (têm exatamente um ponto comum) ou <strong>reversas</strong> — não têm ponto comum e não estão em um mesmo plano.\n       No plano não existem retas reversas; no espaço, elas são comuns.</p>",
    {
     "fig": "s4-kocka",
     "caption": "Cubo $ABCDEFGH$. As retas $AB$ (azul) e $CG$ (verde) são reversas, e as retas $AB$ e $EG$ (laranja) também. As retas $CG$ e $EG$ são concorrentes e se cortam no ponto $G$."
    },
    "<p><strong>Reta e plano:</strong> a reta está contida no plano, é paralela a ele (não têm ponto comum) ou é secante (um ponto comum — o ponto de interseção).\n       Uma reta é paralela a um plano se for paralela a alguma reta desse plano. <strong>Dois planos</strong> são coincidentes, paralelos distintos ou secantes — neste caso, cortam-se segundo uma reta.</p>",
    "<p><strong>Analiticamente:</strong> a reta tem as equações paramétricas $X=A+t\\vec{u}$, $t\\in\\mathbb{R}$; o plano, a equação geral $ax+by+cz+d=0$ com vetor normal $\\vec{n}=(a; b; c)$.\n       Retas com vetores diretores múltiplos um do outro são paralelas ou coincidentes. A reta é paralela ao plano ou está contida nele se $\\vec{u}\\cdot\\vec{n}=0$.\n       Para cálculos no cubo de aresta $1$, escolhemos $A[0; 0; 0]$, $B[1; 0; 0]$, $D[0; 1; 0]$, $E[0; 0; 1]$.</p>"
   ],
   "examples": [
    {
     "task": "No cubo $ABCDEFGH$, determine a posição relativa das retas $BG$ e $AH$.",
     "steps": [
      "$\\vec{BG}=G-B=(0; 1; 1)$ e $\\vec{AH}=H-A=(0; 1; 1)$ — os vetores diretores são iguais.",
      "O ponto $A$ não está na reta $BG$, portanto as retas não coincidem.",
      "<strong>As retas $BG$ e $AH$ são paralelas</strong> (estão no plano $ABGH$)."
     ]
    },
    {
     "task": "Decida se o ponto $Q[5; 1; -2]$ pertence à reta $p: X=[1; 3; 0]+t\\,(2; -1; -1)$.",
     "steps": [
      "Da primeira coordenada: $1+2t=5$, logo $t=2$.",
      "Para $t=2$: $y=3-2=1$ ✓, $z=0-2=-2$ ✓.",
      "<strong>O ponto $Q$ pertence à reta</strong> (parâmetro $t=2$)."
     ]
    }
   ]
  },
  "s4-uhly-vzdialenosti": {
   "title": "Ângulos e distâncias no espaço",
   "summary": "Distância entre pontos, de um ponto a uma reta e a um plano, ângulo entre retas e entre reta e plano — sobretudo no cubo.",
   "theory": [
    "<p><strong>Distâncias:</strong> a distância entre pontos é $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2+(b_3-a_3)^2}$. A distância de um ponto a uma reta é o comprimento da perpendicular à reta;\n       a distância do ponto $P$ ao plano $ax+by+cz+d=0$ é $\\dfrac{|ap_1+bp_2+cp_3+d|}{\\sqrt{a^2+b^2+c^2}}$.\n       No cubo de aresta $a$: diagonal da face $a\\sqrt2$, diagonal do cubo $a\\sqrt3$.</p>",
    "<p>O <strong>ângulo entre duas retas</strong> (mesmo reversas) é o ângulo entre os seus vetores diretores, tomado em $\\langle 0^\\circ; 90^\\circ\\rangle$:\n       $\\cos\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}$. O <strong>ângulo entre uma reta e um plano</strong> é o ângulo entre a reta e a sua projeção ortogonal sobre o plano;\n       com o vetor normal $\\vec{n}$, vale $\\sin\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}$.</p>",
    {
     "fig": "s4-kocka-uhol",
     "caption": "O ângulo entre a diagonal do cubo $AG$ e o plano da base é o ângulo entre $AG$ e a sua projeção $AC$. Do triângulo retângulo $ACG$: $\\mathrm{tg}\\,\\varphi=\\frac{a}{a\\sqrt2}$, logo $\\varphi\\approx 35{,}26^\\circ$."
    },
    "<p>O <strong>produto vetorial</strong> $\\vec{u}\\times\\vec{v}=(u_2v_3-u_3v_2;\\ u_3v_1-u_1v_3;\\ u_1v_2-u_2v_1)$ é perpendicular aos dois vetores, e o seu módulo é a área do paralelogramo determinado por eles.\n       Por isso, a distância do ponto $P$ à reta $X=Q+t\\vec{u}$ é $\\dfrac{|\\vec{QP}\\times\\vec{u}|}{|\\vec{u}|}$, e o vetor normal do plano $QRS$ é $\\vec{QR}\\times\\vec{QS}$.</p>"
   ],
   "examples": [
    {
     "task": "O cubo $ABCDEFGH$ tem aresta $a=6\\,\\text{cm}$. Calcule a distância do vértice $A$ ao ponto médio $K$ da aresta $GH$.",
     "steps": [
      "$A[0; 0; 0]$, $G[6; 6; 6]$, $H[0; 6; 6]$, logo $K[3; 6; 6]$.",
      "$|AK|=\\sqrt{3^2+6^2+6^2}=\\sqrt{81}=9$.",
      "<strong>$|AK|=9\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Calcule a distância do vértice $A$ ao plano $BDE$ no cubo de aresta $a$.",
     "steps": [
      "$B[a; 0; 0]$, $D[0; a; 0]$, $E[0; 0; a]$ estão no plano $x+y+z-a=0$.",
      "$d=\\dfrac{|0+0+0-a|}{\\sqrt{1+1+1}}=\\dfrac{a}{\\sqrt3}=\\dfrac{a\\sqrt3}{3}$.",
      "É um terço da diagonal do cubo $AG$."
     ]
    }
   ]
  },
  "s4-telesa": {
   "title": "Prisma, pirâmide, cilindro, cone e esfera",
   "summary": "Propriedades dos sólidos, triângulos retângulos no interior dos sólidos, área total e volume, seção da esfera.",
   "theory": [
    "<p>O <strong>prisma</strong> e o <strong>cilindro</strong> têm duas bases congruentes e paralelas: $V=S_p\\cdot v$, $S=2S_p+S_{pl}$. Cilindro: $V=\\pi r^2v$, $S=2\\pi r^2+2\\pi rv$.\n       A <strong>pirâmide</strong> e o <strong>cone</strong> têm uma base e um vértice: $V=\\frac{1}{3}S_p\\cdot v$. Cone de geratriz $s$: $V=\\frac{1}{3}\\pi r^2 v$, $S=\\pi r^2+\\pi rs$, em que $s^2=r^2+v^2$.\n       <strong>Esfera</strong>: $V=\\frac{4}{3}\\pi r^3$, $S=4\\pi r^2$.</p>",
    {
     "fig": "s4-ihlan",
     "caption": "Pirâmide quadrangular regular: a altura $v$, o apótema da pirâmide $v_s$ e a metade da aresta $\\frac{a}{2}$ formam um triângulo retângulo: $v_s^2=v^2+\\left(\\frac{a}{2}\\right)^2$. Para a aresta lateral $h$ vale $h^2=v_s^2+\\left(\\frac{a}{2}\\right)^2$."
    },
    "<p>A <strong>pirâmide quadrangular regular</strong> de aresta da base $a$ tem $S=a^2+4\\cdot\\frac{a\\cdot v_s}{2}=a^2+2av_s$ e $V=\\frac{1}{3}a^2v$.\n       A chave para a maioria dos problemas é o triângulo retângulo certo — por exemplo, a altura, a metade da diagonal da base e a aresta lateral: $h^2=v^2+\\left(\\frac{a\\sqrt2}{2}\\right)^2$.</p>",
    "<p>A <strong>seção da esfera</strong> por um plano à distância $d$ do centro é um círculo de raio $\\rho=\\sqrt{r^2-d^2}$. O <strong>prisma triangular regular</strong> tem como base\n       um triângulo equilátero de área $\\frac{\\sqrt3}{4}a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Uma pirâmide quadrangular regular tem aresta da base $a=10\\,\\text{cm}$ e altura $v=12\\,\\text{cm}$. Calcule a sua área total e o seu volume.",
     "steps": [
      "Apótema da pirâmide: $v_s=\\sqrt{12^2+5^2}=\\sqrt{169}=13\\,\\text{cm}$.",
      "$S=a^2+2av_s=100+2\\cdot 10\\cdot 13=360\\,\\text{cm}^2$.",
      "$V=\\frac{1}{3}\\cdot 100\\cdot 12=400\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Uma esfera de raio $r=10\\,\\text{cm}$ é cortada por um plano à distância de $6\\,\\text{cm}$ do centro. Qual é a área da seção?",
     "steps": [
      "$\\rho=\\sqrt{10^2-6^2}=\\sqrt{64}=8\\,\\text{cm}$.",
      "$S=\\pi\\rho^2=64\\pi\\approx 201{,}06\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "s4-povrch-objem": {
   "title": "Área total e volume de sólidos mais complexos",
   "summary": "Tronco de cone e tronco de pirâmide, sólidos compostos, semelhança de sólidos e problemas práticos.",
   "theory": [
    "<p><strong>Tronco de cone</strong> com raios das bases $R$, $r$, altura $v$ e geratriz $s$: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$, área lateral $S_{pl}=\\pi s(R+r)$,\n       área total $S=\\pi R^2+\\pi r^2+\\pi s(R+r)$. A geratriz é obtida da seção meridiana, que é um trapézio: $s^2=v^2+(R-r)^2$.</p>",
    {
     "fig": "s4-zrezany",
     "caption": "O tronco de cone surge ao cortar a parte de cima de um cone por um plano paralelo à base. A altura $v$, a diferença dos raios $R-r$ e a geratriz $s$ formam um triângulo retângulo."
    },
    "<p>O <strong>tronco de pirâmide</strong> com áreas das bases $S_1$, $S_2$ e altura $v$ tem volume $V=\\frac{v}{3}\\left(S_1+\\sqrt{S_1S_2}+S_2\\right)$;\n       para o tronco de pirâmide quadrangular regular com arestas $a_1$, $a_2$, $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.\n       Um <strong>sólido composto</strong> é dividido em sólidos conhecidos, e somamos os volumes (nas cavidades, subtraímos). Na área total, atenção: as superfícies de contato não fazem parte dela.</p>",
    "<p><strong>Sólidos semelhantes</strong> com razão de semelhança $k$ têm áreas na razão $k^2$ e volumes na razão $k^3$. Se dobrarmos todas as dimensões,\n       a área fica 4 vezes maior e o volume, 8 vezes. Na refundição, o volume se conserva.</p>"
   ],
   "examples": [
    {
     "task": "Um balde tem a forma de um tronco de cone com raios $R=15\\,\\text{cm}$, $r=10\\,\\text{cm}$ e altura $v=30\\,\\text{cm}$. Quantos litros cabem nele?",
     "steps": [
      "$V=\\frac{\\pi\\cdot 30}{3}(225+150+100)=10\\pi\\cdot 475=4750\\pi\\,\\text{cm}^3$.",
      "$V\\approx 14\\,923\\,\\text{cm}^3\\approx 14{,}9\\,\\ell$."
     ]
    },
    {
     "task": "Um silo tem a forma de um cilindro de raio $3\\,\\text{m}$ e altura $8\\,\\text{m}$, sobre o qual há uma semiesfera de mesmo raio. Calcule o volume do silo.",
     "steps": [
      "Cilindro: $\\pi\\cdot 9\\cdot 8=72\\pi$.",
      "Semiesfera: $\\frac{1}{2}\\cdot\\frac{4}{3}\\pi\\cdot 27=18\\pi$.",
      "<strong>$V=90\\pi\\approx 282{,}74\\,\\text{m}^3$</strong>"
     ]
    }
   ]
  },
  "s4-statisticky-subor": {
   "title": "Conjunto de dados, variáveis, tabelas e gráficos",
   "summary": "População e variável, frequência absoluta e relativa, tabela de distribuição de frequências, gráficos e a sua leitura.",
   "theory": [
    "<p>Um <strong>conjunto de dados estatísticos</strong> é o conjunto dos objetos estudados (unidades estatísticas); o seu número $n$ é o <strong>tamanho</strong> do conjunto.\n       A propriedade observada é a <strong>variável estatística</strong>: <strong>qualitativa</strong> (descrita por palavras — cor, marca, curso) ou <strong>quantitativa</strong> (numérica).\n       Uma variável quantitativa é <strong>discreta</strong> se assume apenas valores isolados (número de irmãos), ou <strong>contínua</strong> se pode assumir qualquer valor de um intervalo (altura, tempo).</p>",
    "<p>A <strong>frequência absoluta</strong> $n_i$ de um valor é o número de unidades com esse valor; a <strong>frequência relativa</strong> é $f_i=\\frac{n_i}{n}$ (muitas vezes em porcentagem).\n       A soma de todos os $n_i$ é $n$, e a soma dos $f_i$ é $1$. Registramos os dados em uma <strong>tabela de distribuição de frequências</strong>.</p>",
    {
     "fig": "s4-stlpcovy",
     "caption": "Gráfico de colunas das notas (de 1, a melhor, a 5) de uma turma de $28$ alunos. Por exemplo, a nota $2$ foi obtida por $9$ alunos; a frequência relativa é $\\frac{9}{28}\\approx 32{,}1\\,\\%$."
    },
    "<p><strong>Gráficos:</strong> de colunas (frequências dos valores), de setores (o setor de um valor tem ângulo central $f_i\\cdot 360^\\circ$), histograma (para uma variável contínua dividida em intervalos)\n       e de linhas (evolução no tempo). Na <strong>interpretação</strong>, cuidado com um eixo que não começa no zero — pequenas diferenças parecem enormes.</p>"
   ],
   "examples": [
    {
     "task": "Uma tabela mostra o meio de transporte até a escola: ônibus 12, carro 5, bicicleta 3, a pé 10. Que parte do gráfico de setores (ângulo central) ocupa o ônibus?",
     "steps": [
      "$n=12+5+3+10=30$.",
      "$f=\\frac{12}{30}=0{,}4=40\\,\\%$.",
      "Ângulo central: $0{,}4\\cdot 360^\\circ=144^\\circ$."
     ]
    },
    {
     "task": "Com base no gráfico de colunas acima, calcule a nota média da turma.",
     "steps": [
      "$n=6+9+7+4+2=28$.",
      "Soma das notas: $1\\cdot 6+2\\cdot 9+3\\cdot 7+4\\cdot 4+5\\cdot 2=6+18+21+16+10=71$.",
      "$\\bar{x}=\\frac{71}{28}\\approx 2{,}54$"
     ]
    }
   ]
  },
  "s4-charakteristiky": {
   "title": "Média, mediana, moda e variância",
   "summary": "Medidas de posição e de dispersão: média, mediana, moda, quartis, variância e desvio padrão.",
   "theory": [
    "<p><strong>Medidas de posição:</strong> média aritmética $\\bar{x}=\\frac{x_1+x_2+\\dots+x_n}{n}$ (a partir de uma tabela, ponderada: $\\bar{x}=\\frac{\\sum n_ix_i}{n}$),\n       <strong>mediana</strong> — o valor central do conjunto ordenado (para $n$ par, a média dos dois valores centrais) e <strong>moda</strong> — o valor mais frequente.\n       Ao contrário da média, a mediana não é afetada por valores extremos (por exemplo, um salário muito alto).</p>",
    "<p><strong>Medidas de dispersão:</strong> amplitude $R=x_{\\max}-x_{\\min}$, <strong>variância</strong> $s^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2$\n       (média dos quadrados dos desvios em relação à média, também $s^2=\\overline{x^2}-\\bar{x}^2$) e <strong>desvio padrão</strong> $s=\\sqrt{s^2}$, que tem a mesma unidade dos dados.</p>",
    "<p><strong>Quartis:</strong> o primeiro quartil $Q_1$ é a mediana da metade inferior dos dados; o terceiro quartil $Q_3$, a mediana da metade superior.\n       Entre $Q_1$ e $Q_3$ fica a metade central dos dados; a diferença $Q_3-Q_1$ é a amplitude interquartil. Os cinco números (mín., $Q_1$, mediana, $Q_3$, máx.) são representados no diagrama de caixa (boxplot).</p>",
    {
     "fig": "s4-krabica",
     "caption": "Diagrama de caixa do conjunto $2, 4, 5, 5, 6, 7, 7, 8, 9, 10, 14$: mínimo $2$, $Q_1=5$, mediana $7$, $Q_3=9$, máximo $14$."
    }
   ],
   "examples": [
    {
     "task": "Calcule a média, a mediana e a moda do conjunto $3, 8, 5, 3, 6, 9, 3, 7$.",
     "steps": [
      "Ordenamos: $3, 3, 3, 5, 6, 7, 8, 9$; $n=8$.",
      "$\\bar{x}=\\frac{44}{8}=5{,}5$.",
      "Mediana $=\\frac{5+6}{2}=5{,}5$, moda $=3$ (aparece três vezes)."
     ]
    },
    {
     "task": "Calcule a variância e o desvio padrão do conjunto $4, 6, 7, 9, 9$.",
     "steps": [
      "$\\bar{x}=\\frac{35}{5}=7$. Desvios: $-3, -1, 0, 2, 2$.",
      "$s^2=\\frac{9+1+0+4+4}{5}=\\frac{18}{5}=3{,}6$.",
      "$s=\\sqrt{3{,}6}\\approx 1{,}90$."
     ]
    }
   ]
  },
  "s4-kombinatorika": {
   "title": "Problemas de contagem",
   "summary": "Arranjos, permutações e combinações, sem e com repetição, em problemas típicos.",
   "theory": [
    "<p><strong>Princípio multiplicativo:</strong> se a primeira coisa pode ser escolhida de $m$ maneiras e, para cada uma delas, a segunda de $n$ maneiras, há $m\\cdot n$ pares.\n       Usamos o <strong>princípio aditivo</strong> quando as possibilidades se excluem mutuamente. Em problemas mais difíceis, separamos os casos (por exemplo, pelo último algarismo) e os somamos.</p>",
    "<table class=\"tbl\"><tr><th></th><th>sem repetição</th><th>com repetição</th></tr>\n       <tr><td>arranjos de $n$ elementos tomados $k$ a $k$ (a ordem importa)</td><td>$V_k(n)=\\frac{n!}{(n-k)!}$</td><td>$V'_k(n)=n^k$</td></tr>\n       <tr><td>permutações (ordenação de todos)</td><td>$P(n)=n!$</td><td>$P'(k_1,\\dots,k_m)=\\frac{n!}{k_1!\\cdots k_m!}$</td></tr>\n       <tr><td>combinações de $n$ elementos tomados $k$ a $k$ (a ordem não importa)</td><td>$C_k(n)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$</td><td>$C'_k(n)=\\binom{n+k-1}{k}$</td></tr></table>",
    "<p><strong>Como decidir:</strong> a ordem importa (senha, distribuição de cargos, número)? Se sim, trata-se de arranjos ou permutações; se não (escolha de um grupo, retirada de bolas de uma só vez), de combinações.\n       Em números, o primeiro algarismo não pode ser zero. Útil: $\\binom{n}{k}=\\binom{n}{n-k}$, $\\binom{n}{2}=\\frac{n(n-1)}{2}$ (por exemplo, o número de apertos de mão entre $n$ pessoas).</p>"
   ],
   "examples": [
    {
     "task": "Quantos números de três algarismos distintos podemos formar com os algarismos $0, 1, 2, 3, 4$?",
     "steps": [
      "Na primeira posição não pode haver zero: $4$ possibilidades.",
      "Na segunda posição, os $4$ algarismos restantes (incluindo o zero); na terceira, $3$.",
      "<strong>$4\\cdot 4\\cdot 3=48$ números</strong>"
     ]
    },
    {
     "task": "Entre 8 meninos e 6 meninas escolhemos uma comissão de quatro pessoas com 2 meninos e 2 meninas. Quantas são as possibilidades?",
     "steps": [
      "Os meninos podem ser escolhidos de $\\binom{8}{2}=28$ maneiras, as meninas de $\\binom{6}{2}=15$ maneiras.",
      "As escolhas são independentes; usamos o princípio multiplicativo.",
      "<strong>$28\\cdot 15=420$ possibilidades</strong>"
     ]
    }
   ]
  },
  "s4-pravdepodobnost": {
   "title": "Probabilidade e eventos independentes",
   "summary": "Probabilidade clássica, evento complementar, união de eventos e produto das probabilidades de eventos independentes.",
   "theory": [
    "<p><strong>Definição clássica:</strong> se o experimento tem $n$ resultados igualmente prováveis e o evento $A$ ocorre em $m$ deles, $P(A)=\\frac{m}{n}$.\n       Vale $0\\le P(A)\\le 1$. Os números $m$ e $n$ muitas vezes são obtidos por contagem; por exemplo, ao retirar $k$ bolinhas de uma só vez, os resultados são as combinações $\\binom{n}{k}$.</p>",
    "<p><strong>Evento complementar</strong> $A'$ (o evento $A$ não ocorre): $P(A')=1-P(A)$. Sobretudo os problemas do tipo “pelo menos uma vez” são resolvidos pelo complementar “nenhuma vez”.\n       <strong>União</strong>: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$; para eventos mutuamente exclusivos (não podem ocorrer ao mesmo tempo), $P(A\\cap B)=0$.</p>",
    "<p>Os eventos $A$ e $B$ são <strong>independentes</strong> se o resultado de um não altera a probabilidade do outro; nesse caso, $P(A\\cap B)=P(A)\\cdot P(B)$.\n       Tipicamente, trata-se de lançamentos repetidos, tiros de atiradores diferentes ou retiradas com reposição. A probabilidade de que, em $n$ tentativas independentes com probabilidade $p$, o evento ocorra pelo menos uma vez é $1-(1-p)^n$.</p>"
   ],
   "examples": [
    {
     "task": "Uma urna contém bolas: 5 brancas e 3 pretas. Retiramos duas de uma só vez. Qual é a probabilidade de as duas serem brancas?",
     "steps": [
      "Total de pares: $\\binom{8}{2}=28$; favoráveis: $\\binom{5}{2}=10$.",
      "$P=\\frac{10}{28}=\\frac{5}{14}\\approx 0{,}357$."
     ]
    },
    {
     "task": "Dois atiradores acertam o alvo com probabilidades $0{,}8$ e $0{,}7$ (de forma independente). Qual é a probabilidade de o alvo ser atingido?",
     "steps": [
      "Evento complementar: os dois erram, $P=0{,}2\\cdot 0{,}3=0{,}06$.",
      "<strong>$P=1-0{,}06=0{,}94$</strong>"
     ]
    }
   ]
  },
  "s4-binomicke": {
   "title": "Distribuição binomial",
   "summary": "Tentativas independentes repetidas, probabilidade de k sucessos, valor esperado e variância.",
   "theory": [
    "<p>Repetimos $n$ vezes, de forma independente, um experimento com dois resultados (sucesso com probabilidade $p$, fracasso com $1-p$). A variável aleatória $X$ — o número de sucessos —\n       tem <strong>distribuição binomial</strong> $X\\sim Bi(n; p)$ e $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$ para $k=0, 1, \\dots, n$.\n       O número binomial indica de quantas maneiras as tentativas bem-sucedidas podem estar distribuídas entre as $n$ tentativas.</p>",
    "<p>O <strong>valor esperado</strong> (número esperado de sucessos) é $E(X)=np$, a <strong>variância</strong> é $D(X)=np(1-p)$ e o desvio padrão é $\\sigma=\\sqrt{np(1-p)}$.\n       “Pelo menos um sucesso” é calculado pelo evento complementar: $P(X\\ge 1)=1-(1-p)^n$; “no máximo $k$”, como a soma $P(X=0)+\\dots+P(X=k)$.</p>",
    {
     "fig": "s4-binom",
     "caption": "As colunas mostram $P(X=k)$ para $Bi(n; p)$; a coluna verde é o valor mais provável. Para $n$ maiores, a forma se aproxima da curva em sino da <strong>distribuição normal</strong> (laranja), com média $np$ e desvio padrão $\\sqrt{np(1-p)}$."
    }
   ],
   "examples": [
    {
     "task": "Um aluno chuta as respostas de um teste com 5 questões, cada uma com 4 alternativas (uma correta). Qual é a probabilidade de ele acertar exatamente 2 respostas?",
     "steps": [
      "$X\\sim Bi(5; \\frac{1}{4})$.",
      "$P(X=2)=\\binom{5}{2}\\left(\\frac{1}{4}\\right)^2\\left(\\frac{3}{4}\\right)^3=10\\cdot\\frac{1}{16}\\cdot\\frac{27}{64}=\\frac{270}{1024}$.",
      "$P\\approx 0{,}2637$"
     ]
    },
    {
     "task": "Um produto é defeituoso com probabilidade $0{,}1$. Quantos produtos defeituosos esperamos em um lote de 50 unidades e qual é a variância?",
     "steps": [
      "$E(X)=np=50\\cdot 0{,}1=5$ produtos.",
      "$D(X)=np(1-p)=50\\cdot 0{,}1\\cdot 0{,}9=4{,}5$, $\\sigma\\approx 2{,}12$."
     ]
    }
   ]
  },
  "s4-mat-cisla": {
   "title": "Exame final: conjuntos numéricos, expressões e equações",
   "summary": "Revisão para o exame final do ensino médio: exercícios variados sobre números, simplificação de expressões e equações de todos os anos.",
   "theory": [
    "<p><strong>O que é preciso saber — números:</strong> $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$, divisibilidade (mdc, mmc, números primos), operações com conjuntos e $|A\\cup B|=|A|+|B|-|A\\cap B|$,\n         módulo como distância na reta, intervalos, potências $a^{m}a^{n}=a^{m+n}$, $(a^m)^n=a^{mn}$, $a^{-n}=\\frac{1}{a^n}$, raízes $\\sqrt[n]{a}=a^{1/n}$ e racionalização de denominadores.</p>",
    "<p><strong>Expressões:</strong> produtos notáveis $(a\\pm b)^2=a^2\\pm 2ab+b^2$, $a^2-b^2=(a-b)(a+b)$, $a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$, fatoração por fator comum em evidência e por produtos notáveis,\n         simplificação de frações algébricas — sempre com as <strong>condições de existência</strong> (denominador $\\neq 0$).</p>",
    "<p><strong>Equações:</strong> do 1º grau (transformações equivalentes), do 2º grau $x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ e relações de Girard, equações com a incógnita no denominador,\n         sob radical (elevação ao quadrado e <strong>verificação</strong>), modulares (método dos zeros), exponenciais e logarítmicas ($\\log_a x=c \\Leftrightarrow x=a^c$).</p>"
   ],
   "examples": [
    {
     "task": "Resolva a equação $\\sqrt{x+7}=x+1$.",
     "steps": [
      "Condição $x+1\\ge 0$. Elevamos ao quadrado: $x+7=x^2+2x+1 \\Rightarrow x^2+x-6=0$.",
      "$x_1=2$, $x_2=-3$.",
      "Verificação: $\\sqrt9=3$ ✓; para $-3$ o segundo membro é negativo ✗. <strong>$K=\\{2\\}$</strong>"
     ]
    },
    {
     "task": "Simplifique $\\dfrac{x^2-9}{x^2+3x}$ e determine as condições de existência.",
     "steps": [
      "$\\dfrac{(x-3)(x+3)}{x(x+3)}$, condições $x\\neq 0$, $x\\neq -3$.",
      "<strong>$\\dfrac{x-3}{x}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-nerovnice": {
   "title": "Exame final: inequações e sistemas de equações",
   "summary": "Revisão para o exame final do ensino médio: exercícios variados sobre inequações e sistemas de equações e de inequações.",
   "theory": [
    "<p><strong>Inequações:</strong> ao multiplicar ou dividir por um número negativo, o sinal se inverte. Resolvemos a inequação do 2º grau por meio das raízes e da forma da parábola:\n         para $a&gt;0$, $ax^2+bx+c&lt;0$ entre as raízes. Inequações-quociente e inequações-produto são resolvidas pelo <strong>método dos zeros</strong> (quadro de sinais);\n         inequações modulares, dividindo em intervalos ou por meio de $|x-a|&lt;r \\Leftrightarrow a-r&lt;x&lt;a+r$.</p>",
    "<p><strong>Sistemas de equações:</strong> métodos da substituição e da adição; com três incógnitas, eliminação sucessiva. Um sistema linear de duas equações tem uma, nenhuma ou\n         infinitas soluções (retas concorrentes, paralelas, coincidentes). Em sistemas não lineares, isolamos uma incógnita na equação linear e substituímos.</p>",
    "<p><strong>Erros típicos:</strong> esquecer as condições, dividir por uma expressão com a incógnita (que pode ser negativa ou nula), combinar mal os resultados — num sistema de inequações fazemos a <strong>interseção</strong>; com “ou”, a união.</p>"
   ],
   "examples": [
    {
     "task": "Resolva a inequação $\\dfrac{x-2}{x+1}\\le 0$.",
     "steps": [
      "Zeros: $2$ (numerador) e $-1$ (denominador, que fica excluído).",
      "Sinais: em $(-\\infty; -1)$ $+$, em $(-1; 2)$ $-$, em $(2; \\infty)$ $+$.",
      "<strong>$K=(-1; 2\\rangle$</strong>"
     ]
    },
    {
     "task": "Resolva o sistema $2x+3y=12$, $x-y=1$.",
     "steps": [
      "Da segunda equação, $x=y+1$; substituindo: $2y+2+3y=12 \\Rightarrow y=2$.",
      "$x=3$. <strong>Solução $[3; 2]$</strong>"
     ]
    }
   ]
  },
  "s4-mat-funkcie": {
   "title": "Exame final: funções e seus gráficos",
   "summary": "Revisão para o exame final do ensino médio: exercícios variados sobre funções afins, quadráticas, homográficas, exponenciais, logarítmicas e suas propriedades.",
   "theory": [
    "<p><strong>Propriedades de uma função:</strong> domínio e conjunto imagem, monotonia, paridade, limitação, extremos, injetividade e função inversa (simetria em relação a $y=x$).</p>",
    "<p><strong>Panorama das funções:</strong> afim $y=kx+q$ ($k$ — coeficiente angular, $q$ — coeficiente linear, onde o gráfico corta o eixo $y$); quadrática $y=a(x-m)^2+n$ com vértice $V[m; n]$;\n         homográfica $y=\\frac{ax+b}{cx+d}$ (hipérbole com assíntotas); exponencial $y=a^x$ (crescente para $a&gt;1$, decrescente para $0&lt;a&lt;1$, $H=(0; \\infty)$)\n         e logarítmica $y=\\log_a x$ ($D=(0; \\infty)$, passa pelo ponto $[1; 0]$); funções trigonométricas com período $2\\pi$ (a tangente, $\\pi$).</p>",
    "<p><strong>Translações de gráficos:</strong> $f(x-a)$ desloca o gráfico $a$ para a direita, $f(x)+b$ desloca $b$ para cima, $-f(x)$ é a reflexão em relação ao eixo $x$, $|f(x)|$ reflete as partes negativas para cima.</p>"
   ],
   "examples": [
    {
     "task": "Determine o vértice da parábola $y=x^2-6x+5$ e o conjunto imagem da função.",
     "steps": [
      "Completando o quadrado: $y=(x-3)^2-4$.",
      "Vértice $V[3; -4]$; a parábola tem concavidade para cima.",
      "<strong>$H(f)=\\langle -4; \\infty)$</strong>"
     ]
    },
    {
     "task": "Determine o domínio da função $f(x)=\\log_2(6-2x)$.",
     "steps": [
      "O logaritmando deve ser positivo: $6-2x&gt;0$.",
      "<strong>$x&lt;3$, ou seja, $D(f)=(-\\infty; 3)$</strong>"
     ]
    }
   ]
  },
  "s4-mat-geometria": {
   "title": "Exame final: geometria plana, espacial e analítica",
   "summary": "Revisão para o exame final do ensino médio: exercícios variados de geometria no plano, no espaço e de geometria analítica.",
   "theory": [
    "<p><strong>Geometria plana:</strong> soma dos ângulos do triângulo $180^\\circ$, teorema de Pitágoras e relações métricas no triângulo retângulo, semelhança de triângulos (casos $LLL$, $LAL$, $AA$),\n         áreas ($S=\\frac{a\\cdot v_a}{2}=\\frac{1}{2}ab\\sin\\gamma$, fórmula de Heron), círculo ($S=\\pi r^2$, $o=2\\pi r$, setor $\\frac{\\alpha}{360^\\circ}\\pi r^2$), ângulo inscrito e ângulo central.</p>",
    "<p><strong>Geometria espacial:</strong> volumes $V=S_pv$ (prisma, cilindro), $V=\\frac{1}{3}S_pv$ (pirâmide, cone), $V=\\frac{4}{3}\\pi r^3$ (esfera); áreas; posição relativa de retas e planos,\n         ângulos e distâncias — sempre procuramos um triângulo retângulo adequado.</p>",
    "<p><strong>Geometria analítica:</strong> $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2}$, ponto médio do segmento, vetores e produto escalar ($\\vec u\\perp\\vec v \\Leftrightarrow \\vec u\\cdot\\vec v=0$),\n         equações da reta (paramétricas, geral $ax+by+c=0$, reduzida $y=kx+q$), distância de um ponto a uma reta, circunferência $(x-m)^2+(y-n)^2=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Encontre a equação geral da reta que passa pelos pontos $A[1; 2]$ e $B[4; -4]$.",
     "steps": [
      "Vetor diretor $\\vec{AB}=(3; -6)\\sim(1; -2)$, vetor normal $(2; 1)$.",
      "$2x+y+c=0$; substituímos $A$: $2+2+c=0$, $c=-4$.",
      "<strong>$2x+y-4=0$</strong>"
     ]
    },
    {
     "task": "Um cilindro tem volume $72\\pi\\,\\text{cm}^3$ e altura $8\\,\\text{cm}$. Qual é o raio da base?",
     "steps": [
      "$\\pi r^2\\cdot 8=72\\pi \\Rightarrow r^2=9$.",
      "<strong>$r=3\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-goniometria": {
   "title": "Exame final: funções trigonométricas e trigonometria",
   "summary": "Revisão para o exame final do ensino médio: exercícios variados sobre funções e equações trigonométricas e resolução de triângulos.",
   "theory": [
    "<p><strong>Funções trigonométricas:</strong> medida em radianos $180^\\circ=\\pi\\,\\text{rad}$, ciclo trigonométrico, sinais nos quadrantes, valores para $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$,\n         periodicidade, paridade ($\\cos$ é par, $\\sin$ e $\\mathrm{tg}$ são ímpares).</p>",
    "<p><strong>Fórmulas:</strong> $\\sin^2 x+\\cos^2 x=1$, $\\mathrm{tg}\\,x=\\frac{\\sin x}{\\cos x}$, $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x$,\n         $\\sin(\\pi-x)=\\sin x$, $\\cos(\\pi-x)=-\\cos x$. Equações trigonométricas: substituição, fator comum em evidência, solução geral com $k\\in\\mathbb{Z}$.</p>",
    "<p><strong>Trigonometria:</strong> no triângulo retângulo, as definições de $\\sin$, $\\cos$, $\\mathrm{tg}$; num triângulo qualquer, a <strong>lei dos senos</strong>\n         $\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2r$ e a <strong>lei dos cossenos</strong> $c^2=a^2+b^2-2ab\\cos\\gamma$.</p>"
   ],
   "examples": [
    {
     "task": "Um triângulo tem lados $a=5$, $b=8$ e ângulo $\\gamma=60^\\circ$. Calcule o lado $c$.",
     "steps": [
      "Lei dos cossenos: $c^2=25+64-2\\cdot 5\\cdot 8\\cdot\\frac{1}{2}=49$.",
      "<strong>$c=7$</strong>"
     ]
    },
    {
     "task": "Se $\\cos x=-\\frac{3}{5}$ e $x\\in(\\frac{\\pi}{2}; \\pi)$, calcule $\\sin x$ e $\\mathrm{tg}\\,x$.",
     "steps": [
      "$\\sin^2 x=1-\\frac{9}{25}=\\frac{16}{25}$; no 2º quadrante o seno é positivo: $\\sin x=\\frac{4}{5}$.",
      "$\\mathrm{tg}\\,x=\\frac{4/5}{-3/5}=-\\frac{4}{3}$."
     ]
    }
   ]
  },
  "s4-mat-postupnosti": {
   "title": "Exame final: sequências, contagem e probabilidade",
   "summary": "Revisão para o exame final do ensino médio: exercícios variados sobre sequências, matemática financeira, contagem, probabilidade e estatística.",
   "theory": [
    "<p><strong>Sequências:</strong> PA $a_n=a_1+(n-1)d$, $s_n=\\frac{n}{2}(a_1+a_n)$; PG $a_n=a_1q^{n-1}$, $s_n=a_1\\frac{q^n-1}{q-1}$ ($q\\neq 1$);\n         série geométrica infinita $s=\\frac{a_1}{1-q}$ para $|q|&lt;1$.</p>",
    "<p><strong>Matemática financeira:</strong> juros compostos $K_n=K_0\\left(1+\\frac{p}{100}\\right)^n$ (com imposto sobre os juros, a taxa efetiva diminui), poupança periódica e amortização como soma de uma progressão geométrica,\n         porcentagem e por mil.</p>",
    "<p><strong>Contagem e probabilidade:</strong> arranjos, permutações, combinações (também com repetição), $P(A)=\\frac{m}{n}$, evento complementar, eventos independentes, distribuição binomial.\n         <strong>Estatística:</strong> média, mediana, moda, variância, desvio padrão, leitura de tabelas e gráficos.</p>"
   ],
   "examples": [
    {
     "task": "Um depósito de $2\\,000\\,€$ rende juros de $3\\,\\%$ ao ano (juros compostos). Quanto haverá na conta após 5 anos?",
     "steps": [
      "$K_5=2000\\cdot 1{,}03^5$.",
      "$1{,}03^5\\approx 1{,}159274$.",
      "<strong>$K_5\\approx 2\\,318{,}55\\,€$</strong>"
     ]
    },
    {
     "task": "Em uma progressão aritmética, $a_3=7$ e $a_7=19$. Calcule $a_1$ e a soma dos 10 primeiros termos.",
     "steps": [
      "$a_7-a_3=4d=12 \\Rightarrow d=3$, $a_1=a_3-2d=1$.",
      "$a_{10}=1+9\\cdot 3=28$, $s_{10}=\\frac{10}{2}(1+28)=145$."
     ]
    }
   ]
  },
  "s4-mat-komplex": {
   "title": "Exame final: problemas-modelo e exercícios integrados",
   "summary": "Problemas de várias etapas que reúnem vários temas: otimização, finanças, sequências, geometria analítica, probabilidade e derivadas.",
   "theory": [
    "<p><strong>Como resolver um problema integrado:</strong></p>\n       <ol><li>Leia o enunciado duas vezes e anote o que é dado e o que se procura (com as unidades).</li>\n       <li>Faça um esboço ou uma tabela; dê nome às incógnitas.</li>\n       <li>Divida o problema em passos menores — muitas vezes é uma cadeia de procedimentos conhecidos (por exemplo, “montar a função → derivar → encontrar o máximo”).</li>\n       <li>Verifique o resultado: por substituição, estimando a ordem de grandeza, conferindo as condições (comprimento positivo, probabilidade em $\\langle 0; 1\\rangle$).</li></ol>",
    "<p><strong>Combinações frequentes de temas:</strong> otimização (geometria + derivadas), juros e poupança (porcentagem + progressão geométrica + logaritmos),\n       triângulo em coordenadas (vetores + área + distância), escolha de um grupo e probabilidade (combinações + evento complementar), reta tangente a um gráfico (derivada + equação da reta).</p>",
    "<p><strong>Fórmulas úteis extras:</strong> área do triângulo $ABC$ em coordenadas $S=\\frac{1}{2}\\left|(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)\\right|$,\n       reta tangente $y=f(x_0)+f'(x_0)(x-x_0)$, número de anos na capitalização $n=\\frac{\\ln(K_n/K_0)}{\\ln(1+p/100)}$.</p>"
   ],
   "examples": [
    {
     "task": "De uma chapa quadrada de lado $30\\,\\text{cm}$ recortamos quadrados iguais nos cantos e dobramos uma caixa aberta. Qual é o maior volume que ela pode ter?",
     "steps": [
      "Com o lado do quadrado recortado igual a $x$: $V(x)=x(30-2x)^2$, $x\\in(0; 15)$.",
      "$V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)=0 \\Rightarrow x=5$ (o valor $15$ não pertence ao intervalo).",
      "<strong>$V(5)=5\\cdot 20^2=2\\,000\\,\\text{cm}^3$</strong>"
     ]
    },
    {
     "task": "Em quantos anos um depósito com juros anuais de $4\\,\\%$ dobra pela primeira vez?",
     "steps": [
      "Procuramos o menor $n$ para o qual $1{,}04^n\\ge 2$.",
      "$n\\ge\\frac{\\ln 2}{\\ln 1{,}04}\\approx 17{,}67$.",
      "<strong>Após 18 anos.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(-\\infty; {@0}\\rangle$ a $\\langle {@1}; \\infty)$": "$(-\\infty; {@0}\\rangle$ e $\\langle {@1}; \\infty)$",
  "$(-x)^2\\sin(-x)=-x^2\\sin x$, teda $f(-x)=-f(x)$.": "$(-x)^2\\sin(-x)=-x^2\\sin x$, ou seja, $f(-x)=-f(x)$.",
  "$(f\\circ g)({@0})=f(g({@1}))$. Najprv $g({@2})={@3}\\cdot {@4}{@5}={@6}$, potom $f({@7})={@8}{@9}^2{@10}={@11}$.": "$(f\\circ g)({@0})=f(g({@1}))$. Primeiro $g({@2})={@3}\\cdot {@4}{@5}={@6}$, depois $f({@7})={@8}{@9}^2{@10}={@11}$.",
  "$(g\\circ f)({@0})=g(f({@1}))$. Najprv $f({@2})={@3}{@4}^2{@5}={@6}$, potom $g({@7})={@8}\\cdot {@9}{@10}={@11}$.": "$(g\\circ f)({@0})=g(f({@1}))$. Primeiro $f({@2})={@3}{@4}^2{@5}={@6}$, depois $g({@7})={@8}\\cdot {@9}{@10}={@11}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ pre $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ para $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ para $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ pre $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ para $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ para $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, teda $k={@5}$.": "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, ou seja, $k={@5}$.",
  "$D={@0}-4c=0 \\Rightarrow c={@1}$. Rovnica je potom $({@2})^2=0$ s dvojnásobným koreňom ${@3}$.": "$D={@0}-4c=0 \\Rightarrow c={@1}$. A equação fica então $({@2})^2=0$, com a raiz dupla ${@3}$.",
  "$D={@0}-4p$. Podmienka {@1} dáva {@2}.": "$D={@0}-4p$. A condição {@1} dá {@2}.",
  "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.": "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.",
  "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.": "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.",
  "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (prvý trafí a druhý nie, alebo naopak).": "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (o primeiro acerta e o segundo não, ou o contrário).",
  "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.": "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.",
  "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.": "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.",
  "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.": "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.",
  "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Odchýlky od priemeru: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.": "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Desvios em relação à média: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.",
  "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.": "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.",
  "$\\cos x=\\frac{1}{2}$; v jednej perióde má riešenia $\\frac{\\pi}{3}$ a $-\\frac{\\pi}{3}$, perióda kosínusu je $2\\pi$.": "$\\cos x=\\frac{1}{2}$; num período tem as soluções $\\frac{\\pi}{3}$ e $-\\frac{\\pi}{3}$; o período do cosseno é $2\\pi$.",
  "$\\cos(-x)=\\cos x$ a $(-x)^2=x^2$, teda $f(-x)=f(x)$.": "$\\cos(-x)=\\cos x$ e $(-x)^2=x^2$, ou seja, $f(-x)=f(x)$.",
  "$\\mathrm{tg}\\,x=1$ alebo $\\mathrm{tg}\\,x=-1$, teda $x=\\frac{\\pi}{4}+k\\pi$ alebo $x=-\\frac{\\pi}{4}+k\\pi$. Spolu sú to body vzdialené o $\\frac{\\pi}{2}$.": "$\\mathrm{tg}\\,x=1$ ou $\\mathrm{tg}\\,x=-1$, ou seja, $x=\\frac{\\pi}{4}+k\\pi$ ou $x=-\\frac{\\pi}{4}+k\\pi$. Juntos, são pontos afastados de $\\frac{\\pi}{2}$.",
  "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, čo platí pre $\\frac{\\pi}{6}$; perióda tangensu je $\\pi$.": "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, o que vale para $\\frac{\\pi}{6}$; o período da tangente é $\\pi$.",
  "$\\sin x=\\frac{\\sqrt2}{2}$; sínus je kladný v I. a II. kvadrante, teda $\\frac{\\pi}{4}$ a $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, perióda $2\\pi$.": "$\\sin x=\\frac{\\sqrt2}{2}$; o seno é positivo nos quadrantes I e II, ou seja, $\\frac{\\pi}{4}$ e $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, com período $2\\pi$.",
  "$\\sin x=\\pm\\frac{1}{2}$; riešenia $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ sa opakujú s periódou $\\pi$ ako $\\pm\\frac{\\pi}{6}+k\\pi$.": "$\\sin x=\\pm\\frac{1}{2}$; as soluções $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ se repetem com período $\\pi$ como $\\pm\\frac{\\pi}{6}+k\\pi$.",
  "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, z $S=\\frac{|AB|\\cdot v_c}{2}$ je $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.": "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$; de $S=\\frac{|AB|\\cdot v_c}{2}$ obtemos $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.",
  "$f''(x)={@0}$. Nerovnica $f''(x)&gt;0$ dáva ${@1}$, funkcia je konvexná na {@2}.": "$f''(x)={@0}$. A inequação $f''(x)&gt;0$ dá ${@1}$, a função é convexa em {@2}.",
  "$f'(x)={@0}$ má korene ${@1}$ a ${@2}$. {@3} Porovnáme hodnoty: {@4}. {@5} z nich je ${@6}$.": "$f'(x)={@0}$ tem as raízes ${@1}$ e ${@2}$. {@3} Comparamos os valores: {@4}. {@5} deles é ${@6}$.",
  "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ pre $x={@2}$ a druhá derivácia tam mení znamienko. $f({@3})={@4}$, inflexný bod je $[{@5}; {@6}]$.": "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ para $x={@2}$, e ali a segunda derivada muda de sinal. $f({@3})={@4}$, o ponto de inflexão é $[{@5}; {@6}]$.",
  "$f'(x)={@0}$.": "$f'(x)={@0}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$, stacionárne body sú ${@4}$ a ${@5}$. Derivácia má znamienka {@6} na intervaloch $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} je preto v bode $x={@12}$ a $f({@13})={@14}$.": "$f'(x)={@0}={@1}{@2}{@3}$, os pontos críticos são ${@4}$ e ${@5}$. A derivada tem os sinais {@6} nos intervalos $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} está, portanto, no ponto $x={@12}$, e $f({@13})={@14}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$. Derivácia je {@4} medzi koreňmi ${@5}$ a ${@6}$ a {@7} mimo nich. Funkcia je {@8} na {@9}.": "$f'(x)={@0}={@1}{@2}{@3}$. A derivada é {@4} entre as raízes ${@5}$ e ${@6}$ e {@7} fora delas. A função é {@8} em {@9}.",
  "$f'(x)={@0}\\cos {@1}x{@2}$. Keďže $\\cos 0=1$ a $\\mathrm{e}^0=1$, je $f'(0)={@3}{@4}={@5}$.": "$f'(x)={@0}\\cos {@1}x{@2}$. Como $\\cos 0=1$ e $\\mathrm{e}^0=1$, temos $f'(0)={@3}{@4}={@5}$.",
  "$f'(x)={@0}\\sin {@1}x{@2}$. Keďže $\\sin 0=0$ a $\\mathrm{e}^0=1$, je $f'(0)=0{@3}={@4}$.": "$f'(x)={@0}\\sin {@1}x{@2}$. Como $\\sin 0=0$ e $\\mathrm{e}^0=1$, temos $f'(0)=0{@3}={@4}$.",
  "$f(-1)=\\mathrm{e}^{-1}$ sa nerovná $f(1)=\\mathrm{e}$ ani $-\\mathrm{e}$.": "$f(-1)=\\mathrm{e}^{-1}$ não é igual nem a $f(1)=\\mathrm{e}$ nem a $-\\mathrm{e}$.",
  "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, párne mocniny zmenu znamienka „pohltia“.": "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$; as potências pares «absorvem» a mudança de sinal.",
  "$f(-x)=-\\sin x+\\cos x$, čo nie je $f(x)$ ani $-f(x)$.": "$f(-x)=-\\sin x+\\cos x$, que não é $f(x)$ nem $-f(x)$.",
  "$f(-x)=-x^3+{@0}x=-f(x)$, výraz obsahuje len nepárne mocniny.": "$f(-x)=-x^3+{@0}x=-f(x)$; a expressão contém só potências ímpares.",
  "$f(1)={@0}$ a $f(-1)={@1}$; neplatí ani jedna z rovností $f(-1)=f(1)$, $f(-1)=-f(1)$.": "$f(1)={@0}$ e $f(-1)={@1}$; não vale nenhuma das igualdades $f(-1)=f(1)$, $f(-1)=-f(1)$.",
  "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Dotyčnica: $y={@5}+{@6}(x-{@7})$, teda $y={@8}$.": "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Tangente: $y={@5}+{@6}(x-{@7})$, ou seja, $y={@8}$.",
  "$f^{-1}({@0})$ je číslo $x$, pre ktoré $f(x)={@1}$. Riešime $\\dfrac{{@2}}{{@3}}={@4}$: po vynásobení menovateľmi dostaneme lineárnu rovnicu s riešením $x={@5}$. Skúška: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓": "$f^{-1}({@0})$ é o número $x$ para o qual $f(x)={@1}$. Resolvemos $\\dfrac{{@2}}{{@3}}={@4}$: depois de multiplicar pelos denominadores obtemos uma equação linear com solução $x={@5}$. Verificação: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓",
  "$n={@0}$ je {@1} v usporiadanom súbore. Kumulované počty: {@2}. Medián je ${@3}$.": "$n={@0}$ é {@1} no conjunto ordenado. Frequências acumuladas: {@2}. A mediana é ${@3}$.",
  "$n={@0}={@1}$. Vážený aritmetický priemer: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.": "$n={@0}={@1}$. Média aritmética ponderada: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.",
  "${@0} x={@1}$ pre $x\\in\\{{@2}\\}$": "${@0} x={@1}$ para $x\\in\\{{@2}\\}$",
  "${@0}^{x}=({@1}^{x})^2$, substitúcia $t={@2}^{x}$, pričom $t&gt;0$: ${@3}=0$, korene $t_1={@4}$, $t_2={@5}$. {@6}Z ${@7}^{x}={@8}$ je $x={@9}${@10}. $K=\\{{@11}\\}$.": "${@0}^{x}=({@1}^{x})^2$, substituição $t={@2}^{x}$, com $t&gt;0$: ${@3}=0$, raízes $t_1={@4}$, $t_2={@5}$. {@6}De ${@7}^{x}={@8}$ temos $x={@9}${@10}. $K=\\{{@11}\\}$.",
  "(Výsledok zadaj ako zlomok alebo desatinné číslo zaokrúhlené na 3 desatinné miesta.)": "(Digite o resultado como fração ou como número decimal arredondado para 3 casas decimais.)",
  "(otočíme znak)": "(invertemos o sinal)",
  ", obsah $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$": ", área $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$",
  ", prepona má ${@0}\\,\\text{cm}$": ", a hipotenusa mede ${@0}\\,\\text{cm}$",
  ", z ${@0}^{x}={@1}$ je $x={@2}$": "; de ${@0}^{x}={@1}$ temos $x={@2}$",
  "0 alebo 5": "0 ou 5",
  "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · body [1; {@2}] a [{@3}; 1] sú súmerné podľa y = x": "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · os pontos [1; {@2}] e [{@3}; 1] são simétricos em relação a y = x",
  "<span class=\"c-ok\">f′ &gt; 0, funkcia rastie</span>": "<span class=\"c-ok\">f′ &gt; 0, a função cresce</span>",
  "<span class=\"muted small\">Téma: {@0}</span><br>{@1}": "<span class=\"muted small\">Tema: {@0}</span><br>{@1}",
  "ABC": "ABC",
  "ABD": "ABD",
  "ABE": "ABE",
  "ABF": "ABF",
  "ABG": "ABG",
  "ACB": "ACB",
  "ACD": "ACD",
  "ACE": "ACE",
  "ACF": "ACF",
  "ACG": "ACG",
  "ACH": "ACH",
  "ADB": "ADB",
  "ADC": "ADC",
  "ADE": "ADE",
  "ADF": "ADF",
  "ADG": "ADG",
  "ADH": "ADH",
  "AEB": "AEB",
  "AEC": "AEC",
  "AED": "AED",
  "AEF": "AEF",
  "AEG": "AEG",
  "AFB": "AFB",
  "AFD": "AFD",
  "AFG": "AFG",
  "AFH": "AFH",
  "AGB": "AGB",
  "AGC": "AGC",
  "AGD": "AGD",
  "AGE": "AGE",
  "AGF": "AGF",
  "AHB": "AHB",
  "AHC": "AHC",
  "AHD": "AHD",
  "AHE": "AHE",
  "AHF": "AHF",
  "AHG": "AHG",
  "ANALÝZA": "ANALYZA",
  "ANANÁS": "ANANAS",
  "Ak po dosadení vyjde $\\frac{0}{0}$, rozlož čitateľa na súčin. Jeden z činiteľov sa vykráti s menovateľom.": "Se ao substituir sai $\\frac{0}{0}$, fatore o numerador. Um dos fatores se simplifica com o denominador.",
  "Aká dlhá je potom strana rovnobežná so stenou (v metroch)?": "Quanto mede então o lado paralelo ao muro (em metros)?",
  "Aká dlhá je prepona v cm?": "Quanto mede a hipotenusa em cm?",
  "Aká dlhá je základňa trojuholníka na osi $x$?": "Quanto mede a base do triângulo sobre o eixo $x$?",
  "Aká dlhá musí byť strana rovnobežná so stenou, aby bol obsah najväčší (v metroch)?": "Quanto deve medir o lado paralelo ao muro para que a área seja máxima (em metros)?",
  "Aká je $y$-ová súradnica bodu s $x={@0}$?": "Qual é a coordenada $y$ do ponto com $x={@0}$?",
  "Aká je pravdepodobnosť, že obaja minú?": "Qual é a probabilidade de que os dois errem?",
  "Aká je pravdepodobnosť, že prvý minie a druhý zasiahne?": "Qual é a probabilidade de que o primeiro erre e o segundo acerte?",
  "Aká je pravdepodobnosť, že prvý zasiahne a druhý minie?": "Qual é a probabilidade de que o primeiro acerte e o segundo erre?",
  "Aká je pravdepodobnosť, že terč zasiahne aspoň jeden?": "Qual é a probabilidade de que pelo menos um acerte o alvo?",
  "Aká je pravdepodobnosť, že terč zasiahne práve jeden?": "Qual é a probabilidade de que exatamente um acerte o alvo?",
  "Aká je pravdepodobnosť, že vo výbere bude aspoň jedno dievča? {@0}": "Qual é a probabilidade de que na escolha haja pelo menos uma menina? {@0}",
  "Aká je pravdepodobnosť, že šestka nepadne ani raz? Výsledok zaokrúhli na 4 desatinné miesta.": "Qual é a probabilidade de que não saia nenhum seis? Arredonde o resultado para 4 casas decimais.",
  "Aká je pravdepodobnosť, že šestka padne aspoň raz? Výsledok zaokrúhli na 3 desatinné miesta.": "Qual é a probabilidade de que saia pelo menos um seis? Arredonde o resultado para 3 casas decimais.",
  "Aká je pravdepodobnosť? {@0}": "Qual é a probabilidade? {@0}",
  "Aká je teda hodnota limity? Zadaj ju ako zlomok.": "Qual é então o valor do limite? Digite-o como fração.",
  "Aká je výška trojuholníka (y-ová súradnica priesečníka oboch priamok)?": "Qual é a altura do triângulo (a coordenada $y$ do ponto de interseção das duas retas)?",
  "Aké je najmenšie celé číslo v prieniku?": "Qual é o menor número inteiro da interseção?",
  "Aké je najmenšie celé číslo, ktoré ju spĺňa?": "Qual é o menor número inteiro que a satisfaz?",
  "Aké sú súradnice bodu $K$ (v cm)? Zadaj $x$; $y$; $z$.": "Quais são as coordenadas do ponto $K$ (em cm)? Digite $x$; $y$; $z$.",
  "Akú dĺžku (v cm) musí mať strana odstrihnutých štvorcov, aby mala krabica najväčší objem?": "Quanto (em cm) deve medir o lado dos quadrados recortados para que a caixa tenha volume máximo?",
  "Akú hodnotu má derivácia člena ${@0}$ v bode $0$?": "Que valor tem a derivada do termo ${@0}$ no ponto $0$?",
  "Akú hodnotu má menovateľ derivácie $({@0})^2$ v bode ${@1}$?": "Que valor tem o denominador da derivada $({@0})^2$ no ponto ${@1}$?",
  "Akú hodnotu má vnútorná funkcia ${@0}$ v bode ${@1}$?": "Que valor tem a função interna ${@0}$ no ponto ${@1}$?",
  "Akú hodnotu má člen $uv'$ v bode $0$?": "Que valor tem o termo $uv'$ no ponto $0$?",
  "Aký je absolútny člen $q$?": "Qual é o termo independente $q$?",
  "Aký je najväčší objem krabice v $\\text{cm}^3$?": "Qual é o volume máximo da caixa em $\\text{cm}^3$?",
  "Aký je najväčší obsah pozemku (v $\\text{m}^2$)?": "Qual é a área máxima do terreno (em $\\text{m}^2$)?",
  "Aký je obsah oblasti?": "Qual é a área da região?",
  "Aký je obsah útvaru? Zadaj zlomok alebo celé číslo.": "Qual é a área da figura? Digite uma fração ou um número inteiro.",
  "Aký je parameter $p$?": "Qual é o parâmetro $p$?",
  "Aký je rozsah súboru $n$ (počet všetkých žiakov)?": "Qual é o tamanho do conjunto $n$ (número total de alunos)?",
  "Aký je stredový uhol výseče v stupňoch?": "Qual é o ângulo central do setor em graus?",
  "Aký je súčet vekov po príchode nového člena?": "Qual é a soma das idades depois da chegada do novo membro?",
  "Aký je súčet vekov pôvodných členov?": "Qual é a soma das idades dos membros originais?",
  "Aký je súčet známok všetkých žiakov?": "Qual é a soma das notas de todos os alunos?",
  "Aký je súčin faktoriálov počtov opakujúcich sa písmen?": "Qual é o produto dos fatoriais dos números de letras repetidas?",
  "Aký je teda exponent ${@0}$?": "Qual é então o expoente ${@0}$?",
  "Aký je štatistický znak „{@0}“?": "De que tipo é a variável estatística «{@0}»?",
  "Aký najväčší objem (v $\\text{cm}^3$) môže mať krabica?": "Que volume máximo (em $\\text{cm}^3$) a caixa pode ter?",
  "Aký najväčší obsah (v $\\text{m}^2$) môže mať pozemok?": "Que área máxima (em $\\text{m}^2$) o terreno pode ter?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „autobus“ v kruhovom diagrame?": "Que ângulo central (em graus) terá o setor «ônibus» no gráfico de setores?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „auto“ v kruhovom diagrame?": "Que ângulo central (em graus) terá o setor «carro» no gráfico de setores?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „bicykel“ v kruhovom diagrame?": "Que ângulo central (em graus) terá o setor «bicicleta» no gráfico de setores?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „pešo“ v kruhovom diagrame?": "Que ângulo central (em graus) terá o setor «a pé» no gráfico de setores?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „vlak“ v kruhovom diagrame?": "Que ângulo central (em graus) terá o setor «trem» no gráfico de setores?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „{@0}“ v kruhovom diagrame?": "Que ângulo central (em graus) terá o setor «{@0}» no gráfico de setores?",
  "Akým číslom sa suma na účte každý rok vynásobí?": "Por qual número a quantia na conta é multiplicada a cada ano?",
  "Basketbalista premení trestný hod s pravdepodobnosťou ${@0}$, hody sú nezávislé. Hádže {@1}-krát; $X$ je počet premenených hodov.": "Um jogador de basquete acerta um lance livre com probabilidade ${@0}$; os lances são independentes. Ele arremessa {@1} vezes; $X$ é o número de lances convertidos.",
  "Biela a čierna môžu prísť v dvoch poradiach. Pri výbere naraz radšej počítaj neusporiadané dvojice: bielu a čiernu guľu vyberáš nezávisle.": "A branca e a preta podem sair em duas ordens. Ao tirar ao mesmo tempo, é melhor contar pares não ordenados: a bola branca e a preta você escolhe de forma independente.",
  "Binomické rozdelenie": "Distribuição binomial",
  "Bod $T[{@0}; {@1}]$ leží na kružnici $k: {@2}$. Dotyčnica ku kružnici v bode $T$ má rovnicu ${@3}+c=0$. Vypočítaj $c$.": "O ponto $T[{@0}; {@1}]$ está na circunferência $k: {@2}$. A tangente à circunferência no ponto $T$ tem a equação ${@3}+c=0$. Calcule $c$.",
  "Celé čísla ${@0}, \\dots, {@1}$ — je ich ${@2}$.": "Os números inteiros ${@0}, \\dots, {@1}$: são ${@2}$.",
  "Chlapcov a dievčatá vyberáš nezávisle (kombinácie, lebo na poradí nezáleží) a počty vynásobíš.": "Os meninos e as meninas você escolhe de forma independente (combinações, pois a ordem não importa) e multiplica os números.",
  "Dané sú funkcie $f(x)={@0}$ a $g(x)={@1}$. Vypočítaj $({@2})({@3})$.": "São dadas as funções $f(x)={@0}$ e $g(x)={@1}$. Calcule $({@2})({@3})$.",
  "Daný je súbor údajov: ${@0}$. Urči jeho {@1}.": "É dado o conjunto de dados: ${@0}$. Determine {@1}.",
  "Definičný obor $(0; \\infty)$ nie je súmerný podľa nuly, funkcia preto nemôže byť párna ani nepárna.": "O domínio $(0; \\infty)$ não é simétrico em relação a zero; por isso a função não pode ser par nem ímpar.",
  "Delíš záporným číslom, znak nerovnosti sa otočí.": "Você divide por um número negativo: o sinal da desigualdade se inverte.",
  "Derivácia je $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Koľko je $f'({@4})$?": "A derivada é $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Quanto vale $f'({@4})$?",
  "Derivácia podielu: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. V bode ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.": "Derivada do quociente: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. No ponto ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.",
  "Derivácia sínusu je kosínus bez mínusu: $(\\sin x)'=\\cos x$. Mínus patrí k derivácii kosínusu.": "A derivada do seno é o cosseno sem sinal de menos: $(\\sin x)'=\\cos x$. O menos pertence à derivada do cosseno.",
  "Derivácia súčinu nie je súčin derivácií: $(u\\cdot v)'=u'v+uv'$, nie $u'\\cdot v'$.": "A derivada de um produto não é o produto das derivadas: $(u\\cdot v)'=u'v+uv'$, não $u'\\cdot v'$.",
  "Derivácia súčinu: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Keďže $\\mathrm{e}^0=1$, je $f'(0)={@3}$.": "Derivada do produto: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Como $\\mathrm{e}^0=1$, temos $f'(0)={@3}$.",
  "Derivácia súčinu: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Keďže $\\ln 1=0$, je $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.": "Derivada do produto: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Como $\\ln 1=0$, temos $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.",
  "Derivácia zloženej funkcie: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. V bode ${@4}$ je vnútorná funkcia ${@5}\\cdot {@6}{@7}={@8}$, teda $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.": "Derivada da função composta: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. No ponto ${@4}$ a função interna vale ${@5}\\cdot {@6}{@7}={@8}$, ou seja, $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.",
  "Determinant sústavy je $m^2-{@0}$, je nulový pre $m=\\pm {@1}$ (inak má sústava jediné riešenie). Pre $m={@2}$ majú rovnice ľavé strany úmerné, ale pravé strany ${@3}$ a ${@4}$ nie: priamky sú rovnobežné rôzne, riešenie neexistuje. Pre $m={@5}$ je druhá rovnica $(-1)$-násobkom prvej: priamky splývajú, riešení je nekonečne veľa. Odpoveď: $m={@6}$.": "O determinante do sistema é $m^2-{@0}$; ele se anula para $m=\\pm {@1}$ (caso contrário o sistema tem uma única solução). Para $m={@2}$ as equações têm os membros esquerdos proporcionais, mas os membros direitos ${@3}$ e ${@4}$ não: as retas são paralelas distintas e não existe solução. Para $m={@5}$ a segunda equação é $(-1)$ vezes a primeira: as retas coincidem e há infinitas soluções. Resposta: $m={@6}$.",
  "Determinant z vektorov $\\vec{AB}$ a $\\vec{AC}$ dáva obsah rovnobežníka. Obsah trojuholníka je jeho polovica.": "O determinante dos vetores $\\vec{AB}$ e $\\vec{AC}$ dá a área do paralelogramo. A área do triângulo é a metade.",
  "Diskriminant je $D=b^2-4ac$. Nezabudni na štvorku pred súčinom $ac$.": "O discriminante é $D=b^2-4ac$. Não se esqueça do quatro antes do produto $ac$.",
  "Diskriminant je $D=b^2-4ac$. Z rovnice $D=0$ treba $c$ ešte vydeliť štyrmi.": "O discriminante é $D=b^2-4ac$. Da equação $D=0$ ainda é preciso dividir $c$ por quatro.",
  "Do vnútra intervalu patrí {@0}.": "No interior do intervalo está {@0}.",
  "Do vzorca pre plášť $\\pi rs$ patrí strana kužeľa $s$, nie výška $v$.": "Na fórmula da superfície lateral $\\pi rs$ entra a geratriz do cone $s$, não a altura $v$.",
  "Dosadením $y={@0}$ dostaneš rovnicu ${@1}=0$. Aký je jej diskriminant?": "Substituindo $y={@0}$, você obtém a equação ${@1}=0$. Qual é o seu discriminante?",
  "Dosadením dostaneme $\\frac{0}{0}$. Menovateľ je rozdiel štvorcov: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.": "Substituindo, obtemos $\\frac{0}{0}$. O denominador é uma diferença de quadrados: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Depois de simplificar, $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.",
  "Dosadením vyjde $\\frac{0}{0}$, čo nie je nula, ale neurčitý výraz. Menovateľ rozlož ako rozdiel štvorcov a vykráť.": "Ao substituir sai $\\frac{0}{0}$, que não é zero, mas uma indeterminação. Fatore o denominador como diferença de quadrados e simplifique.",
  "Dosadením vyšlo $\\frac{0}{0}$, a to nie je nula, ale neurčitý výraz. Čitateľa rozlož na súčin a vykráť.": "Ao substituir saiu $\\frac{0}{0}$, que não é zero, mas uma indeterminação. Fatore o numerador e simplifique.",
  "Dosadil si stred kružnice. Dotyčnica stredom neprechádza, prechádza bodom dotyku $T$.": "Você substituiu o centro da circunferência. A tangente não passa pelo centro, mas pelo ponto de tangência $T$.",
  "Dosadiť sa nedá, menovateľ sa blíži k nule. Deliť číslom blízkym nule dáva v absolútnej hodnote veľmi veľké čísla.": "Não se pode substituir: o denominador tende a zero. Dividir por um número próximo de zero dá números muito grandes em valor absoluto.",
  "Dosadíme ${@0}^2 x=1-{@1}^2 x$ a upravíme: ${@2}{@3}{@4}=0$.": "Substituímos ${@0}^2 x=1-{@1}^2 x$ e simplificamos: ${@2}{@3}{@4}=0$.",
  "Dosaď $-x$ namiesto $x$ a porovnaj $f(-x)$ s $f(x)$ a s $-f(x)$. Over aj, či je definičný obor súmerný podľa nuly.": "Substitua $-x$ no lugar de $x$ e compare $f(-x)$ com $f(x)$ e com $-f(x)$. Verifique também se o domínio é simétrico em relação a zero.",
  "Dosaď bod $P$ do výrazu ${@0}$. Akú hodnotu dostaneš?": "Substitua o ponto $P$ na expressão ${@0}$. Que valor você obtém?",
  "Dosaď bod ${@0}$ do ľavej strany rovnice roviny. Aká je absolútna hodnota výsledku?": "Substitua o ponto ${@0}$ no membro esquerdo da equação do plano. Qual é o valor absoluto do resultado?",
  "Dosaď súradnice bodu $P$ do rovnice roviny a vyjadri $d$.": "Substitua as coordenadas do ponto $P$ na equação do plano e isole $d$.",
  "Dotyčnica je kolmá na polomer $ST$. Do zadanej rovnice dosaď súradnice bodu $T$.": "A tangente é perpendicular ao raio $ST$. Substitua as coordenadas do ponto $T$ na equação dada.",
  "Druhá mocnina pomeru dĺžok platí pre povrch. Zachováva sa však objem, a ten závisí od tretej mocniny.": "O quadrado da razão dos comprimentos vale para a área da superfície. Mas o que se conserva é o volume, e ele depende da terceira potência.",
  "Druhá nerovnica má riešenie $x\\le d$. Aké je číslo $d$?": "A segunda inequação tem a solução $x\\le d$. Qual é o número $d$?",
  "Druhá súradnica inflexného bodu je funkčná hodnota $f({@0})$, nie hodnota $f''({@1})$.": "A segunda coordenada do ponto de inflexão é o valor da função $f({@0})$, não o valor $f''({@1})$.",
  "Druhý koreň čitateľa je $-c$; súčin koreňov je ${@0}$.": "A segunda raiz do numerador é $-c$; o produto das raízes é ${@0}$.",
  "Dvaja strelci vystrelia nezávisle po jednej rane. Prvý zasiahne terč s pravdepodobnosťou ${@0}$, druhý s pravdepodobnosťou ${@1}$. Aká je pravdepodobnosť, že {@2}?": "Dois atiradores disparam de forma independente um tiro cada. O primeiro acerta o alvo com probabilidade ${@0}$, o segundo com probabilidade ${@1}$. Qual é a probabilidade de que {@2}?",
  "Dvojnásobný koreň je pri $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.": "A raiz é dupla quando $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.",
  "Dĺžky sa neodčítajú priamo. Polomer gule je prepona pravouhlého trojuholníka, použi Pytagorovu vetu.": "Os comprimentos não se subtraem diretamente. O raio da esfera é a hipotenusa de um triângulo retângulo: use o teorema de Pitágoras.",
  "Dĺžky strán pravouhlého trojuholníka tvoria aritmetickú postupnosť a jeho obvod je ${@0}\\,\\text{cm}$. Vypočítaj {@1}.": "Os comprimentos dos lados de um triângulo retângulo formam uma progressão aritmética, e o seu perímetro é ${@0}\\,\\text{cm}$. Calcule {@1}.",
  "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">najpravdepodobnejšie k = {@3}</span>": "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">k mais provável = {@3}</span>",
  "E; D": "E; D",
  "Exponenciálna funkcia a k nej inverzná logaritmická funkcia": "Função exponencial e a sua inversa, a função logarítmica",
  "Funkcia $f(x)=\\dfrac{{@0}}{{@1}}$ je prostá. Vypočítaj $f^{-1}\\!\\left({@2}\\right)$.": "A função $f(x)=\\dfrac{{@0}}{{@1}}$ é injetora. Calcule $f^{-1}\\!\\left({@2}\\right)$.",
  "Funkcia $f(x)={@0}$ má práve jedno {@1}. Nájdi bod, v ktorom ho nadobúda: zadaj $x$ a $f(x)$ (napr. 2; -5).": "A função $f(x)={@0}$ tem exatamente um {@1}. Encontre o ponto em que ela o atinge: digite $x$ e $f(x)$ (por exemplo, 2; -5).",
  "Funkcia je konvexná tam, kde $f''(x)&gt;0$. Vypočítaj druhú deriváciu a vyrieš lineárnu nerovnicu.": "A função é convexa onde $f''(x)&gt;0$. Calcule a segunda derivada e resolva a inequação linear.",
  "Funkcie sú rôzne, takže záleží na tom, kto je predseda a kto pokladník. Ide o variácie, nie kombinácie.": "Os cargos são diferentes, então importa quem é o presidente e quem é o tesoureiro. Trata-se de arranjos, não de combinações.",
  "Graf": "Gráfico",
  "Graf funkcie sin x / x s dierou v bode 0": "Gráfico da função sen x / x com um buraco no ponto 0",
  "Graf funkcie x na tretiu mínus 3x s extrémami": "Gráfico da função x ao cubo menos 3x com os seus extremos",
  "Graf racionálnej funkcie s asymptotami": "Gráfico de uma função racional com as suas assíntotas",
  "Grafy funkcií e na x a ln x s dotyčnicami": "Gráficos das funções e elevado a x e ln x com as suas tangentes",
  "Gule ťaháme naraz, teda bez vrátenia. Po vytiahnutí bielej je v urne o jednu bielu menej.": "As bolas são tiradas ao mesmo tempo, ou seja, sem reposição. Depois de tirar uma branca, há na urna uma branca a menos.",
  "Guľu s polomerom $r={@0}\\,\\text{cm}$ pretne rovina vo vzdialenosti ${@1}\\,\\text{cm}$ od stredu gule. Vypočítaj {@2}": "Uma esfera de raio $r={@0}\\,\\text{cm}$ é cortada por um plano à distância de ${@1}\\,\\text{cm}$ do centro da esfera. Calcule {@2}",
  "Hodnota ${@0}$ je síce koreňom $V'(x)$, ale nepatrí do prípustného intervalu: krabica by nemala žiadne dno.": "O valor ${@0}$ é raiz de $V'(x)$, mas não pertence ao intervalo admissível: a caixa não teria fundo.",
  "Hodnota ${@0}$ leží mimo $\\langle -1; 1\\rangle$, tá riešenie nedáva.": "O valor ${@0}$ está fora de $\\langle -1; 1\\rangle$, não dá nenhuma solução.",
  "Hodnotu inverznej funkcie nájdeš bez jej predpisu: hľadáš $x$, pre ktoré $f(x)$ dá zadané číslo.": "O valor da função inversa você encontra sem a sua fórmula: procura o $x$ para o qual $f(x)$ dá o número dado.",
  "Hodnoty sú celé čísla získané počítaním, medzi dvoma susednými nie je iná možná hodnota.": "Os valores são números inteiros obtidos por contagem; entre dois valores vizinhos não há outro valor possível.",
  "Hodnoty sú slová (kategórie), nie čísla.": "Os valores são palavras (categorias), não números.",
  "Hodnoty tohto znaku sú slová (kategórie), nie čísla.": "Os valores dessa variável são palavras (categorias), não números.",
  "Hodnoty tohto znaku sú čísla, takže znak je kvantitatívny.": "Os valores dessa variável são números, então a variável é quantitativa.",
  "Hodnoty získavame meraním a môžu byť ľubovoľným číslom z nejakého intervalu.": "Os valores são obtidos por medição e podem ser qualquer número de um intervalo.",
  "Hodnoty získavame meraním, môžu byť ľubovoľným číslom z nejakého intervalu (aj desatinným).": "Os valores são obtidos por medição e podem ser qualquer número de um intervalo (também decimal).",
  "Hodnoty získavame počítaním, sú to len celé čísla. Medzi dvoma susednými hodnotami nie je iná možná hodnota.": "Os valores são obtidos por contagem; são só números inteiros. Entre dois valores vizinhos não há outro valor possível.",
  "Hodíme naraz dvoma hracími kockami. Aká je pravdepodobnosť, že {@0}? {@1}": "Lançamos ao mesmo tempo dois dados. Qual é a probabilidade de que {@0}? {@1}",
  "Hranica intervalu konvexnosti je inflexný bod, v ktorom $f''(x)=0$. Over, kde je druhá derivácia nulová.": "O limite do intervalo de convexidade é o ponto de inflexão, onde $f''(x)=0$. Verifique onde a segunda derivada se anula.",
  "Hranice integrálu sú nulové body paraboly. Funkcia je párna, môžeš počítať $2\\int_0^{m}$.": "Os limites da integral são os zeros da parábola. A função é par, você pode calcular $2\\int_0^{m}$.",
  "Hranol má dve podstavy, hornú aj dolnú. Obsah podstavy započítaj dvakrát.": "O prisma tem duas bases, a superior e a inferior. Conte a área da base duas vezes.",
  "Hrany sa zväčšia o ${@0}\\,\\%$, {@1} však rastie rýchlejšie: koeficient podobnosti treba umocniť.": "As arestas aumentam ${@0}\\,\\%$, mas {@1} cresce mais depressa: é preciso elevar a razão de semelhança.",
  "Hráč hodí hracou kockou {@0}-krát. Aká je pravdepodobnosť, že aspoň raz padne šestka? Výsledok zaokrúhli na 3 desatinné miesta.": "Um jogador lança um dado {@0} vezes. Qual é a probabilidade de sair pelo menos um seis? Arredonde o resultado para 3 casas decimais.",
  "Hráč hodí {@0}-krát hracou kockou. Náhodná premenná $X$ je počet hodov, v ktorých padla šestka.": "Um jogador lança um dado {@0} vezes. A variável aleatória $X$ é o número de lançamentos em que saiu seis.",
  "Hráč zapisoval počet bodov v jednotlivých zápasoch: ${@0}$. Aký je modus tohto súboru?": "Um jogador anotou o número de pontos em cada partida: ${@0}$. Qual é a moda desse conjunto?",
  "Hľadisko letného amfiteátra má v prvom rade {@0} {@1} a každý ďalší rad má o {@2} {@3} viac. Koľko radov treba najmenej postaviť, aby bolo spolu aspoň {@4} sedadiel?": "A arquibancada de um anfiteatro de verão tem na primeira fila {@0} {@1}, e cada fila seguinte tem {@2} {@3} a mais. Quantas filas, no mínimo, é preciso construir para que haja ao todo pelo menos {@4} lugares?",
  "Hľadá sa hodnota funkcie, nie bod $x$, v ktorom ju nadobúda.": "Procura-se o valor da função, não o ponto $x$ em que ela o atinge.",
  "Hľadáme $t$ tak, aby $A+t\\vec{u}=Q$. Z prvej rovnice {@0} je $t={@1}$. Ďalšie rovnice: {@2} a {@3} — {@4}": "Procuramos $t$ tal que $A+t\\vec{u}=Q$. Da primeira equação {@0} temos $t={@1}$. As outras equações: {@2} e {@3} — {@4}",
  "Hľadáme najmenšie prirodzené $n$, pre ktoré ${@0}^n\\ge {@1}$. Logaritmovaním: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, teda $n={@5}$.": "Procuramos o menor $n$ natural para o qual ${@0}^n\\ge {@1}$. Aplicando logaritmos: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, ou seja, $n={@5}$.",
  "Ide o permutácie: ${@0}!={@1}$.": "Trata-se de permutações: ${@0}!={@1}$.",
  "Inflexný bod hľadaj tam, kde $f''(x)=0$ a druhá derivácia mení znamienko.": "Procure o ponto de inflexão, onde $f''(x)=0$ e a segunda derivada muda de sinal.",
  "Integroval si len od $0$ do ${@0}$, to je polovica útvaru. Dolná hranica je druhý nulový bod paraboly.": "Você integrou só de $0$ a ${@0}$, que é a metade da figura. O limite inferior é o outro zero da parábola.",
  "Integruj ako mocninu, $\\frac{u^{n+1}}{n+1}$, a výsledok vydeľ koeficientom pri $x$ vnútri zátvorky.": "Integre como potência, $\\frac{u^{n+1}}{n+1}$, e divida o resultado pelo coeficiente de $x$ dentro do parêntese.",
  "Integrál mocniny je $\\frac{u^{{@0}}}{{@1}}$: exponent sa zvýši o jedna a zároveň sa ním delí.": "A integral de uma potência é $\\frac{u^{{@0}}}{{@1}}$: o expoente aumenta em um e ao mesmo tempo se divide por ele.",
  "Inverznou funkciou k exponenciálnej je logaritmická. Hľadáš $x$, pre ktoré ${@0}^{{@1}}{@2}={@3}$.": "A função inversa da exponencial é a logarítmica. Você procura o $x$ para o qual ${@0}^{{@1}}{@2}={@3}$.",
  "Inverzná funkcia k funkcii $f(x)={@0}$ má tvar $f^{-1}(x)=kx+q$. Zadaj $k$ a $q$ (napr. 1/2; -3).": "A função inversa da função $f(x)={@0}$ tem a forma $f^{-1}(x)=kx+q$. Digite $k$ e $q$ (por exemplo, 1/2; -3).",
  "Inverzná funkcia vráti operácie v opačnom poradí: násobenie sa zmení na delenie. Vymeň $x$ a $y$ a vyjadri $y$.": "A função inversa desfaz as operações na ordem inversa: a multiplicação vira divisão. Troque $x$ e $y$ e isole $y$.",
  "Inverzná funkcia: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.": "Função inversa: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.",
  "BAC": "BAC",
  "BAD": "BAD",
  "BAE": "BAE",
  "BAF": "BAF",
  "BAG": "BAG",
  "BAH": "BAH",
  "BCA": "BCA",
  "BCD": "BCD",
  "BCF": "BCF",
  "BCG": "BCG",
  "BCH": "BCH",
  "BDA": "BDA",
  "BDC": "BDC",
  "BDE": "BDE",
  "BDF": "BDF",
  "BDG": "BDG",
  "BDH": "BDH",
  "BEA": "BEA",
  "BEC": "BEC",
  "BED": "BED",
  "BEF": "BEF",
  "BEG": "BEG",
  "BFA": "BFA",
  "BFC": "BFC",
  "BFD": "BFD",
  "BFE": "BFE",
  "BFG": "BFG",
  "BFH": "BFH",
  "BGC": "BGC",
  "BGD": "BGD",
  "BGE": "BGE",
  "BGF": "BGF",
  "BGH": "BGH",
  "BHA": "BHA",
  "BHC": "BHC",
  "BHD": "BHD",
  "BHE": "BHE",
  "BHF": "BHF",
  "BHG": "BHG",
  "CAB": "CAB",
  "CAD": "CAD",
  "CAE": "CAE",
  "CAF": "CAF",
  "CAG": "CAG",
  "CAH": "CAH",
  "CBA": "CBA",
  "CBD": "CBD",
  "CBE": "CBE",
  "CBF": "CBF",
  "CBG": "CBG",
  "CBH": "CBH",
  "CDA": "CDA",
  "CDB": "CDB",
  "CDE": "CDE",
  "CDF": "CDF",
  "CDG": "CDG",
  "CDH": "CDH",
  "CEA": "CEA",
  "CEB": "CEB",
  "CED": "CED",
  "CEF": "CEF",
  "CEG": "CEG",
  "CEH": "CEH",
  "CFA": "CFA",
  "CFD": "CFD",
  "CFE": "CFE",
  "CFG": "CFG",
  "CGA": "CGA",
  "CGB": "CGB",
  "CGD": "CGD",
  "CGF": "CGF",
  "CGH": "CGH",
  "CHB": "CHB",
  "CHD": "CHD",
  "CHE": "CHE",
  "CHF": "CHF",
  "CHG": "CHG",
  "DAB": "DAB",
  "DAC": "DAC",
  "DAE": "DAE",
  "DAF": "DAF",
  "DAG": "DAG",
  "DAH": "DAH",
  "DBA": "DBA",
  "DBC": "DBC",
  "DBE": "DBE",
  "DBF": "DBF",
  "DBG": "DBG",
  "DBH": "DBH",
  "DCA": "DCA",
  "DCB": "DCB",
  "DCE": "DCE",
  "DCF": "DCF",
  "DCG": "DCG",
  "DCH": "DCH",
  "DEA": "DEA",
  "DEB": "DEB",
  "DEC": "DEC",
  "DEF": "DEF",
  "DEG": "DEG",
  "DEH": "DEH",
  "DFA": "DFA",
  "DFB": "DFB",
  "DFC": "DFC",
  "DFE": "DFE",
  "DFG": "DFG",
  "DFH": "DFH",
  "DGA": "DGA",
  "DGB": "DGB",
  "DGC": "DGC",
  "DGE": "DGE",
  "DGF": "DGF",
  "DGH": "DGH",
  "DHB": "DHB",
  "DHC": "DHC",
  "DHE": "DHE",
  "DHF": "DHF",
  "DHG": "DHG",
  "EAB": "EAB",
  "EAC": "EAC",
  "EAD": "EAD",
  "EAF": "EAF",
  "EAG": "EAG",
  "EAH": "EAH",
  "EBA": "EBA",
  "EBC": "EBC",
  "EBD": "EBD",
  "EBF": "EBF",
  "EBG": "EBG",
  "EBH": "EBH",
  "ECA": "ECA",
  "ECB": "ECB",
  "ECD": "ECD",
  "ECF": "ECF",
  "ECG": "ECG",
  "ECH": "ECH",
  "EDA": "EDA",
  "EDB": "EDB",
  "EDC": "EDC",
  "EDF": "EDF",
  "EDG": "EDG",
  "EDH": "EDH",
  "EFA": "EFA",
  "EFB": "EFB",
  "EFC": "EFC",
  "EFD": "EFD",
  "EFG": "EFG",
  "EFH": "EFH",
  "EGB": "EGB",
  "EGC": "EGC",
  "EGD": "EGD",
  "EGF": "EGF",
  "EGH": "EGH",
  "EHA": "EHA",
  "EHB": "EHB",
  "EHC": "EHC",
  "EHD": "EHD",
  "EHF": "EHF",
  "EHG": "EHG",
  "FAB": "FAB",
  "FAC": "FAC",
  "FAD": "FAD",
  "FAE": "FAE",
  "FAG": "FAG",
  "FAH": "FAH",
  "FBA": "FBA",
  "FBC": "FBC",
  "FBD": "FBD",
  "FBE": "FBE",
  "FBG": "FBG",
  "FBH": "FBH",
  "FCA": "FCA",
  "FCB": "FCB",
  "FCD": "FCD",
  "FCE": "FCE",
  "FCG": "FCG",
  "FCH": "FCH",
  "FDA": "FDA",
  "FDC": "FDC",
  "FDE": "FDE",
  "FDG": "FDG",
  "FDH": "FDH",
  "FEA": "FEA",
  "FEB": "FEB",
  "FEC": "FEC",
  "FED": "FED",
  "FEG": "FEG",
  "FEH": "FEH",
  "FGA": "FGA",
  "FGB": "FGB",
  "FGC": "FGC",
  "FGD": "FGD",
  "FGE": "FGE",
  "FGH": "FGH",
  "FHA": "FHA",
  "FHB": "FHB",
  "FHC": "FHC",
  "FHD": "FHD",
  "FHE": "FHE",
  "FHG": "FHG",
  "GAB": "GAB",
  "GAC": "GAC",
  "GAD": "GAD",
  "GAE": "GAE",
  "GAH": "GAH",
  "GBA": "GBA",
  "GBC": "GBC",
  "GBD": "GBD",
  "GBE": "GBE",
  "GBF": "GBF",
  "GBH": "GBH",
  "GCA": "GCA",
  "GCB": "GCB",
  "GCD": "GCD",
  "GCH": "GCH",
  "GDA": "GDA",
  "GDB": "GDB",
  "GDC": "GDC",
  "GDE": "GDE",
  "GDF": "GDF",
  "GDH": "GDH",
  "GEA": "GEA",
  "GEB": "GEB",
  "GEC": "GEC",
  "GED": "GED",
  "GEH": "GEH",
  "GFA": "GFA",
  "GFB": "GFB",
  "GFC": "GFC",
  "GFD": "GFD",
  "GFE": "GFE",
  "GFH": "GFH",
  "GHA": "GHA",
  "GHB": "GHB",
  "GHC": "GHC",
  "GHD": "GHD",
  "HAB": "HAB",
  "HAC": "HAC",
  "HAD": "HAD",
  "HAE": "HAE",
  "HAF": "HAF",
  "HAG": "HAG",
  "HBA": "HBA",
  "HBC": "HBC",
  "HBD": "HBD",
  "HBE": "HBE",
  "HBF": "HBF",
  "HBG": "HBG",
  "HCA": "HCA",
  "HCB": "HCB",
  "HCD": "HCD",
  "HCE": "HCE",
  "HCF": "HCF",
  "HCG": "HCG",
  "HDA": "HDA",
  "HDB": "HDB",
  "HDC": "HDC",
  "HDE": "HDE",
  "HDF": "HDF",
  "HDG": "HDG",
  "HEA": "HEA",
  "HEB": "HEB",
  "HEC": "HEC",
  "HED": "HED",
  "HEF": "HEF",
  "HEG": "HEG",
  "HFA": "HFA",
  "HFB": "HFB",
  "HFC": "HFC",
  "HFD": "HFD",
  "HFE": "HFE",
  "HFG": "HFG",
  "HGB": "HGB",
  "HGC": "HGC",
  "HGD": "HGD",
  "HGE": "HGE",
  "HGF": "HGF",
  "Jav „aspoň jeden úspech“ je opačný k javu „ani jeden úspech“.": "O evento «pelo menos um sucesso» é o complementar do evento «nenhum sucesso».",
  "Jav „aspoň jedna biela“ zahŕňa aj prípad, keď je jedna biela a jedna čierna. Použi opačný jav „obe čierne“.": "O evento «pelo menos uma branca» inclui também o caso de uma branca e uma preta. Use o evento complementar «as duas pretas».",
  "Javy „prvý zasiahne“ a „druhý zasiahne“ môžu nastať súčasne: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Alebo použi opačný jav.": "Os eventos «o primeiro acerta» e «o segundo acerta» podem ocorrer ao mesmo tempo: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Ou use o evento complementar.",
  "Je daná funkcia $f(x)={@0}^{{@1}}{@2}$. Vypočítaj $f^{-1}({@3})$.": "É dada a função $f(x)={@0}^{{@1}}{@2}$. Calcule $f^{-1}({@3})$.",
  "Je funkcia $f(x)={@0}$ párna, nepárna, alebo ani jedno?": "A função $f(x)={@0}$ é par, ímpar ou nenhuma das duas?",
  "Jedna osoba môže mať najviac jednu funkciu, ďalšiu funkciu už vyberáš len zo zvyšných ľudí.": "Uma pessoa pode ter no máximo um cargo; o cargo seguinte você escolhe só entre as pessoas restantes.",
  "Jedna súradnica nestačí: to isté $t$ musí vyhovovať všetkým trom rovniciam. Over aj $y$ a $z$.": "Uma coordenada não basta: o mesmo $t$ deve satisfazer as três equações. Verifique também $y$ e $z$.",
  "Jedného človeka posadíme na ľubovoľné miesto (otočenia nerozlišujeme), ostatných {@0} usporiadame: $({@1}-1)!={@2}!={@3}$.": "Sentamos uma pessoa num lugar qualquer (não distinguimos rotações) e ordenamos as outras {@0}: $({@1}-1)!={@2}!={@3}$.",
  "KAJAK": "KAJAK",
  "Kandidáti sú stacionárne body vnútri intervalu a oba krajné body. Vypočítaj v nich funkčné hodnoty a porovnaj ich.": "Os candidatos são os pontos críticos no interior do intervalo e as duas extremidades. Calcule neles os valores da função e compare.",
  "Každé podanie rúk je dvojica ľudí, na poradí nezáleží: $\\binom{n}{2}$. Zostav kvadratickú rovnicu.": "Cada aperto de mão é um par de pessoas, a ordem não importa: $\\binom{n}{2}$. Monte uma equação do segundo grau.",
  "Každú uhlopriečku si započítal dvakrát, z oboch jej koncových vrcholov. Výsledok vydeľ dvoma.": "Você contou cada diagonal duas vezes, a partir dos seus dois vértices extremos. Divida o resultado por dois.",
  "Každú známku vynásob počtom žiakov, ktorí ju dostali, výsledky sčítaj a vydeľ počtom všetkých žiakov.": "Multiplique cada nota pelo número de alunos que a obtiveram, some os resultados e divida pelo número total de alunos.",
  "Každý rok sa suma vynásobí číslom $1+\\frac{p}{100}$ — ide o geometrickú postupnosť.": "A cada ano a quantia é multiplicada por $1+\\frac{p}{100}$: trata-se de uma progressão geométrica.",
  "Každý vrchol spojíme s $n-3$ nesusednými vrcholmi a každú uhlopriečku tak započítame dvakrát: $\\frac{n(n-3)}{2}$. {@0}": "Ligamos cada vértice aos $n-3$ vértices não vizinhos e assim contamos cada diagonal duas vezes: $\\frac{n(n-3)}{2}$. {@0}",
  "Keby boli všetky písmená rôzne, bolo by ich $n!$. Výmena rovnakých písmen nové slovo nedá, preto vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Se todas as letras fossem diferentes, haveria $n!$ ordenações. Trocar letras iguais não dá uma palavra nova, por isso divida pelos fatoriais dos números de letras repetidas.",
  "Kocka $ABCDEFGH$ má hranu $a={@0}\\,\\text{cm}$.": "O cubo $ABCDEFGH$ tem aresta $a={@0}\\,\\text{cm}$.",
  "Kocka ABCDEFGH s vyznačenými priamkami": "Cubo ABCDEFGH com as retas destacadas",
  "Kocka s telesovou uhlopriečkou a uhlom s rovinou podstavy": "Cubo com a diagonal e o seu ângulo com o plano da base",
  "Kocky rozlišujeme: $[1; 2]$ a $[2; 1]$ sú dva rôzne výsledky. Započítaj obe poradia.": "Os dados são distinguíveis: $[1; 2]$ e $[2; 1]$ são dois resultados diferentes. Conte as duas ordens.",
  "Koeficient podobnosti je $k={@0}$. Koľkokrát sa zväčší {@1}? Zadaj číslo na 4 desatinné miesta.": "A razão de semelhança é $k={@0}$. Quantas vezes aumenta {@1}? Digite o número com 4 casas decimais.",
  "Koeficient podobnosti je $k={@0}$. {@1} sa zmení $k^{{@2}}={@3}$-krát, teda sa zväčší o ${@4}\\,\\%$.": "A razão de semelhança é $k={@0}$. {@1} muda $k^{{@2}}={@3}$ vezes, ou seja, aumenta ${@4}\\,\\%$.",
  "Konvexný mnohouholník má {@0} uhlopriečok. Koľko má vrcholov?": "Um polígono convexo tem {@0} diagonais. Quantos vértices ele tem?",
  "Koreň $t_2={@0}$ je záporný a rovnica ${@1}^{x}={@2}$ nemá riešenie.": "A raiz $t_2={@0}$ é negativa, e a equação ${@1}^{x}={@2}$ não tem solução.",
  "Koľko celých čísel ju spĺňa?": "Quantos números inteiros a satisfazem?",
  "Koľko celých čísel leží v prieniku?": "Quantos números inteiros há na interseção?",
  "Koľko eur bude na účte po {@0} rokoch? Výsledok zaokrúhli na centy.": "Quantos euros haverá na conta depois de {@0} anos? Arredonde o resultado aos centavos.",
  "Koľko je $f'(0)$?": "Quanto vale $f'(0)$?",
  "Koľko je $f'({@0})$? Zadaj celé číslo alebo zlomok.": "Quanto vale $f'({@0})$? Digite um número inteiro ou uma fração.",
  "Koľko je $x=f^{-1}({@0})$?": "Quanto vale $x=f^{-1}({@0})$?",
  "Koľko je ${@0}!$?": "Quanto vale ${@0}!$?",
  "Koľko je spolu možností?": "Quantas possibilidades há ao todo?",
  "Koľko je trojíc, v ktorých sú len chlapci?": "Quantos trios há formados só por meninos?",
  "Koľko je všetkých trojíc?": "Quantos trios há ao todo?",
  "Koľko je všetkých výberov dvoch gúľ?": "Quantas escolhas de duas bolas há ao todo?",
  "Koľko percent to je?": "Que porcentagem é essa?",
  "Koľko percent žiakov odpovedalo „autobus“?": "Que porcentagem dos alunos respondeu «ônibus»?",
  "Koľko percent žiakov odpovedalo „auto“?": "Que porcentagem dos alunos respondeu «carro»?",
  "Koľko percent žiakov odpovedalo „bicykel“?": "Que porcentagem dos alunos respondeu «bicicleta»?",
  "Koľko percent žiakov odpovedalo „pešo“?": "Que porcentagem dos alunos respondeu «a pé»?",
  "Koľko percent žiakov odpovedalo „vlak“?": "Que porcentagem dos alunos respondeu «trem»?",
  "Koľko percent žiakov odpovedalo „{@0}“?": "Que porcentagem dos alunos respondeu «{@0}»?",
  "Koľko rokov má nový člen?": "Quantos anos tem o novo membro?",
  "Koľko rôznych „slov“ (aj nezmyselných) vznikne preusporiadaním všetkých písmen slova {@0}?": "Quantas «palavras» diferentes (também sem sentido) se obtêm reordenando todas as letras da palavra {@0}?",
  "Koľko uhlopriečok má konvexný {@0}-uholník?": "Quantas diagonais tem um polígono convexo de {@0} lados?",
  "Koľko {@0} {@1}čísel možno zostaviť z cifier {@2}, ak sa cifry {@3}?": "Quantos números {@0} {@1} podem ser formados com os algarismos {@2}, se os algarismos {@3}?",
  "Koľkokrát najmenej musíme hodiť hracou kockou, aby pravdepodobnosť, že aspoň raz padne šestka, bola väčšia ako ${@0}$?": "Quantas vezes, no mínimo, devemos lançar um dado para que a probabilidade de sair pelo menos um seis seja maior que ${@0}$?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť do radu na {@1} stoličiek?": "De quantas maneiras {@0} pessoas podem sentar numa fila de {@1} cadeiras?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť okolo okrúhleho stola, ak rozlišujeme len to, kto sedí vedľa koho (otočenie celého rozsadenia nič nemení)?": "De quantas maneiras {@0} pessoas podem sentar em volta de uma mesa redonda, se só distinguimos quem senta ao lado de quem (girar toda a disposição não muda nada)?",
  "Koľkými spôsobmi vyberieme chlapcov?": "De quantas maneiras escolhemos os meninos?",
  "Koľkými spôsobmi vyberieme dievčatá?": "De quantas maneiras escolhemos as meninas?",
  "Krabicový graf": "Diagrama de caixa",
  "Kružnica a priamka": "Circunferência e reta",
  "Ktoré z koreňov spĺňajú podmienky? Zadaj všetky riešenia rovnice.": "Quais raízes satisfazem as condições? Digite todas as soluções da equação.",
  "Ktorý koreň $V'(x)$ leží v intervale $(0; {@0})$?": "Qual raiz de $V'(x)$ está no intervalo $(0; {@0})$?",
  "Ktorý zápis vyjadruje všetky riešenia rovnice ${@0}$ v $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?": "Qual expressão descreve todas as soluções da equação ${@0}$ em $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?",
  "Kvadratická funkcia $f'$ má medzi koreňmi opačné znamienko ako jej vedúci koeficient.": "A função quadrática $f'$ tem entre as raízes o sinal oposto ao do seu coeficiente dominante.",
  "Kvadratická rovnica má dvojnásobný koreň práve vtedy, keď je diskriminant nulový.": "Uma equação do segundo grau tem raiz dupla se, e somente se, o discriminante é zero.",
  "Leží bod $Q{@0}$ na priamke $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?": "O ponto $Q{@0}$ está na reta $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?",
  "Lokálne maximum": "Máximo local",
  "Lokálne minimum": "Mínimo local",
  "MATEMATIKA": "MATEMATIKA",
  "Medián je priemer {@0}. a {@1}. hodnoty": "A mediana é a média do {@0}º e do {@1}º valor",
  "Medián je priemer {@0}. a {@1}. hodnoty: $\\frac{{@2}+{@3}}{2}={@4}$.": "A mediana é a média do {@0}º e do {@1}º valor: $\\frac{{@2}+{@3}}{2}={@4}$.",
  "Medián je {@0}. hodnota": "A mediana é o {@0}º valor",
  "Medián je {@0}. hodnota: ${@1}$.": "A mediana é o {@0}º valor: ${@1}$.",
  "Medián nie je prostredná zo známok 1 až 5. Je to prostredná hodnota, keď známky všetkých žiakov zoradíš za sebou.": "A mediana não é a nota do meio entre 1 e 5. É o valor central quando você ordena, uma após a outra, as notas de todos os alunos.",
  "Menovateľ je nulový pre $x={@0}$ a čitateľ tam nulový nie je (lebo $ad-bc={@1}\\neq 0$), preto je $x={@2}$ zvislá asymptota. Pre $x\\to\\pm\\infty$ sa $f(x)$ blíži k podielu koeficientov pri $x$: $\\frac{{@3}}{{@4}}={@5}$, vodorovná asymptota je $y={@6}$.": "O denominador se anula para $x={@0}$ e o numerador ali não se anula (pois $ad-bc={@1}\\neq 0$), por isso $x={@2}$ é uma assíntota vertical. Para $x\\to\\pm\\infty$, $f(x)$ se aproxima do quociente dos coeficientes de $x$: $\\frac{{@3}}{{@4}}={@5}$, a assíntota horizontal é $y={@6}$.",
  "Menovateľ rozložíme: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení zostane $\\frac{1}{\\sqrt{x}+{@3}}$. Akú hodnotu má $\\sqrt{x}+{@4}$ pre $x={@5}$?": "Fatoramos o denominador: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Depois de simplificar, sobra $\\frac{1}{\\sqrt{x}+{@3}}$. Que valor tem $\\sqrt{x}+{@4}$ para $x={@5}$?",
  "Mimobežné priamky neležia v jednej rovine. Skús nájsť stenu alebo rez kocky, v ktorom ležia obe priamky.": "Retas reversas não estão num mesmo plano. Tente encontrar uma face ou uma seção do cubo em que as duas retas estejam.",
  "Množina riešení sústavy troch lineárnych nerovníc": "Conjunto solução de um sistema de três inequações lineares",
  "Mocniny s rovnakým exponentom $x$ daj na jednu stranu, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, a potom obe strany zlogaritmuj.": "Passe as potências com o mesmo expoente $x$ para um mesmo membro, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, e depois aplique logaritmos aos dois membros.",
  "Modus je hodnota s najväčšou početnosťou. Spočítaj, koľkokrát sa vyskytuje každá hodnota.": "A moda é o valor de maior frequência. Conte quantas vezes aparece cada valor.",
  "Na ktorom intervale je funkcia $f(x)={@0}$ konvexná?": "Em que intervalo a função $f(x)={@0}$ é convexa?",
  "Na ktorých intervaloch je funkcia $f(x)={@0}$ {@1}?": "Em quais intervalos a função $f(x)={@0}$ é {@1}?",
  "Na poradí nezáleží, ide o kombinácie: chlapcov vyberieme $\\binom{{@0}}{{@1}}={@2}$ spôsobmi, dievčatá $\\binom{{@3}}{{@4}}={@5}$ spôsobmi. Podľa pravidla súčinu je spolu ${@6}\\cdot {@7}={@8}$ možností.": "A ordem não importa, trata-se de combinações: os meninos escolhemos de $\\binom{{@0}}{{@1}}={@2}$ maneiras, as meninas de $\\binom{{@3}}{{@4}}={@5}$ maneiras. Pelo princípio multiplicativo há ao todo ${@6}\\cdot {@7}={@8}$ possibilidades.",
  "Na prvé miesto môžeme dať {@0} ({@1} {@2}), na ďalšie miesta {@3}. Spolu ${@4}={@5}$.": "Na primeira posição podemos pôr {@0} ({@1} {@2}); nas posições seguintes, {@3}. Ao todo ${@4}={@5}$.",
  "Na stretnutí si každý účastník podal ruku s každým iným práve raz. Podaní rúk bolo {@0}. Koľko ľudí bolo na stretnutí?": "Numa reunião, cada participante apertou a mão de cada um dos outros exatamente uma vez. Houve {@0} apertos de mão. Quantas pessoas havia na reunião?",
  "Na tomto intervale leží stacionárny bod, v ktorom $f'$ mení znamienko, takže tam funkcia nie je monotónna.": "Nesse intervalo há um ponto crítico em que $f'$ muda de sinal, então a função não é monótona nele.",
  "Na valci je len polguľa, jej objem je polovica objemu gule.": "Sobre o cilindro há só uma semiesfera; o seu volume é a metade do volume da esfera.",
  "Na účet sme vložili ${@0}\\,€$ s ročnou úrokovou sadzbou ${@1}\\,\\%$, úroky sa pripisujú raz ročne a ponechávajú na účte (daň neuvažujeme). Koľko eur bude na účte po {@2} rokoch? Výsledok zaokrúhli na centy.": "Depositamos ${@0}\\,€$ numa conta com taxa de juros anual de ${@1}\\,\\%$; os juros são creditados uma vez por ano e ficam na conta (não consideramos impostos). Quantos euros haverá na conta depois de {@2} anos? Arredonde o resultado aos centavos.",
  "Najmenšie celé číslo v ňom je ${@0}$.": "O menor número inteiro nela é ${@0}$.",
  "Najprv nájdi hodnoty $m$, pre ktoré je determinant $m\\cdot m-k\\cdot k$ nulový. Potom pre každú z nich dosaď $m$ a porovnaj rovnice.": "Primeiro encontre os valores de $m$ para os quais o determinante $m\\cdot m-k\\cdot k$ se anula. Depois, para cada um deles, substitua $m$ e compare as equações.",
  "Najprv nájdi priesečníky, potom integruj rozdiel „horná mínus dolná“ funkcia.": "Primeiro encontre os pontos de interseção e depois integre a diferença «função de cima menos a de baixo».",
  "Najprv rozhodni, či sú hodnoty slová alebo čísla. Pri číslach rozlíš počítanie (diskrétny) a meranie (spojitý).": "Primeiro decida se os valores são palavras ou números. Se forem números, distinga entre contar (discreta) e medir (contínua).",
  "Najprv vypočítaj stranu $s$ z pravouhlého trojuholníka s odvesnami $v$ a $R-r$. Povrch tvoria dve podstavy a plášť $\\pi s(R+r)$.": "Primeiro calcule a geratriz $s$ a partir do triângulo retângulo de catetos $v$ e $R-r$. A área da superfície é formada pelas duas bases e pela superfície lateral $\\pi s(R+r)$.",
  "Najprv vypočítaj vnútornú funkciu: ${@0}({@1})$.": "Primeiro calcule a função interna: ${@0}({@1})$.",
  "Najčastejšie sa vyskytuje hodnota ${@0}$ (trikrát), ostatné hodnoty najviac dvakrát. Modus je ${@1}$.": "O valor que aparece com mais frequência é ${@0}$ (três vezes), os outros valores no máximo duas vezes. A moda é ${@1}$.",
  "Napríklad $f(1)={@0}$ a $f(-1)={@1}$; neplatí $f(-1)=f(1)$ ani $f(-1)=-f(1)$.": "Por exemplo, $f(1)={@0}$ e $f(-1)={@1}$; não vale nem $f(-1)=f(1)$ nem $f(-1)=-f(1)$.",
  "Napíš rovnicu dotyčnice ku grafu funkcie $f(x)={@0}$ v bode s $x$-ovou súradnicou $x_0={@1}$ v tvare $y=kx+q$. Zadaj $k$ a $q$.": "Escreva a equação da reta tangente ao gráfico da função $f(x)={@0}$ no ponto de abscissa $x_0={@1}$, na forma $y=kx+q$. Digite $k$ e $q$.",
  "Načrtni priamky a nájdi vrcholy oblasti ako priesečníky hraničných priamok. Oblasť je trojuholník.": "Desenhe as retas e encontre os vértices da região como pontos de interseção das retas limite. A região é um triângulo.",
  "Nech $u={@0}$, $v=\\ln x$. Akú hodnotu má člen $u'v={@1}\\ln x$ v bode $1$?": "Seja $u={@0}$, $v=\\ln x$. Que valor tem o termo $u'v={@1}\\ln x$ no ponto $1$?",
  "Nech $u={@0}$, $v=\\mathrm{e}^x$. Akú hodnotu má člen $u'v$ v bode $0$?": "Seja $u={@0}$, $v=\\mathrm{e}^x$. Que valor tem o termo $u'v$ no ponto $0$?",
  "Nech $x$ je dĺžka strán kolmých na stenu. Strana rovnobežná so stenou má dĺžku ${@0}-2x$ a obsah je $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ pre $x={@4}$ a $S''=-4&lt;0$, ide o maximum. Rozmery sú ${@5}\\,\\text{m}$ a ${@6}\\,\\text{m}$, obsah ${@7}\\,\\text{m}^2$.": "Seja $x$ o comprimento dos lados perpendiculares ao muro. O lado paralelo ao muro mede ${@0}-2x$, e a área é $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ para $x={@4}$ e $S''=-4&lt;0$, é um máximo. As dimensões são ${@5}\\,\\text{m}$ e ${@6}\\,\\text{m}$, a área ${@7}\\,\\text{m}^2$.",
  "Nepárna funkcia spĺňa $f(-x)=-f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Uma função ímpar satisfaz $f(-x)=-f(x)$ para todo $x$ do domínio. Substitua, por exemplo, $x=1$ e $x=-1$ e compare.",
  "Newton-Leibnizova formula: {@0}": "Teorema fundamental do cálculo (fórmula de Newton-Leibniz): {@0}",
  "Nezabudni na koeficient ${@0}$ v menovateli: výraz je $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.": "Não se esqueça do coeficiente ${@0}$ no denominador: a expressão é $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.",
  "Nezabudni na prostredný člen $Rr$ v zátvorke: $R^2+Rr+r^2$.": "Não se esqueça do termo do meio $Rr$ no parêntese: $R^2+Rr+r^2$.",
  "Nezabudni na prostredný člen $a_1a_2$, teda $\\sqrt{S_1S_2}$.": "Não se esqueça do termo do meio $a_1a_2$, ou seja, $\\sqrt{S_1S_2}$.",
  "Nie sú násobkami seba, roviny sú rôznobežné.": "Não são múltiplos um do outro: os planos são concorrentes.",
  "Niektoré písmená sa opakujú a ich výmenou nové slovo nevznikne. Vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Algumas letras se repetem, e trocá-las não dá uma palavra nova. Divida pelos fatoriais dos números de letras repetidas.",
  "Nájdi inflexný bod funkcie $f(x)={@0}$. Zadaj jeho súradnice $x$ a $y$ (napr. 1; -4).": "Encontre o ponto de inflexão da função $f(x)={@0}$. Digite as suas coordenadas $x$ e $y$ (por exemplo, 1; -4).",
  "Nájdi korene derivácie $f'(x)={@0}$.": "Encontre as raízes da derivada $f'(x)={@0}$.",
  "Nájdi primitívnu funkciu ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) a dosaď hranice.": "Encontre uma primitiva ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) e substitua os limites.",
  "Nájdi stacionárne body funkcie, teda korene rovnice $f'(x)={@0}=0$.": "Encontre os pontos críticos da função, ou seja, as raízes da equação $f'(x)={@0}=0$.",
  "O koľko percent sa {@0} zväčší? {@1}": "Em quantos por cento aumenta {@0}? {@1}",
  "Obe časti sú nepárne funkcie, preto aj ich súčet: $f(-x)=-f(x)$.": "As duas partes são funções ímpares, e portanto também a sua soma: $f(-x)=-f(x)$.",
  "Objem": "O volume",
  "Objem gule je $\\frac{4}{3}\\pi r^3$, nezabudni na koeficient $\\frac{4}{3}$.": "O volume da esfera é $\\frac{4}{3}\\pi r^3$: não se esqueça do coeficiente $\\frac{4}{3}$.",
  "Objem je $V(x)=x({@0}-2x)^2$. Pre ktoré $x$ z intervalu $(0; {@1})$ je $V'(x)=0$?": "O volume é $V(x)=x({@0}-2x)^2$. Para qual $x$ do intervalo $(0; {@1})$ temos $V'(x)=0$?",
  "Objem je $V(x)=x({@0}-2x)^2$. Rozlož deriváciu na súčin $V'(x)=({@1}-2x)({@2}-cx)$. Aké je číslo $c$?": "O volume é $V(x)=x({@0}-2x)^2$. Fatore a derivada como produto $V'(x)=({@1}-2x)({@2}-cx)$. Qual é o número $c$?",
  "Objem kužeľa je tretina objemu valca s rovnakou podstavou a výškou. Objemy častí sčítaj.": "O volume do cone é um terço do volume do cilindro com a mesma base e altura. Some os volumes das partes.",
  "Objem kužeľa nie je $\\pi r^2 w$, ale len jeho tretina.": "O volume do cone não é $\\pi r^2 w$, mas só um terço disso.",
  "Objem materiálu je rozdiel objemov dvoch valcov s rovnakou výškou.": "O volume do material é a diferença dos volumes de dois cilindros com a mesma altura.",
  "Objem polgule je polovica objemu gule, teda $\\frac{2}{3}\\pi r^3$. Objemy častí sčítaj.": "O volume da semiesfera é a metade do volume da esfera, ou seja, $\\frac{2}{3}\\pi r^3$. Some os volumes das partes.",
  "Objem sa zachová: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, teda $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.": "O volume se conserva: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, ou seja, $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.",
  "Obsah je $S(x)=x({@0}-2x)$, kde $x$ je strana kolmá na stenu. Pre aké $x$ je $S'(x)=0$?": "A área é $S(x)=x({@0}-2x)$, em que $x$ é o lado perpendicular ao muro. Para qual $x$ temos $S'(x)=0$?",
  "Obsah rezu: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.": "Área da seção: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.",
  "Obsah rovnostranného trojuholníka so stranou $a$ je $\\frac{\\sqrt3}{4}a^2$. Plášť hranola tvoria tri zhodné obdĺžniky.": "A área de um triângulo equilátero de lado $a$ é $\\frac{\\sqrt3}{4}a^2$. A superfície lateral do prisma é formada por três retângulos iguais.",
  "Obsah trojuholníka je polovica súčinu základne a výšky. Nezabudni deliť dvoma.": "A área de um triângulo é a metade do produto da base pela altura. Não se esqueça de dividir por dois.",
  "Obsah vypočítaj z vektorov $\\vec{AB}$ a $\\vec{AC}$ (polovica absolútnej hodnoty determinantu), výšku potom zo vzorca $S=\\frac{c\\cdot v_c}{2}$.": "Calcule a área a partir dos vetores $\\vec{AB}$ e $\\vec{AC}$ (a metade do valor absoluto do determinante) e depois a altura pela fórmula $S=\\frac{c\\cdot v_c}{2}$.",
  "Od objemu plného valca odčítame dutinu: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.": "Do volume do cilindro maciço subtraímos o furo: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.",
  "Olovenú guľu s polomerom ${@0}\\,\\text{cm}$ pretavili na rovnaké guľôčky s polomerom ${@1}\\,\\text{cm}$. Koľko guľôčok vzniklo (bez strát materiálu)?": "Uma bola de chumbo de raio ${@0}\\,\\text{cm}$ foi fundida em bolinhas iguais de raio ${@1}\\,\\text{cm}$. Quantas bolinhas foram obtidas (sem perda de material)?",
  "Opačný jav (obaja minú): ${@0}\\cdot {@1}={@2}$, teda $P=1-{@3}={@4}$.": "Evento complementar (os dois erram): ${@0}\\cdot {@1}={@2}$, ou seja, $P=1-{@3}={@4}$.",
  "Opačný jav je $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Preto $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.": "O evento complementar é $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Por isso $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.",
  "Opačný jav „obe čierne“ má $\\binom{{@0}}{2}={@1}$ výberov, priaznivých je ${@2}-{@3}={@4}$.": "O evento complementar «as duas pretas» tem $\\binom{{@0}}{2}={@1}$ escolhas; as favoráveis são ${@2}-{@3}={@4}$.",
  "Opačný jav: šestka nepadne ani raz, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. Hľadaná pravdepodobnosť je $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.": "Evento complementar: não sai nenhum seis, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. A probabilidade procurada é $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.",
  "Over tento zápis: dosaď $k=0$ a $k=1$ a skontroluj, či dostaneš riešenia rovnice. Over aj, či zápis nevynecháva niektoré riešenie z jednej periódy.": "Verifique essa expressão: substitua $k=0$ e $k=1$ e veja se obtém soluções da equação. Verifique também se a expressão não omite alguma solução de um período.",
  "Označ $x$ stranu kolmú na stenu, vyjadri druhú stranu z dĺžky pletiva a obsah ako funkciu $x$. Potom hľadaj, kde je jej derivácia nulová.": "Chame de $x$ o lado perpendicular ao muro, expresse o outro lado a partir do comprimento da tela e a área como função de $x$. Depois procure onde a sua derivada se anula.",
  "Parabola $y={@0}$ a priamka $y={@1}$ majú dva spoločné body. Zadaj súradnice toho z nich, ktorý má menšiu $x$-ovú súradnicu (napr. -1; 4).": "A parábola $y={@0}$ e a reta $y={@1}$ têm dois pontos comuns. Digite as coordenadas daquele que tem a menor coordenada $x$ (por exemplo, -1; 4).",
  "Percentá sa nesčitujú. Koeficient $k={@0}$ umocni na {@1} a až potom preveď na percentá.": "As porcentagens não se somam. Eleve a razão $k={@0}$ {@1} e só depois converta para porcentagem.",
  "Pletivo netreba na všetky štyri strany: stena tvorí jednu stranu, ohradiť treba len tri.": "Não é preciso tela nos quatro lados: o muro forma um lado, basta cercar três.",
  "Plášť tvoria tri obdĺžniky ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.": "A superfície lateral é formada por três retângulos ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.",
  "Po dosadení $x={@0}$ vyjde výraz $\\frac{0}{0}$, preto čitateľa rozložíme: ${@1}={@2}{@3}$. Pre $x\\neq {@4}$ vykrátime a dostaneme $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.": "Ao substituir $x={@0}$ sai a expressão $\\frac{0}{0}$, por isso fatoramos o numerador: ${@1}={@2}{@3}$. Para $x\\neq {@4}$ simplificamos e obtemos $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.",
  "Po koľkých rokoch sa vklad prvýkrát aspoň {@0}?": "Depois de quantos anos o depósito, pela primeira vez, pelo menos {@0}?",
  "Po odlogaritmovaní dostaneš $({@0})({@1})={@2}$. Zadaj korene tejto kvadratickej rovnice.": "Ao eliminar os logaritmos você obtém $({@0})({@1})={@2}$. Digite as raízes dessa equação do segundo grau.",
  "Po príchode má zbor ${@0}$ členov, nový súčet je preto ${@1}\\cdot {@2}$.": "Depois da chegada, o coral tem ${@0}$ membros, por isso a nova soma é ${@1}\\cdot {@2}$.",
  "Po substitúcii $t={@0} x$ dostaneš ${@1}=0$. Zadaj jej korene (zlomok napr. ako 1/2).": "Depois da substituição $t={@0} x$ você obtém ${@1}=0$. Digite as suas raízes (uma fração, por exemplo, como 1/2).",
  "Po substitúcii $t={@0}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "Depois da substituição $t={@0}$, resolva a equação ${@1}=0$. Digite as suas raízes $t$.",
  "Po substitúcii $t={@0}^{x}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "Depois da substituição $t={@0}^{x}$, resolva a equação ${@1}=0$. Digite as suas raízes $t$.",
  "Po vybratí ${@0}$ pred zátvorku: pre ktoré $x$ z {@1} je ${@2}=0$?": "Depois de colocar ${@0}$ em evidência: para quais $x$ de {@1} temos ${@2}=0$?",
  "Po vykrátení ostal výraz ${@0}$ a doňho ešte treba dosadiť $x={@1}$.": "Depois de simplificar sobrou a expressão ${@0}$, e nela ainda é preciso substituir $x={@1}$.",
  "Po vykrátení ostane v menovateli $\\sqrt{x}+{@0}$, nie len $\\sqrt{x}$. Dosaď $x={@1}$ do celého súčtu.": "Depois de simplificar, no denominador sobra $\\sqrt{x}+{@0}$, não só $\\sqrt{x}$. Substitua $x={@1}$ na soma inteira.",
  "Po vykrátení činiteľa ${@0}$ zostane ${@1}$. Akú hodnotu má tento výraz pre $x={@2}$?": "Depois de simplificar o fator ${@0}$ sobra ${@1}$. Que valor tem essa expressão para $x={@2}$?",
  "Po výmene premenných máme $x={@0}$. Aký je koeficient $k$ pri $x$ vo vyjadrení $y=kx+q$?": "Depois de trocar as variáveis temos $x={@0}$. Qual é o coeficiente $k$ de $x$ na expressão $y=kx+q$?",
  "Podaní rúk je $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Z rovnice $\\frac{n(n-1)}{2}={@0}$ dostaneme $n^2-n-{@1}=0$, kladný koreň je $n={@2}$.": "O número de apertos de mão é $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Da equação $\\frac{n(n-1)}{2}={@0}$ obtemos $n^2-n-{@1}=0$, a raiz positiva é $n={@2}$.",
  "Podiel vedúcich koeficientov rozhoduje len pri rovnakom stupni. Tu má čitateľ nižší stupeň, takže po vydelení najvyššou mocninou menovateľa ide celý čitateľ k nule.": "O quociente dos coeficientes dominantes só decide quando os graus são iguais. Aqui o numerador tem grau menor, então, ao dividir pela maior potência do denominador, o numerador inteiro tende a zero.",
  "Podmienka $x&gt;0$. Substitúcia $t={@0}$: ${@1}=0$, teda $t_1={@2}$, $t_2={@3}$. Z ${@4}={@5}$ je $x={@6}^{{@7}}={@8}$ a z ${@9}={@10}$ je $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.": "Condição: $x&gt;0$. Substituição $t={@0}$: ${@1}=0$, ou seja, $t_1={@2}$, $t_2={@3}$. De ${@4}={@5}$ temos $x={@6}^{{@7}}={@8}$ e de ${@9}={@10}$ temos $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.",
  "Podmienky dávajú $x&gt;c$. Aké je číslo $c$?": "As condições dão $x&gt;c$. Qual é o número $c$?",
  "Podmienky: ${@0}&gt;0$ a ${@1}&gt;0$, teda $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Korene sú ${@10}$ a ${@11}$; podmienku spĺňa len $x={@12}$. $K=\\{{@13}\\}$.": "Condições: ${@0}&gt;0$ e ${@1}&gt;0$, ou seja, $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. As raízes são ${@10}$ e ${@11}$, a condição é satisfeita só por $x={@12}$. $K=\\{{@13}\\}$.",
  "Podstava je rovnostranný trojuholník, nie štvorec: jej obsah je $\\frac{\\sqrt3}{4}a^2$.": "A base é um triângulo equilátero, não um quadrado: a sua área é $\\frac{\\sqrt3}{4}a^2$.",
  "Podstava je rovnostranný trojuholník: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}": "A base é um triângulo equilátero: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}",
  "Podľa Vietovho vzťahu je súčet koreňov $x_1+x_2=-p$, nie $p$. Pozor na znamienko.": "Pela relação de Girard, a soma das raízes é $x_1+x_2=-p$, não $p$. Cuidado com o sinal.",
  "Polomer gule, vzdialenosť roviny od stredu a polomer rezu tvoria pravouhlý trojuholník (polomer gule je prepona).": "O raio da esfera, a distância do plano ao centro e o raio da seção formam um triângulo retângulo (o raio da esfera é a hipotenusa).",
  "Polomer rezu: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}": "Raio da seção: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}",
  "Polož diskriminant rovný nule.": "Iguale o discriminante a zero.",
  "Pomocou $\\sin^2 x+\\cos^2 x=1$ prepíš rovnicu len na ${@0} x$.": "Com $\\sin^2 x+\\cos^2 x=1$, reescreva a equação só com ${@0} x$.",
  "Porovnaj aj hodnoty funkcie v krajných bodoch intervalu, globálny extrém môže byť práve tam.": "Compare também os valores da função nas extremidades do intervalo: o extremo global pode estar justamente ali.",
  "Porovnaj smery priamok. Ak nie sú rovnobežné, zisti, či ležia v jednej rovine (napr. v stene alebo uhlopriečnom reze kocky).": "Compare as direções das retas. Se não forem paralelas, descubra se estão num mesmo plano (por exemplo, numa face ou numa seção diagonal do cubo).",
  "Porovnaj stupne čitateľa a menovateľa. Pri rovnakom stupni rozhodujú vedúce koeficienty.": "Compare os graus do numerador e do denominador. Com graus iguais, decidem os coeficientes dominantes.",
  "Porovnaj tieto hodnoty s hodnotami v stacionárnych bodoch vnútri intervalu. Aká je {@0} hodnota?": "Compare esses valores com os valores nos pontos críticos do interior do intervalo. Qual é {@0} valor?",
  "Porovnaj vzdialenosť stredu od priamky s polomerom. Polomer je odmocnina z pravej strany rovnice kružnice, teda $r={@0}$, nie ${@1}$. Pozor aj na znamienka súradníc stredu.": "Compare a distância do centro à reta com o raio. O raio é a raiz do membro direito da equação da circunferência, ou seja, $r={@0}$, não ${@1}$. Cuidado também com os sinais das coordenadas do centro.",
  "Porovnáme pravé strany: ${@0}={@1} \\Rightarrow {@2}=0$, korene $x={@3}$ a $x={@4}$. Pre $x={@5}$ je $y={@6}\\cdot {@7}{@8}={@9}$. Priesečníky sú $[{@10}; {@11}]$ a $[{@12}; {@13}]$.": "Igualamos os membros direitos: ${@0}={@1} \\Rightarrow {@2}=0$, raízes $x={@3}$ e $x={@4}$. Para $x={@5}$ temos $y={@6}\\cdot {@7}{@8}={@9}$. Os pontos de interseção são $[{@10}; {@11}]$ e $[{@12}; {@13}]$.",
  "Potrebujeme $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, teda $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Zlogaritmujeme (logaritmus čísla menšieho ako 1 je záporný, znak sa otočí): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Najmenšie celé $n$ je ${@4}$.": "Precisamos de $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, ou seja, $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Aplicamos logaritmos (o logaritmo de um número menor que 1 é negativo, o sinal se inverte): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. O menor $n$ inteiro é ${@4}$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\ln x)'=\\frac{1}{x}$. Nezabudni, že $\\ln 1=0$.": "Use $(u\\cdot v)'=u'v+uv'$ e $(\\ln x)'=\\frac{1}{x}$. Não se esqueça de que $\\ln 1=0$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\mathrm{e}^x)'=\\mathrm{e}^x$.": "Use $(u\\cdot v)'=u'v+uv'$ e $(\\mathrm{e}^x)'=\\mathrm{e}^x$.",
  "Použi $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.": "Use $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
  "Použi $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "Use $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Použi $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. V čitateli sa členy s $x$ odčítajú.": "Use $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. No numerador, os termos com $x$ se subtraem.",
  "Použi $\\sin 2x=2\\sin x\\cos x$, všetko prenes na jednu stranu a vyber spoločného činiteľa pred zátvorku. Nedeľ ním!": "Use $\\sin 2x=2\\sin x\\cos x$, passe tudo para um membro e coloque o fator comum em evidência. Não divida por ele!",
  "Použi opačný jav: pravdepodobnosť, že šestka nepadne v žiadnom z hodov, je $\\left(\\frac{5}{6}\\right)^n$.": "Use o evento complementar: a probabilidade de não sair nenhum seis em nenhum dos lançamentos é $\\left(\\frac{5}{6}\\right)^n$.",
  "Použi vzorec $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, kde $Q$ je bod priamky. Alebo nájdi trojuholník, v ktorom je hľadaná vzdialenosť výškou.": "Use a fórmula $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, em que $Q$ é um ponto da reta. Ou encontre um triângulo em que a distância procurada seja uma altura.",
  "Povrch": "A área da superfície",
  "Povrch gule je ${@0}\\pi\\,\\text{cm}^2$. Jej objem sa dá zapísať ako $V=k\\pi\\,\\text{cm}^3$. Vypočítaj $k$.": "A área de uma superfície esférica é ${@0}\\pi\\,\\text{cm}^2$. O volume da esfera pode ser escrito como $V=k\\pi\\,\\text{cm}^3$. Calcule $k$.",
  "Pozor na znamienko menovateľa: pre $x$ tesne {@0} od ${@1}$ je menovateľ ${@2}$ {@3}. Skombinuj ho so znamienkom čitateľa.": "Cuidado com o sinal do denominador: para $x$ logo {@0} de ${@1}$, o denominador ${@2}$ é {@3}. Combine-o com o sinal do numerador.",
  "Pozor, $R^2-r^2$ nie je to isté ako $(R-r)^2$. Odčítaj objemy dvoch valcov.": "Cuidado, $R^2-r^2$ não é o mesmo que $(R-r)^2$. Subtraia os volumes de dois cilindros.",
  "Pozor, $\\cos\\pi=-1$, nie $1$. Hodnoty primitívnej funkcie v hraniciach sa preto neodčítajú na nulu.": "Cuidado, $\\cos\\pi=-1$, não $1$. Por isso os valores da primitiva nos limites não se anulam ao subtrair.",
  "Pozor, $\\ln 1=0$, lebo $\\mathrm{e}^0=1$. Hodnota primitívnej funkcie v dolnej hranici je nulová.": "Cuidado, $\\ln 1=0$, pois $\\mathrm{e}^0=1$. O valor da primitiva no limite inferior é zero.",
  "Pozor, $\\ln 1=0$, nie $1$ (lebo $\\mathrm{e}^0=1$). Prvý člen $u'v$ je preto v bode $1$ nulový.": "Cuidado, $\\ln 1=0$, não $1$ (pois $\\mathrm{e}^0=1$). Por isso o primeiro termo $u'v$ é zero no ponto $1$.",
  "Počet pokusov n": "Número de tentativas n",
  "Počet uhlopriečok $n$-uholníka je $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (všetky spojnice vrcholov mínus strany).": "O número de diagonais de um polígono de $n$ lados é $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (todos os segmentos entre vértices menos os lados).",
  "Počet usporiadaní $n$ rôznych prvkov je $n!$.": "O número de ordenações de $n$ elementos diferentes é $n!$.",
  "Počty sedadiel tvoria aritmetickú postupnosť s $a_1={@0}$, $d={@1}$. Súčet $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ vedie na kvadratickú nerovnicu ${@5}\\ge 0$. Kladný koreň je približne ${@6}$, preto $n={@7}$. Kontrola: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.": "Os números de lugares formam uma progressão aritmética com $a_1={@0}$, $d={@1}$. A soma $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ leva à inequação do segundo grau ${@5}\\ge 0$. A raiz positiva é aproximadamente ${@6}$, por isso $n={@7}$. Verificação: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.",
  "Počítal si v opačnom poradí. Pri $({@0})(x)$ sa najprv použije {@1} (vnútorná funkcia) a jej výsledok sa dosadí do {@2}.": "Você calculou na ordem inversa. Em $({@0})(x)$ aplica-se primeiro {@1} (a função interna), e o seu resultado é substituído em {@2}.",
  "Pracuj so súčtami: súčet = priemer · počet. Porovnaj súčet pred príchodom a po príchode nového člena.": "Trabalhe com as somas: soma = média · número. Compare a soma antes e depois da chegada do novo membro.",
  "Pravdepodobnosti jednotlivých hodov sa nesčítavajú (pri 6 hodoch by vyšla istota). Použi opačný jav „ani raz“.": "As probabilidades dos diferentes lançamentos não se somam (com 6 lançamentos daria certeza). Use o evento complementar «nenhuma vez».",
  "Pravdepodobnosti netrafenia sú ${@0}$ a ${@1}$. {@2}": "As probabilidades de errar são ${@0}$ e ${@1}$. {@2}",
  "Pravdepodobnosť p": "Probabilidade p",
  "Pravidelný trojboký hranol má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj jeho {@2}. {@3}": "Um prisma triangular regular tem aresta da base $a={@0}\\,\\text{cm}$ e altura $v={@1}\\,\\text{cm}$. Calcule {@2}. {@3}",
  "Pravidelný štvorboký ihlan": "Pirâmide quadrangular regular",
  "Pravidelný štvorboký ihlan má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}.{@3}": "Uma pirâmide quadrangular regular tem aresta da base $a={@0}\\,\\text{cm}$ e altura $v={@1}\\,\\text{cm}$. Calcule {@2}.{@3}",
  "Pravidelný štvorboký zrezaný ihlan má podstavné hrany $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho objem v $\\text{cm}^3$.{@3}": "Um tronco de pirâmide quadrangular regular tem arestas das bases $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ e altura $v={@2}\\,\\text{cm}$. Calcule o seu volume em $\\text{cm}^3$.{@3}",
  "Pre $x\\to {@0}^{{@1}}$ je $x {@2} {@3}$, menovateľ ${@4}$ je teda {@5} a blíži sa k nule. Čitateľ ${@6}$ je {@7}, preto zlomok rastie v absolútnej hodnote nad všetky medze so znamienkom {@8}: limita je {@9}.": "Para $x\\to {@0}^{{@1}}$ temos $x {@2} {@3}$, o denominador ${@4}$ é, portanto, {@5} e tende a zero. O numerador ${@6}$ é {@7}, por isso a fração cresce em valor absoluto sem limite, com sinal {@8}: o limite é {@9}.",
  "Pre $x\\to\\infty$ nerozhodujú absolútne členy, ale členy s najvyššou mocninou $x$.": "Para $x\\to\\infty$ não decidem os termos independentes, mas os termos com a maior potência de $x$.",
  "Pre $x\\to\\pm\\infty$ rozhodujú koeficienty pri $x$, nie absolútne členy.": "Para $x\\to\\pm\\infty$ decidem os coeficientes de $x$, não os termos independentes.",
  "Pre akú hodnotu parametra $c$ má rovnica $x^2{@0}+c=0$ dvojnásobný koreň?": "Para qual valor do parâmetro $c$ a equação $x^2{@0}+c=0$ tem raiz dupla?",
  "Pre binomické rozdelenie je $E(X)=np$ a $D(X)=np(1-p)$.": "Na distribuição binomial, $E(X)=np$ e $D(X)=np(1-p)$.",
  "Pre funkciu $f(x)=({@0})\\,\\mathrm{e}^{x}$ vypočítaj $f'(0)$.": "Para a função $f(x)=({@0})\\,\\mathrm{e}^{x}$ calcule $f'(0)$.",
  "Pre funkciu $f(x)=({@0})\\ln x$ vypočítaj $f'(1)$.": "Para a função $f(x)=({@0})\\ln x$ calcule $f'(1)$.",
  "Pre funkciu $f(x)=({@0})^{{@1}}$ vypočítaj $f'({@2})$.": "Para a função $f(x)=({@0})^{{@1}}$ calcule $f'({@2})$.",
  "Pre funkciu $f(x)=\\dfrac{{@0}}{{@1}}$ vypočítaj $f'({@2})$. Výsledok zadaj ako celé číslo alebo zlomok.": "Para a função $f(x)=\\dfrac{{@0}}{{@1}}$ calcule $f'({@2})$. Digite o resultado como número inteiro ou fração.",
  "Pre funkciu $f(x)={@0}{@1}$ vypočítaj $f'(0)$.": "Para a função $f(x)={@0}{@1}$ calcule $f'(0)$.",
  "Pre korene z intervalu $\\langle -1; 1\\rangle$ nájdi všetky $x$ v stupňoch z {@0}.": "Para as raízes do intervalo $\\langle -1; 1\\rangle$ encontre todos os $x$ em graus de {@0}.",
  "Pre ktoré $x$ je nulová zátvorka ${@0} {@1}$?": "Para qual $x$ o parêntese ${@0} {@1}$ se anula?",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2+px+{@0}=0$ dvojnásobný koreň? Zadaj všetky hodnoty oddelené bodkočiarkou.": "Para quais valores do parâmetro $p$ a equação $x^2+px+{@0}=0$ tem raiz dupla? Digite todos os valores separados por ponto e vírgula.",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2{@0}+p=0$ {@1}?": "Para quais valores do parâmetro $p$ a equação $x^2{@0}+p=0$ tem {@1}?",
  "Pre zrezaný ihlan platí $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; pri štvorcových podstavách je $\\sqrt{S_1S_2}=a_1a_2$.": "Para o tronco de pirâmide vale $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; com bases quadradas, $\\sqrt{S_1S_2}=a_1a_2$.",
  "Pred určením mediánu treba údaje usporiadať podľa veľkosti.": "Antes de determinar a mediana é preciso ordenar os dados por tamanho.",
  "Predsedu vyberáš z $n$ ľudí, podpredsedu už len zo zvyšných, pokladníka zo zvyšných ďalej.": "O presidente você escolhe entre $n$ pessoas, o vice-presidente só entre as restantes, e o tesoureiro entre as que sobram depois.",
  "Predstav si rovinu ako rez kockou. Priamka v nej leží, ak v nej ležia dva jej body; je rovnobežná, ak je rovnobežná s niektorou priamkou roviny.": "Imagine o plano como uma seção do cubo. Uma reta está nele se dois dos seus pontos estão nele; é paralela se for paralela a alguma reta do plano.",
  "Predstav si všetky známky zoradené od najlepšej. Medián je prostredná hodnota (pri párnom počte priemer dvoch prostredných).": "Imagine todas as notas ordenadas a partir da melhor. A mediana é o valor central (com um número par de dados, a média dos dois centrais).",
  "Pri $(f\\circ g)(x)=f(g(x))$ počítaš najprv vnútornú funkciu $g$, jej výsledok dosadíš do $f$.": "Em $(f\\circ g)(x)=f(g(x))$ você calcula primeiro a função interna $g$ e substitui o seu resultado em $f$.",
  "Pri derivovaní mocniny sa exponent zníži o jedna: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.": "Ao derivar uma potência, o expoente diminui em um: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.",
  "Pri lineárnej substitúcii treba výsledok vydeliť koeficientom pri $x$, teda číslom ${@0}$.": "Numa substituição linear é preciso dividir o resultado pelo coeficiente de $x$, ou seja, por ${@0}$.",
  "Pri nezávislých javoch sa pravdepodobnosti súčasného nastania násobia. Pri „aspoň jeden“ použi opačný jav.": "Com eventos independentes, as probabilidades de ocorrerem ao mesmo tempo se multiplicam. Para «pelo menos um», use o evento complementar.",
  "Pri okrúhlom stole sú rozsadenia, ktoré sa líšia len otočením, rovnaké. Zafixuj jedného človeka.": "Numa mesa redonda, as disposições que diferem só por uma rotação são iguais. Fixe uma pessoa.",
  "Pri podobnosti s koeficientom $k$ sa {@0}. Výsledný násobok preveď na percentá.": "Numa semelhança de razão $k$, {@0}. Converta o múltiplo resultante para porcentagem.",
  "Pri pretavení sa zachováva objem. Pomer objemov podobných telies je tretia mocnina pomeru dĺžok.": "Ao fundir, o volume se conserva. A razão dos volumes de corpos semelhantes é o cubo da razão dos comprimentos.",
  "Pri rovnej stene chceme ohradiť obdĺžnikový pozemok, stena tvorí jednu jeho stranu. Máme ${@0}\\,\\text{m}$ pletiva. {@1}": "Junto a um muro reto queremos cercar um terreno retangular; o muro forma um dos seus lados. Temos ${@0}\\,\\text{m}$ de tela. {@1}",
  "Pri strane odstrihnutého štvorca $x$ má krabica dno $({@0}-2x)^2$ a výšku $x$: $V(x)=x({@1}-2x)^2$ pre $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, v intervale je nulová len pre $x={@7}$ (tam sa mení znamienko z $+$ na $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.": "Se o lado do quadrado recortado é $x$, a caixa tem fundo $({@0}-2x)^2$ e altura $x$: $V(x)=x({@1}-2x)^2$ para $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$; no intervalo, ela se anula só para $x={@7}$ (ali o sinal muda de $+$ para $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.",
  "Pri vyjadrení $y$ treba číslom ${@0}$ vydeliť celú pravú stranu, teda aj absolútny člen.": "Ao isolar $y$ é preciso dividir por ${@0}$ todo o membro direito, ou seja, também o termo independente.",
  "Pri zloženej funkcii násob deriváciou vnútra: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "Numa função composta, multiplique pela derivada da função interna: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Priamka $p: {@0}=0$ pretína kružnicu $k: {@1}$ v dvoch bodoch. Zadaj $x$-ové súradnice oboch priesečníkov oddelené bodkočiarkou.": "A reta $p: {@0}=0$ corta a circunferência $k: {@1}$ em dois pontos. Digite as coordenadas $x$ dos dois pontos de interseção separadas por ponto e vírgula.",
  "Priamka je s rovinou rovnobežná, len ak je jej smerový vektor kolmý na normálový vektor roviny ($\\vec u\\cdot\\vec n=0$). Vypočítaj tento skalárny súčin.": "Uma reta é paralela a um plano só se o seu vetor diretor é perpendicular ao vetor normal do plano ($\\vec u\\cdot\\vec n=0$). Calcule esse produto escalar.",
  "Priamka leží v rovine, len ak v nej ležia dva jej body. Over oba koncové body.": "Uma reta está num plano só se dois dos seus pontos estão nele. Verifique os dois pontos extremos.",
  "Priamka pretína rovinu, len ak $\\vec u\\cdot\\vec n\\neq 0$. Vypočítaj skalárny súčin smerového a normálového vektora.": "Uma reta corta um plano só se $\\vec u\\cdot\\vec n\\neq 0$. Calcule o produto escalar do vetor diretor pelo vetor normal.",
  "Priamky $y={@0}$ a $y={@1}$ pretínajú os $x$ v bodoch $[{@2}; 0]$ a $[{@3}; 0]$ a navzájom sa pretínajú v bode $[{@4}; {@5}]$. Oblasť je trojuholník so základňou ${@6}$ a výškou ${@7}$, jeho obsah je $\\frac{{@8}\\cdot {@9}}{2}={@10}$.": "As retas $y={@0}$ e $y={@1}$ cortam o eixo $x$ nos pontos $[{@2}; 0]$ e $[{@3}; 0]$ e se cortam entre si no ponto $[{@4}; {@5}]$. A região é um triângulo de base ${@6}$ e altura ${@7}$, a sua área é $\\frac{{@8}\\cdot {@9}}{2}={@10}$.",
  "Priaznivé dvojice: {@0} — spolu ${@1}$.": "Pares favoráveis: {@0}, ao todo ${@1}$.",
  "Priaznivé: $\\binom{{@0}}{2}={@1}$.": "Favoráveis: $\\binom{{@0}}{2}={@1}$.",
  "Priaznivé: ${@0}\\cdot {@1}={@2}$ (bielu a čiernu vyberáme nezávisle).": "Favoráveis: ${@0}\\cdot {@1}={@2}$ (a branca e a preta escolhemos de forma independente).",
  "Priemer z tabuľky početností je vážený: každú známku vynásob počtom žiakov, ktorí ju dostali.": "A média de uma tabela de frequências é ponderada: multiplique cada nota pelo número de alunos que a obtiveram.",
  "Priemerný vek {@0} členov speváckeho zboru je ${@1}$ rokov. Keď do zboru pribudol nový člen, priemerný vek sa {@2} na ${@3}$ rokov. Koľko rokov má nový člen?": "A idade média dos {@0} membros de um coral é ${@1}$ anos. Quando um novo membro entrou no coral, a idade média {@2} para ${@3}$ anos. Quantos anos tem o novo membro?",
  "Priesečníky s osou $x$: ${@0}-x^2=0$, teda $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.": "Pontos de interseção com o eixo $x$: ${@0}-x^2=0$, ou seja, $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.",
  "Priesečníky sú $x=0$ a ešte jeden bod. Aké je jeho $x$?": "Os pontos de interseção são $x=0$ e mais um ponto. Qual é o seu $x$?",
  "Priesečníky: $x^2={@0}$, teda $x=0$ a $x={@1}$. Na $\\langle 0; {@2}\\rangle$ leží priamka nad parabolou. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.": "Pontos de interseção: $x^2={@0}$, ou seja, $x=0$ e $x={@1}$. Em $\\langle 0; {@2}\\rangle$ a reta está acima da parábola. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.",
  "Primitívna funkcia je $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Vypočítaj $F(1)$. Zadaj zlomok alebo celé číslo.": "Uma primitiva é $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Calcule $F(1)$. Digite uma fração ou um número inteiro.",
  "Primitívna funkcia je $F(x)={@0}$. Vypočítaj $F({@1})$.": "Uma primitiva é $F(x)={@0}$. Calcule $F({@1})$.",
  "Primitívna funkcia je $F(x)={@0}x-\\frac{x^3}{3}$. Vypočítaj $F({@1})$. Zadaj zlomok alebo celé číslo.": "Uma primitiva é $F(x)={@0}x-\\frac{x^3}{3}$. Calcule $F({@1})$. Digite uma fração ou um número inteiro.",
  "Prvá nerovnica má riešenie $x&gt;c$. Aké je číslo $c$?": "A primeira inequação tem a solução $x&gt;c$. Qual é o número $c$?",
  "Prvá nerovnica: ${@0} {@1} {@2}$, po delení číslom ${@3}$ {@4}$x&gt;{@5}$. Druhá: ${@6} {@7} {@8}$, odtiaľ {@9}$x\\le {@10}$. Prienik je $({@11}; {@12}\\rangle$. {@13}": "Primeira inequação: ${@0} {@1} {@2}$, depois de dividir por ${@3}$ {@4}$x&gt;{@5}$. Segunda: ${@6} {@7} {@8}$, daí {@9}$x\\le {@10}$. A interseção é $({@11}; {@12}\\rangle$. {@13}",
  "Práve jeden môže byť prvý aj druhý strelec. Sčítaj pravdepodobnosti oboch možností.": "«Exatamente um» pode ser tanto o primeiro atirador quanto o segundo. Some as probabilidades das duas possibilidades.",
  "Párna funkcia spĺňa $f(-x)=f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Uma função par satisfaz $f(-x)=f(x)$ para todo $x$ do domínio. Substitua, por exemplo, $x=1$ e $x=-1$ e compare.",
  "RADAR": "RADAR",
  "Relatívna početnosť je $\\frac{n_i}{n}$, v percentách ju vynásob číslom 100.": "A frequência relativa é $\\frac{n_i}{n}$; para expressá-la em porcentagem, multiplique por 100.",
  "Rez nemá polomer gule. Polomer rezu $\\rho$ najprv vypočítaj z pravouhlého trojuholníka.": "A seção não tem o raio da esfera. Calcule primeiro o raio da seção $\\rho$ a partir do triângulo retângulo.",
  "Riešime ${@0}^{{@1}}{@2}={@3}$. Čomu sa rovná mocnina ${@4}^{{@5}}$?": "Resolvemos ${@0}^{{@1}}{@2}={@3}$. A que é igual a potência ${@4}^{{@5}}$?",
  "Rotačný kužeľ má polomer podstavy $r={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}. {@3}": "Um cone circular reto tem raio da base $r={@0}\\,\\text{cm}$ e altura $v={@1}\\,\\text{cm}$. Calcule {@2}. {@3}",
  "Rovina $\\rho: {@0}+d=0$ prechádza bodom $P{@1}$. Vypočítaj $d$.": "O plano $\\rho: {@0}+d=0$ passa pelo ponto $P{@1}$. Calcule $d$.",
  "Rovina ${@0}$ má normálový vektor $\\vec{n}={@1}$ a rovnicu ${@2}+d=0$. Vypočítaj $d$.": "O plano ${@0}$ tem vetor normal $\\vec{n}={@1}$ e equação ${@2}+d=0$. Calcule $d$.",
  "Rovnica $x^2+px{@0}=0$ má koreň $x_1={@1}$. Urči parameter $p$ a druhý koreň $x_2$ (zadaj ich v tomto poradí, napr. -5; 3).": "A equação $x^2+px{@0}=0$ tem a raiz $x_1={@1}$. Determine o parâmetro $p$ e a segunda raiz $x_2$ (digite-os nessa ordem, por exemplo, -5; 3).",
  "Rovnicu si zrejme vydelil výrazom ${@0}$ a stratil si riešenia, v ktorých je nulový. Vyber ho pred zátvorku.": "Você provavelmente dividiu a equação pela expressão ${@0}$ e perdeu as soluções em que ela se anula. Coloque-a em evidência.",
  "Rovnobežné priamky majú smerové vektory, ktoré sú násobkami seba. Porovnaj smerové vektory.": "Retas paralelas têm vetores diretores múltiplos um do outro. Compare os vetores diretores.",
  "Rovnobežné roviny majú normálové vektory, ktoré sú násobkami seba. Porovnaj normálové vektory.": "Planos paralelos têm vetores normais múltiplos um do outro. Compare os vetores normais.",
  "Rozdelíme prípady podľa poslednej cifry (musí byť {@0}); prvá cifra nesmie byť nula{@1}: {@2}. Spolu ${@3}$.": "Separamos os casos conforme o último algarismo (deve ser {@0}); o primeiro algarismo não pode ser zero{@1}: {@2}. Ao todo ${@3}$.",
  "Rozlož $f'(x)$ na súčin, nájdi nulové body a zisti, kde derivácia mení znamienko.": "Fatore $f'(x)$, encontre os seus zeros e descubra onde a derivada muda de sinal.",
  "Rozptyl binomického rozdelenia je $np(1-p)$, nezabudni na činiteľ $1-p$.": "A variância da distribuição binomial é $np(1-p)$: não se esqueça do fator $1-p$.",
  "Rozpätie je rozdiel najväčšej a najmenšej hodnoty, nie poslednej a prvej hodnoty v zápise.": "A amplitude é a diferença entre o maior e o menor valor, não entre o último e o primeiro valor da lista.",
  "Rozsadenia, ktoré sa líšia len otočením stola, sú rovnaké. Každé si takto započítal {@0}-krát.": "As disposições que diferem só por uma rotação da mesa são iguais. Você contou cada uma {@0} vezes.",
  "Rozsah súboru $n={@0}={@1}$. Relatívna početnosť: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}": "Tamanho do conjunto $n={@0}={@1}$. Frequência relativa: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}",
  "Rôznobežné priamky majú spoločný bod, a teda ležia v jednej rovine. Nájdeš takú rovinu?": "Retas concorrentes têm um ponto comum e, portanto, estão num mesmo plano. Você encontra esse plano?",
  "Rôznobežné roviny majú normálové vektory, ktoré nie sú násobkami seba. Porovnaj normálové vektory.": "Planos concorrentes têm vetores normais que não são múltiplos um do outro. Compare os vetores normais.",
  "Rúra má tvar dutého valca s vonkajším polomerom ${@0}\\,\\text{cm}$, vnútorným polomerom ${@1}\\,\\text{cm}$ a dĺžkou ${@2}\\,\\text{cm}$. Vypočítaj objem materiálu v $\\text{cm}^3$. {@3}": "Um tubo tem a forma de um cilindro oco com raio externo ${@0}\\,\\text{cm}$, raio interno ${@1}\\,\\text{cm}$ e comprimento ${@2}\\,\\text{cm}$. Calcule o volume do material em $\\text{cm}^3$. {@3}",
  "S; v_c": "S; v_c",
  "Slovo má {@0} písmen, opakujú sa {@1}. Ide o permutácie s opakovaním: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.": "A palavra tem {@0} letras, repetem-se {@1}. Trata-se de permutações com repetição: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.",
  "Smernica dotyčnice je $f'(x_0)$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a uprav.": "A inclinação da tangente é $f'(x_0)$. Substitua em $y=f(x_0)+f'(x_0)(x-x_0)$ e simplifique.",
  "Smerové vektory $\\vec{{@0}}={@1}$ a $\\vec{{@2}}={@3}$ sú násobkami seba a bod ${@4}$ na priamke ${@5}$ neleží, priamky sú rovnobežné.": "Os vetores diretores $\\vec{{@0}}={@1}$ e $\\vec{{@2}}={@3}$ são múltiplos um do outro, e o ponto ${@4}$ não está na reta ${@5}$: as retas são paralelas.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, priamky však ležia v jednej rovine a pretínajú sa v bode ${@2}$. Sú rôznobežné.": "Os vetores diretores ${@0}$ e ${@1}$ não são múltiplos um do outro, mas as retas estão num mesmo plano e se cortam no ponto ${@2}$. São concorrentes.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, takže priamky nie sú rovnobežné; neležia ani v jednej rovine, preto nemajú spoločný bod. Sú mimobežné.": "Os vetores diretores ${@0}$ e ${@1}$ não são múltiplos um do outro, então as retas não são paralelas; também não estão num mesmo plano, por isso não têm nenhum ponto comum. São reversas.",
  "Spolok má {@0} členov. Koľkými spôsobmi môžu zvoliť predsedu, podpredsedu a pokladníka (jedna osoba zastáva najviac jednu funkciu)?": "Uma associação tem {@0} membros. De quantas maneiras pode escolher presidente, vice-presidente e tesoureiro (uma pessoa ocupa no máximo um cargo)?",
  "Spočítaj trojice kombináciami a využi opačný jav „samí chlapci“.": "Conte os trios com combinações e use o evento complementar «só meninos».",
  "Stenová výška: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}": "Apótema: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}",
  "Strana kužeľa $s$ je prepona pravouhlého trojuholníka s odvesnami $r$ a $v$.": "A geratriz do cone $s$ é a hipotenusa de um triângulo retângulo de catetos $r$ e $v$.",
  "Strana kužeľa: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.": "Geratriz do cone: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.",
  "Strana: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.": "Geratriz: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.",
  "Strany označíme $a-d$, $a$, $a+d$ (prepona je najdlhšia). Z obvodu $3a={@0}$, teda $a={@1}$. Pytagorova veta: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Strany sú ${@8}$, ${@9}$, ${@10}$ cm{@11}.": "Chamamos os lados de $a-d$, $a$, $a+d$ (a hipotenusa é o maior). Do perímetro, $3a={@0}$, ou seja, $a={@1}$. Teorema de Pitágoras: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Os lados medem ${@8}$, ${@9}$, ${@10}$ cm{@11}.",
  "Strany sú $a-d$, $a$, $a+d$. Z obvodu vypočítaj $a$.": "Os lados são $a-d$, $a$, $a+d$. Calcule $a$ a partir do perímetro.",
  "Strany zapíš ako $a-d$, $a$, $a+d$. Obvod dá $a$, Pytagorova veta potom diferenciu $d$.": "Escreva os lados como $a-d$, $a$, $a+d$. O perímetro dá $a$, e o teorema de Pitágoras, depois, a diferença $d$.",
  "Stred je $S[{@0}; {@1}]$ a vektor $\\vec{ST}=({@2}; {@3})$ je kolmý na dotyčnicu, je to jej normálový vektor — preto má rovnica tvar ${@4}+c=0$. Dosadíme $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, teda $c={@9}$.": "O centro é $S[{@0}; {@1}]$, e o vetor $\\vec{ST}=({@2}; {@3})$ é perpendicular à tangente, é o seu vetor normal; por isso a equação tem a forma ${@4}+c=0$. Substituímos $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, ou seja, $c={@9}$.",
  "Stred kružnice je $S[{@0}; {@1}]$, polomer $r={@2}$. Vzdialenosť stredu od priamky: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Keďže $d{@10}r$, priamka je {@11}.": "O centro da circunferência é $S[{@0}; {@1}]$, o raio $r={@2}$. Distância do centro à reta: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Como $d{@10}r$, a reta é {@11}.",
  "Stredový uhol: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.": "Ângulo central: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.",
  "Stĺpcový graf známok": "Gráfico de barras das notas",
  "Stĺpcový graf známok v triede": "Gráfico de barras das notas da turma",
  "Substitúcia $u={@0}$ (alebo vzorec $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): primitívna funkcia je $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.": "Substituição $u={@0}$ (ou a fórmula $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): uma primitiva é $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.",
  "Sú násobkami seba, roviny sú rovnobežné; bod ${@0}$ {@1} ${@2}$, preto sú roviny {@3}.": "São múltiplos um do outro, os planos são paralelos; o ponto ${@0}$ {@1} ${@2}$, por isso os planos são {@3}.",
  "Súradnice bodu $P$ musia vyhovovať rovnici: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, teda ${@6}+d=0$ a $d={@7}$.": "As coordenadas do ponto $P$ devem satisfazer a equação: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, ou seja, ${@6}+d=0$ e $d={@7}$.",
  "Sústava nerovníc ${@0}$ a ${@1}$ má riešenie v $\\mathbb{R}$. {@2}": "O sistema de inequações ${@0}$ e ${@1}$ tem solução em $\\mathbb{R}$. {@2}",
  "Sústava rovníc s parametrom $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Pre ktorú hodnotu $m$ {@4}?": "Sistema de equações com o parâmetro $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Para qual valor de $m$ {@4}?",
  "Súčet logaritmov je logaritmus súčinu: $\\log_2 u+\\log_2 v=\\log_2(uv)$, nie $\\log_2(u+v)$.": "A soma de logaritmos é o logaritmo do produto: $\\log_2 u+\\log_2 v=\\log_2(uv)$, não $\\log_2(u+v)$.",
  "Súčet s $d$ má byť nula. Koľko je $d$?": "A soma com $d$ deve ser zero. Quanto vale $d$?",
  "Súčet vekov pôvodných členov je ${@0}\\cdot {@1}={@2}$. Po príchode je súčet vekov ${@3}\\cdot {@4}={@5}$. Nový člen má ${@6}-{@7}={@8}$ rokov.": "A soma das idades dos membros originais é ${@0}\\cdot {@1}={@2}$. Depois da chegada, a soma das idades é ${@3}\\cdot {@4}={@5}$. O novo membro tem ${@6}-{@7}={@8}$ anos.",
  "Súčet známok treba deliť počtom žiakov $n$, nie počtom rôznych známok.": "A soma das notas deve ser dividida pelo número de alunos $n$, não pelo número de notas diferentes.",
  "Súčet štvorcov odchýlok delíme počtom údajov $n={@0}$, nie číslom $n-1$ (tak je rozptyl definovaný v teórii).": "A soma dos quadrados dos desvios é dividida pelo número de dados $n={@0}$, não por $n-1$ (assim a variância está definida na teoria).",
  "Súčin dvoch nepárnych funkcií je párny: $(-x)\\sin(-x)=x\\sin x$.": "O produto de duas funções ímpares é par: $(-x)\\sin(-x)=x\\sin x$.",
  "Súčin je nenulový, priamka rovinu pretína.": "O produto é diferente de zero: a reta corta o plano.",
  "Súčin je nepárny len vtedy, keď sú obe čísla nepárne: $3\\cdot 3=9$ výsledkov. Priaznivých je $36-9=27$.": "O produto é ímpar só se os dois números forem ímpares: $3\\cdot 3=9$ resultados. Os favoráveis são $36-9=27$.",
  "Súčin je nulový, priamka je s rovinou rovnobežná; bod ${@0}$ {@1}.": "O produto é zero, a reta é paralela ao plano; o ponto ${@0}$ {@1}.",
  "Súčin koreňov je $x_1x_2={@0}$. Aký je druhý koreň $x_2$?": "O produto das raízes é $x_1x_2={@0}$. Qual é a segunda raiz $x_2$?",
  "Tabuľka": "Tabela",
  "Takto by to bolo pri jednoduchom úročení. Pri zloženom sa úročia aj pripísané úroky, suma sa každý rok násobí.": "Assim seria com juros simples. Nos juros compostos, também os juros creditados rendem juros; a quantia é multiplicada a cada ano.",
  "Takto by to bolo pri jednoduchom úročení. Úroky ostávajú na účte a ďalší rok sa úročia tiež, suma sa každý rok násobí.": "Assim seria com juros simples. Os juros ficam na conta e no ano seguinte também rendem juros; a quantia é multiplicada a cada ano.",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{dm}$ a výškou ${@1}\\,\\text{dm}$, na ktorý je nasadený kužeľ s rovnakou podstavou a výškou ${@2}\\,\\text{dm}$. Vypočítaj objem telesa v $\\text{dm}^3$. {@3}": "Um sólido é formado por um cilindro de raio ${@0}\\,\\text{dm}$ e altura ${@1}\\,\\text{dm}$, sobre o qual há um cone com a mesma base e altura ${@2}\\,\\text{dm}$. Calcule o volume do sólido em $\\text{dm}^3$. {@3}",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{m}$ a výškou ${@1}\\,\\text{m}$, na ktorého hornej podstave je polguľa s rovnakým polomerom. Vypočítaj objem telesa v $\\text{m}^3$. {@2}": "Um sólido é formado por um cilindro de raio ${@0}\\,\\text{m}$ e altura ${@1}\\,\\text{m}$, sobre cuja base superior há uma semiesfera do mesmo raio. Calcule o volume do sólido em $\\text{m}^3$. {@2}",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "Isso é o quadrado da distância. Ainda extraia a raiz do resultado.",
  "To je druhý spoločný bod. Pýtame sa na ten s menšou $x$-ovou súradnicou.": "Esse é o outro ponto comum. A pergunta é sobre aquele com a menor coordenada $x$.",
  "To je druhý stacionárny bod, v ňom má funkcia lokálne {@0}. Pri maxime mení $f'$ znamienko z $+$ na $-$, pri minime z $-$ na $+$.": "Esse é o outro ponto crítico; nele a função tem {@0} local. Num máximo, $f'$ muda de sinal de $+$ para $-$; num mínimo, de $-$ para $+$.",
  "To je dĺžka strany kolmej na stenu. Pýtame sa na stranu rovnobežnú so stenou, jej dĺžka je ${@0}-2x$.": "Esse é o comprimento do lado perpendicular ao muro. A pergunta é sobre o lado paralelo ao muro, cujo comprimento é ${@0}-2x$.",
  "To je len plášť ihlana. Povrch zahŕňa aj štvorcovú podstavu.": "Isso é só a superfície lateral da pirâmide. A área da superfície inclui também a base quadrada.",
  "To je len plášť kužeľa. Povrch zahŕňa aj kruhovú podstavu $\\pi r^2$.": "Isso é só a superfície lateral do cone. A área da superfície inclui também a base circular $\\pi r^2$.",
  "To je len plášť. Povrch zahŕňa aj obe kruhové podstavy.": "Isso é só a superfície lateral. A área da superfície inclui também as duas bases circulares.",
  "To je nový priemerný vek. Pracuj so súčtami vekov: súčet = priemer · počet.": "Essa é a nova idade média. Trabalhe com as somas das idades: soma = média · número.",
  "To je objem hranola s rovnakou podstavou a výškou. Objem ihlana je jeho tretina.": "Esse é o volume do prisma com a mesma base e altura. O volume da pirâmide é um terço dele.",
  "To je objem valca. Objem kužeľa je jeho tretina.": "Esse é o volume do cilindro. O volume do cone é um terço dele.",
  "To je obsah pod parabolou. Útvar je medzi dvoma krivkami, integruj rozdiel „horná mínus dolná“.": "Essa é a área sob a parábola. A figura está entre duas curvas: integre a diferença «de cima menos a de baixo».",
  "To je obsah pod priamkou. Od neho ešte treba odčítať obsah pod parabolou.": "Essa é a área sob a reta. Ainda é preciso subtrair a área sob a parábola.",
  "To je pomer polomerov. Pri pretavení sa zachováva objem a objem rastie s treťou mocninou polomeru.": "Essa é a razão dos raios. Ao fundir, o volume se conserva, e o volume cresce com o cubo do raio.",
  "To je početnosť najčastejšej hodnoty. Modus je samotná hodnota, ktorá sa vyskytuje najčastejšie.": "Essa é a frequência do valor mais frequente. A moda é o próprio valor que aparece com mais frequência.",
  "To je pravdepodobnosť opačného javu $X=0$. Odpočítaj ju od jednotky.": "Essa é a probabilidade do evento complementar $X=0$. Subtraia-a de um.",
  "To je pravdepodobnosť opačného javu, že sa vyberú len chlapci. Odpočítaj ju od jednotky.": "Essa é a probabilidade do evento complementar, de que sejam escolhidos só meninos. Subtraia-a de um.",
  "To je pravdepodobnosť opačného javu, že súčin je nepárny. Odpočítaj ju od jednotky.": "Essa é a probabilidade do evento complementar, de que o produto seja ímpar. Subtraia-a de um.",
  "To je pravdepodobnosť opačného javu, že šestka nepadne ani raz. Odpočítaj ju od jednotky.": "Essa é a probabilidade do evento complementar, de que não saia nenhum seis. Subtraia-a de um.",
  "To je pravdepodobnosť práve jedného úspechu. „Aspoň jeden“ zahŕňa aj viac úspechov, použi opačný jav.": "Essa é a probabilidade de exatamente um sucesso. «Pelo menos um» inclui também mais sucessos: use o evento complementar.",
  "To je pravdepodobnosť, že nezasiahnu obaja súčasne. Ani jeden znamená, že minú obaja.": "Essa é a probabilidade de que os dois não acertem ao mesmo tempo. «Nenhum» significa que os dois erram.",
  "To je pravdepodobnosť, že zasiahnu obaja. „Aspoň jeden“ zahŕňa aj prípady, keď zasiahne len jeden.": "Essa é a probabilidade de que os dois acertem. «Pelo menos um» inclui também os casos em que só um acerta.",
  "To je priemer. Medián je prostredná hodnota usporiadaného súboru.": "Essa é a média. A mediana é o valor central do conjunto ordenado.",
  "To je prostredná strana. Prepona je najdlhšia strana trojuholníka.": "Esse é o lado do meio. A hipotenusa é o lado mais longo do triângulo.",
  "To je rozptyl. Smerodajná odchýlka je jeho druhá odmocnina.": "Essa é a variância. O desvio padrão é a sua raiz quadrada.",
  "To je smerodajná odchýlka. Rozptyl je jej druhá mocnina, $D(X)=np(1-p)$.": "Esse é o desvio padrão. A variância é o seu quadrado, $D(X)=np(1-p)$.",
  "To je smerodajná odchýlka. Rozptyl sa neodmocňuje.": "Esse é o desvio padrão. A variância não tem raiz.",
  "To je strana odstrihnutého štvorca. Pýtame sa na objem krabice.": "Esse é o lado do quadrado recortado. A pergunta é sobre o volume da caixa.",
  "To je stredový uhol výseče v stupňoch. Percentá sú časť zo $100$, nie z $360$.": "Esse é o ângulo central do setor em graus. As porcentagens são uma parte de $100$, não de $360$.",
  "To je uhol priamky s normálovým vektorom roviny. Uhol s rovinou ho dopĺňa do $90^\\circ$: s normálou počítaj $\\sin\\varphi$, nie $\\cos\\varphi$.": "Esse é o ângulo da reta com o vetor normal do plano. O ângulo com o plano é o seu complemento até $90^\\circ$: com a normal calcule $\\sin\\varphi$, não $\\cos\\varphi$.",
  "To je vzdialenosť bodov ${@0}$ a ${@1}$. Vzdialenosť od priamky sa meria kolmo na priamku.": "Essa é a distância entre os pontos ${@0}$ e ${@1}$. A distância até uma reta é medida perpendicularmente à reta.",
  "To sú $y$-ové súradnice priesečníkov. Zadaj ich $x$-ové súradnice.": "Essas são as coordenadas $y$ dos pontos de interseção. Digite as suas coordenadas $x$.",
  "To sú hodnoty substitúcie $t={@0}$. Z definície logaritmu ešte vypočítaj $x={@1}^{t}$.": "Esses são os valores da substituição $t={@0}$. Pela definição de logaritmo, calcule ainda $x={@1}^{t}$.",
  "To sú hodnoty substitúcie $t={@0}^{x}$. Ešte sa vráť k neznámej $x$.": "Esses são os valores da substituição $t={@0}^{x}$. Volte ainda para a incógnita $x$.",
  "To sú percentá. Stredový uhol je rovnaká časť z celého uhla $360^\\circ$, nie zo $100$.": "Isso são porcentagens. O ângulo central é a mesma parte do ângulo completo $360^\\circ$, não de $100$.",
  "To sú všetky spojnice dvojíc vrcholov, aj strany mnohouholníka. Strany treba odčítať.": "Esses são todos os segmentos que ligam pares de vértices, também os lados do polígono. É preciso subtrair os lados.",
  "Totožné priamky majú všetky body spoločné. Over, či oba body jednej priamky ležia na druhej.": "Retas coincidentes têm todos os pontos em comum. Verifique se os dois pontos de uma reta estão na outra.",
  "Totožné roviny majú všetky body spoločné. Over, či všetky tri body druhej roviny ležia v prvej.": "Planos coincidentes têm todos os pontos em comum. Verifique se os três pontos do segundo plano estão no primeiro.",
  "Trojuholník má vrcholy $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Vypočítaj jeho obsah $S$ a výšku $v_c$ na stranu $AB$. Zadaj $S$ a $v_c$ (zaokrúhlenú na 2 desatinné miesta) oddelené bodkočiarkou.": "Um triângulo tem os vértices $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Calcule a sua área $S$ e a altura $v_c$ relativa ao lado $AB$. Digite $S$ e $v_c$ (arredondada para 2 casas decimais) separados por ponto e vírgula.",
  "Tu je $f''(x)&lt;0$, funkcia je tam konkávna. Pri delení nerovnice záporným číslom nezabudni otočiť znak nerovnosti.": "Aqui $f''(x)&lt;0$, a função é côncava ali. Ao dividir a inequação por um número negativo, não se esqueça de inverter o sinal da desigualdade.",
  "Tu je funkcia {@0}. Skontroluj znamienko $f'$: medzi koreňmi má opačné znamienko ako vedúci koeficient ${@1}$.": "Aqui a função é {@0}. Verifique o sinal de $f'$: entre as raízes ela tem o sinal oposto ao do coeficiente dominante ${@1}$.",
  "Táto podmienka zodpovedá $D&gt;0$, teda dvom rôznym reálnym koreňom.": "Essa condição corresponde a $D&gt;0$, ou seja, a duas raízes reais distintas.",
  "Táto podmienka zodpovedá $D&lt;0$, rovnica potom nemá reálny koreň.": "Essa condição corresponde a $D&lt;0$; a equação então não tem raízes reais.",
  "Táto podmienka zodpovedá $D=0$, teda jednému dvojnásobnému koreňu.": "Essa condição corresponde a $D=0$, ou seja, a uma raiz dupla.",
  "Táto podmienka zodpovedá $D\\ge 0$, teda aspoň jednému reálnemu koreňu.": "Essa condição corresponde a $D\\ge 0$, ou seja, a pelo menos uma raiz real.",
  "Táto podmienka zodpovedá $D\\le 0$: zahŕňa dvojnásobný koreň aj prípad bez reálnych koreňov.": "Essa condição corresponde a $D\\le 0$: inclui a raiz dupla e também o caso sem raízes reais.",
  "Uhol dvoch priamok je najviac $90^\\circ$. Vo vzorci pre $\\cos\\varphi$ je v čitateli absolútna hodnota skalárneho súčinu.": "O ângulo de duas retas é no máximo $90^\\circ$. Na fórmula de $\\cos\\varphi$, no numerador está o valor absoluto do produto escalar.",
  "Uhol priamky s rovinou počítaj cez normálový vektor roviny: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Alebo nájdi priemet priamky do roviny a pravouhlý trojuholník.": "O ângulo de uma reta com um plano calcule por meio do vetor normal do plano: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Ou encontre a projeção da reta sobre o plano e um triângulo retângulo.",
  "Uhol priamok je uhol ich smerových vektorov z intervalu $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.": "O ângulo de duas retas é o ângulo dos seus vetores diretores no intervalo $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.",
  "Umiestni kocku do súradnicovej sústavy, zapíš súradnice oboch bodov (stred hrany je priemer koncových bodov) a použi vzorec pre vzdialenosť.": "Coloque o cubo num sistema de coordenadas, escreva as coordenadas dos dois pontos (o ponto médio de uma aresta é a média das suas extremidades) e use a fórmula da distância.",
  "Uprav $f(-x)$: využi $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ a $\\cos(-x)=\\cos x$. Potom porovnaj s $f(x)$ aj s $-f(x)$.": "Simplifique $f(-x)$: use $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ e $\\cos(-x)=\\cos x$. Depois compare com $f(x)$ e com $-f(x)$.",
  "Uprav rovnicu na tvar $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Aké je číslo $r$? Zadaj zlomok alebo celé číslo.": "Escreva a equação na forma $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Qual é o número $r$? Digite uma fração ou um número inteiro.",
  "Upravíme: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Pre $x\\to 0$ aj $t={@6}x\\to 0$ a $\\frac{\\sin t}{t}\\to 1$. Limita je ${@7}{@8}$.": "Transformamos: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Para $x\\to 0$ também $t={@6}x\\to 0$ e $\\frac{\\sin t}{t}\\to 1$. O limite é ${@7}{@8}$.",
  "Urči asymptoty grafu funkcie $f(x)=\\dfrac{{@0}}{{@1}}$. Zadaj číslo zo zvislej asymptoty $x=\\dots$ a potom číslo z vodorovnej asymptoty $y=\\dots$ (napr. 2; -1/2).": "Determine as assíntotas do gráfico da função $f(x)=\\dfrac{{@0}}{{@1}}$. Digite o número da assíntota vertical $x=\\dots$ e depois o número da assíntota horizontal $y=\\dots$ (por exemplo, 2; -1/2).",
  "Urči jednostrannú limitu $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.": "Determine o limite lateral $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.",
  "Urči podmienky, súčet logaritmov zapíš ako logaritmus súčinu a odlogaritmuj. Nájdené korene porovnaj s podmienkami.": "Determine as condições, escreva a soma de logaritmos como logaritmo do produto e elimine os logaritmos. Compare as raízes encontradas com as condições.",
  "Urči vzájomnú polohu priamky $p: {@0}=0$ a kružnice $k: {@1}$.": "Determine a posição relativa da reta $p: {@0}=0$ e da circunferência $k: {@1}$.",
  "Usporiadaný súbor: ${@0}$ ($n={@1}$). {@2}": "Conjunto ordenado: ${@0}$ ($n={@1}$). {@2}",
  "V $P(X=1)$ chýba kombinačné číslo $\\binom{{@0}}{1}={@1}$: úspech môže nastať v ktoromkoľvek pokuse.": "Em $P(X=1)$ falta o número binomial $\\binom{{@0}}{1}={@1}$: o sucesso pode ocorrer em qualquer uma das tentativas.",
  "V kocke $ABCDEFGH$ (podstava $ABCD$, nad ňou $EFGH$, hrany $AE$, $BF$, $CG$, $DH$) urči vzájomnú polohu priamok ${@0}$ a ${@1}$.": "No cubo $ABCDEFGH$ (base $ABCD$, acima $EFGH$, arestas $AE$, $BF$, $CG$, $DH$) determine a posição relativa das retas ${@0}$ e ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu priamky ${@0}$ a roviny ${@1}$.": "No cubo $ABCDEFGH$ determine a posição relativa da reta ${@0}$ e do plano ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu rovín ${@0}$ a ${@1}$.": "No cubo $ABCDEFGH$ determine a posição relativa dos planos ${@0}$ e ${@1}$.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamky ${@0}$ s rovinou ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "No cubo $ABCDEFGH$ calcule o ângulo da reta ${@0}$ com o plano ${@1}$ em graus. Arredonde o resultado aos décimos de grau.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamok ${@0}$ a ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "No cubo $ABCDEFGH$ calcule o ângulo das retas ${@0}$ e ${@1}$ em graus. Arredonde o resultado aos décimos de grau.",
  "V kocke s hranou $1$ je smerový vektor priamky $\\vec{u}={@0}$ a rovina ${@1}$ je stena kocky s normálovým vektorom $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, teda $\\varphi\\approx {@6}^\\circ$.": "Num cubo de aresta $1$, o vetor diretor da reta é $\\vec{u}={@0}$, e o plano ${@1}$ é uma face do cubo com vetor normal $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, ou seja, $\\varphi\\approx {@6}^\\circ$.",
  "V kocke s hranou $1$ sú smerové vektory $\\vec{u}=\\vec{{@0}}={@1}$ a $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, teda $\\varphi\\approx {@8}^\\circ$.": "Num cubo de aresta $1$, os vetores diretores são $\\vec{u}=\\vec{{@0}}={@1}$ e $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, ou seja, $\\varphi\\approx {@8}^\\circ$.",
  "V krúžku je {@0} chlapcov a {@1} {@2}. Na súťaž náhodne vyberieme troch členov. Aká je pravdepodobnosť, že medzi nimi bude aspoň jedno dievča? {@3}": "Num clube há {@0} meninos e {@1} {@2}. Para um concurso escolhemos ao acaso três membros. Qual é a probabilidade de que entre eles haja pelo menos uma menina? {@3}",
  "V ktorom z bodov ${@0}$, ${@1}$ má funkcia {@2}?": "Em qual dos pontos ${@0}$, ${@1}$ a função tem {@2}?",
  "V percentách ${@0}\\,\\%$.": "Em porcentagem, ${@0}\\,\\%$.",
  "V pravouhlom trojuholníku s výškou ihlana a stenovou výškou je druhou odvesnou polovica podstavnej hrany, nie celá hrana.": "No triângulo retângulo formado pela altura da pirâmide e pelo apótema, o outro cateto é a metade da aresta da base, não a aresta inteira.",
  "V rade záleží na tom, kto sedí na ktorej stoličke: otočenie tu nehrá rolu, usporiadaj všetkých ľudí.": "Numa fila importa quem senta em qual cadeira: aqui a rotação não tem importância, ordene todas as pessoas.",
  "V rovnici $y=ax+b$ vymeň $x$ a $y$ a vyjadri $y$.": "Na equação $y=ax+b$ troque $x$ e $y$ e isole $y$.",
  "V skupine nezáleží na poradí, ide o kombinácie, nie variácie.": "Num grupo a ordem não importa: trata-se de combinações, não de arranjos.",
  "V spoločnom bode majú obe funkcie rovnakú hodnotu: polož pravé strany rovné a vyrieš kvadratickú rovnicu.": "Num ponto comum as duas funções têm o mesmo valor: iguale os membros direitos e resolva a equação do segundo grau.",
  "V triede je {@0} chlapcov a {@1} dievčat. Koľkými spôsobmi môžeme vybrať skupinu, v ktorej budú {@2} a {@3}?": "Numa turma há {@0} meninos e {@1} meninas. De quantas maneiras podemos escolher um grupo em que haja {@2} e {@3}?",
  "V urne sú gule: {@0} {@1} a {@2} {@3}. Naraz náhodne vytiahneme dve. Aká je pravdepodobnosť, že {@4}? {@5}": "Numa urna há bolas: {@0} {@1} e {@2} {@3}. Tiramos ao mesmo tempo, ao acaso, duas. Qual é a probabilidade de que {@4}? {@5}",
  "Valec: $\\pi r^2v={@0}\\pi$. Kužeľ: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.": "Cilindro: $\\pi r^2v={@0}\\pi$. Cone: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Ao todo, $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.",
  "Valec: $\\pi r^2v={@0}\\pi$. Polguľa: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.": "Cilindro: $\\pi r^2v={@0}\\pi$. Semiesfera: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Ao todo, $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.",
  "Variačné rozpätie je rozdiel najväčšej a najmenšej hodnoty.": "A amplitude é a diferença entre o maior e o menor valor.",
  "Vklad je úročený ročne sadzbou ${@0}\\,\\%$ (zložené úročenie, bez dane). Po koľkých rokoch sa prvýkrát aspoň {@1}?": "Um depósito rende juros anuais à taxa de ${@0}\\,\\%$ (juros compostos, sem imposto). Depois de quantos anos ele, pela primeira vez, pelo menos {@1}?",
  "Vo vzorci je výška delená tromi: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.": "Na fórmula, a altura é dividida por três: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.",
  "Vo vzorci pre objem zrezaného kužeľa je výška delená tromi: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "Na fórmula do volume do tronco de cone, a altura é dividida por três: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Vráť sa k $x$ a zadaj všetky riešenia (zlomok napr. ako 1/2).": "Volte para $x$ e digite todas as soluções (uma fração, por exemplo, como 1/2).",
  "Vydelíme obe strany výrazom ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Zlogaritmujeme: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, teda $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.": "Dividimos os dois membros pela expressão ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Aplicamos logaritmos: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, ou seja, $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.",
  "Vyjadri diskriminant pomocou $p$ a podľa požadovaného počtu koreňov urči, či má byť kladný, nulový alebo záporný.": "Escreva o discriminante em função de $p$ e, conforme o número de raízes pedido, determine se ele deve ser positivo, zero ou negativo.",
  "Vyjadri goniometrickú funkciu, nájdi riešenia v jednej perióde a pripočítaj násobky periódy ($2\\pi$ pre sínus a kosínus, $\\pi$ pre tangens).": "Isole a função trigonométrica, encontre as soluções num período e some múltiplos do período ($2\\pi$ para o seno e o cosseno, $\\pi$ para a tangente).",
  "Vyjadri objem ako funkciu strany odstrihnutého štvorca, zderivuj ju a nájdi stacionárny bod v prípustnom intervale.": "Escreva o volume como função do lado do quadrado recortado, derive e encontre o ponto crítico no intervalo admissível.",
  "Vymeníme $x$ a $y$: $x={@0}$, odtiaľ ${@1}y={@2}$ a $y=\\dfrac{{@3}}{{@4}}$. Teda $f^{-1}(x)={@5}x{@6}{@7}$, čiže $k={@8}$ a $q={@9}$.": "Trocamos $x$ e $y$: $x={@0}$, de onde ${@1}y={@2}$ e $y=\\dfrac{{@3}}{{@4}}$. Portanto, $f^{-1}(x)={@5}x{@6}{@7}$, ou seja, $k={@8}$ e $q={@9}$.",
  "Vypočítaj $F(-{@0})$.": "Calcule $F(-{@0})$.",
  "Vypočítaj $F(0)$.": "Calcule $F(0)$.",
  "Vypočítaj $F(1)-F(0)$. Zadaj zlomok alebo celé číslo.": "Calcule $F(1)-F(0)$. Digite uma fração ou um número inteiro.",
  "Vypočítaj $F({@0})$.": "Calcule $F({@0})$.",
  "Vypočítaj $F({@0})-F({@1})$.": "Calcule $F({@0})-F({@1})$.",
  "Vypočítaj $P(X=0)$. {@0}": "Calcule $P(X=0)$. {@0}",
  "Vypočítaj $P(X=1)$. {@0}": "Calcule $P(X=1)$. {@0}",
  "Vypočítaj $P(X={@0})$. {@1}": "Calcule $P(X={@0})$. {@1}",
  "Vypočítaj $P(X\\ge 1)$. {@0}": "Calcule $P(X\\ge 1)$. {@0}",
  "Vypočítaj $P(X\\le 1)$. {@0}": "Calcule $P(X\\le 1)$. {@0}",
  "Vypočítaj $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}": "Calcule $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}",
  "Vypočítaj $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcule $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Digite o resultado como fração ou número inteiro.",
  "Vypočítaj $\\int_0^{{@0}} x^2\\,dx$. Zadaj zlomok alebo celé číslo.": "Calcule $\\int_0^{{@0}} x^2\\,dx$. Digite uma fração ou um número inteiro.",
  "Vypočítaj $\\int_0^{{@0}} {@1}\\,dx$.": "Calcule $\\int_0^{{@0}} {@1}\\,dx$.",
  "Vypočítaj $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok.": "Calcule $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Digite o resultado como número inteiro ou fração.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Výsledok zadaj ako zlomok.": "Calcule $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Digite o resultado como fração.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.": "Calcule $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.",
  "Vypočítaj $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok (napr. -3/2).": "Calcule $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Digite o resultado como número inteiro ou fração (por exemplo, -3/2).",
  "Vypočítaj $k$.": "Calcule $k$.",
  "Vypočítaj $t$ z prvej súradnice a dosaď ho do zvyšných dvoch rovníc. Over starostlivo obe.": "Calcule $t$ a partir da primeira coordenada e substitua-o nas outras duas equações. Verifique as duas com cuidado.",
  "Vypočítaj $|AB|^2$.": "Calcule $|AB|^2$.",
  "Vypočítaj $|\\vec u\\cdot\\vec n|$ pre $\\vec u=\\vec{{@0}}$ a normálový vektor $\\vec n={@1}$ (kocka s hranou $1$).": "Calcule $|\\vec u\\cdot\\vec n|$ para $\\vec u=\\vec{{@0}}$ e o vetor normal $\\vec n={@1}$ (cubo de aresta $1$).",
  "Vypočítaj $|{@0}K|$ v cm. {@1}": "Calcule $|{@0}K|$ em cm. {@1}",
  "Vypočítaj $|{@0}K|^2$.": "Calcule $|{@0}K|^2$.",
  "Vypočítaj absolútny člen $q$.": "Calcule o termo independente $q$.",
  "Vypočítaj aritmetický priemer $\\bar{x}$.": "Calcule a média aritmética $\\bar{x}$.",
  "Vypočítaj determinant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.": "Calcule o determinante $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.",
  "Vypočítaj druhú deriváciu. Pre aké $x$ je $f''(x)=0$?": "Calcule a segunda derivada. Para qual $x$ temos $f''(x)=0$?",
  "Vypočítaj hodnotu v pravom krajnom bode, $f({@0})$.": "Calcule o valor na extremidade direita, $f({@0})$.",
  "Vypočítaj hodnotu v ľavom krajnom bode, $f({@0})$.": "Calcule o valor na extremidade esquerda, $f({@0})$.",
  "Vypočítaj objem celého telesa v $\\text{dm}^3$. {@0}": "Calcule o volume de todo o sólido em $\\text{dm}^3$. {@0}",
  "Vypočítaj objem celého telesa v $\\text{m}^3$. {@0}": "Calcule o volume de todo o sólido em $\\text{m}^3$. {@0}",
  "Vypočítaj objem dutiny s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Calcule o volume do furo de raio ${@0}\\,\\text{cm}$ em $\\text{cm}^3$. {@1}",
  "Vypočítaj objem kužeľa v $\\text{dm}^3$. {@0}": "Calcule o volume do cone em $\\text{dm}^3$. {@0}",
  "Vypočítaj objem materiálu v $\\text{cm}^3$. {@0}": "Calcule o volume do material em $\\text{cm}^3$. {@0}",
  "Vypočítaj objem plného valca s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Calcule o volume do cilindro maciço de raio ${@0}\\,\\text{cm}$ em $\\text{cm}^3$. {@1}",
  "Vypočítaj objem polgule v $\\text{m}^3$. {@0}": "Calcule o volume da semiesfera em $\\text{m}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$. {@0}": "Calcule o volume em $\\text{cm}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$.{@0}": "Calcule o volume em $\\text{cm}^3$.{@0}",
  "Vypočítaj objem valca v $\\text{dm}^3$. {@0}": "Calcule o volume do cilindro em $\\text{dm}^3$. {@0}",
  "Vypočítaj objem valca v $\\text{m}^3$. {@0}": "Calcule o volume do cilindro em $\\text{m}^3$. {@0}",
  "Vypočítaj obsah $S$.": "Calcule a área $S$.",
  "Vypočítaj obsah podstavy $S_p$ v $\\text{cm}^2$. {@0}": "Calcule a área da base $S_p$ em $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah rezu v $\\text{cm}^2$. {@0}": "Calcule a área da seção em $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah v $\\text{cm}^2$.": "Calcule a área em $\\text{cm}^2$.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y=x^2$ a priamkou $y={@0}$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcule a área da figura limitada pela parábola $y=x^2$ e pela reta $y={@0}$. Digite o resultado como fração ou número inteiro.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y={@0}-x^2$ a osou $x$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcule a área da figura limitada pela parábola $y={@0}-x^2$ e pelo eixo $x$. Digite o resultado como fração ou número inteiro.",
  "Vypočítaj obsah časti roviny, ktorú určuje sústava nerovníc $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.": "Calcule a área da parte do plano determinada pelo sistema de inequações $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.",
  "Vypočítaj polomer gule v cm.": "Calcule o raio da esfera em cm.",
  "Vypočítaj polomer rezu $\\rho$ v cm.": "Calcule o raio da seção $\\rho$ em cm.",
  "Vypočítaj povrch ihlana v $\\text{cm}^2$.": "Calcule a área da superfície da pirâmide em $\\text{cm}^2$.",
  "Vypočítaj povrch v $\\text{cm}^2$. {@0}": "Calcule a área da superfície em $\\text{cm}^2$. {@0}",
  "Vypočítaj priemer, potom priemer druhých mocnín odchýlok od neho. Smerodajná odchýlka je odmocnina z rozptylu.": "Calcule a média e depois a média dos quadrados dos desvios em relação a ela. O desvio padrão é a raiz da variância.",
  "Vypočítaj priemernú známku. {@0}": "Calcule a nota média. {@0}",
  "Vypočítaj rozptyl $D(X)$.": "Calcule a variância $D(X)$.",
  "Vypočítaj rozptyl $s^2$. {@0}": "Calcule a variância $s^2$. {@0}",
  "Vypočítaj skalárny súčin smerových vektorov $\\vec{{@0}}\\cdot\\vec{{@1}}$ (kocka s hranou $1$).": "Calcule o produto escalar dos vetores diretores $\\vec{{@0}}\\cdot\\vec{{@1}}$ (cubo de aresta $1$).",
  "Vypočítaj smernicu $k=f'({@0})$.": "Calcule a inclinação $k=f'({@0})$.",
  "Vypočítaj smerodajnú odchýlku $s$. {@0}": "Calcule o desvio padrão $s$. {@0}",
  "Vypočítaj stranu $s$ v cm.": "Calcule a geratriz $s$ em cm.",
  "Vypočítaj stranu kužeľa $s$ v cm.": "Calcule a geratriz do cone $s$ em cm.",
  "Vypočítaj strednú hodnotu $E(X)$ (zlomok alebo desatinné číslo aspoň na 2 miesta).": "Calcule a esperança $E(X)$ (fração ou número decimal com pelo menos 2 casas decimais).",
  "Vypočítaj súčet $R^2+Rr+r^2$.": "Calcule a soma $R^2+Rr+r^2$.",
  "Vypočítaj súčet $a_1^2+a_1a_2+a_2^2$.": "Calcule a soma $a_1^2+a_1a_2+a_2^2$.",
  "Vypočítaj súčet druhých mocnín odchýlok od priemeru.": "Calcule a soma dos quadrados dos desvios em relação à média.",
  "Vypočítaj uhol priamky s rovinou v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Calcule o ângulo da reta com o plano em graus. Arredonde o resultado aos décimos de grau.",
  "Vypočítaj uhol priamok v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Calcule o ângulo das retas em graus. Arredonde o resultado aos décimos de grau.",
  "Vypočítaj vzdialenosť bodu ${@0}$ od roviny v cm. {@1}": "Calcule a distância do ponto ${@0}$ ao plano em cm. {@1}",
  "Vypočítaj výšku $v_c$. {@0}": "Calcule a altura $v_c$. {@0}",
  "Vypočítaj {@0} hodnotu funkcie $f(x)={@1}$ na intervale $\\langle {@2}; {@3}\\rangle$.": "Calcule o valor {@0} da função $f(x)={@1}$ no intervalo $\\langle {@2}; {@3}\\rangle$.",
  "Vypočítaj {@0} súboru ${@1}$. {@2}": "Calcule {@0} do conjunto ${@1}$. {@2}",
  "Vypočítaj {@0} v $\\text{cm}^2$. {@1}": "Calcule {@0} em $\\text{cm}^2$. {@1}",
  "Vypočítaj {@0}. {@1}": "Calcule {@0}. {@1}",
  "Vypočítal si $f\\!\\left({@0}\\right)$. Hodnota $f^{-1}(c)$ je však číslo $x$, pre ktoré $f(x)=c$.": "Você calculou $f\\!\\left({@0}\\right)$. Mas o valor $f^{-1}(c)$ é o número $x$ para o qual $f(x)=c$.",
  "Vypĺňaj miesta postupne a použi pravidlo súčinu. Prvá cifra nesmie byť nula; pri podmienke na deliteľnosť začni poslednou cifrou a rozdeľ prípady.": "Preencha as posições uma a uma e use o princípio multiplicativo. O primeiro algarismo não pode ser zero; se houver uma condição de divisibilidade, comece pelo último algarismo e divida em casos.",
  "Vyrieš každú nerovnicu zvlášť (pozor na delenie záporným číslom) a urob prienik intervalov.": "Resolva cada inequação separadamente (cuidado ao dividir por um número negativo) e faça a interseção dos intervalos.",
  "Vyrieš rovnicu $({@0})^2{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou (zlomok napr. ako 1/2).": "Resolva a equação $({@0})^2{@1}{@2}=0$. Digite todas as soluções separadas por ponto e vírgula (uma fração, por exemplo, como 1/2).",
  "Vyrieš rovnicu $\\log_2({@0})+\\log_2({@1})={@2}$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Resolva a equação $\\log_2({@0})+\\log_2({@1})={@2}$. Digite todas as soluções separadas por ponto e vírgula.",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou (napr. 30; 150).": "Resolva a equação ${@0}$ para {@1}. Digite todas as soluções em graus separadas por ponto e vírgula (por exemplo, 30; 150).",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou.": "Resolva a equação ${@0}$ para {@1}. Digite todas as soluções em graus separadas por ponto e vírgula.",
  "Vyrieš rovnicu ${@0}={@1}$. {@2}": "Resolva a equação ${@0}={@1}$. {@2}",
  "Vyrieš rovnicu. Koľko vrcholov má mnohouholník?": "Resolva a equação. Quantos vértices tem o polígono?",
  "Vyrieš rovnicu. Koľko ľudí bolo na stretnutí?": "Resolva a equação. Quantas pessoas havia na reunião?",
  "Vyrieš sústavu rovníc $x+y={@0}$, $x\\cdot y={@1}$. Zadaj všetky možné hodnoty $x$ oddelené bodkočiarkou.": "Resolva o sistema de equações $x+y={@0}$, $x\\cdot y={@1}$. Digite todos os valores possíveis de $x$ separados por ponto e vírgula.",
  "Vyrieš v $\\mathbb{R}$ rovnicu ${@0}^{x}{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Resolva em $\\mathbb{R}$ a equação ${@0}^{x}{@1}{@2}=0$. Digite todas as soluções separadas por ponto e vírgula.",
  "Využi $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: vynásob a vydeľ výraz tak, aby si v menovateli dostal ten istý argument ako v sínuse.": "Use $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: multiplique e divida a expressão de modo que no denominador apareça o mesmo argumento que no seno.",
  "Využi Vietove vzťahy: súčin koreňov je absolútny člen, súčet koreňov je $-p$. Alebo dosaď známy koreň do rovnice.": "Use as relações de Girard: o produto das raízes é o termo independente e a soma das raízes é $-p$. Ou substitua a raiz conhecida na equação.",
  "Vzdialenosť h od nuly": "Distância de h até zero",
  "Vzorec $\\frac{\\sin t}{t}\\to 1$ platí, len keď je v menovateli presne argument sínusu, teda ${@0}x$. Výraz najprv uprav.": "A fórmula $\\frac{\\sin t}{t}\\to 1$ só vale quando no denominador está exatamente o argumento do seno, ou seja, ${@0}x$. Transforme primeiro a expressão.",
  "Výber chlapcov a výber dievčat sa navzájom nevylučujú, kombinujú sa. Použi pravidlo súčinu, nie súčtu.": "A escolha dos meninos e a das meninas não se excluem, combinam-se. Use o princípio multiplicativo, não o aditivo.",
  "Výraz obsahuje len $x^2$, preto $f(-x)=f(x)$.": "A expressão contém só $x^2$, por isso $f(-x)=f(x)$.",
  "Výrobok je chybný s pravdepodobnosťou ${@0}$, nezávisle od ostatných. Náhodne vyberieme {@1} {@2}; $X$ je počet chybných.": "Um produto é defeituoso com probabilidade ${@0}$, independentemente dos outros. Escolhemos ao acaso {@1} {@2}; $X$ é o número de defeituosos.",
  "Výseč má stredový uhol $\\frac{n_i}{n}\\cdot 360^\\circ$.": "O setor tem ângulo central $\\frac{n_i}{n}\\cdot 360^\\circ$.",
  "Výsledky pokusu sú dvojice gúľ (kombinácie). Spočítaj všetky a priaznivé; pri „aspoň jedna“ je jednoduchší opačný jav.": "Os resultados do experimento são pares de bolas (combinações). Conte todos e os favoráveis; com «pelo menos uma» é mais fácil o evento complementar.",
  "Výsledok dosaď do vonkajšej funkcie: ${@0}({@1})$.": "Substitua o resultado na função externa: ${@0}({@1})$.",
  "Výsledok je usporiadaná dvojica (prvá kocka, druhá kocka), všetkých je 36. Spočítaj priaznivé dvojice.": "O resultado é um par ordenado (primeiro dado, segundo dado); há 36 ao todo. Conte os pares favoráveis.",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Arredonde o resultado para 2 casas decimais.",
  "Výsledok zaokrúhli na 4 desatinné miesta.": "Arredonde o resultado para 4 casas decimais.",
  "Všetky hrany kocky zväčšíme o ${@0}\\,\\%$. O koľko percent sa zväčší jej {@1}? {@2}": "Aumentamos todas as arestas de um cubo em ${@0}\\,\\%$. Em quantos por cento aumenta {@1} do cubo? {@2}",
  "Všetkých trojíc je $\\binom{{@0}}{3}={@1}$. Opačný jav — vyberú sa len chlapci — má $\\binom{{@2}}{3}={@3}$ možností. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.": "Há $\\binom{{@0}}{3}={@1}$ trios ao todo. O evento complementar, de que sejam escolhidos só meninos, tem $\\binom{{@2}}{3}={@3}$ possibilidades. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.",
  "Všetkých výberov dvoch gúľ je $\\binom{{@0}}{2}={@1}$. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.": "Há $\\binom{{@0}}{2}={@1}$ escolhas de duas bolas ao todo. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.",
  "Všetkých výsledkov je $6\\cdot 6=36$. {@0} $P=\\frac{{@1}}{36}={@2}$.": "Há $6\\cdot 6=36$ resultados ao todo. {@0} $P=\\frac{{@1}}{36}={@2}$.",
  "Z $\\frac{n(n-3)}{2}={@0}$ je $n^2-3n-{@1}=0$ a kladný koreň $n={@2}$.": "De $\\frac{n(n-3)}{2}={@0}$ obtemos $n^2-3n-{@1}=0$, com raiz positiva $n={@2}$.",
  "Z Pytagorovej vety vypočítaj diferenciu $d$.": "Calcule a diferença $d$ pelo teorema de Pitágoras.",
  "Z Vietovho vzťahu $x_1x_2={@0}$ je $x_2=\\frac{{@1}}{{@2}}={@3}$. Zo vzťahu $x_1+x_2=-p$ je $p=-({@4}{@5})={@6}$. Kontrola dosadením: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓": "Pela relação de Girard $x_1x_2={@0}$ temos $x_2=\\frac{{@1}}{{@2}}={@3}$. Da relação $x_1+x_2=-p$ temos $p=-({@4}{@5})={@6}$. Verificação por substituição: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓",
  "Z jednej súradnice vypočítaj parameter $t$ a over, či rovnaké $t$ vyhovuje aj ostatným súradniciam.": "Calcule o parâmetro $t$ a partir de uma coordenada e verifique se o mesmo $t$ satisfaz também as outras coordenadas.",
  "Z lineárnej rovnice vyjadri $y$ a dosaď do druhej. Dostaneš kvadratickú rovnicu pre $x$.": "Da equação linear isole $y$ e substitua-o na outra. Você obtém uma equação do segundo grau em $x$.",
  "Z podmienky $D=0$ vyjadri $p^2$. Koľko je $p^2$?": "Da condição $D=0$ isole $p^2$. Quanto vale $p^2$?",
  "Z povrchu $S=4\\pi r^2$ vypočítaj polomer a dosaď ho do vzorca pre objem $V=\\frac{4}{3}\\pi r^3$.": "A partir da área $S=4\\pi r^2$ calcule o raio e substitua-o na fórmula do volume $V=\\frac{4}{3}\\pi r^3$.",
  "Z prvej rovnice $y={@0}$. Dosadíme: $x({@1})={@2} \\Rightarrow {@3}=0$, korene $x_1={@4}$, $x_2={@5}$. Riešenia sústavy sú $[{@6}; {@7}]$ a $[{@8}; {@9}]$, $x$ je teda ${@10}$ alebo ${@11}$.": "Da primeira equação, $y={@0}$. Substituímos: $x({@1})={@2} \\Rightarrow {@3}=0$, raízes $x_1={@4}$, $x_2={@5}$. As soluções do sistema são $[{@6}; {@7}]$ e $[{@8}; {@9}]$, então $x$ é ${@10}$ ou ${@11}$.",
  "Z rovnice $\\frac{n(n-1)}{2}={@0}$ vyjadri súčin $n(n-1)$. Koľko je?": "Da equação $\\frac{n(n-1)}{2}={@0}$ isole o produto $n(n-1)$. Quanto vale?",
  "Z rovnice $\\frac{n(n-3)}{2}={@0}$ vyjadri súčin $n(n-3)$. Koľko je?": "Da equação $\\frac{n(n-3)}{2}={@0}$ isole o produto $n(n-3)$. Quanto vale?",
  "Z rovnice ${@0}={@1}$ urči $x$-ové súradnice spoločných bodov.": "A partir da equação ${@0}={@1}$ determine as coordenadas $x$ dos pontos comuns.",
  "Z rovnice kružnice zisti stred a polomer, potom vypočítaj vzdialenosť stredu od priamky a porovnaj ju s polomerom.": "A partir da equação da circunferência descubra o centro e o raio; depois calcule a distância do centro à reta e compare com o raio.",
  "Z rovnice priamky vyjadri $y$, dosaď do rovnice kružnice a vyrieš kvadratickú rovnicu pre $x$.": "Da equação da reta isole $y$, substitua-o na equação da circunferência e resolva a equação do segundo grau em $x$.",
  "Z rovnice priamky vyjadríme $y={@0}$ a dosadíme do rovnice kružnice. Po úprave dostaneme ${@1}=0$ s koreňmi $x_1={@2}$, $x_2={@3}$. Priesečníky sú $[{@4}; {@5}]$ a $[{@6}; {@7}]$.": "Da equação da reta isolamos $y={@0}$ e substituímos na equação da circunferência. Simplificando, obtemos ${@1}=0$, com raízes $x_1={@2}$, $x_2={@3}$. Os pontos de interseção são $[{@4}; {@5}]$ e $[{@6}; {@7}]$.",
  "Z rovníc ${@0}^{x}=t$ urči všetky riešenia $x$ (pamätaj, že ${@1}^{x}&gt;0$).": "A partir das equações ${@0}^{x}=t$ determine todas as soluções $x$ (lembre-se de que ${@1}^{x}&gt;0$).",
  "Zabudol si deliť veľkosťou normálového vektora $|\\vec n|=\\sqrt{{@0}}$.": "Você esqueceu de dividir pelo módulo do vetor normal $|\\vec n|=\\sqrt{{@0}}$.",
  "Zabudol si na kombinačné číslo $\\binom{{@0}}{{@1}}$: úspešné pokusy môžu byť medzi všetkými pokusmi rozmiestnené rôznymi spôsobmi.": "Você esqueceu o número binomial $\\binom{{@0}}{{@1}}$: as tentativas com sucesso podem estar distribuídas de várias maneiras entre todas as tentativas.",
  "Zabudol si na člen $u'v$: derivuj aj lineárnu funkciu v zátvorke.": "Você esqueceu o termo $u'v$: derive também a função linear no parêntese.",
  "Zabudol si násobiť deriváciou vnútornej funkcie: $(\\sin kx)'=k\\cos kx$ a $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "Você esqueceu de multiplicar pela derivada da função interna: $(\\sin kx)'=k\\cos kx$ e $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Zabudol si umocniť menovateľ: vo vzorci pre deriváciu podielu je v menovateli $v^2$.": "Você esqueceu de elevar o denominador ao quadrado: na fórmula da derivada do quociente, no denominador está $v^2$.",
  "Zabudol si vynásobiť deriváciou vnútornej funkcie: $({@0})'={@1}$.": "Você esqueceu de multiplicar pela derivada da função interna: $({@0})'={@1}$.",
  "Zadaj všetky hodnoty $p$.": "Digite todos os valores de $p$.",
  "Zadaj všetky možné hodnoty $x$.": "Digite todos os valores possíveis de $x$.",
  "Zadaj všetky riešenia rovnice.": "Digite todas as soluções da equação.",
  "Započítal si aj „čísla“ začínajúce nulou. Na prvom mieste nula byť nemôže.": "Você contou também «números» que começam por zero. Na primeira posição não pode haver zero.",
  "Zapíš ${@0}^{x}$ ako $({@1}^{x})^2$ a zaveď substitúciu $t={@2}^{x}$. Nezabudni, že $t$ musí byť kladné.": "Escreva ${@0}^{x}$ como $({@1}^{x})^2$ e faça a substituição $t={@2}^{x}$. Não se esqueça de que $t$ deve ser positivo.",
  "Zapíš menovateľ ako $(\\sqrt{x})^2-a^2$ a rozlož ho podľa vzorca $A^2-B^2=(A-B)(A+B)$.": "Escreva o denominador como $(\\sqrt{x})^2-a^2$ e fatore-o pela fórmula $A^2-B^2=(A-B)(A+B)$.",
  "Zapíš podmienku cez opačný jav $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ a vyrieš ju logaritmovaním.": "Escreva a condição pelo evento complementar, $\\left(\\frac{5}{6}\\right)^n&lt;1-p$, e resolva aplicando logaritmos.",
  "Zapíš súčet prvých $n$ členov aritmetickej postupnosti a vyrieš nerovnicu $s_n\\ge$ požadovaný počet. Hľadáš najmenšie prirodzené $n$.": "Escreva a soma dos $n$ primeiros termos da progressão aritmética e resolva a inequação $s_n\\ge$ número pedido. Você procura o menor $n$ natural.",
  "Zaveď substitúciu $t={@0}$, vyrieš kvadratickú rovnicu a potom sa vráť k $x$ cez definíciu logaritmu.": "Faça a substituição $t={@0}$, resolva a equação do segundo grau e depois volte para $x$ pela definição de logaritmo.",
  "Zderivuj vonkajšiu mocninu (vnútro nechaj tak) a vynásob deriváciou vnútornej funkcie.": "Derive a potência externa (deixe a função interna como está) e multiplique pela derivada da função interna.",
  "Zisti znamienko $f'$ vľavo a vpravo od bodu.": "Descubra o sinal de $f'$ à esquerda e à direita do ponto.",
  "Zisti znamienko menovateľa pre $x$ tesne vpravo alebo vľavo od daného bodu a skombinuj ho so znamienkom čitateľa.": "Descubra o sinal do denominador para $x$ logo à direita ou à esquerda do ponto dado e combine-o com o sinal do numerador.",
  "Zisti, ktoré body kocky v rovinách ležia. Tri body môžu určovať tú istú rovinu, aj keď sú to iné vrcholy.": "Descubra quais pontos do cubo estão nos planos. Três pontos podem determinar o mesmo plano mesmo sendo vértices diferentes.",
  "Zistil si len exponent ${@0}$. Z neho ešte vyjadri $x$.": "Você só descobriu o expoente ${@0}$. A partir dele isole ainda $x$.",
  "Zlogaritmuj obe strany a vyjadri $x$. {@0}": "Aplique logaritmos aos dois membros e isole $x$. {@0}",
  "Zložené úročenie: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Stav na účte tvorí geometrickú postupnosť s kvocientom ${@6}$.": "Juros compostos: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. O saldo da conta forma uma progressão geométrica de razão ${@6}$.",
  "Zo štvorcového kartónu so stranou ${@0}\\,\\text{cm}$ odstrihneme v rohoch zhodné štvorce a zvyšok zahneme na otvorenú krabicu. {@1}": "De um papelão quadrado de lado ${@0}\\,\\text{cm}$ recortamos nos cantos quadrados iguais e dobramos o resto, formando uma caixa aberta. {@1}",
  "Zostane podiel vedúcich koeficientov: $\\frac{{@0}}{{@1}}{@2}$.": "Sobra o quociente dos coeficientes dominantes: $\\frac{{@0}}{{@1}}{@2}$.",
  "Zostav nerovnicu $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ a vyrieš ju logaritmovaním. Výsledok zaokrúhli nahor.": "Monte a inequação $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ e resolva-a aplicando logaritmos. Arredonde o resultado para cima.",
  "Zostav rovnicu roviny (normálový vektor je kolmý na dva vektory v rovine) a použi vzorec pre vzdialenosť bodu od roviny.": "Monte a equação do plano (o vetor normal é perpendicular a dois vetores do plano) e use a fórmula da distância de um ponto a um plano.",
  "Zrezaný kužeľ": "Tronco de cone",
  "Zrezaný rotačný kužeľ má polomery podstáv $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho {@3}. {@4}": "Um tronco de cone circular reto tem raios das bases $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ e altura $v={@2}\\,\\text{cm}$. Calcule {@3}. {@4}",
  "Zvislá asymptota je v nulovom bode menovateľa. Vodorovnú asymptotu dá limita pre $x\\to\\infty$: podiel koeficientov pri $x$.": "A assíntota vertical está no zero do denominador. A assíntota horizontal é dada pelo limite para $x\\to\\infty$: o quociente dos coeficientes de $x$.",
  "Zvislá asymptota je v nulovom bode menovateľa: rieš rovnicu ${@0}=0$. Pozor na znamienko.": "A assíntota vertical está no zero do denominador: resolva a equação ${@0}=0$. Cuidado com o sinal.",
  "Zvolíme $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.": "Escolhemos $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.",
  "Zvolíme kocku s hranou $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ a body $E, F, G, H$ nad nimi so súradnicou $z=1$.": "Escolhemos um cubo de aresta $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ e os pontos $E, F, G, H$ acima deles com coordenada $z=1$.",
  "Základ a": "Base a",
  "Záleží na tom, kto má akú funkciu, ide o variácie 3. triedy z {@0} prvkov: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.": "Importa quem tem qual cargo: trata-se de arranjos de {@0} elementos tomados 3 a 3, $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.",
  "Zámenou $x$ za $-x$ sa sčítance len vymenia: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.": "Ao trocar $x$ por $-x$, as parcelas apenas trocam de lugar: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.",
  "ani sa cifry nesmú opakovať": "e os algarismos não podem se repetir",
  "aspoň jeden reálny koreň": "pelo menos uma raiz real",
  "aspoň jedna guľa je biela": "pelo menos uma bola seja branca",
  "auto": "carro",
  "bicykel": "bicicleta",
  "biele": "brancas",
  "bielych": "brancas",
  "deliteľných piatimi": "divisíveis por cinco",
  "dievčat": "meninas",
  "dievčatá": "meninas",
  "do známky {@0} je to {@1}": "até a nota {@0} são {@1}",
  "dotyčnica (jeden spoločný bod)": "tangente (um ponto comum)",
  "druh dopravy do práce": "meio de transporte para o trabalho",
  "druhú": "ao quadrado",
  "dva rôzne reálne korene": "duas raízes reais distintas",
  "dĺžku prepony v cm": "o comprimento da hipotenusa em cm",
  "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">pre h → 0 sa hodnota blíži k 1</span>": "f(−h) = f(h) = sen h / h = {@0} · <span class=\"c-accent\">para h → 0 o valor se aproxima de 1</span>",
  "farba očí žiaka": "cor dos olhos de um aluno",
  "f′ &lt; 0, funkcia klesá": "f′ &lt; 0, a função decresce",
  "hmotnosť balíka": "peso de um pacote",
  "jeden chlapec": "um menino",
  "jedna guľa je biela a jedna čierna": "uma bola seja branca e a outra preta",
  "jeho objem v $\\text{cm}^3$": "o seu volume em $\\text{cm}^3$",
  "jeho obsah v $\\text{cm}^2$": "a sua área em $\\text{cm}^2$",
  "jeho povrch v $\\text{cm}^2$": "a área da sua superfície em $\\text{cm}^2$",
  "k; q": "k; q",
  "končiace cifrou {@0}: {@1}": "terminados no algarismo {@0}: {@1}",
  "krajina, z ktorej prišiel turista": "país de onde veio um turista",
  "kvalitatívny": "qualitativa",
  "kvantitatívny diskrétny": "quantitativa discreta",
  "kvantitatívny spojitý": "quantitativa contínua",
  "leží v rovine": "está no plano",
  "lokálne maximum": "máximo local",
  "lokálne minimum": "mínimo local",
  "max": "máx",
  "medián": "a mediana",
  "mimobežné": "reversas",
  "možností": "possibilidades",
  "má sústava nekonečne veľa riešení": "o sistema tem infinitas soluções",
  "mínus": "menos",
  "môžu opakovať": "podem se repetir",
  "neleží v rovine": "não está no plano",
  "nepárne, medián je {@0}. hodnota": "ímpar, a mediana é o {@0}º valor",
  "nepárnych": "ímpares",
  "nesečnica (žiadny spoločný bod)": "exterior (nenhum ponto comum)",
  "nesmú opakovať": "não podem se repetir",
  "obe gule sú biele": "as duas bolas sejam brancas",
  "objem": "o volume",
  "objem hranola v $\\text{cm}^3$": "o volume do prisma em $\\text{cm}^3$",
  "objem mení $k^3$-krát": "o volume muda $k^3$ vezes",
  "objem v $\\text{cm}^3$": "o volume em $\\text{cm}^3$",
  "obsah jeho plášťa v $\\text{cm}^2$": "a área da sua superfície lateral em $\\text{cm}^2$",
  "obsah plášťa": "a área da superfície lateral",
  "obsah rezu v $\\text{cm}^2$. {@0}": "a área da seção em $\\text{cm}^2$. {@0}",
  "obľúbený šport": "esporte favorito",
  "opäť ľubovoľnú": "de novo qualquer um",
  "p; x₂": "p; x₂",
  "pešo": "a pé",
  "plus": "mais",
  "polomer rezu v cm.": "o raio da seção em cm.",
  "povrch": "a área da superfície",
  "povrch hranola v $\\text{cm}^2$": "a área da superfície do prisma em $\\text{cm}^2$",
  "povrch mení $k^2$-krát": "a área da superfície muda $k^2$ vezes",
  "povrch v $\\text{cm}^2$": "a área da superfície em $\\text{cm}^2$",
  "počet": "número",
  "počet gólov v zápase": "número de gols numa partida",
  "počet strán knihy": "número de páginas de um livro",
  "počet súrodencov": "número de irmãos",
  "počet vymeškaných hodín za polrok": "número de horas de falta num semestre",
  "počet áut v domácnosti": "número de carros numa casa",
  "pre $t={@0}$ niektorá z nich neplatí, bod na priamke <strong>neleží</strong>.": "para $t={@0}$ alguma delas não vale: o ponto <strong>não está</strong> na reta.",
  "pre $t={@0}$ obe platia, bod na priamke <strong>leží</strong>.": "para $t={@0}$ as duas valem: o ponto <strong>está</strong> na reta.",
  "priamka je s rovinou rovnobežná a nemá s ňou spoločný bod": "a reta é paralela ao plano e não tem nenhum ponto comum com ele",
  "priamka je s rovinou rôznobežná (pretína ju v jednom bode)": "a reta é concorrente ao plano (corta-o num ponto)",
  "priamka leží v rovine": "a reta está no plano",
  "práve jeden (dvojnásobný) koreň": "exatamente uma raiz (dupla)",
  "párne, medián je priemer {@0}. a {@1}. hodnoty": "par, a mediana é a média do {@0}º e do {@1}º valor",
  "párnych": "pares",
  "roviny sú rovnobežné rôzne": "os planos são paralelos distintos",
  "roviny sú rôznobežné (pretínajú sa v priamke)": "os planos são concorrentes (cortam-se numa reta)",
  "roviny sú totožné": "os planos são coincidentes",
  "rovnobežné": "paralelas",
  "rozptyl": "a variância",
  "sedadiel": "lugares",
  "sedadlo": "lugar",
  "sedadlá": "lugares",
  "sečnica (2 spoločné body)": "secante (2 pontos comuns)",
  "sečnica (dva spoločné body)": "secante (dois pontos comuns)",
  "smerodajnú odchýlku": "o desvio padrão",
  "spotreba auta na 100 km": "consumo de um carro por 100 km",
  "stenovú výšku $v_s$ v cm": "o apótema $v_s$ em cm",
  "strojnásobí": "triplica",
  "sústava nemá riešenie": "o sistema não tem solução",
  "súčet je aspoň {@0}": "a soma seja pelo menos {@0}",
  "súčet je {@0}": "a soma seja {@0}",
  "súčin je párny": "o produto seja par",
  "teplota vzduchu na poludnie": "temperatura do ar ao meio-dia",
  "terč nezasiahne ani jeden z nich": "nenhum deles acerte o alvo",
  "terč zasiahne aspoň jeden z nich": "pelo menos um deles acerte o alvo",
  "terč zasiahne práve jeden z nich": "exatamente um deles acerte o alvo",
  "tretiu": "ao cubo",
  "v rovine leží, takže v nej leží celá priamka": "está no plano, então a reta inteira está nele",
  "v rovine neleží, preto nemajú spoločný bod": "não está no plano, por isso não têm nenhum ponto comum",
  "variačné rozpätie": "a amplitude",
  "vlak": "trem",
  "vpravo": "à direita",
  "výrobkov": "produtos",
  "výrobky": "produtos",
  "výška žiaka": "altura de um aluno",
  "vľavo": "à esquerda",
  "vždy niektorú zo zvyšných": "sempre um dos restantes",
  "x; y": "x; y",
  "x; y; z": "x; y; z",
  "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · vzdialenosť stredu d = {@3} · r = 3 → {@4}": "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · distância do centro d = {@3} · r = 3 → {@4}",
  "x₀ = {@0} · f′(x₀) = {@1} · {@2}": "x₀ = {@0} · f′(x₀) = {@1} · {@2}",
  "x₁; x₂": "x₁; x₂",
  "zdvojnásobí": "dobra",
  "značka mobilného telefónu": "marca de celular",
  "známka": "nota",
  "znížil": "caiu",
  "zvýšil": "subiu",
  "{@0} Bod $K$ je stred hrany ${@1}$. Vypočítaj vzdialenosť bodov ${@2}$ a $K$ v cm. {@3}": "{@0} O ponto $K$ é o ponto médio da aresta ${@1}$. Calcule a distância entre os pontos ${@2}$ e $K$ em cm. {@3}",
  "{@0} Funkcia je <strong>{@1}</strong>.": "{@0} A função é <strong>{@1}</strong>.",
  "{@0} Normálové vektory sú ${@1}$ a ${@2}$. {@3}": "{@0} Os vetores normais são ${@1}$ e ${@2}$. {@3}",
  "{@0} Normálový vektor roviny ${@1}$ je $\\vec{n}={@2}$ (kolmý na $\\vec{{@3}{@4}}$ aj $\\vec{{@5}{@6}}$), smerový vektor priamky $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}": "{@0} O vetor normal do plano ${@1}$ é $\\vec{n}={@2}$ (perpendicular a $\\vec{{@3}{@4}}$ e a $\\vec{{@5}{@6}}$), e o vetor diretor da reta é $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}",
  "{@0} Potom ${@1}{@2}$ a $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.": "{@0} Então ${@1}{@2}$ e $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.",
  "{@0} Rovina ${@1}$ má normálový vektor $\\vec{n}={@2}$ a rovnicu ${@3}=0$. Pre ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.": "{@0} O plano ${@1}$ tem vetor normal $\\vec{n}={@2}$ e equação ${@3}=0$. Para ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.",
  "{@0} Smerový vektor priamky $\\vec{u}=\\vec{{@1}}={@2}$, vektor $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.": "{@0} Vetor diretor da reta $\\vec{u}=\\vec{{@1}}={@2}$, vetor $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.",
  "{@0} Správne je ${@1}$, $k\\in\\mathbb{Z}$.": "{@0} O correto é ${@1}$, $k\\in\\mathbb{Z}$.",
  "{@0} Substitúcia $t={@1} x$: ${@2}=0$, korene $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Spolu $K=\\{{@7}\\}$.": "{@0} Substituição $t={@1} x$: ${@2}=0$, raízes $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Ao todo, $K=\\{{@7}\\}$.",
  "{@0} Vypočítaj $P(X={@1})$. {@2}": "{@0} Calcule $P(X={@1})$. {@2}",
  "{@0} Vypočítaj $P(X\\ge 1)$. {@1}": "{@0} Calcule $P(X\\ge 1)$. {@1}",
  "{@0} Vypočítaj pravdepodobnosť, že $X\\le 1$. {@1}": "{@0} Calcule a probabilidade de que $X\\le 1$. {@1}",
  "{@0} Vypočítaj strednú hodnotu $E(X)$ a rozptyl $D(X)$. Zadaj ich v tomto poradí oddelené bodkočiarkou (ako zlomky alebo desatinné čísla zaokrúhlené aspoň na 2 miesta).": "{@0} Calcule a esperança $E(X)$ e a variância $D(X)$. Digite-as nessa ordem separadas por ponto e vírgula (como frações ou números decimais arredondados para pelo menos 2 casas decimais).",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od priamky ${@2}$ v cm. {@3}": "{@0} Calcule a distância do vértice ${@1}$ à reta ${@2}$ em cm. {@3}",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od roviny ${@2}$ v cm. {@3}": "{@0} Calcule a distância do vértice ${@1}$ ao plano ${@2}$ em cm. {@3}",
  "{@0} Výsledok zaokrúhli na desatiny.": "{@0} Arredonde o resultado aos décimos.",
  "{@0} Znak je <strong>{@1}</strong>.": "{@0} A variável é <strong>{@1}</strong>.",
  "{@0} chlapci": "{@0} meninos",
  "{@0} dievčatá": "{@0} meninas",
  "{@0} usporiadaného súboru. Aký je medián?": "{@0} do conjunto ordenado. Qual é a mediana?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Aký je medián známok?": "{@0} mostra as notas de uma prova na turma:{@1}Qual é a mediana das notas?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Vypočítaj priemernú známku. {@2}": "{@0} mostra as notas de uma prova na turma:{@1}Calcule a nota média. {@2}",
  "{@0} {@1}": "{@0} {@1}",
  "{@0}Zaveď $t={@1} x$, vyrieš kvadratickú rovnicu a ponechaj len korene z intervalu $\\langle -1; 1\\rangle$.": "{@0}Faça $t={@1} x$, resolva a equação do segundo grau e fique só com as raízes do intervalo $\\langle -1; 1\\rangle$.",
  "Údaje najprv usporiadaj podľa veľkosti. Pri párnom počte je medián priemerom dvoch prostredných hodnôt.": "Primeiro ordene os dados por tamanho. Com um número par de dados, a mediana é a média dos dois valores centrais.",
  "Útvar ohraničený parabolou a priamkou": "Figura limitada por uma parábola e uma reta",
  "Čitateľ ${@0}$ rozlož na súčin ${@1}\\cdot(x+c)$. Aké je číslo $c$?": "Fatore o numerador ${@0}$ como produto ${@1}\\cdot(x+c)$. Qual é o número $c$?",
  "Čitateľ derivácie ${@0}({@1})-({@2})\\cdot {@3}$ je po úprave konštanta. Aká?": "O numerador da derivada ${@0}({@1})-({@2})\\cdot {@3}$ é, depois de simplificar, uma constante. Qual?",
  "Čitateľ je nenulová konštanta a menovateľ sa blíži k nule, takže zlomok v absolútnej hodnote rastie nad všetky medze.": "O numerador é uma constante diferente de zero e o denominador tende a zero, então a fração cresce sem limite em valor absoluto.",
  "Čitateľ má nižší stupeň než menovateľ, v čitateli preto zostane len nula a limita je $0$.": "O numerador tem grau menor que o denominador; por isso no numerador sobra só zero e o limite é $0$.",
  "Čitateľ zmení znamienko, menovateľ nie: $f(-x)=-f(x)$.": "O numerador muda de sinal e o denominador não: $f(-x)=-f(x)$.",
  "Čitateľa aj menovateľa vydelíme najvyššou mocninou menovateľa, teda ${@0}$. Všetky členy tvaru $\\frac{c}{x^k}$ sa blížia k nule. {@1}": "Dividimos o numerador e o denominador pela maior potência do denominador, ou seja, por ${@0}$. Todos os termos da forma $\\frac{c}{x^k}$ tendem a zero. {@1}",
  "Člen $uv'$ je $({@0})\\cdot\\frac{1}{x}$. Koľko je teda $f'(1)$?": "O termo $uv'$ é $({@0})\\cdot\\frac{1}{x}$. Quanto vale então $f'(1)$?",
  "Číslo $f({@0})$ nie je absolútny člen $q$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a roznásob zátvorku.": "O número $f({@0})$ não é o termo independente $q$. Substitua em $y=f(x_0)+f'(x_0)(x-x_0)$ e desenvolva o parêntese.",
  "Číslo z vodorovnej asymptoty $y=\\dots$ (limita pre $x\\to\\infty$)?": "Qual é o número da assíntota horizontal $y=\\dots$ (limite para $x\\to\\infty$)?",
  "Číslo zo zvislej asymptoty $x=\\dots$ (nulový bod menovateľa)?": "Qual é o número da assíntota vertical $x=\\dots$ (zero do denominador)?",
  "čas behu na 100 m": "tempo na corrida de 100 m",
  "čierne": "pretas",
  "čiernych": "pretas",
  "ľubovoľnú cifru": "qualquer algarismo",
  "ľubovoľnú cifru okrem nuly": "qualquer algarismo exceto o zero",
  "Žiaci odpovedali, ako chodia do školy:{@0}{@1} Výsledok zaokrúhli na desatiny.": "Os alunos responderam como vão à escola:{@0}{@1} Arredonde o resultado aos décimos.",
  "Žiadny z nich neleží vo vnútri intervalu.": "Nenhum deles está no interior do intervalo.",
  "Žiak v teste s {@0} otázkami náhodne tipuje; každá otázka má štyri možnosti a práve jedna je správna. Náhodná premenná $X$ je počet správnych odpovedí.": "Um aluno responde ao acaso a um teste de {@0} questões; cada questão tem quatro opções e exatamente uma é correta. A variável aleatória $X$ é o número de respostas corretas.",
  "žiadny reálny koreň": "nenhuma raiz real",
  "„Najviac jeden“ zahŕňa aj možnosť, že nenastane žiadny úspech. Pripočítaj $P(X=0)$.": "«No máximo um» inclui também a possibilidade de nenhum sucesso. Some $P(X=0)$.",
  "„Najviac jeden“ znamená 0 alebo 1 úspech. Sčítaj tieto dve pravdepodobnosti.": "«No máximo um» significa 0 ou 1 sucesso. Some essas duas probabilidades."
 }
});
