/* Français: preklad js/rocniky/r6.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/r6/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "r6-desatinne": {
   "title": "Les nombres décimaux et les opérations",
   "summary": "Écrire, comparer et arrondir les nombres décimaux ; addition, soustraction, multiplication et division.",
   "theory": [
    "<p>Dans un <strong>nombre décimal</strong>, la virgule sépare la partie entière de la partie décimale. Dans le nombre $2{,}75$, il y a 2 unités, 7 dixièmes et 5 centièmes,\n       donc $2{,}75 = 2 + \\frac{7}{10} + \\frac{5}{100}$. On peut ajouter ou supprimer des zéros à la fin de la partie décimale : $2{,}4 = 2{,}40$.</p>",
    {
     "fig": "r6-desatinna-os",
     "caption": "Portion de la droite graduée de 2 à 3. Entre deux entiers, il y a 10 dixièmes et 100 centièmes."
    },
    "<p><strong>Addition et soustraction :</strong> on écrit les nombres l'un sous l'autre de façon que les <em>virgules soient alignées</em>, et on complète les places vides par des zéros.\n       <strong>Multiplication :</strong> on multiplie comme des entiers, et le résultat a autant de chiffres après la virgule que les deux facteurs réunis : $1{,}2\\cdot 0{,}3 = 0{,}36$.\n       Multiplier par 10, 100, 1 000 décale la virgule de 1, 2, 3 rangs vers la droite, diviser la décale vers la gauche.</p>",
    "<p><strong>Division par un entier :</strong> on divise comme d'habitude et on place la virgule au quotient au moment où on la franchit dans le dividende : $7{,}5 : 3 = 2{,}5$.\n       <strong>Arrondi :</strong> on regarde le chiffre juste après le rang auquel on arrondit. Si c'est 0 à 4, on arrondit par défaut, si c'est 5 à 9, par excès : $3{,}462 \\doteq 3{,}5$ (au dixième).</p>"
   ],
   "examples": [
    {
     "task": "Calcule $12{,}5 + 3{,}78$.",
     "steps": [
      "On aligne les virgules : $12{,}50 + 3{,}78$.",
      "On additionne rang par rang : $12{,}50 + 3{,}78 = 16{,}28$.",
      "<strong>Résultat : 16,28</strong>"
     ]
    },
    {
     "task": "Calcule $2{,}4\\cdot 1{,}5$.",
     "steps": [
      "Sans les virgules : $24\\cdot 15 = 360$.",
      "Les facteurs ont en tout 2 chiffres après la virgule, donc le résultat est $3{,}60 = 3{,}6$.",
      "<strong>Résultat : 3,6</strong>"
     ]
    }
   ]
  },
  "r6-zlomky": {
   "title": "Les fractions et leurs usages de base",
   "summary": "Ce qu'est une fraction, partie d'un tout, simplification et amplification, conversion en nombre décimal, comparaison.",
   "theory": [
    "<p>Une <strong>fraction</strong> $\\frac{a}{b}$ décrit une partie d'un tout : on partage le tout en $b$ parts égales (<em>dénominateur</em>) et on en prend $a$ (<em>numérateur</em>).\n       Le trait de fraction signifie une division : $\\frac{3}{4} = 3 : 4 = 0{,}75$.</p>",
    {
     "fig": "r6-zlomky-kruhy",
     "caption": "Parties coloriées des disques : un demi, trois quarts et trois huitièmes."
    },
    "<p><strong>Fraction d'un nombre :</strong> pour calculer $\\frac{3}{4}$ de 20, on divise 20 par le dénominateur et on multiplie par le numérateur : $20 : 4 = 5$, $5\\cdot 3 = 15$.</p>",
    "<p><strong>Amplifier et simplifier :</strong> si on multiplie ou divise le numérateur et le dénominateur par un même nombre (non nul), la valeur de la fraction ne change pas :\n       $\\frac{12}{18} = \\frac{2}{3}$ (on simplifie par six). Une fraction est <em>irréductible</em> quand on ne peut plus la simplifier.\n       Le plus simple pour comparer deux fractions est de les mettre au même dénominateur.</p>"
   ],
   "examples": [
    {
     "task": "Combien font $\\frac{2}{5}$ de 35 ?",
     "steps": [
      "Un cinquième : $35 : 5 = 7$.",
      "Deux cinquièmes : $7\\cdot 2 = 14$.",
      "<strong>Résultat : 14</strong>"
     ]
    },
    {
     "task": "Compare les fractions $\\frac{3}{4}$ et $\\frac{5}{6}$.",
     "steps": [
      "Le dénominateur commun est 12 : $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{5}{6} = \\frac{10}{12}$.",
      "$9 &lt; 10$, donc $\\frac{3}{4} &lt; \\frac{5}{6}$."
     ]
    }
   ]
  },
  "r6-delitelnost": {
   "title": "Divisibilité, nombres premiers et nombres composés",
   "summary": "Diviseur et multiple, critères de divisibilité, nombres premiers, nombres composés et décomposition en facteurs premiers.",
   "theory": [
    "<p>Le nombre $a$ est <strong>divisible</strong> par le nombre $b$ si la division $a : b$ ne donne pas de reste. Alors $b$ est un <em>diviseur</em> de $a$ et $a$ est un <em>multiple</em> de $b$.\n       Par exemple, les diviseurs de 12 sont 1, 2, 3, 4, 6 et 12.</p>",
    "<p><strong>Critères de divisibilité.</strong> Un nombre est divisible par</p>\n       <ul><li><strong>2</strong> si son dernier chiffre est pair (0, 2, 4, 6, 8),</li>\n       <li><strong>3</strong> si la somme de ses chiffres est divisible par 3 ; <strong>9</strong> si la somme de ses chiffres est divisible par 9,</li>\n       <li><strong>4</strong> si le nombre formé par ses deux derniers chiffres est divisible par 4,</li>\n       <li><strong>5</strong> s'il se termine par 0 ou 5 ; <strong>10</strong> s'il se termine par 0,</li>\n       <li><strong>6</strong> s'il est divisible à la fois par 2 et par 3.</li></ul>",
    "<p>Un <strong>nombre premier</strong> est un entier naturel qui a exactement deux diviseurs : 1 et lui-même (2, 3, 5, 7, 11, …).\n       Un <strong>nombre composé</strong> a plus de deux diviseurs (4, 6, 8, 9, …). Le nombre 1 n'est ni premier, ni composé.\n       Tout nombre composé peut se décomposer en un produit de nombres premiers (<em>facteurs premiers</em>) : $60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$.</p>",
    {
     "fig": "r6-eratosten",
     "caption": "Le crible d'Ératosthène : parmi les nombres de 1 à 60, on barre les multiples de 2, 3, 5 et 7 (sauf ces nombres eux-mêmes). Il reste les nombres premiers, coloriés."
    }
   ],
   "examples": [
    {
     "task": "Le nombre 4 716 est-il divisible par 3 ? Et par 4 ?",
     "steps": [
      "Somme des chiffres : $4 + 7 + 1 + 6 = 18$, et 18 est divisible par 3, donc <strong>oui</strong>.",
      "Les deux derniers chiffres forment 16 et $16 : 4 = 4$, donc il est aussi divisible par 4 : <strong>oui</strong>."
     ]
    },
    {
     "task": "Décompose le nombre 90 en facteurs premiers.",
     "steps": [
      "$90 : 2 = 45$, $45 : 3 = 15$, $15 : 3 = 5$, 5 est premier.",
      "<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>"
     ]
    }
   ]
  },
  "r6-nsd-nsn": {
   "title": "Plus grand commun diviseur et plus petit commun multiple",
   "summary": "PGCD et PPCM par la décomposition en facteurs premiers, nombres premiers entre eux et problèmes.",
   "theory": [
    "<p>Le <strong>plus grand commun diviseur</strong> des nombres $a$, $b$ – on écrit $D(a, b)$ ou PGCD – est le plus grand nombre par lequel les deux nombres sont divisibles.\n       Le <strong>plus petit commun multiple</strong> – $n(a, b)$ ou PPCM – est le plus petit nombre non nul qui est un multiple des deux nombres.</p>",
    {
     "fig": "r6-strom",
     "caption": "Décomposition de 60 et 84 en facteurs premiers. Les facteurs communs sont 2, 2 et 3, donc D(60, 84) = 12 ; n(60, 84) = 2 · 2 · 3 · 5 · 7 = 420."
    },
    "<p><strong>Méthode par décomposition :</strong> on décompose les deux nombres en facteurs premiers. Le PGCD est le produit des facteurs premiers <em>communs</em> (chacun autant de fois qu'il apparaît dans les deux).\n       Le PPCM est le produit de <em>tous</em> les facteurs premiers qui apparaissent dans au moins un des nombres (chacun autant de fois qu'il apparaît dans le nombre où il est le plus présent).\n       Vérification utile : $D(a, b)\\cdot n(a, b) = a\\cdot b$.</p>",
    "<p>Des nombres dont le PGCD est 1 sont dits <strong>premiers entre eux</strong> (par ex. 8 et 15). S'ils ont un diviseur commun plus grand que 1, ils ne sont <strong>pas premiers entre eux</strong>.\n       On utilise le PGCD pour partager quelque chose en parts égales les plus grandes possible ; le PPCM pour savoir quand des événements répétés coïncideront de nouveau.</p>"
   ],
   "examples": [
    {
     "task": "Détermine $D(24, 36)$ et $n(24, 36)$.",
     "steps": [
      "$24 = 2^3\\cdot 3$, $36 = 2^2\\cdot 3^2$.",
      "PGCD : $2^2\\cdot 3 = 12$.",
      "PPCM : $2^3\\cdot 3^2 = 72$.",
      "Vérification : $12\\cdot 72 = 864 = 24\\cdot 36$."
     ]
    },
    {
     "task": "Deux feux passent au vert en même temps. Le premier a un cycle de 40 secondes, le second de 60 secondes. Dans combien de secondes seront-ils de nouveau ensemble au début de leur cycle ?",
     "steps": [
      "On cherche le plus petit commun multiple : $n(40, 60)$.",
      "$40 = 2^3\\cdot 5$, $60 = 2^2\\cdot 3\\cdot 5$, donc $n = 2^3\\cdot 3\\cdot 5 = 120$.",
      "<strong>Dans 120 secondes (2 minutes).</strong>"
     ]
    }
   ]
  },
  "r6-cele": {
   "title": "Les entiers relatifs et les nombres négatifs",
   "summary": "Nombres positifs et négatifs sur la droite graduée, opposé, valeur absolue, comparaison, addition et soustraction.",
   "theory": [
    "<p>Les <strong>entiers relatifs</strong> sont $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ On utilise les nombres négatifs par exemple pour les températures sous zéro ($-5\\,{}^\\circ\\mathrm{C}$),\n       pour une dette ou pour une altitude sous le niveau de la mer. Zéro n'est ni positif, ni négatif.</p>",
    {
     "fig": "r6-os-cele",
     "caption": "Les nombres 4 et −4 sont opposés : ils sont à la même distance de zéro, de part et d'autre. Les deux ont pour valeur absolue 4."
    },
    "<p>L'<strong>opposé</strong> du nombre $a$ est $-a$ (celui de 4 est $-4$, celui de $-7$ est 7). La <strong>valeur absolue</strong> $|a|$ est la distance du nombre à zéro : $|-6| = 6$, $|6| = 6$.\n       <strong>Comparer :</strong> sur la droite graduée, le plus grand nombre est celui qui est le plus à droite. Donc $-2 &gt; -5$ et tout nombre négatif est plus petit que 0.</p>",
    "<p><strong>Addition et soustraction :</strong> ajouter un nombre positif, c'est se déplacer vers la droite sur la droite graduée ; ajouter un nombre négatif, vers la gauche.\n       Soustraire un nombre revient à ajouter son opposé : $3 - (-4) = 3 + 4 = 7$, $-2 - 5 = -2 + (-5) = -7$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $-8 + 3$.",
     "steps": [
      "On part de $-8$ et on avance de 3 vers la droite.",
      "<strong>$-8 + 3 = -5$</strong>"
     ]
    },
    {
     "task": "Le matin, il faisait $-6\\,{}^\\circ\\mathrm{C}$, à midi $2\\,{}^\\circ\\mathrm{C}$. De combien de degrés la température a-t-elle augmenté ?",
     "steps": [
      "Différence : $2 - (-6) = 2 + 6 = 8$.",
      "<strong>La température a augmenté de 8 °C.</strong>"
     ]
    }
   ]
  },
  "r6-uhly": {
   "title": "Les angles et leur mesure",
   "summary": "Types d'angles, rapporteur, degrés et minutes, angles adjacents supplémentaires et opposés par le sommet, calculs sur les angles.",
   "theory": [
    "<p>Un <strong>angle</strong> est formé de deux demi-droites (<em>côtés</em>) de même origine (<em>sommet</em>). On mesure un angle en <strong>degrés</strong> ;\n       un degré vaut 60 minutes : $1^\\circ = 60'$. On note les angles par des lettres grecques $\\alpha, \\beta, \\gamma$ ou par l'écriture $\\angle AVB$.</p>",
    {
     "fig": "r6-uhly-druhy",
     "caption": "Un angle aigu mesure moins de 90°, un angle droit 90°, un angle obtus entre 90° et 180°, un angle plat 180°."
    },
    "<p><strong>Mesurer avec un rapporteur :</strong> on place le centre du rapporteur sur le sommet de l'angle, le zéro sur un côté, et on lit sur la graduation où passe l'autre côté.</p>",
    {
     "fig": "r6-uhlomer",
     "caption": "Rapporteur posé sur un angle de 50°."
    },
    "<p>Des <strong>angles adjacents supplémentaires</strong> ont un côté commun et leurs autres côtés forment une droite ; leur somme vaut $180^\\circ$.\n       Des <strong>angles opposés par le sommet</strong> se forment face à face quand deux droites se coupent, et ils ont la même mesure.\n       Pour additionner des angles, on additionne séparément les degrés et les minutes ; on échange 60 minutes contre 1 degré.</p>"
   ],
   "examples": [
    {
     "task": "L'angle $\\alpha$ mesure $48^\\circ$. Combien mesure l'angle adjacent supplémentaire ?",
     "steps": [
      "Des angles adjacents supplémentaires font ensemble $180^\\circ$.",
      "$180^\\circ - 48^\\circ = 132^\\circ$.",
      "<strong>L'angle adjacent supplémentaire mesure 132°.</strong>"
     ]
    },
    {
     "task": "Additionne $35^\\circ\\,40' + 27^\\circ\\,35'$.",
     "steps": [
      "Degrés : $35 + 27 = 62$, minutes : $40 + 35 = 75$.",
      "$75' = 1^\\circ\\,15'$, donc en tout $63^\\circ\\,15'$."
     ]
    }
   ]
  },
  "r6-trojuholniky": {
   "title": "Les triangles et leurs propriétés",
   "summary": "Somme des angles d'un triangle, types de triangles selon les côtés et les angles, inégalité triangulaire.",
   "theory": [
    "<p>Le <strong>triangle</strong> $ABC$ a trois sommets, trois côtés $a = |BC|$, $b = |AC|$, $c = |AB|$ et trois angles intérieurs $\\alpha, \\beta, \\gamma$.\n       La <strong>somme des angles intérieurs</strong> de tout triangle est $\\alpha + \\beta + \\gamma = 180^\\circ$.</p>",
    {
     "fig": "r6-trojuholniky",
     "caption": "En haut, le classement selon les côtés (les petits traits marquent les côtés de même longueur), en bas selon les angles."
    },
    "<p><strong>Selon les côtés :</strong> quelconque (tous les côtés différents), isocèle (deux côtés égaux, les angles à la base sont égaux),\n       équilatéral (tous les côtés égaux, chaque angle mesure $60^\\circ$).\n       <strong>Selon les angles :</strong> acutangle (tous les angles aigus), rectangle (un angle droit), obtusangle (un angle obtus).</p>",
    "<p><strong>Inégalité triangulaire :</strong> la somme des longueurs de deux côtés quelconques est toujours plus grande que la longueur du troisième côté.\n       Il suffit de vérifier que les deux plus petits côtés sont ensemble plus longs que le plus grand. Par exemple, on ne peut pas construire de triangle avec des côtés de 3 cm, 4 cm et 8 cm, car $3 + 4 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "Dans un triangle, $\\alpha = 52^\\circ$ et $\\beta = 71^\\circ$. Calcule $\\gamma$.",
     "steps": [
      "$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$.",
      "<strong>$\\gamma = 57^\\circ$</strong>"
     ]
    },
    {
     "task": "Peut-on construire un triangle de côtés 5 cm, 6 cm et 10 cm ?",
     "steps": [
      "Les deux plus petits côtés : $5 + 6 = 11$.",
      "$11 &gt; 10$, l'inégalité est vérifiée.",
      "<strong>Oui, c'est possible.</strong>"
     ]
    }
   ]
  },
  "r6-obvod-obsah": {
   "title": "Périmètre et aire du carré et du rectangle",
   "summary": "Formules du périmètre et de l'aire, calcul d'un côté manquant, unités d'aire et conversions.",
   "theory": [
    "<p>Le <strong>périmètre</strong> est la longueur du contour d'une figure, on le mesure en unités de longueur (mm, cm, m). L'<strong>aire</strong> indique combien de petits carrés\n       de 1 unité de côté tiennent dans la figure ; on la mesure en unités d'aire ($\\text{mm}^2$, $\\text{cm}^2$, $\\text{m}^2$).</p>",
    {
     "fig": "r6-obdlznik-siet",
     "caption": "Dans un rectangle de 5 cm × 3 cm, on peut placer 3 rangées de 5 carrés de 1 cm², soit 15 cm² en tout."
    },
    "<p><strong>Rectangle</strong> de côtés $a$, $b$ : $o = 2\\cdot(a + b)$, $S = a\\cdot b$.\n       <strong>Carré</strong> de côté $a$ : $o = 4\\cdot a$, $S = a\\cdot a = a^2$.\n       Si on connaît l'aire et un côté d'un rectangle, on obtient l'autre par division : $b = S : a$.</p>",
    "<p><strong>Unités d'aire :</strong> $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$, $1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$, $1\\,\\text{m}^2 = 100\\,\\text{dm}^2$.\n       Pour les unités d'aire, le rapport est 100 et non 10, car un carré de 1 cm de côté contient $10\\cdot 10$ carrés de 1 mm de côté.</p>"
   ],
   "examples": [
    {
     "task": "Un jardin a la forme d'un rectangle de 14 m × 9 m. Combien de mètres de grillage faut-il pour le clôturer et quelle est son aire ?",
     "steps": [
      "Périmètre : $o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$.",
      "Aire : $S = 14\\cdot 9 = 126\\,\\text{m}^2$.",
      "<strong>Il faut 46 m de grillage, le jardin mesure 126 m².</strong>"
     ]
    },
    {
     "task": "Un carré a un périmètre de 36 cm. Quelle est son aire ?",
     "steps": [
      "Côté : $a = 36 : 4 = 9\\,\\text{cm}$.",
      "$S = 9\\cdot 9 = 81\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r6-osova": {
   "title": "La symétrie axiale",
   "summary": "Image d'un point et d'une figure par une symétrie axiale, figures symétriques et leurs axes.",
   "theory": [
    "<p>La <strong>symétrie axiale</strong> d'axe $o$ associe à chaque point $A$ son <em>image</em> $A'$ de façon que le segment $AA'$ soit perpendiculaire à l'axe\n       et que l'axe le coupe en son milieu. Le point $A$ et son image sont donc à la même distance de l'axe, chacun d'un côté. Les points de l'axe sont leur propre image.</p>",
    {
     "fig": "r6-osova",
     "caption": "La figure bleue et son image (verte) par rapport à l'axe o. Le point A est à 4 carreaux à gauche de l'axe, son image A′ à 4 carreaux à droite."
    },
    "<p>Pour construire l'image d'une figure, on construit les images de ses sommets et on les relie. L'image a la même forme et la même taille que la figure de départ, elle est seulement « retournée » comme dans un miroir.</p>",
    "<p>Une figure possède un <strong>axe de symétrie</strong> s'il existe une droite par rapport à laquelle elle est sa propre image (si on plie la feuille le long de cette droite, les deux moitiés se superposent).\n       Une telle droite s'appelle un <em>axe de symétrie</em>. Le carré a 4 axes, le rectangle 2, le triangle équilatéral 3, le triangle isocèle 1 et le disque une infinité.</p>"
   ],
   "examples": [
    {
     "task": "L'axe $o$ est une droite verticale dans la colonne 6. Le point $A$ est dans la colonne 2. Dans quelle colonne se trouve son image ?",
     "steps": [
      "Le point $A$ est à $6 - 2 = 4$ colonnes de l'axe.",
      "L'image est à 4 colonnes de l'autre côté : $6 + 4 = 10$.",
      "<strong>L'image est dans la colonne 10.</strong>"
     ]
    },
    {
     "task": "Combien d'axes de symétrie a un rectangle qui n'est pas un carré ?",
     "steps": [
      "Un axe passe par les milieux de deux côtés opposés – il y en a deux.",
      "Une diagonale n'est pas un axe : après pliage, les moitiés ne se superposent pas.",
      "<strong>2 axes.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, preto delíme stom: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.": "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, donc on divise par cent : ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.",
  "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, preto ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.": "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, donc ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.",
  "$1^\\circ = 60'$, preto ${@0}^\\circ = {@1}'$ a spolu ${@2}' + {@3}' = {@4}'$.": "$1^\\circ = 60'$, donc ${@0}^\\circ = {@1}'$ et en tout ${@2}' + {@3}' = {@4}'$.",
  "$S = a\\cdot b$, preto $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.": "$S = a\\cdot b$, donc $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.",
  "${@0} &gt; {@1}$, trojuholník sa zostrojiť dá.": "${@0} &gt; {@1}$, on peut construire le triangle.",
  "${@0} &lt; {@1}$, trojuholník sa zostrojiť nedá.": "${@0} &lt; {@1}$, on ne peut pas construire le triangle.",
  "${@0} + {@1} = {@2}$ (posun o {@3} doprava).": "${@0} + {@1} = {@2}$ (déplacement de {@3} vers la droite).",
  "${@0} - {@1} = {@2}$ (posun o {@3} doľava).": "${@0} - {@1} = {@2}$ (déplacement de {@3} vers la gauche).",
  "${@0} : 60 = {@1}$, zvyšok {@2}. Teda ${@3}' = {@4}$.": "${@0} : 60 = {@1}$, reste {@2}. Donc ${@3}' = {@4}$.",
  "${@0} = {@1}$ a ${@2} = {@3}$ nemajú spoločný prvočiniteľ, $D({@4}, {@5}) = 1$. Sú nesúdeliteľné.": "${@0} = {@1}$ et ${@2} = {@3}$ n'ont aucun facteur premier commun, $D({@4}, {@5}) = 1$. Ils sont premiers entre eux.",
  "${@0} = {@1}$, ${@2} = {@3}$. NSD je súčin spoločných prvočiniteľov: $D({@4}, {@5}) = {@6}{@7}$.": "${@0} = {@1}$, ${@2} = {@3}$. Le PGCD est le produit des facteurs premiers communs : $D({@4}, {@5}) = {@6}{@7}$.",
  "${@0} = {@1}\\cdot {@2}$, teda okrem 1 a {@3} má aj deliteľ {@4}. Je to zložené číslo.": "${@0} = {@1}\\cdot {@2}$, donc en plus de 1 et de {@3}, il a aussi le diviseur {@4}. C'est un nombre composé.",
  "${@0} {@1} {@2} = {@3}$. Večer bolo {@4} °C.": "${@0} {@1} {@2} = {@3}$. Le soir, il faisait {@4} °C.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda súčet je ${@4} + {@5} = {@6}$.": "$|{@0}| = {@1}$ et $|{@2}| = {@3}$, donc la somme est ${@4} + {@5} = {@6}$.",
  "4 dieliky": "4 graduations",
  "Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.": "La valeur absolue est la distance à zéro, elle n'est donc jamais négative.",
  "Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.": "La valeur absolue n'est jamais négative. Détermine d'abord la distance de chaque nombre à zéro, et additionne seulement ensuite.",
  "Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.": "S'il y a 60 minutes ou plus, échange 60 minutes contre 1 degré.",
  "Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.": "Si la somme des deux côtés les plus courts est égale au côté le plus long, les côtés seraient sur une même droite et on n'obtient pas de triangle.",
  "Aká dlhá je strana štvorca (v cm)?": "Quelle est la longueur du côté du carré (en cm) ?",
  "Aké je číslo opačné k číslu {@0}?": "Quel est l'opposé du nombre {@0} ?",
  "Aké je číslo {@0}?": "Que peut-on dire du nombre {@0} ?",
  "Aký bude čitateľ rozšíreného zlomku?": "Quel sera le numérateur de la fraction obtenue ?",
  "Aký je najmenší spoločný násobok čísel {@0} a {@1}?": "Quel est le plus petit multiple commun de {@0} et {@1} ?",
  "Aký je najväčší spoločný deliteľ čísel {@0} a {@1}?": "Quel est le plus grand diviseur commun de {@0} et {@1} ?",
  "Aký je obsah štvorca (v cm²)?": "Quelle est l'aire du carré (en cm²) ?",
  "Aký je obvod (v {@0})?": "Quel est le périmètre (en {@0}) ?",
  "Aký je obvod štvorca (v cm)?": "Quel est le périmètre du carré (en cm) ?",
  "Aký je súčet dvoch susedných strán?": "Quelle est la somme de deux côtés consécutifs ?",
  "Aký je súčet známych číslic?": "Quelle est la somme des chiffres connus ?",
  "Aký je uhol s veľkosťou ${@0}^\\circ$?": "De quel type est un angle de ${@0}^\\circ$ ?",
  "Aký veľký je jeden uhol pri základni?": "Combien mesure chacun des angles à la base ?",
  "Akým číslom treba rozšíriť zlomok $\\frac{{@0}}{{@1}}$, aby bol v menovateli {@2}?": "Par quel nombre faut-il multiplier les termes de la fraction $\\frac{{@0}}{{@1}}$ pour avoir {@2} au dénominateur ?",
  "Bod $A$ je od osi vzdialený $|{@0} - {@1}| = {@2}$ {@3}. Obraz je rovnako ďaleko na druhej strane osi: ${@4} {@5} {@6} = {@7}$.": "Le point $A$ est à une distance de $|{@0} - {@1}| = {@2}$ {@3} de l'axe. L'image est à la même distance de l'autre côté de l'axe : ${@4} {@5} {@6} = {@7}$.",
  "Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.": "Tu ne peux pas multiplier séparément la partie entière et la partie décimale – les dixièmes débordent sur les unités. Multiplie les nombres sans virgule, puis place la virgule.",
  "Ciferný súčet je {@0}, je deliteľný 3.": "La somme des chiffres est {@0}, elle est divisible par 3.",
  "Ciferný súčet je {@0}, je deliteľný 9.": "La somme des chiffres est {@0}, elle est divisible par 9.",
  "Ciferný súčet je {@0}, nie je deliteľný 3.": "La somme des chiffres est {@0}, elle n'est pas divisible par 3.",
  "Ciferný súčet je {@0}, nie je deliteľný 9.": "La somme des chiffres est {@0}, elle n'est pas divisible par 9.",
  "Delitele čísla {@0} sú {@1}. Je ich {@2}.": "Les diviseurs de {@0} sont {@1}. Il y en a {@2}.",
  "Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.": "Tous les nombres ont le diviseur 1. Des nombres ne sont pas premiers entre eux s'ils ont un diviseur commun plus grand que 1.",
  "Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: ${@0} : {@1} = {@2}$. Skúška: ${@3}\\cdot {@4} = {@5}$.": "On divise comme avec les nombres entiers et on écrit la virgule au quotient quand on la dépasse dans le dividende : ${@0} : {@1} = {@2}$. Vérification : ${@3}\\cdot {@4} = {@5}$.",
  "Delíme postupne prvočíslami: ${@0}$. Teda ${@1} = {@2}{@3}$.": "On divise successivement par des nombres premiers : ${@0}$. Donc ${@1} = {@2}{@3}$.",
  "Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.": "Les virgules doivent être l'une sous l'autre. Complète les places manquantes par des zéros.",
  "Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.": "Divise rang par rang en partant du rang le plus élevé. Quand tu dépasses la virgule du dividende, écris aussi la virgule dans le résultat.",
  "Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.": "Divise le nombre par le plus petit nombre premier possible (2, 3, 5, 7, …) et continue avec le quotient jusqu'à obtenir 1.",
  "Doplň správny znak: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$": "Écris le bon signe : $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$",
  "Dopočítaj tretí uhol a pozri sa na najväčší z nich.": "Calcule le troisième angle et regarde le plus grand des trois.",
  "Druhy trojuholníkov podľa strán a podľa uhlov": "Types de triangles selon les côtés et selon les angles",
  "Dve kratšie strany: ${@0} + {@1} = {@2}$, najdlhšia je {@3}.": "Les deux côtés les plus courts : ${@0} + {@1} = {@2}$, le plus long mesure {@3}.",
  "Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.": "Deux côtés ont la même longueur, le triangle est isocèle.",
  "Dve stuhy merajú {@0} cm a {@1} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?": "Deux rubans mesurent {@0} cm et {@1} cm. On veut les couper sans reste en morceaux de même longueur, les plus longs possible (en centimètres entiers). Combien de centimètres mesurera un morceau ?",
  "Dá sa zostrojiť trojuholník so stranami {@0} cm, {@1} cm a {@2} cm?": "Peut-on construire un triangle de côtés {@0} cm, {@1} cm et {@2} cm ?",
  "Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?": "La longueur d'un morceau doit être un diviseur des deux longueurs. Quel est le plus grand diviseur commun ?",
  "Dĺžka kúska musí deliť {@0} aj {@1} a má byť čo najväčšia, hľadáme $D({@2}, {@3})$.": "La longueur d'un morceau doit diviser {@0} et {@1} et être la plus grande possible : on cherche $D({@2}, {@3})$.",
  "Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …": "Cherche les paires de nombres dont le produit est le nombre donné : 1 et le nombre lui-même, puis 2 et …",
  "Hľadáme najmenší spoločný násobok: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Linky odídu znova naraz o {@8} minút, teda o {@9}:{@10}.": "On cherche le plus petit multiple commun : ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Les lignes repartiront ensemble dans {@8} minutes, donc à {@9}:{@10}.",
  "Hľadáme číslo, ktoré vynásobené samo sebou dá {@0}: $a = {@1}\\,\\text{cm}$. Obvod: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.": "On cherche le nombre qui, multiplié par lui-même, donne {@0} : $a = {@1}\\,\\text{cm}$. Périmètre : $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.",
  "Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.": "Seul le triangle équilatéral a 3 axes. Un triangle isocèle n'a que deux côtés égaux.",
  "Je menší ako 90°, preto je ostrý.": "Il est plus petit que 90°, il est donc aigu.",
  "Je párne a ciferný súčet {@0} je deliteľný 3.": "Il est pair et la somme de ses chiffres, {@0}, est divisible par 3.",
  "Je párne a ciferný súčet {@0} nie je deliteľný 3.": "Il est pair, mais la somme de ses chiffres, {@0}, n'est pas divisible par 3.",
  "Je veľké tlačené písmeno <strong style=\"font-size:1.6em\">{@0}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?": "La lettre majuscule d'imprimerie <strong style=\"font-size:1.6em\">{@0}</strong> (sous sa forme simple, sans empattements) a-t-elle un axe de symétrie ?",
  "Je väčší ako 90° a menší ako 180°, preto je tupý.": "Il est plus grand que 90° et plus petit que 180°, il est donc obtus.",
  "Je číslo {@0} deliteľné číslom {@1}?": "Le nombre {@0} est-il divisible par {@1} ?",
  "Jeden kúsok bude merať {@0} cm.": "Un morceau mesurera {@0} cm.",
  "Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.": "Un degré a 60 minutes, pas 100 – divise le nombre de minutes par soixante.",
  "Jeden stupeň má 60 minút, nie 100.": "Un degré a 60 minutes, pas 100.",
  "Jeden stupeň má 60 minút.": "Un degré a 60 minutes.",
  "Kontrola: NSD · nsn = {@0} · {@1}.": "Contrôle : PGCD · PPCM = {@0} · {@1}.",
  "Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.": "Le parallélogramme n'a aucun axe de symétrie. Plié selon n'importe quelle droite, il ne se superpose pas à lui-même.",
  "Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.": "Le losange a 2 axes de symétrie : ses deux diagonales.",
  "Koľko celých stupňov je v ${@0}'$?": "Combien de degrés entiers y a-t-il dans ${@0}'$ ?",
  "Koľko deliteľov má číslo {@0}?": "Combien de diviseurs a le nombre {@0} ?",
  "Koľko desatinných miest majú činitele ${@0}$ a ${@1}$ spolu?": "Combien de décimales ont en tout les facteurs ${@0}$ et ${@1}$ ?",
  "Koľko je $\\frac{1}{{@0}}$ z čísla {@1}?": "Combien font $\\frac{1}{{@0}}$ de {@1} ?",
  "Koľko je $\\frac{{@0}}{{@1}}$ z čísla {@2}?": "Combien font $\\frac{{@0}}{{@1}}$ de {@2} ?",
  "Koľko je polovica obvodu, teda $a + b$ (v cm)?": "Combien fait la moitié du périmètre, c'est-à-dire $a + b$ (en cm) ?",
  "Koľko minút je ${@0}$?": "Combien de minutes font ${@0}$ ?",
  "Koľko minút je ${@0}^\\circ$?": "Combien de minutes font ${@0}^\\circ$ ?",
  "Koľko minút zostane?": "Combien de minutes reste-t-il ?",
  "Koľko osí súmernosti má {@0}?": "Combien d'axes de symétrie possède cette figure ({@0}) ?",
  "Koľko riadkov je bod A vzdialený od osi?": "À combien de lignes de l'axe se trouve le point A ?",
  "Koľko stupňov majú spolu oba uhly pri základni?": "Combien de degrés mesurent ensemble les deux angles à la base ?",
  "Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?": "Combien de degrés mesurent ensemble les angles $\\alpha$ et $\\beta$ ?",
  "Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?": "Combien de degrés reste-t-il après la soustraction (n'oublie pas le degré emprunté) ?",
  "Koľko stupňov zostáva do súčtu uhlov v trojuholníku?": "Combien de degrés manque-t-il pour atteindre la somme des angles du triangle ?",
  "Koľko stĺpcov je bod A vzdialený od osi?": "À combien de colonnes de l'axe se trouve le point A ?",
  "Koľkokrát sa 60 zmestí do počtu minút?": "Combien de fois 60 rentre-t-il dans le nombre de minutes ?",
  "Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.": "Le disque a une infinité d'axes de symétrie : toutes les droites qui passent par son centre.",
  "Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy": "Disques partagés en parts : une moitié, trois quarts, trois huitièmes",
  "Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.": "Tu as bien simplifié, mais la fraction n'est pas encore irréductible – on peut encore diviser le numérateur et le dénominateur par un même nombre.",
  "Ktorá číslica stojí v čísle ${@0}$ hneď za miestom {@1}?": "Quel chiffre se trouve dans le nombre ${@0}$ juste après le rang des {@1} ?",
  "Ktoré číslo krát samo sebou dá obsah? To je strana.": "Quel nombre multiplié par lui-même donne l'aire ? C'est le côté.",
  "Ktoré číslo vynásobené samo sebou dá {@0}?": "Quel nombre multiplié par lui-même donne {@0} ?",
  "Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo ${@0}$ bolo deliteľné {@1}?": "Quel est le plus petit chiffre à écrire à la place de $\\square$ pour que le nombre ${@0}$ soit divisible par {@1} ?",
  "Ktorú najmenšiu číslicu treba pripočítať k {@0}, aby bol súčet deliteľný {@1}?": "Quel est le plus petit chiffre à ajouter à {@0} pour que la somme soit divisible par {@1} ?",
  "Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.": "On pourrait bien couper des morceaux de cette longueur sans reste, mais ce ne sont pas les plus longs possible.",
  "Medzi susednými plošnými jednotkami je prevodový vzťah 100.": "Entre deux unités d'aire voisines, le rapport est 100.",
  "Meranie uhla uhlomerom: uhol 50 stupňov": "Mesure d'un angle avec un rapporteur : un angle de 50 degrés",
  "Minút je málo, preto zameníme 1 stupeň: ${@0} = {@1}$. Potom ${@2} - {@3} = {@4}$ a ${@5} - {@6} = {@7}$, výsledok je ${@8}$.": "Il n'y a pas assez de minutes, on échange donc 1 degré : ${@0} = {@1}$. Ensuite ${@2} - {@3} = {@4}$ et ${@5} - {@6} = {@7}$, le résultat est ${@8}$.",
  "Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?": "Il n'y a pas assez de minutes : échange 1 degré contre 60 minutes. Combien de minutes aura alors le premier angle ?",
  "Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.": "Il ne peut pas y avoir 60 minutes ou plus. Échange 60 minutes contre 1 degré.",
  "Má 180°, ramená tvoria priamku, je priamy.": "Il mesure 180°, ses côtés forment une droite, il est plat.",
  "Má presne 90°, je pravý.": "Il mesure exactement 90°, il est droit.",
  "NSD; nsn": "PGCD; PPCM",
  "Na deliteľnosť 6 treba oboje.": "Pour la divisibilité par 6, il faut les deux.",
  "Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.": "Sur la droite graduée, le plus grand nombre est à droite. Tout nombre négatif est plus petit que zéro et que tout nombre positif.",
  "Na číselnej osi leží číslo {@0} viac vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "Sur la droite graduée, le nombre {@0} est plus à droite, il est plus grand. Donc ${@1} {@2} {@3}$.",
  "Najnižšia nočná teplota bola {@0} °C, najvyššia denná {@1} °C. O koľko stupňov bolo cez deň teplejšie?": "La température la plus basse de la nuit était {@0} °C, la plus haute de la journée {@1} °C. De combien de degrés faisait-il plus chaud dans la journée ?",
  "Najprv jedna časť: ${@0} : {@1} = {@2}$. Potom {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.": "D'abord une part : ${@0} : {@1} = {@2}$. Ensuite {@3} {@4} : ${@5}\\cdot {@6} = {@7}$.",
  "Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).": "Calcule d'abord le côté à partir du périmètre (le carré a 4 côtés égaux).",
  "Najväčší spoločný deliteľ čísel {@0} a {@1} je {@2}. Krátime ním: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.": "Le plus grand diviseur commun de {@0} et {@1} est {@2}. On simplifie par ce nombre : $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.",
  "Nezabudni, že deliteľom je vždy aj 1 a samotné číslo {@0}.": "N'oublie pas que 1 et le nombre {@0} lui-même sont toujours des diviseurs.",
  "Nie je párne a ciferný súčet {@0} je deliteľný 3.": "Il n'est pas pair, et la somme de ses chiffres, {@0}, est divisible par 3.",
  "Nie je párne a ciferný súčet {@0} nie je deliteľný 3.": "Il n'est pas pair, et la somme de ses chiffres, {@0}, n'est pas divisible par 3.",
  "Nie. Písmeno {@0} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.": "Non. La lettre {@0} n'a ni axe de symétrie vertical ni axe horizontal : une fois pliée, les moitiés ne se superposent pas.",
  "Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.": "Trouve le plus grand nombre qui divise à la fois le numérateur et le dénominateur.",
  "Násobíme bez čiarok: ${@0}\\cdot {@1} = {@2}$. Činitele majú spolu {@3} {@4}, preto ${@5}\\cdot {@6} = {@7}$.": "On multiplie sans les virgules : ${@0}\\cdot {@1} = {@2}$. Les facteurs ont en tout {@3} {@4}, donc ${@5}\\cdot {@6} = {@7}$.",
  "O koľko stupňov bolo cez deň teplejšie?": "De combien de degrés faisait-il plus chaud dans la journée ?",
  "O koľko stupňov stúpne teplota z 0 °C na {@0} °C?": "De combien de degrés la température monte-t-elle de 0 °C à {@0} °C ?",
  "O koľko stupňov stúpne teplota z {@0} °C na 0 °C?": "De combien de degrés la température monte-t-elle de {@0} °C à 0 °C ?",
  "Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.": "Un rectangle (qui n'est pas un carré) a 2 axes de symétrie, qui relient les milieux des côtés opposés. Les diagonales ne sont pas des axes.",
  "Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²": "Rectangle de 5 cm sur 3 cm partagé en carrés de 1 cm²",
  "Obdĺžnik má obsah ${@0}\\,\\text{cm}^2$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Un rectangle a une aire de ${@0}\\,\\text{cm}^2$ et un côté de ${@1}\\,\\text{cm}$. Quelle est la longueur de l'autre côté (en cm) ?",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².": "Un rectangle a des côtés $a = {@0}\\,\\text{cm}$ et $b = {@1}\\,\\text{cm}$. Calcule son aire en cm².",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.": "Un rectangle a des côtés $a = {@0}\\,\\text{cm}$ et $b = {@1}\\,\\text{cm}$. Calcule son périmètre en cm.",
  "Obe čísla sú deliteľné {@0}, teda $D({@1}, {@2}) = {@3} &gt; 1$. Sú súdeliteľné.": "Les deux nombres sont divisibles par {@0}, donc $D({@1}, {@2}) = {@3} &gt; 1$. Ils ne sont pas premiers entre eux.",
  "Obsah je súčin strán, druhú stranu teda dostaneš delením.": "L'aire est le produit des côtés, tu obtiens donc l'autre côté par une division.",
  "Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.": "L'aire est le produit des côtés, tu obtiens donc l'autre côté par une division, pas par une soustraction.",
  "Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.": "On ne divise pas l'aire par quatre comme le périmètre. Le côté est le nombre qui, multiplié par lui-même, donne l'aire.",
  "Obsah obdĺžnika: S = a · b.": "Aire du rectangle : S = a · b.",
  "Obsah štvorca je strana krát strana.": "L'aire du carré, c'est côté fois côté.",
  "Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.": "Le périmètre n'est pas le côté du carré. Divise-le d'abord par quatre – tu obtiens le côté.",
  "Obvod obdĺžnika: o = 2 · (a + b).": "Périmètre du rectangle : o = 2 · (a + b).",
  "Ochladenie znamená odčítať.": "Un refroidissement veut dire soustraire.",
  "Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.": "Tu as soustrait du périmètre les deux côtés de longueur a. Il te reste deux côtés b – divise encore le résultat par deux.",
  "Od teploty {@0} °C odčítavaš zápornú teplotu {@1} °C. Odčítať záporné číslo znamená pripočítať opačné.": "De la température {@0} °C, tu soustrais une température négative {@1} °C. Soustraire un nombre négatif, c'est ajouter son opposé.",
  "Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.": "Soustrais la température la plus basse de la plus haute. Soustraire un nombre négatif, c'est ajouter son opposé.",
  "Odčítaj minúty.": "Soustrais les minutes.",
  "Odčítaj stupne.": "Soustrais les degrés.",
  "Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.": "Tu soustrais un nombre positif – sur la droite graduée, tu te déplaces vers la gauche.",
  "Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.": "Soustraire un nombre négatif, c'est ajouter son opposé : moins et moins donnent plus.",
  "Odčítať záporné číslo znamená pripočítať opačné: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.": "Soustraire un nombre négatif, c'est ajouter son opposé : ${@0} - ({@1}) = {@2} + {@3} = {@4}$.",
  "Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.": "Soustraire un nombre, c'est la même chose qu'ajouter son opposé. Aide-toi de la droite graduée.",
  "Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.": "En plus des droites passant par les milieux des côtés opposés, les diagonales du carré sont aussi des axes.",
  "Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k {@0} je to {@1}.": "L'opposé est à la même distance de zéro sur la droite, mais de l'autre côté : pour {@0}, c'est {@1}.",
  "Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.": "L'opposé est à la même distance de zéro, mais a le signe contraire.",
  "Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku {@0}. Bod $A$ leží v riadku {@1}. V ktorom riadku leží jeho obraz $A'$?": "L'axe de symétrie $o$ (en pointillés) est une droite horizontale sur la ligne {@0}. Le point $A$ est sur la ligne {@1}. Sur quelle ligne se trouve son image $A'$ ?",
  "Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci {@0}. Bod $A$ leží v stĺpci {@1}. V ktorom stĺpci leží jeho obraz $A'$?": "L'axe de symétrie $o$ (en pointillés) est une droite verticale dans la colonne {@0}. Le point $A$ est dans la colonne {@1}. Dans quelle colonne se trouve son image $A'$ ?",
  "Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.": "Un axe de symétrie passe par chaque sommet du triangle équilatéral, pas seulement par un seul.",
  "Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.": "Un triangle acutangle a ses trois angles plus petits que 90°. N'oublie pas de calculer aussi le troisième angle.",
  "Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.": "Un angle aigu est plus petit qu'un angle droit, donc plus petit que 90°.",
  "Ostrý, pravý, tupý a priamy uhol": "Angle aigu, droit, obtus et plat",
  "Oteplenie znamená pripočítať.": "Un réchauffement veut dire ajouter.",
  "Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.": "Vérifie l'inégalité triangulaire : la somme des deux côtés les plus courts doit être plus grande que le côté le plus long.",
  "Polovica obvodu je $a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}\\,\\text{cm}$.": "La moitié du périmètre est $a + b = {@0} : 2 = {@1}$, donc $b = {@2} - {@3} = {@4}\\,\\text{cm}$.",
  "Polovica obvodu je súčet dvoch susedných strán.": "La moitié du périmètre est la somme de deux côtés consécutifs.",
  "Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).": "Compare l'angle avec un angle droit (90°, le coin d'un cahier) et avec un angle plat (180°).",
  "Posledná číslica je {@0}, je to 0 alebo 5.": "Le dernier chiffre est {@0}, c'est 0 ou 5.",
  "Posledná číslica je {@0}, je to 0.": "Le dernier chiffre est {@0}, c'est 0.",
  "Posledná číslica je {@0}, nie je to 0 ani 5.": "Le dernier chiffre est {@0}, ce n'est ni 0 ni 5.",
  "Posledná číslica je {@0}, nie je to 0.": "Le dernier chiffre est {@0}, ce n'est pas 0.",
  "Posunul si čiarku opačným smerom. Pri delení číslom {@0} sa číslo zmenší.": "Tu as déplacé la virgule dans le mauvais sens. Quand on divise par {@0}, le nombre devient plus petit.",
  "Posunul si čiarku opačným smerom. Pri násobení číslom {@0} sa číslo zväčší.": "Tu as déplacé la virgule dans le mauvais sens. Quand on multiplie par {@0}, le nombre devient plus grand.",
  "Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).": "Utilise le critère de divisibilité du nombre donné (dernier chiffre, somme des chiffres ou nombre formé par les deux derniers chiffres).",
  "Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Regarde le premier chiffre après le rang auquel tu arrondis : 0 – 4 vers le bas, 5 – 9 vers le haut.",
  "Pozri sa pozorne – obe čísla sú rovnaké.": "Regarde bien – les deux nombres sont égaux.",
  "Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.": "Regarde si les trois côtés n'ont pas la même longueur – un tel triangle a un nom plus précis.",
  "Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.": "Le nombre de zéros dans 10, 100 ou 1 000 indique de combien de rangs se déplace la virgule.",
  "Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.": "Calcule séparément les degrés et les minutes. 60 minutes font 1 degré.",
  "Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.": "Tu as emprunté 1 degré pour les minutes, mais tu n'as pas diminué le nombre de degrés.",
  "Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.": "Un triangle rectangle a un angle d'exactement 90°. Calcule le troisième angle et vérifie.",
  "Pravý uhol má presne 90° – ako roh zošita.": "Un angle droit mesure exactement 90° – comme le coin d'un cahier.",
  "Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.": "Imagine un miroir posé verticalement ou horizontalement au milieu de la lettre.",
  "Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?": "Imagine que tu plies la figure le long d'une droite. De combien de façons les deux moitiés se superposent-elles exactement ?",
  "Premeň: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$": "Convertis : ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$",
  "Preto nie, číslo {@0} nie je deliteľné {@1}.": "Donc non, le nombre {@0} n'est pas divisible par {@1}.",
  "Preto áno, číslo {@0} je deliteľné {@1}.": "Donc oui, le nombre {@0} est divisible par {@1}.",
  "Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.": "Mets les deux fractions au même dénominateur et compare les numérateurs.",
  "Pri delení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doľava: {@3}.": "Quand on divise par {@0}, on déplace la virgule de {@1} {@2} vers la gauche : {@3}.",
  "Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.": "Pour la divisibilité par 10, c'est le dernier chiffre qui décide – ce doit être 0.",
  "Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.": "Pour la divisibilité par 2, seul le dernier chiffre décide – il doit être pair.",
  "Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.": "Pour la divisibilité par 3, ce n'est pas le dernier chiffre qui décide, mais la somme des chiffres. Additionne tous les chiffres.",
  "Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.": "Pour la divisibilité par 4, il ne suffit pas que le nombre soit pair. C'est le nombre formé par les deux derniers chiffres qui décide.",
  "Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.": "Pour la divisibilité par 5, c'est le dernier chiffre qui décide – ce doit être 0 ou 5.",
  "Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.": "Pour la divisibilité par 9, c'est la somme des chiffres qui décide – elle doit être divisible par 9, la divisibilité par 3 ne suffit pas.",
  "Pri násobení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doprava: {@3}.": "Quand on multiplie par {@0}, on déplace la virgule de {@1} {@2} vers la droite : {@3}.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.": "Pour les unités d'aire, le rapport n'est pas 10, mais $10\\cdot 10 = 100$ : $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.": "Pour les unités d'aire, le rapport n'est pas 10, mais $10\\cdot 10 = 100$ : $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.",
  "Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.": "Quand tu empruntes, tu échanges 1 degré contre 60 minutes, pas contre 100.",
  "Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.": "Pour les nombres négatifs, le plus grand est celui qui est le plus proche de zéro. Ce n'est pas le plus grand chiffre qui décide.",
  "Priamy uhol má 180°, jeho ramená ležia na jednej priamke.": "Un angle plat mesure 180°, ses côtés sont sur une même droite.",
  "Pripočítaj ešte ${@0}'$.": "Ajoute encore ${@0}'$.",
  "Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.": "Tu ajoutes un nombre positif – sur la droite graduée, tu te déplaces vers la droite.",
  "Pripočítať záporné číslo znamená odčítať: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.": "Ajouter un nombre négatif, c'est soustraire : ${@0} + ({@1}) = {@2} - {@3} = {@4}$.",
  "Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.": "Ajouter un nombre négatif, c'est se déplacer vers la gauche sur la droite graduée, donc soustraire.",
  "Prvočíslo má iba dva delitele. Skús, či sa {@0} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.": "Un nombre premier a seulement deux diviseurs. Essaie de voir si {@0} ne se divise pas sans reste par l'un des nombres 2, 3, 5, 7.",
  "Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?": "Un nombre premier a exactement deux diviseurs et un nombre composé plus de deux. Combien de diviseurs a le nombre 1 ?",
  "Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.": "Un triangle isocèle (non équilatéral) a 1 axe de symétrie : il passe par le sommet principal et par le milieu de la base.",
  "Rovnoramenný trojuholník má dve strany rovnako dlhé.": "Un triangle isocèle a deux côtés de même longueur.",
  "Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.": "Un triangle équilatéral a 3 axes de symétrie, chacun passe par un sommet et par le milieu du côté opposé.",
  "Rovnostranný trojuholník má všetky tri strany rovnako dlhé.": "Un triangle équilatéral a ses trois côtés de même longueur.",
  "Rozdiel teplôt: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Cez deň bolo o {@5} °C teplejšie.": "Différence de températures : ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Dans la journée, il faisait {@5} °C de plus.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je 5 alebo viac, zaokrúhlime nahor: ${@1} \\doteq {@2}$.": "C'est le chiffre juste après ce rang qui décide, c'est {@0}. Il vaut 5 ou plus, on arrondit vers le haut : ${@1} \\doteq {@2}$.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je menšia ako 5, zaokrúhlime nadol: ${@1} \\doteq {@2}$.": "C'est le chiffre juste après ce rang qui décide, c'est {@0}. Il est plus petit que 5, on arrondit vers le bas : ${@1} \\doteq {@2}$.",
  "Rozklad nie je dokončený: {@0} nie je prvočíslo. Pokračuj v delení prvočíslami.": "La décomposition n'est pas terminée : {@0} n'est pas un nombre premier. Continue à diviser par des nombres premiers.",
  "Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).": "Décompose les deux nombres en facteurs premiers. Le PGCD est formé des facteurs premiers communs, le PPCM de tous (avec le plus grand nombre d'apparitions).",
  "Rozlož čísla {@0} a {@1} na prvočinitele. Aký je ich najväčší spoločný deliteľ?": "Décompose les nombres {@0} et {@1} en facteurs premiers. Quel est leur plus grand diviseur commun ?",
  "Rozlož číslo {@0} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).": "Décompose le nombre {@0} en produit de nombres premiers. Écris les facteurs premiers du plus petit au plus grand, séparés par un point-virgule (même ceux qui se répètent).",
  "Rozšírime na menovateľ {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Alebo vydelíme ${@6} : {@7}$.)": "On transforme au dénominateur {@0} : $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Ou on divise ${@6} : {@7}$.)",
  "Ráno bolo {@0} °C. Do večera sa ochladilo o {@1} °C. Aká teplota bola večer (v °C)?": "Le matin, il faisait {@0} °C. Le soir, la température avait baissé de {@1} °C. Quelle température faisait-il le soir (en °C) ?",
  "Ráno bolo {@0} °C. Do večera sa oteplilo o {@1} °C. Aká teplota bola večer (v °C)?": "Le matin, il faisait {@0} °C. Le soir, la température avait monté de {@1} °C. Quelle température faisait-il le soir (en °C) ?",
  "Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.": "Un triangle quelconque a ses trois côtés de longueurs différentes. Compare encore une fois les longueurs.",
  "Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.": "Un triangle quelconque n'a aucun axe de symétrie, il n'a pas deux côtés de même longueur.",
  "S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.": "Avec ce chiffre, le nombre sera bien divisible, mais tu cherches le plus petit chiffre qui convient.",
  "Skráť zlomok $\\frac{{@0}}{{@1}}$ na základný tvar. Odpoveď zapíš ako a/b.": "Simplifie la fraction $\\frac{{@0}}{{@1}}$ pour la rendre irréductible. Écris la réponse sous la forme a/b.",
  "Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.": "Essaie de trouver un diviseur commun plus grand que 1 – regarde par exemple si les deux nombres sont divisibles par 2, 3, 5 ou 7.",
  "Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.": "Essaie de voir si le nombre se divise sans reste par 2, 3, 5 ou 7.",
  "Spoločný menovateľ je {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ a $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Keďže ${@9} {@10} {@11}$, platí $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.": "Le dénominateur commun est {@0} : $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ et $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Comme ${@9} {@10} {@11}$, on a $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.",
  "Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Compte à combien de lignes de l'axe se trouve le point A, et compte le même nombre de l'autre côté.",
  "Spočítaj, koľko strán má rovnakú dĺžku.": "Compte combien de côtés ont la même longueur.",
  "Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Compte à combien de colonnes de l'axe se trouve le point A, et compte le même nombre de l'autre côté.",
  "Strana: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Obsah: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.": "Côté : $a = {@0} : 4 = {@1}\\,\\text{cm}$. Aire : $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.",
  "Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.": "Tu as multiplié le côté par deux. L'aire du carré, c'est côté fois côté, pas côté fois 2.",
  "Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Tu as additionné les côtés. L'aire du rectangle est le produit des longueurs de ses côtés.",
  "Stromy rozkladu čísel 60 a 84 na prvočinitele": "Arbres de décomposition en facteurs premiers des nombres 60 et 84",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Keďže ${@6}' = 1^\\circ\\,{@7}'$, výsledok je ${@8}$.": "Degrés : ${@0} + {@1} = {@2}$, minutes : ${@3} + {@4} = {@5}$. Comme ${@6}' = 1^\\circ\\,{@7}'$, le résultat est ${@8}$.",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Výsledok je ${@6}$.": "Degrés : ${@0} + {@1} = {@2}$, minutes : ${@3} + {@4} = {@5}$. Le résultat est ${@6}$.",
  "Stupne: ${@0} - {@1} = {@2}$, minúty: ${@3} - {@4} = {@5}$. Výsledok je ${@6}$.": "Degrés : ${@0} - {@1} = {@2}$, minutes : ${@3} - {@4} = {@5}$. Le résultat est ${@6}$.",
  "Sú čísla {@0} a {@1} súdeliteľné, alebo nesúdeliteľné?": "Les nombres {@0} et {@1} sont-ils premiers entre eux ou non ?",
  "Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.": "La somme est égale au côté le plus long, les côtés seraient sur une même droite. On ne peut pas construire le triangle.",
  "Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.": "La somme des angles vaut $180^\\circ$ : $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.",
  "Súčet uhlov v trojuholníku je 180°, nie 360°.": "La somme des angles d'un triangle vaut 180°, pas 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.": "La somme des angles intérieurs d'un triangle vaut 180°, pas 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°.": "La somme des angles intérieurs d'un triangle vaut 180°.",
  "Súčet známych číslic je {@0}. Ciferný súčet musí byť deliteľný {@1}: najmenšia vhodná číslica je {@2}, lebo ${@3} + {@4} = {@5}$.": "La somme des chiffres connus est {@0}. La somme des chiffres doit être divisible par {@1} : le plus petit chiffre qui convient est {@2}, car ${@3} + {@4} = {@5}$.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.": "Le produit {@0}·{@1} est un multiple commun, mais pas le plus petit. Les lignes se retrouvent plus tôt.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.": "Le produit {@0}·{@1} est un multiple commun, mais pas le plus petit. Pour le PPCM, prends chaque facteur premier autant de fois qu'il apparaît dans le nombre où il apparaît le plus.",
  "Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.": "Additionne les deux côtés les plus courts et compare leur somme au côté le plus long. Il suffit que la somme soit plus grande.",
  "Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.": "Additionne les deux côtés les plus courts et compare avec le côté le plus long. La somme doit être plus grande.",
  "Sčítaj minúty.": "Additionne les minutes.",
  "Sčítaj stupne.": "Additionne les degrés.",
  "Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný {@0}.": "Additionne les chiffres connus. Ajoute à la somme le plus petit chiffre possible pour que la somme soit divisible par {@0}.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.": "Tu as additionné seulement deux côtés. Le rectangle a quatre côtés : multiplie encore par deux la somme des côtés consécutifs.",
  "Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.": "Ainsi, la somme des chiffres sera divisible par 3, mais pour la divisibilité par 9, elle doit être divisible par 9.",
  "Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.": "C'est la mesure de l'angle adjacent supplémentaire. Les angles opposés par le sommet sont face à face et ont la même mesure.",
  "Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.": "C'est le plus petit multiple commun. Le morceau doit être plus court que les rubans – tu cherches le plus grand diviseur commun.",
  "Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.": "C'est le plus grand diviseur commun. L'heure du départ commun doit être un multiple des deux intervalles – tu cherches le plus petit multiple commun.",
  "Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.": "C'est le périmètre du carré. L'aire se calcule en faisant côté fois côté.",
  "Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.": "Ça, c'est le périmètre. L'aire du rectangle se calcule comme le produit des longueurs de ses côtés.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obsah.": "Ça, c'est le côté du carré. Calcule encore l'aire à partir de lui.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obvod.": "Ça, c'est le côté du carré. Calcule encore le périmètre à partir de lui.",
  "Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.": "Ça, c'est la distance du point A à l'axe. L'image est à la même distance de l'autre côté de l'axe – trouve son numéro.",
  "Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.": "C'est la mesure des deux angles à la base ensemble. Ils sont égaux : partage encore le résultat en deux.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je pravý, trojuholník je pravouhlý.": "Troisième angle : $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Le plus grand angle mesure ${@3}^\\circ$, il est droit, le triangle est rectangle.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je tupý, trojuholník je tupouhlý.": "Troisième angle : $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Le plus grand angle mesure ${@3}^\\circ$, il est obtus, le triangle est obtusangle.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.": "Troisième angle : $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Le plus grand angle mesure ${@3}^\\circ$, tous les angles sont aigus, le triangle est acutangle.",
  "Trojuholník má dva vnútorné uhly s veľkosťou ${@0}^\\circ$ a ${@1}^\\circ$. Aký je to trojuholník podľa uhlov?": "Un triangle a deux angles intérieurs de ${@0}^\\circ$ et ${@1}^\\circ$. Quel type de triangle est-ce selon les angles ?",
  "Trojuholník má strany {@0} cm, {@1} cm a {@2} cm. Aký je podľa strán?": "Un triangle a des côtés de {@0} cm, {@1} cm et {@2} cm. Quel type de triangle est-ce selon les côtés ?",
  "Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.": "Un triangle obtusangle a un angle plus grand que 90°. Calcule le troisième angle et vérifie.",
  "Tupý uhol je väčší ako 90° a zároveň menší ako 180°.": "Un angle obtus est plus grand que 90° et en même temps plus petit que 180°.",
  "Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.": "Seul le nombre 1 a cette propriété. Tout entier naturel plus grand est soit un nombre premier, soit un nombre composé.",
  "Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.": "Les diagonales d'un rectangle ne sont pas des axes de symétrie – en pliant le long d'une diagonale, les moitiés ne se superposent pas.",
  "Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.": "Les angles à la base d'un triangle isocèle sont égaux et les trois angles font ensemble 180°.",
  "Uhly pri základni sú zhodné: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.": "Les angles à la base sont égaux : $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?": "L'angle $\\alpha$ mesure ${@0}^\\circ$. Combien mesure son angle adjacent supplémentaire (en degrés) ?",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?": "L'angle $\\alpha$ mesure ${@0}^\\circ$. Combien mesure l'angle qui lui est opposé par le sommet (en degrés) ?",
  "Uhol má {@0}°.": "L'angle mesure {@0}°.",
  "Umiestni desatinnú čiarku: koľko je ${@0}\\cdot {@1}$?": "Place la virgule : combien font ${@0}\\cdot {@1}$ ?",
  "Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel {@0} a {@1}. Zapíš ich v poradí NSD; nsn.": "Détermine le plus grand diviseur commun et le plus petit multiple commun de {@0} et {@1}. Écris-les dans l'ordre PGCD; PPCM.",
  "V ktorom riadku leží obraz $A'$?": "Sur quelle ligne se trouve l'image $A'$ ?",
  "V ktorom stĺpci leží obraz $A'$?": "Dans quelle colonne se trouve l'image $A'$ ?",
  "V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť ${@0}^\\circ$. Aký veľký je každý z uhlov pri základni?": "Dans un triangle isocèle, l'angle opposé à la base (au sommet principal) mesure ${@0}^\\circ$. Combien mesure chacun des angles à la base ?",
  "V trojuholníku $ABC$ je $\\alpha = {@0}^\\circ$ a $\\beta = {@1}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?": "Dans le triangle $ABC$, $\\alpha = {@0}^\\circ$ et $\\beta = {@1}^\\circ$. Combien mesure l'angle $\\gamma$ (en degrés) ?",
  "Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.": "Des angles adjacents supplémentaires forment ensemble un angle plat, des angles opposés par le sommet sont égaux.",
  "Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.": "Des angles adjacents supplémentaires font ensemble $180^\\circ$ : $180^\\circ - {@0}^\\circ = {@1}^\\circ$.",
  "Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).": "Des angles adjacents supplémentaires ne se complètent pas en un angle droit, mais en un angle plat (180°).",
  "Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.": "Des angles adjacents supplémentaires forment ensemble un angle plat, donc 180°, pas 360°.",
  "Vrcholové uhly sú rovnako veľké, preto má tiež ${@0}^\\circ$.": "Des angles opposés par le sommet ont la même mesure, il mesure donc aussi ${@0}^\\circ$.",
  "Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.": "Divise le nombre de minutes par 60. Le quotient donne les degrés, le reste les minutes.",
  "Vydeľ čitateľa aj menovateľa číslom {@0}. Aký zlomok dostaneš (a/b)?": "Divise le numérateur et le dénominateur par {@0}. Quelle fraction obtiens-tu (a/b) ?",
  "Vyjadri ${@0}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.": "Exprime ${@0}'$ en degrés et minutes. Écris-le sous la forme degrés; minutes.",
  "Vynásob prvočinitele, ktoré sú v oboch rozkladoch.": "Multiplie les facteurs premiers qui sont dans les deux décompositions.",
  "Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.": "Multiplie les nombres sans les virgules, puis compte les décimales des deux facteurs.",
  "Vynásob čísla bez desatinných čiarok: ${@0}\\cdot {@1}$.": "Multiplie les nombres sans les virgules : ${@0}\\cdot {@1}$.",
  "Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Tu as multiplié les côtés – c'est l'aire. Le périmètre est la somme des longueurs des quatre côtés.",
  "Vypočítaj ${@0} {@1} {@2}$. Výsledok zapíš v tvare stupne; minúty.": "Calcule ${@0} {@1} {@2}$. Écris le résultat sous la forme degrés; minutes.",
  "Vypočítaj ${@0}\\cdot {@1}$.": "Calcule ${@0}\\cdot {@1}$.",
  "Vypočítaj $|{@0}| + |{@1}|$.": "Calcule $|{@0}| + |{@1}|$.",
  "Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom {@0}.": "Tu as calculé seulement une part. Multiplie-la encore par le numérateur {@0}.",
  "Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.": "Le plus grand nombre est celui qui est le plus à droite sur la droite graduée. Attention : −2 est plus grand que −9.",
  "Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.": "Tous les côtés ont la même longueur, le triangle est équilatéral.",
  "Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.": "Les trois côtés ont des longueurs différentes, le triangle est quelconque.",
  "Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?": "À la gare routière, la ligne A part toutes les {@0} minutes et la ligne B toutes les {@1} minutes. À 7:00, les deux lignes sont parties en même temps. Dans combien de minutes repartiront-elles ensemble ?",
  "Z menšej jednotky na väčšiu delíme číslom 100.": "D'une unité plus petite vers une plus grande, on divise par 100.",
  "Za týmto miestom je číslica {@0}. Zaokrúhli ${@1}$ na {@2}.": "Après ce rang, il y a le chiffre {@0}. Arrondis ${@1}$ aux {@2}.",
  "Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Tu as inversé le numérateur et le dénominateur : divise le nombre par le dénominateur et multiplie le résultat par le numérateur.",
  "Zaokrúhlil si na iné miesto. Na {@0} znamená, že posledná ponechaná číslica stojí na mieste {@1}.": "Tu as arrondi à un autre rang. Arrondir aux {@0} veut dire que le dernier chiffre conservé est au rang des {@1}.",
  "Zapíš $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Écris $\\frac{{@0}}{{@1}}$ sous forme de nombre décimal.",
  "Zapíš výsledok v poradí NSD; nsn.": "Écris le résultat dans l'ordre PGCD; PPCM.",
  "Zapíš výsledok v tvare stupne; minúty.": "Écris le résultat sous la forme degrés; minutes.",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Écris la fraction $\\frac{{@0}}{{@1}}$ sous forme de nombre décimal.",
  "Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo {@0} si dopíš ako {@1}0.": "Tu as aligné les nombres à droite comme des nombres entiers. Les virgules doivent être l'une sous l'autre – écris le nombre {@0} sous la forme {@1}0.",
  "Zarovnáme desatinné čiarky pod seba a doplníme nuly: ${@0} {@1} {@2} = {@3}$.": "On aligne les virgules l'une sous l'autre et on complète par des zéros : ${@0} {@1} {@2} = {@3}$.",
  "Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.": "Cherche s'il existe un nombre plus grand que 1 qui divise les deux nombres.",
  "Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.": "Le trait de fraction n'est pas une virgule. Une fraction signifie une division : divise le numérateur par le dénominateur.",
  "Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.": "Les fractions ne sont pas égales. Mets-les au même dénominateur et compare les numérateurs.",
  "Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.": "Tu ne peux pas comparer des fractions de dénominateurs différents seulement par les numérateurs ou seulement par les dénominateurs. Mets-les au même dénominateur.",
  "Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.": "Transforme la fraction pour avoir 10, 100 ou 1 000 au dénominateur, ou divise le numérateur par le dénominateur.",
  "Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla {@0} – ak žiadny nie je, číslo nie je zložené.": "Un nombre composé a un autre diviseur que 1 et lui-même. Essaie de trouver un tel diviseur de {@0} – s'il n'y en a aucun, le nombre n'est pas composé.",
  "Zrkadlil si bod podľa stredu siete, nie podľa osi o.": "Tu as fait la symétrie du point par rapport au centre du quadrillage, pas par rapport à l'axe o.",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Aký je obsah záhrady v m²?": "Un jardin a la forme d'un rectangle de {@0} m sur {@1} m. Quelle est l'aire du jardin en m² ?",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Koľko metrov pletiva treba na jej oplotenie?": "Un jardin a la forme d'un rectangle de {@0} m sur {@1} m. Combien de mètres de grillage faut-il pour le clôturer ?",
  "ani prvočíslo, ani zložené": "ni premier, ni composé",
  "desatinné miesta": "décimales",
  "desatinné miesto": "décimale",
  "desatinných miest": "décimales",
  "desatín": "dixièmes",
  "jednotky (celé čísla)": "unités (nombres entiers)",
  "kladné": "positif",
  "kosodĺžnik (rovnobežník)": "parallélogramme",
  "kosoštvorec": "losange",
  "malé dieliky sú stotiny (0,01), veľké desatiny (0,1)": "les petites graduations sont les centièmes (0,01), les grandes les dixièmes (0,1)",
  "miesta": "rangs",
  "miesto": "rang",
  "napr. 2/3": "par ex. 2/3",
  "napr. 2; 2; 3": "par ex. 2; 2; 3",
  "nekonečne veľa": "une infinité",
  "nesúdeliteľné": "premiers entre eux",
  "nsn obsahuje všetky prvočinitele: $n({@0}, {@1}) = {@2} = {@3}$.": "Le PPCM contient tous les facteurs premiers : $n({@0}, {@1}) = {@2} = {@3}$.",
  "ostrouhlý": "acutangle",
  "ostrý (30°)": "aigu (30°)",
  "podľa strán": "selon les côtés",
  "podľa uhlov": "selon les angles",
  "pravouhlý": "rectangle",
  "pravý (90°)": "droit (90°)",
  "priamy": "plat",
  "priamy (180°)": "plat (180°)",
  "prvočíslo": "un nombre premier",
  "riadkov": "lignes",
  "rovnoramenný": "isocèle",
  "rovnoramenný trojuholník": "triangle isocèle",
  "rovnostranný": "équilatéral",
  "rovnostranný trojuholník": "triangle équilatéral",
  "rôznostranný": "quelconque",
  "rôznostranný trojuholník": "triangle quelconque",
  "stotiny": "centièmes",
  "stotín": "centièmes",
  "stred uhlomera = vrchol uhla": "centre du rapporteur = sommet de l'angle",
  "stupne; minúty": "degrés; minutes",
  "stĺpce": "colonnes",
  "stĺpcov": "colonnes",
  "stĺpec": "colonne",
  "súdeliteľné": "non premiers entre eux",
  "tupouhlý": "obtusangle",
  "tupý (135°)": "obtus (135°)",
  "zložené číslo": "un nombre composé",
  "záporné": "négatif",
  "Áno. Písmeno {@0} má vodorovnú os súmernosti.": "Oui. La lettre {@0} a un axe de symétrie horizontal.",
  "Áno. Písmeno {@0} má zvislú aj vodorovnú os súmernosti.": "Oui. La lettre {@0} a un axe de symétrie vertical et un axe horizontal.",
  "Áno. Písmeno {@0} má zvislú os súmernosti.": "Oui. La lettre {@0} a un axe de symétrie vertical.",
  "Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti": "Une figure et son image par une symétrie axiale sur un quadrillage",
  "Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.": "L'heure du départ commun doit être un multiple des deux intervalles. Cherche le plus petit.",
  "Číselná os od 2 do 3 s desatinami a stotinami": "Droite graduée de 2 à 3 avec les dixièmes et les centièmes",
  "Číselná os s celými číslami od −6 do 6": "Droite graduée avec les entiers de −6 à 6",
  "Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.": "Les nombres ne sont pas égaux. Cherche lequel est le plus à droite sur la droite graduée.",
  "Čísla od 1 do 60, prvočísla sú vyfarbené": "Les nombres de 1 à 60, les nombres premiers sont coloriés",
  "Číslica za týmto miestom je {@0}, teda 5 alebo viac – zaokrúhľuje sa nahor.": "Le chiffre après ce rang est {@0}, donc 5 ou plus – on arrondit vers le haut.",
  "Číslica za týmto miestom je {@0}, teda menej ako 5 – zaokrúhľuje sa nadol.": "Le chiffre après ce rang est {@0}, donc moins de 5 – on arrondit vers le bas.",
  "Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.": "Le nombre 1 a un seul diviseur (lui-même), il n'est donc ni premier ni composé.",
  "Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.": "Un nombre est divisible par 6 seulement s'il est divisible à la fois par 2 et par 3. Vérifie les deux conditions.",
  "Číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Divise le nombre par le dénominateur et multiplie le résultat par le numérateur.",
  "Číslo z posledných dvoch číslic je {@0}, je deliteľné 4.": "Le nombre formé par les deux derniers chiffres est {@0}, il est divisible par 4.",
  "Číslo z posledných dvoch číslic je {@0}, nie je deliteľné 4.": "Le nombre formé par les deux derniers chiffres est {@0}, il n'est pas divisible par 4.",
  "Číslo {@0} má iba dva delitele: 1 a {@1}. Je to prvočíslo.": "Le nombre {@0} a seulement deux diviseurs : 1 et {@1}. C'est un nombre premier.",
  "časti": "parts",
  "častí": "parts",
  "časť": "part",
  "Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.": "Le carré a 4 axes de symétrie : 2 relient les milieux des côtés opposés et 2 sont sur les diagonales.",
  "Štvorec má obsah ${@0}\\,\\text{cm}^2$. Aký je jeho obvod v cm?": "Un carré a une aire de ${@0}\\,\\text{cm}^2$. Quel est son périmètre en cm ?",
  "Štvorec má obvod ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Un carré a un périmètre de ${@0}\\,\\text{cm}$. Quelle est son aire en cm² ?",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Un carré a un côté de ${@0}\\,\\text{cm}$. Quelle est son aire en cm² ?",
  "štvorčeková sieť s osou a bodom A": "quadrillage avec un axe et le point A"
 }
});
