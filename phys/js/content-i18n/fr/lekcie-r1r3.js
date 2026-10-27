/* Français : lekcie 1.–3. ročníka (js/rocniky/r1.js, r2.js, r3.js). Štruktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('fr', {
  lessons: {
    'r1-pozorovanie': {
      title: 'Observation des objets et des phénomènes',
      summary: "En observant, tu découvres les propriétés des objets et tu distingues un objet d'une matière.",
      theory: [
        `<p>Observer, c'est regarder quelque chose avec intention. Pour observer, nous utilisons nos <strong>sens</strong> : la vue, l'ouïe, le toucher, l'odorat et le goût.
       Nous ne goûtons ni ne sentons jamais des substances inconnues sans la permission d'un adulte.</p>`,
        `<p><strong>Un objet</strong> est quelque chose que nous pouvons voir et nommer, par exemple une balle, une chaise ou un livre.
       <strong>Une matière</strong> est ce dont un objet est fait, par exemple le bois, le verre ou le plastique.</p>`,
        `<p>Quand nous décrivons un objet, nous parlons de ses <strong>propriétés</strong> : sa couleur, sa forme, sa taille, son poids, sa dureté ou le fait qu'il brille.
       Une bonne description est précise et permet de reconnaître l'objet.</p>`,
        `<ul>
         <li>Un phénomène est ce qui se passe autour de nous, par exemple la pluie, la fonte de la neige ou la chute des feuilles.</li>
         <li>En observant, nous nous demandons : que vois-je, qu'est-ce que j'entends et qu'est-ce qui change ?</li>
       </ul>`
      ],
      examples: [
        { task: "Décris les propriétés d'une balle.",
          steps: ['La balle est ronde et rebondissante.', 'Elle a une couleur vive et rebondit sur le sol.', '<strong>Résultat : un objet rond et rebondissant qui rebondit.</strong>'] },
        { task: 'Le bois est-il un objet ou une matière ?',
          steps: ["Le bois n'a pas une forme précise, c'est une matière.", 'Avec du bois, on peut fabriquer une chaise ou une table.', '<strong>Résultat : le bois est une matière.</strong>'] }
      ]
    },
    'r1-vlastnosti-materialov': {
      title: 'Propriétés des matériaux : dureté, élasticité, forme',
      summary: 'Tu compares les matériaux selon leur dureté, leur élasticité et leur capacité à garder leur forme.',
      theory: [
        `<p>Les matériaux diffèrent les uns des autres. Deux propriétés importantes sont la <strong>dureté</strong> et l'<strong>élasticité</strong>.</p>`,
        `<ul>
         <li>Un matériau <strong>dur</strong> se raye ou s'écrase difficilement, par exemple la pierre ou le métal.</li>
         <li>Un matériau <strong>mou</strong> se coupe ou se presse facilement, par exemple le savon ou le bois tendre.</li>
         <li>Un matériau <strong>élastique</strong> revient à sa forme initiale après avoir été pressé ou étiré, par exemple le caoutchouc ou un ressort.</li>
       </ul>`,
        `<p>La <strong>forme</strong> de certains matériaux peut être facilement modifiée. La pâte à modeler ou l'argile gardent leur nouvelle forme même après qu'on les a lâchées.
       Un tel matériau n'est pas élastique.</p>`,
        `<p><strong>Expérience :</strong> essaie de presser une gomme, un morceau de pâte à modeler et un cube de bois. Note celui qui revient à sa forme initiale.</p>`,
        { fig: 'r1r5-pruznost', caption: "Une gomme élastique revient à sa forme initiale après avoir été pressée, la pâte à modeler garde sa nouvelle forme." }
      ],
      examples: [
        { task: 'Quel matériau est le plus dur, la pierre ou le savon ?',
          steps: ['La pierre se coupe difficilement, le savon se coupe facilement.', '<strong>Résultat : la pierre est plus dure.</strong>'] },
        { task: 'Quel matériau est élastique : la pâte à modeler ou la gomme ?',
          steps: ['Après avoir été pressée, la gomme revient à sa forme initiale.', 'La pâte à modeler garde sa forme après avoir été pressée.', '<strong>Résultat : la gomme est élastique.</strong>'] }
      ]
    },
    'r1-voda-vzduch': {
      title: "Eau, air et leur importance",
      summary: "Tu décris les propriétés de l'eau et de l'air et tu expliques pourquoi ils sont importants pour la vie.",
      theory: [
        `<p><strong>L'eau</strong> est un liquide. Elle n'a pas de forme propre, elle prend la forme du récipient qui la contient. L'eau coule, c'est pourquoi on peut la verser facilement.
       Sans eau, aucun animal ni aucune plante ne pourrait survivre.</p>`,
        `<p><strong>L'air</strong> ne se voit pas, mais il est partout autour de nous. Nous le sentons sous forme de vent ou quand nous respirons.
       L'air est important, car nous respirons, et sans lui les plantes ne pourraient pas grandir.</p>`,
        `<ul>
         <li>L'eau est nécessaire pour boire, cuisiner, se laver et pour les plantes.</li>
         <li>Nous avons besoin de l'air pour respirer, et son mouvement crée le vent.</li>
         <li>L'air remplit un ballon quand nous le gonflons. Le ballon grossit, car l'air occupe de la place.</li>
       </ul>`,
        `<p><strong>Expérience :</strong> place un mouchoir en papier dans un verre, retourne le verre à l'envers et enfonce-le dans l'eau. Le mouchoir reste sec, car l'air qui se trouve dans le verre empêche l'eau d'y entrer.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: "Un verre retourné à l'envers et plongé dans l'eau reste sec, car l'air qu'il contient occupe de la place et empêche l'eau d'entrer." }
      ],
      examples: [
        { task: "Pourquoi une personne a-t-elle besoin d'eau ?",
          steps: ["L'eau est présente dans le corps et l'aide à fonctionner.", 'Sans eau, une personne ne survivrait pas longtemps.', "<strong>Résultat : l'eau est nécessaire à la vie.</strong>"] },
        { task: "Qu'y a-t-il dans un ballon gonflé ?",
          steps: ["Le ballon a été gonflé, mais nous n'y avons rien mis.", "L'air est partout autour de nous, donc aussi dans le ballon.", "<strong>Résultat : il y a de l'air dans le ballon.</strong>"] }
      ]
    },
    'r1-svetlo-tien-teplo': {
      title: 'Lumière, ombre et chaleur dans la vie quotidienne',
      summary: "Tu découvres d'où viennent la lumière et la chaleur, et tu expliques comment se forme une ombre.",
      theory: [
        `<p><strong>Le Soleil</strong> nous donne la lumière et la chaleur. La lumière nous aide à voir, la chaleur nous réchauffe.
       Une lampe et une bougie donnent aussi de la lumière, et certaines d'entre elles donnent également de la chaleur.</p>`,
        `<p>Quand la lumière rencontre un objet qui ne la laisse pas passer, une <strong>ombre</strong> se forme derrière l'objet.
       L'ombre est un endroit sombre où la lumière n'atteint pas.</p>`,
        `<ul>
         <li>Les objets en bois ou en pierre projettent une ombre.</li>
         <li>Le verre et l'eau laissent passer la lumière, c'est pourquoi l'ombre derrière eux n'est pas sombre.</li>
       </ul>`,
        `<p>Par une chaude journée d'été, nous cherchons l'ombre d'un arbre, car là le Soleil ne nous réchauffe pas autant. La chaleur nous atteint surtout par les rayons du Soleil, que l'ombre arrête.</p>`,
        { fig: 'obr-tien', caption: "Une ombre se forme là où la lumière ne peut pas atteindre, car un objet opaque la bloque." }
      ],
      examples: [
        { task: "Pourquoi y a-t-il une ombre sous un arbre par temps ensoleillé ?",
          steps: ['Le Soleil éclaire l\'arbre.', "L'arbre est opaque, la lumière ne peut pas le traverser.", "<strong>Résultat : une ombre se forme derrière l'arbre.</strong>"] },
        { task: 'Quel objet nous donne à la fois la lumière et la chaleur ?',
          steps: ['Un objet qui brûle ou qui brille donne de la lumière et de la chaleur.', 'Le Soleil brille et nous réchauffe.', '<strong>Résultat : le Soleil.</strong>'] }
      ]
    },
    'r1-zmeny-prirody': {
      title: 'Observer les changements dans la nature',
      summary: "Tu décris comment la nature change au cours de la journée et au cours de l'année.",
      theory: [
        `<p>La nature change sans cesse. Certains changements sont rapides, par exemple la pluie ou le vent. D'autres sont plus lents, par exemple la croissance d'un arbre ou l'alternance des saisons.</p>`,
        `<ul>
         <li><strong>Printemps</strong> : les fleurs poussent, les arbres font leurs feuilles, il fait de plus en plus chaud.</li>
         <li><strong>Été</strong> : c'est la saison la plus chaude, et les jours sont longs.</li>
         <li><strong>Automne</strong> : les feuilles jaunissent et tombent, il fait plus frais.</li>
         <li><strong>Hiver</strong> : c'est la saison la plus froide, il neige souvent et les plantes sont au repos.</li>
       </ul>`,
        `<p>Au cours de la journée, la lumière et la température changent : le matin il fait plus frais, à midi il fait le plus chaud, et le soir il fait sombre.
       Les jours et les nuits se succèdent parce que la Terre tourne.</p>`,
        `<p>Tu peux noter les changements dans un journal de la nature, par exemple chaque semaine tu notes combien de feuilles l'arbre porte.</p>`,
        { fig: 'r1r5-zem-den-noc', caption: "La Terre tourne autour de son axe. Le côté tourné vers le Soleil a le jour, le côté opposé a la nuit." }
      ],
      examples: [
        { task: "Comment est la saison de l'automne ?",
          steps: ['En automne, les feuilles jaunissent et tombent.', 'Il fait plus froid et les jours sont plus courts.', "<strong>Résultat : l'automne est la saison où les feuilles tombent.</strong>"] },
        { task: 'Pourquoi les jours et les nuits se succèdent-ils ?',
          steps: ['La Terre tourne autour de son axe.', "Quand notre côté est tourné vers le Soleil, c'est le jour.", "<strong>Résultat : la rotation de la Terre provoque l'alternance du jour et de la nuit.</strong>"] }
      ]
    },
    'r2-vlastnosti-latok': {
      title: 'Propriétés des substances et des objets',
      summary: "Tu reconnais les propriétés des substances, comme la transparence, la solidité et la capacité à conduire l'électricité.",
      theory: [
        `<p>Chaque substance a ses propres <strong>propriétés</strong>. C'est d'après elles que nous choisissons de quoi peut être fait un objet donné.
       Par exemple, on ne fabrique pas une fenêtre en bois, car le bois n'est pas transparent.</p>`,
        `<ul>
         <li>Une substance <strong>transparente</strong> laisse passer la lumière, par exemple le verre ou l'eau pure.</li>
         <li>Une substance <strong>opaque</strong> ne laisse pas passer la lumière, par exemple le bois ou la pierre.</li>
         <li>Une substance <strong>brillante</strong> réfléchit la lumière, par exemple le métal.</li>
         <li>Une substance <strong>conductrice</strong> conduit le courant électrique, par exemple le métal. Le plastique est un <strong>isolant</strong> : il ne conduit pas le courant électrique.</li>
       </ul>`,
        `<p>En décrivant une substance, nous pouvons nous demander : est-elle dure, molle, transparente, brillante, élastique ? Plus tu la décris précisément, plus tu la reconnaîtras facilement.</p>`,
        `<p><strong>Expérience :</strong> dans le noir, éclaire avec une lampe de poche du verre, du bois et un film plastique. Note quelle substance a laissé passer la lumière.</p>`,
        { fig: 'r1r5-priehladnost', caption: "Le verre laisse passer la lumière, le bois l'arrête et le métal la réfléchit." }
      ],
      examples: [
        { task: "Pourquoi fabrique-t-on les fenêtres en verre plutôt qu'en bois ?",
          steps: ['La fenêtre doit être transparente pour que la lumière la traverse.', "Le verre est transparent, le bois ne l'est pas.", '<strong>Résultat : le verre est une substance transparente, il convient donc aux fenêtres.</strong>'] },
        { task: 'Quelle substance conduit le courant électrique : le cuivre ou le plastique ?',
          steps: ['Le cuivre est un métal, et les métaux conduisent le courant.', 'Le plastique est un isolant et ne conduit pas le courant.', '<strong>Résultat : le cuivre.</strong>'] }
      ]
    },
    'r2-skupenstva': {
      title: 'Solides, liquides et gaz',
      summary: "Tu distingues les solides, les liquides et les gaz d'après leur forme et leur volume.",
      theory: [
        `<p>Les substances se présentent sous trois <strong>états</strong> : solide, liquide et gazeux.</p>`,
        `<ul>
         <li><strong>Un solide</strong> a une forme et un volume constants. Un cube de glace ou une pierre garde sa forme.</li>
         <li><strong>Un liquide</strong> a un volume constant, mais sa forme change selon le récipient. L'eau dans un verre prend la forme du verre.</li>
         <li><strong>Un gaz</strong> n'a ni forme ni volume constants. Il remplit tout le récipient qui le contient.</li>
       </ul>`,
        `<p>L'air est un gaz. Quand nous gonflons un ballon, nous le remplissons de gaz, et celui-ci se répartit dans tout le ballon.</p>`,
        `<p>L'état d'une substance se laisse observer. Prends un cube de glace, puis l'eau d'un verre, et enfin l'air d'un ballon, et compare-les.</p>`,
        { fig: 'obr-skupenstva', caption: "Changements d'état : fusion, solidification, vaporisation et condensation." }
      ],
      examples: [
        { task: 'Dans quel état se trouve le lait dans un verre ?',
          steps: ['Le lait coule et prend la forme du verre.', "Il a un volume constant, mais pas de forme fixe.", '<strong>Résultat : liquide.</strong>'] },
        { task: 'Quel état a une forme constante ?',
          steps: ['Un solide garde sa forme.', "Un gaz et un liquide n'ont pas de forme constante.", '<strong>Résultat : solide.</strong>'] }
      ]
    },
    'r2-voda-vzduch': {
      title: 'Eau et air',
      summary: "En observant, tu découvres que l'air occupe de la place et que l'eau coule et change de forme.",
      theory: [
        `<p><strong>L'eau</strong> est un liquide. Elle coule, prend la forme du récipient et peut être versée d'un récipient dans un autre.
       L'eau peut être congelée en glace et chauffée en vapeur.</p>`,
        `<p><strong>L'air</strong> est un gaz. Même si on ne le voit pas, il occupe de la place. C'est pourquoi un ballon gonflé ne peut contenir qu'une certaine quantité d'air.</p>`,
        `<ul>
         <li>L'eau s'infiltre dans le sable et la terre. Certaines substances se dissolvent dans l'eau, d'autres non.</li>
         <li>L'air se déplace sous forme de vent. Le vent peut faire bouger les feuilles et faire tourner une girouette.</li>
       </ul>`,
        `<p><strong>Expérience :</strong> place un verre vide retourné à l'envers dans un verre d'eau et observe si l'eau entre à l'intérieur. L'air qui se trouve dans le verre empêche l'eau d'y pénétrer.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: "Un verre retourné à l'envers et plongé dans l'eau reste sec, car l'air qu'il contient occupe de la place et empêche l'eau d'entrer." }
      ],
      examples: [
        { task: "Pourquoi le verre retourné à l'envers ne se remplit-il pas d'eau ?",
          steps: ["Il y a de l'air dans le verre.", "L'air occupe de la place et empêche l'eau d'entrer.", "<strong>Résultat : l'air contenu dans le verre occupe de la place.</strong>"] },
        { task: "Quel est l'état de l'eau et comment se comporte-t-elle ?",
          steps: ["L'eau est un liquide.", 'Elle coule et prend la forme du récipient.', "<strong>Résultat : l'eau est un liquide qui coule.</strong>"] }
      ]
    },
    'r2-zmeny-skupenstva': {
      title: "Changements d'état dans la vie courante",
      summary: 'Tu nommes la fusion, la solidification, la vaporisation et la condensation à partir d\'exemples de ton entourage.',
      theory: [
        `<p>Une substance peut <strong>se transformer</strong> d'un état à un autre. On le voit surtout avec l'eau.</p>`,
        `<ul>
         <li><strong>La fusion</strong> : un solide devient un liquide, par exemple la glace se transforme en eau quand on la chauffe.</li>
         <li><strong>La solidification</strong> : un liquide devient un solide, par exemple l'eau se transforme en glace dans le congélateur.</li>
         <li><strong>La vaporisation</strong> : un liquide devient un gaz (vapeur), par exemple le linge mouillé sèche.</li>
         <li><strong>La condensation</strong> : un gaz (vapeur) devient un liquide, par exemple des gouttes apparaissent sur un verre froid.</li>
       </ul>`,
        `<p>Lors de la fusion et de la vaporisation, la substance absorbe de la chaleur. Lors de la solidification et de la condensation, elle en cède. C'est pourquoi les flaques refroidissent vite en hiver et l'eau sèche vite en été.</p>`,
        { fig: 'r1r5-zmeny-voda', caption: "La fusion et la vaporisation demandent d'absorber de la chaleur, la solidification et la condensation la cèdent." }
      ],
      examples: [
        { task: "Comment appelle-t-on le changement quand la neige devient de l'eau ?",
          steps: ['La neige est un solide.', 'En se réchauffant, elle devient un liquide.', '<strong>Résultat : la fusion.</strong>'] },
        { task: 'Que se passe-t-il avec le linge mouillé au soleil ?',
          steps: ["L'eau du linge se transforme en vapeur.", "La vapeur s'en va dans l'air.", '<strong>Résultat : la vaporisation, le linge sèche.</strong>'] }
      ]
    },
    'r2-magnety': {
      title: 'Les aimants et leurs effets',
      summary: 'Tu découvres quels objets un aimant attire et tu décris les pôles d\'un aimant.',
      theory: [
        `<p>Un <strong>aimant</strong> attire les objets en fer, en acier et en nickel. Le bois, le plastique, le papier et le verre ne sont pas attirés par un aimant.</p>`,
        `<p>Chaque aimant a deux <strong>pôles</strong> : le nord et le sud. L'effet le plus fort se trouve à ses extrémités.</p>`,
        `<ul>
         <li>Deux pôles identiques se <strong>repoussent</strong>.</li>
         <li>Deux pôles différents s'<strong>attirent</strong>.</li>
       </ul>`,
        `<p>Un aimant agit aussi à travers certaines substances, par exemple à travers du papier ou une fine couche de plastique. En revanche, à travers le fer, l'effet de l'aimant passe plus difficilement.</p>`,
        { fig: 'obr-magnet', caption: "Les lignes de champ d'un aimant droit sortent du pôle nord N et entrent dans le pôle sud S." }
      ],
      examples: [
        { task: "L'aimant attire-t-il une clé en acier ?",
          steps: ["L'acier contient du fer.", "L'aimant attire le fer.", "<strong>Résultat : oui, l'aimant attire la clé en acier.</strong>"] },
        { task: 'Que se passe-t-il si on approche l\'un de l\'autre les pôles nord de deux aimants ?',
          steps: ['Les deux pôles sont identiques.', 'Des pôles identiques se repoussent.', '<strong>Résultat : les aimants se repoussent.</strong>'] }
      ]
    },
    'r2-pokusy': {
      title: 'Observations simples et expériences',
      summary: 'Tu prépares une expérience simple et tu notes tes observations et ta conclusion.',
      theory: [
        `<p>Une expérience sert à vérifier notre idée. D'abord, nous nous posons une question, puis nous formulons une <strong>hypothèse</strong> (une supposition), nous faisons l'expérience et nous notons les résultats.</p>`,
        `<ol>
         <li><strong>Question</strong> : que voulons-nous savoir ? Par exemple : le sucre se dissout-il plus vite dans l'eau chaude ou dans l'eau froide ?</li>
         <li><strong>Hypothèse</strong> : que pensons-nous qu'il va se passer ? Par exemple : dans l'eau chaude, le sucre se dissout plus vite.</li>
         <li><strong>Expérience et observation</strong> : nous faisons l'expérience et notons précisément ce que nous voyons.</li>
         <li><strong>Conclusion</strong> : l'expérience confirme-t-elle notre hypothèse ? Si ce n'est pas le cas, ce n'est pas un problème, le résultat est aussi une information.</li>
       </ol>`,
        `<p>Pendant une expérience, respecte toujours les règles de sécurité et travaille dans les mêmes conditions, afin que le résultat soit fiable.</p>`
      ],
      examples: [
        { task: "Quelle est la première étape d'une expérience simple ?",
          steps: ['Nous nous posons d\'abord une question.', "Ensuite, nous formulons une hypothèse et faisons l'expérience.", '<strong>Résultat : la première étape est de se poser une question.</strong>'] },
        { task: "Que notons-nous après l'expérience ?",
          steps: ["Nous notons les observations, c'est-à-dire ce que nous avons vu.", 'À la fin, nous écrivons la conclusion.', '<strong>Résultat : les observations et la conclusion.</strong>'] }
      ]
    },
    'r3-latky': {
      title: 'Les substances et leurs propriétés',
      summary: "Tu compares les substances selon leur transparence, leur dureté, leur solubilité et d'autres propriétés.",
      theory: [
        `<p>Chaque objet est fabriqué à partir d'une <strong>substance</strong>. Or on retrouve la même substance dans des objets différents : on fabrique des chaises comme des crayons à partir du bois.</p>`,
        `<ul>
         <li><strong>Transparence</strong> : à travers une substance transparente on voit, par exemple le verre.</li>
         <li><strong>Dureté</strong> : une substance dure se raye difficilement, par exemple la pierre.</li>
         <li><strong>Solubilité</strong> : une substance soluble se dissout dans l'eau et disparaît, par exemple le sucre ou le sel. Le sable ne se dissout pas dans l'eau.</li>
         <li><strong>Magnétisme</strong> : un aimant attire le fer et l'acier, mais pas le bois ni le plastique.</li>
       </ul>`,
        `<p>Nous comparons les propriétés des substances en observant, en mesurant et en notant les résultats. Par exemple, nous pouvons savoir quelle substance se dissout le plus vite.</p>`,
        `<p><strong>Expérience :</strong> mets du sucre, du sable et de petits cailloux dans trois verres d'eau. Observe où le produit disparaît et où il reste au fond.</p>`
      ],
      examples: [
        { task: "Quelle substance se dissout dans l'eau : le sel ou le sable ?",
          steps: ["Le sel se dissout dans l'eau et disparaît.", 'Le sable reste au fond, il ne se dissout pas.', '<strong>Résultat : le sel.</strong>'] },
        { task: 'Quel objet un aimant attire-t-il : un clou en fer ou une baguette en bois ?',
          steps: ["L'aimant attire le fer.", "L'aimant n'attire pas le bois.", '<strong>Résultat : le clou en fer.</strong>'] }
      ]
    },
    'r3-merania': {
      title: 'Mesure de la longueur, du temps et de la température',
      summary: "Tu choisis l'instrument et l'unité appropriés et tu convertis de simples longueurs.",
      theory: [
        `<p>Lorsque nous mesurons, nous cherchons toujours à savoir <strong>combien</strong> il y en a d'une grandeur, et nous le comparons à une unité. Chaque grandeur a sa propre unité et son propre instrument.</p>`,
        `<ul>
         <li><strong>Longueur</strong> : on la mesure avec une règle ou un mètre. Les unités sont le centimètre (cm) et le mètre (m).</li>
         <li><strong>Temps</strong> : on le mesure avec une horloge ou un chronomètre. Les unités sont la seconde (s), la minute (min) et l'heure (h).</li>
         <li><strong>Température</strong> : on la mesure avec un thermomètre. L'unité est le degré Celsius (°C).</li>
       </ul>`,
        `<p>Un mètre compte <strong>100 centimètres</strong>. Pour convertir, on multiplie donc par cent : 3 m = 300 cm.</p>`,
        `<p>Pour mesurer une longueur, place la règle au début de l'objet et lis l'extrémité au même niveau, afin que le résultat soit précis.</p>`,
        { fig: 'r1r5-pravitko', caption: "On place le zéro de la règle au début de l'objet et on lit l'extrémité. L'objet mesure 7 cm de long." }
      ],
      examples: [
        { task: "Combien de centimètres y a-t-il dans 4 mètres ?",
          steps: ['Un mètre compte 100 centimètres.', 'Quatre mètres font $4 \\cdot 100 = 400$ centimètres.', '<strong>Résultat : 400 cm</strong>'] },
        { task: "Quel instrument utilises-tu pour mesurer le temps d'une course ?",
          steps: ['Le temps se mesure avec un instrument qui indique les secondes et les minutes.', 'Le thermomètre mesure la température, la règle mesure la longueur.', '<strong>Résultat : le chronomètre.</strong>'] }
      ]
    },
    'r3-teplo': {
      title: 'La chaleur et le réchauffement des objets',
      summary: "Tu expliques comment les objets se réchauffent et se refroidissent, et pourquoi certains se réchauffent plus vite que d'autres.",
      theory: [
        `<p>La <strong>chaleur</strong> passe d'un objet plus chaud vers un objet plus froid. C'est pourquoi une soupe froide dans une casserole se réchauffe quand on la pose sur le feu.</p>`,
        `<ul>
         <li><strong>Les objets sombres</strong> absorbent davantage la lumière du Soleil, et se réchauffent donc plus vite.</li>
         <li><strong>Les objets clairs</strong> réfléchissent davantage la lumière, et se réchauffent plus lentement.</li>
         <li><strong>Les métaux</strong> conduisent la chaleur rapidement, c'est pourquoi une cuillère plongée dans une soupe chaude se réchauffe vite.</li>
       </ul>`,
        `<p>On mesure le réchauffement avec un thermomètre. La température augmente quand un objet reçoit de la chaleur, et elle diminue quand il en cède.</p>`,
        { fig: 'r1r5-teplo-tok', caption: 'La chaleur passe du corps le plus chaud vers le plus froid, et non l\'inverse.' }
      ],
      examples: [
        { task: 'Quel objet se réchauffe le plus vite au soleil : un t-shirt sombre ou un t-shirt blanc ?',
          steps: ['Les objets sombres absorbent davantage la lumière.', 'Les objets blancs réfléchissent la lumière et la chaleur.', '<strong>Résultat : le t-shirt sombre se réchauffe plus vite.</strong>'] },
        { task: "Pourquoi une cuillère en métal se réchauffe-t-elle vite dans une soupe chaude ?",
          steps: ['Le métal conduit vite la chaleur.', 'La chaleur passe de la soupe à la cuillère.', '<strong>Résultat : le métal conduit rapidement la chaleur.</strong>'] }
      ]
    },
    'r3-rozpustanie': {
      title: "Dissolution des substances dans l'eau",
      summary: "Tu découvres quelles substances se dissolvent dans l'eau et quels facteurs accélèrent la dissolution.",
      theory: [
        `<p><strong>La dissolution</strong> se produit quand une substance se divise dans l'eau en particules si petites qu'on ne les voit plus. La solution est alors transparente.</p>`,
        `<ul>
         <li><strong>Substances solubles</strong> : le sucre, le sel, le cacao.</li>
         <li><strong>Substances insolubles</strong> : le sable, les petits cailloux, l'huile (elle reste à la surface de l'eau).</li>
       </ul>`,
        `<p>La dissolution est plus rapide quand :</p>
       <ol>
         <li>l'eau est chaude,</li>
         <li>on mélange la substance,</li>
         <li>on commence par écraser la substance en petits morceaux.</li>
       </ol>`,
        `<p><strong>Expérience :</strong> verse la même quantité de sucre dans deux verres, remplis l'un d'eau chaude et l'autre d'eau froide. Observe dans quel verre le sucre se dissout le plus vite.</p>`,
        { fig: 'r1r5-castice-teplota', caption: "Dans une eau plus chaude, les particules bougent plus vite, donc le sucre se dissout plus rapidement." }
      ],
      examples: [
        { task: "Quelle substance se dissout dans l'eau : un caillou ou du sucre ?",
          steps: ["Le sucre se dissout dans l'eau.", 'Le caillou reste au fond.', '<strong>Résultat : le sucre.</strong>'] },
        { task: "Où le sucre se dissout-il le plus vite : dans l'eau chaude ou dans l'eau froide ?",
          steps: ["Les molécules d'eau chaude bougent plus vite.", "L'eau qui bouge plus vite dissout le sucre plus tôt.", "<strong>Résultat : dans l'eau chaude.</strong>"] }
      ]
    },
    'r3-pohyb': {
      title: 'Mouvement des objets et action des forces',
      summary: 'Tu décris comment les forces mettent les objets en mouvement ou les arrêtent.',
      theory: [
        `<p>Un objet se met en mouvement quand quelque chose <strong>agit</strong> sur lui. Cette action s'appelle une <strong>force</strong>. On peut exercer une force en poussant ou en tirant.</p>`,
        `<ul>
         <li><strong>La force de gravité</strong> attire les objets vers le sol. Grâce à elle, la balle tombe.</li>
         <li><strong>Le frottement</strong> agit entre les objets qui se touchent. Il ralentit le mouvement, par exemple celui d'une balle sur l'herbe.</li>
         <li><strong>La force magnétique</strong> agit entre un aimant et le fer.</li>
       </ul>`,
        `<p>Une force peut mettre un objet en mouvement, l'accélérer, le ralentir ou changer sa direction.</p>`,
        `<p>Un livre repose sur la table : la table le repousse vers le haut et la gravité le tire vers le bas. Ces deux forces s'équilibrent, c'est pourquoi le livre ne bouge pas.</p>`,
        { fig: 'r1r5-sily-stol', caption: "Le livre repose sur la table : le support pousse vers le haut avec la force N, la gravité tire vers le bas avec la force Fg. Les forces s'équilibrent." }
      ],
      examples: [
        { task: "Quelle force arrête la balle qui roule sur l'herbe ?",
          steps: ["L'herbe et la balle se touchent et frottent l'une contre l'autre.", 'Cette résistance ralentit la balle.', '<strong>Résultat : le frottement.</strong>'] },
        { task: 'Pourquoi la balle tombe-t-elle quand on la lâche ?',
          steps: ['La force de gravité agit sur la balle.', 'Elle la tire vers le sol.', '<strong>Résultat : la force de gravité.</strong>'] }
      ]
    },
    'r3-zaznamenavanie': {
      title: "Observation et notation des résultats d'expériences",
      summary: "Tu notes les résultats d'une expérience dans un tableau et tu en tires une conclusion.",
      theory: [
        `<p>Pendant une expérience, il ne suffit pas d'observer. Nous devons <strong>noter</strong> les résultats, sinon nous ne nous en souviendrons plus.</p>`,
        `<ol>
         <li>Nous notons ce que nous avons fait et avec quoi.</li>
         <li>Pendant l'expérience, nous inscrivons les valeurs mesurées dans un <strong>tableau</strong>.</li>
         <li>À la fin, nous comparons les résultats et écrivons une <strong>conclusion</strong>.</li>
       </ol>`,
        `<p>Le tableau comporte des colonnes pour les différentes mesures, par exemple le temps nécessaire à la dissolution du sucre et la température de l'eau. Grâce au tableau, on voit comment deux grandeurs sont liées.</p>`,
        `<p>Note les choses avec précision, et non selon ce que tu penses. Si le résultat ne correspond pas à ce que tu attendais, note-le aussi.</p>`
      ],
      examples: [
        { task: "Que vaut-il mieux faire avec les valeurs mesurées pendant une expérience ?",
          steps: ["On oublie vite les valeurs si on ne les note pas.", 'Notons-les dans le tableau dès que nous les mesurons.', '<strong>Résultat : les noter dans le tableau.</strong>'] },
        { task: "Qu'inscrit-on dans le tableau d'une expérience sur la dissolution ?",
          steps: ["Pendant l'expérience, on mesure le temps et la température de l'eau.", 'Ces valeurs sont notées dans des colonnes.', "<strong>Résultat : le temps de dissolution et la température de l'eau.</strong>"] }
      ]
    }
  }
});
