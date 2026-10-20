/* Français: preklad js/rocniky/r4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/r4/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "r4-cisla10000": {
   "title": "Les nombres jusqu'à 10 000 et au-delà",
   "summary": "Milliers, centaines, dizaines et unités ; lire, écrire et comparer les grands nombres.",
   "theory": [
    "<p>Chaque chiffre d'un nombre a sa <strong>place (son rang)</strong> : unités, dizaines, centaines, milliers, dizaines de mille…\n       Dix unités font une dizaine, dix dizaines font une centaine, dix centaines font un millier et dix milliers font $10\\,000$.</p>",
    {
     "fig": "r4-rady",
     "caption": "Le nombre $47\\,385$ a 4 dizaines de mille, 7 milliers, 3 centaines, 8 dizaines et 5 unités."
    },
    "<p>On écrit les grands nombres avec un espace tous les trois chiffres en partant de la droite : $8\\,206$, $35\\,000$. Ils se lisent ainsi plus facilement :\n       <em>huit mille deux cent six</em>, <em>trente-cinq mille</em>.</p>",
    "<p><strong>Comparer :</strong> le plus grand est le nombre qui a le plus de chiffres. S'ils ont autant de chiffres, on compare\n       en partant de la gauche – d'abord les milliers, puis les centaines, les dizaines et les unités. Par exemple $5\\,382 &gt; 5\\,297$, car 3 centaines, c'est plus que 2 centaines.</p>"
   ],
   "examples": [
    {
     "task": "Écris en chiffres : 6 milliers, 0 centaine, 4 dizaines et 9 unités.",
     "steps": [
      "Au rang des centaines, on écrit un zéro pour que les chiffres ne se décalent pas.",
      "$6\\,000 + 40 + 9 = 6\\,049$.",
      "<strong>Le nombre est $6\\,049$.</strong>"
     ]
    },
    {
     "task": "Compare les nombres $7\\,615$ et $7\\,651$.",
     "steps": [
      "Les deux nombres ont quatre chiffres, 7 milliers et 6 centaines.",
      "Dizaines : 1 est plus petit que 5.",
      "<strong>$7\\,615 &lt; 7\\,651$</strong>"
     ]
    }
   ]
  },
  "r4-scitanie": {
   "title": "Addition et soustraction posées",
   "summary": "Additionner et soustraire des nombres de plusieurs chiffres en colonnes.",
   "theory": [
    "<p>Pour poser une addition, on écrit les nombres <strong>l'un sous l'autre</strong> de façon que les unités soient sous les unités, les dizaines sous\n       les dizaines, etc. On calcule <strong>de droite à gauche</strong>, en commençant par les unités. Quand la somme d'une colonne dépasse 9, on écrit seulement les unités\n       et on retient 1 pour la colonne suivante.</p>",
    {
     "fig": "r4-scitanie",
     "caption": "Addition posée $3\\,476 + 2\\,858 = 6\\,334$. Les petits 1 en haut sont les retenues."
    },
    "<p>Pour poser une soustraction, on commence aussi par les unités. Si le chiffre du haut est plus petit que celui du bas, on lui ajoute 10\n       et on retient 1 pour la colonne suivante, qu'on ajoute au chiffre du bas.</p>",
    "<p><strong>Vérification :</strong> on vérifie le résultat d'une soustraction par une addition. Si $5\\,203 - 1\\,868 = 3\\,335$,\n       on doit avoir $3\\,335 + 1\\,868 = 5\\,203$.</p>"
   ],
   "examples": [
    {
     "task": "Pose et calcule $4\\,587 + 3\\,765$.",
     "steps": [
      "$\\begin{array}{r}4587 \\\\ +\\,3765 \\\\ \\hline 8352\\end{array}$",
      "Unités : $7 + 5 = 12$, on écrit 2 et on retient 1. Dizaines : $8 + 6 + 1 = 15$, on écrit 5 et on retient 1.",
      "Centaines : $5 + 7 + 1 = 13$, on écrit 3 et on retient 1. Milliers : $4 + 3 + 1 = 8$.",
      "<strong>Résultat : $8\\,352$</strong>"
     ]
    },
    {
     "task": "Pose et calcule $6\\,042 - 2\\,718$.",
     "steps": [
      "$\\begin{array}{r}6042 \\\\ -\\,2718 \\\\ \\hline 3324\\end{array}$",
      "Unités : 2 est plus petit que 8, donc $12 - 8 = 4$, on retient 1.",
      "Dizaines : $1 + 1 = 2$, $4 - 2 = 2$. Centaines : 0 est plus petit que 7, donc $10 - 7 = 3$, on retient 1.",
      "Milliers : $2 + 1 = 3$, $6 - 3 = 3$.",
      "<strong>Résultat : $3\\,324$</strong>. Vérification : $3\\,324 + 2\\,718 = 6\\,042$."
     ]
    }
   ]
  },
  "r4-nasobenie": {
   "title": "Multiplication et division posées",
   "summary": "Multiplier par un nombre à un chiffre et à deux chiffres, diviser par un nombre à un chiffre avec reste.",
   "theory": [
    "<p><strong>Multiplication posée par un nombre à un chiffre :</strong> on multiplie successivement les unités, les dizaines, les centaines…\n       Si le résultat dépasse 9, on écrit les unités, on retient les dizaines et on les ajoute au produit suivant.</p>",
    "<p><strong>Multiplication par un nombre à deux chiffres :</strong> on multiplie d'abord par les unités, puis par les dizaines. Le deuxième produit\n       partiel s'écrit décalé d'un rang vers la gauche. Enfin, on additionne les produits partiels.</p>",
    {
     "fig": "r4-nasobenie",
     "caption": "$243\\cdot 32$ : d'abord $243\\cdot 2 = 486$, puis $243\\cdot 3 = 729$ décalé vers la gauche (cela vaut $7\\,290$). En tout $7\\,776$."
    },
    "<p><strong>Division posée :</strong> on divise en partant de la gauche. On prend assez de chiffres pour pouvoir diviser, on trouve le quotient et le reste,\n       on abaisse le chiffre suivant et on continue. S'il reste quelque chose à la fin, c'est le <strong>reste</strong>, qui est toujours plus petit que le diviseur.\n       Vérification : $\\text{quotient}\\cdot\\text{diviseur} + \\text{reste} = \\text{dividende}$.</p>"
   ],
   "examples": [
    {
     "task": "Pose et calcule $1\\,627\\cdot 4$.",
     "steps": [
      "$\\begin{array}{r}1627 \\\\ \\cdot\\,4 \\\\ \\hline 6508\\end{array}$",
      "$4\\cdot 7 = 28$, on écrit 8 et on retient 2. $4\\cdot 2 + 2 = 10$, on écrit 0 et on retient 1.",
      "$4\\cdot 6 + 1 = 25$, on écrit 5 et on retient 2. $4\\cdot 1 + 2 = 6$.",
      "<strong>Résultat : $6\\,508$</strong>"
     ]
    },
    {
     "task": "Pose et calcule $947 : 6$.",
     "steps": [
      "$9 : 6 = 1$, reste 3.",
      "On abaisse le 4 : $34 : 6 = 5$, reste 4.",
      "On abaisse le 7 : $47 : 6 = 7$, reste 5.",
      "<strong>$947 : 6 = 157$, reste 5.</strong> Vérification : $157\\cdot 6 + 5 = 947$."
     ]
    }
   ]
  },
  "r4-slovne": {
   "title": "Problèmes avec plusieurs opérations",
   "summary": "Des problèmes qu'on résout en plusieurs étapes : achats, partage en groupes, comparaisons.",
   "theory": [
    "<p>Certains problèmes ne peuvent pas se résoudre avec un seul calcul. On avance par étapes :</p>\n       <ol><li>Qu'est-ce que je sais ? Qu'est-ce que je cherche ?</li><li>Que dois-je trouver d'abord pour pouvoir répondre ?</li>\n       <li>Je calcule chaque étape et je l'écris.</li><li>J'écris la réponse et je vérifie qu'elle a du sens.</li></ol>",
    "<p><strong>Mots utiles :</strong> <em>… de plus / de moins</em> – on additionne ou on soustrait ;\n       <em>… fois plus / moins</em> – on multiplie ou on divise ; <em>partagé de façon égale</em>, <em>… chacun</em> – on divise ;\n       <em>il reste</em>, <em>on a rendu</em> – on soustrait.</p>",
    "<p>On peut aussi écrire les étapes en une seule expression avec des parenthèses, par exemple $50 - 3\\cdot 12 = 50 - 36 = 14$.\n       N'oublie pas les priorités des opérations : d'abord la multiplication et la division, ensuite l'addition et la soustraction.</p>"
   ],
   "examples": [
    {
     "task": "Maman a acheté 3 livres à 12 euros chacun et a payé avec un billet de 50 euros. Combien d'euros lui a-t-on rendus ?",
     "steps": [
      "D'abord, on trouve le prix des livres : $3\\cdot 12 = 36$ euros.",
      "Ensuite, la monnaie rendue : $50 - 36 = 14$ euros.",
      "En une seule expression : $50 - 3\\cdot 12 = 14$.",
      "<strong>Réponse : on a rendu 14 euros à Maman.</strong>"
     ]
    },
    {
     "task": "4 classes de 23 élèves partent en sortie. Elles voyagent en car, avec 46 élèves dans chaque car. Combien de cars sont partis ?",
     "steps": [
      "Nombre d'élèves : $4\\cdot 23 = 92$.",
      "Nombre de cars : $92 : 46 = 2$.",
      "<strong>Réponse : 2 cars sont partis.</strong>"
     ]
    }
   ]
  },
  "r4-rimske": {
   "title": "Les chiffres romains",
   "summary": "Les symboles I, V, X, L, C, D, M et l'écriture des nombres en chiffres romains.",
   "theory": [
    "<p>Les Romains de l'Antiquité écrivaient les nombres avec sept lettres. On trouve encore aujourd'hui des chiffres romains sur les horloges, dans le nom des siècles\n       ou sur les bâtiments.</p>",
    {
     "fig": "r4-rimske",
     "caption": "Les chiffres romains et leurs valeurs."
    },
    "<p><strong>Règles :</strong> on additionne les valeurs des symboles : $\\text{XVI} = 10 + 5 + 1 = 16$. Un même symbole (I, X, C, M)\n       peut s'écrire au plus trois fois de suite : $\\text{III} = 3$, $\\text{XXX} = 30$.</p>",
    "<p>Si un symbole plus petit est placé <strong>devant</strong> un plus grand, on le soustrait : $\\text{IV} = 4$, $\\text{IX} = 9$, $\\text{XL} = 40$,\n       $\\text{XC} = 90$. C'est pourquoi on n'écrit pas 4 IIII, mais IV.</p>"
   ],
   "examples": [
    {
     "task": "Quel nombre est écrit en chiffres romains $\\text{LXXIV}$ ?",
     "steps": [
      "On découpe : $\\text{L} = 50$, $\\text{XX} = 20$, $\\text{IV} = 4$.",
      "$50 + 20 + 4 = 74$.",
      "<strong>$\\text{LXXIV} = 74$</strong>"
     ]
    },
    {
     "task": "Écris le nombre 39 en chiffres romains.",
     "steps": [
      "$39 = 30 + 9$.",
      "$30 = \\text{XXX}$, $9 = \\text{IX}$.",
      "<strong>$39 = \\text{XXXIX}$</strong>"
     ]
    }
   ]
  },
  "r4-utvary": {
   "title": "Angle, triangle et quadrilatères",
   "summary": "Angle aigu, droit et obtus ; triangle, rectangle, carré et autres quadrilatères.",
   "theory": [
    "<p>Un <strong>angle</strong> est formé de deux côtés qui partent d'un même point – le <strong>sommet</strong>.\n       Un angle droit a la forme du coin d'un cahier. Un angle plus petit qu'un angle droit est <strong>aigu</strong>, un angle plus grand qu'un angle droit\n       (mais qui n'est pas encore plat) est <strong>obtus</strong>.</p>",
    {
     "fig": "r4-uhly",
     "caption": "Angle aigu, droit et obtus. On marque l'angle droit par un petit carré."
    },
    "<p>Un <strong>triangle</strong> a 3 côtés, 3 sommets et 3 angles. Un <strong>quadrilatère</strong> a 4 côtés, 4 sommets et 4 angles.\n       Le <strong>rectangle</strong> est un quadrilatère qui a 4 angles droits, ses côtés opposés ont la même longueur.\n       Le <strong>carré</strong> est un rectangle dont les 4 côtés ont la même longueur.</p>",
    {
     "fig": "r4-stvoruholniky",
     "caption": "Le carré et le rectangle ont tous leurs angles droits. Tout carré est aussi un rectangle."
    }
   ],
   "examples": [
    {
     "task": "L'angle entre les aiguilles d'une horloge à 3:00 est-il aigu, droit ou obtus ?",
     "steps": [
      "La petite aiguille montre le 3, la grande le 12.",
      "Entre elles, il y a un quart de tour – la forme du coin d'un cahier.",
      "<strong>C'est un angle droit.</strong>"
     ]
    },
    {
     "task": "Un rectangle a un côté de 7 cm et un autre de 4 cm. Combien mesurent les deux autres côtés ?",
     "steps": [
      "Les côtés opposés d'un rectangle ont la même longueur.",
      "<strong>Les deux autres côtés mesurent 7 cm et 4 cm.</strong>"
     ]
    }
   ]
  },
  "r4-obvod": {
   "title": "Périmètre et aire",
   "summary": "Le périmètre comme longueur du bord, l'aire comme nombre de carreaux qui recouvrent la figure.",
   "theory": [
    "<p>Le <strong>périmètre</strong> d'une figure est la longueur de son bord – la somme des longueurs de tous ses côtés. Le périmètre d'un rectangle de côtés\n       $a$ et $b$ est $a + b + a + b$, donc $2\\cdot(a + b)$. Le périmètre d'un carré de côté $a$ est $4\\cdot a$.</p>",
    "<p>L'<strong>aire</strong> indique la place qu'occupe une figure. On la trouve en comptant les carreaux qui la recouvrent.\n       Un carreau de 1 cm de côté a une aire de 1 centimètre carré ($1\\,\\text{cm}^2$).</p>",
    {
     "fig": "r4-obvod-obsah",
     "caption": "Rectangle de 4 cm × 3 cm : le périmètre est la longueur du bord bleu, l'aire est le nombre de carreaux à l'intérieur."
    },
    "<p>Pour un rectangle, on n'a pas besoin de compter les carreaux un par un : dans chaque rangée, il y en a autant que la longueur d'un côté,\n       et il y a autant de rangées que la longueur de l'autre côté. Donc l'aire $= a\\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule le périmètre d'un rectangle de côtés 8 cm et 5 cm.",
     "steps": [
      "$o = 8 + 5 + 8 + 5$.",
      "$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$.",
      "<strong>Le périmètre est de $26\\,\\text{cm}$.</strong>"
     ]
    },
    {
     "task": "Un carré a un périmètre de 36 cm. Combien mesure son côté ?",
     "steps": [
      "Le carré a 4 côtés de même longueur, en tout 36 cm.",
      "$36 : 4 = 9$.",
      "<strong>Le côté mesure $9\\,\\text{cm}$.</strong>"
     ]
    }
   ]
  },
  "r4-jednotky": {
   "title": "Conversions d'unités et lecture de données",
   "summary": "Unités de longueur, de masse, de contenance et de temps ; lire des données dans un tableau et un diagramme.",
   "theory": [
    "<p><strong>Longueur :</strong> $1\\,\\text{km} = 1\\,000\\,\\text{m}$, $1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$,\n       $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{cm} = 10\\,\\text{mm}$.<br>\n       <strong>Masse :</strong> $1\\,\\text{t} = 1\\,000\\,\\text{kg}$, $1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$.<br>\n       <strong>Contenance :</strong> $1\\,\\text{hl} = 100\\,\\text{l}$, $1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$.<br>\n       <strong>Temps :</strong> $1\\,\\text{h} = 60\\,\\text{min}$, $1\\,\\text{min} = 60\\,\\text{s}$, 1 jour = 24 h.</p>",
    {
     "fig": "r4-jednotky",
     "caption": "Quand on passe d'une grande unité à une plus petite, le nombre devient plus grand – on multiplie. Dans l'autre sens, on divise."
    },
    "<p>On lit souvent les <strong>données</strong> dans un tableau ou un diagramme en bâtons. La hauteur du bâton indique la valeur –\n       on la lit sur l'axe vertical. Avec les données, on peut ensuite comparer (combien de plus) et additionner (combien en tout).</p>"
   ],
   "examples": [
    {
     "task": "Combien de centimètres font 4 m 35 cm ?",
     "steps": [
      "$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$.",
      "$400 + 35 = 435$.",
      "<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Combien de kilogrammes font $6\\,000\\,\\text{g}$ ?",
     "steps": [
      "$1\\,\\text{kg} = 1\\,000\\,\\text{g}$, on passe à une unité plus grande, donc on divise.",
      "$6\\,000 : 1\\,000 = 6$.",
      "<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, donc ${@3} : {@4} = {@5}$. Ainsi ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, donc ${@3}\\cdot {@4} = {@5}$. Ainsi ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$\\text{{@0}} = {@1}$.": "$\\text{{@0}} = {@1}$.",
  "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, le périmètre est ${@4}\\,\\text{{@5}}$.",
  "$o = 4\\cdot {@0} = {@1}$, obvod je ${@2}\\,\\text{{@3}}$.": "$o = 4\\cdot {@0} = {@1}$, le périmètre est ${@2}\\,\\text{{@3}}$.",
  "${@0} + {@1} + {@2} + {@3} = {@4}$. Kde je 0 kusov, píšeme na to miesto nulu.": "${@0} + {@1} + {@2} + {@3} = {@4}$. Là où il y a 0, on écrit un zéro à cette place.",
  "${@0} - {@1} = 0$, nulu na začiatok nepíšeme": "${@0} - {@1} = 0$, on n'écrit pas de zéro au début",
  "${@0} - {@1} = {@2}$, píšeme {@3}": "${@0} - {@1} = {@2}$, on écrit {@3}",
  "${@0} : {@1} = {@2}$, lebo ${@3}\\cdot {@4} = {@5}$, zvyšok {@6}": "${@0} : {@1} = {@2}$, car ${@3}\\cdot {@4} = {@5}$, reste {@6}",
  "${@0} = {@1}$. Hlasovalo {@2} {@3}.": "${@0} = {@1}$. Ont voté : {@2} {@3}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, pripočítame ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, on ajoute ${@4}\\,\\text{{@5}}$ : ${@6} + {@7} = {@8}$.",
  "= 12 štvorčekov = 12 cm²": "= 12 petits carrés = 12 cm²",
  "Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.": "S'il avait deux angles droits, ses côtés seraient parallèles et ne se rencontreraient pas.",
  "Ako sa volá tento útvar? Vyber najpresnejší názov.": "Comment s'appelle cette figure ? Choisis le nom le plus précis.",
  "Ako zapíšeš rímskymi číslicami {@0}?": "Comment écris-tu {@0} en chiffres romains ?",
  "Aká dlhá je vodorovná strana obdĺžnika (v cm)?": "Quelle est la longueur du côté horizontal du rectangle (en cm) ?",
  "Aká dlhá je zvislá strana obdĺžnika (v cm)?": "Quelle est la longueur du côté vertical du rectangle (en cm) ?",
  "Aké číslo je zapísané rímskymi číslicami $\\text{{@0}}$?": "Quel nombre est écrit en chiffres romains $\\text{{@0}}$ ?",
  "Akú hodnotu má rímska číslica $\\text{{@0}}$?": "Quelle est la valeur du chiffre romain $\\text{{@0}}$ ?",
  "Akú hodnotu má časť $\\text{{@0}}$?": "Quelle est la valeur de la partie $\\text{{@0}}$ ?",
  "Aký je tento uhol?": "Comment est cet angle ?",
  "Chýbajúci sčítanec zistíme odčítaním: ${@0} - {@1} = {@2}$.": "On trouve le terme qui manque par une soustraction : ${@0} - {@1} = {@2}$.",
  "Desiatky": "Dizaines",
  "Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.": "Les enfants de la classe ont voté pour leur fruit préféré. Chaque enfant a voté une fois.",
  "Deľ zľava a zvyšok na konci musí byť menší ako {@0}.": "Divise en partant de la gauche ; le reste à la fin doit être plus petit que {@0}.",
  "Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.": "Divise en partant de la gauche. Prends assez de chiffres pour pouvoir diviser, puis abaisse les chiffres suivants un par un.",
  "Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.": "Pour le périmètre, tu n'as compté que deux côtés. Le périmètre est formé des quatre côtés.",
  "Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.": "Vers la droite (vers une unité plus petite), on multiplie ; vers la gauche (vers une unité plus grande), on divise.",
  "Druhý súčin posuň o miesto doľava (znamená ${@0}$) a sčítaj: koľko je ${@1} + {@2}$?": "Décale le deuxième produit d'un rang vers la gauche (il vaut ${@0}$) et additionne : combien font ${@1} + {@2}$ ?",
  "Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.": "Tu n'as pas décalé le deuxième produit partiel d'un rang vers la gauche. Tu multiplies par les dizaines, cela vaut donc dix fois plus.",
  "Dvakrát": "Deux fois",
  "Hodina má 60 minút a minúta 60 sekúnd.": "Une heure a 60 minutes et une minute a 60 secondes.",
  "Hodnotu {@0} má rímska číslica {@1}, nie {@2}.": "La valeur {@0} correspond au chiffre romain {@1}, pas {@2}.",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.": "N'additionne pas les valeurs. « Combien de plus » est une différence – soustrais la plus petite valeur de la plus grande.",
  "Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.": "Additionne les valeurs des symboles. Si un symbole plus petit est placé avant un plus grand (par ex. IV, IX, XL, XC), soustrais-le.",
  "Hľadáme, koľko sme odčítali: ${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "On cherche combien on a soustrait : ${@0} - {@1} = {@2}$. Vérification : ${@3} - {@4} = {@5}$.",
  "I = 1, V = 5, X = 10 – a ďalej L, C, D, M.": "I = 1, V = 5, X = 10 – puis L, C, D, M.",
  "Jakub": "Jules",
  "Je toto tvrdenie pravdivé? „{@0}“": "Cette affirmation est-elle vraie ? « {@0} »",
  "Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.": "Un triangle a 3 angles, deux triangles ont $2\\cdot 3 = 6$ angles.",
  "Jednotky": "Unités",
  "Každý obdĺžnik je štvorec.": "Tout rectangle est un carré.",
  "Každý uhol má 2 ramená a 1 vrchol.": "Tout angle a 2 côtés et 1 sommet.",
  "Každý štvorec je obdĺžnik.": "Tout carré est un rectangle.",
  "Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. {@0}": "Chaque petit carré du quadrillage a un côté de 1 cm. Trouve le périmètre (en cm) et l'aire (en cm²) du rectangle colorié. Écris-les sous la forme « périmètre; aire ». {@0}",
  "Koľko autobusov po {@0} miest treba, aby sa zmestili všetci?": "Combien de bus de {@0} places faut-il pour que tout le monde puisse monter ?",
  "Koľko detí hlasovalo za {@0}?": "Combien d'enfants ont voté pour les {@0} ?",
  "Koľko eur majú spolu? Vypočítaj ${@0} + {@1} + {@2}$.": "Combien d'euros ont-ils ensemble ? Calcule ${@0} + {@1} + {@2}$.",
  "Koľko eur má {@0}?": "Combien d'euros a {@0} ?",
  "Koľko eur vydali? Vypočítaj ${@0} - {@1}$.": "Combien d'euros a-t-on rendus ? Calcule ${@0} - {@1}$.",
  "Koľko je ${@0} + {@1}$ (dve susedné strany)?": "Combien font ${@0} + {@1}$ (deux côtés consécutifs) ?",
  "Koľko je riadkov?": "Combien y a-t-il de rangées ?",
  "Koľko kilogramov zemiakov zostalo po predaji?": "Combien de kilogrammes de pommes de terre restait-il après la vente ?",
  "Koľko pravých uhlov má obdĺžnik?": "Combien d'angles droits a un rectangle ?",
  "Koľko pravých uhlov má štvorec?": "Combien d'angles droits a un carré ?",
  "Koľko ramien má jeden uhol?": "Combien de côtés a un angle ?",
  "Koľko uhlov majú spolu dva trojuholníky?": "Combien d'angles ont en tout deux triangles ?",
  "Koľko uhlov má trojuholník?": "Combien d'angles a un triangle ?",
  "Koľko vrcholov má štvoruholník?": "Combien de sommets a un quadrilatère ?",
  "Koľko vriec po {@0} kg sa z nich naplní?": "Combien de sacs de {@0} kg peut-on en remplir ?",
  "Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?": "Combien de personnes partent en sortie en tout (élèves et enseignants) ?",
  "Koľko štvorčekov je v jednom riadku?": "Combien de petits carrés y a-t-il dans une rangée ?",
  "Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) {@0}": "Combien de petits carrés de 1 cm × 1 cm recouvrent le rectangle colorié ? (Écris l'aire en cm².) {@0}",
  "Koľkokrát sa {@0} zmestí do {@1}?": "Combien de fois {@0} rentre-t-il dans {@1} ?",
  "Ktorá číslica je v čísle ${@0}$ na mieste {@1}?": "Quel chiffre se trouve au rang des {@1} dans le nombre ${@0}$ ?",
  "Ktoré číslo je o {@0} menšie ako ${@1}$?": "Quel nombre est plus petit de {@0} que ${@1}$ ?",
  "Ktoré číslo je o {@0} väčšie ako ${@1}$?": "Quel nombre est plus grand de {@0} que ${@1}$ ?",
  "Lucia": "Lucie",
  "Martin": "Martin",
  "Meníš na menšiu jednotku – číslo sa zväčší, násob.": "Tu convertis vers une unité plus petite – le nombre devient plus grand : multiplie.",
  "Meníš na väčšiu jednotku – číslo sa zmenší, deľ.": "Tu convertis vers une unité plus grande – le nombre devient plus petit : divise.",
  "Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.": "Un symbole plus petit placé avant un plus grand se soustrait, il ne s'ajoute pas. Par exemple IV = 5 − 1 = 4.",
  "Má 3 strany a 3 vrcholy – je to trojuholník.": "Il a 3 côtés et 3 sommets – c'est un triangle.",
  "Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.": "Il a 4 angles droits et tous ses côtés de même longueur – c'est un carré.",
  "Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.": "Il a 4 angles droits, mais ses côtés consécutifs n'ont pas la même longueur – c'est un rectangle.",
  "Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.": "Il a 4 côtés, mais ses angles ne sont pas droits – c'est un quadrilatère quelconque.",
  "Na výlet idú {@0} triedy po {@1} žiakov a s nimi {@2} učitelia. Jeden autobus má {@3} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?": "{@0} classes de {@1} élèves partent en sortie avec {@2} enseignants. Un bus a {@3} places. Combien de bus faut-il commander pour que tout le monde puisse monter ?",
  "Najprv ${@0}\\cdot {@1} = {@2}$, potom ${@3}\\cdot {@4} = {@5}$ (píšeme o miesto doľava, znamená to ${@6}$). Sčítame: ${@7} + {@8} = {@9}$.": "D'abord ${@0}\\cdot {@1} = {@2}$, puis ${@3}\\cdot {@4} = {@5}$ (on l'écrit décalé d'un rang vers la gauche, cela vaut ${@6}$). On additionne : ${@7} + {@8} = {@9}$.",
  "Najprv cena nákupu: ${@0}\\cdot {@1} = {@2}$ {@3}. Potom vydané peniaze: ${@4} - {@5} = {@6}$. Vydali {@7} {@8} {@9}.": "D'abord le prix des achats : ${@0}\\cdot {@1} = {@2}$ {@3}. Ensuite la monnaie rendue : ${@4} - {@5} = {@6}$. On {@7} a rendu {@8} {@9}.",
  "Najprv násob jednotkami: koľko je ${@0}\\cdot {@1}$?": "Multiplie d'abord par les unités : combien font ${@0}\\cdot {@1}$ ?",
  "Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.": "Convertis d'abord la plus grande unité dans la plus petite, puis ajoute le reste.",
  "Najprv premeň väčšiu jednotku: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Convertis d'abord la plus grande unité : ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.": "Trouve d'abord combien de kilogrammes il reste, puis combien de fois un sac rentre dedans.",
  "Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.": "Trouve d'abord combien ont coûté tous les achats, puis soustrais-le du billet.",
  "Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.": "Écris les nombres l'un sous l'autre, les unités sous les unités, et additionne en partant de la droite. N'oublie pas les retenues.",
  "Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.": "Écris les chiffres à la suite dans l'ordre milliers, centaines, dizaines, unités. N'oublie pas les zéros.",
  "Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.": "Multiplie en partant de la droite : d'abord les unités, puis les dizaines, les centaines… Retiens les dizaines du produit.",
  "Obdĺžnik 4 krát 3 v štvorcovej sieti": "Rectangle de 4 sur 3 dans un quadrillage",
  "Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.": "Le rectangle a deux côtés plus longs et deux côtés plus courts. Additionne les quatre.",
  "Obdĺžnik má protiľahlé strany rovnako dlhé.": "Les côtés opposés d'un rectangle ont la même longueur.",
  "Obdĺžnik má všetky 4 uhly pravé.": "Les 4 angles d'un rectangle sont droits.",
  "Obdĺžnik má {@0} {@1} po {@2} štvorčekoch: ${@3}\\cdot {@4} = {@5}$. Obsah je ${@6}\\,\\text{cm}^2$.": "Le rectangle a {@0} {@1} de {@2} petits carrés : ${@3}\\cdot {@4} = {@5}$. L'aire est ${@6}\\,\\text{cm}^2$.",
  "Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.": "Un rectangle peut avoir des côtés consécutifs de longueurs différentes, par exemple 5 cm et 2 cm.",
  "Obdĺžnik v štvorcovej sieti": "Rectangle dans un quadrillage",
  "Obsah: koľko je ${@0}\\cdot {@1}$?": "Aire : combien font ${@0}\\cdot {@1}$ ?",
  "Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.": "Le périmètre est la longueur du bord, l'aire est le nombre de petits carrés à l'intérieur.",
  "Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.": "Le périmètre n'est pas le nombre de petits carrés le long du bord, mais la longueur du bord. Additionne les longueurs de tous les côtés.",
  "Obvod tvoria 4 rovnaké strany: ${@0} : 4 = {@1}$, strana má ${@2}\\,\\text{{@3}}$.": "Le périmètre est formé de 4 côtés égaux : ${@0} : 4 = {@1}$, le côté mesure ${@2}\\,\\text{{@3}}$.",
  "Obvod tvoria dve také dvojice strán: koľko je $2\\cdot {@0}$?": "Le périmètre est formé de deux paires de côtés comme celle-là : combien font $2\\cdot {@0}$ ?",
  "Obvod štvorca vydeľ štyrmi.": "Divise le périmètre du carré par quatre.",
  "Obvod: koľko je $2\\cdot({@0} + {@1})$?": "Périmètre : combien font $2\\cdot({@0} + {@1})$ ?",
  "Od menšenca odčítaj rozdiel.": "Soustrais la différence du premier terme.",
  "Od súčtu odčítaj známy sčítanec.": "Soustrais de la somme le terme connu.",
  "Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.": "Soustrais en partant de la droite. Si le chiffre du haut est plus petit, ajoute-lui 10 et retiens 1 pour la colonne suivante.",
  "Odčítaj {@0}. Pozor na prechod cez rád.": "Soustrais {@0}. Attention au passage du rang.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu celého nákupu.": "Tu as soustrait le prix d'un seul objet. Il y avait {@0} objets achetés : calcule d'abord le prix de tous les achats.",
  "Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "Un angle aigu est plus petit que le coin d'un cahier. Compare cet angle avec le coin d'un cahier.",
  "Ostrý, pravý a tupý uhol": "Angle aigu, droit et obtus",
  "Porovnaj najprv počet číslic, potom číslice zľava doprava.": "Compare d'abord le nombre de chiffres, puis les chiffres de gauche à droite.",
  "Porovnaj uhol s rohom zošita (pravým uhlom).": "Compare l'angle avec le coin d'un cahier (un angle droit).",
  "Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: ${@0} {@1} {@2}$.": "On compare rang par rang en partant de la gauche. Le premier chiffre différent décide : ${@0} {@1} {@2}$.",
  "Potom desiatkami: koľko je ${@0}\\cdot {@1}$?": "Puis par les dizaines : combien font ${@0}\\cdot {@1}$ ?",
  "Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.": "Regarde jusqu'à quelle ligne monte la colonne et lis le nombre à gauche.",
  "Počet ľudí: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, zvyšok {@7}.": "Nombre de personnes : ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, reste {@7}.",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.": "Tu as calculé avec 100. Pour le temps, on a $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.",
  "Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.": "Un angle droit a exactement la forme du coin d'un cahier et on le marque par un petit carré. Compare cet angle avec le coin d'un cahier.",
  "Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.": "Imagine la figure et compte ses sommets, ses côtés ou ses angles.",
  "Premeň: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Convertis : ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Premeň: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$": "Convertis : ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$",
  "Prevody jednotiek dĺžky a hmotnosti": "Conversions d'unités de longueur et de masse",
  "Prečítaj hodnotu každého stĺpca a všetky sčítaj.": "Lis la valeur de chaque colonne et additionne-les toutes.",
  "Prečítaj obe hodnoty a odčítaj menšiu od väčšej.": "Lis les deux valeurs et soustrais la plus petite de la plus grande.",
  "Pripočítaj hlasy za {@0}: koľko je spolu teraz?": "Ajoute les voix pour les {@0} : combien cela fait-il maintenant ?",
  "Pripočítaj {@0}. Pozor na prechod cez rád.": "Ajoute {@0}. Attention au passage du rang.",
  "Pripíš {@0}: koľkokrát sa {@1} zmestí do {@2}?": "Abaisse {@0} : combien de fois {@1} rentre-t-il dans {@2} ?",
  "Písomné násobenie 243 krát 32": "Multiplication posée 243 fois 32",
  "Písomné sčítanie 3476 plus 2858": "Addition posée 3476 plus 2858",
  "Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.": "Tu as mis dans les sacs toutes les pommes de terre, même celles qui ont été vendues. Soustrais d'abord ce qui a été vendu.",
  "Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.": "Décompose le nombre en dizaines et en unités. Rappelle-toi : 4 = IV, 9 = IX, 40 = XL, 90 = XC.",
  "Rozložíme: {@0}. Spolu ${@1} = \\text{{@2}}$.": "On décompose : {@0}. En tout ${@1} = \\text{{@2}}$.",
  "Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.": "Tu as compté les rangs à partir de la gauche. Les unités, c'est le dernier chiffre à droite ; à partir de là, avance vers la gauche.",
  "Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste {@0} je číslica {@1}.": "On lit les rangs à partir de la droite : unités, dizaines, centaines, milliers, dizaines de mille. Au rang des {@0}, il y a le chiffre {@1}.",
  "Rímske číslice a ich hodnoty": "Les chiffres romains et leurs valeurs",
  "Samuel": "Samuel",
  "Skúška: ${@0} + {@1} = {@2}$.": "Vérification : ${@0} + {@1} = {@2}$.",
  "Spoj obe časti: ako zapíšeš {@0}?": "Rassemble les deux parties : comment écris-tu {@0} ?",
  "Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.": "Rappelle-toi : le rectangle a 4 angles droits, le carré a en plus tous ses côtés égaux.",
  "Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).": "Compte les côtés et regarde si les angles sont droits (petit carré dans le coin).",
  "Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.": "Compte les côtés de la figure. Le triangle a 3 côtés, le quadrilatère 4.",
  "Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.": "Compte toutes les personnes, enseignants compris. S'il reste quelqu'un après la division, il faut un bus de plus.",
  "Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.": "Compte les petits carrés d'une rangée et multiplie par le nombre de rangées.",
  "Stovky": "Centaines",
  "Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.": "Tu as multiplié le côté par lui-même – ce serait l'aire. Le périmètre est la somme des quatre côtés.",
  "Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.": "Tu as additionné les côtés. L'aire est le nombre de petits carrés : les petits carrés d'une rangée fois le nombre de rangées.",
  "Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.": "Tu as multiplié les côtés – ce serait l'aire. Le périmètre est la longueur du bord, il faut additionner les côtés.",
  "Strany sú {@0} cm a {@1} cm. Obvod: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Obsah: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.": "Les côtés mesurent {@0} cm et {@1} cm. Périmètre : $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Aire : ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.",
  "Stĺpcový diagram hlasovania": "Diagramme en barres du vote",
  "Stĺpec „{@0}“ siaha po čiaru {@1}. Hlasovalo {@2} {@3}.": "La colonne « {@0} » monte jusqu'à la ligne {@1}. Ont voté : {@2} {@3}.",
  "Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{{@0}}$?": "Additionne les valeurs de toutes les parties. Quel nombre est $\\text{{@0}}$ ?",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.": "Tu as additionné seulement deux côtés. Le rectangle a quatre côtés : multiplie encore par deux la somme de deux côtés consécutifs.",
  "Tabuľka miestnych hodnôt pre číslo 47 385": "Tableau de numération pour le nombre 47 385",
  "Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.": "On peut écrire le même symbole au plus trois fois de suite. Au lieu de quatre symboles identiques, utilise une soustraction, par exemple 4 = IV.",
  "Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.": "Cette figure a des angles droits (petit carré dans le coin), elle a donc un nom plus précis.",
  "Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.": "Cette figure n'a pas d'angles droits. Le carré comme le rectangle ont tous leurs angles droits.",
  "Tisíce": "Milliers",
  "To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.": "Ça, c'est le prix de tous les achats. Trouve encore combien d'euros on a rendus sur le billet.",
  "To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.": "Ça, c'est le périmètre – la longueur du bord. L'aire est le nombre de petits carrés à l'intérieur.",
  "To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.": "Ça, c'est le nombre de sortes de fruits. Additionne combien d'enfants ont voté pour chaque fruit.",
  "To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po {@0} kg sa z nich naplní.": "Ça, ce sont les kilogrammes qui restent. Trouve encore combien de sacs de {@0} kg on peut en remplir.",
  "Toľko má len {@0}. Pýtame sa, koľko majú spolu všetky tri deti.": "C'est seulement ce qu'a {@0}. On demande combien les trois enfants ont ensemble.",
  "Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.": "Ça, c'est le nombre d'angles d'un triangle. Il y a deux triangles.",
  "Treba {@0} {@1}.": "Il faut {@0} {@1}.",
  "Trikrát": "Trois fois",
  "Trojuholník má 3 vrcholy, a preto aj 3 uhly.": "Le triangle a 3 sommets, et donc aussi 3 angles.",
  "Trojuholník môže mať dva pravé uhly.": "Un triangle peut avoir deux angles droits.",
  "Tupý uhol je menší ako pravý uhol.": "Un angle obtus est plus petit qu'un angle droit.",
  "Tupý uhol je väčší ako pravý, menší je ostrý uhol.": "Un angle obtus est plus grand qu'un angle droit ; l'angle plus petit, c'est l'angle aigu.",
  "Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "Un angle obtus est plus grand que le coin d'un cahier. Compare cet angle avec le coin d'un cahier.",
  "Uhol je menší ako roh zošita, je ostrý.": "L'angle est plus petit que le coin d'un cahier, il est aigu.",
  "Uhol je väčší ako roh zošita, je tupý.": "L'angle est plus grand que le coin d'un cahier, il est obtus.",
  "Uhol má tvar rohu zošita, je pravý.": "L'angle a la forme du coin d'un cahier, il est droit.",
  "V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.": "Dans une colonne, tu as soustrait le chiffre du haut de celui du bas, parce qu'il était plus petit. Dans ce cas, ajoute 10 au chiffre du haut et retiens 1.",
  "V obchode mali {@0} kg zemiakov. Predali {@1} kg a zvyšok rozdelili do vriec po {@2} kg. Koľko vriec naplnili?": "Le magasin avait {@0} kg de pommes de terre. Il en a vendu {@1} kg et a réparti le reste dans des sacs de {@2} kg. Combien de sacs a-t-il remplis ?",
  "V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.": "Il manque un zéro dans ton quotient. Quand on ne peut pas diviser après avoir abaissé un chiffre, on écrit 0 au quotient et on abaisse le chiffre suivant.",
  "Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.": "Tu as oublié un zéro. S'il manque un rang, écris 0 à sa place, sinon les chiffres se décalent.",
  "Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.": "Multiplie d'abord par les unités, puis par les dizaines. Décale le deuxième résultat d'un rang vers la gauche et additionne les deux.",
  "Vynásobil si len jednotkami. Vynásob aj desiatkami ({@0}) a oba čiastočné súčiny sčítaj.": "Tu as multiplié seulement par les unités. Multiplie aussi par les dizaines ({@0}) et additionne les deux produits partiels.",
  "Vypočítaj obvod obdĺžnika so stranami ${@0}\\,\\text{{@1}}$ a ${@2}\\,\\text{{@3}}$. Výsledok zapíš v {@4}.": "Calcule le périmètre d'un rectangle de côtés ${@0}\\,\\text{{@1}}$ et ${@2}\\,\\text{{@3}}$. Écris le résultat en {@4}.",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$. Výsledok zapíš v {@2}.": "Calcule le périmètre d'un carré de côté ${@0}\\,\\text{{@1}}$. Écris le résultat en {@2}.",
  "Vypočítaj písomne ${@0} + {@1}$.": "Pose et calcule ${@0} + {@1}$.",
  "Vypočítaj písomne ${@0} - {@1}$.": "Pose et calcule ${@0} - {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$.": "Pose et calcule ${@0} : {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "Pose et calcule ${@0} : {@1}$. Écris le quotient et le reste séparés par un point-virgule.",
  "Vypočítaj písomne ${@0}\\cdot {@1}$.": "Pose et calcule ${@0}\\cdot {@1}$.",
  "Za {@0}: {@1}, za {@2}: {@3}. ${@4} - {@5} = {@6}$.": "Pour les {@0} : {@1}, pour les {@2} : {@3}. ${@4} - {@5} = {@6}$.",
  "Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.": "Tu as oublié la retenue 1. Après l'emprunt, ajoute-la au chiffre du bas dans la colonne suivante.",
  "Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.": "Tu as oublié les retenues. Quand la somme d'une colonne fait 10 ou plus, ajoute 1 dans la colonne suivante, à gauche.",
  "Zabudol si pripočítať ešte ${@0}\\,\\text{{@1}}$.": "Tu as oublié d'ajouter encore ${@0}\\,\\text{{@1}}$.",
  "Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.": "Tu as oublié d'ajouter les dizaines retenues. Ajoute les dizaines du produit au produit du rang suivant.",
  "Zapíš obvod a obsah v tvare „obvod; obsah“.": "Écris le périmètre et l'aire sous la forme « périmètre; aire ».",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.": "Écris le quotient avec les chiffres obtenus à chaque étape, et le reste de la dernière étape.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.": "Écris le quotient avec les chiffres obtenus à chaque étape.",
  "Zapíš rímskymi číslicami číslo {@0}.": "Écris le nombre {@0} en chiffres romains.",
  "Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.": "Écris le résultat avec les chiffres obtenus dans les colonnes.",
  "Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.": "Écris le résultat : de chaque colonne, les unités de la somme ; les dizaines ont été retenues.",
  "Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.": "Écris le résultat : de chaque produit, les unités ; les dizaines ont été retenues.",
  "Zapíš číslom: {@0} {@1}, {@2} {@3}, {@4} {@5} a {@6} {@7}.": "Écris en chiffres : {@0} {@1}, {@2} {@3}, {@4} {@5} et {@6} {@7}.",
  "Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.": "Commence par le dernier chiffre à droite – ce sont les unités – et avance vers la gauche.",
  "Zisti, koľkokrát sa 60 zmestí do daného čísla.": "Cherche combien de fois 60 rentre dans le nombre donné.",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.": "Le signe = se met seulement entre deux nombres égaux. Ces nombres diffèrent par au moins un chiffre.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.": "Le signe est à l'envers. Compare en partant de la gauche – c'est le premier chiffre différent qui décide.",
  "Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.": "Le signe est à l'envers. Le nombre qui a le plus de chiffres est le plus grand.",
  "Zvyšní ľudia potrebujú ešte jeden autobus, preto treba {@0} {@1}.": "Les personnes restantes ont besoin d'un bus de plus, il faut donc {@0} {@1}.",
  "Zvyšok zemiakov: ${@0} - {@1} = {@2}$ kg. Počet vriec: ${@3} : {@4} = {@5}$.": "Reste de pommes de terre : ${@0} - {@1} = {@2}$ kg. Nombre de sacs : ${@3} : {@4} = {@5}$.",
  "autobus": "bus",
  "autobusy": "bus",
  "banány": "bananes",
  "dag": "dag",
  "desaťtisíce": "dizaines de mille",
  "desaťtisícov": "dizaines de mille",
  "dvakrát": "deux fois",
  "eur": "euros",
  "eurá": "euros",
  "hrušky": "poires",
  "jahody": "fraises",
  "k dolnej číslici pripočítaj zapamätanú 1 (${@0} + 1 = {@1}$).": "ajoute la retenue 1 au chiffre du bas (${@0} + 1 = {@1}$).",
  "napr. III": "par ex. III",
  "napr. XIV": "par ex. XIV",
  "napr. XX": "par ex. XX",
  "nepravda": "faux",
  "obsah: 3 riadky po 4 štvorčekoch": "aire : 3 rangées de 4 petits carrés",
  "obvod: 4 + 3 + 4 + 3 = 14 cm": "périmètre : 4 + 3 + 4 + 3 = 14 cm",
  "obvod; obsah": "périmètre; aire",
  "opíšeme {@0}": "on recopie {@0}",
  "ostrý": "aigu",
  "pravda": "vrai",
  "pravý": "droit",
  "pripíšeme {@0}: ${@1} : {@2} = {@3}$, lebo ${@4}\\cdot {@5} = {@6}$, zvyšok {@7}": "on abaisse {@0} : ${@1} : {@2} = {@3}$, car ${@4}\\cdot {@5} = {@6}$, reste {@7}",
  "píšeme {@0}": "on écrit {@0}",
  "píšeme {@0} a 1 si pamätáme": "on écrit {@0} et on retient 1",
  "píšeme {@0} a {@1} si pamätáme": "on écrit {@0} et on retient {@1}",
  "riadky": "rangées",
  "riadok": "rangée",
  "slivky": "prunes",
  "stovka": "centaine",
  "tisíce": "milliers",
  "tisícka": "millier",
  "tisícky": "milliers",
  "tisícok": "milliers",
  "tisícov": "milliers",
  "trikrát": "trois fois",
  "tričiek": "tee-shirts",
  "tričká": "tee-shirts",
  "tupý": "obtus",
  "uhol": "angle",
  "všeobecný štvoruholník": "quadrilatère quelconque",
  "všetci traja": "les trois enfants",
  "všetky tri": "les trois enfants",
  "zaplatil": "a payé",
  "zaplatila": "a payé",
  "{@0} Koľko detí hlasovalo spolu?": "{@0} Combien d'enfants ont voté en tout ?",
  "{@0} Koľko detí hlasovalo za {@1}?": "{@0} Combien d'enfants ont voté pour les {@1} ?",
  "{@0} O koľko viac detí hlasovalo za {@1} ako za {@2}?": "{@0} Combien d'enfants de plus ont voté pour les {@1} que pour les {@2} ?",
  "{@0} Podiel je ${@1}$, zvyšok {@2}. Skúška: ${@3}\\cdot {@4} + {@5} = {@6}$.": "{@0} Le quotient est ${@1}$, le reste {@2}. Vérification : ${@3}\\cdot {@4} + {@5} = {@6}$.",
  "{@0} Výsledok je ${@1}$. Skúška: ${@2}\\cdot {@3} = {@4}$.": "{@0} Le résultat est ${@1}$. Vérification : ${@2}\\cdot {@3} = {@4}$.",
  "{@0} je menej ako {@1}, preto ${@2} - {@3} = {@4}$, píšeme {@5} a 1 si pamätáme": "{@0} est plus petit que {@1}, donc ${@2} - {@3} = {@4}$, on écrit {@5} et on retient 1",
  "{@0} je menej ako {@1}, preto počítaj ${@2} - {@3}$. Koľko to je?": "{@0} est plus petit que {@1}, calcule donc ${@2} - {@3}$. Combien cela fait-il ?",
  "{@0} má ušetrených {@1} {@2}. {@3} má o {@4} {@5} viac ako {@6} a {@7} má {@8} toľko ako {@9}. Koľko eur majú {@10} spolu?": "{@0} a économisé {@1} {@2}. {@3} a {@4} {@5} de plus que {@6} et {@7} a {@8} plus que {@9}. Combien d'euros ont {@10} ensemble ?",
  "{@0} má {@1} toľko ako {@2}, nie ako {@3}. Násob sumu, ktorú má {@4}.": "{@0} a {@1} plus que {@2}, pas que {@3}. Multiplie la somme qu'a {@4}.",
  "{@0} {@1} {@2} {@3} po {@4} {@5} a {@6} {@7}-eurovou bankovkou. Koľko eur {@8} vydali?": "{@0} {@1} {@2} {@3} à {@4} {@5} pièce et {@6} avec un billet de {@7} euros. Combien d'euros {@8} a-t-on rendus ?",
  "{@0}. Spolu {@1}.": "{@0}. En tout {@1}.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$ {@12}.": "{@0} : ${@1} + {@2} = {@3}$. {@4} : ${@5}\\cdot {@6} = {@7}$. En tout : ${@8} + {@9} + {@10} = {@11}$ {@12}.",
  "{@0}: koľko je ${@1} + {@2} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)": "{@0} : combien font ${@1} + {@2} + 1$ ? (Tu as retenu 1 de la colonne précédente.)",
  "{@0}: koľko je ${@1} + {@2}$?": "{@0} : combien font ${@1} + {@2}$ ?",
  "{@0}: koľko je ${@1}\\cdot {@2} + {@3}$? ({@4} si pamätáš z predchádzajúceho rádu.)": "{@0} : combien font ${@1}\\cdot {@2} + {@3}$ ? (Tu as retenu {@4} du rang précédent.)",
  "{@0}: koľko je ${@1}\\cdot {@2}$?": "{@0} : combien font ${@1}\\cdot {@2}$ ?",
  "Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.": "Oui, les côtés opposés d'un rectangle ont la même longueur.",
  "Áno, to je vlastnosť štvorca.": "Oui, c'est une propriété du carré.",
  "útvar": "figure",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}\\,\\text{{@1}}$ na menšiu jednotku $\\text{{@2}}$.": "N'additionne pas tout de suite les nombres. Convertis d'abord ${@0}\\,\\text{{@1}}$ dans la plus petite unité $\\text{{@2}}$.",
  "Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.": "N'additionne pas les nombres. Tu trouves le terme qui manque par une soustraction : soustrais de la somme le terme connu.",
  "Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.": "N'additionne pas les nombres. Tu trouves le nombre cherché par une soustraction : soustrais la différence du premier terme.",
  "Čísla sú rovnaké.": "Les nombres sont égaux.",
  "Číslo s viacerými číslicami je väčšie, preto ${@0} {@1} {@2}$.": "Le nombre qui a le plus de chiffres est le plus grand, donc ${@0} {@1} {@2}$.",
  "čerešne": "cerises",
  "Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.": "Le carré est bien aussi un rectangle, mais on cherche le nom le plus précis. Regarde si tous les côtés ont la même longueur.",
  "Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.": "Le carré a 4 angles droits et ses côtés opposés égaux, c'est donc un rectangle particulier.",
  "Štvorec má obvod ${@0}\\,\\text{{@1}}$. Aká dlhá je jeho strana (v {@2})?": "Un carré a un périmètre de ${@0}\\,\\text{{@1}}$. Quelle est la longueur de son côté (en {@2}) ?",
  "Štvorec má všetky 4 uhly pravé.": "Les 4 angles d'un carré sont droits.",
  "Štvorec má všetky strany rovnako dlhé.": "Tous les côtés d'un carré ont la même longueur.",
  "Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.": "Tous les côtés d'un carré ont la même longueur. Ici, les côtés consécutifs ont des longueurs différentes.",
  "Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník": "Carré, rectangle, triangle et quadrilatère quelconque",
  "Štvoruholník má 4 strany a 4 vrcholy.": "Un quadrilatère a 4 côtés et 4 sommets.",
  "Štyrikrát": "Quatre fois",
  "štyrikrát": "quatre fois",
  "„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.": "« … de plus » veut dire ajouter, « … fois plus » veut dire multiplier. Ensuite, additionne tout.",
  "„{@0} toľko“ znamená násobiť, nie pripočítať {@1}.": "« {@0} plus » veut dire multiplier, pas ajouter {@1}."
 }
});
