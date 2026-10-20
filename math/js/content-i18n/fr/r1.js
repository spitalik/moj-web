/* Français: preklad js/rocniky/r1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/r1/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "r1-cisla20": {
   "title": "Les nombres jusqu'à 20",
   "summary": "Lire, écrire et comparer les nombres de 0 à 20.",
   "theory": [
    "<p>On sait lire les nombres de 0 à 20 et les écrire en chiffres : 0 (zéro), 1 (un), 2 (deux) … 10 (dix) … 20 (vingt).\n       Les nombres de 11 à 19 ont <strong>1 dizaine</strong> et quelques <strong>unités</strong> : par exemple $14 = 10 + 4$.</p>",
    {
     "fig": "r1-rad20",
     "caption": "La file numérique de 0 à 20. Plus on va vers la droite, plus le nombre est grand."
    },
    "<p><strong>Comparer :</strong> le signe $&lt;$ veut dire « est plus petit que », le signe $&gt;$ « est plus grand que » et $=$ « est égal à ».\n       Le côté ouvert du signe est toujours tourné vers le plus grand nombre : $7 &lt; 12$, $15 &gt; 9$.</p>"
   ],
   "examples": [
    {
     "task": "Compare les nombres 13 et 8.",
     "steps": [
      "Sur la file numérique, 13 est plus à droite que 8.",
      "Donc $13 &gt; 8$."
     ]
    },
    {
     "task": "Combien de dizaines et d'unités a le nombre 17 ?",
     "steps": [
      "$17 = 10 + 7$.",
      "<strong>1 dizaine et 7 unités.</strong>"
     ]
    }
   ]
  },
  "r1-scitanie": {
   "title": "Addition et soustraction jusqu'à 20",
   "summary": "Ajouter et enlever, passage de la dizaine.",
   "theory": [
    "<p><strong>Additionner</strong>, c'est ajouter : $5 + 3 = 8$. Les nombres qu'on additionne sont les <em>termes</em>, le résultat est la <em>somme</em>.\n       L'ordre des termes ne compte pas : $3 + 5 = 5 + 3$.</p>",
    "<p><strong>Soustraire</strong>, c'est enlever : $8 - 3 = 5$. La soustraction est l'inverse de l'addition : si $5 + 3 = 8$, alors $8 - 3 = 5$ et $8 - 5 = 3$.</p>",
    "<p><strong>Passage de la dizaine :</strong> pour $8 + 5$, on complète d'abord jusqu'à la dizaine ($8 + 2 = 10$), puis on ajoute le reste ($10 + 3 = 13$).</p>",
    {
     "fig": "r1-desiatka",
     "caption": "Deux boîtes de dix : 8 jetons bleus et 5 verts. Deux verts complètent la première dizaine, les 3 autres sont dans la deuxième : $8 + 5 = 13$."
    }
   ],
   "examples": [
    {
     "task": "Calcule $8 + 5$.",
     "steps": [
      "On complète jusqu'à la dizaine : $8 + 2 = 10$.",
      "Du nombre 5, il reste 3 : $10 + 3 = 13$.",
      "<strong>Résultat : 13</strong>"
     ]
    },
    {
     "task": "Calcule $14 - 6$.",
     "steps": [
      "D'abord, on enlève 4 pour arriver à la dizaine : $14 - 4 = 10$.",
      "Sur les 6, il reste 2 à enlever : $10 - 2 = 8$.",
      "<strong>Résultat : 8</strong>"
     ]
    }
   ]
  },
  "r1-rozklad": {
   "title": "La file numérique et la décomposition des nombres",
   "summary": "Quel nombre vient avant et après, décomposer un nombre en deux parties.",
   "theory": [
    "<p>La <strong>file numérique</strong>, c'est les nombres rangés les uns après les autres : 0, 1, 2, 3, … Le nombre juste avant un nombre donné est plus petit de 1,\n       le nombre juste après est plus grand de 1.</p>",
    "<p><strong>Décomposer un nombre</strong>, c'est l'écrire comme la somme de deux nombres plus petits. On peut décomposer le nombre 6 par exemple\n       en $1 + 5$, $2 + 4$ ou $3 + 3$.</p>",
    {
     "fig": "r1-domcek",
     "caption": "La maison du nombre 6 : à chaque étage, il y a deux nombres qui font 6 ensemble."
    }
   ],
   "examples": [
    {
     "task": "Quel nombre vient juste après 15 dans la file numérique ?",
     "steps": [
      "Juste après un nombre, il y a toujours le nombre plus grand de 1.",
      "$15 + 1 = 16$.",
      "<strong>Résultat : 16</strong>"
     ]
    },
    {
     "task": "Complète la décomposition : $9 = 4 + \\square$.",
     "steps": [
      "On cherche combien il manque de 4 à 9.",
      "$9 - 4 = 5$.",
      "<strong>$9 = 4 + 5$</strong>"
     ]
    }
   ]
  },
  "r1-slovne": {
   "title": "Petits problèmes",
   "summary": "Comment transformer une histoire en calcul et écrire la réponse.",
   "theory": [
    "<p>Pour résoudre un problème, on avance étape par étape :</p>\n       <ol><li>on lit l'énoncé,</li><li>on cherche ce qu'on sait et ce qu'on cherche,</li><li>on écrit le calcul,</li>\n       <li>on calcule,</li><li>on écrit la réponse par une phrase complète.</li></ol>",
    "<p>Des mots comme <em>a ajouté, a reçu, en tout, … de plus</em> veulent souvent dire <strong>addition</strong>.\n       Des mots comme <em>a mangé, a donné, il reste, combien de plus</em> veulent souvent dire <strong>soustraction</strong>.</p>"
   ],
   "examples": [
    {
     "task": "Emma avait 7 bonbons et elle en a reçu encore 5. Combien de bonbons a-t-elle maintenant ?",
     "steps": [
      "On sait : elle avait 7 bonbons, elle en a reçu 5. On cherche combien elle en a en tout.",
      "Calcul : $7 + 5 = 12$.",
      "<strong>Réponse : Emma a 12 bonbons.</strong>"
     ]
    },
    {
     "task": "Lucas a 9 billes, Hugo a 4 billes. Combien de billes Lucas a-t-il de plus ?",
     "steps": [
      "On compare, donc on soustrait le plus petit nombre du plus grand.",
      "Calcul : $9 - 4 = 5$.",
      "<strong>Réponse : Lucas a 5 billes de plus.</strong>"
     ]
    }
   ]
  },
  "r1-utvary": {
   "title": "Figures planes et solides",
   "summary": "Disque, triangle, carré, rectangle et les solides autour de nous.",
   "theory": [
    "<p>Les <strong>figures planes</strong> sont plates, on peut les dessiner sur une feuille : le <strong>disque</strong>, le <strong>triangle</strong>\n       (3 côtés, 3 sommets), le <strong>carré</strong> (4 côtés de même longueur) et le <strong>rectangle</strong> (4 côtés, les côtés opposés ont la même longueur).</p>",
    {
     "fig": "r1-rovinne",
     "caption": "Figures planes."
    },
    "<p>Les <strong>solides</strong>, on peut les prendre dans la main : le <strong>cube</strong> (un dé à jouer), le <strong>pavé droit</strong> (une boîte),\n       la <strong>boule</strong> (un ballon), le <strong>cylindre</strong> (une boîte de conserve) et le <strong>cône</strong> (un cornet de glace).</p>",
    {
     "fig": "r1-telesa",
     "caption": "Solides. Les pointillés montrent une arête cachée à l'arrière."
    }
   ],
   "examples": [
    {
     "task": "Combien de sommets a un triangle et combien en a un carré ?",
     "steps": [
      "Un sommet, c'est un coin de la figure.",
      "Le triangle a 3 sommets, le carré a 4 sommets."
     ]
    },
    {
     "task": "À quel solide ressemble un ballon ?",
     "steps": [
      "Le ballon est rond de tous les côtés.",
      "<strong>Le ballon a la forme d'une boule.</strong>"
     ]
    }
   ]
  },
  "r1-meranie": {
   "title": "Se repérer dans l'espace et mesurer",
   "summary": "À gauche, à droite, entre ; comparer et mesurer des longueurs.",
   "theory": [
    "<p><strong>Se repérer :</strong> on utilise les mots à gauche – à droite, en haut – en bas, devant – derrière, à côté et entre.\n       Dans la rangée 🐶 🐱 🐰, le chat est <em>entre</em> le chien et le lapin, et le chien est <em>à gauche</em> du chat.</p>",
    "<p><strong>Mesurer une longueur :</strong> on peut mesurer une longueur avec des pas, des mains ou des cubes. On mesure plus précisément avec une règle,\n       en centimètres (cm). Pour comparer, on dit plus long – plus court, plus haut – plus bas.</p>",
    {
     "fig": "r1-meranie",
     "caption": "Le crayon mesure 7 cubes, la gomme 3 cubes. Le crayon est plus long de 4 cubes."
    }
   ],
   "examples": [
    {
     "task": "Dans la rangée 🍎 🍐 🍌 🍇, quel fruit est juste à droite de la poire ?",
     "steps": [
      "La poire 🍐 est la deuxième en partant de la gauche.",
      "Juste à sa droite, il y a la banane 🍌."
     ]
    },
    {
     "task": "Un ruban mesure 9 cm, un autre 5 cm. De combien le premier ruban est-il plus long ?",
     "steps": [
      "On compare, donc on soustrait : $9 - 5 = 4$.",
      "<strong>Le premier ruban est plus long de 4 cm.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "${@0} - {@1} = {@2}$, teda ${@3} = {@4} + {@5}$.": "${@0} - {@1} = {@2}$, donc ${@3} = {@4} + {@5}$.",
  "${@0} - {@1} = {@2}$, červená stuha je o {@3} cm dlhšia.": "${@0} - {@1} = {@2}$, le ruban rouge est plus long de {@3} cm.",
  "${@0} = {@1} + {@2}$, teda {@3} {@4} a {@5} {@6}.": "${@0} = {@1} + {@2}$, donc {@3} {@4} et {@5} {@6}.",
  "Adam": "Adam",
  "Ak prejdeš cez 10, najprv doplň do desiatky a potom pridaj zvyšok.": "Si tu passes la dizaine, complète d'abord jusqu'à 10, puis ajoute le reste.",
  "Ako sa volá {@0}?": "Comment s'appelle {@0} ?",
  "Budeš sčítať (+), alebo odčítať (−)?": "Tu vas additionner (+) ou soustraire (−) ?",
  "Chýbajúce číslo zistíš odčítaním.": "Tu trouves le nombre qui manque par une soustraction.",
  "Desiatkové rámčeky: 8 plus 5": "Boîtes de dix : 8 plus 5",
  "Domček rozkladu čísla 6": "La maison du nombre 6",
  "Doplnil si do desiatky, ale zabudol si pridať zvyšok: ešte $+ {@0}$.": "Tu as complété jusqu'à 10, mais tu as oublié d'ajouter le reste : encore $+ {@0}$.",
  "Doplň chýbajúce číslo: ${@0} + \\square = {@1}$": "Complète le nombre qui manque : ${@0} + \\square = {@1}$",
  "Doplň do desiatky: ${@0} + {@1} = 10$, potom $10 + {@2} = {@3}$.": "Complète jusqu'à 10 : ${@0} + {@1} = 10$, puis $10 + {@2} = {@3}$.",
  "Doplň správny znak: ${@0} \\;\\square\\; {@1}$": "Écris le bon signe : ${@0} \\;\\square\\; {@1}$",
  "Doplň číslo, ktoré chýba v číselnom rade: {@0}": "Complète le nombre qui manque sur la file numérique : {@0}",
  "Dĺžky stúh nesčítavaj. Pýtame sa, o koľko je červená stuha dlhšia – odčítaj.": "N'additionne pas les longueurs des rubans. On demande de combien le ruban rouge est plus long – soustrais.",
  "Ema": "Emma",
  "Hneď pred": "Juste avant",
  "Hneď vpravo od {@0} stojí {@1}.": "Juste à droite {@0} se trouve {@1}.",
  "Hneď vľavo od {@0} stojí {@1}.": "Juste à gauche {@0} se trouve {@1}.",
  "Hneď za": "Juste après",
  "Hľadaj číslo, ktoré je o 1 väčšie ako prvé.": "Cherche le nombre qui est 1 de plus que le premier.",
  "Hľadáme, koľko chýba od {@0} do {@1}: ${@2} - {@3} = {@4}$.": "On cherche combien il manque de {@0} à {@1} : ${@2} - {@3} = {@4}$.",
  "Jano": "Lucas",
  "Keď niečo dáš preč, zostane toho menej. Tu treba odčítať, nie sčítať.": "Quand on enlève quelque chose, il en reste moins. Ici, il faut soustraire, pas additionner.",
  "Keď niečo pribudne, je toho viac. Tu treba sčítať, nie odčítať.": "Quand on ajoute quelque chose, il y en a plus. Ici, il faut additionner, pas soustraire.",
  "Keď niečo pribudne, sčítavame.": "Quand on ajoute quelque chose, on additionne.",
  "Keď niečo ubudne, odčítavame.": "Quand on enlève quelque chose, on soustrait.",
  "Kocka má 6 stien a každá stena je štvorec.": "Le cube a 6 faces et chaque face est un carré.",
  "Kocka má 8 vrcholov: 4 hore a 4 dole.": "Le cube a 8 sommets : 4 en haut et 4 en bas.",
  "Kocka má všetky steny rovnaké štvorce. Toto teleso je širšie, ako je vysoké.": "Toutes les faces du cube sont des carrés identiques. Ce solide est plus large que haut.",
  "Kocky z oboch pásov nesčítavaj. Zisti, o koľko kociek má modrý pás viac – odčítaj.": "N'additionne pas les cubes des deux bandes. Cherche combien de cubes la bande bleue a en plus – soustrais.",
  "Koľko chýba od {@0} do {@1}?": "Combien manque-t-il de {@0} à {@1} ?",
  "Koľko chýba čísla {@0} do 10?": "Combien manque-t-il à {@0} pour arriver à 10 ?",
  "Koľko je $10 + {@0}$?": "Combien font $10 + {@0}$ ?",
  "Koľko je $10 - {@0}$?": "Combien font $10 - {@0}$ ?",
  "Koľko jednotiek má {@0} navyše oproti 10?": "Combien d'unités {@0} a-t-il de plus que 10 ?",
  "Koľko kociek má modrý pás?": "Combien de cubes a la bande bleue ?",
  "Koľko kociek má zelený pás?": "Combien de cubes a la bande verte ?",
  "Koľko musíš ubrať z čísla {@0}, aby si sa dostal na 10?": "Combien dois-tu enlever à {@0} pour arriver à 10 ?",
  "Koľko stien má kocka?": "Combien de faces a un cube ?",
  "Koľko strán má trojuholník?": "Combien de côtés a un triangle ?",
  "Koľko strán má štvorec?": "Combien de côtés a un carré ?",
  "Koľko vrcholov má kocka?": "Combien de sommets a un cube ?",
  "Koľko vrcholov má kruh?": "Combien de sommets a un disque ?",
  "Koľko vrcholov má obdĺžnik?": "Combien de sommets a un rectangle ?",
  "Koľko vrcholov má trojuholník?": "Combien de sommets a un triangle ?",
  "Koľko {@0} má číslo {@1}?": "Compte les {@0} du nombre {@1}. Combien y en a-t-il ?",
  "Kruh nemá žiadne vrcholy, jeho okraj je oblý.": "Le disque n'a aucun sommet, son bord est arrondi.",
  "Ktoré číslo je o 1 {@0} ako {@1}?": "Quel nombre est {@0} de 1 que {@1} ?",
  "Ktoré číslo leží v číselnom rade medzi číslami {@0} a {@1}?": "Quel nombre se trouve sur la file numérique entre {@0} et {@1} ?",
  "Kužeľ má hore špičku. Toto teleso má hore aj dole kruh.": "Le cône a une pointe en haut. Ce solide a un disque en haut et en bas.",
  "Kváder vyzerá ako krabica, jeho steny nie sú všetky rovnaké. Tu sú všetky steny rovnaké štvorce.": "Le pavé ressemble à une boîte, ses faces ne sont pas toutes pareilles. Ici, toutes les faces sont des carrés identiques.",
  "Lea": "Léa",
  "Medzi {@0} a {@1} stojí {@2}.": "Entre {@0} et {@1} se trouve {@2}.",
  "Meranie kockami": "Mesurer avec des cubes",
  "Miro": "Hugo",
  "Modrý pás má {@0} {@1}, zelený {@2}. ${@3} - {@4} = {@5}$.": "La bande bleue a {@0} {@1}, la verte {@2}. ${@3} - {@4} = {@5}$.",
  "Máš odčítať, nie sčítať: znamienko $-$ znamená ubrať.": "Tu dois soustraire, pas additionner : le signe $-$ veut dire enlever.",
  "Máš sčítať, nie odčítať: znamienko $+$ znamená pridať.": "Tu dois additionner, pas soustraire : le signe $+$ veut dire ajouter.",
  "Na obrázku je {@0}.": "Sur l'image : {@0}.",
  "Na obrázku vidno len 3 steny. Ďalšie 3 steny sú schované vzadu, vľavo a dole.": "Sur l'image, on ne voit que 3 faces. Les 3 autres faces sont cachées derrière, à gauche et en dessous.",
  "Na číselnom rade sa posuň o jedno miesto doprava.": "Sur la file numérique, avance d'une case vers la droite.",
  "Na číselnom rade sa posuň o jedno miesto doľava.": "Sur la file numérique, recule d'une case vers la gauche.",
  "Najprv uber do desiatky: ${@0} - {@1} = 10$, potom $10 - {@2} = {@3}$.": "Enlève d'abord jusqu'à 10 : ${@0} - {@1} = 10$, puis $10 - {@2} = {@3}$.",
  "Nina": "Nina",
  "O koľko je modrý pás dlhší? Vypočítaj ${@0} - {@1}$.": "De combien la bande bleue est-elle plus longue ? Calcule ${@0} - {@1}$.",
  "O koľko kociek je modrý pás dlhší ako zelený? {@0}": "De combien de cubes la bande bleue est-elle plus longue que la verte ? {@0}",
  "Obdĺžnik má 4 vrcholy.": "Le rectangle a 4 sommets.",
  "Obdĺžnik má dve strany dlhšie a dve kratšie. Sú tu všetky strany rovnako dlhé?": "Le rectangle a deux côtés plus longs et deux côtés plus courts. Ici, est-ce que tous les côtés ont la même longueur ?",
  "Odčítanie je opak sčítania: koľko musíš pridať k {@0}, aby si dostal {@1}?": "La soustraction est le contraire de l'addition : combien dois-tu ajouter à {@0} pour obtenir {@1} ?",
  "Otázka „o koľko viac“ sa rieši odčítaním.": "La question « combien de plus » se résout par une soustraction.",
  "Porovnávame: ${@0} - {@1} = {@2}$. {@3} má o {@4} {@5} viac.": "On compare : ${@0} - {@1} = {@2}$. {@3} a {@4} {@5} de plus.",
  "Posunul si sa na opačnú stranu. Menšie čísla sú na číselnom rade vľavo.": "Tu es allé du mauvais côté. Les nombres plus petits sont à gauche sur la file numérique.",
  "Posunul si sa na opačnú stranu. Väčšie čísla sú na číselnom rade vpravo.": "Tu es allé du mauvais côté. Les nombres plus grands sont à droite sur la file numérique.",
  "Pozri sa znova: obe čísla sú rovnaké, ani jedno nie je väčšie.": "Regarde encore : les deux nombres sont égaux, aucun n'est plus grand.",
  "Počítaj od {@0} po 10.": "Compte de {@0} jusqu'à 10.",
  "Predstav si loptu, plechovku, krabicu, hraciu kocku alebo kornútok.": "Pense à un ballon, une boîte de conserve, une boîte, un dé ou un cornet de glace.",
  "Pridávame, preto sčítame: ${@0} + {@1} = {@2}$. {@3} má {@4} {@5}.": "On ajoute, donc on additionne : ${@0} + {@1} = {@2}$. {@3} a {@4} {@5}.",
  "Priestorové útvary": "Les solides",
  "Rovinné útvary": "Les figures planes",
  "Rozdiel dĺžok zistíš odčítaním.": "Tu trouves la différence des longueurs par une soustraction.",
  "Rozlož číslo {@0}: ${@1} = {@2} + \\square$": "Décompose le nombre {@0} : ${@1} = {@2} + \\square$",
  "Sofia": "Sofia",
  "Spočítaj kocky v oboch pásoch a odčítaj.": "Compte les cubes des deux bandes, puis soustrais.",
  "Spočítaj strany a vrcholy útvaru.": "Compte les côtés et les sommets de la figure.",
  "Spočítal si len vrcholy na jednej stene. Kocka má vrcholy hore aj dole.": "Tu as compté seulement les sommets d'une face. Le cube a des sommets en haut et en bas.",
  "To je dĺžka celého modrého pásu. Odčítaj od nej, koľko kociek má zelený pás.": "Ça, c'est la longueur de toute la bande bleue. Enlève-lui le nombre de cubes de la bande verte.",
  "To je počet desiatok. Jednotky sú číslica vpravo.": "Ça, c'est le nombre de dizaines. Les unités, c'est le chiffre de droite.",
  "To je počet jednotiek. Desiatky sú číslica vľavo.": "Ça, c'est le nombre d'unités. Les dizaines, c'est le chiffre de gauche.",
  "Tomáš": "Thomas",
  "Toto je zvieratko, od ktorého hľadáme. Hľadáme jeho suseda.": "C'est l'animal à partir duquel on cherche. On cherche son voisin.",
  "Toto zvieratko stojí vpravo. Vľavo je tá strana, kde rad začína.": "Cet animal est à droite. La gauche, c'est le côté où la file commence.",
  "Toto zvieratko stojí vľavo. Vpravo je tá strana, kde rad končí.": "Cet animal est à gauche. La droite, c'est le côté où la file se termine.",
  "Trojuholník má 3 strany.": "Le triangle a 3 côtés.",
  "Trojuholník má 3 vrcholy a 3 strany.": "Le triangle a 3 sommets et 3 côtés.",
  "Uberáme, preto odčítame: ${@0} - {@1} = {@2}$. Zostalo {@3} {@4} {@5}.": "On enlève, donc on soustrait : ${@0} - {@1} = {@2}$. Il {@3} reste {@4} {@5}.",
  "Valec má hore aj dole kruh. Toto teleso má hore špičku.": "Le cylindre a un disque en haut et en bas. Ce solide a une pointe en haut.",
  "Vrchol je roh útvaru, strana je čiara medzi dvoma vrcholmi.": "Un sommet est un coin de la figure, un côté est le trait entre deux sommets.",
  "Vypočítaj ${@0} + {@1}$.": "Calcule ${@0} + {@1}$.",
  "Vypočítaj ${@0} - {@1}$.": "Calcule ${@0} - {@1}$.",
  "Väčšie číslo leží na číselnom rade viac vpravo. Otvorená strana znaku smeruje k väčšiemu číslu.": "Le nombre plus grand est plus à droite sur la file numérique. Le côté ouvert du signe est tourné vers le plus grand nombre.",
  "Vľavo je začiatok radu, vpravo jeho koniec.": "À gauche, c'est le début de la file, à droite, c'est la fin.",
  "Z čísla {@0} sme použili {@1}. Koľko z neho ešte zostáva pridať?": "Du nombre {@0}, on a utilisé {@1}. Combien en reste-t-il à ajouter ?",
  "Z čísla {@0} sme ubrali {@1}. Koľko ešte treba ubrať?": "Au nombre {@0}, on a enlevé {@1}. Combien faut-il encore enlever ?",
  "Za číslom {@0} nasleduje {@1} a za ním {@2}.": "Après le nombre {@0} vient {@1}, et après lui {@2}.",
  "Zisti, či čísla rastú alebo klesajú, a o koľko.": "Regarde si les nombres augmentent ou diminuent, et de combien.",
  "Znak $=$ patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "Le signe $=$ se met seulement entre deux nombres égaux. Ces nombres sont différents.",
  "Znak je otočený naopak. Otvorená strana znaku má smerovať k väčšiemu číslu.": "Le signe est à l'envers. Le côté ouvert du signe doit être tourné vers le plus grand nombre.",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vpravo od {@1}?": "Les animaux sont en file : {@0} Qui est juste à droite {@1} ?",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vľavo od {@1}?": "Les animaux sont en file : {@0} Qui est juste à gauche {@1} ?",
  "Zvieratká stoja v rade: {@0} Kto stojí medzi {@1} a {@2}?": "Les animaux sont en file : {@0} Qui est entre {@1} et {@2} ?",
  "ceruzka": "crayon",
  "cukrík": "bonbon",
  "cukríkov": "bonbons",
  "cukríky": "bonbons",
  "dal": "a donné",
  "dala": "a donné",
  "desiatka": "dizaine",
  "desiatky": "dizaines",
  "desiatok": "dizaines",
  "dostal": "a reçu",
  "dostala": "a reçu",
  "dva pásy z kociek": "deux bandes de cubes",
  "guličiek": "billes",
  "guličku": "bille",
  "guličky": "billes",
  "guma": "gomme",
  "guľa": "boule",
  "jablko": "pomme",
  "jablká": "pommes",
  "jabĺk": "pommes",
  "jednotiek": "unités",
  "jednotka": "unité",
  "jednotky": "unités",
  "jej": "lui",
  "klesajú": "diminuent",
  "kociek": "cubes",
  "kocka": "cube",
  "kocky": "cubes",
  "kužeľ": "cône",
  "kváder": "pavé",
  "líška": "le renard",
  "líškou": "le renard",
  "líšky": "du renard",
  "mal": "avait",
  "mala": "avait",
  "mačka": "le chat",
  "mačkou": "le chat",
  "mačky": "du chat",
  "medveď": "l'ours",
  "medveďa": "de l'ours",
  "medveďom": "l'ours",
  "menšie": "plus petit",
  "modrý": "bleue",
  "mu": "lui",
  "myš": "la souris",
  "myši": "de la souris",
  "myšou": "la souris",
  "nálepiek": "vignettes",
  "nálepku": "vignette",
  "nálepky": "vignettes",
  "obrázok útvaru": "image de la figure",
  "pasteliek": "crayons de couleur",
  "pastelku": "crayon de couleur",
  "pastelky": "crayons de couleur",
  "pes": "le chien",
  "psa": "du chien",
  "psom": "le chien",
  "rastú": "augmentent",
  "tento útvar": "cette figure",
  "toto teleso": "ce solide",
  "valec": "cylindre",
  "väčšie": "plus grand",
  "zajac": "le lapin",
  "zajaca": "du lapin",
  "zajacom": "le lapin",
  "zelený": "verte",
  "{@0} je len to, o koľko má {@1} viac. Pripočítaj to k tomu, čo má {@2}.": "{@0}, c'est seulement ce que {@1} a de plus. Ajoute-le à ce qu'a {@2}.",
  "{@0} má {@1} {@2}, {@3} má {@4} {@5}. O koľko {@6} má {@7} viac?": "{@0} a {@1} {@2}, {@3} a {@4} {@5}. Combien de {@6} de plus a {@7} ?",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} viac. Koľko {@6} má {@7}?": "{@0} a {@1} {@2}. {@3} a {@4} {@5} de plus. Combien de {@6} a {@7} ?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Koľko {@6} má teraz?": "{@0} {@1} {@2} {@3} et {@4} encore {@5}. Combien de {@6} a {@0} maintenant ?",
  "{@0} {@1} {@2} {@3}. Kamarátom {@4} {@5} {@6}. Koľko {@7} {@8} zostalo?": "{@0} {@1} {@2} {@3}. {@0} {@4} {@5} {@6} à ses amis. Combien de {@7} {@8} reste-t-il ?",
  "{@0} číslom {@1} je v číselnom rade číslo {@2}.": "{@0} {@1}, sur la file numérique, il y a le nombre {@2}.",
  "Červená stuha meria {@0} cm, modrá {@1} cm. O koľko centimetrov je červená stuha dlhšia?": "Le ruban rouge mesure {@0} cm, le bleu {@1} cm. De combien de centimètres le ruban rouge est-il plus long ?",
  "Číselný rad od 0 do 20": "La file numérique de 0 à 20",
  "Čísla nesčítavaj. Hľadáš, koľko chýba od {@0} do {@1}.": "N'additionne pas les nombres. Tu cherches combien il manque de {@0} à {@1}.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby si dostal {@1}.": "N'additionne pas les nombres. Tu cherches combien il faut ajouter à {@0} pour obtenir {@1}.",
  "Čísla nesčítavaj. Pýtame sa, o koľko má jedno dieťa viac – odčítaj menšie číslo od väčšieho.": "N'additionne pas les nombres. On demande combien un enfant a de plus que l'autre – soustrais le plus petit nombre du plus grand.",
  "Čísla sú rovnaké, preto ${@0} = {@1}$.": "Les nombres sont égaux, donc ${@0} = {@1}$.",
  "Čísla {@0} vždy o 1: {@1}.": "Les nombres {@0} de 1 à chaque fois : {@1}.",
  "Číslo rozdeľ na desiatky a jednotky, napríklad $14 = 10 + 4$.": "Partage le nombre en dizaines et en unités, par exemple $14 = 10 + 4$.",
  "Číslo {@0} leží na číselnom rade ďalej vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "Le nombre {@0} est plus à droite sur la file numérique, il est plus grand. Donc ${@1} {@2} {@3}$.",
  "Štvorec má 4 rovnako dlhé strany.": "Le carré a 4 côtés de même longueur.",
  "Štvorec má všetky štyri strany rovnako dlhé. Tu sú dve strany dlhšie.": "Le carré a ses quatre côtés de même longueur. Ici, deux côtés sont plus longs.",
  "štvorec": "carré",
  "žaba": "la grenouille",
  "žabou": "la grenouille",
  "žaby": "de la grenouille",
  "„O {@0} viac“ znamená pridať {@1}: ${@2} + {@3} = {@4}$. {@5} má {@6} {@7}.": "« {@0} de plus » veut dire ajouter {@1} : ${@2} + {@3} = {@4}$. {@5} a {@6} {@7}.",
  "„O {@0} viac“ znamená, že {@1} má viac ako {@2}. Treba pripočítať, nie odčítať.": "« {@0} de plus » veut dire que {@1} a plus que {@2}. Il faut additionner, pas soustraire.",
  "„O … viac“ znamená k číslu pripočítať.": "« … de plus » veut dire qu'on ajoute au nombre."
 }
});
