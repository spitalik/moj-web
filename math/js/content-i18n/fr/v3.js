/* Français: preklad js/rocniky/v3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/v3/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "v3-pojem": {
   "title": "Notion d’équation différentielle, problème de Cauchy, champ de directions",
   "summary": "Ordre d’une équation, solution générale et particulière, problème à valeur initiale, théorème d’existence et d’unicité, champ de directions.",
   "theory": [
    "<p>Une <strong>équation différentielle ordinaire (EDO)</strong> est une équation $F(x, y, y', \\dots, y^{(n)}) = 0$ dont l’inconnue est une fonction\n       d’une variable $y = y(x)$ et dans laquelle apparaissent des dérivées de cette fonction. L’<strong>ordre</strong> de l’équation est l’ordre de la plus haute dérivée\n       qui y figure réellement : $y'' + (y')^{5} = x$ est une équation d’ordre 2, la puissance $(y')^{5}$ ne change rien à l’ordre.\n       L’équation est <strong>linéaire</strong> si elle est linéaire par rapport à $y, y', \\dots, y^{(n)}$, c’est-à-dire de la forme\n       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$.</p>\n       <p>Une <strong>solution</strong> sur l’intervalle $I$ est une fonction qui admet sur $I$ des dérivées jusqu’à l’ordre $n$ et qui, après substitution, vérifie l’équation pour tout $x\\in I$.\n       La <strong>solution générale</strong> d’une équation d’ordre $n$ est une famille de solutions $y = \\varphi(x, C_1, \\dots, C_n)$ à $n$ constantes indépendantes ;\n       une <strong>solution particulière</strong> s’obtient par un choix précis des constantes. Une solution qu’on n’obtient à partir de la solution générale pour aucun choix des constantes\n       est dite <strong>singulière</strong>.</p>",
    "<p><strong>Problème de Cauchy (problème à valeur initiale)</strong> pour une équation d’ordre 1 : trouver une solution de l’équation $y' = f(x, y)$ qui vérifie\n       la <strong>condition initiale</strong> $y(x_0) = y_0$. Pour une équation d’ordre $n$, on impose $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$.</p>\n       <p><strong>Théorème (de Cauchy-Lipschitz, Picard-Lindelöf).</strong> Si les fonctions $f$ et $\\frac{\\partial f}{\\partial y}$ sont continues au voisinage du point $[x_0; y_0]$, il existe\n       un intervalle autour de $x_0$ sur lequel le problème de Cauchy admet <strong>exactement une</strong> solution. Sans ces hypothèses, l’unicité peut ne pas être vérifiée :\n       le problème $y' = 3y^{2/3}$, $y(0) = 0$ admet pour solutions à la fois $y = 0$ et $y = x^{3}$ (ici $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$ n’est pas définie en $y = 0$).</p>",
    "<p><strong>Champ de directions.</strong> L’équation $y' = f(x, y)$ impose en chaque point $[x; y]$ la pente de la tangente à la solution qui passe par ce point.\n       Si l’on trace en des points du plan de petits segments de pente $f(x, y)$, on obtient le champ de directions. Le graphe d’une solution (<strong>courbe intégrale</strong>)\n       est tangent au champ en chacun de ses points. Les courbes $f(x, y) = k$, sur lesquelles tous les segments ont la même pente $k$, s’appellent des <strong>isoclines</strong>.</p>",
    {
     "fig": "v3-smerove-pole",
     "caption": "Champ de directions de l’équation $y' = x - y$. La droite en pointillés $y = x$ est l’isocline de pente $0$, la droite verte $y = x - 1$ est l’isocline de pente $1$ et c’est aussi une solution. Fais varier la valeur initiale $y(0)$ : toutes les solutions se rapprochent de la droite $y = x - 1$ quand $x\\to\\infty$."
    }
   ],
   "examples": [
    {
     "task": "Vérifie que $y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$ est solution de l’équation $y'' - y' - 2y = 0$ pour tous $C_1, C_2$. Quel est l’ordre de l’équation ?",
     "steps": [
      "L’équation contient la dérivée seconde et aucune dérivée d’ordre supérieur, elle est donc <strong>d’ordre 2</strong>.",
      "On dérive : $y' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$, $y'' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$.",
      "On substitue : $(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$.",
      "L’égalité est vraie pour tout $x$ et pour tous $C_1, C_2$. La fonction contient deux constantes indépendantes, il s’agit de la <strong>solution générale</strong>."
     ]
    },
    {
     "task": "Montre que $y = C\\mathrm{e}^{-x} + x - 1$ est la solution générale de l’équation $y' = x - y$ et trouve la solution du problème de Cauchy avec la condition $y(0) = 2$.",
     "steps": [
      "$y' = -C\\mathrm{e}^{-x} + 1$ et $x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$. Les deux membres sont égaux.",
      "D’après la condition : $y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$, donc $C = 3$.",
      "<strong>Solution particulière : $y = 3\\mathrm{e}^{-x} + x - 1$.</strong> C’est la courbe de la figure pour $y(0) = 2$."
     ]
    }
   ]
  },
  "v3-separovatelne": {
   "title": "Équations à variables séparables",
   "summary": "L’équation $y' = g(x)\\,h(y)$ : séparation des variables, solutions stationnaires, équations du type $y' = f(ax + by + c)$.",
   "theory": [
    "<p>Une équation à <strong>variables séparables</strong> est de la forme $y' = g(x)\\,h(y)$, où $g$ est continue sur un intervalle $I$\n       et $h$ continue sur un intervalle $J$. On peut l’écrire de façon équivalente sous la forme différentielle $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$.</p>\n       <p><strong>Méthode :</strong></p>\n       <ol><li>On cherche les zéros de la fonction $h$. Si $h(c) = 0$, la constante $y = c$ est une solution, appelée <strong>solution stationnaire</strong>.</li>\n       <li>Pour $h(y)\\neq 0$, on sépare les variables : $\\frac{dy}{h(y)} = g(x)\\,dx$.</li>\n       <li>On intègre : $\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$. On obtient la solution sous forme implicite, qu’on exprime si possible sous forme explicite.</li>\n       <li>On détermine la constante $C$ à partir de la condition initiale et on vérifie sur quel intervalle la solution existe.</li></ol>",
    "<p><strong>Attention à la perte de solutions.</strong> En divisant par $h(y)$, on peut perdre des solutions stationnaires ; il faut donc les écrire à part\n       (parfois elles sont contenues dans la solution générale pour $C = 0$ : par exemple, pour $y' = ky$, la formule $y = C\\mathrm{e}^{kx}$ donne aussi $y = 0$).\n       La solution d’une équation non linéaire peut ne pas exister sur tout $\\mathbb{R}$, même si le second membre est simple : la solution du problème $y' = y^{2}$, $y(0) = 1$\n       est $y = \\frac{1}{1 - x}$ et elle n’existe que sur l’intervalle $]-\\infty; 1[$.</p>\n       <p>On ramène les <strong>équations du type $y' = f(ax + by + c)$</strong>, par le changement de fonction $z = ax + by + c$, à l’équation à variables séparables $z' = a + b\\,f(z)$.</p>",
    {
     "fig": "v3-separovatelne",
     "caption": "L’équation $y' = xy$ a pour solution générale $y = C\\mathrm{e}^{x^{2}/2}$. L’axe $x$ en vert est la solution stationnaire $y = 0$ (pour $C = 0$), la courbe bleue est la solution avec la condition $y(0) = 1$. Les courbes intégrales ne se coupent pas, comme le garantit le théorème d’unicité."
    }
   ],
   "examples": [
    {
     "task": "Résous le problème de Cauchy $y' = xy^{2}$, $y(0) = 1$, et détermine l’intervalle sur lequel la solution existe.",
     "steps": [
      "La solution stationnaire est $y = 0$, mais elle ne vérifie pas la condition $y(0) = 1$.",
      "Pour $y\\neq 0$ : $\\frac{dy}{y^{2}} = x\\,dx$, après intégration $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$.",
      "D’après la condition, $-1 = C$, donc $\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$ et $y = \\frac{2}{2 - x^{2}}$.",
      "<strong>La solution $y = \\frac{2}{2 - x^{2}}$ existe sur l’intervalle $]-\\sqrt{2}; \\sqrt{2}[$</strong>, qui contient le point $x_0 = 0$ ; aux points $\\pm\\sqrt{2}$, la courbe a des asymptotes verticales."
     ]
    },
    {
     "task": "Résous le problème de Cauchy $y' = \\mathrm{e}^{x - y}$, $y(0) = \\ln 2$.",
     "steps": [
      "Le second membre est un produit : $y' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$. On sépare les variables : $\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$.",
      "On intègre : $\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$. D’après la condition, $2 = 1 + C$, donc $C = 1$.",
      "<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>, la solution existe sur tout $\\mathbb{R}$."
     ]
    }
   ]
  },
  "v3-homogenne": {
   "title": "Équations différentielles homogènes",
   "summary": "Équations $y' = \\varphi\\left(\\frac{y}{x}\\right)$, changement de fonction $y = ux$ et équations qui se ramènent à des équations homogènes.",
   "theory": [
    "<p>Une fonction $f(x, y)$ est <strong>homogène de degré $k$</strong> si $f(tx, ty) = t^{k}f(x, y)$ pour tout $t \\gt 0$. L’équation $y' = f(x, y)$ est dite\n       <strong>homogène</strong> si $f$ est homogène de degré $0$ ; alors $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$, donc l’équation est de la forme\n       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$\n       L’équation $M(x, y)\\,dx + N(x, y)\\,dy = 0$ est homogène si $M$ et $N$ sont des fonctions homogènes de même degré\n       (par exemple $\\frac{x^{2} + y^{2}}{xy}$ : le numérateur et le dénominateur sont de degré $2$).</p>",
    "<p><strong>Changement de fonction $y = ux$</strong>, où $u = u(x)$ est la nouvelle fonction inconnue. Alors $y' = u + xu'$ et l’équation devient\n       $$xu' = \\varphi(u) - u,$$\n       qui est une équation à variables séparables : $\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$. Si $\\varphi(u_0) = u_0$, la droite $y = u_0x$\n       est une solution. Après intégration, on revient à $u = \\frac{y}{x}$.</p>\n       <p><strong>Équations qui se ramènent à des équations homogènes</strong> : $y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$ avec un déterminant non nul\n       $a_1b_2 - a_2b_1$. Par la translation $x = X + x_0$, $y = Y + y_0$, où $[x_0; y_0]$ est le point d’intersection des droites $a_ix + b_iy + c_i = 0$, les termes constants disparaissent.</p>",
    {
     "fig": "v3-homogenne",
     "caption": "Pour une équation homogène, le champ de directions a la même direction en tout point d’une droite $y = ux$ passant par l’origine (lignes en pointillés). L’équation $y' = \\frac{x + y}{x - y}$ a, en coordonnées polaires, les solutions $r = C\\mathrm{e}^{\\varphi}$, c’est-à-dire des spirales logarithmiques."
    }
   ],
   "examples": [
    {
     "task": "Trouve la solution générale de l’équation $y' = \\dfrac{x^{2} + y^{2}}{xy}$ pour $x \\gt 0$.",
     "steps": [
      "Le numérateur et le dénominateur sont homogènes de degré $2$. En divisant par $x^{2}$ : $y' = \\frac{1 + u^{2}}{u}$, où $u = \\frac{y}{x}$.",
      "On substitue $y' = u + xu'$ : $u + xu' = \\frac{1}{u} + u$, donc $xu' = \\frac{1}{u}$.",
      "On sépare les variables : $u\\,du = \\frac{dx}{x}$, après intégration $\\frac{u^{2}}{2} = \\ln x + C$.",
      "<strong>Solution : $y^{2} = x^{2}(2\\ln x + C_1)$</strong>, où $C_1 = 2C$."
     ]
    },
    {
     "task": "Résous le problème de Cauchy $y' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$, $y(1) = 0$.",
     "steps": [
      "Changement de fonction $y = ux$ : $u + xu' = u + \\mathrm{e}^{-u}$, donc $xu' = \\mathrm{e}^{-u}$.",
      "On sépare les variables : $\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$, d’où $\\mathrm{e}^{u} = \\ln x + C$.",
      "D’après la condition $u(1) = 0$ : $1 = 0 + C$, donc $C = 1$ et $u = \\ln(1 + \\ln x)$.",
      "<strong>$y = x\\ln(1 + \\ln x)$</strong> pour $x \\gt \\mathrm{e}^{-1}$."
     ]
    }
   ]
  },
  "v3-linearne": {
   "title": "Équations linéaires d’ordre 1 et équation de Bernoulli",
   "summary": "Facteur intégrant, variation de la constante, structure de la solution $y = y_h + y_p$ et changement de fonction $z = y^{1-n}$.",
   "theory": [
    "<p>Une <strong>équation linéaire d’ordre 1</strong> est de la forme $y' + p(x)\\,y = q(x)$, où $p, q$ sont continues sur un intervalle $I$. Si $q = 0$, l’équation est\n       <strong>homogène</strong> (au sens des équations linéaires, on dit aussi « sans second membre ») et elle est à variables séparables : $y_h = C\\mathrm{e}^{-P(x)}$, où $P$ est une primitive quelconque de $p$.\n       La solution générale de l’équation complète est $y = y_h + y_p$, somme de la solution générale de l’équation homogène et d’une solution (particulière)\n       de l’équation complète. Le problème de Cauchy admet exactement une solution sur tout $I$.</p>",
    "<p><strong>Facteur intégrant.</strong> On multiplie l’équation par $\\mu(x) = \\mathrm{e}^{P(x)}$. Le membre de gauche devient alors la dérivée d’un produit :\n       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$\n       La <strong>variation de la constante</strong> conduit au même résultat : on cherche la solution sous la forme $y = C(x)\\,\\mathrm{e}^{-P(x)}$ ; après substitution,\n       les termes contenant $C(x)$ se simplifient et il reste $C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$.</p>",
    "<p><strong>Équation de Bernoulli</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$, $n\\neq 0, 1$. On la divise par $y^{n}$ et on pose $z = y^{1-n}$,\n       de sorte que $z' = (1-n)\\,y^{-n}y'$. On obtient l’équation linéaire\n       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$\n       Pour $n \\gt 0$, $y = 0$ est aussi une solution, qui se perd lors de la division. Par exemple, l’équation logistique $y' = ry - \\frac{r}{K}y^{2}$ est une équation de Bernoulli avec $n = 2$.</p>"
   ],
   "examples": [
    {
     "task": "Résous le problème de Cauchy $y' + 2y = 4x$, $y(0) = 1$.",
     "steps": [
      "$p = 2$, facteur intégrant $\\mu = \\mathrm{e}^{2x}$. L’équation devient $(y\\mathrm{e}^{2x})' = 4x\\mathrm{e}^{2x}$.",
      "Par parties : $\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$, donc $y = 2x - 1 + C\\mathrm{e}^{-2x}$.",
      "D’après la condition : $-1 + C = 1$, $C = 2$.",
      "<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$.</strong> Vérification : $y' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$."
     ]
    },
    {
     "task": "Trouve la solution générale de l’équation de Bernoulli $y' + \\dfrac{y}{x} = xy^{2}$ pour $x \\gt 0$.",
     "steps": [
      "$n = 2$, donc $z = y^{-1}$ et $z' = -y^{-2}y'$. En divisant l’équation par $y^{2}$ : $y^{-2}y' + \\frac{1}{x}y^{-1} = x$, donc $-z' + \\frac{z}{x} = x$.",
      "L’équation linéaire $z' - \\frac{z}{x} = -x$ a pour facteur intégrant $\\mu = \\frac{1}{x}$ : $\\left(\\frac{z}{x}\\right)' = -1$, d’où $z = Cx - x^{2}$.",
      "<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong>, et en plus la solution stationnaire $y = 0$."
     ]
    }
   ]
  },
  "v3-exaktne": {
   "title": "Équations différentielles exactes et facteur intégrant",
   "summary": "L’équation $M\\,dx + N\\,dy = 0$ avec $M_y = N_x$, fonction potentielle $F(x, y)$ et facteur intégrant dépendant d’une seule variable.",
   "theory": [
    "<p>L’équation $M(x, y)\\,dx + N(x, y)\\,dy = 0$ est <strong>exacte</strong> sur un domaine $D$ s’il existe une fonction $F(x, y)$ (fonction potentielle, potentiel) telle que\n       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$\n       c’est-à-dire si le membre de gauche est la différentielle totale $dF$. Le long de toute solution, on a alors $dF = 0$, donc l’<strong>intégrale générale</strong> est $F(x, y) = C$ :\n       les courbes intégrales sont les lignes de niveau de la fonction $F$.</p>\n       <p><strong>Critère.</strong> Si $M, N$ sont continûment différentiables sur un domaine simplement connexe, l’équation est exacte si et seulement si\n       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>",
    "<p><strong>Calcul de $F$.</strong> On intègre $M$ par rapport à $x$ (en considérant la variable $y$ comme une constante) : $F = \\int M\\,dx + \\varphi(y)$.\n       On détermine la fonction inconnue $\\varphi$ à partir de la condition $\\frac{\\partial F}{\\partial y} = N$, qui donne $\\varphi'(y)$ ne dépendant que de $y$.\n       On peut tout aussi bien commencer par intégrer $N$ par rapport à $y$.</p>\n       <p><strong>Facteur intégrant.</strong> Si l’équation n’est pas exacte, on cherche une fonction $\\mu \\neq 0$ telle que $\\mu M\\,dx + \\mu N\\,dy = 0$ soit exacte,\n       c’est-à-dire $(\\mu M)_y = (\\mu N)_x$. Dans deux cas simples :</p>\n       <ul><li>si $\\dfrac{M_y - N_x}{N} = \\omega(x)$ ne dépend que de $x$, alors $\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$ ;</li>\n       <li>si $\\dfrac{N_x - M_y}{M} = \\omega(y)$ ne dépend que de $y$, alors $\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$.</li></ul>\n       <p>Par exemple, l’équation linéaire $y' + p(x)y = q(x)$, écrite sous la forme $(p y - q)\\,dx + dy = 0$, a $\\omega = p(x)$ et le facteur bien connu $\\mu = \\mathrm{e}^{\\int p\\,dx}$.</p>",
    {
     "fig": "v3-exaktne",
     "caption": "L’équation $(2x - y)\\,dx + (2y - x)\\,dy = 0$ est exacte avec $F(x, y) = x^{2} - xy + y^{2}$. Les courbes intégrales sont les ellipses $F = C$ ; la courbe passant par le point $[1; 2]$ correspond à $C = 3$."
    }
   ],
   "examples": [
    {
     "task": "Résous l’équation $(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$ et trouve la courbe intégrale qui passe par le point $[1; 1]$.",
     "steps": [
      "$M_y = 2x$ et $N_x = 2x$, l’équation est exacte.",
      "$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$.",
      "$F_y = x^{2} + \\varphi'(y) = x^{2} + 2y$, donc $\\varphi'(y) = 2y$ et $\\varphi(y) = y^{2}$.",
      "Intégrale générale $x^{2}y + x^{3} + y^{2} = C$. Le point $[1; 1]$ donne $C = 3$.",
      "<strong>$x^{2}y + x^{3} + y^{2} = 3$.</strong>"
     ]
    },
    {
     "task": "Trouve un facteur intégrant de l’équation $(y + x^{2})\\,dx - x\\,dy = 0$ ($x \\gt 0$) et résous l’équation.",
     "steps": [
      "$M_y = 1$, $N_x = -1$, l’équation n’est pas exacte. $\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$ ne dépend que de $x$.",
      "$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$. Nouvelle équation : $\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$, où $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$.",
      "$F = -\\frac{y}{x} + x$ (vérifie $F_x$ et $F_y$), intégrale générale $x - \\frac{y}{x} = C$.",
      "<strong>$y = x^{2} - Cx$.</strong>"
     ]
    }
   ]
  },
  "v3-aplikacie": {
   "title": "Applications des équations d’ordre 1",
   "summary": "Croissance d’une population et désintégration radioactive, loi de refroidissement de Newton, équation logistique, circuit RC et mélange de solutions.",
   "theory": [
    "<p><strong>Croissance et décroissance exponentielles.</strong> Si la vitesse de variation d’une grandeur est proportionnelle à sa valeur instantanée, on a $y' = ky$, donc\n       $y(t) = y_0\\mathrm{e}^{kt}$. Pour $k \\gt 0$, il s’agit d’une croissance (population, intérêts composés en continu) ; le temps de doublement vaut $\\frac{\\ln 2}{k}$.\n       Pour $k \\lt 0$, il s’agit d’une décroissance ; un isotope radioactif de <strong>demi-vie</strong> $T$ a $k = -\\frac{\\ln 2}{T}$, et donc $m(t) = m_0\\cdot 2^{-t/T}$.</p>\n       <p><strong>Loi de refroidissement de Newton.</strong> La température d’un corps placé dans un milieu à température constante $T_o$ varie à une vitesse proportionnelle à la différence des températures :\n       $T' = -k(T - T_o)$, $k \\gt 0$. La solution est $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$ ; on détermine généralement la constante $k$ à partir d’une mesure supplémentaire.</p>",
    {
     "fig": "v3-rast",
     "caption": "La courbe bleue est la solution de $y' = ky$, $y(0) = 1$ ; la verte est la solution de l’équation logistique avec le même $k$ et la capacité d’accueil $K$ (ligne en pointillés). Au début, elles sont presque identiques, mais la courbe logistique se stabilise à la valeur $K$."
    },
    "<p>L’<strong>équation logistique</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$ décrit une croissance avec des ressources limitées ; $K$ est la capacité d’accueil du milieu.\n       Elle est à variables séparables (et aussi de Bernoulli), et sa solution est\n       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$\n       Les solutions stationnaires sont $P = 0$ (instable) et $P = K$ (stable). La population croît le plus vite pour $P = \\frac{K}{2}$, à l’instant $t = \\frac{\\ln A}{r}$.</p>",
    "<p><strong>Circuit RC.</strong> Pour la charge d’un condensateur alimenté par une source de tension $U$ à travers une résistance $R$, on a $Rq' + \\frac{q}{C} = U$.\n       Avec une charge initiale nulle, la tension aux bornes du condensateur est $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, où $\\tau = RC$ est la <strong>constante de temps</strong>\n       (au bout du temps $\\tau$, le condensateur est chargé à environ $63\\,\\%$ de la tension $U$).</p>\n       <p><strong>Mélange de solutions.</strong> Une cuve contient $V$ litres de solution ; il y entre $q$ litres par minute d’une solution de concentration $c$, et il en sort au même débit\n       une solution parfaitement mélangée. Pour la quantité de substance $x(t)$, on a le bilan « entrée moins sortie » :\n       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>"
   ],
   "examples": [
    {
     "task": "Un café à $90\\,{}^\\circ\\mathrm{C}$ est posé dans une pièce à $20\\,{}^\\circ\\mathrm{C}$. Au bout de $10$ minutes, il est à $60\\,{}^\\circ\\mathrm{C}$. Quand refroidira-t-il à $40\\,{}^\\circ\\mathrm{C}$ ?",
     "steps": [
      "$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$. D’après la mesure, $60 = 20 + 70\\,\\mathrm{e}^{-10k}$, donc $\\mathrm{e}^{-10k} = \\frac{4}{7}$ et $k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0{,}0560$.",
      "La condition $40 = 20 + 70\\,\\mathrm{e}^{-kt}$ donne $\\mathrm{e}^{-kt} = \\frac{2}{7}$, donc $t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3{,}5}{\\ln 1{,}75}$.",
      "<strong>$t \\approx 22{,}4$ minutes.</strong>"
     ]
    },
    {
     "task": "Une cuve contient $100$ litres d’eau dans lesquels sont dissous $5\\,\\mathrm{kg}$ de sel. Il y entre $4$ litres par minute d’une solution de concentration $0{,}2\\,\\mathrm{kg/l}$, et la solution mélangée en sort au même débit. Quelle quantité de sel la cuve contient-elle au bout de $25$ minutes ?",
     "steps": [
      "Bilan : $x' = 0{,}2\\cdot 4 - \\frac{4}{100}x = 0{,}8 - 0{,}04x$, $x(0) = 5$.",
      "Équation linéaire à coefficients constants : la valeur d’équilibre est $x = 20$, donc $x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0{,}04t} = 20 - 15\\,\\mathrm{e}^{-0{,}04t}$.",
      "<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14{,}48\\,\\mathrm{kg}$.</strong> Pour $t\\to\\infty$, la quantité se rapproche de $20\\,\\mathrm{kg}$."
     ]
    }
   ]
  },
  "v3-charakteristicka": {
   "title": "Équations linéaires d’ordre 2 à coefficients constants",
   "summary": "Système fondamental, wronskien, équation caractéristique et les trois types de racines.",
   "theory": [
    "<p>L’<strong>équation linéaire homogène d’ordre 2</strong> $y'' + a_1(x)y' + a_0(x)y = 0$, à coefficients continus sur un intervalle $I$, a les propriétés suivantes :</p>\n       <ul><li><strong>Principe de superposition :</strong> toute combinaison linéaire de solutions est encore une solution ; les solutions forment un espace vectoriel de dimension $2$.</li>\n       <li>Un <strong>système fondamental</strong> est un couple de solutions linéairement indépendantes $y_1, y_2$ ; la solution générale est $y = C_1y_1 + C_2y_2$.</li>\n       <li><strong>Wronskien</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$. Les solutions $y_1, y_2$ sont linéairement indépendantes si et seulement si\n       $W(x)\\neq 0$ (il suffit de le vérifier en un point). On a la <strong>formule de Liouville</strong> $W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$.</li></ul>",
    "<p><strong>Coefficients constants.</strong> Pour $y'' + py' + qy = 0$, on essaie $y = \\mathrm{e}^{\\lambda x}$. Après substitution et division par $\\mathrm{e}^{\\lambda x}$, on obtient\n       l’<strong>équation caractéristique</strong> $\\lambda^{2} + p\\lambda + q = 0$. Selon ses racines :</p>\n       <table class=\"tbl\"><tr><th>racines</th><th>système fondamental</th><th>solution générale</th></tr>\n       <tr><td>$\\lambda_1\\neq\\lambda_2$ réelles</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>\n       <tr><td>$\\lambda$ racine double</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>\n       <p>Pour des racines complexes, on prend la partie réelle et la partie imaginaire de la solution complexe $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$.\n       La même méthode fonctionne pour les équations d’ordre supérieur : à une racine $\\lambda$ de multiplicité $k$ correspondent les fonctions $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$.</p>",
    {
     "fig": "v3-rad2",
     "caption": "Solution de l’équation $y'' + py' + qy = 0$ avec les conditions initiales $y(0) = 1$, $y'(0) = 0$. Avec des racines complexes, la solution oscille, avec des racines réelles, non ; le signe de la partie réelle des racines détermine si la solution s’amortit ou croît."
    }
   ],
   "examples": [
    {
     "task": "Résous le problème de Cauchy $y'' - y' - 6y = 0$, $y(0) = 1$, $y'(0) = 8$.",
     "steps": [
      "L’équation caractéristique $\\lambda^{2} - \\lambda - 6 = 0$ a pour racines $\\lambda_1 = 3$, $\\lambda_2 = -2$.",
      "Solution générale $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$, dérivée $y' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$.",
      "Conditions : $C_1 + C_2 = 1$, $3C_1 - 2C_2 = 8$, d’où $C_1 = 2$, $C_2 = -1$.",
      "<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$.</strong>"
     ]
    },
    {
     "task": "Trouve un système fondamental de l’équation $y'' + 4y' + 13y = 0$ et calcule son wronskien.",
     "steps": [
      "$\\lambda^{2} + 4\\lambda + 13 = 0$, $D = 16 - 52 = -36$, racines $\\lambda = -2\\pm 3\\mathrm{i}$.",
      "Système fondamental : $y_1 = \\mathrm{e}^{-2x}\\cos 3x$, $y_2 = \\mathrm{e}^{-2x}\\sin 3x$.",
      "$W = y_1y_2' - y_1'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.",
      "<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>, conformément à la formule de Liouville $W(x) = W(0)\\,\\mathrm{e}^{-4x}$."
     ]
    }
   ]
  },
  "v3-nehomogenne": {
   "title": "Équations d’ordre 2 avec second membre",
   "summary": "Structure de la solution $y = y_h + y_p$, méthode des coefficients indéterminés pour un second membre particulier et variation des constantes.",
   "theory": [
    "<p>La solution générale de l’équation $y'' + py' + qy = f(x)$ est $y = y_h + y_p$, où $y_h = C_1y_1 + C_2y_2$ est la solution générale de l’équation homogène associée\n       et $y_p$ est une solution (particulière) quelconque de l’équation complète. Si $f = f_1 + f_2$, on peut chercher séparément les solutions particulières pour $f_1$ et $f_2$\n       et les additionner (<strong>principe de superposition</strong>).</p>",
    "<p><strong>Méthode des coefficients indéterminés</strong> (second membre de forme particulière). Si $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$\n       avec des polynômes $P_m, Q_n$, on cherche une solution particulière de la forme\n       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$\n       où $R_N, S_N$ sont des polynômes de degré $N$ à coefficients inconnus et $k$ est la multiplicité du nombre $\\alpha + \\beta\\mathrm{i}$ comme racine de l’équation caractéristique\n       ($k = 0$ si ce n’est pas une racine). On détermine les coefficients en substituant dans l’équation et en identifiant.</p>\n       <table class=\"tbl\"><tr><th>second membre $f(x)$</th><th>forme de $y_p$ (hors résonance)</th></tr>\n       <tr><td>$ax + b$</td><td>$Ax + B$ (si $q\\neq 0$)</td></tr>\n       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>\n       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>\n       <p>Si $\\alpha + \\beta\\mathrm{i}$ est racine de l’équation caractéristique (<strong>résonance</strong>), on multiplie la forme par $x$, et par $x^{2}$ pour une racine double.</p>",
    "<p>La <strong>variation des constantes</strong> fonctionne pour tout second membre continu. On cherche la solution sous la forme $y = C_1(x)y_1 + C_2(x)y_2$ avec la condition\n       $C_1'y_1 + C_2'y_2 = 0$. En substituant, on obtient le système\n       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$\n       dont la solution est $C_1' = -\\frac{y_2 f}{W}$, $C_2' = \\frac{y_1 f}{W}$, où $W$ est le wronskien. Cette méthode est nécessaire par exemple pour les seconds membres\n       $\\frac{1}{\\cos x}$, $\\tan x$, $\\ln x$ ou $\\frac{\\mathrm{e}^{x}}{x}$.</p>"
   ],
   "examples": [
    {
     "task": "Trouve la solution générale de l’équation $y'' - 3y' + 2y = \\mathrm{e}^{x}$.",
     "steps": [
      "$\\lambda^{2} - 3\\lambda + 2 = 0$ a pour racines $1$ et $2$, donc $y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$.",
      "Le nombre $\\alpha = 1$ est racine simple (résonance), donc $y_p = Ax\\mathrm{e}^{x}$. Alors $y_p' = A(1 + x)\\mathrm{e}^{x}$, $y_p'' = A(2 + x)\\mathrm{e}^{x}$.",
      "On substitue : $A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$, donc $A = -1$.",
      "<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$.</strong>"
     ]
    },
    {
     "task": "Par la méthode de variation des constantes, résous l’équation $y'' + y = \\dfrac{1}{\\cos x}$ sur l’intervalle $\\left]-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right[$.",
     "steps": [
      "$y_1 = \\cos x$, $y_2 = \\sin x$, $W = \\cos^{2} x + \\sin^{2} x = 1$.",
      "$C_1' = -\\frac{\\sin x}{\\cos x}$, donc $C_1 = \\ln(\\cos x) + K_1$ ; $C_2' = \\frac{\\cos x}{\\cos x} = 1$, donc $C_2 = x + K_2$.",
      "<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$.</strong>"
     ]
    }
   ]
  },
  "v3-kmitanie": {
   "title": "Oscillations libres, amorties et forcées",
   "summary": "L’équation $mx'' + cx' + kx = F(t)$, régimes pseudo-périodique, critique et apériodique, oscillations forcées et résonance.",
   "theory": [
    "<p>Un corps de masse $m$ fixé à un ressort de raideur $k$, freiné par une force proportionnelle à la vitesse (coefficient $c$) et soumis à une force extérieure $F(t)$, obéit à l’équation\n       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$\n       où $\\omega_0 = \\sqrt{k/m}$ est la <strong>pulsation propre</strong> et $\\delta = \\frac{c}{2m}$ le <strong>coefficient d’amortissement</strong>.\n       La même équation décrit la charge dans un circuit $RLC$ série : $Lq'' + Rq' + \\frac{1}{C}q = U(t)$.</p>\n       <p><strong>Oscillations libres non amorties</strong> ($c = 0$, $F = 0$) : $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$, d’amplitude\n       $A = \\sqrt{C_1^{2} + C_2^{2}}$ et de période $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$.</p>",
    "<p><strong>Oscillations amorties</strong> ($F = 0$). L’équation caractéristique $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$ a pour racines $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$ :</p>\n       <ul><li>$\\delta \\lt \\omega_0$ (<strong>régime pseudo-périodique</strong>, amortissement faible, $c^{2} \\lt 4mk$) : $x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$,\n       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$ ; oscillations dont l’amplitude décroît exponentiellement ;</li>\n       <li>$\\delta = \\omega_0$ (<strong>régime critique</strong>, $c = 2\\sqrt{mk}$) : $x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$ ;</li>\n       <li>$\\delta \\gt \\omega_0$ (<strong>régime apériodique</strong>, amortissement fort) : somme de deux exponentielles décroissantes, mouvement apériodique.</li></ul>",
    {
     "fig": "v3-tlmenie",
     "caption": "Élongation $x(t)$ pour $\\omega_0 = 2$, $x(0) = 1$, $x'(0) = 0$. Les courbes en pointillés $\\pm\\mathrm{e}^{-\\delta t}$ encadrent les oscillations amorties. Pour $\\delta = 2$, on obtient le régime critique."
    },
    "<p><strong>Oscillations forcées</strong>, $F(t) = F_0\\cos\\omega t$. Sans amortissement et pour $\\omega\\neq\\omega_0$, une solution particulière est\n       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$. Pour $\\omega = \\omega_0$, il y a <strong>résonance</strong> : $x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$,\n       et l’amplitude croît sans limite. Avec amortissement, les oscillations libres s’éteignent et il reste un régime permanent d’amplitude\n       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}},$$\n       maximale pour $\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$ (si $\\omega_0^{2} \\gt 2\\delta^{2}$).</p>",
    {
     "fig": "v3-rezonancia",
     "caption": "Courbe de résonance $A(\\omega)$ pour $\\omega_0 = 2$ et $F_0/m = 1$. Pour un faible amortissement, le maximum est aigu et proche de la pulsation propre (ligne en pointillés)."
    }
   ],
   "examples": [
    {
     "task": "Un corps de masse $1\\,\\mathrm{kg}$ fixé à un ressort de raideur $16\\,\\mathrm{N/m}$ est amorti avec le coefficient $c = 4\\,\\mathrm{kg/s}$. Au départ, il est écarté de $0{,}1\\,\\mathrm{m}$ et lâché sans vitesse initiale. Trouve $x(t)$.",
     "steps": [
      "$x'' + 4x' + 16x = 0$, donc $\\delta = 2$, $\\omega_0 = 4$. Comme $\\delta \\lt \\omega_0$, il s’agit du régime pseudo-périodique.",
      "Racines $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$, $\\omega_d = 2\\sqrt{3}$, $x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$.",
      "$x(0) = C_1 = 0{,}1$ ; $x'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$, donc $C_2 = \\frac{0{,}1}{\\sqrt{3}}$.",
      "<strong>$x(t) = 0{,}1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$.</strong>"
     ]
    },
    {
     "task": "Résous le problème $x'' + 9x = 6\\cos 3t$, $x(0) = 0$, $x'(0) = 0$.",
     "steps": [
      "La pulsation d’excitation est égale à la pulsation propre ($\\omega = \\omega_0 = 3$), il y a résonance : $x_p = t(A\\cos 3t + B\\sin 3t)$.",
      "En substituant, on obtient $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$, donc $A = 0$, $B = 1$, $x_p = t\\sin 3t$.",
      "Solution générale $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$ ; d’après les conditions, $C_1 = 0$ et $3C_2 = 0$.",
      "<strong>$x(t) = t\\sin 3t$</strong>, l’amplitude croît linéairement avec le temps."
     ]
    }
   ]
  },
  "v3-sustavy": {
   "title": "Systèmes d’équations différentielles linéaires et portrait de phase",
   "summary": "Le système $\\mathbf{x}' = A\\mathbf{x}$, résolution à l’aide des valeurs et vecteurs propres, classification du point d’équilibre.",
   "theory": [
    "<p>Un système d’équations linéaires d’ordre 1 à coefficients constants est de la forme $\\mathbf{x}' = A\\mathbf{x}$, où $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$ et $A$ est\n       une matrice carrée. Les solutions forment un espace vectoriel de dimension $n$ ; la matrice dont les colonnes sont $n$ solutions linéairement indépendantes s’appelle\n       <strong>matrice fondamentale</strong>. Toute équation d’ordre $n$ peut s’écrire comme un système (par exemple, pour $y'' + py' + qy = 0$, on pose $x_1 = y$, $x_2 = y'$),\n       et inversement, un système $2\\times 2$ peut être ramené, par la <strong>méthode d’élimination</strong>, à une seule équation d’ordre 2.</p>",
    "<p><strong>Méthode matricielle.</strong> On cherche une solution $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$. En substituant, $A\\mathbf{v} = \\lambda\\mathbf{v}$ : $\\lambda$ est une\n       <strong>valeur propre</strong> de la matrice $A$ (racine de l’équation $\\det(A - \\lambda I) = 0$) et $\\mathbf{v}$ un vecteur propre associé.</p>\n       <ul><li>$\\lambda_1, \\lambda_2$ réelles distinctes : $\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$.</li>\n       <li>$\\lambda = \\alpha\\pm\\beta\\mathrm{i}$ complexes, de vecteur $\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$ : les solutions réelles sont la partie réelle et la partie imaginaire de\n       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$, c’est-à-dire $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$ et $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$.</li>\n       <li>$\\lambda$ double avec un seul vecteur propre $\\mathbf{v}$ : la deuxième solution est $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$, où $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$.</li></ul>",
    "<p>Le <strong>portrait de phase</strong> d’un système plan représente les trajectoires $(x(t), y(t))$ dans le plan $xy$. Le point $\\mathbf{0}$ est un point d’équilibre (stationnaire) et, si\n       $\\det A\\neq 0$, c’est le seul. Son type est déterminé par les valeurs propres, ou par la trace $\\mathrm{tr}\\,A$ et le déterminant :</p>\n       <table class=\"tbl\"><tr><th>valeurs propres</th><th>type</th><th>stabilité</th></tr>\n       <tr><td>réelles, de signes opposés ($\\det A \\lt 0$)</td><td>col (point selle)</td><td>instable</td></tr>\n       <tr><td>réelles, de même signe</td><td>nœud</td><td>stable pour $\\lambda \\lt 0$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\alpha\\neq 0$</td><td>foyer (spirales)</td><td>stable pour $\\alpha \\lt 0$</td></tr>\n       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>centre (courbes fermées)</td><td>stable, mais pas asymptotiquement</td></tr></table>",
    {
     "fig": "v3-fazovy",
     "caption": "Portrait de phase du système $x' = a_{11}x + a_{12}y$, $y' = a_{21}x + a_{22}y$. Les droites orange sont les directions des vecteurs propres (pour des valeurs propres réelles), les petits triangles indiquent le sens du mouvement quand $t$ augmente. En modifiant les coefficients de la matrice, parcours tous les types du tableau."
    }
   ],
   "examples": [
    {
     "task": "Résous le système $x' = x + 2y$, $y' = 2x + y$ avec la condition initiale $x(0) = 3$, $y(0) = 1$.",
     "steps": [
      "$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$, donc $\\lambda_1 = 3$, $\\lambda_2 = -1$.",
      "Vecteurs propres : pour $\\lambda_1 = 3$, $\\mathbf{v}_1 = (1, 1)^{T}$ ; pour $\\lambda_2 = -1$, $\\mathbf{v}_2 = (1, -1)^{T}$.",
      "$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$. Conditions : $C_1 + C_2 = 3$, $C_1 - C_2 = 1$, donc $C_1 = 2$, $C_2 = 1$.",
      "<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$, $y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$.</strong> Les valeurs propres sont de signes opposés, le point d’équilibre est un col."
     ]
    },
    {
     "task": "Détermine le type du point d’équilibre du système $x' = y$, $y' = -5x - 2y$ et compare-le avec une équation d’ordre 2.",
     "steps": [
      "$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$, $\\mathrm{tr}\\,A = -2$, $\\det A = 5$, équation caractéristique $\\lambda^{2} + 2\\lambda + 5 = 0$.",
      "Les valeurs propres $-1\\pm 2\\mathrm{i}$ ont une partie réelle négative : <strong>foyer stable</strong>, les trajectoires se rapprochent de l’origine en spirale.",
      "Le système est l’écriture de l’équation $x'' + 2x' + 5x = 0$ (oscillations amorties) ; sa solution est $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$."
     ]
    }
   ]
  },
  "v3-laplace": {
   "title": "Transformation de Laplace",
   "summary": "Définition, table des transformées, transformée de la dérivée, transformation inverse par décomposition en éléments simples et résolution de problèmes à valeur initiale.",
   "theory": [
    "<p>La <strong>transformation de Laplace</strong> associe à une fonction $f(t)$ définie pour $t \\ge 0$ une fonction d’une variable complexe (réelle pour nous) $s$ :\n       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$\n       L’intégrale converge pour $s \\gt s_0$ si $f$ est continue par morceaux et d’<strong>ordre exponentiel</strong>, c’est-à-dire $|f(t)| \\le M\\mathrm{e}^{s_0t}$.\n       Par exemple, $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$ pour $s \\gt a$. La transformation est linéaire\n       et injective pour les fonctions continues, de sorte qu’à une image $F$ correspond un unique original $f = \\mathcal{L}^{-1}\\{F\\}$.</p>",
    "<table class=\"tbl\"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>\n       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>\n       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>\n       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>\n       <p>Ici, $u$ est la fonction de Heaviside (échelon unité). La transformée du produit de convolution $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$ est le produit $F(s)G(s)$.</p>",
    "<p><strong>Résolution d’un problème à valeur initiale.</strong> La règle de transformation de la dérivée change une équation linéaire à coefficients constants en une équation algébrique d’inconnue $Y(s)$,\n       dans laquelle les conditions initiales sont intégrées automatiquement. On en tire $Y(s)$ (en général une fraction rationnelle), on la décompose en\n       <strong>éléments simples</strong> et, à l’aide de la table, on trouve $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$. La méthode est particulièrement avantageuse pour des seconds membres discontinus ou impulsionnels.</p>",
    {
     "fig": "v3-laplace",
     "caption": "Démarche de résolution : transformation, calcul algébrique dans le domaine des images et transformation inverse."
    }
   ],
   "examples": [
    {
     "task": "Trouve la transformée de Laplace de la fonction $f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$.",
     "steps": [
      "On utilise la linéarité et la table : $\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$, $\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$, $\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$.",
      "<strong>$F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong> pour $s \\gt 2$."
     ]
    },
    {
     "task": "À l’aide de la transformation de Laplace, résous le problème $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$.",
     "steps": [
      "On transforme : $s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$, donc $(s^{2} + 3s + 2)Y = s + 3$.",
      "$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$ (éléments simples, par exemple par la méthode du cache).",
      "<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$.</strong> Vérification : $y(0) = 1$, $y'(0) = -2 + 2 = 0$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$A = {@0}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, kde $\\mathrm{tr}\\,A = {@2}$ a $\\det A = {@3}$. Korene sú $\\lambda_1 = {@4}$ a $\\lambda_2 = {@5}$.": "$A = {@0}$. L’équation caractéristique $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, où $\\mathrm{tr}\\,A = {@2}$ et $\\det A = {@3}$. Les racines sont $\\lambda_1 = {@4}$ et $\\lambda_2 = {@5}$.",
  "$C_1 + C_2 = {@0}$ a ${@1} = {@2}$": "$C_1 + C_2 = {@0}$ et ${@1} = {@2}$",
  "$C_1 = {@0}$ a ${@1} = {@2}$": "$C_1 = {@0}$ et ${@1} = {@2}$",
  "$M_y = {@0}$, $N_x = {@1}$, teda $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ závisí len od $x$. Preto $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrola: $(\\mu M)_y = {@11}$ a $(\\mu N)_x = {@12}$.": "$M_y = {@0}$, $N_x = {@1}$, donc $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ ne dépend que de $x$. Donc $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Vérification : $(\\mu M)_y = {@11}$ et $(\\mu N)_x = {@12}$.",
  "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, teda asi ${@8}$ jedincov.": "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ avec $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, soit environ ${@8}$ individus.",
  "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-{@4}t} = 1$, teda $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ roka.": "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. La condition $P = \\frac{K}{2}$ signifie $A\\mathrm{e}^{-{@4}t} = 1$, donc $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ an(s).",
  "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, z merania $k = {@2} \\approx {@3}$. Z podmienky ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ máme $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minúty.": "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, d’après la mesure $k = {@2} \\approx {@3}$. De la condition ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$, on a $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minutes.",
  "$\\lambda = {@0}$ (dvojnásobný koreň)": "$\\lambda = {@0}$ (racine double)",
  "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ a $\\mathcal{L}\\{y'\\} = sY{@2}$. Po dosadení $({@3})Y = {@4}{@5}{@6}$, teda ${@7}$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ et $\\mathcal{L}\\{y'\\} = sY{@2}$. Après substitution $({@3})Y = {@4}{@5}{@6}$, donc ${@7}$.",
  "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}": "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, discriminant de l’équation caractéristique $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}",
  "$\\omega_0 = {@0}$, riešenie $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ s $C_1 = x(0) = {@3}$ a ${@4}C_2 = x'(0) = {@5}$, teda $C_2 = {@6}$. Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.": "$\\omega_0 = {@0}$, solution $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ avec $C_1 = x(0) = {@3}$ et ${@4}C_2 = x'(0) = {@5}$, donc $C_2 = {@6}$. Amplitude $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.",
  "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ máme $\\mathrm{e}^{-t/\\tau} = {@2}$, teda $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.": "$\\tau = RC = {@0}\\,\\mathrm{ms}$. De la condition $1 - \\mathrm{e}^{-t/\\tau} = {@1}$, on a $\\mathrm{e}^{-t/\\tau} = {@2}$, donc $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.",
  "$\\varphi'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú": "$\\varphi'(y) = 0$, donc $\\varphi$ est une constante, que l’on choisit nulle",
  "$\\varphi'(y) = {@0}$, teda $\\varphi(y) = {@1}$": "$\\varphi'(y) = {@0}$, donc $\\varphi(y) = {@1}$",
  "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Z podmienky $2^{-t/{@1}} = {@2}$ logaritmovaním $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.": "$m(t) = m_0\\cdot 2^{-t/{@0}}$. De la condition $2^{-t/{@1}} = {@2}$, en prenant le logarithme, $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.",
  "$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov: pri $x^{2}$: ${@0} = {@1}$, $A = {@2}$; pri $x$: ${@3} = {@4}$, $B = {@5}$; absolútny člen: ${@6} = {@7}$, $C = {@8}$.": "$y_p' = 2Ax + B$, $y_p'' = 2A$. Après substitution et identification des coefficients : pour $x^{2}$ : ${@0} = {@1}$, $A = {@2}$ ; pour $x$ : ${@3} = {@4}$, $B = {@5}$ ; terme constant : ${@6} = {@7}$, $C = {@8}$.",
  "$y_p' = A$, $y_p'' = 0$. Dosadíme: ${@0}{@1} = {@2}$. Porovnaním koeficientov: pri $x$ je ${@3} = {@4}$, teda $A = {@5}$; absolútny člen ${@6} = {@7}$, teda $B = {@8}$.": "$y_p' = A$, $y_p'' = 0$. On substitue : ${@0}{@1} = {@2}$. En identifiant les coefficients : pour $x$, ${@3} = {@4}$, donc $A = {@5}$ ; terme constant ${@6} = {@7}$, donc $B = {@8}$.",
  "${@0}$, teda $K = {@1}$ a $m = {@2}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = {@3}$.": "${@0}$, donc $K = {@1}$ et $m = {@2}$. Cela concorde avec la formule de Liouville : $W(x) = W(0)\\,\\mathrm{e}^{-px}$ avec $p = {@3}$.",
  ", teda $a = {@0}$": ", donc $a = {@0}$",
  "Absolútny člen v čitateli kazí homogenitu. Takú rovnicu treba najprv posunúť do priesečníka priamok.": "Le terme constant au numérateur détruit l’homogénéité. Une telle équation doit d’abord être translatée au point d’intersection des droites.",
  "Aké množstvo soli (v kg) je rovnovážne, teda pri ňom je $x' = 0$?": "Quelle quantité de sel (en kg) correspond à l’équilibre, c’est-à-dire à $x' = 0$ ?",
  "Aké napätie (vo voltoch) bude na kondenzátore? {@0}": "Quelle tension (en volts) y aura-t-il aux bornes du condensateur ? {@0}",
  "Akú smernicu má úsečka smerového poľa rovnice $y' = {@0}$ v bode $[{@1}; {@2}]$?": "Quelle est la pente du segment du champ de directions de l’équation $y' = {@0}$ au point $[{@1}; {@2}]$ ?",
  "Akú teplotu bude mať teleso? Zaokrúhli na desatiny stupňa.": "Quelle sera la température du corps ? Arrondis au dixième de degré.",
  "Aký je celkový koeficient pri $\\frac{1}{{@0}}$ v $Y(s)$, teda $A$?": "Quel est le coefficient total de $\\frac{1}{{@0}}$ dans $Y(s)$, c’est-à-dire $A$ ?",
  "Aký je súčin koreňov?": "Quel est le produit des racines ?",
  "Amplitúda nie je súčet $|C_1| + |C_2|$, ale $\\sqrt{C_1^{2} + C_2^{2}}$ (zloženie kosínusu a sínusu s rovnakou frekvenciou).": "L’amplitude n’est pas la somme $|C_1| + |C_2|$, mais $\\sqrt{C_1^{2} + C_2^{2}}$ (composition d’un cosinus et d’un sinus de même fréquence).",
  "Amplitúda vynútených kmitov v závislosti od frekvencie": "Amplitude des oscillations forcées en fonction de la fréquence",
  "Bernoulliho rovnicu $y'{@0} = {@1}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi. Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).": "On transforme l’équation de Bernoulli $y'{@0} = {@1}$ par la substitution $z = y^{k}$ en une équation linéaire $z' + Pz = Q$ à coefficients constants. Détermine $k$, $P$ et $Q$ (écris les fractions sous la forme $a/b$).",
  "Charakteristická rovnica ${@0}$ má diskriminant $D = {@1}$ a korene {@2}. {@3} je všeobecné riešenie ${@4}$.": "L’équation caractéristique ${@0}$ a pour discriminant $D = {@1}$ et pour racines {@2}. {@3}, la solution générale est ${@4}$.",
  "Charakteristická rovnica ${@0}$ má korene $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, teda $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pre $t = 0$: $C_1 + C_2 = {@7}$ a ${@8} = {@9}$, odkiaľ $C_1 = {@10}$, $C_2 = {@11}$.": "L’équation caractéristique ${@0}$ a pour racines $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. De la première ligne de $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pour $\\mathbf{v} = (1, m)^{T}$ : ${@3} - \\lambda{@4} = 0$, donc $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pour $t = 0$ : $C_1 + C_2 = {@7}$ et ${@8} = {@9}$, d’où $C_1 = {@10}$, $C_2 = {@11}$.",
  "Charakteristická rovnica ${@0}$ má korene ${@1}$ a ${@2}$, takže ${@3}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Po dosadení sa členy s $x$ odčítajú a zostane $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, teda $A = {@16}$.": "L’équation caractéristique ${@0}$ a pour racines ${@1}$ et ${@2}$, donc ${@3}$ est racine simple (résonance) et la forme de $y_p$ contient le facteur $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Après substitution, les termes en $x$ s’éliminent et il reste $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, donc $A = {@16}$.",
  "Charakteristická rovnica ${@0}$ má korene {@1}, preto ${@2}$. Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu {@3}, ktorej riešenie je $C_1 = {@4}$, $C_2 = {@5}$.": "L’équation caractéristique ${@0}$ a pour racines {@1}, donc ${@2}$. En substituant $x = 0$ dans $y$ et $y'$, on obtient le système {@3}, dont la solution est $C_1 = {@4}$, $C_2 = {@5}$.",
  "Charakteristická rovnica ${@0}$ má {@1}. Pravá strana je {@2}{@3}, teda $\\alpha = {@4}$, a to {@5} charakteristickej rovnice ($k = {@6}$). Preto $y_p = {@7}$.": "L’équation caractéristique ${@0}$ a {@1}. Le second membre est {@2}{@3}, donc $\\alpha = {@4}$, et ce nombre {@5} de l’équation caractéristique ($k = {@6}$). Donc $y_p = {@7}$.",
  "Charakteristická rovnica (po vydelení koeficientom pri $y''$) je $\\lambda^{2} + p\\lambda + q = 0$. Aký je súčet jej koreňov?": "L’équation caractéristique (après division par le coefficient de $y''$) est $\\lambda^{2} + p\\lambda + q = 0$. Quelle est la somme de ses racines ?",
  "Delil si len číslom ${@0}$, ale v riešení je $x^{2}$, teda $x_0^{2}$.": "Tu as divisé seulement par ${@0}$, mais la solution contient $x^{2}$, donc $x_0^{2}$.",
  "Derivácia $(C_1 + C_2x){@0}$ má pri $x = 0$ hodnotu ${@1}C_1 + C_2$; zabudol si na člen z derivácie exponenciály.": "La dérivée de $(C_1 + C_2x){@0}$ vaut en $x = 0$ ${@1}C_1 + C_2$ ; tu as oublié le terme provenant de la dérivée de l’exponentielle.",
  "Derivácia $C_2\\sin {@0}t$ je ${@1}C_2\\cos {@2}t$, preto $C_2 = \\frac{x'(0)}{\\omega_0}$, nie $x'(0)$.": "La dérivée de $C_2\\sin {@0}t$ est ${@1}C_2\\cos {@2}t$, donc $C_2 = \\frac{x'(0)}{\\omega_0}$, et non $x'(0)$.",
  "Derivácie $y_p$ nie sú nulové: $y_p' = {@0}A{@1}$ a $y_p'' = {@2}A{@3}$ treba tiež dosadiť.": "Les dérivées de $y_p$ ne sont pas nulles : il faut aussi substituer $y_p' = {@0}A{@1}$ et $y_p'' = {@2}A{@3}$.",
  "Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.": "Le déterminant est négatif, les valeurs propres sont réelles et de signes opposés : col.",
  "Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.": "Substitue $x = 0$ et $y = y_0$ dans la solution générale et exprime $C$.",
  "Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme {@0}${@1}$. Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = {@2}$ a $\\lambda_1\\lambda_2 = {@3}$, korene sú {@4}. Všeobecné riešenie je ${@5}$.": "En substituant $y = \\mathrm{e}^{\\lambda x}$, on obtient {@0}${@1}$. D’après les relations de Viète, $\\lambda_1 + \\lambda_2 = {@2}$ et $\\lambda_1\\lambda_2 = {@3}$, les racines sont {@4}. La solution générale est ${@5}$.",
  "Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, odkiaľ $C = {@3}$. Riešenie Cauchyho úlohy je $y = {@4}$.": "On substitue $x = 0$ : $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, d’où $C = {@3}$. La solution du problème de Cauchy est $y = {@4}$.",
  "Dosadíme $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, teda $({@3} - {@4})A = {@5}$ a $A = {@6}$. {@7}": "On substitue $x_p = A\\cos {@0}$ : $x_p'' = -{@1}A\\cos {@2}$, donc $({@3} - {@4})A = {@5}$ et $A = {@6}$. {@7}",
  "Dosadíme: $C\\cdot {@0}^{2}{@1} = {@2}$, teda ${@3}C = {@4}$ a $C = {@5}$.": "On substitue : $C\\cdot {@0}^{2}{@1} = {@2}$, donc ${@3}C = {@4}$ et $C = {@5}$.",
  "Dosadíme: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, teda $\\frac{C}{{@4}} = {@5}$ a $C = {@6}$. (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = {@7} + C$.)": "On substitue : ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, donc $\\frac{C}{{@4}} = {@5}$ et $C = {@6}$. (Vérification : le membre de gauche de l’équation est $(xy)'$ et $xy = {@7} + C$.)",
  "Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.": "Substitue $P = \\frac{K}{2}$ dans la solution $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ ; tu obtiens $A\\mathrm{e}^{-rt} = 1$.",
  "Dosaď $t = 0$ a vyrieš sústavu pre konštanty. Zadaj $C_1$ a $C_2$.": "Substitue $t = 0$ et résous le système pour les constantes. Saisis $C_1$ et $C_2$.",
  "Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.": "Substitue $tx$ à $x$ et $ty$ à $y$. Pour une équation homogène, le membre de droite ne change pas.",
  "Dosaď $x = 0$ do $y_1, y_2, y_1', y_2'$.": "Substitue $x = 0$ dans $y_1, y_2, y_1', y_2'$.",
  "Dosaď $x = 0$ do všeobecného riešenia a jeho derivácie a z vzniknutej sústavy urči $C_1$.": "Substitue $x = 0$ dans la solution générale et dans sa dérivée et détermine $C_1$ à partir du système obtenu.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.": "Substitue $x = x_0$, $y = y_0$ dans la solution générale et exprime $C$.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.": "Substitue $x = x_0$, $y = y_0$ dans la solution générale et résous l’équation linéaire en $C$.",
  "Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.": "Substitue $x_p$ dans l’équation : $(\\omega_0^{2} - \\omega^{2})A = F_0$.",
  "Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.": "Substitue $y_p = Ax + B$ dans l’équation et identifie les coefficients de $x$ et les termes constants.",
  "Dosaď $y_p = A{@0}$ do rovnice a urči $A$.": "Substitue $y_p = A{@0}$ dans l’équation et détermine $A$.",
  "Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.": "Substitue $y_p$ dans l’équation et identifie les coefficients du cosinus et du sinus ; tu obtiens un système de deux équations en $A$, $B$.",
  "Dosaď konštantu $y_p = K$ do rovnice ($y_p' = 0$) a pozorne vyjadri $K$.": "Substitue la constante $y_p = K$ dans l’équation ($y_p' = 0$) et exprime $K$ avec soin.",
  "Druhá derivácia kosínusu je záporná: $x_p'' = -{@0}A\\cos {@1}$.": "La dérivée seconde du cosinus est négative : $x_p'' = -{@0}A\\cos {@1}$.",
  "Exponenciálne neklesá samotná teplota telesa, ale jej rozdiel od teploty okolia $T - T_o$.": "Ce n’est pas la température du corps elle-même qui décroît exponentiellement, mais son écart à la température ambiante $T - T_o$.",
  "Exponenciálny a logistický rast": "Croissance exponentielle et croissance logistique",
  "Exponent je reálna časť koreňov $\\alpha = -\\frac{p}{2}$; skontroluj jej znamienko.": "L’exposant est la partie réelle des racines $\\alpha = -\\frac{p}{2}$ ; vérifie son signe.",
  "Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, teda $\\mathrm{arctg}\\,y = {@1} + C$ a $y = \\mathrm{tg}({@2} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}({@3}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.": "La fonction $1 + y^{2}$ ne s’annule pas, il n’existe pas de solutions stationnaires. On sépare les variables : $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, donc $\\mathrm{arctg}\\,y = {@1} + C$ et $y = \\mathrm{tg}({@2} + C)$. La constante est à l’intérieur de l’argument ; par exemple, $y = \\mathrm{tg}({@3}) + C$ ne vérifie pas l’équation pour $C\\neq 0$.",
  "Funkcie ${@0}$ tvoria fundamentálny systém rovnice ${@1} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.": "Les fonctions ${@0}$ forment un système fondamental de l’équation ${@1} = 0$. Leur wronskien est de la forme $W(x) = K\\mathrm{e}^{mx}$. Détermine $K$ et $m$.",
  "Fázový portrét lineárnej sústavy": "Portrait de phase d’un système linéaire",
  "Goniometrické funkcie patria ku komplexným koreňom ($D \\lt 0$). Aký je tu diskriminant?": "Les fonctions trigonométriques correspondent aux racines complexes ($D \\lt 0$). Quel est ici le discriminant ?",
  "Homogénna rovnica $y'{@0} = 0$ dáva $y' = {@1}$; skontroluj znamienko v exponente.": "L’équation homogène $y'{@0} = 0$ donne $y' = {@1}$ ; vérifie le signe dans l’exposant.",
  "Homogénna rovnica $y'{@0} = 0$ má riešenie $y_h = C{@1}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$: ${@2}K = {@3}$, teda $K = {@4}$. Všeobecné riešenie je ${@5}$.": "L’équation homogène $y'{@0} = 0$ a pour solution $y_h = C{@1}$. On cherche une solution particulière constante $y_p = K$ : ${@2}K = {@3}$, donc $K = {@4}$. La solution générale est ${@5}$.",
  "Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y')^{3}$, rád nezvyšuje.": "Cherche l’ordre le plus élevé de la dérivée. Un exposant au-dessus d’une parenthèse, par exemple $(y')^{3}$, n’augmente pas l’ordre.",
  "Integračný faktor je $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrovaním $y{@3} = {@4} + B$, teda $y = {@5} + B{@6}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Z podmienky ${@12} + B = {@13}$, teda $B = {@14}$. Odpoveď: $A = {@15}$, $B = {@16}$.": "Le facteur intégrant est $\\mu = {@0}$ : $(y{@1})' = {@2}$. En intégrant, $y{@3} = {@4} + B$, donc $y = {@5} + B{@6}$ (on peut aussi trouver la solution particulière en substituant $y_p = A{@7}$ : $A({@8}{@9}) = {@10}$, $A = {@11}$). De la condition ${@12} + B = {@13}$, donc $B = {@14}$. Réponse : $A = {@15}$, $B = {@16}$.",
  "Integračný faktor je ${@0}$ a riešenie má tvar $y = {@1} + \\frac{C}{{@2}}$. Urči $C$ zo začiatočnej podmienky.": "Le facteur intégrant est ${@0}$ et la solution est de la forme $y = {@1} + \\frac{C}{{@2}}$. Détermine $C$ à partir de la condition initiale.",
  "Integruj $M$ podľa $x$ (bez $\\varphi(y)$) a túto časť $F$ vyčísli v bode $[{@0}; {@1}]$.": "Intègre $M$ par rapport à $x$ (sans $\\varphi(y)$) et évalue cette partie de $F$ au point $[{@0}; {@1}]$.",
  "Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.": "Intègre $M$ par rapport à $x$, ajoute la fonction inconnue $\\varphi(y)$ et détermine-la en comparant $F_y$ avec $N$. Enfin, substitue le point.",
  "Integrál dáva $\\mathrm{arctg}\\,y = \\dots$; na vyjadrenie $y$ treba použiť inverznú funkciu k arkustangensu.": "L’intégrale donne $\\mathrm{arctg}\\,y = \\dots$ ; pour exprimer $y$, il faut utiliser la réciproque de l’arc tangente.",
  "Integrálne krivky rovnice y' = xy": "Courbes intégrales de l’équation y' = xy",
  "K koeficientu z rozkladu pripočítaj člen zo začiatočnej podmienky.": "Ajoute au coefficient issu de la décomposition le terme provenant de la condition initiale.",
  "Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.": "Dérive chaque fonction et substitue-la dans l’équation. Une solution doit vérifier l’équation pour tout $x$.",
  "Keďže $c^{2} = 4mk$": "Comme $c^{2} = 4mk$",
  "Keďže $c^{2} \\gt 4mk$": "Comme $c^{2} \\gt 4mk$",
  "Keďže $c^{2} \\lt 4mk$": "Comme $c^{2} \\lt 4mk$",
  "Keďže ${@0}\\neq {@1}$, nejde o rezonanciu.": "Comme ${@0}\\neq {@1}$, il n’y a pas de résonance.",
  "Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.": "Un $A$ positif signifie que les oscillations sont en phase avec la force excitatrice.",
  "Koeficient p": "Coefficient p",
  "Koeficient pri $x'$ (po vydelení hmotnosťou) je $2\\delta$, nie $\\delta$. Najprv ho vydeľ dvoma.": "Le coefficient de $x'$ (après division par la masse) est $2\\delta$, et non $\\delta$. Divise-le d’abord par deux.",
  "Koeficient q": "Coefficient q",
  "Koeficient rastu k": "Taux de croissance k",
  "Koeficient útlmu δ": "Coefficient d’amortissement δ",
  "Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.": "Calcule les coefficients successivement en partant de la plus haute puissance : d’abord $A$ à partir du terme en $x^{2}$, puis $B$, enfin $C$.",
  "Konštanta $A$ vychádza z podmienky $P(0) = \\frac{K}{1 + A} = P_0$, teda $A = \\frac{K - P_0}{P_0}$, nie $\\frac{K}{P_0}$.": "La constante $A$ découle de la condition $P(0) = \\frac{K}{1 + A} = P_0$, donc $A = \\frac{K - P_0}{P_0}$, et non $\\frac{K}{P_0}$.",
  "Konštanta $C$ v riešení je delená integračným faktorom ${@0}$; pri $x = 2$ ju treba tiež vydeliť.": "Dans la solution, la constante $C$ est divisée par le facteur intégrant ${@0}$ ; pour $x = 2$, il faut aussi la diviser.",
  "Konštanta rozpadu nie je $\\frac{1}{T}$, ale $k = \\frac{\\ln 2}{T}$: za čas $T$ musí množstvo klesnúť presne na polovicu.": "La constante de désintégration n’est pas $\\frac{1}{T}$, mais $k = \\frac{\\ln 2}{T}$ : au bout du temps $T$, la quantité doit diminuer exactement de moitié.",
  "Konštanta vzniká pri integrovaní, teda v rovnosti $\\mathrm{arctg}\\,y = \\dots + C$. Keď z nej vyjadríš $y$, kam sa $C$ dostane?": "La constante apparaît lors de l’intégration, donc dans l’égalité $\\mathrm{arctg}\\,y = \\dots + C$. Quand tu en exprimes $y$, où se retrouve $C$ ?",
  "Koľko gramov izotopu zostane? {@0}": "Combien de grammes de l’isotope resteront ? {@0}",
  "Koľko je $y({@0})^{2}$?": "Que vaut $y({@0})^{2}$ ?",
  "Koľko jedincov bude mať populácia? Zaokrúhli na celé číslo.": "Combien d’individus comptera la population ? Arrondis à l’entier.",
  "Koľko kilogramov soli bude v nádrži po ${@0}$ minútach? {@1}": "Combien de kilogrammes de sel y aura-t-il dans le réservoir au bout de ${@0}$ minutes ? {@1}",
  "Koľko polčasov rozpadu uplynie za ${@0}$ {@1}? {@2}": "Combien de demi-vies s’écoulent en ${@0}$ {@1} ? {@2}",
  "Ktorá funkcia je všeobecným riešením rovnice $y' = {@0}(1 + y^{2})$?": "Quelle fonction est la solution générale de l’équation $y' = {@0}(1 + y^{2})$ ?",
  "Ktorá funkcia je všeobecným riešením rovnice $y'{@0} = {@1}$?": "Quelle fonction est la solution générale de l’équation $y'{@0} = {@1}$ ?",
  "Ktorá funkcia je všeobecným riešením rovnice ${@0} = 0$?": "Quelle fonction est la solution générale de l’équation ${@0} = 0$ ?",
  "Ktorá z funkcií je riešením rovnice ${@0}$?": "Laquelle de ces fonctions est solution de l’équation ${@0}$ ?",
  "Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y' = \\varphi\\left(\\frac{y}{x}\\right)$?": "Laquelle de ces équations est homogène, c’est-à-dire peut s’écrire sous la forme $y' = \\varphi\\left(\\frac{y}{x}\\right)$ ?",
  "Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?": "Quelle est la transformée de Laplace $Y(s)$ de la solution du problème ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ ?",
  "Laplaceovou transformáciou vyrieš úlohu $y'{@0} = {@1}$, $y(0) = {@2}$. Riešenie má tvar $y(t) = A{@3} + B{@4}$; urči $A$ a $B$.": "Résous par la transformée de Laplace le problème $y'{@0} = {@1}$, $y(0) = {@2}$. La solution est de la forme $y(t) = A{@3} + B{@4}$ ; détermine $A$ et $B$.",
  "Liouvilleov vzorec: $W(x) = W(0)\\mathrm{e}^{-px}$.": "Formule de Liouville : $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Menovateľ je charakteristický polynóm rovnice: koeficienty pri $s$ majú rovnaké znamienka ako pri $y'$ v rovnici.": "Le dénominateur est le polynôme caractéristique de l’équation : les coefficients de $s$ ont les mêmes signes que ceux de $y'$ dans l’équation.",
  "Menovateľ rozložíme: ${@0} = (s{@1})(s{@2})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zakrývacia metóda: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Preto $f(t) = {@17}{@18}$.": "On factorise le dénominateur : ${@0} = (s{@1})(s{@2})$. Décomposition en éléments simples : $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Méthode du cache : $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Donc $f(t) = {@17}{@18}$.",
  "Mocnina $x$ v tvare $y_p$ sa rovná násobnosti čísla ${@0}$ ako koreňa charakteristickej rovnice. Over túto násobnosť.": "La puissance de $x$ dans la forme de $y_p$ est égale à la multiplicité du nombre ${@0}$ comme racine de l’équation caractéristique. Vérifie cette multiplicité.",
  "Multiplikatívna konštanta vzniká pri rovniciach $y' = g(x)y$ (cez logaritmus). Tu integruješ $\\frac{1}{1 + y^{2}}$, teda konštanta je aditívna v argumente.": "Une constante multiplicative apparaît pour les équations $y' = g(x)y$ (via le logarithme). Ici, tu intègres $\\frac{1}{1 + y^{2}}$, donc la constante s’ajoute dans l’argument.",
  "Najprv skontroluj znamienko $\\det A$: rozhoduje, či majú vlastné čísla opačné znamienka.": "Vérifie d’abord le signe de $\\det A$ : il indique si les valeurs propres sont de signes opposés.",
  "Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.": "Détermine d’abord $k$ à partir de la mesure, puis résous $T(t) = T^{*}$ en prenant le logarithme.",
  "Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = {@0}$. Vypočítaj $F({@1})$ (presne ako zlomok, alebo na 3 desatinné miesta).": "Soit $F(s) = \\mathcal{L}\\{f\\}(s)$ pour $f(t) = {@0}$. Calcule $F({@1})$ (exactement sous forme de fraction, ou à 3 décimales).",
  "Nenabitý kondenzátor s kapacitou ${@0}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím ${@1}\\,\\mathrm{V}$ cez rezistor s odporom ${@2}\\,\\mathrm{k\\Omega}$.": "On charge un condensateur non chargé de capacité ${@0}\\,\\mu\\mathrm{F}$ à partir d’une source de tension ${@1}\\,\\mathrm{V}$ à travers une résistance de ${@2}\\,\\mathrm{k\\Omega}$.",
  "Nesčítavaj integrál $M$ podľa $x$ a integrál $N$ podľa $y$: zmiešané členy by si tak započítal dvakrát. Z $N$ ber len členy, ktoré ešte chýbajú.": "N’additionne pas l’intégrale de $M$ par rapport à $x$ et l’intégrale de $N$ par rapport à $y$ : tu compterais ainsi deux fois les termes mixtes. De $N$, ne prends que les termes qui manquent encore.",
  "Netlmený oscilátor $x'' + {@0}x = 0$ má začiatočné podmienky $x(0) = {@1}$, $x'(0) = {@2}$. Urči amplitúdu kmitov. {@3}": "L’oscillateur non amorti $x'' + {@0}x = 0$ a les conditions initiales $x(0) = {@1}$, $x'(0) = {@2}$. Détermine l’amplitude des oscillations. {@3}",
  "Netlmený oscilátor je budený periodickou silou: $x'' + {@0}x = {@1}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos {@2}$. Urči $A$ (ako zlomok alebo celé číslo).": "Un oscillateur non amorti est soumis à une force périodique : $x'' + {@0}x = {@1}$. Les oscillations forcées en régime permanent sont de la forme $x_p = A\\cos {@2}$. Détermine $A$ (sous forme de fraction ou d’entier).",
  "Nosná kapacita K": "Capacité d’accueil K",
  "Nádrž obsahuje ${@0}$ litrov {@1}. Priteká do nej {@2} a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po ${@3}$ minútach? {@4}": "Un réservoir contient ${@0}$ litres {@1}. Il y entre {@2} et la solution parfaitement mélangée en sort au même débit. Combien de kilogrammes de sel y aura-t-il dans le réservoir au bout de ${@3}$ minutes ? {@4}",
  "Nájdi korene charakteristickej rovnice diferenciálnej rovnice ${@0}$. Zadaj ich oddelené bodkočiarkou.": "Trouve les racines de l’équation caractéristique de l’équation différentielle ${@0}$. Saisis-les séparées par des points-virgules.",
  "Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.": "Trouve les valeurs propres et les vecteurs propres sous la forme $(1, m)^{T}$, puis substitue $t = 0$ et résous le système en $C_1$, $C_2$.",
  "Nájdi vlastné čísla matice sústavy {@0}. Zadaj ich oddelené bodkočiarkou.": "Trouve les valeurs propres de la matrice du système {@0}. Saisis-les séparées par des points-virgules.",
  "Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{{@0}}{{@1}}$. Výsledok má tvar $f(t) = A{@2} + B{@3}$; urči $A$ a $B$.": "Trouve l’original $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ de la fonction $F(s) = \\dfrac{{@0}}{{@1}}$. Le résultat est de la forme $f(t) = A{@2} + B{@3}$ ; détermine $A$ et $B$.",
  "Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{{@0}}$. Bilancia: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Rovnovážna hodnota je $cV = {@5}$, preto $x(t) = {@6}$ a $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.": "Le volume ne change pas, la concentration dans le réservoir est $\\frac{x}{{@0}}$. Bilan : $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. La valeur d’équilibre est $cV = {@5}$, donc $x(t) = {@6}$ et $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.",
  "Obraz exponenciály je $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nie $\\frac{1}{s + a}$.": "La transformée d’une exponentielle est $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, et non $\\frac{1}{s + a}$.",
  "Obraz mocniny je $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; zabudol si na faktoriál.": "La transformée d’une puissance est $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$ ; tu as oublié la factorielle.",
  "Oddelíme premenné: $y\\,dy = {@0}\\,dx$, teda $\\frac{y^{2}}{2} = {@1} + C$, čiže $y^{2} = {@2} + 2C$. Z podmienky $2C = {@3}$, takže $y^{2} = {@4} + {@5}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu: $y = \\sqrt{{@6} + {@7}}$ a $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.": "On sépare les variables : $y\\,dy = {@0}\\,dx$, donc $\\frac{y^{2}}{2} = {@1} + C$, c’est-à-dire $y^{2} = {@2} + 2C$. De la condition, $2C = {@3}$, donc $y^{2} = {@4} + {@5}$. Comme $y(0) \\gt 0$, on prend la racine positive : $y = \\sqrt{{@6} + {@7}}$ et $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.",
  "Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.": "Sépare les variables $\\frac{dy}{y^{2}} = k\\,dx$ et rappelle-toi que $\\int y^{-2}\\,dy = -\\frac{1}{y}$.",
  "Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.": "Sépare les variables $y\\,dy = kx\\,dx$ et intègre. Détermine le signe de la racine à partir de la condition initiale.",
  "Odmocnina súčtu nie je súčet odmocnín: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Najprv sčítaj pod odmocninou.": "La racine d’une somme n’est pas la somme des racines : $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Additionne d’abord sous la racine.",
  "Odtok soli je koncentrácia krát prietok, teda $\\frac{x}{V}\\cdot q$. V exponente preto musí byť aj prietok $q$.": "Le sel qui s’écoule est égal à la concentration fois le débit, c’est-à-dire $\\frac{x}{V}\\cdot q$. L’exposant doit donc aussi contenir le débit $q$.",
  "Over dosadením: pre $y = {@0}x$ je $xy' = {@1}x$, no pravá strana ${@2}y$ je iná.": "Vérifie en substituant : pour $y = {@0}x$, on a $xy' = {@1}x$, mais le membre de droite ${@2}y$ est différent.",
  "Overenie: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrovaním $M$ podľa $x$: $F = {@1} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde {@2}. Preto $F(x, y) = {@3}$ a $C = F({@4}, {@5}) = {@6}$.": "Vérification : $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. En intégrant $M$ par rapport à $x$ : $F = {@1} + \\varphi(y)$. De la condition $F_y = N$, on obtient {@2}. Donc $F(x, y) = {@3}$ et $C = F({@4}, {@5}) = {@6}$.",
  "Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.": "Cherche une solution particulière de la forme $A\\mathrm{e}^{cx}$ (substitue dans l’équation), détermine la constante $B$ à partir de la condition initiale.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.": "On cherche une solution particulière de l’équation ${@0} = {@1}$ sous la forme $y_p = Ax + B$. Détermine $A$ et $B$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.": "On cherche une solution particulière de l’équation ${@0} = {@1}$ sous la forme $y_p = Ax^{2} + Bx + C$. Détermine $A$, $B$ et $C$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = A{@2} + B{@3}$. Urči $A$ a $B$.": "On cherche une solution particulière de l’équation ${@0} = {@1}$ sous la forme $y_p = A{@2} + B{@3}$. Détermine $A$ et $B$.",
  "Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.": "La période des oscillations non amorties est $T = 2\\pi\\sqrt{m/k}$.",
  "Po dosadení $x_p$ dostaneš $KA\\cos {@0} = {@1}\\cos {@2}$. Urči $K$.": "Après avoir substitué $x_p$, tu obtiens $KA\\cos {@0} = {@1}\\cos {@2}$. Détermine $K$.",
  "Po dosadení $y_p = Ax{@0}$ zostane $A(2r + p){@1}$. Vypočítaj $2r + p$.": "Après avoir substitué $y_p = Ax{@0}$, il reste $A(2r + p){@1}$. Calcule $2r + p$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c + a) = b$: derivácia dá $c$ a člen ${@1}$ pridá $+a$, nie $-a$.": "Après avoir substitué $y_p = A{@0}$, tu obtiens $A(c + a) = b$ : la dérivée donne $c$ et le terme ${@1}$ ajoute $+a$, et non $-a$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c^{2} + pc + q){@1}$. Vypočítaj hodnotu zátvorky.": "Après avoir substitué $y_p = A{@0}$, tu obtiens $A(c^{2} + pc + q){@1}$. Calcule la valeur de la parenthèse.",
  "Po dosadení $z' = (1-n)y^{-n}y'$ treba celú rovnicu vynásobiť číslom $1 - n$, teda aj koeficienty $p$ a $q$.": "Après avoir substitué $z' = (1-n)y^{-n}y'$, il faut multiplier toute l’équation par le nombre $1 - n$, donc aussi les coefficients $p$ et $q$.",
  "Po dosadení má rovnica pre koeficienty pri ${@0}$ tvar $uA{@1} = {@2}$. Urči $u$.": "Après substitution, l’équation pour les coefficients de ${@0}$ est de la forme $uA{@1} = {@2}$. Détermine $u$.",
  "Po integrovaní máš $-\\frac{1}{u} = \\ln x + C$. Urči $C$ (zlomok alebo celé číslo).": "Après intégration, tu as $-\\frac{1}{u} = \\ln x + C$. Détermine $C$ (fraction ou entier).",
  "Po integrovaní máš $\\frac{u^{2}}{2}$; pri vyjadrení $u^{2}$ musíš dvoma vynásobiť obe strany, teda aj člen s logaritmom.": "Après intégration, tu as $\\frac{u^{2}}{2}$ ; pour exprimer $u^{2}$, tu dois multiplier les deux membres par deux, donc aussi le terme contenant le logarithme.",
  "Po integrácii a vynásobení dvoma dostaneš $y^{2} = {@0} + K$. Urči konštantu $K$ zo začiatočnej podmienky.": "Après intégration et multiplication par deux, tu obtiens $y^{2} = {@0} + K$. Détermine la constante $K$ à partir de la condition initiale.",
  "Po integrácii máš $-\\frac{1}{y} = {@0} + C$. Urči $C$ zo začiatočnej podmienky (zlomok alebo celé číslo).": "Après intégration, tu as $-\\frac{1}{y} = {@0} + C$. Détermine $C$ à partir de la condition initiale (fraction ou entier).",
  "Po substitúcii $y = ux$ a integrovaní vyjadri $u^{2}$ a vypočítaj $u({@0})^{2}$. {@1}": "Après la substitution $y = ux$ et l’intégration, exprime $u^{2}$ et calcule $u({@0})^{2}$. {@1}",
  "Po substitúcii $y = ux$ dostaneš $u = {@0} + C$. Urči $C$ zo začiatočnej podmienky.": "Après la substitution $y = ux$, tu obtiens $u = {@0} + C$. Détermine $C$ à partir de la condition initiale.",
  "Po transformácii a vyjadrení $Y(s)$ rozlož zlomok ${@0}$ na parciálne zlomky. Aký je koeficient pri $\\frac{1}{{@1}}$?": "Après la transformation et l’expression de $Y(s)$, décompose la fraction ${@0}$ en éléments simples. Quel est le coefficient de $\\frac{1}{{@1}}$ ?",
  "Po vydelení $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Integračný faktor je $\\mathrm{e}^{{@2}\\ln x} = {@3}$, rovnica prejde na $({@4}y)' = {@5}$, teda ${@6}y = {@7} + C$ a $y = {@8} + \\frac{C}{{@9}}$. Z podmienky $1 + C = {@10}$, $C = {@11}$. Potom $y(2) = {@12}{@13}$.": "Après division par $x$ : $y' + \\frac{{@0}}{x}y = {@1}$. Le facteur intégrant est $\\mathrm{e}^{{@2}\\ln x} = {@3}$, l’équation devient $({@4}y)' = {@5}$, donc ${@6}y = {@7} + C$ et $y = {@8} + \\frac{C}{{@9}}$. De la condition $1 + C = {@10}$, $C = {@11}$. Alors $y(2) = {@12}{@13}$.",
  "Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = {@0}$. Odtiaľ $u = \\frac{{@1}}{1{@2}}$ a $y = \\frac{{@3}}{1{@4}}$, takže $y({@5}) \\approx {@6}$.": "Après division par $x^{2}$ : $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitution $y = ux$ : $u + xu' = u^{2} + u$, donc $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (la solution $u = 0$ ne vérifie pas la condition). On intègre : $-\\frac{1}{u} = \\ln x + C$, la condition donne $C = {@0}$. D’où $u = \\frac{{@1}}{1{@2}}$ et $y = \\frac{{@3}}{1{@4}}$, donc $y({@5}) \\approx {@6}$.",
  "Po vydelení $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, teda $u\\,du = {@2}\\frac{dx}{x}$ a $\\frac{u^{2}}{2} = {@3} + C$. Z podmienky $u(1) = {@4}$ máme $u^{2} = {@5} + {@6}$, a keďže $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Potom $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.": "Après division par $xy$ : $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitution $y = ux$ : $u + xu' = u + \\frac{{@1}}{u}$, donc $u\\,du = {@2}\\frac{dx}{x}$ et $\\frac{u^{2}}{2} = {@3} + C$. De la condition $u(1) = {@4}$, on a $u^{2} = {@5} + {@6}$, et comme $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Alors $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.",
  "Po vydelení číslom ${@0}$: $x'' + {@1}x' + {@2}x = 0$.": "Après division par ${@0}$ : $x'' + {@1}x' + {@2}x = 0$.",
  "Podiel ${@0}\\,\\%$ patrí výrazu $1 - \\mathrm{e}^{-t/\\tau}$, nie samotnej exponenciále.": "La proportion ${@0}\\,\\%$ correspond à l’expression $1 - \\mathrm{e}^{-t/\\tau}$, et non à l’exponentielle seule.",
  "Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = {@0}$ a $N_x = {@1}a{@2}{@3}$. Porovnaním koeficientov pri {@4} dostaneme ${@5}a = {@6}${@7}. Kmeňová funkcia je potom $F = {@8}$.": "La condition d’exactitude est $M_y = N_x$. On a $M_y = {@0}$ et $N_x = {@1}a{@2}{@3}$. En identifiant les coefficients ({@4}), on obtient ${@5}a = {@6}${@7}. La fonction potentielle est alors $F = {@8}$.",
  "Podľa Liouvilleovho vzorca je $W(x) = W(0)\\mathrm{e}^{-px}$; skontroluj znamienko exponentu.": "D’après la formule de Liouville, $W(x) = W(0)\\mathrm{e}^{-px}$ ; vérifie le signe de l’exposant.",
  "Podľa Newtonovho zákona $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, teda $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.": "D’après la loi de Newton, $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. D’après la mesure, $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, donc $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.",
  "Podľa Vietových vzťahov je súčet koreňov $-p$.": "D’après les relations de Viète, la somme des racines est $-p$.",
  "Podľa slovníka a linearity $F(s) = {@0}$ pre $s \\gt {@1}$. Dosadením $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.": "D’après la table et la linéarité, $F(s) = {@0}$ pour $s \\gt {@1}$. En substituant $s = {@2}$ : $F({@3}) = {@4} = {@5} \\approx {@6}$.",
  "Pohyb telesa sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$ (hmotnosť ${@3}\\,\\mathrm{kg}$, tlmenie ${@4}\\,\\mathrm{kg/s}$, tuhosť ${@5}\\,\\mathrm{N/m}$). O aký typ pohybu ide?": "Le mouvement d’un corps est régi par l’équation ${@0}x'' + {@1}x' + {@2}x = 0$ (masse ${@3}\\,\\mathrm{kg}$, amortissement ${@4}\\,\\mathrm{kg/s}$, raideur ${@5}\\,\\mathrm{N/m}$). De quel type de mouvement s’agit-il ?",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Vzorka obsahuje na začiatku ${@2}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za ${@3}$ {@4}? {@5}": "La demi-vie d’un isotope radioactif est de ${@0}$ {@1}. Un échantillon contient au départ ${@2}\\,\\mathrm{g}$ de l’isotope. Combien de grammes de l’isotope resteront au bout de ${@3}$ {@4} ? {@5}",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Za koľko {@2} klesne jeho množstvo na ${@3}\\,\\%$ pôvodného množstva? {@4}": "La demi-vie d’un isotope radioactif est de ${@0}$ {@1}. Au bout de combien de {@2} sa quantité tombera-t-elle à ${@3}\\,\\%$ de la quantité initiale ? {@4}",
  "Populácia sa riadi logistickou rovnicou $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ v rokoch), na začiatku má ${@2}$ jedincov.": "Une population est régie par l’équation logistique $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ en années), elle compte au départ ${@2}$ individus.",
  "Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.": "Compare $c^{2}$ avec $4mk$, ou le coefficient d’amortissement $\\delta = \\frac{c}{2m}$ avec la pulsation propre $\\omega_0 = \\sqrt{k/m}$.",
  "Porovnaj absolútne členy a urči $B$.": "Identifie les termes constants et détermine $B$.",
  "Porovnaj absolútne členy a urči $C$.": "Identifie les termes constants et détermine $C$.",
  "Porovnaj koeficienty pri $x$ a urči $A$.": "Identifie les coefficients de $x$ et détermine $A$.",
  "Porovnaj koeficienty pri $x$ a urči $B$.": "Identifie les coefficients de $x$ et détermine $B$.",
  "Porovnaj koeficienty pri $x^{2}$ a urči $A$.": "Identifie les coefficients de $x^{2}$ et détermine $A$.",
  "Použi $W = y_1y_2' - y_1'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.": "Utilise $W = y_1y_2' - y_1'y_2$. Tu peux vérifier l’exposant par la formule de Liouville $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.": "Utilise $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.",
  "Použi $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ a $\\mathcal{L}\\{y'\\} = sY - y(0)$ a vyjadri $Y$.": "Utilise $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ et $\\mathcal{L}\\{y'\\} = sY - y(0)$ et exprime $Y$.",
  "Použi prvý riadok sústavy $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.": "Utilise la première ligne du système $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.",
  "Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.": "Utilise la formule $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, où $A = \\frac{K - P_0}{P_0}$.",
  "Pozor na znamienko $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, po prenesení na pravú stranu je $+y'(0)$.": "Attention au signe de $y'(0)$ : $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, après passage dans le membre de droite, c’est $+y'(0)$.",
  "Pozor na znamienko: $\\int u^{-2}\\,du = -\\frac{1}{u}$.": "Attention au signe : $\\int u^{-2}\\,du = -\\frac{1}{u}$.",
  "Pozor na znamienko: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nie $\\frac{1}{y}$.": "Attention au signe : $\\int y^{-2}\\,dy = -\\frac{1}{y}$, et non $\\frac{1}{y}$.",
  "Pravá strana je homogénna stupňa 2, nie 0: po dosadení $tx$, $ty$ sa vynásobí $t^{2}$. Tvar $\\varphi\\left(\\frac{y}{x}\\right)$ vyžaduje stupeň 0.": "Le membre de droite est homogène de degré 2, et non 0 : en substituant $tx$, $ty$, il est multiplié par $t^{2}$. La forme $\\varphi\\left(\\frac{y}{x}\\right)$ exige le degré 0.",
  "Pravá strana obsahuje len konštantu (polynóm stupňa 0), polynóm $Ax + B$ tu netreba.": "Le second membre ne contient qu’une constante (polynôme de degré 0), le polynôme $Ax + B$ n’est pas nécessaire ici.",
  "Pre $x_p = Bt{@0} {@1}$ je $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (členy s $t$ sa odčítajú). Porovnaním ${@7}{@8}B = {@9}$, teda $B = {@10}$. Amplitúda $|B|t$ rastie lineárne s časom.": "Pour $x_p = Bt{@0} {@1}$, on a $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (les termes en $t$ s’éliminent). En identifiant ${@7}{@8}B = {@9}$, donc $B = {@10}$. L’amplitude $|B|t$ croît linéairement avec le temps.",
  "Pre $y = \\cos {@0}x$ je $y'' = -{@1}\\cos {@2}x$, a teda $y'' + {@3}y = 0$. Pri $\\cos {@4}x$ by vyšlo $y'' = -{@5}\\cos {@6}x$, exponenciála má kladnú druhú deriváciu.": "Pour $y = \\cos {@0}x$, on a $y'' = -{@1}\\cos {@2}x$, donc $y'' + {@3}y = 0$. Pour $\\cos {@4}x$, on obtiendrait $y'' = -{@5}\\cos {@6}x$, l’exponentielle a une dérivée seconde positive.",
  "Pre $y = \\mathrm{e}^{-{@0}x}$ je $y'' = {@1}\\mathrm{e}^{-{@2}x}$, a teda $y'' - {@3}y = 0$. Pre $\\sin {@4}x$ vyjde $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.": "Pour $y = \\mathrm{e}^{-{@0}x}$, on a $y'' = {@1}\\mathrm{e}^{-{@2}x}$, donc $y'' - {@3}y = 0$. Pour $\\sin {@4}x$, on obtient $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.",
  "Pre $y = x^{{@0}}$ je $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pre $y = {@6}x$ by vyšlo $xy' = {@7}x$, ale ${@8}y = {@9}x$.": "Pour $y = x^{{@0}}$, on a $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pour $y = {@6}x$, on obtiendrait $xy' = {@7}x$, mais ${@8}y = {@9}x$.",
  "Pre $y' + py = qy^{n}$ je $z = y^{1-n}$ a $z' + (1-n)pz = (1-n)q$.": "Pour $y' + py = qy^{n}$, on a $z = y^{1-n}$ et $z' + (1-n)pz = (1-n)q$.",
  "Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = {@0}\\,dx$, teda $\\ln|y| = {@1} + c$ a $y = C\\mathrm{e}^{{@2}}$ (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = {@3}$, takže $y = {@4}$ a $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.": "Pour $y\\neq 0$, on sépare les variables : $\\frac{dy}{y} = {@0}\\,dx$, donc $\\ln|y| = {@1} + c$ et $y = C\\mathrm{e}^{{@2}}$ (la solution $y = 0$ est incluse pour $C = 0$). De la condition, $C = {@3}$, donc $y = {@4}$ et $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.",
  "Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.": "Pour $y_p = A\\mathrm{e}^{cx}$, on obtient après substitution $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.",
  "Pre akú hodnotu parametra $a$ je rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ exaktná?": "Pour quelle valeur du paramètre $a$ l’équation $({@0})\\,dx + ({@1})\\,dy = 0$ est-elle exacte ?",
  "Pre dva rôzne reálne korene": "Pour deux racines réelles distinctes",
  "Pre dvojnásobný koreň": "Pour une racine double",
  "Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$": "Pour des racines complexes conjuguées $\\alpha\\pm\\beta\\mathrm{i}$",
  "Pre polynóm 1. stupňa treba úplný polynóm $Ax + B$, samotné $Ax$ nestačí.": "Pour un polynôme du 1er degré, il faut le polynôme complet $Ax + B$, $Ax$ seul ne suffit pas.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ a urči $\\delta$.": "Réécris l’équation sous la forme $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ et détermine $\\delta$.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Réécris l’équation sous la forme $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ ; alors $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Pri $x = 0$ je $C\\cdot\\mathrm{e}^{0} = C$, ale v riešení je ešte konštantný člen ${@0}$, ktorý musíš od $y_0$ odčítať.": "Pour $x = 0$, on a $C\\cdot\\mathrm{e}^{0} = C$, mais la solution contient encore le terme constant ${@0}$, que tu dois soustraire de $y_0$.",
  "Pri $x = 0$ sú obe exponenciály rovné 1, takže $y(0) = A + B$. Hodnotu $A$ treba od $y(0)$ odčítať.": "Pour $x = 0$, les deux exponentielles valent 1, donc $y(0) = A + B$. Il faut soustraire la valeur de $A$ de $y(0)$.",
  "Pri $x = 1$ je $u(1) = y(1)$.": "Pour $x = 1$, on a $u(1) = y(1)$.",
  "Pri $y = \\cos \\omega x$ je $y'' = -\\omega^{2}y$; koeficient ${@0}$ v rovnici je $\\omega^{2}$, nie $\\omega$.": "Pour $y = \\cos \\omega x$, on a $y'' = -\\omega^{2}y$ ; le coefficient ${@0}$ de l’équation est $\\omega^{2}$, et non $\\omega$.",
  "Pri $y = \\mathrm{e}^{rx}$ je $y'' = r^{2}y$; koeficient ${@0}$ v rovnici je $r^{2}$, nie $r$.": "Pour $y = \\mathrm{e}^{rx}$, on a $y'' = r^{2}y$ ; le coefficient ${@0}$ de l’équation est $r^{2}$, et non $r$.",
  "Pri absolútnom člene si zabudol na $y_p'' = 2A$: aj druhá derivácia prispieva konštantou.": "Pour le terme constant, tu as oublié $y_p'' = 2A$ : la dérivée seconde apporte aussi une constante.",
  "Pri derivovaní $x\\mathrm{e}^{rx}$ podľa súčinu vznikne v $y_p''$ člen $2rA\\mathrm{e}^{rx}$, nie len $rA\\mathrm{e}^{rx}$.": "En dérivant le produit $x\\mathrm{e}^{rx}$, on obtient dans $y_p''$ le terme $2rA\\mathrm{e}^{rx}$, et pas seulement $rA\\mathrm{e}^{rx}$.",
  "Pri derivovaní ${@0}$ podľa $x$ vznikne koeficient ${@1}a$; rovnosť koeficientov treba ešte vydeliť číslom ${@2}$.": "En dérivant ${@0}$ par rapport à $x$, on obtient le coefficient ${@1}a$ ; il faut encore diviser l’égalité des coefficients par ${@2}$.",
  "Pri derivovaní súčinu ${@0}\\cdot(\\dots)$ vznikne aj člen ${@1}C_1$ z derivácie exponenciály.": "En dérivant le produit ${@0}\\cdot(\\dots)$, on obtient aussi le terme ${@1}C_1$ issu de la dérivée de l’exponentielle.",
  "Pri dvojnásobnom derivovaní súčinu $t{@0} {@1}$ vzniknú dva rovnaké členy bez $t$, spolu $2\\omega_0$-násobok.": "En dérivant deux fois le produit $t{@0} {@1}$, on obtient deux termes identiques sans $t$, soit au total $2\\omega_0$ fois.",
  "Pri dvojnásobnom koreni máš len jednu exponenciálu; druhé nezávislé riešenie dostaneš vynásobením $x$.": "Pour une racine double, tu n’as qu’une exponentielle ; tu obtiens la seconde solution indépendante en la multipliant par $x$.",
  "Pri dvojnásobnom koreni sa exponenciála násobí $x$, nie $x^{2}$ (to by bolo pri trojnásobnom koreni).": "Pour une racine double, l’exponentielle est multipliée par $x$, et non par $x^{2}$ (ce serait le cas d’une racine triple).",
  "Pri integrovaní ${@0}$ si zabudol deliť exponentom: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.": "En intégrant ${@0}$, tu as oublié de diviser par l’exposant : $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.",
  "Pri komplexných koreňoch nie sú riešeniami reálne exponenciály; použi tvar $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.": "Pour des racines complexes, les exponentielles réelles ne sont pas solutions ; utilise la forme $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.",
  "Pri koreňoch $\\alpha\\pm\\beta\\mathrm{i}$ je v exponente reálna časť $\\alpha$ a v goniometrických funkciách imaginárna časť $\\beta$; zamenil si ich.": "Pour les racines $\\alpha\\pm\\beta\\mathrm{i}$, l’exposant contient la partie réelle $\\alpha$ et les fonctions trigonométriques la partie imaginaire $\\beta$ ; tu les as échangées.",
  "Pri porovnaní absolútnych členov si zabudol na člen ${@0} = {@1}$, ktorý pochádza z derivácie.": "En identifiant les termes constants, tu as oublié le terme ${@0} = {@1}$ qui provient de la dérivée.",
  "Pri prenášaní konštantného člena na druhú stranu rovnice si mu nezmenil znamienko.": "En faisant passer le terme constant de l’autre côté de l’équation, tu n’as pas changé son signe.",
  "Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.": "En cas de résonance avec une racine simple $r$, la substitution $y_p = Ax\\mathrm{e}^{rx}$ donne l’expression $A(2r + p)\\,\\mathrm{e}^{rx}$.",
  "Pri riešení $2^{-t/T} = p$ treba logaritmus podieliť číslom $\\ln 2$ (alebo použiť logaritmus so základom 2).": "Pour résoudre $2^{-t/T} = p$, il faut diviser le logarithme par $\\ln 2$ (ou utiliser le logarithme de base 2).",
  "Pri vyjadrení $C$ zo zlomku $\\frac{C}{x_0}$ treba násobiť číslom $x_0$, nie deliť.": "Pour exprimer $C$ à partir de la fraction $\\frac{C}{x_0}$, il faut multiplier par $x_0$, et non diviser.",
  "Pri zakrývacej metóde dosadíš $s = a$ do zvyšku zlomku; v menovateli potom zostane $a - b$, nie $b - a$.": "Avec la méthode du cache, tu substitues $s = a$ dans le reste de la fraction ; il reste alors au dénominateur $a - b$, et non $b - a$.",
  "Primitívna funkcia k $ax^{n}$ je $\\frac{a}{n+1}x^{n+1}$.": "Une primitive de $ax^{n}$ est $\\frac{a}{n+1}x^{n+1}$.",
  "Riešenie Cauchyho úlohy $y'{@0} = {@1}$, $y(0) = {@2}$ má tvar $y = A{@3} + B{@4}$. Urči $A$ a $B$.": "La solution du problème de Cauchy $y'{@0} = {@1}$, $y(0) = {@2}$ est de la forme $y = A{@3} + B{@4}$. Détermine $A$ et $B$.",
  "Riešenie Cauchyho úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ zapíšeme v tvare ${@3}$. Urči $C_1$ a $C_2$.": "On écrit la solution du problème de Cauchy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ sous la forme ${@3}$. Détermine $C_1$ et $C_2$.",
  "Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.": "La solution est $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$ ; détermine $\\mathrm{e}^{-k}$ à partir de la seconde mesure.",
  "Riešenie je súčet $y_h + y_p$: konštantné partikulárne riešenie sa exponenciálou nenásobí.": "La solution est la somme $y_h + y_p$ : la solution particulière constante n’est pas multipliée par l’exponentielle.",
  "Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.": "La solution est la somme de $y_h$ (exponentielle dont l’exposant est l’opposé du coefficient de $y$) et de la solution particulière constante.",
  "Riešenie má tvar $\\mathrm{e}^{\\lambda x}$, kde $\\lambda$ je koreň charakteristickej rovnice; skontroluj znamienka koreňov.": "La solution est de la forme $\\mathrm{e}^{\\lambda x}$, où $\\lambda$ est une racine de l’équation caractéristique ; vérifie les signes des racines.",
  "Riešenie má tvar $y = C\\mathrm{e}^{G(x)}$ s $G(0) = 0$. Urči $C$ zo začiatočnej podmienky.": "La solution est de la forme $y = C\\mathrm{e}^{G(x)}$ avec $G(0) = 0$. Détermine $C$ à partir de la condition initiale.",
  "Riešenie rovnice y″ + py′ + qy = 0": "Solution de l’équation y″ + py′ + qy = 0",
  "Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.": "Résous l’équation $2^{-t/T} = p$ en prenant le logarithme : $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.",
  "Rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$. Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[{@2}; {@3}]$.": "L’équation $({@0})\\,dx + ({@1})\\,dy = 0$ est exacte. On écrit son intégrale générale sous la forme $F(x, y) = C$, où $F(0, 0) = 0$. Détermine $C$ pour la courbe intégrale passant par le point $[{@2}; {@3}]$.",
  "Rovnica $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.": "L’équation $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) n’est pas exacte. Elle admet un facteur intégrant de la forme $\\mu = x^{k}$. Détermine $k$.",
  "Rovnica $x'' + {@0}x = {@1}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt{@2} {@3}$. Urči $B$.": "L’équation $x'' + {@0}x = {@1}$ décrit une résonance. Sa solution particulière est de la forme $x_p = Bt{@2} {@3}$. Détermine $B$.",
  "Rovnica $y' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.": "L’équation $y' = f(x, y)$ dit que la pente de la tangente au point $[x; y]$ est $f(x, y)$. Substitue les coordonnées du point.",
  "Rovnica $y' = {@0}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$ sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen, po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.": "L’équation $y' = {@0}$ a au numérateur et au dénominateur des fonctions homogènes de même degré, donc après la substitution $x \\to tx$, $y \\to ty$, $t$ se simplifie et le membre de droite ne dépend que de $\\frac{y}{x}$. Les autres équations contiennent des termes de degrés différents ou un terme constant, donc après la substitution $tx$ et $ty$, $t$ ne se simplifie pas.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = Ax{@2}$. Urči $A$.": "L’équation ${@0} = {@1}$ a une solution particulière de la forme $y_p = Ax{@2}$. Détermine $A$.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = A{@2}$. Urči $A$.": "L’équation ${@0} = {@1}$ a une solution particulière de la forme $y_p = A{@2}$. Détermine $A$.",
  "Rovnica ${@0}x'' + {@1}x = 0$ má $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.": "L’équation ${@0}x'' + {@1}x = 0$ a $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Période $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.",
  "Rovnica je homogénna: $y' = \\frac{y}{x}{@0}$. Substitúcia $y = ux$ dáva $u + xu' = u{@1}$, teda $u' = {@2}\\frac{{@3}}{x}$ a $u = {@4} + C$. Z podmienky $u(1) = {@5}$ je $C = {@6}$, preto $y = x({@7}{@8})$ a $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.": "L’équation est homogène : $y' = \\frac{y}{x}{@0}$. La substitution $y = ux$ donne $u + xu' = u{@1}$, donc $u' = {@2}\\frac{{@3}}{x}$ et $u = {@4} + C$. De la condition $u(1) = {@5}$, on a $C = {@6}$, donc $y = x({@7}{@8})$ et $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.",
  "Rovnica má tvar $y' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.": "L’équation est de la forme $y' = g(x)\\,y$. Sépare les variables $\\frac{dy}{y} = g(x)\\,dx$ et intègre ; tu obtiens $y = C\\mathrm{e}^{G(x)}$.",
  "Rozdiel $M_y - N_x$ treba ešte vydeliť funkciou $N = {@0}$, nie len premennou $x$.": "Il faut encore diviser la différence $M_y - N_x$ par la fonction $N = {@0}$, et pas seulement par la variable $x$.",
  "Rozhoduje znamienko diskriminantu $c^{2} - 4mk$. Prepočítaj ho: porovnávaš druhú mocninu tlmenia so štvornásobkom súčinu $mk$.": "C’est le signe du discriminant $c^{2} - 4mk$ qui décide. Recalcule-le : tu compares le carré de l’amortissement avec le quadruple du produit $mk$.",
  "Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, ide o {@3}. (Ekvivalentne $\\delta = \\frac{c}{2m} = {@4}$ a $\\omega_0 = \\sqrt{k/m} = {@5}$.)": "C’est le signe du discriminant de l’équation caractéristique qui décide, c’est-à-dire la comparaison de $c^{2}$ et $4mk$ : $c^{2} = {@0}$, $4mk = {@1}$. {@2}, il s’agit d’un {@3}. (De façon équivalente, $\\delta = \\frac{c}{2m} = {@4}$ et $\\omega_0 = \\sqrt{k/m} = {@5}$.)",
  "Rozlož $F$ na parciálne zlomky $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ a urči $A$.": "Décompose $F$ en éléments simples $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ et détermine $A$.",
  "Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.": "Factorise le dénominateur sous la forme $(s - a)(s - b)$ et décompose $F$ en éléments simples $\\frac{A}{s-a} + \\frac{B}{s-b}$ ; alors $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.",
  "Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.": "La désintégration est régie par l’équation $m' = -km$, donc $m(t) = m_0\\mathrm{e}^{-kt}$ avec $k = \\frac{\\ln 2}{T}$, c’est-à-dire $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.",
  "Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená. Najvyššia derivácia v rovnici je {@0}, rovnica je teda <strong>{@1}. rádu</strong>.": "L’ordre est déterminé par la dérivée la plus élevée qui figure dans l’équation, et non par la puissance à laquelle la dérivée est élevée. La dérivée la plus élevée de l’équation est la dérivée {@0}, l’équation est donc <strong>d’ordre {@1}</strong>.",
  "Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou": "Schéma de résolution d’un problème initial par la transformée de Laplace",
  "Sedlo vzniká len pri zápornom determinante (reálne vlastné čísla s opačnými znamienkami). Prepočítaj $\\det A$.": "Un col n’apparaît que si le déterminant est négatif (valeurs propres réelles de signes opposés). Recalcule $\\det A$.",
  "Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Integrálna krivka prechádzajúca bodom $[{@4}; {@5}]$ má v ňom dotyčnicu so smernicou ${@6}$.": "La pente du champ au point $[x; y]$ est la valeur du membre de droite $f(x, y)$ : $f({@0}, {@1}) = {@2} = {@3}$. La courbe intégrale passant par le point $[{@4}; {@5}]$ y a une tangente de pente ${@6}$.",
  "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)": "Champ de directions de l’équation homogène y' = (x + y)/(x − y)",
  "Smerové pole rovnice y' = x − y s integrálnou krivkou": "Champ de directions de l’équation y' = x − y avec une courbe intégrale",
  "Stabilitu určuje znamienko stopy $\\mathrm{tr}\\,A$ (súčtu, resp. dvojnásobku reálnej časti vlastných čísel). Over ho.": "La stabilité est déterminée par le signe de la trace $\\mathrm{tr}\\,A$ (la somme des valeurs propres, ou le double de leur partie réelle). Vérifie-le.",
  "Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, teda $-\\frac{1}{y} = {@1} + C$. Z podmienky $C = {@2}$. Odtiaľ $y = \\frac{{@3}}{1{@4}}$, čo je na intervale $\\langle 0; {@5}\\rangle$ definované (menovateľ je tam kladný). Dosadením $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.": "La solution stationnaire $y = 0$ ne vérifie pas la condition. Pour $y\\neq 0$ : $\\frac{dy}{y^{2}} = {@0}\\,dx$, donc $-\\frac{1}{y} = {@1} + C$. De la condition, $C = {@2}$. D’où $y = \\frac{{@3}}{1{@4}}$, qui est définie sur l’intervalle $\\langle 0; {@5}\\rangle$ (le dénominateur y est positif). En substituant, $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.",
  "Stred nastáva len pri nulovej stope; inak sa trajektórie k bodu približujú alebo sa od neho vzďaľujú.": "Un centre n’apparaît que si la trace est nulle ; sinon, les trajectoires se rapprochent du point ou s’en éloignent.",
  "Substitúcia je $z = y^{1-n}$, nie $y^{n-1}$: exponent má odstrániť mocninu $y^{n}$ po vydelení rovnice.": "La substitution est $z = y^{1-n}$, et non $y^{n-1}$ : l’exposant doit éliminer la puissance $y^{n}$ après division de l’équation.",
  "Sústava {@0} má začiatočnú podmienku $x(0) = {@1}$, $y(0) = {@2}$. Riešenie zapíšeme v tvare $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$ a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.": "Le système {@0} a la condition initiale $x(0) = {@1}$, $y(0) = {@2}$. On écrit la solution sous la forme $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, où $\\lambda_1 \\gt \\lambda_2$ et les vecteurs propres ont pour première composante $1$. Détermine $C_1$ et $C_2$.",
  "Sčítaj: $F({@0}) = ?$": "Additionne : $F({@0}) = ?$",
  "Teleso s hmotnosťou ${@0}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou ${@1}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? {@2}": "Un corps de masse ${@0}\\,\\mathrm{kg}$ oscille sans amortissement sur un ressort de raideur ${@1}\\,\\mathrm{N/m}$. Quelle est la période des oscillations en secondes ? {@2}",
  "Teleso s teplotou ${@0}{@1}$ položíme do miestnosti s teplotou ${@2}{@3}$. Po ${@4}$ minútach má teplotu ${@5}{@6}$.": "On place un corps à la température ${@0}{@1}$ dans une pièce à la température ${@2}{@3}$. Au bout de ${@4}$ minutes, sa température est ${@5}{@6}$.",
  "Tlmený harmonický oscilátor": "Oscillateur harmonique amorti",
  "Tlmený oscilátor sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. {@3}": "Un oscillateur amorti est régi par l’équation ${@0}x'' + {@1}x' + {@2}x = 0$. Détermine la pulsation $\\omega_d$ de ses oscillations amorties. {@3}",
  "Toto je exponent (mocnina), nie rád derivácie. Rád určuje najvyššia derivácia, ktorá sa v rovnici vyskytuje.": "Ça, c’est un exposant (une puissance), et non l’ordre d’une dérivée. L’ordre est déterminé par la dérivée la plus élevée qui figure dans l’équation.",
  "Toto je vlastná frekvencia netlmeného oscilátora $\\omega_0$. Tlmenie frekvenciu znižuje: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Ça, c’est la pulsation propre de l’oscillateur non amorti $\\omega_0$. L’amortissement diminue la pulsation : $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Toto je vybíjanie kondenzátora. Pri nabíjaní napätie rastie od nuly k $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Ça, c’est la décharge du condensateur. Lors de la charge, la tension croît de zéro jusqu’à $U$ : $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Transformuj rovnicu ($\\mathcal{L}\\{y'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.": "Transforme l’équation ($\\mathcal{L}\\{y'\\} = sY - y(0)$), exprime $Y(s)$ et décompose-la en éléments simples.",
  "Transformáciou: $sY{@0}{@1} = {@2}$, teda $Y = {@3}{@4}$. Rozklad: ${@5} = {@6}{@7}$. Spätnou transformáciou $y = ({@8}{@9}){@10}{@11}$, teda $A = {@12}$, $B = {@13}$.": "Par transformation : $sY{@0}{@1} = {@2}$, donc $Y = {@3}{@4}$. Décomposition : ${@5} = {@6}{@7}$. Par transformation inverse, $y = ({@8}{@9}){@10}{@11}$, donc $A = {@12}$, $B = {@13}$.",
  "Tu $n = {@0}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - {@1} = {@2}$. Vydelením rovnice $y^{{@3}}$ dostaneme $y^{-n}y'{@4} = {@5}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = {@6}$ máme $z'{@7} = {@8}$. Teda $P = (1-n)p = {@9}$ a $Q = (1-n)q = {@10}$.": "Ici $n = {@0}$, la substitution est $z = y^{1-n}$, donc $k = 1 - {@1} = {@2}$. En divisant l’équation par $y^{{@3}}$, on obtient $y^{-n}y'{@4} = {@5}$. Comme $z' = (1-n)y^{-n}y'$, après multiplication de l’équation par $1 - n = {@6}$, on a $z'{@7} = {@8}$. Donc $P = (1-n)p = {@9}$ et $Q = (1-n)q = {@10}$.",
  "Tvar $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ patrí len dvojnásobnému koreňu ($D = 0$). Aký je tu diskriminant?": "La forme $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ ne correspond qu’à une racine double ($D = 0$). Quel est ici le discriminant ?",
  "Urči $A$ (zlomok alebo celé číslo).": "Détermine $A$ (fraction ou entier).",
  "Urči $A$.": "Détermine $A$.",
  "Urči $C = F({@0}, {@1})$.": "Détermine $C = F({@0}, {@1})$.",
  "Urči $C_1$ v riešení $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.": "Détermine $C_1$ dans la solution $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.",
  "Urči $C_2$ (zlomok alebo celé číslo).": "Détermine $C_2$ (fraction ou entier).",
  "Urči $C_2$.": "Détermine $C_2$.",
  "Urči $\\omega_0^{2}$.": "Détermine $\\omega_0^{2}$.",
  "Urči $\\omega_d$. {@0}": "Détermine $\\omega_d$. {@0}",
  "Urči $\\varphi(y)$ s $\\varphi(0) = 0$ z podmienky $F_y = N$ a vypočítaj $\\varphi({@0})$.": "Détermine $\\varphi(y)$ avec $\\varphi(0) = 0$ à partir de la condition $F_y = N$ et calcule $\\varphi({@0})$.",
  "Urči $y({@0})$ (znamienko podľa začiatočnej podmienky).": "Détermine $y({@0})$ (le signe d’après la condition initiale).",
  "Urči amplitúdu kmitov. {@0}": "Détermine l’amplitude des oscillations. {@0}",
  "Urči exponent $k$ v substitúcii $z = y^{k}$ (zlomok v tvare $a/b$).": "Détermine l’exposant $k$ dans la substitution $z = y^{k}$ (fraction sous la forme $a/b$).",
  "Urči exponent $m$.": "Détermine l’exposant $m$.",
  "Urči hodnotu exponentu $G({@0})$, kde $G(x) = \\int_0^x g(t)\\,dt$. {@1}": "Détermine la valeur de l’exposant $G({@0})$, où $G(x) = \\int_0^x g(t)\\,dt$. {@1}",
  "Urči koeficient $P$ pri $z$.": "Détermine le coefficient $P$ de $z$.",
  "Urči konštantu $A$ v riešení $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.": "Détermine la constante $A$ dans la solution $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.",
  "Urči oba korene (oddelené bodkočiarkou).": "Détermine les deux racines (séparées par un point-virgule).",
  "Urči pravú stranu $Q$.": "Détermine le membre de droite $Q$.",
  "Urči rád diferenciálnej rovnice ${@0}$.": "Détermine l’ordre de l’équation différentielle ${@0}$.",
  "Urči typ rovnovážneho bodu $[0; 0]$ sústavy {@0}.": "Détermine le type du point d’équilibre $[0; 0]$ du système {@0}.",
  "Urči väčšie vlastné číslo $\\lambda_1$.": "Détermine la plus grande valeur propre $\\lambda_1$.",
  "V akom tvare treba hľadať partikulárne riešenie rovnice ${@0} = {@1}$ metódou neurčitých koeficientov?": "Sous quelle forme faut-il chercher une solution particulière de l’équation ${@0} = {@1}$ par la méthode des coefficients indéterminés ?",
  "V čitateli sú členy rôznych stupňov ($x^{2}$ je stupňa 2, $y$ stupňa 1), takže sa $t$ po dosadení nevykráti.": "Le numérateur contient des termes de degrés différents ($x^{2}$ est de degré 2, $y$ de degré 1), donc $t$ ne se simplifie pas après la substitution.",
  "Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.": "Les valeurs propres d’une matrice $2\\times 2$ sont les racines de l’équation $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.",
  "Vlastné čísla sú komplexné s reálnou časťou ${@0}$: {@1}.": "Les valeurs propres sont complexes, de partie réelle ${@0}$ : {@1}.",
  "Vlastné čísla sú reálne s rovnakým znamienkom (súčin ${@0} \\gt 0$), ich súčet je ${@1}$: {@2}.": "Les valeurs propres sont réelles et de même signe (produit ${@0} \\gt 0$), leur somme vaut ${@1}$ : {@2}.",
  "Vlastné čísla sú rýdzo imaginárne: stred.": "Les valeurs propres sont imaginaires pures : centre.",
  "Vlastný vektor k $\\lambda_1$ má tvar $(1, m_1)^{T}$. Urči $m_1$.": "Le vecteur propre associé à $\\lambda_1$ est de la forme $(1, m_1)^{T}$. Détermine $m_1$.",
  "Vlastný vektor k $\\lambda_2$ má tvar $(1, m_2)^{T}$. Urči $m_2$.": "Le vecteur propre associé à $\\lambda_2$ est de la forme $(1, m_2)^{T}$. Détermine $m_2$.",
  "Vrstevnice funkcie F(x, y) = x² − xy + y²": "Lignes de niveau de la fonction F(x, y) = x² − xy + y²",
  "Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.": "Divise l’équation par $x$ et utilise le facteur intégrant $\\mu = \\mathrm{e}^{\\int p\\,dx}$ ; pour $p = \\frac{n}{x}$, on a $\\mu = x^{n}$.",
  "Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.": "Divise l’équation par $x^{2}$, substitue $y = ux$ et sépare les variables $\\frac{du}{u^{2}} = \\frac{dx}{x}$.",
  "Vydeľ rovnicu výrazom $xy$, dostaneš $y' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.": "Divise l’équation par l’expression $xy$, tu obtiens $y' = \\frac{y}{x} + k\\frac{x}{y}$. Utilise ensuite la substitution $y = ux$.",
  "Vyjadri $y$ a vypočítaj $y({@0})$ (zlomok alebo celé číslo).": "Exprime $y$ et calcule $y({@0})$ (fraction ou entier).",
  "Vyjadril si $\\frac{C}{{@0}}$, ale nie samotné $C$: rovnicu ešte vynásob číslom ${@1}$.": "Tu as exprimé $\\frac{C}{{@0}}$, mais pas $C$ lui-même : multiplie encore l’équation par ${@1}$.",
  "Vypočítaj $M_y - N_x$.": "Calcule $M_y - N_x$.",
  "Vypočítaj $W(0)$, teda hodnotu $K$.": "Calcule $W(0)$, c’est-à-dire la valeur de $K$.",
  "Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.": "Calcule $\\frac{M_y - N_x}{N}$. Si tu obtiens $\\frac{k}{x}$, le facteur intégrant est $\\mathrm{e}^{k\\ln x} = x^{k}$.",
  "Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.": "Calcule $\\frac{\\partial M}{\\partial y}$ et $\\frac{\\partial N}{\\partial x}$ et compare les coefficients des mêmes puissances.",
  "Vypočítaj $\\mathrm{e}^{-{@0}k}$. Zaokrúhli na 4 desatinné miesta.": "Calcule $\\mathrm{e}^{-{@0}k}$. Arrondis à 4 décimales.",
  "Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Calcule $\\tau = RC$ (des kiloohms fois des microfarads donnent des millisecondes) et substitue dans $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Vypočítaj $u({@0})$. {@1}": "Calcule $u({@0})$. {@1}",
  "Vypočítaj $y(2)$ (zlomok alebo desatinné číslo).": "Calcule $y(2)$ (fraction ou nombre décimal).",
  "Vypočítaj $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}": "Calcule $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}",
  "Vypočítaj $y({@0})$. {@1}": "Calcule $y({@0})$. {@1}",
  "Vypočítaj determinant $\\det A$.": "Calcule le déterminant $\\det A$.",
  "Vypočítaj obraz exponenciálneho člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Calcule la transformée du terme exponentiel ${@0}$ au point $s = {@1}$ (fraction).",
  "Vypočítaj obraz goniometrického člena v bode $s = {@0}$ (zlomok).": "Calcule la transformée du terme trigonométrique au point $s = {@0}$ (fraction).",
  "Vypočítaj obraz člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Calcule la transformée du terme ${@0}$ au point $s = {@1}$ (fraction).",
  "Vypočítaj periódu kmitov v sekundách. {@0}": "Calcule la période des oscillations en secondes. {@0}",
  "Vypočítaj stopu matice sústavy $\\mathrm{tr}\\,A$.": "Calcule la trace de la matrice du système $\\mathrm{tr}\\,A$.",
  "Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.": "Calcule la trace, le déterminant et le discriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ et utilise le tableau du cours.",
  "Vypočítaj vlastnú uhlovú frekvenciu $\\omega_0$ (v $\\mathrm{s^{-1}}$). Zaokrúhli na 3 desatinné miesta.": "Calcule la pulsation propre $\\omega_0$ (en $\\mathrm{s^{-1}}$). Arrondis à 3 décimales.",
  "Vypočítaj časovú konštantu $\\tau = RC$ v milisekundách.": "Calcule la constante de temps $\\tau = RC$ en millisecondes.",
  "Vypočítal si $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Tu as calculé $u = \\frac{y}{x}$, et non $y$. N’oublie pas la substitution inverse $y = ux$.",
  "Vypočítal si hodnotu $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Tu as calculé la valeur de $u = \\frac{y}{x}$, et non $y$. N’oublie pas la substitution inverse $y = ux$.",
  "Vypočítal si hodnotu pomocnej funkcie $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Tu as calculé la valeur de la fonction auxiliaire $u = \\frac{y}{x}$, et non $y$. N’oublie pas la substitution inverse $y = ux$.",
  "Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.": "Résous $1 - \\mathrm{e}^{-t/\\tau} = p$ par rapport à $t$ : $t = -\\tau\\ln(1 - p)$.",
  "Vyrieš $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ a zadaj vlastné čísla (oddelené bodkočiarkou).": "Résous $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ et saisis les valeurs propres (séparées par un point-virgule).",
  "Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pre $x \\gt 0$), a vypočítaj $y({@1})$. {@2}": "Résous le problème de Cauchy $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pour $x \\gt 0$), et calcule $y({@1})$. {@2}",
  "Vyrieš Cauchyho úlohu $xy'{@0} = {@1}$, $y(1) = {@2}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).": "Résous le problème de Cauchy $xy'{@0} = {@1}$, $y(1) = {@2}$, pour $x \\gt 0$ et calcule $y(2)$. Donne le résultat exactement (fraction ou nombre décimal).",
  "Vyrieš Cauchyho úlohu $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Résous le problème de Cauchy $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pour $x \\gt 0$), et calcule $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. Výsledok zadaj ako zlomok alebo celé číslo.": "Résous le problème de Cauchy $y' = {@0}$, $y(0) = {@1}$, et calcule $y({@2})$. Donne le résultat sous forme de fraction ou d’entier.",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. {@3}": "Résous le problème de Cauchy $y' = {@0}$, $y(0) = {@1}$, et calcule $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $yy' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$.": "Résous le problème de Cauchy $yy' = {@0}$, $y(0) = {@1}$, et calcule $y({@2})$.",
  "Vyrieš Cauchyho úlohu ${@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Résous le problème de Cauchy ${@0}$, $y(1) = {@1}$ (pour $x \\gt 0$), et calcule $y({@2})$. {@3}",
  "Vyrieš sústavu a urči $A$.": "Résous le système et détermine $A$.",
  "Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.": "Utilise $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ et exprime $y$.",
  "Výraz $\\frac{M_y - N_x}{N}$ má tvar $\\frac{k}{x}$. Urči $k$.": "L’expression $\\frac{M_y - N_x}{N}$ est de la forme $\\frac{k}{x}$. Détermine $k$.",
  "Výraz $\\sqrt{m/k}$ je $\\frac{1}{\\omega_0}$; perióda je ešte $2\\pi$-krát väčšia.": "L’expression $\\sqrt{m/k}$ vaut $\\frac{1}{\\omega_0}$ ; la période est encore $2\\pi$ fois plus grande.",
  "Všeobecné riešenie rovnice $xy' + y ={@0}$ na intervale, ktorý neobsahuje nulu, je $y = {@1} + \\frac{C}{x}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$.": "La solution générale de l’équation $xy' + y ={@0}$ sur un intervalle ne contenant pas zéro est $y = {@1} + \\frac{C}{x}$. Détermine $C$ pour la condition initiale $y({@2}) = {@3}$.",
  "Všeobecné riešenie rovnice $xy' = 2y{@0}$ je $y = Cx^{2}{@1}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$. Výsledok zadaj ako celé číslo alebo zlomok.": "La solution générale de l’équation $xy' = 2y{@0}$ est $y = Cx^{2}{@1}$. Détermine $C$ pour la condition initiale $y({@2}) = {@3}$. Donne le résultat sous forme d’entier ou de fraction.",
  "Všeobecné riešenie rovnice $y' = {@0}{@1}$ je $y = C{@2}{@3}$. Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = {@4}$.": "La solution générale de l’équation $y' = {@0}{@1}$ est $y = C{@2}{@3}$. Détermine la constante $C$ pour que la solution vérifie la condition initiale $y(0) = {@4}$.",
  "Wronskián je $W = y_1y_2' - y_1'y_2$; poradie členov rozhoduje o znamienku $K$.": "Le wronskien est $W = y_1y_2' - y_1'y_2$ ; l’ordre des termes détermine le signe de $K$.",
  "Wronskián je súčinom dvoch funkcií s činiteľom $\\mathrm{e}^{\\alpha x}$, preto má v exponente $2\\alpha$.": "Le wronskien est un produit de deux fonctions comportant le facteur $\\mathrm{e}^{\\alpha x}$, son exposant contient donc $2\\alpha$.",
  "Y(s) vyjadrené": "Y(s) exprimée",
  "Z merania urči konštantu $k$ v $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Zaokrúhli na 4 desatinné miesta.": "À partir de la mesure, détermine la constante $k$ dans $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Arrondis à 4 décimales.",
  "Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.": "À chaque demi-vie, la quantité diminue de moitié : $m(t) = m_0\\cdot 2^{-t/T}$.",
  "Za koľko milisekúnd dosiahne napätie požadovanú hodnotu? {@0}": "Au bout de combien de millisecondes la tension atteindra-t-elle la valeur voulue ? {@0}",
  "Za koľko minút klesne teplota na požadovanú hodnotu? Zaokrúhli na desatiny minúty.": "Au bout de combien de minutes la température tombera-t-elle à la valeur voulue ? Arrondis au dixième de minute.",
  "Za koľko rokov dosiahne populácia polovicu nosnej kapacity? {@0}": "Au bout de combien d’années la population atteindra-t-elle la moitié de la capacité d’accueil ? {@0}",
  "Zabudol si na druhú deriváciu: $y_p'' = -{@0}y_p$, takže koeficient pri $A$ v rovnici pre kosínus je $q - {@1}$.": "Tu as oublié la dérivée seconde : $y_p'' = -{@0}y_p$, donc le coefficient de $A$ dans l’équation pour le cosinus est $q - {@1}$.",
  "Zabudol si na funkciu $\\varphi(y)$: po integrovaní $M$ podľa $x$ ju treba dourčiť z podmienky $F_y = N$.": "Tu as oublié la fonction $\\varphi(y)$ : après avoir intégré $M$ par rapport à $x$, il faut la déterminer à partir de la condition $F_y = N$.",
  "Zabudol si na konštantný člen ${@0}$ vo všeobecnom riešení; najprv ho prenes na druhú stranu.": "Tu as oublié le terme constant ${@0}$ dans la solution générale ; fais-le d’abord passer de l’autre côté.",
  "Zabudol si na konštantu $C$: zo začiatočnej podmienky $y(0)$ vyjde $C$, ktorým treba exponenciálu vynásobiť.": "Tu as oublié la constante $C$ : la condition initiale $y(0)$ donne $C$, par lequel il faut multiplier l’exponentielle.",
  "Zabudol si na prítok soli $cq$: bez neho by soľ z nádrže len ubúdala. Riešenie sa blíži k rovnovážnej hodnote $cV$.": "Tu as oublié l’apport de sel $cq$ : sans lui, la quantité de sel dans le réservoir ne ferait que diminuer. La solution tend vers la valeur d’équilibre $cV$.",
  "Zabudol si na začiatočnú podmienku: $\\mathcal{L}\\{y'\\} = sY - y(0)$, takže v $Y(s)$ je aj člen $\\frac{y(0)}{s - a}$.": "Tu as oublié la condition initiale : $\\mathcal{L}\\{y'\\} = sY - y(0)$, donc $Y(s)$ contient aussi le terme $\\frac{y(0)}{s - a}$.",
  "Zakry činiteľ $s{@0}$ a dosaď $s = {@1}$.": "Cache le facteur $s{@0}$ et substitue $s = {@1}$.",
  "Zamenil si hmotnosť a tuhosť: $\\omega_0 = \\sqrt{k/m}$, a perióda je $\\frac{2\\pi}{\\omega_0}$, nie $2\\pi\\omega_0$.": "Tu as échangé la masse et la raideur : $\\omega_0 = \\sqrt{k/m}$, et la période est $\\frac{2\\pi}{\\omega_0}$, et non $2\\pi\\omega_0$.",
  "Zamenil si obrazy: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ a $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.": "Tu as échangé les transformées : $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ et $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.",
  "Zamenil si súradnice: v bode $[x; y]$ je prvá súradnica $x$ a druhá $y$. Dosaď ich do $f(x, y)$ na správne miesta.": "Tu as échangé les coordonnées : au point $[x; y]$, la première coordonnée est $x$ et la seconde $y$. Substitue-les aux bons endroits dans $f(x, y)$.",
  "Zameň $y''$ za $\\lambda^{2}$, $y'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.": "Remplace $y''$ par $\\lambda^{2}$, $y'$ par $\\lambda$ et $y$ par $1$ et résous l’équation du second degré.",
  "Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.": "Écris la solution sous la forme $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, détermine les constantes à partir des conditions ; l’amplitude est $\\sqrt{C_1^{2} + C_2^{2}}$.",
  "Zapíš rovnicu v tvare $y' = \\frac{y}{x} + a$, dosaď $y = ux$, $y' = u + xu'$ a integruj.": "Écris l’équation sous la forme $y' = \\frac{y}{x} + a$, substitue $y = ux$, $y' = u + xu'$ et intègre.",
  "Začiatočná hodnota y(0)": "Valeur initiale y(0)",
  "Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.": "Dérive $x_p$ deux fois (produit de $t$ et d’une fonction trigonométrique) et substitue. Pour $\\omega = \\omega_0$, il ne reste que le terme sans $t$.",
  "Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y'$ a vyrieš sústavu dvoch lineárnych rovníc.": "Dérive la solution générale, substitue $x = 0$ dans $y$ et dans $y'$ et résous le système de deux équations linéaires.",
  "Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.": "Détermine combien de fois le nombre $\\alpha$ de l’exposant du second membre est racine de l’équation caractéristique, et multiplie la forme de base par $x$ autant de fois.",
  "Zo začiatočnej podmienky urči $B$.": "Détermine $B$ à partir de la condition initiale.",
  "Zostav bilanciu $x' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.": "Établis le bilan $x' = (\\text{apport de substance}) - (\\text{sortie de substance}) = cq - \\frac{q}{V}x$ et résous l’équation linéaire.",
  "Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.": "Écris l’équation caractéristique, détermine le type des racines d’après le discriminant et utilise la forme de solution correspondante.",
  "Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).": "Un $A$ négatif signifie que les oscillations sont en opposition de phase avec la force excitatrice (la fréquence d’excitation est supérieure à la fréquence propre).",
  "absolútnom člene": "terme constant",
  "algebra": "algèbre",
  "algebraická rovnica": "équation algébrique",
  "axy": "axy",
  "axy - x": "axy - x",
  "druhá": "seconde",
  "dvojnásobný koreň ${@0}$": "racine double ${@0}$",
  "je dvojnásobným koreňom": "est racine double",
  "je jednoduchým koreňom": "est racine simple",
  "k = 0: veličina sa nemení": "k = 0 : la grandeur ne change pas",
  "konštanta": "une constante",
  "korene ${@0}$ a ${@1}$": "les racines ${@0}$ et ${@1}$",
  "kritické tlmenie": "amortissement critique",
  "kritické tlmenie: najrýchlejší návrat bez kmitov": "amortissement critique : retour le plus rapide sans oscillations",
  "krát ${@0}$": "fois ${@0}$",
  "litre": "litres",
  "litrov": "litres",
  "logistická krivka s K = {@0}": "courbe logistique avec K = {@0}",
  "nadkritické tlmenie (aperiodický pohyb)": "amortissement surcritique (mouvement apériodique)",
  "nadkritické tlmenie: aperiodický pohyb": "amortissement surcritique : mouvement apériodique",
  "neizolovaný rovnovážny bod (det A = 0)": "point d’équilibre non isolé (det A = 0)",
  "nestabilné ohnisko": "foyer instable",
  "nestabilný degenerovaný uzol": "nœud dégénéré instable",
  "nestabilný uzol": "nœud instable",
  "netlmené kmity, ω₀ = 2": "oscillations non amorties, ω₀ = 2",
  "nie je koreňom": "n’est pas racine",
  "po vydelení číslom ${@0}$": "après division par ${@0}$",
  "podkritické tlmenie (tlmené kmity)": "amortissement sous-critique (oscillations amorties)",
  "podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = {@0}": "amortissement sous-critique : oscillations amorties, ω<sub>d</sub> = {@0}",
  "polynóm 1. stupňa": "un polynôme du 1er degré",
  "polčas ln 2 / |k| = {@0}": "demi-vie ln 2 / |k| = {@0}",
  "pre obraz Y(s)": "pour la transformée Y(s)",
  "prvá": "première",
  "riešenie y(t)": "solution y(t)",
  "rovnica pre y(t)": "équation pour y(t)",
  "rozklad na parciálne zlomky": "décomposition en éléments simples",
  "roztok s koncentráciou ${@0}\\,\\mathrm{kg/l}$ {@1}": "une solution de concentration ${@0}\\,\\mathrm{kg/l}$ {@1}",
  "roztoku, v ktorom je ${@0}\\,\\mathrm{kg}$ soli": "d’une solution contenant ${@0}\\,\\mathrm{kg}$ de sel",
  "rýchlosťou ${@0}$ {@1} za minútu": "au débit de ${@0}$ {@1} par minute",
  "sedlo": "col",
  "stabilné ohnisko": "foyer stable",
  "stabilný uzol": "nœud stable",
  "tabuľka obrazov": "table des transformées",
  "tretia": "troisième",
  "začiatočná úloha": "problème initial",
  "{@0} $y_p'' = -{@1}y_p$ a $y_p' = {@2}(-A{@3} + B{@4})$. Po dosadení porovnáme koeficienty: pri ${@5}$: ${@6} = {@7}$, pri ${@8}$: ${@9} = {@10}$. Riešenie sústavy je $A = {@11}$, $B = {@12}$.": "{@0} $y_p'' = -{@1}y_p$ et $y_p' = {@2}(-A{@3} + B{@4})$. Après substitution, on identifie les coefficients : pour ${@5}$ : ${@6} = {@7}$, pour ${@8}$ : ${@9} = {@10}$. La solution du système est $A = {@11}$, $B = {@12}$.",
  "{@0} Aké napätie bude na kondenzátore ${@1}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.": "{@0} Quelle sera la tension aux bornes du condensateur ${@1}\\,\\mathrm{ms}$ après la mise sous tension ? Arrondis le résultat en volts à 2 décimales.",
  "{@0} Akú teplotu bude mať ${@1}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.": "{@0} Quelle sera sa température ${@1}$ minutes après y avoir été placé ? Arrondis le résultat au dixième de degré.",
  "{@0} Koľko jedincov bude mať populácia po ${@1}$ rokoch? Výsledok zaokrúhli na celé číslo.": "{@0} Combien d’individus comptera la population au bout de ${@1}$ ans ? Arrondis le résultat à l’entier.",
  "{@0} Za koľko milisekúnd dosiahne napätie na kondenzátore ${@1}\\,\\%$ napätia zdroja? {@2}": "{@0} Au bout de combien de millisecondes la tension aux bornes du condensateur atteindra-t-elle ${@1}\\,\\%$ de la tension de la source ? {@2}",
  "{@0} Za koľko minút od položenia klesne teplota telesa na ${@1}{@2}$? Výsledok zaokrúhli na desatiny minúty.": "{@0} Au bout de combien de minutes après y avoir été placé la température du corps tombera-t-elle à ${@1}{@2}$ ? Arrondis le résultat au dixième de minute.",
  "{@0} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? {@1}": "{@0} Au bout de combien d’années atteindra-t-elle la moitié de la capacité d’accueil (c’est alors qu’elle croît le plus vite) ? {@1}",
  "{@0}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = {@1}$, $\\delta = {@2}$ a $\\omega_0^{2} = {@3}$. Korene charakteristickej rovnice sú $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, preto $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.": "{@0}En comparant avec la forme $x'' + 2\\delta x' + \\omega_0^{2}x = 0$, on a $2\\delta = {@1}$, $\\delta = {@2}$ et $\\omega_0^{2} = {@3}$. Les racines de l’équation caractéristique sont $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, donc $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.",
  "· riešením je priamka y = x − 1": "· la solution est la droite y = x − 1",
  "Časová konštanta $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.": "Constante de temps $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, donc $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.",
  "Či sú vlastné čísla reálne (uzol) alebo komplexné (ohnisko, stred), rozhoduje znamienko diskriminantu $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.": "Le signe du discriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ décide si les valeurs propres sont réelles (nœud) ou complexes (foyer, centre).",
  "Člen $\\frac{y}{x}$ je v poriadku, ale druhý člen nezávisí len od podielu $\\frac{y}{x}$.": "Le terme $\\frac{y}{x}$ est correct, mais le second terme ne dépend pas uniquement du quotient $\\frac{y}{x}$.",
  "Člen $p\\,y'$ sa transformuje na $p(sY - y(0))$; po prenesení na pravú stranu dá $+p\\,y(0)$. Over znamienko.": "Le terme $p\\,y'$ se transforme en $p(sY - y(0))$ ; après passage dans le membre de droite, il donne $+p\\,y(0)$. Vérifie le signe.",
  "Číslo ${@0}$ nie je koreňom charakteristickej rovnice, lebo ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pre $y_p = A{@5}$ je $y_p' = {@6}A{@7}$ a $y_p'' = {@8}A{@9}$, po dosadení $A\\cdot {@10}\\,{@11} = {@12}{@13}$, teda $A = {@14}$.": "Le nombre ${@0}$ n’est pas racine de l’équation caractéristique, car ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pour $y_p = A{@5}$, on a $y_p' = {@6}A{@7}$ et $y_p'' = {@8}A{@9}$ ; après substitution, $A\\cdot {@10}\\,{@11} = {@12}{@13}$, donc $A = {@14}$.",
  "Číslo ${@0}$ z exponentu pravej strany je koreňom charakteristickej rovnice (rezonancia); koľkokrát treba tvar vynásobiť $x$?": "Le nombre ${@0}$ de l’exposant du second membre est racine de l’équation caractéristique (résonance) ; combien de fois faut-il multiplier la forme par $x$ ?",
  "Číslo ${@0}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.": "Le nombre ${@0}\\mathrm{i}$ n’est pas racine de l’équation caractéristique, il n’y a pas de résonance.",
  "čas zdvojnásobenia ln 2 / k = {@0}": "temps de doublement ln 2 / k = {@0}",
  "čistej vody": "d’eau pure",
  "čistá voda {@0}": "de l’eau pure {@0}",
  "štvrtá": "quatrième",
  "λ = {@0} (dvojnásobný koreň)": "λ = {@0} (racine double)",
  "λ = {@0} ± {@1}i (komplexné korene)": "λ = {@0} ± {@1}i (racines complexes)",
  "λ₁ = {@0}, λ₂ = {@1} (rôzne reálne korene)": "λ₁ = {@0}, λ₂ = {@1} (racines réelles distinctes)",
  "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pri ω = {@1}, amplitúda {@2}</span> (pre F₀/m = 1)": "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pour ω = {@1}, amplitude {@2}</span> (pour F₀/m = 1)",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Arrondis le résultat à 2 décimales.",
  "liter": "litre",
  "rok": "an"
 }
});
