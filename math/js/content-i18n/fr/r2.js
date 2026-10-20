/* Français: preklad js/rocniky/r2.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/r2/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "r2-cisla100": {
   "title": "Les nombres jusqu'à 100",
   "summary": "Dizaines et unités, file numérique et comparaison des nombres jusqu'à 100.",
   "theory": [
    "<p>Chaque nombre à deux chiffres a des <strong>dizaines</strong> et des <strong>unités</strong>. Le nombre 47 a 4 dizaines et 7 unités :\n       $47 = 40 + 7$. Dix dizaines font <strong>cent</strong> : $100$.</p>",
    {
     "fig": "r2-stovka",
     "caption": "Le tableau des nombres jusqu'à 100. Chaque ligne contient une dizaine de nombres. Sous le nombre 47 se trouve 57, c'est-à-dire le nombre plus grand de 10."
    },
    "<p><strong>Comparer :</strong> on compare d'abord les dizaines. Si elles sont égales, on compare les unités.\n       $63 &gt; 58$, car 6 dizaines, c'est plus que 5 dizaines. $42 &lt; 45$, car les dizaines sont égales et 2 est plus petit que 5.</p>"
   ],
   "examples": [
    {
     "task": "Compare les nombres 71 et 17.",
     "steps": [
      "Le nombre 71 a 7 dizaines, le nombre 17 n'a qu'1 dizaine.",
      "<strong>$71 &gt; 17$</strong>"
     ]
    },
    {
     "task": "Quel nombre a 6 dizaines et 3 unités ?",
     "steps": [
      "6 dizaines, c'est 60, plus 3 unités.",
      "$60 + 3 = 63$.",
      "<strong>C'est le nombre 63.</strong>"
     ]
    }
   ]
  },
  "r2-scitanie": {
   "title": "Addition et soustraction jusqu'à 100",
   "summary": "Calculer avec les dizaines, passage de la dizaine et bonds sur la file numérique.",
   "theory": [
    "<p>On additionne des <strong>dizaines entières</strong> comme des unités : $30 + 40$, c'est 3 dizaines et 4 dizaines, donc 7 dizaines, $70$.\n       De même, $90 - 60 = 30$.</p>",
    "<p>Avec de plus grands nombres, on partage le deuxième nombre en <strong>dizaines et unités</strong> et on les ajoute l'une après l'autre.\n       Pour $38 + 25$, on ajoute d'abord 20, puis 5.</p>",
    {
     "fig": "r2-skoky",
     "caption": "$38 + 25$ : un bond de 20 nous amène à 58, un bond de 5 à 63. Donc $38 + 25 = 63$."
    },
    "<p>Pour soustraire, on fait pareil : $72 - 34$, c'est d'abord $72 - 30 = 42$, puis $42 - 4 = 38$.\n       On peut vérifier le résultat par une addition : $38 + 34 = 72$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $47 + 36$.",
     "steps": [
      "On partage le nombre 36 en 30 et 6.",
      "$47 + 30 = 77$.",
      "$77 + 6 = 83$.",
      "<strong>Résultat : 83</strong>"
     ]
    },
    {
     "task": "Calcule $81 - 25$.",
     "steps": [
      "On partage le nombre 25 en 20 et 5.",
      "$81 - 20 = 61$.",
      "$61 - 5 = 56$.",
      "Vérification : $56 + 25 = 81$. <strong>Résultat : 56</strong>"
     ]
    }
   ]
  },
  "r2-nasobenie": {
   "title": "Multiplication et division",
   "summary": "La multiplication comme addition répétée, la division en parts égales.",
   "theory": [
    "<p>La <strong>multiplication</strong> est une façon rapide d'additionner des nombres égaux. Au lieu de $4 + 4 + 4$, on écrit $3 \\cdot 4$\n       (trois fois quatre). Les nombres qu'on multiplie sont les <em>facteurs</em>, le résultat est le <em>produit</em>.</p>",
    {
     "fig": "r2-pole",
     "caption": "3 rangées de 4 points : $4 + 4 + 4 = 3 \\cdot 4 = 12$. Si on lit par colonnes, on a 4 colonnes de 3 points : $4 \\cdot 3 = 12$."
    },
    "<p>L'ordre des facteurs ne compte pas : $3 \\cdot 4 = 4 \\cdot 3$. Un nombre multiplié par 1 ne change pas ($7 \\cdot 1 = 7$)\n       et un nombre multiplié par 0 donne 0 ($5 \\cdot 0 = 0$).</p>",
    "<p>La <strong>division</strong>, c'est partager en parts égales. Si on partage 12 bonbons de façon égale entre 3 enfants, chacun reçoit\n       $12 : 3 = 4$. La division est l'inverse de la multiplication : $12 : 3 = 4$, car $3 \\cdot 4 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "Écris la somme $5 + 5 + 5 + 5$ sous forme de multiplication et calcule.",
     "steps": [
      "On additionne le nombre 5 quatre fois.",
      "$4 \\cdot 5 = 20$.",
      "<strong>Résultat : 20</strong>"
     ]
    },
    {
     "task": "Avec 15 fleurs, on fait des bouquets de 5 fleurs. Combien y aura-t-il de bouquets ?",
     "steps": [
      "On cherche combien de fois 5 tient dans 15.",
      "$15 : 5 = 3$, car $3 \\cdot 5 = 15$.",
      "<strong>Il y aura 3 bouquets.</strong>"
     ]
    }
   ]
  },
  "r2-nasobilka": {
   "title": "Les multiples et les tables de multiplication",
   "summary": "Les tables jusqu'à 10 · 10, les multiples d'un nombre et la division avec les tables.",
   "theory": [
    "<p>On obtient les <strong>multiples d'un nombre</strong> en le multipliant successivement par 1, 2, 3, … Les multiples de 3 sont\n       3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Sur la file numérique, on fait toujours des bonds de 3.</p>",
    {
     "fig": "r2-nasobky",
     "caption": "Les multiples de 3 : chaque bond mesure 3. Après quatre bonds, on arrive au nombre $4 \\cdot 3 = 12$."
    },
    "<p>Astuces utiles : les multiples de 2 sont les nombres pairs, les multiples de 5 se terminent par 0 ou 5, les multiples de 10 se terminent par 0.\n       Si tu ne sais pas $6 \\cdot 4$, aide-toi : $5 \\cdot 4 = 20$ et encore une fois 4, donc $24$.</p>",
    "<p>Une multiplication nous donne tout de suite deux divisions : de $6 \\cdot 4 = 24$ on déduit $24 : 4 = 6$ et $24 : 6 = 4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $7 \\cdot 5$.",
     "steps": [
      "Multiples de 5 : 5, 10, 15, 20, 25, 30, 35.",
      "Le septième multiple est 35.",
      "<strong>$7 \\cdot 5 = 35$</strong>"
     ]
    },
    {
     "task": "Calcule $32 : 4$.",
     "steps": [
      "On cherche le nombre qui, multiplié par 4, donne 32.",
      "$8 \\cdot 4 = 32$.",
      "<strong>$32 : 4 = 8$</strong>"
     ]
    }
   ]
  },
  "r2-slovne": {
   "title": "Problèmes et mise en données",
   "summary": "D'un problème à un calcul : addition, soustraction, multiplication et division.",
   "theory": [
    "<p>Pour un problème, on note d'abord ce qu'on <strong>sait</strong> et ce qu'on <strong>cherche</strong>. Ensuite, on choisit la bonne\n       opération, on calcule et on écrit la <strong>réponse</strong> par une phrase complète.</p>",
    "<ul><li><em>a reçu, il y en a eu en plus, en tout, … de plus</em> → addition,</li>\n       <li><em>a donné, il reste, … de moins, combien de plus</em> → soustraction,</li>\n       <li><em>… de chaque (plusieurs fois la même chose)</em> → multiplication,</li>\n       <li><em>a partagé de façon égale, combien de groupes de …</em> → division.</li></ul>",
    "<p>La <strong>mise en données</strong> du problème peut ressembler à ceci :<br>Lucas avait … 35 billes<br>il a perdu … 12 billes<br>\n       il reste … ? billes<br>$35 - 12 = 23$<br>Réponse : il reste 23 billes à Lucas.</p>"
   ],
   "examples": [
    {
     "task": "Léa a 28 autocollants. Adam a 15 autocollants de plus. Combien d'autocollants Adam a-t-il ?",
     "steps": [
      "« 15 de plus » veut dire ajouter 15 à 28.",
      "$28 + 15 = 43$.",
      "<strong>Réponse : Adam a 43 autocollants.</strong>"
     ]
    },
    {
     "task": "Maman a mis 5 pommes sur chacune de 4 assiettes. Combien y a-t-il de pommes sur les assiettes en tout ?",
     "steps": [
      "4 fois 5, c'est une multiplication.",
      "$4 \\cdot 5 = 20$.",
      "<strong>Réponse : il y a 20 pommes sur les assiettes.</strong>"
     ]
    }
   ]
  },
  "r2-ciary": {
   "title": "Point, segment, droite et ligne courbe",
   "summary": "Reconnaître les lignes, mesurer et comparer des segments.",
   "theory": [
    "<p>On dessine un <strong>point</strong> comme un petit point et on le nomme avec une lettre majuscule, par exemple le point $A$.\n       Un <strong>segment</strong> est une ligne droite entre deux points, par exemple le segment $CD$. Les points $C$ et $D$ sont ses extrémités.</p>",
    "<p>Une <strong>droite</strong> est une ligne droite qui n'a ni début ni fin, on peut la prolonger des deux côtés.\n       On la nomme avec une lettre minuscule, par exemple la droite $p$. Une <strong>ligne courbe</strong> n'est pas droite, elle tourne.</p>",
    {
     "fig": "r2-ciary",
     "caption": "Point, segment, droite et ligne courbe. On trace les lignes droites à la règle."
    },
    "<p>On mesure la longueur d'un segment avec une règle, en <strong>centimètres</strong>. On place le zéro de la règle sur l'extrémité $A$\n       et on lit le nombre au niveau du point $B$.</p>",
    {
     "fig": "r2-pravitko",
     "caption": "Le segment $AB$ commence à zéro et se termine au nombre 7. Il mesure $7\\,\\text{cm}$."
    }
   ],
   "examples": [
    {
     "task": "Quelle ligne a deux extrémités ?",
     "steps": [
      "Le point n'est qu'un petit point, la droite et la ligne courbe n'ont pas d'extrémités.",
      "<strong>Le segment a deux extrémités.</strong>"
     ]
    },
    {
     "task": "Le segment $AB$ mesure $9\\,\\text{cm}$, le segment $CD$ mesure $4\\,\\text{cm}$. De combien le segment $AB$ est-il plus long ?",
     "steps": [
      "On compare, donc on soustrait.",
      "$9 - 4 = 5$.",
      "<strong>Le segment $AB$ est plus long de $5\\,\\text{cm}$.</strong>"
     ]
    }
   ]
  },
  "r2-jednotky": {
   "title": "Unités de longueur, de temps et de monnaie",
   "summary": "Centimètre et mètre, heures et minutes, euros et centimes.",
   "theory": [
    "<p><strong>Longueur :</strong> on mesure les petites choses en centimètres (cm), les plus longues en mètres (m).\n       $1\\,\\text{m} = 100\\,\\text{cm}$ et $1\\,\\text{dm} = 10\\,\\text{cm}$.</p>",
    "<p><strong>Temps :</strong> une journée dure 24 heures, une heure (h) dure 60 minutes (min). Une demi-heure, c'est 30 minutes, un quart d'heure, c'est 15 minutes.\n       Sur une horloge, la <em>petite aiguille</em> indique les heures et la <em>grande aiguille</em> les minutes.</p>",
    {
     "fig": "r2-hodiny",
     "caption": "À gauche, il est 7:00, la grande aiguille montre le 12. À droite, il est 2:30 (deux heures et demie), la grande aiguille montre le 6 et la petite est entre 2 et 3."
    },
    "<p><strong>Monnaie :</strong> on paie en euros (€) et en centimes (c). $1\\,\\text{€} = 100$ centimes.\n       Les pièces sont de 1 c, 2 c, 5 c, 10 c, 20 c, 50 c, 1 € et 2 €.</p>",
    {
     "fig": "r2-mince",
     "caption": "Les pièces en euros, de la plus petite à la plus grande valeur."
    }
   ],
   "examples": [
    {
     "task": "Combien de minutes font 1 heure et 15 minutes ?",
     "steps": [
      "1 heure, c'est 60 minutes.",
      "$60 + 15 = 75$.",
      "<strong>Cela fait 75 minutes.</strong>"
     ]
    },
    {
     "task": "Dans ton porte-monnaie, tu as des pièces de 50 c, 20 c et 20 c. Combien de centimes manque-t-il pour avoir 1 euro ?",
     "steps": [
      "$50 + 20 + 20 = 90$ centimes.",
      "1 euro, c'est 100 centimes : $100 - 90 = 10$.",
      "<strong>Il manque 10 centimes.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{dm} = 10\\,\\text{cm}$, teda ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.": "$1\\,\\text{dm} = 10\\,\\text{cm}$, donc ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.",
  "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Chýba ${@2}\\,\\text{cm}$.": "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Il manque ${@2}\\,\\text{cm}$.",
  "${@0} - {@1} = {@2}$. Úsečka $KL$ je o ${@3}\\,\\text{cm}$ dlhšia.": "${@0} - {@1} = {@2}$. Le segment $KL$ est plus long de ${@3}\\,\\text{cm}$.",
  "${@0} : {@1} = {@2}$, teda ${@3} \\cdot {@4} = {@5}$.": "${@0} : {@1} = {@2}$, donc ${@3} \\cdot {@4} = {@5}$.",
  "${@0} = {@1}$ centov.": "${@0} = {@1}$ centimes.",
  "${@0} \\cdot {@1} = {@2}$, preto ${@3} : {@4} = {@5}$.": "${@0} \\cdot {@1} = {@2}$, donc ${@3} : {@4} = {@5}$.",
  "${@0} \\cdot {@1} = {@2}$, preto {@3} je násobok čísla {@4}. Ostatné čísla v násobilke čísla {@5} nie sú.": "${@0} \\cdot {@1} = {@2}$, donc {@3} est un multiple de {@4}. Les autres nombres ne sont pas dans la table de {@5}.",
  "1 dm je 10 cm.": "1 dm, c'est 10 cm.",
  "1 euro je 100 centov: $100 - {@0} = {@1}$. Chýba {@2} {@3}.": "1 euro, c'est 100 centimes : $100 - {@0} = {@1}$. Il manque {@2} {@3}.",
  "1 hodina": "1 heure",
  "1 hodina je 60 minút: $60 + {@0} = {@1}$ minút.": "1 heure, c'est 60 minutes : $60 + {@0} = {@1}$ minutes.",
  "1 m je 100 cm.": "1 m, c'est 100 cm.",
  "1 € = 100 centov.": "1 € = 100 centimes.",
  "Aká dlhá je úsečka $AB$? Odpoveď napíš v centimetroch.{@0}": "Quelle est la longueur du segment $AB$ ? Écris la réponse en centimètres.{@0}",
  "Bod $A$ je pri čísle {@0}, bod $B$ pri čísle {@1}. ${@2} - {@3} = {@4}$, úsečka meria ${@5}\\,\\text{cm}$.": "Le point $A$ est au nombre {@0}, le point $B$ au nombre {@1}. ${@2} - {@3} = {@4}$, le segment mesure ${@5}\\,\\text{cm}$.",
  "Bod je len jedna malá bodka. Na obrázku je čiara.": "Un point, c'est juste un petit point. Sur l'image, il y a une ligne.",
  "Bod, úsečka, priamka a krivá čiara": "Point, segment, droite et ligne courbe",
  "Celá dĺžka je súčet dĺžok všetkých úsečiek.": "La longueur totale est la somme des longueurs de tous les segments.",
  "Celá lomená čiara je dlhšia ako každá jej časť. Dĺžky úsečiek sčítaj, nie odčítaj.": "La ligne brisée entière est plus longue que chacune de ses parties. Additionne les longueurs des segments, ne les soustrais pas.",
  "Centimeter je veľmi malý, asi ako šírka prsta. Tu treba väčšiu jednotku.": "Le centimètre est tout petit, à peu près la largeur d'un doigt. Ici, il faut une unité plus grande.",
  "Centov máš 100 alebo viac. Zo 100 centov je ďalšie celé euro – pripočítaj ho k eurám.": "Tu as 100 centimes ou plus. 100 centimes font un euro de plus – ajoute-le aux euros.",
  "Ceny píšeme v eurách.": "Les prix s'écrivent en euros.",
  "Ceruzka je dlhá asi 15 …": "Un crayon mesure environ 15 …",
  "Cez dva rôzne body prechádza práve jedna priamka.": "Par deux points différents passe exactement une droite.",
  "Chýbajúce číslo zistíme odčítaním: ${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "On trouve le nombre qui manque par une soustraction : ${@0} - {@1} = {@2}$. Vérification : ${@3} + {@4} = {@5}$.",
  "Delenie nie je odčítanie. Hľadaj číslo, ktoré krát {@0} dá {@1}.": "La division n'est pas une soustraction. Cherche le nombre qui, multiplié par {@0}, donne {@1}.",
  "Delíme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "On partage en {@0} {@1} : ${@2} : {@3} = {@4}$, car ${@5} \\cdot {@6} = {@7}$.",
  "Desať nepripočítavaj. Každý decimeter má 10 cm, preto počet decimetrov násob desiatimi.": "N'ajoute pas dix. Chaque décimètre vaut 10 cm : multiplie donc le nombre de décimètres par dix.",
  "Desiatky a jednotky nesčítavaj ako obyčajné čísla. Desiatky napíš na prvé miesto a jednotky za ne.": "N'additionne pas les dizaines et les unités comme des nombres ordinaires. Écris les dizaines en premier et les unités après.",
  "Desiatky sú rovnaké, porovnáme jednotky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "Les dizaines sont égales, on compare les unités : {@0} et {@1}. Donc ${@2} {@3} {@4}$.",
  "Deň (s nocou) má 24 hodín.": "Une journée (avec la nuit) dure 24 heures.",
  "Dlhšie veci meriame v metroch.": "On mesure les objets plus longs en mètres.",
  "Dlhší čas meriame v hodinách.": "On mesure les durées plus longues en heures.",
  "Dom je vysoký asi 10 …": "Une maison est haute d'environ 10 …",
  "Doplň chýbajúce číslo: ${@0} - \\square = {@1}$": "Complète le nombre qui manque : ${@0} - \\square = {@1}$",
  "Doplň chýbajúce číslo: ${@0} \\cdot \\square = {@1}$": "Complète le nombre qui manque : ${@0} \\cdot \\square = {@1}$",
  "Doplň chýbajúci násobok čísla {@0}: {@1}": "Complète le multiple de {@0} qui manque : {@1}",
  "Doplň správnu jednotku: {@0}": "Complète avec la bonne unité : {@0}",
  "Doplň číslo, ktoré chýba v rade: {@0}": "Complète le nombre qui manque dans la suite : {@0}",
  "Dĺžky nesčítavaj. Pýtame sa, o koľko je jedna úsečka dlhšia – odčítaj.": "N'additionne pas les longueurs. On demande de combien un segment est plus long – soustrais.",
  "Dĺžky sčítame: ${@0} + {@1} = {@2}$. Lomená čiara meria ${@3}\\,\\text{cm}$.": "On additionne les longueurs : ${@0} + {@1} = {@2}$. La ligne brisée mesure ${@3}\\,\\text{cm}$.",
  "Euromince": "Pièces en euros",
  "Hodina je dlhý čas. Tu treba kratšiu jednotku.": "Une heure, c'est long. Ici, il faut une unité plus courte.",
  "Hodina má 60 minút. Polovica z 60 je 30, štvrtina je 15.": "Une heure a 60 minutes. La moitié de 60, c'est 30, le quart, c'est 15.",
  "Hodina má 60 minút. {@0} je {@1} minút.": "Une heure a 60 minutes. {@0}, c'est {@1} minutes.",
  "Hodina nemá 100 minút, ale 60 minút.": "Une heure n'a pas 100 minutes, mais 60 minutes.",
  "Hodinu musíš najprv premeniť na minúty: 1 hodina je 60 minút.": "Change d'abord l'heure en minutes : 1 heure, c'est 60 minutes.",
  "Hodiny ukazujú 7:00 a 2:30": "Les horloges indiquent 7:00 et 2:30",
  "Hľadaj suseda čísla v číselnom rade.": "Cherche le voisin du nombre sur la file numérique.",
  "Je to dĺžka, čas, alebo cena? A je to krátke, alebo dlhé?": "Est-ce une longueur, une durée ou un prix ? Et est-ce court ou long ?",
  "Je to len jedna bodka, teda bod.": "C'est juste un petit point, donc c'est un point.",
  "Je čiara rovná? Má krajné body?": "La ligne est-elle droite ? A-t-elle des extrémités ?",
  "Jednotky dali spolu viac ako 10, ale zabudol si pripočítať túto novú desiatku.": "Les unités ensemble font plus de 10, mais tu as oublié d'ajouter cette nouvelle dizaine.",
  "Každé ďalšie číslo je o {@0} väčšie.": "Chaque nombre suivant est plus grand de {@0}.",
  "Keď je viackrát to isté číslo, môžeš násobiť.": "Quand le même nombre revient plusieurs fois, tu peux multiplier.",
  "Kniha stojí asi 12 …": "Un livre coûte environ 12 …",
  "Koľko centimetrov je ${@0}\\,\\text{dm}$?": "Combien de centimètres font ${@0}\\,\\text{dm}$ ?",
  "Koľko centimetrov je od {@0} po {@1}? Vypočítaj ${@2} - {@3}$.": "Combien de centimètres y a-t-il de {@0} à {@1} ? Calcule ${@2} - {@3}$.",
  "Koľko centimetrov má 1 meter?": "Combien de centimètres y a-t-il dans 1 mètre ?",
  "Koľko centov je spolu?{@0}": "Combien de centimes y a-t-il en tout ?{@0}",
  "Koľko centov je v ostatných minciach?": "Combien de centimes y a-t-il dans les autres pièces ?",
  "Koľko centov má 1 euro?": "Combien de centimes y a-t-il dans 1 euro ?",
  "Koľko eur je v minciach 1 € a 2 €?": "Combien d'euros y a-t-il dans les pièces de 1 € et de 2 € ?",
  "Koľko hodín má jeden deň?": "Combien d'heures y a-t-il dans une journée ?",
  "Koľko je $100 - {@0}$?": "Combien font $100 - {@0}$ ?",
  "Koľko je $60 + {@0}$?": "Combien font $60 + {@0}$ ?",
  "Koľko je ${@0} \\cdot {@1}$?": "Combien font ${@0} \\cdot {@1}$ ?",
  "Koľko je hodín?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"ciferník hodín\">{@0}</svg>": "Quelle heure est-il ?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"cadran d'horloge\">{@0}</svg>",
  "Koľko je skupín?": "Combien y a-t-il de groupes ?",
  "Koľko je spolu {@0}? <span class=\"emoji-row\">{@1}</span>": "Combien de {@0} y a-t-il en tout ? <span class=\"emoji-row\">{@1}</span>",
  "Koľko je to spolu eur a centov? Napíš dve čísla oddelené bodkočiarkou (napr. 2; 35).{@0}": "Combien d'euros et de centimes cela fait-il en tout ? Écris deux nombres séparés par un point-virgule (par ex. 2; 35).{@0}",
  "Koľko krajných bodov má priamka?": "Combien d'extrémités a une droite ?",
  "Koľko krajných bodov má úsečka?": "Combien d'extrémités a un segment ?",
  "Koľko kúskov je v jednej skupine?": "Combien y en a-t-il dans un groupe ?",
  "Koľko minút je 1 hodina a {@0} minút?": "Combien de minutes font 1 heure et {@0} minutes ?",
  "Koľko minút je {@0}?": "Combien de minutes y a-t-il dans {@0} ?",
  "Koľko minút má 1 hodina?": "Combien de minutes y a-t-il dans 1 heure ?",
  "Koľko priamok môžeš nakresliť cez dva rôzne body?": "Combien de droites peux-tu tracer par deux points différents ?",
  "Koľkokrát musíš sčítať {@0}, aby si dostal {@1}?": "Combien de fois dois-tu additionner {@0} pour obtenir {@1} ?",
  "Koľkokrát sa opakuje to isté číslo?": "Combien de fois le même nombre revient-il ?",
  "Koľkokrát sa v súčte opakuje číslo {@0}?": "Combien de fois le nombre {@0} revient-il dans la somme ?",
  "Krivá čiara je čiara. Tu je len jedna bodka.": "Une ligne courbe est une ligne. Ici, il n'y a qu'un petit point.",
  "Krivá čiara sa zatáča. Táto čiara je rovná.": "Une ligne courbe tourne. Cette ligne est droite.",
  "Krátka ručička je ešte len medzi {@0} a {@1}. Kým nedôjde k {@2}, platí menšia hodina.": "La petite aiguille est encore seulement entre le {@0} et le {@1}. Tant qu'elle n'est pas arrivée au {@2}, c'est l'heure la plus petite qui compte.",
  "Krátka ručička ukazuje hodiny, dlhá minúty. Keď je dlhá na 6, je pol.": "La petite aiguille indique les heures, la grande les minutes. Quand la grande est sur le 6, c'est la demie.",
  "Krátka ručička {@0}, dlhá ručička ukazuje na {@1}, teda {@2} minút. Je {@3} ({@4}).": "La petite aiguille {@0}, la grande aiguille montre le {@1}, donc {@2} minutes. Il est {@3} ({@4}).",
  "Krátke veci meriame v centimetroch.": "On mesure les objets courts en centimètres.",
  "Krátky čas meriame v minútach.": "On mesure les durées courtes en minutes.",
  "Ktoré celé desiatky sú v čísle {@0}? (Pri čísle 36 by to bolo 30.)": "Quelles dizaines entières y a-t-il dans le nombre {@0} ? (Pour 36, ce serait 30.)",
  "Ktoré z týchto čísel je násobkom čísla {@0}?": "Lequel de ces nombres est un multiple de {@0} ?",
  "Ktoré číslo je o {@0} {@1} ako {@2}?": "Quel nombre est {@1} de {@0} que {@2} ?",
  "Ktoré číslo krát {@0} dá {@1}?": "Quel nombre, multiplié par {@0}, donne {@1} ?",
  "Ktoré číslo má {@0} {@1} a {@2} {@3}?": "Quel nombre a {@0} {@1} et {@2} {@3} ?",
  "Ktorú počtovú operáciu použiješ?": "Quelle opération vas-tu utiliser ?",
  "Lomená čiara sa skladá z dvoch úsečiek. Prvá meria ${@0}\\,\\text{cm}$, druhá ${@1}\\,\\text{cm}$. Aká dlhá je celá lomená čiara (v cm)?": "Une ligne brisée est formée de deux segments. Le premier mesure ${@0}\\,\\text{cm}$, le deuxième ${@1}\\,\\text{cm}$. Quelle est la longueur de toute la ligne brisée (en cm) ?",
  "Meter je asi taký dlhý ako veľký krok. Tu je to priveľa, treba menšiu jednotku.": "Un mètre, c'est à peu près la longueur d'un grand pas. Ici, c'est trop, il faut une unité plus petite.",
  "Mince 1 € a 2 € maj zvlášť, centy sčítaj zvlášť. 100 centov je 1 euro.": "Compte à part les pièces de 1 € et de 2 €, et additionne les centimes à part. 100 centimes font 1 euro.",
  "Minúta je krátky čas. Tu treba dlhšiu jednotku.": "Une minute, c'est court. Ici, il faut une unité plus longue.",
  "Máš {@0} {@1}. Koľko centov ti chýba do 1 eura?": "Tu as {@0} {@1}. Combien de centimes te manque-t-il pour avoir 1 euro ?",
  "Najprv odčítaj desiatky, potom jednotky.": "Soustrais d'abord les dizaines, puis les unités.",
  "Najprv odčítaj desiatky: koľko je ${@0} - {@1}$?": "Soustrais d'abord les dizaines : combien font ${@0} - {@1}$ ?",
  "Najprv odčítame desiatky: ${@0} - {@1} = {@2}$. Potom jednotky: ${@3} - {@4} = {@5}$.": "On soustrait d'abord les dizaines : ${@0} - {@1} = {@2}$. Puis les unités : ${@3} - {@4} = {@5}$.",
  "Najprv porovnaj desiatky. Ak sú rovnaké, porovnaj jednotky.": "Compare d'abord les dizaines. Si elles sont égales, compare les unités.",
  "Najprv premeň hodinu na minúty a potom pripočítaj.": "Change d'abord l'heure en minutes, puis ajoute.",
  "Najprv pripočítaj desiatky: koľko je ${@0} + {@1}$?": "Ajoute d'abord les dizaines : combien font ${@0} + {@1}$ ?",
  "Najprv pripočítame desiatky: ${@0} + {@1} = {@2}$. Potom jednotky: ${@3} + {@4} = {@5}$.": "On ajoute d'abord les dizaines : ${@0} + {@1} = {@2}$. Puis les unités : ${@3} + {@4} = {@5}$.",
  "Neodčítavaj. Cukríky rozdeľujeme rovnako, to je delenie.": "Ne soustrais pas. On partage les bonbons en parts égales, c'est une division.",
  "Neodčítavaj. Hľadáš číslo, ktoré krát {@0} dá {@1}.": "Ne soustrais pas. Tu cherches le nombre qui, multiplié par {@0}, donne {@1}.",
  "Neodčítavaj. Keď rozdeľujeme rovnako, delíme.": "Ne soustrais pas. Quand on partage en parts égales, on divise.",
  "Neodčítavaj. Zisťujeme, koľkokrát sa {@0} zmestí do {@1}, to je delenie.": "Ne soustrais pas. On cherche combien de fois {@0} rentre dans {@1}, c'est une division.",
  "Nesčítavaj počet sčítancov a číslo {@0}. Číslo {@1} sa opakuje {@2}-krát – to je násobenie.": "N'additionne pas le nombre de termes et le nombre {@0}. Le nombre {@1} revient {@2} fois – c'est une multiplication.",
  "Násobenie použiješ, keď máš viackrát po rovnako.": "Tu utilises la multiplication quand tu as plusieurs fois la même quantité.",
  "Násobky {@0} rastú vždy o {@1}: {@2}. Chýba ${@3} \\cdot {@4} = {@5}$.": "Les multiples de {@0} augmentent toujours de {@1} : {@2}. Il manque ${@3} \\cdot {@4} = {@5}$.",
  "Násobky {@0}: {@1}. Teda ${@2} \\cdot {@3} = {@4}$.": "Les multiples de {@0} : {@1}. Donc ${@2} \\cdot {@3} = {@4}$.",
  "Násobky čísla 3 na číselnom rade": "Les multiples de 3 sur la file numérique",
  "O koľko je {@0} viac ako {@1}?": "De combien {@0} est-il plus grand que {@1} ?",
  "Od {@0} sme ubrali toľko, koľko je ${@1} - {@2} = {@3}$. Skúška: ${@4} - {@5} = {@6}$.": "À {@0}, on a enlevé autant que ${@1} - {@2} = {@3}$. Vérification : ${@4} - {@5} = {@6}$.",
  "Odčítanie použiješ, keď niečo ubudne.": "Tu utilises la soustraction quand quelque chose diminue.",
  "Otázka „o koľko viac“ sa rieši odčítaním väčšieho a menšieho čísla.": "La question « combien de plus » se résout en soustrayant le plus petit nombre du plus grand.",
  "Palec na ruke je dlhý asi 5 …": "Le pouce mesure environ 5 …",
  "Pol hodiny": "Une demi-heure",
  "Porovnáme desiatky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "On compare les dizaines : {@0} et {@1}. Donc ${@2} {@3} {@4}$.",
  "Porovnávame, preto odčítame: {@0} {@1} má o {@2} {@3} viac.": "On compare, donc on soustrait : {@0} {@1} a {@2} {@3} de plus.",
  "Posunul si sa na opačnú stranu. Menšie číslo dostaneš odčítaním.": "Tu es allé du mauvais côté. On obtient le nombre plus petit en soustrayant.",
  "Posunul si sa na opačnú stranu. Väčšie číslo dostaneš pripočítaním.": "Tu es allé du mauvais côté. On obtient le nombre plus grand en ajoutant.",
  "Pozor, úsečka nezačína na nule. Spočítaj centimetre medzi A a B.": "Attention, le segment ne commence pas à zéro. Compte les centimètres entre A et B.",
  "Pozri sa na dve susedné čísla. O koľko sa líšia?": "Regarde deux nombres voisins. Quelle est leur différence ?",
  "Pozri sa presne, na ktoré číslo ukazuje krátka ručička.": "Regarde bien sur quel nombre la petite aiguille est posée.",
  "Pozri sa, pri ktorom čísle je bod B.": "Regarde à quel nombre se trouve le point B.",
  "Počet skupín a počet v jednej skupine nesčítavaj. Rovnaké skupiny spočítaš násobením.": "N'additionne pas le nombre de groupes et la quantité dans un groupe. On compte des groupes égaux avec une multiplication.",
  "Počet tanierov a počet na jednom tanieri nesčítavaj. Na každom tanieri je rovnako – násob.": "N'additionne pas le nombre d'assiettes et la quantité sur une assiette. Il y a la même chose sur chaque assiette – multiplie.",
  "Počítaj s desiatkami ako s jednotkami: 3 desiatky + 4 desiatky = 7 desiatok.": "Calcule avec les dizaines comme avec les unités : 3 dizaines + 4 dizaines = 7 dizaines.",
  "Počítal si, akoby mala hodina 100 minút. Hodina má len 60 minút.": "Tu as calculé comme si une heure avait 100 minutes. Une heure n'a que 60 minutes.",
  "Pravítko a úsečka AB": "Règle et segment AB",
  "Prejdi násobky čísla {@0}, kým nenájdeš {@1}.": "Parcours les multiples de {@0} jusqu'à trouver {@1}.",
  "Prestávka trvá 10 …": "La récréation dure 10 …",
  "Prečítal si len číslo pri bode B. Úsečka nezačína na nule, preto odčítaj číslo pri bode A.": "Tu as seulement lu le nombre au point B. Le segment ne commence pas à zéro : soustrais donc le nombre au point A.",
  "Pri jednotkách si odčítal obrátene ({@0} − {@1}). Keď jednotky nestačia, prejdi cez desiatku: uber najprv desiatky, potom jednotky.": "Pour les unités, tu as soustrait à l'envers ({@0} − {@1}). Quand il n'y a pas assez d'unités, passe par la dizaine : enlève d'abord les dizaines, puis les unités.",
  "Pri ktorom čísle na pravítku je bod A?": "À quel nombre de la règle se trouve le point A ?",
  "Pri ktorom čísle na pravítku je bod B?": "À quel nombre de la règle se trouve le point B ?",
  "Priamka je rovná čiara. Tu je len jedna bodka.": "Une droite est une ligne droite. Ici, il n'y a qu'un petit point.",
  "Priamka je rovná. Táto čiara sa zatáča.": "Une droite est droite. Cette ligne tourne.",
  "Priamka nemá krajné body. Táto čiara má dva krajné body, kde začína a končí.": "Une droite n'a pas d'extrémités. Cette ligne a deux extrémités, là où elle commence et finit.",
  "Priamka nemá začiatok ani koniec, nemá žiadny krajný bod.": "Une droite n'a ni début ni fin, elle n'a aucune extrémité.",
  "Pribudlo → sčítanie, ubudlo → odčítanie, viackrát po rovnako → násobenie.": "Il y en a plus → addition, il y en a moins → soustraction, plusieurs fois la même quantité → multiplication.",
  "Pribudlo, preto sčítame.": "Il y en a plus, donc on additionne.",
  "Pridávame, preto sčítame: {@0} {@1} má {@2} {@3}.": "On ajoute, donc on additionne : {@0} {@1} a {@2} {@3}.",
  "Pripočítal si len desiatky. Nezabudni pridať aj {@0} {@1}.": "Tu as ajouté seulement les dizaines. N'oublie pas d'ajouter aussi {@0} {@1}.",
  "Pripočítavaj {@0} toľkokrát, koľko je {@1}, alebo si spomeň na násobilku čísla {@2}.": "Ajoute {@0} autant de fois que {@1}, ou rappelle-toi la table de {@2}.",
  "Rovnaké rozdeľovanie je delenie.": "Partager en parts égales, c'est diviser.",
  "Rovná čiara bez krajných bodov, ktorá ide cez celý obrázok, je priamka.": "Une ligne droite sans extrémités qui traverse toute l'image est une droite.",
  "Rovná čiara s dvoma krajnými bodmi je úsečka.": "Une ligne droite avec deux extrémités est un segment.",
  "Rozdeľ druhé číslo na desiatky a jednotky a pripočítaj ich postupne.": "Partage le deuxième nombre en dizaines et en unités, et ajoute-les l'un après l'autre.",
  "Rozdeľujeme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$. Každý dostal {@8} {@9}.": "On partage en {@0} {@1} : ${@2} : {@3} = {@4}$, car ${@5} \\cdot {@6} = {@7}$. Chacun a reçu {@8} {@9}.",
  "Rozlož číslo na desiatky a jednotky: ${@0} = \\square + \\square$.": "Décompose le nombre en dizaines et en unités : ${@0} = \\square + \\square$.",
  "Si o jeden násobok čísla {@0} nižšie. Spočítaj skoky po {@1} ešte raz.": "Tu es un multiple de {@0} trop bas. Compte encore une fois les sauts de {@1}.",
  "Si o jeden násobok čísla {@0} vyššie. Spočítaj skoky po {@1} ešte raz.": "Tu es un multiple de {@0} trop haut. Compte encore une fois les sauts de {@1}.",
  "Skoky na číselnom rade: 38 plus 20 plus 5": "Sauts sur la file numérique : 38 plus 20 plus 5",
  "Spolu je to {@0} € a {@1} c. Koľko je to eur a centov? (Pamätaj: 100 centov je 1 euro.)": "En tout, ça fait {@0} € et {@1} c. Combien d'euros et de centimes est-ce ? (Rappelle-toi : 100 centimes font 1 euro.)",
  "Spočítaj 12 hodín dopoludnia a 12 hodín popoludní.": "Compte 12 heures le matin et 12 heures l'après-midi.",
  "Spočítaj skupiny a koľko je v jednej skupine. Potom vynásob.": "Compte les groupes et combien il y en a dans un groupe. Puis multiplie.",
  "Spočítal si, koľko je mincí. Treba sčítať čísla napísané na minciach.": "Tu as compté les pièces. Il faut additionner les nombres écrits sur les pièces.",
  "Stovková tabuľka čísel od 1 do 100": "Tableau des nombres de 1 à 100",
  "Stuha meria ${@0}\\,\\text{cm}$. Koľko centimetrov chýba do $1\\,\\text{m}$?": "Un ruban mesure ${@0}\\,\\text{cm}$. Combien de centimètres manque-t-il pour arriver à $1\\,\\text{m}$ ?",
  "Sú tu {@0} {@1} po {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.": "Il y a {@0} {@1} de {@2} : ${@3} = {@4} \\cdot {@5} = {@6}$.",
  "Sčítaj hodnoty mincí, začni od najväčšej.": "Additionne les valeurs des pièces en commençant par la plus grande.",
  "Sčítanie použiješ, keď niečo pribudne.": "Tu utilises l'addition quand quelque chose augmente.",
  "Teraz odčítaj jednotky: koľko je ${@0} - {@1}$?": "Maintenant, soustrais les unités : combien font ${@0} - {@1}$ ?",
  "Teraz pripočítaj jednotky: koľko je ${@0} + {@1}$?": "Maintenant, ajoute les unités : combien font ${@0} + {@1}$ ?",
  "To je dĺžka stuhy. Pýtame sa, koľko jej chýba do 1 metra – odčítaj od 100.": "Ça, c'est la longueur du ruban. On demande combien il lui manque pour arriver à 1 mètre – soustrais de 100.",
  "To je len polovica dňa. Ciferník ukazuje 12 hodín, ale ručička ho za deň obehne dvakrát.": "Ça, c'est seulement la moitié d'une journée. Le cadran montre 12 heures, mais l'aiguille en fait deux fois le tour en une journée.",
  "To je počet desiatok. Jednotky sú posledná číslica vpravo.": "Ça, c'est le nombre de dizaines. Les unités, c'est le dernier chiffre à droite.",
  "To je počet jednotiek. Desiatky sú prvá číslica vľavo.": "Ça, c'est le nombre d'unités. Les dizaines, c'est le premier chiffre à gauche.",
  "Toľko centov už máš. Pýtame sa, koľko ti chýba do 100 centov – odčítaj.": "Ces centimes, tu les as déjà. On demande combien il te manque pour arriver à 100 centimes – soustrais.",
  "Tri rady po štyri bodky": "Trois rangées de quatre points",
  "Trieda je dlhá asi 9 …": "La salle de classe mesure environ 9 …",
  "Trištvrte hodiny": "Trois quarts d'heure",
  "Trojuholník má 3 strany a každá strana je úsečka.": "Le triangle a 3 côtés et chaque côté est un segment.",
  "Uberáme, preto odčítame: {@0} Zostalo {@1} {@2} {@3}.": "On enlève, donc on soustrait : {@0} Il {@1} reste {@2} {@3}.",
  "Ubudlo, preto odčítame.": "Il y en a moins, donc on soustrait.",
  "V centoch: ${@0} = {@1}$ centov. 100 centov je 1 euro, preto je to {@2} € a {@3} c.": "En centimes : ${@0} = {@1}$ centimes. 100 centimes font 1 euro, donc cela fait {@2} € et {@3} c.",
  "V jednotkách {@0} meriame {@1}, ale tu ide o {@2}.": "L'unité {@0} sert à mesurer {@1}, mais ici on cherche {@2}.",
  "V noci spíme asi 10 …": "La nuit, on dort environ 10 …",
  "Vymenil si desiatky a jednotky. Desiatky píšeme na prvé miesto, jednotky na druhé.": "Tu as inversé les dizaines et les unités. On écrit les dizaines en premier, les unités en second.",
  "Vymenil si ručičky. Krátka ručička ukazuje hodiny, dlhá ručička minúty.": "Tu as inversé les aiguilles. La petite aiguille indique les heures, la grande aiguille les minutes.",
  "Vymenuj násobky {@0}: {@1}, {@2}, {@3}, …": "Récite les multiples de {@0} : {@1}, {@2}, {@3}, …",
  "Vypočítaj ${@0} : {@1}$.": "Calcule ${@0} : {@1}$.",
  "Vypočítaj ${@0} \\cdot {@1}$.": "Calcule ${@0} \\cdot {@1}$.",
  "Vypočítaj ${@0} {@1} {@2}$.": "Calcule ${@0} {@1} {@2}$.",
  "Vyučovanie trvá asi 5 …": "La classe dure environ 5 …",
  "Z koľkých úsečiek sa skladá obvod trojuholníka?": "Combien de segments forment le périmètre d'un triangle ?",
  "Z koľkých úsečiek sa skladá obvod štvorca?": "Combien de segments forment le périmètre d'un carré ?",
  "Z {@0} balónov robíme zväzky po {@1} {@2}. Koľko zväzkov urobíme?": "Avec {@0} ballons, on fait des bouquets de {@1} {@2}. Combien de bouquets fait-on ?",
  "Zapíš súčet ako násobenie a vypočítaj: ${@0}$": "Écris la somme sous forme de multiplication et calcule : ${@0}$",
  "Zisťujeme, koľkokrát sa {@0} zmestí do {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "On cherche combien de fois {@0} rentre dans {@1} : ${@2} : {@3} = {@4}$, car ${@5} \\cdot {@6} = {@7}$.",
  "Zmení sa len počet desiatok, jednotky ostanú rovnaké. V stovkovej tabuľke sa posuň o riadok.": "Seul le nombre de dizaines change, les unités restent les mêmes. Dans le tableau de 100, descends ou monte d'une ligne.",
  "Zmrzlina stojí asi 2 …": "Une glace coûte environ 2 …",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "Le signe = se met seulement entre deux nombres égaux. Ces nombres sont différents.",
  "Znak je otočený naopak. Desiatky sú rovnaké, preto rozhodujú jednotky.": "Le signe est à l'envers. Les dizaines sont égales, ce sont donc les unités qui décident.",
  "Znak je otočený naopak. Rozhodujú desiatky: väčšie je číslo, ktoré má viac desiatok.": "Le signe est à l'envers. Ce sont les dizaines qui décident : le plus grand nombre est celui qui a le plus de dizaines.",
  "Znamienko + znamená pridať. Tu treba sčítať, nie odčítať.": "Le signe + veut dire ajouter. Ici, il faut additionner, pas soustraire.",
  "Znamienko − znamená ubrať. Tu treba odčítať, nie sčítať.": "Le signe − veut dire enlever. Ici, il faut soustraire, pas additionner.",
  "balón": "ballon",
  "balónov": "ballons",
  "balóny": "ballons",
  "bod": "point",
  "bod A": "point A",
  "cent": "centime",
  "centov": "centimes",
  "centy": "centimes",
  "cenu": "un prix",
  "ciferník hodín": "cadran d'horloge",
  "citrónov": "citrons",
  "desiatku": "dizaine",
  "deti": "enfants",
  "detí": "enfants",
  "dieťa": "enfant",
  "dĺžku": "une longueur",
  "eurá; centy": "euros; centimes",
  "hodina": "heure",
  "hodiny": "heures",
  "hodín": "heures",
  "hrušiek": "poires",
  "jahôd": "fraises",
  "je medzi {@0} a {@1}": "est entre le {@0} et le {@1}",
  "jednotku": "unité",
  "krivá čiara": "ligne courbe",
  "kúpil": "a acheté",
  "kúpila": "a acheté",
  "min": "min",
  "mince": "pièces",
  "mrkiev": "carottes",
  "orechov": "noix",
  "orechy": "noix",
  "pol hodiny": "une demi-heure",
  "položil": "a posé",
  "položila": "a posé",
  "presne {@0} {@1}": "exactement {@0} {@1}",
  "priamka": "droite",
  "priamka p": "droite p",
  "rovnaké časti": "part égale",
  "rovnakú časť": "parts égales",
  "rovnakých častí": "parts égales",
  "rozdelil": "a partagé",
  "rozdelila": "a partagé",
  "skupina": "groupe",
  "skupiny": "groupes",
  "skupín": "groupes",
  "skáčeme vždy o 3": "on saute toujours de 3",
  "stratil": "en a perdu",
  "stratila": "en a perdu",
  "tanier": "assiette",
  "taniere": "assiettes",
  "tanierov": "assiettes",
  "trištvrte hodiny": "trois quarts d'heure",
  "ukazuje na {@0}": "montre le {@0}",
  "vreciek": "sachets",
  "vrecko": "sachet",
  "vrecká": "sachets",
  "{@0} Skúška: ${@1} + {@2} = {@3}$.": "{@0} Vérification : ${@1} + {@2} = {@3}$.",
  "{@0} Správny zápis je {@1}.": "{@0} La bonne écriture est {@1}.",
  "{@0} desiatka je {@1}.": "{@0} dizaine, c'est {@1}.",
  "{@0} desiatky sú {@1}.": "{@0} dizaines, c'est {@1}.",
  "{@0} desiatok je {@1}.": "{@0} dizaines, c'est {@1}.",
  "{@0} je len to, o koľko má {@1} menej. Odčítaj to od toho, čo má {@2}.": "{@0}, c'est seulement ce que {@1} a de moins. Soustrais-le de ce qu'a {@2}.",
  "{@0} má menej ako {@1}, preto treba odčítať, nie sčítať.": "{@0} a moins que {@1}, il faut donc soustraire, pas additionner.",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} menej. Koľko {@6} má {@7}?": "{@0} a {@1} {@2}. {@3} a {@4} {@5} de moins. Combien de {@6} a {@7} ?",
  "{@0} {@1} a {@2} minút": "{@0} {@1} et {@2} minutes",
  "{@0} {@1} na {@2} {@3} po {@4} {@5}. Koľko {@6} je na tanieroch spolu?": "{@0} {@1} {@4} {@5} sur chacune des {@2} {@3}. Combien de {@6} y a-t-il en tout sur les assiettes ?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Ktorý zápis ukazuje, koľko {@6} má teraz?": "{@0} {@1} {@2} {@3} et {@4} encore {@5}. Quelle écriture montre combien de {@6} {@0} a maintenant ?",
  "{@0} {@1} {@2} {@3} a {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} zostalo?": "{@0} {@1} {@2} {@3} et {@5} {@4}. Quelle écriture montre combien de {@6} il {@7} reste ?",
  "{@0} {@1} {@2} {@3} po {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} spolu?": "{@0} {@1} {@2} {@3} de {@4} {@5}. Quelle écriture montre combien de {@6} {@0} {@7} en tout ?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} kamarátov. Koľko {@5} dostal každý kamarát?": "{@0} {@1} {@2} {@3} en parts égales entre {@4} amis. Combien de {@5} chaque ami a-t-il reçus ?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} {@5}. Koľko cukríkov dostalo každé dieťa?": "{@0} {@1} {@2} {@3} en parts égales entre {@4} {@5}. Combien de bonbons chaque enfant a-t-il reçus ?",
  "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.": "{@0} {@1} {@2} {@3} {@4} : ${@5} {@6} {@7} = {@8}$.",
  "{@0}-krát po {@1} je násobenie.": "{@0} fois {@1}, c'est une multiplication.",
  "{@0}-krát po {@1} je násobenie: ${@2} \\cdot {@3} = {@4}$. Na tanieroch je {@5} {@6}.": "{@0} fois {@1}, c'est une multiplication : ${@2} \\cdot {@3} = {@4}$. Sur les assiettes, il y a {@5} {@6}.",
  "Úsečka $KL$ meria ${@0}\\,\\text{cm}$, úsečka $MN$ meria ${@1}\\,\\text{cm}$. O koľko centimetrov je úsečka $KL$ dlhšia?": "Le segment $KL$ mesure ${@0}\\,\\text{cm}$, le segment $MN$ mesure ${@1}\\,\\text{cm}$. De combien de centimètres le segment $KL$ est-il plus long ?",
  "Úsečka je rovná. Táto čiara sa zatáča.": "Un segment est droit. Cette ligne tourne.",
  "Úsečka je čiara medzi dvoma bodmi. Tu je len jedna bodka.": "Un segment est une ligne entre deux points. Ici, il n'y a qu'un petit point.",
  "Úsečka má dva krajné body, napríklad $A$ a $B$.": "Un segment a deux extrémités, par exemple $A$ et $B$.",
  "Úsečka má na koncoch dva krajné body. Táto čiara ich nemá, pokračuje ďalej.": "Un segment a deux extrémités à ses bouts. Cette ligne n'en a pas, elle continue plus loin.",
  "Úsečka má začiatok aj koniec, priamka nemá ani jedno.": "Un segment a un début et une fin, une droite n'a ni l'un ni l'autre.",
  "Úsečka začína na nule a končí pri čísle {@0}. Je dlhá ${@1}\\,\\text{cm}$.": "Le segment commence à zéro et se termine au nombre {@0}. Il mesure ${@1}\\,\\text{cm}$.",
  "úsečka": "segment",
  "úsečka CD": "segment CD",
  "Čiara sa zatáča, nie je rovná, teda je to krivá čiara.": "La ligne tourne, elle n'est pas droite : c'est donc une ligne courbe.",
  "Čistenie zubov trvá asi 3 …": "Se brosser les dents dure environ 3 …",
  "Čo je na obrázku?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"čiara alebo bod\">{@0}</svg>": "Qu'y a-t-il sur l'image ?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"ligne ou point\">{@0}</svg>",
  "Čísla nesčítavaj. Hľadáš, koľko sme ubrali, aby z čísla {@0} zostalo {@1} – to zistíš odčítaním.": "N'additionne pas les nombres. Tu cherches combien on a enlevé pour qu'il reste {@1} de {@0} – tu le trouves par une soustraction.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby vyšlo {@1} – to zistíš odčítaním.": "N'additionne pas les nombres. Tu cherches combien il faut ajouter à {@0} pour obtenir {@1} – tu le trouves par une soustraction.",
  "Čísla nesčítavaj. Otázka „o koľko viac“ porovnáva – odčítaj menšie číslo od väčšieho.": "N'additionne pas les nombres. La question « combien de plus » compare – soustrais le plus petit nombre du plus grand.",
  "Čísla si sčítal. Znak · znamená násobiť.": "Tu as additionné les nombres. Le signe · veut dire multiplier.",
  "Čísla sú rovnaké: ${@0} = {@1}$.": "Les nombres sont égaux : ${@0} = {@1}$.",
  "Čísla sú úplne rovnaké, ani jedno nie je väčšie.": "Les nombres sont exactement les mêmes, aucun n'est plus grand.",
  "Čísla {@0} vždy o {@1}: {@2}.": "Les nombres {@0} toujours de {@1} : {@2}.",
  "Číslo {@0} nie je v násobilke čísla {@1}: leží medzi násobkami {@2} a {@3}.": "Le nombre {@0} n'est pas dans la table de {@1} : il se trouve entre les multiples {@2} et {@3}.",
  "Číslo {@0} sčítavame {@1}-krát: ${@2} \\cdot {@3} = {@4}$.": "On additionne le nombre {@0} {@1} fois : ${@2} \\cdot {@3} = {@4}$.",
  "čas": "une durée",
  "čiara alebo bod": "ligne ou point",
  "Štvorec má 4 strany, každá strana je úsečka.": "Le carré a 4 côtés, chaque côté est un segment.",
  "Štvrť hodiny": "Un quart d'heure",
  "štvrť hodiny": "un quart d'heure",
  "„O {@0} menej“ znamená {@1} ubrať: {@2} {@3} má {@4} {@5}.": "« {@0} de moins » veut dire enlever {@1} : {@2} {@3} a {@4} {@5}.",
  "„O … menej“ znamená odčítať.": "« … de moins » veut dire soustraire.",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕"
 }
});
