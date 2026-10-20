/* Français: preklad js/rocniky/s4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/s4/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "s4-limita": {
   "title": "Limite d’une fonction",
   "summary": "Vers quoi tendent les valeurs d’une fonction, calcul de limites de la forme 0/0 et limites à l’infini.",
   "theory": [
    "<p>L’écriture $\\lim_{x\\to a} f(x) = L$ signifie que les valeurs $f(x)$ sont aussi proches qu’on veut du nombre $L$ dès que $x$ est suffisamment proche de $a$ (avec $x\\neq a$).\n       La valeur de la fonction au point $a$ lui-même <strong>n’intervient pas</strong> dans la limite ; la fonction n’a même pas besoin d’y être définie.\n       La limite existe si et seulement si les <strong>limites à gauche et à droite</strong> $\\lim_{x\\to a^-} f(x)$ et $\\lim_{x\\to a^+} f(x)$ sont égales.</p>",
    {
     "fig": "s4-limita",
     "caption": "La fonction $f(x)=\\frac{\\sin x}{x}$ n’est pas définie en $0$ (cercle vide), et pourtant $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$. Diminue $h$ et observe les valeurs."
    },
    "<p><strong>Comment calculer une limite :</strong></p>\n       <ul><li>Si $f$ est continue en $a$ (polynôme, $\\sin$, $\\mathrm{e}^x$ …), il suffit de remplacer : $\\lim_{x\\to a} f(x) = f(a)$.</li>\n       <li>On transforme une expression de la forme $\\frac{0}{0}$ : on factorise et on simplifie, ou on multiplie par l’expression conjuguée pour faire apparaître une différence de carrés.</li>\n       <li>Limite importante : $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, donc $\\lim_{x\\to 0}\\frac{\\sin kx}{x} = k$.</li>\n       <li>Une expression $\\frac{c}{0}$ avec $c\\neq 0$ conduit à une limite infinie $\\pm\\infty$ ; on détermine le signe à l’aide des limites à gauche et à droite.</li></ul>",
    "<p><strong>Limite à l’infini</strong> d’une fonction rationnelle : on divise le numérateur et le dénominateur par la plus haute puissance de $x$ du dénominateur.\n       Si les degrés sont égaux, la limite est le quotient des coefficients dominants ; si le numérateur est de degré inférieur, la limite vaut $0$.\n       Par exemple $\\lim_{x\\to\\infty}\\frac{3x^2+1}{2x^2-x} = \\frac{3}{2}$. Si $\\lim_{x\\to\\pm\\infty} f(x) = q$, la droite $y=q$ est une asymptote horizontale à la courbe.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3}$.",
     "steps": [
      "En remplaçant, on obtient $\\frac{0}{0}$ ; il faut donc transformer l’expression.",
      "On factorise le numérateur : $x^2-9=(x-3)(x+3)$. Pour $x\\neq 3$, on simplifie : $\\frac{(x-3)(x+3)}{x-3}=x+3$.",
      "$\\lim_{x\\to 3}(x+3)=6$.",
      "<strong>Résultat : 6</strong>"
     ]
    },
    {
     "task": "Calcule $\\lim_{x\\to\\infty}\\dfrac{4x^2-x+7}{2x^2+5}$.",
     "steps": [
      "On divise le numérateur et le dénominateur par $x^2$ : $\\dfrac{4-\\frac{1}{x}+\\frac{7}{x^2}}{2+\\frac{5}{x^2}}$.",
      "Les fractions $\\frac{1}{x}$, $\\frac{7}{x^2}$ et $\\frac{5}{x^2}$ tendent vers zéro quand $x\\to\\infty$.",
      "<strong>Résultat : $\\frac{4}{2}=2$</strong>"
     ]
    }
   ]
  },
  "s4-derivacie-funkcii": {
   "title": "Dérivées des fonctions usuelles",
   "summary": "Dérivée des fonctions exponentielle, logarithme et trigonométriques, d’un produit, d’un quotient et d’une fonction composée.",
   "theory": [
    "<p><strong>Dérivées des fonctions usuelles :</strong></p>\n       <table class=\"tbl tbl-auto\">\n         <tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(x)$</th><th>$f'(x)$</th></tr>\n         <tr><td>$c$</td><td>$0$</td><td>$x^n$</td><td>$n\\,x^{n-1}$</td></tr>\n         <tr><td>$\\mathrm{e}^x$</td><td>$\\mathrm{e}^x$</td><td>$a^x$</td><td>$a^x\\ln a$</td></tr>\n         <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td>$\\log_a x$</td><td>$\\frac{1}{x\\ln a}$</td></tr>\n         <tr><td>$\\sin x$</td><td>$\\cos x$</td><td>$\\cos x$</td><td>$-\\sin x$</td></tr>\n         <tr><td>$\\tan x$</td><td>$\\frac{1}{\\cos^2 x}$</td><td>$\\sqrt{x}$</td><td>$\\frac{1}{2\\sqrt{x}}$</td></tr>\n       </table>",
    "<p><strong>Règles :</strong> produit $(u\\cdot v)'=u'v+uv'$, quotient $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$ (pour $v\\neq 0$),\n       fonction composée $\\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x)$ — on multiplie la dérivée de la fonction « extérieure » par celle de la fonction « intérieure ».\n       Par exemple $(\\sin 3x)'=3\\cos 3x$, $(\\mathrm{e}^{x^2})'=2x\\,\\mathrm{e}^{x^2}$, $\\big(\\ln(x^2+1)\\big)'=\\frac{2x}{x^2+1}$.</p>",
    {
     "fig": "s4-exp-ln",
     "caption": "Les courbes de $y=\\mathrm{e}^x$ et $y=\\ln x$ sont symétriques par rapport à la droite $y=x$. La tangente à la courbe de $\\mathrm{e}^x$ au point $[0; 1]$ a pour coefficient directeur $\\mathrm{e}^0=1$, la tangente à la courbe de $\\ln x$ au point $[1; 0]$ a pour coefficient directeur $\\frac{1}{1}=1$."
    },
    "<p>La <strong>tangente</strong> à la courbe de la fonction $f$ au point $[x_0; f(x_0)]$ a pour équation $y=f(x_0)+f'(x_0)(x-x_0)$.</p>"
   ],
   "examples": [
    {
     "task": "Dérive $f(x)=x^2\\sin x$.",
     "steps": [
      "Il s’agit du produit de $u=x^2$ et $v=\\sin x$, avec $u'=2x$ et $v'=\\cos x$.",
      "<strong>$f'(x)=2x\\sin x+x^2\\cos x$</strong>"
     ]
    },
    {
     "task": "Pour $f(x)=\\ln(x^2+1)$, calcule $f'(1)$ et écris l’équation de la tangente au point $x_0=1$.",
     "steps": [
      "Fonction composée : la fonction extérieure $\\ln u$ a pour dérivée $\\frac{1}{u}$, la fonction intérieure $u=x^2+1$ a pour dérivée $2x$.",
      "$f'(x)=\\frac{2x}{x^2+1}$, donc $f'(1)=\\frac{2}{2}=1$.",
      "$f(1)=\\ln 2$, tangente : $y=\\ln 2+1\\cdot(x-1)$, c’est-à-dire $y=x-1+\\ln 2$."
     ]
    }
   ]
  },
  "s4-extremy": {
   "title": "Variations et extremums d’une fonction",
   "summary": "Signe de la dérivée, points critiques, extremums locaux et globaux, problèmes d’optimisation.",
   "theory": [
    "<p>Si $f'(x)&gt;0$ sur un intervalle $I$, la fonction $f$ y est <strong>croissante</strong> ; si $f'(x)&lt;0$, elle est <strong>décroissante</strong>.\n       Les points où $f'(x)=0$ sont appelés <strong>points critiques</strong>. Une fonction (dérivable) ne peut avoir un extremum local qu’en un point critique.</p>",
    {
     "fig": "s4-extremy",
     "caption": "Courbe de $f(x)=x^3-3x$, $f'(x)=3x^2-3=3(x-1)(x+1)$. Parties vertes : $f'&gt;0$, partie orange : $f'&lt;0$. En $-1$, il y a un maximum local $2$, en $1$ un minimum local $-2$."
    },
    "<p><strong>Nature de l’extremum :</strong> si $f'$ change de signe de $+$ à $-$, il y a un <strong>maximum local</strong> ; un changement de $-$ à $+$ indique un <strong>minimum local</strong>.\n       La dérivée seconde convient tout aussi bien : $f'(x_0)=0$ et $f''(x_0)&lt;0$ donne un maximum, $f''(x_0)&gt;0$ un minimum.</p>",
    "<p><strong>Extremums globaux sur un intervalle fermé</strong> $\\langle a; b\\rangle$ : on compare les valeurs aux points critiques situés dans l’intervalle et aux bornes $a$, $b$.\n       C’est ainsi qu’on résout les <strong>problèmes d’optimisation</strong> : on exprime la grandeur comme fonction d’une seule variable et on cherche sa plus grande ou sa plus petite valeur.</p>"
   ],
   "examples": [
    {
     "task": "Trouve les extremums locaux de la fonction $f(x)=x^3-6x^2+9x+1$.",
     "steps": [
      "$f'(x)=3x^2-12x+9=3(x-1)(x-3)$, les points critiques sont $1$ et $3$.",
      "Sur $(-\\infty; 1)$, $f'&gt;0$ ; sur $(1; 3)$, $f'&lt;0$ ; sur $(3; \\infty)$, $f'&gt;0$.",
      "En $1$, il y a un maximum local $f(1)=5$, en $3$ un minimum local $f(3)=1$."
     ]
    },
    {
     "task": "Avec un fil de fer de longueur $40\\,\\text{cm}$, on veut former un rectangle d’aire maximale. Quelles sont ses dimensions ?",
     "steps": [
      "Les côtés mesurent $x$ et $20-x$, l’aire est $S(x)=x(20-x)=20x-x^2$ pour $x\\in(0; 20)$.",
      "$S'(x)=20-2x=0$ pour $x=10$ ; $S''(x)=-2&lt;0$, c’est un maximum.",
      "<strong>L’aire maximale est obtenue pour le carré $10\\times 10\\,\\text{cm}$, $S=100\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "s4-priebeh": {
   "title": "Étude d’une fonction et sa courbe",
   "summary": "Ensemble de définition, parité, asymptotes, extremums, convexité et points d’inflexion.",
   "theory": [
    "<p>On fait l’<strong>étude d’une fonction</strong> par étapes :</p>\n       <ol><li>ensemble de définition $D(f)$, éventuellement parité ($f(-x)=f(x)$) ou imparité ($f(-x)=-f(x)$) et périodicité,</li>\n       <li>points d’intersection de la courbe avec les axes et signe de la fonction,</li>\n       <li>limites aux bornes de $D(f)$ et <strong>asymptotes</strong>,</li>\n       <li>$f'$ : intervalles de monotonie et extremums locaux,</li>\n       <li>$f''$ : intervalles où la fonction est <strong>convexe</strong> ($f''&gt;0$) ou <strong>concave</strong> ($f''&lt;0$), et <strong>points d’inflexion</strong>, où la convexité change,</li>\n       <li>esquisse de la courbe.</li></ol>",
    "<p><strong>Asymptotes :</strong> la droite $x=a$ est une asymptote verticale si $f(x)$ tend vers $\\pm\\infty$ quand $x\\to a^+$ ou $x\\to a^-$ (typiquement une valeur qui annule le dénominateur).\n       La droite $y=kx+q$ est une asymptote oblique si $k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}$ et $q=\\lim_{x\\to\\pm\\infty}(f(x)-kx)$ ; pour $k=0$, c’est une asymptote horizontale $y=q$.\n       La fonction homographique $f(x)=\\frac{ax+b}{cx+d}$ a pour asymptotes $x=-\\frac{d}{c}$ et $y=\\frac{a}{c}$.</p>",
    {
     "fig": "s4-asymptoty",
     "caption": "Courbe de $f(x)=\\frac{2x+1}{x-1}=2+\\frac{3}{x-1}$ avec les asymptotes $x=1$ et $y=2$. Les points verts sont les points d’intersection avec les axes $[-\\frac{1}{2}; 0]$ et $[0; -1]$. La fonction est décroissante sur $(-\\infty; 1)$ comme sur $(1; \\infty)$."
    },
    "<p>Une fonction convexe est située au-dessus de chacune de ses tangentes (la courbe « retient l’eau »), une fonction concave en dessous.\n       Un polynôme du troisième degré $ax^3+bx^2+cx+d$ a toujours exactement un point d’inflexion, en $x=-\\frac{b}{3a}$.</p>"
   ],
   "examples": [
    {
     "task": "Trouve le point d’inflexion de la fonction $f(x)=x^3-3x^2+4$ et détermine où elle est convexe.",
     "steps": [
      "$f'(x)=3x^2-6x$, $f''(x)=6x-6$.",
      "$f''(x)=0$ pour $x=1$ ; pour $x&lt;1$, $f''&lt;0$ ; pour $x&gt;1$, $f''&gt;0$.",
      "Le point d’inflexion est $[1; f(1)]=[1; 2]$, la fonction est convexe sur $(1; \\infty)$ et concave sur $(-\\infty; 1)$."
     ]
    },
    {
     "task": "Étudie la parité de la fonction $f(x)=\\frac{x}{x^2+1}$ et détermine son asymptote horizontale.",
     "steps": [
      "$D(f)=\\mathbb{R}$ est symétrique par rapport à zéro et $f(-x)=\\frac{-x}{x^2+1}=-f(x)$ : la fonction est impaire (la courbe est symétrique par rapport à l’origine).",
      "Le numérateur est de degré inférieur au dénominateur, donc $\\lim_{x\\to\\pm\\infty}f(x)=0$.",
      "L’asymptote horizontale est $y=0$ (l’axe $x$)."
     ]
    }
   ]
  },
  "s4-plocha": {
   "title": "Aire d’un domaine et changement de variable dans une intégrale",
   "summary": "Aire du domaine compris entre deux courbes, intégrales des fonctions usuelles et changement de variable affine.",
   "theory": [
    "<p>Si $f(x)\\le g(x)$ sur l’intervalle $\\langle a; b\\rangle$, l’aire du domaine compris entre les courbes est $S=\\int_a^b \\big(g(x)-f(x)\\big)\\,dx$ — « celle du haut moins celle du bas ».\n       Les bornes $a$, $b$ sont généralement les abscisses des points d’intersection des courbes ; on les trouve à partir de l’équation $f(x)=g(x)$.\n       Si la fonction est située sous l’axe $x$, son intégrale est négative ; l’aire est donc sa valeur absolue.</p>",
    {
     "fig": "s4-medzi-krivkami",
     "caption": "La droite $y=2x$ et la parabole $y=x^2$ se coupent en $x=0$ et $x=2$. L’aire du domaine est $\\int_0^2 (2x-x^2)\\,dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=\\frac{4}{3}$."
    },
    "<p><strong>Intégrales des fonctions usuelles :</strong> $\\int \\mathrm{e}^x\\,dx=\\mathrm{e}^x+c$, $\\int \\frac{1}{x}\\,dx=\\ln|x|+c$, $\\int \\sin x\\,dx=-\\cos x+c$, $\\int \\cos x\\,dx=\\sin x+c$.</p>",
    "<p><strong>Changement de variable affine :</strong> si $F$ est une primitive de $f$, alors $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)+c$.\n       Par exemple $\\int (2x+1)^3\\,dx=\\frac{1}{2}\\cdot\\frac{(2x+1)^4}{4}+c$ ou $\\int \\cos 3x\\,dx=\\frac{1}{3}\\sin 3x+c$. On vérifie toujours le résultat en dérivant.</p>"
   ],
   "examples": [
    {
     "task": "Calcule l’aire du domaine délimité par la parabole $y=4-x^2$ et l’axe $x$.",
     "steps": [
      "Points d’intersection avec l’axe : $4-x^2=0$, donc $x=\\pm 2$. Entre eux, la parabole est au-dessus de l’axe.",
      "$S=\\int_{-2}^{2}(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}=\\left(8-\\frac{8}{3}\\right)-\\left(-8+\\frac{8}{3}\\right)$.",
      "<strong>$S=16-\\frac{16}{3}=\\frac{32}{3}$</strong>"
     ]
    },
    {
     "task": "Calcule $\\int_0^{1} (2x+1)^2\\,dx$ à l’aide d’un changement de variable.",
     "steps": [
      "Primitive : $F(x)=\\frac{1}{2}\\cdot\\frac{(2x+1)^3}{3}=\\frac{(2x+1)^3}{6}$.",
      "$F(1)-F(0)=\\frac{27}{6}-\\frac{1}{6}=\\frac{26}{6}=\\frac{13}{3}$.",
      "Vérification en développant : $\\int_0^1(4x^2+4x+1)\\,dx=\\frac{4}{3}+2+1=\\frac{13}{3}$ ✓"
     ]
    }
   ]
  },
  "s4-zlozene-inverzne": {
   "title": "Fonctions composées et fonctions réciproques",
   "summary": "Composition de fonctions, fonction injective, calcul de la fonction réciproque et symétrie des courbes par rapport à la droite y = x.",
   "theory": [
    "<p>La <strong>fonction composée</strong> $f\\circ g$ est définie par $(f\\circ g)(x)=f(g(x))$ : on applique d’abord $g$ (la fonction intérieure), puis $f$ (la fonction extérieure) au résultat.\n       L’ordre compte : en général $f\\circ g\\neq g\\circ f$. Par exemple, pour $f(x)=x^2$, $g(x)=x+1$, on a $f(g(x))=(x+1)^2$, mais $g(f(x))=x^2+1$.</p>",
    "<p>Une fonction est <strong>injective</strong> si elle associe des valeurs différentes à des $x$ différents (toute droite horizontale coupe la courbe au plus une fois). Seule une fonction injective possède une\n       <strong>fonction réciproque</strong> $f^{-1}$, pour laquelle $f^{-1}(y)=x \\Leftrightarrow f(x)=y$. On a alors $D(f^{-1})=H(f)$ et $H(f^{-1})=D(f)$.</p>",
    "<p><strong>Méthode de calcul</strong> de $f^{-1}$ : dans l’équation $y=f(x)$, on échange $x$ et $y$ et on exprime $y$. Pour $f(x)=2x-6$ : $x=2y-6$, donc $f^{-1}(x)=\\frac{x+6}{2}$.\n       Les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la droite $y=x$. Les fonctions $a^x$ et $\\log_a x$ sont aussi réciproques l’une de l’autre, donc $a^{\\log_a x}=x$ et $\\log_a a^x=x$.</p>",
    {
     "fig": "s4-inverzna",
     "caption": "Courbe de $y=a^x$ (en bleu) et courbe de la fonction réciproque $y=\\log_a x$ (en vert). Chaque point $[u; v]$ d’une courbe a pour image $[v; u]$ sur l’autre."
    }
   ],
   "examples": [
    {
     "task": "On donne $f(x)=x^2-1$ et $g(x)=3x+2$. Calcule $(f\\circ g)(1)$ et $(g\\circ f)(1)$.",
     "steps": [
      "$(f\\circ g)(1)=f(g(1))=f(5)=25-1=24$.",
      "$(g\\circ f)(1)=g(f(1))=g(0)=2$.",
      "Les résultats diffèrent — la composition de fonctions n’est pas commutative."
     ]
    },
    {
     "task": "Trouve la fonction réciproque de $f(x)=\\frac{x+1}{x-2}$, $x\\neq 2$.",
     "steps": [
      "On échange les variables : $x=\\frac{y+1}{y-2}$.",
      "$x(y-2)=y+1 \\Rightarrow xy-y=2x+1 \\Rightarrow y(x-1)=2x+1$.",
      "<strong>$f^{-1}(x)=\\frac{2x+1}{x-1}$, $x\\neq 1$</strong> (la fonction $f$ ne prend pas la valeur $1$)."
     ]
    }
   ]
  },
  "s4-exp-log-rovnice": {
   "title": "Équations exponentielles et logarithmiques",
   "summary": "Changement de variable, équations à bases différentes, passage au logarithme et conditions d’existence.",
   "theory": [
    "<p><strong>Types de base d’équations exponentielles :</strong></p>\n       <ul><li>même base : $a^{f(x)}=a^{g(x)} \\Leftrightarrow f(x)=g(x)$ (pour $a&gt;0$, $a\\neq 1$),</li>\n       <li><strong>changement de variable</strong> : on réécrit $4^x-6\\cdot 2^x+8=0$ avec $t=2^x&gt;0$ sous la forme $t^2-6t+8=0$,</li>\n       <li><strong>bases différentes</strong> : on passe au logarithme dans les deux membres, par ex. $3^x=5 \\Rightarrow x=\\frac{\\ln 5}{\\ln 3}$ ; on transforme l’équation $c\\cdot a^x=d\\cdot b^x$ en $\\left(\\frac{a}{b}\\right)^x=\\frac{d}{c}$.</li></ul>",
    "<p><strong>Équations logarithmiques :</strong> on détermine d’abord les conditions (l’argument du logarithme doit être strictement positif), puis on utilise les règles\n       $\\log_a u+\\log_a v=\\log_a(uv)$, $\\log_a u-\\log_a v=\\log_a\\frac{u}{v}$, $k\\log_a u=\\log_a u^k$ ; de l’égalité $\\log_a u=c$, on tire $u=a^c$.\n       On vérifie chaque solution en remplaçant ou en la comparant aux conditions — les transformations peuvent faire apparaître de fausses racines.</p>",
    "<p>Une équation contenant $\\log_a x$ à différentes puissances se résout par le changement de variable $t=\\log_a x$ : de $(\\log x)^2-3\\log x+2=0$, on obtient $t\\in\\{1; 2\\}$, donc $x\\in\\{10; 100\\}$.\n       Attention : $(\\log x)^2$ n’est pas la même chose que $\\log x^2=2\\log x$.</p>"
   ],
   "examples": [
    {
     "task": "Résous l’équation $9^x-4\\cdot 3^x+3=0$.",
     "steps": [
      "$9^x=(3^x)^2$, changement de variable $t=3^x&gt;0$ : $t^2-4t+3=0$, donc $t_1=1$, $t_2=3$.",
      "$3^x=1 \\Rightarrow x=0$ ; $3^x=3 \\Rightarrow x=1$.",
      "<strong>$S=\\{0; 1\\}$</strong>"
     ]
    },
    {
     "task": "Résous l’équation $\\log_3(x+1)+\\log_3(x-1)=1$.",
     "steps": [
      "Conditions : $x+1&gt;0$ et $x-1&gt;0$, donc $x&gt;1$.",
      "$\\log_3\\big((x+1)(x-1)\\big)=1 \\Rightarrow x^2-1=3 \\Rightarrow x=\\pm 2$.",
      "Seul $x=2$ vérifie la condition ; on écarte la racine $-2$.",
      "<strong>$S=\\{2\\}$</strong>"
     ]
    }
   ]
  },
  "s4-gonio-rovnice": {
   "title": "Équations trigonométriques",
   "summary": "Équations du second degré en sinus ou en cosinus, utilisation des formules et solution générale.",
   "theory": [
    "<p>Les <strong>équations de base</strong> $\\sin x=a$, $\\cos x=a$ n’ont de solution que pour $a\\in\\langle -1; 1\\rangle$, et en général deux solutions sur chaque période $2\\pi$.\n       Par exemple, $\\sin x=\\frac{1}{2}$ a dans $\\langle 0; 2\\pi)$ les solutions $\\frac{\\pi}{6}$ et $\\frac{5\\pi}{6}$, et en général $x=\\frac{\\pi}{6}+2k\\pi$ ou $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.\n       L’équation $\\tan x=a$ a une solution pour tout $a$ et sa période est $\\pi$ : $x=x_0+k\\pi$.</p>",
    "<p>On résout les <strong>équations du second degré</strong> en $\\sin x$ ou $\\cos x$ par changement de variable : $2\\sin^2 x-3\\sin x+1=0$ avec $t=\\sin x$ donne $2t^2-3t+1=0$, donc $t\\in\\{\\frac{1}{2}; 1\\}$.\n       On écarte les racines hors de $\\langle -1; 1\\rangle$.</p>",
    "<p><strong>Formules utiles :</strong> $\\sin^2 x+\\cos^2 x=1$ (pour se ramener à une seule fonction), $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x=1-2\\sin^2 x$.\n       On <strong>met le facteur commun en facteur</strong>, on ne divise jamais par lui — on perdrait les solutions pour lesquelles il est nul.</p>\n       <table class=\"tbl tbl-auto\"><tr><th>$x$</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th></tr>\n       <tr><td>$\\sin x$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$1$</td></tr>\n       <tr><td>$\\cos x$</td><td>$1$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr></table>"
   ],
   "examples": [
    {
     "task": "Résous l’équation $2\\cos^2 x+3\\sin x-3=0$ pour $x\\in\\langle 0; 2\\pi)$.",
     "steps": [
      "$\\cos^2 x=1-\\sin^2 x$ : $2-2\\sin^2 x+3\\sin x-3=0$, donc $2\\sin^2 x-3\\sin x+1=0$.",
      "Changement de variable $t=\\sin x$ : $2t^2-3t+1=0$, $t_1=1$, $t_2=\\frac{1}{2}$.",
      "$\\sin x=1 \\Rightarrow x=\\frac{\\pi}{2}$ ; $\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}$ ou $x=\\frac{5\\pi}{6}$.",
      "<strong>$S=\\left\\{\\frac{\\pi}{6}; \\frac{\\pi}{2}; \\frac{5\\pi}{6}\\right\\}$</strong>"
     ]
    },
    {
     "task": "Résous l’équation $\\sin 2x=\\cos x$ dans $\\mathbb{R}$.",
     "steps": [
      "$2\\sin x\\cos x-\\cos x=0 \\Rightarrow \\cos x\\,(2\\sin x-1)=0$.",
      "$\\cos x=0 \\Rightarrow x=\\frac{\\pi}{2}+k\\pi$.",
      "$\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}+2k\\pi$ ou $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$."
     ]
    }
   ]
  },
  "s4-sustavy": {
   "title": "Systèmes d’équations et d’inéquations",
   "summary": "Systèmes non linéaires, intersections de courbes et systèmes d’inéquations à une et à deux inconnues.",
   "theory": [
    "<p>On résout un <strong>système non linéaire</strong> le plus souvent par la <strong>méthode de substitution</strong> : à partir de l’équation la plus simple (linéaire), on exprime une inconnue et on la remplace dans l’autre.\n       Les solutions sont des couples $[x; y]$ ; leur nombre correspond au nombre de points d’intersection des courbes des deux équations. Le système $x+y=s$, $xy=p$ conduit, d’après les relations de Viète, à l’équation $t^2-st+p=0$.</p>",
    "<p><strong>Système d’inéquations à une inconnue :</strong> on résout chaque inéquation séparément ; le résultat est l’<strong>intersection</strong> des ensembles de solutions.\n       Quand on multiplie ou divise par un nombre négatif, le sens de l’inégalité change.</p>",
    "<p>Un <strong>système d’inéquations linéaires à deux inconnues</strong> décrit une partie du plan : chaque inéquation $y\\le kx+q$ est le demi-plan situé sous la droite $y=kx+q$ (droite comprise).\n       La solution du système est l’intersection des demi-plans — souvent un polygone.</p>",
    {
     "fig": "s4-oblast",
     "caption": "Le système $y\\ge 0$, $y\\le x+2$, $y\\le -x+4$ décrit un triangle de sommets $[-2; 0]$, $[4; 0]$ et $[1; 3]$. Son aire est $\\frac{6\\cdot 3}{2}=9$."
    }
   ],
   "examples": [
    {
     "task": "Résous le système $x+y=7$, $x\\cdot y=10$.",
     "steps": [
      "De la première équation, $y=7-x$ ; on remplace : $x(7-x)=10 \\Rightarrow x^2-7x+10=0$.",
      "$x_1=2$, $x_2=5$, et donc $y_1=5$, $y_2=2$.",
      "<strong>Solutions : $[2; 5]$ et $[5; 2]$</strong>"
     ]
    },
    {
     "task": "Résous dans $\\mathbb{R}$ le système d’inéquations $3x-2&gt;4$ et $5-x\\ge -1$.",
     "steps": [
      "$3x&gt;6 \\Rightarrow x&gt;2$.",
      "$-x\\ge -6 \\Rightarrow x\\le 6$ (la division par un nombre négatif change le sens de l’inégalité).",
      "<strong>$S=(2; 6\\rangle$</strong>, les entiers qu’il contient sont $3, 4, 5, 6$."
     ]
    }
   ]
  },
  "s4-parametre": {
   "title": "Équations et systèmes à paramètre",
   "summary": "Discussion du nombre de solutions selon le paramètre, équations du second degré et systèmes à paramètre.",
   "theory": [
    "<p>Un <strong>paramètre</strong> est une lettre qui, dans une équation, représente un nombre fixé mais quelconque. On résout l’équation pour toutes ses valeurs à la fois\n       et on fait une <strong>discussion</strong> : pour quelles valeurs du paramètre l’équation a-t-elle une, plusieurs ou aucune solution.\n       Par exemple, $px=3$ a pour $p\\neq 0$ une unique solution $x=\\frac{3}{p}$, et pour $p=0$ aucune solution.</p>",
    "<p>Une <strong>équation du second degré</strong> $ax^2+bx+c=0$ avec $a\\neq 0$ a deux racines réelles distinctes pour $D&gt;0$, une racine double pour $D=0$ et aucune racine réelle pour $D&lt;0$.\n       Si l’on connaît une racine, on la remplace et on obtient une équation d’inconnue le paramètre ; on calcule ensuite facilement l’autre racine grâce aux relations de Viète $x_1+x_2=-\\frac{b}{a}$, $x_1x_2=\\frac{c}{a}$.\n       Si le coefficient de $x^2$ contient le paramètre, il faut étudier séparément le cas $a=0$ (l’équation est alors du premier degré).</p>",
    "<p>Un <strong>système de deux équations linéaires</strong> $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$ a exactement une solution lorsque $a_1b_2-a_2b_1\\neq 0$ (les droites sont sécantes).\n       Si $a_1b_2-a_2b_1=0$, les droites sont parallèles : soit distinctes (aucune solution), soit confondues (une infinité de solutions).</p>"
   ],
   "examples": [
    {
     "task": "Pour quelles valeurs du paramètre $p$ l’équation $x^2-4x+p=0$ a-t-elle deux racines réelles distinctes ?",
     "steps": [
      "$D=16-4p$.",
      "$D&gt;0 \\Leftrightarrow 16-4p&gt;0 \\Leftrightarrow p&lt;4$.",
      "<strong>Pour $p\\in(-\\infty; 4)$</strong> ; pour $p=4$, elle a la racine double $2$ ; pour $p&gt;4$, elle n’a pas de racine réelle."
     ]
    },
    {
     "task": "Pour quels $m$ le système $mx+2y=4$, $2x+my=-4$ n’a-t-il pas de solution ?",
     "steps": [
      "Le déterminant $m\\cdot m-2\\cdot 2=m^2-4$ est nul pour $m=\\pm 2$ ; sinon, le système a une unique solution.",
      "$m=2$ : $2x+2y=4$ et $2x+2y=-4$ sont des droites parallèles distinctes — aucune solution.",
      "$m=-2$ : $-2x+2y=4$ et $2x-2y=-4$ sont la même droite — une infinité de solutions.",
      "<strong>Le système n’a pas de solution pour $m=2$.</strong>"
     ]
    }
   ]
  },
  "s4-priamka-kruznica": {
   "title": "Droite et cercle en géométrie analytique",
   "summary": "Position relative d’une droite et d’un cercle, points d’intersection et tangente à un cercle.",
   "theory": [
    "<p>Le cercle de centre $S[m; n]$ et de rayon $r$ a pour équation $(x-m)^2+(y-n)^2=r^2$. Une droite du plan a une équation cartésienne $ax+by+c=0$,\n       où $\\vec{n}=(a; b)$ est un vecteur normal. La distance du point $S[m; n]$ à la droite est $d=\\dfrac{|am+bn+c|}{\\sqrt{a^2+b^2}}$.</p>",
    "<p><strong>Position relative :</strong> si $d&lt;r$, la droite est <strong>sécante</strong> (2 points communs) ; si $d=r$, elle est <strong>tangente</strong> (1 point) ; si $d&gt;r$, elle est <strong>extérieure</strong>.\n       On obtient la même chose algébriquement : en remplaçant la droite dans l’équation du cercle, on obtient une équation du second degré dont le discriminant donne le nombre de points d’intersection.</p>",
    {
     "fig": "s4-priamka-kruznica",
     "caption": "Cercle $x^2+y^2=9$ et droite $y=-0{,}75x+q$. Fais varier $q$ : la droite est tangente exactement pour $q=\\pm 3{,}75$, lorsque la distance du centre est égale au rayon."
    },
    "<p>La <strong>tangente en un point</strong> $T$ du cercle est perpendiculaire au rayon $ST$ ; le vecteur $\\vec{ST}$ en est donc un vecteur normal.\n       Pour le cercle $x^2+y^2=r^2$ et un point $T[x_0; y_0]$ de ce cercle, la tangente a pour équation $x_0x+y_0y=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Trouve les points d’intersection du cercle $x^2+y^2=25$ et de la droite $x-y+1=0$.",
     "steps": [
      "De l’équation de la droite, $y=x+1$ ; on remplace : $x^2+(x+1)^2=25 \\Rightarrow 2x^2+2x-24=0 \\Rightarrow x^2+x-12=0$.",
      "$x_1=3$, $x_2=-4$, et donc $y_1=4$, $y_2=-3$.",
      "<strong>Points d’intersection : $[3; 4]$ et $[-4; -3]$</strong>"
     ]
    },
    {
     "task": "Écris l’équation de la tangente au cercle $(x-1)^2+(y+2)^2=25$ au point $T[4; 2]$.",
     "steps": [
      "Centre $S[1; -2]$, $\\vec{ST}=(3; 4)$ est un vecteur normal de la tangente : $3x+4y+c=0$.",
      "On remplace par $T$ : $12+8+c=0$, donc $c=-20$.",
      "<strong>Tangente : $3x+4y-20=0$</strong>"
     ]
    }
   ]
  },
  "s4-polohy": {
   "title": "Positions relatives de points, de droites et de plans",
   "summary": "Droites parallèles, sécantes et non coplanaires, position d’une droite et d’un plan, de deux plans, et leur description analytique.",
   "theory": [
    "<p><strong>Deux droites de l’espace</strong> sont soit <strong>confondues</strong>, soit <strong>parallèles</strong> (dans un même plan et sans point commun),\n       soit <strong>sécantes</strong> (exactement un point commun), soit <strong>non coplanaires</strong> — elles n’ont pas de point commun et ne sont pas dans un même plan.\n       Dans le plan, il n’existe pas de droites non coplanaires ; dans l’espace, elles sont courantes.</p>",
    {
     "fig": "s4-kocka",
     "caption": "Cube $ABCDEFGH$. Les droites $AB$ (en bleu) et $CG$ (en vert) sont non coplanaires, de même que les droites $AB$ et $EG$ (en orange). Les droites $CG$ et $EG$ sont sécantes, elles se coupent au point $G$."
    },
    "<p><strong>Droite et plan :</strong> une droite est soit contenue dans le plan, soit parallèle à celui-ci (aucun point commun), soit sécante (un point commun — le point d’intersection).\n       Une droite est parallèle à un plan si elle est parallèle à une droite de ce plan. <strong>Deux plans</strong> sont confondus, strictement parallèles ou sécants — ils se coupent alors selon une droite.</p>",
    "<p><strong>Analytiquement :</strong> une droite a une représentation paramétrique $X=A+t\\vec{u}$, $t\\in\\mathbb{R}$ ; un plan une équation cartésienne $ax+by+cz+d=0$ de vecteur normal $\\vec{n}=(a; b; c)$.\n       Des droites dont les vecteurs directeurs sont colinéaires sont parallèles ou confondues. Une droite est parallèle au plan ou contenue dans celui-ci si $\\vec{u}\\cdot\\vec{n}=0$.\n       Pour les calculs dans un cube d’arête $1$, on choisit $A[0; 0; 0]$, $B[1; 0; 0]$, $D[0; 1; 0]$, $E[0; 0; 1]$.</p>"
   ],
   "examples": [
    {
     "task": "Dans le cube $ABCDEFGH$, détermine la position relative des droites $BG$ et $AH$.",
     "steps": [
      "$\\vec{BG}=G-B=(0; 1; 1)$ et $\\vec{AH}=H-A=(0; 1; 1)$ — les vecteurs directeurs sont égaux.",
      "Le point $A$ n’est pas sur la droite $BG$, les droites ne sont donc pas confondues.",
      "<strong>Les droites $BG$ et $AH$ sont parallèles</strong> (elles sont dans le plan $ABGH$)."
     ]
    },
    {
     "task": "Détermine si le point $Q[5; 1; -2]$ appartient à la droite $p: X=[1; 3; 0]+t\\,(2; -1; -1)$.",
     "steps": [
      "D’après la première coordonnée : $1+2t=5$, donc $t=2$.",
      "Pour $t=2$ : $y=3-2=1$ ✓, $z=0-2=-2$ ✓.",
      "<strong>Le point $Q$ appartient à la droite</strong> (paramètre $t=2$)."
     ]
    }
   ]
  },
  "s4-uhly-vzdialenosti": {
   "title": "Angles et distances dans l’espace",
   "summary": "Distance entre deux points, d’un point à une droite et à un plan, angle de deux droites et angle d’une droite avec un plan — en particulier dans le cube.",
   "theory": [
    "<p><strong>Distances :</strong> la distance entre deux points est $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2+(b_3-a_3)^2}$. La distance d’un point à une droite est la longueur de la perpendiculaire à la droite ;\n       la distance du point $P$ au plan $ax+by+cz+d=0$ est $\\dfrac{|ap_1+bp_2+cp_3+d|}{\\sqrt{a^2+b^2+c^2}}$.\n       Dans un cube d’arête $a$ : diagonale d’une face $a\\sqrt2$, grande diagonale $a\\sqrt3$.</p>",
    "<p>L’<strong>angle de deux droites</strong> (même non coplanaires) est l’angle de leurs vecteurs directeurs, pris dans $\\langle 0^\\circ; 90^\\circ\\rangle$ :\n       $\\cos\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}$. L’<strong>angle d’une droite avec un plan</strong> est l’angle entre la droite et son projeté orthogonal sur le plan ;\n       avec un vecteur normal $\\vec{n}$, on a $\\sin\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}$.</p>",
    {
     "fig": "s4-kocka-uhol",
     "caption": "L’angle de la grande diagonale $AG$ avec le plan de base est l’angle entre $AG$ et son projeté $AC$. Dans le triangle rectangle $ACG$ : $\\tan\\varphi=\\frac{a}{a\\sqrt2}$, donc $\\varphi\\approx 35{,}26^\\circ$."
    },
    "<p>Le <strong>produit vectoriel</strong> $\\vec{u}\\times\\vec{v}=(u_2v_3-u_3v_2;\\ u_3v_1-u_1v_3;\\ u_1v_2-u_2v_1)$ est orthogonal aux deux vecteurs et sa norme est l’aire du parallélogramme qu’ils engendrent.\n       Par conséquent, la distance du point $P$ à la droite $X=Q+t\\vec{u}$ est $\\dfrac{|\\vec{QP}\\times\\vec{u}|}{|\\vec{u}|}$ et un vecteur normal du plan $QRS$ est $\\vec{QR}\\times\\vec{QS}$.</p>"
   ],
   "examples": [
    {
     "task": "Le cube $ABCDEFGH$ a pour arête $a=6\\,\\text{cm}$. Calcule la distance du sommet $A$ au milieu $K$ de l’arête $GH$.",
     "steps": [
      "$A[0; 0; 0]$, $G[6; 6; 6]$, $H[0; 6; 6]$, donc $K[3; 6; 6]$.",
      "$|AK|=\\sqrt{3^2+6^2+6^2}=\\sqrt{81}=9$.",
      "<strong>$|AK|=9\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Calcule la distance du sommet $A$ au plan $BDE$ dans un cube d’arête $a$.",
     "steps": [
      "$B[a; 0; 0]$, $D[0; a; 0]$, $E[0; 0; a]$ appartiennent au plan $x+y+z-a=0$.",
      "$d=\\dfrac{|0+0+0-a|}{\\sqrt{1+1+1}}=\\dfrac{a}{\\sqrt3}=\\dfrac{a\\sqrt3}{3}$.",
      "C’est le tiers de la grande diagonale $AG$."
     ]
    }
   ]
  },
  "s4-telesa": {
   "title": "Prisme, pyramide, cylindre, cône et boule",
   "summary": "Propriétés des solides, triangles rectangles à l’intérieur des solides, aire totale et volume, section d’une boule.",
   "theory": [
    "<p>Le <strong>prisme</strong> et le <strong>cylindre</strong> ont deux bases parallèles superposables : $V=S_p\\cdot v$, $S=2S_p+S_{pl}$. Cylindre : $V=\\pi r^2v$, $S=2\\pi r^2+2\\pi rv$.\n       La <strong>pyramide</strong> et le <strong>cône</strong> ont une base et un sommet : $V=\\frac{1}{3}S_p\\cdot v$. Cône de génératrice $s$ : $V=\\frac{1}{3}\\pi r^2 v$, $S=\\pi r^2+\\pi rs$, où $s^2=r^2+v^2$.\n       <strong>Boule</strong> : $V=\\frac{4}{3}\\pi r^3$, $S=4\\pi r^2$.</p>",
    {
     "fig": "s4-ihlan",
     "caption": "Pyramide régulière à base carrée : la hauteur $v$, l’apothème $v_s$ et la moitié de l’arête $\\frac{a}{2}$ forment un triangle rectangle : $v_s^2=v^2+\\left(\\frac{a}{2}\\right)^2$. Pour l’arête latérale $h$, on a $h^2=v_s^2+\\left(\\frac{a}{2}\\right)^2$."
    },
    "<p>Une <strong>pyramide régulière à base carrée</strong> d’arête de base $a$ a $S=a^2+4\\cdot\\frac{a\\cdot v_s}{2}=a^2+2av_s$ et $V=\\frac{1}{3}a^2v$.\n       La clé de la plupart des problèmes est le bon triangle rectangle — par exemple la hauteur, la moitié de la diagonale de la base et l’arête latérale : $h^2=v^2+\\left(\\frac{a\\sqrt2}{2}\\right)^2$.</p>",
    "<p>La <strong>section d’une boule</strong> par un plan situé à la distance $d$ du centre est un disque de rayon $\\rho=\\sqrt{r^2-d^2}$. Un <strong>prisme régulier à base triangulaire</strong> a pour base\n       un triangle équilatéral d’aire $\\frac{\\sqrt3}{4}a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Une pyramide régulière à base carrée a une arête de base $a=10\\,\\text{cm}$ et une hauteur $v=12\\,\\text{cm}$. Calcule son aire totale et son volume.",
     "steps": [
      "Apothème : $v_s=\\sqrt{12^2+5^2}=\\sqrt{169}=13\\,\\text{cm}$.",
      "$S=a^2+2av_s=100+2\\cdot 10\\cdot 13=360\\,\\text{cm}^2$.",
      "$V=\\frac{1}{3}\\cdot 100\\cdot 12=400\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Une boule de rayon $r=10\\,\\text{cm}$ est coupée par un plan situé à $6\\,\\text{cm}$ du centre. Quelle est l’aire de la section ?",
     "steps": [
      "$\\rho=\\sqrt{10^2-6^2}=\\sqrt{64}=8\\,\\text{cm}$.",
      "$S=\\pi\\rho^2=64\\pi\\approx 201{,}06\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "s4-povrch-objem": {
   "title": "Aire et volume de solides plus complexes",
   "summary": "Tronc de cône et tronc de pyramide, solides composés, solides semblables et problèmes pratiques.",
   "theory": [
    "<p><strong>Tronc de cône</strong> de rayons de base $R$, $r$, de hauteur $v$ et de génératrice $s$ : $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$, surface latérale $S_{pl}=\\pi s(R+r)$,\n       aire totale $S=\\pi R^2+\\pi r^2+\\pi s(R+r)$. On trouve la génératrice à partir de la section axiale en forme de trapèze : $s^2=v^2+(R-r)^2$.</p>",
    {
     "fig": "s4-zrezany",
     "caption": "On obtient un tronc de cône en coupant la partie supérieure d’un cône par un plan parallèle à la base. La hauteur $v$, la différence des rayons $R-r$ et la génératrice $s$ forment un triangle rectangle."
    },
    "<p>Un <strong>tronc de pyramide</strong> de bases d’aires $S_1$, $S_2$ et de hauteur $v$ a pour volume $V=\\frac{v}{3}\\left(S_1+\\sqrt{S_1S_2}+S_2\\right)$ ;\n       pour un tronc de pyramide régulière à base carrée d’arêtes $a_1$, $a_2$, on a $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.\n       On décompose un <strong>solide composé</strong> en solides connus et on additionne les volumes (on soustrait les cavités). Attention pour l’aire : les faces de contact ne font pas partie de l’aire totale.</p>",
    "<p>Des <strong>solides semblables</strong> de rapport de similitude $k$ ont des aires dans le rapport $k^2$ et des volumes dans le rapport $k^3$. Si l’on double toutes les dimensions,\n       l’aire est multipliée par 4 et le volume par 8. Lors d’une refonte, le volume se conserve.</p>"
   ],
   "examples": [
    {
     "task": "Un seau a la forme d’un tronc de cône de rayons $R=15\\,\\text{cm}$, $r=10\\,\\text{cm}$ et de hauteur $v=30\\,\\text{cm}$. Combien de litres peut-il contenir ?",
     "steps": [
      "$V=\\frac{\\pi\\cdot 30}{3}(225+150+100)=10\\pi\\cdot 475=4750\\pi\\,\\text{cm}^3$.",
      "$V\\approx 14\\,923\\,\\text{cm}^3\\approx 14{,}9\\,\\ell$."
     ]
    },
    {
     "task": "Un silo a la forme d’un cylindre de rayon $3\\,\\text{m}$ et de hauteur $8\\,\\text{m}$, surmonté d’une demi-boule de même rayon. Calcule le volume du silo.",
     "steps": [
      "Cylindre : $\\pi\\cdot 9\\cdot 8=72\\pi$.",
      "Demi-boule : $\\frac{1}{2}\\cdot\\frac{4}{3}\\pi\\cdot 27=18\\pi$.",
      "<strong>$V=90\\pi\\approx 282{,}74\\,\\text{m}^3$</strong>"
     ]
    }
   ]
  },
  "s4-statisticky-subor": {
   "title": "Série statistique, caractères, tableaux et graphiques",
   "summary": "Population et caractère, effectif et fréquence, tableau de répartition des effectifs, graphiques et leur lecture.",
   "theory": [
    "<p>Une <strong>population statistique</strong> est l’ensemble des objets étudiés (les individus) ; leur nombre $n$ est l’<strong>effectif total</strong>.\n       La propriété observée est le <strong>caractère statistique</strong> : <strong>qualitatif</strong> (exprimé par des mots — couleur, marque, filière) ou <strong>quantitatif</strong> (numérique).\n       Un caractère quantitatif est <strong>discret</strong> s’il ne prend que des valeurs isolées (nombre de frères et sœurs), ou <strong>continu</strong> s’il peut prendre n’importe quelle valeur d’un intervalle (taille, temps).</p>",
    "<p>L’<strong>effectif</strong> $n_i$ d’une valeur est le nombre d’individus ayant cette valeur, la <strong>fréquence</strong> est $f_i=\\frac{n_i}{n}$ (souvent en pourcentage).\n       La somme de tous les $n_i$ est $n$, celle des $f_i$ est $1$. On note les données dans un <strong>tableau de répartition des effectifs</strong>.</p>",
    {
     "fig": "s4-stlpcovy",
     "caption": "Diagramme en bâtons des notes d’une classe de $28$ élèves. Par exemple, $9$ élèves ont la note $2$, la fréquence est $\\frac{9}{28}\\approx 32{,}1\\,\\%$."
    },
    "<p><strong>Graphiques :</strong> diagramme en bâtons (effectifs des valeurs), diagramme circulaire (le secteur d’une valeur a pour angle au centre $f_i\\cdot 360^\\circ$), histogramme (pour un caractère continu réparti en classes)\n       et graphique en courbe (évolution dans le temps). Lors de l’<strong>interprétation</strong>, attention à un axe qui ne commence pas à zéro — de petites différences paraissent alors énormes.</p>"
   ],
   "examples": [
    {
     "task": "Un tableau indique le moyen de transport pour aller à l’école : bus 12, voiture 5, vélo 3, à pied 10. Quelle part du diagramme circulaire (angle au centre) occupe le bus ?",
     "steps": [
      "$n=12+5+3+10=30$.",
      "$f=\\frac{12}{30}=0{,}4=40\\,\\%$.",
      "Angle au centre : $0{,}4\\cdot 360^\\circ=144^\\circ$."
     ]
    },
    {
     "task": "D’après le diagramme en bâtons ci-dessus, calcule la note moyenne de la classe.",
     "steps": [
      "$n=6+9+7+4+2=28$.",
      "Somme des notes : $1\\cdot 6+2\\cdot 9+3\\cdot 7+4\\cdot 4+5\\cdot 2=6+18+21+16+10=71$.",
      "$\\bar{x}=\\frac{71}{28}\\approx 2{,}54$"
     ]
    }
   ]
  },
  "s4-charakteristiky": {
   "title": "Moyenne, médiane, mode et variance",
   "summary": "Indicateurs de position et de dispersion : moyenne, médiane, mode, quartiles, variance et écart type.",
   "theory": [
    "<p><strong>Indicateurs de position :</strong> moyenne arithmétique $\\bar{x}=\\frac{x_1+x_2+\\dots+x_n}{n}$ (à partir d’un tableau, pondérée : $\\bar{x}=\\frac{\\sum n_ix_i}{n}$),\n       <strong>médiane</strong> — la valeur centrale de la série ordonnée (pour $n$ pair, la moyenne des deux valeurs centrales) et <strong>mode</strong> — la valeur la plus fréquente.\n       Contrairement à la moyenne, la médiane n’est pas influencée par les valeurs extrêmes (par ex. un salaire très élevé).</p>",
    "<p><strong>Indicateurs de dispersion :</strong> étendue $R=x_{\\max}-x_{\\min}$, <strong>variance</strong> $s^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2$\n       (moyenne des carrés des écarts à la moyenne, aussi $s^2=\\overline{x^2}-\\bar{x}^2$) et <strong>écart type</strong> $s=\\sqrt{s^2}$, qui a la même unité que les données.</p>",
    "<p><strong>Quartiles :</strong> le premier quartile $Q_1$ est la médiane de la moitié inférieure des données, le troisième quartile $Q_3$ la médiane de la moitié supérieure.\n       Entre $Q_1$ et $Q_3$ se trouve la moitié centrale des données ; leur différence $Q_3-Q_1$ est l’écart interquartile. Les cinq nombres (min, $Q_1$, médiane, $Q_3$, max) sont représentés par un diagramme en boîte.</p>",
    {
     "fig": "s4-krabica",
     "caption": "Diagramme en boîte de la série $2, 4, 5, 5, 6, 7, 7, 8, 9, 10, 14$ : minimum $2$, $Q_1=5$, médiane $7$, $Q_3=9$, maximum $14$."
    }
   ],
   "examples": [
    {
     "task": "Calcule la moyenne, la médiane et le mode de la série $3, 8, 5, 3, 6, 9, 3, 7$.",
     "steps": [
      "On ordonne : $3, 3, 3, 5, 6, 7, 8, 9$ ; $n=8$.",
      "$\\bar{x}=\\frac{44}{8}=5{,}5$.",
      "Médiane $=\\frac{5+6}{2}=5{,}5$, mode $=3$ (il apparaît trois fois)."
     ]
    },
    {
     "task": "Calcule la variance et l’écart type de la série $4, 6, 7, 9, 9$.",
     "steps": [
      "$\\bar{x}=\\frac{35}{5}=7$. Écarts : $-3, -1, 0, 2, 2$.",
      "$s^2=\\frac{9+1+0+4+4}{5}=\\frac{18}{5}=3{,}6$.",
      "$s=\\sqrt{3{,}6}\\approx 1{,}90$."
     ]
    }
   ]
  },
  "s4-kombinatorika": {
   "title": "Problèmes de dénombrement",
   "summary": "Arrangements, permutations et combinaisons, sans et avec répétition, dans des problèmes types.",
   "theory": [
    "<p><strong>Principe multiplicatif :</strong> si l’on choisit le premier objet de $m$ façons et, pour chacun, le deuxième de $n$ façons, il y a $m\\cdot n$ couples.\n       On utilise le <strong>principe additif</strong> quand les possibilités s’excluent mutuellement. Pour les problèmes plus difficiles, on distingue des cas (par ex. selon le dernier chiffre) et on les additionne.</p>",
    "<table class=\"tbl\"><tr><th></th><th>sans répétition</th><th>avec répétition</th></tr>\n       <tr><td>arrangements de $k$ éléments parmi $n$ (l’ordre compte)</td><td>$V_k(n)=\\frac{n!}{(n-k)!}$</td><td>$V'_k(n)=n^k$</td></tr>\n       <tr><td>permutations (on ordonne tous les éléments)</td><td>$P(n)=n!$</td><td>$P'(k_1,\\dots,k_m)=\\frac{n!}{k_1!\\cdots k_m!}$</td></tr>\n       <tr><td>combinaisons de $k$ éléments parmi $n$ (l’ordre ne compte pas)</td><td>$C_k(n)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$</td><td>$C'_k(n)=\\binom{n+k-1}{k}$</td></tr></table>",
    "<p><strong>Comment décider :</strong> l’ordre compte-t-il (code, attribution de fonctions, nombre) ? Si oui, il s’agit d’arrangements ou de permutations ; si non (choix d’un groupe, tirage simultané de boules), de combinaisons.\n       Pour les nombres écrits avec des chiffres, le premier chiffre ne peut pas être zéro. Utile : $\\binom{n}{k}=\\binom{n}{n-k}$, $\\binom{n}{2}=\\frac{n(n-1)}{2}$ (par ex. le nombre de poignées de main entre $n$ personnes).</p>"
   ],
   "examples": [
    {
     "task": "Combien de nombres à trois chiffres distincts peut-on former avec les chiffres $0, 1, 2, 3, 4$ ?",
     "steps": [
      "Le premier chiffre ne peut pas être zéro : $4$ possibilités.",
      "Pour le deuxième, les $4$ chiffres restants (zéro compris), pour le troisième $3$.",
      "<strong>$4\\cdot 4\\cdot 3=48$ nombres</strong>"
     ]
    },
    {
     "task": "Parmi 8 garçons et 6 filles, on choisit un comité de quatre personnes comprenant 2 garçons et 2 filles. Combien y a-t-il de possibilités ?",
     "steps": [
      "On choisit les garçons de $\\binom{8}{2}=28$ façons, les filles de $\\binom{6}{2}=15$ façons.",
      "Les choix sont indépendants, on applique le principe multiplicatif.",
      "<strong>$28\\cdot 15=420$ possibilités</strong>"
     ]
    }
   ]
  },
  "s4-pravdepodobnost": {
   "title": "Probabilité et événements indépendants",
   "summary": "Probabilité classique, événement contraire, réunion d’événements et produit des probabilités d’événements indépendants.",
   "theory": [
    "<p><strong>Définition classique :</strong> si une expérience a $n$ issues équiprobables et que l’événement $A$ se réalise pour $m$ d’entre elles, $P(A)=\\frac{m}{n}$.\n       On a $0\\le P(A)\\le 1$. On détermine souvent $m$ et $n$ par dénombrement ; par ex., lors du tirage simultané de $k$ boules, les issues sont les combinaisons $\\binom{n}{k}$.</p>",
    "<p><strong>Événement contraire</strong> $A'$ (l’événement $A$ ne se réalise pas) : $P(A')=1-P(A)$. On résout notamment les problèmes du type « au moins une fois » par l’événement contraire « jamais ».\n       <strong>Réunion</strong> : $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$ ; pour des événements incompatibles (qui ne peuvent pas se réaliser simultanément), $P(A\\cap B)=0$.</p>",
    "<p>Les événements $A$ et $B$ sont <strong>indépendants</strong> si le résultat de l’un ne modifie pas la probabilité de l’autre ; alors $P(A\\cap B)=P(A)\\cdot P(B)$.\n       Il s’agit typiquement de lancers répétés, de tirs de différents tireurs ou de tirages avec remise. La probabilité que, lors de $n$ épreuves indépendantes de probabilité $p$, l’événement se réalise au moins une fois est $1-(1-p)^n$.</p>"
   ],
   "examples": [
    {
     "task": "Une urne contient 5 boules blanches et 3 noires. On en tire deux simultanément. Quelle est la probabilité que les deux soient blanches ?",
     "steps": [
      "Nombre total de paires : $\\binom{8}{2}=28$, paires favorables : $\\binom{5}{2}=10$.",
      "$P=\\frac{10}{28}=\\frac{5}{14}\\approx 0{,}357$."
     ]
    },
    {
     "task": "Deux tireurs atteignent la cible avec les probabilités $0{,}8$ et $0{,}7$ (indépendamment). Quelle est la probabilité que la cible soit atteinte ?",
     "steps": [
      "Événement contraire : les deux ratent, $P=0{,}2\\cdot 0{,}3=0{,}06$.",
      "<strong>$P=1-0{,}06=0{,}94$</strong>"
     ]
    }
   ]
  },
  "s4-binomicke": {
   "title": "Loi binomiale",
   "summary": "Épreuves indépendantes répétées, probabilité de k succès, espérance et variance.",
   "theory": [
    "<p>On répète $n$ fois, de façon indépendante, une épreuve à deux issues (succès de probabilité $p$, échec de probabilité $1-p$). La variable aléatoire $X$ — le nombre de succès —\n       suit la <strong>loi binomiale</strong> $X\\sim Bi(n; p)$ et $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$ pour $k=0, 1, \\dots, n$.\n       Le coefficient binomial indique de combien de façons les succès peuvent être répartis parmi les $n$ épreuves.</p>",
    "<p>L’<strong>espérance</strong> (nombre moyen de succès attendu) est $E(X)=np$, la <strong>variance</strong> $D(X)=np(1-p)$ et l’écart type $\\sigma=\\sqrt{np(1-p)}$.\n       On calcule « au moins un succès » par l’événement contraire : $P(X\\ge 1)=1-(1-p)^n$, et « au plus $k$ » comme la somme $P(X=0)+\\dots+P(X=k)$.</p>",
    {
     "fig": "s4-binom",
     "caption": "Les barres montrent $P(X=k)$ pour $Bi(n; p)$, la barre verte est la valeur la plus probable. Pour $n$ plus grand, la forme se rapproche de la courbe en cloche de la <strong>loi normale</strong> (en orange) d’espérance $np$ et d’écart type $\\sqrt{np(1-p)}$."
    }
   ],
   "examples": [
    {
     "task": "Un élève répond au hasard à un QCM de 5 questions, chacune ayant 4 propositions (une seule correcte). Quelle est la probabilité qu’il trouve exactement 2 bonnes réponses ?",
     "steps": [
      "$X\\sim Bi(5; \\frac{1}{4})$.",
      "$P(X=2)=\\binom{5}{2}\\left(\\frac{1}{4}\\right)^2\\left(\\frac{3}{4}\\right)^3=10\\cdot\\frac{1}{16}\\cdot\\frac{27}{64}=\\frac{270}{1024}$.",
      "$P\\approx 0{,}2637$"
     ]
    },
    {
     "task": "Un produit est défectueux avec la probabilité $0{,}1$. Combien de produits défectueux attend-on dans une livraison de 50 pièces et quelle est la variance ?",
     "steps": [
      "$E(X)=np=50\\cdot 0{,}1=5$ produits.",
      "$D(X)=np(1-p)=50\\cdot 0{,}1\\cdot 0{,}9=4{,}5$, $\\sigma\\approx 2{,}12$."
     ]
    }
   ]
  },
  "s4-mat-cisla": {
   "title": "Baccalauréat : ensembles de nombres, expressions et équations",
   "summary": "Exercices variés sur les nombres, le calcul littéral et les équations de toutes les années du lycée.",
   "theory": [
    "<p><strong>À savoir — les nombres :</strong> $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$, divisibilité (PGCD, PPCM, nombres premiers), opérations sur les ensembles et $|A\\cup B|=|A|+|B|-|A\\cap B|$,\n         valeur absolue comme distance sur la droite, intervalles, puissances $a^{m}a^{n}=a^{m+n}$, $(a^m)^n=a^{mn}$, $a^{-n}=\\frac{1}{a^n}$, racines $\\sqrt[n]{a}=a^{1/n}$ et rationalisation du dénominateur.</p>",
    "<p><strong>Expressions :</strong> identités $(a\\pm b)^2=a^2\\pm 2ab+b^2$, $a^2-b^2=(a-b)(a+b)$, $a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$, factorisation par mise en facteur et par les identités,\n         simplification des fractions rationnelles — toujours avec les <strong>conditions</strong> (dénominateur $\\neq 0$).</p>",
    "<p><strong>Équations :</strong> du premier degré (transformations équivalentes), du second degré $x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ et relations de Viète, équations avec l’inconnue au dénominateur,\n         sous une racine (élévation au carré et <strong>vérification</strong>), avec valeur absolue (méthode des valeurs d’annulation), exponentielles et logarithmiques ($\\log_a x=c \\Leftrightarrow x=a^c$).</p>"
   ],
   "examples": [
    {
     "task": "Résous l’équation $\\sqrt{x+7}=x+1$.",
     "steps": [
      "Condition $x+1\\ge 0$. On élève au carré : $x+7=x^2+2x+1 \\Rightarrow x^2+x-6=0$.",
      "$x_1=2$, $x_2=-3$.",
      "Vérification : $\\sqrt9=3$ ✓ ; pour $-3$, le membre de droite est négatif ✗. <strong>$S=\\{2\\}$</strong>"
     ]
    },
    {
     "task": "Simplifie $\\dfrac{x^2-9}{x^2+3x}$ et donne les conditions.",
     "steps": [
      "$\\dfrac{(x-3)(x+3)}{x(x+3)}$, conditions $x\\neq 0$, $x\\neq -3$.",
      "<strong>$\\dfrac{x-3}{x}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-nerovnice": {
   "title": "Baccalauréat : inéquations et systèmes d’équations",
   "summary": "Exercices variés sur les inéquations et les systèmes d’équations et d’inéquations.",
   "theory": [
    "<p><strong>Inéquations :</strong> quand on multiplie ou divise par un nombre négatif, le sens de l’inégalité change. On résout une inéquation du second degré à l’aide des racines et de l’allure de la parabole :\n         pour $a&gt;0$, $ax^2+bx+c&lt;0$ entre les racines. On résout les inéquations quotient et produit par la <strong>méthode des valeurs d’annulation</strong> (tableau de signes),\n         les inéquations avec valeur absolue en découpant en intervalles ou grâce à $|x-a|&lt;r \\Leftrightarrow a-r&lt;x&lt;a+r$.</p>",
    "<p><strong>Systèmes d’équations :</strong> méthode de substitution et méthode par combinaison, élimination successive pour trois inconnues. Un système linéaire de deux équations a une, aucune ou\n         une infinité de solutions (droites sécantes, parallèles, confondues). Pour les systèmes non linéaires, on exprime une inconnue à partir de l’équation linéaire et on la remplace.</p>",
    "<p><strong>Erreurs fréquentes :</strong> conditions oubliées, division par une expression contenant l’inconnue (elle peut être négative ou nulle), mauvaise combinaison des résultats — pour un système d’inéquations, on prend l’<strong>intersection</strong>, pour « ou » la réunion.</p>"
   ],
   "examples": [
    {
     "task": "Résous l’inéquation $\\dfrac{x-2}{x+1}\\le 0$.",
     "steps": [
      "Valeurs d’annulation : $2$ (numérateur) et $-1$ (dénominateur, valeur exclue).",
      "Signes : sur $(-\\infty; -1)$ $+$, sur $(-1; 2)$ $-$, sur $(2; \\infty)$ $+$.",
      "<strong>$S=(-1; 2\\rangle$</strong>"
     ]
    },
    {
     "task": "Résous le système $2x+3y=12$, $x-y=1$.",
     "steps": [
      "De la deuxième équation, $x=y+1$ ; on remplace : $2y+2+3y=12 \\Rightarrow y=2$.",
      "$x=3$. <strong>Solution $[3; 2]$</strong>"
     ]
    }
   ]
  },
  "s4-mat-funkcie": {
   "title": "Baccalauréat : fonctions et courbes",
   "summary": "Exercices variés sur les fonctions affines, du second degré, homographiques, exponentielles, logarithmes et leurs propriétés.",
   "theory": [
    "<p><strong>Propriétés d’une fonction :</strong> ensemble de définition et ensemble des valeurs, variations, parité, caractère borné, extremums, injectivité et fonction réciproque (symétrie par rapport à $y=x$).</p>",
    "<p><strong>Panorama des fonctions :</strong> affine $y=kx+q$ ($k$ — coefficient directeur, $q$ — ordonnée à l’origine) ; du second degré $y=a(x-m)^2+n$ de sommet $V[m; n]$ ;\n         homographique $y=\\frac{ax+b}{cx+d}$ (hyperbole avec asymptotes) ; exponentielle $y=a^x$ (croissante pour $a&gt;1$, décroissante pour $0&lt;a&lt;1$, $H=(0; \\infty)$)\n         et logarithme $y=\\log_a x$ ($D=(0; \\infty)$, passe par le point $[1; 0]$) ; fonctions trigonométriques de période $2\\pi$ (tangente : $\\pi$).</p>",
    "<p><strong>Transformations de courbes :</strong> $f(x-a)$ translate la courbe de $a$ vers la droite, $f(x)+b$ de $b$ vers le haut, $-f(x)$ est la symétrie par rapport à l’axe $x$, $|f(x)|$ retourne les parties négatives vers le haut.</p>"
   ],
   "examples": [
    {
     "task": "Détermine le sommet de la parabole $y=x^2-6x+5$ et l’ensemble des valeurs de la fonction.",
     "steps": [
      "Forme canonique : $y=(x-3)^2-4$.",
      "Sommet $V[3; -4]$, la parabole est tournée vers le haut.",
      "<strong>$H(f)=\\langle -4; \\infty)$</strong>"
     ]
    },
    {
     "task": "Détermine l’ensemble de définition de la fonction $f(x)=\\log_2(6-2x)$.",
     "steps": [
      "L’argument du logarithme doit être strictement positif : $6-2x&gt;0$.",
      "<strong>$x&lt;3$, donc $D(f)=(-\\infty; 3)$</strong>"
     ]
    }
   ]
  },
  "s4-mat-geometria": {
   "title": "Baccalauréat : géométrie plane, géométrie dans l’espace et géométrie analytique",
   "summary": "Exercices variés de géométrie plane, de géométrie dans l’espace et de géométrie analytique.",
   "theory": [
    "<p><strong>Géométrie plane :</strong> somme des angles d’un triangle $180^\\circ$, théorème de Pythagore et relations d’Euclide, triangles semblables (cas $CCC$, $CAC$, $AA$),\n         aires ($S=\\frac{a\\cdot v_a}{2}=\\frac{1}{2}ab\\sin\\gamma$, formule de Héron), disque ($S=\\pi r^2$, $o=2\\pi r$, secteur $\\frac{\\alpha}{360^\\circ}\\pi r^2$), angle inscrit et angle au centre.</p>",
    "<p><strong>Géométrie dans l’espace :</strong> volumes $V=S_pv$ (prisme, cylindre), $V=\\frac{1}{3}S_pv$ (pyramide, cône), $V=\\frac{4}{3}\\pi r^3$ (boule) ; aires ; positions relatives de droites et de plans,\n         angles et distances — on cherche toujours un triangle rectangle adapté.</p>",
    "<p><strong>Géométrie analytique :</strong> $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2}$, milieu d’un segment, vecteurs et produit scalaire ($\\vec u\\perp\\vec v \\Leftrightarrow \\vec u\\cdot\\vec v=0$),\n         équations de droite (paramétrique, cartésienne $ax+by+c=0$, réduite $y=kx+q$), distance d’un point à une droite, cercle $(x-m)^2+(y-n)^2=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Trouve l’équation cartésienne de la droite passant par les points $A[1; 2]$ et $B[4; -4]$.",
     "steps": [
      "Vecteur directeur $\\vec{AB}=(3; -6)\\sim(1; -2)$, vecteur normal $(2; 1)$.",
      "$2x+y+c=0$, on remplace par $A$ : $2+2+c=0$, $c=-4$.",
      "<strong>$2x+y-4=0$</strong>"
     ]
    },
    {
     "task": "Un cylindre a un volume de $72\\pi\\,\\text{cm}^3$ et une hauteur de $8\\,\\text{cm}$. Quel est le rayon de sa base ?",
     "steps": [
      "$\\pi r^2\\cdot 8=72\\pi \\Rightarrow r^2=9$.",
      "<strong>$r=3\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-goniometria": {
   "title": "Baccalauréat : trigonométrie",
   "summary": "Exercices variés sur les fonctions trigonométriques, les équations et la résolution de triangles.",
   "theory": [
    "<p><strong>Fonctions trigonométriques :</strong> mesure en radians $180^\\circ=\\pi\\,\\text{rad}$, cercle trigonométrique, signes dans les quadrants, valeurs pour $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$,\n         périodicité, parité ($\\cos$ paire, $\\sin$ et $\\tan$ impaires).</p>",
    "<p><strong>Formules :</strong> $\\sin^2 x+\\cos^2 x=1$, $\\tan x=\\frac{\\sin x}{\\cos x}$, $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x$,\n         $\\sin(\\pi-x)=\\sin x$, $\\cos(\\pi-x)=-\\cos x$. Équations trigonométriques : changement de variable, mise en facteur, solution générale avec $k\\in\\mathbb{Z}$.</p>",
    "<p><strong>Résolution de triangles :</strong> dans le triangle rectangle, définitions de $\\sin$, $\\cos$, $\\tan$ ; dans un triangle quelconque, la <strong>loi des sinus</strong>\n         $\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2r$ et la <strong>loi des cosinus</strong> $c^2=a^2+b^2-2ab\\cos\\gamma$.</p>"
   ],
   "examples": [
    {
     "task": "Un triangle a pour côtés $a=5$, $b=8$ et pour angle $\\gamma=60^\\circ$. Calcule le côté $c$.",
     "steps": [
      "Loi des cosinus : $c^2=25+64-2\\cdot 5\\cdot 8\\cdot\\frac{1}{2}=49$.",
      "<strong>$c=7$</strong>"
     ]
    },
    {
     "task": "Si $\\cos x=-\\frac{3}{5}$ et $x\\in(\\frac{\\pi}{2}; \\pi)$, calcule $\\sin x$ et $\\tan x$.",
     "steps": [
      "$\\sin^2 x=1-\\frac{9}{25}=\\frac{16}{25}$ ; dans le quadrant II, le sinus est positif : $\\sin x=\\frac{4}{5}$.",
      "$\\tan x=\\frac{4/5}{-3/5}=-\\frac{4}{3}$."
     ]
    }
   ]
  },
  "s4-mat-postupnosti": {
   "title": "Baccalauréat : suites, dénombrement et probabilités",
   "summary": "Exercices variés sur les suites, les mathématiques financières, le dénombrement, les probabilités et les statistiques.",
   "theory": [
    "<p><strong>Suites :</strong> arithmétique $a_n=a_1+(n-1)d$, $s_n=\\frac{n}{2}(a_1+a_n)$ ; géométrique $a_n=a_1q^{n-1}$, $s_n=a_1\\frac{q^n-1}{q-1}$ ($q\\neq 1$) ;\n         série géométrique infinie $s=\\frac{a_1}{1-q}$ pour $|q|&lt;1$.</p>",
    "<p><strong>Mathématiques financières :</strong> intérêts composés $K_n=K_0\\left(1+\\frac{p}{100}\\right)^n$ (avec l’impôt sur les intérêts, le taux effectif baisse), épargne régulière et remboursements comme somme d’une suite géométrique,\n         pourcentages et pour mille.</p>",
    "<p><strong>Dénombrement et probabilités :</strong> arrangements, permutations, combinaisons (aussi avec répétition), $P(A)=\\frac{m}{n}$, événement contraire, événements indépendants, loi binomiale.\n         <strong>Statistiques :</strong> moyenne, médiane, mode, variance, écart type, lecture de tableaux et de graphiques.</p>"
   ],
   "examples": [
    {
     "task": "Un placement de $2\\,000\\,€$ rapporte $3\\,\\%$ par an (intérêts composés). Combien y aura-t-il sur le compte au bout de 5 ans ?",
     "steps": [
      "$K_5=2000\\cdot 1{,}03^5$.",
      "$1{,}03^5\\approx 1{,}159274$.",
      "<strong>$K_5\\approx 2\\,318{,}55\\,€$</strong>"
     ]
    },
    {
     "task": "Dans une suite arithmétique, $a_3=7$ et $a_7=19$. Calcule $a_1$ et la somme des 10 premiers termes.",
     "steps": [
      "$a_7-a_3=4d=12 \\Rightarrow d=3$, $a_1=a_3-2d=1$.",
      "$a_{10}=1+9\\cdot 3=28$, $s_{10}=\\frac{10}{2}(1+28)=145$."
     ]
    }
   ]
  },
  "s4-mat-komplex": {
   "title": "Baccalauréat : exercices types et problèmes de synthèse",
   "summary": "Problèmes en plusieurs étapes qui combinent plusieurs thèmes : optimisation, finances, suites, géométrie analytique, probabilités et dérivées.",
   "theory": [
    "<p><strong>Comment aborder un problème de synthèse :</strong></p>\n       <ol><li>Lis l’énoncé deux fois et note ce qui est donné et ce qui est demandé (avec les unités).</li>\n       <li>Fais un schéma ou un tableau ; nomme les inconnues.</li>\n       <li>Découpe le problème en petites étapes — il s’agit souvent d’un enchaînement de méthodes connues (par ex. « écrire la fonction → dériver → trouver le maximum »).</li>\n       <li>Vérifie le résultat : en remplaçant, en estimant l’ordre de grandeur, en contrôlant les conditions (longueur positive, probabilité dans $\\langle 0; 1\\rangle$).</li></ol>",
    "<p><strong>Combinaisons de thèmes fréquentes :</strong> optimisation (géométrie + dérivées), intérêts et épargne (pourcentages + suite géométrique + logarithmes),\n       triangle dans un repère (vecteurs + aire + distance), choix d’un groupe et probabilité (combinaisons + événement contraire), tangente à une courbe (dérivée + équation de droite).</p>",
    "<p><strong>Formules utiles en plus :</strong> aire du triangle $ABC$ à partir des coordonnées $S=\\frac{1}{2}\\left|(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)\\right|$,\n       tangente $y=f(x_0)+f'(x_0)(x-x_0)$, nombre d’années pour un placement $n=\\frac{\\ln(K_n/K_0)}{\\ln(1+p/100)}$.</p>"
   ],
   "examples": [
    {
     "task": "Dans une plaque de tôle carrée de côté $30\\,\\text{cm}$, on découpe aux coins des carrés identiques et on replie les bords pour former une boîte ouverte. Quel est le volume maximal possible ?",
     "steps": [
      "Pour un carré découpé de côté $x$ : $V(x)=x(30-2x)^2$, $x\\in(0; 15)$.",
      "$V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)=0 \\Rightarrow x=5$ (la valeur $15$ n’appartient pas à l’intervalle).",
      "<strong>$V(5)=5\\cdot 20^2=2\\,000\\,\\text{cm}^3$</strong>"
     ]
    },
    {
     "task": "Au bout de combien d’années un placement à $4\\,\\%$ par an double-t-il pour la première fois ?",
     "steps": [
      "On cherche le plus petit $n$ tel que $1{,}04^n\\ge 2$.",
      "$n\\ge\\frac{\\ln 2}{\\ln 1{,}04}\\approx 17{,}67$.",
      "<strong>Au bout de 18 ans.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(-\\infty; {@0}\\rangle$ a $\\langle {@1}; \\infty)$": "$(-\\infty; {@0}\\rangle$ et $\\langle {@1}; \\infty)$",
  "$(-x)^2\\sin(-x)=-x^2\\sin x$, teda $f(-x)=-f(x)$.": "$(-x)^2\\sin(-x)=-x^2\\sin x$, donc $f(-x)=-f(x)$.",
  "$(f\\circ g)({@0})=f(g({@1}))$. Najprv $g({@2})={@3}\\cdot {@4}{@5}={@6}$, potom $f({@7})={@8}{@9}^2{@10}={@11}$.": "$(f\\circ g)({@0})=f(g({@1}))$. D’abord $g({@2})={@3}\\cdot {@4}{@5}={@6}$, puis $f({@7})={@8}{@9}^2{@10}={@11}$.",
  "$(g\\circ f)({@0})=g(f({@1}))$. Najprv $f({@2})={@3}{@4}^2{@5}={@6}$, potom $g({@7})={@8}\\cdot {@9}{@10}={@11}$.": "$(g\\circ f)({@0})=g(f({@1}))$. D’abord $f({@2})={@3}{@4}^2{@5}={@6}$, puis $g({@7})={@8}\\cdot {@9}{@10}={@11}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ pre $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ pour $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ pour $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ pre $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ pour $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ pour $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, teda $k={@5}$.": "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, donc $k={@5}$.",
  "$D={@0}-4c=0 \\Rightarrow c={@1}$. Rovnica je potom $({@2})^2=0$ s dvojnásobným koreňom ${@3}$.": "$D={@0}-4c=0 \\Rightarrow c={@1}$. L’équation est alors $({@2})^2=0$, de racine double ${@3}$.",
  "$D={@0}-4p$. Podmienka {@1} dáva {@2}.": "$D={@0}-4p$. La condition {@1} donne {@2}.",
  "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.": "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.",
  "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.": "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.",
  "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (prvý trafí a druhý nie, alebo naopak).": "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (le premier atteint la cible et le second non, ou l’inverse).",
  "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.": "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.",
  "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.": "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.",
  "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.": "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.",
  "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Odchýlky od priemeru: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.": "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Écarts à la moyenne : ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.",
  "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.": "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.",
  "$\\cos x=\\frac{1}{2}$; v jednej perióde má riešenia $\\frac{\\pi}{3}$ a $-\\frac{\\pi}{3}$, perióda kosínusu je $2\\pi$.": "$\\cos x=\\frac{1}{2}$ ; sur une période, les solutions sont $\\frac{\\pi}{3}$ et $-\\frac{\\pi}{3}$, la période du cosinus est $2\\pi$.",
  "$\\cos(-x)=\\cos x$ a $(-x)^2=x^2$, teda $f(-x)=f(x)$.": "$\\cos(-x)=\\cos x$ et $(-x)^2=x^2$, donc $f(-x)=f(x)$.",
  "$\\mathrm{tg}\\,x=1$ alebo $\\mathrm{tg}\\,x=-1$, teda $x=\\frac{\\pi}{4}+k\\pi$ alebo $x=-\\frac{\\pi}{4}+k\\pi$. Spolu sú to body vzdialené o $\\frac{\\pi}{2}$.": "$\\mathrm{tg}\\,x=1$ ou $\\mathrm{tg}\\,x=-1$, donc $x=\\frac{\\pi}{4}+k\\pi$ ou $x=-\\frac{\\pi}{4}+k\\pi$. Ensemble, ce sont des points espacés de $\\frac{\\pi}{2}$.",
  "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, čo platí pre $\\frac{\\pi}{6}$; perióda tangensu je $\\pi$.": "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, ce qui est vrai pour $\\frac{\\pi}{6}$ ; la période de la tangente est $\\pi$.",
  "$\\sin x=\\frac{\\sqrt2}{2}$; sínus je kladný v I. a II. kvadrante, teda $\\frac{\\pi}{4}$ a $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, perióda $2\\pi$.": "$\\sin x=\\frac{\\sqrt2}{2}$ ; le sinus est positif dans les quadrants I et II, donc $\\frac{\\pi}{4}$ et $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, période $2\\pi$.",
  "$\\sin x=\\pm\\frac{1}{2}$; riešenia $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ sa opakujú s periódou $\\pi$ ako $\\pm\\frac{\\pi}{6}+k\\pi$.": "$\\sin x=\\pm\\frac{1}{2}$ ; les solutions $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ se répètent avec la période $\\pi$ sous la forme $\\pm\\frac{\\pi}{6}+k\\pi$.",
  "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, z $S=\\frac{|AB|\\cdot v_c}{2}$ je $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.": "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, de $S=\\frac{|AB|\\cdot v_c}{2}$, on tire $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.",
  "$f''(x)={@0}$. Nerovnica $f''(x)&gt;0$ dáva ${@1}$, funkcia je konvexná na {@2}.": "$f''(x)={@0}$. L’inéquation $f''(x)&gt;0$ donne ${@1}$, la fonction est convexe sur {@2}.",
  "$f'(x)={@0}$ má korene ${@1}$ a ${@2}$. {@3} Porovnáme hodnoty: {@4}. {@5} z nich je ${@6}$.": "$f'(x)={@0}$ a pour racines ${@1}$ et ${@2}$. {@3} On compare les valeurs : {@4}. {@5} d’entre elles est ${@6}$.",
  "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ pre $x={@2}$ a druhá derivácia tam mení znamienko. $f({@3})={@4}$, inflexný bod je $[{@5}; {@6}]$.": "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ pour $x={@2}$ et la dérivée seconde y change de signe. $f({@3})={@4}$, le point d’inflexion est $[{@5}; {@6}]$.",
  "$f'(x)={@0}$.": "$f'(x)={@0}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$, stacionárne body sú ${@4}$ a ${@5}$. Derivácia má znamienka {@6} na intervaloch $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} je preto v bode $x={@12}$ a $f({@13})={@14}$.": "$f'(x)={@0}={@1}{@2}{@3}$, les points critiques sont ${@4}$ et ${@5}$. La dérivée a les signes {@6} sur les intervalles $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} est donc atteint en $x={@12}$ et $f({@13})={@14}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$. Derivácia je {@4} medzi koreňmi ${@5}$ a ${@6}$ a {@7} mimo nich. Funkcia je {@8} na {@9}.": "$f'(x)={@0}={@1}{@2}{@3}$. La dérivée est {@4} entre les racines ${@5}$ et ${@6}$ et {@7} à l’extérieur. La fonction est {@8} sur {@9}.",
  "$f'(x)={@0}\\cos {@1}x{@2}$. Keďže $\\cos 0=1$ a $\\mathrm{e}^0=1$, je $f'(0)={@3}{@4}={@5}$.": "$f'(x)={@0}\\cos {@1}x{@2}$. Comme $\\cos 0=1$ et $\\mathrm{e}^0=1$, on a $f'(0)={@3}{@4}={@5}$.",
  "$f'(x)={@0}\\sin {@1}x{@2}$. Keďže $\\sin 0=0$ a $\\mathrm{e}^0=1$, je $f'(0)=0{@3}={@4}$.": "$f'(x)={@0}\\sin {@1}x{@2}$. Comme $\\sin 0=0$ et $\\mathrm{e}^0=1$, on a $f'(0)=0{@3}={@4}$.",
  "$f(-1)=\\mathrm{e}^{-1}$ sa nerovná $f(1)=\\mathrm{e}$ ani $-\\mathrm{e}$.": "$f(-1)=\\mathrm{e}^{-1}$ n’est égal ni à $f(1)=\\mathrm{e}$, ni à $-\\mathrm{e}$.",
  "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, párne mocniny zmenu znamienka „pohltia“.": "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, les puissances paires « absorbent » le changement de signe.",
  "$f(-x)=-\\sin x+\\cos x$, čo nie je $f(x)$ ani $-f(x)$.": "$f(-x)=-\\sin x+\\cos x$, ce qui n’est ni $f(x)$, ni $-f(x)$.",
  "$f(-x)=-x^3+{@0}x=-f(x)$, výraz obsahuje len nepárne mocniny.": "$f(-x)=-x^3+{@0}x=-f(x)$, l’expression ne contient que des puissances impaires.",
  "$f(1)={@0}$ a $f(-1)={@1}$; neplatí ani jedna z rovností $f(-1)=f(1)$, $f(-1)=-f(1)$.": "$f(1)={@0}$ et $f(-1)={@1}$ ; aucune des égalités $f(-1)=f(1)$, $f(-1)=-f(1)$ n’est vérifiée.",
  "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Dotyčnica: $y={@5}+{@6}(x-{@7})$, teda $y={@8}$.": "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Tangente : $y={@5}+{@6}(x-{@7})$, donc $y={@8}$.",
  "$f^{-1}({@0})$ je číslo $x$, pre ktoré $f(x)={@1}$. Riešime $\\dfrac{{@2}}{{@3}}={@4}$: po vynásobení menovateľmi dostaneme lineárnu rovnicu s riešením $x={@5}$. Skúška: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓": "$f^{-1}({@0})$ est le nombre $x$ pour lequel $f(x)={@1}$. On résout $\\dfrac{{@2}}{{@3}}={@4}$ : après multiplication par les dénominateurs, on obtient une équation linéaire de solution $x={@5}$. Vérification : $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓",
  "$n={@0}$ je {@1} v usporiadanom súbore. Kumulované počty: {@2}. Medián je ${@3}$.": "$n={@0}$ est {@1} dans la série ordonnée. Effectifs cumulés : {@2}. La médiane est ${@3}$.",
  "$n={@0}={@1}$. Vážený aritmetický priemer: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.": "$n={@0}={@1}$. Moyenne arithmétique pondérée : $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.",
  "${@0} x={@1}$ pre $x\\in\\{{@2}\\}$": "${@0} x={@1}$ pour $x\\in\\{{@2}\\}$",
  "${@0}^{x}=({@1}^{x})^2$, substitúcia $t={@2}^{x}$, pričom $t&gt;0$: ${@3}=0$, korene $t_1={@4}$, $t_2={@5}$. {@6}Z ${@7}^{x}={@8}$ je $x={@9}${@10}. $K=\\{{@11}\\}$.": "${@0}^{x}=({@1}^{x})^2$, changement de variable $t={@2}^{x}$, avec $t&gt;0$ : ${@3}=0$, racines $t_1={@4}$, $t_2={@5}$. {@6}De ${@7}^{x}={@8}$, on tire $x={@9}${@10}. $K=\\{{@11}\\}$.",
  "(Výsledok zadaj ako zlomok alebo desatinné číslo zaokrúhlené na 3 desatinné miesta.)": "(Saisis le résultat sous forme de fraction ou de nombre décimal arrondi à 3 décimales.)",
  "(otočíme znak)": "(on change le sens de l’inégalité)",
  ", obsah $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$": ", aire $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$",
  ", prepona má ${@0}\\,\\text{cm}$": ", l’hypoténuse mesure ${@0}\\,\\text{cm}$",
  ", z ${@0}^{x}={@1}$ je $x={@2}$": ", de ${@0}^{x}={@1}$, on tire $x={@2}$",
  "0 alebo 5": "0 ou 5",
  "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · body [1; {@2}] a [{@3}; 1] sú súmerné podľa y = x": "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · les points [1; {@2}] et [{@3}; 1] sont symétriques par rapport à y = x",
  "<span class=\"c-ok\">f′ &gt; 0, funkcia rastie</span>": "<span class=\"c-ok\">f′ &gt; 0, la fonction croît</span>",
  "<span class=\"muted small\">Téma: {@0}</span><br>{@1}": "<span class=\"muted small\">Thème : {@0}</span><br>{@1}",
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
  "ANALÝZA": "ANALYSE",
  "ANANÁS": "ANANAS",
  "Ak po dosadení vyjde $\\frac{0}{0}$, rozlož čitateľa na súčin. Jeden z činiteľov sa vykráti s menovateľom.": "Si l’on obtient $\\frac{0}{0}$ en remplaçant, factorise le numérateur. L’un des facteurs se simplifie avec le dénominateur.",
  "Aká dlhá je potom strana rovnobežná so stenou (v metroch)?": "Quelle est alors la longueur du côté parallèle au mur (en mètres) ?",
  "Aká dlhá je prepona v cm?": "Quelle est la longueur de l’hypoténuse en cm ?",
  "Aká dlhá je základňa trojuholníka na osi $x$?": "Quelle est la longueur de la base du triangle sur l’axe $x$ ?",
  "Aká dlhá musí byť strana rovnobežná so stenou, aby bol obsah najväčší (v metroch)?": "Quelle doit être la longueur du côté parallèle au mur pour que l’aire soit maximale (en mètres) ?",
  "Aká je $y$-ová súradnica bodu s $x={@0}$?": "Quelle est l’ordonnée du point d’abscisse $x={@0}$ ?",
  "Aká je pravdepodobnosť, že obaja minú?": "Quelle est la probabilité que les deux manquent la cible ?",
  "Aká je pravdepodobnosť, že prvý minie a druhý zasiahne?": "Quelle est la probabilité que le premier manque la cible et que le second l’atteigne ?",
  "Aká je pravdepodobnosť, že prvý zasiahne a druhý minie?": "Quelle est la probabilité que le premier atteigne la cible et que le second la manque ?",
  "Aká je pravdepodobnosť, že terč zasiahne aspoň jeden?": "Quelle est la probabilité qu’au moins l’un des deux atteigne la cible ?",
  "Aká je pravdepodobnosť, že terč zasiahne práve jeden?": "Quelle est la probabilité qu’exactement l’un des deux atteigne la cible ?",
  "Aká je pravdepodobnosť, že vo výbere bude aspoň jedno dievča? {@0}": "Quelle est la probabilité qu’il y ait au moins une fille dans le groupe choisi ? {@0}",
  "Aká je pravdepodobnosť, že šestka nepadne ani raz? Výsledok zaokrúhli na 4 desatinné miesta.": "Quelle est la probabilité de n’obtenir aucun six ? Arrondis le résultat à 4 décimales.",
  "Aká je pravdepodobnosť, že šestka padne aspoň raz? Výsledok zaokrúhli na 3 desatinné miesta.": "Quelle est la probabilité d’obtenir au moins un six ? Arrondis le résultat à 3 décimales.",
  "Aká je pravdepodobnosť? {@0}": "Quelle est la probabilité ? {@0}",
  "Aká je teda hodnota limity? Zadaj ju ako zlomok.": "Quelle est donc la valeur de la limite ? Saisis-la sous forme de fraction.",
  "Aká je výška trojuholníka (y-ová súradnica priesečníka oboch priamok)?": "Quelle est la hauteur du triangle (ordonnée du point d’intersection des deux droites) ?",
  "Aké je najmenšie celé číslo v prieniku?": "Quel est le plus petit entier de l’intersection ?",
  "Aké je najmenšie celé číslo, ktoré ju spĺňa?": "Quel est le plus petit entier qui la vérifie ?",
  "Aké sú súradnice bodu $K$ (v cm)? Zadaj $x$; $y$; $z$.": "Quelles sont les coordonnées du point $K$ (en cm) ? Saisis $x$ ; $y$ ; $z$.",
  "Akú dĺžku (v cm) musí mať strana odstrihnutých štvorcov, aby mala krabica najväčší objem?": "Quelle longueur (en cm) doit avoir le côté des carrés découpés pour que la boîte ait un volume maximal ?",
  "Akú hodnotu má derivácia člena ${@0}$ v bode $0$?": "Quelle est la valeur de la dérivée du terme ${@0}$ en $0$ ?",
  "Akú hodnotu má menovateľ derivácie $({@0})^2$ v bode ${@1}$?": "Quelle est la valeur du dénominateur de la dérivée $({@0})^2$ en ${@1}$ ?",
  "Akú hodnotu má vnútorná funkcia ${@0}$ v bode ${@1}$?": "Quelle est la valeur de la fonction intérieure ${@0}$ en ${@1}$ ?",
  "Akú hodnotu má člen $uv'$ v bode $0$?": "Quelle est la valeur du terme $uv'$ en $0$ ?",
  "Aký je absolútny člen $q$?": "Quelle est l’ordonnée à l’origine $q$ ?",
  "Aký je najväčší objem krabice v $\\text{cm}^3$?": "Quel est le volume maximal de la boîte en $\\text{cm}^3$ ?",
  "Aký je najväčší obsah pozemku (v $\\text{m}^2$)?": "Quelle est l’aire maximale du terrain (en $\\text{m}^2$) ?",
  "Aký je obsah oblasti?": "Quelle est l’aire du domaine ?",
  "Aký je obsah útvaru? Zadaj zlomok alebo celé číslo.": "Quelle est l’aire de la figure ? Saisis une fraction ou un entier.",
  "Aký je parameter $p$?": "Quel est le paramètre $p$ ?",
  "Aký je rozsah súboru $n$ (počet všetkých žiakov)?": "Quel est l’effectif total $n$ (nombre total d’élèves) ?",
  "Aký je stredový uhol výseče v stupňoch?": "Quel est l’angle au centre du secteur en degrés ?",
  "Aký je súčet vekov po príchode nového člena?": "Quelle est la somme des âges après l’arrivée du nouveau membre ?",
  "Aký je súčet vekov pôvodných členov?": "Quelle est la somme des âges des membres initiaux ?",
  "Aký je súčet známok všetkých žiakov?": "Quelle est la somme des notes de tous les élèves ?",
  "Aký je súčin faktoriálov počtov opakujúcich sa písmen?": "Quel est le produit des factorielles des nombres de lettres répétées ?",
  "Aký je teda exponent ${@0}$?": "Quel est donc l’exposant ${@0}$ ?",
  "Aký je štatistický znak „{@0}“?": "De quel type est le caractère statistique « {@0} » ?",
  "Aký najväčší objem (v $\\text{cm}^3$) môže mať krabica?": "Quel volume maximal (en $\\text{cm}^3$) la boîte peut-elle avoir ?",
  "Aký najväčší obsah (v $\\text{m}^2$) môže mať pozemok?": "Quelle aire maximale (en $\\text{m}^2$) le terrain peut-il avoir ?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „autobus“ v kruhovom diagrame?": "Quel angle au centre (en degrés) aura le secteur « bus » dans le diagramme circulaire ?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „auto“ v kruhovom diagrame?": "Quel angle au centre (en degrés) aura le secteur « voiture » dans le diagramme circulaire ?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „bicykel“ v kruhovom diagrame?": "Quel angle au centre (en degrés) aura le secteur « vélo » dans le diagramme circulaire ?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „pešo“ v kruhovom diagrame?": "Quel angle au centre (en degrés) aura le secteur « à pied » dans le diagramme circulaire ?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „vlak“ v kruhovom diagrame?": "Quel angle au centre (en degrés) aura le secteur « train » dans le diagramme circulaire ?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „{@0}“ v kruhovom diagrame?": "Quel angle au centre (en degrés) aura le secteur « {@0} » dans le diagramme circulaire ?",
  "Akým číslom sa suma na účte každý rok vynásobí?": "Par quel nombre la somme sur le compte est-elle multipliée chaque année ?",
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
  "Basketbalista premení trestný hod s pravdepodobnosťou ${@0}$, hody sú nezávislé. Hádže {@1}-krát; $X$ je počet premenených hodov.": "Un basketteur réussit un lancer franc avec la probabilité ${@0}$, les lancers sont indépendants. Il lance {@1} fois ; $X$ est le nombre de lancers réussis.",
  "Biela a čierna môžu prísť v dvoch poradiach. Pri výbere naraz radšej počítaj neusporiadané dvojice: bielu a čiernu guľu vyberáš nezávisle.": "Blanche et noire peuvent sortir dans deux ordres. Pour un tirage simultané, compte plutôt les paires non ordonnées : tu choisis la boule blanche et la boule noire indépendamment.",
  "Binomické rozdelenie": "Loi binomiale",
  "Bod $T[{@0}; {@1}]$ leží na kružnici $k: {@2}$. Dotyčnica ku kružnici v bode $T$ má rovnicu ${@3}+c=0$. Vypočítaj $c$.": "Le point $T[{@0}; {@1}]$ est sur le cercle $k: {@2}$. La tangente au cercle en $T$ a pour équation ${@3}+c=0$. Calcule $c$.",
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
  "Celé čísla ${@0}, \\dots, {@1}$ — je ich ${@2}$.": "Les entiers ${@0}, \\dots, {@1}$ — il y en a ${@2}$.",
  "Chlapcov a dievčatá vyberáš nezávisle (kombinácie, lebo na poradí nezáleží) a počty vynásobíš.": "Tu choisis les garçons et les filles indépendamment (combinaisons, car l’ordre ne compte pas) et tu multiplies les nombres.",
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
  "Dané sú funkcie $f(x)={@0}$ a $g(x)={@1}$. Vypočítaj $({@2})({@3})$.": "On donne les fonctions $f(x)={@0}$ et $g(x)={@1}$. Calcule $({@2})({@3})$.",
  "Daný je súbor údajov: ${@0}$. Urči jeho {@1}.": "On donne la série de données : ${@0}$. Détermine {@1}.",
  "Definičný obor $(0; \\infty)$ nie je súmerný podľa nuly, funkcia preto nemôže byť párna ani nepárna.": "L’ensemble de définition $(0; \\infty)$ n’est pas symétrique par rapport à zéro, la fonction ne peut donc être ni paire ni impaire.",
  "Delíš záporným číslom, znak nerovnosti sa otočí.": "Tu divises par un nombre négatif, le sens de l’inégalité change.",
  "Derivácia je $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Koľko je $f'({@4})$?": "La dérivée est $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Combien vaut $f'({@4})$ ?",
  "Derivácia podielu: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. V bode ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.": "Dérivée d’un quotient : $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. En ${@7}$ : $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.",
  "Derivácia sínusu je kosínus bez mínusu: $(\\sin x)'=\\cos x$. Mínus patrí k derivácii kosínusu.": "La dérivée du sinus est le cosinus, sans signe moins : $(\\sin x)'=\\cos x$. Le moins appartient à la dérivée du cosinus.",
  "Derivácia súčinu nie je súčin derivácií: $(u\\cdot v)'=u'v+uv'$, nie $u'\\cdot v'$.": "La dérivée d’un produit n’est pas le produit des dérivées : $(u\\cdot v)'=u'v+uv'$, pas $u'\\cdot v'$.",
  "Derivácia súčinu: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Keďže $\\mathrm{e}^0=1$, je $f'(0)={@3}$.": "Dérivée d’un produit : $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Comme $\\mathrm{e}^0=1$, on a $f'(0)={@3}$.",
  "Derivácia súčinu: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Keďže $\\ln 1=0$, je $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.": "Dérivée d’un produit : $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Comme $\\ln 1=0$, on a $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.",
  "Derivácia zloženej funkcie: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. V bode ${@4}$ je vnútorná funkcia ${@5}\\cdot {@6}{@7}={@8}$, teda $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.": "Dérivée d’une fonction composée : $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. En ${@4}$, la fonction intérieure vaut ${@5}\\cdot {@6}{@7}={@8}$, donc $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.",
  "Determinant sústavy je $m^2-{@0}$, je nulový pre $m=\\pm {@1}$ (inak má sústava jediné riešenie). Pre $m={@2}$ majú rovnice ľavé strany úmerné, ale pravé strany ${@3}$ a ${@4}$ nie: priamky sú rovnobežné rôzne, riešenie neexistuje. Pre $m={@5}$ je druhá rovnica $(-1)$-násobkom prvej: priamky splývajú, riešení je nekonečne veľa. Odpoveď: $m={@6}$.": "Le déterminant du système est $m^2-{@0}$, il est nul pour $m=\\pm {@1}$ (sinon le système a une solution unique). Pour $m={@2}$, les membres de gauche des équations sont proportionnels, mais les membres de droite ${@3}$ et ${@4}$ ne le sont pas : les droites sont strictement parallèles, il n’y a pas de solution. Pour $m={@5}$, la deuxième équation vaut $(-1)$ fois la première : les droites sont confondues, il y a une infinité de solutions. Réponse : $m={@6}$.",
  "Determinant z vektorov $\\vec{AB}$ a $\\vec{AC}$ dáva obsah rovnobežníka. Obsah trojuholníka je jeho polovica.": "Le déterminant des vecteurs $\\vec{AB}$ et $\\vec{AC}$ donne l’aire du parallélogramme. L’aire du triangle en est la moitié.",
  "Diskriminant je $D=b^2-4ac$. Nezabudni na štvorku pred súčinom $ac$.": "Le discriminant est $D=b^2-4ac$. N’oublie pas le 4 devant le produit $ac$.",
  "Diskriminant je $D=b^2-4ac$. Z rovnice $D=0$ treba $c$ ešte vydeliť štyrmi.": "Le discriminant est $D=b^2-4ac$. À partir de l’équation $D=0$, il faut encore diviser $c$ par quatre.",
  "Do vnútra intervalu patrí {@0}.": "À l’intérieur de l’intervalle se trouve {@0}.",
  "Do vzorca pre plášť $\\pi rs$ patrí strana kužeľa $s$, nie výška $v$.": "Dans la formule de l’aire latérale $\\pi rs$, c’est la génératrice $s$ du cône qui intervient, pas la hauteur $v$.",
  "Dosadením $y={@0}$ dostaneš rovnicu ${@1}=0$. Aký je jej diskriminant?": "En remplaçant $y={@0}$, tu obtiens l’équation ${@1}=0$. Quel est son discriminant ?",
  "Dosadením dostaneme $\\frac{0}{0}$. Menovateľ je rozdiel štvorcov: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.": "En remplaçant, on obtient $\\frac{0}{0}$. Le dénominateur est une différence de carrés : $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Après simplification, $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.",
  "Dosadením vyjde $\\frac{0}{0}$, čo nie je nula, ale neurčitý výraz. Menovateľ rozlož ako rozdiel štvorcov a vykráť.": "En remplaçant, on obtient $\\frac{0}{0}$, ce qui n’est pas zéro, mais une forme indéterminée. Factorise le dénominateur comme une différence de carrés et simplifie.",
  "Dosadením vyšlo $\\frac{0}{0}$, a to nie je nula, ale neurčitý výraz. Čitateľa rozlož na súčin a vykráť.": "En remplaçant, tu as obtenu $\\frac{0}{0}$, ce qui n’est pas zéro, mais une forme indéterminée. Factorise le numérateur et simplifie.",
  "Dosadil si stred kružnice. Dotyčnica stredom neprechádza, prechádza bodom dotyku $T$.": "Tu as remplacé par le centre du cercle. La tangente ne passe pas par le centre, elle passe par le point de contact $T$.",
  "Dosadiť sa nedá, menovateľ sa blíži k nule. Deliť číslom blízkym nule dáva v absolútnej hodnote veľmi veľké čísla.": "On ne peut pas remplacer, le dénominateur tend vers zéro. Diviser par un nombre proche de zéro donne des nombres très grands en valeur absolue.",
  "Dosadíme ${@0}^2 x=1-{@1}^2 x$ a upravíme: ${@2}{@3}{@4}=0$.": "On remplace ${@0}^2 x=1-{@1}^2 x$ et on simplifie : ${@2}{@3}{@4}=0$.",
  "Dosaď $-x$ namiesto $x$ a porovnaj $f(-x)$ s $f(x)$ a s $-f(x)$. Over aj, či je definičný obor súmerný podľa nuly.": "Remplace $x$ par $-x$ et compare $f(-x)$ à $f(x)$ et à $-f(x)$. Vérifie aussi si l’ensemble de définition est symétrique par rapport à zéro.",
  "Dosaď bod $P$ do výrazu ${@0}$. Akú hodnotu dostaneš?": "Remplace le point $P$ dans l’expression ${@0}$. Quelle valeur obtiens-tu ?",
  "Dosaď bod ${@0}$ do ľavej strany rovnice roviny. Aká je absolútna hodnota výsledku?": "Remplace le point ${@0}$ dans le membre de gauche de l’équation du plan. Quelle est la valeur absolue du résultat ?",
  "Dosaď súradnice bodu $P$ do rovnice roviny a vyjadri $d$.": "Remplace les coordonnées du point $P$ dans l’équation du plan et exprime $d$.",
  "Dotyčnica je kolmá na polomer $ST$. Do zadanej rovnice dosaď súradnice bodu $T$.": "La tangente est perpendiculaire au rayon $ST$. Remplace les coordonnées du point $T$ dans l’équation donnée.",
  "Druhá mocnina pomeru dĺžok platí pre povrch. Zachováva sa však objem, a ten závisí od tretej mocniny.": "Le carré du rapport des longueurs vaut pour l’aire. Or c’est le volume qui se conserve, et il dépend du cube.",
  "Druhá nerovnica má riešenie $x\\le d$. Aké je číslo $d$?": "La deuxième inéquation a pour solution $x\\le d$. Quel est le nombre $d$ ?",
  "Druhá súradnica inflexného bodu je funkčná hodnota $f({@0})$, nie hodnota $f''({@1})$.": "La deuxième coordonnée du point d’inflexion est la valeur $f({@0})$, pas la valeur $f''({@1})$.",
  "Druhý koreň čitateľa je $-c$; súčin koreňov je ${@0}$.": "La deuxième racine du numérateur est $-c$ ; le produit des racines est ${@0}$.",
  "Dvaja strelci vystrelia nezávisle po jednej rane. Prvý zasiahne terč s pravdepodobnosťou ${@0}$, druhý s pravdepodobnosťou ${@1}$. Aká je pravdepodobnosť, že {@2}?": "Deux tireurs tirent indépendamment une balle chacun. Le premier atteint la cible avec la probabilité ${@0}$, le second avec la probabilité ${@1}$. Quelle est la probabilité de l’événement « {@2} » ?",
  "Dvojnásobný koreň je pri $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.": "Il y a une racine double quand $D=0$ : $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.",
  "Dĺžky sa neodčítajú priamo. Polomer gule je prepona pravouhlého trojuholníka, použi Pytagorovu vetu.": "Les longueurs ne se soustraient pas directement. Le rayon de la boule est l’hypoténuse d’un triangle rectangle, utilise le théorème de Pythagore.",
  "Dĺžky strán pravouhlého trojuholníka tvoria aritmetickú postupnosť a jeho obvod je ${@0}\\,\\text{cm}$. Vypočítaj {@1}.": "Les longueurs des côtés d’un triangle rectangle forment une suite arithmétique et son périmètre vaut ${@0}\\,\\text{cm}$. Calcule {@1}.",
  "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">najpravdepodobnejšie k = {@3}</span>": "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">le plus probable : k = {@3}</span>",
  "E; D": "E; D",
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
  "Exponenciálna funkcia a k nej inverzná logaritmická funkcia": "Fonction exponentielle et fonction logarithme réciproque",
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
  "Funkcia $f(x)=\\dfrac{{@0}}{{@1}}$ je prostá. Vypočítaj $f^{-1}\\!\\left({@2}\\right)$.": "La fonction $f(x)=\\dfrac{{@0}}{{@1}}$ est injective. Calcule $f^{-1}\\!\\left({@2}\\right)$.",
  "Funkcia $f(x)={@0}$ má práve jedno {@1}. Nájdi bod, v ktorom ho nadobúda: zadaj $x$ a $f(x)$ (napr. 2; -5).": "La fonction $f(x)={@0}$ admet exactement un {@1}. Trouve le point où il est atteint : saisis $x$ et $f(x)$ (par ex. 2; -5).",
  "Funkcia je konvexná tam, kde $f''(x)&gt;0$. Vypočítaj druhú deriváciu a vyrieš lineárnu nerovnicu.": "La fonction est convexe là où $f''(x)&gt;0$. Calcule la dérivée seconde et résous l’inéquation linéaire.",
  "Funkcie sú rôzne, takže záleží na tom, kto je predseda a kto pokladník. Ide o variácie, nie kombinácie.": "Les fonctions sont différentes, il importe donc de savoir qui est président et qui est trésorier. Il s’agit d’arrangements, pas de combinaisons.",
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
  "Graf": "Le diagramme",
  "Graf funkcie sin x / x s dierou v bode 0": "Courbe de la fonction sin x / x avec un trou en 0",
  "Graf funkcie x na tretiu mínus 3x s extrémami": "Courbe de la fonction x au cube moins 3x avec ses extremums",
  "Graf racionálnej funkcie s asymptotami": "Courbe d’une fonction rationnelle avec ses asymptotes",
  "Grafy funkcií e na x a ln x s dotyčnicami": "Courbes des fonctions exponentielle et ln x avec leurs tangentes",
  "Gule ťaháme naraz, teda bez vrátenia. Po vytiahnutí bielej je v urne o jednu bielu menej.": "On tire les boules simultanément, donc sans remise. Après avoir tiré une boule blanche, il y a une boule blanche de moins dans l’urne.",
  "Guľu s polomerom $r={@0}\\,\\text{cm}$ pretne rovina vo vzdialenosti ${@1}\\,\\text{cm}$ od stredu gule. Vypočítaj {@2}": "Une boule de rayon $r={@0}\\,\\text{cm}$ est coupée par un plan à la distance ${@1}\\,\\text{cm}$ du centre de la boule. Calcule {@2}",
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
  "Hodnota ${@0}$ je síce koreňom $V'(x)$, ale nepatrí do prípustného intervalu: krabica by nemala žiadne dno.": "La valeur ${@0}$ est certes une racine de $V'(x)$, mais elle n’appartient pas à l’intervalle admissible : la boîte n’aurait pas de fond.",
  "Hodnota ${@0}$ leží mimo $\\langle -1; 1\\rangle$, tá riešenie nedáva.": "La valeur ${@0}$ est en dehors de $\\langle -1; 1\\rangle$, elle ne donne pas de solution.",
  "Hodnotu inverznej funkcie nájdeš bez jej predpisu: hľadáš $x$, pre ktoré $f(x)$ dá zadané číslo.": "Tu trouves la valeur de la fonction réciproque sans connaître son expression : tu cherches $x$ tel que $f(x)$ donne le nombre indiqué.",
  "Hodnoty sú celé čísla získané počítaním, medzi dvoma susednými nie je iná možná hodnota.": "Les valeurs sont des entiers obtenus par comptage, il n’y a pas d’autre valeur possible entre deux valeurs voisines.",
  "Hodnoty sú slová (kategórie), nie čísla.": "Les valeurs sont des mots (catégories), pas des nombres.",
  "Hodnoty tohto znaku sú slová (kategórie), nie čísla.": "Les valeurs de ce caractère sont des mots (catégories), pas des nombres.",
  "Hodnoty tohto znaku sú čísla, takže znak je kvantitatívny.": "Les valeurs de ce caractère sont des nombres, le caractère est donc quantitatif.",
  "Hodnoty získavame meraním a môžu byť ľubovoľným číslom z nejakého intervalu.": "On obtient les valeurs par mesure et elles peuvent être n’importe quel nombre d’un intervalle.",
  "Hodnoty získavame meraním, môžu byť ľubovoľným číslom z nejakého intervalu (aj desatinným).": "On obtient les valeurs par mesure, elles peuvent être n’importe quel nombre d’un intervalle (même décimal).",
  "Hodnoty získavame počítaním, sú to len celé čísla. Medzi dvoma susednými hodnotami nie je iná možná hodnota.": "On obtient les valeurs par comptage, ce ne sont que des entiers. Entre deux valeurs voisines, il n’y a pas d’autre valeur possible.",
  "Hodíme naraz dvoma hracími kockami. Aká je pravdepodobnosť, že {@0}? {@1}": "On lance simultanément deux dés. Quelle est la probabilité de l’événement « {@0} » ? {@1}",
  "Hranica intervalu konvexnosti je inflexný bod, v ktorom $f''(x)=0$. Over, kde je druhá derivácia nulová.": "La borne de l’intervalle de convexité est le point d’inflexion, où $f''(x)=0$. Vérifie où la dérivée seconde s’annule.",
  "Hranice integrálu sú nulové body paraboly. Funkcia je párna, môžeš počítať $2\\int_0^{m}$.": "Les bornes de l’intégrale sont les zéros de la parabole. La fonction est paire, tu peux calculer $2\\int_0^{m}$.",
  "Hranol má dve podstavy, hornú aj dolnú. Obsah podstavy započítaj dvakrát.": "Un prisme a deux bases, celle du haut et celle du bas. Compte deux fois l’aire de la base.",
  "Hrany sa zväčšia o ${@0}\\,\\%$, {@1} však rastie rýchlejšie: koeficient podobnosti treba umocniť.": "Les arêtes augmentent de ${@0}\\,\\%$, mais {@1} croît plus vite : il faut élever le rapport de similitude à une puissance.",
  "Hráč hodí hracou kockou {@0}-krát. Aká je pravdepodobnosť, že aspoň raz padne šestka? Výsledok zaokrúhli na 3 desatinné miesta.": "Un joueur lance un dé {@0} fois. Quelle est la probabilité d’obtenir au moins une fois un six ? Arrondis le résultat à 3 décimales.",
  "Hráč hodí {@0}-krát hracou kockou. Náhodná premenná $X$ je počet hodov, v ktorých padla šestka.": "Un joueur lance un dé {@0} fois. La variable aléatoire $X$ est le nombre de lancers qui ont donné un six.",
  "Hráč zapisoval počet bodov v jednotlivých zápasoch: ${@0}$. Aký je modus tohto súboru?": "Un joueur a noté le nombre de points marqués à chaque match : ${@0}$. Quel est le mode de cette série ?",
  "Hľadisko letného amfiteátra má v prvom rade {@0} {@1} a každý ďalší rad má o {@2} {@3} viac. Koľko radov treba najmenej postaviť, aby bolo spolu aspoň {@4} sedadiel?": "Les gradins d’un amphithéâtre d’été comptent {@0} {@1} au premier rang, et chaque rang suivant en compte {@2} {@3} de plus. Combien de rangs faut-il construire au minimum pour avoir au moins {@4} places au total ?",
  "Hľadá sa hodnota funkcie, nie bod $x$, v ktorom ju nadobúda.": "On cherche la valeur de la fonction, pas le point $x$ où elle est atteinte.",
  "Hľadáme $t$ tak, aby $A+t\\vec{u}=Q$. Z prvej rovnice {@0} je $t={@1}$. Ďalšie rovnice: {@2} a {@3} — {@4}": "On cherche $t$ tel que $A+t\\vec{u}=Q$. De la première équation {@0}, on tire $t={@1}$. Autres équations : {@2} et {@3} — {@4}",
  "Hľadáme najmenšie prirodzené $n$, pre ktoré ${@0}^n\\ge {@1}$. Logaritmovaním: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, teda $n={@5}$.": "On cherche le plus petit entier naturel $n$ tel que ${@0}^n\\ge {@1}$. En prenant le logarithme : $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, donc $n={@5}$.",
  "Ide o permutácie: ${@0}!={@1}$.": "Il s’agit de permutations : ${@0}!={@1}$.",
  "Inflexný bod hľadaj tam, kde $f''(x)=0$ a druhá derivácia mení znamienko.": "Cherche le point d’inflexion là où $f''(x)=0$ et où la dérivée seconde change de signe.",
  "Integroval si len od $0$ do ${@0}$, to je polovica útvaru. Dolná hranica je druhý nulový bod paraboly.": "Tu as intégré seulement de $0$ à ${@0}$, c’est la moitié de la figure. La borne inférieure est l’autre zéro de la parabole.",
  "Integruj ako mocninu, $\\frac{u^{n+1}}{n+1}$, a výsledok vydeľ koeficientom pri $x$ vnútri zátvorky.": "Intègre comme une puissance, $\\frac{u^{n+1}}{n+1}$, et divise le résultat par le coefficient de $x$ dans la parenthèse.",
  "Integrál mocniny je $\\frac{u^{{@0}}}{{@1}}$: exponent sa zvýši o jedna a zároveň sa ním delí.": "L’intégrale d’une puissance est $\\frac{u^{{@0}}}{{@1}}$ : l’exposant augmente de un et on divise aussi par lui.",
  "Inverznou funkciou k exponenciálnej je logaritmická. Hľadáš $x$, pre ktoré ${@0}^{{@1}}{@2}={@3}$.": "La réciproque de la fonction exponentielle est la fonction logarithme. Tu cherches $x$ tel que ${@0}^{{@1}}{@2}={@3}$.",
  "Inverzná funkcia k funkcii $f(x)={@0}$ má tvar $f^{-1}(x)=kx+q$. Zadaj $k$ a $q$ (napr. 1/2; -3).": "La réciproque de la fonction $f(x)={@0}$ est de la forme $f^{-1}(x)=kx+q$. Saisis $k$ et $q$ (par ex. 1/2; -3).",
  "Inverzná funkcia vráti operácie v opačnom poradí: násobenie sa zmení na delenie. Vymeň $x$ a $y$ a vyjadri $y$.": "La fonction réciproque effectue les opérations dans l’ordre inverse : la multiplication devient une division. Échange $x$ et $y$ et exprime $y$.",
  "Inverzná funkcia: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.": "Fonction réciproque : $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.",
  "Jav „aspoň jeden úspech“ je opačný k javu „ani jeden úspech“.": "L’événement « au moins un succès » est le contraire de l’événement « aucun succès ».",
  "Jav „aspoň jedna biela“ zahŕňa aj prípad, keď je jedna biela a jedna čierna. Použi opačný jav „obe čierne“.": "L’événement « au moins une blanche » inclut aussi le cas d’une blanche et d’une noire. Utilise l’événement contraire « les deux noires ».",
  "Javy „prvý zasiahne“ a „druhý zasiahne“ môžu nastať súčasne: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Alebo použi opačný jav.": "Les événements « le premier atteint la cible » et « le second atteint la cible » peuvent se produire en même temps : $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Ou utilise l’événement contraire.",
  "Je daná funkcia $f(x)={@0}^{{@1}}{@2}$. Vypočítaj $f^{-1}({@3})$.": "On donne la fonction $f(x)={@0}^{{@1}}{@2}$. Calcule $f^{-1}({@3})$.",
  "Je funkcia $f(x)={@0}$ párna, nepárna, alebo ani jedno?": "La fonction $f(x)={@0}$ est-elle paire, impaire, ou ni l’un ni l’autre ?",
  "Jedna osoba môže mať najviac jednu funkciu, ďalšiu funkciu už vyberáš len zo zvyšných ľudí.": "Une personne peut avoir au plus une fonction, tu choisis donc la fonction suivante parmi les personnes restantes.",
  "Jedna súradnica nestačí: to isté $t$ musí vyhovovať všetkým trom rovniciam. Over aj $y$ a $z$.": "Une seule coordonnée ne suffit pas : le même $t$ doit vérifier les trois équations. Vérifie aussi $y$ et $z$.",
  "Jedného človeka posadíme na ľubovoľné miesto (otočenia nerozlišujeme), ostatných {@0} usporiadame: $({@1}-1)!={@2}!={@3}$.": "On place une personne à une place quelconque (on ne distingue pas les rotations), on range les {@0} autres : $({@1}-1)!={@2}!={@3}$.",
  "KAJAK": "KAYAK",
  "Kandidáti sú stacionárne body vnútri intervalu a oba krajné body. Vypočítaj v nich funkčné hodnoty a porovnaj ich.": "Les candidats sont les points critiques à l’intérieur de l’intervalle et les deux bornes. Calcule les valeurs de la fonction en ces points et compare-les.",
  "Každé podanie rúk je dvojica ľudí, na poradí nezáleží: $\\binom{n}{2}$. Zostav kvadratickú rovnicu.": "Chaque poignée de main est une paire de personnes, l’ordre ne compte pas : $\\binom{n}{2}$. Écris une équation du second degré.",
  "Každú uhlopriečku si započítal dvakrát, z oboch jej koncových vrcholov. Výsledok vydeľ dvoma.": "Tu as compté chaque diagonale deux fois, depuis ses deux extrémités. Divise le résultat par deux.",
  "Každú známku vynásob počtom žiakov, ktorí ju dostali, výsledky sčítaj a vydeľ počtom všetkých žiakov.": "Multiplie chaque note par le nombre d’élèves qui l’ont obtenue, additionne les résultats et divise par le nombre total d’élèves.",
  "Každý rok sa suma vynásobí číslom $1+\\frac{p}{100}$ — ide o geometrickú postupnosť.": "Chaque année, la somme est multipliée par $1+\\frac{p}{100}$ — il s’agit d’une suite géométrique.",
  "Každý vrchol spojíme s $n-3$ nesusednými vrcholmi a každú uhlopriečku tak započítame dvakrát: $\\frac{n(n-3)}{2}$. {@0}": "On relie chaque sommet aux $n-3$ sommets non voisins, et on compte ainsi chaque diagonale deux fois : $\\frac{n(n-3)}{2}$. {@0}",
  "Keby boli všetky písmená rôzne, bolo by ich $n!$. Výmena rovnakých písmen nové slovo nedá, preto vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Si toutes les lettres étaient différentes, il y aurait $n!$ mots. Échanger des lettres identiques ne donne pas de nouveau mot, divise donc par les factorielles des nombres de lettres répétées.",
  "Kocka $ABCDEFGH$ má hranu $a={@0}\\,\\text{cm}$.": "Le cube $ABCDEFGH$ a une arête $a={@0}\\,\\text{cm}$.",
  "Kocka ABCDEFGH s vyznačenými priamkami": "Cube ABCDEFGH avec des droites mises en évidence",
  "Kocka s telesovou uhlopriečkou a uhlom s rovinou podstavy": "Cube avec une grande diagonale et son angle avec le plan de la base",
  "Kocky rozlišujeme: $[1; 2]$ a $[2; 1]$ sú dva rôzne výsledky. Započítaj obe poradia.": "Les dés sont distincts : $[1; 2]$ et $[2; 1]$ sont deux résultats différents. Compte les deux ordres.",
  "Koeficient podobnosti je $k={@0}$. Koľkokrát sa zväčší {@1}? Zadaj číslo na 4 desatinné miesta.": "Le rapport de similitude est $k={@0}$. Par combien est multiplié(e) {@1} ? Saisis un nombre à 4 décimales.",
  "Koeficient podobnosti je $k={@0}$. {@1} sa zmení $k^{{@2}}={@3}$-krát, teda sa zväčší o ${@4}\\,\\%$.": "Le rapport de similitude est $k={@0}$. {@1} est multiplié(e) par $k^{{@2}}={@3}$, il (elle) augmente donc de ${@4}\\,\\%$.",
  "Konvexný mnohouholník má {@0} uhlopriečok. Koľko má vrcholov?": "Un polygone convexe a {@0} diagonales. Combien a-t-il de sommets ?",
  "Koreň $t_2={@0}$ je záporný a rovnica ${@1}^{x}={@2}$ nemá riešenie.": "La racine $t_2={@0}$ est négative et l’équation ${@1}^{x}={@2}$ n’a pas de solution.",
  "Koľko celých čísel ju spĺňa?": "Combien d’entiers la vérifient ?",
  "Koľko celých čísel leží v prieniku?": "Combien d’entiers y a-t-il dans l’intersection ?",
  "Koľko eur bude na účte po {@0} rokoch? Výsledok zaokrúhli na centy.": "Combien d’euros y aura-t-il sur le compte au bout de {@0} ans ? Arrondis le résultat au centime.",
  "Koľko je $f'(0)$?": "Combien vaut $f'(0)$ ?",
  "Koľko je $f'({@0})$? Zadaj celé číslo alebo zlomok.": "Combien vaut $f'({@0})$ ? Saisis un entier ou une fraction.",
  "Koľko je $x=f^{-1}({@0})$?": "Combien vaut $x=f^{-1}({@0})$ ?",
  "Koľko je ${@0}!$?": "Combien vaut ${@0}!$ ?",
  "Koľko je spolu možností?": "Combien y a-t-il de possibilités au total ?",
  "Koľko je trojíc, v ktorých sú len chlapci?": "Combien y a-t-il de groupes de trois composés uniquement de garçons ?",
  "Koľko je všetkých trojíc?": "Combien y a-t-il de groupes de trois au total ?",
  "Koľko je všetkých výberov dvoch gúľ?": "Combien y a-t-il de tirages de deux boules au total ?",
  "Koľko percent to je?": "Quel pourcentage cela représente-t-il ?",
  "Koľko percent žiakov odpovedalo „autobus“?": "Quel pourcentage d’élèves a répondu « bus » ?",
  "Koľko percent žiakov odpovedalo „auto“?": "Quel pourcentage d’élèves a répondu « voiture » ?",
  "Koľko percent žiakov odpovedalo „bicykel“?": "Quel pourcentage d’élèves a répondu « vélo » ?",
  "Koľko percent žiakov odpovedalo „pešo“?": "Quel pourcentage d’élèves a répondu « à pied » ?",
  "Koľko percent žiakov odpovedalo „vlak“?": "Quel pourcentage d’élèves a répondu « train » ?",
  "Koľko percent žiakov odpovedalo „{@0}“?": "Quel pourcentage d’élèves a répondu « {@0} » ?",
  "Koľko rokov má nový člen?": "Quel âge a le nouveau membre ?",
  "Koľko rôznych „slov“ (aj nezmyselných) vznikne preusporiadaním všetkých písmen slova {@0}?": "Combien de « mots » différents (même dénués de sens) obtient-on en permutant toutes les lettres du mot {@0} ?",
  "Koľko uhlopriečok má konvexný {@0}-uholník?": "Combien de diagonales a un polygone convexe à {@0} côtés ?",
  "Koľko {@0} {@1}čísel možno zostaviť z cifier {@2}, ak sa cifry {@3}?": "Combien de nombres {@1}{@0} peut-on former avec les chiffres {@2}, si les chiffres {@3} ?",
  "Koľkokrát najmenej musíme hodiť hracou kockou, aby pravdepodobnosť, že aspoň raz padne šestka, bola väčšia ako ${@0}$?": "Combien de fois au minimum faut-il lancer un dé pour que la probabilité d’obtenir au moins un six soit supérieure à ${@0}$ ?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť do radu na {@1} stoličiek?": "De combien de façons {@0} personnes peuvent-elles s’asseoir en rang sur {@1} chaises ?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť okolo okrúhleho stola, ak rozlišujeme len to, kto sedí vedľa koho (otočenie celého rozsadenia nič nemení)?": "De combien de façons {@0} personnes peuvent-elles s’asseoir autour d’une table ronde, si l’on distingue seulement qui est assis à côté de qui (une rotation de toute la disposition ne change rien) ?",
  "Koľkými spôsobmi vyberieme chlapcov?": "De combien de façons choisit-on les garçons ?",
  "Koľkými spôsobmi vyberieme dievčatá?": "De combien de façons choisit-on les filles ?",
  "Krabicový graf": "Diagramme en boîte",
  "Kružnica a priamka": "Cercle et droite",
  "Ktoré z koreňov spĺňajú podmienky? Zadaj všetky riešenia rovnice.": "Quelles racines vérifient les conditions ? Saisis toutes les solutions de l’équation.",
  "Ktorý koreň $V'(x)$ leží v intervale $(0; {@0})$?": "Quelle racine de $V'(x)$ est dans l’intervalle $(0; {@0})$ ?",
  "Ktorý zápis vyjadruje všetky riešenia rovnice ${@0}$ v $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?": "Quelle écriture exprime toutes les solutions de l’équation ${@0}$ dans $\\mathbb{R}$ ($k\\in\\mathbb{Z}$) ?",
  "Kvadratická funkcia $f'$ má medzi koreňmi opačné znamienko ako jej vedúci koeficient.": "Entre ses racines, la fonction du second degré $f'$ a le signe contraire de son coefficient dominant.",
  "Kvadratická rovnica má dvojnásobný koreň práve vtedy, keď je diskriminant nulový.": "Une équation du second degré a une racine double si et seulement si son discriminant est nul.",
  "Leží bod $Q{@0}$ na priamke $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?": "Le point $Q{@0}$ est-il sur la droite $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$ ?",
  "Lokálne maximum": "Maximum local",
  "Lokálne minimum": "Minimum local",
  "MATEMATIKA": "MATHÉMATIQUE",
  "Medián je priemer {@0}. a {@1}. hodnoty": "La médiane est la moyenne des {@0}e et {@1}e valeurs",
  "Medián je priemer {@0}. a {@1}. hodnoty: $\\frac{{@2}+{@3}}{2}={@4}$.": "La médiane est la moyenne des {@0}e et {@1}e valeurs : $\\frac{{@2}+{@3}}{2}={@4}$.",
  "Medián je {@0}. hodnota": "La médiane est la {@0}e valeur",
  "Medián je {@0}. hodnota: ${@1}$.": "La médiane est la {@0}e valeur : ${@1}$.",
  "Medián nie je prostredná zo známok 1 až 5. Je to prostredná hodnota, keď známky všetkých žiakov zoradíš za sebou.": "La médiane n’est pas la note du milieu parmi les notes de 1 à 5. C’est la valeur du milieu quand tu ranges à la suite les notes de tous les élèves.",
  "Menovateľ je nulový pre $x={@0}$ a čitateľ tam nulový nie je (lebo $ad-bc={@1}\\neq 0$), preto je $x={@2}$ zvislá asymptota. Pre $x\\to\\pm\\infty$ sa $f(x)$ blíži k podielu koeficientov pri $x$: $\\frac{{@3}}{{@4}}={@5}$, vodorovná asymptota je $y={@6}$.": "Le dénominateur est nul pour $x={@0}$ et le numérateur n’y est pas nul (car $ad-bc={@1}\\neq 0$), donc $x={@2}$ est une asymptote verticale. Pour $x\\to\\pm\\infty$, $f(x)$ tend vers le quotient des coefficients de $x$ : $\\frac{{@3}}{{@4}}={@5}$, l’asymptote horizontale est $y={@6}$.",
  "Menovateľ rozložíme: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení zostane $\\frac{1}{\\sqrt{x}+{@3}}$. Akú hodnotu má $\\sqrt{x}+{@4}$ pre $x={@5}$?": "On factorise le dénominateur : $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Après simplification, il reste $\\frac{1}{\\sqrt{x}+{@3}}$. Quelle est la valeur de $\\sqrt{x}+{@4}$ pour $x={@5}$ ?",
  "Mimobežné priamky neležia v jednej rovine. Skús nájsť stenu alebo rez kocky, v ktorom ležia obe priamky.": "Des droites non coplanaires ne sont pas dans un même plan. Essaie de trouver une face ou une section du cube qui contient les deux droites.",
  "Množina riešení sústavy troch lineárnych nerovníc": "Ensemble des solutions d’un système de trois inéquations linéaires",
  "Mocniny s rovnakým exponentom $x$ daj na jednu stranu, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, a potom obe strany zlogaritmuj.": "Mets les puissances de même exposant $x$ d’un même côté, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, puis prends le logarithme des deux membres.",
  "Modus je hodnota s najväčšou početnosťou. Spočítaj, koľkokrát sa vyskytuje každá hodnota.": "Le mode est la valeur de plus grand effectif. Compte combien de fois apparaît chaque valeur.",
  "Na ktorom intervale je funkcia $f(x)={@0}$ konvexná?": "Sur quel intervalle la fonction $f(x)={@0}$ est-elle convexe ?",
  "Na ktorých intervaloch je funkcia $f(x)={@0}$ {@1}?": "Sur quels intervalles la fonction $f(x)={@0}$ est-elle {@1} ?",
  "Na poradí nezáleží, ide o kombinácie: chlapcov vyberieme $\\binom{{@0}}{{@1}}={@2}$ spôsobmi, dievčatá $\\binom{{@3}}{{@4}}={@5}$ spôsobmi. Podľa pravidla súčinu je spolu ${@6}\\cdot {@7}={@8}$ možností.": "L’ordre ne compte pas, il s’agit de combinaisons : on choisit les garçons de $\\binom{{@0}}{{@1}}={@2}$ façons, les filles de $\\binom{{@3}}{{@4}}={@5}$ façons. D’après le principe multiplicatif, il y a au total ${@6}\\cdot {@7}={@8}$ possibilités.",
  "Na prvé miesto môžeme dať {@0} ({@1} {@2}), na ďalšie miesta {@3}. Spolu ${@4}={@5}$.": "En première position, on peut mettre {@0} ({@1} {@2}), aux positions suivantes {@3}. Au total ${@4}={@5}$.",
  "Na stretnutí si každý účastník podal ruku s každým iným práve raz. Podaní rúk bolo {@0}. Koľko ľudí bolo na stretnutí?": "Lors d’une rencontre, chaque participant a serré la main de chaque autre exactement une fois. Il y a eu {@0} poignées de main. Combien de personnes y avait-il à la rencontre ?",
  "Na tomto intervale leží stacionárny bod, v ktorom $f'$ mení znamienko, takže tam funkcia nie je monotónna.": "Sur cet intervalle se trouve un point critique où $f'$ change de signe, la fonction n’y est donc pas monotone.",
  "Na valci je len polguľa, jej objem je polovica objemu gule.": "Sur le cylindre, il n’y a qu’une demi-boule, son volume est la moitié de celui de la boule.",
  "Na účet sme vložili ${@0}\\,€$ s ročnou úrokovou sadzbou ${@1}\\,\\%$, úroky sa pripisujú raz ročne a ponechávajú na účte (daň neuvažujeme). Koľko eur bude na účte po {@2} rokoch? Výsledok zaokrúhli na centy.": "On a placé ${@0}\\,€$ sur un compte au taux annuel de ${@1}\\,\\%$, les intérêts sont versés une fois par an et laissés sur le compte (on ne tient pas compte de l’impôt). Combien d’euros y aura-t-il sur le compte au bout de {@2} ans ? Arrondis le résultat au centime.",
  "Najmenšie celé číslo v ňom je ${@0}$.": "Le plus petit entier qu’il contient est ${@0}$.",
  "Najprv nájdi hodnoty $m$, pre ktoré je determinant $m\\cdot m-k\\cdot k$ nulový. Potom pre každú z nich dosaď $m$ a porovnaj rovnice.": "Trouve d’abord les valeurs de $m$ pour lesquelles le déterminant $m\\cdot m-k\\cdot k$ est nul. Remplace ensuite chacune d’elles et compare les équations.",
  "Najprv nájdi priesečníky, potom integruj rozdiel „horná mínus dolná“ funkcia.": "Trouve d’abord les points d’intersection, puis intègre la différence « fonction du haut moins fonction du bas ».",
  "Najprv rozhodni, či sú hodnoty slová alebo čísla. Pri číslach rozlíš počítanie (diskrétny) a meranie (spojitý).": "Décide d’abord si les valeurs sont des mots ou des nombres. Pour les nombres, distingue le comptage (discret) et la mesure (continu).",
  "Najprv vypočítaj stranu $s$ z pravouhlého trojuholníka s odvesnami $v$ a $R-r$. Povrch tvoria dve podstavy a plášť $\\pi s(R+r)$.": "Calcule d’abord la génératrice $s$ à partir du triangle rectangle de côtés de l’angle droit $v$ et $R-r$. L’aire totale est formée des deux bases et de la surface latérale $\\pi s(R+r)$.",
  "Najprv vypočítaj vnútornú funkciu: ${@0}({@1})$.": "Calcule d’abord la fonction intérieure : ${@0}({@1})$.",
  "Najčastejšie sa vyskytuje hodnota ${@0}$ (trikrát), ostatné hodnoty najviac dvakrát. Modus je ${@1}$.": "La valeur la plus fréquente est ${@0}$ (trois fois), les autres valeurs apparaissent au plus deux fois. Le mode est ${@1}$.",
  "Napríklad $f(1)={@0}$ a $f(-1)={@1}$; neplatí $f(-1)=f(1)$ ani $f(-1)=-f(1)$.": "Par exemple $f(1)={@0}$ et $f(-1)={@1}$ ; on n’a ni $f(-1)=f(1)$, ni $f(-1)=-f(1)$.",
  "Napíš rovnicu dotyčnice ku grafu funkcie $f(x)={@0}$ v bode s $x$-ovou súradnicou $x_0={@1}$ v tvare $y=kx+q$. Zadaj $k$ a $q$.": "Écris l’équation de la tangente à la courbe de la fonction $f(x)={@0}$ au point d’abscisse $x_0={@1}$ sous la forme $y=kx+q$. Saisis $k$ et $q$.",
  "Načrtni priamky a nájdi vrcholy oblasti ako priesečníky hraničných priamok. Oblasť je trojuholník.": "Esquisse les droites et trouve les sommets du domaine comme points d’intersection des droites frontières. Le domaine est un triangle.",
  "Nech $u={@0}$, $v=\\ln x$. Akú hodnotu má člen $u'v={@1}\\ln x$ v bode $1$?": "Soit $u={@0}$, $v=\\ln x$. Quelle est la valeur du terme $u'v={@1}\\ln x$ en $1$ ?",
  "Nech $u={@0}$, $v=\\mathrm{e}^x$. Akú hodnotu má člen $u'v$ v bode $0$?": "Soit $u={@0}$, $v=\\mathrm{e}^x$. Quelle est la valeur du terme $u'v$ en $0$ ?",
  "Nech $x$ je dĺžka strán kolmých na stenu. Strana rovnobežná so stenou má dĺžku ${@0}-2x$ a obsah je $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ pre $x={@4}$ a $S''=-4&lt;0$, ide o maximum. Rozmery sú ${@5}\\,\\text{m}$ a ${@6}\\,\\text{m}$, obsah ${@7}\\,\\text{m}^2$.": "Soit $x$ la longueur des côtés perpendiculaires au mur. Le côté parallèle au mur mesure ${@0}-2x$ et l’aire est $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ pour $x={@4}$ et $S''=-4&lt;0$, c’est un maximum. Les dimensions sont ${@5}\\,\\text{m}$ et ${@6}\\,\\text{m}$, l’aire ${@7}\\,\\text{m}^2$.",
  "Nepárna funkcia spĺňa $f(-x)=-f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Une fonction impaire vérifie $f(-x)=-f(x)$ pour tout $x$ de l’ensemble de définition. Remplace par exemple $x=1$ et $x=-1$ et compare.",
  "Newton-Leibnizova formula: {@0}": "Formule de Newton-Leibniz : {@0}",
  "Nezabudni na koeficient ${@0}$ v menovateli: výraz je $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.": "N’oublie pas le coefficient ${@0}$ au dénominateur : l’expression est $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.",
  "Nezabudni na prostredný člen $Rr$ v zátvorke: $R^2+Rr+r^2$.": "N’oublie pas le terme du milieu $Rr$ dans la parenthèse : $R^2+Rr+r^2$.",
  "Nezabudni na prostredný člen $a_1a_2$, teda $\\sqrt{S_1S_2}$.": "N’oublie pas le terme du milieu $a_1a_2$, c’est-à-dire $\\sqrt{S_1S_2}$.",
  "Nie sú násobkami seba, roviny sú rôznobežné.": "Ils ne sont pas multiples l’un de l’autre, les plans sont sécants.",
  "Niektoré písmená sa opakujú a ich výmenou nové slovo nevznikne. Vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Certaines lettres se répètent et les échanger ne crée pas de nouveau mot. Divise par les factorielles des nombres de lettres répétées.",
  "Nájdi inflexný bod funkcie $f(x)={@0}$. Zadaj jeho súradnice $x$ a $y$ (napr. 1; -4).": "Trouve le point d’inflexion de la fonction $f(x)={@0}$. Saisis ses coordonnées $x$ et $y$ (par ex. 1; -4).",
  "Nájdi korene derivácie $f'(x)={@0}$.": "Trouve les racines de la dérivée $f'(x)={@0}$.",
  "Nájdi primitívnu funkciu ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) a dosaď hranice.": "Trouve une primitive ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) et remplace les bornes.",
  "Nájdi stacionárne body funkcie, teda korene rovnice $f'(x)={@0}=0$.": "Trouve les points critiques de la fonction, c’est-à-dire les racines de l’équation $f'(x)={@0}=0$.",
  "O koľko percent sa {@0} zväčší? {@1}": "De combien de pour cent {@0} augmente-t-il (elle) ? {@1}",
  "Obe časti sú nepárne funkcie, preto aj ich súčet: $f(-x)=-f(x)$.": "Les deux parties sont des fonctions impaires, donc leur somme aussi : $f(-x)=-f(x)$.",
  "Objem": "Le volume",
  "Objem gule je $\\frac{4}{3}\\pi r^3$, nezabudni na koeficient $\\frac{4}{3}$.": "Le volume d’une boule est $\\frac{4}{3}\\pi r^3$, n’oublie pas le coefficient $\\frac{4}{3}$.",
  "Objem je $V(x)=x({@0}-2x)^2$. Pre ktoré $x$ z intervalu $(0; {@1})$ je $V'(x)=0$?": "Le volume est $V(x)=x({@0}-2x)^2$. Pour quel $x$ de l’intervalle $(0; {@1})$ a-t-on $V'(x)=0$ ?",
  "Objem je $V(x)=x({@0}-2x)^2$. Rozlož deriváciu na súčin $V'(x)=({@1}-2x)({@2}-cx)$. Aké je číslo $c$?": "Le volume est $V(x)=x({@0}-2x)^2$. Factorise la dérivée sous la forme $V'(x)=({@1}-2x)({@2}-cx)$. Quel est le nombre $c$ ?",
  "Objem kužeľa je tretina objemu valca s rovnakou podstavou a výškou. Objemy častí sčítaj.": "Le volume d’un cône est le tiers du volume du cylindre de même base et de même hauteur. Additionne les volumes des parties.",
  "Objem kužeľa nie je $\\pi r^2 w$, ale len jeho tretina.": "Le volume d’un cône n’est pas $\\pi r^2 w$, mais seulement son tiers.",
  "Objem materiálu je rozdiel objemov dvoch valcov s rovnakou výškou.": "Le volume de matière est la différence des volumes de deux cylindres de même hauteur.",
  "Objem polgule je polovica objemu gule, teda $\\frac{2}{3}\\pi r^3$. Objemy častí sčítaj.": "Le volume d’une demi-boule est la moitié du volume de la boule, soit $\\frac{2}{3}\\pi r^3$. Additionne les volumes des parties.",
  "Objem sa zachová: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, teda $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.": "Le volume se conserve : $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, donc $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.",
  "Obsah je $S(x)=x({@0}-2x)$, kde $x$ je strana kolmá na stenu. Pre aké $x$ je $S'(x)=0$?": "L’aire est $S(x)=x({@0}-2x)$, où $x$ est le côté perpendiculaire au mur. Pour quel $x$ a-t-on $S'(x)=0$ ?",
  "Obsah rezu: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.": "Aire de la section : $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.",
  "Obsah rovnostranného trojuholníka so stranou $a$ je $\\frac{\\sqrt3}{4}a^2$. Plášť hranola tvoria tri zhodné obdĺžniky.": "L’aire d’un triangle équilatéral de côté $a$ est $\\frac{\\sqrt3}{4}a^2$. La surface latérale du prisme est formée de trois rectangles identiques.",
  "Obsah trojuholníka je polovica súčinu základne a výšky. Nezabudni deliť dvoma.": "L’aire d’un triangle est la moitié du produit de la base par la hauteur. N’oublie pas de diviser par deux.",
  "Obsah vypočítaj z vektorov $\\vec{AB}$ a $\\vec{AC}$ (polovica absolútnej hodnoty determinantu), výšku potom zo vzorca $S=\\frac{c\\cdot v_c}{2}$.": "Calcule l’aire à partir des vecteurs $\\vec{AB}$ et $\\vec{AC}$ (moitié de la valeur absolue du déterminant), puis la hauteur avec la formule $S=\\frac{c\\cdot v_c}{2}$.",
  "Od objemu plného valca odčítame dutinu: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.": "On soustrait le creux du volume du cylindre plein : $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.",
  "Olovenú guľu s polomerom ${@0}\\,\\text{cm}$ pretavili na rovnaké guľôčky s polomerom ${@1}\\,\\text{cm}$. Koľko guľôčok vzniklo (bez strát materiálu)?": "Une boule de plomb de rayon ${@0}\\,\\text{cm}$ a été refondue en petites boules identiques de rayon ${@1}\\,\\text{cm}$. Combien de petites boules a-t-on obtenues (sans perte de matière) ?",
  "Opačný jav (obaja minú): ${@0}\\cdot {@1}={@2}$, teda $P=1-{@3}={@4}$.": "Événement contraire (les deux manquent la cible) : ${@0}\\cdot {@1}={@2}$, donc $P=1-{@3}={@4}$.",
  "Opačný jav je $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Preto $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.": "L’événement contraire est $X=0$ : $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Donc $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.",
  "Opačný jav „obe čierne“ má $\\binom{{@0}}{2}={@1}$ výberov, priaznivých je ${@2}-{@3}={@4}$.": "L’événement contraire « les deux noires » correspond à $\\binom{{@0}}{2}={@1}$ tirages, il y a ${@2}-{@3}={@4}$ tirages favorables.",
  "Opačný jav: šestka nepadne ani raz, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. Hľadaná pravdepodobnosť je $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.": "Événement contraire : on n’obtient aucun six, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. La probabilité cherchée est $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.",
  "Over tento zápis: dosaď $k=0$ a $k=1$ a skontroluj, či dostaneš riešenia rovnice. Over aj, či zápis nevynecháva niektoré riešenie z jednej periódy.": "Vérifie cette écriture : remplace $k=0$ et $k=1$ et contrôle si tu obtiens des solutions de l’équation. Vérifie aussi que l’écriture n’omet aucune solution d’une période.",
  "Označ $x$ stranu kolmú na stenu, vyjadri druhú stranu z dĺžky pletiva a obsah ako funkciu $x$. Potom hľadaj, kde je jej derivácia nulová.": "Note $x$ le côté perpendiculaire au mur, exprime l’autre côté à l’aide de la longueur du grillage et l’aire en fonction de $x$. Cherche ensuite où sa dérivée s’annule.",
  "Parabola $y={@0}$ a priamka $y={@1}$ majú dva spoločné body. Zadaj súradnice toho z nich, ktorý má menšiu $x$-ovú súradnicu (napr. -1; 4).": "La parabole $y={@0}$ et la droite $y={@1}$ ont deux points communs. Saisis les coordonnées de celui qui a la plus petite abscisse (par ex. -1; 4).",
  "Percentá sa nesčitujú. Koeficient $k={@0}$ umocni na {@1} a až potom preveď na percentá.": "Les pourcentages ne s’additionnent pas. Élève le coefficient $k={@0}$ au {@1}, et seulement ensuite convertis en pourcentage.",
  "Pletivo netreba na všetky štyri strany: stena tvorí jednu stranu, ohradiť treba len tri.": "Le grillage n’est pas nécessaire sur les quatre côtés : le mur forme un côté, il ne faut clôturer que les trois autres.",
  "Plášť tvoria tri obdĺžniky ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.": "La surface latérale est formée de trois rectangles ${@0}\\times {@1}$ : $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.",
  "Po dosadení $x={@0}$ vyjde výraz $\\frac{0}{0}$, preto čitateľa rozložíme: ${@1}={@2}{@3}$. Pre $x\\neq {@4}$ vykrátime a dostaneme $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.": "En remplaçant $x={@0}$, on obtient l’expression $\\frac{0}{0}$, on factorise donc le numérateur : ${@1}={@2}{@3}$. Pour $x\\neq {@4}$, on simplifie et on obtient $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.",
  "Po koľkých rokoch sa vklad prvýkrát aspoň {@0}?": "Au bout de combien d’années le dépôt a-t-il pour la première fois au moins {@0} ?",
  "Po odlogaritmovaní dostaneš $({@0})({@1})={@2}$. Zadaj korene tejto kvadratickej rovnice.": "En supprimant les logarithmes, tu obtiens $({@0})({@1})={@2}$. Saisis les racines de cette équation du second degré.",
  "Po príchode má zbor ${@0}$ členov, nový súčet je preto ${@1}\\cdot {@2}$.": "Après son arrivée, la chorale compte ${@0}$ membres, la nouvelle somme est donc ${@1}\\cdot {@2}$.",
  "Po substitúcii $t={@0} x$ dostaneš ${@1}=0$. Zadaj jej korene (zlomok napr. ako 1/2).": "Après le changement de variable $t={@0} x$, tu obtiens ${@1}=0$. Saisis ses racines (fraction par ex. 1/2).",
  "Po substitúcii $t={@0}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "Après le changement de variable $t={@0}$, résous l’équation ${@1}=0$. Saisis ses racines $t$.",
  "Po substitúcii $t={@0}^{x}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "Après le changement de variable $t={@0}^{x}$, résous l’équation ${@1}=0$. Saisis ses racines $t$.",
  "Po vybratí ${@0}$ pred zátvorku: pre ktoré $x$ z {@1} je ${@2}=0$?": "Après la mise en facteur de ${@0}$ : pour quels $x$ de {@1} a-t-on ${@2}=0$ ?",
  "Po vykrátení ostal výraz ${@0}$ a doňho ešte treba dosadiť $x={@1}$.": "Après simplification, il reste l’expression ${@0}$, dans laquelle il faut encore remplacer $x={@1}$.",
  "Po vykrátení ostane v menovateli $\\sqrt{x}+{@0}$, nie len $\\sqrt{x}$. Dosaď $x={@1}$ do celého súčtu.": "Après simplification, il reste au dénominateur $\\sqrt{x}+{@0}$, pas seulement $\\sqrt{x}$. Remplace $x={@1}$ dans toute la somme.",
  "Po vykrátení činiteľa ${@0}$ zostane ${@1}$. Akú hodnotu má tento výraz pre $x={@2}$?": "Après simplification par le facteur ${@0}$, il reste ${@1}$. Quelle est la valeur de cette expression pour $x={@2}$ ?",
  "Po výmene premenných máme $x={@0}$. Aký je koeficient $k$ pri $x$ vo vyjadrení $y=kx+q$?": "Après l’échange des variables, on a $x={@0}$. Quel est le coefficient $k$ de $x$ dans l’écriture $y=kx+q$ ?",
  "Podaní rúk je $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Z rovnice $\\frac{n(n-1)}{2}={@0}$ dostaneme $n^2-n-{@1}=0$, kladný koreň je $n={@2}$.": "Le nombre de poignées de main est $\\binom{n}{2}=\\frac{n(n-1)}{2}$. De l’équation $\\frac{n(n-1)}{2}={@0}$, on obtient $n^2-n-{@1}=0$, la racine positive est $n={@2}$.",
  "Podiel vedúcich koeficientov rozhoduje len pri rovnakom stupni. Tu má čitateľ nižší stupeň, takže po vydelení najvyššou mocninou menovateľa ide celý čitateľ k nule.": "Le quotient des coefficients dominants n’est décisif que pour des degrés égaux. Ici, le numérateur est de degré inférieur, donc après division par la plus haute puissance du dénominateur, tout le numérateur tend vers zéro.",
  "Podmienka $x&gt;0$. Substitúcia $t={@0}$: ${@1}=0$, teda $t_1={@2}$, $t_2={@3}$. Z ${@4}={@5}$ je $x={@6}^{{@7}}={@8}$ a z ${@9}={@10}$ je $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.": "Condition $x&gt;0$. Changement de variable $t={@0}$ : ${@1}=0$, donc $t_1={@2}$, $t_2={@3}$. De ${@4}={@5}$, on tire $x={@6}^{{@7}}={@8}$ et de ${@9}={@10}$, $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.",
  "Podmienky dávajú $x&gt;c$. Aké je číslo $c$?": "Les conditions donnent $x&gt;c$. Quel est le nombre $c$ ?",
  "Podmienky: ${@0}&gt;0$ a ${@1}&gt;0$, teda $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Korene sú ${@10}$ a ${@11}$; podmienku spĺňa len $x={@12}$. $K=\\{{@13}\\}$.": "Conditions : ${@0}&gt;0$ et ${@1}&gt;0$, donc $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Les racines sont ${@10}$ et ${@11}$ ; seul $x={@12}$ vérifie la condition. $K=\\{{@13}\\}$.",
  "Podstava je rovnostranný trojuholník, nie štvorec: jej obsah je $\\frac{\\sqrt3}{4}a^2$.": "La base est un triangle équilatéral, pas un carré : son aire est $\\frac{\\sqrt3}{4}a^2$.",
  "Podstava je rovnostranný trojuholník: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}": "La base est un triangle équilatéral : $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}",
  "Podľa Vietovho vzťahu je súčet koreňov $x_1+x_2=-p$, nie $p$. Pozor na znamienko.": "D’après la relation de Viète, la somme des racines est $x_1+x_2=-p$, pas $p$. Attention au signe.",
  "Polomer gule, vzdialenosť roviny od stredu a polomer rezu tvoria pravouhlý trojuholník (polomer gule je prepona).": "Le rayon de la boule, la distance du plan au centre et le rayon de la section forment un triangle rectangle (le rayon de la boule est l’hypoténuse).",
  "Polomer rezu: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}": "Rayon de la section : $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}",
  "Polož diskriminant rovný nule.": "Pose le discriminant égal à zéro.",
  "Pomocou $\\sin^2 x+\\cos^2 x=1$ prepíš rovnicu len na ${@0} x$.": "À l’aide de $\\sin^2 x+\\cos^2 x=1$, réécris l’équation uniquement avec ${@0} x$.",
  "Porovnaj aj hodnoty funkcie v krajných bodoch intervalu, globálny extrém môže byť práve tam.": "Compare aussi les valeurs de la fonction aux bornes de l’intervalle, l’extremum global peut justement s’y trouver.",
  "Porovnaj smery priamok. Ak nie sú rovnobežné, zisti, či ležia v jednej rovine (napr. v stene alebo uhlopriečnom reze kocky).": "Compare les directions des droites. Si elles ne sont pas parallèles, vérifie si elles sont dans un même plan (par ex. dans une face ou dans une section diagonale du cube).",
  "Porovnaj stupne čitateľa a menovateľa. Pri rovnakom stupni rozhodujú vedúce koeficienty.": "Compare les degrés du numérateur et du dénominateur. Pour des degrés égaux, ce sont les coefficients dominants qui décident.",
  "Porovnaj tieto hodnoty s hodnotami v stacionárnych bodoch vnútri intervalu. Aká je {@0} hodnota?": "Compare ces valeurs avec les valeurs aux points critiques à l’intérieur de l’intervalle. Quelle est la {@0} valeur ?",
  "Porovnaj vzdialenosť stredu od priamky s polomerom. Polomer je odmocnina z pravej strany rovnice kružnice, teda $r={@0}$, nie ${@1}$. Pozor aj na znamienka súradníc stredu.": "Compare la distance du centre à la droite avec le rayon. Le rayon est la racine carrée du membre de droite de l’équation du cercle, donc $r={@0}$, pas ${@1}$. Attention aussi aux signes des coordonnées du centre.",
  "Porovnáme pravé strany: ${@0}={@1} \\Rightarrow {@2}=0$, korene $x={@3}$ a $x={@4}$. Pre $x={@5}$ je $y={@6}\\cdot {@7}{@8}={@9}$. Priesečníky sú $[{@10}; {@11}]$ a $[{@12}; {@13}]$.": "On compare les membres de droite : ${@0}={@1} \\Rightarrow {@2}=0$, racines $x={@3}$ et $x={@4}$. Pour $x={@5}$, on a $y={@6}\\cdot {@7}{@8}={@9}$. Les points d’intersection sont $[{@10}; {@11}]$ et $[{@12}; {@13}]$.",
  "Potrebujeme $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, teda $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Zlogaritmujeme (logaritmus čísla menšieho ako 1 je záporný, znak sa otočí): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Najmenšie celé $n$ je ${@4}$.": "Il faut $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, donc $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. On prend le logarithme (le logarithme d’un nombre inférieur à 1 est négatif, le sens de l’inégalité change) : $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Le plus petit entier $n$ est ${@4}$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\ln x)'=\\frac{1}{x}$. Nezabudni, že $\\ln 1=0$.": "Utilise $(u\\cdot v)'=u'v+uv'$ et $(\\ln x)'=\\frac{1}{x}$. N’oublie pas que $\\ln 1=0$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\mathrm{e}^x)'=\\mathrm{e}^x$.": "Utilise $(u\\cdot v)'=u'v+uv'$ et $(\\mathrm{e}^x)'=\\mathrm{e}^x$.",
  "Použi $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.": "Utilise $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
  "Použi $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "Utilise $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Použi $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. V čitateli sa členy s $x$ odčítajú.": "Utilise $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. Au numérateur, les termes en $x$ se soustraient.",
  "Použi $\\sin 2x=2\\sin x\\cos x$, všetko prenes na jednu stranu a vyber spoločného činiteľa pred zátvorku. Nedeľ ním!": "Utilise $\\sin 2x=2\\sin x\\cos x$, fais tout passer d’un même côté et mets le facteur commun en évidence. Ne divise pas par lui !",
  "Použi opačný jav: pravdepodobnosť, že šestka nepadne v žiadnom z hodov, je $\\left(\\frac{5}{6}\\right)^n$.": "Utilise l’événement contraire : la probabilité de n’obtenir le six à aucun lancer est $\\left(\\frac{5}{6}\\right)^n$.",
  "Použi vzorec $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, kde $Q$ je bod priamky. Alebo nájdi trojuholník, v ktorom je hľadaná vzdialenosť výškou.": "Utilise la formule $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, où $Q$ est un point de la droite. Ou trouve un triangle dans lequel la distance cherchée est une hauteur.",
  "Povrch": "L’aire totale",
  "Povrch gule je ${@0}\\pi\\,\\text{cm}^2$. Jej objem sa dá zapísať ako $V=k\\pi\\,\\text{cm}^3$. Vypočítaj $k$.": "L’aire d’une sphère vaut ${@0}\\pi\\,\\text{cm}^2$. Le volume de la boule peut s’écrire $V=k\\pi\\,\\text{cm}^3$. Calcule $k$.",
  "Pozor na znamienko menovateľa: pre $x$ tesne {@0} od ${@1}$ je menovateľ ${@2}$ {@3}. Skombinuj ho so znamienkom čitateľa.": "Attention au signe du dénominateur : pour $x$ juste {@0} de ${@1}$, le dénominateur ${@2}$ est {@3}. Combine-le avec le signe du numérateur.",
  "Pozor, $R^2-r^2$ nie je to isté ako $(R-r)^2$. Odčítaj objemy dvoch valcov.": "Attention, $R^2-r^2$ n’est pas la même chose que $(R-r)^2$. Soustrais les volumes des deux cylindres.",
  "Pozor, $\\cos\\pi=-1$, nie $1$. Hodnoty primitívnej funkcie v hraniciach sa preto neodčítajú na nulu.": "Attention, $\\cos\\pi=-1$, pas $1$. Les valeurs de la primitive aux bornes ne s’annulent donc pas en se soustrayant.",
  "Pozor, $\\ln 1=0$, lebo $\\mathrm{e}^0=1$. Hodnota primitívnej funkcie v dolnej hranici je nulová.": "Attention, $\\ln 1=0$, car $\\mathrm{e}^0=1$. La valeur de la primitive à la borne inférieure est nulle.",
  "Pozor, $\\ln 1=0$, nie $1$ (lebo $\\mathrm{e}^0=1$). Prvý člen $u'v$ je preto v bode $1$ nulový.": "Attention, $\\ln 1=0$, pas $1$ (car $\\mathrm{e}^0=1$). Le premier terme $u'v$ est donc nul en $1$.",
  "Počet pokusov n": "Nombre d’épreuves n",
  "Počet uhlopriečok $n$-uholníka je $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (všetky spojnice vrcholov mínus strany).": "Le nombre de diagonales d’un polygone à $n$ côtés est $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (tous les segments joignant deux sommets moins les côtés).",
  "Počet usporiadaní $n$ rôznych prvkov je $n!$.": "Le nombre de rangements de $n$ éléments différents est $n!$.",
  "Počty sedadiel tvoria aritmetickú postupnosť s $a_1={@0}$, $d={@1}$. Súčet $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ vedie na kvadratickú nerovnicu ${@5}\\ge 0$. Kladný koreň je približne ${@6}$, preto $n={@7}$. Kontrola: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.": "Les nombres de places forment une suite arithmétique avec $a_1={@0}$, $d={@1}$. La somme $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ conduit à l’inéquation du second degré ${@5}\\ge 0$. La racine positive vaut environ ${@6}$, donc $n={@7}$. Vérification : $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.",
  "Počítal si v opačnom poradí. Pri $({@0})(x)$ sa najprv použije {@1} (vnútorná funkcia) a jej výsledok sa dosadí do {@2}.": "Tu as calculé dans l’ordre inverse. Pour $({@0})(x)$, on applique d’abord {@1} (fonction intérieure), puis on remplace son résultat dans {@2}.",
  "Pracuj so súčtami: súčet = priemer · počet. Porovnaj súčet pred príchodom a po príchode nového člena.": "Travaille avec les sommes : somme = moyenne · effectif. Compare la somme avant et après l’arrivée du nouveau membre.",
  "Pravdepodobnosti jednotlivých hodov sa nesčítavajú (pri 6 hodoch by vyšla istota). Použi opačný jav „ani raz“.": "Les probabilités des différents lancers ne s’additionnent pas (avec 6 lancers, on obtiendrait la certitude). Utilise l’événement contraire « aucune fois ».",
  "Pravdepodobnosti netrafenia sú ${@0}$ a ${@1}$. {@2}": "Les probabilités de manquer la cible sont ${@0}$ et ${@1}$. {@2}",
  "Pravdepodobnosť p": "Probabilité p",
  "Pravidelný trojboký hranol má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj jeho {@2}. {@3}": "Un prisme régulier à base triangulaire a une arête de base $a={@0}\\,\\text{cm}$ et une hauteur $v={@1}\\,\\text{cm}$. Calcule {@2}. {@3}",
  "Pravidelný štvorboký ihlan": "Pyramide régulière à base carrée",
  "Pravidelný štvorboký ihlan má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}.{@3}": "Une pyramide régulière à base carrée a une arête de base $a={@0}\\,\\text{cm}$ et une hauteur $v={@1}\\,\\text{cm}$. Calcule {@2}.{@3}",
  "Pravidelný štvorboký zrezaný ihlan má podstavné hrany $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho objem v $\\text{cm}^3$.{@3}": "Un tronc de pyramide régulière à base carrée a des arêtes de base $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ et une hauteur $v={@2}\\,\\text{cm}$. Calcule son volume en $\\text{cm}^3$.{@3}",
  "Pre $x\\to {@0}^{{@1}}$ je $x {@2} {@3}$, menovateľ ${@4}$ je teda {@5} a blíži sa k nule. Čitateľ ${@6}$ je {@7}, preto zlomok rastie v absolútnej hodnote nad všetky medze so znamienkom {@8}: limita je {@9}.": "Pour $x\\to {@0}^{{@1}}$, on a $x {@2} {@3}$, le dénominateur ${@4}$ est donc {@5} et tend vers zéro. Le numérateur ${@6}$ est {@7}, donc la fraction croît en valeur absolue au-delà de toute borne avec le signe {@8} : la limite est {@9}.",
  "Pre $x\\to\\infty$ nerozhodujú absolútne členy, ale členy s najvyššou mocninou $x$.": "Pour $x\\to\\infty$, ce ne sont pas les termes constants qui décident, mais les termes de plus haut degré en $x$.",
  "Pre $x\\to\\pm\\infty$ rozhodujú koeficienty pri $x$, nie absolútne členy.": "Pour $x\\to\\pm\\infty$, ce sont les coefficients de $x$ qui décident, pas les termes constants.",
  "Pre akú hodnotu parametra $c$ má rovnica $x^2{@0}+c=0$ dvojnásobný koreň?": "Pour quelle valeur du paramètre $c$ l’équation $x^2{@0}+c=0$ a-t-elle une racine double ?",
  "Pre binomické rozdelenie je $E(X)=np$ a $D(X)=np(1-p)$.": "Pour la loi binomiale, $E(X)=np$ et $D(X)=np(1-p)$.",
  "Pre funkciu $f(x)=({@0})\\,\\mathrm{e}^{x}$ vypočítaj $f'(0)$.": "Pour la fonction $f(x)=({@0})\\,\\mathrm{e}^{x}$, calcule $f'(0)$.",
  "Pre funkciu $f(x)=({@0})\\ln x$ vypočítaj $f'(1)$.": "Pour la fonction $f(x)=({@0})\\ln x$, calcule $f'(1)$.",
  "Pre funkciu $f(x)=({@0})^{{@1}}$ vypočítaj $f'({@2})$.": "Pour la fonction $f(x)=({@0})^{{@1}}$, calcule $f'({@2})$.",
  "Pre funkciu $f(x)=\\dfrac{{@0}}{{@1}}$ vypočítaj $f'({@2})$. Výsledok zadaj ako celé číslo alebo zlomok.": "Pour la fonction $f(x)=\\dfrac{{@0}}{{@1}}$, calcule $f'({@2})$. Saisis le résultat sous forme d’entier ou de fraction.",
  "Pre funkciu $f(x)={@0}{@1}$ vypočítaj $f'(0)$.": "Pour la fonction $f(x)={@0}{@1}$, calcule $f'(0)$.",
  "Pre korene z intervalu $\\langle -1; 1\\rangle$ nájdi všetky $x$ v stupňoch z {@0}.": "Pour les racines de l’intervalle $\\langle -1; 1\\rangle$, trouve tous les $x$ en degrés dans {@0}.",
  "Pre ktoré $x$ je nulová zátvorka ${@0} {@1}$?": "Pour quels $x$ la parenthèse ${@0} {@1}$ est-elle nulle ?",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2+px+{@0}=0$ dvojnásobný koreň? Zadaj všetky hodnoty oddelené bodkočiarkou.": "Pour quelles valeurs du paramètre $p$ l’équation $x^2+px+{@0}=0$ a-t-elle une racine double ? Saisis toutes les valeurs séparées par un point-virgule.",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2{@0}+p=0$ {@1}?": "Pour quelles valeurs du paramètre $p$ l’équation $x^2{@0}+p=0$ a-t-elle {@1} ?",
  "Pre zrezaný ihlan platí $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; pri štvorcových podstavách je $\\sqrt{S_1S_2}=a_1a_2$.": "Pour un tronc de pyramide, $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$ ; avec des bases carrées, $\\sqrt{S_1S_2}=a_1a_2$.",
  "Pred určením mediánu treba údaje usporiadať podľa veľkosti.": "Avant de déterminer la médiane, il faut ranger les données par ordre de grandeur.",
  "Predsedu vyberáš z $n$ ľudí, podpredsedu už len zo zvyšných, pokladníka zo zvyšných ďalej.": "Tu choisis le président parmi $n$ personnes, le vice-président parmi les personnes restantes, le trésorier parmi celles qui restent ensuite.",
  "Predstav si rovinu ako rez kockou. Priamka v nej leží, ak v nej ležia dva jej body; je rovnobežná, ak je rovnobežná s niektorou priamkou roviny.": "Imagine le plan comme une section du cube. Une droite est dans le plan si deux de ses points y sont ; elle lui est parallèle si elle est parallèle à une droite du plan.",
  "Predstav si všetky známky zoradené od najlepšej. Medián je prostredná hodnota (pri párnom počte priemer dvoch prostredných).": "Imagine toutes les notes rangées de la meilleure à la moins bonne. La médiane est la valeur du milieu (pour un effectif pair, la moyenne des deux valeurs du milieu).",
  "Pri $(f\\circ g)(x)=f(g(x))$ počítaš najprv vnútornú funkciu $g$, jej výsledok dosadíš do $f$.": "Pour $(f\\circ g)(x)=f(g(x))$, tu calcules d’abord la fonction intérieure $g$, puis tu remplaces son résultat dans $f$.",
  "Pri derivovaní mocniny sa exponent zníži o jedna: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.": "En dérivant une puissance, l’exposant diminue de un : $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.",
  "Pri lineárnej substitúcii treba výsledok vydeliť koeficientom pri $x$, teda číslom ${@0}$.": "Avec un changement de variable linéaire, il faut diviser le résultat par le coefficient de $x$, c’est-à-dire par ${@0}$.",
  "Pri nezávislých javoch sa pravdepodobnosti súčasného nastania násobia. Pri „aspoň jeden“ použi opačný jav.": "Pour des événements indépendants, les probabilités de réalisation simultanée se multiplient. Pour « au moins un », utilise l’événement contraire.",
  "Pri okrúhlom stole sú rozsadenia, ktoré sa líšia len otočením, rovnaké. Zafixuj jedného človeka.": "Autour d’une table ronde, les dispositions qui ne diffèrent que par une rotation sont identiques. Fixe une personne.",
  "Pri podobnosti s koeficientom $k$ sa {@0}. Výsledný násobok preveď na percentá.": "Dans une similitude de rapport $k$, {@0}. Convertis le coefficient obtenu en pourcentage.",
  "Pri pretavení sa zachováva objem. Pomer objemov podobných telies je tretia mocnina pomeru dĺžok.": "Lors de la refonte, le volume se conserve. Le rapport des volumes de solides semblables est le cube du rapport des longueurs.",
  "Pri rovnej stene chceme ohradiť obdĺžnikový pozemok, stena tvorí jednu jeho stranu. Máme ${@0}\\,\\text{m}$ pletiva. {@1}": "Le long d’un mur droit, on veut clôturer un terrain rectangulaire dont le mur forme un côté. On dispose de ${@0}\\,\\text{m}$ de grillage. {@1}",
  "Pri strane odstrihnutého štvorca $x$ má krabica dno $({@0}-2x)^2$ a výšku $x$: $V(x)=x({@1}-2x)^2$ pre $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, v intervale je nulová len pre $x={@7}$ (tam sa mení znamienko z $+$ na $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.": "Pour un côté $x$ du carré découpé, la boîte a pour fond $({@0}-2x)^2$ et pour hauteur $x$ : $V(x)=x({@1}-2x)^2$ pour $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, dans l’intervalle elle ne s’annule que pour $x={@7}$ (le signe y passe de $+$ à $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.",
  "Pri vyjadrení $y$ treba číslom ${@0}$ vydeliť celú pravú stranu, teda aj absolútny člen.": "Pour exprimer $y$, il faut diviser par ${@0}$ tout le membre de droite, y compris le terme constant.",
  "Pri zloženej funkcii násob deriváciou vnútra: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "Pour une fonction composée, multiplie par la dérivée de l’intérieur : $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Priamka $p: {@0}=0$ pretína kružnicu $k: {@1}$ v dvoch bodoch. Zadaj $x$-ové súradnice oboch priesečníkov oddelené bodkočiarkou.": "La droite $p: {@0}=0$ coupe le cercle $k: {@1}$ en deux points. Saisis les abscisses des deux points d’intersection séparées par un point-virgule.",
  "Priamka je s rovinou rovnobežná, len ak je jej smerový vektor kolmý na normálový vektor roviny ($\\vec u\\cdot\\vec n=0$). Vypočítaj tento skalárny súčin.": "Une droite est parallèle à un plan seulement si son vecteur directeur est perpendiculaire au vecteur normal du plan ($\\vec u\\cdot\\vec n=0$). Calcule ce produit scalaire.",
  "Priamka leží v rovine, len ak v nej ležia dva jej body. Over oba koncové body.": "Une droite est dans un plan seulement si deux de ses points y sont. Vérifie les deux extrémités.",
  "Priamka pretína rovinu, len ak $\\vec u\\cdot\\vec n\\neq 0$. Vypočítaj skalárny súčin smerového a normálového vektora.": "Une droite coupe un plan seulement si $\\vec u\\cdot\\vec n\\neq 0$. Calcule le produit scalaire du vecteur directeur et du vecteur normal.",
  "Priamky $y={@0}$ a $y={@1}$ pretínajú os $x$ v bodoch $[{@2}; 0]$ a $[{@3}; 0]$ a navzájom sa pretínajú v bode $[{@4}; {@5}]$. Oblasť je trojuholník so základňou ${@6}$ a výškou ${@7}$, jeho obsah je $\\frac{{@8}\\cdot {@9}}{2}={@10}$.": "Les droites $y={@0}$ et $y={@1}$ coupent l’axe $x$ aux points $[{@2}; 0]$ et $[{@3}; 0]$ et se coupent au point $[{@4}; {@5}]$. Le domaine est un triangle de base ${@6}$ et de hauteur ${@7}$, son aire est $\\frac{{@8}\\cdot {@9}}{2}={@10}$.",
  "Priaznivé dvojice: {@0} — spolu ${@1}$.": "Couples favorables : {@0} — soit ${@1}$ au total.",
  "Priaznivé: $\\binom{{@0}}{2}={@1}$.": "Cas favorables : $\\binom{{@0}}{2}={@1}$.",
  "Priaznivé: ${@0}\\cdot {@1}={@2}$ (bielu a čiernu vyberáme nezávisle).": "Cas favorables : ${@0}\\cdot {@1}={@2}$ (on choisit la boule blanche et la noire indépendamment).",
  "Priemer z tabuľky početností je vážený: každú známku vynásob počtom žiakov, ktorí ju dostali.": "La moyenne d’un tableau d’effectifs est pondérée : multiplie chaque note par le nombre d’élèves qui l’ont obtenue.",
  "Priemerný vek {@0} členov speváckeho zboru je ${@1}$ rokov. Keď do zboru pribudol nový člen, priemerný vek sa {@2} na ${@3}$ rokov. Koľko rokov má nový člen?": "L’âge moyen des {@0} membres d’une chorale est de ${@1}$ ans. Quand un nouveau membre a rejoint la chorale, l’âge moyen a {@2} et vaut maintenant ${@3}$ ans. Quel âge a le nouveau membre ?",
  "Priesečníky s osou $x$: ${@0}-x^2=0$, teda $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.": "Points d’intersection avec l’axe $x$ : ${@0}-x^2=0$, donc $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.",
  "Priesečníky sú $x=0$ a ešte jeden bod. Aké je jeho $x$?": "Les points d’intersection sont $x=0$ et un autre point. Quelle est son abscisse $x$ ?",
  "Priesečníky: $x^2={@0}$, teda $x=0$ a $x={@1}$. Na $\\langle 0; {@2}\\rangle$ leží priamka nad parabolou. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.": "Points d’intersection : $x^2={@0}$, donc $x=0$ et $x={@1}$. Sur $\\langle 0; {@2}\\rangle$, la droite est au-dessus de la parabole. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.",
  "Primitívna funkcia je $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Vypočítaj $F(1)$. Zadaj zlomok alebo celé číslo.": "Une primitive est $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Calcule $F(1)$. Saisis une fraction ou un entier.",
  "Primitívna funkcia je $F(x)={@0}$. Vypočítaj $F({@1})$.": "Une primitive est $F(x)={@0}$. Calcule $F({@1})$.",
  "Primitívna funkcia je $F(x)={@0}x-\\frac{x^3}{3}$. Vypočítaj $F({@1})$. Zadaj zlomok alebo celé číslo.": "Une primitive est $F(x)={@0}x-\\frac{x^3}{3}$. Calcule $F({@1})$. Saisis une fraction ou un entier.",
  "Prvá nerovnica má riešenie $x&gt;c$. Aké je číslo $c$?": "La première inéquation a pour solution $x&gt;c$. Quel est le nombre $c$ ?",
  "Prvá nerovnica: ${@0} {@1} {@2}$, po delení číslom ${@3}$ {@4}$x&gt;{@5}$. Druhá: ${@6} {@7} {@8}$, odtiaľ {@9}$x\\le {@10}$. Prienik je $({@11}; {@12}\\rangle$. {@13}": "Première inéquation : ${@0} {@1} {@2}$, après division par ${@3}$ {@4}$x&gt;{@5}$. Deuxième : ${@6} {@7} {@8}$, d’où {@9}$x\\le {@10}$. L’intersection est $({@11}; {@12}\\rangle$. {@13}",
  "Práve jeden môže byť prvý aj druhý strelec. Sčítaj pravdepodobnosti oboch možností.": "Celui qui atteint la cible peut être le premier ou le second tireur. Additionne les probabilités des deux possibilités.",
  "Párna funkcia spĺňa $f(-x)=f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Une fonction paire vérifie $f(-x)=f(x)$ pour tout $x$ de l’ensemble de définition. Remplace par exemple $x=1$ et $x=-1$ et compare.",
  "RADAR": "RADAR",
  "Relatívna početnosť je $\\frac{n_i}{n}$, v percentách ju vynásob číslom 100.": "La fréquence est $\\frac{n_i}{n}$ ; en pourcentage, multiplie-la par 100.",
  "Rez nemá polomer gule. Polomer rezu $\\rho$ najprv vypočítaj z pravouhlého trojuholníka.": "La section n’a pas le rayon de la boule. Calcule d’abord le rayon de la section $\\rho$ à partir d’un triangle rectangle.",
  "Riešime ${@0}^{{@1}}{@2}={@3}$. Čomu sa rovná mocnina ${@4}^{{@5}}$?": "On résout ${@0}^{{@1}}{@2}={@3}$. À quoi est égale la puissance ${@4}^{{@5}}$ ?",
  "Rotačný kužeľ má polomer podstavy $r={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}. {@3}": "Un cône de révolution a un rayon de base $r={@0}\\,\\text{cm}$ et une hauteur $v={@1}\\,\\text{cm}$. Calcule {@2}. {@3}",
  "Rovina $\\rho: {@0}+d=0$ prechádza bodom $P{@1}$. Vypočítaj $d$.": "Le plan $\\rho: {@0}+d=0$ passe par le point $P{@1}$. Calcule $d$.",
  "Rovina ${@0}$ má normálový vektor $\\vec{n}={@1}$ a rovnicu ${@2}+d=0$. Vypočítaj $d$.": "Le plan ${@0}$ a pour vecteur normal $\\vec{n}={@1}$ et pour équation ${@2}+d=0$. Calcule $d$.",
  "Rovnica $x^2+px{@0}=0$ má koreň $x_1={@1}$. Urči parameter $p$ a druhý koreň $x_2$ (zadaj ich v tomto poradí, napr. -5; 3).": "L’équation $x^2+px{@0}=0$ a pour racine $x_1={@1}$. Détermine le paramètre $p$ et la deuxième racine $x_2$ (saisis-les dans cet ordre, par ex. -5; 3).",
  "Rovnicu si zrejme vydelil výrazom ${@0}$ a stratil si riešenia, v ktorých je nulový. Vyber ho pred zátvorku.": "Tu as sans doute divisé l’équation par ${@0}$ et perdu les solutions où cette expression est nulle. Mets-la en facteur.",
  "Rovnobežné priamky majú smerové vektory, ktoré sú násobkami seba. Porovnaj smerové vektory.": "Des droites parallèles ont des vecteurs directeurs colinéaires. Compare les vecteurs directeurs.",
  "Rovnobežné roviny majú normálové vektory, ktoré sú násobkami seba. Porovnaj normálové vektory.": "Des plans parallèles ont des vecteurs normaux colinéaires. Compare les vecteurs normaux.",
  "Rozdelíme prípady podľa poslednej cifry (musí byť {@0}); prvá cifra nesmie byť nula{@1}: {@2}. Spolu ${@3}$.": "On distingue les cas selon le dernier chiffre (il doit être {@0}) ; le premier chiffre ne doit pas être zéro{@1} : {@2}. Au total ${@3}$.",
  "Rozlož $f'(x)$ na súčin, nájdi nulové body a zisti, kde derivácia mení znamienko.": "Factorise $f'(x)$, trouve ses zéros et détermine où la dérivée change de signe.",
  "Rozptyl binomického rozdelenia je $np(1-p)$, nezabudni na činiteľ $1-p$.": "La variance de la loi binomiale est $np(1-p)$, n’oublie pas le facteur $1-p$.",
  "Rozpätie je rozdiel najväčšej a najmenšej hodnoty, nie poslednej a prvej hodnoty v zápise.": "L’étendue est la différence entre la plus grande et la plus petite valeur, pas entre la dernière et la première valeur de la liste.",
  "Rozsadenia, ktoré sa líšia len otočením stola, sú rovnaké. Každé si takto započítal {@0}-krát.": "Les dispositions qui ne diffèrent que par une rotation de la table sont identiques. Tu as compté chacune d’elles {@0} fois.",
  "Rozsah súboru $n={@0}={@1}$. Relatívna početnosť: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}": "Effectif total $n={@0}={@1}$. Fréquence : $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}",
  "Rôznobežné priamky majú spoločný bod, a teda ležia v jednej rovine. Nájdeš takú rovinu?": "Des droites sécantes ont un point commun et sont donc dans un même plan. Trouves-tu un tel plan ?",
  "Rôznobežné roviny majú normálové vektory, ktoré nie sú násobkami seba. Porovnaj normálové vektory.": "Des plans sécants ont des vecteurs normaux non colinéaires. Compare les vecteurs normaux.",
  "Rúra má tvar dutého valca s vonkajším polomerom ${@0}\\,\\text{cm}$, vnútorným polomerom ${@1}\\,\\text{cm}$ a dĺžkou ${@2}\\,\\text{cm}$. Vypočítaj objem materiálu v $\\text{cm}^3$. {@3}": "Un tuyau a la forme d’un cylindre creux de rayon extérieur ${@0}\\,\\text{cm}$, de rayon intérieur ${@1}\\,\\text{cm}$ et de longueur ${@2}\\,\\text{cm}$. Calcule le volume de matière en $\\text{cm}^3$. {@3}",
  "S; v_c": "S; v_c",
  "Slovo má {@0} písmen, opakujú sa {@1}. Ide o permutácie s opakovaním: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.": "Le mot a {@0} lettres, certaines se répètent : {@1}. Il s’agit de permutations avec répétition : $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.",
  "Smernica dotyčnice je $f'(x_0)$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a uprav.": "Le coefficient directeur de la tangente est $f'(x_0)$. Remplace dans $y=f(x_0)+f'(x_0)(x-x_0)$ et simplifie.",
  "Smerové vektory $\\vec{{@0}}={@1}$ a $\\vec{{@2}}={@3}$ sú násobkami seba a bod ${@4}$ na priamke ${@5}$ neleží, priamky sú rovnobežné.": "Les vecteurs directeurs $\\vec{{@0}}={@1}$ et $\\vec{{@2}}={@3}$ sont colinéaires et le point ${@4}$ n’est pas sur la droite ${@5}$, les droites sont strictement parallèles.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, priamky však ležia v jednej rovine a pretínajú sa v bode ${@2}$. Sú rôznobežné.": "Les vecteurs directeurs ${@0}$ et ${@1}$ ne sont pas colinéaires, mais les droites sont dans un même plan et se coupent au point ${@2}$. Elles sont sécantes.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, takže priamky nie sú rovnobežné; neležia ani v jednej rovine, preto nemajú spoločný bod. Sú mimobežné.": "Les vecteurs directeurs ${@0}$ et ${@1}$ ne sont pas colinéaires, les droites ne sont donc pas parallèles ; elles ne sont pas non plus dans un même plan, donc elles n’ont pas de point commun. Elles sont non coplanaires.",
  "Spolok má {@0} členov. Koľkými spôsobmi môžu zvoliť predsedu, podpredsedu a pokladníka (jedna osoba zastáva najviac jednu funkciu)?": "Une association compte {@0} membres. De combien de façons peut-on élire un président, un vice-président et un trésorier (une personne occupe au plus une fonction) ?",
  "Spočítaj trojice kombináciami a využi opačný jav „samí chlapci“.": "Compte les groupes de trois avec des combinaisons et utilise l’événement contraire « uniquement des garçons ».",
  "Stenová výška: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}": "Apothème : $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}",
  "Strana kužeľa $s$ je prepona pravouhlého trojuholníka s odvesnami $r$ a $v$.": "La génératrice $s$ du cône est l’hypoténuse d’un triangle rectangle de côtés de l’angle droit $r$ et $v$.",
  "Strana kužeľa: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.": "Génératrice : $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.",
  "Strana: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.": "Génératrice : $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.",
  "Strany označíme $a-d$, $a$, $a+d$ (prepona je najdlhšia). Z obvodu $3a={@0}$, teda $a={@1}$. Pytagorova veta: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Strany sú ${@8}$, ${@9}$, ${@10}$ cm{@11}.": "On note les côtés $a-d$, $a$, $a+d$ (l’hypoténuse est le plus long). Du périmètre $3a={@0}$, on tire $a={@1}$. Théorème de Pythagore : $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Les côtés mesurent ${@8}$, ${@9}$, ${@10}$ cm{@11}.",
  "Strany sú $a-d$, $a$, $a+d$. Z obvodu vypočítaj $a$.": "Les côtés sont $a-d$, $a$, $a+d$. Calcule $a$ à partir du périmètre.",
  "Strany zapíš ako $a-d$, $a$, $a+d$. Obvod dá $a$, Pytagorova veta potom diferenciu $d$.": "Écris les côtés sous la forme $a-d$, $a$, $a+d$. Le périmètre donne $a$, puis le théorème de Pythagore donne la raison $d$.",
  "Stred je $S[{@0}; {@1}]$ a vektor $\\vec{ST}=({@2}; {@3})$ je kolmý na dotyčnicu, je to jej normálový vektor — preto má rovnica tvar ${@4}+c=0$. Dosadíme $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, teda $c={@9}$.": "Le centre est $S[{@0}; {@1}]$ et le vecteur $\\vec{ST}=({@2}; {@3})$ est perpendiculaire à la tangente, c’est son vecteur normal — l’équation est donc de la forme ${@4}+c=0$. On remplace $T$ : ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, donc $c={@9}$.",
  "Stred kružnice je $S[{@0}; {@1}]$, polomer $r={@2}$. Vzdialenosť stredu od priamky: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Keďže $d{@10}r$, priamka je {@11}.": "Le centre du cercle est $S[{@0}; {@1}]$, le rayon $r={@2}$. Distance du centre à la droite : $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Comme $d{@10}r$, la droite est {@11}.",
  "Stredový uhol: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.": "Angle au centre : $f\\cdot 360^\\circ\\approx {@0}^\\circ$.",
  "Stĺpcový graf známok": "Diagramme en bâtons des notes",
  "Stĺpcový graf známok v triede": "Diagramme en bâtons des notes de la classe",
  "Substitúcia $u={@0}$ (alebo vzorec $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): primitívna funkcia je $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.": "Changement de variable $u={@0}$ (ou formule $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$) : une primitive est $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.",
  "Sú násobkami seba, roviny sú rovnobežné; bod ${@0}$ {@1} ${@2}$, preto sú roviny {@3}.": "Ils sont colinéaires, les plans sont parallèles ; le point ${@0}$ {@1} ${@2}$, donc la position des plans est : {@3}.",
  "Súradnice bodu $P$ musia vyhovovať rovnici: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, teda ${@6}+d=0$ a $d={@7}$.": "Les coordonnées du point $P$ doivent vérifier l’équation : ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, donc ${@6}+d=0$ et $d={@7}$.",
  "Sústava nerovníc ${@0}$ a ${@1}$ má riešenie v $\\mathbb{R}$. {@2}": "Le système d’inéquations ${@0}$ et ${@1}$ a des solutions dans $\\mathbb{R}$. {@2}",
  "Sústava rovníc s parametrom $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Pre ktorú hodnotu $m$ {@4}?": "Système d’équations à paramètre $m$ : $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Pour quelle valeur de $m$ {@4} ?",
  "Súčet logaritmov je logaritmus súčinu: $\\log_2 u+\\log_2 v=\\log_2(uv)$, nie $\\log_2(u+v)$.": "La somme de logarithmes est le logarithme du produit : $\\log_2 u+\\log_2 v=\\log_2(uv)$, pas $\\log_2(u+v)$.",
  "Súčet s $d$ má byť nula. Koľko je $d$?": "La somme avec $d$ doit être nulle. Combien vaut $d$ ?",
  "Súčet vekov pôvodných členov je ${@0}\\cdot {@1}={@2}$. Po príchode je súčet vekov ${@3}\\cdot {@4}={@5}$. Nový člen má ${@6}-{@7}={@8}$ rokov.": "La somme des âges des membres initiaux est ${@0}\\cdot {@1}={@2}$. Après l’arrivée, la somme des âges est ${@3}\\cdot {@4}={@5}$. Le nouveau membre a ${@6}-{@7}={@8}$ ans.",
  "Súčet známok treba deliť počtom žiakov $n$, nie počtom rôznych známok.": "Il faut diviser la somme des notes par le nombre d’élèves $n$, pas par le nombre de notes différentes.",
  "Súčet štvorcov odchýlok delíme počtom údajov $n={@0}$, nie číslom $n-1$ (tak je rozptyl definovaný v teórii).": "On divise la somme des carrés des écarts par le nombre de données $n={@0}$, pas par $n-1$ (c’est ainsi que la variance est définie dans le cours).",
  "Súčin dvoch nepárnych funkcií je párny: $(-x)\\sin(-x)=x\\sin x$.": "Le produit de deux fonctions impaires est pair : $(-x)\\sin(-x)=x\\sin x$.",
  "Súčin je nenulový, priamka rovinu pretína.": "Le produit est non nul, la droite coupe le plan.",
  "Súčin je nepárny len vtedy, keď sú obe čísla nepárne: $3\\cdot 3=9$ výsledkov. Priaznivých je $36-9=27$.": "Le produit n’est impair que si les deux nombres sont impairs : $3\\cdot 3=9$ résultats. Il y a $36-9=27$ cas favorables.",
  "Súčin je nulový, priamka je s rovinou rovnobežná; bod ${@0}$ {@1}.": "Le produit est nul, la droite est parallèle au plan ; le point ${@0}$ {@1}.",
  "Súčin koreňov je $x_1x_2={@0}$. Aký je druhý koreň $x_2$?": "Le produit des racines est $x_1x_2={@0}$. Quelle est la deuxième racine $x_2$ ?",
  "Tabuľka": "Le tableau",
  "Takto by to bolo pri jednoduchom úročení. Pri zloženom sa úročia aj pripísané úroky, suma sa každý rok násobí.": "Ce serait le cas avec des intérêts simples. Avec des intérêts composés, les intérêts versés rapportent aussi des intérêts, la somme est multipliée chaque année.",
  "Takto by to bolo pri jednoduchom úročení. Úroky ostávajú na účte a ďalší rok sa úročia tiež, suma sa každý rok násobí.": "Ce serait le cas avec des intérêts simples. Les intérêts restent sur le compte et rapportent aussi des intérêts l’année suivante, la somme est multipliée chaque année.",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{dm}$ a výškou ${@1}\\,\\text{dm}$, na ktorý je nasadený kužeľ s rovnakou podstavou a výškou ${@2}\\,\\text{dm}$. Vypočítaj objem telesa v $\\text{dm}^3$. {@3}": "Un solide est formé d’un cylindre de rayon ${@0}\\,\\text{dm}$ et de hauteur ${@1}\\,\\text{dm}$, surmonté d’un cône de même base et de hauteur ${@2}\\,\\text{dm}$. Calcule le volume du solide en $\\text{dm}^3$. {@3}",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{m}$ a výškou ${@1}\\,\\text{m}$, na ktorého hornej podstave je polguľa s rovnakým polomerom. Vypočítaj objem telesa v $\\text{m}^3$. {@2}": "Un solide est formé d’un cylindre de rayon ${@0}\\,\\text{m}$ et de hauteur ${@1}\\,\\text{m}$, dont la base supérieure porte une demi-boule de même rayon. Calcule le volume du solide en $\\text{m}^3$. {@2}",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "C’est le carré de la distance. Extrais encore la racine du résultat.",
  "To je druhý spoločný bod. Pýtame sa na ten s menšou $x$-ovou súradnicou.": "C’est l’autre point commun. On demande celui qui a la plus petite abscisse.",
  "To je druhý stacionárny bod, v ňom má funkcia lokálne {@0}. Pri maxime mení $f'$ znamienko z $+$ na $-$, pri minime z $-$ na $+$.": "C’est l’autre point critique, la fonction y a un {@0} local. Pour un maximum, $f'$ passe de $+$ à $-$, pour un minimum de $-$ à $+$.",
  "To je dĺžka strany kolmej na stenu. Pýtame sa na stranu rovnobežnú so stenou, jej dĺžka je ${@0}-2x$.": "C’est la longueur du côté perpendiculaire au mur. On demande le côté parallèle au mur, sa longueur est ${@0}-2x$.",
  "To je len plášť ihlana. Povrch zahŕňa aj štvorcovú podstavu.": "Ce n’est que l’aire latérale de la pyramide. L’aire totale comprend aussi la base carrée.",
  "To je len plášť kužeľa. Povrch zahŕňa aj kruhovú podstavu $\\pi r^2$.": "Ce n’est que l’aire latérale du cône. L’aire totale comprend aussi la base circulaire $\\pi r^2$.",
  "To je len plášť. Povrch zahŕňa aj obe kruhové podstavy.": "Ce n’est que l’aire latérale. L’aire totale comprend aussi les deux bases circulaires.",
  "To je nový priemerný vek. Pracuj so súčtami vekov: súčet = priemer · počet.": "C’est le nouvel âge moyen. Travaille avec les sommes des âges : somme = moyenne · effectif.",
  "To je objem hranola s rovnakou podstavou a výškou. Objem ihlana je jeho tretina.": "C’est le volume du prisme de même base et de même hauteur. Le volume de la pyramide en est le tiers.",
  "To je objem valca. Objem kužeľa je jeho tretina.": "C’est le volume du cylindre. Le volume du cône en est le tiers.",
  "To je obsah pod parabolou. Útvar je medzi dvoma krivkami, integruj rozdiel „horná mínus dolná“.": "C’est l’aire sous la parabole. La figure est entre deux courbes, intègre la différence « haut moins bas ».",
  "To je obsah pod priamkou. Od neho ešte treba odčítať obsah pod parabolou.": "C’est l’aire sous la droite. Il faut encore en soustraire l’aire sous la parabole.",
  "To je pomer polomerov. Pri pretavení sa zachováva objem a objem rastie s treťou mocninou polomeru.": "C’est le rapport des rayons. Lors de la refonte, le volume se conserve et le volume croît comme le cube du rayon.",
  "To je početnosť najčastejšej hodnoty. Modus je samotná hodnota, ktorá sa vyskytuje najčastejšie.": "C’est l’effectif de la valeur la plus fréquente. Le mode est la valeur elle-même qui apparaît le plus souvent.",
  "To je pravdepodobnosť opačného javu $X=0$. Odpočítaj ju od jednotky.": "C’est la probabilité de l’événement contraire $X=0$. Soustrais-la de un.",
  "To je pravdepodobnosť opačného javu, že sa vyberú len chlapci. Odpočítaj ju od jednotky.": "C’est la probabilité de l’événement contraire, à savoir qu’on ne choisisse que des garçons. Soustrais-la de un.",
  "To je pravdepodobnosť opačného javu, že súčin je nepárny. Odpočítaj ju od jednotky.": "C’est la probabilité de l’événement contraire, à savoir que le produit soit impair. Soustrais-la de un.",
  "To je pravdepodobnosť opačného javu, že šestka nepadne ani raz. Odpočítaj ju od jednotky.": "C’est la probabilité de l’événement contraire, à savoir qu’on n’obtienne aucun six. Soustrais-la de un.",
  "To je pravdepodobnosť práve jedného úspechu. „Aspoň jeden“ zahŕňa aj viac úspechov, použi opačný jav.": "C’est la probabilité d’exactement un succès. « Au moins un » inclut aussi plusieurs succès, utilise l’événement contraire.",
  "To je pravdepodobnosť, že nezasiahnu obaja súčasne. Ani jeden znamená, že minú obaja.": "C’est la probabilité que les deux n’atteignent pas la cible en même temps. « Aucun des deux » signifie que les deux la manquent.",
  "To je pravdepodobnosť, že zasiahnu obaja. „Aspoň jeden“ zahŕňa aj prípady, keď zasiahne len jeden.": "C’est la probabilité que les deux atteignent la cible. « Au moins un » inclut aussi les cas où un seul l’atteint.",
  "To je priemer. Medián je prostredná hodnota usporiadaného súboru.": "C’est la moyenne. La médiane est la valeur du milieu de la série ordonnée.",
  "To je prostredná strana. Prepona je najdlhšia strana trojuholníka.": "C’est le côté du milieu. L’hypoténuse est le plus long côté du triangle.",
  "To je rozptyl. Smerodajná odchýlka je jeho druhá odmocnina.": "C’est la variance. L’écart type est sa racine carrée.",
  "To je smerodajná odchýlka. Rozptyl je jej druhá mocnina, $D(X)=np(1-p)$.": "C’est l’écart type. La variance est son carré, $D(X)=np(1-p)$.",
  "To je smerodajná odchýlka. Rozptyl sa neodmocňuje.": "C’est l’écart type. On n’extrait pas la racine de la variance.",
  "To je strana odstrihnutého štvorca. Pýtame sa na objem krabice.": "C’est le côté du carré découpé. On demande le volume de la boîte.",
  "To je stredový uhol výseče v stupňoch. Percentá sú časť zo $100$, nie z $360$.": "C’est l’angle au centre du secteur en degrés. Les pourcentages sont une partie de $100$, pas de $360$.",
  "To je uhol priamky s normálovým vektorom roviny. Uhol s rovinou ho dopĺňa do $90^\\circ$: s normálou počítaj $\\sin\\varphi$, nie $\\cos\\varphi$.": "C’est l’angle de la droite avec le vecteur normal du plan. L’angle avec le plan est son complémentaire à $90^\\circ$ : avec la normale, calcule $\\sin\\varphi$, pas $\\cos\\varphi$.",
  "To je vzdialenosť bodov ${@0}$ a ${@1}$. Vzdialenosť od priamky sa meria kolmo na priamku.": "C’est la distance entre les points ${@0}$ et ${@1}$. La distance à une droite se mesure perpendiculairement à la droite.",
  "To sú $y$-ové súradnice priesečníkov. Zadaj ich $x$-ové súradnice.": "Ce sont les ordonnées des points d’intersection. Saisis leurs abscisses.",
  "To sú hodnoty substitúcie $t={@0}$. Z definície logaritmu ešte vypočítaj $x={@1}^{t}$.": "Ce sont les valeurs du changement de variable $t={@0}$. D’après la définition du logarithme, calcule encore $x={@1}^{t}$.",
  "To sú hodnoty substitúcie $t={@0}^{x}$. Ešte sa vráť k neznámej $x$.": "Ce sont les valeurs du changement de variable $t={@0}^{x}$. Reviens encore à l’inconnue $x$.",
  "To sú percentá. Stredový uhol je rovnaká časť z celého uhla $360^\\circ$, nie zo $100$.": "Ce sont des pourcentages. L’angle au centre est la même fraction de l’angle plein $360^\\circ$, pas de $100$.",
  "To sú všetky spojnice dvojíc vrcholov, aj strany mnohouholníka. Strany treba odčítať.": "Ce sont tous les segments joignant deux sommets, y compris les côtés du polygone. Il faut soustraire les côtés.",
  "Totožné priamky majú všetky body spoločné. Over, či oba body jednej priamky ležia na druhej.": "Des droites confondues ont tous leurs points en commun. Vérifie si deux points d’une droite sont sur l’autre.",
  "Totožné roviny majú všetky body spoločné. Over, či všetky tri body druhej roviny ležia v prvej.": "Des plans confondus ont tous leurs points en commun. Vérifie si les trois points du second plan sont dans le premier.",
  "Trojuholník má vrcholy $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Vypočítaj jeho obsah $S$ a výšku $v_c$ na stranu $AB$. Zadaj $S$ a $v_c$ (zaokrúhlenú na 2 desatinné miesta) oddelené bodkočiarkou.": "Un triangle a pour sommets $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Calcule son aire $S$ et la hauteur $v_c$ relative au côté $AB$. Saisis $S$ et $v_c$ (arrondie à 2 décimales) séparées par un point-virgule.",
  "Tu je $f''(x)&lt;0$, funkcia je tam konkávna. Pri delení nerovnice záporným číslom nezabudni otočiť znak nerovnosti.": "Ici $f''(x)&lt;0$, la fonction y est concave. En divisant l’inéquation par un nombre négatif, n’oublie pas de changer le sens de l’inégalité.",
  "Tu je funkcia {@0}. Skontroluj znamienko $f'$: medzi koreňmi má opačné znamienko ako vedúci koeficient ${@1}$.": "Ici, la fonction est {@0}. Vérifie le signe de $f'$ : entre les racines, elle a le signe contraire du coefficient dominant ${@1}$.",
  "Táto podmienka zodpovedá $D&gt;0$, teda dvom rôznym reálnym koreňom.": "Cette condition correspond à $D&gt;0$, c’est-à-dire à deux racines réelles distinctes.",
  "Táto podmienka zodpovedá $D&lt;0$, rovnica potom nemá reálny koreň.": "Cette condition correspond à $D&lt;0$, l’équation n’a alors pas de racine réelle.",
  "Táto podmienka zodpovedá $D=0$, teda jednému dvojnásobnému koreňu.": "Cette condition correspond à $D=0$, c’est-à-dire à une racine double.",
  "Táto podmienka zodpovedá $D\\ge 0$, teda aspoň jednému reálnemu koreňu.": "Cette condition correspond à $D\\ge 0$, c’est-à-dire à au moins une racine réelle.",
  "Táto podmienka zodpovedá $D\\le 0$: zahŕňa dvojnásobný koreň aj prípad bez reálnych koreňov.": "Cette condition correspond à $D\\le 0$ : elle inclut la racine double et le cas sans racine réelle.",
  "Uhol dvoch priamok je najviac $90^\\circ$. Vo vzorci pre $\\cos\\varphi$ je v čitateli absolútna hodnota skalárneho súčinu.": "L’angle de deux droites vaut au plus $90^\\circ$. Dans la formule de $\\cos\\varphi$, le numérateur contient la valeur absolue du produit scalaire.",
  "Uhol priamky s rovinou počítaj cez normálový vektor roviny: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Alebo nájdi priemet priamky do roviny a pravouhlý trojuholník.": "Calcule l’angle d’une droite avec un plan à l’aide du vecteur normal du plan : $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Ou trouve la projection de la droite sur le plan et un triangle rectangle.",
  "Uhol priamok je uhol ich smerových vektorov z intervalu $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.": "L’angle de deux droites est l’angle de leurs vecteurs directeurs dans l’intervalle $\\langle 0^\\circ; 90^\\circ\\rangle$ : $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.",
  "Umiestni kocku do súradnicovej sústavy, zapíš súradnice oboch bodov (stred hrany je priemer koncových bodov) a použi vzorec pre vzdialenosť.": "Place le cube dans un repère, écris les coordonnées des deux points (le milieu d’une arête est la moyenne de ses extrémités) et utilise la formule de la distance.",
  "Uprav $f(-x)$: využi $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ a $\\cos(-x)=\\cos x$. Potom porovnaj s $f(x)$ aj s $-f(x)$.": "Transforme $f(-x)$ : utilise $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ et $\\cos(-x)=\\cos x$. Compare ensuite avec $f(x)$ et avec $-f(x)$.",
  "Uprav rovnicu na tvar $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Aké je číslo $r$? Zadaj zlomok alebo celé číslo.": "Transforme l’équation sous la forme $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Quel est le nombre $r$ ? Saisis une fraction ou un entier.",
  "Upravíme: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Pre $x\\to 0$ aj $t={@6}x\\to 0$ a $\\frac{\\sin t}{t}\\to 1$. Limita je ${@7}{@8}$.": "On transforme : $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Pour $x\\to 0$, on a aussi $t={@6}x\\to 0$ et $\\frac{\\sin t}{t}\\to 1$. La limite est ${@7}{@8}$.",
  "Urči asymptoty grafu funkcie $f(x)=\\dfrac{{@0}}{{@1}}$. Zadaj číslo zo zvislej asymptoty $x=\\dots$ a potom číslo z vodorovnej asymptoty $y=\\dots$ (napr. 2; -1/2).": "Détermine les asymptotes de la courbe de la fonction $f(x)=\\dfrac{{@0}}{{@1}}$. Saisis le nombre de l’asymptote verticale $x=\\dots$, puis celui de l’asymptote horizontale $y=\\dots$ (par ex. 2; -1/2).",
  "Urči jednostrannú limitu $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.": "Détermine la limite unilatérale $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.",
  "Urči podmienky, súčet logaritmov zapíš ako logaritmus súčinu a odlogaritmuj. Nájdené korene porovnaj s podmienkami.": "Détermine les conditions, écris la somme des logarithmes comme le logarithme d’un produit et supprime le logarithme. Compare les racines trouvées avec les conditions.",
  "Urči vzájomnú polohu priamky $p: {@0}=0$ a kružnice $k: {@1}$.": "Détermine la position relative de la droite $p: {@0}=0$ et du cercle $k: {@1}$.",
  "Usporiadaný súbor: ${@0}$ ($n={@1}$). {@2}": "Série ordonnée : ${@0}$ ($n={@1}$). {@2}",
  "V $P(X=1)$ chýba kombinačné číslo $\\binom{{@0}}{1}={@1}$: úspech môže nastať v ktoromkoľvek pokuse.": "Dans $P(X=1)$, il manque le coefficient binomial $\\binom{{@0}}{1}={@1}$ : le succès peut se produire à n’importe quelle épreuve.",
  "V kocke $ABCDEFGH$ (podstava $ABCD$, nad ňou $EFGH$, hrany $AE$, $BF$, $CG$, $DH$) urči vzájomnú polohu priamok ${@0}$ a ${@1}$.": "Dans le cube $ABCDEFGH$ (base $ABCD$, au-dessus $EFGH$, arêtes $AE$, $BF$, $CG$, $DH$), détermine la position relative des droites ${@0}$ et ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu priamky ${@0}$ a roviny ${@1}$.": "Dans le cube $ABCDEFGH$, détermine la position relative de la droite ${@0}$ et du plan ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu rovín ${@0}$ a ${@1}$.": "Dans le cube $ABCDEFGH$, détermine la position relative des plans ${@0}$ et ${@1}$.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamky ${@0}$ s rovinou ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Dans le cube $ABCDEFGH$, calcule l’angle de la droite ${@0}$ avec le plan ${@1}$ en degrés. Arrondis le résultat au dixième de degré.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamok ${@0}$ a ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Dans le cube $ABCDEFGH$, calcule l’angle des droites ${@0}$ et ${@1}$ en degrés. Arrondis le résultat au dixième de degré.",
  "V kocke s hranou $1$ je smerový vektor priamky $\\vec{u}={@0}$ a rovina ${@1}$ je stena kocky s normálovým vektorom $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, teda $\\varphi\\approx {@6}^\\circ$.": "Dans un cube d’arête $1$, le vecteur directeur de la droite est $\\vec{u}={@0}$ et le plan ${@1}$ est une face du cube de vecteur normal $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, donc $\\varphi\\approx {@6}^\\circ$.",
  "V kocke s hranou $1$ sú smerové vektory $\\vec{u}=\\vec{{@0}}={@1}$ a $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, teda $\\varphi\\approx {@8}^\\circ$.": "Dans un cube d’arête $1$, les vecteurs directeurs sont $\\vec{u}=\\vec{{@0}}={@1}$ et $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, donc $\\varphi\\approx {@8}^\\circ$.",
  "V krúžku je {@0} chlapcov a {@1} {@2}. Na súťaž náhodne vyberieme troch členov. Aká je pravdepodobnosť, že medzi nimi bude aspoň jedno dievča? {@3}": "Un club compte {@0} garçons et {@1} {@2}. On choisit au hasard trois membres pour un concours. Quelle est la probabilité qu’il y ait au moins une fille parmi eux ? {@3}",
  "V ktorom z bodov ${@0}$, ${@1}$ má funkcia {@2}?": "En lequel des points ${@0}$, ${@1}$ la fonction a-t-elle un {@2} ?",
  "V percentách ${@0}\\,\\%$.": "En pourcentage : ${@0}\\,\\%$.",
  "V pravouhlom trojuholníku s výškou ihlana a stenovou výškou je druhou odvesnou polovica podstavnej hrany, nie celá hrana.": "Dans le triangle rectangle formé par la hauteur de la pyramide et l’apothème, l’autre côté de l’angle droit est la moitié de l’arête de base, pas l’arête entière.",
  "V rade záleží na tom, kto sedí na ktorej stoličke: otočenie tu nehrá rolu, usporiadaj všetkých ľudí.": "En rang, il importe de savoir qui est assis sur quelle chaise : les rotations ne jouent ici aucun rôle, range toutes les personnes.",
  "V rovnici $y=ax+b$ vymeň $x$ a $y$ a vyjadri $y$.": "Dans l’équation $y=ax+b$, échange $x$ et $y$ et exprime $y$.",
  "V skupine nezáleží na poradí, ide o kombinácie, nie variácie.": "Dans un groupe, l’ordre ne compte pas, il s’agit de combinaisons, pas d’arrangements.",
  "V spoločnom bode majú obe funkcie rovnakú hodnotu: polož pravé strany rovné a vyrieš kvadratickú rovnicu.": "Au point commun, les deux fonctions ont la même valeur : égale les membres de droite et résous l’équation du second degré.",
  "V triede je {@0} chlapcov a {@1} dievčat. Koľkými spôsobmi môžeme vybrať skupinu, v ktorej budú {@2} a {@3}?": "Dans une classe, il y a {@0} garçons et {@1} filles. De combien de façons peut-on choisir un groupe comprenant {@2} et {@3} ?",
  "V urne sú gule: {@0} {@1} a {@2} {@3}. Naraz náhodne vytiahneme dve. Aká je pravdepodobnosť, že {@4}? {@5}": "Une urne contient des boules : {@0} {@1} et {@2} {@3}. On en tire simultanément deux au hasard. Quelle est la probabilité de l’événement « {@4} » ? {@5}",
  "Valec: $\\pi r^2v={@0}\\pi$. Kužeľ: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.": "Cylindre : $\\pi r^2v={@0}\\pi$. Cône : $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Au total $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.",
  "Valec: $\\pi r^2v={@0}\\pi$. Polguľa: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.": "Cylindre : $\\pi r^2v={@0}\\pi$. Demi-boule : $\\frac{2}{3}\\pi r^3={@1}\\pi$. Au total $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.",
  "Variačné rozpätie je rozdiel najväčšej a najmenšej hodnoty.": "L’étendue est la différence entre la plus grande et la plus petite valeur.",
  "Vklad je úročený ročne sadzbou ${@0}\\,\\%$ (zložené úročenie, bez dane). Po koľkých rokoch sa prvýkrát aspoň {@1}?": "Un dépôt rapporte des intérêts annuels au taux de ${@0}\\,\\%$ (intérêts composés, sans impôt). Au bout de combien d’années a-t-il pour la première fois au moins {@1} ?",
  "Vo vzorci je výška delená tromi: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.": "Dans la formule, la hauteur est divisée par trois : $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.",
  "Vo vzorci pre objem zrezaného kužeľa je výška delená tromi: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "Dans la formule du volume d’un tronc de cône, la hauteur est divisée par trois : $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Vráť sa k $x$ a zadaj všetky riešenia (zlomok napr. ako 1/2).": "Reviens à $x$ et saisis toutes les solutions (fraction par ex. 1/2).",
  "Vydelíme obe strany výrazom ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Zlogaritmujeme: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, teda $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.": "On divise les deux membres par ${@0}$ : $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. On prend le logarithme : $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, donc $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.",
  "Vyjadri diskriminant pomocou $p$ a podľa požadovaného počtu koreňov urči, či má byť kladný, nulový alebo záporný.": "Exprime le discriminant en fonction de $p$ et, selon le nombre de racines demandé, détermine s’il doit être positif, nul ou négatif.",
  "Vyjadri goniometrickú funkciu, nájdi riešenia v jednej perióde a pripočítaj násobky periódy ($2\\pi$ pre sínus a kosínus, $\\pi$ pre tangens).": "Isole la fonction trigonométrique, trouve les solutions sur une période et ajoute les multiples de la période ($2\\pi$ pour le sinus et le cosinus, $\\pi$ pour la tangente).",
  "Vyjadri objem ako funkciu strany odstrihnutého štvorca, zderivuj ju a nájdi stacionárny bod v prípustnom intervale.": "Exprime le volume en fonction du côté du carré découpé, dérive-le et trouve le point critique dans l’intervalle admissible.",
  "Vymeníme $x$ a $y$: $x={@0}$, odtiaľ ${@1}y={@2}$ a $y=\\dfrac{{@3}}{{@4}}$. Teda $f^{-1}(x)={@5}x{@6}{@7}$, čiže $k={@8}$ a $q={@9}$.": "On échange $x$ et $y$ : $x={@0}$, d’où ${@1}y={@2}$ et $y=\\dfrac{{@3}}{{@4}}$. Donc $f^{-1}(x)={@5}x{@6}{@7}$, c’est-à-dire $k={@8}$ et $q={@9}$.",
  "Vypočítaj $F(-{@0})$.": "Calcule $F(-{@0})$.",
  "Vypočítaj $F(0)$.": "Calcule $F(0)$.",
  "Vypočítaj $F(1)-F(0)$. Zadaj zlomok alebo celé číslo.": "Calcule $F(1)-F(0)$. Saisis une fraction ou un entier.",
  "Vypočítaj $F({@0})$.": "Calcule $F({@0})$.",
  "Vypočítaj $F({@0})-F({@1})$.": "Calcule $F({@0})-F({@1})$.",
  "Vypočítaj $P(X=0)$. {@0}": "Calcule $P(X=0)$. {@0}",
  "Vypočítaj $P(X=1)$. {@0}": "Calcule $P(X=1)$. {@0}",
  "Vypočítaj $P(X={@0})$. {@1}": "Calcule $P(X={@0})$. {@1}",
  "Vypočítaj $P(X\\ge 1)$. {@0}": "Calcule $P(X\\ge 1)$. {@0}",
  "Vypočítaj $P(X\\le 1)$. {@0}": "Calcule $P(X\\le 1)$. {@0}",
  "Vypočítaj $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}": "Calcule $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}",
  "Vypočítaj $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcule $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Saisis le résultat sous forme de fraction ou d’entier.",
  "Vypočítaj $\\int_0^{{@0}} x^2\\,dx$. Zadaj zlomok alebo celé číslo.": "Calcule $\\int_0^{{@0}} x^2\\,dx$. Saisis une fraction ou un entier.",
  "Vypočítaj $\\int_0^{{@0}} {@1}\\,dx$.": "Calcule $\\int_0^{{@0}} {@1}\\,dx$.",
  "Vypočítaj $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok.": "Calcule $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Saisis le résultat sous forme d’entier ou de fraction.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Výsledok zadaj ako zlomok.": "Calcule $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Saisis le résultat sous forme de fraction.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.": "Calcule $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.",
  "Vypočítaj $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok (napr. -3/2).": "Calcule $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Saisis le résultat sous forme d’entier ou de fraction (par ex. -3/2).",
  "Vypočítaj $k$.": "Calcule $k$.",
  "Vypočítaj $t$ z prvej súradnice a dosaď ho do zvyšných dvoch rovníc. Over starostlivo obe.": "Calcule $t$ à partir de la première coordonnée et remplace-le dans les deux autres équations. Vérifie soigneusement les deux.",
  "Vypočítaj $|AB|^2$.": "Calcule $|AB|^2$.",
  "Vypočítaj $|\\vec u\\cdot\\vec n|$ pre $\\vec u=\\vec{{@0}}$ a normálový vektor $\\vec n={@1}$ (kocka s hranou $1$).": "Calcule $|\\vec u\\cdot\\vec n|$ pour $\\vec u=\\vec{{@0}}$ et le vecteur normal $\\vec n={@1}$ (cube d’arête $1$).",
  "Vypočítaj $|{@0}K|$ v cm. {@1}": "Calcule $|{@0}K|$ en cm. {@1}",
  "Vypočítaj $|{@0}K|^2$.": "Calcule $|{@0}K|^2$.",
  "Vypočítaj absolútny člen $q$.": "Calcule l’ordonnée à l’origine $q$.",
  "Vypočítaj aritmetický priemer $\\bar{x}$.": "Calcule la moyenne arithmétique $\\bar{x}$.",
  "Vypočítaj determinant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.": "Calcule le déterminant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.",
  "Vypočítaj druhú deriváciu. Pre aké $x$ je $f''(x)=0$?": "Calcule la dérivée seconde. Pour quel $x$ a-t-on $f''(x)=0$ ?",
  "Vypočítaj hodnotu v pravom krajnom bode, $f({@0})$.": "Calcule la valeur à la borne droite, $f({@0})$.",
  "Vypočítaj hodnotu v ľavom krajnom bode, $f({@0})$.": "Calcule la valeur à la borne gauche, $f({@0})$.",
  "Vypočítaj objem celého telesa v $\\text{dm}^3$. {@0}": "Calcule le volume du solide entier en $\\text{dm}^3$. {@0}",
  "Vypočítaj objem celého telesa v $\\text{m}^3$. {@0}": "Calcule le volume du solide entier en $\\text{m}^3$. {@0}",
  "Vypočítaj objem dutiny s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Calcule le volume du creux de rayon ${@0}\\,\\text{cm}$ en $\\text{cm}^3$. {@1}",
  "Vypočítaj objem kužeľa v $\\text{dm}^3$. {@0}": "Calcule le volume du cône en $\\text{dm}^3$. {@0}",
  "Vypočítaj objem materiálu v $\\text{cm}^3$. {@0}": "Calcule le volume de matière en $\\text{cm}^3$. {@0}",
  "Vypočítaj objem plného valca s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Calcule le volume du cylindre plein de rayon ${@0}\\,\\text{cm}$ en $\\text{cm}^3$. {@1}",
  "Vypočítaj objem polgule v $\\text{m}^3$. {@0}": "Calcule le volume de la demi-boule en $\\text{m}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$. {@0}": "Calcule le volume en $\\text{cm}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$.{@0}": "Calcule le volume en $\\text{cm}^3$.{@0}",
  "Vypočítaj objem valca v $\\text{dm}^3$. {@0}": "Calcule le volume du cylindre en $\\text{dm}^3$. {@0}",
  "Vypočítaj objem valca v $\\text{m}^3$. {@0}": "Calcule le volume du cylindre en $\\text{m}^3$. {@0}",
  "Vypočítaj obsah $S$.": "Calcule l’aire $S$.",
  "Vypočítaj obsah podstavy $S_p$ v $\\text{cm}^2$. {@0}": "Calcule l’aire de la base $S_p$ en $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah rezu v $\\text{cm}^2$. {@0}": "Calcule l’aire de la section en $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah v $\\text{cm}^2$.": "Calcule l’aire en $\\text{cm}^2$.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y=x^2$ a priamkou $y={@0}$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcule l’aire de la figure délimitée par la parabole $y=x^2$ et la droite $y={@0}$. Saisis le résultat sous forme de fraction ou d’entier.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y={@0}-x^2$ a osou $x$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcule l’aire de la figure délimitée par la parabole $y={@0}-x^2$ et l’axe $x$. Saisis le résultat sous forme de fraction ou d’entier.",
  "Vypočítaj obsah časti roviny, ktorú určuje sústava nerovníc $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.": "Calcule l’aire de la partie du plan déterminée par le système d’inéquations $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.",
  "Vypočítaj polomer gule v cm.": "Calcule le rayon de la boule en cm.",
  "Vypočítaj polomer rezu $\\rho$ v cm.": "Calcule le rayon de la section $\\rho$ en cm.",
  "Vypočítaj povrch ihlana v $\\text{cm}^2$.": "Calcule l’aire totale de la pyramide en $\\text{cm}^2$.",
  "Vypočítaj povrch v $\\text{cm}^2$. {@0}": "Calcule l’aire totale en $\\text{cm}^2$. {@0}",
  "Vypočítaj priemer, potom priemer druhých mocnín odchýlok od neho. Smerodajná odchýlka je odmocnina z rozptylu.": "Calcule la moyenne, puis la moyenne des carrés des écarts à la moyenne. L’écart type est la racine carrée de la variance.",
  "Vypočítaj priemernú známku. {@0}": "Calcule la note moyenne. {@0}",
  "Vypočítaj rozptyl $D(X)$.": "Calcule la variance $D(X)$.",
  "Vypočítaj rozptyl $s^2$. {@0}": "Calcule la variance $s^2$. {@0}",
  "Vypočítaj skalárny súčin smerových vektorov $\\vec{{@0}}\\cdot\\vec{{@1}}$ (kocka s hranou $1$).": "Calcule le produit scalaire des vecteurs directeurs $\\vec{{@0}}\\cdot\\vec{{@1}}$ (cube d’arête $1$).",
  "Vypočítaj smernicu $k=f'({@0})$.": "Calcule le coefficient directeur $k=f'({@0})$.",
  "Vypočítaj smerodajnú odchýlku $s$. {@0}": "Calcule l’écart type $s$. {@0}",
  "Vypočítaj stranu $s$ v cm.": "Calcule la génératrice $s$ en cm.",
  "Vypočítaj stranu kužeľa $s$ v cm.": "Calcule la génératrice $s$ du cône en cm.",
  "Vypočítaj strednú hodnotu $E(X)$ (zlomok alebo desatinné číslo aspoň na 2 miesta).": "Calcule l’espérance $E(X)$ (fraction ou nombre décimal avec au moins 2 décimales).",
  "Vypočítaj súčet $R^2+Rr+r^2$.": "Calcule la somme $R^2+Rr+r^2$.",
  "Vypočítaj súčet $a_1^2+a_1a_2+a_2^2$.": "Calcule la somme $a_1^2+a_1a_2+a_2^2$.",
  "Vypočítaj súčet druhých mocnín odchýlok od priemeru.": "Calcule la somme des carrés des écarts à la moyenne.",
  "Vypočítaj uhol priamky s rovinou v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Calcule l’angle de la droite avec le plan en degrés. Arrondis le résultat au dixième de degré.",
  "Vypočítaj uhol priamok v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Calcule l’angle des droites en degrés. Arrondis le résultat au dixième de degré.",
  "Vypočítaj vzdialenosť bodu ${@0}$ od roviny v cm. {@1}": "Calcule la distance du point ${@0}$ au plan en cm. {@1}",
  "Vypočítaj výšku $v_c$. {@0}": "Calcule la hauteur $v_c$. {@0}",
  "Vypočítaj {@0} hodnotu funkcie $f(x)={@1}$ na intervale $\\langle {@2}; {@3}\\rangle$.": "Calcule la valeur {@0} de la fonction $f(x)={@1}$ sur l’intervalle $\\langle {@2}; {@3}\\rangle$.",
  "Vypočítaj {@0} súboru ${@1}$. {@2}": "Calcule {@0} de la série ${@1}$. {@2}",
  "Vypočítaj {@0} v $\\text{cm}^2$. {@1}": "Calcule {@0} en $\\text{cm}^2$. {@1}",
  "Vypočítaj {@0}. {@1}": "Calcule {@0}. {@1}",
  "Vypočítal si $f\\!\\left({@0}\\right)$. Hodnota $f^{-1}(c)$ je však číslo $x$, pre ktoré $f(x)=c$.": "Tu as calculé $f\\!\\left({@0}\\right)$. Or la valeur $f^{-1}(c)$ est le nombre $x$ tel que $f(x)=c$.",
  "Vypĺňaj miesta postupne a použi pravidlo súčinu. Prvá cifra nesmie byť nula; pri podmienke na deliteľnosť začni poslednou cifrou a rozdeľ prípady.": "Remplis les positions l’une après l’autre et utilise le principe multiplicatif. Le premier chiffre ne doit pas être zéro ; avec une condition de divisibilité, commence par le dernier chiffre et distingue les cas.",
  "Vyrieš každú nerovnicu zvlášť (pozor na delenie záporným číslom) a urob prienik intervalov.": "Résous chaque inéquation séparément (attention à la division par un nombre négatif) et fais l’intersection des intervalles.",
  "Vyrieš rovnicu $({@0})^2{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou (zlomok napr. ako 1/2).": "Résous l’équation $({@0})^2{@1}{@2}=0$. Saisis toutes les solutions séparées par un point-virgule (fraction par ex. 1/2).",
  "Vyrieš rovnicu $\\log_2({@0})+\\log_2({@1})={@2}$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Résous l’équation $\\log_2({@0})+\\log_2({@1})={@2}$. Saisis toutes les solutions séparées par un point-virgule.",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou (napr. 30; 150).": "Résous l’équation ${@0}$ pour {@1}. Saisis toutes les solutions en degrés séparées par un point-virgule (par ex. 30; 150).",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou.": "Résous l’équation ${@0}$ pour {@1}. Saisis toutes les solutions en degrés séparées par un point-virgule.",
  "Vyrieš rovnicu ${@0}={@1}$. {@2}": "Résous l’équation ${@0}={@1}$. {@2}",
  "Vyrieš rovnicu. Koľko vrcholov má mnohouholník?": "Résous l’équation. Combien de sommets le polygone a-t-il ?",
  "Vyrieš rovnicu. Koľko ľudí bolo na stretnutí?": "Résous l’équation. Combien de personnes y avait-il à la rencontre ?",
  "Vyrieš sústavu rovníc $x+y={@0}$, $x\\cdot y={@1}$. Zadaj všetky možné hodnoty $x$ oddelené bodkočiarkou.": "Résous le système d’équations $x+y={@0}$, $x\\cdot y={@1}$. Saisis toutes les valeurs possibles de $x$ séparées par un point-virgule.",
  "Vyrieš v $\\mathbb{R}$ rovnicu ${@0}^{x}{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Résous dans $\\mathbb{R}$ l’équation ${@0}^{x}{@1}{@2}=0$. Saisis toutes les solutions séparées par un point-virgule.",
  "Využi $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: vynásob a vydeľ výraz tak, aby si v menovateli dostal ten istý argument ako v sínuse.": "Utilise $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$ : multiplie et divise l’expression de façon à obtenir au dénominateur le même argument que dans le sinus.",
  "Využi Vietove vzťahy: súčin koreňov je absolútny člen, súčet koreňov je $-p$. Alebo dosaď známy koreň do rovnice.": "Utilise les relations de Viète : le produit des racines est le terme constant, la somme des racines est $-p$. Ou remplace la racine connue dans l’équation.",
  "Vzdialenosť h od nuly": "Distance de h à zéro",
  "Vzorec $\\frac{\\sin t}{t}\\to 1$ platí, len keď je v menovateli presne argument sínusu, teda ${@0}x$. Výraz najprv uprav.": "La formule $\\frac{\\sin t}{t}\\to 1$ ne vaut que si le dénominateur est exactement l’argument du sinus, c’est-à-dire ${@0}x$. Transforme d’abord l’expression.",
  "Výber chlapcov a výber dievčat sa navzájom nevylučujú, kombinujú sa. Použi pravidlo súčinu, nie súčtu.": "Le choix des garçons et celui des filles ne s’excluent pas, ils se combinent. Utilise le principe multiplicatif, pas le principe additif.",
  "Výraz obsahuje len $x^2$, preto $f(-x)=f(x)$.": "L’expression ne contient que $x^2$, donc $f(-x)=f(x)$.",
  "Výrobok je chybný s pravdepodobnosťou ${@0}$, nezávisle od ostatných. Náhodne vyberieme {@1} {@2}; $X$ je počet chybných.": "Un produit est défectueux avec la probabilité ${@0}$, indépendamment des autres. On choisit au hasard {@1} {@2} ; $X$ est le nombre de produits défectueux.",
  "Výseč má stredový uhol $\\frac{n_i}{n}\\cdot 360^\\circ$.": "Un secteur a pour angle au centre $\\frac{n_i}{n}\\cdot 360^\\circ$.",
  "Výsledky pokusu sú dvojice gúľ (kombinácie). Spočítaj všetky a priaznivé; pri „aspoň jedna“ je jednoduchší opačný jav.": "Les résultats de l’expérience sont des paires de boules (combinaisons). Compte-les toutes ainsi que les favorables ; pour « au moins une », l’événement contraire est plus simple.",
  "Výsledok dosaď do vonkajšej funkcie: ${@0}({@1})$.": "Remplace le résultat dans la fonction extérieure : ${@0}({@1})$.",
  "Výsledok je usporiadaná dvojica (prvá kocka, druhá kocka), všetkých je 36. Spočítaj priaznivé dvojice.": "Un résultat est un couple ordonné (premier dé, deuxième dé), il y en a 36 en tout. Compte les couples favorables.",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Arrondis le résultat à 2 décimales.",
  "Výsledok zaokrúhli na 4 desatinné miesta.": "Arrondis le résultat à 4 décimales.",
  "Všetky hrany kocky zväčšíme o ${@0}\\,\\%$. O koľko percent sa zväčší jej {@1}? {@2}": "On augmente toutes les arêtes d’un cube de ${@0}\\,\\%$. De combien de pour cent augmente {@1} ? {@2}",
  "Všetkých trojíc je $\\binom{{@0}}{3}={@1}$. Opačný jav — vyberú sa len chlapci — má $\\binom{{@2}}{3}={@3}$ možností. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.": "Il y a $\\binom{{@0}}{3}={@1}$ groupes de trois en tout. L’événement contraire — on ne choisit que des garçons — compte $\\binom{{@2}}{3}={@3}$ possibilités. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.",
  "Všetkých výberov dvoch gúľ je $\\binom{{@0}}{2}={@1}$. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.": "Il y a $\\binom{{@0}}{2}={@1}$ tirages de deux boules en tout. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.",
  "Všetkých výsledkov je $6\\cdot 6=36$. {@0} $P=\\frac{{@1}}{36}={@2}$.": "Il y a $6\\cdot 6=36$ résultats en tout. {@0} $P=\\frac{{@1}}{36}={@2}$.",
  "Z $\\frac{n(n-3)}{2}={@0}$ je $n^2-3n-{@1}=0$ a kladný koreň $n={@2}$.": "De $\\frac{n(n-3)}{2}={@0}$, on obtient $n^2-3n-{@1}=0$ et la racine positive $n={@2}$.",
  "Z Pytagorovej vety vypočítaj diferenciu $d$.": "Calcule la raison $d$ avec le théorème de Pythagore.",
  "Z Vietovho vzťahu $x_1x_2={@0}$ je $x_2=\\frac{{@1}}{{@2}}={@3}$. Zo vzťahu $x_1+x_2=-p$ je $p=-({@4}{@5})={@6}$. Kontrola dosadením: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓": "D’après la relation de Viète $x_1x_2={@0}$, on a $x_2=\\frac{{@1}}{{@2}}={@3}$. D’après la relation $x_1+x_2=-p$, on a $p=-({@4}{@5})={@6}$. Vérification en remplaçant : ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓",
  "Z jednej súradnice vypočítaj parameter $t$ a over, či rovnaké $t$ vyhovuje aj ostatným súradniciam.": "Calcule le paramètre $t$ à partir d’une coordonnée et vérifie si le même $t$ convient aussi pour les autres coordonnées.",
  "Z lineárnej rovnice vyjadri $y$ a dosaď do druhej. Dostaneš kvadratickú rovnicu pre $x$.": "Exprime $y$ à partir de l’équation linéaire et remplace-le dans l’autre. Tu obtiens une équation du second degré en $x$.",
  "Z podmienky $D=0$ vyjadri $p^2$. Koľko je $p^2$?": "À partir de la condition $D=0$, exprime $p^2$. Combien vaut $p^2$ ?",
  "Z povrchu $S=4\\pi r^2$ vypočítaj polomer a dosaď ho do vzorca pre objem $V=\\frac{4}{3}\\pi r^3$.": "À partir de l’aire $S=4\\pi r^2$, calcule le rayon et remplace-le dans la formule du volume $V=\\frac{4}{3}\\pi r^3$.",
  "Z prvej rovnice $y={@0}$. Dosadíme: $x({@1})={@2} \\Rightarrow {@3}=0$, korene $x_1={@4}$, $x_2={@5}$. Riešenia sústavy sú $[{@6}; {@7}]$ a $[{@8}; {@9}]$, $x$ je teda ${@10}$ alebo ${@11}$.": "De la première équation, $y={@0}$. On remplace : $x({@1})={@2} \\Rightarrow {@3}=0$, racines $x_1={@4}$, $x_2={@5}$. Les solutions du système sont $[{@6}; {@7}]$ et $[{@8}; {@9}]$, $x$ vaut donc ${@10}$ ou ${@11}$.",
  "Z rovnice $\\frac{n(n-1)}{2}={@0}$ vyjadri súčin $n(n-1)$. Koľko je?": "À partir de l’équation $\\frac{n(n-1)}{2}={@0}$, exprime le produit $n(n-1)$. Combien vaut-il ?",
  "Z rovnice $\\frac{n(n-3)}{2}={@0}$ vyjadri súčin $n(n-3)$. Koľko je?": "À partir de l’équation $\\frac{n(n-3)}{2}={@0}$, exprime le produit $n(n-3)$. Combien vaut-il ?",
  "Z rovnice ${@0}={@1}$ urči $x$-ové súradnice spoločných bodov.": "À partir de l’équation ${@0}={@1}$, détermine les abscisses des points communs.",
  "Z rovnice kružnice zisti stred a polomer, potom vypočítaj vzdialenosť stredu od priamky a porovnaj ju s polomerom.": "À partir de l’équation du cercle, trouve le centre et le rayon, puis calcule la distance du centre à la droite et compare-la au rayon.",
  "Z rovnice priamky vyjadri $y$, dosaď do rovnice kružnice a vyrieš kvadratickú rovnicu pre $x$.": "À partir de l’équation de la droite, exprime $y$, remplace-le dans l’équation du cercle et résous l’équation du second degré en $x$.",
  "Z rovnice priamky vyjadríme $y={@0}$ a dosadíme do rovnice kružnice. Po úprave dostaneme ${@1}=0$ s koreňmi $x_1={@2}$, $x_2={@3}$. Priesečníky sú $[{@4}; {@5}]$ a $[{@6}; {@7}]$.": "De l’équation de la droite, on tire $y={@0}$ et on remplace dans l’équation du cercle. Après simplification, on obtient ${@1}=0$, de racines $x_1={@2}$, $x_2={@3}$. Les points d’intersection sont $[{@4}; {@5}]$ et $[{@6}; {@7}]$.",
  "Z rovníc ${@0}^{x}=t$ urči všetky riešenia $x$ (pamätaj, že ${@1}^{x}&gt;0$).": "À partir des équations ${@0}^{x}=t$, détermine toutes les solutions $x$ (rappelle-toi que ${@1}^{x}&gt;0$).",
  "Zabudol si deliť veľkosťou normálového vektora $|\\vec n|=\\sqrt{{@0}}$.": "Tu as oublié de diviser par la norme du vecteur normal $|\\vec n|=\\sqrt{{@0}}$.",
  "Zabudol si na kombinačné číslo $\\binom{{@0}}{{@1}}$: úspešné pokusy môžu byť medzi všetkými pokusmi rozmiestnené rôznymi spôsobmi.": "Tu as oublié le coefficient binomial $\\binom{{@0}}{{@1}}$ : les épreuves réussies peuvent être réparties de différentes façons parmi toutes les épreuves.",
  "Zabudol si na člen $u'v$: derivuj aj lineárnu funkciu v zátvorke.": "Tu as oublié le terme $u'v$ : dérive aussi la fonction affine entre parenthèses.",
  "Zabudol si násobiť deriváciou vnútornej funkcie: $(\\sin kx)'=k\\cos kx$ a $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "Tu as oublié de multiplier par la dérivée de la fonction intérieure : $(\\sin kx)'=k\\cos kx$ et $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Zabudol si umocniť menovateľ: vo vzorci pre deriváciu podielu je v menovateli $v^2$.": "Tu as oublié d’élever le dénominateur au carré : dans la formule de la dérivée d’un quotient, le dénominateur est $v^2$.",
  "Zabudol si vynásobiť deriváciou vnútornej funkcie: $({@0})'={@1}$.": "Tu as oublié de multiplier par la dérivée de la fonction intérieure : $({@0})'={@1}$.",
  "Zadaj všetky hodnoty $p$.": "Saisis toutes les valeurs de $p$.",
  "Zadaj všetky možné hodnoty $x$.": "Saisis toutes les valeurs possibles de $x$.",
  "Zadaj všetky riešenia rovnice.": "Saisis toutes les solutions de l’équation.",
  "Započítal si aj „čísla“ začínajúce nulou. Na prvom mieste nula byť nemôže.": "Tu as aussi compté des « nombres » commençant par zéro. Le zéro ne peut pas être en première position.",
  "Zapíš ${@0}^{x}$ ako $({@1}^{x})^2$ a zaveď substitúciu $t={@2}^{x}$. Nezabudni, že $t$ musí byť kladné.": "Écris ${@0}^{x}$ sous la forme $({@1}^{x})^2$ et pose le changement de variable $t={@2}^{x}$. N’oublie pas que $t$ doit être positif.",
  "Zapíš menovateľ ako $(\\sqrt{x})^2-a^2$ a rozlož ho podľa vzorca $A^2-B^2=(A-B)(A+B)$.": "Écris le dénominateur sous la forme $(\\sqrt{x})^2-a^2$ et factorise-le avec l’identité $A^2-B^2=(A-B)(A+B)$.",
  "Zapíš podmienku cez opačný jav $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ a vyrieš ju logaritmovaním.": "Écris la condition à l’aide de l’événement contraire $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ et résous-la en prenant le logarithme.",
  "Zapíš súčet prvých $n$ členov aritmetickej postupnosti a vyrieš nerovnicu $s_n\\ge$ požadovaný počet. Hľadáš najmenšie prirodzené $n$.": "Écris la somme des $n$ premiers termes de la suite arithmétique et résous l’inéquation $s_n\\ge$ nombre demandé. Tu cherches le plus petit entier naturel $n$.",
  "Zaveď substitúciu $t={@0}$, vyrieš kvadratickú rovnicu a potom sa vráť k $x$ cez definíciu logaritmu.": "Pose le changement de variable $t={@0}$, résous l’équation du second degré, puis reviens à $x$ grâce à la définition du logarithme.",
  "Zderivuj vonkajšiu mocninu (vnútro nechaj tak) a vynásob deriváciou vnútornej funkcie.": "Dérive la puissance extérieure (laisse l’intérieur tel quel) et multiplie par la dérivée de la fonction intérieure.",
  "Zisti znamienko $f'$ vľavo a vpravo od bodu.": "Détermine le signe de $f'$ à gauche et à droite du point.",
  "Zisti znamienko menovateľa pre $x$ tesne vpravo alebo vľavo od daného bodu a skombinuj ho so znamienkom čitateľa.": "Détermine le signe du dénominateur pour $x$ juste à droite ou à gauche du point donné et combine-le avec le signe du numérateur.",
  "Zisti, ktoré body kocky v rovinách ležia. Tri body môžu určovať tú istú rovinu, aj keď sú to iné vrcholy.": "Détermine quels points du cube sont dans les plans. Trois points peuvent déterminer le même plan, même si ce sont d’autres sommets.",
  "Zistil si len exponent ${@0}$. Z neho ešte vyjadri $x$.": "Tu n’as trouvé que l’exposant ${@0}$. Exprime-en encore $x$.",
  "Zlogaritmuj obe strany a vyjadri $x$. {@0}": "Prends le logarithme des deux membres et exprime $x$. {@0}",
  "Zložené úročenie: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Stav na účte tvorí geometrickú postupnosť s kvocientom ${@6}$.": "Intérêts composés : $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Le solde du compte forme une suite géométrique de raison ${@6}$.",
  "Zo štvorcového kartónu so stranou ${@0}\\,\\text{cm}$ odstrihneme v rohoch zhodné štvorce a zvyšok zahneme na otvorenú krabicu. {@1}": "Dans un carton carré de côté ${@0}\\,\\text{cm}$, on découpe aux coins des carrés identiques et on plie le reste pour obtenir une boîte ouverte. {@1}",
  "Zostane podiel vedúcich koeficientov: $\\frac{{@0}}{{@1}}{@2}$.": "Il reste le quotient des coefficients dominants : $\\frac{{@0}}{{@1}}{@2}$.",
  "Zostav nerovnicu $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ a vyrieš ju logaritmovaním. Výsledok zaokrúhli nahor.": "Écris l’inéquation $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ et résous-la en prenant le logarithme. Arrondis le résultat à l’entier supérieur.",
  "Zostav rovnicu roviny (normálový vektor je kolmý na dva vektory v rovine) a použi vzorec pre vzdialenosť bodu od roviny.": "Écris l’équation du plan (le vecteur normal est perpendiculaire à deux vecteurs du plan) et utilise la formule de la distance d’un point à un plan.",
  "Zrezaný kužeľ": "Tronc de cône",
  "Zrezaný rotačný kužeľ má polomery podstáv $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho {@3}. {@4}": "Un tronc de cône de révolution a des bases de rayons $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ et une hauteur $v={@2}\\,\\text{cm}$. Calcule {@3}. {@4}",
  "Zvislá asymptota je v nulovom bode menovateľa. Vodorovnú asymptotu dá limita pre $x\\to\\infty$: podiel koeficientov pri $x$.": "L’asymptote verticale est à la valeur qui annule le dénominateur. L’asymptote horizontale est donnée par la limite pour $x\\to\\infty$ : le quotient des coefficients de $x$.",
  "Zvislá asymptota je v nulovom bode menovateľa: rieš rovnicu ${@0}=0$. Pozor na znamienko.": "L’asymptote verticale est à la valeur qui annule le dénominateur : résous l’équation ${@0}=0$. Attention au signe.",
  "Zvolíme $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.": "On choisit $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.",
  "Zvolíme kocku s hranou $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ a body $E, F, G, H$ nad nimi so súradnicou $z=1$.": "On choisit un cube d’arête $1$ : $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ et les points $E, F, G, H$ au-dessus d’eux avec la coordonnée $z=1$.",
  "Základ a": "Base a",
  "Záleží na tom, kto má akú funkciu, ide o variácie 3. triedy z {@0} prvkov: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.": "Il importe de savoir qui a quelle fonction, il s’agit d’arrangements de 3 éléments parmi {@0} : $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.",
  "Zámenou $x$ za $-x$ sa sčítance len vymenia: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.": "En remplaçant $x$ par $-x$, les termes s’échangent simplement : $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.",
  "ani sa cifry nesmú opakovať": "et les chiffres ne doivent pas se répéter",
  "aspoň jeden reálny koreň": "au moins une racine réelle",
  "aspoň jedna guľa je biela": "au moins une boule est blanche",
  "auto": "voiture",
  "bicykel": "vélo",
  "biele": "blanches",
  "bielych": "blanches",
  "deliteľných piatimi": "divisibles par 5",
  "dievčat": "filles",
  "dievčatá": "filles",
  "do známky {@0} je to {@1}": "jusqu’à la note {@0} : {@1}",
  "dotyčnica (jeden spoločný bod)": "tangente (un point commun)",
  "druh dopravy do práce": "mode de transport pour aller au travail",
  "druhú": "carré",
  "dva rôzne reálne korene": "deux racines réelles distinctes",
  "dĺžku prepony v cm": "la longueur de l’hypoténuse en cm",
  "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">pre h → 0 sa hodnota blíži k 1</span>": "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">pour h → 0, la valeur tend vers 1</span>",
  "farba očí žiaka": "couleur des yeux d’un élève",
  "f′ &lt; 0, funkcia klesá": "f′ &lt; 0, la fonction décroît",
  "hmotnosť balíka": "masse d’un colis",
  "jeden chlapec": "un garçon",
  "jedna guľa je biela a jedna čierna": "une boule est blanche et l’autre noire",
  "jeho objem v $\\text{cm}^3$": "son volume en $\\text{cm}^3$",
  "jeho obsah v $\\text{cm}^2$": "son aire en $\\text{cm}^2$",
  "jeho povrch v $\\text{cm}^2$": "son aire totale en $\\text{cm}^2$",
  "k; q": "k; q",
  "končiace cifrou {@0}: {@1}": "se terminant par {@0} : {@1}",
  "krajina, z ktorej prišiel turista": "pays d’origine d’un touriste",
  "kvalitatívny": "qualitatif",
  "kvantitatívny diskrétny": "quantitatif discret",
  "kvantitatívny spojitý": "quantitatif continu",
  "leží v rovine": "est dans le plan",
  "lokálne maximum": "maximum local",
  "lokálne minimum": "minimum local",
  "max": "max",
  "medián": "la médiane",
  "mimobežné": "non coplanaires",
  "možností": "possibilités",
  "má sústava nekonečne veľa riešení": "le système a une infinité de solutions",
  "mínus": "moins",
  "môžu opakovať": "peuvent se répéter",
  "neleží v rovine": "n’est pas dans le plan",
  "nepárne, medián je {@0}. hodnota": "impair, la médiane est la {@0}e valeur",
  "nepárnych": "impairs",
  "nesečnica (žiadny spoločný bod)": "extérieure (aucun point commun)",
  "nesmú opakovať": "ne doivent pas se répéter",
  "obe gule sú biele": "les deux boules sont blanches",
  "objem": "le volume",
  "objem hranola v $\\text{cm}^3$": "le volume du prisme en $\\text{cm}^3$",
  "objem mení $k^3$-krát": "le volume est multiplié par $k^3$",
  "objem v $\\text{cm}^3$": "le volume en $\\text{cm}^3$",
  "obsah jeho plášťa v $\\text{cm}^2$": "l’aire de sa surface latérale en $\\text{cm}^2$",
  "obsah plášťa": "l’aire latérale",
  "obsah rezu v $\\text{cm}^2$. {@0}": "l’aire de la section en $\\text{cm}^2$. {@0}",
  "obľúbený šport": "sport préféré",
  "opäť ľubovoľnú": "de nouveau n’importe lequel",
  "p; x₂": "p; x₂",
  "pešo": "à pied",
  "plus": "plus",
  "polomer rezu v cm.": "le rayon de la section en cm.",
  "povrch": "l’aire totale",
  "povrch hranola v $\\text{cm}^2$": "l’aire totale du prisme en $\\text{cm}^2$",
  "povrch mení $k^2$-krát": "l’aire est multipliée par $k^2$",
  "povrch v $\\text{cm}^2$": "l’aire totale en $\\text{cm}^2$",
  "počet": "effectif",
  "počet gólov v zápase": "nombre de buts dans un match",
  "počet strán knihy": "nombre de pages d’un livre",
  "počet súrodencov": "nombre de frères et sœurs",
  "počet vymeškaných hodín za polrok": "nombre d’heures d’absence par semestre",
  "počet áut v domácnosti": "nombre de voitures dans un foyer",
  "pre $t={@0}$ niektorá z nich neplatí, bod na priamke <strong>neleží</strong>.": "pour $t={@0}$, l’une d’elles n’est pas vérifiée, le point <strong>n’est pas</strong> sur la droite.",
  "pre $t={@0}$ obe platia, bod na priamke <strong>leží</strong>.": "pour $t={@0}$, les deux sont vérifiées, le point <strong>est</strong> sur la droite.",
  "priamka je s rovinou rovnobežná a nemá s ňou spoločný bod": "la droite est parallèle au plan et n’a aucun point commun avec lui",
  "priamka je s rovinou rôznobežná (pretína ju v jednom bode)": "la droite est sécante au plan (elle le coupe en un point)",
  "priamka leží v rovine": "la droite est dans le plan",
  "práve jeden (dvojnásobný) koreň": "exactement une racine (double)",
  "párne, medián je priemer {@0}. a {@1}. hodnoty": "pair, la médiane est la moyenne des {@0}e et {@1}e valeurs",
  "párnych": "pairs",
  "roviny sú rovnobežné rôzne": "les plans sont strictement parallèles",
  "roviny sú rôznobežné (pretínajú sa v priamke)": "les plans sont sécants (ils se coupent selon une droite)",
  "roviny sú totožné": "les plans sont confondus",
  "rovnobežné": "parallèles",
  "rozptyl": "la variance",
  "sedadiel": "places",
  "sedadlo": "place",
  "sedadlá": "places",
  "sečnica (2 spoločné body)": "sécante (2 points communs)",
  "sečnica (dva spoločné body)": "sécante (deux points communs)",
  "smerodajnú odchýlku": "l’écart type",
  "spotreba auta na 100 km": "consommation d’une voiture aux 100 km",
  "stenovú výšku $v_s$ v cm": "l’apothème $v_s$ en cm",
  "strojnásobí": "triplé",
  "sústava nemá riešenie": "le système n’a pas de solution",
  "súčet je aspoň {@0}": "la somme est au moins {@0}",
  "súčet je {@0}": "la somme est {@0}",
  "súčin je párny": "le produit est pair",
  "teplota vzduchu na poludnie": "température de l’air à midi",
  "terč nezasiahne ani jeden z nich": "aucun des deux n’atteint la cible",
  "terč zasiahne aspoň jeden z nich": "au moins l’un des deux atteint la cible",
  "terč zasiahne práve jeden z nich": "exactement l’un des deux atteint la cible",
  "tretiu": "cube",
  "v rovine leží, takže v nej leží celá priamka": "est dans le plan, donc toute la droite y est",
  "v rovine neleží, preto nemajú spoločný bod": "n’est pas dans le plan, donc ils n’ont pas de point commun",
  "variačné rozpätie": "l’étendue",
  "vlak": "train",
  "vpravo": "à droite",
  "výrobkov": "produits",
  "výrobky": "produits",
  "výška žiaka": "taille d’un élève",
  "vľavo": "à gauche",
  "vždy niektorú zo zvyšných": "toujours l’un des chiffres restants",
  "x; y": "x; y",
  "x; y; z": "x; y; z",
  "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · vzdialenosť stredu d = {@3} · r = 3 → {@4}": "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · distance du centre d = {@3} · r = 3 → {@4}",
  "x₀ = {@0} · f′(x₀) = {@1} · {@2}": "x₀ = {@0} · f′(x₀) = {@1} · {@2}",
  "x₁; x₂": "x₁; x₂",
  "zdvojnásobí": "doublé",
  "značka mobilného telefónu": "marque de téléphone portable",
  "známka": "note",
  "znížil": "diminué",
  "zvýšil": "augmenté",
  "{@0} Bod $K$ je stred hrany ${@1}$. Vypočítaj vzdialenosť bodov ${@2}$ a $K$ v cm. {@3}": "{@0} Le point $K$ est le milieu de l’arête ${@1}$. Calcule la distance entre les points ${@2}$ et $K$ en cm. {@3}",
  "{@0} Funkcia je <strong>{@1}</strong>.": "{@0} La fonction est <strong>{@1}</strong>.",
  "{@0} Normálové vektory sú ${@1}$ a ${@2}$. {@3}": "{@0} Les vecteurs normaux sont ${@1}$ et ${@2}$. {@3}",
  "{@0} Normálový vektor roviny ${@1}$ je $\\vec{n}={@2}$ (kolmý na $\\vec{{@3}{@4}}$ aj $\\vec{{@5}{@6}}$), smerový vektor priamky $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}": "{@0} Le vecteur normal du plan ${@1}$ est $\\vec{n}={@2}$ (perpendiculaire à $\\vec{{@3}{@4}}$ et à $\\vec{{@5}{@6}}$), le vecteur directeur de la droite est $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}",
  "{@0} Potom ${@1}{@2}$ a $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.": "{@0} Alors ${@1}{@2}$ et $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.",
  "{@0} Rovina ${@1}$ má normálový vektor $\\vec{n}={@2}$ a rovnicu ${@3}=0$. Pre ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.": "{@0} Le plan ${@1}$ a pour vecteur normal $\\vec{n}={@2}$ et pour équation ${@3}=0$. Pour ${@4}{@5}$ : $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.",
  "{@0} Smerový vektor priamky $\\vec{u}=\\vec{{@1}}={@2}$, vektor $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.": "{@0} Le vecteur directeur de la droite est $\\vec{u}=\\vec{{@1}}={@2}$, le vecteur $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.",
  "{@0} Správne je ${@1}$, $k\\in\\mathbb{Z}$.": "{@0} La bonne écriture est ${@1}$, $k\\in\\mathbb{Z}$.",
  "{@0} Substitúcia $t={@1} x$: ${@2}=0$, korene $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Spolu $K=\\{{@7}\\}$.": "{@0} Changement de variable $t={@1} x$ : ${@2}=0$, racines $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Au total $K=\\{{@7}\\}$.",
  "{@0} Vypočítaj $P(X={@1})$. {@2}": "{@0} Calcule $P(X={@1})$. {@2}",
  "{@0} Vypočítaj $P(X\\ge 1)$. {@1}": "{@0} Calcule $P(X\\ge 1)$. {@1}",
  "{@0} Vypočítaj pravdepodobnosť, že $X\\le 1$. {@1}": "{@0} Calcule la probabilité que $X\\le 1$. {@1}",
  "{@0} Vypočítaj strednú hodnotu $E(X)$ a rozptyl $D(X)$. Zadaj ich v tomto poradí oddelené bodkočiarkou (ako zlomky alebo desatinné čísla zaokrúhlené aspoň na 2 miesta).": "{@0} Calcule l’espérance $E(X)$ et la variance $D(X)$. Saisis-les dans cet ordre séparées par un point-virgule (sous forme de fractions ou de nombres décimaux arrondis à au moins 2 décimales).",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od priamky ${@2}$ v cm. {@3}": "{@0} Calcule la distance du sommet ${@1}$ à la droite ${@2}$ en cm. {@3}",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od roviny ${@2}$ v cm. {@3}": "{@0} Calcule la distance du sommet ${@1}$ au plan ${@2}$ en cm. {@3}",
  "{@0} Výsledok zaokrúhli na desatiny.": "{@0} Arrondis le résultat au dixième.",
  "{@0} Znak je <strong>{@1}</strong>.": "{@0} Le caractère est <strong>{@1}</strong>.",
  "{@0} chlapci": "{@0} garçons",
  "{@0} dievčatá": "{@0} filles",
  "{@0} usporiadaného súboru. Aký je medián?": "{@0} de la série ordonnée. Quelle est la médiane ?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Aký je medián známok?": "{@0} montre les notes d’un contrôle dans une classe :{@1}Quelle est la médiane des notes ?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Vypočítaj priemernú známku. {@2}": "{@0} montre les notes d’un contrôle dans une classe :{@1}Calcule la note moyenne. {@2}",
  "{@0} {@1}": "{@0} {@1}",
  "{@0}Zaveď $t={@1} x$, vyrieš kvadratickú rovnicu a ponechaj len korene z intervalu $\\langle -1; 1\\rangle$.": "{@0}Pose $t={@1} x$, résous l’équation du second degré et ne garde que les racines de l’intervalle $\\langle -1; 1\\rangle$.",
  "Údaje najprv usporiadaj podľa veľkosti. Pri párnom počte je medián priemerom dvoch prostredných hodnôt.": "Range d’abord les données par ordre de grandeur. Pour un effectif pair, la médiane est la moyenne des deux valeurs du milieu.",
  "Útvar ohraničený parabolou a priamkou": "Figure délimitée par une parabole et une droite",
  "Čitateľ ${@0}$ rozlož na súčin ${@1}\\cdot(x+c)$. Aké je číslo $c$?": "Factorise le numérateur ${@0}$ sous la forme ${@1}\\cdot(x+c)$. Quel est le nombre $c$ ?",
  "Čitateľ derivácie ${@0}({@1})-({@2})\\cdot {@3}$ je po úprave konštanta. Aká?": "Après simplification, le numérateur de la dérivée ${@0}({@1})-({@2})\\cdot {@3}$ est une constante. Laquelle ?",
  "Čitateľ je nenulová konštanta a menovateľ sa blíži k nule, takže zlomok v absolútnej hodnote rastie nad všetky medze.": "Le numérateur est une constante non nulle et le dénominateur tend vers zéro, donc la fraction croît en valeur absolue au-delà de toute borne.",
  "Čitateľ má nižší stupeň než menovateľ, v čitateli preto zostane len nula a limita je $0$.": "Le numérateur est de degré inférieur au dénominateur, il ne reste donc que zéro au numérateur et la limite est $0$.",
  "Čitateľ zmení znamienko, menovateľ nie: $f(-x)=-f(x)$.": "Le numérateur change de signe, le dénominateur non : $f(-x)=-f(x)$.",
  "Čitateľa aj menovateľa vydelíme najvyššou mocninou menovateľa, teda ${@0}$. Všetky členy tvaru $\\frac{c}{x^k}$ sa blížia k nule. {@1}": "On divise le numérateur et le dénominateur par la plus haute puissance du dénominateur, c’est-à-dire ${@0}$. Tous les termes de la forme $\\frac{c}{x^k}$ tendent vers zéro. {@1}",
  "Člen $uv'$ je $({@0})\\cdot\\frac{1}{x}$. Koľko je teda $f'(1)$?": "Le terme $uv'$ vaut $({@0})\\cdot\\frac{1}{x}$. Combien vaut donc $f'(1)$ ?",
  "Číslo $f({@0})$ nie je absolútny člen $q$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a roznásob zátvorku.": "Le nombre $f({@0})$ n’est pas l’ordonnée à l’origine $q$. Remplace dans $y=f(x_0)+f'(x_0)(x-x_0)$ et développe la parenthèse.",
  "Číslo z vodorovnej asymptoty $y=\\dots$ (limita pre $x\\to\\infty$)?": "Le nombre de l’asymptote horizontale $y=\\dots$ (limite pour $x\\to\\infty$) ?",
  "Číslo zo zvislej asymptoty $x=\\dots$ (nulový bod menovateľa)?": "Le nombre de l’asymptote verticale $x=\\dots$ (valeur qui annule le dénominateur) ?",
  "čas behu na 100 m": "temps sur 100 m",
  "čierne": "noires",
  "čiernych": "noires",
  "ľubovoľnú cifru": "n’importe quel chiffre",
  "ľubovoľnú cifru okrem nuly": "n’importe quel chiffre sauf zéro",
  "Žiaci odpovedali, ako chodia do školy:{@0}{@1} Výsledok zaokrúhli na desatiny.": "Les élèves ont indiqué comment ils vont à l’école :{@0}{@1} Arrondis le résultat au dixième.",
  "Žiadny z nich neleží vo vnútri intervalu.": "Aucun d’eux n’est à l’intérieur de l’intervalle.",
  "Žiak v teste s {@0} otázkami náhodne tipuje; každá otázka má štyri možnosti a práve jedna je správna. Náhodná premenná $X$ je počet správnych odpovedí.": "Un élève répond au hasard à un test de {@0} questions ; chaque question a quatre réponses possibles, dont exactement une est correcte. La variable aléatoire $X$ est le nombre de bonnes réponses.",
  "žiadny reálny koreň": "aucune racine réelle",
  "„Najviac jeden“ zahŕňa aj možnosť, že nenastane žiadny úspech. Pripočítaj $P(X=0)$.": "« Au plus un » inclut aussi la possibilité qu’il n’y ait aucun succès. Ajoute $P(X=0)$.",
  "„Najviac jeden“ znamená 0 alebo 1 úspech. Sčítaj tieto dve pravdepodobnosti.": "« Au plus un » signifie 0 ou 1 succès. Additionne ces deux probabilités."
 }
});
