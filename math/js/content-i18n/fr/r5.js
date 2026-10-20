/* Français: preklad js/rocniky/r5.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/r5/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "r5-prirodzene": {
   "title": "Les entiers naturels et leurs propriétés",
   "summary": "Classes et rangs des grands nombres, comparaison, nombres pairs et impairs.",
   "theory": [
    "<p>Les <strong>entiers naturels</strong> sont $1, 2, 3, 4, \\dots$ – les nombres avec lesquels on compte des objets. Le plus petit entier naturel\n       est 1, le plus grand n'existe pas : à tout nombre, on peut ajouter 1 et obtenir son <strong>successeur</strong>.\n       Le nombre plus petit de 1 est son <strong>prédécesseur</strong>.</p>",
    "<p>On regroupe les chiffres d'un grand nombre en <strong>classes</strong> de trois en partant de la droite : unités, milliers, millions.\n       Dans chaque classe, il y a les centaines, les dizaines et les unités. La valeur d'un chiffre dépend de la place qu'il occupe.</p>",
    {
     "fig": "r5-triedy",
     "caption": "Dans le nombre $3\\,042\\,705$, le chiffre 4 vaut $40\\,000$, car il est au rang des dizaines de mille."
    },
    "<p>Les <strong>nombres pairs</strong> sont divisibles par deux et se terminent par 0, 2, 4, 6 ou 8. Les autres nombres sont\n       <strong>impairs</strong> – ils se terminent par 1, 3, 5, 7 ou 9. Seul le dernier chiffre décide de la parité.</p>"
   ],
   "examples": [
    {
     "task": "Avec les chiffres 5, 0, 8, 2 (chacun une seule fois), forme le plus grand et le plus petit nombre à quatre chiffres.",
     "steps": [
      "Le plus grand : on range les chiffres du plus grand au plus petit : $8\\,520$.",
      "Le plus petit : on les range du plus petit au plus grand, mais 0 ne peut pas être au début : $2\\,058$."
     ]
    },
    {
     "task": "Quels sont le successeur et le prédécesseur du nombre $499\\,999$ ?",
     "steps": [
      "Successeur : $499\\,999 + 1 = 500\\,000$.",
      "Prédécesseur : $499\\,999 - 1 = 499\\,998$."
     ]
    }
   ]
  },
  "r5-zaokruhlovanie": {
   "title": "Arrondir les nombres",
   "summary": "Arrondir à la dizaine, à la centaine et au millier, estimer un résultat.",
   "theory": [
    "<p>Pour <strong>arrondir</strong>, on remplace un nombre par le nombre « rond » le plus proche. On l'écrit avec le signe $\\doteq$\n       (on lit « est à peu près égal à ») : $3\\,467 \\doteq 3\\,470$ (à la dizaine).</p>",
    "<p><strong>Règle :</strong> on regarde le chiffre <em>juste à droite</em> du rang auquel on arrondit.\n       Si c'est 0, 1, 2, 3 ou 4, on arrondit <strong>par défaut</strong> (vers le bas). Si c'est 5, 6, 7, 8 ou 9, on arrondit <strong>par excès</strong> (vers le haut).\n       On remplace les chiffres de droite par des zéros.</p>",
    {
     "fig": "r5-zaokruhlovanie",
     "caption": "Déplace le nombre et observe de quelle dizaine (point vert) et de quelle centaine (arc) il est le plus proche."
    },
    "<p><strong>Estimation :</strong> avant un calcul exact, on peut arrondir les nombres et estimer le résultat.\n       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$. L'estimation nous aide à repérer une erreur de calcul.</p>"
   ],
   "examples": [
    {
     "task": "Arrondis le nombre $72\\,649$ à la centaine.",
     "steps": [
      "Au rang des centaines, il y a 6, juste à droite il y a 4.",
      "4 est plus petit que 5, on arrondit par défaut : les centaines restent 6.",
      "<strong>$72\\,649 \\doteq 72\\,600$</strong>"
     ]
    },
    {
     "task": "Arrondis le nombre $5\\,962$ à la dizaine.",
     "steps": [
      "Au rang des dizaines, il y a 6, à droite il y a 2 – on arrondit par défaut.",
      "<strong>$5\\,962 \\doteq 5\\,960$</strong>",
      "À la centaine, ce serait $6\\,000$, car après les centaines il y a 6."
     ]
    }
   ]
  },
  "r5-rimske": {
   "title": "Les chiffres romains",
   "summary": "Écrire de grands nombres et des années, règles de soustraction, conversions dans les deux sens.",
   "theory": [
    "<p>Chiffres romains : $\\text{I} = 1$, $\\text{V} = 5$, $\\text{X} = 10$, $\\text{L} = 50$, $\\text{C} = 100$,\n       $\\text{D} = 500$, $\\text{M} = 1\\,000$. Le plus grand nombre qu'on écrit habituellement avec eux est $3\\,999 = \\text{MMMCMXCIX}$.</p>",
    "<p><strong>Règles d'écriture :</strong></p>\n       <ol><li>On écrit les symboles du plus grand au plus petit et on additionne leurs valeurs : $\\text{MDCLX} = 1\\,660$.</li>\n       <li>Les symboles I, X, C, M peuvent se suivre au plus trois fois. V, L, D ne se répètent pas.</li>\n       <li>Un symbole plus petit placé devant un plus grand se soustrait. Seuls I, X ou C peuvent le faire, et seulement devant les deux symboles plus grands les plus proches.</li></ol>",
    {
     "fig": "r5-rimske",
     "caption": "Les six paires dans lesquelles on soustrait. Les autres paires (par exemple IL ou IC) sont incorrectes."
    },
    "<p>On <strong>convertit en chiffres romains</strong> rang par rang : milliers, centaines, dizaines, unités.\n       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$.</p>"
   ],
   "examples": [
    {
     "task": "Écris l'année $2\\,026$ en chiffres romains.",
     "steps": [
      "$2\\,026 = 2\\,000 + 20 + 6$.",
      "$2\\,000 = \\text{MM}$, $20 = \\text{XX}$, $6 = \\text{VI}$.",
      "<strong>$2\\,026 = \\text{MMXXVI}$</strong>"
     ]
    },
    {
     "task": "Quel nombre est $\\text{CDXLIX}$ ?",
     "steps": [
      "On découpe en groupes : $\\text{CD} = 400$, $\\text{XL} = 40$, $\\text{IX} = 9$.",
      "$400 + 40 + 9 = 449$.",
      "Attention : 49 ne s'écrit pas IL, mais XLIX.",
      "<strong>$\\text{CDXLIX} = 449$</strong>"
     ]
    }
   ]
  },
  "r5-operacie": {
   "title": "Les quatre opérations et leurs priorités",
   "summary": "Addition, soustraction, multiplication, division, parenthèses et calcul astucieux.",
   "theory": [
    "<p>Pour calculer une expression, on respecte les <strong>priorités des opérations</strong> : d'abord les parenthèses, puis la multiplication et la division\n       (de gauche à droite) et enfin l'addition et la soustraction (de gauche à droite).</p>",
    {
     "fig": "r5-poradie",
     "caption": "Priorités des opérations. Les opérations de même niveau se calculent de gauche à droite."
    },
    "<p><strong>Calcul astucieux :</strong> dans une addition ou une multiplication, on peut changer l'ordre des nombres et les regrouper autrement :\n       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$.\n       Développer une parenthèse aide aussi : $36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$.</p>",
    "<p><strong>Vocabulaire :</strong> terme + terme = somme, terme − terme = différence, facteur · facteur = produit,\n       dividende : diviseur = quotient. On trouve le terme inconnu avec l'opération inverse : si $\\square\\cdot 8 = 96$, alors $\\square = 96 : 8 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $120 - 6\\cdot(14 - 5)$.",
     "steps": [
      "Parenthèse : $14 - 5 = 9$.",
      "Multiplication : $6\\cdot 9 = 54$.",
      "Soustraction : $120 - 54 = 66$.",
      "<strong>Résultat : 66</strong>"
     ]
    },
    {
     "task": "Calcule astucieusement $5\\cdot 63\\cdot 20$.",
     "steps": [
      "On regroupe $5\\cdot 20 = 100$.",
      "$100\\cdot 63 = 6\\,300$.",
      "<strong>Résultat : $6\\,300$</strong>"
     ]
    }
   ]
  },
  "r5-delitelnost": {
   "title": "Multiples et diviseurs",
   "summary": "Ce qu'est un multiple et un diviseur d'un nombre, comment les trouver, et les critères de divisibilité par 2, 3, 5 et 10.",
   "theory": [
    "<p>On obtient les <strong>multiples</strong> d'un nombre en le multipliant par $1, 2, 3, \\dots$. Les multiples de 6 sont\n       $6, 12, 18, 24, \\dots$ – il y en a une infinité.</p>",
    "<p>Un <strong>diviseur</strong> d'un nombre est un nombre par lequel on peut le diviser sans reste. Les diviseurs de 12 sont $1, 2, 3, 4, 6, 12$.\n       On les cherche par paires : $12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$. Le nombre 1 et le nombre lui-même sont toujours des diviseurs.</p>",
    {
     "fig": "r5-delitele",
     "caption": "On peut ranger 12 points en rectangles $1\\cdot 12$, $2\\cdot 6$ et $3\\cdot 4$. Les dimensions sont les diviseurs de 12."
    },
    "<p><strong>Critères de divisibilité :</strong> un nombre est divisible par <strong>2</strong> s'il se termine par 0, 2, 4, 6, 8 ;\n       par <strong>5</strong> s'il se termine par 0 ou 5 ; par <strong>10</strong> s'il se termine par 0 ; par <strong>3</strong> si la\n       somme de ses chiffres est divisible par trois.</p>"
   ],
   "examples": [
    {
     "task": "Trouve tous les diviseurs de 18.",
     "steps": [
      "On cherche les paires : $18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$.",
      "4 et 5 ne sont pas des diviseurs, ensuite les paires se répètent.",
      "<strong>Diviseurs : 1, 2, 3, 6, 9, 18.</strong>"
     ]
    },
    {
     "task": "Le nombre $4\\,215$ est-il divisible par trois ?",
     "steps": [
      "Somme des chiffres : $4 + 2 + 1 + 5 = 12$.",
      "12 est divisible par trois.",
      "<strong>Oui, $4\\,215$ est divisible par trois.</strong> ($4\\,215 : 3 = 1\\,405$)"
     ]
    }
   ]
  },
  "r5-zlomky": {
   "title": "Les fractions – premières notions",
   "summary": "Partie d'un tout, numérateur et dénominateur, fraction d'un nombre, comparaison de fractions.",
   "theory": [
    "<p>Quand on partage un tout en parts <strong>égales</strong>, une part en est une fraction : un demi $\\frac{1}{2}$,\n       un tiers $\\frac{1}{3}$, un quart $\\frac{1}{4}$… La fraction $\\frac{3}{8}$ signifie : on partage le tout en 8 parts égales et on en prend 3.</p>",
    "<p>Le nombre sous le trait de fraction est le <strong>dénominateur</strong> – il indique en combien de parts on a partagé le tout.\n       Le nombre au-dessus du trait est le <strong>numérateur</strong> – il indique combien de parts on prend.</p>",
    {
     "fig": "r5-zlomky",
     "caption": "Les fractions $\\frac{1}{2}$, $\\frac{1}{4}$ et $\\frac{3}{8}$ d'un gâteau et $\\frac{2}{5}$ d'une bande."
    },
    "<p><strong>Fraction d'un nombre :</strong> pour calculer $\\frac{3}{4}$ de 20, on divise 20 par le dénominateur ($20 : 4 = 5$, c'est un quart)\n       et on multiplie par le numérateur ($5\\cdot 3 = 15$).<br>\n       <strong>Comparer :</strong> pour un même dénominateur, la plus grande fraction est celle qui a le plus grand numérateur : $\\frac{5}{7} &gt; \\frac{3}{7}$.\n       Pour un même numérateur, la plus grande fraction est celle qui a le plus petit dénominateur : $\\frac{1}{3} &gt; \\frac{1}{5}$ (un tiers est un plus gros morceau qu'un cinquième).</p>"
   ],
   "examples": [
    {
     "task": "Combien font $\\frac{2}{5}$ de 35 ?",
     "steps": [
      "Un cinquième : $35 : 5 = 7$.",
      "Deux cinquièmes : $7\\cdot 2 = 14$.",
      "<strong>$\\frac{2}{5}$ de 35 font 14.</strong>"
     ]
    },
    {
     "task": "Le tiers d'un trajet mesure 4 km. Quelle est la longueur du trajet entier ?",
     "steps": [
      "Le trajet entier compte 3 tiers.",
      "$3\\cdot 4 = 12$.",
      "<strong>Le trajet entier mesure 12 km.</strong>"
     ]
    }
   ]
  },
  "r5-utvary": {
   "title": "Les figures géométriques de base",
   "summary": "Point, droite, demi-droite, segment, cercle et disque.",
   "theory": [
    "<p>On nomme un <strong>point</strong> avec une lettre majuscule (A, B, S). Par deux points distincts passe une seule <strong>droite</strong> –\n       elle est droite et n'a ni début ni fin. On la nomme avec une lettre minuscule ($p$) ou avec deux de ses points (la droite $AB$).</p>",
    "<p>Une <strong>demi-droite</strong> a une origine, mais pas de fin : la demi-droite $AB$ commence au point A et continue au-delà du point B.\n       Le <strong>segment</strong> $AB$ est la partie de la droite comprise entre les points A et B, il a deux extrémités et on peut le mesurer.</p>",
    {
     "fig": "r5-utvary",
     "caption": "Les pointillés montrent que la ligne continue sans fin. À droite, un cercle de centre S, de rayon r et de diamètre d."
    },
    "<p>Un <strong>cercle</strong> est une ligne dont tous les points sont à la même distance du centre S – c'est le <strong>rayon</strong> $r$.\n       Le <strong>diamètre</strong> $d$ passe par le centre et il est deux fois plus long : $d = 2\\cdot r$. Le <strong>disque</strong> est le cercle avec toute sa partie intérieure.</p>"
   ],
   "examples": [
    {
     "task": "Un cercle a un diamètre de 14 cm. Quel est son rayon ?",
     "steps": [
      "Le rayon est la moitié du diamètre.",
      "$14 : 2 = 7$.",
      "<strong>$r = 7\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Combien de segments définissent 4 points dont trois ne sont jamais alignés ?",
     "steps": [
      "Points A, B, C, D. On relie chacun à chacun : AB, AC, AD, BC, BD, CD.",
      "<strong>Il y en a 6.</strong>"
     ]
    }
   ]
  },
  "r5-obvod": {
   "title": "Périmètre du carré, du rectangle et du triangle",
   "summary": "Calculer un périmètre, trouver un côté manquant et calculer avec différentes unités.",
   "theory": [
    "<p>Le <strong>périmètre</strong> d'un polygone est la somme des longueurs de tous ses côtés. On le note $o$.</p>",
    {
     "fig": "r5-obvod",
     "caption": "Formules du périmètre du carré, du rectangle et du triangle."
    },
    "<p><strong>Carré :</strong> $o = 4\\cdot a$. <strong>Rectangle :</strong> $o = 2\\cdot(a + b)$.\n       <strong>Triangle :</strong> $o = a + b + c$ ; un triangle équilatéral a $o = 3\\cdot a$.</p>",
    "<p>Avant d'additionner, toutes les longueurs doivent être dans la <strong>même unité</strong>. Si un rectangle a des côtés de $3\\,\\text{dm}$ et $12\\,\\text{cm}$,\n       on convertit d'abord $3\\,\\text{dm} = 30\\,\\text{cm}$, puis $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Un triangle a des côtés de 7 cm, 9 cm et 12 cm. Calcule son périmètre.",
     "steps": [
      "$o = 7 + 9 + 12$.",
      "$o = 28\\,\\text{cm}$."
     ]
    },
    {
     "task": "Un rectangle a un périmètre de 50 m et un côté de 15 m. Combien mesure l'autre côté ?",
     "steps": [
      "La moitié du périmètre est $a + b = 50 : 2 = 25$.",
      "$b = 25 - 15 = 10$.",
      "<strong>L'autre côté mesure $10\\,\\text{m}$.</strong>"
     ]
    }
   ]
  },
  "r5-jednotky": {
   "title": "Unités de longueur, de masse, de contenance et de temps",
   "summary": "Conversions d'unités, mesures composées et choix de l'unité adaptée.",
   "theory": [
    "<p><strong>Longueur :</strong> km, m, dm, cm, mm. <strong>Masse :</strong> t, kg, dag, g.\n       <strong>Contenance :</strong> hl, l, dl, ml. <strong>Temps :</strong> jour, heure (h), minute (min), seconde (s).</p>",
    {
     "fig": "r5-jednotky",
     "caption": "Les échelles d'unités. La flèche indique par combien d'unités plus petites on remplace une unité plus grande."
    },
    "<p><strong>Vers une unité plus petite</strong>, on multiplie : $3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$.\n       <strong>Vers une unité plus grande</strong>, on divise : $4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$.\n       On convertit une mesure composée partie par partie : $2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$.</p>",
    "<p>Attention avec le temps : on ne compte pas par « dix », mais par <strong>60</strong> (une heure a 60 minutes, une minute 60 secondes), et une journée a <strong>24</strong> heures.</p>"
   ],
   "examples": [
    {
     "task": "Convertis $3\\,\\text{l}\\ 4\\,\\text{dl}$ en décilitres.",
     "steps": [
      "$3\\,\\text{l} = 30\\,\\text{dl}$.",
      "$30 + 4 = 34$.",
      "<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>"
     ]
    },
    {
     "task": "Un film a commencé à 18:40 et s'est terminé à 20:15. Combien de minutes a-t-il duré ?",
     "steps": [
      "De 18:40 à 19:00, il y a 20 minutes.",
      "De 19:00 à 20:00, il y a 60 minutes, de 20:00 à 20:15, il y a 15 minutes.",
      "$20 + 60 + 15 = 95$.",
      "<strong>Le film a duré 95 minutes.</strong>"
     ]
    }
   ]
  },
  "r5-slovne": {
   "title": "Résoudre des problèmes",
   "summary": "Problèmes à plusieurs étapes, parties d'un tout, somme et différence, arrondi par excès.",
   "theory": [
    "<p>Pour résoudre un problème : <strong>1.</strong> lis l'énoncé et note ce que tu sais et ce que tu cherches ; <strong>2.</strong> réfléchis\n       à l'ordre des calculs ; <strong>3.</strong> calcule ; <strong>4.</strong> vérifie ou fais une estimation ;\n       <strong>5.</strong> écris la réponse par une phrase complète.</p>",
    "<p>Le <strong>modèle en barres</strong> aide pour les problèmes de somme et de différence. Si deux personnes ont ensemble 50 € et que l'une a 8 € de plus,\n       on retire d'abord la différence – ensuite, les deux ont autant.</p>",
    {
     "fig": "r5-model",
     "caption": "Modèle en barres : $50 - 8 = 42$, $42 : 2 = 21$. Le plus jeune a 21 €, l'aîné $21 + 8 = 29$ €."
    },
    "<p>Attention au <strong>reste</strong> : si 23 enfants doivent monter en voiture et qu'il y a 4 places par voiture, $23 : 4 = 5$ voitures (reste 3) ne suffisent pas.\n       Les 3 enfants restants ont besoin d'une voiture de plus, il faut donc 6 voitures.</p>"
   ],
   "examples": [
    {
     "task": "Lucie avait 120 euros. Elle a dépensé un tiers pour des chaussures et 25 euros pour des livres. Combien d'euros lui reste-t-il ?",
     "steps": [
      "Un tiers de 120 : $120 : 3 = 40$ euros.",
      "En tout, elle a dépensé $40 + 25 = 65$ euros.",
      "Il reste $120 - 65 = 55$ euros.",
      "<strong>Réponse : il reste 55 euros à Lucie.</strong>"
     ]
    },
    {
     "task": "Un père a 42 ans et il est trois fois plus âgé que son fils. Quel âge aura le fils dans 6 ans ?",
     "steps": [
      "Le fils a maintenant $42 : 3 = 14$ ans.",
      "Dans 6 ans : $14 + 6 = 20$.",
      "<strong>Réponse : le fils aura 20 ans.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot {@0} = {@1}$.": "$125\\cdot 8 = 1\\,000$, donc le résultat est $1\\,000\\cdot {@0} = {@1}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, donc ${@3} : {@4} = {@5}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, donc ${@3}\\cdot {@4} = {@5}$.",
  "$25\\cdot 4 = 100$, preto $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.": "$25\\cdot 4 = 100$, donc $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.",
  "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Súčet: ${@4} + {@5} = {@6}$ (rímskymi číslicami {@7}).": "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Somme : ${@4} + {@5} = {@6}$ (en chiffres romains {@7}).",
  "$a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}$, druhá strana meria ${@5}\\,\\text{{@6}}$.": "$a + b = {@0} : 2 = {@1}$, donc $b = {@2} - {@3} = {@4}$, l'autre côté mesure ${@5}\\,\\text{{@6}}$.",
  "$a = {@0} : 4 = {@1}$, strana meria ${@2}\\,\\text{{@3}}$.": "$a = {@0} : 4 = {@1}$, le côté mesure ${@2}\\,\\text{{@3}}$.",
  "$c = {@0} - {@1} - {@2} = {@3}$, tretia strana meria ${@4}\\,\\text{{@5}}$.": "$c = {@0} - {@1} - {@2} = {@3}$, le troisième côté mesure ${@4}\\,\\text{{@5}}$.",
  "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, priemer je ${@2}\\,\\text{{@3}}$.": "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, le diamètre est ${@2}\\,\\text{{@3}}$.",
  "$o = {@0} + {@1} + {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = {@0} + {@1} + {@2} = {@3}$, le périmètre est ${@4}\\,\\text{{@5}}$.",
  "$o = {@0}\\cdot {@1} = {@2}$, obvod je ${@3}\\,\\text{{@4}}$.": "$o = {@0}\\cdot {@1} = {@2}$, le périmètre est ${@3}\\,\\text{{@4}}$.",
  "$r = d : 2 = {@0} : 2 = {@1}$, polomer je ${@2}\\,\\text{{@3}}$.": "$r = d : 2 = {@0} : 2 = {@1}$, le rayon est ${@2}\\,\\text{{@3}}$.",
  "${@0} : {@1} = {@2}$ (to je ${@3}$), potom ${@4}\\cdot {@5} = {@6}$.": "${@0} : {@1} = {@2}$ (c'est ${@3}$), puis ${@4}\\cdot {@5} = {@6}$.",
  "${@0} : {@1} = {@2}$, zvyšok {@3}. {@4}": "${@0} : {@1} = {@2}$, reste {@3}. {@4}",
  "${@0} = {@1}\\cdot {@2}$. Ostatné čísla po delení {@3} dávajú zvyšok.": "${@0} = {@1}\\cdot {@2}$. Les autres nombres divisés par {@3} donnent un reste.",
  "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Odhad: ${@4} {@5} {@6} = {@7}$. (Presný výsledok je ${@8}$.)": "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Estimation : ${@4} {@5} {@6} = {@7}$. (Le résultat exact est ${@8}$.)",
  "${@0}$ z {@1} je ${@2} : {@3} = {@4}$. ${@5}$ je ${@6}\\cdot {@7} = {@8}$. {@9}.": "${@0}$ de {@1}, c'est ${@2} : {@3} = {@4}$. ${@5}$, c'est ${@6}\\cdot {@7} = {@8}$. {@9}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ a pripočítame zvyšok: ${@4} + {@5} = {@6}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ et on ajoute le reste : ${@4} + {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.": "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.",
  "0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.": "0 – 4 : vers le bas, 5 – 9 : vers le haut. Remplace les chiffres de droite par des zéros.",
  "3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť": "3 042 705 = trois millions quarante-deux mille sept cent cinq",
  "<span class=\"c-ok\">{@0} ≐ {@1} (na desiatky)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (na stovky)</span>": "<span class=\"c-ok\">{@0} ≐ {@1} (aux dizaines)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (aux centaines)</span>",
  "Aké číslo je $\\text{{@0}}$?": "Quel nombre est $\\text{{@0}}$ ?",
  "Akú hodnotu má skupina $\\text{{@0}}$?": "Quelle est la valeur du groupe $\\text{{@0}}$ ?",
  "Akú hodnotu má číslica {@0} v čísle ${@1}$?": "Quelle est la valeur du chiffre {@0} dans le nombre ${@1}$ ?",
  "Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). {@0}": "Quelle partie du tout représentent les parts coloriées ? Écris-la sous forme de fraction a/b (par exemple 2/5). {@0}",
  "Aký je obvod obdĺžnika (v {@0})?": "Quel est le périmètre du rectangle (en {@0}) ?",
  "Aký je obvod obdĺžnika v centimetroch?": "Quel est le périmètre du rectangle en centimètres ?",
  "Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.": "Sans la différence de 8 €, les deux auraient autant : (50 − 8) : 2 = 21 €.",
  "Bez rozdielu: ${@0} - {@1} = {@2}$, to je dvakrát toľko, koľko má mladší: ${@3} : 2 = {@4}$. {@5} Skúška: ${@6} + {@7} = {@8}$.": "Sans la différence : ${@0} - {@1} = {@2}$, c'est le double de ce qu'a le plus jeune : ${@3} : 2 = {@4}$. {@5} Vérification : ${@6} + {@7} = {@8}$.",
  "Body {@0}. Úsečky: {@1}. Spolu {@2}.": "Points {@0}. Segments : {@1}. En tout {@2}.",
  "Celok je rozdelený na {@0} {@1} (menovateľ), {@2} (čitateľ): ${@3}$.": "Le tout est partagé en {@0} {@1} (dénominateur), {@2} (numérateur) : ${@3}$.",
  "Celok má {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, teda ${@5}\\,\\text{{@6}}$.": "Le tout a {@0} {@1} : ${@2}\\cdot {@3} = {@4}$, donc ${@5}\\,\\text{{@6}}$.",
  "Celok sa skladá z {@0} rovnakých častí. Vynásob.": "Le tout est formé de {@0} parts égales. Multiplie.",
  "Cesta vlakom z Bratislavy do Košíc trvá asi": "Le trajet en train de Paris à Toulouse dure environ",
  "Cez dva body vieme viesť jedinú priamku.": "Par deux points, on peut tracer une seule droite.",
  "Ciferný súčet: ${@0} = {@1}$, je deliteľný tromi.": "Somme des chiffres : ${@0} = {@1}$, elle est divisible par trois.",
  "Ciferný súčet: ${@0} = {@1}$, nie je deliteľný tromi.": "Somme des chiffres : ${@0} = {@1}$, elle n'est pas divisible par trois.",
  "Desatina": "Le dixième",
  "Deň má 24 hodín: ${@0}\\cdot 24 = {@1}$, a ešte ${@2} + {@3} = {@4}$ hodín.": "Une journée a 24 heures : ${@0}\\cdot 24 = {@1}$, et encore ${@2} + {@3} = {@4}$ heures.",
  "Dni a hodiny nemôžeš len tak sčítať. Najprv premeň {@0} {@1} na hodiny.": "Tu ne peux pas simplement additionner des jours et des heures. Convertis d'abord {@0} {@1} en heures.",
  "Do hrnčeka sa zmestí asi": "Une tasse contient environ",
  "Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.": "Le dénominateur, c'est le nombre de toutes les parts, pas seulement des parts non coloriées.",
  "Do vane sa zmestí asi": "Une baignoire contient environ",
  "Do {@0} {@1} sa zmestí ${@2}\\,\\text{{@3}}$. {@4}": "Dans {@0} {@1}, on peut mettre ${@2}\\,\\text{{@3}}$. {@4}",
  "Doplň chýbajúce číslo: $\\square : {@0} = {@1}$": "Complète le nombre qui manque : $\\square : {@0} = {@1}$",
  "Doplň chýbajúce číslo: $\\square\\cdot {@0} = {@1}$": "Complète le nombre qui manque : $\\square\\cdot {@0} = {@1}$",
  "Druhý deň neprešli {@0} km, ale o {@1} km viac ako prvý deň.": "Le deuxième jour, ils n'ont pas parcouru {@0} km, mais {@1} km de plus que le premier jour.",
  "Druhý deň: ${@0} + {@1} = {@2}$ km. Tretí deň: ${@3} : 2 = {@4}$ km. Spolu: ${@5} + {@6} + {@7} = {@8}$ km.": "Deuxième jour : ${@0} + {@1} = {@2}$ km. Troisième jour : ${@3} : 2 = {@4}$ km. En tout : ${@5} + {@6} + {@7} = {@8}$ km.",
  "Dvaja bratia majú spolu {@0} {@1}. Starší má o {@2} {@3} viac ako mladší. Koľko eur má {@4} brat?": "Deux frères ont ensemble {@0} {@1}. Le plus âgé a {@2} {@3} de plus que le plus jeune. Combien d'euros a le frère {@4} ?",
  "Dvanásť bodiek usporiadaných do obdĺžnikov": "Douze points rangés en rectangles",
  "Dvojica {@0} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.": "On ne peut pas utiliser la paire {@0} : on peut seulement soustraire I devant V et X, X devant L et C, C devant D et M.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}.": "Paires : ${@0} = {@1}$. Diviseurs : {@2}.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}. Číslo má iba dva delitele.": "Paires : ${@0} = {@1}$. Diviseurs : {@2}. Le nombre n'a que deux diviseurs.",
  "Dvoma rôznymi bodmi prechádza práve jedna priamka.": "Par deux points différents passe exactement une droite.",
  "Dĺžka triedy je asi": "La longueur d'une salle de classe est d'environ",
  "Hmotnosť jablka je asi": "Une pomme pèse environ",
  "Hmotnosť nákladného auta je asi": "Un camion pèse environ",
  "Hmotnosť žiaka 5. ročníka je asi": "Un élève de 5e année pèse environ",
  "Hrúbka zošita je asi": "L'épaisseur d'un cahier est d'environ",
  "Hľadaj v násobilke čísla {@0} posledný výsledok, ktorý ešte nepresiahne {@1}.": "Cherche dans la table de {@0} le dernier résultat qui ne dépasse pas {@1}.",
  "Hľadáš {@0} číslo, ty si zostavil {@1}.": "Tu cherches {@0} nombre, tu as formé {@1}.",
  "Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.": "C'est le contraire : le diamètre est le double du rayon, $d = 2\\cdot r$.",
  "Je číslo ${@0}$ deliteľné číslom {@1}?": "Le nombre ${@0}$ est-il divisible par {@1} ?",
  "Je číslo ${@0}$ párne alebo nepárne?": "Le nombre ${@0}$ est-il pair ou impair ?",
  "Jeden deň má 24 hodín.": "Une journée a 24 heures.",
  "Jedna časť je {@0}. Koľko je ${@1}$ z čísla {@2}?": "Une part vaut {@0}. Combien font ${@1}$ de {@2} ?",
  "Koľko eur je {@0} z {@1} eur?": "Combien d'euros représente {@0} de {@1} euros ?",
  "Koľko eur má mladší brat?": "Combien d'euros a le frère plus jeune ?",
  "Koľko eur má starší brat?": "Combien d'euros a le frère plus âgé ?",
  "Koľko eur zostane, keď od súčtu {@0} odčítaš rozdiel {@1}?": "Combien d'euros reste-t-il si tu soustrais la différence {@1} de la somme {@0} ?",
  "Koľko eur {@0} spolu?": "Combien d'euros {@0} en tout ?",
  "Koľko eur {@0} zostalo?": "Combien d'euros {@0} reste-t-il ?",
  "Koľko gramov váži celý koláč?": "Combien de grammes pèse le gâteau entier ?",
  "Koľko hodín majú {@0} {@1} a {@2} {@3}?": "Combien d'heures font {@0} {@1} et {@2} {@3} ?",
  "Koľko hodín majú {@0} {@1}?": "Combien d'heures font {@0} {@1} ?",
  "Koľko je ${@0}$ z čísla {@1}?": "Combien font ${@0}$ de {@1} ?",
  "Koľko je polovica obvodu, teda $a + b$?": "Combien fait la moitié du périmètre, c'est-à-dire $a + b$ ?",
  "Koľko kilometrov meria celá cesta?": "Combien de kilomètres mesure le trajet entier ?",
  "Koľko kilometrov prešli druhý deň?": "Combien de kilomètres ont-ils parcourus le deuxième jour ?",
  "Koľko kilometrov prešli tretí deň?": "Combien de kilomètres ont-ils parcourus le troisième jour ?",
  "Koľko kilometrov prešli za tri dni spolu?": "Combien de kilomètres ont-ils parcourus en tout en trois jours ?",
  "Koľko litrov sa zmestí do celej nádrže?": "Combien de litres contient le réservoir entier ?",
  "Koľko minút trvala celá cesta?": "Combien de minutes a duré le trajet entier ?",
  "Koľko minút uplynie od {@0} do {@1}?": "Combien de minutes s'écoulent de {@0} à {@1} ?",
  "Koľko násobkov čísla {@0} leží medzi číslami 1 a {@1} (vrátane)?": "Combien de multiples de {@0} y a-t-il entre 1 et {@1} (compris) ?",
  "Koľko rokov bude mať {@0} o {@1} {@2}?": "Quel âge aura {@0} dans {@1} {@2} ?",
  "Koľko rokov má {@0} teraz?": "Quel âge a {@0} maintenant ?",
  "Koľko úsečiek určuje {@0} bodov, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "Combien de segments déterminent {@0} points dont trois ne sont jamais alignés ? (On relie chaque paire de points par un segment.)",
  "Koľko úsečiek určujú {@0} body, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "Combien de segments déterminent {@0} points dont trois ne sont jamais alignés ? (On relie chaque paire de points par un segment.)",
  "Koľkokrát treba vziať {@0}, aby vyšlo {@1}?": "Combien de fois faut-il prendre {@0} pour obtenir {@1} ?",
  "Kruh je kružnica aj s celou vnútornou časťou.": "Le disque, c'est le cercle avec toute sa partie intérieure.",
  "Kružnica je len čiara, kruh je aj plocha vnútri.": "Le cercle n'est qu'une ligne, le disque comprend aussi la surface à l'intérieur.",
  "Kružnica má polomer ${@0}\\,\\text{{@1}}$. Aký má priemer (v {@2})?": "Un cercle a un rayon de ${@0}\\,\\text{{@1}}$. Quel est son diamètre (en {@2}) ?",
  "Kružnica má priemer ${@0}\\,\\text{{@1}}$. Aký má polomer (v {@2})?": "Un cercle a un diamètre de ${@0}\\,\\text{{@1}}$. Quel est son rayon (en {@2}) ?",
  "Ktorá číslica stojí v čísle ${@0}$ hneď vpravo od rádu {@1}?": "Quel chiffre se trouve dans le nombre ${@0}$ juste à droite du rang des {@1} ?",
  "Ktoré dve čísla dajú spolu $1\\,000$?": "Quels sont les deux nombres qui font ensemble $1\\,000$ ?",
  "Ktoré dve čísla dajú spolu pekný súčin 100?": "Quels sont les deux nombres qui donnent un joli produit de 100 ?",
  "Ktoré je {@0} prirodzené číslo, ktoré sa po zaokrúhlení na {@1} rovná ${@2}$?": "Quel est {@0} entier naturel qui, arrondi aux {@1}, donne ${@2}$ ?",
  "Ktoré z čísel je násobkom čísla {@0}?": "Lequel de ces nombres est un multiple de {@0} ?",
  "Ktoré z čísel je {@0}?": "Lequel de ces nombres est {@0} ?",
  "Ktorý je najväčší násobok čísla {@0}, ktorý nie je väčší ako {@1}?": "Quel est le plus grand multiple de {@0} qui ne dépasse pas {@1} ?",
  "Ktorý zápis čísla ${@0}$ rímskymi číslicami je správny?": "Quelle écriture du nombre ${@0}$ en chiffres romains est correcte ?",
  "Mama": "Maman",
  "Menovatele sú rovnaké, rozhoduje čitateľ: ${@0} {@1} {@2}$.": "Les dénominateurs sont égaux, c'est le numérateur qui décide : ${@0} {@1} {@2}$.",
  "Meníš na menšiu jednotku, preto násob.": "Tu convertis vers une unité plus petite, donc multiplie.",
  "Meníš na väčšiu jednotku, preto deľ.": "Tu convertis vers une unité plus grande, donc divise.",
  "Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.": "On ne trouve pas le deuxième terme d'une soustraction par une addition. Soustrais la différence du premier terme.",
  "Menšiteľ zistíme odčítaním: ${@0} - {@1} = {@2}$.": "On trouve le deuxième terme par une soustraction : ${@0} - {@1} = {@2}$.",
  "Minul": "Il a dépensé",
  "Minula": "Elle a dépensé",
  "Mladší má {@0} {@1}.": "Le plus jeune a {@0} {@1}.",
  "Na ${@0}$ sa zaokrúhľujú čísla od ${@1}$ (nahor) po ${@2}$ (nadol). {@3} je ${@4}$.": "On arrondit à ${@0}$ les nombres de ${@1}$ (vers le haut) à ${@2}$ (vers le bas). {@3} est ${@4}$.",
  "Na farme nazbierali {@0} {@1}. Do jedného obalu sa zmestí {@2} vajec. Koľko obalov potrebujú na všetky vajcia?": "À la ferme, on a ramassé {@0} {@1}. Une boîte contient {@2} œufs. Combien de boîtes faut-il pour tous les œufs ?",
  "Na menšiu jednotku násobíme, na väčšiu jednotku delíme.": "Vers une unité plus petite, on multiplie ; vers une unité plus grande, on divise.",
  "Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.": "Au rang des milliers, mets le plus petit chiffre qui n'est pas 0.",
  "Na výlet ide {@0} {@1}. Do jednej lodičky sa {@2} {@3} {@4}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?": "{@0} {@1} partent en excursion. Dans une barque, {@3} {@4} {@2}. Combien de barques faut-il pour que tous les enfants y montent en même temps ?",
  "Na zvyšok treba ešte jeden obal, spolu {@0} {@1}.": "Pour le reste, il faut encore une boîte, en tout {@0} {@1}.",
  "Na zvyšok treba ešte jednu lodičku, spolu {@0} {@1}.": "Pour le reste, il faut encore une barque, en tout {@0} {@1}.",
  "Najmenšie": "Le plus petit",
  "Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.": "Compte d'abord jusqu'à l'heure pile, puis ajoute le reste. Une heure a 60 minutes.",
  "Najprv preveď obe čísla na arabské číslice, potom sčítaj.": "Convertis d'abord les deux nombres en chiffres arabes, puis additionne.",
  "Najprv rovnaké jednotky: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Potom $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.": "D'abord les mêmes unités : ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Ensuite $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.",
  "Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.": "Calcule d'abord la part de la somme totale, puis additionne toutes les dépenses et soustrais-les.",
  "Najprv zaokrúhli každé číslo na stovky, až potom počítaj.": "Arrondis d'abord chaque nombre aux centaines, et calcule seulement ensuite.",
  "Najprv zisti vek {@0} teraz z údaju {@1} {@2}, až potom pripočítaj {@3}. {@4} o {@5} {@6} už nebude {@7} {@8}.": "Trouve d'abord l'âge actuel {@0} à partir de la donnée {@1} {@2}, et ajoute seulement ensuite {@3}. Dans {@5} {@6}, {@4} ne sera plus {@7} {@8}.",
  "Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.": "Trouve d'abord combien vaut une part (divise par le dénominateur), puis multiplie par le numérateur.",
  "Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.": "Trouve d'abord l'âge actuel de l'enfant (division), puis ajoute.",
  "Najprv zátvorka, potom násobenie, nakoniec odčítanie.": "D'abord la parenthèse, puis la multiplication, et enfin la soustraction.",
  "Najväčšia číslica patrí na miesto tisícov.": "Le plus grand chiffre va au rang des milliers.",
  "Najväčšie": "Le plus grand",
  "Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.": "Dessine un modèle en barres. Soustrais la différence de la somme – les frères partagent le reste en parts égales.",
  "Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.": "Tu as écrit seulement le chiffre. La valeur d'un chiffre dépend de la place qu'il occupe – ajoute le bon nombre de zéros après lui.",
  "Napíš všetky delitele čísla {@0}. Oddeľ ich bodkočiarkou.": "Écris tous les diviseurs de {@0}. Sépare-les par un point-virgule.",
  "Napíš {@0} čísla ${@1}$.": "Écris {@0} du nombre ${@1}$.",
  "Nasledovník je o 1 väčší: ${@0} + 1 = {@1}$.": "Le successeur est plus grand de 1 : ${@0} + 1 = {@1}$.",
  "Nasledovník je číslo o 1 väčšie.": "Le successeur est le nombre plus grand de 1.",
  "Neznámy delenec zistíme násobením: ${@0}\\cdot {@1} = {@2}$.": "On trouve le dividende inconnu par une multiplication : ${@0}\\cdot {@1} = {@2}$.",
  "Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.": "Tu trouves le dividende inconnu par une multiplication, pas par une division : multiplie le quotient par le diviseur.",
  "Neznámy činiteľ zistíme delením: ${@0} : {@1} = {@2}$.": "On trouve le facteur inconnu par une division : ${@0} : {@1} = {@2}$.",
  "Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.": "Tu trouves le facteur inconnu par une division, pas par une multiplication : divise le produit par le facteur connu.",
  "Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.": "Tu as compté certains segments deux fois. Le segment AB est le même que BA – compte chaque paire de points une seule fois.",
  "Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.": "Trouve le rang auquel tu arrondis et avance d'une place vers la droite.",
  "Násobky: {@0}, {@1}, {@2}, …, {@3}. Posledný je ${@4}\\cdot {@5} = {@6}$, ďalší ${@7}$ je už väčší ako {@8}. Je ich {@9}.": "Multiples : {@0}, {@1}, {@2}, …, {@3}. Le dernier est ${@4}\\cdot {@5} = {@6}$, le suivant ${@7}$ est déjà plus grand que {@8}. Il y en a {@9}.",
  "Obdĺžnik má dve dvojice rovnakých strán.": "Un rectangle a deux paires de côtés égaux.",
  "Obdĺžnik má obvod ${@0}\\,\\text{{@1}}$ a jednu stranu ${@2}\\,\\text{{@3}}$. Aká dlhá je druhá strana (v {@4})?": "Un rectangle a un périmètre de ${@0}\\,\\text{{@1}}$ et un côté de ${@2}\\,\\text{{@3}}$. Quelle est la longueur de l'autre côté (en {@4}) ?",
  "Obdĺžnik má strany ${@0}\\,\\text{dm}$ a ${@1}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.": "Un rectangle a des côtés de ${@0}\\,\\text{dm}$ et ${@1}\\,\\text{cm}$. Calcule son périmètre en centimètres.",
  "Obvod je dvojnásobok súčtu dvoch susedných strán.": "Le périmètre est le double de la somme de deux côtés consécutifs.",
  "Obvod obdĺžnika je $2\\cdot(a + b)$.": "Le périmètre d'un rectangle est $2\\cdot(a + b)$.",
  "Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.": "Le périmètre contient chaque côté deux fois. Divise-le d'abord par deux, et soustrais seulement ensuite le côté connu.",
  "Obvod štvorca, obdĺžnika a trojuholníka": "Périmètre du carré, du rectangle et du triangle",
  "Od obvodu odčítaj dĺžky známych strán.": "Soustrais du périmètre les longueurs des côtés connus.",
  "Od obvodu {@0} odčítaj {@1}.": "Soustrais {@1} du périmètre {@0}.",
  "Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.": "Tu as bien soustrait la différence de la somme, mais les frères doivent encore partager le reste en deux parts égales.",
  "Od súčtu {@0} odčítaj známu stranu {@1}.": "Soustrais de la somme {@0} le côté connu {@1}.",
  "Od {@0} do {@1} je {@2} min, od {@3} do {@4} je {@5} min. Spolu ${@6} + {@7} = {@8}$ minút.": "De {@0} à {@1}, il y a {@2} min, de {@3} à {@4}, il y a {@5} min. En tout ${@6} + {@7} = {@8}$ minutes.",
  "Od {@0} do {@1} uplynulo {@2} minút.": "De {@0} à {@1}, il s'est écoulé {@2} minutes.",
  "Odčítaj": "Soustrais",
  "Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.": "Tu as soustrait un seul côté. Soustrais du périmètre les deux côtés connus.",
  "Odčítal si iba peniaze za hru. Nezabudni odčítať aj {@0} {@1} za knihu.": "Tu as soustrait seulement l'argent du jeu. N'oublie pas de soustraire aussi les {@0} {@1} du livre.",
  "Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to {@0} všetkých peňazí.": "Tu as soustrait seulement l'argent du livre. Soustrais aussi la somme du jeu – c'est {@0} de tout l'argent.",
  "Osmina": "Le huitième",
  "Otec": "Papa",
  "Podiel vynásob deliteľom.": "Multiplie le quotient par le diviseur.",
  "Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.": "Le rayon est plus court que le diamètre : il faut donc diviser le diamètre par deux, pas le multiplier.",
  "Polovica": "La moitié",
  "Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.": "La moitié du périmètre est la somme des deux côtés consécutifs. Soustrais-en encore le côté connu.",
  "Polovica obvodu obdĺžnika je súčet dvoch susedných strán.": "La moitié du périmètre d'un rectangle est la somme de deux côtés consécutifs.",
  "Polovicu": "La moitié",
  "Polpriamka má jeden začiatočný bod.": "Une demi-droite a un seul point de départ.",
  "Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.": "Une demi-droite commence en un point et ne continue sans fin que d'un seul côté.",
  "Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.": "Une demi-droite commence en un point et continue sans fin de l'autre côté.",
  "Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…": "Nomme les points par des lettres et écris méthodiquement toutes les paires : d'abord avec le point A, puis avec le point B…",
  "Poradie operácií": "Ordre des opérations",
  "Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.": "Compare les chiffres en partant de la gauche jusqu'à trouver le premier qui diffère.",
  "Posledná číslica je {@0}, je párna.": "Le dernier chiffre est {@0}, il est pair.",
  "Posledná číslica je {@0}, nie je 0 ani 5.": "Le dernier chiffre est {@0}, ce n'est ni 0 ni 5.",
  "Posledná číslica je {@0}, nie je 0.": "Le dernier chiffre est {@0}, ce n'est pas 0.",
  "Posledná číslica je {@0}, nie je párna.": "Le dernier chiffre est {@0}, il n'est pas pair.",
  "Posledná číslica je {@0}, preto je číslo {@1}.": "Le dernier chiffre est {@0}, donc le nombre est {@1}.",
  "Posledná číslica je {@0}.": "Le dernier chiffre est {@0}.",
  "Poznáš {@0}, celok je teda väčší. Časť treba násobiť, nie deliť.": "Tu connais {@0}, le tout est donc plus grand. Il faut multiplier la part, pas la diviser.",
  "Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.": "Attention, un dénominateur plus grand ne veut pas dire une fraction plus grande. Plus on partage le tout en parts nombreuses, plus les parts sont petites.",
  "Pozri sa iba na poslednú číslicu.": "Regarde seulement le dernier chiffre.",
  "Pozri sa na poslednú číslicu.": "Regarde le dernier chiffre.",
  "Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Regarde le chiffre juste à droite du rang auquel tu arrondis : 0 – 4 vers le bas, 5 – 9 vers le haut.",
  "Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.": "Regarde bien : les deux fractions ont le même numérateur et le même dénominateur.",
  "Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob {@0} výsledkom zátvorky, až potom odčítaj od {@1}.": "Tu as calculé de gauche à droite. La multiplication est prioritaire sur la soustraction : multiplie d'abord {@0} par le résultat de la parenthèse, et soustrais seulement ensuite de {@1}.",
  "Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: ${@0}\\cdot {@1}$ vypočítaj skôr, ako budeš sčítať.": "Tu as calculé de gauche à droite. La multiplication est prioritaire sur l'addition : calcule ${@0}\\cdot {@1}$ avant d'additionner.",
  "Počítal si, akoby tam zátvorka nebola. Číslo {@0} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.": "Tu as calculé comme s'il n'y avait pas de parenthèse. Le nombre {@0} multiplie toute la différence entre parenthèses – calcule d'abord la parenthèse.",
  "Predchodca je o 1 menší: ${@0} - 1 = {@1}$.": "Le prédécesseur est plus petit de 1 : ${@0} - 1 = {@1}$.",
  "Predchodca je číslo o 1 menšie.": "Le prédécesseur est le nombre plus petit de 1.",
  "Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).": "Imagine l'objet et compare-le avec quelque chose que tu connais (par exemple 1 kg de farine, 1 m – un grand pas, 1 l – une bouteille).",
  "Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.": "Tu as converti les heures seulement en minutes. Chaque minute a encore 60 secondes.",
  "Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.": "Tu as converti les secondes seulement en minutes. Une heure a 60 minutes, divise donc encore par soixante.",
  "Premeň ${@0}\\,\\text{dm}$ na centimetre.": "Convertis ${@0}\\,\\text{dm}$ en centimètres.",
  "Premeň ${@0}\\,\\text{{@1}}$ na {@2}.": "Convertis ${@0}\\,\\text{{@1}}$ en {@2}.",
  "Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.": "Convertis les décimètres en centimètres ($1\\,\\text{dm} = 10\\,\\text{cm}$), et calcule seulement ensuite.",
  "Prevody jednotiek dĺžky, hmotnosti, objemu a času": "Conversions d'unités de longueur, de masse, de volume et de temps",
  "Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.": "Pour la divisibilité par trois, ce n'est pas le dernier chiffre qui décide. Additionne tous les chiffres et vérifie si la somme des chiffres est divisible par trois.",
  "Pri deliteľnosti číslom {@0} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.": "Pour la divisibilité par {@0}, seul le dernier chiffre décide. Regarde-le encore une fois et compare-le avec le critère de divisibilité.",
  "Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.": "Pour le temps, on ne convertit pas par dix : une heure a 60 minutes et une minute 60 secondes.",
  "Pri čase sa nepremieňa po stovkách: 1 {@0} = 60 {@1}, preto deľ šesťdesiatimi.": "Pour le temps, on ne convertit pas par cent : 1 {@0} = 60 {@1}, divise donc par soixante.",
  "Priamka je nekonečná na obe strany.": "Une droite est infinie des deux côtés.",
  "Priamka má začiatok aj koniec.": "Une droite a un début et une fin.",
  "Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.": "Une droite n'a pas de fin, une demi-droite a un début, un segment a un début et une fin.",
  "Priamka nemá koniec, preto nemá ani dĺžku.": "Une droite n'a pas de fin, elle n'a donc pas de longueur.",
  "Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.": "Une droite n'a ni début ni fin – des deux côtés, elle continuerait en pointillés.",
  "Priamka, polpriamka, úsečka a kružnica": "Droite, demi-droite, segment et cercle",
  "Priamku môžeme odmerať pravítkom.": "On peut mesurer une droite avec une règle.",
  "Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.": "Le diamètre est plus long que le rayon : il faut donc multiplier le rayon par deux, pas le diviser.",
  "Priemer je dvakrát dlhší ako polomer.": "Le diamètre est deux fois plus long que le rayon.",
  "Priemer kružnice je polovica polomeru.": "Le diamètre d'un cercle est la moitié du rayon.",
  "Pripočítaj": "Ajoute",
  "Pripočítaj ešte {@0} {@1}: ${@2} + {@3}$.": "Ajoute encore {@0} {@1} : ${@2} + {@3}$.",
  "Pripočítaj {@0} {@1}: ${@2} + {@3}$.": "Ajoute {@0} {@1} : ${@2} + {@3}$.",
  "Pätina": "Le cinquième",
  "Pätinu": "Le cinquième",
  "Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.": "Même dénominateur : compare les numérateurs. Même numérateur : un plus petit dénominateur veut dire des parts plus grandes.",
  "Rovnostranný trojuholník má 3 rovnaké strany.": "Un triangle équilatéral a 3 côtés égaux.",
  "Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel {@0} {@1}.": "Tu as partagé la somme en deux parts égales, mais les frères n'ont pas autant l'un que l'autre. Soustrais d'abord de la somme la différence de {@0} {@1}.",
  "Rozdelíme po rádoch: {@0}. Spolu ${@1} = {@2}$.": "On décompose par rangs : {@0}. En tout ${@1} = {@2}$.",
  "Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.": "Découpe l'écriture en groupes de milliers, de centaines, de dizaines et d'unités. Les paires comme CM, XC, IV signifient une soustraction.",
  "Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.": "C'est le chiffre à droite du rang qui décide : à partir de 5, on arrondit vers le haut, jusqu'à 4, vers le bas.",
  "Rozložíme po rádoch: {@0}.": "On décompose par rangs : {@0}.",
  "Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…": "Compte les rangs à partir de la droite : à la dernière place, ce sont les unités, devant elles les dizaines, les centaines, les milliers…",
  "Rímske číslice s odčítaním": "Chiffres romains avec soustraction",
  "S = stovky, D = desiatky, J = jednotky danej triedy": "S, D, J = centaines, dizaines et unités de la classe",
  "Skús deliť: ${@0} : {@1} = {@2}$, zvyšok {@3}. Násobok čísla {@4} sa dá vydeliť bez zvyšku.": "Essaie de diviser : ${@0} : {@1} = {@2}$, reste {@3}. Un multiple de {@4} se divise sans reste.",
  "Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je {@0}.": "Essaie de diviser par 1, 2, 3, … et cherche les paires dont le produit vaut {@0}.",
  "Spolu {@0} {@1}.": "En tout {@0} {@1}.",
  "Spomeň si na malú násobilku čísla {@0}.": "Rappelle-toi la table de multiplication de {@0}.",
  "Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.": "Calcule la valeur de cette écriture – un symbole plus petit placé après un plus grand s'ajoute, on obtient donc un autre nombre.",
  "Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.": "Compte toutes les parts – c'est le dénominateur. Puis compte les parts coloriées – c'est le numérateur.",
  "Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.": "Tu as compté les parts non coloriées. Le numérateur dit combien de parts sont coloriées.",
  "Správne je {@0}: {@1}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.": "La bonne réponse est {@0} : {@1}. Les autres écritures ne respectent pas les règles ou ont une autre valeur.",
  "Starší má ${@0} + {@1} = {@2}$ {@3}.": "Le plus âgé a ${@0} + {@1} = {@2}$ {@3}.",
  "Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.": "Les côtés sont dans des unités différentes. Convertis d'abord les décimètres en centimètres, et additionne seulement ensuite.",
  "Súčin vydeľ známym činiteľom.": "Divise le produit par le facteur connu.",
  "Sčítaj ${@0} + {@1}$.": "Additionne ${@0} + {@1}$.",
  "Sčítaj dve susedné strany: ${@0} + {@1}$.": "Additionne deux côtés consécutifs : ${@0} + {@1}$.",
  "Sčítaj dĺžky všetkých troch strán.": "Additionne les longueurs des trois côtés.",
  "Sčítaj hodnoty skupín {@0}.": "Additionne les valeurs des groupes {@0}.",
  "Sčítaj všetky číslice čísla.": "Additionne tous les chiffres du nombre.",
  "Sčítaj známe strany: ${@0} + {@1}$.": "Additionne les côtés connus : ${@0} + {@1}$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.": "Tu as additionné seulement deux côtés. Le rectangle a quatre côtés – deux de longueur $a$ et deux de longueur $b$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.": "Tu as additionné seulement deux côtés. Le rectangle a quatre côtés – multiplie encore par deux la somme de deux côtés consécutifs.",
  "Sčítal si čísla v rôznych jednotkách. Najprv premeň {@0} {@1} na {@2}.": "Tu as additionné des nombres dans des unités différentes. Convertis d'abord {@0} {@1} en {@2}.",
  "Teraz: ${@0} : {@1} = {@2}$ {@3}. O {@4} {@5}: ${@6} + {@7} = {@8}$.": "Maintenant : ${@0} : {@1} = {@2}$ {@3}. Dans {@4} {@5} : ${@6} + {@7} = {@8}$.",
  "Toto je posledný násobok čísla {@0}, nie počet násobkov. Zisti, koľkokrát si musel {@1} pripočítať, aby si sa k nemu dostal.": "C'est le dernier multiple de {@0}, pas le nombre de multiples. Cherche combien de fois tu as dû ajouter {@1} pour y arriver.",
  "Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.": "C'est le résultat exact. On demande une estimation : arrondis d'abord les deux nombres aux centaines, et calcule seulement ensuite.",
  "Toto je vek {@0} teraz. Úloha sa pýta, koľko rokov bude mať o {@1} {@2}.": "C'est l'âge actuel {@0}. On demande quel âge l'enfant aura dans {@1} {@2}.",
  "Toto má {@0} brat. Pýtame sa na {@1}.": "C'est ce qu'a le frère {@0}. On demande ce qu'a le frère {@1}.",
  "Tretina": "Le tiers",
  "Tretinu": "Le tiers",
  "Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.": "Le troisième jour, ils ont parcouru la moitié de la distance du deuxième jour, pas du premier.",
  "Triedy a rády čísla 3 042 705": "Classes et rangs du nombre 3 042 705",
  "Trojuholník má iba tri strany, nie štyri.": "Un triangle n'a que trois côtés, pas quatre.",
  "Trojuholník má obvod ${@0}\\,\\text{{@1}}$. Dve jeho strany merajú ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Aká dlhá je tretia strana (v {@6})?": "Un triangle a un périmètre de ${@0}\\,\\text{{@1}}$. Deux de ses côtés mesurent ${@2}\\,\\text{{@3}}$ et ${@4}\\,\\text{{@5}}$. Quelle est la longueur du troisième côté (en {@6}) ?",
  "Trojuholník má strany ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Vypočítaj jeho obvod v {@6}.": "Un triangle a des côtés de ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ et ${@4}\\,\\text{{@5}}$. Calcule son périmètre en {@6}.",
  "Turisti prešli prvý deň {@0} km. Druhý deň prešli o {@1} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?": "Des randonneurs ont parcouru {@0} km le premier jour. Le deuxième jour, ils ont parcouru {@1} km de plus que le premier jour, et le troisième jour, la moitié de la distance du deuxième jour. Combien de kilomètres ont-ils parcourus en trois jours ?",
  "V košíku je {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "Dans le panier, il y a {@0} {@1}. ${@2}$ d'entre elles sont rouges. Combien de pommes sont rouges ?",
  "V košíku sú {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "Dans le panier, il y a {@0} {@1}. ${@2}$ d'entre elles sont rouges. Combien de pommes sont rouges ?",
  "Vlak odišiel o {@0} a do cieľa prišiel o {@1}. Koľko minút trvala cesta?": "Le train est parti à {@0} et il est arrivé à {@1}. Combien de minutes a duré le trajet ?",
  "Vyber správny údaj: {@0} …": "Choisis la bonne donnée : {@0} …",
  "Vydeľ ${@0} : {@1}$.": "Divise ${@0} : {@1}$.",
  "Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.": "Divise et regarde le reste. S'il reste quelque chose, il en faut un de plus.",
  "Vydeľ {@0} menovateľom {@1}.": "Divise {@0} par le dénominateur {@1}.",
  "Vydeľ číslo menovateľom a výsledok vynásob čitateľom.": "Divise le nombre par le dénominateur et multiplie le résultat par le numérateur.",
  "Vynásob ${@0}\\cdot {@1}$.": "Multiplie ${@0}\\cdot {@1}$.",
  "Vynásob {@0} čitateľom {@1}.": "Multiplie {@0} par le numérateur {@1}.",
  "Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.": "Tu as multiplié le côté par lui-même – c'est l'aire du carré. Le périmètre est la somme des longueurs des quatre côtés.",
  "Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.": "Tu as multiplié les côtés – c'est l'aire, pas le périmètre. Le périmètre est la somme des longueurs de tous les côtés.",
  "Vypočítaj $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.": "Calcule $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.",
  "Vypočítaj ${@0} - {@1}\\cdot({@2} - {@3})$.": "Calcule ${@0} - {@1}\\cdot({@2} - {@3})$.",
  "Vypočítaj ${@0}\\cdot 100$.": "Calcule ${@0}\\cdot 100$.",
  "Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{{@0}} + \\text{{@1}}$": "Calcule et écris le résultat en chiffres arabes : $\\text{{@0}} + \\text{{@1}}$",
  "Vypočítaj obvod obdĺžnika so stranami $a = {@0}\\,\\text{{@1}}$ a $b = {@2}\\,\\text{{@3}}$ (v {@4}).": "Calcule le périmètre d'un rectangle de côtés $a = {@0}\\,\\text{{@1}}$ et $b = {@2}\\,\\text{{@3}}$ (en {@4}).",
  "Vypočítaj obvod rovnostranného trojuholníka so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Calcule le périmètre d'un triangle équilatéral de côté ${@0}\\,\\text{{@1}}$ (en {@2}).",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Calcule le périmètre d'un carré de côté ${@0}\\,\\text{{@1}}$ (en {@2}).",
  "Vypočítaj postupne každý deň a nakoniec všetko sčítaj.": "Calcule chaque jour l'un après l'autre et additionne tout à la fin.",
  "Vypočítaj výhodne $125\\cdot {@0}\\cdot 8$.": "Calcule astucieusement $125\\cdot {@0}\\cdot 8$.",
  "Vypočítaj výhodne $25\\cdot {@0}\\cdot 4$.": "Calcule astucieusement $25\\cdot {@0}\\cdot 4$.",
  "Vypočítaj výhodne ${@0}\\cdot {@1}$.": "Calcule astucieusement ${@0}\\cdot {@1}$.",
  "Vypočítaj zátvorku ${@0} + {@1}$.": "Calcule la parenthèse ${@0} + {@1}$.",
  "Vypočítaj zátvorku ${@0} - {@1}$.": "Calcule la parenthèse ${@0} - {@1}$.",
  "Vypočítal si iba ${@0}$, teda jeden diel. Ešte ho vynásob čitateľom {@1}.": "Tu as calculé seulement ${@0}$, c'est-à-dire une part. Multiplie-la encore par le numérateur {@1}.",
  "Vyučovacia hodina trvá": "Une leçon dure",
  "Vzdialenosť z Bratislavy do Košíc je asi": "La distance de Paris à Nantes est d'environ",
  "Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.": "Convertis la plus grande unité dans la plus petite, puis ajoute l'autre partie.",
  "Výška dospelého človeka je asi": "Un adulte mesure environ",
  "Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.": "Tu as additionné tous les symboles. Mais un symbole plus petit placé avant un plus grand se soustrait : par exemple IX vaut 9, pas 11.",
  "Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. {@0} je ${@1}$.": "Tous les nombres ont le même nombre de chiffres, on les compare donc en partant de la gauche. {@0} est ${@1}$.",
  "Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.": "Regarde si la ligne a un début, une fin, ou ni l'un ni l'autre.",
  "Z číslic {@0} zostav {@1} štvorciferné číslo. Každú číslicu použi práve raz.": "Avec les chiffres {@0}, forme {@1} nombre à quatre chiffres. Utilise chaque chiffre exactement une fois.",
  "Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.": "Tu as oublié le troisième jour. On demande les trois jours.",
  "Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš {@0}.": "Tu as confondu les notions : le successeur est plus grand de 1, le prédécesseur plus petit de 1. Tu cherches {@0}.",
  "Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Tu as inversé les rôles du numérateur et du dénominateur : divise le nombre par le dénominateur et multiplie le résultat par le numérateur.",
  "Zaokrúhli ${@0}$ na stovky.": "Arrondis ${@0}$ aux centaines.",
  "Zaokrúhli obe čísla na stovky a odhadni výsledok: ${@0} {@1} {@2}$.": "Arrondis les deux nombres aux centaines et estime le résultat : ${@0} {@1} {@2}$.",
  "Zaokrúhli číslo ${@0}$ na {@1}.": "Arrondis le nombre ${@0}$ aux {@1}.",
  "Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.": "Tu as arrondi seulement le résultat. Pour une estimation, arrondis d'abord chaque nombre séparément, puis calcule avec les nombres arrondis.",
  "Zaokrúhlil si na iný rád. Na {@0} znamená, že všetky číslice vpravo od rádu {@1} nahradíš nulami.": "Tu as arrondi à un autre rang. Arrondir aux {@0} veut dire remplacer par des zéros tous les chiffres à droite du rang des {@1}.",
  "Zaokrúhľovanie na číselnej osi": "Arrondir sur la droite graduée",
  "Zapíš rímskymi číslicami číslo ${@0}$.": "Écris le nombre ${@0}$ en chiffres romains.",
  "Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.": "Écris à part les milliers, les centaines, les dizaines et les unités. Rappelle-toi : 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.",
  "Zisti, koľkokrát sa {@0} celé zmestí do {@1}.": "Cherche combien de fois {@0} rentre entièrement dans {@1}.",
  "Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).": "Trouve à quel rang se trouve le chiffre (unités, dizaines, centaines, milliers…).",
  "Zlomky na koláčoch a páse": "Fractions sur des gâteaux et une bande",
  "Zlomky nie sú rovnaké – porovnaj ich menovatele.": "Les fractions ne sont pas égales – compare leurs dénominateurs.",
  "Zlomky nie sú rovnaké – porovnaj ich čitatele.": "Les fractions ne sont pas égales – compare leurs numérateurs.",
  "Zlomky sú rovnaké.": "Les fractions sont égales.",
  "Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.": "Le signe est à l'envers. Quand le dénominateur est le même, la plus grande fraction est celle qui a le plus grand numérateur.",
  "Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.": "Un symbole ne doit pas être répété quatre fois, et on peut seulement soustraire I devant V et X, X devant L et C, C devant D et M.",
  "Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.": "Les symboles I, X, C ne doivent pas être répétés quatre fois de suite. Pour 4, 9, 40, 90, 400 et 900, utilise l'écriture avec soustraction.",
  "Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.": "Les symboles I, X, C, M peuvent se suivre au plus trois fois. Au lieu de quatre symboles identiques, utilise une soustraction.",
  "Zvyšok sa delí na dve rovnaké časti.": "Le reste se partage en deux parts égales.",
  "Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.": "La parenthèse est prioritaire. Ensuite la division et la multiplication, l'addition seulement à la fin.",
  "Zátvorka: ${@0} + {@1} = {@2}$. Delenie a násobenie: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Sčítanie: ${@9} + {@10} = {@11}$.": "Parenthèse : ${@0} + {@1} = {@2}$. Division et multiplication : ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Addition : ${@9} + {@10} = {@11}$.",
  "Zátvorka: ${@0} - {@1} = {@2}$. Násobenie: ${@3}\\cdot {@4} = {@5}$. Odčítanie: ${@6} - {@7} = {@8}$.": "Parenthèse : ${@0} - {@1} = {@2}$. Multiplication : ${@3}\\cdot {@4} = {@5}$. Soustraction : ${@6} - {@7} = {@8}$.",
  "cesty": "du trajet",
  "dcéra": "sa fille",
  "dcére": "sa fille",
  "dcéry": "de sa fille",
  "delitele čísla 12: 1, 2, 3, 4, 6, 12": "diviseurs de 12 : 1, 2, 3, 4, 6, 12",
  "desatina": "le dixième",
  "desatinu": "le dixième",
  "desatiny": "dixièmes",
  "dni": "jours",
  "dní": "jours",
  "euro": "euro",
  "hodinu": "heure",
  "koláč": "gâteau",
  "koláča": "du gâteau",
  "lodičiek": "barques",
  "lodičky": "barques",
  "menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M": "un symbole plus petit devant un plus grand se soustrait – seulement I devant V, X ; X devant L, C ; C devant D, M",
  "meria": "mesure",
  "miliónov": "millions",
  "milióny": "millions",
  "minul": "a-t-il dépensé",
  "minula": "a-t-elle dépensé",
  "mladšieho": "plus jeune",
  "mladší": "plus jeune",
  "nadol": "vers le bas",
  "nahor": "vers le haut",
  "najmenšie": "le plus petit",
  "najväčšie": "le plus grand",
  "napr. 1; 2; 4": "par ex. 1; 2; 4",
  "napr. 2/5": "par ex. 2/5",
  "napr. MCMXC": "par ex. MCMXC",
  "nasledovníka": "le successeur",
  "nepárne": "impair",
  "nie": "non",
  "nádrže": "du réservoir",
  "obalov": "boîtes",
  "obaly": "boîtes",
  "odčítaj": "soustrais",
  "odčítaš": "tu soustrais",
  "osmina": "le huitième",
  "osminu": "le huitième",
  "osminy": "le huitième",
  "polovica": "la moitié",
  "polovice": "la moitié",
  "polovicu": "la moitié",
  "polpriamka": "demi-droite",
  "polpriamka AB": "demi-droite AB",
  "predchodcu": "le prédécesseur",
  "priamka AB": "droite AB",
  "priemer d = 2 · r": "diamètre d = 2 · r",
  "pripočítaj": "ajoute",
  "pripočítaš": "tu ajoutes",
  "párne": "pair",
  "pásik": "bande",
  "pätina": "le cinquième",
  "pätinu": "le cinquième",
  "pätiny": "le cinquième",
  "päťkrát": "cinq fois",
  "rokov": "ans",
  "roky": "ans",
  "rovnaké diely": "parts égales",
  "rovnakých dielov": "parts égales",
  "spolu 50 €": "en tout 50 €",
  "staršia": "plus âgée",
  "staršieho": "plus âgé",
  "starší": "plus âgé",
  "stotisícov": "centaines de mille",
  "syn": "son fils",
  "syna": "de son fils",
  "synovi": "son fils",
  "také časti": "parts comme celle-là",
  "takých častí": "parts comme celle-là",
  "tretina": "le tiers",
  "tretinu": "le tiers",
  "tretiny": "le tiers",
  "vajec": "œufs",
  "vyfarbené sú {@0}": "{@0} sont coloriées",
  "vyfarbený je 1": "1 est coloriée",
  "vyfarbených je {@0}": "{@0} sont coloriées",
  "váži": "pèse",
  "zmestia": "peuvent monter",
  "zmestí": "peuvent monter",
  "zátvorky": "parenthèses",
  "zľava doprava": "de gauche à droite",
  "{@0} Preto nie, zvyšok po delení je {@1}.": "{@0} Donc non, le reste de la division est {@1}.",
  "{@0} Preto áno: ${@1} : {@2} = {@3}$.": "{@0} Donc oui : ${@1} : {@2} = {@3}$.",
  "{@0} ešte raz {@1}: ${@2} {@3} {@4}$.": "{@0} encore une fois {@1} : ${@2} {@3} {@4}$.",
  "{@0} je $100 {@1} 1$. Vynásob stovkou a potom {@2} číslo ešte raz.": "{@0}, c'est $100 {@1} 1$. Multiplie par cent, puis {@2} encore une fois le nombre.",
  "{@0} má {@1} {@2} a je {@3} {@4} ako {@5}. Koľko rokov bude {@6} o {@7} {@8}?": "{@0} a {@1} {@2} et est {@3} {@4} que {@5}. Quel âge aura {@6} dans {@7} {@8} ?",
  "{@0} neznamená {@1} {@2}. {@3} z {@4} vypočítaš delením: ${@5} : {@6}$.": "{@0} ne veut pas dire {@1} {@2}. {@3} de {@4} se calcule par une division : ${@5} : {@6}$.",
  "{@0} z {@1}: ${@2} : {@3} = {@4}$. {@5} spolu ${@6} + {@7} = {@8}$. Zostalo ${@9} - {@10} = {@11}$ {@12}.": "{@0} de {@1} : ${@2} : {@3} = {@4}$. {@5} en tout ${@6} + {@7} = {@8}$. Il reste ${@9} - {@10} = {@11}$ {@12}.",
  "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}": "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}",
  "{@0} {@1} {@2} {@3}. {@4} {@5} na hru a {@6} {@7} na knihu. Koľko eur {@8} zostalo?": "{@0} {@1} {@2} {@3}. {@4} de cette somme a servi à acheter un jeu, et {@6} {@7} à acheter un livre. Combien d'euros {@8} reste-t-il ?",
  "{@0} {@1} {@2}. Ostatné údaje sú príliš veľké alebo príliš malé.": "{@0} {@1} {@2}. Les autres données sont trop grandes ou trop petites.",
  "Úsečka AB začína v bode A a končí v bode B.": "Le segment AB commence au point A et se termine au point B.",
  "Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.": "Un segment s'arrête à ses deux extrémités et ne continue pas au-delà.",
  "Úsečka má dva krajné body.": "Un segment a deux extrémités.",
  "Úsečka má konečnú dĺžku.": "Un segment a une longueur finie.",
  "Úsečkový model súčtu a rozdielu": "Modèle en barres de la somme et de la différence",
  "Úsečku môžeme odmerať pravítkom.": "On peut mesurer un segment avec une règle.",
  "áno": "oui",
  "úsečka AB": "segment AB",
  "Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.": "Tu as soustrait les heures comme des nombres ordinaires. Mais une heure a 60 minutes, pas 100 – compte d'abord jusqu'à l'heure pile.",
  "Červené sú {@0} jablká": "{@0} pommes sont rouges",
  "Červených je {@0} jabĺk": "{@0} pommes sont rouges",
  "Čiara má dva krajné body A a B – je to úsečka.": "La ligne a deux extrémités A et B – c'est un segment.",
  "Čiara nemá začiatok ani koniec – je to priamka.": "La ligne n'a ni début ni fin – c'est une droite.",
  "Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.": "La ligne commence au point A et continue de l'autre côté – c'est une demi-droite.",
  "Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: ${@0} {@1} {@2}$.": "Les numérateurs sont égaux. Plus on partage le tout en parts nombreuses, plus les parts sont petites : ${@0} {@1} {@2}$.",
  "Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.": "Qu'y a-t-il sur l'image ? Les pointillés signifient que la ligne continue sans fin.",
  "Čísla nestačí napísať vedľa seba. Najprv premeň {@0} {@1} na {@2}, potom pripočítaj {@3}.": "Il ne suffit pas d'écrire les nombres l'un à côté de l'autre. Convertis d'abord {@0} {@1} en {@2}, puis ajoute {@3}.",
  "Čísla si napísal vedľa seba, akoby platilo 1 {@0} = 100 {@1}. Platí však 1 {@2} = 60 {@3}.": "Tu as écrit les nombres l'un à côté de l'autre, comme si 1 {@0} = 100 {@1}. Or 1 {@2} = 60 {@3}.",
  "Číslica hneď vpravo od rádu {@0} je {@1}, preto zaokrúhľujeme {@2}: ${@3} \\doteq {@4}$.": "Le chiffre juste à droite du rang des {@0} est {@1}, donc on arrondit {@2} : ${@3} \\doteq {@4}$.",
  "Číslica vpravo je {@0}. Zaokrúhli ${@1}$ na {@2}.": "Le chiffre à droite est {@0}. Arrondis ${@1}$ aux {@2}.",
  "Číslica vpravo od rádu {@0} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.": "Le chiffre à droite du rang des {@0} est 5 ou plus – dans ce cas, on arrondit vers le haut.",
  "Číslica vpravo od rádu {@0} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.": "Le chiffre à droite du rang des {@0} est plus petit que 5 – dans ce cas, on arrondit vers le bas.",
  "Číslica {@0} stojí na mieste {@1}, preto má hodnotu ${@2}\\cdot {@3} = {@4}$.": "Le chiffre {@0} est au rang des {@1}, il vaut donc ${@2}\\cdot {@3} = {@4}$.",
  "Číslice zoradíme od najmenšej, ale 0 nemôže byť na začiatku, preto ide na druhé miesto: ${@0}$.": "On range les chiffres du plus petit au plus grand, mais 0 ne peut pas être au début, il va donc à la deuxième place : ${@0}$.",
  "Číslice zoradíme od najmenšej: ${@0}$.": "On range les chiffres du plus petit au plus grand : ${@0}$.",
  "Číslice zoradíme od najväčšej po najmenšiu: ${@0}$.": "On range les chiffres du plus grand au plus petit : ${@0}$.",
  "Číslo": "Nombre",
  "Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.": "Un nombre ne peut pas commencer par zéro – il n'aurait pas quatre chiffres. Mets à la première place le plus petit chiffre qui n'est pas 0.",
  "Číslo {@0} je $100 {@1} 1$, preto {@2} jedenkrát celé číslo {@3}, nie iba jednotku.": "Le nombre {@0}, c'est $100 {@1} 1$, donc {@2} une fois le nombre entier {@3}, pas seulement une unité.",
  "čiara": "ligne",
  "Šestina": "Le sixième",
  "Štvorec má 4 rovnaké strany.": "Un carré a 4 côtés égaux.",
  "Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.": "Un carré a quatre côtés égaux : divise donc le périmètre par quatre, pas par deux.",
  "Štvrtina": "Le quart",
  "Štvrtinu": "Le quart",
  "šestina": "le sixième",
  "šestinu": "le sixième",
  "šestiny": "le sixième",
  "štvrtina": "le quart",
  "štvrtinu": "le quart",
  "štvrtiny": "le quart"
 }
});
