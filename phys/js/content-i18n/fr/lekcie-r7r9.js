/* Français: grades 7–9 lessons (js/rocniky/r7.js, r8.js, r9.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('fr', {
  lessons: {
    'r7-pohyb': {
      title: 'Mouvement des corps et sa description',
      summary: 'Le mouvement et le repos sont relatifs et dépendent du système de référence.',
      theory: [
        `<p>Le mouvement et le repos sont <strong>relatifs</strong> : ils dépendent de ce à quoi on les compare. Le corps par rapport auquel on décrit le mouvement s’appelle le
       <strong>corps de référence</strong>. Avec des horloges, il forme un <strong>système de référence</strong>.</p>`,
        `<p>Un passager assis dans un train en marche est au repos par rapport au train, mais il se déplace par rapport aux arbres le long de la voie. Les deux affirmations sont vraies,
       chacune dans un système de référence différent. C’est pourquoi, lorsqu’on décrit un mouvement, on précise toujours par rapport à quoi on le décrit.</p>`,
        `<ul>
         <li><strong>Trajectoire</strong> : la ligne que décrit un corps en se déplaçant.</li>
         <li><strong>Distance parcourue</strong> $s$ : la longueur de la trajectoire entre deux endroits. Elle se mesure en mètres.</li>
         <li><strong>Point matériel</strong> : un corps dont on néglige les dimensions lorsqu’on décrit son mouvement.</li>
       </ul>`,
        `<p>La distance parcourue est la longueur de tout le trajet, et non la distance entre le départ et l’arrivée. Si l’on marche 3 m vers l’est puis 4 m vers le nord,
       la distance parcourue est $7\\,\\text{m}$, alors que la distance du point de départ n’est que de $5\\,\\text{m}$.</p>`,
        { fig: 'obr-draha', caption: 'La distance parcourue est tout le trajet ; la distance est la ligne droite entre le début et la fin.' }
      ],
      examples: [
        { task: 'Un passager est assis dans un train rapide. Est-il au repos ou en mouvement ?',
          steps: ['Par rapport au train dans lequel il est assis, il ne bouge pas.', 'Par rapport aux arbres le long de la voie, il se déplace.', '<strong>Résultat : au repos par rapport au train, en mouvement par rapport à l’environnement.</strong>'] },
        { task: 'Un piéton a marché 3 m vers l’est puis 4 m vers le nord. Quelle est sa distance parcourue ?',
          steps: ['La distance parcourue est la longueur de tout le trajet, on additionne donc les deux tronçons.', '$s = 3\\,\\text{m} + 4\\,\\text{m} = 7\\,\\text{m}$', '<strong>Résultat : 7 m</strong>'] }
      ]
    },
    'r7-draha': {
      title: 'Distance, temps et vitesse moyenne',
      summary: 'Calcul de la vitesse, de la distance et du temps, et conversion entre m/s et km/h.',
      theory: [
        `<p><strong>La vitesse</strong> indique la distance parcourue par un corps pendant une unité de temps. Formule : $v=\\frac{s}{t}$, où $s$ est la distance parcourue et $t$ le temps.
       L’unité du SI est $\\text{m/s}$ ; dans la circulation routière, on utilise $\\text{km/h}$.</p>`,
        `<p>De cette formule on déduit deux autres : $s=v\\cdot t$ et $t=\\frac{s}{v}$. Avant chaque calcul, vérifie toujours les unités.
       Si la distance est en kilomètres et le temps en minutes, il faut convertir l’une des grandeurs.</p>`,
        `<ul>
         <li>$1\\,\\text{m/s}=3{,}6\\,\\text{km/h}$ : pour passer des mètres par seconde aux kilomètres par heure, on multiplie par $3{,}6$.</li>
         <li>$1\\,\\text{km/h}=\\frac{1}{3{,}6}\\,\\text{m/s}$ : pour passer des kilomètres par heure aux mètres par seconde, on divise par $3{,}6$.</li>
       </ul>`,
        `<p><strong>La vitesse moyenne</strong> n’est pas égale à la moyenne des vitesses. Elle se calcule comme la distance totale divisée par le temps total :
       $v_p=\\frac{s_{\\text{celk}}}{t_{\\text{celk}}}$. Si une voiture s’est arrêtée un moment sur une partie du trajet, sa vitesse moyenne est inférieure à sa vitesse maximale.</p>`,
        { fig: 'obr-draha', caption: 'La distance parcourue est tout le trajet ; la distance est la ligne droite entre le début et la fin.' }
      ],
      examples: [
        { task: 'Une voiture a parcouru $120\\,\\text{km}$ en $2\\,\\text{h}$. Quelle était sa vitesse moyenne ?',
          steps: ['$v=\\frac{s}{t}=\\frac{120}{2}$', '$v=60\\,\\text{km/h}$', '<strong>Résultat : 60 km/h</strong>'] },
        { task: 'Un cycliste se déplace à $5\\,\\text{m/s}$. Quelle est cette vitesse en $\\text{km/h}$ ?',
          steps: ['Pour passer de m/s à km/h, on multiplie par 3,6.', '$5\\cdot 3{,}6=18\\,\\text{km/h}$', '<strong>Résultat : 18 km/h</strong>'] }
      ]
    },
    'r7-rovnomerny': {
      title: 'Mouvement uniforme et non uniforme',
      summary: 'Quand la vitesse ne change pas, et comment calculer un mouvement dont la vitesse varie.',
      theory: [
        `<p><strong>Mouvement uniforme</strong> : le corps parcourt la même distance pendant chaque intervalle de temps égal, donc sa vitesse ne change pas.
       Sur un graphe de la distance en fonction du temps, c’est une droite, et sa pente correspond à la vitesse.</p>`,
        `<p><strong>Mouvement non uniforme</strong> : la vitesse change, le corps accélère ou ralentit. Par exemple, un train qui démarre ou une pierre qui tombe vers le sol.</p>`,
        `<p>Pour un mouvement uniforme, la formule $s=v\\cdot t$ est valable, où $v$ est la vitesse constante. Pour un mouvement non uniforme, on peut utiliser la
       <strong>vitesse moyenne</strong> : distance totale divisée par le temps total. Elle ne montre cependant que le résultat global, pas la manière dont la vitesse a varié.</p>`,
        `<ol>
         <li>Si le corps parcourt des distances égales pendant des temps égaux, le mouvement est uniforme.</li>
         <li>Si les distances parcourues pendant des temps égaux changent, le mouvement est non uniforme.</li>
         <li>La vitesse moyenne ne se calcule jamais comme la moyenne de deux vitesses.</li>
       </ol>`,
        { fig: 'r6r9-rovnomerny', caption: 'Pour un mouvement uniforme, le graphe de la distance en fonction du temps est une droite dont la pente correspond à la vitesse. Lors d’une accélération, c’est une courbe.' }
      ],
      examples: [
        { task: 'Un marcheur avance à vitesse constante de $4\\,\\text{km/h}$. Quelle distance parcourt-il en $3\\,\\text{h}$ ?',
          steps: ['Le mouvement est uniforme, donc $s=v\\cdot t$.', '$s=4\\cdot 3=12\\,\\text{km}$', '<strong>Résultat : 12 km</strong>'] },
        { task: 'Un corps parcourt 5 m à chaque seconde. Quel est ce mouvement et quelle distance parcourt-il en 6 s ?',
          steps: ['Pendant des temps égaux, il parcourt des distances égales : le mouvement est uniforme.', '$s = 5\\cdot 6 = 30\\,\\text{m}$', '<strong>Résultat : mouvement uniforme, 30 m</strong>'] }
      ]
    },
    'r7-sila': {
      title: 'Force et ses effets',
      summary: 'Qu’est-ce qu’une force, quels sont ses effets et comment additionner des forces de même sens ou de sens opposés.',
      theory: [
        `<p><strong>La force</strong> est une action mutuelle entre des corps. On ne voit pas la force, on voit ses effets. Elle se note $F$ et son unité est le newton : $1\\,\\text{N}$.</p>`,
        `<ul>
         <li>Elle peut <strong>changer la vitesse</strong> d’un corps : le mettre en mouvement, le ralentir ou l’arrêter.</li>
         <li>Elle peut <strong>changer la direction</strong> du mouvement, par exemple lorsqu’on tourne à vélo.</li>
         <li>Elle peut <strong>changer la forme</strong> d’un corps : écraser une éponge ou étirer un élastique.</li>
       </ul>`,
        `<p>La force est un <strong>vecteur</strong> : elle a une grandeur, une direction, un sens et un point d’application. On la représente par une flèche. Si des forces de même sens agissent sur un corps,
       on les additionne. Si elles agissent en sens opposés, on soustrait la plus petite de la plus grande et la force résultante a le sens de la plus grande.</p>`,
        `<p>Les forces apparaissent toujours par paires : si la main pousse sur un mur, le mur pousse la main avec une force de même grandeur et de sens opposé.
       Ces deux forces n’agissent cependant pas sur le même corps, donc elles ne s’annulent pas.</p>`,
        { fig: 'obr-sily', caption: 'Forces agissant sur un corps posé sur un support horizontal : traction F, frottement Ftr et réaction du support N.' }
      ],
      examples: [
        { task: 'Deux élèves tirent un chariot dans le même sens avec des forces de $30\\,\\text{N}$ et $20\\,\\text{N}$. Quelle est la force résultante ?',
          steps: ['Les forces ont le même sens, on les additionne.', '$30 + 20 = 50$', '<strong>Résultat : 50 N</strong>'] },
        { task: 'Le premier élève tire le même chariot vers la droite avec une force de $30\\,\\text{N}$, le second vers la gauche avec une force de $20\\,\\text{N}$. Quelle est la force résultante ?',
          steps: ['Les forces ont des sens opposés, on les soustrait.', '$30 - 20 = 10$, la force résultante est dirigée vers la droite.', '<strong>Résultat : 10 N vers la droite</strong>'] }
      ]
    },
    'r7-tiaz': {
      title: 'Attraction gravitationnelle et poids',
      summary: 'Pourquoi les corps tombent sur Terre et en quoi la masse se distingue du poids.',
      theory: [
        `<p>Tous les corps s’attirent mutuellement par la <strong>force gravitationnelle</strong>. Plus les masses sont grandes et plus les corps sont proches, plus la force d’attraction est grande.
       La gravitation de la Terre nous retient à sa surface et la Lune tourne autour de la Terre.</p>`,
        `<p><strong>Le poids</strong> $F_G$ est la force avec laquelle la Terre attire un corps vers elle. On le calcule avec la formule $F_G=m\\cdot g$, où $m$ est la masse en kilogrammes
       et $g$ l’accélération de la pesanteur. Sur Terre, $g\\approx 10\\,\\text{N/kg}$ (plus précisément $9{,}81\\,\\text{N/kg}$).</p>`,
        `<p><strong>La masse et le poids ne sont pas la même chose.</strong> La masse en kilogrammes indique la quantité de matière que contient le corps, et elle est partout la même.
       Le poids en newtons dépend du lieu. Sur la Lune, $g\\approx 1{,}6\\,\\text{N/kg}$, donc un corps de masse $5\\,\\text{kg}$ y pèse environ $8\\,\\text{N}$.</p>`,
        `<ul>
         <li>Le poids est une force, il se mesure avec un dynamomètre en newtons.</li>
         <li>La masse se mesure avec une balance en kilogrammes.</li>
       </ul>`,
        { fig: 'r6r9-tiaz', caption: 'La même masse a un poids plus petit sur la Lune, car l’accélération gravitationnelle y est plus faible.' }
      ],
      examples: [
        { task: 'Quel est le poids d’un corps de masse $4\\,\\text{kg}$ sur Terre ? Utilise $g=10\\,\\text{N/kg}$.',
          steps: ['$F_G=m\\cdot g$', '$F_G=4\\cdot 10=40\\,\\text{N}$', '<strong>Résultat : 40 N</strong>'] },
        { task: 'Un corps a sur Terre un poids de $60\\,\\text{N}$. Quelle est sa masse ?',
          steps: ['$m=\\frac{F_G}{g}$', '$m=\\frac{60}{10}=6\\,\\text{kg}$', '<strong>Résultat : 6 kg</strong>'] }
      ]
    },
    'r7-trenie': {
      title: 'Frottement et résistance du milieu',
      summary: 'Quand le frottement est plus grand, comment l’augmenter ou le réduire, et ce qui freine les corps dans les fluides.',
      theory: [
        `<p><strong>Le frottement</strong> apparaît sur la surface de contact de deux corps et agit contre le mouvement, ou contre la tentative de mouvement. C’est pourquoi une caisse
       que l’on pousse sur le sol s’arrête dès qu’on cesse de pousser.</p>`,
        `<ul>
         <li>Le frottement est plus grand lorsque les surfaces sont plus rugueuses.</li>
         <li>Le frottement est plus grand lorsque le corps appuie plus fortement sur le support.</li>
         <li>Le frottement ne dépend pas de l’aire de la surface de contact.</li>
       </ul>`,
        `<p><strong>La résistance du milieu</strong> (air, eau) freine le mouvement du corps. Elle dépend de la forme du corps, de sa vitesse et de la densité du milieu.
       Un parachute subit une grande résistance de l’air, c’est pourquoi il descend lentement. Un nageur à la forme profilée subit une résistance de l’eau plus faible.</p>`,
        `<p>Parfois on veut augmenter le frottement, par exemple pour les pneus sur la route ou lorsqu’on marche. D’autres fois on veut le réduire, par exemple dans les roulements.
       Le lubrifiant forme une fine couche entre les surfaces et réduit ainsi le frottement.</p>`,
        { fig: 'obr-sily', caption: 'Forces agissant sur un corps posé sur un support horizontal : traction F, frottement Ftr et réaction du support N.' }
      ],
      examples: [
        { task: 'Une armoire est tirée par une force de $300\\,\\text{N}$ dans le sens du mouvement, et le frottement de $120\\,\\text{N}$ agit contre le mouvement. Quelle est la force résultante dans le sens du mouvement ?',
          steps: ['Le frottement agit contre le mouvement, on le soustrait donc.', '$300-120=180$', '<strong>Résultat : 180 N</strong>'] },
        { task: 'Quel moyen augmente le frottement : des pneus tout-terrain, ou du lubrifiant dans un roulement ?',
          steps: ['Les pneus tout-terrain ont une surface plus rugueuse, le frottement augmente.', 'Le lubrifiant entre les surfaces réduit le frottement.', '<strong>Résultat : les pneus tout-terrain</strong>'] }
      ]
    },
    'r7-svetlo': {
      title: 'La lumière et sa propagation',
      summary: 'Propagation rectiligne de la lumière, vitesse de la lumière, ombres et éclipses.',
      theory: [
        `<p>La lumière est un rayonnement électromagnétique que nous percevons avec les yeux. Une source lumineuse émet la lumière dans toutes les directions.
       Un corps qui n’émet pas lui-même de lumière, nous le voyons parce qu’il renvoie la lumière dans nos yeux.</p>`,
        `<p>Dans un même milieu, la lumière se propage en <strong>ligne droite</strong>. C’est pourquoi une ombre se forme derrière un objet opaque : l’objet bloque la lumière située derrière lui.
       Une grande source lumineuse produit aussi une pénombre, où seule une partie de la source éclaire.</p>`,
        `<p>La vitesse de la lumière dans le vide est $c=300\\,000\\,\\text{km/s}$, soit $3\\cdot 10^8\\,\\text{m/s}$. Dans l’air, elle est presque la même ; dans l’eau et dans le verre, elle est plus petite.
       La lumière de la Lune nous parvient en environ $1{,}3\\,\\text{s}$, celle du Soleil en environ 8 minutes.</p>`,
        `<p>Une éclipse de Soleil se produit lorsque la Lune se place entre le Soleil et la Terre et projette son ombre sur la Terre. Une éclipse de Lune se produit lorsque la Terre se place entre le Soleil et la Lune.</p>`,
        { fig: 'r6r9-zatmenie', caption: 'Lors d’une éclipse de Soleil, la Lune se trouve entre le Soleil et la Terre et projette son ombre sur la Terre.' }
      ],
      examples: [
        { task: 'La lumière se propage à $300\\,000\\,\\text{km/s}$. Quelle distance parcourt-elle en $10\\,\\text{s}$ ?',
          steps: ['$s=c\\cdot t$', '$s=300\\,000\\cdot 10=3\\,000\\,000\\,\\text{km}$', '<strong>Résultat : 3 000 000 km</strong>'] },
        { task: 'Pourquoi une ombre se forme-t-elle derrière un arbre en plein soleil ?',
          steps: ['L’arbre est opaque et la lumière se propage en ligne droite.', 'La lumière ne peut pas traverser l’arbre, il reste donc de l’obscurité derrière lui.', '<strong>Résultat : l’arbre cache la lumière, car elle se propage en ligne droite</strong>'] }
      ]
    },
    'r7-odraz': {
      title: 'Réflexion et réfraction de la lumière',
      summary: 'Loi de la réflexion, angles par rapport à la normale et brisure du rayon lors du passage dans un autre milieu.',
      theory: [
        `<p>Un rayon lumineux arrive sur la surface de séparation de deux milieux. Une partie se réfléchit, une partie passe dans le second milieu.
       Les angles se mesurent toujours par rapport à la <strong>normale</strong>, c’est-à-dire la droite perpendiculaire à la surface, et non par rapport à la surface.</p>`,
        `<p><strong>Loi de la réflexion :</strong> l’angle d’incidence $\\alpha$ est égal à l’angle de réflexion $\\beta$, donc $\\alpha=\\beta$.
       Le rayon réfléchi se trouve dans le plan formé par le rayon incident et la normale.</p>`,
        `<ul>
         <li>Lors du passage dans un milieu où la lumière est plus lente (par ex. de l’air dans l’eau), le rayon se rapproche de la <strong>normale</strong>.</li>
         <li>Lors du passage dans un milieu où la lumière est plus rapide (par ex. de l’eau dans l’air), le rayon s’éloigne de la <strong>normale</strong>.</li>
       </ul>`,
        `<p>C’est pourquoi un crayon plongé dans un verre d’eau semble brisé, et le fond d’une piscine paraît moins profond qu’il ne l’est en réalité.</p>`,
        { fig: 'obr-odraz', caption: 'Lors de la réflexion de la lumière sur un miroir plan, la loi de la réflexion s’applique.' }
      ],
      examples: [
        { task: 'Un rayon arrive sur un miroir plan en formant un angle de $35^\\circ$ avec la normale. Quel angle le rayon réfléchi forme-t-il avec la normale ?',
          steps: ['D’après la loi de la réflexion, l’angle de réflexion est égal à l’angle d’incidence.', '$\\beta=\\alpha=35^\\circ$', '<strong>Résultat : 35°</strong>'] },
        { task: 'Un rayon arrive sur un miroir en formant un angle de $60^\\circ$ avec la surface du miroir. Quel est l’angle d’incidence par rapport à la normale ?',
          steps: ['Les angles se mesurent par rapport à la normale, et non par rapport à la surface.', '$\\alpha = 90^\\circ - 60^\\circ = 30^\\circ$', '<strong>Résultat : 30°</strong>'] }
      ]
    },
    'r7-zrkadla': {
      title: 'Miroirs, lentilles et phénomènes optiques',
      summary: 'Image dans un miroir plan, lentille convergente et divergente, et phénomènes comme l’arc-en-ciel ou le mirage.',
      theory: [
        `<p>Un <strong>miroir plan</strong> donne une image virtuelle (apparente) : on la voit derrière le miroir et elle ne peut pas être recueillie sur un écran.
       L’image est de même taille, droite et située derrière le miroir à la même distance que l’objet devant lui.</p>`,
        `<p>Si tu te tiens à $2\\,\\text{m}$ du miroir, ton image est éloignée de toi de $4\\,\\text{m}$. La distance entre l’objet et son image est le double de la distance de l’objet au miroir.</p>`,
        `<p><strong>Les lentilles</strong> réfractent la lumière. La <strong>lentille convergente</strong> est plus épaisse au centre et fait converger les rayons parallèles en un point (le foyer).
       La <strong>lentille divergente</strong> est plus mince au centre et disperse les rayons. La lentille convergente sert dans la loupe, l’appareil photo et les lunettes contre l’hypermétropie.</p>`,
        `<p><strong>Phénomènes optiques :</strong> l’arc-en-ciel apparaît lorsque la lumière blanche se décompose dans les gouttes d’eau. Le mirage résulte de la réfraction de la lumière dans l’air chaud
       au-dessus d’une route brûlante : on voit le reflet du ciel comme si le sol était couvert d’eau.</p>`,
        { fig: 'r6r9-zrkadlo', caption: 'L’image dans un miroir plan est virtuelle : elle se trouve derrière le miroir, à la même distance que l’objet devant lui.' }
      ],
      examples: [
        { task: 'Un objet se trouve devant un miroir plan à $3\\,\\text{m}$. Quelle est la distance entre l’objet et son image ?',
          steps: ['L’image est derrière le miroir à la même distance que l’objet devant lui.', '$3\\,\\text{m}+3\\,\\text{m}=6\\,\\text{m}$', '<strong>Résultat : 6 m</strong>'] },
        { task: 'Quelle lentille fait converger en un point les rayons parallèles ?',
          steps: ['Elle fait converger les rayons en un point si elle est plus épaisse au centre.', 'Une lentille plus épaisse au centre est une lentille convergente.', '<strong>Résultat : la lentille convergente</strong>'] }
      ]
    },
    'r8-praca': {
      title: 'Travail mécanique et puissance',
      summary: 'Quand une force effectue un travail, comment le calculer et à quelle vitesse il est effectué.',
      theory: [
        `<p><strong>Le travail mécanique</strong> est effectué lorsqu’une force agit sur un corps et que le corps se déplace dans le sens de cette force.
       Si l’on ne déplace pas le corps, le travail est nul : pousser un mur ne fournit aucun travail.</p>`,
        `<p>On calcule le travail avec la formule $W = F\\cdot s$, où $F$ est la force en newtons (N) et $s$ la distance parcourue en mètres (m).
       L’unité du travail est le <strong>joule</strong> (J) : $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$.</p>`,
        `<p><strong>La puissance</strong> indique la vitesse à laquelle le travail est effectué. Elle se calcule comme le travail divisé par le temps : $P = \\frac{W}{t}$,
       où $t$ est le temps en secondes. L’unité de la puissance est le <strong>watt</strong> (W) : $1\\,\\text{W} = 1\\,\\text{J/s}$.
       Deux moteurs peuvent fournir le même travail, mais le plus puissant le fait en un temps plus court.</p>`,
        `<ol>
         <li>Repère la force et la distance en N et en m.</li>
         <li>Multiplie-les : $W = F\\cdot s$.</li>
         <li>Si l’on demande la puissance, divise le résultat par le temps : $P = W : t$.</li>
       </ol>`,
        { fig: 'r6r9-praca', caption: 'Le travail n’est effectué que lors d’un déplacement dans le sens de la force. Pousser un mur qui ne bouge pas ne fournit aucun travail.' }
      ],
      examples: [
        { task: 'Deux garçons poussent un chariot avec une force $F = 150\\,\\text{N}$ et le déplacent de $s = 8\\,\\text{m}$. Quel travail a été effectué ?',
          steps: ['On remplace dans la formule : $W = F\\cdot s = 150\\cdot 8$.', '<strong>Résultat : W = 1200 J</strong>'] },
        { task: 'Un moteur de levage fournit un travail $W = 3000\\,\\text{J}$ en $t = 20\\,\\text{s}$. Quelle est sa puissance ?',
          steps: ['$P = \\frac{W}{t} = \\frac{3000}{20}$.', '<strong>Résultat : P = 150 W</strong>'] }
      ]
    },
    'r8-mechanicka-energia': {
      title: 'Énergie mécanique et ses transformations',
      summary: 'L’énergie est la capacité à effectuer un travail, et elle se transforme d’une forme à une autre.',
      theory: [
        `<p><strong>L’énergie</strong> est la capacité d’un corps à effectuer un travail. Elle se note $E$ et son unité est la même que celle du travail : le joule (J).
       On ne peut ni créer l’énergie à partir de rien, ni la détruire. On peut seulement la transformer d’une forme à une autre.</p>`,
        `<p><strong>Principe de conservation de l’énergie :</strong> l’énergie totale d’un système isolé ne change pas. Si une forme d’énergie diminue,
       une autre forme augmente d’autant.</p>`,
        `<ul>
         <li>Une pierre tombe d’une hauteur : l’énergie potentielle se transforme en énergie cinétique.</li>
         <li>Un pendule remonte : l’énergie cinétique se retransforme en énergie potentielle.</li>
         <li>Une voiture freine : l’énergie cinétique se transforme en énergie interne (chaleur).</li>
       </ul>`,
        `<p>Lors du frottement, une partie de l’énergie mécanique se transforme toujours en chaleur. L’énergie n’est donc pas perdue : elle se disperse dans l’environnement
       et il est difficile de l’utiliser.</p>`,
        { fig: 'obr-energia', caption: 'Lors d’une glissade sans frottement, l’énergie potentielle se transforme en énergie cinétique et inversement.' }
      ],
      examples: [
        { task: 'Que se passe-t-il avec l’énergie lorsqu’un livre tombe de la table sur le plancher ?',
          steps: ['Sur la table, le livre possède une énergie potentielle. Pendant sa chute, il se déplace, donc il a une énergie cinétique.', 'Lors du choc, une partie de l’énergie se transforme en son et en chaleur.', '<strong>Résultat : l’énergie potentielle se transforme en énergie cinétique, sonore et thermique.</strong>'] },
        { task: 'Quelle transformation d’énergie se produit lors du freinage d’un vélo ?',
          steps: ['Le vélo se déplace, il possède une énergie cinétique.', 'Les freins, en frottant contre la jante, produisent de la chaleur.', '<strong>Résultat : l’énergie cinétique se transforme en énergie interne (chaleur).</strong>'] }
      ]
    },
    'r8-polohova-pohybova': {
      title: 'Énergie potentielle et énergie cinétique',
      summary: 'Calcul de l’énergie d’un corps en hauteur et en mouvement.',
      theory: [
        `<p><strong>L’énergie potentielle</strong> (de position) est celle d’un corps soulevé au-dessus du sol. Plus le corps est lourd et haut, plus il possède d’énergie.
       Elle se calcule par $E_p = m\\cdot g\\cdot h$, où $m$ est la masse en kilogrammes, $g \\approx 10\\,\\text{m/s}^2$ l’accélération de la pesanteur et $h$ la hauteur en mètres.</p>`,
        `<p><strong>L’énergie cinétique</strong> (de mouvement) est celle d’un corps en mouvement. Elle se calcule par $E_k = \\frac{1}{2}\\,m\\,v^2$, où $v$ est la vitesse en m/s.
       La vitesse est élevée au carré : une vitesse double donne une énergie cinétique quadruple.</p>`,
        `<p>Ces énergies dépendent de la masse, de la hauteur et de la vitesse, et non de la forme du corps. C’est pourquoi une voiture roulant plus vite s’arrête plus difficilement :
       elle possède beaucoup plus d’énergie cinétique.</p>`,
        `<ol>
         <li>Détermine la masse en kg, la hauteur en m ou la vitesse en m/s.</li>
         <li>Choisis la formule selon que le corps se trouve en hauteur ou qu’il se déplace.</li>
         <li>Calcule ; le résultat est en joules.</li>
       </ol>`,
        { fig: 'r6r9-kinetika', caption: 'L’énergie cinétique croît avec le carré de la vitesse : une vitesse double signifie une énergie quadruple.' }
      ],
      examples: [
        { task: 'Une pierre de masse $m = 2\\,\\text{kg}$ est posée sur un toit haut de $h = 5\\,\\text{m}$. Quelle est son énergie potentielle pour $g = 10\\,\\text{m/s}^2$ ?',
          steps: ['$E_p = m\\cdot g\\cdot h = 2\\cdot 10\\cdot 5$.', '<strong>Résultat : E_p = 100 J</strong>'] },
        { task: 'Un chariot de masse $m = 4\\,\\text{kg}$ se déplace à la vitesse $v = 3\\,\\text{m/s}$. Quelle est son énergie cinétique ?',
          steps: ['$E_k=\\frac{1}{2}\\,m\\,v^2=\\frac{1}{2}\\cdot 4\\cdot 3^2$.', '$\\frac{1}{2}\\cdot 4 = 2$ et $3^2 = 9$, donc $E_k = 2\\cdot 9$.', '<strong>Résultat : E_k = 18 J</strong>'] }
      ]
    },
    'r8-jednoduche-stroje': {
      title: 'Machines simples',
      summary: 'Le levier, la poulie et le plan incliné facilitent le travail, mais n’améliorent pas le trajet.',
      theory: [
        `<p><strong>Les machines simples</strong> (levier, poulie, plan incliné) permettent de soulever une charge lourde avec une force plus petite.
       Il existe pourtant une règle d’or de la mécanique : le travail ne peut pas être économisé. On obtient une force plus petite au prix d’un trajet plus long.</p>`,
        `<p><strong>Le levier</strong> est une tige qui tourne autour d’un axe. La distance entre la force et l’axe est le <em>bras</em> de la force $r$.
       Le levier est en équilibre lorsque $F_1\\cdot r_1 = F_2\\cdot r_2$. Un bras plus long signifie une force nécessaire plus petite.</p>`,
        `<p><strong>Les poulies :</strong> la poulie fixe change seulement le sens de la force. La poulie mobile réduit la force de moitié, mais le trajet double.
       <strong>Plan incliné :</strong> plus la pente est faible, plus la force suffit, mais le trajet est plus long.</p>`,
        `<ol>
         <li>Détermine quelle force est la charge et quelle force tire.</li>
         <li>Mesure les bras (distances à l’axe).</li>
         <li>Utilise l’équilibre du levier et calcule la force inconnue.</li>
       </ol>`,
        { fig: 'obr-paka', caption: 'Le levier est en équilibre lorsque le produit de la force et du bras d’un côté est égal au produit de l’autre côté.' }
      ],
      examples: [
        { task: 'Sur un levier dont le bras de la force est $r_1 = 2\\,\\text{m}$, nous soulevons une charge avec la force $F_2 = 300\\,\\text{N}$ dont le bras est $r_2 = 0{,}5\\,\\text{m}$. Avec quelle force agissons-nous sur le bras $r_1$ ?',
          steps: ['Équilibre : $F_1\\cdot r_1 = F_2\\cdot r_2$.', '$F_1 = \\frac{F_2\\cdot r_2}{r_1} = \\frac{300\\cdot 0{,}5}{2}$.', '<strong>Résultat : F_1 = 75 N</strong>'] },
        { task: 'Avec une poulie mobile, nous soulevons une charge de poids $200\\,\\text{N}$. Avec quelle force tirons-nous, si l’on néglige le frottement ?',
          steps: ['La poulie mobile réduit la force de moitié : $F = \\frac{200}{2}$.', '<strong>Résultat : F = 100 N, mais il faut tirer sur une distance double.</strong>'] }
      ]
    },
    'r8-vnutorna-energia': {
      title: 'Énergie interne et échange de chaleur',
      summary: 'Énergie interne d’un corps, transfert de la chaleur et calcul de la chaleur nécessaire au chauffage.',
      theory: [
        `<p>Chaque corps possède une <strong>énergie interne</strong>. Elle est formée par les énergies cinétiques et potentielles de ses particules (atomes et molécules).
       Plus les particules bougent vite, plus le corps est chaud et plus son énergie interne est grande.</p>`,
        `<p><strong>La chaleur</strong> est l’énergie que les corps se transmettent lorsqu’il existe une différence de température. Elle passe toujours du corps le plus chaud
       vers le plus froid, jusqu’à ce que les températures s’égalisent. La chaleur n’est pas une propriété du corps, mais une énergie transférée.</p>`,
        `<ul>
         <li><strong>Par conduction :</strong> la chaleur passe de particule en particule, par exemple dans une cuillère plongée dans un thé chaud.</li>
         <li><strong>Par convection :</strong> l’air ou l’eau chauds montent, par exemple près d’un radiateur.</li>
         <li><strong>Par rayonnement :</strong> la chaleur traverse aussi le vide, par exemple celle qui vient du Soleil.</li>
       </ul>`,
        `<p>La quantité de chaleur nécessaire pour chauffer un corps se calcule avec $Q = m\\cdot c\\cdot \\Delta t$. La grandeur $c$ est la capacité thermique massique :
       pour l’eau, $c = 4200\\,\\text{J/(kg\\cdot K)}$. La variation de température $\\Delta t$ est la différence entre la température finale et la température initiale.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: 'La chaleur passe du corps le plus chaud vers le plus froid. Elle se transmet par conduction, par convection ou par rayonnement.' }
      ],
      examples: [
        { task: 'Quelle quantité de chaleur faut-il pour chauffer $m = 2\\,\\text{kg}$ d’eau de 10 °C ? Utilise $c = 4200\\,\\text{J/(kg\\cdot K)}$.',
          steps: ['$Q = m\\cdot c\\cdot \\Delta t = 2\\cdot 4200\\cdot 10$.', '<strong>Résultat : Q = 84 000 J = 84 kJ</strong>'] },
        { task: 'Une tasse de thé chaud se refroidit peu à peu. Comment transmet-elle sa chaleur à l’environnement ?',
          steps: ['La chaleur passe du thé à travers la paroi de la tasse par conduction.', 'L’air chaud au-dessus de la tasse monte, c’est la convection. La tasse émet aussi de la chaleur par rayonnement.', '<strong>Résultat : par conduction, convection et rayonnement.</strong>'] }
      ]
    },
    'r8-naboj': {
      title: 'Charge électrique',
      summary: 'Deux types de charges, électrisation par frottement et charge de l’électron.',
      theory: [
        `<p>Tous les corps sont constitués d’atomes. Un atome a un noyau chargé positivement et des électrons chargés négativement.
       <strong>La charge électrique</strong> est une propriété des corps qui se manifeste par une action de force. Elle se note $Q$ et son unité est le coulomb (C).</p>`,
        `<p>Il existe deux sortes de charges : positive et négative. Des charges de même signe se repoussent, des charges de signes opposés s’attirent.
       Un corps neutre possède autant de charges positives que de charges négatives.</p>`,
        `<p><strong>Électrisation par frottement :</strong> lors d’un frottement, des électrons passent d’un corps à l’autre. Le corps qui gagne des électrons est chargé négativement,
       celui qui en perd est chargé positivement. La charge ne peut pas être créée ni détruite, seulement transférée.</p>`,
        `<ul>
         <li>La charge élémentaire $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$ est portée par un électron.</li>
         <li>La charge d’un corps ayant $n$ électrons en surplus est $Q = -n\\,e$ ; avec $n$ électrons en moins, $Q = +n\\,e$.</li>
       </ul>`,
        { fig: 'r6r9-naboj', caption: 'Des charges de même signe se repoussent, des charges de signes opposés s’attirent.' }
      ],
      examples: [
        { task: 'Un corps a perdu 3 électrons. Quelle est sa charge en multiples de la charge élémentaire $e$ ?',
          steps: ['La perte d’électrons crée un déficit de charge négative : le corps est positif.', 'La charge vaut $Q = +3e$.', '<strong>Résultat : +3e</strong>'] },
        { task: 'Deux boules se repoussent après s’être touchées. Que cela signifie-t-il pour leurs charges ?',
          steps: ['La répulsion ne se produit que pour des charges de même signe.', '<strong>Résultat : les deux boules ont des charges de même signe.</strong>'] }
      ]
    },
    'r8-prud-napatie': {
      title: 'Courant électrique et tension électrique',
      summary: 'Le courant comme charge par unité de temps, la tension comme force motrice, et leur mesure.',
      theory: [
        `<p><strong>Le courant électrique</strong> est le mouvement ordonné de particules chargées, dans les métaux surtout des électrons. Il se note $I$ et son unité est l’ampère (A).
       Si une charge $Q$ traverse la section d’un conducteur pendant un temps $t$, l’intensité du courant est $I = \\frac{Q}{t}$. D’où $1\\,\\text{A} = 1\\,\\text{C/s}$.</p>`,
        `<p>Par convention, le sens du courant est celui du déplacement d’une charge positive, du pôle positif de la source vers le pôle négatif. Les électrons se déplacent en sens inverse.</p>`,
        `<p><strong>La tension électrique</strong> $U$ est la différence de potentiel qui met les électrons en mouvement dans le circuit. La source (pile) la crée entre ses bornes.
       Son unité est le volt (V).</p>`,
        `<ol>
         <li>On mesure le courant avec un <strong>ampèremètre</strong>, branché en série avec le récepteur.</li>
         <li>On mesure la tension avec un <strong>voltmètre</strong>, branché en parallèle avec le récepteur.</li>
       </ol>`,
        { fig: 'r6r9-merania', caption: 'L’ampèremètre se branche en série avec le récepteur, le voltmètre en parallèle avec celui-ci.' }
      ],
      examples: [
        { task: 'Une charge de $Q = 20\\,\\text{C}$ traverse un conducteur en $t = 10\\,\\text{s}$. Quelle est l’intensité du courant ?',
          steps: ['$I = \\frac{Q}{t} = \\frac{20}{10}$.', '<strong>Résultat : I = 2 A</strong>'] },
        { task: 'Quel appareil mesure le courant, lequel mesure la tension, et comment les branche-t-on ?',
          steps: ['L’intensité est mesurée par un ampèremètre branché en série.', 'La tension est mesurée par un voltmètre branché en parallèle.', '<strong>Résultat : l’ampèremètre mesure le courant, le voltmètre la tension.</strong>'] }
      ]
    },
    'r8-odpor': {
      title: 'Circuit électrique et résistance électrique',
      summary: 'Ce qui constitue un circuit et la manière dont la résistance freine le courant.',
      theory: [
        `<p><strong>Un circuit électrique</strong> est une boucle fermée dans laquelle circule le courant. Il est constitué d’une source, de récepteurs, de conducteurs et d’un interrupteur.
       Si le circuit est interrompu (par exemple par un interrupteur ouvert), le courant ne circule pas.</p>`,
        `<p><strong>La résistance électrique</strong> $R$ freine le mouvement des électrons dans le conducteur. Elle provient des chocs des électrons avec les atomes de la matière.
       Son unité est l’ohm ($\\Omega$). La résistance dépend du matériau, de la longueur, de la section et de la température du conducteur.</p>`,
        `<p>Entre la tension, le courant et la résistance existe la relation $R = \\frac{U}{I}$. À tension égale, une résistance plus grande signifie un courant plus petit.</p>`,
        `<ol>
         <li>Repère la tension $U$ en volts et le courant $I$ en ampères.</li>
         <li>Calcule la résistance avec $R = \\frac{U}{I}$.</li>
       </ol>`,
        { fig: 'r6r9-odpor', caption: 'À tension égale, une résistance plus grande laisse passer un courant plus faible : à 12 V, le courant est de 6 A pour 2 Ω et de 2 A pour 6 Ω.' }
      ],
      examples: [
        { task: 'Une ampoule alimentée sous $U = 12\\,\\text{V}$ est traversée par un courant $I = 2\\,\\text{A}$. Quelle est sa résistance ?',
          steps: ['$R = \\frac{U}{I} = \\frac{12}{2}$.', '<strong>Résultat : R = 6 Ω</strong>'] },
        { task: 'Quel conducteur freine le plus le courant : celui de plus grande résistance ou celui de plus petite résistance ?',
          steps: ['Une résistance plus grande signifie que les électrons passent plus difficilement.', '<strong>Résultat : le conducteur de plus grande résistance.</strong>'] }
      ]
    },
    'r8-vodice': {
      title: 'Conducteurs et isolants électriques',
      summary: 'Quelles substances conduisent le courant et pourquoi, et à quoi elles servent.',
      theory: [
        `<p><strong>Un conducteur</strong> est une substance dans laquelle les électrons peuvent se déplacer librement. Les métaux, par exemple le cuivre, l’aluminium et le fer,
       ainsi que le graphite, sont des conducteurs typiques. <strong>Un isolant</strong> (non-conducteur) a des électrons fortement liés et ne conduit pas le courant :
       par exemple le plastique, le caoutchouc, le verre ou le bois sec.</p>`,
        `<ul>
         <li>Métal : bon conducteur, utilisé pour transporter le courant.</li>
         <li>Plastique et caoutchouc : isolants, utilisés comme gaine des conducteurs.</li>
         <li>Solution de sel dans l’eau : conduit le courant, car des particules chargées s’y déplacent.</li>
         <li>Eau distillée pure : pratiquement un isolant.</li>
       </ul>`,
        `<p>Les conducteurs servent à transporter le courant, par exemple le cuivre dans les câbles. Les isolants les enveloppent pour éviter de toucher un conducteur sous tension
       et pour que le courant ne passe pas là où il ne doit pas aller.</p>`,
        `<p>Les semi-conducteurs, par exemple le silicium, se situent entre les conducteurs et les isolants. Ils ne conduisent le courant que dans certaines conditions,
       c’est pourquoi on les utilise en électronique.</p>`,
        { fig: 'r6r9-vodice', caption: 'Les conducteurs ont des électrons libres et conduisent le courant. Les isolants ont des électrons fortement liés et ne conduisent pas le courant.' }
      ],
      examples: [
        { task: 'Pourquoi le fil de cuivre est-il recouvert de plastique ?',
          steps: ['Le cuivre conduit le courant, le plastique ne le conduit pas.', 'Le plastique empêche de toucher le conducteur et une fuite de courant.', '<strong>Résultat : le plastique est un isolant et protège contre les accidents.</strong>'] },
        { task: 'L’eau salée conduit-elle le courant ?',
          steps: ['Le sel se dissout dans l’eau et forme des particules chargées, qui peuvent transporter la charge.', '<strong>Résultat : une solution de sel conduit le courant, c’est un conducteur.</strong>'] }
      ]
    },
    'r8-bezpecnost': {
      title: 'Sécurité lors de l’utilisation des appareils électriques',
      summary: 'Les règles qui protègent contre les accidents dus au courant électrique et contre l’incendie.',
      theory: [
        `<p>Un courant électrique traversant le corps peut provoquer des brûlures, des troubles cardiaques, voire la mort. C’est pourquoi nous respectons les règles de sécurité.
       Le danger est plus grand lorsque la peau est mouillée, car l’eau augmente la conduction du courant.</p>`,
        `<ul>
         <li>Ne touche jamais un appareil électrique avec les mains mouillées ni sur un sol mouillé.</li>
         <li>N’utilise pas de câbles ni de prises endommagés ; ne tire jamais sur le cordon.</li>
         <li>N’introduis aucun objet dans les prises, surtout pas d’objet métallique.</li>
         <li>En cas de panne, débranche l’appareil et fais appel à un professionnel.</li>
       </ul>`,
        `<p><strong>Le fusible</strong> ou <strong>le disjoncteur</strong> coupe le circuit lorsque le courant est trop intense, par exemple lors d’un court-circuit ou d’une surcharge.
       Ils empêchent ainsi la surchauffe des conducteurs et l’incendie.</p>`,
        `<p><strong>La mise à la terre :</strong> les carcasses métalliques des appareils sont reliées à la terre. En cas de défaut, la carcasse n’est pas sous tension
       et le contact n’est pas dangereux.</p>`
      ],
      examples: [
        { task: 'Pierre a débranché la fiche de la prise avec la main mouillée. Qu’est-ce qui est dangereux dans ce cas ?',
          steps: ['L’eau sur la peau augmente la conduction du courant, et le courant peut traverser le corps.', '<strong>Résultat : risque d’accident par courant électrique. Ne touche jamais une fiche avec les mains mouillées.</strong>'] },
        { task: 'Quel élément protège le conducteur contre la surchauffe lors d’un court-circuit ?',
          steps: ['Lors d’un court-circuit, le courant est très intense et le conducteur chauffe rapidement.', 'Le fusible fond ou le disjoncteur coupe le circuit.', '<strong>Résultat : le fusible ou le disjoncteur.</strong>'] }
      ]
    },
    'r9-obvody': {
      title: 'Circuits électriques et leurs propriétés',
      summary: 'Source, récepteur, interrupteur et conducteurs dans un circuit fermé.',
      theory: [
        `<p><strong>Un circuit électrique</strong> est constitué d’une source (pile, accumulateur), de récepteurs (ampoule, résistance, moteur), d’un interrupteur et de conducteurs.
       Le courant ne circule que lorsque le circuit est <strong>fermé</strong>, c’est-à-dire lorsqu’on peut parcourir toute la boucle depuis un pôle de la source jusqu’à l’autre.</p>`,
        `<ul>
         <li><strong>La source</strong> fournit de l’énergie aux particules chargées.</li>
         <li><strong>Le récepteur</strong> transforme l’énergie électrique en une autre forme : lumière, chaleur ou mouvement.</li>
         <li><strong>L’interrupteur</strong> ferme ou ouvre le circuit.</li>
         <li><strong>Les conducteurs</strong> relient les composants en un ensemble.</li>
       </ul>`,
        `<p>On représente le circuit par un <strong>schéma</strong>, dans lequel chaque composant a son symbole. Le schéma montre comment les composants sont branchés,
       et non à quoi ils ressemblent.</p>`,
        `<p>Lorsqu’on ouvre l’interrupteur, le circuit est coupé : le courant ne circule plus et l’ampoule s’éteint. Le circuit ne fonctionne donc que lorsqu’il est entièrement fermé.</p>`,
        { fig: 'obr-obvod', caption: 'Montage en série et en parallèle de récepteurs alimentés par une même source.' }
      ],
      examples: [
        { task: 'Que se passe-t-il avec l’ampoule si l’on ouvre l’interrupteur ?',
          steps: ['Le circuit est coupé et le courant ne circule plus.', '<strong>Résultat : l’ampoule s’éteint.</strong>'] },
        { task: 'Quel composant du circuit transforme l’énergie électrique en lumière ?',
          steps: ['La lumière est produite dans le filament de l’ampoule.', '<strong>Résultat : l’ampoule (récepteur).</strong>'] }
      ]
    },
    'r9-zapojenie': {
      title: 'Montage en série et en parallèle',
      summary: 'Comment la résistance totale change lorsque les résistances sont branchées l’une après l’autre ou côte à côte.',
      theory: [
        `<p>On branche deux résistances <strong>en série</strong> (l’une après l’autre) ou <strong>en parallèle</strong> (côte à côte). En série, le courant doit traverser les deux résistances.
       En montage parallèle, le courant se répartit entre deux branches.</p>`,
        `<ul>
         <li><strong>Montage en série :</strong> l’intensité du courant est la même dans tout le circuit, la tension se répartit entre les résistances. La résistance totale est la somme : $R = R_1 + R_2$.</li>
         <li><strong>Montage en parallèle :</strong> la tension est la même sur les deux branches, le courant se répartit. On a $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$.</li>
       </ul>`,
        `<p>En montage parallèle, la résistance totale est toujours <strong>plus petite</strong> que la plus petite des résistances des branches. La raison est logique :
       chaque branche supplémentaire est un nouveau chemin pour le courant. C’est pourquoi les appareils branchés en parallèle dans un logement prélèvent un courant plus intense sur le réseau.</p>`,
        `<ol>
         <li>Détermine si les résistances sont branchées l’une après l’autre (série) ou côte à côte (parallèle).</li>
         <li>En série, additionne les résistances ; en parallèle, additionne leurs inverses.</li>
       </ol>`,
        { fig: 'obr-obvod', caption: 'Montage en série et en parallèle de récepteurs alimentés par une même source.' }
      ],
      examples: [
        { task: 'Les résistances $R_1 = 6\\,\\Omega$ et $R_2 = 3\\,\\Omega$ sont branchées en parallèle. Quelle est la résistance totale ?',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{6}+\\frac{2}{6}=\\frac{3}{6}$.', '$R=\\frac{6}{3}=2\\,\\Omega$.', '<strong>Résultat : R = 2 Ω</strong>'] },
        { task: 'Les résistances $R_1 = 4\\,\\Omega$ et $R_2 = 5\\,\\Omega$ sont branchées en série. Quelle est la résistance totale ?',
          steps: ['En série, les résistances s’additionnent : $R = R_1 + R_2$.', '<strong>Résultat : R = 9 Ω</strong>'] }
      ]
    },
    'r9-vypocty': {
      title: 'Calculs de l’intensité, de la tension et de la résistance',
      summary: 'À partir de deux grandeurs connues, on calcule la troisième.',
      theory: [
        `<p>Dans un circuit, il existe trois grandeurs fondamentales : l’intensité du courant $I$ (A), la tension $U$ (V) et la résistance $R$ (Ω).
       Si nous en connaissons deux, nous pouvons calculer la troisième. Les relations sont $I=\\frac{U}{R}$, $U=I\\cdot R$ et $R=\\frac{U}{I}$.</p>`,
        `<ol>
         <li>Note ce qui est donné et ce que l’on cherche.</li>
         <li>Choisis la formule dans laquelle la grandeur cherchée est isolée.</li>
         <li>Remplace par les unités V, A et Ω ; pour les conversions, utilise les multiples.</li>
         <li>Vérifie les unités du résultat.</li>
       </ol>`,
        `<p><strong>Attention aux unités :</strong> $1\\,\\text{mA}=0{,}001\\,\\text{A}$ et $1\\,\\text{k}\\Omega=1000\\,\\Omega$. Si une donnée est en milliampères ou en kilohms,
       il faut d’abord la convertir dans l’unité de base.</p>`,
        { fig: 'r6r9-trojuholnik', caption: 'Couvre la grandeur recherchée : le reste indique la formule, par exemple U = I · R.' }
      ],
      examples: [
        { task: 'Sur une résistance de $R = 4\\,\\Omega$, la tension est $U = 12\\,\\text{V}$. Quel courant la traverse ?',
          steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Résultat : I = 3 A</strong>'] },
        { task: 'Un appareil est traversé par un courant $I = 0{,}5\\,\\text{A}$ sous une tension $U = 230\\,\\text{V}$. Quelle est sa résistance ?',
          steps: ['$R=\\frac{U}{I}=\\frac{230}{0{,}5}$.', 'Division par un nombre décimal : $\\frac{230}{0{,}5}=\\frac{460}{1}$.', '<strong>Résultat : R = 460 Ω</strong>'] }
      ]
    },
    'r9-ohmov-zakon': {
      title: 'Loi d’Ohm',
      summary: 'Le courant est proportionnel à la tension et inversement proportionnel à la résistance.',
      theory: [
        `<p><strong>La loi d’Ohm</strong> dit : le courant qui traverse un conducteur est directement proportionnel à la tension et inversement proportionnel à la résistance.
       On l’écrit $I=\\frac{U}{R}$, à température constante du conducteur.</p>`,
        `<ul>
         <li>À résistance constante : doubler la tension double le courant.</li>
         <li>À tension constante : doubler la résistance réduit le courant de moitié.</li>
       </ul>`,
        `<p>Pour une résistance constante, la dépendance du courant à la tension est représentée sur le graphe par une <strong>droite passant par l’origine</strong>.
       Une droite plus pentue signifie une résistance plus petite, car à tension égale, un courant plus grand la traverse.</p>`,
        `<p>La loi est exacte pour les conducteurs métalliques à température constante. Lorsqu’un métal s’échauffe fortement, sa résistance augmente et la dépendance n’est alors plus linéaire.</p>`,
        { fig: 'obr-ohm', caption: 'À résistance constante, le graphe de la tension en fonction du courant est une droite passant par l’origine.' }
      ],
      examples: [
        { task: 'La tension aux bornes d’une résistance passe de $4\\,\\text{V}$ à $12\\,\\text{V}$, la résistance ne change pas. De combien de fois le courant augmente-t-il ?',
          steps: ['Le rapport des tensions est $\\frac{12}{4}=3$.', 'Le courant est directement proportionnel à la tension, il augmente donc aussi $3$ fois.', '<strong>Résultat : 3 fois</strong>'] },
        { task: 'À la tension $230\\,\\text{V}$, une résistance absorbe un courant de $2\\,\\text{A}$. Quel courant absorbera-t-elle si sa résistance est doublée et que la tension reste la même ?',
          steps: ['La résistance est doublée, le courant est donc inversement proportionnel à celle-ci.', '$I_2 = \\frac{I_1}{2} = \\frac{2}{2}$.', '<strong>Résultat : 1 A</strong>'] }
      ]
    },
    'r9-praca-vykon': {
      title: 'Travail électrique et puissance électrique',
      summary: 'Quelle énergie un appareil consomme pendant un temps donné et comment on la calcule en kWh.',
      theory: [
        `<p><strong>La puissance électrique</strong> est $P=U\\cdot I$ et son unité est le watt (W). Elle indique l’énergie qu’un appareil transforme en une seconde.
       Si nous connaissons la résistance, on a aussi $P=I^2\\,R$ ou $P=\\frac{U^2}{R}$.</p>`,
        `<p><strong>Le travail électrique</strong> (énergie consommée) est $W=P\\cdot t=U\\cdot I\\cdot t$, où $t$ est le temps en secondes. Son unité est le joule (J),
       car $1\\,\\text{W}\\cdot 1\\,\\text{s}=1\\,\\text{J}$.</p>`,
        `<p>Dans les logements, l’énergie est facturée en <strong>kilowattheures</strong> (kWh). On la calcule comme la puissance en kilowatts multipliée par le temps en heures :
       $E = P\\cdot t$, avec $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<ol>
         <li>Puissance en kilowatts : $1000\\,\\text{W} = 1\\,\\text{kW}$.</li>
         <li>Énergie en kWh : puissance en kW multipliée par le temps en heures.</li>
       </ol>`
      ],
      examples: [
        { task: 'Une ampoule est branchée sous $230\\,\\text{V}$ et est traversée par un courant de $0{,}5\\,\\text{A}$. Quelle est sa puissance ?',
          steps: ['$P = U\\cdot I = 230\\cdot 0{,}5$.', '<strong>Résultat : P = 115 W</strong>'] },
        { task: 'Une machine à laver a une puissance de $2\\,\\text{kW}$ et fonctionne pendant $1{,}5\\,\\text{h}$. Quelle énergie consomme-t-elle en kWh ?',
          steps: ['$E = P\\cdot t = 2\\cdot 1{,}5$.', '<strong>Résultat : E = 3 kWh</strong>'] }
      ]
    },
    'r9-magnetizmus': {
      title: 'Champ magnétique et effets magnétiques du courant',
      summary: 'Autour d’un conducteur parcouru par un courant se forme un champ magnétique, dont le sens se détermine par la règle de la main droite.',
      theory: [
        `<p>Autour d’un conducteur parcouru par un courant électrique se forme un <strong>champ magnétique</strong>. Le lien entre l’électricité et le magnétisme a été découvert en 1820
       par le physicien danois Ørsted : lorsque le courant a été établi dans un conducteur voisin, l’aiguille d’une boussole s’est déviée.</p>`,
        `<p><strong>Le sens du champ</strong> se détermine par la règle de la main droite : le pouce indique le sens du courant et les doigts repliés indiquent le sens des lignes de champ
       autour du conducteur. Si l’on change le sens du courant, le sens du champ change aussi.</p>`,
        `<p>Si l’on enroule le conducteur en <strong>bobine</strong>, les champs de chaque spire s’additionnent et un champ plus fort apparaît à l’intérieur de la bobine.
       On renforce le champ en augmentant le courant ou le nombre de spires.</p>`,
        `<ul>
         <li>Sans courant, il n’existe aucun champ magnétique autour du conducteur.</li>
         <li>Le champ magnétique exerce une force sur les aimants et sur d’autres conducteurs parcourus par un courant.</li>
         <li>Plus on s’éloigne du conducteur, plus le champ est faible.</li>
       </ul>`,
        { fig: 'obr-magnet-vodic', caption: 'Autour d’un conducteur parcouru par un courant, le champ magnétique forme des cercles concentriques autour du conducteur.' }
      ],
      examples: [
        { task: 'Comment le sens du champ magnétique autour d’un conducteur change-t-il si l’on inverse le sens du courant ?',
          steps: ['Le sens du champ est déterminé par le sens du courant (règle de la main droite).', '<strong>Résultat : le sens du champ s’inverse.</strong>'] },
        { task: 'Pourquoi l’aiguille d’une boussole se dévie-t-elle à proximité d’un conducteur parcouru par un courant ?',
          steps: ['L’aiguille de la boussole est un petit aimant qui s’oriente dans un champ magnétique.', '<strong>Résultat : autour du conducteur parcouru par un courant règne un champ magnétique qui agit sur l’aiguille.</strong>'] }
      ]
    },
    'r9-elektromagnet': {
      title: 'Électroaimant et moteur électrique',
      summary: 'Une bobine à noyau de fer comme aimant temporaire, et un moteur qui transforme l’énergie électrique en mouvement.',
      theory: [
        `<p><strong>L’électroaimant</strong> est une bobine avec un noyau de fer doux. Lorsque le courant traverse la bobine, le noyau s’aimante.
       Après la coupure du courant, le magnétisme disparaît. La force de l’électroaimant augmente avec un courant plus intense ou avec un plus grand nombre de spires.</p>`,
        `<p><strong>Le moteur électrique</strong> transforme l’énergie électrique en énergie de mouvement (mécanique). Il utilise l’action de force du champ magnétique
       sur un conducteur parcouru par un courant : la bobine placée dans le champ magnétique tourne.</p>`,
        `<ul>
         <li>L’électroaimant est utilisé dans les sonnettes, les relais et les électroaimants de levage des ferrailleries.</li>
         <li>Le moteur électrique entraîne une machine à laver, une perceuse ou un ventilateur.</li>
       </ul>`,
        `<ol>
         <li>Le courant traverse la bobine du moteur.</li>
         <li>Le champ magnétique exerce une force sur les fils de la bobine.</li>
         <li>La bobine tourne.</li>
         <li>Le collecteur inverse le sens du courant pour que la bobine continue de tourner.</li>
       </ol>`,
        { fig: 'r6r9-elektromagnet', caption: 'Une bobine avec un noyau de fer n’est magnétique que lorsqu’un courant la traverse.' }
      ],
      examples: [
        { task: 'Pourquoi un électroaimant de ferraille soulève-t-il du fer, mais le lâche-t-il après la coupure du courant ?',
          steps: ['Lorsque le courant circule, le noyau est magnétique et attire le fer.', 'Après la coupure du courant, le champ magnétique disparaît.', '<strong>Résultat : le magnétisme de l’électroaimant dépend du courant.</strong>'] },
        { task: 'Quelle transformation d’énergie réalise le moteur d’une machine à laver ?',
          steps: ['L’énergie électrique traverse les bobines du moteur.', 'Il en résulte la rotation du tambour.', '<strong>Résultat : énergie électrique en énergie de mouvement (mécanique).</strong>'] }
      ]
    },
    'r9-premeny-zdroje': {
      title: 'Transformations et sources d’énergie',
      summary: 'Comment l’énergie se transforme dans les centrales, et ce qui distingue les sources renouvelables des sources non renouvelables.',
      theory: [
        `<p>L’énergie peut se transformer d’une forme à une autre. Les sources d’énergie se divisent en <strong>renouvelables</strong>, qui se régénèrent naturellement
       (soleil, vent, eau, biomasse, énergie géothermique), et en <strong>non renouvelables</strong>, dont les réserves s’épuisent (charbon, pétrole, gaz naturel, combustible nucléaire).</p>`,
        `<ul>
         <li><strong>Centrale à charbon :</strong> énergie chimique du combustible, puis thermique, mécanique (turbine) et électrique.</li>
         <li><strong>Centrale hydroélectrique :</strong> énergie de position de l’eau, puis cinétique, mécanique (turbine) et électrique.</li>
         <li><strong>Panneau solaire :</strong> l’énergie rayonnante du Soleil se transforme en énergie électrique.</li>
         <li><strong>Éolienne :</strong> énergie cinétique du vent, puis mécanique et électrique.</li>
       </ul>`,
        `<p>À chaque transformation, une partie de l’énergie passe en chaleur et se disperse dans l’environnement. L’énergie totale se conserve,
       mais l’énergie utile diminue.</p>`,
        { fig: 'r6r9-elektrarna', caption: 'Une centrale à charbon transforme progressivement l’énergie chimique du combustible en énergie thermique, mécanique et électrique.' }
      ],
      examples: [
        { task: 'Quelle transformation d’énergie réalise un panneau solaire ?',
          steps: ['Le panneau reçoit l’énergie rayonnante du Soleil.', 'Il la transforme en énergie électrique.', '<strong>Résultat : énergie rayonnante en énergie électrique.</strong>'] },
        { task: 'Pourquoi le charbon est-il une source non renouvelable ?',
          steps: ['Il s’est formé en plusieurs millions d’années à partir de plantes.', 'Nous le consommons plus vite qu’il ne se reconstitue.', '<strong>Résultat : il est non renouvelable, car il ne se reconstitue pas assez vite.</strong>'] }
      ]
    },
    'r9-energia-priroda': {
      title: 'Énergie dans la nature et la technique',
      summary: 'Rendement d’un appareil et énergie qu’il n’est pas possible d’utiliser.',
      theory: [
        `<p>Le <strong>rendement</strong> d’un appareil indique la part de l’énergie fournie qui est transformée en énergie utile :
       $\\eta = \\frac{E_u}{E_d}\\cdot 100\\,\\%$, où $E_u$ est l’énergie utile et $E_d$ l’énergie fournie.</p>`,
        `<p>Le rendement est toujours inférieur à 100 %. Une partie de l’énergie se transforme en chaleur, qui se disperse dans l’environnement.
       Une ampoule à filament a un faible rendement, car elle rayonne la plus grande partie de son énergie sous forme de chaleur.</p>`,
        `<ul>
         <li>Une ampoule LED est plus efficace qu’une ampoule classique, car elle transforme moins d’énergie en chaleur.</li>
         <li>Dans le moteur à combustion d’une voiture, une grande partie de l’énergie du carburant est perdue sous forme de chaleur.</li>
       </ul>`,
        `<p>L’énergie ne disparaît pas dans la nature : elle se disperse sous forme de chaleur, qu’il est ensuite difficile d’utiliser. C’est pourquoi l’être humain cherche à augmenter le rendement des machines.</p>`,
        { fig: 'r6r9-ucinnost', caption: 'Le rendement est le rapport de l’énergie utile à l’énergie fournie. Le reste de l’énergie se perd sous forme de chaleur.' }
      ],
      examples: [
        { task: 'Un moteur reçoit 400 J d’énergie et transforme 100 J en mouvement. Quel est son rendement ?',
          steps: ['$\\eta = \\frac{100}{400}\\cdot 100\\,\\%$.', '$\\eta = 0{,}25\\cdot 100\\,\\% = 25\\,\\%$.', '<strong>Résultat : 25 %</strong>'] },
        { task: 'Un chauffage de rendement $90\\,\\%$ reçoit $1000\\,\\text{J}$. Quelle quantité d’énergie est perdue ?',
          steps: ['L’énergie utile est $0{,}9\\cdot 1000 = 900\\,\\text{J}$.', 'Le reste est perdu : $1000 - 900 = 100\\,\\text{J}$.', '<strong>Résultat : 100 J</strong>'] }
      ]
    },
    'r9-opakovanie': {
      title: 'Révision et problèmes pratiques de physique',
      summary: 'Récapitulatif des relations de la neuvième année et démarche pour les problèmes pratiques.',
      theory: [
        `<p>Pour chaque problème, note d’abord ce qui est donné et ce que l’on cherche. Choisis ensuite la formule, convertis les unités et remplace les valeurs.
       À la fin, vérifie les unités du résultat et si la valeur est plausible.</p>`,
        `<ol>
         <li>Détermine de quel phénomène il s’agit : circuit électrique, énergie, puissance, magnétisme.</li>
         <li>Choisis la formule correcte.</li>
         <li>Convertis les unités (mA en A, kW en W, minutes en secondes, kWh en J).</li>
         <li>Remplace, calcule et vérifie les unités.</li>
       </ol>`,
        `<ul>
         <li>Loi d’Ohm : $I=\\frac{U}{R}$, $U=I\\cdot R$, $R=\\frac{U}{I}$.</li>
         <li>Puissance et travail : $P=U\\cdot I$, $W=P\\cdot t$.</li>
         <li>Énergie potentielle : $E_p=m\\,g\\,h$, pour $g\\approx 10\\,\\text{m/s}^2$.</li>
         <li>Rendement : $\\eta=\\frac{E_u}{E_d}\\cdot 100\\,\\%$.</li>
       </ul>`
      ],
      examples: [
        { task: 'Un moteur d’une puissance de $1500\\,\\text{W}$ fonctionne pendant $2\\,\\text{h}$. Quelle énergie consomme-t-il en kWh ?',
          steps: ['Puissance en kilowatts : $1500\\,\\text{W} = 1{,}5\\,\\text{kW}$.', '$E = P\\cdot t = 1{,}5\\cdot 2 = 3$.', '<strong>Résultat : E = 3 kWh</strong>'] },
        { task: 'Un corps de masse $3\\,\\text{kg}$ se trouve à une hauteur de $4\\,\\text{m}$. Quelle est son énergie potentielle pour $g = 10\\,\\text{m/s}^2$ ?',
          steps: ['$E_p = m\\,g\\,h = 3\\cdot 10\\cdot 4$.', '<strong>Résultat : E_p = 120 J</strong>'] }
      ]
    },
  }
});
