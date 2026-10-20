/* Français: preklad js/rocniky/r8.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/r8/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "r8-cisla": {
   "title": "Entiers relatifs et nombres rationnels",
   "summary": "Nombres négatifs, opposé, valeur absolue et calculs avec des fractions signées.",
   "theory": [
    "<p>On utilise les <strong>entiers naturels</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ pour compter des objets. Si on leur ajoute zéro\n       et les nombres opposés ($-1, -2, -3, \\dots$), on obtient les <strong>entiers relatifs</strong> $\\mathbb{Z}$. Les <strong>nombres rationnels</strong> $\\mathbb{Q}$\n       sont tous les nombres qu'on peut écrire sous forme de fraction $\\frac{p}{q}$ ($p$ entier relatif, $q$ entier naturel), par exemple $\\frac{3}{4}$,\n       $-2{,}5 = -\\frac{5}{2}$ ou $7 = \\frac{7}{1}$.</p>",
    {
     "fig": "r8-obory",
     "caption": "Tout entier naturel est un entier relatif et tout entier relatif est un nombre rationnel : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$."
    },
    "<p>L'<strong>opposé</strong> du nombre $a$ est $-a$ : celui de $5$ est $-5$, celui de $-3$ est $3$. La <strong>valeur absolue</strong> $|a|$\n       est la distance du nombre à zéro sur la droite graduée, elle n'est donc jamais négative : $|-7| = 7$, $|7| = 7$.</p>",
    "<p><strong>Calculer avec les signes :</strong> soustraire un nombre, c'est ajouter son opposé : $4 - (-6) = 4 + 6 = 10$.\n       Dans une multiplication ou une division, des signes identiques donnent un résultat positif et des signes différents un résultat négatif : $(-3)\\cdot(-4) = 12$, $(-20) : 5 = -4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $-8 - (-5) + 2\\cdot(-3)$.",
     "steps": [
      "D'abord la multiplication : $2\\cdot(-3) = -6$ (signes différents, le résultat est négatif).",
      "On remplace la soustraction d'un nombre négatif par une addition : $-8 - (-5) = -8 + 5 = -3$.",
      "Enfin $-3 + (-6) = -9$.",
      "<strong>Résultat : $-9$</strong>"
     ]
    },
    {
     "task": "Compare les nombres $-\\frac{3}{4}$ et $-0{,}7$.",
     "steps": [
      "On convertit la fraction en nombre décimal : $-\\frac{3}{4} = -0{,}75$.",
      "Le nombre $-0{,}75$ est plus loin de zéro du côté négatif, il est donc plus à gauche sur la droite graduée.",
      "<strong>$-\\frac{3}{4} &lt; -0{,}7$</strong>"
     ]
    }
   ]
  },
  "r8-mocniny": {
   "title": "Puissances et racines carrées",
   "summary": "Carré et cube, racine carrée, estimation d'une racine et écriture des grands nombres.",
   "theory": [
    "<p>Une <strong>puissance</strong> $a^n$ est l'écriture abrégée d'un produit de $n$ facteurs égaux : $a^n = a\\cdot a\\cdot\\ldots\\cdot a$.\n       Le nombre $a$ est la <em>base</em> et $n$ est l'<em>exposant</em>. Par exemple $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$.</p>",
    {
     "fig": "r8-mocniny",
     "caption": "Le carré d'un nombre est l'aire d'un carré : un carré de côté 3 contient $3^2 = 9$ petits carrés. Le cube est le volume d'un cube : un cube d'arête 2 est formé de $2^3 = 8$ petits cubes."
    },
    "<p><strong>Attention au signe :</strong> $(-3)^2 = (-3)\\cdot(-3) = 9$, mais $-3^2 = -(3\\cdot 3) = -9$.\n       Une puissance paire d'un nombre négatif est positive, une puissance impaire est négative : $(-2)^3 = -8$.</p>",
    "<p>La <strong>racine carrée</strong> d'un nombre positif ou nul $a$ est le nombre positif ou nul $b$ tel que $b^2 = a$. On écrit $\\sqrt{a} = b$,\n       par exemple $\\sqrt{49} = 7$ et $\\sqrt{0{,}09} = 0{,}3$. On écrit les grands nombres sous la forme $a\\cdot 10^n$, où $1 \\le a &lt; 10$ :\n       $45\\,000 = 4{,}5\\cdot 10^4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $(-2)^3 + 3^2 - \\sqrt{64}$.",
     "steps": [
      "$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$.",
      "$3^2 = 9$ et $\\sqrt{64} = 8$, car $8^2 = 64$.",
      "$-8 + 9 - 8 = -7$.",
      "<strong>Résultat : $-7$</strong>"
     ]
    },
    {
     "task": "Entre quels deux entiers naturels consécutifs se trouve $\\sqrt{50}$ ?",
     "steps": [
      "On cherche les carrés proches de 50 : $7^2 = 49$ et $8^2 = 64$.",
      "Comme $49 &lt; 50 &lt; 64$, on a $7 &lt; \\sqrt{50} &lt; 8$.",
      "<strong>$\\sqrt{50}$ est compris entre 7 et 8</strong> (très près de 7)."
     ]
    }
   ]
  },
  "r8-vyrazy": {
   "title": "Expressions littérales",
   "summary": "Ce qu'est une variable, substituer une valeur dans une expression et traduire une description en expression.",
   "theory": [
    "<p>Une <strong>variable</strong> est une lettre (par exemple $x$, $a$, $n$) qui représente un nombre quelconque. Une <strong>expression littérale</strong>\n       relie des nombres et des variables par des opérations, par exemple $3x + 5$ ou $2(a - 1)$. Entre un nombre et une variable, on n'écrit pas\n       le signe de multiplication : $3x$ signifie $3\\cdot x$.</p>",
    "<p>On calcule la <strong>valeur d'une expression</strong> en remplaçant la variable par un nombre. On met un nombre négatif entre parenthèses :\n       pour $x = -2$, on a $x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$.</p>",
    {
     "fig": "r8-obdlznik",
     "caption": "Un rectangle de côtés $a$ et $a + 3$ a pour périmètre $o = 2a + 2(a + 3)$ et pour aire $S = a(a + 3)$. Pour $a = 4$, on a $o = 22$ et $S = 28$."
    },
    "<p><strong>Traduire en expression :</strong> « le double du nombre $x$ » s'écrit $2x$, « le nombre plus grand de 5 que $x$ » s'écrit $x + 5$, « le tiers du nombre $x$ » s'écrit $\\frac{x}{3}$,\n       « le carré de la somme des nombres $a$ et $b$ » s'écrit $(a + b)^2$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule la valeur de l'expression $2x^2 - 5x + 1$ pour $x = -3$.",
     "steps": [
      "On remplace $x$ par $-3$ entre parenthèses : $2\\cdot(-3)^2 - 5\\cdot(-3) + 1$.",
      "$(-3)^2 = 9$, donc $2\\cdot 9 = 18$ ; ensuite $-5\\cdot(-3) = 15$.",
      "$18 + 15 + 1 = 34$.",
      "<strong>La valeur de l'expression est 34.</strong>"
     ]
    },
    {
     "task": "Écris sous forme d'expression : « le nombre plus petit de 4 que le triple du nombre $n$ ».",
     "steps": [
      "Le triple du nombre $n$ est $3n$.",
      "« Plus petit de 4 » signifie qu'on soustrait 4.",
      "<strong>$3n - 4$</strong>"
     ]
    }
   ]
  },
  "r8-upravy": {
   "title": "Calcul littéral",
   "summary": "Termes semblables, développement et identités remarquables pour le carré d'une somme.",
   "theory": [
    "<p>Des <strong>termes semblables</strong> ont la même variable avec le même exposant, par exemple $3x$ et $-5x$ ou $2x^2$ et $x^2$.\n       On les additionne en additionnant leurs coefficients : $3x - 5x + 2 = -2x + 2$. On ne peut pas additionner des termes non semblables (par exemple $x^2$ et $x$).</p>",
    "<p><strong>Développer :</strong> on multiplie chaque terme de la parenthèse par le nombre placé devant : $3(2x - 4) = 6x - 12$.\n       Un signe moins devant une parenthèse change le signe de tous les termes : $-(x - 5) = -x + 5$. Pour multiplier deux binômes, on multiplie « chaque terme par chaque terme » :\n       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.</p>",
    {
     "fig": "r8-dlazdice",
     "caption": "Un carré de côté $a + b$ est formé d'un carré $a^2$, d'un carré $b^2$ et de deux rectangles $ab$. Donc $(a + b)^2 = a^2 + 2ab + b^2$."
    },
    "<p>Les <strong>identités remarquables</strong> qu'il vaut la peine de connaître par cœur : $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$\n       et $(a + b)(a - b) = a^2 - b^2$.</p>"
   ],
   "examples": [
    {
     "task": "Simplifie l'expression $4(x - 3) - 2(x - 5)$.",
     "steps": [
      "On développe : $4x - 12 - 2x + 10$ (le signe moins devant la deuxième parenthèse change $-5$ en $+10$).",
      "On regroupe les termes semblables : $4x - 2x = 2x$ et $-12 + 10 = -2$.",
      "<strong>$2x - 2$</strong>"
     ]
    },
    {
     "task": "Développe $(x - 4)^2$.",
     "steps": [
      "On utilise l'identité $(a - b)^2 = a^2 - 2ab + b^2$, avec $a = x$ et $b = 4$.",
      "$x^2 - 2\\cdot x\\cdot 4 + 4^2$.",
      "<strong>$x^2 - 8x + 16$</strong>"
     ]
    }
   ]
  },
  "r8-rovnice": {
   "title": "Équations du premier degré",
   "summary": "Transformations équivalentes, équations avec parenthèses et vérification.",
   "theory": [
    "<p>Une <strong>équation</strong> est une égalité entre deux expressions qui contient une inconnue, par exemple $2x + 3 = 9$. <strong>Résoudre une équation</strong>,\n       c'est trouver le nombre (la solution) pour lequel l'égalité est vraie. La solution de cette équation est $x = 3$, car $2\\cdot 3 + 3 = 9$.</p>",
    {
     "fig": "r8-vahy",
     "caption": "Une équation est comme une balance en équilibre : à gauche, deux sachets de masse inconnue $x$ et trois poids, à droite neuf poids. Si on retire 3 poids de chaque plateau, la balance reste en équilibre : $2x = 6$, donc $x = 3$."
    },
    "<p>Les <strong>transformations équivalentes</strong> ne changent pas la solution de l'équation : on peut ajouter (ou soustraire) le même nombre\n       ou la même expression aux deux membres, et multiplier ou diviser les deux membres par un même nombre non nul. Le but est d'isoler l'inconnue dans un membre.</p>",
    "<p><strong>Méthode :</strong> 1. on supprime les parenthèses, 2. on regroupe les termes en inconnue dans un membre et les nombres dans l'autre,\n       3. on divise les deux membres par le coefficient de l'inconnue, 4. on fait la <strong>vérification</strong> en remplaçant dans l'équation de départ.</p>"
   ],
   "examples": [
    {
     "task": "Résous l'équation $5x - 7 = 2x + 8$.",
     "steps": [
      "On soustrait $2x$ aux deux membres : $3x - 7 = 8$.",
      "On ajoute 7 aux deux membres : $3x = 15$.",
      "On divise les deux membres par 3 : $x = 5$.",
      "Vérification : membre de gauche $5\\cdot 5 - 7 = 18$, membre de droite $2\\cdot 5 + 8 = 18$ ✓"
     ]
    },
    {
     "task": "Résous l'équation $3(x + 2) = x - 4$.",
     "steps": [
      "On développe : $3x + 6 = x - 4$.",
      "On soustrait $x$, puis 6 : $2x = -10$.",
      "On divise par 2 : $x = -5$.",
      "Vérification : $3\\cdot(-5 + 2) = -9$ et $-5 - 4 = -9$ ✓"
     ]
    }
   ]
  },
  "r8-slovne": {
   "title": "Problèmes résolus par des équations",
   "summary": "Comment mettre un énoncé en équation : nombres, âges, périmètre et partage d'argent.",
   "theory": [
    "<p>On résout un problème par une équation en cinq étapes :</p>\n       <ol><li>On désigne l'inconnue par une lettre (par exemple $x$) et on écrit ce qu'elle représente.</li>\n       <li>On exprime les autres grandeurs en fonction de $x$.</li><li>On écrit l'équation d'après ce qui est égal dans l'énoncé.</li>\n       <li>On résout l'équation.</li><li>On vérifie <em>avec l'énoncé du problème</em> et on écrit la réponse.</li></ol>",
    "<p>Écritures utiles : « 5 de plus » s'écrit $x + 5$, « trois fois plus » s'écrit $3x$, « trois nombres consécutifs » sont $x$, $x + 1$, $x + 2$,\n       « le périmètre d'un rectangle » s'écrit $2a + 2b$.</p>",
    "<p>On vérifie avec l'énoncé et non en remplaçant dans sa propre équation. Si l'équation était mal posée, la vérification dans l'équation ne révélerait pas l'erreur.</p>"
   ],
   "examples": [
    {
     "task": "La somme de trois entiers naturels consécutifs est 48. Quels sont ces nombres ?",
     "steps": [
      "On note $x$ le plus petit nombre, les suivants sont $x + 1$ et $x + 2$.",
      "Équation : $x + (x + 1) + (x + 2) = 48$, donc $3x + 3 = 48$.",
      "$3x = 45$, $x = 15$.",
      "Vérification : $15 + 16 + 17 = 48$ ✓",
      "<strong>Réponse : ce sont les nombres 15, 16 et 17.</strong>"
     ]
    },
    {
     "task": "Une mère a 26 ans de plus que sa fille. Ensemble, elles ont 50 ans. Quel âge a la fille ?",
     "steps": [
      "L'âge de la fille est $x$, celui de la mère $x + 26$.",
      "Équation : $x + (x + 26) = 50$, donc $2x + 26 = 50$.",
      "$2x = 24$, $x = 12$.",
      "Vérification : la mère a $12 + 26 = 38$ ans et $12 + 38 = 50$ ✓",
      "<strong>Réponse : la fille a 12 ans.</strong>"
     ]
    }
   ]
  },
  "r8-kruh": {
   "title": "Le disque et le cercle",
   "summary": "Rayon et diamètre, longueur du cercle, aire du disque, secteur circulaire et couronne.",
   "theory": [
    "<p>Le <strong>cercle</strong> $k$ de centre $S$ et de rayon $r$ est l'ensemble de tous les points du plan situés à la distance $r$ du point $S$ –\n       ce n'est qu'une « ligne ». Le <strong>disque</strong> est formé du cercle et de toute la surface intérieure. Le <strong>diamètre</strong> est un segment qui passe\n       par le centre et relie deux points du cercle ; sa longueur est $d = 2r$.</p>",
    {
     "fig": "r8-kruh",
     "caption": "Centre $S$, rayon $r$, diamètre $d = 2r$ et secteur circulaire d'angle $\\alpha$."
    },
    "<p>La <strong>longueur du cercle</strong> (périmètre du disque) est $o = 2\\pi r = \\pi d$, l'<strong>aire du disque</strong> est $S = \\pi r^2$.\n       Le nombre $\\pi$ est le rapport entre le périmètre et le diamètre de n'importe quel disque, $\\pi \\approx 3{,}14$.</p>",
    "<p>Un <strong>secteur circulaire</strong> d'angle $\\alpha$ est la partie du disque comprise entre deux rayons, son aire est $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$.\n       Une <strong>couronne</strong> est la surface comprise entre deux cercles concentriques de rayons $R &gt; r$ : $S = \\pi (R^2 - r^2)$.</p>"
   ],
   "examples": [
    {
     "task": "Une roue de vélo a un diamètre de $70\\,\\text{cm}$. Quelle distance parcourt-elle en un tour ? Utilise $\\pi \\approx 3{,}14$.",
     "steps": [
      "En un tour, la roue parcourt la longueur de son cercle : $o = \\pi d$.",
      "$o \\approx 3{,}14\\cdot 70 = 219{,}8\\,\\text{cm}$.",
      "<strong>La roue parcourt environ $219{,}8\\,\\text{cm}$, soit à peu près $2{,}2\\,\\text{m}$.</strong>"
     ]
    },
    {
     "task": "Calcule l'aire d'un quart de disque de rayon $10\\,\\text{cm}$ ($\\pi \\approx 3{,}14$).",
     "steps": [
      "Un quart de disque est un secteur d'angle $90^\\circ$, soit $\\frac{90}{360} = \\frac{1}{4}$ du disque.",
      "Aire du disque entier : $S = \\pi r^2 \\approx 3{,}14\\cdot 100 = 314\\,\\text{cm}^2$.",
      "<strong>Un quart : $314 : 4 = 78{,}5\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "r8-hranoly": {
   "title": "Les prismes – aire et volume",
   "summary": "Bases et surface latérale d'un prisme, patron du pavé droit, aire et volume du pavé droit, du cube et du prisme à base triangulaire.",
   "theory": [
    "<p>Un <strong>prisme droit</strong> est un solide qui a deux <strong>bases</strong> superposables et parallèles (des polygones) et une <strong>surface latérale</strong>\n       formée de rectangles – les faces latérales. Selon la forme de la base, on parle de prisme à base triangulaire, quadrangulaire, hexagonale…\n       Le pavé droit et le cube sont des prismes à base quadrangulaire.</p>",
    {
     "fig": "r8-siet",
     "caption": "Patron d'un pavé droit de dimensions $a$, $b$, $c$ : deux bases $a\\times b$ (bleues) et quatre faces latérales (vertes)."
    },
    "<p><strong>Volume</strong> d'un prisme : $V = S_p\\cdot v$ (aire de la base fois hauteur). Pour un pavé droit $V = a\\cdot b\\cdot c$, pour un cube $V = a^3$.\n       On mesure le volume en unités cubiques ; $1\\,\\text{dm}^3 = 1\\,\\text{l}$ et $1\\,\\text{cm}^3 = 1\\,\\text{ml}$.</p>",
    "<p>L'<strong>aire totale</strong> est la somme des aires de toutes les faces : $S = 2\\cdot S_p + S_{pl}$, où l'aire latérale est $S_{pl} = o_p\\cdot v$\n       (périmètre de la base fois hauteur). Pour un pavé droit $S = 2(ab + bc + ac)$, pour un cube $S = 6a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Un pavé droit a pour dimensions $a = 5\\,\\text{cm}$, $b = 3\\,\\text{cm}$, $c = 4\\,\\text{cm}$. Calcule son aire totale et son volume.",
     "steps": [
      "$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$.",
      "$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Un prisme droit a pour base un triangle rectangle dont les côtés de l'angle droit mesurent $3\\,\\text{cm}$ et $4\\,\\text{cm}$ (l'hypoténuse mesure $5\\,\\text{cm}$), et sa hauteur est $10\\,\\text{cm}$. Calcule son aire totale et son volume.",
     "steps": [
      "Aire de la base : $S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$.",
      "Volume : $V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$.",
      "Aire latérale : $S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$.",
      "Aire totale : $S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r8-statistika": {
   "title": "Graphiques, tableaux et statistiques",
   "summary": "Diagramme en bâtons et diagramme circulaire, moyenne, mode et médiane.",
   "theory": [
    "<p>On rassemble les données dans des <strong>tableaux</strong> et on les représente par des <strong>diagrammes</strong>. Le diagramme en bâtons permet de bien comparer des effectifs,\n       le diagramme circulaire montre quelle part du tout représente chaque groupe.</p>",
    {
     "fig": "r8-stlpce",
     "caption": "Diagramme en bâtons : les notes d'un contrôle dans une classe de 23 élèves (1 est la meilleure note, 5 la moins bonne). C'est la note 2 que le plus d'élèves ont obtenue."
    },
    {
     "fig": "r8-kolac",
     "caption": "Diagramme circulaire : comment les élèves viennent à l'école. La moitié vient à pied, 30 % en bus et 20 % à vélo."
    },
    "<p>La <strong>moyenne</strong> est la somme de toutes les valeurs divisée par leur nombre. Le <strong>mode</strong> est la valeur qui apparaît\n       le plus souvent. La <strong>médiane</strong> est la valeur du milieu quand on range les données dans l'ordre ; si le nombre de données est pair, c'est\n       la moyenne des deux valeurs du milieu.</p>"
   ],
   "examples": [
    {
     "task": "Les températures pendant cinq jours ont été $12$, $15$, $9$, $15$ et $14\\,{}^\\circ\\text{C}$. Détermine la moyenne, le mode et la médiane.",
     "steps": [
      "Moyenne : $\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$.",
      "Mode : la valeur la plus fréquente est $15\\,{}^\\circ\\text{C}$.",
      "Médiane : on range $9, 12, 14, 15, 15$ ; la valeur du milieu est $14\\,{}^\\circ\\text{C}$."
     ]
    },
    {
     "task": "D'après le diagramme des notes, calcule la note moyenne de la classe.",
     "steps": [
      "Somme de toutes les notes : $1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$.",
      "Nombre d'élèves : $5 + 8 + 6 + 3 + 1 = 23$.",
      "<strong>Moyenne : $56 : 23 \\approx 2{,}43$.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, teda $p = {@6}$ a $q = {@7}$.": "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, donc $p = {@6}$ et $q = {@7}$.",
  "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Plášť: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, povrch $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.": "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Surface latérale : $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, aire totale $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.",
  "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Obe strany vynásobíme {@4}: $x = {@5}$.": "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. On multiplie les deux membres par {@4} : $x = {@5}$.",
  "$\\sqrt{{@0}} = {@1}$ a $\\sqrt{{@2}} = {@3}$, teda ${@4} - {@5} = {@6}$.": "$\\sqrt{{@0}} = {@1}$ et $\\sqrt{{@2}} = {@3}$, donc ${@4} - {@5} = {@6}$.",
  "$\\sqrt{{@0}} = {@1}$, lebo ${@2}^2 = {@3}$.": "$\\sqrt{{@0}} = {@1}$, car ${@2}^2 = {@3}$.",
  "$a^3$ znamená $a\\cdot a\\cdot a$, nie $3\\cdot a$.": "$a^3$ signifie $a\\cdot a\\cdot a$, pas $3\\cdot a$.",
  "${@0} : {@1} = {@2}$ a znamienka sú {@3}: ${@4} : {@5} = {@6}$.": "${@0} : {@1} = {@2}$ et les signes sont {@3} : ${@4} : {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}$ a znamienka sú {@3}: ${@4}\\cdot {@5} = {@6}$.": "${@0}\\cdot {@1} = {@2}$ et les signes sont {@3} : ${@4}\\cdot {@5} = {@6}$.",
  "${@0}^2 = {@1}$ a ${@2}^2 = {@3}$. Keďže ${@4} &lt; {@5} &lt; {@6}$, platí ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.": "${@0}^2 = {@1}$ et ${@2}^2 = {@3}$. Comme ${@4} &lt; {@5} &lt; {@6}$, on a ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda ${@4} - {@5} = {@6}$.": "$|{@0}| = {@1}$ et $|{@2}| = {@3}$, donc ${@4} - {@5} = {@6}$.",
  "(a + b)^2 = a^2 + 2ab + b^2": "(a + b)^2 = a^2 + 2ab + b^2",
  "(a - b)^2 = a^2 - 2ab + b^2": "(a - b)^2 = a^2 - 2ab + b^2",
  ", $x + 2$ a $x + 3$": ", $x + 2$ et $x + 3$",
  "Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.": "La valeur absolue est la distance à zéro, elle n'est jamais négative.",
  "Ak rovnicu násobíš číslom {@0}, vynásob každý člen na oboch stranách, aj číslo ${@1}$. Jednoduchšie je najprv osamostatniť zlomok.": "Si tu multiplies l'équation par {@0}, multiplie chaque terme des deux membres, y compris le nombre ${@1}$. C'est plus simple d'isoler d'abord la fraction.",
  "Akvárium tvaru kvádra má vnútorné rozmery {@0} cm, {@1} cm a {@2} cm. Koľko litrov vody sa doň zmestí?": "Un aquarium en forme de pavé droit a pour dimensions intérieures {@0} cm, {@1} cm et {@2} cm. Combien de litres d'eau peut-il contenir ?",
  "Aká dlhá je dlhšia strana (v cm)?": "Quelle est la longueur du plus long côté (en cm) ?",
  "Aká dlhá je druhá strana $a + {@0}$ pre $a = {@1}$ (v cm)?": "Quelle est la longueur de l'autre côté $a + {@0}$ pour $a = {@1}$ (en cm) ?",
  "Aká dlhá je kratšia strana (v cm)?": "Quelle est la longueur du plus court côté (en cm) ?",
  "Aké je najväčšie z čísel?": "Quel est le plus grand des nombres ?",
  "Aké je {@0}. číslo v poradí?": "Quel est le {@0}e nombre dans l'ordre ?",
  "Aké je číslo $a$? Pred desatinnou čiarkou má mať jedinú nenulovú číslicu.": "Quel est le nombre $a$ ? Il doit avoir un seul chiffre non nul avant la virgule.",
  "Akú časť plného uhla tvorí uhol ${@0}^\\circ$? Zadaj ju ako zlomok.": "Quelle fraction de l'angle plein représente un angle de ${@0}^\\circ$ ? Donne-la sous forme de fraction.",
  "Aký je najmenší spoločný menovateľ zlomkov ${@0}$ a ${@1}$?": "Quel est le plus petit dénominateur commun des fractions ${@0}$ et ${@1}$ ?",
  "Aký je objem hranola $V = S_p\\cdot v$ (v cm³)?": "Quel est le volume du prisme $V = S_p\\cdot v$ (en cm³) ?",
  "Aký je objem kvádra (v cm³)?": "Quel est le volume du pavé droit (en cm³) ?",
  "Aký je obsah celého kruhu (v cm²)?": "Quelle est l'aire du disque entier (en cm²) ?",
  "Aký je obsah plášťa – obvod podstavy krát výška (v cm²)?": "Quelle est l'aire de la surface latérale – périmètre de la base fois la hauteur (en cm²) ?",
  "Aký je obsah podstavy $S_p$ (v cm²)?": "Quelle est l'aire de la base $S_p$ (en cm²) ?",
  "Aký je polomer kruhu (v cm)?": "Quel est le rayon du disque (en cm) ?",
  "Aký je povrch hranola – dve podstavy a plášť (v cm²)?": "Quelle est l'aire totale du prisme – deux bases et la surface latérale (en cm²) ?",
  "Aký je súčet všetkých čísel?": "Quelle est la somme de tous les nombres ?",
  "Aký obsah má jedna stena kocky (v cm²)?": "Quelle est l'aire d'une face du cube (en cm²) ?",
  "Babka": "Mamie",
  "Bez zátvorky sa umocňuje len číslo {@0}, mínus ostáva pred výsledkom: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.": "Sans parenthèse, seul le nombre {@0} est élevé au carré, le moins reste devant le résultat : $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.",
  "Chýbajú ti členy s $x$: každý člen prvej zátvorky treba vynásobiť každým členom druhej, nielen prvý s prvým a posledný s posledným.": "Il te manque les termes en $x$ : il faut multiplier chaque terme de la première parenthèse par chaque terme de la deuxième, pas seulement le premier par le premier et le dernier par le dernier.",
  "Dcéra": "Sa fille",
  "Dedko": "Papi",
  "Delil si len číslom $\\pi$, takto dostaneš priemer. Polomer je jeho polovica.": "Tu as seulement divisé par $\\pi$, tu obtiens ainsi le diamètre. Le rayon en est la moitié.",
  "Desatinnú čiarku posunieme o {@0} {@1} doľava, aby pred ňou ostala jediná nenulová číslica: ${@2} = {@3}\\cdot 10^{{@4}}$.": "On déplace la virgule de {@0} {@1} vers la gauche, pour qu'il ne reste qu'un seul chiffre non nul devant elle : ${@2} = {@3}\\cdot 10^{{@4}}$.",
  "Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.": "Le diagramme montre combien de livres les lecteurs ont empruntés à la bibliothèque chaque jour.",
  "Dlhšia strana má ${@0} + {@1} = {@2}\\,\\text{cm}$.": "Le plus long côté mesure ${@0} + {@1} = {@2}\\,\\text{cm}$.",
  "Do vzorca $S = \\pi r^2$ si dosadil priemer. Najprv vypočítaj polomer, polovicu priemeru.": "Dans la formule $S = \\pi r^2$, tu as mis le diamètre. Calcule d'abord le rayon, la moitié du diamètre.",
  "Dosaď $x = {@0}$ do člena ${@1}$. Koľko je ${@2}$?": "Remplace $x = {@0}$ dans le terme ${@1}$. Combien vaut ${@2}$ ?",
  "Dosaď za obe premenné naraz, záporné čísla do zátvoriek.": "Remplace les deux variables en même temps, les nombres négatifs entre parenthèses.",
  "Druhá mocnina $x^2$ znamená $x\\cdot x$, nie $2\\cdot x$.": "Le carré $x^2$ signifie $x\\cdot x$, pas $2\\cdot x$.",
  "Druhá mocnina ako štvorec, tretia mocnina ako kocka": "Le carré comme un carré, le cube comme un cube",
  "Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.": "Le carré est le produit de deux facteurs égaux. Moins fois moins donne plus.",
  "Druhá mocnina nie je dvojnásobok: umocniť na druhú znamená vynásobiť číslo samým sebou.": "Le carré n'est pas le double : élever au carré veut dire multiplier le nombre par lui-même.",
  "Druhá mocnina nie je dvojnásobok: umocniť znamená vynásobiť samým sebou.": "Le carré n'est pas le double : élever au carré veut dire multiplier par lui-même.",
  "Druhá strana je celý výraz $a + {@0}$, daj ju do zátvorky: násobí sa $a\\cdot(a + {@1})$.": "L'autre côté est toute l'expression $a + {@0}$, mets-la entre parenthèses : on multiplie $a\\cdot(a + {@1})$.",
  "Dvojnásobok": "Le double",
  "Exponent nie je počet číslic čísla, ale počet miest, o ktoré posunieš desatinnú čiarku.": "L'exposant n'est pas le nombre de chiffres du nombre, mais le nombre de rangs dont tu déplaces la virgule.",
  "Filip": "Philippe",
  "Hranol má dve podstavy (hornú a dolnú), obe treba započítať do povrchu.": "Le prisme a deux bases (celle du haut et celle du bas), il faut compter les deux dans l'aire totale.",
  "Hľadaj najvyšší stĺpec.": "Cherche la colonne la plus haute.",
  "Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.": "Cherche le nombre positif ou nul dont le carré est le nombre sous la racine.",
  "Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.": "Cherche le nombre qui, multiplié trois fois par lui-même, donne le volume.",
  "Hľadáme číslo, ktorého tretia mocnina je {@0}: ${@1}^3 = {@2}$, teda $a = {@3}\\,\\text{cm}$.": "On cherche le nombre dont le cube vaut {@0} : ${@1}^3 = {@2}$, donc $a = {@3}\\,\\text{cm}$.",
  "Jedna stena má obsah ${@0} : 6 = {@1}\\,\\text{cm}^2$, teda $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.": "Une face a une aire de ${@0} : 6 = {@1}\\,\\text{cm}^2$, donc $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.",
  "Jedna strana obdĺžnika je o {@0} cm dlhšia ako druhá. Obvod obdĺžnika je {@1} cm. Aká dlhá je {@2} strana (v cm)?": "Un côté d'un rectangle est plus long de {@0} cm que l'autre. Le périmètre du rectangle est {@1} cm. Quelle est la longueur du {@2} côté (en cm) ?",
  "K obom stranám pripočítame {@0}": "On ajoute {@0} aux deux membres",
  "Každá stena je na kvádri dvakrát. Aký je povrch kvádra (v cm²)?": "Chaque face apparaît deux fois sur le pavé droit. Quelle est l'aire totale du pavé droit (en cm²) ?",
  "Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.": "Multiplie chaque terme de la première parenthèse par chaque terme de la deuxième. Ensuite, regroupe les termes en $x$.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko.": "Quand tu fais passer un nombre dans l'autre membre de l'équation, change son signe.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko. Na oboch stranách urob tú istú operáciu.": "Quand tu fais passer un nombre dans l'autre membre de l'équation, change son signe. Fais la même opération dans les deux membres.",
  "Kocka má 6 stien, každá je štvorec so stranou $a$.": "Le cube a 6 faces, chacune est un carré de côté $a$.",
  "Kocka má 6 stien, nie 4. Nezabudni na hornú a dolnú stenu.": "Le cube a 6 faces, pas 4. N'oublie pas la face du haut et celle du bas.",
  "Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.": "Le cube a 6 faces carrées identiques : $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.",
  "Kocka má objem ${@0}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?": "Un cube a un volume de ${@0}\\,\\text{cm}^3$. Quelle est la longueur de son arête (en cm) ?",
  "Kocka má povrch ${@0}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?": "Un cube a une aire totale de ${@0}\\,\\text{cm}^2$. Quelle est la longueur de son arête (en cm) ?",
  "Koeficient ${@0}$ pri $x$ odstrániš delením, nie odčítaním: ${@1}x$ znamená ${@2}\\cdot x$.": "Tu élimines le coefficient ${@0}$ devant $x$ par une division, pas par une soustraction : ${@1}x$ signifie ${@2}\\cdot x$.",
  "Koľko je $R^2 - r^2$?": "Combien vaut $R^2 - r^2$ ?",
  "Koľko je $\\sqrt{{@0}}$?": "Combien vaut $\\sqrt{{@0}}$ ?",
  "Koľko je $r^2$?": "Combien vaut $r^2$ ?",
  "Koľko je ${@0}$?": "Combien vaut ${@0}$ ?",
  "Koľko je ${@0}^2$?": "Combien vaut ${@0}^2$ ?",
  "Koľko je ${@0}{@1}$?": "Combien vaut ${@0}{@1}$ ?",
  "Koľko je $|{@0}|$?": "Combien vaut $|{@0}|$ ?",
  "Koľko je v zátvorke: ${@0}{@1}$?": "Combien vaut la parenthèse : ${@0}{@1}$ ?",
  "Koľko je čísel?": "Combien y a-t-il de nombres ?",
  "Koľko kníh si požičali za celý týždeň?": "Combien de livres ont été empruntés pendant toute la semaine ?",
  "Koľko rokov má {@0}?": "Quel âge a {@0} ?",
  "Koľko žiakov hlasovalo spolu?": "Combien d'élèves ont voté en tout ?",
  "Koľko žiakov odpovedalo spolu?": "Combien d'élèves ont répondu en tout ?",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Rovnica: $2x + 2(x + {@1}) = {@2}$, teda $4x + {@3} = {@4}$, $4x = {@5}$ a $x = {@6}$. {@7}": "Le plus court côté est $x$, le plus long $x + {@0}$. Équation : $2x + 2(x + {@1}) = {@2}$, donc $4x + {@3} = {@4}$, $4x = {@5}$ et $x = {@6}$. {@7}",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Z rovnice $2x + 2(x + {@1}) = {@2}$ vypočítaj, koľko je $4x$.": "Le plus court côté est $x$, le plus long $x + {@0}$. À partir de l'équation $2x + 2(x + {@1}) = {@2}$, calcule combien vaut $4x$.",
  "Kratšia strana má ${@0}\\,\\text{cm}$.": "Le plus court côté mesure ${@0}\\,\\text{cm}$.",
  "Kruh má {@0}. Vypočítaj jeho obsah v cm². {@1}": "Un disque a {@0}. Calcule son aire en cm². {@1}",
  "Kruh má {@0}. Vypočítaj jeho obvod v cm. {@1}": "Un disque a {@0}. Calcule son périmètre en cm. {@1}",
  "Kruh so stredom, polomerom, priemerom a výsekom": "Disque avec son centre, son rayon, son diamètre et un secteur",
  "Kruhový diagram dopravy do školy": "Diagramme circulaire des moyens de transport pour aller à l'école",
  "Ktoré ovocie dostalo najviac hlasov?": "Quel fruit a obtenu le plus de voix ?",
  "Ktorý výraz sa rovná ${@0}$?": "Quelle expression est égale à ${@0}$ ?",
  "Ktorý výraz zodpovedá opisu: <em>{@0}</em>?": "Quelle expression correspond à la description : <em>{@0}</em> ?",
  "Ktorý šport je medzi žiakmi najobľúbenejší?": "Quel est le sport préféré des élèves ?",
  "Kváder má každú stenu dvakrát (hornú a dolnú, prednú a zadnú, ľavú a pravú). Súčet $ab + bc + ac$ ešte zdvojnásob.": "Chaque face du pavé droit apparaît deux fois (dessus et dessous, devant et derrière, gauche et droite). Double encore la somme $ab + bc + ac$.",
  "Kváder má rozmery $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.": "Un pavé droit a pour dimensions $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Calcule son aire totale (en cm²) et son volume (en cm³). Donne-les séparés par un point-virgule.",
  "Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.": "Le pavé droit a trois paires de faces identiques : $ab$, $bc$ et $ac$. Le volume est le produit des trois dimensions.",
  "Medián hľadaj až v usporiadanom zozname. Čísla najprv zoraď od najmenšieho po najväčšie.": "Cherche la médiane seulement dans la liste ordonnée. Range d'abord les nombres du plus petit au plus grand.",
  "Medián je priemer týchto dvoch čísel. Koľko je?": "La médiane est la moyenne de ces deux nombres. Combien vaut-elle ?",
  "Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{{@0}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.": "Entre quels deux entiers naturels consécutifs se trouve $\\sqrt{{@0}}$ ? Donne le plus petit et le plus grand séparés par un point-virgule.",
  "Množiny prirodzených, celých a racionálnych čísel": "Ensembles des entiers naturels, des entiers relatifs et des nombres rationnels",
  "Modus je hodnota, ktorá sa opakuje najčastejšie.": "Le mode est la valeur qui revient le plus souvent.",
  "Modus nie je najväčšie číslo, ale hodnota, ktorá sa vyskytuje najčastejšie.": "Le mode n'est pas le plus grand nombre, mais la valeur qui apparaît le plus souvent.",
  "Na polovicu sa delí len $x$, číslo {@0} sa odčíta až od polovice.": "Seul $x$ est divisé par deux ; le nombre {@0} est soustrait de la moitié seulement après.",
  "Na číselnej osi ležia čísla ${@0}$ a ${@1}$. Aká je ich vzdialenosť?": "Sur la droite graduée se trouvent les nombres ${@0}$ et ${@1}$. Quelle est leur distance ?",
  "Najmenšie číslo je {@0}.": "Le plus petit nombre est {@0}.",
  "Najmenšie číslo označ $x$ a sčítaj všetky čísla. Rovnica má tvar ${@0}x + \\square = {@1}$. Aké číslo patrí do štvorčeka?": "Note $x$ le plus petit nombre et additionne tous les nombres. L'équation a la forme ${@0}x + \\square = {@1}$. Quel nombre va dans le carré ?",
  "Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.": "Note $x$ le plus petit nombre, les suivants sont $x + 1$, $x + 2$, … Additionne-les et égale le tout à la somme.",
  "Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.": "Isole d'abord la fraction, puis multiplie les deux membres par le dénominateur.",
  "Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.": "Développe d'abord la parenthèse, puis résous comme une équation ordinaire.",
  "Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.": "Élève d'abord au carré, puis multiplie et enfin additionne. Mets les nombres négatifs entre parenthèses.",
  "Najprv urči absolútne hodnoty oboch čísel (vzdialenosti od nuly, tie nie sú záporné) a až potom odčítaj.": "Détermine d'abord les valeurs absolues des deux nombres (les distances à zéro, qui ne sont pas négatives), et soustrais seulement ensuite.",
  "Najprv vypočítaj každú odmocninu zvlášť.": "Calcule d'abord chaque racine séparément.",
  "Najprv vypočítaj, čo je v zátvorke, potom násob.": "Calcule d'abord ce qui est entre parenthèses, puis multiplie.",
  "Najvyšší stĺpec má hodnotu {@0} a patrí k možnosti „{@1}“. Táto hodnota je modus údajov.": "La colonne la plus haute a pour valeur {@0} et correspond à « {@1} ». Cette valeur est le mode des données.",
  "Najväčšie číslo je $x + {@0} = {@1}$.": "Le plus grand nombre est $x + {@0} = {@1}$.",
  "Natália": "Nathalie",
  "Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.": "Trouve deux carrés d'entiers naturels entre lesquels se trouve le nombre sous la racine.",
  "Násobiť treba číslo $x$, nie číslo {@0}.": "Il faut multiplier le nombre $x$, pas le nombre {@0}.",
  "Násobí sa celý súčet, preto ho treba dať do zátvorky. Bez zátvorky by sa násobilo len $x$.": "On multiplie toute la somme, il faut donc la mettre entre parenthèses. Sans parenthèse, on ne multiplierait que $x$.",
  "Násobí sa celý súčet, teda aj $x$, nielen číslo {@0}.": "On multiplie toute la somme, donc aussi $x$, pas seulement le nombre {@0}.",
  "Násobí sa len $x$, číslo {@0} sa odčíta až od {@1}. Zátvorka by znamenala {@2} celého rozdielu.": "On ne multiplie que $x$ ; le nombre {@0} est soustrait seulement après avoir pris {@1}. La parenthèse signifierait {@2} de toute la différence.",
  "O koľko miest doľava treba posunúť desatinnú čiarku? To je exponent $n$.": "De combien de rangs faut-il déplacer la virgule vers la gauche ? C'est l'exposant $n$.",
  "Obdĺžnik má strany dlhé $a$ a $a + {@0}$ centimetrov. Vypočítaj jeho {@1} pre $a = {@2}$.": "Un rectangle a des côtés de $a$ et $a + {@0}$ centimètres. Calcule son {@1} pour $a = {@2}$.",
  "Obdĺžnik so stranami a a a plus 3": "Rectangle de côtés a et a plus 3",
  "Obe strany vydeľ číslom ${@0}$. Aké je $x$?": "Divise les deux membres par ${@0}$. Combien vaut $x$ ?",
  "Obe strany vynásob číslom {@0}. Aké je $x$?": "Multiplie les deux membres par {@0}. Combien vaut $x$ ?",
  "Obe čísla ležia na tej istej strane nuly, preto ich vzdialenosti od nuly odčítaj, nesčítavaj.": "Les deux nombres sont du même côté de zéro : soustrais donc leurs distances à zéro, ne les additionne pas.",
  "Objem kocky je $a^3$.": "Le volume du cube est $a^3$.",
  "Objem nedelíš tromi. Hľadáš číslo, ktoré trikrát vynásobené samým sebou dá objem.": "On ne divise pas le volume par trois. Tu cherches le nombre qui, multiplié trois fois par lui-même, donne le volume.",
  "Obsah jednej steny je $a^2$, nie $a$. Stena je štvorec.": "L'aire d'une face est $a^2$, pas $a$. La face est un carré.",
  "Obsah kruhu je $S = \\pi r^2$.": "L'aire du disque est $S = \\pi r^2$.",
  "Obsah medzikružia nie je $\\pi(R - r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého: $\\pi R^2 - \\pi r^2$.": "L'aire de la couronne n'est pas $\\pi(R - r)^2$. Soustrais l'aire du petit disque de celle du grand : $\\pi R^2 - \\pi r^2$.",
  "Obsah obdĺžnika je súčin jeho strán.": "L'aire du rectangle est le produit de ses côtés.",
  "Obsah pravouhlého trojuholníka je polovica súčinu odvesien, nezabudni deliť dvoma.": "L'aire d'un triangle rectangle est la moitié du produit des côtés de l'angle droit, n'oublie pas de diviser par deux.",
  "Obsahy kruhov treba odčítať, nie sčítať: malý kruh v strede chýba.": "Il faut soustraire les aires des disques, pas les additionner : le petit disque au centre manque.",
  "Obvod je $2\\pi r$, zabudol si na dvojku (alebo si dosadil polomer namiesto priemeru do $\\pi d$).": "Le périmètre est $2\\pi r$, tu as oublié le 2 (ou tu as mis le rayon au lieu du diamètre dans $\\pi d$).",
  "Obvod kruhu je $o = 2\\pi r = \\pi d$.": "Le périmètre du disque est $o = 2\\pi r = \\pi d$.",
  "Obvod kruhu je ${@0}\\,\\text{cm}$. Aký je jeho polomer v cm? {@1}": "Le périmètre d'un disque est ${@0}\\,\\text{cm}$. Quel est son rayon en cm ? {@1}",
  "Obvod nemôžeš len vydeliť štyrmi, strany obdĺžnika nie sú rovnako dlhé.": "Tu ne peux pas simplement diviser le périmètre par quatre, les côtés du rectangle n'ont pas la même longueur.",
  "Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + {@0}$.": "Le périmètre du rectangle est $2a + 2b$ ; pour l'autre côté, remplace par $a + {@0}$.",
  "Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.": "Le périmètre du rectangle est $2a + 2b$. Note $x$ le plus court côté.",
  "Od oboch strán odčítame {@0}": "On soustrait {@0} des deux membres",
  "Od obsahu veľkého kruhu odčítaj obsah malého kruhu.": "Soustrais l'aire du petit disque de l'aire du grand disque.",
  "Od záporného čísla odčítavaš, posúvaš sa teda po číselnej osi ešte ďalej doľava od nuly.": "Tu soustrais à partir d'un nombre négatif : sur la droite graduée, tu vas donc encore plus loin à gauche de zéro.",
  "Odmocnina nie je polovica čísla. Hľadaj číslo, ktoré vynásobené samým sebou dá {@0}.": "La racine carrée n'est pas la moitié du nombre. Cherche le nombre qui, multiplié par lui-même, donne {@0}.",
  "Odčítaj hodnoty dvoch stĺpcov.": "Soustrais les valeurs des deux colonnes.",
  "Odčítaj získané absolútne hodnoty. Aký je výsledok?": "Soustrais les valeurs absolues obtenues. Quel est le résultat ?",
  "Odčítaj získané čísla. Aký je výsledok?": "Soustrais les nombres obtenus. Quel est le résultat ?",
  "Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.": "Soustrais les nombres et prends le résultat sans son signe. S'ils sont de part et d'autre de zéro, les distances à zéro s'additionnent.",
  "Odčítanie nahraď pripočítaním opačného čísla.": "Remplace la soustraction par l'addition de l'opposé.",
  "Odčítať záporné číslo znamená pripočítať opačné, kladné číslo: $-{@0} = +{@1}$.": "Soustraire un nombre négatif, c'est ajouter son opposé, un nombre positif : $-{@0} = +{@1}$.",
  "Odčítať číslo znamená pripočítať opačné číslo: ${@0} - {@1} = {@2} + {@3} = {@4}$.": "Soustraire un nombre, c'est ajouter son opposé : ${@0} - {@1} = {@2} + {@3} = {@4}$.",
  "Opis zodpovedá výrazu ${@0}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.": "La description correspond à l'expression ${@0}$. Pour l'écrire, pars de la fin de la phrase : détermine d'abord l'opération « principale » (somme, différence, puissance…), puis ses parties.",
  "Osamostatni zlomok. Koľko je $\\frac{x}{{@0}}$?": "Isole la fraction. Combien vaut $\\frac{x}{{@0}}$ ?",
  "Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.": "La base est un triangle rectangle, son aire est la moitié du produit des côtés de l'angle droit. La surface latérale, c'est le périmètre de la base fois la hauteur.",
  "Podľa vzorca ${@0}$ pre $a = x$, $b = {@1}$: ${@2} = {@3}$.": "D'après la formule ${@0}$ avec $a = x$, $b = {@1}$ : ${@2} = {@3}$.",
  "Polomer je polovica priemeru: $r = {@0}\\,\\text{cm}$.": "Le rayon est la moitié du diamètre : $r = {@0}\\,\\text{cm}$.",
  "Polovica čísla $x$ je $x$ delené dvoma, nie $2x$.": "La moitié du nombre $x$, c'est $x$ divisé par deux, pas $2x$.",
  "Posledný člen $b^2$ je druhá mocnina, a tá je vždy kladná.": "Le dernier terme $b^2$ est un carré, et un carré est toujours positif.",
  "Posledný člen je druhá mocnina čísla {@0}, nie samotné číslo.": "Le dernier terme est le carré du nombre {@0}, pas le nombre lui-même.",
  "Posledný člen je súčin ${@0}\\cdot {@1}$, nie samotné číslo {@2}.": "Le dernier terme est le produit ${@0}\\cdot {@1}$, pas le nombre {@2} lui-même.",
  "Použi $\\pi \\approx 3{,}14$.": "Utilise $\\pi \\approx 3{,}14$.",
  "Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.": "Divise l'aire totale par six, tu obtiens l'aire d'une face. Ensuite, prends la racine carrée.",
  "Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.": "Attention, dans la formule $S = \\pi r^2$, il y a le rayon, pas le diamètre.",
  "Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.": "Attention : $(x + a)^2$ n'est pas $x^2 + a^2$, il manque le double produit $2ax$.",
  "Počet čísel je nepárny ({@0}), medián je prostredné, {@1}. číslo: {@2}.": "Le nombre de valeurs est impair ({@0}), la médiane est le nombre du milieu, le {@1}e : {@2}.",
  "Počet čísel je párny ({@0}), medián je priemer {@1}. a {@2}. čísla: $\\frac{{@3} + {@4}}{2} = {@5}$.": "Le nombre de valeurs est pair ({@0}), la médiane est la moyenne du {@1}e et du {@2}e nombre : $\\frac{{@3} + {@4}}{2} = {@5}$.",
  "Počítaš obsah kruhu ($\\pi r^2$), úloha sa pýta na obvod.": "Tu calcules l'aire du disque ($\\pi r^2$), alors qu'on demande le périmètre.",
  "Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.": "Imagine un déplacement sur la droite graduée : un nombre positif fait avancer vers la droite, un nombre négatif vers la gauche.",
  "Presuň členy s $x$ na ľavú stranu a spoj ich. Aký koeficient bude pri $x$?": "Fais passer les termes en $x$ dans le membre de gauche et regroupe-les. Quel coefficient aura $x$ ?",
  "Presuň členy s $x$ naľavo a čísla napravo. Na tvar $ax = b$: aké je $a$ a $b$? Zadaj ich oddelené bodkočiarkou.": "Fais passer les termes en $x$ à gauche et les nombres à droite. Sous la forme $ax = b$ : que valent $a$ et $b$ ? Donne-les séparés par un point-virgule.",
  "Presuň čísla na pravú stranu a spoj ich. Aké číslo bude na pravej strane?": "Fais passer les nombres dans le membre de droite et regroupe-les. Quel nombre y aura-t-il à droite ?",
  "Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.": "Convertis la fraction en nombre décimal. De deux nombres négatifs, le plus grand est celui qui est le plus proche de zéro.",
  "Pri delení platí rovnaké pravidlo znamienok ako pri násobení.": "Pour la division, la règle des signes est la même que pour la multiplication.",
  "Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.": "Pour multiplier des fractions, pas besoin de dénominateur commun : on multiplie le numérateur par le numérateur et le dénominateur par le dénominateur.",
  "Pri presune člena s $x$ na druhú stranu rovnice mu treba zmeniť znamienko.": "Quand on fait passer un terme en $x$ dans l'autre membre de l'équation, il faut changer son signe.",
  "Pri presune čísla na druhú stranu rovnice mu treba zmeniť znamienko.": "Quand on fait passer un nombre dans l'autre membre de l'équation, il faut changer son signe.",
  "Pri párnom počte čísel sú v strede dve čísla. Medián je ich priemer.": "Quand il y a un nombre pair de valeurs, il y a deux nombres au milieu. La médiane est leur moyenne.",
  "Pri rozdiele záleží na poradí: najprv píšeš to, od čoho odčítavaš.": "Pour une différence, l'ordre compte : on écrit d'abord ce dont on soustrait.",
  "Pri roznásobení vzniknú dva členy s $x$: $x$ krát číslo z druhej zátvorky a číslo z prvej zátvorky krát $x$. Spoj ich. Aký je koeficient $p$ pri $x$?": "En développant, on obtient deux termes en $x$ : $x$ fois le nombre de la deuxième parenthèse et le nombre de la première parenthèse fois $x$. Regroupe-les. Quel est le coefficient $p$ de $x$ ?",
  "Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.": "Pour additionner et soustraire des fractions, il faut un dénominateur commun. N'oublie pas les signes.",
  "Pri umocnení rozdielu nestačí umocniť každý člen zvlášť, chýba stredný člen $-2ab$.": "Pour élever une différence au carré, il ne suffit pas d'élever chaque terme au carré, il manque le terme du milieu $-2ab$.",
  "Pri umocnení súčtu nestačí umocniť každý člen zvlášť, chýba stredný člen $2ab$.": "Pour élever une somme au carré, il ne suffit pas d'élever chaque terme au carré, il manque le terme du milieu $2ab$.",
  "Pri záporných číslach nerozhoduje, ktoré má väčšiu absolútnu hodnotu: väčšie je to, ktoré je bližšie k nule.": "Pour les nombres négatifs, ce n'est pas la plus grande valeur absolue qui décide : le plus grand est celui qui est le plus proche de zéro.",
  "Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: ${@0} + {@1} = {@2} - {@3} = {@4}$.": "Ajouter un nombre négatif, c'est la même chose que soustraire sa valeur absolue : ${@0} + {@1} = {@2} - {@3} = {@4}$.",
  "Päťkrát": "Cinq fois",
  "Päťnásobok": "Le quintuple",
  "Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.": "Des signes identiques donnent un produit positif, des signes différents un produit négatif.",
  "Rozdiel odmocnín nie je odmocnina z rozdielu. Najprv vypočítaj každú odmocninu zvlášť a až potom odčítaj.": "La différence des racines n'est pas la racine de la différence. Calcule d'abord chaque racine séparément, et soustrais seulement ensuite.",
  "Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.": "Détermine quelle opération se fait en dernier. Si on multiplie ou élève au carré toute une somme ou une différence, il faut une parenthèse.",
  "Rozmery prevedieme na decimetre: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.": "On convertit les dimensions en décimètres : ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.",
  "Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.": "Convertis les dimensions en décimètres, car $1\\,\\text{dm}^3 = 1$ litre.",
  "Roznásob $(x{@0})(x{@1})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.": "Développe $(x{@0})(x{@1})$ et écris le résultat sous la forme $x^2 + px + q$. Donne $p$ et $q$ séparés par un point-virgule.",
  "Roznásob ${@0}({@1})$ (aj so znamienkom pred zátvorkou). Zadaj koeficient pri $x$ a samotné číslo.": "Développe ${@0}({@1})$ (avec le signe devant la parenthèse). Donne le coefficient de $x$ et le nombre seul.",
  "Roznásob ${@0}({@1})$. Zadaj koeficient pri $x$ a samotné číslo oddelené bodkočiarkou.": "Développe ${@0}({@1})$. Donne le coefficient de $x$ et le nombre seul, séparés par un point-virgule.",
  "Roznásob a zjednoduš ${@0}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Développe et simplifie ${@0}$ sous la forme $ax + b$. Donne $a$ et $b$ séparés par un point-virgule.",
  "Roznásob zátvorku ${@0}(x{@1})$. Aké číslo (bez $x$) vznikne?": "Développe la parenthèse ${@0}(x{@1})$. Quel nombre (sans $x$) obtiens-tu ?",
  "Roznásobíme: ${@0}{@1} = {@2}{@3}$. Členy s $x$ naľavo, čísla napravo: ${@4} = {@5}$, teda $x = {@6}$.": "On développe : ${@0}{@1} = {@2}{@3}$. Les termes en $x$ à gauche, les nombres à droite : ${@4} = {@5}$, donc $x = {@6}$.",
  "Roznásobíme: ${@0}{@1}{@2}$. Spojíme podobné členy: ${@3}$, teda $a = {@4}$, $b = {@5}$.": "On développe : ${@0}{@1}{@2}$. On regroupe les termes semblables : ${@3}$, donc $a = {@4}$, $b = {@5}$.",
  "Rozšír oba zlomky na menovateľ {@0} a {@1} ich čitatele. Aký čitateľ dostaneš?": "Écris les deux fractions avec le dénominateur {@0} et {@1} leurs numérateurs. Quel numérateur obtiens-tu ?",
  "S – stred": "S – centre",
  "Sieť kvádra": "Patron du pavé droit",
  "Spoj podobné členy. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Regroupe les termes semblables. Donne $a$ et $b$ séparés par un point-virgule.",
  "Spoločný menovateľ je {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.": "Le dénominateur commun est {@0} : ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.",
  "Spolu je to {@0} rovnakých dielov: {@1} má jeden diel a {@2} {@3}. Súčet preto deľ číslom {@4}.": "En tout, cela fait {@0} parts égales : {@1} a une part et {@2} {@3}. Divise donc la somme par {@4}.",
  "Spolu majú {@0} {@1}, ale nie sú rovnako starí, preto súčet nemôžeš len rozdeliť na polovicu. Zohľadni rozdiel {@2} {@3}.": "Ensemble, ils ont {@0} {@1}, mais ils n'ont pas le même âge : tu ne peux donc pas simplement partager la somme en deux. Tiens compte de la différence de {@2} {@3}.",
  "Stena je štvorec. Aká dlhá je jeho strana, teda hrana kocky (v cm)?": "La face est un carré. Quelle est la longueur de son côté, c'est-à-dire de l'arête du cube (en cm) ?",
  "Stredný člen je dvojnásobok súčinu, $2ab$, nie len $ab$.": "Le terme du milieu est le double du produit, $2ab$, pas seulement $ab$.",
  "Stĺpcový diagram známok z písomky": "Diagramme en barres des notes d'un contrôle",
  "Sumu, ktorú {@0} {@1}, označ $x$. „{@2} viac“ znamená {@3}-násobok.": "Note $x$ la somme que {@1} {@0}. « {@2} plus » veut dire {@3} fois cette somme.",
  "Syn": "Son fils",
  "Súčet je ${@0} = {@1}$, počet čísel je {@2}. Priemer: ${@3} : {@4} = {@5}$.": "La somme est ${@0} = {@1}$, il y a {@2} nombres. Moyenne : ${@3} : {@4} = {@5}$.",
  "Súčet treba deliť počtom všetkých čísel. Spočítaj ich ešte raz.": "Il faut diviser la somme par le nombre de toutes les valeurs. Compte-les encore une fois.",
  "Súčet vydelený počtom čísel je ich priemer, nie hľadané číslo. Zostav rovnicu so všetkými číslami $x$, $x + 1$, …": "La somme divisée par le nombre de valeurs est leur moyenne, pas le nombre cherché. Écris une équation avec tous les nombres $x$, $x + 1$, …",
  "Súčet {@0} po sebe idúcich prirodzených čísel je {@1}. Ktoré z nich je {@2}?": "La somme de {@0} entiers naturels consécutifs est {@1}. Lequel d'entre eux est {@2} ?",
  "Súčin $(+b)\\cdot(-b)$ je záporný, preto je pred $b^2$ mínus.": "Le produit $(+b)\\cdot(-b)$ est négatif, c'est pourquoi il y a un moins devant $b^2$.",
  "Sčítaj hodnoty všetkých stĺpcov.": "Additionne les valeurs de toutes les colonnes.",
  "Sčítaj koeficienty všetkých členov s $x$. Aké je $a$?": "Additionne les coefficients de tous les termes en $x$. Combien vaut $a$ ?",
  "Sčítaj oba výsledky. Akú hodnotu má výraz?": "Additionne les deux résultats. Quelle est la valeur de l'expression ?",
  "Sčítaj samotné čísla (bez $x$). Aké je $b$?": "Additionne les nombres seuls (sans $x$). Combien vaut $b$ ?",
  "Sčítaj všetky členy. Akú hodnotu má výraz?": "Additionne tous les termes. Quelle est la valeur de l'expression ?",
  "Sčítaj všetky čísla a súčet vydeľ ich počtom.": "Additionne tous les nombres et divise la somme par leur nombre.",
  "Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.": "Additionne séparément les coefficients de $x$ et les nombres seuls. Le signe devant un terme lui appartient.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, každú dĺžku teda započítaj dvakrát.": "Tu as additionné seulement deux côtés. Le rectangle a quatre côtés, compte donc chaque longueur deux fois.",
  "Sčítame hodnoty všetkých stĺpcov: ${@0} = {@1}$.": "On additionne les valeurs de toutes les colonnes : ${@0} = {@1}$.",
  "To by bol výsledok $(x - b)^2$. Pri súčine súčtu a rozdielu sa stredné členy navzájom vyrušia.": "Ce serait le résultat de $(x - b)^2$. Dans le produit d'une somme par une différence, les termes du milieu s'annulent.",
  "To je výsledok súčinu $(a + b)(a - b)$. Pri druhej mocnine rozdielu je navyše stredný člen $-2ab$ a posledný člen je kladný.": "C'est le résultat du produit $(a + b)(a - b)$. Pour le carré d'une différence, il y a en plus le terme du milieu $-2ab$, et le dernier terme est positif.",
  "Toto je aritmetický priemer. Medián je prostredná hodnota usporiadaných čísel.": "C'est la moyenne arithmétique. La médiane est la valeur du milieu des nombres rangés.",
  "Toto je dĺžka druhej strany. Úloha sa pýta na {@0} stranu.": "C'est la longueur de l'autre côté. On demande le {@0} côté.",
  "Toto je len plášť. K povrchu patria aj obe podstavy.": "C'est seulement la surface latérale. L'aire totale comprend aussi les deux bases.",
  "Toto je najmenšie z čísel, úloha sa pýta na najväčšie. Pripočítaj k nemu, o koľko je najväčšie číslo väčšie.": "C'est le plus petit des nombres, on demande le plus grand. Ajoute-lui de combien le plus grand nombre est plus grand.",
  "Toto je najväčšie z čísel, úloha sa pýta na najmenšie.": "C'est le plus grand des nombres, on demande le plus petit.",
  "Toto je objem kocky ($a^3$). Povrch je súčet obsahov všetkých stien.": "C'est le volume du cube ($a^3$). L'aire totale est la somme des aires de toutes les faces.",
  "Toto je obsah celého kruhu. Výsek je len jeho časť podľa veľkosti stredového uhla.": "C'est l'aire du disque entier. Le secteur n'en est qu'une partie, selon la mesure de l'angle au centre.",
  "Toto je obsah jednej steny. Hranu dostaneš, keď ho ešte odmocníš.": "C'est l'aire d'une face. Tu obtiens l'arête en prenant encore sa racine carrée.",
  "Toto je obvod ($2\\pi r$), alebo si $r^2$ počítal ako $2r$. Obsah je $\\pi r^2 = \\pi\\cdot r\\cdot r$.": "C'est le périmètre ($2\\pi r$), ou bien tu as calculé $r^2$ comme $2r$. L'aire est $\\pi r^2 = \\pi\\cdot r\\cdot r$.",
  "Toto je povrch kocky ($6a^2$). Objem je $a^3$.": "C'est l'aire totale du cube ($6a^2$). Le volume est $a^3$.",
  "Toto je počet, koľkokrát sa najčastejšia hodnota opakuje. Modus je samotná hodnota.": "C'est le nombre de fois où la valeur la plus fréquente revient. Le mode est la valeur elle-même.",
  "Toto je suma, ktorú {@0} {@1}. Úloha sa pýta, koľko {@2} {@3}.": "C'est la somme que {@1} {@0}. On demande combien {@3} {@2}.",
  "Toto je súčet čísel. Priemer dostaneš, keď súčet vydelíš počtom čísel.": "C'est la somme des nombres. Tu obtiens la moyenne en divisant la somme par le nombre de valeurs.",
  "Toto je vek {@0}, úloha sa pýta na vek {@1}.": "C'est l'âge {@0}, on demande l'âge {@1}.",
  "Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.": "Le cube est le produit de trois facteurs égaux. Une puissance impaire d'un nombre négatif est négative.",
  "Tretia mocnina nie je trojnásobok: číslo treba napísať trikrát ako činiteľ a vynásobiť.": "Le cube n'est pas le triple : il faut écrire le nombre trois fois comme facteur et multiplier.",
  "Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami ${@0}\\,\\text{cm}$ a ${@1}\\,\\text{cm}$ (prepona má ${@2}\\,\\text{cm}$) a výšku ${@3}\\,\\text{cm}$.": "Un prisme droit a pour base un triangle rectangle dont les côtés de l'angle droit mesurent ${@0}\\,\\text{cm}$ et ${@1}\\,\\text{cm}$ (l'hypoténuse mesure ${@2}\\,\\text{cm}$), et une hauteur de ${@3}\\,\\text{cm}$.",
  "Trojnásobok": "Le triple",
  "Uhol ${@0}^\\circ$ je $\\frac{{@1}}{360}$ plného uhla, teda výsek je {@2} kruhu: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.": "L'angle de ${@0}^\\circ$ représente $\\frac{{@1}}{360}$ de l'angle plein, le secteur représente donc {@2} du disque : $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.",
  "Umocniť treba celý rozdiel, nielen číslo $x$.": "Il faut élever au carré toute la différence, pas seulement le nombre $x$.",
  "Umocňuje sa celý rozdiel, nie každé číslo zvlášť. Rozdiel daj do zátvorky.": "On élève au carré toute la différence, pas chaque nombre séparément. Mets la différence entre parenthèses.",
  "Umocňujeme celé číslo $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.": "On élève au carré tout le nombre $-{@0}$ : $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.",
  "Urči medián čísel {@0}.": "Détermine la médiane des nombres {@0}.",
  "Urči modus súboru údajov {@0}.": "Détermine le mode de la série de données {@0}.",
  "Usporiadame: {@0}. {@1}": "On range : {@0}. {@1}",
  "V ktorý deň si požičali najviac kníh?": "Quel jour a-t-on emprunté le plus de livres ?",
  "V obvode je dlhšia strana dvakrát, preto aj rozdiel {@0} cm treba započítať dvakrát.": "Dans le périmètre, le plus long côté apparaît deux fois, il faut donc aussi compter deux fois la différence de {@0} cm.",
  "Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.": "Note $x$ l'âge du plus jeune ; l'âge du plus âgé est $x$ plus la différence. La somme des deux âges est égale au nombre donné.",
  "Vek {@0} označ $x$. Z rovnice $x + (x + {@1}) = {@2}$ vypočítaj, koľko je $2x$.": "Note $x$ l'âge {@0}. À partir de l'équation $x + (x + {@1}) = {@2}$, calcule combien vaut $2x$.",
  "Vek {@0} označíme $x$, vek {@1} je potom $x + {@2}$. Rovnica: $x + (x + {@3}) = {@4}$, teda $2x = {@5}$ a $x = {@6}$. {@7}": "On note $x$ l'âge {@0}, l'âge {@1} est alors $x + {@2}$. Équation : $x + (x + {@3}) = {@4}$, donc $2x = {@5}$ et $x = {@6}$. {@7}",
  "Vezmi túto časť z obsahu celého kruhu. Aký je obsah výseku (v cm²)?": "Prends cette part de l'aire du disque entier. Quelle est l'aire du secteur (en cm²) ?",
  "Vnuk": "Son petit-fils",
  "Vnučka": "Sa petite-fille",
  "Vo vzorci $o = 2\\pi r$ je polomer. Ak poznáš priemer, stačí $o = \\pi d$, priemer už nezdvojnásobuj.": "Dans la formule $o = 2\\pi r$, il y a le rayon. Si tu connais le diamètre, $o = \\pi d$ suffit, ne double pas le diamètre.",
  "Vydeľ pravú stranu koeficientom pri $x$. Aké je $x$?": "Divise le membre de droite par le coefficient de $x$. Combien vaut $x$ ?",
  "Vydeľ súčet počtom čísel. Aký je priemer?": "Divise la somme par le nombre de valeurs. Quelle est la moyenne ?",
  "Vydeľ. Aké je $x$?": "Divise. Combien vaut $x$ ?",
  "Vynásob menovatele. Aký menovateľ dostaneš?": "Multiplie les dénominateurs. Quel dénominateur obtiens-tu ?",
  "Vynásob samotné čísla z oboch zátvoriek. Aké je $q$?": "Multiplie les nombres seuls des deux parenthèses. Combien vaut $q$ ?",
  "Vynásob čitatele. Aký čitateľ dostaneš (pred krátením)?": "Multiplie les numérateurs. Quel numérateur obtiens-tu (avant de simplifier) ?",
  "Vynásob číslom $3{,}14$. Aký je obsah kruhu (v cm²)?": "Multiplie par $3{,}14$. Quelle est l'aire du disque (en cm²) ?",
  "Vynásob číslom $3{,}14$. Aký je obsah medzikružia (v cm²)?": "Multiplie par $3{,}14$. Quelle est l'aire de la couronne (en cm²) ?",
  "Vypočítaj $\\sqrt{{@0}} - \\sqrt{{@1}}$.": "Calcule $\\sqrt{{@0}} - \\sqrt{{@1}}$.",
  "Vypočítaj $\\sqrt{{@0}}$.": "Calcule $\\sqrt{{@0}}$.",
  "Vypočítaj ${@0}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.": "Calcule ${@0}$. Donne le résultat sous forme de fraction irréductible (par ex. -5/6) ou de nombre entier.",
  "Vypočítaj ${@0}^2$.": "Calcule ${@0}^2$.",
  "Vypočítaj ${@0}^3$.": "Calcule ${@0}^3$.",
  "Vypočítaj $|{@0}| - |{@1}|$.": "Calcule $|{@0}| - |{@1}|$.",
  "Vypočítaj aritmetický priemer čísel {@0}.": "Calcule la moyenne arithmétique des nombres {@0}.",
  "Vypočítaj hodnotu výrazu ${@0}$ pre $x = {@1}$.": "Calcule la valeur de l'expression ${@0}$ pour $x = {@1}$.",
  "Vypočítaj hodnotu výrazu ${@0}(x{@1})$ pre $x = {@2}$.": "Calcule la valeur de l'expression ${@0}(x{@1})$ pour $x = {@2}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$ a $y = {@3}$.": "Calcule la valeur de l'expression ${@0}{@1}$ pour $x = {@2}$ et $y = {@3}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$.": "Calcule la valeur de l'expression ${@0}{@1}$ pour $x = {@2}$.",
  "Vypočítaj objem kocky s hranou ${@0}\\,\\text{cm}$ (v cm³).": "Calcule le volume d'un cube d'arête ${@0}\\,\\text{cm}$ (en cm³).",
  "Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.": "Calcule l'aire du disque entier et prends-en la part que représente l'angle du secteur sur $360^\\circ$.",
  "Vypočítaj obsah kruhového výseku s polomerom $r = {@0}\\,\\text{cm}$ a stredovým uhlom ${@1}^\\circ$ (v cm²). {@2}": "Calcule l'aire d'un secteur circulaire de rayon $r = {@0}\\,\\text{cm}$ et d'angle au centre ${@1}^\\circ$ (en cm²). {@2}",
  "Vypočítaj obsah medzikružia s polomermi $R = {@0}\\,\\text{cm}$ a $r = {@1}\\,\\text{cm}$ (v cm²). {@2}": "Calcule l'aire d'une couronne de rayons $R = {@0}\\,\\text{cm}$ et $r = {@1}\\,\\text{cm}$ (en cm²). {@2}",
  "Vypočítaj obsah obdĺžnika $a\\cdot b$ (v cm²).": "Calcule l'aire du rectangle $a\\cdot b$ (en cm²).",
  "Vypočítaj obsahy troch rôznych stien $ab$, $bc$ a $ac$ a sčítaj ich (v cm²).": "Calcule les aires des trois faces différentes $ab$, $bc$ et $ac$ et additionne-les (en cm²).",
  "Vypočítaj obvod obdĺžnika $2a + 2b$ (v cm).": "Calcule le périmètre du rectangle $2a + 2b$ (en cm).",
  "Vypočítaj povrch kocky s hranou ${@0}\\,\\text{cm}$ (v cm²).": "Calcule l'aire totale d'un cube d'arête ${@0}\\,\\text{cm}$ (en cm²).",
  "Vypočítal si $2x$, teda dvojnásobok hľadaného veku. Ešte vydeľ dvoma.": "Tu as calculé $2x$, c'est-à-dire le double de l'âge cherché. Divise encore par deux.",
  "Vypočítal si obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Tu as calculé l'aire. Le périmètre est la somme des longueurs des quatre côtés.",
  "Vypočítal si obvod. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Tu as calculé le périmètre. L'aire du rectangle est le produit des longueurs de ses côtés.",
  "Vyrieš rovnicu $\\frac{x}{{@0}}{@1} = {@2}$.": "Résous l'équation $\\frac{x}{{@0}}{@1} = {@2}$.",
  "Vyrieš rovnicu ${@0}(x{@1}) = {@2}{@3}$.": "Résous l'équation ${@0}(x{@1}) = {@2}{@3}$.",
  "Vyrieš rovnicu ${@0}{@1} = {@2}{@3}$.": "Résous l'équation ${@0}{@1} = {@2}{@3}$.",
  "Vyrieš rovnicu. Aké je $x$ (najmenšie číslo)?": "Résous l'équation. Combien vaut $x$ (le plus petit nombre) ?",
  "Vyrieš rovnicu. Koľko eur {@0} {@1}?": "Résous l'équation. Combien d'euros {@1} {@0} ?",
  "Vzal si časť z obvodu ($2\\pi r$), to je dĺžka oblúka. Pri obsahu výseku vychádzaj z obsahu kruhu $\\pi r^2$.": "Tu as pris une part du périmètre ($2\\pi r$), c'est la longueur de l'arc. Pour l'aire du secteur, pars de l'aire du disque $\\pi r^2$.",
  "Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|{@0} - {@1}| = |{@2}| = {@3}$.": "La distance entre deux nombres est la valeur absolue de leur différence : $|{@0} - {@1}| = |{@2}| = {@3}$.",
  "Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.": "Divise la formule $o = 2\\pi r$ par $2\\pi \\approx 6{,}28$.",
  "Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo": "Balance en équilibre : deux sachets x et trois poids à gauche, neuf poids à droite",
  "Výsledok zo zátvorky vynásob číslom ${@0}$. Akú hodnotu má výraz?": "Multiplie le résultat de la parenthèse par ${@0}$. Quelle est la valeur de l'expression ?",
  "Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.": "Regarde si le moins est dans la parenthèse. On n'élève au carré que ce qui est directement sous l'exposant.",
  "Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.": "De $o = 2\\pi r$, on tire $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.",
  "Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.": "Remplace $x$ par le nombre ; s'il est négatif, mets-le entre parenthèses.",
  "Zamenil si čísla: násobí sa číslom {@0}, pripočítava sa {@1}.": "Tu as inversé les nombres : on multiplie par {@0} et on ajoute {@1}.",
  "Zapíš výsledok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Écris le résultat $\\frac{{@0}}{{@1}}$ sous forme irréductible (ou comme nombre entier).",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Écris la fraction $\\frac{{@0}}{{@1}}$ sous forme irréductible (ou comme nombre entier).",
  "Zapíš číslo ${@0}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.": "Écris le nombre ${@0}$ sous la forme $a\\cdot 10^n$, où $1 \\le a &lt; 10$. Donne $a$ et $n$ séparés par un point-virgule.",
  "Zbav sa čísla ${@0}$ na ľavej strane, aby ostalo len ${@1}x$. Aké číslo bude na pravej strane?": "Élimine le nombre ${@0}$ du membre de gauche, pour qu'il ne reste que ${@1}x$. Quel nombre y aura-t-il dans le membre de droite ?",
  "Zjednoduš výraz ${@0}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.": "Simplifie l'expression ${@0}$ sous la forme $ax + b$. Donne les nombres $a$ et $b$ séparés par un point-virgule.",
  "Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Ne soustrais pas les fractions en soustrayant séparément les numérateurs et les dénominateurs. Mets-les d'abord au même dénominateur.",
  "Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "N'additionne pas les fractions en additionnant séparément les numérateurs et les dénominateurs. Mets-les d'abord au même dénominateur.",
  "Zlomok $\\frac{x}{{@0}}$ odstrániš násobením číslom {@1}, nie delením.": "Tu élimines la fraction $\\frac{x}{{@0}}$ en multipliant par {@1}, pas en divisant.",
  "Zlomok prevedieme na desatinné číslo: ${@0} = {@1}$. Porovnávame ${@2}$ a ${@3}$, preto ${@4} {@5} {@6}$.": "On convertit la fraction en nombre décimal : ${@0} = {@1}$. On compare ${@2}$ et ${@3}$, donc ${@4} {@5} {@6}$.",
  "Zápis ${@0}$ znamená súčin čísla ${@1}$ a premennej $x$, nie súčet. Dosadené číslo daj do zátvorky a vynásob.": "L'écriture ${@0}$ signifie le produit du nombre ${@1}$ et de la variable $x$, pas une somme. Mets le nombre remplacé entre parenthèses et multiplie.",
  "Záporné číslo pred zátvorkou mení znamienko každého člena v zátvorke, aj čísla na konci.": "Un nombre négatif devant une parenthèse change le signe de chaque terme de la parenthèse, y compris du nombre à la fin.",
  "Záporné číslo pri umocňovaní daj do zátvorky: $({@0})^2$ je kladné číslo.": "Quand tu élèves un nombre négatif au carré, mets-le entre parenthèses : $({@0})^2$ est un nombre positif.",
  "Zátvorka by znamenala, že {@0}-krát berieš celý súčet. Tu sa najprv vezme {@1} čísla $x$ a až k nemu sa pripočíta {@2}.": "La parenthèse signifierait que tu prends {@0} fois toute la somme. Ici, on prend d'abord {@1} du nombre $x$, et on lui ajoute ensuite {@2}.",
  "a $x + 2$": "et $x + 2$",
  "autobusom 30 %": "en bus 30 %",
  "babka": "mamie",
  "babky": "de mamie",
  "banán": "banane",
  "beh": "course à pied",
  "d = 2r – priemer": "d = 2r – diamètre",
  "dedka": "de papi",
  "dedko": "papi",
  "dlhšia": "plus long",
  "dlhšiu": "plus long",
  "druhá mocnina rozdielu čísla $x$ a čísla {@0}": "le carré de la différence entre le nombre $x$ et le nombre {@0}",
  "dvojnásobku": "le double",
  "dvojnásobok": "le double",
  "futbal": "football",
  "hokej": "hockey",
  "hruška": "poire",
  "jahoda": "fraise",
  "k – kružnica": "k – cercle",
  "kratšia": "plus court",
  "kratšiu": "plus court",
  "mama": "maman",
  "mamy": "de maman",
  "miest": "rangs",
  "na bicykli 20 %": "à vélo 20 %",
  "napr. -2; 8": "par ex. -2; 8",
  "napr. 4; 5": "par ex. 4; 5",
  "napr. 6; -9": "par ex. 6; -9",
  "objem (v cm³)": "volume (en cm³)",
  "obsah (v cm²)": "aire (en cm²)",
  "obvod (v cm)": "périmètre (en cm)",
  "otca": "de papa",
  "otec": "papa",
  "pešo 50 %": "à pied 50 %",
  "plávanie": "natation",
  "podstava": "base",
  "polomer $r = {@0}\\,\\text{cm}$": "un rayon $r = {@0}\\,\\text{cm}$",
  "povrch (v cm²)": "aire totale (en cm²)",
  "povrch; objem": "aire totale; volume",
  "priemer $d = {@0}\\,\\text{cm}$": "un diamètre $d = {@0}\\,\\text{cm}$",
  "päťnásobku": "le quintuple",
  "päťnásobok": "le quintuple",
  "r – polomer": "r – rayon",
  "rovnaké, výsledok je kladný": "identiques, le résultat est positif",
  "rozdiel {@0} čísla $x$ a čísla {@1}": "la différence entre {@0} du nombre $x$ et le nombre {@1}",
  "rôzne, výsledok je záporný": "différents, le résultat est négatif",
  "slivka": "prune",
  "stĺpcový diagram": "diagramme en barres",
  "sčítaj": "additionne",
  "tenis": "tennis",
  "tri štvrtiny": "trois quarts",
  "troch": "trois",
  "trojnásobku": "le triple",
  "trojnásobok": "le triple",
  "ušetril": "a économisé",
  "ušetrila": "a économisé",
  "vnuk": "son petit-fils",
  "vnuka": "de son petit-fils",
  "vnučka": "sa petite-fille",
  "vnučky": "de sa petite-fille",
  "výsek s uhlom α": "secteur d'angle α",
  "{@0} O koľko je stĺpec „{@1}“ vyšší ako stĺpec „{@2}“? {@3}": "{@0} De combien la colonne « {@1} » est-elle plus haute que la colonne « {@2} » ? {@3}",
  "{@0} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.": "{@0} Calcule son aire totale (en cm²) et son volume (en cm³), sépare-les par un point-virgule.",
  "{@0} Vypočítaj jeho {@1}.": "{@0} Calcule son {@1}.",
  "{@0} a {@1} ušetrili spolu {@2} €. {@3} {@4} {@5} viac ako {@6}. Koľko eur {@7} {@8}?": "{@0} et {@1} ont économisé ensemble {@2} €. {@3} {@4} {@5} plus que {@6}. Combien d'euros {@8} {@7} ?",
  "{@0} je o {@1} {@2} {@3} ako {@4}. Spolu majú {@5} {@6}. Koľko rokov má {@7}?": "{@0} est {@3} de {@1} {@2} que {@4}. Ensemble, ils ont {@5} {@6}. Quel âge a {@7} ?",
  "{@0} má $x$ eur, {@1} ${@2}x$ eur. Koľko $x$ je to spolu, teda aké číslo patrí do rovnice $\\square\\, x = {@3}$?": "{@0} a $x$ euros, {@1} ${@2}x$ euros. Combien de $x$ cela fait-il en tout, c'est-à-dire quel nombre va dans l'équation $\\square\\, x = {@3}$ ?",
  "{@0} má ${@1} + {@2} = {@3}$ {@4}.": "{@0} a ${@1} + {@2} = {@3}$ {@4}.",
  "{@0} má {@1} {@2}.": "{@0} a {@1} {@2}.",
  "{@0} súčtu čísla $x$ a čísla {@1}": "{@0} de la somme du nombre $x$ et du nombre {@1}",
  "{@0} znamená násobiť číslom {@1}, nie {@2} pripočítať.": "{@0} veut dire multiplier par {@1}, pas ajouter {@2}.",
  "{@0}: $x$, {@1}: ${@2}x$. Rovnica: $x + {@3}x = {@4}$, teda ${@5}x = {@6}$ a $x = {@7}$. {@8} {@9} {@10} €.": "{@0} : $x$, {@1} : ${@2}x$. Équation : $x + {@3}x = {@4}$, donc ${@5}x = {@6}$ et $x = {@7}$. {@8} {@9} {@10} €.",
  "{@0}: ${@1}x = {@2}$. Obe strany vydelíme číslom ${@3}$: $x = {@4}$.": "{@0} : ${@1}x = {@2}$. On divise les deux membres par ${@3}$ : $x = {@4}$.",
  "Čitateľ násobíme čitateľom a menovateľ menovateľom: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.": "On multiplie le numérateur par le numérateur et le dénominateur par le dénominateur : ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.",
  "Člen ${@0}$ má koeficient ${@1}$, nezabudni ho započítať.": "Le terme ${@0}$ a le coefficient ${@1}$, n'oublie pas de le compter.",
  "Členy s $x$ dáme naľavo, čísla napravo: ${@0}{@1} = {@2}{@3}$, teda ${@4} = {@5}$ a $x = {@6}$.": "On met les termes en $x$ à gauche, les nombres à droite : ${@0}{@1} = {@2}{@3}$, donc ${@4} = {@5}$ et $x = {@6}$.",
  "Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.": "Fais passer les termes en $x$ d'un côté, les nombres de l'autre. Divise enfin par le coefficient de $x$.",
  "Členy s $x$: ${@0}{@1}{@2} = {@3}$. Čísla: ${@4}{@5} = {@6}$. Výsledok: ${@7}$, teda $a = {@8}$, $b = {@9}$.": "Termes en $x$ : ${@0}{@1}{@2} = {@3}$. Nombres : ${@4}{@5} = {@6}$. Résultat : ${@7}$, donc $a = {@8}$, $b = {@9}$.",
  "Čísel je {@0}. Koľké v poradí je prostredné číslo?": "Il y a {@0} nombres. À quelle place se trouve le nombre du milieu ?",
  "Čísla ležia na opačných stranách nuly, preto sa ich vzdialenosti od nuly sčítajú, neodčítajú.": "Les nombres sont de part et d'autre de zéro, leurs distances à zéro s'additionnent donc, elles ne se soustraient pas.",
  "Čísla majú rôzne znamienka, preto ich absolútne hodnoty nesčítavaj, ale menšiu odčítaj od väčšej. Znamienko výsledku určí číslo s väčšou absolútnou hodnotou.": "Les nombres ont des signes différents : n'additionne pas leurs valeurs absolues, soustrais la plus petite de la plus grande. Le signe du résultat est celui du nombre qui a la plus grande valeur absolue.",
  "Čísla najprv usporiadaj od najmenšieho po najväčšie.": "Range d'abord les nombres du plus petit au plus grand.",
  "Čísla označíme $x$, $x + 1${@0}. Rovnica: ${@1}x + {@2} = {@3}$, teda ${@4}x = {@5}$ a $x = {@6}$. {@7}": "On note les nombres $x$, $x + 1${@0}. Équation : ${@1}x + {@2} = {@3}$, donc ${@4}x = {@5}$ et $x = {@6}$. {@7}",
  "Čísla usporiadaj od najmenšieho. Aké je {@0}. číslo v poradí?": "Range les nombres du plus petit au plus grand. Quel est le {@0}e nombre dans l'ordre ?",
  "Čísla usporiadaj od najmenšieho. Aké číslo stojí na tomto mieste? To je medián.": "Range les nombres du plus petit au plus grand. Quel nombre se trouve à cette place ? C'est la médiane.",
  "Číslo $a$ musí spĺňať $1 \\le a &lt; 10$, pred desatinnou čiarkou má teda jedinú číslicu.": "Le nombre $a$ doit vérifier $1 \\le a &lt; 10$, il a donc un seul chiffre avant la virgule.",
  "Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.": "Le nombre $a$ a un seul chiffre avant la virgule. L'exposant $n$ indique de combien de rangs tu déplaces la virgule.",
  "Číslo $q$ vznikne vynásobením samotných čísel zo zátvoriek, nie ich sčítaním.": "Le nombre $q$ s'obtient en multipliant les nombres seuls des parenthèses, pas en les additionnant.",
  "Číslo ${@0}$ násobí celý obsah zátvorky, nielen $x$.": "Le nombre ${@0}$ multiplie tout le contenu de la parenthèse, pas seulement $x$.",
  "Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{{@0}}$ a vydeľ 10.": "Le nombre sous la racine a deux décimales, le résultat en aura une : essaie $\\sqrt{{@0}}$ et divise par 10.",
  "Číslo pred zátvorkou násobí oba členy v zátvorke, nielen $x$, ale aj samotné číslo.": "Le nombre devant la parenthèse multiplie les deux termes de la parenthèse, pas seulement $x$, mais aussi le nombre seul.",
  "Číslo {@0} sa vyskytuje trikrát, ostatné čísla len raz. Modus je {@1}.": "Le nombre {@0} apparaît trois fois, les autres nombres une seule fois. Le mode est {@1}.",
  "Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.": "Multiplie chaque terme de la parenthèse par le nombre qui la précède, avec son signe. Ensuite, regroupe les termes semblables.",
  "Číslom pred zátvorkou vynásob každý člen v zátvorke, aj samotné číslo na konci.": "Multiplie chaque terme de la parenthèse par le nombre qui la précède, y compris le nombre seul à la fin.",
  "číslo o {@0} menšie ako polovica čísla $x$": "le nombre plus petit de {@0} que la moitié du nombre $x$",
  "číslo o {@0} väčšie ako {@1} čísla $x$": "le nombre plus grand de {@0} que {@1} du nombre $x$",
  "Štvorec so stranou a plus b rozdelený na štyri časti": "Carré de côté a plus b partagé en quatre parties",
  "Štvornásobok": "Le quadruple",
  "štvornásobku": "le quadruple",
  "štvornásobok": "le quadruple",
  "štyroch": "quatre",
  "Žiaci hlasovali o obľúbenom ovocí.": "Des élèves ont voté pour leur fruit préféré.",
  "Žiaci uviedli svoj obľúbený šport.": "Des élèves ont indiqué leur sport préféré.",
  "„O {@0} menšie“ znamená od polovice odčítať {@1}, poradie je opačné.": "« Plus petit de {@0} » veut dire soustraire {@1} de la moitié, l'ordre est inversé.",
  "„O {@0} väčšie“ znamená {@1} pripočítať, nie odčítať.": "« Plus grand de {@0} » veut dire ajouter {@1}, pas soustraire.",
  "ℕ – prirodzené": "ℕ – entiers naturels",
  "ℚ – racionálne čísla": "ℚ – nombres rationnels",
  "ℤ – celé čísla": "ℤ – entiers relatifs"
 }
});
