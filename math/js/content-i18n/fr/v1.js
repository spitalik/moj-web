/* Français: preklad js/rocniky/v1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/v1/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "v1-vektory": {
   "title": "Vecteurs de Rⁿ et dépendance linéaire",
   "summary": "Opérations sur les vecteurs, combinaison linéaire, sous-espace engendré, dépendance et indépendance linéaires.",
   "theory": [
    "<p>Un <strong>vecteur</strong> de $\\mathbb{R}^n$ est un $n$-uplet ordonné de nombres réels $u=(u_1, u_2, \\dots, u_n)$. On additionne les vecteurs et on les multiplie par un nombre réel (un scalaire) composante par composante : $u+v=(u_1+v_1, \\dots, u_n+v_n)$ et $c\\,u=(c\\,u_1, \\dots, c\\,u_n)$. On note le vecteur nul $o=(0, \\dots, 0)$.</p>",
    "<p>Une <strong>combinaison linéaire</strong> des vecteurs $u_1, \\dots, u_k$ est tout vecteur de la forme $c_1u_1+c_2u_2+\\dots+c_ku_k$, où $c_1, \\dots, c_k\\in\\mathbb{R}$ sont les coefficients. L’ensemble de toutes les combinaisons linéaires s’appelle le <strong>sous-espace engendré</strong> (ou enveloppe linéaire) et se note $\\mathcal{L}(u_1, \\dots, u_k)$.</p>",
    {
     "fig": "v1-linkomb",
     "caption": "Les vecteurs $u=(2, 1)$ et $v=(-1, 2)$ ne sont pas colinéaires, donc tout vecteur du plan peut s’écrire $\\alpha u+\\beta v$. Fais varier les coefficients $\\alpha$ et $\\beta$ et observe comment change le vecteur résultant (en orange)."
    },
    "<p>Les vecteurs $u_1, \\dots, u_k$ sont <strong>linéairement indépendants</strong> si l’égalité $c_1u_1+\\dots+c_ku_k=o$ entraîne $c_1=\\dots=c_k=0$. Dans le cas contraire, ils sont <strong>linéairement dépendants</strong>, ce qui se produit si et seulement si au moins l’un d’eux peut s’exprimer comme combinaison linéaire des autres.</p>\n       <p>En pratique, on écrit les vecteurs dans les lignes d’une matrice $A$ : ils sont indépendants si et seulement si $h(A)=k$ (pour le rang, voir les leçons suivantes). Pour $n$ vecteurs de $\\mathbb{R}^n$, il suffit de vérifier si $\\det A\\neq 0$. Plus de $n$ vecteurs de $\\mathbb{R}^n$ sont toujours linéairement dépendants, et toute famille contenant le vecteur nul est liée.</p>"
   ],
   "examples": [
    {
     "task": "Détermine si les vecteurs $u=(1, 2, 0)$, $v=(0, 1, 1)$ et $w=(2, 5, 1)$ sont linéairement dépendants.",
     "steps": [
      "On écrit les vecteurs dans les lignes d’une matrice et on calcule le déterminant en développant selon la 1re ligne :",
      "$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.",
      "Le déterminant est nul, les vecteurs sont donc <strong>linéairement dépendants</strong>. En effet, $w=2u+v$."
     ]
    },
    {
     "task": "Exprime le vecteur $w=(4, 7)$ comme combinaison linéaire des vecteurs $u=(2, 1)$ et $v=(-1, 2)$.",
     "steps": [
      "On cherche $\\alpha, \\beta$ tels que $\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$, c’est-à-dire le système $2\\alpha-\\beta=4$, $\\alpha+2\\beta=7$.",
      "De la deuxième équation, $\\alpha=7-2\\beta$ ; en substituant, $14-4\\beta-\\beta=4$, donc $\\beta=2$ et $\\alpha=3$.",
      "<strong>Résultat :</strong> $w=3u+2v$."
     ]
    }
   ]
  },
  "v1-operacie": {
   "title": "Matrices et opérations sur les matrices",
   "summary": "Type d’une matrice, matrices particulières, addition, multiplication par un scalaire, transposition et trace.",
   "theory": [
    "<p>Une <strong>matrice</strong> de type $m\\times n$ est un tableau rectangulaire $A=(a_{ij})$ de nombres réels à $m$ lignes et $n$ colonnes. Deux matrices sont égales si elles ont le même type et les mêmes coefficients aux mêmes places. Une matrice de type $n\\times n$ est <strong>carrée</strong> d’ordre $n$ ; les coefficients $a_{11}, a_{22}, \\dots, a_{nn}$ forment sa <strong>diagonale principale</strong>. Sont importantes la matrice <strong>identité</strong> $I$ (des 1 sur la diagonale, des 0 ailleurs), la matrice <strong>nulle</strong> $O$, la matrice <strong>diagonale</strong> et la matrice <strong>triangulaire supérieure (inférieure)</strong> (des zéros sous (au-dessus de) la diagonale).</p>",
    "<p>La <strong>somme</strong> de matrices de même type et le <strong>produit</strong> d’une matrice par un nombre se calculent coefficient par coefficient : $(A+B)_{ij}=a_{ij}+b_{ij}$, $(cA)_{ij}=c\\,a_{ij}$. On a $A+B=B+A$, $(A+B)+C=A+(B+C)$, $c(A+B)=cA+cB$, $(c+d)A=cA+dA$. Les matrices de type $m\\times n$ munies de ces opérations forment un espace vectoriel.</p>",
    "<p>La <strong>transposée</strong> $A^{T}$ d’une matrice de type $m\\times n$ est de type $n\\times m$ et $(A^{T})_{ij}=a_{ji}$ – les lignes deviennent des colonnes. On a $(A^{T})^{T}=A$, $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$ et $(AB)^{T}=B^{T}A^{T}$ (l’ordre s’inverse).</p>\n       <p>Une matrice carrée est <strong>symétrique</strong> si $A^{T}=A$, et <strong>antisymétrique</strong> si $A^{T}=-A$ (elle a alors des zéros sur la diagonale). Toute matrice carrée se décompose de façon unique en la somme $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$ d’une partie symétrique et d’une partie antisymétrique. La <strong>trace</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$ est la somme des coefficients diagonaux ; pour toute matrice, $\\operatorname{tr}(A^{T}A)$ est la somme des carrés de tous ses coefficients.</p>"
   ],
   "examples": [
    {
     "task": "Pour $A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$ et $B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$, calcule $2A-B^{T}$.",
     "steps": [
      "$B$ est de type $3\\times 2$, donc $B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$ est de type $2\\times 3$, comme $A$.",
      "$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.",
      "<strong>Résultat :</strong> $2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$."
     ]
    },
    {
     "task": "Décompose la matrice $A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$ en somme d’une matrice symétrique et d’une matrice antisymétrique.",
     "steps": [
      "$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.",
      "Partie symétrique : $S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$.",
      "Partie antisymétrique : $K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$. Vérification : $S+K=A$."
     ]
    }
   ]
  },
  "v1-hodnost": {
   "title": "Rang d’une matrice et opérations sur les lignes",
   "summary": "Opérations élémentaires sur les lignes, forme échelonnée, élimination de Gauss et rang d’une matrice.",
   "theory": [
    "<p>Les <strong>opérations élémentaires sur les lignes</strong> sont : (1) l’échange de deux lignes, (2) la multiplication d’une ligne par un nombre non nul, (3) l’ajout à une ligne d’un multiple d’une autre ligne. Si $B$ s’obtient à partir de $A$ par un nombre fini de telles opérations, on écrit $A\\sim B$ (les matrices sont équivalentes par lignes). La notation $R_2-3R_1$ signifie qu’on remplace la deuxième ligne par la différence entre la deuxième ligne et le triple de la première.</p>",
    "<p>Une matrice est sous <strong>forme échelonnée</strong> si chaque ligne non nulle commence par plus de zéros que la ligne au-dessus et si les lignes nulles sont à la fin. Le premier coefficient non nul d’une ligne est son <strong>pivot</strong>. L’<strong>élimination de Gauss</strong> transforme toute matrice en forme échelonnée : dans la colonne courante, on choisit un pivot et, grâce à l’opération (3), on annule tout ce qui se trouve en dessous. Si, en plus, on ramène les pivots à 1 et qu’on annule aussi les coefficients au-dessus d’eux, on obtient la forme échelonnée réduite (élimination de Gauss–Jordan).</p>",
    {
     "fig": "v1-stupne",
     "caption": "Forme échelonnée : en descendant, les pivots se décalent vers la droite. La matrice a trois lignes non nulles, donc $h(A)=3$."
    },
    "<p>Le <strong>rang</strong> $h(A)$ est le nombre maximal de lignes linéairement indépendantes de la matrice $A$. Les opérations sur les lignes ne changent pas le rang, donc $h(A)$ est le nombre de lignes non nulles de la forme échelonnée. On a $h(A)=h(A^{T})$ (le rang des lignes est égal au rang des colonnes) et $h(A)\\le\\min(m, n)$. Pour une matrice carrée d’ordre $n$ : $h(A)=n\\iff\\det A\\neq 0\\iff A$ est inversible.</p>"
   ],
   "examples": [
    {
     "task": "Détermine le rang de la matrice $A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$.",
     "steps": [
      "$R_2-2R_1$, $R_3-3R_1$ : $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.",
      "$R_3-R_2$ : $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.",
      "La forme échelonnée a deux lignes non nulles, donc $h(A)=2$."
     ]
    },
    {
     "task": "Pour quelles valeurs de $a$ la matrice $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$ est-elle de rang 2 ?",
     "steps": [
      "$R_2-R_1$, $R_3-2R_1$ : $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.",
      "$R_3-R_2$ : $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.",
      "Pour $a=4$, la dernière ligne est nulle et $h(A)=2$ ; pour $a\\neq 4$, on a $h(A)=3$."
     ]
    }
   ]
  },
  "v1-determinant": {
   "title": "Déterminant 3×3 et développement de Laplace",
   "summary": "Règle de Sarrus, mineurs et cofacteurs, développement de Laplace, propriétés du déterminant.",
   "theory": [
    "<p>Le <strong>déterminant</strong> d’une matrice carrée d’ordre $n$ est le nombre $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$, où l’on somme sur les $n!$ permutations $\\pi$ de l’ensemble $\\{1, \\dots, n\\}$. Pour $n=3$, on obtient la <strong>règle de Sarrus</strong> :</p>\n       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>",
    {
     "fig": "v1-sarrus",
     "caption": "Règle de Sarrus : on recopie les deux premières colonnes à droite de la matrice. Les produits sur les diagonales descendant vers la droite sont pris avec le signe plus, ceux descendant vers la gauche avec le signe moins. Valable <strong>uniquement</strong> pour les matrices d’ordre 3."
    },
    "<p>Le <strong>mineur</strong> $M_{ij}$ est le déterminant de la matrice obtenue en supprimant la $i$-ième ligne et la $j$-ième colonne, et le <strong>cofacteur</strong> est $A_{ij}=(-1)^{i+j}M_{ij}$. <strong>Développement de Laplace</strong> selon la $i$-ième ligne : $\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$ (de même selon une colonne). Il est avantageux de développer selon la ligne ou la colonne qui contient le plus de zéros.</p>",
    "<p><strong>Propriétés :</strong> $\\det A^{T}=\\det A$ ; l’échange de deux lignes change le signe ; multiplier une ligne par $c$ multiplie le déterminant par $c$, donc $\\det(cA)=c^{n}\\det A$ ; ajouter un multiple d’une autre ligne ne change pas le déterminant ; une matrice avec une ligne nulle ou avec deux lignes proportionnelles a un déterminant nul ; le déterminant d’une matrice triangulaire est le produit des coefficients diagonaux. Pour des matrices de même ordre, $\\det(AB)=\\det A\\cdot\\det B$, et si $A$ est inversible, $\\det A^{-1}=\\frac{1}{\\det A}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "Termes positifs : $2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$.",
      "Termes négatifs : $3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$.",
      "<strong>Résultat :</strong> $\\det A=2-13=-11$."
     ]
    },
    {
     "task": "Calcule $\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$.",
     "steps": [
      "La 3e ligne ne contient qu’un seul coefficient non nul, $a_{32}=3$. Développement selon la 3e ligne : $\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$.",
      "$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$ (règle de Sarrus).",
      "<strong>Résultat :</strong> $\\det A=-3\\cdot 6=-18$."
     ]
    }
   ]
  },
  "v1-inverzna": {
   "title": "Matrice inverse : Gauss–Jordan et comatrice",
   "summary": "Existence de la matrice inverse, calcul par la méthode de Gauss–Jordan et par la comatrice, équations matricielles.",
   "theory": [
    "<p>L’<strong>inverse</strong> d’une matrice carrée $A$ d’ordre $n$ est la matrice $A^{-1}$ telle que $AA^{-1}=A^{-1}A=I$. Elle existe si et seulement si $\\det A\\neq 0$ (la matrice est <strong>inversible</strong>, ou régulière) ; une matrice de déterminant nul est <strong>singulière</strong>. On a $(A^{-1})^{-1}=A$, $(A^{T})^{-1}=(A^{-1})^{T}$ et $(AB)^{-1}=B^{-1}A^{-1}$.</p>",
    "<p><strong>Méthode de Gauss–Jordan :</strong> par des opérations sur les lignes, on transforme la matrice augmentée $(A\\mid I)$ en la forme $(I\\mid B)$ ; alors $B=A^{-1}$. Si une ligne nulle apparaît à gauche au cours des calculs, la matrice $A$ est singulière.</p>",
    "<p>La <strong>matrice adjointe</strong> $\\operatorname{adj}A$ est la transposée de la matrice des cofacteurs (la comatrice) : $(\\operatorname{adj}A)_{ij}=A_{ji}$. On a $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$, donc $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ – attention à l’échange des indices. Pour $n=2$, on retrouve la formule bien connue $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    "<p><strong>Équations matricielles :</strong> si $A$ est inversible, l’équation $AX=B$ a pour unique solution $X=A^{-1}B$ et l’équation $XA=B$ a pour solution $X=BA^{-1}$. Comme la multiplication des matrices n’est pas commutative, le côté par lequel on multiplie est important.</p>"
   ],
   "examples": [
    {
     "task": "Par la méthode de Gauss–Jordan, trouve l’inverse de $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$ ; $R_3-R_1$ : $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "$R_2-R_3$ : $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$ ; $R_1-2R_2$ : $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "<strong>Résultat :</strong> $A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$ (vérification : $AA^{-1}=I$)."
     ]
    },
    {
     "task": "Pour $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$, calcule le coefficient $(A^{-1})_{13}$.",
     "steps": [
      "$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.",
      "$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$, où $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$.",
      "<strong>Résultat :</strong> $(A^{-1})_{13}=\\frac{1}{8}$."
     ]
    }
   ]
  },
  "v1-sustavy": {
   "title": "Systèmes d’équations linéaires",
   "summary": "Élimination de Gauss, théorème de Rouché–Fontené (Frobenius), règle de Cramer et systèmes homogènes.",
   "theory": [
    "<p>On écrit un système de $m$ équations linéaires à $n$ inconnues sous forme matricielle $Ax=b$, où $A$ est la <strong>matrice du système</strong>, $x=(x_1, \\dots, x_n)^{T}$ et $b$ est la colonne des seconds membres ; $(A\\mid b)$ est la <strong>matrice augmentée</strong>. Le système est <strong>homogène</strong> si $b=o$.</p>",
    "<p><strong>Théorème de Rouché–Fontené (Frobenius) :</strong> le système $Ax=b$ admet une solution si et seulement si $h(A)=h(A\\mid b)$. Si $h(A)=h(A\\mid b)=n$, la solution est unique ; si $h(A)=h(A\\mid b)=h\\lt n$, il y a une infinité de solutions, qui dépendent de $n-h$ paramètres.</p>",
    {
     "fig": "v1-priamky",
     "caption": "Deux équations à deux inconnues sont deux droites du plan : elles sont sécantes, strictement parallèles ou confondues."
    },
    "<p><strong>Élimination de Gauss :</strong> on met la matrice augmentée sous forme échelonnée et on calcule les inconnues par substitution en remontant depuis le bas ; les inconnues sans pivot sont des paramètres libres. <strong>Règle de Cramer :</strong> si $A$ est carrée et $D=\\det A\\neq 0$, alors $x_i=\\frac{D_i}{D}$, où $D_i$ est le déterminant de la matrice obtenue à partir de $A$ en remplaçant la $i$-ième colonne par la colonne $b$.</p>\n       <p>Un <strong>système homogène</strong> admet toujours la solution triviale $x=o$. Une solution non triviale existe si et seulement si $h(A)\\lt n$ (pour une matrice carrée, si et seulement si $\\det A=0$). L’ensemble de toutes les solutions est un sous-espace de $\\mathbb{R}^n$ de dimension $n-h(A)$.</p>"
   ],
   "examples": [
    {
     "task": "Résous le système $x_1+x_2+x_3=6$, $2x_1-x_2+x_3=3$, $x_1+2x_2-x_3=2$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$ ; $R_2-2R_1$, $R_3-R_1$ : $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.",
      "$R_2\\leftrightarrow R_3$, puis $R_3+3R_2$ : $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$.",
      "En remontant : $x_3=3$, $x_2=-4+2\\cdot 3=2$, $x_1=6-2-3=1$. <strong>Solution :</strong> $(1, 2, 3)$."
     ]
    },
    {
     "task": "Résous le système $x_1+2x_2-x_3=1$, $2x_1+4x_2+x_3=5$.",
     "steps": [
      "$R_2-2R_1$ : $\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$, donc $h(A)=h(A\\mid b)=2\\lt 3$ – une infinité de solutions à un paramètre.",
      "De la 2e ligne, $x_3=1$. L’inconnue $x_2$ n’a pas de pivot, on pose $x_2=t$ ; de la 1re ligne, $x_1=1-2t+1=2-2t$.",
      "<strong>Solution :</strong> $(2-2t, t, 1)$, $t\\in\\mathbb{R}$."
     ]
    }
   ]
  },
  "v1-priestory": {
   "title": "Espace vectoriel, base et dimension",
   "summary": "Espace vectoriel et sous-espace, base, dimension et coordonnées d’un vecteur dans une base.",
   "theory": [
    "<p>Un <strong>espace vectoriel</strong> sur $\\mathbb{R}$ est un ensemble $V$ muni d’une addition et d’une multiplication par un nombre réel, qui ne font pas sortir de $V$ et qui vérifient les règles habituelles : commutativité et associativité de l’addition, existence du vecteur nul et du vecteur opposé, lois de distributivité, $(cd)u=c(du)$ et $1\\cdot u=u$. Exemples : $\\mathbb{R}^n$, les matrices de type $m\\times n$, les polynômes de degré au plus $n$ ($P_n$), les fonctions réelles sur un intervalle.</p>",
    "<p>Un <strong>sous-espace</strong> est une partie non vide $W\\subseteq V$ stable par addition et par multiplication par un nombre ; on a alors nécessairement $o\\in W$. Sont par exemple des sous-espaces de $\\mathbb{R}^3$ les droites et les plans passant par l’origine, l’ensemble des solutions d’un système homogène et tout sous-espace engendré. Un plan qui ne passe pas par l’origine n’est pas un sous-espace.</p>",
    "<p>Une <strong>base</strong> de l’espace $V$ est une famille libre de vecteurs qui engendre tout $V$. Toutes les bases ont le même nombre d’éléments – la <strong>dimension</strong> $\\dim V$. Par exemple $\\dim\\mathbb{R}^n=n$ (base canonique $e_1, \\dots, e_n$), $\\dim P_n=n+1$ et l’espace des matrices $m\\times n$ est de dimension $mn$. Dans un espace de dimension $n$, toute famille de $n$ vecteurs linéairement indépendants est une base, et $\\dim\\mathcal{L}(u_1, \\dots, u_k)$ est le rang de la matrice de lignes $u_1, \\dots, u_k$.</p>",
    {
     "fig": "v1-baza",
     "caption": "La base $b_1=(2, 1)$, $b_2=(-1, 2)$ forme un quadrillage « oblique ». Les coordonnées $(c_1, c_2)$ d’un vecteur dans la base $B$ indiquent combien de pas il faut faire dans la direction $b_1$ et combien dans la direction $b_2$."
    },
    "<p>Si $B=(b_1, \\dots, b_n)$ est une base, tout vecteur s’écrit de façon <strong>unique</strong> sous la forme $v=c_1b_1+\\dots+c_nb_n$ ; les nombres $(c_1, \\dots, c_n)$ sont les <strong>coordonnées</strong> du vecteur $v$ dans la base $B$. On les trouve en résolvant le système dont la matrice a pour colonnes les vecteurs de la base et dont le second membre est $v$.</p>"
   ],
   "examples": [
    {
     "task": "Trouve les coordonnées du vecteur $v=(3, 0, 1)$ dans la base $b_1=(1, 0, 1)$, $b_2=(0, 1, 1)$, $b_3=(1, 1, 0)$.",
     "steps": [
      "De $v=c_1b_1+c_2b_2+c_3b_3$, on obtient le système $c_1+c_3=3$, $c_2+c_3=0$, $c_1+c_2=1$.",
      "En soustrayant les deux premières équations, $c_1-c_2=3$ ; avec $c_1+c_2=1$, on a $c_1=2$, $c_2=-1$ et $c_3=1$.",
      "<strong>Résultat :</strong> $(v)_B=(2, -1, 1)$. Vérification : $2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$."
     ]
    },
    {
     "task": "Détermine une base et la dimension du sous-espace $W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$.",
     "steps": [
      "La matrice du système $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$ est sous forme échelonnée et de rang 2, donc $\\dim W=4-2=2$.",
      "Inconnues libres : $x_3=s$, $x_4=t$. Alors $x_2=-t$ et $x_1=x_3-x_2=s+t$, donc $x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$.",
      "<strong>Résultat :</strong> base $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$, $\\dim W=2$."
     ]
    }
   ]
  },
  "v1-zobrazenia": {
   "title": "Applications linéaires et leurs matrices",
   "summary": "Application linéaire, sa matrice, composition d’applications, transformations géométriques du plan, noyau et image.",
   "theory": [
    "<p>Une application $f:V\\to W$ entre espaces vectoriels est <strong>linéaire</strong> si $f(u+v)=f(u)+f(v)$ et $f(cu)=c\\,f(u)$ pour tous vecteurs $u, v$ et tout nombre $c$ ; on a alors $f(o)=o$. Toute application linéaire $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ est de la forme $f(x)=Ax$ pour une unique matrice $A$ de type $m\\times n$, dont les colonnes sont les images des vecteurs de la base canonique : $A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$. À la composée $g\\circ f$ (d’abord $f$, puis $g$) correspond le produit de matrices $A_gA_f$.</p>",
    "<table class=\"tbl tbl-auto\"><tr><th>transformation de $\\mathbb{R}^2$</th><th>matrice</th></tr>\n       <tr><td>rotation d’angle $\\varphi$</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>\n       <tr><td>symétrie par rapport à l’axe $x$</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>\n       <tr><td>symétrie par rapport à la droite $y=x$</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>projection orthogonale sur l’axe $x$</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>homothétie de rapport $k$</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>",
    {
     "fig": "v1-rotacia",
     "caption": "Rotation d’angle $\\varphi$ : les images des vecteurs $e_1$ (en bleu) et $e_2$ (en vert) sont exactement les colonnes de la matrice de rotation. La figure en pointillés est l’original, la figure pleine est son image."
    },
    "<p>Le <strong>noyau</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$ est l’ensemble des solutions du système homogène $Ax=o$ ; l’<strong>image</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$ est le sous-espace engendré par les colonnes de la matrice $A$. Ce sont deux sous-espaces et $\\dim\\operatorname{Im}f=h(A)$. <strong>Théorème du rang :</strong> $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$. L’application est injective si et seulement si $\\operatorname{Ker}f=\\{o\\}$.</p>"
   ],
   "examples": [
    {
     "task": "Trouve la matrice de l’application qui fait d’abord tourner un vecteur de $90^\\circ$ dans le sens inverse des aiguilles d’une montre, puis lui applique la symétrie par rapport à l’axe $x$. Quelle est l’image du vecteur $(2, 1)$ ?",
     "steps": [
      "Rotation : $R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$, symétrie : $S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$. La composée (d’abord $R$, puis $S$) a pour matrice $SR$.",
      "$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$ – c’est la symétrie par rapport à la droite $y=-x$.",
      "<strong>Image :</strong> $SR\\,(2, 1)^{T}=(-1, -2)^{T}$."
     ]
    },
    {
     "task": "Détermine le noyau et la dimension de l’image de l’application $f(x)=Ax$, où $A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "La troisième ligne est la somme des deux premières, donc $h(A)=2$ et $\\dim\\operatorname{Im}f=2$.",
      "Noyau : $x_1+x_2=0$, $x_2+x_3=0$. Pour $x_3=t$, on a $x_2=-t$, $x_1=t$, donc $\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$.",
      "Vérification par le théorème du rang : $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$."
     ]
    }
   ]
  },
  "v1-vlastne": {
   "title": "Valeurs propres et vecteurs propres",
   "summary": "Polynôme caractéristique, valeurs et vecteurs propres des matrices 2×2 et 3×3, diagonalisation et puissances d’une matrice.",
   "theory": [
    "<p>Un nombre $\\lambda$ est une <strong>valeur propre</strong> de la matrice carrée $A$ s’il existe un vecteur non nul $v$ tel que $Av=\\lambda v$ ; le vecteur $v$ est alors un <strong>vecteur propre</strong> associé à $\\lambda$. Géométriquement : l’application $x\\mapsto Ax$ conserve la direction du vecteur $v$ et se contente de le multiplier par $\\lambda$ (et de le retourner si $\\lambda\\lt 0$).</p>",
    "<p>Les valeurs propres sont les racines du <strong>polynôme caractéristique</strong> $p(\\lambda)=\\det(A-\\lambda I)$. Pour une matrice $2\\times 2$, $p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$. En général, la somme des valeurs propres vaut $\\operatorname{tr}A$ et leur produit $\\det A$ ; une matrice triangulaire a ses valeurs propres sur la diagonale. Les vecteurs propres associés à $\\lambda$ sont les solutions non nulles du système homogène $(A-\\lambda I)v=o$.</p>",
    {
     "fig": "v1-matica",
     "caption": "La matrice $A$ transforme le carré unité en un parallélogramme de côtés $Ae_1$ et $Ae_2$ (les colonnes de la matrice) ; son aire vaut $|\\det A|$. Les droites orange sont les directions propres – les vecteurs qui s’y trouvent sont envoyés sur des multiples d’eux-mêmes."
    },
    "<p><strong>Diagonalisation :</strong> une matrice $A$ d’ordre $n$ est diagonalisable si $A=PDP^{-1}$, où $D$ est diagonale. C’est le cas si et seulement si $A$ possède $n$ vecteurs propres linéairement indépendants ; ils forment les colonnes de la matrice $P$, et la diagonale de $D$ contient les valeurs propres correspondantes dans le même ordre. Il suffit que $A$ ait $n$ valeurs propres distinctes ; toute matrice symétrique réelle est diagonalisable. Application : $A^k=PD^kP^{-1}$.</p>"
   ],
   "examples": [
    {
     "task": "Trouve les valeurs propres et les vecteurs propres de la matrice $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "$\\operatorname{tr}A=7$, $\\det A=10$, donc $\\lambda^2-7\\lambda+10=0$ et $\\lambda_1=2$, $\\lambda_2=5$.",
      "$\\lambda=5$ : $A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$, équation $-v_1+v_2=0$, vecteur propre $(1, 1)$.",
      "$\\lambda=2$ : $A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$, équation $2v_1+v_2=0$, vecteur propre $(1, -2)$."
     ]
    },
    {
     "task": "À l’aide de la diagonalisation, calcule $A^3$ pour $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "D’après l’exemple précédent, $P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$, $D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$ et $P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$.",
      "$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.",
      "<strong>Résultat :</strong> $A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$."
     ]
    }
   ]
  },
  "v1-skalarny": {
   "title": "Produit scalaire, orthogonalité et projection",
   "summary": "Produit scalaire et norme, angle entre vecteurs, projection orthogonale et procédé de Gram–Schmidt.",
   "theory": [
    "<p>Le <strong>produit scalaire usuel</strong> de $\\mathbb{R}^n$ est $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$. Il est symétrique, linéaire par rapport à chaque argument, et $\\langle u, u\\rangle\\gt 0$ pour $u\\neq o$. La <strong>norme</strong> (longueur) est $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$ et la distance entre deux vecteurs est $\\|u-v\\|$. On a l’<strong>inégalité de Cauchy–Schwarz</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$, si bien que l’angle $\\varphi$ entre deux vecteurs non nuls est bien défini : $\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$.</p>",
    "<p>Deux vecteurs sont <strong>orthogonaux</strong> ($u\\perp v$) si $\\langle u, v\\rangle=0$. Une famille de vecteurs non nuls deux à deux orthogonaux est libre ; si, en plus, ils sont de norme 1, elle est <strong>orthonormée</strong>. La <strong>projection orthogonale</strong> du vecteur $v$ sur la direction $u\\neq o$ est $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$ ; le vecteur $v-\\operatorname{proj}_u v$ est orthogonal à $u$ et sa norme est la distance du point $v$ à la droite $\\mathcal{L}(u)$.</p>",
    {
     "fig": "v1-projekcia",
     "caption": "Projection du vecteur $v$ (en bleu) sur la droite de direction $u=(\\cos\\theta, \\sin\\theta)$ : le vecteur vert est $\\operatorname{proj}_u v$, le segment en pointillés est perpendiculaire à la droite."
    },
    "<p>Le <strong>procédé de Gram–Schmidt</strong> transforme des vecteurs linéairement indépendants $u_1, \\dots, u_k$ en vecteurs orthogonaux engendrant le même sous-espace : $w_1=u_1$ et $w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$, c’est-à-dire qu’on retranche de chaque vecteur ses projections sur les vecteurs déjà obtenus. En divisant par les normes, $e_j=w_j/\\|w_j\\|$, on obtient une base orthonormée.</p>"
   ],
   "examples": [
    {
     "task": "Trouve la projection orthogonale du vecteur $v=(3, 1, 2)$ sur la direction $u=(1, 1, 0)$ et la distance du point $v$ à la droite $\\mathcal{L}(u)$.",
     "steps": [
      "$\\langle v, u\\rangle=3+1+0=4$, $\\langle u, u\\rangle=2$, donc $\\operatorname{proj}_u v=2u=(2, 2, 0)$.",
      "$v-\\operatorname{proj}_u v=(1, -1, 2)$ ; vérification de l’orthogonalité : $\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$.",
      "<strong>Distance :</strong> $\\|(1, -1, 2)\\|=\\sqrt{6}$."
     ]
    },
    {
     "task": "Par le procédé de Gram–Schmidt, orthogonalise les vecteurs $u_1=(1, 1, 1)$ et $u_2=(1, 2, 3)$.",
     "steps": [
      "$w_1=u_1=(1, 1, 1)$.",
      "$\\langle u_2, w_1\\rangle=6$, $\\langle w_1, w_1\\rangle=3$, donc $w_2=u_2-2w_1=(-1, 0, 1)$ ; en effet $\\langle w_1, w_2\\rangle=0$.",
      "Base orthonormée : $e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$, $e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$."
     ]
    }
   ]
  },
  "v1-kvadraticke": {
   "title": "Formes quadratiques et signe",
   "summary": "Matrice d’une forme quadratique, caractère défini, critère de Sylvester.",
   "theory": [
    "<p>Une <strong>forme quadratique</strong> sur $\\mathbb{R}^n$ est une fonction $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$, où $A$ est une matrice symétrique – la <strong>matrice de la forme</strong>. Le coefficient de $x_i^2$ est $a_{ii}$, le coefficient de $x_ix_j$ ($i\\neq j$) est $2a_{ij}$. Par exemple, $Q=x_1^2+4x_1x_2-3x_2^2$ a pour matrice $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$.</p>",
    "<p>La forme (et sa matrice) est <strong>définie positive</strong> si $Q(x)\\gt 0$ pour tout $x\\neq o$ ; <strong>semi-définie positive</strong> (ou positive) si $Q(x)\\ge 0$ pour tout $x$ ; de même <strong>définie (semi-définie) négative</strong> ; et <strong>indéfinie</strong> si elle prend des valeurs positives et des valeurs négatives. À l’aide des valeurs propres : toutes strictement positives $\\iff$ définie positive, toutes positives ou nulles $\\iff$ semi-définie positive, de signes différents $\\iff$ indéfinie.</p>",
    "<p><strong>Critère de Sylvester :</strong> soient $D_1=a_{11}$, $D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$, …, $D_n=\\det A$ les mineurs principaux dominants. La forme est définie positive $\\iff D_k\\gt 0$ pour tout $k$ ; définie négative $\\iff$ les signes alternent : $D_1\\lt 0$, $D_2\\gt 0$, $D_3\\lt 0$, … Si $\\det A\\neq 0$ et qu’aucun de ces cas ne se produit, la forme est indéfinie. Lorsque $\\det A=0$, les mineurs dominants ne suffisent pas pour conclure sur la semi-définition – il faut les valeurs propres ou tous les mineurs principaux.</p>"
   ],
   "examples": [
    {
     "task": "Détermine le signe de la forme $Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$.",
     "steps": [
      "Matrice de la forme : $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$.",
      "$D_1=2$, $D_2=2\\cdot 1-1\\cdot 1=1$, $D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$.",
      "Tous les mineurs dominants sont strictement positifs, la forme est <strong>définie positive</strong>."
     ]
    },
    {
     "task": "Pour quelles valeurs de $a$ la forme $Q=x^2+4xy+ay^2$ est-elle définie positive ?",
     "steps": [
      "$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$, $D_1=1\\gt 0$, $D_2=a-4$.",
      "<strong>Résultat :</strong> la forme est définie positive exactement pour $a\\gt 4$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.": "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ : la $i$-ième ligne de la matrice inverse est formée des cofacteurs de la $i$-ième <em>colonne</em> de la matrice $A$.",
  "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Teda $c={@5}$.": "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Donc $c={@5}$.",
  "$A^{T}={@0}$. Porovnaním s $A$ vidíme, že {@1}.": "$A^{T}={@0}$. En comparant avec $A$, on voit que {@1}.",
  "$B^{T}={@0}$, takže ${@1}={@2}={@3}$.": "$B^{T}={@0}$, donc ${@1}={@2}={@3}$.",
  "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Teda $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.": "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Donc $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.",
  "$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>{@0}<br>$h(A)={@1}$, teda $\\dim W={@2}-{@3}={@4}$.": "$W$ est l’ensemble des solutions d’un système homogène, donc $\\dim W=n-h(A)$. Rang de la matrice du système :<br>{@0}<br>$h(A)={@1}$, donc $\\dim W={@2}-{@3}={@4}$.",
  "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.": "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$ ; les normes de ces vecteurs sont entières.",
  "$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A={@0}$; obe sú teda {@1} a jedno je nulové": "$\\det A=0$, une valeur propre vaut $0$ et l’autre est égale à $\\operatorname{tr}A={@0}$ ; les deux sont donc {@1} et l’une est nulle",
  "$\\det A={@0}$, teda $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.": "$\\det A={@0}$, donc $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.",
  "$\\det A={@0}$. Podľa vzorca $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ potrebujeme algebraické doplnky {@3}. stĺpca: ${@4}$.": "$\\det A={@0}$. D’après la formule $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$, il nous faut les cofacteurs de la colonne {@3} : ${@4}$.",
  "$\\det A={@0}$. Ďalej $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ a ${@5}$. Teda $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.": "$\\det A={@0}$. Ensuite $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ et ${@5}$. Donc $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.",
  "$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov": "$\\det A\\neq 0$ et aucun des cas précédents ne s’est produit",
  "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ a transponovaním sa determinant nemení. Súčin teda obsahuje $\\det A$ dvakrát.": "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ et la transposition ne change pas le déterminant. Le produit contient donc $\\det A$ deux fois.",
  "$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).": "$\\dim\\operatorname{Im}f=h(A)$ et $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ est le nombre de colonnes de la matrice (la dimension de l’espace de départ).",
  "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, teda $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.": "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, donc $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.",
  "$\\langle u, v\\rangle={@0}={@1}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t={@2}$.": "$\\langle u, v\\rangle={@0}={@1}$. La condition $\\langle u, v\\rangle=0$ donne $t={@2}$.",
  "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.": "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.",
  "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.": "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.",
  "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, charakteristická rovnica je ${@2}{@3}=0$.": "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, l’équation caractéristique est ${@2}{@3}=0$.",
  "$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno": "$h(A)=h(A\\mid b)=3=n$, il y a exactement une solution",
  "$h(A)=h(A\\mid b)={@0}\\lt 3$, riešení je nekonečne veľa ({@1})": "$h(A)=h(A\\mid b)={@0}\\lt 3$, il y a une infinité de solutions ({@1})",
  "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sústava nemá riešenie": "$h(A)={@0}\\neq h(A\\mid b)={@1}$, le système n’a pas de solution",
  "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.": "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.",
  "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, koeficient $\\frac{{@2}}{{@3}}={@4}$.": "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, coefficient $\\frac{{@2}}{{@3}}={@4}$.",
  "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.": "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$ ; le résultat doit être orthogonal à $w_1$.",
  "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Skúška: $\\langle w_1, w_2\\rangle={@6}$.": "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Vérification : $\\langle w_1, w_2\\rangle={@6}$.",
  "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, kde v $D_{{@2}}$ nahradíš {@3}. stĺpec matice sústavy stĺpcom pravých strán.": "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, où dans $D_{{@2}}$ tu remplaces la colonne {@3} de la matrice du système par la colonne des seconds membres.",
  "(mení orientáciu)": "(change l’orientation)",
  "(naozaj ${@0}={@1}{@2} {@3} {@4}{@5}$)": "(en effet ${@0}={@1}{@2} {@3} {@4}{@5}$)",
  "+ súčiny na zelených diagonálach": "+ produits sur les diagonales vertes",
  ", teda ${@0}{@1} {@2} = {@3}$": ", donc ${@0}{@1} {@2} = {@3}$",
  "<strong>Je</strong> podpriestor: {@0}.": "<strong>C’est</strong> un sous-espace : {@0}.",
  "<strong>Nie je</strong> podpriestor: {@0}.": "<strong>Ce n’est pas</strong> un sous-espace : {@0}.",
  "Aká je definitnosť formy?": "Quelle est la nature (signature) de la forme ?",
  "Aká je dimenzia $W$?": "Quelle est la dimension de $W$ ?",
  "Aká je dimenzia jadra $\\operatorname{Ker}f$?": "Quelle est la dimension du noyau $\\operatorname{Ker}f$ ?",
  "Aká je hodnosť matice $A$?": "Quel est le rang de la matrice $A$ ?",
  "Aká je hodnosť matice sústavy $h(A)$?": "Quel est le rang de la matrice du système $h(A)$ ?",
  "Aká je hodnosť matice sústavy?": "Quel est le rang de la matrice du système ?",
  "Aká je hodnosť rozšírenej matice $h(A\\mid b)$?": "Quel est le rang de la matrice augmentée $h(A\\mid b)$ ?",
  "Aké je znamienko $(-1)^{{@0}+{@1}}$? Zadaj $1$ alebo $-1$.": "Quel est le signe de $(-1)^{{@0}+{@1}}$ ? Saisis $1$ ou $-1$.",
  "Aký je absolútny člen $D_0$?": "Quel est le terme constant $D_0$ ?",
  "Aký je absolútny člen $b$?": "Quel est le terme constant $b$ ?",
  "Aký je determinant tejto podmatice?": "Quel est le déterminant de cette sous-matrice ?",
  "Algebraický doplnok treba ešte vydeliť determinantom matice $A$.": "Il faut encore diviser le cofacteur par le déterminant de la matrice $A$.",
  "Antisymetrická matica má na diagonále nuly a spĺňa $a_{ij}=-a_{ji}$. Over to pre všetky dvojice.": "Une matrice antisymétrique a des zéros sur la diagonale et vérifie $a_{ij}=-a_{ji}$. Vérifie-le pour tous les couples.",
  "Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).": "Inutile de calculer toute la matrice inverse : $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (les indices du cofacteur sont inversés).",
  "Cramerovým pravidlom vypočítaj neznámu $x_{{@0}}$ zo sústavy ${@1}$. Neceločíselný výsledok zadaj ako zlomok.": "À l’aide de la règle de Cramer, calcule l’inconnue $x_{{@0}}$ du système ${@1}$. Donne un résultat non entier sous forme de fraction.",
  "Cramerovým pravidlom: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,": "Par la règle de Cramer : $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,",
  "Dané sú vektory $u={@0}$ a $v={@1}$ v $\\mathbb{R}^{{@2}}$. Vypočítaj vektor ${@3}$. Zložky oddeľ bodkočiarkou.": "On donne les vecteurs $u={@0}$ et $v={@1}$ de $\\mathbb{R}^{{@2}}$. Calcule le vecteur ${@3}$. Sépare les composantes par des points-virgules.",
  "Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.": "Le déterminant est non nul, les vecteurs sont <strong>linéairement indépendants</strong>.",
  "Determinant je nulový, vektory sú <strong>lineárne závislé</strong>{@0}.": "Le déterminant est nul, les vecteurs sont <strong>linéairement dépendants</strong>{@0}.",
  "Determinant je síce nulový, ale pozri sa na znamienko nenulového vlastného čísla: pri matici $2\\times 2$ sa rovná stope.": "Le déterminant est bien nul, mais regarde le signe de la valeur propre non nulle : pour une matrice $2\\times 2$, elle est égale à la trace.",
  "Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.": "Le déterminant de la matrice de lignes $u, v, w$ est une fonction affine du paramètre $t$ – développe-le selon la ligne contenant le paramètre et égale-le à zéro.",
  "Diagonálne prvky matice $D^{{@0}}$?": "Éléments diagonaux de la matrice $D^{{@0}}$ ?",
  "Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: ${@0}={@1}={@2}$.": "L’élément diagonal $(A^{T}A)_{jj}$ est la somme des carrés des éléments de la $j$-ième colonne de la matrice $A$, donc $\\operatorname{tr}(A^{T}A)$ est la somme des carrés de tous les éléments : ${@0}={@1}={@2}$.",
  "Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $\\dim W={@3}$.": "La dimension du sous-espace engendré est le rang de la matrice dont les lignes sont les vecteurs donnés :<br>{@0}<br>La forme échelonnée a {@1} {@2}, donc $\\dim W={@3}$.",
  "Diskriminant ${@0}{@1}$, teda $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, t. j. $\\lambda_1={@4}$ a $\\lambda_2={@5}$.": "Discriminant ${@0}{@1}$, donc $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, c.-à-d. $\\lambda_1={@4}$ et $\\lambda_2={@5}$.",
  "Do matice formy patrí mimo diagonály polovica koeficientu pri $xy$, teda ${@0}$, nie ${@1}$.": "Hors de la diagonale, la matrice de la forme contient la moitié du coefficient de $xy$, donc ${@0}$, et non ${@1}$.",
  "Dosaď $x_3$ do predposledného riadku a vypočítaj $x_2$.": "Substitue $x_3$ dans l’avant-dernière ligne et calcule $x_2$.",
  "Forma $Q={@0}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "La forme $Q={@0}$ est définie positive si et seulement si $a\\gt c$. Détermine le nombre $c$ (éventuellement sous forme de fraction).",
  "Forma $Q={@0}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "La forme $Q={@0}+ay^2$ est définie positive si et seulement si $a\\gt c$. Détermine le nombre $c$ (éventuellement sous forme de fraction).",
  "Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $h(A)={@3}$.": "Par la méthode de Gauss, on met la matrice sous forme échelonnée :<br>{@0}<br>La forme échelonnée a {@1} {@2}, donc $h(A)={@3}$.",
  "Gaussovou elimináciou vyrieš sústavu ${@0}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.": "Résous le système ${@0}$ par la méthode de Gauss. Donne la solution sous la forme « x₁; x₂; x₃ ».",
  "Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1={@0}$ a $u_2={@1}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.": "Orthogonalise les vecteurs $u_1={@0}$ et $u_2={@1}$ (dans cet ordre, sans normalisation) par le procédé de Gram–Schmidt. Saisis le vecteur $w_2$.",
  "Hľadaj protipríklad: patrí nulový vektor do $W$? Je súčet dvoch prvkov $W$ opäť v $W$? A ich násobok?": "Cherche un contre-exemple : le vecteur nul appartient-il à $W$ ? La somme de deux éléments de $W$ est-elle encore dans $W$ ? Et leur multiple ?",
  "Indefinitná forma nadobúda kladné aj záporné hodnoty. Over znamienka rohových minorov podľa Sylvestrovho kritéria.": "Une forme indéfinie prend des valeurs positives et négatives. Vérifie les signes des mineurs principaux selon le critère de Sylvester.",
  "Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.": "Le noyau est l’ensemble des solutions du système homogène $Ax=o$. Échelonne la matrice et choisis une inconnue libre comme paramètre.",
  "Jadro je množina riešení sústavy $Ax=o$:<br>{@0}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom ${@1}\\times{@2}={@3}${@4}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.": "Le noyau est l’ensemble des solutions du système $Ax=o$ :<br>{@0}<br>$h(A)=2$, donc $\\dim\\operatorname{Ker}f=3-2=1$. La solution est orthogonale aux deux lignes non nulles, c’est donc un multiple de ${@1}\\times{@2}={@3}${@4}. Donc $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.",
  "Je množina $W={@0}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?": "L’ensemble $W={@0}$ est-il un sous-espace vectoriel de $\\mathbb{R}^3$ ?",
  "Ker": "Ker",
  "Kladne definitná je forma len vtedy, keď sú všetky hlavné rohové minory kladné.": "Une forme n’est définie positive que si tous les mineurs principaux sont positifs.",
  "Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A={@0}$.": "Le coefficient de $x_ix_j$ ($i\\neq j$) se répartit à parts égales entre $a_{ij}$ et $a_{ji}$, donc $a_{ij}$ est la moitié du coefficient. Matrice de la forme : $A={@0}$.",
  "Koeficient pri $x_ix_j$ sa v symetrickej matici rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, každý dostane polovicu.": "Dans une matrice symétrique, le coefficient de $x_ix_j$ se répartit à parts égales entre $a_{ij}$ et $a_{ji}$, chacun en reçoit la moitié.",
  "Koľko riešení má sústava ${@0}$?": "Combien de solutions le système ${@0}$ a-t-il ?",
  "Koľko riešení má sústava?": "Combien de solutions le système a-t-il ?",
  "Kvadratická forma je $Q={@0}$. Urči prvky $a_{12}, a_{13}, a_{23}$ jej symetrickej matice (oddelené bodkočiarkou) (zlomky v tvare $p/q$).": "La forme quadratique est $Q={@0}$. Détermine les éléments $a_{12}, a_{13}, a_{23}$ de sa matrice symétrique (séparés par des points-virgules) (fractions sous la forme $p/q$).",
  "Kvadratická forma je $Q={@0}$. Urči prvok $a_{12}$ jej symetrickej matice (zlomky v tvare $p/q$).": "La forme quadratique est $Q={@0}$. Détermine l’élément $a_{12}$ de sa matrice symétrique (fractions sous la forme $p/q$).",
  "Kvadratický činiteľ má $\\operatorname{tr}={@0}$, $\\det={@1}$ a korene ${@2}$ a ${@3}$. Vlastné čísla sú ${@4}$.": "Le facteur du second degré a $\\operatorname{tr}={@0}$, $\\det={@1}$ et les racines ${@2}$ et ${@3}$. Les valeurs propres sont ${@4}$.",
  "Lineárna kombinácia dvoch vektorov": "Combinaison linéaire de deux vecteurs",
  "Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f{@0}={@1}$ a $f{@2}={@3}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.": "L’application linéaire $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ vérifie $f{@0}={@1}$ et $f{@2}={@3}$. Trouve la matrice $A$ de l’application $f$ (dans la base canonique). Saisis les éléments ligne par ligne.",
  "Matica $-A^{3}$ je $(-1)\\cdot A^{3}$, a $\\det(-M)=(-1)^{{@0}}\\det M$.": "La matrice $-A^{3}$ est $(-1)\\cdot A^{3}$, et $\\det(-M)=(-1)^{{@0}}\\det M$.",
  "Matica $A={@0}$ má vlastné čísla ${@1}$ a ${@2}$. Pomocou diagonalizácie vypočítaj $A^{{@3}}$. Prvky zadaj po riadkoch.": "La matrice $A={@0}$ a pour valeurs propres ${@1}$ et ${@2}$. À l’aide de la diagonalisation, calcule $A^{{@3}}$. Saisis les éléments ligne par ligne.",
  "Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom ${@0}$.": "La matrice $B$ s’obtient à partir de $A$ en échangeant les deux premières lignes et en multipliant la dernière ligne par ${@0}$.",
  "Matica formy $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A={@3}$.": "Matrice de la forme $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ ne dépendent pas de $a$. En développant selon la 3e ligne (ou par la règle de Sarrus) $D_3=\\det A={@3}$.",
  "Matica formy: $A={@0}$. Hlavné rohové minory: ${@1}$. Keďže {@2}, forma je <strong>{@3}</strong>.": "Matrice de la forme : $A={@0}$. Mineurs principaux : ${@1}$. Comme {@2}, la forme est <strong>{@3}</strong>.",
  "Matica nie je trojuholníková, vlastné čísla preto nie sú jej diagonálne prvky. Rozviň $\\det(A-\\lambda I)$ podľa 3. riadka.": "La matrice n’est pas triangulaire, ses valeurs propres ne sont donc pas ses éléments diagonaux. Développe $\\det(A-\\lambda I)$ selon la 3e ligne.",
  "Matica v stupňovitom tvare": "Matrice sous forme échelonnée",
  "Matice: $A_f={@0}$, $A_g={@1}$. Zloženie má maticu $A_gA_f={@2}$, teda $(g\\circ f)(v)={@3}{@4}={@5}$.": "Matrices : $A_f={@0}$, $A_g={@1}$. La composée a pour matrice $A_gA_f={@2}$, donc $(g\\circ f)(v)={@3}{@4}={@5}$.",
  "Minor $D_3=\\det A$ má tvar $D_2\\,a+K$. Aké je číslo $K$?": "Le mineur $D_3=\\det A$ est de la forme $D_2\\,a+K$. Quel est le nombre $K$ ?",
  "Minor treba ešte vynásobiť samotným prvkom $a_{{@0}{@1}}={@2}$, podľa ktorého rozvíjaš.": "Il faut encore multiplier le mineur par l’élément $a_{{@0}{@1}}={@2}$ selon lequel tu développes.",
  "Minor: $M_{{@0}{@1}}={@2}={@3}$. Teda $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.": "Mineur : $M_{{@0}{@1}}={@2}={@3}$. Donc $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.",
  "Mocnina matice sa nepočíta po prvkoch, to platí len pre diagonálnu maticu $D$. Použi $A^k=PD^kP^{-1}$.": "La puissance d’une matrice ne se calcule pas élément par élément, cela ne vaut que pour la matrice diagonale $D$. Utilise $A^k=PD^kP^{-1}$.",
  "Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.": "Commence par transposer $B$ (lignes ↔ colonnes), puis calcule élément par élément.",
  "Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.": "Multiplie d’abord chaque vecteur par son coefficient (chaque composante), puis additionne les composantes correspondantes.",
  "Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.": "Écris $v=c_1b_1+c_2b_2+c_3b_3$ composante par composante : tu obtiens un système de trois équations dans lequel les vecteurs de la base sont les colonnes de la matrice.",
  "Napíš maticu $A-{@0}I$ (prvky po riadkoch).": "Écris la matrice $A-{@0}I$ (éléments ligne par ligne).",
  "Napíš maticu $B^{T}$ (prvky po riadkoch).": "Écris la matrice $B^{T}$ (éléments ligne par ligne).",
  "Nekonečne veľa riešení je len pri $h(A)=h(A\\mid b)\\lt 3$. Pozri sa aj na pravú stranu riadku, ktorý je v matici sústavy nulový.": "Il n’y a une infinité de solutions que si $h(A)=h(A\\mid b)\\lt 3$. Regarde aussi le second membre de la ligne qui est nulle dans la matrice du système.",
  "Nájdi jedno netriviálne riešenie homogénnej sústavy ${@0}$. (Uznáme ľubovoľný nenulový násobok.)": "Trouve une solution non triviale du système homogène ${@0}$. (Tout multiple non nul est accepté.)",
  "Nájdi maticu $X$, pre ktorú platí ${@0}X-A=B^{T}$, ak $A={@1}$ a $B={@2}$. Prvky zadaj po riadkoch.": "Trouve la matrice $X$ telle que ${@0}X-A=B^{T}$, si $A={@1}$ et $B={@2}$. Saisis les éléments ligne par ligne.",
  "Nájdi nenulové riešenie sústavy $(A-\\lambda I)v=o$ (ľubovoľný nenulový násobok je správne).": "Trouve une solution non nulle du système $(A-\\lambda I)v=o$ (tout multiple non nul est correct).",
  "Nájdi súradnice vektora $v={@0}$ v báze $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.": "Trouve les coordonnées du vecteur $v={@0}$ dans la base $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ de $\\mathbb{R}^3$. Saisis-les sous la forme « c₁; c₂; c₃ ».",
  "Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.": "Trouve les vecteurs propres, construis $P$ et $D$ et utilise $A^k=PD^kP^{-1}$ ; la puissance d’une matrice diagonale se calcule élément par élément sur la diagonale.",
  "Nájdi vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou.": "Trouve les valeurs propres de la matrice $A={@0}$. Saisis-les séparées par des points-virgules.",
  "Nájdi všetky vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).": "Trouve toutes les valeurs propres de la matrice $A={@0}$. Saisis-les séparées par des points-virgules (saisis une valeur propre multiple autant de fois que sa multiplicité).",
  "Nájdi {@0}. riadok inverznej matice k matici $A={@1}$. Zadaj tri čísla oddelené bodkočiarkou.": "Trouve la ligne {@0} de la matrice inverse de la matrice $A={@1}$. Saisis trois nombres séparés par des points-virgules.",
  "Nájdi čísla $\\alpha, \\beta$ také, že ${@0}=\\alpha{@1}+\\beta{@2}$. Zadaj ich v tvare „α; β“.": "Trouve les nombres $\\alpha, \\beta$ tels que ${@0}=\\alpha{@1}+\\beta{@2}$. Saisis-les sous la forme « α; β ».",
  "Násobenie matíc nie je komutatívne. Z rovnice ${@0}$ treba násobiť maticou $A^{-1}$ {@1}.": "La multiplication des matrices n’est pas commutative. Dans l’équation ${@0}$, il faut multiplier par la matrice $A^{-1}$ {@1}.",
  "Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.": "Les deux conditions à la fois : $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Inverse la matrice $(u\\mid v)$ et multiplie à droite.",
  "Obraz jednotkového štvorca pri zobrazení danom maticou 2×2": "Image du carré unité par l’application donnée par une matrice 2×2",
  "Od počtu neznámych sa neodčíta počet rovníc, ale hodnosť matice sústavy: niektoré rovnice môžu byť závislé.": "On ne soustrait pas le nombre d’équations du nombre d’inconnues, mais le rang de la matrice du système : certaines équations peuvent être dépendantes.",
  "Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.": "Soustrais les vecteurs composante par composante et utilise $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.",
  "Ortogonálna projekcia vektora na priamku": "Projection orthogonale d’un vecteur sur une droite",
  "Over všetky tri podmienky: nulový vektor, uzavretosť na sčítanie a na násobenie číslom. Ak platia všetky, ide o podpriestor.": "Vérifie les trois conditions : vecteur nul, stabilité par addition et par multiplication par un nombre. Si toutes sont vérifiées, c’est un sous-espace.",
  "Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.": "Vérifie si $W$ contient le vecteur nul et s’il est stable par addition et par multiplication par un nombre réel. Un seul contre-exemple suffit pour réfuter.",
  "Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).": "Après échelonnement, il reste deux équations indépendantes. Choisis une inconnue comme paramètre (ou utilise le produit vectoriel de deux lignes).",
  "Podmienka $D = 0$ dáva ${@0}{@1} = {@2}$, teda ${@3} = {@4}$.": "La condition $D = 0$ donne ${@0}{@1} = {@2}$, donc ${@3} = {@4}$.",
  "Podmienka $D_3\\gt 0$ dáva $a\\gt {@0}$, teda $c={@1}$.": "La condition $D_3\\gt 0$ donne $a\\gt {@0}$, donc $c={@1}$.",
  "Porovnaj $A^{T}$ s $A$ aj s $-A$ prvok po prvku. Možno platí jedna z rovností.": "Compare $A^{T}$ avec $A$ et avec $-A$ élément par élément. L’une des égalités est peut-être vraie.",
  "Porovnaním zložiek dostaneme sústavu ${@0}={@1}$, ${@2}={@3}$.": "En comparant les composantes, on obtient le système ${@0}={@1}$, ${@2}={@3}$.",
  "Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.": "Utilise $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ et $\\det A^{-1}=1/\\det A$.",
  "Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.": "Utilise la règle de Sarrus : trois produits « vers le bas à droite » avec le signe plus, trois « vers le bas à gauche » avec le signe moins.",
  "Použil si algebraické doplnky {@0}. riadka. Adjungovaná matica je transponovaná: {@1}. riadok inverznej matice tvoria doplnky {@2}. stĺpca.": "Tu as utilisé les cofacteurs de la ligne {@0}. La matrice adjointe est transposée : la ligne {@1} de la matrice inverse est formée des cofacteurs de la colonne {@2}.",
  "Použil si doplnok $A_{{@0}{@1}}$. Pre prvok $(A^{-1})_{{@2}{@3}}$ treba doplnok s vymenenými indexmi, $A_{{@4}{@5}}$.": "Tu as utilisé le cofacteur $A_{{@0}{@1}}$. Pour l’élément $(A^{-1})_{{@2}{@3}}$, il faut le cofacteur aux indices inversés, $A_{{@4}{@5}}$.",
  "Počítame po zložkách: ${@0}=({@1})={@2}$.": "On calcule composante par composante : ${@0}=({@1})={@2}$.",
  "Pre $A={@0}$ a $B={@1}$ vypočítaj maticu ${@2}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).": "Pour $A={@0}$ et $B={@1}$, calcule la matrice ${@2}$. Saisis les éléments ligne par ligne (4 nombres séparés par des points-virgules).",
  "Pre ktoré $a$ je $D=0$?": "Pour quel $a$ a-t-on $D=0$ ?",
  "Pre ktoré $t$ je $D=0$?": "Pour quel $t$ a-t-on $D=0$ ?",
  "Pre ktoré $t$ je skalárny súčin nulový? Neceločíselný výsledok zadaj ako zlomok.": "Pour quel $t$ le produit scalaire est-il nul ? Donne un résultat non entier sous forme de fraction.",
  "Pre ktoré $t$ sú vektory $u={@0}$ a $v={@1}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.": "Pour quel $t$ les vecteurs $u={@0}$ et $v={@1}$ sont-ils orthogonaux ? Donne un résultat non entier sous forme de fraction.",
  "Pre ktorú hodnotu parametra $a$ má matica $A={@0}$ hodnosť 2?": "Pour quelle valeur du paramètre $a$ la matrice $A={@0}$ est-elle de rang 2 ?",
  "Pre ktorú hodnotu parametra $t$ sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé?": "Pour quelle valeur du paramètre $t$ les vecteurs $u={@0}$, $v={@1}$ et $w={@2}$ sont-ils linéairement dépendants ?",
  "Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.": "Pour une matrice $2\\times 2$, résous $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.",
  "Pre maticu $A={@0}$ vypočítaj prvok $(A^{-1})_{{@1}{@2}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.": "Pour la matrice $A={@0}$, calcule l’élément $(A^{-1})_{{@1}{@2}}$ de la matrice inverse. Donne un résultat non entier sous forme de fraction.",
  "Pre maticu $A={@0}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Pour la matrice $A={@0}$, calcule la trace $\\operatorname{tr}(A^{T}A)$.",
  "Prepočítaj determinant Sarrusovým pravidlom: tri súčiny sa sčítajú a tri odčítajú. Nezávislé sú vektory len pri nenulovom determinante.": "Recalcule le déterminant par la règle de Sarrus : trois produits s’additionnent et trois se soustraient. Les vecteurs ne sont indépendants que si le déterminant est non nul.",
  "Pri matici rádu 3 nestačia dve diagonály ako pri $2\\times 2$. Sarrusovo pravidlo má šesť súčinov: tri kladné a tri záporné.": "Pour une matrice d’ordre 3, deux diagonales ne suffisent pas comme pour une $2\\times 2$. La règle de Sarrus comporte six produits : trois positifs et trois négatifs.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa determinant násobí číslom $c^{n}$, nie len $c$.": "Quand on multiplie une matrice d’ordre ${@0}$ par un nombre $c$, le déterminant est multiplié par $c^{n}$, et pas seulement par $c$.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa číslom $c$ násobí každý z ${@1}$ riadkov: $\\det(cA)=c^{n}\\det A$.": "Quand on multiplie une matrice d’ordre ${@0}$ par un nombre $c$, chacune des ${@1}$ lignes est multipliée par $c$ : $\\det(cA)=c^{n}\\det A$.",
  "Pri prenesení $A$ na druhú stranu sa mení znamienko: ${@0}X=A+B^{T}$.": "En faisant passer $A$ de l’autre côté, le signe change : ${@0}X=A+B^{T}$.",
  "Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.": "Pour un terme mixte $c\\,x_ix_j$, on a $a_{ij}=a_{ji}=c/2$.",
  "Projekciu na $w_1$ treba od $u_2$ odčítať, nie pripočítať. Over, či je výsledok kolmý na $w_1$.": "Il faut soustraire la projection sur $w_1$ de $u_2$, et non l’ajouter. Vérifie si le résultat est orthogonal à $w_1$.",
  "Prvky sa neumocnili. Diagonálny prvok $(A^{T}A)_{jj}$ je skalárny súčin $j$-tého stĺpca so sebou samým, teda súčet druhých mocnín.": "Les éléments n’ont pas été élevés au carré. L’élément diagonal $(A^{T}A)_{jj}$ est le produit scalaire de la $j$-ième colonne avec elle-même, c’est-à-dire la somme des carrés.",
  "Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.": "L’élément $(A^{T}A)_{jj}$ s’obtient comme produit scalaire de la $j$-ième colonne de la matrice $A$ avec elle-même.",
  "Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. {@0}": "Les deux premières lignes ne sont pas proportionnelles, donc $h(A)\\ge 2$. Le rang est inférieur à 3 si et seulement si $D=\\det A=0$. {@0}",
  "Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.": "Les deux premiers mineurs principaux ne dépendent pas de $a$ ; $D_3=\\det A$ est une fonction affine de $a$ de coefficient $D_2$.",
  "Práve jedno riešenie má sústava len pri $h(A)=h(A\\mid b)=3$. Over, či po eliminácii nevznikne v matici sústavy nulový riadok.": "Le système n’a exactement une solution que si $h(A)=h(A\\mid b)=3$. Vérifie si une ligne nulle n’apparaît pas dans la matrice du système après l’élimination.",
  "Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.": "Par des opérations sur les lignes, annule les éléments sous les pivots et compte les lignes non nulles.",
  "Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.": "Les solutions d’un système homogène à $n$ inconnues forment un sous-espace de dimension $n-h(A)$.",
  "Riešenie je $X={@0}={@1}={@2}$.": "La solution est $X={@0}={@1}={@2}$.",
  "Riešime $(A-\\lambda I)v=o$, kde $A-{@0}I={@1}$. {@2} Skúška: $A{@3}={@4}={@5}\\cdot{@6}$.": "On résout $(A-\\lambda I)v=o$, où $A-{@0}I={@1}$. {@2} Vérification : $A{@3}={@4}={@5}\\cdot{@6}$.",
  "Rotácia útvaru okolo počiatku": "Rotation d’une figure autour de l’origine",
  "Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>{@0}<br>Spätné dosadzovanie – {@1}": "L’équation $c_1b_1+c_2b_2+c_3b_3=v$ est un système dont la matrice a les vecteurs de la base en colonnes :<br>{@0}<br>Remontée – {@1}",
  "Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.": "Multiplie l’équation à droite par la matrice $A^{-1}$ : $X=BA^{-1}$.",
  "Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.": "Multiplie l’équation à gauche par la matrice $A^{-1}$ : $X=A^{-1}B$.",
  "Rozhodni, aká je matica $A={@0}$.": "Détermine de quel type est la matrice $A={@0}$.",
  "Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.": "Développe le déterminant selon une ligne ou une colonne qui ne contient qu’un seul élément non nul. N’oublie pas le signe $(-1)^{i+j}$.",
  "Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.": "Développement de $\\det(A-\\lambda I)$ selon la 3e ligne : $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.",
  "Rozvoj determinantu podľa 3. riadka dáva $D=Ca+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "Le développement du déterminant selon la 3e ligne donne $D=Ca+D_0$. Quel est le coefficient $C$ (le cofacteur de l’élément contenant le paramètre) ?",
  "Rozvoj podľa 3. riadka dáva $D=Ct+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "Le développement selon la 3e ligne donne $D=Ct+D_0$. Quel est le coefficient $C$ (le cofacteur de l’élément contenant le paramètre) ?",
  "Rozvoj podľa 3. riadka: $D = {@0}$, kde ${@1}$. Teda $D = {@2}$.": "Développement selon la 3e ligne : $D = {@0}$, où ${@1}$. Donc $D = {@2}$.",
  "Rozvojom podľa 3. riadka dostaneš činiteľ $(c-\\lambda)$. Aké je $c$?": "En développant selon la 3e ligne, tu obtiens le facteur $(c-\\lambda)$. Que vaut $c$ ?",
  "Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.": "Mets la matrice augmentée sous forme échelonnée et calcule les inconnues en partant du bas.",
  "S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.": "Traite l’équation matricielle comme une équation ordinaire : isole $X$, puis calcule élément par élément.",
  "Sarrusovo pravidlo pre determinant 3×3": "Règle de Sarrus pour un déterminant 3×3",
  "Sarrusovo pravidlo: $\\det A={@0}$.": "Règle de Sarrus : $\\det A={@0}$.",
  "Sarrusovo pravidlo: tri súčiny na diagonálach doprava dole so znamienkom plus, tri doľava dole so znamienkom mínus.": "Règle de Sarrus : trois produits sur les diagonales vers le bas à droite avec le signe plus, trois vers le bas à gauche avec le signe moins.",
  "Semidefinitná forma má $\\det A=0$, teda aspoň jedno vlastné číslo nulové. Skontroluj determinant.": "Une forme semi-définie a $\\det A=0$, donc au moins une valeur propre nulle. Vérifie le déterminant.",
  "Skalárny súčin $\\langle u, v\\rangle$ má tvar $at+b$. Aký je koeficient $a$?": "Le produit scalaire $\\langle u, v\\rangle$ est de la forme $at+b$. Quel est le coefficient $a$ ?",
  "Skalárny súčin treba ešte vydeliť číslom $\\langle u, u\\rangle=\\|u\\|^2$.": "Il faut encore diviser le produit scalaire par $\\langle u, u\\rangle=\\|u\\|^2$.",
  "Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.": "Les colonnes de la matrice de l’application sont les images des vecteurs $e_1=(1, 0)$ et $e_2=(0, 1)$. La composée « d’abord $f$, puis $g$ » correspond au produit $A_gA_f$.",
  "Stĺpec pravých strán patrí do {@0}. <em>stĺpca</em> determinantu, nie do {@1}. riadka.": "La colonne des seconds membres va dans la <em>colonne</em> {@0} du déterminant, pas dans la ligne {@1}.",
  "Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.": "Critère de Sylvester : $D_1\\gt 0$ est toujours vrai, la condition est donnée par $D_2=\\det A\\gt 0$.",
  "Symetrická matica spĺňa $a_{ij}=a_{ji}$ pre všetky dvojice prvkov súmerných podľa hlavnej diagonály. Porovnaj ich jednu po druhej.": "Une matrice symétrique vérifie $a_{ij}=a_{ji}$ pour tous les couples d’éléments symétriques par rapport à la diagonale principale. Compare-les un par un.",
  "Sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé, alebo nezávislé?": "Les vecteurs $u={@0}$, $v={@1}$ et $w={@2}$ sont-ils linéairement dépendants ou indépendants ?",
  "Sú vektory lineárne závislé, alebo nezávislé?": "Les vecteurs sont-ils linéairement dépendants ou indépendants ?",
  "Súradnice vektora v báze b₁, b₂": "Coordonnées d’un vecteur dans la base b₁, b₂",
  "Sústava je ${@0}={@1}$, ${@2}={@3}$. Vypočítaj jej determinant $D$.": "Le système est ${@0}={@1}$, ${@2}={@3}$. Calcule son déterminant $D$.",
  "Sústava nemá riešenie, len keď vznikne riadok $(0\\ 0\\ 0\\mid c)$ s $c\\neq 0$, teda $h(A)\\neq h(A\\mid b)$.": "Le système n’a pas de solution seulement s’il apparaît une ligne $(0\\ 0\\ 0\\mid c)$ avec $c\\neq 0$, c’est-à-dire $h(A)\\neq h(A\\mid b)$.",
  "Súčiny na diagonálach smerom doľava dole sa od kladných členov odčítajú, nie pripočítajú.": "Les produits sur les diagonales vers le bas à gauche se soustraient des termes positifs, ils ne s’ajoutent pas.",
  "Sčítaj ich: aký je vektor ${@0}$?": "Additionne-les : quel est le vecteur ${@0}$ ?",
  "Teda {@0}. riadok matice $A^{-1}$ je $\\frac{1}{{@1}}({@2})={@3}$.": "Donc la ligne {@0} de la matrice $A^{-1}$ est $\\frac{1}{{@1}}({@2})={@3}$.",
  "To je $\\dim\\operatorname{Im}f=h(A)$. Dimenzia jadra je počet stĺpcov mínus hodnosť.": "Ça, c’est $\\dim\\operatorname{Im}f=h(A)$. La dimension du noyau est le nombre de colonnes moins le rang.",
  "To je dimenzia celého priestoru $\\mathbb{R}^{{@0}}$. Podpriestor môže mať menšiu dimenziu, rozhoduje hodnosť.": "Ça, c’est la dimension de tout l’espace $\\mathbb{R}^{{@0}}$. Un sous-espace peut avoir une dimension plus petite, c’est le rang qui décide.",
  "To je dimenzia jadra. Dimenzia obrazu sa rovná hodnosti matice.": "Ça, c’est la dimension du noyau. La dimension de l’image est égale au rang de la matrice.",
  "To je hodnosť matice sústavy. Dimenzia priestoru riešení je počet voľných neznámych, $n-h(A)$.": "Ça, c’est le rang de la matrice du système. La dimension de l’espace des solutions est le nombre d’inconnues libres, $n-h(A)$.",
  "To je počet riadkov pôvodnej matice. Hodnosť je počet nenulových riadkov až po prevedení do stupňovitého tvaru.": "Ça, c’est le nombre de lignes de la matrice initiale. Le rang est le nombre de lignes non nulles une fois la matrice mise sous forme échelonnée.",
  "To je počet stĺpcov. Hodnosť je počet nenulových riadkov stupňovitého tvaru.": "Ça, c’est le nombre de colonnes. Le rang est le nombre de lignes non nulles de la forme échelonnée.",
  "To je počet vektorov. Niektoré z nich môžu byť lineárnou kombináciou ostatných; dimenzia je hodnosť matice z nich zostavenej.": "Ça, c’est le nombre de vecteurs. Certains peuvent être combinaison linéaire des autres ; la dimension est le rang de la matrice qu’ils forment.",
  "Toto je projekcia vektora $u$ na smer $v$. Premietame $v$ na smer $u$, výsledok je preto násobkom vektora $u$.": "Ça, c’est la projection du vecteur $u$ sur la direction de $v$. On projette $v$ sur la direction de $u$, le résultat est donc un multiple du vecteur $u$.",
  "Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.": "Transpose la matrice et compare-la avec $A$ et avec $-A$. Regarde aussi la diagonale.",
  "Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi": "Trois cas pour un système de deux équations à deux inconnues",
  "Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.": "Trois vecteurs de $\\mathbb{R}^3$ sont linéairement indépendants si et seulement si le déterminant de la matrice qu’ils forment est non nul.",
  "Uhol priamky θ (°)": "Angle de la droite θ (°)",
  "Uhol φ (°)": "Angle φ (°)",
  "Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.": "Mets la matrice augmentée sous forme échelonnée et compare $h(A)$ avec $h(A\\mid b)$ et avec le nombre d’inconnues.",
  "Uprav rozšírenú maticu na stupňovitý tvar. Aká je hodnosť matice sústavy $h(A)$?": "Mets la matrice augmentée sous forme échelonnée. Quel est le rang de la matrice du système $h(A)$ ?",
  "Uprav rozšírenú maticu na stupňovitý tvar. Z posledného riadku vypočítaj $x_3$.": "Mets la matrice augmentée sous forme échelonnée. Calcule $x_3$ à partir de la dernière ligne.",
  "Urči definitnosť kvadratickej formy $Q={@0}$ (vyber najpresnejšiu možnosť).": "Détermine la nature de la forme quadratique $Q={@0}$ (choisis la réponse la plus précise).",
  "Urči dimenziu podpriestoru $W=\\mathcal{L}({@0})$ priestoru $\\mathbb{R}^{{@1}}$.": "Détermine la dimension du sous-espace $W=\\mathcal{L}({@0})$ de $\\mathbb{R}^{{@1}}$.",
  "Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.": "Détermine la dimension du sous-espace $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.",
  "Urči hodnosť matice $A={@0}$.": "Détermine le rang de la matrice $A={@0}$.",
  "Urči číslo $c$ (prípadne ako zlomok).": "Détermine le nombre $c$ (éventuellement sous forme de fraction).",
  "V menovateli sú normy $\\|u\\|$ a $\\|v\\|$, nie ich druhé mocniny.": "Au dénominateur figurent les normes $\\|u\\|$ et $\\|v\\|$, et non leurs carrés.",
  "V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.": "La troisième ligne contient deux zéros – développe $\\det(A-\\lambda I)$ selon cette ligne et résous le déterminant $2\\times 2$ restant comme une équation du second degré.",
  "V {@0}. riadku je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto riadka dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "La ligne {@0} contient un seul élément non nul $a_{{@1}{@2}}={@3}$, donc le développement de Laplace selon cette ligne donne $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "V {@0}. stĺpci je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto stĺpca dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "La colonne {@0} contient un seul élément non nul $a_{{@1}{@2}}={@3}$, donc le développement de Laplace selon cette colonne donne $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "Vektor $v={@0}$ najprv zobrazíme zobrazením $f$: {@1}, a výsledok potom zobrazením $g$: {@2}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.": "On applique d’abord l’application $f$ au vecteur $v={@0}$ : {@1}, puis on applique au résultat l’application $g$ : {@2}. Détermine l’image $(g\\circ f)(v)$ sous la forme « x; y ».",
  "Vektory bázy patria do <em>stĺpcov</em> matice sústavy, nie do riadkov: $i$-ta rovnica porovnáva $i$-te zložky.": "Les vecteurs de la base vont dans les <em>colonnes</em> de la matrice du système, pas dans les lignes : la $i$-ième équation compare les $i$-ièmes composantes.",
  "Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.": "Des vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul.",
  "Vektory sú závislé práve vtedy, keď $D={@0}=0$. {@1} Pre $t={@2}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.": "Les vecteurs sont dépendants si et seulement si $D={@0}=0$. {@1} Pour $t={@2}$, $w$ est une combinaison linéaire des vecteurs $u$ et $v$.",
  "Vektory zapíš do riadkov matice a urči jej hodnosť.": "Écris les vecteurs dans les lignes d’une matrice et détermine son rang.",
  "Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: ${@0}={@1}$.": "On écrit les vecteurs dans les lignes d’une matrice et on calcule le déterminant par la règle de Sarrus : ${@0}={@1}$.",
  "Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U={@0}$ a $P={@1}$. Keďže $\\det U={@2}$, je $U^{-1}={@3}$ a $A=PU^{-1}={@4}{@5}={@6}$.": "On écrit les vecteurs en colonnes : $A\\,U=P$, où $U={@0}$ et $P={@1}$. Comme $\\det U={@2}$, on a $U^{-1}={@3}$ et $A=PU^{-1}={@4}{@5}={@6}$.",
  "Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.": "Les vecteurs propres sont les solutions non nulles du système homogène $(A-\\lambda I)v=o$.",
  "Vlastné vektory: ${@0}$ pre $\\lambda={@1}$ a ${@2}$ pre $\\lambda={@3}$. Teda $P={@4}$, $D={@5}$, $\\det P={@6}$ a $P^{-1}={@7}$.": "Vecteurs propres : ${@0}$ pour $\\lambda={@1}$ et ${@2}$ pour $\\lambda={@3}$. Donc $P={@4}$, $D={@5}$, $\\det P={@6}$ et $P^{-1}={@7}$.",
  "Vlastné čísla sú prvky diagonály len pri trojuholníkovej matici. Tu rieš charakteristickú rovnicu $\\det(A-\\lambda I)=0$.": "Les valeurs propres ne sont les éléments de la diagonale que pour une matrice triangulaire. Ici, résous l’équation caractéristique $\\det(A-\\lambda I)=0$.",
  "Vo vete o dimenzii je dimenzia vzoru, teda počet stĺpcov ${@0}$, nie počet riadkov.": "Dans le théorème du rang, on utilise la dimension de l’espace de départ, c’est-à-dire le nombre de colonnes ${@0}$, et non le nombre de lignes.",
  "Vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$.": "Multiplier une ligne par ${@0}$ multiplie le déterminant par ${@1}$.",
  "Vypočítaj $(A^{-1})_{{@0}{@1}}$. Neceločíselný výsledok zadaj ako zlomok.": "Calcule $(A^{-1})_{{@0}{@1}}$. Donne un résultat non entier sous forme de fraction.",
  "Vypočítaj $A=PU^{-1}$ (prvky po riadkoch).": "Calcule $A=PU^{-1}$ (éléments ligne par ligne).",
  "Vypočítaj $A^{-1}$ (prvky po riadkoch).": "Calcule $A^{-1}$ (éléments ligne par ligne).",
  "Vypočítaj $A^{{@0}}=PD^{{@1}}P^{-1}$ (prvky po riadkoch).": "Calcule $A^{{@0}}=PD^{{@1}}P^{-1}$ (éléments ligne par ligne).",
  "Vypočítaj $X={@0}$ (prvky po riadkoch).": "Calcule $X={@0}$ (éléments ligne par ligne).",
  "Vypočítaj $\\cos\\varphi$ (ako zlomok).": "Calcule $\\cos\\varphi$ (sous forme de fraction).",
  "Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u={@0}$ a $v={@1}$. Výsledok zadaj ako zlomok.": "Calcule $\\cos\\varphi$, où $\\varphi$ est l’angle des vecteurs $u={@0}$ et $v={@1}$. Donne le résultat sous forme de fraction.",
  "Vypočítaj $\\det A$.": "Calcule $\\det A$.",
  "Vypočítaj $\\langle u, u\\rangle$.": "Calcule $\\langle u, u\\rangle$.",
  "Vypočítaj $\\langle u, v\\rangle$.": "Calcule $\\langle u, v\\rangle$.",
  "Vypočítaj $\\langle u_2, w_1\\rangle$, kde $w_1=u_1$.": "Calcule $\\langle u_2, w_1\\rangle$, où $w_1=u_1$.",
  "Vypočítaj $\\langle v, u\\rangle$.": "Calcule $\\langle v, u\\rangle$.",
  "Vypočítaj $\\langle w_1, w_1\\rangle$.": "Calcule $\\langle w_1, w_1\\rangle$.",
  "Vypočítaj $\\|u\\|$.": "Calcule $\\|u\\|$.",
  "Vypočítaj $\\|v\\|$.": "Calcule $\\|v\\|$.",
  "Vypočítaj $c_1$ a zadaj všetky súradnice.": "Calcule $c_1$ et saisis toutes les coordonnées.",
  "Vypočítaj $c_2$.": "Calcule $c_2$.",
  "Vypočítaj $f(v)$.": "Calcule $f(v)$.",
  "Vypočítaj $g\\bigl(f(v)\\bigr)$.": "Calcule $g\\bigl(f(v)\\bigr)$.",
  "Vypočítaj $x_{{@0}}$. Neceločíselný výsledok zadaj ako zlomok.": "Calcule $x_{{@0}}$. Donne un résultat non entier sous forme de fraction.",
  "Vypočítaj algebraické doplnky {@0}. stĺpca: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.": "Calcule les cofacteurs de la colonne {@0} : $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.",
  "Vypočítaj algebraický doplnok $A_{{@0}{@1}}$.": "Calcule le cofacteur $A_{{@0}{@1}}$.",
  "Vypočítaj determinant $D$ matice sústavy.": "Calcule le déterminant $D$ de la matrice du système.",
  "Vypočítaj determinant $D_\\alpha$ (prvý stĺpec nahradíš pravými stranami).": "Calcule le déterminant $D_\\alpha$ (tu remplaces la première colonne par les seconds membres).",
  "Vypočítaj determinant $D_\\beta$ (druhý stĺpec nahradíš pravými stranami).": "Calcule le déterminant $D_\\beta$ (tu remplaces la deuxième colonne par les seconds membres).",
  "Vypočítaj determinant $D_{{@0}}$.": "Calcule le déterminant $D_{{@0}}$.",
  "Vypočítaj determinant ${@0}$.": "Calcule le déterminant ${@0}$.",
  "Vypočítaj determinant matice $A={@0}$.": "Calcule le déterminant de la matrice $A={@0}$.",
  "Vypočítaj diagonálny prvok $(A^{T}A)_{{@0}{@1}}$.": "Calcule l’élément diagonal $(A^{T}A)_{{@0}{@1}}$.",
  "Vypočítaj hlavný rohový minor $D_{@0}$.": "Calcule le mineur principal $D_{@0}$.",
  "Vypočítaj inverznú maticu k $U={@0}$ (prvky po riadkoch).": "Calcule la matrice inverse de $U={@0}$ (éléments ligne par ligne).",
  "Vypočítaj maticu $A+B^{T}$ (prvky po riadkoch).": "Calcule la matrice $A+B^{T}$ (éléments ligne par ligne).",
  "Vypočítaj maticu $X$ (prvky po riadkoch).": "Calcule la matrice $X$ (éléments ligne par ligne).",
  "Vypočítaj maticu ${@0}$ (prvky po riadkoch).": "Calcule la matrice ${@0}$ (éléments ligne par ligne).",
  "Vypočítaj minor $M_{{@0}{@1}}$ (determinant po vynechaní {@2}. riadka a {@3}. stĺpca).": "Calcule le mineur $M_{{@0}{@1}}$ (le déterminant obtenu en supprimant la ligne {@2} et la colonne {@3}).",
  "Vypočítaj ortogonálnu projekciu vektora $v={@0}$ na smer vektora $u={@1}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).": "Calcule la projection orthogonale du vecteur $v={@0}$ sur la direction du vecteur $u={@1}$. Saisis les composantes séparées par des points-virgules (fractions sous la forme $p/q$).",
  "Vypočítaj rohový minor $D_2$.": "Calcule le mineur principal $D_2$.",
  "Vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Calcule la trace $\\operatorname{tr}(A^{T}A)$.",
  "Vypočítaj stopu $\\operatorname{tr}A$.": "Calcule la trace $\\operatorname{tr}A$.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doprava dole.": "Calcule la somme des trois produits sur les diagonales vers le bas à droite.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doľava dole.": "Calcule la somme des trois produits sur les diagonales vers le bas à gauche.",
  "Vypočítaj vektor ${@0}u$.": "Calcule le vecteur ${@0}u$.",
  "Vypočítaj vektor ${@0}{@1}v$.": "Calcule le vecteur ${@0}{@1}v$.",
  "Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u={@0}$ a $v={@1}$.": "Calcule la distance $\\|u-v\\|$ des vecteurs $u={@0}$ et $v={@1}$.",
  "Vyrieš charakteristickú rovnicu $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Zadaj vlastné čísla.": "Résous l’équation caractéristique $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Saisis les valeurs propres.",
  "Vyrieš maticovú rovnicu ${@0}$, kde $A={@1}$ a $B={@2}$. Prvky matice $X$ zadaj po riadkoch.": "Résous l’équation matricielle ${@0}$, où $A={@1}$ et $B={@2}$. Saisis les éléments de la matrice $X$ ligne par ligne.",
  "Výmena riadkov mení znamienko a vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$": "Échanger des lignes change le signe et multiplier une ligne par ${@0}$ multiplie le déterminant par ${@1}$ : $\\det B=-{@2}\\cdot {@3}={@4}$",
  "Z prvého riadku vypočítaj $x_1$ a zadaj celé riešenie.": "Calcule $x_1$ à partir de la première ligne et saisis la solution complète.",
  "Z rovnice $AU=P$ treba násobiť maticou $U^{-1}$ sprava: $A=PU^{-1}$. Násobenie matíc nie je komutatívne.": "Dans l’équation $AU=P$, il faut multiplier à droite par la matrice $U^{-1}$ : $A=PU^{-1}$. La multiplication des matrices n’est pas commutative.",
  "Z rovnice $X=\\tfrac{1}{{@0}}(A+B^{T})$. Máme $B^{T}={@1}$, $A+B^{T}={@2}$, teda $X={@3}$.": "De l’équation, $X=\\tfrac{1}{{@0}}(A+B^{T})$. On a $B^{T}={@1}$, $A+B^{T}={@2}$, donc $X={@3}$.",
  "Z {@0}. riadku: ${@1}=0$, preto je vlastný vektor násobkom ${@2}$.": "De la ligne {@0} : ${@1}=0$, donc le vecteur propre est un multiple de ${@2}$.",
  "Zabudol si transponovať maticu $B$: v $B^{T}$ sú riadky matice $B$ zapísané ako stĺpce.": "Tu as oublié de transposer la matrice $B$ : dans $B^{T}$, les lignes de la matrice $B$ sont écrites en colonnes.",
  "Zabudol si transponovať maticu $B$: v rovnici je $B^{T}$.": "Tu as oublié de transposer la matrice $B$ : l’équation contient $B^{T}$.",
  "Zabudol si vektory vynásobiť ich koeficientmi. Každú zložku vektora $u$ aj $v$ najprv vynásob príslušným číslom.": "Tu as oublié de multiplier les vecteurs par leurs coefficients. Multiplie d’abord chaque composante des vecteurs $u$ et $v$ par le nombre correspondant.",
  "Zadaj $\\alpha$ a $\\beta$.": "Saisis $\\alpha$ et $\\beta$.",
  "Zadaj jedno netriviálne riešenie (uznáme ľubovoľný nenulový násobok).": "Saisis une solution non triviale (tout multiple non nul est accepté).",
  "Zadaj projekciu $\\operatorname{proj}_u v$ (zlomky v tvare $p/q$).": "Saisis la projection $\\operatorname{proj}_u v$ (fractions sous la forme $p/q$).",
  "Zadaj smerový vektor jadra (ľubovoľný nenulový násobok je správne).": "Saisis un vecteur directeur du noyau (tout multiple non nul est correct).",
  "Zadaj vektor $w_2$.": "Saisis le vecteur $w_2$.",
  "Zadaj vlastný vektor k $\\lambda={@0}$ (ľubovoľný nenulový násobok).": "Saisis un vecteur propre associé à $\\lambda={@0}$ (tout multiple non nul).",
  "Zadaj všetky vlastné čísla matice $A$.": "Saisis toutes les valeurs propres de la matrice $A$.",
  "Zadaj {@0}. riadok matice $A^{-1}$.": "Saisis la ligne {@0} de la matrice $A^{-1}$.",
  "Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.": "Écris l’égalité composante par composante – tu obtiens un système de deux équations d’inconnues $\\alpha$ et $\\beta$.",
  "Zobrazenia si použil v opačnom poradí. Najprv sa na $v$ použije $f$, preto je matica zloženia $A_gA_f$ (matica $A_f$ stojí pri vektore).": "Tu as appliqué les applications dans l’ordre inverse. On applique d’abord $f$ à $v$, donc la matrice de la composée est $A_gA_f$ (la matrice $A_f$ est à côté du vecteur).",
  "Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A={@0}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).": "L’application $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ est définie par $f(x)=Ax$, où $A={@0}$. Le noyau $\\operatorname{Ker}f$ est une droite. Trouve un vecteur directeur de cette droite (tout multiple non nul est correct).",
  "Zobrazenie $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ je dané maticou $A={@2}$. Urči $\\dim\\operatorname{{@3}}f$.": "L’application $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ est donnée par la matrice $A={@2}$. Détermine $\\dim\\operatorname{{@3}}f$.",
  "Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.": "Construis la matrice symétrique de la forme (pour les termes mixtes, la moitié du coefficient) et calcule les mineurs principaux.",
  "Zostav sústavu (vektory bázy v stĺpcoch) a uprav ju na stupňovitý tvar. Z posledného riadku vypočítaj $c_3$.": "Construis le système (vecteurs de la base en colonnes) et mets-le sous forme échelonnée. Calcule $c_3$ à partir de la dernière ligne.",
  "Zvyšný činiteľ je charakteristický polynóm ľavej hornej podmatice $2\\times 2$. Aká je jej stopa?": "Le facteur restant est le polynôme caractéristique de la sous-matrice $2\\times 2$ en haut à gauche. Quelle est sa trace ?",
  "Záporne definitná je forma len vtedy, keď sa znamienka rohových minorov striedajú a $D_1\\lt 0$.": "Une forme n’est définie négative que si les signes des mineurs principaux alternent et $D_1\\lt 0$.",
  "Závislé sú vektory len vtedy, keď je determinant nulový. Prepočítaj ho Sarrusovým pravidlom a pozor na znamienka.": "Les vecteurs ne sont dépendants que si le déterminant est nul. Recalcule-le par la règle de Sarrus et fais attention aux signes.",
  "ani symetrická, ani antisymetrická": "ni symétrique, ni antisymétrique",
  "antisymetrická": "antisymétrique",
  "indefinitná": "indéfinie",
  "je podpriestor": "c’est un sous-espace",
  "je to lineárny obal vektorov $(1, {@0}, 0)$ a $({@1}, 0, 1)$": "c’est le sous-espace engendré par les vecteurs $(1, {@0}, 0)$ et $({@1}, 0, 1)$",
  "je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia": "c’est l’ensemble des solutions d’une équation linéaire homogène – la somme de solutions et le multiple d’une solution sont encore des solutions",
  "je to množina riešení homogénnej sústavy (priamka cez počiatok)": "c’est l’ensemble des solutions d’un système homogène (une droite passant par l’origine)",
  "jeden parameter": "un paramètre",
  "kladne definitná": "définie positive",
  "kladne semidefinitná": "semi-définie positive",
  "kolmá projekcia na os $x$": "projection orthogonale sur l’axe $x$",
  "kolmá projekcia na os $y$": "projection orthogonale sur l’axe $y$",
  "komplexné vlastné čísla – žiadny reálny vlastný smer": "valeurs propres complexes – aucune direction propre réelle",
  "lineárne nezávislé": "linéairement indépendants",
  "lineárne závislé": "linéairement dépendants",
  "napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie": "par ex. $(1, 0, 0)$ et $(0, 1, 0)$ lui appartiennent, mais pas leur somme $(1, 1, 0)$ – il n’est pas stable par addition",
  "napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom": "par ex. $(1, 0, 0)$ lui appartient, mais pas $(-1)\\cdot(1, 0, 0)$ – il n’est pas stable par multiplication par un nombre",
  "napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$": "par ex. $(1, 1, 0)$ lui appartient, mais pas $2\\cdot(1, 1, 0)=(2, 2, 0)$, car $2\\neq 4$",
  "nekladné": "négatives ou nulles",
  "nenulové riadky": "lignes non nulles",
  "nenulový riadok": "ligne non nulle",
  "neobsahuje nulový vektor ($0\\neq {@0}$)": "il ne contient pas le vecteur nul ($0\\neq {@0}$)",
  "neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka ${@0}\\neq 0$": "il ne contient pas le vecteur nul : la première composante ne vaut 0 que pour $s=0$, mais alors la deuxième composante vaut ${@0}\\neq 0$",
  "neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická": "on n’a ni $A^{T}=A$, ni $A^{T}=-A$, donc la matrice n’est ni symétrique, ni antisymétrique",
  "nezáporné": "positives ou nulles",
  "nie je podpriestor": "ce n’est pas un sous-espace",
  "osová súmernosť podľa osi $x$": "symétrie axiale d’axe $x$",
  "osová súmernosť podľa osi $y$": "symétrie axiale d’axe $y$",
  "osová súmernosť podľa priamky $y=-x$": "symétrie axiale par rapport à la droite $y=-x$",
  "osová súmernosť podľa priamky $y=x$": "symétrie axiale par rapport à la droite $y=x$",
  "platí $A^{T}=-A$, teda matica je antisymetrická": "on a $A^{T}=-A$, donc la matrice est antisymétrique",
  "platí $A^{T}=A$, teda matica je symetrická": "on a $A^{T}=A$, donc la matrice est symétrique",
  "práve jedno riešenie": "exactement une solution",
  "rotácia o $180^\\circ$": "rotation de $180^\\circ$",
  "rotácia o $90^\\circ$ proti smeru hodinových ručičiek": "rotation de $90^\\circ$ dans le sens inverse des aiguilles d’une montre",
  "rotácia o $90^\\circ$ v smere hodinových ručičiek": "rotation de $90^\\circ$ dans le sens des aiguilles d’une montre",
  "rovnoľahlosť so stredom v počiatku a koeficientom $2$": "homothétie de centre l’origine et de rapport $2$",
  "skosenie $(x, y)\\mapsto(x+y, y)$": "transvection $(x, y)\\mapsto(x+y, y)$",
  "sprava": "à droite",
  "symetrická": "symétrique",
  "súradnice v báze B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) v štandardnej báze": "coordonnées dans la base B : ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) dans la base canonique",
  "teda $\\alpha=\\frac{{@0}}{{@1}}={@2}$ a $\\beta=\\frac{{@3}}{{@4}}={@5}$.": "donc $\\alpha=\\frac{{@0}}{{@1}}={@2}$ et $\\beta=\\frac{{@3}}{{@4}}={@5}$.",
  "vedúce prvky sú zvýraznené, pod schodmi sú len nuly": "les pivots sont mis en évidence, sous les marches il n’y a que des zéros",
  "všetky rohové minory sú kladné": "tous les mineurs principaux sont positifs",
  "z {@0}. riadku: ${@1} = {@2}$": "de la ligne {@0} : ${@1} = {@2}$",
  "znamienka rohových minorov sa striedajú ({@0})": "les signes des mineurs principaux alternent ({@0})",
  "záporne definitná": "définie négative",
  "záporne semidefinitná": "semi-définie négative",
  "zľava": "à gauche",
  "{@0}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: ${@1}\\times{@2}={@3}${@4}. Všetky riešenia sú $t\\cdot{@5}$, $t\\in\\mathbb{R}$.": "{@0}<br>$h(A)=2\\lt 3$, les solutions forment une droite (un paramètre). La solution est orthogonale aux deux lignes non nulles de la forme échelonnée, on l’obtient donc comme leur produit vectoriel : ${@1}\\times{@2}={@3}${@4}. Toutes les solutions sont $t\\cdot{@5}$, $t\\in\\mathbb{R}$.",
  "{@0}<br>$h(A)={@1}$, teda $\\dim\\operatorname{Im}f={@2}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.": "{@0}<br>$h(A)={@1}$, donc $\\dim\\operatorname{Im}f={@2}$ et, d’après le théorème du rang, $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.",
  "{@0}<br>Podľa Frobeniovej vety: {@1}.": "{@0}<br>D’après le théorème de Rouché–Fontené (Frobenius) : {@1}.",
  "{@0}<br>Spätné dosadzovanie – {@1}": "{@0}<br>Remontée – {@1}",
  "Úpravou: {@0}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom ${@1}\\times{@2}={@3}${@4}.": "Après échelonnement : {@0}<br>Le rang est 2, la solution est orthogonale aux deux lignes non nulles, c’est donc un multiple de ${@1}\\times{@2}={@3}${@4}.",
  "Číslo $\\lambda={@0}$ je vlastným číslom matice $A={@1}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).": "Le nombre $\\lambda={@0}$ est une valeur propre de la matrice $A={@1}$. Trouve un vecteur propre associé (tout multiple non nul est correct).",
  "Štvorcová matica $A$ rádu ${@0}$ má $\\det A={@1}$.{@2} Vypočítaj ${@3}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.": "Une matrice carrée $A$ d’ordre ${@0}$ a $\\det A={@1}$.{@2} Calcule ${@3}$. Donne un résultat non entier sous forme de fraction, par ex. $-3/4$.",
  "Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.": "Une matrice carrée d’ordre 3 est de rang 3 si et seulement si son déterminant est non nul.",
  "− súčiny na oranžových diagonálach": "− produits sur les diagonales orange",
  "nekonečne veľa": "une infinité",
  ", po úprave ${@0}$": ", après simplification ${@0}$",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "Ça, c’est le carré de la distance. Prends encore la racine carrée du résultat."
 }
});
