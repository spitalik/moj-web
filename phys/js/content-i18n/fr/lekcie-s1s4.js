/* Français : lekcie 1.–4. ročníka SŠ (js/rocniky/s1.js, s2.js, s3.js, s4.js). Štruktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('fr', {
  lessons: {
    's1-veliciny': {
      title: `Grandeurs physiques, unités et mesure`,
      summary: `Nombre et unité, système SI, préfixes et conversions d'unités.`,
      theory: [
        `<p>Une grandeur physique est une propriété d'un corps ou d'un phénomène que l'on peut <strong>mesurer</strong> et exprimer par un nombre accompagné d'une unité. Par exemple, la longueur $s = 12\\,\\text{m}$ : le nombre $12$ indique combien de fois nous avons utilisé l'unité, et $\\text{m}$ indique quelle unité nous avons utilisée. Une valeur sans unité n'a pas de sens.</p>`,
        `<p>Le Système international d'unités (SI) comporte sept unités de base. Pour ce niveau, celles-ci suffisent : le mètre $\\text{m}$ (longueur), le kilogramme $\\text{kg}$ (masse), la seconde $\\text{s}$ (temps) et le kelvin $\\text{K}$ (température). Les unités dérivées se forment en combinant les unités de base : la vitesse a l'unité $\\text{m/s}$ et la force $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$.</p>`,
        `<p><strong>Les préfixes</strong> raccourcissent l'écriture des très grands et très petits nombres. Par exemple $1\\,\\text{km}=10^3\\,\\text{m}$, $1\\,\\text{cm}=10^{-2}\\,\\text{m}$ et $1\\,\\text{g}=10^{-3}\\,\\text{kg}$. Pour convertir, il suffit de savoir combien de fois la nouvelle unité est plus grande ou plus petite, puis de multiplier ou de diviser en conséquence.</p>`,
        `<p>Toute mesure comporte une <strong>erreur</strong>, c'est pourquoi nous écrivons le résultat avec un nombre de chiffres significatifs approprié et nous indiquons toujours l'unité. L'écriture $s = 12{,}0\\,\\text{m}$ en dit plus que $s = 12\\,\\text{m}$, car elle suggère une précision au dixième de mètre.</p>`
      ],
      examples: [
        { task: `Convertis $3{,}5\\,\\text{km}$ en mètres.`,
          steps: [`Le préfixe k signifie mille, donc $1\\,\\text{km}=10^3\\,\\text{m}$.`, `$3{,}5\\cdot 10^3\\,\\text{m}=3500\\,\\text{m}$.`, `<strong>Résultat : 3500 m</strong>`] },
        { task: `Combien de secondes y a-t-il dans $2\\,\\text{h}$ ?`,
          steps: [`Une heure compte $60\\,\\text{min}$ et une minute $60\\,\\text{s}$.`, `Une heure fait donc $60\\cdot 60=3600\\,\\text{s}$.`, `$2\\,\\text{h}=2\\cdot 3600\\,\\text{s}=7200\\,\\text{s}$.`, `<strong>Résultat : 7200 s</strong>`] }
      ]
    },

    's1-pohyb': {
      title: `Mouvement uniforme et mouvement non uniforme`,
      summary: `Distance, temps et vitesse ; vitesse moyenne lorsque le mouvement change.`,
      theory: [
        `<p>Le mouvement d'un corps se décrit par rapport à un <strong>corps de référence</strong>. La distance $s$ est la longueur de la trajectoire parcourue par le corps, et le temps $t$ est la durée du mouvement. La <strong>vitesse moyenne</strong> est le quotient de la distance par le temps : $\\bar v=\\frac{s}{t}$, unité $\\text{m/s}$ ou $\\text{km/h}$.</p>`,
        `<p>Le <strong>mouvement uniforme</strong> est un mouvement à vitesse constante. Pendant des durées égales, le corps parcourt des distances égales, donc $s=v\\,t$. Dans le graphe de la distance en fonction du temps, c'est une droite.</p>`,
        `<p>Le <strong>mouvement non uniforme</strong> signifie que la vitesse varie. La vitesse moyenne de tout le trajet n'est pas la moyenne arithmétique des vitesses, mais la distance totale divisée par le temps total : $\\bar v=\\frac{s_1+s_2}{t_1+t_2}$.</p>`,
        `<p><strong>Pourquoi ?</strong> Si nous roulons pendant 2 heures à $60\\,\\text{km/h}$ puis pendant 1 heure à $30\\,\\text{km/h}$, nous parcourons $120+30=150\\,\\text{km}$ en $3$ heures. La moyenne des deux vitesses donnerait $45\\,\\text{km/h}$, mais la vitesse moyenne réelle est de $50\\,\\text{km/h}$, car nous avons roulé plus vite pendant la plus longue durée.</p>`,
        { fig: 's1s4-priemerna-rychlost', caption: `L'aire sous le graphe v–t est la distance. La vitesse moyenne est la distance totale divisée par le temps total, et non la moyenne des vitesses.` }
      ],
      examples: [
        { task: `Une voiture parcourt $120\\,\\text{km}$ en $2\\,\\text{h}$. Quelle est sa vitesse moyenne ?`,
          steps: [`$\\bar v=\\frac{s}{t}=\\frac{120\\,\\text{km}}{2\\,\\text{h}}$.`, `<strong>Résultat : 60 km/h</strong>`] },
        { task: `Un cycliste roule pendant $2\\,\\text{h}$ à $20\\,\\text{km/h}$, puis pendant $2\\,\\text{h}$ à $10\\,\\text{km/h}$. Quelle est sa vitesse moyenne ?`,
          steps: [`Premier tronçon : $s_1=20\\cdot 2=40\\,\\text{km}$, deuxième : $s_2=10\\cdot 2=20\\,\\text{km}$.`, `Au total $60\\,\\text{km}$ en $4\\,\\text{h}$.`, `<strong>Résultat : 15 km/h</strong>`] }
      ]
    },

    's1-zrychlenie': {
      title: `Vitesse et accélération`,
      summary: `Variation de la vitesse au cours du temps et mouvement uniformément accéléré.`,
      theory: [
        `<p><strong>L'accélération</strong> est la variation de la vitesse par unité de temps : $a=\\frac{\\Delta v}{\\Delta t}=\\frac{v-v_0}{t}$. Son unité est $\\text{m/s}^2$. Si la vitesse augmente de $2\\,\\text{m/s}$ chaque seconde, l'accélération vaut $2\\,\\text{m/s}^2$.</p>`,
        `<p>L'accélération n'est pas seulement l'augmentation de la vitesse. Un $a$ positif signifie que la vitesse augmente, un $a$ négatif signifie un freinage. Il y a aussi accélération lorsque la direction du mouvement change, même si la valeur de la vitesse reste la même, par exemple lors d'un mouvement sur un cercle.</p>`,
        `<p>Dans le <strong>mouvement uniformément accéléré</strong>, la vitesse augmente proportionnellement au temps : $v=v_0+a\\,t$. La vitesse moyenne est $\\frac{v_0+v}{2}$, donc la distance parcourue est $s=v_0\\,t+\\frac{1}{2}a\\,t^2$. Le terme en $\\frac{1}{2}$ est important, car la vitesse ne cesse de changer pendant le trajet.</p>`,
        `<p>Lors d'une chute libre près de la surface de la Terre, l'accélération est dirigée vers le bas et sa valeur est d'environ $g\\approx 9{,}81\\,\\text{m/s}^2$. Un corps qui tombe sans vitesse initiale augmente sa vitesse d'environ $9{,}81\\,\\text{m/s}$ chaque seconde.</p>`,
        { fig: 's1s4-v-t-zrychlenie', caption: `La pente du graphe v–t est l'accélération, et l'aire sous le graphe est la distance. Dans le mouvement uniformément accéléré, le graphe est une droite.` }
      ],
      examples: [
        { task: `Une voiture passe de l'arrêt à $20\\,\\text{m/s}$ en $5\\,\\text{s}$. Quelle est son accélération ?`,
          steps: [`$a=\\frac{v-v_0}{t}=\\frac{20-0}{5}$.`, `<strong>Résultat : 4 m/s²</strong>`] },
        { task: `Un corps a une vitesse de $2\\,\\text{m/s}$ et une accélération de $3\\,\\text{m/s}^2$. Quelle sera sa vitesse après $4\\,\\text{s}$ ?`,
          steps: [`$v=v_0+a\\,t=2+3\\cdot 4$.`, `<strong>Résultat : 14 m/s</strong>`] }
      ]
    },

    's1-newton': {
      title: `Les lois de Newton du mouvement`,
      summary: `Inertie, relation F = m·a et principe de l'action et de la réaction.`,
      theory: [
        `<p><strong>Première loi de Newton (principe d'inertie) :</strong> un corps reste au repos ou en mouvement rectiligne uniforme tant qu'aucune force n'agit sur lui, ou lorsque la résultante de toutes les forces est nulle. C'est pourquoi, lorsque le bus freine brusquement, les passagers sont projetés vers l'avant : leur corps veut continuer son mouvement.</p>`,
        `<p><strong>Deuxième loi de Newton :</strong> la force résultante communique au corps une accélération directement proportionnelle à la force et inversement proportionnelle à la masse : $F=m\\,a$. L'unité de force est le newton, $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$. Avec la même force, un corps plus lourd démarre plus lentement.</p>`,
        `<p><strong>Troisième loi de Newton (action et réaction) :</strong> si le corps A exerce une force sur le corps B, le corps B exerce sur A une force de même intensité et de sens opposé. Ces forces agissent sur des corps <em>différents</em>, elles ne se soustraient donc jamais. Le cheval tire la charrette, et la charrette tire le cheval en arrière.</p>`,
        `<p><strong>La résultante</strong> de plusieurs forces sur une même droite : les forces de même sens s'additionnent, les forces de sens opposés se soustraient. L'accélération résultante a la direction de la résultante.</p>`,
        { fig: 's1s4-akcia-reakcia', caption: `Les forces d'action et de réaction ont la même intensité et des sens opposés, mais agissent sur des corps différents, c'est pourquoi elles ne se soustraient pas.` }
      ],
      examples: [
        { task: `Un corps de masse $4\\,\\text{kg}$ se déplace avec une accélération de $3\\,\\text{m/s}^2$. Quelle est la force résultante qui agit sur lui ?`,
          steps: [`$F=m\\,a=4\\cdot 3$.`, `<strong>Résultat : 12 N</strong>`] },
        { task: `Deux forces de $7\\,\\text{N}$ et $3\\,\\text{N}$ agissent sur un corps dans des sens opposés. Quelle est leur résultante ?`,
          steps: [`Les forces ont des sens opposés, on les soustrait : $7-3=4$.`, `<strong>Résultat : 4 N dans le sens de la plus grande force</strong>`] }
      ]
    },

    's1-gravitacia': {
      title: `Force gravitationnelle et poids`,
      summary: `Masse et poids, accélération de la pesanteur sur la Terre et sur la Lune.`,
      theory: [
        `<p><strong>La force gravitationnelle</strong> est une force d'attraction entre tous les corps. Plus les corps sont lourds et proches, plus elle est grande. Pour les corps situés à la surface de la Terre, nous l'observons sous forme de <strong>poids</strong>.</p>`,
        `<p><strong>Le poids</strong> est la force avec laquelle la Terre attire un corps : $F_g=m\\,g$, où $g\\approx 9{,}81\\,\\text{m/s}^2$ est l'accélération de la pesanteur. La masse $m$ en kilogrammes est une propriété du corps et ne change pas. Le poids en newtons dépend du lieu : sur la Lune, où $g\\approx 1{,}62\\,\\text{m/s}^2$, il est environ six fois plus petit.</p>`,
        `<p><strong>Pourquoi tous les corps tombent-ils à la même vitesse ?</strong> Le poids est proportionnel à la masse, de même que l'inertie. L'accélération $a=\\frac{F_g}{m}=g$ ne dépend donc pas de la masse. Lors d'une chute sans résistance de l'air, une pierre et un grain de pollen tombent à la même vitesse.</p>`,
        `<p>Ne confonds pas ces notions : la <strong>masse</strong> se mesure en kilogrammes et représente la quantité de matière du corps, le <strong>poids</strong> est une force et se mesure en newtons.</p>`,
        { fig: 's1s4-tiaz-zem-mesiac', caption: `Une même masse a sur la Lune un poids environ six fois plus petit, car l'accélération de la pesanteur y est plus faible.` }
      ],
      examples: [
        { task: `Quel est le poids d'un corps de masse $5\\,\\text{kg}$ sur la Terre ?`,
          steps: [`$F_g=m\\,g=5\\cdot 9{,}81$.`, `<strong>Résultat : environ 49,1 N</strong>`] },
        { task: `Quel est le poids de ce même corps sur la Lune, où $g\\approx 1{,}62\\,\\text{m/s}^2$ ? Quelle est sa masse ?`,
          steps: [`$F_g=5\\cdot 1{,}62=8{,}1\\,\\text{N}$.`, `La masse ne change pas, elle reste $5\\,\\text{kg}$.`, `<strong>Résultat : 8,1 N, masse 5 kg</strong>`] }
      ]
    },

    's1-praca-energia': {
      title: `Travail, puissance et énergie`,
      summary: `Travail mécanique, puissance et énergie cinétique d'un corps.`,
      theory: [
        `<p><strong>Le travail mécanique</strong> est l'énergie transmise par une force lors du déplacement d'un corps. Si la force a la direction du mouvement, on calcule $W=F\\,s$. L'unité est le joule, $1\\,\\text{J}=1\\,\\text{N}\\cdot\\text{m}$. On peut effectuer le même travail avec une grande force sur une courte distance ou avec une petite force sur une longue distance.</p>`,
        `<p><strong>La puissance</strong> indique la rapidité avec laquelle le travail est effectué : $P=\\frac{W}{t}$. L'unité est le watt, $1\\,\\text{W}=1\\,\\text{J/s}$. Deux moteurs peuvent effectuer le même travail, mais celui qui a la plus grande puissance le fait en moins de temps.</p>`,
        `<p><strong>L'énergie cinétique</strong> est l'énergie du mouvement : $E_k=\\frac{1}{2}m\\,v^2$. Elle dépend du carré de la vitesse : une vitesse double signifie une énergie quadruplée. C'est pourquoi la distance de freinage d'une voiture est nettement plus longue à grande vitesse.</p>`,
        `<p>Travail et énergie sont liés : le travail effectué sur un corps se transforme en variation de son énergie. Si $W$ est positif, l'énergie du corps augmente.</p>`,
        { fig: 'obr-energia', caption: `Lors d'un glissement sans frottement, l'énergie potentielle se transforme en énergie cinétique et inversement.` }
      ],
      examples: [
        { task: `Une force de $50\\,\\text{N}$ déplace un chariot de $4\\,\\text{m}$ dans le sens de la force. Quel travail effectue-t-elle ?`,
          steps: [`$W=F\\,s=50\\cdot 4$.`, `<strong>Résultat : 200 J</strong>`] },
        { task: `Un corps de masse $2\\,\\text{kg}$ se déplace à la vitesse de $3\\,\\text{m/s}$. Quelle est son énergie cinétique ?`,
          steps: [`$E_k=\\frac{1}{2}\\cdot 2\\cdot 3^2=9$.`, `<strong>Résultat : 9 J</strong>`] }
      ]
    },

    's1-zakony-zachovania': {
      title: `Lois de conservation de l'énergie et de la quantité de mouvement`,
      summary: `Quantité de mouvement d'un corps et transformation de l'énergie potentielle en énergie cinétique.`,
      theory: [
        `<p><strong>La quantité de mouvement</strong> d'un corps est le produit de sa masse et de sa vitesse : $p=m\\,v$, unité $\\text{kg\\,m/s}$. C'est un vecteur, elle a donc la direction de la vitesse. Un corps plus lourd à la même vitesse a une plus grande quantité de mouvement, il est donc plus difficile à arrêter.</p>`,
        `<p><strong>Loi de conservation de la quantité de mouvement :</strong> si aucune force extérieure n'agit sur un système, la somme des quantités de mouvement des corps qui le composent ne change pas. Deux patineurs qui se poussent se déplacent dans des sens opposés. Le patineur le plus léger obtient une plus grande vitesse, car la somme de leurs quantités de mouvement doit rester nulle.</p>`,
        `<p><strong>Loi de conservation de l'énergie mécanique :</strong> si ni le frottement ni la résistance du milieu n'agissent, la somme de l'énergie cinétique et de l'énergie potentielle $E_k+E_p$ reste constante. Lors d'une chute libre, l'énergie potentielle $E_p=m\\,g\\,h$ se transforme en énergie cinétique $\\frac{1}{2}m\\,v^2$. On en tire $v=\\sqrt{2gh}$ : la vitesse ne dépend pas de la masse.</p>`,
        `<p>En réalité, le frottement et la résistance de l'air transforment une partie de l'énergie mécanique en chaleur. L'énergie mécanique diminue alors, mais l'énergie totale du système reste conservée.</p>`,
        { fig: 's1s4-hybnost', caption: `La somme des quantités de mouvement du système reste nulle : le corps le plus léger se déplace plus vite, le plus lourd plus lentement.` }
      ],
      examples: [
        { task: `Une balle de masse $0{,}01\\,\\text{kg}$ vole à la vitesse de $500\\,\\text{m/s}$. Quelle est sa quantité de mouvement ?`,
          steps: [`$p=m\\,v=0{,}01\\cdot 500$.`, `<strong>Résultat : 5 kg·m/s</strong>`] },
        { task: `Un corps tombe sans vitesse initiale d'une hauteur de $5\\,\\text{m}$, sans résistance de l'air. À quelle vitesse atteint-il le sol ? Utilise $g=10\\,\\text{m/s}^2$.`,
          steps: [`$m\\,g\\,h=\\frac{1}{2}m\\,v^2$, donc $v^2=2gh=2\\cdot 10\\cdot 5=100$.`, `<strong>Résultat : v = 10 m/s</strong>`] }
      ]
    },

    's1-tlak': {
      title: `Pression, propriétés des liquides et des gaz`,
      summary: `Pression des solides, pression hydrostatique et loi de Pascal.`,
      theory: [
        `<p><strong>La pression</strong> est le quotient de la force perpendiculaire à une surface et de l'aire de cette surface : $p=\\frac{F}{S}$. L'unité est le pascal, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. On appuie plus fort avec une pointe aiguisée, car la même force agit sur une surface plus petite.</p>`,
        `<p><strong>La pression hydrostatique</strong> dans un liquide augmente avec la profondeur : $p=\\rho\\,g\\,h$, où $\\rho$ est la masse volumique du liquide (eau $1000\\,\\text{kg/m}^3$) et $h$ la profondeur sous la surface. Cette pression ne dépend pas de la forme du récipient, seulement de la profondeur et de la masse volumique.</p>`,
        `<p><strong>Loi de Pascal :</strong> la pression exercée sur un liquide enfermé se transmet sans modification à tous les points du liquide. C'est pourquoi un vérin hydraulique peut soulever une voiture : une petite force sur un petit piston crée une pression qui agit sur un grand piston avec une force plus grande.</p>`,
        `<p><strong>Les gaz</strong> exercent une pression par les chocs des molécules contre les parois du récipient. La pression atmosphérique au niveau de la mer vaut environ $101\\,325\\,\\text{Pa}\\approx 100\\,\\text{kPa}$ et diminue avec l'altitude.</p>`,
        { fig: 'obr-tlak', caption: `La pression dans un liquide augmente avec la profondeur : plus on descend, plus la force agit sur la paroi.` }
      ],
      examples: [
        { task: `Un bloc de poids $600\\,\\text{N}$ repose sur un sol dont l'aire de contact est $0{,}5\\,\\text{m}^2$. Quelle pression exerce-t-il ?`,
          steps: [`$p=\\frac{F}{S}=\\frac{600}{0{,}5}$.`, `<strong>Résultat : 1200 Pa</strong>`] },
        { task: `Quelle est la pression hydrostatique de l'eau à une profondeur de $3\\,\\text{m}$ ? Utilise $\\rho=1000\\,\\text{kg/m}^3$ et $g=10\\,\\text{m/s}^2$.`,
          steps: [`$p=\\rho\\,g\\,h=1000\\cdot 10\\cdot 3=30000\\,\\text{Pa}$.`, `<strong>Résultat : 30 kPa</strong>`] }
      ]
    },

    's2-molekuly': {
      title: `Structure moléculaire de la matière`,
      summary: `Particules de la matière, quantité de matière et masse molaire.`,
      theory: [
        `<p>Toute substance est composée de très petites particules : des atomes ou des molécules. Celles-ci sont en mouvement désordonné permanent et exercent les unes sur les autres des forces d'attraction et de répulsion. Ces forces déterminent si la substance est solide, liquide ou gazeuse.</p>`,
        `<p>La preuve du mouvement des molécules est le <strong>mouvement brownien</strong> : de fines particules dispersées dans un liquide tremblent irrégulièrement, car elles sont heurtées de toutes parts par les molécules du liquide. Nous ne voyons pas le mouvement des molécules elles-mêmes, mais nous en voyons les effets.</p>`,
        `<p>La quantité de matière s'exprime en moles. Une mole contient $N_A\\approx 6{,}02\\cdot 10^{23}$ particules (constante d'Avogadro). La <strong>masse molaire</strong> $M$ est la masse d'une mole, en grammes par mole. Par exemple, l'eau a $M=18\\,\\text{g/mol}$ : c'est la masse d'une mole d'eau, soit $6{,}02\\cdot 10^{23}$ molécules.</p>`,
        `<p>Relations : quantité de matière $n=\\frac{m}{M}$ et nombre de particules $N=n\\,N_A$. Ainsi, même une très petite quantité de matière contient un nombre énorme de particules.</p>`,
        { fig: 's1s4-brownov-pohyb', caption: `Mouvement brownien : le grain tremble irrégulièrement, car il est heurté de toutes parts par les molécules du liquide.` }
      ],
      examples: [
        { task: `Combien de moles y a-t-il dans $36\\,\\text{g}$ d'eau, sachant que $M=18\\,\\text{g/mol}$ ?`,
          steps: [`$n=\\frac{m}{M}=\\frac{36}{18}$.`, `<strong>Résultat : 2 mol</strong>`] },
        { task: `Combien de molécules y a-t-il dans $2\\,\\text{mol}$ d'eau ?`,
          steps: [`$N=n\\,N_A=2\\cdot 6{,}02\\cdot 10^{23}$.`, `<strong>Résultat : environ $1{,}2\\cdot 10^{24}$ molécules</strong>`] }
      ]
    },

    's2-teplo': {
      title: `Température, chaleur et énergie interne`,
      summary: `Température, kelvin, énergie interne et chaleur nécessaire au chauffage.`,
      theory: [
        `<p><strong>La température</strong> est une mesure de l'énergie cinétique moyenne du mouvement désordonné des particules. Un corps plus chaud a des particules qui, en moyenne, vont plus vite. L'échelle Celsius a son zéro à la fusion de la glace, l'échelle absolue, en kelvins, a son zéro au zéro absolu. On a $T=t+273{,}15$, la taille du degré étant identique.</p>`,
        `<p><strong>L'énergie interne</strong> $U$ d'un corps est la somme des énergies cinétiques et potentielles de toutes ses particules. Elle varie de deux façons : par le travail (par exemple le frottement) ou par le transfert de chaleur.</p>`,
        `<p><strong>La chaleur</strong> est l'énergie qui passe d'un corps plus chaud à un corps plus froid. La chaleur n'est pas une substance et les corps ne <em>possèdent</em> pas de chaleur. La chaleur nécessaire pour chauffer un corps est $Q=m\\,c\\,\\Delta T$, où $c$ est la capacité thermique massique. L'eau a $c=4200\\,\\text{J/(kg\\,K)}$, l'aluminium $900\\,\\text{J/(kg\\,K)}$. C'est pourquoi l'eau chauffe lentement et conserve longtemps la chaleur.</p>`,
        `<p>La variation de température en kelvins et en degrés Celsius se calcule de la même façon, car $\\Delta T=\\Delta t$. La conversion en température absolue n'est nécessaire que pour une température précise.</p>`,
        { fig: 's1s4-merna-kapacita', caption: `À masse égale et même variation de température, l'eau a besoin de presque cinq fois plus de chaleur que l'aluminium.` }
      ],
      examples: [
        { task: `Quelle quantité de chaleur faut-il pour chauffer $2\\,\\text{kg}$ d'eau de $10\\,\\text{K}$ ? Utilise $c=4200\\,\\text{J/(kg\\,K)}$.`,
          steps: [`$Q=m\\,c\\,\\Delta T=2\\cdot 4200\\cdot 10$.`, `<strong>Résultat : 84 000 J = 84 kJ</strong>`] },
        { task: `Quelle est la température $25\\,{}^\\circ\\text{C}$ en kelvins ?`,
          steps: [`$T=t+273{,}15=25+273{,}15$.`, `<strong>Résultat : 298,15 K</strong>`] }
      ]
    },

    's2-skupenstva': {
      title: `Changements d'état`,
      summary: `Fusion, solidification, vaporisation, condensation et chaleur latente.`,
      theory: [
        `<p>La matière peut être solide, liquide ou gazeuse. Le passage d'un état à un autre nécessite de l'énergie ou en libère. Lors de la fusion et de la vaporisation, la <strong>température ne change pas</strong> : la chaleur fournie sert à affaiblir les liens entre les molécules, et non à augmenter leur vitesse.</p>`,
        `<p><strong>La chaleur latente</strong> est la chaleur nécessaire pour transformer un kilogramme de matière sans changer sa température. Pour la fusion, il s'agit de la chaleur latente massique de fusion $L_t$, pour la vaporisation de $L_v$. Pour la glace $L_t\\approx 334\\,\\text{kJ/kg}$, pour l'eau $L_v\\approx 2260\\,\\text{kJ/kg}$. La chaleur nécessaire pour transformer un corps de masse $m$ est $Q=m\\,L$.</p>`,
        `<p>Lors de la <strong>solidification</strong> et de la <strong>condensation</strong>, les mêmes quantités de chaleur sont libérées. C'est pourquoi la vapeur à $100\\,{}^\\circ\\text{C}$ est plus dangereuse que l'eau de même température : en se condensant sur la peau, elle cède une énorme quantité de chaleur.</p>`,
        `<p>La vaporisation provoque aussi un refroidissement : les molécules les plus rapides quittent la surface, le liquide restant se refroidit. C'est pourquoi nous avons froid après être sortis du bain.</p>`,
        { fig: 's1s4-ohrev-latky', caption: `Lors de la fusion et de la vaporisation, la température reste constante : la chaleur fournie sert à changer l'état, et non à chauffer.` }
      ],
      examples: [
        { task: `Quelle quantité de chaleur faut-il pour faire fondre $2\\,\\text{kg}$ de glace à $0\\,{}^\\circ\\text{C}$ ? Utilise $L_t=334\\,\\text{kJ/kg}$.`,
          steps: [`$Q=m\\,L_t=2\\cdot 334$.`, `<strong>Résultat : 668 kJ</strong>`] },
        { task: `Quelle quantité de chaleur libèrent $0{,}5\\,\\text{kg}$ de vapeur lors de sa condensation en eau à $100\\,{}^\\circ\\text{C}$ ? Utilise $L_v=2260\\,\\text{kJ/kg}$.`,
          steps: [`$Q=m\\,L_v=0{,}5\\cdot 2260$.`, `<strong>Résultat : 1130 kJ</strong>`] }
      ]
    },

    's2-ideal': {
      title: `Gaz parfait et équation d'état`,
      summary: `Modèle du gaz parfait, équation d'état et transformation isotherme.`,
      theory: [
        `<p><strong>Le gaz parfait</strong> est un modèle : les molécules sont de petits points, il n'existe aucune force entre elles, et elles heurtent les parois du récipient et rebondissent élastiquement les unes sur les autres. Les gaz réels à basse pression et haute température se comportent presque comme des gaz parfaits.</p>`,
        `<p><strong>L'équation d'état</strong> du gaz parfait : $p\\,V=n\\,R\\,T$, où $R\\approx 8{,}31\\,\\text{J/(mol\\,K)}$ est la constante molaire des gaz et où la température $T$ s'introduit en kelvins. Si nous augmentons la température dans un récipient fermé, les molécules heurtent les parois plus fort et plus souvent, la pression augmente.</p>`,
        `<p>La <strong>transformation isotherme</strong> se déroule à température constante. Alors $p\\,V=\\text{const.}$, soit $p_1V_1=p_2V_2$ : si la pression double, le volume est divisé par deux. De même, à pression constante le volume est proportionnel à la température, et à volume constant la pression est proportionnelle à la température.</p>`,
        `<p>Dans chaque calcul, il faut veiller aux unités : pression en pascals, volume en mètres cubes et température en kelvins.</p>`,
        { fig: 's1s4-izoterma', caption: `À température constante, le produit p·V est constant : lorsque le volume diminue de moitié, la pression double.` }
      ],
      examples: [
        { task: `À température constante, un gaz occupe un volume de $4\\,\\text{l}$ sous une pression de $200\\,\\text{kPa}$. Quel sera son volume sous une pression de $400\\,\\text{kPa}$ ?`,
          steps: [`$p_1V_1=p_2V_2$, donc $V_2=\\frac{p_1V_1}{p_2}=\\frac{200\\cdot 4}{400}$.`, `<strong>Résultat : 2 l</strong>`] },
        { task: `Quelle pression exerce $1\\,\\text{mol}$ de gaz à $T=300\\,\\text{K}$ pour un volume $V=0{,}025\\,\\text{m}^3$ ? Utilise $R=8{,}31\\,\\text{J/(mol\\,K)}$.`,
          steps: [`$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}31\\cdot 300}{0{,}025}$.`, `<strong>Résultat : 99 720 Pa</strong>`] }
      ]
    },

    's2-termo': {
      title: `Lois de la thermodynamique et moteurs thermiques`,
      summary: `Premier principe de la thermodynamique, second principe et rendement d'un moteur thermique.`,
      theory: [
        `<p><strong>Le premier principe de la thermodynamique</strong> est la loi de conservation de l'énergie appliquée aux phénomènes thermiques : $\\Delta U=Q-A$. La variation de l'énergie interne $\\Delta U$ est égale à la chaleur $Q$ fournie au système moins le travail $A$ que le système fournit à l'extérieur. Si un gaz se dilate et effectue un travail, son énergie interne diminue, à moins qu'on ne lui fournisse suffisamment de chaleur.</p>`,
        `<p><strong>Le second principe de la thermodynamique</strong> affirme que la chaleur passe spontanément d'un corps plus chaud à un corps plus froid, et non l'inverse. Il en découle qu'aucun moteur thermique ne peut transformer toute la chaleur en travail. Une partie de la chaleur doit être cédée au refroidisseur.</p>`,
        `<p><strong>Le moteur thermique</strong> reçoit de la source chaude la chaleur $Q_1$, transforme une partie en travail $A$ et cède le reste $Q_2$ au refroidisseur. Le <strong>rendement</strong> est $\\eta=\\frac{A}{Q_1}=1-\\frac{Q_2}{Q_1}$. Il est toujours inférieur à 1, donc inférieur à 100 %.</p>`,
        `<p>Le cycle de Carnot idéal a le rendement maximal possible : $\\eta_{\\max}=1-\\frac{T_2}{T_1}$, où les températures $T_1$ de la source chaude et $T_2$ du refroidisseur sont exprimées en kelvins. C'est pourquoi les moteurs progressent en augmentant la température de la source chaude.</p>`,
        { fig: 's1s4-tepelny-motor', caption: `Le moteur reçoit la chaleur Q₁ de la source chaude, transforme une partie en travail A et cède le reste Q₂ au refroidisseur. Le rendement A/Q₁ est inférieur à 1.` }
      ],
      examples: [
        { task: `Un gaz reçoit une chaleur de $300\\,\\text{J}$ et effectue un travail de $120\\,\\text{J}$. Quelle est la variation de son énergie interne ?`,
          steps: [`$\\Delta U=Q-A=300-120$.`, `<strong>Résultat : 180 J (l'énergie interne a augmenté)</strong>`] },
        { task: `Un moteur reçoit $1000\\,\\text{J}$ de la source chaude et effectue un travail de $250\\,\\text{J}$. Quel est son rendement ?`,
          steps: [`$\\eta=\\frac{A}{Q_1}=\\frac{250}{1000}=0{,}25$.`, `<strong>Résultat : 25 %</strong>`] }
      ]
    },

    's2-kmitanie': {
      title: `Oscillations mécaniques et résonance`,
      summary: `Période, fréquence, pendule et résonance.`,
      theory: [
        `<p><strong>Le mouvement oscillatoire</strong> est un mouvement autour d'une position d'équilibre qui se répète périodiquement. Exemples : un poids suspendu à un ressort ou un pendule. La <strong>période</strong> $T$ est la durée d'une oscillation, la <strong>fréquence</strong> $f$ est le nombre d'oscillations par seconde : $f=\\frac{1}{T}=\\frac{n}{t}$. L'unité de fréquence est le hertz, $1\\,\\text{Hz}=1\\,\\text{s}^{-1}$.</p>`,
        `<p><strong>L'oscillation harmonique</strong> a une élongation $y=A\\sin(\\omega t)$, où $A$ est l'amplitude et $\\omega=2\\pi f$ la pulsation. Un profil sinusoïdal apparaît pour un ressort dont la force est directement proportionnelle à l'élongation.</p>`,
        `<p>La période dépend des propriétés du système oscillant. Pour un ressort, $T=2\\pi\\sqrt{\\frac{m}{k}}$ : un poids plus lourd oscille plus lentement, un ressort plus raide oscille plus vite. Pour un pendule simple, $T=2\\pi\\sqrt{\\frac{l}{g}}$, où $l$ est la longueur du fil (pour de petites oscillations).</p>`,
        `<p><strong>La résonance</strong> se produit lorsqu'une force périodique extérieure oscille à la fréquence propre du corps. Chaque impulsion s'ajoute à l'oscillation précédente et l'amplitude augmente. C'est pourquoi une balançoire prend de l'ampleur lorsqu'on la pousse au rythme de son balancement.</p>`,
        { fig: 's1s4-kmitanie', caption: `Oscillation harmonique : l'amplitude A est la plus grande élongation, la période T est la durée d'une oscillation.` }
      ],
      examples: [
        { task: `Un poids effectue $40$ oscillations en $20\\,\\text{s}$. Quelles sont sa période et sa fréquence ?`,
          steps: [`$T=\\frac{t}{n}=\\frac{20}{40}=0{,}5\\,\\text{s}$.`, `$f=\\frac{1}{T}=\\frac{1}{0{,}5}$.`, `<strong>Résultat : T = 0,5 s, f = 2 Hz</strong>`] },
        { task: `Un corps oscille à la fréquence de $5\\,\\text{Hz}$. Quelle est sa période ?`,
          steps: [`$T=\\frac{1}{f}=\\frac{1}{5}$.`, `<strong>Résultat : 0,2 s</strong>`] }
      ]
    },

    's2-vlnenie': {
      title: `Ondes mécaniques et son`,
      summary: `Longueur d'onde, vitesse de propagation de l'onde et son considéré comme onde mécanique.`,
      theory: [
        `<p><strong>Une onde</strong> est la propagation d'oscillations dans un milieu. Elle transporte de l'énergie et la forme de l'onde, mais les particules du milieu ne font qu'osciller autour de leurs positions d'équilibre. Une onde mécanique a besoin d'un milieu matériel, c'est pourquoi le son ne s'entend pas dans le vide.</p>`,
        `<p>La longueur d'onde $\\lambda$ est la distance entre deux points les plus proches ayant la même phase, par exemple deux crêtes. Pendant une période $T$, l'onde avance de $\\lambda$, donc pour la vitesse de propagation on a $v=\\frac{\\lambda}{T}=\\lambda\\,f$.</p>`,
        `<p><strong>Le son</strong> est une onde mécanique longitudinale. L'être humain entend des fréquences d'environ $20\\,\\text{Hz}$ à $20\\,\\text{kHz}$. La hauteur du son dépend de la fréquence, l'intensité sonore de l'amplitude. Dans l'air sec à $20\\,{}^\\circ\\text{C}$, le son se propage à environ $340\\,\\text{m/s}$, plus vite dans l'eau et dans l'acier.</p>`,
        `<p><strong>L'écho</strong> apparaît lorsque le son se réfléchit sur un obstacle. Le son parcourt l'aller et le retour, donc la distance de l'obstacle est $s=\\frac{v\\,t}{2}$, où $t$ est le temps écoulé entre l'émission du son et son retour.</p>`,
        { fig: 'obr-vlna', caption: `Onde transversale : la longueur d'onde λ est la distance entre deux points voisins en phase.` }
      ],
      examples: [
        { task: `Une onde de fréquence $50\\,\\text{Hz}$ a une longueur d'onde de $4\\,\\text{m}$. À quelle vitesse se propage-t-elle ?`,
          steps: [`$v=\\lambda\\,f=4\\cdot 50$.`, `<strong>Résultat : 200 m/s</strong>`] },
        { task: `Un écho revient $2\\,\\text{s}$ après l'émission du son. À quelle distance se trouve l'obstacle ? Utilise $v=340\\,\\text{m/s}$.`,
          steps: [`$2s=v\\,t=340\\cdot 2=680\\,\\text{m}$.`, `<strong>Résultat : $s=340\\,\\text{m}$</strong>`] }
      ]
    },

    's3-naboj': {
      title: `Charge électrique et champ électrique`,
      summary: `Les charges s'attirent et se repoussent ; champ autour d'une charge ponctuelle et son intensité.`,
      theory: [
        `<p>La charge électrique $Q$ est une propriété des corps. Elle se mesure en coulombs ($\\text{C}$). Des charges de même signe se <strong>repoussent</strong>, des charges de signes opposés s'<strong>attirent</strong>. La plus petite charge dans la nature est celle de l'électron, $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$.</p>`,
        `<p>Le <strong>champ électrique</strong> est l'espace entourant un corps chargé, qui exerce une force sur une autre charge. Nous décrivons sa force par l'<em>intensité</em> $E = \\frac{F}{q}$ : la force exercée par le champ sur une petite charge positive $q$, divisée par cette charge. L'unité est $\\text{N/C}$, ce qui équivaut à $\\text{V/m}$.</p>`,
        `<p>Pour une charge ponctuelle $Q$ à la distance $r$, on a $E = k\\frac{Q}{r^2}$, où $k \\approx 9\\cdot 10^{9}\\,\\text{N·m}^2/\\text{C}^2$. L'intensité diminue avec le <strong>carré</strong> de la distance : à double distance, le champ est quatre fois plus faible. C'est pourquoi le champ s'affaiblit rapidement avec la distance.</p>`,
        `<ol><li>Note la charge et la distance et exprime-les en unités SI (nC = $10^{-9}$ C, cm = $10^{-2}$ m).</li><li>Substitue dans $E = k\\frac{Q}{r^2}$.</li><li>Écris le résultat en $\\text{N/C}$.</li></ol>`,
        { fig: 's1s4-pole-naboja', caption: `L'intensité du champ d'une charge ponctuelle diminue avec le carré de la distance : à double distance, elle est quatre fois plus faible.` }
      ],
      examples: [
        { task: `Une charge ponctuelle $Q = 2\\,\\text{nC}$ crée un champ. Quelle est l'intensité du champ à la distance $r = 0{,}5\\,\\text{m}$ ?`,
          steps: [`Exprime la charge : $Q = 2\\cdot 10^{-9}\\,\\text{C}$.`,
            `$E = 9\\cdot 10^{9}\\cdot\\frac{2\\cdot 10^{-9}}{0{,}25}=72\\,\\text{N/C}$.`,
            `<strong>Résultat : $E = 72\\,\\text{N/C}$.</strong>`] },
        { task: `Comment change l'intensité du champ si nous doublons la distance à la charge ?`,
          steps: [`Dans la formule figure $r^2$, donc à $2r$ le dénominateur est quadruplé.`, `<strong>L'intensité tombe au quart.</strong>`] }
      ]
    },

    's3-prud-napatie': {
      title: `Courant électrique, tension et résistance`,
      summary: `Le courant est la charge par unité de temps, la tension est le travail par charge, la résistance freine le déplacement des charges.`,
      theory: [
        `<p><strong>Le courant électrique</strong> $I$ est la charge qui traverse la section d'un conducteur par unité de temps : $I = \\frac{Q}{t}$. L'unité est l'ampère ($\\text{A}$). Le courant ne circule que si les charges peuvent se déplacer et si une force agit sur elles.</p>`,
        `<p><strong>La tension électrique</strong> $U$ indique le travail $W$ que fournit le champ lors du transfert de la charge $Q$ : $U = \\frac{W}{Q}$. L'unité est le volt ($\\text{V}$). La tension est ce qui « pousse » les charges dans le circuit.</p>`,
        `<p><strong>La résistance électrique</strong> $R$ est la capacité d'un conducteur à freiner le déplacement des charges. L'unité est l'ohm ($\\Omega$). La résistance dépend du matériau, de la longueur et de la section du conducteur, ainsi que de la température : un conducteur plus long et plus fin a une plus grande résistance.</p>`,
        `<p>Pourquoi le courant est-il limité ? La tension met les charges en mouvement, mais les chocs avec les atomes du conducteur les freinent. Il en résulte un courant stable qui dépend à la fois de la tension et de la résistance.</p>`,
        { fig: 's1s4-jednoduchy-obvod', caption: `Le courant circule du pôle positif de la source à travers la résistance jusqu'au pôle négatif. La tension U est aux bornes de la source.` }
      ],
      examples: [
        { task: `Une charge de 12 C traverse un conducteur en 4 s. Quel est le courant ?`,
          steps: [`On applique la relation $I = \\frac{Q}{t}$.`, `$I = \\frac{12\\,\\text{C}}{4\\,\\text{s}} = 3\\,\\text{A}$.`, `<strong>Résultat : le courant est de 3 A.</strong>`] },
        { task: `Lors du transfert d'une charge de 5 C, le champ effectue un travail de 30 J. Quelle est la tension ?`,
          steps: [`$U = \\frac{W}{Q}$.`, `$U = \\frac{30\\,\\text{J}}{5\\,\\text{C}} = 6\\,\\text{V}$.`, `<strong>Résultat : la tension est de 6 V.</strong>`] }
      ]
    },

    's3-ohm': {
      title: `Loi d'Ohm et circuits électriques`,
      summary: `Courant, tension et résistance ; montage des résistances en série et en parallèle.`,
      theory: [
        `<p><strong>La loi d'Ohm</strong> énonce que le courant dans un conducteur est directement proportionnel à la tension et inversement proportionnel à la résistance : $I = \\frac{U}{R}$, soit $U = R\\,I$ et $R = \\frac{U}{I}$. Elle s'applique aux conducteurs métalliques à température constante.</p>`,
        `<p><strong>Montage en série</strong> : les récepteurs sont branchés les uns après les autres, ils sont traversés par le même courant et les tensions s'additionnent : $U = U_1 + U_2$, résistances $R = R_1 + R_2$. Si un récepteur cesse de fonctionner, tout le circuit est coupé.</p>`,
        `<p><strong>Montage en parallèle</strong> : les récepteurs sont côte à côte, chacun est soumis à la même tension et les courants s'additionnent : $I = I_1 + I_2$ et $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. La résistance totale est plus petite que la plus petite des branches. C'est pourquoi les appareils ménagers sont branchés en parallèle : chacun reçoit la pleine tension, et si l'un d'eux s'éteint, les autres continuent de fonctionner.</p>`,
        `<p>Pour résoudre un circuit, détermine d'abord quelles parties sont en série et lesquelles sont en parallèle, puis remplace le montage par une seule résistance et applique la loi d'Ohm.</p>`,
        { fig: 'obr-ohm', caption: `À résistance constante, le graphe de la tension en fonction du courant est une droite passant par l'origine.` }
      ],
      examples: [
        { task: `Une résistance de $6\\,\\Omega$ est branchée sur une tension de 12 V. Quel courant la traverse ?`,
          steps: [`$I = \\frac{U}{R} = \\frac{12\\,\\text{V}}{6\\,\\Omega}$.`, `<strong>Résultat : I = 2 A.</strong>`] },
        { task: `Deux résistances de $4\\,\\Omega$ sont branchées en parallèle. Quelle est la résistance totale ?`,
          steps: [`$\\frac{1}{R}=\\frac{1}{4}+\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$.`, `<strong>Résultat : R = 2 Ω.</strong>`] }
      ]
    },

    's3-praca-vykon': {
      title: `Travail et puissance électriques`,
      summary: `Puissance d'un appareil, énergie en joules et en kilowattheures.`,
      theory: [
        `<p><strong>La puissance électrique</strong> $P$ indique la vitesse à laquelle un appareil transforme l'énergie électrique : $P = U\\,I = \\frac{W}{t}$. L'unité est le watt ($\\text{W}$), avec $1\\,\\text{W} = 1\\,\\text{J/s}$.</p>`,
        `<p><strong>Le travail électrique</strong> (l'énergie) $W$ pendant le temps $t$ est $W = P\\,t = U\\,I\\,t$. L'unité est le joule ($\\text{J}$). Sur la facture d'électricité on utilise le kilowattheure : $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<p>Pourquoi cela est-il vrai : la tension indique l'énergie par coulomb, et le courant indique le nombre de coulombs qui passent par seconde. Leur produit est l'énergie par seconde, c'est-à-dire la puissance.</p>`,
        `<p>La plaque signalétique de l'appareil indique la puissance (par exemple 2000 W). Pour connaître l'énergie, on multiplie la puissance en kilowatts par la durée en heures.</p>`
      ],
      examples: [
        { task: `Une ampoule est branchée sur une tension de 230 V et la traverse un courant de 0,5 A. Quelle est sa puissance ?`,
          steps: [`$P = U\\,I = 230\\,\\text{V}\\cdot 0{,}5\\,\\text{A}$.`, `<strong>Résultat : P = 115 W.</strong>`] },
        { task: `Un sèche-cheveux de puissance 1,5 kW fonctionne pendant 2 heures. Quelle énergie en kWh consomme-t-il ?`,
          steps: [`$W = P\\,t = 1{,}5\\,\\text{kW}\\cdot 2\\,\\text{h}$.`, `<strong>Résultat : 3 kWh.</strong>`] }
      ]
    },

    's3-magnetizmus': {
      title: `Champ magnétique et induction électromagnétique`,
      summary: `Champ magnétique d'un conducteur et d'une bobine, tension induite lors d'une variation du flux magnétique.`,
      theory: [
        `<p><strong>Le champ magnétique</strong> apparaît autour des aimants et autour d'un conducteur parcouru par un courant. Sa direction est indiquée par les lignes de champ, qui sortent du pôle nord et entrent dans le pôle sud. L'induction magnétique $B$ se mesure en teslas ($\\text{T}$).</p>`,
        `<p>Un long conducteur rectiligne parcouru par le courant $I$ crée à la distance $r$ le champ $B = \\frac{\\mu_0 I}{2\\pi r}$. À l'intérieur d'une <strong>bobine</strong> de $N$ spires sur une longueur $l$, le champ est à peu près uniforme : $B = \\mu_0\\frac{N}{l}I$, où $\\mu_0 \\approx 1{,}26\\cdot 10^{-6}\\,\\text{T·m/A}$.</p>`,
        `<p><strong>Induction électromagnétique :</strong> si le flux magnétique à travers une boucle fermée de conducteur varie, une tension apparaît dans cette boucle. Selon la loi de Lenz, le courant induit a un sens tel qu'il s'oppose à la variation qui l'a produit. C'est pourquoi une bobine résiste au mouvement lorsqu'on approche un aimant.</p>`,
        `<p>Pourquoi cela est-il vrai : la variation du champ magnétique exerce une force sur les charges libres du conducteur, qui se mettent alors en mouvement. Si le courant induit renforçait la variation, de l'énergie apparaîtrait à partir de rien, ce qui contredit la loi de conservation de l'énergie.</p>`,
        { fig: 'obr-magnet-vodic', caption: `Autour d'un conducteur parcouru par un courant, le champ magnétique forme des cercles concentriques autour du conducteur.` }
      ],
      examples: [
        { task: `Une bobine comporte 500 spires sur une longueur de 0,25 m et est parcourue par un courant de 2 A. Quelle est l'induction à l'intérieur ?`,
          steps: [`$\\frac{N}{l}=\\frac{500}{0{,}25}=2000\\,\\text{m}^{-1}$.`,
            `$B = \\mu_0\\frac{N}{l}I \\approx 1{,}26\\cdot 10^{-6}\\cdot 2000\\cdot 2 \\approx 5{,}0\\cdot 10^{-3}\\,\\text{T}$.`,
            `<strong>Résultat : B ≈ 5,0 mT.</strong>`] },
        { task: `Un conducteur rectiligne est parcouru par un courant de 4 A. Quelle est l'induction à 0,2 m du conducteur ?`,
          steps: [`$B = \\frac{\\mu_0 I}{2\\pi r}=\\frac{1{,}26\\cdot 10^{-6}\\cdot 4}{2\\pi\\cdot 0{,}2}$.`, `<strong>Résultat : B ≈ 4,0·10⁻⁶ T.</strong>`] }
      ]
    },

    's3-transformator': {
      title: `Moteurs électriques, générateurs et transformateurs`,
      summary: `Le moteur transforme l'électricité en mouvement, le générateur fait l'inverse ; le transformateur modifie la tension.`,
      theory: [
        `<p><strong>Le moteur électrique</strong> transforme l'énergie électrique en énergie mécanique. Une force s'exerce sur un conducteur parcouru par un courant placé dans un champ magnétique. Si le conducteur est enroulé en bobine, la force la fait tourner, et la bobine devient le rotor du moteur.</p>`,
        `<p><strong>Le générateur</strong> est l'inverse du moteur : en faisant tourner une bobine dans un champ magnétique, on fait varier périodiquement le flux magnétique et une tension alternative est induite dans la bobine.</p>`,
        `<p><strong>Le transformateur</strong> modifie la tension du courant alternatif. Pour un transformateur idéal, on a $\\frac{U_1}{U_2}=\\frac{N_1}{N_2}$, où $N_1$ et $N_2$ sont les nombres de spires des enroulements primaire et secondaire. Si l'enroulement secondaire a plus de spires, la tension augmente ; s'il en a moins, la tension diminue.</p>`,
        `<p>Pourquoi la tension est-elle élevée pour le transport : à puissance $P = U\\,I$ égale, une tension plus élevée donne un courant plus faible, et donc de moindres pertes thermiques dans les lignes. C'est pourquoi l'électricité est transportée à haute tension puis abaissée sur le lieu de consommation.</p>`,
        { fig: 's1s4-transformator', caption: `Transformateur idéal : les tensions varient dans le rapport du nombre de spires, U₁/U₂ = N₁/N₂.` }
      ],
      examples: [
        { task: `Un transformateur a 200 spires au primaire et 1000 au secondaire. Quelle est la tension au secondaire si le primaire est alimenté en 230 V ?`,
          steps: [`$\\frac{U_2}{U_1}=\\frac{N_2}{N_1}=\\frac{1000}{200}=5$.`, `$U_2 = 5\\cdot 230\\,\\text{V}=1150\\,\\text{V}$.`, `<strong>Résultat : 1150 V (le transformateur élève la tension).</strong>`] },
        { task: `Un transformateur abaisse la tension de 230 V à 23 V. Combien de spires comporte l'enroulement secondaire si le primaire en compte 1000 ?`,
          steps: [`$\\frac{N_2}{N_1}=\\frac{U_2}{U_1}=\\frac{23}{230}=\\frac{1}{10}$.`, `$N_2 = \\frac{1000}{10}=100$.`, `<strong>Résultat : 100 spires.</strong>`] }
      ]
    },

    's3-striedavy': {
      title: `Courant alternatif`,
      summary: `Tension sinusoïdale, période, fréquence et valeur efficace sur le secteur.`,
      theory: [
        `<p><strong>Le courant alternatif</strong> change périodiquement de sens et d'intensité. La tension varie dans le temps de façon sinusoïdale : $u = U_{max}\\sin(\\omega t)$, où $U_{max}$ est l'amplitude et $\\omega = 2\\pi f$ la pulsation.</p>`,
        `<p>La durée d'une période est $T = \\frac{1}{f}$. Dans le réseau public la fréquence est $f = 50\\,\\text{Hz}$, donc la période est $T = 0{,}02\\,\\text{s}$. En une seconde, la tension se répète 50 fois.</p>`,
        `<p><strong>La valeur efficace</strong> est la valeur de la tension continue qui produirait dans un récepteur le même effet thermique. Pour une tension sinusoïdale, $U_{ef} = \\frac{U_{max}}{\\sqrt{2}}$, donc $U_{max} = U_{ef}\\sqrt{2}$. Un réseau de tension efficace 230 V a une amplitude d'environ $325\\,\\text{V}$.</p>`,
        `<p>Pourquoi utiliser les valeurs efficaces : les appareils (ampoule, sèche-cheveux) réagissent à la puissance moyenne, et non aux pointes. C'est pourquoi les plaques signalétiques et les voltmètres indiquent précisément les valeurs efficaces.</p>`,
        { fig: 's1s4-striedavy-prud', caption: `Tension sinusoïdale : la valeur efficace est l'amplitude divisée par √2. La période est T = 1/f, à 50 Hz elle vaut 0,02 s.` }
      ],
      examples: [
        { task: `La tension efficace du secteur est de 230 V. Quelle est l'amplitude de la tension ?`,
          steps: [`$U_{max}=U_{ef}\\sqrt{2}=230\\cdot 1{,}414\\approx 325\\,\\text{V}$.`, `<strong>Résultat : environ 325 V.</strong>`] },
        { task: `Le secteur a une fréquence de 50 Hz. Quelle est sa période ?`,
          steps: [`$T=\\frac{1}{f}=\\frac{1}{50}\\,\\text{s}$.`, `<strong>Résultat : T = 0,02 s.</strong>`] }
      ]
    },

    's3-odraz-lom': {
      title: `Réflexion et réfraction de la lumière`,
      summary: `Loi de la réflexion, indice de réfraction et loi de Snell lors du passage entre deux milieux.`,
      theory: [
        `<p><strong>La réflexion de la lumière</strong> : l'angle d'incidence est égal à l'angle de réflexion. Les deux angles se mesurent par rapport à la <em>normale</em> à la surface de séparation, et non par rapport à la surface. Si un rayon arrive sur un miroir sous un angle de 30° par rapport à la surface, l'angle d'incidence mesuré par rapport à la normale est $60^\\circ$.</p>`,
        `<p><strong>La réfraction de la lumière</strong> : lors du passage dans un autre milieu, la vitesse de la lumière change et le rayon se réfracte. L'indice de réfraction est $n = \\frac{c}{v}$, où $c = 3\\cdot 10^{8}\\,\\text{m/s}$ est la vitesse de la lumière dans le vide et $v$ la vitesse dans le matériau. Un indice plus grand signifie une lumière plus lente.</p>`,
        `<p><strong>La loi de Snell</strong> : $n_1\\sin\\alpha = n_2\\sin\\beta$, où $\\alpha$ est l'angle d'incidence et $\\beta$ l'angle de réfraction, mesurés tous deux par rapport à la normale. Si $n_2 > n_1$, le rayon se rapproche de la normale, donc $\\beta < \\alpha$.</p>`,
        `<p>Pourquoi le rayon se réfracte-t-il : le front d'onde ralentit d'abord d'un côté dans le milieu plus lent, avant l'autre côté, ce qui modifie la direction de propagation. En incidence normale, la direction ne change pas.</p>`,
        { fig: 'obr-odraz', caption: `Lors de la réflexion de la lumière sur un miroir plan, la loi de la réflexion s'applique.` }
      ],
      examples: [
        { task: `La lumière passe de l'air dans du verre d'indice de réfraction $n = 1{,}5$. Quelle est la vitesse de la lumière dans le verre ?`,
          steps: [`$n=\\frac{c}{v}$, donc $v=\\frac{c}{n}$.`, `$v=\\frac{3\\cdot 10^{8}}{1{,}5}=2\\cdot 10^{8}\\,\\text{m/s}$.`, `<strong>Résultat : 2·10⁸ m/s.</strong>`] },
        { task: `Un rayon arrive perpendiculairement sur la surface de séparation. Quel est l'angle de réfraction ?`,
          steps: [`Une incidence normale signifie $\\alpha=0^\\circ$, donc $\\sin\\alpha=0$.`, `$n_1\\cdot 0 = n_2\\sin\\beta$, donc $\\sin\\beta = 0$.`, `<strong>Résultat : $\\beta = 0^\\circ$, le rayon ne change pas de direction.</strong>`] }
      ]
    },

    's3-sosovky': {
      title: `Miroirs, lentilles et formation des images`,
      summary: `Équation de conjugaison de la lentille mince, distance de l'image et grandissement.`,
      theory: [
        `<p><strong>La distance focale</strong> $f$ est la distance entre le foyer et le centre de la lentille (ou le sommet du miroir). Une lentille convergente a une distance focale positive : elle concentre les rayons en son foyer.</p>`,
        `<p><strong>L'équation de conjugaison de la lentille mince</strong> : $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$, où $a$ est la distance de l'objet et $b$ la distance de l'image. Si l'objet est plus loin que le double de la distance focale, l'image est réelle, réduite et renversée.</p>`,
        `<p><strong>Le grandissement</strong> indique combien de fois l'image est plus grande ou plus petite que l'objet : $|k| = \\frac{b}{a}$. Si $|k| < 1$, l'image est réduite ; si $|k| > 1$, elle est agrandie.</p>`,
        `<p><strong>Le miroir plan</strong> produit une image virtuelle de même taille que l'objet, située à la même distance derrière le miroir. L'équation de conjugaison peut aussi s'appliquer aux miroirs sphériques, avec une convention de signes différente pour les distances.</p>`,
        `<p>Pourquoi cela est-il vrai : les rayons issus d'un point de l'objet convergent après la lentille en un point de l'image, et les triangles semblables formés par ces rayons donnent les relations ci-dessus.</p>`,
        { fig: 's1s4-sosovka-2f', caption: `Un objet placé à la double distance focale donne, de l'autre côté de la lentille, une image réelle, renversée et de même taille.` }
      ],
      examples: [
        { task: `L'objet est à 30 cm devant une lentille convergente de distance focale 10 cm. À quelle distance se forme l'image ?`,
          steps: [`$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{10}-\\frac{1}{30}=\\frac{2}{30}=\\frac{1}{15}$.`, `$b = 15\\,\\text{cm}$.`, `<strong>Résultat : l'image se forme à 15 cm derrière la lentille.</strong>`] },
        { task: `L'objet est à 30 cm devant la lentille et l'image est à 15 cm derrière. De combien de fois l'image est-elle plus petite ?`,
          steps: [`$|k| = \\frac{b}{a} = \\frac{15}{30}$.`, `<strong>Résultat : |k| = 0,5, l'image est réduite de moitié.</strong>`] }
      ]
    },

    's4-interferencia': {
      title: `Nature ondulatoire de la lumière : interférence et diffraction`,
      summary: `Superposition des ondes, franges claires et sombres aux deux fentes et diffraction de l'onde autour d'un obstacle.`,
      theory: [
        `<p>La lumière a des propriétés ondulatoires. La lumière visible a une longueur d'onde $\\lambda$ comprise à peu près entre $380\\,\\text{nm}$ et $750\\,\\text{nm}$. Les ondes peuvent se <strong>superposer</strong>, et ce phénomène s'appelle l'interférence.</p>`,
        `<p><strong>L'interférence</strong> sur une double fente : si les ondes se renforcent (la différence de marche est un multiple entier de $\\lambda$), il apparaît une <strong>frange claire</strong>. Si elles s'annulent (différence de marche $\\left(k+\\frac{1}{2}\\right)\\lambda$), il apparaît une <strong>frange sombre</strong>.</p>`,
        `<p>Pour les franges claires sur un écran situé à la distance $L$ des fentes séparées de $d$, on a approximativement $y_k = k\\,\\frac{\\lambda L}{d}$, où $k = 0, 1, 2, \\dots$ est l'ordre de la frange. Pour une longueur d'onde plus grande ou un écran plus éloigné, les franges sont plus espacées.</p>`,
        `<p><strong>La diffraction</strong> est la déviation d'une onde autour d'un obstacle ou à travers une fente étroite. Elle est d'autant plus marquée que la dimension de l'obstacle est proche de la longueur d'onde. C'est pourquoi le son contourne mieux le coin d'une pièce que la lumière.</p>`,
        { fig: 's1s4-interferencia', caption: `Les franges brillantes apparaissent dans les directions où la différence de marche est un multiple entier de λ : yk = k·λL/d.` }
      ],
      examples: [
        { task: `Les fentes sont distantes de $d = 0{,}5\\,\\text{mm}$, la lumière a $\\lambda = 500\\,\\text{nm}$ et l'écran est à $L = 1\\,\\text{m}$. Quelle est la distance de la première frange claire ($k=1$) ?`,
          steps: [`$y_1 = \\frac{\\lambda L}{d}=\\frac{500\\cdot 10^{-9}\\cdot 1}{0{,}5\\cdot 10^{-3}}\\,\\text{m}$.`,
            `$y_1 = 10^{-3}\\,\\text{m}=1\\,\\text{mm}$.`,
            `<strong>Résultat : 1 mm du centre.</strong>`] },
        { task: `Pour le même dispositif, quelle longueur d'onde donne des franges plus larges : 400 nm ou 700 nm ?`,
          steps: [`La distance entre les franges $y_k$ est proportionnelle à $\\lambda$.`, `<strong>Des franges plus larges sont données par 700 nm.</strong>`] }
      ]
    },

    's4-ziarenie': {
      title: `Rayonnement électromagnétique et spectres`,
      summary: `Longueur d'onde, fréquence et énergie du photon ; spectres de raies et spectres continus.`,
      theory: [
        `<p>Le rayonnement électromagnétique est constitué d'ondes qui se propagent dans le vide à la vitesse $c = 3\\cdot 10^{8}\\,\\text{m/s}$. La longueur d'onde et la fréquence sont liées par $c = \\lambda f$. Les ondes radio, les micro-ondes, l'infrarouge, la lumière visible, l'ultraviolet, les rayons X et gamma ne sont que des parties différentes du même phénomène.</p>`,
        `<p><strong>L'énergie du photon</strong> : la lumière est émise et absorbée par quanta, appelés photons. L'énergie d'un photon vaut $E = h f = \\frac{h c}{\\lambda}$, où $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$. Pour les calculs atomiques, on utilise l'électronvolt ($1\\,\\text{eV} \\approx 1{,}6\\cdot 10^{-19}\\,\\text{J}$) et la relation $hc \\approx 1240\\,\\text{eV·nm}$.</p>`,
        `<p><strong>Les spectres</strong> : les solides incandescents émettent un spectre continu, les gaz raréfiés émettent un spectre de raies. Chaque élément possède ses propres raies, c'est pourquoi les spectres servent à déterminer la composition chimique des étoiles.</p>`,
        `<p>Pourquoi les spectres sont-ils formés de raies : les niveaux d'énergie des atomes sont discrets, donc un atome n'émet ou n'absorbe que des photons dont l'énergie égale la différence entre deux niveaux. Une énergie de photon plus élevée correspond à une longueur d'onde plus courte.</p>`,
        { fig: 's1s4-spektrum', caption: `Le rayonnement électromagnétique est un seul phénomène avec des longueurs d'onde différentes. La lumière visible n'en constitue qu'une bande étroite.` }
      ],
      examples: [
        { task: `Un photon a une longueur d'onde de 248 nm. Quelle est son énergie en électronvolts ?`,
          steps: [`$E=\\frac{hc}{\\lambda}\\approx\\frac{1240\\,\\text{eV·nm}}{248\\,\\text{nm}}$.`, `<strong>Résultat : E = 5 eV.</strong>`] },
        { task: `La lumière a une fréquence de $6\\cdot 10^{14}\\,\\text{Hz}$. Quelle est sa longueur d'onde ?`,
          steps: [`$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{6\\cdot 10^{14}}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.`, `<strong>Résultat : 500 nm.</strong>`] }
      ]
    },

    's4-atom': {
      title: `Modèles de l'atome et phénomènes quantiques`,
      summary: `Modèle de Bohr de l'hydrogène : niveaux quantifiés et énergie du photon lors d'une transition entre eux.`,
      theory: [
        `<p>Selon le modèle de Rutherford, l'atome possède un petit noyau positif entouré d'électrons. Or, selon la physique classique, un électron tournant autour du noyau devrait sans cesse émettre de l'énergie et tomber sur le noyau, ce qui ne se produit pas. Le modèle de Bohr a donc introduit des <strong>niveaux quantifiés</strong>, sur lesquels l'électron n'émet pas d'énergie.</p>`,
        `<p>L'énergie de l'électron dans l'atome d'hydrogène est quantifiée : $E_n = -\\frac{13{,}6\\,\\text{eV}}{n^2}$, où $n = 1, 2, 3, \\dots$ est le nombre quantique principal. Plus $n$ est grand, plus l'électron est faiblement lié et plus son énergie est proche de zéro.</p>`,
        `<p><strong>Transition entre niveaux</strong> : lors du passage d'un niveau supérieur $n_i$ à un niveau inférieur $n_f$, l'atome émet un photon d'énergie $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\frac{1}{n_f^2}-\\frac{1}{n_i^2}\\right)$. La transition inverse absorbe un photon de même énergie.</p>`,
        `<p>Pourquoi cela est-il vrai : la longueur d'onde de la lumière émise correspond à la différence des niveaux, donc l'hydrogène n'émet qu'un spectre de raies. De même, l'effet photoélectrique montre que la lumière transporte son énergie par quanta et possède donc aussi des propriétés corpusculaires.</p>`,
        { fig: 'obr-atom', caption: `Modèle simplifié de l'atome : un noyau positif et des électrons sur des orbites.` }
      ],
      examples: [
        { task: `Un électron de l'atome d'hydrogène passe du niveau $n=3$ au niveau $n=2$. Quelle énergie émet-il ?`,
          steps: [`$\\Delta E = 13{,}6\\left(\\frac{1}{2^2}-\\frac{1}{3^2}\\right)\\,\\text{eV}$.`,
            `$\\frac{1}{4}-\\frac{1}{9}=\\frac{5}{36}$, donc $\\Delta E = 13{,}6\\cdot\\frac{5}{36}\\approx 1{,}89\\,\\text{eV}$.`,
            `<strong>Résultat : environ 1,89 eV.</strong>`] },
        { task: `Quelle est l'énergie de l'électron au niveau $n=1$ ?`,
          steps: [`$E_1=-\\frac{13{,}6}{1^2}\\,\\text{eV}$.`, `<strong>Résultat : E₁ = −13,6 eV.</strong>`] }
      ]
    },

    's4-radioaktivita': {
      title: `Radioactivité et réactions nucléaires`,
      summary: `Désintégration des noyaux, demi-vie et écriture d'une réaction nucléaire.`,
      theory: [
        `<p><strong>La radioactivité</strong> est la désintégration spontanée des noyaux instables. Elle produit des rayonnements : $\\alpha$ (noyaux d'hélium), $\\beta$ (électrons ou positons) et $\\gamma$ (photons de haute énergie). La désintégration d'un noyau isolé est aléatoire, mais pour un grand nombre de noyaux elle se comporte de façon prévisible.</p>`,
        `<p><strong>La demi-vie</strong> $T_{1/2}$ est le temps au bout duquel la moitié des noyaux initiaux s'est désintégrée. Le nombre de noyaux non désintégrés après le temps $t$ est $N = N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>Pourquoi la décroissance est-elle géométrique : à chaque demi-vie, la quantité est divisée par deux, et non diminuée d'une valeur constante. Après la première demi-vie il reste la moitié, après la deuxième le quart. L'activité $A = \\lambda N$ indique le nombre de désintégrations par seconde (unité le becquerel, $\\text{Bq}$).</p>`,
        `<p><strong>Les réactions nucléaires</strong> s'écrivent par un bilan du nombre de nucléons (indice supérieur) et du nombre de protons (indice inférieur) : la somme à gauche est égale à la somme à droite.</p>`,
        { fig: 's1s4-polcas-rozpadu', caption: `À chaque demi-vie, le nombre de noyaux non désintégrés diminue de moitié : la décroissance est géométrique, et non linéaire.` }
      ],
      examples: [
        { task: `Un élément radioactif a une demi-vie de 4 jours. Quel pourcentage de la quantité initiale reste-t-il après 8 jours ?`,
          steps: [`En 8 jours, il s'est écoulé $\\frac{8}{4}=2$ demi-vies.`, `Il reste $\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}$ de la quantité initiale.`, `<strong>Résultat : 25 %.</strong>`] },
        { task: `Le noyau d'uranium $^{238}_{92}\\text{U}$ se désintègre par radioactivité alpha. Quels sont les nombres de nucléons et de protons du nouveau noyau ?`,
          steps: [`La particule alpha est $^{4}_{2}\\text{He}$, elle emporte 4 nucléons et 2 protons.`, `$238-4=234$, $92-2=90$.`, `<strong>Résultat : $^{234}_{90}\\text{Th}$ (thorium).</strong>`] }
      ]
    },

    's4-jadro': {
      title: `Fission et fusion nucléaires`,
      summary: `Défaut de masse et énergie libérée lors de la fission des noyaux lourds et de la fusion des noyaux légers.`,
      theory: [
        `<p>Le noyau a une masse inférieure à la somme des masses de ses nucléons. Cette différence est le <strong>défaut de masse</strong> $\\Delta m$ et correspond à l'énergie de liaison selon la relation d'Einstein $\\Delta E = \\Delta m\\,c^2$.</p>`,
        `<p>Si l'on mesure la masse en unités de masse atomique ($1\\,\\text{u}$), on dispose de la relation pratique : un défaut de masse de $1\\,\\text{u}$ correspond à une énergie d'environ $931{,}5\\,\\text{MeV}$.</p>`,
        `<p><strong>La fission</strong> : un noyau lourd (par exemple l'uranium-235) se scinde en deux noyaux de taille moyenne et libère de l'énergie. <strong>La fusion</strong> : des noyaux légers s'unissent en un noyau plus lourd, et de l'énergie est à nouveau libérée. Le Soleil tire son énergie de la fusion de l'hydrogène en hélium.</p>`,
        `<p>Pourquoi l'énergie est-elle libérée : les noyaux sont les plus fortement liés au voisinage du fer. Un mouvement vers lui, que ce soit par la division d'un noyau lourd ou par l'union de noyaux légers, libère la différence des énergies de liaison.</p>`,
        { fig: 's1s4-vazbova-energia', caption: `L'énergie de liaison par nucléon est maximale autour du fer, c'est pourquoi la fission des noyaux lourds et la fusion des noyaux légers libèrent de l'énergie.` }
      ],
      examples: [
        { task: `Lors d'un processus, le défaut de masse est $\\Delta m = 0{,}2\\,\\text{u}$. Combien de MeV d'énergie sont libérés ?`,
          steps: [`$\\Delta E = \\Delta m\\cdot 931{,}5\\,\\text{MeV/u}=0{,}2\\cdot 931{,}5\\,\\text{MeV}$.`, `<strong>Résultat : environ 186 MeV.</strong>`] },
        { task: `Lors de la réaction D + T → He + n, les masses avant la réaction totalisent 5,0301 u et après la réaction 5,0113 u. Combien de MeV sont libérés ?`,
          steps: [`$\\Delta m = 5{,}0301-5{,}0113=0{,}0188\\,\\text{u}$.`, `$\\Delta E = 0{,}0188\\cdot 931{,}5\\approx 17{,}5\\,\\text{MeV}$.`, `<strong>Résultat : environ 17,5 MeV.</strong>`] }
      ]
    },

    's4-astrofyzika': {
      title: `Bases de l'astrophysique et de la cosmologie`,
      summary: `Distance des étoiles par la parallaxe, loi de Hubble de l'expansion et loi de Wien du rayonnement.`,
      theory: [
        `<p><strong>Les distances dans l'univers</strong> se mesurent en années-lumière ou en parsecs : $1\\,\\text{pc}\\approx 3{,}26\\,\\text{al}$. Lors de la <strong>parallaxe</strong>, une étoile semble déplacée sur la voûte céleste par rapport aux étoiles lointaines lorsque la Terre tourne autour du Soleil. La distance en parsecs est $d = \\frac{1}{p}$, où $p$ est la parallaxe annuelle en secondes d'arc.</p>`,
        `<p><strong>La loi de Hubble</strong> : les galaxies lointaines s'éloignent de nous à la vitesse $v = H_0\\,d$, où $H_0 \\approx 70\\,\\text{km/(s·Mpc)}$. Plus les galaxies sont lointaines, plus elles s'éloignent vite. C'est la preuve que l'univers est en expansion.</p>`,
        `<p><strong>La loi de Wien</strong> : la température de surface d'une étoile détermine la longueur d'onde à laquelle elle rayonne le plus fortement : $\\lambda_{max} = \\frac{b}{T}$, où $b \\approx 2{,}9\\cdot 10^{-3}\\,\\text{m·K}$. Les étoiles plus froides rayonnent vers le rouge, les plus chaudes vers le bleu.</p>`,
        `<p>Pourquoi cela fonctionne : la parallaxe repose sur la géométrie du triangle Terre–Soleil–étoile, et Hubble a constaté que le décalage des raies spectrales vers le rouge augmente avec la distance. À partir de ces deux mesures, on peut estimer les distances et l'âge de l'univers.</p>`,
        { fig: 's1s4-paralaxa', caption: `Parallaxe : depuis deux positions de l'orbite terrestre, l'étoile semble décalée par rapport aux étoiles plus lointaines. La distance en parsecs est d = 1/p.` }
      ],
      examples: [
        { task: `Une galaxie s'éloigne de nous à la vitesse de 3500 km/s. Quelle est sa distance pour $H_0 = 70\\,\\text{km/(s·Mpc)}$ ?`,
          steps: [`$d=\\frac{v}{H_0}=\\frac{3500}{70}\\,\\text{Mpc}$.`, `<strong>Résultat : 50 Mpc.</strong>`] },
        { task: `La surface d'une étoile a une température de 5800 K. À quelle longueur d'onde rayonne-t-elle le plus fortement ?`,
          steps: [`$\\lambda_{max}=\\frac{2{,}9\\cdot 10^{-3}}{5800}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.`, `<strong>Résultat : 500 nm (zone verte).</strong>`] }
      ]
    },

    's4-opakovanie': {
      title: `Révision de la mécanique, de l'électricité et d'autres thèmes`,
      summary: `Revois les formules principales de la mécanique et de l'électricité et vérifie les unités.`,
      theory: [
        `<p>La révision relie des notions apprises séparément. Mécanique : $F = m\\,a$, $E_k = \\frac{1}{2}m v^2$, $W = F\\,s$, $P = \\frac{W}{t}$. Électricité : $I = \\frac{Q}{t}$, $U = R\\,I$, $P = U\\,I$. Commence toujours par déterminer ce qui est donné et ce qui est cherché, puis seulement choisis la formule.</p>`,
        `<p><strong>Contrôle des unités :</strong> force en newtons ($\\text{N} = \\text{kg·m/s}^2$), énergie en joules, tension en volts. Si les unités ne correspondent pas des deux côtés, l'erreur se trouve dans le raisonnement.</p>`,
        `<p><strong>Erreurs fréquentes :</strong> n'oublie pas le $\\frac{1}{2}$ et le carré de la vitesse dans l'énergie cinétique ; convertis les km/h en m/s en divisant par $3{,}6$ ; en montage parallèle, additionne les inverses des résistances.</p>`,
        `<p>Pourquoi cela aide : la physique est un système unique de lois. L'énergie se conserve d'un domaine à l'autre, par exemple l'énergie électrique se transforme en énergie mécanique dans un moteur, donc la même façon de raisonner fonctionne partout.</p>`
      ],
      examples: [
        { task: `Une voiture de masse 1000 kg roule à 20 m/s. Quelle est son énergie cinétique ?`,
          steps: [`$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 1000\\cdot 20^2$.`, `$=\\frac{1}{2}\\cdot 1000\\cdot 400=200\\,000\\,\\text{J}$.`, `<strong>Résultat : 200 kJ.</strong>`] },
        { task: `Un appareil est alimenté sous 12 V et sa résistance est de 4 Ω. Quel courant le traverse ?`,
          steps: [`$I=\\frac{U}{R}=\\frac{12}{4}$.`, `<strong>Résultat : 3 A.</strong>`] }
      ]
    },

    's4-maturita': {
      title: `Préparation au baccalauréat, surtout si l'élève choisit la physique`,
      summary: `Démarche de résolution des problèmes, unités, estimation du résultat et arrondis.`,
      theory: [
        `<p>Au baccalauréat de physique, on perd le plus de points à cause des <strong>unités incorrectes</strong> et des substitutions faites sans contrôle. La démarche qui paie : note les grandeurs données, note la grandeur cherchée, choisis la formule, convertis les unités dans le SI, et seulement ensuite calcule.</p>`,
        `<ol><li>Note les grandeurs données et cherchées.</li><li>Choisis la formule et vérifie qu'elle s'applique à ce phénomène.</li><li>Convertis les unités dans le SI.</li><li>Calcule et arrondis seulement à la fin.</li><li>Contrôle l'unité et l'ordre de grandeur du résultat.</li></ol>`,
        `<p><strong>Contrôle du résultat :</strong> vérifie que l'ordre de grandeur est raisonnable (la vitesse d'une voiture ne peut pas être de $10^{6}\\,\\text{m/s}$), que le signe est correct et que le résultat est dans la bonne unité. Une estimation rapide avant le calcul évite les erreurs de virgule.</p>`,
        `<p><strong>Arrondis :</strong> effectue les calculs avec toute la précision et arrondis seulement à la fin, au nombre de chiffres significatifs de l'énoncé (en général 2 ou 3). Arrondir en cours de calcul décale le résultat.</p>`,
        `<p>Pourquoi cela fonctionne : l'épreuve évalue une manière de raisonner, pas seulement un nombre. Des unités correctes et un contrôle montrent la compréhension, même si l'on se trompe d'une petite valeur dans le calcul.</p>`
      ],
      examples: [
        { task: `Un corps de masse 2 kg a une vitesse de 36 km/h. Quelle est son énergie cinétique ?`,
          steps: [`Convertis les unités : $v = 36\\,\\text{km/h}=10\\,\\text{m/s}$.`, `$E_k=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 10^2=100\\,\\text{J}$.`, `<strong>Résultat : 100 J.</strong>`] },
        { task: `Une force de 500 N agit sur une surface de 25 cm². Quelle pression en kPa en résulte-t-il ?`,
          steps: [`Convertis la surface : $S=25\\,\\text{cm}^2=25\\cdot 10^{-4}\\,\\text{m}^2$.`, `$p=\\frac{F}{S}=\\frac{500}{25\\cdot 10^{-4}}\\,\\text{Pa}=2\\cdot 10^{5}\\,\\text{Pa}$.`, `<strong>Résultat : 200 kPa.</strong>`] }
      ]
    }
  }
});
