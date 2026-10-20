/* Français: preklad js/content.js, js/exercises.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/content/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "cisla": {
   "title": "Expressions numériques et priorités des opérations",
   "summary": "Nombres, parenthèses et bon ordre des calculs.",
   "theory": [
    "<p>Les entiers naturels sont $1, 2, 3, 4, \\dots$. On note leur ensemble $\\mathbb{N}$. Si on leur ajoute zéro, on obtient les entiers positifs ou nuls ; en ajoutant les nombres négatifs, on obtient l'ensemble des entiers relatifs $\\mathbb{Z}$.</p>",
    {
     "fig": "numberline",
     "caption": "Droite graduée : les points bleus sont les entiers naturels, à gauche de zéro se trouvent les entiers négatifs."
    },
    "<p><strong>Priorités des opérations :</strong></p>\n       <ol><li>les expressions entre parenthèses,</li><li>les puissances et les racines,</li>\n       <li>la multiplication et la division de gauche à droite,</li><li>l'addition et la soustraction de gauche à droite.</li></ol>"
   ],
   "examples": [
    {
     "task": "Calcule $2 + 3\\cdot 4 - 6 : 2$.",
     "steps": [
      "D'abord la multiplication et la division : $3\\cdot 4 = 12$, $6 : 2 = 3$.",
      "L'expression devient $2 + 12 - 3$.",
      "De gauche à droite : $2 + 12 = 14$, puis $14 - 3 = 11$.",
      "<strong>Résultat : 11</strong>"
     ]
    }
   ]
  },
  "zlomky": {
   "title": "Fractions et opérations sur les fractions",
   "summary": "Simplifier, amplifier et calculer avec des fractions.",
   "theory": [
    "<p>La fraction $\\frac{a}{b}$ a pour numérateur $a$ et pour dénominateur $b \\neq 0$. La valeur de la fraction ne change pas si on multiplie le numérateur et le dénominateur par un même nombre non nul (<strong>amplification</strong>). L'opération inverse est la <strong>simplification</strong>.</p>",
    {
     "fig": "fractions",
     "caption": "Amplifier ne change pas la valeur : $\\frac{1}{2}=\\frac{3}{6}$ et $\\frac{2}{3}=\\frac{4}{6}$ ont des parties coloriées de même longueur."
    },
    "<p><strong>L'addition et la soustraction</strong> demandent un dénominateur commun : $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.</p>",
    "<p><strong>Multiplication</strong> : $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$. <strong>Diviser</strong>, c'est multiplier par l'inverse : $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $\\frac{1}{2}+\\frac{2}{3}$.",
     "steps": [
      "Le dénominateur commun est $2\\cdot 3 = 6$.",
      "$\\frac{1}{2}=\\frac{3}{6}$ et $\\frac{2}{3}=\\frac{4}{6}$.",
      "$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$.",
      "<strong>Résultat : $\\frac{7}{6}=1\\frac{1}{6}$</strong>"
     ]
    }
   ]
  },
  "percenta": {
   "title": "Pourcentages",
   "summary": "Calculer un pourcentage, augmenter et diminuer d'un pourcentage.",
   "theory": [
    "<p>$p\\,\\%$ signifie $\\frac{p}{100}$. Prendre $p\\,\\%$ d'un nombre $x$, c'est calculer $\\frac{p}{100}\\cdot x$.</p>",
    {
     "fig": "percent",
     "caption": "Le tout compte 100 parts. $25\\,\\%$ signifie 25 d'entre elles."
    },
    "<p><strong>Augmenter</strong> de $p\\,\\%$, c'est multiplier par $1+\\frac{p}{100}$ ; <strong>diminuer</strong>, c'est multiplier par $1-\\frac{p}{100}$.</p>",
    "<p>Le nombre décimal $0{,}25$ est la fraction $\\frac{1}{4}$ et aussi $25\\,\\%$. En français, on écrit les nombres décimaux avec une virgule.</p>"
   ],
   "examples": [
    {
     "task": "Un article coûte $80\\,€$. Combien coûte-t-il après une hausse de $15\\,\\%$ ?",
     "steps": [
      "Le coefficient multiplicateur est $1+\\frac{15}{100}=1{,}15$.",
      "$80\\cdot 1{,}15 = 92$.",
      "<strong>Résultat : 92 €</strong>"
     ]
    }
   ]
  },
  "mnoziny": {
   "title": "Ensembles et opérations sur les ensembles",
   "summary": "Éléments, réunion, intersection, différence et cardinal.",
   "theory": [
    "<p>Un ensemble est une collection d'éléments distincts. L'écriture $a\\in A$ signifie que l'élément $a$ appartient à l'ensemble $A$. L'ensemble vide est $\\varnothing$.</p>",
    "<p>Opérations : <strong>réunion</strong> $A\\cup B$ (éléments d'au moins un des deux ensembles), <strong>intersection</strong> $A\\cap B$ (éléments communs aux deux ensembles), <strong>différence</strong> $A\\setminus B$ (éléments de $A$ qui ne sont pas dans $B$).</p>",
    {
     "fig": "venn",
     "caption": "Diagramme de Venn pour $A=\\{1,2,3,4\\}$ et $B=\\{3,4,5\\}$. L'intersection se trouve dans la partie commune des deux disques."
    },
    "<p>Le nombre d'éléments (cardinal) se note $|A|$. On a $|A\\cup B| = |A|+|B|-|A\\cap B|$ : les éléments de l'intersection ont été comptés deux fois, on les retire donc une fois.</p>"
   ],
   "examples": [
    {
     "task": "On donne $A=\\{1,2,3,4\\}$ et $B=\\{3,4,5\\}$. Détermine $A\\cup B$, $A\\cap B$ et $A\\setminus B$.",
     "steps": [
      "$A\\cup B=\\{1,2,3,4,5\\}$",
      "$A\\cap B=\\{3,4\\}$",
      "$A\\setminus B=\\{1,2\\}$"
     ]
    }
   ]
  },
  "obsah": {
   "title": "Périmètre et aire des figures planes",
   "summary": "Périmètre et aire du rectangle, du triangle et du disque.",
   "theory": [
    "<p>Un rectangle de côtés $a$ et $b$ a pour périmètre $o=2(a+b)$ et pour aire $S=a\\cdot b$.</p>",
    "<p>Un triangle de base $z$ et de hauteur $v$ relative à cette base a pour aire $S=\\frac{z\\cdot v}{2}$.</p>",
    "<p>Un disque de rayon $r$ a pour périmètre $o=2\\pi r$ et pour aire $S=\\pi r^2$, où $\\pi\\approx 3{,}14159$.</p>",
    {
     "fig": "shapes",
     "caption": "Côtés $a$, $b$ du rectangle, base $z$ et hauteur $v$ du triangle, rayon $r$ du disque."
    }
   ],
   "examples": [
    {
     "task": "Un disque a pour rayon $r=3\\,\\text{cm}$. Calcule son aire.",
     "steps": [
      "$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$.",
      "$9\\pi\\approx 28{,}27\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "pytagoras": {
   "title": "Théorème de Pythagore",
   "summary": "Calculer les côtés d'un triangle rectangle.",
   "theory": [
    "<p>Dans un triangle rectangle de côtés de l'angle droit $a$, $b$ et d'hypoténuse $c$, on a $a^2+b^2=c^2$. L'hypoténuse est opposée à l'angle droit et c'est toujours le plus long côté.</p>",
    {
     "fig": "pythagoras",
     "caption": "Triangle de côtés $3, 4, 5$ : les aires des carrés construits sur les côtés de l'angle droit, $9+16$, donnent ensemble l'aire du carré construit sur l'hypoténuse, $25$."
    },
    "<p>Triplets entiers classiques : $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ et leurs multiples.</p>"
   ],
   "examples": [
    {
     "task": "Les côtés de l'angle droit mesurent $6$ et $8$. Quelle est la longueur de l'hypoténuse ?",
     "steps": [
      "$c^2=6^2+8^2=36+64=100$.",
      "$c=\\sqrt{100}=10$."
     ]
    }
   ]
  },
  "linearne": {
   "title": "Équations du premier degré",
   "summary": "Transformations équivalentes et équations du premier degré.",
   "theory": [
    "<p>On résout les équations par des <strong>transformations équivalentes</strong> : on ajoute ou on soustrait le même nombre aux deux membres, on multiplie ou on divise les deux membres par un même nombre non nul.</p>",
    "<p>L'équation $ax+b=c$ avec $a\\neq 0$ se résout ainsi : $ax=c-b$, donc $x=\\frac{c-b}{a}$.</p>",
    "<p>On vérifie en remplaçant l'inconnue par le résultat dans l'équation de départ.</p>"
   ],
   "examples": [
    {
     "task": "Résous $3x+5=20$.",
     "steps": [
      "On soustrait $5$ : $3x=15$.",
      "On divise par $3$ : $x=5$.",
      "Vérification : $3\\cdot 5+5=20$ ✓"
     ]
    }
   ]
  },
  "kvadraticke": {
   "title": "Équations du second degré",
   "summary": "Discriminant, formule des racines et relations de Viète.",
   "theory": [
    "<p>L'équation du second degré $ax^2+bx+c=0$ ($a\\neq 0$) a pour racines $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$, où $D=b^2-4ac$ est le <strong>discriminant</strong>.</p>",
    "<p>Si $D&gt;0$, l'équation a deux racines réelles distinctes. Si $D=0$, elle a une racine double. Si $D&lt;0$, elle n'a pas de racine réelle.</p>",
    {
     "fig": "parabola",
     "caption": "Courbe de $y=x^2+px+q$ (donc $b=p$, $c=q$). Les racines sont les points d'intersection de la parabole avec l'axe $x$. Modifie $p$ et $q$ et observe le discriminant."
    },
    "<p><strong>Relations de Viète</strong> (pour $a=1$) : $x_1+x_2=-b$ et $x_1\\cdot x_2=c$.</p>"
   ],
   "examples": [
    {
     "task": "Résous $x^2-5x+6=0$.",
     "steps": [
      "$a=1$, $b=-5$, $c=6$, $D=25-24=1$.",
      "$x_{1,2}=\\frac{5\\pm 1}{2}$, donc $x_1=3$, $x_2=2$.",
      "Vérification : $3+2=5$ et $3\\cdot 2=6$ ✓"
     ]
    }
   ]
  },
  "mocniny": {
   "title": "Puissances et racines",
   "summary": "Règles de calcul avec les puissances et les racines.",
   "theory": [
    "<p>Pour $a&gt;0$ et $m,n$ entiers, on a : $a^m\\cdot a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{m\\cdot n}$.</p>",
    "<p>Exposant négatif : $a^{-n}=\\frac{1}{a^n}$. Exposant nul : $a^0=1$ pour $a\\neq 0$.</p>",
    "<p>La racine est l'opération inverse de la puissance : $\\sqrt{a}=a^{1/2}$, $\\sqrt[n]{a}=a^{1/n}$. On a $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$.</p>"
   ],
   "examples": [
    {
     "task": "Simplifie $\\frac{2^5\\cdot 2^{-2}}{2}$.",
     "steps": [
      "Numérateur : $2^5\\cdot 2^{-2}=2^{3}$.",
      "$\\frac{2^3}{2}=2^{2}$.",
      "<strong>Résultat : $4$</strong>"
     ]
    }
   ]
  },
  "goniometria": {
   "title": "Trigonométrie dans le triangle rectangle",
   "summary": "Sinus, cosinus et tangente dans le triangle rectangle.",
   "theory": [
    "<p>Dans un triangle rectangle d'angle aigu $\\alpha$ : $\\sin\\alpha=\\frac{\\text{côté opposé}}{\\text{hypoténuse}}$, $\\cos\\alpha=\\frac{\\text{côté adjacent}}{\\text{hypoténuse}}$, $\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$.</p>",
    {
     "fig": "trigtriangle",
     "caption": "Noms des côtés d'un triangle rectangle par rapport à l'angle $\\alpha$."
    },
    "<p>Identité fondamentale : $\\sin^2\\alpha+\\cos^2\\alpha=1$.</p>",
    {
     "fig": "unitcircle",
     "caption": "Cercle trigonométrique : un point du cercle a pour coordonnées $(\\cos\\alpha, \\sin\\alpha)$. Fais varier l'angle et observe comment les signes changent."
    },
    "<p>Valeurs pour les angles remarquables :</p>\n       <table class=\"tbl\">\n         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>\n         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>\n         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>\n       </table>"
   ],
   "examples": [
    {
     "task": "Si $\\sin\\alpha=0{,}6$ et $\\alpha$ est un angle aigu, calcule $\\cos\\alpha$.",
     "steps": [
      "$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0{,}36=0{,}64$.",
      "$\\cos\\alpha=\\sqrt{0{,}64}=0{,}8$ (angle aigu, le cosinus est positif)."
     ]
    }
   ]
  },
  "matice": {
   "title": "Déterminant et matrice inverse 2×2",
   "summary": "Écriture matricielle, déterminant 2×2 et matrice inverse.",
   "theory": [
    "<p>Une matrice de taille $m\\times n$ est un tableau de nombres à $m$ lignes et $n$ colonnes. Le coefficient situé à la $i$-ième ligne et à la $j$-ième colonne se note $a_{ij}$.</p>",
    "<p>Le déterminant de la matrice $A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$ est $\\det A=ad-bc$. Si $\\det A\\neq 0$, la matrice inverse existe : $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    {
     "fig": "parallelogram",
     "caption": "Les colonnes de la matrice $\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ sont les vecteurs $u=(2,1)$ et $v=(3,4)$. La valeur absolue du déterminant est l'aire du parallélogramme qu'ils forment : $|\\det|=5$."
    },
    "<p>Un système d'équations linéaires peut s'écrire $Ax=b$ et se résoudre avec la matrice inverse : $x=A^{-1}b$.</p>"
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
   "title": "Produit de matrices",
   "summary": "Comment multiplier des matrices et pourquoi l'ordre compte.",
   "theory": [
    "<p>Le produit $C=AB$ existe si le nombre de colonnes de $A$ est égal au nombre de lignes de $B$. Le coefficient de la $i$-ième ligne et de la $j$-ième colonne est $c_{ij}=\\sum_k a_{ik}b_{kj}$ : on multiplie une ligne de $A$ par une colonne de $B$ terme à terme et on additionne.</p>",
    {
     "fig": "matmul",
     "caption": "Le coefficient $c_{11}$ s'obtient avec la 1re ligne de $A$ et la 1re colonne de $B$ : $1\\cdot 0+2\\cdot 1=2$."
    },
    "<p>La multiplication des matrices <strong>n'est pas commutative</strong> : en général, $AB\\neq BA$.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$, $B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$. Calcule $AB$.",
     "steps": [
      "$c_{11}=1\\cdot 0+2\\cdot 1=2$, $c_{12}=1\\cdot 1+2\\cdot 0=1$.",
      "$c_{21}=3\\cdot 0+4\\cdot 1=4$, $c_{22}=3\\cdot 1+4\\cdot 0=3$.",
      "<strong>Résultat :</strong> $AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$"
     ]
    }
   ]
  },
  "derivacie": {
   "title": "Dérivée d'une fonction",
   "summary": "Variation instantanée, règles de dérivation et tangente.",
   "theory": [
    "<p>Le nombre dérivé $f'(x_0)$ est la limite $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$, si elle existe. Géométriquement, c'est le coefficient directeur de la tangente à la courbe de $f$ au point d'abscisse $x_0$.</p>",
    {
     "fig": "tangent",
     "caption": "Courbe de $f(x)=x^3-2x$ et tangente au point d'abscisse $x_0$. Son coefficient directeur est $f'(x_0)=3x_0^2-2$. Là où la tangente est horizontale, la dérivée est nulle."
    },
    "<p>Règles : $(x^n)'=n\\,x^{n-1}$, $(c)'=0$, $(c\\,f)'=c\\,f'$, $(f+g)'=f'+g'$, $(f\\cdot g)'=f'g+fg'$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$.</p>"
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
   "title": "Bases du calcul intégral",
   "summary": "Intégrale indéfinie et définie, formule de Newton-Leibniz.",
   "theory": [
    "<p>Une primitive $F$ de la fonction $f$ vérifie $F'(x)=f(x)$. Intégrale indéfinie : $\\int f(x)\\,dx=F(x)+C$. Pour $n\\neq -1$, on a $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$.</p>",
    "<p>On calcule l'intégrale définie avec la <strong>formule de Newton-Leibniz</strong> : $\\int_a^b f(x)\\,dx=F(b)-F(a)$. Géométriquement, c'est l'aire de la surface sous la courbe de $f$ entre $a$ et $b$ (pour $f$ positive).</p>",
    {
     "fig": "area",
     "caption": "L'aire sous la courbe de $f(x)=x^2$ entre $0$ et $b$ vaut $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$."
    },
    "<p>Linéarité : $\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $\\int_0^2 3x^2\\,dx$.",
     "steps": [
      "Primitive : $F(x)=x^3$.",
      "$F(2)-F(0)=8-0=8$.",
      "<strong>Résultat : 8</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A={@0}$, $B={@1}$. Aký prvok má súčin $AB$ v riadku {@2} a stĺpci {@3}?": "$A={@0}$, $B={@1}$. Quel est le coefficient du produit $AB$ à la ligne {@2} et à la colonne {@3} ?",
  "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, teda $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.": "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, donc $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.",
  "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).": "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — donne le résultat sous forme de fraction $p/q$ (par ex. 5/6).",
  "$b^2=c^2-a^2={@0}-{@1}={@2}$, teda $b={@3}$.": "$b^2=c^2-a^2={@0}-{@1}={@2}$, donc $b={@3}$.",
  "$c^2=a^2+b^2={@0}+{@1}={@2}$, teda $c={@3}$.": "$c^2=a^2+b^2={@0}+{@1}={@2}$, donc $c={@3}$.",
  "$f'(x)={@0}x^{{@1}}{@2}$, teda $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.": "$f'(x)={@0}x^{{@1}}{@2}$, donc $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.",
  "$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.": "$p\\,\\%$ du nombre $x$, c'est $\\frac{p}{100}\\cdot x$.",
  "${@0}\\,\\%=\\frac{{@1}}{100}$, teda $\\frac{{@2}}{100}\\cdot {@3}={@4}$.": "${@0}\\,\\%=\\frac{{@1}}{100}$, donc $\\frac{{@2}}{100}\\cdot {@3}={@4}$.",
  "${@0}x={@1}{@2}={@3}$, teda $x={@4}$.": "${@0}x={@1}{@2}={@3}$, donc $x={@4}$.",
  "25 štvorčekov zo 100": "25 petits carrés sur 100",
  "Aký exponent bude mať výsledok ${@0}^{\\square}$?": "Quel exposant aura le résultat ${@0}^{\\square}$ ?",
  "Aký je spoločný menovateľ (súčin menovateľov ${@0}\\cdot {@1}$)?": "Quel est le dénominateur commun (produit des dénominateurs ${@0}\\cdot {@1}$) ?",
  "Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?": "Quelle est la somme des racines $x_1 + x_2$ (d'après les relations de Viète) ?",
  "Aký je súčin koreňov $x_1 \\cdot x_2$?": "Quel est le produit des racines $x_1 \\cdot x_2$ ?",
  "Derivácia je $f'(x)=k\\,x^{{@0}}{@1}$. Aký je koeficient $k$?": "La dérivée est $f'(x)=k\\,x^{{@0}}{@1}$. Quel est le coefficient $k$ ?",
  "Determinant ako obsah rovnobežníka": "Le déterminant comme aire d'un parallélogramme",
  "Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.": "Tu as remplacé dans la fonction de départ $f$. Dérive d'abord la fonction, puis remplace.",
  "Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.": "Tu as remplacé dans la fonction de départ. Trouve d'abord une primitive $F$, puis remplace dans celle-ci.",
  "Dosadil si len hornú hranicu. Od $F({@0})$ ešte odčítaj $F({@1})$.": "Tu n'as remplacé que la borne supérieure. Il faut encore soustraire $F({@1})$ de $F({@0})$.",
  "Dosadil si priemer ${@0}$. Vo vzorci $\\pi r^2$ je polomer $r={@1}$.": "Tu as utilisé le diamètre ${@0}$. Dans la formule $\\pi r^2$, le rayon est $r={@1}$.",
  "Druhý súčin: koľko je ${@0}\\cdot {@1}$?": "Deuxième produit : combien font ${@0}\\cdot {@1}$ ?",
  "Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.": "Tu as seulement soustrait les longueurs. Le théorème de Pythagore porte sur les carrés : $b^2=c^2-a^2$.",
  "Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.": "Tu as additionné les exposants. Pour la puissance d'une puissance, on multiplie les exposants.",
  "Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.": "Tu as multiplié les exposants. Pour multiplier des puissances de même base, on additionne les exposants.",
  "Graf funkcie s dotyčnicou": "Courbe d'une fonction avec sa tangente",
  "Graf kvadratickej funkcie": "Courbe d'une fonction du second degré",
  "Horná hranica b": "Borne supérieure b",
  "Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.": "Cherche deux nombres dont le produit vaut $q$ et la somme vaut $-p$.",
  "Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.": "L'identité porte sur les carrés : $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, et non $\\cos\\alpha = 1 - \\sin\\alpha$.",
  "Jednotková kružnica": "Cercle trigonométrique",
  "Koeficient {@0} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom {@1}.": "Tu as soustrait le coefficient {@0}. Devant $x$, c'est une multiplication : divise donc les deux membres par {@1}.",
  "Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.": "Les racines sont deux fois trop grandes. Dans la formule $x=\\frac{-p\\pm\\sqrt{D}}{2}$, n'oublie pas de diviser par deux.",
  "Koľko je $1\\,\\%$ z čísla {@0}?": "Combien font $1\\,\\%$ de {@0} ?",
  "Koľko je $F({@0}) - F({@1})$?": "Combien font $F({@0}) - F({@1})$ ?",
  "Koľko je $F({@0})$?": "Combien vaut $F({@0})$ ?",
  "Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?": "Combien vaut $\\cos\\alpha$ (angle aigu, racine positive), à 3 décimales ?",
  "Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.": "Combien vaut $\\cos^2\\alpha = 1 - \\sin^2\\alpha$ ? Donne-le sous forme de fraction.",
  "Koľko je $\\pi\\cdot {@0}$ (použi $\\pi\\approx 3{{@1}}14$)?": "Combien font $\\pi\\cdot {@0}$ (prends $\\pi\\approx 3{{@1}}14$) ?",
  "Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).": "Combien vaut $\\sin^2\\alpha$ ? Donne-le sous forme de fraction (par ex. 9/25).",
  "Koľko je $a^2 = {@0}^2$?": "Combien vaut $a^2 = {@0}^2$ ?",
  "Koľko je $b = \\sqrt{{@0}}$?": "Combien vaut $b = \\sqrt{{@0}}$ ?",
  "Koľko je $b^2 = {@0} - {@1}$?": "Combien vaut $b^2 = {@0} - {@1}$ ?",
  "Koľko je $b^2 = {@0}^2$?": "Combien vaut $b^2 = {@0}^2$ ?",
  "Koľko je $c = \\sqrt{{@0}}$?": "Combien vaut $c = \\sqrt{{@0}}$ ?",
  "Koľko je $c^2 = {@0} + {@1}$?": "Combien vaut $c^2 = {@0} + {@1}$ ?",
  "Koľko je $c^2 = {@0}^2$?": "Combien vaut $c^2 = {@0}^2$ ?",
  "Koľko je $f'({@0})$?": "Combien vaut $f'({@0})$ ?",
  "Koľko je $r^2 = {@0}^2$?": "Combien vaut $r^2 = {@0}^2$ ?",
  "Koľko je $z\\cdot v = {@0}\\cdot {@1}$?": "Combien font $z\\cdot v = {@0}\\cdot {@1}$ ?",
  "Koľko je ${@0} + {@1} - {@2}$?": "Combien font ${@0} + {@1} - {@2}$ ?",
  "Koľko je ${@0} - ({@1})$?": "Combien font ${@0} - ({@1})$ ?",
  "Koľko je ${@0} : {@1}$?": "Combien font ${@0} : {@1}$ ?",
  "Koľko je ${@0}\\,\\%$ z čísla ${@1}$?": "Combien font ${@0}\\,\\%$ de ${@1}$ ?",
  "Koľko je ${@0}\\cdot {@1}$?": "Combien font ${@0}\\cdot {@1}$ ?",
  "Koľko je ${@0}^{{@1}}$?": "Combien vaut ${@0}^{{@1}}$ ?",
  "Koľko je $|A| + |B|$?": "Combien font $|A| + |B|$ ?",
  "Koľko je teda ${@0}\\,\\%$ z čísla {@1}?": "Combien font donc ${@0}\\,\\%$ de {@1} ?",
  "Kruh má polomer $r={@0}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{{@1}}14$).": "Un disque a pour rayon $r={@0}$. Calcule son aire $S$ (prends $\\pi\\approx 3{{@1}}14$).",
  "Ktoré dve čísla majú súčet {@0} a súčin {@1}? Zadaj ich oddelené bodkočiarkou.": "Quels sont les deux nombres dont la somme vaut {@0} et le produit {@1} ? Sépare-les par un point-virgule.",
  "Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.": "On ne multiplie pas les matrices coefficient par coefficient à la même place. Multiplie une ligne de la matrice $A$ par une colonne de la matrice $B$ et additionne les produits.",
  "Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.": "Tu as mis au dénominateur commun, mais tu n'as pas multiplié les numérateurs. Multiplie le numérateur par le même nombre que le dénominateur.",
  "Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?": "L'ensemble $A$ a ${@0}$ éléments, l'ensemble $B$ a ${@1}$ éléments et leur intersection a ${@2}$ éléments. Combien d'éléments a $A\\cup B$ ?",
  "Najprv násobenie a delenie: ${@0}\\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} + {@7} - {@8} = {@9}$.": "D'abord la multiplication et la division : ${@0}\\cdot {@1} = {@2}$ et ${@3} : {@4} = {@5}$. Ensuite ${@6} + {@7} - {@8} = {@9}$.",
  "Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.": "Soustrais d'abord la constante des deux côtés, puis divise par le coefficient de $x$.",
  "Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.": "Calcule d'abord la multiplication et la division, et seulement ensuite l'addition et la soustraction.",
  "Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.": "Tu as multiplié les coefficients dans les colonnes. Multiplie selon les diagonales : $a\\cdot d$ et $b\\cdot c$.",
  "Obdĺžnik má strany $a={@0}$ a $b={@1}$. Aký je jeho obsah $S$?": "Un rectangle a pour côtés $a={@0}$ et $b={@1}$. Quelle est son aire $S$ ?",
  "Obdĺžnik, trojuholník a kruh": "Rectangle, triangle et disque",
  "Obsah kruhu je $\\pi r^2$.": "L'aire d'un disque est $\\pi r^2$.",
  "Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.": "L'aire d'un rectangle est le produit des longueurs de deux côtés consécutifs.",
  "Obsah trojuholníka je polovica súčinu základne a výšky.": "L'aire d'un triangle est la moitié du produit de la base par la hauteur.",
  "Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.": "Tu as seulement additionné les côtés de l'angle droit. Le théorème de Pythagore porte sur les carrés : $c^2=a^2+b^2$.",
  "Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).": "L'angle aigu $\\alpha$ vérifie $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Calcule $\\cos\\alpha$ (à 3 décimales).",
  "Plocha pod grafom funkcie": "Aire sous la courbe d'une fonction",
  "Použi $(x^n)'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.": "Utilise $(x^n)'=n\\,x^{n-1}$ et dérive chaque terme séparément.",
  "Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.": "Utilise $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$, puis la formule de Newton-Leibniz.",
  "Použi Pytagorovu vetu $c^2=a^2+b^2$.": "Utilise le théorème de Pythagore $c^2=a^2+b^2$.",
  "Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.": "Utilise l'identité $\\sin^2\\alpha+\\cos^2\\alpha=1$.",
  "Pozri si tabuľku hodnôt v teórii.": "Regarde le tableau de valeurs dans la théorie.",
  "Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.": "Tu as calculé de gauche à droite. La multiplication et la division sont prioritaires sur l'addition et la soustraction.",
  "Pravouhlý trojuholník má odvesny $a={@0}$ a $b={@1}$. Aká je dĺžka prepony $c$?": "Un triangle rectangle a pour côtés de l'angle droit $a={@0}$ et $b={@1}$. Quelle est la longueur de l'hypoténuse $c$ ?",
  "Pravouhlý trojuholník má preponu $c={@0}$ a odvesnu $a={@1}$. Aká je dĺžka druhej odvesny $b$?": "Un triangle rectangle a pour hypoténuse $c={@0}$ et pour côté de l'angle droit $a={@1}$. Quelle est la longueur de l'autre côté de l'angle droit $b$ ?",
  "Pravouhlý trojuholník s popisom strán": "Triangle rectangle avec le nom des côtés",
  "Pre $2\\times 2$ matica je $\\det=ad-bc$.": "Pour une matrice $2\\times 2$, on a $\\det=ad-bc$.",
  "Pre funkciu $f(x)={@0}x^{{@1}}{@2}$ vypočítaj $f'({@3})$.": "Pour la fonction $f(x)={@0}x^{{@1}}{@2}$, calcule $f'({@3})$.",
  "Prenes konštantu na pravú stranu. Koľko je ${@0}x$?": "Fais passer la constante dans le membre de droite. Combien vaut ${@0}x$ ?",
  "Pri násobení mocnín rovnakého základu sa exponenty sčítajú.": "Pour multiplier des puissances de même base, on additionne les exposants.",
  "Pri prenesení čísla {@0} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.": "En faisant passer le nombre {@0} de l'autre côté, tu n'as pas changé son signe. Fais la même opération inverse des deux côtés.",
  "Pri umocňovaní mocniny sa exponenty násobia.": "Pour la puissance d'une puissance, on multiplie les exposants.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, teda $F({@3})-F({@4})={@5}$.": "Une primitive est $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, donc $F({@3})-F({@4})={@5}$.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Koľko je $F({@3})$?": "Une primitive est $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Combien vaut $F({@3})$ ?",
  "Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.": "Les éléments de l'intersection sont comptés deux fois, il faut donc les soustraire.",
  "Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.": "Tu as soustrait deux fois les éléments de l'intersection. Ils font partie de la réunion : soustrais-les une seule fois.",
  "Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.": "Tu as compté deux fois les éléments de l'intersection : ils sont à la fois dans $A$ et dans $B$. Soustrais-les une fois.",
  "Prvky prieniku sú v tomto súčte dvakrát. Koľko je ${@0} - {@1}$?": "Les éléments de l'intersection sont comptés deux fois dans cette somme. Combien font ${@0} - {@1}$ ?",
  "Prvý súčin: koľko je ${@0}\\cdot {@1}$?": "Premier produit : combien font ${@0}\\cdot {@1}$ ?",
  "Pytagorova veta: štvorce nad stranami": "Théorème de Pythagore : les carrés construits sur les côtés",
  "Rozšír druhý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Écris la deuxième fraction avec le dénominateur {@0}. Quel sera son numérateur ?",
  "Rozšír prvý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Écris la première fraction avec le dénominateur {@0}. Quel sera son numérateur ?",
  "Spoločný menovateľ je ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.": "Le dénominateur commun est ${@0}$ : $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.",
  "Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.": "Tu as additionné les côtés. Pour obtenir l'aire du rectangle, il faut les multiplier.",
  "Súčet: koľko je ${@0} + {@1}$?": "Somme : combien font ${@0} + {@1}$ ?",
  "Súčin matíc: riadok krát stĺpec": "Produit de matrices : ligne fois colonne",
  "Súčin na hlavnej diagonále: koľko je $({@0})\\cdot({@1})$?": "Produit sur la diagonale principale : combien font $({@0})\\cdot({@1})$ ?",
  "Súčin na vedľajšej diagonále: koľko je $({@0})\\cdot({@1})$?": "Produit sur l'autre diagonale : combien font $({@0})\\cdot({@1})$ ?",
  "Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.": "Tu as additionné les produits. Le déterminant est une différence : produit de la diagonale principale moins produit de l'autre diagonale.",
  "Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.": "Additionne les numérateurs et écris le résultat sous forme de fraction $p/q$.",
  "Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.": "Tu as additionné les numérateurs et les dénominateurs. On additionne des fractions seulement après les avoir mises au même dénominateur – on n'additionne pas les dénominateurs.",
  "To je $\\cos^2\\alpha$. Na konci ešte odmocni.": "Ça, c'est $\\cos^2\\alpha$. Il faut encore prendre la racine carrée à la fin.",
  "To je $b^2$. Na konci ešte odmocni.": "Ça, c'est $b^2$. Il faut encore prendre la racine carrée à la fin.",
  "To je $c^2$. Na konci ešte odmocni.": "Ça, c'est $c^2$. Il faut encore prendre la racine carrée à la fin.",
  "To je hodnota {@0} uhla ${@1}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.": "C'est la valeur du {@0} de l'angle ${@1}^\\circ$. Le sinus croît de 0 à 1 quand l'angle augmente, le cosinus décroît de 1 à 0.",
  "To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.": "Ça, c'est le périmètre (somme de tous les côtés). L'aire est le produit de deux côtés consécutifs.",
  "To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.": "Ça, c'est le périmètre du cercle $2\\pi r$. L'aire est $\\pi r^2$.",
  "To je zvyšok do 100 %. Pýtame sa na samotných ${@0}\\,\\%$ z čísla {@1}.": "C'est ce qui manque pour arriver à 100 %. On demande seulement ${@0}\\,\\%$ de {@1}.",
  "Trojuholník je polovica obdĺžnika. Koľko je ${@0} : 2$?": "Le triangle est la moitié d'un rectangle. Combien font ${@0} : 2$ ?",
  "Trojuholník má základňu $z={@0}$ a výšku $v={@1}$. Aký je jeho obsah $S$?": "Un triangle a pour base $z={@0}$ et pour hauteur $v={@1}$. Quelle est son aire $S$ ?",
  "Uhol α (°)": "Angle α (°)",
  "Vennov diagram dvoch množín": "Diagramme de Venn de deux ensembles",
  "Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.": "Prends la $i$-ième ligne de la matrice $A$ et la $j$-ième colonne de la matrice $B$, et multiplie-les terme à terme.",
  "Vietove vzťahy: $x_1+x_2={@0}$ a $x_1\\cdot x_2={@1}$. Korene sú $x_1={@2}$ a $x_2={@3}$.": "Relations de Viète : $x_1+x_2={@0}$ et $x_1\\cdot x_2={@1}$. Les racines sont $x_1={@2}$ et $x_2={@3}$.",
  "Vydeľ obe strany číslom {@0}. Koľko je $x$?": "Divise les deux membres par {@0}. Combien vaut $x$ ?",
  "Vypočítaj $({@0}^{{@1}})^{{@2}}$.": "Calcule $({@0}^{{@1}})^{{@2}}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.": "Calcule $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.",
  "Vypočítaj ${@0}\\,{@1}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).": "Calcule ${@0}\\,{@1}^\\circ$ sous forme de nombre décimal (à 3 décimales).",
  "Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.": "Calcule ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.",
  "Vypočítaj determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.": "Calcule le déterminant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.",
  "Vyrieš rovnicu $x^2{@0}{@1} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).": "Résous l'équation $x^2{@0}{@1} = 0$. Donne les deux racines séparées par un point-virgule (par ex. 2; 3).",
  "Vyrieš rovnicu ${@0}x{@1} = {@2}$.": "Résous l'équation ${@0}x{@1} = {@2}$.",
  "Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.": "À partir du théorème de Pythagore, exprime $b^2=c^2-a^2$.",
  "Z matice $B$ si vzal riadok. Prvok súčinu je {@0}. riadok matice $A$ krát {@1}. stĺpec matice $B$.": "Tu as pris une ligne de la matrice $B$. Le coefficient du produit, c'est la ligne {@0} de la matrice $A$ fois la colonne {@1} de la matrice $B$.",
  "Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.": "Tu as oublié de diviser par deux. Le triangle est la moitié d'un rectangle de côtés $z$ et $v$.",
  "Zabudol si deliť číslom {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.": "Tu as oublié de diviser par {@0} : $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.",
  "Zabudol si exponent {@0} dať pred $x$: $(x^{{@1}})'={@2}x^{{@3}}$.": "Tu as oublié de mettre l'exposant {@0} devant $x$ : $(x^{{@1}})'={@2}x^{{@3}}$.",
  "Zabudol si na delenie. Neodčítavaš {@0}, ale až výsledok ${@1} : {@2}$.": "Tu as oublié la division. On ne soustrait pas {@0}, mais seulement le résultat de ${@1} : {@2}$.",
  "Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.": "Tu as oublié d'élever le rayon au carré : l'aire est $\\pi\\cdot r\\cdot r$.",
  "Zlomky ako pruhy": "Les fractions sous forme de bandes",
  "Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.": "Mets les fractions au même dénominateur : $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.",
  "Základy si vynásobil. Základ {@0} ostáva, sčítajú sa len exponenty.": "Tu as multiplié les bases. La base {@0} reste la même, on additionne seulement les exposants.",
  "b = {@0} · <span class=\"c-accent\">obsah = b³/3 = {@1}</span>": "b = {@0} · <span class=\"c-accent\">aire = b³/3 = {@1}</span>",
  "korene x₁ = {@0}, x₂ = {@1}": "racines x₁ = {@0}, x₂ = {@1}",
  "kosínusu": "cosinus",
  "kruh": "disque",
  "napr. 5/6": "par ex. 5/6",
  "nemá reálne korene (D &lt; 0)": "pas de racine réelle (D &lt; 0)",
  "obdĺžnik": "rectangle",
  "odvesna": "côté de l'angle droit",
  "prepona": "hypoténuse",
  "prirodzené čísla ℕ": "entiers naturels ℕ",
  "priľahlá odvesna": "côté adjacent",
  "protiľahlá": "côté opposé",
  "sínusu": "sinus",
  "trojuholník": "triangle",
  "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (smernica dotyčnice)": "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (pente de la tangente)",
  "y = x²{@0}{@1} · D = {@2} · {@3}": "y = x²{@0}{@1} · D = {@2} · {@3}",
  "záporné celé čísla": "entiers négatifs",
  "Člen ${@0}x$ si nezderivoval. Jeho derivácia je {@1}.": "Tu n'as pas dérivé le terme ${@0}x$. Sa dérivée est {@1}.",
  "Číselná os": "Droite graduée",
  "Číslo si vydelil počtom percent. ${@0}\\,\\%$ znamená {@1} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob {@2}.": "Tu as divisé le nombre par le pourcentage. ${@0}\\,\\%$ signifie {@1} centièmes : trouve donc d'abord 1 % (divise par 100), puis multiplie par {@2}.",
  "Štvorec rozdelený na 100 dielov, 25 je vyfarbených": "Carré partagé en 100 parties, dont 25 sont coloriées",
  "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>": "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>"
 }
});
