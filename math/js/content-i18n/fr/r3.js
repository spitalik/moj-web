/* Français: preklad js/rocniky/r3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/r3/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "r3-cisla1000": {
   "title": "Les nombres jusqu'à 1 000",
   "summary": "Centaines, dizaines et unités, file numérique et comparaison des nombres à trois chiffres.",
   "theory": [
    "<p>Un nombre à trois chiffres a des <strong>centaines (C)</strong>, des <strong>dizaines (D)</strong> et des <strong>unités (U)</strong>.\n       Le nombre 472 a 4 centaines, 7 dizaines et 2 unités : $472 = 400 + 70 + 2$. Dix centaines font <strong>mille</strong> : $1\\,000$.</p>",
    {
     "fig": "r3-rad1000",
     "caption": "La file numérique de 0 à 1 000. Le nombre 350 est au milieu entre 300 et 400, le nombre 720 est plus près de 700."
    },
    "<p><strong>Comparer :</strong> on compare d'abord les centaines ; si elles sont égales, les dizaines ; et enfin les unités.\n       $538 &gt; 497$, car 5 centaines, c'est plus que 4. $642 &lt; 648$, car les centaines et les dizaines sont égales et $2 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "Compare les nombres 806 et 860.",
     "steps": [
      "Les centaines sont égales (8).",
      "Dizaines : 0 et 6, zéro est plus petit.",
      "<strong>$806 &lt; 860$</strong>"
     ]
    },
    {
     "task": "Écris le nombre qui a 3 centaines, 0 dizaine et 9 unités.",
     "steps": [
      "$300 + 0 + 9 = 309$.",
      "Au rang des dizaines, on écrit zéro.",
      "<strong>C'est le nombre 309.</strong>"
     ]
    }
   ]
  },
  "r3-scitanie": {
   "title": "Addition et soustraction jusqu'à 1 000",
   "summary": "De tête par étapes et en colonnes.",
   "theory": [
    "<p><strong>De tête</strong>, on calcule par étapes : $356 + 230$, c'est d'abord $356 + 200 = 556$, puis $556 + 30 = 586$.\n       Avec des centaines entières, on calcule comme avec des unités : $400 + 500 = 900$, $800 - 300 = 500$.</p>",
    "<p><strong>En colonnes</strong>, on écrit les nombres l'un sous l'autre de façon que les unités soient sous les unités, les dizaines sous les dizaines et les centaines sous les centaines.\n       On calcule de droite à gauche : unités, dizaines, centaines. Si la somme d'un rang dépasse 9, on reporte une retenue au rang de gauche.</p>",
    {
     "fig": "r3-stlpec",
     "caption": "Addition posée $347 + 285 = 632$. Les petits chiffres en haut sont les retenues des dizaines et des centaines."
    },
    "<p>On peut toujours <strong>vérifier une soustraction par une addition</strong> : si $632 - 285 = 347$, alors on doit avoir $347 + 285 = 632$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $468 + 275$.",
     "steps": [
      "Unités : $8 + 5 = 13$, j'écris 3 et je retiens 1.",
      "Dizaines : $6 + 7 + 1 = 14$, j'écris 4 et je retiens 1.",
      "Centaines : $4 + 2 + 1 = 7$.",
      "<strong>Résultat : 743</strong>"
     ]
    },
    {
     "task": "Calcule $700 - 340$.",
     "steps": [
      "$700 - 300 = 400$.",
      "$400 - 40 = 360$.",
      "Vérification : $360 + 340 = 700$. <strong>Résultat : 360</strong>"
     ]
    }
   ]
  },
  "r3-nasobilka": {
   "title": "Multiplication et division",
   "summary": "Toutes les tables, multiplication des dizaines et division avec reste.",
   "theory": [
    "<p>On trouve les tables jusqu'à $10 \\cdot 10$ dans un tableau : la ligne donne le premier facteur, la colonne le deuxième, et le produit est à leur croisement.\n       La division est l'inverse de la multiplication : de $6 \\cdot 7 = 42$, on sait que $42 : 6 = 7$ et $42 : 7 = 6$.</p>",
    {
     "fig": "r3-nasobilka",
     "caption": "Table de Pythagore : la ligne 6 et la colonne 7 se croisent sur le nombre 42, donc $6 \\cdot 7 = 42$."
    },
    "<p><strong>Multiplier des dizaines :</strong> $30 \\cdot 4$, c'est 3 dizaines fois 4, donc 12 dizaines, c'est-à-dire $120$.</p>",
    "<p><strong>Division avec reste :</strong> toutes les divisions ne tombent pas juste. $17 : 5 = 3$ <em>reste</em> 2, car $3 \\cdot 5 = 15$\n       et il manque encore 2 pour arriver à 17. Le reste doit toujours être plus petit que le diviseur.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $8 \\cdot 7$ et $56 : 8$.",
     "steps": [
      "D'après les tables : $8 \\cdot 7 = 56$.",
      "La division est l'inverse de la multiplication, donc $56 : 8 = 7$."
     ]
    },
    {
     "task": "Effectue la division avec reste $29 : 4$.",
     "steps": [
      "Le plus grand multiple de 4 qui ne dépasse pas 29 est $7 \\cdot 4 = 28$.",
      "Reste : $29 - 28 = 1$.",
      "<strong>$29 : 4 = 7$, reste 1</strong>"
     ]
    }
   ]
  },
  "r3-zatvorky": {
   "title": "Parenthèses et priorités des opérations",
   "summary": "Ce qu'on calcule en premier : parenthèses, multiplication et division, addition et soustraction.",
   "theory": [
    "<p>Dans un calcul avec plusieurs opérations, on respecte cet ordre :</p>\n       <ol><li>d'abord, on calcule ce qui est entre <strong>parenthèses</strong>,</li>\n       <li>ensuite la <strong>multiplication et la division</strong>,</li>\n       <li>enfin l'<strong>addition et la soustraction</strong> (de gauche à droite).</li></ol>",
    "<p>Compare : $2 + 3 \\cdot 4 = 2 + 12 = 14$, mais $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$. Les parenthèses changent le résultat !</p>",
    "<p>S'il n'y a que des additions et des soustractions, on va de gauche à droite : $20 - 5 - 3 = 15 - 3 = 12$. Mais si une partie est entre parenthèses,\n       on la calcule d'abord : $20 - (5 - 3) = 20 - 2 = 18$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $18 + 4 \\cdot 6$.",
     "steps": [
      "La multiplication est prioritaire : $4 \\cdot 6 = 24$.",
      "$18 + 24 = 42$.",
      "<strong>Résultat : 42</strong>"
     ]
    },
    {
     "task": "Calcule $(15 - 7) \\cdot 3$.",
     "steps": [
      "D'abord la parenthèse : $15 - 7 = 8$.",
      "$8 \\cdot 3 = 24$.",
      "<strong>Résultat : 24</strong>"
     ]
    }
   ]
  },
  "r3-slovne": {
   "title": "Problèmes à plusieurs étapes",
   "summary": "Des problèmes qui se résolvent avec deux ou trois calculs à la suite.",
   "theory": [
    "<p>Certains problèmes ne se résolvent pas avec un seul calcul. On avance par étapes : <strong>ce qu'on sait</strong>,\n       <strong>ce qu'il faut trouver d'abord</strong> et <strong>ce qu'on cherche à la fin</strong>.</p>",
    "<p>Exemple : Maman a acheté 3 cahiers à 4 € chacun et a payé avec un billet de 20 €. Combien d'euros lui a-t-on rendus ?<br>\n       1re étape – prix des cahiers : $3 \\cdot 4 = 12$ €.<br>2e étape – monnaie rendue : $20 - 12 = 8$ €.<br>Réponse : on a rendu 8 € à Maman.</p>",
    "<p>On peut aussi réunir les étapes en une seule écriture : $20 - 3 \\cdot 4 = 20 - 12 = 8$ (la multiplication est prioritaire).\n       À la fin, on vérifie toujours que la réponse a du sens.</p>"
   ],
   "examples": [
    {
     "task": "Dans un bus, il y avait 34 personnes. À l'arrêt, 12 personnes sont descendues et 9 personnes sont montées. Combien y a-t-il de personnes dans le bus maintenant ?",
     "steps": [
      "Après la descente : $34 - 12 = 22$.",
      "Après la montée : $22 + 9 = 31$.",
      "<strong>Il y a 31 personnes dans le bus.</strong>"
     ]
    },
    {
     "task": "Emma a 2 paquets de 8 autocollants et encore 5 autocollants à part. Combien d'autocollants a-t-elle en tout ?",
     "steps": [
      "Dans les paquets : $2 \\cdot 8 = 16$.",
      "En tout : $16 + 5 = 21$.",
      "<strong>Emma a 21 autocollants.</strong>"
     ]
    }
   ]
  },
  "r3-obvod": {
   "title": "Périmètre des figures planes",
   "summary": "Le périmètre du triangle, du carré et du rectangle comme somme des longueurs des côtés.",
   "theory": [
    "<p>Le <strong>périmètre</strong> d'une figure est la longueur de la ligne qui en fait le tour. On le calcule en <strong>additionnant les longueurs de tous les côtés</strong>.\n       On note le périmètre avec la lettre $o$.</p>",
    {
     "fig": "r3-obvod",
     "caption": "Le rectangle a deux côtés plus longs et deux côtés plus courts, le triangle a trois côtés. Le périmètre est la somme de tous les côtés."
    },
    "<p><strong>Triangle</strong> de côtés $a, b, c$ : $o = a + b + c$.<br>\n       <strong>Carré</strong> de côté $a$ : $o = a + a + a + a = 4 \\cdot a$.<br>\n       <strong>Rectangle</strong> de côtés $a, b$ : $o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule le périmètre d'un carré de côté $7\\,\\text{cm}$.",
     "steps": [
      "Le carré a 4 côtés égaux.",
      "$o = 4 \\cdot 7 = 28$.",
      "<strong>$o = 28\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Un rectangle a des côtés de $9\\,\\text{cm}$ et $4\\,\\text{cm}$. Quel est son périmètre ?",
     "steps": [
      "$o = 9 + 4 + 9 + 4$.",
      "$o = 18 + 8 = 26$.",
      "<strong>$o = 26\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "r3-jednotky": {
   "title": "Unités de longueur, de masse, de contenance et de temps",
   "summary": "Du millimètre au kilomètre, gramme et kilogramme, litre et décilitre, de la seconde à la semaine.",
   "theory": [
    "<p><strong>Longueur :</strong> $1\\,\\text{cm} = 10\\,\\text{mm}$, $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{m} = 100\\,\\text{cm}$,\n       $1\\,\\text{km} = 1\\,000\\,\\text{m}$.</p>",
    "<p><strong>Masse :</strong> $1\\,\\text{kg} = 1\\,000\\,\\text{g}$, $1\\,\\text{t} = 1\\,000\\,\\text{kg}$.<br>\n       <strong>Contenance :</strong> $1\\,\\text{l} = 10\\,\\text{dl}$, $1\\,\\text{dl} = 100\\,\\text{ml}$, donc $1\\,\\text{l} = 1\\,000\\,\\text{ml}$.</p>",
    "<p><strong>Temps :</strong> $1\\,\\text{min} = 60\\,\\text{s}$, $1\\,\\text{h} = 60\\,\\text{min}$, 1 jour = 24 h, 1 semaine = 7 jours.</p>",
    "<p>Pour convertir en une unité <strong>plus petite</strong>, le nombre devient plus grand (on multiplie) ; pour convertir en une unité <strong>plus grande</strong>, il devient plus petit (on divise).\n       Par exemple $3\\,\\text{m} = 300\\,\\text{cm}$ et $40\\,\\text{mm} = 4\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Convertis $2\\,\\text{m}\\ 35\\,\\text{cm}$ en centimètres.",
     "steps": [
      "$2\\,\\text{m} = 200\\,\\text{cm}$.",
      "$200 + 35 = 235$.",
      "<strong>$235\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Un film a commencé à 17:40 et s'est terminé à 19:10. Combien de minutes a-t-il duré ?",
     "steps": [
      "De 17:40 à 18:00, il y a 20 minutes.",
      "De 18:00 à 19:00, il y a 60 minutes, de 19:00 à 19:10 encore 10 minutes.",
      "$20 + 60 + 10 = 90$. <strong>Le film a duré 90 minutes.</strong>"
     ]
    }
   ]
  },
  "r3-tabulky": {
   "title": "Tableaux et données simples",
   "summary": "Lire des données dans un tableau et un diagramme en bâtons, comparer et additionner.",
   "theory": [
    "<p>On écrit souvent les données dans un <strong>tableau</strong>. La première ligne contient les noms (par exemple les jours) et en dessous se trouvent les nombres.\n       Un glacier a noté combien de glaces il a vendues :</p>\n       <table class=\"tbl\"><tr><th>jour</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th></tr>\n       <tr><td>glaces</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>",
    "<p>On peut représenter les mêmes données dans un <strong>diagramme en bâtons</strong>. Plus le bâton est haut, plus le nombre est grand.</p>",
    {
     "fig": "r3-graf",
     "caption": "Le bâton le plus haut est celui du vendredi (18), le plus bas celui du mardi (8). Le vendredi, on a vendu $18 - 8 = 10$ glaces de plus que le mardi."
    },
    "<p>Avec les données, on peut trouver où il y en a <strong>le plus</strong> et <strong>le moins</strong>, <strong>de combien</strong> deux nombres diffèrent\n       (soustraction) et combien cela fait <strong>en tout</strong> (addition).</p>"
   ],
   "examples": [
    {
     "task": "Combien de glaces a-t-on vendues en tout le lundi et le mercredi (d'après le tableau ci-dessus) ?",
     "steps": [
      "Lundi 12, mercredi 15.",
      "$12 + 15 = 27$.",
      "<strong>En tout, on a vendu 27 glaces.</strong>"
     ]
    },
    {
     "task": "Combien de glaces de plus a-t-on vendues le mercredi que le jeudi ?",
     "steps": [
      "Mercredi 15, jeudi 10.",
      "$15 - 10 = 5$.",
      "<strong>Le mercredi, on a vendu 5 glaces de plus.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} : {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, donc ${@2} : {@3} = {@4}$. ${@5} = {@6}$.",
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, donc ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Vérification : ${@3} + {@4} = {@5}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Vérification : ${@3} - {@4} = {@5}$.",
  "${@0} = {@1} + {@2} + {@3}$. Na mieste {@4} je číslica {@5}.": "${@0} = {@1} + {@2} + {@3}$. Au rang des {@4}, il y a le chiffre {@5}.",
  "${@0} = {@1}$, potom ${@2} + {@3} = {@4}$. Výsledok: ${@5}$.": "${@0} = {@1}$, puis ${@2} + {@3} = {@4}$. Résultat : ${@5}$.",
  "1. krok – cena: ${@0} \\cdot {@1} = {@2}$ €. 2. krok – vrátili: ${@3} - {@4} = {@5}$ €.": "1re étape – le prix : ${@0} \\cdot {@1} = {@2}$ €. 2e étape – la monnaie rendue : ${@3} - {@4} = {@5}$ €.",
  "4 + 8 + 1 = 13, píšem 3, 1 ďalej": "4 + 8 + 1 = 13, j'écris 3, je retiens 1",
  "7 + 5 = 12, píšem 2, 1 ďalej": "7 + 5 = 12, j'écris 2, je retiens 1",
  "Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.": "Si tu ne t'en souviens pas, découpe le calcul : par exemple $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.",
  "Akú číslicu má číslo {@0} na mieste {@1}?": "Quel chiffre le nombre {@0} a-t-il au rang des {@1} ?",
  "Bez zátvoriek počítaj zľava doprava.": "Sans parenthèses, calcule de gauche à droite.",
  "Bez zátvoriek počítame zľava: ${@0} - {@1} = {@2}$, potom ${@3} - {@4} = {@5}$.": "Sans parenthèses, on calcule de gauche à droite : ${@0} - {@1} = {@2}$, puis ${@3} - {@4} = {@5}$.",
  "Bez zátvoriek sa počíta zľava doprava. Najprv vypočítaj ${@0} - {@1}$, až potom odčítaj {@2}.": "Sans parenthèses, on calcule de gauche à droite. Calcule d'abord ${@0} - {@1}$, et seulement ensuite soustrais {@2}.",
  "Cesta vlakom k babke trvala 3 …": "Le trajet en train jusque chez mamie a duré 3 …",
  "Chýbajúci sčítanec zistíš odčítaním.": "Tu trouves le terme qui manque par une soustraction.",
  "Do hrnčeka sa zmestia asi 3 …": "Une tasse contient environ 3 …",
  "Doplň chýbajúce číslo: $\\square \\cdot {@0} = {@1}$": "Complète le nombre qui manque : $\\square \\cdot {@0} = {@1}$",
  "Doplň správny znak: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$": "Écris le bon signe : $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$",
  "Doplň vhodnú jednotku: {@0}": "Complète avec l'unité qui convient : {@0}",
  "Dve dlhšie strany: koľko je $2 \\cdot {@0}$?": "Les deux côtés les plus longs : combien font $2 \\cdot {@0}$ ?",
  "Dve kratšie strany: koľko je $2 \\cdot {@0}$?": "Les deux côtés les plus courts : combien font $2 \\cdot {@0}$ ?",
  "Dve strany po {@0} cm majú spolu $2 \\cdot {@1} = {@2}$. Na zvyšné dve strany ostáva ${@3} - {@4} = {@5}$, jedna strana je ${@6} : 2 = {@7}\\,\\text{cm}$.": "Deux côtés de {@0} cm font ensemble $2 \\cdot {@1} = {@2}$. Pour les deux autres côtés, il reste ${@3} - {@4} = {@5}$, un côté mesure ${@6} : 2 = {@7}\\,\\text{cm}$.",
  "Dvere sú vysoké asi 2 …": "Une porte est haute d'environ 2 …",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšie číslo od väčšieho.": "N'additionne pas les valeurs. « Combien de plus » est une différence – soustrais le plus petit nombre du plus grand.",
  "Hľadaj najmenšie číslo (najnižší stĺpec).": "Cherche le plus petit nombre (la colonne la plus basse).",
  "Hľadaj najväčšie číslo (najvyšší stĺpec).": "Cherche le plus grand nombre (la colonne la plus haute).",
  "Hľadaj suseda v číselnom rade.": "Cherche le voisin sur la file numérique.",
  "Hľadaj v násobilke čísla {@0} najväčší násobok, ktorý sa ešte zmestí do {@1}. Zvyšok musí byť menší ako {@2}.": "Cherche dans la table de {@0} le plus grand multiple qui ne dépasse pas {@1}. Le reste doit être plus petit que {@2}.",
  "Jablko váži asi 150 …": "Une pomme pèse environ 150 …",
  "Jednotka {@0} je tu primalá: {@1} {@2} by bolo veľmi málo.": "L'unité {@0} est trop petite ici : {@1} {@2}, ce serait très peu.",
  "Jednotka {@0} je tu priveľká: {@1} {@2} by bolo veľmi veľa.": "L'unité {@0} est trop grande ici : {@1} {@2}, ce serait énorme.",
  "Koľko centimetrov majú spolu dve strany po {@0} cm?": "Combien de centimètres font ensemble deux côtés de {@0} cm ?",
  "Koľko centimetrov zostáva na dve zvyšné strany? Vypočítaj ${@0} - {@1}$.": "Combien de centimètres reste-t-il pour les deux autres côtés ? Calcule ${@0} - {@1}$.",
  "Koľko desiatok vyšlo? K tomuto číslu pripíš nulu.": "Combien de dizaines as-tu obtenu ? Ajoute un zéro à ce nombre.",
  "Koľko eur stál celý nákup?": "Combien d'euros ont coûté tous les achats ?",
  "Koľko eur vrátili? Vypočítaj ${@0} - {@1}$.": "Combien d'euros a-t-on rendus ? Calcule ${@0} - {@1}$.",
  "Koľko je ${@0} - {@1}$?": "Combien font ${@0} - {@1}$ ?",
  "Koľko kusov je vo všetkých balíčkoch spolu?": "Combien d'objets y a-t-il dans tous les paquets ensemble ?",
  "Koľko meria jedna zvyšná strana? Vypočítaj ${@0} : 2$.": "Combien mesure un des deux autres côtés ? Calcule ${@0} : 2$.",
  "Koľko minút je od {@0} do {@1}?": "Combien de minutes y a-t-il de {@0} à {@1} ?",
  "Koľko minút trval tréning spolu? Vypočítaj ${@0} + {@1}$.": "Combien de minutes a duré l'entraînement en tout ? Calcule ${@0} + {@1}$.",
  "Koľko stromčekov zostalo? Vypočítaj ${@0} - {@1}$.": "Combien d'arbustes reste-t-il ? Calcule ${@0} - {@1}$.",
  "Koľko stromčekov záhradník zasadil?": "Combien d'arbustes le jardinier a-t-il plantés ?",
  "Koľko {@0} majú všetky tri deti spolu? Vypočítaj ${@1} + {@2} + {@3}$.": "Combien de {@0} les trois enfants ont-ils en tout ? Calcule ${@1} + {@2} + {@3}$.",
  "Koľko {@0} má {@1}?": "Combien de {@0} a {@1} ?",
  "Koľko {@0} {@1} {@2}?": "Combien de {@0} {@1} {@2} ?",
  "Koľko ľudí je v autobuse, keď ďalší nastúpili?": "Combien de personnes y a-t-il dans le bus après la montée des autres ?",
  "Koľko ľudí zostalo v autobuse po vystúpení?": "Combien de personnes sont restées dans le bus après la descente ?",
  "Koľkokrát je {@0} v čísle {@1}?": "Combien de fois {@0} est-il contenu dans {@1} ?",
  "Koľkokrát sa {@0} {@1} zmestí do {@2} {@3}?": "Combien de fois {@0} {@1} rentrent-ils dans {@2} {@3} ?",
  "Ktoré číslo je o {@0} menšie ako {@1}?": "Quel nombre est plus petit de {@0} que {@1} ?",
  "Ktoré číslo je o {@0} väčšie ako {@1}?": "Quel nombre est plus grand de {@0} que {@1} ?",
  "Ktoré číslo má {@0} {@1}, {@2} {@3} a {@4} {@5}?": "Quel nombre a {@0} {@1}, {@2} {@3} et {@4} {@5} ?",
  "Ktorý najväčší násobok čísla {@0} sa ešte zmestí do {@1}?": "Quel est le plus grand multiple de {@0} qui ne dépasse pas {@1} ?",
  "Lyžička sirupu má asi 5 …": "Une cuillère de sirop contient environ 5 …",
  "Mravec je dlhý asi 5 …": "Une fourmi mesure environ 5 …",
  "Najmenšie číslo je {@0}, a to {@1}.": "Le plus petit nombre est {@0}, c'est {@1}.",
  "Najprv násobenie a delenie: ${@0} \\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} - {@7} = {@8}$.": "D'abord la multiplication et la division : ${@0} \\cdot {@1} = {@2}$ et ${@3} : {@4} = {@5}$. Ensuite ${@6} - {@7} = {@8}$.",
  "Najprv násobenie: ${@0} \\cdot {@1} = {@2}$. Potom ${@3} {@4} {@5} = {@6}$.": "D'abord la multiplication : ${@0} \\cdot {@1} = {@2}$. Ensuite ${@3} {@4} {@5} = {@6}$.",
  "Najprv odčítaj {@0}: koľko je ${@1} - {@2}$?": "Soustrais d'abord {@0} : combien font ${@1} - {@2}$ ?",
  "Najprv premeň väčšiu jednotku: ${@0} = \\square\\,\\text{{@1}}$": "Convertis d'abord la plus grande unité : ${@0} = \\square\\,\\text{{@1}}$",
  "Najprv premeň {@0} na {@1} a potom pripočítaj zvyšok.": "Convertis d'abord les {@0} en {@1}, puis ajoute le reste.",
  "Najprv pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Ajoute d'abord {@0} : combien font ${@1} + {@2}$ ?",
  "Najprv vypočítaj, koľko je vo všetkých balíčkoch.": "Calcule d'abord combien il y a dans tous les paquets.",
  "Najprv vypočítaj, koľko stromčekov zasadil.": "Calcule d'abord combien d'arbustes il a plantés.",
  "Najprv vypočítaj, čo je v zátvorke.": "Calcule d'abord ce qu'il y a entre parenthèses.",
  "Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.": "Trouve d'abord combien a chaque enfant, puis additionne tout.",
  "Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.": "Trouve d'abord combien ont coûté tous les achats. Ensuite, soustrais-le du billet.",
  "Najprv zátvorka: ${@0} + {@1} = {@2}$. Potom ${@3} : {@4} = {@5}$.": "D'abord la parenthèse : ${@0} + {@1} = {@2}$. Ensuite ${@3} : {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} - {@1} = {@2}$. Potom ${@3} - {@4} = {@5}$.": "D'abord la parenthèse : ${@0} - {@1} = {@2}$. Ensuite ${@3} - {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} {@1} {@2} = {@3}$. Potom ${@4} \\cdot {@5} = {@6}$.": "D'abord la parenthèse : ${@0} {@1} {@2} = {@3}$. Ensuite ${@4} \\cdot {@5} = {@6}$.",
  "Najprv zátvorka: koľko je ${@0} + {@1}$?": "D'abord la parenthèse : combien font ${@0} + {@1}$ ?",
  "Najprv zátvorka: koľko je ${@0} - {@1}$?": "D'abord la parenthèse : combien font ${@0} - {@1}$ ?",
  "Najprv zátvorka: koľko je ${@0} {@1} {@2}$?": "D'abord la parenthèse : combien font ${@0} {@1} {@2}$ ?",
  "Najväčšie číslo je {@0}, a to {@1}.": "Le plus grand nombre est {@0}, c'est {@1}.",
  "Najväčší násobok {@0}, ktorý nie je väčší ako {@1}, je ${@2} \\cdot {@3} = {@4}$. Zvyšok: ${@5} - {@6} = {@7}$. Teda ${@8} : {@9} = {@10}$, zvyšok {@11}.": "Le plus grand multiple de {@0} qui ne dépasse pas {@1} est ${@2} \\cdot {@3} = {@4}$. Reste : ${@5} - {@6} = {@7}$. Donc ${@8} : {@9} = {@10}$, reste {@11}.",
  "Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.": "Tu as écrit seulement le quotient. Après le point-virgule, écris aussi le reste.",
  "Nevšímal si si zátvorku. Najprv sčítaj čísla v zátvorke a až potom deľ.": "Tu n'as pas tenu compte de la parenthèse. Additionne d'abord les nombres entre parenthèses, et seulement ensuite divise.",
  "Nevšímal si si zátvorku. Najprv vypočítaj ${@0} - {@1}$ a až potom to odčítaj od {@2}.": "Tu n'as pas tenu compte de la parenthèse. Calcule d'abord ${@0} - {@1}$, et seulement ensuite soustrais-le de {@2}.",
  "Nevšímal si si zátvorku. Čo je v zátvorke, počítaš úplne najprv – aj pred násobením.": "Tu n'as pas tenu compte de la parenthèse. Ce qui est entre parenthèses se calcule en tout premier – même avant la multiplication.",
  "Nájdi správny deň a prečítaj číslo pri ňom.": "Trouve le bon jour et lis le nombre qui lui correspond.",
  "Nákladné auto váži asi 8 …": "Un camion pèse environ 8 …",
  "Násobenie a delenie urob skôr ako odčítanie.": "Fais la multiplication et la division avant la soustraction.",
  "Násobenie má prednosť pred sčítaním aj odčítaním.": "La multiplication est prioritaire sur l'addition et la soustraction.",
  "O koľko viac? Vypočítaj ${@0} - {@1}$.": "Combien de plus ? Calcule ${@0} - {@1}$.",
  "Obdĺžnik a trojuholník s dĺžkami strán": "Rectangle et triangle avec les longueurs des côtés",
  "Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.": "Le rectangle a 4 côtés : deux plus longs et deux plus courts. Additionne-les tous.",
  "Obdĺžnik má obvod ${@0}\\,\\text{cm}$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Un rectangle a un périmètre de ${@0}\\,\\text{cm}$ et un côté de ${@1}\\,\\text{cm}$. Quelle est la longueur de l'autre côté (en cm) ?",
  "Obvod rozdeľ na 4 rovnaké časti.": "Partage le périmètre en 4 parts égales.",
  "Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.": "Tu as partagé le périmètre en deux parts seulement. Le carré a quatre côtés égaux.",
  "Obvod trojuholníka je súčet jeho troch strán.": "Le périmètre du triangle est la somme de ses trois côtés.",
  "Obvod štvorca je ${@0}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?": "Le périmètre d'un carré est ${@0}\\,\\text{cm}$. Quelle est la longueur de son côté (en cm) ?",
  "Obvod: koľko je ${@0} + {@1}$?": "Périmètre : combien font ${@0} + {@1}$ ?",
  "Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.": "Soustrais du périmètre les deux côtés connus et partage le reste en deux.",
  "Od {@0} do {@1} je {@2} minút, od {@3} do {@4} ešte {@5} minút. Spolu ${@6} + {@7} = {@8}$ minút.": "De {@0} à {@1}, il y a {@2} minutes, de {@3} à {@4}, encore {@5} minutes. En tout ${@6} + {@7} = {@8}$ minutes.",
  "Od {@0} do {@1} je {@2} minút.": "De {@0} à {@1}, il y a {@2} minutes.",
  "Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.": "Soustrais l'un après l'autre les centaines, les dizaines et les unités. Vérifie le résultat par une addition.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu všetkých.": "Tu as soustrait le prix d'un seul objet. Il y avait {@0} objets achetés : calcule d'abord le prix de tous.",
  "Odčítal si stranu {@0} cm len raz. Obdĺžnik má dve takéto strany.": "Tu n'as soustrait le côté de {@0} cm qu'une fois. Le rectangle a deux côtés comme celui-là.",
  "Pi": "Ve",
  "Platil": "Il a payé",
  "Platila": "Elle a payé",
  "Po": "Lu",
  "Po vystúpení: ${@0} - {@1} = {@2}$. Po nastúpení: ${@3} + {@4} = {@5}$.": "Après la descente : ${@0} - {@1} = {@2}$. Après la montée : ${@3} + {@4} = {@5}$.",
  "Pomôcka: $5 \\cdot {@0} = {@1}$ a ešte {@2}-krát {@3}, teda ${@4} + {@5} = {@6}$.": "Astuce : $5 \\cdot {@0} = {@1}$ et encore {@2} fois {@3}, donc ${@4} + {@5} = {@6}$.",
  "Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.": "Compare en partant de la gauche : d'abord les centaines, puis les dizaines, puis les unités.",
  "Potom odčítaj {@0}: koľko je ${@1} - {@2}$?": "Ensuite, soustrais {@0} : combien font ${@1} - {@2}$ ?",
  "Potom pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Ensuite, ajoute {@0} : combien font ${@1} + {@2}$ ?",
  "Počítaj najprv minúty do celej hodiny a potom minúty po nej.": "Compte d'abord les minutes jusqu'à l'heure pile, puis les minutes après.",
  "Počítaj zľava: koľko je ${@0} - {@1}$?": "Calcule de gauche à droite : combien font ${@0} - {@1}$ ?",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = {@1}$.": "Tu as calculé avec 100. Pour le temps, on a $1\\,\\text{{@0}} = {@1}$.",
  "Počítal si zľava doprava. Delenie má prednosť pred odčítaním: najprv vypočítaj ${@0} : {@1}$.": "Tu as calculé de gauche à droite. La division est prioritaire sur la soustraction : calcule d'abord ${@0} : {@1}$.",
  "Počítal si zľava doprava. Násobenie má prednosť: najprv vypočítaj ${@0} \\cdot {@1}$.": "Tu as calculé de gauche à droite. La multiplication est prioritaire : calcule d'abord ${@0} \\cdot {@1}$.",
  "Predané zmrzliny": "Glaces vendues",
  "Predchádzajúce miesta sú rovnaké, rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "Les rangs précédents sont égaux, ce sont les {@0} qui décident : {@1} et {@2}. Donc ${@3} {@4} {@5}$.",
  "Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?": "Imagine l'objet. Est-il petit ou grand ? Ça dure peu de temps ou longtemps ?",
  "Premeň: ${@0} = \\square\\,\\text{{@1}}$": "Convertis : ${@0} = \\square\\,\\text{{@1}}$",
  "Premeň: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$": "Convertis : ${@0}\\ {@1} = \\square\\,\\text{{@2}}$",
  "Prečítané strany": "Pages lues",
  "Pridaj tie navyše: koľko je ${@0} + {@1}$?": "Ajoute ceux en plus : combien font ${@0} + {@1}$ ?",
  "Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.": "Ajoute l'un après l'autre les centaines, les dizaines et les unités, ou pose l'addition en colonnes.",
  "Pripočítaj zvyšok: koľko je ${@0} + {@1}$?": "Ajoute le reste : combien font ${@0} + {@1}$ ?",
  "Pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Ajoute {@0} : combien font ${@1} + {@2}$ ?",
  "Písomné sčítanie 347 plus 285": "Addition posée 347 plus 285",
  "Rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "Ce sont les {@0} qui décident : {@1} et {@2}. Donc ${@3} {@4} {@5}$.",
  "S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.": "Calcule avec les centaines entières comme avec les unités : 4 centaines + 3 centaines = 7 centaines.",
  "Si o jeden násobok čísla {@0} nižšie. Skontroluj, koľkokrát si pripočítal {@1}.": "Tu es un multiple de {@0} trop bas. Vérifie combien de fois tu as ajouté {@1}.",
  "Si o jeden násobok čísla {@0} vyššie. Skontroluj, koľkokrát si pripočítal {@1}.": "Tu es un multiple de {@0} trop haut. Vérifie combien de fois tu as ajouté {@1}.",
  "Skontroluj obe strany: vľavo počítaj najprv zátvorku, vpravo najprv násobenie.": "Vérifie les deux côtés : à gauche, calcule d'abord la parenthèse, à droite, d'abord la multiplication.",
  "Spomeň si, koľko {@0} je $1\\,\\text{{@1}}$.": "Rappelle-toi combien de {@0} il y a dans $1\\,\\text{{@1}}$.",
  "St": "Me",
  "Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.": "Écris les centaines en premier, les dizaines en deuxième et les unités en troisième. S'il manque quelque chose, écris 0.",
  "Stovky sú prvá číslica zľava, jednotky posledná.": "Les centaines, c'est le premier chiffre à gauche, les unités le dernier.",
  "Stranu si vynásobil samu sebou. Obvod je súčet všetkých štyroch strán.": "Tu as multiplié le côté par lui-même. Le périmètre est la somme des quatre côtés.",
  "Strany si vynásobil. Obvod je dĺžka čiary okolo útvaru – strany treba sčítať.": "Tu as multiplié les côtés. Le périmètre est la longueur de la ligne qui fait le tour de la figure – il faut additionner les côtés.",
  "Strany vyzerajú podobne, ale zátvorka mení poradie počítania. Vypočítaj obe strany zvlášť.": "Les deux côtés se ressemblent, mais la parenthèse change l'ordre des calculs. Calcule chaque côté séparément.",
  "Sčítaj pondelok a utorok: koľko je ${@0} + {@1}$?": "Additionne lundi et mardi : combien font ${@0} + {@1}$ ?",
  "Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.": "Additionne tous les nombres. Ça aide de chercher d'abord des paires qui font un nombre rond.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany – každú dĺžku pripočítaj dvakrát.": "Tu as additionné seulement deux côtés. Le rectangle a quatre côtés – ajoute chaque longueur deux fois.",
  "Sčítal si čísla zo zadania. {@0} a {@1} nie sú počty detí, ale o koľko má dieťa viac alebo menej. Najprv zisti, koľko má každé dieťa.": "Tu as additionné les nombres de l'énoncé. {@0} et {@1} ne sont pas les quantités des enfants, mais combien un enfant a de plus ou de moins. Trouve d'abord combien a chaque enfant.",
  "Tabuľka násobilky do 10 krát 10": "Table de multiplication jusqu'à 10 fois 10",
  "Taška zemiakov váži 5 …": "Un sac de pommes de terre pèse 5 …",
  "Teraz dokonči: koľko je ${@0} {@1} {@2}$?": "Maintenant, termine : combien font ${@0} {@1} {@2}$ ?",
  "Tlesknutie trvá asi 1 …": "Un applaudissement dure environ 1 …",
  "To je cena celého nákupu. Ešte zisti, koľko eur vrátili z bankovky.": "Ça, c'est le prix de tous les achats. Trouve encore combien d'euros on a rendus sur le billet.",
  "To je len počet v balíčkoch. Pripočítaj ešte {@0} navyše.": "Ça, c'est seulement ce qu'il y a dans les paquets. Ajoute encore les {@0} en plus.",
  "To sú obe zvyšné strany spolu. Rozdeľ to ešte na polovicu.": "Ça, ce sont les deux autres côtés ensemble. Partage encore en deux.",
  "Toľko má len {@0}. Pýtame sa, koľko majú všetky tri deti spolu.": "C'est seulement ce qu'a {@0}. On demande combien les trois enfants ont en tout.",
  "Toľko stromčekov záhradník zasadil. Uschnuté stromčeky ešte odčítaj.": "C'est le nombre d'arbustes que le jardinier a plantés. Soustrais encore les arbustes qui ont séché.",
  "Trojuholník má strany ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ a ${@2}\\,\\text{cm}$. Aký má obvod (v cm)?": "Un triangle a des côtés de ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ et ${@2}\\,\\text{cm}$. Quel est son périmètre (en cm) ?",
  "Tréning začal o {@0} a skončil o {@1}. Koľko minút trval?": "L'entraînement a commencé à {@0} et s'est terminé à {@1}. Combien de minutes a-t-il duré ?",
  "Upečené koláče": "Gâteaux cuits",
  "Uschnuté stromčeky ubudli, preto ich odčítaj, nepripočítaj.": "Les arbustes qui ont séché sont en moins : soustrais-les, ne les ajoute pas.",
  "Ut": "Ma",
  "V autobuse sedelo {@0} ľudí. Na zastávke {@1} ľudí vystúpilo a {@2} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?": "Dans le bus, il y avait {@0} personnes. À l'arrêt, {@1} personnes sont descendues et {@2} personnes sont montées. Combien de personnes y a-t-il maintenant dans le bus ?",
  "V balíčkoch: ${@0} \\cdot {@1} = {@2}$. Spolu: ${@3} + {@4} = {@5}$.": "Dans les paquets : ${@0} \\cdot {@1} = {@2}$. En tout : ${@3} + {@4} = {@5}$.",
  "V cukrárni si zapisovali, koľko zmrzlín predali.": "Au glacier, on a noté combien de glaces ont été vendues.",
  "V niektorom stĺpci si odčítal menšiu číslicu od väčšej, hoci väčšia bola dole. Vtedy si treba požičať desiatku z vedľajšieho stĺpca.": "Dans une colonne, tu as soustrait le plus petit chiffre du plus grand, alors que le plus grand était en bas. Dans ce cas, il faut emprunter une dizaine à la colonne voisine.",
  "V pekárni si zapisovali, koľko koláčov upiekli.": "À la boulangerie, on a noté combien de gâteaux ont été cuits.",
  "V piatok": "Vendredi",
  "V pondelok": "Lundi",
  "V stredu": "Mercredi",
  "V tento deň je najmenšie číslo. Hľadáme najväčšie.": "Ce jour-là, il y a le plus petit nombre. On cherche le plus grand.",
  "V tento deň je najväčšie číslo. Hľadáme najmenšie.": "Ce jour-là, il y a le plus grand nombre. On cherche le plus petit.",
  "V utorok": "Mardi",
  "Vo vedre je 10 …": "Dans le seau, il y a 10 …",
  "Vo štvrtok": "Jeudi",
  "Vydeľ so zvyškom: ${@0} : {@1}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).": "Fais la division avec reste : ${@0} : {@1}$. Écris le quotient et le reste séparés par un point-virgule (par ex. 4; 1).",
  "Vypočítaj $({@0} + {@1}) : {@2}$.": "Calcule $({@0} + {@1}) : {@2}$.",
  "Vypočítaj $({@0} {@1} {@2}) \\cdot {@3}$.": "Calcule $({@0} {@1} {@2}) \\cdot {@3}$.",
  "Vypočítaj ${@0} - ({@1} - {@2})$.": "Calcule ${@0} - ({@1} - {@2})$.",
  "Vypočítaj ${@0} - {@1} - {@2}$.": "Calcule ${@0} - {@1} - {@2}$.",
  "Vypočítaj ${@0} \\cdot {@1} - {@2} : {@3}$.": "Calcule ${@0} \\cdot {@1} - {@2} : {@3}$.",
  "Vypočítaj ${@0} {@1} {@2} \\cdot {@3}$.": "Calcule ${@0} {@1} {@2} \\cdot {@3}$.",
  "Vypočítaj najprv ${@0} \\cdot {@1}$ a potom pripíš nulu.": "Calcule d'abord ${@0} \\cdot {@1}$, puis ajoute un zéro.",
  "Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.": "Calcule chaque côté séparément. À gauche, commence par la parenthèse, à droite par la multiplication.",
  "Vypočítaj obvod obdĺžnika (v cm).{@0}": "Calcule le périmètre du rectangle (en cm).{@0}",
  "Vystúpili → odčítaj. Nastúpili → pripočítaj.": "Descendus → soustrais. Montés → ajoute.",
  "Vyučovacia hodina trvá 45 …": "Une leçon dure 45 …",
  "Vzdialenosť medzi dvoma mestami je 40 …": "La distance entre deux villes est de 40 …",
  "Vľavo: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Vpravo: ${@6} + {@7} = {@8}$. Preto ${@9} {@10} {@11}$.": "À gauche : $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. À droite : ${@6} + {@7} = {@8}$. Donc ${@9} {@10} {@11}$.",
  "Zabudol si na delenie. Od {@0} neodčítavaš {@1}, ale až výsledok ${@2} : {@3}$.": "Tu as oublié la division. On ne soustrait pas {@1} de {@0}, mais le résultat de ${@2} : {@3}$.",
  "Zabudol si na nulu na mieste desiatok. Bez nej sa číslice posunú a vznikne iné číslo.": "Tu as oublié le zéro au rang des dizaines. Sans lui, les chiffres se décalent et on obtient un autre nombre.",
  "Zabudol si na prenos. Keď je súčet v stĺpci 10 alebo viac, napíš len jednotky a 1 pripočítaj k ďalšiemu stĺpcu vľavo.": "Tu as oublié la retenue. Quand la somme d'une colonne fait 10 ou plus, écris seulement les unités et ajoute 1 à la colonne suivante, à gauche.",
  "Zabudol si pripočítať ešte ${@0}$.": "Tu as oublié d'ajouter encore ${@0}$.",
  "Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.": "Tu as compté seulement deux côtés. Le carré a quatre côtés de même longueur.",
  "Zasadil: ${@0} \\cdot {@1} = {@2}$. Zostalo: ${@3} - {@4} = {@5}$.": "Plantés : ${@0} \\cdot {@1} = {@2}$. Restants : ${@3} - {@4} = {@5}$.",
  "Zisti, o koľko sa líšia dve susedné čísla.": "Regarde quelle est la différence entre deux nombres voisins.",
  "Zmení sa počet desiatok.": "C'est le nombre de dizaines qui change.",
  "Zmení sa počet stoviek.": "C'est le nombre de centaines qui change.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvé miesto, kde sa čísla líšia ({@0}).": "Le signe est à l'envers. Compare en partant de la gauche – c'est le premier rang où les nombres diffèrent qui décide ({@0}).",
  "Zošit je dlhý asi 30 …": "Un cahier mesure environ 30 …",
  "Zuzka si zapisovala, koľko strán knihy prečítala.": "Zoé a noté combien de pages de son livre elle a lues.",
  "Zvyšok je ${@0} - {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "Le reste, c'est ${@0} - {@1}$. Écris le quotient et le reste séparés par un point-virgule.",
  "Zvyšok {@0} je väčší ako deliteľ {@1}, takže sa číslo {@2} do {@3} zmestí ešte raz. Zvyšok musí byť vždy menší ako deliteľ.": "Le reste {@0} est plus grand que le diviseur {@1} : le nombre {@2} rentre donc encore une fois dans {@3}. Le reste doit toujours être plus petit que le diviseur.",
  "Záhradník zasadil {@0} {@1} po {@2} {@3}. {@4} {@5}. Koľko stromčekov zostalo?": "Le jardinier a planté {@0} {@1} de {@2} {@3}. {@4} {@5}. Combien d'arbustes reste-t-il ?",
  "balíčkov": "paquets",
  "balíčky": "paquets",
  "deň": "jour",
  "gaštan": "marron",
  "gaštanov": "marrons",
  "gaštany": "marrons",
  "kartičiek": "cartes",
  "kartičku": "carte",
  "kartičky": "cartes",
  "knihy": "livres",
  "kníh": "livres",
  "koláče": "gâteaux",
  "koláčov": "gâteaux",
  "lopty": "ballons",
  "lôpt": "ballons",
  "orech": "noix",
  "perá": "stylos",
  "piatok": "vendredi",
  "pier": "stylos",
  "podiel; zvyšok": "quotient; reste",
  "pondelok": "lundi",
  "predali": "a-t-on vendu",
  "prečítala Zuzka": "Zoé a-t-elle lu",
  "radov": "rangées",
  "rady": "rangées",
  "stoviek": "centaines",
  "stovku": "centaine",
  "stovky": "centaines",
  "strany": "pages",
  "streda": "mercredi",
  "stredu": "mercredi",
  "stromček uschol": "arbuste a séché",
  "stromčekov": "arbustes",
  "stromčekov uschlo": "arbustes ont séché",
  "stromčeky": "arbustes",
  "stromčeky uschli": "arbustes ont séché",
  "strán": "pages",
  "upiekli v pekárni": "la boulangerie a-t-elle cuit",
  "utorok": "mardi",
  "v piatok": "vendredi",
  "v pondelok": "lundi",
  "v stredu": "mercredi",
  "v utorok": "mardi",
  "vo štvrtok": "jeudi",
  "zmrzliny": "glaces",
  "zmrzlín": "glaces",
  "zošitov": "cahiers",
  "zošity": "cahiers",
  "{@0} je v údajoch číslo {@1}.": "{@0}, les données indiquent le nombre {@1}.",
  "{@0} má o {@1} menej ako {@2}, nie ako {@3}. Skontroluj, od koho odčítaš.": "{@0} a {@1} de moins que {@2}, pas que {@3}. Vérifie à qui tu soustrais.",
  "{@0} má {@1} {@2} po {@3} {@4} a ešte {@5} {@6} navyše. Koľko {@7} má spolu?": "{@0} a {@1} {@2} de {@3} {@4} et encore {@5} {@6} en plus. Combien de {@7} a {@0} en tout ?",
  "{@0} má {@1} {@2}. {@3} má o {@4} viac ako {@5} a {@6} má o {@7} menej ako {@8}. Koľko {@9} majú spolu?": "{@0} a {@1} {@2}. {@3} a {@4} de plus que {@5} et {@6} a {@7} de moins que {@8}. Combien de {@9} ont-ils en tout ?",
  "{@0} {@1} krát {@2} je {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.": "{@0} {@1} fois {@2}, c'est {@3} {@4} : ${@5} \\cdot {@6} = {@7}$.",
  "{@0} {@1} {@2} {@3} po {@4} €. {@5} bankovkou {@6} €. Koľko eur {@7} vrátili?": "{@0} {@1} {@2} {@3} à {@4} € pièce. {@5} avec un billet de {@6} €. Combien d'euros {@7} a-t-on rendus ?",
  "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.": "{@0} {@1}, {@2} {@3} : ${@4} - {@5} = {@6}$.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$.": "{@0} : ${@1} + {@2} = {@3}$. {@4} : ${@5} - {@6} = {@7}$. En tout : ${@8} + {@9} + {@10} = {@11}$.",
  "{@0}Koľko {@1} {@2} spolu za všetkých päť dní?": "{@0}Combien de {@1} {@2} en tout sur les cinq jours ?",
  "{@0}Koľko {@1} {@2} {@3}?": "{@0}Combien de {@1} {@2} {@3} ?",
  "{@0}O koľko viac {@1} {@2} {@3} ako {@4}?": "{@0}Combien de {@1} de plus {@2} {@3} que {@4} ?",
  "{@0}V ktorý deň {@1} najmenej {@2}?": "{@0}Quel jour {@1} le moins de {@2} ?",
  "{@0}V ktorý deň {@1} najviac {@2}?": "{@0}Quel jour {@1} le plus de {@2} ?",
  "Časy si odčítal ako obyčajné čísla. Hodina má len 60 minút – počítaj najprv do celej hodiny.": "Tu as soustrait les heures comme des nombres ordinaires. Une heure n'a que 60 minutes – compte d'abord jusqu'à l'heure pile.",
  "Čo počítaš najprv? Vypočítaj ${@0} \\cdot {@1}$.": "Qu'est-ce que tu calcules en premier ? Calcule ${@0} \\cdot {@1}$.",
  "Číselný rad od 0 do 1000": "La file numérique de 0 à 1000",
  "Čísla klesajú vždy o {@0}: {@1}.": "Les nombres diminuent toujours de {@0} : {@1}.",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}$ na menšiu jednotku $\\text{{@1}}$.": "N'additionne pas tout de suite les nombres. Convertis d'abord ${@0}$ dans la plus petite unité $\\text{{@1}}$.",
  "Čísla rastú vždy o {@0}: {@1}.": "Les nombres augmentent toujours de {@0} : {@1}.",
  "Čísla si len sčítal. {@0}-krát po {@1} je násobenie.": "Tu as seulement additionné les nombres. {@0} fois {@1}, c'est une multiplication.",
  "Číslo {@0} má {@1} {@2}. Koľko je teda ${@3} \\cdot {@4}$?": "Le nombre {@0} a {@1} {@2}. Combien font donc ${@3} \\cdot {@4}$ ?",
  "Číslo {@0} rozdelíme na {@1}: {@2}.": "On décompose le nombre {@0} en {@1} : {@2}.",
  "Čítal si z opačnej strany. Jednotky sú posledná číslica vpravo.": "Tu as lu du mauvais côté. Les unités, c'est le dernier chiffre à droite.",
  "Čítal si z opačnej strany. Stovky sú prvá číslica zľava.": "Tu as lu du mauvais côté. Les centaines, c'est le premier chiffre à gauche.",
  "čokolád": "tablettes de chocolat",
  "čokolády": "tablettes de chocolat",
  "Ľudia, ktorí nastúpili, v autobuse pribudli. Ich počet pripočítaj, neodčítaj.": "Les personnes qui sont montées se sont ajoutées dans le bus. Ajoute leur nombre, ne le soustrais pas.",
  "Ľudia, ktorí vystúpili, z autobusu odišli. Ich počet odčítaj, nepripočítaj.": "Les personnes qui sont descendues ont quitté le bus. Soustrais leur nombre, ne l'ajoute pas.",
  "Št": "Je",
  "Štvorec má 4 rovnaké strany: ${@0} : 4 = {@1}\\,\\text{cm}$.": "Le carré a 4 côtés égaux : ${@0} : 4 = {@1}\\,\\text{cm}$.",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký má obvod (v cm)?": "Un carré a un côté de ${@0}\\,\\text{cm}$. Quel est son périmètre (en cm) ?",
  "štvrtok": "jeudi",
  "„O koľko viac“ zistíš odčítaním.": "On trouve « combien de plus » par une soustraction."
 }
});
