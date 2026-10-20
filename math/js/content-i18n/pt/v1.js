/* Português: preklad js/rocniky/v1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/v1/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "v1-vektory": {
   "title": "Vetores em Rⁿ e dependência linear",
   "summary": "Operações com vetores, combinação linear, espaço gerado, dependência e independência linear.",
   "theory": [
    "<p>Um <strong>vetor</strong> em $\\mathbb{R}^n$ é uma $n$-upla ordenada de números reais $u=(u_1, u_2, \\dots, u_n)$. Somamos vetores e os multiplicamos por um número real (escalar) componente a componente: $u+v=(u_1+v_1, \\dots, u_n+v_n)$ e $c\\,u=(c\\,u_1, \\dots, c\\,u_n)$. O vetor nulo é denotado por $o=(0, \\dots, 0)$.</p>",
    "<p>Uma <strong>combinação linear</strong> dos vetores $u_1, \\dots, u_k$ é todo vetor da forma $c_1u_1+c_2u_2+\\dots+c_ku_k$, em que $c_1, \\dots, c_k\\in\\mathbb{R}$ são os coeficientes. O conjunto de todas as combinações lineares chama-se <strong>espaço gerado</strong> (ou subespaço gerado) e é denotado por $\\mathcal{L}(u_1, \\dots, u_k)$.</p>",
    {
     "fig": "v1-linkomb",
     "caption": "Os vetores $u=(2, 1)$ e $v=(-1, 2)$ não são paralelos, por isso todo vetor do plano pode ser escrito como $\\alpha u+\\beta v$. Mova os coeficientes $\\alpha$ e $\\beta$ e observe como muda o vetor resultante (laranja)."
    },
    "<p>Os vetores $u_1, \\dots, u_k$ são <strong>linearmente independentes</strong> se da igualdade $c_1u_1+\\dots+c_ku_k=o$ decorre $c_1=\\dots=c_k=0$. Caso contrário, são <strong>linearmente dependentes</strong>, o que ocorre se e somente se pelo menos um deles pode ser escrito como combinação linear dos demais.</p>\n       <p>Na prática, escrevemos os vetores nas linhas de uma matriz $A$: eles são independentes se e somente se $h(A)=k$ (o posto será visto nas próximas lições). Para $n$ vetores em $\\mathbb{R}^n$ basta verificar se $\\det A\\neq 0$. Mais de $n$ vetores em $\\mathbb{R}^n$ são sempre linearmente dependentes, e todo conjunto que contém o vetor nulo é dependente.</p>"
   ],
   "examples": [
    {
     "task": "Verifique se os vetores $u=(1, 2, 0)$, $v=(0, 1, 1)$ e $w=(2, 5, 1)$ são linearmente dependentes.",
     "steps": [
      "Escrevemos os vetores nas linhas de uma matriz e calculamos o determinante pela expansão ao longo da 1ª linha:",
      "$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.",
      "O determinante é zero, portanto os vetores são <strong>linearmente dependentes</strong>. De fato, $w=2u+v$."
     ]
    },
    {
     "task": "Escreva o vetor $w=(4, 7)$ como combinação linear dos vetores $u=(2, 1)$ e $v=(-1, 2)$.",
     "steps": [
      "Procuramos $\\alpha, \\beta$ com $\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$, ou seja, o sistema $2\\alpha-\\beta=4$, $\\alpha+2\\beta=7$.",
      "Da segunda equação, $\\alpha=7-2\\beta$; substituindo, $14-4\\beta-\\beta=4$, logo $\\beta=2$ e $\\alpha=3$.",
      "<strong>Resultado:</strong> $w=3u+2v$."
     ]
    }
   ]
  },
  "v1-operacie": {
   "title": "Matrizes e operações com matrizes",
   "summary": "Ordem de uma matriz, matrizes especiais, adição, multiplicação por escalar, transposição e traço.",
   "theory": [
    "<p>Uma <strong>matriz</strong> de ordem $m\\times n$ é uma tabela retangular $A=(a_{ij})$ de números reais com $m$ linhas e $n$ colunas. Duas matrizes são iguais se têm a mesma ordem e os mesmos elementos nas mesmas posições. Uma matriz de ordem $n\\times n$ é <strong>quadrada</strong> de ordem $n$; os elementos $a_{11}, a_{22}, \\dots, a_{nn}$ formam sua <strong>diagonal principal</strong>. São importantes a matriz <strong>identidade</strong> $I$ (uns na diagonal, zeros no resto), a matriz <strong>nula</strong> $O$, a matriz <strong>diagonal</strong> e a matriz <strong>triangular superior (inferior)</strong> (zeros abaixo (acima) da diagonal).</p>",
    "<p>A <strong>soma</strong> de matrizes de mesma ordem e o <strong>produto</strong> de uma matriz por um número são calculados elemento a elemento: $(A+B)_{ij}=a_{ij}+b_{ij}$, $(cA)_{ij}=c\\,a_{ij}$. Valem $A+B=B+A$, $(A+B)+C=A+(B+C)$, $c(A+B)=cA+cB$, $(c+d)A=cA+dA$. As matrizes de ordem $m\\times n$ com essas operações formam um espaço vetorial.</p>",
    "<p>A matriz <strong>transposta</strong> $A^{T}$ de uma matriz de ordem $m\\times n$ tem ordem $n\\times m$ e $(A^{T})_{ij}=a_{ji}$ – as linhas se tornam colunas. Valem $(A^{T})^{T}=A$, $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$ e $(AB)^{T}=B^{T}A^{T}$ (a ordem se inverte).</p>\n       <p>Uma matriz quadrada é <strong>simétrica</strong> se $A^{T}=A$ e <strong>antissimétrica</strong> se $A^{T}=-A$ (nesse caso, tem zeros na diagonal). Toda matriz quadrada pode ser decomposta de modo único na soma $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$ de uma parte simétrica e uma antissimétrica. O <strong>traço</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$ é a soma dos elementos da diagonal; para qualquer matriz, $\\operatorname{tr}(A^{T}A)$ é a soma dos quadrados de todos os seus elementos.</p>"
   ],
   "examples": [
    {
     "task": "Para $A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$ e $B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$, calcule $2A-B^{T}$.",
     "steps": [
      "$B$ tem ordem $3\\times 2$, logo $B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$ tem ordem $2\\times 3$, como $A$.",
      "$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.",
      "<strong>Resultado:</strong> $2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$."
     ]
    },
    {
     "task": "Decomponha a matriz $A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$ na soma de uma matriz simétrica e uma antissimétrica.",
     "steps": [
      "$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.",
      "Parte simétrica: $S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$.",
      "Parte antissimétrica: $K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$. Verificação: $S+K=A$."
     ]
    }
   ]
  },
  "v1-hodnost": {
   "title": "Posto de uma matriz e operações elementares",
   "summary": "Operações elementares sobre linhas, forma escalonada, eliminação de Gauss e posto de uma matriz.",
   "theory": [
    "<p>As <strong>operações elementares sobre linhas</strong> são: (1) troca de duas linhas, (2) multiplicação de uma linha por um número não nulo, (3) adição a uma linha de um múltiplo de outra linha. Se $B$ é obtida de $A$ por um número finito dessas operações, escrevemos $A\\sim B$ (as matrizes são equivalentes por linhas). A notação $R_2-3R_1$ significa que substituímos a segunda linha pela diferença entre a segunda linha e o triplo da primeira.</p>",
    "<p>Uma matriz está na <strong>forma escalonada</strong> se cada linha não nula começa com mais zeros do que a linha acima dela e as linhas nulas ficam no final. O primeiro elemento não nulo de uma linha é o seu <strong>pivô</strong>. A <strong>eliminação de Gauss</strong> leva qualquer matriz à forma escalonada: na coluna atual escolhemos um pivô e, com a operação (3), zeramos tudo abaixo dele. Se, além disso, transformamos os pivôs em 1 e zeramos também os elementos acima deles, obtemos a forma escalonada reduzida (eliminação de Gauss–Jordan).</p>",
    {
     "fig": "v1-stupne",
     "caption": "Forma escalonada: os pivôs se deslocam para a direita à medida que descemos. A matriz tem três linhas não nulas, por isso $h(A)=3$."
    },
    "<p>O <strong>posto</strong> $h(A)$ é o número máximo de linhas linearmente independentes da matriz $A$. As operações sobre linhas não alteram o posto, por isso $h(A)$ é o número de linhas não nulas da forma escalonada. Valem $h(A)=h(A^{T})$ (o posto por linhas é igual ao posto por colunas) e $h(A)\\le\\min(m, n)$. Para uma matriz quadrada de ordem $n$: $h(A)=n\\iff\\det A\\neq 0\\iff A$ é invertível.</p>"
   ],
   "examples": [
    {
     "task": "Determine o posto da matriz $A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$.",
     "steps": [
      "$R_2-2R_1$, $R_3-3R_1$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.",
      "A forma escalonada tem duas linhas não nulas, logo $h(A)=2$."
     ]
    },
    {
     "task": "Para quais valores de $a$ a matriz $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$ tem posto 2?",
     "steps": [
      "$R_2-R_1$, $R_3-2R_1$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.",
      "Para $a=4$ a última linha é nula e $h(A)=2$; para $a\\neq 4$ temos $h(A)=3$."
     ]
    }
   ]
  },
  "v1-determinant": {
   "title": "Determinante 3×3 e expansão de Laplace",
   "summary": "Regra de Sarrus, menores e cofatores, expansão de Laplace, propriedades do determinante.",
   "theory": [
    "<p>O <strong>determinante</strong> de uma matriz quadrada de ordem $n$ é o número $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$, em que somamos sobre todas as $n!$ permutações $\\pi$ do conjunto $\\{1, \\dots, n\\}$. Para $n=3$ obtemos a <strong>regra de Sarrus</strong>:</p>\n       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>",
    {
     "fig": "v1-sarrus",
     "caption": "Regra de Sarrus: repetimos à direita da matriz as suas duas primeiras colunas. Os produtos nas diagonais que descem para a direita entram com sinal positivo, e os das diagonais que descem para a esquerda, com sinal negativo. Vale <strong>apenas</strong> para matrizes de ordem 3."
    },
    "<p>O <strong>menor</strong> $M_{ij}$ é o determinante da matriz obtida eliminando-se a $i$-ésima linha e a $j$-ésima coluna, e o <strong>cofator</strong> é $A_{ij}=(-1)^{i+j}M_{ij}$. <strong>Expansão de Laplace</strong> ao longo da $i$-ésima linha: $\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$ (analogamente ao longo de uma coluna). É vantajoso expandir ao longo da linha ou coluna com o maior número de zeros.</p>",
    "<p><strong>Propriedades:</strong> $\\det A^{T}=\\det A$; trocar duas linhas muda o sinal; multiplicar uma linha por um número $c$ multiplica o determinante por $c$, por isso $\\det(cA)=c^{n}\\det A$; somar a uma linha um múltiplo de outra não altera o determinante; uma matriz com uma linha nula ou com duas linhas proporcionais tem determinante 0; o determinante de uma matriz triangular é o produto dos elementos da diagonal. Para matrizes de mesma ordem vale $\\det(AB)=\\det A\\cdot\\det B$ e, se $A$ é invertível, $\\det A^{-1}=\\frac{1}{\\det A}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "Termos positivos: $2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$.",
      "Termos negativos: $3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$.",
      "<strong>Resultado:</strong> $\\det A=2-13=-11$."
     ]
    },
    {
     "task": "Calcule $\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$.",
     "steps": [
      "Na 3ª linha há um único elemento não nulo, $a_{32}=3$. Expansão ao longo da 3ª linha: $\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$.",
      "$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$ (regra de Sarrus).",
      "<strong>Resultado:</strong> $\\det A=-3\\cdot 6=-18$."
     ]
    }
   ]
  },
  "v1-inverzna": {
   "title": "Matriz inversa: Gauss–Jordan e matriz adjunta",
   "summary": "Existência da matriz inversa, cálculo pelo método de Gauss–Jordan e pela matriz adjunta, equações matriciais.",
   "theory": [
    "<p>A matriz <strong>inversa</strong> de uma matriz quadrada $A$ de ordem $n$ é a matriz $A^{-1}$ tal que $AA^{-1}=A^{-1}A=I$. Ela existe se e somente se $\\det A\\neq 0$ (a matriz é <strong>invertível</strong>, ou não singular); uma matriz com determinante nulo é <strong>singular</strong>. Valem $(A^{-1})^{-1}=A$, $(A^{T})^{-1}=(A^{-1})^{T}$ e $(AB)^{-1}=B^{-1}A^{-1}$.</p>",
    "<p><strong>Método de Gauss–Jordan:</strong> por meio de operações sobre linhas, transformamos a matriz aumentada $(A\\mid I)$ na forma $(I\\mid B)$; então $B=A^{-1}$. Se durante as operações aparecer uma linha nula à esquerda, a matriz $A$ é singular.</p>",
    "<p>A <strong>matriz adjunta</strong> $\\operatorname{adj}A$ é a transposta da matriz dos cofatores: $(\\operatorname{adj}A)_{ij}=A_{ji}$. Vale $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$, ou seja, $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ – atenção à troca dos índices. Para $n=2$ obtemos a conhecida fórmula $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    "<p><strong>Equações matriciais:</strong> se $A$ é invertível, a equação $AX=B$ tem a única solução $X=A^{-1}B$, e a equação $XA=B$ tem a solução $X=BA^{-1}$. Como a multiplicação de matrizes não é comutativa, importa o lado pelo qual multiplicamos.</p>"
   ],
   "examples": [
    {
     "task": "Pelo método de Gauss–Jordan, encontre a inversa de $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$; $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "$R_2-R_3$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$; $R_1-2R_2$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "<strong>Resultado:</strong> $A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$ (verificação: $AA^{-1}=I$)."
     ]
    },
    {
     "task": "Para $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$, calcule o elemento $(A^{-1})_{13}$.",
     "steps": [
      "$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.",
      "$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$, em que $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$.",
      "<strong>Resultado:</strong> $(A^{-1})_{13}=\\frac{1}{8}$."
     ]
    }
   ]
  },
  "v1-sustavy": {
   "title": "Sistemas de equações lineares",
   "summary": "Eliminação de Gauss, teorema de Rouché–Capelli (Frobenius), regra de Cramer e sistemas homogêneos.",
   "theory": [
    "<p>Um sistema de $m$ equações lineares com $n$ incógnitas é escrito na forma matricial $Ax=b$, em que $A$ é a <strong>matriz dos coeficientes</strong>, $x=(x_1, \\dots, x_n)^{T}$ e $b$ é a coluna dos termos independentes; $(A\\mid b)$ é a <strong>matriz aumentada</strong> (ou ampliada). O sistema é <strong>homogêneo</strong> se $b=o$.</p>",
    "<p><strong>Teorema de Rouché–Capelli (Frobenius):</strong> o sistema $Ax=b$ tem solução se e somente se $h(A)=h(A\\mid b)$. Se $h(A)=h(A\\mid b)=n$, a solução é única; se $h(A)=h(A\\mid b)=h\\lt n$, há infinitas soluções, que dependem de $n-h$ parâmetros.</p>",
    {
     "fig": "v1-priamky",
     "caption": "Duas equações com duas incógnitas são duas retas no plano: elas se intersectam, são paralelas distintas ou coincidem."
    },
    "<p><strong>Eliminação de Gauss:</strong> levamos a matriz aumentada à forma escalonada e calculamos as incógnitas por substituição retroativa, de baixo para cima; as incógnitas sem pivô são parâmetros livres. <strong>Regra de Cramer:</strong> se $A$ é quadrada e $D=\\det A\\neq 0$, então $x_i=\\frac{D_i}{D}$, em que $D_i$ é o determinante da matriz obtida de $A$ substituindo-se a $i$-ésima coluna pela coluna $b$.</p>\n       <p>Um <strong>sistema homogêneo</strong> tem sempre a solução trivial $x=o$. Uma solução não trivial existe se e somente se $h(A)\\lt n$ (para uma matriz quadrada, se e somente se $\\det A=0$). O conjunto de todas as soluções é um subespaço de $\\mathbb{R}^n$ de dimensão $n-h(A)$.</p>"
   ],
   "examples": [
    {
     "task": "Resolva o sistema $x_1+x_2+x_3=6$, $2x_1-x_2+x_3=3$, $x_1+2x_2-x_3=2$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$; $R_2-2R_1$, $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.",
      "$R_2\\leftrightarrow R_3$, depois $R_3+3R_2$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$.",
      "Retroativamente: $x_3=3$, $x_2=-4+2\\cdot 3=2$, $x_1=6-2-3=1$. <strong>Solução:</strong> $(1, 2, 3)$."
     ]
    },
    {
     "task": "Resolva o sistema $x_1+2x_2-x_3=1$, $2x_1+4x_2+x_3=5$.",
     "steps": [
      "$R_2-2R_1$: $\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$, logo $h(A)=h(A\\mid b)=2\\lt 3$ – infinitas soluções com um parâmetro.",
      "Da 2ª linha, $x_3=1$. A incógnita $x_2$ não tem pivô; escolhemos $x_2=t$; da 1ª linha, $x_1=1-2t+1=2-2t$.",
      "<strong>Solução:</strong> $(2-2t, t, 1)$, $t\\in\\mathbb{R}$."
     ]
    }
   ]
  },
  "v1-priestory": {
   "title": "Espaço vetorial, base e dimensão",
   "summary": "Espaço vetorial e subespaço, base, dimensão e coordenadas de um vetor em uma base.",
   "theory": [
    "<p>Um <strong>espaço vetorial</strong> sobre $\\mathbb{R}$ é um conjunto $V$ com adição e multiplicação por número real que não saem de $V$ e satisfazem as regras usuais: comutatividade e associatividade da adição, existência do vetor nulo e do vetor oposto, leis distributivas, $(cd)u=c(du)$ e $1\\cdot u=u$. Exemplos: $\\mathbb{R}^n$, as matrizes de ordem $m\\times n$, os polinômios de grau no máximo $n$ ($P_n$), as funções reais em um intervalo.</p>",
    "<p>Um <strong>subespaço</strong> é um subconjunto não vazio $W\\subseteq V$ fechado para a adição e para a multiplicação por número; então necessariamente $o\\in W$. São subespaços de $\\mathbb{R}^3$, por exemplo, as retas e os planos que passam pela origem, o conjunto das soluções de um sistema homogêneo e todo espaço gerado. Um plano que não passa pela origem não é subespaço.</p>",
    "<p>Uma <strong>base</strong> do espaço $V$ é um conjunto linearmente independente de vetores cujo espaço gerado é todo o $V$. Todas as bases têm o mesmo número de elementos – a <strong>dimensão</strong> $\\dim V$. Por exemplo, $\\dim\\mathbb{R}^n=n$ (base canônica $e_1, \\dots, e_n$), $\\dim P_n=n+1$ e o espaço das matrizes $m\\times n$ tem dimensão $mn$. Em um espaço de dimensão $n$, quaisquer $n$ vetores linearmente independentes formam uma base, e $\\dim\\mathcal{L}(u_1, \\dots, u_k)$ é o posto da matriz com linhas $u_1, \\dots, u_k$.</p>",
    {
     "fig": "v1-baza",
     "caption": "A base $b_1=(2, 1)$, $b_2=(-1, 2)$ cria uma malha “inclinada”. As coordenadas $(c_1, c_2)$ de um vetor na base $B$ indicam quantos passos é preciso dar na direção de $b_1$ e quantos na direção de $b_2$."
    },
    "<p>Se $B=(b_1, \\dots, b_n)$ é uma base, todo vetor pode ser escrito de modo <strong>único</strong> como $v=c_1b_1+\\dots+c_nb_n$; os números $(c_1, \\dots, c_n)$ são as <strong>coordenadas</strong> do vetor $v$ na base $B$. Nós as encontramos resolvendo o sistema cuja matriz tem os vetores da base nas colunas e cujo lado direito é $v$.</p>"
   ],
   "examples": [
    {
     "task": "Encontre as coordenadas do vetor $v=(3, 0, 1)$ na base $b_1=(1, 0, 1)$, $b_2=(0, 1, 1)$, $b_3=(1, 1, 0)$.",
     "steps": [
      "De $v=c_1b_1+c_2b_2+c_3b_3$ obtemos o sistema $c_1+c_3=3$, $c_2+c_3=0$, $c_1+c_2=1$.",
      "Subtraindo as duas primeiras equações, $c_1-c_2=3$; junto com $c_1+c_2=1$ temos $c_1=2$, $c_2=-1$ e $c_3=1$.",
      "<strong>Resultado:</strong> $(v)_B=(2, -1, 1)$. Verificação: $2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$."
     ]
    },
    {
     "task": "Determine uma base e a dimensão do subespaço $W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$.",
     "steps": [
      "A matriz do sistema $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$ está na forma escalonada e tem posto 2, por isso $\\dim W=4-2=2$.",
      "Incógnitas livres: $x_3=s$, $x_4=t$. Então $x_2=-t$ e $x_1=x_3-x_2=s+t$, ou seja, $x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$.",
      "<strong>Resultado:</strong> base $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$, $\\dim W=2$."
     ]
    }
   ]
  },
  "v1-zobrazenia": {
   "title": "Transformações lineares e suas matrizes",
   "summary": "Transformação linear, sua matriz, composição de transformações, transformações geométricas no plano, núcleo e imagem.",
   "theory": [
    "<p>Uma aplicação $f:V\\to W$ entre espaços vetoriais é <strong>linear</strong> se $f(u+v)=f(u)+f(v)$ e $f(cu)=c\\,f(u)$ para todos os vetores $u, v$ e números $c$; então $f(o)=o$. Toda transformação linear $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ tem a forma $f(x)=Ax$ para uma única matriz $A$ de ordem $m\\times n$, cujas colunas são as imagens dos vetores da base canônica: $A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$. À transformação composta $g\\circ f$ (primeiro $f$, depois $g$) corresponde o produto de matrizes $A_gA_f$.</p>",
    "<table class=\"tbl tbl-auto\"><tr><th>transformação em $\\mathbb{R}^2$</th><th>matriz</th></tr>\n       <tr><td>rotação de ângulo $\\varphi$</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>\n       <tr><td>reflexão em relação ao eixo $x$</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>\n       <tr><td>reflexão em relação à reta $y=x$</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>projeção ortogonal sobre o eixo $x$</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>homotetia de razão $k$</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>",
    {
     "fig": "v1-rotacia",
     "caption": "Rotação de ângulo $\\varphi$: as imagens dos vetores $e_1$ (azul) e $e_2$ (verde) são exatamente as colunas da matriz de rotação. A figura tracejada é a original, a cheia é a sua imagem."
    },
    "<p>O <strong>núcleo</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$ é o conjunto das soluções do sistema homogêneo $Ax=o$; a <strong>imagem</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$ é o espaço gerado pelas colunas da matriz $A$. Ambos são subespaços e $\\dim\\operatorname{Im}f=h(A)$. <strong>Teorema do núcleo e da imagem:</strong> $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$. A transformação é injetora se e somente se $\\operatorname{Ker}f=\\{o\\}$.</p>"
   ],
   "examples": [
    {
     "task": "Encontre a matriz da transformação que primeiro gira um vetor $90^\\circ$ no sentido anti-horário e depois o reflete em relação ao eixo $x$. Qual é a imagem do vetor $(2, 1)$?",
     "steps": [
      "Rotação: $R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$, reflexão: $S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$. A composição (primeiro $R$, depois $S$) tem matriz $SR$.",
      "$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$ – é a reflexão em relação à reta $y=-x$.",
      "<strong>Imagem:</strong> $SR\\,(2, 1)^{T}=(-1, -2)^{T}$."
     ]
    },
    {
     "task": "Determine o núcleo e a dimensão da imagem da transformação $f(x)=Ax$, em que $A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "A terceira linha é a soma das duas primeiras, por isso $h(A)=2$ e $\\dim\\operatorname{Im}f=2$.",
      "Núcleo: $x_1+x_2=0$, $x_2+x_3=0$. Para $x_3=t$ temos $x_2=-t$, $x_1=t$, logo $\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$.",
      "Verificação pelo teorema do núcleo e da imagem: $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$."
     ]
    }
   ]
  },
  "v1-vlastne": {
   "title": "Autovalores e autovetores",
   "summary": "Polinômio característico, autovalores e autovetores de matrizes 2×2 e 3×3, diagonalização e potências de uma matriz.",
   "theory": [
    "<p>Um número $\\lambda$ é <strong>autovalor</strong> de uma matriz quadrada $A$ se existe um vetor não nulo $v$ com $Av=\\lambda v$; o vetor $v$ é então um <strong>autovetor</strong> associado a $\\lambda$. Geometricamente: a transformação $x\\mapsto Ax$ preserva a direção do vetor $v$ e apenas o estica $\\lambda$ vezes (para $\\lambda\\lt 0$ também inverte o sentido).</p>",
    "<p>Os autovalores são as raízes do <strong>polinômio característico</strong> $p(\\lambda)=\\det(A-\\lambda I)$. Para uma matriz $2\\times 2$, $p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$. Em geral, a soma dos autovalores é igual a $\\operatorname{tr}A$ e o seu produto a $\\det A$; uma matriz triangular tem os autovalores na diagonal. Os autovetores associados a $\\lambda$ são as soluções não nulas do sistema homogêneo $(A-\\lambda I)v=o$.</p>",
    {
     "fig": "v1-matica",
     "caption": "A matriz $A$ transforma o quadrado unitário em um paralelogramo de lados $Ae_1$ e $Ae_2$ (as colunas da matriz); sua área é $|\\det A|$. As retas laranja são as direções próprias – os vetores sobre elas são levados em múltiplos de si mesmos."
    },
    "<p><strong>Diagonalização:</strong> uma matriz $A$ de ordem $n$ é diagonalizável se $A=PDP^{-1}$, em que $D$ é diagonal. Isso ocorre se e somente se $A$ tem $n$ autovetores linearmente independentes; eles formam as colunas da matriz $P$, e na diagonal de $D$ estão os autovalores correspondentes, na mesma ordem. Basta que $A$ tenha $n$ autovalores distintos; toda matriz simétrica real é diagonalizável. Aplicação: $A^k=PD^kP^{-1}$.</p>"
   ],
   "examples": [
    {
     "task": "Encontre os autovalores e os autovetores da matriz $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "$\\operatorname{tr}A=7$, $\\det A=10$, logo $\\lambda^2-7\\lambda+10=0$ e $\\lambda_1=2$, $\\lambda_2=5$.",
      "$\\lambda=5$: $A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$, equação $-v_1+v_2=0$, autovetor $(1, 1)$.",
      "$\\lambda=2$: $A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$, equação $2v_1+v_2=0$, autovetor $(1, -2)$."
     ]
    },
    {
     "task": "Usando a diagonalização, calcule $A^3$ para $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "Do exemplo anterior, $P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$, $D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$ e $P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$.",
      "$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.",
      "<strong>Resultado:</strong> $A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$."
     ]
    }
   ]
  },
  "v1-skalarny": {
   "title": "Produto interno, ortogonalidade e projeção",
   "summary": "Produto interno e norma, ângulo entre vetores, projeção ortogonal e processo de Gram–Schmidt.",
   "theory": [
    "<p>O <strong>produto interno usual</strong> (produto escalar) em $\\mathbb{R}^n$ é $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$. Ele é simétrico, linear em cada argumento e $\\langle u, u\\rangle\\gt 0$ para $u\\neq o$. A <strong>norma</strong> (comprimento) é $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$ e a distância entre vetores é $\\|u-v\\|$. Vale a <strong>desigualdade de Cauchy–Schwarz</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$, por isso o ângulo $\\varphi$ entre vetores não nulos está bem definido: $\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$.</p>",
    "<p>Os vetores são <strong>ortogonais</strong> ($u\\perp v$) se $\\langle u, v\\rangle=0$. Um sistema de vetores não nulos, dois a dois ortogonais, é linearmente independente; se, além disso, eles têm norma 1, o sistema é <strong>ortonormal</strong>. A <strong>projeção ortogonal</strong> do vetor $v$ na direção $u\\neq o$ é $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$; o vetor $v-\\operatorname{proj}_u v$ é perpendicular a $u$ e sua norma é a distância do ponto $v$ à reta $\\mathcal{L}(u)$.</p>",
    {
     "fig": "v1-projekcia",
     "caption": "Projeção do vetor $v$ (azul) sobre a reta de direção $u=(\\cos\\theta, \\sin\\theta)$: o vetor verde é $\\operatorname{proj}_u v$, o segmento tracejado é perpendicular à reta."
    },
    "<p>O <strong>processo de Gram–Schmidt</strong> cria, a partir de vetores linearmente independentes $u_1, \\dots, u_k$, vetores ortogonais com o mesmo espaço gerado: $w_1=u_1$ e $w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$, ou seja, de cada vetor subtraímos as suas projeções sobre os vetores já obtidos. Dividindo pelas normas, $e_j=w_j/\\|w_j\\|$, obtemos uma base ortonormal.</p>"
   ],
   "examples": [
    {
     "task": "Encontre a projeção ortogonal do vetor $v=(3, 1, 2)$ na direção $u=(1, 1, 0)$ e a distância do ponto $v$ à reta $\\mathcal{L}(u)$.",
     "steps": [
      "$\\langle v, u\\rangle=3+1+0=4$, $\\langle u, u\\rangle=2$, logo $\\operatorname{proj}_u v=2u=(2, 2, 0)$.",
      "$v-\\operatorname{proj}_u v=(1, -1, 2)$; verificação da perpendicularidade: $\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$.",
      "<strong>Distância:</strong> $\\|(1, -1, 2)\\|=\\sqrt{6}$."
     ]
    },
    {
     "task": "Pelo processo de Gram–Schmidt, ortogonalize os vetores $u_1=(1, 1, 1)$ e $u_2=(1, 2, 3)$.",
     "steps": [
      "$w_1=u_1=(1, 1, 1)$.",
      "$\\langle u_2, w_1\\rangle=6$, $\\langle w_1, w_1\\rangle=3$, logo $w_2=u_2-2w_1=(-1, 0, 1)$; de fato, $\\langle w_1, w_2\\rangle=0$.",
      "Base ortonormal: $e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$, $e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$."
     ]
    }
   ]
  },
  "v1-kvadraticke": {
   "title": "Formas quadráticas e definição de sinal",
   "summary": "Matriz de uma forma quadrática, classificação (definida, semidefinida, indefinida), critério de Sylvester.",
   "theory": [
    "<p>Uma <strong>forma quadrática</strong> em $\\mathbb{R}^n$ é uma função $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$, em que $A$ é uma matriz simétrica – a <strong>matriz da forma</strong>. O coeficiente de $x_i^2$ é $a_{ii}$, o coeficiente de $x_ix_j$ ($i\\neq j$) é $2a_{ij}$. Por exemplo, $Q=x_1^2+4x_1x_2-3x_2^2$ tem a matriz $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$.</p>",
    "<p>A forma (e também a sua matriz) é <strong>definida positiva</strong> se $Q(x)\\gt 0$ para todo $x\\neq o$; <strong>semidefinida positiva</strong> se $Q(x)\\ge 0$ para todo $x$; analogamente <strong>(semi)definida negativa</strong>; e <strong>indefinida</strong> se assume valores positivos e negativos. Por meio dos autovalores: todos positivos $\\iff$ definida positiva, todos não negativos $\\iff$ semidefinida positiva, de sinais diferentes $\\iff$ indefinida.</p>",
    "<p><strong>Critério de Sylvester:</strong> sejam $D_1=a_{11}$, $D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$, …, $D_n=\\det A$ os menores principais líderes. A forma é definida positiva $\\iff D_k\\gt 0$ para todo $k$; definida negativa $\\iff$ os sinais se alternam $D_1\\lt 0$, $D_2\\gt 0$, $D_3\\lt 0$, … Se $\\det A\\neq 0$ e não ocorre nenhum dos dois casos, a forma é indefinida. Quando $\\det A=0$, os menores principais líderes não bastam para decidir sobre a semidefinição – são necessários os autovalores ou todos os menores principais.</p>"
   ],
   "examples": [
    {
     "task": "Classifique a forma $Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$.",
     "steps": [
      "Matriz da forma: $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$.",
      "$D_1=2$, $D_2=2\\cdot 1-1\\cdot 1=1$, $D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$.",
      "Todos os menores principais líderes são positivos; a forma é <strong>definida positiva</strong>."
     ]
    },
    {
     "task": "Para quais valores de $a$ a forma $Q=x^2+4xy+ay^2$ é definida positiva?",
     "steps": [
      "$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$, $D_1=1\\gt 0$, $D_2=a-4$.",
      "<strong>Resultado:</strong> a forma é definida positiva exatamente para $a\\gt 4$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.": "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: a $i$-ésima linha da matriz inversa é formada pelos cofatores da $i$-ésima <em>coluna</em> da matriz $A$.",
  "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Teda $c={@5}$.": "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Logo, $c={@5}$.",
  "$A^{T}={@0}$. Porovnaním s $A$ vidíme, že {@1}.": "$A^{T}={@0}$. Comparando com $A$, vemos que {@1}.",
  "$B^{T}={@0}$, takže ${@1}={@2}={@3}$.": "$B^{T}={@0}$, portanto ${@1}={@2}={@3}$.",
  "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Teda $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.": "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Logo, $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.",
  "$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>{@0}<br>$h(A)={@1}$, teda $\\dim W={@2}-{@3}={@4}$.": "$W$ é o conjunto solução de um sistema homogêneo, por isso $\\dim W=n-h(A)$. Posto da matriz do sistema:<br>{@0}<br>$h(A)={@1}$, logo $\\dim W={@2}-{@3}={@4}$.",
  "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.": "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; as normas desses vetores são números inteiros.",
  "$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A={@0}$; obe sú teda {@1} a jedno je nulové": "$\\det A=0$, um autovalor é $0$ e o outro é igual a $\\operatorname{tr}A={@0}$; ambos são, portanto, {@1} e um deles é nulo",
  "$\\det A={@0}$, teda $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.": "$\\det A={@0}$, logo $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.",
  "$\\det A={@0}$. Podľa vzorca $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ potrebujeme algebraické doplnky {@3}. stĺpca: ${@4}$.": "$\\det A={@0}$. Pela fórmula $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$, precisamos dos cofatores da {@3}ª coluna: ${@4}$.",
  "$\\det A={@0}$. Ďalej $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ a ${@5}$. Teda $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.": "$\\det A={@0}$. Além disso, $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ e ${@5}$. Logo, $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.",
  "$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov": "$\\det A\\neq 0$ e não ocorreu nenhum dos casos anteriores",
  "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ a transponovaním sa determinant nemení. Súčin teda obsahuje $\\det A$ dvakrát.": "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ e a transposição não altera o determinante. Portanto, o produto contém $\\det A$ duas vezes.",
  "$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).": "$\\dim\\operatorname{Im}f=h(A)$ e $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ é o número de colunas da matriz (a dimensão do domínio).",
  "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, teda $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.": "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, logo $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.",
  "$\\langle u, v\\rangle={@0}={@1}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t={@2}$.": "$\\langle u, v\\rangle={@0}={@1}$. A condição $\\langle u, v\\rangle=0$ dá $t={@2}$.",
  "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.": "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.",
  "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.": "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.",
  "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, charakteristická rovnica je ${@2}{@3}=0$.": "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, a equação característica é ${@2}{@3}=0$.",
  "$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno": "$h(A)=h(A\\mid b)=3=n$, a solução é única",
  "$h(A)=h(A\\mid b)={@0}\\lt 3$, riešení je nekonečne veľa ({@1})": "$h(A)=h(A\\mid b)={@0}\\lt 3$, há infinitas soluções ({@1})",
  "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sústava nemá riešenie": "$h(A)={@0}\\neq h(A\\mid b)={@1}$, o sistema não tem solução",
  "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.": "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.",
  "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, koeficient $\\frac{{@2}}{{@3}}={@4}$.": "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, coeficiente $\\frac{{@2}}{{@3}}={@4}$.",
  "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.": "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; o resultado deve ser ortogonal a $w_1$.",
  "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Skúška: $\\langle w_1, w_2\\rangle={@6}$.": "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Verificação: $\\langle w_1, w_2\\rangle={@6}$.",
  "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, kde v $D_{{@2}}$ nahradíš {@3}. stĺpec matice sústavy stĺpcom pravých strán.": "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, em que em $D_{{@2}}$ você substitui a {@3}ª coluna da matriz do sistema pela coluna dos termos independentes.",
  "(mení orientáciu)": "(inverte a orientação)",
  "(naozaj ${@0}={@1}{@2} {@3} {@4}{@5}$)": "(de fato, ${@0}={@1}{@2} {@3} {@4}{@5}$)",
  "+ súčiny na zelených diagonálach": "+ produtos nas diagonais verdes",
  ", teda ${@0}{@1} {@2} = {@3}$": ", logo ${@0}{@1} {@2} = {@3}$",
  "<strong>Je</strong> podpriestor: {@0}.": "<strong>É</strong> subespaço: {@0}.",
  "<strong>Nie je</strong> podpriestor: {@0}.": "<strong>Não é</strong> subespaço: {@0}.",
  "Aká je definitnosť formy?": "Qual é a classificação da forma?",
  "Aká je dimenzia $W$?": "Qual é a dimensão de $W$?",
  "Aká je dimenzia jadra $\\operatorname{Ker}f$?": "Qual é a dimensão do núcleo $\\operatorname{Ker}f$?",
  "Aká je hodnosť matice $A$?": "Qual é o posto da matriz $A$?",
  "Aká je hodnosť matice sústavy $h(A)$?": "Qual é o posto da matriz do sistema $h(A)$?",
  "Aká je hodnosť matice sústavy?": "Qual é o posto da matriz do sistema?",
  "Aká je hodnosť rozšírenej matice $h(A\\mid b)$?": "Qual é o posto da matriz aumentada $h(A\\mid b)$?",
  "Aké je znamienko $(-1)^{{@0}+{@1}}$? Zadaj $1$ alebo $-1$.": "Qual é o sinal de $(-1)^{{@0}+{@1}}$? Digite $1$ ou $-1$.",
  "Aký je absolútny člen $D_0$?": "Qual é o termo independente $D_0$?",
  "Aký je absolútny člen $b$?": "Qual é o termo independente $b$?",
  "Aký je determinant tejto podmatice?": "Qual é o determinante desta submatriz?",
  "Algebraický doplnok treba ešte vydeliť determinantom matice $A$.": "O cofator ainda precisa ser dividido pelo determinante da matriz $A$.",
  "Antisymetrická matica má na diagonále nuly a spĺňa $a_{ij}=-a_{ji}$. Over to pre všetky dvojice.": "Uma matriz antissimétrica tem zeros na diagonal e satisfaz $a_{ij}=-a_{ji}$. Verifique isso para todos os pares.",
  "Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).": "Não é preciso calcular toda a matriz inversa: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (os índices do cofator ficam trocados).",
  "Cramerovým pravidlom vypočítaj neznámu $x_{{@0}}$ zo sústavy ${@1}$. Neceločíselný výsledok zadaj ako zlomok.": "Pela regra de Cramer, calcule a incógnita $x_{{@0}}$ do sistema ${@1}$. Se o resultado não for inteiro, digite-o como fração.",
  "Cramerovým pravidlom: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,": "Pela regra de Cramer: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,",
  "Dané sú vektory $u={@0}$ a $v={@1}$ v $\\mathbb{R}^{{@2}}$. Vypočítaj vektor ${@3}$. Zložky oddeľ bodkočiarkou.": "São dados os vetores $u={@0}$ e $v={@1}$ em $\\mathbb{R}^{{@2}}$. Calcule o vetor ${@3}$. Separe as componentes com ponto e vírgula.",
  "Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.": "O determinante é diferente de zero, os vetores são <strong>linearmente independentes</strong>.",
  "Determinant je nulový, vektory sú <strong>lineárne závislé</strong>{@0}.": "O determinante é zero, os vetores são <strong>linearmente dependentes</strong>{@0}.",
  "Determinant je síce nulový, ale pozri sa na znamienko nenulového vlastného čísla: pri matici $2\\times 2$ sa rovná stope.": "O determinante é zero, mas observe o sinal do autovalor não nulo: para uma matriz $2\\times 2$, ele é igual ao traço.",
  "Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.": "O determinante da matriz com linhas $u, v, w$ é uma função linear do parâmetro $t$ – desenvolva-o pela linha que contém o parâmetro e iguale a zero.",
  "Diagonálne prvky matice $D^{{@0}}$?": "Elementos diagonais da matriz $D^{{@0}}$?",
  "Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: ${@0}={@1}={@2}$.": "O elemento diagonal $(A^{T}A)_{jj}$ é a soma dos quadrados dos elementos da $j$-ésima coluna da matriz $A$, por isso $\\operatorname{tr}(A^{T}A)$ é a soma dos quadrados de todos os elementos: ${@0}={@1}={@2}$.",
  "Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $\\dim W={@3}$.": "A dimensão do espaço gerado é o posto da matriz cujas linhas são os vetores dados:<br>{@0}<br>A forma escalonada tem {@1} {@2}, logo $\\dim W={@3}$.",
  "Diskriminant ${@0}{@1}$, teda $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, t. j. $\\lambda_1={@4}$ a $\\lambda_2={@5}$.": "Discriminante ${@0}{@1}$, logo $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, ou seja, $\\lambda_1={@4}$ e $\\lambda_2={@5}$.",
  "Do matice formy patrí mimo diagonály polovica koeficientu pri $xy$, teda ${@0}$, nie ${@1}$.": "Fora da diagonal, a matriz da forma recebe metade do coeficiente de $xy$, ou seja, ${@0}$, e não ${@1}$.",
  "Dosaď $x_3$ do predposledného riadku a vypočítaj $x_2$.": "Substitua $x_3$ na penúltima linha e calcule $x_2$.",
  "Forma $Q={@0}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "A forma $Q={@0}$ é definida positiva se e somente se $a\\gt c$. Determine o número $c$ (se necessário, como fração).",
  "Forma $Q={@0}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "A forma $Q={@0}+ay^2$ é definida positiva se e somente se $a\\gt c$. Determine o número $c$ (se necessário, como fração).",
  "Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $h(A)={@3}$.": "Pela eliminação de Gauss, levamos a matriz à forma escalonada:<br>{@0}<br>A forma escalonada tem {@1} {@2}, logo $h(A)={@3}$.",
  "Gaussovou elimináciou vyrieš sústavu ${@0}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.": "Resolva o sistema ${@0}$ pela eliminação de Gauss. Digite a solução na forma “x₁; x₂; x₃”.",
  "Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1={@0}$ a $u_2={@1}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.": "Ortogonalize os vetores $u_1={@0}$ e $u_2={@1}$ pelo processo de Gram–Schmidt (nesta ordem, sem normalizar). Digite o vetor $w_2$.",
  "Hľadaj protipríklad: patrí nulový vektor do $W$? Je súčet dvoch prvkov $W$ opäť v $W$? A ich násobok?": "Procure um contraexemplo: o vetor nulo pertence a $W$? A soma de dois elementos de $W$ está novamente em $W$? E um múltiplo deles?",
  "Indefinitná forma nadobúda kladné aj záporné hodnoty. Over znamienka rohových minorov podľa Sylvestrovho kritéria.": "Uma forma indefinida assume valores positivos e negativos. Verifique os sinais dos menores principais líderes pelo critério de Sylvester.",
  "Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.": "O núcleo é o conjunto solução do sistema homogêneo $Ax=o$. Escalone a matriz e escolha uma incógnita livre como parâmetro.",
  "Jadro je množina riešení sústavy $Ax=o$:<br>{@0}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom ${@1}\\times{@2}={@3}${@4}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.": "O núcleo é o conjunto solução do sistema $Ax=o$:<br>{@0}<br>$h(A)=2$, logo $\\dim\\operatorname{Ker}f=3-2=1$. A solução é ortogonal às duas linhas não nulas, por isso é múltipla de ${@1}\\times{@2}={@3}${@4}. Logo, $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.",
  "Je množina $W={@0}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?": "O conjunto $W={@0}$ é um subespaço do espaço vetorial $\\mathbb{R}^3$?",
  "Ker": "Ker",
  "Kladne definitná je forma len vtedy, keď sú všetky hlavné rohové minory kladné.": "A forma é definida positiva somente se todos os menores principais líderes forem positivos.",
  "Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A={@0}$.": "O coeficiente de $x_ix_j$ ($i\\neq j$) é dividido igualmente entre $a_{ij}$ e $a_{ji}$, então $a_{ij}$ é metade do coeficiente. Matriz da forma: $A={@0}$.",
  "Koeficient pri $x_ix_j$ sa v symetrickej matici rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, každý dostane polovicu.": "Na matriz simétrica, o coeficiente de $x_ix_j$ é dividido igualmente entre $a_{ij}$ e $a_{ji}$; cada um recebe a metade.",
  "Koľko riešení má sústava ${@0}$?": "Quantas soluções tem o sistema ${@0}$?",
  "Koľko riešení má sústava?": "Quantas soluções tem o sistema?",
  "Kvadratická forma je $Q={@0}$. Urči prvky $a_{12}, a_{13}, a_{23}$ jej symetrickej matice (oddelené bodkočiarkou) (zlomky v tvare $p/q$).": "A forma quadrática é $Q={@0}$. Determine os elementos $a_{12}, a_{13}, a_{23}$ da sua matriz simétrica (separados por ponto e vírgula) (frações na forma $p/q$).",
  "Kvadratická forma je $Q={@0}$. Urči prvok $a_{12}$ jej symetrickej matice (zlomky v tvare $p/q$).": "A forma quadrática é $Q={@0}$. Determine o elemento $a_{12}$ da sua matriz simétrica (frações na forma $p/q$).",
  "Kvadratický činiteľ má $\\operatorname{tr}={@0}$, $\\det={@1}$ a korene ${@2}$ a ${@3}$. Vlastné čísla sú ${@4}$.": "O fator quadrático tem $\\operatorname{tr}={@0}$, $\\det={@1}$ e raízes ${@2}$ e ${@3}$. Os autovalores são ${@4}$.",
  "Lineárna kombinácia dvoch vektorov": "Combinação linear de dois vetores",
  "Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f{@0}={@1}$ a $f{@2}={@3}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.": "A transformação linear $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ satisfaz $f{@0}={@1}$ e $f{@2}={@3}$. Encontre a matriz $A$ da transformação $f$ (na base canônica). Digite os elementos por linhas.",
  "Matica $-A^{3}$ je $(-1)\\cdot A^{3}$, a $\\det(-M)=(-1)^{{@0}}\\det M$.": "A matriz $-A^{3}$ é $(-1)\\cdot A^{3}$, e $\\det(-M)=(-1)^{{@0}}\\det M$.",
  "Matica $A={@0}$ má vlastné čísla ${@1}$ a ${@2}$. Pomocou diagonalizácie vypočítaj $A^{{@3}}$. Prvky zadaj po riadkoch.": "A matriz $A={@0}$ tem autovalores ${@1}$ e ${@2}$. Usando a diagonalização, calcule $A^{{@3}}$. Digite os elementos por linhas.",
  "Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom ${@0}$.": "A matriz $B$ é obtida de $A$ trocando as duas primeiras linhas e multiplicando a última linha por ${@0}$.",
  "Matica formy $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A={@3}$.": "Matriz da forma $A={@0}$. $D_1={@1}\\gt 0$ e $D_2={@2}\\gt 0$ não dependem de $a$. Pelo desenvolvimento ao longo da 3ª linha (ou pela regra de Sarrus), $D_3=\\det A={@3}$.",
  "Matica formy: $A={@0}$. Hlavné rohové minory: ${@1}$. Keďže {@2}, forma je <strong>{@3}</strong>.": "Matriz da forma: $A={@0}$. Menores principais líderes: ${@1}$. Como {@2}, a forma é <strong>{@3}</strong>.",
  "Matica nie je trojuholníková, vlastné čísla preto nie sú jej diagonálne prvky. Rozviň $\\det(A-\\lambda I)$ podľa 3. riadka.": "A matriz não é triangular, por isso os autovalores não são os seus elementos diagonais. Desenvolva $\\det(A-\\lambda I)$ ao longo da 3ª linha.",
  "Matica v stupňovitom tvare": "Matriz na forma escalonada",
  "Matice: $A_f={@0}$, $A_g={@1}$. Zloženie má maticu $A_gA_f={@2}$, teda $(g\\circ f)(v)={@3}{@4}={@5}$.": "Matrizes: $A_f={@0}$, $A_g={@1}$. A composta tem matriz $A_gA_f={@2}$, logo $(g\\circ f)(v)={@3}{@4}={@5}$.",
  "Minor $D_3=\\det A$ má tvar $D_2\\,a+K$. Aké je číslo $K$?": "O menor $D_3=\\det A$ tem a forma $D_2\\,a+K$. Qual é o número $K$?",
  "Minor treba ešte vynásobiť samotným prvkom $a_{{@0}{@1}}={@2}$, podľa ktorého rozvíjaš.": "O menor ainda precisa ser multiplicado pelo próprio elemento $a_{{@0}{@1}}={@2}$ pelo qual você desenvolve.",
  "Minor: $M_{{@0}{@1}}={@2}={@3}$. Teda $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.": "Menor: $M_{{@0}{@1}}={@2}={@3}$. Logo, $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.",
  "Mocnina matice sa nepočíta po prvkoch, to platí len pre diagonálnu maticu $D$. Použi $A^k=PD^kP^{-1}$.": "A potência de uma matriz não se calcula elemento a elemento; isso vale só para a matriz diagonal $D$. Use $A^k=PD^kP^{-1}$.",
  "Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.": "Primeiro transponha $B$ (linhas ↔ colunas) e depois calcule elemento a elemento.",
  "Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.": "Primeiro multiplique cada vetor pelo seu coeficiente (cada componente) e depois some as componentes correspondentes.",
  "Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.": "Escreva $v=c_1b_1+c_2b_2+c_3b_3$ por componentes: você obtém um sistema de três equações em que os vetores da base são as colunas da matriz.",
  "Napíš maticu $A-{@0}I$ (prvky po riadkoch).": "Escreva a matriz $A-{@0}I$ (elementos por linhas).",
  "Napíš maticu $B^{T}$ (prvky po riadkoch).": "Escreva a matriz $B^{T}$ (elementos por linhas).",
  "Nekonečne veľa riešení je len pri $h(A)=h(A\\mid b)\\lt 3$. Pozri sa aj na pravú stranu riadku, ktorý je v matici sústavy nulový.": "Há infinitas soluções só quando $h(A)=h(A\\mid b)\\lt 3$. Observe também o lado direito da linha que é nula na matriz do sistema.",
  "Nájdi jedno netriviálne riešenie homogénnej sústavy ${@0}$. (Uznáme ľubovoľný nenulový násobok.)": "Encontre uma solução não trivial do sistema homogêneo ${@0}$. (Aceitamos qualquer múltiplo não nulo.)",
  "Nájdi maticu $X$, pre ktorú platí ${@0}X-A=B^{T}$, ak $A={@1}$ a $B={@2}$. Prvky zadaj po riadkoch.": "Encontre a matriz $X$ que satisfaz ${@0}X-A=B^{T}$, sendo $A={@1}$ e $B={@2}$. Digite os elementos por linhas.",
  "Nájdi nenulové riešenie sústavy $(A-\\lambda I)v=o$ (ľubovoľný nenulový násobok je správne).": "Encontre uma solução não nula do sistema $(A-\\lambda I)v=o$ (qualquer múltiplo não nulo está correto).",
  "Nájdi súradnice vektora $v={@0}$ v báze $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.": "Encontre as coordenadas do vetor $v={@0}$ na base $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ do espaço $\\mathbb{R}^3$. Digite-as na forma “c₁; c₂; c₃”.",
  "Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.": "Encontre os autovetores, monte $P$ e $D$ e use $A^k=PD^kP^{-1}$; a potência de uma matriz diagonal é calculada elemento a elemento na diagonal.",
  "Nájdi vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou.": "Encontre os autovalores da matriz $A={@0}$. Digite-os separados por ponto e vírgula.",
  "Nájdi všetky vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).": "Encontre todos os autovalores da matriz $A={@0}$. Digite-os separados por ponto e vírgula (digite um autovalor múltiplo várias vezes).",
  "Nájdi {@0}. riadok inverznej matice k matici $A={@1}$. Zadaj tri čísla oddelené bodkočiarkou.": "Encontre a {@0}ª linha da matriz inversa da matriz $A={@1}$. Digite três números separados por ponto e vírgula.",
  "Nájdi čísla $\\alpha, \\beta$ také, že ${@0}=\\alpha{@1}+\\beta{@2}$. Zadaj ich v tvare „α; β“.": "Encontre os números $\\alpha, \\beta$ tais que ${@0}=\\alpha{@1}+\\beta{@2}$. Digite-os na forma “α; β”.",
  "Násobenie matíc nie je komutatívne. Z rovnice ${@0}$ treba násobiť maticou $A^{-1}$ {@1}.": "A multiplicação de matrizes não é comutativa. Na equação ${@0}$, é preciso multiplicar por $A^{-1}$ {@1}.",
  "Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.": "As duas condições de uma vez: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Inverta a matriz $(u\\mid v)$ e multiplique pela direita.",
  "Obraz jednotkového štvorca pri zobrazení danom maticou 2×2": "Imagem do quadrado unitário pela transformação dada por uma matriz 2×2",
  "Od počtu neznámych sa neodčíta počet rovníc, ale hodnosť matice sústavy: niektoré rovnice môžu byť závislé.": "Do número de incógnitas não se subtrai o número de equações, mas sim o posto da matriz do sistema: algumas equações podem ser dependentes.",
  "Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.": "Subtraia os vetores componente a componente e use $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.",
  "Ortogonálna projekcia vektora na priamku": "Projeção ortogonal de um vetor sobre uma reta",
  "Over všetky tri podmienky: nulový vektor, uzavretosť na sčítanie a na násobenie číslom. Ak platia všetky, ide o podpriestor.": "Verifique as três condições: vetor nulo, fechamento em relação à soma e à multiplicação por escalar. Se todas valem, trata-se de um subespaço.",
  "Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.": "Verifique se $W$ contém o vetor nulo e se é fechado em relação à soma e à multiplicação por número real. Para refutar, basta um contraexemplo.",
  "Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).": "Após o escalonamento, restam duas equações independentes. Escolha uma incógnita como parâmetro (ou use o produto vetorial de duas linhas).",
  "Podmienka $D = 0$ dáva ${@0}{@1} = {@2}$, teda ${@3} = {@4}$.": "A condição $D = 0$ dá ${@0}{@1} = {@2}$, logo ${@3} = {@4}$.",
  "Podmienka $D_3\\gt 0$ dáva $a\\gt {@0}$, teda $c={@1}$.": "A condição $D_3\\gt 0$ dá $a\\gt {@0}$, logo $c={@1}$.",
  "Porovnaj $A^{T}$ s $A$ aj s $-A$ prvok po prvku. Možno platí jedna z rovností.": "Compare $A^{T}$ com $A$ e com $-A$ elemento a elemento. Talvez valha uma das igualdades.",
  "Porovnaním zložiek dostaneme sústavu ${@0}={@1}$, ${@2}={@3}$.": "Comparando as componentes, obtemos o sistema ${@0}={@1}$, ${@2}={@3}$.",
  "Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.": "Use $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ e $\\det A^{-1}=1/\\det A$.",
  "Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.": "Use a regra de Sarrus: três produtos “para a direita e para baixo” com sinal de mais, três “para a esquerda e para baixo” com sinal de menos.",
  "Použil si algebraické doplnky {@0}. riadka. Adjungovaná matica je transponovaná: {@1}. riadok inverznej matice tvoria doplnky {@2}. stĺpca.": "Você usou os cofatores da {@0}ª linha. A matriz adjunta é transposta: a {@1}ª linha da inversa é formada pelos cofatores da {@2}ª coluna.",
  "Použil si doplnok $A_{{@0}{@1}}$. Pre prvok $(A^{-1})_{{@2}{@3}}$ treba doplnok s vymenenými indexmi, $A_{{@4}{@5}}$.": "Você usou o cofator $A_{{@0}{@1}}$. Para o elemento $(A^{-1})_{{@2}{@3}}$ é preciso o cofator com os índices trocados, $A_{{@4}{@5}}$.",
  "Počítame po zložkách: ${@0}=({@1})={@2}$.": "Calculamos componente a componente: ${@0}=({@1})={@2}$.",
  "Pre $A={@0}$ a $B={@1}$ vypočítaj maticu ${@2}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).": "Para $A={@0}$ e $B={@1}$, calcule a matriz ${@2}$. Digite os elementos por linhas (4 números separados por ponto e vírgula).",
  "Pre ktoré $a$ je $D=0$?": "Para qual $a$ temos $D=0$?",
  "Pre ktoré $t$ je $D=0$?": "Para qual $t$ temos $D=0$?",
  "Pre ktoré $t$ je skalárny súčin nulový? Neceločíselný výsledok zadaj ako zlomok.": "Para qual $t$ o produto escalar é zero? Se o resultado não for inteiro, digite-o como fração.",
  "Pre ktoré $t$ sú vektory $u={@0}$ a $v={@1}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.": "Para qual $t$ os vetores $u={@0}$ e $v={@1}$ são ortogonais? Se o resultado não for inteiro, digite-o como fração.",
  "Pre ktorú hodnotu parametra $a$ má matica $A={@0}$ hodnosť 2?": "Para qual valor do parâmetro $a$ a matriz $A={@0}$ tem posto 2?",
  "Pre ktorú hodnotu parametra $t$ sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé?": "Para qual valor do parâmetro $t$ os vetores $u={@0}$, $v={@1}$ e $w={@2}$ são linearmente dependentes?",
  "Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.": "Para uma matriz $2\\times 2$, resolva $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.",
  "Pre maticu $A={@0}$ vypočítaj prvok $(A^{-1})_{{@1}{@2}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.": "Para a matriz $A={@0}$, calcule o elemento $(A^{-1})_{{@1}{@2}}$ da matriz inversa. Se o resultado não for inteiro, digite-o como fração.",
  "Pre maticu $A={@0}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Para a matriz $A={@0}$, calcule o traço $\\operatorname{tr}(A^{T}A)$.",
  "Prepočítaj determinant Sarrusovým pravidlom: tri súčiny sa sčítajú a tri odčítajú. Nezávislé sú vektory len pri nenulovom determinante.": "Recalcule o determinante pela regra de Sarrus: três produtos são somados e três subtraídos. Os vetores são independentes somente se o determinante for diferente de zero.",
  "Pri matici rádu 3 nestačia dve diagonály ako pri $2\\times 2$. Sarrusovo pravidlo má šesť súčinov: tri kladné a tri záporné.": "Para uma matriz de ordem 3 não bastam duas diagonais como na $2\\times 2$. A regra de Sarrus tem seis produtos: três positivos e três negativos.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa determinant násobí číslom $c^{n}$, nie len $c$.": "Ao multiplicar uma matriz de ordem ${@0}$ pelo número $c$, o determinante é multiplicado por $c^{n}$, e não apenas por $c$.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa číslom $c$ násobí každý z ${@1}$ riadkov: $\\det(cA)=c^{n}\\det A$.": "Ao multiplicar uma matriz de ordem ${@0}$ pelo número $c$, cada uma das ${@1}$ linhas é multiplicada por $c$: $\\det(cA)=c^{n}\\det A$.",
  "Pri prenesení $A$ na druhú stranu sa mení znamienko: ${@0}X=A+B^{T}$.": "Ao passar $A$ para o outro lado, o sinal muda: ${@0}X=A+B^{T}$.",
  "Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.": "Para o termo misto $c\\,x_ix_j$, temos $a_{ij}=a_{ji}=c/2$.",
  "Projekciu na $w_1$ treba od $u_2$ odčítať, nie pripočítať. Over, či je výsledok kolmý na $w_1$.": "A projeção sobre $w_1$ deve ser subtraída de $u_2$, e não somada. Verifique se o resultado é ortogonal a $w_1$.",
  "Prvky sa neumocnili. Diagonálny prvok $(A^{T}A)_{jj}$ je skalárny súčin $j$-tého stĺpca so sebou samým, teda súčet druhých mocnín.": "Os elementos não foram elevados ao quadrado. O elemento diagonal $(A^{T}A)_{jj}$ é o produto escalar da $j$-ésima coluna por ela mesma, ou seja, a soma dos quadrados.",
  "Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.": "O elemento $(A^{T}A)_{jj}$ é o produto escalar da $j$-ésima coluna da matriz $A$ por ela mesma.",
  "Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. {@0}": "As duas primeiras linhas não são proporcionais, por isso $h(A)\\ge 2$. O posto é menor que 3 se e somente se $D=\\det A=0$. {@0}",
  "Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.": "Os dois primeiros menores principais líderes não dependem de $a$; $D_3=\\det A$ é uma função linear de $a$ com coeficiente $D_2$.",
  "Práve jedno riešenie má sústava len pri $h(A)=h(A\\mid b)=3$. Over, či po eliminácii nevznikne v matici sústavy nulový riadok.": "O sistema tem solução única só quando $h(A)=h(A\\mid b)=3$. Verifique se, após a eliminação, não surge uma linha nula na matriz do sistema.",
  "Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.": "Com operações elementares sobre as linhas, zere os elementos abaixo dos pivôs e conte as linhas não nulas.",
  "Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.": "As soluções de um sistema homogêneo com $n$ incógnitas formam um subespaço de dimensão $n-h(A)$.",
  "Riešenie je $X={@0}={@1}={@2}$.": "A solução é $X={@0}={@1}={@2}$.",
  "Riešime $(A-\\lambda I)v=o$, kde $A-{@0}I={@1}$. {@2} Skúška: $A{@3}={@4}={@5}\\cdot{@6}$.": "Resolvemos $(A-\\lambda I)v=o$, em que $A-{@0}I={@1}$. {@2} Verificação: $A{@3}={@4}={@5}\\cdot{@6}$.",
  "Rotácia útvaru okolo počiatku": "Rotação de uma figura em torno da origem",
  "Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>{@0}<br>Spätné dosadzovanie – {@1}": "A equação $c_1b_1+c_2b_2+c_3b_3=v$ é um sistema cuja matriz tem os vetores da base nas colunas:<br>{@0}<br>Substituição regressiva – {@1}",
  "Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.": "Multiplique a equação por $A^{-1}$ pela direita: $X=BA^{-1}$.",
  "Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.": "Multiplique a equação por $A^{-1}$ pela esquerda: $X=A^{-1}B$.",
  "Rozhodni, aká je matica $A={@0}$.": "Decida que tipo de matriz é $A={@0}$.",
  "Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.": "Desenvolva o determinante ao longo de uma linha ou coluna que tenha apenas um elemento não nulo. Não se esqueça do sinal $(-1)^{i+j}$.",
  "Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.": "Desenvolvimento de $\\det(A-\\lambda I)$ ao longo da 3ª linha: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.",
  "Rozvoj determinantu podľa 3. riadka dáva $D=Ca+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "O desenvolvimento do determinante ao longo da 3ª linha dá $D=Ca+D_0$. Qual é o coeficiente $C$ (o cofator do elemento com o parâmetro)?",
  "Rozvoj podľa 3. riadka dáva $D=Ct+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "O desenvolvimento ao longo da 3ª linha dá $D=Ct+D_0$. Qual é o coeficiente $C$ (o cofator do elemento com o parâmetro)?",
  "Rozvoj podľa 3. riadka: $D = {@0}$, kde ${@1}$. Teda $D = {@2}$.": "Desenvolvimento ao longo da 3ª linha: $D = {@0}$, em que ${@1}$. Logo, $D = {@2}$.",
  "Rozvojom podľa 3. riadka dostaneš činiteľ $(c-\\lambda)$. Aké je $c$?": "Desenvolvendo ao longo da 3ª linha, você obtém o fator $(c-\\lambda)$. Quanto vale $c$?",
  "Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.": "Leve a matriz aumentada à forma escalonada e calcule as incógnitas de baixo para cima.",
  "S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.": "Trate a equação matricial como uma equação comum: isole $X$ e depois calcule elemento a elemento.",
  "Sarrusovo pravidlo pre determinant 3×3": "Regra de Sarrus para o determinante 3×3",
  "Sarrusovo pravidlo: $\\det A={@0}$.": "Regra de Sarrus: $\\det A={@0}$.",
  "Sarrusovo pravidlo: tri súčiny na diagonálach doprava dole so znamienkom plus, tri doľava dole so znamienkom mínus.": "Regra de Sarrus: três produtos nas diagonais para a direita e para baixo com sinal de mais, três para a esquerda e para baixo com sinal de menos.",
  "Semidefinitná forma má $\\det A=0$, teda aspoň jedno vlastné číslo nulové. Skontroluj determinant.": "Uma forma semidefinida tem $\\det A=0$, ou seja, pelo menos um autovalor nulo. Confira o determinante.",
  "Skalárny súčin $\\langle u, v\\rangle$ má tvar $at+b$. Aký je koeficient $a$?": "O produto escalar $\\langle u, v\\rangle$ tem a forma $at+b$. Qual é o coeficiente $a$?",
  "Skalárny súčin treba ešte vydeliť číslom $\\langle u, u\\rangle=\\|u\\|^2$.": "O produto escalar ainda precisa ser dividido por $\\langle u, u\\rangle=\\|u\\|^2$.",
  "Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.": "As colunas da matriz da transformação são as imagens dos vetores $e_1=(1, 0)$ e $e_2=(0, 1)$. À composição “primeiro $f$, depois $g$” corresponde o produto $A_gA_f$.",
  "Stĺpec pravých strán patrí do {@0}. <em>stĺpca</em> determinantu, nie do {@1}. riadka.": "A coluna dos termos independentes vai para a {@0}ª <em>coluna</em> do determinante, e não para a {@1}ª linha.",
  "Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.": "Critério de Sylvester: $D_1\\gt 0$ vale sempre; a condição vem de $D_2=\\det A\\gt 0$.",
  "Symetrická matica spĺňa $a_{ij}=a_{ji}$ pre všetky dvojice prvkov súmerných podľa hlavnej diagonály. Porovnaj ich jednu po druhej.": "Uma matriz simétrica satisfaz $a_{ij}=a_{ji}$ para todos os pares de elementos simétricos em relação à diagonal principal. Compare-os um a um.",
  "Sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé, alebo nezávislé?": "Os vetores $u={@0}$, $v={@1}$ e $w={@2}$ são linearmente dependentes ou independentes?",
  "Sú vektory lineárne závislé, alebo nezávislé?": "Os vetores são linearmente dependentes ou independentes?",
  "Súradnice vektora v báze b₁, b₂": "Coordenadas de um vetor na base b₁, b₂",
  "Sústava je ${@0}={@1}$, ${@2}={@3}$. Vypočítaj jej determinant $D$.": "O sistema é ${@0}={@1}$, ${@2}={@3}$. Calcule o seu determinante $D$.",
  "Sústava nemá riešenie, len keď vznikne riadok $(0\\ 0\\ 0\\mid c)$ s $c\\neq 0$, teda $h(A)\\neq h(A\\mid b)$.": "O sistema não tem solução somente quando surge uma linha $(0\\ 0\\ 0\\mid c)$ com $c\\neq 0$, ou seja, $h(A)\\neq h(A\\mid b)$.",
  "Súčiny na diagonálach smerom doľava dole sa od kladných členov odčítajú, nie pripočítajú.": "Os produtos nas diagonais para a esquerda e para baixo são subtraídos dos termos positivos, e não somados.",
  "Sčítaj ich: aký je vektor ${@0}$?": "Some-os: qual é o vetor ${@0}$?",
  "Teda {@0}. riadok matice $A^{-1}$ je $\\frac{1}{{@1}}({@2})={@3}$.": "Logo, a {@0}ª linha da matriz $A^{-1}$ é $\\frac{1}{{@1}}({@2})={@3}$.",
  "To je $\\dim\\operatorname{Im}f=h(A)$. Dimenzia jadra je počet stĺpcov mínus hodnosť.": "Isso é $\\dim\\operatorname{Im}f=h(A)$. A dimensão do núcleo é o número de colunas menos o posto.",
  "To je dimenzia celého priestoru $\\mathbb{R}^{{@0}}$. Podpriestor môže mať menšiu dimenziu, rozhoduje hodnosť.": "Essa é a dimensão de todo o espaço $\\mathbb{R}^{{@0}}$. Um subespaço pode ter dimensão menor; quem decide é o posto.",
  "To je dimenzia jadra. Dimenzia obrazu sa rovná hodnosti matice.": "Essa é a dimensão do núcleo. A dimensão da imagem é igual ao posto da matriz.",
  "To je hodnosť matice sústavy. Dimenzia priestoru riešení je počet voľných neznámych, $n-h(A)$.": "Esse é o posto da matriz do sistema. A dimensão do espaço de soluções é o número de incógnitas livres, $n-h(A)$.",
  "To je počet riadkov pôvodnej matice. Hodnosť je počet nenulových riadkov až po prevedení do stupňovitého tvaru.": "Esse é o número de linhas da matriz original. O posto é o número de linhas não nulas só depois de levar à forma escalonada.",
  "To je počet stĺpcov. Hodnosť je počet nenulových riadkov stupňovitého tvaru.": "Esse é o número de colunas. O posto é o número de linhas não nulas da forma escalonada.",
  "To je počet vektorov. Niektoré z nich môžu byť lineárnou kombináciou ostatných; dimenzia je hodnosť matice z nich zostavenej.": "Esse é o número de vetores. Alguns deles podem ser combinação linear dos outros; a dimensão é o posto da matriz formada por eles.",
  "Toto je projekcia vektora $u$ na smer $v$. Premietame $v$ na smer $u$, výsledok je preto násobkom vektora $u$.": "Essa é a projeção do vetor $u$ na direção de $v$. Projetamos $v$ na direção de $u$, por isso o resultado é múltiplo do vetor $u$.",
  "Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.": "Transponha a matriz e compare-a com $A$ e com $-A$. Observe também a diagonal.",
  "Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi": "Três possibilidades para um sistema de duas equações com duas incógnitas",
  "Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.": "Três vetores em $\\mathbb{R}^3$ são linearmente independentes se e somente se o determinante da matriz formada por eles é diferente de zero.",
  "Uhol priamky θ (°)": "Ângulo da reta θ (°)",
  "Uhol φ (°)": "Ângulo φ (°)",
  "Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.": "Leve a matriz aumentada à forma escalonada e compare $h(A)$ com $h(A\\mid b)$ e com o número de incógnitas.",
  "Uprav rozšírenú maticu na stupňovitý tvar. Aká je hodnosť matice sústavy $h(A)$?": "Leve a matriz aumentada à forma escalonada. Qual é o posto da matriz do sistema $h(A)$?",
  "Uprav rozšírenú maticu na stupňovitý tvar. Z posledného riadku vypočítaj $x_3$.": "Leve a matriz aumentada à forma escalonada. Da última linha, calcule $x_3$.",
  "Urči definitnosť kvadratickej formy $Q={@0}$ (vyber najpresnejšiu možnosť).": "Classifique a forma quadrática $Q={@0}$ (escolha a opção mais precisa).",
  "Urči dimenziu podpriestoru $W=\\mathcal{L}({@0})$ priestoru $\\mathbb{R}^{{@1}}$.": "Determine a dimensão do subespaço $W=\\mathcal{L}({@0})$ do espaço $\\mathbb{R}^{{@1}}$.",
  "Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.": "Determine a dimensão do subespaço $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.",
  "Urči hodnosť matice $A={@0}$.": "Determine o posto da matriz $A={@0}$.",
  "Urči číslo $c$ (prípadne ako zlomok).": "Determine o número $c$ (se necessário, como fração).",
  "V menovateli sú normy $\\|u\\|$ a $\\|v\\|$, nie ich druhé mocniny.": "No denominador estão as normas $\\|u\\|$ e $\\|v\\|$, e não os seus quadrados.",
  "V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.": "Na terceira linha há dois zeros – desenvolva $\\det(A-\\lambda I)$ ao longo dela e resolva o determinante $2\\times 2$ restante como uma equação do segundo grau.",
  "V {@0}. riadku je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto riadka dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "Na {@0}ª linha, o único elemento não nulo é $a_{{@1}{@2}}={@3}$, por isso o desenvolvimento de Laplace ao longo dessa linha dá $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "V {@0}. stĺpci je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto stĺpca dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "Na {@0}ª coluna, o único elemento não nulo é $a_{{@1}{@2}}={@3}$, por isso o desenvolvimento de Laplace ao longo dessa coluna dá $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "Vektor $v={@0}$ najprv zobrazíme zobrazením $f$: {@1}, a výsledok potom zobrazením $g$: {@2}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.": "Primeiro aplicamos ao vetor $v={@0}$ a transformação $f$: {@1}, e depois aplicamos ao resultado a transformação $g$: {@2}. Determine a imagem $(g\\circ f)(v)$ na forma “x; y”.",
  "Vektory bázy patria do <em>stĺpcov</em> matice sústavy, nie do riadkov: $i$-ta rovnica porovnáva $i$-te zložky.": "Os vetores da base vão nas <em>colunas</em> da matriz do sistema, e não nas linhas: a $i$-ésima equação compara as $i$-ésimas componentes.",
  "Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.": "Os vetores são ortogonais se e somente se o seu produto escalar é zero.",
  "Vektory sú závislé práve vtedy, keď $D={@0}=0$. {@1} Pre $t={@2}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.": "Os vetores são dependentes se e somente se $D={@0}=0$. {@1} Para $t={@2}$, $w$ é combinação linear dos vetores $u$ e $v$.",
  "Vektory zapíš do riadkov matice a urči jej hodnosť.": "Escreva os vetores nas linhas de uma matriz e determine o seu posto.",
  "Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: ${@0}={@1}$.": "Escrevemos os vetores nas linhas de uma matriz e calculamos o determinante pela regra de Sarrus: ${@0}={@1}$.",
  "Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U={@0}$ a $P={@1}$. Keďže $\\det U={@2}$, je $U^{-1}={@3}$ a $A=PU^{-1}={@4}{@5}={@6}$.": "Escrevemos os vetores nas colunas: $A\\,U=P$, em que $U={@0}$ e $P={@1}$. Como $\\det U={@2}$, temos $U^{-1}={@3}$ e $A=PU^{-1}={@4}{@5}={@6}$.",
  "Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.": "Os autovetores são as soluções não nulas do sistema homogêneo $(A-\\lambda I)v=o$.",
  "Vlastné vektory: ${@0}$ pre $\\lambda={@1}$ a ${@2}$ pre $\\lambda={@3}$. Teda $P={@4}$, $D={@5}$, $\\det P={@6}$ a $P^{-1}={@7}$.": "Autovetores: ${@0}$ para $\\lambda={@1}$ e ${@2}$ para $\\lambda={@3}$. Logo, $P={@4}$, $D={@5}$, $\\det P={@6}$ e $P^{-1}={@7}$.",
  "Vlastné čísla sú prvky diagonály len pri trojuholníkovej matici. Tu rieš charakteristickú rovnicu $\\det(A-\\lambda I)=0$.": "Os autovalores são os elementos da diagonal só no caso de uma matriz triangular. Aqui, resolva a equação característica $\\det(A-\\lambda I)=0$.",
  "Vo vete o dimenzii je dimenzia vzoru, teda počet stĺpcov ${@0}$, nie počet riadkov.": "No teorema do núcleo e da imagem aparece a dimensão do domínio, ou seja, o número de colunas ${@0}$, e não o número de linhas.",
  "Vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$.": "Multiplicar uma linha por ${@0}$ multiplica o determinante por ${@1}$.",
  "Vypočítaj $(A^{-1})_{{@0}{@1}}$. Neceločíselný výsledok zadaj ako zlomok.": "Calcule $(A^{-1})_{{@0}{@1}}$. Se o resultado não for inteiro, digite-o como fração.",
  "Vypočítaj $A=PU^{-1}$ (prvky po riadkoch).": "Calcule $A=PU^{-1}$ (elementos por linhas).",
  "Vypočítaj $A^{-1}$ (prvky po riadkoch).": "Calcule $A^{-1}$ (elementos por linhas).",
  "Vypočítaj $A^{{@0}}=PD^{{@1}}P^{-1}$ (prvky po riadkoch).": "Calcule $A^{{@0}}=PD^{{@1}}P^{-1}$ (elementos por linhas).",
  "Vypočítaj $X={@0}$ (prvky po riadkoch).": "Calcule $X={@0}$ (elementos por linhas).",
  "Vypočítaj $\\cos\\varphi$ (ako zlomok).": "Calcule $\\cos\\varphi$ (como fração).",
  "Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u={@0}$ a $v={@1}$. Výsledok zadaj ako zlomok.": "Calcule $\\cos\\varphi$, em que $\\varphi$ é o ângulo entre os vetores $u={@0}$ e $v={@1}$. Digite o resultado como fração.",
  "Vypočítaj $\\det A$.": "Calcule $\\det A$.",
  "Vypočítaj $\\langle u, u\\rangle$.": "Calcule $\\langle u, u\\rangle$.",
  "Vypočítaj $\\langle u, v\\rangle$.": "Calcule $\\langle u, v\\rangle$.",
  "Vypočítaj $\\langle u_2, w_1\\rangle$, kde $w_1=u_1$.": "Calcule $\\langle u_2, w_1\\rangle$, em que $w_1=u_1$.",
  "Vypočítaj $\\langle v, u\\rangle$.": "Calcule $\\langle v, u\\rangle$.",
  "Vypočítaj $\\langle w_1, w_1\\rangle$.": "Calcule $\\langle w_1, w_1\\rangle$.",
  "Vypočítaj $\\|u\\|$.": "Calcule $\\|u\\|$.",
  "Vypočítaj $\\|v\\|$.": "Calcule $\\|v\\|$.",
  "Vypočítaj $c_1$ a zadaj všetky súradnice.": "Calcule $c_1$ e digite todas as coordenadas.",
  "Vypočítaj $c_2$.": "Calcule $c_2$.",
  "Vypočítaj $f(v)$.": "Calcule $f(v)$.",
  "Vypočítaj $g\\bigl(f(v)\\bigr)$.": "Calcule $g\\bigl(f(v)\\bigr)$.",
  "Vypočítaj $x_{{@0}}$. Neceločíselný výsledok zadaj ako zlomok.": "Calcule $x_{{@0}}$. Se o resultado não for inteiro, digite-o como fração.",
  "Vypočítaj algebraické doplnky {@0}. stĺpca: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.": "Calcule os cofatores da {@0}ª coluna: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.",
  "Vypočítaj algebraický doplnok $A_{{@0}{@1}}$.": "Calcule o cofator $A_{{@0}{@1}}$.",
  "Vypočítaj determinant $D$ matice sústavy.": "Calcule o determinante $D$ da matriz do sistema.",
  "Vypočítaj determinant $D_\\alpha$ (prvý stĺpec nahradíš pravými stranami).": "Calcule o determinante $D_\\alpha$ (substitua a primeira coluna pelos termos independentes).",
  "Vypočítaj determinant $D_\\beta$ (druhý stĺpec nahradíš pravými stranami).": "Calcule o determinante $D_\\beta$ (substitua a segunda coluna pelos termos independentes).",
  "Vypočítaj determinant $D_{{@0}}$.": "Calcule o determinante $D_{{@0}}$.",
  "Vypočítaj determinant ${@0}$.": "Calcule o determinante ${@0}$.",
  "Vypočítaj determinant matice $A={@0}$.": "Calcule o determinante da matriz $A={@0}$.",
  "Vypočítaj diagonálny prvok $(A^{T}A)_{{@0}{@1}}$.": "Calcule o elemento diagonal $(A^{T}A)_{{@0}{@1}}$.",
  "Vypočítaj hlavný rohový minor $D_{@0}$.": "Calcule o menor principal líder $D_{@0}$.",
  "Vypočítaj inverznú maticu k $U={@0}$ (prvky po riadkoch).": "Calcule a matriz inversa de $U={@0}$ (elementos por linhas).",
  "Vypočítaj maticu $A+B^{T}$ (prvky po riadkoch).": "Calcule a matriz $A+B^{T}$ (elementos por linhas).",
  "Vypočítaj maticu $X$ (prvky po riadkoch).": "Calcule a matriz $X$ (elementos por linhas).",
  "Vypočítaj maticu ${@0}$ (prvky po riadkoch).": "Calcule a matriz ${@0}$ (elementos por linhas).",
  "Vypočítaj minor $M_{{@0}{@1}}$ (determinant po vynechaní {@2}. riadka a {@3}. stĺpca).": "Calcule o menor $M_{{@0}{@1}}$ (o determinante após eliminar a {@2}ª linha e a {@3}ª coluna).",
  "Vypočítaj ortogonálnu projekciu vektora $v={@0}$ na smer vektora $u={@1}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).": "Calcule a projeção ortogonal do vetor $v={@0}$ na direção do vetor $u={@1}$. Digite as componentes separadas por ponto e vírgula (frações na forma $p/q$).",
  "Vypočítaj rohový minor $D_2$.": "Calcule o menor principal líder $D_2$.",
  "Vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Calcule o traço $\\operatorname{tr}(A^{T}A)$.",
  "Vypočítaj stopu $\\operatorname{tr}A$.": "Calcule o traço $\\operatorname{tr}A$.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doprava dole.": "Calcule a soma dos três produtos nas diagonais para a direita e para baixo.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doľava dole.": "Calcule a soma dos três produtos nas diagonais para a esquerda e para baixo.",
  "Vypočítaj vektor ${@0}u$.": "Calcule o vetor ${@0}u$.",
  "Vypočítaj vektor ${@0}{@1}v$.": "Calcule o vetor ${@0}{@1}v$.",
  "Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u={@0}$ a $v={@1}$.": "Calcule a distância $\\|u-v\\|$ entre os vetores $u={@0}$ e $v={@1}$.",
  "Vyrieš charakteristickú rovnicu $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Zadaj vlastné čísla.": "Resolva a equação característica $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Digite os autovalores.",
  "Vyrieš maticovú rovnicu ${@0}$, kde $A={@1}$ a $B={@2}$. Prvky matice $X$ zadaj po riadkoch.": "Resolva a equação matricial ${@0}$, em que $A={@1}$ e $B={@2}$. Digite os elementos da matriz $X$ por linhas.",
  "Výmena riadkov mení znamienko a vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$": "A troca de linhas muda o sinal e multiplicar uma linha por ${@0}$ multiplica o determinante por ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$",
  "Z prvého riadku vypočítaj $x_1$ a zadaj celé riešenie.": "Da primeira linha, calcule $x_1$ e digite a solução completa.",
  "Z rovnice $AU=P$ treba násobiť maticou $U^{-1}$ sprava: $A=PU^{-1}$. Násobenie matíc nie je komutatívne.": "Na equação $AU=P$, é preciso multiplicar por $U^{-1}$ pela direita: $A=PU^{-1}$. A multiplicação de matrizes não é comutativa.",
  "Z rovnice $X=\\tfrac{1}{{@0}}(A+B^{T})$. Máme $B^{T}={@1}$, $A+B^{T}={@2}$, teda $X={@3}$.": "Da equação, $X=\\tfrac{1}{{@0}}(A+B^{T})$. Temos $B^{T}={@1}$, $A+B^{T}={@2}$, logo $X={@3}$.",
  "Z {@0}. riadku: ${@1}=0$, preto je vlastný vektor násobkom ${@2}$.": "Da {@0}ª linha: ${@1}=0$, por isso o autovetor é múltiplo de ${@2}$.",
  "Zabudol si transponovať maticu $B$: v $B^{T}$ sú riadky matice $B$ zapísané ako stĺpce.": "Você esqueceu de transpor a matriz $B$: em $B^{T}$, as linhas da matriz $B$ aparecem como colunas.",
  "Zabudol si transponovať maticu $B$: v rovnici je $B^{T}$.": "Você esqueceu de transpor a matriz $B$: na equação aparece $B^{T}$.",
  "Zabudol si vektory vynásobiť ich koeficientmi. Každú zložku vektora $u$ aj $v$ najprv vynásob príslušným číslom.": "Você esqueceu de multiplicar os vetores pelos seus coeficientes. Primeiro multiplique cada componente de $u$ e de $v$ pelo número correspondente.",
  "Zadaj $\\alpha$ a $\\beta$.": "Digite $\\alpha$ e $\\beta$.",
  "Zadaj jedno netriviálne riešenie (uznáme ľubovoľný nenulový násobok).": "Digite uma solução não trivial (aceitamos qualquer múltiplo não nulo).",
  "Zadaj projekciu $\\operatorname{proj}_u v$ (zlomky v tvare $p/q$).": "Digite a projeção $\\operatorname{proj}_u v$ (frações na forma $p/q$).",
  "Zadaj smerový vektor jadra (ľubovoľný nenulový násobok je správne).": "Digite o vetor diretor do núcleo (qualquer múltiplo não nulo está correto).",
  "Zadaj vektor $w_2$.": "Digite o vetor $w_2$.",
  "Zadaj vlastný vektor k $\\lambda={@0}$ (ľubovoľný nenulový násobok).": "Digite um autovetor associado a $\\lambda={@0}$ (qualquer múltiplo não nulo).",
  "Zadaj všetky vlastné čísla matice $A$.": "Digite todos os autovalores da matriz $A$.",
  "Zadaj {@0}. riadok matice $A^{-1}$.": "Digite a {@0}ª linha da matriz $A^{-1}$.",
  "Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.": "Escreva a igualdade por componentes – você obtém um sistema de duas equações para $\\alpha$ e $\\beta$.",
  "Zobrazenia si použil v opačnom poradí. Najprv sa na $v$ použije $f$, preto je matica zloženia $A_gA_f$ (matica $A_f$ stojí pri vektore).": "Você aplicou as transformações na ordem inversa. Primeiro aplica-se $f$ a $v$, por isso a matriz da composta é $A_gA_f$ (a matriz $A_f$ fica junto ao vetor).",
  "Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A={@0}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).": "A transformação $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ é dada por $f(x)=Ax$, em que $A={@0}$. O núcleo $\\operatorname{Ker}f$ é uma reta. Encontre o seu vetor diretor (qualquer múltiplo não nulo está correto).",
  "Zobrazenie $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ je dané maticou $A={@2}$. Urči $\\dim\\operatorname{{@3}}f$.": "A transformação $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ é dada pela matriz $A={@2}$. Determine $\\dim\\operatorname{{@3}}f$.",
  "Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.": "Monte a matriz simétrica da forma (nos termos mistos, metade do coeficiente) e calcule os menores principais líderes.",
  "Zostav sústavu (vektory bázy v stĺpcoch) a uprav ju na stupňovitý tvar. Z posledného riadku vypočítaj $c_3$.": "Monte o sistema (vetores da base nas colunas) e leve-o à forma escalonada. Da última linha, calcule $c_3$.",
  "Zvyšný činiteľ je charakteristický polynóm ľavej hornej podmatice $2\\times 2$. Aká je jej stopa?": "O fator restante é o polinômio característico da submatriz $2\\times 2$ superior esquerda. Qual é o seu traço?",
  "Záporne definitná je forma len vtedy, keď sa znamienka rohových minorov striedajú a $D_1\\lt 0$.": "A forma é definida negativa somente se os sinais dos menores principais líderes se alternam e $D_1\\lt 0$.",
  "Závislé sú vektory len vtedy, keď je determinant nulový. Prepočítaj ho Sarrusovým pravidlom a pozor na znamienka.": "Os vetores são dependentes somente se o determinante é zero. Recalcule-o pela regra de Sarrus e cuidado com os sinais.",
  "ani symetrická, ani antisymetrická": "nem simétrica, nem antissimétrica",
  "antisymetrická": "antissimétrica",
  "indefinitná": "indefinida",
  "je podpriestor": "é subespaço",
  "je to lineárny obal vektorov $(1, {@0}, 0)$ a $({@1}, 0, 1)$": "é o espaço gerado pelos vetores $(1, {@0}, 0)$ e $({@1}, 0, 1)$",
  "je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia": "é o conjunto solução de uma equação linear homogênea – a soma de soluções e o múltiplo de uma solução são novamente soluções",
  "je to množina riešení homogénnej sústavy (priamka cez počiatok)": "é o conjunto solução de um sistema homogêneo (uma reta pela origem)",
  "jeden parameter": "um parâmetro",
  "kladne definitná": "definida positiva",
  "kladne semidefinitná": "semidefinida positiva",
  "kolmá projekcia na os $x$": "projeção ortogonal sobre o eixo $x$",
  "kolmá projekcia na os $y$": "projeção ortogonal sobre o eixo $y$",
  "komplexné vlastné čísla – žiadny reálny vlastný smer": "autovalores complexos – nenhuma direção própria real",
  "lineárne nezávislé": "linearmente independentes",
  "lineárne závislé": "linearmente dependentes",
  "napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie": "por exemplo, $(1, 0, 0)$ e $(0, 1, 0)$ pertencem a ele, mas a sua soma $(1, 1, 0)$ não – não é fechado em relação à soma",
  "napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom": "por exemplo, $(1, 0, 0)$ pertence a ele, mas $(-1)\\cdot(1, 0, 0)$ não – não é fechado em relação à multiplicação por número",
  "napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$": "por exemplo, $(1, 1, 0)$ pertence a ele, mas $2\\cdot(1, 1, 0)=(2, 2, 0)$ não, pois $2\\neq 4$",
  "nekladné": "não positivos",
  "nenulové riadky": "linhas não nulas",
  "nenulový riadok": "linha não nula",
  "neobsahuje nulový vektor ($0\\neq {@0}$)": "não contém o vetor nulo ($0\\neq {@0}$)",
  "neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka ${@0}\\neq 0$": "não contém o vetor nulo: a primeira componente é 0 só para $s=0$, mas então a segunda componente é ${@0}\\neq 0$",
  "neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická": "não vale nem $A^{T}=A$, nem $A^{T}=-A$, logo a matriz não é nem simétrica, nem antissimétrica",
  "nezáporné": "não negativos",
  "nie je podpriestor": "não é subespaço",
  "osová súmernosť podľa osi $x$": "reflexão em relação ao eixo $x$",
  "osová súmernosť podľa osi $y$": "reflexão em relação ao eixo $y$",
  "osová súmernosť podľa priamky $y=-x$": "reflexão em relação à reta $y=-x$",
  "osová súmernosť podľa priamky $y=x$": "reflexão em relação à reta $y=x$",
  "platí $A^{T}=-A$, teda matica je antisymetrická": "vale $A^{T}=-A$, logo a matriz é antissimétrica",
  "platí $A^{T}=A$, teda matica je symetrická": "vale $A^{T}=A$, logo a matriz é simétrica",
  "práve jedno riešenie": "exatamente uma solução",
  "rotácia o $180^\\circ$": "rotação de $180^\\circ$",
  "rotácia o $90^\\circ$ proti smeru hodinových ručičiek": "rotação de $90^\\circ$ no sentido anti-horário",
  "rotácia o $90^\\circ$ v smere hodinových ručičiek": "rotação de $90^\\circ$ no sentido horário",
  "rovnoľahlosť so stredom v počiatku a koeficientom $2$": "homotetia de centro na origem e razão $2$",
  "skosenie $(x, y)\\mapsto(x+y, y)$": "cisalhamento $(x, y)\\mapsto(x+y, y)$",
  "sprava": "pela direita",
  "symetrická": "simétrica",
  "súradnice v báze B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) v štandardnej báze": "coordenadas na base B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) na base canônica",
  "teda $\\alpha=\\frac{{@0}}{{@1}}={@2}$ a $\\beta=\\frac{{@3}}{{@4}}={@5}$.": "logo, $\\alpha=\\frac{{@0}}{{@1}}={@2}$ e $\\beta=\\frac{{@3}}{{@4}}={@5}$.",
  "vedúce prvky sú zvýraznené, pod schodmi sú len nuly": "os pivôs estão destacados; abaixo dos degraus há só zeros",
  "všetky rohové minory sú kladné": "todos os menores principais líderes são positivos",
  "z {@0}. riadku: ${@1} = {@2}$": "da {@0}ª linha: ${@1} = {@2}$",
  "znamienka rohových minorov sa striedajú ({@0})": "os sinais dos menores principais líderes se alternam ({@0})",
  "záporne definitná": "definida negativa",
  "záporne semidefinitná": "semidefinida negativa",
  "zľava": "pela esquerda",
  "{@0}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: ${@1}\\times{@2}={@3}${@4}. Všetky riešenia sú $t\\cdot{@5}$, $t\\in\\mathbb{R}$.": "{@0}<br>$h(A)=2\\lt 3$, as soluções formam uma reta (um parâmetro). A solução é ortogonal às duas linhas não nulas da forma escalonada, por isso a obtemos como o seu produto vetorial: ${@1}\\times{@2}={@3}${@4}. Todas as soluções são $t\\cdot{@5}$, $t\\in\\mathbb{R}$.",
  "{@0}<br>$h(A)={@1}$, teda $\\dim\\operatorname{Im}f={@2}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.": "{@0}<br>$h(A)={@1}$, logo $\\dim\\operatorname{Im}f={@2}$ e, pelo teorema do núcleo e da imagem, $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.",
  "{@0}<br>Podľa Frobeniovej vety: {@1}.": "{@0}<br>Pelo teorema de Rouché–Capelli: {@1}.",
  "{@0}<br>Spätné dosadzovanie – {@1}": "{@0}<br>Substituição regressiva – {@1}",
  "Úpravou: {@0}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom ${@1}\\times{@2}={@3}${@4}.": "Escalonando: {@0}<br>O posto é 2, a solução é ortogonal às duas linhas não nulas, logo é múltipla de ${@1}\\times{@2}={@3}${@4}.",
  "Číslo $\\lambda={@0}$ je vlastným číslom matice $A={@1}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).": "O número $\\lambda={@0}$ é autovalor da matriz $A={@1}$. Encontre um autovetor associado (qualquer múltiplo não nulo está correto).",
  "Štvorcová matica $A$ rádu ${@0}$ má $\\det A={@1}$.{@2} Vypočítaj ${@3}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.": "A matriz quadrada $A$ de ordem ${@0}$ tem $\\det A={@1}$.{@2} Calcule ${@3}$. Se o resultado não for inteiro, digite-o como fração, por exemplo $-3/4$.",
  "Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.": "Uma matriz quadrada de ordem 3 tem posto 3 se e somente se o seu determinante é diferente de zero.",
  "− súčiny na oranžových diagonálach": "− produtos nas diagonais laranja",
  "nekonečne veľa riešení": "infinitas soluções",
  "žiadne riešenie": "nenhuma solução",
  "jedno riešenie": "uma solução",
  ", po úprave ${@0}$": ", após simplificar, ${@0}$",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "Esse é o quadrado da distância. Ainda é preciso extrair a raiz do resultado.",
  "nenulových riadkov": "linhas não nulas"
 }
});
