/* English: preklad js/rocniky/v1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/en/v1/ – needitovať ručne. */
CONTENT_I18N.add('en', {
 "decimal": ".",
 "lessons": {
  "v1-vektory": {
   "title": "Vectors in Rⁿ and Linear Dependence",
   "summary": "Vector operations, linear combinations, linear span, linear dependence and independence.",
   "theory": [
    "<p>A <strong>vector</strong> in $\\mathbb{R}^n$ is an ordered $n$-tuple of real numbers $u=(u_1, u_2, \\dots, u_n)$. We add vectors and multiply them by a real number (a scalar) component by component: $u+v=(u_1+v_1, \\dots, u_n+v_n)$ and $c\\,u=(c\\,u_1, \\dots, c\\,u_n)$. The zero vector is denoted $o=(0, \\dots, 0)$.</p>",
    "<p>A <strong>linear combination</strong> of vectors $u_1, \\dots, u_k$ is any vector of the form $c_1u_1+c_2u_2+\\dots+c_ku_k$, where $c_1, \\dots, c_k\\in\\mathbb{R}$ are the coefficients. The set of all linear combinations is called the <strong>linear span</strong> and is denoted $\\mathcal{L}(u_1, \\dots, u_k)$.</p>",
    {
     "fig": "v1-linkomb",
     "caption": "The vectors $u=(2, 1)$ and $v=(-1, 2)$ are not parallel, so every vector in the plane can be written as $\\alpha u+\\beta v$. Move the coefficients $\\alpha$ and $\\beta$ and watch how the resulting (orange) vector changes."
    },
    "<p>Vectors $u_1, \\dots, u_k$ are <strong>linearly independent</strong> if $c_1u_1+\\dots+c_ku_k=o$ implies $c_1=\\dots=c_k=0$. Otherwise they are <strong>linearly dependent</strong>, which happens exactly when at least one of them can be expressed as a linear combination of the others.</p>\n       <p>In practice we write the vectors as the rows of a matrix $A$: they are independent exactly when $h(A)=k$ (for the rank, see the following lessons). For $n$ vectors in $\\mathbb{R}^n$ it is enough to check whether $\\det A\\neq 0$. More than $n$ vectors in $\\mathbb{R}^n$ are always linearly dependent, and every set containing the zero vector is dependent.</p>"
   ],
   "examples": [
    {
     "task": "Determine whether the vectors $u=(1, 2, 0)$, $v=(0, 1, 1)$ and $w=(2, 5, 1)$ are linearly dependent.",
     "steps": [
      "We write the vectors as the rows of a matrix and compute the determinant by expansion along the 1st row:",
      "$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.",
      "The determinant is zero, so the vectors are <strong>linearly dependent</strong>. Indeed, $w=2u+v$."
     ]
    },
    {
     "task": "Express the vector $w=(4, 7)$ as a linear combination of the vectors $u=(2, 1)$ and $v=(-1, 2)$.",
     "steps": [
      "We look for $\\alpha, \\beta$ with $\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$, i.e. the system $2\\alpha-\\beta=4$, $\\alpha+2\\beta=7$.",
      "From the second equation $\\alpha=7-2\\beta$; substituting gives $14-4\\beta-\\beta=4$, so $\\beta=2$ and $\\alpha=3$.",
      "<strong>Result:</strong> $w=3u+2v$."
     ]
    }
   ]
  },
  "v1-operacie": {
   "title": "Matrices and Matrix Operations",
   "summary": "Matrix size, special matrices, addition, scalar multiplication, transpose and trace.",
   "theory": [
    "<p>A <strong>matrix</strong> of size $m\\times n$ is a rectangular array $A=(a_{ij})$ of real numbers with $m$ rows and $n$ columns. Two matrices are equal if they have the same size and the same entries in the same positions. A matrix of size $n\\times n$ is a <strong>square</strong> matrix of order $n$; the entries $a_{11}, a_{22}, \\dots, a_{nn}$ form its <strong>main diagonal</strong>. Important ones are the <strong>identity</strong> matrix $I$ (ones on the diagonal, zeros elsewhere), the <strong>zero</strong> matrix $O$, the <strong>diagonal</strong> matrix and the <strong>upper (lower) triangular</strong> matrix (zeros below (above) the diagonal).</p>",
    "<p>The <strong>sum</strong> of matrices of the same size and a <strong>scalar multiple</strong> of a matrix are computed entry by entry: $(A+B)_{ij}=a_{ij}+b_{ij}$, $(cA)_{ij}=c\\,a_{ij}$. We have $A+B=B+A$, $(A+B)+C=A+(B+C)$, $c(A+B)=cA+cB$, $(c+d)A=cA+dA$. Matrices of size $m\\times n$ with these operations form a vector space.</p>",
    "<p>The <strong>transpose</strong> $A^{T}$ of an $m\\times n$ matrix is of size $n\\times m$ and $(A^{T})_{ij}=a_{ji}$ – the rows become columns. We have $(A^{T})^{T}=A$, $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$ and $(AB)^{T}=B^{T}A^{T}$ (the order is reversed).</p>\n       <p>A square matrix is <strong>symmetric</strong> if $A^{T}=A$, and <strong>skew-symmetric</strong> if $A^{T}=-A$ (then it has zeros on the diagonal). Every square matrix can be uniquely decomposed into the sum $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$ of a symmetric and a skew-symmetric part. The <strong>trace</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$ is the sum of the diagonal entries; for any matrix, $\\operatorname{tr}(A^{T}A)$ is the sum of the squares of all its entries.</p>"
   ],
   "examples": [
    {
     "task": "For $A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$ and $B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$ compute $2A-B^{T}$.",
     "steps": [
      "$B$ is of size $3\\times 2$, so $B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$ is of size $2\\times 3$, like $A$.",
      "$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.",
      "<strong>Result:</strong> $2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$."
     ]
    },
    {
     "task": "Decompose the matrix $A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$ into the sum of a symmetric and a skew-symmetric matrix.",
     "steps": [
      "$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.",
      "Symmetric part: $S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$.",
      "Skew-symmetric part: $K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$. Check: $S+K=A$."
     ]
    }
   ]
  },
  "v1-hodnost": {
   "title": "Rank of a Matrix and Row Operations",
   "summary": "Elementary row operations, row echelon form, Gaussian elimination and the rank of a matrix.",
   "theory": [
    "<p>The <strong>elementary row operations</strong> are: (1) swapping two rows, (2) multiplying a row by a nonzero number, (3) adding a multiple of another row to a row. If $B$ is obtained from $A$ by finitely many such operations, we write $A\\sim B$ (the matrices are row equivalent). The notation $R_2-3R_1$ means that we replace the second row by the second row minus three times the first.</p>",
    "<p>A matrix is in <strong>row echelon form</strong> if every nonzero row starts with more zeros than the row above it and the zero rows are at the bottom. The first nonzero entry of a row is its <strong>leading entry</strong> (pivot). <strong>Gaussian elimination</strong> brings every matrix to row echelon form: in the current column we choose a pivot and use operation (3) to make every entry below it zero. If we also scale the pivots to 1 and clear the entries above them, we obtain the reduced row echelon form (Gauss–Jordan elimination).</p>",
    {
     "fig": "v1-stupne",
     "caption": "Row echelon form: the pivots move to the right as we go down. The matrix has three nonzero rows, so $h(A)=3$."
    },
    "<p>The <strong>rank</strong> $h(A)$ is the maximum number of linearly independent rows of the matrix $A$. Row operations do not change the rank, so $h(A)$ is the number of nonzero rows in the row echelon form. We have $h(A)=h(A^{T})$ (the row rank equals the column rank) and $h(A)\\le\\min(m, n)$. For a square matrix of order $n$: $h(A)=n\\iff\\det A\\neq 0\\iff A$ is invertible (nonsingular).</p>"
   ],
   "examples": [
    {
     "task": "Find the rank of the matrix $A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$.",
     "steps": [
      "$R_2-2R_1$, $R_3-3R_1$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.",
      "The row echelon form has two nonzero rows, so $h(A)=2$."
     ]
    },
    {
     "task": "For which $a$ does the matrix $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$ have rank 2?",
     "steps": [
      "$R_2-R_1$, $R_3-2R_1$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.",
      "For $a=4$ the last row is zero and $h(A)=2$; for $a\\neq 4$ we get $h(A)=3$."
     ]
    }
   ]
  },
  "v1-determinant": {
   "title": "3×3 Determinants and Laplace Expansion",
   "summary": "The rule of Sarrus, minors and cofactors, Laplace expansion, properties of the determinant.",
   "theory": [
    "<p>The <strong>determinant</strong> of a square matrix of order $n$ is the number $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$, where we sum over all $n!$ permutations $\\pi$ of the set $\\{1, \\dots, n\\}$. For $n=3$ we get the <strong>rule of Sarrus</strong>:</p>\n       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>",
    {
     "fig": "v1-sarrus",
     "caption": "The rule of Sarrus: we copy the first two columns to the right of the matrix. Products along the diagonals going down to the right are taken with a plus sign, those going down to the left with a minus sign. It works <strong>only</strong> for matrices of order 3."
    },
    "<p>The <strong>minor</strong> $M_{ij}$ is the determinant of the matrix obtained by deleting the $i$-th row and the $j$-th column, and the <strong>cofactor</strong> is $A_{ij}=(-1)^{i+j}M_{ij}$. <strong>Laplace expansion</strong> along the $i$-th row: $\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$ (and similarly along a column). It pays to expand along the row or column with the most zeros.</p>",
    "<p><strong>Properties:</strong> $\\det A^{T}=\\det A$; swapping two rows changes the sign; multiplying a row by a number $c$ multiplies the determinant by $c$, hence $\\det(cA)=c^{n}\\det A$; adding a multiple of another row does not change the determinant; a matrix with a zero row or with two proportional rows has determinant 0; the determinant of a triangular matrix is the product of its diagonal entries. For matrices of the same order $\\det(AB)=\\det A\\cdot\\det B$, and if $A$ is invertible, $\\det A^{-1}=\\frac{1}{\\det A}$.</p>"
   ],
   "examples": [
    {
     "task": "Compute $\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "Positive terms: $2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$.",
      "Negative terms: $3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$.",
      "<strong>Result:</strong> $\\det A=2-13=-11$."
     ]
    },
    {
     "task": "Compute $\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$.",
     "steps": [
      "The 3rd row has a single nonzero entry $a_{32}=3$. Expansion along the 3rd row: $\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$.",
      "$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$ (rule of Sarrus).",
      "<strong>Result:</strong> $\\det A=-3\\cdot 6=-18$."
     ]
    }
   ]
  },
  "v1-inverzna": {
   "title": "Inverse Matrix: Gauss–Jordan and the Adjugate",
   "summary": "Existence of the inverse matrix, computing it by the Gauss–Jordan method and via the adjugate matrix, matrix equations.",
   "theory": [
    "<p>The <strong>inverse</strong> of a square matrix $A$ of order $n$ is the matrix $A^{-1}$ such that $AA^{-1}=A^{-1}A=I$. It exists exactly when $\\det A\\neq 0$ (the matrix is <strong>invertible</strong>, or nonsingular); a matrix with zero determinant is <strong>singular</strong>. We have $(A^{-1})^{-1}=A$, $(A^{T})^{-1}=(A^{-1})^{T}$ and $(AB)^{-1}=B^{-1}A^{-1}$.</p>",
    "<p><strong>Gauss–Jordan method:</strong> we use row operations to turn the augmented matrix $(A\\mid I)$ into the form $(I\\mid B)$; then $B=A^{-1}$. If a zero row appears on the left during the process, the matrix $A$ is singular.</p>",
    "<p>The <strong>adjugate matrix</strong> $\\operatorname{adj}A$ is the transpose of the matrix of cofactors: $(\\operatorname{adj}A)_{ij}=A_{ji}$. We have $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$, so $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ – watch out for the swapped indices. For $n=2$ we get the well-known formula $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    "<p><strong>Matrix equations:</strong> if $A$ is invertible, the equation $AX=B$ has the unique solution $X=A^{-1}B$ and the equation $XA=B$ has the solution $X=BA^{-1}$. Since matrix multiplication is not commutative, the side we multiply from matters.</p>"
   ],
   "examples": [
    {
     "task": "Use the Gauss–Jordan method to find the inverse of $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$; $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "$R_2-R_3$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$; $R_1-2R_2$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "<strong>Result:</strong> $A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$ (check: $AA^{-1}=I$)."
     ]
    },
    {
     "task": "For $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$ compute the entry $(A^{-1})_{13}$.",
     "steps": [
      "$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.",
      "$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$, where $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$.",
      "<strong>Result:</strong> $(A^{-1})_{13}=\\frac{1}{8}$."
     ]
    }
   ]
  },
  "v1-sustavy": {
   "title": "Systems of Linear Equations",
   "summary": "Gaussian elimination, the Frobenius theorem, Cramer's rule and homogeneous systems.",
   "theory": [
    "<p>A system of $m$ linear equations in $n$ unknowns is written in matrix form as $Ax=b$, where $A$ is the <strong>coefficient matrix</strong>, $x=(x_1, \\dots, x_n)^{T}$ and $b$ is the column of right-hand sides; $(A\\mid b)$ is the <strong>augmented matrix</strong>. The system is <strong>homogeneous</strong> if $b=o$.</p>",
    "<p><strong>Frobenius theorem</strong> (also called the Kronecker–Capelli theorem): the system $Ax=b$ has a solution exactly when $h(A)=h(A\\mid b)$. If $h(A)=h(A\\mid b)=n$, there is exactly one solution; if $h(A)=h(A\\mid b)=h\\lt n$, there are infinitely many solutions depending on $n-h$ parameters.</p>",
    {
     "fig": "v1-priamky",
     "caption": "Two equations in two unknowns are two lines in the plane: they intersect, are parallel and distinct, or coincide."
    },
    "<p><strong>Gaussian elimination:</strong> we bring the augmented matrix to row echelon form and find the unknowns by back substitution from the bottom up; unknowns without a pivot are free parameters. <strong>Cramer's rule:</strong> if $A$ is square and $D=\\det A\\neq 0$, then $x_i=\\frac{D_i}{D}$, where $D_i$ is the determinant of the matrix obtained from $A$ by replacing the $i$-th column with the column $b$.</p>\n       <p>A <strong>homogeneous system</strong> always has the trivial solution $x=o$. A nontrivial solution exists exactly when $h(A)\\lt n$ (for a square matrix, exactly when $\\det A=0$). The set of all solutions is a subspace of $\\mathbb{R}^n$ of dimension $n-h(A)$.</p>"
   ],
   "examples": [
    {
     "task": "Solve the system $x_1+x_2+x_3=6$, $2x_1-x_2+x_3=3$, $x_1+2x_2-x_3=2$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$; $R_2-2R_1$, $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.",
      "$R_2\\leftrightarrow R_3$, then $R_3+3R_2$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$.",
      "Back substitution: $x_3=3$, $x_2=-4+2\\cdot 3=2$, $x_1=6-2-3=1$. <strong>Solution:</strong> $(1, 2, 3)$."
     ]
    },
    {
     "task": "Solve the system $x_1+2x_2-x_3=1$, $2x_1+4x_2+x_3=5$.",
     "steps": [
      "$R_2-2R_1$: $\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$, so $h(A)=h(A\\mid b)=2\\lt 3$ – infinitely many solutions with one parameter.",
      "From the 2nd row $x_3=1$. The unknown $x_2$ has no pivot, so we set $x_2=t$; from the 1st row $x_1=1-2t+1=2-2t$.",
      "<strong>Solution:</strong> $(2-2t, t, 1)$, $t\\in\\mathbb{R}$."
     ]
    }
   ]
  },
  "v1-priestory": {
   "title": "Vector Space, Basis and Dimension",
   "summary": "Vector spaces and subspaces, basis, dimension and the coordinates of a vector with respect to a basis.",
   "theory": [
    "<p>A <strong>vector space</strong> over $\\mathbb{R}$ is a set $V$ with addition and multiplication by a real number that do not lead outside $V$ and satisfy the usual rules: commutativity and associativity of addition, the existence of a zero vector and of opposite vectors, the distributive laws, $(cd)u=c(du)$ and $1\\cdot u=u$. Examples: $\\mathbb{R}^n$, matrices of size $m\\times n$, polynomials of degree at most $n$ ($P_n$), real functions on an interval.</p>",
    "<p>A <strong>subspace</strong> is a nonempty subset $W\\subseteq V$ that is closed under addition and scalar multiplication; then necessarily $o\\in W$. Subspaces of $\\mathbb{R}^3$ include, for example, lines and planes through the origin, the solution set of a homogeneous system and every linear span. A plane that does not pass through the origin is not a subspace.</p>",
    "<p>A <strong>basis</strong> of a space $V$ is a linearly independent set of vectors whose linear span is all of $V$. All bases have the same number of elements – the <strong>dimension</strong> $\\dim V$. For example, $\\dim\\mathbb{R}^n=n$ (standard basis $e_1, \\dots, e_n$), $\\dim P_n=n+1$, and the space of $m\\times n$ matrices has dimension $mn$. In a space of dimension $n$, any $n$ linearly independent vectors form a basis, and $\\dim\\mathcal{L}(u_1, \\dots, u_k)$ is the rank of the matrix with rows $u_1, \\dots, u_k$.</p>",
    {
     "fig": "v1-baza",
     "caption": "The basis $b_1=(2, 1)$, $b_2=(-1, 2)$ creates a “slanted” grid. The coordinates $(c_1, c_2)$ of a vector with respect to the basis $B$ tell you how many steps to take in the direction of $b_1$ and how many in the direction of $b_2$."
    },
    "<p>If $B=(b_1, \\dots, b_n)$ is a basis, every vector can be written <strong>uniquely</strong> as $v=c_1b_1+\\dots+c_nb_n$; the numbers $(c_1, \\dots, c_n)$ are the <strong>coordinates</strong> of the vector $v$ with respect to the basis $B$. We find them by solving the system whose matrix has the basis vectors as columns and whose right-hand side is $v$.</p>"
   ],
   "examples": [
    {
     "task": "Find the coordinates of the vector $v=(3, 0, 1)$ with respect to the basis $b_1=(1, 0, 1)$, $b_2=(0, 1, 1)$, $b_3=(1, 1, 0)$.",
     "steps": [
      "From $v=c_1b_1+c_2b_2+c_3b_3$ we get the system $c_1+c_3=3$, $c_2+c_3=0$, $c_1+c_2=1$.",
      "Subtracting the first two equations gives $c_1-c_2=3$; together with $c_1+c_2=1$ we have $c_1=2$, $c_2=-1$ and $c_3=1$.",
      "<strong>Result:</strong> $(v)_B=(2, -1, 1)$. Check: $2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$."
     ]
    },
    {
     "task": "Find a basis and the dimension of the subspace $W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$.",
     "steps": [
      "The coefficient matrix $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$ is in row echelon form and has rank 2, so $\\dim W=4-2=2$.",
      "Free unknowns: $x_3=s$, $x_4=t$. Then $x_2=-t$ and $x_1=x_3-x_2=s+t$, so $x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$.",
      "<strong>Result:</strong> basis $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$, $\\dim W=2$."
     ]
    }
   ]
  },
  "v1-zobrazenia": {
   "title": "Linear Maps and Their Matrices",
   "summary": "Linear maps, their matrices, composition of maps, geometric transformations of the plane, kernel and image.",
   "theory": [
    "<p>A map $f:V\\to W$ between vector spaces is <strong>linear</strong> if $f(u+v)=f(u)+f(v)$ and $f(cu)=c\\,f(u)$ for all vectors $u, v$ and numbers $c$; then $f(o)=o$. Every linear map $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ has the form $f(x)=Ax$ for a unique $m\\times n$ matrix $A$ whose columns are the images of the standard basis vectors: $A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$. The composite map $g\\circ f$ (first $f$, then $g$) corresponds to the matrix product $A_gA_f$.</p>",
    "<table class=\"tbl tbl-auto\"><tr><th>transformation of $\\mathbb{R}^2$</th><th>matrix</th></tr>\n       <tr><td>rotation by the angle $\\varphi$</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>\n       <tr><td>reflection in the $x$-axis</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>\n       <tr><td>reflection in the line $y=x$</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>orthogonal projection onto the $x$-axis</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>dilation (scaling) by the factor $k$</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>",
    {
     "fig": "v1-rotacia",
     "caption": "Rotation by the angle $\\varphi$: the images of the vectors $e_1$ (blue) and $e_2$ (green) are exactly the columns of the rotation matrix. The dashed shape is the original, the solid one is its image."
    },
    "<p>The <strong>kernel</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$ is the solution set of the homogeneous system $Ax=o$; the <strong>image</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$ is the linear span of the columns of $A$. Both are subspaces and $\\dim\\operatorname{Im}f=h(A)$. <strong>Rank–nullity theorem:</strong> $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$. The map is injective (one-to-one) exactly when $\\operatorname{Ker}f=\\{o\\}$.</p>"
   ],
   "examples": [
    {
     "task": "Find the matrix of the map that first rotates a vector by $90^\\circ$ counterclockwise and then reflects it in the $x$-axis. What is the image of the vector $(2, 1)$?",
     "steps": [
      "Rotation: $R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$, reflection: $S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$. The composition (first $R$, then $S$) has the matrix $SR$.",
      "$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$ – this is the reflection in the line $y=-x$.",
      "<strong>Image:</strong> $SR\\,(2, 1)^{T}=(-1, -2)^{T}$."
     ]
    },
    {
     "task": "Find the kernel and the dimension of the image of the map $f(x)=Ax$, where $A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "The third row is the sum of the first two, so $h(A)=2$ and $\\dim\\operatorname{Im}f=2$.",
      "Kernel: $x_1+x_2=0$, $x_2+x_3=0$. For $x_3=t$ we get $x_2=-t$, $x_1=t$, so $\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$.",
      "Check with the rank–nullity theorem: $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$."
     ]
    }
   ]
  },
  "v1-vlastne": {
   "title": "Eigenvalues and Eigenvectors",
   "summary": "The characteristic polynomial, eigenvalues and eigenvectors of 2×2 and 3×3 matrices, diagonalization and matrix powers.",
   "theory": [
    "<p>A number $\\lambda$ is an <strong>eigenvalue</strong> of a square matrix $A$ if there is a nonzero vector $v$ with $Av=\\lambda v$; the vector $v$ is then an <strong>eigenvector</strong> belonging to $\\lambda$. Geometrically: the map $x\\mapsto Ax$ keeps the direction of the vector $v$ and only stretches it by the factor $\\lambda$ (and for $\\lambda\\lt 0$ also flips it).</p>",
    "<p>The eigenvalues are the roots of the <strong>characteristic polynomial</strong> $p(\\lambda)=\\det(A-\\lambda I)$. For a $2\\times 2$ matrix, $p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$. In general, the sum of the eigenvalues equals $\\operatorname{tr}A$ and their product equals $\\det A$; a triangular matrix has its eigenvalues on the diagonal. The eigenvectors for $\\lambda$ are the nonzero solutions of the homogeneous system $(A-\\lambda I)v=o$.</p>",
    {
     "fig": "v1-matica",
     "caption": "The matrix $A$ maps the unit square to the parallelogram with sides $Ae_1$ and $Ae_2$ (the columns of the matrix); its area is $|\\det A|$. The orange lines are the eigendirections – vectors on them are mapped to multiples of themselves."
    },
    "<p><strong>Diagonalization:</strong> a matrix $A$ of order $n$ is diagonalizable if $A=PDP^{-1}$, where $D$ is diagonal. This happens exactly when $A$ has $n$ linearly independent eigenvectors; these form the columns of $P$, and the diagonal of $D$ holds the corresponding eigenvalues in the same order. It is sufficient for $A$ to have $n$ distinct eigenvalues; every real symmetric matrix is diagonalizable. Application: $A^k=PD^kP^{-1}$.</p>"
   ],
   "examples": [
    {
     "task": "Find the eigenvalues and eigenvectors of the matrix $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "$\\operatorname{tr}A=7$, $\\det A=10$, so $\\lambda^2-7\\lambda+10=0$ and $\\lambda_1=2$, $\\lambda_2=5$.",
      "$\\lambda=5$: $A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$, equation $-v_1+v_2=0$, eigenvector $(1, 1)$.",
      "$\\lambda=2$: $A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$, equation $2v_1+v_2=0$, eigenvector $(1, -2)$."
     ]
    },
    {
     "task": "Use diagonalization to compute $A^3$ for $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "From the previous example, $P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$, $D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$ and $P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$.",
      "$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.",
      "<strong>Result:</strong> $A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$."
     ]
    }
   ]
  },
  "v1-skalarny": {
   "title": "Inner Product, Orthogonality and Projection",
   "summary": "Inner product and norm, the angle between vectors, orthogonal projection and the Gram–Schmidt process.",
   "theory": [
    "<p>The <strong>standard inner product</strong> (dot product) in $\\mathbb{R}^n$ is $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$. It is symmetric, linear in each argument, and $\\langle u, u\\rangle\\gt 0$ for $u\\neq o$. The <strong>norm</strong> (length) is $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$ and the distance between vectors is $\\|u-v\\|$. The <strong>Cauchy–Schwarz inequality</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$ holds, so the angle $\\varphi$ between nonzero vectors is well defined: $\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$.</p>",
    "<p>Vectors are <strong>orthogonal</strong> ($u\\perp v$) if $\\langle u, v\\rangle=0$. A system of nonzero, mutually orthogonal vectors is linearly independent; if in addition they have norm 1, it is <strong>orthonormal</strong>. The <strong>orthogonal projection</strong> of a vector $v$ onto the direction $u\\neq o$ is $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$; the vector $v-\\operatorname{proj}_u v$ is perpendicular to $u$ and its norm is the distance of the point $v$ from the line $\\mathcal{L}(u)$.</p>",
    {
     "fig": "v1-projekcia",
     "caption": "Projection of the vector $v$ (blue) onto the line with direction $u=(\\cos\\theta, \\sin\\theta)$: the green vector is $\\operatorname{proj}_u v$, the dashed segment is perpendicular to the line."
    },
    "<p>The <strong>Gram–Schmidt process</strong> turns linearly independent vectors $u_1, \\dots, u_k$ into orthogonal vectors with the same linear span: $w_1=u_1$ and $w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$, i.e. from each vector we subtract its projections onto the vectors already obtained. Dividing by the norms, $e_j=w_j/\\|w_j\\|$, we get an orthonormal basis.</p>"
   ],
   "examples": [
    {
     "task": "Find the orthogonal projection of the vector $v=(3, 1, 2)$ onto the direction $u=(1, 1, 0)$ and the distance of the point $v$ from the line $\\mathcal{L}(u)$.",
     "steps": [
      "$\\langle v, u\\rangle=3+1+0=4$, $\\langle u, u\\rangle=2$, so $\\operatorname{proj}_u v=2u=(2, 2, 0)$.",
      "$v-\\operatorname{proj}_u v=(1, -1, 2)$; perpendicularity check: $\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$.",
      "<strong>Distance:</strong> $\\|(1, -1, 2)\\|=\\sqrt{6}$."
     ]
    },
    {
     "task": "Use the Gram–Schmidt process to orthogonalize the vectors $u_1=(1, 1, 1)$ and $u_2=(1, 2, 3)$.",
     "steps": [
      "$w_1=u_1=(1, 1, 1)$.",
      "$\\langle u_2, w_1\\rangle=6$, $\\langle w_1, w_1\\rangle=3$, so $w_2=u_2-2w_1=(-1, 0, 1)$; indeed $\\langle w_1, w_2\\rangle=0$.",
      "Orthonormal basis: $e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$, $e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$."
     ]
    }
   ]
  },
  "v1-kvadraticke": {
   "title": "Quadratic Forms and Definiteness",
   "summary": "The matrix of a quadratic form, definiteness, Sylvester's criterion.",
   "theory": [
    "<p>A <strong>quadratic form</strong> on $\\mathbb{R}^n$ is a function $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$, where $A$ is a symmetric matrix – the <strong>matrix of the form</strong>. The coefficient of $x_i^2$ is $a_{ii}$, the coefficient of $x_ix_j$ ($i\\neq j$) is $2a_{ij}$. For example, $Q=x_1^2+4x_1x_2-3x_2^2$ has the matrix $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$.</p>",
    "<p>A form (and its matrix) is <strong>positive definite</strong> if $Q(x)\\gt 0$ for every $x\\neq o$; <strong>positive semidefinite</strong> if $Q(x)\\ge 0$ for all $x$; similarly <strong>negative (semi)definite</strong>; and <strong>indefinite</strong> if it takes both positive and negative values. In terms of eigenvalues: all positive $\\iff$ positive definite, all nonnegative $\\iff$ positive semidefinite, mixed signs $\\iff$ indefinite.</p>",
    "<p><strong>Sylvester's criterion:</strong> let $D_1=a_{11}$, $D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$, …, $D_n=\\det A$ be the leading principal minors. The form is positive definite $\\iff D_k\\gt 0$ for all $k$; negative definite $\\iff$ the signs alternate $D_1\\lt 0$, $D_2\\gt 0$, $D_3\\lt 0$, … If $\\det A\\neq 0$ and neither case occurs, the form is indefinite. When $\\det A=0$, the leading minors are not enough to decide semidefiniteness – you need the eigenvalues or all principal minors.</p>"
   ],
   "examples": [
    {
     "task": "Determine the definiteness of the form $Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$.",
     "steps": [
      "Matrix of the form: $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$.",
      "$D_1=2$, $D_2=2\\cdot 1-1\\cdot 1=1$, $D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$.",
      "All leading principal minors are positive, so the form is <strong>positive definite</strong>."
     ]
    },
    {
     "task": "For which $a$ is the form $Q=x^2+4xy+ay^2$ positive definite?",
     "steps": [
      "$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$, $D_1=1\\gt 0$, $D_2=a-4$.",
      "<strong>Result:</strong> the form is positive definite exactly for $a\\gt 4$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.": "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: the $i$-th row of the inverse matrix consists of the cofactors of the $i$-th <em>column</em> of the matrix $A$.",
  "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Teda $c={@5}$.": "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. So $c={@5}$.",
  "$A^{T}={@0}$. Porovnaním s $A$ vidíme, že {@1}.": "$A^{T}={@0}$. Comparing with $A$, we see that {@1}.",
  "$B^{T}={@0}$, takže ${@1}={@2}={@3}$.": "$B^{T}={@0}$, so ${@1}={@2}={@3}$.",
  "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Teda $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.": "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>So $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.",
  "$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>{@0}<br>$h(A)={@1}$, teda $\\dim W={@2}-{@3}={@4}$.": "$W$ is the solution set of a homogeneous system, so $\\dim W=n-h(A)$. Rank of the coefficient matrix:<br>{@0}<br>$h(A)={@1}$, so $\\dim W={@2}-{@3}={@4}$.",
  "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.": "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; the norms of these vectors come out as whole numbers.",
  "$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A={@0}$; obe sú teda {@1} a jedno je nulové": "$\\det A=0$, one eigenvalue is $0$ and the other equals $\\operatorname{tr}A={@0}$; so both are {@1} and one of them is zero",
  "$\\det A={@0}$, teda $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.": "$\\det A={@0}$, so $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.",
  "$\\det A={@0}$. Podľa vzorca $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ potrebujeme algebraické doplnky {@3}. stĺpca: ${@4}$.": "$\\det A={@0}$. By the formula $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ we need the cofactors of column {@3}: ${@4}$.",
  "$\\det A={@0}$. Ďalej $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ a ${@5}$. Teda $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.": "$\\det A={@0}$. Further, $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ and ${@5}$. So $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.",
  "$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov": "$\\det A\\neq 0$ and none of the previous cases occurred",
  "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ a transponovaním sa determinant nemení. Súčin teda obsahuje $\\det A$ dvakrát.": "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ and transposing does not change the determinant. So the product contains $\\det A$ twice.",
  "$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).": "$\\dim\\operatorname{Im}f=h(A)$ and $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ is the number of columns of the matrix (the dimension of the domain).",
  "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, teda $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.": "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, so $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.",
  "$\\langle u, v\\rangle={@0}={@1}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t={@2}$.": "$\\langle u, v\\rangle={@0}={@1}$. The condition $\\langle u, v\\rangle=0$ gives $t={@2}$.",
  "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.": "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.",
  "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.": "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.",
  "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, charakteristická rovnica je ${@2}{@3}=0$.": "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, the characteristic equation is ${@2}{@3}=0$.",
  "$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno": "$h(A)=h(A\\mid b)=3=n$, there is exactly one solution",
  "$h(A)=h(A\\mid b)={@0}\\lt 3$, riešení je nekonečne veľa ({@1})": "$h(A)=h(A\\mid b)={@0}\\lt 3$, there are infinitely many solutions ({@1})",
  "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sústava nemá riešenie": "$h(A)={@0}\\neq h(A\\mid b)={@1}$, the system has no solution",
  "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.": "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.",
  "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, koeficient $\\frac{{@2}}{{@3}}={@4}$.": "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, coefficient $\\frac{{@2}}{{@3}}={@4}$.",
  "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.": "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; the result must be orthogonal to $w_1$.",
  "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Skúška: $\\langle w_1, w_2\\rangle={@6}$.": "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Check: $\\langle w_1, w_2\\rangle={@6}$.",
  "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, kde v $D_{{@2}}$ nahradíš {@3}. stĺpec matice sústavy stĺpcom pravých strán.": "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, where in $D_{{@2}}$ you replace column {@3} of the coefficient matrix with the column of right-hand sides.",
  "(mení orientáciu)": "(reverses orientation)",
  "(naozaj ${@0}={@1}{@2} {@3} {@4}{@5}$)": "(indeed ${@0}={@1}{@2} {@3} {@4}{@5}$)",
  "+ súčiny na zelených diagonálach": "+ products on the green diagonals",
  ", teda ${@0}{@1} {@2} = {@3}$": ", so ${@0}{@1} {@2} = {@3}$",
  "<strong>Je</strong> podpriestor: {@0}.": "<strong>It is</strong> a subspace: {@0}.",
  "<strong>Nie je</strong> podpriestor: {@0}.": "<strong>It is not</strong> a subspace: {@0}.",
  "Aká je definitnosť formy?": "What is the definiteness of the form?",
  "Aká je dimenzia $W$?": "What is the dimension of $W$?",
  "Aká je dimenzia jadra $\\operatorname{Ker}f$?": "What is the dimension of the kernel $\\operatorname{Ker}f$?",
  "Aká je hodnosť matice $A$?": "What is the rank of the matrix $A$?",
  "Aká je hodnosť matice sústavy $h(A)$?": "What is the rank of the coefficient matrix $h(A)$?",
  "Aká je hodnosť matice sústavy?": "What is the rank of the coefficient matrix?",
  "Aká je hodnosť rozšírenej matice $h(A\\mid b)$?": "What is the rank of the augmented matrix $h(A\\mid b)$?",
  "Aké je znamienko $(-1)^{{@0}+{@1}}$? Zadaj $1$ alebo $-1$.": "What is the sign of $(-1)^{{@0}+{@1}}$? Enter $1$ or $-1$.",
  "Aký je absolútny člen $D_0$?": "What is the constant term $D_0$?",
  "Aký je absolútny člen $b$?": "What is the constant term $b$?",
  "Aký je determinant tejto podmatice?": "What is the determinant of this submatrix?",
  "Algebraický doplnok treba ešte vydeliť determinantom matice $A$.": "The cofactor still has to be divided by the determinant of the matrix $A$.",
  "Antisymetrická matica má na diagonále nuly a spĺňa $a_{ij}=-a_{ji}$. Over to pre všetky dvojice.": "A skew-symmetric matrix has zeros on the diagonal and satisfies $a_{ij}=-a_{ji}$. Check this for all pairs.",
  "Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).": "You don't need to compute the whole inverse matrix: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (the indices of the cofactor are swapped).",
  "Cramerovým pravidlom vypočítaj neznámu $x_{{@0}}$ zo sústavy ${@1}$. Neceločíselný výsledok zadaj ako zlomok.": "Use Cramer's rule to compute the unknown $x_{{@0}}$ from the system ${@1}$. Enter a non-integer result as a fraction.",
  "Cramerovým pravidlom: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,": "By Cramer's rule: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,",
  "Dané sú vektory $u={@0}$ a $v={@1}$ v $\\mathbb{R}^{{@2}}$. Vypočítaj vektor ${@3}$. Zložky oddeľ bodkočiarkou.": "The vectors $u={@0}$ and $v={@1}$ in $\\mathbb{R}^{{@2}}$ are given. Compute the vector ${@3}$. Separate the components with semicolons.",
  "Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.": "The determinant is non-zero, the vectors are <strong>linearly independent</strong>.",
  "Determinant je nulový, vektory sú <strong>lineárne závislé</strong>{@0}.": "The determinant is zero, the vectors are <strong>linearly dependent</strong>{@0}.",
  "Determinant je síce nulový, ale pozri sa na znamienko nenulového vlastného čísla: pri matici $2\\times 2$ sa rovná stope.": "The determinant is zero, but look at the sign of the non-zero eigenvalue: for a $2\\times 2$ matrix it equals the trace.",
  "Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.": "The determinant of the matrix with rows $u, v, w$ is a linear function of the parameter $t$ – expand it along the row containing the parameter and set it equal to zero.",
  "Diagonálne prvky matice $D^{{@0}}$?": "The diagonal entries of the matrix $D^{{@0}}$?",
  "Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: ${@0}={@1}={@2}$.": "The diagonal entry $(A^{T}A)_{jj}$ is the sum of the squares of the entries in the $j$-th column of $A$, so $\\operatorname{tr}(A^{T}A)$ is the sum of the squares of all entries: ${@0}={@1}={@2}$.",
  "Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $\\dim W={@3}$.": "The dimension of the linear span is the rank of the matrix whose rows are the given vectors:<br>{@0}<br>The row echelon form has {@1} {@2}, so $\\dim W={@3}$.",
  "Diskriminant ${@0}{@1}$, teda $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, t. j. $\\lambda_1={@4}$ a $\\lambda_2={@5}$.": "Discriminant ${@0}{@1}$, so $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, i.e. $\\lambda_1={@4}$ and $\\lambda_2={@5}$.",
  "Do matice formy patrí mimo diagonály polovica koeficientu pri $xy$, teda ${@0}$, nie ${@1}$.": "Off the diagonal, the matrix of the form contains half of the coefficient of $xy$, i.e. ${@0}$, not ${@1}$.",
  "Dosaď $x_3$ do predposledného riadku a vypočítaj $x_2$.": "Substitute $x_3$ into the second-to-last row and compute $x_2$.",
  "Forma $Q={@0}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "The form $Q={@0}$ is positive definite exactly when $a\\gt c$. Find the number $c$ (as a fraction if needed).",
  "Forma $Q={@0}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "The form $Q={@0}+ay^2$ is positive definite exactly when $a\\gt c$. Find the number $c$ (as a fraction if needed).",
  "Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $h(A)={@3}$.": "Using Gaussian elimination we bring the matrix to row echelon form:<br>{@0}<br>The row echelon form has {@1} {@2}, so $h(A)={@3}$.",
  "Gaussovou elimináciou vyrieš sústavu ${@0}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.": "Solve the system ${@0}$ by Gaussian elimination. Enter the solution in the form “x₁; x₂; x₃”.",
  "Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1={@0}$ a $u_2={@1}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.": "Use the Gram–Schmidt process to orthogonalize the vectors $u_1={@0}$ and $u_2={@1}$ (in this order, without normalizing). Enter the vector $w_2$.",
  "Hľadaj protipríklad: patrí nulový vektor do $W$? Je súčet dvoch prvkov $W$ opäť v $W$? A ich násobok?": "Look for a counterexample: does the zero vector belong to $W$? Is the sum of two elements of $W$ again in $W$? And their multiple?",
  "Indefinitná forma nadobúda kladné aj záporné hodnoty. Over znamienka rohových minorov podľa Sylvestrovho kritéria.": "An indefinite form takes both positive and negative values. Check the signs of the leading principal minors using Sylvester's criterion.",
  "Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.": "The kernel is the solution set of the homogeneous system $Ax=o$. Row-reduce the matrix and choose a free unknown as the parameter.",
  "Jadro je množina riešení sústavy $Ax=o$:<br>{@0}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom ${@1}\\times{@2}={@3}${@4}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.": "The kernel is the solution set of the system $Ax=o$:<br>{@0}<br>$h(A)=2$, so $\\dim\\operatorname{Ker}f=3-2=1$. The solution is orthogonal to both non-zero rows, so it is a multiple of ${@1}\\times{@2}={@3}${@4}. So $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.",
  "Je množina $W={@0}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?": "Is the set $W={@0}$ a subspace of the vector space $\\mathbb{R}^3$?",
  "Ker": "Ker",
  "Kladne definitná je forma len vtedy, keď sú všetky hlavné rohové minory kladné.": "A form is positive definite only when all leading principal minors are positive.",
  "Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A={@0}$.": "The coefficient of $x_ix_j$ ($i\\neq j$) is split equally between $a_{ij}$ and $a_{ji}$, so $a_{ij}$ is half of the coefficient. Matrix of the form: $A={@0}$.",
  "Koeficient pri $x_ix_j$ sa v symetrickej matici rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, každý dostane polovicu.": "In a symmetric matrix, the coefficient of $x_ix_j$ is split equally between $a_{ij}$ and $a_{ji}$; each gets half.",
  "Koľko riešení má sústava ${@0}$?": "How many solutions does the system ${@0}$ have?",
  "Koľko riešení má sústava?": "How many solutions does the system have?",
  "Kvadratická forma je $Q={@0}$. Urči prvky $a_{12}, a_{13}, a_{23}$ jej symetrickej matice (oddelené bodkočiarkou) (zlomky v tvare $p/q$).": "The quadratic form is $Q={@0}$. Find the entries $a_{12}, a_{13}, a_{23}$ of its symmetric matrix (separated by semicolons) (fractions in the form $p/q$).",
  "Kvadratická forma je $Q={@0}$. Urči prvok $a_{12}$ jej symetrickej matice (zlomky v tvare $p/q$).": "The quadratic form is $Q={@0}$. Find the entry $a_{12}$ of its symmetric matrix (fractions in the form $p/q$).",
  "Kvadratický činiteľ má $\\operatorname{tr}={@0}$, $\\det={@1}$ a korene ${@2}$ a ${@3}$. Vlastné čísla sú ${@4}$.": "The quadratic factor has $\\operatorname{tr}={@0}$, $\\det={@1}$ and roots ${@2}$ and ${@3}$. The eigenvalues are ${@4}$.",
  "Lineárna kombinácia dvoch vektorov": "Linear combination of two vectors",
  "Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f{@0}={@1}$ a $f{@2}={@3}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.": "A linear map $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ satisfies $f{@0}={@1}$ and $f{@2}={@3}$. Find the matrix $A$ of the map $f$ (in the standard basis). Enter the entries row by row.",
  "Matica $-A^{3}$ je $(-1)\\cdot A^{3}$, a $\\det(-M)=(-1)^{{@0}}\\det M$.": "The matrix $-A^{3}$ is $(-1)\\cdot A^{3}$, and $\\det(-M)=(-1)^{{@0}}\\det M$.",
  "Matica $A={@0}$ má vlastné čísla ${@1}$ a ${@2}$. Pomocou diagonalizácie vypočítaj $A^{{@3}}$. Prvky zadaj po riadkoch.": "The matrix $A={@0}$ has eigenvalues ${@1}$ and ${@2}$. Use diagonalization to compute $A^{{@3}}$. Enter the entries row by row.",
  "Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom ${@0}$.": "The matrix $B$ is obtained from $A$ by swapping the first two rows and multiplying the last row by ${@0}$.",
  "Matica formy $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A={@3}$.": "Matrix of the form $A={@0}$. $D_1={@1}\\gt 0$ and $D_2={@2}\\gt 0$ do not depend on $a$. Expanding along the 3rd row (or by Sarrus' rule), $D_3=\\det A={@3}$.",
  "Matica formy: $A={@0}$. Hlavné rohové minory: ${@1}$. Keďže {@2}, forma je <strong>{@3}</strong>.": "Matrix of the form: $A={@0}$. Leading principal minors: ${@1}$. Since {@2}, the form is <strong>{@3}</strong>.",
  "Matica nie je trojuholníková, vlastné čísla preto nie sú jej diagonálne prvky. Rozviň $\\det(A-\\lambda I)$ podľa 3. riadka.": "The matrix is not triangular, so its eigenvalues are not its diagonal entries. Expand $\\det(A-\\lambda I)$ along the 3rd row.",
  "Matica v stupňovitom tvare": "Matrix in row echelon form",
  "Matice: $A_f={@0}$, $A_g={@1}$. Zloženie má maticu $A_gA_f={@2}$, teda $(g\\circ f)(v)={@3}{@4}={@5}$.": "Matrices: $A_f={@0}$, $A_g={@1}$. The composition has the matrix $A_gA_f={@2}$, so $(g\\circ f)(v)={@3}{@4}={@5}$.",
  "Minor $D_3=\\det A$ má tvar $D_2\\,a+K$. Aké je číslo $K$?": "The minor $D_3=\\det A$ has the form $D_2\\,a+K$. What is the number $K$?",
  "Minor treba ešte vynásobiť samotným prvkom $a_{{@0}{@1}}={@2}$, podľa ktorého rozvíjaš.": "The minor still has to be multiplied by the entry $a_{{@0}{@1}}={@2}$ along which you are expanding.",
  "Minor: $M_{{@0}{@1}}={@2}={@3}$. Teda $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.": "Minor: $M_{{@0}{@1}}={@2}={@3}$. So $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.",
  "Mocnina matice sa nepočíta po prvkoch, to platí len pre diagonálnu maticu $D$. Použi $A^k=PD^kP^{-1}$.": "A matrix power is not computed entry by entry; that only works for the diagonal matrix $D$. Use $A^k=PD^kP^{-1}$.",
  "Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.": "First transpose $B$ (rows ↔ columns), then compute entry by entry.",
  "Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.": "First multiply each vector by its coefficient (every component), then add the corresponding components.",
  "Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.": "Write $v=c_1b_1+c_2b_2+c_3b_3$ component by component: you get a system of three equations in which the basis vectors are the columns of the matrix.",
  "Napíš maticu $A-{@0}I$ (prvky po riadkoch).": "Write the matrix $A-{@0}I$ (entries row by row).",
  "Napíš maticu $B^{T}$ (prvky po riadkoch).": "Write the matrix $B^{T}$ (entries row by row).",
  "Nekonečne veľa riešení je len pri $h(A)=h(A\\mid b)\\lt 3$. Pozri sa aj na pravú stranu riadku, ktorý je v matici sústavy nulový.": "There are infinitely many solutions only when $h(A)=h(A\\mid b)\\lt 3$. Also look at the right-hand side of the row that is zero in the coefficient matrix.",
  "Nájdi jedno netriviálne riešenie homogénnej sústavy ${@0}$. (Uznáme ľubovoľný nenulový násobok.)": "Find one non-trivial solution of the homogeneous system ${@0}$. (Any non-zero multiple is accepted.)",
  "Nájdi maticu $X$, pre ktorú platí ${@0}X-A=B^{T}$, ak $A={@1}$ a $B={@2}$. Prvky zadaj po riadkoch.": "Find the matrix $X$ such that ${@0}X-A=B^{T}$, if $A={@1}$ and $B={@2}$. Enter the entries row by row.",
  "Nájdi nenulové riešenie sústavy $(A-\\lambda I)v=o$ (ľubovoľný nenulový násobok je správne).": "Find a non-zero solution of the system $(A-\\lambda I)v=o$ (any non-zero multiple is correct).",
  "Nájdi súradnice vektora $v={@0}$ v báze $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.": "Find the coordinates of the vector $v={@0}$ in the basis $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ of the space $\\mathbb{R}^3$. Enter them in the form “c₁; c₂; c₃”.",
  "Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.": "Find the eigenvectors, build $P$ and $D$ and use $A^k=PD^kP^{-1}$; a power of a diagonal matrix is computed entry by entry on the diagonal.",
  "Nájdi vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou.": "Find the eigenvalues of the matrix $A={@0}$. Enter them separated by semicolons.",
  "Nájdi všetky vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).": "Find all eigenvalues of the matrix $A={@0}$. Enter them separated by semicolons (enter a repeated eigenvalue several times).",
  "Nájdi {@0}. riadok inverznej matice k matici $A={@1}$. Zadaj tri čísla oddelené bodkočiarkou.": "Find row {@0} of the inverse of the matrix $A={@1}$. Enter three numbers separated by semicolons.",
  "Nájdi čísla $\\alpha, \\beta$ také, že ${@0}=\\alpha{@1}+\\beta{@2}$. Zadaj ich v tvare „α; β“.": "Find numbers $\\alpha, \\beta$ such that ${@0}=\\alpha{@1}+\\beta{@2}$. Enter them in the form “α; β”.",
  "Násobenie matíc nie je komutatívne. Z rovnice ${@0}$ treba násobiť maticou $A^{-1}$ {@1}.": "Matrix multiplication is not commutative. In the equation ${@0}$ you must multiply by the matrix $A^{-1}$ {@1}.",
  "Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.": "Both conditions at once: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Invert the matrix $(u\\mid v)$ and multiply from the right.",
  "Obraz jednotkového štvorca pri zobrazení danom maticou 2×2": "Image of the unit square under the map given by a 2×2 matrix",
  "Od počtu neznámych sa neodčíta počet rovníc, ale hodnosť matice sústavy: niektoré rovnice môžu byť závislé.": "You don't subtract the number of equations from the number of unknowns, but the rank of the coefficient matrix: some equations may be dependent.",
  "Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.": "Subtract the vectors component by component and use $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.",
  "Ortogonálna projekcia vektora na priamku": "Orthogonal projection of a vector onto a line",
  "Over všetky tri podmienky: nulový vektor, uzavretosť na sčítanie a na násobenie číslom. Ak platia všetky, ide o podpriestor.": "Check all three conditions: the zero vector, closure under addition and under scalar multiplication. If all hold, it is a subspace.",
  "Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.": "Check whether $W$ contains the zero vector and whether it is closed under addition and multiplication by a real number. One counterexample is enough to disprove it.",
  "Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).": "After row reduction two independent equations remain. Choose one unknown as the parameter (or use the cross product of the two rows).",
  "Podmienka $D = 0$ dáva ${@0}{@1} = {@2}$, teda ${@3} = {@4}$.": "The condition $D = 0$ gives ${@0}{@1} = {@2}$, so ${@3} = {@4}$.",
  "Podmienka $D_3\\gt 0$ dáva $a\\gt {@0}$, teda $c={@1}$.": "The condition $D_3\\gt 0$ gives $a\\gt {@0}$, so $c={@1}$.",
  "Porovnaj $A^{T}$ s $A$ aj s $-A$ prvok po prvku. Možno platí jedna z rovností.": "Compare $A^{T}$ with $A$ and with $-A$ entry by entry. One of the equalities may hold.",
  "Porovnaním zložiek dostaneme sústavu ${@0}={@1}$, ${@2}={@3}$.": "Comparing components gives the system ${@0}={@1}$, ${@2}={@3}$.",
  "Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.": "Use $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ and $\\det A^{-1}=1/\\det A$.",
  "Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.": "Use Sarrus' rule: three products “down to the right” with a plus sign, three “down to the left” with a minus sign.",
  "Použil si algebraické doplnky {@0}. riadka. Adjungovaná matica je transponovaná: {@1}. riadok inverznej matice tvoria doplnky {@2}. stĺpca.": "You used the cofactors of row {@0}. The adjugate matrix is transposed: row {@1} of the inverse matrix consists of the cofactors of column {@2}.",
  "Použil si doplnok $A_{{@0}{@1}}$. Pre prvok $(A^{-1})_{{@2}{@3}}$ treba doplnok s vymenenými indexmi, $A_{{@4}{@5}}$.": "You used the cofactor $A_{{@0}{@1}}$. For the entry $(A^{-1})_{{@2}{@3}}$ you need the cofactor with swapped indices, $A_{{@4}{@5}}$.",
  "Počítame po zložkách: ${@0}=({@1})={@2}$.": "We compute component by component: ${@0}=({@1})={@2}$.",
  "Pre $A={@0}$ a $B={@1}$ vypočítaj maticu ${@2}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).": "For $A={@0}$ and $B={@1}$ compute the matrix ${@2}$. Enter the entries row by row (4 numbers separated by semicolons).",
  "Pre ktoré $a$ je $D=0$?": "For which $a$ is $D=0$?",
  "Pre ktoré $t$ je $D=0$?": "For which $t$ is $D=0$?",
  "Pre ktoré $t$ je skalárny súčin nulový? Neceločíselný výsledok zadaj ako zlomok.": "For which $t$ is the dot product zero? Enter a non-integer result as a fraction.",
  "Pre ktoré $t$ sú vektory $u={@0}$ a $v={@1}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.": "For which $t$ are the vectors $u={@0}$ and $v={@1}$ orthogonal? Enter a non-integer result as a fraction.",
  "Pre ktorú hodnotu parametra $a$ má matica $A={@0}$ hodnosť 2?": "For which value of the parameter $a$ does the matrix $A={@0}$ have rank 2?",
  "Pre ktorú hodnotu parametra $t$ sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé?": "For which value of the parameter $t$ are the vectors $u={@0}$, $v={@1}$ and $w={@2}$ linearly dependent?",
  "Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.": "For a $2\\times 2$ matrix, solve $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.",
  "Pre maticu $A={@0}$ vypočítaj prvok $(A^{-1})_{{@1}{@2}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.": "For the matrix $A={@0}$ compute the entry $(A^{-1})_{{@1}{@2}}$ of the inverse matrix. Enter a non-integer result as a fraction.",
  "Pre maticu $A={@0}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "For the matrix $A={@0}$ compute the trace $\\operatorname{tr}(A^{T}A)$.",
  "Prepočítaj determinant Sarrusovým pravidlom: tri súčiny sa sčítajú a tri odčítajú. Nezávislé sú vektory len pri nenulovom determinante.": "Recompute the determinant using Sarrus' rule: three products are added and three are subtracted. The vectors are independent only if the determinant is non-zero.",
  "Pri matici rádu 3 nestačia dve diagonály ako pri $2\\times 2$. Sarrusovo pravidlo má šesť súčinov: tri kladné a tri záporné.": "For a matrix of order 3, two diagonals are not enough as they are for $2\\times 2$. Sarrus' rule has six products: three positive and three negative.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa determinant násobí číslom $c^{n}$, nie len $c$.": "When a matrix of order ${@0}$ is multiplied by a number $c$, the determinant is multiplied by $c^{n}$, not just by $c$.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa číslom $c$ násobí každý z ${@1}$ riadkov: $\\det(cA)=c^{n}\\det A$.": "When a matrix of order ${@0}$ is multiplied by a number $c$, each of the ${@1}$ rows is multiplied by $c$: $\\det(cA)=c^{n}\\det A$.",
  "Pri prenesení $A$ na druhú stranu sa mení znamienko: ${@0}X=A+B^{T}$.": "When $A$ is moved to the other side, its sign changes: ${@0}X=A+B^{T}$.",
  "Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.": "For a mixed term $c\\,x_ix_j$ we have $a_{ij}=a_{ji}=c/2$.",
  "Projekciu na $w_1$ treba od $u_2$ odčítať, nie pripočítať. Over, či je výsledok kolmý na $w_1$.": "The projection onto $w_1$ must be subtracted from $u_2$, not added. Check whether the result is orthogonal to $w_1$.",
  "Prvky sa neumocnili. Diagonálny prvok $(A^{T}A)_{jj}$ je skalárny súčin $j$-tého stĺpca so sebou samým, teda súčet druhých mocnín.": "The entries were not squared. The diagonal entry $(A^{T}A)_{jj}$ is the dot product of the $j$-th column with itself, i.e. a sum of squares.",
  "Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.": "The entry $(A^{T}A)_{jj}$ is the dot product of the $j$-th column of $A$ with itself.",
  "Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. {@0}": "The first two rows are not proportional, so $h(A)\\ge 2$. The rank is less than 3 exactly when $D=\\det A=0$. {@0}",
  "Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.": "The first two leading minors do not depend on $a$; $D_3=\\det A$ is a linear function of $a$ with coefficient $D_2$.",
  "Práve jedno riešenie má sústava len pri $h(A)=h(A\\mid b)=3$. Over, či po eliminácii nevznikne v matici sústavy nulový riadok.": "The system has exactly one solution only when $h(A)=h(A\\mid b)=3$. Check whether a zero row appears in the coefficient matrix after elimination.",
  "Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.": "Use row operations to make the entries below the pivots zero and count the non-zero rows.",
  "Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.": "The solutions of a homogeneous system with $n$ unknowns form a subspace of dimension $n-h(A)$.",
  "Riešenie je $X={@0}={@1}={@2}$.": "The solution is $X={@0}={@1}={@2}$.",
  "Riešime $(A-\\lambda I)v=o$, kde $A-{@0}I={@1}$. {@2} Skúška: $A{@3}={@4}={@5}\\cdot{@6}$.": "We solve $(A-\\lambda I)v=o$, where $A-{@0}I={@1}$. {@2} Check: $A{@3}={@4}={@5}\\cdot{@6}$.",
  "Rotácia útvaru okolo počiatku": "Rotating a shape about the origin",
  "Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>{@0}<br>Spätné dosadzovanie – {@1}": "The equation $c_1b_1+c_2b_2+c_3b_3=v$ is a system whose matrix has the basis vectors as columns:<br>{@0}<br>Back substitution – {@1}",
  "Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.": "Multiply the equation by the matrix $A^{-1}$ from the right: $X=BA^{-1}$.",
  "Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.": "Multiply the equation by the matrix $A^{-1}$ from the left: $X=A^{-1}B$.",
  "Rozhodni, aká je matica $A={@0}$.": "Decide what kind of matrix $A={@0}$ is.",
  "Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.": "Expand the determinant along a row or column that contains only one non-zero entry. Don't forget the sign $(-1)^{i+j}$.",
  "Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.": "Expanding $\\det(A-\\lambda I)$ along the 3rd row: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.",
  "Rozvoj determinantu podľa 3. riadka dáva $D=Ca+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "Expanding the determinant along the 3rd row gives $D=Ca+D_0$. What is the coefficient $C$ (the cofactor of the entry containing the parameter)?",
  "Rozvoj podľa 3. riadka dáva $D=Ct+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "Expanding along the 3rd row gives $D=Ct+D_0$. What is the coefficient $C$ (the cofactor of the entry containing the parameter)?",
  "Rozvoj podľa 3. riadka: $D = {@0}$, kde ${@1}$. Teda $D = {@2}$.": "Expanding along the 3rd row: $D = {@0}$, where ${@1}$. So $D = {@2}$.",
  "Rozvojom podľa 3. riadka dostaneš činiteľ $(c-\\lambda)$. Aké je $c$?": "Expanding along the 3rd row gives the factor $(c-\\lambda)$. What is $c$?",
  "Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.": "Bring the augmented matrix to row echelon form and compute the unknowns from the bottom up.",
  "S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.": "Treat a matrix equation like an ordinary one: isolate $X$, then compute entry by entry.",
  "Sarrusovo pravidlo pre determinant 3×3": "Sarrus' rule for a 3×3 determinant",
  "Sarrusovo pravidlo: $\\det A={@0}$.": "Sarrus' rule: $\\det A={@0}$.",
  "Sarrusovo pravidlo: tri súčiny na diagonálach doprava dole so znamienkom plus, tri doľava dole so znamienkom mínus.": "Sarrus' rule: three products on the diagonals down to the right with a plus sign, three down to the left with a minus sign.",
  "Semidefinitná forma má $\\det A=0$, teda aspoň jedno vlastné číslo nulové. Skontroluj determinant.": "A semidefinite form has $\\det A=0$, so at least one eigenvalue is zero. Check the determinant.",
  "Skalárny súčin $\\langle u, v\\rangle$ má tvar $at+b$. Aký je koeficient $a$?": "The dot product $\\langle u, v\\rangle$ has the form $at+b$. What is the coefficient $a$?",
  "Skalárny súčin treba ešte vydeliť číslom $\\langle u, u\\rangle=\\|u\\|^2$.": "The dot product still has to be divided by $\\langle u, u\\rangle=\\|u\\|^2$.",
  "Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.": "The columns of the matrix of a map are the images of the vectors $e_1=(1, 0)$ and $e_2=(0, 1)$. The composition “first $f$, then $g$” corresponds to the product $A_gA_f$.",
  "Stĺpec pravých strán patrí do {@0}. <em>stĺpca</em> determinantu, nie do {@1}. riadka.": "The column of right-hand sides goes into <em>column</em> {@0} of the determinant, not row {@1}.",
  "Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.": "Sylvester's criterion: $D_1\\gt 0$ always holds, the condition comes from $D_2=\\det A\\gt 0$.",
  "Symetrická matica spĺňa $a_{ij}=a_{ji}$ pre všetky dvojice prvkov súmerných podľa hlavnej diagonály. Porovnaj ich jednu po druhej.": "A symmetric matrix satisfies $a_{ij}=a_{ji}$ for all pairs of entries symmetric about the main diagonal. Compare them one by one.",
  "Sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé, alebo nezávislé?": "Are the vectors $u={@0}$, $v={@1}$ and $w={@2}$ linearly dependent or independent?",
  "Sú vektory lineárne závislé, alebo nezávislé?": "Are the vectors linearly dependent or independent?",
  "Súradnice vektora v báze b₁, b₂": "Coordinates of a vector in the basis b₁, b₂",
  "Sústava je ${@0}={@1}$, ${@2}={@3}$. Vypočítaj jej determinant $D$.": "The system is ${@0}={@1}$, ${@2}={@3}$. Compute its determinant $D$.",
  "Sústava nemá riešenie, len keď vznikne riadok $(0\\ 0\\ 0\\mid c)$ s $c\\neq 0$, teda $h(A)\\neq h(A\\mid b)$.": "The system has no solution only when a row $(0\\ 0\\ 0\\mid c)$ with $c\\neq 0$ appears, i.e. $h(A)\\neq h(A\\mid b)$.",
  "Súčiny na diagonálach smerom doľava dole sa od kladných členov odčítajú, nie pripočítajú.": "The products on the diagonals going down to the left are subtracted from the positive terms, not added.",
  "Sčítaj ich: aký je vektor ${@0}$?": "Add them: what is the vector ${@0}$?",
  "Teda {@0}. riadok matice $A^{-1}$ je $\\frac{1}{{@1}}({@2})={@3}$.": "So row {@0} of the matrix $A^{-1}$ is $\\frac{1}{{@1}}({@2})={@3}$.",
  "To je $\\dim\\operatorname{Im}f=h(A)$. Dimenzia jadra je počet stĺpcov mínus hodnosť.": "That is $\\dim\\operatorname{Im}f=h(A)$. The dimension of the kernel is the number of columns minus the rank.",
  "To je dimenzia celého priestoru $\\mathbb{R}^{{@0}}$. Podpriestor môže mať menšiu dimenziu, rozhoduje hodnosť.": "That is the dimension of the whole space $\\mathbb{R}^{{@0}}$. A subspace can have a smaller dimension; the rank decides.",
  "To je dimenzia jadra. Dimenzia obrazu sa rovná hodnosti matice.": "That is the dimension of the kernel. The dimension of the image equals the rank of the matrix.",
  "To je hodnosť matice sústavy. Dimenzia priestoru riešení je počet voľných neznámych, $n-h(A)$.": "That is the rank of the coefficient matrix. The dimension of the solution space is the number of free unknowns, $n-h(A)$.",
  "To je počet riadkov pôvodnej matice. Hodnosť je počet nenulových riadkov až po prevedení do stupňovitého tvaru.": "That is the number of rows of the original matrix. The rank is the number of non-zero rows only after reducing to row echelon form.",
  "To je počet stĺpcov. Hodnosť je počet nenulových riadkov stupňovitého tvaru.": "That is the number of columns. The rank is the number of non-zero rows of the row echelon form.",
  "To je počet vektorov. Niektoré z nich môžu byť lineárnou kombináciou ostatných; dimenzia je hodnosť matice z nich zostavenej.": "That is the number of vectors. Some of them may be linear combinations of the others; the dimension is the rank of the matrix built from them.",
  "Toto je projekcia vektora $u$ na smer $v$. Premietame $v$ na smer $u$, výsledok je preto násobkom vektora $u$.": "This is the projection of the vector $u$ onto the direction of $v$. We project $v$ onto the direction of $u$, so the result is a multiple of the vector $u$.",
  "Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.": "Transpose the matrix and compare it with $A$ and with $-A$. Look at the diagonal too.",
  "Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi": "Three possibilities for a system of two equations in two unknowns",
  "Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.": "Three vectors in $\\mathbb{R}^3$ are linearly independent exactly when the determinant of the matrix built from them is non-zero.",
  "Uhol priamky θ (°)": "Angle of the line θ (°)",
  "Uhol φ (°)": "Angle φ (°)",
  "Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.": "Bring the augmented matrix to row echelon form and compare $h(A)$ with $h(A\\mid b)$ and with the number of unknowns.",
  "Uprav rozšírenú maticu na stupňovitý tvar. Aká je hodnosť matice sústavy $h(A)$?": "Bring the augmented matrix to row echelon form. What is the rank of the coefficient matrix $h(A)$?",
  "Uprav rozšírenú maticu na stupňovitý tvar. Z posledného riadku vypočítaj $x_3$.": "Bring the augmented matrix to row echelon form. Compute $x_3$ from the last row.",
  "Urči definitnosť kvadratickej formy $Q={@0}$ (vyber najpresnejšiu možnosť).": "Determine the definiteness of the quadratic form $Q={@0}$ (choose the most precise option).",
  "Urči dimenziu podpriestoru $W=\\mathcal{L}({@0})$ priestoru $\\mathbb{R}^{{@1}}$.": "Find the dimension of the subspace $W=\\mathcal{L}({@0})$ of the space $\\mathbb{R}^{{@1}}$.",
  "Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.": "Find the dimension of the subspace $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.",
  "Urči hodnosť matice $A={@0}$.": "Find the rank of the matrix $A={@0}$.",
  "Urči číslo $c$ (prípadne ako zlomok).": "Find the number $c$ (as a fraction if needed).",
  "V menovateli sú normy $\\|u\\|$ a $\\|v\\|$, nie ich druhé mocniny.": "The denominator contains the norms $\\|u\\|$ and $\\|v\\|$, not their squares.",
  "V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.": "The third row contains two zeros – expand $\\det(A-\\lambda I)$ along it and solve the remaining $2\\times 2$ determinant as a quadratic equation.",
  "V {@0}. riadku je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto riadka dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "Row {@0} contains a single non-zero entry $a_{{@1}{@2}}={@3}$, so the Laplace expansion along this row gives $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "V {@0}. stĺpci je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto stĺpca dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "Column {@0} contains a single non-zero entry $a_{{@1}{@2}}={@3}$, so the Laplace expansion along this column gives $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "Vektor $v={@0}$ najprv zobrazíme zobrazením $f$: {@1}, a výsledok potom zobrazením $g$: {@2}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.": "The vector $v={@0}$ is first mapped by $f$: {@1}, and the result is then mapped by $g$: {@2}. Find the image $(g\\circ f)(v)$ in the form “x; y”.",
  "Vektory bázy patria do <em>stĺpcov</em> matice sústavy, nie do riadkov: $i$-ta rovnica porovnáva $i$-te zložky.": "The basis vectors go into the <em>columns</em> of the coefficient matrix, not the rows: the $i$-th equation compares the $i$-th components.",
  "Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.": "Vectors are orthogonal exactly when their dot product is zero.",
  "Vektory sú závislé práve vtedy, keď $D={@0}=0$. {@1} Pre $t={@2}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.": "The vectors are dependent exactly when $D={@0}=0$. {@1} For $t={@2}$, $w$ is a linear combination of the vectors $u$ and $v$.",
  "Vektory zapíš do riadkov matice a urči jej hodnosť.": "Write the vectors as the rows of a matrix and find its rank.",
  "Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: ${@0}={@1}$.": "We write the vectors as the rows of a matrix and compute the determinant by Sarrus' rule: ${@0}={@1}$.",
  "Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U={@0}$ a $P={@1}$. Keďže $\\det U={@2}$, je $U^{-1}={@3}$ a $A=PU^{-1}={@4}{@5}={@6}$.": "We write the vectors as columns: $A\\,U=P$, where $U={@0}$ and $P={@1}$. Since $\\det U={@2}$, we get $U^{-1}={@3}$ and $A=PU^{-1}={@4}{@5}={@6}$.",
  "Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.": "Eigenvectors are the non-zero solutions of the homogeneous system $(A-\\lambda I)v=o$.",
  "Vlastné vektory: ${@0}$ pre $\\lambda={@1}$ a ${@2}$ pre $\\lambda={@3}$. Teda $P={@4}$, $D={@5}$, $\\det P={@6}$ a $P^{-1}={@7}$.": "Eigenvectors: ${@0}$ for $\\lambda={@1}$ and ${@2}$ for $\\lambda={@3}$. So $P={@4}$, $D={@5}$, $\\det P={@6}$ and $P^{-1}={@7}$.",
  "Vlastné čísla sú prvky diagonály len pri trojuholníkovej matici. Tu rieš charakteristickú rovnicu $\\det(A-\\lambda I)=0$.": "The eigenvalues are the diagonal entries only for a triangular matrix. Here, solve the characteristic equation $\\det(A-\\lambda I)=0$.",
  "Vo vete o dimenzii je dimenzia vzoru, teda počet stĺpcov ${@0}$, nie počet riadkov.": "The rank–nullity theorem uses the dimension of the domain, i.e. the number of columns ${@0}$, not the number of rows.",
  "Vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$.": "Multiplying a row by ${@0}$ multiplies the determinant by ${@1}$.",
  "Vypočítaj $(A^{-1})_{{@0}{@1}}$. Neceločíselný výsledok zadaj ako zlomok.": "Compute $(A^{-1})_{{@0}{@1}}$. Enter a non-integer result as a fraction.",
  "Vypočítaj $A=PU^{-1}$ (prvky po riadkoch).": "Compute $A=PU^{-1}$ (entries row by row).",
  "Vypočítaj $A^{-1}$ (prvky po riadkoch).": "Compute $A^{-1}$ (entries row by row).",
  "Vypočítaj $A^{{@0}}=PD^{{@1}}P^{-1}$ (prvky po riadkoch).": "Compute $A^{{@0}}=PD^{{@1}}P^{-1}$ (entries row by row).",
  "Vypočítaj $X={@0}$ (prvky po riadkoch).": "Compute $X={@0}$ (entries row by row).",
  "Vypočítaj $\\cos\\varphi$ (ako zlomok).": "Compute $\\cos\\varphi$ (as a fraction).",
  "Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u={@0}$ a $v={@1}$. Výsledok zadaj ako zlomok.": "Compute $\\cos\\varphi$, where $\\varphi$ is the angle between the vectors $u={@0}$ and $v={@1}$. Enter the result as a fraction.",
  "Vypočítaj $\\det A$.": "Compute $\\det A$.",
  "Vypočítaj $\\langle u, u\\rangle$.": "Compute $\\langle u, u\\rangle$.",
  "Vypočítaj $\\langle u, v\\rangle$.": "Compute $\\langle u, v\\rangle$.",
  "Vypočítaj $\\langle u_2, w_1\\rangle$, kde $w_1=u_1$.": "Compute $\\langle u_2, w_1\\rangle$, where $w_1=u_1$.",
  "Vypočítaj $\\langle v, u\\rangle$.": "Compute $\\langle v, u\\rangle$.",
  "Vypočítaj $\\langle w_1, w_1\\rangle$.": "Compute $\\langle w_1, w_1\\rangle$.",
  "Vypočítaj $\\|u\\|$.": "Compute $\\|u\\|$.",
  "Vypočítaj $\\|v\\|$.": "Compute $\\|v\\|$.",
  "Vypočítaj $c_1$ a zadaj všetky súradnice.": "Compute $c_1$ and enter all the coordinates.",
  "Vypočítaj $c_2$.": "Compute $c_2$.",
  "Vypočítaj $f(v)$.": "Compute $f(v)$.",
  "Vypočítaj $g\\bigl(f(v)\\bigr)$.": "Compute $g\\bigl(f(v)\\bigr)$.",
  "Vypočítaj $x_{{@0}}$. Neceločíselný výsledok zadaj ako zlomok.": "Compute $x_{{@0}}$. Enter a non-integer result as a fraction.",
  "Vypočítaj algebraické doplnky {@0}. stĺpca: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.": "Compute the cofactors of column {@0}: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.",
  "Vypočítaj algebraický doplnok $A_{{@0}{@1}}$.": "Compute the cofactor $A_{{@0}{@1}}$.",
  "Vypočítaj determinant $D$ matice sústavy.": "Compute the determinant $D$ of the coefficient matrix.",
  "Vypočítaj determinant $D_\\alpha$ (prvý stĺpec nahradíš pravými stranami).": "Compute the determinant $D_\\alpha$ (replace the first column with the right-hand sides).",
  "Vypočítaj determinant $D_\\beta$ (druhý stĺpec nahradíš pravými stranami).": "Compute the determinant $D_\\beta$ (replace the second column with the right-hand sides).",
  "Vypočítaj determinant $D_{{@0}}$.": "Compute the determinant $D_{{@0}}$.",
  "Vypočítaj determinant ${@0}$.": "Compute the determinant ${@0}$.",
  "Vypočítaj determinant matice $A={@0}$.": "Compute the determinant of the matrix $A={@0}$.",
  "Vypočítaj diagonálny prvok $(A^{T}A)_{{@0}{@1}}$.": "Compute the diagonal entry $(A^{T}A)_{{@0}{@1}}$.",
  "Vypočítaj hlavný rohový minor $D_{@0}$.": "Compute the leading principal minor $D_{@0}$.",
  "Vypočítaj inverznú maticu k $U={@0}$ (prvky po riadkoch).": "Compute the inverse of $U={@0}$ (entries row by row).",
  "Vypočítaj maticu $A+B^{T}$ (prvky po riadkoch).": "Compute the matrix $A+B^{T}$ (entries row by row).",
  "Vypočítaj maticu $X$ (prvky po riadkoch).": "Compute the matrix $X$ (entries row by row).",
  "Vypočítaj maticu ${@0}$ (prvky po riadkoch).": "Compute the matrix ${@0}$ (entries row by row).",
  "Vypočítaj minor $M_{{@0}{@1}}$ (determinant po vynechaní {@2}. riadka a {@3}. stĺpca).": "Compute the minor $M_{{@0}{@1}}$ (the determinant after deleting row {@2} and column {@3}).",
  "Vypočítaj ortogonálnu projekciu vektora $v={@0}$ na smer vektora $u={@1}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).": "Compute the orthogonal projection of the vector $v={@0}$ onto the direction of the vector $u={@1}$. Enter the components separated by semicolons (fractions in the form $p/q$).",
  "Vypočítaj rohový minor $D_2$.": "Compute the leading minor $D_2$.",
  "Vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Compute the trace $\\operatorname{tr}(A^{T}A)$.",
  "Vypočítaj stopu $\\operatorname{tr}A$.": "Compute the trace $\\operatorname{tr}A$.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doprava dole.": "Compute the sum of the three products on the diagonals going down to the right.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doľava dole.": "Compute the sum of the three products on the diagonals going down to the left.",
  "Vypočítaj vektor ${@0}u$.": "Compute the vector ${@0}u$.",
  "Vypočítaj vektor ${@0}{@1}v$.": "Compute the vector ${@0}{@1}v$.",
  "Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u={@0}$ a $v={@1}$.": "Compute the distance $\\|u-v\\|$ of the vectors $u={@0}$ and $v={@1}$.",
  "Vyrieš charakteristickú rovnicu $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Zadaj vlastné čísla.": "Solve the characteristic equation $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Enter the eigenvalues.",
  "Vyrieš maticovú rovnicu ${@0}$, kde $A={@1}$ a $B={@2}$. Prvky matice $X$ zadaj po riadkoch.": "Solve the matrix equation ${@0}$, where $A={@1}$ and $B={@2}$. Enter the entries of the matrix $X$ row by row.",
  "Výmena riadkov mení znamienko a vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$": "Swapping rows changes the sign and multiplying a row by ${@0}$ multiplies the determinant by ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$",
  "Z prvého riadku vypočítaj $x_1$ a zadaj celé riešenie.": "Compute $x_1$ from the first row and enter the whole solution.",
  "Z rovnice $AU=P$ treba násobiť maticou $U^{-1}$ sprava: $A=PU^{-1}$. Násobenie matíc nie je komutatívne.": "From the equation $AU=P$ you must multiply by the matrix $U^{-1}$ from the right: $A=PU^{-1}$. Matrix multiplication is not commutative.",
  "Z rovnice $X=\\tfrac{1}{{@0}}(A+B^{T})$. Máme $B^{T}={@1}$, $A+B^{T}={@2}$, teda $X={@3}$.": "From the equation, $X=\\tfrac{1}{{@0}}(A+B^{T})$. We have $B^{T}={@1}$, $A+B^{T}={@2}$, so $X={@3}$.",
  "Z {@0}. riadku: ${@1}=0$, preto je vlastný vektor násobkom ${@2}$.": "From row {@0}: ${@1}=0$, so the eigenvector is a multiple of ${@2}$.",
  "Zabudol si transponovať maticu $B$: v $B^{T}$ sú riadky matice $B$ zapísané ako stĺpce.": "You forgot to transpose the matrix $B$: in $B^{T}$ the rows of $B$ are written as columns.",
  "Zabudol si transponovať maticu $B$: v rovnici je $B^{T}$.": "You forgot to transpose the matrix $B$: the equation contains $B^{T}$.",
  "Zabudol si vektory vynásobiť ich koeficientmi. Každú zložku vektora $u$ aj $v$ najprv vynásob príslušným číslom.": "You forgot to multiply the vectors by their coefficients. First multiply every component of $u$ and $v$ by the corresponding number.",
  "Zadaj $\\alpha$ a $\\beta$.": "Enter $\\alpha$ and $\\beta$.",
  "Zadaj jedno netriviálne riešenie (uznáme ľubovoľný nenulový násobok).": "Enter one non-trivial solution (any non-zero multiple is accepted).",
  "Zadaj projekciu $\\operatorname{proj}_u v$ (zlomky v tvare $p/q$).": "Enter the projection $\\operatorname{proj}_u v$ (fractions in the form $p/q$).",
  "Zadaj smerový vektor jadra (ľubovoľný nenulový násobok je správne).": "Enter a direction vector of the kernel (any non-zero multiple is correct).",
  "Zadaj vektor $w_2$.": "Enter the vector $w_2$.",
  "Zadaj vlastný vektor k $\\lambda={@0}$ (ľubovoľný nenulový násobok).": "Enter an eigenvector for $\\lambda={@0}$ (any non-zero multiple).",
  "Zadaj všetky vlastné čísla matice $A$.": "Enter all eigenvalues of the matrix $A$.",
  "Zadaj {@0}. riadok matice $A^{-1}$.": "Enter row {@0} of the matrix $A^{-1}$.",
  "Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.": "Write the equality component by component – you get a system of two equations for $\\alpha$ and $\\beta$.",
  "Zobrazenia si použil v opačnom poradí. Najprv sa na $v$ použije $f$, preto je matica zloženia $A_gA_f$ (matica $A_f$ stojí pri vektore).": "You applied the maps in the reverse order. $f$ is applied to $v$ first, so the matrix of the composition is $A_gA_f$ (the matrix $A_f$ stands next to the vector).",
  "Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A={@0}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).": "The map $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ is given by $f(x)=Ax$, where $A={@0}$. The kernel $\\operatorname{Ker}f$ is a line. Find its direction vector (any non-zero multiple is correct).",
  "Zobrazenie $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ je dané maticou $A={@2}$. Urči $\\dim\\operatorname{{@3}}f$.": "The map $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ is given by the matrix $A={@2}$. Find $\\dim\\operatorname{{@3}}f$.",
  "Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.": "Build the symmetric matrix of the form (half of the coefficient for mixed terms) and compute the leading principal minors.",
  "Zostav sústavu (vektory bázy v stĺpcoch) a uprav ju na stupňovitý tvar. Z posledného riadku vypočítaj $c_3$.": "Set up the system (basis vectors as columns) and bring it to row echelon form. Compute $c_3$ from the last row.",
  "Zvyšný činiteľ je charakteristický polynóm ľavej hornej podmatice $2\\times 2$. Aká je jej stopa?": "The remaining factor is the characteristic polynomial of the upper-left $2\\times 2$ submatrix. What is its trace?",
  "Záporne definitná je forma len vtedy, keď sa znamienka rohových minorov striedajú a $D_1\\lt 0$.": "A form is negative definite only when the signs of the leading minors alternate and $D_1\\lt 0$.",
  "Závislé sú vektory len vtedy, keď je determinant nulový. Prepočítaj ho Sarrusovým pravidlom a pozor na znamienka.": "The vectors are dependent only when the determinant is zero. Recompute it using Sarrus' rule and watch the signs.",
  "ani symetrická, ani antisymetrická": "neither symmetric nor skew-symmetric",
  "antisymetrická": "skew-symmetric",
  "indefinitná": "indefinite",
  "je podpriestor": "is a subspace",
  "je to lineárny obal vektorov $(1, {@0}, 0)$ a $({@1}, 0, 1)$": "it is the linear span of the vectors $(1, {@0}, 0)$ and $({@1}, 0, 1)$",
  "je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia": "it is the solution set of a homogeneous linear equation – the sum of solutions and a multiple of a solution are again solutions",
  "je to množina riešení homogénnej sústavy (priamka cez počiatok)": "it is the solution set of a homogeneous system (a line through the origin)",
  "jeden parameter": "one parameter",
  "kladne definitná": "positive definite",
  "kladne semidefinitná": "positive semidefinite",
  "kolmá projekcia na os $x$": "orthogonal projection onto the $x$-axis",
  "kolmá projekcia na os $y$": "orthogonal projection onto the $y$-axis",
  "komplexné vlastné čísla – žiadny reálny vlastný smer": "complex eigenvalues – no real eigendirection",
  "lineárne nezávislé": "linearly independent",
  "lineárne závislé": "linearly dependent",
  "napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie": "e.g. $(1, 0, 0)$ and $(0, 1, 0)$ belong to it, but their sum $(1, 1, 0)$ does not – it is not closed under addition",
  "napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom": "e.g. $(1, 0, 0)$ belongs to it, but $(-1)\\cdot(1, 0, 0)$ does not – it is not closed under scalar multiplication",
  "napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$": "e.g. $(1, 1, 0)$ belongs to it, but $2\\cdot(1, 1, 0)=(2, 2, 0)$ does not, because $2\\neq 4$",
  "nekladné": "non-positive",
  "nenulové riadky": "non-zero rows",
  "nenulový riadok": "non-zero row",
  "neobsahuje nulový vektor ($0\\neq {@0}$)": "it does not contain the zero vector ($0\\neq {@0}$)",
  "neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka ${@0}\\neq 0$": "it does not contain the zero vector: the first component is 0 only for $s=0$, but then the second component is ${@0}\\neq 0$",
  "neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická": "neither $A^{T}=A$ nor $A^{T}=-A$ holds, so the matrix is neither symmetric nor skew-symmetric",
  "nezáporné": "non-negative",
  "nie je podpriestor": "is not a subspace",
  "osová súmernosť podľa osi $x$": "reflection in the $x$-axis",
  "osová súmernosť podľa osi $y$": "reflection in the $y$-axis",
  "osová súmernosť podľa priamky $y=-x$": "reflection in the line $y=-x$",
  "osová súmernosť podľa priamky $y=x$": "reflection in the line $y=x$",
  "platí $A^{T}=-A$, teda matica je antisymetrická": "$A^{T}=-A$ holds, so the matrix is skew-symmetric",
  "platí $A^{T}=A$, teda matica je symetrická": "$A^{T}=A$ holds, so the matrix is symmetric",
  "práve jedno riešenie": "exactly one solution",
  "rotácia o $180^\\circ$": "rotation by $180^\\circ$",
  "rotácia o $90^\\circ$ proti smeru hodinových ručičiek": "rotation by $90^\\circ$ counterclockwise",
  "rotácia o $90^\\circ$ v smere hodinových ručičiek": "rotation by $90^\\circ$ clockwise",
  "rovnoľahlosť so stredom v počiatku a koeficientom $2$": "dilation with centre at the origin and scale factor $2$",
  "skosenie $(x, y)\\mapsto(x+y, y)$": "shear $(x, y)\\mapsto(x+y, y)$",
  "sprava": "from the right",
  "symetrická": "symmetric",
  "súradnice v báze B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) v štandardnej báze": "coordinates in the basis B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) in the standard basis",
  "teda $\\alpha=\\frac{{@0}}{{@1}}={@2}$ a $\\beta=\\frac{{@3}}{{@4}}={@5}$.": "so $\\alpha=\\frac{{@0}}{{@1}}={@2}$ and $\\beta=\\frac{{@3}}{{@4}}={@5}$.",
  "vedúce prvky sú zvýraznené, pod schodmi sú len nuly": "the pivots are highlighted, below the steps there are only zeros",
  "všetky rohové minory sú kladné": "all leading minors are positive",
  "z {@0}. riadku: ${@1} = {@2}$": "from row {@0}: ${@1} = {@2}$",
  "znamienka rohových minorov sa striedajú ({@0})": "the signs of the leading minors alternate ({@0})",
  "záporne definitná": "negative definite",
  "záporne semidefinitná": "negative semidefinite",
  "zľava": "from the left",
  "{@0}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: ${@1}\\times{@2}={@3}${@4}. Všetky riešenia sú $t\\cdot{@5}$, $t\\in\\mathbb{R}$.": "{@0}<br>$h(A)=2\\lt 3$, the solutions form a line (one parameter). The solution is orthogonal to both non-zero rows of the row echelon form, so we get it as their cross product: ${@1}\\times{@2}={@3}${@4}. All solutions are $t\\cdot{@5}$, $t\\in\\mathbb{R}$.",
  "{@0}<br>$h(A)={@1}$, teda $\\dim\\operatorname{Im}f={@2}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.": "{@0}<br>$h(A)={@1}$, so $\\dim\\operatorname{Im}f={@2}$ and by the rank–nullity theorem $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.",
  "{@0}<br>Podľa Frobeniovej vety: {@1}.": "{@0}<br>By the Rouché–Capelli (Frobenius) theorem: {@1}.",
  "{@0}<br>Spätné dosadzovanie – {@1}": "{@0}<br>Back substitution – {@1}",
  "Úpravou: {@0}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom ${@1}\\times{@2}={@3}${@4}.": "After row reduction: {@0}<br>The rank is 2, the solution is orthogonal to both non-zero rows, so it is a multiple of ${@1}\\times{@2}={@3}${@4}.",
  "Číslo $\\lambda={@0}$ je vlastným číslom matice $A={@1}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).": "The number $\\lambda={@0}$ is an eigenvalue of the matrix $A={@1}$. Find a corresponding eigenvector (any non-zero multiple is correct).",
  "Štvorcová matica $A$ rádu ${@0}$ má $\\det A={@1}$.{@2} Vypočítaj ${@3}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.": "A square matrix $A$ of order ${@0}$ has $\\det A={@1}$.{@2} Compute ${@3}$. Enter a non-integer result as a fraction, e.g. $-3/4$.",
  "Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.": "A square matrix of order 3 has rank 3 exactly when its determinant is non-zero.",
  "− súčiny na oranžových diagonálach": "− products on the orange diagonals",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "That is the square of the distance. You still have to take the square root of the result."
 }
});
