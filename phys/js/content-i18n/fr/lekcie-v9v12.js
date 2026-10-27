/* Français : lekcie vysokoškolskej úrovne ročníkov v9–v12 (js/rocniky/v9.js, v10.js, v11.js, v12.js). Štruktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('fr', {
  lessons: {
    'v9-kryst-struktury': {
      title: 'Structures cristallines',
      summary: 'La maille élémentaire, les types de réseaux cubiques et le nombre d’atomes par maille.',
      theory: [
        `<p>Un cristal est une substance dont les atomes sont disposés régulièrement dans un <em>réseau</em> spatial. Le plus petit motif qui, répété par translations, reconstruit tout le réseau est la <strong>maille élémentaire</strong>.</p>`,
        `<p>Les trois mailles cubiques fondamentales sont : la <em>cubique simple</em> (atomes seulement aux sommets), la <em>cubique centrée</em> (outre les sommets, un atome au centre) et la <em>cubique à faces centrées</em> (outre les sommets, des atomes au centre des faces).</p>`,
        `<p>Un atome situé au centre appartient entièrement à la maille, un atome situé sur une face lui appartient pour moitié et un atome situé à un sommet pour un huitième. Ainsi, une maille cubique simple contient 1 atome, une maille cubique centrée 2 atomes et une maille cubique à faces centrées 4 atomes.</p>`,
        `<p>La disposition influence les propriétés mécaniques. Les métaux à réseau cubique à faces centrées (Al, Cu, Au) sont ductiles, car leurs plans atomiques peuvent glisser facilement les uns sur les autres.</p>`,
        { fig: 'v9v12-bunka', caption: 'Maille élémentaire : réseaux cubiques simple, centré et à faces centrées, ainsi que le nombre d’atomes qui appartiennent à chacun d’eux.' }
      ],
      examples: [
        { task: 'Combien d’atomes appartiennent à une maille élémentaire d’un réseau cubique à faces centrées ?',
          steps: ['Huit atomes aux sommets, chacun appartenant à la maille pour un huitième : $8\\cdot\\tfrac{1}{8}=1$.', 'Six atomes sur les faces, chacun appartenant à la maille pour moitié : $6\\cdot\\tfrac{1}{2}=3$.', '<strong>Résultat : $1+3=4$ atomes</strong>'] },
        { task: 'Combien d’atomes possède une maille cubique centrée ?',
          steps: ['Les sommets donnent $8\\cdot\\tfrac{1}{8}=1$ atome.', 'L’atome au centre appartient entièrement à la maille, il ajoute donc 1.', '<strong>Résultat : 2 atomes</strong>'] }
      ]
    },
    'v9-vazby': {
      title: 'Liaisons atomiques dans les solides',
      summary: 'Liaisons ioniques, covalentes, métalliques et de van der Waals, et leurs conséquences.',
      theory: [
        `<p>Les atomes se lient en un solide lorsque cela abaisse l’énergie totale du système. La liaison se forme par la redistribution ou la mise en commun des électrons de valence.</p>`,
        `<ul><li><strong>Ionique</strong> : des électrons passent d’un atome à l’autre et il se forme des ions de charges opposées (par ex. NaCl). Ces substances sont dures, fragiles et ont un point de fusion élevé.</li><li><strong>Covalente</strong> : les atomes mettent en commun des paires d’électrons (diamant, silicium). Les liaisons sont fortes et les substances dures.</li><li><strong>Métallique</strong> : les électrons de valence forment un « gaz électronique » commun, appartenant à tous les atomes (Cu, Fe). Les métaux sont ductiles et conduisent le courant.</li><li><strong>Van der Waals</strong> : faibles forces d’attraction entre des dipôles temporaires (par ex. CO₂ solide ou couches de graphite). Elles se rompent facilement.</li></ul>`,
        `<p>Les propriétés d’un solide, comme la dureté, la conductivité ou le point de fusion, découlent directement du type de liaison. Une fois la liaison connue, on peut prévoir le comportement du matériau.</p>`
      ],
      examples: [
        { task: 'Quelle liaison est présente dans le cuivre métallique ?',
          steps: ['Les atomes de cuivre libèrent leurs électrons de valence dans une « mer » commune.', '<strong>Résultat : liaison métallique</strong>'] },
        { task: 'Pourquoi le diamant est-il très dur ?',
          steps: ['Chaque atome de carbone est lié par covalence à quatre voisins.', 'Un réseau aussi rigide exige beaucoup d’énergie pour être rompu.', '<strong>Résultat : liaisons covalentes fortes dans tout le cristal</strong>'] }
      ]
    },
    'v9-elektricke-tepelne': {
      title: 'Propriétés électriques et thermiques des matériaux',
      summary: 'Résistivité, dépendance de la résistance à la température et conductivité thermique.',
      theory: [
        `<p>La résistance d’un conducteur est $R = \\rho\\dfrac{l}{S}$, où $\\rho$ est la <em>résistivité</em> du matériau, $l$ la longueur et $S$ la section. La résistivité du cuivre vaut environ $1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$. Un conducteur plus long et plus fin présente une résistance plus grande.</p>`,
        `<p>Un métal conduit le courant parce que ses électrons de valence se déplacent librement dans le réseau. Lorsque la température augmente, les vibrations des ions du réseau dispersent ce mouvement, si bien que la résistance d’un métal croît avec la température. En revanche, dans les semi-conducteurs et les isolants, davantage de porteurs sont libérés quand la température monte, et la résistance diminue.</p>`,
        `<p><strong>Conductivité thermique :</strong> dans les métaux, la chaleur est transportée surtout par les électrons libres, dans les non-métaux par les vibrations du réseau (phonons). C’est pourquoi le cuivre est un excellent conducteur de chaleur, alors que le verre et la céramique isolent thermiquement.</p>`
      ],
      examples: [
        { task: `Un fil de cuivre de longueur 50 m et de section 2 mm² présente quelle résistance ? La résistivité du cuivre est $\\rho=1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$.`,
          steps: ['Convertissons la section : $S=2\\,\\text{mm}^2=2\\cdot 10^{-6}\\,\\text{m}^2$.', '$R=\\rho\\dfrac{l}{S}=1{,}7\\cdot 10^{-8}\\cdot\\dfrac{50}{2\\cdot 10^{-6}}=0{,}425\\,\\Omega$.', '<strong>Résultat : environ 0,43 Ω</strong>'] },
        { task: 'Quel conducteur a la plus grande résistance : le plus long ou le plus court, à section et matériau identiques ?',
          steps: ['La résistance est proportionnelle à la longueur $l$.', '<strong>Résultat : le plus long</strong>'] }
      ]
    },
    'v9-pasova-teoria': {
      title: 'Théorie des bandes des solides',
      summary: 'Bandes d’énergie dans un cristal et répartition des matériaux en conducteurs, semi-conducteurs et isolants.',
      theory: [
        `<p>Lorsqu’un grand nombre d’atomes se rapprochent, les niveaux d’énergie discrets des électrons s’élargissent en <em>bandes</em>, c’est-à-dire en ensembles de niveaux très rapprochés. Entre les bandes peut se trouver une <strong>bande interdite</strong> de largeur $E_g$, dans laquelle les électrons ne peuvent pas se trouver.</p>`,
        `<p>La bande la plus haute occupée est la bande de <em>valence</em>, au-dessus de laquelle se trouve la bande de <em>conduction</em>. Les électrons remplissent les bandes de bas en haut, et le principe de Pauli interdit à deux électrons d’occuper le même état. Une bande entièrement remplie ne conduit pas le courant, car les électrons qu’elle contient n’ont nulle part où aller.</p>`,
        `<ul><li><strong>Conducteur</strong> (métal) : il n’y a pas de bande interdite, les bandes se recouvrent et la bande de conduction est partiellement remplie.</li><li><strong>Semi-conducteur</strong> : $E_g$ vaut environ 0,1 à 3 eV (le silicium a 1,1 eV). À température ambiante, quelques électrons atteignent la bande de conduction.</li><li><strong>Isolant</strong> : $E_g$ est supérieur à 3 eV (le diamant a 5,5 eV).</li></ul>`,
        { fig: 'v9v12-pasy', caption: 'Dans un conducteur les bandes se recouvrent, dans un semi-conducteur il existe une bande interdite étroite E_g, et dans un isolant une bande large.' }
      ],
      examples: [
        { task: 'Un matériau a une largeur de bande interdite $E_g = 0{,}67\\,\\text{eV}$. Est-ce un conducteur, un semi-conducteur ou un isolant ?',
          steps: ['La valeur est comprise entre 0,1 et 3 eV et n’est pas nulle.', '<strong>Résultat : un semi-conducteur (par ex. le germanium)</strong>'] },
        { task: 'Pourquoi le diamant ($E_g=5{,}5\\,\\text{eV}$) ne conduit-il pas le courant ?',
          steps: ['La bande interdite est très large.', 'Aux températures ordinaires, les électrons n’atteignent pas la bande de conduction.', '<strong>Résultat : c’est un isolant</strong>'] }
      ]
    },
    'v9-polovodice': {
      title: 'Semi-conducteurs et transistors',
      summary: 'Dopage du silicium, jonction PN et principe du transistor.',
      theory: [
        `<p>Le silicium pur possède quatre électrons de valence et se lie par covalence. À température ambiante, une petite fraction des électrons passe dans la bande de conduction et laisse derrière elle des <em>trous</em>, c’est-à-dire des places dans lesquelles un électron peut se déplacer. On parle de conduction intrinsèque.</p>`,
        `<p><strong>Le dopage</strong> augmente la conductivité. Un élément à cinq électrons de valence (phosphore, arsenic, antimoine) apporte un électron libre supplémentaire et il se forme un semi-conducteur de type $n$, dont les porteurs sont des électrons. Un élément à trois électrons de valence (bore, aluminium, gallium) crée des trous et il se forme un semi-conducteur de type $p$.</p>`,
        `<p>Une <strong>jonction PN</strong> se forme en accolant les deux types. Dans le sens direct le courant passe, dans le sens inverse pratiquement pas. Un transistor se compose de deux telles jonctions, et un petit courant dans un circuit commande un grand courant dans l’autre.</p>`,
        `<p>Le transistor sert d’amplificateur et d’interrupteur. Tous les circuits numériques des ordinateurs et des téléphones mobiles sont construits à partir de milliards de transistors.</p>`,
        { fig: 'v9v12-pn', caption: 'À la jonction PN, les trous de la région p rencontrent les électrons de la région n.' }
      ],
      examples: [
        { task: 'On ajoute du phosphore au silicium. Quel type de semi-conducteur se forme ?',
          steps: ['Le phosphore a 5 électrons de valence, dont un est en surplus.', '<strong>Résultat : un semi-conducteur de type $n$</strong>'] },
        { task: 'Pourquoi une diode conduit-elle à peine le courant dans le sens inverse ?',
          steps: ['Une zone dépourvue de porteurs libres se forme à la jonction PN.', 'Lorsque la tension inverse augmente, cette zone ne fait que s’élargir.', '<strong>Résultat : pratiquement aucun courant ne passe</strong>'] }
      ]
    },
    'v9-supravodivost': {
      title: 'Supraconductivité',
      summary: 'Résistance nulle sous la température critique, effet Meissner et supraconducteurs à haute température.',
      theory: [
        `<p>La supraconductivité est un état dans lequel un matériau perd totalement sa résistance électrique en dessous de la <em>température critique</em> $T_c$. Le courant peut y circuler sans pertes.</p>`,
        `<p><strong>Effet Meissner</strong> : un supraconducteur expulse le champ magnétique de son intérieur. C’est pourquoi un supraconducteur lévite au-dessus d’un aimant.</p>`,
        `<p>Les supraconducteurs classiques, comme le plomb ou le niobium, ont une $T_c$ de quelques kelvins et se refroidissent à l’hélium liquide ($4{,}2\\,\\text{K}$). Les supraconducteurs à haute température (cuprates, par ex. YBCO avec $T_c\\approx 92\\,\\text{K}$) peuvent être refroidis à l’azote liquide, moins coûteux ($77\\,\\text{K}$).</p>`,
        `<p>Selon la théorie BCS, les électrons d’un cristal s’apparient en <em>paires de Cooper</em> grâce à l’échange de vibrations du réseau. Ces paires se déplacent sans diffusion, c’est pourquoi la résistance est nulle.</p>`,
        { fig: 'v9v12-supra', caption: 'En dessous de la température critique Tc, la résistance d’un supraconducteur tombe à zéro, alors qu’un métal normal présente une résistance qui croît avec la température.' }
      ],
      examples: [
        { task: 'La température critique du niobium est $T_c=9{,}2\\,\\text{K}$. Quelle est-elle en degrés Celsius ?',
          steps: ['$t = T - 273{,}15$.', '$t = 9{,}2 - 273{,}15 = -263{,}95\\,{}^{\\circ}\\text{C}$.', '<strong>Résultat : environ -263,95 °C</strong>'] },
        { task: 'Pourquoi un supraconducteur lévite-t-il au-dessus d’un aimant ?',
          steps: ['Le champ magnétique ne peut pas pénétrer dans le supraconducteur (effet Meissner).', 'Les courants induits en surface créent un champ qui repousse l’aimant.', '<strong>Résultat : la force répulsive soulève le supraconducteur</strong>'] }
      ]
    },
    'v9-magneticke': {
      title: 'Matériaux magnétiques',
      summary: 'Diamagnétisme, paramagnétisme et ferromagnétisme, domaines et température de Curie.',
      theory: [
        `<p>Selon leur comportement dans un champ magnétique, on divise les substances en <strong>diamagnétiques</strong> (faiblement repoussées, par ex. cuivre, zinc), <strong>paramagnétiques</strong> (faiblement attirées, par ex. aluminium, platine) et <strong>ferromagnétiques</strong> (fortement attirées, par ex. fer, nickel, cobalt).</p>`,
        `<p>Dans les ferromagnétiques, les moments magnétiques des atomes s’alignent dans des régions orientées en commun, appelées <em>domaines</em>. Sans champ, les domaines sont orientés au hasard et le moment résultant est nul. Un champ extérieur les aligne et le matériau s’aimante.</p>`,
        `<p>Au-dessus de la <em>température de Curie</em> $T_C$, l’agitation thermique des atomes détruit les domaines et le ferromagnétisme disparaît. Le fer a $T_C\\approx 770\\,{}^{\\circ}\\text{C}$.</p>`,
        `<p>Les matériaux magnétiques doux, par exemple les tôles de transformateurs, s’aimantent et se désaimantent facilement. Les matériaux durs, par exemple les aimants permanents, conservent leur aimantation.</p>`,
        { fig: 'v9v12-domeny', caption: 'Dans un ferromagnétique, les domaines sont orientés au hasard sans champ ; dans un champ extérieur ils s’alignent et le matériau s’aimante.' }
      ],
      examples: [
        { task: 'Pourquoi un trombone colle-t-il à un aimant, alors qu’un fil de cuivre ne colle pas ?',
          steps: ['Le trombone est en acier, qui contient du fer ; ses domaines s’alignent dans le champ de l’aimant.', 'Le cuivre est diamagnétique et sa réponse est faible et répulsive.', '<strong>Résultat : le trombone est ferromagnétique</strong>'] },
        { task: 'Le fer a une température de Curie de 770 °C. Que se passe-t-il lorsqu’on le chauffe à 800 °C ?',
          steps: ['800 °C est au-dessus de la température de Curie.', 'Les domaines se désagrègent et le fer perd son aimantation permanente.', '<strong>Résultat : il cesse d’être ferromagnétique</strong>'] }
      ]
    },
    'v9-nanomaterialy': {
      title: 'Nanomatériaux et matériaux quantiques',
      summary: 'Rapport surface/volume dans les nanomatériaux et exemples de matériaux quantiques.',
      theory: [
        `<p>Les nanomatériaux ont au moins une dimension comprise approximativement entre 1 et 100 nm. Lorsque la taille diminue, le rapport surface/volume augmente et une grande partie des atomes se trouve à la surface. Des propriétés comme la couleur, le point de fusion ou la réactivité peuvent donc différer nettement de celles d’un gros morceau de la même substance.</p>`,
        `<p>Pour un cube d’arête $a$, on a $S = 6a^2$ et $V = a^3$, donc $\\dfrac{S}{V}=\\dfrac{6}{a}$. Le rapport diminue lorsque l’arête augmente, ce qui explique que l’arête se trouve au dénominateur. Si l’arête est réduite dix fois, le rapport est multiplié par dix.</p>`,
        `<p><strong>Les matériaux quantiques</strong> manifestent les effets de la mécanique quantique à l’échelle macroscopique. Exemples : le graphène (une couche unique d’atomes de carbone à très grande mobilité électronique), les points quantiques (leur taille détermine la couleur de la lumière émise) et les isolants topologiques.</p>`,
        { fig: 'v9v12-nano', caption: 'Partager un cube en cubes plus petits conserve le volume mais agrandit la surface. Le rapport S/V croît lorsque la taille diminue.' }
      ],
      examples: [
        { task: 'Un cube a une arête $a=2\\,\\text{nm}$. Quel est le rapport $S/V$ ?',
          steps: ['$\\dfrac{S}{V}=\\dfrac{6a^2}{a^3}=\\dfrac{6}{a}$.', '$\\dfrac{6}{2}=3\\,\\text{nm}^{-1}$.', '<strong>Résultat : 3 nm⁻¹</strong>'] },
        { task: 'Comment change le rapport $S/V$ si l’arête est doublée ?',
          steps: ['$S/V = 6/a$ est inversement proportionnel à l’arête.', 'Doubler l’arête divise le rapport par deux.', '<strong>Résultat : il est divisé par deux</strong>'] }
      ]
    },
    'v10-hviezdy': {
      title: 'Formation, évolution et structure des étoiles',
      summary: 'Comment naît une étoile, pourquoi elle reste en équilibre et comment sa luminosité dépend du rayon et de la température.',
      theory: [
        `<p>Une étoile naît d’une région condensée de gaz et de poussière interstellaires, appelée nébuleuse. La gravitation comprime la matière et le gaz s’échauffe. Lorsque la température du cœur atteint quelques dizaines de millions de kelvins, la fusion thermonucléaire commence : l’hydrogène se transforme en hélium.</p>`,
        `<p><strong>Pourquoi une étoile ne s’effondre-t-elle pas ?</strong> La gravitation tend à comprimer l’étoile vers l’intérieur, tandis que la pression du gaz chaud et du rayonnement agit dans le sens opposé. Lorsque ces deux effets se compensent, on parle d’<em>équilibre hydrostatique</em>. L’étoile est stable tant que cet équilibre subsiste.</p>`,
        `<p><strong>La luminosité</strong> $L$ est la puissance totale rayonnée par l’étoile. Selon la loi de Stefan–Boltzmann, $L=4\\pi R^2\\sigma T^4$, où $R$ est le rayon et $T$ la température de surface. La luminosité croît avec le carré du rayon mais avec la quatrième puissance de la température : une petite variation de température modifie donc fortement l’éclat.</p>`,
        `<p>On range les étoiles dans le <strong>diagramme de Hertzsprung–Russell</strong> : la température (ou la couleur) est portée en abscisse et la luminosité en ordonnée. La plupart des étoiles, Soleil compris, se trouvent dans la séquence principale, où l’étoile brûle l’hydrogène dans son cœur.</p>`,
        { fig: 'v9v12-hr', caption: 'Diagramme de Hertzsprung–Russell : les étoiles de la séquence principale brûlent l’hydrogène, les géantes sont plus brillantes et les naines blanches plus faibles à haute température.' }
      ],
      examples: [
        { task: 'Une étoile a un rayon trois fois plus grand que celui du Soleil et une température de surface deux fois plus élevée. Combien de fois est-elle plus lumineuse ?',
          steps: [
            'Rapport des luminosités : $\\frac{L}{L_\\odot}=\\left(\\frac{R}{R_\\odot}\\right)^2\\left(\\frac{T}{T_\\odot}\\right)^4$.',
            '$=3^2\\cdot 2^4=9\\cdot 16=144$.',
            '<strong>Résultat : 144 fois</strong>'
          ] }
      ]
    },
    'v10-galaxie': {
      title: 'Galaxies et leur évolution',
      summary: 'Les principaux types de galaxies et leurs différences d’étoiles, de gaz et de forme.',
      theory: [
        `<p>Une galaxie est un système lié par la gravitation, formé d’étoiles, de gaz, de poussière et de matière noire. Les galaxies se distinguent surtout par leur forme : <strong>elliptiques</strong> (lisses, constituées d’étoiles âgées), <strong>spirales</strong> (disque plat avec des bras) et <strong>irrégulières</strong>.</p>`,
        `<p>La forme d’une galaxie est étroitement liée à la quantité de gaz qu’elle conserve. Le gaz est la matière première des nouvelles étoiles : dans les bras des spirales naissent sans cesse de jeunes étoiles bleues, alors que dans les galaxies elliptiques le gaz est presque épuisé et la formation d’étoiles s’est éteinte.</p>`,
        `<p>Les galaxies croissent par agrégation progressive de matière et souvent par <strong>collisions et fusions</strong> avec d’autres galaxies. L’interaction gravitationnelle peut alors remodeler les deux galaxies et déclencher une nouvelle vague de formation d’étoiles.</p>`
      ],
      examples: [
        { task: 'Une galaxie a une forme elliptique lisse et presque pas de gaz. Quelles étoiles y dominent ?',
          steps: ['La formation d’étoiles dans une galaxie dépend de l’apport de gaz.', 'Sans gaz il ne naît plus d’étoiles nouvelles : il reste les étoiles âgées, rougeâtres.', '<strong>Résultat : des étoiles âgées</strong>'] }
      ]
    },
    'v10-cierne-diery': {
      title: 'Trous noirs et étoiles à neutrons',
      summary: 'Ce qui détermine le rayon d’un trou noir, et pourquoi une étoile à neutrons ou un trou noir se forme après l’épuisement du combustible.',
      theory: [
        `<p>Lorsqu’une étoile suffisamment massive épuise son combustible nucléaire, son cœur s’effondre. Si la masse restante ne dépasse pas environ 1,4 masse solaire, il se forme une <strong>étoile à neutrons</strong> : une sphère dense de rayon d’environ 10 km, soutenue par la pression des neutrons.</p>`,
        `<p>Un <strong>trou noir</strong> se forme si la masse est plus grande. Près de lui la gravitation est si forte que même la lumière ne peut s’échapper au-delà de la frontière appelée <em>horizon des événements</em>. Le rayon de cette frontière est le rayon de Schwarzschild.</p>`,
        `<p>Le rayon de Schwarzschild vaut $r_s=\\frac{2GM}{c^2}$, où $G$ est la constante gravitationnelle, $M$ la masse et $c$ la vitesse de la lumière. Pour la masse du Soleil, il vaut environ $2{,}95\\,\\text{km}$. Le rayon est proportionnel à la masse : un trou noir deux fois plus lourd a un horizon deux fois plus grand.</p>`,
        { fig: 'v9v12-cierna-diera', caption: 'Le rayon de Schwarzschild est proportionnel à la masse. Un trou noir deux fois plus lourd a un horizon deux fois plus grand.' }
      ],
      examples: [
        { task: 'Quel est le rayon de Schwarzschild d’un trou noir de masse $5\\,M_\\odot$ ?',
          steps: ['$r_s\\approx 2{,}95\\,\\text{km}\\cdot 5$.', '$r_s\\approx 14{,}75\\,\\text{km}$.', '<strong>Résultat : environ 14,75 km</strong>'] }
      ]
    },
    'v10-exoplanety': {
      title: 'Exoplanètes et systèmes planétaires',
      summary: 'Comment les astronomes trouvent des planètes autour d’autres étoiles et ce qu’ils en déduisent.',
      theory: [
        `<p>Une <strong>exoplanète</strong> est une planète qui orbite autour d’une étoile autre que le Soleil. On ne la voit directement que très rarement ; on la recherche donc indirectement, le plus souvent par la méthode des transits ou par la mesure du mouvement de l’étoile.</p>`,
        `<p><strong>Méthode des transits :</strong> lorsqu’une planète passe devant son étoile, l’éclat de celle-ci baisse brièvement. La baisse d’éclat est proportionnelle à la surface que la planète masque : $\\Delta\\text{éclat}=\\left(\\frac{r_p}{R}\\right)^2$. Attention, c’est le carré du rapport des rayons.</p>`,
        `<p><strong>Méthode Doppler :</strong> la planète attire gravitationnellement l’étoile, qui se déplace légèrement d’avant en arrière vu depuis l’observateur. Le décalage des raies spectrales révèle ce mouvement, même lorsque la planète n’est pas visible.</p>`,
        { fig: 'v9v12-tranzit', caption: 'Lors d’un transit planétaire, l’éclat de l’étoile baisse brièvement du rapport des surfaces, soit de (r_p/R)².' }
      ],
      examples: [
        { task: 'Une planète a un rayon égal au dixième de celui de son étoile. De combien de pourcents l’éclat de l’étoile baisse-t-il pendant un transit ?',
          steps: ['$\\left(\\frac{1}{10}\\right)^2=\\frac{1}{100}$.', 'L’éclat baisse de $1\\,\\%$.', '<strong>Résultat : 1 %</strong>'] }
      ]
    },
    'v10-rozpinanie': {
      title: 'Expansion de l’univers',
      summary: 'Loi de Hubble : plus une galaxie est éloignée, plus vite elle s’éloigne de nous.',
      theory: [
        `<p>Edwin Hubble a constaté que les spectres des galaxies lointaines sont décalés vers le rouge. Ce <em>décalage vers le rouge</em> signifie que les galaxies s’éloignent de nous. Plus la galaxie est lointaine, plus son décalage est grand.</p>`,
        `<p><strong>Loi de Hubble :</strong> $v=H_0\\,d$, où $v$ est la vitesse d’éloignement, $d$ la distance et $H_0$ la constante de Hubble. Sa valeur est d’environ $70\\,\\text{km/s/Mpc}$, où $1\\,\\text{Mpc}\\approx 3{,}26$ million d’années-lumière.</p>`,
        `<p>Il est important de comprendre que <strong>ce ne sont pas les galaxies qui se déplacent dans l’espace</strong> : c’est l’espace lui-même qui se dilate entre elles. Les galaxies plus éloignées s’éloignent donc plus vite, même si elles n’ont pas de vitesse propre.</p>`,
        { fig: 'v9v12-hubble', caption: 'Loi de Hubble : la vitesse d’éloignement des galaxies est proportionnelle à leur distance.' }
      ],
      examples: [
        { task: 'Une galaxie est située à $100\\,\\text{Mpc}$. Quelle est sa vitesse d’éloignement ?',
          steps: ['$v=H_0\\,d=70\\cdot 100$.', '<strong>Résultat : 7000 km/s</strong>'] }
      ]
    },
    'v10-velky-tresk': {
      title: 'Big Bang et rayonnement de fond diffus cosmologique',
      summary: 'Comment l’univers est né d’une phase chaude, et pourquoi on observe aujourd’hui un faible rayonnement venant de toutes les directions.',
      theory: [
        `<p>Selon le modèle du <strong>Big Bang</strong>, l’univers fut autrefois très dense et très chaud. Depuis, il ne cesse de s’étendre et de se refroidir. Il ne s’agissait pas d’une explosion dans un espace vide, mais de l’expansion de l’espace lui-même.</p>`,
        `<p>Peu après le début, l’univers était rempli de rayonnement ; il devint transparent lorsque les atomes se formèrent. Ce rayonnement n’a depuis fait que s’étirer : aujourd’hui nous le voyons comme le <strong>rayonnement de fond diffus cosmologique</strong>, à une température d’environ $2{,}725\\,\\text{K}$.</p>`,
        `<p>L’expansion allonge les longueurs d’onde du rayonnement dans la même proportion que l’échelle de l’univers. La température du rayonnement dans le passé était donc proportionnelle à $(1+z)$, où $z$ est le décalage vers le rouge. Pour $z=1$, la température était le double de la valeur actuelle.</p>`,
        { fig: 'v9v12-natiahnutie', caption: 'L’expansion de l’univers étire la longueur d’onde du rayonnement ; le fond micro-onde actuel a donc une température plus basse.' }
      ],
      examples: [
        { task: 'Quelle était la température du rayonnement pour un décalage vers le rouge $z=3$ ?',
          steps: ['$T(z)=T_0(1+z)=2{,}725\\cdot(1+3)$.', '$=10{,}9\\,\\text{K}$.', '<strong>Résultat : environ 10,9 K</strong>'] }
      ]
    },
    'v10-temna-hmota': {
      title: 'Matière noire et énergie noire',
      summary: 'Les indices de matière et d’énergie invisibles et leur part dans la densité totale de l’univers.',
      theory: [
        `<p><strong>La matière noire</strong> est liée à la gravitation mais n’émet ni n’absorbe la lumière. Son indice est la vitesse des étoiles au bord des galaxies, qui, sans elle, serait trop grande pour que la galaxie reste unie.</p>`,
        `<p><strong>L’énergie noire</strong> est la composante qui accélère l’expansion de l’univers. Les observations de supernovae lointaines ont montré que cette expansion s’accélère actuellement.</p>`,
        `<p>Les parts de l’univers actuel sont approximativement : matière ordinaire $\\approx 5\\,\\%$, matière noire $\\approx 27\\,\\%$ et énergie noire $\\approx 68\\,\\%$. Si l’univers est plat, la densité totale vaut $\\Omega=1$ et l’on a $\\Omega_\\Lambda=1-\\Omega_m$.</p>`,
        { fig: 'v9v12-zlozenie', caption: 'Parts de l’univers actuel : matière ordinaire environ 5 %, matière noire 27 %, énergie noire 68 %.' }
      ],
      examples: [
        { task: 'La densité de matière est $\\Omega_m=0{,}3$. Quelle part représente l’énergie noire dans un univers plat ?',
          steps: ['$\\Omega_\\Lambda=1-\\Omega_m=1-0{,}3$.', '<strong>Résultat : 0,7</strong>'] }
      ]
    },
    'v10-kozmologicke-modely': {
      title: 'Modèles cosmologiques de l’univers',
      summary: 'Comment la densité totale détermine si l’univers est ouvert, plat ou fermé.',
      theory: [
        `<p>Un modèle cosmologique décrit la géométrie et l’évolution de l’univers. La grandeur clé est le rapport de la densité moyenne totale $\\rho$ à la <em>densité critique</em> $\\rho_c$, noté $\\Omega=\\rho/\\rho_c$.</p>`,
        `<ol>
        <li>$\\Omega &lt; 1$ : un univers <strong>ouvert</strong>, qui se dilate éternellement.</li>
        <li>$\\Omega = 1$ : un univers <strong>plat</strong>, dont l’espace a une géométrie euclidienne.</li>
        <li>$\\Omega &gt; 1$ : un univers <strong>fermé</strong>, qui a une courbure positive.</li>
      </ol>`,
        `<p>Les observations du rayonnement fossile montrent que l’univers actuel est très proche d’un univers plat. Le modèle moderne, qui inclut l’énergie noire, suppose donc une densité totale voisine de un.</p>`
      ],
      examples: [
        { task: 'L’univers a $\\Omega=0{,}4$. Quel est son modèle ?',
          steps: ['Comparons : $0{,}4&lt;1$.', '<strong>Résultat : un univers ouvert</strong>'] }
      ]
    },
    'v11-hydrostatika': {
      title: 'Hydrostatique',
      summary: 'La pression dans un liquide au repos ne dépend que de la profondeur et de la masse volumique, non de la forme du récipient.',
      theory: [
        `<p><strong>L’hydrostatique</strong> étudie les liquides au repos. La pression dans un liquide à la profondeur $h$ vaut $p=\\rho g h$, où $\\rho$ est la masse volumique du liquide et $g$ l’accélération de la pesanteur. Il s’agit de la <em>surpression</em>, c’est-à-dire de la pression au-dessus de la pression atmosphérique.</p>`,
        `<p>La pression ne dépend pas de la forme du récipient. Dans un récipient large comme dans un récipient étroit, de même profondeur, la pression au fond est la même. Ce paradoxe apparent s’explique par le fait que le poids du liquide est supporté par les parois du récipient, et non par le fond.</p>`,
        `<p>La pression totale (absolue) vaut $p=p_0+\\rho g h$, où $p_0$ est la pression atmosphérique. La différence de pression dans un liquide est proportionnelle à la différence de hauteur ; la pression augmente donc vers le bas.</p>`,
        `<p><strong>Loi de Pascal :</strong> une pression exercée sur un liquide enfermé se transmet également dans toutes les directions. Elle est utilisée dans les élévateurs hydrauliques, où une petite force sur un petit piston soulève une lourde charge sur un grand piston.</p>`,
        { fig: 'v9v12-nadoba', caption: 'La pression dans un liquide dépend de la profondeur h, non de la forme du récipient. La pression au fond des deux récipients est la même.' }
      ],
      examples: [
        { task: 'Quelle est la surpression de l’eau à une profondeur de $4\\,\\text{m}$ ? La masse volumique de l’eau vaut $1000\\,\\text{kg/m}^3$ et $g=9{,}81\\,\\text{m/s}^2$.',
          steps: ['$p=\\rho g h=1000\\cdot 9{,}81\\cdot 4=39\\,240\\,\\text{Pa}$.', '<strong>Résultat : 39,24 kPa</strong>'] }
      ]
    },
    'v11-tlak-vztlak': {
      title: 'Pression et poussée d’Archimède',
      summary: 'Principe d’Archimède : un corps immergé subit une poussée égale au poids du liquide déplacé.',
      theory: [
        `<p>Un corps immergé dans un liquide est allégé par une force dirigée vers le haut. Cette <strong>poussée d’Archimède</strong> est donnée par le principe d’Archimède : $F_{vz}=\\rho_k\\,g\\,V$, où $\\rho_k$ est la masse volumique du liquide et $V$ le volume de la partie immergée du corps.</p>`,
        `<p>La poussée ne dépend ni de la profondeur ni de la masse volumique du corps, mais seulement du volume du liquide déplacé. On l’appelle le poids du liquide déplacé.</p>`,
        `<p>La flottaison se décide par la comparaison des masses volumiques. Un corps de masse volumique inférieure à celle du liquide flotte et ne s’enfonce que juste assez pour que le liquide déplacé ait un poids égal à celui du corps entier. Un corps de masse volumique supérieure coule.</p>`,
        { fig: 'obr-vztlak', caption: 'La poussée F_vz est dirigée vers le haut et le poids F_g vers le bas. Un corps immergé est allégé du poids du liquide déplacé.' }
      ],
      examples: [
        { task: 'Un corps de volume $3\\,\\text{dm}^3$ est entièrement immergé dans l’eau. Quelle est la poussée d’Archimède ?',
          steps: ['$V=3\\,\\text{dm}^3=0{,}003\\,\\text{m}^3$.', '$F_{vz}=1000\\cdot 9{,}81\\cdot 0{,}003=29{,}43\\,\\text{N}$.', '<strong>Résultat : 29,43 N</strong>'] }
      ]
    },
    'v11-kontinuita': {
      title: 'Équation de continuité',
      summary: 'Si un liquide ne s’échappe ni ne s’accumule le long de l’écoulement, le produit de la section par la vitesse est constant.',
      theory: [
        `<p>En régime permanent d’un liquide incompressible, la matière ne s’accumule ni ne disparaît. Par unité de temps, le même volume doit donc traverser chaque section : $S_1 v_1 = S_2 v_2 = \\text{const.}$</p>`,
        `<p>La grandeur $Q=S\\,v$ s’appelle le <strong>débit volumique</strong>. Là où la conduite est plus étroite, l’eau coule plus vite. C’est pourquoi une rivière accélère dans un passage étroit et ralentit dans une plaine large.</p>`,
        `<p>L’équation de continuité est la loi de conservation de la masse pour un écoulement de liquide. Elle est exacte pour un liquide incompressible et approximative pour les gaz à faibles vitesses.</p>`,
        { fig: 'v9v12-kontinuita', caption: 'Pour un liquide incompressible, S₁v₁ = S₂v₂. Là où la section est plus petite, le liquide coule plus vite.' }
      ],
      examples: [
        { task: 'Une conduite se rétrécit d’une section de $6\\,\\text{cm}^2$ à $2\\,\\text{cm}^2$. L’eau de la partie large s’écoule à $1{,}5\\,\\text{m/s}$. Quelle est la vitesse dans la partie étroite ?',
          steps: ['$S_1 v_1=S_2 v_2$, donc $v_2=\\frac{6\\cdot 1{,}5}{2}$.', '<strong>Résultat : 4,5 m/s</strong>'] }
      ]
    },
    'v11-bernoulli': {
      title: 'Équation de Bernoulli',
      summary: 'L’énergie d’un liquide en écoulement se conserve : là où la vitesse est plus grande, la pression est plus faible.',
      theory: [
        `<p><strong>L’équation de Bernoulli</strong> exprime la conservation de l’énergie pour un liquide idéal, incompressible et sans frottement en écoulement : $p+\\frac{1}{2}\\rho v^2+\\rho g h=\\text{const.}$ Les termes de gauche sont la pression, l’énergie cinétique et l’énergie potentielle par unité de volume.</p>`,
        `<p>Pour une conduite horizontale ($h$ est partout le même), on a $p_1+\\frac{1}{2}\\rho v_1^2=p_2+\\frac{1}{2}\\rho v_2^2$. Si la vitesse augmente en un point, la pression y diminue.</p>`,
        `<p>Ce phénomène s’appelle l’<strong>effet Venturi</strong> ; il est utilisé dans les carburateurs, les débitmètres de Venturi et les pompes à vide. Il apparaît surtout dans les parties rétrécies d’une conduite.</p>`,
        { fig: 'v9v12-venturi', caption: 'Au point rétréci, la vitesse augmente et la pression baisse. Les niveaux dans les tubes du manomètre le montrent.' }
      ],
      examples: [
        { task: 'L’eau s’écoule dans une conduite horizontale ; au point étroit la vitesse est de $6\\,\\text{m/s}$, au point large de $2\\,\\text{m/s}$. Quelle est la différence de pression $p_1-p_2$ en kPa ?',
          steps: ['$p_1-p_2=\\frac{1}{2}\\rho\\left(v_2^2-v_1^2\\right)=\\frac{1}{2}\\cdot 1000\\cdot(36-4)$.', '$=16\\,000\\,\\text{Pa}$.', '<strong>Résultat : 16 kPa</strong>'] }
      ]
    },
    'v11-viskozita': {
      title: 'Viscosité et écoulement laminaire',
      summary: 'Frottement interne des liquides, loi de Stokes et résistance au mouvement lent d’une petite sphère.',
      theory: [
        `<p><strong>La viscosité</strong> (viscosité dynamique $\\eta$) est une mesure du frottement interne d’un liquide. Le miel a une viscosité plus grande que l’eau, car ses couches glissent plus difficilement les unes sur les autres. L’unité est $\\text{Pa}\\cdot\\text{s}$.</p>`,
        `<p><strong>L’écoulement laminaire</strong> est régulier : les couches de liquide glissent les unes sur les autres sans se mélanger. Lors d’un mouvement lent d’un corps dans un liquide apparaît une résistance proportionnelle à la vitesse : la <em>loi de Stokes</em> $F=6\\pi\\eta r v$ pour une sphère de rayon $r$.</p>`,
        `<p>Attention à la différence entre rayon et diamètre : la formule contient le rayon $r$. Si l’on introduit le diamètre, la force sera deux fois plus grande.</p>`,
        { fig: 'v9v12-vrstvy', caption: 'Dans un écoulement laminaire, les couches de liquide glissent les unes sur les autres et le frottement interne cause la résistance.' }
      ],
      examples: [
        { task: 'Une bille de rayon $1\\,\\text{cm}$ se déplace à la vitesse de $0{,}5\\,\\text{m/s}$ dans un liquide de $\\eta=2\\,\\text{Pa}\\cdot\\text{s}$. Quelle est la résistance ?',
          steps: ['$F=6\\pi\\eta r v=6\\pi\\cdot 2\\cdot 0{,}01\\cdot 0{,}5$.', '$F\\approx 0{,}188\\,\\text{N}$.', '<strong>Résultat : environ 188 mN</strong>'] }
      ]
    },
    'v11-turbulencia': {
      title: 'Turbulence',
      summary: 'Le nombre de Reynolds décide si l’écoulement est régulier ou tourbillonnant.',
      theory: [
        `<p>À des vitesses et des diamètres plus grands, l’écoulement laminaire se décompose en écoulement <strong>turbulent</strong> : apparaissent des tourbillons et un mélange, qui varient aléatoirement dans le temps et dans l’espace.</p>`,
        `<p>Le type d’écoulement est déterminé par le <strong>nombre de Reynolds</strong> $\\text{Re}=\\frac{\\rho v d}{\\eta}$, où $d$ est une dimension caractéristique (par exemple le diamètre d’une conduite). Pour une conduite, approximativement : $\\text{Re}&lt;2300$ laminaire, $\\text{Re}&gt;4000$ turbulent, l’écoulement de transition se situant entre les deux.</p>`,
        `<p>La turbulence augmente la résistance à l’écoulement et le mélange des substances. En pratique, on cherche donc à régulariser l’écoulement, par exemple autour des ailes d’avion, ou au contraire on provoque la turbulence pour mieux mélanger le carburant.</p>`,
        { fig: 'v9v12-profil', caption: 'En écoulement laminaire, la vitesse sur la section suit un profil parabolique ; en écoulement turbulent, le profil est plus plat.' }
      ],
      examples: [
        { task: `L’eau ($\\rho=1000\\,\\text{kg/m}^3$, $\\eta=10^{-3}\\,\\text{Pa}\\cdot\\text{s}$) s’écoule dans une conduite de diamètre $0{,}05\\,\\text{m}$ à la vitesse de $1\\,\\text{m/s}$. Quel est le nombre de Reynolds ?`,
          steps: ['$\\text{Re}=\\frac{1000\\cdot 1\\cdot 0{,}05}{10^{-3}}$.', '<strong>Résultat : Re = 50 000, l’écoulement est turbulent</strong>'] }
      ]
    },
    'v11-aerodynamika': {
      title: 'Écoulement des gaz et aérodynamique',
      summary: 'Traînée et portance aérodynamiques : ce dont elles dépendent et pourquoi elles croissent avec le carré de la vitesse.',
      theory: [
        `<p>Aux vitesses ordinaires, les gaz sont presque incompressibles et peuvent, à bien des égards, être décrits par les mêmes lois que les liquides. Les corps qui se déplacent dans l’air sont freinés par la <strong>traînée aérodynamique</strong>.</p>`,
        `<p>La traînée est donnée par $F=\\frac{1}{2}\\,c_w\\,\\rho\\,S\\,v^2$, où $c_w$ est le coefficient de traînée (la forme du corps), $\\rho$ la masse volumique de l’air, $S$ la surface frontale et $v$ la vitesse. La traînée croît avec le <strong>carré</strong> de la vitesse : une vitesse double signifie une traînée quadruplée.</p>`,
        `<p>L’aile d’un avion ou d’un véhicule crée une <strong>portance</strong>, car au-dessus d’elle l’écoulement est plus rapide et la pression y est plus faible (Bernoulli). La forme profilée est donc conçue pour que la traînée soit la plus petite possible et la portance la plus grande possible.</p>`,
        { fig: 'v9v12-krido', caption: 'Au-dessus de l’aile, l’écoulement est plus rapide et la pression plus faible ; sous l’aile, la pression est plus élevée. La différence de pression crée la portance.' }
      ],
      examples: [
        { task: `Une automobile a une surface frontale de $2\\,\\text{m}^2$, un coefficient de traînée $c_w=0{,}5$ et roule à $20\\,\\text{m/s}$. Quelle est la traînée de l’air ? La masse volumique de l’air est $1{,}2\\,\\text{kg/m}^3$.`,
          steps: ['$F=\\frac{1}{2}\\cdot 0{,}5\\cdot 1{,}2\\cdot 2\\cdot 20^2$.', '$=0{,}6\\cdot 400=240\\,\\text{N}$.', '<strong>Résultat : 240 N</strong>'] }
      ]
    },
    'v12-modelovanie': {
      title: 'Modélisation mathématique des phénomènes physiques',
      summary: 'Comment construire un modèle mathématique à partir d’un raisonnement physique et vérifier s’il correspond à l’observation.',
      theory: [
        `<p>Un <strong>modèle</strong> est une description mathématique simplifiée d’un phénomène. On détermine d’abord les grandeurs qui influencent le résultat, puis on écrit les relations qui les lient et, enfin, on vérifie si le calcul correspond à la mesure ou à une attente raisonnable.</p>`,
        `<p>Un exemple typique est la <strong>désintégration radioactive</strong>. Le nombre de noyaux non désintégrés diminue proportionnellement à leur nombre actuel, ce qui conduit à une loi exponentielle. Avec une demi-vie $T_{1/2}$, on a $N(t)=N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>Le modèle a des limites : il suppose que la désintégration est aléatoire et indépendante de l’environnement. Une mesure réelle peut donc présenter de petits écarts, qui se compensent statistiquement pour un grand nombre de noyaux.</p>`,
        { fig: 'v9v12-rozpad', caption: 'À chaque demi-vie, le nombre de noyaux non désintégrés est divisé par deux ; la loi exponentielle est N = N₀(1/2)^(t/T½).' }
      ],
      examples: [
        { task: 'Un échantillon contient au départ $800$ noyaux et la demi-vie est de $10$ ans. Combien de noyaux restent après $30$ ans ?',
          steps: ['Après $30$ ans, il s’est écoulé $3$ demi-vies.', '$N=800\\cdot\\left(\\frac{1}{2}\\right)^3=800\\cdot\\frac{1}{8}$.', '<strong>Résultat : 100 noyaux</strong>'] }
      ]
    },
    'v12-diferencialne-rovnice': {
      title: 'Équations différentielles',
      summary: 'Les lois du mouvement sont des équations différentielles ; on les résout par intégration et une condition initiale.',
      theory: [
        `<p>La deuxième loi de Newton $F=ma$ est une équation différentielle, car l’accélération est la dérivée de la vitesse : $a=\\frac{dv}{dt}$. Les grandeurs n’y figurent pas directement, mais par leur <em>variation</em> dans le temps.</p>`,
        `<p>La <strong>solution</strong> s’obtient par intégration. De $\\frac{dv}{dt}=a$ on tire $v(t)=at+C$. La constante $C$ est déterminée par la <em>condition initiale</em>, par exemple $v(0)=v_0$. Une équation différentielle se résout donc toujours avec une telle condition.</p>`,
        `<p>Les équations différentielles décrivent presque tous les phénomènes dynamiques : le mouvement des corps, les circuits électriques, la propagation de la chaleur ou des ondes. Leur solution n’est unique que si l’on connaît assez de conditions initiales.</p>`,
        { fig: 'v9v12-rovnice', caption: 'L’équation dv/dt = a a une infinité de solutions v = at + C ; la condition initiale en sélectionne une.' }
      ],
      examples: [
        { task: 'Résoudre $\\frac{dv}{dt}=2$ avec la condition $v(0)=5$. Quelle est la vitesse à l’instant $t=4$ ?',
          steps: ['$v(t)=2t+C$, et de $v(0)=5$ on tire $C=5$.', '$v(t)=2t+5$, donc $v(4)=8+5$.', '<strong>Résultat : 13</strong>'] }
      ]
    },
    'v12-vektory': {
      title: 'Analyse vectorielle et tenseurs',
      summary: 'Produits scalaire et vectoriel, qui décrivent le travail d’une force et le moment d’une force ; le tenseur comme généralisation.',
      theory: [
        `<p>Un <strong>vecteur</strong> a une grandeur et une direction ; on l’écrit par ses composantes $\\vec a=(a_1,a_2,a_3)$. La somme de vecteurs se fait composante par composante. La norme vaut $|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}$.</p>`,
        `<p>Le <strong>produit scalaire</strong> $\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3$ est un nombre. Il sert au travail d’une force : $W=\\vec F\\cdot\\vec s$. On a aussi $\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\varphi$, donc il est nul pour des vecteurs mutuellement perpendiculaires.</p>`,
        `<p>Le <strong>produit vectoriel</strong> $\\vec a\\times\\vec b$ est un vecteur perpendiculaire aux deux vecteurs d’origine, par exemple le moment d’une force $\\vec M=\\vec r\\times\\vec F$. Un <strong>tenseur</strong> est une généralisation : par exemple, le tenseur des contraintes dans un solide associe à chaque plan un vecteur force.</p>`,
        { fig: 'v9v12-moment', caption: 'Le moment de force M = r × F est un vecteur perpendiculaire à la fois au vecteur position r et à la force F.' }
      ],
      examples: [
        { task: 'Calculer $\\vec a\\cdot\\vec b$ pour $\\vec a=(1,2,3)$ et $\\vec b=(4,-5,6)$.',
          steps: ['$1\\cdot 4+2\\cdot(-5)+3\\cdot 6$.', '$=4-10+18=12$.', '<strong>Résultat : 12</strong>'] }
      ]
    },
    'v12-fourier': {
      title: 'Analyse de Fourier',
      summary: 'Un signal périodique se décompose en composantes sinusoïdales, et l’on détermine les fréquences qu’il contient.',
      theory: [
        `<p>Tout signal périodique de période $T$ peut s’écrire comme une somme de sinus et de cosinus de multiples de la fréquence fondamentale $\\omega=\\frac{2\\pi}{T}$. Cette somme est une <strong>série de Fourier</strong> ; ses termes s’appellent les composantes harmoniques.</p>`,
        `<p>Les coefficients du développement se déterminent par intégration : on multiplie le signal par la fonction appropriée et l’on intègre le résultat sur une période. Grâce à l’<em>orthogonalité</em> des sinus et des cosinus, les autres termes s’annulent.</p>`,
        `<p>Un signal carré d’amplitude $A$ ne possède que des harmoniques impaires, et l’amplitude de la $n$-ième vaut $\\frac{4A}{n\\pi}$. Le développement de Fourier montre quelles fréquences il faut transmettre pour que le signal ne soit pas déformé ; il est la base de l’analyse spectrale.</p>`,
        { fig: 'v9v12-fourier', caption: 'Un signal carré peut être composé de sinusoïdes. La première harmonique a une amplitude de 4A/π.' }
      ],
      examples: [
        { task: 'Quelle est l’amplitude de la première harmonique d’un signal carré d’amplitude $A=3$ ?',
          steps: ['Pour la première harmonique $n=1$ et la formule $\\frac{4A}{n\\pi}$.', '$\\frac{4\\cdot 3}{\\pi}\\approx 3{,}82$.', '<strong>Résultat : environ 3,82</strong>'] }
      ]
    },
    'v12-numericke-metody': {
      title: 'Résolution numérique de problèmes physiques',
      summary: 'Lorsqu’une équation ne se résout pas par une formule, on la résout pas à pas, par exemple par la méthode d’Euler.',
      theory: [
        `<p>De nombreuses équations différentielles n’ont pas de solution sous forme de formule. On les résout alors <strong>numériquement</strong> : le temps est découpé en pas de longueur $h$ et, à chaque pas, on estime la variation de la grandeur.</p>`,
        `<p><strong>La méthode d’Euler</strong> pour l’équation $\\frac{dy}{dt}=f(t,y)$ calcule $y_{n+1}=y_n+h\\,f(t_n,y_n)$. Elle est simple, mais l’erreur ne diminue que linéairement avec le pas ; on utilise donc en pratique des méthodes plus précises, par exemple Runge–Kutta.</p>`,
        `<p>Le choix du pas est un compromis : un petit pas donne un résultat plus précis mais demande davantage de calculs. Un pas trop grand peut provoquer une instabilité, où les écarts croissent et la solution devient absurde.</p>`,
        { fig: 'v9v12-euler', caption: 'La méthode d’Euler avec un pas h = 0,5 approche l’équation dy/dt = y par une ligne brisée située sous la courbe exacte.' }
      ],
      examples: [
        { task: 'Résoudre $\\frac{dy}{dt}=-y$ avec $y(0)=10$ par la méthode d’Euler, avec le pas $h=0{,}1$. Quelle est la valeur de $y_1$ ?',
          steps: ['$y_1=y_0+h\\cdot(-y_0)=10+0{,}1\\cdot(-10)$.', '$=10-1=9$.', '<strong>Résultat : 9</strong>'] }
      ]
    },
    'v12-pocitacove-simulacie': {
      title: 'Simulations informatiques',
      summary: 'Une simulation procède par pas ; la longueur du pas et le temps total déterminent le nombre de calculs.',
      theory: [
        `<p>Une <strong>simulation informatique</strong> applique de façon répétée la loi du mouvement à de petits pas de temps. Au départ, on connaît l’état du système (positions, vitesses) ; à chaque pas, un nouvel état est calculé.</p>`,
        `<p>Le nombre de pas pour un temps $t$ et un pas $h$ est $N=\\frac{t}{h}$. Si l’on divise le pas par deux, le calcul dure deux fois plus longtemps, mais la précision augmente. Cela ne se choisit pas librement à la main ; sur ordinateur, c’est un choix clé.</p>`,
        `<p>Les simulations servent partout où il n’existe pas de solution sous forme de formule : le mouvement des planètes dans un système à trois corps, l’écoulement de l’air autour d’une aile ou la propagation de la chaleur dans un matériau.</p>`
      ],
      examples: [
        { task: 'Une simulation de chute doit durer $10\\,\\text{s}$ et le pas est de $0{,}05\\,\\text{s}$. Combien de pas faut-il ?',
          steps: ['$N=\\frac{t}{h}=\\frac{10}{0{,}05}$.', '<strong>Résultat : 200 pas</strong>'] }
      ]
    },
    'v12-konecne-prvky': {
      title: 'Méthode des éléments finis',
      summary: 'Un corps complexe est découpé en éléments simples, dont les propriétés sont assemblées en un seul système d’équations.',
      theory: [
        `<p>La <strong>méthode des éléments finis (MEF)</strong> découpe une structure complexe en de nombreuses parties simples (éléments), par exemple des triangles. Pour chaque élément, on écrit une équation simple qui relie les forces et les déplacements de ses nœuds.</p>`,
        `<p>Les éléments sont ensuite réunis en un <strong>système global d’équations</strong>, résolu par ordinateur. Pour des ressorts ou des barres : en montage <em>série</em>, les souplesses s’additionnent, donc $\\frac{1}{k}=\\frac{1}{k_1}+\\frac{1}{k_2}$. En montage <em>parallèle</em>, les raideurs s’additionnent : $k=k_1+k_2$.</p>`,
        `<p>La MEF est utilisée en analyse de résistance, en écoulement des fluides et en conduction thermique. Le résultat est approché ; sa précision croît avec le nombre et la finesse des éléments.</p>`,
        { fig: 'v9v12-pruziny', caption: 'Les ressorts montés en série ont une raideur plus petite ; les ressorts montés en parallèle ont des raideurs qui s’additionnent.' }
      ],
      examples: [
        { task: 'Deux ressorts de raideurs $k_1=6\\,\\text{N/m}$ et $k_2=3\\,\\text{N/m}$ sont montés en série. Quelle est la raideur équivalente ?',
          steps: ['$\\frac{1}{k}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$.', '$k=2\\,\\text{N/m}$.', '<strong>Résultat : 2 N/m</strong>'] }
      ]
    },
    'v12-komplexne-systemy': {
      title: 'Modélisation des systèmes complexes',
      summary: 'De nombreuses particules simples avec des couplages mutuels conduisent à un comportement complexe ; le nombre de couplages croît vite.',
      theory: [
        `<p>Un <strong>système complexe</strong> se compose de nombreuses parties qui interagissent entre elles. Le comportement de l’ensemble ne découle pas toujours de la somme des propriétés des parties, mais de leurs couplages mutuels. On parle de comportement <em>émergent</em>.</p>`,
        `<p>Le nombre de couplages mutuels croît rapidement. Pour $N$ particules, où chacune agit une fois sur chaque autre, il apparaît $\\binom{N}{2}=\\frac{N(N-1)}{2}$ paires. Pour $N=100$, cela fait déjà $4950$ couplages.</p>`,
        `<p>Pour la modélisation, on utilise par exemple des <strong>modèles à agents</strong> (chaque particule suit des règles simples) ou des simulations <strong>Monte Carlo</strong>, qui échantillonnent au hasard les états possibles. Le résultat est toujours une estimation, qui doit être vérifiée.</p>`
      ],
      examples: [
        { task: 'Le système contient $5$ particules, et chacune agit une fois sur chaque autre. Combien de paires différentes apparaissent ?',
          steps: ['$\\binom{5}{2}=\\frac{5\\cdot 4}{2}$.', '<strong>Résultat : 10 paires</strong>'] }
      ]
    }
  }
});
