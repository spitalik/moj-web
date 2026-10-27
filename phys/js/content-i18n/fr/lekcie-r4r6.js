/* Français : lekcie 4.–6. ročníka (js/rocniky/r4.js, r5.js, r6.js). Štruktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('fr', {
  lessons: {
    'r4-svetlo-tien': {
      title: 'Lumière, ombre et sources de lumière',
      summary: "Vous distinguez une source de lumière d'un objet éclairé et expliquez comment se forme une ombre.",
      theory: [
        `<p>La lumière se propage en ligne droite. Un objet qui émet lui-même de la lumière est une <strong>source de lumière</strong>, par exemple le soleil, une ampoule ou une bougie.
       La Lune, une table ou un livre n'émettent pas de lumière. Ils ne font que la réfléchir, et c'est pour cela que nous pouvons les voir.</p>`,
        `<p>Lorsque la lumière frappe un objet <strong>opaque</strong>, une <strong>ombre</strong> se forme derrière lui. La lumière ne peut pas atteindre l'arrière de l'objet,
       car elle ne peut pas le contourner.</p>`,
        `<ul>
         <li>Les objets opaques, par exemple le bois ou la pierre, arrêtent la lumière et projettent une ombre sombre.</li>
         <li>Les objets transparents, par exemple le verre clair ou l'eau, laissent passer la lumière. L'ombre derrière eux est faible ou absente.</li>
       </ul>`,
        `<p>La taille d'une ombre dépend de la distance. Lorsque l'objet se rapproche de la source de lumière, l'ombre devient plus grande.
       Lorsqu'il s'en éloigne, l'ombre devient plus petite.</p>`,
        { fig: 'obr-tien', caption: "Une ombre se forme là où la lumière ne peut pas parvenir, car un corps opaque la bloque." }
      ],
      examples: [
        { task: 'Quel objet est une source de lumière : une bougie, un livre ou un arbre ?',
          steps: ['Une source de lumière émet de la lumière. Un livre et un arbre ne font que la réfléchir.', 'Une bougie brûle et émet de la lumière.', '<strong>Résultat : la bougie</strong>'] },
        { task: 'Pourquoi y a-t-il une ombre derrière un arbre par temps ensoleillé ?',
          steps: ['Le soleil est une source de lumière.', "L'arbre est opaque, donc la lumière ne peut pas le traverser.", '<strong>Résultat : la lumière n\'atteint pas l\'arrière de l\'arbre, donc une ombre s\'y forme.</strong>'] }
      ]
    },
    'r4-zvuk': {
      title: 'Le son et sa production',
      summary: "Vous expliquez que le son est produit par des corps qui vibrent, et vous distinguez la hauteur de l'intensité sonore.",
      theory: [
        `<p>Le son est produit par une <strong>vibration</strong>, c'est-à-dire par un corps qui se déplace d'avant en arrière. Lorsqu'on frappe un diapason ou qu'on pince une corde de guitare tendue,
       le corps vibre rapidement et met l'air qui l'entoure en mouvement.</p>`,
        `<p>La vibration atteint nos oreilles à travers l'air sous forme d'une <strong>onde sonore</strong>. Le son a besoin d'un milieu matériel, par exemple l'air, l'eau ou un solide.
       Il ne se propage pas dans le vide, donc une explosion ne peut pas être entendue dans l'espace.</p>`,
        `<ul>
         <li><strong>La hauteur</strong> dépend de la vitesse de la vibration. Une vibration plus rapide donne un son plus aigu.</li>
         <li><strong>L'intensité</strong> dépend de l'ampleur des vibrations. Une oscillation plus grande donne un son plus fort.</li>
       </ul>`,
        `<p>Dans l'air, le son se propage à environ $340\\,\\text{m/s}$. La lumière se propage beaucoup plus vite, presque instantanément.
       C'est pourquoi, pendant un orage, nous voyons d'abord l'éclair et nous n'entendons le tonnerre qu'ensuite.</p>`,
        { fig: 'r1r5-zvuk-vlna', caption: "Un ton plus aigu a une vibration plus rapide (une période plus courte). Un son plus fort a une oscillation plus grande, c'est-à-dire une amplitude plus grande." }
      ],
      examples: [
        { task: "Pourquoi, pendant un orage, voyons-nous d'abord l'éclair et n'entendons-nous le tonnerre qu'ensuite ?",
          steps: ['La lumière se propage presque instantanément.', "Le son se propage beaucoup plus lentement dans l'air.", '<strong>Résultat : le son nous parvient plus tard que la lumière.</strong>'] },
        { task: 'Que doit faire un corps pour produire un son ?',
          steps: ["Le son est produit par la vibration d'un corps.", '<strong>Résultat : le corps doit vibrer.</strong>'] }
      ]
    },
    'r4-magnety': {
      title: 'Propriétés magnétiques des objets',
      summary: "Vous distinguez les objets qu'un aimant attire de ceux qu'il n'attire pas.",
      theory: [
        `<p>Un aimant <strong>attire</strong> les objets en fer, en nickel et en cobalt, par exemple un clou ou un trombone en acier. Nous appelons ces métaux magnétiques.
       Le bois, le plastique, le verre et la plupart des autres métaux, par exemple le cuivre, ne sont pas attirés par un aimant.</p>`,
        `<p>Chaque aimant possède deux <strong>pôles</strong> : le nord et le sud. Les pôles opposés s'attirent, et les pôles identiques se repoussent.</p>`,
        `<p>L'effet magnétique traverse aussi le papier ou une fine couche de plastique. C'est pourquoi un aimant peut attirer un clou posé sous une feuille de papier.</p>`,
        `<p>Nous pouvons connaître une propriété d'un objet grâce à une expérience simple : nous approchons un aimant et observons si l'objet bouge.</p>`,
        { fig: 'obr-magnet', caption: "Les lignes de champ d'un aimant droit sortent du pôle nord N et entrent par le pôle sud S." }
      ],
      examples: [
        { task: 'Quels objets un aimant attire-t-il : un clou, une gomme et une règle en plastique ?',
          steps: ["Le clou est en fer, et un aimant l'attire.", 'Une gomme et une règle en plastique ne sont pas attirées par un aimant.', '<strong>Résultat : seulement le clou.</strong>'] },
        { task: 'On approche deux aimants en plaçant face à face des pôles opposés. Que se passe-t-il ?',
          steps: ["Les pôles opposés s'attirent.", "<strong>Résultat : les aimants s'attirent.</strong>"] }
      ]
    },
    'r4-elektricke-zariadenia': {
      title: 'Appareils électriques simples',
      summary: "Vous connaissez les parties d'un circuit électrique simple et le rôle de chacune.",
      theory: [
        `<p>Un circuit électrique simple comprend une <strong>source</strong> (une pile), un <strong>récepteur</strong> (une ampoule, une sonnerie, un ventilateur),
       des <strong>conducteurs</strong> (généralement des fils de cuivre) et un <strong>interrupteur</strong>.</p>`,
        `<ul>
         <li>La source fournit de l'énergie électrique.</li>
         <li>Le récepteur transforme l'énergie électrique en une autre forme, par exemple en lumière, en chaleur ou en mouvement.</li>
         <li>L'interrupteur ferme ou ouvre le circuit.</li>
       </ul>`,
        `<p>Le courant électrique ne circule que dans un circuit <strong>fermé</strong>. Si le circuit est coupé, par exemple par un interrupteur ouvert, l'ampoule ne s'allume pas.</p>`,
        `<p>Les conducteurs laissent passer le courant électrique, par exemple les métaux. Les isolants, par exemple le plastique ou le caoutchouc, ne le laissent pas passer. C'est pourquoi les fils sont recouverts de plastique et les poignées des outils sont en caoutchouc.</p>`,
        { fig: 'r1r5-obvod-spinac', caption: "Lorsque l'interrupteur est ouvert, le circuit est coupé, aucun courant ne circule et l'ampoule ne s'allume pas." }
      ],
      examples: [
        { task: "Quelle partie du circuit fournit de l'énergie ?",
          steps: ["La source fournit de l'énergie électrique, et le récepteur la consomme.", '<strong>Résultat : la pile (la source).</strong>'] },
        { task: "Pourquoi l'ampoule ne s'allume-t-elle pas après que l'interrupteur a été éteint ?",
          steps: ["L'interrupteur ouvert coupe le circuit.", "Le courant ne circule pas dans un circuit coupé.", "<strong>Résultat : l'ampoule ne s'allume pas, car aucun courant ne circule.</strong>"] }
      ]
    },
    'r4-energia': {
      title: "L'énergie et son utilisation",
      summary: "Vous reconnaissez en quelle autre forme d'énergie se transforme l'énergie dans les appareils courants.",
      theory: [
        `<p><strong>L'énergie</strong> ne peut ni être créée à partir de rien, ni être détruite. Elle ne fait que passer d'une forme à une autre. L'unité d'énergie est le joule, de symbole $\\text{J}$.</p>`,
        `<ul>
         <li>Énergie <strong>électrique</strong> : une prise de courant, une pile, un chargeur.</li>
         <li>Énergie <strong>chimique</strong> : stockée dans une pile ou dans les aliments.</li>
         <li>Énergie de <strong>mouvement</strong> : une personne qui court, un ventilateur qui tourne.</li>
         <li>Énergie <strong>lumineuse</strong> : le soleil, une ampoule, un écran.</li>
         <li>Énergie <strong>thermique</strong> : l'eau chaude, un radiateur chaud.</li>
         <li>Énergie <strong>sonore</strong> : la musique d'un haut-parleur, une voix.</li>
       </ul>`,
        `<p>Les appareils ne transforment généralement pas l'énergie en une seule forme. Une ampoule émet de la lumière, mais la plus grande partie de son énergie se transforme en chaleur. C'est pourquoi elle est chaude après avoir été allumée.</p>`,
        `<p>Un ventilateur transforme l'énergie électrique en mouvement de ses pales. Un haut-parleur transforme l'énergie électrique en son.</p>`,
        { fig: 'r1r5-premeny-energie', caption: "Un ventilateur transforme l'énergie électrique en mouvement, une ampoule la transforme en lumière et en chaleur." }
      ],
      examples: [
        { task: "Quelle transformation d'énergie réalise un ventilateur électrique ?",
          steps: ["Le ventilateur est un récepteur d'énergie électrique.", 'Le moteur tourne et les pales se déplacent.', "<strong>Résultat : l'énergie électrique se transforme en énergie de mouvement.</strong>"] },
        { task: "Quelle transformation d'énergie réalise une ampoule ?",
          steps: ["L'ampoule reçoit de l'énergie électrique.", 'Elle émet de la lumière et chauffe en même temps.', "<strong>Résultat : l'énergie électrique se transforme en lumière et en chaleur.</strong>"] }
      ]
    },
    'r4-bezpecnost': {
      title: 'Comportement sûr avec les appareils électriques',
      summary: "Vous savez quel comportement avec les appareils électriques est sûr et lequel ne l'est pas.",
      theory: [
        `<p>L'électricité est utile, mais elle peut être dangereuse. Un courant qui traverse le corps peut causer une blessure grave.
       C'est pourquoi vous ne devez manipuler les appareils électriques que sur les instructions d'un adulte.</p>`,
        `<ol>
         <li>Ne touchez jamais une prise ou une fiche avec les mains mouillées.</li>
         <li>Débranchez un appareil en tenant la fiche, et non le cordon.</li>
         <li>Si le cordon est endommagé ou si des fils sont à nu, n'utilisez plus l'appareil et prévenez un adulte.</li>
       </ol>`,
        `<p>L'eau conduit très bien le courant électrique, donc associer l'eau et les appareils électriques est très dangereux.
       N'utilisez pas un sèche-cheveux, un chargeur ni aucun autre appareil dans la salle de bains ou près de l'eau.</p>`,
        `<p>Si vous voyez une personne toucher un fil sous tension, ne la touchez pas. Appelez d'abord un adulte ou les services d'urgence,
       afin que le courant soit coupé.</p>`
      ],
      examples: [
        { task: "Comment débrancher correctement un fer de la prise ?",
          steps: ['Tirer sur le cordon peut endommager les fils.', 'La bonne méthode est de tenir la fiche et de la retirer.', '<strong>Résultat : on tire sur la fiche, pas sur le cordon.</strong>'] },
        { task: "Peut-on charger un téléphone dans une salle de bains humide ?",
          steps: ["L'eau conduit bien le courant électrique.", "<strong>Résultat : non, charger un appareil dans un endroit humide n'est pas sûr.</strong>"] }
      ]
    },
    'r5-vlastnosti-latok': {
      title: 'Propriétés des substances et des corps',
      summary: "Vous distinguez une substance d'un corps et connaissez les propriétés de base des matériaux.",
      theory: [
        `<p>Une <strong>substance</strong> est un matériau dont est fait quelque chose, par exemple le bois, le fer ou l'eau.
       Un <strong>corps</strong> est un objet particulier constitué d'une ou de plusieurs substances, par exemple une table, une clé ou une bouteille.</p>`,
        `<p>Nous découvrons les propriétés des substances par l'observation et la mesure : la couleur, l'éclat, la dureté, l'élasticité, la solubilité dans l'eau, ou le fait qu'elles conduisent ou non la chaleur et le courant électrique.</p>`,
        `<ul>
         <li><strong>Dureté</strong> : résistance à la rayure.</li>
         <li><strong>Élasticité</strong> : capacité de reprendre sa forme initiale après avoir été pressée ou pliée.</li>
         <li><strong>Solubilité</strong> : capacité de se dissoudre dans l'eau. Le sel se dissout, le sable non.</li>
       </ul>`,
        `<p>Des corps faits de la même substance peuvent avoir des formes et des tailles différentes. Les propriétés de la substance, en revanche, ne changent pas : deux morceaux de bois ont les mêmes propriétés que le bois.</p>`
      ],
      examples: [
        { task: 'Une clé est-elle un corps ou une substance ?',
          steps: ['Une clé est un objet particulier.', '<strong>Résultat : un corps, fait de métal.</strong>'] },
        { task: "Quelle substance se dissout dans l'eau : le sel ou le sable ?",
          steps: ["Le sel se dissout dans l'eau.", "Le sable ne se dissout pas dans l'eau.", '<strong>Résultat : le sel.</strong>'] }
      ]
    },
    'r5-skupenstva': {
      title: 'Substances solides, liquides et gazeuses',
      summary: 'Vous comparez les substances solides, liquides et gazeuses selon leur forme et leur volume.',
      theory: [
        `<p>Les substances existent sous trois <strong>états</strong> principaux : <strong>solide</strong>, <strong>liquide</strong> et <strong>gazeux</strong>.
       Nous les distinguons selon qu'elles ont une forme fixe et un volume fixe.</p>`,
        `<ul>
         <li><strong>Un solide</strong> : forme et volume fixes, par exemple une pierre ou un glaçon.</li>
         <li><strong>Un liquide</strong> : volume fixe, mais sa forme change avec le récipient, par exemple l'eau dans un verre.</li>
         <li><strong>Un gaz</strong> : ni forme fixe ni volume fixe, il remplit tout le récipient, par exemple l'air dans un ballon.</li>
       </ul>`,
        `<p>Les particules des solides sont proches les unes des autres, elles sont donc difficiles à comprimer. Les particules des gaz sont éloignées, c'est pourquoi les gaz peuvent être comprimés.</p>`,
        `<p><strong>Expérience :</strong> versez de l'eau dans un verre haut, puis dans un verre large. L'eau prend toujours la forme du récipient, mais son volume ne change pas.</p>`,
        { fig: 'r1r5-castice-skupenstva', caption: "Les particules des solides sont fermement disposées, celles des liquides sont serrées mais désordonnées, et celles des gaz sont éloignées." }
      ],
      examples: [
        { task: "Quelles sont les propriétés de l'eau dans un verre ?",
          steps: ["L'eau est un liquide, elle change de forme selon le récipient.", "Son volume ne change pas.", '<strong>Résultat : volume fixe, forme variable.</strong>'] },
        { task: "Pourquoi peut-on comprimer de l'air dans un ballon de football ?",
          steps: ["Les particules d'un gaz sont éloignées les unes des autres.", "<strong>Résultat : lorsqu'on le comprime, les particules se rapprochent.</strong>"] }
      ]
    },
    'r5-telesa': {
      title: 'Corps et leurs matériaux',
      summary: "Vous expliquez de quoi sont faits les corps et choisissez un matériau adapté à un usage donné.",
      theory: [
        `<p>Un corps est un objet constitué de substances. Beaucoup de corps sont faits de plusieurs substances. Les ciseaux ont des lames en métal et des poignées en plastique.</p>`,
        `<p>Lorsque nous fabriquons des objets, nous choisissons une substance selon ce que nous attendons de l'objet. Si nous voulons qu'il soit transparent, nous choisissons le verre.
       Si nous voulons qu'il ne chauffe pas facilement, nous choisissons un matériau qui conduit mal la chaleur.</p>`,
        `<ul>
         <li>Les métaux conduisent bien la chaleur et le courant électrique, ils conviennent donc pour les casseroles et les câbles.</li>
         <li>Les plastiques et le bois conduisent mal la chaleur, ils conviennent donc pour les manches de casseroles.</li>
       </ul>`,
        `<p>Lorsque vous évaluez un corps, demandez-vous toujours : de quelle substance est-il fait, et pourquoi a-t-on choisi cette substance en particulier ?</p>`
      ],
      examples: [
        { task: 'Pourquoi les manches des casseroles sont-ils en plastique ou en bois ?',
          steps: ['Le plastique et le bois conduisent mal la chaleur.', '<strong>Résultat : le manche ne chauffe pas aussi vite que le métal, il est donc facile à tenir.</strong>'] },
        { task: 'Un verre est-il un corps ou une substance ?',
          steps: ['Un verre est un objet particulier.', '<strong>Résultat : un corps.</strong>'] }
      ]
    },
    'r5-hustota': {
      title: 'Masse, volume et masse volumique : notions de base',
      summary: "Vous distinguez la masse du volume et calculez la masse volumique d'une substance.",
      theory: [
        `<p><strong>La masse</strong> $m$ nous indique la quantité de substance que contient un corps. Son unité est le gramme $\\text{g}$ ou le kilogramme $\\text{kg}$. Nous mesurons la masse avec une balance.</p>`,
        `<p><strong>Le volume</strong> $V$ est l'espace qu'occupe un corps. Les unités sont, par exemple, $\\text{cm}^3$ ou le millilitre, où $1\\,\\text{ml}=1\\,\\text{cm}^3$.
       Nous mesurons le volume d'un liquide avec une éprouvette graduée.</p>`,
        `<p><strong>La masse volumique</strong> $\\rho$ nous indique la masse d'un $\\text{cm}^3$ d'une substance. Nous la calculons comme un quotient : $\\rho = \\frac{m}{V}$.
       La masse volumique est une propriété de la substance, et non du corps. L'eau a une masse volumique d'environ $1\\,\\text{g/cm}^3$.</p>`,
        `<ul>
         <li>Un corps dont la masse volumique est supérieure à celle de l'eau coule, par exemple une pierre.</li>
         <li>Un corps dont la masse volumique est inférieure à celle de l'eau flotte, par exemple le bois.</li>
       </ul>`,
        { fig: 'r1r5-hustota-voda', caption: "Un corps dont la masse volumique est supérieure à celle de l'eau coule (une pierre), un corps dont elle est inférieure flotte (le bois)." }
      ],
      examples: [
        { task: "Un cube a une masse de $48\\,\\text{g}$ et un volume de $16\\,\\text{cm}^3$. Quelle est sa masse volumique ?",
          steps: ['$\\rho=\\frac{m}{V}=\\frac{48}{16}$', '<strong>Résultat : $3\\,\\text{g/cm}^3$</strong>'] },
        { task: "Une substance a une masse volumique de $2\\,\\text{g/cm}^3$, et un corps fait de cette substance a un volume de $10\\,\\text{cm}^3$. Quelle est sa masse ?",
          steps: ['$m=\\rho\\cdot V=2\\cdot 10$', '<strong>Résultat : $20\\,\\text{g}$</strong>'] }
      ]
    },
    'r5-merania': {
      title: 'Mesure de la longueur, du volume et de la masse',
      summary: "Vous lisez correctement un résultat de mesure et calculez la différence entre des valeurs mesurées.",
      theory: [
        `<p>Nous mesurons la longueur avec une règle ou un mètre ruban. Nous plaçons le zéro de l'échelle exactement au début du corps et lisons l'extrémité.
       Une erreur fréquente consiste à commencer la mesure à partir du chiffre 1, et non du zéro.</p>`,
        `<p>Nous mesurons le volume d'un liquide avec une éprouvette graduée. Nous plaçons notre œil au niveau du liquide et lisons le bord inférieur de la surface, appelé <strong>ménisque</strong>.
       Si nous regardons par-dessus ou par-dessous, le résultat est faussé.</p>`,
        `<p>Nous mesurons la masse avec une balance. Avant la mesure, nous la remettons à zéro afin que la masse du récipient ne soit pas comptée.</p>`,
        `<p>Le volume d'un corps qui coule peut être déterminé à l'aide de l'eau : nous lisons le niveau de l'eau avant et après l'immersion. La différence des niveaux est le volume du corps.</p>`,
        { fig: 'r1r5-hladina', caption: "Le volume d'un corps immergé est la différence entre les niveaux d'eau après et avant l'immersion." }
      ],
      examples: [
        { task: 'Un bâton est posé sur une règle, de 2 cm à 9 cm. Quelle est sa longueur ?',
          steps: ['La longueur est la différence entre le nombre de fin et le nombre de début : $9 - 2$.', '<strong>Résultat : 7 cm</strong>'] },
        { task: "Une éprouvette contient $50\\,\\text{ml}$ d'eau. Après l'immersion d'un cube, le niveau monte à $72\\,\\text{ml}$. Quel est le volume du cube ?",
          steps: ["Le volume du cube correspond à la montée du niveau : $72 - 50$.", '<strong>Résultat : $22\\,\\text{ml}$</strong>'] }
      ]
    },
    'r5-jednotky': {
      title: 'Unités des grandeurs physiques',
      summary: 'Vous convertissez les unités de longueur, de masse et de volume.',
      theory: [
        `<p>Une grandeur physique est ce que nous mesurons, par exemple la longueur, la masse, le temps ou la température. Chaque grandeur a une <strong>unité</strong>
       à laquelle nous la comparons. Les unités SI de base sont, par exemple, le mètre $\\text{m}$, le kilogramme $\\text{kg}$ et la seconde $\\text{s}$.</p>`,
        `<ul>
         <li>Longueur : $1\\,\\text{km}=1000\\,\\text{m}$, $1\\,\\text{m}=100\\,\\text{cm}$, $1\\,\\text{cm}=10\\,\\text{mm}$.</li>
         <li>Masse : $1\\,\\text{kg}=1000\\,\\text{g}$, $1\\,\\text{t}=1000\\,\\text{kg}$.</li>
         <li>Volume : $1\\,\\text{l}=1000\\,\\text{ml}$, $1\\,\\text{dm}^3=1\\,\\text{l}$.</li>
       </ul>`,
        `<p>La conversion vers une unité <strong>plus petite</strong> donne un nombre plus grand, on multiplie donc : $2\\,\\text{km}=2000\\,\\text{m}$.
       La conversion vers une unité <strong>plus grande</strong> donne un nombre plus petit, on divise donc : $300\\,\\text{cm}=3\\,\\text{m}$.</p>`,
        `<p>Attention à une erreur fréquente : $1\\,\\text{m}$ n'est pas $10\\,\\text{cm}$, mais $100\\,\\text{cm}$.</p>`
      ],
      examples: [
        { task: 'Convertissez $3{,}5\\,\\text{m}$ en centimètres.',
          steps: ["Un mètre comporte 100 cm, et la conversion vers une unité plus petite consiste à multiplier le nombre.", '$3{,}5\\cdot 100=350$', '<strong>Résultat : 350 cm</strong>'] },
        { task: 'Convertissez $4\\,500\\,\\text{g}$ en kilogrammes.',
          steps: ["Un kilogramme comporte 1000 g, et la conversion vers une unité plus grande consiste à diviser le nombre.", '$4500 : 1000=4{,}5$', '<strong>Résultat : $4{,}5\\,\\text{kg}$</strong>'] }
      ]
    },
    'r5-teplota': {
      title: 'Température et sa mesure',
      summary: 'Vous lisez une température en degrés Celsius et calculez ses variations.',
      theory: [
        `<p>Nous mesurons la température avec un <strong>thermomètre</strong>. Sur l'échelle Celsius, il y a deux points fixes : la glace qui fond a une température de $0\\,{}^\\circ\\text{C}$,
       et l'eau bout à $100\\,{}^\\circ\\text{C}$ à pression normale.</p>`,
        `<ul>
         <li>Un thermomètre contient un liquide, par exemple de l'alcool, qui se dilate lorsqu'il est chauffé. Nous lisons la température à la longueur de la colonne.</li>
         <li>Nous laissons le thermomètre en place pendant au moins quelques minutes afin qu'il indique la température correcte.</li>
         <li>Le thermomètre ne doit pas toucher le fond du récipient, car il indiquerait la température du fond et non celle du liquide.</li>
       </ul>`,
        `<p>La température varie. Si elle augmente, nous ajoutons la variation ; si elle baisse, nous la soustrayons. Les températures négatives sont inférieures à zéro,
       par exemple $-5\\,{}^\\circ\\text{C}$ est 5 degrés plus froid que la glace qui fond.</p>`,
        { fig: 'r1r5-teplomer', caption: "L'échelle Celsius a deux points fixes : la glace qui fond à 0 °C et l'eau bouillante à 100 °C. Les températures négatives sont inférieures à zéro." }
      ],
      examples: [
        { task: 'Le matin, il faisait $-4\\,{}^\\circ\\text{C}$, et à midi la température avait augmenté de $9\\,{}^\\circ\\text{C}$. Quelle est la température à midi ?',
          steps: ['$-4+9=5$', '<strong>Résultat : $5\\,{}^\\circ\\text{C}$</strong>'] },
        { task: "L'eau avait une température de $20\\,{}^\\circ\\text{C}$ et a été chauffée jusqu'à $100\\,{}^\\circ\\text{C}$. De combien de degrés s'est-elle réchauffée ?",
          steps: ['$100-20=80$', '<strong>Résultat : de $80\\,{}^\\circ\\text{C}$</strong>'] }
      ]
    },
    'r5-pozorovanie': {
      title: 'Observation, mesure et expériences simples',
      summary: 'Vous planifiez une expérience simple, notez les résultats et tirez une conclusion.',
      theory: [
        `<p>Lorsque nous étudions un phénomène, nous procédons étape par étape : nous observons, posons une question, formulons une <strong>hypothèse</strong>, réalisons une expérience,
       notons les résultats et formulons une conclusion. Une hypothèse est une supposition vérifiable, et non une conclusion définitive.</p>`,
        `<ol>
         <li>Décidez ce que vous voulez découvrir.</li>
         <li>Dans l'expérience, ne changez qu'une seule chose à la fois.</li>
         <li>Notez immédiatement les résultats dans un tableau.</li>
         <li>Répétez l'expérience afin de pouvoir comparer les résultats.</li>
       </ol>`,
        `<p>La grandeur que nous modifions s'appelle la <strong>variable</strong>. Les éléments que nous gardons identiques sont contrôlés. Si nous changeons plusieurs choses à la fois, nous ne pouvons pas savoir ce qui a causé le résultat.</p>`,
        `<p>Nous écrivons toujours les valeurs mesurées avec une unité, par exemple $25\\,\\text{cm}$, et non simplement $25$.</p>`
      ],
      examples: [
        { task: "Vous voulez savoir si le sel se dissout plus vite dans l'eau chaude que dans l'eau froide. Quelle est la variable ?",
          steps: ["Nous changeons la température de l'eau.", "Nous gardons la même quantité de sel et d'eau.", "<strong>Résultat : la variable est la température de l'eau.</strong>"] },
        { task: "Comment peut-on augmenter la précision d'une mesure ?",
          steps: ["Nous répétons plusieurs fois l'expérience.", 'Nous calculons la moyenne des résultats.', "<strong>Résultat : répéter l'expérience et calculer la moyenne des résultats.</strong>"] }
      ]
    },
    'r6-hustota': {
      title: 'Masse volumique des substances et son calcul',
      summary: "Ce que nous indique la masse volumique et comment la calculer à partir de la masse et du volume.",
      theory: [
        `<p>Deux corps de même taille peuvent avoir des masses très différentes. Une boule de plomb est beaucoup plus lourde qu'une boule en bois de même volume.
       La différence ne vient pas de la forme ou de la taille, mais de la <strong>substance</strong> dont est fait le corps. Cette propriété de la substance est décrite par la <strong>masse volumique</strong>.</p>`,
        `<p><strong>La masse volumique</strong> indique la masse d'une unité de volume d'une substance donnée. Elle est notée $\\rho$ (rhô) et se calcule avec la formule
       $\\rho = \\frac{m}{V}$, où $m$ est la masse et $V$ le volume. Nous divisons donc la masse par le volume.</p>`,
        `<ul>
         <li>Unités : $\\text{g/cm}^3$ (en pratique) et $\\text{kg/m}^3$ (dans le SI).</li>
         <li>Conversion : $1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$, car $1\\,\\text{g}=0{,}001\\,\\text{kg}$ et $1\\,\\text{cm}^3=0{,}000001\\,\\text{m}^3$.</li>
       </ul>`,
        `<p>La masse volumique est une propriété de la substance, et non du corps. Tous les morceaux d'une même substance ont la même masse volumique, qu'ils soient grands ou petits.
       Elle nous aide à distinguer des substances d'apparence semblable et, plus tard, elle explique pourquoi certains corps flottent et d'autres coulent.</p>`,
        `<p>Masses volumiques approximatives : eau $1\\,\\text{g/cm}^3$, huile environ $0{,}9\\,\\text{g/cm}^3$, aluminium $2{,}7\\,\\text{g/cm}^3$, fer $7{,}8\\,\\text{g/cm}^3$.
       Le bois est plus léger que l'eau : par exemple, le pin a environ $0{,}5\\,\\text{g/cm}^3$.</p>`,
        { fig: 'r6r9-hustota', caption: "La masse volumique indique la masse d'une unité de volume d'une substance. Pour un même volume, le fer est beaucoup plus lourd que l'eau." }
      ],
      examples: [
        { task: "Un bloc d'aluminium a une masse de $135\\,\\text{g}$ et un volume de $50\\,\\text{cm}^3$. Calculez sa masse volumique.",
          steps: ['Nous utilisons la formule $\\rho = \\frac{m}{V}$.', '$\\rho = \\frac{135}{50} = 2{,}7\\,\\text{g/cm}^3$', '<strong>Résultat : 2,7 g/cm³</strong>'] },
        { task: "Quelle est la masse de $200\\,\\text{cm}^3$ d'eau ? La masse volumique de l'eau est de $1\\,\\text{g/cm}^3$.",
          steps: ["D'après la formule $\\rho = \\frac{m}{V}$, on obtient $m = \\rho\\cdot V$.", '$m = 1\\,\\text{g/cm}^3\\cdot 200\\,\\text{cm}^3 = 200\\,\\text{g}$', '<strong>Résultat : 200 g</strong>'] }
      ]
    },
    'r6-vlastnosti': {
      title: 'Propriétés des liquides et des gaz',
      summary: 'En quoi les liquides et les gaz se distinguent par la forme, le volume et la compressibilité.',
      theory: [
        `<p>Les substances existent sous trois états : solide, liquide et gazeux. Les corps solides ont une forme fixe et un volume fixe.
       Les <strong>liquides</strong> ont un volume fixe, mais ils épousent la forme du récipient. Les <strong>gaz</strong> n'ont ni forme fixe ni volume fixe : ils se dilatent et remplissent tout le récipient.</p>`,
        `<p>Pourquoi ? Les particules d'un liquide sont proches et retenues, mais elles peuvent glisser les unes sur les autres, si bien qu'un liquide s'écoule.
       Les particules d'un gaz sont éloignées et se déplacent librement, elles se répartissent donc dans tout l'espace disponible.</p>`,
        `<p><strong>Compressibilité :</strong> les liquides ne peuvent pratiquement pas être comprimés, car leurs particules sont déjà proches. Les gaz peuvent être comprimés,
       car il y a beaucoup d'espace libre entre leurs particules. L'air d'une pompe à vélo est donc comprimé, alors que l'eau dans un récipient fermé ne l'est pas.</p>`,
        `<ul>
         <li><strong>Forme :</strong> un liquide épouse la forme du récipient, un gaz remplit tout le récipient.</li>
         <li><strong>Volume :</strong> un liquide a un volume fixe, le volume d'un gaz est égal à celui de son récipient.</li>
         <li><strong>Compressibilité :</strong> un liquide est presque incompressible, un gaz peut être comprimé.</li>
       </ul>`,
        `<p>Les liquides et les gaz sont appelés ensemble <strong>fluides</strong>. Les fluides peuvent être versés et s'écoulent ; on y observe donc la pression et la poussée d'Archimède.</p>`,
        { fig: 'r6r9-castice', caption: "Les particules d'un solide restent à des places fixes, celles d'un liquide restent collées et glissent les unes sur les autres, et celles d'un gaz se déplacent librement." }
      ],
      examples: [
        { task: "Expliquez pourquoi l'air d'une seringue peut être comprimé, mais pas l'eau.",
          steps: ["Les particules de l'air sont éloignées, avec de l'espace libre entre elles.", "Les particules de l'eau sont serrées, sans place pour les rapprocher davantage.", "<strong>Résultat : l'air est compressible, l'eau presque pas.</strong>"] },
        { task: "Un litre d'eau est versé d'un large récipient dans un verre haut et étroit. Quel volume l'eau a-t-elle maintenant ?",
          steps: ["L'eau prend la forme du récipient.", "Le volume d'un liquide ne change pas lorsqu'on le verse.", '<strong>Résultat : toujours 1 litre.</strong>'] }
      ]
    },
    'r6-tlak': {
      title: 'Pression dans les liquides et les gaz',
      summary: "La pression comme force par unité de surface, et la pression dans un liquide, qui augmente avec la profondeur.",
      theory: [
        `<p><strong>La pression</strong> est la force agissant perpendiculairement à une surface, rapportée à l'unité de surface. Formule : $p=\\frac{F}{S}$, où $F$ est la force en newtons
       et $S$ l'aire de la surface en $\\text{m}^2$. L'unité de pression est le pascal : $1\\,\\text{Pa}=1\\,\\text{N/m}^2$.</p>`,
        `<p>La même force produit une pression plus grande sur une surface plus petite. C'est pourquoi un clou pointu pénètre facilement dans le bois, et un clou émoussé non : sur la petite pointe, la pression est grande.</p>`,
        `<p><strong>La pression dans un liquide</strong> augmente avec la profondeur. Plus nous descendons, plus il y a de liquide au-dessus de nous, qui appuie sur les couches inférieures.
       Formule : $p=\\rho\\cdot g\\cdot h$, où $\\rho$ est la masse volumique du liquide, $h$ la profondeur sous la surface, et $g\\approx 10\\,\\text{N/kg}$ (valeur arrondie utilisée à l'école).</p>`,
        `<p>Un liquide appuie sur les parois du récipient, sur le fond et vers le haut. La pression dans un liquide agit de la même façon dans toutes les directions à une même profondeur.</p>`,
        `<p>Un gaz dans un récipient fermé appuie lui aussi sur les parois dans toutes les directions. Lorsque nous comprimons le gaz, sa pression augmente.</p>`,
        { fig: 'obr-tlak', caption: "La pression dans un liquide augmente avec la profondeur : plus on descend, plus la force agissant sur la paroi est grande." }
      ],
      examples: [
        { task: "Une force de $600\\,\\text{N}$ agit perpendiculairement sur une surface de $0{,}5\\,\\text{m}^2$. Quelle pression produit-elle ?",
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$', '$p=1200\\,\\text{Pa}$', '<strong>Résultat : 1200 Pa</strong>'] },
        { task: "Quelle est la pression dans l'eau à une profondeur de $3\\,\\text{m}$ ? La masse volumique de l'eau est $1000\\,\\text{kg/m}^3$, $g=10\\,\\text{N/kg}$.",
          steps: ['$p=\\rho\\cdot g\\cdot h$', '$p=1000\\cdot 10\\cdot 3=30\\,000\\,\\text{Pa}$', '<strong>Résultat : 30 000 Pa = 30 kPa</strong>'] }
      ]
    },
    'r6-atmosfera': {
      title: 'Pression atmosphérique',
      summary: "Pourquoi l'air appuie sur nous et comment la pression varie avec l'altitude.",
      theory: [
        `<p>L'air qui entoure la Terre a une masse, il exerce donc une pression sur nous. Cette pression s'appelle la <strong>pression atmosphérique</strong>. Au niveau de la mer, elle vaut environ $101\\,\\text{kPa}$,
       ce qui correspond au poids de l'air au-dessus d'un mètre carré, soit environ 10 tonnes.</p>`,
        `<p>Les météorologues utilisent l'hectopascal : $1\\,\\text{hPa}=100\\,\\text{Pa}$, donc $1\\,\\text{kPa}=10\\,\\text{hPa}$. La pression normale est d'environ $1013\\,\\text{hPa}$.
       La pression se mesure avec un <strong>baromètre</strong>.</p>`,
        `<p>Pourquoi pouvons-nous boire avec une paille ? Lorsque nous aspirons, nous diminuons la pression dans notre bouche. La pression atmosphérique agit sur la surface de la boisson et la pousse dans la paille.
       Ce n'est donc pas nous qui faisons monter la boisson : c'est l'air qui la pousse.</p>`,
        `<p>Lorsque l'altitude au-dessus du niveau de la mer augmente, la pression diminue, car il y a moins d'air au-dessus de nous. C'est pourquoi la pression de l'air baisse en montagne et que l'eau bout à une température plus basse.</p>`,
        { fig: 'r6r9-atmosfera', caption: "Plus nous montons, moins il y a d'air au-dessus de nous, et donc la pression atmosphérique diminue." }
      ],
      examples: [
        { task: "Un baromètre indique une pression de $1013\\,\\text{hPa}$. Combien de kilopascals cela fait-il ?",
          steps: ['$1\\,\\text{kPa}=10\\,\\text{hPa}$, donc nous divisons le résultat par dix.', '$1013 : 10 = 101{,}3$', '<strong>Résultat : 101,3 kPa</strong>'] },
        { task: "Comment la pression atmosphérique varie-t-elle lorsque nous gravissons une haute montagne ?",
          steps: ["Il y a moins d'air au-dessus de nous qui appuie sur nous.", 'La pression de l\'air baisse donc.', '<strong>Résultat : la pression diminue</strong>'] }
      ]
    },
    'r6-vztlak': {
      title: 'Poussée et flottaison des corps',
      summary: 'Pourquoi un liquide rend les corps plus légers et quand un corps flotte.',
      theory: [
        `<p>Une balle immergée dans l'eau remonte à la surface. Un liquide exerce sur un corps immergé une force dirigée vers le haut. Cette force s'appelle la <strong>force de poussée</strong>.
       Elle apparaît parce que la pression dans un liquide augmente avec la profondeur : la face inférieure du corps est plus fortement comprimée que la face supérieure.</p>`,
        `<p><strong>Principe d'Archimède :</strong> la force de poussée est égale au poids du liquide déplacé par le corps. Formule : $F_{vz}=\\rho_k\\cdot g\\cdot V_p$,
       où $\\rho_k$ est la masse volumique du liquide et $V_p$ le volume de la partie immergée du corps.</p>`,
        `<ul>
         <li>Le poids du corps est supérieur à la force de poussée : le corps coule.</li>
         <li>Poids et force de poussée sont égaux : le corps reste en équilibre, immergé.</li>
         <li>La force de poussée est supérieure au poids : le corps remonte et flotte à la surface, seule une partie de lui étant immergée.</li>
       </ul>`,
        `<p>Un navire en acier flotte parce qu'il est grand et creux. Sa masse volumique moyenne est inférieure à celle de l'eau, il déplace donc assez d'eau pour supporter son poids.</p>`,
        { fig: 'obr-vztlak', caption: "La force de poussée Fvz est dirigée vers le haut, le poids Fg vers le bas. Un corps immergé paraît plus léger du poids du liquide déplacé." }
      ],
      examples: [
        { task: "Un cube d'un volume de $1\\,\\text{dm}^3$ est entièrement immergé dans l'eau. L'eau a une masse volumique de $1\\,\\text{kg/dm}^3$. Quelle est la force de poussée ?",
          steps: ["L'eau déplacée a une masse de $\\rho\\cdot V = 1\\,\\text{kg}$.", "Son poids est $1\\,\\text{kg}\\cdot 10\\,\\text{N/kg}=10\\,\\text{N}$.", '<strong>Résultat : la force de poussée est de 10 N.</strong>'] },
        { task: "Un corps d'une masse de $3\\,\\text{kg}$ flotte sur l'eau. Quelle est la valeur de la force de poussée ?",
          steps: ['Le corps flotte, donc la force de poussée est égale à son poids.', '$F_{vz}=F_G=m\\cdot g=3\\cdot 10=30\\,\\text{N}$', '<strong>Résultat : 30 N</strong>'] }
      ]
    },
    'r6-teplo': {
      title: 'Température, chaleur et échanges de chaleur',
      summary: 'La différence entre la température et la chaleur, et le sens dans lequel la chaleur circule.',
      theory: [
        `<p><strong>La température</strong> indique à quel point un corps est chaud. Elle se mesure en degrés Celsius (°C). Plus les particules d'une substance se déplacent vite, plus la substance est chaude.
       Un thermomètre doit atteindre la température de son environnement, afin d'indiquer la température de celui-ci.</p>`,
        `<p><strong>La chaleur</strong> est l'énergie transférée entre des corps à cause d'une différence de température. L'unité de chaleur est le joule (J).
       La chaleur passe toujours d'un corps plus chaud vers un corps plus froid, jamais dans l'autre sens. Le réfrigérateur est une exception, car le refroidissement demande un travail.</p>`,
        `<p><strong>L'échange de chaleur</strong> dure jusqu'à ce que les températures des corps s'égalisent. On parle alors d'<em>équilibre thermique</em>.
       La chaleur se transmet de trois façons : par <em>conduction</em> (une cuillère en métal dans du thé), par <em>convection</em> (liquides et gaz) et par <em>rayonnement</em> (la chaleur du Soleil).</p>`,
        `<p>Si nous mélangeons des quantités égales d'eau à des températures différentes et que nous négligeons les pertes de chaleur, la température finale est la moyenne arithmétique des deux températures.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: "La chaleur passe d'un corps plus chaud vers un corps plus froid. Elle se transmet par conduction, convection ou rayonnement." }
      ],
      examples: [
        { task: 'Nous mélangeons des quantités égales d\'eau à 80 °C et à 20 °C. Quelle sera la température finale ?',
          steps: ['Pour des quantités égales, la température finale est la moyenne des deux températures.', '$\\frac{80+20}{2}=50$', '<strong>Résultat : 50 °C</strong>'] },
        { task: "Dans quel sens la chaleur circule-t-elle entre une tasse de thé à 70 °C et de l'air à 22 °C ?",
          steps: ['La chaleur passe toujours du corps le plus chaud vers le plus froid.', "Le thé a une température plus élevée, donc la chaleur passe du thé vers l'air.", "<strong>Résultat : du thé vers l'environnement</strong>"] }
      ]
    },
    'r6-skupenstva': {
      title: "Changements d'état des substances",
      summary: "La fusion, la solidification, la vaporisation, la condensation, la sublimation, et ce qui se passe avec les particules dans chacune.",
      theory: [
        `<p>Les substances existent à l'état solide, liquide et gazeux. Lors d'un changement d'état, la substance ne se transforme pas en une autre substance ;
       seuls la disposition et le mouvement de ses particules changent.</p>`,
        `<ul>
         <li><strong>Fusion</strong> : solide vers liquide (la glace fond en eau).</li>
         <li><strong>Solidification</strong> : liquide vers solide (l'eau gèle).</li>
         <li><strong>Vaporisation</strong> : liquide vers gaz (le linge mouillé sèche).</li>
         <li><strong>Condensation</strong> : gaz vers liquide (la rosée sur l'herbe).</li>
         <li><strong>Sublimation</strong> : solide directement vers gaz (la carboglace, la naphtaline).</li>
         <li><strong>Désublimation</strong> : gaz directement vers solide (le givre dans le congélateur).</li>
       </ul>`,
        `<p><strong>Pourquoi ?</strong> Lors de la fusion, la substance doit absorber de l'énergie pour que ses particules puissent se libérer de la disposition du solide. En revanche, lors de la solidification, de l'énergie est libérée.</p>`,
        `<ol>
         <li>La glace à une température de $-5\\,{}^\\circ\\text{C}$ se réchauffe d'abord jusqu'à $0\\,{}^\\circ\\text{C}$ lorsqu'on la chauffe.</li>
         <li>À $0\\,{}^\\circ\\text{C}$ elle fond, et sa température ne change pas tant qu'elle n'a pas entièrement fondu.</li>
         <li>Ce n'est qu'ensuite que l'eau se réchauffe davantage.</li>
       </ol>`,
        { fig: 'obr-skupenstva', caption: "Changements d'état : fusion, solidification, vaporisation et condensation." }
      ],
      examples: [
        { task: "L'eau du congélateur se transforme en glace. Comment appelle-t-on ce processus ?",
          steps: ["L'eau passe de l'état liquide à l'état solide.", "Le passage du liquide au solide s'appelle la solidification.", '<strong>Résultat : la solidification</strong>'] },
        { task: "Du givre se forme sur une surface froide directement à partir de la vapeur d'eau, sans passer par l'état liquide. Comment appelle-t-on ce processus ?",
          steps: ["La vapeur passe directement à l'état solide.", "Le passage du gaz au solide s'appelle la désublimation.", '<strong>Résultat : la désublimation</strong>'] }
      ]
    },
    'r6-var': {
      title: 'Évaporation, condensation et ébullition',
      summary: "La différence entre l'évaporation et l'ébullition, et pourquoi les liquides se refroidissent.",
      theory: [
        `<p><strong>L'évaporation</strong> a lieu à la surface d'un liquide, à toute température. Les particules les plus rapides s'échappent de la surface vers l'environnement.
       L'évaporation est plus rapide à température plus élevée, sur une plus grande surface, et lorsqu'il y a du vent, qui emporte la vapeur.</p>`,
        `<p><strong>L'évaporation refroidit.</strong> Les particules les plus rapides quittent le liquide, si bien que le reste a une énergie moyenne plus faible.
       C'est pourquoi le vent nous refroidit après une baignade : l'eau s'évapore de la peau et emporte de la chaleur.</p>`,
        `<p><strong>L'ébullition</strong> est la transformation d'un liquide en gaz dans tout son volume, et non seulement à la surface. Elle a lieu à une certaine <em>température d'ébullition</em>, qui dépend de la pression.
       À pression normale, l'eau bout à 100 °C. En haute montagne, la pression est plus basse, donc l'eau bout à une température plus basse.</p>`,
        `<p><strong>La condensation</strong> est le changement inverse : la vapeur devient un liquide. Lors de la condensation, de la chaleur est libérée dans l'environnement,
       c'est pourquoi une brûlure par la vapeur est plus grave qu'une brûlure par l'eau bouillante. La rosée, le brouillard et les nuages se forment par condensation de la vapeur d'eau.</p>`,
        { fig: 'r6r9-var', caption: "L'évaporation n'a lieu qu'à la surface, tandis que l'ébullition a lieu dans tout le volume du liquide, où se forment des bulles de vapeur." }
      ],
      examples: [
        { task: "Pourquoi le linge mouillé sèche-t-il plus vite au soleil et dans le vent ?",
          steps: ["La température plus élevée et le vent accélèrent l'évaporation.", "Les particules d'eau du linge s'échappent plus facilement dans l'air.", "<strong>Résultat : la chaleur et le vent accélèrent l'évaporation.</strong>"] },
        { task: "L'eau bout à 100 °C à pression normale. À quelle température bouillira-t-elle au sommet d'une haute montagne, où la pression est plus basse ?",
          steps: ['Plus la pression est basse, plus la température d\'ébullition est basse.', "En haute montagne, l'eau bout à une température inférieure à 100 °C.", '<strong>Résultat : à une température inférieure à 100 °C</strong>'] }
      ]
    }
  }
});
