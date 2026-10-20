/* Português: preklad js/content.js, js/exercises.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/content/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "cisla": {
   "title": "Expressões numéricas e ordem das operações",
   "summary": "Números, parênteses e a ordem correta dos cálculos.",
   "theory": [
    "<p>Os números naturais são $1, 2, 3, 4, \\dots$. Indicamos seu conjunto por $\\mathbb{N}$. Se acrescentarmos o zero, obtemos os inteiros não negativos; acrescentando os números negativos, surge o conjunto dos números inteiros $\\mathbb{Z}$.</p>",
    {
     "fig": "numberline",
     "caption": "Reta numérica: os pontos azuis são números naturais; à esquerda do zero ficam os inteiros negativos."
    },
    "<p><strong>Ordem das operações:</strong></p>\n       <ol><li>expressões entre parênteses,</li><li>potências e raízes,</li>\n       <li>multiplicação e divisão, da esquerda para a direita,</li><li>adição e subtração, da esquerda para a direita.</li></ol>"
   ],
   "examples": [
    {
     "task": "Calcule $2 + 3\\cdot 4 - 6 : 2$.",
     "steps": [
      "Primeiro a multiplicação e a divisão: $3\\cdot 4 = 12$, $6 : 2 = 3$.",
      "A expressão fica $2 + 12 - 3$.",
      "Da esquerda para a direita: $2 + 12 = 14$, depois $14 - 3 = 11$.",
      "<strong>Resultado: 11</strong>"
     ]
    }
   ]
  },
  "zlomky": {
   "title": "Frações e operações com frações",
   "summary": "Simplificação, ampliação e cálculos com frações.",
   "theory": [
    "<p>A fração $\\frac{a}{b}$ tem numerador $a$ e denominador $b \\neq 0$. O valor da fração não muda se multiplicarmos o numerador e o denominador pelo mesmo número diferente de zero (<strong>frações equivalentes</strong>). O processo inverso é a <strong>simplificação</strong>.</p>",
    {
     "fig": "fractions",
     "caption": "Obter uma fração equivalente não muda o valor: $\\frac{1}{2}=\\frac{3}{6}$ e $\\frac{2}{3}=\\frac{4}{6}$ têm partes coloridas de mesmo comprimento."
    },
    "<p>A <strong>adição e a subtração</strong> exigem um denominador comum: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.</p>",
    "<p><strong>Multiplicação</strong>: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$. Na <strong>divisão</strong>, multiplicamos pelo inverso: $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $\\frac{1}{2}+\\frac{2}{3}$.",
     "steps": [
      "O denominador comum é $2\\cdot 3 = 6$.",
      "$\\frac{1}{2}=\\frac{3}{6}$ e $\\frac{2}{3}=\\frac{4}{6}$.",
      "$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$.",
      "<strong>Resultado: $\\frac{7}{6}=1\\frac{1}{6}$</strong>"
     ]
    }
   ]
  },
  "percenta": {
   "title": "Porcentagem",
   "summary": "Cálculo de porcentagens, aumentos e descontos percentuais.",
   "theory": [
    "<p>$p\\,\\%$ significa $\\frac{p}{100}$. A porcentagem de um número $x$ é $\\frac{p}{100}\\cdot x$.</p>",
    {
     "fig": "percent",
     "caption": "O todo tem 100 partes. $25\\,\\%$ significa 25 delas."
    },
    "<p>Um <strong>aumento</strong> de $p\\,\\%$ é a multiplicação por $1+\\frac{p}{100}$; um <strong>desconto</strong>, a multiplicação por $1-\\frac{p}{100}$.</p>",
    "<p>O número decimal $0{,}25$ é a fração $\\frac{1}{4}$ e também $25\\,\\%$. Em português, a parte decimal é separada por vírgula.</p>"
   ],
   "examples": [
    {
     "task": "Um produto custa $80\\,€$. Quanto custa após um aumento de $15\\,\\%$?",
     "steps": [
      "O fator multiplicador é $1+\\frac{15}{100}=1{,}15$.",
      "$80\\cdot 1{,}15 = 92$.",
      "<strong>Resultado: 92 €</strong>"
     ]
    }
   ]
  },
  "mnoziny": {
   "title": "Conjuntos e operações com conjuntos",
   "summary": "Elementos, união, interseção, diferença e número de elementos.",
   "theory": [
    "<p>Um conjunto é uma coleção de elementos distintos entre si. A notação $a\\in A$ significa que o elemento $a$ pertence ao conjunto $A$. O conjunto vazio é $\\varnothing$.</p>",
    "<p>Operações: <strong>união</strong> $A\\cup B$ (elementos de pelo menos um dos conjuntos), <strong>interseção</strong> $A\\cap B$ (elementos dos dois conjuntos), <strong>diferença</strong> $A\\setminus B$ (elementos de $A$ que não estão em $B$).</p>",
    {
     "fig": "venn",
     "caption": "Diagrama de Venn para $A=\\{1,2,3,4\\}$ e $B=\\{3,4,5\\}$. A interseção fica na sobreposição dos círculos."
    },
    "<p>Indicamos o número de elementos por $|A|$. Vale $|A\\cup B| = |A|+|B|-|A\\cap B|$: os elementos da interseção foram contados duas vezes, por isso os subtraímos.</p>"
   ],
   "examples": [
    {
     "task": "Dados $A=\\{1,2,3,4\\}$ e $B=\\{3,4,5\\}$. Determine $A\\cup B$, $A\\cap B$ e $A\\setminus B$.",
     "steps": [
      "$A\\cup B=\\{1,2,3,4,5\\}$",
      "$A\\cap B=\\{3,4\\}$",
      "$A\\setminus B=\\{1,2\\}$"
     ]
    }
   ]
  },
  "obsah": {
   "title": "Perímetro e área de figuras planas",
   "summary": "Perímetro e área do retângulo, do triângulo e do círculo.",
   "theory": [
    "<p>Um retângulo de lados $a$ e $b$ tem perímetro $o=2(a+b)$ e área $S=a\\cdot b$.</p>",
    "<p>Um triângulo de base $z$ e altura $v$ relativa a essa base tem área $S=\\frac{z\\cdot v}{2}$.</p>",
    "<p>Um círculo de raio $r$ tem perímetro (comprimento da circunferência) $o=2\\pi r$ e área $S=\\pi r^2$, em que $\\pi\\approx 3{,}14159$.</p>",
    {
     "fig": "shapes",
     "caption": "Lados $a$, $b$ do retângulo, base $z$ e altura $v$ do triângulo, raio $r$ do círculo."
    }
   ],
   "examples": [
    {
     "task": "Um círculo tem raio $r=3\\,\\text{cm}$. Calcule sua área.",
     "steps": [
      "$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$.",
      "$9\\pi\\approx 28{,}27\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "pytagoras": {
   "title": "Teorema de Pitágoras",
   "summary": "Cálculo dos lados de um triângulo retângulo.",
   "theory": [
    "<p>Em um triângulo retângulo de catetos $a$, $b$ e hipotenusa $c$ vale $a^2+b^2=c^2$. A hipotenusa fica oposta ao ângulo reto e é sempre o maior lado.</p>",
    {
     "fig": "pythagoras",
     "caption": "Triângulo de lados $3, 4, 5$: as áreas dos quadrados sobre os catetos, $9+16$, somam a área do quadrado sobre a hipotenusa, $25$."
    },
    "<p>Ternos pitagóricos conhecidos: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ e seus múltiplos.</p>"
   ],
   "examples": [
    {
     "task": "Os catetos medem $6$ e $8$. Qual é o comprimento da hipotenusa?",
     "steps": [
      "$c^2=6^2+8^2=36+64=100$.",
      "$c=\\sqrt{100}=10$."
     ]
    }
   ]
  },
  "linearne": {
   "title": "Equações do 1º grau",
   "summary": "Transformações equivalentes e equações de primeiro grau.",
   "theory": [
    "<p>Resolvemos equações por meio de <strong>transformações equivalentes</strong>: somamos ou subtraímos o mesmo número dos dois membros, multiplicamos ou dividimos os dois membros por um número diferente de zero.</p>",
    "<p>A equação $ax+b=c$ com $a\\neq 0$ se resolve assim: $ax=c-b$, ou seja, $x=\\frac{c-b}{a}$.</p>",
    "<p>Fazemos a verificação substituindo o resultado na equação original.</p>"
   ],
   "examples": [
    {
     "task": "Resolva $3x+5=20$.",
     "steps": [
      "Subtraímos $5$: $3x=15$.",
      "Dividimos por $3$: $x=5$.",
      "Verificação: $3\\cdot 5+5=20$ ✓"
     ]
    }
   ]
  },
  "kvadraticke": {
   "title": "Equações do 2º grau",
   "summary": "Discriminante, fórmula de Bhaskara e relações de Girard (soma e produto).",
   "theory": [
    "<p>A equação do 2º grau $ax^2+bx+c=0$ ($a\\neq 0$) tem raízes $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$, em que $D=b^2-4ac$ é o <strong>discriminante</strong>.</p>",
    "<p>Se $D&gt;0$, a equação tem duas raízes reais distintas. Se $D=0$, tem uma raiz dupla. Se $D&lt;0$, não tem raízes reais.</p>",
    {
     "fig": "parabola",
     "caption": "Gráfico de $y=x^2+px+q$ (ou seja, $b=p$, $c=q$). As raízes são os pontos de interseção da parábola com o eixo $x$. Altere $p$ e $q$ e observe o discriminante."
    },
    "<p><strong>Relações de Girard</strong> (para $a=1$): $x_1+x_2=-b$ e $x_1\\cdot x_2=c$.</p>"
   ],
   "examples": [
    {
     "task": "Resolva $x^2-5x+6=0$.",
     "steps": [
      "$a=1$, $b=-5$, $c=6$, $D=25-24=1$.",
      "$x_{1,2}=\\frac{5\\pm 1}{2}$, ou seja, $x_1=3$, $x_2=2$.",
      "Verificação: $3+2=5$ e $3\\cdot 2=6$ ✓"
     ]
    }
   ]
  },
  "mocniny": {
   "title": "Potências e raízes",
   "summary": "Regras para calcular com potências e raízes.",
   "theory": [
    "<p>Para $a&gt;0$ e $m,n$ inteiros, vale: $a^m\\cdot a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{m\\cdot n}$.</p>",
    "<p>Expoente negativo: $a^{-n}=\\frac{1}{a^n}$. Expoente zero: $a^0=1$ para $a\\neq 0$.</p>",
    "<p>A radiciação é a operação inversa da potenciação: $\\sqrt{a}=a^{1/2}$, $\\sqrt[n]{a}=a^{1/n}$. Vale $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$.</p>"
   ],
   "examples": [
    {
     "task": "Simplifique $\\frac{2^5\\cdot 2^{-2}}{2}$.",
     "steps": [
      "Numerador: $2^5\\cdot 2^{-2}=2^{3}$.",
      "$\\frac{2^3}{2}=2^{2}$.",
      "<strong>Resultado: $4$</strong>"
     ]
    }
   ]
  },
  "goniometria": {
   "title": "Razões trigonométricas no triângulo retângulo",
   "summary": "Seno, cosseno e tangente no triângulo retângulo.",
   "theory": [
    "<p>Em um triângulo retângulo com ângulo agudo $\\alpha$: $\\sin\\alpha=\\frac{\\text{cateto oposto}}{\\text{hipotenusa}}$, $\\cos\\alpha=\\frac{\\text{cateto adjacente}}{\\text{hipotenusa}}$, $\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$.</p>",
    {
     "fig": "trigtriangle",
     "caption": "Nomes dos lados do triângulo retângulo em relação ao ângulo $\\alpha$."
    },
    "<p>Relação fundamental: $\\sin^2\\alpha+\\cos^2\\alpha=1$.</p>",
    {
     "fig": "unitcircle",
     "caption": "Circunferência trigonométrica: um ponto sobre ela tem coordenadas $(\\cos\\alpha, \\sin\\alpha)$. Mova o ângulo e observe como os sinais mudam."
    },
    "<p>Valores para os ângulos notáveis:</p>\n       <table class=\"tbl\">\n         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>\n         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>\n         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>\n       </table>"
   ],
   "examples": [
    {
     "task": "Se $\\sin\\alpha=0{,}6$ e $\\alpha$ é um ângulo agudo, calcule $\\cos\\alpha$.",
     "steps": [
      "$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0{,}36=0{,}64$.",
      "$\\cos\\alpha=\\sqrt{0{,}64}=0{,}8$ (ângulo agudo, o cosseno é positivo)."
     ]
    }
   ]
  },
  "matice": {
   "title": "Determinante e matriz inversa 2×2",
   "summary": "Notação matricial, determinante 2×2 e matriz inversa.",
   "theory": [
    "<p>Uma matriz do tipo $m\\times n$ é uma tabela de números com $m$ linhas e $n$ colunas. O elemento da $i$-ésima linha e da $j$-ésima coluna é indicado por $a_{ij}$.</p>",
    "<p>O determinante da matriz $A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$ é $\\det A=ad-bc$. Se $\\det A\\neq 0$, existe a matriz inversa $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    {
     "fig": "parallelogram",
     "caption": "As colunas da matriz $\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ são os vetores $u=(2,1)$ e $v=(3,4)$. O valor absoluto do determinante é a área do paralelogramo que eles formam: $|\\det|=5$."
    },
    "<p>Um sistema de equações lineares pode ser escrito como $Ax=b$ e resolvido com a matriz inversa: $x=A^{-1}b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $\\det\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$.",
     "steps": [
      "$\\det = 2\\cdot 4-3\\cdot 1 = 8-3 = 5$."
     ]
    }
   ]
  },
  "sucin": {
   "title": "Produto de matrizes",
   "summary": "Como se multiplicam matrizes e por que a ordem importa.",
   "theory": [
    "<p>O produto $C=AB$ existe se o número de colunas de $A$ é igual ao número de linhas de $B$. O elemento da $i$-ésima linha e da $j$-ésima coluna é $c_{ij}=\\sum_k a_{ik}b_{kj}$: multiplicamos a linha da matriz $A$ pela coluna da matriz $B$ e somamos.</p>",
    {
     "fig": "matmul",
     "caption": "O elemento $c_{11}$ vem da 1ª linha de $A$ e da 1ª coluna de $B$: $1\\cdot 0+2\\cdot 1=2$."
    },
    "<p>A multiplicação de matrizes <strong>não é comutativa</strong>: em geral, $AB\\neq BA$.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$, $B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$. Calcule $AB$.",
     "steps": [
      "$c_{11}=1\\cdot 0+2\\cdot 1=2$, $c_{12}=1\\cdot 1+2\\cdot 0=1$.",
      "$c_{21}=3\\cdot 0+4\\cdot 1=4$, $c_{22}=3\\cdot 1+4\\cdot 0=3$.",
      "<strong>Resultado:</strong> $AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$"
     ]
    }
   ]
  },
  "derivacie": {
   "title": "Derivada de uma função",
   "summary": "Taxa de variação instantânea, regras de derivação e reta tangente.",
   "theory": [
    "<p>A derivada $f'(x_0)$ é o limite $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$, se existir. Geometricamente, é o coeficiente angular da reta tangente ao gráfico de $f$ no ponto $x_0$.</p>",
    {
     "fig": "tangent",
     "caption": "Gráfico de $f(x)=x^3-2x$ e a reta tangente no ponto $x_0$. Seu coeficiente angular é $f'(x_0)=3x_0^2-2$. Onde a tangente é horizontal, a derivada é zero."
    },
    "<p>Regras: $(x^n)'=n\\,x^{n-1}$, $(c)'=0$, $(c\\,f)'=c\\,f'$, $(f+g)'=f'+g'$, $(f\\cdot g)'=f'g+fg'$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$.</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-2x$. Calcule $f'(2)$.",
     "steps": [
      "$f'(x)=3x^2-2$.",
      "$f'(2)=3\\cdot 2^2-2=12-2=10$."
     ]
    }
   ]
  },
  "integraly": {
   "title": "Introdução ao cálculo integral",
   "summary": "Integral indefinida e definida, Teorema Fundamental do Cálculo (Newton-Leibniz).",
   "theory": [
    "<p>Uma primitiva $F$ da função $f$ satisfaz $F'(x)=f(x)$. Integral indefinida: $\\int f(x)\\,dx=F(x)+C$. Para $n\\neq -1$ vale $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$.</p>",
    "<p>Calculamos a integral definida pela <strong>fórmula de Newton-Leibniz</strong>: $\\int_a^b f(x)\\,dx=F(b)-F(a)$. Geometricamente, é a área da região sob o gráfico de $f$ de $a$ até $b$ (para $f$ positiva).</p>",
    {
     "fig": "area",
     "caption": "A área sob o gráfico de $f(x)=x^2$ de $0$ até $b$ é $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$."
    },
    "<p>Linearidade: $\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $\\int_0^2 3x^2\\,dx$.",
     "steps": [
      "Primitiva: $F(x)=x^3$.",
      "$F(2)-F(0)=8-0=8$.",
      "<strong>Resultado: 8</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A={@0}$, $B={@1}$. Aký prvok má súčin $AB$ v riadku {@2} a stĺpci {@3}?": "$A={@0}$, $B={@1}$. Qual é o elemento do produto $AB$ na linha {@2} e na coluna {@3}?",
  "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, teda $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.": "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, portanto $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.",
  "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).": "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — escreva o resultado como fração na forma $p/q$ (por ex., 5/6).",
  "$b^2=c^2-a^2={@0}-{@1}={@2}$, teda $b={@3}$.": "$b^2=c^2-a^2={@0}-{@1}={@2}$, portanto $b={@3}$.",
  "$c^2=a^2+b^2={@0}+{@1}={@2}$, teda $c={@3}$.": "$c^2=a^2+b^2={@0}+{@1}={@2}$, portanto $c={@3}$.",
  "$f'(x)={@0}x^{{@1}}{@2}$, teda $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.": "$f'(x)={@0}x^{{@1}}{@2}$, portanto $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.",
  "$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.": "$p\\,\\%$ do número $x$ é $\\frac{p}{100}\\cdot x$.",
  "${@0}\\,\\%=\\frac{{@1}}{100}$, teda $\\frac{{@2}}{100}\\cdot {@3}={@4}$.": "${@0}\\,\\%=\\frac{{@1}}{100}$, portanto $\\frac{{@2}}{100}\\cdot {@3}={@4}$.",
  "${@0}x={@1}{@2}={@3}$, teda $x={@4}$.": "${@0}x={@1}{@2}={@3}$, portanto $x={@4}$.",
  "25 štvorčekov zo 100": "25 quadradinhos de 100",
  "Aký exponent bude mať výsledok ${@0}^{\\square}$?": "Qual expoente terá o resultado ${@0}^{\\square}$?",
  "Aký je spoločný menovateľ (súčin menovateľov ${@0}\\cdot {@1}$)?": "Qual é o denominador comum (produto dos denominadores ${@0}\\cdot {@1}$)?",
  "Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?": "Qual é a soma das raízes $x_1 + x_2$ (pelas relações de Girard)?",
  "Aký je súčin koreňov $x_1 \\cdot x_2$?": "Qual é o produto das raízes $x_1 \\cdot x_2$?",
  "Derivácia je $f'(x)=k\\,x^{{@0}}{@1}$. Aký je koeficient $k$?": "A derivada é $f'(x)=k\\,x^{{@0}}{@1}$. Qual é o coeficiente $k$?",
  "Determinant ako obsah rovnobežníka": "O determinante como área de um paralelogramo",
  "Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.": "Você substituiu na função original $f$. Primeiro derive a função e só depois substitua.",
  "Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.": "Você substituiu na função original. Primeiro encontre a primitiva $F$ e substitua nela.",
  "Dosadil si len hornú hranicu. Od $F({@0})$ ešte odčítaj $F({@1})$.": "Você substituiu só o limite superior. De $F({@0})$ ainda é preciso subtrair $F({@1})$.",
  "Dosadil si priemer ${@0}$. Vo vzorci $\\pi r^2$ je polomer $r={@1}$.": "Você usou o diâmetro ${@0}$. Na fórmula $\\pi r^2$, o raio é $r={@1}$.",
  "Druhý súčin: koľko je ${@0}\\cdot {@1}$?": "Segundo produto: quanto é ${@0}\\cdot {@1}$?",
  "Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.": "Você só subtraiu os comprimentos. O teorema de Pitágoras vale para os quadrados: $b^2=c^2-a^2$.",
  "Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.": "Você somou os expoentes. Na potência de uma potência, os expoentes se multiplicam.",
  "Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.": "Você multiplicou os expoentes. Na multiplicação de potências de mesma base, os expoentes se somam.",
  "Graf funkcie s dotyčnicou": "Gráfico de uma função com a reta tangente",
  "Graf kvadratickej funkcie": "Gráfico de uma função quadrática",
  "Horná hranica b": "Limite superior b",
  "Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.": "Procure dois números cujo produto seja $q$ e cuja soma seja $-p$.",
  "Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.": "A identidade vale para os quadrados: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, e não $\\cos\\alpha = 1 - \\sin\\alpha$.",
  "Jednotková kružnica": "Circunferência unitária",
  "Koeficient {@0} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom {@1}.": "Você subtraiu o coeficiente {@0}. Junto ao $x$ há uma multiplicação, então divida os dois membros por {@1}.",
  "Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.": "As raízes ficaram duas vezes maiores. Na fórmula $x=\\frac{-p\\pm\\sqrt{D}}{2}$, não se esqueça de dividir por dois.",
  "Koľko je $1\\,\\%$ z čísla {@0}?": "Quanto é $1\\,\\%$ de {@0}?",
  "Koľko je $F({@0}) - F({@1})$?": "Quanto é $F({@0}) - F({@1})$?",
  "Koľko je $F({@0})$?": "Quanto é $F({@0})$?",
  "Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?": "Quanto é $\\cos\\alpha$ (ângulo agudo, raiz positiva) com 3 casas decimais?",
  "Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.": "Quanto é $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Escreva como fração.",
  "Koľko je $\\pi\\cdot {@0}$ (použi $\\pi\\approx 3{{@1}}14$)?": "Quanto é $\\pi\\cdot {@0}$ (use $\\pi\\approx 3{{@1}}14$)?",
  "Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).": "Quanto é $\\sin^2\\alpha$? Escreva como fração (por ex., 9/25).",
  "Koľko je $a^2 = {@0}^2$?": "Quanto é $a^2 = {@0}^2$?",
  "Koľko je $b = \\sqrt{{@0}}$?": "Quanto é $b = \\sqrt{{@0}}$?",
  "Koľko je $b^2 = {@0} - {@1}$?": "Quanto é $b^2 = {@0} - {@1}$?",
  "Koľko je $b^2 = {@0}^2$?": "Quanto é $b^2 = {@0}^2$?",
  "Koľko je $c = \\sqrt{{@0}}$?": "Quanto é $c = \\sqrt{{@0}}$?",
  "Koľko je $c^2 = {@0} + {@1}$?": "Quanto é $c^2 = {@0} + {@1}$?",
  "Koľko je $c^2 = {@0}^2$?": "Quanto é $c^2 = {@0}^2$?",
  "Koľko je $f'({@0})$?": "Quanto é $f'({@0})$?",
  "Koľko je $r^2 = {@0}^2$?": "Quanto é $r^2 = {@0}^2$?",
  "Koľko je $z\\cdot v = {@0}\\cdot {@1}$?": "Quanto é $z\\cdot v = {@0}\\cdot {@1}$?",
  "Koľko je ${@0} + {@1} - {@2}$?": "Quanto é ${@0} + {@1} - {@2}$?",
  "Koľko je ${@0} - ({@1})$?": "Quanto é ${@0} - ({@1})$?",
  "Koľko je ${@0} : {@1}$?": "Quanto é ${@0} : {@1}$?",
  "Koľko je ${@0}\\,\\%$ z čísla ${@1}$?": "Quanto é ${@0}\\,\\%$ de ${@1}$?",
  "Koľko je ${@0}\\cdot {@1}$?": "Quanto é ${@0}\\cdot {@1}$?",
  "Koľko je ${@0}^{{@1}}$?": "Quanto é ${@0}^{{@1}}$?",
  "Koľko je $|A| + |B|$?": "Quanto é $|A| + |B|$?",
  "Koľko je teda ${@0}\\,\\%$ z čísla {@1}?": "Então, quanto é ${@0}\\,\\%$ de {@1}?",
  "Kruh má polomer $r={@0}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{{@1}}14$).": "Um círculo tem raio $r={@0}$. Calcule sua área $S$ (use $\\pi\\approx 3{{@1}}14$).",
  "Ktoré dve čísla majú súčet {@0} a súčin {@1}? Zadaj ich oddelené bodkočiarkou.": "Quais dois números têm soma {@0} e produto {@1}? Escreva-os separados por ponto e vírgula.",
  "Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.": "Matrizes não se multiplicam elemento a elemento na mesma posição. Multiplique a linha da matriz $A$ pela coluna da matriz $B$ e some os produtos.",
  "Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.": "Você trocou o denominador pelo comum, mas não ampliou os numeradores. Multiplique o numerador pelo mesmo número que o denominador.",
  "Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?": "O conjunto $A$ tem ${@0}$ elementos, o conjunto $B$ tem ${@1}$ elementos e a interseção deles tem ${@2}$ elementos. Quantos elementos tem $A\\cup B$?",
  "Najprv násobenie a delenie: ${@0}\\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} + {@7} - {@8} = {@9}$.": "Primeiro multiplicação e divisão: ${@0}\\cdot {@1} = {@2}$ e ${@3} : {@4} = {@5}$. Depois ${@6} + {@7} - {@8} = {@9}$.",
  "Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.": "Primeiro subtraia a constante dos dois membros e depois divida pelo coeficiente de $x$.",
  "Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.": "Primeiro calcule as multiplicações e divisões, e só depois as adições e subtrações.",
  "Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.": "Você multiplicou os elementos das colunas. Multiplique pelas diagonais: $a\\cdot d$ e $b\\cdot c$.",
  "Obdĺžnik má strany $a={@0}$ a $b={@1}$. Aký je jeho obsah $S$?": "Um retângulo tem lados $a={@0}$ e $b={@1}$. Qual é sua área $S$?",
  "Obdĺžnik, trojuholník a kruh": "Retângulo, triângulo e círculo",
  "Obsah kruhu je $\\pi r^2$.": "A área do círculo é $\\pi r^2$.",
  "Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.": "A área do retângulo é o produto dos comprimentos de dois lados adjacentes.",
  "Obsah trojuholníka je polovica súčinu základne a výšky.": "A área do triângulo é metade do produto da base pela altura.",
  "Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.": "Você só somou os catetos. O teorema de Pitágoras vale para os quadrados: $c^2=a^2+b^2$.",
  "Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).": "O ângulo agudo $\\alpha$ satisfaz $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Calcule $\\cos\\alpha$ (com 3 casas decimais).",
  "Plocha pod grafom funkcie": "Área sob o gráfico de uma função",
  "Použi $(x^n)'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.": "Use $(x^n)'=n\\,x^{n-1}$ e derive cada termo separadamente.",
  "Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.": "Use $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ e depois o teorema fundamental do cálculo (Newton-Leibniz).",
  "Použi Pytagorovu vetu $c^2=a^2+b^2$.": "Use o teorema de Pitágoras $c^2=a^2+b^2$.",
  "Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.": "Use a identidade $\\sin^2\\alpha+\\cos^2\\alpha=1$.",
  "Pozri si tabuľku hodnôt v teórii.": "Veja a tabela de valores na teoria.",
  "Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.": "Você calculou da esquerda para a direita. A multiplicação e a divisão têm prioridade sobre a adição e a subtração.",
  "Pravouhlý trojuholník má odvesny $a={@0}$ a $b={@1}$. Aká je dĺžka prepony $c$?": "Um triângulo retângulo tem catetos $a={@0}$ e $b={@1}$. Qual é o comprimento da hipotenusa $c$?",
  "Pravouhlý trojuholník má preponu $c={@0}$ a odvesnu $a={@1}$. Aká je dĺžka druhej odvesny $b$?": "Um triângulo retângulo tem hipotenusa $c={@0}$ e cateto $a={@1}$. Qual é o comprimento do outro cateto $b$?",
  "Pravouhlý trojuholník s popisom strán": "Triângulo retângulo com os lados indicados",
  "Pre $2\\times 2$ matica je $\\det=ad-bc$.": "Para uma matriz $2\\times 2$, $\\det=ad-bc$.",
  "Pre funkciu $f(x)={@0}x^{{@1}}{@2}$ vypočítaj $f'({@3})$.": "Para a função $f(x)={@0}x^{{@1}}{@2}$, calcule $f'({@3})$.",
  "Prenes konštantu na pravú stranu. Koľko je ${@0}x$?": "Passe a constante para o membro direito. Quanto é ${@0}x$?",
  "Pri násobení mocnín rovnakého základu sa exponenty sčítajú.": "Na multiplicação de potências de mesma base, os expoentes se somam.",
  "Pri prenesení čísla {@0} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.": "Ao passar o número {@0} para o outro membro, você não trocou o sinal. Faça a mesma operação inversa nos dois membros.",
  "Pri umocňovaní mocniny sa exponenty násobia.": "Na potência de uma potência, os expoentes se multiplicam.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, teda $F({@3})-F({@4})={@5}$.": "A primitiva é $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, portanto $F({@3})-F({@4})={@5}$.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Koľko je $F({@3})$?": "A primitiva é $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Quanto é $F({@3})$?",
  "Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.": "Os elementos da interseção são contados duas vezes, por isso subtraia-os.",
  "Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.": "Você subtraiu duas vezes os elementos da interseção. Eles pertencem à união: subtraia-os só uma vez.",
  "Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.": "Você contou duas vezes os elementos da interseção: estão em $A$ e também em $B$. Subtraia-os uma vez.",
  "Prvky prieniku sú v tomto súčte dvakrát. Koľko je ${@0} - {@1}$?": "Os elementos da interseção aparecem duas vezes nesta soma. Quanto é ${@0} - {@1}$?",
  "Prvý súčin: koľko je ${@0}\\cdot {@1}$?": "Primeiro produto: quanto é ${@0}\\cdot {@1}$?",
  "Pytagorova veta: štvorce nad stranami": "Teorema de Pitágoras: quadrados sobre os lados",
  "Rozšír druhý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Amplie a segunda fração para o denominador {@0}. Qual será o numerador?",
  "Rozšír prvý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Amplie a primeira fração para o denominador {@0}. Qual será o numerador?",
  "Spoločný menovateľ je ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.": "O denominador comum é ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.",
  "Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.": "Você somou os lados. A área do retângulo é obtida multiplicando-os.",
  "Súčet: koľko je ${@0} + {@1}$?": "Soma: quanto é ${@0} + {@1}$?",
  "Súčin matíc: riadok krát stĺpec": "Produto de matrizes: linha vezes coluna",
  "Súčin na hlavnej diagonále: koľko je $({@0})\\cdot({@1})$?": "Produto da diagonal principal: quanto é $({@0})\\cdot({@1})$?",
  "Súčin na vedľajšej diagonále: koľko je $({@0})\\cdot({@1})$?": "Produto da diagonal secundária: quanto é $({@0})\\cdot({@1})$?",
  "Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.": "Você somou os produtos. O determinante é uma diferença: o produto da diagonal principal menos o da diagonal secundária.",
  "Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.": "Some os numeradores e escreva o resultado como fração $p/q$.",
  "Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.": "Você somou os numeradores e também os denominadores. As frações só se somam depois de reduzidas ao mesmo denominador; o denominador não se soma.",
  "To je $\\cos^2\\alpha$. Na konci ešte odmocni.": "Isso é $\\cos^2\\alpha$. No final, ainda extraia a raiz quadrada.",
  "To je $b^2$. Na konci ešte odmocni.": "Isso é $b^2$. No final, ainda extraia a raiz quadrada.",
  "To je $c^2$. Na konci ešte odmocni.": "Isso é $c^2$. No final, ainda extraia a raiz quadrada.",
  "To je hodnota {@0} uhla ${@1}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.": "Esse é o valor do {@0} do ângulo ${@1}^\\circ$. O seno cresce de 0 a 1 conforme o ângulo aumenta, e o cosseno decresce de 1 a 0.",
  "To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.": "Isso é o perímetro (a soma de todos os lados). A área é o produto de dois lados adjacentes.",
  "To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.": "Isso é o comprimento da circunferência $2\\pi r$. A área é $\\pi r^2$.",
  "To je zvyšok do 100 %. Pýtame sa na samotných ${@0}\\,\\%$ z čísla {@1}.": "Isso é o que falta para 100 %. A pergunta é só sobre ${@0}\\,\\%$ de {@1}.",
  "Trojuholník je polovica obdĺžnika. Koľko je ${@0} : 2$?": "O triângulo é metade do retângulo. Quanto é ${@0} : 2$?",
  "Trojuholník má základňu $z={@0}$ a výšku $v={@1}$. Aký je jeho obsah $S$?": "Um triângulo tem base $z={@0}$ e altura $v={@1}$. Qual é sua área $S$?",
  "Uhol α (°)": "Ângulo α (°)",
  "Vennov diagram dvoch množín": "Diagrama de Venn de dois conjuntos",
  "Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.": "Tome a $i$-ésima linha da matriz $A$ e a $j$-ésima coluna da matriz $B$ e multiplique-as componente a componente.",
  "Vietove vzťahy: $x_1+x_2={@0}$ a $x_1\\cdot x_2={@1}$. Korene sú $x_1={@2}$ a $x_2={@3}$.": "Relações de Girard: $x_1+x_2={@0}$ e $x_1\\cdot x_2={@1}$. As raízes são $x_1={@2}$ e $x_2={@3}$.",
  "Vydeľ obe strany číslom {@0}. Koľko je $x$?": "Divida os dois membros por {@0}. Quanto é $x$?",
  "Vypočítaj $({@0}^{{@1}})^{{@2}}$.": "Calcule $({@0}^{{@1}})^{{@2}}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.": "Calcule $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.",
  "Vypočítaj ${@0}\\,{@1}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).": "Calcule ${@0}\\,{@1}^\\circ$ como número decimal (com 3 casas decimais).",
  "Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.": "Calcule ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.",
  "Vypočítaj determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.": "Calcule o determinante $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.",
  "Vyrieš rovnicu $x^2{@0}{@1} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).": "Resolva a equação $x^2{@0}{@1} = 0$. Escreva as duas raízes separadas por ponto e vírgula (por ex., 2; 3).",
  "Vyrieš rovnicu ${@0}x{@1} = {@2}$.": "Resolva a equação ${@0}x{@1} = {@2}$.",
  "Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.": "Do teorema de Pitágoras, isole $b^2=c^2-a^2$.",
  "Z matice $B$ si vzal riadok. Prvok súčinu je {@0}. riadok matice $A$ krát {@1}. stĺpec matice $B$.": "Você pegou uma linha da matriz $B$. O elemento do produto é a linha {@0} da matriz $A$ vezes a coluna {@1} da matriz $B$.",
  "Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.": "Você se esqueceu de dividir por dois. O triângulo é metade do retângulo de lados $z$ e $v$.",
  "Zabudol si deliť číslom {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.": "Você se esqueceu de dividir por {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.",
  "Zabudol si exponent {@0} dať pred $x$: $(x^{{@1}})'={@2}x^{{@3}}$.": "Você se esqueceu de colocar o expoente {@0} na frente do $x$: $(x^{{@1}})'={@2}x^{{@3}}$.",
  "Zabudol si na delenie. Neodčítavaš {@0}, ale až výsledok ${@1} : {@2}$.": "Você se esqueceu da divisão. Não se subtrai {@0}, mas sim o resultado de ${@1} : {@2}$.",
  "Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.": "Você se esqueceu de elevar o raio ao quadrado: a área é $\\pi\\cdot r\\cdot r$.",
  "Zlomky ako pruhy": "Frações como barras",
  "Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.": "Reduza as frações ao mesmo denominador: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.",
  "Základy si vynásobil. Základ {@0} ostáva, sčítajú sa len exponenty.": "Você multiplicou as bases. A base {@0} se mantém; só os expoentes se somam.",
  "b = {@0} · <span class=\"c-accent\">obsah = b³/3 = {@1}</span>": "b = {@0} · <span class=\"c-accent\">área = b³/3 = {@1}</span>",
  "korene x₁ = {@0}, x₂ = {@1}": "raízes x₁ = {@0}, x₂ = {@1}",
  "kosínusu": "cosseno",
  "kruh": "círculo",
  "napr. 5/6": "por ex., 5/6",
  "nemá reálne korene (D &lt; 0)": "não tem raízes reais (D &lt; 0)",
  "obdĺžnik": "retângulo",
  "odvesna": "cateto",
  "prepona": "hipotenusa",
  "prirodzené čísla ℕ": "números naturais ℕ",
  "priľahlá odvesna": "cateto adjacente",
  "protiľahlá": "oposto",
  "sínusu": "seno",
  "trojuholník": "triângulo",
  "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (smernica dotyčnice)": "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (coeficiente angular da tangente)",
  "y = x²{@0}{@1} · D = {@2} · {@3}": "y = x²{@0}{@1} · D = {@2} · {@3}",
  "záporné celé čísla": "inteiros negativos",
  "Člen ${@0}x$ si nezderivoval. Jeho derivácia je {@1}.": "Você não derivou o termo ${@0}x$. A derivada dele é {@1}.",
  "Číselná os": "Reta numérica",
  "Číslo si vydelil počtom percent. ${@0}\\,\\%$ znamená {@1} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob {@2}.": "Você dividiu o número pela porcentagem. ${@0}\\,\\%$ significa {@1} centésimos, então primeiro encontre 1 % (divida por 100) e depois multiplique por {@2}.",
  "Štvorec rozdelený na 100 dielov, 25 je vyfarbených": "Quadrado dividido em 100 partes, 25 estão coloridas",
  "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>": "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>"
 }
});
