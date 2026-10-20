/* Español: preklad js/rocniky/v1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/es/v1/ – needitovať ručne. */
CONTENT_I18N.add('es', {
 "decimal": ",",
 "lessons": {
  "v1-vektory": {
   "title": "Vectores en Rⁿ y dependencia lineal",
   "summary": "Operaciones con vectores, combinación lineal, envoltura lineal, dependencia e independencia lineal.",
   "theory": [
    "<p>Un <strong>vector</strong> de $\\mathbb{R}^n$ es una $n$-tupla ordenada de números reales $u=(u_1, u_2, \\dots, u_n)$. Los vectores se suman y se multiplican por un número real (escalar) componente a componente: $u+v=(u_1+v_1, \\dots, u_n+v_n)$ y $c\\,u=(c\\,u_1, \\dots, c\\,u_n)$. El vector nulo se denota $o=(0, \\dots, 0)$.</p>",
    "<p>Una <strong>combinación lineal</strong> de los vectores $u_1, \\dots, u_k$ es todo vector de la forma $c_1u_1+c_2u_2+\\dots+c_ku_k$, donde $c_1, \\dots, c_k\\in\\mathbb{R}$ son los coeficientes. El conjunto de todas las combinaciones lineales se llama <strong>envoltura lineal</strong> (o subespacio generado) y se denota $\\mathcal{L}(u_1, \\dots, u_k)$.</p>",
    {
     "fig": "v1-linkomb",
     "caption": "Los vectores $u=(2, 1)$ y $v=(-1, 2)$ no son paralelos, por eso todo vector del plano se puede escribir como $\\alpha u+\\beta v$. Mueve los coeficientes $\\alpha$ y $\\beta$ y observa cómo cambia el vector resultante (naranja)."
    },
    "<p>Los vectores $u_1, \\dots, u_k$ son <strong>linealmente independientes</strong> si de la igualdad $c_1u_1+\\dots+c_ku_k=o$ se deduce $c_1=\\dots=c_k=0$. En caso contrario son <strong>linealmente dependientes</strong>, lo que ocurre si y solo si al menos uno de ellos se puede expresar como combinación lineal de los demás.</p>\n       <p>En la práctica escribimos los vectores como filas de una matriz $A$: son independientes si y solo si $h(A)=k$ (el rango $h(A)$ se estudia en las próximas lecciones). Para $n$ vectores de $\\mathbb{R}^n$ basta comprobar si $\\det A\\neq 0$. Más de $n$ vectores de $\\mathbb{R}^n$ son siempre linealmente dependientes, y todo conjunto que contenga el vector nulo es dependiente.</p>"
   ],
   "examples": [
    {
     "task": "Determina si los vectores $u=(1, 2, 0)$, $v=(0, 1, 1)$ y $w=(2, 5, 1)$ son linealmente dependientes.",
     "steps": [
      "Escribimos los vectores como filas de una matriz y calculamos el determinante desarrollando por la 1.ª fila:",
      "$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.",
      "El determinante es nulo, así que los vectores son <strong>linealmente dependientes</strong>. En efecto, $w=2u+v$."
     ]
    },
    {
     "task": "Expresa el vector $w=(4, 7)$ como combinación lineal de los vectores $u=(2, 1)$ y $v=(-1, 2)$.",
     "steps": [
      "Buscamos $\\alpha, \\beta$ tales que $\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$, es decir, el sistema $2\\alpha-\\beta=4$, $\\alpha+2\\beta=7$.",
      "De la segunda ecuación $\\alpha=7-2\\beta$; sustituyendo, $14-4\\beta-\\beta=4$, luego $\\beta=2$ y $\\alpha=3$.",
      "<strong>Resultado:</strong> $w=3u+2v$."
     ]
    }
   ]
  },
  "v1-operacie": {
   "title": "Matrices y operaciones con matrices",
   "summary": "Dimensión de una matriz, matrices especiales, suma, producto por un escalar, traspuesta y traza.",
   "theory": [
    "<p>Una <strong>matriz</strong> de dimensión $m\\times n$ es una tabla rectangular $A=(a_{ij})$ de números reales con $m$ filas y $n$ columnas. Dos matrices son iguales si tienen la misma dimensión y los mismos elementos en las mismas posiciones. Una matriz de dimensión $n\\times n$ es <strong>cuadrada</strong> de orden $n$; los elementos $a_{11}, a_{22}, \\dots, a_{nn}$ forman su <strong>diagonal principal</strong>. Son importantes la matriz <strong>identidad</strong> $I$ (unos en la diagonal y ceros en el resto), la matriz <strong>nula</strong> $O$, la matriz <strong>diagonal</strong> y la matriz <strong>triangular superior (inferior)</strong> (ceros debajo (encima) de la diagonal).</p>",
    "<p>La <strong>suma</strong> de matrices de la misma dimensión y el <strong>producto</strong> de una matriz por un número se calculan elemento a elemento: $(A+B)_{ij}=a_{ij}+b_{ij}$, $(cA)_{ij}=c\\,a_{ij}$. Se cumple $A+B=B+A$, $(A+B)+C=A+(B+C)$, $c(A+B)=cA+cB$, $(c+d)A=cA+dA$. Las matrices de dimensión $m\\times n$ con estas operaciones forman un espacio vectorial.</p>",
    "<p>La matriz <strong>traspuesta</strong> $A^{T}$ de una matriz de dimensión $m\\times n$ es de dimensión $n\\times m$ y $(A^{T})_{ij}=a_{ji}$: las filas se convierten en columnas. Se cumple $(A^{T})^{T}=A$, $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$ y $(AB)^{T}=B^{T}A^{T}$ (el orden se invierte).</p>\n       <p>Una matriz cuadrada es <strong>simétrica</strong> si $A^{T}=A$, y <strong>antisimétrica</strong> si $A^{T}=-A$ (entonces tiene ceros en la diagonal). Toda matriz cuadrada se puede descomponer de forma única como la suma $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$ de una parte simétrica y una antisimétrica. La <strong>traza</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$ es la suma de los elementos de la diagonal; para cualquier matriz, $\\operatorname{tr}(A^{T}A)$ es la suma de los cuadrados de todos sus elementos.</p>"
   ],
   "examples": [
    {
     "task": "Para $A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$ y $B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$ calcula $2A-B^{T}$.",
     "steps": [
      "$B$ es de dimensión $3\\times 2$, luego $B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$ es de dimensión $2\\times 3$, como $A$.",
      "$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.",
      "<strong>Resultado:</strong> $2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$."
     ]
    },
    {
     "task": "Descompón la matriz $A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$ como suma de una matriz simétrica y una antisimétrica.",
     "steps": [
      "$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.",
      "Parte simétrica: $S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$.",
      "Parte antisimétrica: $K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$. Comprobación: $S+K=A$."
     ]
    }
   ]
  },
  "v1-hodnost": {
   "title": "Rango de una matriz y operaciones por filas",
   "summary": "Operaciones elementales por filas, forma escalonada, eliminación gaussiana y rango de una matriz.",
   "theory": [
    "<p>Las <strong>operaciones elementales por filas</strong> son: (1) intercambiar dos filas, (2) multiplicar una fila por un número no nulo, (3) sumar a una fila un múltiplo de otra fila. Si $B$ se obtiene de $A$ mediante un número finito de estas operaciones, escribimos $A\\sim B$ (las matrices son equivalentes por filas). La notación $R_2-3R_1$ significa que sustituimos la segunda fila por la diferencia entre la segunda fila y el triple de la primera.</p>",
    "<p>Una matriz está en <strong>forma escalonada</strong> si cada fila no nula empieza con más ceros que la fila de encima y las filas nulas están al final. El primer elemento no nulo de una fila es su <strong>pivote</strong>. La <strong>eliminación gaussiana</strong> lleva cualquier matriz a forma escalonada: en la columna actual elegimos un pivote y, mediante la operación (3), anulamos todo lo que hay debajo de él. Si además convertimos los pivotes en 1 y anulamos también los elementos que están encima de ellos, obtenemos la forma escalonada reducida (eliminación de Gauss-Jordan).</p>",
    {
     "fig": "v1-stupne",
     "caption": "Forma escalonada: los pivotes se desplazan hacia la derecha a medida que bajamos. La matriz tiene tres filas no nulas, por eso $h(A)=3$."
    },
    "<p>El <strong>rango</strong> $h(A)$ es el número máximo de filas linealmente independientes de la matriz $A$. Las operaciones por filas no cambian el rango, por eso $h(A)$ es el número de filas no nulas de la forma escalonada. Se cumple $h(A)=h(A^{T})$ (el rango por filas es igual al rango por columnas) y $h(A)\\le\\min(m, n)$. Para una matriz cuadrada de orden $n$ se cumple: $h(A)=n\\iff\\det A\\neq 0\\iff A$ es regular (invertible).</p>"
   ],
   "examples": [
    {
     "task": "Halla el rango de la matriz $A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$.",
     "steps": [
      "$R_2-2R_1$, $R_3-3R_1$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.",
      "La forma escalonada tiene dos filas no nulas, luego $h(A)=2$."
     ]
    },
    {
     "task": "¿Para qué valores de $a$ tiene la matriz $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$ rango 2?",
     "steps": [
      "$R_2-R_1$, $R_3-2R_1$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.",
      "Para $a=4$ la última fila es nula y $h(A)=2$; para $a\\neq 4$ es $h(A)=3$."
     ]
    }
   ]
  },
  "v1-determinant": {
   "title": "Determinante 3×3 y desarrollo de Laplace",
   "summary": "Regla de Sarrus, menores y adjuntos (cofactores), desarrollo de Laplace, propiedades del determinante.",
   "theory": [
    "<p>El <strong>determinante</strong> de una matriz cuadrada de orden $n$ es el número $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$, donde sumamos sobre las $n!$ permutaciones $\\pi$ del conjunto $\\{1, \\dots, n\\}$. Para $n=3$ obtenemos la <strong>regla de Sarrus</strong>:</p>\n       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>",
    {
     "fig": "v1-sarrus",
     "caption": "Regla de Sarrus: a la derecha de la matriz copiamos sus dos primeras columnas. Los productos de las diagonales que bajan hacia la derecha se toman con signo más, y los de las que bajan hacia la izquierda, con signo menos. Vale <strong>solo</strong> para matrices de orden 3."
    },
    "<p>El <strong>menor</strong> $M_{ij}$ es el determinante de la matriz que se obtiene al suprimir la $i$-ésima fila y la $j$-ésima columna, y el <strong>adjunto</strong> (cofactor) es $A_{ij}=(-1)^{i+j}M_{ij}$. <strong>Desarrollo de Laplace</strong> por la $i$-ésima fila: $\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$ (análogamente por una columna). Conviene desarrollar por la fila o la columna con más ceros.</p>",
    "<p><strong>Propiedades:</strong> $\\det A^{T}=\\det A$; intercambiar dos filas cambia el signo; multiplicar una fila por un número $c$ multiplica el determinante por $c$, por eso $\\det(cA)=c^{n}\\det A$; sumar a una fila un múltiplo de otra no cambia el determinante; una matriz con una fila nula o con dos filas proporcionales tiene determinante 0; el determinante de una matriz triangular es el producto de los elementos de la diagonal. Para matrices del mismo orden se cumple $\\det(AB)=\\det A\\cdot\\det B$, y si $A$ es regular, $\\det A^{-1}=\\frac{1}{\\det A}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcula $\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "Términos positivos: $2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$.",
      "Términos negativos: $3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$.",
      "<strong>Resultado:</strong> $\\det A=2-13=-11$."
     ]
    },
    {
     "task": "Calcula $\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$.",
     "steps": [
      "En la 3.ª fila el único elemento no nulo es $a_{32}=3$. Desarrollo por la 3.ª fila: $\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$.",
      "$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$ (regla de Sarrus).",
      "<strong>Resultado:</strong> $\\det A=-3\\cdot 6=-18$."
     ]
    }
   ]
  },
  "v1-inverzna": {
   "title": "Matriz inversa: Gauss-Jordan y matriz adjunta",
   "summary": "Existencia de la matriz inversa, cálculo por el método de Gauss-Jordan y mediante la matriz adjunta, ecuaciones matriciales.",
   "theory": [
    "<p>La matriz <strong>inversa</strong> de una matriz cuadrada $A$ de orden $n$ es la matriz $A^{-1}$ tal que $AA^{-1}=A^{-1}A=I$. Existe si y solo si $\\det A\\neq 0$ (la matriz es <strong>regular</strong>); una matriz con determinante nulo es <strong>singular</strong>. Se cumple $(A^{-1})^{-1}=A$, $(A^{T})^{-1}=(A^{-1})^{T}$ y $(AB)^{-1}=B^{-1}A^{-1}$.</p>",
    "<p><strong>Método de Gauss-Jordan:</strong> mediante operaciones por filas transformamos la matriz ampliada $(A\\mid I)$ en la forma $(I\\mid B)$; entonces $B=A^{-1}$. Si durante las operaciones aparece una fila nula a la izquierda, la matriz $A$ es singular.</p>",
    "<p>La <strong>matriz adjunta</strong> $\\operatorname{adj}A$ es la traspuesta de la matriz de adjuntos: $(\\operatorname{adj}A)_{ij}=A_{ji}$. Se cumple $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$, es decir, $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: ¡cuidado con el intercambio de índices! Para $n=2$ obtenemos la conocida fórmula $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    "<p><strong>Ecuaciones matriciales:</strong> si $A$ es regular, la ecuación $AX=B$ tiene la solución única $X=A^{-1}B$ y la ecuación $XA=B$, la solución $X=BA^{-1}$. Como el producto de matrices no es conmutativo, importa el lado por el que multiplicamos.</p>"
   ],
   "examples": [
    {
     "task": "Halla por el método de Gauss-Jordan la matriz inversa de $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$; $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "$R_2-R_3$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$; $R_1-2R_2$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "<strong>Resultado:</strong> $A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$ (comprobación: $AA^{-1}=I$)."
     ]
    },
    {
     "task": "Para $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$ calcula el elemento $(A^{-1})_{13}$.",
     "steps": [
      "$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.",
      "$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$, donde $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$.",
      "<strong>Resultado:</strong> $(A^{-1})_{13}=\\frac{1}{8}$."
     ]
    }
   ]
  },
  "v1-sustavy": {
   "title": "Sistemas de ecuaciones lineales",
   "summary": "Eliminación gaussiana, teorema de Rouché-Frobenius, regla de Cramer y sistemas homogéneos.",
   "theory": [
    "<p>Un sistema de $m$ ecuaciones lineales con $n$ incógnitas se escribe en forma matricial como $Ax=b$, donde $A$ es la <strong>matriz del sistema</strong> (matriz de coeficientes), $x=(x_1, \\dots, x_n)^{T}$ y $b$ es la columna de términos independientes; $(A\\mid b)$ es la <strong>matriz ampliada</strong>. El sistema es <strong>homogéneo</strong> si $b=o$.</p>",
    "<p><strong>Teorema de Rouché-Frobenius:</strong> el sistema $Ax=b$ tiene solución si y solo si $h(A)=h(A\\mid b)$. Si $h(A)=h(A\\mid b)=n$, la solución es única; si $h(A)=h(A\\mid b)=h\\lt n$, hay infinitas soluciones que dependen de $n-h$ parámetros.</p>",
    {
     "fig": "v1-priamky",
     "caption": "Dos ecuaciones con dos incógnitas son dos rectas del plano: se cortan, son paralelas distintas o coinciden."
    },
    "<p><strong>Eliminación gaussiana:</strong> llevamos la matriz ampliada a forma escalonada y calculamos las incógnitas por sustitución regresiva, de abajo arriba; las incógnitas sin pivote son parámetros libres. <strong>Regla de Cramer:</strong> si $A$ es cuadrada y $D=\\det A\\neq 0$, entonces $x_i=\\frac{D_i}{D}$, donde $D_i$ es el determinante de la matriz que se obtiene de $A$ al sustituir la $i$-ésima columna por la columna $b$.</p>\n       <p>Un <strong>sistema homogéneo</strong> tiene siempre la solución trivial $x=o$. Existe una solución no trivial si y solo si $h(A)\\lt n$ (para una matriz cuadrada, si y solo si $\\det A=0$). El conjunto de todas las soluciones es un subespacio de $\\mathbb{R}^n$ de dimensión $n-h(A)$.</p>"
   ],
   "examples": [
    {
     "task": "Resuelve el sistema $x_1+x_2+x_3=6$, $2x_1-x_2+x_3=3$, $x_1+2x_2-x_3=2$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$; $R_2-2R_1$, $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.",
      "$R_2\\leftrightarrow R_3$, después $R_3+3R_2$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$.",
      "Hacia atrás: $x_3=3$, $x_2=-4+2\\cdot 3=2$, $x_1=6-2-3=1$. <strong>Solución:</strong> $(1, 2, 3)$."
     ]
    },
    {
     "task": "Resuelve el sistema $x_1+2x_2-x_3=1$, $2x_1+4x_2+x_3=5$.",
     "steps": [
      "$R_2-2R_1$: $\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$, luego $h(A)=h(A\\mid b)=2\\lt 3$: infinitas soluciones con un parámetro.",
      "De la 2.ª fila, $x_3=1$. La incógnita $x_2$ no tiene pivote; tomamos $x_2=t$; de la 1.ª fila, $x_1=1-2t+1=2-2t$.",
      "<strong>Solución:</strong> $(2-2t, t, 1)$, $t\\in\\mathbb{R}$."
     ]
    }
   ]
  },
  "v1-priestory": {
   "title": "Espacio vectorial, base y dimensión",
   "summary": "Espacio y subespacio vectorial, base, dimensión y coordenadas de un vector en una base.",
   "theory": [
    "<p>Un <strong>espacio vectorial</strong> sobre $\\mathbb{R}$ es un conjunto $V$ con una suma y un producto por números reales que no se salen de $V$ y que cumplen las reglas habituales: conmutatividad y asociatividad de la suma, existencia del vector nulo y del vector opuesto, leyes distributivas, $(cd)u=c(du)$ y $1\\cdot u=u$. Ejemplos: $\\mathbb{R}^n$, las matrices de dimensión $m\\times n$, los polinomios de grado como máximo $n$ ($P_n$), las funciones reales en un intervalo.</p>",
    "<p>Un <strong>subespacio</strong> es un subconjunto no vacío $W\\subseteq V$ cerrado para la suma y el producto por un número; entonces necesariamente $o\\in W$. Son subespacios de $\\mathbb{R}^3$, por ejemplo, las rectas y los planos que pasan por el origen, el conjunto de soluciones de un sistema homogéneo y toda envoltura lineal. Un plano que no pasa por el origen no es un subespacio.</p>",
    "<p>Una <strong>base</strong> del espacio $V$ es un conjunto de vectores linealmente independiente cuya envoltura lineal es todo $V$. Todas las bases tienen el mismo número de elementos: la <strong>dimensión</strong> $\\dim V$. Por ejemplo, $\\dim\\mathbb{R}^n=n$ (base canónica $e_1, \\dots, e_n$), $\\dim P_n=n+1$ y el espacio de matrices $m\\times n$ tiene dimensión $mn$. En un espacio de dimensión $n$, cualesquiera $n$ vectores linealmente independientes forman una base, y $\\dim\\mathcal{L}(u_1, \\dots, u_k)$ es el rango de la matriz con filas $u_1, \\dots, u_k$.</p>",
    {
     "fig": "v1-baza",
     "caption": "La base $b_1=(2, 1)$, $b_2=(-1, 2)$ crea una red «oblicua». Las coordenadas $(c_1, c_2)$ de un vector en la base $B$ indican cuántos pasos hay que dar en la dirección de $b_1$ y cuántos en la dirección de $b_2$."
    },
    "<p>Si $B=(b_1, \\dots, b_n)$ es una base, todo vector se puede escribir de forma <strong>única</strong> como $v=c_1b_1+\\dots+c_nb_n$; los números $(c_1, \\dots, c_n)$ son las <strong>coordenadas</strong> del vector $v$ en la base $B$. Las hallamos resolviendo el sistema cuya matriz tiene los vectores de la base en las columnas y cuyo término independiente es $v$.</p>"
   ],
   "examples": [
    {
     "task": "Halla las coordenadas del vector $v=(3, 0, 1)$ en la base $b_1=(1, 0, 1)$, $b_2=(0, 1, 1)$, $b_3=(1, 1, 0)$.",
     "steps": [
      "De $v=c_1b_1+c_2b_2+c_3b_3$ obtenemos el sistema $c_1+c_3=3$, $c_2+c_3=0$, $c_1+c_2=1$.",
      "Restando las dos primeras ecuaciones, $c_1-c_2=3$; junto con $c_1+c_2=1$ tenemos $c_1=2$, $c_2=-1$ y $c_3=1$.",
      "<strong>Resultado:</strong> $(v)_B=(2, -1, 1)$. Comprobación: $2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$."
     ]
    },
    {
     "task": "Halla una base y la dimensión del subespacio $W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$.",
     "steps": [
      "La matriz del sistema $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$ está en forma escalonada y tiene rango 2, por eso $\\dim W=4-2=2$.",
      "Incógnitas libres: $x_3=s$, $x_4=t$. Entonces $x_2=-t$ y $x_1=x_3-x_2=s+t$, es decir, $x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$.",
      "<strong>Resultado:</strong> base $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$, $\\dim W=2$."
     ]
    }
   ]
  },
  "v1-zobrazenia": {
   "title": "Aplicaciones lineales y sus matrices",
   "summary": "Aplicación lineal, su matriz, composición de aplicaciones, transformaciones geométricas del plano, núcleo e imagen.",
   "theory": [
    "<p>Una aplicación $f:V\\to W$ entre espacios vectoriales es <strong>lineal</strong> si $f(u+v)=f(u)+f(v)$ y $f(cu)=c\\,f(u)$ para todos los vectores $u, v$ y números $c$; entonces $f(o)=o$. Toda aplicación lineal $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ tiene la forma $f(x)=Ax$ para una única matriz $A$ de dimensión $m\\times n$, cuyas columnas son las imágenes de los vectores de la base canónica: $A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$. A la aplicación compuesta $g\\circ f$ (primero $f$, después $g$) le corresponde el producto de matrices $A_gA_f$.</p>",
    "<table class=\"tbl tbl-auto\"><tr><th>transformación en $\\mathbb{R}^2$</th><th>matriz</th></tr>\n       <tr><td>giro de ángulo $\\varphi$</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>\n       <tr><td>simetría respecto al eje $x$</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>\n       <tr><td>simetría respecto a la recta $y=x$</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>proyección ortogonal sobre el eje $x$</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>homotecia de razón $k$</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>",
    {
     "fig": "v1-rotacia",
     "caption": "Giro de ángulo $\\varphi$: las imágenes de los vectores $e_1$ (azul) y $e_2$ (verde) son exactamente las columnas de la matriz de giro. La figura discontinua es la original y la continua, su imagen."
    },
    "<p>El <strong>núcleo</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$ es el conjunto de soluciones del sistema homogéneo $Ax=o$; la <strong>imagen</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$ es la envoltura lineal de las columnas de la matriz $A$. Ambos son subespacios y $\\dim\\operatorname{Im}f=h(A)$. <strong>Teorema de la dimensión (del núcleo y la imagen):</strong> $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$. La aplicación es inyectiva si y solo si $\\operatorname{Ker}f=\\{o\\}$.</p>"
   ],
   "examples": [
    {
     "task": "Halla la matriz de la transformación que primero gira un vector $90^\\circ$ en sentido antihorario y después le aplica la simetría respecto al eje $x$. ¿Cuál es la imagen del vector $(2, 1)$?",
     "steps": [
      "Giro: $R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$, simetría: $S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$. La composición (primero $R$, después $S$) tiene la matriz $SR$.",
      "$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$: es la simetría respecto a la recta $y=-x$.",
      "<strong>Imagen:</strong> $SR\\,(2, 1)^{T}=(-1, -2)^{T}$."
     ]
    },
    {
     "task": "Halla el núcleo y la dimensión de la imagen de la aplicación $f(x)=Ax$, donde $A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "La tercera fila es la suma de las dos primeras, por eso $h(A)=2$ y $\\dim\\operatorname{Im}f=2$.",
      "Núcleo: $x_1+x_2=0$, $x_2+x_3=0$. Para $x_3=t$ es $x_2=-t$, $x_1=t$, luego $\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$.",
      "Comprobación con el teorema de la dimensión: $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$."
     ]
    }
   ]
  },
  "v1-vlastne": {
   "title": "Valores propios y vectores propios",
   "summary": "Polinomio característico, valores y vectores propios de matrices 2×2 y 3×3, diagonalización y potencias de una matriz.",
   "theory": [
    "<p>Un número $\\lambda$ es un <strong>valor propio</strong> (autovalor) de la matriz cuadrada $A$ si existe un vector no nulo $v$ con $Av=\\lambda v$; el vector $v$ es entonces un <strong>vector propio</strong> (autovector) asociado a $\\lambda$. Geométricamente: la aplicación $x\\mapsto Ax$ conserva la dirección del vector $v$ y solo lo estira $\\lambda$ veces (si $\\lambda\\lt 0$, además lo invierte).</p>",
    "<p>Los valores propios son las raíces del <strong>polinomio característico</strong> $p(\\lambda)=\\det(A-\\lambda I)$. Para una matriz $2\\times 2$ es $p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$. En general, la suma de los valores propios es igual a $\\operatorname{tr}A$ y su producto, a $\\det A$; una matriz triangular tiene los valores propios en la diagonal. Los vectores propios asociados a $\\lambda$ son las soluciones no nulas del sistema homogéneo $(A-\\lambda I)v=o$.</p>",
    {
     "fig": "v1-matica",
     "caption": "La matriz $A$ transforma el cuadrado unidad en un paralelogramo de lados $Ae_1$ y $Ae_2$ (las columnas de la matriz); su área es $|\\det A|$. Las rectas naranjas son las direcciones propias: los vectores sobre ellas se transforman en múltiplos de sí mismos."
    },
    "<p><strong>Diagonalización:</strong> una matriz $A$ de orden $n$ es diagonalizable si $A=PDP^{-1}$, donde $D$ es diagonal. Esto ocurre si y solo si $A$ tiene $n$ vectores propios linealmente independientes; estos forman las columnas de la matriz $P$ y en la diagonal de $D$ están los valores propios correspondientes en el mismo orden. Basta con que $A$ tenga $n$ valores propios distintos; toda matriz simétrica real es diagonalizable. Aplicación: $A^k=PD^kP^{-1}$.</p>"
   ],
   "examples": [
    {
     "task": "Halla los valores propios y los vectores propios de la matriz $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "$\\operatorname{tr}A=7$, $\\det A=10$, luego $\\lambda^2-7\\lambda+10=0$ y $\\lambda_1=2$, $\\lambda_2=5$.",
      "$\\lambda=5$: $A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$, ecuación $-v_1+v_2=0$, vector propio $(1, 1)$.",
      "$\\lambda=2$: $A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$, ecuación $2v_1+v_2=0$, vector propio $(1, -2)$."
     ]
    },
    {
     "task": "Mediante la diagonalización, calcula $A^3$ para $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "Del ejemplo anterior, $P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$, $D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$ y $P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$.",
      "$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.",
      "<strong>Resultado:</strong> $A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$."
     ]
    }
   ]
  },
  "v1-skalarny": {
   "title": "Producto escalar, ortogonalidad y proyección",
   "summary": "Producto escalar y norma, ángulo entre vectores, proyección ortogonal y proceso de Gram-Schmidt.",
   "theory": [
    "<p>El <strong>producto escalar usual</strong> en $\\mathbb{R}^n$ es $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$. Es simétrico, lineal en cada argumento y $\\langle u, u\\rangle\\gt 0$ para $u\\neq o$. La <strong>norma</strong> (longitud) es $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$ y la distancia entre vectores es $\\|u-v\\|$. Se cumple la <strong>desigualdad de Cauchy-Schwarz</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$, por eso está bien definido el ángulo $\\varphi$ entre vectores no nulos: $\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$.</p>",
    "<p>Los vectores son <strong>ortogonales</strong> ($u\\perp v$) si $\\langle u, v\\rangle=0$. Un sistema de vectores no nulos ortogonales entre sí es linealmente independiente; si además tienen norma 1, es <strong>ortonormal</strong>. La <strong>proyección ortogonal</strong> del vector $v$ sobre la dirección $u\\neq o$ es $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$; el vector $v-\\operatorname{proj}_u v$ es perpendicular a $u$ y su norma es la distancia del punto $v$ a la recta $\\mathcal{L}(u)$.</p>",
    {
     "fig": "v1-projekcia",
     "caption": "Proyección del vector $v$ (azul) sobre la recta de dirección $u=(\\cos\\theta, \\sin\\theta)$: el vector verde es $\\operatorname{proj}_u v$ y el segmento discontinuo es perpendicular a la recta."
    },
    "<p>El <strong>proceso de Gram-Schmidt</strong> crea, a partir de vectores linealmente independientes $u_1, \\dots, u_k$, vectores ortogonales con la misma envoltura lineal: $w_1=u_1$ y $w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$, es decir, a cada vector le restamos sus proyecciones sobre los vectores ya obtenidos. Dividiendo por las normas, $e_j=w_j/\\|w_j\\|$, obtenemos una base ortonormal.</p>"
   ],
   "examples": [
    {
     "task": "Halla la proyección ortogonal del vector $v=(3, 1, 2)$ sobre la dirección $u=(1, 1, 0)$ y la distancia del punto $v$ a la recta $\\mathcal{L}(u)$.",
     "steps": [
      "$\\langle v, u\\rangle=3+1+0=4$, $\\langle u, u\\rangle=2$, luego $\\operatorname{proj}_u v=2u=(2, 2, 0)$.",
      "$v-\\operatorname{proj}_u v=(1, -1, 2)$; comprobación de la perpendicularidad: $\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$.",
      "<strong>Distancia:</strong> $\\|(1, -1, 2)\\|=\\sqrt{6}$."
     ]
    },
    {
     "task": "Ortogonaliza mediante el proceso de Gram-Schmidt los vectores $u_1=(1, 1, 1)$ y $u_2=(1, 2, 3)$.",
     "steps": [
      "$w_1=u_1=(1, 1, 1)$.",
      "$\\langle u_2, w_1\\rangle=6$, $\\langle w_1, w_1\\rangle=3$, luego $w_2=u_2-2w_1=(-1, 0, 1)$; efectivamente, $\\langle w_1, w_2\\rangle=0$.",
      "Base ortonormal: $e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$, $e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$."
     ]
    }
   ]
  },
  "v1-kvadraticke": {
   "title": "Formas cuadráticas y su clasificación",
   "summary": "Matriz de una forma cuadrática, formas definidas, criterio de Sylvester.",
   "theory": [
    "<p>Una <strong>forma cuadrática</strong> en $\\mathbb{R}^n$ es una función $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$, donde $A$ es una matriz simétrica: la <strong>matriz de la forma</strong>. El coeficiente de $x_i^2$ es $a_{ii}$ y el coeficiente de $x_ix_j$ ($i\\neq j$) es $2a_{ij}$. Por ejemplo, $Q=x_1^2+4x_1x_2-3x_2^2$ tiene la matriz $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$.</p>",
    "<p>Una forma (y también su matriz) es <strong>definida positiva</strong> si $Q(x)\\gt 0$ para todo $x\\neq o$; <strong>semidefinida positiva</strong> si $Q(x)\\ge 0$ para todo $x$; análogamente, <strong>definida (semidefinida) negativa</strong>; e <strong>indefinida</strong> si toma valores positivos y negativos. Mediante los valores propios: todos positivos $\\iff$ definida positiva, todos no negativos $\\iff$ semidefinida positiva, de distintos signos $\\iff$ indefinida.</p>",
    "<p><strong>Criterio de Sylvester:</strong> sean $D_1=a_{11}$, $D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$, …, $D_n=\\det A$ los menores principales dominantes. La forma es definida positiva $\\iff D_k\\gt 0$ para todo $k$; definida negativa $\\iff$ los signos alternan $D_1\\lt 0$, $D_2\\gt 0$, $D_3\\lt 0$, … Si $\\det A\\neq 0$ y no se da ninguno de los dos casos, la forma es indefinida. Si $\\det A=0$, los menores dominantes no bastan para decidir la semidefinición: hacen falta los valores propios o todos los menores principales.</p>"
   ],
   "examples": [
    {
     "task": "Clasifica la forma $Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$.",
     "steps": [
      "Matriz de la forma: $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$.",
      "$D_1=2$, $D_2=2\\cdot 1-1\\cdot 1=1$, $D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$.",
      "Todos los menores dominantes son positivos: la forma es <strong>definida positiva</strong>."
     ]
    },
    {
     "task": "¿Para qué valores de $a$ es definida positiva la forma $Q=x^2+4xy+ay^2$?",
     "steps": [
      "$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$, $D_1=1\\gt 0$, $D_2=a-4$.",
      "<strong>Resultado:</strong> la forma es definida positiva exactamente para $a\\gt 4$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.": "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: la $i$-ésima fila de la matriz inversa está formada por los adjuntos de la $i$-ésima <em>columna</em> de la matriz $A$.",
  "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Teda $c={@5}$.": "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Por tanto, $c={@5}$.",
  "$A^{T}={@0}$. Porovnaním s $A$ vidíme, že {@1}.": "$A^{T}={@0}$. Comparando con $A$ vemos que {@1}.",
  "$B^{T}={@0}$, takže ${@1}={@2}={@3}$.": "$B^{T}={@0}$, así que ${@1}={@2}={@3}$.",
  "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Teda $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.": "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Por tanto, $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.",
  "$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>{@0}<br>$h(A)={@1}$, teda $\\dim W={@2}-{@3}={@4}$.": "$W$ es el conjunto de soluciones de un sistema homogéneo, por eso $\\dim W=n-h(A)$. Rango de la matriz del sistema:<br>{@0}<br>$h(A)={@1}$, por tanto $\\dim W={@2}-{@3}={@4}$.",
  "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.": "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; las normas de estos vectores resultan enteras.",
  "$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A={@0}$; obe sú teda {@1} a jedno je nulové": "$\\det A=0$, un valor propio es $0$ y el otro es igual a $\\operatorname{tr}A={@0}$; ambos son, por tanto, {@1} y uno es nulo",
  "$\\det A={@0}$, teda $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.": "$\\det A={@0}$, por tanto $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.",
  "$\\det A={@0}$. Podľa vzorca $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ potrebujeme algebraické doplnky {@3}. stĺpca: ${@4}$.": "$\\det A={@0}$. Según la fórmula $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ necesitamos los adjuntos de la {@3}.ª columna: ${@4}$.",
  "$\\det A={@0}$. Ďalej $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ a ${@5}$. Teda $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.": "$\\det A={@0}$. Además, $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ y ${@5}$. Por tanto, $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.",
  "$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov": "$\\det A\\neq 0$ y no se da ninguno de los casos anteriores",
  "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ a transponovaním sa determinant nemení. Súčin teda obsahuje $\\det A$ dvakrát.": "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ y al trasponer el determinante no cambia. Por tanto, el producto contiene $\\det A$ dos veces.",
  "$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).": "$\\dim\\operatorname{Im}f=h(A)$ y $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ es el número de columnas de la matriz (dimensión del espacio de partida).",
  "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, teda $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.": "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, por tanto $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.",
  "$\\langle u, v\\rangle={@0}={@1}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t={@2}$.": "$\\langle u, v\\rangle={@0}={@1}$. La condición $\\langle u, v\\rangle=0$ da $t={@2}$.",
  "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.": "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.",
  "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.": "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.",
  "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, charakteristická rovnica je ${@2}{@3}=0$.": "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, la ecuación característica es ${@2}{@3}=0$.",
  "$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno": "$h(A)=h(A\\mid b)=3=n$, la solución es única",
  "$h(A)=h(A\\mid b)={@0}\\lt 3$, riešení je nekonečne veľa ({@1})": "$h(A)=h(A\\mid b)={@0}\\lt 3$, hay infinitas soluciones ({@1})",
  "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sústava nemá riešenie": "$h(A)={@0}\\neq h(A\\mid b)={@1}$, el sistema no tiene solución",
  "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.": "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.",
  "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, koeficient $\\frac{{@2}}{{@3}}={@4}$.": "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, coeficiente $\\frac{{@2}}{{@3}}={@4}$.",
  "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.": "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; el resultado debe ser perpendicular a $w_1$.",
  "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Skúška: $\\langle w_1, w_2\\rangle={@6}$.": "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Comprobación: $\\langle w_1, w_2\\rangle={@6}$.",
  "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, kde v $D_{{@2}}$ nahradíš {@3}. stĺpec matice sústavy stĺpcom pravých strán.": "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, donde en $D_{{@2}}$ sustituyes la {@3}.ª columna de la matriz del sistema por la columna de términos independientes.",
  "(mení orientáciu)": "(cambia la orientación)",
  "(naozaj ${@0}={@1}{@2} {@3} {@4}{@5}$)": "(en efecto, ${@0}={@1}{@2} {@3} {@4}{@5}$)",
  "+ súčiny na zelených diagonálach": "+ productos de las diagonales verdes",
  ", teda ${@0}{@1} {@2} = {@3}$": ", por tanto ${@0}{@1} {@2} = {@3}$",
  "<strong>Je</strong> podpriestor: {@0}.": "<strong>Es</strong> un subespacio: {@0}.",
  "<strong>Nie je</strong> podpriestor: {@0}.": "<strong>No es</strong> un subespacio: {@0}.",
  "Aká je definitnosť formy?": "¿Cuál es el carácter de la forma?",
  "Aká je dimenzia $W$?": "¿Cuál es la dimensión de $W$?",
  "Aká je dimenzia jadra $\\operatorname{Ker}f$?": "¿Cuál es la dimensión del núcleo $\\operatorname{Ker}f$?",
  "Aká je hodnosť matice $A$?": "¿Cuál es el rango de la matriz $A$?",
  "Aká je hodnosť matice sústavy $h(A)$?": "¿Cuál es el rango de la matriz del sistema $h(A)$?",
  "Aká je hodnosť matice sústavy?": "¿Cuál es el rango de la matriz del sistema?",
  "Aká je hodnosť rozšírenej matice $h(A\\mid b)$?": "¿Cuál es el rango de la matriz ampliada $h(A\\mid b)$?",
  "Aké je znamienko $(-1)^{{@0}+{@1}}$? Zadaj $1$ alebo $-1$.": "¿Cuál es el signo de $(-1)^{{@0}+{@1}}$? Escribe $1$ o $-1$.",
  "Aký je absolútny člen $D_0$?": "¿Cuál es el término independiente $D_0$?",
  "Aký je absolútny člen $b$?": "¿Cuál es el término independiente $b$?",
  "Aký je determinant tejto podmatice?": "¿Cuál es el determinante de esta submatriz?",
  "Algebraický doplnok treba ešte vydeliť determinantom matice $A$.": "Todavía hay que dividir el adjunto entre el determinante de la matriz $A$.",
  "Antisymetrická matica má na diagonále nuly a spĺňa $a_{ij}=-a_{ji}$. Over to pre všetky dvojice.": "Una matriz antisimétrica tiene ceros en la diagonal y cumple $a_{ij}=-a_{ji}$. Compruébalo para todos los pares.",
  "Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).": "No hace falta calcular toda la matriz inversa: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (los índices del adjunto están intercambiados).",
  "Cramerovým pravidlom vypočítaj neznámu $x_{{@0}}$ zo sústavy ${@1}$. Neceločíselný výsledok zadaj ako zlomok.": "Calcula con la regla de Cramer la incógnita $x_{{@0}}$ del sistema ${@1}$. Si el resultado no es entero, escríbelo como fracción.",
  "Cramerovým pravidlom: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,": "Por la regla de Cramer: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,",
  "Dané sú vektory $u={@0}$ a $v={@1}$ v $\\mathbb{R}^{{@2}}$. Vypočítaj vektor ${@3}$. Zložky oddeľ bodkočiarkou.": "Se dan los vectores $u={@0}$ y $v={@1}$ de $\\mathbb{R}^{{@2}}$. Calcula el vector ${@3}$. Separa las componentes con punto y coma.",
  "Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.": "El determinante no es nulo, los vectores son <strong>linealmente independientes</strong>.",
  "Determinant je nulový, vektory sú <strong>lineárne závislé</strong>{@0}.": "El determinante es nulo, los vectores son <strong>linealmente dependientes</strong>{@0}.",
  "Determinant je síce nulový, ale pozri sa na znamienko nenulového vlastného čísla: pri matici $2\\times 2$ sa rovná stope.": "El determinante es nulo, pero fíjate en el signo del valor propio no nulo: en una matriz $2\\times 2$ es igual a la traza.",
  "Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.": "El determinante de la matriz con filas $u, v, w$ es una función lineal del parámetro $t$: desarróllalo por la fila con el parámetro e iguálalo a cero.",
  "Diagonálne prvky matice $D^{{@0}}$?": "¿Elementos diagonales de la matriz $D^{{@0}}$?",
  "Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: ${@0}={@1}={@2}$.": "El elemento diagonal $(A^{T}A)_{jj}$ es la suma de los cuadrados de los elementos de la $j$-ésima columna de $A$, por eso $\\operatorname{tr}(A^{T}A)$ es la suma de los cuadrados de todos los elementos: ${@0}={@1}={@2}$.",
  "Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $\\dim W={@3}$.": "La dimensión de la envoltura lineal es el rango de la matriz cuyas filas son los vectores dados:<br>{@0}<br>La forma escalonada tiene {@1} {@2}, por tanto $\\dim W={@3}$.",
  "Diskriminant ${@0}{@1}$, teda $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, t. j. $\\lambda_1={@4}$ a $\\lambda_2={@5}$.": "Discriminante ${@0}{@1}$, por tanto $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, es decir, $\\lambda_1={@4}$ y $\\lambda_2={@5}$.",
  "Do matice formy patrí mimo diagonály polovica koeficientu pri $xy$, teda ${@0}$, nie ${@1}$.": "Fuera de la diagonal, en la matriz de la forma va la mitad del coeficiente de $xy$, es decir, ${@0}$, no ${@1}$.",
  "Dosaď $x_3$ do predposledného riadku a vypočítaj $x_2$.": "Sustituye $x_3$ en la penúltima fila y calcula $x_2$.",
  "Forma $Q={@0}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "La forma $Q={@0}$ es definida positiva si y solo si $a\\gt c$. Determina el número $c$ (si hace falta, como fracción).",
  "Forma $Q={@0}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "La forma $Q={@0}+ay^2$ es definida positiva si y solo si $a\\gt c$. Determina el número $c$ (si hace falta, como fracción).",
  "Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $h(A)={@3}$.": "Con la eliminación gaussiana llevamos la matriz a forma escalonada:<br>{@0}<br>La forma escalonada tiene {@1} {@2}, por tanto $h(A)={@3}$.",
  "Gaussovou elimináciou vyrieš sústavu ${@0}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.": "Resuelve el sistema ${@0}$ por eliminación gaussiana. Escribe la solución en la forma «x₁; x₂; x₃».",
  "Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1={@0}$ a $u_2={@1}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.": "Ortogonaliza los vectores $u_1={@0}$ y $u_2={@1}$ con el proceso de Gram-Schmidt (en este orden, sin normalizar). Escribe el vector $w_2$.",
  "Hľadaj protipríklad: patrí nulový vektor do $W$? Je súčet dvoch prvkov $W$ opäť v $W$? A ich násobok?": "Busca un contraejemplo: ¿pertenece el vector nulo a $W$? ¿La suma de dos elementos de $W$ está de nuevo en $W$? ¿Y su múltiplo?",
  "Indefinitná forma nadobúda kladné aj záporné hodnoty. Over znamienka rohových minorov podľa Sylvestrovho kritéria.": "Una forma indefinida toma valores positivos y negativos. Comprueba los signos de los menores principales según el criterio de Sylvester.",
  "Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.": "El núcleo es el conjunto de soluciones del sistema homogéneo $Ax=o$. Reduce la matriz y elige una incógnita libre como parámetro.",
  "Jadro je množina riešení sústavy $Ax=o$:<br>{@0}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom ${@1}\\times{@2}={@3}${@4}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.": "El núcleo es el conjunto de soluciones del sistema $Ax=o$:<br>{@0}<br>$h(A)=2$, por tanto $\\dim\\operatorname{Ker}f=3-2=1$. La solución es perpendicular a las dos filas no nulas, por eso es múltiplo de ${@1}\\times{@2}={@3}${@4}. Por tanto, $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.",
  "Je množina $W={@0}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?": "¿Es el conjunto $W={@0}$ un subespacio del espacio vectorial $\\mathbb{R}^3$?",
  "Ker": "Ker",
  "Kladne definitná je forma len vtedy, keď sú všetky hlavné rohové minory kladné.": "Una forma es definida positiva solo si todos los menores principales son positivos.",
  "Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A={@0}$.": "El coeficiente de $x_ix_j$ ($i\\neq j$) se reparte a partes iguales entre $a_{ij}$ y $a_{ji}$, así que $a_{ij}$ es la mitad del coeficiente. Matriz de la forma: $A={@0}$.",
  "Koeficient pri $x_ix_j$ sa v symetrickej matici rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, každý dostane polovicu.": "En la matriz simétrica, el coeficiente de $x_ix_j$ se reparte a partes iguales entre $a_{ij}$ y $a_{ji}$; cada uno recibe la mitad.",
  "Koľko riešení má sústava ${@0}$?": "¿Cuántas soluciones tiene el sistema ${@0}$?",
  "Koľko riešení má sústava?": "¿Cuántas soluciones tiene el sistema?",
  "Kvadratická forma je $Q={@0}$. Urči prvky $a_{12}, a_{13}, a_{23}$ jej symetrickej matice (oddelené bodkočiarkou) (zlomky v tvare $p/q$).": "La forma cuadrática es $Q={@0}$. Determina los elementos $a_{12}, a_{13}, a_{23}$ de su matriz simétrica (separados por punto y coma) (fracciones en la forma $p/q$).",
  "Kvadratická forma je $Q={@0}$. Urči prvok $a_{12}$ jej symetrickej matice (zlomky v tvare $p/q$).": "La forma cuadrática es $Q={@0}$. Determina el elemento $a_{12}$ de su matriz simétrica (fracciones en la forma $p/q$).",
  "Kvadratický činiteľ má $\\operatorname{tr}={@0}$, $\\det={@1}$ a korene ${@2}$ a ${@3}$. Vlastné čísla sú ${@4}$.": "El factor cuadrático tiene $\\operatorname{tr}={@0}$, $\\det={@1}$ y raíces ${@2}$ y ${@3}$. Los valores propios son ${@4}$.",
  "Lineárna kombinácia dvoch vektorov": "Combinación lineal de dos vectores",
  "Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f{@0}={@1}$ a $f{@2}={@3}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.": "La aplicación lineal $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ cumple $f{@0}={@1}$ y $f{@2}={@3}$. Halla la matriz $A$ de la aplicación $f$ (en la base canónica). Escribe los elementos por filas.",
  "Matica $-A^{3}$ je $(-1)\\cdot A^{3}$, a $\\det(-M)=(-1)^{{@0}}\\det M$.": "La matriz $-A^{3}$ es $(-1)\\cdot A^{3}$, y $\\det(-M)=(-1)^{{@0}}\\det M$.",
  "Matica $A={@0}$ má vlastné čísla ${@1}$ a ${@2}$. Pomocou diagonalizácie vypočítaj $A^{{@3}}$. Prvky zadaj po riadkoch.": "La matriz $A={@0}$ tiene valores propios ${@1}$ y ${@2}$. Calcula $A^{{@3}}$ mediante diagonalización. Escribe los elementos por filas.",
  "Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom ${@0}$.": "La matriz $B$ se obtiene de $A$ intercambiando las dos primeras filas y multiplicando la última fila por ${@0}$.",
  "Matica formy $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A={@3}$.": "Matriz de la forma $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ no dependen de $a$. Desarrollando por la 3.ª fila (o por la regla de Sarrus), $D_3=\\det A={@3}$.",
  "Matica formy: $A={@0}$. Hlavné rohové minory: ${@1}$. Keďže {@2}, forma je <strong>{@3}</strong>.": "Matriz de la forma: $A={@0}$. Menores principales: ${@1}$. Como {@2}, la forma es <strong>{@3}</strong>.",
  "Matica nie je trojuholníková, vlastné čísla preto nie sú jej diagonálne prvky. Rozviň $\\det(A-\\lambda I)$ podľa 3. riadka.": "La matriz no es triangular, por eso sus valores propios no son sus elementos diagonales. Desarrolla $\\det(A-\\lambda I)$ por la 3.ª fila.",
  "Matica v stupňovitom tvare": "Matriz en forma escalonada",
  "Matice: $A_f={@0}$, $A_g={@1}$. Zloženie má maticu $A_gA_f={@2}$, teda $(g\\circ f)(v)={@3}{@4}={@5}$.": "Matrices: $A_f={@0}$, $A_g={@1}$. La composición tiene matriz $A_gA_f={@2}$, por tanto $(g\\circ f)(v)={@3}{@4}={@5}$.",
  "Minor $D_3=\\det A$ má tvar $D_2\\,a+K$. Aké je číslo $K$?": "El menor $D_3=\\det A$ tiene la forma $D_2\\,a+K$. ¿Cuál es el número $K$?",
  "Minor treba ešte vynásobiť samotným prvkom $a_{{@0}{@1}}={@2}$, podľa ktorého rozvíjaš.": "Todavía hay que multiplicar el menor por el propio elemento $a_{{@0}{@1}}={@2}$ por el que desarrollas.",
  "Minor: $M_{{@0}{@1}}={@2}={@3}$. Teda $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.": "Menor: $M_{{@0}{@1}}={@2}={@3}$. Por tanto, $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.",
  "Mocnina matice sa nepočíta po prvkoch, to platí len pre diagonálnu maticu $D$. Použi $A^k=PD^kP^{-1}$.": "La potencia de una matriz no se calcula elemento a elemento; eso solo vale para la matriz diagonal $D$. Usa $A^k=PD^kP^{-1}$.",
  "Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.": "Primero traspón $B$ (filas ↔ columnas) y después calcula elemento a elemento.",
  "Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.": "Primero multiplica cada vector por su coeficiente (cada componente) y después suma las componentes correspondientes.",
  "Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.": "Escribe $v=c_1b_1+c_2b_2+c_3b_3$ por componentes: obtienes un sistema de tres ecuaciones en el que los vectores de la base son las columnas de la matriz.",
  "Napíš maticu $A-{@0}I$ (prvky po riadkoch).": "Escribe la matriz $A-{@0}I$ (elementos por filas).",
  "Napíš maticu $B^{T}$ (prvky po riadkoch).": "Escribe la matriz $B^{T}$ (elementos por filas).",
  "Nekonečne veľa riešení je len pri $h(A)=h(A\\mid b)\\lt 3$. Pozri sa aj na pravú stranu riadku, ktorý je v matici sústavy nulový.": "Hay infinitas soluciones solo si $h(A)=h(A\\mid b)\\lt 3$. Fíjate también en el término independiente de la fila que es nula en la matriz del sistema.",
  "Nájdi jedno netriviálne riešenie homogénnej sústavy ${@0}$. (Uznáme ľubovoľný nenulový násobok.)": "Halla una solución no trivial del sistema homogéneo ${@0}$. (Se acepta cualquier múltiplo no nulo.)",
  "Nájdi maticu $X$, pre ktorú platí ${@0}X-A=B^{T}$, ak $A={@1}$ a $B={@2}$. Prvky zadaj po riadkoch.": "Halla la matriz $X$ que cumple ${@0}X-A=B^{T}$, si $A={@1}$ y $B={@2}$. Escribe los elementos por filas.",
  "Nájdi nenulové riešenie sústavy $(A-\\lambda I)v=o$ (ľubovoľný nenulový násobok je správne).": "Halla una solución no nula del sistema $(A-\\lambda I)v=o$ (cualquier múltiplo no nulo es correcto).",
  "Nájdi súradnice vektora $v={@0}$ v báze $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.": "Halla las coordenadas del vector $v={@0}$ en la base $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ del espacio $\\mathbb{R}^3$. Escríbelas en la forma «c₁; c₂; c₃».",
  "Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.": "Halla los vectores propios, forma $P$ y $D$ y usa $A^k=PD^kP^{-1}$; la potencia de una matriz diagonal se calcula elemento a elemento en la diagonal.",
  "Nájdi vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou.": "Halla los valores propios de la matriz $A={@0}$. Escríbelos separados por punto y coma.",
  "Nájdi všetky vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).": "Halla todos los valores propios de la matriz $A={@0}$. Escríbelos separados por punto y coma (un valor propio múltiple escríbelo varias veces).",
  "Nájdi {@0}. riadok inverznej matice k matici $A={@1}$. Zadaj tri čísla oddelené bodkočiarkou.": "Halla la {@0}.ª fila de la matriz inversa de $A={@1}$. Escribe tres números separados por punto y coma.",
  "Nájdi čísla $\\alpha, \\beta$ také, že ${@0}=\\alpha{@1}+\\beta{@2}$. Zadaj ich v tvare „α; β“.": "Halla los números $\\alpha, \\beta$ tales que ${@0}=\\alpha{@1}+\\beta{@2}$. Escríbelos en la forma «α; β».",
  "Násobenie matíc nie je komutatívne. Z rovnice ${@0}$ treba násobiť maticou $A^{-1}$ {@1}.": "La multiplicación de matrices no es conmutativa. En la ecuación ${@0}$ hay que multiplicar por la matriz $A^{-1}$ {@1}.",
  "Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.": "Las dos condiciones a la vez: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Invierte la matriz $(u\\mid v)$ y multiplica por la derecha.",
  "Obraz jednotkového štvorca pri zobrazení danom maticou 2×2": "Imagen del cuadrado unidad por la aplicación dada por una matriz 2×2",
  "Od počtu neznámych sa neodčíta počet rovníc, ale hodnosť matice sústavy: niektoré rovnice môžu byť závislé.": "Del número de incógnitas no se resta el número de ecuaciones, sino el rango de la matriz del sistema: algunas ecuaciones pueden ser dependientes.",
  "Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.": "Resta los vectores componente a componente y usa $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.",
  "Ortogonálna projekcia vektora na priamku": "Proyección ortogonal de un vector sobre una recta",
  "Over všetky tri podmienky: nulový vektor, uzavretosť na sčítanie a na násobenie číslom. Ak platia všetky, ide o podpriestor.": "Comprueba las tres condiciones: vector nulo, cierre respecto a la suma y al producto por un número. Si se cumplen todas, es un subespacio.",
  "Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.": "Comprueba si $W$ contiene el vector nulo y si es cerrado respecto a la suma y al producto por un número real. Para refutarlo basta un contraejemplo.",
  "Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).": "Tras reducir quedan dos ecuaciones independientes. Elige una incógnita como parámetro (o usa el producto vectorial de dos filas).",
  "Podmienka $D = 0$ dáva ${@0}{@1} = {@2}$, teda ${@3} = {@4}$.": "La condición $D = 0$ da ${@0}{@1} = {@2}$, por tanto ${@3} = {@4}$.",
  "Podmienka $D_3\\gt 0$ dáva $a\\gt {@0}$, teda $c={@1}$.": "La condición $D_3\\gt 0$ da $a\\gt {@0}$, por tanto $c={@1}$.",
  "Porovnaj $A^{T}$ s $A$ aj s $-A$ prvok po prvku. Možno platí jedna z rovností.": "Compara $A^{T}$ con $A$ y con $-A$ elemento a elemento. Puede que se cumpla una de las igualdades.",
  "Porovnaním zložiek dostaneme sústavu ${@0}={@1}$, ${@2}={@3}$.": "Comparando componentes obtenemos el sistema ${@0}={@1}$, ${@2}={@3}$.",
  "Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.": "Usa $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ y $\\det A^{-1}=1/\\det A$.",
  "Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.": "Usa la regla de Sarrus: tres productos «hacia abajo a la derecha» con signo más y tres «hacia abajo a la izquierda» con signo menos.",
  "Použil si algebraické doplnky {@0}. riadka. Adjungovaná matica je transponovaná: {@1}. riadok inverznej matice tvoria doplnky {@2}. stĺpca.": "Has usado los adjuntos de la {@0}.ª fila. La matriz adjunta está traspuesta: la {@1}.ª fila de la matriz inversa la forman los adjuntos de la {@2}.ª columna.",
  "Použil si doplnok $A_{{@0}{@1}}$. Pre prvok $(A^{-1})_{{@2}{@3}}$ treba doplnok s vymenenými indexmi, $A_{{@4}{@5}}$.": "Has usado el adjunto $A_{{@0}{@1}}$. Para el elemento $(A^{-1})_{{@2}{@3}}$ hace falta el adjunto con los índices intercambiados, $A_{{@4}{@5}}$.",
  "Počítame po zložkách: ${@0}=({@1})={@2}$.": "Calculamos componente a componente: ${@0}=({@1})={@2}$.",
  "Pre $A={@0}$ a $B={@1}$ vypočítaj maticu ${@2}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).": "Para $A={@0}$ y $B={@1}$ calcula la matriz ${@2}$. Escribe los elementos por filas (4 números separados por punto y coma).",
  "Pre ktoré $a$ je $D=0$?": "¿Para qué $a$ es $D=0$?",
  "Pre ktoré $t$ je $D=0$?": "¿Para qué $t$ es $D=0$?",
  "Pre ktoré $t$ je skalárny súčin nulový? Neceločíselný výsledok zadaj ako zlomok.": "¿Para qué $t$ es nulo el producto escalar? Si el resultado no es entero, escríbelo como fracción.",
  "Pre ktoré $t$ sú vektory $u={@0}$ a $v={@1}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.": "¿Para qué $t$ son ortogonales los vectores $u={@0}$ y $v={@1}$? Si el resultado no es entero, escríbelo como fracción.",
  "Pre ktorú hodnotu parametra $a$ má matica $A={@0}$ hodnosť 2?": "¿Para qué valor del parámetro $a$ tiene la matriz $A={@0}$ rango 2?",
  "Pre ktorú hodnotu parametra $t$ sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé?": "¿Para qué valor del parámetro $t$ son linealmente dependientes los vectores $u={@0}$, $v={@1}$ y $w={@2}$?",
  "Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.": "Para una matriz $2\\times 2$ resuelve $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.",
  "Pre maticu $A={@0}$ vypočítaj prvok $(A^{-1})_{{@1}{@2}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.": "Para la matriz $A={@0}$ calcula el elemento $(A^{-1})_{{@1}{@2}}$ de la matriz inversa. Si el resultado no es entero, escríbelo como fracción.",
  "Pre maticu $A={@0}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Para la matriz $A={@0}$ calcula la traza $\\operatorname{tr}(A^{T}A)$.",
  "Prepočítaj determinant Sarrusovým pravidlom: tri súčiny sa sčítajú a tri odčítajú. Nezávislé sú vektory len pri nenulovom determinante.": "Vuelve a calcular el determinante con la regla de Sarrus: tres productos se suman y tres se restan. Los vectores son independientes solo si el determinante no es nulo.",
  "Pri matici rádu 3 nestačia dve diagonály ako pri $2\\times 2$. Sarrusovo pravidlo má šesť súčinov: tri kladné a tri záporné.": "En una matriz de orden 3 no bastan dos diagonales como en la $2\\times 2$. La regla de Sarrus tiene seis productos: tres positivos y tres negativos.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa determinant násobí číslom $c^{n}$, nie len $c$.": "Al multiplicar una matriz de orden ${@0}$ por un número $c$, el determinante se multiplica por $c^{n}$, no solo por $c$.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa číslom $c$ násobí každý z ${@1}$ riadkov: $\\det(cA)=c^{n}\\det A$.": "Al multiplicar una matriz de orden ${@0}$ por un número $c$, se multiplica por $c$ cada una de las ${@1}$ filas: $\\det(cA)=c^{n}\\det A$.",
  "Pri prenesení $A$ na druhú stranu sa mení znamienko: ${@0}X=A+B^{T}$.": "Al pasar $A$ al otro lado cambia el signo: ${@0}X=A+B^{T}$.",
  "Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.": "Para el término mixto $c\\,x_ix_j$ es $a_{ij}=a_{ji}=c/2$.",
  "Projekciu na $w_1$ treba od $u_2$ odčítať, nie pripočítať. Over, či je výsledok kolmý na $w_1$.": "La proyección sobre $w_1$ hay que restarla de $u_2$, no sumarla. Comprueba si el resultado es perpendicular a $w_1$.",
  "Prvky sa neumocnili. Diagonálny prvok $(A^{T}A)_{jj}$ je skalárny súčin $j$-tého stĺpca so sebou samým, teda súčet druhých mocnín.": "No has elevado los elementos al cuadrado. El elemento diagonal $(A^{T}A)_{jj}$ es el producto escalar de la $j$-ésima columna por sí misma, es decir, la suma de los cuadrados.",
  "Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.": "El elemento $(A^{T}A)_{jj}$ se obtiene como producto escalar de la $j$-ésima columna de $A$ por sí misma.",
  "Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. {@0}": "Las dos primeras filas no son proporcionales, por eso $h(A)\\ge 2$. El rango es menor que 3 si y solo si $D=\\det A=0$. {@0}",
  "Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.": "Los dos primeros menores principales no dependen de $a$; $D_3=\\det A$ es una función lineal de $a$ con coeficiente $D_2$.",
  "Práve jedno riešenie má sústava len pri $h(A)=h(A\\mid b)=3$. Over, či po eliminácii nevznikne v matici sústavy nulový riadok.": "El sistema tiene solución única solo si $h(A)=h(A\\mid b)=3$. Comprueba si tras la eliminación no aparece una fila nula en la matriz del sistema.",
  "Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.": "Con operaciones de fila anula los elementos debajo de los pivotes y cuenta las filas no nulas.",
  "Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.": "Las soluciones de un sistema homogéneo con $n$ incógnitas forman un subespacio de dimensión $n-h(A)$.",
  "Riešenie je $X={@0}={@1}={@2}$.": "La solución es $X={@0}={@1}={@2}$.",
  "Riešime $(A-\\lambda I)v=o$, kde $A-{@0}I={@1}$. {@2} Skúška: $A{@3}={@4}={@5}\\cdot{@6}$.": "Resolvemos $(A-\\lambda I)v=o$, donde $A-{@0}I={@1}$. {@2} Comprobación: $A{@3}={@4}={@5}\\cdot{@6}$.",
  "Rotácia útvaru okolo počiatku": "Giro de una figura alrededor del origen",
  "Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>{@0}<br>Spätné dosadzovanie – {@1}": "La ecuación $c_1b_1+c_2b_2+c_3b_3=v$ es un sistema cuya matriz tiene los vectores de la base en las columnas:<br>{@0}<br>Sustitución hacia atrás: {@1}",
  "Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.": "Multiplica la ecuación por la matriz $A^{-1}$ por la derecha: $X=BA^{-1}$.",
  "Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.": "Multiplica la ecuación por la matriz $A^{-1}$ por la izquierda: $X=A^{-1}B$.",
  "Rozhodni, aká je matica $A={@0}$.": "Decide cómo es la matriz $A={@0}$.",
  "Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.": "Desarrolla el determinante por una fila o columna en la que haya un solo elemento no nulo. No olvides el signo $(-1)^{i+j}$.",
  "Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.": "Desarrollo de $\\det(A-\\lambda I)$ por la 3.ª fila: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.",
  "Rozvoj determinantu podľa 3. riadka dáva $D=Ca+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "El desarrollo del determinante por la 3.ª fila da $D=Ca+D_0$. ¿Cuál es el coeficiente $C$ (el adjunto del elemento con el parámetro)?",
  "Rozvoj podľa 3. riadka dáva $D=Ct+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "El desarrollo por la 3.ª fila da $D=Ct+D_0$. ¿Cuál es el coeficiente $C$ (el adjunto del elemento con el parámetro)?",
  "Rozvoj podľa 3. riadka: $D = {@0}$, kde ${@1}$. Teda $D = {@2}$.": "Desarrollo por la 3.ª fila: $D = {@0}$, donde ${@1}$. Por tanto, $D = {@2}$.",
  "Rozvojom podľa 3. riadka dostaneš činiteľ $(c-\\lambda)$. Aké je $c$?": "Desarrollando por la 3.ª fila obtienes el factor $(c-\\lambda)$. ¿Cuánto vale $c$?",
  "Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.": "Lleva la matriz ampliada a forma escalonada y calcula las incógnitas de abajo arriba.",
  "S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.": "Trata la ecuación matricial como una ecuación ordinaria: despeja $X$ y después calcula elemento a elemento.",
  "Sarrusovo pravidlo pre determinant 3×3": "Regla de Sarrus para el determinante 3×3",
  "Sarrusovo pravidlo: $\\det A={@0}$.": "Regla de Sarrus: $\\det A={@0}$.",
  "Sarrusovo pravidlo: tri súčiny na diagonálach doprava dole so znamienkom plus, tri doľava dole so znamienkom mínus.": "Regla de Sarrus: tres productos en las diagonales hacia abajo a la derecha con signo más y tres hacia abajo a la izquierda con signo menos.",
  "Semidefinitná forma má $\\det A=0$, teda aspoň jedno vlastné číslo nulové. Skontroluj determinant.": "Una forma semidefinida tiene $\\det A=0$, es decir, al menos un valor propio nulo. Comprueba el determinante.",
  "Skalárny súčin $\\langle u, v\\rangle$ má tvar $at+b$. Aký je koeficient $a$?": "El producto escalar $\\langle u, v\\rangle$ tiene la forma $at+b$. ¿Cuál es el coeficiente $a$?",
  "Skalárny súčin treba ešte vydeliť číslom $\\langle u, u\\rangle=\\|u\\|^2$.": "Todavía hay que dividir el producto escalar entre $\\langle u, u\\rangle=\\|u\\|^2$.",
  "Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.": "Las columnas de la matriz de la aplicación son las imágenes de los vectores $e_1=(1, 0)$ y $e_2=(0, 1)$. A la composición «primero $f$, después $g$» le corresponde el producto $A_gA_f$.",
  "Stĺpec pravých strán patrí do {@0}. <em>stĺpca</em> determinantu, nie do {@1}. riadka.": "La columna de términos independientes va en la {@0}.ª <em>columna</em> del determinante, no en la {@1}.ª fila.",
  "Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.": "Criterio de Sylvester: $D_1\\gt 0$ se cumple siempre; la condición la da $D_2=\\det A\\gt 0$.",
  "Symetrická matica spĺňa $a_{ij}=a_{ji}$ pre všetky dvojice prvkov súmerných podľa hlavnej diagonály. Porovnaj ich jednu po druhej.": "Una matriz simétrica cumple $a_{ij}=a_{ji}$ para todos los pares de elementos simétricos respecto a la diagonal principal. Compáralos uno por uno.",
  "Sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé, alebo nezávislé?": "¿Son los vectores $u={@0}$, $v={@1}$ y $w={@2}$ linealmente dependientes o independientes?",
  "Sú vektory lineárne závislé, alebo nezávislé?": "¿Son los vectores linealmente dependientes o independientes?",
  "Súradnice vektora v báze b₁, b₂": "Coordenadas de un vector en la base b₁, b₂",
  "Sústava je ${@0}={@1}$, ${@2}={@3}$. Vypočítaj jej determinant $D$.": "El sistema es ${@0}={@1}$, ${@2}={@3}$. Calcula su determinante $D$.",
  "Sústava nemá riešenie, len keď vznikne riadok $(0\\ 0\\ 0\\mid c)$ s $c\\neq 0$, teda $h(A)\\neq h(A\\mid b)$.": "El sistema no tiene solución solo si aparece una fila $(0\\ 0\\ 0\\mid c)$ con $c\\neq 0$, es decir, $h(A)\\neq h(A\\mid b)$.",
  "Súčiny na diagonálach smerom doľava dole sa od kladných členov odčítajú, nie pripočítajú.": "Los productos de las diagonales hacia abajo a la izquierda se restan de los términos positivos, no se suman.",
  "Sčítaj ich: aký je vektor ${@0}$?": "Súmalos: ¿cuál es el vector ${@0}$?",
  "Teda {@0}. riadok matice $A^{-1}$ je $\\frac{1}{{@1}}({@2})={@3}$.": "Por tanto, la {@0}.ª fila de la matriz $A^{-1}$ es $\\frac{1}{{@1}}({@2})={@3}$.",
  "To je $\\dim\\operatorname{Im}f=h(A)$. Dimenzia jadra je počet stĺpcov mínus hodnosť.": "Eso es $\\dim\\operatorname{Im}f=h(A)$. La dimensión del núcleo es el número de columnas menos el rango.",
  "To je dimenzia celého priestoru $\\mathbb{R}^{{@0}}$. Podpriestor môže mať menšiu dimenziu, rozhoduje hodnosť.": "Esa es la dimensión de todo el espacio $\\mathbb{R}^{{@0}}$. Un subespacio puede tener dimensión menor; lo decide el rango.",
  "To je dimenzia jadra. Dimenzia obrazu sa rovná hodnosti matice.": "Esa es la dimensión del núcleo. La dimensión de la imagen es igual al rango de la matriz.",
  "To je hodnosť matice sústavy. Dimenzia priestoru riešení je počet voľných neznámych, $n-h(A)$.": "Ese es el rango de la matriz del sistema. La dimensión del espacio de soluciones es el número de incógnitas libres, $n-h(A)$.",
  "To je počet riadkov pôvodnej matice. Hodnosť je počet nenulových riadkov až po prevedení do stupňovitého tvaru.": "Ese es el número de filas de la matriz original. El rango es el número de filas no nulas una vez llevada a forma escalonada.",
  "To je počet stĺpcov. Hodnosť je počet nenulových riadkov stupňovitého tvaru.": "Ese es el número de columnas. El rango es el número de filas no nulas de la forma escalonada.",
  "To je počet vektorov. Niektoré z nich môžu byť lineárnou kombináciou ostatných; dimenzia je hodnosť matice z nich zostavenej.": "Ese es el número de vectores. Algunos pueden ser combinación lineal de los demás; la dimensión es el rango de la matriz formada con ellos.",
  "Toto je projekcia vektora $u$ na smer $v$. Premietame $v$ na smer $u$, výsledok je preto násobkom vektora $u$.": "Esa es la proyección del vector $u$ sobre la dirección de $v$. Proyectamos $v$ sobre la dirección de $u$, por eso el resultado es múltiplo del vector $u$.",
  "Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.": "Traspón la matriz y compárala con $A$ y con $-A$. Fíjate también en la diagonal.",
  "Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi": "Tres posibilidades para un sistema de dos ecuaciones con dos incógnitas",
  "Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.": "Tres vectores de $\\mathbb{R}^3$ son linealmente independientes si y solo si el determinante de la matriz formada con ellos no es nulo.",
  "Uhol priamky θ (°)": "Ángulo de la recta θ (°)",
  "Uhol φ (°)": "Ángulo φ (°)",
  "Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.": "Lleva la matriz ampliada a forma escalonada y compara $h(A)$ con $h(A\\mid b)$ y con el número de incógnitas.",
  "Uprav rozšírenú maticu na stupňovitý tvar. Aká je hodnosť matice sústavy $h(A)$?": "Lleva la matriz ampliada a forma escalonada. ¿Cuál es el rango de la matriz del sistema $h(A)$?",
  "Uprav rozšírenú maticu na stupňovitý tvar. Z posledného riadku vypočítaj $x_3$.": "Lleva la matriz ampliada a forma escalonada. De la última fila calcula $x_3$.",
  "Urči definitnosť kvadratickej formy $Q={@0}$ (vyber najpresnejšiu možnosť).": "Determina el carácter de la forma cuadrática $Q={@0}$ (elige la opción más precisa).",
  "Urči dimenziu podpriestoru $W=\\mathcal{L}({@0})$ priestoru $\\mathbb{R}^{{@1}}$.": "Determina la dimensión del subespacio $W=\\mathcal{L}({@0})$ del espacio $\\mathbb{R}^{{@1}}$.",
  "Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.": "Determina la dimensión del subespacio $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.",
  "Urči hodnosť matice $A={@0}$.": "Determina el rango de la matriz $A={@0}$.",
  "Urči číslo $c$ (prípadne ako zlomok).": "Determina el número $c$ (si hace falta, como fracción).",
  "V menovateli sú normy $\\|u\\|$ a $\\|v\\|$, nie ich druhé mocniny.": "En el denominador están las normas $\\|u\\|$ y $\\|v\\|$, no sus cuadrados.",
  "V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.": "En la tercera fila hay dos ceros: desarrolla $\\det(A-\\lambda I)$ por ella y resuelve el determinante $2\\times 2$ restante como una ecuación de segundo grado.",
  "V {@0}. riadku je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto riadka dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "En la {@0}.ª fila hay un único elemento no nulo $a_{{@1}{@2}}={@3}$, por eso el desarrollo de Laplace por esa fila da $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "V {@0}. stĺpci je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto stĺpca dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "En la {@0}.ª columna hay un único elemento no nulo $a_{{@1}{@2}}={@3}$, por eso el desarrollo de Laplace por esa columna da $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "Vektor $v={@0}$ najprv zobrazíme zobrazením $f$: {@1}, a výsledok potom zobrazením $g$: {@2}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.": "Primero aplicamos al vector $v={@0}$ la aplicación $f$: {@1}, y después al resultado la aplicación $g$: {@2}. Determina la imagen $(g\\circ f)(v)$ en la forma «x; y».",
  "Vektory bázy patria do <em>stĺpcov</em> matice sústavy, nie do riadkov: $i$-ta rovnica porovnáva $i$-te zložky.": "Los vectores de la base van en las <em>columnas</em> de la matriz del sistema, no en las filas: la $i$-ésima ecuación compara las $i$-ésimas componentes.",
  "Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.": "Los vectores son ortogonales si y solo si su producto escalar es nulo.",
  "Vektory sú závislé práve vtedy, keď $D={@0}=0$. {@1} Pre $t={@2}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.": "Los vectores son dependientes si y solo si $D={@0}=0$. {@1} Para $t={@2}$, $w$ es combinación lineal de los vectores $u$ y $v$.",
  "Vektory zapíš do riadkov matice a urči jej hodnosť.": "Escribe los vectores como filas de una matriz y determina su rango.",
  "Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: ${@0}={@1}$.": "Escribimos los vectores como filas de una matriz y calculamos el determinante con la regla de Sarrus: ${@0}={@1}$.",
  "Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U={@0}$ a $P={@1}$. Keďže $\\det U={@2}$, je $U^{-1}={@3}$ a $A=PU^{-1}={@4}{@5}={@6}$.": "Escribimos los vectores en columnas: $A\\,U=P$, donde $U={@0}$ y $P={@1}$. Como $\\det U={@2}$, es $U^{-1}={@3}$ y $A=PU^{-1}={@4}{@5}={@6}$.",
  "Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.": "Los vectores propios son las soluciones no nulas del sistema homogéneo $(A-\\lambda I)v=o$.",
  "Vlastné vektory: ${@0}$ pre $\\lambda={@1}$ a ${@2}$ pre $\\lambda={@3}$. Teda $P={@4}$, $D={@5}$, $\\det P={@6}$ a $P^{-1}={@7}$.": "Vectores propios: ${@0}$ para $\\lambda={@1}$ y ${@2}$ para $\\lambda={@3}$. Por tanto, $P={@4}$, $D={@5}$, $\\det P={@6}$ y $P^{-1}={@7}$.",
  "Vlastné čísla sú prvky diagonály len pri trojuholníkovej matici. Tu rieš charakteristickú rovnicu $\\det(A-\\lambda I)=0$.": "Los valores propios son los elementos de la diagonal solo en una matriz triangular. Aquí resuelve la ecuación característica $\\det(A-\\lambda I)=0$.",
  "Vo vete o dimenzii je dimenzia vzoru, teda počet stĺpcov ${@0}$, nie počet riadkov.": "En el teorema de la dimensión aparece la dimensión del espacio de partida, es decir, el número de columnas ${@0}$, no el número de filas.",
  "Vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$.": "Multiplicar una fila por ${@0}$ multiplica el determinante por ${@1}$.",
  "Vypočítaj $(A^{-1})_{{@0}{@1}}$. Neceločíselný výsledok zadaj ako zlomok.": "Calcula $(A^{-1})_{{@0}{@1}}$. Si el resultado no es entero, escríbelo como fracción.",
  "Vypočítaj $A=PU^{-1}$ (prvky po riadkoch).": "Calcula $A=PU^{-1}$ (elementos por filas).",
  "Vypočítaj $A^{-1}$ (prvky po riadkoch).": "Calcula $A^{-1}$ (elementos por filas).",
  "Vypočítaj $A^{{@0}}=PD^{{@1}}P^{-1}$ (prvky po riadkoch).": "Calcula $A^{{@0}}=PD^{{@1}}P^{-1}$ (elementos por filas).",
  "Vypočítaj $X={@0}$ (prvky po riadkoch).": "Calcula $X={@0}$ (elementos por filas).",
  "Vypočítaj $\\cos\\varphi$ (ako zlomok).": "Calcula $\\cos\\varphi$ (como fracción).",
  "Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u={@0}$ a $v={@1}$. Výsledok zadaj ako zlomok.": "Calcula $\\cos\\varphi$, donde $\\varphi$ es el ángulo de los vectores $u={@0}$ y $v={@1}$. Escribe el resultado como fracción.",
  "Vypočítaj $\\det A$.": "Calcula $\\det A$.",
  "Vypočítaj $\\langle u, u\\rangle$.": "Calcula $\\langle u, u\\rangle$.",
  "Vypočítaj $\\langle u, v\\rangle$.": "Calcula $\\langle u, v\\rangle$.",
  "Vypočítaj $\\langle u_2, w_1\\rangle$, kde $w_1=u_1$.": "Calcula $\\langle u_2, w_1\\rangle$, donde $w_1=u_1$.",
  "Vypočítaj $\\langle v, u\\rangle$.": "Calcula $\\langle v, u\\rangle$.",
  "Vypočítaj $\\langle w_1, w_1\\rangle$.": "Calcula $\\langle w_1, w_1\\rangle$.",
  "Vypočítaj $\\|u\\|$.": "Calcula $\\|u\\|$.",
  "Vypočítaj $\\|v\\|$.": "Calcula $\\|v\\|$.",
  "Vypočítaj $c_1$ a zadaj všetky súradnice.": "Calcula $c_1$ y escribe todas las coordenadas.",
  "Vypočítaj $c_2$.": "Calcula $c_2$.",
  "Vypočítaj $f(v)$.": "Calcula $f(v)$.",
  "Vypočítaj $g\\bigl(f(v)\\bigr)$.": "Calcula $g\\bigl(f(v)\\bigr)$.",
  "Vypočítaj $x_{{@0}}$. Neceločíselný výsledok zadaj ako zlomok.": "Calcula $x_{{@0}}$. Si el resultado no es entero, escríbelo como fracción.",
  "Vypočítaj algebraické doplnky {@0}. stĺpca: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.": "Calcula los adjuntos de la {@0}.ª columna: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.",
  "Vypočítaj algebraický doplnok $A_{{@0}{@1}}$.": "Calcula el adjunto $A_{{@0}{@1}}$.",
  "Vypočítaj determinant $D$ matice sústavy.": "Calcula el determinante $D$ de la matriz del sistema.",
  "Vypočítaj determinant $D_\\alpha$ (prvý stĺpec nahradíš pravými stranami).": "Calcula el determinante $D_\\alpha$ (sustituyes la primera columna por los términos independientes).",
  "Vypočítaj determinant $D_\\beta$ (druhý stĺpec nahradíš pravými stranami).": "Calcula el determinante $D_\\beta$ (sustituyes la segunda columna por los términos independientes).",
  "Vypočítaj determinant $D_{{@0}}$.": "Calcula el determinante $D_{{@0}}$.",
  "Vypočítaj determinant ${@0}$.": "Calcula el determinante ${@0}$.",
  "Vypočítaj determinant matice $A={@0}$.": "Calcula el determinante de la matriz $A={@0}$.",
  "Vypočítaj diagonálny prvok $(A^{T}A)_{{@0}{@1}}$.": "Calcula el elemento diagonal $(A^{T}A)_{{@0}{@1}}$.",
  "Vypočítaj hlavný rohový minor $D_{@0}$.": "Calcula el menor principal $D_{@0}$.",
  "Vypočítaj inverznú maticu k $U={@0}$ (prvky po riadkoch).": "Calcula la matriz inversa de $U={@0}$ (elementos por filas).",
  "Vypočítaj maticu $A+B^{T}$ (prvky po riadkoch).": "Calcula la matriz $A+B^{T}$ (elementos por filas).",
  "Vypočítaj maticu $X$ (prvky po riadkoch).": "Calcula la matriz $X$ (elementos por filas).",
  "Vypočítaj maticu ${@0}$ (prvky po riadkoch).": "Calcula la matriz ${@0}$ (elementos por filas).",
  "Vypočítaj minor $M_{{@0}{@1}}$ (determinant po vynechaní {@2}. riadka a {@3}. stĺpca).": "Calcula el menor $M_{{@0}{@1}}$ (el determinante tras suprimir la {@2}.ª fila y la {@3}.ª columna).",
  "Vypočítaj ortogonálnu projekciu vektora $v={@0}$ na smer vektora $u={@1}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).": "Calcula la proyección ortogonal del vector $v={@0}$ sobre la dirección del vector $u={@1}$. Escribe las componentes separadas por punto y coma (fracciones en la forma $p/q$).",
  "Vypočítaj rohový minor $D_2$.": "Calcula el menor principal $D_2$.",
  "Vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Calcula la traza $\\operatorname{tr}(A^{T}A)$.",
  "Vypočítaj stopu $\\operatorname{tr}A$.": "Calcula la traza $\\operatorname{tr}A$.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doprava dole.": "Calcula la suma de los tres productos de las diagonales hacia abajo a la derecha.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doľava dole.": "Calcula la suma de los tres productos de las diagonales hacia abajo a la izquierda.",
  "Vypočítaj vektor ${@0}u$.": "Calcula el vector ${@0}u$.",
  "Vypočítaj vektor ${@0}{@1}v$.": "Calcula el vector ${@0}{@1}v$.",
  "Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u={@0}$ a $v={@1}$.": "Calcula la distancia $\\|u-v\\|$ de los vectores $u={@0}$ y $v={@1}$.",
  "Vyrieš charakteristickú rovnicu $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Zadaj vlastné čísla.": "Resuelve la ecuación característica $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Escribe los valores propios.",
  "Vyrieš maticovú rovnicu ${@0}$, kde $A={@1}$ a $B={@2}$. Prvky matice $X$ zadaj po riadkoch.": "Resuelve la ecuación matricial ${@0}$, donde $A={@1}$ y $B={@2}$. Escribe los elementos de la matriz $X$ por filas.",
  "Výmena riadkov mení znamienko a vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$": "Intercambiar filas cambia el signo y multiplicar una fila por ${@0}$ multiplica el determinante por ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$",
  "Z prvého riadku vypočítaj $x_1$ a zadaj celé riešenie.": "De la primera fila calcula $x_1$ y escribe la solución completa.",
  "Z rovnice $AU=P$ treba násobiť maticou $U^{-1}$ sprava: $A=PU^{-1}$. Násobenie matíc nie je komutatívne.": "En la ecuación $AU=P$ hay que multiplicar por la matriz $U^{-1}$ por la derecha: $A=PU^{-1}$. La multiplicación de matrices no es conmutativa.",
  "Z rovnice $X=\\tfrac{1}{{@0}}(A+B^{T})$. Máme $B^{T}={@1}$, $A+B^{T}={@2}$, teda $X={@3}$.": "De la ecuación, $X=\\tfrac{1}{{@0}}(A+B^{T})$. Tenemos $B^{T}={@1}$, $A+B^{T}={@2}$, por tanto $X={@3}$.",
  "Z {@0}. riadku: ${@1}=0$, preto je vlastný vektor násobkom ${@2}$.": "De la {@0}.ª fila: ${@1}=0$, por eso el vector propio es múltiplo de ${@2}$.",
  "Zabudol si transponovať maticu $B$: v $B^{T}$ sú riadky matice $B$ zapísané ako stĺpce.": "Olvidaste trasponer la matriz $B$: en $B^{T}$ las filas de $B$ se escriben como columnas.",
  "Zabudol si transponovať maticu $B$: v rovnici je $B^{T}$.": "Olvidaste trasponer la matriz $B$: en la ecuación aparece $B^{T}$.",
  "Zabudol si vektory vynásobiť ich koeficientmi. Každú zložku vektora $u$ aj $v$ najprv vynásob príslušným číslom.": "Olvidaste multiplicar los vectores por sus coeficientes. Multiplica primero cada componente de $u$ y de $v$ por el número correspondiente.",
  "Zadaj $\\alpha$ a $\\beta$.": "Escribe $\\alpha$ y $\\beta$.",
  "Zadaj jedno netriviálne riešenie (uznáme ľubovoľný nenulový násobok).": "Escribe una solución no trivial (se acepta cualquier múltiplo no nulo).",
  "Zadaj projekciu $\\operatorname{proj}_u v$ (zlomky v tvare $p/q$).": "Escribe la proyección $\\operatorname{proj}_u v$ (fracciones en la forma $p/q$).",
  "Zadaj smerový vektor jadra (ľubovoľný nenulový násobok je správne).": "Escribe un vector director del núcleo (cualquier múltiplo no nulo es correcto).",
  "Zadaj vektor $w_2$.": "Escribe el vector $w_2$.",
  "Zadaj vlastný vektor k $\\lambda={@0}$ (ľubovoľný nenulový násobok).": "Escribe un vector propio para $\\lambda={@0}$ (cualquier múltiplo no nulo).",
  "Zadaj všetky vlastné čísla matice $A$.": "Escribe todos los valores propios de la matriz $A$.",
  "Zadaj {@0}. riadok matice $A^{-1}$.": "Escribe la {@0}.ª fila de la matriz $A^{-1}$.",
  "Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.": "Escribe la igualdad por componentes: obtienes un sistema de dos ecuaciones para $\\alpha$ y $\\beta$.",
  "Zobrazenia si použil v opačnom poradí. Najprv sa na $v$ použije $f$, preto je matica zloženia $A_gA_f$ (matica $A_f$ stojí pri vektore).": "Has aplicado las funciones en orden inverso. A $v$ se le aplica primero $f$, por eso la matriz de la composición es $A_gA_f$ (la matriz $A_f$ está junto al vector).",
  "Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A={@0}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).": "La aplicación $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ está dada por $f(x)=Ax$, donde $A={@0}$. El núcleo $\\operatorname{Ker}f$ es una recta. Halla un vector director suyo (cualquier múltiplo no nulo es correcto).",
  "Zobrazenie $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ je dané maticou $A={@2}$. Urči $\\dim\\operatorname{{@3}}f$.": "La aplicación $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ está dada por la matriz $A={@2}$. Determina $\\dim\\operatorname{{@3}}f$.",
  "Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.": "Forma la matriz simétrica de la forma (en los términos mixtos, la mitad del coeficiente) y calcula los menores principales.",
  "Zostav sústavu (vektory bázy v stĺpcoch) a uprav ju na stupňovitý tvar. Z posledného riadku vypočítaj $c_3$.": "Plantea el sistema (vectores de la base en las columnas) y llévalo a forma escalonada. De la última fila calcula $c_3$.",
  "Zvyšný činiteľ je charakteristický polynóm ľavej hornej podmatice $2\\times 2$. Aká je jej stopa?": "El factor restante es el polinomio característico de la submatriz $2\\times 2$ superior izquierda. ¿Cuál es su traza?",
  "Záporne definitná je forma len vtedy, keď sa znamienka rohových minorov striedajú a $D_1\\lt 0$.": "Una forma es definida negativa solo si los signos de los menores principales se alternan y $D_1\\lt 0$.",
  "Závislé sú vektory len vtedy, keď je determinant nulový. Prepočítaj ho Sarrusovým pravidlom a pozor na znamienka.": "Los vectores son dependientes solo si el determinante es nulo. Vuelve a calcularlo con la regla de Sarrus y cuidado con los signos.",
  "ani symetrická, ani antisymetrická": "ni simétrica ni antisimétrica",
  "antisymetrická": "antisimétrica",
  "indefinitná": "indefinida",
  "je podpriestor": "es un subespacio",
  "je to lineárny obal vektorov $(1, {@0}, 0)$ a $({@1}, 0, 1)$": "es la envoltura lineal de los vectores $(1, {@0}, 0)$ y $({@1}, 0, 1)$",
  "je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia": "es el conjunto de soluciones de una ecuación lineal homogénea: la suma de soluciones y el múltiplo de una solución vuelven a ser soluciones",
  "je to množina riešení homogénnej sústavy (priamka cez počiatok)": "es el conjunto de soluciones de un sistema homogéneo (una recta que pasa por el origen)",
  "jeden parameter": "un parámetro",
  "kladne definitná": "definida positiva",
  "kladne semidefinitná": "semidefinida positiva",
  "kolmá projekcia na os $x$": "proyección ortogonal sobre el eje $x$",
  "kolmá projekcia na os $y$": "proyección ortogonal sobre el eje $y$",
  "komplexné vlastné čísla – žiadny reálny vlastný smer": "valores propios complejos: ninguna dirección propia real",
  "lineárne nezávislé": "linealmente independientes",
  "lineárne závislé": "linealmente dependientes",
  "napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie": "p. ej., $(1, 0, 0)$ y $(0, 1, 0)$ pertenecen a él, pero su suma $(1, 1, 0)$ no: no es cerrado respecto a la suma",
  "napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom": "p. ej., $(1, 0, 0)$ pertenece a él, pero $(-1)\\cdot(1, 0, 0)$ no: no es cerrado respecto al producto por un número",
  "napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$": "p. ej., $(1, 1, 0)$ pertenece a él, pero $2\\cdot(1, 1, 0)=(2, 2, 0)$ no, porque $2\\neq 4$",
  "nekladné": "no positivos",
  "nenulové riadky": "filas no nulas",
  "nenulový riadok": "fila no nula",
  "neobsahuje nulový vektor ($0\\neq {@0}$)": "no contiene el vector nulo ($0\\neq {@0}$)",
  "neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka ${@0}\\neq 0$": "no contiene el vector nulo: la primera componente es 0 solo para $s=0$, pero entonces la segunda componente es ${@0}\\neq 0$",
  "neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická": "no se cumple ni $A^{T}=A$ ni $A^{T}=-A$, así que la matriz no es ni simétrica ni antisimétrica",
  "nezáporné": "no negativos",
  "nie je podpriestor": "no es un subespacio",
  "osová súmernosť podľa osi $x$": "simetría axial respecto al eje $x$",
  "osová súmernosť podľa osi $y$": "simetría axial respecto al eje $y$",
  "osová súmernosť podľa priamky $y=-x$": "simetría axial respecto a la recta $y=-x$",
  "osová súmernosť podľa priamky $y=x$": "simetría axial respecto a la recta $y=x$",
  "platí $A^{T}=-A$, teda matica je antisymetrická": "se cumple $A^{T}=-A$, así que la matriz es antisimétrica",
  "platí $A^{T}=A$, teda matica je symetrická": "se cumple $A^{T}=A$, así que la matriz es simétrica",
  "práve jedno riešenie": "solución única",
  "rotácia o $180^\\circ$": "giro de $180^\\circ$",
  "rotácia o $90^\\circ$ proti smeru hodinových ručičiek": "giro de $90^\\circ$ en sentido antihorario",
  "rotácia o $90^\\circ$ v smere hodinových ručičiek": "giro de $90^\\circ$ en sentido horario",
  "rovnoľahlosť so stredom v počiatku a koeficientom $2$": "homotecia de centro el origen y razón $2$",
  "skosenie $(x, y)\\mapsto(x+y, y)$": "cizalladura $(x, y)\\mapsto(x+y, y)$",
  "sprava": "por la derecha",
  "symetrická": "simétrica",
  "súradnice v báze B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) v štandardnej báze": "coordenadas en la base B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) en la base canónica",
  "teda $\\alpha=\\frac{{@0}}{{@1}}={@2}$ a $\\beta=\\frac{{@3}}{{@4}}={@5}$.": "por tanto, $\\alpha=\\frac{{@0}}{{@1}}={@2}$ y $\\beta=\\frac{{@3}}{{@4}}={@5}$.",
  "vedúce prvky sú zvýraznené, pod schodmi sú len nuly": "los pivotes están resaltados; debajo de los escalones solo hay ceros",
  "všetky rohové minory sú kladné": "todos los menores principales son positivos",
  "z {@0}. riadku: ${@1} = {@2}$": "de la {@0}.ª fila: ${@1} = {@2}$",
  "znamienka rohových minorov sa striedajú ({@0})": "los signos de los menores principales se alternan ({@0})",
  "záporne definitná": "definida negativa",
  "záporne semidefinitná": "semidefinida negativa",
  "zľava": "por la izquierda",
  "{@0}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: ${@1}\\times{@2}={@3}${@4}. Všetky riešenia sú $t\\cdot{@5}$, $t\\in\\mathbb{R}$.": "{@0}<br>$h(A)=2\\lt 3$, las soluciones forman una recta (un parámetro). La solución es perpendicular a las dos filas no nulas de la forma escalonada, por eso la obtenemos como su producto vectorial: ${@1}\\times{@2}={@3}${@4}. Todas las soluciones son $t\\cdot{@5}$, $t\\in\\mathbb{R}$.",
  "{@0}<br>$h(A)={@1}$, teda $\\dim\\operatorname{Im}f={@2}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.": "{@0}<br>$h(A)={@1}$, por tanto $\\dim\\operatorname{Im}f={@2}$ y, según el teorema de la dimensión, $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.",
  "{@0}<br>Podľa Frobeniovej vety: {@1}.": "{@0}<br>Según el teorema de Rouché-Frobenius: {@1}.",
  "{@0}<br>Spätné dosadzovanie – {@1}": "{@0}<br>Sustitución hacia atrás: {@1}",
  "Úpravou: {@0}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom ${@1}\\times{@2}={@3}${@4}.": "Reduciendo: {@0}<br>El rango es 2, la solución es perpendicular a las dos filas no nulas, por tanto es múltiplo de ${@1}\\times{@2}={@3}${@4}.",
  "Číslo $\\lambda={@0}$ je vlastným číslom matice $A={@1}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).": "El número $\\lambda={@0}$ es valor propio de la matriz $A={@1}$. Halla un vector propio asociado (cualquier múltiplo no nulo es correcto).",
  "Štvorcová matica $A$ rádu ${@0}$ má $\\det A={@1}$.{@2} Vypočítaj ${@3}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.": "Una matriz cuadrada $A$ de orden ${@0}$ tiene $\\det A={@1}$.{@2} Calcula ${@3}$. Si el resultado no es entero, escríbelo como fracción, p. ej., $-3/4$.",
  "Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.": "Una matriz cuadrada de orden 3 tiene rango 3 si y solo si su determinante no es nulo.",
  "− súčiny na oranžových diagonálach": "− productos de las diagonales naranjas",
  "nekonečne veľa": "infinitas",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "Ese es el cuadrado de la distancia. Todavía tienes que extraer la raíz del resultado."
 }
});
