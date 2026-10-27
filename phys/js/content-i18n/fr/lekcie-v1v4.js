/* Français : leçons universitaires, niveaux v1–v4 (js/rocniky/v1.js, v2.js, v3.js, v4.js). Structure et clés : js/content-i18n.js. */
CONTENT_I18N.add('fr', {
  lessons: {
    'v1-kinematika': {
      title: `Cinématique : position, vitesse et accélération`,
      summary: `Description du mouvement sans ses causes : comment la position, la vitesse et l'accélération varient avec le temps.`,
      theory: [
        `<p>La cinématique décrit le mouvement des corps sans s'interroger sur ses causes. La grandeur de base est la <strong>position</strong> $x(t)$, c'est-à-dire la coordonnée du corps par rapport à une origine et une direction choisies.</p>`,
        `<p><strong>La vitesse</strong> est la variation de la position par unité de temps : $v=\\frac{\\Delta x}{\\Delta t}$. C'est un vecteur, donc elle porte aussi un signe qui détermine le sens du mouvement. <strong>L'accélération</strong> est la variation de la vitesse par unité de temps : $a=\\frac{\\Delta v}{\\Delta t}$, en unités de $\\text{m/s}^2$.</p>`,
        `<p>Dans le <strong>mouvement uniformément accéléré</strong>, l'accélération est constante. La vitesse varie alors linéairement, $v=v_0+a\\,t$, et la position varie avec le carré du temps : $x=x_0+v_0\\,t+\\frac{1}{2}a\\,t^2$.</p>`,
        `<p><strong>Pourquoi multiplier par le temps :</strong> l'accélération indique de combien de mètres par seconde la vitesse change à chaque seconde. Pendant le temps $t$, elle varie donc de $a\\,t$. Si $a$ et $v_0$ ont le même signe, le corps accélère, sinon il freine.</p>`,
        { fig: 'v1v4-kinematika-vt', caption: `Pour un mouvement uniformément accéléré, le graphe de la vitesse en fonction du temps est une droite : sa pente est l'accélération a, et son point de départ est la vitesse initiale v₀.` }
      ],
      examples: [
        { task: `Une voiture est à l'arrêt ($v_0=0$) et accélère avec une accélération constante $a=2\\,\\text{m/s}^2$. Quelle sera sa vitesse après $5\\,\\text{s}$ ?`,
          steps: [`On applique la relation $v=v_0+a\\,t$ : $v=0+2\\cdot 5$.`, `<strong>Résultat : $v=10\\,\\text{m/s}$</strong>`] },
        { task: `Un train a la vitesse $v_0=12\\,\\text{m/s}$ et freine avec l'accélération $a=-3\\,\\text{m/s}^2$. Quelle est sa vitesse après $2\\,\\text{s}$ ?`,
          steps: [`$v=v_0+a\\,t=12+(-3)\\cdot 2$.`, `$v=12-6$.`, `<strong>Résultat : $v=6\\,\\text{m/s}$</strong>`] }
      ]
    },

    'v1-newton': {
      title: `Lois du mouvement de Newton`,
      summary: `Première, deuxième et troisième lois : quand un corps ne se déplace pas uniformément et comment la force est liée à l'accélération.`,
      theory: [
        `<p><strong>Première loi</strong> (inertie) : un corps reste au repos ou en mouvement rectiligne uniforme tant qu'aucune résultante non nulle des forces ne s'exerce sur lui. L'inertie est une propriété de la masse, et non le résultat d'une force.</p>`,
        `<p><strong>Deuxième loi</strong> : l'accélération est proportionnelle à la résultante des forces et inversement proportionnelle à la masse, $\\vec a=\\frac{\\vec F}{m}$, soit $\\vec F=m\\,\\vec a$. La résultante est la somme vectorielle de toutes les forces agissant sur le corps ; des forces de sens opposés se soustraient.</p>`,
        `<p><strong>Troisième loi</strong> : si le corps A agit sur le corps B avec une force, B agit sur A avec une force de même intensité et de sens opposé. Ces deux forces s'exercent sur des corps <em>différents</em>, elles ne s'annulent donc pas.</p>`,
        `<p><strong>Pourquoi il en est ainsi :</strong> la force est la cause de la variation du mouvement. Pour une même accélération, un corps plus massif nécessite une force plus grande, car la masse s'oppose au changement de vitesse.</p>`,
        { fig: 'v1v4-sily-dve', caption: `Les forces de sens opposés se soustraient. La résultante F₁ − F₂ communique au corps l'accélération a = (F₁ − F₂)/m.` }
      ],
      examples: [
        { task: `Un corps de masse $m=4\\,\\text{kg}$ est tiré par une force $F=20\\,\\text{N}$, et un frottement $F_t=8\\,\\text{N}$ agit en sens opposé sur la même droite. Quelle est l'accélération ?`,
          steps: [`Résultante : $F_v=20-8=12\\,\\text{N}$.`, `Accélération : $a=\\frac{F_v}{m}=\\frac{12}{4}$.`, `<strong>Résultat : $a=3\\,\\text{m/s}^2$</strong>`] },
        { task: `Sur un corps de masse $m=3\\,\\text{kg}$ agit une force résultante de $12\\,\\text{N}$. Quelle est l'accélération ?`,
          steps: [`$a=\\frac{F}{m}=\\frac{12}{3}$.`, `<strong>Résultat : $a=4\\,\\text{m/s}^2$</strong>`] }
      ]
    },

    'v1-hybnost': {
      title: `Forces, quantité de mouvement et moment cinétique`,
      summary: `La quantité de mouvement comme mesure du mouvement, l'impulsion d'une force et le moment cinétique lors d'une rotation autour d'un point.`,
      theory: [
        `<p>La <strong>quantité de mouvement</strong> d'un corps est le produit de sa masse et de sa vitesse : $\\vec p=m\\,\\vec v$. Un corps lourd et rapide a une grande quantité de mouvement et il est plus difficile à arrêter.</p>`,
        `<p>La deuxième loi de Newton peut aussi s'écrire à l'aide de la quantité de mouvement : $\\vec F=\\frac{\\Delta \\vec p}{\\Delta t}$. Le produit $\\vec F\\,\\Delta t$ s'appelle <strong>impulsion de la force</strong> et il est égal à la variation de la quantité de mouvement : $\\Delta \\vec p=\\vec F\\,\\Delta t$.</p>`,
        `<p>Le <strong>moment cinétique</strong> d'un point par rapport à un point fixe $O$ est le produit vectoriel de la position et de la quantité de mouvement : $\\vec L=\\vec r\\times\\vec p$, de module $L=r\\,p\\sin\\alpha$, où $\\alpha$ est l'angle entre $\\vec r$ et $\\vec p$.</p>`,
        `<p><strong>Pourquoi cela est vrai :</strong> une force ne modifie la quantité de mouvement que si elle agit suffisamment longtemps. Un choc bref donne une faible impulsion, même avec une grande force. Le moment cinétique ne change que si un moment de force $\\vec M=\\vec r\\times\\vec F$ agit sur le corps.</p>`
      ],
      examples: [
        { task: `Une balle de masse $m=0{,}02\\,\\text{kg}$ vole à la vitesse $v=300\\,\\text{m/s}$. Quelle est sa quantité de mouvement ?`,
          steps: [`$p=m\\,v=0{,}02\\cdot 300$.`, `<strong>Résultat : $p=6\\,\\text{kg\\,m/s}$</strong>`] },
        { task: `Une force $F=50\\,\\text{N}$ agit sur un corps pendant $4\\,\\text{s}$. Quelle est la variation de sa quantité de mouvement ?`,
          steps: [`Impulsion de la force : $\\Delta p=F\\,\\Delta t=50\\cdot 4$.`, `<strong>Résultat : $\\Delta p=200\\,\\text{kg\\,m/s}$</strong>`] }
      ]
    },

    'v1-praca-energia': {
      title: `Travail, énergie et puissance`,
      summary: `Travail d'une force, énergie cinétique du corps et puissance comme travail par unité de temps.`,
      theory: [
        `<p>Le <strong>travail</strong> d'une force constante lors d'un déplacement $\\vec s$ vaut $W=F\\,s\\cos\\alpha$, où $\\alpha$ est l'angle entre la force et le déplacement. Une force perpendiculaire au déplacement ne travaille pas.</p>`,
        `<p>L'<strong>énergie cinétique</strong> d'un corps est $E_k=\\frac{1}{2}m v^2$. Le travail de la force résultante est égal à la variation de l'énergie cinétique : $W=\\Delta E_k$. C'est le théorème de l'énergie cinétique.</p>`,
        `<p>La <strong>puissance</strong> est le travail effectué par unité de temps : $P=\\frac{W}{t}$, en watts, $1\\,\\text{W}=1\\,\\text{J/s}$.</p>`,
        `<p><strong>Pourquoi il y a $v^2$ :</strong> à vitesse double, le corps possède une énergie quadruple, car il faut un travail quadruple pour l'arrêter. C'est pourquoi les accidents à grande vitesse sont si dangereux.</p>`,
        { fig: 'v1v4-praca-uhol', caption: `Seule la composante de la force parallèle au déplacement effectue un travail, F·cos α. La composante perpendiculaire au déplacement ne travaille pas.` }
      ],
      examples: [
        { task: `Un corps de masse $m=2\\,\\text{kg}$ se déplace à la vitesse $v=3\\,\\text{m/s}$. Quelle est son énergie cinétique ?`,
          steps: [`$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 2\\cdot 3^2$.`, `<strong>Résultat : $E_k=9\\,\\text{J}$</strong>`] },
        { task: `Une force $F=10\\,\\text{N}$ déplace le corps de $s=6\\,\\text{m}$ dans le sens de la force. Quel travail est effectué ?`,
          steps: [`L'angle est $\\alpha=0^\\circ$, donc $\\cos\\alpha=1$.`, `$W=F\\,s\\cos\\alpha=10\\cdot 6\\cdot 1$.`, `<strong>Résultat : $W=60\\,\\text{J}$</strong>`] }
      ]
    },

    'v1-gravitacne-pole': {
      title: `Champ gravitationnel`,
      summary: `Loi de la gravitation de Newton, accélération gravitationnelle et sa variation avec la distance au centre de la planète.`,
      theory: [
        `<p><strong>Loi de la gravitation universelle de Newton</strong> : deux corps de masses $m_1$ et $m_2$ situés à la distance $r$ s'attirent avec la force $F=G\\frac{m_1 m_2}{r^2}$, où $G\\approx 6{,}67\\cdot 10^{-11}\\,\\text{N\\,m}^2/\\text{kg}^2$.</p>`,
        `<p><strong>Le champ gravitationnel</strong> est la région dans laquelle une force gravitationnelle agit sur un corps matériel. L'intensité du champ, c'est-à-dire <em>l'accélération gravitationnelle</em>, vaut $g=\\frac{F}{m}=G\\frac{M}{r^2}$, où $M$ est la masse de la source du champ.</p>`,
        `<p><strong>Pourquoi elle décroît avec la distance :</strong> l'action gravitationnelle se répartit sur une sphère de surface $4\\pi r^2$ toujours plus grande. C'est pourquoi l'accélération gravitationnelle varie avec le carré de la distance au centre, et non linéairement.</p>`,
        `<p>À la surface de la Terre, $g\\approx 9{,}81\\,\\text{m/s}^2$. À la distance $r$ du centre de la Terre, $g(r)=9{,}81\\cdot\\left(\\frac{R}{r}\\right)^2$, où $R$ est le rayon de la Terre.</p>`,
        { fig: 'v1v4-gravitacia-r', caption: `L'accélération gravitationnelle décroît avec le carré de la distance au centre : à la distance 2R, elle vaut un quart de sa valeur à la surface.` }
      ],
      examples: [
        { task: `Quelle est l'accélération gravitationnelle à une altitude où la distance au centre de la Terre est le double du rayon terrestre ?`,
          steps: [`Le rapport des distances est $\\frac{r}{R}=2$, donc $g(r)=g\\cdot\\left(\\frac{1}{2}\\right)^2$.`, `$g(r)=\\frac{9{,}81}{4}\\approx 2{,}45\\,\\text{m/s}^2$.`, `<strong>Résultat : environ $2{,}45\\,\\text{m/s}^2$</strong>`] },
        { task: `Deux corps de masses $m_1=10\\,\\text{kg}$ et $m_2=5\\,\\text{kg}$ sont à la distance $r$. Comment varie la force si l'on double la distance ?`,
          steps: [`La force est proportionnelle à $\\frac{1}{r^2}$ ; pour $2r$ elle est divisée par quatre.`, `<strong>Résultat : la force est réduite au quart</strong>`] }
      ]
    },

    'v1-rotacia': {
      title: `Rotation d'un corps rigide`,
      summary: `Vitesse angulaire, moment d'inertie et moment de force lors de la rotation d'un corps autour d'un axe.`,
      theory: [
        `<p>Un <strong>corps rigide</strong> ne change pas de forme lorsqu'il tourne autour d'un axe : tous ses points tournent avec la même <strong>vitesse angulaire</strong> $\\omega$, en radians par seconde. Si le corps effectue $f$ tours par seconde, alors $\\omega=2\\pi f$, car un tour complet correspond à l'angle $2\\pi$.</p>`,
        `<p>La vitesse tangentielle d'un point situé à la distance $r$ de l'axe est $v=\\omega\\,r$. Les points les plus éloignés de l'axe se déplacent plus vite, à vitesse angulaire égale.</p>`,
        `<p>Le <strong>moment d'inertie</strong> $I=\\sum m_i r_i^2$ est l'équivalent rotationnel de la masse. Il dépend non seulement de la masse, mais aussi de sa répartition par rapport à l'axe. La deuxième loi de Newton pour la rotation s'écrit $M=I\\,\\alpha$, où $M$ est le moment de force et $\\alpha$ l'accélération angulaire.</p>`,
        `<p><strong>Pourquoi le facteur deux :</strong> l'angle se mesure en radians et un tour complet vaut $2\\pi$ radians, et non $\\pi$. C'est pourquoi la fréquence en hertz est multipliée par deux pi.</p>`,
        { fig: 'v1v4-rotacia', caption: `Un point d'un corps rigide situé à la distance r de l'axe décrit un cercle avec la vitesse tangentielle v = ω·r.` }
      ],
      examples: [
        { task: `Un disque tourne à la fréquence $f=3\\,\\text{Hz}$. Quelle est sa vitesse angulaire ?`,
          steps: [`$\\omega=2\\pi f=2\\pi\\cdot 3$.`, `<strong>Résultat : $\\omega=6\\pi\\approx 18{,}85\\,\\text{rad/s}$</strong>`] },
        { task: `Un point d'une roue est situé à la distance $r=0{,}5\\,\\text{m}$ de l'axe et la vitesse angulaire vaut $\\omega=4\\,\\text{rad/s}$. Quelle est sa vitesse tangentielle ?`,
          steps: [`$v=\\omega\\,r=4\\cdot 0{,}5$.`, `<strong>Résultat : $v=2\\,\\text{m/s}$</strong>`] }
      ]
    },

    'v1-sustavy': {
      title: `Mécanique des systèmes de particules`,
      summary: `Centre de masse d'un système de particules comme moyenne pondérée de leurs positions et mouvement du centre de masse.`,
      theory: [
        `<p>Un <strong>système de particules</strong> peut être décrit par un point remarquable, le <strong>centre de masse</strong>. Pour deux particules sur l'axe $x$, sa position est $x_T=\\frac{m_1x_1+m_2x_2}{m_1+m_2}$. C'est une moyenne pondérée, dans laquelle la particule la plus lourde attire le centre de masse vers elle.</p>`,
        `<p>Le centre de masse se déplace comme une seule particule de masse totale $M=\\sum m_i$, sur laquelle agit la résultante des forces extérieures : $M\\,\\vec a_T=\\sum \\vec F_{\\text{ext}}$. Les forces internes entre les particules s'annulent mutuellement ; c'est pourquoi elles ne modifient pas le mouvement du centre de masse.</p>`,
        `<p><strong>Pourquoi un centre de masse et non une simple moyenne :</strong> si les particules avaient la même masse, on obtiendrait la moyenne arithmétique. Pour des masses différentes, chaque coordonnée doit être pondérée par sa masse.</p>`,
        `<p>L'énergie cinétique d'un système se décompose en énergie du mouvement du centre de masse et en énergie du mouvement des particules par rapport au centre de masse. Ainsi, les mouvements complexes peuvent être décomposés en parties plus simples.</p>`,
        { fig: 'v1v4-sustava-tazisko', caption: `Le centre de masse T est plus proche de la particule la plus lourde. Sa coordonnée est la moyenne pondérée des coordonnées des particules.` }
      ],
      examples: [
        { task: `Une particule de masse $1\\,\\text{kg}$ est au point $x_1=0\\,\\text{m}$ et une particule de masse $3\\,\\text{kg}$ au point $x_2=4\\,\\text{m}$. Où se trouve le centre de masse ?`,
          steps: [`$x_T=\\frac{1\\cdot 0+3\\cdot 4}{1+3}=\\frac{12}{4}$.`, `<strong>Résultat : $x_T=3\\,\\text{m}$</strong>`] },
        { task: `Deux particules de même masse sont aux points $x_1=2\\,\\text{m}$ et $x_2=8\\,\\text{m}$. Où se trouve le centre de masse ?`,
          steps: [`Pour des masses égales, le centre de masse est la moyenne arithmétique : $x_T=\\frac{2+8}{2}$.`, `<strong>Résultat : $x_T=5\\,\\text{m}$</strong>`] }
      ]
    },

    'v1-lagrange': {
      title: `Mécanique lagrangienne et hamiltonienne`,
      summary: `Le lagrangien comme différence entre énergie cinétique et énergie potentielle, et l'hamiltonien comme énergie totale.`,
      theory: [
        `<p>Le <strong>lagrangien</strong> d'un système est $L=T-V$, où $T$ est l'énergie cinétique et $V$ l'énergie potentielle. Au lieu de suivre chaque force, il suffit de connaître ces deux énergies et leur dépendance vis-à-vis des coordonnées généralisées $q$ et des vitesses $\\dot q$.</p>`,
        `<p>Les <strong>équations d'Euler-Lagrange</strong> donnent les équations du mouvement : $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q}-\\frac{\\partial L}{\\partial q}=0$. L'avantage est qu'on peut choisir librement les coordonnées, pourvu qu'elles conviennent au problème, par exemple l'angle d'un pendule.</p>`,
        `<p>Pour des forces conservatives, <strong>l'hamiltonien</strong> est $H=T+V$, c'est-à-dire l'énergie totale. En introduisant les quantités de mouvement $p=\\frac{\\partial L}{\\partial \\dot q}$, les équations du mouvement s'écrivent comme des couples d'équations du premier ordre, appelées équations de Hamilton.</p>`,
        `<p><strong>Pourquoi le signe moins dans $L$ :</strong> l'énergie potentielle s'oppose au mouvement et elle est soustraite dans le lagrangien, alors qu'elle est additionnée à l'énergie cinétique dans l'hamiltonien.</p>`
      ],
      examples: [
        { task: `Une particule de masse $m=2\\,\\text{kg}$ a la vitesse $v=3\\,\\text{m/s}$ à la hauteur $h=1\\,\\text{m}$. Quel est son lagrangien si $g=10\\,\\text{m/s}^2$ ?`,
          steps: [`$T=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 9=9\\,\\text{J}$.`, `$V=mgh=2\\cdot 10\\cdot 1=20\\,\\text{J}$.`, `<strong>Résultat : $L=T-V=9-20=-11\\,\\text{J}$</strong>`] },
        { task: `La même particule a l'hamiltonien $H=T+V$. Quel est son résultat ?`,
          steps: [`$H=9+20$.`, `<strong>Résultat : $H=29\\,\\text{J}$</strong>`] }
      ]
    },

    'v2-teplota-tlak': {
      title: `Température, pression, chaleur et énergie interne`,
      summary: `Température thermodynamique en kelvins, pression comme force par unité de surface et énergie interne comme somme des énergies des particules.`,
      theory: [
        `<p>La <strong>température thermodynamique</strong> $T$ se mesure en kelvins. Elle est proportionnelle à l'énergie cinétique moyenne des particules, elle ne peut donc pas être négative. La conversion depuis les degrés Celsius est $T=t+273{,}15$, où $0\\,\\text{K}$ est le zéro absolu.</p>`,
        `<p>La <strong>pression</strong> est la force agissant perpendiculairement sur une unité de surface : $p=\\frac{F}{S}$, en pascals, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Le gaz exerce une pression sur les parois du récipient, car ses particules les heurtent et leur transmettent une quantité de mouvement.</p>`,
        `<p>L'<strong>énergie interne</strong> $U$ est la somme des énergies cinétiques et potentielles de toutes les particules du système. La <strong>chaleur</strong> $Q$ est l'énergie transférée entre des corps en raison d'une différence de température ; ce n'est pas une « réserve » contenue dans le corps.</p>`,
        `<p><strong>Pourquoi le kelvin :</strong> les degrés Celsius ont un zéro choisi arbitrairement. Dans les formules qui relient l'énergie à un rapport, il faut utiliser le zéro où l'énergie s'annule, c'est-à-dire les kelvins.</p>`,
        { fig: 'v1v4-teplota-stupnice', caption: `La conversion des températures est T = t + 273,15. Le zéro absolu correspond à 0 K, soit −273,15 °C.` }
      ],
      examples: [
        { task: `Quelle est la température $t=27\\,{}^\\circ\\text{C}$ en kelvins ?`,
          steps: [`$T=t+273{,}15=27+273{,}15$.`, `<strong>Résultat : $T=300{,}15\\,\\text{K}$</strong>`] },
        { task: `Une force $F=600\\,\\text{N}$ agit perpendiculairement sur la surface $S=0{,}2\\,\\text{m}^2$. Quelle est la pression ?`,
          steps: [`$p=\\frac{F}{S}=\\frac{600}{0{,}2}$.`, `<strong>Résultat : $p=3000\\,\\text{Pa}$</strong>`] }
      ]
    },

    'v2-stavove-rovnice': {
      title: `Équations d'état`,
      summary: `Équation d'état du gaz parfait pV = nRT et son utilisation pour calculer la pression.`,
      theory: [
        `<p>L'<strong>équation d'état</strong> du gaz parfait relie la pression $p$, le volume $V$, la quantité de matière $n$ et la température $T$ : $pV=nRT$, où $R\\approx 8{,}314\\,\\text{J/(mol\\,K)}$.</p>`,
        `<p>Le gaz parfait est un modèle dans lequel les particules n'ont pas de volume propre et n'interagissent pas entre elles, sauf lors des chocs. Pour un gaz suffisamment dilué à des températures usuelles, ce modèle est très précis.</p>`,
        `<p><strong>Comment l'utiliser :</strong> si l'on connaît trois grandeurs, on exprime la quatrième. Par exemple, la pression vaut $p=\\frac{nRT}{V}$. Lorsqu'une grandeur change, les autres varient selon des proportionnalités : à température constante, la pression est inversement proportionnelle au volume.</p>`,
        `<p><strong>Attention aux unités :</strong> la température doit être en kelvins et le volume en mètres cubes, sinon le résultat ne sera pas en pascals. Les litres et les décimètres cubes se convertissent en divisant par $1000$.</p>`,
        { fig: 'v1v4-izoterma', caption: `À température constante, le produit pV est constant : la pression en fonction du volume forme une hyperbole, un volume double correspondant à une pression moitié.` }
      ],
      examples: [
        { task: `Un gaz a $n=1\\,\\text{mol}$, une température $T=300\\,\\text{K}$ et un volume $V=2\\,\\text{dm}^3$. Quelle est la pression en kPa ?`,
          steps: [`$V=2\\,\\text{dm}^3=0{,}002\\,\\text{m}^3$.`, `$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}314\\cdot 300}{0{,}002}\\approx 1\\,247\\,100\\,\\text{Pa}$.`, `<strong>Résultat : $p\\approx 1247\\,\\text{kPa}$</strong>`] },
        { task: `À température constante, le volume du gaz double. Comment varie la pression ?`,
          steps: [`À $T$ et $n$ constants, on a $p\\,V=\\text{const.}$`, `Si $V\\to 2V$, alors $p\\to \\frac{p}{2}$.`, `<strong>Résultat : la pression est divisée par deux</strong>`] }
      ]
    },

    'v2-prvy-zakon': {
      title: `Premier et second principes de la thermodynamique`,
      summary: `Conservation de l'énergie lors des processus thermiques et sens dans lequel se déroulent les processus naturels.`,
      theory: [
        `<p>Le <strong>premier principe de la thermodynamique</strong> est la loi de conservation de l'énergie : la variation de l'énergie interne est égale à la chaleur fournie diminuée du travail effectué par le gaz : $\\Delta U=Q-W$, où $W$ est le travail du gaz.</p>`,
        `<p>Si le gaz effectue un travail, son énergie interne diminue, car l'énergie s'échappe vers l'environnement. Si l'on effectue un travail sur le gaz, il faut adapter la formule : $\\Delta U=Q+W_{\\text{sur le gaz}}$. Il est toujours important de savoir quelle convention de signe est utilisée.</p>`,
        `<p>Le <strong>second principe de la thermodynamique</strong> affirme que la chaleur ne passe spontanément que d'un corps plus chaud vers un corps plus froid, et qu'un moteur thermique ne peut pas transformer toute la chaleur en travail. Le sens des processus naturels est déterminé par l'augmentation de l'entropie.</p>`,
        `<p><strong>Pourquoi c'est important :</strong> le premier principe indique quelle quantité d'énergie se conserve, et le second indique dans quel sens les processus se déroulent. Sans le second principe, on pourrait construire un mouvement perpétuel de deuxième espèce.</p>`,
        { fig: 'v1v4-prvy-zakon', caption: `La chaleur Q fournie augmente l'énergie interne du gaz ; le travail W effectué par le gaz emporte de l'énergie : ΔU = Q − W.` }
      ],
      examples: [
        { task: `On fournit au gaz une chaleur $Q=300\\,\\text{J}$ et le gaz effectue un travail $W=120\\,\\text{J}$. Quelle est la variation de son énergie interne ?`,
          steps: [`$\\Delta U=Q-W=300-120$.`, `<strong>Résultat : $\\Delta U=180\\,\\text{J}$</strong>`] },
        { task: `Lors d'une compression, le gaz reçoit un travail $W_{\\text{sur le gaz}}=50\\,\\text{J}$ et cède une chaleur $Q=-20\\,\\text{J}$. Quelle est la variation de son énergie interne ?`,
          steps: [`$\\Delta U=Q+W_{\\text{sur le gaz}}=-20+50$.`, `<strong>Résultat : $\\Delta U=30\\,\\text{J}$</strong>`] }
      ]
    },

    'v2-entropia': {
      title: `Entropie et processus thermiques`,
      summary: `Entropie comme mesure de l'irréversibilité et sa variation lors d'une transformation isotherme réversible.`,
      theory: [
        `<p>L'<strong>entropie</strong> $S$ est une grandeur qui mesure le nombre de microétats possibles du système pour un macroétat donné. Lors d'une absorption réversible de la chaleur $Q$ à température constante $T$, elle varie de $\\Delta S=\\frac{Q}{T}$, en unités de $\\text{J/K}$.</p>`,
        `<p>Une chaleur fournie à basse température augmente l'entropie davantage que la même chaleur à haute température. C'est pourquoi la formule divise par la température, au lieu de simplement additionner.</p>`,
        `<p><strong>Le second principe sous forme d'entropie :</strong> dans un système isolé, l'entropie ne diminue jamais ; lors des transformations réversibles elle reste constante, et lors des transformations irréversibles elle augmente. Les processus spontanés se déroulent dans le sens d'une entropie croissante.</p>`,
        `<p><strong>Pourquoi il en est ainsi :</strong> un état très ordonné correspond à peu de microétats, et le système évolue naturellement vers les états qui sont plus nombreux. L'entropie est donc une mesure du désordre irréversible qui apparaît dans le système.</p>`
      ],
      examples: [
        { task: `Un gaz à température constante $T=300\\,\\text{K}$ absorbe de façon réversible une chaleur $Q=600\\,\\text{J}$. Quelle est la variation de son entropie ?`,
          steps: [`$\\Delta S=\\frac{Q}{T}=\\frac{600}{300}$.`, `<strong>Résultat : $\\Delta S=2\\,\\text{J/K}$</strong>`] },
        { task: `Comment varie l'entropie si la même chaleur $Q=600\\,\\text{J}$ est fournie à la température $T=600\\,\\text{K}$ ?`,
          steps: [`$\\Delta S=\\frac{600}{600}=1$.`, `<strong>Résultat : $\\Delta S=1\\,\\text{J/K}$, soit moins qu'à la température plus basse</strong>`] }
      ]
    },

    'v2-tepelne-motory': {
      title: `Moteurs thermiques et réfrigérateurs`,
      summary: `Rendement d'une machine thermique, cycle de Carnot et limite imposée par les températures de la source chaude et du réfrigérant.`,
      theory: [
        `<p>Un <strong>moteur thermique</strong> prélève de la chaleur à la source chaude, transforme une partie en travail et cède le reste au réfrigérant. Le rendement est $\\eta=\\frac{W}{Q_h}$, c'est-à-dire le rapport entre le travail effectué et la chaleur prélevée à la source chaude.</p>`,
        `<p>Le <strong>cycle de Carnot</strong> est le meilleur cycle réversible possible entre deux températures. Son rendement vaut $\\eta=1-\\frac{T_c}{T_h}$, où les températures doivent être exprimées en kelvins.</p>`,
        `<p>Un <strong>réfrigérateur</strong> est une machine thermique inversée : grâce au travail fourni, il transfère de la chaleur d'un espace plus froid vers un espace plus chaud. C'est pourquoi on ne parle pas de rendement pour lui, mais de coefficient de performance.</p>`,
        `<p><strong>Pourquoi le rendement n'atteint pas 100 % :</strong> même un moteur idéal doit céder une partie de la chaleur au réfrigérant pour que le cycle puisse se refermer. Plus l'écart de température est grand, plus le rendement possible est élevé.</p>`,
        { fig: 'v1v4-tepelny-motor', caption: `Le moteur prélève la chaleur Q_h à la source chaude, transforme une partie en travail W et cède le reste Q_c au réfrigérant.` }
      ],
      examples: [
        { task: `Un moteur thermique fonctionne entre une source à $T_h=500\\,\\text{K}$ et un réfrigérant à $T_c=300\\,\\text{K}$. Quel est son rendement idéal ?`,
          steps: [`$\\eta=1-\\frac{T_c}{T_h}=1-\\frac{300}{500}$.`, `$\\eta=1-0{,}6=0{,}4$.`, `<strong>Résultat : $\\eta=40\\,\\%$</strong>`] },
        { task: `Un moteur de rendement $25\\,\\%$ reçoit de la source chaude une chaleur $Q_h=800\\,\\text{J}$. Quel travail effectue-t-il ?`,
          steps: [`$W=\\eta\\,Q_h=0{,}25\\cdot 800$.`, `<strong>Résultat : $W=200\\,\\text{J}$</strong>`] }
      ]
    },

    'v2-kinetika-plynov': {
      title: `Théorie cinétique des gaz`,
      summary: `Vision moléculaire du gaz : l'énergie cinétique moyenne des particules est proportionnelle à la température absolue.`,
      theory: [
        `<p>La <strong>théorie cinétique des gaz</strong> explique la pression et la température par le mouvement des molécules. La pression résulte des chocs des molécules contre les parois du récipient, et la température est la mesure de leur énergie cinétique moyenne.</p>`,
        `<p>L'énergie cinétique moyenne d'une molécule dans un gaz parfait est $\\overline{E_k}=\\frac{3}{2}k\\,T$, où $k\\approx 1{,}38\\cdot 10^{-23}\\,\\text{J/K}$ est la constante de Boltzmann. Elle ne dépend que de la température, et non de la nature du gaz.</p>`,
        `<p><strong>Pourquoi le facteur $\\frac{3}{2}$ :</strong> la molécule peut se déplacer dans trois directions, et chaque direction contribue pour moitié de $k\\,T$ à l'énergie. Les trois degrés de liberté donnent ensemble $\\frac{3}{2}k\\,T$.</p>`,
        `<p><strong>Pourquoi le kelvin :</strong> la formule est directement proportionnelle à la température absolue. À $0\\,\\text{K}$, l'énergie cinétique des molécules devrait être nulle ; c'est pourquoi on n'utilise jamais le degré Celsius dans cette formule.</p>`
      ],
      examples: [
        { task: `Quelle est l'énergie cinétique moyenne d'une molécule de gaz à la température $T=300\\,\\text{K}$ ? Utilise $k=1{,}38\\cdot 10^{-23}\\,\\text{J/K}$.`,
          steps: [`$\\overline{E_k}=\\frac{3}{2}k\\,T=1{,}5\\cdot 1{,}38\\cdot 10^{-23}\\cdot 300$.`, `$\\overline{E_k}\\approx 6{,}21\\cdot 10^{-21}\\,\\text{J}$.`, `<strong>Résultat : environ $6{,}21\\cdot 10^{-21}\\,\\text{J}$</strong>`] },
        { task: `Si la température du gaz double, comment varie l'énergie cinétique moyenne d'une molécule ?`,
          steps: [`L'énergie est directement proportionnelle à $T$.`, `<strong>Résultat : elle double</strong>`] }
      ]
    },

    'v2-boltzmann': {
      title: `Distribution de Boltzmann`,
      summary: `Répartition des particules entre les niveaux d'énergie à une température donnée et décroissance exponentielle de leur occupation.`,
      theory: [
        `<p>À l'équilibre thermique, les particules se répartissent entre les niveaux d'énergie de sorte que les niveaux supérieurs sont moins peuplés. Le rapport entre le nombre de particules sur les niveaux $E_2$ et $E_1$ est $\\frac{N_2}{N_1}=e^{-(E_2-E_1)/(k\\,T)}$, en supposant des niveaux de même dégénérescence.</p>`,
        `<p>L'exponentielle signifie qu'une petite différence d'énergie entre les niveaux a un grand effet lorsque la température est basse. À haute température, les niveaux s'égalisent et la population tend vers une répartition uniforme.</p>`,
        `<p><strong>Pourquoi précisément une exponentielle :</strong> la probabilité d'occupation d'un état d'énergie $E$ diminue, à chaque ajout fixe d'énergie, d'un facteur constant. C'est précisément ce qui conduit à une dépendance exponentielle.</p>`,
        `<p>Le résultat montre que la température n'est pas seulement une mesure de la chaleur, mais aussi une échelle qui détermine les états accessibles. La distribution est la base de tous les calculs statistiques des propriétés macroscopiques.</p>`,
        { fig: 'v1v4-boltzmann', caption: `Un niveau situé à ΔE = k·T au-dessus de l'état fondamental est, à la température T, peuplé environ e⁻¹ ≈ 0,37 fois moins que le niveau fondamental.` }
      ],
      examples: [
        { task: `Le niveau se trouve à $\\Delta E=kT$ au-dessus de l'état fondamental. Quel est le rapport $\\frac{N_2}{N_1}$ ?`,
          steps: [`$\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}=e^{-1}$.`, `<strong>Résultat : $\\frac{N_2}{N_1}\\approx 0{,}368$</strong>`] },
        { task: `Le niveau est situé $2\\,kT$ au-dessus. Quel est le rapport d'occupation ?`,
          steps: [`$\\frac{N_2}{N_1}=e^{-2}\\approx 0{,}135$.`, `<strong>Résultat : environ $0{,}135$</strong>`] }
      ]
    },

    'v2-statisticke': {
      title: `Explication statistique des phénomènes macroscopiques`,
      summary: `Relation de Boltzmann entre l'entropie et le nombre de microétats, et pourquoi les phénomènes macroscopiques ont un caractère probabiliste.`,
      theory: [
        `<p>La <strong>relation de Boltzmann</strong> relie l'entropie au nombre de microétats $W$ correspondant à un macroétat donné : $S=k\\ln W$. Le logarithme népérien signifie que l'entropie est additive lorsque deux systèmes indépendants sont réunis.</p>`,
        `<p>Pour $N$ particules indépendantes, dont chacune peut se trouver dans l'un de deux états, le nombre de microétats est $W=2^N$. L'entropie vaut alors $S=k\\,N\\ln 2$ : elle croît proportionnellement au nombre de particules.</p>`,
        `<p><strong>Pourquoi les phénomènes macroscopiques sont probabilistes :</strong> les macroétats ayant un grand nombre de microétats se produisent beaucoup plus souvent. Pour une mole de particules, la différence de probabilités est si énorme qu'une diminution spontanée de l'entropie n'est pratiquement jamais observée.</p>`,
        `<p><strong>Pourquoi le logarithme :</strong> le nombre de microétats croît exponentiellement avec le nombre de particules ; son logarithme en fait une grandeur linéaire, que l'on peut raisonnablement additionner et comparer.</p>`
      ],
      examples: [
        { task: `Un système comporte $N=3$ particules indépendantes, chacune à deux états. Combien de microétats $W$ possède-t-il ?`,
          steps: [`$W=2^N=2^3$.`, `<strong>Résultat : $W=8$</strong>`] },
        { task: `Quelle est la valeur de $S/k$ pour $N=4$ particules à deux états ? Arrondis à 2 décimales.`,
          steps: [`$W=2^4=16$, donc $\\frac{S}{k}=\\ln 16$.`, `$\\ln 16=4\\ln 2\\approx 2{,}77$.`, `<strong>Résultat : $\\frac{S}{k}\\approx 2{,}77$</strong>`] }
      ]
    },

    'v3-elektricke-pole': {
      title: `Champ électrique et potentiel électrique`,
      summary: `Intensité et potentiel d'une charge ponctuelle, principe de superposition et travail dans un champ électrique.`,
      theory: [
        `<p>L'<strong>intensité du champ électrique</strong> en un point est la force exercée sur une charge d'essai positive, divisée par sa valeur : $\\vec E=\\frac{\\vec F}{q}$, en unités de $\\text{V/m}$. Le champ est une propriété de l'espace, et non de la charge d'essai.</p>`,
        `<p>Pour une charge ponctuelle $Q$ à la distance $r$, on a $E=k\\frac{Q}{r^2}$, où $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$. La direction du champ est radiale : il s'éloigne de la charge positive et se dirige vers la charge négative.</p>`,
        `<p>Le <strong>potentiel électrique</strong> est l'énergie par unité de charge : $V=k\\frac{Q}{r}$. Le travail lors du déplacement d'une charge $q$ entre deux points vaut $W=q\\,\\Delta V$ et ne dépend pas du chemin, seulement des points de départ et d'arrivée.</p>`,
        `<p><strong>Superposition :</strong> les champs de plusieurs charges s'additionnent vectoriellement, tandis que les potentiels s'additionnent comme des scalaires. C'est pourquoi le potentiel est plus simple à calculer que l'intensité.</p>`,
        { fig: 'v1v4-elektricke-pole', caption: `Les lignes de champ d'une charge ponctuelle positive partent radialement vers l'extérieur. L'intensité décroît avec le carré de la distance.` }
      ],
      examples: [
        { task: `Une charge ponctuelle $Q=2\\,\\mu\\text{C}$ se trouve à la distance $r=3\\,\\text{m}$. Quelle est l'intensité du champ en kV/m ? Utilise $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$.`,
          steps: [`$E=k\\frac{Q}{r^2}=8{,}99\\cdot\\frac{2}{3^2}$.`, `$E\\approx 2{,}00\\,\\text{kV/m}$`, `<strong>Résultat : environ $2{,}00\\,\\text{kV/m}$</strong>`] },
        { task: `Comment varie l'intensité du champ d'une charge ponctuelle si la distance double ?`,
          steps: [`L'intensité est proportionnelle à $\\frac{1}{r^2}$.`, `$\\frac{1}{(2r)^2}=\\frac{1}{4r^2}$.`, `<strong>Résultat : elle est divisée par quatre</strong>`] }
      ]
    },

    'v3-gauss': {
      title: `Théorème de Gauss`,
      summary: `Flux électrique à travers une surface fermée et son lien avec la charge contenue à l'intérieur de la surface.`,
      theory: [
        `<p>Le <strong>flux électrique</strong> à travers une surface $S$ est $\\Phi_E=\\oint \\vec E\\cdot d\\vec S$, c'est-à-dire la somme des composantes du champ perpendiculaires à la surface. Son unité est $\\text{N\\,m}^2/\\text{C}$.</p>`,
        `<p>Le <strong>théorème de Gauss</strong> affirme que le flux à travers une surface fermée est proportionnel à la charge contenue à l'intérieur de la surface : $\\oint \\vec E\\cdot d\\vec S=\\frac{Q_{\\text{intérieur}}}{\\varepsilon_0}$, où $\\varepsilon_0\\approx 8{,}854\\cdot 10^{-12}\\,\\text{F/m}$.</p>`,
        `<p><strong>Pourquoi cela est vrai :</strong> les lignes de champ partent des charges positives et arrivent aux charges négatives. Le flux à travers une surface fermée capte donc exactement autant de lignes qu'il y a de charge à l'intérieur, quelle que soit la forme de la surface.</p>`,
        `<p>Le théorème de Gauss est avantageux pour les problèmes à symétrie, par exemple une sphère ou un plan infini chargé. Sur une surface bien choisie, le champ peut être sorti de l'intégrale, et le calcul devient simple.</p>`,
        { fig: 'v1v4-gauss', caption: `Le flux total à travers une surface fermée ne dépend que de la charge située à l'intérieur de la surface, Φ = Q/ε₀, quelle que soit la forme de la surface.` }
      ],
      examples: [
        { task: `Une charge $Q=1\\,\\mu\\text{C}$ traverse une surface fermée. Quel est le flux total à travers cette surface, si $\\varepsilon_0=8{,}854\\cdot 10^{-12}\\,\\text{F/m}$ ?`,
          steps: [`$\\Phi_E=\\frac{Q}{\\varepsilon_0}=\\frac{10^{-6}}{8{,}854\\cdot 10^{-12}}$.`, `$\\Phi_E\\approx 1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$`, `<strong>Résultat : environ $1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$</strong>`] },
        { task: `La charge à l'intérieur de la surface double. Comment varie le flux ?`,
          steps: [`Le flux est directement proportionnel à la charge.`, `<strong>Résultat : il double</strong>`] }
      ]
    },

    'v3-elektricky-prud': {
      title: `Courant électrique et circuits électriques`,
      summary: `Loi d'Ohm, résistances en série et en parallèle et courant total fourni par la source.`,
      theory: [
        `<p>Le <strong>courant électrique</strong> est la quantité de charge traversant une section par unité de temps : $I=\\frac{\\Delta Q}{\\Delta t}$, en ampères. Le sens du courant est conventionnellement celui du mouvement des charges positives.</p>`,
        `<p><strong>La loi d'Ohm</strong> : la tension aux bornes d'un conducteur est proportionnelle au courant, $U=R\\,I$, où $R$ est la résistance en ohms. En montage série, les résistances s'additionnent, $R=R_1+R_2$.</p>`,
        `<p>En <strong>montage parallèle</strong>, la tension est la même sur les deux branches et les courants s'additionnent. La résistance équivalente est inférieure à la plus petite des résistances : $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.</p>`,
        `<p><strong>Pourquoi la résistance est plus faible en parallèle :</strong> la seconde branche offre au courant un chemin supplémentaire ; un courant plus intense traverse donc l'ensemble sous la même tension. La source fournit ainsi un courant plus grand que s'il n'y avait qu'une seule branche.</p>`,
        { fig: 'v1v4-paralelne', caption: `En montage parallèle, la tension est la même sur les deux branches et le courant total I est la somme des courants des branches.` }
      ],
      examples: [
        { task: `Deux résistances $R_1=6\\,\\Omega$ et $R_2=3\\,\\Omega$ sont montées en parallèle sous la tension $U=6\\,\\text{V}$. Quel est le courant total fourni par la source ?`,
          steps: [`$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$, donc $R=2\\,\\Omega$.`, `$I=\\frac{U}{R}=\\frac{6}{2}$.`, `<strong>Résultat : $I=3\\,\\text{A}$</strong>`] },
        { task: `Des résistances de $4\\,\\Omega$ et $6\\,\\Omega$ sont montées en série sous la tension $10\\,\\text{V}$. Quel courant circule ?`,
          steps: [`$R=4+6=10\\,\\Omega$.`, `$I=\\frac{10}{10}$.`, `<strong>Résultat : $I=1\\,\\text{A}$</strong>`] }
      ]
    },

    'v3-magneticke-pole': {
      title: `Champ magnétique et force magnétique`,
      summary: `Force de Lorentz sur une charge en mouvement et sur un conducteur parcouru par un courant dans un champ magnétique.`,
      theory: [
        `<p>L'<strong>induction magnétique</strong> $\\vec B$ décrit le champ magnétique ; son unité est le tesla, $1\\,\\text{T}=1\\,\\text{N/(A\\,m)}$. Le champ n'exerce une force que sur les charges en mouvement ; une charge immobile ne réagit pas à la force magnétique.</p>`,
        `<p>La <strong>force de Lorentz</strong> agissant sur une charge $q$ se déplaçant à la vitesse $\\vec v$ est $\\vec F=q\\,\\vec v\\times\\vec B$. Son module vaut $F=q\\,v\\,B\\sin\\alpha$, où $\\alpha$ est l'angle entre $\\vec v$ et $\\vec B$.</p>`,
        `<p><strong>Le sens de la force</strong> se détermine par la règle de la main droite : les doigts indiquent le sens de la vitesse, la paume celui du champ, et le pouce celui de la force pour une charge positive. Pour une charge négative, la force est de sens opposé.</p>`,
        `<p><strong>Pourquoi la force est perpendiculaire à la vitesse :</strong> la force magnétique ne travaille pas, elle ne modifie que la direction du mouvement. La particule décrit donc un cercle dans un champ perpendiculaire, elle n'accélère pas. C'est pourquoi les champs magnétiques servent à courber les trajectoires des particules.</p>`,
        { fig: 'v1v4-lorentz', caption: `La force de Lorentz sur une charge positive traversant le champ perpendiculairement est perpendiculaire à la vitesse et au champ. Elle modifie la direction du mouvement, et non sa vitesse.` }
      ],
      examples: [
        { task: `Un électron traverse perpendiculairement un champ d'induction $B=0{,}2\\,\\text{T}$ à la vitesse $v=10^{5}\\,\\text{m/s}$. Quelle est l'intensité de la force, si $q=1{,}6\\cdot 10^{-19}\\,\\text{C}$ ?`,
          steps: [`$\\alpha=90^\\circ$, donc $\\sin\\alpha=1$.`, `$F=qvB=1{,}6\\cdot 10^{-19}\\cdot 10^{5}\\cdot 0{,}2$.`, `<strong>Résultat : $F=3{,}2\\cdot 10^{-15}\\,\\text{N}$</strong>`] },
        { task: `Une particule de charge $q=2\\,\\mu\\text{C}$ traverse à la vitesse $v=300\\,\\text{m/s}$ perpendiculairement au champ $B=0{,}5\\,\\text{T}$. Quelle est la force en micronewtons ?`,
          steps: [`$F=qvB=2\\cdot 300\\cdot 0{,}5$ en unités de $\\mu\\text{N}$.`, `<strong>Résultat : $F=300\\,\\mu\\text{N}$</strong>`] }
      ]
    },

    'v3-indukcia': {
      title: `Induction électromagnétique`,
      summary: `Loi de Faraday : une tension apparaît lorsque le flux magnétique à travers une boucle varie.`,
      theory: [
        `<p>Le <strong>flux magnétique</strong> à travers une surface $S$ est $\\Phi=B\\,S\\cos\\alpha$, où $\\alpha$ est l'angle entre le champ et la normale à la surface. Son unité est le weber, $1\\,\\text{Wb}=1\\,\\text{T\\,m}^2$.</p>`,
        `<p><strong>La loi de Faraday</strong> : dans une boucle fermée, il apparaît une tension proportionnelle à la vitesse de variation du flux, $U_i=-\\frac{\\Delta\\Phi}{\\Delta t}$. Le signe moins traduit la loi de Lenz : le courant induit s'oppose à la variation du flux.</p>`,
        `<p><strong>Comment la tension apparaît :</strong> par variation de l'induction, de la surface, ou par rotation de la boucle dans le champ. Si le flux est constant, aucune tension n'apparaît, même si le champ est intense.</p>`,
        `<p><strong>Pourquoi on divise par le temps :</strong> la tension dépend de la rapidité de variation du flux, et non de sa grandeur. Une variation rapide donne une tension plus grande qu'une variation lente, même pour la même variation totale du flux.</p>`,
        { fig: 'v1v4-tok-indukcia', caption: `Le flux magnétique à travers une surface vaut Φ = B·S·cos α, où α est l'angle entre le champ B et la normale n à la surface.` }
      ],
      examples: [
        { task: `La surface de la boucle est $S=0{,}5\\,\\text{m}^2$ et le champ, perpendiculaire à elle, varie de $\\Delta B=4\\,\\text{T}$ en $2\\,\\text{s}$. Quelle tension est induite ?`,
          steps: [`$U_i=\\frac{\\Delta\\Phi}{\\Delta t}=\\frac{S\\,\\Delta B}{\\Delta t}=\\frac{0{,}5\\cdot 4}{2}$.`, `<strong>Résultat : $U_i=1\\,\\text{V}$</strong>`] },
        { task: `Le flux à travers la surface est constant. Quelle tension est induite ?`,
          steps: [`La tension est proportionnelle à la variation du flux, et $\\Delta\\Phi=0$.`, `<strong>Résultat : $U_i=0\\,\\text{V}$</strong>`] }
      ]
    },

    'v3-maxwell': {
      title: `Équations de Maxwell`,
      summary: `Quatre équations reliant les champs électrique et magnétique, et leur application au calcul du champ d'un conducteur parcouru par un courant.`,
      theory: [
        `<p>Les <strong>équations de Maxwell</strong> sous forme intégrale sont au nombre de quatre : le théorème de Gauss pour le champ électrique, le théorème de Gauss pour le champ magnétique (il n'existe pas de charges magnétiques), la loi de Faraday de l'induction et la loi d'Ampère-Maxwell. Ensemble, elles décrivent tous les phénomènes électromagnétiques classiques.</p>`,
        `<p>La <strong>loi d'Ampère-Maxwell</strong> affirme que la circulation du champ magnétique le long d'une courbe fermée est proportionnelle au courant qui la traverse et à la variation du flux électrique : $\\oint \\vec B\\cdot d\\vec l=\\mu_0 I+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}$. Pour les phénomènes stationnaires, seul le terme de courant subsiste.</p>`,
        `<p>De la loi d'Ampère pour un long conducteur rectiligne parcouru par le courant $I$, à la distance $r$, on obtient $B=\\frac{\\mu_0 I}{2\\pi r}$, avec $\\mu_0=4\\pi\\cdot 10^{-7}\\,\\text{T\\,m/A}$.</p>`,
        `<p><strong>Pourquoi le courant de déplacement est important :</strong> sans le terme de variation du flux électrique, la loi ne serait pas compatible avec la conservation de la charge. Maxwell l'a ajouté, et de ces équations découle l'existence des ondes électromagnétiques.</p>`,
        { fig: 'v1v4-ampere', caption: `Autour d'un conducteur rectiligne parcouru par un courant, les lignes d'induction magnétique sont des cercles. L'induction B décroît avec la distance r.` }
      ],
      examples: [
        { task: `Un conducteur rectiligne est parcouru par le courant $I=10\\,\\text{A}$. Quelle est l'induction magnétique à la distance $r=0{,}2\\,\\text{m}$ ? Résultat en microteslas.`,
          steps: [`$B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{4\\pi\\cdot 10^{-7}\\cdot 10}{2\\pi\\cdot 0{,}2}$.`, `$B=\\frac{2\\cdot 10^{-7}\\cdot 10}{0{,}2}=10^{-5}\\,\\text{T}$.`, `<strong>Résultat : $B=10\\,\\mu\\text{T}$</strong>`] },
        { task: `Comment varie l'induction d'un conducteur parcouru par un courant si l'on double la distance au conducteur ?`,
          steps: [`$B$ est proportionnel à $\\frac{1}{r}$.`, `<strong>Résultat : elle est divisée par deux</strong>`] }
      ]
    },

    'v3-em-vlny': {
      title: `Ondes électromagnétiques`,
      summary: `Onde comme champs électrique et magnétique alternatifs, perpendiculaires à la direction de propagation, à la vitesse de la lumière c.`,
      theory: [
        `<p>La variation du champ électrique crée un champ magnétique, et la variation du champ magnétique crée un champ électrique. Leur soutien mutuel se propage dans l'espace sous forme d'une <strong>onde électromagnétique</strong>. Dans le vide, sa vitesse est $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        `<p>L'onde a une fréquence $f$ et une longueur d'onde $\\lambda$. On a la relation $c=\\lambda\\,f$, d'où $\\lambda=\\frac{c}{f}$. Plus la fréquence est élevée, plus la longueur d'onde est courte.</p>`,
        `<p>Les champs électrique et magnétique d'une onde sont perpendiculaires entre eux et tous deux perpendiculaires à la direction de propagation. C'est pourquoi l'onde électromagnétique est <em>transversale</em>.</p>`,
        `<p><strong>Pourquoi c'est important :</strong> les rayonnements radio, lumineux et les rayons X sont de même nature. Ils ne diffèrent que par leur fréquence, donc par leur longueur d'onde, ce qui explique leurs différentes utilisations.</p>`,
        { fig: 'v1v4-em-vlna', caption: `Les composantes électrique et magnétique de l'onde oscillent en phase, sont perpendiculaires entre elles et toutes deux perpendiculaires à la direction de propagation c.` }
      ],
      examples: [
        { task: `Un émetteur fonctionne à la fréquence $f=100\\,\\text{MHz}$. Quelle est la longueur d'onde de l'onde dans l'air ?`,
          steps: [`$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{100\\cdot 10^{6}}$.`, `<strong>Résultat : $\\lambda=3\\,\\text{m}$</strong>`] },
        { task: `La longueur d'onde vaut $\\lambda=0{,}5\\,\\text{m}$. Quelle est la fréquence de l'onde ?`,
          steps: [`$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{0{,}5}$.`, `<strong>Résultat : $f=6\\cdot 10^{8}\\,\\text{Hz}=600\\,\\text{MHz}$</strong>`] }
      ]
    },

    'v3-sirenie': {
      title: `Propagation du rayonnement électromagnétique`,
      summary: `Vitesse de la lumière dans la matière, indice de réfraction et influence de la permittivité et de la perméabilité du milieu.`,
      theory: [
        `<p>Dans le vide, le rayonnement électromagnétique se propage à la vitesse $c$ ; dans la matière, sa vitesse est plus faible. <strong>L'indice de réfraction</strong> $n=\\frac{c}{v}$ indique de combien de fois la vitesse dans la matière est plus petite.</p>`,
        `<p>Pour un milieu non magnétique de permittivité relative $\\varepsilon_r$ et de perméabilité $\\mu_r=1$, on a $n=\\sqrt{\\varepsilon_r\\,\\mu_r}=\\sqrt{\\varepsilon_r}$. Un diélectrique de plus grande permittivité ralentit donc l'onde.</p>`,
        `<p><strong>Pourquoi l'onde ralentit :</strong> le champ électrique de l'onde polarise les atomes de la matière, leurs oscillations sont retardées et l'onde résultante se propage plus lentement. La fréquence ne change pas lors de l'entrée dans la matière ; ce sont la vitesse et la longueur d'onde qui changent.</p>`,
        `<p>Ce phénomène explique la réfraction de la lumière à l'interface entre deux milieux, ainsi que le principe des lentilles et des fibres optiques.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: `En entrant dans la matière, la vitesse de l'onde diminue, donc sa longueur d'onde se raccourcit. La fréquence reste la même.` }
      ],
      examples: [
        { task: `Un milieu a une permittivité relative $\\varepsilon_r=4$. Quel est son indice de réfraction ?`,
          steps: [`$n=\\sqrt{\\varepsilon_r}=\\sqrt{4}$.`, `<strong>Résultat : $n=2$</strong>`] },
        { task: `Quelle est la vitesse de la lumière dans un milieu d'indice de réfraction $n=2$, si $c=3\\cdot 10^{8}\\,\\text{m/s}$ ?`,
          steps: [`$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{2}$.`, `<strong>Résultat : $v=1{,}5\\cdot 10^{8}\\,\\text{m/s}$</strong>`] }
      ]
    },

    'v4-vlnenie': {
      title: `Ondes mécaniques et électromagnétiques`,
      summary: `Ce qui est transporté lors de la propagation d'une onde, et pourquoi les ondes mécaniques ont besoin d'une matière, contrairement aux ondes électromagnétiques.`,
      theory: [
        `<p>Une onde est la propagation d'oscillations dans l'espace. La matière ne se déplace pas pendant ce processus ; ce sont l'<strong>énergie</strong> et l'<strong>information</strong> qui sont transportées. Selon ce qui oscille, on distingue les ondes <strong>mécaniques</strong> (c'est la matière qui oscille, par exemple le son, les vagues sur l'eau, les ondes sismiques) et les ondes <strong>électromagnétiques</strong> (ce sont le champ électrique et le champ magnétique qui oscillent, par exemple la lumière, les ondes radio, les rayons X).</p>`,
        `<p>Une onde mécanique a besoin d'un <strong>milieu matériel</strong>, car chaque particule met en oscillation sa voisine. C'est pourquoi le son ne se propage pas dans le vide. Une onde électromagnétique se propage aussi dans le vide, car les oscillations du champ n'ont besoin d'aucune particule pour les transmettre.</p>`,
        `<p>Selon la direction des oscillations, on distingue les ondes <strong>transversales</strong> (oscillations perpendiculaires à la direction de propagation, par exemple une onde sur une corde et la lumière) et les ondes <strong>longitudinales</strong> (oscillations dans la direction de propagation, par exemple le son dans les gaz). La vitesse du son dans l'air est d'environ $340\\,\\text{m/s}$, la vitesse de la lumière dans le vide est $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        { fig: 'obr-vlna', caption: `Onde transversale : la longueur d'onde λ est la distance entre deux points voisins en phase.` }
      ],
      examples: [
        { task: `La lumière du Soleil parvient jusqu'à la Terre à travers l'espace vide. S'agit-il d'une onde mécanique ou électromagnétique ?`,
          steps: [`Entre le Soleil et la Terre il n'y a pas de matière, donc l'onde se propage dans le vide.`, `<strong>Résultat : il s'agit d'une onde électromagnétique.</strong>`] },
        { task: `Pourquoi n'entend-on pas le son dans l'espace vide entre deux vaisseaux spatiaux ?`,
          steps: [`Le son est une onde mécanique, il a besoin d'un milieu matériel.`, `Dans le vide il n'y a aucune particule, donc les oscillations n'ont personne à qui se transmettre.`, `<strong>Résultat : le son ne se propage pas dans le vide.</strong>`] }
      ]
    },

    'v4-frekvencia': {
      title: `Fréquence, longueur d'onde et amplitude`,
      summary: `Grandeurs décrivant une onde et la relation v = λ·f qui les lie.`,
      theory: [
        `<p>Une onde se décrit par trois grandeurs fondamentales : l'<strong>amplitude</strong> $A$ (le plus grand écart par rapport à la position d'équilibre), la <strong>fréquence</strong> $f$ (nombre d'oscillations par seconde, unité $\\text{Hz}$) et la <strong>longueur d'onde</strong> $\\lambda$ (distance entre deux points voisins qui oscillent en phase).</p>`,
        `<p>La <strong>période</strong> $T=\\frac{1}{f}$ est la durée d'une oscillation. L'amplitude est liée à la <em>puissance</em> de l'onde (par exemple à l'intensité sonore ou à la luminosité de la lumière), tandis que la fréquence détermine la hauteur du son ou la couleur de la lumière.</p>`,
        `<p>La vitesse de propagation de l'onde est $v=\\lambda\\cdot f$. Lors du passage dans un autre milieu, la vitesse et la longueur d'onde changent, mais <strong>la fréquence ne change pas</strong> : elle est déterminée par la source des oscillations, et non par le milieu.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: `En entrant dans la matière, la vitesse de l'onde diminue, donc sa longueur d'onde se raccourcit. La fréquence reste la même.` }
      ],
      examples: [
        { task: `Une onde a la fréquence $f=50\\,\\text{Hz}$ et la longueur d'onde $\\lambda=6\\,\\text{m}$. Quelle est sa vitesse ?`,
          steps: [`$v=\\lambda\\cdot f=6\\cdot 50$.`, `<strong>Résultat : $v=300\\,\\text{m/s}$</strong>`] },
        { task: `Quelle est la période d'une onde de fréquence $f=4\\,\\text{Hz}$ ?`,
          steps: [`$T=\\frac{1}{f}=\\frac{1}{4}$.`, `<strong>Résultat : $T=0{,}25\\,\\text{s}$</strong>`] }
      ]
    },

    'v4-interferencia': {
      title: `Interférence et diffraction`,
      summary: `Composition des ondes : quand elles se renforcent ou s'affaiblissent, et pourquoi les ondes se courbent autour des obstacles.`,
      theory: [
        `<p><strong>Principe de superposition :</strong> le mouvement résultant en un point est la somme des oscillations de toutes les ondes qui y parviennent. Si les ondes oscillent en phase (de manière cohérente), c'est la <strong>différence de marche</strong> $\\Delta d$ qui détermine le résultat.</p>`,
        `<p><strong>Le renforcement</strong> se produit lorsque la différence de marche est un multiple entier de la longueur d'onde : $\\Delta d=m\\,\\lambda$. <strong>L'affaiblissement</strong> se produit lorsque la différence de marche est un multiple impair de la demi-longueur d'onde : $\\Delta d=\\left(m+\\tfrac{1}{2}\\right)\\lambda$.</p>`,
        `<p><strong>La diffraction</strong> est la courbure d'une onde autour d'un obstacle ou à travers une fente étroite. Elle est plus marquée lorsque la dimension de l'obstacle est comparable à la longueur d'onde. C'est pourquoi le son se courbe facilement derrière un coin, alors que la lumière produit une ombre nette.</p>`,
        { fig: 'v1v4-interferencia', caption: `Des ondes en phase se renforcent pour une différence de marche m·λ ; en opposition de phase, elles s'affaiblissent pour (m + ½)·λ.` }
      ],
      examples: [
        { task: `Deux ondes cohérentes de longueur d'onde $\\lambda=0{,}5\\,\\text{m}$ ont une différence de marche $\\Delta d=1{,}25\\,\\text{m}$. Y a-t-il renforcement ou affaiblissement ?`,
          steps: [`$\\frac{\\Delta d}{\\lambda}=\\frac{1{,}25}{0{,}5}=2{,}5$.`, `Le nombre $2{,}5$ est un multiple impair de la demi-longueur d'onde : $2{,}5=\\left(2+\\tfrac{1}{2}\\right)$.`, `<strong>Résultat : affaiblissement.</strong>`] }
      ]
    },

    'v4-polarizacia': {
      title: `Polarisation de la lumière`,
      summary: `Caractère transversal de la lumière, polariseur et loi de Malus pour l'intensité après l'analyseur.`,
      theory: [
        `<p>La lumière est une onde transversale : le champ électrique oscille perpendiculairement à la direction de propagation. La lumière <strong>polarisée</strong> a des oscillations dans un seul plan. Une source ordinaire (ampoule, Soleil) émet de la lumière <strong>non polarisée</strong>, dont le plan d'oscillation change au hasard.</p>`,
        `<p>Le polariseur ne laisse passer que la composante des oscillations dans sa direction. Lors du passage de la lumière <strong>non polarisée</strong> à travers le premier polariseur, l'intensité est réduite de moitié.</p>`,
        `<p><strong>La loi de Malus :</strong> si une lumière polarisée linéairement d'intensité $I_0$ atteint un analyseur tourné d'un angle $\\varphi$, l'intensité après lui est $I=I_0\\cos^2\\varphi$. Le cosinus est au carré parce que seule la composante du champ dans la direction de l'axe passe, et que l'intensité est proportionnelle au carré de l'amplitude.</p>`,
        { fig: 'v1v4-polarizacia', caption: `L'analyseur ne laisse passer que la composante des oscillations dans sa direction, E·cos φ. L'intensité est proportionnelle à cos²φ.` }
      ],
      examples: [
        { task: `De la lumière polarisée linéairement d'intensité $I_0=80$ traverse un analyseur tourné de $60^\\circ$. Quelle est son intensité après lui ?`,
          steps: [`$\\cos^2 60^\\circ=\\left(\\tfrac{1}{2}\\right)^2=0{,}25$.`, `$I=80\\cdot 0{,}25=20$.`, `<strong>Résultat : $I=20$</strong>`] }
      ]
    },

    'v4-geometricka-optika': {
      title: `Optique géométrique et ondulatoire`,
      summary: `Indice de réfraction, vitesse de la lumière dans les matériaux et loi de Snell-Descartes de la réfraction.`,
      theory: [
        `<p>L'<strong>optique géométrique</strong> décrit la lumière comme des rayons qui se propagent en ligne droite, se réfléchissent selon la loi de la réflexion ($\\alpha=\\alpha'$) et se réfractent à l'interface entre deux milieux. L'optique ondulatoire explique les phénomènes que les rayons ne peuvent pas décrire, par exemple l'interférence et la diffraction.</p>`,
        `<p><strong>L'indice de réfraction</strong> $n=\\frac{c}{v}$ indique de combien de fois la lumière est plus lente dans le matériau que dans le vide. Dans l'eau, $n\\approx 1{,}33$ ; dans le verre, environ $1{,}5$. La vitesse de la lumière dans le matériau est $v=\\frac{c}{n}$.</p>`,
        `<p><strong>La loi de Snell-Descartes</strong> $n_1\\sin\\alpha=n_2\\sin\\beta$ indique comment le rayon se réfracte. Lors du passage dans un milieu optiquement plus dense ($n_2>n_1$), le rayon se rapproche de la normale ; lors du passage dans un milieu moins dense, il s'en éloigne.</p>`,
        { fig: 'v1v4-lom', caption: `En passant dans un milieu optiquement plus dense, le rayon se rapproche de la normale, de sorte que β est plus petit que α (n₂ > n₁).` }
      ],
      examples: [
        { task: `Quelle est la vitesse de la lumière dans un verre d'indice de réfraction $n=1{,}5$ ? Utilise $c=3\\cdot 10^{8}\\,\\text{m/s}$.`,
          steps: [`$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{1{,}5}$.`, `<strong>Résultat : $v=2\\cdot 10^{8}\\,\\text{m/s}$</strong>`] }
      ]
    },

    'v4-zobrazovanie': {
      title: `Formation d'images par lentilles et miroirs`,
      summary: `Équation de conjugaison pour une lentille convergente et détermination de la position de l'image.`,
      theory: [
        `<p>Une lentille convergente concentre les rayons parallèles au <strong>foyer</strong> situé à la distance $f$. Un objet situé à la distance $a$ devant la lentille forme une image à la distance $b$ derrière elle.</p>`,
        `<p><strong>L'équation de conjugaison</strong> s'applique aux lentilles minces et aux miroirs : $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$. C'est une relation entre trois grandeurs : si l'on en connaît deux, on calcule la troisième.</p>`,
        `<p>Si $a>f$, l'image est réelle et renversée. Attention à l'erreur : on additionne les inverses des distances, et non les distances elles-mêmes. La relation $b=a+f$ n'est pas valable.</p>`,
        { fig: 'v1v4-zobrazenie', caption: `Un objet situé à deux fois la distance focale donne une image réelle, renversée et de même taille, à la distance 2f.` }
      ],
      examples: [
        { task: `Un objet est situé à la distance $a=30\\,\\text{cm}$ devant une lentille convergente de foyer $f=15\\,\\text{cm}$. Où se forme l'image ?`,
          steps: [`$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{15}-\\frac{1}{30}=\\frac{1}{30}$.`, `<strong>Résultat : $b=30\\,\\text{cm}$</strong>`] }
      ]
    },

    'v4-lasery': {
      title: `Lasers et instruments optiques`,
      summary: `Propriétés de la lumière laser, calcul de la fréquence et grossissement d'une loupe.`,
      theory: [
        `<p>Le <strong>laser</strong> (amplification de la lumière par émission stimulée de rayonnement) produit une lumière aux propriétés qu'une source ordinaire n'a pas : elle est <strong>monochromatique</strong> (une seule longueur d'onde), <strong>cohérente</strong> (oscillations en phase) et forme un <strong>faisceau étroit</strong>. C'est pourquoi on peut la focaliser en une petite tache.</p>`,
        `<p>Pour toute lumière, on a $c=\\lambda\\cdot f$, donc la fréquence vaut $f=\\frac{c}{\\lambda}$. En optique, la longueur d'onde s'exprime souvent en nanomètres : $1\\,\\text{nm}=10^{-9}\\,\\text{m}$.</p>`,
        `<p><strong>Les instruments d'optique</strong> utilisent des lentilles pour agrandir. Une loupe de distance focale $f$ donne, pour une observation confortable, un grossissement $Z=\\frac{d}{f}$, où $d\\approx 250\\,\\text{mm}$ est la distance de vision distincte. Une focale plus courte signifie un grossissement plus grand.</p>`
      ],
      examples: [
        { task: `La lumière laser rouge a une longueur d'onde $\\lambda=650\\,\\text{nm}$. Quelle est sa fréquence en unités de $10^{14}\\,\\text{Hz}$ ?`,
          steps: [`$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{650\\cdot 10^{-9}}\\approx 4{,}6\\cdot 10^{14}\\,\\text{Hz}$.`, `<strong>Résultat : environ $4{,}6\\cdot 10^{14}\\,\\text{Hz}$</strong>`] }
      ]
    },

    'v4-vlakna': {
      title: `Principes des fibres optiques`,
      summary: `Réflexion totale à l'interface entre le cœur et la gaine, et angle critique.`,
      theory: [
        `<p>Une fibre optique guide la lumière à l'intérieur d'un cœur fin d'indice de réfraction $n_1$, entouré d'une gaine d'indice plus faible $n_2&lt;n_1$. La lumière est maintenue dans le cœur par <strong>réflexion totale</strong>, et non par réfraction, si bien qu'elle est presque sans perte.</p>`,
        `<p>La réflexion totale se produit lorsque l'angle d'incidence dépasse <strong>l'angle critique</strong> $\\alpha_c$, pour lequel $\\sin\\alpha_c=\\frac{n_2}{n_1}$. Pour une différence d'indices plus grande, l'angle critique est plus petit et la fibre capte davantage de lumière.</p>`,
        `<p>Le signal est transmis sous forme d'impulsions lumineuses. Les fibres sont utilisées dans Internet et les télécommunications, car la lumière transporte beaucoup d'informations sur de grandes distances et n'est pas perturbée par le champ électromagnétique.</p>`,
        { fig: 'v1v4-vlakno', caption: `La lumière est maintenue dans le cœur par réflexion totale, car elle arrive sous un angle supérieur à l'angle critique, où sin α_c = n₂/n₁.` }
      ],
      examples: [
        { task: `Le cœur d'une fibre a $n_1=1{,}5$ et la gaine $n_2=1{,}0$. Quel est le sinus de l'angle critique ?`,
          steps: [`$\\sin\\alpha_c=\\frac{n_2}{n_1}=\\frac{1{,}0}{1{,}5}$.`, `<strong>Résultat : $\\sin\\alpha_c\\approx 0{,}67$</strong>`] }
      ]
    }
  }
});
